const fu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};fu();function xr(e,r,n){return n.a=e,n.f=r,n}function s(e){return xr(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return xr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return xr(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function xe(e){return xr(5,e,function(r){return function(n){return function(a){return function(i){return function(l){return e(r,n,a,i,l)}}}}})}function er(e){return xr(6,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return e(r,n,a,i,l,u)}}}}}})}function Ra(e){return xr(7,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return e(r,n,a,i,l,u,v)}}}}}}})}function te(e){return xr(8,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return e(r,n,a,i,l,u,v,$)}}}}}}}})}function ao(e){return xr(9,e,function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return e(r,n,a,i,l,u,v,$,f)}}}}}}}}})}function c(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function t(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function C(e,r,n,a,i,l){return e.a===5?e.f(r,n,a,i,l):e(r)(n)(a)(i)(l)}function Te(e,r,n,a,i,l,u){return e.a===6?e.f(r,n,a,i,l,u):e(r)(n)(a)(i)(l)(u)}function to(e,r,n,a,i,l,u,v){return e.a===7?e.f(r,n,a,i,l,u,v):e(r)(n)(a)(i)(l)(u)(v)}function Ea(e,r,n,a,i,l,u,v,$){return e.a===8?e.f(r,n,a,i,l,u,v,$):e(r)(n)(a)(i)(l)(u)(v)($)}function mu(e,r,n,a,i,l,u,v,$,f){return e.a===9?e.f(r,n,a,i,l,u,v,$,f):e(r)(n)(a)(i)(l)(u)(v)($)(f)}var du=[];function pu(e){return e.length}var gu=x(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),hu=s(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),bu=s(function(e,r){return r[e]});x(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=n[l];return i[e]=r,i});s(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});x(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=c(e,n[i],r);return r});var _u=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=c(e,n[a],r);return r});s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});x(function(e,r,n){for(var a=n.length,i=new Array(a),l=0;l<a;l++)i[l]=c(e,r+l,n[l]);return i});x(function(e,r,n){return n.slice(e,r)});x(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var l=a+i,u=new Array(l),v=0;v<a;v++)u[v]=r[v];for(var v=0;v<i;v++)u[v+a]=n[v];return u});s(function(e,r){return r});s(function(e,r){return console.log(e+": "+wu()),r});function wu(e){return"<internals>"}function cn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function dr(e,r){for(var n,a=[],i=Ct(e,r,0,a);i&&(n=a.pop());i=Ct(n.a,n.b,0,a));return i}function Ct(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&cn(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=Mi(e),r=Mi(r));for(var i in e)if(!Ct(e[i],r[i],n+1,a))return!1;return!0}s(dr);s(function(e,r){return!dr(e,r)});function Z(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=Z(e.a,r.a))||(n=Z(e.b,r.b))?n:Z(e.c,r.c);for(;e.b&&r.b&&!(n=Z(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}s(function(e,r){return Z(e,r)<0});s(function(e,r){return Z(e,r)<1});s(function(e,r){return Z(e,r)>0});s(function(e,r){return Z(e,r)>=0});var yu=s(function(e,r){var n=Z(e,r);return n<0?K0:n?o3:X0}),jn=0;function k(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function X(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}s(se);function se(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=lr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=lr(e.a,r);return n}var L={$:0};function lr(e,r){return{$:1,a:e,b:r}}var xu=s(lr);function h(e){for(var r=L,n=e.length;n--;)r=lr(e[n],r);return r}function Na(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Su=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(c(e,r.a,n.a));return h(a)});E(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(t(e,r.a,n.a,a.a));return h(i)});xe(function(e,r,n,a,i){for(var l=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)l.push(z(e,r.a,n.a,a.a,i.a));return h(l)});er(function(e,r,n,a,i,l){for(var u=[];r.b&&n.b&&a.b&&i.b&&l.b;r=r.b,n=n.b,a=a.b,i=i.b,l=l.b)u.push(C(e,r.a,n.a,a.a,i.a,l.a));return h(u)});s(function(e,r){return h(Na(r).sort(function(n,a){return Z(e(n),e(a))}))});s(function(e,r){return h(Na(r).sort(function(n,a){var i=c(e,n,a);return i===X0?0:i===K0?-1:1}))});s(function(e,r){return e+r});s(function(e,r){return e-r});s(function(e,r){return e*r});s(function(e,r){return e/r});s(function(e,r){return e/r|0});var Cu=s(Math.pow);s(function(e,r){return r%e});var Pu=s(function(e,r){var n=r%e;return e===0?cn(11):n>0&&e<0||n<0&&e>0?n+e:n}),zu=Math.PI,Lu=Math.cos,ku=Math.sin,Tu=Math.tan;s(Math.atan2);function Mu(e){return e}function Fu(e){return e===1/0||e===-1/0}var Du=Math.ceil,Ju=Math.floor,Au=Math.round,Bu=Math.sqrt,gi=Math.log,Vu=isNaN;function ju(e){return!e}s(function(e,r){return e&&r});s(function(e,r){return e||r});s(function(e,r){return e!==r});var Ru=s(function(e,r){return e+r});function Eu(e){var r=e.charCodeAt(0);return isNaN(r)?q:ae(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}s(function(e,r){return e+r});function Nu(e){return e.length}s(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var l=r.charCodeAt(i);if(55296<=l&&l<=56319){a[i]=e(r[i]+r[i+1]),i+=2;continue}a[i]=e(r[i]),i++}return a.join("")});s(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var l=r[i],u=r.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=r[i],i++),e(l)&&n.push(l)}return n.join("")});function Wu(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,i=0;i<a;){var l=n[i],u=n.charCodeAt(i);i++,55296<=u&&u<=56319&&(l+=n[i],i++),r=c(e,l,r)}return r});var Hu=x(function(e,r,n){for(var a=n.length;a--;){var i=n[a],l=n.charCodeAt(a);56320<=l&&l<=57343&&(a--,i=n[a]+i),r=c(e,i,r)}return r}),Gu=s(function(e,r){return r.split(e)}),Iu=s(function(e,r){return r.join(e)}),Uu=x(function(e,r,n){return n.slice(e,r)});function Ou(e){return e.toLowerCase()}s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var qu=s(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Yu=s(function(e,r){return r.indexOf(e)>-1}),Zu=s(function(e,r){return r.indexOf(e)===0});s(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Xu=s(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return h(i)});function C0(e){return e+""}function Ku(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var l=e.charCodeAt(i);if(l<48||57<l)return q;r=10*r+l-48}return i==a?q:ae(n==45?-r:r)}function Qu(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ae(r):q}function ev(e){return Na(e).join("")}function rv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function nv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function av(e){return{$:0,a:e}}function oo(e){return{$:2,b:e}}var tv=oo(function(e){return typeof e=="boolean"?fe(e):ar("a BOOL",e)}),ov=oo(function(e){return typeof e=="number"?fe(e):ar("a FLOAT",e)}),iv=oo(function(e){return typeof e=="string"?fe(e):e instanceof String?fe(e+""):ar("a STRING",e)});function cv(e){return{$:3,b:e}}var lv=s(function(e,r){return{$:6,d:e,b:r}});s(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var uv=s(function(e,r){return{$:10,b:r,h:e}}),vv=s(function(e,r){return Sr(e,[r])}),$v=x(function(e,r,n){return Sr(e,[r,n])});E(function(e,r,n,a){return Sr(e,[r,n,a])});xe(function(e,r,n,a,i){return Sr(e,[r,n,a,i])});er(function(e,r,n,a,i,l){return Sr(e,[r,n,a,i,l])});Ra(function(e,r,n,a,i,l,u){return Sr(e,[r,n,a,i,l,u])});te(function(e,r,n,a,i,l,u,v){return Sr(e,[r,n,a,i,l,u,v])});ao(function(e,r,n,a,i,l,u,v,$){return Sr(e,[r,n,a,i,l,u,v,$])});s(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return Ce(c(ho,"This is not valid JSON! "+a.message,r))}});var P0=s(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?fe(e.c):ar("null",r);case 3:return Kn(r)?hi(e.b,r,h):ar("a LIST",r);case 4:return Kn(r)?hi(e.b,r,sv):ar("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return ar("an OBJECT with a field named `"+n+"`",r);var f=Ne(e.b,r[n]);return qe(f)?f:Ce(c(Fi,n,f.a));case 7:var a=e.e;if(!Kn(r))return ar("an ARRAY",r);if(a>=r.length)return ar("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var f=Ne(e.b,r[a]);return qe(f)?f:Ce(c(Q0,a,f.a));case 8:if(typeof r!="object"||r===null||Kn(r))return ar("an OBJECT",r);var i=L;for(var l in r)if(r.hasOwnProperty(l)){var f=Ne(e.b,r[l]);if(!qe(f))return Ce(c(Fi,l,f.a));i=lr(k(l,f.a),i)}return fe(De(i));case 9:for(var u=e.f,v=e.g,$=0;$<v.length;$++){var f=Ne(v[$],r);if(!qe(f))return f;u=u(f.a)}return fe(u);case 10:var f=Ne(e.b,r);return qe(f)?Ne(e.h(f.a),r):f;case 11:for(var d=L,p=e.g;p.b;p=p.b){var f=Ne(p.a,r);if(qe(f))return f;d=lr(f.a,d)}return Ce(i3(De(d)));case 1:return Ce(c(ho,e.a,r));case 0:return fe(e.a)}}function hi(e,r,n){for(var a=r.length,i=new Array(a),l=0;l<a;l++){var u=Ne(e,r[l]);if(!qe(u))return Ce(c(Q0,l,u.a));i[l]=u.a}return fe(n(i))}function Kn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function sv(e){return c(x3,e.length,function(r){return e[r]})}function ar(e,r){return Ce(c(ho,"Expecting "+e,r))}function Wr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Wr(e.b,r.b);case 6:return e.d===r.d&&Wr(e.b,r.b);case 7:return e.e===r.e&&Wr(e.b,r.b);case 9:return e.f===r.f&&bi(e.g,r.g);case 10:return e.h===r.h&&Wr(e.b,r.b);case 11:return bi(e.g,r.g)}}function bi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Wr(e[a],r[a]))return!1;return!0}var fv=s(function(e,r){return JSON.stringify(r,null,e)+""});function z0(e){return e}x(function(e,r,n){return n[e]=r,n});function Ar(e){return{$:0,a:e}}function mv(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var Pt=s(function(e,r){return{$:3,b:e,d:r}});s(function(e,r){return{$:4,b:e,d:r}});function dv(e){return{$:5,b:e}}var pv=0;function io(e){var r={$:0,e:pv++,f:e,g:null,h:[]};return co(r),r}function L0(e){return pr(function(r){r(Ar(io(e)))})}function k0(e,r){e.h.push(r),co(e)}var gv=s(function(e,r){return pr(function(n){k0(e,r),n(Ar(jn))})}),it=!1,_i=[];function co(e){if(_i.push(e),!it){for(it=!0;e=_i.shift();)hv(e);it=!1}}function hv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,co(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return lo(r,a,e.fM,e.gy,e.gr,function(){return function(){}})});function lo(e,r,n,a,i,l){var u=c(P0,e,r?r.flags:void 0);qe(u)||cn(2);var v={},$=n(u.a),f=$.a,d=l(g,f),p=bv(v,g);function g(m,_){var b=c(a,m,f);d(f=b.a,_),yi(v,b.b,i(f))}return yi(v,$.b,i(f)),p?{ports:p}:{}}var or={};function bv(e,r){var n;for(var a in or){var i=or[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=wv(i,r)}return n}function _v(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function wv(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,l=e.e,u=e.f;function v($){return c(Pt,v,dv(function(f){var d=f.a;return f.$===0?t(i,n,d,$):l&&u?z(a,n,d.i,d.j,$):t(a,n,l?d.i:d.j,$)}))}return n.h=io(c(Pt,v,e.b))}var yv=s(function(e,r){return pr(function(n){e.g(r),n(Ar(jn))})});s(function(e,r){return c(gv,e.h,{$:0,a:r})});function T0(e){return function(r){return{$:1,k:e,l:r}}}function xv(e){return{$:2,m:e}}s(function(e,r){return{$:3,n:e,o:r}});var wi=[],ct=!1;function yi(e,r,n){if(wi.push({p:e,q:r,r:n}),!ct){ct=!0;for(var a;a=wi.shift();)Sv(a.p,a.q,a.r);ct=!1}}function Sv(e,r,n){var a={};_a(!0,r,a,null),_a(!1,n,a,null);for(var i in e)k0(e[i],{$:"fx",a:a[i]||{i:L,j:L}})}function _a(e,r,n,a){switch(r.$){case 1:var i=r.k,l=Cv(e,i,a,r.l);n[i]=Pv(e,l,n[i]);return;case 2:for(var u=r.m;u.b;u=u.b)_a(e,u.a,n,a);return;case 3:_a(e,r.o,n,{s:r.n,t:a});return}}function Cv(e,r,n,a){function i(u){for(var v=n;v;v=v.t)u=v.s(u);return u}var l=e?or[r].e:or[r].f;return c(l,i,a)}function Pv(e,r,n){return n=n||{i:L,j:L},e?n.i=lr(r,n.i):n.j=lr(r,n.j),n}function zv(e){or[e]&&cn(3)}s(function(e,r){return r});function Lv(e,r){return zv(e),or[e]={f:kv,u:r,a:Tv},T0(e)}var kv=s(function(e,r){return function(n){return e(r(n))}});function Tv(e,r){var n=L,a=or[e].u,i=Ar(null);or[e].b=i,or[e].c=x(function(u,v,$){return n=v,i});function l(u){var v=c(P0,a,u);qe(v)||cn(4,e,v.a);for(var $=v.a,f=n;f.b;f=f.b)r(f.a($))}return{send:l}}var wa,fr=typeof document!="undefined"?document:{};function uo(e,r){e.appendChild(r)}E(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(_r(e,function(){}),i),{}});function zt(e){return{$:0,a:e}}var M0=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b||0,i.push(u)}return l+=i.length,{$:1,c:r,d:vo(n),e:i,f:e,b:l}})}),rr=M0(void 0),Mv=s(function(e,r){return s(function(n,a){for(var i=[],l=0;a.b;a=a.b){var u=a.a;l+=u.b.b||0,i.push(u)}return l+=i.length,{$:2,c:r,d:vo(n),e:i,f:e,b:l}})}),Fv=Mv(void 0);function Dv(e,r,n,a){return{$:3,d:vo(e),g:r,h:n,i:a}}var Jv=s(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Cr(e,r){return{$:5,l:e,m:r,k:void 0}}s(function(e,r){return Cr([e,r],function(){return e(r)})});x(function(e,r,n){return Cr([e,r,n],function(){return c(e,r,n)})});E(function(e,r,n,a){return Cr([e,r,n,a],function(){return t(e,r,n,a)})});xe(function(e,r,n,a,i){return Cr([e,r,n,a,i],function(){return z(e,r,n,a,i)})});er(function(e,r,n,a,i,l){return Cr([e,r,n,a,i,l],function(){return C(e,r,n,a,i,l)})});Ra(function(e,r,n,a,i,l,u){return Cr([e,r,n,a,i,l,u],function(){return Te(e,r,n,a,i,l,u)})});te(function(e,r,n,a,i,l,u,v){return Cr([e,r,n,a,i,l,u,v],function(){return to(e,r,n,a,i,l,u,v)})});ao(function(e,r,n,a,i,l,u,v,$){return Cr([e,r,n,a,i,l,u,v,$],function(){return Ea(e,r,n,a,i,l,u,v,$)})});var F0=s(function(e,r){return{$:"a0",n:e,o:r}}),Av=s(function(e,r){return{$:"a1",n:e,o:r}}),D0=s(function(e,r){return{$:"a2",n:e,o:r}}),Rn=s(function(e,r){return{$:"a3",n:e,o:r}});x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Bv(e){return e=="script"?"p":e}function Vv(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}s(function(e,r){return r.$==="a0"?c(F0,r.n,jv(e,r.o)):r});function jv(e,r){var n=So(r);return{$:r.$,a:n?t(C3,n<3?Rv:Ev,Ve(e),r.a):c(Tn,e,r.a)}}var Rv=s(function(e,r){return k(e(r.a),r.b)}),Ev=s(function(e,r){return{ax:e(r.ax),dw:r.dw,dj:r.dj}});function vo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,l=n.o;if(a==="a2"){i==="className"?xi(r,i,l):r[i]=l;continue}var u=r[a]||(r[a]={});a==="a3"&&i==="class"?xi(u,i,l):u[i]=l}return r}function xi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function _r(e,r){var n=e.$;if(n===5)return _r(e.k||(e.k=e.m()),r);if(n===0)return fr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var l={j:i,p:r},u=_r(a,l);return u.elm_event_node_ref=l,u}if(n===3){var u=e.h(e.g);return Lt(u,r,e.d),u}var u=e.f?fr.createElementNS(e.f,e.c):fr.createElement(e.c);wa&&e.c=="a"&&u.addEventListener("click",wa(u)),Lt(u,r,e.d);for(var v=e.e,$=0;$<v.length;$++)uo(u,_r(n===1?v[$]:v[$].b,r));return u}function Lt(e,r,n){for(var a in n){var i=n[a];a==="a1"?Nv(e,i):a==="a0"?Gv(e,r,i):a==="a3"?Wv(e,i):a==="a4"?Hv(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Nv(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Wv(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Hv(e,r){for(var n in r){var a=r[n],i=a.f,l=a.o;typeof l!="undefined"?e.setAttributeNS(i,n,l):e.removeAttributeNS(i,n)}}function Gv(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var l=n[i],u=a[i];if(!l){e.removeEventListener(i,u),a[i]=void 0;continue}if(u){var v=u.q;if(v.$===l.$){u.q=l;continue}e.removeEventListener(i,u)}u=Iv(r,l),e.addEventListener(i,u,$o&&{passive:So(l)<2}),a[i]=u}}var $o;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){$o=!0}}))}catch{}function Iv(e,r){function n(a){var i=n.q,l=Ne(i.a,a);if(!!qe(l)){for(var u=So(i),v=l.a,$=u?u<3?v.a:v.ax:v,f=u==1?v.b:u==3&&v.dw,d=(f&&a.stopPropagation(),(u==2?v.b:u==3&&v.dj)&&a.preventDefault(),e),p,g;p=d.j;){if(typeof p=="function")$=p($);else for(var g=p.length;g--;)$=p[g]($);d=d.p}d($,f)}}return n.q=r,n}function Uv(e,r){return e.$==r.$&&Wr(e.a,r.a)}function J0(e,r){var n=[];return Ye(e,r,n,0),n}function Se(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Ye(e,r,n,a){if(e!==r){var i=e.$,l=r.$;if(i!==l)if(i===1&&l===2)r=e$(r),l=1;else{Se(n,0,a,r);return}switch(l){case 5:for(var u=e.l,v=r.l,$=u.length,f=$===v.length;f&&$--;)f=u[$]===v[$];if(f){r.k=e.k;return}r.k=r.m();var d=[];Ye(e.k,r.k,d,0),d.length>0&&Se(n,1,a,d);return;case 4:for(var p=e.j,g=r.j,m=!1,_=e.k;_.$===4;)m=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var b=r.k;b.$===4;)m=!0,typeof g!="object"?g=[g,b.j]:g.push(b.j),b=b.k;if(m&&p.length!==g.length){Se(n,0,a,r);return}(m?!Ov(p,g):p!==g)&&Se(n,2,a,g),Ye(_,b,n,a+1);return;case 0:e.a!==r.a&&Se(n,3,a,r.a);return;case 1:Si(e,r,n,a,qv);return;case 2:Si(e,r,n,a,Yv);return;case 3:if(e.h!==r.h){Se(n,0,a,r);return}var y=so(e.d,r.d);y&&Se(n,4,a,y);var S=r.i(e.g,r.g);S&&Se(n,5,a,S);return}}}function Ov(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Si(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Se(n,0,a,r);return}var l=so(e.d,r.d);l&&Se(n,4,a,l),i(e,r,n,a)}function so(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var l=so(e[i],r[i]||{},i);l&&(a=a||{},a[i]=l);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var u=e[i],v=r[i];u===v&&i!=="value"&&i!=="checked"||n==="a0"&&Uv(u,v)||(a=a||{},a[i]=v)}for(var $ in r)$ in e||(a=a||{},a[$]=r[$]);return a}function qv(e,r,n,a){var i=e.e,l=r.e,u=i.length,v=l.length;u>v?Se(n,6,a,{v,i:u-v}):u<v&&Se(n,7,a,{v:u,e:l});for(var $=u<v?u:v,f=0;f<$;f++){var d=i[f];Ye(d,l[f],n,++a),a+=d.b||0}}function Yv(e,r,n,a){for(var i=[],l={},u=[],v=e.e,$=r.e,f=v.length,d=$.length,p=0,g=0,m=a;p<f&&g<d;){var _=v[p],b=$[g],y=_.a,S=b.a,w=_.b,P=b.b,F=void 0,G=void 0;if(y===S){m++,Ye(w,P,i,m),m+=w.b||0,p++,g++;continue}var W=v[p+1],N=$[g+1];if(W){var H=W.a,I=W.b;G=S===H}if(N){var V=N.a,K=N.b;F=y===V}if(F&&G){m++,Ye(w,K,i,m),pn(l,i,y,P,g,u),m+=w.b||0,m++,gn(l,i,y,I,m),m+=I.b||0,p+=2,g+=2;continue}if(F){m++,pn(l,i,S,P,g,u),Ye(w,K,i,m),m+=w.b||0,p+=1,g+=2;continue}if(G){m++,gn(l,i,y,w,m),m+=w.b||0,m++,Ye(I,P,i,m),m+=I.b||0,p+=2,g+=1;continue}if(W&&H===V){m++,gn(l,i,y,w,m),pn(l,i,S,P,g,u),m+=w.b||0,m++,Ye(I,K,i,m),m+=I.b||0,p+=2,g+=2;continue}break}for(;p<f;){m++;var _=v[p],w=_.b;gn(l,i,_.a,w,m),m+=w.b||0,p++}for(;g<d;){var re=re||[],b=$[g];pn(l,i,b.a,b.b,void 0,re),g++}(i.length>0||u.length>0||re)&&Se(n,8,a,{w:i,x:u,y:re})}var A0="_elmW6BL";function pn(e,r,n,a,i,l){var u=e[n];if(!u){u={c:0,z:a,r:i,s:void 0},l.push({r:i,A:u}),e[n]=u;return}if(u.c===1){l.push({r:i,A:u}),u.c=2;var v=[];Ye(u.z,a,v,u.r),u.r=i,u.s.s={w:v,A:u};return}pn(e,r,n+A0,a,i,l)}function gn(e,r,n,a,i){var l=e[n];if(!l){var u=Se(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:u};return}if(l.c===0){l.c=2;var v=[];Ye(a,l.z,v,i),Se(r,9,i,{w:v,A:l});return}gn(e,r,n+A0,a,i)}function B0(e,r,n,a){hn(e,r,n,0,0,r.b,a)}function hn(e,r,n,a,i,l,u){for(var v=n[a],$=v.r;$===i;){var f=v.$;if(f===1)B0(e,r.k,v.s,u);else if(f===8){v.t=e,v.u=u;var d=v.s.w;d.length>0&&hn(e,r,d,0,i,l,u)}else if(f===9){v.t=e,v.u=u;var p=v.s;if(p){p.A.s=e;var d=p.w;d.length>0&&hn(e,r,d,0,i,l,u)}}else v.t=e,v.u=u;if(a++,!(v=n[a])||($=v.r)>l)return a}var g=r.$;if(g===4){for(var m=r.k;m.$===4;)m=m.k;return hn(e,m,n,a,i+1,l,e.elm_event_node_ref)}for(var _=r.e,b=e.childNodes,y=0;y<_.length;y++){i++;var S=g===1?_[y]:_[y].b,w=i+(S.b||0);if(i<=$&&$<=w&&(a=hn(b[y],S,n,a,i,w,u),!(v=n[a])||($=v.r)>l))return a;i=w}return a}function V0(e,r,n,a){return n.length===0?e:(B0(e,r,n,a),ya(e,n))}function ya(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,l=Zv(i,a);i===e&&(e=l)}return e}function Zv(e,r){switch(r.$){case 0:return Xv(e,r.s,r.u);case 4:return Lt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ya(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var l=r.s,a=0;a<l.i;a++)e.removeChild(e.childNodes[l.v]);return e;case 7:for(var l=r.s,n=l.e,a=l.v,i=e.childNodes[a];a<n.length;a++)e.insertBefore(_r(n[a],r.u),i);return e;case 9:var l=r.s;if(!l)return e.parentNode.removeChild(e),e;var u=l.A;return typeof u.r!="undefined"&&e.parentNode.removeChild(e),u.s=ya(e,l.w),e;case 8:return Kv(e,r);case 5:return r.s(e);default:cn(10)}}function Xv(e,r,n){var a=e.parentNode,i=_r(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Kv(e,r){var n=r.s,a=Qv(n.y,r);e=ya(e,n.w);for(var i=n.x,l=0;l<i.length;l++){var u=i[l],v=u.A,$=v.c===2?v.s:_r(v.z,r.u);e.insertBefore($,e.childNodes[u.r])}return a&&uo(e,a),e}function Qv(e,r){if(!!e){for(var n=fr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],l=i.A;uo(n,l.c===2?l.s:_r(l.z,r.u))}return n}}function fo(e){if(e.nodeType===3)return zt(e.textContent);if(e.nodeType!==1)return zt("");for(var r=L,n=e.attributes,a=n.length;a--;){var i=n[a],l=i.name,u=i.value;r=lr(c(Rn,l,u),r)}for(var v=e.tagName.toLowerCase(),$=L,f=e.childNodes,a=f.length;a--;)$=lr(fo(f[a]),$);return t(rr,v,r,$)}function e$(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var r$=E(function(e,r,n,a){return lo(r,a,e.fM,e.gy,e.gr,function(i,l){var u=e.gB,v=a.node,$=fo(v);return j0(l,function(f){var d=u(f),p=J0($,d);v=V0(v,$,p,i),$=d})})});E(function(e,r,n,a){return lo(r,a,e.fM,e.gy,e.gr,function(i,l){var u=e.dt&&e.dt(i),v=e.gB,$=fr.title,f=fr.body,d=fo(f);return j0(l,function(p){wa=u;var g=v(p),m=rr("body")(L)(g.e9),_=J0(d,m);f=V0(f,d,_,i),d=m,wa=0,$!==g.gv&&(fr.title=$=g.gv)})})});var xa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function j0(e,r){r(e);var n=0;function a(){n=n===1?0:(xa(a),r(e),1)}return function(i,l){e=i,l?(r(e),n===2&&(n=1)):(n===0&&xa(a),n=2)}}s(function(e,r){return c(zo,Co,pr(function(){r&&history.go(r),e()}))});s(function(e,r){return c(zo,Co,pr(function(){history.pushState({},"",r),e()}))});s(function(e,r){return c(zo,Co,pr(function(){history.replaceState({},"",r),e()}))});var n$={addEventListener:function(){},removeEventListener:function(){}},a$=typeof window!="undefined"?window:n$;x(function(e,r,n){return L0(pr(function(a){function i(l){io(n(l))}return e.addEventListener(r,i,$o&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});s(function(e,r){var n=Ne(e,r);return qe(n)?ae(n.a):q});function R0(e,r){return pr(function(n){xa(function(){var a=document.getElementById(e);n(a?Ar(r(a)):mv(P3(e)))})})}function t$(e){return pr(function(r){xa(function(){r(Ar(e()))})})}s(function(e,r){return R0(r,function(n){return n[e](),jn})});s(function(e,r){return t$(function(){return a$.scroll(e,r),jn})});x(function(e,r,n){return R0(e,function(a){return a.scrollLeft=r,a.scrollTop=n,jn})});s(function(e,r){return e&r});s(function(e,r){return e|r});s(function(e,r){return e^r});s(function(e,r){return r<<e});s(function(e,r){return r>>e});s(function(e,r){return r>>>e});var o$=s(function(e,r){var n="g";e.f0&&(n+="m"),e.fb&&(n+="i");try{return ae(new RegExp(r,n))}catch{return q}});s(function(e,r){return r.match(e)!==null});var i$=x(function(e,r,n){for(var a=[],i=0,l=n,u=r.lastIndex,v=-1,$;i++<e&&($=r.exec(l))&&v!=r.lastIndex;){for(var f=$.length-1,d=new Array(f);f>0;){var p=$[f];d[--f]=p?ae(p):q}a.push(z(Mc,$[0],$.index,i,h(d))),v=r.lastIndex}return r.lastIndex=u,h(a)});E(function(e,r,n,a){var i=0;function l(u){if(i++>=e)return u;for(var v=arguments.length-3,$=new Array(v);v>0;){var f=arguments[v];$[--v]=f?ae(f):q}return n(z(Mc,u,arguments[arguments.length-2],i,h($)))}return a.replace(r,l)});x(function(e,r,n){for(var a=n,i=[],l=r.lastIndex,u=r.lastIndex;e--;){var v=r.exec(a);if(!v)break;i.push(a.slice(l,v.index)),l=r.lastIndex}return i.push(a.slice(l)),r.lastIndex=u,h(i)});var c$=s(function(e,r){return new Float64Array([e,r])});s(function(e,r){return new Float64Array([e,r[1]])});s(function(e,r){return new Float64Array([r[0],e])});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});s(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});s(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/l$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function l$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});s(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]});var mo=new Float64Array(3),Ci=new Float64Array(3),Pi=new Float64Array(3),u$=x(function(e,r,n){return new Float64Array([e,r,n])}),v$=function(e){return e[0]},$$=function(e){return e[1]},s$=function(e){return e[2]};s(function(e,r){return new Float64Array([e,r[1],r[2]])});s(function(e,r){return new Float64Array([r[0],e,r[2]])});s(function(e,r){return new Float64Array([r[0],r[1],e])});var f$=function(e){return new Float64Array([e.gF,e.gJ,e.dJ])};s(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function E0(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}s(E0);function N0(e,r,n){return n===void 0&&(n=new Float64Array(3)),Sa(E0(e,r,n),n)}s(N0);function W0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/W0(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var m$=s(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),bn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};s(bn);function kt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}s(kt);s(function(e,r){var n,a=mo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=bn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(bn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(bn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(bn(r,a)+e[14])/n,i});var d$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});s(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});s(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var p$=function(e){return{gF:e[0],gJ:e[1],dJ:e[2],e$:e[3]}},g$=function(e){return new Float64Array([e.gF,e.gJ,e.dJ,e.e$])};s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});s(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});s(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/h$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function h$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+l*l)});s(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],l=e[3]-r[3];return n*n+a*a+i*i+l*l});s(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});s(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var b$=new Float64Array(16),_$=new Float64Array(16),w$=function(e){var r=new Float64Array(16);return r[0]=e.d9,r[1]=e.ed,r[2]=e.eh,r[3]=e.el,r[4]=e.ea,r[5]=e.ee,r[6]=e.ei,r[7]=e.em,r[8]=e.eb,r[9]=e.ef,r[10]=e.ej,r[11]=e.en,r[12]=e.ec,r[13]=e.eg,r[14]=e.ek,r[15]=e.eo,r},y$=function(e){return{d9:e[0],ed:e[1],eh:e[2],el:e[3],ea:e[4],ee:e[5],ei:e[6],em:e[7],eb:e[8],ef:e[9],ej:e[10],en:e[11],ec:e[12],eg:e[13],ek:e[14],eo:e[15]}};function H0(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2*i/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2*i/(a-n),u[6]=0,u[7]=0,u[8]=(r+e)/(r-e),u[9]=(a+n)/(a-n),u[10]=-(l+i)/(l-i),u[11]=-1,u[12]=0,u[13]=0,u[14]=-2*l*i/(l-i),u[15]=0,u}er(H0);E(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),l=-i,u=l*r,v=i*r;return H0(u,v,l,i,n,a)});function G0(e,r,n,a,i,l){var u=new Float64Array(16);return u[0]=2/(r-e),u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=2/(a-n),u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=-2/(l-i),u[11]=0,u[12]=-(r+e)/(r-e),u[13]=-(a+n)/(a-n),u[14]=-(l+i)/(l-i),u[15]=1,u}er(G0);E(function(e,r,n,a){return G0(e,r,n,a,-1,1)});function I0(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[3],v=e[4],$=e[5],f=e[6],d=e[7],p=e[8],g=e[9],m=e[10],_=e[11],b=e[12],y=e[13],S=e[14],w=e[15],P=r[0],F=r[1],G=r[2],W=r[3],N=r[4],H=r[5],I=r[6],V=r[7],K=r[8],re=r[9],ve=r[10],de=r[11],le=r[12],he=r[13],Ae=r[14],Le=r[15];return n[0]=a*P+v*F+p*G+b*W,n[1]=i*P+$*F+g*G+y*W,n[2]=l*P+f*F+m*G+S*W,n[3]=u*P+d*F+_*G+w*W,n[4]=a*N+v*H+p*I+b*V,n[5]=i*N+$*H+g*I+y*V,n[6]=l*N+f*H+m*I+S*V,n[7]=u*N+d*H+_*I+w*V,n[8]=a*K+v*re+p*ve+b*de,n[9]=i*K+$*re+g*ve+y*de,n[10]=l*K+f*re+m*ve+S*de,n[11]=u*K+d*re+_*ve+w*de,n[12]=a*le+v*he+p*Ae+b*Le,n[13]=i*le+$*he+g*Ae+y*Le,n[14]=l*le+f*he+m*Ae+S*Le,n[15]=u*le+d*he+_*Ae+w*Le,n}s(I0);s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=e[4],v=e[5],$=e[6],f=e[8],d=e[9],p=e[10],g=e[12],m=e[13],_=e[14],b=r[0],y=r[1],S=r[2],w=r[4],P=r[5],F=r[6],G=r[8],W=r[9],N=r[10],H=r[12],I=r[13],V=r[14];return n[0]=a*b+u*y+f*S,n[1]=i*b+v*y+d*S,n[2]=l*b+$*y+p*S,n[3]=0,n[4]=a*w+u*P+f*F,n[5]=i*w+v*P+d*F,n[6]=l*w+$*P+p*F,n[7]=0,n[8]=a*G+u*W+f*N,n[9]=i*G+v*W+d*N,n[10]=l*G+$*W+p*N,n[11]=0,n[12]=a*H+u*I+f*V+g,n[13]=i*H+v*I+d*V+m,n[14]=l*H+$*I+p*V+_,n[15]=1,n});s(function(e,r){var n=new Float64Array(16);r=Sa(r,mo);var a=r[0],i=r[1],l=r[2],u=Math.cos(e),v=1-u,$=Math.sin(e);return n[0]=a*a*v+u,n[1]=i*a*v+l*$,n[2]=l*a*v-i*$,n[3]=0,n[4]=a*i*v-l*$,n[5]=i*i*v+u,n[6]=i*l*v+a*$,n[7]=0,n[8]=a*l*v+i*$,n[9]=i*l*v-a*$,n[10]=l*l*v+u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),i=1/W0(r),l=r[0]*i,u=r[1]*i,v=r[2]*i,$=Math.cos(e),f=1-$,d=Math.sin(e),p=l*d,g=u*d,m=v*d,_=l*u*f,b=l*v*f,y=u*v*f,S=l*l*f+$,w=_+m,P=b-g,F=_-m,G=u*u*f+$,W=y+p,N=b+g,H=y-p,I=v*v*f+$,V=n[0],K=n[1],re=n[2],ve=n[3],de=n[4],le=n[5],he=n[6],Ae=n[7],Le=n[8],hr=n[9],br=n[10],ot=n[11],uu=n[12],vu=n[13],$u=n[14],su=n[15];return a[0]=V*S+de*w+Le*P,a[1]=K*S+le*w+hr*P,a[2]=re*S+he*w+br*P,a[3]=ve*S+Ae*w+ot*P,a[4]=V*F+de*G+Le*W,a[5]=K*F+le*G+hr*W,a[6]=re*F+he*G+br*W,a[7]=ve*F+Ae*G+ot*W,a[8]=V*N+de*H+Le*I,a[9]=K*N+le*H+hr*I,a[10]=re*N+he*H+br*I,a[11]=ve*N+Ae*H+ot*I,a[12]=uu,a[13]=vu,a[14]=$u,a[15]=su,a});function x$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(x$);E(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*l,n[9]=r[9]*l,n[10]=r[10]*l,n[11]=r[11]*l,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function S$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(S$);E(function(e,r,n,a){var i=new Float64Array(16),l=a[0],u=a[1],v=a[2],$=a[3],f=a[4],d=a[5],p=a[6],g=a[7],m=a[8],_=a[9],b=a[10],y=a[11];return i[0]=l,i[1]=u,i[2]=v,i[3]=$,i[4]=f,i[5]=d,i[6]=p,i[7]=g,i[8]=m,i[9]=_,i[10]=b,i[11]=y,i[12]=l*e+f*r+m*n+a[12],i[13]=u*e+d*r+_*n+a[13],i[14]=v*e+p*r+b*n+a[14],i[15]=$*e+g*r+y*n+a[15],i});s(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],l=e[2],u=r[0],v=r[1],$=r[2],f=r[3],d=r[4],p=r[5],g=r[6],m=r[7],_=r[8],b=r[9],y=r[10],S=r[11];return n[0]=u,n[1]=v,n[2]=$,n[3]=f,n[4]=d,n[5]=p,n[6]=g,n[7]=m,n[8]=_,n[9]=b,n[10]=y,n[11]=S,n[12]=u*a+d*i+_*l+r[12],n[13]=v*a+p*i+b*l+r[13],n[14]=$*a+g*i+y*l+r[14],n[15]=f*a+m*i+S*l+r[15],n});x(function(e,r,n){var a=N0(e,r,mo),i=Sa(kt(n,a,Ci),Ci),l=Sa(kt(a,i,Pi),Pi),u=b$,v=_$;return u[0]=i[0],u[1]=l[0],u[2]=a[0],u[3]=0,u[4]=i[1],u[5]=l[1],u[6]=a[1],u[7]=0,u[8]=i[2],u[9]=l[2],u[10]=a[2],u[11]=0,u[12]=0,u[13]=0,u[14]=0,u[15]=1,v[0]=1,v[1]=0,v[2]=0,v[3]=0,v[4]=0,v[5]=1,v[6]=0,v[7]=0,v[8]=0,v[9]=0,v[10]=1,v[11]=0,v[12]=-e[0],v[13]=-e[1],v[14]=-e[2],v[15]=1,I0(u,v)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var zi=0;function Ln(e,r){for(;r.b;r=r.b)e(r.a)}function po(e){for(var r=0;e.b;e=e.b)r++;return r}var C$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},P$=xe(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),z$=s(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),L$=s(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),k$=s(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),T$=s(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),M$=s(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),F$=s(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),D$=s(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),J$=s(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),A$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},B$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},V$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},j$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},U0=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},O0=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},R$=function(e){e.gl.disable(e.gl.CULL_FACE)},E$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},N$=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},W$=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Li=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],H$=[B$,V$,j$,U0,O0,R$,E$,N$,W$];function ki(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function G$(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function q0(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function I$(e,r,n,a){for(var i=n.a.dS,l=[],u=0;u<i;u++)l.push(String.fromCharCode(97+u));function v(m,_,b,y,S){var w;if(i===1)for(w=0;w<_;w++)m[b++]=_===1?y[S]:y[S][w];else l.forEach(function(P){for(w=0;w<_;w++)m[b++]=_===1?y[P][S]:y[P][S][w]})}var $=q0(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var f=0,d=$.size*$.arraySize*i,p=new $.type(po(n.b)*d);Ln(function(m){v(p,$.size*$.arraySize,f,m,a[r.name]||r.name),f+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function U$(e,r){if(r.a.d$>0){var n=e.createBuffer(),a=O$(r.c,r.a.d$);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dS*po(r.b),indexBuffer:null,buffers:{}}}function O$(e,r){var n=new Uint32Array(po(e)*r),a=0,i;return Ln(function(l){if(r===1)n[a++]=l;else for(i=0;i<r;i++)n[a++]=l[String.fromCharCode(97+i)]},e),n}function Ti(e,r){return e+"#"+r}var Y0=s(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),U0(n),O0(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(l){if(!!l.d.b.b){var u,v,$;if(l.b.id&&l.c.id&&(u=Ti(l.b.id,l.c.id),v=n.programs[u]),!v){var f;l.b.id?f=n.shaders[l.b.id]:l.b.id=zi++,f||(f=ki(a,l.b.src,a.VERTEX_SHADER),n.shaders[l.b.id]=f);var d;l.c.id?d=n.shaders[l.c.id]:l.c.id=zi++,d||(d=ki(a,l.c.src,a.FRAGMENT_SHADER),n.shaders[l.c.id]=d);var p=G$(a,f,d);v={glProgram:p,attributes:Object.assign({},l.b.attributes,l.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},v.uniformSetters=q$(a,e,v,Object.assign({},l.b.uniforms,l.c.uniforms));var g=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var m=a.getActiveAttrib(p,$),_=a.getAttribLocation(p,m.name);v.activeAttributes.push(m),v.activeAttributeLocations.push(_)}u=Ti(l.b.id,l.c.id),n.programs[u]=v}n.lastProgId!==u&&(a.useProgram(v.glProgram),n.lastProgId=u),Y$(v.uniformSetters,l.e);var b=n.buffers.get(l.d);for(b||(b=U$(a,l.d),n.buffers.set(l.d,b)),$=0;$<v.activeAttributes.length;$++){m=v.activeAttributes[$],_=v.activeAttributeLocations[$],b.buffers[m.name]===void 0&&(b.buffers[m.name]=I$(a,m,l.d,v.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[m.name]);var y=q0(a,m.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,P=0;P<y.arraySize;P++)a.enableVertexAttribArray(_+P),a.vertexAttribPointer(_+P,y.size,y.baseType,!1,w,S*P)}for(n.toggle=!n.toggle,Ln(ad(n),l.a),$=0;$<Li.length;$++){var F=n[Li[$]];F.toggle!==n.toggle&&F.enabled&&(H$[$](n),F.enabled=!1,F.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(l.d.a.ex,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(l.d.a.ex,0,b.numIndices)}}return Ln(i,e.g),r});function q$(e,r,n,a){var i=n.glProgram,l=n.currentUniforms,u=0,v=r.f;function $(m,_){var b=_.name,y=e.getUniformLocation(m,b);switch(_.type){case e.INT:return function(w){l[b]!==w&&(e.uniform1i(y,w),l[b]=w)};case e.FLOAT:return function(w){l[b]!==w&&(e.uniform1f(y,w),l[b]=w)};case e.FLOAT_VEC2:return function(w){l[b]!==w&&(e.uniform2f(y,w[0],w[1]),l[b]=w)};case e.FLOAT_VEC3:return function(w){l[b]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),l[b]=w)};case e.FLOAT_VEC4:return function(w){l[b]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),l[b]=w)};case e.FLOAT_MAT4:return function(w){l[b]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),l[b]=w)};case e.SAMPLER_2D:var S=u++;return function(w){e.activeTexture(e.TEXTURE0+S);var P=v.textures.get(w);P||(P=w.fj(e),v.textures.set(w,P)),e.bindTexture(e.TEXTURE_2D,P),l[b]!==w&&(e.uniform1i(y,S),l[b]=w)};case e.BOOL:return function(w){l[b]!==w&&(e.uniform1i(y,w),l[b]=w)};default:return function(){}}}for(var f={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var g=e.getActiveUniform(i,p);f[a[g.name]||g.name]=$(i,g)}return f}function Y$(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Z$=x(function(e,r,n){return Dv(r,{g:n,f:{},h:e},a3,t3)}),X$=s(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),K$=s(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Q$=s(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),e3=s(function(e,r){e.contextAttributes.antialias=!0}),r3=s(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),n3=s(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function a3(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ln(function(i){return c(nd,r,i)},e.h);var n=fr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),C$(function(){return c(Y0,e,n)})):(n=fr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function t3(e,r){return r.f=e.f,Y0(r)}var M=xu,Qn=_u,Z0=x(function(e,r,n){var a=n.c,i=n.d,l=s(function(u,v){if(u.$){var f=u.a;return t(Qn,e,v,f)}else{var $=u.a;return t(Qn,l,v,$)}});return t(Qn,l,t(Qn,e,r,i),a)}),go=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,l=n.d,u=n.e,v=e,$=t(e,a,i,t(go,e,r,u)),f=l;e=v,r=$,n=f;continue e}}),Mi=function(e){return t(go,x(function(r,n,a){return c(M,k(r,n),a)}),L,e)},X0=1,o3=2,K0=0,Ce=function(e){return{$:1,a:e}},ho=s(function(e,r){return{$:3,a:e,b:r}}),Fi=s(function(e,r){return{$:0,a:e,b:r}}),Q0=s(function(e,r){return{$:1,a:e,b:r}}),fe=function(e){return{$:0,a:e}},i3=function(e){return{$:2,a:e}},ae=function(e){return{$:0,a:e}},q={$:1},c3=qu,l3=fv,ye=C0,Mr=s(function(e,r){return c(Iu,e,Na(r))}),bo=s(function(e,r){return h(c(Gu,e,r))}),ec=function(e){return c(Mr,`
    `,c(bo,`
`,e))},En=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,l=e,u=c(e,a,r),v=i;e=l,r=u,n=v;continue e}else return r}),Ke=function(e){return t(En,s(function(r,n){return n+1}),0,e)},u3=Su,v3=x(function(e,r,n){e:for(;;)if(Z(e,r)<1){var a=e,i=r-1,l=c(M,r,n);e=a,r=i,n=l;continue e}else return n}),en=s(function(e,r){return t(v3,e,r,L)}),_o=s(function(e,r){return t(u3,e,c(en,0,Ke(r)-1),r)}),ir=rv,rc=function(e){var r=ir(e);return 97<=r&&r<=122},nc=function(e){var r=ir(e);return r<=90&&65<=r},$3=function(e){return rc(e)||nc(e)},s3=function(e){var r=ir(e);return r<=57&&48<=r},f3=function(e){return rc(e)||nc(e)||s3(e)},De=function(e){return t(En,M,L,e)},ln=Eu,m3=s(function(e,r){return`

(`+(ye(e+1)+(") "+ec(d3(r))))}),d3=function(e){return c(p3,e,L)},p3=s(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,u=e.b,a=function(){var b=ln(n);if(b.$===1)return!1;var y=b.a,S=y.a,w=y.b;return $3(S)&&c(c3,f3,w)}(),i=a?"."+n:"['"+(n+"']"),$=u,f=c(M,i,r);e=$,r=f;continue e;case 1:var l=e.a,u=e.b,v="["+(ye(l)+"]"),$=u,f=c(M,v,r);e=$,r=f;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+c(Mr,"",De(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(ye(Ke(d))+" ways:"));return c(Mr,`

`,c(M,_,c(_o,m3,d)))}else{var u=d.a,$=u,f=r;e=$,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+c(Mr,"",De(r)):"!"}();default:var g=e.a,m=e.b,_=function(){return r.b?"Problem with the value at json"+(c(Mr,"",De(r))+`:

    `):`Problem with the given value:

`}();return _+(ec(c(l3,4,m))+(`

`+g))}}),Re=32,Tt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mt=du,wo=Du,yo=s(function(e,r){return gi(r)/gi(e)}),g3=Mu,kn=wo(c(yo,2,Re)),ac=z(Tt,0,kn,Mt,Mt),tc=gu,oc=function(e){return{$:1,a:e}};s(function(e,r){return e(r)});s(function(e,r){return r(e)});var Rr=Ju,Ft=pu,Je=s(function(e,r){return Z(e,r)>0?e:r}),h3=function(e){return{$:0,a:e}},xo=hu,b3=s(function(e,r){e:for(;;){var n=c(xo,Re,e),a=n.a,i=n.b,l=c(M,h3(a),r);if(i.b){var u=i,v=l;e=u,r=v;continue e}else return De(l)}}),_3=function(e){var r=e.a;return r},w3=s(function(e,r){e:for(;;){var n=wo(r/Re);if(n===1)return c(xo,Re,e).a;var a=c(b3,e,L),i=n;e=a,r=i;continue e}}),ic=s(function(e,r){if(r.o){var n=r.o*Re,a=Rr(c(yo,Re,n-1)),i=e?De(r.D):r.D,l=c(w3,i,r.o);return z(Tt,Ft(r.t)+n,c(Je,5,a*kn),l,r.t)}else return z(Tt,Ft(r.t),kn,Mt,r.t)}),y3=xe(function(e,r,n,a,i){e:for(;;){if(r<0)return c(ic,!1,{D:a,o:n/Re|0,t:i});var l=oc(t(tc,Re,r,e)),u=e,v=r-Re,$=n,f=c(M,l,a),d=i;e=u,r=v,n=$,a=f,i=d;continue e}}),x3=s(function(e,r){if(e<=0)return ac;var n=e%Re,a=t(tc,n,e-n,r),i=e-n-Re;return C(y3,r,i,e,L,a)}),qe=function(e){return!e.$},J=uv,Q=tv,D=lv,pe=ov,S3=function(e){return{$:2,a:e}},cc=s(function(e,r){return e}),lc=s(function(e,r){return{fg:r.fg,fh:e,cJ:r.cJ,fs:r.fs,d2:r.d2,ch:r.ch,cn:r.cn,gC:r.gC}}),Tn=vv,C3=$v,Ve=av,So=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},P3=Dr,Di=er(function(e,r,n,a,i,l){return{dX:l,dZ:r,eB:a,eE:n,eH:e,eI:i}}),z3=Yu,Fr=Nu,Hr=Uu,Nn=s(function(e,r){return e<1?r:t(Hr,e,Fr(r),r)}),Wa=Xu,Ha=function(e){return e===""},Ga=s(function(e,r){return e<1?"":t(Hr,0,e,r)}),uc=Ku,Ji=xe(function(e,r,n,a,i){if(Ha(i)||c(z3,"@",i))return q;var l=c(Wa,":",i);if(l.b){if(l.b.b)return q;var u=l.a,v=uc(c(Nn,u+1,i));if(v.$===1)return q;var $=v;return ae(Te(Di,e,c(Ga,u,i),$,r,n,a))}else return ae(Te(Di,e,i,q,r,n,a))}),Ai=E(function(e,r,n,a){if(Ha(a))return q;var i=c(Wa,"/",a);if(i.b){var l=i.a;return C(Ji,e,c(Nn,l,a),r,n,c(Ga,l,a))}else return C(Ji,e,"/",r,n,a)}),Bi=x(function(e,r,n){if(Ha(n))return q;var a=c(Wa,"?",n);if(a.b){var i=a.a;return z(Ai,e,ae(c(Nn,i+1,n)),r,c(Ga,i,n))}else return z(Ai,e,q,r,n)});s(function(e,r){if(Ha(r))return q;var n=c(Wa,"#",r);if(n.b){var a=n.a;return t(Bi,e,ae(c(Nn,a+1,r)),c(Ga,a,r))}else return t(Bi,e,q,r)});var L3=Zu,Co=function(e){},Wn=Ar,k3=Wn(0),vc=E(function(e,r,n,a){if(a.b){var i=a.a,l=a.b;if(l.b){var u=l.a,v=l.b;if(v.b){var $=v.a,f=v.b;if(f.b){var d=f.a,p=f.b,g=n>500?t(En,e,r,De(p)):z(vc,e,r,n+1,p);return c(e,i,c(e,u,c(e,$,c(e,d,g))))}else return c(e,i,c(e,u,c(e,$,r)))}else return c(e,i,c(e,u,r))}else return c(e,i,r)}else return r}),gr=x(function(e,r,n){return z(vc,e,r,0,n)}),oe=s(function(e,r){return t(gr,s(function(n,a){return c(M,e(n),a)}),L,r)}),Ca=Pt,Po=s(function(e,r){return c(Ca,function(n){return Wn(e(n))},r)}),T3=x(function(e,r,n){return c(Ca,function(a){return c(Ca,function(i){return Wn(c(e,a,i))},n)},r)}),M3=function(e){return t(gr,T3(M),Wn(L),e)},F3=yv,D3=s(function(e,r){var n=r;return L0(c(Ca,F3(e),n))}),J3=x(function(e,r,n){return c(Po,function(a){return 0},M3(c(oe,D3(e),r)))}),A3=x(function(e,r,n){return Wn(0)}),B3=s(function(e,r){var n=r;return c(Po,e,n)});or.Task=_v(k3,J3,A3,B3);var V3=T0("Task"),zo=s(function(e,r){return V3(c(Po,e,r))}),j3=r$,R3=ju,Pa={$:1},$c=function(e){return{$:2,a:e}},Ia={$:0},He=s(function(e,r){return{$:0,a:e,b:r}}),ne=x(function(e,r,n){return r(e(n))}),un=function(e){var r=e.b.r;return r.a},E3=function(e){var r=e.a,n=e.b.ab,a=e.b.r,i=e.b.al;if(i.b){var l=i.a,u=i.b;return ae(c(He,r,{r:l,al:u,ab:c(M,a,n)}))}else return q},sc=function(e){var r=e.b;return c(He,Ia,r)},Ue=s(function(e,r){if(r.$)return e;var n=r.a;return n}),N3=x(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return r.ch.dR?sc(n):n;case 2:var l=a.a.dy;return(Z(l+r.fs,un(n).fg)>0?c(ne,E3,Ue(c(He,Pa,i))):Dr)(c(He,$c({dy:l+r.fs}),i));default:var u=i.r,v=u.a,$=u.b,f=c(lc,v.fh,X(r,{fg:v.fg+r.fs})),d=c(e,f,$);return c(He,Ia,{r:k(f,d),al:L,ab:c(M,i.r,i.ab)})}}),fc=s(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),W3=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,l=e-1,u=i,v=c(M,a,n);e=l,r=u,n=v;continue e}else return n}}),H3=s(function(e,r){return De(t(W3,e,r,L))}),mc=x(function(e,r,n){if(r<=0)return L;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,l=i.b,u=l.a;return h([w,u]);case 3:if(a.b.b.b.b){var v=a.b,w=v.a,$=v.b,u=$.a,f=$.b,d=f.a;return h([w,u,d])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,w=p.a,g=p.b,u=g.a,m=g.b,d=m.a,_=m.b,b=_.a,y=_.b;return e>1e3?c(M,w,c(M,u,c(M,d,c(M,b,c(H3,r-4,y))))):c(M,w,c(M,u,c(M,d,c(M,b,t(mc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return h([w])}}),G3=s(function(e,r){return t(mc,0,e,r)}),I3=s(function(e,r){var n=r.b.ab,a=r.b.r,i=r.b.al,l=se(De(n),se(h([a]),i)),u=c(G3,e,l),v=c(fc,e,l);if(v.b){var $=v.a,f=v.b;return c(He,Pa,{r:$,al:f,ab:De(u)})}else{var d=De(u);if(d.b){var p=d.a,g=d.b;return c(He,Pa,{r:p,al:L,ab:g})}else return r}}),U3=function(e){var r=e.b;return c(He,Pa,r)},O3=function(e){var r=e.b;return c(He,$c({dy:un(e).fg}),r)},q3=s(function(e,r){switch(e.$){case 1:return U3(r);case 2:return sc(r);case 3:return O3(r);default:var n=e.a;return c(I3,n,r)}}),dc=s(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Y3=s(function(e,r){return X(r,{aI:e(r.aI)})}),Z3=function(e){return{$:3,a:e}},X3=function(e){return{$:2,a:e}},pc=s(function(e,r){return{$:0,a:e,b:r}}),K3=s(function(e,r){return{$:1,a:e,b:r}}),Pe=s(function(e,r){if(r.$)return q;var n=r.a;return ae(e(n))}),Y=function(e){return e<0?-e:e},Lo=Qu,Q3=x(function(e,r,n){return c(Ue,0/0,Lo(c(e,r,n)))}),gc=s(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,l=a;e=i,r=l;continue e}else return!1}),es=Hu,hc=function(e){return t(es,M,L,e)},rs=s(function(e,r){var n=c(gc,function(a){return a!=="0"&&a!=="."},hc(r));return se(e&&n?"-":"",r)}),ue=C0,Dt=Ru,bc=nv,_c=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ln(n);if(a.$===1)return"01";var i=a.a;return c(Dt,"0",_c(i))}else{var l=ir(r);return l>=48&&l<57?c(Dt,bc(l+1),n):"0"}},Jt=Fu,ns=Vu,Ua=function(e){return c(Dt,e,"")},wc=x(function(e,r,n){return e<=0?n:t(wc,e>>1,se(r,r),e&1?se(n,r):n)}),Mn=s(function(e,r){return t(wc,e,r,"")}),At=x(function(e,r,n){return se(n,c(Mn,e-Fr(n),Ua(r)))}),Bt=Wu,yc=function(e){var r=c(bo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return k(n,i)}else{var n=r.a;return k(n,"0")}else return k("0","0")},as=function(e){var r=c(bo,"e",ue(Y(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,l=c(Ue,0,uc(c(L3,"+",i)?c(Nn,1,i):i)),u=yc(n),v=u.a,$=u.b,f=se(v,$),d=l<0?c(Ue,"0",c(Pe,function(p){var g=p.a,m=p.b;return g+("."+m)},c(Pe,dc(Ua),ln(se(c(Mn,Y(l),"0"),f))))):t(At,l+1,"0",f);return se(e<0?"-":"",d)}else{var n=r.a;return se(e<0?"-":"",n)}else return""},ts=x(function(e,r,n){if(Jt(n)||ns(n))return ue(n);var a=n<0,i=yc(as(Y(n))),l=i.a,u=i.b,v=Fr(l)+r,$=se(c(Mn,-v+1,"0"),t(At,v,"0",se(l,u))),f=Fr($),d=c(Je,1,v),p=c(e,a,t(Hr,d,f,$)),g=t(Hr,0,d,$),m=p?Bt(c(Ue,"1",c(Pe,_c,ln(Bt(g))))):g,_=Fr(m),b=m==="0"?m:r<=0?se(m,c(Mn,Y(r),"0")):Z(r,Fr(u))<0?t(Hr,0,_-r,m)+("."+t(Hr,_-r,_,m)):se(l+".",t(At,r,"0",u));return c(rs,a,b)}),xc=ts(s(function(e,r){var n=ln(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(l){return l>53&&e||l>=53&&!e}(ir(i))})),os=Q3(xc),is=x(function(e,r,n){var a=c(yo,10,Y(r-e)),i=a<0?3:a<1?2:a<2?1:0;return c(os,i,n)}),Sc=yu,ko=s(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,i=r.d,l=r.e,u=c(Sc,e,n);switch(u){case 0:var v=e,$=i;e=v,r=$;continue e;case 1:return ae(a);default:var v=e,$=l;e=v,r=$;continue e}}}),O=xe(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),ur={$:-2},rn=xe(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,$=i.e;if(a.$===-1&&!a.a){a.a;var f=a.b,d=a.c,p=a.d,g=a.e;return C(O,0,r,n,C(O,1,f,d,p,g),C(O,1,l,u,v,$))}else return C(O,e,l,u,C(O,0,r,n,a,v),$)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var f=a.b,d=a.c,m=a.d;m.a;var _=m.b,b=m.c,y=m.d,S=m.e,g=a.e;return C(O,0,f,d,C(O,1,_,b,y,S),C(O,1,r,n,g,i))}else return C(O,e,r,n,a,i)}),Vt=x(function(e,r,n){if(n.$===-2)return C(O,0,e,r,ur,ur);var a=n.a,i=n.b,l=n.c,u=n.d,v=n.e,$=c(Sc,e,i);switch($){case 0:return C(rn,a,i,l,t(Vt,e,r,u),v);case 1:return C(O,a,i,r,u,v);default:return C(rn,a,i,l,u,t(Vt,e,r,v))}}),Ur=x(function(e,r,n){var a=t(Vt,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,l=a.c,u=a.d,v=a.e;return C(O,1,i,l,u,v)}else{var $=a;return $}}),cs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Cc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,v=i.d,$=i.e,f=e.e;f.a;var d=f.b,p=f.c,g=f.d;g.a;var m=g.b,_=g.c,b=g.d,y=g.e,S=f.e;return C(O,0,m,_,C(O,1,n,a,C(O,0,l,u,v,$),b),C(O,1,d,p,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,v=w.d,$=w.e,P=e.e;P.a;var d=P.b,p=P.c,g=P.d,S=P.e;return C(O,1,n,a,C(O,0,l,u,v,$),C(O,0,d,p,g,S))}else return e},Vi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var l=i.b,u=i.c,v=i.d;v.a;var $=v.b,f=v.c,d=v.d,p=v.e,g=i.e,m=e.e;m.a;var _=m.b,b=m.c,y=m.d,S=m.e;return C(O,0,l,u,C(O,1,$,f,d,p),C(O,1,n,a,g,C(O,0,_,b,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var l=w.b,u=w.c,P=w.d,g=w.e,F=e.e;F.a;var _=F.b,b=F.c,y=F.d,S=F.e;return C(O,1,n,a,C(O,0,l,u,P,g),C(O,0,_,b,y,S))}else return e},ls=Ra(function(e,r,n,a,i,l,u){if(l.$===-1&&!l.a){l.a;var v=l.b,$=l.c,f=l.d,d=l.e;return C(O,n,v,$,f,C(O,0,a,i,d,u))}else{e:for(;;)if(u.$===-1&&u.a===1)if(u.d.$===-1)if(u.d.a===1){u.a;var p=u.d;return p.a,Vi(r)}else break e;else return u.a,u.d,Vi(r);else break e;return r}}),$a=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,l=i.a,u=i.d,v=e.e;if(l===1){if(u.$===-1&&!u.a)return u.a,C(O,r,n,a,$a(i),v);var $=Cc(e);if($.$===-1){var f=$.a,d=$.b,p=$.c,g=$.d,m=$.e;return C(rn,f,d,p,$a(g),m)}else return ur}else return C(O,r,n,a,$a(i),v)}else return ur},yn=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(Z(e,a)<0)if(l.$===-1&&l.a===1){l.a;var v=l.d;if(v.$===-1&&!v.a)return v.a,C(O,n,a,i,c(yn,e,l),u);var $=Cc(r);if($.$===-1){var f=$.a,d=$.b,p=$.c,g=$.d,m=$.e;return C(rn,f,d,p,c(yn,e,g),m)}else return ur}else return C(O,n,a,i,c(yn,e,l),u);else return c(us,e,to(ls,e,r,n,a,i,l,u))}),us=s(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;if(dr(e,a)){var v=cs(u);if(v.$===-1){var $=v.b,f=v.c;return C(rn,n,$,f,l,$a(u))}else return ur}else return C(rn,n,a,i,l,c(yn,e,u))}else return ur}),Pc=s(function(e,r){var n=c(yn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,l=n.d,u=n.e;return C(O,1,a,i,l,u)}else{var v=n;return v}}),ea=x(function(e,r,n){var a=r(c(ko,e,n));if(a.$)return c(Pc,e,n);var i=a.a;return t(Ur,e,i,n)}),vs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return c(ea,r,Pe(function(a){if(a.$===1){var i=a.a,l=i.a,u=i.b;return c(K3,k(l,u),n)}else return a}));case 0:var r=e.a,n=e.b;return c(ea,r,Pe(function(a){if(a.$)return a;var i=a.a,l=i.a,u=i.b;return c(pc,k(l,u),t(is,l,u,n))}));case 3:var r=e.a,n=e.b;return c(ea,r,Pe(function(a){return a.$===3?Z3(n):a}));default:var r=e.a,n=e.b;return c(ea,r,Pe(function(a){return a.$===2?X3(n):a}))}},$s=function(e){return Y3(vs(e))},ss=s(function(e,r){return c(oe,$s(e),r)}),fs=s(function(e,r){return X(r,{fh:c(ss,e,r.fh)})}),ms=s(function(e,r){var n=r.a,a=r.b;return c(He,n,X(a,{r:c(dc,fs(e),a.r)}))}),ds=s(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),ps=x(function(e,r,n){var a=n.a,i=n.b,l=i.r;return c(He,a,X(i,{r:c(ds,c(e,l.a,r),l)}))}),gs=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return X(a,{a$:!a.a$});case 2:var i=n.a;return X(a,{K:t(N3,e,i,a.K)});case 3:var l=n.a;return X(a,{K:c(ms,l,a.K)});case 4:var u=n.a;return X(a,{K:t(ps,r,u,a.K)});default:var v=n.a;return X(a,{K:c(q3,v,a.K)})}}),hs=s(function(e,r){return c(He,Ia,{r:k(e,r(e)),al:L,ab:L})}),bs=xv,ji=bs(L),za=cv,Fn=iv,_s=Lv("tick",c(J,function(e){return c(J,function(r){return c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return Ve({fg:u,cJ:l,fs:i,d2:a,ch:n,cn:r,gC:e})},c(D,"clock",pe))},c(D,"devicePixelRatio",pe))},c(D,"dt",pe))},c(D,"keyboard",c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return c(J,function(d){return c(J,function(p){return Ve({e1:p,fi:d,dR:f,fr:$,fU:v,gc:u,gh:l,eO:i,eW:a})},c(D,"alt",Q))},c(D,"control",Q))},c(D,"down",Q))},c(D,"downs",za(Fn)))},c(D,"left",Q))},c(D,"pressedKeys",za(Fn)))},c(D,"right",Q))},c(D,"shift",Q))},c(D,"up",Q))))},c(D,"pointer",c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return Ve({dR:f,cO:$,f$:v,gi:u,gj:l,eW:i,gF:a,gJ:n})},c(D,"down",Q))},c(D,"isDown",Q))},c(D,"move",Q))},c(D,"rightDown",Q))},c(D,"rightUp",Q))},c(D,"up",Q))},c(D,"x",pe))},c(D,"y",pe))))},c(D,"screen",c(J,function(r){return c(J,function(n){return Ve({fF:n,gD:r})},c(D,"height",pe))},c(D,"width",pe))))},c(D,"wheel",c(J,function(e){return c(J,function(r){return Ve({fl:r,fm:e})},c(D,"deltaX",pe))},c(D,"deltaY",pe))))),ws=function(e){return{$:4,a:e}},ys={$:0},xs=z0,Oe=s(function(e,r){return c(D0,e,xs(r))}),A=Oe("className"),Ss=function(e){var r=e.b.r;return r.b},R=rr("div"),La=Oe("id"),Cs=Jv,ka=Cs,Ps=Av,ie=Ps,zs={$:1},Ls=function(e){return{$:3,a:e}},ks=function(e){return{$:5,a:e}},Ri=rr("a"),Oa=rr("button"),Ts=Rn("d"),zc=M0("http://www.w3.org/2000/svg"),Ms=zc("path"),Fs=zc("svg"),Ds=Rn("viewBox"),xn=function(e){return c(Fs,h([Ds("0 0 100 100"),c(ie,"width","100%"),c(ie,"height","100%")]),h([c(Ms,h([Ts(e)]),L)]))},Ei=function(e){return c(Oe,"href",Vv(e))},Or={fq:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",fz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fE:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ga:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",gb:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ch:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",ge:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",gn:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",gx:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",gz:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gO:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Js=function(e){return{$:0,a:e}},Lc=F0,To=s(function(e,r){return c(Lc,e,Js(r))}),Hn=function(e){return c(To,"click",Ve(e))},Ni=Oe("target"),As=Oe("title"),jt=s(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,i=r.c,l=r.d,u=r.e;return C(O,n,a,c(e,a,i),c(jt,e,l),c(jt,e,u))}),Bs=zt,me=Bs,kc=function(e){return t(go,x(function(r,n,a){return c(M,n,a)}),L,e)},Vs=s(function(e,r){return{$:3,a:e,b:r}}),js=s(function(e,r){return{$:2,a:e,b:r}}),Rs=s(function(e,r){return{$:0,a:e,b:r}}),Es=s(function(e,r){return{$:1,a:e,b:r}}),Mo=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ns=z(Mo,0/255,0/255,0/255,1),Ws=z0,Hs=s(function(e,r){return c(D0,e,Ws(r))}),Gs=Hs("checked"),Qe=Au,Is=x(function(e,r,n){return se(c(Mn,e-Fr(n),Ua(r)),n)}),nn=Pu,Tc=function(e){var r=function(n){return n<10?ye(n):Ua(bc(87+n))};return e<16?r(e):se(Tc(e/16|0),r(c(nn,16,e)))},Us=c(ne,Tc,c(Is,2,"0")),Fo=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{aX:i,cC:a,cM:n,dn:r}},Os=function(e){var r=Fo(e),n=r.dn,a=r.cM,i=r.cC;return c(Mr,"",c(M,"#",c(oe,c(ne,Qe,Us),h([n*255,a*255,i*255]))))},Rt=Oe("htmlFor"),Et=s(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Ta=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return e(n)}}),qs=x(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return c(M,i,n)}),Do=s(function(e,r){return t(gr,qs(e),L,r)}),Mc=E(function(e,r,n,a){return{fL:r,fZ:e,f4:n,gq:a}}),Ys=i$,Zs=ev,Xs=s(function(e,r){if(r.$)return Ce(e);var n=r.a;return fe(n)}),Ks=o$,Qs=function(e){return c(Ks,{fb:!1,f0:!1},e)},Jo=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return q},e1=s(function(e,r){if(r.$){var a=r.a;return Ce(a)}else{var n=r.a;return fe(e(n))}}),r1=function(e){return{$:2,a:e}},n1=function(e){return{$:0,a:e}},a1=function(e){return{$:1,a:e}},lt=s(function(e,r){return ir(r)-ir(e)}),ut=x(function(e,r,n){var a=ir(n);return Z(ir(e),a)<1&&Z(a,ir(r))<1}),t1=s(function(e,r){var n=function(i){return Z(i,e)<0?fe(i):Ce(a1(r))},a=t(ut,"0","9",r)?fe(c(lt,"0",r)):t(ut,"a","z",r)?fe(10+c(lt,"a",r)):t(ut,"A","Z",r)?fe(10+c(lt,"A",r)):Ce(n1(r));return c(Ta,n,a)}),Fc=s(function(e,r){var n=ln(r);if(n.$===1)return fe(0);var a=n.a,i=a.a,l=a.b;return c(Ta,function(u){return c(Ta,function(v){return fe(u+v*e)},c(Fc,e,l))},c(t1,e,i))}),o1=s(function(e,r){return 2<=e&&e<=36?c(Fc,e,Bt(r)):Ce(r1(e))}),i1=o1(16),o=x(function(e,r,n){return z(Mo,e,r,n,1)}),c1=E(function(e,r,n,a){return z(Mo,e,r,n,a)}),Gn=Cu,l1=s(function(e,r){var n=c(Gn,10,e);return Qe(r*n)/n}),u1=Ou,v1=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=hc(n);if(a.b&&!a.b.b){var i=a.a;return Zs(h([i,i]))}else return n};return c(ne,u1,c(ne,function(n){return c(Pe,function(a){return t(Ys,1,a,n)},Qs(e))},c(ne,Et(Jo),c(ne,Pe(function(n){return n.gq}),c(ne,Pe(Do(Dr)),c(ne,Xs("Parsing hex regex failed"),Ta(function(n){var a=c(oe,c(ne,r,c(ne,i1,e1(g3))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,l=a.b,u=l.a.a,v=l.b,$=v.a.a,f=v.b,d=f.a.a;return fe(z(c1,i/255,u/255,$/255,c(l1,2,d/255)))}else break e;else{var i=a.a.a,p=a.b,u=p.a.a,g=p.b,$=g.a.a;return fe(t(o,i/255,u/255,$/255))}else break e;return Ce("Parsing ints from hex failed")})))))))}(),Ma=rr("input"),Nt=rr("label"),Wt=Oe("name"),Dc=s(function(e,r){return t(gr,D,r,e)}),$1=c(Dc,h(["target","checked"]),Q),s1=function(e){return c(To,"change",c(Tn,e,$1))},f1=function(e){return k(e,!0)},m1=function(e){return{$:1,a:e}},d1=s(function(e,r){return c(Lc,e,m1(r))}),Jc=c(Dc,h(["target","value"]),Fn),Ao=function(e){return c(d1,"input",c(Tn,f1,c(Tn,e,Jc)))},Ac=Oe("max"),Bc=Oe("min"),Vc=function(e){return c(Oe,"step",e)},Fa=Oe("type"),In=Oe("value"),Wi=function(e){var r=e.cQ,n=e.dD,a=e.c4,i=e.c0,l=e.dv,u=e.c8;return c(R,L,h([c(Nt,h([Rt(r)]),h([c(R,h([A("relative w-full")]),h([c(R,h([A("inline-block")]),h([me(r)])),c(R,h([A("inline-block float-right")]),h([me(ue(n))]))]))])),c(Ma,h([Fa("range"),c(ie,"width","100%"),La(r),Wt(r),Bc(ue(a)),Ac(ue(i)),In(ue(n)),Vc(ue(l)),Ao(c(ne,Lo,c(ne,Ue(42),u)))]),L)]))},p1=s(function(e,r){if(r.$)return e;var n=r.a;return n}),g1=s(function(e,r){switch(r.$){case 3:var u=r.a;return c(R,L,h([c(R,h([A("mb-2")]),h([c(Nt,h([Rt(e)]),h([me(e)]))])),c(Ma,h([Fa("checkbox"),La(e),Wt(e),s1(Vs(e)),Gs(u)]),L)]));case 0:var n=r.a,i=n.a,l=n.b,u=r.b;return Wi({cQ:e,c0:l,c4:i,c8:Rs(e),dv:.01*(l-i),dD:u});case 1:var a=r.a,i=a.a,l=a.b,u=r.b;return Wi({cQ:e,c0:l,c4:i,c8:c(ne,Qe,Es(e)),dv:1,dD:u});default:var u=r.a;return c(R,L,h([c(R,h([c(ie,"margin-bottom","6px")]),h([c(Nt,h([Rt(e)]),h([me(e)]))])),c(Ma,h([Fa("color"),c(ie,"width","100%"),c(ie,"height","26px"),c(ie,"padding","0px"),La(e),Wt(e),Ao(function(v){return c(js,e,c(p1,Ns,v1(v)))}),In(Os(u))]),L)]))}}),h1=function(e){return c(R,h([A("p-4 border-y-[0.5px] border-white20")]),h([c(R,h([A("text-lg pb-2")]),h([me(e.f1)])),c(R,h([A("pl-2 pr-2")]),kc(c(jt,g1,e.aI)))]))},b1=function(e){return c(R,h([A("text-xs text-white60")]),c(oe,h1,e))},_1=function(e){return c(R,h([A("absolute left-[104px] bottom-2 text-sm text-white40")]),h([me("clock: "+c(xc,3,un(e).fg))]))},w1=function(e){e.a;var r=e.b.ab;return c(Pe,function(n){return Qe(60/(un(e).fg-n))},c(Pe,c(ne,_3,function(n){return n.fg}),Jo(c(fc,59,r))))},y1=function(e){return c(R,h([A("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=w1(e);if(r.$===1)return h([me("... Fps")]);var n=r.a;return h([me(ye(n)+" Fps")])}())},x1=function(e){return{$:0,a:e}},S1=function(e){var r=e.b.ab;return Ke(r)},C1=function(e){var r=e.b.ab;e.b.r;var n=e.b.al;return Ke(r)+1+Ke(n)},P1=function(e){return c(Ma,h([A("absolute w-full"),Fa("range"),Bc(ye(0)),Ac(ye(C1(e)-1)),In(ye(S1(e))),Vc(ye(1)),Ao(c(ne,Lo,c(ne,Ue(42),c(ne,Qe,x1))))]),L)},Hi={$:1},z1={$:3},L1={$:2},jc=function(e){return!e.b},Gi=s(function(e,r){return c(Oa,h([A("px-2 bg-black40"),A(r),Hn(e)]),h([me("REC")]))}),Ii=s(function(e,r){return c(Oa,h([A("absolute left-[60px] mx-1 px-1 bg-black40"),Hn(r)]),h([c(R,h([A("w-4 h-6 fill-white80")]),h([xn(e)]))]))}),k1=function(e){var r=e.a,n=e.b.al;return c(R,h([A("py-1")]),h([function(){switch(r.$){case 0:return c(Gi,Hi,"text-red-500 font-bold");case 1:return c(Gi,L1,"text-white80 font-bold");default:return c(R,L,L)}}(),function(){switch(r.$){case 0:return c(R,L,L);case 1:return jc(n)?c(R,L,L):c(Ii,Or.gb,z1);default:return c(Ii,Or.ga,Hi)}}()]))},T1=function(e){return c(R,h([A("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([P1(e),k1(e),y1(e),_1(e)]))},M1=function(e){var r=e.a;return dr(r,Ia)},F1=s(function(e,r){var n=M1(r.K)?c(R,L,L):c(R,h([A("absolute pointer-events-none w-8 h-8"),c(ie,"left",ue(e.ch.gF+.5*e.cn.gD)+"px"),c(ie,"top",ue(-e.ch.gJ+.5*e.cn.fF)+"px")]),h([c(R,h([A(e.ch.cO?"fill-black80":"fill-white40")]),h([xn(Or.ch)]))]));return c(R,L,h([n]))}),D1=s(function(e,r){var n=c(Oa,h([A(r.a$?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Hn(zs),As("Distraction Free Mode")]),h([xn(Or.gO)])),a=c(R,h([A("absolute w-8 bottom-12")]),h([c(Ri,h([A("fill-twitterBlue40 hover:fill-twitterBlue"),Ei("https://twitter.com/AzizErkalSelman"),Ni("_blank")]),h([xn(Or.gx)]))])),i=c(R,h([A("absolute w-8 bottom-2")]),h([c(Ri,h([A("fill-githubCat40 hover:fill-githubCat"),Ei("https://github.com/erkal/elm-3d-playground-exploration"),Ni("_blank")]),h([xn(Or.fz)]))]));return r.a$?c(R,h([A("fixed w-10 h-10 p-1")]),h([n])):c(R,L,h([c(R,h([A("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,i])),c(R,h([A("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),h([c(ka,Ls,b1(un(r.K).fh))])),c(R,h([A("absolute bottom-0 left-[300px] w-[600px] h-20")]),h([c(ka,ks,T1(r.K))])),c(F1,e,r)]))}),J1=x(function(e,r,n){var a=Ss(n.K),i=un(n.K);return c(R,h([A("bg-black40"),A("select-none"),A("antialiased"),A("font-mono"),c(ie,"width",ue(i.cn.gD)+"px"),c(ie,"height",ue(i.cn.fF)+"px")]),h([c(R,h([A("fixed")]),h([c(ka,cc(ys),c(e,i,a))])),c(R,h([La("gui")]),h([c(D1,i,n),c(ka,ws,c(r,i,a))]))]))}),A1=er(function(e,r,n,a,i,l){var u=s(function($,f){return k(z(gs,r,l,$,f),ji)}),v=function($){var f=c(lc,n,$.fN);return k({a$:$.fN.cn.gD<500,K:c(hs,f,a)},ji)};return j3({fM:v,gr:cc(_s(S3)),gy:u,gB:c(J1,e,i)})}),Bo=ur,B1=function(e){return{a:Bo,_:e}},V1=function(e){var r=e.a,n=e.b,a=e.c;return k(k(n,a),function(){return r?1:0}())},Rc={e6:150,bB:1,gw:B1(V1)},j1=function(e){return{F:L,n:L,r:e}},R1=function(e){return{l:j1(Rc),a9:{cr:0,ct:0},aB:0}},E1=x(function(e,r,n){return{aI:n,fQ:r,f1:e}}),N1=function(e){return t(En,s(function(r,n){var a=r.a,i=r.b;return t(Ur,a,i,n)}),Bo,e)},W1=x(function(e,r,n){return t(E1,e,r,N1(n))}),Ui=W1,ra=x(function(e,r,n){var a=r.a,i=r.b;return k(e,c(pc,k(a,i),n))}),H1=h([t(Ui,"Camera",!0,h([t(ra,"camera x",k(-40,40),0),t(ra,"camera y",k(-40,0),0),t(ra,"camera z",k(1,50),20)])),t(Ui,"Parameters",!0,h([t(ra,"trixel scale",k(.5,1),1)]))]),Oi=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ec=function(e){var r=e.cr,n=e.ct,a=function(i){return i-Rr(i)};return a(r)+a(n)<1?t(Oi,0,Rr(r),Rr(n)):t(Oi,1,Rr(r),Rr(n))},G1=x(function(e,r,n){var a=n;return X(a,{a:t(Ur,a._(e),k(e,r),a.a)})}),I1=x(function(e,r,n){return X(n,{gw:t(G1,e,r,n.gw)})}),U1=s(function(e,r){var n=r;return X(n,{r:e(n.r)})}),Da=s(function(e,r){return X(r,{l:c(U1,e,r.l)})}),O1=s(function(e,r){return e.ch.cO?c(Da,c(I1,Ec(r.a9),r.aB),r):r}),q1=s(function(e,r){var n=r;return X(n,{a:c(Pc,n._(e),n.a)})}),Y1=s(function(e,r){return X(r,{gw:c(q1,e,r.gw)})}),Z1=s(function(e,r){return e.d2.eO&&e.ch.cO?c(Da,Y1(Ec(r.a9)),r):r}),X1=s(function(e,r){return c(Pe,function(n){if(n.$)return 0;var a=n.b;return a},c(ko,e,r.aI))}),K1=s(function(e,r){return c(Ue,0,Jo(c(Do,X1(e),r)))}),Q1=s(function(e,r){return c(K1,e,r.fh)}),sa=Q1,an=zu,Dn=function(e){return e},Gr=function(e){return Dn(an*(e/180))},Xe=Bu,ef=s(function(e,r){var n=e,a=r,i=a.dJ-n.dJ,l=a.gJ-n.gJ,u=a.gF-n.gF,v=c(Je,Y(u),c(Je,Y(l),Y(i)));if(v){var $=i/v,f=l/v,d=u/v,p=Xe(d*d+f*f+$*$);return ae({gF:d/p,gJ:f/p,dJ:$/p})}else return q}),vt=function(e){return e},Vo=s(function(e,r){var n=e,a=r;return{gF:a.gJ*n.dJ-a.dJ*n.gJ,gJ:a.dJ*n.gF-a.gF*n.dJ,dJ:a.gF*n.gJ-a.gJ*n.gF}}),Sn=function(e){var r=e,n=c(Je,Y(r.gF),c(Je,Y(r.gJ),Y(r.dJ)));if(n){var a=r.dJ/n,i=r.gJ/n,l=r.gF/n,u=Xe(l*l+i*i+a*a);return ae({gF:l/u,gJ:i/u,dJ:a/u})}else return q},Ja=s(function(e,r){var n=e,a=r;return{gF:a.gF-n.gF,gJ:a.gJ-n.gJ,dJ:a.dJ-n.dJ}}),rf=s(function(e,r){var n=e,a=r;return a.gF*n.gF+a.gJ*n.gJ+a.dJ*n.dJ}),Nc=s(function(e,r){var n=e,a=r;return Z(a,n)>0}),nf=s(function(e,r){var n=e,a=r;return Z(a,n)<0}),af=s(function(e,r){var n=e,a=r;return{gF:a.gF-n.gF,gJ:a.gJ-n.gJ,dJ:a.dJ-n.dJ}}),tf=s(function(e,r){var n=e,a=r,i=a.gF*n.gF+a.gJ*n.gJ+a.dJ*n.dJ;return{gF:n.gF*i,gJ:n.gJ*i,dJ:n.dJ*i}}),of=function(e){var r=e;return{gF:-r.gF,gJ:-r.gJ,dJ:-r.dJ}},We=0,Wc={gF:0,gJ:0,dJ:0},cf=x(function(e,r,n){return c(Et,function(a){var i=c(af,c(tf,a,r),r);return c(Et,function(l){var u=c(Vo,r,e),v=c(rf,n,u),$=c(Nc,We,v)?u:c(nf,We,v)?of(u):Wc;return c(Pe,function(f){return B(a,l,f)},Sn($))},Sn(i))},Sn(e))}),lf=function(e){var r=e,n=Y(r.dJ),a=Y(r.gJ),i=Y(r.gF);if(Z(i,a)<1)if(Z(i,n)<1){var l=Xe(r.dJ*r.dJ+r.gJ*r.gJ);return{gF:0,gJ:-r.dJ/l,dJ:r.gJ/l}}else{var l=Xe(r.gJ*r.gJ+r.gF*r.gF);return{gF:-r.gJ/l,gJ:r.gF/l,dJ:0}}else if(Z(a,n)<1){var l=Xe(r.dJ*r.dJ+r.gF*r.gF);return{gF:r.dJ/l,gJ:0,dJ:-r.gF/l}}else{var l=Xe(r.gF*r.gF+r.gJ*r.gJ);return{gF:-r.gJ/l,gJ:r.gF/l,dJ:0}}},jo=function(e){var r=lf(e),n=r,a=n,i=e,l=i,u={gF:l.gJ*a.dJ-l.dJ*a.gJ,gJ:l.dJ*a.gF-l.gF*a.dJ,dJ:l.gF*a.gJ-l.gJ*a.gF};return k(r,u)},Ir=function(e){var r=e;return r},vr=function(e){return e},uf=s(function(e,r){var n=jo(e),a=n.a,i=n.b;return vr({c9:r,dH:a,dI:i,dK:e})}),vf=function(e){var r=c(Ja,e.a5,e.dW),n=Ir(e.eX),a=c(Vo,r,n),i=t(cf,r,n,a);if(i.$){var f=Sn(r);if(f.$){var p=jo(e.eX),g=p.a,m=p.b;return vr({c9:e.dW,dH:m,dI:e.eX,dK:g})}else{var d=f.a;return c(uf,d,e.dW)}}else{var l=i.a,u=l.a,v=l.b,$=l.c;return vr({c9:e.dW,dH:$,dI:v,dK:u})}},Ze={gF:0,gJ:0,dJ:0},$f=function(e){return{$:0,a:e}},_e=function(e){var r=e;return Y(r)},fa=function(e){var r=e;return .5*r},sf=Tu,ff=function(e){var r=e;return sf(r)},mf=function(e){var r=fa(_e(e.eY)),n=ff(r);return{dm:$f(n),dF:e.dF}},Jr=function(e){return e},Hc=Jr({gF:0,gJ:1,dJ:0}),df=function(e){var r=e.a5,n=e.dW,a=e.eX;return mf({eY:Gr(40),dF:vf({dW:vt(n),a5:vt(r),eX:c(Ue,Hc,c(ef,Ze,vt(a)))})})},Gc=function(e){return df({dW:{gF:c(sa,"camera x",e),gJ:c(sa,"camera y",e),dJ:c(sa,"camera z",e)},a5:{gF:0,gJ:0,dJ:0},eX:{gF:0,gJ:1,dJ:0}})},pf=function(e){var r=e.gF,n=e.gJ;return{cr:2/Xe(3)*r,ct:-1/Xe(3)*r+n}},cr=function(e){return e},gf=x(function(e,r,n){return{gF:e,gJ:r,dJ:n}}),na=function(e){return e},ma=function(e){var r=e;return r},hf=s(function(e,r){var n=e,a=r;return a.gF*n.gF+a.gJ*n.gJ+a.dJ*n.dJ}),Ro=function(e){var r=e;return r.fo},ee=s(function(e,r){var n=r;return e*n}),Eo=function(e){var r=e;return r.c9},bf=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=n.f3,v=u;return(a.gF-l.gF)*v.gF+(a.gJ-l.gJ)*v.gJ+(a.dJ-l.dJ)*v.dJ}),_f=x(function(e,r,n){var a=e,i=r,l=n;return{gF:l.gF+i*a.gF,gJ:l.gJ+i*a.gJ,dJ:l.dJ+i*a.dJ}}),wf=s(function(e,r){var n=Ro(r),a=e,i=a.f3,l=c(hf,i,n);if(l){var u=Eo(r),v=c(bf,e,u),$=c(ee,-1/l,v);return ae(t(_f,n,$,u))}else return q}),yf=s(function(e,r){return{gF:e,gJ:r}}),qi=s(function(e,r){var n=e,a=r;return n*a}),xf=function(e){var r=e;return r},Yi=function(e){var r=e;return xf(r.e4)},Sf=function(e){var r=e;return r.a_},Ic=s(function(e,r){var n=r;return n/e}),Br=function(e){var r=e;return r.c9},Ht=function(e){var r=e;return Br(r)},Gt=function(e){var r=e;return-r},Uc=Jr({gF:0,gJ:0,dJ:-1}),Cf=s(function(e,r){var n=e,a=r;return a/n}),Pf=s(function(e,r){var n=e,a=r,i=n.dK,l=i,u=n.dI,v=u,$=n.dH,f=$;return{gF:f.gF*a.gF+v.gF*a.gJ+l.gF*a.dJ,gJ:f.gJ*a.gF+v.gJ*a.gJ+l.gJ*a.dJ,dJ:f.dJ*a.gF+v.dJ*a.gJ+l.dJ*a.dJ}}),tn=s(function(e,r){return{fo:r,c9:e}}),mr=function(e){var r=e;return{gF:-r.gF,gJ:-r.gJ,dJ:-r.dJ}},Pr=function(e){var r=e;return r.dK},It=function(e){var r=e;return mr(Pr(r))},zf=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=n.dH,v=u;return(a.gF-l.gF)*v.gF+(a.gJ-l.gJ)*v.gJ}),No=x(function(e,r,n){var a=e,i=r,l=n;return{gF:a,gJ:i,dJ:l}}),Lf=E(function(e,r,n,a){var i=e,l=r,u=n,v=a,$=i.c9,f=$,d=i.dK,p=d,g=i.dI,m=g,_=i.dH,b=_;return{gF:f.gF+l*b.gF+u*m.gF+v*p.gF,gJ:f.gJ+l*b.gJ+u*m.gJ+v*p.gJ,dJ:f.dJ+l*b.dJ+u*m.dJ+v*p.dJ}}),kf=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=n.dI,v=u;return(a.gF-l.gF)*v.gF+(a.gJ-l.gJ)*v.gJ}),Tf=x(function(e,r,n){var a=e,i=c(kf,Yi(r),n),l=c(zf,Yi(r),n),u=a.dF,v=u,$=Sf(r);$.a;var f=$.b,d=a.dm;if(d.$){var _=d.a,b=c(Cf,f,_),y=z(Lf,v,c(qi,b,l),c(qi,b,i),We);return c(tn,y,It(a.dF))}else{var p=d.a,g=Gt(c(Ic,p,c(ee,.5,f))),m=c(Pf,v,c(Ue,Uc,Sn(t(No,l,i,g))));return c(tn,Ht(a.dF),m)}}),wr=Lu,yr=ku,Ut=function(e){var r=e;return{gF:wr(r),gJ:yr(r)}},Mf=function(e){var r=e;return{gF:-r.gJ,gJ:r.gF}},Ff=function(e){return e},Df=s(function(e,r){return Ff({c9:r,dH:e,dI:Mf(e)})}),Jf=s(function(e,r){return c(Df,Ut(e),r)}),Af=x(function(e,r,n){var a=e.a,i=e.b;return{e4:c(Jf,r,n),a_:k(_e(a),_e(i))}}),qr=function(e){var r=e;return r.gF},Bf=s(function(e,r){var n=e,a=r;return{gF:n,gJ:a}}),Yr=function(e){var r=e;return r.gJ},Zr=function(e){var r=e;return r.dJ},Vf=E(function(e,r,n,a){var i=n.gF,l=n.gJ,u=function(f){return t(gf,ma(qr(f)),ma(Yr(f)),ma(Zr(f)))},v=t(Af,k(na(r.gD),na(r.fF)),Gr(0),c(yf,0,0)),$=c(Bf,na(i),na(l));return c(Pe,u,c(wf,a,t(Tf,e,v,$)))}),vn=s(function(e,r){var n=e,a=r;return{gF:a.gF+n.gF,gJ:a.gJ+n.gJ,dJ:a.dJ+n.dJ}}),jf=s(function(e,r){return{f3:e,c9:r}}),Rf=s(function(e,r){var n=r;return c(jf,n.f3,c(vn,e,n.c9))}),Ef=s(function(e,r){return{f3:r,c9:e}}),Oc=Jr({gF:0,gJ:0,dJ:1}),qa=Oc,Nf=c(Ef,Ze,qa),Wf=E(function(e,r,n,a){return z(Vf,r,n,a,c(Rf,t(No,cr(0),cr(0),cr(e)),Nf))}),Hf=Wf(0),Gf=s(function(e,r){var n=t(Hf,Gc(e),e.cn,e.ch);if(n.$===1)return r;var a=n.a;return X(r,{a9:pf({gF:a.gF,gJ:a.gJ})})}),If=s(function(e,r){return c(Z1,e,c(O1,e,c(Gf,e,r)))}),Uf=s(function(e,r){var n=r;return X(n,{n:c(M,n.r,n.n),r:e})}),Of=function(e){var r=e,n=r.F;if(n.b){var a=n.a,i=n.b;return ae({F:i,n:c(M,r.r,r.n),r:a})}else return q},qf=function(e){var r=e,n=r.n;if(n.b){var a=n.a,i=n.b;return ae({F:c(M,r.r,r.F),n:i,r:a})}else return q},Yf=function(e){var r=e,n=r.F;if(n.b){var a=n.a,i=n.b;return X(r,{F:i,n:c(M,a,r.n)})}else return X(r,{F:De(r.n),n:L})},Zf=function(e){var r=e,n=r.n;if(n.b){var a=n.a,i=n.b;return X(r,{n:i,r:a})}else{var l=r.F;if(l.b){var a=l.a,i=l.b;return X(r,{F:i,r:a})}else return r}},Xf=s(function(e,r){return X(r,{e6:e})}),Kf=s(function(e,r){return X(r,{bB:e})}),Qf=x(function(e,r,n){switch(r.$){case 0:var a=r.a;return c(Da,Kf(a),n);case 1:var i=r.a;return X(n,{aB:i});case 2:return c(Da,Xf(n.aB),n);case 3:return X(n,{l:c(Ue,n.l,qf(n.l))});case 4:return X(n,{l:c(Ue,n.l,Of(n.l))});case 5:return X(n,{l:c(Uf,Rc,n.l)});case 6:return X(n,{l:Zf(n.l)});default:return X(n,{l:Yf(n.l)})}}),Jn=function(e){var r=e;return r.r},Tr=function(e){return e*an/180},$n=s(function(e,r){return{$:0,a:e,b:r}}),em=c($n,t(o,.001462,466e-6,.013866),h([t(o,.002267,.00127,.01857),t(o,.003299,.002249,.024239),t(o,.004547,.003392,.030909),t(o,.006006,.004692,.038558),t(o,.007676,.006136,.046836),t(o,.009561,.007713,.055143),t(o,.011663,.009417,.06346),t(o,.013995,.011225,.071862),t(o,.016561,.013136,.080282),t(o,.019373,.015133,.088767),t(o,.022447,.017199,.097327),t(o,.025793,.019331,.10593),t(o,.029432,.021503,.114621),t(o,.033385,.023702,.123397),t(o,.037668,.025921,.132232),t(o,.042253,.028139,.141141),t(o,.046915,.030324,.150164),t(o,.051644,.032474,.159254),t(o,.056449,.034569,.168414),t(o,.06134,.03659,.177642),t(o,.066331,.038504,.186962),t(o,.071429,.040294,.196354),t(o,.076637,.041905,.205799),t(o,.081962,.043328,.215289),t(o,.087411,.044556,.224813),t(o,.09299,.045583,.234358),t(o,.098702,.046402,.243904),t(o,.104551,.047008,.25343),t(o,.110536,.047399,.262912),t(o,.116656,.047574,.272321),t(o,.122908,.047536,.281624),t(o,.129285,.047293,.290788),t(o,.135778,.046856,.299776),t(o,.142378,.046242,.308553),t(o,.149073,.045468,.317085),t(o,.15585,.044559,.325338),t(o,.162689,.043554,.333277),t(o,.169575,.042489,.340874),t(o,.176493,.041402,.348111),t(o,.183429,.040329,.354971),t(o,.190367,.039309,.361447),t(o,.197297,.0384,.367535),t(o,.204209,.037632,.373238),t(o,.211095,.03703,.378563),t(o,.217949,.036615,.383522),t(o,.224763,.036405,.388129),t(o,.231538,.036405,.3924),t(o,.238273,.036621,.396353),t(o,.244967,.037055,.400007),t(o,.25162,.037705,.403378),t(o,.258234,.038571,.406485),t(o,.26481,.039647,.409345),t(o,.271347,.040922,.411976),t(o,.27785,.042353,.414392),t(o,.284321,.043933,.416608),t(o,.290763,.045644,.418637),t(o,.297178,.04747,.420491),t(o,.303568,.049396,.422182),t(o,.309935,.051407,.423721),t(o,.316282,.05349,.425116),t(o,.32261,.055634,.426377),t(o,.328921,.057827,.427511),t(o,.335217,.06006,.428524),t(o,.3415,.062325,.429425),t(o,.347771,.064616,.430217),t(o,.354032,.066925,.430906),t(o,.360284,.069247,.431497),t(o,.366529,.071579,.431994),t(o,.372768,.073915,.4324),t(o,.379001,.076253,.432719),t(o,.385228,.078591,.432955),t(o,.391453,.080927,.433109),t(o,.397674,.083257,.433183),t(o,.403894,.08558,.433179),t(o,.410113,.087896,.433098),t(o,.416331,.090203,.432943),t(o,.422549,.092501,.432714),t(o,.428768,.09479,.432412),t(o,.434987,.097069,.432039),t(o,.441207,.099338,.431594),t(o,.447428,.101597,.43108),t(o,.453651,.103848,.430498),t(o,.459875,.106089,.429846),t(o,.4661,.108322,.429125),t(o,.472328,.110547,.428334),t(o,.478558,.112764,.427475),t(o,.484789,.114974,.426548),t(o,.491022,.117179,.425552),t(o,.497257,.119379,.424488),t(o,.503493,.121575,.423356),t(o,.50973,.123769,.422156),t(o,.515967,.12596,.420887),t(o,.522206,.12815,.419549),t(o,.528444,.130341,.418142),t(o,.534683,.132534,.416667),t(o,.54092,.134729,.415123),t(o,.547157,.136929,.413511),t(o,.553392,.139134,.411829),t(o,.559624,.141346,.410078),t(o,.565854,.143567,.408258),t(o,.572081,.145797,.406369),t(o,.578304,.148039,.404411),t(o,.584521,.150294,.402385),t(o,.590734,.152563,.40029),t(o,.59694,.154848,.398125),t(o,.603139,.157151,.395891),t(o,.60933,.159474,.393589),t(o,.615513,.161817,.391219),t(o,.621685,.164184,.388781),t(o,.627847,.166575,.386276),t(o,.633998,.168992,.383704),t(o,.640135,.171438,.381065),t(o,.64626,.173914,.378359),t(o,.652369,.176421,.375586),t(o,.658463,.178962,.372748),t(o,.66454,.181539,.369846),t(o,.670599,.184153,.366879),t(o,.676638,.186807,.363849),t(o,.682656,.189501,.360757),t(o,.688653,.192239,.357603),t(o,.694627,.195021,.354388),t(o,.700576,.197851,.351113),t(o,.7065,.200728,.347777),t(o,.712396,.203656,.344383),t(o,.718264,.206636,.340931),t(o,.724103,.20967,.337424),t(o,.729909,.212759,.333861),t(o,.735683,.215906,.330245),t(o,.741423,.219112,.326576),t(o,.747127,.222378,.322856),t(o,.752794,.225706,.319085),t(o,.758422,.229097,.315266),t(o,.76401,.232554,.311399),t(o,.769556,.236077,.307485),t(o,.775059,.239667,.303526),t(o,.780517,.243327,.299523),t(o,.785929,.247056,.295477),t(o,.791293,.250856,.29139),t(o,.796607,.254728,.287264),t(o,.801871,.258674,.283099),t(o,.807082,.262692,.278898),t(o,.812239,.266786,.274661),t(o,.817341,.270954,.27039),t(o,.822386,.275197,.266085),t(o,.827372,.279517,.26175),t(o,.832299,.283913,.257383),t(o,.837165,.288385,.252988),t(o,.841969,.292933,.248564),t(o,.846709,.297559,.244113),t(o,.851384,.30226,.239636),t(o,.855992,.307038,.235133),t(o,.860533,.311892,.230606),t(o,.865006,.316822,.226055),t(o,.869409,.321827,.221482),t(o,.873741,.326906,.216886),t(o,.878001,.33206,.212268),t(o,.882188,.337287,.207628),t(o,.886302,.342586,.202968),t(o,.890341,.347957,.198286),t(o,.894305,.353399,.193584),t(o,.898192,.358911,.18886),t(o,.902003,.364492,.184116),t(o,.905735,.37014,.17935),t(o,.90939,.375856,.174563),t(o,.912966,.381636,.169755),t(o,.916462,.387481,.164924),t(o,.919879,.393389,.16007),t(o,.923215,.399359,.155193),t(o,.92647,.405389,.150292),t(o,.929644,.411479,.145367),t(o,.932737,.417627,.140417),t(o,.935747,.423831,.13544),t(o,.938675,.430091,.130438),t(o,.941521,.436405,.125409),t(o,.944285,.442772,.120354),t(o,.946965,.449191,.115272),t(o,.949562,.45566,.110164),t(o,.952075,.462178,.105031),t(o,.954506,.468744,.099874),t(o,.956852,.475356,.094695),t(o,.959114,.482014,.089499),t(o,.961293,.488716,.084289),t(o,.963387,.495462,.079073),t(o,.965397,.502249,.073859),t(o,.967322,.509078,.068659),t(o,.969163,.515946,.063488),t(o,.970919,.522853,.058367),t(o,.97259,.529798,.053324),t(o,.974176,.53678,.048392),t(o,.975677,.543798,.043618),t(o,.977092,.55085,.03905),t(o,.978422,.557937,.034931),t(o,.979666,.565057,.031409),t(o,.980824,.572209,.028508),t(o,.981895,.579392,.02625),t(o,.982881,.586606,.024661),t(o,.983779,.593849,.02377),t(o,.984591,.601122,.023606),t(o,.985315,.608422,.024202),t(o,.985952,.61575,.025592),t(o,.986502,.623105,.027814),t(o,.986964,.630485,.030908),t(o,.987337,.63789,.034916),t(o,.987622,.64532,.039886),t(o,.987819,.652773,.045581),t(o,.987926,.66025,.05175),t(o,.987945,.667748,.058329),t(o,.987874,.675267,.065257),t(o,.987714,.682807,.072489),t(o,.987464,.690366,.07999),t(o,.987124,.697944,.087731),t(o,.986694,.70554,.095694),t(o,.986175,.713153,.103863),t(o,.985566,.720782,.112229),t(o,.984865,.728427,.120785),t(o,.984075,.736087,.129527),t(o,.983196,.743758,.138453),t(o,.982228,.751442,.147565),t(o,.981173,.759135,.156863),t(o,.980032,.766837,.166353),t(o,.978806,.774545,.176037),t(o,.977497,.782258,.185923),t(o,.976108,.789974,.196018),t(o,.974638,.797692,.206332),t(o,.973088,.805409,.216877),t(o,.971468,.813122,.227658),t(o,.969783,.820825,.238686),t(o,.968041,.828515,.249972),t(o,.966243,.836191,.261534),t(o,.964394,.843848,.273391),t(o,.962517,.851476,.285546),t(o,.960626,.859069,.29801),t(o,.95872,.866624,.31082),t(o,.956834,.874129,.323974),t(o,.954997,.881569,.337475),t(o,.953215,.888942,.351369),t(o,.951546,.896226,.365627),t(o,.950018,.903409,.380271),t(o,.948683,.910473,.395289),t(o,.947594,.917399,.410665),t(o,.946809,.924168,.426373),t(o,.946392,.930761,.442367),t(o,.946403,.937159,.458592),t(o,.946903,.943348,.47497),t(o,.947937,.949318,.491426),t(o,.949545,.955063,.50786),t(o,.95174,.960587,.524203),t(o,.954529,.965896,.540361),t(o,.957896,.971003,.556275),t(o,.961812,.975924,.571925),t(o,.966249,.980678,.587206),t(o,.971162,.985282,.602154),t(o,.976511,.989753,.61676),t(o,.982257,.994109,.631017),t(o,.988362,.998364,.644924)])),rm=c($n,t(o,.001462,466e-6,.013866),h([t(o,.002258,.001295,.018331),t(o,.003279,.002305,.023708),t(o,.004512,.00349,.029965),t(o,.007588,.006356,.044973),t(o,.009426,.008022,.052844),t(o,.011465,.009828,.06075),t(o,.013708,.011771,.068667),t(o,.016156,.01384,.076603),t(o,.018815,.016026,.084584),t(o,.021692,.01832,.09261),t(o,.024792,.020715,.100676),t(o,.028123,.023201,.108787),t(o,.031696,.025765,.116965),t(o,.03552,.028397,.125209),t(o,.039608,.03109,.133515),t(o,.04383,.03383,.141886),t(o,.048062,.036607,.150327),t(o,.05232,.039407,.158841),t(o,.056615,.04216,.167446),t(o,.060949,.044794,.176129),t(o,.06533,.047318,.184892),t(o,.069764,.049726,.193735),t(o,.074257,.052017,.20266),t(o,.078815,.054184,.211667),t(o,.083446,.056225,.220755),t(o,.088155,.058133,.229922),t(o,.092949,.059904,.239164),t(o,.097833,.061531,.248477),t(o,.102815,.06301,.257854),t(o,.107899,.064335,.267289),t(o,.113094,.065492,.276784),t(o,.118405,.066479,.286321),t(o,.123833,.067295,.295879),t(o,.12938,.067935,.305443),t(o,.135053,.068391,.315),t(o,.140858,.068654,.324538),t(o,.146785,.068738,.334011),t(o,.152839,.068637,.343404),t(o,.159018,.068354,.352688),t(o,.165308,.067911,.361816),t(o,.171713,.067305,.370771),t(o,.178212,.066576,.379497),t(o,.184801,.065732,.387973),t(o,.19146,.064818,.396152),t(o,.198177,.063862,.404009),t(o,.204935,.062907,.411514),t(o,.211718,.061992,.418647),t(o,.218512,.061158,.425392),t(o,.225302,.060445,.431742),t(o,.232077,.059889,.437695),t(o,.238826,.059517,.443256),t(o,.245543,.059352,.448436),t(o,.25222,.059415,.453248),t(o,.258857,.059706,.45771),t(o,.265447,.060237,.46184),t(o,.271994,.060994,.46566),t(o,.278493,.061978,.46919),t(o,.284951,.063168,.472451),t(o,.291366,.064553,.475462),t(o,.29774,.066117,.478243),t(o,.304081,.067835,.480812),t(o,.310382,.069702,.483186),t(o,.316654,.07169,.48538),t(o,.322899,.073782,.487408),t(o,.329114,.075972,.489287),t(o,.335308,.078236,.491024),t(o,.341482,.080564,.492631),t(o,.347636,.082946,.494121),t(o,.353773,.085373,.495501),t(o,.359898,.087831,.496778),t(o,.366012,.090314,.49796),t(o,.372116,.092816,.499053),t(o,.378211,.095332,.500067),t(o,.384299,.097855,.501002),t(o,.390384,.100379,.501864),t(o,.396467,.102902,.502658),t(o,.402548,.10542,.503386),t(o,.408629,.10793,.504052),t(o,.414709,.110431,.504662),t(o,.420791,.11292,.505215),t(o,.426877,.115395,.505714),t(o,.432967,.117855,.50616),t(o,.439062,.120298,.506555),t(o,.445163,.122724,.506901),t(o,.451271,.125132,.507198),t(o,.457386,.127522,.507448),t(o,.463508,.129893,.507652),t(o,.46964,.132245,.507809),t(o,.47578,.134577,.507921),t(o,.481929,.136891,.507989),t(o,.488088,.139186,.508011),t(o,.494258,.141462,.507988),t(o,.500438,.143719,.50792),t(o,.506629,.145958,.507806),t(o,.512831,.148179,.507648),t(o,.519045,.150383,.507443),t(o,.52527,.152569,.507192),t(o,.531507,.154739,.506895),t(o,.537755,.156894,.506551),t(o,.544015,.159033,.506159),t(o,.550287,.161158,.505719),t(o,.556571,.163269,.50523),t(o,.562866,.165368,.504692),t(o,.569172,.167454,.504105),t(o,.57549,.16953,.503466),t(o,.581819,.171596,.502777),t(o,.588158,.173652,.502035),t(o,.594508,.175701,.501241),t(o,.600868,.177743,.500394),t(o,.607238,.179779,.499492),t(o,.613617,.181811,.498536),t(o,.620005,.18384,.497524),t(o,.626401,.185867,.496456),t(o,.632805,.187893,.495332),t(o,.639216,.189921,.49415),t(o,.645633,.191952,.49291),t(o,.652056,.193986,.491611),t(o,.658483,.196027,.490253),t(o,.664915,.198075,.488836),t(o,.671349,.200133,.487358),t(o,.677786,.202203,.485819),t(o,.684224,.204286,.484219),t(o,.690661,.206384,.482558),t(o,.697098,.208501,.480835),t(o,.703532,.210638,.479049),t(o,.709962,.212797,.477201),t(o,.716387,.214982,.47529),t(o,.722805,.217194,.473316),t(o,.729216,.219437,.471279),t(o,.735616,.221713,.46918),t(o,.742004,.224025,.467018),t(o,.748378,.226377,.464794),t(o,.754737,.228772,.462509),t(o,.761077,.231214,.460162),t(o,.767398,.233705,.457755),t(o,.773695,.236249,.455289),t(o,.779968,.238851,.452765),t(o,.786212,.241514,.450184),t(o,.792427,.244242,.447543),t(o,.798608,.24704,.444848),t(o,.804752,.249911,.442102),t(o,.810855,.252861,.439305),t(o,.816914,.255895,.436461),t(o,.822926,.259016,.433573),t(o,.828886,.262229,.430644),t(o,.834791,.26554,.427671),t(o,.840636,.268953,.424666),t(o,.846416,.272473,.421631),t(o,.852126,.276106,.418573),t(o,.857763,.279857,.415496),t(o,.86332,.283729,.412403),t(o,.868793,.287728,.409303),t(o,.874176,.291859,.406205),t(o,.879464,.296125,.403118),t(o,.884651,.30053,.400047),t(o,.889731,.305079,.397002),t(o,.8947,.309773,.393995),t(o,.899552,.314616,.391037),t(o,.904281,.31961,.388137),t(o,.908884,.324755,.385308),t(o,.913354,.330052,.382563),t(o,.917689,.3355,.379915),t(o,.921884,.341098,.377376),t(o,.925937,.346844,.374959),t(o,.929845,.352734,.372677),t(o,.933606,.358764,.370541),t(o,.937221,.364929,.368567),t(o,.940687,.371224,.366762),t(o,.944006,.377643,.365136),t(o,.94718,.384178,.363701),t(o,.95021,.39082,.362468),t(o,.953099,.397563,.361438),t(o,.955849,.4044,.360619),t(o,.958464,.411324,.360014),t(o,.960949,.418323,.35963),t(o,.96331,.42539,.359469),t(o,.965549,.432519,.359529),t(o,.967671,.439703,.35981),t(o,.96968,.446936,.360311),t(o,.971582,.45421,.36103),t(o,.973381,.46152,.361965),t(o,.975082,.468861,.363111),t(o,.97669,.476226,.364466),t(o,.97821,.483612,.366025),t(o,.979645,.491014,.367783),t(o,.981,.498428,.369734),t(o,.982279,.505851,.371874),t(o,.983485,.51328,.374198),t(o,.984622,.520713,.376698),t(o,.985693,.528148,.379371),t(o,.9867,.535582,.38221),t(o,.987646,.543015,.38521),t(o,.988533,.550446,.388365),t(o,.989363,.557873,.391671),t(o,.990138,.565296,.395122),t(o,.990871,.572706,.398714),t(o,.991558,.580107,.402441),t(o,.992196,.587502,.406299),t(o,.992785,.594891,.410283),t(o,.993326,.602275,.41439),t(o,.993834,.609644,.418613),t(o,.994309,.616999,.42295),t(o,.994738,.62435,.427397),t(o,.995122,.631696,.431951),t(o,.99548,.639027,.436607),t(o,.99581,.646344,.441361),t(o,.996096,.653659,.446213),t(o,.996341,.660969,.45116),t(o,.99658,.668256,.456192),t(o,.996775,.675541,.461314),t(o,.996925,.682828,.466526),t(o,.997077,.690088,.471811),t(o,.997186,.697349,.477182),t(o,.997254,.704611,.482635),t(o,.997325,.711848,.488154),t(o,.997351,.719089,.493755),t(o,.997351,.726324,.499428),t(o,.997341,.733545,.505167),t(o,.997285,.740772,.510983),t(o,.997228,.747981,.516859),t(o,.997138,.75519,.522806),t(o,.997019,.762398,.528821),t(o,.996898,.769591,.534892),t(o,.996727,.776795,.541039),t(o,.996571,.783977,.547233),t(o,.996369,.791167,.553499),t(o,.996162,.798348,.55982),t(o,.995932,.805527,.566202),t(o,.99568,.812706,.572645),t(o,.995424,.819875,.57914),t(o,.995131,.827052,.585701),t(o,.994851,.834213,.592307),t(o,.994524,.841387,.598983),t(o,.994222,.84854,.605696),t(o,.993866,.855711,.612482),t(o,.993545,.862859,.619299),t(o,.99317,.870024,.626189),t(o,.992831,.877168,.633109),t(o,.99244,.88433,.640099),t(o,.992089,.89147,.647116),t(o,.991688,.898627,.654202),t(o,.991332,.905763,.661309),t(o,.99093,.912915,.668481),t(o,.99057,.920049,.675675),t(o,.990175,.927196,.682926),t(o,.989815,.934329,.690198),t(o,.989434,.94147,.697519),t(o,.989077,.948604,.704863),t(o,.988717,.955742,.712242),t(o,.988367,.962878,.719649),t(o,.988033,.970012,.727077),t(o,.987691,.977154,.734536),t(o,.987387,.984288,.742002),t(o,.987053,.991438,.749504)])),nm=c($n,t(o,.2081,.1663,.5292),h([t(o,.2091,.1721,.5411),t(o,.2101,.1779,.553),t(o,.2109,.1837,.565),t(o,.2116,.1895,.5771),t(o,.2121,.1954,.5892),t(o,.2124,.2013,.6013),t(o,.2125,.2072,.6135),t(o,.2123,.2132,.6258),t(o,.2118,.2192,.6381),t(o,.2111,.2253,.6505),t(o,.2099,.2315,.6629),t(o,.2084,.2377,.6753),t(o,.2063,.244,.6878),t(o,.2038,.2503,.7003),t(o,.2006,.2568,.7129),t(o,.1968,.2632,.7255),t(o,.1921,.2698,.7381),t(o,.1867,.2764,.7507),t(o,.1802,.2832,.7634),t(o,.1728,.2902,.7762),t(o,.1641,.2975,.789),t(o,.1541,.3052,.8017),t(o,.1427,.3132,.8145),t(o,.1295,.3217,.8269),t(o,.1147,.3306,.8387),t(o,.0986,.3397,.8495),t(o,.0816,.3486,.8588),t(o,.0646,.3572,.8664),t(o,.0482,.3651,.8722),t(o,.0329,.3724,.8765),t(o,.0213,.3792,.8796),t(o,.0136,.3853,.8815),t(o,.0086,.3911,.8827),t(o,.006,.3965,.8833),t(o,.0051,.4017,.8834),t(o,.0054,.4066,.8831),t(o,.0067,.4113,.8825),t(o,.0089,.4159,.8816),t(o,.0116,.4203,.8805),t(o,.0148,.4246,.8793),t(o,.0184,.4288,.8779),t(o,.0223,.4329,.8763),t(o,.0264,.437,.8747),t(o,.0306,.441,.8729),t(o,.0349,.4449,.8711),t(o,.0394,.4488,.8692),t(o,.0437,.4526,.8672),t(o,.0477,.4564,.8652),t(o,.0514,.4602,.8632),t(o,.0549,.464,.8611),t(o,.0582,.4677,.8589),t(o,.0612,.4714,.8568),t(o,.064,.4751,.8546),t(o,.0666,.4788,.8525),t(o,.0689,.4825,.8503),t(o,.071,.4862,.8481),t(o,.0729,.4899,.846),t(o,.0746,.4937,.8439),t(o,.0761,.4974,.8418),t(o,.0773,.5012,.8398),t(o,.0782,.5051,.8378),t(o,.0789,.5089,.8359),t(o,.0794,.5129,.8341),t(o,.0795,.5169,.8324),t(o,.0793,.521,.8308),t(o,.0788,.5251,.8293),t(o,.0778,.5295,.828),t(o,.0764,.5339,.827),t(o,.0746,.5384,.8261),t(o,.0724,.5431,.8253),t(o,.0698,.5479,.8247),t(o,.0668,.5527,.8243),t(o,.0636,.5577,.8239),t(o,.06,.5627,.8237),t(o,.0562,.5677,.8234),t(o,.0523,.5727,.8231),t(o,.0484,.5777,.8228),t(o,.0445,.5826,.8223),t(o,.0408,.5874,.8217),t(o,.0372,.5922,.8209),t(o,.0342,.5968,.8198),t(o,.0317,.6012,.8186),t(o,.0296,.6055,.8171),t(o,.0279,.6097,.8154),t(o,.0265,.6137,.8135),t(o,.0255,.6176,.8114),t(o,.0248,.6214,.8091),t(o,.0243,.625,.8066),t(o,.0239,.6285,.8039),t(o,.0237,.6319,.801),t(o,.0235,.6352,.798),t(o,.0233,.6384,.7948),t(o,.0231,.6415,.7916),t(o,.023,.6445,.7881),t(o,.0229,.6474,.7846),t(o,.0227,.6503,.781),t(o,.0227,.6531,.7773),t(o,.0232,.6558,.7735),t(o,.0238,.6585,.7696),t(o,.0246,.6611,.7656),t(o,.0263,.6637,.7615),t(o,.0282,.6663,.7574),t(o,.0306,.6688,.7532),t(o,.0338,.6712,.749),t(o,.0373,.6737,.7446),t(o,.0418,.6761,.7402),t(o,.0467,.6784,.7358),t(o,.0516,.6808,.7313),t(o,.0574,.6831,.7267),t(o,.0629,.6854,.7221),t(o,.0692,.6877,.7173),t(o,.0755,.6899,.7126),t(o,.082,.6921,.7078),t(o,.0889,.6943,.7029),t(o,.0956,.6965,.6979),t(o,.1031,.6986,.6929),t(o,.1104,.7007,.6878),t(o,.118,.7028,.6827),t(o,.1258,.7049,.6775),t(o,.1335,.7069,.6723),t(o,.1418,.7089,.6669),t(o,.1499,.7109,.6616),t(o,.1585,.7129,.6561),t(o,.1671,.7148,.6507),t(o,.1758,.7168,.6451),t(o,.1849,.7186,.6395),t(o,.1938,.7205,.6338),t(o,.2033,.7223,.6281),t(o,.2128,.7241,.6223),t(o,.2224,.7259,.6165),t(o,.2324,.7275,.6107),t(o,.2423,.7292,.6048),t(o,.2527,.7308,.5988),t(o,.2631,.7324,.5929),t(o,.2735,.7339,.5869),t(o,.2845,.7354,.5809),t(o,.2953,.7368,.5749),t(o,.3064,.7381,.5689),t(o,.3177,.7394,.563),t(o,.3289,.7406,.557),t(o,.3405,.7417,.5512),t(o,.352,.7428,.5453),t(o,.3635,.7438,.5396),t(o,.3753,.7446,.5339),t(o,.3869,.7454,.5283),t(o,.3986,.7461,.5229),t(o,.4103,.7467,.5175),t(o,.4218,.7473,.5123),t(o,.4334,.7477,.5072),t(o,.4447,.7482,.5021),t(o,.4561,.7485,.4972),t(o,.4672,.7487,.4924),t(o,.4783,.7489,.4877),t(o,.4892,.7491,.4831),t(o,.5,.7491,.4786),t(o,.5106,.7492,.4741),t(o,.5212,.7492,.4698),t(o,.5315,.7491,.4655),t(o,.5418,.749,.4613),t(o,.5519,.7489,.4571),t(o,.5619,.7487,.4531),t(o,.5718,.7485,.449),t(o,.5816,.7482,.4451),t(o,.5913,.7479,.4412),t(o,.6009,.7476,.4374),t(o,.6103,.7473,.4335),t(o,.6197,.7469,.4298),t(o,.629,.7465,.4261),t(o,.6382,.746,.4224),t(o,.6473,.7456,.4188),t(o,.6564,.7451,.4152),t(o,.6653,.7446,.4116),t(o,.6742,.7441,.4081),t(o,.683,.7435,.4046),t(o,.6918,.743,.4011),t(o,.7004,.7424,.3976),t(o,.7091,.7418,.3942),t(o,.7176,.7412,.3908),t(o,.7261,.7405,.3874),t(o,.7346,.7399,.384),t(o,.743,.7392,.3806),t(o,.7513,.7385,.3773),t(o,.7596,.7378,.3739),t(o,.7679,.7372,.3706),t(o,.7761,.7364,.3673),t(o,.7843,.7357,.3639),t(o,.7924,.735,.3606),t(o,.8005,.7343,.3573),t(o,.8085,.7336,.3539),t(o,.8166,.7329,.3506),t(o,.8246,.7322,.3472),t(o,.8325,.7315,.3438),t(o,.8405,.7308,.3404),t(o,.8484,.7301,.337),t(o,.8563,.7294,.3336),t(o,.8642,.7288,.33),t(o,.872,.7282,.3265),t(o,.8798,.7276,.3229),t(o,.8877,.7271,.3193),t(o,.8954,.7266,.3156),t(o,.9032,.7262,.3117),t(o,.911,.7259,.3078),t(o,.9187,.7256,.3038),t(o,.9264,.7256,.2996),t(o,.9341,.7256,.2953),t(o,.9417,.7259,.2907),t(o,.9493,.7264,.2859),t(o,.9567,.7273,.2808),t(o,.9639,.7285,.2754),t(o,.9708,.7303,.2696),t(o,.9773,.7326,.2634),t(o,.9831,.7355,.257),t(o,.9882,.739,.2504),t(o,.9922,.7431,.2437),t(o,.9952,.7476,.2373),t(o,.9973,.7524,.231),t(o,.9986,.7573,.2251),t(o,.9991,.7624,.2195),t(o,.999,.7675,.2141),t(o,.9985,.7726,.209),t(o,.9976,.7778,.2042),t(o,.9964,.7829,.1995),t(o,.995,.788,.1949),t(o,.9933,.7931,.1905),t(o,.9914,.7981,.1863),t(o,.9894,.8032,.1821),t(o,.9873,.8083,.178),t(o,.9851,.8133,.174),t(o,.9828,.8184,.17),t(o,.9805,.8235,.1661),t(o,.9782,.8286,.1622),t(o,.9759,.8337,.1583),t(o,.9736,.8389,.1544),t(o,.9713,.8441,.1505),t(o,.9692,.8494,.1465),t(o,.9672,.8548,.1425),t(o,.9654,.8603,.1385),t(o,.9638,.8659,.1343),t(o,.9623,.8716,.1301),t(o,.9611,.8774,.1258),t(o,.96,.8834,.1215),t(o,.9593,.8895,.1171),t(o,.9588,.8958,.1126),t(o,.9586,.9022,.1082),t(o,.9587,.9088,.1036),t(o,.9591,.9155,.099),t(o,.9599,.9225,.0944),t(o,.961,.9296,.0897),t(o,.9624,.9368,.085),t(o,.9641,.9443,.0802),t(o,.9662,.9518,.0753),t(o,.9685,.9595,.0703),t(o,.971,.9673,.0651),t(o,.9736,.9752,.0597),t(o,.9763,.9831,.0538)])),am=c($n,t(o,.050383,.029803,.527975),h([t(o,.063536,.028426,.533124),t(o,.075353,.027206,.538007),t(o,.086222,.026125,.542658),t(o,.096379,.025165,.547103),t(o,.10598,.024309,.551368),t(o,.115124,.023556,.555468),t(o,.123903,.022878,.559423),t(o,.132381,.022258,.56325),t(o,.140603,.021687,.566959),t(o,.148607,.021154,.570562),t(o,.156421,.020651,.574065),t(o,.16407,.020171,.577478),t(o,.171574,.019706,.580806),t(o,.17895,.019252,.584054),t(o,.186213,.018803,.587228),t(o,.193374,.018354,.59033),t(o,.200445,.017902,.593364),t(o,.207435,.017442,.596333),t(o,.21435,.016973,.599239),t(o,.221197,.016497,.602083),t(o,.227983,.016007,.604867),t(o,.234715,.015502,.607592),t(o,.241396,.014979,.610259),t(o,.248032,.014439,.612868),t(o,.254627,.013882,.615419),t(o,.261183,.013308,.617911),t(o,.267703,.012716,.620346),t(o,.274191,.012109,.622722),t(o,.280648,.011488,.625038),t(o,.287076,.010855,.627295),t(o,.293478,.010213,.62949),t(o,.299855,.009561,.631624),t(o,.30621,.008902,.633694),t(o,.312543,.008239,.6357),t(o,.318856,.007576,.63764),t(o,.32515,.006915,.639512),t(o,.331426,.006261,.641316),t(o,.337683,.005618,.643049),t(o,.343925,.004991,.64471),t(o,.35015,.004382,.646298),t(o,.356359,.003798,.64781),t(o,.362553,.003243,.649245),t(o,.368733,.002724,.650601),t(o,.374897,.002245,.651876),t(o,.381047,.001814,.653068),t(o,.387183,.001434,.654177),t(o,.393304,.001114,.655199),t(o,.399411,859e-6,.656133),t(o,.405503,678e-6,.656977),t(o,.41158,577e-6,.65773),t(o,.417642,564e-6,.65839),t(o,.423689,646e-6,.658956),t(o,.429719,831e-6,.659425),t(o,.435734,.001127,.659797),t(o,.441732,.00154,.660069),t(o,.447714,.00208,.66024),t(o,.453677,.002755,.66031),t(o,.459623,.003574,.660277),t(o,.46555,.004545,.660139),t(o,.471457,.005678,.659897),t(o,.477344,.00698,.659549),t(o,.48321,.00846,.659095),t(o,.489055,.010127,.658534),t(o,.494877,.01199,.657865),t(o,.500678,.014055,.657088),t(o,.506454,.016333,.656202),t(o,.512206,.018833,.655209),t(o,.517933,.021563,.654109),t(o,.523633,.024532,.652901),t(o,.529306,.027747,.651586),t(o,.534952,.031217,.650165),t(o,.54057,.03495,.64864),t(o,.546157,.038954,.64701),t(o,.551715,.043136,.645277),t(o,.557243,.047331,.643443),t(o,.562738,.051545,.641509),t(o,.568201,.055778,.639477),t(o,.573632,.060028,.637349),t(o,.579029,.064296,.635126),t(o,.584391,.068579,.632812),t(o,.589719,.072878,.630408),t(o,.595011,.07719,.627917),t(o,.600266,.081516,.625342),t(o,.605485,.085854,.622686),t(o,.610667,.090204,.619951),t(o,.615812,.094564,.61714),t(o,.620919,.098934,.614257),t(o,.625987,.103312,.611305),t(o,.631017,.107699,.608287),t(o,.636008,.112092,.605205),t(o,.640959,.116492,.602065),t(o,.645872,.120898,.598867),t(o,.650746,.125309,.595617),t(o,.65558,.129725,.592317),t(o,.660374,.134144,.588971),t(o,.665129,.138566,.585582),t(o,.669845,.142992,.582154),t(o,.674522,.147419,.578688),t(o,.67916,.151848,.575189),t(o,.683758,.156278,.57166),t(o,.688318,.160709,.568103),t(o,.69284,.165141,.564522),t(o,.697324,.169573,.560919),t(o,.701769,.174005,.557296),t(o,.706178,.178437,.553657),t(o,.710549,.182868,.550004),t(o,.714883,.187299,.546338),t(o,.719181,.191729,.542663),t(o,.723444,.196158,.538981),t(o,.72767,.200586,.535293),t(o,.731862,.205013,.531601),t(o,.736019,.209439,.527908),t(o,.740143,.213864,.524216),t(o,.744232,.218288,.520524),t(o,.748289,.222711,.516834),t(o,.752312,.227133,.513149),t(o,.756304,.231555,.509468),t(o,.760264,.235976,.505794),t(o,.764193,.240396,.502126),t(o,.76809,.244817,.498465),t(o,.771958,.249237,.494813),t(o,.775796,.253658,.491171),t(o,.779604,.258078,.487539),t(o,.783383,.2625,.483918),t(o,.787133,.266922,.480307),t(o,.790855,.271345,.476706),t(o,.794549,.27577,.473117),t(o,.798216,.280197,.469538),t(o,.801855,.284626,.465971),t(o,.805467,.289057,.462415),t(o,.809052,.293491,.45887),t(o,.812612,.297928,.455338),t(o,.816144,.302368,.451816),t(o,.819651,.306812,.448306),t(o,.823132,.311261,.444806),t(o,.826588,.315714,.441316),t(o,.830018,.320172,.437836),t(o,.833422,.324635,.434366),t(o,.836801,.329105,.430905),t(o,.840155,.33358,.427455),t(o,.843484,.338062,.424013),t(o,.846788,.342551,.420579),t(o,.850066,.347048,.417153),t(o,.853319,.351553,.413734),t(o,.856547,.356066,.410322),t(o,.85975,.360588,.406917),t(o,.862927,.365119,.403519),t(o,.866078,.36966,.400126),t(o,.869203,.374212,.396738),t(o,.872303,.378774,.393355),t(o,.875376,.383347,.389976),t(o,.878423,.387932,.3866),t(o,.881443,.392529,.383229),t(o,.884436,.397139,.37986),t(o,.887402,.401762,.376494),t(o,.89034,.406398,.37313),t(o,.89325,.411048,.369768),t(o,.896131,.415712,.366407),t(o,.898984,.420392,.363047),t(o,.901807,.425087,.359688),t(o,.904601,.429797,.356329),t(o,.907365,.434524,.35297),t(o,.910098,.439268,.34961),t(o,.9128,.444029,.346251),t(o,.915471,.448807,.34289),t(o,.918109,.453603,.339529),t(o,.920714,.458417,.336166),t(o,.923287,.463251,.332801),t(o,.925825,.468103,.329435),t(o,.928329,.472975,.326067),t(o,.930798,.477867,.322697),t(o,.933232,.48278,.319325),t(o,.93563,.487712,.315952),t(o,.93799,.492667,.312575),t(o,.940313,.497642,.309197),t(o,.942598,.502639,.305816),t(o,.944844,.507658,.302433),t(o,.947051,.512699,.299049),t(o,.949217,.517763,.295662),t(o,.951344,.52285,.292275),t(o,.953428,.52796,.288883),t(o,.95547,.533093,.28549),t(o,.957469,.53825,.282096),t(o,.959424,.543431,.278701),t(o,.961336,.548636,.275305),t(o,.963203,.553865,.271909),t(o,.965024,.559118,.268513),t(o,.966798,.564396,.265118),t(o,.968526,.5697,.261721),t(o,.970205,.575028,.258325),t(o,.971835,.580382,.254931),t(o,.973416,.585761,.25154),t(o,.974947,.591165,.248151),t(o,.976428,.596595,.244767),t(o,.977856,.602051,.241387),t(o,.979233,.607532,.238013),t(o,.980556,.613039,.234646),t(o,.981826,.618572,.231287),t(o,.983041,.624131,.227937),t(o,.984199,.629718,.224595),t(o,.985301,.63533,.221265),t(o,.986345,.640969,.217948),t(o,.987332,.646633,.214648),t(o,.98826,.652325,.211364),t(o,.989128,.658043,.2081),t(o,.989935,.663787,.204859),t(o,.990681,.669558,.201642),t(o,.991365,.675355,.198453),t(o,.991985,.681179,.195295),t(o,.992541,.68703,.19217),t(o,.993032,.692907,.189084),t(o,.993456,.69881,.186041),t(o,.993814,.704741,.183043),t(o,.994103,.710698,.180097),t(o,.994324,.716681,.177208),t(o,.994474,.722691,.174381),t(o,.994553,.728728,.171622),t(o,.994561,.734791,.168938),t(o,.994495,.74088,.166335),t(o,.994355,.746995,.163821),t(o,.994141,.753137,.161404),t(o,.993851,.759304,.159092),t(o,.993482,.765499,.156891),t(o,.993033,.77172,.154808),t(o,.992505,.777967,.152855),t(o,.991897,.784239,.151042),t(o,.991209,.790537,.149377),t(o,.990439,.796859,.14787),t(o,.989587,.803205,.146529),t(o,.988648,.809579,.145357),t(o,.987621,.815978,.144363),t(o,.986509,.822401,.143557),t(o,.985314,.828846,.142945),t(o,.984031,.835315,.142528),t(o,.982653,.841812,.142303),t(o,.98119,.848329,.142279),t(o,.979644,.854866,.142453),t(o,.977995,.861432,.142808),t(o,.976265,.868016,.143351),t(o,.974443,.874622,.144061),t(o,.97253,.88125,.144923),t(o,.970533,.887896,.145919),t(o,.968443,.894564,.147014),t(o,.966271,.901249,.14818),t(o,.964021,.90795,.14937),t(o,.961681,.914672,.15052),t(o,.959276,.921407,.151566),t(o,.956808,.928152,.152409),t(o,.954287,.934908,.152921),t(o,.951726,.941671,.152925),t(o,.949151,.948435,.152178),t(o,.946602,.95519,.150328),t(o,.944152,.961916,.146861),t(o,.941896,.96859,.140956),t(o,.940015,.975158,.131326)])),tm=c($n,t(o,.267004,.004874,.329415),h([t(o,.26851,.009605,.335427),t(o,.269944,.014625,.341379),t(o,.271305,.019942,.347269),t(o,.272594,.025563,.353093),t(o,.273809,.031497,.358853),t(o,.274952,.037752,.364543),t(o,.276022,.044167,.370164),t(o,.277018,.050344,.375715),t(o,.277941,.056324,.381191),t(o,.278791,.062145,.386592),t(o,.279566,.067836,.391917),t(o,.280267,.073417,.397163),t(o,.280894,.078907,.402329),t(o,.281446,.08432,.407414),t(o,.281924,.089666,.412415),t(o,.282327,.094955,.417331),t(o,.282656,.100196,.42216),t(o,.28291,.105393,.426902),t(o,.283091,.110553,.431554),t(o,.283197,.11568,.436115),t(o,.283229,.120777,.440584),t(o,.283187,.125848,.44496),t(o,.283072,.130895,.449241),t(o,.282884,.13592,.453427),t(o,.282623,.140926,.457517),t(o,.28229,.145912,.46151),t(o,.281887,.150881,.465405),t(o,.281412,.155834,.469201),t(o,.280868,.160771,.472899),t(o,.280255,.165693,.476498),t(o,.279574,.170599,.479997),t(o,.278826,.17549,.483397),t(o,.278012,.180367,.486697),t(o,.277134,.185228,.489898),t(o,.276194,.190074,.493001),t(o,.275191,.194905,.496005),t(o,.274128,.199721,.498911),t(o,.273006,.20452,.501721),t(o,.271828,.209303,.504434),t(o,.270595,.214069,.507052),t(o,.269308,.218818,.509577),t(o,.267968,.223549,.512008),t(o,.26658,.228262,.514349),t(o,.265145,.232956,.516599),t(o,.263663,.237631,.518762),t(o,.262138,.242286,.520837),t(o,.260571,.246922,.522828),t(o,.258965,.251537,.524736),t(o,.257322,.25613,.526563),t(o,.255645,.260703,.528312),t(o,.253935,.265254,.529983),t(o,.252194,.269783,.531579),t(o,.250425,.27429,.533103),t(o,.248629,.278775,.534556),t(o,.246811,.283237,.535941),t(o,.244972,.287675,.53726),t(o,.243113,.292092,.538516),t(o,.241237,.296485,.539709),t(o,.239346,.300855,.540844),t(o,.237441,.305202,.541921),t(o,.235526,.309527,.542944),t(o,.233603,.313828,.543914),t(o,.231674,.318106,.544834),t(o,.229739,.322361,.545706),t(o,.227802,.326594,.546532),t(o,.225863,.330805,.547314),t(o,.223925,.334994,.548053),t(o,.221989,.339161,.548752),t(o,.220057,.343307,.549413),t(o,.21813,.347432,.550038),t(o,.21621,.351535,.550627),t(o,.214298,.355619,.551184),t(o,.212395,.359683,.55171),t(o,.210503,.363727,.552206),t(o,.208623,.367752,.552675),t(o,.206756,.371758,.553117),t(o,.204903,.375746,.553533),t(o,.203063,.379716,.553925),t(o,.201239,.38367,.554294),t(o,.19943,.387607,.554642),t(o,.197636,.391528,.554969),t(o,.19586,.395433,.555276),t(o,.1941,.399323,.555565),t(o,.192357,.403199,.555836),t(o,.190631,.407061,.556089),t(o,.188923,.41091,.556326),t(o,.187231,.414746,.556547),t(o,.185556,.41857,.556753),t(o,.183898,.422383,.556944),t(o,.182256,.426184,.55712),t(o,.180629,.429975,.557282),t(o,.179019,.433756,.55743),t(o,.177423,.437527,.557565),t(o,.175841,.44129,.557685),t(o,.174274,.445044,.557792),t(o,.172719,.448791,.557885),t(o,.171176,.45253,.557965),t(o,.169646,.456262,.55803),t(o,.168126,.459988,.558082),t(o,.166617,.463708,.558119),t(o,.165117,.467423,.558141),t(o,.163625,.471133,.558148),t(o,.162142,.474838,.55814),t(o,.160665,.47854,.558115),t(o,.159194,.482237,.558073),t(o,.157729,.485932,.558013),t(o,.15627,.489624,.557936),t(o,.154815,.493313,.55784),t(o,.153364,.497,.557724),t(o,.151918,.500685,.557587),t(o,.150476,.504369,.55743),t(o,.149039,.508051,.55725),t(o,.147607,.511733,.557049),t(o,.14618,.515413,.556823),t(o,.144759,.519093,.556572),t(o,.143343,.522773,.556295),t(o,.141935,.526453,.555991),t(o,.140536,.530132,.555659),t(o,.139147,.533812,.555298),t(o,.13777,.537492,.554906),t(o,.136408,.541173,.554483),t(o,.135066,.544853,.554029),t(o,.133743,.548535,.553541),t(o,.132444,.552216,.553018),t(o,.131172,.555899,.552459),t(o,.129933,.559582,.551864),t(o,.128729,.563265,.551229),t(o,.127568,.566949,.550556),t(o,.126453,.570633,.549841),t(o,.125394,.574318,.549086),t(o,.124395,.578002,.548287),t(o,.123463,.581687,.547445),t(o,.122606,.585371,.546557),t(o,.121831,.589055,.545623),t(o,.121148,.592739,.544641),t(o,.120565,.596422,.543611),t(o,.120092,.600104,.54253),t(o,.119738,.603785,.5414),t(o,.119512,.607464,.540218),t(o,.119423,.611141,.538982),t(o,.119483,.614817,.537692),t(o,.119699,.61849,.536347),t(o,.120081,.622161,.534946),t(o,.120638,.625828,.533488),t(o,.12138,.629492,.531973),t(o,.122312,.633153,.530398),t(o,.123444,.636809,.528763),t(o,.12478,.640461,.527068),t(o,.126326,.644107,.525311),t(o,.128087,.647749,.523491),t(o,.130067,.651384,.521608),t(o,.132268,.655014,.519661),t(o,.134692,.658636,.517649),t(o,.137339,.662252,.515571),t(o,.14021,.665859,.513427),t(o,.143303,.669459,.511215),t(o,.146616,.67305,.508936),t(o,.150148,.676631,.506589),t(o,.153894,.680203,.504172),t(o,.157851,.683765,.501686),t(o,.162016,.687316,.499129),t(o,.166383,.690856,.496502),t(o,.170948,.694384,.493803),t(o,.175707,.6979,.491033),t(o,.180653,.701402,.488189),t(o,.185783,.704891,.485273),t(o,.19109,.708366,.482284),t(o,.196571,.711827,.479221),t(o,.202219,.715272,.476084),t(o,.20803,.718701,.472873),t(o,.214,.722114,.469588),t(o,.220124,.725509,.466226),t(o,.226397,.728888,.462789),t(o,.232815,.732247,.459277),t(o,.239374,.735588,.455688),t(o,.24607,.73891,.452024),t(o,.252899,.742211,.448284),t(o,.259857,.745492,.444467),t(o,.266941,.748751,.440573),t(o,.274149,.751988,.436601),t(o,.281477,.755203,.432552),t(o,.288921,.758394,.428426),t(o,.296479,.761561,.424223),t(o,.304148,.764704,.419943),t(o,.311925,.767822,.415586),t(o,.319809,.770914,.411152),t(o,.327796,.77398,.40664),t(o,.335885,.777018,.402049),t(o,.344074,.780029,.397381),t(o,.35236,.783011,.392636),t(o,.360741,.785964,.387814),t(o,.369214,.788888,.382914),t(o,.377779,.791781,.377939),t(o,.386433,.794644,.372886),t(o,.395174,.797475,.367757),t(o,.404001,.800275,.362552),t(o,.412913,.803041,.357269),t(o,.421908,.805774,.35191),t(o,.430983,.808473,.346476),t(o,.440137,.811138,.340967),t(o,.449368,.813768,.335384),t(o,.458674,.816363,.329727),t(o,.468053,.818921,.323998),t(o,.477504,.821444,.318195),t(o,.487026,.823929,.312321),t(o,.496615,.826376,.306377),t(o,.506271,.828786,.300362),t(o,.515992,.831158,.294279),t(o,.525776,.833491,.288127),t(o,.535621,.835785,.281908),t(o,.545524,.838039,.275626),t(o,.555484,.840254,.269281),t(o,.565498,.84243,.262877),t(o,.575563,.844566,.256415),t(o,.585678,.846661,.249897),t(o,.595839,.848717,.243329),t(o,.606045,.850733,.236712),t(o,.616293,.852709,.230052),t(o,.626579,.854645,.223353),t(o,.636902,.856542,.21662),t(o,.647257,.8584,.209861),t(o,.657642,.860219,.203082),t(o,.668054,.861999,.196293),t(o,.678489,.863742,.189503),t(o,.688944,.865448,.182725),t(o,.699415,.867117,.175971),t(o,.709898,.868751,.169257),t(o,.720391,.87035,.162603),t(o,.730889,.871916,.156029),t(o,.741388,.873449,.149561),t(o,.751884,.874951,.143228),t(o,.762373,.876424,.137064),t(o,.772852,.877868,.131109),t(o,.783315,.879285,.125405),t(o,.79376,.880678,.120005),t(o,.804182,.882046,.114965),t(o,.814576,.883393,.110347),t(o,.82494,.88472,.106217),t(o,.83527,.886029,.102646),t(o,.845561,.887322,.099702),t(o,.85581,.888601,.097452),t(o,.866013,.889868,.095953),t(o,.876168,.891125,.09525),t(o,.886271,.892374,.095374),t(o,.89632,.893616,.096335),t(o,.906311,.894855,.098125),t(o,.916242,.896091,.100717),t(o,.926106,.89733,.104071),t(o,.935904,.89857,.108131),t(o,.945636,.899815,.112838),t(o,.9553,.901065,.118128),t(o,.964894,.902323,.123941),t(o,.974417,.90359,.130215),t(o,.983868,.904867,.136897),t(o,.993248,.906157,.143936)])),qc=function(e){switch(e){case 0:return em;case 1:return rm;case 2:return nm;case 3:return am;default:return tm}},om=function(e){e.a;var r=e.b;return Ke(r)+1},im=s(function(e,r){var n=r.a,a=r.b,i=c(nn,om(r),e),l=s(function(u,v){e:for(;;)if(v.b){var $=v.a,f=v.b;if(u){var d=u-1,p=f;u=d,v=p;continue e}else return $}else return n});return i?c(l,i-1,a):n}),Yc=s(function(e,r){return c(im,e,qc(r))}),Ot=function(e){return{$:0,a:e}},Zc=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Xc=x(function(e,r,n){return Z(n,e)<0?e:Z(n,r)>0?r:n}),$t=function(e){return t(Xc,0,1,e<=.04045?e/12.92:c(Gn,(e+.055)/1.055,2.4))},Un=u$,cm=function(e){var r=Fo(e),n=r.dn,a=r.cM,i=r.cC;return t(Un,$t(n),$t(a),$t(i))},lm=function(e){return t(Zc,0,Ot(cm(e)),Ot(0))},Wo=s(function(e,r){return{$:0,a:e,b:r}}),Ho=s(function(e,r){return{$:2,a:e,b:r}}),Ya=function(e){return{$:5,a:e}},Go=s(function(e,r){return{$:4,a:e,b:r}}),Io=s(function(e,r){return{$:3,a:e,b:r}}),Za=s(function(e,r){return{$:1,a:e,b:r}}),um=x(function(e,r,n){return{gF:e,gJ:r,dJ:n}}),vm=function(e){var r=e;return r},Xa=function(e){var r=e;return vm(r.e4)},Ka=function(e){var r=e;return r.a_},zr=function(e){var r=e;return r.dH},Lr=function(e){var r=e;return r.dI},$m=s(function(e,r){return vr({c9:c(vn,e,Br(r)),dH:zr(r),dI:Lr(r),dK:Pr(r)})}),sm=s(function(e,r){return{e4:c($m,e,Xa(r)),a_:Ka(r)}}),fm=s(function(e,r){var n=r;return c(tn,c(vn,e,n.c9),n.fo)}),mm=s(function(e,r){var n=r;return{m:c(fm,e,n.m),fV:n.fV,gd:n.gd}}),Uo=function(e){var r=e;return r},dm=function(e){return e},Oo=s(function(e,r){var n=Uo(r),a=n.a,i=n.b;return dm(k(e(a),e(i)))}),pm=s(function(e,r){return c(Oo,vn(e),r)}),Qa=function(e){var r=e;return r.fd},et=function(e){var r=e;return r.gd},qo=s(function(e,r){return{fd:r,gd:_e(e)}}),gm=s(function(e,r){return c(qo,et(r),c(vn,e,Qa(r)))}),Yo=s(function(e,r){var n=r,a=n.a,i=n.b,l=n.c;return B(e(a),e(i),e(l))}),hm=s(function(e,r){return c(Yo,vn(e),r)}),An=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=t(um,n,a,i);switch(r.$){case 0:var d=r.a,u=r.b;return c(Wo,d,c(sm,l,u));case 1:var d=r.a,v=r.b;return c(Za,d,c(hm,l,v));case 3:var d=r.a,$=r.b;return c(Io,d,c(gm,l,$));case 2:var d=r.a,f=r.b;return c(Ho,d,c(mm,l,f));case 4:var d=r.a,p=r.b;return c(Go,d,c(pm,l,p));default:var g=r.a;return Ya(c(oe,An(B(n,a,i)),g))}}),Zi=function(e){return An(B(e,0,0))},Xi=function(e){return An(B(0,e,0))},da=x(function(e,r,n){var a=e,i=r,l=n,u=.5*i,v=wr(u),$=yr(u),f=a.fo,d=f,p=d.gF*$,g=v*p,m=p*p,_=d.gJ*$,b=v*_,y=p*_,S=_*_,w=1-2*(m+S),P=d.dJ*$,F=v*P,G=2*(y-F),W=2*(y+F),N=p*P,H=2*(N+b),I=2*(N-b),V=_*P,K=2*(V-g),re=2*(V+g),ve=P*P,de=1-2*(S+ve),le=1-2*(m+ve);return{gF:de*l.gF+G*l.gJ+H*l.dJ,gJ:W*l.gF+le*l.gJ+K*l.dJ,dJ:I*l.gF+re*l.gJ+w*l.dJ}}),On=x(function(e,r,n){var a=e,i=r,l=n,u=.5*i,v=wr(u),$=yr(u),f=a.c9,d=f,p=l.gF-d.gF,g=l.gJ-d.gJ,m=l.dJ-d.dJ,_=a.fo,b=_,y=b.gF*$,S=v*y,w=y*y,P=b.gJ*$,F=v*P,G=y*P,W=P*P,N=1-2*(w+W),H=b.dJ*$,I=v*H,V=2*(G-I),K=2*(G+I),re=y*H,ve=2*(re+F),de=2*(re-F),le=P*H,he=2*(le-S),Ae=2*(le+S),Le=H*H,hr=1-2*(W+Le),br=1-2*(w+Le);return{gF:d.gF+hr*p+V*g+ve*m,gJ:d.gJ+K*p+br*g+he*m,dJ:d.dJ+de*p+Ae*g+N*m}}),bm=x(function(e,r,n){return vr({c9:t(On,e,r,Br(n)),dH:t(da,e,r,zr(n)),dI:t(da,e,r,Lr(n)),dK:t(da,e,r,Pr(n))})}),_m=x(function(e,r,n){return{e4:t(bm,e,r,Xa(n)),a_:Ka(n)}}),wm=s(function(e,r){var n=c(On,e,r),a=c(da,e,r);return function(i){var l=i;return c(tn,n(l.c9),a(l.fo))}}),ym=x(function(e,r,n){var a=n;return{m:t(wm,e,r,a.m),fV:a.fV,gd:a.gd}}),xm=x(function(e,r,n){return c(Oo,c(On,e,r),n)}),Sm=x(function(e,r,n){return c(qo,et(n),t(On,e,r,Qa(n)))}),Cm=x(function(e,r,n){return c(Yo,c(On,e,r),n)}),Kc=x(function(e,r,n){switch(n.$){case 0:var v=n.a,a=n.b;return c(Wo,v,t(_m,e,r,a));case 1:var v=n.a,i=n.b;return c(Za,v,t(Cm,e,r,i));case 3:var v=n.a,l=n.b;return c(Io,v,t(Sm,e,r,l));case 2:var v=n.a,u=n.b;return c(Ho,v,t(ym,e,r,u));case 4:var v=n.a,$=n.b;return c(Go,v,t(xm,e,r,$));default:var f=n.a;return Ya(c(oe,c(Kc,e,r),f))}}),Pm=c(tn,Ze,qa),zm=s(function(e,r){return t(Kc,Pm,Dn(e),r)}),qn=x(function(e,r,n){var a=e,i=n;return{gF:a.gF+r*(i.gF-a.gF),gJ:a.gJ+r*(i.gJ-a.gJ),dJ:a.dJ+r*(i.dJ-a.dJ)}}),Lm=x(function(e,r,n){var a=Xa(n),i=zr(a),l=Lr(a),u=Pr(a),v=t(qn,e,r,Br(a)),$=r>=0?vr({c9:v,dH:i,dI:l,dK:u}):vr({c9:v,dH:mr(i),dI:mr(l),dK:mr(u)}),f=Ka(n),d=f.a,p=f.b,g=f.c,m=_e(c(ee,r,d)),_=_e(c(ee,r,p)),b=_e(c(ee,r,g));return{e4:$,a_:B(m,_,b)}}),Zo=function(e){var r=e;return r.m},Ki=function(e){return Ro(Zo(e))},km=function(e){return Eo(Zo(e))},Qc=function(e){var r=e;return r.fV},el=function(e){var r=e;return r.gd},Tm=x(function(e,r,n){var a=_e(c(ee,r,el(n))),i=_e(c(ee,r,Qc(n))),l=r>=0?Ki(n):mr(Ki(n)),u=t(qn,e,r,km(n));return{m:c(tn,u,l),fV:i,gd:a}}),Mm=x(function(e,r,n){return c(Oo,c(qn,e,r),n)}),Fm=x(function(e,r,n){return c(qo,c(ee,Y(r),et(n)),t(qn,e,r,Qa(n)))}),Dm=x(function(e,r,n){return c(Yo,c(qn,e,r),n)}),rl=s(function(e,r){switch(r.$){case 0:var u=r.a,n=r.b;return c(Wo,u,t(Lm,Ze,e,n));case 1:var u=r.a,a=r.b;return c(Za,u,t(Dm,Ze,e,a));case 3:var u=r.a,i=r.b;return c(Io,u,t(Fm,Ze,e,i));case 2:var u=r.a,l=r.b;return c(Ho,u,t(Tm,Ze,e,l));case 4:var u=r.a,v=r.b;return c(Go,u,t(Mm,Ze,e,v));default:var $=r.a;return Ya(c(oe,rl(e),$))}}),Jm=s(function(e,r){var n=e.gF,a=e.gJ,i=e.dJ;return c(ne,An(B(-n,-a,-i)),c(ne,rl(r),An(B(n,a,i))))}),Qi=function(e){var r=e.cr,n=e.ct;return{gF:Xe(3)/2*r,gJ:1/2*r+n}},Be=x(function(e,r,n){return B(e,r,n)}),pa=x(function(e,r,n){return{gF:e,gJ:r,dJ:n}}),Am=s(function(e,r){var n=r.a,a=r.b,i=r.c;return c(Za,e,t(Be,t(pa,n.gF,n.gJ,n.dJ),t(pa,a.gF,a.gJ,a.dJ),t(pa,i.gF,i.gJ,i.dJ)))}),Bm=x(function(e,r,n){var a=n.a,i=a.a,l=a.b,u=a.c,v=n.b,$=function(){var _=Qi(function(){return i?{cr:.6666666666666666,ct:.6666666666666666}:{cr:.3333333333333333,ct:.3333333333333333}}());return{gF:_.gF,gJ:_.gJ,dJ:0}}(),f=c(Am,lm(c(Yc,v,r)),B({gF:0,gJ:0,dJ:0},{gF:wr(Tr(30)),gJ:yr(Tr(30)),dJ:0},{gF:0,gJ:1,dJ:0})),d=c(Xi,1+yr(Tr(30)),c(Zi,wr(Tr(30)),c(zm,Tr(180),f))),p=Qi({cr:l,ct:u}),g=p.gF,m=p.gJ;return c(Xi,m,c(Zi,g,t(Jm,$,c(sa,"trixel scale",e),function(){return i?d:f}())))}),qt=function(e){return Ya(e)},Vm=function(e){var r=e.a;return kc(r)},jm=s(function(e,r){var n=Jn(r.l);return qt(c(oe,c(Bm,e,n.bB),Vm(n.gw)))}),Rm=function(e){return e},Em=function(e){return cr(.01*e)},e0=function(e){return e},Nm=function(e){return e},Wm=function(e){return{$:0,a:e}},Hm=Wm,Gm={$:3},Im=Gm,Um=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Om=Um,qm=s(function(e,r){return r.b?t(gr,M,r,e):e}),Ge=function(e){return t(gr,qm,L,e)},Xo=s(function(e,r){return Ge(c(oe,e,r))}),Ym=function(e){return{$:1,a:e}},Zm=Ym,Xm=function(e){return c(Rn,"height",ye(e))},Km=function(e){return Fv(Bv(e))},Qm=Km,ed=function(e){return{$:2,a:e}},rd=ed,nl=function(e){return c(Mr,"",e)},al=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,l=function(v){return Qe(v*1e3)/1e3},u=function(v){return Qe(v*1e4)/100};return nl(h(["rgba(",ue(u(r)),"%,",ue(u(n)),"%,",ue(u(a)),"%,",ue(l(i)),")"]))},nd=s(function(e,r){switch(r.$){case 0:return c(X$,e,r);case 1:return c(K$,e,r);case 2:return c(Q$,e,r);case 3:return c(e3,e,r);case 4:return c(r3,e,r);default:return c(n3,e,r)}}),ad=s(function(e,r){switch(r.$){case 0:return c(z$,e,r);case 1:return c(L$,e,r);case 2:return c(k$,e,r);case 3:return c(T$,e,r);case 4:return c(M$,e,r);case 5:return c(F$,e,r);case 6:return c(D$,e,r);case 7:return c(J$,e,r);default:return A$(e)}}),td=x(function(e,r,n){return t(Z$,e,r,n)}),r0=function(e){var r=e;return r},sn=d$,st=z(sn,1,1,1,1),nr=x(function(e,r,n){return c(oe,function(a){return c(a,r,n)},e)}),od=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),id=s(function(e,r){var n=e,a=r.gF,i=r.gJ;return t(od,n*a/i,n,n*(1-a-i)/i)}),cd=function(e){var r=e.a,n=e.b,a=e.c;return t(Un,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ko=s(function(e,r){return cd(c(id,e,r))}),tl=s(function(e,r){return{d0:dr(e.d0,r.d0),u:e.u*r.u+e.v*r.x+e.w*r.A,v:e.u*r.v+e.v*r.y+e.w*r.B,w:e.u*r.w+e.v*r.z+e.w*r.C,x:e.x*r.u+e.y*r.x+e.z*r.A,y:e.x*r.v+e.y*r.y+e.z*r.B,z:e.x*r.w+e.y*r.z+e.z*r.C,A:e.A*r.u+e.B*r.x+e.C*r.A,B:e.A*r.v+e.B*r.y+e.C*r.B,C:e.A*r.w+e.B*r.z+e.C*r.C,M:r.M+(e.M*r.u+e.N*r.x+e.O*r.A)*r.cm,N:r.N+(e.M*r.v+e.N*r.y+e.O*r.B)*r.cm,O:r.O+(e.M*r.w+e.N*r.z+e.O*r.C)*r.cm,cm:e.cm*r.cm}}),tr=w$,ld=function(e){return tr({d9:e.u,ea:e.x,eb:e.A,ec:e.M,ed:e.v,ee:e.y,ef:e.B,eg:e.N,eh:e.w,ei:e.z,ej:e.C,ek:e.O,el:0,em:0,en:0,eo:1})},ft=xe(function(e,r,n,a,i){var l=a.d0?1:-1,u=z(sn,a.cm,a.cm,a.cm,l);return Te(i,e,u,ld(a),a.d0,r,n)}),ol=er(function(e,r,n,a,i,l){e:for(;;)switch(i.$){case 0:return l;case 5:var u=i.a,v=i.b,$=e,f=r,d=n,p=c(tl,u,a),g=v,m=l;e=$,r=f,n=d,a=p,i=g,l=m;continue e;case 1:var _=i.b,b=c(M,C(ft,e,r,n,a,_),l.R);return{R:b,ac:l.ac,gl:l.gl};case 3:var y=i.b,S=c(M,C(ft,e,r,n,a,y),l.ac);return{R:l.R,ac:S,gl:l.gl};case 2:var w=i.a,P=c(M,C(ft,e,r,n,a,w),l.gl);return{R:l.R,ac:l.ac,gl:P};default:var F=i.a;return t(En,z(ol,e,r,n,a),l,F)}}),ud=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),il=ud,Qo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),vd=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(Qo,518,r,n,a)},$d=s(function(e,r){return{$:6,a:e,b:r}}),sd=$d,cl=h([vd({ad:1,ae:0,ai:!1}),z(il,!1,!1,!1,!1),c(sd,0,1)]),on=519,ei=8,ll=15,Xr=7681,fd={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ce=P$,md=s(function(e,r){return{$:0,a:e,b:r}}),dd=md({dS:1,d$:0,ex:5}),je=c$,pd=dd(h([{ci:c(je,-1,-1)},{ci:c(je,1,-1)},{ci:c(je,-1,1)},{ci:c(je,1,1)}])),gd={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ci"},uniforms:{}},hd=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return function(d){return{$:2,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:v,i:$,j:f,k:d}}}}}}}}}}}},ri=x(function(e,r,n){var a=e.$7,i=e.cZ,l=e.dG,u=s(function(f,d){var p=f;return d(p)}),v=s(function(f,d){var p=f;return d(p)}),$=function(f){return c(ne,u(f.bK),c(ne,v(f.br),c(ne,v(f.bT),v(f.bU))))};return c($,n,c($,r,t(hd,a,i,l)))}),ni=function(e){return t(ri,{cZ:e.cZ,$7:e.$7,dG:e.dG},{br:e.br,bK:e.bK,bT:e.bT,bU:e.bU},{br:e.br,bK:e.bK,bT:e.bT,bU:e.bU})},ai=function(e){return C(ce,h([ni(e),z(il,!1,!1,!1,!1)]),gd,fd,pd,{})},bd=ai({br:Xr,cZ:0,$7:ei,bK:on,dG:ll,bT:Xr,bU:Xr}),_d=516,n0=5386,ze=7680,wd=function(e){return c(Gn,2,e+4)},ul=function(e){return ai({br:ze,cZ:ll,$7:ei,bK:_d,dG:wd(e),bT:n0,bU:n0})},yd=x(function(e,r,n){return Ge(h([t(nr,e,n,cl),h([ul(r),bd])]))}),xd=s(function(e,r){return Ge(c(_o,yd(e),r))}),Sd=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(Qo,513,r,n,a)},Cd=Sd({ad:1,ae:0,ai:!0}),Pd=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return{$:0,a:e,b:r,c:n,d:a,e:i,f:l,g:u,h:v,i:$,j:f}}}}}}}}}}},zd=function(e){var r=e.ck,n=e.b3,a=e.bY,i=e.bV,l=e.b_,u=e.aX,v=s(function($,f){var d=$.a,p=$.b,g=$.c,m=f.a,_=f.b,b=f.c;return Pd(d)(p)(g)(m)(_)(b)(r)(n)(a)(i)});return c(v,l,u)},Ld=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),a0=s(function(e,r){var n=e,a=r;return t(Ld,32774,n,a)}),kd=1,t0=771,Td=770,ti=zd({bV:0,aX:c(a0,kd,t0),bY:0,b_:c(a0,Td,t0),b3:0,ck:0}),Vr=h([Cd,ti]),Md=function(e){var r=e;return r.eq},Fd=function(e){var r=e;return r.er},vl=function(e){var r=e;return r.es},Dd=function(e){var r=e;return r.et},Jd=function(e){var r=e;return r.eu},$l=function(e){var r=e;return r.ev},Kr=s(function(e,r){var n=e,a=r;return a-n}),sl=function(e){return B(c(Kr,Dd(e),Md(e)),c(Kr,Jd(e),Fd(e)),c(Kr,$l(e),vl(e)))},Ad=function(e){return e},Bd=function(e){return vr({c9:Ad({gF:e.M,gJ:e.N,dJ:e.O}),dH:Jr({gF:e.u,gJ:e.v,dJ:e.w}),dI:Jr({gF:e.x,gJ:e.y,dJ:e.z}),dK:Jr({gF:e.A,gJ:e.B,dJ:e.C})})},mt=s(function(e,r){var n=e,a=r,i=n.dK,l=i,u=n.dI,v=u,$=n.dH,f=$;return{gF:a.gF*f.gF+a.gJ*f.gJ+a.dJ*f.dJ,gJ:a.gF*v.gF+a.gJ*v.gJ+a.dJ*v.dJ,dJ:a.gF*l.gF+a.gJ*l.gJ+a.dJ*l.dJ}}),fl=s(function(e,r){var n=e,a=r,i=n.c9,l=i,u=a.gF-l.gF,v=a.gJ-l.gJ,$=a.dJ-l.dJ,f=n.dK,d=f,p=n.dI,g=p,m=n.dH,_=m;return{gF:u*_.gF+v*_.gJ+$*_.dJ,gJ:u*g.gF+v*g.gJ+$*g.dJ,dJ:u*d.gF+v*d.gJ+$*d.dJ}}),ml=s(function(e,r){return{c9:c(fl,e,Br(r)),dH:c(mt,e,zr(r)),dI:c(mt,e,Lr(r)),dK:c(mt,e,Pr(r))}}),Aa=function(e){var r=e;return r},$e=s(function(e,r){var n=e,a=r;return c(Je,n,a)}),ga=s(function(e,r){return Z(e,r)<0?e:r}),ge=s(function(e,r){var n=e,a=r;return c(ga,n,a)}),Vd=s(function(e,r){var n=Aa(r),a=Aa(e);return{eq:c($e,a.eq,n.eq),er:c($e,a.er,n.er),es:c($e,a.es,n.es),et:c(ge,a.et,n.et),eu:c(ge,a.eu,n.eu),ev:c(ge,a.ev,n.ev)}}),Ie=function(e){var r=e;return r},jd=function(e){var r=e;return B(r.gF,r.gJ,r.dJ)},Cn=s(function(e,r){var n=e,a=r;return a+n}),Rd=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=fa(_e(a)),u=fa(_e(n)),v=fa(_e(i)),$=jd(r),f=$.a,d=$.b,p=$.c;return{eq:c(Cn,u,f),er:c(Cn,l,d),es:c(Cn,v,p),et:c(Kr,u,f),eu:c(Kr,l,d),ev:c(Kr,v,p)}}),o0=E(function(e,r,n,a){var i=n.fd,l=2*n.fD*r,u=2*n.fC*r,v=2*n.fB*r,$=i.dJ*r,f=i.gJ*r,d=i.gF*r,p=Ie(Pr(e)),g=Y(v*p.gF)+Y(u*p.gJ)+Y(l*p.dJ),m=Ie(Lr(e)),_=Y(v*m.gF)+Y(u*m.gJ)+Y(l*m.dJ),b=Ie(zr(e)),y=Y(v*b.gF)+Y(u*b.gJ)+Y(l*b.dJ),S=c(Rd,B(y,_,g),c(fl,e,t(pa,d,f,$)));if(a.$)return ae(S);var w=a.a;return ae(c(Vd,w,S))}),Yt=E(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,l=a.b;switch(i.$){case 0:var m=e,_=r,b=n,y=l;e=m,r=_,n=b,a=y;continue e;case 1:var u=i.a,v=z(o0,e,r,u,n),m=e,_=r,b=v,y=l;e=m,r=_,n=b,a=y;continue e;case 2:var m=e,_=r,b=n,y=l;e=m,r=_,n=b,a=y;continue e;case 3:var u=i.a,v=z(o0,e,r,u,n),m=e,_=r,b=v,y=l;e=m,r=_,n=b,a=y;continue e;case 4:var $=i.a,m=e,_=r,b=z(Yt,e,r,n,$),y=l;e=m,r=_,n=b,a=y;continue e;default:var f=i.a,d=i.b,p=c(ml,Bd(f),e),g=r*f.cm,m=e,_=r,b=z(Yt,p,g,n,h([d])),y=l;e=m,r=_,n=b,a=y;continue e}}else return n}),fn=v$,mn=$$,dn=s$,dl=function(e){return{$:4,a:e}},Ed=s(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,l=c(M,n,r);e=i,r=l;continue e}else return r}),Yn=function(e){return dl(c(Ed,e,L))},Nd={d0:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,M:0,N:0,O:0,cm:1},i0=ai({br:Xr,cZ:0,$7:ei,bK:on,dG:255,bT:Xr,bU:Xr}),Wd=function(e){var r=e,n=c(Je,Y(r.gF),c(Je,Y(r.gJ),Y(r.dJ)));if(n){var a=r.dJ/n,i=r.gJ/n,l=r.gF/n,u=Xe(l*l+i*i+a*a);return u*n}else return We},ke={bY:0,fc:!1,b3:0,di:0,ck:0,dA:0,gF:0,gJ:0,dJ:0},Ee=s(function(e,r){var n=e,a=r;return tr({d9:n.gF,ea:n.ck,eb:a.gF,ec:a.ck,ed:n.gJ,ee:n.b3,ef:a.gJ,eg:a.b3,eh:n.dJ,ei:n.bY,ej:a.dJ,ek:a.bY,el:n.dA,em:n.di,en:a.dA,eo:a.di})}),_n=k({by:c(Ee,ke,ke),b8:c(Ee,ke,ke),b9:c(Ee,ke,ke),ca:c(Ee,ke,ke)},z(sn,0,0,0,0)),pl=514,gl=function(e){var r=e.ai,n=e.ae,a=e.ad;return z(Qo,515,r,n,a)},hl=240,Hd=h([gl({ad:1,ae:0,ai:!0}),ni({br:ze,cZ:hl,$7:0,bK:pl,dG:0,bT:ze,bU:ze}),ti]),Gd=s(function(e,r){var n=e,a=r.f2,i=r.fy,l=r.e3,u=_e(a),v=u,$=_e(i),f=$,d=n.dm;if(d.$){var g=d.a;return Jt(f)?tr({d9:2/(l*g),ea:0,eb:0,ec:0,ed:0,ee:2/g,ef:0,eg:0,eh:0,ei:0,ej:0,ek:-1,el:0,em:0,en:0,eo:1}):tr({d9:2/(l*g),ea:0,eb:0,ec:0,ed:0,ee:2/g,ef:0,eg:0,eh:0,ei:0,ej:-2/(f-v),ek:-(f+v)/(f-v),el:0,em:0,en:0,eo:1})}else{var p=d.a;return Jt(f)?tr({d9:1/(l*p),ea:0,eb:0,ec:0,ed:0,ee:1/p,ef:0,eg:0,eh:0,ei:0,ej:-1,ek:-2*v,el:0,em:0,en:-1,eo:0}):tr({d9:1/(l*p),ea:0,eb:0,ec:0,ed:0,ee:1/p,ef:0,eg:0,eh:0,ei:0,ej:-(f+v)/(f-v),ek:-2*f*v/(f-v),el:0,em:0,en:-1,eo:0})}}),aa=s(function(e,r){return(1&e>>r)===1?0:1}),Id=function(e){return h([gl({ad:1,ae:0,ai:!0}),ni({br:ze,cZ:hl,$7:e,bK:pl,dG:0,bT:ze,bU:ze}),ti])},Ud=x(function(e,r,n){return Ge(c(oe,function(a){var i=a<<4,l=z(sn,c(aa,a,0),c(aa,a,1),c(aa,a,2),c(aa,a,3));return t(nr,e,k(r,l),Id(i))},c(en,1,c(Gn,2,n)-1)))}),Qr=function(e){var r=e;return r},Od=y$,qd=Jr({gF:1,gJ:0,dJ:0}),bl=qd,_l=Hc,Yd={c9:Ze,dH:bl,dI:_l,dK:qa},rt=function(e){var r=e;return r},Zd=function(e){var r=rt(Br(e)),n=Ie(Pr(e)),a=Ie(Lr(e)),i=Ie(zr(e));return tr({d9:i.gF,ea:a.gF,eb:n.gF,ec:r.gF,ed:i.gJ,ee:a.gJ,ef:n.gJ,eg:r.gJ,eh:i.dJ,ei:a.dJ,ej:n.dJ,ek:r.dJ,el:0,em:0,en:0,eo:1})},Xd=s(function(e,r){var n=r;return Zd(c(ml,n,e))}),Kd=function(e){return c(Xd,Yd,e)},Qd=function(e){var r=e;return r.dF},e2=function(e){var r=e;return zr(r)},r2=function(e){var r=e;return Lr(r)},n2=function(e){var r=Qd(e.fa),n=vr({c9:Ht(r),dH:e2(r),dI:r2(r),dK:mr(It(r))}),a=Yn(e.a3),i=a,l=z(Yt,n,1,q,h([i]));if(l.$===1)return L;var u=l.a,v=Kd(r),$=c(ee,.99,c($e,_e(e.aZ),Gt(vl(u)))),f=sl(u),d=f.a,p=f.b,g=f.c,m=Wd(t(No,d,p,g)),_=c(ee,1.01,c(Cn,m,Gt($l(u)))),b=c(Gd,e.fa,{e3:e.e3,fy:_,f2:$}),y=Od(b).eo,S=y?Ie(mr(It(r))):Qr(Ht(r)),w=function(){var le=e.cq;switch(le.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var he=le.a;return k(3,he);case 4:var he=le.a;return k(4,he);default:return k(5,0)}}(),P=w.a,F=w.b,G=e.b1,W=G,N=c(Ko,W,e.cv),H=N,I=tr({d9:0,ea:S.gF,eb:fn(H),ec:e.eR,ed:0,ee:S.gJ,ef:mn(H),eg:ma(m),eh:0,ei:S.dJ,ej:dn(H),ek:P,el:0,em:y,en:0,eo:F}),V=Te(ol,I,v,b,Nd,i,{R:L,ac:L,gl:L}),K=e.b7;switch(K.$){case 0:var re=K.a;return Ge(h([t(nr,V.R,k(re,st),Vr),t(nr,V.ac,_n,Vr)]));case 1:var re=K.a;return Ge(h([t(nr,V.R,_n,Vr),h([i0]),t(nr,V.gl,re.by,cl),h([ul(0)]),t(nr,V.R,k(re,st),Hd),t(nr,V.ac,_n,Vr)]));default:var ve=K.a,de=K.b;return Ge(h([t(nr,V.R,k(de,st),Vr),h([i0]),c(xd,V.gl,ve),t(Ud,V.R,de,Ke(ve)),t(nr,V.ac,_n,Vr)]))}},a2=function(e){return c(Rn,"width",ye(e))},t2=s(function(e,r){var n=h([Zm(1),rd(0),Hm(!0),z(Om,0,0,0,0)]),a=function(){var P=e.cw;switch(P.$){case 0:return B(n,"0",1);case 1:return B(c(M,Im,n),"1",1);default:var F=P.a;return B(n,"0",F)}}(),i=a.a,l=a.b,u=a.c,v=e.a_,$=v.a,f=v.b,d=r0(f),p=c(ie,"height",ye(d)+"px"),g=r0($),m=g/d,_=c(Xo,function(P){return n2({e3:m,fa:e.fa,aZ:e.aZ,a3:P.a3,b1:P.b1,b7:P.b7,eR:u,cq:P.cq,cv:P.cv})},r),b=c(ie,"width",ye(g)+"px"),y=e.aY,S=y,w=al(S);return t(Qm,"div",h([c(ie,"padding","0px"),b,p]),h([k(l,t(td,i,h([a2(Qe(g*u)),Xm(Qe(d*u)),b,p,c(ie,"display","block"),c(ie,"background-color",w)]),_))]))}),o2=function(e){return c(t2,{cw:e.cw,aY:e.aY,fa:e.fa,aZ:e.aZ,a_:e.a_},h([{a3:e.a3,b1:e.b1,b7:e.b7,cq:e.cq,cv:e.cv}]))},wl=function(e){return e},c0=wl({gF:.31271,gJ:.32902}),i2=s(function(e,r){var n=e,a=Ie(r.fo),i=a.gF,l=a.gJ,u=a.dJ,v=c(Ko,r.cN,r.cD),$=v;return{bY:dn($),fc:n,b3:mn($),di:0,ck:fn($),dA:1,gF:-i,gJ:-l,dJ:-u}}),c2=function(e){return e},l2=function(e){return c2(1.2*c(Gn,2,e))},dt=function(e){return e},u2={$:0},v2=u2,yl=function(e){return e},l0=function(e){var r=e;return r},$2=function(e){e:for(;;){if(dr(e.fO,We)&&dr(e.fP,We))return ke;if(c(Nc,_e(e.fO),_e(e.fP))){var r={cD:e.cD,fO:e.fP,fP:e.fO,eX:mr(e.eX)};e=r;continue e}else{var n=Y(l0(e.fP)/an),a=Y(l0(e.fO)/an),i=Ie(e.eX),l=i.gF,u=i.gJ,v=i.dJ,$=c(Ko,yl(1),e.cD),f=$;return{bY:a*dn(f),fc:!1,b3:a*mn(f),di:n/a,ck:a*fn(f),dA:3,gF:l,gJ:u,dJ:v}}}},u0=function(e){return $2({cD:e.cD,fO:e.cN,fP:We,eX:e.eX})},s2=function(e){var r=e;return r},xl=function(e){var r=t(Xc,1667,25e3,s2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return wl({gF:n,gJ:a})},Sl=function(e){return e},f2=xl(Sl(12e3)),m2=xl(Sl(5600)),d2=function(e){return{$:2,a:e}},p2=function(e){return d2(e)},g2=s(function(e,r){return{$:2,a:e,b:r}}),Cl=function(e){return{$:0,a:e}},ta=function(e){var r=e;return r},h2=function(e){var r=e;return r.fc},b2=Cl(_n.a),_2=s(function(e,r){var n=s(function(a,i){var l=i.a,u=i.b;return e(a)?k(c(M,a,l),u):k(l,c(M,a,u))});return t(gr,n,k(L,L),r)}),w2=function(e){var r=e;return tr({d9:r.gF,ea:r.ck,eb:0,ec:0,ed:r.gJ,ee:r.b3,ef:0,eg:0,eh:r.dJ,ei:r.bY,ej:0,ek:0,el:r.dA,em:r.di,en:0,eo:0})},y2=te(function(e,r,n,a,i,l,u,v){var $=c(_2,h2,h([ta(e),ta(r),ta(n),ta(a)])),f=$.a,d=$.b;if(f.b){var p=se(f,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,m=p.b,_=m.a,b=m.b,y=b.a,S=b.b,w=S.a;return c(g2,c(oe,w2,f),{by:c(Ee,g,_),b8:c(Ee,y,w),b9:c(Ee,i,l),ca:c(Ee,u,v)})}else return b2}else return Cl({by:c(Ee,e,r),b8:c(Ee,n,a),b9:c(Ee,i,l),ca:c(Ee,u,v)})}),x2=x(function(e,r,n){return Ea(y2,e,r,n,ke,ke,ke,ke,ke)}),S2=function(e){var r=c(i2,Nm(e.gl),{cD:m2,fo:e.gt,cN:dt(8e4)}),n=u0({cD:f2,cN:dt(2e4),eX:e.eX}),a=u0({cD:c0,cN:dt(15e3),eX:mr(e.eX)}),i=t(x2,r,n,a);return o2({cw:p2(e.cJ),aY:e.aY,fa:e.fa,aZ:e.aZ,a_:e.a_,a3:e.a3,b1:l2(15),b7:i,cq:v2,cv:c0})},Pl=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),C2=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),zl=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ll=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),P2=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),z2=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),L2=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),oi=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return z(L2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return z(Pl,n,r,i,1);case 3:var n=e.a,a=e.b,i=e.c;return z(C2,n,a,i,1);case 4:var n=e.a,a=e.b,i=e.c;return z(zl,n,a,i,1);case 5:var n=e.a,a=e.b,i=e.c;return z(z2,n,a,i,1);case 6:var n=e.a,a=e.b,i=e.c;return z(Ll,n,a,i,1);case 7:var n=e.a,a=e.b,i=e.c;return z(P2,n,a,i,1);case 8:return e;case 9:return e;default:return e}},ii={$:0},k2=te(function(e,r,n,a,i,l,u,v){e:for(;;)if(v.b){var $=v.a,f=v.b,d=Aa(u($)),p=c(ge,d.et,e),g=c($e,d.eq,r),m=c(ge,d.eu,n),_=c($e,d.er,a),b=c(ge,d.ev,i),y=c($e,d.es,l),S=u,w=f;e=p,r=g,n=m,a=_,i=b,l=y,u=S,v=w;continue e}else return{eq:r,er:a,es:l,et:e,eu:n,ev:i}}),T2=x(function(e,r,n){var a=Aa(e(r));return Ea(k2,a.et,a.eq,a.eu,a.er,a.ev,a.es,e,n)}),pt=s(function(e,r){var n=e,a=r;return Z(a,n)<1}),kl=function(e){return c(pt,e.eq,e.et)&&c(pt,e.er,e.eu)&&c(pt,e.es,e.ev)?e:{eq:c($e,e.et,e.eq),er:c($e,e.eu,e.er),es:c($e,e.ev,e.es),et:c(ge,e.et,e.eq),eu:c(ge,e.eu,e.er),ev:c(ge,e.ev,e.es)}},Bn=function(e){var r=e;return r},Tl=function(e){var r=Bn(e),n=r.a,a=r.b,i=r.c,l=qr(n),u=Yr(n),v=Zr(n),$=qr(a),f=Yr(a),d=Zr(a),p=qr(i),g=Yr(i),m=Zr(i);return kl({eq:c($e,l,c($e,$,p)),er:c($e,u,c($e,f,g)),es:c($e,v,c($e,d,m)),et:c(ge,l,c(ge,$,p)),eu:c(ge,u,c(ge,f,g)),ev:c(ge,v,c(ge,d,m))})},Ml=f$,Me=function(e){return Ml(rt(e))},Fl=function(e){var r=e;return r},nt=function(e){return Ml(Fl(e))},M2=s(function(e,r){var n=e,a=r,i=c(Je,Y(a.gF),c(Je,Y(a.gJ),Y(a.dJ)));if(i){var l=a.dJ/i,u=a.gJ/i,v=a.gF/i,$=Xe(v*v+u*u+l*l);return{gF:n*v/$,gJ:n*u/$,dJ:n*l/$}}else return Wc}),F2=M2(yl(1)),Dl=x(function(e,r,n){var a=c(Ja,r,n),i=c(Ja,e,r);return F2(c(Vo,a,i))}),D2=function(e){var r=Bn(e),n=r.a,a=r.b,i=r.c,l=nt(t(Dl,n,a,i));return B({s:l,ci:Me(n)},{s:l,ci:Me(a)},{s:l,ci:Me(i)})},J2=s(function(e,r){return{$:2,a:e,b:r}}),Jl=J2({dS:3,d$:0,ex:4}),A2=function(e){if(e.b){var r=e.a,n=e.b,a=Jl(c(oe,D2,e)),i=t(T2,Tl,r,n);return z(Pl,i,e,a,0)}else return ii},we=x(function(e,r,n){var a=e,i=r,l=n;return{gF:a,gJ:i,dJ:l}}),Al=function(){var e=cr(1),r=cr(1),n=cr(1),a=c(ee,-.5,e),i=c(ee,-.5,r),l=c(ee,-.5,n),u=t(we,l,i,a),v=c(ee,.5,e),$=t(we,l,i,v),f=c(ee,.5,r),d=t(we,l,f,a),p=t(we,l,f,v),g=c(ee,.5,n),m=t(we,g,i,a),_=t(we,g,f,a),b=t(we,g,i,v),y=t(we,g,f,v);return oi(A2(h([t(Be,u,_,m),t(Be,u,d,_),t(Be,$,b,y),t(Be,$,y,p),t(Be,m,_,y),t(Be,m,y,b),t(Be,u,p,d),t(Be,u,$,p),t(Be,u,m,b),t(Be,u,b,$),t(Be,d,y,_),t(Be,d,p,y)])))}(),oa={$:0},B2=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),V2=x(function(e,r,n){var a=r.a,i=r.b,l=r.c,u=e(l),v=e(i),$=e(a),f=nt(t(Dl,$,v,u)),d={s:f,ci:Me($)},p={s:f,ci:Me(v)},g={s:f,ci:Me(u)};return c(M,d,c(M,p,c(M,g,n)))}),ci=function(e){var r=e;return r.H},j2=E(function(e,r,n,a){if(r.$===1)return q;var i=r.a;if(n.$===1)return q;var l=n.a;if(a.$===1)return q;var u=a.a;return ae(t(e,i,l,u))}),Zt=4294967295>>>32-kn,Xt=bu,R2=x(function(e,r,n){e:for(;;){var a=Zt&r>>>e,i=c(Xt,a,n);if(i.$){var f=i.a;return c(Xt,Zt&r,f)}else{var l=i.a,u=e-kn,v=r,$=l;e=u,r=v,n=$;continue e}}}),E2=function(e){return e>>>5<<5},N2=s(function(e,r){var n=r.a,a=r.b,i=r.c,l=r.d;return e<0||Z(e,n)>-1?q:Z(e,E2(n))>-1?ae(c(Xt,Zt&e,l)):ae(t(R2,a,e,i))}),li=function(e){var r=e;return r.as},gt=s(function(e,r){return c(N2,e,li(r))}),W2=function(e){var r=function(n){var a=n.a,i=n.b,l=n.c;return z(j2,x(function(u,v,$){return B(u,v,$)}),c(gt,a,e),c(gt,i,e),c(gt,l,e))};return c(Do,r,ci(e))},H2=x(function(e,r,n){e:for(;;){var a=c(xo,Re,e),i=a.a,l=a.b;if(Z(Ft(i),Re)<0)return c(ic,!0,{D:r,o:n,t:i});var u=l,v=c(M,oc(i),r),$=n+1;e=u,r=v,n=$;continue e}}),ui=function(e){return e.b?t(H2,e,L,0):ac},G2=x(function(e,r,n){return e(r(n))}),I2=s(function(e,r){return!c(gc,c(G2,R3,e),r)}),U2=s(function(e,r){return t(gr,s(function(n,a){return e(n)?c(M,n,a):a}),L,r)}),O2=function(e){var r=e.a;return r},Bl=s(function(e,r){var n=O2(e),a=function(i){var l=i.a,u=i.b,v=i.c;return l>=0&&Z(l,n)<0&&u>=0&&Z(u,n)<0&&v>=0&&Z(v,n)<0};return c(I2,a,r)?{H:r,as:e}:{H:c(U2,a,r),as:e}}),q2=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Zn=q2({dS:1,d$:3,ex:4}),ha=s(function(e,r){var n=Qr(r),a=Qr(e);return k(B(a.gF,a.gJ,a.dJ),B(n.gF,n.gJ,n.dJ))}),v0=t(Un,0,0,0),ht=er(function(e,r,n,a,i,l){var u=l.a,v=l.b,$=l.c,f=c(ko,c(ha,e,r),i);if(f.$){var p={s:v0,ci:Me(r)},g={s:v0,ci:Me(e)},m=$+1,_=$;return B(c(M,B(n,_,m),c(M,B(n,m,a),u)),c(M,p,c(M,g,v)),$+2)}else{var d=f.a;return B(c(M,B(n,d,a),u),v,$)}}),Y2=xe(function(e,r,n,a,i){e:for(;;)if(n.b){var l=n.a,u=l.a,v=l.b,$=l.c,f=n.b,d=e($),p=e(v),g=e(u),m=a+2,_=a+1,b=a,y=e,S=r,w=f,P=a+3,F=Te(ht,d,g,m,b,r,Te(ht,p,d,_,m,r,Te(ht,g,p,b,_,r,i)));e=y,r=S,n=w,a=P,i=F;continue e}else{var G=i,W=G.a,N=G.b;return k(W,De(N))}}),Z2=xe(function(e,r,n,a,i){e:for(;;)if(r.b){var l=r.a,u=l.a,v=l.b,$=l.c,f=r.b,d=e($),p=e(v),g=e(u),m=n+2,_=n+1,b=n,y=t(Ur,c(ha,g,d),m,t(Ur,c(ha,d,p),_,t(Ur,c(ha,p,g),b,i))),S=c(M,B(b,_,m),a),w=e,P=f,F=n+3,G=S,W=y;e=w,r=P,n=F,a=G,i=W;continue e}else return B(a,i,n)}),kr=x(function(e,r,n){var a=W2(n),i=t(gr,V2(r),L,a),l=C(Z2,r,a,0,L,Bo),u=l.a,v=l.b,$=l.c,f=C(Y2,r,v,a,0,B(u,L,$)),d=f.a,p=f.b,g=jc(p)?i:se(i,p);return t(B2,e,c(Bl,ui(g),d),c(Zn,g,d))}),Kt=function(e){return{H:c(oe,function(r){return B(3*r,3*r+1,3*r+2)},c(en,0,Ke(e)-1)),as:ui(Ge(c(oe,function(r){var n=r.a,a=r.b,i=r.c;return h([n,a,i])},e)))}},Vl=function(e){switch(e.$){case 0:return oa;case 1:var a=e.a,r=e.b,n=c(oe,Bn,r);return t(kr,a,Dr,Kt(n));case 2:var a=e.a,r=e.b,n=c(oe,Bn,r);return t(kr,a,Dr,Kt(n));case 3:var a=e.a,i=e.b;return t(kr,a,Dr,i);case 4:var a=e.a,i=e.b;return t(kr,a,function(l){return l.ci},i);case 5:var a=e.a,i=e.b;return t(kr,a,function(l){return l.ci},i);case 6:var a=e.a,i=e.b;return t(kr,a,function(l){return l.ci},i);case 7:var a=e.a,i=e.b;return t(kr,a,function(l){return l.ci},i);case 8:return oa;case 9:return oa;default:return oa}},$0=Vl(Al),jl={$:0},T=jl,be=s(function(e,r){return{$:1,a:e,b:r}}),X2={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b$"}},K2=1029,Q2=function(e){return{$:5,a:e}},Rl=function(e){var r=e;return Q2(r)},e4=Rl(K2),r4=1028,n4=Rl(r4),Fe=x(function(e,r,n){return r===1?e?c(M,e4,n):c(M,n4,n):n}),El={src:`
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
    `,attributes:{position:"ci",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},bt=E(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,d,p){return C(ce,t(Fe,v,a,p),El,X2,n,{b$:e,c:u,d:l,e:f,f:i,g:$})}))}),vi={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aJ"}},Nl={src:`
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
    `,attributes:{position:"ci"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},$r=E(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,d,p){return C(ce,t(Fe,v,a,p),Nl,vi,n,{aJ:e,c:u,d:l,e:f,f:i,g:$})}))}),Wl=s(function(e,r){return{$:3,a:e,b:r}}),a4={src:`
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
    `,attributes:{},uniforms:{constantColor:"aJ",pointRadius:"cg",sceneProperties:"f"}},Hl={src:`
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
    `,attributes:{position:"ci"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cg",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},t4=E(function(e,r,n,a){return c(Wl,n,te(function(i,l,u,v,$,f,d,p){return C(ce,p,Hl,a4,a,{aJ:e,c:u,d:l,cg:r,e:f,f:i,g:$})}))}),$i={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a1",sceneProperties:"f"}},Xn=function(e){var r=e;return r},at=m$,sr=xe(function(e,r,n,a,i){return c(be,n,te(function(l,u,v,$,f,d,p,g){return C(ce,t(Fe,$,i,g),Nl,$i,a,{a1:c(at,Xn(r),e),c:v,d:u,e:d,f:l,g:f})}))}),o4={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a1",pointRadius:"cg",sceneProperties:"f"}},i4=xe(function(e,r,n,a,i){return c(Wl,a,te(function(l,u,v,$,f,d,p,g){return C(ce,g,Hl,o4,i,{a1:c(at,Xn(r),e),c:v,d:u,cg:n,e:d,f:l,g:f})}))}),Gl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"by",lights34:"b8",lights56:"b9",lights78:"ca",materialColor:"c_",sceneProperties:"f",viewMatrix:"g"}},Il={src:`
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
    `,attributes:{normal:"s",position:"ci"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ia=E(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,d,p){var g=d.a,m=d.b;return C(ce,t(Fe,v,a,p),Il,Gl,n,{U:m,by:g.by,b8:g.b8,b9:g.b9,ca:g.ca,c_:e,c:u,d:l,e:f,f:i,g:$})}))}),Ul={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"by",lights34:"b8",lights56:"b9",lights78:"ca",materialColorTexture:"c$",normalMapTexture:"bb",sceneProperties:"f",useNormalMap:"bi",viewMatrix:"g"}},Ol={src:`
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
    `,attributes:{normal:"s",position:"ci",tangent:"eT",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},c4=er(function(e,r,n,a,i,l){return c(be,a,te(function(u,v,$,f,d,p,g,m){var _=g.a,b=g.b;return C(ce,t(Fe,f,l,m),Ol,Ul,i,{U:b,by:_.by,b8:_.b8,b9:_.b9,ca:_.ca,c$:e,c:$,d:v,bb:r,e:p,f:u,bi:n,g:d})}))}),ql={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cB",constantBaseColor:"cF",constantMetallic:"cG",constantRoughness:"cH",enabledLights:"U",lights12:"by",lights34:"b8",lights56:"b9",lights78:"ca",metallicTexture:"c3",normalMapTexture:"bb",roughnessTexture:"ds",sceneProperties:"f",useNormalMap:"bi",viewMatrix:"g"}},l4=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){return function(d){return c(be,$,te(function(p,g,m,_,b,y,S,w){var P=S.a,F=S.b;return C(ce,t(Fe,_,d,w),Ol,ql,f,{cB:e,cF:r,cG:l,cH:a,U:F,by:P.by,b8:P.b8,b9:P.b9,ca:P.ca,c3:i,c:m,d:g,bb:u,e:y,ds:n,f:p,bi:v,g:b})}))}}}}}}}}}}},Yl={src:`
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
    `,attributes:{},uniforms:{baseColor:"cA",enabledLights:"U",lights12:"by",lights34:"b8",lights56:"b9",lights78:"ca",metallic:"c2",roughness:"dr",sceneProperties:"f",viewMatrix:"g"}},ca=er(function(e,r,n,a,i,l){return c(be,a,te(function(u,v,$,f,d,p,g,m){var _=g.a,b=g.b;return C(ce,t(Fe,f,l,m),Il,Yl,i,{cA:e,U:b,by:_.by,b8:_.b8,b9:_.b9,ca:_.ca,c2:n,c:$,d:v,e:p,dr:r,f:u,g:d})}))}),u4=function(e){return{$:0,a:e}},s0=s(function(e,r){return{$:1,a:e,b:r}}),Pn=s(function(e,r){if(r.$){var n=r.a.G;return k(n,1)}else return r.a,k(e,0)}),v4=function(e){return z(sn,fn(e),mn(e),dn(e),1)},si=z(sn,0,0,0,0),ba=s(function(e,r){if(r.$){var a=r.a.G;return k(a,si)}else{var n=r.a;return k(e,v4(n))}}),Zl=s(function(e,r){var n=k(e,r);if(n.a.$){var i=n.a.a.G;return c(s0,k(i,si),c(Pn,i,r))}else if(n.b.$){var i=n.b.a.G;return c(s0,c(ba,i,e),c(Pn,i,r))}else{var a=n.a.a;return n.b.a,u4(a)}}),$4=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),la=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),s4=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),f4=function(e){return c(je,e,1)},Qt=c(je,0,0),jr=s(function(e,r){if(r.$){var a=r.a.G;return k(a,Qt)}else{var n=r.a;return k(e,f4(n))}}),Xl=E(function(e,r,n,a){var i=z(s4,e,r,n,a);if(i.a.$){var $=i.a.a.G;return z(la,k($,si),c(jr,$,r),c(jr,$,n),c(Pn,$,a))}else if(i.b.$){var $=i.b.a.G;return z(la,c(ba,$,e),k($,Qt),c(jr,$,n),c(Pn,$,a))}else if(i.c.$){var $=i.c.a.G;return z(la,c(ba,$,e),c(jr,$,r),k($,Qt),c(Pn,$,a))}else if(i.d.$){var $=i.d.a.G;return z(la,c(ba,$,e),c(jr,$,r),c(jr,$,n),k($,1))}else{var l=i.a.a,u=i.b.a,v=i.c.a;return i.d.a,t($4,l,u,v)}}),m4={src:`
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
    `,attributes:{},uniforms:{backlight:"cx",colorTexture:"b$",sceneProperties:"f"}},_t=xe(function(e,r,n,a,i){return c(be,n,te(function(l,u,v,$,f,d,p,g){return C(ce,t(Fe,$,i,g),El,m4,a,{cx:Xn(r),b$:e,c:v,d:u,e:d,f:l,g:f})}))}),Kl={src:`
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
    `,attributes:{normal:"s",position:"ci",uv:"Q"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},d4=E(function(e,r,n,a){return c(be,r,te(function(i,l,u,v,$,f,d,p){var g=d.a,m=d.b;return C(ce,t(Fe,v,a,p),Kl,Ul,n,{U:m,by:g.by,b8:g.b8,b9:g.b9,ca:g.ca,c$:e,c:u,d:l,bb:e,e:f,f:i,bi:0,g:$})}))}),p4=ao(function(e,r,n,a,i,l,u,v,$){return c(be,u,te(function(f,d,p,g,m,_,b,y){var S=b.a,w=b.b;return C(ce,t(Fe,g,$,y),Kl,ql,v,{cB:e,cF:r,cG:l,cH:a,U:w,by:S.by,b8:S.b8,b9:S.b9,ca:S.ca,c3:i,c:p,d,bb:e,e:_,ds:n,f,bi:0,g:m})}))}),Vn=x(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),g4=function(e){var r=e;return t(Vn,r.et,r.eq,.5)},h4=function(e){var r=e;return t(Vn,r.eu,r.er,.5)},b4=function(e){var r=e;return t(Vn,r.ev,r.es,.5)},_4=function(e){return t(we,g4(e),h4(e),b4(e))},U=function(e){var r=sl(e),n=r.a,a=r.b,i=r.c;return{fd:rt(_4(e)),fB:n/2,fC:a/2,fD:i/2}},fi=s(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var v=e.b.a.G;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var i=r.a,u=r.c,a=r.d;return z(bt,v,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z(bt,v,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z(bt,v,U(i),u,a);case 8:return T;case 9:return T;default:return T}}else{var n=e.b.a;switch(r.$){case 0:return T;case 1:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return z($r,n,U(i),u,a);case 8:var i=r.a,u=r.c;return z($r,n,U(i),u,0);case 9:var i=r.a,u=r.c;return z($r,n,U(i),u,0);default:var i=r.a,l=r.b,u=r.d;return z(t4,n,l,U(i),u)}}case 1:if(e.b.$){e.a;var v=e.b.a.G,f=e.c;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:var i=r.a,u=r.c,a=r.d;return C(_t,v,f,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return C(_t,v,f,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return C(_t,v,f,U(i),u,a);case 8:return T;case 9:return T;default:return T}}else{var $=e.b.a,f=e.c;switch(r.$){case 0:return T;case 1:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 2:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 3:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 4:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 5:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 6:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return C(sr,$,f,U(i),u,a);case 8:var i=r.a,u=r.c;return C(sr,$,f,U(i),u,0);case 9:var i=r.a,u=r.c;return C(sr,$,f,U(i),u,0);default:var i=r.a,l=r.b,u=r.d;return C(i4,$,f,l,U(i),u)}}case 2:e.a;var d=e.b,W=e.c,p=c(Zl,d,W);if(p.$){var _=p.a,b=_.a;_.b;var y=p.b,S=y.a,w=y.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var i=r.a,u=r.c,m=r.d;return z(d4,b,U(i),u,m);case 7:var i=r.a,u=r.c,m=r.d;return Te(c4,b,S,w,U(i),u,m);case 8:return T;case 9:return T;default:return T}}else{var g=p.a;switch(r.$){case 0:return T;case 1:return T;case 2:var i=r.a,u=r.c,m=r.d;return z(ia,g,U(i),u,m);case 3:return T;case 4:var i=r.a,u=r.c,m=r.d;return z(ia,g,U(i),u,m);case 5:return T;case 6:var i=r.a,u=r.c,m=r.d;return z(ia,g,U(i),u,m);case 7:var i=r.a,u=r.c,m=r.d;return z(ia,g,U(i),u,m);case 8:return T;case 9:return T;default:return T}}default:e.a;var P=e.b,F=e.c,G=e.d,W=e.e,N=z(Xl,P,F,G,W);if(N.$){var K=N.a,re=K.a,ve=K.b,de=N.b,le=de.a,he=de.b,Ae=N.c,Le=Ae.a,hr=Ae.b,br=N.d,S=br.a,w=br.b;switch(r.$){case 0:return T;case 1:return T;case 2:return T;case 3:return T;case 4:return T;case 5:return T;case 6:var i=r.a,u=r.c,a=r.d;return mu(p4,re,ve,le,he,Le,hr,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return l4(re)(ve)(le)(he)(Le)(hr)(S)(w)(U(i))(u)(a);case 8:return T;case 9:return T;default:return T}}else{var H=N.a,I=N.b,V=N.c;switch(r.$){case 0:return T;case 1:return T;case 2:var i=r.a,u=r.c,a=r.d;return Te(ca,H,I,V,U(i),u,a);case 3:return T;case 4:var i=r.a,u=r.c,a=r.d;return Te(ca,H,I,V,U(i),u,a);case 5:return T;case 6:var i=r.a,u=r.c,a=r.d;return Te(ca,H,I,V,U(i),u,a);case 7:var i=r.a,u=r.c,a=r.d;return Te(ca,H,I,V,U(i),u,a);case 8:return T;case 9:return T;default:return T}}}}),wt=function(e){var r=e;return r.gF},yt=function(e){var r=e;return r.gJ},xt=function(e){var r=e;return r.dJ},w4=function(e){var r=e,n=xt(r.dK),a=yt(r.dK),i=wt(r.dK),l=xt(r.dI),u=yt(r.dI),v=wt(r.dI),$=xt(r.dH),f=yt(r.dH),d=wt(r.dH);return d*u*n+f*l*i+$*v*a-$*u*i-f*v*n-d*l*a>0},y4=function(e){var r=rt(Br(e)),n=Ie(Pr(e)),a=Ie(Lr(e)),i=Ie(zr(e));return{d0:w4(e),u:i.gF,v:i.gJ,w:i.dJ,x:a.gF,y:a.gJ,z:a.dJ,A:n.gF,B:n.gJ,C:n.dJ,M:r.gF,N:r.gJ,O:r.dJ,cm:1}},Er=s(function(e,r){return{$:5,a:e,b:r}}),Ql=s(function(e,r){var n=r;switch(n.$){case 0:return T;case 5:var a=n.a,i=n.b,l=c(tl,a,e);return c(Er,l,i);case 1:return c(Er,e,n);case 3:return c(Er,e,n);case 2:return c(Er,e,n);default:return c(Er,e,n)}}),eu=s(function(e,r){return c(Ql,y4(e),r)}),tt=function(e){return{$:2,a:e}},x4=s(function(e,r){var n=e.a,a=e.b,i=e.c,l=r.fd;return{fd:{gF:n*l.gF,gJ:a*l.gJ,dJ:i*l.dJ},fB:n*r.fB,fC:a*r.fC,fD:i*r.fD}}),S4=g$,C4=p$,f0=function(e){return function(r){return function(n){return function(a){return function(i){return function(l){return function(u){return function(v){return function($){return function(f){var d=e.a,p=e.b,g=e.c,m=C4(a),_=m.gF,b=m.gJ,y=m.dJ,S=m.e$,w=S4({e$:S,gF:_*d,gJ:b*p,dJ:y*g});return Ea(r,n,w,i,l,u,v,$,f)}}}}}}}}}},eo=s(function(e,r){switch(r.$){case 0:return jl;case 5:var n=r.a,a=r.b;return c(Er,n,c(eo,e,a));case 1:var i=r.a,l=r.b;return c(be,c(x4,e,i),c(f0,e,l));case 3:return r;case 2:var l=r.a;return tt(c(f0,e,l));default:var u=r.a;return dl(c(oe,eo(e),u))}}),mi=s(function(e,r){var n=r;return c(eo,e,n)}),di={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ru=7683,nu=7682,P4=t(ri,{cZ:0,$7:0,dG:15},{br:ze,bK:on,bT:ze,bU:ru},{br:ze,bK:on,bT:ze,bU:nu}),z4=t(ri,{cZ:0,$7:0,dG:15},{br:ze,bK:on,bT:ze,bU:nu},{br:ze,bK:on,bT:ze,bU:ru}),pi=s(function(e,r){return e?c(M,z4,r):c(M,P4,r)}),L4={src:`
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
    `,attributes:{normal:"s",position:"ci"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"co",viewMatrix:"g"}},k4=function(e){if(e.$){var r=e.c;return ae(te(function(n,a,i,l,u,v,$,f){return C(ce,c(pi,l,f),L4,di,r,{c:i,d:a,e:v,f:n,co:$,g:u})}))}else return q},Ba=function(e){var r=k4(e);if(r.$)return T;var n=r.a;return tt(n)},T4=E(function(e,r,n,a){var i=c(fi,n,Al),l=function(){var d=k(e,r);return d.a?d.b?Yn(h([i,Ba($0)])):i:d.b?Ba($0):T}(),u=Ka(a),v=u.a,$=u.b,f=u.c;return c(eu,Xa(a),c(mi,B(v,$,f),l))}),M4=s(function(e,r){return z(T4,!0,!0,e,r)}),au=s(function(e,r){return{$:0,a:e,b:r}}),F4=function(e){var r=Fo(e),n=r.dn,a=r.cM,i=r.cC;return t(Un,n,a,i)},D4=function(e){return c(au,0,Ot(F4(e)))},zn=function(e){var r=e;return wr(r)},J4=s(function(e,r){var n=e.ci,a=e.s;return c(M,{s:nt(a),ci:Me(n)},r)}),A4=Ra(function(e,r,n,a,i,l,u){e:for(;;)if(u.b){var v=u.a,$=u.b,f=dn(v.ci),d=mn(v.ci),p=fn(v.ci),g=c(ga,e,p),m=c(Je,r,p),_=c(ga,n,d),b=c(Je,a,d),y=c(ga,i,f),S=c(Je,l,f),w=$;e=g,r=m,n=_,a=b,i=y,l=S,u=w;continue e}else return kl({eq:r,er:a,es:l,et:e,eu:n,ev:i})}),tu=s(function(e,r){var n=dn(e.ci),a=mn(e.ci),i=fn(e.ci);return to(A4,i,i,a,a,n,n,r)}),B4=function(e){var r=t(Z0,J4,L,li(e));if(r.b){var n=r.a,a=r.b,i=c(Zn,r,ci(e)),l=c(tu,n,a);return z(zl,l,e,i,0)}else return ii},m0=s(function(e,r){var n=e,a=r,i=n.dI,l=i,u=n.dH,v=u;return{gF:a.gF*v.gF+a.gJ*l.gF,gJ:a.gF*v.gJ+a.gJ*l.gJ,dJ:a.gF*v.dJ+a.gJ*l.dJ}}),Va=function(e){var r=e;return yr(r)},ro=function(e){return Dn(2*an*e)},V4=Dr,d0=V4({c9:Ze,dH:bl,dI:_l}),ou=function(){var e=72,r=c(Ic,e,ro(1)),n=cr(1),a=Ir(Oc),i=Ir(Uc),l=cr(1),u=c(ee,.5,l),v=t(we,We,We,u),$=c(ee,-.5,l),f=t(we,We,We,$),d=function(m){var _=c(ee,m,r),b=Ir(c(m0,d0,Ut(_))),y=c(ee,zn(_),n),S=c(ee,Va(_),n),w=t(we,y,S,u),P=t(we,y,S,$),F=c(nn,e,m+1),G=c(ee,F,r),W=Ir(c(m0,d0,Ut(G))),N=c(ee,zn(G),n),H=c(ee,Va(G),n),I=t(we,N,H,$),V=t(we,N,H,u);return h([B({s:i,ci:f},{s:i,ci:I},{s:i,ci:P}),B({s:b,ci:P},{s:W,ci:I},{s:W,ci:V}),B({s:b,ci:P},{s:W,ci:V},{s:b,ci:w}),B({s:a,ci:v},{s:a,ci:w},{s:a,ci:V})])},p=c(oe,d,c(en,0,e-1)),g=Kt(Ge(p));return oi(B4(g))}(),p0=Vl(ou),j4=function(e){var r=Ro(e),n=jo(r),a=n.a,i=n.b;return vr({c9:Eo(e),dH:a,dI:i,dK:r})},R4=E(function(e,r,n,a){var i=j4(Zo(a)),l=c(fi,n,ou),u=function(){var p=k(e,r);return p.a?p.b?Yn(h([l,Ba(p0)])):l:p.b?Ba(p0):T}(),v=el(a),$=v,f=Qc(a),d=f;return c(eu,i,c(mi,B($,$,d),u))}),E4=s(function(e,r){return z(R4,!0,!0,e,r)}),g0={src:`
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
    `,attributes:{triangleVertex:"dz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bP",viewMatrix:"g"}},h0={src:`
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
    `,attributes:{triangleVertex:"dz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bP",viewMatrix:"g"}},wn=function(e){var r=Bn(e),n=r.a,a=r.b,i=r.c,l=Qr(n),u=Qr(a),v=Qr(i);return tr({d9:l.gF,ea:u.gF,eb:v.gF,ec:0,ed:l.gJ,ee:u.gJ,ef:v.gJ,eg:0,eh:l.dJ,ei:u.dJ,ej:v.dJ,ek:0,el:0,em:0,en:0,eo:0})},ua=Jl(h([B({dz:0},{dz:1},{dz:2})])),N4=s(function(e,r){var n=Tl(r),a=U(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.G,T;var i=e.b.a;return c(be,a,te(function(w,P,F,G,W,N,H,I){return C(ce,t(Fe,G,0,I),g0,vi,ua,{aJ:i,c:F,d:P,e:N,f:w,bP:wn(r),g:W})}));case 1:if(e.b.$)return e.a,T;var l=e.b.a,u=e.c;return c(be,a,te(function(w,P,F,G,W,N,H,I){return C(ce,t(Fe,G,0,I),g0,$i,ua,{a1:c(at,Xn(u),l),c:F,d:P,e:N,f:w,bP:wn(r),g:W})}));case 2:e.a;var v=e.b,m=e.c,$=c(Zl,v,m);if($.$)return T;var f=$.a;return c(be,a,te(function(w,P,F,G,W,N,H,I){var V=H.a,K=H.b;return C(ce,t(Fe,G,0,I),h0,Gl,ua,{U:K,by:V.by,b8:V.b8,b9:V.b9,ca:V.ca,c_:f,c:F,d:P,e:N,f:w,bP:wn(r),g:W})}));default:e.a;var d=e.b,p=e.c,g=e.d,m=e.e,_=z(Xl,d,p,g,m);if(_.$)return T;var b=_.a,y=_.b,S=_.c;return c(be,a,te(function(w,P,F,G,W,N,H,I){var V=H.a,K=H.b;return C(ce,t(Fe,G,0,I),h0,Yl,ua,{cA:b,U:K,by:V.by,b8:V.b8,b9:V.b9,ca:V.ca,c2:S,c:F,d:P,e:N,dr:y,f:w,bP:wn(r),g:W})}))}}),W4=function(){var e=h([{bh:c(je,0,1)},{bh:c(je,1,1)},{bh:c(je,2,1)},{bh:c(je,0,-1)},{bh:c(je,1,-1)},{bh:c(je,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return c(Zn,e,r)}(),H4={src:`
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
    `,attributes:{triangleShadowVertex:"bh"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"co",triangleVertexPositions:"bP",viewMatrix:"g"}},b0=function(e){return tt(te(function(r,n,a,i,l,u,v,$){return C(ce,c(pi,i,$),H4,di,W4,{c:a,d:n,e:u,f:r,co:v,bP:wn(e),g:l})}))},G4=E(function(e,r,n,a){var i=c(N4,n,a),l=k(e,r);return l.a?l.b?Yn(h([i,b0(a)])):i:l.b?b0(a):T}),I4=s(function(e,r){return z(G4,!0,!0,e,r)}),U4=s(function(e,r){var n=Zr(r),a=Zr(e),i=Yr(r),l=Yr(e),u=qr(r),v=qr(e);return{eq:c($e,v,u),er:c($e,l,i),es:c($e,a,n),et:c(ge,v,u),eu:c(ge,l,i),ev:c(ge,a,n)}}),O4=function(e){var r=Uo(e),n=r.a,a=r.b;return c(U4,n,a)},_0={src:`
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
    `,attributes:{lineSegmentVertex:"d8"},uniforms:{lineSegmentEndPoint:"d6",lineSegmentStartPoint:"d7",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},q4=s(function(e,r){return{$:1,a:e,b:r}}),Y4=q4({dS:2,d$:0,ex:1}),w0=Y4(h([k({d8:0},{d8:1})])),Z4=s(function(e,r){var n=O4(r),a=U(n),i=Uo(r),l=i.a,u=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.G,T;var v=e.b.a;return c(be,a,te(function(f,d,p,g,m,_,b,y){return C(ce,y,_0,vi,w0,{aJ:v,d6:Me(u),d7:Me(l),c:p,d,e:_,f,g:m})}));case 1:if(e.b.$)return T;var v=e.b.a,$=e.c;return c(be,a,te(function(d,p,g,m,_,b,y,S){return C(ce,S,_0,$i,w0,{a1:c(at,Xn($),v),d6:Me(u),d7:Me(l),c:g,d:p,e:b,f:d,g:_})}));case 2:return T;default:return T}}),X4=s(function(e,r){return c(Z4,e,r)}),y0=s(function(e,r){var n=e,a=r;return n/a}),K4=xe(function(e,r,n,a,i){e:for(;;){var l=a(r/n),u=c(M,l,i);if(dr(r,e))return u;var v=e,$=r-1,f=n,d=a,p=u;e=v,r=$,n=f,a=d,i=p;continue e}}),x0=s(function(e,r){return e<1?L:C(K4,0,e,e,r,L)}),Q4=s(function(e,r){var n=e.ci,a=e.s,i=e.Q,l=i,u=l.a,v=l.b;return c(M,{s:nt(a),ci:Me(n),Q:c(je,u,v)},r)}),e5=function(e){var r=t(Z0,Q4,L,li(e));if(r.b){var n=r.a,a=r.b,i=c(Zn,r,ci(e)),l=c(tu,n,a);return z(Ll,l,e,i,0)}else return ii},iu=s(function(e,r){var n=e,a=r,i=wr(a);return{gF:i*wr(n),gJ:i*yr(n),dJ:yr(a)}}),r5=function(){var e=cr(1),r=72,n=c(en,0,r-1),a=c(x0,r,c(Vn,We,ro(1))),i=wo(r/2),l=c(en,0,i-1),u=c(x0,i,c(Vn,Gr(90),Gr(-90))),v=ui(Ge(c(oe,function(d){return c(oe,function(p){return{s:Ir(c(iu,d,p)),ci:t(we,c(ee,zn(p)*zn(d),e),c(ee,zn(p)*Va(d),e),c(ee,Va(p),e)),Q:k(c(y0,d,ro(1)),c(y0,c(Cn,Gr(90),p),Gr(180)))}},u)},a))),$=s(function(d,p){return d*(i+1)+p}),f=Ge(c(oe,function(d){return Ge(c(oe,function(p){var g=c($,d+1,p),m=c($,d,p),_=c($,d+1,p+1),b=c($,d,p+1);return h([B(b,_,g),B(b,g,m)])},l))},n));return oi(e5(c(Bl,v,f)))}(),ja=72,va=2*ja,n5=s(function(e,r){e:for(;;){var n=va+1,a=c(nn,va,2*e+3),i=c(nn,va,2*e+2),l=2*e+1,u=2*e,v=va,$=c(M,B(v,u,i),c(M,B(u,a,i),c(M,B(u,l,a),c(M,B(l,n,a),r))));if(e){var f=e-1,d=$;e=f,r=d;continue e}else return $}}),a5=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),t5=s(function(e,r){e:for(;;){var n=t(a5,0,2*an,e/ja),a={bW:n,cd:0,cl:1},i={bW:n,cd:1,cl:1},l=c(M,a,c(M,i,r));if(e){var u=e-1,v=l;e=u,r=v;continue e}else return l}}),o5=function(){var e=c(t5,ja-1,h([{bW:0,cd:0,cl:0},{bW:0,cd:1,cl:0}])),r=c(n5,ja-1,L);return c(Zn,e,r)}(),i5={src:`
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
    `,attributes:{angle:"bW",offsetScale:"cd",radiusScale:"cl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"co",viewMatrix:"g"}},S0=function(e){return tt(te(function(r,n,a,i,l,u,v,$){return C(ce,c(pi,!0,$),i5,di,o5,{aJ:t(Un,0,0,1),c:a,d:n,e:u,f:r,co:v,g:l})}))},c5=function(e){var r=Fl(e);return{d0:!0,u:1,v:0,w:0,x:0,y:1,z:0,A:0,B:0,C:1,M:r.gF,N:r.gJ,O:r.dJ,cm:1}},l5=s(function(e,r){return c(Ql,c5(e),r)}),u5=E(function(e,r,n,a){var i=c(fi,n,r5),l=function(){var $=k(e,r);return $.a?$.b?Yn(h([i,S0()])):i:$.b?S0():T}(),u=et(a),v=u;return c(l5,c(Ja,Ze,Qa(a)),c(mi,B(v,v,v),l))}),v5=s(function(e,r){return z(u5,!0,!0,e,r)}),$5=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),s5=xe(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),f5=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return c(au,n,a);case 1:var n=e.a,a=e.b,r=e.c;return t($5,n,a,r);case 2:var n=e.a,a=e.b,u=e.c;return t(Zc,n,a,u);default:var n=e.a,a=e.b,i=e.c,l=e.d,u=e.e;return C(s5,n,a,i,l,u)}},m5=f5,cu=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return h([c(M4,i,r)]);case 1:var i=e.a,n=e.b;return h([c(I4,i,n)]);case 3:var i=e.a,a=e.b;return h([c(v5,m5(i),a)]);case 2:var i=e.a,l=e.b;return h([c(E4,i,l)]);case 4:var u=e.a,v=e.b;return h([c(X4,D4(u),v)]);default:var $=e.a;return c(Xo,cu,$)}},d5=function(e){return c(Xo,cu,e)},p5=s(function(e,r){return S2({aY:Rm(e.e5),fa:e.fa,aZ:Em(.5),cJ:e.cJ,a_:k(e0(Qe(e.cn.gD)),e0(Qe(e.cn.fF))),a3:d5(r),gl:!0,gt:c(iu,Dn(e.gs),Dn(e.gu)),eX:qa})}),g5=s(function(e,r){return c(p5,{e5:c(Yc,Jn(r.l).e6,Jn(r.l).bB),fa:Gc(e),cJ:e.cJ,cn:e.cn,gs:Tr(225),gu:Tr(315)},h([qt(h([qt(L),c(jm,e,r)]))]))}),h5={$:5},b5={$:7},_5={$:4},w5={$:3},y5={$:6},x5=function(e){var r=e;return r.n},S5=function(e){return Ke(x5(e))+1},Nr=s(function(e,r){return c(Oa,h([A("m-1 p-2 rounded bg-black40 hover:bg-black80"),Hn(e)]),h([me(r)]))}),C5=rr("p"),P5=function(e){var r=e;return 1+Ke(r.n)+Ke(r.F)},lu=rr("span"),z5=function(e){return c(R,h([A("p-4 border-[0.5px] border-white20")]),h([c(R,h([A("text-lg")]),h([me("Level Selection")])),c(C5,L,h([c(Nr,w5,"<"),c(lu,h([c(ie,"margin","10px")]),h([me(nl(h([ye(S5(e.l))," / ",ye(P5(e.l))])))])),c(Nr,_5,">")])),c(Nr,h5,"Add level"),c(Nr,y5,"Remove current level"),c(Nr,b5,"Move level one up")]))},L5={$:2},k5=function(e){return{$:0,a:e}},T5=c(ne,function(e){return e.l},c(ne,Jn,function(e){return e.bB})),M5=function(e){switch(e){case"Inferno":return 0;case"Magma":return 1;case"Parula":return 2;case"Plasma":return 3;case"Viridis":return 4;default:return 0}},F5=function(e){return c(To,"change",c(Tn,e,Jc))},D5=rr("option"),no=function(e){switch(e){case 0:return"Inferno";case 1:return"Magma";case 2:return"Parula";case 3:return"Plasma";default:return"Viridis"}},J5=function(e){return c(D5,h([In(no(e))]),h([me(no(e))]))},A5=rr("select"),B5=function(e){return c(R,h([A("p-2")]),h([c(lu,h([A("p-2")]),h([me("Choose a palette:")])),c(A5,h([A("p-2 text-white80 bg-black20"),F5(c(ne,M5,k5)),In(no(T5(e)))]),c(oe,J5,h([2,0,1,3,4])))]))},V5=function(e){return{$:1,a:e}},j5=s(function(e,r){var n=r.a,a=r.b,i=s(function(l,u){return c(e,l+1,u)});return c($n,c(e,0,n),c(_o,i,a))}),R5=function(e){var r=e.a,n=e.b;return c(M,r,n)},E5=function(e){var r=Jn(e.l),n=20,a=0,i=13,l=2,u=s(function(v,$){var f=(v/n|0)*(i+a),d=c(nn,n,v)*(i+a),p=dr(e.aB,v)?k(l,i-2*l):k(0,i),g=p.a,m=p.b;return c(R,h([c(ie,"position","absolute"),c(ie,"width",ue(m)+"px"),c(ie,"height",ue(m)+"px"),c(ie,"background-color",al($)),c(ie,"transform","translate("+(ue(d)+("px,"+(ue(f)+"px)")))),Hn(V5(v)),c(ie,"border","solid white "+(ue(g)+"px"))]),L)});return c(R,h([A("h-[200px]")]),R5(c(j5,u,qc(r.bB))))},N5=function(e){return c(R,h([A("p-4 border-[0.5px] border-white20")]),h([c(R,h([A("text-lg")]),h([me("Color Palette")])),B5(e),c(Nr,L5,"Set selected as background"),c(R,L,h([me(ye(e.aB))])),E5(e)]))},W5=c(R,h([A("p-4 border-[0.5px] border-white20")]),h([c(R,h([A("text-lg")]),h([me("Instructions")])),c(R,h([A("pl-2")]),h([me("- Press mouse to add trixel")])),c(R,h([A("pl-2")]),h([me("- Hold shift and press mouse to remove trixel")]))])),H5=s(function(e,r){return c(R,h([A("fixed w-[300px] h-full top-0 right-0"),A("bg-black20"),A("border-[0.5px] border-white20"),A("overflow-y-scroll"),A("text-xs text-white60")]),h([c(R,h([A("relative")]),h([W5,N5(r),z5(r)]))]))}),G5=Te(A1,g5,If,H1,R1,H5,Qf);const I5={Main:{init:G5(c(J,function(e){return Ve({fN:e})},c(D,"inputs",c(J,function(e){return c(J,function(r){return c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return Ve({fg:u,cJ:l,fs:i,d2:a,ch:n,cn:r,gC:e})},c(D,"clock",pe))},c(D,"devicePixelRatio",pe))},c(D,"dt",pe))},c(D,"keyboard",c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return c(J,function(d){return c(J,function(p){return Ve({e1:p,fi:d,dR:f,fr:$,fU:v,gc:u,gh:l,eO:i,eW:a})},c(D,"alt",Q))},c(D,"control",Q))},c(D,"down",Q))},c(D,"downs",za(Fn)))},c(D,"left",Q))},c(D,"pressedKeys",za(Fn)))},c(D,"right",Q))},c(D,"shift",Q))},c(D,"up",Q))))},c(D,"pointer",c(J,function(n){return c(J,function(a){return c(J,function(i){return c(J,function(l){return c(J,function(u){return c(J,function(v){return c(J,function($){return c(J,function(f){return Ve({dR:f,cO:$,f$:v,gi:u,gj:l,eW:i,gF:a,gJ:n})},c(D,"down",Q))},c(D,"isDown",Q))},c(D,"move",Q))},c(D,"rightDown",Q))},c(D,"rightUp",Q))},c(D,"up",Q))},c(D,"x",pe))},c(D,"y",pe))))},c(D,"screen",c(J,function(r){return c(J,function(n){return Ve({fF:n,gD:r})},c(D,"height",pe))},c(D,"width",pe))))},c(D,"wheel",c(J,function(e){return c(J,function(r){return Ve({fl:r,fm:e})},c(D,"deltaX",pe))},c(D,"deltaY",pe)))))))(0)}},j={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},U5=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),a=m=>["ShiftLeft","ShiftRight"].includes(m.code),i=m=>m.code=="ArrowLeft",l=m=>m.code=="ArrowRight",u=m=>m.code=="ArrowUp",v=m=>m.code=="ArrowDown",$=m=>m.button==0,f=m=>m.button==2;function d(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function p(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(j.keyboard.downs.push(m.code),j.keyboard.pressedKeys.push(m.code),r(m)&&(j.keyboard.control=!0),n(m)&&(j.keyboard.alt=!0),a(m)&&(j.keyboard.shift=!0),i(m)&&(j.keyboard.left=!0),l(m)&&(j.keyboard.right=!0),u(m)&&(j.keyboard.up=!0),v(m)&&(j.keyboard.down=!0))}),window.addEventListener("keyup",m=>{j.keyboard.pressedKeys=j.keyboard.pressedKeys.filter(_=>_!=m.code),r(m)&&(j.keyboard.control=!1,j.keyboard.pressedKeys=[]),n(m)&&(j.keyboard.alt=!1),a(m)&&(j.keyboard.shift=!1),i(m)&&(j.keyboard.left=!1),l(m)&&(j.keyboard.right=!1),u(m)&&(j.keyboard.up=!1),v(m)&&(j.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{j.pointer.x=-.5*j.screen.width+m.pageX,j.pointer.y=.5*j.screen.height-m.pageY,$(m)&&(j.pointer.down=!0,j.pointer.isDown=!0),f(m)&&(j.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{j.pointer.move=!0,j.pointer.x=-.5*j.screen.width+m.pageX,j.pointer.y=.5*j.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{$(m)&&(j.pointer.up=!0,j.pointer.isDown=!1),f(m)&&(j.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{$(m)&&(j.pointer.up=!0,j.pointer.isDown=!1),f(m)&&(j.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{j.wheel.deltaX=m.deltaX,j.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{d(j)}),window.addEventListener("focus",m=>{d(j)}),window.addEventListener("visibilitychange",m=>{d(j)}),window.addEventListener("resize",()=>{j.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(m){const _=m/1e3,b=_-j.clock;b<.009||(j.dt=b,j.clock=_,e.ports.tick.send(j),p(j)),window.requestAnimationFrame(g)}},O5=()=>{St("pointerdown"),St("wheel"),St("keydown")},St=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},q5=I5.Main.init({node:document.querySelector("#app div"),flags:{inputs:j}});O5();U5(q5);
