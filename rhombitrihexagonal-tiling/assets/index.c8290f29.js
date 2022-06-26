const Ju=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Ju();function xr(e,r,n){return n.a=e,n.f=r,n}function $(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return xr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return xr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return xr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ba(e){return xr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return xr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Jt(e){return xr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function qt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Aa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function qu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Yu=[];function Zu(e){return e.length}var Qu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ku=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),ev=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var rv=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+nv()),r});function nv(e){return"<internals>"}function rn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hr(e,r){for(var n,a=[],t=_t(e,r,0,a);t&&(n=a.pop());t=_t(n.a,n.b,0,a));return t}function _t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&rn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=_i(e),r=_i(r));for(var t in e)if(!_t(e[t],r[t],n+1,a))return!1;return!0}$(hr);$(function(e,r){return!hr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var av=$(function(e,r){var n=O(e,r);return n<0?jc:n?Gf:Rc}),An=0;function z(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var L={$:0};function ar(e,r){return{$:1,a:e,b:r}}var tv=$(ar);function h(e){for(var r=L,n=e.length;n--;)r=ar(e[n],r);return r}function Fa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ov=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Ue(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(Fa(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return h(Fa(r).sort(function(n,a){var t=o(e,n,a);return t===Rc?0:t===jc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var iv=$(Math.pow);$(function(e,r){return r%e});var cv=$(function(e,r){var n=r%e;return e===0?rn(11):n>0&&e<0||n<0&&e>0?n+e:n}),lv=Math.PI,uv=Math.cos,vv=Math.sin,$v=Math.tan;$(Math.atan2);function fv(e){return e}function sv(e){return e===1/0||e===-1/0}var mv=Math.ceil,dv=Math.floor,pv=Math.round,bv=Math.sqrt,ii=Math.log,gv=isNaN;function hv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var _v=$(function(e,r){return e+r});function wv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function yv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function xv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Sv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Tv=$(function(e,r){return r.split(e)}),Cv=$(function(e,r){return r.join(e)}),Lv=x(function(e,r,n){return n.slice(e,r)});function Pv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var zv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),kv=$(function(e,r){return r.indexOf(e)>-1}),Mv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Dv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function fc(e){return e+""}function Bv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Av(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Fv(e){return Fa(e).join("")}function Vv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ev(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Rv(e){return{$:0,a:e}}function Yt(e){return{$:2,b:e}}var jv=Yt(function(e){return typeof e=="boolean"?ue(e):Qe("a BOOL",e)}),Nv=Yt(function(e){return typeof e=="number"?ue(e):Qe("a FLOAT",e)}),Gv=Yt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Qe("a STRING",e)});function Wv(e){return{$:3,b:e}}var Hv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var Xv=$(function(e,r){return{$:10,b:r,h:e}}),Uv=$(function(e,r){return Sr(e,[r])}),Iv=x(function(e,r,n){return Sr(e,[r,n])});E(function(e,r,n,a){return Sr(e,[r,n,a])});_e(function(e,r,n,a,t){return Sr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return Sr(e,[r,n,a,t,i])});Ba(function(e,r,n,a,t,i,c){return Sr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Sr(e,[r,n,a,t,i,c,l])});Jt(function(e,r,n,a,t,i,c,l,u){return Sr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return xe(o(lo,"This is not valid JSON! "+a.message,r))}});var sc=$(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Qe("null",r);case 3:return Jn(r)?ci(e.b,r,h):Qe("a LIST",r);case 4:return Jn(r)?ci(e.b,r,Ov):Qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Qe("an OBJECT with a field named `"+n+"`",r);var v=Ne(e.b,r[n]);return Oe(v)?v:xe(o(wi,n,v.a));case 7:var a=e.e;if(!Jn(r))return Qe("an ARRAY",r);if(a>=r.length)return Qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ne(e.b,r[a]);return Oe(v)?v:xe(o(Nc,a,v.a));case 8:if(typeof r!="object"||r===null||Jn(r))return Qe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Ne(e.b,r[i]);if(!Oe(v))return xe(o(wi,i,v.a));t=ar(z(i,v.a),t)}return ue(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ne(l[u],r);if(!Oe(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ne(e.b,r);return Oe(v)?Ne(e.h(v.a),r):v;case 11:for(var f=L,m=e.g;m.b;m=m.b){var v=Ne(m.a,r);if(Oe(v))return v;f=ar(v.a,f)}return xe(Wf(Ve(f)));case 1:return xe(o(lo,e.a,r));case 0:return ue(e.a)}}function ci(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!Oe(c))return xe(o(Nc,i,c.a));t[i]=c.a}return ue(n(t))}function Jn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ov(e){return o(os,e.length,function(r){return e[r]})}function Qe(e,r){return xe(o(lo,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&li(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return li(e.g,r.g)}}function li(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var Jv=$(function(e,r){return JSON.stringify(r,null,e)+""});function mc(e){return e}x(function(e,r,n){return n[e]=r,n});function jr(e){return{$:0,a:e}}function qv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var wt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Yv(e){return{$:5,b:e}}var Zv=0;function Zt(e){var r={$:0,e:Zv++,f:e,g:null,h:[]};return Qt(r),r}function dc(e){return sr(function(r){r(jr(Zt(e)))})}function pc(e,r){e.h.push(r),Qt(e)}var Qv=$(function(e,r){return sr(function(n){pc(e,r),n(jr(An))})}),Ya=!1,ui=[];function Qt(e){if(ui.push(e),!Ya){for(Ya=!0;e=ui.shift();)Kv(e);Ya=!1}}function Kv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Qt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Kt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Kt(e,r,n,a,t,i){var c=o(sc,e,r?r.flags:void 0);Oe(c)||rn(2);var l={},u=n(c.a),v=u.a,f=i(d,v),m=e$(l,d);function d(s,g){var b=o(a,s,v);f(v=b.a,g),$i(l,b.b,t(v))}return $i(l,u.b,t(v)),m?{ports:m}:{}}var rr={};function e$(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=n$(t,r)}return n}function r$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function n$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(wt,l,Yv(function(v){var f=v.a;return v.$===0?p(t,n,f,u):i&&c?C(a,n,f.i,f.j,u):p(a,n,i?f.i:f.j,u)}))}return n.h=Zt(o(wt,l,e.b))}var a$=$(function(e,r){return sr(function(n){e.g(r),n(jr(An))})});$(function(e,r){return o(Qv,e.h,{$:0,a:r})});function bc(e){return function(r){return{$:1,k:e,l:r}}}function t$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var vi=[],Za=!1;function $i(e,r,n){if(vi.push({p:e,q:r,r:n}),!Za){Za=!0;for(var a;a=vi.shift();)o$(a.p,a.q,a.r);Za=!1}}function o$(e,r,n){var a={};fa(!0,r,a,null),fa(!1,n,a,null);for(var t in e)pc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function fa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=i$(e,t,a,r.l);n[t]=c$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)fa(e,c.a,n,a);return;case 3:fa(e,r.o,n,{s:r.n,t:a});return}}function i$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function c$(e,r,n){return n=n||{i:L,j:L},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function l$(e){rr[e]&&rn(3)}$(function(e,r){return r});function u$(e,r){return l$(e),rr[e]={f:v$,u:r,a:$$},bc(e)}var v$=$(function(e,r){return function(n){return e(r(n))}});function $$(e,r){var n=L,a=rr[e].u,t=jr(null);rr[e].b=t,rr[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(sc,a,c);Oe(l)||rn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var sa,lr=typeof document!="undefined"?document:{};function eo(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function yt(e){return{$:0,a:e}}var gc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:ro(n),e:t,f:e,b:i}})}),mr=gc(void 0),f$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:ro(n),e:t,f:e,b:i}})}),s$=f$(void 0);function m$(e,r,n,a){return{$:3,d:ro(e),g:r,h:n,i:a}}var d$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Tr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Tr([e,r],function(){return e(r)})});x(function(e,r,n){return Tr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Tr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return Tr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return Tr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ba(function(e,r,n,a,t,i,c){return Tr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Tr([e,r,n,a,t,i,c,l],function(){return qt(e,r,n,a,t,i,c,l)})});Jt(function(e,r,n,a,t,i,c,l,u){return Tr([e,r,n,a,t,i,c,l,u],function(){return Aa(e,r,n,a,t,i,c,l,u)})});var hc=$(function(e,r){return{$:"a0",n:e,o:r}}),p$=$(function(e,r){return{$:"a1",n:e,o:r}}),_c=$(function(e,r){return{$:"a2",n:e,o:r}}),Fn=$(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function b$(e){return e=="script"?"p":e}function g$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(hc,r.n,h$(e,r.o)):r});function h$(e,r){var n=so(r);return{$:r.$,a:n?p(is,n<3?_$:w$,Be(e),r.a):o(ba,e,r.a)}}var _$=$(function(e,r){return z(e(r.a),r.b)}),w$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function ro(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?fi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?fi(c,t,i):c[t]=i}return r}function fi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return xt(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);sa&&e.c=="a"&&c.addEventListener("click",sa(c)),xt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)eo(c,br(n===1?l[u]:l[u].b,r));return c}function xt(e,r,n){for(var a in n){var t=n[a];a==="a1"?y$(e,t):a==="a0"?T$(e,r,t):a==="a3"?x$(e,t):a==="a4"?S$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function y$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function x$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function S$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function T$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=C$(r,i),e.addEventListener(t,c,no&&{passive:so(i)<2}),a[t]=c}}var no;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){no=!0}}))}catch{}function C$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!Oe(i)){for(var c=so(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=f.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);f=f.p}f(u,v)}}return n.q=r,n}function L$(e,r){return e.$==r.$&&Or(e.a,r.a)}function wc(e,r){var n=[];return Je(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=F$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];Je(e.k,r.k,f,0),f.length>0&&we(n,1,a,f);return;case 4:for(var m=e.j,d=r.j,s=!1,g=e.k;g.$===4;)s=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)s=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(s&&m.length!==d.length){we(n,0,a,r);return}(s?!P$(m,d):m!==d)&&we(n,2,a,d),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:si(e,r,n,a,z$);return;case 2:si(e,r,n,a,k$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=ao(e.d,r.d);w&&we(n,4,a,w);var y=r.i(e.g,r.g);y&&we(n,5,a,y);return}}}function P$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function si(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=ao(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function ao(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ao(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&L$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function z$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=t[v];Je(f,i[v],n,++a),a+=f.b||0}}function k$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,m=0,d=0,s=a;m<v&&d<f;){var g=l[m],b=u[d],w=g.a,y=b.a,_=g.b,T=b.b,M=void 0,G=void 0;if(w===y){s++,Je(_,T,t,s),s+=_.b||0,m++,d++;continue}var j=l[m+1],R=u[d+1];if(j){var N=j.a,W=j.b;G=y===N}if(R){var F=R.a,Y=R.b;M=w===F}if(M&&G){s++,Je(_,Y,t,s),vn(i,t,w,T,d,c),s+=_.b||0,s++,$n(i,t,w,W,s),s+=W.b||0,m+=2,d+=2;continue}if(M){s++,vn(i,t,y,T,d,c),Je(_,Y,t,s),s+=_.b||0,m+=1,d+=2;continue}if(G){s++,$n(i,t,w,_,s),s+=_.b||0,s++,Je(W,T,t,s),s+=W.b||0,m+=2,d+=1;continue}if(j&&N===F){s++,$n(i,t,w,_,s),vn(i,t,y,T,d,c),s+=_.b||0,s++,Je(W,Y,t,s),s+=W.b||0,m+=2,d+=2;continue}break}for(;m<v;){s++;var g=l[m],_=g.b;$n(i,t,g.a,_,s),s+=_.b||0,m++}for(;d<f;){var Q=Q||[],b=u[d];vn(i,t,b.a,b.b,void 0,Q),d++}(t.length>0||c.length>0||Q)&&we(n,8,a,{w:t,x:c,y:Q})}var yc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+yc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}$n(e,r,n+yc,a,t)}function xc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)xc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&fn(e,r,f,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var f=m.w;f.length>0&&fn(e,r,f,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var s=r.k;s.$===4;)s=s.k;return fn(e,s,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=d===1?g[w]:g[w].b,_=t+(y.b||0);if(t<=u&&u<=_&&(a=fn(b[w],y,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Sc(e,r,n,a){return n.length===0?e:(xc(e,r,n,a),ma(e,n))}function ma(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=M$(t,a);t===e&&(e=i)}return e}function M$(e,r){switch(r.$){case 0:return D$(e,r.s,r.u);case 4:return xt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ma(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ma(e,i.w),e;case 8:return B$(e,r);case 5:return r.s(e);default:rn(10)}}function D$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function B$(e,r){var n=r.s,a=A$(n.y,r);e=ma(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&eo(e,a),e}function A$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;eo(n,i.c===2?i.s:br(i.z,r.u))}return n}}function to(e){if(e.nodeType===3)return yt(e.textContent);if(e.nodeType!==1)return yt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Fn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=ar(to(v[a]),u);return p(mr,l,r,u)}function F$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var V$=E(function(e,r,n,a){return Kt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=to(l);return Tc(i,function(v){var f=c(v),m=wc(u,f);l=Sc(l,u,m,t),u=f})})});E(function(e,r,n,a){return Kt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=lr.title,v=lr.body,f=to(v);return Tc(i,function(m){sa=c;var d=l(m),s=mr("body")(L)(d.eu),g=wc(f,s);v=Sc(v,f,g,t),f=s,sa=0,u!==d.fK&&(lr.title=u=d.fK)})})});var da=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Tc(e,r){r(e);var n=0;function a(){n=n===1?0:(da(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&da(a),n=2)}}$(function(e,r){return o(bo,mo,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(bo,mo,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(bo,mo,sr(function(){history.replaceState({},"",r),e()}))});var E$={addEventListener:function(){},removeEventListener:function(){}},R$=typeof window!="undefined"?window:E$;x(function(e,r,n){return dc(sr(function(a){function t(i){Zt(n(i))}return e.addEventListener(r,t,no&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ne(e,r);return Oe(n)?re(n.a):q});function Cc(e,r){return sr(function(n){da(function(){var a=document.getElementById(e);n(a?jr(r(a)):qv(ls(e)))})})}function j$(e){return sr(function(r){da(function(){r(jr(e()))})})}$(function(e,r){return Cc(r,function(n){return n[e](),An})});$(function(e,r){return j$(function(){return R$.scroll(e,r),An})});x(function(e,r,n){return Cc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,An})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var N$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var G$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?re(m):q}a.push(C(gl,u[0],u.index,t,h(f))),l=r.lastIndex}return r.lastIndex=c,h(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(C(gl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var W$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/H$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function H$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var oo=new Float64Array(3),mi=new Float64Array(3),di=new Float64Array(3),X$=x(function(e,r,n){return new Float64Array([e,r,n])}),U$=function(e){return e[0]},I$=function(e){return e[1]},O$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var J$=function(e){return new Float64Array([e.fT,e.fX,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Lc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Lc);function Pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),pa(Lc(e,r,n),n)}$(Pc);function zc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function pa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/zc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var q$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(sn);function St(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(St);$(function(e,r){var n,a=oo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var Y$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Z$=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},Q$=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/K$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function K$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var ef=new Float64Array(16),rf=new Float64Array(16),nf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},af=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function kc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ue(kc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return kc(c,l,i,t,n,a)});function Mc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ue(Mc);E(function(e,r,n,a){return Mc(e,r,n,a,-1,1)});function Dc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],m=e[8],d=e[9],s=e[10],g=e[11],b=e[12],w=e[13],y=e[14],_=e[15],T=r[0],M=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],Y=r[8],Q=r[9],oe=r[10],ve=r[11],te=r[12],se=r[13],Me=r[14],Te=r[15];return n[0]=a*T+l*M+m*G+b*j,n[1]=t*T+u*M+d*G+w*j,n[2]=i*T+v*M+s*G+y*j,n[3]=c*T+f*M+g*G+_*j,n[4]=a*R+l*N+m*W+b*F,n[5]=t*R+u*N+d*W+w*F,n[6]=i*R+v*N+s*W+y*F,n[7]=c*R+f*N+g*W+_*F,n[8]=a*Y+l*Q+m*oe+b*ve,n[9]=t*Y+u*Q+d*oe+w*ve,n[10]=i*Y+v*Q+s*oe+y*ve,n[11]=c*Y+f*Q+g*oe+_*ve,n[12]=a*te+l*se+m*Me+b*Te,n[13]=t*te+u*se+d*Me+w*Te,n[14]=i*te+v*se+s*Me+y*Te,n[15]=c*te+f*se+g*Me+_*Te,n}$(Dc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],m=e[10],d=e[12],s=e[13],g=e[14],b=r[0],w=r[1],y=r[2],_=r[4],T=r[5],M=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+f*y,n[2]=i*b+u*w+m*y,n[3]=0,n[4]=a*_+c*T+v*M,n[5]=t*_+l*T+f*M,n[6]=i*_+u*T+m*M,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+f*R,n[10]=i*G+u*j+m*R,n[11]=0,n[12]=a*N+c*W+v*F+d,n[13]=t*N+l*W+f*F+s,n[14]=i*N+u*W+m*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=pa(r,oo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/zc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,f=Math.sin(e),m=i*f,d=c*f,s=l*f,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,_=g+s,T=b-d,M=g-s,G=c*c*v+u,j=w+m,R=b+d,N=w-m,W=l*l*v+u,F=n[0],Y=n[1],Q=n[2],oe=n[3],ve=n[4],te=n[5],se=n[6],Me=n[7],Te=n[8],dr=n[9],pr=n[10],qa=n[11],Xu=n[12],Uu=n[13],Iu=n[14],Ou=n[15];return a[0]=F*y+ve*_+Te*T,a[1]=Y*y+te*_+dr*T,a[2]=Q*y+se*_+pr*T,a[3]=oe*y+Me*_+qa*T,a[4]=F*M+ve*G+Te*j,a[5]=Y*M+te*G+dr*j,a[6]=Q*M+se*G+pr*j,a[7]=oe*M+Me*G+qa*j,a[8]=F*R+ve*N+Te*W,a[9]=Y*R+te*N+dr*W,a[10]=Q*R+se*N+pr*W,a[11]=oe*R+Me*N+qa*W,a[12]=Xu,a[13]=Uu,a[14]=Iu,a[15]=Ou,a});function tf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(tf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function of(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(of);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],m=a[6],d=a[7],s=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=f,t[6]=m,t[7]=d,t[8]=s,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+s*n+a[12],t[13]=c*e+f*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],m=r[5],d=r[6],s=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=d,n[7]=s,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+f*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+w*i+r[14],n[15]=v*a+s*t+y*i+r[15],n});x(function(e,r,n){var a=Pc(e,r,oo),t=pa(St(n,a,mi),mi),i=pa(St(a,t,di),di),c=ef,l=rf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Dc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var pi=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function io(e){for(var r=0;e.b;e=e.b)r++;return r}var cf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},lf=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),uf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),vf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),$f=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),ff=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),df=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),bf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},gf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},hf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},_f=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Bc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Ac=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},wf=function(e){e.gl.disable(e.gl.CULL_FACE)},yf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},xf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Sf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},bi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Tf=[gf,hf,_f,Bc,Ac,wf,yf,xf,Sf];function gi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Cf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Fc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Lf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(s,g,b,w,y){var _;if(t===1)for(_=0;_<g;_++)s[b++]=g===1?w[y]:w[y][_];else i.forEach(function(T){for(_=0;_<g;_++)s[b++]=g===1?w[T][y]:w[T][y][_]})}var u=Fc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*t,m=new u.type(io(n.b)*f);Cn(function(s){l(m,u.size*u.arraySize,v,s,a[r.name]||r.name),v+=f},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Pf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=zf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*io(r.b),indexBuffer:null,buffers:{}}}function zf(e,r){var n=new Uint32Array(io(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function hi(e,r){return e+"#"+r}var Vc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Bc(n),Ac(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=hi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=pi++,v||(v=gi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=pi++,f||(f=gi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var m=Cf(a,v,f);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=kf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var s=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(g)}c=hi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Mf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Pf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[s.name]===void 0&&(b.buffers[s.name]=Lf(a,s,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[s.name]);var w=Fc(a,s.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,_=y*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,y*T)}for(n.toggle=!n.toggle,Cn(Y0(n),i.a),u=0;u<bi.length;u++){var M=n[bi[u]];M.toggle!==n.toggle&&M.enabled&&(Tf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Cn(t,e.g),r});function kf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(s,g){var b=g.name,w=e.getUniformLocation(s,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var y=c++;return function(_){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,y),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var v={},f=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Mf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Df=x(function(e,r,n){return m$(r,{g:n,f:{},h:e},jf,Nf)}),Bf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Af=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ff=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Vf=$(function(e,r){e.contextAttributes.antialias=!0}),Ef=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Rf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function jf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(q0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),cf(function(){return o(Vc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Nf(e,r){return r.f=e.f,Vc(r)}var k=tv,qn=rv,Ec=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(qn,e,l,v)}else{var u=c.a;return p(qn,i,l,u)}});return p(qn,i,p(qn,e,r,t),a)}),co=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(co,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),_i=function(e){return p(co,x(function(r,n,a){return o(k,z(r,n),a)}),L,e)},Rc=1,Gf=2,jc=0,xe=function(e){return{$:1,a:e}},lo=$(function(e,r){return{$:3,a:e,b:r}}),wi=$(function(e,r){return{$:0,a:e,b:r}}),Nc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Wf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Hf=zv,Xf=Jv,Fe=fc,zr=$(function(e,r){return o(Cv,e,Fa(r))}),uo=$(function(e,r){return h(o(Tv,e,r))}),Gc=function(e){return o(zr,`
    `,o(uo,`
`,e))},Vn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Vr=function(e){return p(Vn,$(function(r,n){return n+1}),0,e)},Uf=ov,If=x(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),_r=$(function(e,r){return p(If,e,r,L)}),Wc=$(function(e,r){return p(Uf,e,o(_r,0,Vr(r)-1),r)}),nr=Vv,Hc=function(e){var r=nr(e);return 97<=r&&r<=122},Xc=function(e){var r=nr(e);return r<=90&&65<=r},Of=function(e){return Hc(e)||Xc(e)},Jf=function(e){var r=nr(e);return r<=57&&48<=r},qf=function(e){return Hc(e)||Xc(e)||Jf(e)},Ve=function(e){return p(Vn,k,L,e)},nn=wv,Yf=$(function(e,r){return`

(`+(Fe(e+1)+(") "+Gc(Zf(r))))}),Zf=function(e){return o(Qf,e,L)},Qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=nn(n);if(b.$===1)return!1;var w=b.a,y=w.a,_=w.b;return Of(y)&&o(Hf,qf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(k,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,v=o(k,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(zr,"",Ve(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Fe(Vr(f))+" ways:"));return o(zr,`

`,o(k,g,o(Wc,Yf,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(zr,"",Ve(r)):"!"}();default:var d=e.a,s=e.b,g=function(){return r.b?"Problem with the value at json"+(o(zr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return g+(Gc(o(Xf,4,s))+(`

`+d))}}),Ee=32,Tt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ct=Yu,vo=mv,$o=$(function(e,r){return ii(r)/ii(e)}),Kf=fv,Ln=vo(o($o,2,Ee)),Uc=C(Tt,0,Ln,Ct,Ct),Ic=Qu,Oc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Jc=dv,Lt=Zu,ke=$(function(e,r){return O(e,r)>0?e:r}),es=function(e){return{$:0,a:e}},fo=Ku,rs=$(function(e,r){e:for(;;){var n=o(fo,Ee,e),a=n.a,t=n.b,i=o(k,es(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),ns=function(e){var r=e.a;return r},as=$(function(e,r){e:for(;;){var n=vo(r/Ee);if(n===1)return o(fo,Ee,e).a;var a=o(rs,e,L),t=n;e=a,r=t;continue e}}),qc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Jc(o($o,Ee,n-1)),t=e?Ve(r.z):r.z,i=o(as,t,r.l);return C(Tt,Lt(r.p)+n,o(ke,5,a*Ln),i,r.p)}else return C(Tt,Lt(r.p),Ln,Ct,r.p)}),ts=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(qc,!1,{z:a,l:n/Ee|0,p:t});var i=Oc(p(Ic,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(k,i,a),f=t;e=c,r=l,n=u,a=v,t=f;continue e}}),os=$(function(e,r){if(e<=0)return Uc;var n=e%Ee,a=p(Ic,n,e-n,r),t=e-n-Ee;return S(ts,r,t,e,L,a)}),Oe=function(e){return!e.$},B=Xv,Z=jv,D=Hv,$e=Nv,ba=Uv,is=Iv,Be=Rv,so=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=mr("div"),cs=function(e){return{$:2,a:e}},Yc=$(function(e,r){return e}),Zc=$(function(e,r){return{aK:r.aK,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Mr=function(e){return e},ls=Mr,yi=Ue(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),us=kv,kr=yv,Jr=Lv,En=$(function(e,r){return e<1?r:p(Jr,e,kr(r),r)}),Va=Dv,Ea=function(e){return e===""},Ra=$(function(e,r){return e<1?"":p(Jr,0,e,r)}),Qc=Bv,xi=_e(function(e,r,n,a,t){if(Ea(t)||o(us,"@",t))return q;var i=o(Va,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Qc(o(En,c+1,t));if(l.$===1)return q;var u=l;return re(ye(yi,e,o(Ra,c,t),u,r,n,a))}else return re(ye(yi,e,t,q,r,n,a))}),Si=E(function(e,r,n,a){if(Ea(a))return q;var t=o(Va,"/",a);if(t.b){var i=t.a;return S(xi,e,o(En,i,a),r,n,o(Ra,i,a))}else return S(xi,e,"/",r,n,a)}),Ti=x(function(e,r,n){if(Ea(n))return q;var a=o(Va,"?",n);if(a.b){var t=a.a;return C(Si,e,re(o(En,t+1,n)),r,o(Ra,t,n))}else return C(Si,e,q,r,n)});$(function(e,r){if(Ea(r))return q;var n=o(Va,"#",r);if(n.b){var a=n.a;return p(Ti,e,re(o(En,a+1,r)),o(Ra,a,r))}else return p(Ti,e,q,r)});var vs=Mv,mo=function(e){},Rn=jr,$s=Rn(0),Kc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,m=v.b,d=n>500?p(Vn,e,r,Ve(m)):C(Kc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,f,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),or=x(function(e,r,n){return C(Kc,e,r,0,n)}),ee=$(function(e,r){return p(or,$(function(n,a){return o(k,e(n),a)}),L,r)}),ga=wt,po=$(function(e,r){return o(ga,function(n){return Rn(e(n))},r)}),fs=x(function(e,r,n){return o(ga,function(a){return o(ga,function(t){return Rn(o(e,a,t))},n)},r)}),ss=function(e){return p(or,fs(k),Rn(L),e)},ms=a$,ds=$(function(e,r){var n=r;return dc(o(ga,ms(e),n))}),ps=x(function(e,r,n){return o(po,function(a){return 0},ss(o(ee,ds(e),r)))}),bs=x(function(e,r,n){return Rn(0)}),gs=$(function(e,r){var n=r;return o(po,e,n)});rr.Task=r$($s,ps,bs,gs);var hs=bc("Task"),bo=$(function(e,r){return hs(o(po,e,r))}),_s=V$,ws=hv,ha={$:1},el=function(e){return{$:2,a:e}},ja={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),an=function(e){var r=e.b.B;return r.a},ys=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ab:c,T:o(k,a,n)}))}else return q},rl=function(e){var r=e.b;return o(We,ja,r)},$r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),xs=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?rl(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,an(n).aK)>0?o(ae,ys,$r(o(We,ha,t))):Mr)(o(We,el({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Zc,l.eA,Ke(r,{aK:l.aK+r.eJ})),f=o(e,v,u);return o(We,ja,{B:z(v,f),ab:L,T:o(k,t.B,t.T)})}}),nl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ss=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),Ts=$(function(e,r){return Ve(p(Ss,e,r,L))}),al=x(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return h([_,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,s=d.b,f=s.a,g=s.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,f,o(k,b,o(Ts,r-4,w))))):o(k,_,o(k,c,o(k,f,o(k,b,p(al,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,_=y.a;return h([_])}}),Cs=$(function(e,r){return p(al,0,e,r)}),Ls=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ve(n),le(h([a]),t)),c=o(Cs,e,i),l=o(nl,e,i);if(l.b){var u=l.a,v=l.b;return o(We,ha,{B:u,ab:v,T:Ve(c)})}else{var f=Ve(c);if(f.b){var m=f.a,d=f.b;return o(We,ha,{B:m,ab:L,T:d})}else return r}}),Ps=function(e){var r=e.b;return o(We,ha,r)},zs=function(e){var r=e.b;return o(We,el({cY:an(e).aK}),r)},ks=$(function(e,r){switch(e.$){case 1:return Ps(r);case 2:return rl(r);case 3:return zs(r);default:var n=e.a;return o(Ls,n,r)}}),tl=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ms=$(function(e,r){return Ke(r,{av:e(r.av)})}),Ds=function(e){return{$:3,a:e}},Bs=function(e){return{$:2,a:e}},ol=$(function(e,r){return{$:0,a:e,b:r}}),As=$(function(e,r){return{$:1,a:e,b:r}}),Le=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},go=Av,Fs=x(function(e,r,n){return o($r,0/0,go(o(e,r,n)))}),il=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Vs=Sv,cl=function(e){return p(Vs,k,L,e)},Es=$(function(e,r){var n=o(il,function(a){return a!=="0"&&a!=="."},cl(r));return le(e&&n?"-":"",r)}),pe=fc,Pt=_v,ll=Ev,ul=function(e){var r=e.a,n=e.b;if(r==="9"){var a=nn(n);if(a.$===1)return"01";var t=a.a;return o(Pt,"0",ul(t))}else{var i=nr(r);return i>=48&&i<57?o(Pt,ll(i+1),n):"0"}},zt=sv,Rs=gv,Na=function(e){return o(Pt,e,"")},vl=x(function(e,r,n){return e<=0?n:p(vl,e>>1,le(r,r),e&1?le(n,r):n)}),Pn=$(function(e,r){return p(vl,e,r,"")}),kt=x(function(e,r,n){return le(n,o(Pn,e-kr(n),Na(r)))}),Mt=xv,$l=function(e){var r=o(uo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},js=function(e){var r=o(uo,"e",pe(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o($r,0,Qc(o(vs,"+",t)?o(En,1,t):t)),c=$l(n),l=c.a,u=c.b,v=le(l,u),f=i<0?o($r,"0",o(Le,function(m){var d=m.a,s=m.b;return d+("."+s)},o(Le,tl(Na),nn(le(o(Pn,J(i),"0"),v))))):p(kt,i+1,"0",v);return le(e<0?"-":"",f)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Ns=x(function(e,r,n){if(zt(n)||Rs(n))return pe(n);var a=n<0,t=$l(js(J(n))),i=t.a,c=t.b,l=kr(i)+r,u=le(o(Pn,-l+1,"0"),p(kt,l,"0",le(i,c))),v=kr(u),f=o(ke,1,l),m=o(e,a,p(Jr,f,v,u)),d=p(Jr,0,f,u),s=m?Mt(o($r,"1",o(Le,ul,nn(Mt(d))))):d,g=kr(s),b=s==="0"?s:r<=0?le(s,o(Pn,J(r),"0")):O(r,kr(c))<0?p(Jr,0,g-r,s)+("."+p(Jr,g-r,g,s)):le(i+".",p(kt,r,"0",c));return o(Es,a,b)}),gn=Ns($(function(e,r){var n=nn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Gs=Fs(gn),Ws=x(function(e,r,n){var a=o($o,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Gs,t,n)}),fl=av,ho=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(fl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},Kr=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,m=a.d,d=a.e;return S(X,0,r,n,S(X,1,v,f,m,d),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,s=a.d;s.a;var g=s.b,b=s.c,w=s.d,y=s.e,d=a.e;return S(X,0,v,f,S(X,1,g,b,w,y),S(X,1,r,n,d,t))}else return S(X,e,r,n,a,t)}),Dt=x(function(e,r,n){if(n.$===-2)return S(X,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(fl,e,t);switch(u){case 0:return S(Kr,a,t,i,p(Dt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Kr,a,t,i,c,p(Dt,e,r,l))}}),hn=x(function(e,r,n){var a=p(Dt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Hs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},sl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var f=v.b,m=v.c,d=v.d;d.a;var s=d.b,g=d.c,b=d.d,w=d.e,y=v.e;return S(X,0,s,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,f,m,w,y))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var f=T.b,m=T.c,d=T.d,y=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,f,m,d,y))}else return e},Ci=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,f=l.d,m=l.e,d=t.e,s=e.e;s.a;var g=s.b,b=s.c,w=s.d,y=s.e;return S(X,0,i,c,S(X,1,u,v,f,m),S(X,1,n,a,d,S(X,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,d=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,y=M.e;return S(X,1,n,a,S(X,0,i,c,T,d),S(X,0,g,b,w,y))}else return e},Xs=Ba(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return S(X,n,l,u,v,S(X,0,a,t,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Ci(r)}else break e;else return c.a,c.d,Ci(r);else break e;return r}}),oa=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,oa(t),l);var u=sl(e);if(u.$===-1){var v=u.a,f=u.b,m=u.c,d=u.d,s=u.e;return S(Kr,v,f,m,oa(d),s)}else return tr}else return S(X,r,n,a,oa(t),l)}else return tr},_n=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(_n,e,i),c);var u=sl(r);if(u.$===-1){var v=u.a,f=u.b,m=u.c,d=u.d,s=u.e;return S(Kr,v,f,m,o(_n,e,d),s)}else return tr}else return S(X,n,a,t,o(_n,e,i),c);else return o(Us,e,qt(Xs,e,r,n,a,t,i,c))}),Us=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(hr(e,a)){var l=Hs(c);if(l.$===-1){var u=l.b,v=l.c;return S(Kr,n,u,v,i,oa(c))}else return tr}else return S(Kr,n,a,t,i,o(_n,e,c))}else return tr}),Is=$(function(e,r){var n=o(_n,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Yn=x(function(e,r,n){var a=r(o(ho,e,n));if(a.$)return o(Is,e,n);var t=a.a;return p(hn,e,t,n)}),Os=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Yn,r,Le(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(As,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Yn,r,Le(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(ol,z(i,c),p(Ws,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Yn,r,Le(function(a){return a.$===3?Ds(n):a}));default:var r=e.a,n=e.b;return o(Yn,r,Le(function(a){return a.$===2?Bs(n):a}))}},Js=function(e){return Ms(Os(e))},qs=$(function(e,r){return o(ee,Js(e),r)}),Ys=$(function(e,r){return Ke(r,{eA:o(qs,e,r.eA)})}),Zs=$(function(e,r){var n=r.a,a=r.b;return o(We,n,Ke(a,{B:o(tl,Ys(e),a.B)}))}),Qs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Ks=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,Ke(t,{B:o(Qs,o(e,i.a,r),i)}))}),em=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aM:!a.aM});case 2:var t=n.a;return Ke(a,{G:p(xs,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Zs,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(Ks,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(ks,l,a.G)})}}),rm=$(function(e,r){return o(We,ja,{B:z(e,r(e)),ab:L,T:L})}),nm=t$,Li=nm(L),_a=Wv,zn=Gv,am=u$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Be({aK:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(f){return o(B,function(m){return Be({eo:m,eB:f,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",_a(zn)))},o(D,"left",Z))},o(D,"pressedKeys",_a(zn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Be({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return Be({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return Be({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),tm=function(e){return{$:4,a:e}},om={$:0},im=mc,Ie=$(function(e,r){return o(_c,e,im(r))}),I=Ie("className"),cm=function(e){var r=e.b.B;return r.b},wa=Ie("id"),lm=d$,ya=lm,um=p$,he=um,vm={$:1},$m=function(e){return{$:3,a:e}},fm=function(e){return{$:5,a:e}},Pi=mr("a"),_o=mr("button"),sm=Fn("d"),ml=gc("http://www.w3.org/2000/svg"),mm=ml("path"),dm=ml("svg"),pm=Fn("viewBox"),wn=function(e){return o(dm,h([pm("0 0 100 100"),o(he,"width","100%"),o(he,"height","100%")]),h([o(mm,h([sm(e)]),L)]))},zi=function(e){return o(Ie,"href",g$(e))},Yr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},bm=function(e){return{$:0,a:e}},dl=hc,pl=$(function(e,r){return o(dl,e,bm(r))}),wo=function(e){return o(pl,"click",Be(e))},ki=Ie("target"),gm=Ie("title"),Bt=$(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(Bt,e,i),o(Bt,e,c))}),hm=yt,ge=hm,_m=function(e){return p(co,x(function(r,n,a){return o(k,n,a)}),L,e)},wm=$(function(e,r){return{$:3,a:e,b:r}}),ym=$(function(e,r){return{$:2,a:e,b:r}}),xm=$(function(e,r){return{$:0,a:e,b:r}}),Sm=$(function(e,r){return{$:1,a:e,b:r}}),jn=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Tm=C(jn,0/255,0/255,0/255,1),Cm=mc,Lm=$(function(e,r){return o(_c,e,Cm(r))}),Pm=Lm("checked"),Ye=pv,zm=x(function(e,r,n){return le(o(Pn,e-kr(n),Na(r)),n)}),xa=cv,bl=function(e){var r=function(n){return n<10?Fe(n):Na(ll(87+n))};return e<16?r(e):le(bl(e/16|0),r(o(xa,16,e)))},km=o(ae,bl,o(zm,2,"0")),yo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Mm=function(e){var r=yo(e),n=r.cN,a=r.cd,t=r.b6;return o(zr,"",o(k,"#",o(ee,o(ae,Ye,km),h([n*255,a*255,t*255]))))},At=Ie("htmlFor"),Ft=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Sa=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),Dm=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),xo=$(function(e,r){return p(or,Dm(e),L,r)}),gl=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Bm=G$,Am=Fv,Fm=$(function(e,r){if(r.$)return xe(e);var n=r.a;return ue(n)}),Vm=N$,Em=function(e){return o(Vm,{ew:!1,fe:!1},e)},So=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Rm=$(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ue(e(n))}}),jm=function(e){return{$:2,a:e}},Nm=function(e){return{$:0,a:e}},Gm=function(e){return{$:1,a:e}},Qa=$(function(e,r){return nr(r)-nr(e)}),Ka=x(function(e,r,n){var a=nr(n);return O(nr(e),a)<1&&O(a,nr(r))<1}),Wm=$(function(e,r){var n=function(t){return O(t,e)<0?ue(t):xe(Gm(r))},a=p(Ka,"0","9",r)?ue(o(Qa,"0",r)):p(Ka,"a","z",r)?ue(10+o(Qa,"a",r)):p(Ka,"A","Z",r)?ue(10+o(Qa,"A",r)):xe(Nm(r));return o(Sa,n,a)}),hl=$(function(e,r){var n=nn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(Sa,function(c){return o(Sa,function(l){return ue(c+l*e)},o(hl,e,i))},o(Wm,e,t))}),Hm=$(function(e,r){return 2<=e&&e<=36?o(hl,e,Mt(r)):xe(jm(e))}),Xm=Hm(16),Um=x(function(e,r,n){return C(jn,e,r,n,1)}),Im=E(function(e,r,n,a){return C(jn,e,r,n,a)}),Nn=iv,Om=$(function(e,r){var n=o(Nn,10,e);return Ye(r*n)/n}),Jm=Pv,qm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=cl(n);if(a.b&&!a.b.b){var t=a.a;return Am(h([t,t]))}else return n};return o(ae,Jm,o(ae,function(n){return o(Le,function(a){return p(Bm,1,a,n)},Em(e))},o(ae,Ft(So),o(ae,Le(function(n){return n.fF}),o(ae,Le(xo(Mr)),o(ae,Fm("Parsing hex regex failed"),Sa(function(n){var a=o(ee,o(ae,r,o(ae,Xm,Rm(Kf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return ue(C(Im,t/255,c/255,u/255,o(Om,2,f/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ue(p(Um,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),Ta=mr("input"),Vt=mr("label"),Et=Ie("name"),_l=$(function(e,r){return p(or,D,r,e)}),Ym=o(_l,h(["target","checked"]),Z),Zm=function(e){return o(pl,"change",o(ba,e,Ym))},Qm=function(e){return z(e,!0)},Km=function(e){return{$:1,a:e}},ed=$(function(e,r){return o(dl,e,Km(r))}),rd=o(_l,h(["target","value"]),zn),To=function(e){return o(ed,"input",o(ba,Qm,o(ba,e,rd)))},wl=Ie("max"),yl=Ie("min"),xl=function(e){return o(Ie,"step",e)},Ca=Ie("type"),Co=Ie("value"),Mi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(U,L,h([o(Vt,h([At(r)]),h([o(U,h([I("relative w-full")]),h([o(U,h([I("inline-block")]),h([ge(r)])),o(U,h([I("inline-block float-right")]),h([ge(pe(n))]))]))])),o(Ta,h([Ca("range"),o(he,"width","100%"),wa(r),Et(r),yl(pe(a)),wl(pe(t)),Co(pe(n)),xl(pe(i)),To(o(ae,go,o(ae,$r(42),c)))]),L)]))},nd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ad=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,L,h([o(U,h([I("mb-2")]),h([o(Vt,h([At(e)]),h([ge(e)]))])),o(Ta,h([Ca("checkbox"),wa(e),Et(e),Zm(wm(e)),Pm(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Mi({cg:e,cs:i,cw:t,cA:xm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Mi({cg:e,cs:i,cw:t,cA:o(ae,Ye,Sm(e)),cW:1,c1:c});default:var c=r.a;return o(U,L,h([o(U,h([o(he,"margin-bottom","6px")]),h([o(Vt,h([At(e)]),h([ge(e)]))])),o(Ta,h([Ca("color"),o(he,"width","100%"),o(he,"height","26px"),o(he,"padding","0px"),wa(e),Et(e),To(function(l){return o(ym,e,o(nd,Tm,qm(l)))}),Co(Mm(c))]),L)]))}}),td=function(e){return o(U,h([I("p-6 border-y-[0.5px] border-white20")]),h([o(U,h([I("text-lg pb-2")]),h([ge(e.ff)])),o(U,h([I("pl-2 pr-2")]),_m(o(Bt,ad,e.av)))]))},od=function(e){return o(U,h([I("text-xs text-white60")]),o(ee,td,e))},id=function(e){return o(U,h([I("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ge("clock: "+o(gn,3,an(e).aK))]))},cd=function(e){e.a;var r=e.b.T;return o(Le,function(n){return Ye(60/(an(e).aK-n))},o(Le,o(ae,ns,function(n){return n.aK}),So(o(nl,59,r))))},ld=function(e){return o(U,h([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=cd(e);if(r.$===1)return h([ge("... Fps")]);var n=r.a;return h([ge(Fe(n)+" Fps")])}())},ud=function(e){return{$:0,a:e}},vd=function(e){var r=e.b.T;return Vr(r)},$d=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Vr(r)+1+Vr(n)},fd=function(e){return o(Ta,h([I("absolute left-[100px] w-[490px]"),Ca("range"),yl(Fe(0)),wl(Fe($d(e)-1)),Co(Fe(vd(e))),xl(Fe(1)),To(o(ae,go,o(ae,$r(42),o(ae,Ye,ud))))]),L)},Di={$:1},sd={$:3},md={$:2},Sl=function(e){return!e.b},Bi=$(function(e,r){return o(_o,h([I("px-2 bg-black40"),I(r),wo(e)]),h([ge("REC")]))}),Ai=$(function(e,r){return o(_o,h([I("absolute left-[60px] mx-1 px-1 bg-black40"),wo(r)]),h([o(U,h([I("w-4 h-6 fill-white80")]),h([wn(e)]))]))}),dd=function(e){var r=e.a,n=e.b.ab;return o(U,h([I("py-1")]),h([function(){switch(r.$){case 0:return o(Bi,Di,"text-red-500 font-bold");case 1:return o(Bi,md,"text-white80 font-bold");default:return o(U,L,L)}}(),function(){switch(r.$){case 0:return o(U,L,L);case 1:return Sl(n)?o(U,L,L):o(Ai,Yr.fo,sd);default:return o(Ai,Yr.fn,Di)}}()]))},pd=function(e){return o(U,h([I("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([fd(e),dd(e),ld(e),id(e)]))},Tl=function(e){return o(zr,"",e)},bd=$(function(e,r){if(r.b){var n=r.a,a=r.b,t=$(function(c,l){return o(k,e,o(k,c,l))}),i=p(or,t,L,a);return o(k,n,i)}else return L}),gd=function(e){var r=e.a;return hr(r,ja)},Cr=mr("p"),hd=mr("pre"),_d=$(function(e,r){var n=gd(r.G)?o(U,L,L):o(U,h([I("absolute pointer-events-none w-8 h-8"),o(he,"left",pe(e.fp.fT+.5*e.cT.fR)+"px"),o(he,"top",pe(-e.fp.fX+.5*e.cT.eW)+"px")]),h([o(U,h([I(e.fp.e4?"fill-black80":"fill-white40")]),h([wn(Yr.fp)]))]));return o(U,L,h([n,o(hd,h([I("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(Cr,L,h([ge("pressedKeys: "+Tl(o(bd," ",e.e7.fq)))])),o(Cr,L,h([ge("delta time: "+o(gn,4,e.eJ))])),o(Cr,L,h([ge("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(Cr,L,h([ge("pointer.x: "+o(gn,2,e.fp.fT))])),o(Cr,L,h([ge("pointer.y: "+o(gn,2,e.fp.fX))])),o(Cr,L,h([ge("wheel deltaX: "+pe(e.fQ.eD))])),o(Cr,L,h([ge("wheel deltaY: "+pe(e.fQ.eE))]))]))]))}),wd=$(function(e,r){var n=o(_o,h([I(r.aM?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),wo(vm),gm("Distraction Free Mode")]),h([wn(Yr.f$)])),a=o(U,h([I("absolute w-8 bottom-12")]),h([o(Pi,h([I("fill-twitterBlue40 hover:fill-twitterBlue"),zi("https://twitter.com/AzizErkalSelman"),ki("_blank")]),h([wn(Yr.fL)]))])),t=o(U,h([I("absolute w-8 bottom-2")]),h([o(Pi,h([I("fill-githubCat40 hover:fill-githubCat"),zi("https://github.com/erkal/elm-3d-playground-exploration"),ki("_blank")]),h([wn(Yr.eQ)]))]));return r.aM?o(U,h([I("fixed w-10 h-10 p-1")]),h([n])):o(U,L,h([o(U,h([I("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(U,h([I("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(ya,$m,od(an(r.G).eA))])),o(ya,fm,pd(r.G)),o(_d,e,r)]))}),yd=x(function(e,r,n){var a=cm(n.G),t=an(n.G);return o(U,h([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(he,"width",pe(t.cT.fR)+"px"),o(he,"height",pe(t.cT.eW)+"px")]),h([o(U,h([I("fixed")]),h([o(ya,Yc(om),o(e,t,a))])),o(U,h([wa("gui")]),h([o(wd,t,n),o(U,h([I("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(ya,tm,o(r,t,a))]))]))]))}),xd=Ue(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(em,r,i,u,v),Li)}),l=function(u){var v=o(Zc,n,u.e1);return z({aM:u.e1.cT.fR<500,G:o(rm,v,a)},Li)};return _s({e0:l,fG:Yc(am(cs)),fM:c,fP:o(yd,e,t)})}),Sd=E(function(e,r,n,a){return ye(xd,e,r,n,a,$(function(t,i){return o(U,L,L)}),x(function(t,i,c){return c}))}),Td=function(e){return{}},Cd=x(function(e,r,n){return{av:n,e5:r,ff:e}}),Cl=tr,Ld=function(e){return p(Vn,$(function(r,n){var a=r.a,t=r.b;return p(hn,a,t,n)}),Cl,e)},Pd=x(function(e,r,n){return p(Cd,e,r,Ld(n))}),zd=Pd,et=x(function(e,r,n){var a=r.a,t=r.b;return z(e,o(ol,z(a,t),n))}),kd=h([p(zd,"Camera",!0,h([p(et,"camera x",z(-40,40),0),p(et,"camera y",z(-40,40),0),p(et,"camera z",z(-40,40),16)]))]),Md=$(function(e,r){return r}),Dd=$(function(e,r){return r.b?p(or,k,r,e):e}),He=function(e){return p(or,Dd,L,e)},Ga=$(function(e,r){return He(o(ee,e,r))}),Bd=function(e){var r=function(n){return o(ee,function(a){return z(n,a)},e)};return Ga(r)},Lo=function(e){return{$:5,a:e}},La=function(e){return Lo(e)},wr=lv,Ge=function(e){return e*wr/180},Wa=$(function(e,r){return{$:0,a:e,b:r}}),Ll=$(function(e,r){return{$:2,a:e,b:r}}),Pl=$(function(e,r){return{$:4,a:e,b:r}}),zl=$(function(e,r){return{$:3,a:e,b:r}}),Po=$(function(e,r){return{$:1,a:e,b:r}}),Ad=x(function(e,r,n){return{fT:e,fX:r,c6:n}}),Fd=function(e){var r=e;return r},zo=function(e){var r=e;return Fd(r.er)},ko=function(e){var r=e;return r.aL},tn=function(e){var r=e;return r.cB},Gn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),fr=function(e){return e},Nr=function(e){var r=e;return r.c4},Gr=function(e){var r=e;return r.c5},Wr=function(e){var r=e;return r.c7},Vd=$(function(e,r){return fr({cB:o(Gn,e,tn(r)),c4:Nr(r),c5:Gr(r),c7:Wr(r)})}),Ed=$(function(e,r){return{er:o(Vd,e,zo(r)),aL:ko(r)}}),Wn=$(function(e,r){return{eG:r,cB:e}}),Rd=$(function(e,r){var n=r;return o(Wn,o(Gn,e,n.cB),n.eG)}),jd=$(function(e,r){var n=r;return{k:o(Rd,e,n.k),e9:n.e9,fr:n.fr}}),Mo=function(e){var r=e;return r},Nd=function(e){return e},kl=$(function(e,r){var n=Mo(r),a=n.a,t=n.b;return Nd(z(e(a),e(t)))}),Gd=$(function(e,r){return o(kl,Gn(e),r)}),Do=function(e){var r=e;return r.ey},Bo=function(e){var r=e;return r.fr},Re=function(e){var r=e;return J(r)},Ml=$(function(e,r){return{ey:r,fr:Re(e)}}),Wd=$(function(e,r){return o(Ml,Bo(r),o(Gn,e,Do(r)))}),Dl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),Hd=$(function(e,r){return o(Dl,Gn(e),r)}),Ha=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Ad,n,a,t);switch(r.$){case 0:var f=r.a,c=r.b;return o(Wa,f,o(Ed,i,c));case 1:var f=r.a,l=r.b;return o(Po,f,o(Hd,i,l));case 3:var f=r.a,u=r.b;return o(zl,f,o(Wd,i,u));case 2:var f=r.a,v=r.b;return o(Ll,f,o(jd,i,v));case 4:var f=r.a,m=r.b;return o(Pl,f,o(Gd,i,m));default:var d=r.a;return Lo(o(ee,Ha(A(n,a,t)),d))}}),Rt=function(e){return Ha(A(e,0,0))},Pr=function(e){return Ha(A(0,e,0))},kn=function(e){return Ha(A(0,0,e))},Er=function(e){return e},yr=uv,Rr=vv,ia=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=yr(c),u=Rr(c),v=a.eG,f=v,m=f.fT*u,d=l*m,s=m*m,g=f.fX*u,b=l*g,w=m*g,y=g*g,_=1-2*(s+y),T=f.c6*u,M=l*T,G=2*(w-M),j=2*(w+M),R=m*T,N=2*(R+b),W=2*(R-b),F=g*T,Y=2*(F-d),Q=2*(F+d),oe=T*T,ve=1-2*(y+oe),te=1-2*(s+oe);return{fT:ve*i.fT+G*i.fX+N*i.c6,fX:j*i.fT+te*i.fX+Y*i.c6,c6:W*i.fT+Q*i.fX+_*i.c6}}),Hn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=yr(c),u=Rr(c),v=a.cB,f=v,m=i.fT-f.fT,d=i.fX-f.fX,s=i.c6-f.c6,g=a.eG,b=g,w=b.fT*u,y=l*w,_=w*w,T=b.fX*u,M=l*T,G=w*T,j=T*T,R=1-2*(_+j),N=b.c6*u,W=l*N,F=2*(G-W),Y=2*(G+W),Q=w*N,oe=2*(Q+M),ve=2*(Q-M),te=T*N,se=2*(te-y),Me=2*(te+y),Te=N*N,dr=1-2*(j+Te),pr=1-2*(_+Te);return{fT:f.fT+dr*m+F*d+oe*s,fX:f.fX+Y*m+pr*d+se*s,c6:f.c6+ve*m+Me*d+R*s}}),Xd=x(function(e,r,n){return fr({cB:p(Hn,e,r,tn(n)),c4:p(ia,e,r,Nr(n)),c5:p(ia,e,r,Gr(n)),c7:p(ia,e,r,Wr(n))})}),Ud=x(function(e,r,n){return{er:p(Xd,e,r,zo(n)),aL:ko(n)}}),Id=$(function(e,r){var n=o(Hn,e,r),a=o(ia,e,r);return function(t){var i=t;return o(Wn,n(i.cB),a(i.eG))}}),Od=x(function(e,r,n){var a=n;return{k:p(Id,e,r,a.k),e9:a.e9,fr:a.fr}}),Jd=x(function(e,r,n){return o(kl,o(Hn,e,r),n)}),qd=x(function(e,r,n){return o(Ml,Bo(n),p(Hn,e,r,Do(n)))}),Yd=x(function(e,r,n){return o(Dl,o(Hn,e,r),n)}),Xa=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Wa,l,p(Ud,e,r,a));case 1:var l=n.a,t=n.b;return o(Po,l,p(Yd,e,r,t));case 3:var l=n.a,i=n.b;return o(zl,l,p(qd,e,r,i));case 2:var l=n.a,c=n.b;return o(Ll,l,p(Od,e,r,c));case 4:var l=n.a,u=n.b;return o(Pl,l,p(Jd,e,r,u));default:var v=n.a;return Lo(o(ee,o(Xa,e,r),v))}}),Hr={fT:0,fX:0,c6:0},ur=function(e){return e},Bl=ur({fT:1,fX:0,c6:0}),Ao=Bl,Zd=o(Wn,Hr,Ao),Fi=$(function(e,r){return p(Xa,Zd,Er(e),r)}),Fo=ur({fT:0,fX:1,c6:0}),Vo=Fo,Qd=o(Wn,Hr,Vo),Kd=$(function(e,r){return p(Xa,Qd,Er(e),r)}),Eo=ur({fT:0,fX:0,c6:1}),Ro=Eo,e0=o(Wn,Hr,Ro),yn=$(function(e,r){return p(Xa,e0,Er(e),r)}),de=bv,rt=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),nt=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vr=$(function(e,r){var n=e,a=r;return a-n}),r0=ur({fT:-1,fX:0,c6:0}),n0=ur({fT:0,fX:-1,c6:0}),Al=ur({fT:0,fX:0,c6:-1}),me=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),a0=Ue(function(e,r,n,a,t,i){var c=o(rt,n,i)?Eo:Al,l=o(rt,r,t)?Fo:n0,u=o(rt,e,a)?Bl:r0,v=A(Re(o(vr,e,a)),Re(o(vr,r,t)),Re(o(vr,n,i))),f=p(me,o(nt,e,a),o(nt,r,t),o(nt,n,i)),m=fr({cB:f,c4:u,c5:l,c7:c});return{er:m,aL:v}}),Dr=function(e){var r=e;return r.fT},Br=function(e){var r=e;return r.fX},Ar=function(e){var r=e;return r.c6},Fl=$(function(e,r){return ye(a0,Dr(e),Br(e),Ar(e),Dr(r),Br(r),Ar(r))}),gr=x(function(e,r,n){return{fT:e,fX:r,c6:n}}),t0=$(function(e,r){var n=r/2;return o(Wa,e,o(Fl,p(gr,-n,-n,-n),p(gr,n,n,n)))}),o0=E(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,f=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=f(i-1/3),d=f(i),s=f(i+1/3);return C(jn,s,d,m,a)}),i0=x(function(e,r,n){return C(o0,e,r,n,1)}),jt=function(e){return{$:0,a:e}},Vl=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),El=x(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),at=function(e){return p(El,0,1,e<=.04045?e/12.92:o(Nn,(e+.055)/1.055,2.4))},Xn=X$,c0=function(e){var r=yo(e),n=r.cN,a=r.cd,t=r.b6;return p(Xn,at(n),at(a),at(t))},Rl=function(e){return p(Vl,0,jt(c0(e)),jt(0))},l0=$(function(e,r){return(r-Jc(r/e)*e)/e}),u0=function(e){return 2*wr*e},mn=E(function(e,r,n,a){return e+(r-e)*(1+yr(u0(o(l0,n,a))))/2}),Nt=function(e){return Rl(p(i0,C(mn,0,1,7,e.aK),.8,.8))},tt=function(e){return o(t0,Nt(e),1)},jl=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Wa,e,o(Fl,p(gr,-c,-l,-u),p(gr,c,l,u)))}),De=x(function(e,r,n){return A(e,r,n)}),v0=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(Po,e,p(De,p(gr,n.fT,n.fX,n.c6),p(gr,a.fT,a.fX,a.c6),p(gr,t.fT,t.fX,t.c6)))}),$0=function(e){var r=o(Pr,-(de(3)/6),o(Rt,-.5,o(yn,-Ge(30),o(v0,Nt(e),A({fT:0,fX:0,c6:0},{fT:yr(Ge(30)),fX:Rr(Ge(30)),c6:0},{fT:0,fX:1,c6:0}))))),n=o(Pr,-(de(3)/6),o(jl,Nt(e),A(1,1e-8,1)));return La(h([o(kn,-.5,r),o(kn,.5,r),n,o(yn,Ge(120),n),o(yn,Ge(240),n)]))},f0=$(function(e,r){var n=r.a,a=r.b,t=$(function(m,d){return o(Pr,(1+de(3))/2,o(yn,m,o(Pr,-((1+de(3))/2),d)))}),i=wr,c=20,l=function(m){return o(Fi,C(mn,0,i,c,e.aK),m)},u=o(t,Ge(240),l(tt(e))),v=o(Rt,(3+de(3))/2,o(Pr,(1+de(3))/2,l(tt(e)))),f=l(La(h([o(yn,Ge(90),o(Pr,1/2+de(3)/6,$0(e))),tt(e)])));return o(kn,C(mn,-1,1,7,e.aK),o(Pr,a*(1+de(3)),o(Rt,n*(3+de(3)),o(Kd,C(mn,0,i,c,e.aK),o(Fi,C(mn,0,i,c,e.aK),La(h([f,o(t,Ge(60),f),o(t,Ge(120),f),o(t,-Ge(60),f),v,u])))))))}),s0=function(e){return La(o(ee,f0(e),o(Bd,o(_r,-1,1),o(_r,-1,1))))},m0=$(function(e,r){return o(Le,function(n){if(n.$)return 0;var a=n.b;return a},o(ho,e,r.av))}),d0=$(function(e,r){return o($r,0,So(o(xo,m0(e),r)))}),p0=$(function(e,r){return o(d0,e,r.eA)}),ot=p0,dn=function(e){return Er(wr*(e/180))},b0=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fX-n.fX,c=a.fT-n.fT,l=o(ke,J(c),o(ke,J(i),J(t)));if(l){var u=t/l,v=i/l,f=c/l,m=de(f*f+v*v+u*u);return re({fT:f/m,fX:v/m,c6:u/m})}else return q}),it=function(e){return e},jo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),ca=function(e){var r=e,n=o(ke,J(r.fT),o(ke,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=de(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c6:a/c})}else return q},Pa=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),g0=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c6*n.c6}),Nl=$(function(e,r){var n=e,a=r;return O(a,n)>0}),h0=$(function(e,r){var n=e,a=r;return O(a,n)<0}),_0=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),w0=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c6*n.c6;return{fT:n.fT*t,fX:n.fX*t,c6:n.c6*t}}),y0=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},qe=0,Gl={fT:0,fX:0,c6:0},x0=x(function(e,r,n){return o(Ft,function(a){var t=o(_0,o(w0,a,r),r);return o(Ft,function(i){var c=o(jo,r,e),l=o(g0,n,c),u=o(Nl,qe,l)?c:o(h0,qe,l)?y0(c):Gl;return o(Le,function(v){return A(a,i,v)},ca(u))},ca(t))},ca(e))}),S0=function(e){var r=e,n=J(r.c6),a=J(r.fX),t=J(r.fT);if(O(t,a)<1)if(O(t,n)<1){var i=de(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=de(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(O(a,n)<1){var i=de(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=de(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},No=function(e){var r=S0(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return z(r,c)},qr=function(e){var r=e;return r},T0=$(function(e,r){var n=No(e),a=n.a,t=n.b;return fr({cB:r,c4:a,c5:t,c7:e})}),C0=function(e){var r=o(Pa,e.aS,e.dj),n=qr(e.ei),a=o(jo,r,n),t=p(x0,r,n,a);if(t.$){var v=ca(r);if(v.$){var m=No(e.ei),d=m.a,s=m.b;return fr({cB:e.dj,c4:s,c5:e.ei,c7:d})}else{var f=v.a;return o(T0,f,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return fr({cB:e.dj,c4:u,c5:l,c7:c})}},L0=function(e){return{$:0,a:e}},la=function(e){var r=e;return .5*r},P0=$v,z0=function(e){var r=e;return P0(r)},k0=function(e){var r=la(Re(e.ej)),n=z0(r);return{cM:L0(n),c2:e.c2}},M0=function(e){var r=e.aS,n=e.dj,a=e.ei;return k0({ej:dn(40),c2:C0({dj:it(n),aS:it(r),ei:o($r,Fo,o(b0,Hr,it(a)))})})},D0=function(e){return e},Fr=function(e){return e},B0=function(e){return Fr(.01*e)},Vi=function(e){return e},A0=function(e){return e},F0=function(e){return{$:0,a:e}},V0=F0,E0={$:3},R0=E0,j0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),N0=j0,G0=function(e){return{$:1,a:e}},W0=G0,H0=function(e){return o(Fn,"height",Fe(e))},X0=function(e){return s$(b$(e))},U0=X0,I0=function(e){return{$:2,a:e}},O0=I0,J0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ye(l*1e3)/1e3},c=function(l){return Ye(l*1e4)/100};return Tl(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},q0=$(function(e,r){switch(r.$){case 0:return o(Bf,e,r);case 1:return o(Af,e,r);case 2:return o(Ff,e,r);case 3:return o(Vf,e,r);case 4:return o(Ef,e,r);default:return o(Rf,e,r)}}),Y0=$(function(e,r){switch(r.$){case 0:return o(uf,e,r);case 1:return o(vf,e,r);case 2:return o($f,e,r);case 3:return o(ff,e,r);case 4:return o(sf,e,r);case 5:return o(mf,e,r);case 6:return o(df,e,r);case 7:return o(pf,e,r);default:return bf(e)}}),Z0=x(function(e,r,n){return p(Df,e,r,n)}),Ei=function(e){var r=e;return r},on=Y$,ct=C(on,1,1,1,1),Ze=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),Q0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),K0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(Q0,n*a/t,n,n*(1-a-t)/t)}),ep=function(e){var r=e.a,n=e.b,a=e.c;return p(Xn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Go=$(function(e,r){return ep(o(K0,e,r))}),Wl=$(function(e,r){return{dp:hr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),er=nf,rp=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},lt=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(on,a.bY,a.bY,a.bY,i);return ye(t,e,c,rp(a),a.dp,r,n)}),Hl=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,f=n,m=o(Wl,c,a),d=l,s=i;e=u,r=v,n=f,a=m,t=d,i=s;continue e;case 1:var g=t.b,b=o(k,S(lt,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(k,S(lt,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var _=t.a,T=o(k,S(lt,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(Vn,C(Hl,e,r,n,a),i,M)}}),np=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Xl=np,Wo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ap=function(e){var r=e.Z,n=e.W,a=e.V;return C(Wo,518,r,n,a)},tp=$(function(e,r){return{$:6,a:e,b:r}}),op=tp,Ul=h([ap({V:1,W:0,Z:!1}),C(Xl,!1,!1,!1,!1),o(op,0,1)]),en=519,Ho=8,Il=15,Zr=7681,ip={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=lf,cp=$(function(e,r){return{$:0,a:e,b:r}}),lp=cp({df:1,$7:0,dV:5}),Ae=W$,up=lp(h([{bU:o(Ae,-1,-1)},{bU:o(Ae,1,-1)},{bU:o(Ae,-1,1)},{bU:o(Ae,1,1)}])),vp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},$p=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Xo=x(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,f){var m=v;return f(m)}),l=$(function(v,f){var m=v;return f(m)}),u=function(v){return o(ae,c(v.bm),o(ae,l(v.a9),o(ae,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p($p,a,t,i)))}),Uo=function(e){return p(Xo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Io=function(e){return S(ne,h([Uo(e),C(Xl,!1,!1,!1,!1)]),vp,ip,up,{})},fp=Io({a9:Zr,cp:0,cO:Ho,bm:en,c3:Il,bu:Zr,bv:Zr}),sp=516,Ri=5386,Se=7680,mp=function(e){return o(Nn,2,e+4)},Ol=function(e){return Io({a9:Se,cp:Il,cO:Ho,bm:sp,c3:mp(e),bu:Ri,bv:Ri})},dp=x(function(e,r,n){return He(h([p(Ze,e,n,Ul),h([Ol(r),fp])]))}),pp=$(function(e,r){return He(o(Wc,dp(e),r))}),bp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Wo,513,r,n,a)},gp=bp({V:1,W:0,Z:!0}),hp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},_p=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var f=u.a,m=u.b,d=u.c,s=v.a,g=v.b,b=v.c;return hp(f)(m)(d)(s)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},wp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ji=$(function(e,r){var n=e,a=r;return p(wp,32774,n,a)}),yp=1,Ni=771,xp=770,Oo=_p({bw:0,aH:o(ji,yp,Ni),bz:0,bB:o(ji,xp,Ni),bG:0,bW:0}),Xr=h([gp,Oo]),Sp=function(e){var r=e;return r.dO},Tp=function(e){var r=e;return r.dP},Jl=function(e){var r=e;return r.dQ},Cp=function(e){var r=e;return r.dR},Lp=function(e){var r=e;return r.dS},ql=function(e){var r=e;return r.dT},Yl=function(e){return A(o(vr,Cp(e),Sp(e)),o(vr,Lp(e),Tp(e)),o(vr,ql(e),Jl(e)))},Gi=function(e){var r=e;return tn(r)},Pp=function(e){return e},zp=function(e){return fr({cB:Pp({fT:e.H,fX:e.I,c6:e.J}),c4:ur({fT:e.q,fX:e.r,c6:e.s}),c5:ur({fT:e.t,fX:e.u,c6:e.v}),c7:ur({fT:e.w,fX:e.x,c6:e.y})})},ut=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c6*v.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),Zl=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,v=n.c7,f=v,m=n.c5,d=m,s=n.c4,g=s;return{fT:c*g.fT+l*g.fX+u*g.c6,fX:c*d.fT+l*d.fX+u*d.c6,c6:c*f.fT+l*f.fX+u*f.c6}}),Ql=$(function(e,r){return{cB:o(Zl,e,tn(r)),c4:o(ut,e,Nr(r)),c5:o(ut,e,Gr(r)),c7:o(ut,e,Wr(r))}}),za=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(ke,n,a)}),ua=$(function(e,r){return O(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ua,n,a)}),kp=$(function(e,r){var n=za(r),a=za(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Xe=function(e){var r=e;return r},Mp=function(e){var r=e;return A(r.fT,r.fX,r.c6)},xn=$(function(e,r){var n=e,a=r;return a+n}),Dp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=la(Re(a)),c=la(Re(n)),l=la(Re(t)),u=Mp(r),v=u.a,f=u.b,m=u.c;return{dO:o(xn,c,v),dP:o(xn,i,f),dQ:o(xn,l,m),dR:o(vr,c,v),dS:o(vr,i,f),dT:o(vr,l,m)}}),Wi=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fX*r,f=t.fT*r,m=Xe(Wr(e)),d=J(l*m.fT)+J(c*m.fX)+J(i*m.c6),s=Xe(Gr(e)),g=J(l*s.fT)+J(c*s.fX)+J(i*s.c6),b=Xe(Nr(e)),w=J(l*b.fT)+J(c*b.fX)+J(i*b.c6),y=o(Dp,A(w,g,d),o(Zl,e,p(gr,f,v,u)));if(a.$)return re(y);var _=a.a;return re(o(kp,_,y))}),Gt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var s=e,g=r,b=n,w=i;e=s,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Wi,e,r,c,n),s=e,g=r,b=l,w=i;e=s,r=g,n=b,a=w;continue e;case 2:var s=e,g=r,b=n,w=i;e=s,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Wi,e,r,c,n),s=e,g=r,b=l,w=i;e=s,r=g,n=b,a=w;continue e;case 4:var u=t.a,s=e,g=r,b=C(Gt,e,r,n,u),w=i;e=s,r=g,n=b,a=w;continue e;default:var v=t.a,f=t.b,m=o(Ql,zp(v),e),d=r*v.bY,s=e,g=r,b=C(Gt,m,d,n,h([f])),w=i;e=s,r=g,n=b,a=w;continue e}}else return n}),cn=U$,ln=I$,un=O$,Kl=function(e){return{$:4,a:e}},Bp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Un=function(e){return Kl(o(Bp,e,L))},Ap={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Fp=function(e){var r=e;return r},Hi=Io({a9:Zr,cp:0,cO:Ho,bm:en,c3:255,bu:Zr,bv:Zr}),Vp=function(e){var r=e,n=o(ke,J(r.fT),o(ke,J(r.fX),J(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=de(i*i+t*t+a*a);return c*n}else return qe},Ce={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fT:0,fX:0,c6:0},je=$(function(e,r){var n=e,a=r;return er({dx:n.fT,dy:n.bW,dz:a.fT,dA:a.bW,dB:n.fX,dC:n.bG,dD:a.fX,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),pn=z({be:o(je,Ce,Ce),bL:o(je,Ce,Ce),bM:o(je,Ce,Ce),bN:o(je,Ce,Ce)},C(on,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Xi=function(e){var r=e;return-r},eu=514,ru=function(e){var r=e.Z,n=e.W,a=e.V;return C(Wo,515,r,n,a)},nu=240,Ep=h([ru({V:1,W:0,Z:!0}),Uo({a9:Se,cp:nu,cO:0,bm:eu,c3:0,bu:Se,bv:Se}),Oo]),Rp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=Re(a),l=c,u=Re(t),v=u,f=n.cM;if(f.$){var d=f.a;return zt(v)?er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=f.a;return zt(v)?er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Zn=$(function(e,r){return(1&e>>r)===1?0:1}),jp=function(e){return h([ru({V:1,W:0,Z:!0}),Uo({a9:Se,cp:nu,cO:e,bm:eu,c3:0,bu:Se,bv:Se}),Oo])},Np=x(function(e,r,n){return He(o(ee,function(a){var t=a<<4,i=C(on,o(Zn,a,0),o(Zn,a,1),o(Zn,a,2),o(Zn,a,3));return p(Ze,e,z(r,i),jp(t))},o(_r,1,o(Nn,2,n)-1)))}),Mn=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Qr=function(e){var r=e;return r},Gp=af,Ui=function(e){var r=e;return Mn(Wr(r))},Wp={cB:Hr,c4:Ao,c5:Vo,c7:Ro},Ua=function(e){var r=e;return r},Hp=function(e){var r=Ua(tn(e)),n=Xe(Wr(e)),a=Xe(Gr(e)),t=Xe(Nr(e));return er({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Xp=$(function(e,r){var n=r;return Hp(o(Ql,n,e))}),Up=function(e){return o(Xp,Wp,e)},Ip=function(e){var r=e;return r.c2},Op=function(e){var r=e;return Nr(r)},Jp=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),qp=function(e){var r=e;return Gr(r)},Yp=function(e){var r=Ip(e.ev),n=fr({cB:Gi(r),c4:Op(r),c5:qp(r),c7:Mn(Ui(r))}),a=Un(e.aQ),t=a,i=C(Gt,n,1,q,h([t]));if(i.$===1)return L;var c=i.a,l=Up(r),u=o(ie,.99,o(ce,Re(e.aJ),Xi(Jl(c)))),v=Yl(c),f=v.a,m=v.b,d=v.c,s=Vp(p(Jp,f,m,d)),g=o(ie,1.01,o(xn,s,Xi(ql(c)))),b=o(Rp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Gp(b).dM,y=w?Xe(Mn(Ui(r))):Qr(Gi(r)),_=function(){var te=e.b_;switch(te.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var se=te.a;return z(3,se);case 4:var se=te.a;return z(4,se);default:return z(5,0)}}(),T=_.a,M=_.b,G=e.bE,j=G,R=o(Go,j,e.b0),N=R,W=er({dx:0,dy:y.fT,dz:cn(N),dA:e.ec,dB:0,dC:y.fX,dD:ln(N),dE:Fp(s),dF:0,dG:y.c6,dH:un(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),F=ye(Hl,W,l,b,Ap,t,{M:L,U:L,fz:L}),Y=e.bK;switch(Y.$){case 0:var Q=Y.a;return He(h([p(Ze,F.M,z(Q,ct),Xr),p(Ze,F.U,pn,Xr)]));case 1:var Q=Y.a;return He(h([p(Ze,F.M,pn,Xr),h([Hi]),p(Ze,F.fz,Q.be,Ul),h([Ol(0)]),p(Ze,F.M,z(Q,ct),Ep),p(Ze,F.U,pn,Xr)]));default:var oe=Y.a,ve=Y.b;return He(h([p(Ze,F.M,z(ve,ct),Xr),h([Hi]),o(pp,F.fz,oe),p(Np,F.M,ve,Vr(oe)),p(Ze,F.U,pn,Xr)]))}},Zp=function(e){return o(Fn,"width",Fe(e))},Qp=$(function(e,r){var n=h([W0(1),O0(0),V0(!0),C(N0,0,0,0,0)]),a=function(){var T=e.b1;switch(T.$){case 0:return A(n,"0",1);case 1:return A(o(k,R0,n),"1",1);default:var M=T.a;return A(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,f=Ei(v),m=o(he,"height",Fe(f)+"px"),d=Ei(u),s=d/f,g=o(Ga,function(T){return Yp({eq:s,ev:e.ev,aJ:e.aJ,aQ:T.aQ,bE:T.bE,bK:T.bK,ec:c,b_:T.b_,b0:T.b0})},r),b=o(he,"width",Fe(d)+"px"),w=e.aI,y=w,_=J0(y);return p(U0,"div",h([o(he,"padding","0px"),b,m]),h([z(i,p(Z0,t,h([Zp(Ye(d*c)),H0(Ye(f*c)),b,m,o(he,"display","block"),o(he,"background-color",_)]),g))]))}),Kp=function(e){return o(Qp,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL},h([{aQ:e.aQ,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},au=function(e){return e},Ii=au({fT:.31271,fX:.32902}),e3=$(function(e,r){var n=e,a=Xe(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(Go,r.ce,r.b7),u=l;return{bz:un(u),ex:n,bG:ln(u),cK:0,bW:cn(u),c_:1,fT:-t,fX:-i,c6:-c}}),r3=function(e){return e},n3=function(e){return r3(1.2*o(Nn,2,e))},vt=function(e){return e},a3={$:0},t3=a3,tu=function(e){return e},Oi=function(e){var r=e;return r},o3=function(e){e:for(;;){if(hr(e.e2,qe)&&hr(e.e3,qe))return Ce;if(o(Nl,Re(e.e2),Re(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:Mn(e.ei)};e=r;continue e}else{var n=J(Oi(e.e3)/wr),a=J(Oi(e.e2)/wr),t=Xe(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(Go,tu(1),e.b7),v=u;return{bz:a*un(v),ex:!1,bG:a*ln(v),cK:n/a,bW:a*cn(v),c_:3,fT:i,fX:c,c6:l}}}},Ji=function(e){return o3({b7:e.b7,e2:e.ce,e3:qe,ei:e.ei})},i3=function(e){var r=e;return r},ou=function(e){var r=p(El,1667,25e3,i3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return au({fT:n,fX:a})},iu=function(e){return e},c3=ou(iu(12e3)),l3=ou(iu(5600)),u3=function(e){return{$:2,a:e}},v3=function(e){return u3(e)},$3=$(function(e,r){return{$:2,a:e,b:r}}),cu=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},f3=function(e){var r=e;return r.ex},s3=cu(pn.a),m3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(k,a,i),c):z(i,o(k,a,c))});return p(or,n,z(L,L),r)}),d3=function(e){var r=e;return er({dx:r.fT,dy:r.bW,dz:0,dA:0,dB:r.fX,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},p3=K(function(e,r,n,a,t,i,c,l){var u=o(m3,f3,h([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,f=u.b;if(v.b){var m=le(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,s=m.b,g=s.a,b=s.b,w=b.a,y=b.b,_=y.a;return o($3,o(ee,d3,v),{be:o(je,d,g),bL:o(je,w,_),bM:o(je,t,i),bN:o(je,c,l)})}else return s3}else return cu({be:o(je,e,r),bL:o(je,n,a),bM:o(je,t,i),bN:o(je,c,l)})}),b3=x(function(e,r,n){return Aa(p3,e,r,n,Ce,Ce,Ce,Ce,Ce)}),g3=function(e){var r=o(e3,A0(e.fz),{b7:l3,eG:e.fI,ce:vt(8e4)}),n=Ji({b7:c3,ce:vt(2e4),ei:e.ei}),a=Ji({b7:Ii,ce:vt(15e3),ei:Mn(e.ei)}),t=p(b3,r,n,a);return Kp({b1:v3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL,aQ:e.aQ,bE:n3(15),bK:t,b_:t3,b0:Ii})},lu=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),h3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),uu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),vu=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),_3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),w3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),y3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Jo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(y3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(lu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(h3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(uu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(w3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(vu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(_3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},qo={$:0},x3=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,f=za(c(u)),m=o(fe,f.dR,e),d=o(ce,f.dO,r),s=o(fe,f.dS,n),g=o(ce,f.dP,a),b=o(fe,f.dT,t),w=o(ce,f.dQ,i),y=c,_=v;e=m,r=d,n=s,a=g,t=b,i=w,c=y,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),S3=x(function(e,r,n){var a=za(e(r));return Aa(x3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),$t=$(function(e,r){var n=e,a=r;return O(a,n)<1}),$u=function(e){return o($t,e.dO,e.dR)&&o($t,e.dP,e.dS)&&o($t,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Dn=function(e){var r=e;return r},fu=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=Dr(n),c=Br(n),l=Ar(n),u=Dr(a),v=Br(a),f=Ar(a),m=Dr(t),d=Br(t),s=Ar(t);return $u({dO:o(ce,i,o(ce,u,m)),dP:o(ce,c,o(ce,v,d)),dQ:o(ce,l,o(ce,f,s)),dR:o(fe,i,o(fe,u,m)),dS:o(fe,c,o(fe,v,d)),dT:o(fe,l,o(fe,f,s))})},su=J$,Pe=function(e){return su(Ua(e))},mu=function(e){var r=e;return r},Ia=function(e){return su(mu(e))},T3=$(function(e,r){var n=e,a=r,t=o(ke,J(a.fT),o(ke,J(a.fX),J(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=de(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return Gl}),C3=T3(tu(1)),du=x(function(e,r,n){var a=o(Pa,r,n),t=o(Pa,e,r);return C3(o(jo,a,t))}),L3=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=Ia(p(du,n,a,t));return A({o:i,bU:Pe(n)},{o:i,bU:Pe(a)},{o:i,bU:Pe(t)})},P3=$(function(e,r){return{$:2,a:e,b:r}}),pu=P3({df:3,$7:0,dV:4}),z3=function(e){if(e.b){var r=e.a,n=e.b,a=pu(o(ee,L3,e)),t=p(S3,fu,r,n);return C(lu,t,e,a,0)}else return qo},bu=function(){var e=Fr(1),r=Fr(1),n=Fr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),v=o(ie,.5,r),f=p(me,i,v,a),m=p(me,i,v,l),d=o(ie,.5,n),s=p(me,d,t,a),g=p(me,d,v,a),b=p(me,d,t,l),w=p(me,d,v,l);return Jo(z3(h([p(De,c,g,s),p(De,c,f,g),p(De,u,b,w),p(De,u,w,m),p(De,s,g,w),p(De,s,w,b),p(De,c,m,f),p(De,c,u,m),p(De,c,s,b),p(De,c,b,u),p(De,f,w,g),p(De,f,m,w)])))}(),Kn={$:0},k3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),M3=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ia(p(du,u,l,c)),f={o:v,bU:Pe(u)},m={o:v,bU:Pe(l)},d={o:v,bU:Pe(c)};return o(k,f,o(k,m,o(k,d,n)))}),Yo=function(e){var r=e;return r.D},D3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Wt=4294967295>>>32-Ln,Ht=ev,B3=x(function(e,r,n){e:for(;;){var a=Wt&r>>>e,t=o(Ht,a,n);if(t.$){var v=t.a;return o(Ht,Wt&r,v)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),A3=function(e){return e>>>5<<5},F3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,A3(n))>-1?re(o(Ht,Wt&e,i)):re(p(B3,a,e,t))}),Zo=function(e){var r=e;return r.ah},ft=$(function(e,r){return o(F3,e,Zo(r))}),V3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(D3,x(function(c,l,u){return A(c,l,u)}),o(ft,a,e),o(ft,t,e),o(ft,i,e))};return o(xo,r,Yo(e))},E3=x(function(e,r,n){e:for(;;){var a=o(fo,Ee,e),t=a.a,i=a.b;if(O(Lt(t),Ee)<0)return o(qc,!0,{z:r,l:n,p:t});var c=i,l=o(k,Oc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Qo=function(e){return e.b?p(E3,e,L,0):Uc},R3=x(function(e,r,n){return e(r(n))}),j3=$(function(e,r){return!o(il,o(R3,ws,e),r)}),N3=$(function(e,r){return p(or,$(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),G3=function(e){var r=e.a;return r},gu=$(function(e,r){var n=G3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(j3,a,r)?{D:r,ah:e}:{D:o(N3,a,r),ah:e}}),W3=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),In=W3({df:1,$7:3,dV:4}),va=$(function(e,r){var n=Qr(r),a=Qr(e);return z(A(a.fT,a.fX,a.c6),A(n.fT,n.fX,n.c6))}),qi=p(Xn,0,0,0),st=Ue(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ho,o(va,e,r),t);if(v.$){var m={o:qi,bU:Pe(r)},d={o:qi,bU:Pe(e)},s=u+1,g=u;return A(o(k,A(n,g,s),o(k,A(n,s,a),c)),o(k,m,o(k,d,l)),u+2)}else{var f=v.a;return A(o(k,A(n,f,a),c),l,u)}}),H3=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),m=e(l),d=e(c),s=a+2,g=a+1,b=a,w=e,y=r,_=v,T=a+3,M=ye(st,f,d,s,b,r,ye(st,m,f,g,s,r,ye(st,d,m,b,g,r,t)));e=w,r=y,n=_,a=T,t=M;continue e}else{var G=t,j=G.a,R=G.b;return z(j,Ve(R))}}),X3=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),m=e(l),d=e(c),s=n+2,g=n+1,b=n,w=p(hn,o(va,d,f),s,p(hn,o(va,f,m),g,p(hn,o(va,m,d),b,t))),y=o(k,A(b,g,s),a),_=e,T=v,M=n+3,G=y,j=w;e=_,r=T,n=M,a=G,t=j;continue e}else return A(a,t,n)}),Lr=x(function(e,r,n){var a=V3(n),t=p(or,M3(r),L,a),i=S(X3,r,a,0,L,Cl),c=i.a,l=i.b,u=i.c,v=S(H3,r,l,a,0,A(c,L,u)),f=v.a,m=v.b,d=Sl(m)?t:le(t,m);return p(k3,e,o(gu,Qo(d),f),o(In,d,f))}),Xt=function(e){return{D:o(ee,function(r){return A(3*r,3*r+1,3*r+2)},o(_r,0,Vr(e)-1)),ah:Qo(He(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},hu=function(e){switch(e.$){case 0:return Kn;case 1:var a=e.a,r=e.b,n=o(ee,Dn,r);return p(Lr,a,Mr,Xt(n));case 2:var a=e.a,r=e.b,n=o(ee,Dn,r);return p(Lr,a,Mr,Xt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,Mr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bU},t);case 8:return Kn;case 9:return Kn;default:return Kn}},Yi=hu(bu),_u={$:0},P=_u,be=$(function(e,r){return{$:1,a:e,b:r}}),U3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},I3=1029,O3=function(e){return{$:5,a:e}},wu=function(e){var r=e;return O3(r)},J3=wu(I3),q3=1028,Y3=wu(q3),ze=x(function(e,r,n){return r===1?e?o(k,J3,n):o(k,Y3,n):n}),yu={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},mt=E(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,f,m){return S(ne,p(ze,l,a,m),yu,U3,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Ko={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=E(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,f,m){return S(ne,p(ze,l,a,m),xu,Ko,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Su=$(function(e,r){return{$:3,a:e,b:r}}),Z3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},Tu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Q3=E(function(e,r,n,a){return o(Su,n,K(function(t,i,c,l,u,v,f,m){return S(ne,m,Tu,Z3,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),ei={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},On=function(e){var r=e;return r},Oa=q$,cr=_e(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,f,m,d){return S(ne,p(ze,u,t,d),xu,ei,a,{aO:o(Oa,On(r),e),b:l,c,d:f,e:i,f:v})}))}),K3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bT",sceneProperties:"e"}},eb=_e(function(e,r,n,a,t){return o(Su,a,K(function(i,c,l,u,v,f,m,d){return S(ne,d,Tu,K3,t,{aO:o(Oa,On(r),e),b:l,c,bT:n,d:f,e:i,f:v})}))}),Cu={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ea=E(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,f,m){var d=f.a,s=f.b;return S(ne,p(ze,l,a,m),Lu,Cu,n,{P:s,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},zu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rb=Ue(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,f,m,d,s){var g=d.a,b=d.b;return S(ne,p(ze,v,i,s),zu,Pu,t,{P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cr:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f})}))}),ku={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aX",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},nb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return o(be,u,K(function(m,d,s,g,b,w,y,_){var T=y.a,M=y.b;return S(ne,p(ze,g,f,_),zu,ku,v,{b5:e,b8:r,b9:i,ca:a,P:M,be:T.be,bL:T.bL,bM:T.bM,bN:T.bN,cv:t,b:s,c:d,aX:c,d:w,cS:n,e:m,a0:l,f:b})}))}}}}}}}}}}},Mu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},ra=Ue(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,f,m,d,s){var g=d.a,b=d.b;return S(ne,p(ze,v,i,s),Lu,Mu,t,{b4:e,P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f})}))}),ab=function(e){return{$:0,a:e}},Zi=$(function(e,r){return{$:1,a:e,b:r}}),Sn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),tb=function(e){return C(on,cn(e),ln(e),un(e),1)},ri=C(on,0,0,0,0),$a=$(function(e,r){if(r.$){var a=r.a.C;return z(a,ri)}else{var n=r.a;return z(e,tb(n))}}),Du=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Zi,z(t,ri),o(Sn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Zi,o($a,t,e),o(Sn,t,r))}else{var a=n.a.a;return n.b.a,ab(a)}}),ob=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),na=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ib=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),cb=function(e){return o(Ae,e,1)},Ut=o(Ae,0,0),Ur=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Ut)}else{var n=r.a;return z(e,cb(n))}}),Bu=E(function(e,r,n,a){var t=C(ib,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(na,z(u,ri),o(Ur,u,r),o(Ur,u,n),o(Sn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(na,o($a,u,e),z(u,Ut),o(Ur,u,n),o(Sn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(na,o($a,u,e),o(Ur,u,r),z(u,Ut),o(Sn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(na,o($a,u,e),o(Ur,u,r),o(Ur,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(ob,i,c,l)}}),lb={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},dt=_e(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,f,m,d){return S(ne,p(ze,u,t,d),yu,lb,a,{b2:On(r),bC:e,b:l,c,d:f,e:i,f:v})}))}),Au={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ub=E(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,f,m){var d=f.a,s=f.b;return S(ne,p(ze,l,a,m),Au,Pu,n,{P:s,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),vb=Jt(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,f,m,d,s,g,b,w){var y=b.a,_=b.b;return S(ne,p(ze,d,u,w),Au,ku,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:y.be,bL:y.bL,bM:y.bM,bN:y.bN,cv:t,b:m,c:f,aX:e,d:g,cS:n,e:v,a0:0,f:s})}))}),Bn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),$b=function(e){var r=e;return p(Bn,r.dR,r.dO,.5)},fb=function(e){var r=e;return p(Bn,r.dS,r.dP,.5)},sb=function(e){var r=e;return p(Bn,r.dT,r.dQ,.5)},mb=function(e){return p(me,$b(e),fb(e),sb(e))},H=function(e){var r=Yl(e),n=r.a,a=r.b,t=r.c;return{ey:Ua(mb(e)),eS:n/2,eT:a/2,eU:t/2}},ni=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(mt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(mt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(mt,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(Q3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(dt,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(dt,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(dt,l,v,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(eb,u,v,i,H(t),c)}}case 2:e.a;var f=e.b,j=e.c,m=o(Du,f,j);if(m.$){var g=m.a,b=g.a;g.b;var w=m.b,y=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,s=r.d;return C(ub,b,H(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return ye(rb,b,y,_,H(t),c,s);case 8:return P;case 9:return P;default:return P}}else{var d=m.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,s=r.d;return C(ea,d,H(t),c,s);case 3:return P;case 4:var t=r.a,c=r.c,s=r.d;return C(ea,d,H(t),c,s);case 5:return P;case 6:var t=r.a,c=r.c,s=r.d;return C(ea,d,H(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return C(ea,d,H(t),c,s);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,M=e.c,G=e.d,j=e.e,R=C(Bu,T,M,G,j);if(R.$){var Y=R.a,Q=Y.a,oe=Y.b,ve=R.b,te=ve.a,se=ve.b,Me=R.c,Te=Me.a,dr=Me.b,pr=R.d,y=pr.a,_=pr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return qu(vb,Q,oe,te,se,Te,dr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return nb(Q)(oe)(te)(se)(Te)(dr)(y)(_)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return ye(ra,N,W,F,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return ye(ra,N,W,F,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return ye(ra,N,W,F,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(ra,N,W,F,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),pt=function(e){var r=e;return r.fT},bt=function(e){var r=e;return r.fX},gt=function(e){var r=e;return r.c6},db=function(e){var r=e,n=gt(r.c7),a=bt(r.c7),t=pt(r.c7),i=gt(r.c5),c=bt(r.c5),l=pt(r.c5),u=gt(r.c4),v=bt(r.c4),f=pt(r.c4);return f*c*n+v*i*t+u*l*a-u*c*t-v*l*n-f*i*a>0},pb=function(e){var r=Ua(tn(e)),n=Xe(Wr(e)),a=Xe(Gr(e)),t=Xe(Nr(e));return{dp:db(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bY:1}},Ir=$(function(e,r){return{$:5,a:e,b:r}}),Fu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Wl,a,e);return o(Ir,i,t);case 1:return o(Ir,e,n);case 3:return o(Ir,e,n);case 2:return o(Ir,e,n);default:return o(Ir,e,n)}}),Vu=$(function(e,r){return o(Fu,pb(e),r)}),Ja=function(e){return{$:2,a:e}},bb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),gb=Q$,hb=Z$,Qi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,m=e.b,d=e.c,s=hb(a),g=s.fT,b=s.fX,w=s.c6,y=s.em,_=gb({em:y,fT:g*f,fX:b*m,c6:w*d});return Aa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},It=$(function(e,r){switch(r.$){case 0:return _u;case 5:var n=r.a,a=r.b;return o(Ir,n,o(It,e,a));case 1:var t=r.a,i=r.b;return o(be,o(bb,e,t),o(Qi,e,i));case 3:return r;case 2:var i=r.a;return Ja(o(Qi,e,i));default:var c=r.a;return Kl(o(ee,It(e),c))}}),ai=$(function(e,r){var n=r;return o(It,e,n)}),ti={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Eu=7683,Ru=7682,_b=p(Xo,{cp:0,cO:0,c3:15},{a9:Se,bm:en,bu:Se,bv:Eu},{a9:Se,bm:en,bu:Se,bv:Ru}),wb=p(Xo,{cp:0,cO:0,c3:15},{a9:Se,bm:en,bu:Se,bv:Ru},{a9:Se,bm:en,bu:Se,bv:Eu}),oi=$(function(e,r){return e?o(k,wb,r):o(k,_b,r)}),yb={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},xb=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return S(ne,o(oi,i,v),yb,ti,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},ka=function(e){var r=xb(e);if(r.$)return P;var n=r.a;return Ja(n)},Sb=E(function(e,r,n,a){var t=o(ni,n,bu),i=function(){var f=z(e,r);return f.a?f.b?Un(h([t,ka(Yi)])):t:f.b?ka(Yi):P}(),c=ko(a),l=c.a,u=c.b,v=c.c;return o(Vu,zo(a),o(ai,A(l,u,v),i))}),Tb=$(function(e,r){return C(Sb,!0,!0,e,r)}),ju=$(function(e,r){return{$:0,a:e,b:r}}),Cb=function(e){var r=yo(e),n=r.cN,a=r.cd,t=r.b6;return p(Xn,n,a,t)},Lb=function(e){return o(ju,0,jt(Cb(e)))},Pb=function(e){var r=e;return r.k},Tn=function(e){var r=e;return yr(r)},zb=$(function(e,r){var n=r;return n/e}),Ki=function(e){var r=e;return{fT:yr(r),fX:Rr(r)}},kb=$(function(e,r){var n=e.bU,a=e.o;return o(k,{o:Ia(a),bU:Pe(n)},r)}),Mb=Ba(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=un(l.bU),f=ln(l.bU),m=cn(l.bU),d=o(ua,e,m),s=o(ke,r,m),g=o(ua,n,f),b=o(ke,a,f),w=o(ua,t,v),y=o(ke,i,v),_=u;e=d,r=s,n=g,a=b,t=w,i=y,c=_;continue e}else return $u({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Nu=$(function(e,r){var n=un(e.bU),a=ln(e.bU),t=cn(e.bU);return qt(Mb,t,t,a,a,n,n,r)}),Db=function(e){var r=p(Ec,kb,L,Zo(e));if(r.b){var n=r.a,a=r.b,t=o(In,r,Yo(e)),i=o(Nu,n,a);return C(uu,i,e,t,0)}else return qo},ec=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),Ma=function(e){var r=e;return Rr(r)},Ot=function(e){return Er(2*wr*e)},Bb=Mr,rc=Bb({cB:Hr,c4:Ao,c5:Vo}),Gu=function(){var e=72,r=o(zb,e,Ot(1)),n=Fr(1),a=qr(Eo),t=qr(Al),i=Fr(1),c=o(ie,.5,i),l=p(me,qe,qe,c),u=o(ie,-.5,i),v=p(me,qe,qe,u),f=function(s){var g=o(ie,s,r),b=qr(o(ec,rc,Ki(g))),w=o(ie,Tn(g),n),y=o(ie,Ma(g),n),_=p(me,w,y,c),T=p(me,w,y,u),M=o(xa,e,s+1),G=o(ie,M,r),j=qr(o(ec,rc,Ki(G))),R=o(ie,Tn(G),n),N=o(ie,Ma(G),n),W=p(me,R,N,u),F=p(me,R,N,c);return h([A({o:t,bU:v},{o:t,bU:W},{o:t,bU:T}),A({o:b,bU:T},{o:j,bU:W},{o:j,bU:F}),A({o:b,bU:T},{o:j,bU:F},{o:b,bU:_}),A({o:a,bU:l},{o:a,bU:_},{o:a,bU:F})])},m=o(ee,f,o(_r,0,e-1)),d=Xt(He(m));return Jo(Db(d))}(),nc=hu(Gu),Ab=function(e){var r=e;return r.eG},Fb=function(e){var r=e;return r.cB},Vb=function(e){var r=Ab(e),n=No(r),a=n.a,t=n.b;return fr({cB:Fb(e),c4:a,c5:t,c7:r})},Eb=function(e){var r=e;return r.e9},Rb=function(e){var r=e;return r.fr},jb=E(function(e,r,n,a){var t=Vb(Pb(a)),i=o(ni,n,Gu),c=function(){var m=z(e,r);return m.a?m.b?Un(h([i,ka(nc)])):i:m.b?ka(nc):P}(),l=Rb(a),u=l,v=Eb(a),f=v;return o(Vu,t,o(ai,A(u,u,f),c))}),Nb=$(function(e,r){return C(jb,!0,!0,e,r)}),ac={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},tc={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},bn=function(e){var r=Dn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return er({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},aa=pu(h([A({cZ:0},{cZ:1},{cZ:2})])),Gb=$(function(e,r){var n=fu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(be,a,K(function(_,T,M,G,j,R,N,W){return S(ne,p(ze,G,0,W),ac,Ko,aa,{aw:t,b:M,c:T,d:R,e:_,br:bn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(be,a,K(function(_,T,M,G,j,R,N,W){return S(ne,p(ze,G,0,W),ac,ei,aa,{aO:o(Oa,On(c),i),b:M,c:T,d:R,e:_,br:bn(r),f:j})}));case 2:e.a;var l=e.b,s=e.c,u=o(Du,l,s);if(u.$)return P;var v=u.a;return o(be,a,K(function(_,T,M,G,j,R,N,W){var F=N.a,Y=N.b;return S(ne,p(ze,G,0,W),tc,Cu,aa,{P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cq:v,b:M,c:T,d:R,e:_,br:bn(r),f:j})}));default:e.a;var f=e.b,m=e.c,d=e.d,s=e.e,g=C(Bu,f,m,d,s);if(g.$)return P;var b=g.a,w=g.b,y=g.c;return o(be,a,K(function(_,T,M,G,j,R,N,W){var F=N.a,Y=N.b;return S(ne,p(ze,G,0,W),tc,Mu,aa,{b4:b,P:Y,be:F.be,bL:F.bL,bM:F.bM,bN:F.bN,cu:y,b:M,c:T,d:R,cR:w,e:_,br:bn(r),f:j})}))}}),Wb=function(){var e=h([{a$:o(Ae,0,1)},{a$:o(Ae,1,1)},{a$:o(Ae,2,1)},{a$:o(Ae,0,-1)},{a$:o(Ae,1,-1)},{a$:o(Ae,2,-1)}]),r=h([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(In,e,r)}(),Hb={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},oc=function(e){return Ja(K(function(r,n,a,t,i,c,l,u){return S(ne,o(oi,t,u),Hb,ti,Wb,{b:a,c:n,d:c,e:r,bZ:l,br:bn(e),f:i})}))},Xb=E(function(e,r,n,a){var t=o(Gb,n,a),i=z(e,r);return i.a?i.b?Un(h([t,oc(a)])):t:i.b?oc(a):P}),Ub=$(function(e,r){return C(Xb,!0,!0,e,r)}),Ib=$(function(e,r){var n=Ar(r),a=Ar(e),t=Br(r),i=Br(e),c=Dr(r),l=Dr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Ob=function(e){var r=Mo(e),n=r.a,a=r.b;return o(Ib,n,a)},ic={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jb=$(function(e,r){return{$:1,a:e,b:r}}),qb=Jb({df:2,$7:0,dV:1}),cc=qb(h([z({dw:0},{dw:1})])),Yb=$(function(e,r){var n=Ob(r),a=H(n),t=Mo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(be,a,K(function(v,f,m,d,s,g,b,w){return S(ne,w,ic,Ko,cc,{aw:l,du:Pe(c),dv:Pe(i),b:m,c:f,d:g,e:v,f:s})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(be,a,K(function(f,m,d,s,g,b,w,y){return S(ne,y,ic,ei,cc,{aO:o(Oa,On(u),l),du:Pe(c),dv:Pe(i),b:d,c:m,d:b,e:f,f:g})}));case 2:return P;default:return P}}),Zb=$(function(e,r){return o(Yb,e,r)}),lc=$(function(e,r){var n=e,a=r;return n/a}),Qb=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(hr(r,e))return c;var l=e,u=r-1,v=n,f=a,m=c;e=l,r=u,n=v,a=f,t=m;continue e}}),uc=$(function(e,r){return e<1?L:S(Qb,0,e,e,r,L)}),Kb=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Ia(a),bU:Pe(n),L:o(Ae,c,l)},r)}),eg=function(e){var r=p(Ec,Kb,L,Zo(e));if(r.b){var n=r.a,a=r.b,t=o(In,r,Yo(e)),i=o(Nu,n,a);return C(vu,i,e,t,0)}else return qo},Wu=$(function(e,r){var n=e,a=r,t=yr(a);return{fT:t*yr(n),fX:t*Rr(n),c6:Rr(a)}}),rg=function(){var e=Fr(1),r=72,n=o(_r,0,r-1),a=o(uc,r,o(Bn,qe,Ot(1))),t=vo(r/2),i=o(_r,0,t-1),c=o(uc,t,o(Bn,dn(90),dn(-90))),l=Qo(He(o(ee,function(f){return o(ee,function(m){return{o:qr(o(Wu,f,m)),bU:p(me,o(ie,Tn(m)*Tn(f),e),o(ie,Tn(m)*Ma(f),e),o(ie,Ma(m),e)),L:z(o(lc,f,Ot(1)),o(lc,o(xn,dn(90),m),dn(180)))}},c)},a))),u=$(function(f,m){return f*(t+1)+m}),v=He(o(ee,function(f){return He(o(ee,function(m){var d=o(u,f+1,m),s=o(u,f,m),g=o(u,f+1,m+1),b=o(u,f,m+1);return h([A(b,g,d),A(b,d,s)])},i))},n));return Jo(eg(o(gu,l,v)))}(),Da=72,ta=2*Da,ng=$(function(e,r){e:for(;;){var n=ta+1,a=o(xa,ta,2*e+3),t=o(xa,ta,2*e+2),i=2*e+1,c=2*e,l=ta,u=o(k,A(l,c,t),o(k,A(c,a,t),o(k,A(c,i,a),o(k,A(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),ag=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),tg=$(function(e,r){e:for(;;){var n=p(ag,0,2*wr,e/Da),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),og=function(){var e=o(tg,Da-1,h([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(ng,Da-1,L);return o(In,e,r)}(),ig={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},vc=function(e){return Ja(K(function(r,n,a,t,i,c,l,u){return S(ne,o(oi,!0,u),ig,ti,og,{aw:p(Xn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},cg=function(e){var r=mu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bY:1}},lg=$(function(e,r){return o(Fu,cg(e),r)}),ug=E(function(e,r,n,a){var t=o(ni,n,rg),i=function(){var u=z(e,r);return u.a?u.b?Un(h([t,vc()])):t:u.b?vc():P}(),c=Bo(a),l=c;return o(lg,o(Pa,Hr,Do(a)),o(ai,A(l,l,l),i))}),vg=$(function(e,r){return C(ug,!0,!0,e,r)}),$g=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),fg=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),sg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ju,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p($g,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Vl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(fg,n,a,t,i,c)}},mg=sg,Hu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(Tb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Ub,t,n)]);case 3:var t=e.a,a=e.b;return h([o(vg,mg(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Nb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Zb,Lb(c),l)]);default:var u=e.a;return o(Ga,Hu,u)}},dg=function(e){return o(Ga,Hu,e)},pg=$(function(e,r){return g3({aI:D0(e.es),ev:e.ev,aJ:B0(.5),cb:e.cb,aL:z(Vi(Ye(e.cT.fR)),Vi(Ye(e.cT.eW))),aQ:dg(r),fz:!0,fI:o(Wu,Er(e.fH),Er(e.fJ)),ei:Ro})}),$c=C(jn,255/255,255/255,255/255,1),bg=$(function(e,r){return o(pg,{es:$c,ev:M0({dj:{fT:o(ot,"camera x",e),fX:o(ot,"camera y",e),c6:o(ot,"camera z",e)},aS:{fT:0,fX:0,c6:0},ei:{fT:0,fX:1,c6:0}}),cb:e.cb,cT:e.cT,fH:-Ge(135),fJ:-Ge(45)},h([o(kn,-4,o(jl,Rl($c),A(40,40,1))),o(kn,-.5,s0(e))]))}),gg=C(Sd,bg,Md,kd,Td);const hg={Main:{init:gg(o(B,function(e){return Be({e1:e})},o(D,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return Be({aK:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(f){return o(B,function(m){return Be({eo:m,eB:f,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Z))},o(D,"control",Z))},o(D,"down",Z))},o(D,"downs",_a(zn)))},o(D,"left",Z))},o(D,"pressedKeys",_a(zn)))},o(D,"right",Z))},o(D,"shift",Z))},o(D,"up",Z))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return Be({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Z))},o(D,"isDown",Z))},o(D,"move",Z))},o(D,"rightDown",Z))},o(D,"rightUp",Z))},o(D,"up",Z))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return Be({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return Be({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},_g=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),a=s=>["ShiftLeft","ShiftRight"].includes(s.code),t=s=>s.code=="ArrowLeft",i=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,v=s=>s.button==2;function f(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function m(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(V.keyboard.downs.push(s.code),V.keyboard.pressedKeys.push(s.code),r(s)&&(V.keyboard.control=!0),n(s)&&(V.keyboard.alt=!0),a(s)&&(V.keyboard.shift=!0),t(s)&&(V.keyboard.left=!0),i(s)&&(V.keyboard.right=!0),c(s)&&(V.keyboard.up=!0),l(s)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",s=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=s.code),r(s)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(s)&&(V.keyboard.alt=!1),a(s)&&(V.keyboard.shift=!1),t(s)&&(V.keyboard.left=!1),i(s)&&(V.keyboard.right=!1),c(s)&&(V.keyboard.up=!1),l(s)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{V.pointer.x=-.5*V.screen.width+s.pageX,V.pointer.y=.5*V.screen.height-s.pageY,u(s)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(s)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+s.pageX,V.pointer.y=.5*V.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(s)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(s)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{V.wheel.deltaX=s.deltaX,V.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{f(V)}),window.addEventListener("focus",s=>{f(V)}),window.addEventListener("visibilitychange",s=>{f(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(s){const g=s/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},wg=()=>{ht("pointerdown"),ht("wheel"),ht("keydown")},ht=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},yg=hg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});wg();_g(yg);
