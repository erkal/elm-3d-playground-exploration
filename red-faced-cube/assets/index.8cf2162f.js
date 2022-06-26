const o1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};o1();function $a(n,e,r){return r.a=n,r.f=e,r}function v(n){return $a(2,n,function(e){return function(r){return n(e,r)}})}function z(n){return $a(3,n,function(e){return function(r){return function(t){return n(e,r,t)}}})}function en(n){return $a(4,n,function(e){return function(r){return function(t){return function(i){return n(e,r,t,i)}}}})}function Kn(n){return $a(5,n,function(e){return function(r){return function(t){return function(i){return function(o){return n(e,r,t,i,o)}}}}})}function Ee(n){return $a(6,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return n(e,r,t,i,o,c)}}}}}})}function Ro(n){return $a(7,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return n(e,r,t,i,o,c,l)}}}}}}})}function Fn(n){return $a(8,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return n(e,r,t,i,o,c,l,u)}}}}}}}})}function Gl(n){return $a(9,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return n(e,r,t,i,o,c,l,u,f)}}}}}}}}})}function a(n,e,r){return n.a===2?n.f(e,r):n(e)(r)}function d(n,e,r,t){return n.a===3?n.f(e,r,t):n(e)(r)(t)}function C(n,e,r,t,i){return n.a===4?n.f(e,r,t,i):n(e)(r)(t)(i)}function D(n,e,r,t,i,o){return n.a===5?n.f(e,r,t,i,o):n(e)(r)(t)(i)(o)}function ne(n,e,r,t,i,o,c){return n.a===6?n.f(e,r,t,i,o,c):n(e)(r)(t)(i)(o)(c)}function Ul(n,e,r,t,i,o,c,l){return n.a===7?n.f(e,r,t,i,o,c,l):n(e)(r)(t)(i)(o)(c)(l)}function ii(n,e,r,t,i,o,c,l,u){return n.a===8?n.f(e,r,t,i,o,c,l,u):n(e)(r)(t)(i)(o)(c)(l)(u)}function c1(n,e,r,t,i,o,c,l,u,f){return n.a===9?n.f(e,r,t,i,o,c,l,u,f):n(e)(r)(t)(i)(o)(c)(l)(u)(f)}var l1=[];function u1(n){return n.length}var $1=z(function(n,e,r){for(var t=new Array(n),i=0;i<n;i++)t[i]=r(e+i);return t}),v1=v(function(n,e){for(var r=new Array(n),t=0;t<n&&e.b;t++)r[t]=e.a,e=e.b;return r.length=t,y(r,e)}),f1=v(function(n,e){return e[n]});z(function(n,e,r){for(var t=r.length,i=new Array(t),o=0;o<t;o++)i[o]=r[o];return i[n]=e,i});v(function(n,e){for(var r=e.length,t=new Array(r+1),i=0;i<r;i++)t[i]=e[i];return t[r]=n,t});z(function(n,e,r){for(var t=r.length,i=0;i<t;i++)e=a(n,r[i],e);return e});var m1=z(function(n,e,r){for(var t=r.length-1;t>=0;t--)e=a(n,r[t],e);return e});v(function(n,e){for(var r=e.length,t=new Array(r),i=0;i<r;i++)t[i]=n(e[i]);return t});z(function(n,e,r){for(var t=r.length,i=new Array(t),o=0;o<t;o++)i[o]=a(n,e+o,r[o]);return i});z(function(n,e,r){return r.slice(n,e)});z(function(n,e,r){var t=e.length,i=n-t;i>r.length&&(i=r.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=e[l];for(var l=0;l<i;l++)c[l+t]=r[l];return c});v(function(n,e){return e});v(function(n,e){return console.log(n+": "+s1()),e});function s1(n){return"<internals>"}function ft(n){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function ln(n,e){for(var r,t=[],i=el(n,e,0,t);i&&(r=t.pop());i=el(r.a,r.b,0,t));return i}function el(n,e,r,t){if(n===e)return!0;if(typeof n!="object"||n===null||e===null)return typeof n=="function"&&ft(5),!1;if(r>100)return t.push(y(n,e)),!0;n.$<0&&(n=G$(n),e=G$(e));for(var i in n)if(!el(n[i],e[i],r+1,t))return!1;return!0}var d1=v(ln);v(function(n,e){return!ln(n,e)});function sn(n,e,r){if(typeof n!="object")return n===e?0:n<e?-1:1;if(typeof n.$=="undefined")return(r=sn(n.a,e.a))||(r=sn(n.b,e.b))?r:sn(n.c,e.c);for(;n.b&&e.b&&!(r=sn(n.a,e.a));n=n.b,e=e.b);return r||(n.b?1:e.b?-1:0)}v(function(n,e){return sn(n,e)<0});v(function(n,e){return sn(n,e)<1});v(function(n,e){return sn(n,e)>0});v(function(n,e){return sn(n,e)>=0});var p1=v(function(n,e){var r=sn(n,e);return r<0?Gf:r?sh:Qf}),oi=0;function y(n,e){return{a:n,b:e}}function j(n,e,r){return{a:n,b:e,c:r}}function W(n,e){var r={};for(var t in n)r[t]=n[t];for(var t in e)r[t]=e[t];return r}v(q);function q(n,e){if(typeof n=="string")return n+e;if(!n.b)return e;var r=wr(n.a,e);n=n.b;for(var t=r;n.b;n=n.b)t=t.b=wr(n.a,e);return r}var L={$:0};function wr(n,e){return{$:1,a:n,b:e}}var h1=v(wr);function $(n){for(var e=L,r=n.length;r--;)e=wr(n[r],e);return e}function No(n){for(var e=[];n.b;n=n.b)e.push(n.a);return e}var g1=z(function(n,e,r){for(var t=[];e.b&&r.b;e=e.b,r=r.b)t.push(a(n,e.a,r.a));return $(t)});en(function(n,e,r,t){for(var i=[];e.b&&r.b&&t.b;e=e.b,r=r.b,t=t.b)i.push(d(n,e.a,r.a,t.a));return $(i)});Kn(function(n,e,r,t,i){for(var o=[];e.b&&r.b&&t.b&&i.b;e=e.b,r=r.b,t=t.b,i=i.b)o.push(C(n,e.a,r.a,t.a,i.a));return $(o)});Ee(function(n,e,r,t,i,o){for(var c=[];e.b&&r.b&&t.b&&i.b&&o.b;e=e.b,r=r.b,t=t.b,i=i.b,o=o.b)c.push(D(n,e.a,r.a,t.a,i.a,o.a));return $(c)});v(function(n,e){return $(No(e).sort(function(r,t){return sn(n(r),n(t))}))});v(function(n,e){return $(No(e).sort(function(r,t){var i=a(n,r,t);return i===Qf?0:i===Gf?-1:1}))});v(function(n,e){return n+e});v(function(n,e){return n-e});v(function(n,e){return n*e});v(function(n,e){return n/e});v(function(n,e){return n/e|0});var b1=v(Math.pow);v(function(n,e){return e%n});var A1=v(function(n,e){var r=e%n;return n===0?ft(11):r>0&&n<0||r<0&&n>0?r+n:r}),_1=Math.PI,w1=Math.cos,y1=Math.sin,S1=Math.tan;v(Math.atan2);function x1(n){return n}function M1(n){return n===1/0||n===-1/0}var C1=Math.ceil,P1=Math.floor,L1=Math.round,z1=Math.sqrt,k$=Math.log,k1=isNaN;function T1(n){return!n}v(function(n,e){return n&&e});v(function(n,e){return n||e});v(function(n,e){return n!==e});var D1=v(function(n,e){return n+e});function E1(n){var e=n.charCodeAt(0);return isNaN(e)?N:B(55296<=e&&e<=56319?y(n[0]+n[1],n.slice(2)):y(n[0],n.slice(1)))}v(function(n,e){return n+e});function I1(n){return n.length}v(function(n,e){for(var r=e.length,t=new Array(r),i=0;i<r;){var o=e.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=n(e[i]+e[i+1]),i+=2;continue}t[i]=n(e[i]),i++}return t.join("")});v(function(n,e){for(var r=[],t=e.length,i=0;i<t;){var o=e[i],c=e.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=e[i],i++),n(o)&&r.push(o)}return r.join("")});function j1(n){for(var e=n.length,r=new Array(e),t=0;t<e;){var i=n.charCodeAt(t);55296<=i&&i<=56319?(r[e-t]=n[t+1],t++,r[e-t]=n[t-1],t++):(r[e-t]=n[t],t++)}return r.join("")}z(function(n,e,r){for(var t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e=a(n,o,e)}return e});var F1=z(function(n,e,r){for(var t=r.length;t--;){var i=r[t],o=r.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=r[t]+i),e=a(n,i,e)}return e}),B1=v(function(n,e){return e.split(n)}),V1=v(function(n,e){return e.join(n)}),R1=z(function(n,e,r){return r.slice(n,e)});function N1(n){return $(n.trim().split(/\s+/g))}function W1(n){return n.toLowerCase()}v(function(n,e){for(var r=e.length;r--;){var t=e[r],i=e.charCodeAt(r);if(56320<=i&&i<=57343&&(r--,t=e[r]+t),n(t))return!0}return!1});var H1=v(function(n,e){for(var r=e.length;r--;){var t=e[r],i=e.charCodeAt(r);if(56320<=i&&i<=57343&&(r--,t=e[r]+t),!n(t))return!1}return!0}),Q1=v(function(n,e){return e.indexOf(n)>-1}),G1=v(function(n,e){return e.indexOf(n)===0});v(function(n,e){return e.length>=n.length&&e.lastIndexOf(n)===e.length-n.length});var U1=v(function(n,e){var r=n.length;if(r<1)return L;for(var t=0,i=[];(t=e.indexOf(n,t))>-1;)i.push(t),t=t+r;return $(i)});function gf(n){return n+""}function J1(n){for(var e=0,r=n.charCodeAt(0),t=r==43||r==45?1:0,i=t;i<n.length;++i){var o=n.charCodeAt(i);if(o<48||57<o)return N;e=10*e+o-48}return i==t?N:B(r==45?-e:e)}function O1(n){if(n.length===0||/[\sxbo]/.test(n))return N;var e=+n;return e===e?B(e):N}function q1(n){return No(n).join("")}function Y1(n){var e=n.charCodeAt(0);return 55296<=e&&e<=56319?(e-55296)*1024+n.charCodeAt(1)-56320+65536:e}function Z1(n){return n<0||1114111<n?"\uFFFD":n<=65535?String.fromCharCode(n):(n-=65536,String.fromCharCode(Math.floor(n/1024)+55296,n%1024+56320))}function X1(n){return{$:0,a:n}}function K1(n){return{$:1,a:n}}function Wo(n){return{$:2,b:n}}var np=Wo(function(n){return typeof n!="number"?Ge("an INT",n):-2147483647<n&&n<2147483647&&(n|0)===n||isFinite(n)&&!(n%1)?Zn(n):Ge("an INT",n)}),ep=Wo(function(n){return typeof n=="boolean"?Zn(n):Ge("a BOOL",n)}),rp=Wo(function(n){return typeof n=="number"?Zn(n):Ge("a FLOAT",n)}),ap=Wo(function(n){return typeof n=="string"?Zn(n):n instanceof String?Zn(n+""):Ge("a STRING",n)});function tp(n){return{$:3,b:n}}var ip=v(function(n,e){return{$:6,d:n,b:e}});v(function(n,e){return{$:7,e:n,b:e}});function va(n,e){return{$:9,f:n,g:e}}var op=v(function(n,e){return{$:10,b:e,h:n}}),cp=v(function(n,e){return va(n,[e])}),lp=z(function(n,e,r){return va(n,[e,r])}),up=en(function(n,e,r,t){return va(n,[e,r,t])});Kn(function(n,e,r,t,i){return va(n,[e,r,t,i])});var $p=Ee(function(n,e,r,t,i,o){return va(n,[e,r,t,i,o])});Ro(function(n,e,r,t,i,o,c){return va(n,[e,r,t,i,o,c])});Fn(function(n,e,r,t,i,o,c,l){return va(n,[e,r,t,i,o,c,l])});Gl(function(n,e,r,t,i,o,c,l,u){return va(n,[e,r,t,i,o,c,l,u])});var vp=v(function(n,e){try{var r=JSON.parse(e);return Qe(n,r)}catch(t){return _e(a(iu,"This is not valid JSON! "+t.message,e))}}),bf=v(function(n,e){return Qe(n,e)});function Qe(n,e){switch(n.$){case 2:return n.b(e);case 5:return e===null?Zn(n.c):Ge("null",e);case 3:return Di(e)?T$(n.b,e,$):Ge("a LIST",e);case 4:return Di(e)?T$(n.b,e,fp):Ge("an ARRAY",e);case 6:var r=n.d;if(typeof e!="object"||e===null||!(r in e))return Ge("an OBJECT with a field named `"+r+"`",e);var f=Qe(n.b,e[r]);return ir(f)?f:_e(a(U$,r,f.a));case 7:var t=n.e;if(!Di(e))return Ge("an ARRAY",e);if(t>=e.length)return Ge("a LONGER array. Need index "+t+" but only see "+e.length+" entries",e);var f=Qe(n.b,e[t]);return ir(f)?f:_e(a(Uf,t,f.a));case 8:if(typeof e!="object"||e===null||Di(e))return Ge("an OBJECT",e);var i=L;for(var o in e)if(e.hasOwnProperty(o)){var f=Qe(n.b,e[o]);if(!ir(f))return _e(a(U$,o,f.a));i=wr(y(o,f.a),i)}return Zn(Nn(i));case 9:for(var c=n.f,l=n.g,u=0;u<l.length;u++){var f=Qe(l[u],e);if(!ir(f))return f;c=c(f.a)}return Zn(c);case 10:var f=Qe(n.b,e);return ir(f)?Qe(n.h(f.a),e):f;case 11:for(var s=L,m=n.g;m.b;m=m.b){var f=Qe(m.a,e);if(ir(f))return f;s=wr(f.a,s)}return _e(dh(Nn(s)));case 1:return _e(a(iu,n.a,e));case 0:return Zn(n.a)}}function T$(n,e,r){for(var t=e.length,i=new Array(t),o=0;o<t;o++){var c=Qe(n,e[o]);if(!ir(c))return _e(a(Uf,o,c.a));i[o]=c.a}return Zn(r(i))}function Di(n){return Array.isArray(n)||typeof FileList!="undefined"&&n instanceof FileList}function fp(n){return a(Ph,n.length,function(e){return n[e]})}function Ge(n,e){return _e(a(iu,"Expecting "+n,e))}function qa(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return qa(n.b,e.b);case 6:return n.d===e.d&&qa(n.b,e.b);case 7:return n.e===e.e&&qa(n.b,e.b);case 9:return n.f===e.f&&D$(n.g,e.g);case 10:return n.h===e.h&&qa(n.b,e.b);case 11:return D$(n.g,e.g)}}function D$(n,e){var r=n.length;if(r!==e.length)return!1;for(var t=0;t<r;t++)if(!qa(n[t],e[t]))return!1;return!0}var mp=v(function(n,e){return JSON.stringify(e,null,n)+""});function Jl(n){return n}function sp(){return[]}function dp(){return{}}var pp=z(function(n,e,r){return r[n]=e,r});function hp(n){return v(function(e,r){return r.push(n(e)),r})}function Da(n){return{$:0,a:n}}function gp(n){return{$:1,a:n}}function Hr(n){return{$:2,b:n,c:null}}var rl=v(function(n,e){return{$:3,b:n,d:e}});v(function(n,e){return{$:4,b:n,d:e}});function bp(n){return{$:5,b:n}}var Ap=0;function Ol(n){var e={$:0,e:Ap++,f:n,g:null,h:[]};return ql(e),e}function Af(n){return Hr(function(e){e(Da(Ol(n)))})}function _f(n,e){n.h.push(e),ql(n)}var _p=v(function(n,e){return Hr(function(r){_f(n,e),r(Da(oi))})}),Cc=!1,E$=[];function ql(n){if(E$.push(n),!Cc){for(Cc=!0;n=E$.shift();)wp(n);Cc=!1}}function wp(n){for(;n.f;){var e=n.f.$;if(e===0||e===1){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else if(e===2){n.f.c=n.f.b(function(r){n.f=r,ql(n)});return}else if(e===5){if(n.h.length===0)return;n.f=n.f.b(n.h.shift())}else n.g={$:e===3?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}en(function(n,e,r,t){return Yl(e,t,n.hd,n.iF,n.$8,function(){return function(){}})});function Yl(n,e,r,t,i,o){var c=a(bf,n,e?e.flags:void 0);ir(c)||ft(2);var l={},u=r(c.a),f=u.a,s=o(b,f),m=yp(l,b);function b(h,_){var A=a(t,h,f);s(f=A.a,_),j$(l,A.b,i(f))}return j$(l,u.b,i(f)),m?{ports:m}:{}}var hr={};function yp(n,e){var r;for(var t in hr){var i=hr[t];i.a&&(r=r||{},r[t]=i.a(t,e)),n[t]=xp(i,e)}return r}function Sp(n,e,r,t,i){return{b:n,c:e,d:r,e:t,f:i}}function xp(n,e){var r={g:e,h:void 0},t=n.c,i=n.d,o=n.e,c=n.f;function l(u){return a(rl,l,bp(function(f){var s=f.a;return f.$===0?d(i,r,s,u):o&&c?C(t,r,s.i,s.j,u):d(t,r,o?s.i:s.j,u)}))}return r.h=Ol(a(rl,l,n.b))}var Mp=v(function(n,e){return Hr(function(r){n.g(e),r(Da(oi))})});v(function(n,e){return a(_p,n.h,{$:0,a:e})});function wf(n){return function(e){return{$:1,k:n,l:e}}}function Cp(n){return{$:2,m:n}}v(function(n,e){return{$:3,n,o:e}});var I$=[],Pc=!1;function j$(n,e,r){if(I$.push({p:n,q:e,r}),!Pc){Pc=!0;for(var t;t=I$.shift();)Pp(t.p,t.q,t.r);Pc=!1}}function Pp(n,e,r){var t={};uo(!0,e,t,null),uo(!1,r,t,null);for(var i in n)_f(n[i],{$:"fx",a:t[i]||{i:L,j:L}})}function uo(n,e,r,t){switch(e.$){case 1:var i=e.k,o=Lp(n,i,t,e.l);r[i]=zp(n,o,r[i]);return;case 2:for(var c=e.m;c.b;c=c.b)uo(n,c.a,r,t);return;case 3:uo(n,e.o,r,{s:e.n,t});return}}function Lp(n,e,r,t){function i(c){for(var l=r;l;l=l.t)c=l.s(c);return c}var o=n?hr[e].e:hr[e].f;return a(o,i,t)}function zp(n,e,r){return r=r||{i:L,j:L},n?r.i=wr(e,r.i):r.j=wr(e,r.j),r}function kp(n){hr[n]&&ft(3)}v(function(n,e){return e});function Tp(n,e){return kp(n),hr[n]={f:Dp,u:e,a:Ep},wf(n)}var Dp=v(function(n,e){return function(r){return n(e(r))}});function Ep(n,e){var r=L,t=hr[n].u,i=Da(null);hr[n].b=i,hr[n].c=z(function(c,l,u){return r=l,i});function o(c){var l=a(bf,t,c);ir(l)||ft(4,n,l.a);for(var u=l.a,f=r;f.b;f=f.b)e(f.a(u))}return{send:o}}var $o,Fr=typeof document!="undefined"?document:{};function Zl(n,e){n.appendChild(e)}en(function(n,e,r,t){var i=t.node;return i.parentNode.replaceChild(Zr(n,function(){}),i),{}});function al(n){return{$:0,a:n}}var yf=v(function(n,e){return v(function(r,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:e,d:Kl(r),e:i,f:n,b:o}})}),Ke=yf(void 0),Ip=v(function(n,e){return v(function(r,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:e,d:Kl(r),e:i,f:n,b:o}})}),jp=Ip(void 0);function Fp(n,e,r,t){return{$:3,d:Kl(n),g:e,h:r,i:t}}var Bp=v(function(n,e){return{$:4,j:n,k:e,b:1+(e.b||0)}});function fa(n,e){return{$:5,l:n,m:e,k:void 0}}v(function(n,e){return fa([n,e],function(){return n(e)})});z(function(n,e,r){return fa([n,e,r],function(){return a(n,e,r)})});var Vp=en(function(n,e,r,t){return fa([n,e,r,t],function(){return d(n,e,r,t)})});Kn(function(n,e,r,t,i){return fa([n,e,r,t,i],function(){return C(n,e,r,t,i)})});Ee(function(n,e,r,t,i,o){return fa([n,e,r,t,i,o],function(){return D(n,e,r,t,i,o)})});Ro(function(n,e,r,t,i,o,c){return fa([n,e,r,t,i,o,c],function(){return ne(n,e,r,t,i,o,c)})});Fn(function(n,e,r,t,i,o,c,l){return fa([n,e,r,t,i,o,c,l],function(){return Ul(n,e,r,t,i,o,c,l)})});Gl(function(n,e,r,t,i,o,c,l,u){return fa([n,e,r,t,i,o,c,l,u],function(){return ii(n,e,r,t,i,o,c,l,u)})});var Sf=v(function(n,e){return{$:"a0",n,o:e}}),Rp=v(function(n,e){return{$:"a1",n,o:e}}),Xl=v(function(n,e){return{$:"a2",n,o:e}}),$r=v(function(n,e){return{$:"a3",n,o:e}});z(function(n,e,r){return{$:"a4",n:e,o:{f:n,o:r}}});function xf(n){return n=="script"?"p":n}function Np(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}function Wp(n){return n=="innerHTML"||n=="formAction"?"data-"+n:n}function Hp(n){return/^javascript:/i.test(n.replace(/\s/g,""))?"":n}function Mf(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}var Qp=v(function(n,e){return e.$==="a0"?a(Sf,e.n,Gp(n,e.o)):e});function Gp(n,e){var r=uu(e);return{$:e.$,a:r?d(li,r<3?Up:Jp,Yn(n),e.a):a(po,n,e.a)}}var Up=v(function(n,e){return y(n(e.a),e.b)}),Jp=v(function(n,e){return{aD:n(e.aD),dQ:e.dQ,dF:e.dF}});function Kl(n){for(var e={};n.b;n=n.b){var r=n.a,t=r.$,i=r.n,o=r.o;if(t==="a2"){i==="className"?F$(e,i,o):e[i]=o;continue}var c=e[t]||(e[t]={});t==="a3"&&i==="class"?F$(c,i,o):c[i]=o}return e}function F$(n,e,r){var t=n[e];n[e]=t?t+" "+r:r}function Zr(n,e){var r=n.$;if(r===5)return Zr(n.k||(n.k=n.m()),e);if(r===0)return Fr.createTextNode(n.a);if(r===4){for(var t=n.k,i=n.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:e},c=Zr(t,o);return c.elm_event_node_ref=o,c}if(r===3){var c=n.h(n.g);return tl(c,e,n.d),c}var c=n.f?Fr.createElementNS(n.f,n.c):Fr.createElement(n.c);$o&&n.c=="a"&&c.addEventListener("click",$o(c)),tl(c,e,n.d);for(var l=n.e,u=0;u<l.length;u++)Zl(c,Zr(r===1?l[u]:l[u].b,e));return c}function tl(n,e,r){for(var t in r){var i=r[t];t==="a1"?Op(n,i):t==="a0"?Zp(n,e,i):t==="a3"?qp(n,i):t==="a4"?Yp(n,i):(t!=="value"&&t!=="checked"||n[t]!==i)&&(n[t]=i)}}function Op(n,e){var r=n.style;for(var t in e)r[t]=e[t]}function qp(n,e){for(var r in e){var t=e[r];typeof t!="undefined"?n.setAttribute(r,t):n.removeAttribute(r)}}function Yp(n,e){for(var r in e){var t=e[r],i=t.f,o=t.o;typeof o!="undefined"?n.setAttributeNS(i,r,o):n.removeAttributeNS(i,r)}}function Zp(n,e,r){var t=n.elmFs||(n.elmFs={});for(var i in r){var o=r[i],c=t[i];if(!o){n.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}n.removeEventListener(i,c)}c=Xp(e,o),n.addEventListener(i,c,nu&&{passive:uu(o)<2}),t[i]=c}}var nu;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){nu=!0}}))}catch{}function Xp(n,e){function r(t){var i=r.q,o=Qe(i.a,t);if(!!ir(o)){for(var c=uu(i),l=o.a,u=c?c<3?l.a:l.aD:l,f=c==1?l.b:c==3&&l.dQ,s=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dF)&&t.preventDefault(),n),m,b;m=s.j;){if(typeof m=="function")u=m(u);else for(var b=m.length;b--;)u=m[b](u);s=s.p}s(u,f)}}return r.q=e,r}function Kp(n,e){return n.$==e.$&&qa(n.a,e.a)}function Cf(n,e){var r=[];return or(n,e,r,0),r}function be(n,e,r,t){var i={$:e,r,s:t,t:void 0,u:void 0};return n.push(i),i}function or(n,e,r,t){if(n!==e){var i=n.$,o=e.$;if(i!==o)if(i===1&&o===2)e=c0(e),o=1;else{be(r,0,t,e);return}switch(o){case 5:for(var c=n.l,l=e.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){e.k=n.k;return}e.k=e.m();var s=[];or(n.k,e.k,s,0),s.length>0&&be(r,1,t,s);return;case 4:for(var m=n.j,b=e.j,h=!1,_=n.k;_.$===4;)h=!0,typeof m!="object"?m=[m,_.j]:m.push(_.j),_=_.k;for(var A=e.k;A.$===4;)h=!0,typeof b!="object"?b=[b,A.j]:b.push(A.j),A=A.k;if(h&&m.length!==b.length){be(r,0,t,e);return}(h?!n0(m,b):m!==b)&&be(r,2,t,b),or(_,A,r,t+1);return;case 0:n.a!==e.a&&be(r,3,t,e.a);return;case 1:B$(n,e,r,t,e0);return;case 2:B$(n,e,r,t,r0);return;case 3:if(n.h!==e.h){be(r,0,t,e);return}var x=eu(n.d,e.d);x&&be(r,4,t,x);var P=e.i(n.g,e.g);P&&be(r,5,t,P);return}}}function n0(n,e){for(var r=0;r<n.length;r++)if(n[r]!==e[r])return!1;return!0}function B$(n,e,r,t,i){if(n.c!==e.c||n.f!==e.f){be(r,0,t,e);return}var o=eu(n.d,e.d);o&&be(r,4,t,o),i(n,e,r,t)}function eu(n,e,r){var t;for(var i in n){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=eu(n[i],e[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in e)){t=t||{},t[i]=r?r==="a1"?"":r==="a0"||r==="a3"?void 0:{f:n[i].f,o:void 0}:typeof n[i]=="string"?"":null;continue}var c=n[i],l=e[i];c===l&&i!=="value"&&i!=="checked"||r==="a0"&&Kp(c,l)||(t=t||{},t[i]=l)}for(var u in e)u in n||(t=t||{},t[u]=e[u]);return t}function e0(n,e,r,t){var i=n.e,o=e.e,c=i.length,l=o.length;c>l?be(r,6,t,{v:l,i:c-l}):c<l&&be(r,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var s=i[f];or(s,o[f],r,++t),t+=s.b||0}}function r0(n,e,r,t){for(var i=[],o={},c=[],l=n.e,u=e.e,f=l.length,s=u.length,m=0,b=0,h=t;m<f&&b<s;){var _=l[m],A=u[b],x=_.a,P=A.a,S=_.b,T=A.b,H=void 0,rn=void 0;if(x===P){h++,or(S,T,i,h),h+=S.b||0,m++,b++;continue}var on=l[m+1],cn=u[b+1];if(on){var $n=on.a,tn=on.b;rn=P===$n}if(cn){var K=cn.a,_n=cn.b;H=x===K}if(H&&rn){h++,or(S,_n,i,h),St(o,i,x,T,b,c),h+=S.b||0,h++,xt(o,i,x,tn,h),h+=tn.b||0,m+=2,b+=2;continue}if(H){h++,St(o,i,P,T,b,c),or(S,_n,i,h),h+=S.b||0,m+=1,b+=2;continue}if(rn){h++,xt(o,i,x,S,h),h+=S.b||0,h++,or(tn,T,i,h),h+=tn.b||0,m+=2,b+=1;continue}if(on&&$n===K){h++,xt(o,i,x,S,h),St(o,i,P,T,b,c),h+=S.b||0,h++,or(tn,_n,i,h),h+=tn.b||0,m+=2,b+=2;continue}break}for(;m<f;){h++;var _=l[m],S=_.b;xt(o,i,_.a,S,h),h+=S.b||0,m++}for(;b<s;){var wn=wn||[],A=u[b];St(o,i,A.a,A.b,void 0,wn),b++}(i.length>0||c.length>0||wn)&&be(r,8,t,{w:i,x:c,y:wn})}var Pf="_elmW6BL";function St(n,e,r,t,i,o){var c=n[r];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),n[r]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];or(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}St(n,e,r+Pf,t,i,o)}function xt(n,e,r,t,i){var o=n[r];if(!o){var c=be(e,9,i,void 0);n[r]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];or(t,o.z,l,i),be(e,9,i,{w:l,A:o});return}xt(n,e,r+Pf,t,i)}function Lf(n,e,r,t){Mt(n,e,r,0,0,e.b,t)}function Mt(n,e,r,t,i,o,c){for(var l=r[t],u=l.r;u===i;){var f=l.$;if(f===1)Lf(n,e.k,l.s,c);else if(f===8){l.t=n,l.u=c;var s=l.s.w;s.length>0&&Mt(n,e,s,0,i,o,c)}else if(f===9){l.t=n,l.u=c;var m=l.s;if(m){m.A.s=n;var s=m.w;s.length>0&&Mt(n,e,s,0,i,o,c)}}else l.t=n,l.u=c;if(t++,!(l=r[t])||(u=l.r)>o)return t}var b=e.$;if(b===4){for(var h=e.k;h.$===4;)h=h.k;return Mt(n,h,r,t,i+1,o,n.elm_event_node_ref)}for(var _=e.e,A=n.childNodes,x=0;x<_.length;x++){i++;var P=b===1?_[x]:_[x].b,S=i+(P.b||0);if(i<=u&&u<=S&&(t=Mt(A[x],P,r,t,i,S,c),!(l=r[t])||(u=l.r)>o))return t;i=S}return t}function zf(n,e,r,t){return r.length===0?n:(Lf(n,e,r,t),vo(n,r))}function vo(n,e){for(var r=0;r<e.length;r++){var t=e[r],i=t.t,o=a0(i,t);i===n&&(n=o)}return n}function a0(n,e){switch(e.$){case 0:return t0(n,e.s,e.u);case 4:return tl(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return vo(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var o=e.s,t=0;t<o.i;t++)n.removeChild(n.childNodes[o.v]);return n;case 7:for(var o=e.s,r=o.e,t=o.v,i=n.childNodes[t];t<r.length;t++)n.insertBefore(Zr(r[t],e.u),i);return n;case 9:var o=e.s;if(!o)return n.parentNode.removeChild(n),n;var c=o.A;return typeof c.r!="undefined"&&n.parentNode.removeChild(n),c.s=vo(n,o.w),n;case 8:return i0(n,e);case 5:return e.s(n);default:ft(10)}}function t0(n,e,r){var t=n.parentNode,i=Zr(e,r);return i.elm_event_node_ref||(i.elm_event_node_ref=n.elm_event_node_ref),t&&i!==n&&t.replaceChild(i,n),i}function i0(n,e){var r=e.s,t=o0(r.y,e);n=vo(n,r.w);for(var i=r.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:Zr(l.z,e.u);n.insertBefore(u,n.childNodes[c.r])}return t&&Zl(n,t),n}function o0(n,e){if(!!n){for(var r=Fr.createDocumentFragment(),t=0;t<n.length;t++){var i=n[t],o=i.A;Zl(r,o.c===2?o.s:Zr(o.z,e.u))}return r}}function ru(n){if(n.nodeType===3)return al(n.textContent);if(n.nodeType!==1)return al("");for(var e=L,r=n.attributes,t=r.length;t--;){var i=r[t],o=i.name,c=i.value;e=wr(a($r,o,c),e)}for(var l=n.tagName.toLowerCase(),u=L,f=n.childNodes,t=f.length;t--;)u=wr(ru(f[t]),u);return d(Ke,l,e,u)}function c0(n){for(var e=n.e,r=e.length,t=new Array(r),i=0;i<r;i++)t[i]=e[i].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}var l0=en(function(n,e,r,t){return Yl(e,t,n.hd,n.iF,n.$8,function(i,o){var c=n.iH,l=t.node,u=ru(l);return kf(o,function(f){var s=c(f),m=Cf(u,s);l=zf(l,u,m,i),u=s})})});en(function(n,e,r,t){return Yl(e,t,n.hd,n.iF,n.$8,function(i,o){var c=n.dN&&n.dN(i),l=n.iH,u=Fr.title,f=Fr.body,s=ru(f);return kf(o,function(m){$o=c;var b=l(m),h=Ke("body")(L)(b.gd),_=Cf(s,h);f=zf(f,s,_,i),s=h,$o=0,u!==b.iz&&(Fr.title=u=b.iz)})})});var fo=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function kf(n,e){e(n);var r=0;function t(){r=r===1?0:(fo(t),e(n),1)}return function(i,o){n=i,o?(e(n),r===2&&(r=1)):(r===0&&fo(t),r=2)}}v(function(n,e){return a(vu,st,Hr(function(){e&&history.go(e),n()}))});v(function(n,e){return a(vu,st,Hr(function(){history.pushState({},"",e),n()}))});v(function(n,e){return a(vu,st,Hr(function(){history.replaceState({},"",e),n()}))});var u0={addEventListener:function(){},removeEventListener:function(){}},$0=typeof window!="undefined"?window:u0;z(function(n,e,r){return Af(Hr(function(t){function i(o){Ol(r(o))}return n.addEventListener(e,i,nu&&{passive:!0}),function(){n.removeEventListener(e,i)}}))});v(function(n,e){var r=Qe(n,e);return ir(r)?B(r.a):N});function Tf(n,e){return Hr(function(r){fo(function(){var t=document.getElementById(n);r(t?Da(e(t)):gp(Lh(n)))})})}function v0(n){return Hr(function(e){fo(function(){e(Da(n()))})})}v(function(n,e){return Tf(e,function(r){return r[n](),oi})});v(function(n,e){return v0(function(){return $0.scroll(n,e),oi})});z(function(n,e,r){return Tf(n,function(t){return t.scrollLeft=e,t.scrollTop=r,oi})});v(function(n,e){return n&e});v(function(n,e){return n|e});v(function(n,e){return n^e});v(function(n,e){return e<<n});v(function(n,e){return e>>n});v(function(n,e){return e>>>n});var f0=v(function(n,e){var r="g";n.hv&&(r+="m"),n.gn&&(r+="i");try{return B(new RegExp(e,r))}catch{return N}});v(function(n,e){return e.match(n)!==null});var m0=z(function(n,e,r){for(var t=[],i=0,o=r,c=e.lastIndex,l=-1,u;i++<n&&(u=e.exec(o))&&l!=e.lastIndex;){for(var f=u.length-1,s=new Array(f);f>0;){var m=u[f];s[--f]=m?B(m):N}t.push(C(vs,u[0],u.index,i,$(s))),l=e.lastIndex}return e.lastIndex=c,$(t)});en(function(n,e,r,t){var i=0;function o(c){if(i++>=n)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?B(f):N}return r(C(vs,c,arguments[arguments.length-2],i,$(u)))}return t.replace(e,o)});z(function(n,e,r){for(var t=r,i=[],o=e.lastIndex,c=e.lastIndex;n--;){var l=e.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=e.lastIndex}return i.push(t.slice(o)),e.lastIndex=c,$(i)});var V$=0;function Nt(n,e){for(;e.b;e=e.b)n(e.a)}function au(n){for(var e=0;n.b;n=n.b)e++;return e}var s0=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){setTimeout(n,1e3/60)},d0=Kn(function(n,e,r,t,i){return{$:0,a:n,b:e,c:r,d:t,e:i}}),p0=v(function(n,e){var r=n.blend;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.BLEND),r.enabled=!0),(r.a!==e.a||r.d!==e.d)&&(n.gl.blendEquationSeparate(e.a,e.d),r.a=e.a,r.d=e.d),(r.b!==e.b||r.c!==e.c||r.e!==e.e||r.f!==e.f)&&(n.gl.blendFuncSeparate(e.b,e.c,e.e,e.f),r.b=e.b,r.c=e.c,r.e=e.e,r.f=e.f),(r.g!==e.g||r.h!==e.h||r.i!==e.i||r.j!==e.j)&&(n.gl.blendColor(e.g,e.h,e.i,e.j),r.g=e.g,r.h=e.h,r.i=e.i,r.j=e.j)}),h0=v(function(n,e){var r=n.depthTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.DEPTH_TEST),r.enabled=!0),r.a!==e.a&&(n.gl.depthFunc(e.a),r.a=e.a),r.b!==e.b&&(n.gl.depthMask(e.b),r.b=e.b),(r.c!==e.c||r.d!==e.d)&&(n.gl.depthRange(e.c,e.d),r.c=e.c,r.d=e.d)}),g0=v(function(n,e){var r=n.stencilTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.STENCIL_TEST),r.enabled=!0),(r.d!==e.d||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.FRONT,e.d,e.a,e.b),r.d=e.d),(r.e!==e.e||r.f!==e.f||r.g!==e.g)&&(n.gl.stencilOpSeparate(n.gl.FRONT,e.e,e.f,e.g),r.e=e.e,r.f=e.f,r.g=e.g),r.c!==e.c&&(n.gl.stencilMask(e.c),r.c=e.c),(r.h!==e.h||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.BACK,e.h,e.a,e.b),r.h=e.h,r.a=e.a,r.b=e.b),(r.i!==e.i||r.j!==e.j||r.k!==e.k)&&(n.gl.stencilOpSeparate(n.gl.BACK,e.i,e.j,e.k),r.i=e.i,r.j=e.j,r.k=e.k)}),b0=v(function(n,e){var r=n.scissor;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SCISSOR_TEST),r.enabled=!0),(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.scissor(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),A0=v(function(n,e){var r=n.colorMask;r.toggle=n.toggle,r.enabled=!0,(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.colorMask(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),_0=v(function(n,e){var r=n.cullFace;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.CULL_FACE),r.enabled=!0),r.a!==e.a&&(n.gl.cullFace(e.a),r.a=e.a)}),w0=v(function(n,e){var r=n.polygonOffset;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.POLYGON_OFFSET_FILL),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.polygonOffset(e.a,e.b),r.a=e.a,r.b=e.b)}),y0=v(function(n,e){var r=n.sampleCoverage;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SAMPLE_COVERAGE),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.sampleCoverage(e.a,e.b),r.a=e.a,r.b=e.b)}),S0=function(n){var e=n.sampleAlphaToCoverage;e.toggle=n.toggle,e.enabled||(n.gl.enable(n.gl.SAMPLE_ALPHA_TO_COVERAGE),e.enabled=!0)},x0=function(n){n.blend.enabled&&(n.gl.disable(n.gl.BLEND),n.blend.enabled=!1)},M0=function(n){n.depthTest.enabled&&(n.gl.disable(n.gl.DEPTH_TEST),n.depthTest.enabled=!1)},C0=function(n){n.stencilTest.enabled&&(n.gl.disable(n.gl.STENCIL_TEST),n.stencilTest.enabled=!1)},Df=function(n){n.scissor.enabled&&(n.gl.disable(n.gl.SCISSOR_TEST),n.scissor.enabled=!1)},Ef=function(n){var e=n.colorMask;(!e.a||!e.b||!e.c||!e.d)&&(n.gl.colorMask(!0,!0,!0,!0),e.a=!0,e.b=!0,e.c=!0,e.d=!0)},P0=function(n){n.gl.disable(n.gl.CULL_FACE)},L0=function(n){n.gl.disable(n.gl.POLYGON_OFFSET_FILL)},z0=function(n){n.gl.disable(n.gl.SAMPLE_COVERAGE)},k0=function(n){n.gl.disable(n.gl.SAMPLE_ALPHA_TO_COVERAGE)},R$=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],T0=[x0,M0,C0,Df,Ef,P0,L0,z0,k0];function N$(n,e,r){var t=n.createShader(r);return n.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+e),n.compileShader(t),t}function D0(n,e,r){var t=n.createProgram();if(n.attachShader(t,e),n.attachShader(t,r),n.linkProgram(t),!n.getProgramParameter(t,n.LINK_STATUS))throw"Link failed: "+n.getProgramInfoLog(t)+`
vs info-log: `+n.getShaderInfoLog(e)+`
fs info-log: `+n.getShaderInfoLog(r);return t}function If(n,e){switch(e){case n.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:n.FLOAT};case n.INT:return{size:1,arraySize:1,type:Int32Array,baseType:n.INT}}}function E0(n,e,r,t){for(var i=r.a.eg,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(h,_,A,x,P){var S;if(i===1)for(S=0;S<_;S++)h[A++]=_===1?x[P]:x[P][S];else o.forEach(function(T){for(S=0;S<_;S++)h[A++]=_===1?x[T][P]:x[T][P][S]})}var u=If(n,e.type);if(u===void 0)throw new Error("No info available for: "+e.type);var f=0,s=u.size*u.arraySize*i,m=new u.type(au(r.b)*s);Nt(function(h){l(m,u.size*u.arraySize,f,h,t[e.name]||e.name),f+=s},r.b);var b=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,b),n.bufferData(n.ARRAY_BUFFER,m,n.STATIC_DRAW),b}function I0(n,e){if(e.a.et>0){var r=n.createBuffer(),t=j0(e.c,e.a.et);return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r),n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW),{numIndices:t.length,indexBuffer:r,buffers:{}}}else return{numIndices:e.a.eg*au(e.b),indexBuffer:null,buffers:{}}}function j0(n,e){var r=new Uint32Array(au(n)*e),t=0,i;return Nt(function(o){if(e===1)r[t++]=o;else for(i=0;i<e;i++)r[t++]=o[String.fromCharCode(97+i)]},n),r}function W$(n,e){return n+"#"+e}var jf=v(function(n,e){var r=n.f,t=r.gl;if(!t)return e;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),r.depthTest.b||(t.depthMask(!0),r.depthTest.b=!0),r.stencilTest.c!==r.STENCIL_WRITEMASK&&(t.stencilMask(r.STENCIL_WRITEMASK),r.stencilTest.c=r.STENCIL_WRITEMASK),Df(r),Ef(r),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=W$(o.b.id,o.c.id),l=r.programs[c]),!l){var f;o.b.id?f=r.shaders[o.b.id]:o.b.id=V$++,f||(f=N$(t,o.b.src,t.VERTEX_SHADER),r.shaders[o.b.id]=f);var s;o.c.id?s=r.shaders[o.c.id]:o.c.id=V$++,s||(s=N$(t,o.c.src,t.FRAGMENT_SHADER),r.shaders[o.c.id]=s);var m=D0(t,f,s);l={glProgram:m,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=F0(t,n,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(m,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var h=t.getActiveAttrib(m,u),_=t.getAttribLocation(m,h.name);l.activeAttributes.push(h),l.activeAttributeLocations.push(_)}c=W$(o.b.id,o.c.id),r.programs[c]=l}r.lastProgId!==c&&(t.useProgram(l.glProgram),r.lastProgId=c),B0(l.uniformSetters,o.e);var A=r.buffers.get(o.d);for(A||(A=I0(t,o.d),r.buffers.set(o.d,A)),u=0;u<l.activeAttributes.length;u++){h=l.activeAttributes[u],_=l.activeAttributeLocations[u],A.buffers[h.name]===void 0&&(A.buffers[h.name]=E0(t,h,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,A.buffers[h.name]);var x=If(t,h.type);if(x.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var P=x.size*4,S=P*x.arraySize,T=0;T<x.arraySize;T++)t.enableVertexAttribArray(_+T),t.vertexAttribPointer(_+T,x.size,x.baseType,!1,S,P*T)}for(r.toggle=!r.toggle,Nt(M4(r),o.a),u=0;u<R$.length;u++){var H=r[R$[u]];H.toggle!==r.toggle&&H.enabled&&(T0[u](r),H.enabled=!1,H.toggle=r.toggle)}A.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,A.indexBuffer),t.drawElements(o.d.a.e6,A.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.e6,0,A.numIndices)}}return Nt(i,n.g),e});function F0(n,e,r,t){var i=r.glProgram,o=r.currentUniforms,c=0,l=e.f;function u(h,_){var A=_.name,x=n.getUniformLocation(h,A);switch(_.type){case n.INT:return function(S){o[A]!==S&&(n.uniform1i(x,S),o[A]=S)};case n.FLOAT:return function(S){o[A]!==S&&(n.uniform1f(x,S),o[A]=S)};case n.FLOAT_VEC2:return function(S){o[A]!==S&&(n.uniform2f(x,S[0],S[1]),o[A]=S)};case n.FLOAT_VEC3:return function(S){o[A]!==S&&(n.uniform3f(x,S[0],S[1],S[2]),o[A]=S)};case n.FLOAT_VEC4:return function(S){o[A]!==S&&(n.uniform4f(x,S[0],S[1],S[2],S[3]),o[A]=S)};case n.FLOAT_MAT4:return function(S){o[A]!==S&&(n.uniformMatrix4fv(x,!1,new Float32Array(S)),o[A]=S)};case n.SAMPLER_2D:var P=c++;return function(S){n.activeTexture(n.TEXTURE0+P);var T=l.textures.get(S);T||(T=S.gA(n),l.textures.set(S,T)),n.bindTexture(n.TEXTURE_2D,T),o[A]!==S&&(n.uniform1i(x,P),o[A]=S)};case n.BOOL:return function(S){o[A]!==S&&(n.uniform1i(x,S),o[A]=S)};default:return function(){}}}for(var f={},s=n.getProgramParameter(i,n.ACTIVE_UNIFORMS),m=0;m<s;m++){var b=n.getActiveUniform(i,m);f[t[b.name]||b.name]=u(i,b)}return f}function B0(n,e){Object.keys(e).forEach(function(r){var t=n[r];t&&t(e[r])})}var V0=z(function(n,e,r){return Fp(e,{g:r,f:{},h:n},U0,J0)}),R0=v(function(n,e){n.contextAttributes.alpha=!0,n.contextAttributes.premultipliedAlpha=e.a}),N0=v(function(n,e){n.contextAttributes.depth=!0,n.sceneSettings.push(function(r){r.clearDepth(e.a)})}),W0=v(function(n,e){n.contextAttributes.stencil=!0,n.sceneSettings.push(function(r){r.clearStencil(e.a)})}),H0=v(function(n,e){n.contextAttributes.antialias=!0}),Q0=v(function(n,e){n.sceneSettings.push(function(r){r.clearColor(e.a,e.b,e.c,e.d)})}),G0=v(function(n,e){n.contextAttributes.preserveDrawingBuffer=!0});function U0(n){var e={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Nt(function(i){return a(x4,e,i)},n.h);var r=Fr.createElement("canvas"),t=r.getContext&&(r.getContext("webgl",e.contextAttributes)||r.getContext("experimental-webgl",e.contextAttributes));return t&&typeof WeakMap!="undefined"?(e.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),n.f.gl=t,n.f.toggle=!1,n.f.blend={enabled:!1,toggle:!1},n.f.depthTest={enabled:!1,toggle:!1},n.f.stencilTest={enabled:!1,toggle:!1},n.f.scissor={enabled:!1,toggle:!1},n.f.colorMask={enabled:!1,toggle:!1},n.f.cullFace={enabled:!1,toggle:!1},n.f.polygonOffset={enabled:!1,toggle:!1},n.f.sampleCoverage={enabled:!1,toggle:!1},n.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},n.f.shaders=[],n.f.programs={},n.f.lastProgId=null,n.f.buffers=new WeakMap,n.f.textures=new WeakMap,n.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),s0(function(){return a(jf,n,r)})):(r=Fr.createElement("div"),r.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),r}function J0(n,e){return e.f=n.f,jf(e)}var O0=v(function(n,e){return new Float64Array([n,e])});v(function(n,e){return new Float64Array([n,e[1]])});v(function(n,e){return new Float64Array([e[0],n])});v(function(n,e){var r=new Float64Array(2);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r});v(function(n,e){var r=new Float64Array(2);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r});v(function(n,e){var r=new Float64Array(2);r[0]=n[0]-e[0],r[1]=n[1]-e[1];var t=1/q0(r);return r[0]=r[0]*t,r[1]=r[1]*t,r});function q0(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1])}v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1];return Math.sqrt(r*r+t*t)});v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1];return r*r+t*t});v(function(n,e){var r=new Float64Array(2);return r[0]=e[0]*n,r[1]=e[1]*n,r});v(function(n,e){return n[0]*e[0]+n[1]*e[1]});var tu=new Float64Array(3),H$=new Float64Array(3),Q$=new Float64Array(3),Y0=z(function(n,e,r){return new Float64Array([n,e,r])}),Z0=function(n){return n[0]},X0=function(n){return n[1]},K0=function(n){return n[2]};v(function(n,e){return new Float64Array([n,e[1],e[2]])});v(function(n,e){return new Float64Array([e[0],n,e[2]])});v(function(n,e){return new Float64Array([e[0],e[1],n])});var nh=function(n){return new Float64Array([n.iM,n.iQ,n.d4])};v(function(n,e){var r=new Float64Array(3);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r});function Ff(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r}v(Ff);function Bf(n,e,r){return r===void 0&&(r=new Float64Array(3)),mo(Ff(n,e,r),r)}v(Bf);function Vf(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2];return Math.sqrt(r*r+t*t+i*i)});v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2];return r*r+t*t+i*i});function mo(n,e){e===void 0&&(e=new Float64Array(3));var r=1/Vf(n);return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e}var eh=v(function(n,e){return new Float64Array([e[0]*n,e[1]*n,e[2]*n])}),Ct=function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]};v(Ct);function il(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[1]*e[2]-n[2]*e[1],r[1]=n[2]*e[0]-n[0]*e[2],r[2]=n[0]*e[1]-n[1]*e[0],r}v(il);v(function(n,e){var r,t=tu,i=new Float64Array(3);return t[0]=n[3],t[1]=n[7],t[2]=n[11],r=Ct(e,t)+n[15],t[0]=n[0],t[1]=n[4],t[2]=n[8],i[0]=(Ct(e,t)+n[12])/r,t[0]=n[1],t[1]=n[5],t[2]=n[9],i[1]=(Ct(e,t)+n[13])/r,t[0]=n[2],t[1]=n[6],t[2]=n[10],i[2]=(Ct(e,t)+n[14])/r,i});var rh=en(function(n,e,r,t){return new Float64Array([n,e,r,t])});v(function(n,e){return new Float64Array([n,e[1],e[2],e[3]])});v(function(n,e){return new Float64Array([e[0],n,e[2],e[3]])});v(function(n,e){return new Float64Array([e[0],e[1],n,e[3]])});v(function(n,e){return new Float64Array([e[0],e[1],e[2],n])});var ah=function(n){return{iM:n[0],iQ:n[1],d4:n[2],fM:n[3]}},th=function(n){return new Float64Array([n.iM,n.iQ,n.d4,n.fM])};v(function(n,e){var r=new Float64Array(4);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r[3]=n[3]+e[3],r});v(function(n,e){var r=new Float64Array(4);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3],r});v(function(n,e){var r=new Float64Array(4);r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3];var t=1/ih(r);return r[0]=r[0]*t,r[1]=r[1]*t,r[2]=r[2]*t,r[3]=r[3]*t,r});function ih(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]+n[3]*n[3])}v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2],o=n[3]-e[3];return Math.sqrt(r*r+t*t+i*i+o*o)});v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2],o=n[3]-e[3];return r*r+t*t+i*i+o*o});v(function(n,e){var r=new Float64Array(4);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r});v(function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]});var oh=new Float64Array(16),ch=new Float64Array(16),lh=function(n){var e=new Float64Array(16);return e[0]=n.eK,e[1]=n.eO,e[2]=n.eS,e[3]=n.eW,e[4]=n.eL,e[5]=n.eP,e[6]=n.eT,e[7]=n.eX,e[8]=n.eM,e[9]=n.eQ,e[10]=n.eU,e[11]=n.eY,e[12]=n.eN,e[13]=n.eR,e[14]=n.eV,e[15]=n.eZ,e},uh=function(n){return{eK:n[0],eO:n[1],eS:n[2],eW:n[3],eL:n[4],eP:n[5],eT:n[6],eX:n[7],eM:n[8],eQ:n[9],eU:n[10],eY:n[11],eN:n[12],eR:n[13],eV:n[14],eZ:n[15]}};function Rf(n,e,r,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-r),c[6]=0,c[7]=0,c[8]=(e+n)/(e-n),c[9]=(t+r)/(t-r),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}Ee(Rf);en(function(n,e,r,t){var i=r*Math.tan(n*Math.PI/360),o=-i,c=o*e,l=i*e;return Rf(c,l,o,i,r,t)});function Nf(n,e,r,t,i,o){var c=new Float64Array(16);return c[0]=2/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-r),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(e+n)/(e-n),c[13]=-(t+r)/(t-r),c[14]=-(o+i)/(o-i),c[15]=1,c}Ee(Nf);en(function(n,e,r,t){return Nf(n,e,r,t,-1,1)});function Wf(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2],c=n[3],l=n[4],u=n[5],f=n[6],s=n[7],m=n[8],b=n[9],h=n[10],_=n[11],A=n[12],x=n[13],P=n[14],S=n[15],T=e[0],H=e[1],rn=e[2],on=e[3],cn=e[4],$n=e[5],tn=e[6],K=e[7],_n=e[8],wn=e[9],Bn=e[10],Tn=e[11],gn=e[12],Vn=e[13],I=e[14],F=e[15];return r[0]=t*T+l*H+m*rn+A*on,r[1]=i*T+u*H+b*rn+x*on,r[2]=o*T+f*H+h*rn+P*on,r[3]=c*T+s*H+_*rn+S*on,r[4]=t*cn+l*$n+m*tn+A*K,r[5]=i*cn+u*$n+b*tn+x*K,r[6]=o*cn+f*$n+h*tn+P*K,r[7]=c*cn+s*$n+_*tn+S*K,r[8]=t*_n+l*wn+m*Bn+A*Tn,r[9]=i*_n+u*wn+b*Bn+x*Tn,r[10]=o*_n+f*wn+h*Bn+P*Tn,r[11]=c*_n+s*wn+_*Bn+S*Tn,r[12]=t*gn+l*Vn+m*I+A*F,r[13]=i*gn+u*Vn+b*I+x*F,r[14]=o*gn+f*Vn+h*I+P*F,r[15]=c*gn+s*Vn+_*I+S*F,r}v(Wf);v(function(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2],c=n[4],l=n[5],u=n[6],f=n[8],s=n[9],m=n[10],b=n[12],h=n[13],_=n[14],A=e[0],x=e[1],P=e[2],S=e[4],T=e[5],H=e[6],rn=e[8],on=e[9],cn=e[10],$n=e[12],tn=e[13],K=e[14];return r[0]=t*A+c*x+f*P,r[1]=i*A+l*x+s*P,r[2]=o*A+u*x+m*P,r[3]=0,r[4]=t*S+c*T+f*H,r[5]=i*S+l*T+s*H,r[6]=o*S+u*T+m*H,r[7]=0,r[8]=t*rn+c*on+f*cn,r[9]=i*rn+l*on+s*cn,r[10]=o*rn+u*on+m*cn,r[11]=0,r[12]=t*$n+c*tn+f*K+b,r[13]=i*$n+l*tn+s*K+h,r[14]=o*$n+u*tn+m*K+_,r[15]=1,r});v(function(n,e){var r=new Float64Array(16);e=mo(e,tu);var t=e[0],i=e[1],o=e[2],c=Math.cos(n),l=1-c,u=Math.sin(n);return r[0]=t*t*l+c,r[1]=i*t*l+o*u,r[2]=o*t*l-i*u,r[3]=0,r[4]=t*i*l-o*u,r[5]=i*i*l+c,r[6]=i*o*l+t*u,r[7]=0,r[8]=t*o*l+i*u,r[9]=i*o*l-t*u,r[10]=o*o*l+c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r});z(function(n,e,r){var t=new Float64Array(16),i=1/Vf(e),o=e[0]*i,c=e[1]*i,l=e[2]*i,u=Math.cos(n),f=1-u,s=Math.sin(n),m=o*s,b=c*s,h=l*s,_=o*c*f,A=o*l*f,x=c*l*f,P=o*o*f+u,S=_+h,T=A-b,H=_-h,rn=c*c*f+u,on=x+m,cn=A+b,$n=x-m,tn=l*l*f+u,K=r[0],_n=r[1],wn=r[2],Bn=r[3],Tn=r[4],gn=r[5],Vn=r[6],I=r[7],F=r[8],V=r[9],R=r[10],Q=r[11],G=r[12],U=r[13],J=r[14],ee=r[15];return t[0]=K*P+Tn*S+F*T,t[1]=_n*P+gn*S+V*T,t[2]=wn*P+Vn*S+R*T,t[3]=Bn*P+I*S+Q*T,t[4]=K*H+Tn*rn+F*on,t[5]=_n*H+gn*rn+V*on,t[6]=wn*H+Vn*rn+R*on,t[7]=Bn*H+I*rn+Q*on,t[8]=K*cn+Tn*$n+F*tn,t[9]=_n*cn+gn*$n+V*tn,t[10]=wn*cn+Vn*$n+R*tn,t[11]=Bn*cn+I*$n+Q*tn,t[12]=G,t[13]=U,t[14]=J,t[15]=ee,t});function $h(n,e,r){var t=new Float64Array(16);return t[0]=n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}z($h);en(function(n,e,r,t){var i=new Float64Array(16);return i[0]=t[0]*n,i[1]=t[1]*n,i[2]=t[2]*n,i[3]=t[3]*n,i[4]=t[4]*e,i[5]=t[5]*e,i[6]=t[6]*e,i[7]=t[7]*e,i[8]=t[8]*r,i[9]=t[9]*r,i[10]=t[10]*r,i[11]=t[11]*r,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2];return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r[4]=e[4]*i,r[5]=e[5]*i,r[6]=e[6]*i,r[7]=e[7]*i,r[8]=e[8]*o,r[9]=e[9]*o,r[10]=e[10]*o,r[11]=e[11]*o,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r});function vh(n,e,r){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n,t[13]=e,t[14]=r,t[15]=1,t}z(vh);en(function(n,e,r,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],s=t[5],m=t[6],b=t[7],h=t[8],_=t[9],A=t[10],x=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=s,i[6]=m,i[7]=b,i[8]=h,i[9]=_,i[10]=A,i[11]=x,i[12]=o*n+f*e+h*r+t[12],i[13]=c*n+s*e+_*r+t[13],i[14]=l*n+m*e+A*r+t[14],i[15]=u*n+b*e+x*r+t[15],i});v(function(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2],c=e[0],l=e[1],u=e[2],f=e[3],s=e[4],m=e[5],b=e[6],h=e[7],_=e[8],A=e[9],x=e[10],P=e[11];return r[0]=c,r[1]=l,r[2]=u,r[3]=f,r[4]=s,r[5]=m,r[6]=b,r[7]=h,r[8]=_,r[9]=A,r[10]=x,r[11]=P,r[12]=c*t+s*i+_*o+e[12],r[13]=l*t+m*i+A*o+e[13],r[14]=u*t+b*i+x*o+e[14],r[15]=f*t+h*i+P*o+e[15],r});z(function(n,e,r){var t=Bf(n,e,tu),i=mo(il(r,t,H$),H$),o=mo(il(t,i,Q$),Q$),c=oh,l=ch;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-n[0],l[13]=-n[1],l[14]=-n[2],l[15]=1,Wf(c,l)});z(function(n,e,r){var t=new Float64Array(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=0,t[4]=e[0],t[5]=e[1],t[6]=e[2],t[7]=0,t[8]=r[0],t[9]=r[1],t[10]=r[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var w=h1,Ei=m1,Hf=z(function(n,e,r){var t=r.c,i=r.d,o=v(function(c,l){if(c.$){var f=c.a;return d(Ei,n,l,f)}else{var u=c.a;return d(Ei,o,l,u)}});return d(Ei,o,d(Ei,n,e,i),t)}),Ho=z(function(n,e,r){n:for(;;){if(r.$===-2)return e;var t=r.b,i=r.c,o=r.d,c=r.e,l=n,u=d(n,t,i,d(Ho,n,e,c)),f=o;n=l,e=u,r=f;continue n}}),G$=function(n){return d(Ho,z(function(e,r,t){return a(w,y(e,r),t)}),L,n)},fh=function(n){return d(Ho,z(function(e,r,t){return a(w,e,t)}),L,n)},mh=function(n){var e=n;return fh(e)},Qf=1,sh=2,Gf=0,_e=function(n){return{$:1,a:n}},iu=v(function(n,e){return{$:3,a:n,b:e}}),U$=v(function(n,e){return{$:0,a:n,b:e}}),Uf=v(function(n,e){return{$:1,a:n,b:e}}),Zn=function(n){return{$:0,a:n}},dh=function(n){return{$:2,a:n}},B=function(n){return{$:0,a:n}},N={$:1},ph=H1,Jf=mp,k=gf,fn=v(function(n,e){return a(V1,n,No(e))}),ou=v(function(n,e){return $(a(B1,n,e))}),Of=function(n){return a(fn,`
    `,a(ou,`
`,n))},Gn=z(function(n,e,r){n:for(;;)if(r.b){var t=r.a,i=r.b,o=n,c=a(n,t,e),l=i;n=o,e=c,r=l;continue n}else return e}),yr=function(n){return d(Gn,v(function(e,r){return r+1}),0,n)},qf=g1,hh=z(function(n,e,r){n:for(;;)if(sn(n,e)<1){var t=n,i=e-1,o=a(w,e,r);n=t,e=i,r=o;continue n}else return r}),Br=v(function(n,e){return d(hh,n,e,L)}),ci=v(function(n,e){return d(qf,n,a(Br,0,yr(e)-1),e)}),gr=Y1,Yf=function(n){var e=gr(n);return 97<=e&&e<=122},Zf=function(n){var e=gr(n);return e<=90&&65<=e},gh=function(n){return Yf(n)||Zf(n)},bh=function(n){var e=gr(n);return e<=57&&48<=e},Ah=function(n){return Yf(n)||Zf(n)||bh(n)},Nn=function(n){return d(Gn,w,L,n)},mt=E1,_h=v(function(n,e){return`

(`+(k(n+1)+(") "+Of(wh(e))))}),wh=function(n){return a(yh,n,L)},yh=v(function(n,e){n:for(;;)switch(n.$){case 0:var r=n.a,c=n.b,t=function(){var A=mt(r);if(A.$===1)return!1;var x=A.a,P=x.a,S=x.b;return gh(P)&&a(ph,Ah,S)}(),i=t?"."+r:"['"+(r+"']"),u=c,f=a(w,i,e);n=u,e=f;continue n;case 1:var o=n.a,c=n.b,l="["+(k(o)+"]"),u=c,f=a(w,l,e);n=u,e=f;continue n;case 2:var s=n.a;if(s.b)if(s.b.b){var m=function(){return e.b?"The Json.Decode.oneOf at json"+a(fn,"",Nn(e)):"Json.Decode.oneOf"}(),_=m+(" failed in the following "+(k(yr(s))+" ways:"));return a(fn,`

`,a(w,_,a(ci,_h,s)))}else{var c=s.a,u=c,f=e;n=u,e=f;continue n}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return e.b?" at json"+a(fn,"",Nn(e)):"!"}();default:var b=n.a,h=n.b,_=function(){return e.b?"Problem with the value at json"+(a(fn,"",Nn(e))+`:

    `):`Problem with the given value:

`}();return _+(Of(a(Jf,4,h))+(`

`+b))}}),Re=32,ol=en(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),cl=l1,Wt=C1,cu=v(function(n,e){return k$(e)/k$(n)}),Tr=x1,Ht=Wt(a(cu,2,Re)),Xf=C(ol,0,Ht,cl,cl),Kf=$1,nm=function(n){return{$:1,a:n}};v(function(n,e){return n(e)});v(function(n,e){return e(n)});var Qo=d1,xa=P1,ll=u1,te=v(function(n,e){return sn(n,e)>0?n:e}),Sh=function(n){return{$:0,a:n}},lu=v1,xh=v(function(n,e){n:for(;;){var r=a(lu,Re,n),t=r.a,i=r.b,o=a(w,Sh(t),e);if(i.b){var c=i,l=o;n=c,e=l;continue n}else return Nn(o)}}),so=function(n){var e=n.a;return e},Mh=v(function(n,e){n:for(;;){var r=Wt(e/Re);if(r===1)return a(lu,Re,n).a;var t=a(xh,n,L),i=r;n=t,e=i;continue n}}),em=v(function(n,e){if(e.r){var r=e.r*Re,t=xa(a(cu,Re,r-1)),i=n?Nn(e.F):e.F,o=a(Mh,i,e.r);return C(ol,ll(e.v)+r,a(te,5,t*Ht),o,e.v)}else return C(ol,ll(e.v),Ht,cl,e.v)}),Ch=Kn(function(n,e,r,t,i){n:for(;;){if(e<0)return a(em,!1,{F:t,r:r/Re|0,v:i});var o=nm(d(Kf,Re,e,n)),c=n,l=e-Re,u=r,f=a(w,o,t),s=i;n=c,e=l,r=u,t=f,i=s;continue n}}),Ph=v(function(n,e){if(n<=0)return Xf;var r=n%Re,t=d(Kf,r,n-r,e),i=n-r-Re;return D(Ch,e,i,n,L,t)}),ir=function(n){return!n.$},an=op,In=ep,O=ip,ue=rp,rm=v(function(n,e){return{aa:e.aa,gx:n,c_:e.c_,gL:e.gL,eA:e.eA,dE:e.dE,cI:e.cI,iI:e.iI}}),po=cp,li=lp,Yn=X1,uu=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},oe=function(n){return n},Lh=oe,J$=Ee(function(n,e,r,t,i,o){return{em:o,er:e,fg:t,fk:r,fo:n,fp:i}}),zh=Q1,Ma=I1,Ya=R1,ui=v(function(n,e){return n<1?e:d(Ya,n,Ma(e),e)}),Go=U1,Uo=function(n){return n===""},Jo=v(function(n,e){return n<1?"":d(Ya,0,n,e)}),am=J1,O$=Kn(function(n,e,r,t,i){if(Uo(i)||a(zh,"@",i))return N;var o=a(Go,":",i);if(o.b){if(o.b.b)return N;var c=o.a,l=am(a(ui,c+1,i));if(l.$===1)return N;var u=l;return B(ne(J$,n,a(Jo,c,i),u,e,r,t))}else return B(ne(J$,n,i,N,e,r,t))}),q$=en(function(n,e,r,t){if(Uo(t))return N;var i=a(Go,"/",t);if(i.b){var o=i.a;return D(O$,n,a(ui,o,t),e,r,a(Jo,o,t))}else return D(O$,n,"/",e,r,t)}),Y$=z(function(n,e,r){if(Uo(r))return N;var t=a(Go,"?",r);if(t.b){var i=t.a;return C(q$,n,B(a(ui,i+1,r)),e,a(Jo,i,r))}else return C(q$,n,N,e,r)});v(function(n,e){if(Uo(e))return N;var r=a(Go,"#",e);if(r.b){var t=r.a;return d(Y$,n,B(a(ui,t+1,e)),a(Jo,t,e))}else return d(Y$,n,N,e)});var kh=G1,st=function(n){},$i=Da,Th=$i(0),tm=en(function(n,e,r,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var s=f.a,m=f.b,b=r>500?d(Gn,n,e,Nn(m)):C(tm,n,e,r+1,m);return a(n,i,a(n,c,a(n,u,a(n,s,b))))}else return a(n,i,a(n,c,a(n,u,e)))}else return a(n,i,a(n,c,e))}else return a(n,i,e)}else return e}),le=z(function(n,e,r){return C(tm,n,e,0,r)}),Y=v(function(n,e){return d(le,v(function(r,t){return a(w,n(r),t)}),L,e)}),ho=rl,$u=v(function(n,e){return a(ho,function(r){return $i(n(r))},e)}),Dh=z(function(n,e,r){return a(ho,function(t){return a(ho,function(i){return $i(a(n,t,i))},r)},e)}),Eh=function(n){return d(le,Dh(w),$i(L),n)},Ih=Mp,jh=v(function(n,e){var r=e;return Af(a(ho,Ih(n),r))}),Fh=z(function(n,e,r){return a($u,function(t){return 0},Eh(a(Y,jh(n),e)))}),Bh=z(function(n,e,r){return $i(0)}),Vh=v(function(n,e){var r=e;return a($u,n,r)});hr.Task=Sp(Th,Fh,Bh,Vh);var Rh=wf("Task"),vu=v(function(n,e){return Rh(a($u,n,e))}),Nh=l0,Wh=T1,go={$:1},im=function(n){return{$:2,a:n}},fu={$:0},Oe=v(function(n,e){return{$:0,a:n,b:e}}),Dn=z(function(n,e,r){return e(n(r))}),Ea=function(n){var e=n.b.p;return e.a},Hh=function(n){var e=n.a,r=n.b._,t=n.b.p,i=n.b.aq;if(i.b){var o=i.a,c=i.b;return B(a(Oe,e,{p:o,aq:c,_:a(w,t,r)}))}else return N},Sn=v(function(n,e){if(e.$)return n;var r=e.a;return r}),Qh=z(function(n,e,r){var t=r.a,i=r.b;switch(t.$){case 1:return r;case 2:var o=t.a.dR;return(sn(o+e.gL,Ea(r).aa)>0?a(Dn,Hh,Sn(a(Oe,go,i))):oe)(a(Oe,im({dR:o+e.gL}),i));default:var c=i.p,l=c.a,u=c.b,f=a(rm,l.gx,W(e,{aa:l.aa+e.gL})),s=a(n,f,u);return a(Oe,fu,{p:y(f,s),aq:L,_:a(w,i.p,i._)})}}),mu=v(function(n,e){n:for(;;){if(n<=0)return e;if(e.b){e.a;var r=e.b,t=n-1,i=r;n=t,e=i;continue n}else return e}}),Gh=z(function(n,e,r){n:for(;;){if(n<=0)return r;if(e.b){var t=e.a,i=e.b,o=n-1,c=i,l=a(w,t,r);n=o,e=c,r=l;continue n}else return r}}),Uh=v(function(n,e){return Nn(d(Gh,n,e,L))}),om=z(function(n,e,r){if(e<=0)return L;{var t=y(e,r);n:for(;;){e:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break n;case 2:var i=t.b,S=i.a,o=i.b,c=o.a;return $([S,c]);case 3:if(t.b.b.b.b){var l=t.b,S=l.a,u=l.b,c=u.a,f=u.b,s=f.a;return $([S,c,s])}else break e;default:if(t.b.b.b.b&&t.b.b.b.b.b){var m=t.b,S=m.a,b=m.b,c=b.a,h=b.b,s=h.a,_=h.b,A=_.a,x=_.b;return n>1e3?a(w,S,a(w,c,a(w,s,a(w,A,a(Uh,e-4,x))))):a(w,S,a(w,c,a(w,s,a(w,A,d(om,n+1,e-4,x)))))}else break e}else{if(t.a===1)break n;break e}else return r;return r}var P=t.b,S=P.a;return $([S])}}),cm=v(function(n,e){return d(om,0,n,e)}),Jh=v(function(n,e){var r=e.b._,t=e.b.p,i=e.b.aq,o=q(Nn(r),q($([t]),i)),c=a(cm,n,o),l=a(mu,n,o);if(l.b){var u=l.a,f=l.b;return a(Oe,go,{p:u,aq:f,_:Nn(c)})}else{var s=Nn(c);if(s.b){var m=s.a,b=s.b;return a(Oe,go,{p:m,aq:L,_:b})}else return e}}),Oh=function(n){var e=n.b;return a(Oe,go,e)},qh=function(n){var e=n.b;return a(Oe,im({dR:Ea(n).aa}),e)},Yh=function(n){var e=n.b;return a(Oe,fu,e)},Zh=v(function(n,e){switch(n.$){case 1:return Oh(e);case 2:return Yh(e);case 3:return qh(e);default:var r=n.a;return a(Jh,r,e)}}),bo=v(function(n,e){var r=e.a,t=e.b;return y(n(r),t)}),Xh=v(function(n,e){return W(e,{aQ:n(e.aQ)})}),Kh=function(n){return{$:3,a:n}},lm=function(n){return{$:2,a:n}},um=v(function(n,e){return{$:0,a:n,b:e}}),ng=v(function(n,e){return{$:1,a:n,b:e}}),Rn=v(function(n,e){if(e.$)return N;var r=e.a;return B(n(r))}),xn=function(n){return n<0?-n:n},$m=O1,eg=z(function(n,e,r){return a(Sn,0/0,$m(a(n,e,r)))}),Rr=v(function(n,e){n:for(;;)if(e.b){var r=e.a,t=e.b;if(n(r))return!0;var i=n,o=t;n=i,e=o;continue n}else return!1}),rg=F1,vm=function(n){return d(rg,w,L,n)},ag=v(function(n,e){var r=a(Rr,function(t){return t!=="0"&&t!=="."},vm(e));return q(n&&r?"-":"",e)}),mn=gf,ul=D1,fm=Z1,mm=function(n){var e=n.a,r=n.b;if(e==="9"){var t=mt(r);if(t.$===1)return"01";var i=t.a;return a(ul,"0",mm(i))}else{var o=gr(e);return o>=48&&o<57?a(ul,fm(o+1),r):"0"}},$l=M1,tg=k1,Oo=function(n){return a(ul,n,"")},sm=z(function(n,e,r){return n<=0?r:d(sm,n>>1,q(e,e),n&1?q(r,e):r)}),Qt=v(function(n,e){return d(sm,n,e,"")}),vl=z(function(n,e,r){return q(r,a(Qt,n-Ma(r),Oo(e)))}),fl=j1,dm=function(n){var e=a(ou,".",n);if(e.b)if(e.b.b){var r=e.a,t=e.b,i=t.a;return y(r,i)}else{var r=e.a;return y(r,"0")}else return y("0","0")},ig=function(n){var e=a(ou,"e",mn(xn(n)));if(e.b)if(e.b.b){var r=e.a,t=e.b,i=t.a,o=a(Sn,0,am(a(kh,"+",i)?a(ui,1,i):i)),c=dm(r),l=c.a,u=c.b,f=q(l,u),s=o<0?a(Sn,"0",a(Rn,function(m){var b=m.a,h=m.b;return b+("."+h)},a(Rn,bo(Oo),mt(q(a(Qt,xn(o),"0"),f))))):d(vl,o+1,"0",f);return q(n<0?"-":"",s)}else{var r=e.a;return q(n<0?"-":"",r)}else return""},og=z(function(n,e,r){if($l(r)||tg(r))return mn(r);var t=r<0,i=dm(ig(xn(r))),o=i.a,c=i.b,l=Ma(o)+e,u=q(a(Qt,-l+1,"0"),d(vl,l,"0",q(o,c))),f=Ma(u),s=a(te,1,l),m=a(n,t,d(Ya,s,f,u)),b=d(Ya,0,s,u),h=m?fl(a(Sn,"1",a(Rn,mm,mt(fl(b))))):b,_=Ma(h),A=h==="0"?h:e<=0?q(h,a(Qt,xn(e),"0")):sn(e,Ma(c))<0?d(Ya,0,_-e,h)+("."+d(Ya,_-e,_,h)):q(o+".",d(vl,e,"0",c));return a(ag,t,A)}),pm=og(v(function(n,e){var r=mt(e);if(r.$===1)return!1;if(r.a.a==="5")return r.a.b===""?(r.a,!n):(r.a,!0);var t=r.a,i=t.a;return function(o){return o>53&&n||o>=53&&!n}(gr(i))})),cg=eg(pm),lg=z(function(n,e,r){var t=a(cu,10,xn(e-n)),i=t<0?3:t<1?2:t<2?1:0;return a(cg,i,r)}),hm=p1,vi=v(function(n,e){n:for(;;){if(e.$===-2)return N;var r=e.b,t=e.c,i=e.d,o=e.e,c=a(hm,n,r);switch(c){case 0:var l=n,u=i;n=l,e=u;continue n;case 1:return B(t);default:var l=n,u=o;n=l,e=u;continue n}}}),hn=Kn(function(n,e,r,t,i){return{$:-1,a:n,b:e,c:r,d:t,e:i}}),Sr={$:-2},ct=Kn(function(n,e,r,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,s=t.c,m=t.d,b=t.e;return D(hn,0,e,r,D(hn,1,f,s,m,b),D(hn,1,o,c,l,u))}else return D(hn,n,o,c,D(hn,0,e,r,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,s=t.c,h=t.d;h.a;var _=h.b,A=h.c,x=h.d,P=h.e,b=t.e;return D(hn,0,f,s,D(hn,1,_,A,x,P),D(hn,1,e,r,b,i))}else return D(hn,n,e,r,t,i)}),ml=z(function(n,e,r){if(r.$===-2)return D(hn,0,n,e,Sr,Sr);var t=r.a,i=r.b,o=r.c,c=r.d,l=r.e,u=a(hm,n,i);switch(u){case 0:return D(ct,t,i,o,d(ml,n,e,c),l);case 1:return D(hn,t,i,e,c,l);default:return D(ct,t,i,o,c,d(ml,n,e,l))}}),nt=z(function(n,e,r){var t=d(ml,n,e,r);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return D(hn,1,i,o,c,l)}else{var u=t;return u}}),ug=function(n){n:for(;;)if(n.$===-1&&n.d.$===-1){var e=n.d,r=e;n=r;continue n}else return n},gm=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.e.d.$===-1&&!n.e.d.a){var e=n.a,r=n.b,t=n.c,i=n.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=n.e;f.a;var s=f.b,m=f.c,b=f.d;b.a;var h=b.b,_=b.c,A=b.d,x=b.e,P=f.e;return D(hn,0,h,_,D(hn,1,r,t,D(hn,0,o,c,l,u),A),D(hn,1,s,m,x,P))}else{var e=n.a,r=n.b,t=n.c,S=n.d;S.a;var o=S.b,c=S.c,l=S.d,u=S.e,T=n.e;T.a;var s=T.b,m=T.c,b=T.d,P=T.e;return D(hn,1,r,t,D(hn,0,o,c,l,u),D(hn,0,s,m,b,P))}else return n},Z$=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.d.d.$===-1&&!n.d.d.a){var e=n.a,r=n.b,t=n.c,i=n.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,s=l.d,m=l.e,b=i.e,h=n.e;h.a;var _=h.b,A=h.c,x=h.d,P=h.e;return D(hn,0,o,c,D(hn,1,u,f,s,m),D(hn,1,r,t,b,D(hn,0,_,A,x,P)))}else{var e=n.a,r=n.b,t=n.c,S=n.d;S.a;var o=S.b,c=S.c,T=S.d,b=S.e,H=n.e;H.a;var _=H.b,A=H.c,x=H.d,P=H.e;return D(hn,1,r,t,D(hn,0,o,c,T,b),D(hn,0,_,A,x,P))}else return n},$g=Ro(function(n,e,r,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,s=o.e;return D(hn,r,l,u,f,D(hn,0,t,i,s,c))}else{n:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Z$(e)}else break n;else return c.a,c.d,Z$(e);else break n;return e}}),Zi=function(n){if(n.$===-1&&n.d.$===-1){var e=n.a,r=n.b,t=n.c,i=n.d,o=i.a,c=i.d,l=n.e;if(o===1){if(c.$===-1&&!c.a)return c.a,D(hn,e,r,t,Zi(i),l);var u=gm(n);if(u.$===-1){var f=u.a,s=u.b,m=u.c,b=u.d,h=u.e;return D(ct,f,s,m,Zi(b),h)}else return Sr}else return D(hn,e,r,t,Zi(i),l)}else return Sr},jt=v(function(n,e){if(e.$===-2)return Sr;var r=e.a,t=e.b,i=e.c,o=e.d,c=e.e;if(sn(n,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,D(hn,r,t,i,a(jt,n,o),c);var u=gm(e);if(u.$===-1){var f=u.a,s=u.b,m=u.c,b=u.d,h=u.e;return D(ct,f,s,m,a(jt,n,b),h)}else return Sr}else return D(hn,r,t,i,a(jt,n,o),c);else return a(vg,n,Ul($g,n,e,r,t,i,o,c))}),vg=v(function(n,e){if(e.$===-1){var r=e.a,t=e.b,i=e.c,o=e.d,c=e.e;if(ln(n,t)){var l=ug(c);if(l.$===-1){var u=l.b,f=l.c;return D(ct,r,u,f,o,Zi(c))}else return Sr}else return D(ct,r,t,i,o,a(jt,n,c))}else return Sr}),bm=v(function(n,e){var r=a(jt,n,e);if(r.$===-1&&!r.a){r.a;var t=r.b,i=r.c,o=r.d,c=r.e;return D(hn,1,t,i,o,c)}else{var l=r;return l}}),Ii=z(function(n,e,r){var t=e(a(vi,n,r));if(t.$)return a(bm,n,r);var i=t.a;return d(nt,n,i,r)}),fg=function(n){switch(n.$){case 1:var e=n.a,r=n.b;return a(Ii,e,Rn(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(ng,y(o,c),r)}else return t}));case 0:var e=n.a,r=n.b;return a(Ii,e,Rn(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(um,y(o,c),d(lg,o,c,r))}));case 3:var e=n.a,r=n.b;return a(Ii,e,Rn(function(t){return t.$===3?Kh(r):t}));default:var e=n.a,r=n.b;return a(Ii,e,Rn(function(t){return t.$===2?lm(r):t}))}},mg=function(n){return Xh(fg(n))},sg=v(function(n,e){return a(Y,mg(n),e)}),dg=v(function(n,e){return W(e,{gx:a(sg,n,e.gx)})}),pg=v(function(n,e){var r=e.a,t=e.b;return a(Oe,r,W(t,{p:a(bo,dg(n),t.p)}))}),sl=v(function(n,e){var r=e.a,t=e.b;return y(r,n(t))}),hg=z(function(n,e,r){var t=r.a,i=r.b,o=i.p;return a(Oe,t,W(i,{p:a(sl,a(n,o.a,e),o)}))}),gg=en(function(n,e,r,t){switch(r.$){case 0:return t;case 1:return W(t,{bA:!t.bA});case 2:var i=r.a;return W(t,{U:d(Qh,n,i,t.U)});case 3:var o=r.a;return W(t,{bs:o});case 4:var c=r.a;return W(t,{U:a(pg,c,t.U)});case 5:var l=r.a;return W(t,{U:d(hg,e,l,t.U)});default:var u=r.a;return W(t,{U:a(Zh,u,t.U)})}}),bg=v(function(n,e){return a(Oe,fu,{p:y(n,e(n)),aq:L,_:L})}),Ag=Cp,X$=Ag(L),_g=function(n){return{$:2,a:n}},ra=tp,aa=ap,wg=Tp("tick",a(an,function(n){return a(an,function(e){return a(an,function(r){return a(an,function(t){return a(an,function(i){return a(an,function(o){return a(an,function(c){return Yn({aa:c,c_:o,gL:i,eA:t,dE:r,cI:e,iI:n})},a(O,"clock",ue))},a(O,"devicePixelRatio",ue))},a(O,"dt",ue))},a(O,"keyboard",a(an,function(t){return a(an,function(i){return a(an,function(o){return a(an,function(c){return a(an,function(l){return a(an,function(u){return a(an,function(f){return a(an,function(s){return a(an,function(m){return Yn({f1:m,gz:s,c0:f,gK:u,eB:l,hM:c,fs:o,h1:i,dW:t})},a(O,"alt",In))},a(O,"control",In))},a(O,"down",In))},a(O,"downs",ra(aa)))},a(O,"left",In))},a(O,"pressedKeys",ra(aa)))},a(O,"right",In))},a(O,"shift",In))},a(O,"up",In))))},a(O,"pointer",a(an,function(r){return a(an,function(t){return a(an,function(i){return a(an,function(o){return a(an,function(c){return a(an,function(l){return a(an,function(u){return a(an,function(f){return Yn({c0:f,ex:u,hu:l,hS:c,hT:o,dW:i,iM:t,iQ:r})},a(O,"down",In))},a(O,"isDown",In))},a(O,"move",In))},a(O,"rightDown",In))},a(O,"rightUp",In))},a(O,"up",In))},a(O,"x",ue))},a(O,"y",ue))))},a(O,"screen",a(an,function(e){return a(an,function(r){return Yn({g2:r,iK:e})},a(O,"height",ue))},a(O,"width",ue))))},a(O,"wheel",a(an,function(n){return a(an,function(e){return Yn({gD:e,gE:n})},a(O,"deltaX",ue))},a(O,"deltaY",ue))))),yg=function(n){return n.dZ,wg(_g)},Sg=function(n){return{$:5,a:n}},xg={$:0},Ao=v(function(n,e){return n}),K$=function(n){var e=n.b;return e},Mg=function(n){var e=n.b.p;return e.b},Cg=function(n){return{$:1,a:n}},Pg=Cg,su=function(n){return{$:8,a:n}},bn=su,Gt=function(n){return{$:0,a:n}},Mr=z(function(n,e,r){return n(e(r))}),Am=a(Mr,Gt,Ao),Or=Am,Mn=function(n){return{$:1,a:n}},Be=Mn,du=v(function(n,e){return{$:9,a:n,b:e}}),Ve={$:0},_m=v(function(n,e){return e.$===3?Ve:a(du,n,e)}),_o=function(n){return a(_m,4,n)},p={fS:"a",cQ:"atv",fU:"ab",fV:"cx",fW:"cy",fX:"acb",fY:"accx",fZ:"accy",f_:"acr",d7:"al",d8:"ar",f$:"at",cR:"ah",cS:"av",f3:"s",f9:"bh",ga:"b",ge:"w7",gg:"bd",gh:"bdt",b7:"bn",gi:"bs",ca:"cpe",gs:"cp",gu:"cpx",gv:"cpy",az:"c",ce:"ctr",cf:"cb",cg:"ccx",aA:"ccy",bx:"cl",ch:"cr",gy:"ct",gB:"cptr",gC:"ctxt",gU:"fcs",el:"focus-within",gV:"fs",gZ:"g",c1:"hbh",c2:"hc",ep:"he",c3:"hf",eq:"hfp",g5:"hv",g8:"ic",ha:"fr",cn:"lbl",he:"iml",hf:"imlf",hg:"imlp",hh:"implw",hi:"it",hm:"i",eJ:"lnk",bh:"nb",e9:"notxt",hA:"ol",hC:"or",aX:"oq",hH:"oh",fd:"pg",fe:"p",hI:"ppe",hU:"ui",ai:"r",hX:"sb",hY:"sbx",hZ:"sby",h_:"sbt",h3:"e",h4:"cap",h6:"sev",ic:"sk",ij:"t",ik:"tc",il:"w8",im:"w2",$9:"w9",io:"tj",cM:"tja",ip:"tl",iq:"w3",ir:"w5",is:"w4",it:"tr",iu:"w6",iv:"w1",iw:"tun",fD:"ts",a2:"clr",iE:"u",d_:"wc",fN:"we",d$:"wf",fO:"wfp",d0:"wrp"},fi=Jl,nr=v(function(n,e){return a(Xl,n,fi(e))}),Fe=nr("className"),Qn=function(n){return Mn(Fe(n))},wm=v(function(n,e){return{$:2,a:n,b:e}}),Lg=v(function(n,e){return{$:1,a:n,b:e}}),Wn=function(n){return{$:0,a:n}},de=2,zg={$:0},Pe=zg,kg={$:0},Tg=p.f3+(" "+p.az),Dg=p.f3+(" "+p.gZ),Eg=p.f3+(" "+p.fd),Ig=p.f3+(" "+p.fe),jg=p.f3+(" "+p.ai),Fg=p.f3+(" "+p.h3),Bg=function(n){switch(n){case 0:return jg;case 1:return Tg;case 2:return Fg;case 3:return Dg;case 4:return Ig;default:return Eg}},nv=function(n){return{$:1,a:n}},Sa={$:0},dl=function(n){return{$:1,a:n}},ev=v(function(n,e){switch(e.$){case 0:return n;case 1:var r=e.a;return q(r,n);case 2:var t=e.a;return q(n,t);default:var r=e.a,t=e.b;return q(r,q(n,t))}}),rv=z(function(n,e,r){switch(r.$){case 0:return e;case 1:var t=r.a;return q(a(Y,function(o){return y(n,o)},t),e);case 2:var i=r.a;return q(e,a(Y,function(o){return y(n,o)},i));default:var t=r.a,i=r.b;return q(a(Y,function(o){return y(n,o)},t),q(e,a(Y,function(o){return y(n,o)},i)))}}),Pt=4,Vg=function(n){return{$:0,a:n}},Rg=function(n){return{$:1,a:n}},Cn=function(n){return n>31?Rg(1<<n-32):Vg(1<<n)},ym=Cn(41),Sm=Cn(40),xm=Cn(42),Mm=Cn(43),ta=Ke("div"),pu=Sr,qo=pu,dr=function(n){switch(n.$){case 0:var e=n.a;return k(e)+"px";case 1:return"auto";case 2:var r=n.a;return k(r)+"fr";case 3:var t=n.a,o=n.b;return"min"+(k(t)+dr(o));default:var i=n.a,o=n.b;return"max"+(k(i)+dr(o))}},Hn=L1,jn=function(n){return k(Hn(n*255))},hu=function(n){switch(n.$){case 0:return N;case 1:var e=n.a,r=e.a,t=e.b,i=e.c;return B("mv-"+(jn(r)+("-"+(jn(t)+("-"+jn(i))))));default:var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,s=f.a,m=f.b,b=f.c,h=n.c,_=h.a,A=h.b,x=h.c,P=n.d;return B("tfrm-"+(jn(c)+("-"+(jn(l)+("-"+(jn(u)+("-"+(jn(s)+("-"+(jn(m)+("-"+(jn(b)+("-"+(jn(_)+("-"+(jn(A)+("-"+(jn(x)+("-"+jn(P))))))))))))))))))))}},Ut=function(n){switch(n.$){case 13:var u=n.a;return u;case 12:var u=n.a;return n.b,u;case 0:var r=n.a;return r;case 1:var u=n.a;return u;case 2:var e=n.a;return"font-size-"+k(e);case 3:var r=n.a;return r;case 4:var r=n.a;return r;case 5:var t=n.a,f=n.b;return n.c,t;case 7:var t=n.a;return n.b,n.c,n.d,n.e,t;case 6:var t=n.a;return n.b,n.c,n.d,n.e,t;case 8:var i=n.a;return"grid-rows-"+(a(fn,"-",a(Y,dr,i.hV))+("-cols-"+(a(fn,"-",a(Y,dr,i.an))+("-space-x-"+(dr(i.h7.a)+("-space-y-"+dr(i.h7.b)))))));case 9:var o=n.a;return"gp grid-pos-"+(k(o.ai)+("-"+(k(o.gw)+("-"+(k(o.iK)+("-"+k(o.g2)))))));case 11:var c=n.a,l=n.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(fn," ",a(Y,function(s){var m=Ut(s);if(m==="")return"";var b=m;return b+("-"+u)},l));default:var f=n.a;return a(Sn,"",hu(f))}},gu=v(function(n,e){var r=e;return d(nt,n,0,r)}),Ng=v(function(n,e){var r=a(vi,n,e);return!r.$}),bu=v(function(n,e){var r=e;return a(Ng,n,r)}),Cm=v(function(n,e){var r=e.a,t=e.b,i=Ut(n);return a(bu,i,r)?e:y(a(gu,i,r),a(w,n,t))}),dn=v(function(n,e){return{$:0,a:n,b:e}}),Ft=v(function(n,e){return{$:0,a:n,b:e}}),M=function(n){return"."+n},Wg=z(function(n,e,r){var t=n(e);if(t.$)return r;var i=t.a;return a(w,i,r)}),Ze=v(function(n,e){return d(le,Wg(n),L,e)}),Za=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return"rgba("+(k(Hn(e*255))+(","+k(Hn(r*255))+(","+k(Hn(t*255))+(","+(mn(i)+")")))))},pl=function(n){return a(fn," ",a(Ze,oe,$([n.eu?B("inset"):N,B(mn(n.fa.a)+"px"),B(mn(n.fa.b)+"px"),B(mn(n.a5)+"px"),B(mn(n.bl)+"px"),B(Za(n.cc))])))},Pm=function(n){return $([a(Ft,M(p.el)+":focus-within",a(Ze,oe,$([a(Rn,function(e){return a(dn,"border-color",Za(e))},n.gf),a(Rn,function(e){return a(dn,"background-color",Za(e))},n.f7),a(Rn,function(e){return a(dn,"box-shadow",pl({a5:e.a5,cc:e.cc,eu:!1,fa:a(sl,Tr,a(bo,Tr,e.fa)),bl:e.bl}))},n.h$),B(a(dn,"outline","none"))]))),a(Ft,M(p.f3)+":focus .focusable, "+(M(p.f3)+".focusable:focus, "+(".ui-slide-bar:focus + "+(M(p.f3)+" .focusable-thumb"))),a(Ze,oe,$([a(Rn,function(e){return a(dn,"border-color",Za(e))},n.gf),a(Rn,function(e){return a(dn,"background-color",Za(e))},n.f7),a(Rn,function(e){return a(dn,"box-shadow",pl({a5:e.a5,cc:e.cc,eu:!1,fa:a(sl,Tr,a(bo,Tr,e.fa)),bl:e.bl}))},n.h$),B(a(dn,"outline","none"))])))])},mr=function(n){return Ke(xf(n))},Lm=v(function(n,e){return a(Xl,Wp(n),Mf(e))}),Lc=v(function(n,e){return{$:2,a:n,b:e}}),Au=function(n){return{$:6,a:n}},X=v(function(n,e){return{$:1,a:n,b:e}}),Ie=v(function(n,e){return{$:0,a:n,b:e}}),E=v(function(n,e){return{$:4,a:n,b:e}}),g=v(function(n,e){return{$:0,a:n,b:e}}),Hg=v(function(n,e){return{$:3,a:n,b:e}}),zm=$([0,1,2,3,4,5]),Qg=v(function(n,e){return e.b?d(le,w,e,n):n}),Se=function(n){return d(le,Qg,L,n)},ma=v(function(n,e){return Se(a(Y,n,e))}),Gg=function(n){switch(n){case 0:return M(p.gy);case 1:return M(p.cf);case 2:return M(p.ch);case 3:return M(p.bx);case 4:return M(p.cg);default:return M(p.aA)}},wo=function(n){switch(n){case 0:return M(p.f$);case 1:return M(p.fU);case 2:return M(p.d8);case 3:return M(p.d7);case 4:return M(p.fV);default:return M(p.fW)}},Lt=function(n){var e=function(r){var t=n(r),i=t.a,o=t.b;return $([a(E,Gg(r),i),a(X,M(p.f3),$([a(E,wo(r),o)]))])};return Au(a(ma,e,zm))},av=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(E,M(p.c1),$([a(g,"z-index","0"),a(X,M(p.f9),$([a(g,"z-index","-1")]))])),a(E,M(p.h_),$([a(X,M(p.ij),$([a(E,M(p.c3),$([a(g,"flex-grow","0")])),a(E,M(p.d$),$([a(g,"align-self","auto !important")]))]))])),a(X,M(p.c2),$([a(g,"height","auto")])),a(X,M(p.c3),$([a(g,"flex-grow","100000")])),a(X,M(p.d$),$([a(g,"width","100%")])),a(X,M(p.fO),$([a(g,"width","100%")])),a(X,M(p.d_),$([a(g,"align-self","flex-start")])),Lt(function(n){switch(n){case 0:return y($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return y($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return y($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return y($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return y($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return y($([a(X,M(p.f3),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Ug=function(n){var e=function(r){return $([a(X,M(p.f3),$([a(E,wo(r),n(r))]))])};return Au(a(ma,e,zm))},Jg=function(){return $([0,1,2,3,4,5])}(),Og=$([a(Ie,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(Ie,q(M(p.f3),q(M(p.h3),M(p.g8))),$([a(g,"display","block"),a(E,M(p.c3),$([a(X,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(E,M(p.d$),$([a(X,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(Ie,M(p.f3)+":focus",$([a(g,"outline","none")])),a(Ie,M(p.hU),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(E,q(M(p.f3),M(p.c3)),$([a(g,"height","100%"),a(X,M(p.c3),$([a(g,"height","100%")]))])),a(X,M(p.ha),$([a(E,M(p.bh),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(Ie,M(p.bh),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(E,M(p.h3),av),Au(function(n){return a(Y,n,Jg)}(function(n){switch(n){case 0:return a(E,M(p.fS),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(X,M(p.c3),$([a(g,"height","auto")])),a(X,M(p.d$),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(X,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(E,M(p.ga),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(X,"*",$([a(g,"pointer-events","auto")])),a(X,M(p.c3),$([a(g,"height","auto")]))]));case 2:return a(E,M(p.hC),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(X,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(E,M(p.hA),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(X,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(E,M(p.ha),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(X,"*",$([a(g,"pointer-events","auto")]))]));default:return a(E,M(p.f9),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(X,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(Ie,M(p.f3),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(E,M(p.d0),$([a(g,"flex-wrap","wrap")])),a(E,M(p.e9),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(E,M(p.gB),$([a(g,"cursor","pointer")])),a(E,M(p.gC),$([a(g,"cursor","text")])),a(E,M(p.hI),$([a(g,"pointer-events","none !important")])),a(E,M(p.ca),$([a(g,"pointer-events","auto !important")])),a(E,M(p.a2),$([a(g,"opacity","0")])),a(E,M(p.aX),$([a(g,"opacity","1")])),a(E,M(q(p.g5,p.a2))+":hover",$([a(g,"opacity","0")])),a(E,M(q(p.g5,p.aX))+":hover",$([a(g,"opacity","1")])),a(E,M(q(p.gU,p.a2))+":focus",$([a(g,"opacity","0")])),a(E,M(q(p.gU,p.aX))+":focus",$([a(g,"opacity","1")])),a(E,M(q(p.cQ,p.a2))+":active",$([a(g,"opacity","0")])),a(E,M(q(p.cQ,p.aX))+":active",$([a(g,"opacity","1")])),a(E,M(p.fD),$([a(g,"transition",a(fn,", ",a(Y,function(n){return n+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(E,M(p.hX),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(E,M(p.hY),$([a(g,"overflow-x","auto"),a(E,M(p.ai),$([a(g,"flex-shrink","1")]))])),a(E,M(p.hZ),$([a(g,"overflow-y","auto"),a(E,M(p.az),$([a(g,"flex-shrink","1")])),a(E,M(p.h3),$([a(g,"flex-shrink","1")]))])),a(E,M(p.gs),$([a(g,"overflow","hidden")])),a(E,M(p.gu),$([a(g,"overflow-x","hidden")])),a(E,M(p.gv),$([a(g,"overflow-y","hidden")])),a(E,M(p.d_),$([a(g,"width","auto")])),a(E,M(p.b7),$([a(g,"border-width","0")])),a(E,M(p.gg),$([a(g,"border-style","dashed")])),a(E,M(p.gh),$([a(g,"border-style","dotted")])),a(E,M(p.gi),$([a(g,"border-style","solid")])),a(E,M(p.ij),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(E,M(p.hi),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(E,M(p.h3),av),a(E,M(p.ai),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(X,M(p.f3),$([a(g,"flex-basis","0%"),a(E,M(p.fN),$([a(g,"flex-basis","auto")])),a(E,M(p.eJ),$([a(g,"flex-basis","auto")]))])),a(X,M(p.c3),$([a(g,"align-self","stretch !important")])),a(X,M(p.eq),$([a(g,"align-self","stretch !important")])),a(X,M(p.d$),$([a(g,"flex-grow","100000")])),a(X,M(p.ce),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(X,"u:first-of-type."+p.f_,$([a(g,"flex-grow","1")])),a(X,"s:first-of-type."+p.fY,$([a(g,"flex-grow","1"),a(X,M(p.fV),$([a(g,"margin-left","auto !important")]))])),a(X,"s:last-of-type."+p.fY,$([a(g,"flex-grow","1"),a(X,M(p.fV),$([a(g,"margin-right","auto !important")]))])),a(X,"s:only-of-type."+p.fY,$([a(g,"flex-grow","1"),a(X,M(p.fW),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(X,"s:last-of-type."+(p.fY+" ~ u"),$([a(g,"flex-grow","0")])),a(X,"u:first-of-type."+(p.f_+(" ~ s."+p.fY)),$([a(g,"flex-grow","0")])),Lt(function(n){switch(n){case 0:return y($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return y($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return y($([a(g,"justify-content","flex-end")]),L);case 3:return y($([a(g,"justify-content","flex-start")]),L);case 4:return y($([a(g,"justify-content","center")]),L);default:return y($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(E,M(p.h6),$([a(g,"justify-content","space-between")])),a(E,M(p.cn),$([a(g,"align-items","baseline")]))])),a(E,M(p.az),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(X,M(p.f3),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(E,M(p.ep),$([a(g,"flex-basis","auto")]))])),a(X,M(p.c3),$([a(g,"flex-grow","100000")])),a(X,M(p.d$),$([a(g,"width","100%")])),a(X,M(p.fO),$([a(g,"width","100%")])),a(X,M(p.d_),$([a(g,"align-self","flex-start")])),a(X,"u:first-of-type."+p.fX,$([a(g,"flex-grow","1")])),a(X,"s:first-of-type."+p.fZ,$([a(g,"flex-grow","1"),a(X,M(p.fW),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(X,"s:last-of-type."+p.fZ,$([a(g,"flex-grow","1"),a(X,M(p.fW),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(X,"s:only-of-type."+p.fZ,$([a(g,"flex-grow","1"),a(X,M(p.fW),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(X,"s:last-of-type."+(p.fZ+" ~ u"),$([a(g,"flex-grow","0")])),a(X,"u:first-of-type."+(p.fX+(" ~ s."+p.fZ)),$([a(g,"flex-grow","0")])),Lt(function(n){switch(n){case 0:return y($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return y($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return y($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return y($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return y($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return y($([a(g,"justify-content","center")]),L)}}),a(X,M(p.ce),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(E,M(p.h6),$([a(g,"justify-content","space-between")]))])),a(E,M(p.gZ),$([a(g,"display","-ms-grid"),a(X,".gp",$([a(X,M(p.f3),$([a(g,"width","100%")]))])),a(Hg,y("display","grid"),$([y("display","grid")])),Ug(function(n){switch(n){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(E,M(p.fd),$([a(g,"display","block"),a(X,M(p.f3+":first-child"),$([a(g,"margin","0 !important")])),a(X,M(p.f3+(wo(3)+(":first-child + ."+p.f3))),$([a(g,"margin","0 !important")])),a(X,M(p.f3+(wo(2)+(":first-child + ."+p.f3))),$([a(g,"margin","0 !important")])),Lt(function(n){switch(n){case 0:return y(L,L);case 1:return y(L,L);case 2:return y(L,$([a(g,"float","right"),a(E,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return y(L,$([a(g,"float","left"),a(E,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return y(L,L);default:return y(L,L)}})])),a(E,M(p.he),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(E,M(p.hh),$([a(E,M(p.h3),$([a(g,"flex-basis","auto")]))])),a(E,M(p.hg),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(X,M(p.hf),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(E,M(p.fe),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(E,M(p.c1),$([a(g,"z-index","0"),a(X,M(p.f9),$([a(g,"z-index","-1")]))])),a(Lc,M(p.ij),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(Lc,M(p.fe),$([a(g,"display","inline"),a(E,"::after",$([a(g,"content","none")])),a(E,"::before",$([a(g,"content","none")]))])),a(Lc,M(p.h3),$([a(g,"display","inline"),a(g,"white-space","normal"),a(E,M(p.fN),$([a(g,"display","inline-block")])),a(E,M(p.ha),$([a(g,"display","flex")])),a(E,M(p.f9),$([a(g,"display","flex")])),a(E,M(p.fS),$([a(g,"display","flex")])),a(E,M(p.ga),$([a(g,"display","flex")])),a(E,M(p.hC),$([a(g,"display","flex")])),a(E,M(p.hA),$([a(g,"display","flex")])),a(X,M(p.ij),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(X,M(p.ai),$([a(g,"display","inline")])),a(X,M(p.az),$([a(g,"display","inline-flex")])),a(X,M(p.gZ),$([a(g,"display","inline-grid")])),Lt(function(n){switch(n){case 0:return y(L,L);case 1:return y(L,L);case 2:return y(L,$([a(g,"float","right")]));case 3:return y(L,$([a(g,"float","left")]));case 4:return y(L,L);default:return y(L,L)}})])),a(E,".hidden",$([a(g,"display","none")])),a(E,M(p.iv),$([a(g,"font-weight","100")])),a(E,M(p.im),$([a(g,"font-weight","200")])),a(E,M(p.iq),$([a(g,"font-weight","300")])),a(E,M(p.is),$([a(g,"font-weight","400")])),a(E,M(p.ir),$([a(g,"font-weight","500")])),a(E,M(p.iu),$([a(g,"font-weight","600")])),a(E,M(p.ge),$([a(g,"font-weight","700")])),a(E,M(p.il),$([a(g,"font-weight","800")])),a(E,M(p.$9),$([a(g,"font-weight","900")])),a(E,M(p.hm),$([a(g,"font-style","italic")])),a(E,M(p.ic),$([a(g,"text-decoration","line-through")])),a(E,M(p.iE),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(E,q(M(p.iE),M(p.ic)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(E,M(p.iw),$([a(g,"font-style","normal")])),a(E,M(p.io),$([a(g,"text-align","justify")])),a(E,M(p.cM),$([a(g,"text-align","justify-all")])),a(E,M(p.ik),$([a(g,"text-align","center")])),a(E,M(p.it),$([a(g,"text-align","right")])),a(E,M(p.ip),$([a(g,"text-align","left")])),a(E,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),Gr=function(n){return $([a(Ie,".v-"+n,$([a(g,"font-feature-settings",'"'+(n+'"'))])),a(Ie,".v-"+(n+"-off"),$([a(g,"font-feature-settings",'"'+(n+'" 0'))]))])},qg=Se($([a(Y,function(n){return a(Ie,".border-"+k(n),$([a(g,"border-width",k(n)+"px")]))},a(Br,0,6)),a(Y,function(n){return a(Ie,".font-size-"+k(n),$([a(g,"font-size",k(n)+"px")]))},a(Br,8,32)),a(Y,function(n){return a(Ie,".p-"+k(n),$([a(g,"padding",k(n)+"px")]))},a(Br,0,24)),$([a(Ie,".v-smcp",$([a(g,"font-variant","small-caps")])),a(Ie,".v-smcp-off",$([a(g,"font-variant","normal")]))]),Gr("zero"),Gr("onum"),Gr("liga"),Gr("dlig"),Gr("ordn"),Gr("tnum"),Gr("afrc"),Gr("frac")])),Yg=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.f3+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.f3+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Zg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Xg=`
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
`,Kg=`
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
`,n3=`
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
`,e3="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(M(p.f3)+(M(p.ai)+(" > "+(M(p.f3)+(" { flex-basis: auto !important; } "+(M(p.f3)+(M(p.ai)+(" > "+(M(p.f3)+(M(p.ce)+(" { flex-basis: auto !important; }}"+(Zg+(Xg+(n3+(Kg+Yg))))))))))))))),et=function(n){return a(fn,"",n)},Ua=v(function(n,e){return{cb:e,J:L,aH:L,aj:n}}),Ja=v(function(n,e){var r=n,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return W(o,{aH:a(w,y(c,l),o.aH)});case 3:var u=i.a,f=u.a,s=u.b,m=i.b;return W(o,{J:a(w,{cb:`
}`,J:L,aH:m,aj:"@supports ("+(f+(":"+(s+(") {"+r.aj))))},o.J)});case 5:var b=i.a,h=i.b;return W(o,{J:a(w,a(Ja,a(Ua,r.aj+(" + "+b),""),h),o.J)});case 1:var _=i.a,A=i.b;return W(o,{J:a(w,a(Ja,a(Ua,r.aj+(" > "+_),""),A),o.J)});case 2:var _=i.a,A=i.b;return W(o,{J:a(w,a(Ja,a(Ua,r.aj+(" "+_),""),A),o.J)});case 4:var x=i.a,P=i.b;return W(o,{J:a(w,a(Ja,a(Ua,q(r.aj,x),""),P),o.J)});default:var S=i.a;return W(o,{J:a(w,a(Ja,a(Ua,r.aj,""),S),o.J)})}});return d(le,t,r,e)}),r3=function(n){var e=function(i){return et(a(Y,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},r=function(i){var o=i.aH;return o.b?i.aj+("{"+(e(i.aH)+(i.cb+"}"))):""},t=function(i){var o=i;return q(r(o),et(a(Y,t,o.J)))};return et(a(Y,t,d(le,v(function(i,o){var c=i.a,l=i.b;return a(w,a(Ja,a(Ua,c,""),l),o)}),L,n)))},tv=q(e3,r3(q(Og,qg))),ia=al,km=function(n){var e=n.e6;switch(e){case 0:return d(mr,"div",L,$([d(mr,"style",L,$([ia(tv)]))]));case 1:return ia("");default:return d(mr,"elm-ui-static-rules",$([a(Lm,"rules",fi(tv))]),L)}},Jt=v(function(n,e){return d(Gn,hp(n),sp(),e)}),Ia=function(n){return d(Gn,v(function(e,r){var t=e.a,i=e.b;return d(pp,t,i,r)}),dp(),n)},a3=function(n){switch(n.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var e=n.a;return'"'+(e+'"');case 4:var e=n.a;return n.b,'"'+(e+'"');default:var e=n.a.hw;return'"'+(e+'"')}},t3=function(n){switch(n.$){case 0:var e=n.a;return e==="smcp";case 1:var e=n.a;return!1;default:var e=n.a,r=n.b;return e==="smcp"&&r===1}},i3=function(n){if(n.$===5){var e=n.a;return a(Rr,t3,e.fH)}else return!1},Ue=v(function(n,e){return sn(n,e)<0?n:e}),wt=z(function(n,e,r){var t=e.a,i=e.b;return n?r+(`
  `+(t+(": "+(i+" !important;")))):r+(`
  `+(t+(": "+(i+";"))))}),Un=en(function(n,e,r,t){if(e.$===1)return $([r+("{"+(d(Gn,wt(!1),"",t)+`
}`))]);var i=e.a;switch(i){case 1:var o=n.g5;switch(o){case 0:return L;case 2:return $([r+("-hv {"+(d(Gn,wt(!0),"",t)+`
}`))]);default:return $([r+("-hv:hover {"+(d(Gn,wt(!1),"",t)+`
}`))])}case 0:var c=d(Gn,wt(!1),"",t);return $([r+("-fs:focus {"+(c+`
}`)),"."+(p.f3+(":focus "+(r+"-fs  {")))+(c+`
}`),r+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(M(p.f3)+(" .focusable-thumb"+(r+"-fs {")))+(c+`
}`)]);default:return $([r+("-act:active {"+(d(Gn,wt(!1),"",t)+`
}`))])}}),o3=function(n){switch(n.$){case 0:var e=n.a;return'"'+(e+'"');case 1:var e=n.a;return'"'+(e+'" 0');default:var e=n.a,r=n.b;return'"'+(e+('" '+k(r)))}},c3=function(n){if(n.$===5){var e=n.a;return B(a(fn,", ",a(Y,o3,e.fH)))}else return N},l3=function(n){switch(n.$){case 0:return N;case 1:var e=n.a,r=e.a,t=e.b,i=e.c;return B("translate3d("+(mn(r)+("px, "+(mn(t)+("px, "+(mn(i)+"px)"))))));default:var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,s=f.a,m=f.b,b=f.c,h=n.c,_=h.a,A=h.b,x=h.c,P=n.d,S="translate3d("+(mn(c)+("px, "+(mn(l)+("px, "+(mn(u)+"px)"))))),T="scale3d("+(mn(s)+(", "+(mn(m)+(", "+(mn(b)+")"))))),H="rotate3d("+(mn(_)+(", "+(mn(A)+(", "+(mn(x)+(", "+(mn(P)+"rad)")))))));return B(S+(" "+(T+(" "+H))))}},_u=z(function(n,e,r){switch(e.$){case 0:var t=e.a,i=e.b;return C(Un,n,r,t,i);case 13:var u=e.a,b=e.b;return C(Un,n,r,"."+u,$([a(dn,"box-shadow",b)]));case 12:var u=e.a,o=e.b,c=a(te,0,a(Ue,1,1-o));return C(Un,n,r,"."+u,$([a(dn,"opacity",mn(c))]));case 2:var l=e.a;return C(Un,n,r,".font-size-"+k(l),$([a(dn,"font-size",k(l)+"px")]));case 1:var u=e.a,f=e.b,s=a(fn,", ",a(Ze,c3,f)),m=$([a(dn,"font-family",a(fn,", ",a(Y,a3,f))),a(dn,"font-feature-settings",s),a(dn,"font-variant",a(Rr,i3,f)?"small-caps":"normal")]);return C(Un,n,r,"."+u,m);case 3:var An=e.a,b=e.b,_c=e.c;return C(Un,n,r,"."+An,$([a(dn,b,_c)]));case 4:var An=e.a,b=e.b,h=e.c;return C(Un,n,r,"."+An,$([a(dn,b,Za(h))]));case 5:var K=e.a,_=e.b,A=e.c,x=k(A)+"px",P=k(_)+"px",S="."+p.ai,T="."+(p.d0+S),wn="."+p.d8,H="."+p.fe,rn="."+p.fd,Tn="."+p.d7,on=mn(A/2)+"px",cn=mn(_/2)+"px",$n="."+p.az,An="."+K,tn="."+p.f3;return Se($([C(Un,n,r,An+(S+(" > "+(tn+(" + "+tn)))),$([a(dn,"margin-left",P)])),C(Un,n,r,An+(T+(" > "+tn)),$([a(dn,"margin",on+(" "+cn))])),C(Un,n,r,An+($n+(" > "+(tn+(" + "+tn)))),$([a(dn,"margin-top",x)])),C(Un,n,r,An+(rn+(" > "+(tn+(" + "+tn)))),$([a(dn,"margin-top",x)])),C(Un,n,r,An+(rn+(" > "+Tn)),$([a(dn,"margin-right",P)])),C(Un,n,r,An+(rn+(" > "+wn)),$([a(dn,"margin-left",P)])),C(Un,n,r,q(An,H),$([a(dn,"line-height","calc(1em + "+(k(A)+"px)"))])),C(Un,n,r,"textarea"+(tn+An),$([a(dn,"line-height","calc(1em + "+(k(A)+"px)")),a(dn,"height","calc(100% + "+(k(A)+"px)"))])),C(Un,n,r,An+(H+(" > "+Tn)),$([a(dn,"margin-right",P)])),C(Un,n,r,An+(H+(" > "+wn)),$([a(dn,"margin-left",P)])),C(Un,n,r,An+(H+"::after"),$([a(dn,"content","''"),a(dn,"display","block"),a(dn,"height","0"),a(dn,"width","0"),a(dn,"margin-top",k(-1*(A/2|0))+"px")])),C(Un,n,r,An+(H+"::before"),$([a(dn,"content","''"),a(dn,"display","block"),a(dn,"height","0"),a(dn,"width","0"),a(dn,"margin-bottom",k(-1*(A/2|0))+"px")]))]));case 7:var K=e.a,_n=e.b,wn=e.c,Bn=e.d,Tn=e.e,An="."+K;return C(Un,n,r,An,$([a(dn,"padding",mn(_n)+("px "+(mn(wn)+("px "+(mn(Bn)+("px "+(mn(Tn)+"px")))))))]));case 6:var K=e.a,_n=e.b,wn=e.c,Bn=e.d,Tn=e.e,An="."+K;return C(Un,n,r,An,$([a(dn,"border-width",k(_n)+("px "+(k(wn)+("px "+(k(Bn)+("px "+(k(Tn)+"px")))))))]));case 8:var gn=e.a,Vn=z(function(fe,_t,Pr){n:for(;;)switch(Pr.$){case 0:var i1=Pr.a;return k(i1)+"px";case 1:var rr=y(fe,_t);if(rr.a.$===1){if(rr.b.$===1)return rr.a,rr.b,"max-content";rr.a;var ga=rr.b.a;return"minmax(max-content, "+(k(ga)+"px)")}else if(rr.b.$===1){var ba=rr.a.a;return rr.b,"minmax("+(k(ba)+"px, max-content)")}else{var ba=rr.a.a,ga=rr.b.a;return"minmax("+(k(ba)+("px, "+(k(ga)+"px)")))}case 2:var z$=Pr.a,ar=y(fe,_t);if(ar.a.$===1){if(ar.b.$===1)return ar.a,ar.b,k(z$)+"fr";ar.a;var ga=ar.b.a;return"minmax(max-content, "+(k(ga)+"px)")}else if(ar.b.$===1){var ba=ar.a.a;return ar.b,"minmax("+(k(ba)+("px, "+(k(z$)+"frfr)")))}else{var ba=ar.a.a,ga=ar.b.a;return"minmax("+(k(ba)+("px, "+(k(ga)+"px)")))}case 3:var wc=Pr.a,yc=Pr.b,Sc=B(wc),xc=_t,Mc=yc;fe=Sc,_t=xc,Pr=Mc;continue n;default:var wc=Pr.a,yc=Pr.b,Sc=fe,xc=B(wc),Mc=yc;fe=Sc,_t=xc,Pr=Mc;continue n}}),I=function(fe){return d(Vn,N,N,fe)};I(gn.h7.a);var F=I(gn.h7.b),V=function(fe){return"grid-template-rows: "+(fe+";")}(a(fn," ",a(Y,I,gn.hV))),R=function(fe){return"-ms-grid-rows: "+(fe+";")}(a(fn,F,a(Y,I,gn.an))),Q=function(fe){return"-ms-grid-columns: "+(fe+";")}(a(fn,F,a(Y,I,gn.an))),G="grid-row-gap:"+(I(gn.h7.b)+";"),U="grid-column-gap:"+(I(gn.h7.a)+";"),J=function(fe){return"grid-template-columns: "+(fe+";")}(a(fn," ",a(Y,I,gn.an))),An=".grid-rows-"+(a(fn,"-",a(Y,dr,gn.hV))+("-cols-"+(a(fn,"-",a(Y,dr,gn.an))+("-space-x-"+(dr(gn.h7.a)+("-space-y-"+dr(gn.h7.b))))))),gc=An+("{"+(J+(V+(U+(G+"}"))))),bc="@supports (display:grid) {"+(gc+"}"),Ac=An+("{"+(Q+(R+"}")));return $([Ac,bc]);case 9:var ee=e.a,ki=a(fn," ",$(["-ms-grid-row: "+(k(ee.ai)+";"),"-ms-grid-row-span: "+(k(ee.g2)+";"),"-ms-grid-column: "+(k(ee.gw)+";"),"-ms-grid-column-span: "+(k(ee.iK)+";")])),hc=a(fn," ",$(["grid-row: "+(k(ee.ai)+(" / "+(k(ee.ai+ee.g2)+";"))),"grid-column: "+(k(ee.gw)+(" / "+(k(ee.gw+ee.iK)+";")))])),An=".grid-pos-"+(k(ee.ai)+("-"+(k(ee.gw)+("-"+(k(ee.iK)+("-"+k(ee.g2))))))),gc=An+("{"+(hc+"}")),bc="@supports (display:grid) {"+(gc+"}"),Ac=An+("{"+(ki+"}"));return $([Ac,bc]);case 11:var An=e.a,r1=e.b,a1=function(fe){return d(_u,n,fe,B(An))};return a(ma,a1,r1);default:var L$=e.a,_c=l3(L$),An=hu(L$),Ti=y(An,_c);if(!Ti.a.$&&!Ti.b.$){var K=Ti.a.a,t1=Ti.b.a;return C(Un,n,r,"."+K,$([a(dn,"transform",t1)]))}else return L}}),u3=v(function(n,e){return Ia(a(Y,function(r){var t=d(_u,n,r,N);return y(Ut(r),a(Jt,fi,t))},e))}),yo=v(function(n,e){var r=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return n+(" {"+(a(fn,"",a(Y,r,e))+"}"))}),iv=z(function(n,e,r){var t=r.a,i=r.b;return $([a(yo,"."+(n+("."+(e+(", "+("."+(n+(" ."+e))))))),t),a(yo,"."+(n+("."+(e+("> ."+(p.ij+(", ."+(n+(" ."+(e+(" > ."+p.ij)))))))))),i)])}),$3=z(function(n,e,r){var t=e.a,i=e.b,o=ln(n,r)?n:r+(" ."+n);return a(fn," ",q(d(iv,o,p.h4,i),d(iv,o,p.gV,t)))}),v3=v(function(n,e){var r=ln(n,e)?n:e+(" ."+n);return a(fn," ",$([a(yo,"."+(r+("."+(p.h4+(", "+("."+(r+(" ."+p.h4))))))),$([y("line-height","1")])),a(yo,"."+(r+("."+(p.h4+("> ."+(p.ij+(", ."+(r+(" ."+(p.h4+(" > ."+p.ij)))))))))),$([y("vertical-align","0"),y("line-height","1")]))]))}),ov=z(function(n,e,r){return{g2:e/n,bl:n,fI:r}}),ja=v(function(n,e){return d(le,v(function(r,t){return n(r)?a(w,r,t):t}),L,e)}),hl=function(n){if(n.b){var e=n.a,r=n.b;return B(d(Gn,te,e,r))}else return N},So=function(n){if(n.b){var e=n.a,r=n.b;return B(d(Gn,Ue,e,r))}else return N},cv=function(n){var e=$([n.gm,n.f8,n.gG,n.hr]),r=a(Sn,n.gG,So(e)),t=a(Sn,n.f8,So(a(ja,function(f){return!ln(f,r)},e))),i=a(Sn,n.gm,hl(e)),o=1/(i-t),c=1-i,l=1/(i-r),u=1-i;return{gm:d(ov,o,i-t,c),en:d(ov,l,i-r,u)}},lv=function(n){return y($([y("display","block")]),$([y("display","inline-block"),y("line-height",mn(n.g2)),y("vertical-align",mn(n.fI)+"em"),y("font-size",mn(n.bl)+"em")]))},f3=function(n){return d(Gn,v(function(e,r){if(r.$===1)if(e.$===5){var t=e.a,i=t.fT;if(i.$===1)return r;var o=i.a;return B(y(lv(function(c){return c.en}(cv(o))),lv(function(c){return c.gm}(cv(o)))))}else return r;else return r}),N,n)},m3=function(n){var e=function(o){if(o.$===4){var c=o.b;return B("@import url('"+(c+"');"))}else return N},r=function(o){o.a;var c=o.b,l=a(fn,`
`,a(Ze,e,c));return l},t=a(Y,so,n),i=function(o){var c=o.a,l=o.b,u=f3(l);if(u.$===1)return a(fn,"",a(Y,v3(c),t));var f=u.a;return a(fn,"",a(Y,a($3,c,f),t))};return q(a(fn,`
`,a(Y,r,n)),a(fn,`
`,a(Y,i,n)))},s3=function(n){if(n.$===1){var e=n.a,r=n.b;return B(y(e,r))}else return N},uv=v(function(n,e){var r=v(function(c,l){return{cG:q(l.cG,d(_u,n,c,N)),bZ:function(){var u=s3(c);if(u.$===1)return l.bZ;var f=u.a;return a(w,f,l.bZ)}()}}),t=d(Gn,r,{cG:L,bZ:L},e),i=t.bZ,o=t.cG;return q(m3(i),et(o))}),Tm=v(function(n,e){var r=n.e6;switch(r){case 0:return d(mr,"div",L,$([d(mr,"style",L,$([ia(a(uv,n,e))]))]));case 1:return d(mr,"div",L,$([d(mr,"style",L,$([ia(a(uv,n,e))]))]));default:return d(mr,"elm-ui-rules",$([a(Lm,"rules",a(u3,n,e))]),L)}}),$v=en(function(n,e,r,t){var i=a(Tm,e,d(Gn,Cm,y(qo,Pm(e.gU)),r).b);return n?a(w,y("static-stylesheet",km(e)),a(w,y("dynamic-stylesheet",i),t)):a(w,y("dynamic-stylesheet",i),t)}),vv=en(function(n,e,r,t){var i=a(Tm,e,d(Gn,Cm,y(qo,Pm(e.gU)),r).b);return n?a(w,km(e),a(w,i,t)):a(w,i,t)}),gl=Cn(45),Ot=Cn(37),Dm=function(n){return jp(xf(n))},bl=Ke("p"),Ce=v(function(n,e){var r=e.a,t=e.b;if(n.$){var o=n.a;return ln(o&t,o)}else{var i=n.a;return ln(i&r,i)}}),fv=Ke("s"),mv=Ke("u"),Al=Cn(44),qt=Cn(39),ji=Ee(function(n,e,r,t,i,o){var c=v(function(u,f){if(t.$===1){var s=t.a;return d(Dm,u,f,function(){switch(i.$){case 0:return s;case 2:var b=i.a,h=i.b;return C($v,!1,b,h,s);default:var b=i.a,h=i.b;return C($v,!0,b,h,s)}}())}else{var m=t.a;return a(function(){switch(u){case"div":return ta;case"p":return bl;default:return mr(u)}}(),f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,h=i.b;return C(vv,!1,b,h,m);default:var b=i.a,h=i.b;return C(vv,!0,b,h,m)}}())}}),l=function(){switch(e.$){case 0:return a(c,"div",r);case 1:var u=e.a;return a(c,u,r);default:var u=e.a,f=e.b;return d(mr,u,r,$([a(c,f,$([Fe(p.f3+(" "+p.h3))]))]))}}();switch(o){case 0:return a(Ce,qt,n)&&!a(Ce,Al,n)?l:a(Ce,Sm,n)?a(mv,$([Fe(a(fn," ",$([p.f3,p.h3,p.ce,p.aA,p.f_])))]),$([l])):a(Ce,xm,n)?a(fv,$([Fe(a(fn," ",$([p.f3,p.h3,p.ce,p.aA,p.fY])))]),$([l])):l;case 1:return a(Ce,Ot,n)&&!a(Ce,gl,n)?l:a(Ce,Mm,n)?a(fv,$([Fe(a(fn," ",$([p.f3,p.h3,p.ce,p.fZ])))]),$([l])):a(Ce,ym,n)?a(mv,$([Fe(a(fn," ",$([p.f3,p.h3,p.ce,p.fX])))]),$([l])):l;default:return l}}),kr=function(n){return!n.b},tr=ia,d3=p.f3+(" "+(p.ij+(" "+(p.d_+(" "+p.c2))))),Yt=function(n){return a(ta,$([Fe(d3)]),$([tr(n)]))},p3=p.f3+(" "+(p.ij+(" "+(p.d$+(" "+p.c3))))),sv=function(n){return a(ta,$([Fe(p3)]),$([tr(n)]))},h3=z(function(n,e,r){var t=v(function(_,A){var x=_.a,P=_.b,S=A.a,T=A.b;switch(P.$){case 0:var H=P.a;return ln(n,Pt),y(a(w,y(x,H(n)),S),T);case 1:var rn=P.a;return ln(n,Pt),y(a(w,y(x,a(rn.g6,Sa,n)),S),kr(T)?rn.id:q(rn.id,T));case 2:var on=P.a;return y(a(w,y(x,ln(n,de)?sv(on):Yt(on)),S),T);default:return y(S,T)}}),i=v(function(_,A){var x=A.a,P=A.b;switch(_.$){case 0:var S=_.a;return ln(n,Pt),y(a(w,S(n),x),P);case 1:var T=_.a;return ln(n,Pt),y(a(w,a(T.g6,Sa,n),x),kr(P)?T.id:q(T.id,P));case 2:var H=_.a;return y(a(w,ln(n,de)?sv(H):Yt(H),x),P);default:return y(x,P)}});if(e.$===1){var o=e.a,c=d(le,t,y(L,L),o),l=c.a,u=c.b,f=kr(u)?r.id:q(r.id,u);if(f.b){var s=f;return dl({g6:C(ji,r.aU,r.aW,r.aM,nv(d(rv,"nearby-element-pls",l,r.aP))),id:s})}else return Gt(D(ji,r.aU,r.aW,r.aM,nv(d(rv,"nearby-element-pls",l,r.aP)),Sa))}else{var m=e.a,b=d(le,i,y(L,L),m),h=b.a,u=b.b,f=kr(u)?r.id:q(r.id,u);if(f.b){var s=f;return dl({g6:C(ji,r.aU,r.aW,r.aM,Wn(a(ev,h,r.aP))),id:s})}else return Gt(D(ji,r.aU,r.aW,r.aM,Wn(a(ev,h,r.aP)),Sa))}}),Le=z(function(n,e,r){return{$:3,a:n,b:e,c:r}}),Em=function(n){return{$:10,a:n}},xo=v(function(n,e){return{$:0,a:n,b:e}}),yn=v(function(n,e){var r=e.a,t=e.b;if(n.$){var o=n.a;return a(xo,r,o|t)}else{var i=n.a;return a(xo,i|r,t)}}),dv=function(n){return{$:1,a:n}},Fi=v(function(n,e){return{$:3,a:n,b:e}}),pv=function(n){return{$:2,a:n}},g3=v(function(n,e){return a(ta,$([Fe(function(){switch(n){case 0:return a(fn," ",$([p.bh,p.h3,p.fS]));case 1:return a(fn," ",$([p.bh,p.h3,p.ga]));case 2:return a(fn," ",$([p.bh,p.h3,p.hC]));case 3:return a(fn," ",$([p.bh,p.h3,p.hA]));case 4:return a(fn," ",$([p.bh,p.h3,p.ha]));default:return a(fn," ",$([p.bh,p.h3,p.f9]))}}())]),$([function(){switch(e.$){case 3:return ia("");case 2:var r=e.a;return Yt(r);case 0:var t=e.a;return t(de);default:var i=e.a;return a(i.g6,Sa,de)}}()]))}),b3=z(function(n,e,r){var t=a(g3,n,e);switch(r.$){case 0:return n===5?dv($([t])):pv($([t]));case 1:var i=r.a;return n===5?dv(a(w,t,i)):a(Fi,i,$([t]));case 2:var o=r.a;return n===5?a(Fi,$([t]),o):pv(a(w,t,o));default:var i=r.a,o=r.b;return n===5?a(Fi,a(w,t,i),o):a(Fi,i,a(w,t,o))}}),hv=v(function(n,e){return{$:2,a:n,b:e}}),sr=function(n){return{$:1,a:n}},Aa=v(function(n,e){switch(e.$){case 0:return sr(n);case 1:var r=e.a;return a(hv,r,n);default:var t=e.a,i=e.b;return a(hv,t,i)}}),A3=function(n){switch(n){case 0:return p.cR+(" "+p.d7);case 2:return p.cR+(" "+p.d8);default:return p.cR+(" "+p.fV)}},_3=function(n){switch(n){case 0:return p.cS+(" "+p.f$);case 2:return p.cS+(" "+p.fU);default:return p.cS+(" "+p.fW)}},zt=v(function(n,e){return a($r,Np(n),Mf(e))}),vr=en(function(n,e,r,t){return{$:2,a:n,b:e,c:r,d:t}}),Ur=function(n){return{$:1,a:n}},Im=v(function(n,e){switch(n.$){case 0:switch(e.$){case 0:var u=e.a;return Ur(j(u,0,0));case 1:var f=e.a;return Ur(j(0,f,0));case 2:var s=e.a;return Ur(j(0,0,s));case 3:var r=e.a;return Ur(r);case 4:var r=e.a,h=e.b;return C(vr,j(0,0,0),j(1,1,1),r,h);default:var r=e.a;return C(vr,j(0,0,0),r,j(0,0,1),0)}case 1:var l=n.a,u=l.a,f=l.b,s=l.c;switch(e.$){case 0:var t=e.a;return Ur(j(t,f,s));case 1:var i=e.a;return Ur(j(u,i,s));case 2:var o=e.a;return Ur(j(u,f,o));case 3:var r=e.a;return Ur(r);case 4:var r=e.a,h=e.b;return C(vr,l,j(1,1,1),r,h);default:var c=e.a;return C(vr,l,c,j(0,0,1),0)}default:var l=n.a,u=l.a,f=l.b,s=l.c,m=n.b,b=n.c,h=n.d;switch(e.$){case 0:var t=e.a;return C(vr,j(t,f,s),m,b,h);case 1:var i=e.a;return C(vr,j(u,i,s),m,b,h);case 2:var o=e.a;return C(vr,j(u,f,o),m,b,h);case 3:var _=e.a;return C(vr,_,m,b,h);case 4:var A=e.a,x=e.b;return C(vr,l,m,A,x);default:var P=e.a;return C(vr,l,P,b,h)}}}),Wa=Cn(7),jm=Cn(36),gv=v(function(n,e){var r=n.a,t=n.b,i=e.a,o=e.b;return a(xo,r|i,t|o)}),Dr=a(xo,0,0),_l=function(n){switch(n.$){case 0:var e=n.a,r=k(e),t="height-px-"+r;return j(Dr,p.ep+(" "+t),$([d(Le,t,"height",r+"px")]));case 1:return j(a(yn,jm,Dr),p.c2,L);case 2:var i=n.a;return i===1?j(a(yn,Ot,Dr),p.c3,L):j(a(yn,Ot,Dr),p.eq+(" height-fill-"+k(i)),$([d(Le,p.f3+("."+(p.az+(" > "+M("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=n.a,u=n.b,f="min-height-"+k(o),s=d(Le,f,"min-height",k(o)+"px !important"),c=_l(u),b=c.a,h=c.b,_=c.c;return j(a(yn,gl,b),f+(" "+h),a(w,s,_));default:var l=n.a,u=n.b,f="max-height-"+k(l),s=d(Le,f,"max-height",k(l)+"px"),m=_l(u),b=m.a,h=m.b,_=m.c;return j(a(yn,gl,b),f+(" "+h),a(w,s,_))}},Fm=Cn(38),wl=function(n){switch(n.$){case 0:var e=n.a;return j(Dr,p.fN+(" width-px-"+k(e)),$([d(Le,"width-px-"+k(e),"width",k(e)+"px")]));case 1:return j(a(yn,Fm,Dr),p.d_,L);case 2:var r=n.a;return r===1?j(a(yn,qt,Dr),p.d$,L):j(a(yn,qt,Dr),p.fO+(" width-fill-"+k(r)),$([d(Le,p.f3+("."+(p.ai+(" > "+M("width-fill-"+k(r))))),"flex-grow",k(r*1e5))]));case 3:var t=n.a,c=n.b,l="min-width-"+k(t),u=d(Le,l,"min-width",k(t)+"px"),i=wl(c),s=i.a,m=i.b,b=i.c;return j(a(yn,Al,s),l+(" "+m),a(w,u,b));default:var o=n.a,c=n.b,l="max-width-"+k(o),u=d(Le,l,"max-width",k(o)+"px"),f=wl(c),s=f.a,m=f.b,b=f.c;return j(a(yn,Al,s),l+(" "+m),a(w,u,b))}},Yo=Cn(27),w3=v(function(n,e){if(ln(n,Yo))if(e.$===3){var r=e.c;switch(r){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(e.$){case 2:var t=e.a;return t>=8&&t<=32;case 7:e.a;var i=e.b,o=e.c,c=e.d,l=e.e;return ln(i,c)&&ln(i,o)&&ln(i,l)&&i>=0&&i<=24;default:return!1}}),Ha=Cn(6),bv=Cn(30),Av=Cn(29),y3=Fn(function(n,e,r,t,i,o,c,l){n:for(;;)if(l.b){var s=l.a,m=l.b;switch(s.$){case 0:var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 3:var A=s.a,b=s.b;if(a(Ce,A,r)){var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else{var I=b+(" "+n),F=e,V=a(yn,A,r),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}case 1:var h=s.a,I=n,F=e,V=r,R=t,Q=i,G=a(w,h,o),U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 4:var A=s.a,_=s.b;if(a(Ce,A,r)){var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else if(a(w3,A,_)){var I=Ut(_)+(" "+n),F=e,V=a(yn,A,r),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else{var I=Ut(_)+(" "+n),F=e,V=a(yn,A,r),R=t,Q=a(w,_,i),G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}case 10:var A=s.a,x=s.b,I=n,F=e,V=a(yn,A,r),R=a(Im,t,x),Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 7:var P=s.a;if(a(Ce,Ha,r)){var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else switch(P.$){case 0:var S=P.a,I=p.fN+(" width-px-"+k(S))+(" "+n),F=e,V=a(yn,Ha,r),R=t,Q=a(w,d(Le,"width-px-"+k(S),"width",k(S)+"px"),i),G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 1:var I=n+(" "+p.d_),F=e,V=a(yn,Fm,a(yn,Ha,r)),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 2:var T=P.a;if(T===1){var I=n+(" "+p.d$),F=e,V=a(yn,qt,a(yn,Ha,r)),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else{var I=n+(" "+(p.fO+(" width-fill-"+k(T)))),F=e,V=a(yn,qt,a(yn,Ha,r)),R=t,Q=a(w,d(Le,p.f3+("."+(p.ai+(" > "+M("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}default:var H=wl(P),rn=H.a,on=H.b,Vn=H.c,I=n+(" "+on),F=e,V=a(gv,rn,a(yn,Ha,r)),R=t,Q=q(Vn,i),G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}case 8:var cn=s.a;if(a(Ce,Wa,r)){var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else switch(cn.$){case 0:var S=cn.a,$n=k(S)+"px",tn="height-px-"+$n,I=p.ep+(" "+(tn+(" "+n))),F=e,V=a(yn,Wa,r),R=t,Q=a(w,d(Le,tn,"height ",$n),i),G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 1:var I=p.c2+(" "+n),F=e,V=a(yn,jm,a(yn,Wa,r)),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 2:var T=cn.a;if(T===1){var I=p.c3+(" "+n),F=e,V=a(yn,Ot,a(yn,Wa,r)),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else{var I=n+(" "+(p.eq+(" height-fill-"+k(T)))),F=e,V=a(yn,Ot,a(yn,Wa,r)),R=t,Q=a(w,d(Le,p.f3+("."+(p.az+(" > "+M("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}default:var K=_l(cn),rn=K.a,on=K.b,Vn=K.c,I=n+(" "+on),F=e,V=a(gv,rn,a(yn,Wa,r)),R=t,Q=q(Vn,i),G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}case 2:var _n=s.a;switch(_n.$){case 0:var I=n,F=a(Aa,"main",e),V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 1:var I=n,F=a(Aa,"nav",e),V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 2:var I=n,F=a(Aa,"footer",e),V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 3:var I=n,F=a(Aa,"aside",e),V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 4:var wn=_n.a;if(wn<=1){var I=n,F=a(Aa,"h1",e),V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else if(wn<7){var I=n,F=a(Aa,"h"+k(wn),e),V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else{var I=n,F=a(Aa,"h6",e),V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}case 9:var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 8:var I=n,F=e,V=r,R=t,Q=i,G=a(w,a(zt,"role","button"),o),U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 5:var Bn=_n.a,I=n,F=e,V=r,R=t,Q=i,G=a(w,a(zt,"aria-label",Bn),o),U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 6:var I=n,F=e,V=r,R=t,Q=i,G=a(w,a(zt,"aria-live","polite"),o),U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;default:var I=n,F=e,V=r,R=t,Q=i,G=a(w,a(zt,"aria-live","assertive"),o),U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}case 9:var Tn=s.a,gn=s.b,Vn=function(){switch(gn.$){case 3:return i;case 2:return gn.a,i;case 0:return gn.a,i;default:var hc=gn.a;return q(i,hc.id)}}(),I=n,F=e,V=r,R=t,Q=Vn,G=o,U=d(b3,Tn,gn,c),J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n;case 6:var ee=s.a;if(a(Ce,bv,r)){var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else{var I=A3(ee)+(" "+n),F=e,V=function(An){switch(ee){case 1:return a(yn,xm,An);case 2:return a(yn,Sm,An);default:return An}}(a(yn,bv,r)),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}default:var ki=s.a;if(a(Ce,Av,r)){var I=n,F=e,V=r,R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}else{var I=_3(ki)+(" "+n),F=e,V=function(An){switch(ki){case 1:return a(yn,Mm,An);case 2:return a(yn,ym,An);default:return An}}(a(yn,Av,r)),R=t,Q=i,G=o,U=c,J=m;n=I,e=F,r=V,t=R,i=Q,o=G,c=U,l=J;continue n}}}else{var u=hu(t);if(u.$===1)return{aM:a(w,Fe(n),o),aP:c,aU:r,aW:e,id:i};var f=u.a;return{aM:a(w,Fe(n+(" "+f)),o),aP:c,aU:r,aW:e,id:a(w,Em(t),i)}}}),Bm={$:0},S3=Bm,Jn=en(function(n,e,r,t){return d(h3,n,t,ii(y3,Bg(n),e,Dr,S3,L,L,kg,Nn(r)))}),Er=en(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),x3={f7:N,gf:N,h$:B({a5:0,cc:C(Er,155/255,203/255,1,1),fa:y(0,0),bl:3})},M3=function(n){var e=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.g5;return c.$===1?W(i,{g5:B(o)}):i;case 1:var l=t.a,u=i.gU;return u.$===1?W(i,{gU:B(l)}):i;default:var f=t.a,s=i.e6;return s.$===1?W(i,{e6:B(f)}):i}}),r=function(t){return{gU:function(){var i=t.gU;if(i.$===1)return x3;var o=i.a;return o}(),g5:function(){var i=t.g5;if(i.$===1)return 1;var o=i.a;return o}(),e6:function(){var i=t.e6;if(i.$===1)return 0;var o=i.a;return o}()}};return r(d(le,e,{gU:N,g5:N,e6:N},n))},C3=v(function(n,e){switch(e.$){case 0:var t=e.a;return t(de);case 1:var r=e.a.id,t=e.a.g6;return a(t,n(r),de);case 2:var i=e.a;return Yt(i);default:return Yt("")}}),P3=z(function(n,e,r){var t=M3(n),i=function(){var o=t.e6;return o===1?wm(t):Lg(t)}();return a(C3,i,C(Jn,de,Pe,e,Wn($([r]))))}),Zt=z(function(n,e,r){return{$:4,a:n,b:e,c:r}}),Vm=v(function(n,e){return{$:1,a:n,b:e}}),Rm=function(n){return{$:2,a:n}},L3={$:1},Pn=v(function(n,e){return{$:4,a:n,b:e}}),zc=function(n){return{$:3,a:n}},Nm=Cn(8),Wm=Cn(14),Hm=Cn(5),Qm=Cn(4),lt=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return jn(e)+("-"+(jn(r)+("-"+(jn(t)+("-"+jn(i))))))},Xi=W1,kc=N1,Gm=v(function(n,e){return q(e,function(){switch(n.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=n.a;return a(fn,"-",kc(Xi(r)));case 4:var r=n.a;return n.b,a(fn,"-",kc(Xi(r)));default:var r=n.a.hw;return a(fn,"-",kc(Xi(r)))}}())}),z3=function(){var n=$([zc("Open Sans"),zc("Helvetica"),zc("Verdana"),L3]);return $([a(Pn,Nm,d(Zt,"bg-"+lt(C(Er,1,1,1,0)),"background-color",C(Er,1,1,1,0))),a(Pn,Wm,d(Zt,"fc-"+lt(C(Er,0,0,0,1)),"color",C(Er,0,0,0,1))),a(Pn,Qm,Rm(20)),a(Pn,Hm,a(Vm,d(Gn,Gm,"font-",n),n))])}(),k3=z(function(n,e,r){var t=n.hG;return d(P3,t,a(w,Qn(a(fn," ",$([p.hU,p.f3,p.h3]))),q(z3,e)),r)}),Um={$:3},Jm=function(n){return{$:2,a:n}},yl=Bp,wu=v(function(n,e){switch(e.$){case 1:var r=e.a;return dl({g6:v(function(o,c){return a(yl,n,a(r.g6,o,c))}),id:r.id});case 0:var t=e.a;return Gt(a(Mr,yl(n),t));case 2:var i=e.a;return Jm(i);default:return Um}}),yu=wu,T3=yl,D3=function(n){return{$:0,a:n}},kn=D3,E3=Rp,zn=E3,Om={$:1},mi=function(n){return{$:5,a:n}},Su=mi(0),Me=z(function(n,e,r){return C(Er,n/255,e/255,r/255,1)}),dt=d(Me,0,0,0),I3=$r("d"),j3=$r("fill"),F3=$r("height"),qm=yf("http://www.w3.org/2000/svg"),B3=qm("path"),V3=qm("svg"),R3=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return{f0:i,gb:t,gX:r,hP:e}},N3=function(n){var e=R3(n);return"rgba("+(k(Hn(e.hP*255))+(","+k(Hn(e.gX*255))+(","+k(Hn(e.gb*255))+(","+mn(e.f0)+")"))))},W3=$r("viewBox"),H3=$r("width"),Xa=z(function(n,e,r){return a(V3,$([W3("0 0 100 100"),H3(k(n)),F3(k(n))]),$([a(B3,$([I3(r),j3(N3(e))]),L)]))}),Q3={$:1},ie=Q3,xu=function(n){return{$:7,a:n}},nn=xu,Ln=v(function(n,e){return C(Jn,de,Pe,a(w,nn(ie),a(w,bn(ie),n)),Wn($([e])))}),Ym=function(n){return{$:2,a:n}},un=Ym(1),Ca={gJ:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gW:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",g1:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hJ:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hL:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hO:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",h5:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",iD:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",iG:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fR:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},rt={da:260,bI:54},pe=function(n){return a(Pn,Nm,d(Zt,"bg-"+lt(n),"background-color",n))},G3=Cn(28),ur=function(n){return a(Pn,G3,d(Zt,"bc-"+lt(n),"border-color",n))},Ki=1,Xn=v(function(n,e){return C(Jn,Ki,Pe,a(w,Qn(p.gy+(" "+p.bx)),a(w,bn(ie),a(w,nn(ie),n))),Wn(e))}),U3=d(Me,83,83,83),Zm=en(function(n,e,r,t){return C(Er,n/255,e/255,r/255,t)}),Zo=C(Zm,56,56,56,.25),he=Um,La=Kn(function(n,e,r,t,i){return{$:7,a:n,b:e,c:r,d:t,e:i}}),za=Cn(2),cr=function(n){var e=n;return a(Pn,za,D(La,"p-"+k(n),e,e,e,e))},Mu=z(function(n,e,r){return{$:5,a:n,b:e,c:r}}),Cu=Cn(3),Xm=v(function(n,e){return"spacing-"+(k(n)+("-"+k(e)))}),ce=function(n){return a(Pn,Cu,d(Mu,a(Xm,n,n),n,n))},J3=C(Zm,0,0,0,0),O3=function(n){return{$:4,a:n}},at=0,Qr=v(function(n,e){return C(Jn,at,Pe,a(w,Qn(p.bx+(" "+p.aA)),a(w,nn(ie),a(w,bn(ie),n))),Wn(e))}),q3=function(n){switch(n.$){case 0:var e=n.a;return e;case 1:var r=n.a;return r.g6(a(wm,{gU:{f7:N,gf:N,h$:N},g5:1,e6:0},r.id));case 2:var t=n.a;return Ao(ia(t));default:return Ao(ia(""))}},Y3=v(function(n,e){return q3(n(e))}),Z3=Vp,X3=v(function(n,e){return Gt(d(Z3,Y3,n,e))}),De=function(n){return a(Pn,Wm,d(Zt,"fc-"+lt(n),"color",n))},pt=d(Me,195,195,195),er=v(function(n,e){return{$:3,a:n,b:e}}),Pu=Cn(13),K3=a(er,Pu,p.is),Km=Cn(20),si=a(er,Km,p.hZ),Cr=function(n){return a(Pn,Qm,Rm(n))},Lu=a(er,Pu,p.ge),Sl=v(function(n,e){if(e.$===-2)return Sr;var r=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return D(hn,r,t,a(n,t,i),a(Sl,n,o),a(Sl,n,c))}),di=v(function(n,e){if(ln(n,e)){var r=n;return a(Pn,za,D(La,"p-"+k(n),r,r,r,r))}else{var t=e,i=n;return a(Pn,za,D(La,"p-"+(k(n)+("-"+k(e))),t,i,t,i))}}),xe=function(n){return Jm(n)},n2=function(n){return d(Ho,z(function(e,r,t){return a(w,r,t)}),L,n)},e2=v(function(n,e){return{$:3,a:n,b:e}}),r2=v(function(n,e){return{$:2,a:n,b:e}}),a2=v(function(n,e){return{$:0,a:n,b:e}}),t2=v(function(n,e){return{$:1,a:n,b:e}}),sa=en(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),zu=C(sa,0/255,0/255,0/255,1),pi=function(n){return{$:6,a:n}},i2=pi(0),hi=function(n){return{$:2,a:n}},o2={$:6},ku=hi(o2),Tu=z(function(n,e,r){if(e.$===1)return e.a,C(Jn,Ki,sr("label"),n,Wn($([r])));var t=e.a,i=e.b,o=e.c,c=C(Jn,de,Pe,i,Wn($([o])));switch(t){case 2:return C(Jn,Ki,sr("label"),a(w,Qn(p.cn),n),Wn($([c,r])));case 3:return C(Jn,Ki,sr("label"),a(w,Qn(p.cn),n),Wn($([r,c])));case 0:return C(Jn,at,sr("label"),a(w,Qn(p.cn),n),Wn($([r,c])));default:return C(Jn,at,sr("label"),a(w,Qn(p.cn),n),Wn($([c,r])))}}),Mo=zt,xr=mi(1),ns="Enter",c2=function(n){return{$:5,a:n}},Du=function(n){if(n.$===1){var e=n.a;return hi(c2(e))}else return Ve},Eu=function(n){return n.$===1},l2=function(n){return{$:0,a:n}},Iu=Sf,ju=v(function(n,e){return a(Iu,n,l2(e))}),es=function(n){return a(ju,"click",Yn(n))},Fu=K1,u2=function(n){return{$:2,a:n}},$2=v(function(n,e){return a(Iu,n,u2(e))}),rs=function(n){var e=function(t){var i=n(t);if(i.$===1)return Fu("No key matched");var o=i.a;return Yn(o)},r=a(an,e,a(O,"key",aa));return Mn(a($2,"keydown",a(po,function(t){return y(t,!0)},r)))},as=Cn(21),Ir=a(er,as,p.gB),ts=" ",is=function(n){return a($r,"tabIndex",k(n))},v2=a(Mr,Mn,is),os=v(function(n,e){var r=e.c8,t=e.g7,i=e.gr,o=e.fb,c=q($([Eu(r)?Ve:ce(6),Mn(es(o(!i))),ku,rs(function(l){return ln(l,ns)||ln(l,ts)?B(o(!i)):N}),v2(0),Ir,i2,nn(un)]),n);return d(Tu,a(w,Mn(a(Mo,"role","checkbox")),a(w,Mn(a(Mo,"aria-checked",i?"true":"false")),a(w,Du(r),c))),r,C(Jn,de,Pe,$([xr,bn(un),nn(ie)]),Wn($([t(i)]))))}),f2=z(function(n,e,r){return q(a(Qt,n-Ma(r),Oo(e)),r)}),Xt=A1,cs=function(n){var e=function(r){return r<10?k(r):Oo(fm(87+r))};return n<16?e(n):q(cs(n/16|0),e(a(Xt,16,n)))},m2=a(Dn,cs,a(f2,2,"0")),Bu=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return{f0:i,gb:t,gX:r,hP:e}},s2=function(n){var e=Bu(n),r=e.hP,t=e.gX,i=e.gb;return a(fn,"",a(w,"#",a(Y,a(Dn,Hn,m2),$([r*255,t*255,i*255]))))},Vu=Cn(12),ls=a(er,Vu,p.ik),Co=pi(1),Je=_1,ve=function(n){return n*Je/180},d2=function(n){return{$:1,a:n}},Xo=v(function(n,e){return{$:10,a:n,b:e}}),p2=Cn(26),us=function(n){return a(Xo,p2,d2(-n))},qr=z(function(n,e,r){return C(Er,n,e,r,1)}),xl=Er,h2=v(function(n,e){return{$:4,a:n,b:e}}),g2=Cn(24),b2=function(n){return a(Xo,g2,a(h2,j(0,0,1),n))},A2=Cn(17),qe=function(n){return a(Pn,A2,d(Le,"br-"+k(n),"border-radius",k(n)+"px"))},_2=function(n){return et($([n.eu?"box-inset":"box-",jn(n.fa.a)+"px",jn(n.fa.b)+"px",jn(n.a5)+"px",jn(n.bl)+"px",lt(n.cc)]))},w2=Cn(19),y2=function(n){var e={a5:n.a5,cc:n.cc,eu:!1,fa:n.fa,bl:n.bl};return a(Pn,w2,d(Le,_2(e),"box-shadow",pl(e)))},Ml=v(function(n,e){return{$:12,a:n,b:e}}),Cl=Cn(0),S2=function(n){return n?a(Pn,Cl,a(Ml,"transparent",1)):a(Pn,Cl,a(Ml,"visible",0))},no=d(qr,1,1,1),Ru=Kn(function(n,e,r,t,i){return{$:6,a:n,b:e,c:r,d:t,e:i}}),ht=function(n){return a(Pn,Yo,D(Ru,"b-"+k(n),n,n,n,n))},x2=v(function(n,e){return a(Pn,Yo,D(Ru,"b-"+(k(n)+("-"+k(e))),e,n,e,n))}),gi=function(n){var e=n.b8,r=n.cN,t=n.eB,i=n.fs;return ln(r,e)&&ln(t,i)?ln(r,i)?ht(r):a(x2,t,r):a(Pn,Yo,D(Ru,"b-"+(k(r)+("-"+(k(i)+("-"+(k(e)+("-"+k(t))))))),r,i,e,t))},$s=function(n){return a(Ln,$([Qn("focusable"),nn(kn(14)),bn(kn(14)),De(no),xr,Cr(9),ls,qe(3),ur(n?d(qr,59/255,153/255,252/255):d(qr,211/255,211/255,211/255)),y2({a5:1,cc:n?C(xl,238/255,238/255,238/255,0):d(qr,238/255,238/255,238/255),fa:y(0,0),bl:1}),pe(n?d(qr,59/255,153/255,252/255):no),ht(n?0:1),_o(a(Ln,$([ur(no),bn(kn(6)),nn(kn(9)),b2(ve(-45)),Co,xr,us(1),S2(!n),gi({b8:2,eB:2,fs:0,cN:0})]),he))]),he)},M2=nr("htmlFor"),C2=v(function(n,e){if(e.$)return N;var r=e.a;return n(r)}),Po=v(function(n,e){if(e.$){var t=e.a;return _e(t)}else{var r=e.a;return n(r)}}),vs=en(function(n,e,r,t){return{hc:e,hs:n,hz:r,ie:t}}),P2=m0,L2=q1,z2=v(function(n,e){if(e.$)return _e(n);var r=e.a;return Zn(r)}),k2=f0,T2=function(n){return a(k2,{gn:!1,hv:!1},n)},oa=function(n){if(n.b){var e=n.a;return n.b,B(e)}else return N},D2=v(function(n,e){if(e.$){var t=e.a;return _e(t)}else{var r=e.a;return Zn(n(r))}}),E2=function(n){return{$:2,a:n}},I2=function(n){return{$:0,a:n}},j2=function(n){return{$:1,a:n}},Tc=v(function(n,e){return gr(e)-gr(n)}),Dc=z(function(n,e,r){var t=gr(r);return sn(gr(n),t)<1&&sn(t,gr(e))<1}),F2=v(function(n,e){var r=function(i){return sn(i,n)<0?Zn(i):_e(j2(e))},t=d(Dc,"0","9",e)?Zn(a(Tc,"0",e)):d(Dc,"a","z",e)?Zn(10+a(Tc,"a",e)):d(Dc,"A","Z",e)?Zn(10+a(Tc,"A",e)):_e(I2(e));return a(Po,r,t)}),fs=v(function(n,e){var r=mt(e);if(r.$===1)return Zn(0);var t=r.a,i=t.a,o=t.b;return a(Po,function(c){return a(Po,function(l){return Zn(c+l*n)},a(fs,n,o))},a(F2,n,i))}),B2=v(function(n,e){return 2<=n&&n<=36?a(fs,n,fl(e)):_e(E2(n))}),V2=B2(16),R2=z(function(n,e,r){return C(sa,n,e,r,1)}),N2=en(function(n,e,r,t){return C(sa,n,e,r,t)}),ca=b1,W2=v(function(n,e){var r=a(ca,10,n);return Hn(e*r)/r}),H2=function(){var n="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",e=function(r){var t=vm(r);if(t.b&&!t.b.b){var i=t.a;return L2($([i,i]))}else return r};return a(Dn,Xi,a(Dn,function(r){return a(Rn,function(t){return d(P2,1,t,r)},T2(n))},a(Dn,C2(oa),a(Dn,Rn(function(r){return r.ie}),a(Dn,Rn(Ze(oe)),a(Dn,z2("Parsing hex regex failed"),Po(function(r){var t=a(Y,a(Dn,e,a(Dn,V2,D2(Tr))),r);n:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,s=f.a.a;return Zn(C(N2,i/255,c/255,u/255,a(W2,2,s/255)))}else break n;else{var i=t.a.a,m=t.b,c=m.a.a,b=m.b,u=b.a.a;return Zn(d(R2,i/255,c/255,u/255))}else break n;return _e("Parsing ints from hex failed")})))))))}(),Q2=nr("id"),G2=Ke("input"),U2=Ke("label"),Nu=z(function(n,e,r){return{$:0,a:n,b:e,c:r}}),J2=Nu(0),O2=nr("name"),q2=function(n){return y(n,!0)},Y2=function(n){return{$:1,a:n}},Z2=v(function(n,e){return a(Iu,n,Y2(e))}),X2=v(function(n,e){return d(le,O,e,n)}),K2=a(X2,$(["target","value"]),aa),Wu=function(n){return a(Z2,"input",a(po,q2,a(po,n,K2)))},nb=a(er,Vu,p.ip),ms=a(er,Vu,p.it),Ko=function(n){return a(_m,5,n)},bi=function(n){return a(Pn,Hm,a(Vm,d(Gn,Gm,"ff-",n),n))},eb=d(Me,195,195,195),ss=d(Me,69,69,69),rb=Nu(2),ab={$:2},Ai=ab,tb=Cn(32),ib=Cn(31),_v=function(n){return d(le,v(function(e,r){if(r.$)if(e.$===8){var i=e.a;return B(i)}else return N;else{var t=r.a;return B(t)}}),N,n)},ob=v(function(n,e){return a(Sn,e,d(le,v(function(r,t){if(t.$)if(r.$===4&&r.b.$===5){var o=r.b,i=o.b,c=o.c;return B(y(i,c))}else return N;else{var i=t.a;return B(i)}}),N,n))}),wv=function(n){return d(le,v(function(e,r){if(r.$)if(e.$===7){var i=e.a;return B(i)}else return N;else{var t=r.a;return B(t)}}),N,n)},ds=Cn(33),cb=nr("max"),lb=nr("min"),ub=v(function(n,e){return a(Pn,Cu,d(Mu,a(Xm,n,e),n,e))}),$b=function(n){return a(nr,"step",n)},Hu=nr("type"),Qu=nr("value"),ut=Ym,ps=Qp,hs=v(function(n,e){switch(e.$){case 0:return Ve;case 2:var r=e.a;return hi(r);case 6:var t=e.a;return pi(t);case 5:var i=e.a;return mi(i);case 7:var t=e.a;return xu(t);case 8:var t=e.a;return su(t);case 3:var t=e.a,i=e.b;return a(er,t,i);case 4:var o=e.a,c=e.b;return a(Pn,o,c);case 9:var l=e.a,u=e.b;return a(du,l,a(wu,n,u));case 1:var f=e.a;return Mn(a(ps,n,f));default:var s=e.a,m=e.b;return a(Xo,s,m)}}),vb=z(function(n,e,r){return a(Qr,$([nn(un),bn(a(Sn,un,r)),xr]),$([a(Ln,$([nn(ut(Hn(n*1e4)))]),he),a(Ln,a(w,xr,a(Y,hs(st),e)),he),a(Ln,$([nn(ut(Hn(xn(1-n)*1e4)))]),he)]))}),fb=z(function(n,e,r){return a(Xn,$([bn(un),nn(a(Sn,un,r)),Co]),$([a(Ln,$([bn(ut(Hn(xn(1-n)*1e4)))]),he),a(Ln,a(w,Co,a(Y,hs(st),e)),he),a(Ln,$([bn(ut(Hn(n*1e4)))]),he)]))}),gs=v(function(n,e){var r=wv(n),t=_v(n),i=function(){var P=y(r,t);n:for(;;)if(P.a.$===1){if(P.b.$===1)return P.a,P.b,!1;break n}else if(!P.a.a.$&&!P.b.$)switch(P.b.a.$){case 0:var S=P.a.a.a,T=P.b.a.a;return sn(T,S)>0;case 2:return!0;default:break n}else break n;return!1}(),o=(e.cO-e.cx)/(e.cw-e.cx),c=e.iy,l=c,u=_v(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var P=u.a.a;return k(P)+"px"}(),s=wv(l),m=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var P=s.a.a;return k(P)+"px"}(),b="thmb-"+(m+("-"+f)),h=$([a(dn,"width",m),a(dn,"height",f)]),_=a(ob,n,y(5,5)),A=_.a,x=_.b;return d(Tu,$([Eu(e.c8)?Ve:a(ub,A,x),ku,nn(function(){if(r.$===1)return un;if(r.a.$){var P=r.a;return P}else return ie}()),bn(function(){if(t.$===1)return ie;if(t.a.$){var P=t.a;return P}else return ie}())]),e.c8,a(Qr,$([nn(a(Sn,un,r)),bn(a(Sn,kn(20),t))]),$([C(Jn,de,sr("input"),$([Du(e.c8),a(Pn,tb,a(Ft,'input[type="range"].'+(b+"::-moz-range-thumb"),h)),a(Pn,ds,a(Ft,'input[type="range"].'+(b+"::-webkit-slider-thumb"),h)),a(Pn,ib,a(Ft,'input[type="range"].'+(b+"::-ms-thumb"),h)),Mn(Fe(b+" ui-slide-bar focusable-parent")),Mn(Wu(function(P){var S=$m(P);if(S.$===1)return e.fb(0);var T=S.a;return e.fb(T)})),Mn(Hu("range")),Mn($b(function(){var P=e.cL;if(P.$===1)return"any";var S=P.a;return mn(S)}())),Mn(lb(mn(e.cx))),Mn(cb(mn(e.cw))),Mn(Qu(mn(e.cO))),i?Mn(a(Mo,"orient","vertical")):Ve,nn(i?a(Sn,kn(20),t):a(Sn,un,r)),bn(i?a(Sn,un,r):a(Sn,kn(20),t))]),Wn(L)),a(Ln,a(w,nn(a(Sn,un,r)),a(w,bn(a(Sn,kn(20),t)),q(n,$([Ko(i?d(fb,o,a(w,Qn("focusable-thumb"),l),r):d(vb,o,a(w,Qn("focusable-thumb"),l),t))])))),he)])))}),mb=d(qr,.5,.5,.5),bs=oe,yv=function(n){var e=n.c9,r=n.cO,t=n.cx,i=n.cw,o=n.cL,c=n.fb;return a(Ln,$([nn(un)]),a(gs,$([ce(2),Ko(a(Ln,$([nn(un),bn(kn(16)),xr,pe(ss),qe(4)]),he))]),{c8:a(rb,L,a(Qr,$([nn(un)]),$([a(Ln,$([nb]),xe(e)),a(Ln,$([nn(un),ms,bi($([Ai]))]),xe(mn(r)))]))),cw:i,cx:t,fb:c,cL:B(o),iy:bs($([nn(kn(12)),bn(kn(12)),qe(4),ht(0),ur(mb),pe(eb)])),cO:r}))},Gu=v(function(n,e){if(e.$)return n;var r=e.a;return r}),sb=v(function(n,e){switch(e.$){case 3:var c=e.a;return a(os,L,{gr:c,g7:$s,c8:a(J2,L,xe(n)),fb:e2(n)});case 0:var r=e.a,i=r.a,o=r.b,c=e.b;return yv({c9:n,cw:o,cx:i,fb:a2(n),cL:.001*(o-i),cO:c});case 1:var t=e.a,i=t.a,o=t.b,c=e.b;return yv({c9:n,cw:o,cx:i,fb:a(Dn,Hn,t2(n)),cL:1,cO:c});default:var c=e.a;return a(Ln,$([nn(un)]),Or(a(ta,L,$([a(ta,$([a(zn,"margin-bottom","6px")]),$([a(U2,$([M2(n)]),$([tr(n)]))])),a(G2,$([Hu("color"),a(zn,"width","100%"),a(zn,"height","26px"),a(zn,"padding","0px"),Q2(n),O2(n),Wu(function(l){return a(r2,n,a(Gu,zu,H2(l)))}),Qu(s2(c))]),L)]))))}}),Lo=d(Me,255,255,255),db=function(n){return a(Xn,$([nn(un),ce(8),a(di,0,14),gi({b8:1,eB:0,fs:0,cN:0}),ur(Zo)]),$([a(Ln,$([Cr(16),Lu,De(Lo)]),xe(n.hw)),a(Xn,$([nn(un),ce(6)]),n2(a(Sl,sb,n.aQ)))]))},pb=function(n){return a(Xn,$([nn(un),bn(un),De(pt),Cr(12),K3,si]),a(Y,db,n))},hb=X3(pb),gb=function(n){return a(Xn,$([nn(un),bn(un)]),$([a(Qr,$([ce(14),nn(un)]),L),a(yu,O3,hb(Ea(n).gx))]))},bb=function(n){return{$:6,a:n}},Ab=en(function(n,e,r,t){return"pad-"+(k(n)+("-"+(k(e)+("-"+(k(r)+("-"+k(t)))))))}),As=function(n){var e=n.cN,r=n.fs,t=n.b8,i=n.eB;if(ln(e,r)&&ln(e,t)&&ln(e,i)){var o=e;return a(Pn,za,D(La,"p-"+k(e),o,o,o,o))}else return a(Pn,za,D(La,C(Ab,e,r,t,i),e,r,t,i))},_b=function(n){return{$:0,a:n}},wb=function(n){return{$:1,a:n}},_s=wb,yb=function(n){var e=n.b._;return yr(e)},zo=d(Me,255,60,0),Sb=function(n){var e=n.b._;n.b.p;var r=n.b.aq;return yr(e)+1+yr(r)},xb=function(n){var e=y(yb(n),Sb(n)-1),r=e.a,t=e.b;return a(Ln,$([nn(un),xr]),a(gs,$([Ko(a(Qr,$([nn(un),bn(kn(4)),xr,pe(ss),qe(2)]),$([a(Ln,$([nn(ut(r)),bn(un),pe(zo),qe(2)]),he),a(Ln,$([nn(ut(t-r))]),he)])))]),{c8:_s(""),cw:t,cx:0,fb:a(Dn,Hn,_b),cL:B(1),iy:bs($([nn(kn(12)),bn(kn(12)),qe(6),pe(zo)])),cO:r}))},ws=pi(2),eo=d(Me,220,220,220),Mb=function(n){var e=n.a,r=function(){return e.$?$([De(eo)]):$([De(zo)])}();return a(Ln,q(r,$([Cr(14),ws,ms,bi($([Ai]))])),xe(a(pm,3,Ea(n).aa)))},Cb=function(n){n.a;var e=n.b._;return a(Rn,function(r){return Hn(60/(Ea(n).aa-r))},a(Rn,a(Dn,so,function(r){return r.aa}),oa(a(mu,59,e))))},Pb=function(n){var e=Cb(n);if(e.$===1)return he;var r=e.a;return a(Ln,$([Cr(14),De(pt),bi($([Ai]))]),xe(k(r)+" FPS"))},Sv={$:1},Lb={$:3},zb={$:2},kb={$:8},Tb=Jl,ys=v(function(n,e){return a(Xl,n,Tb(e))}),Db=ys("disabled"),Pl=function(n){if(n.$===4&&n.b.$===11&&!n.b.a){var e=n.b;return e.a,!0}else return!1},Eb=function(n){return a(Rr,Pl,n)?Ve:Qn("focusable")},Kt=a(Mr,Mn,es),Uu=v(function(n,e){var r=e.hB,t=e.c8;return C(Jn,de,Pe,a(w,nn(ie),a(w,bn(ie),a(w,Qn(p.cg+(" "+(p.aA+(" "+(p.h_+(" "+p.e9)))))),a(w,Ir,a(w,Eb(n),a(w,hi(kb),a(w,Mn(is(0)),function(){if(r.$===1)return a(w,Mn(Db(!0)),n);var i=r.a;return a(w,Kt(i),a(w,rs(function(o){return ln(o,ns)||ln(o,ts)?B(i):N}),n))}()))))))),Wn($([t])))}),xv=v(function(n,e){return a(Uu,L,{c8:a(Ln,$([nn(kn(36)),cr(3),De(e),ls,Cr(12),Lu,ur(e),ht(1),qe(4)]),xe("REC")),hB:B(n)})}),Mv=z(function(n,e,r){return a(Uu,L,{c8:Or(d(Xa,20,r,n)),hB:B(e)})}),Ib=function(n){var e=n.a;n.b._,n.b.p;var r=n.b.aq;return a(Qr,L,$([a(Ln,$([nn(kn(40))]),function(){switch(e.$){case 0:return a(xv,Sv,zo);case 1:return a(xv,zb,eo);default:return he}}()),a(Ln,$([nn(kn(28))]),function(){switch(e.$){case 0:return he;case 1:return kr(r)?he:d(Mv,Ca.hL,Lb,eo);default:return d(Mv,Ca.hJ,Sv,eo)}}())]))},jb=function(n){return a(Xn,$([nn(un)]),$([xb(n),a(Qr,$([nn(un),ce(14),a(di,0,6),xr]),$([Ib(n),Pb(n),Mb(n)]))]))},Fb=function(n){return a(Xn,$([nn(un),ce(14),As({b8:20,eB:0,fs:0,cN:0}),gi({b8:1,eB:0,fs:0,cN:0}),ur(Zo)]),$([a(Ln,$([Cr(16),Lu,De(pt)]),xe("Time Travel")),a(yu,bb,jb(n))]))},Bb=v(function(n,e){return a(Xn,$([Ea(e).cI.iK>600?pe(U3):pe(J3),gi({b8:0,eB:0,fs:1,cN:0}),ur(Zo),nn(kn(rt.da)),bn(un)]),$([function(){return n?he:a(Xn,$([nn(un),bn(un),cr(14),ce(14)]),$([Fb(e),gb(e)]))}()]))}),Vb=function(n){return{$:3,a:n}},Cv=mi(2),Rb=d(Me,232,78,50),Nb=d(Me,48,48,48),Wb=function(n){return a(nr,"href",Hp(n))},Hb=$r("rel"),Qb=nr("target"),Pv=v(function(n,e){var r=e.fG,t=e.c8;return C(Jn,de,sr("a"),a(w,Mn(Wb(r)),a(w,Mn(Hb("noopener noreferrer")),a(w,Mn(Qb("_blank")),a(w,nn(ie),a(w,bn(ie),a(w,Qn(p.cg+(" "+(p.aA+(" "+p.eJ)))),n)))))),Wn($([t])))}),kt=nr("title"),Gb=d(Me,31,161,242),Ub=function(n){var e=z(function(o,c,l){var u=ln(c,n)?Lo:Nb;return a(Ln,$([Be(kt(o)),Kt(Vb(c)),Ir,cr(7)]),Or(d(Xa,40,u,l)))}),r=a(Xn,$([Su]),$([d(e,"Configurations",0,Ca.h5)])),t=a(Xn,L,$([a(Pv,$([Be(kt("Twitter")),Cv,Ir,cr(7)]),{c8:Or(d(Xa,40,Gb,Ca.iD)),fG:"https://twitter.com/AzizErkalSelman"}),a(Pv,$([Be(kt("Source Code")),Cv,Ir,cr(7)]),{c8:Or(d(Xa,40,Rb,Ca.gW)),fG:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Ln,$([nn(kn(rt.bI)),cr(4),Kt(Om),gi({b8:1,eB:0,fs:0,cN:0}),ur(Zo),Ir,Be(kt("Activate Distraction Free Mode"))]),Or(d(Xa,46,Lo,Ca.fR)));return a(Xn,$([nn(kn(rt.bI)),bn(un),si,pe(dt)]),$([i,r,t]))},Jb=function(n){var e=a(Ln,$([nn(kn(rt.bI)),Su,cr(4),Kt(Om),Ir,Be(kt("Deactivate Distraction Free Mode (A)"))]),Or(d(Xa,46,dt,Ca.fR)));return n.bA?e:a(Qr,$([nn(kn(rt.bI+rt.da)),bn(un)]),$([Ub(n.bs),a(Bb,n.bs,n.U)]))},Ob=z(function(n,e,r){var t=Mg(r.U),i=Ea(r.U);return d(k3,{hG:$([Pg({f7:N,gf:N,h$:N})])},$([nn(kn(Wt(i.cI.iK))),bn(kn(Wt(i.cI.g2))),Be(a(zn,"-webkit-font-smoothing","antialiased")),Be(a(zn,"pointer-events","none")),Be(a(zn,"touch-action","none")),Be(a(zn,"user-select","none")),_o(a(yu,Sg,a(e,i,t))),_o(Jb(r))]),Or(a(T3,Ao(xg),a(n,i,t))))}),qb=Ee(function(n,e,r,t,i,o){var c=v(function(u,f){return y(C(gg,e,o,u,f),X$)}),l=function(u){var f=a(rm,r,u.hj);return y({bs:0,bA:!0,U:a(bg,f,t),dZ:0},X$)};return Nh({hd:l,$8:yg,iF:c,iH:a(Ob,n,i)})}),ko={$:0},Ss=vp,xs=Kn(function(n,e,r,t,i){return{ea:i,eE:r,cr:t,dD:n,fi:e}}),ni=v(function(n,e){return{$:0,a:n,b:e}}),Lv=np,Ll=d(li,v(function(n,e){return y(n,e)}),a(O,"A1",Lv),a(O,"A2",Lv)),lr=v(function(n,e){return{$:0,a:n,b:e}}),Yb=function(){var n=function(e){switch(e){case"X":return Yn(0);case"Y":return Yn(1);case"Z":return Yn(2);default:var r=e;return Fu("Unknown constructor for type Axis: "+r)}};return a(an,n,aa)}(),Zb=function(){var n=function(e){switch(e){case"Positive":return Yn(0);case"Negative":return Yn(1);default:var r=e;return Fu("Unknown constructor for type Sign: "+r)}};return a(an,n,aa)}(),Xb=d(li,lr,a(O,"A1",Yb),a(O,"A2",Zb)),zv=d(li,ni,a(O,"A1",Ll),a(O,"A2",Xb)),br=v(function(n,e){return{hn:n,bN:e}}),Ec=d(li,br,a(O,"last",Ll),a(O,"rest",ra(Ll))),Kb=$p,Ms=ne(Kb,xs,a(O,"playerCube",zv),a(O,"playerPath",Ec),a(O,"levelEditingCube",zv),a(O,"levelEditingPath",Ec),a(O,"calculatedSolutions",ra(Ec))),nA=up,Cs=function(n){var e=z(function(r,t,i){return{s:i,m:r,p:t}});return C(nA,e,a(O,"before",ra(n)),a(O,"current",n),a(O,"after",ra(n)))},Ps=D(xs,a(ni,y(0,0),a(lr,2,0)),a(br,y(0,0),L),a(ni,y(0,0),a(lr,2,0)),a(br,y(0,0),L),L),eA=`
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
`,rA=function(n){return{s:L,m:L,p:n}},aA=a(Gu,rA(Ps),a(Ss,Cs(Ms),eA)),tA={c4:!1,c5:"",c6:"",e8:N,dP:0},nc={$:0},iA=nc,oA=function(n){return{bw:y(0,0),q:tA,a:aA,dP:ko,bS:iA}},_a=v(function(n,e){return y(n,lm(e))}),cA=z(function(n,e,r){return{aQ:r,hk:e,hw:n}}),lA=function(n){return d(Gn,v(function(e,r){var t=e.a,i=e.b;return d(nt,t,i,r)}),pu,n)},uA=z(function(n,e,r){return d(cA,n,e,lA(r))}),Ic=uA,Jr=z(function(n,e,r){var t=e.a,i=e.b;return y(n,a(um,y(t,i),r))}),jc=function(n){return n/255},wa=z(function(n,e,r){return C(sa,jc(n),jc(e),jc(r),1)}),$A=$([d(Ic,"Camera",!0,$([d(Jr,"camera distance",y(3,60),20),d(Jr,"camera azimuth",y(-Je,Je),0),d(Jr,"camera elevation",y(-Je/2,Je/2),-.15)])),d(Ic,"Parameters",!0,$([d(Jr,"cubes side length",y(.5,1),.95),d(Jr,"duration of step animation",y(.1,1),.23),d(Jr,"duration of mistake animation",y(.1,1),.5),d(Jr,"height of following lights",y(.1,8),5)])),d(Ic,"Colors and light",!0,$([d(Jr,"lumens of following lights",y(4e4,12e4),1e5),a(_a,"background color",d(wa,223,224,226)),a(_a,"color 1",d(wa,244,88,67)),a(_a,"color 2",d(wa,255,200,40)),a(_a,"path color",d(wa,244,88,67)),a(_a,"board color",d(wa,200,170,170)),a(_a,"finish mark color",d(wa,150,215,106)),a(_a,"wall color",d(wa,38,48,64))]))]),ge=function(n){var e=n;return e.p},vA=function(n){return{$:1,a:n}},ro=Ee(function(n,e,r,t,i,o){var c=o.dP;return c.$?o:W(o,{dP:vA({dp:i,bP:r,cK:e,au:n.aa,fP:t})})}),fA={$:1},mA={$:0},Fc=function(n){return{$:2,a:n}},Ls=v(function(n,e){return a(Rr,function(r){return ln(r,n)},e)}),ao=v(function(n,e){var r=e.hn,t=e.bN;return a(Ls,n,a(w,r,t))}),zl=function(n){return ln(n,a(lr,2,0))},To=v(function(n,e){var r=e.a,t=e.b;switch(n){case 0:return y(r,t+1);case 1:return y(r,t-1);case 2:return y(r-1,t);default:return y(r+1,t)}}),zs=function(n){return n?0:1},Bi=function(n){var e=n.a,r=n.b;switch(e){case 0:return a(lr,e,r);case 1:return a(lr,2,r);default:return a(lr,1,zs(r))}},Vi=function(n){var e=n.a,r=n.b;switch(e){case 0:return a(lr,2,zs(r));case 1:return a(lr,e,r);default:return a(lr,0,r)}},sA=function(n){switch(n){case 0:return a(Dn,Bi,a(Dn,Bi,Bi));case 1:return Bi;case 2:return a(Dn,Vi,a(Dn,Vi,Vi));default:return Vi}},ks=v(function(n,e){var r=e.a,t=e.b;return a(ni,a(To,n,r),a(sA,n,t))}),dA=v(function(n,e){var r=a(ks,n,e.eE),t=r.a,i=e.eE,o=i.b,c=e.cr.bN;if(c.b){var l=c.a,u=c.b;return ln(l,t)?Fc(W(e,{eE:r,cr:a(br,l,u)})):zl(o)?mA:a(ao,t,e.cr)?fA:Fc(W(e,{eE:r,cr:a(br,t,a(w,e.cr.hn,a(w,l,u)))}))}else return Fc(W(e,{eE:r,cr:a(br,t,$([e.cr.hn]))}))}),pA=en(function(n,e,r,t){var i=a(dA,n,ge(t.a));switch(i.$){case 0:return t;case 1:return t;default:var o=i.a;return ne(ro,r,e,n,!1,o,t)}}),hA=function(n){return{$:2,a:n}},kv=Kn(function(n,e,r,t,i){var o=i.dP;return o.$?i:W(i,{dP:hA({bP:t,cK:r,au:n.aa,dY:e})})}),gA=function(n){return{$:3,a:n}},bA=function(n){return{$:1,a:n}},Tv=function(n){return{$:2,a:n}},yt=function(n){return{$:0,a:n}},Do=function(n){var e=n.bN;return 1+yr(e)},Ts=v(function(n,e){var r=a(ks,n,e.dD),t=r.a,i=r.b,o=e.fi.bN;if(o.b){var c=o.a,l=o.b;if(ln(c,t))return bA(W(e,{dD:r,fi:a(br,c,l)}));if(a(ao,t,e.cr)){if(a(ao,t,e.fi))return yt(3);var u=W(e,{dD:r,fi:a(br,t,a(w,e.fi.hn,a(w,c,l)))});return ln(t,e.cr.hn)?ln(Do(u.fi),Do(u.cr))&&zl(i)?gA(u):yt(0):zl(i)?yt(1):Tv(u)}else return yt(2)}else return a(ao,t,e.cr)?Tv(W(e,{dD:r,fi:a(br,t,$([e.fi.hn]))})):yt(2)}),AA=en(function(n,e,r,t){var i=a(Ts,n,ge(t.a));switch(i.$){case 0:switch(i.a){case 3:return i.a,t;case 2:return i.a,t;case 1:return i.a,D(kv,r,1,e,n,t);default:return i.a,D(kv,r,0,e,n,t)}case 2:var o=i.a;return ne(ro,r,e,n,!1,o,t);case 1:var o=i.a;return ne(ro,r,e,n,!1,o,t);default:var o=i.a;return ne(ro,r,e,n,!0,o,t)}}),Dv=function(n){var e=n.a;return e},_A=function(n){var e=$([n.dW,n.c0,n.eB,n.fs]);n:for(;;)if(e.b)if(e.a)if(e.b.b&&!e.b.a&&e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var r=e.b,t=r.b;return t.b,B(0)}else break n;else if(e.b.b)if(e.b.a)if(e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var i=e.b,o=i.b;return o.b,B(1)}else break n;else if(e.b.b.b)if(e.b.b.a)if(e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var c=e.b,l=c.b;return l.b,B(2)}else break n;else if(e.b.b.b.b&&e.b.b.b.a&&!e.b.b.b.b.b){var u=e.b,f=u.b;return f.b,B(3)}else break n;else break n;else break n;else break n;return N},_i=function(n){return{$:2,a:n}},wA=Qo(_i(3)),yA=Qo(_i(0)),SA=Qo(_i(1)),xA=Qo(_i(2)),MA=function(n){return xA(n)?B(0):wA(n)?B(1):yA(n)?B(2):SA(n)?B(3):N},CA=v(function(n,e){var r=y(MA(e.bS),_A(n.eA));if(r.a.$){if(r.b.$)return N;var i=r.b.a;return B(i)}else{var t=r.a.a;return B(t)}}),PA={$:3},LA=v(function(n,e){return a(Rn,function(r){if(r.$)return 0;var t=r.b;return t},a(vi,n,e.aQ))}),zA=v(function(n,e){return a(Sn,0,oa(a(Ze,LA(n),e)))}),kA=v(function(n,e){return a(zA,n,e.gx)}),re=kA,TA=v(function(n,e){var r=e;return W(r,{p:n})}),DA=v(function(n,e){var r=e.dP;switch(r.$){case 1:var o=r.a.au,t=r.a.dp,i=r.a.fP;return sn(n.aa-o,a(re,"duration of step animation",n))>0?W(e,{a:a(TA,t,e.a),dP:i?PA:ko}):e;case 2:var o=r.a.au;return sn(n.aa-o,a(re,"duration of mistake animation",n))>0?W(e,{dP:ko}):e;default:return e}}),$t=function(n){var e=n.hn,r=n.bN;return a(w,e,r)},EA=function(n){var e=$t(n.cr),r={e$:a(Sn,0,hl(a(Y,a(Dn,so,Tr),e))),e0:a(Sn,0,hl(a(Y,a(Dn,K$,Tr),e))),e2:a(Sn,0,So(a(Y,a(Dn,so,Tr),e))),e3:a(Sn,0,So(a(Y,a(Dn,K$,Tr),e)))},t=r.e2,i=r.e$,o=r.e3,c=r.e0;return{iM:.5*(t+i),iQ:.5*(o+c)}},Xe=function(n){return n},Ka=function(n){return Xe(Je*(n/180))},Ju=function(n){return n},Te=function(n){return n},Eo=function(n){var e=n;return-e},IA=v(function(n,e){var r=n,t=e;return{iM:r.iQ*t.d4-r.d4*t.iQ,iQ:r.d4*t.iM-r.iM*t.d4,d4:r.iM*t.iQ-r.iQ*t.iM}}),Ds=function(n){var e=n;return e.d2},Es=function(n){var e=n;return e.d3},jA=function(n){return a(IA,Ds(n),Es(n))},Fa=function(n){var e=n;return e.dt},ka=w1,Ta=y1,to=z(function(n,e,r){var t=n,i=e,o=r,c=.5*i,l=ka(c),u=Ta(c),f=t.gI,s=f,m=s.iM*u,b=l*m,h=m*m,_=s.iQ*u,A=l*_,x=m*_,P=_*_,S=1-2*(h+P),T=s.d4*u,H=l*T,rn=2*(x-H),on=2*(x+H),cn=m*T,$n=2*(cn+A),tn=2*(cn-A),K=_*T,_n=2*(K-b),wn=2*(K+b),Bn=T*T,Tn=1-2*(P+Bn),gn=1-2*(h+Bn);return{iM:Tn*o.iM+rn*o.iQ+$n*o.d4,iQ:on*o.iM+gn*o.iQ+_n*o.d4,d4:tn*o.iM+wn*o.iQ+S*o.d4}}),wi=z(function(n,e,r){var t=n,i=e,o=r,c=.5*i,l=ka(c),u=Ta(c),f=t.dt,s=f,m=o.iM-s.iM,b=o.iQ-s.iQ,h=o.d4-s.d4,_=t.gI,A=_,x=A.iM*u,P=l*x,S=x*x,T=A.iQ*u,H=l*T,rn=x*T,on=T*T,cn=1-2*(S+on),$n=A.d4*u,tn=l*$n,K=2*(rn-tn),_n=2*(rn+tn),wn=x*$n,Bn=2*(wn+H),Tn=2*(wn-H),gn=T*$n,Vn=2*(gn-P),I=2*(gn+P),F=$n*$n,V=1-2*(on+F),R=1-2*(S+F);return{iM:s.iM+V*m+K*b+Bn*h,iQ:s.iQ+_n*m+R*b+Vn*h,d4:s.d4+Tn*m+I*b+cn*h}}),Nr=function(n){return n},da=function(n){var e=n;return e.d2},pa=function(n){var e=n;return e.d3},ha=function(n){var e=n;return e.d5},Is=z(function(n,e,r){return Nr({dt:d(wi,n,e,Fa(r)),d2:d(to,n,e,da(r)),d3:d(to,n,e,pa(r)),d5:d(to,n,e,ha(r))})}),Ev=z(function(n,e,r){return d(Is,n(r),e,r)}),ec=function(n){var e=n;return e.gI},gt=v(function(n,e){var r=n,t=e;return{iM:t.iM+r.iM,iQ:t.iQ+r.iQ,d4:t.d4+r.d4}}),js=v(function(n,e){return Nr({dt:a(gt,n,Fa(e)),d2:da(e),d3:pa(e),d5:ha(e)})}),FA=v(function(n,e){var r=n,t=e;return{iM:r*t.iM,iQ:r*t.iQ,d4:r*t.d4}}),BA=z(function(n,e,r){return a(js,a(FA,e,n),r)}),VA=z(function(n,e,r){return d(BA,ec(n(r)),e,r)}),Ne=v(function(n,e){return{gI:e,dt:n}}),RA=function(n){var e=n;return a(Ne,e.dt,e.d2)},NA=function(n){var e=n;return a(Ne,e.dt,e.d3)},WA=function(n){var e=n;return a(Ne,e.dt,e.d5)},HA=function(n){var e=Nr({dt:n.bd,d2:Es(n.eo),d3:jA(n.eo),d5:Ds(n.eo)}),r=d(VA,WA,n.c$,d(Ev,RA,Eo(n.ci),d(Ev,NA,n.b5,e)));return r},QA=function(n){return{$:0,a:n}},qn=function(n){var e=n;return xn(e)},io=function(n){var e=n;return .5*e},GA=S1,UA=function(n){var e=n;return GA(e)},JA=function(n){var e=io(qn(n.fJ)),r=UA(e);return{dG:QA(r),dX:n.dX}},we={iM:0,iQ:0,d4:0},Fs=oe,Ar=function(n){return n},Bs=Ar({iM:1,iQ:0,d4:0}),rc=Bs,Ou=Ar({iM:0,iQ:0,d4:1}),ac=Ou,OA=Fs({dt:we,d2:ac,d3:rc}),qA=function(n){var e=n.bd,r=n.b5,t=n.ci,i=n.c$;return JA({fJ:Ka(40),dX:HA({b5:Xe(r),c$:Te(i),ci:Xe(t),bd:Ju(e),eo:OA})})},Vs=v(function(n,e){return qA({b5:a(re,"camera azimuth",n),c$:a(re,"camera distance",n),ci:a(re,"camera elevation",n),bd:function(){var r=EA(ge(e.a));return{iM:r.iM,iQ:r.iQ,d4:0}}()})}),YA=z(function(n,e,r){return{iM:n,iQ:e,d4:r}}),Ri=function(n){return n},oo=function(n){var e=n;return e},ZA=v(function(n,e){var r=n,t=e;return t.iM*r.iM+t.iQ*r.iQ+t.d4*r.d4}),En=v(function(n,e){var r=e;return n*r}),qu=function(n){var e=n;return e.dt},XA=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=r.hy,l=c;return(t.iM-o.iM)*l.iM+(t.iQ-o.iQ)*l.iQ+(t.d4-o.d4)*l.d4}),KA=z(function(n,e,r){var t=n,i=e,o=r;return{iM:o.iM+i*t.iM,iQ:o.iQ+i*t.iQ,d4:o.d4+i*t.d4}}),n_=v(function(n,e){var r=ec(e),t=n,i=t.hy,o=a(ZA,i,r);if(o){var c=qu(e),l=a(XA,n,c),u=a(En,-1/o,l);return B(d(KA,r,u,c))}else return N}),e_=v(function(n,e){return{iM:n,iQ:e}}),Iv=v(function(n,e){var r=n,t=e;return r*t}),r_=function(n){var e=n;return e},jv=function(n){var e=n;return r_(e.f6)},a_=function(n){var e=n;return e.a7},Yr=z1,t_=function(n){var e=n,r=a(te,xn(e.iM),a(te,xn(e.iQ),xn(e.d4)));if(r){var t=e.d4/r,i=e.iQ/r,o=e.iM/r,c=Yr(o*o+i*i+t*t);return B({iM:o/c,iQ:i/c,d4:t/c})}else return N},Rs=v(function(n,e){var r=e;return r/n}),kl=function(n){var e=n;return Fa(e)},Yu=Ar({iM:0,iQ:0,d4:-1}),i_=v(function(n,e){var r=n,t=e;return t/r}),o_=v(function(n,e){var r=n,t=e,i=r.d5,o=i,c=r.d3,l=c,u=r.d2,f=u;return{iM:f.iM*t.iM+l.iM*t.iQ+o.iM*t.d4,iQ:f.iQ*t.iM+l.iQ*t.iQ+o.iQ*t.d4,d4:f.d4*t.iM+l.d4*t.iQ+o.d4*t.d4}}),Xr=function(n){var e=n;return{iM:-e.iM,iQ:-e.iQ,d4:-e.d4}},Tl=function(n){var e=n;return Xr(ha(e))},c_=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=r.d2,l=c;return(t.iM-o.iM)*l.iM+(t.iQ-o.iQ)*l.iQ}),Zu=z(function(n,e,r){var t=n,i=e,o=r;return{iM:t,iQ:i,d4:o}}),l_=en(function(n,e,r,t){var i=n,o=e,c=r,l=t,u=i.dt,f=u,s=i.d5,m=s,b=i.d3,h=b,_=i.d2,A=_;return{iM:f.iM+o*A.iM+c*h.iM+l*m.iM,iQ:f.iQ+o*A.iQ+c*h.iQ+l*m.iQ,d4:f.d4+o*A.d4+c*h.d4+l*m.d4}}),u_=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=r.d3,l=c;return(t.iM-o.iM)*l.iM+(t.iQ-o.iQ)*l.iQ}),jr=0,$_=z(function(n,e,r){var t=n,i=a(u_,jv(e),r),o=a(c_,jv(e),r),c=t.dX,l=c,u=a_(e);u.a;var f=u.b,s=t.dG;if(s.$){var _=s.a,A=a(i_,f,_),x=C(l_,l,a(Iv,A,o),a(Iv,A,i),jr);return a(Ne,x,Tl(t.dX))}else{var m=s.a,b=Eo(a(Rs,m,a(En,.5,f))),h=a(o_,l,a(Sn,Yu,t_(d(Zu,o,i,b))));return a(Ne,kl(t.dX),h)}}),Dl=function(n){var e=n;return{iM:ka(e),iQ:Ta(e)}},v_=function(n){var e=n;return{iM:-e.iQ,iQ:e.iM}},f_=function(n){return n},m_=v(function(n,e){return f_({dt:e,d2:n,d3:v_(n)})}),s_=v(function(n,e){return a(m_,Dl(n),e)}),d_=z(function(n,e,r){var t=n.a,i=n.b;return{f6:a(s_,e,r),a7:y(qn(t),qn(i))}}),Kr=function(n){var e=n;return e.iM},p_=v(function(n,e){var r=n,t=e;return{iM:r,iQ:t}}),na=function(n){var e=n;return e.iQ},ea=function(n){var e=n;return e.d4},h_=en(function(n,e,r,t){var i=r.iM,o=r.iQ,c=function(f){return d(YA,oo(Kr(f)),oo(na(f)),oo(ea(f)))},l=d(d_,y(Ri(e.iK),Ri(e.g2)),Ka(0),a(e_,0,0)),u=a(p_,Ri(i),Ri(o));return a(Rn,c,a(n_,t,d($_,n,l,u)))}),g_=v(function(n,e){return{hy:n,dt:e}}),b_=v(function(n,e){var r=e;return a(g_,r.hy,a(gt,n,r.dt))}),A_=v(function(n,e){return{hy:e,dt:n}}),__=a(A_,we,ac),w_=en(function(n,e,r,t){return C(h_,e,r,t,a(b_,d(Zu,Te(0),Te(0),Te(n)),__))}),y_=w_(0),S_=v(function(n,e){return W(e,{bw:a(Sn,e.bw,a(Rn,function(r){var t=r.iM,i=r.iQ;return y(Hn(t),Hn(i))},d(y_,a(Vs,n,e),n.cI,n.dE)))})}),x_=function(n){return n.$===2?nc:n},M_=v(function(n,e){return n.dE.ex?e:nc}),C_=v(function(n,e){return Yr(a(ca,n.iM-e.iM,2)+a(ca,n.iQ-e.iQ,2))}),P_=z(function(n,e,r){var t=y(e,r),i=t.a,o=t.b;return sn(a(C_,i,o),n)<0?N:sn(o.iM-i.iM,xn(o.iQ-i.iQ))>0?B(1):sn(i.iM-o.iM,xn(o.iQ-i.iQ))>0?B(0):sn(o.iQ-i.iQ,xn(o.iM-i.iM))>0?B(2):B(3)}),Ns=function(n){return{iM:n.dE.iM,iQ:n.dE.iQ}},L_=z(function(n,e,r){var t=e.ix,i=y(r,n.dE.ex);if(i.a.$===1&&i.b){var o=i.a.a,c=d(P_,t,o,Ns(n));if(c.$)return r;var l=c.a;return _i(l)}else return r}),z_=function(n){return{$:1,a:n}},k_=v(function(n,e){return e.$===1?e:n.dE.ex?z_(Ns(n)):nc}),T_=z(function(n,e,r){return d(L_,n,e,a(M_,n,a(k_,n,x_(r))))}),D_=v(function(n,e){return W(e,{bS:d(T_,n,{ix:20},e.bS)})}),E_=v(function(n,e){var r=ge(e.a).dD,t=ge(e.a).eE,i=function(){var o=a(CA,n,e);if(o.$===1)return oe;var c=o.a;return e.q.c4?d(pA,c,Dv(t),n):d(AA,c,Dv(r),n)}();return a(DA,n,i(a(S_,n,a(D_,n,e))))}),I_=v(function(n,e){var r=e;return W(r,{m:a(w,r.p,r.m),p:n})}),Ws=z(function(n,e,r){n:for(;;){if(r.$===-2)return e;var t=r.b,i=r.c,o=r.d,c=r.e,l=n,u=d(n,t,i,d(Ws,n,e,o)),f=c;n=l,e=u,r=f;continue n}}),j_=v(function(n,e){return d(Ws,z(function(r,t,i){return a(bm,r,i)}),n,e)}),F_=v(function(n,e){var r=n,t=e;return a(j_,r,t)}),Fv=function(n){return d(Gn,gu,qo,n)},B_=v(function(n,e){return a(ja,function(r){return a(bu,r,n)},a(Y,function(r){return a(To,r,e)},$([0,1,2,3])))}),V_=v(function(n,e){var r=v(function(t,i){n:for(;;)if(i.b){var o=i.a,c=i.b,l=a(ja,function(s){return!(a(Ls,s,i)||a(bu,s,t))},a(B_,e,o)),u=a(gu,o,t),f=q(c,l);t=u,i=f;continue n}else return t});return a(r,qo,$([n]))}),Hs=v(function(n,e){n:for(;;){if(e.$===-2)return n;var r=e.d,t=e.e,i=a(Hs,n+1,t),o=r;n=i,e=o;continue n}}),R_=function(n){return a(Hs,0,n)},Bv=function(n){var e=n;return R_(e)},N_=function(n){var e=Bv(n);return a(Sn,!1,a(Rn,function(r){return sn(Bv(a(V_,r,n)),e)<0},oa(mh(n))))},W_=function(n){return N_(a(F_,Fv($t(n.cr)),Fv($t(n.fi))))},H_=function(n){var e=n.hn,r=n.bN;return a(Sn,e,oa(Nn(r)))},Xu=function(n){var e=H_(n.cr);return W(n,{dD:a(ni,e,a(lr,2,0)),fi:a(br,e,L)})},Q_=function(n){var e=v(function(r,t){n:for(;;){if(kr(t))return r;var i=q(r,t),o=a(ma,function(c){return W_(c)?L:a(Ze,function(l){var u=a(Ts,l,c);switch(u.$){case 0:return N;case 1:return N;case 2:var f=u.a;return B(f);default:var f=u.a;return B(f)}},$([0,1,2,3]))},t);r=i,t=o;continue n}});return a(ja,function(r){return ln(Do(r),Do(n.cr))},a(Y,function(r){return r.fi},a(e,L,$([Xu(n)]))))},G_=v(function(n,e){var r=e;return Ia($([y("before",a(Jt,n,r.m)),y("current",n(r.p)),y("after",a(Jt,n,r.s))]))}),Vv=Jl,El=function(n){var e=n.a,r=n.b;return Ia($([y("A1",Vv(e)),y("A2",Vv(r))]))},U_=function(n){return fi(function(){switch(n){case 0:return"X";case 1:return"Y";default:return"Z"}}())},J_=function(n){return fi(function(){return n?"Negative":"Positive"}())},O_=function(n){var e=n.a,r=n.b;return Ia($([y("A1",U_(e)),y("A2",J_(r))]))},Rv=function(n){var e=n.a,r=n.b;return Ia($([y("A1",El(e)),y("A2",O_(r))]))},Bc=function(n){return Ia($([y("last",El(n.hn)),y("rest",a(Jt,El,n.bN))]))},q_=function(n){return Ia($([y("playerCube",Rv(n.dD)),y("playerPath",Bc(n.fi)),y("levelEditingCube",Rv(n.eE)),y("levelEditingPath",Bc(n.cr)),y("calculatedSolutions",a(Jt,Bc,n.ea))]))},Y_=v(function(n,e){return W(e,{c5:a(Jf,2,a(G_,a(Dn,Xu,q_),n))})}),Qs=function(n){var e=n;return q(Nn(e.m),q($([e.p]),e.s))},Z_=v(function(n,e){var r=e,t=Qs(r),i=a(Xt,yr(t)+1,n),o=a(mu,i-1,t);if(o.b){var c=o.a,l=o.b;return{s:l,m:Nn(a(cm,i-1,t)),p:c}}else return r}),X_=function(n){var e=n,r=e.s;if(r.b){var t=r.a,i=r.b;return B({s:i,m:a(w,e.p,e.m),p:t})}else return N},K_=function(n){var e=n,r=e.m;if(r.b){var t=r.a,i=r.b;return B({s:a(w,e.p,e.s),m:i,p:t})}else return N},n4=v(function(n,e){var r=e;return{s:a(Y,n,r.s),m:a(Y,n,r.m),p:n(r.p)}}),e4=v(function(n,e){var r=e;return W(r,{p:n(r.p)})}),r4=function(n){var e=n,r=e.s;if(r.b){var t=r.a,i=r.b;return W(e,{s:i,m:a(w,t,e.m)})}else return W(e,{s:Nn(e.m),m:L})},a4=function(n){var e=n,r=e.m;if(r.b){var t=r.a,i=r.b;return W(e,{m:i,p:t})}else{var o=e.s;if(o.b){var t=o.a,i=o.b;return W(e,{s:i,p:t})}else return e}},t4=v(function(n,e){return W(e,{c6:n})}),i4=v(function(n,e){return W(e,{c4:n,dP:0})}),o4=z(function(n,e,r){var t=r.q;switch(e.$){case 0:var i=e.a;return W(r,{q:a(i4,i,r.q),a:a(n4,Xu,r.a),dP:ko});case 1:return W(r,{a:a(e4,function(u){return W(u,{ea:Q_(ge(r.a))})},r.a)});case 2:var o=e.a;return W(r,{q:W(t,{e8:B(o)})});case 3:return W(r,{q:W(t,{e8:N})});case 4:var c=e.a;return W(r,{a:a(Z_,c,r.a)});case 5:return W(r,{a:a(Sn,r.a,K_(r.a))});case 6:return W(r,{a:a(Sn,r.a,X_(r.a))});case 7:return W(r,{a:a(I_,Ps,r.a)});case 8:return W(r,{a:a4(r.a)});case 9:return W(r,{a:r4(r.a)});case 10:return W(r,{q:a(Y_,r.a,r.q)});case 11:return W(r,{a:a(Gu,r.a,a(Ss,Cs(Ms),r.q.c6))});default:var l=e.a;return W(r,{q:a(t4,l,r.q)})}}),Ni=Ke("br"),c4=Ke("h2"),Tt=Ke("span"),l4=v(function(n,e){return a(ta,$([a(zn,"position","fixed"),a(zn,"width","100%"),a(zn,"text-align","center"),a(zn,"font-size","14px")]),$([a(c4,L,$([tr("The Red-Faced Cube")])),a(bl,$([a(zn,"font-weight","bold")]),$([tr("A puzzle from Martin Gardner's book Mathematical Carnival (1975)")])),a(bl,L,$([a(Tt,function(){var r=e.dP;if(r.$===2){r.a.au;var t=r.a.dY;return t?L:$([a(zn,"background-color","red")])}else return L}(),$([tr(" Visit each cell exactly once.")])),a(Ni,L,L),a(Tt,L,$([tr("End with the cube red side up on the (marked) finish cell.")])),a(Ni,L,L),a(Tt,function(){var r=e.dP;if(r.$===2){r.a.au;var t=r.a.dY;return t===1?$([a(zn,"background-color","red")]):L}else return L}(),$([tr("At no time during the tour, however,"),a(Ni,L,L),tr("is the cube allowed to rest with the red side up.")])),a(Ni,L,L),a(Tt,L,$([tr("You can roll the cube via swiping or pressing arrow keys.")]))]))]))}),Ku=function(n){return n},n$=z(function(n,e,r){return sn(r,n)<0?n:sn(r,e)>0?e:r}),u4=function(n){var e=n;return e},$4=function(n){var e=d(n$,1667,25e3,u4(n)),r=e<=4e3?-.2661239*1e9/(e*e*e)-.2343589*1e6/(e*e)+.8776956*1e3/e+.17991:-3.0258469*1e9/(e*e*e)+2.1070379*1e6/(e*e)+.2226347*1e3/e+.24039,t=e<=2222?-1.1063814*(r*r*r)-1.3481102*(r*r)+2.18555832*r-.20219683:e<=4e3?-.9549476*(r*r*r)-1.37418593*(r*r)+2.09137015*r-.16748867:3.081758*(r*r*r)-5.8733867*(r*r)+3.75112997*r-.37001483;return Ku({iM:r,iQ:t})},v4=function(n){return n},f4=function(n){return{$:0,a:n}},m4=f4,s4={$:3},d4=s4,p4=en(function(n,e,r,t){return{$:4,a:n,b:e,c:r,d:t}}),h4=p4,g4=function(n){return{$:1,a:n}},b4=g4,A4=function(n){return a($r,"height",k(n))},_4=Dm,w4=function(n){return{$:2,a:n}},y4=w4,S4=function(n){var e=n.a,r=n.b,t=n.c,i=n.d,o=function(l){return Hn(l*1e3)/1e3},c=function(l){return Hn(l*1e4)/100};return et($(["rgba(",mn(c(e)),"%,",mn(c(r)),"%,",mn(c(t)),"%,",mn(o(i)),")"]))},x4=v(function(n,e){switch(e.$){case 0:return a(R0,n,e);case 1:return a(N0,n,e);case 2:return a(W0,n,e);case 3:return a(H0,n,e);case 4:return a(Q0,n,e);default:return a(G0,n,e)}}),M4=v(function(n,e){switch(e.$){case 0:return a(p0,n,e);case 1:return a(h0,n,e);case 2:return a(g0,n,e);case 3:return a(b0,n,e);case 4:return a(A0,n,e);case 5:return a(_0,n,e);case 6:return a(w0,n,e);case 7:return a(y0,n,e);default:return S0(n)}}),C4=z(function(n,e,r){return d(V0,n,e,r)}),Nv=function(n){var e=n;return e},bt=rh,Vc=C(bt,1,1,1,1),fr=z(function(n,e,r){return a(Y,function(t){return a(t,e,r)},n)}),P4=z(function(n,e,r){return{$:0,a:n,b:e,c:r}}),L4=v(function(n,e){var r=n,t=e.iM,i=e.iQ;return d(P4,r*t/i,r,r*(1-t-i)/i)}),yi=Y0,z4=function(n){var e=n.a,r=n.b,t=n.c;return d(yi,3.2406*e-1.5372*r-.4986*t,-.9689*e+1.8758*r+.0415*t,.0557*e-.204*r+1.057*t)},tc=v(function(n,e){return z4(a(L4,n,e))}),Gs=v(function(n,e){return{ey:ln(n.ey,e.ey),w:n.w*e.w+n.x*e.z+n.y*e.C,x:n.w*e.x+n.x*e.A+n.y*e.D,y:n.w*e.y+n.x*e.B+n.y*e.E,z:n.z*e.w+n.A*e.z+n.B*e.C,A:n.z*e.x+n.A*e.A+n.B*e.D,B:n.z*e.y+n.A*e.B+n.B*e.E,C:n.C*e.w+n.D*e.z+n.E*e.C,D:n.C*e.x+n.D*e.A+n.E*e.D,E:n.C*e.y+n.D*e.B+n.E*e.E,N:e.N+(n.N*e.w+n.O*e.z+n.P*e.C)*e.cH,O:e.O+(n.N*e.x+n.O*e.A+n.P*e.D)*e.cH,P:e.P+(n.N*e.y+n.O*e.B+n.P*e.E)*e.cH,cH:n.cH*e.cH}}),pr=lh,k4=function(n){return pr({eK:n.w,eL:n.z,eM:n.C,eN:n.N,eO:n.x,eP:n.A,eQ:n.D,eR:n.O,eS:n.y,eT:n.B,eU:n.E,eV:n.P,eW:0,eX:0,eY:0,eZ:1})},Rc=Kn(function(n,e,r,t,i){var o=t.ey?1:-1,c=C(bt,t.cH,t.cH,t.cH,o);return ne(i,n,c,k4(t),t.ey,e,r)}),Us=Ee(function(n,e,r,t,i,o){n:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=n,f=e,s=r,m=a(Gs,c,t),b=l,h=o;n=u,e=f,r=s,t=m,i=b,o=h;continue n;case 1:var _=i.b,A=a(w,D(Rc,n,e,r,t,_),o.S);return{S:A,ac:o.ac,h0:o.h0};case 3:var x=i.b,P=a(w,D(Rc,n,e,r,t,x),o.ac);return{S:o.S,ac:P,h0:o.h0};case 2:var S=i.a,T=a(w,D(Rc,n,e,r,t,S),o.h0);return{S:o.S,ac:o.ac,h0:T};default:var H=i.a;return d(Gn,C(Us,n,e,r,t),o,H)}}),T4=en(function(n,e,r,t){return{$:4,a:n,b:e,c:r,d:t}}),Js=T4,e$=en(function(n,e,r,t){return{$:1,a:n,b:e,c:r,d:t}}),D4=function(n){var e=n.al,r=n.af,t=n.ae;return C(e$,518,e,r,t)},E4=v(function(n,e){return{$:6,a:n,b:e}}),I4=E4,Os=$([D4({ae:1,af:0,al:!1}),C(Js,!1,!1,!1,!1),a(I4,0,1)]),vt=519,r$=8,qs=15,tt=7681,j4={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},On=d0,F4=v(function(n,e){return{$:0,a:n,b:e}}),B4=F4({eg:1,et:0,e6:5}),je=O0,V4=B4($([{fl:a(je,-1,-1)},{fl:a(je,1,-1)},{fl:a(je,-1,1)},{fl:a(je,1,1)}])),R4={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"fl"},uniforms:{}},N4=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(s){return{$:2,a:n,b:e,c:r,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:s}}}}}}}}}}}},a$=z(function(n,e,r){var t=n.dH,i=n.dj,o=n.d1,c=v(function(f,s){var m=f;return s(m)}),l=v(function(f,s){var m=f;return s(m)}),u=function(f){return a(Dn,c(f.bU),a(Dn,l(f.bD),a(Dn,l(f.b1),l(f.b2))))};return a(u,r,a(u,e,d(N4,t,i,o)))}),t$=function(n){return d(a$,{dj:n.dj,dH:n.dH,d1:n.d1},{bD:n.bD,bU:n.bU,b1:n.b1,b2:n.b2},{bD:n.bD,bU:n.bU,b1:n.b1,b2:n.b2})},i$=function(n){return D(On,$([t$(n),C(Js,!1,!1,!1,!1)]),R4,j4,V4,{})},W4=i$({bD:tt,dj:0,dH:r$,bU:vt,d1:qs,b1:tt,b2:tt}),H4=516,Wv=5386,ye=7680,Q4=function(n){return a(ca,2,n+4)},Ys=function(n){return i$({bD:ye,dj:qs,dH:r$,bU:H4,d1:Q4(n),b1:Wv,b2:Wv})},G4=z(function(n,e,r){return Se($([d(fr,n,r,Os),$([Ys(e),W4])]))}),U4=v(function(n,e){return Se(a(ci,G4(n),e))}),J4=function(n){var e=n.al,r=n.af,t=n.ae;return C(e$,513,e,r,t)},O4=J4({ae:1,af:0,al:!0}),q4=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:n,b:e,c:r,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},Y4=function(n){var e=n.cE,r=n.ck,t=n.b6,i=n.b3,o=n.cc,c=n.f0,l=v(function(u,f){var s=u.a,m=u.b,b=u.c,h=f.a,_=f.b,A=f.c;return q4(s)(m)(b)(h)(_)(A)(e)(r)(t)(i)});return a(l,o,c)},Z4=z(function(n,e,r){return{$:0,a:n,b:e,c:r}}),Hv=v(function(n,e){var r=n,t=e;return d(Z4,32774,r,t)}),X4=1,Qv=771,K4=770,o$=Y4({b3:0,f0:a(Hv,X4,Qv),b6:0,cc:a(Hv,K4,Qv),ck:0,cE:0}),Qa=$([O4,o$]),nw=function(n){var e=n;return e.e$},ew=function(n){var e=n;return e.e0},Zs=function(n){var e=n;return e.e1},rw=function(n){var e=n;return e.e2},aw=function(n){var e=n;return e.e3},Xs=function(n){var e=n;return e.e4},Vr=v(function(n,e){var r=n,t=e;return t-r}),Ks=function(n){return j(a(Vr,rw(n),nw(n)),a(Vr,aw(n),ew(n)),a(Vr,Xs(n),Zs(n)))},tw=function(n){return n},iw=function(n){return Nr({dt:tw({iM:n.N,iQ:n.O,d4:n.P}),d2:Ar({iM:n.w,iQ:n.x,d4:n.y}),d3:Ar({iM:n.z,iQ:n.A,d4:n.B}),d5:Ar({iM:n.C,iQ:n.D,d4:n.E})})},Nc=v(function(n,e){var r=n,t=e,i=r.d5,o=i,c=r.d3,l=c,u=r.d2,f=u;return{iM:t.iM*f.iM+t.iQ*f.iQ+t.d4*f.d4,iQ:t.iM*l.iM+t.iQ*l.iQ+t.d4*l.d4,d4:t.iM*o.iM+t.iQ*o.iQ+t.d4*o.d4}}),nd=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=t.iM-o.iM,l=t.iQ-o.iQ,u=t.d4-o.d4,f=r.d5,s=f,m=r.d3,b=m,h=r.d2,_=h;return{iM:c*_.iM+l*_.iQ+u*_.d4,iQ:c*b.iM+l*b.iQ+u*b.d4,d4:c*s.iM+l*s.iQ+u*s.d4}}),ed=v(function(n,e){return{dt:a(nd,n,Fa(e)),d2:a(Nc,n,da(e)),d3:a(Nc,n,pa(e)),d5:a(Nc,n,ha(e))}}),ei=z(function(n,e,r){return{iM:n,iQ:e,d4:r}}),Io=function(n){var e=n;return e},ae=v(function(n,e){var r=n,t=e;return a(te,r,t)}),$e=v(function(n,e){var r=n,t=e;return a(Ue,r,t)}),ow=v(function(n,e){var r=Io(e),t=Io(n);return{e$:a(ae,t.e$,r.e$),e0:a(ae,t.e0,r.e0),e1:a(ae,t.e1,r.e1),e2:a($e,t.e2,r.e2),e3:a($e,t.e3,r.e3),e4:a($e,t.e4,r.e4)}}),Ye=function(n){var e=n;return e},cw=function(n){var e=n;return j(e.iM,e.iQ,e.d4)},Bt=v(function(n,e){var r=n,t=e;return t+r}),lw=v(function(n,e){var r=n.a,t=n.b,i=n.c,o=io(qn(t)),c=io(qn(r)),l=io(qn(i)),u=cw(e),f=u.a,s=u.b,m=u.c;return{e$:a(Bt,c,f),e0:a(Bt,o,s),e1:a(Bt,l,m),e2:a(Vr,c,f),e3:a(Vr,o,s),e4:a(Vr,l,m)}}),Gv=en(function(n,e,r,t){var i=r.gp,o=2*r.g0*e,c=2*r.g$*e,l=2*r.g_*e,u=i.d4*e,f=i.iQ*e,s=i.iM*e,m=Ye(ha(n)),b=xn(l*m.iM)+xn(c*m.iQ)+xn(o*m.d4),h=Ye(pa(n)),_=xn(l*h.iM)+xn(c*h.iQ)+xn(o*h.d4),A=Ye(da(n)),x=xn(l*A.iM)+xn(c*A.iQ)+xn(o*A.d4),P=a(lw,j(x,_,b),a(nd,n,d(ei,s,f,u)));if(t.$)return B(P);var S=t.a;return B(a(ow,S,P))}),Il=en(function(n,e,r,t){n:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var h=n,_=e,A=r,x=o;n=h,e=_,r=A,t=x;continue n;case 1:var c=i.a,l=C(Gv,n,e,c,r),h=n,_=e,A=l,x=o;n=h,e=_,r=A,t=x;continue n;case 2:var h=n,_=e,A=r,x=o;n=h,e=_,r=A,t=x;continue n;case 3:var c=i.a,l=C(Gv,n,e,c,r),h=n,_=e,A=l,x=o;n=h,e=_,r=A,t=x;continue n;case 4:var u=i.a,h=n,_=e,A=C(Il,n,e,r,u),x=o;n=h,e=_,r=A,t=x;continue n;default:var f=i.a,s=i.b,m=a(ed,iw(f),n),b=e*f.cH,h=n,_=e,A=C(Il,m,b,r,$([s])),x=o;n=h,e=_,r=A,t=x;continue n}}else return r}),Ba=Z0,Va=X0,Ra=K0,rd=function(n){return{$:4,a:n}},uw=v(function(n,e){n:for(;;)if(n.b){var r=n.a,t=n.b,i=t,o=a(w,r,e);n=i,e=o;continue n}else return e}),Si=function(n){return rd(a(uw,n,L))},$w={ey:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,N:0,O:0,P:0,cH:1},Uv=i$({bD:tt,dj:0,dH:r$,bU:vt,d1:255,b1:tt,b2:tt}),vw=function(n){var e=n,r=a(te,xn(e.iM),a(te,xn(e.iQ),xn(e.d4)));if(r){var t=e.d4/r,i=e.iQ/r,o=e.iM/r,c=Yr(o*o+i*i+t*t);return c*r}else return jr},Ae={b6:0,go:!1,ck:0,dC:0,cE:0,dT:0,iM:0,iQ:0,d4:0},He=v(function(n,e){var r=n,t=e;return pr({eK:r.iM,eL:r.cE,eM:t.iM,eN:t.cE,eO:r.iQ,eP:r.ck,eQ:t.iQ,eR:t.ck,eS:r.d4,eT:r.b6,eU:t.d4,eV:t.b6,eW:r.dT,eX:r.dC,eY:t.dT,eZ:t.dC})}),Dt=y({bJ:a(He,Ae,Ae),cs:a(He,Ae,Ae),ct:a(He,Ae,Ae),cu:a(He,Ae,Ae)},C(bt,0,0,0,0)),ad=514,td=function(n){var e=n.al,r=n.af,t=n.ae;return C(e$,515,e,r,t)},id=240,fw=$([td({ae:1,af:0,al:!0}),t$({bD:ye,dj:id,dH:0,bU:ad,d1:0,b1:ye,b2:ye}),o$]),mw=v(function(n,e){var r=n,t=e.hx,i=e.gS,o=e.f5,c=qn(t),l=c,u=qn(i),f=u,s=r.dG;if(s.$){var b=s.a;return $l(f)?pr({eK:2/(o*b),eL:0,eM:0,eN:0,eO:0,eP:2/b,eQ:0,eR:0,eS:0,eT:0,eU:0,eV:-1,eW:0,eX:0,eY:0,eZ:1}):pr({eK:2/(o*b),eL:0,eM:0,eN:0,eO:0,eP:2/b,eQ:0,eR:0,eS:0,eT:0,eU:-2/(f-l),eV:-(f+l)/(f-l),eW:0,eX:0,eY:0,eZ:1})}else{var m=s.a;return $l(f)?pr({eK:1/(o*m),eL:0,eM:0,eN:0,eO:0,eP:1/m,eQ:0,eR:0,eS:0,eT:0,eU:-1,eV:-2*l,eW:0,eX:0,eY:-1,eZ:0}):pr({eK:1/(o*m),eL:0,eM:0,eN:0,eO:0,eP:1/m,eQ:0,eR:0,eS:0,eT:0,eU:-(f+l)/(f-l),eV:-2*f*l/(f-l),eW:0,eX:0,eY:-1,eZ:0})}}),Wi=v(function(n,e){return(1&n>>e)===1?0:1}),sw=function(n){return $([td({ae:1,af:0,al:!0}),t$({bD:ye,dj:id,dH:n,bU:ad,d1:0,b1:ye,b2:ye}),o$])},dw=z(function(n,e,r){return Se(a(Y,function(t){var i=t<<4,o=C(bt,a(Wi,t,0),a(Wi,t,1),a(Wi,t,2),a(Wi,t,3));return d(fr,n,y(e,o),sw(i))},a(Br,1,a(ca,2,r)-1)))}),it=function(n){var e=n;return e},pw=uh,c$=Ar({iM:0,iQ:1,d4:0}),l$=c$,hw={dt:we,d2:rc,d3:l$,d5:ac},xi=function(n){var e=n;return e},gw=function(n){var e=xi(Fa(n)),r=Ye(ha(n)),t=Ye(pa(n)),i=Ye(da(n));return pr({eK:i.iM,eL:t.iM,eM:r.iM,eN:e.iM,eO:i.iQ,eP:t.iQ,eQ:r.iQ,eR:e.iQ,eS:i.d4,eT:t.d4,eU:r.d4,eV:e.d4,eW:0,eX:0,eY:0,eZ:1})},bw=v(function(n,e){var r=e;return gw(a(ed,r,n))}),Aw=function(n){return a(bw,hw,n)},_w=function(n){var e=n;return e.dX},ww=function(n){var e=n;return da(e)},yw=function(n){var e=n;return pa(e)},Sw=function(n){var e=_w(n.gl),r=Nr({dt:kl(e),d2:ww(e),d3:yw(e),d5:Xr(Tl(e))}),t=Si(n.bb),i=t,o=C(Il,r,1,N,$([i]));if(o.$===1)return L;var c=o.a,l=Aw(e),u=a(En,.99,a(ae,qn(n.gt),Eo(Zs(c)))),f=Ks(c),s=f.a,m=f.b,b=f.c,h=vw(d(Zu,s,m,b)),_=a(En,1.01,a(Bt,h,Eo(Xs(c)))),A=a(mw,n.gl,{f5:n.f5,gS:_,hx:u}),x=pw(A).eZ,P=x?Ye(Xr(Tl(e))):it(kl(e)),S=function(){var gn=n.iA;switch(gn.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var Vn=gn.a;return y(3,Vn);case 4:var Vn=gn.a;return y(4,Vn);default:return y(5,0)}}(),T=S.a,H=S.b,rn=n.gQ,on=rn,cn=a(tc,on,n.iJ),$n=cn,tn=pr({eK:0,eL:P.iM,eM:Ba($n),eN:n.fz,eO:0,eP:P.iQ,eQ:Va($n),eR:oo(h),eS:0,eT:P.d4,eU:Ra($n),eV:T,eW:0,eX:x,eY:0,eZ:H}),K=ne(Us,tn,l,A,$w,i,{S:L,ac:L,h0:L}),_n=n.hq;switch(_n.$){case 0:var wn=_n.a;return Se($([d(fr,K.S,y(wn,Vc),Qa),d(fr,K.ac,Dt,Qa)]));case 1:var wn=_n.a;return Se($([d(fr,K.S,Dt,Qa),$([Uv]),d(fr,K.h0,wn.bJ,Os),$([Ys(0)]),d(fr,K.S,y(wn,Vc),fw),d(fr,K.ac,Dt,Qa)]));default:var Bn=_n.a,Tn=_n.b;return Se($([d(fr,K.S,y(Tn,Vc),Qa),$([Uv]),a(U4,K.h0,Bn),d(dw,K.S,Tn,yr(Bn)),d(fr,K.ac,Dt,Qa)]))}},xw=function(n){return a($r,"width",k(n))},Mw=v(function(n,e){var r=$([b4(1),y4(0),m4(!0),C(h4,0,0,0,0)]),t=function(){var T=n.f2;switch(T.$){case 0:return j(r,"0",1);case 1:return j(a(w,d4,r),"1",1);default:var H=T.a;return j(r,"0",H)}}(),i=t.a,o=t.b,c=t.c,l=n.a7,u=l.a,f=l.b,s=Nv(f),m=a(zn,"height",k(s)+"px"),b=Nv(u),h=b/s,_=a(ma,function(T){return Sw({f5:h,gl:n.gl,gt:n.gt,bb:T.bb,gQ:T.gQ,hq:T.hq,fz:c,iA:T.iA,iJ:T.iJ})},e),A=a(zn,"width",k(b)+"px"),x=n.a4,P=x,S=S4(P);return d(_4,"div",$([a(zn,"padding","0px"),A,m]),$([y(o,d(C4,i,$([xw(Hn(b*c)),A4(Hn(s*c)),A,m,a(zn,"display","block"),a(zn,"background-color",S)]),_))]))}),Cw=function(n){return{$:2,a:n}},Pw=function(n){return Cw(n)},Lw=function(n){return a(Mw,{f2:Pw(n.c_),a4:n.a4,gl:n.gl,gt:n.gt,a7:n.a7},$([{bb:n.bb,gQ:n.gQ,hq:n.hq,iA:n.iA,iJ:n.iJ}]))},Jv=function(n){return n},zw=function(n){var e=n;return e},ic=function(n){var e=n;return zw(e.f6)},od=en(function(n,e,r,t){return{$:2,a:n,b:e,c:r,d:t}}),kw=en(function(n,e,r,t){return{$:3,a:n,b:e,c:r,d:t}}),cd=en(function(n,e,r,t){return{$:4,a:n,b:e,c:r,d:t}}),ld=en(function(n,e,r,t){return{$:6,a:n,b:e,c:r,d:t}}),Tw=en(function(n,e,r,t){return{$:7,a:n,b:e,c:r,d:t}}),Dw=en(function(n,e,r,t){return{$:5,a:n,b:e,c:r,d:t}}),Ew=en(function(n,e,r,t){return{$:1,a:n,b:e,c:r,d:t}}),u$=function(n){switch(n.$){case 0:return n;case 1:var r=n.a,e=n.b,i=n.c;return C(Ew,r,e,i,1);case 2:var r=n.a,e=n.b,i=n.c;return C(od,r,e,i,1);case 3:var r=n.a,t=n.b,i=n.c;return C(kw,r,t,i,1);case 4:var r=n.a,t=n.b,i=n.c;return C(cd,r,t,i,1);case 5:var r=n.a,t=n.b,i=n.c;return C(Dw,r,t,i,1);case 6:var r=n.a,t=n.b,i=n.c;return C(ld,r,t,i,1);case 7:var r=n.a,t=n.b,i=n.c;return C(Tw,r,t,i,1);case 8:return n;case 9:return n;default:return n}},$$={$:0},Iw=Fn(function(n,e,r,t,i,o,c,l){n:for(;;)if(l.b){var u=l.a,f=l.b,s=Io(c(u)),m=a($e,s.e2,n),b=a(ae,s.e$,e),h=a($e,s.e3,r),_=a(ae,s.e0,t),A=a($e,s.e4,i),x=a(ae,s.e1,o),P=c,S=f;n=m,e=b,r=h,t=_,i=A,o=x,c=P,l=S;continue n}else return{e$:e,e0:t,e1:o,e2:n,e3:r,e4:i}}),jw=z(function(n,e,r){var t=Io(n(e));return ii(Iw,t.e2,t.e$,t.e3,t.e0,t.e4,t.e1,n,r)}),Wc=v(function(n,e){var r=n,t=e;return sn(t,r)<1}),ud=function(n){return a(Wc,n.e$,n.e2)&&a(Wc,n.e0,n.e3)&&a(Wc,n.e1,n.e4)?n:{e$:a(ae,n.e2,n.e$),e0:a(ae,n.e3,n.e0),e1:a(ae,n.e4,n.e1),e2:a($e,n.e2,n.e$),e3:a($e,n.e3,n.e0),e4:a($e,n.e4,n.e1)}},ri=function(n){var e=n;return e},$d=function(n){var e=ri(n),r=e.a,t=e.b,i=e.c,o=Kr(r),c=na(r),l=ea(r),u=Kr(t),f=na(t),s=ea(t),m=Kr(i),b=na(i),h=ea(i);return ud({e$:a(ae,o,a(ae,u,m)),e0:a(ae,c,a(ae,f,b)),e1:a(ae,l,a(ae,s,h)),e2:a($e,o,a($e,u,m)),e3:a($e,c,a($e,f,b)),e4:a($e,l,a($e,s,h))})},vd=nh,ze=function(n){return vd(xi(n))},fd=function(n){var e=n;return e},oc=function(n){return vd(fd(n))},Fw=v(function(n,e){var r=n,t=e;return{iM:t.iQ*r.d4-t.d4*r.iQ,iQ:t.d4*r.iM-t.iM*r.d4,d4:t.iM*r.iQ-t.iQ*r.iM}}),jl=v(function(n,e){var r=n,t=e;return{iM:t.iM-r.iM,iQ:t.iQ-r.iQ,d4:t.d4-r.d4}}),md=function(n){return n},Bw={iM:0,iQ:0,d4:0},Vw=v(function(n,e){var r=n,t=e,i=a(te,xn(t.iM),a(te,xn(t.iQ),xn(t.d4)));if(i){var o=t.d4/i,c=t.iQ/i,l=t.iM/i,u=Yr(l*l+c*c+o*o);return{iM:r*l/u,iQ:r*c/u,d4:r*o/u}}else return Bw}),Rw=Vw(md(1)),sd=z(function(n,e,r){var t=a(jl,e,r),i=a(jl,n,e);return Rw(a(Fw,t,i))}),Nw=function(n){var e=ri(n),r=e.a,t=e.b,i=e.c,o=oc(d(sd,r,t,i));return j({u:o,fl:ze(r)},{u:o,fl:ze(t)},{u:o,fl:ze(i)})},Ww=v(function(n,e){return{$:2,a:n,b:e}}),dd=Ww({eg:3,et:0,e6:4}),Hw=function(n){if(n.b){var e=n.a,r=n.b,t=dd(a(Y,Nw,n)),i=d(jw,$d,e,r);return C(od,i,n,t,0)}else return $$},We=z(function(n,e,r){return j(n,e,r)}),me=z(function(n,e,r){var t=n,i=e,o=r;return{iM:t,iQ:i,d4:o}}),pd=function(){var n=Te(1),e=Te(1),r=Te(1),t=a(En,-.5,n),i=a(En,-.5,e),o=a(En,-.5,r),c=d(me,o,i,t),l=a(En,.5,n),u=d(me,o,i,l),f=a(En,.5,e),s=d(me,o,f,t),m=d(me,o,f,l),b=a(En,.5,r),h=d(me,b,i,t),_=d(me,b,f,t),A=d(me,b,i,l),x=d(me,b,f,l);return u$(Hw($([d(We,c,_,h),d(We,c,s,_),d(We,u,A,x),d(We,u,x,m),d(We,h,_,x),d(We,h,x,A),d(We,c,m,s),d(We,c,u,m),d(We,c,h,A),d(We,c,A,u),d(We,s,x,_),d(We,s,m,x)])))}(),Hi={$:0},Qw=z(function(n,e,r){return{$:1,a:n,b:e,c:r}}),Gw=z(function(n,e,r){var t=e.a,i=e.b,o=e.c,c=n(o),l=n(i),u=n(t),f=oc(d(sd,u,l,c)),s={u:f,fl:ze(u)},m={u:f,fl:ze(l)},b={u:f,fl:ze(c)};return a(w,s,a(w,m,a(w,b,r)))}),v$=function(n){var e=n;return e.K},Uw=en(function(n,e,r,t){if(e.$===1)return N;var i=e.a;if(r.$===1)return N;var o=r.a;if(t.$===1)return N;var c=t.a;return B(d(n,i,o,c))}),Fl=4294967295>>>32-Ht,Bl=f1,Jw=z(function(n,e,r){n:for(;;){var t=Fl&e>>>n,i=a(Bl,t,r);if(i.$){var f=i.a;return a(Bl,Fl&e,f)}else{var o=i.a,c=n-Ht,l=e,u=o;n=c,e=l,r=u;continue n}}}),Ow=function(n){return n>>>5<<5},qw=v(function(n,e){var r=e.a,t=e.b,i=e.c,o=e.d;return n<0||sn(n,r)>-1?N:sn(n,Ow(r))>-1?B(a(Bl,Fl&n,o)):B(d(Jw,t,n,i))}),f$=function(n){var e=n;return e.ax},Hc=v(function(n,e){return a(qw,n,f$(e))}),Yw=function(n){var e=function(r){var t=r.a,i=r.b,o=r.c;return C(Uw,z(function(c,l,u){return j(c,l,u)}),a(Hc,t,n),a(Hc,i,n),a(Hc,o,n))};return a(Ze,e,v$(n))},Zw=z(function(n,e,r){n:for(;;){var t=a(lu,Re,n),i=t.a,o=t.b;if(sn(ll(i),Re)<0)return a(em,!0,{F:e,r,v:i});var c=o,l=a(w,nm(i),e),u=r+1;n=c,e=l,r=u;continue n}}),m$=function(n){return n.b?d(Zw,n,L,0):Xf},Xw=v(function(n,e){return!a(Rr,a(Mr,Wh,n),e)}),Kw=function(n){var e=n.a;return e},hd=v(function(n,e){var r=Kw(n),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&sn(o,r)<0&&c>=0&&sn(c,r)<0&&l>=0&&sn(l,r)<0};return a(Xw,t,e)?{K:e,ax:n}:{K:a(ja,t,e),ax:n}}),ny=z(function(n,e,r){return{$:3,a:n,b:e,c:r}}),Mi=ny({eg:1,et:3,e6:4}),co=v(function(n,e){var r=it(e),t=it(n);return y(j(t.iM,t.iQ,t.d4),j(r.iM,r.iQ,r.d4))}),Ov=d(yi,0,0,0),Qc=Ee(function(n,e,r,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(vi,a(co,n,e),i);if(f.$){var m={u:Ov,fl:ze(e)},b={u:Ov,fl:ze(n)},h=u+1,_=u;return j(a(w,j(r,_,h),a(w,j(r,h,t),c)),a(w,m,a(w,b,l)),u+2)}else{var s=f.a;return j(a(w,j(r,s,t),c),l,u)}}),ey=Kn(function(n,e,r,t,i){n:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,s=n(u),m=n(l),b=n(c),h=t+2,_=t+1,A=t,x=n,P=e,S=f,T=t+3,H=ne(Qc,s,b,h,A,e,ne(Qc,m,s,_,h,e,ne(Qc,b,m,A,_,e,i)));n=x,e=P,r=S,t=T,i=H;continue n}else{var rn=i,on=rn.a,cn=rn.b;return y(on,Nn(cn))}}),ry=Kn(function(n,e,r,t,i){n:for(;;)if(e.b){var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,s=n(u),m=n(l),b=n(c),h=r+2,_=r+1,A=r,x=d(nt,a(co,b,s),h,d(nt,a(co,s,m),_,d(nt,a(co,m,b),A,i))),P=a(w,j(A,_,h),t),S=n,T=f,H=r+3,rn=P,on=x;n=S,e=T,r=H,t=rn,i=on;continue n}else return j(t,i,r)}),ya=z(function(n,e,r){var t=Yw(r),i=d(le,Gw(e),L,t),o=D(ry,e,t,0,L,pu),c=o.a,l=o.b,u=o.c,f=D(ey,e,l,t,0,j(c,L,u)),s=f.a,m=f.b,b=kr(m)?i:q(i,m);return d(Qw,n,a(hd,m$(b),s),a(Mi,b,s))}),Vl=function(n){return{K:a(Y,function(e){return j(3*e,3*e+1,3*e+2)},a(Br,0,yr(n)-1)),ax:m$(Se(a(Y,function(e){var r=e.a,t=e.b,i=e.c;return $([r,t,i])},n)))}},gd=function(n){switch(n.$){case 0:return Hi;case 1:var t=n.a,e=n.b,r=a(Y,ri,e);return d(ya,t,oe,Vl(r));case 2:var t=n.a,e=n.b,r=a(Y,ri,e);return d(ya,t,oe,Vl(r));case 3:var t=n.a,i=n.b;return d(ya,t,oe,i);case 4:var t=n.a,i=n.b;return d(ya,t,function(o){return o.fl},i);case 5:var t=n.a,i=n.b;return d(ya,t,function(o){return o.fl},i);case 6:var t=n.a,i=n.b;return d(ya,t,function(o){return o.fl},i);case 7:var t=n.a,i=n.b;return d(ya,t,function(o){return o.fl},i);case 8:return Hi;case 9:return Hi;default:return Hi}},qv=gd(pd),cc=function(n){var e=n;return e.a7},bd={$:0},Z=bd,se=v(function(n,e){return{$:1,a:n,b:e}}),ay={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"cd"}},ty=1029,iy=function(n){return{$:5,a:n}},Ad=function(n){var e=n;return iy(e)},oy=Ad(ty),cy=1028,ly=Ad(cy),ke=z(function(n,e,r){return e===1?n?a(w,oy,r):a(w,ly,r):r}),_d={src:`
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
    `,attributes:{position:"fl",uv:"R"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Gc=en(function(n,e,r,t){return a(se,e,Fn(function(i,o,c,l,u,f,s,m){return D(On,d(ke,l,t,m),_d,ay,r,{cd:n,d:c,e:o,f,g:i,h:u})}))}),s$={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aR"}},wd={src:`
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
    `,attributes:{position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Lr=en(function(n,e,r,t){return a(se,e,Fn(function(i,o,c,l,u,f,s,m){return D(On,d(ke,l,t,m),wd,s$,r,{aR:n,d:c,e:o,f,g:i,h:u})}))}),yd=v(function(n,e){return{$:3,a:n,b:e}}),uy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aR",pointRadius:"cC",sceneProperties:"g"}},Sd={src:`
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
    `,attributes:{position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",pointRadius:"cC",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},$y=en(function(n,e,r,t){return a(yd,r,Fn(function(i,o,c,l,u,f,s,m){return D(On,m,Sd,uy,t,{aR:n,d:c,e:o,cC:e,f,g:i,h:u})}))}),d$={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a9",sceneProperties:"g"}},Ci=function(n){var e=n;return e},lc=eh,zr=Kn(function(n,e,r,t,i){return a(se,r,Fn(function(o,c,l,u,f,s,m,b){return D(On,d(ke,u,i,b),wd,d$,t,{a9:a(lc,Ci(e),n),d:l,e:c,f:s,g:o,h:f})}))}),vy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a9",pointRadius:"cC",sceneProperties:"g"}},fy=Kn(function(n,e,r,t,i){return a(yd,t,Fn(function(o,c,l,u,f,s,m,b){return D(On,b,Sd,vy,i,{a9:a(lc,Ci(e),n),d:l,e:c,cC:r,f:s,g:o,h:f})}))}),xd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",materialColor:"dk",sceneProperties:"g",viewMatrix:"h"}},Md={src:`
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
    `,attributes:{normal:"u",position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Qi=en(function(n,e,r,t){return a(se,e,Fn(function(i,o,c,l,u,f,s,m){var b=s.a,h=s.b;return D(On,d(ke,l,t,m),Md,xd,r,{X:h,bJ:b.bJ,cs:b.cs,ct:b.ct,cu:b.cu,dk:n,d:c,e:o,f,g:i,h:u})}))}),Cd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",materialColorTexture:"dl",normalMapTexture:"bj",sceneProperties:"g",useNormalMap:"bp",viewMatrix:"h"}},Pd={src:`
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
    `,attributes:{normal:"u",position:"fl",tangent:"fB",uv:"R"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},my=Ee(function(n,e,r,t,i,o){return a(se,t,Fn(function(c,l,u,f,s,m,b,h){var _=b.a,A=b.b;return D(On,d(ke,f,o,h),Pd,Cd,i,{X:A,bJ:_.bJ,cs:_.cs,ct:_.ct,cu:_.cu,dl:n,d:u,e:l,bj:e,f:m,g:c,bp:r,h:s})}))}),Ld={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cW",constantBaseColor:"cX",constantMetallic:"cY",constantRoughness:"cZ",enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",metallicTexture:"$7",normalMapTexture:"bj",roughnessTexture:"dL",sceneProperties:"g",useNormalMap:"bp",viewMatrix:"h"}},sy=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(s){return a(se,u,Fn(function(m,b,h,_,A,x,P,S){var T=P.a,H=P.b;return D(On,d(ke,_,s,S),Pd,Ld,f,{cW:n,cX:e,cY:o,cZ:t,X:H,bJ:T.bJ,cs:T.cs,ct:T.ct,cu:T.cu,$7:i,d:h,e:b,bj:c,f:x,dL:r,g:m,bp:l,h:A})}))}}}}}}}}}}},zd={src:`
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
    `,attributes:{},uniforms:{baseColor:"cV",enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",metallic:"dn",roughness:"dK",sceneProperties:"g",viewMatrix:"h"}},Gi=Ee(function(n,e,r,t,i,o){return a(se,t,Fn(function(c,l,u,f,s,m,b,h){var _=b.a,A=b.b;return D(On,d(ke,f,o,h),Md,zd,i,{cV:n,X:A,bJ:_.bJ,cs:_.cs,ct:_.ct,cu:_.cu,dn:r,d:u,e:l,f:m,dK:e,g:c,h:s})}))}),dy=function(n){return{$:0,a:n}},Yv=v(function(n,e){return{$:1,a:n,b:e}}),Vt=v(function(n,e){if(e.$){var r=e.a.H;return y(r,1)}else return e.a,y(n,0)}),py=function(n){return C(bt,Ba(n),Va(n),Ra(n),1)},p$=C(bt,0,0,0,0),lo=v(function(n,e){if(e.$){var t=e.a.H;return y(t,p$)}else{var r=e.a;return y(n,py(r))}}),kd=v(function(n,e){var r=y(n,e);if(r.a.$){var i=r.a.a.H;return a(Yv,y(i,p$),a(Vt,i,e))}else if(r.b.$){var i=r.b.a.H;return a(Yv,a(lo,i,n),a(Vt,i,e))}else{var t=r.a.a;return r.b.a,dy(t)}}),hy=z(function(n,e,r){return{$:0,a:n,b:e,c:r}}),Ui=en(function(n,e,r,t){return{$:1,a:n,b:e,c:r,d:t}}),gy=en(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),by=function(n){return a(je,n,1)},Rl=a(je,0,0),Ga=v(function(n,e){if(e.$){var t=e.a.H;return y(t,Rl)}else{var r=e.a;return y(n,by(r))}}),Td=en(function(n,e,r,t){var i=C(gy,n,e,r,t);if(i.a.$){var u=i.a.a.H;return C(Ui,y(u,p$),a(Ga,u,e),a(Ga,u,r),a(Vt,u,t))}else if(i.b.$){var u=i.b.a.H;return C(Ui,a(lo,u,n),y(u,Rl),a(Ga,u,r),a(Vt,u,t))}else if(i.c.$){var u=i.c.a.H;return C(Ui,a(lo,u,n),a(Ga,u,e),y(u,Rl),a(Vt,u,t))}else if(i.d.$){var u=i.d.a.H;return C(Ui,a(lo,u,n),a(Ga,u,e),a(Ga,u,r),y(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,d(hy,o,c,l)}}),Ay={src:`
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
    `,attributes:{},uniforms:{backlight:"cT",colorTexture:"cd",sceneProperties:"g"}},Uc=Kn(function(n,e,r,t,i){return a(se,r,Fn(function(o,c,l,u,f,s,m,b){return D(On,d(ke,u,i,b),_d,Ay,t,{cT:Ci(e),cd:n,d:l,e:c,f:s,g:o,h:f})}))}),Dd={src:`
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
    `,attributes:{normal:"u",position:"fl",uv:"R"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},_y=en(function(n,e,r,t){return a(se,e,Fn(function(i,o,c,l,u,f,s,m){var b=s.a,h=s.b;return D(On,d(ke,l,t,m),Dd,Cd,r,{X:h,bJ:b.bJ,cs:b.cs,ct:b.ct,cu:b.cu,dl:n,d:c,e:o,bj:n,f,g:i,bp:0,h:u})}))}),wy=Gl(function(n,e,r,t,i,o,c,l,u){return a(se,c,Fn(function(f,s,m,b,h,_,A,x){var P=A.a,S=A.b;return D(On,d(ke,b,u,x),Dd,Ld,l,{cW:n,cX:e,cY:o,cZ:t,X:S,bJ:P.bJ,cs:P.cs,ct:P.ct,cu:P.cu,$7:i,d:m,e:s,bj:n,f:_,dL:r,g:f,bp:0,h})}))}),ai=z(function(n,e,r){var t=n,i=e;return r<=.5?t+r*(i-t):i+(1-r)*(t-i)}),yy=function(n){var e=n;return d(ai,e.e2,e.e$,.5)},Sy=function(n){var e=n;return d(ai,e.e3,e.e0,.5)},xy=function(n){var e=n;return d(ai,e.e4,e.e1,.5)},My=function(n){return d(me,yy(n),Sy(n),xy(n))},pn=function(n){var e=Ks(n),r=e.a,t=e.b,i=e.c;return{gp:xi(My(n)),g_:r/2,g$:t/2,g0:i/2}},h$=v(function(n,e){switch(n.$){case 0:if(n.b.$){n.a;var l=n.b.a.H;switch(e.$){case 0:return Z;case 1:return Z;case 2:return Z;case 3:return Z;case 4:return Z;case 5:var i=e.a,c=e.c,t=e.d;return C(Gc,l,pn(i),c,t);case 6:var i=e.a,c=e.c,t=e.d;return C(Gc,l,pn(i),c,t);case 7:var i=e.a,c=e.c,t=e.d;return C(Gc,l,pn(i),c,t);case 8:return Z;case 9:return Z;default:return Z}}else{var r=n.b.a;switch(e.$){case 0:return Z;case 1:var i=e.a,c=e.c,t=e.d;return C(Lr,r,pn(i),c,t);case 2:var i=e.a,c=e.c,t=e.d;return C(Lr,r,pn(i),c,t);case 3:var i=e.a,c=e.c,t=e.d;return C(Lr,r,pn(i),c,t);case 4:var i=e.a,c=e.c,t=e.d;return C(Lr,r,pn(i),c,t);case 5:var i=e.a,c=e.c,t=e.d;return C(Lr,r,pn(i),c,t);case 6:var i=e.a,c=e.c,t=e.d;return C(Lr,r,pn(i),c,t);case 7:var i=e.a,c=e.c,t=e.d;return C(Lr,r,pn(i),c,t);case 8:var i=e.a,c=e.c;return C(Lr,r,pn(i),c,0);case 9:var i=e.a,c=e.c;return C(Lr,r,pn(i),c,0);default:var i=e.a,o=e.b,c=e.d;return C($y,r,o,pn(i),c)}}case 1:if(n.b.$){n.a;var l=n.b.a.H,f=n.c;switch(e.$){case 0:return Z;case 1:return Z;case 2:return Z;case 3:return Z;case 4:return Z;case 5:var i=e.a,c=e.c,t=e.d;return D(Uc,l,f,pn(i),c,t);case 6:var i=e.a,c=e.c,t=e.d;return D(Uc,l,f,pn(i),c,t);case 7:var i=e.a,c=e.c,t=e.d;return D(Uc,l,f,pn(i),c,t);case 8:return Z;case 9:return Z;default:return Z}}else{var u=n.b.a,f=n.c;switch(e.$){case 0:return Z;case 1:var i=e.a,c=e.c,t=e.d;return D(zr,u,f,pn(i),c,t);case 2:var i=e.a,c=e.c,t=e.d;return D(zr,u,f,pn(i),c,t);case 3:var i=e.a,c=e.c,t=e.d;return D(zr,u,f,pn(i),c,t);case 4:var i=e.a,c=e.c,t=e.d;return D(zr,u,f,pn(i),c,t);case 5:var i=e.a,c=e.c,t=e.d;return D(zr,u,f,pn(i),c,t);case 6:var i=e.a,c=e.c,t=e.d;return D(zr,u,f,pn(i),c,t);case 7:var i=e.a,c=e.c,t=e.d;return D(zr,u,f,pn(i),c,t);case 8:var i=e.a,c=e.c;return D(zr,u,f,pn(i),c,0);case 9:var i=e.a,c=e.c;return D(zr,u,f,pn(i),c,0);default:var i=e.a,o=e.b,c=e.d;return D(fy,u,f,o,pn(i),c)}}case 2:n.a;var s=n.b,on=n.c,m=a(kd,s,on);if(m.$){var _=m.a,A=_.a;_.b;var x=m.b,P=x.a,S=x.b;switch(e.$){case 0:return Z;case 1:return Z;case 2:return Z;case 3:return Z;case 4:return Z;case 5:return Z;case 6:var i=e.a,c=e.c,h=e.d;return C(_y,A,pn(i),c,h);case 7:var i=e.a,c=e.c,h=e.d;return ne(my,A,P,S,pn(i),c,h);case 8:return Z;case 9:return Z;default:return Z}}else{var b=m.a;switch(e.$){case 0:return Z;case 1:return Z;case 2:var i=e.a,c=e.c,h=e.d;return C(Qi,b,pn(i),c,h);case 3:return Z;case 4:var i=e.a,c=e.c,h=e.d;return C(Qi,b,pn(i),c,h);case 5:return Z;case 6:var i=e.a,c=e.c,h=e.d;return C(Qi,b,pn(i),c,h);case 7:var i=e.a,c=e.c,h=e.d;return C(Qi,b,pn(i),c,h);case 8:return Z;case 9:return Z;default:return Z}}default:n.a;var T=n.b,H=n.c,rn=n.d,on=n.e,cn=C(Td,T,H,rn,on);if(cn.$){var _n=cn.a,wn=_n.a,Bn=_n.b,Tn=cn.b,gn=Tn.a,Vn=Tn.b,I=cn.c,F=I.a,V=I.b,R=cn.d,P=R.a,S=R.b;switch(e.$){case 0:return Z;case 1:return Z;case 2:return Z;case 3:return Z;case 4:return Z;case 5:return Z;case 6:var i=e.a,c=e.c,t=e.d;return c1(wy,wn,Bn,gn,Vn,F,V,pn(i),c,t);case 7:var i=e.a,c=e.c,t=e.d;return sy(wn)(Bn)(gn)(Vn)(F)(V)(P)(S)(pn(i))(c)(t);case 8:return Z;case 9:return Z;default:return Z}}else{var $n=cn.a,tn=cn.b,K=cn.c;switch(e.$){case 0:return Z;case 1:return Z;case 2:var i=e.a,c=e.c,t=e.d;return ne(Gi,$n,tn,K,pn(i),c,t);case 3:return Z;case 4:var i=e.a,c=e.c,t=e.d;return ne(Gi,$n,tn,K,pn(i),c,t);case 5:return Z;case 6:var i=e.a,c=e.c,t=e.d;return ne(Gi,$n,tn,K,pn(i),c,t);case 7:var i=e.a,c=e.c,t=e.d;return ne(Gi,$n,tn,K,pn(i),c,t);case 8:return Z;case 9:return Z;default:return Z}}}}),Jc=function(n){var e=n;return e.iM},Oc=function(n){var e=n;return e.iQ},qc=function(n){var e=n;return e.d4},Cy=function(n){var e=n,r=qc(e.d5),t=Oc(e.d5),i=Jc(e.d5),o=qc(e.d3),c=Oc(e.d3),l=Jc(e.d3),u=qc(e.d2),f=Oc(e.d2),s=Jc(e.d2);return s*c*r+f*o*i+u*l*t-u*c*i-f*l*r-s*o*t>0},Py=function(n){var e=xi(Fa(n)),r=Ye(ha(n)),t=Ye(pa(n)),i=Ye(da(n));return{ey:Cy(n),w:i.iM,x:i.iQ,y:i.d4,z:t.iM,A:t.iQ,B:t.d4,C:r.iM,D:r.iQ,E:r.d4,N:e.iM,O:e.iQ,P:e.d4,cH:1}},Oa=v(function(n,e){return{$:5,a:n,b:e}}),Ed=v(function(n,e){var r=e;switch(r.$){case 0:return Z;case 5:var t=r.a,i=r.b,o=a(Gs,t,n);return a(Oa,o,i);case 1:return a(Oa,n,r);case 3:return a(Oa,n,r);case 2:return a(Oa,n,r);default:return a(Oa,n,r)}}),Id=v(function(n,e){return a(Ed,Py(n),e)}),uc=function(n){return{$:2,a:n}},Ly=v(function(n,e){var r=n.a,t=n.b,i=n.c,o=e.gp;return{gp:{iM:r*o.iM,iQ:t*o.iQ,d4:i*o.d4},g_:r*e.g_,g$:t*e.g$,g0:i*e.g0}}),zy=th,ky=ah,Zv=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var s=n.a,m=n.b,b=n.c,h=ky(t),_=h.iM,A=h.iQ,x=h.d4,P=h.fM,S=zy({fM:P,iM:_*s,iQ:A*m,d4:x*b});return ii(e,r,S,i,o,c,l,u,f)}}}}}}}}}},Nl=v(function(n,e){switch(e.$){case 0:return bd;case 5:var r=e.a,t=e.b;return a(Oa,r,a(Nl,n,t));case 1:var i=e.a,o=e.b;return a(se,a(Ly,n,i),a(Zv,n,o));case 3:return e;case 2:var o=e.a;return uc(a(Zv,n,o));default:var c=e.a;return rd(a(Y,Nl(n),c))}}),g$=v(function(n,e){var r=e;return a(Nl,n,r)}),b$={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},jd=7683,Fd=7682,Ty=d(a$,{dj:0,dH:0,d1:15},{bD:ye,bU:vt,b1:ye,b2:jd},{bD:ye,bU:vt,b1:ye,b2:Fd}),Dy=d(a$,{dj:0,dH:0,d1:15},{bD:ye,bU:vt,b1:ye,b2:Fd},{bD:ye,bU:vt,b1:ye,b2:jd}),A$=v(function(n,e){return n?a(w,Dy,e):a(w,Ty,e)}),Ey={src:`
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
    `,attributes:{normal:"u",position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cJ",viewMatrix:"h"}},Iy=function(n){if(n.$){var e=n.c;return B(Fn(function(r,t,i,o,c,l,u,f){return D(On,a(A$,o,f),Ey,b$,e,{d:i,e:t,f:l,g:r,cJ:u,h:c})}))}else return N},jo=function(n){var e=Iy(n);if(e.$)return Z;var r=e.a;return uc(r)},jy=en(function(n,e,r,t){var i=a(h$,r,pd),o=function(){var s=y(n,e);return s.a?s.b?Si($([i,jo(qv)])):i:s.b?jo(qv):Z}(),c=cc(t),l=c.a,u=c.b,f=c.c;return a(Id,ic(t),a(g$,j(l,u,f),o))}),Fy=v(function(n,e){return C(jy,!0,!0,n,e)}),Wl=function(n){return{$:0,a:n}},Bd=v(function(n,e){return{$:0,a:n,b:e}}),By=function(n){var e=Bu(n),r=e.hP,t=e.gX,i=e.gb;return d(yi,r,t,i)},Vy=function(n){return a(Bd,0,Wl(By(n)))},_$=function(n){var e=n;return e.o},Rt=function(n){var e=n;return ka(e)},Ry=v(function(n,e){var r=n.fl,t=n.u;return a(w,{u:oc(t),fl:ze(r)},e)}),Ny=Ro(function(n,e,r,t,i,o,c){n:for(;;)if(c.b){var l=c.a,u=c.b,f=Ra(l.fl),s=Va(l.fl),m=Ba(l.fl),b=a(Ue,n,m),h=a(te,e,m),_=a(Ue,r,s),A=a(te,t,s),x=a(Ue,i,f),P=a(te,o,f),S=u;n=b,e=h,r=_,t=A,i=x,o=P,c=S;continue n}else return ud({e$:e,e0:t,e1:o,e2:n,e3:r,e4:i})}),Vd=v(function(n,e){var r=Ra(n.fl),t=Va(n.fl),i=Ba(n.fl);return Ul(Ny,i,i,t,t,r,r,e)}),Wy=function(n){var e=d(Hf,Ry,L,f$(n));if(e.b){var r=e.a,t=e.b,i=a(Mi,e,v$(n)),o=a(Vd,r,t);return C(cd,o,n,i,0)}else return $$},Xv=v(function(n,e){var r=n,t=e,i=r.d3,o=i,c=r.d2,l=c;return{iM:t.iM*l.iM+t.iQ*o.iM,iQ:t.iM*l.iQ+t.iQ*o.iQ,d4:t.iM*l.d4+t.iQ*o.d4}}),Fo=function(n){var e=n;return Ta(e)},Et=function(n){var e=n;return e},Hl=function(n){return Xe(2*Je*n)},Kv=Fs({dt:we,d2:rc,d3:l$}),Rd=function(){var n=72,e=a(Rs,n,Hl(1)),r=Te(1),t=Et(Ou),i=Et(Yu),o=Te(1),c=a(En,.5,o),l=d(me,jr,jr,c),u=a(En,-.5,o),f=d(me,jr,jr,u),s=function(h){var _=a(En,h,e),A=Et(a(Xv,Kv,Dl(_))),x=a(En,Rt(_),r),P=a(En,Fo(_),r),S=d(me,x,P,c),T=d(me,x,P,u),H=a(Xt,n,h+1),rn=a(En,H,e),on=Et(a(Xv,Kv,Dl(rn))),cn=a(En,Rt(rn),r),$n=a(En,Fo(rn),r),tn=d(me,cn,$n,u),K=d(me,cn,$n,c);return $([j({u:i,fl:f},{u:i,fl:tn},{u:i,fl:T}),j({u:A,fl:T},{u:on,fl:tn},{u:on,fl:K}),j({u:A,fl:T},{u:on,fl:K},{u:A,fl:S}),j({u:t,fl:l},{u:t,fl:S},{u:t,fl:K})])},m=a(Y,s,a(Br,0,n-1)),b=Vl(Se(m));return u$(Wy(b))}(),nf=gd(Rd),Hy=function(n){var e=n,r=xn(e.d4),t=xn(e.iQ),i=xn(e.iM);if(sn(i,t)<1)if(sn(i,r)<1){var o=Yr(e.d4*e.d4+e.iQ*e.iQ);return{iM:0,iQ:-e.d4/o,d4:e.iQ/o}}else{var o=Yr(e.iQ*e.iQ+e.iM*e.iM);return{iM:-e.iQ/o,iQ:e.iM/o,d4:0}}else if(sn(t,r)<1){var o=Yr(e.d4*e.d4+e.iM*e.iM);return{iM:e.d4/o,iQ:0,d4:-e.iM/o}}else{var o=Yr(e.iM*e.iM+e.iQ*e.iQ);return{iM:-e.iQ/o,iQ:e.iM/o,d4:0}}},Qy=function(n){var e=Hy(n),r=e,t=r,i=n,o=i,c={iM:o.iQ*t.d4-o.d4*t.iQ,iQ:o.d4*t.iM-o.iM*t.d4,d4:o.iM*t.iQ-o.iQ*t.iM};return y(e,c)},Gy=function(n){var e=ec(n),r=Qy(e),t=r.a,i=r.b;return Nr({dt:qu(n),d2:t,d3:i,d5:e})},Nd=function(n){var e=n;return e.ho},Wd=function(n){var e=n;return e.hN},Uy=en(function(n,e,r,t){var i=Gy(_$(t)),o=a(h$,r,Rd),c=function(){var m=y(n,e);return m.a?m.b?Si($([o,jo(nf)])):o:m.b?jo(nf):Z}(),l=Wd(t),u=l,f=Nd(t),s=f;return a(Id,i,a(g$,j(u,u,s),c))}),Jy=v(function(n,e){return C(Uy,!0,!0,n,e)}),ef={src:`
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
    `,attributes:{triangleVertex:"dS"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b_",viewMatrix:"h"}},rf={src:`
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
    `,attributes:{triangleVertex:"dS"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b_",viewMatrix:"h"}},It=function(n){var e=ri(n),r=e.a,t=e.b,i=e.c,o=it(r),c=it(t),l=it(i);return pr({eK:o.iM,eL:c.iM,eM:l.iM,eN:0,eO:o.iQ,eP:c.iQ,eQ:l.iQ,eR:0,eS:o.d4,eT:c.d4,eU:l.d4,eV:0,eW:0,eX:0,eY:0,eZ:0})},Ji=dd($([j({dS:0},{dS:1},{dS:2})])),Oy=v(function(n,e){var r=$d(e),t=pn(r);switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.H,Z;var i=n.b.a;return a(se,t,Fn(function(S,T,H,rn,on,cn,$n,tn){return D(On,d(ke,rn,0,tn),ef,s$,Ji,{aR:i,d:H,e:T,f:cn,g:S,b_:It(e),h:on})}));case 1:if(n.b.$)return n.a,Z;var o=n.b.a,c=n.c;return a(se,t,Fn(function(S,T,H,rn,on,cn,$n,tn){return D(On,d(ke,rn,0,tn),ef,d$,Ji,{a9:a(lc,Ci(c),o),d:H,e:T,f:cn,g:S,b_:It(e),h:on})}));case 2:n.a;var l=n.b,h=n.c,u=a(kd,l,h);if(u.$)return Z;var f=u.a;return a(se,t,Fn(function(S,T,H,rn,on,cn,$n,tn){var K=$n.a,_n=$n.b;return D(On,d(ke,rn,0,tn),rf,xd,Ji,{X:_n,bJ:K.bJ,cs:K.cs,ct:K.ct,cu:K.cu,dk:f,d:H,e:T,f:cn,g:S,b_:It(e),h:on})}));default:n.a;var s=n.b,m=n.c,b=n.d,h=n.e,_=C(Td,s,m,b,h);if(_.$)return Z;var A=_.a,x=_.b,P=_.c;return a(se,t,Fn(function(S,T,H,rn,on,cn,$n,tn){var K=$n.a,_n=$n.b;return D(On,d(ke,rn,0,tn),rf,zd,Ji,{cV:A,X:_n,bJ:K.bJ,cs:K.cs,ct:K.ct,cu:K.cu,dn:P,d:H,e:T,f:cn,dK:x,g:S,b_:It(e),h:on})}))}}),qy=function(){var n=$([{bo:a(je,0,1)},{bo:a(je,1,1)},{bo:a(je,2,1)},{bo:a(je,0,-1)},{bo:a(je,1,-1)},{bo:a(je,2,-1)}]),e=$([j(0,1,2),j(3,5,4),j(3,4,1),j(3,1,0),j(4,5,2),j(4,2,1),j(5,3,0),j(5,0,2)]);return a(Mi,n,e)}(),Yy={src:`
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
    `,attributes:{triangleShadowVertex:"bo"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cJ",triangleVertexPositions:"b_",viewMatrix:"h"}},af=function(n){return uc(Fn(function(e,r,t,i,o,c,l,u){return D(On,a(A$,i,u),Yy,b$,qy,{d:t,e:r,f:c,g:e,cJ:l,b_:It(n),h:o})}))},Zy=en(function(n,e,r,t){var i=a(Oy,r,t),o=y(n,e);return o.a?o.b?Si($([i,af(t)])):i:o.b?af(t):Z}),Xy=v(function(n,e){return C(Zy,!0,!0,n,e)}),w$=function(n){var e=n;return e},Ky=v(function(n,e){var r=ea(e),t=ea(n),i=na(e),o=na(n),c=Kr(e),l=Kr(n);return{e$:a(ae,l,c),e0:a(ae,o,i),e1:a(ae,t,r),e2:a($e,l,c),e3:a($e,o,i),e4:a($e,t,r)}}),nS=function(n){var e=w$(n),r=e.a,t=e.b;return a(Ky,r,t)},tf={src:`
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
    `,attributes:{lineSegmentVertex:"eI"},uniforms:{lineSegmentEndPoint:"eG",lineSegmentStartPoint:"eH",modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},eS=v(function(n,e){return{$:1,a:n,b:e}}),rS=eS({eg:2,et:0,e6:1}),of=rS($([y({eI:0},{eI:1})])),aS=v(function(n,e){var r=nS(e),t=pn(r),i=w$(e),o=i.a,c=i.b;switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.H,Z;var l=n.b.a;return a(se,t,Fn(function(f,s,m,b,h,_,A,x){return D(On,x,tf,s$,of,{aR:l,eG:ze(c),eH:ze(o),d:m,e:s,f:_,g:f,h})}));case 1:if(n.b.$)return Z;var l=n.b.a,u=n.c;return a(se,t,Fn(function(s,m,b,h,_,A,x,P){return D(On,P,tf,d$,of,{a9:a(lc,Ci(u),l),eG:ze(c),eH:ze(o),d:b,e:m,f:A,g:s,h:_})}));case 2:return Z;default:return Z}}),tS=v(function(n,e){return a(aS,n,e)}),$c=function(n){var e=n;return e.gp},vc=function(n){var e=n;return e.hN},cf=v(function(n,e){var r=n,t=e;return r/t}),iS=Kn(function(n,e,r,t,i){n:for(;;){var o=t(e/r),c=a(w,o,i);if(ln(e,n))return c;var l=n,u=e-1,f=r,s=t,m=c;n=l,e=u,r=f,t=s,i=m;continue n}}),lf=v(function(n,e){return n<1?L:D(iS,0,n,n,e,L)}),oS=v(function(n,e){var r=n.fl,t=n.u,i=n.R,o=i,c=o.a,l=o.b;return a(w,{u:oc(t),fl:ze(r),R:a(je,c,l)},e)}),cS=function(n){var e=d(Hf,oS,L,f$(n));if(e.b){var r=e.a,t=e.b,i=a(Mi,e,v$(n)),o=a(Vd,r,t);return C(ld,o,n,i,0)}else return $$},y$=v(function(n,e){var r=n,t=e,i=ka(t);return{iM:i*ka(r),iQ:i*Ta(r),d4:Ta(t)}}),lS=function(){var n=Te(1),e=72,r=a(Br,0,e-1),t=a(lf,e,a(ai,jr,Hl(1))),i=Wt(e/2),o=a(Br,0,i-1),c=a(lf,i,a(ai,Ka(90),Ka(-90))),l=m$(Se(a(Y,function(s){return a(Y,function(m){return{u:Et(a(y$,s,m)),fl:d(me,a(En,Rt(m)*Rt(s),n),a(En,Rt(m)*Fo(s),n),a(En,Fo(m),n)),R:y(a(cf,s,Hl(1)),a(cf,a(Bt,Ka(90),m),Ka(180)))}},c)},t))),u=v(function(s,m){return s*(i+1)+m}),f=Se(a(Y,function(s){return Se(a(Y,function(m){var b=a(u,s+1,m),h=a(u,s,m),_=a(u,s+1,m+1),A=a(u,s,m+1);return $([j(A,_,b),j(A,b,h)])},o))},r));return u$(cS(a(hd,l,f)))}(),Bo=72,Oi=2*Bo,uS=v(function(n,e){n:for(;;){var r=Oi+1,t=a(Xt,Oi,2*n+3),i=a(Xt,Oi,2*n+2),o=2*n+1,c=2*n,l=Oi,u=a(w,j(l,c,i),a(w,j(c,t,i),a(w,j(c,o,t),a(w,j(o,r,t),e))));if(n){var f=n-1,s=u;n=f,e=s;continue n}else return u}}),$S=z(function(n,e,r){return r<=.5?n+r*(e-n):e+(1-r)*(n-e)}),vS=v(function(n,e){n:for(;;){var r=d($S,0,2*Je,n/Bo),t={b4:r,cz:0,cF:1},i={b4:r,cz:1,cF:1},o=a(w,t,a(w,i,e));if(n){var c=n-1,l=o;n=c,e=l;continue n}else return o}}),fS=function(){var n=a(vS,Bo-1,$([{b4:0,cz:0,cF:0},{b4:0,cz:1,cF:0}])),e=a(uS,Bo-1,L);return a(Mi,n,e)}(),mS={src:`
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
    `,attributes:{angle:"b4",offsetScale:"cz",radiusScale:"cF"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cJ",viewMatrix:"h"}},uf=function(n){return uc(Fn(function(e,r,t,i,o,c,l,u){return D(On,a(A$,!0,u),mS,b$,fS,{aR:d(yi,0,0,1),d:t,e:r,f:c,g:e,cJ:l,h:o})}))},sS=function(n){var e=fd(n);return{ey:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,N:e.iM,O:e.iQ,P:e.d4,cH:1}},dS=v(function(n,e){return a(Ed,sS(n),e)}),pS=en(function(n,e,r,t){var i=a(h$,r,lS),o=function(){var u=y(n,e);return u.a?u.b?Si($([i,uf()])):i:u.b?uf():Z}(),c=vc(t),l=c;return a(dS,a(jl,we,$c(t)),a(g$,j(l,l,l),o))}),hS=v(function(n,e){return C(pS,!0,!0,n,e)}),gS=z(function(n,e,r){return{$:1,a:n,b:e,c:r}}),Hd=z(function(n,e,r){return{$:2,a:n,b:e,c:r}}),bS=Kn(function(n,e,r,t,i){return{$:3,a:n,b:e,c:r,d:t,e:i}}),AS=function(n){switch(n.$){case 0:var r=n.a,t=n.b;return a(Bd,r,t);case 1:var r=n.a,t=n.b,e=n.c;return d(gS,r,t,e);case 2:var r=n.a,t=n.b,c=n.c;return d(Hd,r,t,c);default:var r=n.a,t=n.b,i=n.c,o=n.d,c=n.e;return D(bS,r,t,i,o,c)}},_S=AS,Qd=function(n){switch(n.$){case 0:var i=n.a,e=n.b;return $([a(Fy,i,e)]);case 1:var i=n.a,r=n.b;return $([a(Xy,i,r)]);case 3:var i=n.a,t=n.b;return $([a(hS,_S(i),t)]);case 2:var i=n.a,o=n.b;return $([a(Jy,i,o)]);case 4:var c=n.a,l=n.b;return $([a(tS,Vy(c),l)]);default:var u=n.a;return a(ma,Qd,u)}},wS=function(n){return a(ma,Qd,n)},yS=v(function(n,e){return Lw({f2:n.f2,a4:v4(n.f7),gl:n.gl,gt:Te(n.gt),c_:n.c_,a7:y(Jv(Hn(n.cI.iK)),Jv(Hn(n.cI.g2))),bb:wS(e),gQ:n.gQ,hq:n.hq,iA:n.iA,iJ:n.iJ})}),Gd=function(n){return n},SS=v(function(n,e){var r=n,t=Ye(e.gI),i=t.iM,o=t.iQ,c=t.d4,l=a(tc,e.co,e.a6),u=l;return{b6:Ra(u),go:r,ck:Va(u),dC:0,cE:Ba(u),dT:1,iM:-i,iQ:-o,d4:-c}}),xS=function(n){return a(SS,Gd(!0),{a6:n.a6,gI:a(y$,Xe(n.b5),Xe(n.ci)),co:n.co})},Pi=v(function(n,e){return{$:0,a:n,b:e}}),Yc=v(function(n,e){var r=n,t=e;return sn(t,r)>-1}),Zc=v(function(n,e){var r=n,t=e;return r+.5*(t-r)}),MS=Ar({iM:-1,iQ:0,d4:0}),CS=Ar({iM:0,iQ:-1,d4:0}),PS=Ee(function(n,e,r,t,i,o){var c=a(Yc,r,o)?Ou:Yu,l=a(Yc,e,i)?c$:CS,u=a(Yc,n,t)?Bs:MS,f=j(qn(a(Vr,n,t)),qn(a(Vr,e,i)),qn(a(Vr,r,o))),s=d(me,a(Zc,n,t),a(Zc,e,i),a(Zc,r,o)),m=Nr({dt:s,d2:u,d3:l,d5:c});return{f6:m,a7:f}}),Ud=v(function(n,e){return ne(PS,Kr(n),na(n),ea(n),Kr(e),na(e),ea(e))}),Jd=v(function(n,e){var r=e/2;return a(Pi,n,a(Ud,d(ei,-r,-r,-r),d(ei,r,r,r)))}),LS=v(function(n,e){return a(Rn,function(r){if(r.$===2){var t=r.a;return t}else return zu},a(vi,n,e.aQ))}),zS=v(function(n,e){return a(Sn,zu,oa(a(Ze,LS(n),e)))}),kS=v(function(n,e){return a(zS,n,e.gx)}),la=kS,fc=function(n){return{$:5,a:n}},At=function(n){return fc(n)},Xc=function(n){return d(n$,0,1,n<=.04045?n/12.92:a(ca,(n+.055)/1.055,2.4))},TS=function(n){var e=Bu(n),r=e.hP,t=e.gX,i=e.gb;return d(yi,Xc(r),Xc(t),Xc(i))},Wr=function(n){return d(Hd,0,Wl(TS(n)),Wl(0))},mc=v(function(n,e){return{$:2,a:n,b:e}}),S$=v(function(n,e){return{$:4,a:n,b:e}}),sc=v(function(n,e){return{$:3,a:n,b:e}}),x$=v(function(n,e){return{$:1,a:n,b:e}}),DS=z(function(n,e,r){return{iM:n,iQ:e,d4:r}}),ES=v(function(n,e){return{f6:a(js,n,ic(e)),a7:cc(e)}}),IS=v(function(n,e){var r=e;return a(Ne,a(gt,n,r.dt),r.gI)}),jS=v(function(n,e){var r=e;return{o:a(IS,n,r.o),ho:r.ho,hN:r.hN}}),FS=function(n){return n},M$=v(function(n,e){var r=w$(e),t=r.a,i=r.b;return FS(y(n(t),n(i)))}),BS=v(function(n,e){return a(M$,gt(n),e)}),dc=v(function(n,e){return{gp:e,hN:qn(n)}}),VS=v(function(n,e){return a(dc,vc(e),a(gt,n,$c(e)))}),C$=v(function(n,e){var r=e,t=r.a,i=r.b,o=r.c;return j(n(t),n(i),n(o))}),RS=v(function(n,e){return a(C$,gt(n),e)}),pc=v(function(n,e){var r=n.a,t=n.b,i=n.c,o=d(DS,r,t,i);switch(e.$){case 0:var s=e.a,c=e.b;return a(Pi,s,a(ES,o,c));case 1:var s=e.a,l=e.b;return a(x$,s,a(RS,o,l));case 3:var s=e.a,u=e.b;return a(sc,s,a(VS,o,u));case 2:var s=e.a,f=e.b;return a(mc,s,a(jS,o,f));case 4:var s=e.a,m=e.b;return a(S$,s,a(BS,o,m));default:var b=e.a;return fc(a(Y,pc(j(r,t,i)),b))}}),Na=function(n){return pc(j(n,0,0))},ua=function(n){return pc(j(0,n,0))},_r=function(n){return pc(j(0,0,n))},$f=v(function(n,e){var r=function(t){var i=t.a,o=t.b;return a(ua,o,a(Na,i,a(_r,-.495,a(Jd,Wr(a(la,"board color",n)),1))))};return At(a(Y,r,$t(ge(e.a).cr)))}),ti=v(function(n,e){var r=e.a,t=e.b,i=e.c,o=j(r/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(Pi,n,a(Ud,d(ei,-c,-l,-u),d(ei,c,l,u)))}),NS=function(n){return a(ca,n,2)},WS=z(function(n,e,r){return{f6:d(Is,n,e,ic(r)),a7:cc(r)}}),HS=v(function(n,e){var r=a(wi,n,e),t=a(to,n,e);return function(i){var o=i;return a(Ne,r(o.dt),t(o.gI))}}),QS=z(function(n,e,r){var t=r;return{o:d(HS,n,e,t.o),ho:t.ho,hN:t.hN}}),GS=z(function(n,e,r){return a(M$,a(wi,n,e),r)}),US=z(function(n,e,r){return a(dc,vc(r),d(wi,n,e,$c(r)))}),JS=z(function(n,e,r){return a(C$,a(wi,n,e),r)}),Li=z(function(n,e,r){switch(r.$){case 0:var l=r.a,t=r.b;return a(Pi,l,d(WS,n,e,t));case 1:var l=r.a,i=r.b;return a(x$,l,d(JS,n,e,i));case 3:var l=r.a,o=r.b;return a(sc,l,d(US,n,e,o));case 2:var l=r.a,c=r.b;return a(mc,l,d(QS,n,e,c));case 4:var l=r.a,u=r.b;return a(S$,l,d(GS,n,e,u));default:var f=r.a;return fc(a(Y,a(Li,n,e),f))}}),vf=v(function(n,e){var r=n.a,t=n.b,i=t.a,o=t.b,c=t.c;return a(Li,a(Ne,Ju(r),Ar({iM:i,iQ:o,d4:c})),Xe(e))}),Od=z(function(n,e,r){var t=e.dP;switch(t.$){case 1:var f=t.a.au,s=t.a.cK,m=t.a.bP;if(t.a.dp,ln(s,r)){var i=function(){switch(m){case 0:return y({iM:.5,iQ:.5,d4:-.5},j(-1,0,0));case 1:return y({iM:-.5,iQ:-.5,d4:-.5},j(1,0,0));case 2:return y({iM:-.5,iQ:.5,d4:-.5},j(0,-1,0));default:return y({iM:.5,iQ:-.5,d4:-.5},j(0,1,0))}}(),o=a(re,"duration of step animation",n),c=(n.aa-f)/o,l=NS(c),u=a(Ue,ve(90),l*ve(90));return a(vf,i,u)}else return oe;case 2:var f=t.a.au,s=t.a.cK,m=t.a.bP;if(ln(s,r)){var i=function(){switch(m){case 0:return y({iM:.5,iQ:.5,d4:-.5},j(-1,0,0));case 1:return y({iM:-.5,iQ:-.5,d4:-.5},j(1,0,0));case 2:return y({iM:-.5,iQ:.5,d4:-.5},j(0,-1,0));default:return y({iM:.5,iQ:-.5,d4:-.5},j(0,1,0))}}(),o=a(re,"duration of mistake animation",n),c=(n.aa-f)/o,l=Ta(Je*c),u=d(n$,ve(0),ve(45),l*ve(45));return a(vf,i,u)}else return oe;default:return oe}}),OS=a(Ne,we,rc),Pa=v(function(n,e){return d(Li,OS,Xe(n),e)}),qS=a(Ne,we,l$),Vo=v(function(n,e){return d(Li,qS,Xe(n),e)}),YS=v(function(n,e){var r=a(re,"cubes side length",n),t=a(la,"color 2",n),i=a(_r,-(r/4),a(ti,Wr(t),j(r,r,r/2))),o=a(la,"color 1",n),c=a(_r,r/4,a(ti,Wr(o),j(r,r,r/2))),l=ge(e.a).eE,u=l.a,f=u.a,s=u.b,m=l.b,b=function(){if(m.b)switch(m.a){case 2:return m.a,m.b,Pa(ve(180));case 1:return m.a,m.b,Pa(ve(90));default:return m.a,m.b,Vo(-ve(90))}else switch(m.a){case 2:return m.a,m.b,oe;case 1:return m.a,m.b,Pa(-ve(90));default:return m.a,m.b,Vo(ve(90))}}();return a(ua,s,a(Na,f,a(_r,r/2,C(Od,n,e,y(f,s),b(At($([c,i])))))))}),ZS=z(function(n,e,r){return{o:a(Ne,n,e),ho:qn(r.ho),hN:qn(r.hN)}}),XS=z(function(n,e,r){return a(mc,n,d(ZS,we,c$,{ho:Te(r),hN:Te(e)}))}),KS=v(function(n,e){return(e-xa(e/n)*n)/n}),nx=function(n){return 2*Je*n},Ql=en(function(n,e,r,t){return n+(e-n)*(1+ka(nx(a(KS,r,t))))/2}),ex=v(function(n,e){var r=ge(e.a).cr.hn,t=r.a,i=r.b;return a(ua,i,a(Na,t,a(_r,C(Ql,-.3,-.4,.5,n.aa),a(Pa,ve(90),d(XS,Wr(a(la,"finish mark color",n)),.3,1)))))}),rx=v(function(n,e){var r=a(re,"cubes side length",n),t=a(la,"color 2",n),i=a(_r,-(r/4),a(ti,Wr(t),j(r,r,r/2))),o=a(la,"color 1",n),c=a(_r,r/4,a(ti,Wr(o),j(r,r,r/2))),l=ge(e.a).dD,u=l.a,f=u.a,s=u.b,m=l.b,b=function(){if(m.b)switch(m.a){case 2:return m.a,m.b,Pa(ve(180));case 1:return m.a,m.b,Pa(ve(90));default:return m.a,m.b,Vo(-ve(90))}else switch(m.a){case 2:return m.a,m.b,oe;case 1:return m.a,m.b,Pa(-ve(90));default:return m.a,m.b,Vo(ve(90))}}();return a(ua,s,a(Na,f,a(_r,r/2,C(Od,n,e,y(f,s),b(At($([c,i])))))))}),ax=en(function(n,e,r,t){var i=j(n,e,r),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,f=l*2-u,s=function(_){var A=_<0?_+1:_>1?_-1:_;return A*6<1?f+(u-f)*A*6:A*2<1?u:A*3<2?f+(u-f)*(2/3-A)*6:f},m=s(o-1/3),b=s(o),h=s(o+1/3);return C(sa,h,b,m,t)}),tx=z(function(n,e,r){return C(ax,n,e,r,1)}),zi=z(function(n,e,r){var t=n,i=r;return{iM:t.iM+e*(i.iM-t.iM),iQ:t.iQ+e*(i.iQ-t.iQ),d4:t.d4+e*(i.d4-t.d4)}}),ix=z(function(n,e,r){var t=ic(r),i=da(t),o=pa(t),c=ha(t),l=d(zi,n,e,Fa(t)),u=e>=0?Nr({dt:l,d2:i,d3:o,d5:c}):Nr({dt:l,d2:Xr(i),d3:Xr(o),d5:Xr(c)}),f=cc(r),s=f.a,m=f.b,b=f.c,h=qn(a(En,e,s)),_=qn(a(En,e,m)),A=qn(a(En,e,b));return{f6:u,a7:j(h,_,A)}}),ff=function(n){return ec(_$(n))},ox=function(n){return qu(_$(n))},cx=z(function(n,e,r){var t=qn(a(En,e,Wd(r))),i=qn(a(En,e,Nd(r))),o=e>=0?ff(r):Xr(ff(r)),c=d(zi,n,e,ox(r));return{o:a(Ne,c,o),ho:i,hN:t}}),lx=z(function(n,e,r){return a(M$,a(zi,n,e),r)}),ux=z(function(n,e,r){return a(dc,a(En,xn(e),vc(r)),d(zi,n,e,$c(r)))}),$x=z(function(n,e,r){return a(C$,a(zi,n,e),r)}),qd=v(function(n,e){switch(e.$){case 0:var c=e.a,r=e.b;return a(Pi,c,d(ix,we,n,r));case 1:var c=e.a,t=e.b;return a(x$,c,d($x,we,n,t));case 3:var c=e.a,i=e.b;return a(sc,c,d(ux,we,n,i));case 2:var c=e.a,o=e.b;return a(mc,c,d(cx,we,n,o));case 4:var c=e.a,l=e.b;return a(S$,c,d(lx,we,n,l));default:var u=e.a;return fc(a(Y,qd(n),u))}}),vx=C(sa,255/255,255/255,255/255,1),fx=v(function(n,e){var r=function(o){var c=e.dP;return c.$===3?d(tx,C(Ql,0,1,6,n.aa+.03*o),1,.8):vx},t=function(o){var c=e.dP;return c.$===3?a(Dn,qd(.9),_r(C(Ql,.1,.7,6,n.aa+.3*o))):oe},i=v(function(o,c){var l=c.a,u=c.b;return a(ua,u,a(Na,l,a(_r,-.49,a(t,o,a(Jd,Wr(r(o)),1)))))});return At(a(ci,i,$t(ge(e.a).fi)))}),mx=C(sa,164/255,0/255,0/255,1),sx=C(sa,239/255,41/255,41/255,1),dx=v(function(n,e){return a(sc,n,a(dc,Te(e),we))}),px=v(function(n,e){var r=n.dE.ex?sx:mx,t=e.bw,i=t.a,o=t.b;return a(ua,o,a(Na,i,a(dx,Wr(r),.2)))}),hx=v(function(n,e){return y(n,e)}),gx=function(n){var e=n.hn,r=n.bN;return d(qf,hx,a(w,e,r),r)},Yd=v(function(n,e){var r=n.a,t=n.b,i=function(o){var c=o.a,l=c.a,u=c.b,f=o.b,s=f.a,m=f.b;return t?ln(r,c)&&ln(s,l+1)||ln(r,f)&&ln(s,l-1):ln(r,c)&&ln(m,u-1)||ln(r,f)&&ln(m,u+1)};return a(Rr,i,gx(e))}),bx=a(Ne,we,ac),Ax=v(function(n,e){return d(Li,bx,Xe(n),e)}),Zd=v(function(n,e){var r=e.a,t=r.a,i=r.b,o=e.b,c=1-a(re,"cubes side length",n),l=a(ua,-.5,a(ti,Wr(a(la,"wall color",n)),j(1+c,c,c))),u=a(Ax,ve(90),l);return a(ua,i,a(Na,t,function(){return o?u:l}()))}),qi=v(function(n,e){return{$:0,a:n,b:e}}),_x=function(n){return $([a(qi,n,0),a(qi,n,1),a(qi,a(To,0,n),0),a(qi,a(To,2,n),1)])},Xd=function(n){return a(ma,_x,$t(n))},wx=v(function(n,e){var r=a(Sn,ge(e.a).cr,e.q.e8);return At(a(Y,Zd(n),a(ja,function(t){return!a(Yd,t,r)},Xd(r))))}),yx=v(function(n,e){return At(a(Y,Zd(n),a(ja,function(r){return!a(Yd,r,ge(e.a).fi)},Xd(ge(e.a).cr))))}),Sx=function(n){return n},xx=function(n){return Sx(1.2*a(ca,2,n))},Kc=Ku({iM:.37208,iQ:.37529}),Mx={$:5},Cx=Mx,Px=Ku({iM:.44757,iQ:.40745}),Lx=function(n){return n},mf=function(n){return n},nl=function(n){return n},zx={$:1},kx=zx,Tx=v(function(n,e){var r=n,t=xi(e.fl),i=t.iM,o=t.iQ,c=t.d4,l=a(tc,e.co,e.a6),u=l;return{b6:Ra(u),go:r,ck:Va(u),dC:0,cE:Ba(u),dT:2,iM:i,iQ:o,d4:c}}),sf=function(n){return a(Tx,Gd(!0),{a6:n.a6,co:n.co,fl:Ju(n.fl)})},Dx=v(function(n,e){var r=n,t=e;return sn(t,r)>0}),df=function(n){var e=n;return e},Ex=function(n){n:for(;;){if(ln(n.ev,jr)&&ln(n.ew,jr))return Ae;if(a(Dx,qn(n.ev),qn(n.ew))){var e={a6:n.a6,ev:n.ew,ew:n.ev,fF:Xr(n.fF)};n=e;continue n}else{var r=xn(df(n.ew)/Je),t=xn(df(n.ev)/Je),i=Ye(n.fF),o=i.iM,c=i.iQ,l=i.d4,u=a(tc,md(1),n.a6),f=u;return{b6:t*Ra(f),go:!1,ck:t*Va(f),dC:r/t,cE:t*Ba(f),dT:3,iM:o,iQ:c,d4:l}}}},Ix=function(n){return Ex({a6:n.a6,ev:n.ev,ew:n.ew,fF:a(y$,Xe(n.b5),Xe(n.ci))})},jx=v(function(n,e){return{$:2,a:n,b:e}}),Kd=function(n){return{$:0,a:n}},Yi=function(n){var e=n;return e},Fx=function(n){var e=n;return e.go},Bx=Kd(Dt.a),Vx=v(function(n,e){var r=v(function(t,i){var o=i.a,c=i.b;return n(t)?y(a(w,t,o),c):y(o,a(w,t,c))});return d(le,r,y(L,L),e)}),Rx=function(n){var e=n;return pr({eK:e.iM,eL:e.cE,eM:0,eN:0,eO:e.iQ,eP:e.ck,eQ:0,eR:0,eS:e.d4,eT:e.b6,eU:0,eV:0,eW:e.dT,eX:e.dC,eY:0,eZ:0})},Nx=Fn(function(n,e,r,t,i,o,c,l){var u=a(Vx,Fx,$([Yi(n),Yi(e),Yi(r),Yi(t)])),f=u.a,s=u.b;if(f.b){var m=q(f,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var b=m.a,h=m.b,_=h.a,A=h.b,x=A.a,P=A.b,S=P.a;return a(jx,a(Y,Rx,f),{bJ:a(He,b,_),cs:a(He,x,S),ct:a(He,i,o),cu:a(He,c,l)})}else return Bx}else return Kd({bJ:a(He,n,e),cs:a(He,r,t),ct:a(He,i,o),cu:a(He,c,l)})}),Wx=v(function(n,e){return ii(Nx,n,e,Ae,Ae,Ae,Ae,Ae,Ae)}),Hx=v(function(n,e){xS({b5:a(re,"azimuth for third light",n),a6:$4(Lx(2e3)),ci:a(re,"elevation for third light",n),co:nl(100)}),Ix({b5:a(re,"azimuth for fourth light",n),a6:Kc,ci:a(re,"elevation for fourth light",n),ev:nl(120),ew:nl(40)});var r=ge(e.a).dD,t=r.a,i=t.a,o=t.b,c=function(){var m=e.dP;if(m.$===1){var b=m.a.au,h=m.a.bP,_=a(re,"duration of step animation",n),A=(n.aa-b)/_,x=function(){switch(h){case 0:return y(0,A);case 1:return y(0,-A);case 2:return y(-A,0);default:return y(A,0)}}(),P=x.a,S=x.b;return y(i+P,o+S)}else return y(i,o)}(),l=c.a,u=c.b,f=sf({a6:Px,co:mf(a(re,"lumens of following lights",n)),fl:{iM:l+.5,iQ:u+.5,d4:a(re,"height of following lights",n)}}),s=sf({a6:Kc,co:mf(a(re,"lumens of following lights",n)),fl:{iM:l-.5,iQ:u-.5,d4:a(re,"height of following lights",n)}});return a(yS,{f2:kx,f7:a(la,"background color",n),gl:a(Vs,n,e),gt:.1,c_:n.c_,gQ:xx(6),hq:a(Wx,f,s),cI:n.cI,iA:Cx,iJ:Kc},e.q.c4?$([a($f,n,e),a(YS,n,e),a(wx,n,e),a(px,n,e)]):$([a($f,n,e),a(rx,n,e),a(ex,n,e),a(yx,n,e),a(fx,n,e)]))}),Qx=v(function(n,e){return a(ta,L,$([a(l4,n,e),a(Hx,n,e)]))}),Gx=d(Me,23,23,23),Ux=a(er,Pu,p.$9),P$=function(n){return a(Ln,$([nn(un),a(di,0,10),Ux,Cr(20)]),xe(n))},Jx={$:10},Ox=d(Me,42,123,154),ot=v(function(n,e){return a(Uu,$([De(Lo),a(di,10,6),pe(Ox),qe(8)]),{c8:xe(n),hB:B(e)})}),qx=function(n){return a(Ln,$([nn(un),bn(kn(100)),cr(10),pe(dt),De(pt),bi($([Ai])),si,Be(a(zn,"user-select","text")),qe(10)]),xe(n.q.c5))},Yx=v(function(n,e){return a(Xn,$([ce(10),nn(un)]),$([a(ot,"Export Levels",Jx),qx(e)]))}),Zx={$:11},Xx=function(n){return{$:12,a:n}},Kx=function(n){return{$:0,a:n}},nM={$:1},eM=a(Mr,Mn,Mo("autocomplete")),rM=function(n){var e=v(function(i,o){if(i.$===4&&i.b.$===5){var c=i.b;c.b;var l=c.c;return o.$===1?B(l):o}else return o}),r=d(le,e,N,n);if(r.$===1)return Ve;var t=r.a;return us(xa(t/2))},n1=a(er,Km,p.gs),aM=d(qr,186/255,189/255,182/255),tM=a(di,12,12),iM=$([tM,qe(3),ur(aM),pe(no),ht(1),ce(5),nn(un),bn(ie)]),oM=function(n){if(n.$===8){var e=n.a;return B(e)}else return N},cM=function(n){n:for(;;)switch(n.$){case 1:return!1;case 0:return!0;case 2:return!0;case 3:var r=n.b,e=r;n=e;continue n;default:var r=n.b;return!0}},lM=function(n){if(n.$)return!0;var e=n.a;switch(e){case 0:return!1;case 1:return!1;case 2:return!0;default:return!0}},uM=function(n){return{b8:-n.b8,eB:-n.eB,fs:-n.fs,cN:-n.cN}},pf=function(n){n:for(;;)switch(n.$){case 2:return!0;case 1:return!1;case 0:return!1;case 3:var e=n.b,r=e;n=r;continue n;default:var e=n.b,r=e;n=r;continue n}},$M=function(n){n:for(;;)switch(n.$){case 1:return!1;case 0:return!0;case 2:return!1;case 3:var e=n.b,r=e;n=r;continue n;default:var e=n.b,r=e;n=r;continue n}},e1=en(function(n,e,r,t){return"pad-"+(jn(n)+("-"+(jn(e)+("-"+(jn(r)+("-"+jn(t)))))))}),vM=en(function(n,e,r,t){switch(r.$){case 9:return W(t,{c:a(w,r,t.c)});case 7:var i=r.a;return pf(i)?W(t,{n:a(w,r,t.n),I:a(w,r,t.I),c:a(w,r,t.c)}):e?W(t,{n:a(w,r,t.n)}):W(t,{c:a(w,r,t.c)});case 8:var o=r.a;return e?pf(o)?W(t,{n:a(w,r,t.n),c:a(w,r,t.c)}):$M(o)?W(t,{c:a(w,r,t.c)}):W(t,{c:a(w,r,t.c)}):W(t,{n:a(w,r,t.n),c:a(w,r,t.c)});case 6:return W(t,{n:a(w,r,t.n)});case 5:return W(t,{n:a(w,r,t.n)});case 4:switch(r.b.$){case 5:return r.b,W(t,{n:a(w,r,t.n),I:a(w,r,t.I),c:a(w,r,t.c),br:a(w,r,t.br)});case 7:r.a;var c=r.b;c.a;var l=c.b,u=c.c,f=c.d,s=c.e;if(n)return W(t,{V:a(w,r,t.V),c:a(w,r,t.c)});var m=l-a(Ue,l,f),b=Be(a(zn,"line-height","calc(1.0em + "+(mn(2*a(Ue,l,f))+"px)"))),h=Be(a(zn,"height","calc(1.0em + "+(mn(2*a(Ue,l,f))+"px)"))),_=f-a(Ue,l,f),A=a(Pn,za,D(La,C(e1,m,u,_,s),m,u,_,s));return W(t,{V:a(w,r,t.V),I:a(w,h,a(w,b,t.I)),c:a(w,A,t.c)});case 6:return r.b,W(t,{V:a(w,r,t.V),c:a(w,r,t.c)});case 10:return W(t,{V:a(w,r,t.V),c:a(w,r,t.c)});case 2:return W(t,{n:a(w,r,t.n)});case 1:return r.b,W(t,{n:a(w,r,t.n)});default:return r.a,r.b,W(t,{c:a(w,r,t.c)})}case 0:return t;case 1:return r.a,W(t,{I:a(w,r,t.I)});case 2:return W(t,{I:a(w,r,t.I)});case 3:return W(t,{c:a(w,r,t.c)});default:return W(t,{I:a(w,r,t.I)})}}),fM=z(function(n,e,r){return function(t){return{V:Nn(t.V),n:Nn(t.n),I:Nn(t.I),c:Nn(t.c),br:Nn(t.br)}}(d(Gn,a(vM,n,e),{V:L,n:L,I:L,c:L,br:L},r))}),mM=function(n){var e=n.cN,r=n.fs,t=n.b8,i=n.eB;return k(e)+("px "+(k(r)+("px "+(k(t)+("px "+(k(i)+"px"))))))},sM=function(n){var e=function(r){return 1-r}(a(Ue,1,a(te,0,n)));return a(Pn,Cl,a(Ml,"transparency-"+jn(e),e))},dM=d(qr,136/255,138/255,133/255),hf=z(function(n,e,r){var t=n.a,i=n.b;return a(Ln,q(e,q($([De(dM),Qn(p.e9+(" "+p.hI)),n1,ur(C(xl,0,0,0,0)),pe(C(xl,0,0,0,0)),bn(un),nn(un),sM(r?1:0)]),t)),i)}),pM=ys("spellcheck"),hM=a(Mr,Mn,pM),gM=a(Mr,Mn,Qu),bM=z(function(n,e,r){var t=q(iM,e),i=d(fM,ln(n.dT,nM),lM(r.c8),t),o=function(){var s=n.dT;return s.$?a(Sn,!1,a(Rn,cM,oa(Nn(a(Ze,oM,t))))):(s.a,!1)}(),c=function(s){if(s.$===4&&s.b.$===7){s.a;var m=s.b;m.a;var b=m.b,h=m.c,_=m.d,A=m.e;return B({b8:a(te,0,xa(_-3)),eB:a(te,0,xa(A-3)),fs:a(te,0,xa(h-3)),cN:a(te,0,xa(b-3))})}else return N},l=a(Sn,{b8:0,eB:0,fs:0,cN:0},oa(Nn(a(Ze,c,t)))),u=C(Jn,de,function(){var s=n.dT;return s.$?sr("textarea"):(s.a,sr("input"))}(),q(function(){var s=n.dT;if(s.$)return $([n1,bn(un),Qn(p.he),rM(t),As(l),Mn(a(zn,"margin",mM(uM(l)))),Mn(a(zn,"box-sizing","content-box"))]);var m=s.a;return $([Mn(Hu(m)),Qn(p.hi)])}(),q($([gM(r.ij),Mn(Wu(r.fb)),Du(r.c8),hM(n.ak),a(Sn,Ve,a(Rn,eM,n.ad))]),i.I)),Wn(L)),f=function(){var s=n.dT;return s.$===1?C(Jn,de,Pe,q((o?w(si):oe)($([nn(un),a(Rr,Pl,t)?Ve:Qn(p.el),Qn(p.hh)])),i.c),Wn($([C(Jn,Pt,Pe,a(w,nn(un),a(w,bn(un),a(w,_o(u),a(w,Qn(p.hg),i.br)))),Wn(function(){if(r.ij===""){var m=r.hK;if(m.$===1)return $([xe("\xA0")]);var b=m.a;return $([d(hf,b,L,r.ij==="")])}else return $([Am(a(Tt,$([Fe(p.hf)]),$([tr(r.ij+"\xA0")])))])}()))]))):(s.a,C(Jn,de,Pe,a(w,nn(un),a(w,a(Rr,Pl,t)?Ve:Qn(p.el),Se($([i.c,function(){var m=r.hK;if(m.$===1)return L;var b=m.a;return $([Ko(d(hf,b,i.V,r.ij===""))])}()])))),Wn($([u]))))}();return d(Tu,a(w,a(er,as,p.gC),a(w,Eu(r.c8)?Ve:ce(5),a(w,ku,i.n))),r.c8,f)}),AM=bM({ad:N,ak:!1,dT:Kx("text")}),_M=function(n){return a(AM,$([nn(un),bn(kn(100)),cr(10),pe(dt),De(pt),bi($([Ai])),si,Be(a(zn,"user-select","text")),qe(10)]),{c8:_s("Imported Levels"),fb:Xx,hK:N,ij:n.q.c6})},wM=v(function(n,e){return a(Xn,$([ce(10),nn(un)]),$([a(ot,"Import Levels",Zx),_M(e)]))}),yM=v(function(n,e){return a(Xn,$([nn(un),ce(10)]),$([P$("Import/Export Levels"),a(Yx,n,e),a(wM,n,e)]))}),SM={$:7},xM=function(n){return{$:4,a:n}},MM={$:9},CM={$:8},PM=function(n){var e=n;return e.m},LM=function(n){return yr(PM(n))+1},zM=d(Me,140,140,140),kM=Kn(function(n,e,r,t,i){return{$:0,a:n,b:e,c:r,d:t,e:i}}),TM=z(function(n,e,r){return{$:0,a:n,b:e,c:r}}),DM=function(n){return d(le,v(function(e,r){var t=r.a,i=r.b;return y(function(){if(t.$)if(e.$===4&&e.b.$===7){var o=e.b,c=o.a,l=o.b,u=o.c,f=o.d,s=o.e;return B(D(kM,c,l,u,f,s))}else return N;else return t.a,t}(),function(){if(i.$)if(e.$===4&&e.b.$===5){var c=e.b,l=c.a,o=c.b,u=c.c;return B(d(TM,l,o,u))}else return N;else{var o=i.a;return i}}())}),y(N,N),n)},EM=v(function(n,e){var r=DM(n),t=r.a,i=r.b;if(i.$===1)return C(Jn,at,Pe,a(w,Qn(p.bx+(" "+(p.aA+(" "+p.d0)))),a(w,nn(ie),a(w,bn(ie),n))),Wn(e));var o=i.a,c=o.a,l=o.b,u=o.c,f=function(){if(t.$)return N;var h=t.a;h.a;var _=h.b,A=h.c,x=h.d,P=h.e;if(sn(A,l/2)>-1&&sn(x,u/2)>-1){var S=_-u/2,T=A-l/2,H=P-l/2,rn=x-u/2;return B(a(Pn,za,D(La,C(e1,S,T,rn,H),S,T,rn,H)))}else return N}();if(f.$){var m=-(u/2),b=-(l/2);return C(Jn,de,Pe,n,Wn($([C(Jn,at,Pe,a(w,Qn(p.bx+(" "+(p.aA+(" "+p.d0)))),a(w,Mn(a(zn,"margin",mn(m)+("px"+(" "+(mn(b)+"px"))))),a(w,Mn(a(zn,"width","calc(100% + "+(k(l)+"px)"))),a(w,Mn(a(zn,"height","calc(100% + "+(k(u)+"px)"))),a(w,a(Pn,Cu,d(Mu,c,l,u)),L))))),Wn(e))])))}else{var s=f.a;return C(Jn,at,Pe,a(w,Qn(p.bx+(" "+(p.aA+(" "+p.d0)))),a(w,nn(ie),a(w,bn(ie),q(n,$([s]))))),Wn(e))}}),IM=v(function(n,e){var r=v(function(t,i){return a(Ln,$([nn(kn(30)),bn(kn(30)),Cr(20),Kt(xM(t+1)),pe(zM),Ir,qe(6),ur(dt),ht(ln(LM(e.a),t+1)?4:0)]),a(Ln,$([Co,xr]),xe(k(t+1))))});return a(Xn,$([ce(10)]),$([P$("Level Selector"),a(EM,$([ce(10)]),a(ci,r,Qs(e.a))),a(Qr,$([ce(10)]),$([a(ot,"Add level",SM),a(ot,"Remove level",CM),a(ot,"Move level up",MM)]))]))}),jM=function(n){return{$:2,a:n}},FM={$:3},BM={$:1},VM=d(Me,180,180,180),RM=v(function(n,e){return{$:11,a:n,b:e}}),NM=v(function(n,e){switch(e.$){case 0:return Ve;case 2:var r=e.a;return hi(r);case 6:var t=e.a;return pi(t);case 5:var i=e.a;return mi(i);case 7:var t=e.a;return xu(t);case 8:var t=e.a;return su(t);case 3:var t=e.a,i=e.b;return a(er,t,i);case 4:var o=e.a,c=e.b;return a(Pn,o,c);case 9:var l=e.a,u=e.b;return a(du,l,a(wu,n,u));case 1:var f=e.a;return Mn(a(ps,n,f));default:var s=e.a,m=e.b;return a(Xo,s,m)}}),WM=function(n){return a(NM,st,n)},HM=v(function(n,e){var r=e.a,t=e.b,i=WM(n);switch(i.$){case 4:var o=i.b;return y(a(w,o,r),t);case 10:i.a;var c=i.b;return y(r,a(Im,t,c));default:return y(r,t)}}),QM=function(n){var e=d(Gn,HM,y(L,Bm),n),r=e.a,t=e.b;return a(w,Em(t),r)},GM=function(n){return a(Pn,ds,a(RM,1,QM(n)))},UM=function(n){return a(ju,"mouseenter",Yn(n))},JM=a(Mr,Mn,UM),OM=function(n){return a(ju,"mouseleave",Yn(n))},qM=a(Mr,Mn,OM),YM=v(function(n,e){return a(Xn,L,$([P$("Solutions"),a(Xn,$([ce(10)]),$([a(ot,"Calculate all solutions",BM),a(Xn,$([ce(4)]),a(ci,v(function(r,t){return a(Ln,$([JM(jM(t)),qM(FM),pe(VM),GM($([pe(dt),De(pt)])),Ir,cr(10)]),xe("Solution "+k(r)))}),ge(e.a).ea))]))]))}),ZM=v(function(n,e){return e.q.c4?$([a(IM,n,e),a(YM,n,e),a(yM,n,e)]):L}),XM=function(n){return{$:0,a:n}},KM=Nu(1),nC=v(function(n,e){return a(os,L,{gr:e.q.c4,g7:$s,c8:a(KM,L,xe("Editor")),fb:XM})}),eC=v(function(n,e){return a(Xn,$([nn(un),bn(un)]),$([a(Xn,$([Su,ws,nn(kn(500)),bn(un),cr(20),ce(20),De(Gx),Cr(13)]),a(w,a(nC,n,e),a(ZM,n,e)))]))}),rC=ne(qb,Qx,E_,$A,oA,eC,o4);const aC={Main:{init:rC(a(an,function(n){return Yn({hj:n})},a(O,"inputs",a(an,function(n){return a(an,function(e){return a(an,function(r){return a(an,function(t){return a(an,function(i){return a(an,function(o){return a(an,function(c){return Yn({aa:c,c_:o,gL:i,eA:t,dE:r,cI:e,iI:n})},a(O,"clock",ue))},a(O,"devicePixelRatio",ue))},a(O,"dt",ue))},a(O,"keyboard",a(an,function(t){return a(an,function(i){return a(an,function(o){return a(an,function(c){return a(an,function(l){return a(an,function(u){return a(an,function(f){return a(an,function(s){return a(an,function(m){return Yn({f1:m,gz:s,c0:f,gK:u,eB:l,hM:c,fs:o,h1:i,dW:t})},a(O,"alt",In))},a(O,"control",In))},a(O,"down",In))},a(O,"downs",ra(aa)))},a(O,"left",In))},a(O,"pressedKeys",ra(aa)))},a(O,"right",In))},a(O,"shift",In))},a(O,"up",In))))},a(O,"pointer",a(an,function(r){return a(an,function(t){return a(an,function(i){return a(an,function(o){return a(an,function(c){return a(an,function(l){return a(an,function(u){return a(an,function(f){return Yn({c0:f,ex:u,hu:l,hS:c,hT:o,dW:i,iM:t,iQ:r})},a(O,"down",In))},a(O,"isDown",In))},a(O,"move",In))},a(O,"rightDown",In))},a(O,"rightUp",In))},a(O,"up",In))},a(O,"x",ue))},a(O,"y",ue))))},a(O,"screen",a(an,function(e){return a(an,function(r){return Yn({g2:r,iK:e})},a(O,"height",ue))},a(O,"width",ue))))},a(O,"wheel",a(an,function(n){return a(an,function(e){return Yn({gD:e,gE:n})},a(O,"deltaX",ue))},a(O,"deltaY",ue)))))))(0)}},vn={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},tC=n=>{const e=h=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(h.code),r=h=>["AltLeft","AltRight"].includes(h.code),t=h=>["ShiftLeft","ShiftRight"].includes(h.code),i=h=>h.code=="ArrowLeft",o=h=>h.code=="ArrowRight",c=h=>h.code=="ArrowUp",l=h=>h.code=="ArrowDown",u=h=>h.button==0,f=h=>h.button==2;function s(h){h.keyboard.pressedKeys=[],h.keyboard.control=!1,h.keyboard.alt=!1,h.keyboard.shift=!1,h.keyboard.left=!1,h.keyboard.right=!1,h.keyboard.up=!1,h.keyboard.down=!1,h.pointer.isDown=!1}function m(h){h.keyboard.downs=[],h.pointer.down=!1,h.pointer.move=!1,h.pointer.up=!1,h.pointer.rightDown=!1,h.pointer.rightUp=!1,h.wheel.deltaX=0,h.wheel.deltaY=0}window.addEventListener("keydown",h=>{h.repeat||(vn.keyboard.downs.push(h.code),vn.keyboard.pressedKeys.push(h.code),e(h)&&(vn.keyboard.control=!0),r(h)&&(vn.keyboard.alt=!0),t(h)&&(console.log("yo"),vn.keyboard.shift=!0),i(h)&&(vn.keyboard.left=!0),o(h)&&(vn.keyboard.right=!0),c(h)&&(vn.keyboard.up=!0),l(h)&&(console.log("yey"),vn.keyboard.down=!0))}),window.addEventListener("keyup",h=>{vn.keyboard.pressedKeys=vn.keyboard.pressedKeys.filter(_=>_!=h.code),e(h)&&(vn.keyboard.control=!1,vn.keyboard.pressedKeys=[]),r(h)&&(vn.keyboard.alt=!1),t(h)&&(vn.keyboard.shift=!1),i(h)&&(vn.keyboard.left=!1),o(h)&&(vn.keyboard.right=!1),c(h)&&(vn.keyboard.up=!1),l(h)&&(vn.keyboard.down=!1)}),window.addEventListener("pointerdown",h=>{vn.pointer.x=-.5*vn.screen.width+h.pageX,vn.pointer.y=.5*vn.screen.height-h.pageY,u(h)&&(vn.pointer.down=!0,vn.pointer.isDown=!0),f(h)&&(vn.pointer.rightDown=!0)}),window.addEventListener("pointermove",h=>{vn.pointer.move=!0,vn.pointer.x=-.5*vn.screen.width+h.pageX,vn.pointer.y=.5*vn.screen.height-h.pageY}),window.addEventListener("pointerup",h=>{u(h)&&(vn.pointer.up=!0,vn.pointer.isDown=!1),f(h)&&(vn.pointer.rightUp=!0)}),window.addEventListener("pointercancel",h=>{u(h)&&(vn.pointer.up=!0,vn.pointer.isDown=!1),f(h)&&(vn.pointer.rightUp=!0)}),window.addEventListener("wheel",h=>{vn.wheel.deltaX=h.deltaX,vn.wheel.deltaY=h.deltaY}),window.addEventListener("blur",h=>{s(vn)}),window.addEventListener("focus",h=>{s(vn)}),window.addEventListener("visibilitychange",h=>{s(vn)}),window.addEventListener("resize",()=>{vn.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(h){const _=h/1e3,A=_-vn.clock;A<.009||(vn.dt=A,vn.clock=_,n.ports.tick.send(vn),m(vn)),window.requestAnimationFrame(b)}},iC=aC.Main.init({node:document.querySelector("#app div"),flags:{inputs:vn}});tC(iC);
