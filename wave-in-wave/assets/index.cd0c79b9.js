const Eu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Eu();function hr(e,r,n){return n.a=e,n.f=r,n}function $(e){return hr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return hr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return hr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return hr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return hr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return hr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return hr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Rt(e){return hr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function _e(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ru(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var ju=[];function Nu(e){return e.length}var Hu=x(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Wu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),Gu=$(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Xu=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});x(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Iu()),r});function Iu(e){return"<internals>"}function rn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function br(e,r){for(var n,a=[],t=vt(e,r,0,a);t&&(n=a.pop());t=vt(n.a,n.b,0,a));return t}function vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&rn(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=li(e),r=li(r));for(var t in e)if(!vt(e[t],r[t],n+1,a))return!1;return!0}$(br);$(function(e,r){return!br(e,r)});function U(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=U(e.a,r.a))||(n=U(e.b,r.b))?n:U(e.c,r.c);for(;e.b&&r.b&&!(n=U(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return U(e,r)<0});$(function(e,r){return U(e,r)<1});$(function(e,r){return U(e,r)>0});$(function(e,r){return U(e,r)>=0});var Uu=$(function(e,r){var n=U(e,r);return n<0?Cc:n?Mf:Tc}),Ln=0;function L(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var P={$:0};function rr(e,r){return{$:1,a:e,b:r}}var Ju=$(rr);function _(e){for(var r=P,n=e.length;n--;)r=rr(e[n],r);return r}function za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ou=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(za(r).sort(function(n,a){return U(e(n),e(a))}))});$(function(e,r){return _(za(r).sort(function(n,a){var t=o(e,n,a);return t===Tc?0:t===Cc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Yu=$(Math.pow);$(function(e,r){return r%e});var qu=$(function(e,r){var n=r%e;return e===0?rn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Zu=Math.PI,Ku=Math.cos,Qu=Math.sin,ev=Math.tan,rv=Math.atan;$(Math.atan2);function nv(e){return e}function av(e){return e===1/0||e===-1/0}var tv=Math.ceil,ov=Math.floor,iv=Math.round,cv=Math.sqrt,Oo=Math.log,lv=isNaN;function uv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var vv=$(function(e,r){return e+r});function $v(e){var r=e.charCodeAt(0);return isNaN(r)?Y:re(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}$(function(e,r){return e+r});function fv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function sv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var dv=x(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),mv=$(function(e,r){return r.split(e)}),pv=$(function(e,r){return r.join(e)}),bv=x(function(e,r,n){return n.slice(e,r)});function gv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var hv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),_v=$(function(e,r){return r.indexOf(e)>-1}),wv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var yv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function Qi(e){return e+""}function xv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:re(n==45?-r:r)}function Sv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?re(r):Y}function Tv(e){return za(e).join("")}function Cv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Lv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Pv(e){return{$:0,a:e}}function Nt(e){return{$:2,b:e}}var zv=Nt(function(e){return typeof e=="boolean"?ue(e):Ye("a BOOL",e)}),kv=Nt(function(e){return typeof e=="number"?ue(e):Ye("a FLOAT",e)}),Mv=Nt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ye("a STRING",e)});function Dv(e){return{$:3,b:e}}var Av=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function _r(e,r){return{$:9,f:e,g:r}}var Bv=$(function(e,r){return{$:10,b:r,h:e}}),Fv=$(function(e,r){return _r(e,[r])}),Vv=x(function(e,r,n){return _r(e,[r,n])});E(function(e,r,n,a){return _r(e,[r,n,a])});ge(function(e,r,n,a,t){return _r(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return _r(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return _r(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return _r(e,[r,n,a,t,i,c,l])});Rt(function(e,r,n,a,t,i,c,l,u){return _r(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return we(o(Kt,"This is not valid JSON! "+a.message,r))}});var ec=$(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ye("null",r);case 3:return Nn(r)?Yo(e.b,r,_):Ye("a LIST",r);case 4:return Nn(r)?Yo(e.b,r,Ev):Ye("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ye("an OBJECT with a field named `"+n+"`",r);var v=Re(e.b,r[n]);return Ie(v)?v:we(o(ui,n,v.a));case 7:var a=e.e;if(!Nn(r))return Ye("an ARRAY",r);if(a>=r.length)return Ye("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Re(e.b,r[a]);return Ie(v)?v:we(o(Lc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Ye("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Re(e.b,r[i]);if(!Ie(v))return we(o(ui,i,v.a));t=rr(L(i,v.a),t)}return ue(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Re(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=Re(e.b,r);return Ie(v)?Re(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=Re(d.a,r);if(Ie(v))return v;s=rr(v.a,s)}return we(Df(Ae(s)));case 1:return we(o(Kt,e.a,r));case 0:return ue(e.a)}}function Yo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!Ie(c))return we(o(Lc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ev(e){return o(Yf,e.length,function(r){return e[r]})}function Ye(e,r){return we(o(Kt,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var Rv=$(function(e,r){return JSON.stringify(r,null,e)+""});function rc(e){return e}x(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function jv(e){return{$:1,a:e}}function $r(e){return{$:2,b:e,c:null}}var $t=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Nv(e){return{$:5,b:e}}var Hv=0;function Ht(e){var r={$:0,e:Hv++,f:e,g:null,h:[]};return Wt(r),r}function nc(e){return $r(function(r){r(Br(Ht(e)))})}function ac(e,r){e.h.push(r),Wt(e)}var Wv=$(function(e,r){return $r(function(n){ac(e,r),n(Br(Ln))})}),Ga=!1,Zo=[];function Wt(e){if(Zo.push(e),!Ga){for(Ga=!0;e=Zo.shift();)Gv(e);Ga=!1}}function Gv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Gt(r,a,e.e$,e.fL,e.fE,function(){return function(){}})});function Gt(e,r,n,a,t,i){var c=o(ec,e,r?r.flags:void 0);Ie(c)||rn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Xv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),Qo(l,b.b,t(v))}return Qo(l,u.b,t(v)),d?{ports:d}:{}}var Qe={};function Xv(e,r){var n;for(var a in Qe){var t=Qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Uv(t,r)}return n}function Iv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Uv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o($t,l,Nv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ht(o($t,l,e.b))}var Jv=$(function(e,r){return $r(function(n){e.g(r),n(Br(Ln))})});$(function(e,r){return o(Wv,e.h,{$:0,a:r})});function tc(e){return function(r){return{$:1,k:e,l:r}}}function Ov(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ko=[],Xa=!1;function Qo(e,r,n){if(Ko.push({p:e,q:r,r:n}),!Xa){Xa=!0;for(var a;a=Ko.shift();)Yv(a.p,a.q,a.r);Xa=!1}}function Yv(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)ac(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=qv(e,t,a,r.l);n[t]=Zv(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function qv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Qe[r].e:Qe[r].f;return o(i,t,a)}function Zv(e,r,n){return n=n||{i:P,j:P},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function Kv(e){Qe[e]&&rn(3)}$(function(e,r){return r});function Qv(e,r){return Kv(e),Qe[e]={f:e$,u:r,a:r$},tc(e)}var e$=$(function(e,r){return function(n){return e(r(n))}});function r$(e,r){var n=P,a=Qe[e].u,t=Br(null);Qe[e].b=t,Qe[e].c=x(function(c,l,u){return n=l,t});function i(c){var l=o(ec,a,c);Ie(l)||rn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ir=typeof document!="undefined"?document:{};function Xt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(pr(e,function(){}),t),{}});function ft(e){return{$:0,a:e}}var oc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:It(n),e:t,f:e,b:i}})}),Fr=oc(void 0),n$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:It(n),e:t,f:e,b:i}})}),a$=n$(void 0);function t$(e,r,n,a){return{$:3,d:It(e),g:r,h:n,i:a}}var o$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function wr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return wr([e,r],function(){return e(r)})});x(function(e,r,n){return wr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return wr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return wr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return wr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return wr([e,r,n,a,t,i,c],function(){return _e(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return wr([e,r,n,a,t,i,c,l],function(){return jt(e,r,n,a,t,i,c,l)})});Rt(function(e,r,n,a,t,i,c,l,u){return wr([e,r,n,a,t,i,c,l,u],function(){return Pa(e,r,n,a,t,i,c,l,u)})});var ic=$(function(e,r){return{$:"a0",n:e,o:r}}),i$=$(function(e,r){return{$:"a1",n:e,o:r}}),cc=$(function(e,r){return{$:"a2",n:e,o:r}}),Pn=$(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function c$(e){return e=="script"?"p":e}function l$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(ic,r.n,u$(e,r.o)):r});function u$(e,r){var n=ao(r);return{$:r.$,a:n?p(qf,n<3?v$:$$,ke(e),r.a):o($a,e,r.a)}}var v$=$(function(e,r){return L(e(r.a),r.b)}),$$=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function It(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ei(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ei(c,t,i):c[t]=i}return r}function ei(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function pr(e,r){var n=e.$;if(n===5)return pr(e.k||(e.k=e.m()),r);if(n===0)return ir.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return st(c,r,e.d),c}var c=e.f?ir.createElementNS(e.f,e.c):ir.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),st(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Xt(c,pr(n===1?l[u]:l[u].b,r));return c}function st(e,r,n){for(var a in n){var t=n[a];a==="a1"?f$(e,t):a==="a0"?m$(e,r,t):a==="a3"?s$(e,t):a==="a4"?d$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function f$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function s$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function d$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function m$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=p$(r,i),e.addEventListener(t,c,Ut&&{passive:ao(i)<2}),a[t]=c}}var Ut;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ut=!0}}))}catch{}function p$(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!Ie(i)){for(var c=ao(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function b$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function lc(e,r){var n=[];return Ue(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ue(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=T$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ue(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){he(n,0,a,r);return}(f?!g$(d,m):d!==m)&&he(n,2,a,m),Ue(g,b,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:ri(e,r,n,a,h$);return;case 2:ri(e,r,n,a,_$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var w=Jt(e.d,r.d);w&&he(n,4,a,w);var y=r.i(e.g,r.g);y&&he(n,5,a,y);return}}}function g$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ri(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=Jt(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function Jt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Jt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&b$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function h$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ue(s,i[v],n,++a),a+=s.b||0}}function _$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,h=g.b,T=b.b,k=void 0,H=void 0;if(w===y){f++,Ue(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;H=y===N}if(R){var F=R.a,q=R.b;k=w===F}if(k&&H){f++,Ue(h,q,t,f),un(i,t,w,T,m,c),f+=h.b||0,f++,vn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(k){f++,un(i,t,y,T,m,c),Ue(h,q,t,f),f+=h.b||0,d+=1,m+=2;continue}if(H){f++,vn(i,t,w,h,f),f+=h.b||0,f++,Ue(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,vn(i,t,w,h,f),un(i,t,y,T,m,c),f+=h.b||0,f++,Ue(W,q,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;vn(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var K=K||[],b=u[m];un(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&he(n,8,a,{w:t,x:c,y:K})}var uc="_elmW6BL";function un(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ue(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}un(e,r,n+uc,a,t,i)}function vn(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ue(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}vn(e,r,n+uc,a,t)}function vc(e,r,n,a){$n(e,r,n,0,0,r.b,a)}function $n(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)vc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&$n(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&$n(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return $n(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,h=t+(y.b||0);if(t<=u&&u<=h&&(a=$n(b[w],y,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function $c(e,r,n,a){return n.length===0?e:(vc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=w$(t,a);t===e&&(e=i)}return e}function w$(e,r){switch(r.$){case 0:return y$(e,r.s,r.u);case 4:return st(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return x$(e,r);case 5:return r.s(e);default:rn(10)}}function y$(e,r,n){var a=e.parentNode,t=pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function x$(e,r){var n=r.s,a=S$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Xt(e,a),e}function S$(e,r){if(!!e){for(var n=ir.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Xt(n,i.c===2?i.s:pr(i.z,r.u))}return n}}function Ot(e){if(e.nodeType===3)return ft(e.textContent);if(e.nodeType!==1)return ft("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(Pn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=rr(Ot(v[a]),u);return p(Fr,l,r,u)}function T$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var C$=E(function(e,r,n,a){return Gt(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.fO,l=a.node,u=Ot(l);return fc(i,function(v){var s=c(v),d=lc(u,s);l=$c(l,u,d,t),u=s})})});E(function(e,r,n,a){return Gt(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.cN&&e.cN(t),l=e.fO,u=ir.title,v=ir.body,s=Ot(v);return fc(i,function(d){ca=c;var m=l(d),f=Fr("body")(P)(m.er),g=lc(s,f);v=$c(v,s,g,t),s=f,ca=0,u!==m.fI&&(ir.title=u=m.fI)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function fc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(io,to,$r(function(){r&&history.go(r),e()}))});$(function(e,r){return o(io,to,$r(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(io,to,$r(function(){history.replaceState({},"",r),e()}))});var L$={addEventListener:function(){},removeEventListener:function(){}},P$=typeof window!="undefined"?window:L$;x(function(e,r,n){return nc($r(function(a){function t(i){Ht(n(i))}return e.addEventListener(r,t,Ut&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Re(e,r);return Ie(n)?re(n.a):Y});function sc(e,r){return $r(function(n){ua(function(){var a=document.getElementById(e);n(a?Br(r(a)):jv(Kf(e)))})})}function z$(e){return $r(function(r){ua(function(){r(Br(e()))})})}$(function(e,r){return sc(r,function(n){return n[e](),Ln})});$(function(e,r){return z$(function(){return P$.scroll(e,r),Ln})});x(function(e,r,n){return sc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ln})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var k$=$(function(e,r){var n="g";e.fc&&(n+="m"),e.et&&(n+="i");try{return re(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var M$=x(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):Y}a.push(C(cl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):Y}return n(C(cl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var ni=0;function wn(e,r){for(;r.b;r=r.b)e(r.a)}function Yt(e){for(var r=0;e.b;e=e.b)r++;return r}var D$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},A$=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),B$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),F$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),V$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),E$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),R$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),j$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),N$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),H$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),W$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},G$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},X$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},I$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},dc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},mc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},U$=function(e){e.gl.disable(e.gl.CULL_FACE)},J$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},O$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Y$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ai=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],q$=[G$,X$,I$,dc,mc,U$,J$,O$,Y$];function ti(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Z$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function K$(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[y]:w[y][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][y]:w[T][y][h]})}var u=pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(Yt(n.b)*s);wn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Q$(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=ef(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*Yt(r.b),indexBuffer:null,buffers:{}}}function ef(e,r){var n=new Uint32Array(Yt(e)*r),a=0,t;return wn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function oi(e,r){return e+"#"+r}var bc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),dc(n),mc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=oi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ni++,v||(v=ti(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ni++,s||(s=ti(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Z$(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=rf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=oi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),nf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Q$(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=K$(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=pc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,h=y*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,y*T)}for(n.toggle=!n.toggle,wn(t0(n),i.a),u=0;u<ai.length;u++){var k=n[ai[u]];k.toggle!==n.toggle&&k.enabled&&(q$[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return wn(t,e.g),r});function rf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var y=c++;return function(h){e.activeTexture(e.TEXTURE0+y);var T=l.textures.get(h);T||(T=h.eA(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,y),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function nf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var af=x(function(e,r,n){return t$(r,{g:n,f:{},h:e},$f,ff)}),tf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),of=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),cf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),lf=$(function(e,r){e.contextAttributes.antialias=!0}),uf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),vf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function $f(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};wn(function(t){return o(a0,r,t)},e.h);var n=ir.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),D$(function(){return o(bc,e,n)})):(n=ir.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ff(e,r){return r.f=e.f,bc(r)}var sf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/df(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function df(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var qt=new Float64Array(3),ii=new Float64Array(3),ci=new Float64Array(3),mf=x(function(e,r,n){return new Float64Array([e,r,n])}),pf=function(e){return e[0]},bf=function(e){return e[1]},gf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var hf=function(e){return new Float64Array([e.fT,e.fX,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function gc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(gc);function hc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(gc(e,r,n),n)}$(hc);function _c(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/_c(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var _f=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),fn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(fn);function dt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(dt);$(function(e,r){var n,a=qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=fn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(fn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(fn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(fn(r,a)+e[14])/n,t});var wf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var yf=function(e){return{fT:e[0],fX:e[1],c$:e[2],ei:e[3]}},xf=function(e){return new Float64Array([e.fT,e.fX,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Sf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Sf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Tf=new Float64Array(16),Cf=new Float64Array(16),Lf=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},Pf=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function wc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(wc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return wc(c,l,i,t,n,a)});function yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(yc);E(function(e,r,n,a){return yc(e,r,n,a,-1,1)});function xc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],h=e[15],T=r[0],k=r[1],H=r[2],j=r[3],R=r[4],N=r[5],W=r[6],F=r[7],q=r[8],K=r[9],oe=r[10],ve=r[11],te=r[12],de=r[13],Pe=r[14],Te=r[15];return n[0]=a*T+l*k+d*H+b*j,n[1]=t*T+u*k+m*H+w*j,n[2]=i*T+v*k+f*H+y*j,n[3]=c*T+s*k+g*H+h*j,n[4]=a*R+l*N+d*W+b*F,n[5]=t*R+u*N+m*W+w*F,n[6]=i*R+v*N+f*W+y*F,n[7]=c*R+s*N+g*W+h*F,n[8]=a*q+l*K+d*oe+b*ve,n[9]=t*q+u*K+m*oe+w*ve,n[10]=i*q+v*K+f*oe+y*ve,n[11]=c*q+s*K+g*oe+h*ve,n[12]=a*te+l*de+d*Pe+b*Te,n[13]=t*te+u*de+m*Pe+w*Te,n[14]=i*te+v*de+f*Pe+y*Te,n[15]=c*te+s*de+g*Pe+h*Te,n}$(xc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],h=r[4],T=r[5],k=r[6],H=r[8],j=r[9],R=r[10],N=r[12],W=r[13],F=r[14];return n[0]=a*b+c*w+v*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+d*k,n[7]=0,n[8]=a*H+c*j+v*R,n[9]=t*H+l*j+s*R,n[10]=i*H+u*j+d*R,n[11]=0,n[12]=a*N+c*W+v*F+m,n[13]=t*N+l*W+s*F+f,n[14]=i*N+u*W+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),t=1/_c(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,y=i*i*v+u,h=g+f,T=b-m,k=g-f,H=c*c*v+u,j=w+d,R=b+m,N=w-d,W=l*l*v+u,F=n[0],q=n[1],K=n[2],oe=n[3],ve=n[4],te=n[5],de=n[6],Pe=n[7],Te=n[8],sr=n[9],dr=n[10],Wa=n[11],Au=n[12],Bu=n[13],Fu=n[14],Vu=n[15];return a[0]=F*y+ve*h+Te*T,a[1]=q*y+te*h+sr*T,a[2]=K*y+de*h+dr*T,a[3]=oe*y+Pe*h+Wa*T,a[4]=F*k+ve*H+Te*j,a[5]=q*k+te*H+sr*j,a[6]=K*k+de*H+dr*j,a[7]=oe*k+Pe*H+Wa*j,a[8]=F*R+ve*N+Te*W,a[9]=q*R+te*N+sr*W,a[10]=K*R+de*N+dr*W,a[11]=oe*R+Pe*N+Wa*W,a[12]=Au,a[13]=Bu,a[14]=Fu,a[15]=Vu,a});function zf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(zf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function kf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(kf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+y*i+r[15],n});x(function(e,r,n){var a=hc(e,r,qt),t=va(dt(n,a,ii),ii),i=va(dt(a,t,ci),ci),c=Tf,l=Cf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,xc(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=Ju,Hn=Xu,Sc=x(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Hn,e,l,v)}else{var u=c.a;return p(Hn,i,l,u)}});return p(Hn,i,p(Hn,e,r,t),a)}),Zt=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Zt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),li=function(e){return p(Zt,x(function(r,n,a){return o(A,L(r,n),a)}),P,e)},Tc=1,Mf=2,Cc=0,we=function(e){return{$:1,a:e}},Kt=$(function(e,r){return{$:3,a:e,b:r}}),ui=$(function(e,r){return{$:0,a:e,b:r}}),Lc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Df=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},Y={$:1},Af=hv,Bf=Rv,De=Qi,Sr=$(function(e,r){return o(pv,e,za(r))}),Qt=$(function(e,r){return _(o(mv,e,r))}),Pc=function(e){return o(Sr,`
    `,o(Qt,`
`,e))},zn=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Mr=function(e){return p(zn,$(function(r,n){return n+1}),0,e)},Ff=Ou,Vf=x(function(e,r,n){e:for(;;)if(U(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Dr=$(function(e,r){return p(Vf,e,r,P)}),zc=$(function(e,r){return p(Ff,e,o(Dr,0,Mr(r)-1),r)}),er=Cv,kc=function(e){var r=er(e);return 97<=r&&r<=122},Mc=function(e){var r=er(e);return r<=90&&65<=r},Ef=function(e){return kc(e)||Mc(e)},Rf=function(e){var r=er(e);return r<=57&&48<=r},jf=function(e){return kc(e)||Mc(e)||Rf(e)},Ae=function(e){return p(zn,A,P,e)},nn=$v,Nf=$(function(e,r){return`

(`+(De(e+1)+(") "+Pc(Hf(r))))}),Hf=function(e){return o(Wf,e,P)},Wf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=nn(n);if(b.$===1)return!1;var w=b.a,y=w.a,h=w.b;return Ef(y)&&o(Af,jf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Sr,"",Ae(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(De(Mr(s))+" ways:"));return o(Sr,`

`,o(A,g,o(zc,Nf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Sr,"",Ae(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Sr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return g+(Pc(o(Bf,4,f))+(`

`+m))}}),Be=32,mt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pt=ju,eo=tv,ro=$(function(e,r){return Oo(r)/Oo(e)}),Gf=nv,yn=eo(o(ro,2,Be)),Dc=C(mt,0,yn,pt,pt),Ac=Hu,Bc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Fc=ov,bt=Nu,Se=$(function(e,r){return U(e,r)>0?e:r}),Xf=function(e){return{$:0,a:e}},no=Wu,If=$(function(e,r){e:for(;;){var n=o(no,Be,e),a=n.a,t=n.b,i=o(A,Xf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),Uf=function(e){var r=e.a;return r},Jf=$(function(e,r){e:for(;;){var n=eo(r/Be);if(n===1)return o(no,Be,e).a;var a=o(If,e,P),t=n;e=a,r=t;continue e}}),Vc=$(function(e,r){if(r.l){var n=r.l*Be,a=Fc(o(ro,Be,n-1)),t=e?Ae(r.z):r.z,i=o(Jf,t,r.l);return C(mt,bt(r.p)+n,o(Se,5,a*yn),i,r.p)}else return C(mt,bt(r.p),yn,pt,r.p)}),Of=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Vc,!1,{z:a,l:n/Be|0,p:t});var i=Bc(p(Ac,Be,r,e)),c=e,l=r-Be,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),Yf=$(function(e,r){if(e<=0)return Dc;var n=e%Be,a=p(Ac,n,e-n,r),t=e-n-Be;return S(Of,r,t,e,P,a)}),Ie=function(e){return!e.$},D=Bv,Z=zv,M=Av,$e=kv,$a=Fv,qf=Vv,ke=Pv,ao=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Fr("div"),Zf=function(e){return{$:2,a:e}},Ec=$(function(e,r){return e}),Rc=$(function(e,r){return{bA:r.bA,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fn:r.fn,cM:r.cM,fP:r.fP}}),Cr=function(e){return e},Kf=Cr,vi=We(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),Qf=_v,Tr=fv,Ur=bv,kn=$(function(e,r){return e<1?r:p(Ur,e,Tr(r),r)}),ka=yv,Ma=function(e){return e===""},Da=$(function(e,r){return e<1?"":p(Ur,0,e,r)}),jc=xv,$i=ge(function(e,r,n,a,t){if(Ma(t)||o(Qf,"@",t))return Y;var i=o(ka,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=jc(o(kn,c+1,t));if(l.$===1)return Y;var u=l;return re(_e(vi,e,o(Da,c,t),u,r,n,a))}else return re(_e(vi,e,t,Y,r,n,a))}),fi=E(function(e,r,n,a){if(Ma(a))return Y;var t=o(ka,"/",a);if(t.b){var i=t.a;return S($i,e,o(kn,i,a),r,n,o(Da,i,a))}else return S($i,e,"/",r,n,a)}),si=x(function(e,r,n){if(Ma(n))return Y;var a=o(ka,"?",n);if(a.b){var t=a.a;return C(fi,e,re(o(kn,t+1,n)),r,o(Da,t,n))}else return C(fi,e,Y,r,n)});$(function(e,r){if(Ma(r))return Y;var n=o(ka,"#",r);if(n.b){var a=n.a;return p(si,e,re(o(kn,a+1,r)),o(Da,a,r))}else return p(si,e,Y,r)});var es=wv,to=function(e){},Mn=Br,rs=Mn(0),Nc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(zn,e,r,Ae(d)):C(Nc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),fr=x(function(e,r,n){return C(Nc,e,r,0,n)}),ee=$(function(e,r){return p(fr,$(function(n,a){return o(A,e(n),a)}),P,r)}),fa=$t,oo=$(function(e,r){return o(fa,function(n){return Mn(e(n))},r)}),ns=x(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Mn(o(e,a,t))},n)},r)}),as=function(e){return p(fr,ns(A),Mn(P),e)},ts=Jv,os=$(function(e,r){var n=r;return nc(o(fa,ts(e),n))}),is=x(function(e,r,n){return o(oo,function(a){return 0},as(o(ee,os(e),r)))}),cs=x(function(e,r,n){return Mn(0)}),ls=$(function(e,r){var n=r;return o(oo,e,n)});Qe.Task=Iv(rs,is,cs,ls);var us=tc("Task"),io=$(function(e,r){return us(o(oo,e,r))}),vs=C$,$s=uv,sa={$:1},Hc=function(e){return{$:2,a:e}},Aa={$:0},je=$(function(e,r){return{$:0,a:e,b:r}}),ae=x(function(e,r,n){return r(e(n))}),an=function(e){var r=e.b.B;return r.a},fs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(je,r,{B:i,ab:c,T:o(A,a,n)}))}else return Y},Wc=function(e){var r=e.b;return o(je,Aa,r)},nr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ss=x(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fn.c7?Wc(n):n;case 2:var i=a.a.cR;return(U(i+r.eH,an(n).bA)>0?o(ae,fs,nr(o(je,sa,t))):Cr)(o(je,Hc({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Rc,l.ey,qe(r,{bA:l.bA+r.eH})),s=o(e,v,u);return o(je,Aa,{B:L(v,s),ab:P,T:o(A,t.B,t.T)})}}),Gc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ds=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ms=$(function(e,r){return Ae(p(ds,e,r,P))}),Xc=x(function(e,r,n){if(r<=0)return P;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,h,o(A,c,o(A,s,o(A,b,o(ms,r-4,w))))):o(A,h,o(A,c,o(A,s,o(A,b,p(Xc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,h=y.a;return _([h])}}),ps=$(function(e,r){return p(Xc,0,e,r)}),bs=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ae(n),le(_([a]),t)),c=o(ps,e,i),l=o(Gc,e,i);if(l.b){var u=l.a,v=l.b;return o(je,sa,{B:u,ab:v,T:Ae(c)})}else{var s=Ae(c);if(s.b){var d=s.a,m=s.b;return o(je,sa,{B:d,ab:P,T:m})}else return r}}),gs=function(e){var r=e.b;return o(je,sa,r)},hs=function(e){var r=e.b;return o(je,Hc({cR:an(e).bA}),r)},_s=$(function(e,r){switch(e.$){case 1:return gs(r);case 2:return Wc(r);case 3:return hs(r);default:var n=e.a;return o(bs,n,r)}}),Ic=$(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),ws=$(function(e,r){return qe(r,{av:e(r.av)})}),ys=function(e){return{$:3,a:e}},xs=function(e){return{$:2,a:e}},Uc=$(function(e,r){return{$:0,a:e,b:r}}),Jc=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return Y;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},co=Sv,Ss=x(function(e,r,n){return o(nr,0/0,co(o(e,r,n)))}),Oc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ts=dv,Yc=function(e){return p(Ts,A,P,e)},Cs=$(function(e,r){var n=o(Oc,function(a){return a!=="0"&&a!=="."},Yc(r));return le(e&&n?"-":"",r)}),pe=Qi,gt=vv,qc=Lv,Zc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=nn(n);if(a.$===1)return"01";var t=a.a;return o(gt,"0",Zc(t))}else{var i=er(r);return i>=48&&i<57?o(gt,qc(i+1),n):"0"}},ht=av,Ls=lv,Ba=function(e){return o(gt,e,"")},Kc=x(function(e,r,n){return e<=0?n:p(Kc,e>>1,le(r,r),e&1?le(n,r):n)}),xn=$(function(e,r){return p(Kc,e,r,"")}),_t=x(function(e,r,n){return le(n,o(xn,e-Tr(n),Ba(r)))}),wt=sv,Qc=function(e){var r=o(Qt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return L(n,t)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Ps=function(e){var r=o(Qt,"e",pe(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(nr,0,jc(o(es,"+",t)?o(kn,1,t):t)),c=Qc(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o(nr,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Ic(Ba),nn(le(o(xn,O(i),"0"),v))))):p(_t,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},zs=x(function(e,r,n){if(ht(n)||Ls(n))return pe(n);var a=n<0,t=Qc(Ps(O(n))),i=t.a,c=t.b,l=Tr(i)+r,u=le(o(xn,-l+1,"0"),p(_t,l,"0",le(i,c))),v=Tr(u),s=o(Se,1,l),d=o(e,a,p(Ur,s,v,u)),m=p(Ur,0,s,u),f=d?wt(o(nr,"1",o(ye,Zc,nn(wt(m))))):m,g=Tr(f),b=f==="0"?f:r<=0?le(f,o(xn,O(r),"0")):U(r,Tr(c))<0?p(Ur,0,g-r,f)+("."+p(Ur,g-r,g,f)):le(i+".",p(_t,r,"0",c));return o(Cs,a,b)}),el=zs($(function(e,r){var n=nn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),ks=Ss(el),Ms=x(function(e,r,n){var a=o(ro,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(ks,t,n)}),rl=Uu,Fa=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(rl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},Zr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,y),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),yt=x(function(e,r,n){if(n.$===-2)return S(X,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(rl,e,t);switch(u){case 0:return S(Zr,a,t,i,p(yt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Zr,a,t,i,c,p(yt,e,r,l))}}),mn=x(function(e,r,n){var a=p(yt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Ds=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},nl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,y=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,y))}else return e},di=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,y=k.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,y))}else return e},As=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,di(r)}else break e;else return c.a,c.d,di(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,Kn(t),l);var u=nl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Zr,v,s,d,Kn(m),f)}else return ar}else return S(X,r,n,a,Kn(t),l)}else return ar},pn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(U(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(pn,e,i),c);var u=nl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Zr,v,s,d,o(pn,e,m),f)}else return ar}else return S(X,n,a,t,o(pn,e,i),c);else return o(Bs,e,jt(As,e,r,n,a,t,i,c))}),Bs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(br(e,a)){var l=Ds(c);if(l.$===-1){var u=l.b,v=l.c;return S(Zr,n,u,v,i,Kn(c))}else return ar}else return S(Zr,n,a,t,i,o(pn,e,c))}else return ar}),Fs=$(function(e,r){var n=o(pn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Wn=x(function(e,r,n){var a=r(o(Fa,e,n));if(a.$)return o(Fs,e,n);var t=a.a;return p(mn,e,t,n)}),Vs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Jc,L(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Uc,L(i,c),p(Ms,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){return a.$===3?ys(n):a}));default:var r=e.a,n=e.b;return o(Wn,r,ye(function(a){return a.$===2?xs(n):a}))}},Es=function(e){return ws(Vs(e))},Rs=$(function(e,r){return o(ee,Es(e),r)}),js=$(function(e,r){return qe(r,{ey:o(Rs,e,r.ey)})}),Ns=$(function(e,r){var n=r.a,a=r.b;return o(je,n,qe(a,{B:o(Ic,js(e),a.B)}))}),Hs=$(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),Ws=x(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,qe(t,{B:o(Hs,o(e,i.a,r),i)}))}),Gs=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return qe(a,{aL:!a.aL});case 2:var t=n.a;return qe(a,{G:p(ss,e,t,a.G)});case 3:var i=n.a;return qe(a,{G:o(Ns,i,a.G)});case 4:var c=n.a;return qe(a,{G:p(Ws,r,c,a.G)});default:var l=n.a;return qe(a,{G:o(_s,l,a.G)})}}),Xs=$(function(e,r){return o(je,Aa,{B:L(e,r(e)),ab:P,T:P})}),Is=Ov,mi=Is(P),da=Dv,Sn=Mv,Us=Qv("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({bA:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Sn)))},o(M,"left",Z))},o(M,"pressedKeys",da(Sn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eV:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eB:r,eC:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Js=function(e){return{$:4,a:e}},Os={$:0},Ys=rc,Ge=$(function(e,r){return o(cc,e,Ys(r))}),J=Ge("className"),qs=function(e){var r=e.b.B;return r.b},ma=Ge("id"),Zs=o$,pa=Zs,Ks=i$,se=Ks,Qs={$:1},ed=function(e){return{$:3,a:e}},rd=function(e){return{$:5,a:e}},pi=Fr("a"),lo=Fr("button"),nd=Pn("d"),al=oc("http://www.w3.org/2000/svg"),ad=al("path"),td=al("svg"),od=Pn("viewBox"),bn=function(e){return o(td,_([od("0 0 100 100"),o(se,"width","100%"),o(se,"height","100%")]),_([o(ad,_([nd(e)]),P)]))},bi=function(e){return o(Ge,"href",l$(e))},Or={eF:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eP:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eU:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fl:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fm:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fq:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fA:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fK:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fM:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},id=function(e){return{$:0,a:e}},tl=ic,ol=$(function(e,r){return o(tl,e,id(r))}),uo=function(e){return o(ol,"click",ke(e))},gi=Ge("target"),cd=Ge("title"),xt=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(xt,e,i),o(xt,e,c))}),ld=ft,ur=ld,ud=function(e){return p(Zt,x(function(r,n,a){return o(A,n,a)}),P,e)},vd=$(function(e,r){return{$:3,a:e,b:r}}),$d=$(function(e,r){return{$:2,a:e,b:r}}),fd=$(function(e,r){return{$:0,a:e,b:r}}),sd=$(function(e,r){return{$:1,a:e,b:r}}),tn=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dd=C(tn,0/255,0/255,0/255,1),md=rc,pd=$(function(e,r){return o(cc,e,md(r))}),bd=pd("checked"),Je=iv,gd=x(function(e,r,n){return le(o(xn,e-Tr(n),Ba(r)),n)}),ba=qu,il=function(e){var r=function(n){return n<10?De(n):Ba(qc(87+n))};return e<16?r(e):le(il(e/16|0),r(o(ba,16,e)))},hd=o(ae,il,o(gd,2,"0")),vo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b1:a,b7:n,cG:r}},_d=function(e){var r=vo(e),n=r.cG,a=r.b7,t=r.b1;return o(Sr,"",o(A,"#",o(ee,o(ae,Je,hd),_([n*255,a*255,t*255]))))},St=Ge("htmlFor"),Tt=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return e(n)}}),wd=x(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),Va=$(function(e,r){return p(fr,wd(e),P,r)}),cl=E(function(e,r,n,a){return{e_:r,e9:e,fg:n,fD:a}}),yd=M$,xd=Tv,Sd=$(function(e,r){if(r.$)return we(e);var n=r.a;return ue(n)}),Td=k$,Cd=function(e){return o(Td,{et:!1,fc:!1},e)},Ea=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return Y},Ld=$(function(e,r){if(r.$){var a=r.a;return we(a)}else{var n=r.a;return ue(e(n))}}),Pd=function(e){return{$:2,a:e}},zd=function(e){return{$:0,a:e}},kd=function(e){return{$:1,a:e}},Ia=$(function(e,r){return er(r)-er(e)}),Ua=x(function(e,r,n){var a=er(n);return U(er(e),a)<1&&U(a,er(r))<1}),Md=$(function(e,r){var n=function(t){return U(t,e)<0?ue(t):we(kd(r))},a=p(Ua,"0","9",r)?ue(o(Ia,"0",r)):p(Ua,"a","z",r)?ue(10+o(Ia,"a",r)):p(Ua,"A","Z",r)?ue(10+o(Ia,"A",r)):we(zd(r));return o(ga,n,a)}),ll=$(function(e,r){var n=nn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return ue(c+l*e)},o(ll,e,i))},o(Md,e,t))}),Dd=$(function(e,r){return 2<=e&&e<=36?o(ll,e,wt(r)):we(Pd(e))}),Ad=Dd(16),Bd=x(function(e,r,n){return C(tn,e,r,n,1)}),Fd=E(function(e,r,n,a){return C(tn,e,r,n,a)}),on=Yu,Vd=$(function(e,r){var n=o(on,10,e);return Je(r*n)/n}),Ed=gv,Rd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Yc(n);if(a.b&&!a.b.b){var t=a.a;return xd(_([t,t]))}else return n};return o(ae,Ed,o(ae,function(n){return o(ye,function(a){return p(yd,1,a,n)},Cd(e))},o(ae,Tt(Ea),o(ae,ye(function(n){return n.fD}),o(ae,ye(Va(Cr)),o(ae,Sd("Parsing hex regex failed"),ga(function(n){var a=o(ee,o(ae,r,o(ae,Ad,Ld(Gf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(Fd,t/255,c/255,u/255,o(Vd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Bd,t/255,c/255,u/255))}else break e;return we("Parsing ints from hex failed")})))))))}(),ha=Fr("input"),Ct=Fr("label"),Lt=Ge("name"),ul=$(function(e,r){return p(fr,M,r,e)}),jd=o(ul,_(["target","checked"]),Z),Nd=function(e){return o(ol,"change",o($a,e,jd))},Hd=function(e){return L(e,!0)},Wd=function(e){return{$:1,a:e}},Gd=$(function(e,r){return o(tl,e,Wd(r))}),Xd=o(ul,_(["target","value"]),Sn),$o=function(e){return o(Gd,"input",o($a,Hd,o($a,e,Xd)))},vl=Ge("max"),$l=Ge("min"),fl=function(e){return o(Ge,"step",e)},_a=Ge("type"),fo=Ge("value"),hi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,P,_([o(Ct,_([St(r)]),_([o(I,_([J("relative w-full")]),_([o(I,_([J("inline-block")]),_([ur(r)])),o(I,_([J("inline-block float-right")]),_([ur(pe(n))]))]))])),o(ha,_([_a("range"),o(se,"width","100%"),ma(r),Lt(r),$l(pe(a)),vl(pe(t)),fo(pe(n)),fl(pe(i)),$o(o(ae,co,o(ae,nr(42),c)))]),P)]))},Id=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ud=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,P,_([o(I,_([J("mb-2")]),_([o(Ct,_([St(e)]),_([ur(e)]))])),o(ha,_([_a("checkbox"),ma(e),Lt(e),Nd(vd(e)),bd(c)]),P)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return hi({b9:e,cl:i,cp:t,ct:fd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return hi({b9:e,cl:i,cp:t,ct:o(ae,Je,sd(e)),cP:1,cW:c});default:var c=r.a;return o(I,P,_([o(I,_([o(se,"margin-bottom","6px")]),_([o(Ct,_([St(e)]),_([ur(e)]))])),o(ha,_([_a("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ma(e),Lt(e),$o(function(l){return o($d,e,o(Id,dd,Rd(l)))}),fo(_d(c))]),P)]))}}),Jd=function(e){return o(I,_([J("p-4 border-y-[0.5px] border-white20")]),_([o(I,_([J("text-lg pb-2")]),_([ur(e.fd)])),o(I,_([J("pl-2 pr-2")]),ud(o(xt,Ud,e.av)))]))},Od=function(e){return o(I,_([J("text-xs text-white60")]),o(ee,Jd,e))},Yd=function(e){return o(I,_([J("absolute left-[104px] bottom-2 text-sm text-white40")]),_([ur("clock: "+o(el,3,an(e).bA))]))},qd=function(e){e.a;var r=e.b.T;return o(ye,function(n){return Je(60/(an(e).bA-n))},o(ye,o(ae,Uf,function(n){return n.bA}),Ea(o(Gc,59,r))))},Zd=function(e){return o(I,_([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=qd(e);if(r.$===1)return _([ur("... Fps")]);var n=r.a;return _([ur(De(n)+" Fps")])}())},Kd=function(e){return{$:0,a:e}},Qd=function(e){var r=e.b.T;return Mr(r)},em=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Mr(r)+1+Mr(n)},rm=function(e){return o(ha,_([J("absolute w-full"),_a("range"),$l(De(0)),vl(De(em(e)-1)),fo(De(Qd(e))),fl(De(1)),$o(o(ae,co,o(ae,nr(42),o(ae,Je,Kd))))]),P)},_i={$:1},nm={$:3},am={$:2},sl=function(e){return!e.b},wi=$(function(e,r){return o(lo,_([J("px-2 bg-black40"),J(r),uo(e)]),_([ur("REC")]))}),yi=$(function(e,r){return o(lo,_([J("absolute left-[60px] mx-1 px-1 bg-black40"),uo(r)]),_([o(I,_([J("w-4 h-6 fill-white80")]),_([bn(e)]))]))}),tm=function(e){var r=e.a,n=e.b.ab;return o(I,_([J("py-1")]),_([function(){switch(r.$){case 0:return o(wi,_i,"text-red-500 font-bold");case 1:return o(wi,am,"text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return sl(n)?o(I,P,P):o(yi,Or.fm,nm);default:return o(yi,Or.fl,_i)}}()]))},om=function(e){return o(I,_([J("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([rm(e),tm(e),Zd(e),Yd(e)]))},im=function(e){var r=e.a;return br(r,Aa)},cm=$(function(e,r){var n=im(r.G)?o(I,P,P):o(I,_([J("absolute pointer-events-none w-8 h-8"),o(se,"left",pe(e.fn.fT+.5*e.cM.fR)+"px"),o(se,"top",pe(-e.fn.fX+.5*e.cM.eV)+"px")]),_([o(I,_([J(e.fn.e1?"fill-black80":"fill-white40")]),_([bn(Or.fn)]))]));return o(I,P,_([n]))}),lm=$(function(e,r){var n=o(lo,_([J(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),uo(Qs),cd("Distraction Free Mode")]),_([bn(Or.f$)])),a=o(I,_([J("absolute w-8 bottom-12")]),_([o(pi,_([J("fill-twitterBlue40 hover:fill-twitterBlue"),bi("https://twitter.com/AzizErkalSelman"),gi("_blank")]),_([bn(Or.fK)]))])),t=o(I,_([J("absolute w-8 bottom-2")]),_([o(pi,_([J("fill-githubCat40 hover:fill-githubCat"),bi("https://github.com/erkal/elm-3d-playground-exploration"),gi("_blank")]),_([bn(Or.eP)]))]));return r.aL?o(I,_([J("fixed w-10 h-10 p-1")]),_([n])):o(I,P,_([o(I,_([J("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(I,_([J("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",pe(e.cM.eV-80)+"px")]),_([o(pa,ed,Od(an(r.G).ey))])),o(I,_([J("absolute bottom-0 left-10 h-20"),o(se,"width",e.cM.fR>600?"600px":pe(e.cM.fR-40)+"px")]),_([o(pa,rd,om(r.G))])),o(cm,e,r)]))}),um=x(function(e,r,n){var a=qs(n.G),t=an(n.G);return o(I,_([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(se,"width",pe(t.cM.fR)+"px"),o(se,"height",pe(t.cM.eV)+"px")]),_([o(I,_([J("fixed")]),_([o(pa,Ec(Os),o(e,t,a))])),o(I,_([ma("gui")]),_([o(lm,t,n),o(pa,Js,o(r,t,a))]))]))}),vm=We(function(e,r,n,a,t,i){var c=$(function(u,v){return L(C(Gs,r,i,u,v),mi)}),l=function(u){var v=o(Rc,n,u.e0);return L({aL:u.e0.cM.fR<500,G:o(Xs,v,a)},mi)};return vs({e$:l,fE:Ec(Us(Zf)),fL:c,fO:o(um,e,t)})}),$m=E(function(e,r,n,a){return _e(vm,e,r,n,a,$(function(t,i){return o(I,P,P)}),x(function(t,i,c){return c}))}),fm=function(e){return{}},sm=x(function(e,r,n){return{av:n,e2:r,fd:e}}),dl=ar,dm=function(e){return p(zn,$(function(r,n){var a=r.a,t=r.b;return p(mn,a,t,n)}),dl,e)},mm=x(function(e,r,n){return p(sm,e,r,dm(n))}),xi=mm,yr=x(function(e,r,n){var a=r.a,t=r.b;return L(e,o(Uc,L(a,t),n))}),pm=x(function(e,r,n){var a=r.a,t=r.b;return L(e,o(Jc,L(a,t),n))}),bm=_([p(xi,"Parameters",!0,_([p(pm,"number of blocks",L(10,60),25),p(yr,"frequency",L(1,20),10),p(yr,"minWidth",L(0,45),35),p(yr,"maxWidth",L(10,50),37),p(yr,"period",L(.5,10),5)])),p(xi,"Colors and light",!0,_([p(yr,"lux",L(2,5),5),p(yr,"intensity above",L(0,300),0),p(yr,"intensity below",L(0,300),0)]))]),gm=$(function(e,r){return r}),hm=rv,mr=cv,_m=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fX-n.fX,c=a.fT-n.fT,l=o(Se,O(c),o(Se,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=mr(s*s+v*v+u*u);return re({fT:s/d,fX:v/d,c$:u/d})}else return Y}),Qn=function(e){return e},so=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c$-a.c$*n.fX,fX:a.c$*n.fT-a.fT*n.c$,c$:a.fT*n.fX-a.fX*n.fT}}),ea=function(e){var r=e,n=o(Se,O(r.fT),o(Se,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=mr(i*i+t*t+a*a);return re({fT:i/c,fX:t/c,c$:a/c})}else return Y},wa=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),wm=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c$*n.c$}),ml=$(function(e,r){var n=e,a=r;return U(a,n)>0}),ym=$(function(e,r){var n=e,a=r;return U(a,n)<0}),xm=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Sm=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c$*n.c$;return{fT:n.fT*t,fX:n.fX*t,c$:n.c$*t}}),Tm=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},Ze=0,pl={fT:0,fX:0,c$:0},Cm=x(function(e,r,n){return o(Tt,function(a){var t=o(xm,o(Sm,a,r),r);return o(Tt,function(i){var c=o(so,r,e),l=o(wm,n,c),u=o(ml,Ze,l)?c:o(ym,Ze,l)?Tm(c):pl;return o(ye,function(v){return B(a,i,v)},ea(u))},ea(t))},ea(e))}),Lm=function(e){var r=e,n=O(r.c$),a=O(r.fX),t=O(r.fT);if(U(t,a)<1)if(U(t,n)<1){var i=mr(r.c$*r.c$+r.fX*r.fX);return{fT:0,fX:-r.c$/i,c$:r.fX/i}}else{var i=mr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}else if(U(a,n)<1){var i=mr(r.c$*r.c$+r.fT*r.fT);return{fT:r.c$/i,fX:0,c$:-r.fT/i}}else{var i=mr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}},mo=function(e){var r=Lm(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c$-i.c$*a.fX,fX:i.c$*a.fT-i.fT*a.c$,c$:i.fT*a.fX-i.fX*a.fT};return L(r,c)},Jr=function(e){var r=e;return r},vr=function(e){return e},Pm=$(function(e,r){var n=mo(e),a=n.a,t=n.b;return vr({cu:r,cZ:a,c_:t,c0:e})}),zm=function(e){var r=o(wa,e.aR,e.dc),n=Jr(e.ee),a=o(so,r,n),t=p(Cm,r,n,a);if(t.$){var v=ea(r);if(v.$){var d=mo(e.ee),m=d.a,f=d.b;return vr({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Pm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return vr({cu:e.dc,cZ:u,c_:l,c0:c})}},Dn={fT:0,fX:0,c$:0},km=function(e){return{$:0,a:e}},Fe=function(e){var r=e;return O(r)},ra=function(e){var r=e;return .5*r},Mm=ev,Dm=function(e){var r=e;return Mm(r)},Am=function(e){var r=ra(Fe(e.ef)),n=Dm(r);return{cF:km(n),cX:e.cX}},cr=function(e){return e},po=cr({fT:0,fX:1,c$:0}),gr=function(e){return e},Bm=function(e){var r=e.aR,n=e.dc,a=e.ee;return Am({ef:gr(2*hm(.5)),cX:zm({dc:Qn(n),aR:Qn(r),ee:o(nr,po,o(_m,Dn,Qn(a)))})})},Ar=Ku,Fm=$(function(e,r){return(r-Fc(r/e)*e)/e}),Kr=Zu,Vm=function(e){return 2*Kr*e},Pt=E(function(e,r,n,a){return e+(r-e)*(1+Ar(Vm(o(Fm,n,a))))/2}),Em=function(e){return Bm({dc:{fT:10,fX:C(Pt,-20,20,20,e.bA),c$:145},aR:{fT:0,fX:0,c$:0},ee:{fT:0,fX:1,c$:0}})},bo=function(e){return e},bl=x(function(e,r,n){return U(n,e)<0?e:U(n,r)>0?r:n}),Rm=function(e){var r=e;return r},jm=function(e){var r=p(bl,1667,25e3,Rm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return bo({fT:n,fX:a})},Nm=function(e){return e},Hm=function(e){return{$:0,a:e}},Wm=Hm,Gm={$:3},Xm=Gm,Im=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Um=Im,Jm=$(function(e,r){return r.b?p(fr,A,r,e):e}),Ne=function(e){return p(fr,Jm,P,e)},go=$(function(e,r){return Ne(o(ee,e,r))}),Om=function(e){return{$:1,a:e}},Ym=Om,qm=function(e){return o(Pn,"height",De(e))},Zm=function(e){return a$(c$(e))},Km=Zm,Qm=function(e){return{$:2,a:e}},e0=Qm,r0=function(e){return o(Sr,"",e)},n0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Je(l*1e3)/1e3},c=function(l){return Je(l*1e4)/100};return r0(_(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},a0=$(function(e,r){switch(r.$){case 0:return o(tf,e,r);case 1:return o(of,e,r);case 2:return o(cf,e,r);case 3:return o(lf,e,r);case 4:return o(uf,e,r);default:return o(vf,e,r)}}),t0=$(function(e,r){switch(r.$){case 0:return o(B$,e,r);case 1:return o(F$,e,r);case 2:return o(V$,e,r);case 3:return o(E$,e,r);case 4:return o(R$,e,r);case 5:return o(j$,e,r);case 6:return o(N$,e,r);case 7:return o(H$,e,r);default:return W$(e)}}),o0=x(function(e,r,n){return p(af,e,r,n)}),Si=function(e){var r=e;return r},cn=wf,Ja=C(cn,1,1,1,1),Oe=x(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),i0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),c0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(i0,n*a/t,n,n*(1-a-t)/t)}),An=mf,l0=function(e){var r=e.a,n=e.b,a=e.c;return p(An,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ra=$(function(e,r){return l0(o(c0,e,r))}),gl=$(function(e,r){return{dk:br(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bW,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bW,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bW,bW:e.bW*r.bW}}),Ke=Lf,u0=function(e){return Ke({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},Oa=ge(function(e,r,n,a,t){var i=a.dk?1:-1,c=C(cn,a.bW,a.bW,a.bW,i);return _e(t,e,c,u0(a),a.dk,r,n)}),hl=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(gl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(Oa,e,r,n,a,g),i.M);return{M:b,U:i.U,fx:i.fx};case 3:var w=t.b,y=o(A,S(Oa,e,r,n,a,w),i.U);return{M:i.M,U:y,fx:i.fx};case 2:var h=t.a,T=o(A,S(Oa,e,r,n,a,h),i.fx);return{M:i.M,U:i.U,fx:T};default:var k=t.a;return p(zn,C(hl,e,r,n,a),i,k)}}),v0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),_l=v0,ho=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),$0=function(e){var r=e.Z,n=e.W,a=e.V;return C(ho,518,r,n,a)},f0=$(function(e,r){return{$:6,a:e,b:r}}),s0=f0,wl=_([$0({V:1,W:0,Z:!1}),C(_l,!1,!1,!1,!1),o(s0,0,1)]),Qr=519,_o=8,yl=15,Yr=7681,d0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=A$,m0=$(function(e,r){return{$:0,a:e,b:r}}),p0=m0({c8:1,dh:0,dQ:5}),Me=sf,b0=p0(_([{dY:o(Me,-1,-1)},{dY:o(Me,1,-1)},{dY:o(Me,-1,1)},{dY:o(Me,1,1)}])),g0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},h0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},wo=x(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bl),o(ae,l(v.a8),o(ae,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(h0,a,t,i)))}),yo=function(e){return p(wo,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},xo=function(e){return S(ne,_([yo(e),C(_l,!1,!1,!1,!1)]),g0,d0,b0,{})},_0=xo({a8:Yr,ci:0,cH:_o,bl:Qr,cY:yl,bt:Yr,bu:Yr}),w0=516,Ti=5386,xe=7680,y0=function(e){return o(on,2,e+4)},xl=function(e){return xo({a8:xe,ci:yl,cH:_o,bl:w0,cY:y0(e),bt:Ti,bu:Ti})},x0=x(function(e,r,n){return Ne(_([p(Oe,e,n,wl),_([xl(r),_0])]))}),S0=$(function(e,r){return Ne(o(zc,x0(e),r))}),T0=function(e){var r=e.Z,n=e.W,a=e.V;return C(ho,513,r,n,a)},C0=T0({V:1,W:0,Z:!0}),L0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},P0=function(e){var r=e.bU,n=e.bF,a=e.by,t=e.bv,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return L0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},z0=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ci=$(function(e,r){var n=e,a=r;return p(z0,32774,n,a)}),k0=1,Li=771,M0=770,So=P0({bv:0,aH:o(Ci,k0,Li),by:0,bB:o(Ci,M0,Li),bF:0,bU:0}),Wr=_([C0,So]),D0=function(e){var r=e;return r.dJ},A0=function(e){var r=e;return r.dK},Sl=function(e){var r=e;return r.dL},B0=function(e){var r=e;return r.dM},F0=function(e){var r=e;return r.dN},Tl=function(e){var r=e;return r.dO},lr=$(function(e,r){var n=e,a=r;return a-n}),Cl=function(e){return B(o(lr,B0(e),D0(e)),o(lr,F0(e),A0(e)),o(lr,Tl(e),Sl(e)))},ln=function(e){var r=e;return r.cu},Pi=function(e){var r=e;return ln(r)},V0=function(e){return e},E0=function(e){return vr({cu:V0({fT:e.H,fX:e.I,c$:e.J}),cZ:cr({fT:e.q,fX:e.r,c$:e.s}),c_:cr({fT:e.t,fX:e.u,c$:e.v}),c0:cr({fT:e.w,fX:e.x,c$:e.y})})},Ya=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c$*v.c$,fX:a.fT*l.fT+a.fX*l.fX+a.c$*l.c$,c$:a.fT*i.fT+a.fX*i.fX+a.c$*i.c$}}),Ll=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fT:c*g.fT+l*g.fX+u*g.c$,fX:c*m.fT+l*m.fX+u*m.c$,c$:c*s.fT+l*s.fX+u*s.c$}}),Vr=function(e){var r=e;return r.cZ},Er=function(e){var r=e;return r.c_},Rr=function(e){var r=e;return r.c0},Pl=$(function(e,r){return{cu:o(Ll,e,ln(r)),cZ:o(Ya,e,Vr(r)),c_:o(Ya,e,Er(r)),c0:o(Ya,e,Rr(r))}}),zt=x(function(e,r,n){return{fT:e,fX:r,c$:n}}),ya=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Se,n,a)}),na=$(function(e,r){return U(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(na,n,a)}),R0=$(function(e,r){var n=ya(r),a=ya(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),He=function(e){var r=e;return r},j0=function(e){var r=e;return B(r.fT,r.fX,r.c$)},gn=$(function(e,r){var n=e,a=r;return a+n}),N0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(Fe(a)),c=ra(Fe(n)),l=ra(Fe(t)),u=j0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(gn,c,v),dK:o(gn,i,s),dL:o(gn,l,d),dM:o(lr,c,v),dN:o(lr,i,s),dO:o(lr,l,d)}}),zi=E(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fX*r,s=t.fT*r,d=He(Rr(e)),m=O(l*d.fT)+O(c*d.fX)+O(i*d.c$),f=He(Er(e)),g=O(l*f.fT)+O(c*f.fX)+O(i*f.c$),b=He(Vr(e)),w=O(l*b.fT)+O(c*b.fX)+O(i*b.c$),y=o(N0,B(w,g,m),o(Ll,e,p(zt,s,v,u)));if(a.$)return re(y);var h=a.a;return re(o(R0,h,y))}),kt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(zi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(zi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(kt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Pl,E0(v),e),m=r*v.bW,f=e,g=r,b=C(kt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),jr=pf,Nr=bf,Hr=gf,zl=function(e){return{$:4,a:e}},H0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Bn=function(e){return zl(o(H0,e,P))},W0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bW:1},G0=function(e){var r=e;return r},ki=xo({a8:Yr,ci:0,cH:_o,bl:Qr,cY:255,bt:Yr,bu:Yr}),X0=function(e){var r=e,n=o(Se,O(r.fT),o(Se,O(r.fX),O(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=mr(i*i+t*t+a*a);return c*n}else return Ze},ze={by:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fT:0,fX:0,c$:0},Ee=$(function(e,r){var n=e,a=r;return Ke({ds:n.fT,dt:n.bU,du:a.fT,dv:a.bU,dw:n.fX,dx:n.bF,dy:a.fX,dz:a.bF,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),sn=L({bd:o(Ee,ze,ze),bK:o(Ee,ze,ze),bL:o(Ee,ze,ze),bM:o(Ee,ze,ze)},C(cn,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Mi=function(e){var r=e;return-r},kl=514,Ml=function(e){var r=e.Z,n=e.W,a=e.V;return C(ho,515,r,n,a)},Dl=240,I0=_([Ml({V:1,W:0,Z:!0}),yo({a8:xe,ci:Dl,cH:0,bl:kl,cY:0,bt:xe,bu:xe}),So]),U0=$(function(e,r){var n=e,a=r.fe,t=r.eO,i=r.en,c=Fe(a),l=c,u=Fe(t),v=u,s=n.cF;if(s.$){var m=s.a;return ht(v)?Ke({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):Ke({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return ht(v)?Ke({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):Ke({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Gn=$(function(e,r){return(1&e>>r)===1?0:1}),J0=function(e){return _([Ml({V:1,W:0,Z:!0}),yo({a8:xe,ci:Dl,cH:e,bl:kl,cY:0,bt:xe,bu:xe}),So])},O0=x(function(e,r,n){return Ne(o(ee,function(a){var t=a<<4,i=C(cn,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Oe,e,L(r,i),J0(t))},o(Dr,1,o(on,2,n)-1)))}),xa=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},qr=function(e){var r=e;return r},Y0=Pf,Di=function(e){var r=e;return xa(Rr(r))},Al=cr({fT:1,fX:0,c$:0}),Bl=Al,To=po,Co=cr({fT:0,fX:0,c$:1}),q0=Co,Z0={cu:Dn,cZ:Bl,c_:To,c0:q0},Fn=function(e){var r=e;return r},K0=function(e){var r=Fn(ln(e)),n=He(Rr(e)),a=He(Er(e)),t=He(Vr(e));return Ke({ds:t.fT,dt:a.fT,du:n.fT,dv:r.fT,dw:t.fX,dx:a.fX,dy:n.fX,dz:r.fX,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},Q0=$(function(e,r){var n=r;return K0(o(Pl,n,e))}),ep=function(e){return o(Q0,Z0,e)},rp=function(e){var r=e;return r.cX},np=function(e){var r=e;return Vr(r)},ap=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),tp=function(e){var r=e;return Er(r)},op=function(e){var r=rp(e.es),n=vr({cu:Pi(r),cZ:np(r),c_:tp(r),c0:xa(Di(r))}),a=Bn(e.aP),t=a,i=C(kt,n,1,Y,_([t]));if(i.$===1)return P;var c=i.a,l=ep(r),u=o(ie,.99,o(ce,Fe(e.ex),Mi(Sl(c)))),v=Cl(c),s=v.a,d=v.b,m=v.c,f=X0(p(ap,s,d,m)),g=o(ie,1.01,o(gn,f,Mi(Tl(c)))),b=o(U0,e.es,{en:e.en,eO:g,fe:u}),w=Y0(b).dH,y=w?He(xa(Di(r))):qr(Pi(r)),h=function(){var te=e.fJ;switch(te.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var de=te.a;return L(3,de);case 4:var de=te.a;return L(4,de);default:return L(5,0)}}(),T=h.a,k=h.b,H=e.eM,j=H,R=o(Ra,j,e.fQ),N=R,W=Ke({ds:0,dt:y.fT,du:jr(N),dv:e.d8,dw:0,dx:y.fX,dy:Nr(N),dz:G0(f),dA:0,dB:y.c$,dC:Hr(N),dD:T,dE:0,dF:w,dG:0,dH:k}),F=_e(hl,W,l,b,W0,t,{M:P,U:P,fx:P}),q=e.e8;switch(q.$){case 0:var K=q.a;return Ne(_([p(Oe,F.M,L(K,Ja),Wr),p(Oe,F.U,sn,Wr)]));case 1:var K=q.a;return Ne(_([p(Oe,F.M,sn,Wr),_([ki]),p(Oe,F.fx,K.bd,wl),_([xl(0)]),p(Oe,F.M,L(K,Ja),I0),p(Oe,F.U,sn,Wr)]));default:var oe=q.a,ve=q.b;return Ne(_([p(Oe,F.M,L(ve,Ja),Wr),_([ki]),o(S0,F.fx,oe),p(O0,F.M,ve,Mr(oe)),p(Oe,F.U,sn,Wr)]))}},ip=function(e){return o(Pn,"width",De(e))},cp=$(function(e,r){var n=_([Ym(1),e0(0),Wm(!0),C(Um,0,0,0,0)]),a=function(){var T=e.el;switch(T.$){case 0:return B(n,"0",1);case 1:return B(o(A,Xm,n),"1",1);default:var k=T.a;return B(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Si(v),d=o(se,"height",De(s)+"px"),m=Si(u),f=m/s,g=o(go,function(T){return op({en:f,es:e.es,ex:e.ex,aP:T.aP,eM:T.eM,e8:T.e8,d8:c,fJ:T.fJ,fQ:T.fQ})},r),b=o(se,"width",De(m)+"px"),w=e.aI,y=w,h=n0(y);return p(Km,"div",_([o(se,"padding","0px"),b,d]),_([L(i,p(o0,t,_([ip(Je(m*c)),qm(Je(s*c)),b,d,o(se,"display","block"),o(se,"background-color",h)]),g))]))}),lp=function(e){return{$:2,a:e}},up=function(e){return lp(e)},vp=function(e){return o(cp,{el:up(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},_([{aP:e.aP,eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ}]))},Ai=function(e){return e},Lr=function(e){return e},$p=function(e){var r=e;return r},Lo=function(e){var r=e;return $p(r.eo)},Fl=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),fp=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Vl=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),El=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),sp=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),dp=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),mp=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Po=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(mp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Fl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(fp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(Vl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(dp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(El,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(sp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},zo={$:0},pp=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=ya(c(u)),d=o(fe,s.dM,e),m=o(ce,s.dJ,r),f=o(fe,s.dN,n),g=o(ce,s.dK,a),b=o(fe,s.dO,t),w=o(ce,s.dL,i),y=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=h;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),bp=x(function(e,r,n){var a=ya(e(r));return Pa(pp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),qa=$(function(e,r){var n=e,a=r;return U(a,n)<1}),Rl=function(e){return o(qa,e.dJ,e.dM)&&o(qa,e.dK,e.dN)&&o(qa,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},Tn=function(e){var r=e;return r},Pr=function(e){var r=e;return r.fT},zr=function(e){var r=e;return r.fX},kr=function(e){var r=e;return r.c$},jl=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Pr(n),c=zr(n),l=kr(n),u=Pr(a),v=zr(a),s=kr(a),d=Pr(t),m=zr(t),f=kr(t);return Rl({dJ:o(ce,i,o(ce,u,d)),dK:o(ce,c,o(ce,v,m)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,d)),dN:o(fe,c,o(fe,v,m)),dO:o(fe,l,o(fe,s,f))})},Nl=hf,Ce=function(e){return Nl(Fn(e))},Hl=function(e){var r=e;return r},ja=function(e){return Nl(Hl(e))},Wl=function(e){return e},gp=$(function(e,r){var n=e,a=r,t=o(Se,O(a.fT),o(Se,O(a.fX),O(a.c$)));if(t){var i=a.c$/t,c=a.fX/t,l=a.fT/t,u=mr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c$:n*i/u}}else return pl}),hp=gp(Wl(1)),Gl=x(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return hp(o(so,a,t))}),_p=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=ja(p(Gl,n,a,t));return B({o:i,dY:Ce(n)},{o:i,dY:Ce(a)},{o:i,dY:Ce(t)})},wp=$(function(e,r){return{$:2,a:e,b:r}}),Xl=wp({c8:3,dh:0,dQ:4}),yp=function(e){if(e.b){var r=e.a,n=e.b,a=Xl(o(ee,_p,e)),t=p(bp,jl,r,n);return C(Fl,t,e,a,0)}else return zo},Ve=x(function(e,r,n){return B(e,r,n)}),me=x(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),Il=function(){var e=Lr(1),r=Lr(1),n=Lr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),v=o(ie,.5,r),s=p(me,i,v,a),d=p(me,i,v,l),m=o(ie,.5,n),f=p(me,m,t,a),g=p(me,m,v,a),b=p(me,m,t,l),w=p(me,m,v,l);return Po(yp(_([p(Ve,c,g,f),p(Ve,c,s,g),p(Ve,u,b,w),p(Ve,u,w,d),p(Ve,f,g,w),p(Ve,f,w,b),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,b),p(Ve,c,b,u),p(Ve,s,w,g),p(Ve,s,d,w)])))}(),Xn={$:0},xp=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Sp=x(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ja(p(Gl,u,l,c)),s={o:v,dY:Ce(u)},d={o:v,dY:Ce(l)},m={o:v,dY:Ce(c)};return o(A,s,o(A,d,o(A,m,n)))}),ko=function(e){var r=e;return r.D},Tp=E(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return re(p(e,t,i,c))}),Mt=4294967295>>>32-yn,Dt=Gu,Cp=x(function(e,r,n){e:for(;;){var a=Mt&r>>>e,t=o(Dt,a,n);if(t.$){var v=t.a;return o(Dt,Mt&r,v)}else{var i=t.a,c=e-yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Lp=function(e){return e>>>5<<5},Pp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||U(e,n)>-1?Y:U(e,Lp(n))>-1?re(o(Dt,Mt&e,i)):re(p(Cp,a,e,t))}),Mo=function(e){var r=e;return r.ah},Za=$(function(e,r){return o(Pp,e,Mo(r))}),zp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(Tp,x(function(c,l,u){return B(c,l,u)}),o(Za,a,e),o(Za,t,e),o(Za,i,e))};return o(Va,r,ko(e))},kp=x(function(e,r,n){e:for(;;){var a=o(no,Be,e),t=a.a,i=a.b;if(U(bt(t),Be)<0)return o(Vc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Bc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Do=function(e){return e.b?p(kp,e,P,0):Dc},Mp=x(function(e,r,n){return e(r(n))}),Dp=$(function(e,r){return!o(Oc,o(Mp,$s,e),r)}),Ap=$(function(e,r){return p(fr,$(function(n,a){return e(n)?o(A,n,a):a}),P,r)}),Bp=function(e){var r=e.a;return r},Ul=$(function(e,r){var n=Bp(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&U(i,n)<0&&c>=0&&U(c,n)<0&&l>=0&&U(l,n)<0};return o(Dp,a,r)?{D:r,ah:e}:{D:o(Ap,a,r),ah:e}}),Fp=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=Fp({c8:1,dh:3,dQ:4}),aa=$(function(e,r){var n=qr(r),a=qr(e);return L(B(a.fT,a.fX,a.c$),B(n.fT,n.fX,n.c$))}),Bi=p(An,0,0,0),Ka=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Fa,o(aa,e,r),t);if(v.$){var d={o:Bi,dY:Ce(r)},m={o:Bi,dY:Ce(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),Vp=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,h=v,T=a+3,k=_e(Ka,s,m,f,b,r,_e(Ka,d,s,g,f,r,_e(Ka,m,d,b,g,r,t)));e=w,r=y,n=h,a=T,t=k;continue e}else{var H=t,j=H.a,R=H.b;return L(j,Ae(R))}}),Ep=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(mn,o(aa,m,s),f,p(mn,o(aa,s,d),g,p(mn,o(aa,d,m),b,t))),y=o(A,B(b,g,f),a),h=e,T=v,k=n+3,H=y,j=w;e=h,r=T,n=k,a=H,t=j;continue e}else return B(a,t,n)}),xr=x(function(e,r,n){var a=zp(n),t=p(fr,Sp(r),P,a),i=S(Ep,r,a,0,P,dl),c=i.a,l=i.b,u=i.c,v=S(Vp,r,l,a,0,B(c,P,u)),s=v.a,d=v.b,m=sl(d)?t:le(t,d);return p(xp,e,o(Ul,Do(m),s),o(Vn,m,s))}),At=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Dr,0,Mr(e)-1)),ah:Do(Ne(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},Jl=function(e){switch(e.$){case 0:return Xn;case 1:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(xr,a,Cr,At(n));case 2:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(xr,a,Cr,At(n));case 3:var a=e.a,t=e.b;return p(xr,a,Cr,t);case 4:var a=e.a,t=e.b;return p(xr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(xr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(xr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(xr,a,function(i){return i.dY},t);case 8:return Xn;case 9:return Xn;default:return Xn}},Fi=Jl(Il),Ao=function(e){var r=e;return r.aK},Ol={$:0},z=Ol,be=$(function(e,r){return{$:1,a:e,b:r}}),Rp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},jp=1029,Np=function(e){return{$:5,a:e}},Yl=function(e){var r=e;return Np(r)},Hp=Yl(jp),Wp=1028,Gp=Yl(Wp),Le=x(function(e,r,n){return r===1?e?o(A,Hp,n):o(A,Gp,n):n}),ql={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qa=E(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(Le,l,a,d),ql,Rp,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Bo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Zl={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=E(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){return S(ne,p(Le,l,a,d),Zl,Bo,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Kl=$(function(e,r){return{$:3,a:e,b:r}}),Xp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Ql={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ip=E(function(e,r,n,a){return o(Kl,n,Q(function(t,i,c,l,u,v,s,d){return S(ne,d,Ql,Xp,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),Fo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},En=function(e){var r=e;return r},Na=_f,or=ge(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(Le,u,t,m),Zl,Fo,a,{aN:o(Na,En(r),e),b:l,c,d:s,e:i,f:v})}))}),Up={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Jp=ge(function(e,r,n,a,t){return o(Kl,a,Q(function(i,c,l,u,v,s,d,m){return S(ne,m,Ql,Up,t,{aN:o(Na,En(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),eu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},ru={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},In=E(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Le,l,a,d),ru,eu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),nu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},au={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Op=We(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Le,v,i,f),au,nu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ck:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),tu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Yp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(be,u,Q(function(d,m,f,g,b,w,y,h){var T=y.a,k=y.b;return S(ne,p(Le,g,s,h),au,tu,v,{b0:e,b2:r,b3:i,b4:a,P:k,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,co:t,b:f,c:m,aW:c,d:w,cL:n,e:d,a$:l,f:b})}))}}}}}}}}}}},ou={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},Un=We(function(e,r,n,a,t,i){return o(be,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Le,v,i,f),ru,ou,t,{b$:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),qp=function(e){return{$:0,a:e}},Vi=$(function(e,r){return{$:1,a:e,b:r}}),hn=$(function(e,r){if(r.$){var n=r.a.C;return L(n,1)}else return r.a,L(e,0)}),Zp=function(e){return C(cn,jr(e),Nr(e),Hr(e),1)},Vo=C(cn,0,0,0,0),ta=$(function(e,r){if(r.$){var a=r.a.C;return L(a,Vo)}else{var n=r.a;return L(e,Zp(n))}}),iu=$(function(e,r){var n=L(e,r);if(n.a.$){var t=n.a.a.C;return o(Vi,L(t,Vo),o(hn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Vi,o(ta,t,e),o(hn,t,r))}else{var a=n.a.a;return n.b.a,qp(a)}}),Kp=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Qp=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),e3=function(e){return o(Me,e,1)},Bt=o(Me,0,0),Gr=$(function(e,r){if(r.$){var a=r.a.C;return L(a,Bt)}else{var n=r.a;return L(e,e3(n))}}),cu=E(function(e,r,n,a){var t=C(Qp,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Jn,L(u,Vo),o(Gr,u,r),o(Gr,u,n),o(hn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Jn,o(ta,u,e),L(u,Bt),o(Gr,u,n),o(hn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Jn,o(ta,u,e),o(Gr,u,r),L(u,Bt),o(hn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Jn,o(ta,u,e),o(Gr,u,r),o(Gr,u,n),L(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Kp,i,c,l)}}),r3={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},et=ge(function(e,r,n,a,t){return o(be,n,Q(function(i,c,l,u,v,s,d,m){return S(ne,p(Le,u,t,m),ql,r3,a,{bZ:En(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),lu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},n3=E(function(e,r,n,a){return o(be,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ne,p(Le,l,a,d),lu,nu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),a3=Rt(function(e,r,n,a,t,i,c,l,u){return o(be,c,Q(function(v,s,d,m,f,g,b,w){var y=b.a,h=b.b;return S(ne,p(Le,m,u,w),lu,tu,l,{b0:e,b2:r,b3:i,b4:a,P:h,bd:y.bd,bK:y.bK,bL:y.bL,bM:y.bM,co:t,b:d,c:s,aW:e,d:g,cL:n,e:v,a$:0,f})}))}),Cn=x(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),t3=function(e){var r=e;return p(Cn,r.dM,r.dJ,.5)},o3=function(e){var r=e;return p(Cn,r.dN,r.dK,.5)},i3=function(e){var r=e;return p(Cn,r.dO,r.dL,.5)},c3=function(e){return p(me,t3(e),o3(e),i3(e))},G=function(e){var r=Cl(e),n=r.a,a=r.b,t=r.c;return{ev:Fn(c3(e)),eR:n/2,eS:a/2,eT:t/2}},Eo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(Qa,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(Qa,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(Qa,l,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(Ip,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(et,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(et,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(et,l,v,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Jp,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(iu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,h=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(n3,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return _e(Op,b,y,h,G(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(In,m,G(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(In,m,G(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(In,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(In,m,G(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,k=e.c,H=e.d,j=e.e,R=C(cu,T,k,H,j);if(R.$){var q=R.a,K=q.a,oe=q.b,ve=R.b,te=ve.a,de=ve.b,Pe=R.c,Te=Pe.a,sr=Pe.b,dr=R.d,y=dr.a,h=dr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Ru(a3,K,oe,te,de,Te,sr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Yp(K)(oe)(te)(de)(Te)(sr)(y)(h)(G(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=R.a,W=R.b,F=R.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return _e(Un,N,W,F,G(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return _e(Un,N,W,F,G(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return _e(Un,N,W,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return _e(Un,N,W,F,G(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),rt=function(e){var r=e;return r.fT},nt=function(e){var r=e;return r.fX},at=function(e){var r=e;return r.c$},l3=function(e){var r=e,n=at(r.c0),a=nt(r.c0),t=rt(r.c0),i=at(r.c_),c=nt(r.c_),l=rt(r.c_),u=at(r.cZ),v=nt(r.cZ),s=rt(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},u3=function(e){var r=Fn(ln(e)),n=He(Rr(e)),a=He(Er(e)),t=He(Vr(e));return{dk:l3(e),q:t.fT,r:t.fX,s:t.c$,t:a.fT,u:a.fX,v:a.c$,w:n.fT,x:n.fX,y:n.c$,H:r.fT,I:r.fX,J:r.c$,bW:1}},Xr=$(function(e,r){return{$:5,a:e,b:r}}),uu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(gl,a,e);return o(Xr,i,t);case 1:return o(Xr,e,n);case 3:return o(Xr,e,n);case 2:return o(Xr,e,n);default:return o(Xr,e,n)}}),vu=$(function(e,r){return o(uu,u3(e),r)}),Ha=function(e){return{$:2,a:e}},v3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fT:n*i.fT,fX:a*i.fX,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),$3=xf,f3=yf,Ei=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=f3(a),g=f.fT,b=f.fX,w=f.c$,y=f.ei,h=$3({ei:y,fT:g*s,fX:b*d,c$:w*m});return Pa(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Ft=$(function(e,r){switch(r.$){case 0:return Ol;case 5:var n=r.a,a=r.b;return o(Xr,n,o(Ft,e,a));case 1:var t=r.a,i=r.b;return o(be,o(v3,e,t),o(Ei,e,i));case 3:return r;case 2:var i=r.a;return Ha(o(Ei,e,i));default:var c=r.a;return zl(o(ee,Ft(e),c))}}),Ro=$(function(e,r){var n=r;return o(Ft,e,n)}),jo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},$u=7683,fu=7682,s3=p(wo,{ci:0,cH:0,cY:15},{a8:xe,bl:Qr,bt:xe,bu:$u},{a8:xe,bl:Qr,bt:xe,bu:fu}),d3=p(wo,{ci:0,cH:0,cY:15},{a8:xe,bl:Qr,bt:xe,bu:fu},{a8:xe,bl:Qr,bt:xe,bu:$u}),No=$(function(e,r){return e?o(A,d3,r):o(A,s3,r)}),m3={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},p3=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return S(ne,o(No,i,v),m3,jo,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return Y},Sa=function(e){var r=p3(e);if(r.$)return z;var n=r.a;return Ha(n)},b3=E(function(e,r,n,a){var t=o(Eo,n,Il),i=function(){var s=L(e,r);return s.a?s.b?Bn(_([t,Sa(Fi)])):t:s.b?Sa(Fi):z}(),c=Ao(a),l=c.a,u=c.b,v=c.c;return o(vu,Lo(a),o(Ro,B(l,u,v),i))}),g3=$(function(e,r){return C(b3,!0,!0,e,r)}),Vt=function(e){return{$:0,a:e}},su=$(function(e,r){return{$:0,a:e,b:r}}),h3=function(e){var r=vo(e),n=r.cG,a=r.b7,t=r.b1;return p(An,n,a,t)},_3=function(e){return o(su,0,Vt(h3(e)))},w3=function(e){var r=e;return r.k},_n=function(e){var r=e;return Ar(r)},y3=$(function(e,r){var n=r;return n/e}),en=Qu,Ri=function(e){var r=e;return{fT:Ar(r),fX:en(r)}},x3=$(function(e,r){var n=e.dY,a=e.o;return o(A,{o:ja(a),dY:Ce(n)},r)}),S3=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Hr(l.dY),s=Nr(l.dY),d=jr(l.dY),m=o(na,e,d),f=o(Se,r,d),g=o(na,n,s),b=o(Se,a,s),w=o(na,t,v),y=o(Se,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=y,c=h;continue e}else return Rl({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),du=$(function(e,r){var n=Hr(e.dY),a=Nr(e.dY),t=jr(e.dY);return jt(S3,t,t,a,a,n,n,r)}),T3=function(e){var r=p(Sc,x3,P,Mo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,ko(e)),i=o(du,n,a);return C(Vl,i,e,t,0)}else return zo},mu=cr({fT:0,fX:0,c$:-1}),ji=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c$:a.fT*l.c$+a.fX*i.c$}}),Ta=function(e){var r=e;return en(r)},Et=function(e){return gr(2*Kr*e)},C3=Cr,Ni=C3({cu:Dn,cZ:Bl,c_:To}),pu=function(){var e=72,r=o(y3,e,Et(1)),n=Lr(1),a=Jr(Co),t=Jr(mu),i=Lr(1),c=o(ie,.5,i),l=p(me,Ze,Ze,c),u=o(ie,-.5,i),v=p(me,Ze,Ze,u),s=function(f){var g=o(ie,f,r),b=Jr(o(ji,Ni,Ri(g))),w=o(ie,_n(g),n),y=o(ie,Ta(g),n),h=p(me,w,y,c),T=p(me,w,y,u),k=o(ba,e,f+1),H=o(ie,k,r),j=Jr(o(ji,Ni,Ri(H))),R=o(ie,_n(H),n),N=o(ie,Ta(H),n),W=p(me,R,N,u),F=p(me,R,N,c);return _([B({o:t,dY:v},{o:t,dY:W},{o:t,dY:T}),B({o:b,dY:T},{o:j,dY:W},{o:j,dY:F}),B({o:b,dY:T},{o:j,dY:F},{o:b,dY:h}),B({o:a,dY:l},{o:a,dY:h},{o:a,dY:F})])},d=o(ee,s,o(Dr,0,e-1)),m=At(Ne(d));return Po(T3(m))}(),Hi=Jl(pu),L3=function(e){var r=e;return r.eE},P3=function(e){var r=e;return r.cu},z3=function(e){var r=L3(e),n=mo(r),a=n.a,t=n.b;return vr({cu:P3(e),cZ:a,c_:t,c0:r})},k3=function(e){var r=e;return r.e6},M3=function(e){var r=e;return r.fp},D3=E(function(e,r,n,a){var t=z3(w3(a)),i=o(Eo,n,pu),c=function(){var d=L(e,r);return d.a?d.b?Bn(_([i,Sa(Hi)])):i:d.b?Sa(Hi):z}(),l=M3(a),u=l,v=k3(a),s=v;return o(vu,t,o(Ro,B(u,u,s),c))}),A3=$(function(e,r){return C(D3,!0,!0,e,r)}),Wi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Gi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},dn=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=qr(n),c=qr(a),l=qr(t);return Ke({ds:i.fT,dt:c.fT,du:l.fT,dv:0,dw:i.fX,dx:c.fX,dy:l.fX,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},On=Xl(_([B({cS:0},{cS:1},{cS:2})])),B3=$(function(e,r){var n=jl(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(be,a,Q(function(h,T,k,H,j,R,N,W){return S(ne,p(Le,H,0,W),Wi,Bo,On,{aw:t,b:k,c:T,d:R,e:h,bq:dn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(be,a,Q(function(h,T,k,H,j,R,N,W){return S(ne,p(Le,H,0,W),Wi,Fo,On,{aN:o(Na,En(c),i),b:k,c:T,d:R,e:h,bq:dn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(iu,l,f);if(u.$)return z;var v=u.a;return o(be,a,Q(function(h,T,k,H,j,R,N,W){var F=N.a,q=N.b;return S(ne,p(Le,H,0,W),Gi,eu,On,{P:q,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cj:v,b:k,c:T,d:R,e:h,bq:dn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(cu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,y=g.c;return o(be,a,Q(function(h,T,k,H,j,R,N,W){var F=N.a,q=N.b;return S(ne,p(Le,H,0,W),Gi,ou,On,{b$:b,P:q,bd:F.bd,bK:F.bK,bL:F.bL,bM:F.bM,cn:y,b:k,c:T,d:R,cK:w,e:h,bq:dn(r),f:j})}))}}),F3=function(){var e=_([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=_([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Vn,e,r)}(),V3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"bq",viewMatrix:"f"}},Xi=function(e){return Ha(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(No,t,u),V3,jo,F3,{b:a,c:n,d:c,e:r,bX:l,bq:dn(e),f:i})}))},E3=E(function(e,r,n,a){var t=o(B3,n,a),i=L(e,r);return i.a?i.b?Bn(_([t,Xi(a)])):t:i.b?Xi(a):z}),R3=$(function(e,r){return C(E3,!0,!0,e,r)}),Ho=function(e){var r=e;return r},j3=$(function(e,r){var n=kr(r),a=kr(e),t=zr(r),i=zr(e),c=Pr(r),l=Pr(e);return{dJ:o(ce,l,c),dK:o(ce,i,t),dL:o(ce,a,n),dM:o(fe,l,c),dN:o(fe,i,t),dO:o(fe,a,n)}}),N3=function(e){var r=Ho(e),n=r.a,a=r.b;return o(j3,n,a)},Ii={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},H3=$(function(e,r){return{$:1,a:e,b:r}}),W3=H3({c8:2,dh:0,dQ:1}),Ui=W3(_([L({dr:0},{dr:1})])),G3=$(function(e,r){var n=N3(r),a=G(n),t=Ho(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(be,a,Q(function(v,s,d,m,f,g,b,w){return S(ne,w,Ii,Bo,Ui,{aw:l,dp:Ce(c),dq:Ce(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(be,a,Q(function(s,d,m,f,g,b,w,y){return S(ne,y,Ii,Fo,Ui,{aN:o(Na,En(u),l),dp:Ce(c),dq:Ce(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),X3=$(function(e,r){return o(G3,e,r)}),Wo=function(e){var r=e;return r.ev},Go=function(e){var r=e;return r.fp},Yn=function(e){return gr(Kr*(e/180))},Ji=$(function(e,r){var n=e,a=r;return n/a}),I3=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(br(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),Oi=$(function(e,r){return e<1?P:S(I3,0,e,e,r,P)}),U3=$(function(e,r){var n=e.dY,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:ja(a),dY:Ce(n),L:o(Me,c,l)},r)}),J3=function(e){var r=p(Sc,U3,P,Mo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,ko(e)),i=o(du,n,a);return C(El,i,e,t,0)}else return zo},Xo=$(function(e,r){var n=e,a=r,t=Ar(a);return{fT:t*Ar(n),fX:t*en(n),c$:en(a)}}),O3=function(){var e=Lr(1),r=72,n=o(Dr,0,r-1),a=o(Oi,r,o(Cn,Ze,Et(1))),t=eo(r/2),i=o(Dr,0,t-1),c=o(Oi,t,o(Cn,Yn(90),Yn(-90))),l=Do(Ne(o(ee,function(s){return o(ee,function(d){return{o:Jr(o(Xo,s,d)),dY:p(me,o(ie,_n(d)*_n(s),e),o(ie,_n(d)*Ta(s),e),o(ie,Ta(d),e)),L:L(o(Ji,s,Et(1)),o(Ji,o(gn,Yn(90),d),Yn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ne(o(ee,function(s){return Ne(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([B(b,g,m),B(b,m,f)])},i))},n));return Po(J3(o(Ul,l,v)))}(),Ca=72,qn=2*Ca,Y3=$(function(e,r){e:for(;;){var n=qn+1,a=o(ba,qn,2*e+3),t=o(ba,qn,2*e+2),i=2*e+1,c=2*e,l=qn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),q3=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Z3=$(function(e,r){e:for(;;){var n=p(q3,0,2*Kr,e/Ca),a={bw:n,bP:0,bV:1},t={bw:n,bP:1,bV:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),K3=function(){var e=o(Z3,Ca-1,_([{bw:0,bP:0,bV:0},{bw:0,bP:1,bV:0}])),r=o(Y3,Ca-1,P);return o(Vn,e,r)}(),Q3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},Yi=function(e){return Ha(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(No,!0,u),Q3,jo,K3,{aw:p(An,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},eb=function(e){var r=Hl(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c$,bW:1}},rb=$(function(e,r){return o(uu,eb(e),r)}),nb=E(function(e,r,n,a){var t=o(Eo,n,O3),i=function(){var u=L(e,r);return u.a?u.b?Bn(_([t,Yi()])):t:u.b?Yi():z}(),c=Go(a),l=c;return o(rb,o(wa,Dn,Wo(a)),o(Ro,B(l,l,l),i))}),ab=$(function(e,r){return C(nb,!0,!0,e,r)}),tb=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),bu=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ob=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),ib=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(su,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(tb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(bu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ob,n,a,t,i,c)}},cb=ib,gu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(g3,t,r)]);case 1:var t=e.a,n=e.b;return _([o(R3,t,n)]);case 3:var t=e.a,a=e.b;return _([o(ab,cb(t),a)]);case 2:var t=e.a,i=e.b;return _([o(A3,t,i)]);case 4:var c=e.a,l=e.b;return _([o(X3,_3(c),l)]);default:var u=e.a;return o(go,gu,u)}},lb=function(e){return o(go,gu,e)},ub=$(function(e,r){return vp({el:e.el,aI:Nm(e.ep),es:e.es,ex:Lr(e.ex),b5:e.b5,aK:L(Ai(Je(e.cM.fR)),Ai(Je(e.cM.eV))),aP:lb(r),eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ})}),vb=C(tn,186/255,189/255,182/255,1),hu=function(e){return e},$b=$(function(e,r){var n=e,a=He(r.eE),t=a.fT,i=a.fX,c=a.c$,l=o(Ra,r.bH,r.aJ),u=l;return{by:Hr(u),eu:n,bF:Nr(u),cD:0,bU:jr(u),cT:1,fT:-t,fX:-i,c$:-c}}),fb=function(e){return o($b,hu(!0),{aJ:e.aJ,eE:o(Xo,gr(e.bx),gr(e.bD)),bH:e.bH})},sb=function(e){return e},db=function(e){return sb(1.2*o(on,2,e))},tt=bo({fT:.37208,fX:.37529}),mb=$(function(e,r){return{$:2,a:e,b:r}}),_u=function(e){return{$:0,a:e}},Zn=function(e){var r=e;return r},pb=function(e){var r=e;return r.eu},bb=_u(sn.a),gb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?L(o(A,a,i),c):L(i,o(A,a,c))});return p(fr,n,L(P,P),r)}),hb=function(e){var r=e;return Ke({ds:r.fT,dt:r.bU,du:0,dv:0,dw:r.fX,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},_b=Q(function(e,r,n,a,t,i,c,l){var u=o(gb,pb,_([Zn(e),Zn(r),Zn(n),Zn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,h=y.a;return o(mb,o(ee,hb,v),{bd:o(Ee,m,g),bK:o(Ee,w,h),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return bb}else return _u({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),wb=E(function(e,r,n,a){return Pa(_b,e,r,n,a,ze,ze,ze,ze)}),yb=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Fa,e,r.av))}),xb=$(function(e,r){return o(nr,0,Ea(o(Va,yb(e),r)))}),Sb=$(function(e,r){return o(xb,e,r.ey)}),Xe=Sb,Tb={$:5},Cb=Tb,Lb=bo({fT:.44757,fX:.40745}),Pb=function(e){return e},qi=function(e){return e},ot=function(e){return e},zb={$:1},kb=zb,Mb=$(function(e,r){var n=e,a=Fn(r.dY),t=a.fT,i=a.fX,c=a.c$,l=o(Ra,r.bH,r.aJ),u=l;return{by:Hr(u),eu:n,bF:Nr(u),cD:0,bU:jr(u),cT:2,fT:t,fX:i,c$:c}}),Zi=function(e){return o(Mb,hu(!0),{aJ:e.aJ,bH:e.bH,dY:Qn(e.dY)})},Io=$(function(e,r){return{$:0,a:e,b:r}}),it=$(function(e,r){var n=e,a=r;return U(a,n)>-1}),ct=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Db=cr({fT:-1,fX:0,c$:0}),Ab=cr({fT:0,fX:-1,c$:0}),Bb=We(function(e,r,n,a,t,i){var c=o(it,n,i)?Co:mu,l=o(it,r,t)?po:Ab,u=o(it,e,a)?Al:Db,v=B(Fe(o(lr,e,a)),Fe(o(lr,r,t)),Fe(o(lr,n,i))),s=p(me,o(ct,e,a),o(ct,r,t),o(ct,n,i)),d=vr({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aK:v}}),Fb=$(function(e,r){return _e(Bb,Pr(e),zr(e),kr(e),Pr(r),zr(r),kr(r))}),wu=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Io,e,o(Fb,p(zt,-c,-l,-u),p(zt,c,l,u)))}),Vb=C(tn,211/255,215/255,207/255,1),lt=function(e){return p(bl,0,1,e<=.04045?e/12.92:o(on,(e+.055)/1.055,2.4))},Eb=function(e){var r=vo(e),n=r.cG,a=r.b7,t=r.b1;return p(An,lt(n),lt(a),lt(t))},yu=function(e){return p(bu,0,Vt(Eb(e)),Vt(0))},xu=$(function(e,r){return{$:2,a:e,b:r}}),Uo=function(e){return{$:5,a:e}},Su=$(function(e,r){return{$:4,a:e,b:r}}),Tu=$(function(e,r){return{$:3,a:e,b:r}}),Cu=$(function(e,r){return{$:1,a:e,b:r}}),Rb=x(function(e,r,n){return{fT:e,fX:r,c$:n}}),Rn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c$:a.c$+n.c$}}),jb=$(function(e,r){return vr({cu:o(Rn,e,ln(r)),cZ:Vr(r),c_:Er(r),c0:Rr(r)})}),Nb=$(function(e,r){return{eo:o(jb,e,Lo(r)),aK:Ao(r)}}),Jo=$(function(e,r){return{eE:r,cu:e}}),Hb=$(function(e,r){var n=r;return o(Jo,o(Rn,e,n.cu),n.eE)}),Wb=$(function(e,r){var n=r;return{k:o(Hb,e,n.k),e6:n.e6,fp:n.fp}}),Gb=function(e){return e},Lu=$(function(e,r){var n=Ho(r),a=n.a,t=n.b;return Gb(L(e(a),e(t)))}),Xb=$(function(e,r){return o(Lu,Rn(e),r)}),Pu=$(function(e,r){return{ev:r,fp:Fe(e)}}),Ib=$(function(e,r){return o(Pu,Go(r),o(Rn,e,Wo(r)))}),zu=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),Ub=$(function(e,r){return o(zu,Rn(e),r)}),ku=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Rb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Io,s,o(Nb,i,c));case 1:var s=r.a,l=r.b;return o(Cu,s,o(Ub,i,l));case 3:var s=r.a,u=r.b;return o(Tu,s,o(Ib,i,u));case 2:var s=r.a,v=r.b;return o(xu,s,o(Wb,i,v));case 4:var s=r.a,d=r.b;return o(Su,s,o(Xb,i,d));default:var m=r.a;return Uo(o(ee,ku(B(n,a,t)),m))}}),Mu=function(e){return ku(B(0,e,0))},Jb=$(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Fa,e,r.av))}),Ob=$(function(e,r){return o(nr,0,Ea(o(Va,Jb(e),r)))}),Yb=$(function(e,r){return o(Ob,e,r.ey)}),qb=Yb,Zb=function(e){return Uo(e)},Kb=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(tn,f,m,d,a)}),Qb=x(function(e,r,n){return C(Kb,e,r,n,1)}),oa=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=en(c),v=a.eE,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,y=g*g,h=1-2*(f+y),T=s.c$*u,k=l*T,H=2*(w-k),j=2*(w+k),R=d*T,N=2*(R+b),W=2*(R-b),F=g*T,q=2*(F-m),K=2*(F+m),oe=T*T,ve=1-2*(y+oe),te=1-2*(f+oe);return{fT:ve*i.fT+H*i.fX+N*i.c$,fX:j*i.fT+te*i.fX+q*i.c$,c$:W*i.fT+K*i.fX+h*i.c$}}),jn=x(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ar(c),u=en(c),v=a.cu,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c$-s.c$,g=a.eE,b=g,w=b.fT*u,y=l*w,h=w*w,T=b.fX*u,k=l*T,H=w*T,j=T*T,R=1-2*(h+j),N=b.c$*u,W=l*N,F=2*(H-W),q=2*(H+W),K=w*N,oe=2*(K+k),ve=2*(K-k),te=T*N,de=2*(te-y),Pe=2*(te+y),Te=N*N,sr=1-2*(j+Te),dr=1-2*(h+Te);return{fT:s.fT+sr*d+F*m+oe*f,fX:s.fX+q*d+dr*m+de*f,c$:s.c$+ve*d+Pe*m+R*f}}),eg=x(function(e,r,n){return vr({cu:p(jn,e,r,ln(n)),cZ:p(oa,e,r,Vr(n)),c_:p(oa,e,r,Er(n)),c0:p(oa,e,r,Rr(n))})}),rg=x(function(e,r,n){return{eo:p(eg,e,r,Lo(n)),aK:Ao(n)}}),ng=$(function(e,r){var n=o(jn,e,r),a=o(oa,e,r);return function(t){var i=t;return o(Jo,n(i.cu),a(i.eE))}}),ag=x(function(e,r,n){var a=n;return{k:p(ng,e,r,a.k),e6:a.e6,fp:a.fp}}),tg=x(function(e,r,n){return o(Lu,o(jn,e,r),n)}),og=x(function(e,r,n){return o(Pu,Go(n),p(jn,e,r,Wo(n)))}),ig=x(function(e,r,n){return o(zu,o(jn,e,r),n)}),Du=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Io,l,p(rg,e,r,a));case 1:var l=n.a,t=n.b;return o(Cu,l,p(ig,e,r,t));case 3:var l=n.a,i=n.b;return o(Tu,l,p(og,e,r,i));case 2:var l=n.a,c=n.b;return o(xu,l,p(ag,e,r,c));case 4:var l=n.a,u=n.b;return o(Su,l,p(tg,e,r,u));default:var v=n.a;return Uo(o(ee,o(Du,e,r),v))}}),cg=o(Jo,Dn,To),lg=$(function(e,r){return p(Du,cg,gr(e),r)}),ug=function(e){var r=o(Xe,"period",e),n=o(qb,"number of blocks",e),a=o(Xe,"minWidth",e),t=o(Se,a,o(Xe,"maxWidth",e)),i=o(Xe,"frequency",e),c=80/n,l=function(m){return i*m/n},u=function(m){return C(Pt,a,t,r,e.bA+l(m))},v=function(m){return .004*r*m},s=function(m){return p(Qb,C(Pt,0,1,3,e.bA+v(m)),.65,.7)},d=function(m){return o(lg,.1*u(m),o(Mu,m*c,o(wu,yu(s(m)),B(u(m),.9*c,u(m)))))};return Zb(o(ee,d,o(Dr,-(n/2|0),n/2|0)))},vg=$(function(e,r){return _([ug(e),o(Mu,-33,o(wu,yu(Vb),B(300,1,300)))])}),Ki=function(e){var r=e;return r},$g=function(e){e:for(;;){if(br(e.di,Ze)&&br(e.dj,Ze))return ze;if(o(ml,Fe(e.di),Fe(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:xa(e.ee)};e=r;continue e}else{var n=O(Ki(e.dj)/Kr),a=O(Ki(e.di)/Kr),t=He(e.ee),i=t.fT,c=t.fX,l=t.c$,u=o(Ra,Wl(1),e.aJ),v=u;return{by:a*Hr(v),eu:!1,bF:a*Nr(v),cD:n/a,bU:a*jr(v),cT:3,fT:i,fX:c,c$:l}}}},fg=function(e){return $g({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(Xo,gr(e.bx),gr(e.bD))})},sg=$(function(e,r){var n=fb({bx:o(Xe,"azimuth for third light",e),aJ:jm(Pb(2e3)),bD:o(Xe,"elevation for third light",e),bH:ot(o(on,10,o(Xe,"lux",e)))}),a=Zi({aJ:tt,bH:qi(6e3),dY:{fT:-45,fX:-30,c$:45}}),t=fg({bx:o(Xe,"azimuth for fourth light",e),aJ:tt,bD:o(Xe,"elevation for fourth light",e),di:ot(o(Xe,"intensity above",e)),dj:ot(o(Xe,"intensity below",e))}),i=Zi({aJ:Lb,bH:qi(6e3),dY:{fT:-45,fX:30,c$:45}});return o(ub,{el:kb,ep:vb,es:Em(e),ex:.1,b5:e.b5,eM:db(6),e8:C(wb,i,a,n,t),cM:e.cM,fJ:Cb,fQ:tt},o(vg,e,r))}),dg=C($m,sg,gm,bm,fm);const mg={Main:{init:dg(o(D,function(e){return ke({e0:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return ke({bA:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return ke({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",da(Sn)))},o(M,"left",Z))},o(M,"pressedKeys",da(Sn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return ke({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return ke({eV:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return ke({eB:r,eC:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},pg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},bg=()=>{ut("pointerdown"),ut("wheel"),ut("keydown")},ut=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},gg=mg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});bg();pg(gg);
