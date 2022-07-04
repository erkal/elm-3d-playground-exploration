const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function gr(e,r,n){return n.a=e,n.f=r,n}function $(e){return gr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return gr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return gr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function be(e){return gr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return gr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function za(e){return gr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return gr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function It(e){return gr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Ce(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Xt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ka(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Iu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Xu=[];function Uu(e){return e.length}var Ju=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ou=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),qu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Yu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Zu()),r});function Zu(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function pr(e,r){for(var n,a=[],t=pt(e,r,0,a);t&&(n=a.pop());t=pt(n.a,n.b,0,a));return t}function pt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=di(e),r=di(r));for(var t in e)if(!pt(e[t],r[t],n+1,a))return!1;return!0}$(pr);$(function(e,r){return!pr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var Qu=$(function(e,r){var n=J(e,r);return n<0?Dc:n?Vf:Mc}),zn=0;function L(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var P={$:0};function rr(e,r){return{$:1,a:e,b:r}}var Ku=$(rr);function _(e){for(var r=P,n=e.length;n--;)r=rr(e[n],r);return r}function Ma(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});be(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});Ue(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ma(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return _(Ma(r).sort(function(n,a){var t=o(e,n,a);return t===Mc?0:t===Dc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan;$(Math.atan2);function cv(e){return e}function lv(e){return e===1/0||e===-1/0}var uv=Math.ceil,vv=Math.floor,$v=Math.round,fv=Math.sqrt,ei=Math.log,sv=isNaN;function dv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var mv=$(function(e,r){return e+r});function pv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}$(function(e,r){return e+r});function bv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var hv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),_v=$(function(e,r){return r.split(e)}),wv=$(function(e,r){return r.join(e)}),yv=y(function(e,r,n){return n.slice(e,r)});function xv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Sv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Tv=$(function(e,r){return r.indexOf(e)>-1}),Cv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Lv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function oc(e){return e+""}function Pv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function zv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function kv(e){return Ma(e).join("")}function Mv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Dv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Av(e){return{$:0,a:e}}function Ut(e){return{$:2,b:e}}var Bv=Ut(function(e){return typeof e=="boolean"?ue(e):Oe("a BOOL",e)}),Fv=Ut(function(e){return typeof e=="number"?ue(e):Oe("a FLOAT",e)}),Vv=Ut(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Oe("a STRING",e)});function Rv(e){return{$:3,b:e}}var Ev=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function hr(e,r){return{$:9,f:e,g:r}}var jv=$(function(e,r){return{$:10,b:r,h:e}}),Nv=$(function(e,r){return hr(e,[r])}),Wv=y(function(e,r,n){return hr(e,[r,n])});R(function(e,r,n,a){return hr(e,[r,n,a])});be(function(e,r,n,a,t){return hr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return hr(e,[r,n,a,t,i])});za(function(e,r,n,a,t,i,c){return hr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return hr(e,[r,n,a,t,i,c,l])});It(function(e,r,n,a,t,i,c,l,u){return hr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return he(o(to,"This is not valid JSON! "+a.message,r))}});var ic=$(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Oe("null",r);case 3:return Xn(r)?ri(e.b,r,_):Oe("a LIST",r);case 4:return Xn(r)?ri(e.b,r,Gv):Oe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Oe("an OBJECT with a field named `"+n+"`",r);var v=Re(e.b,r[n]);return Ge(v)?v:he(o(mi,n,v.a));case 7:var a=e.e;if(!Xn(r))return Oe("an ARRAY",r);if(a>=r.length)return Oe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Re(e.b,r[a]);return Ge(v)?v:he(o(Ac,a,v.a));case 8:if(typeof r!="object"||r===null||Xn(r))return Oe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Re(e.b,r[i]);if(!Ge(v))return he(o(mi,i,v.a));t=rr(L(i,v.a),t)}return ue(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Re(l[u],r);if(!Ge(v))return v;c=c(v.a)}return ue(c);case 10:var v=Re(e.b,r);return Ge(v)?Re(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Re(d.a,r);if(Ge(v))return v;s=rr(v.a,s)}return he(Rf(Ae(s)));case 1:return he(o(to,e.a,r));case 0:return ue(e.a)}}function ri(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!Ge(c))return he(o(Ac,i,c.a));t[i]=c.a}return ue(n(t))}function Xn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Gv(e){return o(es,e.length,function(r){return e[r]})}function Oe(e,r){return he(o(to,"Expecting "+e,r))}function Wr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Wr(e.b,r.b);case 6:return e.d===r.d&&Wr(e.b,r.b);case 7:return e.e===r.e&&Wr(e.b,r.b);case 9:return e.f===r.f&&ni(e.g,r.g);case 10:return e.h===r.h&&Wr(e.b,r.b);case 11:return ni(e.g,r.g)}}function ni(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Wr(e[a],r[a]))return!1;return!0}var Hv=$(function(e,r){return JSON.stringify(r,null,e)+""});function cc(e){return e}y(function(e,r,n){return n[e]=r,n});function Ar(e){return{$:0,a:e}}function Iv(e){return{$:1,a:e}}function $r(e){return{$:2,b:e,c:null}}var bt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Xv(e){return{$:5,b:e}}var Uv=0;function Jt(e){var r={$:0,e:Uv++,f:e,g:null,h:[]};return Ot(r),r}function lc(e){return $r(function(r){r(Ar(Jt(e)))})}function uc(e,r){e.h.push(r),Ot(e)}var Jv=$(function(e,r){return $r(function(n){uc(e,r),n(Ar(zn))})}),Ya=!1,ai=[];function Ot(e){if(ai.push(e),!Ya){for(Ya=!0;e=ai.shift();)Ov(e);Ya=!1}}function Ov(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ot(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return qt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function qt(e,r,n,a,t,i){var c=o(ic,e,r?r.flags:void 0);Ge(c)||Qr(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=qv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),oi(l,b.b,t(v))}return oi(l,u.b,t(v)),d?{ports:d}:{}}var Ze={};function qv(e,r){var n;for(var a in Ze){var t=Ze[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Zv(t,r)}return n}function Yv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Zv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(bt,l,Xv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Jt(o(bt,l,e.b))}var Qv=$(function(e,r){return $r(function(n){e.g(r),n(Ar(zn))})});$(function(e,r){return o(Jv,e.h,{$:0,a:r})});function vc(e){return function(r){return{$:1,k:e,l:r}}}function Kv(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ti=[],Za=!1;function oi(e,r,n){if(ti.push({p:e,q:r,r:n}),!Za){Za=!0;for(var a;a=ti.shift();)e$(a.p,a.q,a.r);Za=!1}}function e$(e,r,n){var a={};va(!0,r,a,null),va(!1,n,a,null);for(var t in e)uc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function va(e,r,n,a){switch(r.$){case 1:var t=r.k,i=r$(e,t,a,r.l);n[t]=n$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)va(e,c.a,n,a);return;case 3:va(e,r.o,n,{s:r.n,t:a});return}}function r$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ze[r].e:Ze[r].f;return o(i,t,a)}function n$(e,r,n){return n=n||{i:P,j:P},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function a$(e){Ze[e]&&Qr(3)}$(function(e,r){return r});function t$(e,r){return a$(e),Ze[e]={f:o$,u:r,a:i$},vc(e)}var o$=$(function(e,r){return function(n){return e(r(n))}});function i$(e,r){var n=P,a=Ze[e].u,t=Ar(null);Ze[e].b=t,Ze[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ic,a,c);Ge(l)||Qr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var $a,cr=typeof document!="undefined"?document:{};function Yt(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(mr(e,function(){}),t),{}});function gt(e){return{$:0,a:e}}var $c=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Zt(n),e:t,f:e,b:i}})}),Br=$c(void 0),c$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Zt(n),e:t,f:e,b:i}})}),l$=c$(void 0);function u$(e,r,n,a){return{$:3,d:Zt(e),g:r,h:n,i:a}}var v$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function _r(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return _r([e,r],function(){return e(r)})});y(function(e,r,n){return _r([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return _r([e,r,n,a],function(){return p(e,r,n,a)})});be(function(e,r,n,a,t){return _r([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return _r([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});za(function(e,r,n,a,t,i,c){return _r([e,r,n,a,t,i,c],function(){return Ce(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return _r([e,r,n,a,t,i,c,l],function(){return Xt(e,r,n,a,t,i,c,l)})});It(function(e,r,n,a,t,i,c,l,u){return _r([e,r,n,a,t,i,c,l,u],function(){return ka(e,r,n,a,t,i,c,l,u)})});var fc=$(function(e,r){return{$:"a0",n:e,o:r}}),$$=$(function(e,r){return{$:"a1",n:e,o:r}}),sc=$(function(e,r){return{$:"a2",n:e,o:r}}),kn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function f$(e){return e=="script"?"p":e}function s$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(fc,r.n,d$(e,r.o)):r});function d$(e,r){var n=uo(r);return{$:r.$,a:n?p(rs,n<3?m$:p$,ke(e),r.a):o(ma,e,r.a)}}var m$=$(function(e,r){return L(e(r.a),r.b)}),p$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Zt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ii(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ii(c,t,i):c[t]=i}return r}function ii(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function mr(e,r){var n=e.$;if(n===5)return mr(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=mr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ht(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);$a&&e.c=="a"&&c.addEventListener("click",$a(c)),ht(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Yt(c,mr(n===1?l[u]:l[u].b,r));return c}function ht(e,r,n){for(var a in n){var t=n[a];a==="a1"?b$(e,t):a==="a0"?_$(e,r,t):a==="a3"?g$(e,t):a==="a4"?h$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function b$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function g$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function h$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function _$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=w$(r,i),e.addEventListener(t,c,Qt&&{passive:uo(i)<2}),a[t]=c}}var Qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Qt=!0}}))}catch{}function w$(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!Ge(i)){for(var c=uo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function y$(e,r){return e.$==r.$&&Wr(e.a,r.a)}function dc(e,r){var n=[];return He(e,r,n,0),n}function ge(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function He(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=k$(r),i=1;else{ge(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];He(e.k,r.k,s,0),s.length>0&&ge(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){ge(n,0,a,r);return}(f?!x$(d,m):d!==m)&&ge(n,2,a,m),He(g,b,n,a+1);return;case 0:e.a!==r.a&&ge(n,3,a,r.a);return;case 1:ci(e,r,n,a,S$);return;case 2:ci(e,r,n,a,T$);return;case 3:if(e.h!==r.h){ge(n,0,a,r);return}var w=Kt(e.d,r.d);w&&ge(n,4,a,w);var x=r.i(e.g,r.g);x&&ge(n,5,a,x);return}}}function x$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ci(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ge(n,0,a,r);return}var i=Kt(e.d,r.d);i&&ge(n,4,a,i),t(e,r,n,a)}function Kt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Kt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&y$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function S$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ge(n,6,a,{v:l,i:c-l}):c<l&&ge(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];He(s,i[v],n,++a),a+=s.b||0}}function T$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,h=g.b,T=b.b,k=void 0,W=void 0;if(w===x){f++,He(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,G=j.b;W=x===N}if(E){var B=E.a,O=E.b;k=w===B}if(k&&W){f++,He(h,O,t,f),on(i,t,w,T,m,c),f+=h.b||0,f++,cn(i,t,w,G,f),f+=G.b||0,d+=2,m+=2;continue}if(k){f++,on(i,t,x,T,m,c),He(h,O,t,f),f+=h.b||0,d+=1,m+=2;continue}if(W){f++,cn(i,t,w,h,f),f+=h.b||0,f++,He(G,T,t,f),f+=G.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,cn(i,t,w,h,f),on(i,t,x,T,m,c),f+=h.b||0,f++,He(G,O,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;cn(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];on(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&ge(n,8,a,{w:t,x:c,y:Q})}var mc="_elmW6BL";function on(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];He(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}on(e,r,n+mc,a,t,i)}function cn(e,r,n,a,t){var i=e[n];if(!i){var c=ge(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];He(a,i.z,l,t),ge(r,9,t,{w:l,A:i});return}cn(e,r,n+mc,a,t)}function pc(e,r,n,a){ln(e,r,n,0,0,r.b,a)}function ln(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)pc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&ln(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&ln(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return ln(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=ln(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function bc(e,r,n,a){return n.length===0?e:(pc(e,r,n,a),fa(e,n))}function fa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=C$(t,a);t===e&&(e=i)}return e}function C$(e,r){switch(r.$){case 0:return L$(e,r.s,r.u);case 4:return ht(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return fa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(mr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=fa(e,i.w),e;case 8:return P$(e,r);case 5:return r.s(e);default:Qr(10)}}function L$(e,r,n){var a=e.parentNode,t=mr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function P$(e,r){var n=r.s,a=z$(n.y,r);e=fa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:mr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Yt(e,a),e}function z$(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Yt(n,i.c===2?i.s:mr(i.z,r.u))}return n}}function eo(e){if(e.nodeType===3)return gt(e.textContent);if(e.nodeType!==1)return gt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(kn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=rr(eo(v[a]),u);return p(Br,l,r,u)}function k$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var M$=R(function(e,r,n,a){return qt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=eo(l);return gc(i,function(v){var s=c(v),d=dc(u,s);l=bc(l,u,d,t),u=s})})});R(function(e,r,n,a){return qt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=cr.title,v=cr.body,s=eo(v);return gc(i,function(d){$a=c;var m=l(d),f=Br("body")(P)(m.eu),g=dc(s,f);v=bc(v,s,g,t),s=f,$a=0,u!==m.fK&&(cr.title=u=m.fK)})})});var sa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function gc(e,r){r(e);var n=0;function a(){n=n===1?0:(sa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&sa(a),n=2)}}$(function(e,r){return o(fo,vo,$r(function(){r&&history.go(r),e()}))});$(function(e,r){return o(fo,vo,$r(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(fo,vo,$r(function(){history.replaceState({},"",r),e()}))});var D$={addEventListener:function(){},removeEventListener:function(){}},A$=typeof window!="undefined"?window:D$;y(function(e,r,n){return lc($r(function(a){function t(i){Jt(n(i))}return e.addEventListener(r,t,Qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Re(e,r);return Ge(n)?te(n.a):q});function hc(e,r){return $r(function(n){sa(function(){var a=document.getElementById(e);n(a?Ar(r(a)):Iv(as(e)))})})}function B$(e){return $r(function(r){sa(function(){r(Ar(e()))})})}$(function(e,r){return hc(r,function(n){return n[e](),zn})});$(function(e,r){return B$(function(){return A$.scroll(e,r),zn})});y(function(e,r,n){return hc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var F$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var V$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?te(d):q}a.push(C(dl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?te(v):q}return n(C(dl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var R$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/E$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function E$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ro=new Float64Array(3),li=new Float64Array(3),ui=new Float64Array(3),j$=y(function(e,r,n){return new Float64Array([e,r,n])}),N$=function(e){return e[0]},W$=function(e){return e[1]},G$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var H$=function(e){return new Float64Array([e.fT,e.fX,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(_c);function wc(e,r,n){return n===void 0&&(n=new Float64Array(3)),da(_c(e,r,n),n)}$(wc);function yc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function da(e,r){r===void 0&&(r=new Float64Array(3));var n=1/yc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var I$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),un=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(un);function _t(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(_t);$(function(e,r){var n,a=ro,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=un(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(un(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(un(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(un(r,a)+e[14])/n,t});var X$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var U$=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},J$=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/O$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function O$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var q$=new Float64Array(16),Y$=new Float64Array(16),Z$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Q$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ue(xc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return xc(c,l,i,t,n,a)});function Sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ue(Sc);R(function(e,r,n,a){return Sc(e,r,n,a,-1,1)});function Tc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],T=r[0],k=r[1],W=r[2],j=r[3],E=r[4],N=r[5],G=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],se=r[13],ze=r[14],Se=r[15];return n[0]=a*T+l*k+d*W+b*j,n[1]=t*T+u*k+m*W+w*j,n[2]=i*T+v*k+f*W+x*j,n[3]=c*T+s*k+g*W+h*j,n[4]=a*E+l*N+d*G+b*B,n[5]=t*E+u*N+m*G+w*B,n[6]=i*E+v*N+f*G+x*B,n[7]=c*E+s*N+g*G+h*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+v*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+h*ve,n[12]=a*oe+l*se+d*ze+b*Se,n[13]=t*oe+u*se+m*ze+w*Se,n[14]=i*oe+v*se+f*ze+x*Se,n[15]=c*oe+s*se+g*ze+h*Se,n}$(Tc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],T=r[5],k=r[6],W=r[8],j=r[9],E=r[10],N=r[12],G=r[13],B=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+d*k,n[7]=0,n[8]=a*W+c*j+v*E,n[9]=t*W+l*j+s*E,n[10]=i*W+u*j+d*E,n[11]=0,n[12]=a*N+c*G+v*B+m,n[13]=t*N+l*G+s*B+f,n[14]=i*N+u*G+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=da(r,ro);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/yc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,h=g+f,T=b-m,k=g-f,W=c*c*v+u,j=w+d,E=b+m,N=w-d,G=l*l*v+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],se=n[6],ze=n[7],Se=n[8],sr=n[9],dr=n[10],qa=n[11],ju=n[12],Nu=n[13],Wu=n[14],Gu=n[15];return a[0]=B*x+ve*h+Se*T,a[1]=O*x+oe*h+sr*T,a[2]=Q*x+se*h+dr*T,a[3]=ie*x+ze*h+qa*T,a[4]=B*k+ve*W+Se*j,a[5]=O*k+oe*W+sr*j,a[6]=Q*k+se*W+dr*j,a[7]=ie*k+ze*W+qa*j,a[8]=B*E+ve*N+Se*G,a[9]=O*E+oe*N+sr*G,a[10]=Q*E+se*N+dr*G,a[11]=ie*E+ze*N+qa*G,a[12]=ju,a[13]=Nu,a[14]=Wu,a[15]=Gu,a});function K$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(K$);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function ef(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(ef);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=wc(e,r,ro),t=da(_t(n,a,li),li),i=da(_t(a,t,ui),ui),c=q$,l=Y$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Tc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var vi=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function no(e){for(var r=0;e.b;e=e.b)r++;return r}var rf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},nf=be(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),af=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),tf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),of=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),cf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),lf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),uf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),vf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),$f=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),ff=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},sf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},df=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},mf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},pf=function(e){e.gl.disable(e.gl.CULL_FACE)},bf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},gf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},hf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},$i=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],_f=[sf,df,mf,Cc,Lc,pf,bf,gf,hf];function fi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function wf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function yf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][x]:w[T][x][h]})}var u=Pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(no(n.b)*s);xn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function xf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Sf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*no(r.b),indexBuffer:null,buffers:{}}}function Sf(e,r){var n=new Uint32Array(no(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function si(e,r){return e+"#"+r}var zc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cc(n),Lc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=si(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=vi++,v||(v=fi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=vi++,s||(s=fi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=wf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Tf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=si(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Cf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=xf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=yf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Pc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,xn(Z0(n),i.a),u=0;u<$i.length;u++){var k=n[$i[u]];k.toggle!==n.toggle&&k.enabled&&(_f[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return xn(t,e.g),r});function Tf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function Cf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Lf=y(function(e,r,n){return u$(r,{g:n,f:{},h:e},Bf,Ff)}),Pf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),zf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),kf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Mf=$(function(e,r){e.contextAttributes.antialias=!0}),Df=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Af=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Bf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(Y0,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),rf(function(){return o(zc,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ff(e,r){return r.f=e.f,zc(r)}var A=Ku,Un=Yu,kc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Un,e,l,v)}else{var u=c.a;return p(Un,i,l,u)}});return p(Un,i,p(Un,e,r,t),a)}),ao=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ao,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),di=function(e){return p(ao,y(function(r,n,a){return o(A,L(r,n),a)}),P,e)},Mc=1,Vf=2,Dc=0,he=function(e){return{$:1,a:e}},to=$(function(e,r){return{$:3,a:e,b:r}}),mi=$(function(e,r){return{$:0,a:e,b:r}}),Ac=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},Ef=Sv,jf=Hv,De=oc,Tr=$(function(e,r){return o(wv,e,Ma(r))}),oo=$(function(e,r){return _(o(_v,e,r))}),Bc=function(e){return o(Tr,`
    `,o(oo,`
`,e))},Mn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),zr=function(e){return p(Mn,$(function(r,n){return n+1}),0,e)},Nf=ev,Wf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),kr=$(function(e,r){return p(Wf,e,r,P)}),Fc=$(function(e,r){return p(Nf,e,o(kr,0,zr(r)-1),r)}),Qe=Mv,Vc=function(e){var r=Qe(e);return 97<=r&&r<=122},Rc=function(e){var r=Qe(e);return r<=90&&65<=r},Gf=function(e){return Vc(e)||Rc(e)},Hf=function(e){var r=Qe(e);return r<=57&&48<=r},If=function(e){return Vc(e)||Rc(e)||Hf(e)},Ae=function(e){return p(Mn,A,P,e)},Kr=pv,Xf=$(function(e,r){return`

(`+(De(e+1)+(") "+Bc(Uf(r))))}),Uf=function(e){return o(Jf,e,P)},Jf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Kr(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return Gf(x)&&o(Ef,If,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Ae(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(De(zr(s))+" ways:"));return o(Tr,`

`,o(A,g,o(Fc,Xf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Ae(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return g+(Bc(o(jf,4,f))+(`

`+m))}}),Be=32,wt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),yt=Xu,io=uv,co=$(function(e,r){return ei(r)/ei(e)}),Of=cv,Sn=io(o(co,2,Be)),Ec=C(wt,0,Sn,yt,yt),jc=Ju,Nc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Wc=vv,xt=Uu,Ke=$(function(e,r){return J(e,r)>0?e:r}),qf=function(e){return{$:0,a:e}},lo=Ou,Yf=$(function(e,r){e:for(;;){var n=o(lo,Be,e),a=n.a,t=n.b,i=o(A,qf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),Zf=function(e){var r=e.a;return r},Qf=$(function(e,r){e:for(;;){var n=io(r/Be);if(n===1)return o(lo,Be,e).a;var a=o(Yf,e,P),t=n;e=a,r=t;continue e}}),Gc=$(function(e,r){if(r.l){var n=r.l*Be,a=Wc(o(co,Be,n-1)),t=e?Ae(r.z):r.z,i=o(Qf,t,r.l);return C(wt,xt(r.p)+n,o(Ke,5,a*Sn),i,r.p)}else return C(wt,xt(r.p),Sn,yt,r.p)}),Kf=be(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Gc,!1,{z:a,l:n/Be|0,p:t});var i=Nc(p(jc,Be,r,e)),c=e,l=r-Be,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),es=$(function(e,r){if(e<=0)return Ec;var n=e%Be,a=p(jc,n,e-n,r),t=e-n-Be;return S(Kf,r,t,e,P,a)}),Ge=function(e){return!e.$},D=jv,Y=Bv,M=Ev,$e=Fv,ma=Nv,rs=Wv,ke=Av,uo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},X=Br("div"),ns=function(e){return{$:2,a:e}},Hc=$(function(e,r){return e}),Ic=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),Lr=function(e){return e},as=Lr,pi=Ue(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ts=Tv,Cr=bv,Gr=yv,Dn=$(function(e,r){return e<1?r:p(Gr,e,Cr(r),r)}),Da=Lv,Aa=function(e){return e===""},Ba=$(function(e,r){return e<1?"":p(Gr,0,e,r)}),Xc=Pv,bi=be(function(e,r,n,a,t){if(Aa(t)||o(ts,"@",t))return q;var i=o(Da,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Xc(o(Dn,c+1,t));if(l.$===1)return q;var u=l;return te(Ce(pi,e,o(Ba,c,t),u,r,n,a))}else return te(Ce(pi,e,t,q,r,n,a))}),gi=R(function(e,r,n,a){if(Aa(a))return q;var t=o(Da,"/",a);if(t.b){var i=t.a;return S(bi,e,o(Dn,i,a),r,n,o(Ba,i,a))}else return S(bi,e,"/",r,n,a)}),hi=y(function(e,r,n){if(Aa(n))return q;var a=o(Da,"?",n);if(a.b){var t=a.a;return C(gi,e,te(o(Dn,t+1,n)),r,o(Ba,t,n))}else return C(gi,e,q,r,n)});$(function(e,r){if(Aa(r))return q;var n=o(Da,"#",r);if(n.b){var a=n.a;return p(hi,e,te(o(Dn,a+1,r)),o(Ba,a,r))}else return p(hi,e,q,r)});var os=Cv,vo=function(e){},An=Ar,is=An(0),Uc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Mn,e,r,Ae(d)):C(Uc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),fr=y(function(e,r,n){return C(Uc,e,r,0,n)}),re=$(function(e,r){return p(fr,$(function(n,a){return o(A,e(n),a)}),P,r)}),pa=bt,$o=$(function(e,r){return o(pa,function(n){return An(e(n))},r)}),cs=y(function(e,r,n){return o(pa,function(a){return o(pa,function(t){return An(o(e,a,t))},n)},r)}),ls=function(e){return p(fr,cs(A),An(P),e)},us=Qv,vs=$(function(e,r){var n=r;return lc(o(pa,us(e),n))}),$s=y(function(e,r,n){return o($o,function(a){return 0},ls(o(re,vs(e),r)))}),fs=y(function(e,r,n){return An(0)}),ss=$(function(e,r){var n=r;return o($o,e,n)});Ze.Task=Yv(is,$s,fs,ss);var ds=vc("Task"),fo=$(function(e,r){return ds(o($o,e,r))}),ms=M$,ps=dv,ba={$:1},Jc=function(e){return{$:2,a:e}},Fa={$:0},Ee=$(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),en=function(e){var r=e.b.B;return r.a},bs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(Ee,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Oc=function(e){var r=e.b;return o(Ee,Fa,r)},nr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),gs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Oc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,en(n).db)>0?o(ae,bs,nr(o(Ee,ba,t))):Lr)(o(Ee,Jc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ic,l.eA,qe(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Ee,Fa,{B:L(v,s),ab:P,T:o(A,t.B,t.T)})}}),qc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),hs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),_s=$(function(e,r){return Ae(p(hs,e,r,P))}),Yc=y(function(e,r,n){if(r<=0)return P;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,h,o(A,c,o(A,s,o(A,b,o(_s,r-4,w))))):o(A,h,o(A,c,o(A,s,o(A,b,p(Yc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),ws=$(function(e,r){return p(Yc,0,e,r)}),ys=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ae(n),le(_([a]),t)),c=o(ws,e,i),l=o(qc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ee,ba,{B:u,ab:v,T:Ae(c)})}else{var s=Ae(c);if(s.b){var d=s.a,m=s.b;return o(Ee,ba,{B:d,ab:P,T:m})}else return r}}),xs=function(e){var r=e.b;return o(Ee,ba,r)},Ss=function(e){var r=e.b;return o(Ee,Jc({cX:en(e).db}),r)},Ts=$(function(e,r){switch(e.$){case 1:return xs(r);case 2:return Oc(r);case 3:return Ss(r);default:var n=e.a;return o(ys,n,r)}}),Zc=$(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),Cs=$(function(e,r){return qe(r,{av:e(r.av)})}),Ls=function(e){return{$:3,a:e}},Qc=function(e){return{$:2,a:e}},Kc=$(function(e,r){return{$:0,a:e,b:r}}),el=$(function(e,r){return{$:1,a:e,b:r}}),we=$(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),Z=function(e){return e<0?-e:e},so=zv,Ps=y(function(e,r,n){return o(nr,0/0,so(o(e,r,n)))}),rl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),zs=hv,nl=function(e){return p(zs,A,P,e)},ks=$(function(e,r){var n=o(rl,function(a){return a!=="0"&&a!=="."},nl(r));return le(e&&n?"-":"",r)}),_e=oc,St=mv,al=Dv,tl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Kr(n);if(a.$===1)return"01";var t=a.a;return o(St,"0",tl(t))}else{var i=Qe(r);return i>=48&&i<57?o(St,al(i+1),n):"0"}},Tt=lv,Ms=sv,Va=function(e){return o(St,e,"")},ol=y(function(e,r,n){return e<=0?n:p(ol,e>>1,le(r,r),e&1?le(n,r):n)}),Tn=$(function(e,r){return p(ol,e,r,"")}),Ct=y(function(e,r,n){return le(n,o(Tn,e-Cr(n),Va(r)))}),Lt=gv,il=function(e){var r=o(oo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Ds=function(e){var r=o(oo,"e",_e(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(nr,0,Xc(o(os,"+",t)?o(Dn,1,t):t)),c=il(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(nr,"0",o(we,function(d){var m=d.a,f=d.b;return m+("."+f)},o(we,Zc(Va),Kr(le(o(Tn,Z(i),"0"),v))))):p(Ct,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},As=y(function(e,r,n){if(Tt(n)||Ms(n))return _e(n);var a=n<0,t=il(Ds(Z(n))),i=t.a,c=t.b,l=Cr(i)+r,u=le(o(Tn,-l+1,"0"),p(Ct,l,"0",le(i,c))),v=Cr(u),s=o(Ke,1,l),d=o(e,a,p(Gr,s,v,u)),m=p(Gr,0,s,u),f=d?Lt(o(nr,"1",o(we,tl,Kr(Lt(m))))):m,g=Cr(f),b=f==="0"?f:r<=0?le(f,o(Tn,Z(r),"0")):J(r,Cr(c))<0?p(Gr,0,g-r,f)+("."+p(Gr,g-r,g,f)):le(i+".",p(Ct,r,"0",c));return o(ks,a,b)}),cl=As($(function(e,r){var n=Kr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Qe(t))})),Bs=Ps(cl),Fs=y(function(e,r,n){var a=o(co,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Bs,t,n)}),ll=Qu,Bn=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ll,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),I=be(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},qr=be(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(I,0,r,n,S(I,1,v,s,d,m),S(I,1,i,c,l,u))}else return S(I,e,i,c,S(I,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(I,0,v,s,S(I,1,g,b,w,x),S(I,1,r,n,m,t))}else return S(I,e,r,n,a,t)}),Pt=y(function(e,r,n){if(n.$===-2)return S(I,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ll,e,t);switch(u){case 0:return S(qr,a,t,i,p(Pt,e,r,c),l);case 1:return S(I,a,t,r,c,l);default:return S(qr,a,t,i,c,p(Pt,e,r,l))}}),dn=y(function(e,r,n){var a=p(Pt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(I,1,t,i,c,l)}else{var u=a;return u}}),Vs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ul=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(I,0,f,g,S(I,1,n,a,S(I,0,i,c,l,u),b),S(I,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(I,1,n,a,S(I,0,i,c,l,u),S(I,0,s,d,m,x))}else return e},_i=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(I,0,i,c,S(I,1,u,v,s,d),S(I,1,n,a,m,S(I,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(I,1,n,a,S(I,0,i,c,T,m),S(I,0,g,b,w,x))}else return e},Rs=za(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(I,n,l,u,v,S(I,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,_i(r)}else break e;else return c.a,c.d,_i(r);else break e;return r}}),ta=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(I,r,n,a,ta(t),l);var u=ul(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,v,s,d,ta(m),f)}else return ar}else return S(I,r,n,a,ta(t),l)}else return ar},mn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(I,n,a,t,o(mn,e,i),c);var u=ul(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,v,s,d,o(mn,e,m),f)}else return ar}else return S(I,n,a,t,o(mn,e,i),c);else return o(Es,e,Xt(Rs,e,r,n,a,t,i,c))}),Es=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(pr(e,a)){var l=Vs(c);if(l.$===-1){var u=l.b,v=l.c;return S(qr,n,u,v,i,ta(c))}else return ar}else return S(qr,n,a,t,i,o(mn,e,c))}else return ar}),js=$(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(I,1,a,t,i,c)}else{var l=n;return l}}),Jn=y(function(e,r,n){var a=r(o(Bn,e,n));if(a.$)return o(js,e,n);var t=a.a;return p(dn,e,t,n)}),Ns=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Jn,r,we(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(el,L(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Jn,r,we(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Kc,L(i,c),p(Fs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Jn,r,we(function(a){return a.$===3?Ls(n):a}));default:var r=e.a,n=e.b;return o(Jn,r,we(function(a){return a.$===2?Qc(n):a}))}},Ws=function(e){return Cs(Ns(e))},Gs=$(function(e,r){return o(re,Ws(e),r)}),Hs=$(function(e,r){return qe(r,{eA:o(Gs,e,r.eA)})}),Is=$(function(e,r){var n=r.a,a=r.b;return o(Ee,n,qe(a,{B:o(Zc,Hs(e),a.B)}))}),Xs=$(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),Us=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ee,a,qe(t,{B:o(Xs,o(e,i.a,r),i)}))}),Js=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return qe(a,{aL:!a.aL});case 2:var t=n.a;return qe(a,{G:p(gs,e,t,a.G)});case 3:var i=n.a;return qe(a,{G:o(Is,i,a.G)});case 4:var c=n.a;return qe(a,{G:p(Us,r,c,a.G)});default:var l=n.a;return qe(a,{G:o(Ts,l,a.G)})}}),Os=$(function(e,r){return o(Ee,Fa,{B:L(e,r(e)),ab:P,T:P})}),qs=Kv,wi=qs(P),ga=Rv,Cn=Vv,Ys=t$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",ga(Cn)))},o(M,"left",Y))},o(M,"pressedKeys",ga(Cn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Zs=function(e){return{$:4,a:e}},Qs={$:0},Ks=cc,We=$(function(e,r){return o(sc,e,Ks(r))}),U=We("className"),ed=function(e){var r=e.b.B;return r.b},ha=We("id"),rd=v$,_a=rd,nd=$$,pe=nd,ad={$:1},td=function(e){return{$:3,a:e}},od=function(e){return{$:5,a:e}},yi=Br("a"),mo=Br("button"),id=kn("d"),vl=$c("http://www.w3.org/2000/svg"),cd=vl("path"),ld=vl("svg"),ud=kn("viewBox"),pn=function(e){return o(ld,_([ud("0 0 100 100"),o(pe,"width","100%"),o(pe,"height","100%")]),_([o(cd,_([id(e)]),P)]))},xi=function(e){return o(We,"href",s$(e))},Ir={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},vd=function(e){return{$:0,a:e}},$l=fc,fl=$(function(e,r){return o($l,e,vd(r))}),po=function(e){return o(fl,"click",ke(e))},Si=We("target"),$d=We("title"),zt=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(I,n,a,o(e,a,t),o(zt,e,i),o(zt,e,c))}),fd=gt,vr=fd,sd=function(e){return p(ao,y(function(r,n,a){return o(A,n,a)}),P,e)},dd=$(function(e,r){return{$:3,a:e,b:r}}),md=$(function(e,r){return{$:2,a:e,b:r}}),pd=$(function(e,r){return{$:0,a:e,b:r}}),bd=$(function(e,r){return{$:1,a:e,b:r}}),Ra=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bo=C(Ra,0/255,0/255,0/255,1),gd=cc,hd=$(function(e,r){return o(sc,e,gd(r))}),_d=hd("checked"),Xe=$v,wd=y(function(e,r,n){return le(o(Tn,e-Cr(n),Va(r)),n)}),wa=nv,sl=function(e){var r=function(n){return n<10?De(n):Va(al(87+n))};return e<16?r(e):le(sl(e/16|0),r(o(wa,16,e)))},yd=o(ae,sl,o(wd,2,"0")),go=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},xd=function(e){var r=go(e),n=r.cM,a=r.cc,t=r.b5;return o(Tr,"",o(A,"#",o(re,o(ae,Xe,yd),_([n*255,a*255,t*255]))))},kt=We("htmlFor"),Sd=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ya=$(function(e,r){if(r.$){var a=r.a;return he(a)}else{var n=r.a;return e(n)}}),Td=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Fn=$(function(e,r){return p(fr,Td(e),P,r)}),dl=R(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Cd=V$,Ld=kv,Pd=$(function(e,r){if(r.$)return he(e);var n=r.a;return ue(n)}),zd=F$,kd=function(e){return o(zd,{ew:!1,fe:!1},e)},Vn=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Md=$(function(e,r){if(r.$){var a=r.a;return he(a)}else{var n=r.a;return ue(e(n))}}),Dd=function(e){return{$:2,a:e}},Ad=function(e){return{$:0,a:e}},Bd=function(e){return{$:1,a:e}},Qa=$(function(e,r){return Qe(r)-Qe(e)}),Ka=y(function(e,r,n){var a=Qe(n);return J(Qe(e),a)<1&&J(a,Qe(r))<1}),Fd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):he(Bd(r))},a=p(Ka,"0","9",r)?ue(o(Qa,"0",r)):p(Ka,"a","z",r)?ue(10+o(Qa,"a",r)):p(Ka,"A","Z",r)?ue(10+o(Qa,"A",r)):he(Ad(r));return o(ya,n,a)}),ml=$(function(e,r){var n=Kr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ya,function(c){return o(ya,function(l){return ue(c+l*e)},o(ml,e,i))},o(Fd,e,t))}),Vd=$(function(e,r){return 2<=e&&e<=36?o(ml,e,Lt(r)):he(Dd(e))}),Rd=Vd(16),Ed=y(function(e,r,n){return C(Ra,e,r,n,1)}),jd=R(function(e,r,n,a){return C(Ra,e,r,n,a)}),Rn=rv,Nd=$(function(e,r){var n=o(Rn,10,e);return Xe(r*n)/n}),Wd=xv,Gd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=nl(n);if(a.b&&!a.b.b){var t=a.a;return Ld(_([t,t]))}else return n};return o(ae,Wd,o(ae,function(n){return o(we,function(a){return p(Cd,1,a,n)},kd(e))},o(ae,Sd(Vn),o(ae,we(function(n){return n.fF}),o(ae,we(Fn(Lr)),o(ae,Pd("Parsing hex regex failed"),ya(function(n){var a=o(re,o(ae,r,o(ae,Rd,Md(Of))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(jd,t/255,c/255,u/255,o(Nd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Ed,t/255,c/255,u/255))}else break e;return he("Parsing ints from hex failed")})))))))}(),xa=Br("input"),Mt=Br("label"),Dt=We("name"),pl=$(function(e,r){return p(fr,M,r,e)}),Hd=o(pl,_(["target","checked"]),Y),Id=function(e){return o(fl,"change",o(ma,e,Hd))},Xd=function(e){return L(e,!0)},Ud=function(e){return{$:1,a:e}},Jd=$(function(e,r){return o($l,e,Ud(r))}),Od=o(pl,_(["target","value"]),Cn),ho=function(e){return o(Jd,"input",o(ma,Xd,o(ma,e,Od)))},bl=We("max"),gl=We("min"),hl=function(e){return o(We,"step",e)},Sa=We("type"),_o=We("value"),Ti=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(X,P,_([o(Mt,_([kt(r)]),_([o(X,_([U("relative w-full")]),_([o(X,_([U("inline-block")]),_([vr(r)])),o(X,_([U("inline-block float-right")]),_([vr(_e(n))]))]))])),o(xa,_([Sa("range"),o(pe,"width","100%"),ha(r),Dt(r),gl(_e(a)),bl(_e(t)),_o(_e(n)),hl(_e(i)),ho(o(ae,so,o(ae,nr(42),c)))]),P)]))},qd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Yd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(X,P,_([o(X,_([U("mb-2")]),_([o(Mt,_([kt(e)]),_([vr(e)]))])),o(xa,_([Sa("checkbox"),ha(e),Dt(e),Id(dd(e)),_d(c)]),P)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ti({cf:e,cr:i,cv:t,cz:pd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ti({cf:e,cr:i,cv:t,cz:o(ae,Xe,bd(e)),cV:1,c0:c});default:var c=r.a;return o(X,P,_([o(X,_([o(pe,"margin-bottom","6px")]),_([o(Mt,_([kt(e)]),_([vr(e)]))])),o(xa,_([Sa("color"),o(pe,"width","100%"),o(pe,"height","26px"),o(pe,"padding","0px"),ha(e),Dt(e),ho(function(l){return o(md,e,o(qd,bo,Gd(l)))}),_o(xd(c))]),P)]))}}),Zd=function(e){return o(X,_([U("p-4 border-y-[0.5px] border-white20")]),_([o(X,_([U("text-lg pb-2")]),_([vr(e.ff)])),o(X,_([U("pl-2 pr-2")]),sd(o(zt,Yd,e.av)))]))},Qd=function(e){return o(X,_([U("text-xs text-white60")]),o(re,Zd,e))},Kd=function(e){return o(X,_([U("absolute left-[104px] bottom-2 text-sm text-white40")]),_([vr("clock: "+o(cl,3,en(e).db))]))},em=function(e){e.a;var r=e.b.T;return o(we,function(n){return Xe(60/(en(e).db-n))},o(we,o(ae,Zf,function(n){return n.db}),Vn(o(qc,59,r))))},rm=function(e){return o(X,_([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=em(e);if(r.$===1)return _([vr("... Fps")]);var n=r.a;return _([vr(De(n)+" Fps")])}())},nm=function(e){return{$:0,a:e}},am=function(e){var r=e.b.T;return zr(r)},tm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return zr(r)+1+zr(n)},om=function(e){return o(xa,_([U("absolute w-full"),Sa("range"),gl(De(0)),bl(De(tm(e)-1)),_o(De(am(e))),hl(De(1)),ho(o(ae,so,o(ae,nr(42),o(ae,Xe,nm))))]),P)},Ci={$:1},im={$:3},cm={$:2},_l=function(e){return!e.b},Li=$(function(e,r){return o(mo,_([U("px-2 bg-black40"),U(r),po(e)]),_([vr("REC")]))}),Pi=$(function(e,r){return o(mo,_([U("absolute left-[60px] mx-1 px-1 bg-black40"),po(r)]),_([o(X,_([U("w-4 h-6 fill-white80")]),_([pn(e)]))]))}),lm=function(e){var r=e.a,n=e.b.ab;return o(X,_([U("py-1")]),_([function(){switch(r.$){case 0:return o(Li,Ci,"text-red-500 font-bold");case 1:return o(Li,cm,"text-white80 font-bold");default:return o(X,P,P)}}(),function(){switch(r.$){case 0:return o(X,P,P);case 1:return _l(n)?o(X,P,P):o(Pi,Ir.fo,im);default:return o(Pi,Ir.fn,Ci)}}()]))},um=function(e){return o(X,_([U("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([om(e),lm(e),rm(e),Kd(e)]))},vm=function(e){var r=e.a;return pr(r,Fa)},$m=$(function(e,r){var n=vm(r.G)?o(X,P,P):o(X,_([U("absolute pointer-events-none w-8 h-8"),o(pe,"left",_e(e.fp.fT+.5*e.cS.fR)+"px"),o(pe,"top",_e(-e.fp.fX+.5*e.cS.eW)+"px")]),_([o(X,_([U(e.fp.e4?"fill-black80":"fill-white40")]),_([pn(Ir.fp)]))]));return o(X,P,_([n]))}),fm=$(function(e,r){var n=o(mo,_([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),po(ad),$d("Distraction Free Mode")]),_([pn(Ir.f$)])),a=o(X,_([U("absolute w-8 bottom-12")]),_([o(yi,_([U("fill-twitterBlue40 hover:fill-twitterBlue"),xi("https://twitter.com/AzizErkalSelman"),Si("_blank")]),_([pn(Ir.fL)]))])),t=o(X,_([U("absolute w-8 bottom-2")]),_([o(yi,_([U("fill-githubCat40 hover:fill-githubCat"),xi("https://github.com/erkal/elm-3d-playground-exploration"),Si("_blank")]),_([pn(Ir.eQ)]))]));return r.aL?o(X,_([U("fixed w-10 h-10 p-1")]),_([n])):o(X,P,_([o(X,_([U("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(X,_([U("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),_([o(_a,td,Qd(en(r.G).eA))])),o(X,_([U("absolute bottom-0 left-[300px] w-[600px] h-20")]),_([o(_a,od,um(r.G))])),o($m,e,r)]))}),sm=y(function(e,r,n){var a=ed(n.G),t=en(n.G);return o(X,_([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(pe,"width",_e(t.cS.fR)+"px"),o(pe,"height",_e(t.cS.eW)+"px")]),_([o(X,_([U("fixed")]),_([o(_a,Hc(Qs),o(e,t,a))])),o(X,_([ha("gui")]),_([o(fm,t,n),o(_a,Zs,o(r,t,a))]))]))}),dm=Ue(function(e,r,n,a,t,i){var c=$(function(u,v){return L(C(Js,r,i,u,v),wi)}),l=function(u){var v=o(Ic,n,u.e1);return L({aL:u.e1.cS.fR<500,G:o(Os,v,a)},wi)};return ms({e0:l,fG:Hc(Ys(ns)),fM:c,fP:o(sm,e,t)})}),mm=R(function(e,r,n,a){return Ce(dm,e,r,n,a,$(function(t,i){return o(X,P,P)}),y(function(t,i,c){return c}))}),pm=function(e){return{}},bm=$(function(e,r){return L(e,Qc(r))}),gm=y(function(e,r,n){return{av:n,e5:r,ff:e}}),wl=ar,hm=function(e){return p(Mn,$(function(r,n){var a=r.a,t=r.b;return p(dn,a,t,n)}),wl,e)},_m=y(function(e,r,n){return p(gm,e,r,hm(n))}),et=_m,Rr=y(function(e,r,n){var a=r.a,t=r.b;return L(e,o(Kc,L(a,t),n))}),wm=R(function(e,r,n,a){var t=V(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(Ra,f,m,d,a)}),yl=y(function(e,r,n){return C(wm,e,r,n,1)}),ym=y(function(e,r,n){var a=r.a,t=r.b;return L(e,o(el,L(a,t),n))}),er=av,xm=_([p(et,"Camera",!0,_([p(Rr,"camera distance",L(3,60),50),p(Rr,"camera azimuth",L(0,2*er),0),p(Rr,"camera elevation",L(-er/2,er/2),.5)])),p(et,"Parameters",!0,_([p(Rr,"delay per index",L(0,1),.15),p(ym,"number of spheres",L(10,100),50)])),p(et,"Colors and light",!0,_([p(Rr,"saturation",L(0,1),.5),p(Rr,"lighting",L(0,1),.7),o(bm,"background color",p(yl,.85,.32,.45))]))]),Sm=$(function(e,r){return r}),Tm=$(function(e,r){return o(we,function(n){if(n.$)return 0;var a=n.b;return a},o(Bn,e,r.av))}),Cm=$(function(e,r){return o(nr,0,Vn(o(Fn,Tm(e),r)))}),Lm=$(function(e,r){return o(Cm,e,r.eA)}),Xr=Lm,Mr=function(e){return e},vn=function(e){return Mr(er*(e/180))},Pm=function(e){return e},lr=function(e){return e},At=function(e){var r=e;return-r},zm=$(function(e,r){var n=e,a=r;return{fT:n.fX*a.c5-n.c5*a.fX,fX:n.c5*a.fT-n.fT*a.c5,c5:n.fT*a.fX-n.fX*a.fT}}),xl=function(e){var r=e;return r.c3},Sl=function(e){var r=e;return r.c4},km=function(e){return o(zm,xl(e),Sl(e))},Fr=function(e){var r=e;return r.cA},Dr=tv,Yr=ov,oa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Dr(c),u=Yr(c),v=a.eG,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,h=1-2*(f+x),T=s.c5*u,k=l*T,W=2*(w-k),j=2*(w+k),E=d*T,N=2*(E+b),G=2*(E-b),B=g*T,O=2*(B-m),Q=2*(B+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+W*i.fX+N*i.c5,fX:j*i.fT+oe*i.fX+O*i.c5,c5:G*i.fT+Q*i.fX+h*i.c5}}),En=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Dr(c),u=Yr(c),v=a.cA,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,x=l*w,h=w*w,T=b.fX*u,k=l*T,W=w*T,j=T*T,E=1-2*(h+j),N=b.c5*u,G=l*N,B=2*(W-G),O=2*(W+G),Q=w*N,ie=2*(Q+k),ve=2*(Q-k),oe=T*N,se=2*(oe-x),ze=2*(oe+x),Se=N*N,sr=1-2*(j+Se),dr=1-2*(h+Se);return{fT:s.fT+sr*d+B*m+ie*f,fX:s.fX+O*d+dr*m+se*f,c5:s.c5+ve*d+ze*m+E*f}}),br=function(e){return e},wr=function(e){var r=e;return r.c3},yr=function(e){var r=e;return r.c4},xr=function(e){var r=e;return r.c6},Tl=y(function(e,r,n){return br({cA:p(En,e,r,Fr(n)),c3:p(oa,e,r,wr(n)),c4:p(oa,e,r,yr(n)),c6:p(oa,e,r,xr(n))})}),zi=y(function(e,r,n){return p(Tl,e(n),r,n)}),wo=function(e){var r=e;return r.eG},jn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),Cl=$(function(e,r){return br({cA:o(jn,e,Fr(r)),c3:wr(r),c4:yr(r),c6:xr(r)})}),Mm=$(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c5:n*a.c5}}),Dm=y(function(e,r,n){return o(Cl,o(Mm,r,e),n)}),Am=y(function(e,r,n){return p(Dm,wo(e(n)),r,n)}),Vr=$(function(e,r){return{eG:r,cA:e}}),Bm=function(e){var r=e;return o(Vr,r.cA,r.c3)},Fm=function(e){var r=e;return o(Vr,r.cA,r.c4)},Vm=function(e){var r=e;return o(Vr,r.cA,r.c6)},Rm=function(e){var r=br({cA:e.aR,c3:Sl(e.dl),c4:km(e.dl),c6:xl(e.dl)}),n=p(Am,Vm,e.cb,p(zi,Bm,At(e.bC),p(zi,Fm,e.bx,r)));return n},Em=function(e){return{$:0,a:e}},xe=function(e){var r=e;return Z(r)},ia=function(e){var r=e;return .5*r},jm=iv,Nm=function(e){var r=e;return jm(r)},Wm=function(e){var r=ia(xe(e.ej)),n=Nm(r);return{cL:Em(n),c1:e.c1}},Ie={fT:0,fX:0,c5:0},Ll=Lr,Pr=function(e){return e},Gm=Pr({fT:1,fX:0,c5:0}),yo=Gm,Pl=Pr({fT:0,fX:0,c5:1}),xo=Pl,Hm=Ll({cA:Ie,c3:xo,c4:yo}),Im=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Wm({ej:vn(40),c1:Rm({bx:Mr(n),cb:lr(t),bC:Mr(a),aR:Pm(r),dl:Hm})})},Xm=function(e){return Im({bx:o(Xr,"camera azimuth",e),cb:o(Xr,"camera distance",e),bC:o(Xr,"camera elevation",e),aR:{fT:0,fX:0,c5:0}})},On=function(e){return e*er/180},Um=$(function(e,r){return o(we,function(n){if(n.$===2){var a=n.a;return a}else return bo},o(Bn,e,r.av))}),Jm=$(function(e,r){return o(nr,bo,Vn(o(Fn,Um(e),r)))}),Om=$(function(e,r){return o(Jm,e,r.eA)}),qm=Om,So=$(function(e,r){return{$:0,a:e,b:r}}),To=$(function(e,r){return{$:2,a:e,b:r}}),Ea=function(e){return{$:5,a:e}},Co=$(function(e,r){return{$:4,a:e,b:r}}),ja=$(function(e,r){return{$:3,a:e,b:r}}),Lo=$(function(e,r){return{$:1,a:e,b:r}}),Ym=function(e){var r=e;return r},Na=function(e){var r=e;return Ym(r.er)},Wa=function(e){var r=e;return r.aK},Zm=y(function(e,r,n){return{er:p(Tl,e,r,Na(n)),aK:Wa(n)}}),Qm=$(function(e,r){var n=o(En,e,r),a=o(oa,e,r);return function(t){var i=t;return o(Vr,n(i.cA),a(i.eG))}}),Km=y(function(e,r,n){var a=n;return{k:p(Qm,e,r,a.k),e9:a.e9,fr:a.fr}}),Po=function(e){var r=e;return r},e0=function(e){return e},zo=$(function(e,r){var n=Po(r),a=n.a,t=n.b;return e0(L(e(a),e(t)))}),r0=y(function(e,r,n){return o(zo,o(En,e,r),n)}),Ga=function(e){var r=e;return r.ey},Ha=function(e){var r=e;return r.fr},Ia=$(function(e,r){return{ey:r,fr:xe(e)}}),n0=y(function(e,r,n){return o(Ia,Ha(n),p(En,e,r,Ga(n)))}),ko=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),a0=y(function(e,r,n){return o(ko,o(En,e,r),n)}),zl=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(So,l,p(Zm,e,r,a));case 1:var l=n.a,t=n.b;return o(Lo,l,p(a0,e,r,t));case 3:var l=n.a,i=n.b;return o(ja,l,p(n0,e,r,i));case 2:var l=n.a,c=n.b;return o(To,l,p(Km,e,r,c));case 4:var l=n.a,u=n.b;return o(Co,l,p(r0,e,r,u));default:var v=n.a;return Ea(o(re,o(zl,e,r),v))}}),t0=Pr({fT:0,fX:1,c5:0}),Mo=t0,o0=o(Vr,Ie,Mo),Bt=$(function(e,r){return p(zl,o0,Mr(e),r)}),i0=$(function(e,r){return o(we,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Bn,e,r.av))}),c0=$(function(e,r){return o(nr,0,Vn(o(Fn,i0(e),r)))}),l0=$(function(e,r){return o(c0,e,r.eA)}),kl=l0,u0=function(e){return Ea(e)},Ft=function(e){return{$:0,a:e}},Ml=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Dl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),rt=function(e){return p(Dl,0,1,e<=.04045?e/12.92:o(Rn,(e+.055)/1.055,2.4))},Nn=j$,v0=function(e){var r=go(e),n=r.cM,a=r.cc,t=r.b5;return p(Nn,rt(n),rt(a),rt(t))},$0=function(e){return p(Ml,0,Ft(v0(e)),Ft(0))},f0=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),s0=$(function(e,r){return{er:o(Cl,e,Na(r)),aK:Wa(r)}}),d0=$(function(e,r){var n=r;return o(Vr,o(jn,e,n.cA),n.eG)}),m0=$(function(e,r){var n=r;return{k:o(d0,e,n.k),e9:n.e9,fr:n.fr}}),p0=$(function(e,r){return o(zo,jn(e),r)}),b0=$(function(e,r){return o(Ia,Ha(r),o(jn,e,Ga(r)))}),g0=$(function(e,r){return o(ko,jn(e),r)}),Do=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(f0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(So,s,o(s0,i,c));case 1:var s=r.a,l=r.b;return o(Lo,s,o(g0,i,l));case 3:var s=r.a,u=r.b;return o(ja,s,o(b0,i,u));case 2:var s=r.a,v=r.b;return o(To,s,o(m0,i,v));case 4:var s=r.a,d=r.b;return o(Co,s,o(p0,i,d));default:var m=r.a;return Ea(o(re,Do(V(n,a,t)),m))}}),h0=function(e){return Do(V(e,0,0))},_0=function(e){return Do(V(0,e,0))},K=$(function(e,r){var n=r;return e*n}),ur=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Wn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c5:a.c5+r*(t.c5-a.c5)}}),w0=y(function(e,r,n){var a=Na(n),t=wr(a),i=yr(a),c=xr(a),l=p(Wn,e,r,Fr(a)),u=r>=0?br({cA:l,c3:t,c4:i,c6:c}):br({cA:l,c3:ur(t),c4:ur(i),c6:ur(c)}),v=Wa(n),s=v.a,d=v.b,m=v.c,f=xe(o(K,r,s)),g=xe(o(K,r,d)),b=xe(o(K,r,m));return{er:u,aK:V(f,g,b)}}),Ao=function(e){var r=e;return r.k},ki=function(e){return wo(Ao(e))},Al=function(e){var r=e;return r.cA},y0=function(e){return Al(Ao(e))},Bl=function(e){var r=e;return r.e9},Fl=function(e){var r=e;return r.fr},x0=y(function(e,r,n){var a=xe(o(K,r,Fl(n))),t=xe(o(K,r,Bl(n))),i=r>=0?ki(n):ur(ki(n)),c=p(Wn,e,r,y0(n));return{k:o(Vr,c,i),e9:t,fr:a}}),S0=y(function(e,r,n){return o(zo,o(Wn,e,r),n)}),T0=y(function(e,r,n){return o(Ia,o(K,Z(r),Ha(n)),p(Wn,e,r,Ga(n)))}),C0=y(function(e,r,n){return o(ko,o(Wn,e,r),n)}),Vl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(So,c,p(w0,Ie,e,n));case 1:var c=r.a,a=r.b;return o(Lo,c,p(C0,Ie,e,a));case 3:var c=r.a,t=r.b;return o(ja,c,p(T0,Ie,e,t));case 2:var c=r.a,i=r.b;return o(To,c,p(x0,Ie,e,i));case 4:var c=r.a,l=r.b;return o(Co,c,p(S0,Ie,e,l));default:var u=r.a;return Ea(o(re,Vl(e),u))}}),L0=$(function(e,r){return o(ja,e,o(Ia,lr(r),Ie))}),P0=$(function(e,r){return(r-Wc(r/e)*e)/e}),z0=function(e){return 2*er*e},qn=R(function(e,r,n,a){return e+(r-e)*(1+Dr(z0(o(P0,n,a))))/2}),k0=$(function(e,r){var n=e.db+r*o(Xr,"delay per index",e),a=o(Xr,"saturation",e),t=o(kl,"number of spheres",e),i=30/t,c=o(Xr,"lighting",e),l=C(qn,0,1,7,n);return o(_0,i*1.1*r,o(Bt,C(qn,0,10,20,n),o(h0,C(qn,3,4,1,n),o(Vl,C(qn,1,4,4,n),o(L0,$0(p(yl,l,a,c)),i)))))}),nt=function(e){var r=o(kl,"number of spheres",e);return u0(o(re,k0(e),o(kr,-(r/2|0),r/2|0)))},M0=function(e){return e},D0=function(e){return lr(.01*e)},Mi=function(e){return e},A0=function(e){return e},B0=function(e){return{$:0,a:e}},F0=B0,V0={$:3},R0=V0,E0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),j0=E0,N0=$(function(e,r){return r.b?p(fr,A,r,e):e}),je=function(e){return p(fr,N0,P,e)},Bo=$(function(e,r){return je(o(re,e,r))}),W0=function(e){return{$:1,a:e}},G0=W0,H0=function(e){return o(kn,"height",De(e))},I0=function(e){return l$(f$(e))},X0=I0,U0=function(e){return{$:2,a:e}},J0=U0,O0=function(e){return o(Tr,"",e)},q0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Xe(l*1e3)/1e3},c=function(l){return Xe(l*1e4)/100};return O0(_(["rgba(",_e(c(r)),"%,",_e(c(n)),"%,",_e(c(a)),"%,",_e(i(t)),")"]))},Y0=$(function(e,r){switch(r.$){case 0:return o(Pf,e,r);case 1:return o(zf,e,r);case 2:return o(kf,e,r);case 3:return o(Mf,e,r);case 4:return o(Df,e,r);default:return o(Af,e,r)}}),Z0=$(function(e,r){switch(r.$){case 0:return o(af,e,r);case 1:return o(tf,e,r);case 2:return o(of,e,r);case 3:return o(cf,e,r);case 4:return o(lf,e,r);case 5:return o(uf,e,r);case 6:return o(vf,e,r);case 7:return o($f,e,r);default:return ff(e)}}),Q0=y(function(e,r,n){return p(Lf,e,r,n)}),Di=function(e){var r=e;return r},rn=X$,at=C(rn,1,1,1,1),Je=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),K0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ep=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(K0,n*a/t,n,n*(1-a-t)/t)}),rp=function(e){var r=e.a,n=e.b,a=e.c;return p(Nn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Fo=$(function(e,r){return rp(o(ep,e,r))}),Rl=$(function(e,r){return{dp:pr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ye=Z$,np=function(e){return Ye({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},tt=be(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(rn,a.bX,a.bX,a.bX,i);return Ce(t,e,c,np(a),a.dp,r,n)}),El=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Rl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(tt,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(A,S(tt,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var h=t.a,T=o(A,S(tt,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(Mn,C(El,e,r,n,a),i,k)}}),ap=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),jl=ap,Vo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),tp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Vo,518,r,n,a)},op=$(function(e,r){return{$:6,a:e,b:r}}),ip=op,Nl=_([tp({V:1,W:0,Z:!1}),C(jl,!1,!1,!1,!1),o(ip,0,1)]),Zr=519,Ro=8,Wl=15,Ur=7681,cp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=nf,lp=$(function(e,r){return{$:0,a:e,b:r}}),up=lp({df:1,$7:0,dV:5}),Me=R$,vp=up(_([{bT:o(Me,-1,-1)},{bT:o(Me,1,-1)},{bT:o(Me,-1,1)},{bT:o(Me,1,1)}])),$p={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},fp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Eo=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(fp,a,t,i)))}),jo=function(e){return p(Eo,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},No=function(e){return S(ne,_([jo(e),C(jl,!1,!1,!1,!1)]),$p,cp,vp,{})},sp=No({a8:Ur,co:0,cN:Ro,bl:Zr,c2:Wl,bt:Ur,bu:Ur}),dp=516,Ai=5386,ye=7680,mp=function(e){return o(Rn,2,e+4)},Gl=function(e){return No({a8:ye,co:Wl,cN:Ro,bl:dp,c2:mp(e),bt:Ai,bu:Ai})},pp=y(function(e,r,n){return je(_([p(Je,e,n,Nl),_([Gl(r),sp])]))}),bp=$(function(e,r){return je(o(Fc,pp(e),r))}),gp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Vo,513,r,n,a)},hp=gp({V:1,W:0,Z:!0}),_p=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},wp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return _p(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},yp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Bi=$(function(e,r){var n=e,a=r;return p(yp,32774,n,a)}),xp=1,Fi=771,Sp=770,Wo=wp({bv:0,aH:o(Bi,xp,Fi),by:0,bA:o(Bi,Sp,Fi),bF:0,bV:0}),Er=_([hp,Wo]),Tp=function(e){var r=e;return r.dO},Cp=function(e){var r=e;return r.dP},Hl=function(e){var r=e;return r.dQ},Lp=function(e){var r=e;return r.dR},Pp=function(e){var r=e;return r.dS},Il=function(e){var r=e;return r.dT},Jr=$(function(e,r){var n=e,a=r;return a-n}),Xl=function(e){return V(o(Jr,Lp(e),Tp(e)),o(Jr,Pp(e),Cp(e)),o(Jr,Il(e),Hl(e)))},Vi=function(e){var r=e;return Fr(r)},zp=function(e){return e},kp=function(e){return br({cA:zp({fT:e.H,fX:e.I,c5:e.J}),c3:Pr({fT:e.q,fX:e.r,c5:e.s}),c4:Pr({fT:e.t,fX:e.u,c5:e.v}),c6:Pr({fT:e.w,fX:e.x,c5:e.y})})},ot=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c5*v.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),Ul=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),Jl=$(function(e,r){return{cA:o(Ul,e,Fr(r)),c3:o(ot,e,wr(r)),c4:o(ot,e,yr(r)),c6:o(ot,e,xr(r))}}),Mp=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),Ta=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Ke,n,a)}),ca=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ca,n,a)}),Dp=$(function(e,r){var n=Ta(r),a=Ta(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ne=function(e){var r=e;return r},Ap=function(e){var r=e;return V(r.fT,r.fX,r.c5)},bn=$(function(e,r){var n=e,a=r;return a+n}),Bp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ia(xe(a)),c=ia(xe(n)),l=ia(xe(t)),u=Ap(r),v=u.a,s=u.b,d=u.c;return{dO:o(bn,c,v),dP:o(bn,i,s),dQ:o(bn,l,d),dR:o(Jr,c,v),dS:o(Jr,i,s),dT:o(Jr,l,d)}}),Ri=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fX*r,s=t.fT*r,d=Ne(xr(e)),m=Z(l*d.fT)+Z(c*d.fX)+Z(i*d.c5),f=Ne(yr(e)),g=Z(l*f.fT)+Z(c*f.fX)+Z(i*f.c5),b=Ne(wr(e)),w=Z(l*b.fT)+Z(c*b.fX)+Z(i*b.c5),x=o(Bp,V(w,g,m),o(Ul,e,p(Mp,s,v,u)));if(a.$)return te(x);var h=a.a;return te(o(Dp,h,x))}),Vt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Ri,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Ri,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Vt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Jl,kp(v),e),m=r*v.bX,f=e,g=r,b=C(Vt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),nn=N$,an=W$,tn=G$,Ol=function(e){return{$:4,a:e}},Fp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Gn=function(e){return Ol(o(Fp,e,P))},Vp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Rp=function(e){var r=e;return r},Ei=No({a8:Ur,co:0,cN:Ro,bl:Zr,c2:255,bt:Ur,bu:Ur}),Hr=fv,ir=0,Ep=function(e){var r=e,n=o(Ke,Z(r.fT),o(Ke,Z(r.fX),Z(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=Hr(i*i+t*t+a*a);return c*n}else return ir},Te={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Ve=$(function(e,r){var n=e,a=r;return Ye({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),$n=L({bd:o(Ve,Te,Te),bK:o(Ve,Te,Te),bL:o(Ve,Te,Te),bM:o(Ve,Te,Te)},C(rn,0,0,0,0)),ql=514,Yl=function(e){var r=e.Z,n=e.W,a=e.V;return C(Vo,515,r,n,a)},Zl=240,jp=_([Yl({V:1,W:0,Z:!0}),jo({a8:ye,co:Zl,cN:0,bl:ql,c2:0,bt:ye,bu:ye}),Wo]),Np=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=xe(a),l=c,u=xe(t),v=u,s=n.cL;if(s.$){var m=s.a;return Tt(v)?Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return Tt(v)?Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Yn=$(function(e,r){return(1&e>>r)===1?0:1}),Wp=function(e){return _([Yl({V:1,W:0,Z:!0}),jo({a8:ye,co:Zl,cN:e,bl:ql,c2:0,bt:ye,bu:ye}),Wo])},Gp=y(function(e,r,n){return je(o(re,function(a){var t=a<<4,i=C(rn,o(Yn,a,0),o(Yn,a,1),o(Yn,a,2),o(Yn,a,3));return p(Je,e,L(r,i),Wp(t))},o(kr,1,o(Rn,2,n)-1)))}),Or=function(e){var r=e;return r},Hp=Q$,ji=function(e){var r=e;return ur(xr(r))},Ip={cA:Ie,c3:yo,c4:Mo,c6:xo},Xa=function(e){var r=e;return r},Xp=function(e){var r=Xa(Fr(e)),n=Ne(xr(e)),a=Ne(yr(e)),t=Ne(wr(e));return Ye({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Up=$(function(e,r){var n=r;return Xp(o(Jl,n,e))}),Jp=function(e){return o(Up,Ip,e)},Op=function(e){var r=e;return r.c1},qp=function(e){var r=e;return wr(r)},Yp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),Zp=function(e){var r=e;return yr(r)},Qp=function(e){var r=Op(e.ev),n=br({cA:Vi(r),c3:qp(r),c4:Zp(r),c6:ur(ji(r))}),a=Gn(e.aP),t=a,i=C(Vt,n,1,q,_([t]));if(i.$===1)return P;var c=i.a,l=Jp(r),u=o(K,.99,o(ce,xe(e.aJ),At(Hl(c)))),v=Xl(c),s=v.a,d=v.b,m=v.c,f=Ep(p(Yp,s,d,m)),g=o(K,1.01,o(bn,f,At(Il(c)))),b=o(Np,e.ev,{eq:e.eq,eP:g,fg:u}),w=Hp(b).dM,x=w?Ne(ur(ji(r))):Or(Vi(r)),h=function(){var oe=e.bZ;switch(oe.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var se=oe.a;return L(3,se);case 4:var se=oe.a;return L(4,se);default:return L(5,0)}}(),T=h.a,k=h.b,W=e.bD,j=W,E=o(Fo,j,e.b$),N=E,G=Ye({dx:0,dy:x.fT,dz:nn(N),dA:e.ec,dB:0,dC:x.fX,dD:an(N),dE:Rp(f),dF:0,dG:x.c5,dH:tn(N),dI:T,dJ:0,dK:w,dL:0,dM:k}),B=Ce(El,G,l,b,Vp,t,{M:P,U:P,fz:P}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return je(_([p(Je,B.M,L(Q,at),Er),p(Je,B.U,$n,Er)]));case 1:var Q=O.a;return je(_([p(Je,B.M,$n,Er),_([Ei]),p(Je,B.fz,Q.bd,Nl),_([Gl(0)]),p(Je,B.M,L(Q,at),jp),p(Je,B.U,$n,Er)]));default:var ie=O.a,ve=O.b;return je(_([p(Je,B.M,L(ve,at),Er),_([Ei]),o(bp,B.fz,ie),p(Gp,B.M,ve,zr(ie)),p(Je,B.U,$n,Er)]))}},Kp=function(e){return o(kn,"width",De(e))},e3=$(function(e,r){var n=_([G0(1),J0(0),F0(!0),C(j0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(A,R0,n),"1",1);default:var k=T.a;return V(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Di(v),d=o(pe,"height",De(s)+"px"),m=Di(u),f=m/s,g=o(Bo,function(T){return Qp({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(pe,"width",De(m)+"px"),w=e.aI,x=w,h=q0(x);return p(X0,"div",_([o(pe,"padding","0px"),b,d]),_([L(i,p(Q0,t,_([Kp(Xe(m*c)),H0(Xe(s*c)),b,d,o(pe,"display","block"),o(pe,"background-color",h)]),g))]))}),r3=function(e){return o(e3,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Ql=function(e){return e},Ni=Ql({fT:.31271,fX:.32902}),n3=$(function(e,r){var n=e,a=Ne(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(Fo,r.cd,r.b6),u=l;return{by:tn(u),ex:n,bF:an(u),cJ:0,bV:nn(u),cZ:1,fT:-t,fX:-i,c5:-c}}),a3=function(e){return e},t3=function(e){return a3(1.2*o(Rn,2,e))},it=function(e){return e},o3={$:0},i3=o3,Kl=function(e){return e},c3=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Wi=function(e){var r=e;return r},l3=function(e){e:for(;;){if(pr(e.e2,ir)&&pr(e.e3,ir))return Te;if(o(c3,xe(e.e2),xe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:ur(e.ei)};e=r;continue e}else{var n=Z(Wi(e.e3)/er),a=Z(Wi(e.e2)/er),t=Ne(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(Fo,Kl(1),e.b6),v=u;return{by:a*tn(v),ex:!1,bF:a*an(v),cJ:n/a,bV:a*nn(v),cZ:3,fT:i,fX:c,c5:l}}}},Gi=function(e){return l3({b6:e.b6,e2:e.cd,e3:ir,ei:e.ei})},u3=function(e){var r=e;return r},eu=function(e){var r=p(Dl,1667,25e3,u3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ql({fT:n,fX:a})},ru=function(e){return e},v3=eu(ru(12e3)),$3=eu(ru(5600)),f3=function(e){return{$:2,a:e}},s3=function(e){return f3(e)},d3=$(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},Zn=function(e){var r=e;return r},m3=function(e){var r=e;return r.ex},p3=nu($n.a),b3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?L(o(A,a,i),c):L(i,o(A,a,c))});return p(fr,n,L(P,P),r)}),g3=function(e){var r=e;return Ye({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},h3=ee(function(e,r,n,a,t,i,c,l){var u=o(b3,m3,_([Zn(e),Zn(r),Zn(n),Zn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(d3,o(re,g3,v),{bd:o(Ve,m,g),bK:o(Ve,w,h),bL:o(Ve,t,i),bM:o(Ve,c,l)})}else return p3}else return nu({bd:o(Ve,e,r),bK:o(Ve,n,a),bL:o(Ve,t,i),bM:o(Ve,c,l)})}),_3=y(function(e,r,n){return ka(h3,e,r,n,Te,Te,Te,Te,Te)}),w3=function(e){var r=o(n3,A0(e.fz),{b6:$3,eG:e.fI,cd:it(8e4)}),n=Gi({b6:v3,cd:it(2e4),ei:e.ei}),a=Gi({b6:Ni,cd:it(15e3),ei:ur(e.ei)}),t=p(_3,r,n,a);return r3({b0:s3(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:t3(15),bJ:t,bZ:i3,b$:Ni})},au=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),y3=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),x3=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),S3=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),T3=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Go=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(T3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(y3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(S3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(x3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ho={$:0},C3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Ta(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),L3=y(function(e,r,n){var a=Ta(e(r));return ka(C3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),ct=$(function(e,r){var n=e,a=r;return J(a,n)<1}),iu=function(e){return o(ct,e.dO,e.dR)&&o(ct,e.dP,e.dS)&&o(ct,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},gn=function(e){var r=e;return r.fT},hn=function(e){var r=e;return r.fX},_n=function(e){var r=e;return r.c5},cu=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=gn(n),c=hn(n),l=_n(n),u=gn(a),v=hn(a),s=_n(a),d=gn(t),m=hn(t),f=_n(t);return iu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},lu=H$,Le=function(e){return lu(Xa(e))},uu=function(e){var r=e;return r},Ua=function(e){return lu(uu(e))},P3=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),Rt=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),z3={fT:0,fX:0,c5:0},k3=$(function(e,r){var n=e,a=r,t=o(Ke,Z(a.fT),o(Ke,Z(a.fX),Z(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=Hr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return z3}),M3=k3(Kl(1)),vu=y(function(e,r,n){var a=o(Rt,r,n),t=o(Rt,e,r);return M3(o(P3,a,t))}),D3=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Ua(p(vu,n,a,t));return V({o:i,bT:Le(n)},{o:i,bT:Le(a)},{o:i,bT:Le(t)})},A3=$(function(e,r){return{$:2,a:e,b:r}}),$u=A3({df:3,$7:0,dV:4}),B3=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(re,D3,e)),t=p(L3,cu,r,n);return C(au,t,e,a,0)}else return Ho},Fe=y(function(e,r,n){return V(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),fu=function(){var e=lr(1),r=lr(1),n=lr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(me,i,t,a),l=o(K,.5,e),u=p(me,i,t,l),v=o(K,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(K,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Go(B3(_([p(Fe,c,g,f),p(Fe,c,s,g),p(Fe,u,b,w),p(Fe,u,w,d),p(Fe,f,g,w),p(Fe,f,w,b),p(Fe,c,d,s),p(Fe,c,u,d),p(Fe,c,f,b),p(Fe,c,b,u),p(Fe,s,w,g),p(Fe,s,d,w)])))}(),Qn={$:0},F3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),V3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ua(p(vu,u,l,c)),s={o:v,bT:Le(u)},d={o:v,bT:Le(l)},m={o:v,bT:Le(c)};return o(A,s,o(A,d,o(A,m,n)))}),Io=function(e){var r=e;return r.D},R3=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),Et=4294967295>>>32-Sn,jt=qu,E3=y(function(e,r,n){e:for(;;){var a=Et&r>>>e,t=o(jt,a,n);if(t.$){var v=t.a;return o(jt,Et&r,v)}else{var i=t.a,c=e-Sn,l=r,u=i;e=c,r=l,n=u;continue e}}}),j3=function(e){return e>>>5<<5},N3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,j3(n))>-1?te(o(jt,Et&e,i)):te(p(E3,a,e,t))}),Xo=function(e){var r=e;return r.ah},lt=$(function(e,r){return o(N3,e,Xo(r))}),W3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(R3,y(function(c,l,u){return V(c,l,u)}),o(lt,a,e),o(lt,t,e),o(lt,i,e))};return o(Fn,r,Io(e))},G3=y(function(e,r,n){e:for(;;){var a=o(lo,Be,e),t=a.a,i=a.b;if(J(xt(t),Be)<0)return o(Gc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Nc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Uo=function(e){return e.b?p(G3,e,P,0):Ec},H3=y(function(e,r,n){return e(r(n))}),I3=$(function(e,r){return!o(rl,o(H3,ps,e),r)}),X3=$(function(e,r){return p(fr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),U3=function(e){var r=e.a;return r},su=$(function(e,r){var n=U3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(I3,a,r)?{D:r,ah:e}:{D:o(X3,a,r),ah:e}}),J3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Hn=J3({df:1,$7:3,dV:4}),la=$(function(e,r){var n=Or(r),a=Or(e);return L(V(a.fT,a.fX,a.c5),V(n.fT,n.fX,n.c5))}),Hi=p(Nn,0,0,0),ut=Ue(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Bn,o(la,e,r),t);if(v.$){var d={o:Hi,bT:Le(r)},m={o:Hi,bT:Le(e)},f=u+1,g=u;return V(o(A,V(n,g,f),o(A,V(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),O3=be(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=v,T=a+3,k=Ce(ut,s,m,f,b,r,Ce(ut,d,s,g,f,r,Ce(ut,m,d,b,g,r,t)));e=w,r=x,n=h,a=T,t=k;continue e}else{var W=t,j=W.a,E=W.b;return L(j,Ae(E))}}),q3=be(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(dn,o(la,m,s),f,p(dn,o(la,s,d),g,p(dn,o(la,d,m),b,t))),x=o(A,V(b,g,f),a),h=e,T=v,k=n+3,W=x,j=w;e=h,r=T,n=k,a=W,t=j;continue e}else return V(a,t,n)}),Sr=y(function(e,r,n){var a=W3(n),t=p(fr,V3(r),P,a),i=S(q3,r,a,0,P,wl),c=i.a,l=i.b,u=i.c,v=S(O3,r,l,a,0,V(c,P,u)),s=v.a,d=v.b,m=_l(d)?t:le(t,d);return p(F3,e,o(su,Uo(m),s),o(Hn,m,s))}),Nt=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(kr,0,zr(e)-1)),ah:Uo(je(o(re,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},du=function(e){switch(e.$){case 0:return Qn;case 1:var a=e.a,r=e.b,n=o(re,Ln,r);return p(Sr,a,Lr,Nt(n));case 2:var a=e.a,r=e.b,n=o(re,Ln,r);return p(Sr,a,Lr,Nt(n));case 3:var a=e.a,t=e.b;return p(Sr,a,Lr,t);case 4:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 8:return Qn;case 9:return Qn;default:return Qn}},Ii=du(fu),mu={$:0},z=mu,de=$(function(e,r){return{$:1,a:e,b:r}}),Y3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Z3=1029,Q3=function(e){return{$:5,a:e}},pu=function(e){var r=e;return Q3(r)},K3=pu(Z3),eb=1028,rb=pu(eb),Pe=y(function(e,r,n){return r===1?e?o(A,K3,n):o(A,rb,n):n}),bu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},vt=R(function(e,r,n,a){return o(de,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),bu,Y3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Jo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},gu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=R(function(e,r,n,a){return o(de,r,ee(function(t,i,c,l,u,v,s,d){return S(ne,p(Pe,l,a,d),gu,Jo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),hu=$(function(e,r){return{$:3,a:e,b:r}}),nb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},_u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ab=R(function(e,r,n,a){return o(hu,n,ee(function(t,i,c,l,u,v,s,d){return S(ne,d,_u,nb,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Oo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},In=function(e){var r=e;return r},Ja=I$,or=be(function(e,r,n,a,t){return o(de,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),gu,Oo,a,{aN:o(Ja,In(r),e),b:l,c,d:s,e:i,f:v})}))}),tb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},ob=be(function(e,r,n,a,t){return o(hu,a,ee(function(i,c,l,u,v,s,d,m){return S(ne,m,_u,tb,t,{aN:o(Ja,In(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Kn=R(function(e,r,n,a){return o(de,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),yu,wu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ib=Ue(function(e,r,n,a,t,i){return o(de,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),Su,xu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Tu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},cb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(de,u,ee(function(d,m,f,g,b,w,x,h){var T=x.a,k=x.b;return S(ne,p(Pe,g,s,h),Su,Tu,v,{b4:e,b7:r,b8:i,b9:a,P:k,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Cu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},ea=Ue(function(e,r,n,a,t,i){return o(de,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,v,i,f),yu,Cu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),lb=function(e){return{$:0,a:e}},Xi=$(function(e,r){return{$:1,a:e,b:r}}),wn=$(function(e,r){if(r.$){var n=r.a.C;return L(n,1)}else return r.a,L(e,0)}),ub=function(e){return C(rn,nn(e),an(e),tn(e),1)},qo=C(rn,0,0,0,0),ua=$(function(e,r){if(r.$){var a=r.a.C;return L(a,qo)}else{var n=r.a;return L(e,ub(n))}}),Lu=$(function(e,r){var n=L(e,r);if(n.a.$){var t=n.a.a.C;return o(Xi,L(t,qo),o(wn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Xi,o(ua,t,e),o(wn,t,r))}else{var a=n.a.a;return n.b.a,lb(a)}}),vb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ra=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),$b=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),fb=function(e){return o(Me,e,1)},Wt=o(Me,0,0),jr=$(function(e,r){if(r.$){var a=r.a.C;return L(a,Wt)}else{var n=r.a;return L(e,fb(n))}}),Pu=R(function(e,r,n,a){var t=C($b,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(ra,L(u,qo),o(jr,u,r),o(jr,u,n),o(wn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(ra,o(ua,u,e),L(u,Wt),o(jr,u,n),o(wn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(ra,o(ua,u,e),o(jr,u,r),L(u,Wt),o(wn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(ra,o(ua,u,e),o(jr,u,r),o(jr,u,n),L(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(vb,i,c,l)}}),sb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},$t=be(function(e,r,n,a,t){return o(de,n,ee(function(i,c,l,u,v,s,d,m){return S(ne,p(Pe,u,t,m),bu,sb,a,{b1:In(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),zu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},db=R(function(e,r,n,a){return o(de,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),zu,xu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),mb=It(function(e,r,n,a,t,i,c,l,u){return o(de,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,h=b.b;return S(ne,p(Pe,m,u,w),zu,Tu,l,{b4:e,b7:r,b8:i,b9:a,P:h,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Pn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),pb=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},bb=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},gb=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},hb=function(e){return p(me,pb(e),bb(e),gb(e))},H=function(e){var r=Xl(e),n=r.a,a=r.b,t=r.c;return{ey:Xa(hb(e)),eS:n/2,eT:a/2,eU:t/2}},Yo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(vt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(vt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(vt,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(ab,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S($t,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S($t,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S($t,l,v,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(ob,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Lu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,h=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(db,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Ce(ib,b,x,h,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(Kn,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(Kn,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Kn,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Kn,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,k=e.c,W=e.d,j=e.e,E=C(Pu,T,k,W,j);if(E.$){var O=E.a,Q=O.a,ie=O.b,ve=E.b,oe=ve.a,se=ve.b,ze=E.c,Se=ze.a,sr=ze.b,dr=E.d,x=dr.a,h=dr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Iu(mb,Q,ie,oe,se,Se,sr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return cb(Q)(ie)(oe)(se)(Se)(sr)(x)(h)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,G=E.b,B=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return Ce(ea,N,G,B,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return Ce(ea,N,G,B,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Ce(ea,N,G,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Ce(ea,N,G,B,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),ft=function(e){var r=e;return r.fT},st=function(e){var r=e;return r.fX},dt=function(e){var r=e;return r.c5},_b=function(e){var r=e,n=dt(r.c6),a=st(r.c6),t=ft(r.c6),i=dt(r.c4),c=st(r.c4),l=ft(r.c4),u=dt(r.c3),v=st(r.c3),s=ft(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},wb=function(e){var r=Xa(Fr(e)),n=Ne(xr(e)),a=Ne(yr(e)),t=Ne(wr(e));return{dp:_b(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Nr=$(function(e,r){return{$:5,a:e,b:r}}),ku=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Rl,a,e);return o(Nr,i,t);case 1:return o(Nr,e,n);case 3:return o(Nr,e,n);case 2:return o(Nr,e,n);default:return o(Nr,e,n)}}),Mu=$(function(e,r){return o(ku,wb(e),r)}),Oa=function(e){return{$:2,a:e}},yb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),xb=J$,Sb=U$,Ui=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=Sb(a),g=f.fT,b=f.fX,w=f.c5,x=f.em,h=xb({em:x,fT:g*s,fX:b*d,c5:w*m});return ka(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Gt=$(function(e,r){switch(r.$){case 0:return mu;case 5:var n=r.a,a=r.b;return o(Nr,n,o(Gt,e,a));case 1:var t=r.a,i=r.b;return o(de,o(yb,e,t),o(Ui,e,i));case 3:return r;case 2:var i=r.a;return Oa(o(Ui,e,i));default:var c=r.a;return Ol(o(re,Gt(e),c))}}),Zo=$(function(e,r){var n=r;return o(Gt,e,n)}),Qo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Au=7682,Tb=p(Eo,{co:0,cN:0,c2:15},{a8:ye,bl:Zr,bt:ye,bu:Du},{a8:ye,bl:Zr,bt:ye,bu:Au}),Cb=p(Eo,{co:0,cN:0,c2:15},{a8:ye,bl:Zr,bt:ye,bu:Au},{a8:ye,bl:Zr,bt:ye,bu:Du}),Ko=$(function(e,r){return e?o(A,Cb,r):o(A,Tb,r)}),Lb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Pb=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,v){return S(ne,o(Ko,i,v),Lb,Qo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},Ca=function(e){var r=Pb(e);if(r.$)return z;var n=r.a;return Oa(n)},zb=R(function(e,r,n,a){var t=o(Yo,n,fu),i=function(){var s=L(e,r);return s.a?s.b?Gn(_([t,Ca(Ii)])):t:s.b?Ca(Ii):z}(),c=Wa(a),l=c.a,u=c.b,v=c.c;return o(Mu,Na(a),o(Zo,V(l,u,v),i))}),kb=$(function(e,r){return C(zb,!0,!0,e,r)}),Bu=$(function(e,r){return{$:0,a:e,b:r}}),Mb=function(e){var r=go(e),n=r.cM,a=r.cc,t=r.b5;return p(Nn,n,a,t)},Db=function(e){return o(Bu,0,Ft(Mb(e)))},yn=function(e){var r=e;return Dr(r)},Ab=$(function(e,r){var n=r;return n/e}),Ji=function(e){var r=e;return{fT:Dr(r),fX:Yr(r)}},Bb=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ua(a),bT:Le(n)},r)}),Fb=za(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=tn(l.bT),s=an(l.bT),d=nn(l.bT),m=o(ca,e,d),f=o(Ke,r,d),g=o(ca,n,s),b=o(Ke,a,s),w=o(ca,t,v),x=o(Ke,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=$(function(e,r){var n=tn(e.bT),a=an(e.bT),t=nn(e.bT);return Xt(Fb,t,t,a,a,n,n,r)}),Vb=function(e){var r=p(kc,Bb,P,Xo(e));if(r.b){var n=r.a,a=r.b,t=o(Hn,r,Io(e)),i=o(Fu,n,a);return C(tu,i,e,t,0)}else return Ho},Rb=Pr({fT:0,fX:0,c5:-1}),Oi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),La=function(e){var r=e;return Yr(r)},fn=function(e){var r=e;return r},Ht=function(e){return Mr(2*er*e)},qi=Ll({cA:Ie,c3:yo,c4:Mo}),Vu=function(){var e=72,r=o(Ab,e,Ht(1)),n=lr(1),a=fn(Pl),t=fn(Rb),i=lr(1),c=o(K,.5,i),l=p(me,ir,ir,c),u=o(K,-.5,i),v=p(me,ir,ir,u),s=function(f){var g=o(K,f,r),b=fn(o(Oi,qi,Ji(g))),w=o(K,yn(g),n),x=o(K,La(g),n),h=p(me,w,x,c),T=p(me,w,x,u),k=o(wa,e,f+1),W=o(K,k,r),j=fn(o(Oi,qi,Ji(W))),E=o(K,yn(W),n),N=o(K,La(W),n),G=p(me,E,N,u),B=p(me,E,N,c);return _([V({o:t,bT:v},{o:t,bT:G},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:G},{o:j,bT:B}),V({o:b,bT:T},{o:j,bT:B},{o:b,bT:h}),V({o:a,bT:l},{o:a,bT:h},{o:a,bT:B})])},d=o(re,s,o(kr,0,e-1)),m=Nt(je(d));return Go(Vb(m))}(),Yi=du(Vu),Eb=function(e){var r=e,n=Z(r.c5),a=Z(r.fX),t=Z(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=Hr(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=Hr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(J(a,n)<1){var i=Hr(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=Hr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},jb=function(e){var r=Eb(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return L(r,c)},Nb=function(e){var r=wo(e),n=jb(r),a=n.a,t=n.b;return br({cA:Al(e),c3:a,c4:t,c6:r})},Wb=R(function(e,r,n,a){var t=Nb(Ao(a)),i=o(Yo,n,Vu),c=function(){var d=L(e,r);return d.a?d.b?Gn(_([i,Ca(Yi)])):i:d.b?Ca(Yi):z}(),l=Fl(a),u=l,v=Bl(a),s=v;return o(Mu,t,o(Zo,V(u,u,s),c))}),Gb=$(function(e,r){return C(Wb,!0,!0,e,r)}),Zi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},sn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Or(n),c=Or(a),l=Or(t);return Ye({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},na=$u(_([V({cY:0},{cY:1},{cY:2})])),Hb=$(function(e,r){var n=cu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(de,a,ee(function(h,T,k,W,j,E,N,G){return S(ne,p(Pe,W,0,G),Zi,Jo,na,{aw:t,b:k,c:T,d:E,e:h,bq:sn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(de,a,ee(function(h,T,k,W,j,E,N,G){return S(ne,p(Pe,W,0,G),Zi,Oo,na,{aN:o(Ja,In(c),i),b:k,c:T,d:E,e:h,bq:sn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Lu,l,f);if(u.$)return z;var v=u.a;return o(de,a,ee(function(h,T,k,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(Pe,W,0,G),Qi,wu,na,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:k,c:T,d:E,e:h,bq:sn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Pu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(de,a,ee(function(h,T,k,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(Pe,W,0,G),Qi,Cu,na,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:k,c:T,d:E,cQ:w,e:h,bq:sn(r),f:j})}))}}),Ib=function(){var e=_([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=_([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(Hn,e,r)}(),Xb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ki=function(e){return Oa(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ko,t,u),Xb,Qo,Ib,{b:a,c:n,d:c,e:r,bY:l,bq:sn(e),f:i})}))},Ub=R(function(e,r,n,a){var t=o(Hb,n,a),i=L(e,r);return i.a?i.b?Gn(_([t,Ki(a)])):t:i.b?Ki(a):z}),Jb=$(function(e,r){return C(Ub,!0,!0,e,r)}),Ob=$(function(e,r){var n=_n(r),a=_n(e),t=hn(r),i=hn(e),c=gn(r),l=gn(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),qb=function(e){var r=Po(e),n=r.a,a=r.b;return o(Ob,n,a)},ec={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Yb=$(function(e,r){return{$:1,a:e,b:r}}),Zb=Yb({df:2,$7:0,dV:1}),rc=Zb(_([L({dw:0},{dw:1})])),Qb=$(function(e,r){var n=qb(r),a=H(n),t=Po(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(de,a,ee(function(v,s,d,m,f,g,b,w){return S(ne,w,ec,Jo,rc,{aw:l,du:Le(c),dv:Le(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(de,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,ec,Oo,rc,{aN:o(Ja,In(u),l),du:Le(c),dv:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Kb=$(function(e,r){return o(Qb,e,r)}),nc=$(function(e,r){var n=e,a=r;return n/a}),eg=be(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(pr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ac=$(function(e,r){return e<1?P:S(eg,0,e,e,r,P)}),rg=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ua(a),bT:Le(n),L:o(Me,c,l)},r)}),ng=function(e){var r=p(kc,rg,P,Xo(e));if(r.b){var n=r.a,a=r.b,t=o(Hn,r,Io(e)),i=o(Fu,n,a);return C(ou,i,e,t,0)}else return Ho},Ru=$(function(e,r){var n=e,a=r,t=Dr(a);return{fT:t*Dr(n),fX:t*Yr(n),c5:Yr(a)}}),ag=function(){var e=lr(1),r=72,n=o(kr,0,r-1),a=o(ac,r,o(Pn,ir,Ht(1))),t=io(r/2),i=o(kr,0,t-1),c=o(ac,t,o(Pn,vn(90),vn(-90))),l=Uo(je(o(re,function(s){return o(re,function(d){return{o:fn(o(Ru,s,d)),bT:p(me,o(K,yn(d)*yn(s),e),o(K,yn(d)*La(s),e),o(K,La(d),e)),L:L(o(nc,s,Ht(1)),o(nc,o(bn,vn(90),d),vn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=je(o(re,function(s){return je(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([V(b,g,m),V(b,m,f)])},i))},n));return Go(ng(o(su,l,v)))}(),Pa=72,aa=2*Pa,tg=$(function(e,r){e:for(;;){var n=aa+1,a=o(wa,aa,2*e+3),t=o(wa,aa,2*e+2),i=2*e+1,c=2*e,l=aa,u=o(A,V(l,c,t),o(A,V(c,a,t),o(A,V(c,i,a),o(A,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),og=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),ig=$(function(e,r){e:for(;;){var n=p(og,0,2*er,e/Pa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),cg=function(){var e=o(ig,Pa-1,_([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(tg,Pa-1,P);return o(Hn,e,r)}(),lg={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},tc=function(e){return Oa(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ko,!0,u),lg,Qo,cg,{aw:p(Nn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},ug=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},vg=$(function(e,r){return o(ku,ug(e),r)}),$g=R(function(e,r,n,a){var t=o(Yo,n,ag),i=function(){var u=L(e,r);return u.a?u.b?Gn(_([t,tc()])):t:u.b?tc():z}(),c=Ha(a),l=c;return o(vg,o(Rt,Ie,Ga(a)),o(Zo,V(l,l,l),i))}),fg=$(function(e,r){return C($g,!0,!0,e,r)}),sg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),dg=be(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),mg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Bu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(sg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Ml,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(dg,n,a,t,i,c)}},pg=mg,Eu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(kb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(Jb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(fg,pg(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Gb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Kb,Db(c),l)]);default:var u=e.a;return o(Bo,Eu,u)}},bg=function(e){return o(Bo,Eu,e)},gg=$(function(e,r){return w3({aI:M0(e.es),ev:e.ev,aJ:D0(.5),ca:e.ca,aK:L(Mi(Xe(e.cS.fR)),Mi(Xe(e.cS.eW))),aP:bg(r),fz:!0,fI:o(Ru,Mr(e.fH),Mr(e.fJ)),ei:xo})}),hg=$(function(e,r){return o(gg,{es:o(qm,"background color",e),ev:Xm(e),ca:e.ca,cS:e.cS,fH:-On(135),fJ:-On(45)},_([nt(e),o(Bt,On(120),nt(e)),o(Bt,On(240),nt(e))]))}),_g=C(mm,hg,Sm,xm,pm);const wg={Main:{init:_g(o(D,function(e){return ke({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",ga(Cn)))},o(M,"left",Y))},o(M,"pressedKeys",ga(Cn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},yg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},xg=()=>{mt("pointerdown"),mt("wheel"),mt("keydown")},mt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Sg=wg.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});xg();yg(Sg);
