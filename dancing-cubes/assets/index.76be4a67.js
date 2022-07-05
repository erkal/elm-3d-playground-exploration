const Eu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Eu();function hr(e,r,n){return n.a=e,n.f=r,n}function $(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Sa(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Rt(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Et(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ta(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function ju(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Nu=[];function Gu(e){return e.length}var Wu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Hu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),Xu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Iu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Uu()),r});function Uu(e){return"<internals>"}function Zr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=ut(e,r,0,a);t&&(n=a.pop());t=ut(n.a,n.b,0,a));return t}function ut(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Zr(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=ci(e),r=ci(r));for(var t in e)if(!ut(e[t],r[t],n+1,a))return!1;return!0}$(gr);$(function(e,r){return!gr(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var Ju=$(function(e,r){var n=U(e,r);return n<0?Cc:n?Mf:Tc}),Ln=0;function L(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Ye(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=er(e.a,r);return n}var P={$:0};function er(e,r){return{$:1,a:e,b:r}}var Ou=$(er);function _(e){for(var r=P,n=e.length;n--;)r=er(e[n],r);return r}function Ca(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var qu=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(Ca(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return _(Ca(r).sort(function(n,a){var t=o(e,n,a);return t===Tc?0:t===Cc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Yu=$(Math.pow);$(function(e,r){return r%e});var Zu=$(function(e,r){var n=r%e;return e===0?Zr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Qu=Math.PI,Ku=Math.cos,ev=Math.sin,rv=Math.tan;$(Math.atan2);function nv(e){return e}function av(e){return e===1/0||e===-1/0}var tv=Math.ceil,ov=Math.floor,iv=Math.round,cv=Math.sqrt,Jo=Math.log,lv=isNaN;function uv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var vv=$(function(e,r){return e+r});function $v(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}$(function(e,r){return e+r});function fv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function sv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var dv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),mv=$(function(e,r){return r.split(e)}),pv=$(function(e,r){return r.join(e)}),bv=x(function(e,r,n){return n.slice(e,r)});function gv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var hv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),_v=$(function(e,r){return r.indexOf(e)>-1}),wv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var yv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function Ki(e){return e+""}function xv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Sv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Tv(e){return Ca(e).join("")}function Cv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Lv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Pv(e){return{$:0,a:e}}function jt(e){return{$:2,b:e}}var zv=jt(function(e){return typeof e=="boolean"?ue(e):qe("a BOOL",e)}),kv=jt(function(e){return typeof e=="number"?ue(e):qe("a FLOAT",e)}),Mv=jt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):qe("a STRING",e)});function Dv(e){return{$:3,b:e}}var Av=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var Bv=$(function(e,r){return{$:10,b:r,h:e}}),Fv=$(function(e,r){return _r(e,[r])}),Vv=x(function(e,r,n){return _r(e,[r,n])});R(function(e,r,n,a){return _r(e,[r,n,a])});ge(function(e,r,n,a,t){return _r(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});Sa(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Rt(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ee(e,n)}catch(a){return we(o(Zt,"This is not valid JSON! "+a.message,r))}});var ec=$(function(e,r){return Ee(e,r)});function Ee(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):qe("null",r);case 3:return Nn(r)?Oo(e.b,r,_):qe("a LIST",r);case 4:return Nn(r)?Oo(e.b,r,Rv):qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return qe("an OBJECT with a field named `"+n+"`",r);var v=Ee(e.b,r[n]);return Xe(v)?v:we(o(li,n,v.a));case 7:var a=e.e;if(!Nn(r))return qe("an ARRAY",r);if(a>=r.length)return qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ee(e.b,r[a]);return Xe(v)?v:we(o(Lc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return qe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ee(e.b,r[i]);if(!Xe(v))return we(o(li,i,v.a));t=er(L(i,v.a),t)}return ue(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ee(l[u],r);if(!Xe(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ee(e.b,r);return Xe(v)?Ee(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Ee(d.a,r);if(Xe(v))return v;s=er(v.a,s)}return we(Df(Ae(s)));case 1:return we(o(Zt,e.a,r));case 0:return ue(e.a)}}function Oo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ee(e,r[i]);if(!Xe(c))return we(o(Lc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Rv(e){return o(qf,e.length,function(r){return e[r]})}function qe(e,r){return we(o(Zt,"Expecting "+e,r))}function Wr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Wr(e.b,r.b);case 6:return e.d===r.d&&Wr(e.b,r.b);case 7:return e.e===r.e&&Wr(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Wr(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Wr(e[a],r[a]))return!1;return!0}var Ev=$(function(e,r){return JSON.stringify(r,null,e)+""});function rc(e){return e}x(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function jv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var vt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Nv(e){return{$:5,b:e}}var Gv=0;function Nt(e){var r={$:0,e:Gv++,f:e,g:null,h:[]};return Gt(r),r}function nc(e){return fr(function(r){r(Br(Nt(e)))})}function ac(e,r){e.h.push(r),Gt(e)}var Wv=$(function(e,r){return fr(function(n){ac(e,r),n(Br(Ln))})}),Ga=!1,Yo=[];function Gt(e){if(Yo.push(e),!Ga){for(Ga=!0;e=Yo.shift();)Hv(e);Ga=!1}}function Hv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Gt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Wt(e,r,n,a,t,i){var c=o(ec,e,r?r.flags:void 0);Xe(c)||Zr(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Xv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Qo(l,b.b,t(v))}return Qo(l,u.b,t(v)),d?{ports:d}:{}}var Qe={};function Xv(e,r){var n;for(var a in Qe){var t=Qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Uv(t,r)}return n}function Iv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Uv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(vt,l,Nv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Nt(o(vt,l,e.b))}var Jv=$(function(e,r){return fr(function(n){e.g(r),n(Br(Ln))})});$(function(e,r){return o(Wv,e.h,{$:0,a:r})});function tc(e){return function(r){return{$:1,k:e,l:r}}}function Ov(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Zo=[],Wa=!1;function Qo(e,r,n){if(Zo.push({p:e,q:r,r:n}),!Wa){Wa=!0;for(var a;a=Zo.shift();)qv(a.p,a.q,a.r);Wa=!1}}function qv(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)ac(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Yv(e,t,a,r.l);n[t]=Zv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function Yv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Qe[r].e:Qe[r].f;return o(i,t,a)}function Zv(e,r,n){return n=n||{i:P,j:P},e?n.i=er(r,n.i):n.j=er(r,n.j),n}function Qv(e){Qe[e]&&Zr(3)}$(function(e,r){return r});function Kv(e,r){return Qv(e),Qe[e]={f:e$,u:r,a:r$},tc(e)}var e$=$(function(e,r){return function(n){return e(r(n))}});function r$(e,r){var n=P,a=Qe[e].u,t=Br(null);Qe[e].b=t,Qe[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(ec,a,c);Xe(l)||Zr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var oa,cr=typeof document!="undefined"?document:{};function Ht(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function $t(e){return{$:0,a:e}}var oc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),Fr=oc(void 0),n$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),a$=n$(void 0);function t$(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var o$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return wr([e,r],function(){return e(r)})});x(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Sa(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return Et(e,r,n,a,t,i,c,l)})});Rt(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return Ta(e,r,n,a,t,i,c,l,u)})});var ic=$(function(e,r){return{$:"a0",n:e,o:r}}),i$=$(function(e,r){return{$:"a1",n:e,o:r}}),cc=$(function(e,r){return{$:"a2",n:e,o:r}}),Pn=$(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function c$(e){return e=="script"?"p":e}function l$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(ic,r.n,u$(e,r.o)):r});function u$(e,r){var n=no(r);return{$:r.$,a:n?p(Yf,n<3?v$:$$,ke(e),r.a):o(ua,e,r.a)}}var v$=$(function(e,r){return L(e(r.a),r.b)}),$$=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Ko(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Ko(c,t,i):c[t]=i}return r}function Ko(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ft(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),ft(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ht(c,br(n===1?l[u]:l[u].b,r));return c}function ft(e,r,n){for(var a in n){var t=n[a];a==="a1"?f$(e,t):a==="a0"?m$(e,r,t):a==="a3"?s$(e,t):a==="a4"?d$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function f$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function s$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function d$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function m$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=p$(r,i),e.addEventListener(t,c,It&&{passive:no(i)<2}),a[t]=c}}var It;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){It=!0}}))}catch{}function p$(e,r){function n(a){var t=n.q,i=Ee(t.a,a);if(!!Xe(i)){for(var c=no(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function b$(e,r){return e.$==r.$&&Wr(e.a,r.a)}function lc(e,r){var n=[];return Ie(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=T$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!g$(d,m):d!==m)&&he(n,2,a,m),Ie(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:ei(e,r,n,a,h$);return;case 2:ei(e,r,n,a,_$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Ut(e.d,r.d);w&&he(n,4,a,w);var y=r.i(e.g,r.g);y&&he(n,5,a,y);return}}}function g$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Ut(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Ut(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ut(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&b$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function h$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ie(s,i[v],n,++a),a+=s.b||0}}function _$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,h=g.b,T=b.b,k=void 0,G=void 0;if(w===y){f++,Ie(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,W=j.b;G=y===N}if(E){var B=E.a,Y=E.b;k=w===B}if(k&&G){f++,Ie(h,Y,t,f),on(i,t,w,T,m,c),f+=h.b||0,f++,cn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(k){f++,on(i,t,y,T,m,c),Ie(h,Y,t,f),f+=h.b||0,d+=1,m+=2;continue}if(G){f++,cn(i,t,w,h,f),f+=h.b||0,f++,Ie(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,cn(i,t,w,h,f),on(i,t,y,T,m,c),f+=h.b||0,f++,Ie(W,Y,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;cn(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];on(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&he(n,8,a,{w:t,x:c,y:Q})}var uc="_elmW6BL";function on(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}on(e,r,n+uc,a,t,i)}function cn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}cn(e,r,n+uc,a,t)}function vc(e,r,n,a){ln(e,r,n,0,0,r.b,a)}function ln(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)vc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&ln(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&ln(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return ln(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,h=t+(y.b||0);if(t<=u&&u<=h&&(a=ln(b[w],y,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function $c(e,r,n,a){return n.length===0?e:(vc(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=w$(t,a);t===e&&(e=i)}return e}function w$(e,r){switch(r.$){case 0:return y$(e,r.s,r.u);case 4:return ft(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return x$(e,r);case 5:return r.s(e);default:Zr(10)}}function y$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function x$(e,r){var n=r.s,a=S$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ht(e,a),e}function S$(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ht(n,i.c===2?i.s:br(i.z,r.u))}return n}}function Jt(e){if(e.nodeType===3)return $t(e.textContent);if(e.nodeType!==1)return $t("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=er(o(Pn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=er(Jt(v[a]),u);return p(Fr,l,r,u)}function T$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var C$=R(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Jt(l);return fc(i,function(v){var s=c(v),d=lc(u,s);l=$c(l,u,d,t),u=s})})});R(function(e,r,n,a){return Wt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=cr.title,v=cr.body,s=Jt(v);return fc(i,function(d){oa=c;var m=l(d),f=Fr("body")(P)(m.eu),g=lc(s,f);v=$c(v,s,g,t),s=f,oa=0,u!==m.fK&&(cr.title=u=m.fK)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function fc(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}$(function(e,r){return o(oo,ao,fr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(oo,ao,fr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(oo,ao,fr(function(){history.replaceState({},"",r),e()}))});var L$={addEventListener:function(){},removeEventListener:function(){}},P$=typeof window!="undefined"?window:L$;x(function(e,r,n){return nc(fr(function(a){function t(i){Nt(n(i))}return e.addEventListener(r,t,It&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ee(e,r);return Xe(n)?re(n.a):q});function sc(e,r){return fr(function(n){ca(function(){var a=document.getElementById(e);n(a?Br(r(a)):jv(Qf(e)))})})}function z$(e){return fr(function(r){ca(function(){r(Br(e()))})})}$(function(e,r){return sc(r,function(n){return n[e](),Ln})});$(function(e,r){return z$(function(){return P$.scroll(e,r),Ln})});x(function(e,r,n){return sc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ln})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var k$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var M$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(C(cl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(C(cl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var D$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/A$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function A$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ot=new Float64Array(3),ri=new Float64Array(3),ni=new Float64Array(3),B$=x(function(e,r,n){return new Float64Array([e,r,n])}),F$=function(e){return e[0]},V$=function(e){return e[1]},R$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var E$=function(e){return new Float64Array([e.fT,e.fX,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function dc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(dc);function mc(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(dc(e,r,n),n)}$(mc);function pc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/pc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var j$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),un=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(un);function st(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(st);$(function(e,r){var n,a=Ot,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=un(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(un(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(un(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(un(r,a)+e[14])/n,t});var N$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var G$=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},W$=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/H$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function H$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var X$=new Float64Array(16),I$=new Float64Array(16),U$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},J$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function bc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(bc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return bc(c,l,i,t,n,a)});function gc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(gc);R(function(e,r,n,a){return gc(e,r,n,a,-1,1)});function hc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],h=e[15],T=r[0],k=r[1],G=r[2],j=r[3],E=r[4],N=r[5],W=r[6],B=r[7],Y=r[8],Q=r[9],oe=r[10],ve=r[11],te=r[12],de=r[13],ze=r[14],Se=r[15];return n[0]=a*T+l*k+d*G+b*j,n[1]=t*T+u*k+m*G+w*j,n[2]=i*T+v*k+f*G+y*j,n[3]=c*T+s*k+g*G+h*j,n[4]=a*E+l*N+d*W+b*B,n[5]=t*E+u*N+m*W+w*B,n[6]=i*E+v*N+f*W+y*B,n[7]=c*E+s*N+g*W+h*B,n[8]=a*Y+l*Q+d*oe+b*ve,n[9]=t*Y+u*Q+m*oe+w*ve,n[10]=i*Y+v*Q+f*oe+y*ve,n[11]=c*Y+s*Q+g*oe+h*ve,n[12]=a*te+l*de+d*ze+b*Se,n[13]=t*te+u*de+m*ze+w*Se,n[14]=i*te+v*de+f*ze+y*Se,n[15]=c*te+s*de+g*ze+h*Se,n}$(hc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],h=r[4],T=r[5],k=r[6],G=r[8],j=r[9],E=r[10],N=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+d*k,n[7]=0,n[8]=a*G+c*j+v*E,n[9]=t*G+l*j+s*E,n[10]=i*G+u*j+d*E,n[11]=0,n[12]=a*N+c*W+v*B+m,n[13]=t*N+l*W+s*B+f,n[14]=i*N+u*W+d*B+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=la(r,Ot);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/pc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,h=g+f,T=b-m,k=g-f,G=c*c*v+u,j=w+d,E=b+m,N=w-d,W=l*l*v+u,B=n[0],Y=n[1],Q=n[2],oe=n[3],ve=n[4],te=n[5],de=n[6],ze=n[7],Se=n[8],dr=n[9],mr=n[10],Na=n[11],Bu=n[12],Fu=n[13],Vu=n[14],Ru=n[15];return a[0]=B*y+ve*h+Se*T,a[1]=Y*y+te*h+dr*T,a[2]=Q*y+de*h+mr*T,a[3]=oe*y+ze*h+Na*T,a[4]=B*k+ve*G+Se*j,a[5]=Y*k+te*G+dr*j,a[6]=Q*k+de*G+mr*j,a[7]=oe*k+ze*G+Na*j,a[8]=B*E+ve*N+Se*W,a[9]=Y*E+te*N+dr*W,a[10]=Q*E+de*N+mr*W,a[11]=oe*E+ze*N+Na*W,a[12]=Bu,a[13]=Fu,a[14]=Vu,a[15]=Ru,a});function O$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(O$);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function q$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(q$);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=mc(e,r,Ot),t=la(st(n,a,ri),ri),i=la(st(a,t,ni),ni),c=X$,l=I$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,hc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ai=0;function hn(e,r){for(;r.b;r=r.b)e(r.a)}function qt(e){for(var r=0;e.b;e=e.b)r++;return r}var Y$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Z$=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Q$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),K$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),ef=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),rf=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),nf=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),af=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),tf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),of=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),cf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},lf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},uf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},vf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},_c=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},wc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},$f=function(e){e.gl.disable(e.gl.CULL_FACE)},ff=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},sf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},df=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ti=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],mf=[lf,uf,vf,_c,wc,$f,ff,sf,df];function oi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function pf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function yc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function bf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[y]:w[y][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][y]:w[T][y][h]})}var u=yc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(qt(n.b)*s);hn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function gf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=hf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*qt(r.b),indexBuffer:null,buffers:{}}}function hf(e,r){var n=new Uint32Array(qt(e)*r),a=0,t;return hn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ii(e,r){return e+"#"+r}var xc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),_c(n),wc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ii(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ai++,v||(v=oi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ai++,s||(s=oi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=pf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=_f(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ii(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),wf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=gf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=bf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=yc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,h=y*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,y*T)}for(n.toggle=!n.toggle,hn(j0(n),i.a),u=0;u<ti.length;u++){var k=n[ti[u]];k.toggle!==n.toggle&&k.enabled&&(mf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return hn(t,e.g),r});function _f(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var y=c++;return function(h){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,y),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function wf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var yf=x(function(e,r,n){return t$(r,{g:n,f:{},h:e},zf,kf)}),xf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Sf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Tf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Cf=$(function(e,r){e.contextAttributes.antialias=!0}),Lf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Pf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function zf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};hn(function(t){return o(E0,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Y$(function(){return o(xc,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function kf(e,r){return r.f=e.f,xc(r)}var A=Ou,Gn=Iu,Sc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Gn,e,l,v)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),Yt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Yt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),ci=function(e){return p(Yt,x(function(r,n,a){return o(A,L(r,n),a)}),P,e)},Tc=1,Mf=2,Cc=0,we=function(e){return{$:1,a:e}},Zt=$(function(e,r){return{$:3,a:e,b:r}}),li=$(function(e,r){return{$:0,a:e,b:r}}),Lc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Df=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Af=hv,Bf=Ev,De=Ki,xr=$(function(e,r){return o(pv,e,Ca(r))}),Qt=$(function(e,r){return _(o(mv,e,r))}),Pc=function(e){return o(xr,`
    `,o(Qt,`
`,e))},zn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),kr=function(e){return p(zn,$(function(r,n){return n+1}),0,e)},Ff=qu,Vf=x(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Mr=$(function(e,r){return p(Vf,e,r,P)}),zc=$(function(e,r){return p(Ff,e,o(Mr,0,kr(r)-1),r)}),Ke=Cv,kc=function(e){var r=Ke(e);return 97<=r&&r<=122},Mc=function(e){var r=Ke(e);return r<=90&&65<=r},Rf=function(e){return kc(e)||Mc(e)},Ef=function(e){var r=Ke(e);return r<=57&&48<=r},jf=function(e){return kc(e)||Mc(e)||Ef(e)},Ae=function(e){return p(zn,A,P,e)},Qr=$v,Nf=$(function(e,r){return`

(`+(De(e+1)+(") "+Pc(Gf(r))))}),Gf=function(e){return o(Wf,e,P)},Wf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Qr(n);if(b.$===1)return!1;var w=b.a,y=w.a,h=w.b;return Rf(y)&&o(Af,jf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(xr,"",Ae(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(De(kr(s))+" ways:"));return o(xr,`

`,o(A,g,o(zc,Nf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(xr,"",Ae(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(xr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return g+(Pc(o(Bf,4,f))+(`

`+m))}}),Be=32,dt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mt=Nu,Kt=tv,eo=$(function(e,r){return Jo(r)/Jo(e)}),Hf=nv,_n=Kt(o(eo,2,Be)),Dc=C(dt,0,_n,mt,mt),Ac=Wu,Bc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Fc=ov,pt=Gu,Pe=$(function(e,r){return U(e,r)>0?e:r}),Xf=function(e){return{$:0,a:e}},ro=Hu,If=$(function(e,r){e:for(;;){var n=o(ro,Be,e),a=n.a,t=n.b,i=o(A,Xf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),Uf=function(e){var r=e.a;return r},Jf=$(function(e,r){e:for(;;){var n=Kt(r/Be);if(n===1)return o(ro,Be,e).a;var a=o(If,e,P),t=n;e=a,r=t;continue e}}),Vc=$(function(e,r){if(r.l){var n=r.l*Be,a=Fc(o(eo,Be,n-1)),t=e?Ae(r.z):r.z,i=o(Jf,t,r.l);return C(dt,pt(r.p)+n,o(Pe,5,a*_n),i,r.p)}else return C(dt,pt(r.p),_n,mt,r.p)}),Of=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Vc,!1,{z:a,l:n/Be|0,p:t});var i=Bc(p(Ac,Be,r,e)),c=e,l=r-Be,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),qf=$(function(e,r){if(e<=0)return Dc;var n=e%Be,a=p(Ac,n,e-n,r),t=e-n-Be;return S(Of,r,t,e,P,a)}),Xe=function(e){return!e.$},D=Bv,Z=zv,M=Av,$e=kv,ua=Fv,Yf=Vv,ke=Pv,no=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Fr("div"),Zf=function(e){return{$:2,a:e}},Rc=$(function(e,r){return e}),Ec=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),Tr=function(e){return e},Qf=Tr,ui=We(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),Kf=_v,Sr=fv,Hr=bv,kn=$(function(e,r){return e<1?r:p(Hr,e,Sr(r),r)}),La=yv,Pa=function(e){return e===""},za=$(function(e,r){return e<1?"":p(Hr,0,e,r)}),jc=xv,vi=ge(function(e,r,n,a,t){if(Pa(t)||o(Kf,"@",t))return q;var i=o(La,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=jc(o(kn,c+1,t));if(l.$===1)return q;var u=l;return re(_e(ui,e,o(za,c,t),u,r,n,a))}else return re(_e(ui,e,t,q,r,n,a))}),$i=R(function(e,r,n,a){if(Pa(a))return q;var t=o(La,"/",a);if(t.b){var i=t.a;return S(vi,e,o(kn,i,a),r,n,o(za,i,a))}else return S(vi,e,"/",r,n,a)}),fi=x(function(e,r,n){if(Pa(n))return q;var a=o(La,"?",n);if(a.b){var t=a.a;return C($i,e,re(o(kn,t+1,n)),r,o(za,t,n))}else return C($i,e,q,r,n)});$(function(e,r){if(Pa(r))return q;var n=o(La,"#",r);if(n.b){var a=n.a;return p(fi,e,re(o(kn,a+1,r)),o(za,a,r))}else return p(fi,e,q,r)});var es=wv,ao=function(e){},Mn=Br,rs=Mn(0),Nc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(zn,e,r,Ae(d)):C(Nc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),sr=x(function(e,r,n){return C(Nc,e,r,0,n)}),ee=$(function(e,r){return p(sr,$(function(n,a){return o(A,e(n),a)}),P,r)}),va=vt,to=$(function(e,r){return o(va,function(n){return Mn(e(n))},r)}),ns=x(function(e,r,n){return o(va,function(a){return o(va,function(t){return Mn(o(e,a,t))},n)},r)}),as=function(e){return p(sr,ns(A),Mn(P),e)},ts=Jv,os=$(function(e,r){var n=r;return nc(o(va,ts(e),n))}),is=x(function(e,r,n){return o(to,function(a){return 0},as(o(ee,os(e),r)))}),cs=x(function(e,r,n){return Mn(0)}),ls=$(function(e,r){var n=r;return o(to,e,n)});Qe.Task=Iv(rs,is,cs,ls);var us=tc("Task"),oo=$(function(e,r){return us(o(to,e,r))}),vs=C$,$s=uv,$a={$:1},Gc=function(e){return{$:2,a:e}},ka={$:0},je=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),Kr=function(e){var r=e.b.B;return r.a},fs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(je,r,{B:i,ab:c,T:o(A,a,n)}))}else return q},Wc=function(e){var r=e.b;return o(je,ka,r)},rr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ss=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Wc(n):n;case 2:var i=a.a.cX;return(U(i+r.eJ,Kr(n).db)>0?o(ae,fs,rr(o(je,$a,t))):Tr)(o(je,Gc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ec,l.eA,Ye(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(je,ka,{B:L(v,s),ab:P,T:o(A,t.B,t.T)})}}),Hc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ds=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ms=$(function(e,r){return Ae(p(ds,e,r,P))}),Xc=x(function(e,r,n){if(r<=0)return P;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,h,o(A,c,o(A,s,o(A,b,o(ms,r-4,w))))):o(A,h,o(A,c,o(A,s,o(A,b,p(Xc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,h=y.a;return _([h])}}),ps=$(function(e,r){return p(Xc,0,e,r)}),bs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ae(n),le(_([a]),t)),c=o(ps,e,i),l=o(Hc,e,i);if(l.b){var u=l.a,v=l.b;return o(je,$a,{B:u,ab:v,T:Ae(c)})}else{var s=Ae(c);if(s.b){var d=s.a,m=s.b;return o(je,$a,{B:d,ab:P,T:m})}else return r}}),gs=function(e){var r=e.b;return o(je,$a,r)},hs=function(e){var r=e.b;return o(je,Gc({cX:Kr(e).db}),r)},_s=$(function(e,r){switch(e.$){case 1:return gs(r);case 2:return Wc(r);case 3:return hs(r);default:var n=e.a;return o(bs,n,r)}}),Ic=$(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),ws=$(function(e,r){return Ye(r,{av:e(r.av)})}),ys=function(e){return{$:3,a:e}},xs=function(e){return{$:2,a:e}},Uc=$(function(e,r){return{$:0,a:e,b:r}}),Jc=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},io=Sv,Ss=x(function(e,r,n){return o(rr,0/0,io(o(e,r,n)))}),Oc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ts=dv,qc=function(e){return p(Ts,A,P,e)},Cs=$(function(e,r){var n=o(Oc,function(a){return a!=="0"&&a!=="."},qc(r));return le(e&&n?"-":"",r)}),pe=Ki,bt=vv,Yc=Lv,Zc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Qr(n);if(a.$===1)return"01";var t=a.a;return o(bt,"0",Zc(t))}else{var i=Ke(r);return i>=48&&i<57?o(bt,Yc(i+1),n):"0"}},gt=av,Ls=lv,Ma=function(e){return o(bt,e,"")},Qc=x(function(e,r,n){return e<=0?n:p(Qc,e>>1,le(r,r),e&1?le(n,r):n)}),wn=$(function(e,r){return p(Qc,e,r,"")}),ht=x(function(e,r,n){return le(n,o(wn,e-Sr(n),Ma(r)))}),_t=sv,Kc=function(e){var r=o(Qt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Ps=function(e){var r=o(Qt,"e",pe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(rr,0,jc(o(es,"+",t)?o(kn,1,t):t)),c=Kc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(rr,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Ic(Ma),Qr(le(o(wn,O(i),"0"),v))))):p(ht,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},zs=x(function(e,r,n){if(gt(n)||Ls(n))return pe(n);var a=n<0,t=Kc(Ps(O(n))),i=t.a,c=t.b,l=Sr(i)+r,u=le(o(wn,-l+1,"0"),p(ht,l,"0",le(i,c))),v=Sr(u),s=o(Pe,1,l),d=o(e,a,p(Hr,s,v,u)),m=p(Hr,0,s,u),f=d?_t(o(rr,"1",o(ye,Zc,Qr(_t(m))))):m,g=Sr(f),b=f==="0"?f:r<=0?le(f,o(wn,O(r),"0")):U(r,Sr(c))<0?p(Hr,0,g-r,f)+("."+p(Hr,g-r,g,f)):le(i+".",p(ht,r,"0",c));return o(Cs,a,b)}),el=zs($(function(e,r){var n=Qr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ke(t))})),ks=Ss(el),Ms=x(function(e,r,n){var a=o(eo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(ks,t,n)}),rl=Ju,Da=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(rl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),nr={$:-2},Or=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,y),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),wt=x(function(e,r,n){if(n.$===-2)return S(X,0,e,r,nr,nr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(rl,e,t);switch(u){case 0:return S(Or,a,t,i,p(wt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Or,a,t,i,c,p(wt,e,r,l))}}),sn=x(function(e,r,n){var a=p(wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Ds=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},nl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,y=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,y))}else return e},si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,y=k.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,y))}else return e},As=Sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,si(r)}else break e;else return c.a,c.d,si(r);else break e;return r}}),Zn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Zn(t),l);var u=nl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Or,v,s,d,Zn(m),f)}else return nr}else return S(X,r,n,a,Zn(t),l)}else return nr},dn=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(dn,e,i),c);var u=nl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Or,v,s,d,o(dn,e,m),f)}else return nr}else return S(X,n,a,t,o(dn,e,i),c);else return o(Bs,e,Et(As,e,r,n,a,t,i,c))}),Bs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=Ds(c);if(l.$===-1){var u=l.b,v=l.c;return S(Or,n,u,v,i,Zn(c))}else return nr}else return S(Or,n,a,t,i,o(dn,e,c))}else return nr}),Fs=$(function(e,r){var n=o(dn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Wn=x(function(e,r,n){var a=r(o(Da,e,n));if(a.$)return o(Fs,e,n);var t=a.a;return p(sn,e,t,n)}),Vs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Jc,L(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Uc,L(i,c),p(Ms,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){return a.$===3?ys(n):a}));default:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){return a.$===2?xs(n):a}))}},Rs=function(e){return ws(Vs(e))},Es=$(function(e,r){return o(ee,Rs(e),r)}),js=$(function(e,r){return Ye(r,{eA:o(Es,e,r.eA)})}),Ns=$(function(e,r){var n=r.a,a=r.b;return o(je,n,Ye(a,{B:o(Ic,js(e),a.B)}))}),Gs=$(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),Ws=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,Ye(t,{B:o(Gs,o(e,i.a,r),i)}))}),Hs=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ye(a,{aL:!a.aL});case 2:var t=n.a;return Ye(a,{G:p(ss,e,t,a.G)});case 3:var i=n.a;return Ye(a,{G:o(Ns,i,a.G)});case 4:var c=n.a;return Ye(a,{G:p(Ws,r,c,a.G)});default:var l=n.a;return Ye(a,{G:o(_s,l,a.G)})}}),Xs=$(function(e,r){return o(je,ka,{B:L(e,r(e)),ab:P,T:P})}),Is=Ov,di=Is(P),fa=Dv,yn=Mv,Us=Kv("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",fa(yn)))},o(M,"left",Z))},o(M,"pressedKeys",fa(yn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Js=function(e){return{$:4,a:e}},Os={$:0},qs=rc,He=$(function(e,r){return o(cc,e,qs(r))}),J=He("className"),Ys=function(e){var r=e.b.B;return r.b},sa=He("id"),Zs=o$,da=Zs,Qs=i$,se=Qs,Ks={$:1},ed=function(e){return{$:3,a:e}},rd=function(e){return{$:5,a:e}},mi=Fr("a"),co=Fr("button"),nd=Pn("d"),al=oc("http://www.w3.org/2000/svg"),ad=al("path"),td=al("svg"),od=Pn("viewBox"),mn=function(e){return o(td,_([od("0 0 100 100"),o(se,"width","100%"),o(se,"height","100%")]),_([o(ad,_([nd(e)]),P)]))},pi=function(e){return o(He,"href",l$(e))},Ir={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},id=function(e){return{$:0,a:e}},tl=ic,ol=$(function(e,r){return o(tl,e,id(r))}),lo=function(e){return o(ol,"click",ke(e))},bi=He("target"),cd=He("title"),yt=$(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(yt,e,i),o(yt,e,c))}),ld=$t,vr=ld,ud=function(e){return p(Yt,x(function(r,n,a){return o(A,n,a)}),P,e)},vd=$(function(e,r){return{$:3,a:e,b:r}}),$d=$(function(e,r){return{$:2,a:e,b:r}}),fd=$(function(e,r){return{$:0,a:e,b:r}}),sd=$(function(e,r){return{$:1,a:e,b:r}}),Aa=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dd=C(Aa,0/255,0/255,0/255,1),md=rc,pd=$(function(e,r){return o(cc,e,md(r))}),bd=pd("checked"),Je=iv,gd=x(function(e,r,n){return le(o(wn,e-Sr(n),Ma(r)),n)}),ma=Zu,il=function(e){var r=function(n){return n<10?De(n):Ma(Yc(87+n))};return e<16?r(e):le(il(e/16|0),r(o(ma,16,e)))},hd=o(ae,il,o(gd,2,"0")),uo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},_d=function(e){var r=uo(e),n=r.cM,a=r.cc,t=r.b5;return o(xr,"",o(A,"#",o(ee,o(ae,Je,hd),_([n*255,a*255,t*255]))))},xt=He("htmlFor"),St=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),pa=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),wd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Ba=$(function(e,r){return p(sr,wd(e),P,r)}),cl=R(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),yd=M$,xd=Tv,Sd=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Td=k$,Cd=function(e){return o(Td,{ew:!1,fe:!1},e)},Fa=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Ld=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Pd=function(e){return{$:2,a:e}},zd=function(e){return{$:0,a:e}},kd=function(e){return{$:1,a:e}},Ha=$(function(e,r){return Ke(r)-Ke(e)}),Xa=x(function(e,r,n){var a=Ke(n);return U(Ke(e),a)<1&&U(a,Ke(r))<1}),Md=$(function(e,r){var n=function(t){return U(t,e)<0?ue(t):we(kd(r))},a=p(Xa,"0","9",r)?ue(o(Ha,"0",r)):p(Xa,"a","z",r)?ue(10+o(Ha,"a",r)):p(Xa,"A","Z",r)?ue(10+o(Ha,"A",r)):we(zd(r));return o(pa,n,a)}),ll=$(function(e,r){var n=Qr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(pa,function(c){return o(pa,function(l){return ue(c+l*e)},o(ll,e,i))},o(Md,e,t))}),Dd=$(function(e,r){return 2<=e&&e<=36?o(ll,e,_t(r)):we(Pd(e))}),Ad=Dd(16),Bd=x(function(e,r,n){return C(Aa,e,r,n,1)}),ul=R(function(e,r,n,a){return C(Aa,e,r,n,a)}),Dn=Yu,Fd=$(function(e,r){var n=o(Dn,10,e);return Je(r*n)/n}),Vd=gv,Rd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=qc(n);if(a.b&&!a.b.b){var t=a.a;return xd(_([t,t]))}else return n};return o(ae,Vd,o(ae,function(n){return o(ye,function(a){return p(yd,1,a,n)},Cd(e))},o(ae,St(Fa),o(ae,ye(function(n){return n.fF}),o(ae,ye(Ba(Tr)),o(ae,Sd("Parsing hex regex failed"),pa(function(n){var a=o(ee,o(ae,r,o(ae,Ad,Ld(Hf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(ul,t/255,c/255,u/255,o(Fd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Bd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ba=Fr("input"),Tt=Fr("label"),Ct=He("name"),vl=$(function(e,r){return p(sr,M,r,e)}),Ed=o(vl,_(["target","checked"]),Z),jd=function(e){return o(ol,"change",o(ua,e,Ed))},Nd=function(e){return L(e,!0)},Gd=function(e){return{$:1,a:e}},Wd=$(function(e,r){return o(tl,e,Gd(r))}),Hd=o(vl,_(["target","value"]),yn),vo=function(e){return o(Wd,"input",o(ua,Nd,o(ua,e,Hd)))},$l=He("max"),fl=He("min"),sl=function(e){return o(He,"step",e)},ga=He("type"),$o=He("value"),gi=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,P,_([o(Tt,_([xt(r)]),_([o(I,_([J("relative w-full")]),_([o(I,_([J("inline-block")]),_([vr(r)])),o(I,_([J("inline-block float-right")]),_([vr(pe(n))]))]))])),o(ba,_([ga("range"),o(se,"width","100%"),sa(r),Ct(r),fl(pe(a)),$l(pe(t)),$o(pe(n)),sl(pe(i)),vo(o(ae,io,o(ae,rr(42),c)))]),P)]))},Xd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Id=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,P,_([o(I,_([J("mb-2")]),_([o(Tt,_([xt(e)]),_([vr(e)]))])),o(ba,_([ga("checkbox"),sa(e),Ct(e),jd(vd(e)),bd(c)]),P)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return gi({cf:e,cr:i,cv:t,cz:fd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return gi({cf:e,cr:i,cv:t,cz:o(ae,Je,sd(e)),cV:1,c0:c});default:var c=r.a;return o(I,P,_([o(I,_([o(se,"margin-bottom","6px")]),_([o(Tt,_([xt(e)]),_([vr(e)]))])),o(ba,_([ga("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),sa(e),Ct(e),vo(function(l){return o($d,e,o(Xd,dd,Rd(l)))}),$o(_d(c))]),P)]))}}),Ud=function(e){return o(I,_([J("p-4 border-y-[0.5px] border-white20")]),_([o(I,_([J("text-lg pb-2")]),_([vr(e.ff)])),o(I,_([J("pl-2 pr-2")]),ud(o(yt,Id,e.av)))]))},Jd=function(e){return o(I,_([J("text-xs text-white60")]),o(ee,Ud,e))},Od=function(e){return o(I,_([J("absolute left-[104px] bottom-2 text-sm text-white40")]),_([vr("clock: "+o(el,3,Kr(e).db))]))},qd=function(e){e.a;var r=e.b.T;return o(ye,function(n){return Je(60/(Kr(e).db-n))},o(ye,o(ae,Uf,function(n){return n.db}),Fa(o(Hc,59,r))))},Yd=function(e){return o(I,_([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=qd(e);if(r.$===1)return _([vr("... Fps")]);var n=r.a;return _([vr(De(n)+" Fps")])}())},Zd=function(e){return{$:0,a:e}},Qd=function(e){var r=e.b.T;return kr(r)},Kd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return kr(r)+1+kr(n)},em=function(e){return o(ba,_([J("absolute w-full"),ga("range"),fl(De(0)),$l(De(Kd(e)-1)),$o(De(Qd(e))),sl(De(1)),vo(o(ae,io,o(ae,rr(42),o(ae,Je,Zd))))]),P)},hi={$:1},rm={$:3},nm={$:2},dl=function(e){return!e.b},_i=$(function(e,r){return o(co,_([J("px-2 bg-black40"),J(r),lo(e)]),_([vr("REC")]))}),wi=$(function(e,r){return o(co,_([J("absolute left-[60px] mx-1 px-1 bg-black40"),lo(r)]),_([o(I,_([J("w-4 h-6 fill-white80")]),_([mn(e)]))]))}),am=function(e){var r=e.a,n=e.b.ab;return o(I,_([J("py-1")]),_([function(){switch(r.$){case 0:return o(_i,hi,"text-red-500 font-bold");case 1:return o(_i,nm,"text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return dl(n)?o(I,P,P):o(wi,Ir.fo,rm);default:return o(wi,Ir.fn,hi)}}()]))},tm=function(e){return o(I,_([J("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([em(e),am(e),Yd(e),Od(e)]))},om=function(e){var r=e.a;return gr(r,ka)},im=$(function(e,r){var n=om(r.G)?o(I,P,P):o(I,_([J("absolute pointer-events-none w-8 h-8"),o(se,"left",pe(e.fp.fT+.5*e.cS.fR)+"px"),o(se,"top",pe(-e.fp.fX+.5*e.cS.eW)+"px")]),_([o(I,_([J(e.fp.e4?"fill-black80":"fill-white40")]),_([mn(Ir.fp)]))]));return o(I,P,_([n]))}),cm=$(function(e,r){var n=o(co,_([J(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),lo(Ks),cd("Distraction Free Mode")]),_([mn(Ir.f$)])),a=o(I,_([J("absolute w-8 bottom-12")]),_([o(mi,_([J("fill-twitterBlue40 hover:fill-twitterBlue"),pi("https://twitter.com/AzizErkalSelman"),bi("_blank")]),_([mn(Ir.fL)]))])),t=o(I,_([J("absolute w-8 bottom-2")]),_([o(mi,_([J("fill-githubCat40 hover:fill-githubCat"),pi("https://github.com/erkal/elm-3d-playground-exploration"),bi("_blank")]),_([mn(Ir.eQ)]))]));return r.aL?o(I,_([J("fixed w-10 h-10 p-1")]),_([n])):o(I,P,_([o(I,_([J("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(I,_([J("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",pe(e.cS.eW-80)+"px")]),_([o(da,ed,Jd(Kr(r.G).eA))])),o(I,_([J("absolute bottom-0 left-10 h-20"),o(se,"width",e.cS.fR>600?"600px":pe(e.cS.fR-40)+"px")]),_([o(da,rd,tm(r.G))])),o(im,e,r)]))}),lm=x(function(e,r,n){var a=Ys(n.G),t=Kr(n.G);return o(I,_([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(se,"width",pe(t.cS.fR)+"px"),o(se,"height",pe(t.cS.eW)+"px")]),_([o(I,_([J("fixed")]),_([o(da,Rc(Os),o(e,t,a))])),o(I,_([sa("gui")]),_([o(cm,t,n),o(da,Js,o(r,t,a))]))]))}),um=We(function(e,r,n,a,t,i){var c=$(function(u,v){return L(C(Hs,r,i,u,v),di)}),l=function(u){var v=o(Ec,n,u.e1);return L({aL:u.e1.cS.fR<500,G:o(Xs,v,a)},di)};return vs({e0:l,fG:Rc(Us(Zf)),fM:c,fP:o(lm,e,t)})}),vm=R(function(e,r,n,a){return _e(um,e,r,n,a,$(function(t,i){return o(I,P,P)}),x(function(t,i,c){return c}))}),$m=function(e){return{}},fm=x(function(e,r,n){return{av:n,e5:r,ff:e}}),ml=nr,sm=function(e){return p(zn,$(function(r,n){var a=r.a,t=r.b;return p(sn,a,t,n)}),ml,e)},dm=x(function(e,r,n){return p(fm,e,r,sm(n))}),Ia=dm,ar=x(function(e,r,n){var a=r.a,t=r.b;return L(e,o(Uc,L(a,t),n))}),yi=x(function(e,r,n){var a=r.a,t=r.b;return L(e,o(Jc,L(a,t),n))}),mm=_([p(Ia,"Camera",!0,_([p(ar,"camera x",L(0,16),8),p(ar,"camera y",L(0,10),0),p(ar,"camera z",L(0,16),6)])),p(Ia,"Parameters",!0,_([p(ar,"radius",L(0,6),1),p(yi,"number of cubes",L(1,100),19),p(yi,"number of waves",L(1,20),2),p(ar,"cube size",L(.1,4),1),p(ar,"cycle duration",L(1,10),5),p(ar,"wave height",L(.5,6),1.5)])),p(Ia,"Colors and light",!0,_([p(ar,"saturation",L(0,1),.8),p(ar,"lightness",L(0,1),.7)]))]),pm=$(function(e,r){return r}),fo=$(function(e,r){return{$:0,a:e,b:r}}),Fe=function(e){var r=e;return O(r)},Ua=$(function(e,r){var n=e,a=r;return U(a,n)>-1}),Ja=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),lr=$(function(e,r){var n=e,a=r;return a-n}),ur=function(e){return e},bm=ur({fT:-1,fX:0,c5:0}),gm=ur({fT:0,fX:-1,c5:0}),pl=ur({fT:0,fX:0,c5:-1}),bl=ur({fT:1,fX:0,c5:0}),so=ur({fT:0,fX:1,c5:0}),mo=ur({fT:0,fX:0,c5:1}),$r=function(e){return e},me=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),hm=We(function(e,r,n,a,t,i){var c=o(Ua,n,i)?mo:pl,l=o(Ua,r,t)?so:gm,u=o(Ua,e,a)?bl:bm,v=V(Fe(o(lr,e,a)),Fe(o(lr,r,t)),Fe(o(lr,n,i))),s=p(me,o(Ja,e,a),o(Ja,r,t),o(Ja,n,i)),d=$r({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:v}}),Cr=function(e){var r=e;return r.fT},Lr=function(e){var r=e;return r.fX},Pr=function(e){var r=e;return r.c5},_m=$(function(e,r){return _e(hm,Cr(e),Lr(e),Pr(e),Cr(r),Lr(r),Pr(r))}),Lt=x(function(e,r,n){return{fT:e,fX:r,c5:n}}),wm=$(function(e,r){var n=r/2;return o(fo,e,o(_m,p(Lt,-n,-n,-n),p(Lt,n,n,n)))}),Dr=Qu,Pt=function(e){return e*Dr/180},ym=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Da,e,r.av))}),xm=$(function(e,r){return o(rr,0,Fa(o(Ba,ym(e),r)))}),Sm=$(function(e,r){return o(xm,e,r.eA)}),ir=Sm,Tm=$(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Da,e,r.av))}),Cm=$(function(e,r){return o(rr,0,Fa(o(Ba,Tm(e),r)))}),Lm=$(function(e,r){return o(Cm,e,r.eA)}),xi=Lm,po=function(e){return{$:5,a:e}},Pm=function(e){return po(e)},zm=R(function(e,r,n,a){var t=V(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(Aa,f,m,d,a)}),km=x(function(e,r,n){return C(zm,e,r,n,1)}),zt=function(e){return{$:0,a:e}},gl=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),hl=x(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),Oa=function(e){return p(hl,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},An=B$,Mm=function(e){var r=uo(e),n=r.cM,a=r.cc,t=r.b5;return p(An,Oa(n),Oa(a),Oa(t))},Dm=function(e){return p(gl,0,zt(Mm(e)),zt(0))},_l=$(function(e,r){return{$:2,a:e,b:r}}),wl=$(function(e,r){return{$:4,a:e,b:r}}),yl=$(function(e,r){return{$:3,a:e,b:r}}),xl=$(function(e,r){return{$:1,a:e,b:r}}),Am=x(function(e,r,n){return{fT:e,fX:r,c5:n}}),Bm=function(e){var r=e;return r},bo=function(e){var r=e;return Bm(r.er)},go=function(e){var r=e;return r.aK},en=function(e){var r=e;return r.cA},Bn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),Vr=function(e){var r=e;return r.c3},Rr=function(e){var r=e;return r.c4},Er=function(e){var r=e;return r.c6},Fm=$(function(e,r){return $r({cA:o(Bn,e,en(r)),c3:Vr(r),c4:Rr(r),c6:Er(r)})}),Vm=$(function(e,r){return{er:o(Fm,e,bo(r)),aK:go(r)}}),ho=$(function(e,r){return{eG:r,cA:e}}),Rm=$(function(e,r){var n=r;return o(ho,o(Bn,e,n.cA),n.eG)}),Em=$(function(e,r){var n=r;return{k:o(Rm,e,n.k),e9:n.e9,fr:n.fr}}),_o=function(e){var r=e;return r},jm=function(e){return e},Sl=$(function(e,r){var n=_o(r),a=n.a,t=n.b;return jm(L(e(a),e(t)))}),Nm=$(function(e,r){return o(Sl,Bn(e),r)}),wo=function(e){var r=e;return r.ey},yo=function(e){var r=e;return r.fr},Tl=$(function(e,r){return{ey:r,fr:Fe(e)}}),Gm=$(function(e,r){return o(Tl,yo(r),o(Bn,e,wo(r)))}),Cl=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),Wm=$(function(e,r){return o(Cl,Bn(e),r)}),xo=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Am,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(fo,s,o(Vm,i,c));case 1:var s=r.a,l=r.b;return o(xl,s,o(Wm,i,l));case 3:var s=r.a,u=r.b;return o(yl,s,o(Gm,i,u));case 2:var s=r.a,v=r.b;return o(_l,s,o(Em,i,v));case 4:var s=r.a,d=r.b;return o(wl,s,o(Nm,i,d));default:var m=r.a;return po(o(ee,xo(V(n,a,t)),m))}}),Hm=function(e){return xo(V(0,e,0))},Xm=function(e){return xo(V(0,0,e))},xn=function(e){return e},Ar=Ku,qr=ev,Qn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=qr(c),v=a.eG,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,y=g*g,h=1-2*(f+y),T=s.c5*u,k=l*T,G=2*(w-k),j=2*(w+k),E=d*T,N=2*(E+b),W=2*(E-b),B=g*T,Y=2*(B-m),Q=2*(B+m),oe=T*T,ve=1-2*(y+oe),te=1-2*(f+oe);return{fT:ve*i.fT+G*i.fX+N*i.c5,fX:j*i.fT+te*i.fX+Y*i.c5,c5:W*i.fT+Q*i.fX+h*i.c5}}),Fn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=qr(c),v=a.cA,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,y=l*w,h=w*w,T=b.fX*u,k=l*T,G=w*T,j=T*T,E=1-2*(h+j),N=b.c5*u,W=l*N,B=2*(G-W),Y=2*(G+W),Q=w*N,oe=2*(Q+k),ve=2*(Q-k),te=T*N,de=2*(te-y),ze=2*(te+y),Se=N*N,dr=1-2*(j+Se),mr=1-2*(h+Se);return{fT:s.fT+dr*d+B*m+oe*f,fX:s.fX+Y*d+mr*m+de*f,c5:s.c5+ve*d+ze*m+E*f}}),Im=x(function(e,r,n){return $r({cA:p(Fn,e,r,en(n)),c3:p(Qn,e,r,Vr(n)),c4:p(Qn,e,r,Rr(n)),c6:p(Qn,e,r,Er(n))})}),Um=x(function(e,r,n){return{er:p(Im,e,r,bo(n)),aK:go(n)}}),Jm=$(function(e,r){var n=o(Fn,e,r),a=o(Qn,e,r);return function(t){var i=t;return o(ho,n(i.cA),a(i.eG))}}),Om=x(function(e,r,n){var a=n;return{k:p(Jm,e,r,a.k),e9:a.e9,fr:a.fr}}),qm=x(function(e,r,n){return o(Sl,o(Fn,e,r),n)}),Ym=x(function(e,r,n){return o(Tl,yo(n),p(Fn,e,r,wo(n)))}),Zm=x(function(e,r,n){return o(Cl,o(Fn,e,r),n)}),Ll=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(fo,l,p(Um,e,r,a));case 1:var l=n.a,t=n.b;return o(xl,l,p(Zm,e,r,t));case 3:var l=n.a,i=n.b;return o(yl,l,p(Ym,e,r,i));case 2:var l=n.a,c=n.b;return o(_l,l,p(Om,e,r,c));case 4:var l=n.a,u=n.b;return o(wl,l,p(qm,e,r,u));default:var v=n.a;return po(o(ee,o(Ll,e,r),v))}}),Vn={fT:0,fX:0,c5:0},So=so,Qm=o(ho,Vn,So),Km=$(function(e,r){return p(Ll,Qm,xn(e),r)}),e0=$(function(e,r){return(r-Fc(r/e)*e)/e}),r0=function(e){return 2*Dr*e},n0=R(function(e,r,n,a){return e+(r-e)*(1+Ar(r0(o(e0,n,a))))/2}),a0=function(e){var r=o(ir,"wave height",e),n=o(xi,"number of waves",e),a=o(xi,"number of cubes",e),t=o(ir,"cycle duration",e),i=function(c){var l=c/a,u=n*t*l;return o(Km,Pt(360)*l,o(Hm,C(n0,-r,r,t,e.db+u),o(Xm,o(ir,"radius",e),o(wm,Dm(p(km,l,o(ir,"saturation",e),o(ir,"lightness",e))),o(ir,"cube size",e)))))};return Pm(o(ee,i,o(Mr,0,a-1)))},vn=function(e){return xn(Dr*(e/180))},pr=cv,t0=$(function(e,r){var n=e,a=r,t=a.c5-n.c5,i=a.fX-n.fX,c=a.fT-n.fT,l=o(Pe,O(c),o(Pe,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=pr(s*s+v*v+u*u);return re({fT:s/d,fX:v/d,c5:u/d})}else return q}),qa=function(e){return e},To=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),Kn=function(e){var r=e,n=o(Pe,O(r.fT),o(Pe,O(r.fX),O(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c5:a/c})}else return q},ha=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),o0=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c5*n.c5}),Pl=$(function(e,r){var n=e,a=r;return U(a,n)>0}),i0=$(function(e,r){var n=e,a=r;return U(a,n)<0}),c0=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),l0=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c5*n.c5;return{fT:n.fT*t,fX:n.fX*t,c5:n.c5*t}}),u0=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Ue=0,zl={fT:0,fX:0,c5:0},v0=x(function(e,r,n){return o(St,function(a){var t=o(c0,o(l0,a,r),r);return o(St,function(i){var c=o(To,r,e),l=o(o0,n,c),u=o(Pl,Ue,l)?c:o(i0,Ue,l)?u0(c):zl;return o(ye,function(v){return V(a,i,v)},Kn(u))},Kn(t))},Kn(e))}),$0=function(e){var r=e,n=O(r.c5),a=O(r.fX),t=O(r.fT);if(U(t,a)<1)if(U(t,n)<1){var i=pr(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=pr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(U(a,n)<1){var i=pr(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=pr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},Co=function(e){var r=$0(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return L(r,c)},Xr=function(e){var r=e;return r},f0=$(function(e,r){var n=Co(e),a=n.a,t=n.b;return $r({cA:r,c3:a,c4:t,c6:e})}),s0=function(e){var r=o(ha,e.aR,e.dj),n=Xr(e.ei),a=o(To,r,n),t=p(v0,r,n,a);if(t.$){var v=Kn(r);if(v.$){var d=Co(e.ei),m=d.a,f=d.b;return $r({cA:e.dj,c3:f,c4:e.ei,c6:m})}else{var s=v.a;return o(f0,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return $r({cA:e.dj,c3:u,c4:l,c6:c})}},d0=function(e){return{$:0,a:e}},ea=function(e){var r=e;return .5*r},m0=rv,p0=function(e){var r=e;return m0(r)},b0=function(e){var r=ea(Fe(e.ej)),n=p0(r);return{cL:d0(n),c1:e.c1}},g0=function(e){var r=e.aR,n=e.dj,a=e.ei;return b0({ej:vn(40),c1:s0({dj:qa(n),aR:qa(r),ei:o(rr,so,o(t0,Vn,qa(a)))})})},h0=function(e){return e},zr=function(e){return e},_0=function(e){return zr(.01*e)},Si=function(e){return e},w0=function(e){return e},y0=function(e){return{$:0,a:e}},x0=y0,S0={$:3},T0=S0,C0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),L0=C0,P0=$(function(e,r){return r.b?p(sr,A,r,e):e}),Ne=function(e){return p(sr,P0,P,e)},Lo=$(function(e,r){return Ne(o(ee,e,r))}),z0=function(e){return{$:1,a:e}},k0=z0,M0=function(e){return o(Pn,"height",De(e))},D0=function(e){return a$(c$(e))},A0=D0,B0=function(e){return{$:2,a:e}},F0=B0,V0=function(e){return o(xr,"",e)},R0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Je(l*1e3)/1e3},c=function(l){return Je(l*1e4)/100};return V0(_(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},E0=$(function(e,r){switch(r.$){case 0:return o(xf,e,r);case 1:return o(Sf,e,r);case 2:return o(Tf,e,r);case 3:return o(Cf,e,r);case 4:return o(Lf,e,r);default:return o(Pf,e,r)}}),j0=$(function(e,r){switch(r.$){case 0:return o(Q$,e,r);case 1:return o(K$,e,r);case 2:return o(ef,e,r);case 3:return o(rf,e,r);case 4:return o(nf,e,r);case 5:return o(af,e,r);case 6:return o(tf,e,r);case 7:return o(of,e,r);default:return cf(e)}}),N0=x(function(e,r,n){return p(yf,e,r,n)}),Ti=function(e){var r=e;return r},rn=N$,Ya=C(rn,1,1,1,1),Oe=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),G0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),W0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(G0,n*a/t,n,n*(1-a-t)/t)}),H0=function(e){var r=e.a,n=e.b,a=e.c;return p(An,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Po=$(function(e,r){return H0(o(W0,e,r))}),kl=$(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ze=U$,X0=function(e){return Ze({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Za=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(rn,a.bX,a.bX,a.bX,i);return _e(t,e,c,X0(a),a.dp,r,n)}),Ml=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(kl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(Za,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(A,S(Za,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var h=t.a,T=o(A,S(Za,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(zn,C(Ml,e,r,n,a),i,k)}}),I0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Dl=I0,zo=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),U0=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,518,r,n,a)},J0=$(function(e,r){return{$:6,a:e,b:r}}),O0=J0,Al=_([U0({V:1,W:0,Z:!1}),C(Dl,!1,!1,!1,!1),o(O0,0,1)]),Yr=519,ko=8,Bl=15,Ur=7681,q0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=Z$,Y0=$(function(e,r){return{$:0,a:e,b:r}}),Z0=Y0({df:1,$7:0,dV:5}),Me=D$,Q0=Z0(_([{bT:o(Me,-1,-1)},{bT:o(Me,1,-1)},{bT:o(Me,-1,1)},{bT:o(Me,1,1)}])),K0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},ep=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Mo=x(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(ep,a,t,i)))}),Do=function(e){return p(Mo,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Ao=function(e){return S(ne,_([Do(e),C(Dl,!1,!1,!1,!1)]),K0,q0,Q0,{})},rp=Ao({a8:Ur,co:0,cN:ko,bl:Yr,c2:Bl,bt:Ur,bu:Ur}),np=516,Ci=5386,xe=7680,ap=function(e){return o(Dn,2,e+4)},Fl=function(e){return Ao({a8:xe,co:Bl,cN:ko,bl:np,c2:ap(e),bt:Ci,bu:Ci})},tp=x(function(e,r,n){return Ne(_([p(Oe,e,n,Al),_([Fl(r),rp])]))}),op=$(function(e,r){return Ne(o(zc,tp(e),r))}),ip=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,513,r,n,a)},cp=ip({V:1,W:0,Z:!0}),lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},up=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return lp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},vp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Li=$(function(e,r){var n=e,a=r;return p(vp,32774,n,a)}),$p=1,Pi=771,fp=770,Bo=up({bv:0,aH:o(Li,$p,Pi),by:0,bA:o(Li,fp,Pi),bF:0,bV:0}),jr=_([cp,Bo]),sp=function(e){var r=e;return r.dO},dp=function(e){var r=e;return r.dP},Vl=function(e){var r=e;return r.dQ},mp=function(e){var r=e;return r.dR},pp=function(e){var r=e;return r.dS},Rl=function(e){var r=e;return r.dT},El=function(e){return V(o(lr,mp(e),sp(e)),o(lr,pp(e),dp(e)),o(lr,Rl(e),Vl(e)))},zi=function(e){var r=e;return en(r)},bp=function(e){return e},gp=function(e){return $r({cA:bp({fT:e.H,fX:e.I,c5:e.J}),c3:ur({fT:e.q,fX:e.r,c5:e.s}),c4:ur({fT:e.t,fX:e.u,c5:e.v}),c6:ur({fT:e.w,fX:e.x,c5:e.y})})},Qa=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c5*v.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),jl=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,v=n.c6,s=v,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),Nl=$(function(e,r){return{cA:o(jl,e,en(r)),c3:o(Qa,e,Vr(r)),c4:o(Qa,e,Rr(r)),c6:o(Qa,e,Er(r))}}),_a=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Pe,n,a)}),ra=$(function(e,r){return U(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ra,n,a)}),hp=$(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},_p=function(e){var r=e;return V(r.fT,r.fX,r.c5)},pn=$(function(e,r){var n=e,a=r;return a+n}),wp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ea(Fe(a)),c=ea(Fe(n)),l=ea(Fe(t)),u=_p(r),v=u.a,s=u.b,d=u.c;return{dO:o(pn,c,v),dP:o(pn,i,s),dQ:o(pn,l,d),dR:o(lr,c,v),dS:o(lr,i,s),dT:o(lr,l,d)}}),ki=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fX*r,s=t.fT*r,d=Ge(Er(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c5),f=Ge(Rr(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c5),b=Ge(Vr(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c5),y=o(wp,V(w,g,m),o(jl,e,p(Lt,s,v,u)));if(a.$)return re(y);var h=a.a;return re(o(hp,h,y))}),kt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(ki,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(ki,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(kt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Nl,gp(v),e),m=r*v.bX,f=e,g=r,b=C(kt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),nn=F$,an=V$,tn=R$,Gl=function(e){return{$:4,a:e}},yp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Rn=function(e){return Gl(o(yp,e,P))},xp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Sp=function(e){var r=e;return r},Mi=Ao({a8:Ur,co:0,cN:ko,bl:Yr,c2:255,bt:Ur,bu:Ur}),Tp=function(e){var r=e,n=o(Pe,O(r.fT),o(Pe,O(r.fX),O(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=pr(i*i+t*t+a*a);return c*n}else return Ue},Te={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Re=$(function(e,r){var n=e,a=r;return Ze({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),$n=L({bd:o(Re,Te,Te),bK:o(Re,Te,Te),bL:o(Re,Te,Te),bM:o(Re,Te,Te)},C(rn,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Di=function(e){var r=e;return-r},Wl=514,Hl=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,515,r,n,a)},Xl=240,Cp=_([Hl({V:1,W:0,Z:!0}),Do({a8:xe,co:Xl,cN:0,bl:Wl,c2:0,bt:xe,bu:xe}),Bo]),Lp=$(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=Fe(a),l=c,u=Fe(t),v=u,s=n.cL;if(s.$){var m=s.a;return gt(v)?Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return gt(v)?Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Hn=$(function(e,r){return(1&e>>r)===1?0:1}),Pp=function(e){return _([Hl({V:1,W:0,Z:!0}),Do({a8:xe,co:Xl,cN:e,bl:Wl,c2:0,bt:xe,bu:xe}),Bo])},zp=x(function(e,r,n){return Ne(o(ee,function(a){var t=a<<4,i=C(rn,o(Hn,a,0),o(Hn,a,1),o(Hn,a,2),o(Hn,a,3));return p(Oe,e,L(r,i),Pp(t))},o(Mr,1,o(Dn,2,n)-1)))}),Sn=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},Jr=function(e){var r=e;return r},kp=J$,Ai=function(e){var r=e;return Sn(Er(r))},Il=bl,Ul=mo,Mp={cA:Vn,c3:Il,c4:So,c6:Ul},Va=function(e){var r=e;return r},Dp=function(e){var r=Va(en(e)),n=Ge(Er(e)),a=Ge(Rr(e)),t=Ge(Vr(e));return Ze({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},Ap=$(function(e,r){var n=r;return Dp(o(Nl,n,e))}),Bp=function(e){return o(Ap,Mp,e)},Fp=function(e){var r=e;return r.c1},Vp=function(e){var r=e;return Vr(r)},Rp=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),Ep=function(e){var r=e;return Rr(r)},jp=function(e){var r=Fp(e.ev),n=$r({cA:zi(r),c3:Vp(r),c4:Ep(r),c6:Sn(Ai(r))}),a=Rn(e.aP),t=a,i=C(kt,n,1,q,_([t]));if(i.$===1)return P;var c=i.a,l=Bp(r),u=o(ie,.99,o(ce,Fe(e.aJ),Di(Vl(c)))),v=El(c),s=v.a,d=v.b,m=v.c,f=Tp(p(Rp,s,d,m)),g=o(ie,1.01,o(pn,f,Di(Rl(c)))),b=o(Lp,e.ev,{eq:e.eq,eP:g,fg:u}),w=kp(b).dM,y=w?Ge(Sn(Ai(r))):Jr(zi(r)),h=function(){var te=e.bZ;switch(te.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var de=te.a;return L(3,de);case 4:var de=te.a;return L(4,de);default:return L(5,0)}}(),T=h.a,k=h.b,G=e.bD,j=G,E=o(Po,j,e.b$),N=E,W=Ze({dx:0,dy:y.fT,dz:nn(N),dA:e.ec,dB:0,dC:y.fX,dD:an(N),dE:Sp(f),dF:0,dG:y.c5,dH:tn(N),dI:T,dJ:0,dK:w,dL:0,dM:k}),B=_e(Ml,W,l,b,xp,t,{M:P,U:P,fz:P}),Y=e.bJ;switch(Y.$){case 0:var Q=Y.a;return Ne(_([p(Oe,B.M,L(Q,Ya),jr),p(Oe,B.U,$n,jr)]));case 1:var Q=Y.a;return Ne(_([p(Oe,B.M,$n,jr),_([Mi]),p(Oe,B.fz,Q.bd,Al),_([Fl(0)]),p(Oe,B.M,L(Q,Ya),Cp),p(Oe,B.U,$n,jr)]));default:var oe=Y.a,ve=Y.b;return Ne(_([p(Oe,B.M,L(ve,Ya),jr),_([Mi]),o(op,B.fz,oe),p(zp,B.M,ve,kr(oe)),p(Oe,B.U,$n,jr)]))}},Np=function(e){return o(Pn,"width",De(e))},Gp=$(function(e,r){var n=_([k0(1),F0(0),x0(!0),C(L0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(A,T0,n),"1",1);default:var k=T.a;return V(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ti(v),d=o(se,"height",De(s)+"px"),m=Ti(u),f=m/s,g=o(Lo,function(T){return jp({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(se,"width",De(m)+"px"),w=e.aI,y=w,h=R0(y);return p(A0,"div",_([o(se,"padding","0px"),b,d]),_([L(i,p(N0,t,_([Np(Je(m*c)),M0(Je(s*c)),b,d,o(se,"display","block"),o(se,"background-color",h)]),g))]))}),Wp=function(e){return o(Gp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Jl=function(e){return e},Bi=Jl({fT:.31271,fX:.32902}),Hp=$(function(e,r){var n=e,a=Ge(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(Po,r.cd,r.b6),u=l;return{by:tn(u),ex:n,bF:an(u),cJ:0,bV:nn(u),cZ:1,fT:-t,fX:-i,c5:-c}}),Xp=function(e){return e},Ip=function(e){return Xp(1.2*o(Dn,2,e))},Ka=function(e){return e},Up={$:0},Jp=Up,Ol=function(e){return e},Fi=function(e){var r=e;return r},Op=function(e){e:for(;;){if(gr(e.e2,Ue)&&gr(e.e3,Ue))return Te;if(o(Pl,Fe(e.e2),Fe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Sn(e.ei)};e=r;continue e}else{var n=O(Fi(e.e3)/Dr),a=O(Fi(e.e2)/Dr),t=Ge(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(Po,Ol(1),e.b6),v=u;return{by:a*tn(v),ex:!1,bF:a*an(v),cJ:n/a,bV:a*nn(v),cZ:3,fT:i,fX:c,c5:l}}}},Vi=function(e){return Op({b6:e.b6,e2:e.cd,e3:Ue,ei:e.ei})},qp=function(e){var r=e;return r},ql=function(e){var r=p(hl,1667,25e3,qp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Jl({fT:n,fX:a})},Yl=function(e){return e},Yp=ql(Yl(12e3)),Zp=ql(Yl(5600)),Qp=function(e){return{$:2,a:e}},Kp=function(e){return Qp(e)},e3=$(function(e,r){return{$:2,a:e,b:r}}),Zl=function(e){return{$:0,a:e}},Xn=function(e){var r=e;return r},r3=function(e){var r=e;return r.ex},n3=Zl($n.a),a3=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?L(o(A,a,i),c):L(i,o(A,a,c))});return p(sr,n,L(P,P),r)}),t3=function(e){var r=e;return Ze({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},o3=K(function(e,r,n,a,t,i,c,l){var u=o(a3,r3,_([Xn(e),Xn(r),Xn(n),Xn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,h=y.a;return o(e3,o(ee,t3,v),{bd:o(Re,m,g),bK:o(Re,w,h),bL:o(Re,t,i),bM:o(Re,c,l)})}else return n3}else return Zl({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),i3=x(function(e,r,n){return Ta(o3,e,r,n,Te,Te,Te,Te,Te)}),c3=function(e){var r=o(Hp,w0(e.fz),{b6:Zp,eG:e.fI,cd:Ka(8e4)}),n=Vi({b6:Yp,cd:Ka(2e4),ei:e.ei}),a=Vi({b6:Bi,cd:Ka(15e3),ei:Sn(e.ei)}),t=p(i3,r,n,a);return Wp({b0:Kp(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Ip(15),bJ:t,bZ:Jp,b$:Bi})},Ql=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),l3=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Kl=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),eu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),u3=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),v3=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),$3=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Fo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C($3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Ql,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(l3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(Kl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(v3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(eu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(u3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Vo={$:0},f3=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=_a(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),y=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),s3=x(function(e,r,n){var a=_a(e(r));return Ta(f3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),et=$(function(e,r){var n=e,a=r;return U(a,n)<1}),ru=function(e){return o(et,e.dO,e.dR)&&o(et,e.dP,e.dS)&&o(et,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Tn=function(e){var r=e;return r},nu=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Cr(n),c=Lr(n),l=Pr(n),u=Cr(a),v=Lr(a),s=Pr(a),d=Cr(t),m=Lr(t),f=Pr(t);return ru({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,v,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,v,m)),dT:o(fe,l,o(fe,s,f))})},au=E$,Ce=function(e){return au(Va(e))},tu=function(e){var r=e;return r},Ra=function(e){return au(tu(e))},d3=$(function(e,r){var n=e,a=r,t=o(Pe,O(a.fT),o(Pe,O(a.fX),O(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=pr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return zl}),m3=d3(Ol(1)),ou=x(function(e,r,n){var a=o(ha,r,n),t=o(ha,e,r);return m3(o(To,a,t))}),p3=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Ra(p(ou,n,a,t));return V({o:i,bT:Ce(n)},{o:i,bT:Ce(a)},{o:i,bT:Ce(t)})},b3=$(function(e,r){return{$:2,a:e,b:r}}),iu=b3({df:3,$7:0,dV:4}),g3=function(e){if(e.b){var r=e.a,n=e.b,a=iu(o(ee,p3,e)),t=p(s3,nu,r,n);return C(Ql,t,e,a,0)}else return Vo},Ve=x(function(e,r,n){return V(e,r,n)}),cu=function(){var e=zr(1),r=zr(1),n=zr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),v=o(ie,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(ie,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Fo(g3(_([p(Ve,c,g,f),p(Ve,c,s,g),p(Ve,u,b,w),p(Ve,u,w,d),p(Ve,f,g,w),p(Ve,f,w,b),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,b),p(Ve,c,b,u),p(Ve,s,w,g),p(Ve,s,d,w)])))}(),In={$:0},h3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),_3=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Ra(p(ou,u,l,c)),s={o:v,bT:Ce(u)},d={o:v,bT:Ce(l)},m={o:v,bT:Ce(c)};return o(A,s,o(A,d,o(A,m,n)))}),Ro=function(e){var r=e;return r.D},w3=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),Mt=4294967295>>>32-_n,Dt=Xu,y3=x(function(e,r,n){e:for(;;){var a=Mt&r>>>e,t=o(Dt,a,n);if(t.$){var v=t.a;return o(Dt,Mt&r,v)}else{var i=t.a,c=e-_n,l=r,u=i;e=c,r=l,n=u;continue e}}}),x3=function(e){return e>>>5<<5},S3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?q:U(e,x3(n))>-1?re(o(Dt,Mt&e,i)):re(p(y3,a,e,t))}),Eo=function(e){var r=e;return r.ah},rt=$(function(e,r){return o(S3,e,Eo(r))}),T3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(w3,x(function(c,l,u){return V(c,l,u)}),o(rt,a,e),o(rt,t,e),o(rt,i,e))};return o(Ba,r,Ro(e))},C3=x(function(e,r,n){e:for(;;){var a=o(ro,Be,e),t=a.a,i=a.b;if(U(pt(t),Be)<0)return o(Vc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Bc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),jo=function(e){return e.b?p(C3,e,P,0):Dc},L3=x(function(e,r,n){return e(r(n))}),P3=$(function(e,r){return!o(Oc,o(L3,$s,e),r)}),z3=$(function(e,r){return p(sr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),k3=function(e){var r=e.a;return r},lu=$(function(e,r){var n=k3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(P3,a,r)?{D:r,ah:e}:{D:o(z3,a,r),ah:e}}),M3=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=M3({df:1,$7:3,dV:4}),na=$(function(e,r){var n=Jr(r),a=Jr(e);return L(V(a.fT,a.fX,a.c5),V(n.fT,n.fX,n.c5))}),Ri=p(An,0,0,0),nt=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Da,o(na,e,r),t);if(v.$){var d={o:Ri,bT:Ce(r)},m={o:Ri,bT:Ce(e)},f=u+1,g=u;return V(o(A,V(n,g,f),o(A,V(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return V(o(A,V(n,s,a),c),l,u)}}),D3=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,h=v,T=a+3,k=_e(nt,s,m,f,b,r,_e(nt,d,s,g,f,r,_e(nt,m,d,b,g,r,t)));e=w,r=y,n=h,a=T,t=k;continue e}else{var G=t,j=G.a,E=G.b;return L(j,Ae(E))}}),A3=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(sn,o(na,m,s),f,p(sn,o(na,s,d),g,p(sn,o(na,d,m),b,t))),y=o(A,V(b,g,f),a),h=e,T=v,k=n+3,G=y,j=w;e=h,r=T,n=k,a=G,t=j;continue e}else return V(a,t,n)}),yr=x(function(e,r,n){var a=T3(n),t=p(sr,_3(r),P,a),i=S(A3,r,a,0,P,ml),c=i.a,l=i.b,u=i.c,v=S(D3,r,l,a,0,V(c,P,u)),s=v.a,d=v.b,m=dl(d)?t:le(t,d);return p(h3,e,o(lu,jo(m),s),o(En,m,s))}),At=function(e){return{D:o(ee,function(r){return V(3*r,3*r+1,3*r+2)},o(Mr,0,kr(e)-1)),ah:jo(Ne(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},uu=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(yr,a,Tr,At(n));case 2:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(yr,a,Tr,At(n));case 3:var a=e.a,t=e.b;return p(yr,a,Tr,t);case 4:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 8:return In;case 9:return In;default:return In}},Ei=uu(cu),vu={$:0},z=vu,be=$(function(e,r){return{$:1,a:e,b:r}}),B3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},F3=1029,V3=function(e){return{$:5,a:e}},$u=function(e){var r=e;return V3(r)},R3=$u(F3),E3=1028,j3=$u(E3),Le=x(function(e,r,n){return r===1?e?o(A,R3,n):o(A,j3,n):n}),fu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},at=R(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(Le,l,a,d),fu,B3,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),No={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},su={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=R(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){return S(ne,p(Le,l,a,d),su,No,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),du=$(function(e,r){return{$:3,a:e,b:r}}),N3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},mu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},G3=R(function(e,r,n,a){return o(du,n,K(function(t,i,c,l,u,v,s,d){return S(ne,d,mu,N3,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Go={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},jn=function(e){var r=e;return r},Ea=j$,or=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(Le,u,t,m),su,Go,a,{aN:o(Ea,jn(r),e),b:l,c,d:s,e:i,f:v})}))}),W3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},H3=ge(function(e,r,n,a,t){return o(du,a,K(function(i,c,l,u,v,s,d,m){return S(ne,m,mu,W3,t,{aN:o(Ea,jn(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},bu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Un=R(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Le,l,a,d),bu,pu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),gu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},hu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},X3=We(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Le,v,i,f),hu,gu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),_u={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},I3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,K(function(d,m,f,g,b,w,y,h){var T=y.a,k=y.b;return S(ne,p(Le,g,s,h),hu,_u,v,{b4:e,b7:r,b8:i,b9:a,P:k,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},wu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Jn=We(function(e,r,n,a,t,i){return o(be,a,K(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Le,v,i,f),bu,wu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),U3=function(e){return{$:0,a:e}},ji=$(function(e,r){return{$:1,a:e,b:r}}),bn=$(function(e,r){if(r.$){var n=r.a.C;return L(n,1)}else return r.a,L(e,0)}),J3=function(e){return C(rn,nn(e),an(e),tn(e),1)},Wo=C(rn,0,0,0,0),aa=$(function(e,r){if(r.$){var a=r.a.C;return L(a,Wo)}else{var n=r.a;return L(e,J3(n))}}),yu=$(function(e,r){var n=L(e,r);if(n.a.$){var t=n.a.a.C;return o(ji,L(t,Wo),o(bn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(ji,o(aa,t,e),o(bn,t,r))}else{var a=n.a.a;return n.b.a,U3(a)}}),O3=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),On=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),q3=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Y3=function(e){return o(Me,e,1)},Bt=o(Me,0,0),Nr=$(function(e,r){if(r.$){var a=r.a.C;return L(a,Bt)}else{var n=r.a;return L(e,Y3(n))}}),xu=R(function(e,r,n,a){var t=C(q3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(On,L(u,Wo),o(Nr,u,r),o(Nr,u,n),o(bn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(On,o(aa,u,e),L(u,Bt),o(Nr,u,n),o(bn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(On,o(aa,u,e),o(Nr,u,r),L(u,Bt),o(bn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(On,o(aa,u,e),o(Nr,u,r),o(Nr,u,n),L(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(O3,i,c,l)}}),Z3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},tt=ge(function(e,r,n,a,t){return o(be,n,K(function(i,c,l,u,v,s,d,m){return S(ne,p(Le,u,t,m),fu,Z3,a,{b1:jn(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),Su={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Q3=R(function(e,r,n,a){return o(be,r,K(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Le,l,a,d),Su,gu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),K3=Rt(function(e,r,n,a,t,i,c,l,u){return o(be,c,K(function(v,s,d,m,f,g,b,w){var y=b.a,h=b.b;return S(ne,p(Le,m,u,w),Su,_u,l,{b4:e,b7:r,b8:i,b9:a,P:h,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),Cn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),eb=function(e){var r=e;return p(Cn,r.dR,r.dO,.5)},rb=function(e){var r=e;return p(Cn,r.dS,r.dP,.5)},nb=function(e){var r=e;return p(Cn,r.dT,r.dQ,.5)},ab=function(e){return p(me,eb(e),rb(e),nb(e))},H=function(e){var r=El(e),n=r.a,a=r.b,t=r.c;return{ey:Va(ab(e)),eS:n/2,eT:a/2,eU:t/2}},Ho=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(at,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(at,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(at,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(G3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(tt,l,v,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,v,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,v,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(H3,u,v,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(yu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,h=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Q3,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(X3,b,y,h,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(Un,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(Un,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Un,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Un,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,k=e.c,G=e.d,j=e.e,E=C(xu,T,k,G,j);if(E.$){var Y=E.a,Q=Y.a,oe=Y.b,ve=E.b,te=ve.a,de=ve.b,ze=E.c,Se=ze.a,dr=ze.b,mr=E.d,y=mr.a,h=mr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return ju(K3,Q,oe,te,de,Se,dr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return I3(Q)(oe)(te)(de)(Se)(dr)(y)(h)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,W=E.b,B=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(Jn,N,W,B,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(Jn,N,W,B,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(Jn,N,W,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(Jn,N,W,B,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),ot=function(e){var r=e;return r.fT},it=function(e){var r=e;return r.fX},ct=function(e){var r=e;return r.c5},tb=function(e){var r=e,n=ct(r.c6),a=it(r.c6),t=ot(r.c6),i=ct(r.c4),c=it(r.c4),l=ot(r.c4),u=ct(r.c3),v=it(r.c3),s=ot(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},ob=function(e){var r=Va(en(e)),n=Ge(Er(e)),a=Ge(Rr(e)),t=Ge(Vr(e));return{dp:tb(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Gr=$(function(e,r){return{$:5,a:e,b:r}}),Tu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(kl,a,e);return o(Gr,i,t);case 1:return o(Gr,e,n);case 3:return o(Gr,e,n);case 2:return o(Gr,e,n);default:return o(Gr,e,n)}}),Cu=$(function(e,r){return o(Tu,ob(e),r)}),ja=function(e){return{$:2,a:e}},ib=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),cb=W$,lb=G$,Ni=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=lb(a),g=f.fT,b=f.fX,w=f.c5,y=f.em,h=cb({em:y,fT:g*s,fX:b*d,c5:w*m});return Ta(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Ft=$(function(e,r){switch(r.$){case 0:return vu;case 5:var n=r.a,a=r.b;return o(Gr,n,o(Ft,e,a));case 1:var t=r.a,i=r.b;return o(be,o(ib,e,t),o(Ni,e,i));case 3:return r;case 2:var i=r.a;return ja(o(Ni,e,i));default:var c=r.a;return Gl(o(ee,Ft(e),c))}}),Xo=$(function(e,r){var n=r;return o(Ft,e,n)}),Io={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Lu=7683,Pu=7682,ub=p(Mo,{co:0,cN:0,c2:15},{a8:xe,bl:Yr,bt:xe,bu:Lu},{a8:xe,bl:Yr,bt:xe,bu:Pu}),vb=p(Mo,{co:0,cN:0,c2:15},{a8:xe,bl:Yr,bt:xe,bu:Pu},{a8:xe,bl:Yr,bt:xe,bu:Lu}),Uo=$(function(e,r){return e?o(A,vb,r):o(A,ub,r)}),$b={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},fb=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,v){return S(ne,o(Uo,i,v),$b,Io,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},wa=function(e){var r=fb(e);if(r.$)return z;var n=r.a;return ja(n)},sb=R(function(e,r,n,a){var t=o(Ho,n,cu),i=function(){var s=L(e,r);return s.a?s.b?Rn(_([t,wa(Ei)])):t:s.b?wa(Ei):z}(),c=go(a),l=c.a,u=c.b,v=c.c;return o(Cu,bo(a),o(Xo,V(l,u,v),i))}),db=$(function(e,r){return C(sb,!0,!0,e,r)}),zu=$(function(e,r){return{$:0,a:e,b:r}}),mb=function(e){var r=uo(e),n=r.cM,a=r.cc,t=r.b5;return p(An,n,a,t)},pb=function(e){return o(zu,0,zt(mb(e)))},bb=function(e){var r=e;return r.k},gn=function(e){var r=e;return Ar(r)},gb=$(function(e,r){var n=r;return n/e}),Gi=function(e){var r=e;return{fT:Ar(r),fX:qr(r)}},hb=$(function(e,r){var n=e.bT,a=e.o;return o(A,{o:Ra(a),bT:Ce(n)},r)}),_b=Sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=tn(l.bT),s=an(l.bT),d=nn(l.bT),m=o(ra,e,d),f=o(Pe,r,d),g=o(ra,n,s),b=o(Pe,a,s),w=o(ra,t,v),y=o(Pe,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=y,c=h;continue e}else return ru({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),ku=$(function(e,r){var n=tn(e.bT),a=an(e.bT),t=nn(e.bT);return Et(_b,t,t,a,a,n,n,r)}),wb=function(e){var r=p(Sc,hb,P,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Ro(e)),i=o(ku,n,a);return C(Kl,i,e,t,0)}else return Vo},Wi=$(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),ya=function(e){var r=e;return qr(r)},Vt=function(e){return xn(2*Dr*e)},yb=Tr,Hi=yb({cA:Vn,c3:Il,c4:So}),Mu=function(){var e=72,r=o(gb,e,Vt(1)),n=zr(1),a=Xr(mo),t=Xr(pl),i=zr(1),c=o(ie,.5,i),l=p(me,Ue,Ue,c),u=o(ie,-.5,i),v=p(me,Ue,Ue,u),s=function(f){var g=o(ie,f,r),b=Xr(o(Wi,Hi,Gi(g))),w=o(ie,gn(g),n),y=o(ie,ya(g),n),h=p(me,w,y,c),T=p(me,w,y,u),k=o(ma,e,f+1),G=o(ie,k,r),j=Xr(o(Wi,Hi,Gi(G))),E=o(ie,gn(G),n),N=o(ie,ya(G),n),W=p(me,E,N,u),B=p(me,E,N,c);return _([V({o:t,bT:v},{o:t,bT:W},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:W},{o:j,bT:B}),V({o:b,bT:T},{o:j,bT:B},{o:b,bT:h}),V({o:a,bT:l},{o:a,bT:h},{o:a,bT:B})])},d=o(ee,s,o(Mr,0,e-1)),m=At(Ne(d));return Fo(wb(m))}(),Xi=uu(Mu),xb=function(e){var r=e;return r.eG},Sb=function(e){var r=e;return r.cA},Tb=function(e){var r=xb(e),n=Co(r),a=n.a,t=n.b;return $r({cA:Sb(e),c3:a,c4:t,c6:r})},Cb=function(e){var r=e;return r.e9},Lb=function(e){var r=e;return r.fr},Pb=R(function(e,r,n,a){var t=Tb(bb(a)),i=o(Ho,n,Mu),c=function(){var d=L(e,r);return d.a?d.b?Rn(_([i,wa(Xi)])):i:d.b?wa(Xi):z}(),l=Lb(a),u=l,v=Cb(a),s=v;return o(Cu,t,o(Xo,V(u,u,s),c))}),zb=$(function(e,r){return C(Pb,!0,!0,e,r)}),Ii={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Ui={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},fn=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Jr(n),c=Jr(a),l=Jr(t);return Ze({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},qn=iu(_([V({cY:0},{cY:1},{cY:2})])),kb=$(function(e,r){var n=nu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,K(function(h,T,k,G,j,E,N,W){return S(ne,p(Le,G,0,W),Ii,No,qn,{aw:t,b:k,c:T,d:E,e:h,bq:fn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,K(function(h,T,k,G,j,E,N,W){return S(ne,p(Le,G,0,W),Ii,Go,qn,{aN:o(Ea,jn(c),i),b:k,c:T,d:E,e:h,bq:fn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(yu,l,f);if(u.$)return z;var v=u.a;return o(be,a,K(function(h,T,k,G,j,E,N,W){var B=N.a,Y=N.b;return S(ne,p(Le,G,0,W),Ui,pu,qn,{P:Y,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:v,b:k,c:T,d:E,e:h,bq:fn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(xu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,y=g.c;return o(be,a,K(function(h,T,k,G,j,E,N,W){var B=N.a,Y=N.b;return S(ne,p(Le,G,0,W),Ui,wu,qn,{b3:b,P:Y,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:y,b:k,c:T,d:E,cQ:w,e:h,bq:fn(r),f:j})}))}}),Mb=function(){var e=_([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=_([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(En,e,r)}(),Db={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ji=function(e){return ja(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Uo,t,u),Db,Io,Mb,{b:a,c:n,d:c,e:r,bY:l,bq:fn(e),f:i})}))},Ab=R(function(e,r,n,a){var t=o(kb,n,a),i=L(e,r);return i.a?i.b?Rn(_([t,Ji(a)])):t:i.b?Ji(a):z}),Bb=$(function(e,r){return C(Ab,!0,!0,e,r)}),Fb=$(function(e,r){var n=Pr(r),a=Pr(e),t=Lr(r),i=Lr(e),c=Cr(r),l=Cr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Vb=function(e){var r=_o(e),n=r.a,a=r.b;return o(Fb,n,a)},Oi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Rb=$(function(e,r){return{$:1,a:e,b:r}}),Eb=Rb({df:2,$7:0,dV:1}),qi=Eb(_([L({dw:0},{dw:1})])),jb=$(function(e,r){var n=Vb(r),a=H(n),t=_o(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,K(function(v,s,d,m,f,g,b,w){return S(ne,w,Oi,No,qi,{aw:l,du:Ce(c),dv:Ce(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,K(function(s,d,m,f,g,b,w,y){return S(ne,y,Oi,Go,qi,{aN:o(Ea,jn(u),l),du:Ce(c),dv:Ce(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Nb=$(function(e,r){return o(jb,e,r)}),Yi=$(function(e,r){var n=e,a=r;return n/a}),Gb=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(gr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Zi=$(function(e,r){return e<1?P:S(Gb,0,e,e,r,P)}),Wb=$(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:Ra(a),bT:Ce(n),L:o(Me,c,l)},r)}),Hb=function(e){var r=p(Sc,Wb,P,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Ro(e)),i=o(ku,n,a);return C(eu,i,e,t,0)}else return Vo},Du=$(function(e,r){var n=e,a=r,t=Ar(a);return{fT:t*Ar(n),fX:t*qr(n),c5:qr(a)}}),Xb=function(){var e=zr(1),r=72,n=o(Mr,0,r-1),a=o(Zi,r,o(Cn,Ue,Vt(1))),t=Kt(r/2),i=o(Mr,0,t-1),c=o(Zi,t,o(Cn,vn(90),vn(-90))),l=jo(Ne(o(ee,function(s){return o(ee,function(d){return{o:Xr(o(Du,s,d)),bT:p(me,o(ie,gn(d)*gn(s),e),o(ie,gn(d)*ya(s),e),o(ie,ya(d),e)),L:L(o(Yi,s,Vt(1)),o(Yi,o(pn,vn(90),d),vn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ne(o(ee,function(s){return Ne(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([V(b,g,m),V(b,m,f)])},i))},n));return Fo(Hb(o(lu,l,v)))}(),xa=72,Yn=2*xa,Ib=$(function(e,r){e:for(;;){var n=Yn+1,a=o(ma,Yn,2*e+3),t=o(ma,Yn,2*e+2),i=2*e+1,c=2*e,l=Yn,u=o(A,V(l,c,t),o(A,V(c,a,t),o(A,V(c,i,a),o(A,V(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Ub=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Jb=$(function(e,r){e:for(;;){var n=p(Ub,0,2*Dr,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Ob=function(){var e=o(Jb,xa-1,_([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Ib,xa-1,P);return o(En,e,r)}(),qb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},Qi=function(e){return ja(K(function(r,n,a,t,i,c,l,u){return S(ne,o(Uo,!0,u),qb,Io,Ob,{aw:p(An,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},Yb=function(e){var r=tu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},Zb=$(function(e,r){return o(Tu,Yb(e),r)}),Qb=R(function(e,r,n,a){var t=o(Ho,n,Xb),i=function(){var u=L(e,r);return u.a?u.b?Rn(_([t,Qi()])):t:u.b?Qi():z}(),c=yo(a),l=c;return o(Zb,o(ha,Vn,wo(a)),o(Xo,V(l,l,l),i))}),Kb=$(function(e,r){return C(Qb,!0,!0,e,r)}),eg=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),rg=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),ng=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(zu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(eg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(gl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(rg,n,a,t,i,c)}},ag=ng,Au=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(db,t,r)]);case 1:var t=e.a,n=e.b;return _([o(Bb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(Kb,ag(t),a)]);case 2:var t=e.a,i=e.b;return _([o(zb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Nb,pb(c),l)]);default:var u=e.a;return o(Lo,Au,u)}},tg=function(e){return o(Lo,Au,e)},og=$(function(e,r){return c3({aI:h0(e.es),ev:e.ev,aJ:_0(.5),ca:e.ca,aK:L(Si(Je(e.cS.fR)),Si(Je(e.cS.eW))),aP:tg(r),fz:!0,fI:o(Du,xn(e.fH),xn(e.fJ)),ei:Ul})}),ig=$(function(e,r){return o(og,{es:C(ul,0,0,0,0),ev:g0({dj:{fT:o(ir,"camera x",e),fX:o(ir,"camera y",e),c5:o(ir,"camera z",e)},aR:{fT:0,fX:0,c5:0},ei:{fT:0,fX:1,c5:0}}),ca:e.ca,cS:e.cS,fH:-Pt(135),fJ:-Pt(45)},_([a0(e)]))}),cg=C(vm,ig,pm,mm,$m);const lg={Main:{init:cg(o(D,function(e){return ke({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({eo:d,eB:s,de:v,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",fa(yn)))},o(M,"left",Z))},o(M,"pressedKeys",fa(yn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({de:v,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ug=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},vg=()=>{lt("pointerdown"),lt("wheel"),lt("keydown")},lt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},$g=lg.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});vg();ug($g);
