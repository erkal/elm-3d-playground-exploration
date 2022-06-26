const Hu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Hu();function hr(e,r,n){return n.a=e,n.f=r,n}function v(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Oe(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Pa(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Et(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Te(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Rt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function za(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xu(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Iu=[];function Uu(e){return e.length}var Ou=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ju=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),qu=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Yu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Zu()),r});function Zu(e){return"<internals>"}function Yr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function pr(e,r){for(var n,a=[],t=lt(e,r,0,a);t&&(n=a.pop());t=lt(n.a,n.b,0,a));return t}function lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Yr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=ui(e),r=ui(r));for(var t in e)if(!lt(e[t],r[t],n+1,a))return!1;return!0}v(pr);v(function(e,r){return!pr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return O(e,r)<0});v(function(e,r){return O(e,r)<1});v(function(e,r){return O(e,r)>0});v(function(e,r){return O(e,r)>=0});var Ku=v(function(e,r){var n=O(e,r);return n<0?Mc:n?Vf:kc}),Dn=0;function P(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Ye(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var L={$:0};function rr(e,r){return{$:1,a:e,b:r}}var Qu=v(rr);function h(e){for(var r=L,n=e.length;n--;)r=rr(e[n],r);return r}function ka(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Oe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});v(function(e,r){return h(ka(r).sort(function(n,a){return O(e(n),e(a))}))});v(function(e,r){return h(ka(r).sort(function(n,a){var t=o(e,n,a);return t===kc?0:t===Mc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var rv=v(Math.pow);v(function(e,r){return r%e});var nv=v(function(e,r){var n=r%e;return e===0?Yr(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan;v(Math.atan2);function cv(e){return e}function lv(e){return e===1/0||e===-1/0}var uv=Math.ceil,vv=Math.floor,$v=Math.round,fv=Math.sqrt,qo=Math.log,sv=isNaN;function dv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var mv=v(function(e,r){return e+r});function pv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ae(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function bv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var hv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),_v=v(function(e,r){return r.split(e)}),wv=v(function(e,r){return r.join(e)}),yv=y(function(e,r,n){return n.slice(e,r)});function xv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Sv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Tv=v(function(e,r){return r.indexOf(e)>-1}),Cv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Lv=v(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function tc(e){return e+""}function Pv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ae(n==45?-r:r)}function zv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ae(r):q}function kv(e){return ka(e).join("")}function Mv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Dv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Bv(e){return{$:0,a:e}}function jt(e){return{$:2,b:e}}var Av=jt(function(e){return typeof e=="boolean"?ue(e):qe("a BOOL",e)}),Fv=jt(function(e){return typeof e=="number"?ue(e):qe("a FLOAT",e)}),Vv=jt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):qe("a STRING",e)});function Ev(e){return{$:3,b:e}}var Rv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var jv=v(function(e,r){return{$:10,b:r,h:e}}),Nv=v(function(e,r){return _r(e,[r])}),Gv=y(function(e,r,n){return _r(e,[r,n])});R(function(e,r,n,a){return _r(e,[r,n,a])});he(function(e,r,n,a,t){return _r(e,[r,n,a,t])});Oe(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});Pa(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Et(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ee(e,n)}catch(a){return we(o(Zt,"This is not valid JSON! "+a.message,r))}});var oc=v(function(e,r){return Ee(e,r)});function Ee(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):qe("null",r);case 3:return Hn(r)?Yo(e.b,r,h):qe("a LIST",r);case 4:return Hn(r)?Yo(e.b,r,Wv):qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return qe("an OBJECT with a field named `"+n+"`",r);var $=Ee(e.b,r[n]);return Xe($)?$:we(o(vi,n,$.a));case 7:var a=e.e;if(!Hn(r))return qe("an ARRAY",r);if(a>=r.length)return qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ee(e.b,r[a]);return Xe($)?$:we(o(Dc,a,$.a));case 8:if(typeof r!="object"||r===null||Hn(r))return qe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var $=Ee(e.b,r[i]);if(!Xe($))return we(o(vi,i,$.a));t=rr(P(i,$.a),t)}return ue(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ee(l[u],r);if(!Xe($))return $;c=c($.a)}return ue(c);case 10:var $=Ee(e.b,r);return Xe($)?Ee(e.h($.a),r):$;case 11:for(var s=L,d=e.g;d.b;d=d.b){var $=Ee(d.a,r);if(Xe($))return $;s=rr($.a,s)}return we(Ef(Be(s)));case 1:return we(o(Zt,e.a,r));case 0:return ue(e.a)}}function Yo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ee(e,r[i]);if(!Xe(c))return we(o(Dc,i,c.a));t[i]=c.a}return ue(n(t))}function Hn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Wv(e){return o(es,e.length,function(r){return e[r]})}function qe(e,r){return we(o(Zt,"Expecting "+e,r))}function Er(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Er(e.b,r.b);case 6:return e.d===r.d&&Er(e.b,r.b);case 7:return e.e===r.e&&Er(e.b,r.b);case 9:return e.f===r.f&&Zo(e.g,r.g);case 10:return e.h===r.h&&Er(e.b,r.b);case 11:return Zo(e.g,r.g)}}function Zo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Er(e[a],r[a]))return!1;return!0}var Hv=v(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}y(function(e,r,n){return n[e]=r,n});function kr(e){return{$:0,a:e}}function Xv(e){return{$:1,a:e}}function ur(e){return{$:2,b:e,c:null}}var ut=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Uv=0;function Nt(e){var r={$:0,e:Uv++,f:e,g:null,h:[]};return Gt(r),r}function cc(e){return ur(function(r){r(kr(Nt(e)))})}function lc(e,r){e.h.push(r),Gt(e)}var Ov=v(function(e,r){return ur(function(n){lc(e,r),n(kr(Dn))})}),Wa=!1,Ko=[];function Gt(e){if(Ko.push(e),!Wa){for(Wa=!0;e=Ko.shift();)Jv(e);Wa=!1}}function Jv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Gt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Wt(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);Xe(c)||Yr(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=qv(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),ei(l,b.b,t($))}return ei(l,u.b,t($)),d?{ports:d}:{}}var Ke={};function qv(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Zv(t,r)}return n}function Yv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Zv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ut,l,Iv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Nt(o(ut,l,e.b))}var Kv=v(function(e,r){return ur(function(n){e.g(r),n(kr(Dn))})});v(function(e,r){return o(Ov,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function Qv(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Qo=[],Ha=!1;function ei(e,r,n){if(Qo.push({p:e,q:r,r:n}),!Ha){Ha=!0;for(var a;a=Qo.shift();)e$(a.p,a.q,a.r);Ha=!1}}function e$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=r$(e,t,a,r.l);n[t]=n$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function r$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function n$(e,r,n){return n=n||{i:L,j:L},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function a$(e){Ke[e]&&Yr(3)}v(function(e,r){return r});function t$(e,r){return a$(e),Ke[e]={f:o$,u:r,a:i$},uc(e)}var o$=v(function(e,r){return function(n){return e(r(n))}});function i$(e,r){var n=L,a=Ke[e].u,t=kr(null);Ke[e].b=t,Ke[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);Xe(l)||Yr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var va,cr=typeof document!="undefined"?document:{};function Ht(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(mr(e,function(){}),t),{}});function vt(e){return{$:0,a:e}}var vc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),vr=vc(void 0),c$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),l$=c$(void 0);function u$(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var v$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return wr([e,r],function(){return e(r)})});y(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Oe(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Pa(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return Te(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return Rt(e,r,n,a,t,i,c,l)})});Et(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return za(e,r,n,a,t,i,c,l,u)})});var $c=v(function(e,r){return{$:"a0",n:e,o:r}}),$$=v(function(e,r){return{$:"a1",n:e,o:r}}),fc=v(function(e,r){return{$:"a2",n:e,o:r}}),Bn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function f$(e){return e=="script"?"p":e}function s$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o($c,r.n,d$(e,r.o)):r});function d$(e,r){var n=no(r);return{$:r.$,a:n?p(rs,n<3?m$:p$,ze(e),r.a):o(da,e,r.a)}}var m$=v(function(e,r){return P(e(r.a),r.b)}),p$=v(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ri(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ri(c,t,i):c[t]=i}return r}function ri(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function mr(e,r){var n=e.$;if(n===5)return mr(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=mr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return $t(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),$t(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ht(c,mr(n===1?l[u]:l[u].b,r));return c}function $t(e,r,n){for(var a in n){var t=n[a];a==="a1"?b$(e,t):a==="a0"?_$(e,r,t):a==="a3"?g$(e,t):a==="a4"?h$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function b$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function g$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function h$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function _$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=w$(r,i),e.addEventListener(t,c,It&&{passive:no(i)<2}),a[t]=c}}var It;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){It=!0}}))}catch{}function w$(e,r){function n(a){var t=n.q,i=Ee(t.a,a);if(!!Xe(i)){for(var c=no(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cX,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function y$(e,r){return e.$==r.$&&Er(e.a,r.a)}function sc(e,r){var n=[];return Ie(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=k$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!x$(d,m):d!==m)&&_e(n,2,a,m),Ie(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:ni(e,r,n,a,S$);return;case 2:ni(e,r,n,a,T$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Ut(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function x$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ni(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Ut(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Ut(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ut(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&y$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function S$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ie(s,i[$],n,++a),a+=s.b||0}}function T$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,T=b.b,M=void 0,G=void 0;if(w===x){f++,Ie(_,T,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,W=j.b;G=x===N}if(E){var A=E.a,J=E.b;M=w===A}if(M&&G){f++,Ie(_,J,t,f),cn(i,t,w,T,m,c),f+=_.b||0,f++,ln(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(M){f++,cn(i,t,x,T,m,c),Ie(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(G){f++,ln(i,t,w,_,f),f+=_.b||0,f++,Ie(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===A){f++,ln(i,t,w,_,f),cn(i,t,x,T,m,c),f+=_.b||0,f++,Ie(W,J,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;ln(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Z=Z||[],b=u[m];cn(i,t,b.a,b.b,void 0,Z),m++}(t.length>0||c.length>0||Z)&&_e(n,8,a,{w:t,x:c,y:Z})}var dc="_elmW6BL";function cn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}cn(e,r,n+dc,a,t,i)}function ln(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}ln(e,r,n+dc,a,t)}function mc(e,r,n,a){un(e,r,n,0,0,r.b,a)}function un(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)mc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&un(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&un(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return un(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=un(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function pc(e,r,n,a){return n.length===0?e:(mc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=C$(t,a);t===e&&(e=i)}return e}function C$(e,r){switch(r.$){case 0:return L$(e,r.s,r.u);case 4:return $t(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(mr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return P$(e,r);case 5:return r.s(e);default:Yr(10)}}function L$(e,r,n){var a=e.parentNode,t=mr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function P$(e,r){var n=r.s,a=z$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:mr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ht(e,a),e}function z$(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ht(n,i.c===2?i.s:mr(i.z,r.u))}return n}}function Ot(e){if(e.nodeType===3)return vt(e.textContent);if(e.nodeType!==1)return vt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(Bn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,$=e.childNodes,a=$.length;a--;)u=rr(Ot($[a]),u);return p(vr,l,r,u)}function k$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var M$=R(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Ot(l);return bc(i,function($){var s=c($),d=sc(u,s);l=pc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=cr.title,$=cr.body,s=Ot($);return bc(i,function(d){va=c;var m=l(d),f=vr("body")(L)(m.eu),g=sc(s,f);$=pc($,s,g,t),s=f,va=0,u!==m.fK&&(cr.title=u=m.fK)})})});var fa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}v(function(e,r){return o(oo,ao,ur(function(){r&&history.go(r),e()}))});v(function(e,r){return o(oo,ao,ur(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(oo,ao,ur(function(){history.replaceState({},"",r),e()}))});var D$={addEventListener:function(){},removeEventListener:function(){}},B$=typeof window!="undefined"?window:D$;y(function(e,r,n){return cc(ur(function(a){function t(i){Nt(n(i))}return e.addEventListener(r,t,It&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ee(e,r);return Xe(n)?ae(n.a):q});function gc(e,r){return ur(function(n){fa(function(){var a=document.getElementById(e);n(a?kr(r(a)):Xv(as(e)))})})}function A$(e){return ur(function(r){fa(function(){r(kr(e()))})})}v(function(e,r){return gc(r,function(n){return n[e](),Dn})});v(function(e,r){return A$(function(){return B$.scroll(e,r),Dn})});y(function(e,r,n){return gc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Dn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var F$=v(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return ae(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var V$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?ae(d):q}a.push(C(vl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?ae($):q}return n(C(vl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var E$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/R$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function R$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Jt=new Float64Array(3),ai=new Float64Array(3),ti=new Float64Array(3),j$=y(function(e,r,n){return new Float64Array([e,r,n])}),N$=function(e){return e[0]},G$=function(e){return e[1]},W$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var H$=function(e){return new Float64Array([e.fT,e.fX,e.c6])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(hc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(hc(e,r,n),n)}v(_c);function wc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var X$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),vn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(vn);function ft(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(ft);v(function(e,r){var n,a=Jt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=vn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(vn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(vn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(vn(r,a)+e[14])/n,t});var I$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var U$=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},O$=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/J$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function J$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var q$=new Float64Array(16),Y$=new Float64Array(16),Z$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},K$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Oe(yc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return yc(c,l,i,t,n,a)});function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Oe(xc);R(function(e,r,n,a){return xc(e,r,n,a,-1,1)});function Sc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],T=r[0],M=r[1],G=r[2],j=r[3],E=r[4],N=r[5],W=r[6],A=r[7],J=r[8],Z=r[9],oe=r[10],ve=r[11],te=r[12],se=r[13],Pe=r[14],xe=r[15];return n[0]=a*T+l*M+d*G+b*j,n[1]=t*T+u*M+m*G+w*j,n[2]=i*T+$*M+f*G+x*j,n[3]=c*T+s*M+g*G+_*j,n[4]=a*E+l*N+d*W+b*A,n[5]=t*E+u*N+m*W+w*A,n[6]=i*E+$*N+f*W+x*A,n[7]=c*E+s*N+g*W+_*A,n[8]=a*J+l*Z+d*oe+b*ve,n[9]=t*J+u*Z+m*oe+w*ve,n[10]=i*J+$*Z+f*oe+x*ve,n[11]=c*J+s*Z+g*oe+_*ve,n[12]=a*te+l*se+d*Pe+b*xe,n[13]=t*te+u*se+m*Pe+w*xe,n[14]=i*te+$*se+f*Pe+x*xe,n[15]=c*te+s*se+g*Pe+_*xe,n}v(Sc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],T=r[5],M=r[6],G=r[8],j=r[9],E=r[10],N=r[12],W=r[13],A=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*T+$*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+d*M,n[7]=0,n[8]=a*G+c*j+$*E,n[9]=t*G+l*j+s*E,n[10]=i*G+u*j+d*E,n[11]=0,n[12]=a*N+c*W+$*A+m,n[13]=t*N+l*W+s*A+f,n[14]=i*N+u*W+d*A+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=sa(r,Jt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/wc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,T=b-m,M=g-f,G=c*c*$+u,j=w+d,E=b+m,N=w-d,W=l*l*$+u,A=n[0],J=n[1],Z=n[2],oe=n[3],ve=n[4],te=n[5],se=n[6],Pe=n[7],xe=n[8],sr=n[9],dr=n[10],Ga=n[11],ju=n[12],Nu=n[13],Gu=n[14],Wu=n[15];return a[0]=A*x+ve*_+xe*T,a[1]=J*x+te*_+sr*T,a[2]=Z*x+se*_+dr*T,a[3]=oe*x+Pe*_+Ga*T,a[4]=A*M+ve*G+xe*j,a[5]=J*M+te*G+sr*j,a[6]=Z*M+se*G+dr*j,a[7]=oe*M+Pe*G+Ga*j,a[8]=A*E+ve*N+xe*W,a[9]=J*E+te*N+sr*W,a[10]=Z*E+se*N+dr*W,a[11]=oe*E+Pe*N+Ga*W,a[12]=ju,a[13]=Nu,a[14]=Gu,a[15]=Wu,a});function Q$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Q$);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function ef(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(ef);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=_c(e,r,Jt),t=sa(ft(n,a,ai),ai),i=sa(ft(a,t,ti),ti),c=q$,l=Y$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Sc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var oi=0;function Tn(e,r){for(;r.b;r=r.b)e(r.a)}function qt(e){for(var r=0;e.b;e=e.b)r++;return r}var rf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},nf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),af=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),tf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),of=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),cf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),lf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),uf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),vf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),$f=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),ff=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},sf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},df=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},mf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Tc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Cc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},pf=function(e){e.gl.disable(e.gl.CULL_FACE)},bf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},gf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},hf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],_f=[sf,df,mf,Tc,Cc,pf,bf,gf,hf];function ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function wf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Lc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function yf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?w[T][x]:w[T][x][_]})}var u=Lc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(qt(n.b)*s);Tn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function xf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Sf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*qt(r.b),indexBuffer:null,buffers:{}}}function Sf(e,r){var n=new Uint32Array(qt(e)*r),a=0,t;return Tn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function li(e,r){return e+"#"+r}var Pc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Tc(n),Cc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=li(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=oi++,$||($=ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=oi++,s||(s=ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=wf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Tf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=li(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Cf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=xf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=yf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Lc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,x*T)}for(n.toggle=!n.toggle,Tn(H0(n),i.a),u=0;u<ii.length;u++){var M=n[ii[u]];M.toggle!==n.toggle&&M.enabled&&(_f[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return Tn(t,e.g),r});function Tf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Cf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Lf=y(function(e,r,n){return u$(r,{g:n,f:{},h:e},Af,Ff)}),Pf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),zf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),kf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Mf=v(function(e,r){e.contextAttributes.antialias=!0}),Df=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Bf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Af(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Tn(function(t){return o(W0,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),rf(function(){return o(Pc,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ff(e,r){return r.f=e.f,Pc(r)}var k=Qu,Xn=Yu,zc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Xn,e,l,$)}else{var u=c.a;return p(Xn,i,l,u)}});return p(Xn,i,p(Xn,e,r,t),a)}),Yt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Yt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),ui=function(e){return p(Yt,y(function(r,n,a){return o(k,P(r,n),a)}),L,e)},kc=1,Vf=2,Mc=0,we=function(e){return{$:1,a:e}},Zt=v(function(e,r){return{$:3,a:e,b:r}}),vi=v(function(e,r){return{$:0,a:e,b:r}}),Dc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Ef=function(e){return{$:2,a:e}},ae=function(e){return{$:0,a:e}},q={$:1},Rf=Sv,jf=Hv,Me=tc,Tr=v(function(e,r){return o(wv,e,ka(r))}),Kt=v(function(e,r){return h(o(_v,e,r))}),Bc=function(e){return o(Tr,`
    `,o(Kt,`
`,e))},An=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),zr=function(e){return p(An,v(function(r,n){return n+1}),0,e)},Nf=ev,Gf=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Ir=v(function(e,r){return p(Gf,e,r,L)}),Ac=v(function(e,r){return p(Nf,e,o(Ir,0,zr(r)-1),r)}),Qe=Mv,Fc=function(e){var r=Qe(e);return 97<=r&&r<=122},Vc=function(e){var r=Qe(e);return r<=90&&65<=r},Wf=function(e){return Fc(e)||Vc(e)},Hf=function(e){var r=Qe(e);return r<=57&&48<=r},Xf=function(e){return Fc(e)||Vc(e)||Hf(e)},Be=function(e){return p(An,k,L,e)},Zr=pv,If=v(function(e,r){return`

(`+(Me(e+1)+(") "+Bc(Uf(r))))}),Uf=function(e){return o(Of,e,L)},Of=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Zr(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Wf(x)&&o(Rf,Xf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(k,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Me(i)+"]"),u=c,$=o(k,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Me(zr(s))+" ways:"));return o(Tr,`

`,o(k,g,o(Ac,If,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(Bc(o(jf,4,f))+(`

`+m))}}),Ae=32,st=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dt=Iu,Qt=uv,eo=v(function(e,r){return qo(r)/qo(e)}),Jf=cv,Cn=Qt(o(eo,2,Ae)),Ec=C(st,0,Cn,dt,dt),Rc=Ou,jc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Nc=vv,mt=Uu,er=v(function(e,r){return O(e,r)>0?e:r}),qf=function(e){return{$:0,a:e}},ro=Ju,Yf=v(function(e,r){e:for(;;){var n=o(ro,Ae,e),a=n.a,t=n.b,i=o(k,qf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),Zf=function(e){var r=e.a;return r},Kf=v(function(e,r){e:for(;;){var n=Qt(r/Ae);if(n===1)return o(ro,Ae,e).a;var a=o(Yf,e,L),t=n;e=a,r=t;continue e}}),Gc=v(function(e,r){if(r.l){var n=r.l*Ae,a=Nc(o(eo,Ae,n-1)),t=e?Be(r.z):r.z,i=o(Kf,t,r.l);return C(st,mt(r.p)+n,o(er,5,a*Cn),i,r.p)}else return C(st,mt(r.p),Cn,dt,r.p)}),Qf=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Gc,!1,{z:a,l:n/Ae|0,p:t});var i=jc(p(Rc,Ae,r,e)),c=e,l=r-Ae,u=n,$=o(k,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),es=v(function(e,r){if(e<=0)return Ec;var n=e%Ae,a=p(Rc,n,e-n,r),t=e-n-Ae;return S(Qf,r,t,e,L,a)}),Xe=function(e){return!e.$},B=jv,Y=Av,D=Rv,$e=Fv,da=Nv,rs=Gv,ze=Bv,no=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=vr("div"),ns=function(e){return{$:2,a:e}},Wc=v(function(e,r){return e}),Hc=v(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Lr=function(e){return e},as=Lr,$i=Oe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ts=Tv,Cr=bv,Rr=yv,Fn=v(function(e,r){return e<1?r:p(Rr,e,Cr(r),r)}),Ma=Lv,Da=function(e){return e===""},Ba=v(function(e,r){return e<1?"":p(Rr,0,e,r)}),Xc=Pv,fi=he(function(e,r,n,a,t){if(Da(t)||o(ts,"@",t))return q;var i=o(Ma,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Xc(o(Fn,c+1,t));if(l.$===1)return q;var u=l;return ae(Te($i,e,o(Ba,c,t),u,r,n,a))}else return ae(Te($i,e,t,q,r,n,a))}),si=R(function(e,r,n,a){if(Da(a))return q;var t=o(Ma,"/",a);if(t.b){var i=t.a;return S(fi,e,o(Fn,i,a),r,n,o(Ba,i,a))}else return S(fi,e,"/",r,n,a)}),di=y(function(e,r,n){if(Da(n))return q;var a=o(Ma,"?",n);if(a.b){var t=a.a;return C(si,e,ae(o(Fn,t+1,n)),r,o(Ba,t,n))}else return C(si,e,q,r,n)});v(function(e,r){if(Da(r))return q;var n=o(Ma,"#",r);if(n.b){var a=n.a;return p(di,e,ae(o(Fn,a+1,r)),o(Ba,a,r))}else return p(di,e,q,r)});var os=Cv,ao=function(e){},Vn=kr,is=Vn(0),Ic=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(An,e,r,Be(d)):C(Ic,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ar=y(function(e,r,n){return C(Ic,e,r,0,n)}),ee=v(function(e,r){return p(ar,v(function(n,a){return o(k,e(n),a)}),L,r)}),ma=ut,to=v(function(e,r){return o(ma,function(n){return Vn(e(n))},r)}),cs=y(function(e,r,n){return o(ma,function(a){return o(ma,function(t){return Vn(o(e,a,t))},n)},r)}),ls=function(e){return p(ar,cs(k),Vn(L),e)},us=Kv,vs=v(function(e,r){var n=r;return cc(o(ma,us(e),n))}),$s=y(function(e,r,n){return o(to,function(a){return 0},ls(o(ee,vs(e),r)))}),fs=y(function(e,r,n){return Vn(0)}),ss=v(function(e,r){var n=r;return o(to,e,n)});Ke.Task=Yv(is,$s,fs,ss);var ds=uc("Task"),oo=v(function(e,r){return ds(o(to,e,r))}),ms=M$,ps=dv,pa={$:1},Uc=function(e){return{$:2,a:e}},Aa={$:0},Re=v(function(e,r){return{$:0,a:e,b:r}}),ne=y(function(e,r,n){return r(e(n))}),Kr=function(e){var r=e.b.B;return r.a},bs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ae(o(Re,r,{B:i,ab:c,T:o(k,a,n)}))}else return q},Oc=function(e){var r=e.b;return o(Re,Aa,r)},br=v(function(e,r){if(r.$)return e;var n=r.a;return n}),gs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Oc(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,Kr(n).b7)>0?o(ne,bs,br(o(Re,pa,t))):Lr)(o(Re,Uc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Hc,l.eA,Ye(r,{b7:l.b7+r.eJ})),s=o(e,$,u);return o(Re,Aa,{B:P($,s),ab:L,T:o(k,t.B,t.T)})}}),Jc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),hs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),_s=v(function(e,r){return Be(p(hs,e,r,L))}),qc=y(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(_s,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),ws=v(function(e,r){return p(qc,0,e,r)}),ys=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Be(n),le(h([a]),t)),c=o(ws,e,i),l=o(Jc,e,i);if(l.b){var u=l.a,$=l.b;return o(Re,pa,{B:u,ab:$,T:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(Re,pa,{B:d,ab:L,T:m})}else return r}}),xs=function(e){var r=e.b;return o(Re,pa,r)},Ss=function(e){var r=e.b;return o(Re,Uc({cY:Kr(e).b7}),r)},Ts=v(function(e,r){switch(e.$){case 1:return xs(r);case 2:return Oc(r);case 3:return Ss(r);default:var n=e.a;return o(ys,n,r)}}),Yc=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Cs=v(function(e,r){return Ye(r,{av:e(r.av)})}),Ls=function(e){return{$:3,a:e}},Ps=function(e){return{$:2,a:e}},Zc=v(function(e,r){return{$:0,a:e,b:r}}),zs=v(function(e,r){return{$:1,a:e,b:r}}),De=v(function(e,r){if(r.$)return q;var n=r.a;return ae(e(n))}),K=function(e){return e<0?-e:e},io=zv,ks=y(function(e,r,n){return o(br,0/0,io(o(e,r,n)))}),Kc=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ms=hv,Qc=function(e){return p(Ms,k,L,e)},Ds=v(function(e,r){var n=o(Kc,function(a){return a!=="0"&&a!=="."},Qc(r));return le(e&&n?"-":"",r)}),de=tc,pt=mv,el=Dv,rl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Zr(n);if(a.$===1)return"01";var t=a.a;return o(pt,"0",rl(t))}else{var i=Qe(r);return i>=48&&i<57?o(pt,el(i+1),n):"0"}},bt=lv,Bs=sv,Fa=function(e){return o(pt,e,"")},nl=y(function(e,r,n){return e<=0?n:p(nl,e>>1,le(r,r),e&1?le(n,r):n)}),Ln=v(function(e,r){return p(nl,e,r,"")}),gt=y(function(e,r,n){return le(n,o(Ln,e-Cr(n),Fa(r)))}),ht=gv,al=function(e){var r=o(Kt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},As=function(e){var r=o(Kt,"e",de(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(br,0,Xc(o(os,"+",t)?o(Fn,1,t):t)),c=al(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(br,"0",o(De,function(d){var m=d.a,f=d.b;return m+("."+f)},o(De,Yc(Fa),Zr(le(o(Ln,K(i),"0"),$))))):p(gt,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Fs=y(function(e,r,n){if(bt(n)||Bs(n))return de(n);var a=n<0,t=al(As(K(n))),i=t.a,c=t.b,l=Cr(i)+r,u=le(o(Ln,-l+1,"0"),p(gt,l,"0",le(i,c))),$=Cr(u),s=o(er,1,l),d=o(e,a,p(Rr,s,$,u)),m=p(Rr,0,s,u),f=d?ht(o(br,"1",o(De,rl,Zr(ht(m))))):m,g=Cr(f),b=f==="0"?f:r<=0?le(f,o(Ln,K(r),"0")):O(r,Cr(c))<0?p(Rr,0,g-r,f)+("."+p(Rr,g-r,g,f)):le(i+".",p(gt,r,"0",c));return o(Ds,a,b)}),mn=Fs(v(function(e,r){var n=Zr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Qe(t))})),Vs=ks(mn),Es=y(function(e,r,n){var a=o(eo,10,K(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Vs,t,n)}),tl=Ku,co=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(tl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ae(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),nr={$:-2},Ur=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,$,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,$,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),_t=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,nr,nr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(tl,e,t);switch(u){case 0:return S(Ur,a,t,i,p(_t,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Ur,a,t,i,c,p(_t,e,r,l))}}),pn=y(function(e,r,n){var a=p(_t,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Rs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ol=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},mi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,$,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},js=Pa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(X,n,l,u,$,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,mi(r)}else break e;else return c.a,c.d,mi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,ra(t),l);var u=ol(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Ur,$,s,d,ra(m),f)}else return nr}else return S(X,r,n,a,ra(t),l)}else return nr},bn=v(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(bn,e,i),c);var u=ol(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Ur,$,s,d,o(bn,e,m),f)}else return nr}else return S(X,n,a,t,o(bn,e,i),c);else return o(Ns,e,Rt(js,e,r,n,a,t,i,c))}),Ns=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(pr(e,a)){var l=Rs(c);if(l.$===-1){var u=l.b,$=l.c;return S(Ur,n,u,$,i,ra(c))}else return nr}else return S(Ur,n,a,t,i,o(bn,e,c))}else return nr}),Gs=v(function(e,r){var n=o(bn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),In=y(function(e,r,n){var a=r(o(co,e,n));if(a.$)return o(Gs,e,n);var t=a.a;return p(pn,e,t,n)}),Ws=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(In,r,De(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(zs,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(In,r,De(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Zc,P(i,c),p(Es,i,c,n))}));case 3:var r=e.a,n=e.b;return o(In,r,De(function(a){return a.$===3?Ls(n):a}));default:var r=e.a,n=e.b;return o(In,r,De(function(a){return a.$===2?Ps(n):a}))}},Hs=function(e){return Cs(Ws(e))},Xs=v(function(e,r){return o(ee,Hs(e),r)}),Is=v(function(e,r){return Ye(r,{eA:o(Xs,e,r.eA)})}),Us=v(function(e,r){var n=r.a,a=r.b;return o(Re,n,Ye(a,{B:o(Yc,Is(e),a.B)}))}),Os=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Js=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Re,a,Ye(t,{B:o(Os,o(e,i.a,r),i)}))}),qs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ye(a,{aL:!a.aL});case 2:var t=n.a;return Ye(a,{G:p(gs,e,t,a.G)});case 3:var i=n.a;return Ye(a,{G:o(Us,i,a.G)});case 4:var c=n.a;return Ye(a,{G:p(Js,r,c,a.G)});default:var l=n.a;return Ye(a,{G:o(Ts,l,a.G)})}}),Ys=v(function(e,r){return o(Re,Aa,{B:P(e,r(e)),ab:L,T:L})}),Zs=Qv,pi=Zs(L),ba=Ev,Pn=Vv,Ks=t$("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return ze({b7:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return o(B,function(s){return o(B,function(d){return ze({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",ba(Pn)))},o(D,"left",Y))},o(D,"pressedKeys",ba(Pn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return ze({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return ze({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return ze({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),Qs=function(e){return{$:4,a:e}},ed={$:0},rd=ic,He=v(function(e,r){return o(fc,e,rd(r))}),U=He("className"),nd=function(e){var r=e.b.B;return r.b},ga=He("id"),ad=v$,ha=ad,td=$$,ge=td,od={$:1},id=function(e){return{$:3,a:e}},cd=function(e){return{$:5,a:e}},bi=vr("a"),lo=vr("button"),ld=Bn("d"),il=vc("http://www.w3.org/2000/svg"),ud=il("path"),vd=il("svg"),$d=Bn("viewBox"),gn=function(e){return o(vd,h([$d("0 0 100 100"),o(ge,"width","100%"),o(ge,"height","100%")]),h([o(ud,h([ld(e)]),L)]))},gi=function(e){return o(He,"href",s$(e))},Gr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},fd=function(e){return{$:0,a:e}},cl=$c,ll=v(function(e,r){return o(cl,e,fd(r))}),uo=function(e){return o(ll,"click",ze(e))},hi=He("target"),sd=He("title"),wt=v(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(wt,e,i),o(wt,e,c))}),dd=vt,be=dd,md=function(e){return p(Yt,y(function(r,n,a){return o(k,n,a)}),L,e)},pd=v(function(e,r){return{$:3,a:e,b:r}}),bd=v(function(e,r){return{$:2,a:e,b:r}}),gd=v(function(e,r){return{$:0,a:e,b:r}}),hd=v(function(e,r){return{$:1,a:e,b:r}}),$r=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_d=C($r,0/255,0/255,0/255,1),wd=ic,yd=v(function(e,r){return o(fc,e,wd(r))}),xd=yd("checked"),Ue=$v,Sd=y(function(e,r,n){return le(o(Ln,e-Cr(n),Fa(r)),n)}),_a=nv,ul=function(e){var r=function(n){return n<10?Me(n):Fa(el(87+n))};return e<16?r(e):le(ul(e/16|0),r(o(_a,16,e)))},Td=o(ne,ul,o(Sd,2,"0")),vo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},Cd=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return o(Tr,"",o(k,"#",o(ee,o(ne,Ue,Td),h([n*255,a*255,t*255]))))},yt=He("htmlFor"),Ld=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),wa=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),Pd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),$o=v(function(e,r){return p(ar,Pd(e),L,r)}),vl=R(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),zd=V$,kd=kv,Md=v(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Dd=F$,Bd=function(e){return o(Dd,{ew:!1,fe:!1},e)},fo=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return q},Ad=v(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Fd=function(e){return{$:2,a:e}},Vd=function(e){return{$:0,a:e}},Ed=function(e){return{$:1,a:e}},Xa=v(function(e,r){return Qe(r)-Qe(e)}),Ia=y(function(e,r,n){var a=Qe(n);return O(Qe(e),a)<1&&O(a,Qe(r))<1}),Rd=v(function(e,r){var n=function(t){return O(t,e)<0?ue(t):we(Ed(r))},a=p(Ia,"0","9",r)?ue(o(Xa,"0",r)):p(Ia,"a","z",r)?ue(10+o(Xa,"a",r)):p(Ia,"A","Z",r)?ue(10+o(Xa,"A",r)):we(Vd(r));return o(wa,n,a)}),$l=v(function(e,r){var n=Zr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(wa,function(c){return o(wa,function(l){return ue(c+l*e)},o($l,e,i))},o(Rd,e,t))}),jd=v(function(e,r){return 2<=e&&e<=36?o($l,e,ht(r)):we(Fd(e))}),Nd=jd(16),Gd=y(function(e,r,n){return C($r,e,r,n,1)}),Wd=R(function(e,r,n,a){return C($r,e,r,n,a)}),En=rv,Hd=v(function(e,r){var n=o(En,10,e);return Ue(r*n)/n}),Xd=xv,Id=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Qc(n);if(a.b&&!a.b.b){var t=a.a;return kd(h([t,t]))}else return n};return o(ne,Xd,o(ne,function(n){return o(De,function(a){return p(zd,1,a,n)},Bd(e))},o(ne,Ld(fo),o(ne,De(function(n){return n.fF}),o(ne,De($o(Lr)),o(ne,Md("Parsing hex regex failed"),wa(function(n){var a=o(ee,o(ne,r,o(ne,Nd,Ad(Jf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(C(Wd,t/255,c/255,u/255,o(Hd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Gd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ya=vr("input"),xt=vr("label"),St=He("name"),fl=v(function(e,r){return p(ar,D,r,e)}),Ud=o(fl,h(["target","checked"]),Y),Od=function(e){return o(ll,"change",o(da,e,Ud))},Jd=function(e){return P(e,!0)},qd=function(e){return{$:1,a:e}},Yd=v(function(e,r){return o(cl,e,qd(r))}),Zd=o(fl,h(["target","value"]),Pn),so=function(e){return o(Yd,"input",o(da,Jd,o(da,e,Zd)))},sl=He("max"),dl=He("min"),ml=function(e){return o(He,"step",e)},xa=He("type"),mo=He("value"),_i=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(I,L,h([o(xt,h([yt(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([be(r)])),o(I,h([U("inline-block float-right")]),h([be(de(n))]))]))])),o(ya,h([xa("range"),o(ge,"width","100%"),ga(r),St(r),dl(de(a)),sl(de(t)),mo(de(n)),ml(de(i)),so(o(ne,io,o(ne,br(42),c)))]),L)]))},Kd=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Qd=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([U("mb-2")]),h([o(xt,h([yt(e)]),h([be(e)]))])),o(ya,h([xa("checkbox"),ga(e),St(e),Od(pd(e)),xd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:gd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:o(ne,Ue,hd(e)),cW:1,c1:c});default:var c=r.a;return o(I,L,h([o(I,h([o(ge,"margin-bottom","6px")]),h([o(xt,h([yt(e)]),h([be(e)]))])),o(ya,h([xa("color"),o(ge,"width","100%"),o(ge,"height","26px"),o(ge,"padding","0px"),ga(e),St(e),so(function(l){return o(bd,e,o(Kd,_d,Id(l)))}),mo(Cd(c))]),L)]))}}),em=function(e){return o(I,h([U("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([be(e.ff)])),o(I,h([U("pl-2 pr-2")]),md(o(wt,Qd,e.av)))]))},rm=function(e){return o(I,h([U("text-xs text-white60")]),o(ee,em,e))},nm=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([be("clock: "+o(mn,3,Kr(e).b7))]))},am=function(e){e.a;var r=e.b.T;return o(De,function(n){return Ue(60/(Kr(e).b7-n))},o(De,o(ne,Zf,function(n){return n.b7}),fo(o(Jc,59,r))))},tm=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=am(e);if(r.$===1)return h([be("... Fps")]);var n=r.a;return h([be(Me(n)+" Fps")])}())},om=function(e){return{$:0,a:e}},im=function(e){var r=e.b.T;return zr(r)},cm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return zr(r)+1+zr(n)},lm=function(e){return o(ya,h([U("absolute left-[100px] w-[490px]"),xa("range"),dl(Me(0)),sl(Me(cm(e)-1)),mo(Me(im(e))),ml(Me(1)),so(o(ne,io,o(ne,br(42),o(ne,Ue,om))))]),L)},wi={$:1},um={$:3},vm={$:2},pl=function(e){return!e.b},yi=v(function(e,r){return o(lo,h([U("px-2 bg-black40"),U(r),uo(e)]),h([be("REC")]))}),xi=v(function(e,r){return o(lo,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),uo(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([gn(e)]))]))}),$m=function(e){var r=e.a,n=e.b.ab;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(yi,wi,"text-red-500 font-bold");case 1:return o(yi,vm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return pl(n)?o(I,L,L):o(xi,Gr.fo,um);default:return o(xi,Gr.fn,wi)}}()]))},fm=function(e){return o(I,h([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([lm(e),$m(e),tm(e),nm(e)]))},bl=function(e){return o(Tr,"",e)},sm=v(function(e,r){if(r.b){var n=r.a,a=r.b,t=v(function(c,l){return o(k,e,o(k,c,l))}),i=p(ar,t,L,a);return o(k,n,i)}else return L}),dm=function(e){var r=e.a;return pr(r,Aa)},xr=vr("p"),mm=vr("pre"),pm=v(function(e,r){var n=dm(r.G)?o(I,L,L):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(ge,"left",de(e.fp.fT+.5*e.cT.fR)+"px"),o(ge,"top",de(-e.fp.fX+.5*e.cT.eW)+"px")]),h([o(I,h([U(e.fp.e4?"fill-black80":"fill-white40")]),h([gn(Gr.fp)]))]));return o(I,L,h([n,o(mm,h([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(xr,L,h([be("pressedKeys: "+bl(o(sm," ",e.e7.fq)))])),o(xr,L,h([be("delta time: "+o(mn,4,e.eJ))])),o(xr,L,h([be("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(xr,L,h([be("pointer.x: "+o(mn,2,e.fp.fT))])),o(xr,L,h([be("pointer.y: "+o(mn,2,e.fp.fX))])),o(xr,L,h([be("wheel deltaX: "+de(e.fQ.eD))])),o(xr,L,h([be("wheel deltaY: "+de(e.fQ.eE))]))]))]))}),bm=v(function(e,r){var n=o(lo,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),uo(od),sd("Distraction Free Mode")]),h([gn(Gr.f$)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(bi,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),gi("https://twitter.com/AzizErkalSelman"),hi("_blank")]),h([gn(Gr.fL)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(bi,h([U("fill-githubCat40 hover:fill-githubCat"),gi("https://github.com/erkal/elm-3d-playground-exploration"),hi("_blank")]),h([gn(Gr.eQ)]))]));return r.aL?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(ha,id,rm(Kr(r.G).eA))])),o(ha,cd,fm(r.G)),o(pm,e,r)]))}),gm=y(function(e,r,n){var a=nd(n.G),t=Kr(n.G);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(ge,"width",de(t.cT.fR)+"px"),o(ge,"height",de(t.cT.eW)+"px")]),h([o(I,h([U("fixed")]),h([o(ha,Wc(ed),o(e,t,a))])),o(I,h([ga("gui")]),h([o(bm,t,n),o(I,h([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(ha,Qs,o(r,t,a))]))]))]))}),hm=Oe(function(e,r,n,a,t,i){var c=v(function(u,$){return P(C(qs,r,i,u,$),pi)}),l=function(u){var $=o(Hc,n,u.e1);return P({aL:u.e1.cT.fR<500,G:o(Ys,$,a)},pi)};return ms({e0:l,fG:Wc(Ks(ns)),fM:c,fP:o(gm,e,t)})}),_m=R(function(e,r,n,a){return Te(hm,e,r,n,a,v(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),wm=function(e){return{}},ym=y(function(e,r,n){return{av:n,e5:r,ff:e}}),gl=nr,xm=function(e){return p(An,v(function(r,n){var a=r.a,t=r.b;return p(pn,a,t,n)}),gl,e)},Sm=y(function(e,r,n){return p(ym,e,r,xm(n))}),Si=Sm,Un=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(Zc,P(a,t),n))}),lr=av,Tm=h([p(Si,"Camera",!0,h([p(Un,"camera distance",P(3,8),4),p(Un,"camera azimuth",P(0,2*lr),0),p(Un,"camera elevation",P(-lr/2,lr/2),.5)])),p(Si,"Parameters",!0,h([p(Un,"sun size",P(.1,.5),.3)]))]),Cm=v(function(e,r){return r}),Tt=C($r,52/255,101/255,164/255,1),Lm=C($r,115/255,210/255,22/255,1),po=function(e){return{$:5,a:e}},hl=function(e){return po(e)},bo=v(function(e,r){return{$:4,a:e,b:r}}),_l=function(e){return e},Qr=v(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),Pm=v(function(e,r){return _l(P(e,o(Qr,r,e)))}),wl=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),zm=v(function(e,r){var n=r.a,a=r.b,t=r.c;return p(wl,e(n),e(a),e(t))}),je=function(e){return e},fr={fT:0,fX:0,c6:0},Ua=v(function(e,r){return o(bo,e,o(Pm,fr,o(zm,je,r)))}),km=C($r,204/255,0/255,0/255,1),Mm=hl(h([o(Ua,km,V(100,0,0)),o(Ua,Lm,V(0,100,0)),o(Ua,Tt,V(0,0,100))])),Dm=v(function(e,r){return o(De,function(n){if(n.$)return 0;var a=n.b;return a},o(co,e,r.av))}),Bm=v(function(e,r){return o(br,0,fo(o($o,Dm(e),r)))}),Am=v(function(e,r){return o(Bm,e,r.eA)}),na=Am,gr=function(e){return e},$n=function(e){return gr(lr*(e/180))},Fm=function(e){return e},Ct=function(e){var r=e;return-r},Vm=v(function(e,r){var n=e,a=r;return{fT:n.fX*a.c6-n.c6*a.fX,fX:n.c6*a.fT-n.fT*a.c6,c6:n.fT*a.fX-n.fX*a.fT}}),yl=function(e){var r=e;return r.c4},xl=function(e){var r=e;return r.c5},Em=function(e){return o(Vm,yl(e),xl(e))},en=function(e){var r=e;return r.cB},Or=tv,Jr=ov,aa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Or(c),u=Jr(c),$=a.eG,s=$,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),T=s.c6*u,M=l*T,G=2*(w-M),j=2*(w+M),E=d*T,N=2*(E+b),W=2*(E-b),A=g*T,J=2*(A-m),Z=2*(A+m),oe=T*T,ve=1-2*(x+oe),te=1-2*(f+oe);return{fT:ve*i.fT+G*i.fX+N*i.c6,fX:j*i.fT+te*i.fX+J*i.c6,c6:W*i.fT+Z*i.fX+_*i.c6}}),Rn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Or(c),u=Jr(c),$=a.cB,s=$,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c6-s.c6,g=a.eG,b=g,w=b.fT*u,x=l*w,_=w*w,T=b.fX*u,M=l*T,G=w*T,j=T*T,E=1-2*(_+j),N=b.c6*u,W=l*N,A=2*(G-W),J=2*(G+W),Z=w*N,oe=2*(Z+M),ve=2*(Z-M),te=T*N,se=2*(te-x),Pe=2*(te+x),xe=N*N,sr=1-2*(j+xe),dr=1-2*(_+xe);return{fT:s.fT+sr*d+A*m+oe*f,fX:s.fX+J*d+dr*m+se*f,c6:s.c6+ve*d+Pe*m+E*f}}),rn=function(e){return e},Mr=function(e){var r=e;return r.c4},Dr=function(e){var r=e;return r.c5},Br=function(e){var r=e;return r.c7},Sl=y(function(e,r,n){return rn({cB:p(Rn,e,r,en(n)),c4:p(aa,e,r,Mr(n)),c5:p(aa,e,r,Dr(n)),c7:p(aa,e,r,Br(n))})}),Ti=y(function(e,r,n){return p(Sl,e(n),r,n)}),Tl=function(e){var r=e;return r.eG},Cl=v(function(e,r){return rn({cB:o(Qr,e,en(r)),c4:Mr(r),c5:Dr(r),c7:Br(r)})}),Rm=v(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c6:n*a.c6}}),jm=y(function(e,r,n){return o(Cl,o(Rm,r,e),n)}),Nm=y(function(e,r,n){return p(jm,Tl(e(n)),r,n)}),yr=v(function(e,r){return{eG:r,cB:e}}),Gm=function(e){var r=e;return o(yr,r.cB,r.c4)},Wm=function(e){var r=e;return o(yr,r.cB,r.c5)},Hm=function(e){var r=e;return o(yr,r.cB,r.c7)},Xm=function(e){var r=rn({cB:e.aR,c4:xl(e.dl),c5:Em(e.dl),c7:yl(e.dl)}),n=p(Nm,Hm,e.cc,p(Ti,Gm,Ct(e.bC),p(Ti,Wm,e.bx,r)));return n},Im=function(e){return{$:0,a:e}},Ne=function(e){var r=e;return K(r)},ta=function(e){var r=e;return .5*r},Um=iv,Om=function(e){var r=e;return Um(r)},Jm=function(e){var r=ta(Ne(e.ej)),n=Om(r);return{cM:Im(n),c2:e.c2}},Ll=Lr,Pr=function(e){return e},qm=Pr({fT:1,fX:0,c6:0}),go=qm,Pl=Pr({fT:0,fX:0,c6:1}),Va=Pl,Ym=Ll({cB:fr,c4:Va,c5:go}),Zm=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cc;return Jm({ej:$n(40),c2:Xm({bx:gr(n),cc:je(t),bC:gr(a),aR:Fm(r),dl:Ym})})},Km=function(e){return Zm({bx:o(na,"camera azimuth",e),cc:o(na,"camera distance",e),bC:o(na,"camera elevation",e),aR:{fT:0,fX:0,c6:0}})},jr=function(e){return e*lr/180},ho=v(function(e,r){return{$:2,a:e,b:r}}),Qm=y(function(e,r,n){return{k:o(yr,e,r),e9:Ne(n.e9),fr:Ne(n.fr)}}),zl=Pr({fT:0,fX:1,c6:0}),e0=y(function(e,r,n){return o(ho,e,p(Qm,fr,zl,{e9:je(n),fr:je(r)}))}),Lt=function(e){return{$:0,a:e}},kl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ml=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),Oa=function(e){return p(Ml,0,1,e<=.04045?e/12.92:o(En,(e+.055)/1.055,2.4))},jn=j$,r0=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(jn,Oa(n),Oa(a),Oa(t))},oa=function(e){return p(kl,0,Lt(r0(e)),Lt(0))},Dl=v(function(e,r){return{$:0,a:e,b:r}}),_o=v(function(e,r){return{$:3,a:e,b:r}}),Bl=v(function(e,r){return{$:1,a:e,b:r}}),n0=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),a0=function(e){var r=e;return r},wo=function(e){var r=e;return a0(r.er)},yo=function(e){var r=e;return r.aK},t0=v(function(e,r){return{er:o(Cl,e,wo(r)),aK:yo(r)}}),o0=v(function(e,r){var n=r;return o(yr,o(Qr,e,n.cB),n.eG)}),i0=v(function(e,r){var n=r;return{k:o(o0,e,n.k),e9:n.e9,fr:n.fr}}),xo=function(e){var r=e;return r},Al=v(function(e,r){var n=xo(r),a=n.a,t=n.b;return _l(P(e(a),e(t)))}),c0=v(function(e,r){return o(Al,Qr(e),r)}),So=function(e){var r=e;return r.ey},To=function(e){var r=e;return r.fr},Co=v(function(e,r){return{ey:r,fr:Ne(e)}}),l0=v(function(e,r){return o(Co,To(r),o(Qr,e,So(r)))}),Fl=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),u0=v(function(e,r){return o(Fl,Qr(e),r)}),Vl=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(n0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Dl,s,o(t0,i,c));case 1:var s=r.a,l=r.b;return o(Bl,s,o(u0,i,l));case 3:var s=r.a,u=r.b;return o(_o,s,o(l0,i,u));case 2:var s=r.a,$=r.b;return o(ho,s,o(i0,i,$));case 4:var s=r.a,d=r.b;return o(bo,s,o(c0,i,d));default:var m=r.a;return po(o(ee,Vl(V(n,a,t)),m))}}),Ci=function(e){return Vl(V(e,0,0))},v0=y(function(e,r,n){return{er:p(Sl,e,r,wo(n)),aK:yo(n)}}),$0=v(function(e,r){var n=o(Rn,e,r),a=o(aa,e,r);return function(t){var i=t;return o(yr,n(i.cB),a(i.eG))}}),f0=y(function(e,r,n){var a=n;return{k:p($0,e,r,a.k),e9:a.e9,fr:a.fr}}),s0=y(function(e,r,n){return o(Al,o(Rn,e,r),n)}),d0=y(function(e,r,n){return o(Co,To(n),p(Rn,e,r,So(n)))}),m0=y(function(e,r,n){return o(Fl,o(Rn,e,r),n)}),Lo=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Dl,l,p(v0,e,r,a));case 1:var l=n.a,t=n.b;return o(Bl,l,p(m0,e,r,t));case 3:var l=n.a,i=n.b;return o(_o,l,p(d0,e,r,i));case 2:var l=n.a,c=n.b;return o(ho,l,p(f0,e,r,c));case 4:var l=n.a,u=n.b;return o(bo,l,p(s0,e,r,u));default:var $=n.a;return po(o(ee,o(Lo,e,r),$))}}),Po=zl,p0=o(yr,fr,Po),Li=v(function(e,r){return p(Lo,p0,gr(e),r)}),b0=o(yr,fr,Va),Pi=v(function(e,r){return p(Lo,b0,gr(e),r)}),Pt=v(function(e,r){return o(_o,e,o(Co,je(r),fr))}),g0=v(function(e,r){return(r-Nc(r/e)*e)/e}),zi=v(function(e,r){return 360*o(g0,e,r)}),h0=C($r,255/255,255/255,255/255,1),_0=function(e){var r=o(Pi,jr(20),p(e0,oa(Tt),.2,.05)),n=o(Pi,jr(20),o(Li,jr(o(zi,3,e.b7)),o(Ci,.2,o(Pt,oa(h0),.04)))),a=o(Pt,oa(Tt),.1);return o(Li,jr(o(zi,10,e.b7)),o(Ci,1,hl(h([a,n,r]))))},Ja=function(e){return e/255},w0=y(function(e,r,n){return C($r,Ja(e),Ja(r),Ja(n),1)}),y0=C($r,245/255,121/255,0/255,1),x0=function(e){return o(Pt,oa(y0),o(na,"sun size",e))},S0=function(e){return e},T0=function(e){return je(.01*e)},ki=function(e){return e},C0=function(e){return e},L0=function(e){return{$:0,a:e}},P0=L0,z0={$:3},k0=z0,M0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),D0=M0,B0=v(function(e,r){return r.b?p(ar,k,r,e):e}),Ge=function(e){return p(ar,B0,L,e)},zo=v(function(e,r){return Ge(o(ee,e,r))}),A0=function(e){return{$:1,a:e}},F0=A0,V0=function(e){return o(Bn,"height",Me(e))},E0=function(e){return l$(f$(e))},R0=E0,j0=function(e){return{$:2,a:e}},N0=j0,G0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ue(l*1e3)/1e3},c=function(l){return Ue(l*1e4)/100};return bl(h(["rgba(",de(c(r)),"%,",de(c(n)),"%,",de(c(a)),"%,",de(i(t)),")"]))},W0=v(function(e,r){switch(r.$){case 0:return o(Pf,e,r);case 1:return o(zf,e,r);case 2:return o(kf,e,r);case 3:return o(Mf,e,r);case 4:return o(Df,e,r);default:return o(Bf,e,r)}}),H0=v(function(e,r){switch(r.$){case 0:return o(af,e,r);case 1:return o(tf,e,r);case 2:return o(of,e,r);case 3:return o(cf,e,r);case 4:return o(lf,e,r);case 5:return o(uf,e,r);case 6:return o(vf,e,r);case 7:return o($f,e,r);default:return ff(e)}}),X0=y(function(e,r,n){return p(Lf,e,r,n)}),Mi=function(e){var r=e;return r},nn=I$,qa=C(nn,1,1,1,1),Je=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),I0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),U0=v(function(e,r){var n=e,a=r.fT,t=r.fX;return p(I0,n*a/t,n,n*(1-a-t)/t)}),O0=function(e){var r=e.a,n=e.b,a=e.c;return p(jn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},ko=v(function(e,r){return O0(o(U0,e,r))}),El=v(function(e,r){return{dp:pr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ze=Z$,J0=function(e){return Ze({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ya=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(nn,a.bX,a.bX,a.bX,i);return Te(t,e,c,J0(a),a.dp,r,n)}),Rl=Oe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(El,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(Ya,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(k,S(Ya,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var _=t.a,T=o(k,S(Ya,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(An,C(Rl,e,r,n,a),i,M)}}),q0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),jl=q0,Mo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Y0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,518,r,n,a)},Z0=v(function(e,r){return{$:6,a:e,b:r}}),K0=Z0,Nl=h([Y0({V:1,W:0,Z:!1}),C(jl,!1,!1,!1,!1),o(K0,0,1)]),qr=519,Do=8,Gl=15,Wr=7681,Q0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},re=nf,ep=v(function(e,r){return{$:0,a:e,b:r}}),rp=ep({df:1,$7:0,dV:5}),ke=E$,np=rp(h([{bT:o(ke,-1,-1)},{bT:o(ke,1,-1)},{bT:o(ke,-1,1)},{bT:o(ke,1,1)}])),ap={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},tp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Bo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(ne,c($.bl),o(ne,l($.a8),o(ne,l($.bt),l($.bu))))};return o(u,n,o(u,r,p(tp,a,t,i)))}),Ao=function(e){return p(Bo,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Fo=function(e){return S(re,h([Ao(e),C(jl,!1,!1,!1,!1)]),ap,Q0,np,{})},op=Fo({a8:Wr,cp:0,cO:Do,bl:qr,c3:Gl,bt:Wr,bu:Wr}),ip=516,Di=5386,ye=7680,cp=function(e){return o(En,2,e+4)},Wl=function(e){return Fo({a8:ye,cp:Gl,cO:Do,bl:ip,c3:cp(e),bt:Di,bu:Di})},lp=y(function(e,r,n){return Ge(h([p(Je,e,n,Nl),h([Wl(r),op])]))}),up=v(function(e,r){return Ge(o(Ac,lp(e),r))}),vp=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,513,r,n,a)},$p=vp({V:1,W:0,Z:!0}),fp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},sp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return fp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},dp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Bi=v(function(e,r){var n=e,a=r;return p(dp,32774,n,a)}),mp=1,Ai=771,pp=770,Vo=sp({bv:0,aH:o(Bi,mp,Ai),by:0,bA:o(Bi,pp,Ai),bF:0,bV:0}),Ar=h([$p,Vo]),bp=function(e){var r=e;return r.dO},gp=function(e){var r=e;return r.dP},Hl=function(e){var r=e;return r.dQ},hp=function(e){var r=e;return r.dR},_p=function(e){var r=e;return r.dS},Xl=function(e){var r=e;return r.dT},Hr=v(function(e,r){var n=e,a=r;return a-n}),Il=function(e){return V(o(Hr,hp(e),bp(e)),o(Hr,_p(e),gp(e)),o(Hr,Xl(e),Hl(e)))},Fi=function(e){var r=e;return en(r)},wp=function(e){return e},yp=function(e){return rn({cB:wp({fT:e.H,fX:e.I,c6:e.J}),c4:Pr({fT:e.q,fX:e.r,c6:e.s}),c5:Pr({fT:e.t,fX:e.u,c6:e.v}),c7:Pr({fT:e.w,fX:e.x,c6:e.y})})},Za=v(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,$=u;return{fT:a.fT*$.fT+a.fX*$.fX+a.c6*$.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),Ul=v(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,$=n.c7,s=$,d=n.c5,m=d,f=n.c4,g=f;return{fT:c*g.fT+l*g.fX+u*g.c6,fX:c*m.fT+l*m.fX+u*m.c6,c6:c*s.fT+l*s.fX+u*s.c6}}),Ol=v(function(e,r){return{cB:o(Ul,e,en(r)),c4:o(Za,e,Mr(r)),c5:o(Za,e,Dr(r)),c7:o(Za,e,Br(r))}}),xp=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),Sa=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(er,n,a)}),ia=v(function(e,r){return O(e,r)<0?e:r}),fe=v(function(e,r){var n=e,a=r;return o(ia,n,a)}),Sp=v(function(e,r){var n=Sa(r),a=Sa(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),We=function(e){var r=e;return r},Tp=function(e){var r=e;return V(r.fT,r.fX,r.c6)},hn=v(function(e,r){var n=e,a=r;return a+n}),Cp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ta(Ne(a)),c=ta(Ne(n)),l=ta(Ne(t)),u=Tp(r),$=u.a,s=u.b,d=u.c;return{dO:o(hn,c,$),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o(Hr,c,$),dS:o(Hr,i,s),dT:o(Hr,l,d)}}),Vi=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,$=t.fX*r,s=t.fT*r,d=We(Br(e)),m=K(l*d.fT)+K(c*d.fX)+K(i*d.c6),f=We(Dr(e)),g=K(l*f.fT)+K(c*f.fX)+K(i*f.c6),b=We(Mr(e)),w=K(l*b.fT)+K(c*b.fX)+K(i*b.c6),x=o(Cp,V(w,g,m),o(Ul,e,p(xp,s,$,u)));if(a.$)return ae(x);var _=a.a;return ae(o(Sp,_,x))}),zt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Vi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Vi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(zt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(Ol,yp($),e),m=r*$.bX,f=e,g=r,b=C(zt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),an=N$,tn=G$,on=W$,Jl=function(e){return{$:4,a:e}},Lp=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),Nn=function(e){return Jl(o(Lp,e,L))},Pp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},zp=function(e){var r=e;return r},Ei=Fo({a8:Wr,cp:0,cO:Do,bl:qr,c3:255,bt:Wr,bu:Wr}),Nr=fv,ir=0,kp=function(e){var r=e,n=o(er,K(r.fT),o(er,K(r.fX),K(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=Nr(i*i+t*t+a*a);return c*n}else return ir},Se={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fT:0,fX:0,c6:0},Ve=v(function(e,r){var n=e,a=r;return Ze({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),fn=P({bd:o(Ve,Se,Se),bK:o(Ve,Se,Se),bL:o(Ve,Se,Se),bM:o(Ve,Se,Se)},C(nn,0,0,0,0)),ie=v(function(e,r){var n=r;return e*n}),ql=514,Yl=function(e){var r=e.Z,n=e.W,a=e.V;return C(Mo,515,r,n,a)},Zl=240,Mp=h([Yl({V:1,W:0,Z:!0}),Ao({a8:ye,cp:Zl,cO:0,bl:ql,c3:0,bt:ye,bu:ye}),Vo]),Dp=v(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=Ne(a),l=c,u=Ne(t),$=u,s=n.cM;if(s.$){var m=s.a;return bt($)?Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return bt($)?Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),On=v(function(e,r){return(1&e>>r)===1?0:1}),Bp=function(e){return h([Yl({V:1,W:0,Z:!0}),Ao({a8:ye,cp:Zl,cO:e,bl:ql,c3:0,bt:ye,bu:ye}),Vo])},Ap=y(function(e,r,n){return Ge(o(ee,function(a){var t=a<<4,i=C(nn,o(On,a,0),o(On,a,1),o(On,a,2),o(On,a,3));return p(Je,e,P(r,i),Bp(t))},o(Ir,1,o(En,2,n)-1)))}),zn=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Xr=function(e){var r=e;return r},Fp=K$,Ri=function(e){var r=e;return zn(Br(r))},Vp={cB:fr,c4:go,c5:Po,c7:Va},Ea=function(e){var r=e;return r},Ep=function(e){var r=Ea(en(e)),n=We(Br(e)),a=We(Dr(e)),t=We(Mr(e));return Ze({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Rp=v(function(e,r){var n=r;return Ep(o(Ol,n,e))}),jp=function(e){return o(Rp,Vp,e)},Np=function(e){var r=e;return r.c2},Gp=function(e){var r=e;return Mr(r)},Wp=function(e){var r=e;return Dr(r)},Hp=function(e){var r=Np(e.ev),n=rn({cB:Fi(r),c4:Gp(r),c5:Wp(r),c7:zn(Ri(r))}),a=Nn(e.aP),t=a,i=C(zt,n,1,q,h([t]));if(i.$===1)return L;var c=i.a,l=jp(r),u=o(ie,.99,o(ce,Ne(e.aJ),Ct(Hl(c)))),$=Il(c),s=$.a,d=$.b,m=$.c,f=kp(p(wl,s,d,m)),g=o(ie,1.01,o(hn,f,Ct(Xl(c)))),b=o(Dp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Fp(b).dM,x=w?We(zn(Ri(r))):Xr(Fi(r)),_=function(){var te=e.bZ;switch(te.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var se=te.a;return P(3,se);case 4:var se=te.a;return P(4,se);default:return P(5,0)}}(),T=_.a,M=_.b,G=e.bD,j=G,E=o(ko,j,e.b$),N=E,W=Ze({dx:0,dy:x.fT,dz:an(N),dA:e.ec,dB:0,dC:x.fX,dD:tn(N),dE:zp(f),dF:0,dG:x.c6,dH:on(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),A=Te(Rl,W,l,b,Pp,t,{M:L,U:L,fz:L}),J=e.bJ;switch(J.$){case 0:var Z=J.a;return Ge(h([p(Je,A.M,P(Z,qa),Ar),p(Je,A.U,fn,Ar)]));case 1:var Z=J.a;return Ge(h([p(Je,A.M,fn,Ar),h([Ei]),p(Je,A.fz,Z.bd,Nl),h([Wl(0)]),p(Je,A.M,P(Z,qa),Mp),p(Je,A.U,fn,Ar)]));default:var oe=J.a,ve=J.b;return Ge(h([p(Je,A.M,P(ve,qa),Ar),h([Ei]),o(up,A.fz,oe),p(Ap,A.M,ve,zr(oe)),p(Je,A.U,fn,Ar)]))}},Xp=function(e){return o(Bn,"width",Me(e))},Ip=v(function(e,r){var n=h([F0(1),N0(0),P0(!0),C(D0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(k,k0,n),"1",1);default:var M=T.a;return V(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Mi($),d=o(ge,"height",Me(s)+"px"),m=Mi(u),f=m/s,g=o(zo,function(T){return Hp({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(ge,"width",Me(m)+"px"),w=e.aI,x=w,_=G0(x);return p(R0,"div",h([o(ge,"padding","0px"),b,d]),h([P(i,p(X0,t,h([Xp(Ue(m*c)),V0(Ue(s*c)),b,d,o(ge,"display","block"),o(ge,"background-color",_)]),g))]))}),Up=function(e){return o(Ip,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Kl=function(e){return e},ji=Kl({fT:.31271,fX:.32902}),Op=v(function(e,r){var n=e,a=We(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(ko,r.ce,r.b6),u=l;return{by:on(u),ex:n,bF:tn(u),cK:0,bV:an(u),c_:1,fT:-t,fX:-i,c6:-c}}),Jp=function(e){return e},qp=function(e){return Jp(1.2*o(En,2,e))},Ka=function(e){return e},Yp={$:0},Zp=Yp,Ql=function(e){return e},Kp=v(function(e,r){var n=e,a=r;return O(a,n)>0}),Ni=function(e){var r=e;return r},Qp=function(e){e:for(;;){if(pr(e.e2,ir)&&pr(e.e3,ir))return Se;if(o(Kp,Ne(e.e2),Ne(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:zn(e.ei)};e=r;continue e}else{var n=K(Ni(e.e3)/lr),a=K(Ni(e.e2)/lr),t=We(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(ko,Ql(1),e.b6),$=u;return{by:a*on($),ex:!1,bF:a*tn($),cK:n/a,bV:a*an($),c_:3,fT:i,fX:c,c6:l}}}},Gi=function(e){return Qp({b6:e.b6,e2:e.ce,e3:ir,ei:e.ei})},e3=function(e){var r=e;return r},eu=function(e){var r=p(Ml,1667,25e3,e3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kl({fT:n,fX:a})},ru=function(e){return e},r3=eu(ru(12e3)),n3=eu(ru(5600)),a3=function(e){return{$:2,a:e}},t3=function(e){return a3(e)},o3=v(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},Jn=function(e){var r=e;return r},i3=function(e){var r=e;return r.ex},c3=nu(fn.a),l3=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(k,a,i),c):P(i,o(k,a,c))});return p(ar,n,P(L,L),r)}),u3=function(e){var r=e;return Ze({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},v3=Q(function(e,r,n,a,t,i,c,l){var u=o(l3,i3,h([Jn(e),Jn(r),Jn(n),Jn(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(o3,o(ee,u3,$),{bd:o(Ve,m,g),bK:o(Ve,w,_),bL:o(Ve,t,i),bM:o(Ve,c,l)})}else return c3}else return nu({bd:o(Ve,e,r),bK:o(Ve,n,a),bL:o(Ve,t,i),bM:o(Ve,c,l)})}),$3=y(function(e,r,n){return za(v3,e,r,n,Se,Se,Se,Se,Se)}),f3=function(e){var r=o(Op,C0(e.fz),{b6:n3,eG:e.fI,ce:Ka(8e4)}),n=Gi({b6:r3,ce:Ka(2e4),ei:e.ei}),a=Gi({b6:ji,ce:Ka(15e3),ei:zn(e.ei)}),t=p($3,r,n,a);return Up({b0:t3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:qp(15),bJ:t,bZ:Zp,b$:ji})},au=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),s3=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),d3=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),m3=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),p3=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Eo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(p3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(s3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(m3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(d3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ro={$:0},b3=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Sa(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),g3=y(function(e,r,n){var a=Sa(e(r));return za(b3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Qa=v(function(e,r){var n=e,a=r;return O(a,n)<1}),iu=function(e){return o(Qa,e.dO,e.dR)&&o(Qa,e.dP,e.dS)&&o(Qa,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},kn=function(e){var r=e;return r},_n=function(e){var r=e;return r.fT},wn=function(e){var r=e;return r.fX},yn=function(e){var r=e;return r.c6},cu=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=_n(n),c=wn(n),l=yn(n),u=_n(a),$=wn(a),s=yn(a),d=_n(t),m=wn(t),f=yn(t);return iu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,$,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,$,m)),dT:o(fe,l,o(fe,s,f))})},lu=H$,Ce=function(e){return lu(Ea(e))},uu=function(e){var r=e;return r},Ra=function(e){return lu(uu(e))},h3=v(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),kt=v(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),_3={fT:0,fX:0,c6:0},w3=v(function(e,r){var n=e,a=r,t=o(er,K(a.fT),o(er,K(a.fX),K(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=Nr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return _3}),y3=w3(Ql(1)),vu=y(function(e,r,n){var a=o(kt,r,n),t=o(kt,e,r);return y3(o(h3,a,t))}),x3=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Ra(p(vu,n,a,t));return V({o:i,bT:Ce(n)},{o:i,bT:Ce(a)},{o:i,bT:Ce(t)})},S3=v(function(e,r){return{$:2,a:e,b:r}}),$u=S3({df:3,$7:0,dV:4}),T3=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ee,x3,e)),t=p(g3,cu,r,n);return C(au,t,e,a,0)}else return Ro},Fe=y(function(e,r,n){return V(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),fu=function(){var e=je(1),r=je(1),n=je(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(pe,i,t,a),l=o(ie,.5,e),u=p(pe,i,t,l),$=o(ie,.5,r),s=p(pe,i,$,a),d=p(pe,i,$,l),m=o(ie,.5,n),f=p(pe,m,t,a),g=p(pe,m,$,a),b=p(pe,m,t,l),w=p(pe,m,$,l);return Eo(T3(h([p(Fe,c,g,f),p(Fe,c,s,g),p(Fe,u,b,w),p(Fe,u,w,d),p(Fe,f,g,w),p(Fe,f,w,b),p(Fe,c,d,s),p(Fe,c,u,d),p(Fe,c,f,b),p(Fe,c,b,u),p(Fe,s,w,g),p(Fe,s,d,w)])))}(),qn={$:0},C3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),L3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ra(p(vu,u,l,c)),s={o:$,bT:Ce(u)},d={o:$,bT:Ce(l)},m={o:$,bT:Ce(c)};return o(k,s,o(k,d,o(k,m,n)))}),jo=function(e){var r=e;return r.D},P3=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ae(p(e,t,i,c))}),Mt=4294967295>>>32-Cn,Dt=qu,z3=y(function(e,r,n){e:for(;;){var a=Mt&r>>>e,t=o(Dt,a,n);if(t.$){var $=t.a;return o(Dt,Mt&r,$)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),k3=function(e){return e>>>5<<5},M3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,k3(n))>-1?ae(o(Dt,Mt&e,i)):ae(p(z3,a,e,t))}),No=function(e){var r=e;return r.ah},et=v(function(e,r){return o(M3,e,No(r))}),D3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(P3,y(function(c,l,u){return V(c,l,u)}),o(et,a,e),o(et,t,e),o(et,i,e))};return o($o,r,jo(e))},B3=y(function(e,r,n){e:for(;;){var a=o(ro,Ae,e),t=a.a,i=a.b;if(O(mt(t),Ae)<0)return o(Gc,!0,{z:r,l:n,p:t});var c=i,l=o(k,jc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Go=function(e){return e.b?p(B3,e,L,0):Ec},A3=y(function(e,r,n){return e(r(n))}),F3=v(function(e,r){return!o(Kc,o(A3,ps,e),r)}),V3=v(function(e,r){return p(ar,v(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),E3=function(e){var r=e.a;return r},su=v(function(e,r){var n=E3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(F3,a,r)?{D:r,ah:e}:{D:o(V3,a,r),ah:e}}),R3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Gn=R3({df:1,$7:3,dV:4}),ca=v(function(e,r){var n=Xr(r),a=Xr(e);return P(V(a.fT,a.fX,a.c6),V(n.fT,n.fX,n.c6))}),Wi=p(jn,0,0,0),rt=Oe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(co,o(ca,e,r),t);if($.$){var d={o:Wi,bT:Ce(r)},m={o:Wi,bT:Ce(e)},f=u+1,g=u;return V(o(k,V(n,g,f),o(k,V(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=$.a;return V(o(k,V(n,s,a),c),l,u)}}),j3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=$,T=a+3,M=Te(rt,s,m,f,b,r,Te(rt,d,s,g,f,r,Te(rt,m,d,b,g,r,t)));e=w,r=x,n=_,a=T,t=M;continue e}else{var G=t,j=G.a,E=G.b;return P(j,Be(E))}}),N3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(pn,o(ca,m,s),f,p(pn,o(ca,s,d),g,p(pn,o(ca,d,m),b,t))),x=o(k,V(b,g,f),a),_=e,T=$,M=n+3,G=x,j=w;e=_,r=T,n=M,a=G,t=j;continue e}else return V(a,t,n)}),Sr=y(function(e,r,n){var a=D3(n),t=p(ar,L3(r),L,a),i=S(N3,r,a,0,L,gl),c=i.a,l=i.b,u=i.c,$=S(j3,r,l,a,0,V(c,L,u)),s=$.a,d=$.b,m=pl(d)?t:le(t,d);return p(C3,e,o(su,Go(m),s),o(Gn,m,s))}),Bt=function(e){return{D:o(ee,function(r){return V(3*r,3*r+1,3*r+2)},o(Ir,0,zr(e)-1)),ah:Go(Ge(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},du=function(e){switch(e.$){case 0:return qn;case 1:var a=e.a,r=e.b,n=o(ee,kn,r);return p(Sr,a,Lr,Bt(n));case 2:var a=e.a,r=e.b,n=o(ee,kn,r);return p(Sr,a,Lr,Bt(n));case 3:var a=e.a,t=e.b;return p(Sr,a,Lr,t);case 4:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Sr,a,function(i){return i.bT},t);case 8:return qn;case 9:return qn;default:return qn}},Hi=du(fu),mu={$:0},z=mu,me=v(function(e,r){return{$:1,a:e,b:r}}),G3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},W3=1029,H3=function(e){return{$:5,a:e}},pu=function(e){var r=e;return H3(r)},X3=pu(W3),I3=1028,U3=pu(I3),Le=y(function(e,r,n){return r===1?e?o(k,X3,n):o(k,U3,n):n}),bu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nt=R(function(e,r,n,a){return o(me,r,Q(function(t,i,c,l,u,$,s,d){return S(re,p(Le,l,a,d),bu,G3,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),Wo={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=R(function(e,r,n,a){return o(me,r,Q(function(t,i,c,l,u,$,s,d){return S(re,p(Le,l,a,d),gu,Wo,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),hu=v(function(e,r){return{$:3,a:e,b:r}}),O3={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},J3=R(function(e,r,n,a){return o(hu,n,Q(function(t,i,c,l,u,$,s,d){return S(re,d,_u,O3,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),Ho={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Wn=function(e){var r=e;return r},ja=X$,or=he(function(e,r,n,a,t){return o(me,n,Q(function(i,c,l,u,$,s,d,m){return S(re,p(Le,u,t,m),gu,Ho,a,{aN:o(ja,Wn(r),e),b:l,c,d:s,e:i,f:$})}))}),q3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Y3=he(function(e,r,n,a,t){return o(hu,a,Q(function(i,c,l,u,$,s,d,m){return S(re,m,_u,q3,t,{aN:o(ja,Wn(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Yn=R(function(e,r,n,a){return o(me,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(re,p(Le,l,a,d),yu,wu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,d:$,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Z3=Oe(function(e,r,n,a,t,i){return o(me,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(re,p(Le,$,i,f),Su,xu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Tu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},K3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(me,u,Q(function(d,m,f,g,b,w,x,_){var T=x.a,M=x.b;return S(re,p(Le,g,s,_),Su,Tu,$,{b4:e,b8:r,b9:i,ca:a,P:M,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Cu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Zn=Oe(function(e,r,n,a,t,i){return o(me,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(re,p(Le,$,i,f),yu,Cu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),Q3=function(e){return{$:0,a:e}},Xi=v(function(e,r){return{$:1,a:e,b:r}}),xn=v(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),eb=function(e){return C(nn,an(e),tn(e),on(e),1)},Xo=C(nn,0,0,0,0),la=v(function(e,r){if(r.$){var a=r.a.C;return P(a,Xo)}else{var n=r.a;return P(e,eb(n))}}),Lu=v(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Xi,P(t,Xo),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Xi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,Q3(a)}}),rb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Kn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),nb=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ab=function(e){return o(ke,e,1)},At=o(ke,0,0),Fr=v(function(e,r){if(r.$){var a=r.a.C;return P(a,At)}else{var n=r.a;return P(e,ab(n))}}),Pu=R(function(e,r,n,a){var t=C(nb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Kn,P(u,Xo),o(Fr,u,r),o(Fr,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Kn,o(la,u,e),P(u,At),o(Fr,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Kn,o(la,u,e),o(Fr,u,r),P(u,At),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Kn,o(la,u,e),o(Fr,u,r),o(Fr,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(rb,i,c,l)}}),tb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},at=he(function(e,r,n,a,t){return o(me,n,Q(function(i,c,l,u,$,s,d,m){return S(re,p(Le,u,t,m),bu,tb,a,{b1:Wn(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),zu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ob=R(function(e,r,n,a){return o(me,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(re,p(Le,l,a,d),zu,xu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cr:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),ib=Et(function(e,r,n,a,t,i,c,l,u){return o(me,c,Q(function($,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(re,p(Le,m,u,w),zu,Tu,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cv:t,b:d,c:s,aW:e,d:g,cS:n,e:$,a$:0,f})}))}),Mn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),cb=function(e){var r=e;return p(Mn,r.dR,r.dO,.5)},lb=function(e){var r=e;return p(Mn,r.dS,r.dP,.5)},ub=function(e){var r=e;return p(Mn,r.dT,r.dQ,.5)},vb=function(e){return p(pe,cb(e),lb(e),ub(e))},H=function(e){var r=Il(e),n=r.a,a=r.b,t=r.c;return{ey:Ea(vb(e)),eS:n/2,eT:a/2,eU:t/2}},Io=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(nt,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(J3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(at,l,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(at,l,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(at,l,$,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,$,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,$,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Y3,u,$,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Lu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(ob,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Te(Z3,b,x,_,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(Yn,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(Yn,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Yn,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Yn,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,M=e.c,G=e.d,j=e.e,E=C(Pu,T,M,G,j);if(E.$){var J=E.a,Z=J.a,oe=J.b,ve=E.b,te=ve.a,se=ve.b,Pe=E.c,xe=Pe.a,sr=Pe.b,dr=E.d,x=dr.a,_=dr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Xu(ib,Z,oe,te,se,xe,sr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return K3(Z)(oe)(te)(se)(xe)(sr)(x)(_)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,W=E.b,A=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return Te(Zn,N,W,A,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return Te(Zn,N,W,A,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Te(Zn,N,W,A,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Te(Zn,N,W,A,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),tt=function(e){var r=e;return r.fT},ot=function(e){var r=e;return r.fX},it=function(e){var r=e;return r.c6},$b=function(e){var r=e,n=it(r.c7),a=ot(r.c7),t=tt(r.c7),i=it(r.c5),c=ot(r.c5),l=tt(r.c5),u=it(r.c4),$=ot(r.c4),s=tt(r.c4);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},fb=function(e){var r=Ea(en(e)),n=We(Br(e)),a=We(Dr(e)),t=We(Mr(e));return{dp:$b(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bX:1}},Vr=v(function(e,r){return{$:5,a:e,b:r}}),ku=v(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(El,a,e);return o(Vr,i,t);case 1:return o(Vr,e,n);case 3:return o(Vr,e,n);case 2:return o(Vr,e,n);default:return o(Vr,e,n)}}),Mu=v(function(e,r){return o(ku,fb(e),r)}),Na=function(e){return{$:2,a:e}},sb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),db=O$,mb=U$,Ii=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=mb(a),g=f.fT,b=f.fX,w=f.c6,x=f.em,_=db({em:x,fT:g*s,fX:b*d,c6:w*m});return za(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Ft=v(function(e,r){switch(r.$){case 0:return mu;case 5:var n=r.a,a=r.b;return o(Vr,n,o(Ft,e,a));case 1:var t=r.a,i=r.b;return o(me,o(sb,e,t),o(Ii,e,i));case 3:return r;case 2:var i=r.a;return Na(o(Ii,e,i));default:var c=r.a;return Jl(o(ee,Ft(e),c))}}),Uo=v(function(e,r){var n=r;return o(Ft,e,n)}),Oo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Bu=7682,pb=p(Bo,{cp:0,cO:0,c3:15},{a8:ye,bl:qr,bt:ye,bu:Du},{a8:ye,bl:qr,bt:ye,bu:Bu}),bb=p(Bo,{cp:0,cO:0,c3:15},{a8:ye,bl:qr,bt:ye,bu:Bu},{a8:ye,bl:qr,bt:ye,bu:Du}),Jo=v(function(e,r){return e?o(k,bb,r):o(k,pb,r)}),gb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},hb=function(e){if(e.$){var r=e.c;return ae(Q(function(n,a,t,i,c,l,u,$){return S(re,o(Jo,i,$),gb,Oo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},Ta=function(e){var r=hb(e);if(r.$)return z;var n=r.a;return Na(n)},_b=R(function(e,r,n,a){var t=o(Io,n,fu),i=function(){var s=P(e,r);return s.a?s.b?Nn(h([t,Ta(Hi)])):t:s.b?Ta(Hi):z}(),c=yo(a),l=c.a,u=c.b,$=c.c;return o(Mu,wo(a),o(Uo,V(l,u,$),i))}),wb=v(function(e,r){return C(_b,!0,!0,e,r)}),Au=v(function(e,r){return{$:0,a:e,b:r}}),yb=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(jn,n,a,t)},xb=function(e){return o(Au,0,Lt(yb(e)))},Sb=function(e){var r=e;return r.k},Sn=function(e){var r=e;return Or(r)},Tb=v(function(e,r){var n=r;return n/e}),Ui=function(e){var r=e;return{fT:Or(r),fX:Jr(r)}},Cb=v(function(e,r){var n=e.bT,a=e.o;return o(k,{o:Ra(a),bT:Ce(n)},r)}),Lb=Pa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=on(l.bT),s=tn(l.bT),d=an(l.bT),m=o(ia,e,d),f=o(er,r,d),g=o(ia,n,s),b=o(er,a,s),w=o(ia,t,$),x=o(er,i,$),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=v(function(e,r){var n=on(e.bT),a=tn(e.bT),t=an(e.bT);return Rt(Lb,t,t,a,a,n,n,r)}),Pb=function(e){var r=p(zc,Cb,L,No(e));if(r.b){var n=r.a,a=r.b,t=o(Gn,r,jo(e)),i=o(Fu,n,a);return C(tu,i,e,t,0)}else return Ro},zb=Pr({fT:0,fX:0,c6:-1}),Oi=v(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),Ca=function(e){var r=e;return Jr(r)},sn=function(e){var r=e;return r},Vt=function(e){return gr(2*lr*e)},Ji=Ll({cB:fr,c4:go,c5:Po}),Vu=function(){var e=72,r=o(Tb,e,Vt(1)),n=je(1),a=sn(Pl),t=sn(zb),i=je(1),c=o(ie,.5,i),l=p(pe,ir,ir,c),u=o(ie,-.5,i),$=p(pe,ir,ir,u),s=function(f){var g=o(ie,f,r),b=sn(o(Oi,Ji,Ui(g))),w=o(ie,Sn(g),n),x=o(ie,Ca(g),n),_=p(pe,w,x,c),T=p(pe,w,x,u),M=o(_a,e,f+1),G=o(ie,M,r),j=sn(o(Oi,Ji,Ui(G))),E=o(ie,Sn(G),n),N=o(ie,Ca(G),n),W=p(pe,E,N,u),A=p(pe,E,N,c);return h([V({o:t,bT:$},{o:t,bT:W},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:W},{o:j,bT:A}),V({o:b,bT:T},{o:j,bT:A},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:A})])},d=o(ee,s,o(Ir,0,e-1)),m=Bt(Ge(d));return Eo(Pb(m))}(),qi=du(Vu),kb=function(e){var r=e;return r.cB},Mb=function(e){var r=e,n=K(r.c6),a=K(r.fX),t=K(r.fT);if(O(t,a)<1)if(O(t,n)<1){var i=Nr(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=Nr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(O(a,n)<1){var i=Nr(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=Nr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},Db=function(e){var r=Mb(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return P(r,c)},Bb=function(e){var r=Tl(e),n=Db(r),a=n.a,t=n.b;return rn({cB:kb(e),c4:a,c5:t,c7:r})},Ab=function(e){var r=e;return r.e9},Fb=function(e){var r=e;return r.fr},Vb=R(function(e,r,n,a){var t=Bb(Sb(a)),i=o(Io,n,Vu),c=function(){var d=P(e,r);return d.a?d.b?Nn(h([i,Ta(qi)])):i:d.b?Ta(qi):z}(),l=Fb(a),u=l,$=Ab(a),s=$;return o(Mu,t,o(Uo,V(u,u,s),c))}),Eb=v(function(e,r){return C(Vb,!0,!0,e,r)}),Yi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Zi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},dn=function(e){var r=kn(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return Ze({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Qn=$u(h([V({cZ:0},{cZ:1},{cZ:2})])),Rb=v(function(e,r){var n=cu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(me,a,Q(function(_,T,M,G,j,E,N,W){return S(re,p(Le,G,0,W),Yi,Wo,Qn,{aw:t,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(me,a,Q(function(_,T,M,G,j,E,N,W){return S(re,p(Le,G,0,W),Yi,Ho,Qn,{aN:o(ja,Wn(c),i),b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Lu,l,f);if(u.$)return z;var $=u.a;return o(me,a,Q(function(_,T,M,G,j,E,N,W){var A=N.a,J=N.b;return S(re,p(Le,G,0,W),Zi,wu,Qn,{P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cq:$,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Pu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(me,a,Q(function(_,T,M,G,j,E,N,W){var A=N.a,J=N.b;return S(re,p(Le,G,0,W),Zi,Cu,Qn,{b3:b,P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cu:x,b:M,c:T,d:E,cR:w,e:_,bq:dn(r),f:j})}))}}),jb=function(){var e=h([{a_:o(ke,0,1)},{a_:o(ke,1,1)},{a_:o(ke,2,1)},{a_:o(ke,0,-1)},{a_:o(ke,1,-1)},{a_:o(ke,2,-1)}]),r=h([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(Gn,e,r)}(),Nb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ki=function(e){return Na(Q(function(r,n,a,t,i,c,l,u){return S(re,o(Jo,t,u),Nb,Oo,jb,{b:a,c:n,d:c,e:r,bY:l,bq:dn(e),f:i})}))},Gb=R(function(e,r,n,a){var t=o(Rb,n,a),i=P(e,r);return i.a?i.b?Nn(h([t,Ki(a)])):t:i.b?Ki(a):z}),Wb=v(function(e,r){return C(Gb,!0,!0,e,r)}),Hb=v(function(e,r){var n=yn(r),a=yn(e),t=wn(r),i=wn(e),c=_n(r),l=_n(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Xb=function(e){var r=xo(e),n=r.a,a=r.b;return o(Hb,n,a)},Qi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ib=v(function(e,r){return{$:1,a:e,b:r}}),Ub=Ib({df:2,$7:0,dV:1}),ec=Ub(h([P({dw:0},{dw:1})])),Ob=v(function(e,r){var n=Xb(r),a=H(n),t=xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(me,a,Q(function($,s,d,m,f,g,b,w){return S(re,w,Qi,Wo,ec,{aw:l,du:Ce(c),dv:Ce(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(me,a,Q(function(s,d,m,f,g,b,w,x){return S(re,x,Qi,Ho,ec,{aN:o(ja,Wn(u),l),du:Ce(c),dv:Ce(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Jb=v(function(e,r){return o(Ob,e,r)}),rc=v(function(e,r){var n=e,a=r;return n/a}),qb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(pr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),nc=v(function(e,r){return e<1?L:S(qb,0,e,e,r,L)}),Yb=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Ra(a),bT:Ce(n),L:o(ke,c,l)},r)}),Zb=function(e){var r=p(zc,Yb,L,No(e));if(r.b){var n=r.a,a=r.b,t=o(Gn,r,jo(e)),i=o(Fu,n,a);return C(ou,i,e,t,0)}else return Ro},Eu=v(function(e,r){var n=e,a=r,t=Or(a);return{fT:t*Or(n),fX:t*Jr(n),c6:Jr(a)}}),Kb=function(){var e=je(1),r=72,n=o(Ir,0,r-1),a=o(nc,r,o(Mn,ir,Vt(1))),t=Qt(r/2),i=o(Ir,0,t-1),c=o(nc,t,o(Mn,$n(90),$n(-90))),l=Go(Ge(o(ee,function(s){return o(ee,function(d){return{o:sn(o(Eu,s,d)),bT:p(pe,o(ie,Sn(d)*Sn(s),e),o(ie,Sn(d)*Ca(s),e),o(ie,Ca(d),e)),L:P(o(rc,s,Vt(1)),o(rc,o(hn,$n(90),d),$n(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ge(o(ee,function(s){return Ge(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([V(b,g,m),V(b,m,f)])},i))},n));return Eo(Zb(o(su,l,$)))}(),La=72,ea=2*La,Qb=v(function(e,r){e:for(;;){var n=ea+1,a=o(_a,ea,2*e+3),t=o(_a,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(k,V(l,c,t),o(k,V(c,a,t),o(k,V(c,i,a),o(k,V(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),eg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),rg=v(function(e,r){e:for(;;){var n=p(eg,0,2*lr,e/La),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ng=function(){var e=o(rg,La-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Qb,La-1,L);return o(Gn,e,r)}(),ag={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ac=function(e){return Na(Q(function(r,n,a,t,i,c,l,u){return S(re,o(Jo,!0,u),ag,Oo,ng,{aw:p(jn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},tg=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bX:1}},og=v(function(e,r){return o(ku,tg(e),r)}),ig=R(function(e,r,n,a){var t=o(Io,n,Kb),i=function(){var u=P(e,r);return u.a?u.b?Nn(h([t,ac()])):t:u.b?ac():z}(),c=To(a),l=c;return o(og,o(kt,fr,So(a)),o(Uo,V(l,l,l),i))}),cg=v(function(e,r){return C(ig,!0,!0,e,r)}),lg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ug=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),vg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Au,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(lg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(kl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ug,n,a,t,i,c)}},$g=vg,Ru=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(wb,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Wb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(cg,$g(t),a)]);case 2:var t=e.a,i=e.b;return h([o(Eb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Jb,xb(c),l)]);default:var u=e.a;return o(zo,Ru,u)}},fg=function(e){return o(zo,Ru,e)},sg=v(function(e,r){return f3({aI:S0(e.es),ev:e.ev,aJ:T0(.5),cb:e.cb,aK:P(ki(Ue(e.cT.fR)),ki(Ue(e.cT.eW))),aP:fg(r),fz:!0,fI:o(Eu,gr(e.fH),gr(e.fJ)),ei:Va})}),dg=v(function(e,r){return o(sg,{es:p(w0,46,46,46),ev:Km(e),cb:e.cb,cT:e.cT,fH:-jr(135),fJ:-jr(45)},h([x0(e),_0(e),Mm]))}),mg=C(_m,dg,Cm,Tm,wm);const pg={Main:{init:mg(o(B,function(e){return ze({e1:e})},o(D,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return ze({b7:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return o(B,function(s){return o(B,function(d){return ze({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",ba(Pn)))},o(D,"left",Y))},o(D,"pressedKeys",ba(Pn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function($){return ze({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(B,function(r){return o(B,function(n){return ze({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(B,function(e){return o(B,function(r){return ze({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},bg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),$(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},gg=()=>{ct("pointerdown"),ct("wheel"),ct("keydown")},ct=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},hg=pg.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});gg();bg(hg);
