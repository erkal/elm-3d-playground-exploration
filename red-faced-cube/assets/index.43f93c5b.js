const l1=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}};l1();function Gr(n,e,r){return r.a=n,r.f=e,r}function v(n){return Gr(2,n,function(e){return function(r){return n(e,r)}})}function k(n){return Gr(3,n,function(e){return function(r){return function(t){return n(e,r,t)}}})}function U(n){return Gr(4,n,function(e){return function(r){return function(t){return function(i){return n(e,r,t,i)}}}})}function Hn(n){return Gr(5,n,function(e){return function(r){return function(t){return function(i){return function(o){return n(e,r,t,i,o)}}}}})}function we(n){return Gr(6,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return n(e,r,t,i,o,c)}}}}}})}function Bi(n){return Gr(7,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return n(e,r,t,i,o,c,l)}}}}}}})}function Cn(n){return Gr(8,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return n(e,r,t,i,o,c,l,u)}}}}}}}})}function Lc(n){return Gr(9,n,function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return n(e,r,t,i,o,c,l,u,f)}}}}}}}}})}function a(n,e,r){return n.a===2?n.f(e,r):n(e)(r)}function p(n,e,r,t){return n.a===3?n.f(e,r,t):n(e)(r)(t)}function L(n,e,r,t,i){return n.a===4?n.f(e,r,t,i):n(e)(r)(t)(i)}function D(n,e,r,t,i,o){return n.a===5?n.f(e,r,t,i,o):n(e)(r)(t)(i)(o)}function On(n,e,r,t,i,o,c){return n.a===6?n.f(e,r,t,i,o,c):n(e)(r)(t)(i)(o)(c)}function zc(n,e,r,t,i,o,c,l){return n.a===7?n.f(e,r,t,i,o,c,l):n(e)(r)(t)(i)(o)(c)(l)}function Ct(n,e,r,t,i,o,c,l,u){return n.a===8?n.f(e,r,t,i,o,c,l,u):n(e)(r)(t)(i)(o)(c)(l)(u)}function u1(n,e,r,t,i,o,c,l,u,f){return n.a===9?n.f(e,r,t,i,o,c,l,u,f):n(e)(r)(t)(i)(o)(c)(l)(u)(f)}var $1=[];function v1(n){return n.length}var f1=k(function(n,e,r){for(var t=new Array(n),i=0;i<n;i++)t[i]=r(e+i);return t}),m1=v(function(n,e){for(var r=new Array(n),t=0;t<n&&e.b;t++)r[t]=e.a,e=e.b;return r.length=t,M(r,e)}),s1=v(function(n,e){return e[n]});k(function(n,e,r){for(var t=r.length,i=new Array(t),o=0;o<t;o++)i[o]=r[o];return i[n]=e,i});v(function(n,e){for(var r=e.length,t=new Array(r+1),i=0;i<r;i++)t[i]=e[i];return t[r]=n,t});k(function(n,e,r){for(var t=r.length,i=0;i<t;i++)e=a(n,r[i],e);return e});var d1=k(function(n,e,r){for(var t=r.length-1;t>=0;t--)e=a(n,r[t],e);return e});v(function(n,e){for(var r=e.length,t=new Array(r),i=0;i<r;i++)t[i]=n(e[i]);return t});k(function(n,e,r){for(var t=r.length,i=new Array(t),o=0;o<t;o++)i[o]=a(n,e+o,r[o]);return i});k(function(n,e,r){return r.slice(n,e)});k(function(n,e,r){var t=e.length,i=n-t;i>r.length&&(i=r.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=e[l];for(var l=0;l<i;l++)c[l+t]=r[l];return c});v(function(n,e){return e});v(function(n,e){return console.log(n+": "+p1()),e});function p1(n){return"<internals>"}function Qa(n){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}function Z(n,e){for(var r,t=[],i=kc(n,e,0,t);i&&(r=t.pop());i=kc(r.a,r.b,0,t));return i}function kc(n,e,r,t){if(n===e)return!0;if(typeof n!="object"||n===null||e===null)return typeof n=="function"&&Qa(5),!1;if(r>100)return t.push(M(n,e)),!0;n.$<0&&(n=hv(n),e=hv(e));for(var i in n)if(!kc(n[i],e[i],r+1,t))return!1;return!0}var h1=v(Z);v(function(n,e){return!Z(n,e)});function on(n,e,r){if(typeof n!="object")return n===e?0:n<e?-1:1;if(typeof n.$=="undefined")return(r=on(n.a,e.a))||(r=on(n.b,e.b))?r:on(n.c,e.c);for(;n.b&&e.b&&!(r=on(n.a,e.a));n=n.b,e=e.b);return r||(n.b?1:e.b?-1:0)}v(function(n,e){return on(n,e)<0});v(function(n,e){return on(n,e)<1});v(function(n,e){return on(n,e)>0});v(function(n,e){return on(n,e)>=0});var g1=v(function(n,e){var r=on(n,e);return r<0?bv:r?ph:gv}),Pt=0;function M(n,e){return{a:n,b:e}}function I(n,e,r){return{a:n,b:e,c:r}}function cr(n){return n}function V(n,e){var r={};for(var t in n)r[t]=n[t];for(var t in e)r[t]=e[t];return r}v(N);function N(n,e){if(typeof n=="string")return n+e;if(!n.b)return e;var r=lr(n.a,e);n=n.b;for(var t=r;n.b;n=n.b)t=t.b=lr(n.a,e);return r}var z={$:0};function lr(n,e){return{$:1,a:n,b:e}}var b1=v(lr);function $(n){for(var e=z,r=n.length;r--;)e=lr(n[r],e);return e}function Vi(n){for(var e=[];n.b;n=n.b)e.push(n.a);return e}var A1=k(function(n,e,r){for(var t=[];e.b&&r.b;e=e.b,r=r.b)t.push(a(n,e.a,r.a));return $(t)});U(function(n,e,r,t){for(var i=[];e.b&&r.b&&t.b;e=e.b,r=r.b,t=t.b)i.push(p(n,e.a,r.a,t.a));return $(i)});Hn(function(n,e,r,t,i){for(var o=[];e.b&&r.b&&t.b&&i.b;e=e.b,r=r.b,t=t.b,i=i.b)o.push(L(n,e.a,r.a,t.a,i.a));return $(o)});we(function(n,e,r,t,i,o){for(var c=[];e.b&&r.b&&t.b&&i.b&&o.b;e=e.b,r=r.b,t=t.b,i=i.b,o=o.b)c.push(D(n,e.a,r.a,t.a,i.a,o.a));return $(c)});v(function(n,e){return $(Vi(e).sort(function(r,t){return on(n(r),n(t))}))});v(function(n,e){return $(Vi(e).sort(function(r,t){var i=a(n,r,t);return i===gv?0:i===bv?-1:1}))});v(function(n,e){return n+e});v(function(n,e){return n-e});v(function(n,e){return n*e});v(function(n,e){return n/e});v(function(n,e){return n/e|0});var _1=v(Math.pow);v(function(n,e){return e%n});var w1=v(function(n,e){var r=e%n;return n===0?Qa(11):r>0&&n<0||r<0&&n>0?r+n:r}),y1=Math.PI,S1=Math.cos,x1=Math.sin,M1=Math.tan;v(Math.atan2);function C1(n){return n}function P1(n){return n===1/0||n===-1/0}var L1=Math.ceil,z1=Math.floor,k1=Math.round,T1=Math.sqrt,k$=Math.log,D1=isNaN;function E1(n){return!n}v(function(n,e){return n&&e});v(function(n,e){return n||e});v(function(n,e){return n!==e});var I1=v(function(n,e){return n+e});function j1(n){var e=n.charCodeAt(0);return isNaN(e)?B:j(55296<=e&&e<=56319?M(cr(n[0]+n[1]),n.slice(2)):M(cr(n[0]),n.slice(1)))}v(function(n,e){return n+e});function F1(n){return n.length}v(function(n,e){for(var r=e.length,t=new Array(r),i=0;i<r;){var o=e.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=n(cr(e[i]+e[i+1])),i+=2;continue}t[i]=n(cr(e[i])),i++}return t.join("")});v(function(n,e){for(var r=[],t=e.length,i=0;i<t;){var o=e[i],c=e.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=e[i],i++),n(cr(o))&&r.push(o)}return r.join("")});function B1(n){for(var e=n.length,r=new Array(e),t=0;t<e;){var i=n.charCodeAt(t);55296<=i&&i<=56319?(r[e-t]=n[t+1],t++,r[e-t]=n[t-1],t++):(r[e-t]=n[t],t++)}return r.join("")}k(function(n,e,r){for(var t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e=a(n,cr(o),e)}return e});var V1=k(function(n,e,r){for(var t=r.length;t--;){var i=r[t],o=r.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=r[t]+i),e=a(n,cr(i),e)}return e}),R1=v(function(n,e){return e.split(n)}),N1=v(function(n,e){return e.join(n)}),W1=k(function(n,e,r){return r.slice(n,e)});function H1(n){return $(n.trim().split(/\s+/g))}function Q1(n){return n.toLowerCase()}v(function(n,e){for(var r=e.length;r--;){var t=e[r],i=e.charCodeAt(r);if(56320<=i&&i<=57343&&(r--,t=e[r]+t),n(cr(t)))return!0}return!1});var G1=v(function(n,e){for(var r=e.length;r--;){var t=e[r],i=e.charCodeAt(r);if(56320<=i&&i<=57343&&(r--,t=e[r]+t),!n(cr(t)))return!1}return!0}),U1=v(function(n,e){return e.indexOf(n)>-1}),J1=v(function(n,e){return e.indexOf(n)===0});v(function(n,e){return e.length>=n.length&&e.lastIndexOf(n)===e.length-n.length});var O1=v(function(n,e){var r=n.length;if(r<1)return z;for(var t=0,i=[];(t=e.indexOf(n,t))>-1;)i.push(t),t=t+r;return $(i)});function T$(n){return n+""}function q1(n){for(var e=0,r=n.charCodeAt(0),t=r==43||r==45?1:0,i=t;i<n.length;++i){var o=n.charCodeAt(i);if(o<48||57<o)return B;e=10*e+o-48}return i==t?B:j(r==45?-e:e)}function Y1(n){if(n.length===0||/[\sxbo]/.test(n))return B;var e=+n;return e===e?j(e):B}function Z1(n){return Vi(n).join("")}function X1(n){var e=n.charCodeAt(0);return 55296<=e&&e<=56319?(e-55296)*1024+n.charCodeAt(1)-56320+65536:e}function K1(n){return cr(n<0||1114111<n?"\uFFFD":n<=65535?String.fromCharCode(n):(n-=65536,String.fromCharCode(Math.floor(n/1024)+55296,n%1024+56320)))}function np(n){return{$:0,a:n}}function ep(n){return{$:1,a:n}}function Ri(n){return{$:2,b:n}}var rp=Ri(function(n){return typeof n!="number"?Be("an INT",n):-2147483647<n&&n<2147483647&&(n|0)===n||isFinite(n)&&!(n%1)?Qn(n):Be("an INT",n)}),ap=Ri(function(n){return typeof n=="boolean"?Qn(n):Be("a BOOL",n)}),tp=Ri(function(n){return typeof n=="number"?Qn(n):Be("a FLOAT",n)}),ip=Ri(function(n){return typeof n=="string"?Qn(n):n instanceof String?Qn(n+""):Be("a STRING",n)});function op(n){return{$:3,b:n}}var cp=v(function(n,e){return{$:6,d:n,b:e}});v(function(n,e){return{$:7,e:n,b:e}});function Ur(n,e){return{$:9,f:n,g:e}}var lp=v(function(n,e){return{$:10,b:e,h:n}}),up=v(function(n,e){return Ur(n,[e])}),$p=k(function(n,e,r){return Ur(n,[e,r])}),vp=U(function(n,e,r,t){return Ur(n,[e,r,t])});Hn(function(n,e,r,t,i){return Ur(n,[e,r,t,i])});var fp=we(function(n,e,r,t,i,o){return Ur(n,[e,r,t,i,o])});Bi(function(n,e,r,t,i,o,c){return Ur(n,[e,r,t,i,o,c])});Cn(function(n,e,r,t,i,o,c,l){return Ur(n,[e,r,t,i,o,c,l])});Lc(function(n,e,r,t,i,o,c,l,u){return Ur(n,[e,r,t,i,o,c,l,u])});var mp=v(function(n,e){try{var r=JSON.parse(e);return Fe(n,r)}catch(t){return se(a(qc,"This is not valid JSON! "+t.message,ur(e)))}}),D$=v(function(n,e){return Fe(n,Ua(e))});function Fe(n,e){switch(n.$){case 2:return n.b(e);case 5:return e===null?Qn(n.c):Be("null",e);case 3:return Ni(e)?E$(n.b,e,$):Be("a LIST",e);case 4:return Ni(e)?E$(n.b,e,sp):Be("an ARRAY",e);case 6:var r=n.d;if(typeof e!="object"||e===null||!(r in e))return Be("an OBJECT with a field named `"+r+"`",e);var t=Fe(n.b,e[r]);return er(t)?t:se(a(Av,r,t.a));case 7:var i=n.e;if(!Ni(e))return Be("an ARRAY",e);if(i>=e.length)return Be("a LONGER array. Need index "+i+" but only see "+e.length+" entries",e);var t=Fe(n.b,e[i]);return er(t)?t:se(a(_v,i,t.a));case 8:if(typeof e!="object"||e===null||Ni(e))return Be("an OBJECT",e);var o=z;for(var c in e)if(e.hasOwnProperty(c)){var t=Fe(n.b,e[c]);if(!er(t))return se(a(Av,c,t.a));o=lr(M(c,t.a),o)}return Qn(kn(o));case 9:for(var l=n.f,u=n.g,f=0;f<u.length;f++){var t=Fe(u[f],e);if(!er(t))return t;l=l(t.a)}return Qn(l);case 10:var t=Fe(n.b,e);return er(t)?Fe(n.h(t.a),e):t;case 11:for(var d=z,s=n.g;s.b;s=s.b){var t=Fe(s.a,e);if(er(t))return t;d=lr(t.a,d)}return se(hh(kn(d)));case 1:return se(a(qc,n.a,ur(e)));case 0:return Qn(n.a)}}function E$(n,e,r){for(var t=e.length,i=new Array(t),o=0;o<t;o++){var c=Fe(n,e[o]);if(!er(c))return se(a(_v,o,c.a));i[o]=c.a}return Qn(r(i))}function Ni(n){return Array.isArray(n)||typeof FileList!="undefined"&&n instanceof FileList}function sp(n){return a(zh,n.length,function(e){return n[e]})}function Be(n,e){return se(a(qc,"Expecting "+n,ur(e)))}function Ga(n,e){if(n===e)return!0;if(n.$!==e.$)return!1;switch(n.$){case 0:case 1:return n.a===e.a;case 2:return n.b===e.b;case 5:return n.c===e.c;case 3:case 4:case 8:return Ga(n.b,e.b);case 6:return n.d===e.d&&Ga(n.b,e.b);case 7:return n.e===e.e&&Ga(n.b,e.b);case 9:return n.f===e.f&&I$(n.g,e.g);case 10:return n.h===e.h&&Ga(n.b,e.b);case 11:return I$(n.g,e.g)}}function I$(n,e){var r=n.length;if(r!==e.length)return!1;for(var t=0;t<r;t++)if(!Ga(n[t],e[t]))return!1;return!0}var dp=v(function(n,e){return JSON.stringify(Ua(e),null,n)+""});function ur(n){return n}function Ua(n){return n}function pp(){return[]}function hp(){return{}}var gp=k(function(n,e,r){return r[n]=Ua(e),r});function bp(n){return v(function(e,r){return r.push(Ua(n(e))),r})}function _a(n){return{$:0,a:n}}function Ap(n){return{$:1,a:n}}function Lr(n){return{$:2,b:n,c:null}}var Tc=v(function(n,e){return{$:3,b:n,d:e}});v(function(n,e){return{$:4,b:n,d:e}});function _p(n){return{$:5,b:n}}var wp=0;function Dc(n){var e={$:0,e:wp++,f:n,g:null,h:[]};return Ic(e),e}function j$(n){return Lr(function(e){e(_a(Dc(n)))})}function F$(n,e){n.h.push(e),Ic(n)}var yp=v(function(n,e){return Lr(function(r){F$(n,e),r(_a(Pt))})}),Ec=!1,B$=[];function Ic(n){if(B$.push(n),!Ec){for(Ec=!0;n=B$.shift();)Sp(n);Ec=!1}}function Sp(n){for(;n.f;){var e=n.f.$;if(e===0||e===1){for(;n.g&&n.g.$!==e;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else if(e===2){n.f.c=n.f.b(function(r){n.f=r,Ic(n)});return}else if(e===5){if(n.h.length===0)return;n.f=n.f.b(n.h.shift())}else n.g={$:e===3?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}U(function(n,e,r,t){return jc(e,t,n.hd,n.iF,n.$8,function(){return function(){}})});function jc(n,e,r,t,i,o){var c=a(D$,n,ur(e?e.flags:void 0));er(c)||Qa(2);var l={},u=r(c.a),f=u.a,d=o(g,f),s=xp(l,g);function g(m,A){var _=a(t,m,f);d(f=_.a,A),N$(l,_.b,i(f))}return N$(l,u.b,i(f)),s?{ports:s}:{}}var $r={};function xp(n,e){var r;for(var t in $r){var i=$r[t];i.a&&(r=r||{},r[t]=i.a(t,e)),n[t]=Cp(i,e)}return r}function Mp(n,e,r,t,i){return{b:n,c:e,d:r,e:t,f:i}}function Cp(n,e){var r={g:e,h:void 0},t=n.c,i=n.d,o=n.e,c=n.f;function l(u){return a(Tc,l,_p(function(f){var d=f.a;return f.$===0?p(i,r,d,u):o&&c?L(t,r,d.i,d.j,u):p(t,r,o?d.i:d.j,u)}))}return r.h=Dc(a(Tc,l,n.b))}var Pp=v(function(n,e){return Lr(function(r){n.g(e),r(_a(Pt))})});v(function(n,e){return a(yp,n.h,{$:0,a:e})});function V$(n){return function(e){return{$:1,k:n,l:e}}}function Lp(n){return{$:2,m:n}}v(function(n,e){return{$:3,n,o:e}});var R$=[],Fc=!1;function N$(n,e,r){if(R$.push({p:n,q:e,r}),!Fc){Fc=!0;for(var t;t=R$.shift();)zp(t.p,t.q,t.r);Fc=!1}}function zp(n,e,r){var t={};Wi(!0,e,t,null),Wi(!1,r,t,null);for(var i in n)F$(n[i],{$:"fx",a:t[i]||{i:z,j:z}})}function Wi(n,e,r,t){switch(e.$){case 1:var i=e.k,o=kp(n,i,t,e.l);r[i]=Tp(n,o,r[i]);return;case 2:for(var c=e.m;c.b;c=c.b)Wi(n,c.a,r,t);return;case 3:Wi(n,e.o,r,{s:e.n,t});return}}function kp(n,e,r,t){function i(c){for(var l=r;l;l=l.t)c=l.s(c);return c}var o=n?$r[e].e:$r[e].f;return a(o,i,t)}function Tp(n,e,r){return r=r||{i:z,j:z},n?r.i=lr(e,r.i):r.j=lr(e,r.j),r}function Dp(n){$r[n]&&Qa(3)}v(function(n,e){return e});function Ep(n,e){return Dp(n),$r[n]={f:Ip,u:e,a:jp},V$(n)}var Ip=v(function(n,e){return function(r){return n(e(r))}});function jp(n,e){var r=z,t=$r[n].u,i=_a(null);$r[n].b=i,$r[n].c=k(function(c,l,u){return r=l,i});function o(c){var l=a(D$,t,ur(c));er(l)||Qa(4,n,l.a);for(var u=l.a,f=r;f.b;f=f.b)e(f.a(u))}return{send:o}}var Hi,zr=typeof document!="undefined"?document:{};function Bc(n,e){n.appendChild(e)}U(function(n,e,r,t){var i=t.node;return i.parentNode.replaceChild(Or(n,function(){}),i),{}});function Vc(n){return{$:0,a:n}}var W$=v(function(n,e){return v(function(r,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:e,d:Nc(r),e:i,f:n,b:o}})}),Ve=W$(void 0),Fp=v(function(n,e){return v(function(r,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:e,d:Nc(r),e:i,f:n,b:o}})}),Bp=Fp(void 0);function Vp(n,e,r,t){return{$:3,d:Nc(n),g:e,h:r,i:t}}var Rp=v(function(n,e){return{$:4,j:n,k:e,b:1+(e.b||0)}});function Jr(n,e){return{$:5,l:n,m:e,k:void 0}}v(function(n,e){return Jr([n,e],function(){return n(e)})});k(function(n,e,r){return Jr([n,e,r],function(){return a(n,e,r)})});var Np=U(function(n,e,r,t){return Jr([n,e,r,t],function(){return p(n,e,r,t)})});Hn(function(n,e,r,t,i){return Jr([n,e,r,t,i],function(){return L(n,e,r,t,i)})});we(function(n,e,r,t,i,o){return Jr([n,e,r,t,i,o],function(){return D(n,e,r,t,i,o)})});Bi(function(n,e,r,t,i,o,c){return Jr([n,e,r,t,i,o,c],function(){return On(n,e,r,t,i,o,c)})});Cn(function(n,e,r,t,i,o,c,l){return Jr([n,e,r,t,i,o,c,l],function(){return zc(n,e,r,t,i,o,c,l)})});Lc(function(n,e,r,t,i,o,c,l,u){return Jr([n,e,r,t,i,o,c,l,u],function(){return Ct(n,e,r,t,i,o,c,l,u)})});var H$=v(function(n,e){return{$:"a0",n,o:e}}),Wp=v(function(n,e){return{$:"a1",n,o:e}}),Rc=v(function(n,e){return{$:"a2",n,o:e}}),Ke=v(function(n,e){return{$:"a3",n,o:e}});k(function(n,e,r){return{$:"a4",n:e,o:{f:n,o:r}}});function Q$(n){return n=="script"?"p":n}function Hp(n){return/^(on|formAction$)/i.test(n)?"data-"+n:n}function Qp(n){return n=="innerHTML"||n=="formAction"?"data-"+n:n}function Gp(n){return/^javascript:/i.test(n.replace(/\s/g,""))?"":n}function G$(n){return/^\s*(javascript:|data:text\/html)/i.test(n)?"":n}var Up=v(function(n,e){return e.$==="a0"?a(H$,e.n,Jp(n,e.o)):e});function Jp(n,e){var r=rl(e);return{$:e.$,a:r?p(Ft,r<3?Op:qp,Gn(n),e.a):a(Zi,n,e.a)}}var Op=v(function(n,e){return M(n(e.a),e.b)}),qp=v(function(n,e){return{aD:n(e.aD),dQ:e.dQ,dF:e.dF}});function Nc(n){for(var e={};n.b;n=n.b){var r=n.a,t=r.$,i=r.n,o=r.o;if(t==="a2"){i==="className"?U$(e,i,Ua(o)):e[i]=Ua(o);continue}var c=e[t]||(e[t]={});t==="a3"&&i==="class"?U$(c,i,o):c[i]=o}return e}function U$(n,e,r){var t=n[e];n[e]=t?t+" "+r:r}function Or(n,e){var r=n.$;if(r===5)return Or(n.k||(n.k=n.m()),e);if(r===0)return zr.createTextNode(n.a);if(r===4){for(var t=n.k,i=n.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:e},c=Or(t,o);return c.elm_event_node_ref=o,c}if(r===3){var c=n.h(n.g);return Wc(c,e,n.d),c}var c=n.f?zr.createElementNS(n.f,n.c):zr.createElement(n.c);Hi&&n.c=="a"&&c.addEventListener("click",Hi(c)),Wc(c,e,n.d);for(var l=n.e,u=0;u<l.length;u++)Bc(c,Or(r===1?l[u]:l[u].b,e));return c}function Wc(n,e,r){for(var t in r){var i=r[t];t==="a1"?Yp(n,i):t==="a0"?Kp(n,e,i):t==="a3"?Zp(n,i):t==="a4"?Xp(n,i):(t!=="value"&&t!=="checked"||n[t]!==i)&&(n[t]=i)}}function Yp(n,e){var r=n.style;for(var t in e)r[t]=e[t]}function Zp(n,e){for(var r in e){var t=e[r];typeof t!="undefined"?n.setAttribute(r,t):n.removeAttribute(r)}}function Xp(n,e){for(var r in e){var t=e[r],i=t.f,o=t.o;typeof o!="undefined"?n.setAttributeNS(i,r,o):n.removeAttributeNS(i,r)}}function Kp(n,e,r){var t=n.elmFs||(n.elmFs={});for(var i in r){var o=r[i],c=t[i];if(!o){n.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}n.removeEventListener(i,c)}c=n0(e,o),n.addEventListener(i,c,Hc&&{passive:rl(o)<2}),t[i]=c}}var Hc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Hc=!0}}))}catch{}function n0(n,e){function r(t){var i=r.q,o=Fe(i.a,t);if(!!er(o)){for(var c=rl(i),l=o.a,u=c?c<3?l.a:l.aD:l,f=c==1?l.b:c==3&&l.dQ,d=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dF)&&t.preventDefault(),n),s,g;s=d.j;){if(typeof s=="function")u=s(u);else for(var g=s.length;g--;)u=s[g](u);d=d.p}d(u,f)}}return r.q=e,r}function e0(n,e){return n.$==e.$&&Ga(n.a,e.a)}function J$(n,e){var r=[];return nr(n,e,r,0),r}function me(n,e,r,t){var i={$:e,r,s:t,t:void 0,u:void 0};return n.push(i),i}function nr(n,e,r,t){if(n!==e){var i=n.$,o=e.$;if(i!==o)if(i===1&&o===2)e=u0(e),o=1;else{me(r,0,t,e);return}switch(o){case 5:for(var c=n.l,l=e.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){e.k=n.k;return}e.k=e.m();var d=[];nr(n.k,e.k,d,0),d.length>0&&me(r,1,t,d);return;case 4:for(var s=n.j,g=e.j,m=!1,A=n.k;A.$===4;)m=!0,typeof s!="object"?s=[s,A.j]:s.push(A.j),A=A.k;for(var _=e.k;_.$===4;)m=!0,typeof g!="object"?g=[g,_.j]:g.push(_.j),_=_.k;if(m&&s.length!==g.length){me(r,0,t,e);return}(m?!r0(s,g):s!==g)&&me(r,2,t,g),nr(A,_,r,t+1);return;case 0:n.a!==e.a&&me(r,3,t,e.a);return;case 1:O$(n,e,r,t,a0);return;case 2:O$(n,e,r,t,t0);return;case 3:if(n.h!==e.h){me(r,0,t,e);return}var y=Qc(n.d,e.d);y&&me(r,4,t,y);var S=e.i(n.g,e.g);S&&me(r,5,t,S);return}}}function r0(n,e){for(var r=0;r<n.length;r++)if(n[r]!==e[r])return!1;return!0}function O$(n,e,r,t,i){if(n.c!==e.c||n.f!==e.f){me(r,0,t,e);return}var o=Qc(n.d,e.d);o&&me(r,4,t,o),i(n,e,r,t)}function Qc(n,e,r){var t;for(var i in n){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Qc(n[i],e[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in e)){t=t||{},t[i]=r?r==="a1"?"":r==="a0"||r==="a3"?void 0:{f:n[i].f,o:void 0}:typeof n[i]=="string"?"":null;continue}var c=n[i],l=e[i];c===l&&i!=="value"&&i!=="checked"||r==="a0"&&e0(c,l)||(t=t||{},t[i]=l)}for(var u in e)u in n||(t=t||{},t[u]=e[u]);return t}function a0(n,e,r,t){var i=n.e,o=e.e,c=i.length,l=o.length;c>l?me(r,6,t,{v:l,i:c-l}):c<l&&me(r,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var d=i[f];nr(d,o[f],r,++t),t+=d.b||0}}function t0(n,e,r,t){for(var i=[],o={},c=[],l=n.e,u=e.e,f=l.length,d=u.length,s=0,g=0,m=t;s<f&&g<d;){var A=l[s],_=u[g],y=A.a,S=_.a,w=A.b,C=_.b,F=void 0,q=void 0;if(y===S){m++,nr(w,C,i,m),m+=w.b||0,s++,g++;continue}var en=l[s+1],Y=u[g+1];if(en){var X=en.a,K=en.b;q=S===X}if(Y){var Q=Y.a,ln=Y.b;F=y===Q}if(F&&q){m++,nr(w,ln,i,m),Lt(o,i,y,C,g,c),m+=w.b||0,m++,zt(o,i,y,K,m),m+=K.b||0,s+=2,g+=2;continue}if(F){m++,Lt(o,i,S,C,g,c),nr(w,ln,i,m),m+=w.b||0,s+=1,g+=2;continue}if(q){m++,zt(o,i,y,w,m),m+=w.b||0,m++,nr(K,C,i,m),m+=K.b||0,s+=2,g+=1;continue}if(en&&X===Q){m++,zt(o,i,y,w,m),Lt(o,i,S,C,g,c),m+=w.b||0,m++,nr(K,ln,i,m),m+=K.b||0,s+=2,g+=2;continue}break}for(;s<f;){m++;var A=l[s],w=A.b;zt(o,i,A.a,w,m),m+=w.b||0,s++}for(;g<d;){var bn=bn||[],_=u[g];Lt(o,i,_.a,_.b,void 0,bn),g++}(i.length>0||c.length>0||bn)&&me(r,8,t,{w:i,x:c,y:bn})}var q$="_elmW6BL";function Lt(n,e,r,t,i,o){var c=n[r];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),n[r]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];nr(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Lt(n,e,r+q$,t,i,o)}function zt(n,e,r,t,i){var o=n[r];if(!o){var c=me(e,9,i,void 0);n[r]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];nr(t,o.z,l,i),me(e,9,i,{w:l,A:o});return}zt(n,e,r+q$,t,i)}function Y$(n,e,r,t){kt(n,e,r,0,0,e.b,t)}function kt(n,e,r,t,i,o,c){for(var l=r[t],u=l.r;u===i;){var f=l.$;if(f===1)Y$(n,e.k,l.s,c);else if(f===8){l.t=n,l.u=c;var d=l.s.w;d.length>0&&kt(n,e,d,0,i,o,c)}else if(f===9){l.t=n,l.u=c;var s=l.s;if(s){s.A.s=n;var d=s.w;d.length>0&&kt(n,e,d,0,i,o,c)}}else l.t=n,l.u=c;if(t++,!(l=r[t])||(u=l.r)>o)return t}var g=e.$;if(g===4){for(var m=e.k;m.$===4;)m=m.k;return kt(n,m,r,t,i+1,o,n.elm_event_node_ref)}for(var A=e.e,_=n.childNodes,y=0;y<A.length;y++){i++;var S=g===1?A[y]:A[y].b,w=i+(S.b||0);if(i<=u&&u<=w&&(t=kt(_[y],S,r,t,i,w,c),!(l=r[t])||(u=l.r)>o))return t;i=w}return t}function Z$(n,e,r,t){return r.length===0?n:(Y$(n,e,r,t),Qi(n,r))}function Qi(n,e){for(var r=0;r<e.length;r++){var t=e[r],i=t.t,o=i0(i,t);i===n&&(n=o)}return n}function i0(n,e){switch(e.$){case 0:return o0(n,e.s,e.u);case 4:return Wc(n,e.u,e.s),n;case 3:return n.replaceData(0,n.length,e.s),n;case 1:return Qi(n,e.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=e.s:n.elm_event_node_ref={j:e.s,p:e.u},n;case 6:for(var r=e.s,i=0;i<r.i;i++)n.removeChild(n.childNodes[r.v]);return n;case 7:for(var r=e.s,t=r.e,i=r.v,o=n.childNodes[i];i<t.length;i++)n.insertBefore(Or(t[i],e.u),o);return n;case 9:var r=e.s;if(!r)return n.parentNode.removeChild(n),n;var c=r.A;return typeof c.r!="undefined"&&n.parentNode.removeChild(n),c.s=Qi(n,r.w),n;case 8:return c0(n,e);case 5:return e.s(n);default:Qa(10)}}function o0(n,e,r){var t=n.parentNode,i=Or(e,r);return i.elm_event_node_ref||(i.elm_event_node_ref=n.elm_event_node_ref),t&&i!==n&&t.replaceChild(i,n),i}function c0(n,e){var r=e.s,t=l0(r.y,e);n=Qi(n,r.w);for(var i=r.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:Or(l.z,e.u);n.insertBefore(u,n.childNodes[c.r])}return t&&Bc(n,t),n}function l0(n,e){if(!!n){for(var r=zr.createDocumentFragment(),t=0;t<n.length;t++){var i=n[t],o=i.A;Bc(r,o.c===2?o.s:Or(o.z,e.u))}return r}}function Gc(n){if(n.nodeType===3)return Vc(n.textContent);if(n.nodeType!==1)return Vc("");for(var e=z,r=n.attributes,t=r.length;t--;){var i=r[t],o=i.name,c=i.value;e=lr(a(Ke,o,c),e)}for(var l=n.tagName.toLowerCase(),u=z,f=n.childNodes,t=f.length;t--;)u=lr(Gc(f[t]),u);return p(Ve,l,e,u)}function u0(n){for(var e=n.e,r=e.length,t=new Array(r),i=0;i<r;i++)t[i]=e[i].b;return{$:1,c:n.c,d:n.d,e:t,f:n.f,b:n.b}}var $0=U(function(n,e,r,t){return jc(e,t,n.hd,n.iF,n.$8,function(i,o){var c=n.iH,l=t.node,u=Gc(l);return X$(o,function(f){var d=c(f),s=J$(u,d);l=Z$(l,u,s,i),u=d})})});U(function(n,e,r,t){return jc(e,t,n.hd,n.iF,n.$8,function(i,o){var c=n.dN&&n.dN(i),l=n.iH,u=zr.title,f=zr.body,d=Gc(f);return X$(o,function(s){Hi=c;var g=l(s),m=Ve("body")(z)(g.gd),A=J$(d,m);f=Z$(f,d,A,i),d=m,Hi=0,u!==g.iz&&(zr.title=u=g.iz)})})});var Gi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)};function X$(n,e){e(n);var r=0;function t(){r=r===1?0:(Gi(t),e(n),1)}return function(i,o){n=i,o?(e(n),r===2&&(r=1)):(r===0&&Gi(t),r=2)}}v(function(n,e){return a(tl,qa,Lr(function(){e&&history.go(e),n()}))});v(function(n,e){return a(tl,qa,Lr(function(){history.pushState({},"",e),n()}))});v(function(n,e){return a(tl,qa,Lr(function(){history.replaceState({},"",e),n()}))});var v0={addEventListener:function(){},removeEventListener:function(){}},f0=typeof window!="undefined"?window:v0;k(function(n,e,r){return j$(Lr(function(t){function i(o){Dc(r(o))}return n.addEventListener(e,i,Hc&&{passive:!0}),function(){n.removeEventListener(e,i)}}))});v(function(n,e){var r=Fe(n,e);return er(r)?j(r.a):B});function K$(n,e){return Lr(function(r){Gi(function(){var t=document.getElementById(n);r(t?_a(e(t)):Ap(kh(n)))})})}function m0(n){return Lr(function(e){Gi(function(){e(_a(n()))})})}v(function(n,e){return K$(e,function(r){return r[n](),Pt})});v(function(n,e){return m0(function(){return f0.scroll(n,e),Pt})});k(function(n,e,r){return K$(n,function(t){return t.scrollLeft=e,t.scrollTop=r,Pt})});v(function(n,e){return n&e});v(function(n,e){return n|e});v(function(n,e){return n^e});v(function(n,e){return e<<n});v(function(n,e){return e>>n});v(function(n,e){return e>>>n});var s0=v(function(n,e){var r="g";n.hv&&(r+="m"),n.gn&&(r+="i");try{return j(new RegExp(e,r))}catch{return B}});v(function(n,e){return e.match(n)!==null});var d0=k(function(n,e,r){for(var t=[],i=0,o=r,c=e.lastIndex,l=-1,u;i++<n&&(u=e.exec(o))&&l!=e.lastIndex;){for(var f=u.length-1,d=new Array(f);f>0;){var s=u[f];d[--f]=s?j(s):B}t.push(L(dm,u[0],u.index,i,$(d))),l=e.lastIndex}return e.lastIndex=c,$(t)});U(function(n,e,r,t){var i=0;function o(c){if(i++>=n)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?j(f):B}return r(L(dm,c,arguments[arguments.length-2],i,$(u)))}return t.replace(e,o)});k(function(n,e,r){for(var t=r,i=[],o=e.lastIndex,c=e.lastIndex;n--;){var l=e.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=e.lastIndex}return i.push(t.slice(o)),e.lastIndex=c,$(i)});var nv=0;function Tt(n,e){for(;e.b;e=e.b)n(e.a)}function Uc(n){for(var e=0;n.b;n=n.b)e++;return e}var p0=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(n){setTimeout(n,1e3/60)},h0=Hn(function(n,e,r,t,i){return{$:0,a:n,b:e,c:r,d:t,e:i}}),g0=v(function(n,e){var r=n.blend;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.BLEND),r.enabled=!0),(r.a!==e.a||r.d!==e.d)&&(n.gl.blendEquationSeparate(e.a,e.d),r.a=e.a,r.d=e.d),(r.b!==e.b||r.c!==e.c||r.e!==e.e||r.f!==e.f)&&(n.gl.blendFuncSeparate(e.b,e.c,e.e,e.f),r.b=e.b,r.c=e.c,r.e=e.e,r.f=e.f),(r.g!==e.g||r.h!==e.h||r.i!==e.i||r.j!==e.j)&&(n.gl.blendColor(e.g,e.h,e.i,e.j),r.g=e.g,r.h=e.h,r.i=e.i,r.j=e.j)}),b0=v(function(n,e){var r=n.depthTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.DEPTH_TEST),r.enabled=!0),r.a!==e.a&&(n.gl.depthFunc(e.a),r.a=e.a),r.b!==e.b&&(n.gl.depthMask(e.b),r.b=e.b),(r.c!==e.c||r.d!==e.d)&&(n.gl.depthRange(e.c,e.d),r.c=e.c,r.d=e.d)}),A0=v(function(n,e){var r=n.stencilTest;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.STENCIL_TEST),r.enabled=!0),(r.d!==e.d||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.FRONT,e.d,e.a,e.b),r.d=e.d),(r.e!==e.e||r.f!==e.f||r.g!==e.g)&&(n.gl.stencilOpSeparate(n.gl.FRONT,e.e,e.f,e.g),r.e=e.e,r.f=e.f,r.g=e.g),r.c!==e.c&&(n.gl.stencilMask(e.c),r.c=e.c),(r.h!==e.h||r.a!==e.a||r.b!==e.b)&&(n.gl.stencilFuncSeparate(n.gl.BACK,e.h,e.a,e.b),r.h=e.h,r.a=e.a,r.b=e.b),(r.i!==e.i||r.j!==e.j||r.k!==e.k)&&(n.gl.stencilOpSeparate(n.gl.BACK,e.i,e.j,e.k),r.i=e.i,r.j=e.j,r.k=e.k)}),_0=v(function(n,e){var r=n.scissor;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SCISSOR_TEST),r.enabled=!0),(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.scissor(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),w0=v(function(n,e){var r=n.colorMask;r.toggle=n.toggle,r.enabled=!0,(r.a!==e.a||r.b!==e.b||r.c!==e.c||r.d!==e.d)&&(n.gl.colorMask(e.a,e.b,e.c,e.d),r.a=e.a,r.b=e.b,r.c=e.c,r.d=e.d)}),y0=v(function(n,e){var r=n.cullFace;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.CULL_FACE),r.enabled=!0),r.a!==e.a&&(n.gl.cullFace(e.a),r.a=e.a)}),S0=v(function(n,e){var r=n.polygonOffset;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.POLYGON_OFFSET_FILL),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.polygonOffset(e.a,e.b),r.a=e.a,r.b=e.b)}),x0=v(function(n,e){var r=n.sampleCoverage;r.toggle=n.toggle,r.enabled||(n.gl.enable(n.gl.SAMPLE_COVERAGE),r.enabled=!0),(r.a!==e.a||r.b!==e.b)&&(n.gl.sampleCoverage(e.a,e.b),r.a=e.a,r.b=e.b)}),M0=function(n){var e=n.sampleAlphaToCoverage;e.toggle=n.toggle,e.enabled||(n.gl.enable(n.gl.SAMPLE_ALPHA_TO_COVERAGE),e.enabled=!0)},C0=function(n){n.blend.enabled&&(n.gl.disable(n.gl.BLEND),n.blend.enabled=!1)},P0=function(n){n.depthTest.enabled&&(n.gl.disable(n.gl.DEPTH_TEST),n.depthTest.enabled=!1)},L0=function(n){n.stencilTest.enabled&&(n.gl.disable(n.gl.STENCIL_TEST),n.stencilTest.enabled=!1)},ev=function(n){n.scissor.enabled&&(n.gl.disable(n.gl.SCISSOR_TEST),n.scissor.enabled=!1)},rv=function(n){var e=n.colorMask;(!e.a||!e.b||!e.c||!e.d)&&(n.gl.colorMask(!0,!0,!0,!0),e.a=!0,e.b=!0,e.c=!0,e.d=!0)},z0=function(n){n.gl.disable(n.gl.CULL_FACE)},k0=function(n){n.gl.disable(n.gl.POLYGON_OFFSET_FILL)},T0=function(n){n.gl.disable(n.gl.SAMPLE_COVERAGE)},D0=function(n){n.gl.disable(n.gl.SAMPLE_ALPHA_TO_COVERAGE)},av=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],E0=[C0,P0,L0,ev,rv,z0,k0,T0,D0];function tv(n,e,r){var t=n.createShader(r);return n.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+e),n.compileShader(t),t}function I0(n,e,r){var t=n.createProgram();if(n.attachShader(t,e),n.attachShader(t,r),n.linkProgram(t),!n.getProgramParameter(t,n.LINK_STATUS))throw"Link failed: "+n.getProgramInfoLog(t)+`
vs info-log: `+n.getShaderInfoLog(e)+`
fs info-log: `+n.getShaderInfoLog(r);return t}function iv(n,e){switch(e){case n.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:n.FLOAT};case n.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:n.FLOAT};case n.INT:return{size:1,arraySize:1,type:Int32Array,baseType:n.INT}}}function j0(n,e,r,t){for(var i=r.a.eg,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(m,A,_,y,S){var w;if(i===1)for(w=0;w<A;w++)m[_++]=A===1?y[S]:y[S][w];else o.forEach(function(C){for(w=0;w<A;w++)m[_++]=A===1?y[C][S]:y[C][S][w]})}var u=iv(n,e.type);if(u===void 0)throw new Error("No info available for: "+e.type);var f=0,d=u.size*u.arraySize*i,s=new u.type(Uc(r.b)*d);Tt(function(m){l(s,u.size*u.arraySize,f,m,t[e.name]||e.name),f+=d},r.b);var g=n.createBuffer();return n.bindBuffer(n.ARRAY_BUFFER,g),n.bufferData(n.ARRAY_BUFFER,s,n.STATIC_DRAW),g}function F0(n,e){if(e.a.et>0){var r=n.createBuffer(),t=B0(e.c,e.a.et);return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r),n.bufferData(n.ELEMENT_ARRAY_BUFFER,t,n.STATIC_DRAW),{numIndices:t.length,indexBuffer:r,buffers:{}}}else return{numIndices:e.a.eg*Uc(e.b),indexBuffer:null,buffers:{}}}function B0(n,e){var r=new Uint32Array(Uc(n)*e),t=0,i;return Tt(function(o){if(e===1)r[t++]=o;else for(i=0;i<e;i++)r[t++]=o[String.fromCharCode(97+i)]},n),r}function ov(n,e){return n+"#"+e}var cv=v(function(n,e){var r=n.f,t=r.gl;if(!t)return e;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),r.depthTest.b||(t.depthMask(!0),r.depthTest.b=!0),r.stencilTest.c!==r.STENCIL_WRITEMASK&&(t.stencilMask(r.STENCIL_WRITEMASK),r.stencilTest.c=r.STENCIL_WRITEMASK),ev(r),rv(r),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=ov(o.b.id,o.c.id),l=r.programs[c]),!l){var f;o.b.id?f=r.shaders[o.b.id]:o.b.id=nv++,f||(f=tv(t,o.b.src,t.VERTEX_SHADER),r.shaders[o.b.id]=f);var d;o.c.id?d=r.shaders[o.c.id]:o.c.id=nv++,d||(d=tv(t,o.c.src,t.FRAGMENT_SHADER),r.shaders[o.c.id]=d);var s=I0(t,f,d);l={glProgram:s,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=V0(t,n,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=t.getProgramParameter(s,t.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var m=t.getActiveAttrib(s,u),A=t.getAttribLocation(s,m.name);l.activeAttributes.push(m),l.activeAttributeLocations.push(A)}c=ov(o.b.id,o.c.id),r.programs[c]=l}r.lastProgId!==c&&(t.useProgram(l.glProgram),r.lastProgId=c),R0(l.uniformSetters,o.e);var _=r.buffers.get(o.d);for(_||(_=F0(t,o.d),r.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){m=l.activeAttributes[u],A=l.activeAttributeLocations[u],_.buffers[m.name]===void 0&&(_.buffers[m.name]=j0(t,m,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[m.name]);var y=iv(t,m.type);if(y.arraySize===1)t.enableVertexAttribArray(A),t.vertexAttribPointer(A,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,C=0;C<y.arraySize;C++)t.enableVertexAttribArray(A+C),t.vertexAttribPointer(A+C,y.size,y.baseType,!1,w,S*C)}for(r.toggle=!r.toggle,Tt(P4(r),o.a),u=0;u<av.length;u++){var F=r[av[u]];F.toggle!==r.toggle&&F.enabled&&(E0[u](r),F.enabled=!1,F.toggle=r.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.e6,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.e6,0,_.numIndices)}}return Tt(i,n.g),e});function V0(n,e,r,t){var i=r.glProgram,o=r.currentUniforms,c=0,l=e.f;function u(m,A){var _=A.name,y=n.getUniformLocation(m,_);switch(A.type){case n.INT:return function(w){o[_]!==w&&(n.uniform1i(y,w),o[_]=w)};case n.FLOAT:return function(w){o[_]!==w&&(n.uniform1f(y,w),o[_]=w)};case n.FLOAT_VEC2:return function(w){o[_]!==w&&(n.uniform2f(y,w[0],w[1]),o[_]=w)};case n.FLOAT_VEC3:return function(w){o[_]!==w&&(n.uniform3f(y,w[0],w[1],w[2]),o[_]=w)};case n.FLOAT_VEC4:return function(w){o[_]!==w&&(n.uniform4f(y,w[0],w[1],w[2],w[3]),o[_]=w)};case n.FLOAT_MAT4:return function(w){o[_]!==w&&(n.uniformMatrix4fv(y,!1,new Float32Array(w)),o[_]=w)};case n.SAMPLER_2D:var S=c++;return function(w){n.activeTexture(n.TEXTURE0+S);var C=l.textures.get(w);C||(C=w.gA(n),l.textures.set(w,C)),n.bindTexture(n.TEXTURE_2D,C),o[_]!==w&&(n.uniform1i(y,S),o[_]=w)};case n.BOOL:return function(w){o[_]!==w&&(n.uniform1i(y,w),o[_]=w)};default:return function(){}}}for(var f={},d=n.getProgramParameter(i,n.ACTIVE_UNIFORMS),s=0;s<d;s++){var g=n.getActiveUniform(i,s);f[t[g.name]||g.name]=u(i,g)}return f}function R0(n,e){Object.keys(e).forEach(function(r){var t=n[r];t&&t(e[r])})}var N0=k(function(n,e,r){return Vp(e,{g:r,f:{},h:n},O0,q0)}),W0=v(function(n,e){n.contextAttributes.alpha=!0,n.contextAttributes.premultipliedAlpha=e.a}),H0=v(function(n,e){n.contextAttributes.depth=!0,n.sceneSettings.push(function(r){r.clearDepth(e.a)})}),Q0=v(function(n,e){n.contextAttributes.stencil=!0,n.sceneSettings.push(function(r){r.clearStencil(e.a)})}),G0=v(function(n,e){n.contextAttributes.antialias=!0}),U0=v(function(n,e){n.sceneSettings.push(function(r){r.clearColor(e.a,e.b,e.c,e.d)})}),J0=v(function(n,e){n.contextAttributes.preserveDrawingBuffer=!0});function O0(n){var e={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Tt(function(i){return a(C4,e,i)},n.h);var r=zr.createElement("canvas"),t=r.getContext&&(r.getContext("webgl",e.contextAttributes)||r.getContext("experimental-webgl",e.contextAttributes));return t&&typeof WeakMap!="undefined"?(e.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),n.f.gl=t,n.f.toggle=!1,n.f.blend={enabled:!1,toggle:!1},n.f.depthTest={enabled:!1,toggle:!1},n.f.stencilTest={enabled:!1,toggle:!1},n.f.scissor={enabled:!1,toggle:!1},n.f.colorMask={enabled:!1,toggle:!1},n.f.cullFace={enabled:!1,toggle:!1},n.f.polygonOffset={enabled:!1,toggle:!1},n.f.sampleCoverage={enabled:!1,toggle:!1},n.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},n.f.shaders=[],n.f.programs={},n.f.lastProgId=null,n.f.buffers=new WeakMap,n.f.textures=new WeakMap,n.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),p0(function(){return a(cv,n,r)})):(r=zr.createElement("div"),r.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),r}function q0(n,e){return e.f=n.f,cv(e)}var Y0=v(function(n,e){return new Float64Array([n,e])});v(function(n,e){return new Float64Array([n,e[1]])});v(function(n,e){return new Float64Array([e[0],n])});v(function(n,e){var r=new Float64Array(2);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r});v(function(n,e){var r=new Float64Array(2);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r});v(function(n,e){var r=new Float64Array(2);r[0]=n[0]-e[0],r[1]=n[1]-e[1];var t=1/Z0(r);return r[0]=r[0]*t,r[1]=r[1]*t,r});function Z0(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1])}v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1];return Math.sqrt(r*r+t*t)});v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1];return r*r+t*t});v(function(n,e){var r=new Float64Array(2);return r[0]=e[0]*n,r[1]=e[1]*n,r});v(function(n,e){return n[0]*e[0]+n[1]*e[1]});var Jc=new Float64Array(3),lv=new Float64Array(3),uv=new Float64Array(3),X0=k(function(n,e,r){return new Float64Array([n,e,r])}),K0=function(n){return n[0]},nh=function(n){return n[1]},eh=function(n){return n[2]};v(function(n,e){return new Float64Array([n,e[1],e[2]])});v(function(n,e){return new Float64Array([e[0],n,e[2]])});v(function(n,e){return new Float64Array([e[0],e[1],n])});var rh=function(n){return new Float64Array([n.iM,n.iQ,n.d4])};v(function(n,e){var r=new Float64Array(3);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r});function $v(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r}v($v);function vv(n,e,r){return r===void 0&&(r=new Float64Array(3)),Ui($v(n,e,r),r)}v(vv);function fv(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])}v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2];return Math.sqrt(r*r+t*t+i*i)});v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2];return r*r+t*t+i*i});function Ui(n,e){e===void 0&&(e=new Float64Array(3));var r=1/fv(n);return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e}var ah=v(function(n,e){return new Float64Array([e[0]*n,e[1]*n,e[2]*n])}),Dt=function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]};v(Dt);function Oc(n,e,r){return r===void 0&&(r=new Float64Array(3)),r[0]=n[1]*e[2]-n[2]*e[1],r[1]=n[2]*e[0]-n[0]*e[2],r[2]=n[0]*e[1]-n[1]*e[0],r}v(Oc);v(function(n,e){var r,t=Jc,i=new Float64Array(3);return t[0]=n[3],t[1]=n[7],t[2]=n[11],r=Dt(e,t)+n[15],t[0]=n[0],t[1]=n[4],t[2]=n[8],i[0]=(Dt(e,t)+n[12])/r,t[0]=n[1],t[1]=n[5],t[2]=n[9],i[1]=(Dt(e,t)+n[13])/r,t[0]=n[2],t[1]=n[6],t[2]=n[10],i[2]=(Dt(e,t)+n[14])/r,i});var th=U(function(n,e,r,t){return new Float64Array([n,e,r,t])});v(function(n,e){return new Float64Array([n,e[1],e[2],e[3]])});v(function(n,e){return new Float64Array([e[0],n,e[2],e[3]])});v(function(n,e){return new Float64Array([e[0],e[1],n,e[3]])});v(function(n,e){return new Float64Array([e[0],e[1],e[2],n])});var ih=function(n){return{iM:n[0],iQ:n[1],d4:n[2],fM:n[3]}},oh=function(n){return new Float64Array([n.iM,n.iQ,n.d4,n.fM])};v(function(n,e){var r=new Float64Array(4);return r[0]=n[0]+e[0],r[1]=n[1]+e[1],r[2]=n[2]+e[2],r[3]=n[3]+e[3],r});v(function(n,e){var r=new Float64Array(4);return r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3],r});v(function(n,e){var r=new Float64Array(4);r[0]=n[0]-e[0],r[1]=n[1]-e[1],r[2]=n[2]-e[2],r[3]=n[3]-e[3];var t=1/ch(r);return r[0]=r[0]*t,r[1]=r[1]*t,r[2]=r[2]*t,r[3]=r[3]*t,r});function ch(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]+n[3]*n[3])}v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2],o=n[3]-e[3];return Math.sqrt(r*r+t*t+i*i+o*o)});v(function(n,e){var r=n[0]-e[0],t=n[1]-e[1],i=n[2]-e[2],o=n[3]-e[3];return r*r+t*t+i*i+o*o});v(function(n,e){var r=new Float64Array(4);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r[3]=e[3]*n,r});v(function(n,e){return n[0]*e[0]+n[1]*e[1]+n[2]*e[2]+n[3]*e[3]});var lh=new Float64Array(16),uh=new Float64Array(16),$h=function(n){var e=new Float64Array(16);return e[0]=n.eK,e[1]=n.eO,e[2]=n.eS,e[3]=n.eW,e[4]=n.eL,e[5]=n.eP,e[6]=n.eT,e[7]=n.eX,e[8]=n.eM,e[9]=n.eQ,e[10]=n.eU,e[11]=n.eY,e[12]=n.eN,e[13]=n.eR,e[14]=n.eV,e[15]=n.eZ,e},vh=function(n){return{eK:n[0],eO:n[1],eS:n[2],eW:n[3],eL:n[4],eP:n[5],eT:n[6],eX:n[7],eM:n[8],eQ:n[9],eU:n[10],eY:n[11],eN:n[12],eR:n[13],eV:n[14],eZ:n[15]}};function mv(n,e,r,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-r),c[6]=0,c[7]=0,c[8]=(e+n)/(e-n),c[9]=(t+r)/(t-r),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}we(mv);U(function(n,e,r,t){var i=r*Math.tan(n*Math.PI/360),o=-i,c=o*e,l=i*e;return mv(c,l,o,i,r,t)});function sv(n,e,r,t,i,o){var c=new Float64Array(16);return c[0]=2/(e-n),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-r),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(e+n)/(e-n),c[13]=-(t+r)/(t-r),c[14]=-(o+i)/(o-i),c[15]=1,c}we(sv);U(function(n,e,r,t){return sv(n,e,r,t,-1,1)});function dv(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2],c=n[3],l=n[4],u=n[5],f=n[6],d=n[7],s=n[8],g=n[9],m=n[10],A=n[11],_=n[12],y=n[13],S=n[14],w=n[15],C=e[0],F=e[1],q=e[2],en=e[3],Y=e[4],X=e[5],K=e[6],Q=e[7],ln=e[8],bn=e[9],zn=e[10],An=e[11],_n=e[12],Dn=e[13],wn=e[14],Jn=e[15];return r[0]=t*C+l*F+s*q+_*en,r[1]=i*C+u*F+g*q+y*en,r[2]=o*C+f*F+m*q+S*en,r[3]=c*C+d*F+A*q+w*en,r[4]=t*Y+l*X+s*K+_*Q,r[5]=i*Y+u*X+g*K+y*Q,r[6]=o*Y+f*X+m*K+S*Q,r[7]=c*Y+d*X+A*K+w*Q,r[8]=t*ln+l*bn+s*zn+_*An,r[9]=i*ln+u*bn+g*zn+y*An,r[10]=o*ln+f*bn+m*zn+S*An,r[11]=c*ln+d*bn+A*zn+w*An,r[12]=t*_n+l*Dn+s*wn+_*Jn,r[13]=i*_n+u*Dn+g*wn+y*Jn,r[14]=o*_n+f*Dn+m*wn+S*Jn,r[15]=c*_n+d*Dn+A*wn+w*Jn,r}v(dv);v(function(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2],c=n[4],l=n[5],u=n[6],f=n[8],d=n[9],s=n[10],g=n[12],m=n[13],A=n[14],_=e[0],y=e[1],S=e[2],w=e[4],C=e[5],F=e[6],q=e[8],en=e[9],Y=e[10],X=e[12],K=e[13],Q=e[14];return r[0]=t*_+c*y+f*S,r[1]=i*_+l*y+d*S,r[2]=o*_+u*y+s*S,r[3]=0,r[4]=t*w+c*C+f*F,r[5]=i*w+l*C+d*F,r[6]=o*w+u*C+s*F,r[7]=0,r[8]=t*q+c*en+f*Y,r[9]=i*q+l*en+d*Y,r[10]=o*q+u*en+s*Y,r[11]=0,r[12]=t*X+c*K+f*Q+g,r[13]=i*X+l*K+d*Q+m,r[14]=o*X+u*K+s*Q+A,r[15]=1,r});v(function(n,e){var r=new Float64Array(16);e=Ui(e,Jc);var t=e[0],i=e[1],o=e[2],c=Math.cos(n),l=1-c,u=Math.sin(n);return r[0]=t*t*l+c,r[1]=i*t*l+o*u,r[2]=o*t*l-i*u,r[3]=0,r[4]=t*i*l-o*u,r[5]=i*i*l+c,r[6]=i*o*l+t*u,r[7]=0,r[8]=t*o*l+i*u,r[9]=i*o*l-t*u,r[10]=o*o*l+c,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r});k(function(n,e,r){var t=new Float64Array(16),i=1/fv(e),o=e[0]*i,c=e[1]*i,l=e[2]*i,u=Math.cos(n),f=1-u,d=Math.sin(n),s=o*d,g=c*d,m=l*d,A=o*c*f,_=o*l*f,y=c*l*f,S=o*o*f+u,w=A+m,C=_-g,F=A-m,q=c*c*f+u,en=y+s,Y=_+g,X=y-s,K=l*l*f+u,Q=r[0],ln=r[1],bn=r[2],zn=r[3],An=r[4],_n=r[5],Dn=r[6],wn=r[7],Jn=r[8],Wn=r[9],fe=r[10],ga=r[11],St=r[12],Mr=r[13],Cr=r[14],Ha=r[15];return t[0]=Q*S+An*w+Jn*C,t[1]=ln*S+_n*w+Wn*C,t[2]=bn*S+Dn*w+fe*C,t[3]=zn*S+wn*w+ga*C,t[4]=Q*F+An*q+Jn*en,t[5]=ln*F+_n*q+Wn*en,t[6]=bn*F+Dn*q+fe*en,t[7]=zn*F+wn*q+ga*en,t[8]=Q*Y+An*X+Jn*K,t[9]=ln*Y+_n*X+Wn*K,t[10]=bn*Y+Dn*X+fe*K,t[11]=zn*Y+wn*X+ga*K,t[12]=St,t[13]=Mr,t[14]=Cr,t[15]=Ha,t});function fh(n,e,r){var t=new Float64Array(16);return t[0]=n,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=e,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}k(fh);U(function(n,e,r,t){var i=new Float64Array(16);return i[0]=t[0]*n,i[1]=t[1]*n,i[2]=t[2]*n,i[3]=t[3]*n,i[4]=t[4]*e,i[5]=t[5]*e,i[6]=t[6]*e,i[7]=t[7]*e,i[8]=t[8]*r,i[9]=t[9]*r,i[10]=t[10]*r,i[11]=t[11]*r,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2];return r[0]=e[0]*t,r[1]=e[1]*t,r[2]=e[2]*t,r[3]=e[3]*t,r[4]=e[4]*i,r[5]=e[5]*i,r[6]=e[6]*i,r[7]=e[7]*i,r[8]=e[8]*o,r[9]=e[9]*o,r[10]=e[10]*o,r[11]=e[11]*o,r[12]=e[12],r[13]=e[13],r[14]=e[14],r[15]=e[15],r});function mh(n,e,r){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=n,t[13]=e,t[14]=r,t[15]=1,t}k(mh);U(function(n,e,r,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],d=t[5],s=t[6],g=t[7],m=t[8],A=t[9],_=t[10],y=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=d,i[6]=s,i[7]=g,i[8]=m,i[9]=A,i[10]=_,i[11]=y,i[12]=o*n+f*e+m*r+t[12],i[13]=c*n+d*e+A*r+t[13],i[14]=l*n+s*e+_*r+t[14],i[15]=u*n+g*e+y*r+t[15],i});v(function(n,e){var r=new Float64Array(16),t=n[0],i=n[1],o=n[2],c=e[0],l=e[1],u=e[2],f=e[3],d=e[4],s=e[5],g=e[6],m=e[7],A=e[8],_=e[9],y=e[10],S=e[11];return r[0]=c,r[1]=l,r[2]=u,r[3]=f,r[4]=d,r[5]=s,r[6]=g,r[7]=m,r[8]=A,r[9]=_,r[10]=y,r[11]=S,r[12]=c*t+d*i+A*o+e[12],r[13]=l*t+s*i+_*o+e[13],r[14]=u*t+g*i+y*o+e[14],r[15]=f*t+m*i+S*o+e[15],r});k(function(n,e,r){var t=vv(n,e,Jc),i=Ui(Oc(r,t,lv),lv),o=Ui(Oc(t,i,uv),uv),c=lh,l=uh;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-n[0],l[13]=-n[1],l[14]=-n[2],l[15]=1,dv(c,l)});k(function(n,e,r){var t=new Float64Array(16);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=0,t[4]=e[0],t[5]=e[1],t[6]=e[2],t[7]=0,t[8]=r[0],t[9]=r[1],t[10]=r[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var x=b1,Ji=d1,pv=k(function(n,e,r){var t=r.c,i=r.d,o=v(function(c,l){if(c.$){var f=c.a;return p(Ji,n,l,f)}else{var u=c.a;return p(Ji,o,l,u)}});return p(Ji,o,p(Ji,n,e,i),t)}),Oi=k(function(n,e,r){n:for(;;){if(r.$===-2)return e;var t=r.b,i=r.c,o=r.d,c=r.e,l=n,u=p(n,t,i,p(Oi,n,e,c)),f=o;n=l,e=u,r=f;continue n}}),hv=function(n){return p(Oi,k(function(e,r,t){return a(x,M(e,r),t)}),z,n)},sh=function(n){return p(Oi,k(function(e,r,t){return a(x,e,t)}),z,n)},dh=function(n){var e=n;return sh(e)},gv=1,ph=2,bv=0,se=function(n){return{$:1,a:n}},qc=v(function(n,e){return{$:3,a:n,b:e}}),Av=v(function(n,e){return{$:0,a:n,b:e}}),_v=v(function(n,e){return{$:1,a:n,b:e}}),Qn=function(n){return{$:0,a:n}},hh=function(n){return{$:2,a:n}},j=function(n){return{$:0,a:n}},B={$:1},gh=G1,wv=dp,T=T$,an=v(function(n,e){return a(N1,n,Vi(e))}),Yc=v(function(n,e){return $(a(R1,n,e))}),yv=function(n){return a(an,`
    `,a(Yc,`
`,n))},jn=k(function(n,e,r){n:for(;;)if(r.b){var t=r.a,i=r.b,o=n,c=a(n,t,e),l=i;n=o,e=c,r=l;continue n}else return e}),vr=function(n){return p(jn,v(function(e,r){return r+1}),0,n)},Sv=A1,bh=k(function(n,e,r){n:for(;;)if(on(n,e)<1){var t=n,i=e-1,o=a(x,e,r);n=t,e=i,r=o;continue n}else return r}),kr=v(function(n,e){return p(bh,n,e,z)}),Et=v(function(n,e){return p(Sv,n,a(kr,0,vr(e)-1),e)}),fr=X1,xv=function(n){var e=fr(n);return 97<=e&&e<=122},Mv=function(n){var e=fr(n);return e<=90&&65<=e},Ah=function(n){return xv(n)||Mv(n)},_h=function(n){var e=fr(n);return e<=57&&48<=e},wh=function(n){return xv(n)||Mv(n)||_h(n)},kn=function(n){return p(jn,x,z,n)},Ja=j1,yh=v(function(n,e){return`

(`+(T(n+1)+(") "+yv(Sh(e))))}),Sh=function(n){return a(xh,n,z)},xh=v(function(n,e){n:for(;;)switch(n.$){case 0:var r=n.a,t=n.b,i=function(){var _=Ja(r);if(_.$===1)return!1;var y=_.a,S=y.a,w=y.b;return Ah(S)&&a(gh,wh,w)}(),o=i?"."+r:"['"+(r+"']"),c=t,l=a(x,o,e);n=c,e=l;continue n;case 1:var u=n.a,t=n.b,f="["+(T(u)+"]"),c=t,l=a(x,f,e);n=c,e=l;continue n;case 2:var d=n.a;if(d.b)if(d.b.b){var s=function(){return e.b?"The Json.Decode.oneOf at json"+a(an,"",kn(e)):"Json.Decode.oneOf"}(),A=s+(" failed in the following "+(T(vr(d))+" ways:"));return a(an,`

`,a(x,A,a(Et,yh,d)))}else{var t=d.a,c=t,l=e;n=c,e=l;continue n}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return e.b?" at json"+a(an,"",kn(e)):"!"}();default:var g=n.a,m=n.b,A=function(){return e.b?"Problem with the value at json"+(a(an,"",kn(e))+`:

    `):`Problem with the given value:

`}();return A+(yv(a(wv,4,m))+(`

`+g))}}),ze=32,Zc=U(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),Xc=$1,It=L1,Kc=v(function(n,e){return k$(e)/k$(n)}),Tr=C1,jt=It(a(Kc,2,ze)),Cv=L(Zc,0,jt,Xc,Xc),Pv=f1,Lv=function(n){return{$:1,a:n}};v(function(n,e){return n(e)});v(function(n,e){return e(n)});var qi=h1,wa=z1,nl=v1,qn=v(function(n,e){return on(n,e)>0?n:e}),Mh=function(n){return{$:0,a:n}},el=m1,Ch=v(function(n,e){n:for(;;){var r=a(el,ze,n),t=r.a,i=r.b,o=a(x,Mh(t),e);if(i.b){var c=i,l=o;n=c,e=l;continue n}else return kn(o)}}),Yi=function(n){var e=n.a;return e},Ph=v(function(n,e){n:for(;;){var r=It(e/ze);if(r===1)return a(el,ze,n).a;var t=a(Ch,n,z),i=r;n=t,e=i;continue n}}),zv=v(function(n,e){if(e.r){var r=e.r*ze,t=wa(a(Kc,ze,r-1)),i=n?kn(e.F):e.F,o=a(Ph,i,e.r);return L(Zc,nl(e.v)+r,a(qn,5,t*jt),o,e.v)}else return L(Zc,nl(e.v),jt,Xc,e.v)}),Lh=Hn(function(n,e,r,t,i){n:for(;;){if(e<0)return a(zv,!1,{F:t,r:r/ze|0,v:i});var o=Lv(p(Pv,ze,e,n)),c=n,l=e-ze,u=r,f=a(x,o,t),d=i;n=c,e=l,r=u,t=f,i=d;continue n}}),zh=v(function(n,e){if(n<=0)return Cv;var r=n%ze,t=p(Pv,r,n-r,e),i=n-r-ze;return D(Lh,e,i,n,z,t)}),er=function(n){return!n.$},O=lp,Pn=ap,R=cp,re=tp,kv=v(function(n,e){return{aa:e.aa,gx:n,c_:e.c_,gL:e.gL,eA:e.eA,dE:e.dE,cI:e.cI,iI:e.iI}}),Zi=up,Ft=$p,Gn=np,rl=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Yn=function(n){return n},kh=Yn,Tv=we(function(n,e,r,t,i,o){return{em:o,er:e,fg:t,fk:r,fo:n,fp:i}}),Th=U1,ya=F1,Oa=W1,Bt=v(function(n,e){return n<1?e:p(Oa,n,ya(e),e)}),Xi=O1,Ki=function(n){return n===""},no=v(function(n,e){return n<1?"":p(Oa,0,n,e)}),Dv=q1,Ev=Hn(function(n,e,r,t,i){if(Ki(i)||a(Th,"@",i))return B;var o=a(Xi,":",i);if(o.b){if(o.b.b)return B;var c=o.a,l=Dv(a(Bt,c+1,i));if(l.$===1)return B;var u=l;return j(On(Tv,n,a(no,c,i),u,e,r,t))}else return j(On(Tv,n,i,B,e,r,t))}),Iv=U(function(n,e,r,t){if(Ki(t))return B;var i=a(Xi,"/",t);if(i.b){var o=i.a;return D(Ev,n,a(Bt,o,t),e,r,a(no,o,t))}else return D(Ev,n,"/",e,r,t)}),jv=k(function(n,e,r){if(Ki(r))return B;var t=a(Xi,"?",r);if(t.b){var i=t.a;return L(Iv,n,j(a(Bt,i+1,r)),e,a(no,i,r))}else return L(Iv,n,B,e,r)});v(function(n,e){if(Ki(e))return B;var r=a(Xi,"#",e);if(r.b){var t=r.a;return p(jv,n,j(a(Bt,t+1,e)),a(no,t,e))}else return p(jv,n,B,e)});var Dh=J1,qa=function(n){},Vt=_a,Eh=Vt(0),Fv=U(function(n,e,r,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var d=f.a,s=f.b,g=r>500?p(jn,n,e,kn(s)):L(Fv,n,e,r+1,s);return a(n,i,a(n,c,a(n,u,a(n,d,g))))}else return a(n,i,a(n,c,a(n,u,e)))}else return a(n,i,a(n,c,e))}else return a(n,i,e)}else return e}),Zn=k(function(n,e,r){return L(Fv,n,e,0,r)}),W=v(function(n,e){return p(Zn,v(function(r,t){return a(x,n(r),t)}),z,e)}),eo=Tc,al=v(function(n,e){return a(eo,function(r){return Vt(n(r))},e)}),Ih=k(function(n,e,r){return a(eo,function(t){return a(eo,function(i){return Vt(a(n,t,i))},r)},e)}),jh=function(n){return p(Zn,Ih(x),Vt(z),n)},Fh=Pp,Bh=v(function(n,e){var r=e;return j$(a(eo,Fh(n),r))}),Vh=k(function(n,e,r){return a(al,function(t){return 0},jh(a(W,Bh(n),e)))}),Rh=k(function(n,e,r){return Vt(0)}),Nh=v(function(n,e){var r=e;return a(al,n,r)});$r.Task=Mp(Eh,Vh,Rh,Nh);var Wh=V$("Task"),tl=v(function(n,e){return Wh(a(al,n,e))}),Hh=$0,Qh=E1,ro={$:1},Bv=function(n){return{$:2,a:n}},il={$:0},Re=v(function(n,e){return{$:0,a:n,b:e}}),xn=k(function(n,e,r){return e(n(r))}),Sa=function(n){var e=n.b.p;return e.a},Gh=function(n){var e=n.a,r=n.b._,t=n.b.p,i=n.b.aq;if(i.b){var o=i.a,c=i.b;return j(a(Re,e,{p:o,aq:c,_:a(x,t,r)}))}else return B},fn=v(function(n,e){if(e.$)return n;var r=e.a;return r}),Uh=k(function(n,e,r){var t=r.a,i=r.b;switch(t.$){case 1:return r;case 2:var o=t.a.dR;return(on(o+e.gL,Sa(r).aa)>0?a(xn,Gh,fn(a(Re,ro,i))):Yn)(a(Re,Bv({dR:o+e.gL}),i));default:var c=i.p,l=c.a,u=c.b,f=a(kv,l.gx,V(e,{aa:l.aa+e.gL})),d=a(n,f,u);return a(Re,il,{p:M(f,d),aq:z,_:a(x,i.p,i._)})}}),ol=v(function(n,e){n:for(;;){if(n<=0)return e;if(e.b){e.a;var r=e.b,t=n-1,i=r;n=t,e=i;continue n}else return e}}),Jh=k(function(n,e,r){n:for(;;){if(n<=0)return r;if(e.b){var t=e.a,i=e.b,o=n-1,c=i,l=a(x,t,r);n=o,e=c,r=l;continue n}else return r}}),Oh=v(function(n,e){return kn(p(Jh,n,e,z))}),Vv=k(function(n,e,r){if(e<=0)return z;{var t=M(e,r);n:for(;;){e:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break n;case 2:var i=t.b,w=i.a,o=i.b,c=o.a;return $([w,c]);case 3:if(t.b.b.b.b){var l=t.b,w=l.a,u=l.b,c=u.a,f=u.b,d=f.a;return $([w,c,d])}else break e;default:if(t.b.b.b.b&&t.b.b.b.b.b){var s=t.b,w=s.a,g=s.b,c=g.a,m=g.b,d=m.a,A=m.b,_=A.a,y=A.b;return n>1e3?a(x,w,a(x,c,a(x,d,a(x,_,a(Oh,e-4,y))))):a(x,w,a(x,c,a(x,d,a(x,_,p(Vv,n+1,e-4,y)))))}else break e}else{if(t.a===1)break n;break e}else return r;return r}var S=t.b,w=S.a;return $([w])}}),Rv=v(function(n,e){return p(Vv,0,n,e)}),qh=v(function(n,e){var r=e.b._,t=e.b.p,i=e.b.aq,o=N(kn(r),N($([t]),i)),c=a(Rv,n,o),l=a(ol,n,o);if(l.b){var u=l.a,f=l.b;return a(Re,ro,{p:u,aq:f,_:kn(c)})}else{var d=kn(c);if(d.b){var s=d.a,g=d.b;return a(Re,ro,{p:s,aq:z,_:g})}else return e}}),Yh=function(n){var e=n.b;return a(Re,ro,e)},Zh=function(n){var e=n.b;return a(Re,Bv({dR:Sa(n).aa}),e)},Xh=function(n){var e=n.b;return a(Re,il,e)},Kh=v(function(n,e){switch(n.$){case 1:return Yh(e);case 2:return Xh(e);case 3:return Zh(e);default:var r=n.a;return a(qh,r,e)}}),ao=v(function(n,e){var r=e.a,t=e.b;return M(n(r),t)}),ng=v(function(n,e){return V(e,{aQ:n(e.aQ)})}),eg=function(n){return{$:3,a:n}},Nv=function(n){return{$:2,a:n}},Wv=v(function(n,e){return{$:0,a:n,b:e}}),rg=v(function(n,e){return{$:1,a:n,b:e}}),Tn=v(function(n,e){if(e.$)return B;var r=e.a;return j(n(r))}),sn=function(n){return n<0?-n:n},Hv=Y1,ag=k(function(n,e,r){return a(fn,0/0,Hv(a(n,e,r)))}),Dr=v(function(n,e){n:for(;;)if(e.b){var r=e.a,t=e.b;if(n(r))return!0;var i=n,o=t;n=i,e=o;continue n}else return!1}),tg=V1,Qv=function(n){return p(tg,x,z,n)},ig=v(function(n,e){var r=a(Dr,function(t){return t!=="0"&&t!=="."},Qv(e));return N(n&&r?"-":"",e)}),tn=T$,cl=I1,Gv=K1,Uv=function(n){var e=n.a,r=n.b;if(e==="9"){var t=Ja(r);if(t.$===1)return"01";var i=t.a;return a(cl,"0",Uv(i))}else{var o=fr(e);return o>=48&&o<57?a(cl,Gv(o+1),r):"0"}},ll=P1,og=D1,to=function(n){return a(cl,n,"")},Jv=k(function(n,e,r){return n<=0?r:p(Jv,n>>1,N(e,e),n&1?N(r,e):r)}),Rt=v(function(n,e){return p(Jv,n,e,"")}),ul=k(function(n,e,r){return N(r,a(Rt,n-ya(r),to(e)))}),$l=B1,Ov=function(n){var e=a(Yc,".",n);if(e.b)if(e.b.b){var r=e.a,t=e.b,i=t.a;return M(r,i)}else{var r=e.a;return M(r,"0")}else return M("0","0")},cg=function(n){var e=a(Yc,"e",tn(sn(n)));if(e.b)if(e.b.b){var r=e.a,t=e.b,i=t.a,o=a(fn,0,Dv(a(Dh,"+",i)?a(Bt,1,i):i)),c=Ov(r),l=c.a,u=c.b,f=N(l,u),d=o<0?a(fn,"0",a(Tn,function(s){var g=s.a,m=s.b;return g+("."+m)},a(Tn,ao(to),Ja(N(a(Rt,sn(o),"0"),f))))):p(ul,o+1,"0",f);return N(n<0?"-":"",d)}else{var r=e.a;return N(n<0?"-":"",r)}else return""},lg=k(function(n,e,r){if(ll(r)||og(r))return tn(r);var t=r<0,i=Ov(cg(sn(r))),o=i.a,c=i.b,l=ya(o)+e,u=N(a(Rt,-l+1,"0"),p(ul,l,"0",N(o,c))),f=ya(u),d=a(qn,1,l),s=a(n,t,p(Oa,d,f,u)),g=p(Oa,0,d,u),m=s?$l(a(fn,"1",a(Tn,Uv,Ja($l(g))))):g,A=ya(m),_=m==="0"?m:e<=0?N(m,a(Rt,sn(e),"0")):on(e,ya(c))<0?p(Oa,0,A-e,m)+("."+p(Oa,A-e,A,m)):N(o+".",p(ul,e,"0",c));return a(ig,t,_)}),qv=lg(v(function(n,e){var r=Ja(e);if(r.$===1)return!1;if(r.a.a==="5")return r.a.b===""?(r.a,!n):(r.a,!0);var t=r.a,i=t.a;return function(o){return o>53&&n||o>=53&&!n}(fr(i))})),ug=ag(qv),$g=k(function(n,e,r){var t=a(Kc,10,sn(e-n)),i=t<0?3:t<1?2:t<2?1:0;return a(ug,i,r)}),Yv=g1,Nt=v(function(n,e){n:for(;;){if(e.$===-2)return B;var r=e.b,t=e.c,i=e.d,o=e.e,c=a(Yv,n,r);switch(c){case 0:var l=n,u=i;n=l,e=u;continue n;case 1:return j(t);default:var l=n,u=o;n=l,e=u;continue n}}}),un=Hn(function(n,e,r,t,i){return{$:-1,a:n,b:e,c:r,d:t,e:i}}),mr={$:-2},Ya=Hn(function(n,e,r,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,d=t.c,s=t.d,g=t.e;return D(un,0,e,r,D(un,1,f,d,s,g),D(un,1,o,c,l,u))}else return D(un,n,o,c,D(un,0,e,r,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,d=t.c,m=t.d;m.a;var A=m.b,_=m.c,y=m.d,S=m.e,g=t.e;return D(un,0,f,d,D(un,1,A,_,y,S),D(un,1,e,r,g,i))}else return D(un,n,e,r,t,i)}),vl=k(function(n,e,r){if(r.$===-2)return D(un,0,n,e,mr,mr);var t=r.a,i=r.b,o=r.c,c=r.d,l=r.e,u=a(Yv,n,i);switch(u){case 0:return D(Ya,t,i,o,p(vl,n,e,c),l);case 1:return D(un,t,i,e,c,l);default:return D(Ya,t,i,o,c,p(vl,n,e,l))}}),Za=k(function(n,e,r){var t=p(vl,n,e,r);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return D(un,1,i,o,c,l)}else{var u=t;return u}}),vg=function(n){n:for(;;)if(n.$===-1&&n.d.$===-1){var e=n.d,r=e;n=r;continue n}else return n},Zv=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.e.d.$===-1&&!n.e.d.a){var e=n.a,r=n.b,t=n.c,i=n.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=n.e;f.a;var d=f.b,s=f.c,g=f.d;g.a;var m=g.b,A=g.c,_=g.d,y=g.e,S=f.e;return D(un,0,m,A,D(un,1,r,t,D(un,0,o,c,l,u),_),D(un,1,d,s,y,S))}else{var e=n.a,r=n.b,t=n.c,w=n.d;w.a;var o=w.b,c=w.c,l=w.d,u=w.e,C=n.e;C.a;var d=C.b,s=C.c,g=C.d,S=C.e;return D(un,1,r,t,D(un,0,o,c,l,u),D(un,0,d,s,g,S))}else return n},Xv=function(n){if(n.$===-1&&n.d.$===-1&&n.e.$===-1)if(n.d.d.$===-1&&!n.d.d.a){var e=n.a,r=n.b,t=n.c,i=n.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,d=l.d,s=l.e,g=i.e,m=n.e;m.a;var A=m.b,_=m.c,y=m.d,S=m.e;return D(un,0,o,c,D(un,1,u,f,d,s),D(un,1,r,t,g,D(un,0,A,_,y,S)))}else{var e=n.a,r=n.b,t=n.c,w=n.d;w.a;var o=w.b,c=w.c,C=w.d,g=w.e,F=n.e;F.a;var A=F.b,_=F.c,y=F.d,S=F.e;return D(un,1,r,t,D(un,0,o,c,C,g),D(un,0,A,_,y,S))}else return n},fg=Bi(function(n,e,r,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,d=o.e;return D(un,r,l,u,f,D(un,0,t,i,d,c))}else{n:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var s=c.d;return s.a,Xv(e)}else break n;else return c.a,c.d,Xv(e);else break n;return e}}),io=function(n){if(n.$===-1&&n.d.$===-1){var e=n.a,r=n.b,t=n.c,i=n.d,o=i.a,c=i.d,l=n.e;if(o===1){if(c.$===-1&&!c.a)return c.a,D(un,e,r,t,io(i),l);var u=Zv(n);if(u.$===-1){var f=u.a,d=u.b,s=u.c,g=u.d,m=u.e;return D(Ya,f,d,s,io(g),m)}else return mr}else return D(un,e,r,t,io(i),l)}else return mr},Wt=v(function(n,e){if(e.$===-2)return mr;var r=e.a,t=e.b,i=e.c,o=e.d,c=e.e;if(on(n,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,D(un,r,t,i,a(Wt,n,o),c);var u=Zv(e);if(u.$===-1){var f=u.a,d=u.b,s=u.c,g=u.d,m=u.e;return D(Ya,f,d,s,a(Wt,n,g),m)}else return mr}else return D(un,r,t,i,a(Wt,n,o),c);else return a(mg,n,zc(fg,n,e,r,t,i,o,c))}),mg=v(function(n,e){if(e.$===-1){var r=e.a,t=e.b,i=e.c,o=e.d,c=e.e;if(Z(n,t)){var l=vg(c);if(l.$===-1){var u=l.b,f=l.c;return D(Ya,r,u,f,o,io(c))}else return mr}else return D(Ya,r,t,i,o,a(Wt,n,c))}else return mr}),Kv=v(function(n,e){var r=a(Wt,n,e);if(r.$===-1&&!r.a){r.a;var t=r.b,i=r.c,o=r.d,c=r.e;return D(un,1,t,i,o,c)}else{var l=r;return l}}),oo=k(function(n,e,r){var t=e(a(Nt,n,r));if(t.$)return a(Kv,n,r);var i=t.a;return p(Za,n,i,r)}),sg=function(n){switch(n.$){case 1:var e=n.a,r=n.b;return a(oo,e,Tn(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(rg,M(o,c),r)}else return t}));case 0:var e=n.a,r=n.b;return a(oo,e,Tn(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(Wv,M(o,c),p($g,o,c,r))}));case 3:var e=n.a,r=n.b;return a(oo,e,Tn(function(t){return t.$===3?eg(r):t}));default:var e=n.a,r=n.b;return a(oo,e,Tn(function(t){return t.$===2?Nv(r):t}))}},dg=function(n){return ng(sg(n))},pg=v(function(n,e){return a(W,dg(n),e)}),hg=v(function(n,e){return V(e,{gx:a(pg,n,e.gx)})}),gg=v(function(n,e){var r=e.a,t=e.b;return a(Re,r,V(t,{p:a(ao,hg(n),t.p)}))}),fl=v(function(n,e){var r=e.a,t=e.b;return M(r,n(t))}),bg=k(function(n,e,r){var t=r.a,i=r.b,o=i.p;return a(Re,t,V(i,{p:a(fl,a(n,o.a,e),o)}))}),Ag=U(function(n,e,r,t){switch(r.$){case 0:return t;case 1:return V(t,{bA:!t.bA});case 2:var i=r.a;return V(t,{U:p(Uh,n,i,t.U)});case 3:var o=r.a;return V(t,{bs:o});case 4:var c=r.a;return V(t,{U:a(gg,c,t.U)});case 5:var l=r.a;return V(t,{U:p(bg,e,l,t.U)});default:var u=r.a;return V(t,{U:a(Kh,u,t.U)})}}),_g=v(function(n,e){return a(Re,il,{p:M(n,e(n)),aq:z,_:z})}),wg=Lp,nf=wg(z),yg=function(n){return{$:2,a:n}},qr=op,Yr=ip,Sg=Ep("tick",a(O,function(n){return a(O,function(e){return a(O,function(r){return a(O,function(t){return a(O,function(i){return a(O,function(o){return a(O,function(c){return Gn({aa:c,c_:o,gL:i,eA:t,dE:r,cI:e,iI:n})},a(R,"clock",re))},a(R,"devicePixelRatio",re))},a(R,"dt",re))},a(R,"keyboard",a(O,function(t){return a(O,function(i){return a(O,function(o){return a(O,function(c){return a(O,function(l){return a(O,function(u){return a(O,function(f){return a(O,function(d){return a(O,function(s){return Gn({f1:s,gz:d,c0:f,gK:u,eB:l,hM:c,fs:o,h1:i,dW:t})},a(R,"alt",Pn))},a(R,"control",Pn))},a(R,"down",Pn))},a(R,"downs",qr(Yr)))},a(R,"left",Pn))},a(R,"pressedKeys",qr(Yr)))},a(R,"right",Pn))},a(R,"shift",Pn))},a(R,"up",Pn))))},a(R,"pointer",a(O,function(r){return a(O,function(t){return a(O,function(i){return a(O,function(o){return a(O,function(c){return a(O,function(l){return a(O,function(u){return a(O,function(f){return Gn({c0:f,ex:u,hu:l,hS:c,hT:o,dW:i,iM:t,iQ:r})},a(R,"down",Pn))},a(R,"isDown",Pn))},a(R,"move",Pn))},a(R,"rightDown",Pn))},a(R,"rightUp",Pn))},a(R,"up",Pn))},a(R,"x",re))},a(R,"y",re))))},a(R,"screen",a(O,function(e){return a(O,function(r){return Gn({g2:r,iK:e})},a(R,"height",re))},a(R,"width",re))))},a(R,"wheel",a(O,function(n){return a(O,function(e){return Gn({gD:e,gE:n})},a(R,"deltaX",re))},a(R,"deltaY",re))))),xg=function(n){return n.dZ,Sg(yg)},Mg=function(n){return{$:5,a:n}},Cg={$:0},co=v(function(n,e){return n}),ef=function(n){var e=n.b;return e},Pg=function(n){var e=n.b.p;return e.b},Lg=function(n){return{$:1,a:n}},zg=Lg,ml=function(n){return{$:8,a:n}},vn=ml,Ht=function(n){return{$:0,a:n}},sr=k(function(n,e,r){return n(e(r))}),rf=a(sr,Ht,co),Zr=rf,dn=function(n){return{$:1,a:n}},ke=dn,sl=v(function(n,e){return{$:9,a:n,b:e}}),Te={$:0},af=v(function(n,e){return e.$===3?Te:a(sl,n,e)}),lo=function(n){return a(af,4,n)},h={fS:"a",cQ:"atv",fU:"ab",fV:"cx",fW:"cy",fX:"acb",fY:"accx",fZ:"accy",f_:"acr",d7:"al",d8:"ar",f$:"at",cR:"ah",cS:"av",f3:"s",f9:"bh",ga:"b",ge:"w7",gg:"bd",gh:"bdt",b7:"bn",gi:"bs",ca:"cpe",gs:"cp",gu:"cpx",gv:"cpy",az:"c",ce:"ctr",cf:"cb",cg:"ccx",aA:"ccy",bx:"cl",ch:"cr",gy:"ct",gB:"cptr",gC:"ctxt",gU:"fcs",el:"focus-within",gV:"fs",gZ:"g",c1:"hbh",c2:"hc",ep:"he",c3:"hf",eq:"hfp",g5:"hv",g8:"ic",ha:"fr",cn:"lbl",he:"iml",hf:"imlf",hg:"imlp",hh:"implw",hi:"it",hm:"i",eJ:"lnk",bh:"nb",e9:"notxt",hA:"ol",hC:"or",aX:"oq",hH:"oh",fd:"pg",fe:"p",hI:"ppe",hU:"ui",ai:"r",hX:"sb",hY:"sbx",hZ:"sby",h_:"sbt",h3:"e",h4:"cap",h6:"sev",ic:"sk",ij:"t",ik:"tc",il:"w8",im:"w2",$9:"w9",io:"tj",cM:"tja",ip:"tl",iq:"w3",ir:"w5",is:"w4",it:"tr",iu:"w6",iv:"w1",iw:"tun",fD:"ts",a2:"clr",iE:"u",d_:"wc",fN:"we",d$:"wf",fO:"wfp",d0:"wrp"},Qt=ur,Ne=v(function(n,e){return a(Rc,n,Qt(e))}),De=Ne("className"),Fn=function(n){return dn(De(n))},tf=v(function(n,e){return{$:2,a:n,b:e}}),kg=v(function(n,e){return{$:1,a:n,b:e}}),En=function(n){return{$:0,a:n}},oe=2,Tg={$:0},ye=Tg,Dg={$:0},Eg=h.f3+(" "+h.az),Ig=h.f3+(" "+h.gZ),jg=h.f3+(" "+h.fd),Fg=h.f3+(" "+h.fe),Bg=h.f3+(" "+h.ai),Vg=h.f3+(" "+h.h3),Rg=function(n){switch(n){case 0:return Bg;case 1:return Eg;case 2:return Vg;case 3:return Ig;case 4:return Fg;default:return jg}},of=function(n){return{$:1,a:n}},xa={$:0},dl=function(n){return{$:1,a:n}},cf=v(function(n,e){switch(e.$){case 0:return n;case 1:var r=e.a;return N(r,n);case 2:var t=e.a;return N(n,t);default:var r=e.a,t=e.b;return N(r,N(n,t))}}),lf=k(function(n,e,r){switch(r.$){case 0:return e;case 1:var t=r.a;return N(a(W,function(o){return M(n,o)},t),e);case 2:var i=r.a;return N(e,a(W,function(o){return M(n,o)},i));default:var t=r.a,i=r.b;return N(a(W,function(o){return M(n,o)},t),N(e,a(W,function(o){return M(n,o)},i)))}}),Gt=4,Ng=function(n){return{$:0,a:n}},Wg=function(n){return{$:1,a:n}},pn=function(n){return n>31?Wg(1<<n-32):Ng(1<<n)},uf=pn(41),$f=pn(40),vf=pn(42),ff=pn(43),Xr=Ve("div"),pl=mr,uo=pl,dr=function(n){switch(n.$){case 0:var e=n.a;return T(e)+"px";case 1:return"auto";case 2:var r=n.a;return T(r)+"fr";case 3:var t=n.a,i=n.b;return"min"+(T(t)+dr(i));default:var o=n.a,i=n.b;return"max"+(T(o)+dr(i))}},In=k1,Ln=function(n){return T(In(n*255))},hl=function(n){switch(n.$){case 0:return B;case 1:var e=n.a,r=e.a,t=e.b,i=e.c;return j("mv-"+(Ln(r)+("-"+(Ln(t)+("-"+Ln(i))))));default:var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,d=f.a,s=f.b,g=f.c,m=n.c,A=m.a,_=m.b,y=m.c,S=n.d;return j("tfrm-"+(Ln(c)+("-"+(Ln(l)+("-"+(Ln(u)+("-"+(Ln(d)+("-"+(Ln(s)+("-"+(Ln(g)+("-"+(Ln(A)+("-"+(Ln(_)+("-"+(Ln(y)+("-"+Ln(S))))))))))))))))))))}},Ut=function(n){switch(n.$){case 13:var e=n.a;return e;case 12:var e=n.a;return n.b,e;case 0:var r=n.a;return r;case 1:var e=n.a;return e;case 2:var t=n.a;return"font-size-"+T(t);case 3:var r=n.a;return r;case 4:var r=n.a;return r;case 5:var i=n.a,o=n.b;return n.c,i;case 7:var i=n.a;return n.b,n.c,n.d,n.e,i;case 6:var i=n.a;return n.b,n.c,n.d,n.e,i;case 8:var c=n.a;return"grid-rows-"+(a(an,"-",a(W,dr,c.hV))+("-cols-"+(a(an,"-",a(W,dr,c.an))+("-space-x-"+(dr(c.h7.a)+("-space-y-"+dr(c.h7.b)))))));case 9:var l=n.a;return"gp grid-pos-"+(T(l.ai)+("-"+(T(l.gw)+("-"+(T(l.iK)+("-"+T(l.g2)))))));case 11:var u=n.a,f=n.b,e=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(an," ",a(W,function(d){var s=Ut(d);if(s==="")return"";var g=s;return g+("-"+e)},f));default:var o=n.a;return a(fn,"",hl(o))}},gl=v(function(n,e){var r=e;return p(Za,n,0,r)}),Hg=v(function(n,e){var r=a(Nt,n,e);return!r.$}),bl=v(function(n,e){var r=e;return a(Hg,n,r)}),mf=v(function(n,e){var r=e.a,t=e.b,i=Ut(n);return a(bl,i,r)?e:M(a(gl,i,r),a(x,n,t))}),cn=v(function(n,e){return{$:0,a:n,b:e}}),Jt=v(function(n,e){return{$:0,a:n,b:e}}),P=function(n){return"."+n},Qg=k(function(n,e,r){var t=n(e);if(t.$)return r;var i=t.a;return a(x,i,r)}),We=v(function(n,e){return p(Zn,Qg(n),z,e)}),Xa=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return"rgba("+(T(In(e*255))+(","+T(In(r*255))+(","+T(In(t*255))+(","+(tn(i)+")")))))},Al=function(n){return a(an," ",a(We,Yn,$([n.eu?j("inset"):B,j(tn(n.fa.a)+"px"),j(tn(n.fa.b)+"px"),j(tn(n.a5)+"px"),j(tn(n.bl)+"px"),j(Xa(n.cc))])))},sf=function(n){return $([a(Jt,P(h.el)+":focus-within",a(We,Yn,$([a(Tn,function(e){return a(cn,"border-color",Xa(e))},n.gf),a(Tn,function(e){return a(cn,"background-color",Xa(e))},n.f7),a(Tn,function(e){return a(cn,"box-shadow",Al({a5:e.a5,cc:e.cc,eu:!1,fa:a(fl,Tr,a(ao,Tr,e.fa)),bl:e.bl}))},n.h$),j(a(cn,"outline","none"))]))),a(Jt,P(h.f3)+":focus .focusable, "+(P(h.f3)+".focusable:focus, "+(".ui-slide-bar:focus + "+(P(h.f3)+" .focusable-thumb"))),a(We,Yn,$([a(Tn,function(e){return a(cn,"border-color",Xa(e))},n.gf),a(Tn,function(e){return a(cn,"background-color",Xa(e))},n.f7),a(Tn,function(e){return a(cn,"box-shadow",Al({a5:e.a5,cc:e.cc,eu:!1,fa:a(fl,Tr,a(ao,Tr,e.fa)),bl:e.bl}))},n.h$),j(a(cn,"outline","none"))])))])},pr=function(n){return Ve(Q$(n))},df=v(function(n,e){return a(Rc,Qp(n),G$(e))}),_l=v(function(n,e){return{$:2,a:n,b:e}}),wl=function(n){return{$:6,a:n}},G=v(function(n,e){return{$:1,a:n,b:e}}),Ee=v(function(n,e){return{$:0,a:n,b:e}}),E=v(function(n,e){return{$:4,a:n,b:e}}),b=v(function(n,e){return{$:0,a:n,b:e}}),Gg=v(function(n,e){return{$:3,a:n,b:e}}),pf=$([0,1,2,3,4,5]),Ug=v(function(n,e){return e.b?p(Zn,x,e,n):n}),de=function(n){return p(Zn,Ug,z,n)},Kr=v(function(n,e){return de(a(W,n,e))}),Jg=function(n){switch(n){case 0:return P(h.gy);case 1:return P(h.cf);case 2:return P(h.ch);case 3:return P(h.bx);case 4:return P(h.cg);default:return P(h.aA)}},$o=function(n){switch(n){case 0:return P(h.f$);case 1:return P(h.fU);case 2:return P(h.d8);case 3:return P(h.d7);case 4:return P(h.fV);default:return P(h.fW)}},Ot=function(n){var e=function(r){var t=n(r),i=t.a,o=t.b;return $([a(E,Jg(r),i),a(G,P(h.f3),$([a(E,$o(r),o)]))])};return wl(a(Kr,e,pf))},hf=$([a(b,"display","flex"),a(b,"flex-direction","column"),a(b,"white-space","pre"),a(E,P(h.c1),$([a(b,"z-index","0"),a(G,P(h.f9),$([a(b,"z-index","-1")]))])),a(E,P(h.h_),$([a(G,P(h.ij),$([a(E,P(h.c3),$([a(b,"flex-grow","0")])),a(E,P(h.d$),$([a(b,"align-self","auto !important")]))]))])),a(G,P(h.c2),$([a(b,"height","auto")])),a(G,P(h.c3),$([a(b,"flex-grow","100000")])),a(G,P(h.d$),$([a(b,"width","100%")])),a(G,P(h.fO),$([a(b,"width","100%")])),a(G,P(h.d_),$([a(b,"align-self","flex-start")])),Ot(function(n){switch(n){case 0:return M($([a(b,"justify-content","flex-start")]),$([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]));case 1:return M($([a(b,"justify-content","flex-end")]),$([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]));case 2:return M($([a(b,"align-items","flex-end")]),$([a(b,"align-self","flex-end")]));case 3:return M($([a(b,"align-items","flex-start")]),$([a(b,"align-self","flex-start")]));case 4:return M($([a(b,"align-items","center")]),$([a(b,"align-self","center")]));default:return M($([a(G,P(h.f3),$([a(b,"margin-top","auto"),a(b,"margin-bottom","auto")]))]),$([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))}})]),Og=function(n){var e=function(r){return $([a(G,P(h.f3),$([a(E,$o(r),n(r))]))])};return wl(a(Kr,e,pf))},qg=function(){return $([0,1,2,3,4,5])}(),Yg=$([a(Ee,"html,body",$([a(b,"height","100%"),a(b,"padding","0"),a(b,"margin","0")])),a(Ee,N(P(h.f3),N(P(h.h3),P(h.g8))),$([a(b,"display","block"),a(E,P(h.c3),$([a(G,"img",$([a(b,"max-height","100%"),a(b,"object-fit","cover")]))])),a(E,P(h.d$),$([a(G,"img",$([a(b,"max-width","100%"),a(b,"object-fit","cover")]))]))])),a(Ee,P(h.f3)+":focus",$([a(b,"outline","none")])),a(Ee,P(h.hU),$([a(b,"width","100%"),a(b,"height","auto"),a(b,"min-height","100%"),a(b,"z-index","0"),a(E,N(P(h.f3),P(h.c3)),$([a(b,"height","100%"),a(G,P(h.c3),$([a(b,"height","100%")]))])),a(G,P(h.ha),$([a(E,P(h.bh),$([a(b,"position","fixed"),a(b,"z-index","20")]))]))])),a(Ee,P(h.bh),$([a(b,"position","relative"),a(b,"border","none"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(E,P(h.h3),hf),wl(function(n){return a(W,n,qg)}(function(n){switch(n){case 0:return a(E,P(h.fS),$([a(b,"position","absolute"),a(b,"bottom","100%"),a(b,"left","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(G,P(h.c3),$([a(b,"height","auto")])),a(G,P(h.d$),$([a(b,"width","100%")])),a(b,"pointer-events","none"),a(G,"*",$([a(b,"pointer-events","auto")]))]));case 1:return a(E,P(h.ga),$([a(b,"position","absolute"),a(b,"bottom","0"),a(b,"left","0"),a(b,"height","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(G,"*",$([a(b,"pointer-events","auto")])),a(G,P(h.c3),$([a(b,"height","auto")]))]));case 2:return a(E,P(h.hC),$([a(b,"position","absolute"),a(b,"left","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(G,"*",$([a(b,"pointer-events","auto")]))]));case 3:return a(E,P(h.hA),$([a(b,"position","absolute"),a(b,"right","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(G,"*",$([a(b,"pointer-events","auto")]))]));case 4:return a(E,P(h.ha),$([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(G,"*",$([a(b,"pointer-events","auto")]))]));default:return a(E,P(h.f9),$([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"z-index","0"),a(b,"pointer-events","none"),a(G,"*",$([a(b,"pointer-events","auto")]))]))}}))])),a(Ee,P(h.f3),$([a(b,"position","relative"),a(b,"border","none"),a(b,"flex-shrink","0"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(b,"resize","none"),a(b,"font-feature-settings","inherit"),a(b,"box-sizing","border-box"),a(b,"margin","0"),a(b,"padding","0"),a(b,"border-width","0"),a(b,"border-style","solid"),a(b,"font-size","inherit"),a(b,"color","inherit"),a(b,"font-family","inherit"),a(b,"line-height","1"),a(b,"font-weight","inherit"),a(b,"text-decoration","none"),a(b,"font-style","inherit"),a(E,P(h.d0),$([a(b,"flex-wrap","wrap")])),a(E,P(h.e9),$([a(b,"-moz-user-select","none"),a(b,"-webkit-user-select","none"),a(b,"-ms-user-select","none"),a(b,"user-select","none")])),a(E,P(h.gB),$([a(b,"cursor","pointer")])),a(E,P(h.gC),$([a(b,"cursor","text")])),a(E,P(h.hI),$([a(b,"pointer-events","none !important")])),a(E,P(h.ca),$([a(b,"pointer-events","auto !important")])),a(E,P(h.a2),$([a(b,"opacity","0")])),a(E,P(h.aX),$([a(b,"opacity","1")])),a(E,P(N(h.g5,h.a2))+":hover",$([a(b,"opacity","0")])),a(E,P(N(h.g5,h.aX))+":hover",$([a(b,"opacity","1")])),a(E,P(N(h.gU,h.a2))+":focus",$([a(b,"opacity","0")])),a(E,P(N(h.gU,h.aX))+":focus",$([a(b,"opacity","1")])),a(E,P(N(h.cQ,h.a2))+":active",$([a(b,"opacity","0")])),a(E,P(N(h.cQ,h.aX))+":active",$([a(b,"opacity","1")])),a(E,P(h.fD),$([a(b,"transition",a(an,", ",a(W,function(n){return n+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(E,P(h.hX),$([a(b,"overflow","auto"),a(b,"flex-shrink","1")])),a(E,P(h.hY),$([a(b,"overflow-x","auto"),a(E,P(h.ai),$([a(b,"flex-shrink","1")]))])),a(E,P(h.hZ),$([a(b,"overflow-y","auto"),a(E,P(h.az),$([a(b,"flex-shrink","1")])),a(E,P(h.h3),$([a(b,"flex-shrink","1")]))])),a(E,P(h.gs),$([a(b,"overflow","hidden")])),a(E,P(h.gu),$([a(b,"overflow-x","hidden")])),a(E,P(h.gv),$([a(b,"overflow-y","hidden")])),a(E,P(h.d_),$([a(b,"width","auto")])),a(E,P(h.b7),$([a(b,"border-width","0")])),a(E,P(h.gg),$([a(b,"border-style","dashed")])),a(E,P(h.gh),$([a(b,"border-style","dotted")])),a(E,P(h.gi),$([a(b,"border-style","solid")])),a(E,P(h.ij),$([a(b,"white-space","pre"),a(b,"display","inline-block")])),a(E,P(h.hi),$([a(b,"line-height","1.05"),a(b,"background","transparent"),a(b,"text-align","inherit")])),a(E,P(h.h3),hf),a(E,P(h.ai),$([a(b,"display","flex"),a(b,"flex-direction","row"),a(G,P(h.f3),$([a(b,"flex-basis","0%"),a(E,P(h.fN),$([a(b,"flex-basis","auto")])),a(E,P(h.eJ),$([a(b,"flex-basis","auto")]))])),a(G,P(h.c3),$([a(b,"align-self","stretch !important")])),a(G,P(h.eq),$([a(b,"align-self","stretch !important")])),a(G,P(h.d$),$([a(b,"flex-grow","100000")])),a(G,P(h.ce),$([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"align-self","stretch")])),a(G,"u:first-of-type."+h.f_,$([a(b,"flex-grow","1")])),a(G,"s:first-of-type."+h.fY,$([a(b,"flex-grow","1"),a(G,P(h.fV),$([a(b,"margin-left","auto !important")]))])),a(G,"s:last-of-type."+h.fY,$([a(b,"flex-grow","1"),a(G,P(h.fV),$([a(b,"margin-right","auto !important")]))])),a(G,"s:only-of-type."+h.fY,$([a(b,"flex-grow","1"),a(G,P(h.fW),$([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(G,"s:last-of-type."+(h.fY+" ~ u"),$([a(b,"flex-grow","0")])),a(G,"u:first-of-type."+(h.f_+(" ~ s."+h.fY)),$([a(b,"flex-grow","0")])),Ot(function(n){switch(n){case 0:return M($([a(b,"align-items","flex-start")]),$([a(b,"align-self","flex-start")]));case 1:return M($([a(b,"align-items","flex-end")]),$([a(b,"align-self","flex-end")]));case 2:return M($([a(b,"justify-content","flex-end")]),z);case 3:return M($([a(b,"justify-content","flex-start")]),z);case 4:return M($([a(b,"justify-content","center")]),z);default:return M($([a(b,"align-items","center")]),$([a(b,"align-self","center")]))}}),a(E,P(h.h6),$([a(b,"justify-content","space-between")])),a(E,P(h.cn),$([a(b,"align-items","baseline")]))])),a(E,P(h.az),$([a(b,"display","flex"),a(b,"flex-direction","column"),a(G,P(h.f3),$([a(b,"flex-basis","0px"),a(b,"min-height","min-content"),a(E,P(h.ep),$([a(b,"flex-basis","auto")]))])),a(G,P(h.c3),$([a(b,"flex-grow","100000")])),a(G,P(h.d$),$([a(b,"width","100%")])),a(G,P(h.fO),$([a(b,"width","100%")])),a(G,P(h.d_),$([a(b,"align-self","flex-start")])),a(G,"u:first-of-type."+h.fX,$([a(b,"flex-grow","1")])),a(G,"s:first-of-type."+h.fZ,$([a(b,"flex-grow","1"),a(G,P(h.fW),$([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]))])),a(G,"s:last-of-type."+h.fZ,$([a(b,"flex-grow","1"),a(G,P(h.fW),$([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]))])),a(G,"s:only-of-type."+h.fZ,$([a(b,"flex-grow","1"),a(G,P(h.fW),$([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(G,"s:last-of-type."+(h.fZ+" ~ u"),$([a(b,"flex-grow","0")])),a(G,"u:first-of-type."+(h.fX+(" ~ s."+h.fZ)),$([a(b,"flex-grow","0")])),Ot(function(n){switch(n){case 0:return M($([a(b,"justify-content","flex-start")]),$([a(b,"margin-bottom","auto")]));case 1:return M($([a(b,"justify-content","flex-end")]),$([a(b,"margin-top","auto")]));case 2:return M($([a(b,"align-items","flex-end")]),$([a(b,"align-self","flex-end")]));case 3:return M($([a(b,"align-items","flex-start")]),$([a(b,"align-self","flex-start")]));case 4:return M($([a(b,"align-items","center")]),$([a(b,"align-self","center")]));default:return M($([a(b,"justify-content","center")]),z)}}),a(G,P(h.ce),$([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"width","100%"),a(b,"align-self","stretch !important")])),a(E,P(h.h6),$([a(b,"justify-content","space-between")]))])),a(E,P(h.gZ),$([a(b,"display","-ms-grid"),a(G,".gp",$([a(G,P(h.f3),$([a(b,"width","100%")]))])),a(Gg,M("display","grid"),$([M("display","grid")])),Og(function(n){switch(n){case 0:return $([a(b,"justify-content","flex-start")]);case 1:return $([a(b,"justify-content","flex-end")]);case 2:return $([a(b,"align-items","flex-end")]);case 3:return $([a(b,"align-items","flex-start")]);case 4:return $([a(b,"align-items","center")]);default:return $([a(b,"justify-content","center")])}})])),a(E,P(h.fd),$([a(b,"display","block"),a(G,P(h.f3+":first-child"),$([a(b,"margin","0 !important")])),a(G,P(h.f3+($o(3)+(":first-child + ."+h.f3))),$([a(b,"margin","0 !important")])),a(G,P(h.f3+($o(2)+(":first-child + ."+h.f3))),$([a(b,"margin","0 !important")])),Ot(function(n){switch(n){case 0:return M(z,z);case 1:return M(z,z);case 2:return M(z,$([a(b,"float","right"),a(E,"::after",$([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case 3:return M(z,$([a(b,"float","left"),a(E,"::after",$([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case 4:return M(z,z);default:return M(z,z)}})])),a(E,P(h.he),$([a(b,"white-space","pre-wrap !important"),a(b,"height","100%"),a(b,"width","100%"),a(b,"background-color","transparent")])),a(E,P(h.hh),$([a(E,P(h.h3),$([a(b,"flex-basis","auto")]))])),a(E,P(h.hg),$([a(b,"white-space","pre-wrap !important"),a(b,"cursor","text"),a(G,P(h.hf),$([a(b,"white-space","pre-wrap !important"),a(b,"color","transparent")]))])),a(E,P(h.fe),$([a(b,"display","block"),a(b,"white-space","normal"),a(b,"overflow-wrap","break-word"),a(E,P(h.c1),$([a(b,"z-index","0"),a(G,P(h.f9),$([a(b,"z-index","-1")]))])),a(_l,P(h.ij),$([a(b,"display","inline"),a(b,"white-space","normal")])),a(_l,P(h.fe),$([a(b,"display","inline"),a(E,"::after",$([a(b,"content","none")])),a(E,"::before",$([a(b,"content","none")]))])),a(_l,P(h.h3),$([a(b,"display","inline"),a(b,"white-space","normal"),a(E,P(h.fN),$([a(b,"display","inline-block")])),a(E,P(h.ha),$([a(b,"display","flex")])),a(E,P(h.f9),$([a(b,"display","flex")])),a(E,P(h.fS),$([a(b,"display","flex")])),a(E,P(h.ga),$([a(b,"display","flex")])),a(E,P(h.hC),$([a(b,"display","flex")])),a(E,P(h.hA),$([a(b,"display","flex")])),a(G,P(h.ij),$([a(b,"display","inline"),a(b,"white-space","normal")]))])),a(G,P(h.ai),$([a(b,"display","inline")])),a(G,P(h.az),$([a(b,"display","inline-flex")])),a(G,P(h.gZ),$([a(b,"display","inline-grid")])),Ot(function(n){switch(n){case 0:return M(z,z);case 1:return M(z,z);case 2:return M(z,$([a(b,"float","right")]));case 3:return M(z,$([a(b,"float","left")]));case 4:return M(z,z);default:return M(z,z)}})])),a(E,".hidden",$([a(b,"display","none")])),a(E,P(h.iv),$([a(b,"font-weight","100")])),a(E,P(h.im),$([a(b,"font-weight","200")])),a(E,P(h.iq),$([a(b,"font-weight","300")])),a(E,P(h.is),$([a(b,"font-weight","400")])),a(E,P(h.ir),$([a(b,"font-weight","500")])),a(E,P(h.iu),$([a(b,"font-weight","600")])),a(E,P(h.ge),$([a(b,"font-weight","700")])),a(E,P(h.il),$([a(b,"font-weight","800")])),a(E,P(h.$9),$([a(b,"font-weight","900")])),a(E,P(h.hm),$([a(b,"font-style","italic")])),a(E,P(h.ic),$([a(b,"text-decoration","line-through")])),a(E,P(h.iE),$([a(b,"text-decoration","underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(E,N(P(h.iE),P(h.ic)),$([a(b,"text-decoration","line-through underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(E,P(h.iw),$([a(b,"font-style","normal")])),a(E,P(h.io),$([a(b,"text-align","justify")])),a(E,P(h.cM),$([a(b,"text-align","justify-all")])),a(E,P(h.ik),$([a(b,"text-align","center")])),a(E,P(h.it),$([a(b,"text-align","right")])),a(E,P(h.ip),$([a(b,"text-align","left")])),a(E,".modal",$([a(b,"position","fixed"),a(b,"left","0"),a(b,"top","0"),a(b,"width","100%"),a(b,"height","100%"),a(b,"pointer-events","none")]))]))]),na=function(n){return $([a(Ee,".v-"+n,$([a(b,"font-feature-settings",'"'+(n+'"'))])),a(Ee,".v-"+(n+"-off"),$([a(b,"font-feature-settings",'"'+(n+'" 0'))]))])},Zg=de($([a(W,function(n){return a(Ee,".border-"+T(n),$([a(b,"border-width",T(n)+"px")]))},a(kr,0,6)),a(W,function(n){return a(Ee,".font-size-"+T(n),$([a(b,"font-size",T(n)+"px")]))},a(kr,8,32)),a(W,function(n){return a(Ee,".p-"+T(n),$([a(b,"padding",T(n)+"px")]))},a(kr,0,24)),$([a(Ee,".v-smcp",$([a(b,"font-variant","small-caps")])),a(Ee,".v-smcp-off",$([a(b,"font-variant","normal")]))]),na("zero"),na("onum"),na("liga"),na("dlig"),na("ordn"),na("tnum"),na("afrc"),na("frac")])),Xg=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(h.f3+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(h.f3+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Kg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,n3=`
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
`,e3=`
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
`,r3=`
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
`,a3="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(P(h.f3)+(P(h.ai)+(" > "+(P(h.f3)+(" { flex-basis: auto !important; } "+(P(h.f3)+(P(h.ai)+(" > "+(P(h.f3)+(P(h.ce)+(" { flex-basis: auto !important; }}"+(Kg+(n3+(r3+(e3+Xg))))))))))))))),Ka=function(n){return a(an,"",n)},nt=v(function(n,e){return{cb:e,J:z,aH:z,aj:n}}),et=v(function(n,e){var r=n,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return V(o,{aH:a(x,M(c,l),o.aH)});case 3:var u=i.a,f=u.a,d=u.b,s=i.b;return V(o,{J:a(x,{cb:`
}`,J:z,aH:s,aj:"@supports ("+(f+(":"+(d+(") {"+r.aj))))},o.J)});case 5:var g=i.a,m=i.b;return V(o,{J:a(x,a(et,a(nt,r.aj+(" + "+g),""),m),o.J)});case 1:var A=i.a,_=i.b;return V(o,{J:a(x,a(et,a(nt,r.aj+(" > "+A),""),_),o.J)});case 2:var A=i.a,_=i.b;return V(o,{J:a(x,a(et,a(nt,r.aj+(" "+A),""),_),o.J)});case 4:var y=i.a,S=i.b;return V(o,{J:a(x,a(et,a(nt,N(r.aj,y),""),S),o.J)});default:var w=i.a;return V(o,{J:a(x,a(et,a(nt,r.aj,""),w),o.J)})}});return p(Zn,t,r,e)}),t3=function(n){var e=function(i){return Ka(a(W,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},r=function(i){var o=i.aH;return o.b?i.aj+("{"+(e(i.aH)+(i.cb+"}"))):""},t=function(i){var o=i;return N(r(o),Ka(a(W,t,o.J)))};return Ka(a(W,t,p(Zn,v(function(i,o){var c=i.a,l=i.b;return a(x,a(et,a(nt,c,""),l),o)}),z,n)))},gf=N(a3,t3(N(Yg,Zg))),ea=Vc,bf=function(n){var e=n.e6;switch(e){case 0:return p(pr,"div",z,$([p(pr,"style",z,$([ea(gf)]))]));case 1:return ea("");default:return p(pr,"elm-ui-static-rules",$([a(df,"rules",Qt(gf))]),z)}},qt=v(function(n,e){return ur(p(jn,bp(n),pp(),e))}),Ma=function(n){return ur(p(jn,v(function(e,r){var t=e.a,i=e.b;return p(gp,t,i,r)}),hp(),n))},i3=function(n){switch(n.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var e=n.a;return'"'+(e+'"');case 4:var e=n.a;return n.b,'"'+(e+'"');default:var e=n.a.hw;return'"'+(e+'"')}},o3=function(n){switch(n.$){case 0:var e=n.a;return e==="smcp";case 1:var e=n.a;return!1;default:var e=n.a,r=n.b;return e==="smcp"&&r===1}},c3=function(n){if(n.$===5){var e=n.a;return a(Dr,o3,e.fH)}else return!1},He=v(function(n,e){return on(n,e)<0?n:e}),Yt=k(function(n,e,r){var t=e.a,i=e.b;return n?r+(`
  `+(t+(": "+(i+" !important;")))):r+(`
  `+(t+(": "+(i+";"))))}),Bn=U(function(n,e,r,t){if(e.$===1)return $([r+("{"+(p(jn,Yt(!1),"",t)+`
}`))]);var i=e.a;switch(i){case 1:var o=n.g5;switch(o){case 0:return z;case 2:return $([r+("-hv {"+(p(jn,Yt(!0),"",t)+`
}`))]);default:return $([r+("-hv:hover {"+(p(jn,Yt(!1),"",t)+`
}`))])}case 0:var c=p(jn,Yt(!1),"",t);return $([r+("-fs:focus {"+(c+`
}`)),"."+(h.f3+(":focus "+(r+"-fs  {")))+(c+`
}`),r+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(P(h.f3)+(" .focusable-thumb"+(r+"-fs {")))+(c+`
}`)]);default:return $([r+("-act:active {"+(p(jn,Yt(!1),"",t)+`
}`))])}}),l3=function(n){switch(n.$){case 0:var e=n.a;return'"'+(e+'"');case 1:var e=n.a;return'"'+(e+'" 0');default:var e=n.a,r=n.b;return'"'+(e+('" '+T(r)))}},u3=function(n){if(n.$===5){var e=n.a;return j(a(an,", ",a(W,l3,e.fH)))}else return B},$3=function(n){switch(n.$){case 0:return B;case 1:var e=n.a,r=e.a,t=e.b,i=e.c;return j("translate3d("+(tn(r)+("px, "+(tn(t)+("px, "+(tn(i)+"px)"))))));default:var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,d=f.a,s=f.b,g=f.c,m=n.c,A=m.a,_=m.b,y=m.c,S=n.d,w="translate3d("+(tn(c)+("px, "+(tn(l)+("px, "+(tn(u)+"px)"))))),C="scale3d("+(tn(d)+(", "+(tn(s)+(", "+(tn(g)+")"))))),F="rotate3d("+(tn(A)+(", "+(tn(_)+(", "+(tn(y)+(", "+(tn(S)+"rad)")))))));return j(w+(" "+(C+(" "+F))))}},yl=k(function(n,e,r){switch(e.$){case 0:var t=e.a,i=e.b;return L(Bn,n,r,t,i);case 13:var o=e.a,c=e.b;return L(Bn,n,r,"."+o,$([a(cn,"box-shadow",c)]));case 12:var o=e.a,l=e.b,u=a(qn,0,a(He,1,1-l));return L(Bn,n,r,"."+o,$([a(cn,"opacity",tn(u))]));case 2:var f=e.a;return L(Bn,n,r,".font-size-"+T(f),$([a(cn,"font-size",T(f)+"px")]));case 1:var o=e.a,d=e.b,s=a(an,", ",a(We,u3,d)),g=$([a(cn,"font-family",a(an,", ",a(W,i3,d))),a(cn,"font-feature-settings",s),a(cn,"font-variant",a(Dr,c3,d)?"small-caps":"normal")]);return L(Bn,n,r,"."+o,g);case 3:var m=e.a,c=e.b,A=e.c;return L(Bn,n,r,"."+m,$([a(cn,c,A)]));case 4:var m=e.a,c=e.b,_=e.c;return L(Bn,n,r,"."+m,$([a(cn,c,Xa(_))]));case 5:var y=e.a,S=e.b,w=e.c,C=T(w)+"px",F=T(S)+"px",q="."+h.ai,en="."+(h.d0+q),Y="."+h.d8,X="."+h.fe,K="."+h.fd,Q="."+h.d7,ln=tn(w/2)+"px",bn=tn(S/2)+"px",zn="."+h.az,m="."+y,An="."+h.f3;return de($([L(Bn,n,r,m+(q+(" > "+(An+(" + "+An)))),$([a(cn,"margin-left",F)])),L(Bn,n,r,m+(en+(" > "+An)),$([a(cn,"margin",ln+(" "+bn))])),L(Bn,n,r,m+(zn+(" > "+(An+(" + "+An)))),$([a(cn,"margin-top",C)])),L(Bn,n,r,m+(K+(" > "+(An+(" + "+An)))),$([a(cn,"margin-top",C)])),L(Bn,n,r,m+(K+(" > "+Q)),$([a(cn,"margin-right",F)])),L(Bn,n,r,m+(K+(" > "+Y)),$([a(cn,"margin-left",F)])),L(Bn,n,r,N(m,X),$([a(cn,"line-height","calc(1em + "+(T(w)+"px)"))])),L(Bn,n,r,"textarea"+(An+m),$([a(cn,"line-height","calc(1em + "+(T(w)+"px)")),a(cn,"height","calc(100% + "+(T(w)+"px)"))])),L(Bn,n,r,m+(X+(" > "+Q)),$([a(cn,"margin-right",F)])),L(Bn,n,r,m+(X+(" > "+Y)),$([a(cn,"margin-left",F)])),L(Bn,n,r,m+(X+"::after"),$([a(cn,"content","''"),a(cn,"display","block"),a(cn,"height","0"),a(cn,"width","0"),a(cn,"margin-top",T(-1*(w/2|0))+"px")])),L(Bn,n,r,m+(X+"::before"),$([a(cn,"content","''"),a(cn,"display","block"),a(cn,"height","0"),a(cn,"width","0"),a(cn,"margin-bottom",T(-1*(w/2|0))+"px")]))]));case 7:var y=e.a,_n=e.b,Y=e.c,Dn=e.d,Q=e.e,m="."+y;return L(Bn,n,r,m,$([a(cn,"padding",tn(_n)+("px "+(tn(Y)+("px "+(tn(Dn)+("px "+(tn(Q)+"px")))))))]));case 6:var y=e.a,_n=e.b,Y=e.c,Dn=e.d,Q=e.e,m="."+y;return L(Bn,n,r,m,$([a(cn,"border-width",T(_n)+("px "+(T(Y)+("px "+(T(Dn)+("px "+(T(Q)+"px")))))))]));case 8:var wn=e.a,Jn=k(function(ie,Mt,Pr){n:for(;;)switch(Pr.$){case 0:var c1=Pr.a;return T(c1)+"px";case 1:var Ze=M(ie,Mt);if(Ze.a.$===1){if(Ze.b.$===1)return Ze.a,Ze.b,"max-content";Ze.a;var ba=Ze.b.a;return"minmax(max-content, "+(T(ba)+"px)")}else if(Ze.b.$===1){var Aa=Ze.a.a;return Ze.b,"minmax("+(T(Aa)+"px, max-content)")}else{var Aa=Ze.a.a,ba=Ze.b.a;return"minmax("+(T(Aa)+("px, "+(T(ba)+"px)")))}case 2:var z$=Pr.a,Xe=M(ie,Mt);if(Xe.a.$===1){if(Xe.b.$===1)return Xe.a,Xe.b,T(z$)+"fr";Xe.a;var ba=Xe.b.a;return"minmax(max-content, "+(T(ba)+"px)")}else if(Xe.b.$===1){var Aa=Xe.a.a;return Xe.b,"minmax("+(T(Aa)+("px, "+(T(z$)+"frfr)")))}else{var Aa=Xe.a.a,ba=Xe.b.a;return"minmax("+(T(Aa)+("px, "+(T(ba)+"px)")))}case 3:var Sc=Pr.a,xc=Pr.b,Mc=j(Sc),Cc=Mt,Pc=xc;ie=Mc,Mt=Cc,Pr=Pc;continue n;default:var Sc=Pr.a,xc=Pr.b,Mc=ie,Cc=j(Sc),Pc=xc;ie=Mc,Mt=Cc,Pr=Pc;continue n}}),Wn=function(ie){return p(Jn,B,B,ie)};Wn(wn.h7.a);var fe=Wn(wn.h7.b),ga=function(ie){return"grid-template-rows: "+(ie+";")}(a(an," ",a(W,Wn,wn.hV))),St=function(ie){return"-ms-grid-rows: "+(ie+";")}(a(an,fe,a(W,Wn,wn.an))),Mr=function(ie){return"-ms-grid-columns: "+(ie+";")}(a(an,fe,a(W,Wn,wn.an))),Cr="grid-row-gap:"+(Wn(wn.h7.b)+";"),Ha="grid-column-gap:"+(Wn(wn.h7.a)+";"),ji=function(ie){return"grid-template-columns: "+(ie+";")}(a(an," ",a(W,Wn,wn.an))),m=".grid-rows-"+(a(an,"-",a(W,dr,wn.hV))+("-cols-"+(a(an,"-",a(W,dr,wn.an))+("-space-x-"+(dr(wn.h7.a)+("-space-y-"+dr(wn.h7.b))))))),xt=m+("{"+(ji+(ga+(Ha+(Cr+"}"))))),wc="@supports (display:grid) {"+(xt+"}"),yc=m+("{"+(Mr+(St+"}")));return $([yc,wc]);case 9:var _e=e.a,r1=a(an," ",$(["-ms-grid-row: "+(T(_e.ai)+";"),"-ms-grid-row-span: "+(T(_e.g2)+";"),"-ms-grid-column: "+(T(_e.gw)+";"),"-ms-grid-column-span: "+(T(_e.iK)+";")])),a1=a(an," ",$(["grid-row: "+(T(_e.ai)+(" / "+(T(_e.ai+_e.g2)+";"))),"grid-column: "+(T(_e.gw)+(" / "+(T(_e.gw+_e.iK)+";")))])),m=".grid-pos-"+(T(_e.ai)+("-"+(T(_e.gw)+("-"+(T(_e.iK)+("-"+T(_e.g2))))))),xt=m+("{"+(a1+"}")),wc="@supports (display:grid) {"+(xt+"}"),yc=m+("{"+(r1+"}"));return $([yc,wc]);case 11:var m=e.a,t1=e.b,i1=function(ie){return p(yl,n,ie,j(m))};return a(Kr,i1,t1);default:var or=e.a,A=$3(or),m=hl(or),Fi=M(m,A);if(!Fi.a.$&&!Fi.b.$){var y=Fi.a.a,o1=Fi.b.a;return L(Bn,n,r,"."+y,$([a(cn,"transform",o1)]))}else return z}}),v3=v(function(n,e){return Ma(a(W,function(r){var t=p(yl,n,r,B);return M(Ut(r),a(qt,Qt,t))},e))}),vo=v(function(n,e){var r=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return n+(" {"+(a(an,"",a(W,r,e))+"}"))}),Af=k(function(n,e,r){var t=r.a,i=r.b;return $([a(vo,"."+(n+("."+(e+(", "+("."+(n+(" ."+e))))))),t),a(vo,"."+(n+("."+(e+("> ."+(h.ij+(", ."+(n+(" ."+(e+(" > ."+h.ij)))))))))),i)])}),f3=k(function(n,e,r){var t=e.a,i=e.b,o=Z(n,r)?n:r+(" ."+n);return a(an," ",N(p(Af,o,h.h4,i),p(Af,o,h.gV,t)))}),m3=v(function(n,e){var r=Z(n,e)?n:e+(" ."+n);return a(an," ",$([a(vo,"."+(r+("."+(h.h4+(", "+("."+(r+(" ."+h.h4))))))),$([M("line-height","1")])),a(vo,"."+(r+("."+(h.h4+("> ."+(h.ij+(", ."+(r+(" ."+(h.h4+(" > ."+h.ij)))))))))),$([M("vertical-align","0"),M("line-height","1")]))]))}),_f=k(function(n,e,r){return{g2:e/n,bl:n,fI:r}}),Ca=v(function(n,e){return p(Zn,v(function(r,t){return n(r)?a(x,r,t):t}),z,e)}),Sl=function(n){if(n.b){var e=n.a,r=n.b;return j(p(jn,qn,e,r))}else return B},fo=function(n){if(n.b){var e=n.a,r=n.b;return j(p(jn,He,e,r))}else return B},wf=function(n){var e=$([n.gm,n.f8,n.gG,n.hr]),r=a(fn,n.gG,fo(e)),t=a(fn,n.f8,fo(a(Ca,function(f){return!Z(f,r)},e))),i=a(fn,n.gm,Sl(e)),o=1/(i-t),c=1-i,l=1/(i-r),u=1-i;return{gm:p(_f,o,i-t,c),en:p(_f,l,i-r,u)}},yf=function(n){return M($([M("display","block")]),$([M("display","inline-block"),M("line-height",tn(n.g2)),M("vertical-align",tn(n.fI)+"em"),M("font-size",tn(n.bl)+"em")]))},s3=function(n){return p(jn,v(function(e,r){if(r.$===1)if(e.$===5){var t=e.a,i=t.fT;if(i.$===1)return r;var o=i.a;return j(M(yf(function(c){return c.en}(wf(o))),yf(function(c){return c.gm}(wf(o)))))}else return r;else return r}),B,n)},d3=function(n){var e=function(o){if(o.$===4){var c=o.b;return j("@import url('"+(c+"');"))}else return B},r=function(o){o.a;var c=o.b,l=a(an,`
`,a(We,e,c));return l},t=a(W,Yi,n),i=function(o){var c=o.a,l=o.b,u=s3(l);if(u.$===1)return a(an,"",a(W,m3(c),t));var f=u.a;return a(an,"",a(W,a(f3,c,f),t))};return N(a(an,`
`,a(W,r,n)),a(an,`
`,a(W,i,n)))},p3=function(n){if(n.$===1){var e=n.a,r=n.b;return j(M(e,r))}else return B},Sf=v(function(n,e){var r=v(function(c,l){return{cG:N(l.cG,p(yl,n,c,B)),bZ:function(){var u=p3(c);if(u.$===1)return l.bZ;var f=u.a;return a(x,f,l.bZ)}()}}),t=p(jn,r,{cG:z,bZ:z},e),i=t.bZ,o=t.cG;return N(d3(i),Ka(o))}),xf=v(function(n,e){var r=n.e6;switch(r){case 0:return p(pr,"div",z,$([p(pr,"style",z,$([ea(a(Sf,n,e))]))]));case 1:return p(pr,"div",z,$([p(pr,"style",z,$([ea(a(Sf,n,e))]))]));default:return p(pr,"elm-ui-rules",$([a(df,"rules",a(v3,n,e))]),z)}}),Mf=U(function(n,e,r,t){var i=a(xf,e,p(jn,mf,M(uo,sf(e.gU)),r).b);return n?a(x,M("static-stylesheet",bf(e)),a(x,M("dynamic-stylesheet",i),t)):a(x,M("dynamic-stylesheet",i),t)}),Cf=U(function(n,e,r,t){var i=a(xf,e,p(jn,mf,M(uo,sf(e.gU)),r).b);return n?a(x,bf(e),a(x,i,t)):a(x,i,t)}),xl=pn(45),Zt=pn(37),Pf=function(n){return Bp(Q$(n))},Ml=Ve("p"),Se=v(function(n,e){var r=e.a,t=e.b;if(n.$){var o=n.a;return Z(o&t,o)}else{var i=n.a;return Z(i&r,i)}}),Lf=Ve("s"),zf=Ve("u"),Cl=pn(44),Xt=pn(39),mo=we(function(n,e,r,t,i,o){var c=v(function(u,f){if(t.$===1){var d=t.a;return p(Pf,u,f,function(){switch(i.$){case 0:return d;case 2:var g=i.a,m=i.b;return L(Mf,!1,g,m,d);default:var g=i.a,m=i.b;return L(Mf,!0,g,m,d)}}())}else{var s=t.a;return a(function(){switch(u){case"div":return Xr;case"p":return Ml;default:return pr(u)}}(),f,function(){switch(i.$){case 0:return s;case 2:var g=i.a,m=i.b;return L(Cf,!1,g,m,s);default:var g=i.a,m=i.b;return L(Cf,!0,g,m,s)}}())}}),l=function(){switch(e.$){case 0:return a(c,"div",r);case 1:var u=e.a;return a(c,u,r);default:var u=e.a,f=e.b;return p(pr,u,r,$([a(c,f,$([De(h.f3+(" "+h.h3))]))]))}}();switch(o){case 0:return a(Se,Xt,n)&&!a(Se,Cl,n)?l:a(Se,$f,n)?a(zf,$([De(a(an," ",$([h.f3,h.h3,h.ce,h.aA,h.f_])))]),$([l])):a(Se,vf,n)?a(Lf,$([De(a(an," ",$([h.f3,h.h3,h.ce,h.aA,h.fY])))]),$([l])):l;case 1:return a(Se,Zt,n)&&!a(Se,xl,n)?l:a(Se,ff,n)?a(Lf,$([De(a(an," ",$([h.f3,h.h3,h.ce,h.fZ])))]),$([l])):a(Se,uf,n)?a(zf,$([De(a(an," ",$([h.f3,h.h3,h.ce,h.fX])))]),$([l])):l;default:return l}}),Er=function(n){return!n.b},rr=ea,h3=h.f3+(" "+(h.ij+(" "+(h.d_+(" "+h.c2))))),Kt=function(n){return a(Xr,$([De(h3)]),$([rr(n)]))},g3=h.f3+(" "+(h.ij+(" "+(h.d$+(" "+h.c3))))),kf=function(n){return a(Xr,$([De(g3)]),$([rr(n)]))},b3=k(function(n,e,r){var t=v(function(A,_){var y=A.a,S=A.b,w=_.a,C=_.b;switch(S.$){case 0:var F=S.a;return Z(n,Gt),M(a(x,M(y,F(n)),w),C);case 1:var q=S.a;return Z(n,Gt),M(a(x,M(y,a(q.g6,xa,n)),w),Er(C)?q.id:N(q.id,C));case 2:var en=S.a;return M(a(x,M(y,Z(n,oe)?kf(en):Kt(en)),w),C);default:return M(w,C)}}),i=v(function(A,_){var y=_.a,S=_.b;switch(A.$){case 0:var w=A.a;return Z(n,Gt),M(a(x,w(n),y),S);case 1:var C=A.a;return Z(n,Gt),M(a(x,a(C.g6,xa,n),y),Er(S)?C.id:N(C.id,S));case 2:var F=A.a;return M(a(x,Z(n,oe)?kf(F):Kt(F),y),S);default:return M(y,S)}});if(e.$===1){var o=e.a,c=p(Zn,t,M(z,z),o),l=c.a,u=c.b,f=Er(u)?r.id:N(r.id,u);if(f.b){var d=f;return dl({g6:L(mo,r.aU,r.aW,r.aM,of(p(lf,"nearby-element-pls",l,r.aP))),id:d})}else return Ht(D(mo,r.aU,r.aW,r.aM,of(p(lf,"nearby-element-pls",l,r.aP)),xa))}else{var s=e.a,g=p(Zn,i,M(z,z),s),m=g.a,u=g.b,f=Er(u)?r.id:N(r.id,u);if(f.b){var d=f;return dl({g6:L(mo,r.aU,r.aW,r.aM,En(a(cf,m,r.aP))),id:d})}else return Ht(D(mo,r.aU,r.aW,r.aM,En(a(cf,m,r.aP)),xa))}}),xe=k(function(n,e,r){return{$:3,a:n,b:e,c:r}}),Tf=function(n){return{$:10,a:n}},so=v(function(n,e){return{$:0,a:n,b:e}}),mn=v(function(n,e){var r=e.a,t=e.b;if(n.$){var o=n.a;return a(so,r,o|t)}else{var i=n.a;return a(so,i|r,t)}}),Df=function(n){return{$:1,a:n}},po=v(function(n,e){return{$:3,a:n,b:e}}),Ef=function(n){return{$:2,a:n}},A3=v(function(n,e){return a(Xr,$([De(function(){switch(n){case 0:return a(an," ",$([h.bh,h.h3,h.fS]));case 1:return a(an," ",$([h.bh,h.h3,h.ga]));case 2:return a(an," ",$([h.bh,h.h3,h.hC]));case 3:return a(an," ",$([h.bh,h.h3,h.hA]));case 4:return a(an," ",$([h.bh,h.h3,h.ha]));default:return a(an," ",$([h.bh,h.h3,h.f9]))}}())]),$([function(){switch(e.$){case 3:return ea("");case 2:var r=e.a;return Kt(r);case 0:var t=e.a;return t(oe);default:var i=e.a;return a(i.g6,xa,oe)}}()]))}),_3=k(function(n,e,r){var t=a(A3,n,e);switch(r.$){case 0:return n===5?Df($([t])):Ef($([t]));case 1:var i=r.a;return n===5?Df(a(x,t,i)):a(po,i,$([t]));case 2:var o=r.a;return n===5?a(po,$([t]),o):Ef(a(x,t,o));default:var i=r.a,o=r.b;return n===5?a(po,a(x,t,i),o):a(po,i,a(x,t,o))}}),If=v(function(n,e){return{$:2,a:n,b:e}}),hr=function(n){return{$:1,a:n}},Pa=v(function(n,e){switch(e.$){case 0:return hr(n);case 1:var r=e.a;return a(If,r,n);default:var t=e.a,i=e.b;return a(If,t,i)}}),w3=function(n){switch(n){case 0:return h.cR+(" "+h.d7);case 2:return h.cR+(" "+h.d8);default:return h.cR+(" "+h.fV)}},y3=function(n){switch(n){case 0:return h.cS+(" "+h.f$);case 2:return h.cS+(" "+h.fU);default:return h.cS+(" "+h.fW)}},ni=v(function(n,e){return a(Ke,Hp(n),G$(e))}),gr=U(function(n,e,r,t){return{$:2,a:n,b:e,c:r,d:t}}),ra=function(n){return{$:1,a:n}},jf=v(function(n,e){switch(n.$){case 0:switch(e.$){case 0:var i=e.a;return ra(I(i,0,0));case 1:var o=e.a;return ra(I(0,o,0));case 2:var c=e.a;return ra(I(0,0,c));case 3:var r=e.a;return ra(r);case 4:var r=e.a,m=e.b;return L(gr,I(0,0,0),I(1,1,1),r,m);default:var r=e.a;return L(gr,I(0,0,0),r,I(0,0,1),0)}case 1:var t=n.a,i=t.a,o=t.b,c=t.c;switch(e.$){case 0:var l=e.a;return ra(I(l,o,c));case 1:var u=e.a;return ra(I(i,u,c));case 2:var f=e.a;return ra(I(i,o,f));case 3:var r=e.a;return ra(r);case 4:var r=e.a,m=e.b;return L(gr,t,I(1,1,1),r,m);default:var d=e.a;return L(gr,t,d,I(0,0,1),0)}default:var t=n.a,i=t.a,o=t.b,c=t.c,s=n.b,g=n.c,m=n.d;switch(e.$){case 0:var l=e.a;return L(gr,I(l,o,c),s,g,m);case 1:var u=e.a;return L(gr,I(i,u,c),s,g,m);case 2:var f=e.a;return L(gr,I(i,o,f),s,g,m);case 3:var A=e.a;return L(gr,A,s,g,m);case 4:var _=e.a,y=e.b;return L(gr,t,s,_,y);default:var S=e.a;return L(gr,t,S,g,m)}}}),rt=pn(7),Ff=pn(36),Bf=v(function(n,e){var r=n.a,t=n.b,i=e.a,o=e.b;return a(so,r|i,t|o)}),Ir=a(so,0,0),Pl=function(n){switch(n.$){case 0:var e=n.a,r=T(e),t="height-px-"+r;return I(Ir,h.ep+(" "+t),$([p(xe,t,"height",r+"px")]));case 1:return I(a(mn,Ff,Ir),h.c2,z);case 2:var i=n.a;return i===1?I(a(mn,Zt,Ir),h.c3,z):I(a(mn,Zt,Ir),h.eq+(" height-fill-"+T(i)),$([p(xe,h.f3+("."+(h.az+(" > "+P("height-fill-"+T(i))))),"flex-grow",T(i*1e5))]));case 3:var o=n.a,c=n.b,l="min-height-"+T(o),u=p(xe,l,"min-height",T(o)+"px !important"),f=Pl(c),d=f.a,s=f.b,g=f.c;return I(a(mn,xl,d),l+(" "+s),a(x,u,g));default:var m=n.a,c=n.b,l="max-height-"+T(m),u=p(xe,l,"max-height",T(m)+"px"),A=Pl(c),d=A.a,s=A.b,g=A.c;return I(a(mn,xl,d),l+(" "+s),a(x,u,g))}},Vf=pn(38),Ll=function(n){switch(n.$){case 0:var e=n.a;return I(Ir,h.fN+(" width-px-"+T(e)),$([p(xe,"width-px-"+T(e),"width",T(e)+"px")]));case 1:return I(a(mn,Vf,Ir),h.d_,z);case 2:var r=n.a;return r===1?I(a(mn,Xt,Ir),h.d$,z):I(a(mn,Xt,Ir),h.fO+(" width-fill-"+T(r)),$([p(xe,h.f3+("."+(h.ai+(" > "+P("width-fill-"+T(r))))),"flex-grow",T(r*1e5))]));case 3:var t=n.a,i=n.b,o="min-width-"+T(t),c=p(xe,o,"min-width",T(t)+"px"),l=Ll(i),u=l.a,f=l.b,d=l.c;return I(a(mn,Cl,u),o+(" "+f),a(x,c,d));default:var s=n.a,i=n.b,o="max-width-"+T(s),c=p(xe,o,"max-width",T(s)+"px"),g=Ll(i),u=g.a,f=g.b,d=g.c;return I(a(mn,Cl,u),o+(" "+f),a(x,c,d))}},ho=pn(27),S3=v(function(n,e){if(Z(n,ho))if(e.$===3){var r=e.c;switch(r){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(e.$){case 2:var t=e.a;return t>=8&&t<=32;case 7:e.a;var i=e.b,o=e.c,c=e.d,l=e.e;return Z(i,c)&&Z(i,o)&&Z(i,l)&&i>=0&&i<=24;default:return!1}}),at=pn(6),Rf=pn(30),Nf=pn(29),x3=Cn(function(n,e,r,t,i,o,c,l){n:for(;;)if(l.b){var d=l.a,s=l.b;switch(d.$){case 0:var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 3:var F=d.a,q=d.b;if(a(Se,F,r)){var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else{var g=q+(" "+n),m=e,A=a(mn,F,r),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}case 1:var en=d.a,g=n,m=e,A=r,_=t,y=i,S=a(x,en,o),w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 4:var F=d.a,Y=d.b;if(a(Se,F,r)){var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else if(a(S3,F,Y)){var g=Ut(Y)+(" "+n),m=e,A=a(mn,F,r),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else{var g=Ut(Y)+(" "+n),m=e,A=a(mn,F,r),_=t,y=a(x,Y,i),S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}case 10:var F=d.a,X=d.b,g=n,m=e,A=a(mn,F,r),_=a(jf,t,X),y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 7:var K=d.a;if(a(Se,at,r)){var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else switch(K.$){case 0:var Q=K.a,g=h.fN+(" width-px-"+T(Q))+(" "+n),m=e,A=a(mn,at,r),_=t,y=a(x,p(xe,"width-px-"+T(Q),"width",T(Q)+"px"),i),S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 1:var g=n+(" "+h.d_),m=e,A=a(mn,Vf,a(mn,at,r)),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 2:var ln=K.a;if(ln===1){var g=n+(" "+h.d$),m=e,A=a(mn,Xt,a(mn,at,r)),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else{var g=n+(" "+(h.fO+(" width-fill-"+T(ln)))),m=e,A=a(mn,Xt,a(mn,at,r)),_=t,y=a(x,p(xe,h.f3+("."+(h.ai+(" > "+P("width-fill-"+T(ln))))),"flex-grow",T(ln*1e5)),i),S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}default:var bn=Ll(K),zn=bn.a,An=bn.b,Cr=bn.c,g=n+(" "+An),m=e,A=a(Bf,zn,a(mn,at,r)),_=t,y=N(Cr,i),S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}case 8:var _n=d.a;if(a(Se,rt,r)){var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else switch(_n.$){case 0:var Q=_n.a,Dn=T(Q)+"px",wn="height-px-"+Dn,g=h.ep+(" "+(wn+(" "+n))),m=e,A=a(mn,rt,r),_=t,y=a(x,p(xe,wn,"height ",Dn),i),S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 1:var g=h.c2+(" "+n),m=e,A=a(mn,Ff,a(mn,rt,r)),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 2:var ln=_n.a;if(ln===1){var g=h.c3+(" "+n),m=e,A=a(mn,Zt,a(mn,rt,r)),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else{var g=n+(" "+(h.eq+(" height-fill-"+T(ln)))),m=e,A=a(mn,Zt,a(mn,rt,r)),_=t,y=a(x,p(xe,h.f3+("."+(h.az+(" > "+P("height-fill-"+T(ln))))),"flex-grow",T(ln*1e5)),i),S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}default:var Jn=Pl(_n),zn=Jn.a,An=Jn.b,Cr=Jn.c,g=n+(" "+An),m=e,A=a(Bf,zn,a(mn,rt,r)),_=t,y=N(Cr,i),S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}case 2:var Wn=d.a;switch(Wn.$){case 0:var g=n,m=a(Pa,"main",e),A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 1:var g=n,m=a(Pa,"nav",e),A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 2:var g=n,m=a(Pa,"footer",e),A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 3:var g=n,m=a(Pa,"aside",e),A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 4:var fe=Wn.a;if(fe<=1){var g=n,m=a(Pa,"h1",e),A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else if(fe<7){var g=n,m=a(Pa,"h"+T(fe),e),A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else{var g=n,m=a(Pa,"h6",e),A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}case 9:var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 8:var g=n,m=e,A=r,_=t,y=i,S=a(x,a(ni,"role","button"),o),w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 5:var ga=Wn.a,g=n,m=e,A=r,_=t,y=i,S=a(x,a(ni,"aria-label",ga),o),w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 6:var g=n,m=e,A=r,_=t,y=i,S=a(x,a(ni,"aria-live","polite"),o),w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;default:var g=n,m=e,A=r,_=t,y=i,S=a(x,a(ni,"aria-live","assertive"),o),w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}case 9:var St=d.a,Mr=d.b,Cr=function(){switch(Mr.$){case 3:return i;case 2:return Mr.a,i;case 0:return Mr.a,i;default:var xt=Mr.a;return N(i,xt.id)}}(),g=n,m=e,A=r,_=t,y=Cr,S=o,w=p(_3,St,Mr,c),C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n;case 6:var Ha=d.a;if(a(Se,Rf,r)){var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else{var g=w3(Ha)+(" "+n),m=e,A=function(or){switch(Ha){case 1:return a(mn,vf,or);case 2:return a(mn,$f,or);default:return or}}(a(mn,Rf,r)),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}default:var ji=d.a;if(a(Se,Nf,r)){var g=n,m=e,A=r,_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}else{var g=y3(ji)+(" "+n),m=e,A=function(or){switch(ji){case 1:return a(mn,ff,or);case 2:return a(mn,uf,or);default:return or}}(a(mn,Nf,r)),_=t,y=i,S=o,w=c,C=s;n=g,e=m,r=A,t=_,i=y,o=S,c=w,l=C;continue n}}}else{var u=hl(t);if(u.$===1)return{aM:a(x,De(n),o),aP:c,aU:r,aW:e,id:i};var f=u.a;return{aM:a(x,De(n+(" "+f)),o),aP:c,aU:r,aW:e,id:a(x,Tf(t),i)}}}),Wf={$:0},M3=Wf,Vn=U(function(n,e,r,t){return p(b3,n,t,Ct(x3,Rg(n),e,Ir,M3,z,z,Dg,kn(r)))}),jr=U(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),C3={f7:B,gf:B,h$:j({a5:0,cc:L(jr,155/255,203/255,1,1),fa:M(0,0),bl:3})},P3=function(n){var e=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.g5;return c.$===1?V(i,{g5:j(o)}):i;case 1:var l=t.a,u=i.gU;return u.$===1?V(i,{gU:j(l)}):i;default:var f=t.a,d=i.e6;return d.$===1?V(i,{e6:j(f)}):i}}),r=function(t){return{gU:function(){var i=t.gU;if(i.$===1)return C3;var o=i.a;return o}(),g5:function(){var i=t.g5;if(i.$===1)return 1;var o=i.a;return o}(),e6:function(){var i=t.e6;if(i.$===1)return 0;var o=i.a;return o}()}};return r(p(Zn,e,{gU:B,g5:B,e6:B},n))},L3=v(function(n,e){switch(e.$){case 0:var r=e.a;return r(oe);case 1:var t=e.a.id,r=e.a.g6;return a(r,n(t),oe);case 2:var i=e.a;return Kt(i);default:return Kt("")}}),z3=k(function(n,e,r){var t=P3(n),i=function(){var o=t.e6;return o===1?tf(t):kg(t)}();return a(L3,i,L(Vn,oe,ye,e,En($([r]))))}),ei=k(function(n,e,r){return{$:4,a:n,b:e,c:r}}),Hf=v(function(n,e){return{$:1,a:n,b:e}}),Qf=function(n){return{$:2,a:n}},k3={$:1},hn=v(function(n,e){return{$:4,a:n,b:e}}),zl=function(n){return{$:3,a:n}},Gf=pn(8),Uf=pn(14),Jf=pn(5),Of=pn(4),tt=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return Ln(e)+("-"+(Ln(r)+("-"+(Ln(t)+("-"+Ln(i))))))},go=Q1,kl=H1,qf=v(function(n,e){return N(e,function(){switch(n.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=n.a;return a(an,"-",kl(go(r)));case 4:var r=n.a;return n.b,a(an,"-",kl(go(r)));default:var r=n.a.hw;return a(an,"-",kl(go(r)))}}())}),T3=function(){var n=$([zl("Open Sans"),zl("Helvetica"),zl("Verdana"),k3]);return $([a(hn,Gf,p(ei,"bg-"+tt(L(jr,1,1,1,0)),"background-color",L(jr,1,1,1,0))),a(hn,Uf,p(ei,"fc-"+tt(L(jr,0,0,0,1)),"color",L(jr,0,0,0,1))),a(hn,Of,Qf(20)),a(hn,Jf,a(Hf,p(jn,qf,"font-",n),n))])}(),D3=k(function(n,e,r){var t=n.hG;return p(z3,t,a(x,Fn(a(an," ",$([h.hU,h.f3,h.h3]))),N(T3,e)),r)}),Yf={$:3},Zf=function(n){return{$:2,a:n}},Tl=Rp,Dl=v(function(n,e){switch(e.$){case 1:var r=e.a;return dl({g6:v(function(o,c){return a(Tl,n,a(r.g6,o,c))}),id:r.id});case 0:var t=e.a;return Ht(a(sr,Tl(n),t));case 2:var i=e.a;return Zf(i);default:return Yf}}),El=Dl,E3=Tl,I3=function(n){return{$:0,a:n}},yn=I3,j3=Wp,Sn=j3,Xf={$:1},ri=function(n){return{$:5,a:n}},Il=ri(0),pe=k(function(n,e,r){return L(jr,n/255,e/255,r/255,1)}),it=p(pe,0,0,0),F3=Ke("d"),B3=Ke("fill"),V3=Ke("height"),Kf=W$("http://www.w3.org/2000/svg"),R3=Kf("path"),N3=Kf("svg"),W3=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return{f0:i,gb:t,gX:r,hP:e}},H3=function(n){var e=W3(n);return"rgba("+(T(In(e.hP*255))+(","+T(In(e.gX*255))+(","+T(In(e.gb*255))+(","+tn(e.f0)+")"))))},Q3=Ke("viewBox"),G3=Ke("width"),ot=k(function(n,e,r){return a(N3,$([Q3("0 0 100 100"),G3(T(n)),V3(T(n))]),$([a(R3,$([F3(r),B3(H3(e))]),z)]))}),U3={$:1},Xn=U3,jl=function(n){return{$:7,a:n}},J=jl,gn=v(function(n,e){return L(Vn,oe,ye,a(x,J(Xn),a(x,vn(Xn),n)),En($([e])))}),nm=function(n){return{$:2,a:n}},nn=nm(1),La={gJ:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gW:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",g1:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hJ:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hL:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hO:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",h5:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",iD:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",iG:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fR:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ct={da:260,bI:54},ce=function(n){return a(hn,Gf,p(ei,"bg-"+tt(n),"background-color",n))},J3=pn(28),ar=function(n){return a(hn,J3,p(ei,"bc-"+tt(n),"border-color",n))},bo=1,Un=v(function(n,e){return L(Vn,bo,ye,a(x,Fn(h.gy+(" "+h.bx)),a(x,vn(Xn),a(x,J(Xn),n))),En(e))}),O3=p(pe,83,83,83),em=U(function(n,e,r,t){return L(jr,n/255,e/255,r/255,t)}),Ao=L(em,56,56,56,.25),le=Yf,za=Hn(function(n,e,r,t,i){return{$:7,a:n,b:e,c:r,d:t,e:i}}),ka=pn(2),tr=function(n){var e=n;return a(hn,ka,D(za,"p-"+T(n),e,e,e,e))},Fl=k(function(n,e,r){return{$:5,a:n,b:e,c:r}}),Bl=pn(3),rm=v(function(n,e){return"spacing-"+(T(n)+("-"+T(e)))}),Kn=function(n){return a(hn,Bl,p(Fl,a(rm,n,n),n,n))},q3=L(em,0,0,0,0),Y3=function(n){return{$:4,a:n}},lt=0,Fr=v(function(n,e){return L(Vn,lt,ye,a(x,Fn(h.bx+(" "+h.aA)),a(x,J(Xn),a(x,vn(Xn),n))),En(e))}),Z3=function(n){switch(n.$){case 0:var e=n.a;return e;case 1:var r=n.a;return r.g6(a(tf,{gU:{f7:B,gf:B,h$:B},g5:1,e6:0},r.id));case 2:var t=n.a;return co(ea(t));default:return co(ea(""))}},X3=v(function(n,e){return Z3(n(e))}),K3=Np,n2=v(function(n,e){return Ht(p(K3,X3,n,e))}),Me=function(n){return a(hn,Uf,p(ei,"fc-"+tt(n),"color",n))},ut=p(pe,195,195,195),Qe=v(function(n,e){return{$:3,a:n,b:e}}),Vl=pn(13),e2=a(Qe,Vl,h.is),am=pn(20),ai=a(Qe,am,h.hZ),br=function(n){return a(hn,Of,Qf(n))},Rl=a(Qe,Vl,h.ge),Nl=v(function(n,e){if(e.$===-2)return mr;var r=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return D(un,r,t,a(n,t,i),a(Nl,n,o),a(Nl,n,c))}),ti=v(function(n,e){if(Z(n,e)){var r=n;return a(hn,ka,D(za,"p-"+T(n),r,r,r,r))}else{var t=e,i=n;return a(hn,ka,D(za,"p-"+(T(n)+("-"+T(e))),t,i,t,i))}}),he=function(n){return Zf(n)},r2=function(n){return p(Oi,k(function(e,r,t){return a(x,r,t)}),z,n)},a2=v(function(n,e){return{$:3,a:n,b:e}}),t2=v(function(n,e){return{$:2,a:n,b:e}}),i2=v(function(n,e){return{$:0,a:n,b:e}}),o2=v(function(n,e){return{$:1,a:n,b:e}}),aa=U(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),Wl=L(aa,0/255,0/255,0/255,1),ii=function(n){return{$:6,a:n}},c2=ii(0),oi=function(n){return{$:2,a:n}},l2={$:6},Hl=oi(l2),Ql=k(function(n,e,r){if(e.$===1)return e.a,L(Vn,bo,hr("label"),n,En($([r])));var t=e.a,i=e.b,o=e.c,c=L(Vn,oe,ye,i,En($([o])));switch(t){case 2:return L(Vn,bo,hr("label"),a(x,Fn(h.cn),n),En($([c,r])));case 3:return L(Vn,bo,hr("label"),a(x,Fn(h.cn),n),En($([r,c])));case 0:return L(Vn,lt,hr("label"),a(x,Fn(h.cn),n),En($([r,c])));default:return L(Vn,lt,hr("label"),a(x,Fn(h.cn),n),En($([c,r])))}}),_o=ni,Ar=ri(1),tm="Enter",u2=function(n){return{$:5,a:n}},Gl=function(n){if(n.$===1){var e=n.a;return oi(u2(e))}else return Te},Ul=function(n){return n.$===1},$2=function(n){return{$:0,a:n}},Jl=H$,Ol=v(function(n,e){return a(Jl,n,$2(e))}),im=function(n){return a(Ol,"click",Gn(n))},ql=ep,v2=function(n){return{$:2,a:n}},f2=v(function(n,e){return a(Jl,n,v2(e))}),om=function(n){var e=function(t){var i=n(t);if(i.$===1)return ql("No key matched");var o=i.a;return Gn(o)},r=a(O,e,a(R,"key",Yr));return dn(a(f2,"keydown",a(Zi,function(t){return M(t,!0)},r)))},cm=pn(21),Br=a(Qe,cm,h.gB),lm=" ",um=function(n){return a(Ke,"tabIndex",T(n))},m2=a(sr,dn,um),$m=v(function(n,e){var r=e.c8,t=e.g7,i=e.gr,o=e.fb,c=N($([Ul(r)?Te:Kn(6),dn(im(o(!i))),Hl,om(function(l){return Z(l,tm)||Z(l,lm)?j(o(!i)):B}),m2(0),Br,c2,J(nn)]),n);return p(Ql,a(x,dn(a(_o,"role","checkbox")),a(x,dn(a(_o,"aria-checked",i?"true":"false")),a(x,Gl(r),c))),r,L(Vn,oe,ye,$([Ar,vn(nn),J(Xn)]),En($([t(i)]))))}),s2=k(function(n,e,r){return N(a(Rt,n-ya(r),to(e)),r)}),ci=w1,vm=function(n){var e=function(r){return r<10?T(r):to(Gv(87+r))};return n<16?e(n):N(vm(n/16|0),e(a(ci,16,n)))},d2=a(xn,vm,a(s2,2,"0")),Yl=function(n){var e=n.a,r=n.b,t=n.c,i=n.d;return{f0:i,gb:t,gX:r,hP:e}},p2=function(n){var e=Yl(n),r=e.hP,t=e.gX,i=e.gb;return a(an,"",a(x,"#",a(W,a(xn,In,d2),$([r*255,t*255,i*255]))))},Zl=pn(12),fm=a(Qe,Zl,h.ik),wo=ii(1),Ge=y1,ae=function(n){return n*Ge/180},h2=function(n){return{$:1,a:n}},yo=v(function(n,e){return{$:10,a:n,b:e}}),g2=pn(26),mm=function(n){return a(yo,g2,h2(-n))},ta=k(function(n,e,r){return L(jr,n,e,r,1)}),Xl=jr,b2=v(function(n,e){return{$:4,a:n,b:e}}),A2=pn(24),_2=function(n){return a(yo,A2,a(b2,I(0,0,1),n))},w2=pn(17),Ue=function(n){return a(hn,w2,p(xe,"br-"+T(n),"border-radius",T(n)+"px"))},y2=function(n){return Ka($([n.eu?"box-inset":"box-",Ln(n.fa.a)+"px",Ln(n.fa.b)+"px",Ln(n.a5)+"px",Ln(n.bl)+"px",tt(n.cc)]))},S2=pn(19),x2=function(n){var e={a5:n.a5,cc:n.cc,eu:!1,fa:n.fa,bl:n.bl};return a(hn,S2,p(xe,y2(e),"box-shadow",Al(e)))},Kl=v(function(n,e){return{$:12,a:n,b:e}}),nu=pn(0),M2=function(n){return n?a(hn,nu,a(Kl,"transparent",1)):a(hn,nu,a(Kl,"visible",0))},So=p(ta,1,1,1),eu=Hn(function(n,e,r,t,i){return{$:6,a:n,b:e,c:r,d:t,e:i}}),$t=function(n){return a(hn,ho,D(eu,"b-"+T(n),n,n,n,n))},C2=v(function(n,e){return a(hn,ho,D(eu,"b-"+(T(n)+("-"+T(e))),e,n,e,n))}),li=function(n){var e=n.b8,r=n.cN,t=n.eB,i=n.fs;return Z(r,e)&&Z(t,i)?Z(r,i)?$t(r):a(C2,t,r):a(hn,ho,D(eu,"b-"+(T(r)+("-"+(T(i)+("-"+(T(e)+("-"+T(t))))))),r,i,e,t))},sm=function(n){return a(gn,$([Fn("focusable"),J(yn(14)),vn(yn(14)),Me(So),Ar,br(9),fm,Ue(3),ar(n?p(ta,59/255,153/255,252/255):p(ta,211/255,211/255,211/255)),x2({a5:1,cc:n?L(Xl,238/255,238/255,238/255,0):p(ta,238/255,238/255,238/255),fa:M(0,0),bl:1}),ce(n?p(ta,59/255,153/255,252/255):So),$t(n?0:1),lo(a(gn,$([ar(So),vn(yn(6)),J(yn(9)),_2(ae(-45)),wo,Ar,mm(1),M2(!n),li({b8:2,eB:2,fs:0,cN:0})]),le))]),le)},P2=Ne("htmlFor"),L2=v(function(n,e){if(e.$)return B;var r=e.a;return n(r)}),xo=v(function(n,e){if(e.$){var t=e.a;return se(t)}else{var r=e.a;return n(r)}}),dm=U(function(n,e,r,t){return{hc:e,hs:n,hz:r,ie:t}}),z2=d0,k2=Z1,T2=v(function(n,e){if(e.$)return se(n);var r=e.a;return Qn(r)}),D2=s0,E2=function(n){return a(D2,{gn:!1,hv:!1},n)},ia=function(n){if(n.b){var e=n.a;return n.b,j(e)}else return B},I2=v(function(n,e){if(e.$){var t=e.a;return se(t)}else{var r=e.a;return Qn(n(r))}}),j2=function(n){return{$:2,a:n}},F2=function(n){return{$:0,a:n}},B2=function(n){return{$:1,a:n}},ru=v(function(n,e){return fr(e)-fr(n)}),au=k(function(n,e,r){var t=fr(r);return on(fr(n),t)<1&&on(t,fr(e))<1}),V2=v(function(n,e){var r=function(i){return on(i,n)<0?Qn(i):se(B2(e))},t=p(au,"0","9",e)?Qn(a(ru,"0",e)):p(au,"a","z",e)?Qn(10+a(ru,"a",e)):p(au,"A","Z",e)?Qn(10+a(ru,"A",e)):se(F2(e));return a(xo,r,t)}),pm=v(function(n,e){var r=Ja(e);if(r.$===1)return Qn(0);var t=r.a,i=t.a,o=t.b;return a(xo,function(c){return a(xo,function(l){return Qn(c+l*n)},a(pm,n,o))},a(V2,n,i))}),R2=v(function(n,e){return 2<=n&&n<=36?a(pm,n,$l(e)):se(j2(n))}),N2=R2(16),W2=k(function(n,e,r){return L(aa,n,e,r,1)}),H2=U(function(n,e,r,t){return L(aa,n,e,r,t)}),oa=_1,Q2=v(function(n,e){var r=a(oa,10,n);return In(e*r)/r}),G2=function(){var n="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",e=function(r){var t=Qv(r);if(t.b&&!t.b.b){var i=t.a;return k2($([i,i]))}else return r};return a(xn,go,a(xn,function(r){return a(Tn,function(t){return p(z2,1,t,r)},E2(n))},a(xn,L2(ia),a(xn,Tn(function(r){return r.ie}),a(xn,Tn(We(Yn)),a(xn,T2("Parsing hex regex failed"),xo(function(r){var t=a(W,a(xn,e,a(xn,N2,I2(Tr))),r);n:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,d=f.a.a;return Qn(L(H2,i/255,c/255,u/255,a(Q2,2,d/255)))}else break n;else{var i=t.a.a,s=t.b,c=s.a.a,g=s.b,u=g.a.a;return Qn(p(W2,i/255,c/255,u/255))}else break n;return se("Parsing ints from hex failed")})))))))}(),U2=Ne("id"),J2=Ve("input"),O2=Ve("label"),tu=k(function(n,e,r){return{$:0,a:n,b:e,c:r}}),q2=tu(0),Y2=Ne("name"),Z2=function(n){return M(n,!0)},X2=function(n){return{$:1,a:n}},K2=v(function(n,e){return a(Jl,n,X2(e))}),nb=v(function(n,e){return p(Zn,R,e,n)}),eb=a(nb,$(["target","value"]),Yr),iu=function(n){return a(K2,"input",a(Zi,Z2,a(Zi,n,eb)))},rb=a(Qe,Zl,h.ip),hm=a(Qe,Zl,h.it),Mo=function(n){return a(af,5,n)},ui=function(n){return a(hn,Jf,a(Hf,p(jn,qf,"ff-",n),n))},ab=p(pe,195,195,195),gm=p(pe,69,69,69),tb=tu(2),ib={$:2},$i=ib,ob=pn(32),cb=pn(31),bm=function(n){return p(Zn,v(function(e,r){if(r.$)if(e.$===8){var i=e.a;return j(i)}else return B;else{var t=r.a;return j(t)}}),B,n)},lb=v(function(n,e){return a(fn,e,p(Zn,v(function(r,t){if(t.$)if(r.$===4&&r.b.$===5){var o=r.b,i=o.b,c=o.c;return j(M(i,c))}else return B;else{var i=t.a;return j(i)}}),B,n))}),Am=function(n){return p(Zn,v(function(e,r){if(r.$)if(e.$===7){var i=e.a;return j(i)}else return B;else{var t=r.a;return j(t)}}),B,n)},_m=pn(33),ub=Ne("max"),$b=Ne("min"),vb=v(function(n,e){return a(hn,Bl,p(Fl,a(rm,n,e),n,e))}),fb=function(n){return a(Ne,"step",n)},ou=Ne("type"),cu=Ne("value"),vt=nm,wm=Up,ym=v(function(n,e){switch(e.$){case 0:return Te;case 2:var r=e.a;return oi(r);case 6:var t=e.a;return ii(t);case 5:var i=e.a;return ri(i);case 7:var t=e.a;return jl(t);case 8:var t=e.a;return ml(t);case 3:var t=e.a,i=e.b;return a(Qe,t,i);case 4:var o=e.a,c=e.b;return a(hn,o,c);case 9:var l=e.a,u=e.b;return a(sl,l,a(Dl,n,u));case 1:var f=e.a;return dn(a(wm,n,f));default:var d=e.a,s=e.b;return a(yo,d,s)}}),mb=k(function(n,e,r){return a(Fr,$([J(nn),vn(a(fn,nn,r)),Ar]),$([a(gn,$([J(vt(In(n*1e4)))]),le),a(gn,a(x,Ar,a(W,ym(qa),e)),le),a(gn,$([J(vt(In(sn(1-n)*1e4)))]),le)]))}),sb=k(function(n,e,r){return a(Un,$([vn(nn),J(a(fn,nn,r)),wo]),$([a(gn,$([vn(vt(In(sn(1-n)*1e4)))]),le),a(gn,a(x,wo,a(W,ym(qa),e)),le),a(gn,$([vn(vt(In(n*1e4)))]),le)]))}),Sm=v(function(n,e){var r=Am(n),t=bm(n),i=function(){var S=M(r,t);n:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break n}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var w=S.a.a.a,C=S.b.a.a;return on(C,w)>0;case 2:return!0;default:break n}else break n;return!1}(),o=(e.cO-e.cx)/(e.cw-e.cx),c=e.iy,l=c,u=bm(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return T(S)+"px"}(),d=Am(l),s=function(){if(d.$===1)return"20px";if(d.a.$)return"100%";var S=d.a.a;return T(S)+"px"}(),g="thmb-"+(s+("-"+f)),m=$([a(cn,"width",s),a(cn,"height",f)]),A=a(lb,n,M(5,5)),_=A.a,y=A.b;return p(Ql,$([Ul(e.c8)?Te:a(vb,_,y),Hl,J(function(){if(r.$===1)return nn;if(r.a.$){var S=r.a;return S}else return Xn}()),vn(function(){if(t.$===1)return Xn;if(t.a.$){var S=t.a;return S}else return Xn}())]),e.c8,a(Fr,$([J(a(fn,nn,r)),vn(a(fn,yn(20),t))]),$([L(Vn,oe,hr("input"),$([Gl(e.c8),a(hn,ob,a(Jt,'input[type="range"].'+(g+"::-moz-range-thumb"),m)),a(hn,_m,a(Jt,'input[type="range"].'+(g+"::-webkit-slider-thumb"),m)),a(hn,cb,a(Jt,'input[type="range"].'+(g+"::-ms-thumb"),m)),dn(De(g+" ui-slide-bar focusable-parent")),dn(iu(function(S){var w=Hv(S);if(w.$===1)return e.fb(0);var C=w.a;return e.fb(C)})),dn(ou("range")),dn(fb(function(){var S=e.cL;if(S.$===1)return"any";var w=S.a;return tn(w)}())),dn($b(tn(e.cx))),dn(ub(tn(e.cw))),dn(cu(tn(e.cO))),i?dn(a(_o,"orient","vertical")):Te,J(i?a(fn,yn(20),t):a(fn,nn,r)),vn(i?a(fn,nn,r):a(fn,yn(20),t))]),En(z)),a(gn,a(x,J(a(fn,nn,r)),a(x,vn(a(fn,yn(20),t)),N(n,$([Mo(i?p(sb,o,a(x,Fn("focusable-thumb"),l),r):p(mb,o,a(x,Fn("focusable-thumb"),l),t))])))),le)])))}),db=p(ta,.5,.5,.5),xm=Yn,Mm=function(n){var e=n.c9,r=n.cO,t=n.cx,i=n.cw,o=n.cL,c=n.fb;return a(gn,$([J(nn)]),a(Sm,$([Kn(2),Mo(a(gn,$([J(nn),vn(yn(16)),Ar,ce(gm),Ue(4)]),le))]),{c8:a(tb,z,a(Fr,$([J(nn)]),$([a(gn,$([rb]),he(e)),a(gn,$([J(nn),hm,ui($([$i]))]),he(tn(r)))]))),cw:i,cx:t,fb:c,cL:j(o),iy:xm($([J(yn(12)),vn(yn(12)),Ue(4),$t(0),ar(db),ce(ab)])),cO:r}))},lu=v(function(n,e){if(e.$)return n;var r=e.a;return r}),pb=v(function(n,e){switch(e.$){case 3:var r=e.a;return a($m,z,{gr:r,g7:sm,c8:a(q2,z,he(n)),fb:a2(n)});case 0:var t=e.a,i=t.a,o=t.b,r=e.b;return Mm({c9:n,cw:o,cx:i,fb:i2(n),cL:.001*(o-i),cO:r});case 1:var c=e.a,i=c.a,o=c.b,r=e.b;return Mm({c9:n,cw:o,cx:i,fb:a(xn,In,o2(n)),cL:1,cO:r});default:var r=e.a;return a(gn,$([J(nn)]),Zr(a(Xr,z,$([a(Xr,$([a(Sn,"margin-bottom","6px")]),$([a(O2,$([P2(n)]),$([rr(n)]))])),a(J2,$([ou("color"),a(Sn,"width","100%"),a(Sn,"height","26px"),a(Sn,"padding","0px"),U2(n),Y2(n),iu(function(l){return a(t2,n,a(lu,Wl,G2(l)))}),cu(p2(r))]),z)]))))}}),Co=p(pe,255,255,255),hb=function(n){return a(Un,$([J(nn),Kn(8),a(ti,0,14),li({b8:1,eB:0,fs:0,cN:0}),ar(Ao)]),$([a(gn,$([br(16),Rl,Me(Co)]),he(n.hw)),a(Un,$([J(nn),Kn(6)]),r2(a(Nl,pb,n.aQ)))]))},gb=function(n){return a(Un,$([J(nn),vn(nn),Me(ut),br(12),e2,ai]),a(W,hb,n))},bb=n2(gb),Ab=function(n){return a(Un,$([J(nn),vn(nn)]),$([a(Fr,$([Kn(14),J(nn)]),z),a(El,Y3,bb(Sa(n).gx))]))},_b=function(n){return{$:6,a:n}},wb=U(function(n,e,r,t){return"pad-"+(T(n)+("-"+(T(e)+("-"+(T(r)+("-"+T(t)))))))}),Cm=function(n){var e=n.cN,r=n.fs,t=n.b8,i=n.eB;if(Z(e,r)&&Z(e,t)&&Z(e,i)){var o=e;return a(hn,ka,D(za,"p-"+T(e),o,o,o,o))}else return a(hn,ka,D(za,L(wb,e,r,t,i),e,r,t,i))},yb=function(n){return{$:0,a:n}},Sb=function(n){return{$:1,a:n}},Pm=Sb,xb=function(n){var e=n.b._;return vr(e)},Po=p(pe,255,60,0),Mb=function(n){var e=n.b._;n.b.p;var r=n.b.aq;return vr(e)+1+vr(r)},Cb=function(n){var e=M(xb(n),Mb(n)-1),r=e.a,t=e.b;return a(gn,$([J(nn),Ar]),a(Sm,$([Mo(a(Fr,$([J(nn),vn(yn(4)),Ar,ce(gm),Ue(2)]),$([a(gn,$([J(vt(r)),vn(nn),ce(Po),Ue(2)]),le),a(gn,$([J(vt(t-r))]),le)])))]),{c8:Pm(""),cw:t,cx:0,fb:a(xn,In,yb),cL:j(1),iy:xm($([J(yn(12)),vn(yn(12)),Ue(6),ce(Po)])),cO:r}))},Lm=ii(2),Lo=p(pe,220,220,220),Pb=function(n){var e=n.a,r=function(){return e.$?$([Me(Lo)]):$([Me(Po)])}();return a(gn,N(r,$([br(14),Lm,hm,ui($([$i]))])),he(a(qv,3,Sa(n).aa)))},Lb=function(n){n.a;var e=n.b._;return a(Tn,function(r){return In(60/(Sa(n).aa-r))},a(Tn,a(xn,Yi,function(r){return r.aa}),ia(a(ol,59,e))))},zb=function(n){var e=Lb(n);if(e.$===1)return le;var r=e.a;return a(gn,$([br(14),Me(ut),ui($([$i]))]),he(T(r)+" FPS"))},zm={$:1},kb={$:3},Tb={$:2},Db={$:8},Eb=ur,km=v(function(n,e){return a(Rc,n,Eb(e))}),Ib=km("disabled"),uu=function(n){if(n.$===4&&n.b.$===11&&!n.b.a){var e=n.b;return e.a,!0}else return!1},jb=function(n){return a(Dr,uu,n)?Te:Fn("focusable")},vi=a(sr,dn,im),$u=v(function(n,e){var r=e.hB,t=e.c8;return L(Vn,oe,ye,a(x,J(Xn),a(x,vn(Xn),a(x,Fn(h.cg+(" "+(h.aA+(" "+(h.h_+(" "+h.e9)))))),a(x,Br,a(x,jb(n),a(x,oi(Db),a(x,dn(um(0)),function(){if(r.$===1)return a(x,dn(Ib(!0)),n);var i=r.a;return a(x,vi(i),a(x,om(function(o){return Z(o,tm)||Z(o,lm)?j(i):B}),n))}()))))))),En($([t])))}),Tm=v(function(n,e){return a($u,z,{c8:a(gn,$([J(yn(36)),tr(3),Me(e),fm,br(12),Rl,ar(e),$t(1),Ue(4)]),he("REC")),hB:j(n)})}),Dm=k(function(n,e,r){return a($u,z,{c8:Zr(p(ot,20,r,n)),hB:j(e)})}),Fb=function(n){var e=n.a;n.b._,n.b.p;var r=n.b.aq;return a(Fr,z,$([a(gn,$([J(yn(40))]),function(){switch(e.$){case 0:return a(Tm,zm,Po);case 1:return a(Tm,Tb,Lo);default:return le}}()),a(gn,$([J(yn(28))]),function(){switch(e.$){case 0:return le;case 1:return Er(r)?le:p(Dm,La.hL,kb,Lo);default:return p(Dm,La.hJ,zm,Lo)}}())]))},Bb=function(n){return a(Un,$([J(nn)]),$([Cb(n),a(Fr,$([J(nn),Kn(14),a(ti,0,6),Ar]),$([Fb(n),zb(n),Pb(n)]))]))},Vb=function(n){return a(Un,$([J(nn),Kn(14),Cm({b8:20,eB:0,fs:0,cN:0}),li({b8:1,eB:0,fs:0,cN:0}),ar(Ao)]),$([a(gn,$([br(16),Rl,Me(ut)]),he("Time Travel")),a(El,_b,Bb(n))]))},Rb=v(function(n,e){return a(Un,$([Sa(e).cI.iK>600?ce(O3):ce(q3),li({b8:0,eB:0,fs:1,cN:0}),ar(Ao),J(yn(ct.da)),vn(nn)]),$([function(){return n?le:a(Un,$([J(nn),vn(nn),tr(14),Kn(14)]),$([Vb(e),Ab(e)]))}()]))}),Nb=function(n){return{$:3,a:n}},Em=ri(2),Wb=p(pe,232,78,50),Hb=p(pe,48,48,48),Qb=function(n){return a(Ne,"href",Gp(n))},Gb=Ke("rel"),Ub=Ne("target"),Im=v(function(n,e){var r=e.fG,t=e.c8;return L(Vn,oe,hr("a"),a(x,dn(Qb(r)),a(x,dn(Gb("noopener noreferrer")),a(x,dn(Ub("_blank")),a(x,J(Xn),a(x,vn(Xn),a(x,Fn(h.cg+(" "+(h.aA+(" "+h.eJ)))),n)))))),En($([t])))}),fi=Ne("title"),Jb=p(pe,31,161,242),Ob=function(n){var e=k(function(o,c,l){var u=Z(c,n)?Co:Hb;return a(gn,$([ke(fi(o)),vi(Nb(c)),Br,tr(7)]),Zr(p(ot,40,u,l)))}),r=a(Un,$([Il]),$([p(e,"Configurations",0,La.h5)])),t=a(Un,z,$([a(Im,$([ke(fi("Twitter")),Em,Br,tr(7)]),{c8:Zr(p(ot,40,Jb,La.iD)),fG:"https://twitter.com/AzizErkalSelman"}),a(Im,$([ke(fi("Source Code")),Em,Br,tr(7)]),{c8:Zr(p(ot,40,Wb,La.gW)),fG:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(gn,$([J(yn(ct.bI)),tr(4),vi(Xf),li({b8:1,eB:0,fs:0,cN:0}),ar(Ao),Br,ke(fi("Activate Distraction Free Mode"))]),Zr(p(ot,46,Co,La.fR)));return a(Un,$([J(yn(ct.bI)),vn(nn),ai,ce(it)]),$([i,r,t]))},qb=function(n){var e=a(gn,$([J(yn(ct.bI)),Il,tr(4),vi(Xf),Br,ke(fi("Deactivate Distraction Free Mode (A)"))]),Zr(p(ot,46,it,La.fR)));return n.bA?e:a(Fr,$([J(yn(ct.bI+ct.da)),vn(nn)]),$([Ob(n.bs),a(Rb,n.bs,n.U)]))},Yb=k(function(n,e,r){var t=Pg(r.U),i=Sa(r.U);return p(D3,{hG:$([zg({f7:B,gf:B,h$:B})])},$([J(yn(It(i.cI.iK))),vn(yn(It(i.cI.g2))),ke(a(Sn,"-webkit-font-smoothing","antialiased")),ke(a(Sn,"pointer-events","none")),ke(a(Sn,"touch-action","none")),ke(a(Sn,"user-select","none")),lo(a(El,Mg,a(e,i,t))),lo(qb(r))]),Zr(a(E3,co(Cg),a(n,i,t))))}),Zb=we(function(n,e,r,t,i,o){var c=v(function(u,f){return M(L(Ag,e,o,u,f),nf)}),l=function(u){var f=a(kv,r,u.hj);return M({bs:0,bA:!0,U:a(_g,f,t),dZ:0},nf)};return Hh({hd:l,$8:xg,iF:c,iH:a(Yb,n,i)})}),zo={$:0},jm=mp,Fm=Hn(function(n,e,r,t,i){return{ea:i,eE:r,cr:t,dD:n,fi:e}}),mi=v(function(n,e){return{$:0,a:n,b:e}}),Bm=rp,vu=p(Ft,v(function(n,e){return M(n,e)}),a(R,"A1",Bm),a(R,"A2",Bm)),ir=v(function(n,e){return{$:0,a:n,b:e}}),Xb=function(){var n=function(e){switch(e){case"X":return Gn(0);case"Y":return Gn(1);case"Z":return Gn(2);default:var r=e;return ql("Unknown constructor for type Axis: "+r)}};return a(O,n,Yr)}(),Kb=function(){var n=function(e){switch(e){case"Positive":return Gn(0);case"Negative":return Gn(1);default:var r=e;return ql("Unknown constructor for type Sign: "+r)}};return a(O,n,Yr)}(),nA=p(Ft,ir,a(R,"A1",Xb),a(R,"A2",Kb)),Vm=p(Ft,mi,a(R,"A1",vu),a(R,"A2",nA)),_r=v(function(n,e){return{hn:n,bN:e}}),fu=p(Ft,_r,a(R,"last",vu),a(R,"rest",qr(vu))),eA=fp,Rm=On(eA,Fm,a(R,"playerCube",Vm),a(R,"playerPath",fu),a(R,"levelEditingCube",Vm),a(R,"levelEditingPath",fu),a(R,"calculatedSolutions",qr(fu))),rA=vp,Nm=function(n){var e=k(function(r,t,i){return{s:i,m:r,p:t}});return L(rA,e,a(R,"before",qr(n)),a(R,"current",n),a(R,"after",qr(n)))},Wm=D(Fm,a(mi,M(0,0),a(ir,2,0)),a(_r,M(0,0),z),a(mi,M(0,0),a(ir,2,0)),a(_r,M(0,0),z),z),aA=`
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
`,tA=function(n){return{s:z,m:z,p:n}},iA=a(lu,tA(Wm),a(jm,Nm(Rm),aA)),oA={c4:!1,c5:"",c6:"",e8:B,dP:0},ko={$:0},cA=ko,lA=function(n){return{bw:M(0,0),q:oA,a:iA,dP:zo,bS:cA}},Ta=v(function(n,e){return M(n,Nv(e))}),uA=k(function(n,e,r){return{aQ:r,hk:e,hw:n}}),$A=function(n){return p(jn,v(function(e,r){var t=e.a,i=e.b;return p(Za,t,i,r)}),pl,n)},vA=k(function(n,e,r){return p(uA,n,e,$A(r))}),mu=vA,ca=k(function(n,e,r){var t=e.a,i=e.b;return M(n,a(Wv,M(t,i),r))}),su=function(n){return n/255},Da=k(function(n,e,r){return L(aa,su(n),su(e),su(r),1)}),fA=$([p(mu,"Camera",!0,$([p(ca,"camera distance",M(3,60),20),p(ca,"camera azimuth",M(-Ge,Ge),0),p(ca,"camera elevation",M(-Ge/2,Ge/2),-.15)])),p(mu,"Parameters",!0,$([p(ca,"cubes side length",M(.5,1),.95),p(ca,"duration of step animation",M(.1,1),.23),p(ca,"duration of mistake animation",M(.1,1),.5),p(ca,"height of following lights",M(.1,8),5)])),p(mu,"Colors and light",!0,$([p(ca,"lumens of following lights",M(4e4,12e4),1e5),a(Ta,"background color",p(Da,223,224,226)),a(Ta,"color 1",p(Da,244,88,67)),a(Ta,"color 2",p(Da,255,200,40)),a(Ta,"path color",p(Da,244,88,67)),a(Ta,"board color",p(Da,200,170,170)),a(Ta,"finish mark color",p(Da,150,215,106)),a(Ta,"wall color",p(Da,38,48,64))]))]),ve=function(n){var e=n;return e.p},mA=function(n){return{$:1,a:n}},To=we(function(n,e,r,t,i,o){var c=o.dP;return c.$?o:V(o,{dP:mA({dp:i,bP:r,cK:e,au:n.aa,fP:t})})}),sA={$:1},dA={$:0},du=function(n){return{$:2,a:n}},Hm=v(function(n,e){return a(Dr,function(r){return Z(r,n)},e)}),Do=v(function(n,e){var r=e.hn,t=e.bN;return a(Hm,n,a(x,r,t))}),pu=function(n){return Z(n,a(ir,2,0))},Eo=v(function(n,e){var r=e.a,t=e.b;switch(n){case 0:return M(r,t+1);case 1:return M(r,t-1);case 2:return M(r-1,t);default:return M(r+1,t)}}),Qm=function(n){return n?0:1},Io=function(n){var e=n.a,r=n.b;switch(e){case 0:return a(ir,e,r);case 1:return a(ir,2,r);default:return a(ir,1,Qm(r))}},jo=function(n){var e=n.a,r=n.b;switch(e){case 0:return a(ir,2,Qm(r));case 1:return a(ir,e,r);default:return a(ir,0,r)}},pA=function(n){switch(n){case 0:return a(xn,Io,a(xn,Io,Io));case 1:return Io;case 2:return a(xn,jo,a(xn,jo,jo));default:return jo}},Gm=v(function(n,e){var r=e.a,t=e.b;return a(mi,a(Eo,n,r),a(pA,n,t))}),hA=v(function(n,e){var r=a(Gm,n,e.eE),t=r.a,i=e.eE,o=i.b,c=e.cr.bN;if(c.b){var l=c.a,u=c.b;return Z(l,t)?du(V(e,{eE:r,cr:a(_r,l,u)})):pu(o)?dA:a(Do,t,e.cr)?sA:du(V(e,{eE:r,cr:a(_r,t,a(x,e.cr.hn,a(x,l,u)))}))}else return du(V(e,{eE:r,cr:a(_r,t,$([e.cr.hn]))}))}),gA=U(function(n,e,r,t){var i=a(hA,n,ve(t.a));switch(i.$){case 0:return t;case 1:return t;default:var o=i.a;return On(To,r,e,n,!1,o,t)}}),bA=function(n){return{$:2,a:n}},Um=Hn(function(n,e,r,t,i){var o=i.dP;return o.$?i:V(i,{dP:bA({bP:t,cK:r,au:n.aa,dY:e})})}),AA=function(n){return{$:3,a:n}},_A=function(n){return{$:1,a:n}},Jm=function(n){return{$:2,a:n}},si=function(n){return{$:0,a:n}},Fo=function(n){var e=n.bN;return 1+vr(e)},Om=v(function(n,e){var r=a(Gm,n,e.dD),t=r.a,i=r.b,o=e.fi.bN;if(o.b){var c=o.a,l=o.b;if(Z(c,t))return _A(V(e,{dD:r,fi:a(_r,c,l)}));if(a(Do,t,e.cr)){if(a(Do,t,e.fi))return si(3);var u=V(e,{dD:r,fi:a(_r,t,a(x,e.fi.hn,a(x,c,l)))});return Z(t,e.cr.hn)?Z(Fo(u.fi),Fo(u.cr))&&pu(i)?AA(u):si(0):pu(i)?si(1):Jm(u)}else return si(2)}else return a(Do,t,e.cr)?Jm(V(e,{dD:r,fi:a(_r,t,$([e.fi.hn]))})):si(2)}),wA=U(function(n,e,r,t){var i=a(Om,n,ve(t.a));switch(i.$){case 0:switch(i.a){case 3:return i.a,t;case 2:return i.a,t;case 1:return i.a,D(Um,r,1,e,n,t);default:return i.a,D(Um,r,0,e,n,t)}case 2:var o=i.a;return On(To,r,e,n,!1,o,t);case 1:var o=i.a;return On(To,r,e,n,!1,o,t);default:var o=i.a;return On(To,r,e,n,!0,o,t)}}),qm=function(n){var e=n.a;return e},yA=function(n){var e=$([n.dW,n.c0,n.eB,n.fs]);n:for(;;)if(e.b)if(e.a)if(e.b.b&&!e.b.a&&e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var r=e.b,t=r.b;return t.b,j(0)}else break n;else if(e.b.b)if(e.b.a)if(e.b.b.b&&!e.b.b.a&&e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var i=e.b,o=i.b;return o.b,j(1)}else break n;else if(e.b.b.b)if(e.b.b.a)if(e.b.b.b.b&&!e.b.b.b.a&&!e.b.b.b.b.b){var c=e.b,l=c.b;return l.b,j(2)}else break n;else if(e.b.b.b.b&&e.b.b.b.a&&!e.b.b.b.b.b){var u=e.b,f=u.b;return f.b,j(3)}else break n;else break n;else break n;else break n;return B},di=function(n){return{$:2,a:n}},SA=qi(di(3)),xA=qi(di(0)),MA=qi(di(1)),CA=qi(di(2)),PA=function(n){return CA(n)?j(0):SA(n)?j(1):xA(n)?j(2):MA(n)?j(3):B},LA=v(function(n,e){var r=M(PA(e.bS),yA(n.eA));if(r.a.$){if(r.b.$)return B;var i=r.b.a;return j(i)}else{var t=r.a.a;return j(t)}}),zA={$:3},kA=v(function(n,e){return a(Tn,function(r){if(r.$)return 0;var t=r.b;return t},a(Nt,n,e.aQ))}),TA=v(function(n,e){return a(fn,0,ia(a(We,kA(n),e)))}),DA=v(function(n,e){return a(TA,n,e.gx)}),ne=DA,EA=v(function(n,e){var r=e;return V(r,{p:n})}),IA=v(function(n,e){var r=e.dP;switch(r.$){case 1:var t=r.a.au,i=r.a.dp,o=r.a.fP;return on(n.aa-t,a(ne,"duration of step animation",n))>0?V(e,{a:a(EA,i,e.a),dP:o?zA:zo}):e;case 2:var t=r.a.au;return on(n.aa-t,a(ne,"duration of mistake animation",n))>0?V(e,{dP:zo}):e;default:return e}}),ft=function(n){var e=n.hn,r=n.bN;return a(x,e,r)},jA=function(n){var e=ft(n.cr),r={e$:a(fn,0,Sl(a(W,a(xn,Yi,Tr),e))),e0:a(fn,0,Sl(a(W,a(xn,ef,Tr),e))),e2:a(fn,0,fo(a(W,a(xn,Yi,Tr),e))),e3:a(fn,0,fo(a(W,a(xn,ef,Tr),e)))},t=r.e2,i=r.e$,o=r.e3,c=r.e0;return{iM:.5*(t+i),iQ:.5*(o+c)}},Je=function(n){return n},mt=function(n){return Je(Ge*(n/180))},hu=function(n){return n},Ce=function(n){return n},Bo=function(n){var e=n;return-e},FA=v(function(n,e){var r=n,t=e;return{iM:r.iQ*t.d4-r.d4*t.iQ,iQ:r.d4*t.iM-r.iM*t.d4,d4:r.iM*t.iQ-r.iQ*t.iM}}),Ym=function(n){var e=n;return e.d2},Zm=function(n){var e=n;return e.d3},BA=function(n){return a(FA,Ym(n),Zm(n))},Ea=function(n){var e=n;return e.dt},Ia=S1,ja=x1,Vo=k(function(n,e,r){var t=n,i=e,o=r,c=.5*i,l=Ia(c),u=ja(c),f=t.gI,d=f,s=d.iM*u,g=l*s,m=s*s,A=d.iQ*u,_=l*A,y=s*A,S=A*A,w=1-2*(m+S),C=d.d4*u,F=l*C,q=2*(y-F),en=2*(y+F),Y=s*C,X=2*(Y+_),K=2*(Y-_),Q=A*C,ln=2*(Q-g),bn=2*(Q+g),zn=C*C,An=1-2*(S+zn),_n=1-2*(m+zn);return{iM:An*o.iM+q*o.iQ+X*o.d4,iQ:en*o.iM+_n*o.iQ+ln*o.d4,d4:K*o.iM+bn*o.iQ+w*o.d4}}),pi=k(function(n,e,r){var t=n,i=e,o=r,c=.5*i,l=Ia(c),u=ja(c),f=t.dt,d=f,s=o.iM-d.iM,g=o.iQ-d.iQ,m=o.d4-d.d4,A=t.gI,_=A,y=_.iM*u,S=l*y,w=y*y,C=_.iQ*u,F=l*C,q=y*C,en=C*C,Y=1-2*(w+en),X=_.d4*u,K=l*X,Q=2*(q-K),ln=2*(q+K),bn=y*X,zn=2*(bn+F),An=2*(bn-F),_n=C*X,Dn=2*(_n-S),wn=2*(_n+S),Jn=X*X,Wn=1-2*(en+Jn),fe=1-2*(w+Jn);return{iM:d.iM+Wn*s+Q*g+zn*m,iQ:d.iQ+ln*s+fe*g+Dn*m,d4:d.d4+An*s+wn*g+Y*m}}),Vr=function(n){return n},la=function(n){var e=n;return e.d2},ua=function(n){var e=n;return e.d3},$a=function(n){var e=n;return e.d5},Xm=k(function(n,e,r){return Vr({dt:p(pi,n,e,Ea(r)),d2:p(Vo,n,e,la(r)),d3:p(Vo,n,e,ua(r)),d5:p(Vo,n,e,$a(r))})}),Km=k(function(n,e,r){return p(Xm,n(r),e,r)}),Ro=function(n){var e=n;return e.gI},st=v(function(n,e){var r=n,t=e;return{iM:t.iM+r.iM,iQ:t.iQ+r.iQ,d4:t.d4+r.d4}}),ns=v(function(n,e){return Vr({dt:a(st,n,Ea(e)),d2:la(e),d3:ua(e),d5:$a(e)})}),VA=v(function(n,e){var r=n,t=e;return{iM:r*t.iM,iQ:r*t.iQ,d4:r*t.d4}}),RA=k(function(n,e,r){return a(ns,a(VA,e,n),r)}),NA=k(function(n,e,r){return p(RA,Ro(n(r)),e,r)}),Ie=v(function(n,e){return{gI:e,dt:n}}),WA=function(n){var e=n;return a(Ie,e.dt,e.d2)},HA=function(n){var e=n;return a(Ie,e.dt,e.d3)},QA=function(n){var e=n;return a(Ie,e.dt,e.d5)},GA=function(n){var e=Vr({dt:n.bd,d2:Zm(n.eo),d3:BA(n.eo),d5:Ym(n.eo)}),r=p(NA,QA,n.c$,p(Km,WA,Bo(n.ci),p(Km,HA,n.b5,e)));return r},UA=function(n){return{$:0,a:n}},Rn=function(n){var e=n;return sn(e)},No=function(n){var e=n;return .5*e},JA=M1,OA=function(n){var e=n;return JA(e)},qA=function(n){var e=No(Rn(n.fJ)),r=OA(e);return{dG:UA(r),dX:n.dX}},ge={iM:0,iQ:0,d4:0},es=Yn,wr=function(n){return n},rs=wr({iM:1,iQ:0,d4:0}),Wo=rs,gu=wr({iM:0,iQ:0,d4:1}),Ho=gu,YA=es({dt:ge,d2:Ho,d3:Wo}),ZA=function(n){var e=n.bd,r=n.b5,t=n.ci,i=n.c$;return qA({fJ:mt(40),dX:GA({b5:Je(r),c$:Ce(i),ci:Je(t),bd:hu(e),eo:YA})})},as=v(function(n,e){return ZA({b5:a(ne,"camera azimuth",n),c$:a(ne,"camera distance",n),ci:a(ne,"camera elevation",n),bd:function(){var r=jA(ve(e.a));return{iM:r.iM,iQ:r.iQ,d4:0}}()})}),XA=k(function(n,e,r){return{iM:n,iQ:e,d4:r}}),Qo=function(n){return n},Go=function(n){var e=n;return e},KA=v(function(n,e){var r=n,t=e;return t.iM*r.iM+t.iQ*r.iQ+t.d4*r.d4}),Mn=v(function(n,e){var r=e;return n*r}),bu=function(n){var e=n;return e.dt},n_=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=r.hy,l=c;return(t.iM-o.iM)*l.iM+(t.iQ-o.iQ)*l.iQ+(t.d4-o.d4)*l.d4}),e_=k(function(n,e,r){var t=n,i=e,o=r;return{iM:o.iM+i*t.iM,iQ:o.iQ+i*t.iQ,d4:o.d4+i*t.d4}}),r_=v(function(n,e){var r=Ro(e),t=n,i=t.hy,o=a(KA,i,r);if(o){var c=bu(e),l=a(n_,n,c),u=a(Mn,-1/o,l);return j(p(e_,r,u,c))}else return B}),a_=v(function(n,e){return{iM:n,iQ:e}}),ts=v(function(n,e){var r=n,t=e;return r*t}),t_=function(n){var e=n;return e},is=function(n){var e=n;return t_(e.f6)},i_=function(n){var e=n;return e.a7},va=T1,o_=function(n){var e=n,r=a(qn,sn(e.iM),a(qn,sn(e.iQ),sn(e.d4)));if(r){var t=e.d4/r,i=e.iQ/r,o=e.iM/r,c=va(o*o+i*i+t*t);return j({iM:o/c,iQ:i/c,d4:t/c})}else return B},os=v(function(n,e){var r=e;return r/n}),Au=function(n){var e=n;return Ea(e)},_u=wr({iM:0,iQ:0,d4:-1}),c_=v(function(n,e){var r=n,t=e;return t/r}),l_=v(function(n,e){var r=n,t=e,i=r.d5,o=i,c=r.d3,l=c,u=r.d2,f=u;return{iM:f.iM*t.iM+l.iM*t.iQ+o.iM*t.d4,iQ:f.iQ*t.iM+l.iQ*t.iQ+o.iQ*t.d4,d4:f.d4*t.iM+l.d4*t.iQ+o.d4*t.d4}}),fa=function(n){var e=n;return{iM:-e.iM,iQ:-e.iQ,d4:-e.d4}},wu=function(n){var e=n;return fa($a(e))},u_=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=r.d2,l=c;return(t.iM-o.iM)*l.iM+(t.iQ-o.iQ)*l.iQ}),yu=k(function(n,e,r){var t=n,i=e,o=r;return{iM:t,iQ:i,d4:o}}),$_=U(function(n,e,r,t){var i=n,o=e,c=r,l=t,u=i.dt,f=u,d=i.d5,s=d,g=i.d3,m=g,A=i.d2,_=A;return{iM:f.iM+o*_.iM+c*m.iM+l*s.iM,iQ:f.iQ+o*_.iQ+c*m.iQ+l*s.iQ,d4:f.d4+o*_.d4+c*m.d4+l*s.d4}}),v_=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=r.d3,l=c;return(t.iM-o.iM)*l.iM+(t.iQ-o.iQ)*l.iQ}),Rr=0,f_=k(function(n,e,r){var t=n,i=a(v_,is(e),r),o=a(u_,is(e),r),c=t.dX,l=c,u=i_(e);u.a;var f=u.b,d=t.dG;if(d.$){var A=d.a,_=a(c_,f,A),y=L($_,l,a(ts,_,o),a(ts,_,i),Rr);return a(Ie,y,wu(t.dX))}else{var s=d.a,g=Bo(a(os,s,a(Mn,.5,f))),m=a(l_,l,a(fn,_u,o_(p(yu,o,i,g))));return a(Ie,Au(t.dX),m)}}),Su=function(n){var e=n;return{iM:Ia(e),iQ:ja(e)}},m_=function(n){var e=n;return{iM:-e.iQ,iQ:e.iM}},s_=function(n){return n},d_=v(function(n,e){return s_({dt:e,d2:n,d3:m_(n)})}),p_=v(function(n,e){return a(d_,Su(n),e)}),h_=k(function(n,e,r){var t=n.a,i=n.b;return{f6:a(p_,e,r),a7:M(Rn(t),Rn(i))}}),ma=function(n){var e=n;return e.iM},g_=v(function(n,e){var r=n,t=e;return{iM:r,iQ:t}}),sa=function(n){var e=n;return e.iQ},da=function(n){var e=n;return e.d4},b_=U(function(n,e,r,t){var i=r.iM,o=r.iQ,c=function(f){return p(XA,Go(ma(f)),Go(sa(f)),Go(da(f)))},l=p(h_,M(Qo(e.iK),Qo(e.g2)),mt(0),a(a_,0,0)),u=a(g_,Qo(i),Qo(o));return a(Tn,c,a(r_,t,p(f_,n,l,u)))}),A_=v(function(n,e){return{hy:n,dt:e}}),__=v(function(n,e){var r=e;return a(A_,r.hy,a(st,n,r.dt))}),w_=v(function(n,e){return{hy:e,dt:n}}),y_=a(w_,ge,Ho),S_=U(function(n,e,r,t){return L(b_,e,r,t,a(__,p(yu,Ce(0),Ce(0),Ce(n)),y_))}),x_=S_(0),M_=v(function(n,e){return V(e,{bw:a(fn,e.bw,a(Tn,function(r){var t=r.iM,i=r.iQ;return M(In(t),In(i))},p(x_,a(as,n,e),n.cI,n.dE)))})}),C_=function(n){return n.$===2?ko:n},P_=v(function(n,e){return n.dE.ex?e:ko}),L_=v(function(n,e){return va(a(oa,n.iM-e.iM,2)+a(oa,n.iQ-e.iQ,2))}),z_=k(function(n,e,r){var t=M(e,r),i=t.a,o=t.b;return on(a(L_,i,o),n)<0?B:on(o.iM-i.iM,sn(o.iQ-i.iQ))>0?j(1):on(i.iM-o.iM,sn(o.iQ-i.iQ))>0?j(0):on(o.iQ-i.iQ,sn(o.iM-i.iM))>0?j(2):j(3)}),cs=function(n){return{iM:n.dE.iM,iQ:n.dE.iQ}},k_=k(function(n,e,r){var t=e.ix,i=M(r,n.dE.ex);if(i.a.$===1&&i.b){var o=i.a.a,c=p(z_,t,o,cs(n));if(c.$)return r;var l=c.a;return di(l)}else return r}),T_=function(n){return{$:1,a:n}},D_=v(function(n,e){return e.$===1?e:n.dE.ex?T_(cs(n)):ko}),E_=k(function(n,e,r){return p(k_,n,e,a(P_,n,a(D_,n,C_(r))))}),I_=v(function(n,e){return V(e,{bS:p(E_,n,{ix:20},e.bS)})}),j_=v(function(n,e){var r=ve(e.a).dD,t=ve(e.a).eE,i=function(){var o=a(LA,n,e);if(o.$===1)return Yn;var c=o.a;return e.q.c4?p(gA,c,qm(t),n):p(wA,c,qm(r),n)}();return a(IA,n,i(a(M_,n,a(I_,n,e))))}),F_=v(function(n,e){var r=e;return V(r,{m:a(x,r.p,r.m),p:n})}),ls=k(function(n,e,r){n:for(;;){if(r.$===-2)return e;var t=r.b,i=r.c,o=r.d,c=r.e,l=n,u=p(n,t,i,p(ls,n,e,o)),f=c;n=l,e=u,r=f;continue n}}),B_=v(function(n,e){return p(ls,k(function(r,t,i){return a(Kv,r,i)}),n,e)}),V_=v(function(n,e){var r=n,t=e;return a(B_,r,t)}),us=function(n){return p(jn,gl,uo,n)},R_=v(function(n,e){return a(Ca,function(r){return a(bl,r,n)},a(W,function(r){return a(Eo,r,e)},$([0,1,2,3])))}),N_=v(function(n,e){var r=v(function(t,i){n:for(;;)if(i.b){var o=i.a,c=i.b,l=a(Ca,function(d){return!(a(Hm,d,i)||a(bl,d,t))},a(R_,e,o)),u=a(gl,o,t),f=N(c,l);t=u,i=f;continue n}else return t});return a(r,uo,$([n]))}),$s=v(function(n,e){n:for(;;){if(e.$===-2)return n;var r=e.d,t=e.e,i=a($s,n+1,t),o=r;n=i,e=o;continue n}}),W_=function(n){return a($s,0,n)},vs=function(n){var e=n;return W_(e)},H_=function(n){var e=vs(n);return a(fn,!1,a(Tn,function(r){return on(vs(a(N_,r,n)),e)<0},ia(dh(n))))},Q_=function(n){return H_(a(V_,us(ft(n.cr)),us(ft(n.fi))))},G_=function(n){var e=n.hn,r=n.bN;return a(fn,e,ia(kn(r)))},xu=function(n){var e=G_(n.cr);return V(n,{dD:a(mi,e,a(ir,2,0)),fi:a(_r,e,z)})},U_=function(n){var e=v(function(r,t){n:for(;;){if(Er(t))return r;var i=N(r,t),o=a(Kr,function(c){return Q_(c)?z:a(We,function(l){var u=a(Om,l,c);switch(u.$){case 0:return B;case 1:return B;case 2:var f=u.a;return j(f);default:var f=u.a;return j(f)}},$([0,1,2,3]))},t);r=i,t=o;continue n}});return a(Ca,function(r){return Z(Fo(r),Fo(n.cr))},a(W,function(r){return r.fi},a(e,z,$([xu(n)]))))},J_=v(function(n,e){var r=e;return Ma($([M("before",a(qt,n,r.m)),M("current",n(r.p)),M("after",a(qt,n,r.s))]))}),fs=ur,Mu=function(n){var e=n.a,r=n.b;return Ma($([M("A1",fs(e)),M("A2",fs(r))]))},O_=function(n){return Qt(function(){switch(n){case 0:return"X";case 1:return"Y";default:return"Z"}}())},q_=function(n){return Qt(function(){return n?"Negative":"Positive"}())},Y_=function(n){var e=n.a,r=n.b;return Ma($([M("A1",O_(e)),M("A2",q_(r))]))},ms=function(n){var e=n.a,r=n.b;return Ma($([M("A1",Mu(e)),M("A2",Y_(r))]))},Cu=function(n){return Ma($([M("last",Mu(n.hn)),M("rest",a(qt,Mu,n.bN))]))},Z_=function(n){return Ma($([M("playerCube",ms(n.dD)),M("playerPath",Cu(n.fi)),M("levelEditingCube",ms(n.eE)),M("levelEditingPath",Cu(n.cr)),M("calculatedSolutions",a(qt,Cu,n.ea))]))},X_=v(function(n,e){return V(e,{c5:a(wv,2,a(J_,a(xn,xu,Z_),n))})}),ss=function(n){var e=n;return N(kn(e.m),N($([e.p]),e.s))},K_=v(function(n,e){var r=e,t=ss(r),i=a(ci,vr(t)+1,n),o=a(ol,i-1,t);if(o.b){var c=o.a,l=o.b;return{s:l,m:kn(a(Rv,i-1,t)),p:c}}else return r}),n4=function(n){var e=n,r=e.s;if(r.b){var t=r.a,i=r.b;return j({s:i,m:a(x,e.p,e.m),p:t})}else return B},e4=function(n){var e=n,r=e.m;if(r.b){var t=r.a,i=r.b;return j({s:a(x,e.p,e.s),m:i,p:t})}else return B},r4=v(function(n,e){var r=e;return{s:a(W,n,r.s),m:a(W,n,r.m),p:n(r.p)}}),a4=v(function(n,e){var r=e;return V(r,{p:n(r.p)})}),t4=function(n){var e=n,r=e.s;if(r.b){var t=r.a,i=r.b;return V(e,{s:i,m:a(x,t,e.m)})}else return V(e,{s:kn(e.m),m:z})},i4=function(n){var e=n,r=e.m;if(r.b){var t=r.a,i=r.b;return V(e,{m:i,p:t})}else{var o=e.s;if(o.b){var t=o.a,i=o.b;return V(e,{s:i,p:t})}else return e}},o4=v(function(n,e){return V(e,{c6:n})}),c4=v(function(n,e){return V(e,{c4:n,dP:0})}),l4=k(function(n,e,r){var t=r.q;switch(e.$){case 0:var i=e.a;return V(r,{q:a(c4,i,r.q),a:a(r4,xu,r.a),dP:zo});case 1:return V(r,{a:a(a4,function(u){return V(u,{ea:U_(ve(r.a))})},r.a)});case 2:var o=e.a;return V(r,{q:V(t,{e8:j(o)})});case 3:return V(r,{q:V(t,{e8:B})});case 4:var c=e.a;return V(r,{a:a(K_,c,r.a)});case 5:return V(r,{a:a(fn,r.a,e4(r.a))});case 6:return V(r,{a:a(fn,r.a,n4(r.a))});case 7:return V(r,{a:a(F_,Wm,r.a)});case 8:return V(r,{a:i4(r.a)});case 9:return V(r,{a:t4(r.a)});case 10:return V(r,{q:a(X_,r.a,r.q)});case 11:return V(r,{a:a(lu,r.a,a(jm,Nm(Rm),r.q.c6))});default:var l=e.a;return V(r,{q:a(o4,l,r.q)})}}),Uo=Ve("br"),u4=Ve("h2"),hi=Ve("span"),$4=v(function(n,e){return a(Xr,$([a(Sn,"position","fixed"),a(Sn,"width","100%"),a(Sn,"text-align","center"),a(Sn,"font-size","14px")]),$([a(u4,z,$([rr("The Red-Faced Cube")])),a(Ml,$([a(Sn,"font-weight","bold")]),$([rr("A puzzle from Martin Gardner's book Mathematical Carnival (1975)")])),a(Ml,z,$([a(hi,function(){var r=e.dP;if(r.$===2){r.a.au;var t=r.a.dY;return t?z:$([a(Sn,"background-color","red")])}else return z}(),$([rr(" Visit each cell exactly once.")])),a(Uo,z,z),a(hi,z,$([rr("End with the cube red side up on the (marked) finish cell.")])),a(Uo,z,z),a(hi,function(){var r=e.dP;if(r.$===2){r.a.au;var t=r.a.dY;return t===1?$([a(Sn,"background-color","red")]):z}else return z}(),$([rr("At no time during the tour, however,"),a(Uo,z,z),rr("is the cube allowed to rest with the red side up.")])),a(Uo,z,z),a(hi,z,$([rr("You can roll the cube via swiping or pressing arrow keys.")]))]))]))}),Pu=function(n){return n},Lu=k(function(n,e,r){return on(r,n)<0?n:on(r,e)>0?e:r}),v4=function(n){var e=n;return e},f4=function(n){var e=p(Lu,1667,25e3,v4(n)),r=e<=4e3?-.2661239*1e9/(e*e*e)-.2343589*1e6/(e*e)+.8776956*1e3/e+.17991:-3.0258469*1e9/(e*e*e)+2.1070379*1e6/(e*e)+.2226347*1e3/e+.24039,t=e<=2222?-1.1063814*(r*r*r)-1.3481102*(r*r)+2.18555832*r-.20219683:e<=4e3?-.9549476*(r*r*r)-1.37418593*(r*r)+2.09137015*r-.16748867:3.081758*(r*r*r)-5.8733867*(r*r)+3.75112997*r-.37001483;return Pu({iM:r,iQ:t})},m4=function(n){return n},s4=function(n){return{$:0,a:n}},d4=s4,p4={$:3},h4=p4,g4=U(function(n,e,r,t){return{$:4,a:n,b:e,c:r,d:t}}),b4=g4,A4=function(n){return{$:1,a:n}},_4=A4,w4=function(n){return a(Ke,"height",T(n))},y4=Pf,S4=function(n){return{$:2,a:n}},x4=S4,M4=function(n){var e=n.a,r=n.b,t=n.c,i=n.d,o=function(l){return In(l*1e3)/1e3},c=function(l){return In(l*1e4)/100};return Ka($(["rgba(",tn(c(e)),"%,",tn(c(r)),"%,",tn(c(t)),"%,",tn(o(i)),")"]))},C4=v(function(n,e){switch(e.$){case 0:return a(W0,n,e);case 1:return a(H0,n,e);case 2:return a(Q0,n,e);case 3:return a(G0,n,e);case 4:return a(U0,n,e);default:return a(J0,n,e)}}),P4=v(function(n,e){switch(e.$){case 0:return a(g0,n,e);case 1:return a(b0,n,e);case 2:return a(A0,n,e);case 3:return a(_0,n,e);case 4:return a(w0,n,e);case 5:return a(y0,n,e);case 6:return a(S0,n,e);case 7:return a(x0,n,e);default:return M0(n)}}),L4=k(function(n,e,r){return p(N0,n,e,r)}),ds=function(n){var e=n;return e},dt=th,zu=L(dt,1,1,1,1),yr=k(function(n,e,r){return a(W,function(t){return a(t,e,r)},n)}),z4=k(function(n,e,r){return{$:0,a:n,b:e,c:r}}),k4=v(function(n,e){var r=n,t=e.iM,i=e.iQ;return p(z4,r*t/i,r,r*(1-t-i)/i)}),gi=X0,T4=function(n){var e=n.a,r=n.b,t=n.c;return p(gi,3.2406*e-1.5372*r-.4986*t,-.9689*e+1.8758*r+.0415*t,.0557*e-.204*r+1.057*t)},Jo=v(function(n,e){return T4(a(k4,n,e))}),ps=v(function(n,e){return{ey:Z(n.ey,e.ey),w:n.w*e.w+n.x*e.z+n.y*e.C,x:n.w*e.x+n.x*e.A+n.y*e.D,y:n.w*e.y+n.x*e.B+n.y*e.E,z:n.z*e.w+n.A*e.z+n.B*e.C,A:n.z*e.x+n.A*e.A+n.B*e.D,B:n.z*e.y+n.A*e.B+n.B*e.E,C:n.C*e.w+n.D*e.z+n.E*e.C,D:n.C*e.x+n.D*e.A+n.E*e.D,E:n.C*e.y+n.D*e.B+n.E*e.E,N:e.N+(n.N*e.w+n.O*e.z+n.P*e.C)*e.cH,O:e.O+(n.N*e.x+n.O*e.A+n.P*e.D)*e.cH,P:e.P+(n.N*e.y+n.O*e.B+n.P*e.E)*e.cH,cH:n.cH*e.cH}}),Sr=$h,D4=function(n){return Sr({eK:n.w,eL:n.z,eM:n.C,eN:n.N,eO:n.x,eP:n.A,eQ:n.D,eR:n.O,eS:n.y,eT:n.B,eU:n.E,eV:n.P,eW:0,eX:0,eY:0,eZ:1})},ku=Hn(function(n,e,r,t,i){var o=t.ey?1:-1,c=L(dt,t.cH,t.cH,t.cH,o);return On(i,n,c,D4(t),t.ey,e,r)}),hs=we(function(n,e,r,t,i,o){n:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=n,f=e,d=r,s=a(ps,c,t),g=l,m=o;n=u,e=f,r=d,t=s,i=g,o=m;continue n;case 1:var A=i.b,_=a(x,D(ku,n,e,r,t,A),o.S);return{S:_,ac:o.ac,h0:o.h0};case 3:var y=i.b,S=a(x,D(ku,n,e,r,t,y),o.ac);return{S:o.S,ac:S,h0:o.h0};case 2:var w=i.a,C=a(x,D(ku,n,e,r,t,w),o.h0);return{S:o.S,ac:o.ac,h0:C};default:var F=i.a;return p(jn,L(hs,n,e,r,t),o,F)}}),E4=U(function(n,e,r,t){return{$:4,a:n,b:e,c:r,d:t}}),gs=E4,Tu=U(function(n,e,r,t){return{$:1,a:n,b:e,c:r,d:t}}),I4=function(n){var e=n.al,r=n.af,t=n.ae;return L(Tu,518,e,r,t)},j4=v(function(n,e){return{$:6,a:n,b:e}}),F4=j4,bs=$([I4({ae:1,af:0,al:!1}),L(gs,!1,!1,!1,!1),a(F4,0,1)]),pt=519,Du=8,As=15,ht=7681,B4={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Nn=h0,V4=v(function(n,e){return{$:0,a:n,b:e}}),R4=V4({eg:1,et:0,e6:5}),je=Y0,N4=R4($([{fl:a(je,-1,-1)},{fl:a(je,1,-1)},{fl:a(je,-1,1)},{fl:a(je,1,1)}])),W4={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"fl"},uniforms:{}},H4=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(d){return{$:2,a:n,b:e,c:r,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:d}}}}}}}}}}}},Eu=k(function(n,e,r){var t=n.dH,i=n.dj,o=n.d1,c=v(function(f,d){var s=f;return d(s)}),l=v(function(f,d){var s=f;return d(s)}),u=function(f){return a(xn,c(f.bU),a(xn,l(f.bD),a(xn,l(f.b1),l(f.b2))))};return a(u,r,a(u,e,p(H4,t,i,o)))}),Iu=function(n){return p(Eu,{dj:n.dj,dH:n.dH,d1:n.d1},{bD:n.bD,bU:n.bU,b1:n.b1,b2:n.b2},{bD:n.bD,bU:n.bU,b1:n.b1,b2:n.b2})},ju=function(n){return D(Nn,$([Iu(n),L(gs,!1,!1,!1,!1)]),W4,B4,N4,{})},Q4=ju({bD:ht,dj:0,dH:Du,bU:pt,d1:As,b1:ht,b2:ht}),G4=516,_s=5386,be=7680,U4=function(n){return a(oa,2,n+4)},ws=function(n){return ju({bD:be,dj:As,dH:Du,bU:G4,d1:U4(n),b1:_s,b2:_s})},J4=k(function(n,e,r){return de($([p(yr,n,r,bs),$([ws(e),Q4])]))}),O4=v(function(n,e){return de(a(Et,J4(n),e))}),q4=function(n){var e=n.al,r=n.af,t=n.ae;return L(Tu,513,e,r,t)},Y4=q4({ae:1,af:0,al:!0}),Z4=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:n,b:e,c:r,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},X4=function(n){var e=n.cE,r=n.ck,t=n.b6,i=n.b3,o=n.cc,c=n.f0,l=v(function(u,f){var d=u.a,s=u.b,g=u.c,m=f.a,A=f.b,_=f.c;return Z4(d)(s)(g)(m)(A)(_)(e)(r)(t)(i)});return a(l,o,c)},K4=k(function(n,e,r){return{$:0,a:n,b:e,c:r}}),ys=v(function(n,e){var r=n,t=e;return p(K4,32774,r,t)}),nw=1,Ss=771,ew=770,Fu=X4({b3:0,f0:a(ys,nw,Ss),b6:0,cc:a(ys,ew,Ss),ck:0,cE:0}),gt=$([Y4,Fu]),rw=function(n){var e=n;return e.e$},aw=function(n){var e=n;return e.e0},xs=function(n){var e=n;return e.e1},tw=function(n){var e=n;return e.e2},iw=function(n){var e=n;return e.e3},Ms=function(n){var e=n;return e.e4},Nr=v(function(n,e){var r=n,t=e;return t-r}),Cs=function(n){return I(a(Nr,tw(n),rw(n)),a(Nr,iw(n),aw(n)),a(Nr,Ms(n),xs(n)))},ow=function(n){return n},cw=function(n){return Vr({dt:ow({iM:n.N,iQ:n.O,d4:n.P}),d2:wr({iM:n.w,iQ:n.x,d4:n.y}),d3:wr({iM:n.z,iQ:n.A,d4:n.B}),d5:wr({iM:n.C,iQ:n.D,d4:n.E})})},Bu=v(function(n,e){var r=n,t=e,i=r.d5,o=i,c=r.d3,l=c,u=r.d2,f=u;return{iM:t.iM*f.iM+t.iQ*f.iQ+t.d4*f.d4,iQ:t.iM*l.iM+t.iQ*l.iQ+t.d4*l.d4,d4:t.iM*o.iM+t.iQ*o.iQ+t.d4*o.d4}}),Ps=v(function(n,e){var r=n,t=e,i=r.dt,o=i,c=t.iM-o.iM,l=t.iQ-o.iQ,u=t.d4-o.d4,f=r.d5,d=f,s=r.d3,g=s,m=r.d2,A=m;return{iM:c*A.iM+l*A.iQ+u*A.d4,iQ:c*g.iM+l*g.iQ+u*g.d4,d4:c*d.iM+l*d.iQ+u*d.d4}}),Ls=v(function(n,e){return{dt:a(Ps,n,Ea(e)),d2:a(Bu,n,la(e)),d3:a(Bu,n,ua(e)),d5:a(Bu,n,$a(e))}}),bi=k(function(n,e,r){return{iM:n,iQ:e,d4:r}}),Oo=function(n){var e=n;return e},ee=v(function(n,e){var r=n,t=e;return a(qn,r,t)}),te=v(function(n,e){var r=n,t=e;return a(He,r,t)}),lw=v(function(n,e){var r=Oo(e),t=Oo(n);return{e$:a(ee,t.e$,r.e$),e0:a(ee,t.e0,r.e0),e1:a(ee,t.e1,r.e1),e2:a(te,t.e2,r.e2),e3:a(te,t.e3,r.e3),e4:a(te,t.e4,r.e4)}}),Oe=function(n){var e=n;return e},uw=function(n){var e=n;return I(e.iM,e.iQ,e.d4)},Ai=v(function(n,e){var r=n,t=e;return t+r}),$w=v(function(n,e){var r=n.a,t=n.b,i=n.c,o=No(Rn(t)),c=No(Rn(r)),l=No(Rn(i)),u=uw(e),f=u.a,d=u.b,s=u.c;return{e$:a(Ai,c,f),e0:a(Ai,o,d),e1:a(Ai,l,s),e2:a(Nr,c,f),e3:a(Nr,o,d),e4:a(Nr,l,s)}}),zs=U(function(n,e,r,t){var i=r.gp,o=2*r.g0*e,c=2*r.g$*e,l=2*r.g_*e,u=i.d4*e,f=i.iQ*e,d=i.iM*e,s=Oe($a(n)),g=sn(l*s.iM)+sn(c*s.iQ)+sn(o*s.d4),m=Oe(ua(n)),A=sn(l*m.iM)+sn(c*m.iQ)+sn(o*m.d4),_=Oe(la(n)),y=sn(l*_.iM)+sn(c*_.iQ)+sn(o*_.d4),S=a($w,I(y,A,g),a(Ps,n,p(bi,d,f,u)));if(t.$)return j(S);var w=t.a;return j(a(lw,w,S))}),Vu=U(function(n,e,r,t){n:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var c=n,l=e,u=r,f=o;n=c,e=l,r=u,t=f;continue n;case 1:var d=i.a,s=L(zs,n,e,d,r),c=n,l=e,u=s,f=o;n=c,e=l,r=u,t=f;continue n;case 2:var c=n,l=e,u=r,f=o;n=c,e=l,r=u,t=f;continue n;case 3:var d=i.a,s=L(zs,n,e,d,r),c=n,l=e,u=s,f=o;n=c,e=l,r=u,t=f;continue n;case 4:var g=i.a,c=n,l=e,u=L(Vu,n,e,r,g),f=o;n=c,e=l,r=u,t=f;continue n;default:var m=i.a,A=i.b,_=a(Ls,cw(m),n),y=e*m.cH,c=n,l=e,u=L(Vu,_,y,r,$([A])),f=o;n=c,e=l,r=u,t=f;continue n}}else return r}),Fa=K0,Ba=nh,Va=eh,ks=function(n){return{$:4,a:n}},vw=v(function(n,e){n:for(;;)if(n.b){var r=n.a,t=n.b,i=t,o=a(x,r,e);n=i,e=o;continue n}else return e}),_i=function(n){return ks(a(vw,n,z))},fw={ey:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,N:0,O:0,P:0,cH:1},Ts=ju({bD:ht,dj:0,dH:Du,bU:pt,d1:255,b1:ht,b2:ht}),mw=function(n){var e=n,r=a(qn,sn(e.iM),a(qn,sn(e.iQ),sn(e.d4)));if(r){var t=e.d4/r,i=e.iQ/r,o=e.iM/r,c=va(o*o+i*i+t*t);return c*r}else return Rr},Ae={b6:0,go:!1,ck:0,dC:0,cE:0,dT:0,iM:0,iQ:0,d4:0},qe=v(function(n,e){var r=n,t=e;return Sr({eK:r.iM,eL:r.cE,eM:t.iM,eN:t.cE,eO:r.iQ,eP:r.ck,eQ:t.iQ,eR:t.ck,eS:r.d4,eT:r.b6,eU:t.d4,eV:t.b6,eW:r.dT,eX:r.dC,eY:t.dT,eZ:t.dC})}),wi=M({bJ:a(qe,Ae,Ae),cs:a(qe,Ae,Ae),ct:a(qe,Ae,Ae),cu:a(qe,Ae,Ae)},L(dt,0,0,0,0)),Ds=514,Es=function(n){var e=n.al,r=n.af,t=n.ae;return L(Tu,515,e,r,t)},Is=240,sw=$([Es({ae:1,af:0,al:!0}),Iu({bD:be,dj:Is,dH:0,bU:Ds,d1:0,b1:be,b2:be}),Fu]),dw=v(function(n,e){var r=n,t=e.hx,i=e.gS,o=e.f5,c=Rn(t),l=c,u=Rn(i),f=u,d=r.dG;if(d.$){var g=d.a;return ll(f)?Sr({eK:2/(o*g),eL:0,eM:0,eN:0,eO:0,eP:2/g,eQ:0,eR:0,eS:0,eT:0,eU:0,eV:-1,eW:0,eX:0,eY:0,eZ:1}):Sr({eK:2/(o*g),eL:0,eM:0,eN:0,eO:0,eP:2/g,eQ:0,eR:0,eS:0,eT:0,eU:-2/(f-l),eV:-(f+l)/(f-l),eW:0,eX:0,eY:0,eZ:1})}else{var s=d.a;return ll(f)?Sr({eK:1/(o*s),eL:0,eM:0,eN:0,eO:0,eP:1/s,eQ:0,eR:0,eS:0,eT:0,eU:-1,eV:-2*l,eW:0,eX:0,eY:-1,eZ:0}):Sr({eK:1/(o*s),eL:0,eM:0,eN:0,eO:0,eP:1/s,eQ:0,eR:0,eS:0,eT:0,eU:-(f+l)/(f-l),eV:-2*f*l/(f-l),eW:0,eX:0,eY:-1,eZ:0})}}),qo=v(function(n,e){return(1&n>>e)==1?0:1}),pw=function(n){return $([Es({ae:1,af:0,al:!0}),Iu({bD:be,dj:Is,dH:n,bU:Ds,d1:0,b1:be,b2:be}),Fu])},hw=k(function(n,e,r){return de(a(W,function(t){var i=t<<4,o=L(dt,a(qo,t,0),a(qo,t,1),a(qo,t,2),a(qo,t,3));return p(yr,n,M(e,o),pw(i))},a(kr,1,a(oa,2,r)-1)))}),bt=function(n){var e=n;return e},gw=vh,Ru=wr({iM:0,iQ:1,d4:0}),Nu=Ru,bw={dt:ge,d2:Wo,d3:Nu,d5:Ho},yi=function(n){var e=n;return e},Aw=function(n){var e=yi(Ea(n)),r=Oe($a(n)),t=Oe(ua(n)),i=Oe(la(n));return Sr({eK:i.iM,eL:t.iM,eM:r.iM,eN:e.iM,eO:i.iQ,eP:t.iQ,eQ:r.iQ,eR:e.iQ,eS:i.d4,eT:t.d4,eU:r.d4,eV:e.d4,eW:0,eX:0,eY:0,eZ:1})},_w=v(function(n,e){var r=e;return Aw(a(Ls,r,n))}),ww=function(n){return a(_w,bw,n)},yw=function(n){var e=n;return e.dX},Sw=function(n){var e=n;return la(e)},xw=function(n){var e=n;return ua(e)},Mw=function(n){var e=yw(n.gl),r=Vr({dt:Au(e),d2:Sw(e),d3:xw(e),d5:fa(wu(e))}),t=_i(n.bb),i=t,o=L(Vu,r,1,B,$([i]));if(o.$===1)return z;var c=o.a,l=ww(e),u=a(Mn,.99,a(ee,Rn(n.gt),Bo(xs(c)))),f=Cs(c),d=f.a,s=f.b,g=f.c,m=mw(p(yu,d,s,g)),A=a(Mn,1.01,a(Ai,m,Bo(Ms(c)))),_=a(dw,n.gl,{f5:n.f5,gS:A,hx:u}),y=gw(_).eZ,S=y?Oe(fa(wu(e))):bt(Au(e)),w=function(){var _n=n.iA;switch(_n.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var Dn=_n.a;return M(3,Dn);case 4:var Dn=_n.a;return M(4,Dn);default:return M(5,0)}}(),C=w.a,F=w.b,q=n.gQ,en=q,Y=a(Jo,en,n.iJ),X=Y,K=Sr({eK:0,eL:S.iM,eM:Fa(X),eN:n.fz,eO:0,eP:S.iQ,eQ:Ba(X),eR:Go(m),eS:0,eT:S.d4,eU:Va(X),eV:C,eW:0,eX:y,eY:0,eZ:F}),Q=On(hs,K,l,_,fw,i,{S:z,ac:z,h0:z}),ln=n.hq;switch(ln.$){case 0:var bn=ln.a;return de($([p(yr,Q.S,M(bn,zu),gt),p(yr,Q.ac,wi,gt)]));case 1:var bn=ln.a;return de($([p(yr,Q.S,wi,gt),$([Ts]),p(yr,Q.h0,bn.bJ,bs),$([ws(0)]),p(yr,Q.S,M(bn,zu),sw),p(yr,Q.ac,wi,gt)]));default:var zn=ln.a,An=ln.b;return de($([p(yr,Q.S,M(An,zu),gt),$([Ts]),a(O4,Q.h0,zn),p(hw,Q.S,An,vr(zn)),p(yr,Q.ac,wi,gt)]))}},Cw=function(n){return a(Ke,"width",T(n))},Pw=v(function(n,e){var r=$([_4(1),x4(0),d4(!0),L(b4,0,0,0,0)]),t=function(){var C=n.f2;switch(C.$){case 0:return I(r,"0",1);case 1:return I(a(x,h4,r),"1",1);default:var F=C.a;return I(r,"0",F)}}(),i=t.a,o=t.b,c=t.c,l=n.a7,u=l.a,f=l.b,d=ds(f),s=a(Sn,"height",T(d)+"px"),g=ds(u),m=g/d,A=a(Kr,function(C){return Mw({f5:m,gl:n.gl,gt:n.gt,bb:C.bb,gQ:C.gQ,hq:C.hq,fz:c,iA:C.iA,iJ:C.iJ})},e),_=a(Sn,"width",T(g)+"px"),y=n.a4,S=y,w=M4(S);return p(y4,"div",$([a(Sn,"padding","0px"),_,s]),$([M(o,p(L4,i,$([Cw(In(g*c)),w4(In(d*c)),_,s,a(Sn,"display","block"),a(Sn,"background-color",w)]),A))]))}),Lw=function(n){return{$:2,a:n}},zw=function(n){return Lw(n)},kw=function(n){return a(Pw,{f2:zw(n.c_),a4:n.a4,gl:n.gl,gt:n.gt,a7:n.a7},$([{bb:n.bb,gQ:n.gQ,hq:n.hq,iA:n.iA,iJ:n.iJ}]))},js=function(n){return n},Tw=function(n){var e=n;return e},Yo=function(n){var e=n;return Tw(e.f6)},Fs=U(function(n,e,r,t){return{$:2,a:n,b:e,c:r,d:t}}),Dw=U(function(n,e,r,t){return{$:3,a:n,b:e,c:r,d:t}}),Bs=U(function(n,e,r,t){return{$:4,a:n,b:e,c:r,d:t}}),Vs=U(function(n,e,r,t){return{$:6,a:n,b:e,c:r,d:t}}),Ew=U(function(n,e,r,t){return{$:7,a:n,b:e,c:r,d:t}}),Iw=U(function(n,e,r,t){return{$:5,a:n,b:e,c:r,d:t}}),jw=U(function(n,e,r,t){return{$:1,a:n,b:e,c:r,d:t}}),Wu=function(n){switch(n.$){case 0:return n;case 1:var e=n.a,r=n.b,t=n.c;return L(jw,e,r,t,1);case 2:var e=n.a,r=n.b,t=n.c;return L(Fs,e,r,t,1);case 3:var e=n.a,i=n.b,t=n.c;return L(Dw,e,i,t,1);case 4:var e=n.a,i=n.b,t=n.c;return L(Bs,e,i,t,1);case 5:var e=n.a,i=n.b,t=n.c;return L(Iw,e,i,t,1);case 6:var e=n.a,i=n.b,t=n.c;return L(Vs,e,i,t,1);case 7:var e=n.a,i=n.b,t=n.c;return L(Ew,e,i,t,1);case 8:return n;case 9:return n;default:return n}},Hu={$:0},Fw=Cn(function(n,e,r,t,i,o,c,l){n:for(;;)if(l.b){var u=l.a,f=l.b,d=Oo(c(u)),s=a(te,d.e2,n),g=a(ee,d.e$,e),m=a(te,d.e3,r),A=a(ee,d.e0,t),_=a(te,d.e4,i),y=a(ee,d.e1,o),S=c,w=f;n=s,e=g,r=m,t=A,i=_,o=y,c=S,l=w;continue n}else return{e$:e,e0:t,e1:o,e2:n,e3:r,e4:i}}),Bw=k(function(n,e,r){var t=Oo(n(e));return Ct(Fw,t.e2,t.e$,t.e3,t.e0,t.e4,t.e1,n,r)}),Qu=v(function(n,e){var r=n,t=e;return on(t,r)<1}),Rs=function(n){return a(Qu,n.e$,n.e2)&&a(Qu,n.e0,n.e3)&&a(Qu,n.e1,n.e4)?n:{e$:a(ee,n.e2,n.e$),e0:a(ee,n.e3,n.e0),e1:a(ee,n.e4,n.e1),e2:a(te,n.e2,n.e$),e3:a(te,n.e3,n.e0),e4:a(te,n.e4,n.e1)}},Si=function(n){var e=n;return e},Ns=function(n){var e=Si(n),r=e.a,t=e.b,i=e.c,o=ma(r),c=sa(r),l=da(r),u=ma(t),f=sa(t),d=da(t),s=ma(i),g=sa(i),m=da(i);return Rs({e$:a(ee,o,a(ee,u,s)),e0:a(ee,c,a(ee,f,g)),e1:a(ee,l,a(ee,d,m)),e2:a(te,o,a(te,u,s)),e3:a(te,c,a(te,f,g)),e4:a(te,l,a(te,d,m))})},Ws=rh,Pe=function(n){return Ws(yi(n))},Hs=function(n){var e=n;return e},Zo=function(n){return Ws(Hs(n))},Vw=v(function(n,e){var r=n,t=e;return{iM:t.iQ*r.d4-t.d4*r.iQ,iQ:t.d4*r.iM-t.iM*r.d4,d4:t.iM*r.iQ-t.iQ*r.iM}}),Gu=v(function(n,e){var r=n,t=e;return{iM:t.iM-r.iM,iQ:t.iQ-r.iQ,d4:t.d4-r.d4}}),Qs=function(n){return n},Rw={iM:0,iQ:0,d4:0},Nw=v(function(n,e){var r=n,t=e,i=a(qn,sn(t.iM),a(qn,sn(t.iQ),sn(t.d4)));if(i){var o=t.d4/i,c=t.iQ/i,l=t.iM/i,u=va(l*l+c*c+o*o);return{iM:r*l/u,iQ:r*c/u,d4:r*o/u}}else return Rw}),Ww=Nw(Qs(1)),Gs=k(function(n,e,r){var t=a(Gu,e,r),i=a(Gu,n,e);return Ww(a(Vw,t,i))}),Hw=function(n){var e=Si(n),r=e.a,t=e.b,i=e.c,o=Zo(p(Gs,r,t,i));return I({u:o,fl:Pe(r)},{u:o,fl:Pe(t)},{u:o,fl:Pe(i)})},Qw=v(function(n,e){return{$:2,a:n,b:e}}),Us=Qw({eg:3,et:0,e6:4}),Gw=function(n){if(n.b){var e=n.a,r=n.b,t=Us(a(W,Hw,n)),i=p(Bw,Ns,e,r);return L(Fs,i,n,t,0)}else return Hu},Ye=k(function(n,e,r){return I(n,e,r)}),ue=k(function(n,e,r){var t=n,i=e,o=r;return{iM:t,iQ:i,d4:o}}),Js=function(){var n=Ce(1),e=Ce(1),r=Ce(1),t=a(Mn,-.5,n),i=a(Mn,-.5,e),o=a(Mn,-.5,r),c=p(ue,o,i,t),l=a(Mn,.5,n),u=p(ue,o,i,l),f=a(Mn,.5,e),d=p(ue,o,f,t),s=p(ue,o,f,l),g=a(Mn,.5,r),m=p(ue,g,i,t),A=p(ue,g,f,t),_=p(ue,g,i,l),y=p(ue,g,f,l);return Wu(Gw($([p(Ye,c,A,m),p(Ye,c,d,A),p(Ye,u,_,y),p(Ye,u,y,s),p(Ye,m,A,y),p(Ye,m,y,_),p(Ye,c,s,d),p(Ye,c,u,s),p(Ye,c,m,_),p(Ye,c,_,u),p(Ye,d,y,A),p(Ye,d,s,y)])))}(),Xo={$:0},Uw=k(function(n,e,r){return{$:1,a:n,b:e,c:r}}),Jw=k(function(n,e,r){var t=e.a,i=e.b,o=e.c,c=n(o),l=n(i),u=n(t),f=Zo(p(Gs,u,l,c)),d={u:f,fl:Pe(u)},s={u:f,fl:Pe(l)},g={u:f,fl:Pe(c)};return a(x,d,a(x,s,a(x,g,r)))}),Uu=function(n){var e=n;return e.K},Ow=U(function(n,e,r,t){if(e.$===1)return B;var i=e.a;if(r.$===1)return B;var o=r.a;if(t.$===1)return B;var c=t.a;return j(p(n,i,o,c))}),Ju=4294967295>>>32-jt,Ou=s1,qw=k(function(n,e,r){n:for(;;){var t=Ju&e>>>n,i=a(Ou,t,r);if(i.$){var f=i.a;return a(Ou,Ju&e,f)}else{var o=i.a,c=n-jt,l=e,u=o;n=c,e=l,r=u;continue n}}}),Yw=function(n){return n>>>5<<5},Zw=v(function(n,e){var r=e.a,t=e.b,i=e.c,o=e.d;return n<0||on(n,r)>-1?B:on(n,Yw(r))>-1?j(a(Ou,Ju&n,o)):j(p(qw,t,n,i))}),qu=function(n){var e=n;return e.ax},Yu=v(function(n,e){return a(Zw,n,qu(e))}),Xw=function(n){var e=function(r){var t=r.a,i=r.b,o=r.c;return L(Ow,k(function(c,l,u){return I(c,l,u)}),a(Yu,t,n),a(Yu,i,n),a(Yu,o,n))};return a(We,e,Uu(n))},Kw=k(function(n,e,r){n:for(;;){var t=a(el,ze,n),i=t.a,o=t.b;if(on(nl(i),ze)<0)return a(zv,!0,{F:e,r,v:i});var c=o,l=a(x,Lv(i),e),u=r+1;n=c,e=l,r=u;continue n}}),Zu=function(n){return n.b?p(Kw,n,z,0):Cv},ny=v(function(n,e){return!a(Dr,a(sr,Qh,n),e)}),ey=function(n){var e=n.a;return e},Os=v(function(n,e){var r=ey(n),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&on(o,r)<0&&c>=0&&on(c,r)<0&&l>=0&&on(l,r)<0};return a(ny,t,e)?{K:e,ax:n}:{K:a(Ca,t,e),ax:n}}),ry=k(function(n,e,r){return{$:3,a:n,b:e,c:r}}),xi=ry({eg:1,et:3,e6:4}),Ko=v(function(n,e){var r=bt(e),t=bt(n);return M(I(t.iM,t.iQ,t.d4),I(r.iM,r.iQ,r.d4))}),qs=p(gi,0,0,0),Xu=we(function(n,e,r,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Nt,a(Ko,n,e),i);if(f.$){var s={u:qs,fl:Pe(e)},g={u:qs,fl:Pe(n)},m=u+1,A=u;return I(a(x,I(r,A,m),a(x,I(r,m,t),c)),a(x,s,a(x,g,l)),u+2)}else{var d=f.a;return I(a(x,I(r,d,t),c),l,u)}}),ay=Hn(function(n,e,r,t,i){n:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,d=n(u),s=n(l),g=n(c),m=t+2,A=t+1,_=t,y=n,S=e,w=f,C=t+3,F=On(Xu,d,g,m,_,e,On(Xu,s,d,A,m,e,On(Xu,g,s,_,A,e,i)));n=y,e=S,r=w,t=C,i=F;continue n}else{var q=i,en=q.a,Y=q.b;return M(en,kn(Y))}}),ty=Hn(function(n,e,r,t,i){n:for(;;)if(e.b){var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,d=n(u),s=n(l),g=n(c),m=r+2,A=r+1,_=r,y=p(Za,a(Ko,g,d),m,p(Za,a(Ko,d,s),A,p(Za,a(Ko,s,g),_,i))),S=a(x,I(_,A,m),t),w=n,C=f,F=r+3,q=S,en=y;n=w,e=C,r=F,t=q,i=en;continue n}else return I(t,i,r)}),Ra=k(function(n,e,r){var t=Xw(r),i=p(Zn,Jw(e),z,t),o=D(ty,e,t,0,z,pl),c=o.a,l=o.b,u=o.c,f=D(ay,e,l,t,0,I(c,z,u)),d=f.a,s=f.b,g=Er(s)?i:N(i,s);return p(Uw,n,a(Os,Zu(g),d),a(xi,g,d))}),Ku=function(n){return{K:a(W,function(e){return I(3*e,3*e+1,3*e+2)},a(kr,0,vr(n)-1)),ax:Zu(de(a(W,function(e){var r=e.a,t=e.b,i=e.c;return $([r,t,i])},n)))}},Ys=function(n){switch(n.$){case 0:return Xo;case 1:var e=n.a,r=n.b,t=a(W,Si,r);return p(Ra,e,Yn,Ku(t));case 2:var e=n.a,r=n.b,t=a(W,Si,r);return p(Ra,e,Yn,Ku(t));case 3:var e=n.a,i=n.b;return p(Ra,e,Yn,i);case 4:var e=n.a,i=n.b;return p(Ra,e,function(o){return o.fl},i);case 5:var e=n.a,i=n.b;return p(Ra,e,function(o){return o.fl},i);case 6:var e=n.a,i=n.b;return p(Ra,e,function(o){return o.fl},i);case 7:var e=n.a,i=n.b;return p(Ra,e,function(o){return o.fl},i);case 8:return Xo;case 9:return Xo;default:return Xo}},Zs=Ys(Js),nc=function(n){var e=n;return e.a7},Xs={$:0},H=Xs,$e=v(function(n,e){return{$:1,a:n,b:e}}),iy={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"cd"}},oy=1029,cy=function(n){return{$:5,a:n}},Ks=function(n){var e=n;return cy(e)},ly=Ks(oy),uy=1028,$y=Ks(uy),Le=k(function(n,e,r){return e===1?n?a(x,ly,r):a(x,$y,r):r}),nd={src:`
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
    `,attributes:{position:"fl",uv:"R"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},n$=U(function(n,e,r,t){return a($e,e,Cn(function(i,o,c,l,u,f,d,s){return D(Nn,p(Le,l,t,s),nd,iy,r,{cd:n,d:c,e:o,f,g:i,h:u})}))}),e$={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aR"}},ed={src:`
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
    `,attributes:{position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Wr=U(function(n,e,r,t){return a($e,e,Cn(function(i,o,c,l,u,f,d,s){return D(Nn,p(Le,l,t,s),ed,e$,r,{aR:n,d:c,e:o,f,g:i,h:u})}))}),rd=v(function(n,e){return{$:3,a:n,b:e}}),vy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aR",pointRadius:"cC",sceneProperties:"g"}},ad={src:`
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
    `,attributes:{position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",pointRadius:"cC",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},fy=U(function(n,e,r,t){return a(rd,r,Cn(function(i,o,c,l,u,f,d,s){return D(Nn,s,ad,vy,t,{aR:n,d:c,e:o,cC:e,f,g:i,h:u})}))}),r$={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a9",sceneProperties:"g"}},Mi=function(n){var e=n;return e},ec=ah,Hr=Hn(function(n,e,r,t,i){return a($e,r,Cn(function(o,c,l,u,f,d,s,g){return D(Nn,p(Le,u,i,g),ed,r$,t,{a9:a(ec,Mi(e),n),d:l,e:c,f:d,g:o,h:f})}))}),my={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a9",pointRadius:"cC",sceneProperties:"g"}},sy=Hn(function(n,e,r,t,i){return a(rd,t,Cn(function(o,c,l,u,f,d,s,g){return D(Nn,g,ad,my,i,{a9:a(ec,Mi(e),n),d:l,e:c,cC:r,f:d,g:o,h:f})}))}),td={src:`
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
    `,attributes:{},uniforms:{enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",materialColor:"dk",sceneProperties:"g",viewMatrix:"h"}},id={src:`
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
    `,attributes:{normal:"u",position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},rc=U(function(n,e,r,t){return a($e,e,Cn(function(i,o,c,l,u,f,d,s){var g=d.a,m=d.b;return D(Nn,p(Le,l,t,s),id,td,r,{X:m,bJ:g.bJ,cs:g.cs,ct:g.ct,cu:g.cu,dk:n,d:c,e:o,f,g:i,h:u})}))}),od={src:`
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
    `,attributes:{},uniforms:{enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",materialColorTexture:"dl",normalMapTexture:"bj",sceneProperties:"g",useNormalMap:"bp",viewMatrix:"h"}},cd={src:`
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
    `,attributes:{normal:"u",position:"fl",tangent:"fB",uv:"R"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},dy=we(function(n,e,r,t,i,o){return a($e,t,Cn(function(c,l,u,f,d,s,g,m){var A=g.a,_=g.b;return D(Nn,p(Le,f,o,m),cd,od,i,{X:_,bJ:A.bJ,cs:A.cs,ct:A.ct,cu:A.cu,dl:n,d:u,e:l,bj:e,f:s,g:c,bp:r,h:d})}))}),ld={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cW",constantBaseColor:"cX",constantMetallic:"cY",constantRoughness:"cZ",enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",metallicTexture:"$7",normalMapTexture:"bj",roughnessTexture:"dL",sceneProperties:"g",useNormalMap:"bp",viewMatrix:"h"}},py=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(d){return a($e,u,Cn(function(s,g,m,A,_,y,S,w){var C=S.a,F=S.b;return D(Nn,p(Le,A,d,w),cd,ld,f,{cW:n,cX:e,cY:o,cZ:t,X:F,bJ:C.bJ,cs:C.cs,ct:C.ct,cu:C.cu,$7:i,d:m,e:g,bj:c,f:y,dL:r,g:s,bp:l,h:_})}))}}}}}}}}}}},ud={src:`
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
    `,attributes:{},uniforms:{baseColor:"cV",enabledLights:"X",lights12:"bJ",lights34:"cs",lights56:"ct",lights78:"cu",metallic:"dn",roughness:"dK",sceneProperties:"g",viewMatrix:"h"}},ac=we(function(n,e,r,t,i,o){return a($e,t,Cn(function(c,l,u,f,d,s,g,m){var A=g.a,_=g.b;return D(Nn,p(Le,f,o,m),id,ud,i,{cV:n,X:_,bJ:A.bJ,cs:A.cs,ct:A.ct,cu:A.cu,dn:r,d:u,e:l,f:s,dK:e,g:c,h:d})}))}),hy=function(n){return{$:0,a:n}},$d=v(function(n,e){return{$:1,a:n,b:e}}),Ci=v(function(n,e){if(e.$){var r=e.a.H;return M(r,1)}else return e.a,M(n,0)}),gy=function(n){return L(dt,Fa(n),Ba(n),Va(n),1)},a$=L(dt,0,0,0,0),tc=v(function(n,e){if(e.$){var t=e.a.H;return M(t,a$)}else{var r=e.a;return M(n,gy(r))}}),vd=v(function(n,e){var r=M(n,e);if(r.a.$){var i=r.a.a.H;return a($d,M(i,a$),a(Ci,i,e))}else if(r.b.$){var i=r.b.a.H;return a($d,a(tc,i,n),a(Ci,i,e))}else{var t=r.a.a;return r.b.a,hy(t)}}),by=k(function(n,e,r){return{$:0,a:n,b:e,c:r}}),ic=U(function(n,e,r,t){return{$:1,a:n,b:e,c:r,d:t}}),Ay=U(function(n,e,r,t){return{$:0,a:n,b:e,c:r,d:t}}),_y=function(n){return a(je,n,1)},t$=a(je,0,0),At=v(function(n,e){if(e.$){var t=e.a.H;return M(t,t$)}else{var r=e.a;return M(n,_y(r))}}),fd=U(function(n,e,r,t){var i=L(Ay,n,e,r,t);if(i.a.$){var u=i.a.a.H;return L(ic,M(u,a$),a(At,u,e),a(At,u,r),a(Ci,u,t))}else if(i.b.$){var u=i.b.a.H;return L(ic,a(tc,u,n),M(u,t$),a(At,u,r),a(Ci,u,t))}else if(i.c.$){var u=i.c.a.H;return L(ic,a(tc,u,n),a(At,u,e),M(u,t$),a(Ci,u,t))}else if(i.d.$){var u=i.d.a.H;return L(ic,a(tc,u,n),a(At,u,e),a(At,u,r),M(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,p(by,o,c,l)}}),wy={src:`
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
    `,attributes:{},uniforms:{backlight:"cT",colorTexture:"cd",sceneProperties:"g"}},i$=Hn(function(n,e,r,t,i){return a($e,r,Cn(function(o,c,l,u,f,d,s,g){return D(Nn,p(Le,u,i,g),nd,wy,t,{cT:Mi(e),cd:n,d:l,e:c,f:d,g:o,h:f})}))}),md={src:`
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
    `,attributes:{normal:"u",position:"fl",uv:"R"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},yy=U(function(n,e,r,t){return a($e,e,Cn(function(i,o,c,l,u,f,d,s){var g=d.a,m=d.b;return D(Nn,p(Le,l,t,s),md,od,r,{X:m,bJ:g.bJ,cs:g.cs,ct:g.ct,cu:g.cu,dl:n,d:c,e:o,bj:n,f,g:i,bp:0,h:u})}))}),Sy=Lc(function(n,e,r,t,i,o,c,l,u){return a($e,c,Cn(function(f,d,s,g,m,A,_,y){var S=_.a,w=_.b;return D(Nn,p(Le,g,u,y),md,ld,l,{cW:n,cX:e,cY:o,cZ:t,X:w,bJ:S.bJ,cs:S.cs,ct:S.ct,cu:S.cu,$7:i,d:s,e:d,bj:n,f:A,dL:r,g:f,bp:0,h:m})}))}),Pi=k(function(n,e,r){var t=n,i=e;return r<=.5?t+r*(i-t):i+(1-r)*(t-i)}),xy=function(n){var e=n;return p(Pi,e.e2,e.e$,.5)},My=function(n){var e=n;return p(Pi,e.e3,e.e0,.5)},Cy=function(n){var e=n;return p(Pi,e.e4,e.e1,.5)},Py=function(n){return p(ue,xy(n),My(n),Cy(n))},$n=function(n){var e=Cs(n),r=e.a,t=e.b,i=e.c;return{gp:yi(Py(n)),g_:r/2,g$:t/2,g0:i/2}},o$=v(function(n,e){switch(n.$){case 0:if(n.b.$){n.a;var l=n.b.a.H;switch(e.$){case 0:return H;case 1:return H;case 2:return H;case 3:return H;case 4:return H;case 5:var t=e.a,i=e.c,o=e.d;return L(n$,l,$n(t),i,o);case 6:var t=e.a,i=e.c,o=e.d;return L(n$,l,$n(t),i,o);case 7:var t=e.a,i=e.c,o=e.d;return L(n$,l,$n(t),i,o);case 8:return H;case 9:return H;default:return H}}else{var r=n.b.a;switch(e.$){case 0:return H;case 1:var t=e.a,i=e.c,o=e.d;return L(Wr,r,$n(t),i,o);case 2:var t=e.a,i=e.c,o=e.d;return L(Wr,r,$n(t),i,o);case 3:var t=e.a,i=e.c,o=e.d;return L(Wr,r,$n(t),i,o);case 4:var t=e.a,i=e.c,o=e.d;return L(Wr,r,$n(t),i,o);case 5:var t=e.a,i=e.c,o=e.d;return L(Wr,r,$n(t),i,o);case 6:var t=e.a,i=e.c,o=e.d;return L(Wr,r,$n(t),i,o);case 7:var t=e.a,i=e.c,o=e.d;return L(Wr,r,$n(t),i,o);case 8:var t=e.a,i=e.c;return L(Wr,r,$n(t),i,0);case 9:var t=e.a,i=e.c;return L(Wr,r,$n(t),i,0);default:var t=e.a,c=e.b,i=e.d;return L(fy,r,c,$n(t),i)}}case 1:if(n.b.$){n.a;var l=n.b.a.H,f=n.c;switch(e.$){case 0:return H;case 1:return H;case 2:return H;case 3:return H;case 4:return H;case 5:var t=e.a,i=e.c,o=e.d;return D(i$,l,f,$n(t),i,o);case 6:var t=e.a,i=e.c,o=e.d;return D(i$,l,f,$n(t),i,o);case 7:var t=e.a,i=e.c,o=e.d;return D(i$,l,f,$n(t),i,o);case 8:return H;case 9:return H;default:return H}}else{var u=n.b.a,f=n.c;switch(e.$){case 0:return H;case 1:var t=e.a,i=e.c,o=e.d;return D(Hr,u,f,$n(t),i,o);case 2:var t=e.a,i=e.c,o=e.d;return D(Hr,u,f,$n(t),i,o);case 3:var t=e.a,i=e.c,o=e.d;return D(Hr,u,f,$n(t),i,o);case 4:var t=e.a,i=e.c,o=e.d;return D(Hr,u,f,$n(t),i,o);case 5:var t=e.a,i=e.c,o=e.d;return D(Hr,u,f,$n(t),i,o);case 6:var t=e.a,i=e.c,o=e.d;return D(Hr,u,f,$n(t),i,o);case 7:var t=e.a,i=e.c,o=e.d;return D(Hr,u,f,$n(t),i,o);case 8:var t=e.a,i=e.c;return D(Hr,u,f,$n(t),i,0);case 9:var t=e.a,i=e.c;return D(Hr,u,f,$n(t),i,0);default:var t=e.a,c=e.b,i=e.d;return D(sy,u,f,c,$n(t),i)}}case 2:n.a;var d=n.b,s=n.c,g=a(vd,d,s);if(g.$){var _=g.a,y=_.a;_.b;var S=g.b,w=S.a,C=S.b;switch(e.$){case 0:return H;case 1:return H;case 2:return H;case 3:return H;case 4:return H;case 5:return H;case 6:var t=e.a,i=e.c,A=e.d;return L(yy,y,$n(t),i,A);case 7:var t=e.a,i=e.c,A=e.d;return On(dy,y,w,C,$n(t),i,A);case 8:return H;case 9:return H;default:return H}}else{var m=g.a;switch(e.$){case 0:return H;case 1:return H;case 2:var t=e.a,i=e.c,A=e.d;return L(rc,m,$n(t),i,A);case 3:return H;case 4:var t=e.a,i=e.c,A=e.d;return L(rc,m,$n(t),i,A);case 5:return H;case 6:var t=e.a,i=e.c,A=e.d;return L(rc,m,$n(t),i,A);case 7:var t=e.a,i=e.c,A=e.d;return L(rc,m,$n(t),i,A);case 8:return H;case 9:return H;default:return H}}default:n.a;var F=n.b,q=n.c,en=n.d,s=n.e,Y=L(fd,F,q,en,s);if(Y.$){var ln=Y.a,bn=ln.a,zn=ln.b,An=Y.b,_n=An.a,Dn=An.b,wn=Y.c,Jn=wn.a,Wn=wn.b,fe=Y.d,w=fe.a,C=fe.b;switch(e.$){case 0:return H;case 1:return H;case 2:return H;case 3:return H;case 4:return H;case 5:return H;case 6:var t=e.a,i=e.c,o=e.d;return u1(Sy,bn,zn,_n,Dn,Jn,Wn,$n(t),i,o);case 7:var t=e.a,i=e.c,o=e.d;return py(bn)(zn)(_n)(Dn)(Jn)(Wn)(w)(C)($n(t))(i)(o);case 8:return H;case 9:return H;default:return H}}else{var X=Y.a,K=Y.b,Q=Y.c;switch(e.$){case 0:return H;case 1:return H;case 2:var t=e.a,i=e.c,o=e.d;return On(ac,X,K,Q,$n(t),i,o);case 3:return H;case 4:var t=e.a,i=e.c,o=e.d;return On(ac,X,K,Q,$n(t),i,o);case 5:return H;case 6:var t=e.a,i=e.c,o=e.d;return On(ac,X,K,Q,$n(t),i,o);case 7:var t=e.a,i=e.c,o=e.d;return On(ac,X,K,Q,$n(t),i,o);case 8:return H;case 9:return H;default:return H}}}}),c$=function(n){var e=n;return e.iM},l$=function(n){var e=n;return e.iQ},u$=function(n){var e=n;return e.d4},Ly=function(n){var e=n,r=u$(e.d5),t=l$(e.d5),i=c$(e.d5),o=u$(e.d3),c=l$(e.d3),l=c$(e.d3),u=u$(e.d2),f=l$(e.d2),d=c$(e.d2);return d*c*r+f*o*i+u*l*t-u*c*i-f*l*r-d*o*t>0},zy=function(n){var e=yi(Ea(n)),r=Oe($a(n)),t=Oe(ua(n)),i=Oe(la(n));return{ey:Ly(n),w:i.iM,x:i.iQ,y:i.d4,z:t.iM,A:t.iQ,B:t.d4,C:r.iM,D:r.iQ,E:r.d4,N:e.iM,O:e.iQ,P:e.d4,cH:1}},_t=v(function(n,e){return{$:5,a:n,b:e}}),sd=v(function(n,e){var r=e;switch(r.$){case 0:return H;case 5:var t=r.a,i=r.b,o=a(ps,t,n);return a(_t,o,i);case 1:return a(_t,n,r);case 3:return a(_t,n,r);case 2:return a(_t,n,r);default:return a(_t,n,r)}}),dd=v(function(n,e){return a(sd,zy(n),e)}),oc=function(n){return{$:2,a:n}},ky=v(function(n,e){var r=n.a,t=n.b,i=n.c,o=e.gp;return{gp:{iM:r*o.iM,iQ:t*o.iQ,d4:i*o.d4},g_:r*e.g_,g$:t*e.g$,g0:i*e.g0}}),Ty=oh,Dy=ih,pd=function(n){return function(e){return function(r){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var d=n.a,s=n.b,g=n.c,m=Dy(t),A=m.iM,_=m.iQ,y=m.d4,S=m.fM,w=Ty({fM:S,iM:A*d,iQ:_*s,d4:y*g});return Ct(e,r,w,i,o,c,l,u,f)}}}}}}}}}},$$=v(function(n,e){switch(e.$){case 0:return Xs;case 5:var r=e.a,t=e.b;return a(_t,r,a($$,n,t));case 1:var i=e.a,o=e.b;return a($e,a(ky,n,i),a(pd,n,o));case 3:return e;case 2:var o=e.a;return oc(a(pd,n,o));default:var c=e.a;return ks(a(W,$$(n),c))}}),v$=v(function(n,e){var r=e;return a($$,n,r)}),f$={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},hd=7683,gd=7682,Ey=p(Eu,{dj:0,dH:0,d1:15},{bD:be,bU:pt,b1:be,b2:hd},{bD:be,bU:pt,b1:be,b2:gd}),Iy=p(Eu,{dj:0,dH:0,d1:15},{bD:be,bU:pt,b1:be,b2:gd},{bD:be,bU:pt,b1:be,b2:hd}),m$=v(function(n,e){return n?a(x,Iy,e):a(x,Ey,e)}),jy={src:`
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
    `,attributes:{normal:"u",position:"fl"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cJ",viewMatrix:"h"}},Fy=function(n){if(n.$){var e=n.c;return j(Cn(function(r,t,i,o,c,l,u,f){return D(Nn,a(m$,o,f),jy,f$,e,{d:i,e:t,f:l,g:r,cJ:u,h:c})}))}else return B},cc=function(n){var e=Fy(n);if(e.$)return H;var r=e.a;return oc(r)},By=U(function(n,e,r,t){var i=a(o$,r,Js),o=function(){var d=M(n,e);return d.a?d.b?_i($([i,cc(Zs)])):i:d.b?cc(Zs):H}(),c=nc(t),l=c.a,u=c.b,f=c.c;return a(dd,Yo(t),a(v$,I(l,u,f),o))}),Vy=v(function(n,e){return L(By,!0,!0,n,e)}),s$=function(n){return{$:0,a:n}},bd=v(function(n,e){return{$:0,a:n,b:e}}),Ry=function(n){var e=Yl(n),r=e.hP,t=e.gX,i=e.gb;return p(gi,r,t,i)},Ny=function(n){return a(bd,0,s$(Ry(n)))},d$=function(n){var e=n;return e.o},Li=function(n){var e=n;return Ia(e)},Wy=v(function(n,e){var r=n.fl,t=n.u;return a(x,{u:Zo(t),fl:Pe(r)},e)}),Hy=Bi(function(n,e,r,t,i,o,c){n:for(;;)if(c.b){var l=c.a,u=c.b,f=Va(l.fl),d=Ba(l.fl),s=Fa(l.fl),g=a(He,n,s),m=a(qn,e,s),A=a(He,r,d),_=a(qn,t,d),y=a(He,i,f),S=a(qn,o,f),w=u;n=g,e=m,r=A,t=_,i=y,o=S,c=w;continue n}else return Rs({e$:e,e0:t,e1:o,e2:n,e3:r,e4:i})}),Ad=v(function(n,e){var r=Va(n.fl),t=Ba(n.fl),i=Fa(n.fl);return zc(Hy,i,i,t,t,r,r,e)}),Qy=function(n){var e=p(pv,Wy,z,qu(n));if(e.b){var r=e.a,t=e.b,i=a(xi,e,Uu(n)),o=a(Ad,r,t);return L(Bs,o,n,i,0)}else return Hu},_d=v(function(n,e){var r=n,t=e,i=r.d3,o=i,c=r.d2,l=c;return{iM:t.iM*l.iM+t.iQ*o.iM,iQ:t.iM*l.iQ+t.iQ*o.iQ,d4:t.iM*l.d4+t.iQ*o.d4}}),lc=function(n){var e=n;return ja(e)},zi=function(n){var e=n;return e},p$=function(n){return Je(2*Ge*n)},wd=es({dt:ge,d2:Wo,d3:Nu}),yd=function(){var n=72,e=a(os,n,p$(1)),r=Ce(1),t=zi(gu),i=zi(_u),o=Ce(1),c=a(Mn,.5,o),l=p(ue,Rr,Rr,c),u=a(Mn,-.5,o),f=p(ue,Rr,Rr,u),d=function(m){var A=a(Mn,m,e),_=zi(a(_d,wd,Su(A))),y=a(Mn,Li(A),r),S=a(Mn,lc(A),r),w=p(ue,y,S,c),C=p(ue,y,S,u),F=a(ci,n,m+1),q=a(Mn,F,e),en=zi(a(_d,wd,Su(q))),Y=a(Mn,Li(q),r),X=a(Mn,lc(q),r),K=p(ue,Y,X,u),Q=p(ue,Y,X,c);return $([I({u:i,fl:f},{u:i,fl:K},{u:i,fl:C}),I({u:_,fl:C},{u:en,fl:K},{u:en,fl:Q}),I({u:_,fl:C},{u:en,fl:Q},{u:_,fl:w}),I({u:t,fl:l},{u:t,fl:w},{u:t,fl:Q})])},s=a(W,d,a(kr,0,n-1)),g=Ku(de(s));return Wu(Qy(g))}(),Sd=Ys(yd),Gy=function(n){var e=n,r=sn(e.d4),t=sn(e.iQ),i=sn(e.iM);if(on(i,t)<1)if(on(i,r)<1){var o=va(e.d4*e.d4+e.iQ*e.iQ);return{iM:0,iQ:-e.d4/o,d4:e.iQ/o}}else{var o=va(e.iQ*e.iQ+e.iM*e.iM);return{iM:-e.iQ/o,iQ:e.iM/o,d4:0}}else if(on(t,r)<1){var o=va(e.d4*e.d4+e.iM*e.iM);return{iM:e.d4/o,iQ:0,d4:-e.iM/o}}else{var o=va(e.iM*e.iM+e.iQ*e.iQ);return{iM:-e.iQ/o,iQ:e.iM/o,d4:0}}},Uy=function(n){var e=Gy(n),r=e,t=r,i=n,o=i,c={iM:o.iQ*t.d4-o.d4*t.iQ,iQ:o.d4*t.iM-o.iM*t.d4,d4:o.iM*t.iQ-o.iQ*t.iM};return M(e,c)},Jy=function(n){var e=Ro(n),r=Uy(e),t=r.a,i=r.b;return Vr({dt:bu(n),d2:t,d3:i,d5:e})},xd=function(n){var e=n;return e.ho},Md=function(n){var e=n;return e.hN},Oy=U(function(n,e,r,t){var i=Jy(d$(t)),o=a(o$,r,yd),c=function(){var s=M(n,e);return s.a?s.b?_i($([o,cc(Sd)])):o:s.b?cc(Sd):H}(),l=Md(t),u=l,f=xd(t),d=f;return a(dd,i,a(v$,I(u,u,d),c))}),qy=v(function(n,e){return L(Oy,!0,!0,n,e)}),Cd={src:`
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
    `,attributes:{triangleVertex:"dS"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b_",viewMatrix:"h"}},Pd={src:`
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
    `,attributes:{triangleVertex:"dS"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b_",viewMatrix:"h"}},ki=function(n){var e=Si(n),r=e.a,t=e.b,i=e.c,o=bt(r),c=bt(t),l=bt(i);return Sr({eK:o.iM,eL:c.iM,eM:l.iM,eN:0,eO:o.iQ,eP:c.iQ,eQ:l.iQ,eR:0,eS:o.d4,eT:c.d4,eU:l.d4,eV:0,eW:0,eX:0,eY:0,eZ:0})},uc=Us($([I({dS:0},{dS:1},{dS:2})])),Yy=v(function(n,e){var r=Ns(e),t=$n(r);switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.H,H;var i=n.b.a;return a($e,t,Cn(function(w,C,F,q,en,Y,X,K){return D(Nn,p(Le,q,0,K),Cd,e$,uc,{aR:i,d:F,e:C,f:Y,g:w,b_:ki(e),h:en})}));case 1:if(n.b.$)return n.a,H;var o=n.b.a,c=n.c;return a($e,t,Cn(function(w,C,F,q,en,Y,X,K){return D(Nn,p(Le,q,0,K),Cd,r$,uc,{a9:a(ec,Mi(c),o),d:F,e:C,f:Y,g:w,b_:ki(e),h:en})}));case 2:n.a;var l=n.b,u=n.c,f=a(vd,l,u);if(f.$)return H;var d=f.a;return a($e,t,Cn(function(w,C,F,q,en,Y,X,K){var Q=X.a,ln=X.b;return D(Nn,p(Le,q,0,K),Pd,td,uc,{X:ln,bJ:Q.bJ,cs:Q.cs,ct:Q.ct,cu:Q.cu,dk:d,d:F,e:C,f:Y,g:w,b_:ki(e),h:en})}));default:n.a;var s=n.b,g=n.c,m=n.d,u=n.e,A=L(fd,s,g,m,u);if(A.$)return H;var _=A.a,y=A.b,S=A.c;return a($e,t,Cn(function(w,C,F,q,en,Y,X,K){var Q=X.a,ln=X.b;return D(Nn,p(Le,q,0,K),Pd,ud,uc,{cV:_,X:ln,bJ:Q.bJ,cs:Q.cs,ct:Q.ct,cu:Q.cu,dn:S,d:F,e:C,f:Y,dK:y,g:w,b_:ki(e),h:en})}))}}),Zy=function(){var n=$([{bo:a(je,0,1)},{bo:a(je,1,1)},{bo:a(je,2,1)},{bo:a(je,0,-1)},{bo:a(je,1,-1)},{bo:a(je,2,-1)}]),e=$([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return a(xi,n,e)}(),Xy={src:`
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
    `,attributes:{triangleShadowVertex:"bo"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cJ",triangleVertexPositions:"b_",viewMatrix:"h"}},Ld=function(n){return oc(Cn(function(e,r,t,i,o,c,l,u){return D(Nn,a(m$,i,u),Xy,f$,Zy,{d:t,e:r,f:c,g:e,cJ:l,b_:ki(n),h:o})}))},Ky=U(function(n,e,r,t){var i=a(Yy,r,t),o=M(n,e);return o.a?o.b?_i($([i,Ld(t)])):i:o.b?Ld(t):H}),nS=v(function(n,e){return L(Ky,!0,!0,n,e)}),h$=function(n){var e=n;return e},eS=v(function(n,e){var r=da(e),t=da(n),i=sa(e),o=sa(n),c=ma(e),l=ma(n);return{e$:a(ee,l,c),e0:a(ee,o,i),e1:a(ee,t,r),e2:a(te,l,c),e3:a(te,o,i),e4:a(te,t,r)}}),rS=function(n){var e=h$(n),r=e.a,t=e.b;return a(eS,r,t)},zd={src:`
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
    `,attributes:{lineSegmentVertex:"eI"},uniforms:{lineSegmentEndPoint:"eG",lineSegmentStartPoint:"eH",modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},aS=v(function(n,e){return{$:1,a:n,b:e}}),tS=aS({eg:2,et:0,e6:1}),kd=tS($([M({eI:0},{eI:1})])),iS=v(function(n,e){var r=rS(e),t=$n(r),i=h$(e),o=i.a,c=i.b;switch(n.$){case 0:if(n.b.$)return n.a,n.b.a.H,H;var l=n.b.a;return a($e,t,Cn(function(f,d,s,g,m,A,_,y){return D(Nn,y,zd,e$,kd,{aR:l,eG:Pe(c),eH:Pe(o),d:s,e:d,f:A,g:f,h:m})}));case 1:if(n.b.$)return H;var l=n.b.a,u=n.c;return a($e,t,Cn(function(d,s,g,m,A,_,y,S){return D(Nn,S,zd,r$,kd,{a9:a(ec,Mi(u),l),eG:Pe(c),eH:Pe(o),d:g,e:s,f:_,g:d,h:A})}));case 2:return H;default:return H}}),oS=v(function(n,e){return a(iS,n,e)}),$c=function(n){var e=n;return e.gp},vc=function(n){var e=n;return e.hN},Td=v(function(n,e){var r=n,t=e;return r/t}),cS=Hn(function(n,e,r,t,i){n:for(;;){var o=t(e/r),c=a(x,o,i);if(Z(e,n))return c;var l=n,u=e-1,f=r,d=t,s=c;n=l,e=u,r=f,t=d,i=s;continue n}}),Dd=v(function(n,e){return n<1?z:D(cS,0,n,n,e,z)}),lS=v(function(n,e){var r=n.fl,t=n.u,i=n.R,o=i,c=o.a,l=o.b;return a(x,{u:Zo(t),fl:Pe(r),R:a(je,c,l)},e)}),uS=function(n){var e=p(pv,lS,z,qu(n));if(e.b){var r=e.a,t=e.b,i=a(xi,e,Uu(n)),o=a(Ad,r,t);return L(Vs,o,n,i,0)}else return Hu},g$=v(function(n,e){var r=n,t=e,i=Ia(t);return{iM:i*Ia(r),iQ:i*ja(r),d4:ja(t)}}),$S=function(){var n=Ce(1),e=72,r=a(kr,0,e-1),t=a(Dd,e,a(Pi,Rr,p$(1))),i=It(e/2),o=a(kr,0,i-1),c=a(Dd,i,a(Pi,mt(90),mt(-90))),l=Zu(de(a(W,function(d){return a(W,function(s){return{u:zi(a(g$,d,s)),fl:p(ue,a(Mn,Li(s)*Li(d),n),a(Mn,Li(s)*lc(d),n),a(Mn,lc(s),n)),R:M(a(Td,d,p$(1)),a(Td,a(Ai,mt(90),s),mt(180)))}},c)},t))),u=v(function(d,s){return d*(i+1)+s}),f=de(a(W,function(d){return de(a(W,function(s){var g=a(u,d+1,s),m=a(u,d,s),A=a(u,d+1,s+1),_=a(u,d,s+1);return $([I(_,A,g),I(_,g,m)])},o))},r));return Wu(uS(a(Os,l,f)))}(),fc=72,mc=2*fc,vS=v(function(n,e){n:for(;;){var r=mc+1,t=a(ci,mc,2*n+3),i=a(ci,mc,2*n+2),o=2*n+1,c=2*n,l=mc,u=a(x,I(l,c,i),a(x,I(c,t,i),a(x,I(c,o,t),a(x,I(o,r,t),e))));if(n){var f=n-1,d=u;n=f,e=d;continue n}else return u}}),fS=k(function(n,e,r){return r<=.5?n+r*(e-n):e+(1-r)*(n-e)}),mS=v(function(n,e){n:for(;;){var r=p(fS,0,2*Ge,n/fc),t={b4:r,cz:0,cF:1},i={b4:r,cz:1,cF:1},o=a(x,t,a(x,i,e));if(n){var c=n-1,l=o;n=c,e=l;continue n}else return o}}),sS=function(){var n=a(mS,fc-1,$([{b4:0,cz:0,cF:0},{b4:0,cz:1,cF:0}])),e=a(vS,fc-1,z);return a(xi,n,e)}(),dS={src:`
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
    `,attributes:{angle:"b4",offsetScale:"cz",radiusScale:"cF"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cJ",viewMatrix:"h"}},Ed=function(n){return oc(Cn(function(e,r,t,i,o,c,l,u){return D(Nn,a(m$,!0,u),dS,f$,sS,{aR:p(gi,0,0,1),d:t,e:r,f:c,g:e,cJ:l,h:o})}))},pS=function(n){var e=Hs(n);return{ey:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,N:e.iM,O:e.iQ,P:e.d4,cH:1}},hS=v(function(n,e){return a(sd,pS(n),e)}),gS=U(function(n,e,r,t){var i=a(o$,r,$S),o=function(){var u=M(n,e);return u.a?u.b?_i($([i,Ed()])):i:u.b?Ed():H}(),c=vc(t),l=c;return a(hS,a(Gu,ge,$c(t)),a(v$,I(l,l,l),o))}),bS=v(function(n,e){return L(gS,!0,!0,n,e)}),AS=k(function(n,e,r){return{$:1,a:n,b:e,c:r}}),Id=k(function(n,e,r){return{$:2,a:n,b:e,c:r}}),_S=Hn(function(n,e,r,t,i){return{$:3,a:n,b:e,c:r,d:t,e:i}}),wS=function(n){switch(n.$){case 0:var e=n.a,r=n.b;return a(bd,e,r);case 1:var e=n.a,r=n.b,t=n.c;return p(AS,e,r,t);case 2:var e=n.a,r=n.b,i=n.c;return p(Id,e,r,i);default:var e=n.a,r=n.b,o=n.c,c=n.d,i=n.e;return D(_S,e,r,o,c,i)}},yS=wS,jd=function(n){switch(n.$){case 0:var e=n.a,r=n.b;return $([a(Vy,e,r)]);case 1:var e=n.a,t=n.b;return $([a(nS,e,t)]);case 3:var e=n.a,i=n.b;return $([a(bS,yS(e),i)]);case 2:var e=n.a,o=n.b;return $([a(qy,e,o)]);case 4:var c=n.a,l=n.b;return $([a(oS,Ny(c),l)]);default:var u=n.a;return a(Kr,jd,u)}},SS=function(n){return a(Kr,jd,n)},xS=v(function(n,e){return kw({f2:n.f2,a4:m4(n.f7),gl:n.gl,gt:Ce(n.gt),c_:n.c_,a7:M(js(In(n.cI.iK)),js(In(n.cI.g2))),bb:SS(e),gQ:n.gQ,hq:n.hq,iA:n.iA,iJ:n.iJ})}),Fd=function(n){return n},MS=v(function(n,e){var r=n,t=Oe(e.gI),i=t.iM,o=t.iQ,c=t.d4,l=a(Jo,e.co,e.a6),u=l;return{b6:Va(u),go:r,ck:Ba(u),dC:0,cE:Fa(u),dT:1,iM:-i,iQ:-o,d4:-c}}),CS=function(n){return a(MS,Fd(!0),{a6:n.a6,gI:a(g$,Je(n.b5),Je(n.ci)),co:n.co})},Ti=v(function(n,e){return{$:0,a:n,b:e}}),b$=v(function(n,e){var r=n,t=e;return on(t,r)>-1}),A$=v(function(n,e){var r=n,t=e;return r+.5*(t-r)}),PS=wr({iM:-1,iQ:0,d4:0}),LS=wr({iM:0,iQ:-1,d4:0}),zS=we(function(n,e,r,t,i,o){var c=a(b$,r,o)?gu:_u,l=a(b$,e,i)?Ru:LS,u=a(b$,n,t)?rs:PS,f=I(Rn(a(Nr,n,t)),Rn(a(Nr,e,i)),Rn(a(Nr,r,o))),d=p(ue,a(A$,n,t),a(A$,e,i),a(A$,r,o)),s=Vr({dt:d,d2:u,d3:l,d5:c});return{f6:s,a7:f}}),Bd=v(function(n,e){return On(zS,ma(n),sa(n),da(n),ma(e),sa(e),da(e))}),Vd=v(function(n,e){var r=e/2;return a(Ti,n,a(Bd,p(bi,-r,-r,-r),p(bi,r,r,r)))}),kS=v(function(n,e){return a(Tn,function(r){if(r.$===2){var t=r.a;return t}else return Wl},a(Nt,n,e.aQ))}),TS=v(function(n,e){return a(fn,Wl,ia(a(We,kS(n),e)))}),DS=v(function(n,e){return a(TS,n,e.gx)}),pa=DS,sc=function(n){return{$:5,a:n}},wt=function(n){return sc(n)},_$=function(n){return p(Lu,0,1,n<=.04045?n/12.92:a(oa,(n+.055)/1.055,2.4))},ES=function(n){var e=Yl(n),r=e.hP,t=e.gX,i=e.gb;return p(gi,_$(r),_$(t),_$(i))},Qr=function(n){return p(Id,0,s$(ES(n)),s$(0))},dc=v(function(n,e){return{$:2,a:n,b:e}}),w$=v(function(n,e){return{$:4,a:n,b:e}}),pc=v(function(n,e){return{$:3,a:n,b:e}}),y$=v(function(n,e){return{$:1,a:n,b:e}}),IS=k(function(n,e,r){return{iM:n,iQ:e,d4:r}}),jS=v(function(n,e){return{f6:a(ns,n,Yo(e)),a7:nc(e)}}),FS=v(function(n,e){var r=e;return a(Ie,a(st,n,r.dt),r.gI)}),BS=v(function(n,e){var r=e;return{o:a(FS,n,r.o),ho:r.ho,hN:r.hN}}),VS=function(n){return n},S$=v(function(n,e){var r=h$(e),t=r.a,i=r.b;return VS(M(n(t),n(i)))}),RS=v(function(n,e){return a(S$,st(n),e)}),hc=v(function(n,e){return{gp:e,hN:Rn(n)}}),NS=v(function(n,e){return a(hc,vc(e),a(st,n,$c(e)))}),x$=v(function(n,e){var r=e,t=r.a,i=r.b,o=r.c;return I(n(t),n(i),n(o))}),WS=v(function(n,e){return a(x$,st(n),e)}),gc=v(function(n,e){var r=n.a,t=n.b,i=n.c,o=p(IS,r,t,i);switch(e.$){case 0:var c=e.a,l=e.b;return a(Ti,c,a(jS,o,l));case 1:var c=e.a,u=e.b;return a(y$,c,a(WS,o,u));case 3:var c=e.a,f=e.b;return a(pc,c,a(NS,o,f));case 2:var c=e.a,d=e.b;return a(dc,c,a(BS,o,d));case 4:var c=e.a,s=e.b;return a(w$,c,a(RS,o,s));default:var g=e.a;return sc(a(W,gc(I(r,t,i)),g))}}),Na=function(n){return gc(I(n,0,0))},ha=function(n){return gc(I(0,n,0))},xr=function(n){return gc(I(0,0,n))},Rd=v(function(n,e){var r=function(t){var i=t.a,o=t.b;return a(ha,o,a(Na,i,a(xr,-.495,a(Vd,Qr(a(pa,"board color",n)),1))))};return wt(a(W,r,ft(ve(e.a).cr)))}),Di=v(function(n,e){var r=e.a,t=e.b,i=e.c,o=I(r/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(Ti,n,a(Bd,p(bi,-c,-l,-u),p(bi,c,l,u)))}),HS=function(n){return a(oa,n,2)},QS=k(function(n,e,r){return{f6:p(Xm,n,e,Yo(r)),a7:nc(r)}}),GS=v(function(n,e){var r=a(pi,n,e),t=a(Vo,n,e);return function(i){var o=i;return a(Ie,r(o.dt),t(o.gI))}}),US=k(function(n,e,r){var t=r;return{o:p(GS,n,e,t.o),ho:t.ho,hN:t.hN}}),JS=k(function(n,e,r){return a(S$,a(pi,n,e),r)}),OS=k(function(n,e,r){return a(hc,vc(r),p(pi,n,e,$c(r)))}),qS=k(function(n,e,r){return a(x$,a(pi,n,e),r)}),Ei=k(function(n,e,r){switch(r.$){case 0:var t=r.a,i=r.b;return a(Ti,t,p(QS,n,e,i));case 1:var t=r.a,o=r.b;return a(y$,t,p(qS,n,e,o));case 3:var t=r.a,c=r.b;return a(pc,t,p(OS,n,e,c));case 2:var t=r.a,l=r.b;return a(dc,t,p(US,n,e,l));case 4:var t=r.a,u=r.b;return a(w$,t,p(JS,n,e,u));default:var f=r.a;return sc(a(W,a(Ei,n,e),f))}}),Nd=v(function(n,e){var r=n.a,t=n.b,i=t.a,o=t.b,c=t.c;return a(Ei,a(Ie,hu(r),wr({iM:i,iQ:o,d4:c})),Je(e))}),Wd=k(function(n,e,r){var t=e.dP;switch(t.$){case 1:var i=t.a.au,o=t.a.cK,c=t.a.bP;if(t.a.dp,Z(o,r)){var l=function(){switch(c){case 0:return M({iM:.5,iQ:.5,d4:-.5},I(-1,0,0));case 1:return M({iM:-.5,iQ:-.5,d4:-.5},I(1,0,0));case 2:return M({iM:-.5,iQ:.5,d4:-.5},I(0,-1,0));default:return M({iM:.5,iQ:-.5,d4:-.5},I(0,1,0))}}(),u=a(ne,"duration of step animation",n),f=(n.aa-i)/u,d=HS(f),s=a(He,ae(90),d*ae(90));return a(Nd,l,s)}else return Yn;case 2:var i=t.a.au,o=t.a.cK,c=t.a.bP;if(Z(o,r)){var l=function(){switch(c){case 0:return M({iM:.5,iQ:.5,d4:-.5},I(-1,0,0));case 1:return M({iM:-.5,iQ:-.5,d4:-.5},I(1,0,0));case 2:return M({iM:-.5,iQ:.5,d4:-.5},I(0,-1,0));default:return M({iM:.5,iQ:-.5,d4:-.5},I(0,1,0))}}(),u=a(ne,"duration of mistake animation",n),f=(n.aa-i)/u,d=ja(Ge*f),s=p(Lu,ae(0),ae(45),d*ae(45));return a(Nd,l,s)}else return Yn;default:return Yn}}),YS=a(Ie,ge,Wo),Wa=v(function(n,e){return p(Ei,YS,Je(n),e)}),ZS=a(Ie,ge,Nu),bc=v(function(n,e){return p(Ei,ZS,Je(n),e)}),XS=v(function(n,e){var r=a(ne,"cubes side length",n),t=a(pa,"color 2",n),i=a(xr,-(r/4),a(Di,Qr(t),I(r,r,r/2))),o=a(pa,"color 1",n),c=a(xr,r/4,a(Di,Qr(o),I(r,r,r/2))),l=ve(e.a).eE,u=l.a,f=u.a,d=u.b,s=l.b,g=function(){if(s.b)switch(s.a){case 2:return s.a,s.b,Wa(ae(180));case 1:return s.a,s.b,Wa(ae(90));default:return s.a,s.b,bc(-ae(90))}else switch(s.a){case 2:return s.a,s.b,Yn;case 1:return s.a,s.b,Wa(-ae(90));default:return s.a,s.b,bc(ae(90))}}();return a(ha,d,a(Na,f,a(xr,r/2,L(Wd,n,e,M(f,d),g(wt($([c,i])))))))}),KS=k(function(n,e,r){return{o:a(Ie,n,e),ho:Rn(r.ho),hN:Rn(r.hN)}}),nx=k(function(n,e,r){return a(dc,n,p(KS,ge,Ru,{ho:Ce(r),hN:Ce(e)}))}),ex=v(function(n,e){return(e-wa(e/n)*n)/n}),rx=function(n){return 2*Ge*n},M$=U(function(n,e,r,t){return n+(e-n)*(1+Ia(rx(a(ex,r,t))))/2}),ax=v(function(n,e){var r=ve(e.a).cr.hn,t=r.a,i=r.b;return a(ha,i,a(Na,t,a(xr,L(M$,-.3,-.4,.5,n.aa),a(Wa,ae(90),p(nx,Qr(a(pa,"finish mark color",n)),.3,1)))))}),tx=v(function(n,e){var r=a(ne,"cubes side length",n),t=a(pa,"color 2",n),i=a(xr,-(r/4),a(Di,Qr(t),I(r,r,r/2))),o=a(pa,"color 1",n),c=a(xr,r/4,a(Di,Qr(o),I(r,r,r/2))),l=ve(e.a).dD,u=l.a,f=u.a,d=u.b,s=l.b,g=function(){if(s.b)switch(s.a){case 2:return s.a,s.b,Wa(ae(180));case 1:return s.a,s.b,Wa(ae(90));default:return s.a,s.b,bc(-ae(90))}else switch(s.a){case 2:return s.a,s.b,Yn;case 1:return s.a,s.b,Wa(-ae(90));default:return s.a,s.b,bc(ae(90))}}();return a(ha,d,a(Na,f,a(xr,r/2,L(Wd,n,e,M(f,d),g(wt($([c,i])))))))}),ix=U(function(n,e,r,t){var i=I(n,e,r),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,f=l*2-u,d=function(A){var _=A<0?A+1:A>1?A-1:A;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},s=d(o-1/3),g=d(o),m=d(o+1/3);return L(aa,m,g,s,t)}),ox=k(function(n,e,r){return L(ix,n,e,r,1)}),Ii=k(function(n,e,r){var t=n,i=r;return{iM:t.iM+e*(i.iM-t.iM),iQ:t.iQ+e*(i.iQ-t.iQ),d4:t.d4+e*(i.d4-t.d4)}}),cx=k(function(n,e,r){var t=Yo(r),i=la(t),o=ua(t),c=$a(t),l=p(Ii,n,e,Ea(t)),u=e>=0?Vr({dt:l,d2:i,d3:o,d5:c}):Vr({dt:l,d2:fa(i),d3:fa(o),d5:fa(c)}),f=nc(r),d=f.a,s=f.b,g=f.c,m=Rn(a(Mn,e,d)),A=Rn(a(Mn,e,s)),_=Rn(a(Mn,e,g));return{f6:u,a7:I(m,A,_)}}),Hd=function(n){return Ro(d$(n))},lx=function(n){return bu(d$(n))},ux=k(function(n,e,r){var t=Rn(a(Mn,e,Md(r))),i=Rn(a(Mn,e,xd(r))),o=e>=0?Hd(r):fa(Hd(r)),c=p(Ii,n,e,lx(r));return{o:a(Ie,c,o),ho:i,hN:t}}),$x=k(function(n,e,r){return a(S$,a(Ii,n,e),r)}),vx=k(function(n,e,r){return a(hc,a(Mn,sn(e),vc(r)),p(Ii,n,e,$c(r)))}),fx=k(function(n,e,r){return a(x$,a(Ii,n,e),r)}),Qd=v(function(n,e){switch(e.$){case 0:var r=e.a,t=e.b;return a(Ti,r,p(cx,ge,n,t));case 1:var r=e.a,i=e.b;return a(y$,r,p(fx,ge,n,i));case 3:var r=e.a,o=e.b;return a(pc,r,p(vx,ge,n,o));case 2:var r=e.a,c=e.b;return a(dc,r,p(ux,ge,n,c));case 4:var r=e.a,l=e.b;return a(w$,r,p($x,ge,n,l));default:var u=e.a;return sc(a(W,Qd(n),u))}}),mx=L(aa,255/255,255/255,255/255,1),sx=v(function(n,e){var r=function(o){var c=e.dP;return c.$===3?p(ox,L(M$,0,1,6,n.aa+.03*o),1,.8):mx},t=function(o){var c=e.dP;return c.$===3?a(xn,Qd(.9),xr(L(M$,.1,.7,6,n.aa+.3*o))):Yn},i=v(function(o,c){var l=c.a,u=c.b;return a(ha,u,a(Na,l,a(xr,-.49,a(t,o,a(Vd,Qr(r(o)),1)))))});return wt(a(Et,i,ft(ve(e.a).fi)))}),dx=L(aa,164/255,0/255,0/255,1),px=L(aa,239/255,41/255,41/255,1),hx=v(function(n,e){return a(pc,n,a(hc,Ce(e),ge))}),gx=v(function(n,e){var r=n.dE.ex?px:dx,t=e.bw,i=t.a,o=t.b;return a(ha,o,a(Na,i,a(hx,Qr(r),.2)))}),bx=v(function(n,e){return M(n,e)}),Ax=function(n){var e=n.hn,r=n.bN;return p(Sv,bx,a(x,e,r),r)},Gd=v(function(n,e){var r=n.a,t=n.b,i=function(o){var c=o.a,l=c.a,u=c.b,f=o.b,d=f.a,s=f.b;return t?Z(r,c)&&Z(d,l+1)||Z(r,f)&&Z(d,l-1):Z(r,c)&&Z(s,u-1)||Z(r,f)&&Z(s,u+1)};return a(Dr,i,Ax(e))}),_x=a(Ie,ge,Ho),wx=v(function(n,e){return p(Ei,_x,Je(n),e)}),Ud=v(function(n,e){var r=e.a,t=r.a,i=r.b,o=e.b,c=1-a(ne,"cubes side length",n),l=a(ha,-.5,a(Di,Qr(a(pa,"wall color",n)),I(1+c,c,c))),u=a(wx,ae(90),l);return a(ha,i,a(Na,t,function(){return o?u:l}()))}),Ac=v(function(n,e){return{$:0,a:n,b:e}}),yx=function(n){return $([a(Ac,n,0),a(Ac,n,1),a(Ac,a(Eo,0,n),0),a(Ac,a(Eo,2,n),1)])},Jd=function(n){return a(Kr,yx,ft(n))},Sx=v(function(n,e){var r=a(fn,ve(e.a).cr,e.q.e8);return wt(a(W,Ud(n),a(Ca,function(t){return!a(Gd,t,r)},Jd(r))))}),xx=v(function(n,e){return wt(a(W,Ud(n),a(Ca,function(r){return!a(Gd,r,ve(e.a).fi)},Jd(ve(e.a).cr))))}),Mx=function(n){return n},Cx=function(n){return Mx(1.2*a(oa,2,n))},C$=Pu({iM:.37208,iQ:.37529}),Px={$:5},Lx=Px,zx=Pu({iM:.44757,iQ:.40745}),kx=function(n){return n},Od=function(n){return n},P$=function(n){return n},Tx={$:1},Dx=Tx,Ex=v(function(n,e){var r=n,t=yi(e.fl),i=t.iM,o=t.iQ,c=t.d4,l=a(Jo,e.co,e.a6),u=l;return{b6:Va(u),go:r,ck:Ba(u),dC:0,cE:Fa(u),dT:2,iM:i,iQ:o,d4:c}}),qd=function(n){return a(Ex,Fd(!0),{a6:n.a6,co:n.co,fl:hu(n.fl)})},Ix=v(function(n,e){var r=n,t=e;return on(t,r)>0}),Yd=function(n){var e=n;return e},jx=function(n){n:for(;;){if(Z(n.ev,Rr)&&Z(n.ew,Rr))return Ae;if(a(Ix,Rn(n.ev),Rn(n.ew))){var e={a6:n.a6,ev:n.ew,ew:n.ev,fF:fa(n.fF)};n=e;continue n}else{var r=sn(Yd(n.ew)/Ge),t=sn(Yd(n.ev)/Ge),i=Oe(n.fF),o=i.iM,c=i.iQ,l=i.d4,u=a(Jo,Qs(1),n.a6),f=u;return{b6:t*Va(f),go:!1,ck:t*Ba(f),dC:r/t,cE:t*Fa(f),dT:3,iM:o,iQ:c,d4:l}}}},Fx=function(n){return jx({a6:n.a6,ev:n.ev,ew:n.ew,fF:a(g$,Je(n.b5),Je(n.ci))})},Bx=v(function(n,e){return{$:2,a:n,b:e}}),Zd=function(n){return{$:0,a:n}},_c=function(n){var e=n;return e},Vx=function(n){var e=n;return e.go},Rx=Zd(wi.a),Nx=v(function(n,e){var r=v(function(t,i){var o=i.a,c=i.b;return n(t)?M(a(x,t,o),c):M(o,a(x,t,c))});return p(Zn,r,M(z,z),e)}),Wx=function(n){var e=n;return Sr({eK:e.iM,eL:e.cE,eM:0,eN:0,eO:e.iQ,eP:e.ck,eQ:0,eR:0,eS:e.d4,eT:e.b6,eU:0,eV:0,eW:e.dT,eX:e.dC,eY:0,eZ:0})},Hx=Cn(function(n,e,r,t,i,o,c,l){var u=a(Nx,Vx,$([_c(n),_c(e),_c(r),_c(t)])),f=u.a,d=u.b;if(f.b){var s=N(f,d);if(s.b&&s.b.b&&s.b.b.b&&s.b.b.b.b&&!s.b.b.b.b.b){var g=s.a,m=s.b,A=m.a,_=m.b,y=_.a,S=_.b,w=S.a;return a(Bx,a(W,Wx,f),{bJ:a(qe,g,A),cs:a(qe,y,w),ct:a(qe,i,o),cu:a(qe,c,l)})}else return Rx}else return Zd({bJ:a(qe,n,e),cs:a(qe,r,t),ct:a(qe,i,o),cu:a(qe,c,l)})}),Qx=v(function(n,e){return Ct(Hx,n,e,Ae,Ae,Ae,Ae,Ae,Ae)}),Gx=v(function(n,e){CS({b5:a(ne,"azimuth for third light",n),a6:f4(kx(2e3)),ci:a(ne,"elevation for third light",n),co:P$(100)}),Fx({b5:a(ne,"azimuth for fourth light",n),a6:C$,ci:a(ne,"elevation for fourth light",n),ev:P$(120),ew:P$(40)});var r=ve(e.a).dD,t=r.a,i=t.a,o=t.b,c=function(){var s=e.dP;if(s.$===1){var g=s.a.au,m=s.a.bP,A=a(ne,"duration of step animation",n),_=(n.aa-g)/A,y=function(){switch(m){case 0:return M(0,_);case 1:return M(0,-_);case 2:return M(-_,0);default:return M(_,0)}}(),S=y.a,w=y.b;return M(i+S,o+w)}else return M(i,o)}(),l=c.a,u=c.b,f=qd({a6:zx,co:Od(a(ne,"lumens of following lights",n)),fl:{iM:l+.5,iQ:u+.5,d4:a(ne,"height of following lights",n)}}),d=qd({a6:C$,co:Od(a(ne,"lumens of following lights",n)),fl:{iM:l-.5,iQ:u-.5,d4:a(ne,"height of following lights",n)}});return a(xS,{f2:Dx,f7:a(pa,"background color",n),gl:a(as,n,e),gt:.1,c_:n.c_,gQ:Cx(6),hq:a(Qx,f,d),cI:n.cI,iA:Lx,iJ:C$},e.q.c4?$([a(Rd,n,e),a(XS,n,e),a(Sx,n,e),a(gx,n,e)]):$([a(Rd,n,e),a(tx,n,e),a(ax,n,e),a(xx,n,e),a(sx,n,e)]))}),Ux=v(function(n,e){return a(Xr,z,$([a($4,n,e),a(Gx,n,e)]))}),Jx=p(pe,23,23,23),Ox=a(Qe,Vl,h.$9),L$=function(n){return a(gn,$([J(nn),a(ti,0,10),Ox,br(20)]),he(n))},qx={$:10},Yx=p(pe,42,123,154),yt=v(function(n,e){return a($u,$([Me(Co),a(ti,10,6),ce(Yx),Ue(8)]),{c8:he(n),hB:j(e)})}),Zx=function(n){return a(gn,$([J(nn),vn(yn(100)),tr(10),ce(it),Me(ut),ui($([$i])),ai,ke(a(Sn,"user-select","text")),Ue(10)]),he(n.q.c5))},Xx=v(function(n,e){return a(Un,$([Kn(10),J(nn)]),$([a(yt,"Export Levels",qx),Zx(e)]))}),Kx={$:11},nM=function(n){return{$:12,a:n}},eM=function(n){return{$:0,a:n}},rM={$:1},aM=a(sr,dn,_o("autocomplete")),tM=function(n){var e=v(function(i,o){if(i.$===4&&i.b.$===5){var c=i.b;c.b;var l=c.c;return o.$===1?j(l):o}else return o}),r=p(Zn,e,B,n);if(r.$===1)return Te;var t=r.a;return mm(wa(t/2))},Xd=a(Qe,am,h.gs),iM=p(ta,186/255,189/255,182/255),oM=a(ti,12,12),cM=$([oM,Ue(3),ar(iM),ce(So),$t(1),Kn(5),J(nn),vn(Xn)]),lM=function(n){if(n.$===8){var e=n.a;return j(e)}else return B},uM=function(n){n:for(;;)switch(n.$){case 1:return!1;case 0:return!0;case 2:return!0;case 3:var e=n.b,r=e;n=r;continue n;default:var e=n.b;return!0}},$M=function(n){if(n.$)return!0;var e=n.a;switch(e){case 0:return!1;case 1:return!1;case 2:return!0;default:return!0}},vM=function(n){return{b8:-n.b8,eB:-n.eB,fs:-n.fs,cN:-n.cN}},Kd=function(n){n:for(;;)switch(n.$){case 2:return!0;case 1:return!1;case 0:return!1;case 3:var e=n.b,r=e;n=r;continue n;default:var e=n.b,r=e;n=r;continue n}},fM=function(n){n:for(;;)switch(n.$){case 1:return!1;case 0:return!0;case 2:return!1;case 3:var e=n.b,r=e;n=r;continue n;default:var e=n.b,r=e;n=r;continue n}},n1=U(function(n,e,r,t){return"pad-"+(Ln(n)+("-"+(Ln(e)+("-"+(Ln(r)+("-"+Ln(t)))))))}),mM=U(function(n,e,r,t){switch(r.$){case 9:return V(t,{c:a(x,r,t.c)});case 7:var i=r.a;return Kd(i)?V(t,{n:a(x,r,t.n),I:a(x,r,t.I),c:a(x,r,t.c)}):e?V(t,{n:a(x,r,t.n)}):V(t,{c:a(x,r,t.c)});case 8:var o=r.a;return e?Kd(o)?V(t,{n:a(x,r,t.n),c:a(x,r,t.c)}):fM(o)?V(t,{c:a(x,r,t.c)}):V(t,{c:a(x,r,t.c)}):V(t,{n:a(x,r,t.n),c:a(x,r,t.c)});case 6:return V(t,{n:a(x,r,t.n)});case 5:return V(t,{n:a(x,r,t.n)});case 4:switch(r.b.$){case 5:return r.b,V(t,{n:a(x,r,t.n),I:a(x,r,t.I),c:a(x,r,t.c),br:a(x,r,t.br)});case 7:r.a;var c=r.b;c.a;var l=c.b,u=c.c,f=c.d,d=c.e;if(n)return V(t,{V:a(x,r,t.V),c:a(x,r,t.c)});var s=l-a(He,l,f),g=ke(a(Sn,"line-height","calc(1.0em + "+(tn(2*a(He,l,f))+"px)"))),m=ke(a(Sn,"height","calc(1.0em + "+(tn(2*a(He,l,f))+"px)"))),A=f-a(He,l,f),_=a(hn,ka,D(za,L(n1,s,u,A,d),s,u,A,d));return V(t,{V:a(x,r,t.V),I:a(x,m,a(x,g,t.I)),c:a(x,_,t.c)});case 6:return r.b,V(t,{V:a(x,r,t.V),c:a(x,r,t.c)});case 10:return V(t,{V:a(x,r,t.V),c:a(x,r,t.c)});case 2:return V(t,{n:a(x,r,t.n)});case 1:return r.b,V(t,{n:a(x,r,t.n)});default:return r.a,r.b,V(t,{c:a(x,r,t.c)})}case 0:return t;case 1:return r.a,V(t,{I:a(x,r,t.I)});case 2:return V(t,{I:a(x,r,t.I)});case 3:return V(t,{c:a(x,r,t.c)});default:return V(t,{I:a(x,r,t.I)})}}),sM=k(function(n,e,r){return function(t){return{V:kn(t.V),n:kn(t.n),I:kn(t.I),c:kn(t.c),br:kn(t.br)}}(p(jn,a(mM,n,e),{V:z,n:z,I:z,c:z,br:z},r))}),dM=function(n){var e=n.cN,r=n.fs,t=n.b8,i=n.eB;return T(e)+("px "+(T(r)+("px "+(T(t)+("px "+(T(i)+"px"))))))},pM=function(n){var e=function(r){return 1-r}(a(He,1,a(qn,0,n)));return a(hn,nu,a(Kl,"transparency-"+Ln(e),e))},hM=p(ta,136/255,138/255,133/255),e1=k(function(n,e,r){var t=n.a,i=n.b;return a(gn,N(e,N($([Me(hM),Fn(h.e9+(" "+h.hI)),Xd,ar(L(Xl,0,0,0,0)),ce(L(Xl,0,0,0,0)),vn(nn),J(nn),pM(r?1:0)]),t)),i)}),gM=km("spellcheck"),bM=a(sr,dn,gM),AM=a(sr,dn,cu),_M=k(function(n,e,r){var t=N(cM,e),i=p(sM,Z(n.dT,rM),$M(r.c8),t),o=function(){var d=n.dT;return d.$?a(fn,!1,a(Tn,uM,ia(kn(a(We,lM,t))))):(d.a,!1)}(),c=function(d){if(d.$===4&&d.b.$===7){d.a;var s=d.b;s.a;var g=s.b,m=s.c,A=s.d,_=s.e;return j({b8:a(qn,0,wa(A-3)),eB:a(qn,0,wa(_-3)),fs:a(qn,0,wa(m-3)),cN:a(qn,0,wa(g-3))})}else return B},l=a(fn,{b8:0,eB:0,fs:0,cN:0},ia(kn(a(We,c,t)))),u=L(Vn,oe,function(){var d=n.dT;return d.$?hr("textarea"):(d.a,hr("input"))}(),N(function(){var d=n.dT;if(d.$)return $([Xd,vn(nn),Fn(h.he),tM(t),Cm(l),dn(a(Sn,"margin",dM(vM(l)))),dn(a(Sn,"box-sizing","content-box"))]);var s=d.a;return $([dn(ou(s)),Fn(h.hi)])}(),N($([AM(r.ij),dn(iu(r.fb)),Gl(r.c8),bM(n.ak),a(fn,Te,a(Tn,aM,n.ad))]),i.I)),En(z)),f=function(){var d=n.dT;return d.$===1?L(Vn,oe,ye,N((o?x(ai):Yn)($([J(nn),a(Dr,uu,t)?Te:Fn(h.el),Fn(h.hh)])),i.c),En($([L(Vn,Gt,ye,a(x,J(nn),a(x,vn(nn),a(x,lo(u),a(x,Fn(h.hg),i.br)))),En(function(){if(r.ij===""){var s=r.hK;if(s.$===1)return $([he("\xA0")]);var g=s.a;return $([p(e1,g,z,r.ij==="")])}else return $([rf(a(hi,$([De(h.hf)]),$([rr(r.ij+"\xA0")])))])}()))]))):(d.a,L(Vn,oe,ye,a(x,J(nn),a(x,a(Dr,uu,t)?Te:Fn(h.el),de($([i.c,function(){var s=r.hK;if(s.$===1)return z;var g=s.a;return $([Mo(p(e1,g,i.V,r.ij===""))])}()])))),En($([u]))))}();return p(Ql,a(x,a(Qe,cm,h.gC),a(x,Ul(r.c8)?Te:Kn(5),a(x,Hl,i.n))),r.c8,f)}),wM=_M({ad:B,ak:!1,dT:eM("text")}),yM=function(n){return a(wM,$([J(nn),vn(yn(100)),tr(10),ce(it),Me(ut),ui($([$i])),ai,ke(a(Sn,"user-select","text")),Ue(10)]),{c8:Pm("Imported Levels"),fb:nM,hK:B,ij:n.q.c6})},SM=v(function(n,e){return a(Un,$([Kn(10),J(nn)]),$([a(yt,"Import Levels",Kx),yM(e)]))}),xM=v(function(n,e){return a(Un,$([J(nn),Kn(10)]),$([L$("Import/Export Levels"),a(Xx,n,e),a(SM,n,e)]))}),MM={$:7},CM=function(n){return{$:4,a:n}},PM={$:9},LM={$:8},zM=function(n){var e=n;return e.m},kM=function(n){return vr(zM(n))+1},TM=p(pe,140,140,140),DM=Hn(function(n,e,r,t,i){return{$:0,a:n,b:e,c:r,d:t,e:i}}),EM=k(function(n,e,r){return{$:0,a:n,b:e,c:r}}),IM=function(n){return p(Zn,v(function(e,r){var t=r.a,i=r.b;return M(function(){if(t.$)if(e.$===4&&e.b.$===7){var o=e.b,c=o.a,l=o.b,u=o.c,f=o.d,d=o.e;return j(D(DM,c,l,u,f,d))}else return B;else return t.a,t}(),function(){if(i.$)if(e.$===4&&e.b.$===5){var c=e.b,l=c.a,o=c.b,u=c.c;return j(p(EM,l,o,u))}else return B;else{var o=i.a;return i}}())}),M(B,B),n)},jM=v(function(n,e){var r=IM(n),t=r.a,i=r.b;if(i.$===1)return L(Vn,lt,ye,a(x,Fn(h.bx+(" "+(h.aA+(" "+h.d0)))),a(x,J(Xn),a(x,vn(Xn),n))),En(e));var o=i.a,c=o.a,l=o.b,u=o.c,f=function(){if(t.$)return B;var m=t.a;m.a;var A=m.b,_=m.c,y=m.d,S=m.e;if(on(_,l/2)>-1&&on(y,u/2)>-1){var w=A-u/2,C=_-l/2,F=S-l/2,q=y-u/2;return j(a(hn,ka,D(za,L(n1,w,C,q,F),w,C,q,F)))}else return B}();if(f.$){var s=-(u/2),g=-(l/2);return L(Vn,oe,ye,n,En($([L(Vn,lt,ye,a(x,Fn(h.bx+(" "+(h.aA+(" "+h.d0)))),a(x,dn(a(Sn,"margin",tn(s)+("px"+(" "+(tn(g)+"px"))))),a(x,dn(a(Sn,"width","calc(100% + "+(T(l)+"px)"))),a(x,dn(a(Sn,"height","calc(100% + "+(T(u)+"px)"))),a(x,a(hn,Bl,p(Fl,c,l,u)),z))))),En(e))])))}else{var d=f.a;return L(Vn,lt,ye,a(x,Fn(h.bx+(" "+(h.aA+(" "+h.d0)))),a(x,J(Xn),a(x,vn(Xn),N(n,$([d]))))),En(e))}}),FM=v(function(n,e){var r=v(function(t,i){return a(gn,$([J(yn(30)),vn(yn(30)),br(20),vi(CM(t+1)),ce(TM),Br,Ue(6),ar(it),$t(Z(kM(e.a),t+1)?4:0)]),a(gn,$([wo,Ar]),he(T(t+1))))});return a(Un,$([Kn(10)]),$([L$("Level Selector"),a(jM,$([Kn(10)]),a(Et,r,ss(e.a))),a(Fr,$([Kn(10)]),$([a(yt,"Add level",MM),a(yt,"Remove level",LM),a(yt,"Move level up",PM)]))]))}),BM=function(n){return{$:2,a:n}},VM={$:3},RM={$:1},NM=p(pe,180,180,180),WM=v(function(n,e){return{$:11,a:n,b:e}}),HM=v(function(n,e){switch(e.$){case 0:return Te;case 2:var r=e.a;return oi(r);case 6:var t=e.a;return ii(t);case 5:var i=e.a;return ri(i);case 7:var t=e.a;return jl(t);case 8:var t=e.a;return ml(t);case 3:var t=e.a,i=e.b;return a(Qe,t,i);case 4:var o=e.a,c=e.b;return a(hn,o,c);case 9:var l=e.a,u=e.b;return a(sl,l,a(Dl,n,u));case 1:var f=e.a;return dn(a(wm,n,f));default:var d=e.a,s=e.b;return a(yo,d,s)}}),QM=function(n){return a(HM,qa,n)},GM=v(function(n,e){var r=e.a,t=e.b,i=QM(n);switch(i.$){case 4:var o=i.b;return M(a(x,o,r),t);case 10:i.a;var c=i.b;return M(r,a(jf,t,c));default:return M(r,t)}}),UM=function(n){var e=p(jn,GM,M(z,Wf),n),r=e.a,t=e.b;return a(x,Tf(t),r)},JM=function(n){return a(hn,_m,a(WM,1,UM(n)))},OM=function(n){return a(Ol,"mouseenter",Gn(n))},qM=a(sr,dn,OM),YM=function(n){return a(Ol,"mouseleave",Gn(n))},ZM=a(sr,dn,YM),XM=v(function(n,e){return a(Un,z,$([L$("Solutions"),a(Un,$([Kn(10)]),$([a(yt,"Calculate all solutions",RM),a(Un,$([Kn(4)]),a(Et,v(function(r,t){return a(gn,$([qM(BM(t)),ZM(VM),ce(NM),JM($([ce(it),Me(ut)])),Br,tr(10)]),he("Solution "+T(r)))}),ve(e.a).ea))]))]))}),KM=v(function(n,e){return e.q.c4?$([a(FM,n,e),a(XM,n,e),a(xM,n,e)]):z}),nC=function(n){return{$:0,a:n}},eC=tu(1),rC=v(function(n,e){return a($m,z,{gr:e.q.c4,g7:sm,c8:a(eC,z,he("Editor")),fb:nC})}),aC=v(function(n,e){return a(Un,$([J(nn),vn(nn)]),$([a(Un,$([Il,Lm,J(yn(500)),vn(nn),tr(20),Kn(20),Me(Jx),br(13)]),a(x,a(rC,n,e),a(KM,n,e)))]))}),tC=On(Zb,Ux,j_,fA,lA,aC,l4);const iC={Main:{init:tC(a(O,function(n){return Gn({hj:n})},a(R,"inputs",a(O,function(n){return a(O,function(e){return a(O,function(r){return a(O,function(t){return a(O,function(i){return a(O,function(o){return a(O,function(c){return Gn({aa:c,c_:o,gL:i,eA:t,dE:r,cI:e,iI:n})},a(R,"clock",re))},a(R,"devicePixelRatio",re))},a(R,"dt",re))},a(R,"keyboard",a(O,function(t){return a(O,function(i){return a(O,function(o){return a(O,function(c){return a(O,function(l){return a(O,function(u){return a(O,function(f){return a(O,function(d){return a(O,function(s){return Gn({f1:s,gz:d,c0:f,gK:u,eB:l,hM:c,fs:o,h1:i,dW:t})},a(R,"alt",Pn))},a(R,"control",Pn))},a(R,"down",Pn))},a(R,"downs",qr(Yr)))},a(R,"left",Pn))},a(R,"pressedKeys",qr(Yr)))},a(R,"right",Pn))},a(R,"shift",Pn))},a(R,"up",Pn))))},a(R,"pointer",a(O,function(r){return a(O,function(t){return a(O,function(i){return a(O,function(o){return a(O,function(c){return a(O,function(l){return a(O,function(u){return a(O,function(f){return Gn({c0:f,ex:u,hu:l,hS:c,hT:o,dW:i,iM:t,iQ:r})},a(R,"down",Pn))},a(R,"isDown",Pn))},a(R,"move",Pn))},a(R,"rightDown",Pn))},a(R,"rightUp",Pn))},a(R,"up",Pn))},a(R,"x",re))},a(R,"y",re))))},a(R,"screen",a(O,function(e){return a(O,function(r){return Gn({g2:r,iK:e})},a(R,"height",re))},a(R,"width",re))))},a(R,"wheel",a(O,function(n){return a(O,function(e){return Gn({gD:e,gE:n})},a(R,"deltaX",re))},a(R,"deltaY",re)))))))(0)}},rn={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},oC=n=>{const e=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),r=m=>["AltLeft","AltRight"].includes(m.code),t=m=>["ShiftLeft","ShiftRight"].includes(m.code),i=m=>m.code=="ArrowLeft",o=m=>m.code=="ArrowRight",c=m=>m.code=="ArrowUp",l=m=>m.code=="ArrowDown",u=m=>m.button==0,f=m=>m.button==2;function d(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function s(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(rn.keyboard.downs.push(m.code),rn.keyboard.pressedKeys.push(m.code),e(m)&&(rn.keyboard.control=!0),r(m)&&(rn.keyboard.alt=!0),t(m)&&(console.log("yo"),rn.keyboard.shift=!0),i(m)&&(rn.keyboard.left=!0),o(m)&&(rn.keyboard.right=!0),c(m)&&(rn.keyboard.up=!0),l(m)&&(console.log("yey"),rn.keyboard.down=!0))}),window.addEventListener("keyup",m=>{rn.keyboard.pressedKeys=rn.keyboard.pressedKeys.filter(A=>A!=m.code),e(m)&&(rn.keyboard.control=!1,rn.keyboard.pressedKeys=[]),r(m)&&(rn.keyboard.alt=!1),t(m)&&(rn.keyboard.shift=!1),i(m)&&(rn.keyboard.left=!1),o(m)&&(rn.keyboard.right=!1),c(m)&&(rn.keyboard.up=!1),l(m)&&(rn.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{rn.pointer.x=-.5*rn.screen.width+m.pageX,rn.pointer.y=.5*rn.screen.height-m.pageY,u(m)&&(rn.pointer.down=!0,rn.pointer.isDown=!0),f(m)&&(rn.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{rn.pointer.move=!0,rn.pointer.x=-.5*rn.screen.width+m.pageX,rn.pointer.y=.5*rn.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{u(m)&&(rn.pointer.up=!0,rn.pointer.isDown=!1),f(m)&&(rn.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{u(m)&&(rn.pointer.up=!0,rn.pointer.isDown=!1),f(m)&&(rn.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{rn.wheel.deltaX=m.deltaX,rn.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{d(rn)}),window.addEventListener("focus",m=>{d(rn)}),window.addEventListener("visibilitychange",m=>{d(rn)}),window.addEventListener("resize",()=>{rn.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(m){const A=m/1e3,_=A-rn.clock;_<.009||(rn.dt=_,rn.clock=A,n.ports.tick.send(rn),s(rn)),window.requestAnimationFrame(g)}},cC=iC.Main.init({node:document.querySelector("#app div"),flags:{inputs:rn}});oC(cC);
