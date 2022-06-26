const Iu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Iu();function hr(e,r,n){return n.a=e,n.f=r,n}function v(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Je(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ma(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ut(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Le(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Da(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Uu(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Ju=[];function Ou(e){return e.length}var qu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Yu=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Zu=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function Kr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function br(e,r){for(var n,a=[],t=gt(e,r,0,a);t&&(n=a.pop());t=gt(n.a,n.b,0,a));return t}function gt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Kr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=pi(e),r=pi(r));for(var t in e)if(!gt(e[t],r[t],n+1,a))return!1;return!0}v(br);v(function(e,r){return!br(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return J(e,r)<0});v(function(e,r){return J(e,r)<1});v(function(e,r){return J(e,r)>0});v(function(e,r){return J(e,r)>=0});var ev=v(function(e,r){var n=J(e,r);return n<0?Bc:n?Ef:Ac}),Mn=0;function P(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Ye(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var L={$:0};function nr(e,r){return{$:1,a:e,b:r}}var rv=v(nr);function h(e){for(var r=L,n=e.length;n--;)r=nr(e[n],r);return r}function Aa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Je(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});v(function(e,r){return h(Aa(r).sort(function(n,a){return J(e(n),e(a))}))});v(function(e,r){return h(Aa(r).sort(function(n,a){var t=o(e,n,a);return t===Ac?0:t===Bc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var av=v(Math.pow);v(function(e,r){return r%e});var tv=v(function(e,r){var n=r%e;return e===0?Kr(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin,lv=Math.tan;v(Math.atan2);function uv(e){return e}function vv(e){return e===1/0||e===-1/0}var $v=Math.ceil,fv=Math.floor,sv=Math.round,dv=Math.sqrt,ni=Math.log,mv=isNaN;function pv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var bv=v(function(e,r){return e+r});function gv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function hv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function _v(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var wv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),yv=v(function(e,r){return r.split(e)}),xv=v(function(e,r){return r.join(e)}),Sv=y(function(e,r,n){return n.slice(e,r)});function Tv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=v(function(e,r){return r.indexOf(e)>-1}),Pv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=v(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function cc(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function Mv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function Dv(e){return Aa(e).join("")}function Av(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fv(e){return{$:0,a:e}}function Ot(e){return{$:2,b:e}}var Vv=Ot(function(e){return typeof e=="boolean"?ue(e):qe("a BOOL",e)}),Rv=Ot(function(e){return typeof e=="number"?ue(e):qe("a FLOAT",e)}),Ev=Ot(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):qe("a STRING",e)});function jv(e){return{$:3,b:e}}var Nv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var Wv=v(function(e,r){return{$:10,b:r,h:e}}),Gv=v(function(e,r){return _r(e,[r])}),Hv=y(function(e,r,n){return _r(e,[r,n])});R(function(e,r,n,a){return _r(e,[r,n,a])});he(function(e,r,n,a,t){return _r(e,[r,n,a,t])});Je(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});Ma(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Ut(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ee(e,n)}catch(a){return we(o(io,"This is not valid JSON! "+a.message,r))}});var lc=v(function(e,r){return Ee(e,r)});function Ee(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):qe("null",r);case 3:return Jn(r)?ai(e.b,r,h):qe("a LIST",r);case 4:return Jn(r)?ai(e.b,r,Xv):qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return qe("an OBJECT with a field named `"+n+"`",r);var $=Ee(e.b,r[n]);return He($)?$:we(o(bi,n,$.a));case 7:var a=e.e;if(!Jn(r))return qe("an ARRAY",r);if(a>=r.length)return qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ee(e.b,r[a]);return He($)?$:we(o(Fc,a,$.a));case 8:if(typeof r!="object"||r===null||Jn(r))return qe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var $=Ee(e.b,r[i]);if(!He($))return we(o(bi,i,$.a));t=nr(P(i,$.a),t)}return ue(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ee(l[u],r);if(!He($))return $;c=c($.a)}return ue(c);case 10:var $=Ee(e.b,r);return He($)?Ee(e.h($.a),r):$;case 11:for(var s=L,d=e.g;d.b;d=d.b){var $=Ee(d.a,r);if(He($))return $;s=nr($.a,s)}return we(jf(Be(s)));case 1:return we(o(io,e.a,r));case 0:return ue(e.a)}}function ai(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ee(e,r[i]);if(!He(c))return we(o(Fc,i,c.a));t[i]=c.a}return ue(n(t))}function Jn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Xv(e){return o(ns,e.length,function(r){return e[r]})}function qe(e,r){return we(o(io,"Expecting "+e,r))}function Gr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Gr(e.b,r.b);case 6:return e.d===r.d&&Gr(e.b,r.b);case 7:return e.e===r.e&&Gr(e.b,r.b);case 9:return e.f===r.f&&ti(e.g,r.g);case 10:return e.h===r.h&&Gr(e.b,r.b);case 11:return ti(e.g,r.g)}}function ti(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Gr(e[a],r[a]))return!1;return!0}var Iv=v(function(e,r){return JSON.stringify(r,null,e)+""});function uc(e){return e}y(function(e,r,n){return n[e]=r,n});function Fr(e){return{$:0,a:e}}function Uv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var ht=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Jv(e){return{$:5,b:e}}var Ov=0;function qt(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return Yt(r),r}function vc(e){return fr(function(r){r(Fr(qt(e)))})}function $c(e,r){e.h.push(r),Yt(e)}var qv=v(function(e,r){return fr(function(n){$c(e,r),n(Fr(Mn))})}),Qa=!1,oi=[];function Yt(e){if(oi.push(e),!Qa){for(Qa=!0;e=oi.shift();)Yv(e);Qa=!1}}function Yv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Yt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Zt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Zt(e,r,n,a,t,i){var c=o(lc,e,r?r.flags:void 0);He(c)||Kr(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=Zv(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),ci(l,b.b,t($))}return ci(l,u.b,t($)),d?{ports:d}:{}}var Qe={};function Zv(e,r){var n;for(var a in Qe){var t=Qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Kv(t,r)}return n}function Qv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Kv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ht,l,Jv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=qt(o(ht,l,e.b))}var e$=v(function(e,r){return fr(function(n){e.g(r),n(Fr(Mn))})});v(function(e,r){return o(qv,e.h,{$:0,a:r})});function fc(e){return function(r){return{$:1,k:e,l:r}}}function r$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ii=[],Ka=!1;function ci(e,r,n){if(ii.push({p:e,q:r,r:n}),!Ka){Ka=!0;for(var a;a=ii.shift();)n$(a.p,a.q,a.r);Ka=!1}}function n$(e,r,n){var a={};fa(!0,r,a,null),fa(!1,n,a,null);for(var t in e)$c(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function fa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=a$(e,t,a,r.l);n[t]=t$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)fa(e,c.a,n,a);return;case 3:fa(e,r.o,n,{s:r.n,t:a});return}}function a$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Qe[r].e:Qe[r].f;return o(i,t,a)}function t$(e,r,n){return n=n||{i:L,j:L},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function o$(e){Qe[e]&&Kr(3)}v(function(e,r){return r});function i$(e,r){return o$(e),Qe[e]={f:c$,u:r,a:l$},fc(e)}var c$=v(function(e,r){return function(n){return e(r(n))}});function l$(e,r){var n=L,a=Qe[e].u,t=Fr(null);Qe[e].b=t,Qe[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(lc,a,c);He(l)||Kr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var sa,ur=typeof document!="undefined"?document:{};function Qt(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(pr(e,function(){}),t),{}});function _t(e){return{$:0,a:e}}var sc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Kt(n),e:t,f:e,b:i}})}),sr=sc(void 0),u$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Kt(n),e:t,f:e,b:i}})}),v$=u$(void 0);function $$(e,r,n,a){return{$:3,d:Kt(e),g:r,h:n,i:a}}var f$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return wr([e,r],function(){return e(r)})});y(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Je(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ma(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return Le(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return Jt(e,r,n,a,t,i,c,l)})});Ut(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return Da(e,r,n,a,t,i,c,l,u)})});var dc=v(function(e,r){return{$:"a0",n:e,o:r}}),s$=v(function(e,r){return{$:"a1",n:e,o:r}}),mc=v(function(e,r){return{$:"a2",n:e,o:r}}),Dn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(dc,r.n,p$(e,r.o)):r});function p$(e,r){var n=$o(r);return{$:r.$,a:n?p(as,n<3?b$:g$,Me(e),r.a):o(ba,e,r.a)}}var b$=v(function(e,r){return P(e(r.a),r.b)}),g$=v(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Kt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?li(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?li(c,t,i):c[t]=i}return r}function li(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pr(e,r){var n=e.$;if(n===5)return pr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return wt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);sa&&e.c=="a"&&c.addEventListener("click",sa(c)),wt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Qt(c,pr(n===1?l[u]:l[u].b,r));return c}function wt(e,r,n){for(var a in n){var t=n[a];a==="a1"?h$(e,t):a==="a0"?y$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function h$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,eo&&{passive:$o(i)<2}),a[t]=c}}var eo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){eo=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=Ee(t.a,a);if(!!He(i)){for(var c=$o(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cW,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&Gr(e.a,r.a)}function pc(e,r){var n=[];return Xe(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Xe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Xe(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!T$(d,m):d!==m)&&_e(n,2,a,m),Xe(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ui(e,r,n,a,C$);return;case 2:ui(e,r,n,a,L$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=ro(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function T$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ui(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=ro(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function ro(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ro(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function C$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Xe(s,i[$],n,++a),a+=s.b||0}}function L$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,T=b.b,M=void 0,W=void 0;if(w===x){f++,Xe(_,T,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,G=j.b;W=x===N}if(E){var B=E.a,O=E.b;M=w===B}if(M&&W){f++,Xe(_,O,t,f),cn(i,t,w,T,m,c),f+=_.b||0,f++,ln(i,t,w,G,f),f+=G.b||0,d+=2,m+=2;continue}if(M){f++,cn(i,t,x,T,m,c),Xe(_,O,t,f),f+=_.b||0,d+=1,m+=2;continue}if(W){f++,ln(i,t,w,_,f),f+=_.b||0,f++,Xe(G,T,t,f),f+=G.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,ln(i,t,w,_,f),cn(i,t,x,T,m,c),f+=_.b||0,f++,Xe(G,O,t,f),f+=G.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;ln(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];cn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var bc="_elmW6BL";function cn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Xe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}cn(e,r,n+bc,a,t,i)}function ln(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Xe(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}ln(e,r,n+bc,a,t)}function gc(e,r,n,a){un(e,r,n,0,0,r.b,a)}function un(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)gc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&un(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&un(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return un(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=un(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function hc(e,r,n,a){return n.length===0?e:(gc(e,r,n,a),da(e,n))}function da(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=P$(t,a);t===e&&(e=i)}return e}function P$(e,r){switch(r.$){case 0:return z$(e,r.s,r.u);case 4:return wt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return da(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=da(e,i.w),e;case 8:return k$(e,r);case 5:return r.s(e);default:Kr(10)}}function z$(e,r,n){var a=e.parentNode,t=pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function k$(e,r){var n=r.s,a=M$(n.y,r);e=da(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Qt(e,a),e}function M$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Qt(n,i.c===2?i.s:pr(i.z,r.u))}return n}}function no(e){if(e.nodeType===3)return _t(e.textContent);if(e.nodeType!==1)return _t("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(Dn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,$=e.childNodes,a=$.length;a--;)u=nr(no($[a]),u);return p(sr,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var A$=R(function(e,r,n,a){return Zt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=no(l);return _c(i,function($){var s=c($),d=pc(u,s);l=hc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Zt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=ur.title,$=ur.body,s=no($);return _c(i,function(d){sa=c;var m=l(d),f=sr("body")(L)(m.eu),g=pc(s,f);$=hc($,s,g,t),s=f,sa=0,u!==m.fK&&(ur.title=u=m.fK)})})});var ma=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function _c(e,r){r(e);var n=0;function a(){n=n===1?0:(ma(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ma(a),n=2)}}v(function(e,r){return o(mo,fo,fr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(mo,fo,fr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(mo,fo,fr(function(){history.replaceState({},"",r),e()}))});var B$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window!="undefined"?window:B$;y(function(e,r,n){return vc(fr(function(a){function t(i){qt(n(i))}return e.addEventListener(r,t,eo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ee(e,r);return He(n)?te(n.a):q});function wc(e,r){return fr(function(n){ma(function(){var a=document.getElementById(e);n(a?Fr(r(a)):Uv(os(e)))})})}function V$(e){return fr(function(r){ma(function(){r(Fr(e()))})})}v(function(e,r){return wc(r,function(n){return n[e](),Mn})});v(function(e,r){return V$(function(){return F$.scroll(e,r),Mn})});y(function(e,r,n){return wc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var R$=v(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var E$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?te(d):q}a.push(C(ml,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?te($):q}return n(C(ml,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var j$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/N$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function N$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ao=new Float64Array(3),vi=new Float64Array(3),$i=new Float64Array(3),W$=y(function(e,r,n){return new Float64Array([e,r,n])}),G$=function(e){return e[0]},H$=function(e){return e[1]},X$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var I$=function(e){return new Float64Array([e.fT,e.fX,e.c5])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function yc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(yc);function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),pa(yc(e,r,n),n)}v(xc);function Sc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function pa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Sc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var U$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),vn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(vn);function yt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(yt);v(function(e,r){var n,a=ao,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=vn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(vn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(vn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(vn(r,a)+e[14])/n,t});var J$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var O$=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},q$=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Y$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Y$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Z$=new Float64Array(16),Q$=new Float64Array(16),K$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},ef=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Tc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Je(Tc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Tc(c,l,i,t,n,a)});function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Je(Cc);R(function(e,r,n,a){return Cc(e,r,n,a,-1,1)});function Lc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],T=r[0],M=r[1],W=r[2],j=r[3],E=r[4],N=r[5],G=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],se=r[13],ke=r[14],Te=r[15];return n[0]=a*T+l*M+d*W+b*j,n[1]=t*T+u*M+m*W+w*j,n[2]=i*T+$*M+f*W+x*j,n[3]=c*T+s*M+g*W+_*j,n[4]=a*E+l*N+d*G+b*B,n[5]=t*E+u*N+m*G+w*B,n[6]=i*E+$*N+f*G+x*B,n[7]=c*E+s*N+g*G+_*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+$*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+_*ve,n[12]=a*oe+l*se+d*ke+b*Te,n[13]=t*oe+u*se+m*ke+w*Te,n[14]=i*oe+$*se+f*ke+x*Te,n[15]=c*oe+s*se+g*ke+_*Te,n}v(Lc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],T=r[5],M=r[6],W=r[8],j=r[9],E=r[10],N=r[12],G=r[13],B=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*T+$*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+d*M,n[7]=0,n[8]=a*W+c*j+$*E,n[9]=t*W+l*j+s*E,n[10]=i*W+u*j+d*E,n[11]=0,n[12]=a*N+c*G+$*B+m,n[13]=t*N+l*G+s*B+f,n[14]=i*N+u*G+d*B+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=pa(r,ao);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Sc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,T=b-m,M=g-f,W=c*c*$+u,j=w+d,E=b+m,N=w-d,G=l*l*$+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],se=n[6],ke=n[7],Te=n[8],dr=n[9],mr=n[10],Za=n[11],Wu=n[12],Gu=n[13],Hu=n[14],Xu=n[15];return a[0]=B*x+ve*_+Te*T,a[1]=O*x+oe*_+dr*T,a[2]=Q*x+se*_+mr*T,a[3]=ie*x+ke*_+Za*T,a[4]=B*M+ve*W+Te*j,a[5]=O*M+oe*W+dr*j,a[6]=Q*M+se*W+mr*j,a[7]=ie*M+ke*W+Za*j,a[8]=B*E+ve*N+Te*G,a[9]=O*E+oe*N+dr*G,a[10]=Q*E+se*N+mr*G,a[11]=ie*E+ke*N+Za*G,a[12]=Wu,a[13]=Gu,a[14]=Hu,a[15]=Xu,a});function rf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(rf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function nf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(nf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=xc(e,r,ao),t=pa(yt(n,a,vi),vi),i=pa(yt(a,t,$i),$i),c=Z$,l=Q$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Lc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var fi=0;function Tn(e,r){for(;r.b;r=r.b)e(r.a)}function to(e){for(var r=0;e.b;e=e.b)r++;return r}var af=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},tf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),of=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),cf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),lf=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),uf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ff=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),sf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),df=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},mf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},pf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},bf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Pc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},zc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},gf=function(e){e.gl.disable(e.gl.CULL_FACE)},hf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},_f=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},wf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},si=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],yf=[mf,pf,bf,Pc,zc,gf,hf,_f,wf];function di(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function xf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function kc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Sf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?w[T][x]:w[T][x][_]})}var u=kc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(to(n.b)*s);Tn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Tf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Cf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*to(r.b),indexBuffer:null,buffers:{}}}function Cf(e,r){var n=new Uint32Array(to(e)*r),a=0,t;return Tn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function mi(e,r){return e+"#"+r}var Mc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Pc(n),zc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=mi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=fi++,$||($=di(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=fi++,s||(s=di(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=xf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Lf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=mi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Pf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Tf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Sf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=kc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,x*T)}for(n.toggle=!n.toggle,Tn(ep(n),i.a),u=0;u<si.length;u++){var M=n[si[u]];M.toggle!==n.toggle&&M.enabled&&(yf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Tn(t,e.g),r});function Lf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Pf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var zf=y(function(e,r,n){return $$(r,{g:n,f:{},h:e},Vf,Rf)}),kf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Mf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Df=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Af=v(function(e,r){e.contextAttributes.antialias=!0}),Bf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ff=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Vf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Tn(function(t){return o(K0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),af(function(){return o(Mc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rf(e,r){return r.f=e.f,Mc(r)}var k=rv,On=Qu,Dc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(On,e,l,$)}else{var u=c.a;return p(On,i,l,u)}});return p(On,i,p(On,e,r,t),a)}),oo=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(oo,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),pi=function(e){return p(oo,y(function(r,n,a){return o(k,P(r,n),a)}),L,e)},Ac=1,Ef=2,Bc=0,we=function(e){return{$:1,a:e}},io=v(function(e,r){return{$:3,a:e,b:r}}),bi=v(function(e,r){return{$:0,a:e,b:r}}),Fc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},jf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},Nf=Cv,Wf=Iv,Ae=cc,Lr=v(function(e,r){return o(xv,e,Aa(r))}),co=v(function(e,r){return h(o(yv,e,r))}),Vc=function(e){return o(Lr,`
    `,o(co,`
`,e))},An=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Mr=function(e){return p(An,v(function(r,n){return n+1}),0,e)},Gf=nv,Hf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Dr=v(function(e,r){return p(Hf,e,r,L)}),Rc=v(function(e,r){return p(Gf,e,o(Dr,0,Mr(r)-1),r)}),Ke=Av,Ec=function(e){var r=Ke(e);return 97<=r&&r<=122},jc=function(e){var r=Ke(e);return r<=90&&65<=r},Xf=function(e){return Ec(e)||jc(e)},If=function(e){var r=Ke(e);return r<=57&&48<=r},Uf=function(e){return Ec(e)||jc(e)||If(e)},Be=function(e){return p(An,k,L,e)},en=gv,Jf=v(function(e,r){return`

(`+(Ae(e+1)+(") "+Vc(Of(r))))}),Of=function(e){return o(qf,e,L)},qf=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=en(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Xf(x)&&o(Nf,Uf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(k,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,$=o(k,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Lr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(Mr(s))+" ways:"));return o(Lr,`

`,o(k,g,o(Rc,Jf,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Lr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Lr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(Vc(o(Wf,4,f))+(`

`+m))}}),Fe=32,xt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),St=Ju,lo=$v,uo=v(function(e,r){return ni(r)/ni(e)}),Yf=uv,Cn=lo(o(uo,2,Fe)),Nc=C(xt,0,Cn,St,St),Wc=qu,Gc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Hc=fv,Tt=Ou,er=v(function(e,r){return J(e,r)>0?e:r}),Zf=function(e){return{$:0,a:e}},vo=Yu,Qf=v(function(e,r){e:for(;;){var n=o(vo,Fe,e),a=n.a,t=n.b,i=o(k,Zf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),Kf=function(e){var r=e.a;return r},es=v(function(e,r){e:for(;;){var n=lo(r/Fe);if(n===1)return o(vo,Fe,e).a;var a=o(Qf,e,L),t=n;e=a,r=t;continue e}}),Xc=v(function(e,r){if(r.l){var n=r.l*Fe,a=Hc(o(uo,Fe,n-1)),t=e?Be(r.z):r.z,i=o(es,t,r.l);return C(xt,Tt(r.p)+n,o(er,5,a*Cn),i,r.p)}else return C(xt,Tt(r.p),Cn,St,r.p)}),rs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Xc,!1,{z:a,l:n/Fe|0,p:t});var i=Gc(p(Wc,Fe,r,e)),c=e,l=r-Fe,u=n,$=o(k,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),ns=v(function(e,r){if(e<=0)return Nc;var n=e%Fe,a=p(Wc,n,e-n,r),t=e-n-Fe;return S(rs,r,t,e,L,a)}),He=function(e){return!e.$},A=Wv,Y=Vv,D=Nv,$e=Rv,ba=Gv,as=Hv,Me=Fv,$o=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=sr("div"),ts=function(e){return{$:2,a:e}},Ic=v(function(e,r){return e}),Uc=v(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),zr=function(e){return e},os=zr,gi=Je(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),is=Lv,Pr=hv,Hr=Sv,Bn=v(function(e,r){return e<1?r:p(Hr,e,Pr(r),r)}),Ba=zv,Fa=function(e){return e===""},Va=v(function(e,r){return e<1?"":p(Hr,0,e,r)}),Jc=kv,hi=he(function(e,r,n,a,t){if(Fa(t)||o(is,"@",t))return q;var i=o(Ba,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Jc(o(Bn,c+1,t));if(l.$===1)return q;var u=l;return te(Le(gi,e,o(Va,c,t),u,r,n,a))}else return te(Le(gi,e,t,q,r,n,a))}),_i=R(function(e,r,n,a){if(Fa(a))return q;var t=o(Ba,"/",a);if(t.b){var i=t.a;return S(hi,e,o(Bn,i,a),r,n,o(Va,i,a))}else return S(hi,e,"/",r,n,a)}),wi=y(function(e,r,n){if(Fa(n))return q;var a=o(Ba,"?",n);if(a.b){var t=a.a;return C(_i,e,te(o(Bn,t+1,n)),r,o(Va,t,n))}else return C(_i,e,q,r,n)});v(function(e,r){if(Fa(r))return q;var n=o(Ba,"#",r);if(n.b){var a=n.a;return p(wi,e,te(o(Bn,a+1,r)),o(Va,a,r))}else return p(wi,e,q,r)});var cs=Pv,fo=function(e){},Fn=Fr,ls=Fn(0),Oc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(An,e,r,Be(d)):C(Oc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),or=y(function(e,r,n){return C(Oc,e,r,0,n)}),re=v(function(e,r){return p(or,v(function(n,a){return o(k,e(n),a)}),L,r)}),ga=ht,so=v(function(e,r){return o(ga,function(n){return Fn(e(n))},r)}),us=y(function(e,r,n){return o(ga,function(a){return o(ga,function(t){return Fn(o(e,a,t))},n)},r)}),vs=function(e){return p(or,us(k),Fn(L),e)},$s=e$,fs=v(function(e,r){var n=r;return vc(o(ga,$s(e),n))}),ss=y(function(e,r,n){return o(so,function(a){return 0},vs(o(re,fs(e),r)))}),ds=y(function(e,r,n){return Fn(0)}),ms=v(function(e,r){var n=r;return o(so,e,n)});Qe.Task=Qv(ls,ss,ds,ms);var ps=fc("Task"),mo=v(function(e,r){return ps(o(so,e,r))}),bs=A$,gs=pv,ha={$:1},qc=function(e){return{$:2,a:e}},Ra={$:0},je=v(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.B;return r.a},hs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(je,r,{B:i,ab:c,T:o(k,a,n)}))}else return q},Yc=function(e){var r=e.b;return o(je,Ra,r)},ar=v(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Yc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,rn(n).db)>0?o(ae,hs,ar(o(je,ha,t))):zr)(o(je,qc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Uc,l.eA,Ye(r,{db:l.db+r.eJ})),s=o(e,$,u);return o(je,Ra,{B:P($,s),ab:L,T:o(k,t.B,t.T)})}}),Zc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=v(function(e,r){return Be(p(ws,e,r,L))}),Qc=y(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(ys,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(Qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),xs=v(function(e,r){return p(Qc,0,e,r)}),Ss=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Be(n),le(h([a]),t)),c=o(xs,e,i),l=o(Zc,e,i);if(l.b){var u=l.a,$=l.b;return o(je,ha,{B:u,ab:$,T:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(je,ha,{B:d,ab:L,T:m})}else return r}}),Ts=function(e){var r=e.b;return o(je,ha,r)},Cs=function(e){var r=e.b;return o(je,qc({cX:rn(e).db}),r)},Ls=v(function(e,r){switch(e.$){case 1:return Ts(r);case 2:return Yc(r);case 3:return Cs(r);default:var n=e.a;return o(Ss,n,r)}}),Kc=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Ps=v(function(e,r){return Ye(r,{av:e(r.av)})}),zs=function(e){return{$:3,a:e}},el=function(e){return{$:2,a:e}},rl=v(function(e,r){return{$:0,a:e,b:r}}),nl=v(function(e,r){return{$:1,a:e,b:r}}),ye=v(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),Z=function(e){return e<0?-e:e},po=Mv,ks=y(function(e,r,n){return o(ar,0/0,po(o(e,r,n)))}),al=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ms=wv,tl=function(e){return p(Ms,k,L,e)},Ds=v(function(e,r){var n=o(al,function(a){return a!=="0"&&a!=="."},tl(r));return le(e&&n?"-":"",r)}),de=cc,Ct=bv,ol=Bv,il=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(Ct,"0",il(t))}else{var i=Ke(r);return i>=48&&i<57?o(Ct,ol(i+1),n):"0"}},Lt=vv,As=mv,Ea=function(e){return o(Ct,e,"")},cl=y(function(e,r,n){return e<=0?n:p(cl,e>>1,le(r,r),e&1?le(n,r):n)}),Ln=v(function(e,r){return p(cl,e,r,"")}),Pt=y(function(e,r,n){return le(n,o(Ln,e-Pr(n),Ea(r)))}),zt=_v,ll=function(e){var r=o(co,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Bs=function(e){var r=o(co,"e",de(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ar,0,Jc(o(cs,"+",t)?o(Bn,1,t):t)),c=ll(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(ar,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Kc(Ea),en(le(o(Ln,Z(i),"0"),$))))):p(Pt,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Fs=y(function(e,r,n){if(Lt(n)||As(n))return de(n);var a=n<0,t=ll(Bs(Z(n))),i=t.a,c=t.b,l=Pr(i)+r,u=le(o(Ln,-l+1,"0"),p(Pt,l,"0",le(i,c))),$=Pr(u),s=o(er,1,l),d=o(e,a,p(Hr,s,$,u)),m=p(Hr,0,s,u),f=d?zt(o(ar,"1",o(ye,il,en(zt(m))))):m,g=Pr(f),b=f==="0"?f:r<=0?le(f,o(Ln,Z(r),"0")):J(r,Pr(c))<0?p(Hr,0,g-r,f)+("."+p(Hr,g-r,g,f)):le(i+".",p(Pt,r,"0",c));return o(Ds,a,b)}),mn=Fs(v(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ke(t))})),Vs=ks(mn),Rs=y(function(e,r,n){var a=o(uo,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Vs,t,n)}),ul=ev,Vn=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ul,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},Yr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,$,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,$,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),kt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ul,e,t);switch(u){case 0:return S(Yr,a,t,i,p(kt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Yr,a,t,i,c,p(kt,e,r,l))}}),pn=y(function(e,r,n){var a=p(kt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Es=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},vl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},yi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,$,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},js=Ma(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(X,n,l,u,$,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,yi(r)}else break e;else return c.a,c.d,yi(r);else break e;return r}}),ia=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,ia(t),l);var u=vl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Yr,$,s,d,ia(m),f)}else return tr}else return S(X,r,n,a,ia(t),l)}else return tr},bn=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(bn,e,i),c);var u=vl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Yr,$,s,d,o(bn,e,m),f)}else return tr}else return S(X,n,a,t,o(bn,e,i),c);else return o(Ns,e,Jt(js,e,r,n,a,t,i,c))}),Ns=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(br(e,a)){var l=Es(c);if(l.$===-1){var u=l.b,$=l.c;return S(Yr,n,u,$,i,ia(c))}else return tr}else return S(Yr,n,a,t,i,o(bn,e,c))}else return tr}),Ws=v(function(e,r){var n=o(bn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),qn=y(function(e,r,n){var a=r(o(Vn,e,n));if(a.$)return o(Ws,e,n);var t=a.a;return p(pn,e,t,n)}),Gs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(qn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(nl,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(qn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(rl,P(i,c),p(Rs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(qn,r,ye(function(a){return a.$===3?zs(n):a}));default:var r=e.a,n=e.b;return o(qn,r,ye(function(a){return a.$===2?el(n):a}))}},Hs=function(e){return Ps(Gs(e))},Xs=v(function(e,r){return o(re,Hs(e),r)}),Is=v(function(e,r){return Ye(r,{eA:o(Xs,e,r.eA)})}),Us=v(function(e,r){var n=r.a,a=r.b;return o(je,n,Ye(a,{B:o(Kc,Is(e),a.B)}))}),Js=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Os=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,Ye(t,{B:o(Js,o(e,i.a,r),i)}))}),qs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ye(a,{aL:!a.aL});case 2:var t=n.a;return Ye(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return Ye(a,{G:o(Us,i,a.G)});case 4:var c=n.a;return Ye(a,{G:p(Os,r,c,a.G)});default:var l=n.a;return Ye(a,{G:o(Ls,l,a.G)})}}),Ys=v(function(e,r){return o(je,Ra,{B:P(e,r(e)),ab:L,T:L})}),Zs=r$,xi=Zs(L),_a=jv,Pn=Ev,Qs=i$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Me({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",_a(Pn)))},o(D,"left",Y))},o(D,"pressedKeys",_a(Pn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Me({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),Ks=function(e){return{$:4,a:e}},ed={$:0},rd=uc,Ge=v(function(e,r){return o(mc,e,rd(r))}),U=Ge("className"),nd=function(e){var r=e.b.B;return r.b},wa=Ge("id"),ad=f$,ya=ad,td=s$,ge=td,od={$:1},id=function(e){return{$:3,a:e}},cd=function(e){return{$:5,a:e}},Si=sr("a"),bo=sr("button"),ld=Dn("d"),$l=sc("http://www.w3.org/2000/svg"),ud=$l("path"),vd=$l("svg"),$d=Dn("viewBox"),gn=function(e){return o(vd,h([$d("0 0 100 100"),o(ge,"width","100%"),o(ge,"height","100%")]),h([o(ud,h([ld(e)]),L)]))},Ti=function(e){return o(Ge,"href",m$(e))},Ir={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},fd=function(e){return{$:0,a:e}},fl=dc,sl=v(function(e,r){return o(fl,e,fd(r))}),go=function(e){return o(sl,"click",Me(e))},Ci=Ge("target"),sd=Ge("title"),Mt=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(Mt,e,i),o(Mt,e,c))}),dd=_t,be=dd,md=function(e){return p(oo,y(function(r,n,a){return o(k,n,a)}),L,e)},pd=v(function(e,r){return{$:3,a:e,b:r}}),bd=v(function(e,r){return{$:2,a:e,b:r}}),gd=v(function(e,r){return{$:0,a:e,b:r}}),hd=v(function(e,r){return{$:1,a:e,b:r}}),ja=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ho=C(ja,0/255,0/255,0/255,1),_d=uc,wd=v(function(e,r){return o(mc,e,_d(r))}),yd=wd("checked"),Ue=sv,xd=y(function(e,r,n){return le(o(Ln,e-Pr(n),Ea(r)),n)}),xa=tv,dl=function(e){var r=function(n){return n<10?Ae(n):Ea(ol(87+n))};return e<16?r(e):le(dl(e/16|0),r(o(xa,16,e)))},Sd=o(ae,dl,o(xd,2,"0")),_o=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Td=function(e){var r=_o(e),n=r.cM,a=r.cc,t=r.b5;return o(Lr,"",o(k,"#",o(re,o(ae,Ue,Sd),h([n*255,a*255,t*255]))))},Dt=Ge("htmlFor"),Cd=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Sa=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Ld=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),Rn=v(function(e,r){return p(or,Ld(e),L,r)}),ml=R(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Pd=E$,zd=Dv,kd=v(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Md=R$,Dd=function(e){return o(Md,{ew:!1,fe:!1},e)},En=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Ad=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Bd=function(e){return{$:2,a:e}},Fd=function(e){return{$:0,a:e}},Vd=function(e){return{$:1,a:e}},et=v(function(e,r){return Ke(r)-Ke(e)}),rt=y(function(e,r,n){var a=Ke(n);return J(Ke(e),a)<1&&J(a,Ke(r))<1}),Rd=v(function(e,r){var n=function(t){return J(t,e)<0?ue(t):we(Vd(r))},a=p(rt,"0","9",r)?ue(o(et,"0",r)):p(rt,"a","z",r)?ue(10+o(et,"a",r)):p(rt,"A","Z",r)?ue(10+o(et,"A",r)):we(Fd(r));return o(Sa,n,a)}),pl=v(function(e,r){var n=en(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(Sa,function(c){return o(Sa,function(l){return ue(c+l*e)},o(pl,e,i))},o(Rd,e,t))}),Ed=v(function(e,r){return 2<=e&&e<=36?o(pl,e,zt(r)):we(Bd(e))}),jd=Ed(16),Nd=y(function(e,r,n){return C(ja,e,r,n,1)}),Wd=R(function(e,r,n,a){return C(ja,e,r,n,a)}),jn=av,Gd=v(function(e,r){var n=o(jn,10,e);return Ue(r*n)/n}),Hd=Tv,Xd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=tl(n);if(a.b&&!a.b.b){var t=a.a;return zd(h([t,t]))}else return n};return o(ae,Hd,o(ae,function(n){return o(ye,function(a){return p(Pd,1,a,n)},Dd(e))},o(ae,Cd(En),o(ae,ye(function(n){return n.fF}),o(ae,ye(Rn(zr)),o(ae,kd("Parsing hex regex failed"),Sa(function(n){var a=o(re,o(ae,r,o(ae,jd,Ad(Yf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(C(Wd,t/255,c/255,u/255,o(Gd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Nd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),Ta=sr("input"),At=sr("label"),Bt=Ge("name"),bl=v(function(e,r){return p(or,D,r,e)}),Id=o(bl,h(["target","checked"]),Y),Ud=function(e){return o(sl,"change",o(ba,e,Id))},Jd=function(e){return P(e,!0)},Od=function(e){return{$:1,a:e}},qd=v(function(e,r){return o(fl,e,Od(r))}),Yd=o(bl,h(["target","value"]),Pn),wo=function(e){return o(qd,"input",o(ba,Jd,o(ba,e,Yd)))},gl=Ge("max"),hl=Ge("min"),_l=function(e){return o(Ge,"step",e)},Ca=Ge("type"),yo=Ge("value"),Li=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,L,h([o(At,h([Dt(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([be(r)])),o(I,h([U("inline-block float-right")]),h([be(de(n))]))]))])),o(Ta,h([Ca("range"),o(ge,"width","100%"),wa(r),Bt(r),hl(de(a)),gl(de(t)),yo(de(n)),_l(de(i)),wo(o(ae,po,o(ae,ar(42),c)))]),L)]))},Zd=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Qd=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([U("mb-2")]),h([o(At,h([Dt(e)]),h([be(e)]))])),o(Ta,h([Ca("checkbox"),wa(e),Bt(e),Ud(pd(e)),yd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Li({cf:e,cr:i,cv:t,cz:gd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Li({cf:e,cr:i,cv:t,cz:o(ae,Ue,hd(e)),cV:1,c0:c});default:var c=r.a;return o(I,L,h([o(I,h([o(ge,"margin-bottom","6px")]),h([o(At,h([Dt(e)]),h([be(e)]))])),o(Ta,h([Ca("color"),o(ge,"width","100%"),o(ge,"height","26px"),o(ge,"padding","0px"),wa(e),Bt(e),wo(function(l){return o(bd,e,o(Zd,ho,Xd(l)))}),yo(Td(c))]),L)]))}}),Kd=function(e){return o(I,h([U("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([be(e.ff)])),o(I,h([U("pl-2 pr-2")]),md(o(Mt,Qd,e.av)))]))},em=function(e){return o(I,h([U("text-xs text-white60")]),o(re,Kd,e))},rm=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([be("clock: "+o(mn,3,rn(e).db))]))},nm=function(e){e.a;var r=e.b.T;return o(ye,function(n){return Ue(60/(rn(e).db-n))},o(ye,o(ae,Kf,function(n){return n.db}),En(o(Zc,59,r))))},am=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=nm(e);if(r.$===1)return h([be("... Fps")]);var n=r.a;return h([be(Ae(n)+" Fps")])}())},tm=function(e){return{$:0,a:e}},om=function(e){var r=e.b.T;return Mr(r)},im=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Mr(r)+1+Mr(n)},cm=function(e){return o(Ta,h([U("absolute left-[100px] w-[490px]"),Ca("range"),hl(Ae(0)),gl(Ae(im(e)-1)),yo(Ae(om(e))),_l(Ae(1)),wo(o(ae,po,o(ae,ar(42),o(ae,Ue,tm))))]),L)},Pi={$:1},lm={$:3},um={$:2},wl=function(e){return!e.b},zi=v(function(e,r){return o(bo,h([U("px-2 bg-black40"),U(r),go(e)]),h([be("REC")]))}),ki=v(function(e,r){return o(bo,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),go(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([gn(e)]))]))}),vm=function(e){var r=e.a,n=e.b.ab;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(zi,Pi,"text-red-500 font-bold");case 1:return o(zi,um,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return wl(n)?o(I,L,L):o(ki,Ir.fo,lm);default:return o(ki,Ir.fn,Pi)}}()]))},$m=function(e){return o(I,h([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([cm(e),vm(e),am(e),rm(e)]))},yl=function(e){return o(Lr,"",e)},fm=v(function(e,r){if(r.b){var n=r.a,a=r.b,t=v(function(c,l){return o(k,e,o(k,c,l))}),i=p(or,t,L,a);return o(k,n,i)}else return L}),sm=function(e){var r=e.a;return br(r,Ra)},Tr=sr("p"),dm=sr("pre"),mm=v(function(e,r){var n=sm(r.G)?o(I,L,L):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(ge,"left",de(e.fp.fT+.5*e.cS.fR)+"px"),o(ge,"top",de(-e.fp.fX+.5*e.cS.eW)+"px")]),h([o(I,h([U(e.fp.e4?"fill-black80":"fill-white40")]),h([gn(Ir.fp)]))]));return o(I,L,h([n,o(dm,h([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(Tr,L,h([be("pressedKeys: "+yl(o(fm," ",e.e7.fq)))])),o(Tr,L,h([be("delta time: "+o(mn,4,e.eJ))])),o(Tr,L,h([be("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(Tr,L,h([be("pointer.x: "+o(mn,2,e.fp.fT))])),o(Tr,L,h([be("pointer.y: "+o(mn,2,e.fp.fX))])),o(Tr,L,h([be("wheel deltaX: "+de(e.fQ.eD))])),o(Tr,L,h([be("wheel deltaY: "+de(e.fQ.eE))]))]))]))}),pm=v(function(e,r){var n=o(bo,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),go(od),sd("Distraction Free Mode")]),h([gn(Ir.f$)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(Si,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),Ti("https://twitter.com/AzizErkalSelman"),Ci("_blank")]),h([gn(Ir.fL)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(Si,h([U("fill-githubCat40 hover:fill-githubCat"),Ti("https://github.com/erkal/elm-3d-playground-exploration"),Ci("_blank")]),h([gn(Ir.eQ)]))]));return r.aL?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(ya,id,em(rn(r.G).eA))])),o(ya,cd,$m(r.G)),o(mm,e,r)]))}),bm=y(function(e,r,n){var a=nd(n.G),t=rn(n.G);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(ge,"width",de(t.cS.fR)+"px"),o(ge,"height",de(t.cS.eW)+"px")]),h([o(I,h([U("fixed")]),h([o(ya,Ic(ed),o(e,t,a))])),o(I,h([wa("gui")]),h([o(pm,t,n),o(I,h([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(ya,Ks,o(r,t,a))]))]))]))}),gm=Je(function(e,r,n,a,t,i){var c=v(function(u,$){return P(C(qs,r,i,u,$),xi)}),l=function(u){var $=o(Uc,n,u.e1);return P({aL:u.e1.cS.fR<500,G:o(Ys,$,a)},xi)};return bs({e0:l,fG:Ic(Qs(ts)),fM:c,fP:o(bm,e,t)})}),hm=R(function(e,r,n,a){return Le(gm,e,r,n,a,v(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),_m=function(e){return{}},wm=v(function(e,r){return P(e,el(r))}),ym=y(function(e,r,n){return{av:n,e5:r,ff:e}}),xl=tr,xm=function(e){return p(An,v(function(r,n){var a=r.a,t=r.b;return p(pn,a,t,n)}),xl,e)},Sm=y(function(e,r,n){return p(ym,e,r,xm(n))}),nt=Sm,Er=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(rl,P(a,t),n))}),Tm=R(function(e,r,n,a){var t=V(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,$=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?$+(u-$)*b*6:b*2<1?u:b*3<2?$+(u-$)*(2/3-b)*6:$},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(ja,f,m,d,a)}),Sl=y(function(e,r,n){return C(Tm,e,r,n,1)}),Cm=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(nl,P(a,t),n))}),rr=ov,Lm=h([p(nt,"Camera",!0,h([p(Er,"camera distance",P(3,60),50),p(Er,"camera azimuth",P(0,2*rr),0),p(Er,"camera elevation",P(-rr/2,rr/2),.5)])),p(nt,"Parameters",!0,h([p(Er,"delay per index",P(0,1),.15),p(Cm,"number of spheres",P(10,100),50)])),p(nt,"Colors and light",!0,h([p(Er,"saturation",P(0,1),.5),p(Er,"lighting",P(0,1),.7),o(wm,"background color",p(Sl,.85,.32,.45))]))]),Pm=v(function(e,r){return r}),zm=v(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Vn,e,r.av))}),km=v(function(e,r){return o(ar,0,En(o(Rn,zm(e),r)))}),Mm=v(function(e,r){return o(km,e,r.eA)}),Ur=Mm,Ar=function(e){return e},$n=function(e){return Ar(rr*(e/180))},Dm=function(e){return e},vr=function(e){return e},Ft=function(e){var r=e;return-r},Am=v(function(e,r){var n=e,a=r;return{fT:n.fX*a.c5-n.c5*a.fX,fX:n.c5*a.fT-n.fT*a.c5,c5:n.fT*a.fX-n.fX*a.fT}}),Tl=function(e){var r=e;return r.c3},Cl=function(e){var r=e;return r.c4},Bm=function(e){return o(Am,Tl(e),Cl(e))},Vr=function(e){var r=e;return r.cA},Br=iv,Zr=cv,ca=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=Zr(c),$=a.eG,s=$,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),T=s.c5*u,M=l*T,W=2*(w-M),j=2*(w+M),E=d*T,N=2*(E+b),G=2*(E-b),B=g*T,O=2*(B-m),Q=2*(B+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+W*i.fX+N*i.c5,fX:j*i.fT+oe*i.fX+O*i.c5,c5:G*i.fT+Q*i.fX+_*i.c5}}),Nn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=Zr(c),$=a.cA,s=$,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,x=l*w,_=w*w,T=b.fX*u,M=l*T,W=w*T,j=T*T,E=1-2*(_+j),N=b.c5*u,G=l*N,B=2*(W-G),O=2*(W+G),Q=w*N,ie=2*(Q+M),ve=2*(Q-M),oe=T*N,se=2*(oe-x),ke=2*(oe+x),Te=N*N,dr=1-2*(j+Te),mr=1-2*(_+Te);return{fT:s.fT+dr*d+B*m+ie*f,fX:s.fX+O*d+mr*m+se*f,c5:s.c5+ve*d+ke*m+E*f}}),gr=function(e){return e},yr=function(e){var r=e;return r.c3},xr=function(e){var r=e;return r.c4},Sr=function(e){var r=e;return r.c6},Ll=y(function(e,r,n){return gr({cA:p(Nn,e,r,Vr(n)),c3:p(ca,e,r,yr(n)),c4:p(ca,e,r,xr(n)),c6:p(ca,e,r,Sr(n))})}),Mi=y(function(e,r,n){return p(Ll,e(n),r,n)}),xo=function(e){var r=e;return r.eG},Wn=v(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),Pl=v(function(e,r){return gr({cA:o(Wn,e,Vr(r)),c3:yr(r),c4:xr(r),c6:Sr(r)})}),Fm=v(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c5:n*a.c5}}),Vm=y(function(e,r,n){return o(Pl,o(Fm,r,e),n)}),Rm=y(function(e,r,n){return p(Vm,xo(e(n)),r,n)}),Rr=v(function(e,r){return{eG:r,cA:e}}),Em=function(e){var r=e;return o(Rr,r.cA,r.c3)},jm=function(e){var r=e;return o(Rr,r.cA,r.c4)},Nm=function(e){var r=e;return o(Rr,r.cA,r.c6)},Wm=function(e){var r=gr({cA:e.aR,c3:Cl(e.dl),c4:Bm(e.dl),c6:Tl(e.dl)}),n=p(Rm,Nm,e.cb,p(Mi,Em,Ft(e.bC),p(Mi,jm,e.bx,r)));return n},Gm=function(e){return{$:0,a:e}},Se=function(e){var r=e;return Z(r)},la=function(e){var r=e;return .5*r},Hm=lv,Xm=function(e){var r=e;return Hm(r)},Im=function(e){var r=la(Se(e.ej)),n=Xm(r);return{cL:Gm(n),c1:e.c1}},Ie={fT:0,fX:0,c5:0},zl=zr,kr=function(e){return e},Um=kr({fT:1,fX:0,c5:0}),So=Um,kl=kr({fT:0,fX:0,c5:1}),To=kl,Jm=zl({cA:Ie,c3:To,c4:So}),Om=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Im({ej:$n(40),c1:Wm({bx:Ar(n),cb:vr(t),bC:Ar(a),aR:Dm(r),dl:Jm})})},qm=function(e){return Om({bx:o(Ur,"camera azimuth",e),cb:o(Ur,"camera distance",e),bC:o(Ur,"camera elevation",e),aR:{fT:0,fX:0,c5:0}})},Yn=function(e){return e*rr/180},Ym=v(function(e,r){return o(ye,function(n){if(n.$===2){var a=n.a;return a}else return ho},o(Vn,e,r.av))}),Zm=v(function(e,r){return o(ar,ho,En(o(Rn,Ym(e),r)))}),Qm=v(function(e,r){return o(Zm,e,r.eA)}),Km=Qm,Co=v(function(e,r){return{$:0,a:e,b:r}}),Lo=v(function(e,r){return{$:2,a:e,b:r}}),Na=function(e){return{$:5,a:e}},Po=v(function(e,r){return{$:4,a:e,b:r}}),Wa=v(function(e,r){return{$:3,a:e,b:r}}),zo=v(function(e,r){return{$:1,a:e,b:r}}),e0=function(e){var r=e;return r},Ga=function(e){var r=e;return e0(r.er)},Ha=function(e){var r=e;return r.aK},r0=y(function(e,r,n){return{er:p(Ll,e,r,Ga(n)),aK:Ha(n)}}),n0=v(function(e,r){var n=o(Nn,e,r),a=o(ca,e,r);return function(t){var i=t;return o(Rr,n(i.cA),a(i.eG))}}),a0=y(function(e,r,n){var a=n;return{k:p(n0,e,r,a.k),e9:a.e9,fr:a.fr}}),ko=function(e){var r=e;return r},t0=function(e){return e},Mo=v(function(e,r){var n=ko(r),a=n.a,t=n.b;return t0(P(e(a),e(t)))}),o0=y(function(e,r,n){return o(Mo,o(Nn,e,r),n)}),Xa=function(e){var r=e;return r.ey},Ia=function(e){var r=e;return r.fr},Ua=v(function(e,r){return{ey:r,fr:Se(e)}}),i0=y(function(e,r,n){return o(Ua,Ia(n),p(Nn,e,r,Xa(n)))}),Do=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),c0=y(function(e,r,n){return o(Do,o(Nn,e,r),n)}),Ml=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Co,l,p(r0,e,r,a));case 1:var l=n.a,t=n.b;return o(zo,l,p(c0,e,r,t));case 3:var l=n.a,i=n.b;return o(Wa,l,p(i0,e,r,i));case 2:var l=n.a,c=n.b;return o(Lo,l,p(a0,e,r,c));case 4:var l=n.a,u=n.b;return o(Po,l,p(o0,e,r,u));default:var $=n.a;return Na(o(re,o(Ml,e,r),$))}}),l0=kr({fT:0,fX:1,c5:0}),Ao=l0,u0=o(Rr,Ie,Ao),Vt=v(function(e,r){return p(Ml,u0,Ar(e),r)}),v0=v(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Vn,e,r.av))}),$0=v(function(e,r){return o(ar,0,En(o(Rn,v0(e),r)))}),f0=v(function(e,r){return o($0,e,r.eA)}),Dl=f0,s0=function(e){return Na(e)},Rt=function(e){return{$:0,a:e}},Al=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Bl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),at=function(e){return p(Bl,0,1,e<=.04045?e/12.92:o(jn,(e+.055)/1.055,2.4))},Gn=W$,d0=function(e){var r=_o(e),n=r.cM,a=r.cc,t=r.b5;return p(Gn,at(n),at(a),at(t))},m0=function(e){return p(Al,0,Rt(d0(e)),Rt(0))},p0=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),b0=v(function(e,r){return{er:o(Pl,e,Ga(r)),aK:Ha(r)}}),g0=v(function(e,r){var n=r;return o(Rr,o(Wn,e,n.cA),n.eG)}),h0=v(function(e,r){var n=r;return{k:o(g0,e,n.k),e9:n.e9,fr:n.fr}}),_0=v(function(e,r){return o(Mo,Wn(e),r)}),w0=v(function(e,r){return o(Ua,Ia(r),o(Wn,e,Xa(r)))}),y0=v(function(e,r){return o(Do,Wn(e),r)}),Bo=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(p0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Co,s,o(b0,i,c));case 1:var s=r.a,l=r.b;return o(zo,s,o(y0,i,l));case 3:var s=r.a,u=r.b;return o(Wa,s,o(w0,i,u));case 2:var s=r.a,$=r.b;return o(Lo,s,o(h0,i,$));case 4:var s=r.a,d=r.b;return o(Po,s,o(_0,i,d));default:var m=r.a;return Na(o(re,Bo(V(n,a,t)),m))}}),x0=function(e){return Bo(V(e,0,0))},S0=function(e){return Bo(V(0,e,0))},K=v(function(e,r){var n=r;return e*n}),$r=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Hn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c5:a.c5+r*(t.c5-a.c5)}}),T0=y(function(e,r,n){var a=Ga(n),t=yr(a),i=xr(a),c=Sr(a),l=p(Hn,e,r,Vr(a)),u=r>=0?gr({cA:l,c3:t,c4:i,c6:c}):gr({cA:l,c3:$r(t),c4:$r(i),c6:$r(c)}),$=Ha(n),s=$.a,d=$.b,m=$.c,f=Se(o(K,r,s)),g=Se(o(K,r,d)),b=Se(o(K,r,m));return{er:u,aK:V(f,g,b)}}),Fo=function(e){var r=e;return r.k},Di=function(e){return xo(Fo(e))},Fl=function(e){var r=e;return r.cA},C0=function(e){return Fl(Fo(e))},Vl=function(e){var r=e;return r.e9},Rl=function(e){var r=e;return r.fr},L0=y(function(e,r,n){var a=Se(o(K,r,Rl(n))),t=Se(o(K,r,Vl(n))),i=r>=0?Di(n):$r(Di(n)),c=p(Hn,e,r,C0(n));return{k:o(Rr,c,i),e9:t,fr:a}}),P0=y(function(e,r,n){return o(Mo,o(Hn,e,r),n)}),z0=y(function(e,r,n){return o(Ua,o(K,Z(r),Ia(n)),p(Hn,e,r,Xa(n)))}),k0=y(function(e,r,n){return o(Do,o(Hn,e,r),n)}),El=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Co,c,p(T0,Ie,e,n));case 1:var c=r.a,a=r.b;return o(zo,c,p(k0,Ie,e,a));case 3:var c=r.a,t=r.b;return o(Wa,c,p(z0,Ie,e,t));case 2:var c=r.a,i=r.b;return o(Lo,c,p(L0,Ie,e,i));case 4:var c=r.a,l=r.b;return o(Po,c,p(P0,Ie,e,l));default:var u=r.a;return Na(o(re,El(e),u))}}),M0=v(function(e,r){return o(Wa,e,o(Ua,vr(r),Ie))}),D0=v(function(e,r){return(r-Hc(r/e)*e)/e}),A0=function(e){return 2*rr*e},Zn=R(function(e,r,n,a){return e+(r-e)*(1+Br(A0(o(D0,n,a))))/2}),B0=v(function(e,r){var n=e.db+r*o(Ur,"delay per index",e),a=o(Ur,"saturation",e),t=o(Dl,"number of spheres",e),i=30/t,c=o(Ur,"lighting",e),l=C(Zn,0,1,7,n);return o(S0,i*1.1*r,o(Vt,C(Zn,0,10,20,n),o(x0,C(Zn,3,4,1,n),o(El,C(Zn,1,4,4,n),o(M0,m0(p(Sl,l,a,c)),i)))))}),tt=function(e){var r=o(Dl,"number of spheres",e);return s0(o(re,B0(e),o(Dr,-(r/2|0),r/2|0)))},F0=function(e){return e},V0=function(e){return vr(.01*e)},Ai=function(e){return e},R0=function(e){return e},E0=function(e){return{$:0,a:e}},j0=E0,N0={$:3},W0=N0,G0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),H0=G0,X0=v(function(e,r){return r.b?p(or,k,r,e):e}),Ne=function(e){return p(or,X0,L,e)},Vo=v(function(e,r){return Ne(o(re,e,r))}),I0=function(e){return{$:1,a:e}},U0=I0,J0=function(e){return o(Dn,"height",Ae(e))},O0=function(e){return v$(d$(e))},q0=O0,Y0=function(e){return{$:2,a:e}},Z0=Y0,Q0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ue(l*1e3)/1e3},c=function(l){return Ue(l*1e4)/100};return yl(h(["rgba(",de(c(r)),"%,",de(c(n)),"%,",de(c(a)),"%,",de(i(t)),")"]))},K0=v(function(e,r){switch(r.$){case 0:return o(kf,e,r);case 1:return o(Mf,e,r);case 2:return o(Df,e,r);case 3:return o(Af,e,r);case 4:return o(Bf,e,r);default:return o(Ff,e,r)}}),ep=v(function(e,r){switch(r.$){case 0:return o(of,e,r);case 1:return o(cf,e,r);case 2:return o(lf,e,r);case 3:return o(uf,e,r);case 4:return o(vf,e,r);case 5:return o($f,e,r);case 6:return o(ff,e,r);case 7:return o(sf,e,r);default:return df(e)}}),rp=y(function(e,r,n){return p(zf,e,r,n)}),Bi=function(e){var r=e;return r},nn=J$,ot=C(nn,1,1,1,1),Oe=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),np=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ap=v(function(e,r){var n=e,a=r.fT,t=r.fX;return p(np,n*a/t,n,n*(1-a-t)/t)}),tp=function(e){var r=e.a,n=e.b,a=e.c;return p(Gn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ro=v(function(e,r){return tp(o(ap,e,r))}),jl=v(function(e,r){return{dp:br(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ze=K$,op=function(e){return Ze({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},it=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(nn,a.bX,a.bX,a.bX,i);return Le(t,e,c,op(a),a.dp,r,n)}),Nl=Je(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(jl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(it,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(k,S(it,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var _=t.a,T=o(k,S(it,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(An,C(Nl,e,r,n,a),i,M)}}),ip=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Wl=ip,Eo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),cp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Eo,518,r,n,a)},lp=v(function(e,r){return{$:6,a:e,b:r}}),up=lp,Gl=h([cp({V:1,W:0,Z:!1}),C(Wl,!1,!1,!1,!1),o(up,0,1)]),Qr=519,jo=8,Hl=15,Jr=7681,vp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=tf,$p=v(function(e,r){return{$:0,a:e,b:r}}),fp=$p({df:1,$7:0,dV:5}),De=j$,sp=fp(h([{bT:o(De,-1,-1)},{bT:o(De,1,-1)},{bT:o(De,-1,1)},{bT:o(De,1,1)}])),dp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},mp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},No=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(ae,c($.bl),o(ae,l($.a8),o(ae,l($.bt),l($.bu))))};return o(u,n,o(u,r,p(mp,a,t,i)))}),Wo=function(e){return p(No,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Go=function(e){return S(ne,h([Wo(e),C(Wl,!1,!1,!1,!1)]),dp,vp,sp,{})},pp=Go({a8:Jr,co:0,cN:jo,bl:Qr,c2:Hl,bt:Jr,bu:Jr}),bp=516,Fi=5386,xe=7680,gp=function(e){return o(jn,2,e+4)},Xl=function(e){return Go({a8:xe,co:Hl,cN:jo,bl:bp,c2:gp(e),bt:Fi,bu:Fi})},hp=y(function(e,r,n){return Ne(h([p(Oe,e,n,Gl),h([Xl(r),pp])]))}),_p=v(function(e,r){return Ne(o(Rc,hp(e),r))}),wp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Eo,513,r,n,a)},yp=wp({V:1,W:0,Z:!0}),xp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},Sp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return xp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Tp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vi=v(function(e,r){var n=e,a=r;return p(Tp,32774,n,a)}),Cp=1,Ri=771,Lp=770,Ho=Sp({bv:0,aH:o(Vi,Cp,Ri),by:0,bA:o(Vi,Lp,Ri),bF:0,bV:0}),jr=h([yp,Ho]),Pp=function(e){var r=e;return r.dO},zp=function(e){var r=e;return r.dP},Il=function(e){var r=e;return r.dQ},kp=function(e){var r=e;return r.dR},Mp=function(e){var r=e;return r.dS},Ul=function(e){var r=e;return r.dT},Or=v(function(e,r){var n=e,a=r;return a-n}),Jl=function(e){return V(o(Or,kp(e),Pp(e)),o(Or,Mp(e),zp(e)),o(Or,Ul(e),Il(e)))},Ei=function(e){var r=e;return Vr(r)},Dp=function(e){return e},Ap=function(e){return gr({cA:Dp({fT:e.H,fX:e.I,c5:e.J}),c3:kr({fT:e.q,fX:e.r,c5:e.s}),c4:kr({fT:e.t,fX:e.u,c5:e.v}),c6:kr({fT:e.w,fX:e.x,c5:e.y})})},ct=v(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,$=u;return{fT:a.fT*$.fT+a.fX*$.fX+a.c5*$.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),Ol=v(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,$=n.c6,s=$,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),ql=v(function(e,r){return{cA:o(Ol,e,Vr(r)),c3:o(ct,e,yr(r)),c4:o(ct,e,xr(r)),c6:o(ct,e,Sr(r))}}),Bp=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),La=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(er,n,a)}),ua=v(function(e,r){return J(e,r)<0?e:r}),fe=v(function(e,r){var n=e,a=r;return o(ua,n,a)}),Fp=v(function(e,r){var n=La(r),a=La(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),We=function(e){var r=e;return r},Vp=function(e){var r=e;return V(r.fT,r.fX,r.c5)},hn=v(function(e,r){var n=e,a=r;return a+n}),Rp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=la(Se(a)),c=la(Se(n)),l=la(Se(t)),u=Vp(r),$=u.a,s=u.b,d=u.c;return{dO:o(hn,c,$),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o(Or,c,$),dS:o(Or,i,s),dT:o(Or,l,d)}}),ji=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,$=t.fX*r,s=t.fT*r,d=We(Sr(e)),m=Z(l*d.fT)+Z(c*d.fX)+Z(i*d.c5),f=We(xr(e)),g=Z(l*f.fT)+Z(c*f.fX)+Z(i*f.c5),b=We(yr(e)),w=Z(l*b.fT)+Z(c*b.fX)+Z(i*b.c5),x=o(Rp,V(w,g,m),o(Ol,e,p(Bp,s,$,u)));if(a.$)return te(x);var _=a.a;return te(o(Fp,_,x))}),Et=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Et,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(ql,Ap($),e),m=r*$.bX,f=e,g=r,b=C(Et,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),an=G$,tn=H$,on=X$,Yl=function(e){return{$:4,a:e}},Ep=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Xn=function(e){return Yl(o(Ep,e,L))},jp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Np=function(e){var r=e;return r},Ni=Go({a8:Jr,co:0,cN:jo,bl:Qr,c2:255,bt:Jr,bu:Jr}),Xr=dv,lr=0,Wp=function(e){var r=e,n=o(er,Z(r.fT),o(er,Z(r.fX),Z(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=Xr(i*i+t*t+a*a);return c*n}else return lr},Ce={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Re=v(function(e,r){var n=e,a=r;return Ze({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),fn=P({bd:o(Re,Ce,Ce),bK:o(Re,Ce,Ce),bL:o(Re,Ce,Ce),bM:o(Re,Ce,Ce)},C(nn,0,0,0,0)),Zl=514,Ql=function(e){var r=e.Z,n=e.W,a=e.V;return C(Eo,515,r,n,a)},Kl=240,Gp=h([Ql({V:1,W:0,Z:!0}),Wo({a8:xe,co:Kl,cN:0,bl:Zl,c2:0,bt:xe,bu:xe}),Ho]),Hp=v(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=Se(a),l=c,u=Se(t),$=u,s=n.cL;if(s.$){var m=s.a;return Lt($)?Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return Lt($)?Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),Qn=v(function(e,r){return(1&e>>r)===1?0:1}),Xp=function(e){return h([Ql({V:1,W:0,Z:!0}),Wo({a8:xe,co:Kl,cN:e,bl:Zl,c2:0,bt:xe,bu:xe}),Ho])},Ip=y(function(e,r,n){return Ne(o(re,function(a){var t=a<<4,i=C(nn,o(Qn,a,0),o(Qn,a,1),o(Qn,a,2),o(Qn,a,3));return p(Oe,e,P(r,i),Xp(t))},o(Dr,1,o(jn,2,n)-1)))}),qr=function(e){var r=e;return r},Up=ef,Wi=function(e){var r=e;return $r(Sr(r))},Jp={cA:Ie,c3:So,c4:Ao,c6:To},Ja=function(e){var r=e;return r},Op=function(e){var r=Ja(Vr(e)),n=We(Sr(e)),a=We(xr(e)),t=We(yr(e));return Ze({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},qp=v(function(e,r){var n=r;return Op(o(ql,n,e))}),Yp=function(e){return o(qp,Jp,e)},Zp=function(e){var r=e;return r.c1},Qp=function(e){var r=e;return yr(r)},Kp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),e3=function(e){var r=e;return xr(r)},r3=function(e){var r=Zp(e.ev),n=gr({cA:Ei(r),c3:Qp(r),c4:e3(r),c6:$r(Wi(r))}),a=Xn(e.aP),t=a,i=C(Et,n,1,q,h([t]));if(i.$===1)return L;var c=i.a,l=Yp(r),u=o(K,.99,o(ce,Se(e.aJ),Ft(Il(c)))),$=Jl(c),s=$.a,d=$.b,m=$.c,f=Wp(p(Kp,s,d,m)),g=o(K,1.01,o(hn,f,Ft(Ul(c)))),b=o(Hp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Up(b).dM,x=w?We($r(Wi(r))):qr(Ei(r)),_=function(){var oe=e.bZ;switch(oe.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var se=oe.a;return P(3,se);case 4:var se=oe.a;return P(4,se);default:return P(5,0)}}(),T=_.a,M=_.b,W=e.bD,j=W,E=o(Ro,j,e.b$),N=E,G=Ze({dx:0,dy:x.fT,dz:an(N),dA:e.ec,dB:0,dC:x.fX,dD:tn(N),dE:Np(f),dF:0,dG:x.c5,dH:on(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),B=Le(Nl,G,l,b,jp,t,{M:L,U:L,fz:L}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return Ne(h([p(Oe,B.M,P(Q,ot),jr),p(Oe,B.U,fn,jr)]));case 1:var Q=O.a;return Ne(h([p(Oe,B.M,fn,jr),h([Ni]),p(Oe,B.fz,Q.bd,Gl),h([Xl(0)]),p(Oe,B.M,P(Q,ot),Gp),p(Oe,B.U,fn,jr)]));default:var ie=O.a,ve=O.b;return Ne(h([p(Oe,B.M,P(ve,ot),jr),h([Ni]),o(_p,B.fz,ie),p(Ip,B.M,ve,Mr(ie)),p(Oe,B.U,fn,jr)]))}},n3=function(e){return o(Dn,"width",Ae(e))},a3=v(function(e,r){var n=h([U0(1),Z0(0),j0(!0),C(H0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(k,W0,n),"1",1);default:var M=T.a;return V(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Bi($),d=o(ge,"height",Ae(s)+"px"),m=Bi(u),f=m/s,g=o(Vo,function(T){return r3({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(ge,"width",Ae(m)+"px"),w=e.aI,x=w,_=Q0(x);return p(q0,"div",h([o(ge,"padding","0px"),b,d]),h([P(i,p(rp,t,h([n3(Ue(m*c)),J0(Ue(s*c)),b,d,o(ge,"display","block"),o(ge,"background-color",_)]),g))]))}),t3=function(e){return o(a3,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},eu=function(e){return e},Gi=eu({fT:.31271,fX:.32902}),o3=v(function(e,r){var n=e,a=We(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(Ro,r.cd,r.b6),u=l;return{by:on(u),ex:n,bF:tn(u),cJ:0,bV:an(u),cZ:1,fT:-t,fX:-i,c5:-c}}),i3=function(e){return e},c3=function(e){return i3(1.2*o(jn,2,e))},lt=function(e){return e},l3={$:0},u3=l3,ru=function(e){return e},v3=v(function(e,r){var n=e,a=r;return J(a,n)>0}),Hi=function(e){var r=e;return r},$3=function(e){e:for(;;){if(br(e.e2,lr)&&br(e.e3,lr))return Ce;if(o(v3,Se(e.e2),Se(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:$r(e.ei)};e=r;continue e}else{var n=Z(Hi(e.e3)/rr),a=Z(Hi(e.e2)/rr),t=We(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(Ro,ru(1),e.b6),$=u;return{by:a*on($),ex:!1,bF:a*tn($),cJ:n/a,bV:a*an($),cZ:3,fT:i,fX:c,c5:l}}}},Xi=function(e){return $3({b6:e.b6,e2:e.cd,e3:lr,ei:e.ei})},f3=function(e){var r=e;return r},nu=function(e){var r=p(Bl,1667,25e3,f3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return eu({fT:n,fX:a})},au=function(e){return e},s3=nu(au(12e3)),d3=nu(au(5600)),m3=function(e){return{$:2,a:e}},p3=function(e){return m3(e)},b3=v(function(e,r){return{$:2,a:e,b:r}}),tu=function(e){return{$:0,a:e}},Kn=function(e){var r=e;return r},g3=function(e){var r=e;return r.ex},h3=tu(fn.a),_3=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(k,a,i),c):P(i,o(k,a,c))});return p(or,n,P(L,L),r)}),w3=function(e){var r=e;return Ze({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},y3=ee(function(e,r,n,a,t,i,c,l){var u=o(_3,g3,h([Kn(e),Kn(r),Kn(n),Kn(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(b3,o(re,w3,$),{bd:o(Re,m,g),bK:o(Re,w,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return h3}else return tu({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),x3=y(function(e,r,n){return Da(y3,e,r,n,Ce,Ce,Ce,Ce,Ce)}),S3=function(e){var r=o(o3,R0(e.fz),{b6:d3,eG:e.fI,cd:lt(8e4)}),n=Xi({b6:s3,cd:lt(2e4),ei:e.ei}),a=Xi({b6:Gi,cd:lt(15e3),ei:$r(e.ei)}),t=p(x3,r,n,a);return t3({b0:p3(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:c3(15),bJ:t,bZ:u3,b$:Gi})},ou=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),T3=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),iu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),C3=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),L3=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),P3=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Xo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(P3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(ou,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(T3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(iu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(L3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(cu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(C3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Io={$:0},z3=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=La(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),k3=y(function(e,r,n){var a=La(e(r));return Da(z3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),ut=v(function(e,r){var n=e,a=r;return J(a,n)<1}),lu=function(e){return o(ut,e.dO,e.dR)&&o(ut,e.dP,e.dS)&&o(ut,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},zn=function(e){var r=e;return r},_n=function(e){var r=e;return r.fT},wn=function(e){var r=e;return r.fX},yn=function(e){var r=e;return r.c5},uu=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=_n(n),c=wn(n),l=yn(n),u=_n(a),$=wn(a),s=yn(a),d=_n(t),m=wn(t),f=yn(t);return lu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,$,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,$,m)),dT:o(fe,l,o(fe,s,f))})},vu=I$,Pe=function(e){return vu(Ja(e))},$u=function(e){var r=e;return r},Oa=function(e){return vu($u(e))},M3=v(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),jt=v(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),D3={fT:0,fX:0,c5:0},A3=v(function(e,r){var n=e,a=r,t=o(er,Z(a.fT),o(er,Z(a.fX),Z(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=Xr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return D3}),B3=A3(ru(1)),fu=y(function(e,r,n){var a=o(jt,r,n),t=o(jt,e,r);return B3(o(M3,a,t))}),F3=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Oa(p(fu,n,a,t));return V({o:i,bT:Pe(n)},{o:i,bT:Pe(a)},{o:i,bT:Pe(t)})},V3=v(function(e,r){return{$:2,a:e,b:r}}),su=V3({df:3,$7:0,dV:4}),R3=function(e){if(e.b){var r=e.a,n=e.b,a=su(o(re,F3,e)),t=p(k3,uu,r,n);return C(ou,t,e,a,0)}else return Io},Ve=y(function(e,r,n){return V(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),du=function(){var e=vr(1),r=vr(1),n=vr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(pe,i,t,a),l=o(K,.5,e),u=p(pe,i,t,l),$=o(K,.5,r),s=p(pe,i,$,a),d=p(pe,i,$,l),m=o(K,.5,n),f=p(pe,m,t,a),g=p(pe,m,$,a),b=p(pe,m,t,l),w=p(pe,m,$,l);return Xo(R3(h([p(Ve,c,g,f),p(Ve,c,s,g),p(Ve,u,b,w),p(Ve,u,w,d),p(Ve,f,g,w),p(Ve,f,w,b),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,b),p(Ve,c,b,u),p(Ve,s,w,g),p(Ve,s,d,w)])))}(),ea={$:0},E3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),j3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Oa(p(fu,u,l,c)),s={o:$,bT:Pe(u)},d={o:$,bT:Pe(l)},m={o:$,bT:Pe(c)};return o(k,s,o(k,d,o(k,m,n)))}),Uo=function(e){var r=e;return r.D},N3=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),Nt=4294967295>>>32-Cn,Wt=Zu,W3=y(function(e,r,n){e:for(;;){var a=Nt&r>>>e,t=o(Wt,a,n);if(t.$){var $=t.a;return o(Wt,Nt&r,$)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),G3=function(e){return e>>>5<<5},H3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,G3(n))>-1?te(o(Wt,Nt&e,i)):te(p(W3,a,e,t))}),Jo=function(e){var r=e;return r.ah},vt=v(function(e,r){return o(H3,e,Jo(r))}),X3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(N3,y(function(c,l,u){return V(c,l,u)}),o(vt,a,e),o(vt,t,e),o(vt,i,e))};return o(Rn,r,Uo(e))},I3=y(function(e,r,n){e:for(;;){var a=o(vo,Fe,e),t=a.a,i=a.b;if(J(Tt(t),Fe)<0)return o(Xc,!0,{z:r,l:n,p:t});var c=i,l=o(k,Gc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Oo=function(e){return e.b?p(I3,e,L,0):Nc},U3=y(function(e,r,n){return e(r(n))}),J3=v(function(e,r){return!o(al,o(U3,gs,e),r)}),O3=v(function(e,r){return p(or,v(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),q3=function(e){var r=e.a;return r},mu=v(function(e,r){var n=q3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(J3,a,r)?{D:r,ah:e}:{D:o(O3,a,r),ah:e}}),Y3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),In=Y3({df:1,$7:3,dV:4}),va=v(function(e,r){var n=qr(r),a=qr(e);return P(V(a.fT,a.fX,a.c5),V(n.fT,n.fX,n.c5))}),Ii=p(Gn,0,0,0),$t=Je(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(Vn,o(va,e,r),t);if($.$){var d={o:Ii,bT:Pe(r)},m={o:Ii,bT:Pe(e)},f=u+1,g=u;return V(o(k,V(n,g,f),o(k,V(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=$.a;return V(o(k,V(n,s,a),c),l,u)}}),Z3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=$,T=a+3,M=Le($t,s,m,f,b,r,Le($t,d,s,g,f,r,Le($t,m,d,b,g,r,t)));e=w,r=x,n=_,a=T,t=M;continue e}else{var W=t,j=W.a,E=W.b;return P(j,Be(E))}}),Q3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(pn,o(va,m,s),f,p(pn,o(va,s,d),g,p(pn,o(va,d,m),b,t))),x=o(k,V(b,g,f),a),_=e,T=$,M=n+3,W=x,j=w;e=_,r=T,n=M,a=W,t=j;continue e}else return V(a,t,n)}),Cr=y(function(e,r,n){var a=X3(n),t=p(or,j3(r),L,a),i=S(Q3,r,a,0,L,xl),c=i.a,l=i.b,u=i.c,$=S(Z3,r,l,a,0,V(c,L,u)),s=$.a,d=$.b,m=wl(d)?t:le(t,d);return p(E3,e,o(mu,Oo(m),s),o(In,m,s))}),Gt=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(Dr,0,Mr(e)-1)),ah:Oo(Ne(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},pu=function(e){switch(e.$){case 0:return ea;case 1:var a=e.a,r=e.b,n=o(re,zn,r);return p(Cr,a,zr,Gt(n));case 2:var a=e.a,r=e.b,n=o(re,zn,r);return p(Cr,a,zr,Gt(n));case 3:var a=e.a,t=e.b;return p(Cr,a,zr,t);case 4:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Cr,a,function(i){return i.bT},t);case 8:return ea;case 9:return ea;default:return ea}},Ui=pu(du),bu={$:0},z=bu,me=v(function(e,r){return{$:1,a:e,b:r}}),K3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},eb=1029,rb=function(e){return{$:5,a:e}},gu=function(e){var r=e;return rb(r)},nb=gu(eb),ab=1028,tb=gu(ab),ze=y(function(e,r,n){return r===1?e?o(k,nb,n):o(k,tb,n):n}),hu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ft=R(function(e,r,n,a){return o(me,r,ee(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),hu,K3,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),qo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},_u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ir=R(function(e,r,n,a){return o(me,r,ee(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),_u,qo,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),wu=v(function(e,r){return{$:3,a:e,b:r}}),ob={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},yu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ib=R(function(e,r,n,a){return o(wu,n,ee(function(t,i,c,l,u,$,s,d){return S(ne,d,yu,ob,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),Yo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Un=function(e){var r=e;return r},qa=U$,cr=he(function(e,r,n,a,t){return o(me,n,ee(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),_u,Yo,a,{aN:o(qa,Un(r),e),b:l,c,d:s,e:i,f:$})}))}),cb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},lb=he(function(e,r,n,a,t){return o(wu,a,ee(function(i,c,l,u,$,s,d,m){return S(ne,m,yu,cb,t,{aN:o(qa,Un(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ra=R(function(e,r,n,a){return o(me,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),Su,xu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:$,e:t,f:u})}))}),Tu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ub=Je(function(e,r,n,a,t,i){return o(me,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,$,i,f),Cu,Tu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Lu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},vb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(me,u,ee(function(d,m,f,g,b,w,x,_){var T=x.a,M=x.b;return S(ne,p(ze,g,s,_),Cu,Lu,$,{b4:e,b7:r,b8:i,b9:a,P:M,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Pu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},na=Je(function(e,r,n,a,t,i){return o(me,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,$,i,f),Su,Pu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),$b=function(e){return{$:0,a:e}},Ji=v(function(e,r){return{$:1,a:e,b:r}}),xn=v(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),fb=function(e){return C(nn,an(e),tn(e),on(e),1)},Zo=C(nn,0,0,0,0),$a=v(function(e,r){if(r.$){var a=r.a.C;return P(a,Zo)}else{var n=r.a;return P(e,fb(n))}}),zu=v(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Ji,P(t,Zo),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ji,o($a,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,$b(a)}}),sb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),aa=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),db=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mb=function(e){return o(De,e,1)},Ht=o(De,0,0),Nr=v(function(e,r){if(r.$){var a=r.a.C;return P(a,Ht)}else{var n=r.a;return P(e,mb(n))}}),ku=R(function(e,r,n,a){var t=C(db,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(aa,P(u,Zo),o(Nr,u,r),o(Nr,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(aa,o($a,u,e),P(u,Ht),o(Nr,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(aa,o($a,u,e),o(Nr,u,r),P(u,Ht),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(aa,o($a,u,e),o(Nr,u,r),o(Nr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(sb,i,c,l)}}),pb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},st=he(function(e,r,n,a,t){return o(me,n,ee(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),hu,pb,a,{b1:Un(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),Mu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},bb=R(function(e,r,n,a){return o(me,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),Mu,Tu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),gb=Ut(function(e,r,n,a,t,i,c,l,u){return o(me,c,ee(function($,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ne,p(ze,m,u,w),Mu,Lu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:$,a$:0,f})}))}),kn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),hb=function(e){var r=e;return p(kn,r.dR,r.dO,.5)},_b=function(e){var r=e;return p(kn,r.dS,r.dP,.5)},wb=function(e){var r=e;return p(kn,r.dT,r.dQ,.5)},yb=function(e){return p(pe,hb(e),_b(e),wb(e))},H=function(e){var r=Jl(e),n=r.a,a=r.b,t=r.c;return{ey:Ja(yb(e)),eS:n/2,eT:a/2,eU:t/2}},Qo=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ft,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(ib,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(st,l,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(st,l,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(st,l,$,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(cr,u,$,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(cr,u,$,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(cr,u,$,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(cr,u,$,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(cr,u,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(cr,u,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(cr,u,$,H(t),c,a);case 8:var t=r.a,c=r.c;return S(cr,u,$,H(t),c,0);case 9:var t=r.a,c=r.c;return S(cr,u,$,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(lb,u,$,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(zu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(bb,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Le(ub,b,x,_,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(ra,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(ra,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(ra,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(ra,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,M=e.c,W=e.d,j=e.e,E=C(ku,T,M,W,j);if(E.$){var O=E.a,Q=O.a,ie=O.b,ve=E.b,oe=ve.a,se=ve.b,ke=E.c,Te=ke.a,dr=ke.b,mr=E.d,x=mr.a,_=mr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Uu(gb,Q,ie,oe,se,Te,dr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return vb(Q)(ie)(oe)(se)(Te)(dr)(x)(_)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,G=E.b,B=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return Le(na,N,G,B,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return Le(na,N,G,B,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Le(na,N,G,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Le(na,N,G,B,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),dt=function(e){var r=e;return r.fT},mt=function(e){var r=e;return r.fX},pt=function(e){var r=e;return r.c5},xb=function(e){var r=e,n=pt(r.c6),a=mt(r.c6),t=dt(r.c6),i=pt(r.c4),c=mt(r.c4),l=dt(r.c4),u=pt(r.c3),$=mt(r.c3),s=dt(r.c3);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},Sb=function(e){var r=Ja(Vr(e)),n=We(Sr(e)),a=We(xr(e)),t=We(yr(e));return{dp:xb(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Wr=v(function(e,r){return{$:5,a:e,b:r}}),Du=v(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(jl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),Au=v(function(e,r){return o(Du,Sb(e),r)}),Ya=function(e){return{$:2,a:e}},Tb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),Cb=q$,Lb=O$,Oi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=Lb(a),g=f.fT,b=f.fX,w=f.c5,x=f.em,_=Cb({em:x,fT:g*s,fX:b*d,c5:w*m});return Da(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Xt=v(function(e,r){switch(r.$){case 0:return bu;case 5:var n=r.a,a=r.b;return o(Wr,n,o(Xt,e,a));case 1:var t=r.a,i=r.b;return o(me,o(Tb,e,t),o(Oi,e,i));case 3:return r;case 2:var i=r.a;return Ya(o(Oi,e,i));default:var c=r.a;return Yl(o(re,Xt(e),c))}}),Ko=v(function(e,r){var n=r;return o(Xt,e,n)}),ei={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Bu=7683,Fu=7682,Pb=p(No,{co:0,cN:0,c2:15},{a8:xe,bl:Qr,bt:xe,bu:Bu},{a8:xe,bl:Qr,bt:xe,bu:Fu}),zb=p(No,{co:0,cN:0,c2:15},{a8:xe,bl:Qr,bt:xe,bu:Fu},{a8:xe,bl:Qr,bt:xe,bu:Bu}),ri=v(function(e,r){return e?o(k,zb,r):o(k,Pb,r)}),kb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Mb=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,$){return S(ne,o(ri,i,$),kb,ei,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},Pa=function(e){var r=Mb(e);if(r.$)return z;var n=r.a;return Ya(n)},Db=R(function(e,r,n,a){var t=o(Qo,n,du),i=function(){var s=P(e,r);return s.a?s.b?Xn(h([t,Pa(Ui)])):t:s.b?Pa(Ui):z}(),c=Ha(a),l=c.a,u=c.b,$=c.c;return o(Au,Ga(a),o(Ko,V(l,u,$),i))}),Ab=v(function(e,r){return C(Db,!0,!0,e,r)}),Vu=v(function(e,r){return{$:0,a:e,b:r}}),Bb=function(e){var r=_o(e),n=r.cM,a=r.cc,t=r.b5;return p(Gn,n,a,t)},Fb=function(e){return o(Vu,0,Rt(Bb(e)))},Sn=function(e){var r=e;return Br(r)},Vb=v(function(e,r){var n=r;return n/e}),qi=function(e){var r=e;return{fT:Br(r),fX:Zr(r)}},Rb=v(function(e,r){var n=e.bT,a=e.o;return o(k,{o:Oa(a),bT:Pe(n)},r)}),Eb=Ma(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=on(l.bT),s=tn(l.bT),d=an(l.bT),m=o(ua,e,d),f=o(er,r,d),g=o(ua,n,s),b=o(er,a,s),w=o(ua,t,$),x=o(er,i,$),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return lu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Ru=v(function(e,r){var n=on(e.bT),a=tn(e.bT),t=an(e.bT);return Jt(Eb,t,t,a,a,n,n,r)}),jb=function(e){var r=p(Dc,Rb,L,Jo(e));if(r.b){var n=r.a,a=r.b,t=o(In,r,Uo(e)),i=o(Ru,n,a);return C(iu,i,e,t,0)}else return Io},Nb=kr({fT:0,fX:0,c5:-1}),Yi=v(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),za=function(e){var r=e;return Zr(r)},sn=function(e){var r=e;return r},It=function(e){return Ar(2*rr*e)},Zi=zl({cA:Ie,c3:So,c4:Ao}),Eu=function(){var e=72,r=o(Vb,e,It(1)),n=vr(1),a=sn(kl),t=sn(Nb),i=vr(1),c=o(K,.5,i),l=p(pe,lr,lr,c),u=o(K,-.5,i),$=p(pe,lr,lr,u),s=function(f){var g=o(K,f,r),b=sn(o(Yi,Zi,qi(g))),w=o(K,Sn(g),n),x=o(K,za(g),n),_=p(pe,w,x,c),T=p(pe,w,x,u),M=o(xa,e,f+1),W=o(K,M,r),j=sn(o(Yi,Zi,qi(W))),E=o(K,Sn(W),n),N=o(K,za(W),n),G=p(pe,E,N,u),B=p(pe,E,N,c);return h([V({o:t,bT:$},{o:t,bT:G},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:G},{o:j,bT:B}),V({o:b,bT:T},{o:j,bT:B},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(re,s,o(Dr,0,e-1)),m=Gt(Ne(d));return Xo(jb(m))}(),Qi=pu(Eu),Wb=function(e){var r=e,n=Z(r.c5),a=Z(r.fX),t=Z(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=Xr(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=Xr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(J(a,n)<1){var i=Xr(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=Xr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},Gb=function(e){var r=Wb(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return P(r,c)},Hb=function(e){var r=xo(e),n=Gb(r),a=n.a,t=n.b;return gr({cA:Fl(e),c3:a,c4:t,c6:r})},Xb=R(function(e,r,n,a){var t=Hb(Fo(a)),i=o(Qo,n,Eu),c=function(){var d=P(e,r);return d.a?d.b?Xn(h([i,Pa(Qi)])):i:d.b?Pa(Qi):z}(),l=Rl(a),u=l,$=Vl(a),s=$;return o(Au,t,o(Ko,V(u,u,s),c))}),Ib=v(function(e,r){return C(Xb,!0,!0,e,r)}),Ki={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},ec={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},dn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=qr(n),c=qr(a),l=qr(t);return Ze({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},ta=su(h([V({cY:0},{cY:1},{cY:2})])),Ub=v(function(e,r){var n=uu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(me,a,ee(function(_,T,M,W,j,E,N,G){return S(ne,p(ze,W,0,G),Ki,qo,ta,{aw:t,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(me,a,ee(function(_,T,M,W,j,E,N,G){return S(ne,p(ze,W,0,G),Ki,Yo,ta,{aN:o(qa,Un(c),i),b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(zu,l,f);if(u.$)return z;var $=u.a;return o(me,a,ee(function(_,T,M,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(ze,W,0,G),ec,xu,ta,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:$,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(ku,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(me,a,ee(function(_,T,M,W,j,E,N,G){var B=N.a,O=N.b;return S(ne,p(ze,W,0,G),ec,Pu,ta,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:M,c:T,d:E,cQ:w,e:_,bq:dn(r),f:j})}))}}),Jb=function(){var e=h([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=h([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(In,e,r)}(),Ob={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},rc=function(e){return Ya(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(ri,t,u),Ob,ei,Jb,{b:a,c:n,d:c,e:r,bY:l,bq:dn(e),f:i})}))},qb=R(function(e,r,n,a){var t=o(Ub,n,a),i=P(e,r);return i.a?i.b?Xn(h([t,rc(a)])):t:i.b?rc(a):z}),Yb=v(function(e,r){return C(qb,!0,!0,e,r)}),Zb=v(function(e,r){var n=yn(r),a=yn(e),t=wn(r),i=wn(e),c=_n(r),l=_n(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Qb=function(e){var r=ko(e),n=r.a,a=r.b;return o(Zb,n,a)},nc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Kb=v(function(e,r){return{$:1,a:e,b:r}}),eg=Kb({df:2,$7:0,dV:1}),ac=eg(h([P({dw:0},{dw:1})])),rg=v(function(e,r){var n=Qb(r),a=H(n),t=ko(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(me,a,ee(function($,s,d,m,f,g,b,w){return S(ne,w,nc,qo,ac,{aw:l,du:Pe(c),dv:Pe(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(me,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,nc,Yo,ac,{aN:o(qa,Un(u),l),du:Pe(c),dv:Pe(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),ng=v(function(e,r){return o(rg,e,r)}),tc=v(function(e,r){var n=e,a=r;return n/a}),ag=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(br(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),oc=v(function(e,r){return e<1?L:S(ag,0,e,e,r,L)}),tg=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Oa(a),bT:Pe(n),L:o(De,c,l)},r)}),og=function(e){var r=p(Dc,tg,L,Jo(e));if(r.b){var n=r.a,a=r.b,t=o(In,r,Uo(e)),i=o(Ru,n,a);return C(cu,i,e,t,0)}else return Io},ju=v(function(e,r){var n=e,a=r,t=Br(a);return{fT:t*Br(n),fX:t*Zr(n),c5:Zr(a)}}),ig=function(){var e=vr(1),r=72,n=o(Dr,0,r-1),a=o(oc,r,o(kn,lr,It(1))),t=lo(r/2),i=o(Dr,0,t-1),c=o(oc,t,o(kn,$n(90),$n(-90))),l=Oo(Ne(o(re,function(s){return o(re,function(d){return{o:sn(o(ju,s,d)),bT:p(pe,o(K,Sn(d)*Sn(s),e),o(K,Sn(d)*za(s),e),o(K,za(d),e)),L:P(o(tc,s,It(1)),o(tc,o(hn,$n(90),d),$n(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ne(o(re,function(s){return Ne(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([V(b,g,m),V(b,m,f)])},i))},n));return Xo(og(o(mu,l,$)))}(),ka=72,oa=2*ka,cg=v(function(e,r){e:for(;;){var n=oa+1,a=o(xa,oa,2*e+3),t=o(xa,oa,2*e+2),i=2*e+1,c=2*e,l=oa,u=o(k,V(l,c,t),o(k,V(c,a,t),o(k,V(c,i,a),o(k,V(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),lg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),ug=v(function(e,r){e:for(;;){var n=p(lg,0,2*rr,e/ka),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),vg=function(){var e=o(ug,ka-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(cg,ka-1,L);return o(In,e,r)}(),$g={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ic=function(e){return Ya(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(ri,!0,u),$g,ei,vg,{aw:p(Gn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},fg=function(e){var r=$u(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},sg=v(function(e,r){return o(Du,fg(e),r)}),dg=R(function(e,r,n,a){var t=o(Qo,n,ig),i=function(){var u=P(e,r);return u.a?u.b?Xn(h([t,ic()])):t:u.b?ic():z}(),c=Ia(a),l=c;return o(sg,o(jt,Ie,Xa(a)),o(Ko,V(l,l,l),i))}),mg=v(function(e,r){return C(dg,!0,!0,e,r)}),pg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),bg=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),gg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Vu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(pg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Al,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(bg,n,a,t,i,c)}},hg=gg,Nu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(Ab,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Yb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(mg,hg(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Ib,t,i)]);case 4:var c=e.a,l=e.b;return h([o(ng,Fb(c),l)]);default:var u=e.a;return o(Vo,Nu,u)}},_g=function(e){return o(Vo,Nu,e)},wg=v(function(e,r){return S3({aI:F0(e.es),ev:e.ev,aJ:V0(.5),ca:e.ca,aK:P(Ai(Ue(e.cS.fR)),Ai(Ue(e.cS.eW))),aP:_g(r),fz:!0,fI:o(ju,Ar(e.fH),Ar(e.fJ)),ei:To})}),yg=v(function(e,r){return o(wg,{es:o(Km,"background color",e),ev:qm(e),ca:e.ca,cS:e.cS,fH:-Yn(135),fJ:-Yn(45)},h([tt(e),o(Vt,Yn(120),tt(e)),o(Vt,Yn(240),tt(e))]))}),xg=C(hm,yg,Pm,Lm,_m);const Sg={Main:{init:xg(o(A,function(e){return Me({e1:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Me({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Me({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",_a(Pn)))},o(D,"left",Y))},o(D,"pressedKeys",_a(Pn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Me({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Me({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Me({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Tg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),$(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},Cg=()=>{bt("pointerdown"),bt("wheel"),bt("keydown")},bt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Lg=Sg.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});Cg();Tg(Lg);
