(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Ur(e,r,n){return n.a=e,n.f=r,n}function $(e){return Ur(2,e,function(r){return function(n){return e(r,n)}})}function w(e){return Ur(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Ur(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Ur(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Je(e){return Ur(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function dt(e){return Ur(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function _e(e){return Ur(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Qo(e){return Ur(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function A(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function L(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function fe(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ko(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function mt(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function uv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var $v=[];function vv(e){return e.length}var fv=w(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),sv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,h(n,r)}),dv=$(function(e,r){return r[e]});w(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});w(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var mv=w(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});w(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});w(function(e,r,n){return n.slice(e,r)});w(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+pv()),r});function pv(e){return"<internals>"}function Tn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function te(e,r){for(var n,a=[],t=so(e,r,0,a);t&&(n=a.pop());t=so(n.a,n.b,0,a));return t}function so(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Tn(5),!1;if(n>100)return a.push(h(e,r)),!0;e.$<0&&(e=gc(e),r=gc(r));for(var t in e)if(!so(e[t],r[t],n+1,a))return!1;return!0}var gv=$(te);$(function(e,r){return!te(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var bv=$(function(e,r){var n=O(e,r);return n<0?Il:n?dd:Gl}),$a=0;function h(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function R(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ie);function ie(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=gr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=gr(e.a,r);return n}var k={$:0};function gr(e,r){return{$:1,a:e,b:r}}var hv=$(gr);function m(e){for(var r=k,n=e.length;n--;)r=gr(e[n],r);return r}function pt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var _v=w(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return m(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return m(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(A(e,r.a,n.a,a.a,t.a));return m(i)});Je(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(L(e,r.a,n.a,a.a,t.a,i.a));return m(c)});$(function(e,r){return m(pt(r).sort(function(n,a){return O(e(n),e(a))}))});$(function(e,r){return m(pt(r).sort(function(n,a){var t=o(e,n,a);return t===Gl?0:t===Il?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var yv=$(Math.pow);$(function(e,r){return r%e});var Cv=$(function(e,r){var n=r%e;return e===0?Tn(11):n>0&&e<0||n<0&&e>0?n+e:n}),wv=Math.PI,kv=Math.cos,Sv=Math.sin,Lv=Math.tan,Av=Math.atan;$(Math.atan2);function xv(e){return e}function Pv(e){return e===1/0||e===-1/0}var Tv=Math.ceil,zv=Math.floor,Mv=Math.round,Dv=Math.sqrt,ac=Math.log,jv=isNaN;function Fv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Bv=$(function(e,r){return e+r});function Ev(e){var r=e.charCodeAt(0);return isNaN(r)?G:N(55296<=r&&r<=56319?h(e[0]+e[1],e.slice(2)):h(e[0],e.slice(1)))}$(function(e,r){return e+r});function Vv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Rv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}w(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Wv=w(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Nv=$(function(e,r){return r.split(e)}),Hv=$(function(e,r){return r.join(e)}),Gv=w(function(e,r,n){return n.slice(e,r)});function Iv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Uv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Ov=$(function(e,r){return r.indexOf(e)>-1}),Jv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Yv=$(function(e,r){var n=e.length;if(n<1)return k;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return m(t)});function bl(e){return e+""}function qv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return G;r=10*r+i-48}return t==a?G:N(n==45?-r:r)}function Zv(e){if(e.length===0||/[\sxbo]/.test(e))return G;var r=+e;return r===r?N(r):G}function Xv(e){return pt(e).join("")}function Qv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Kv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function ef(e){return{$:0,a:e}}function rf(e){return{$:1,a:e}}function gt(e){return{$:2,b:e}}var nf=gt(function(e){return typeof e!="number"?Qe("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?$e(e):Qe("an INT",e)}),af=gt(function(e){return typeof e=="boolean"?$e(e):Qe("a BOOL",e)}),tf=gt(function(e){return typeof e=="number"?$e(e):Qe("a FLOAT",e)}),of=gt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Qe("a STRING",e)});function cf(e){return{$:3,b:e}}var lf=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function Or(e,r){return{$:9,f:e,g:r}}var uf=$(function(e,r){return{$:10,b:r,h:e}}),$f=$(function(e,r){return Or(e,[r])}),vf=w(function(e,r,n){return Or(e,[r,n])});E(function(e,r,n,a){return Or(e,[r,n,a])});he(function(e,r,n,a,t){return Or(e,[r,n,a,t])});var ff=Je(function(e,r,n,a,t,i){return Or(e,[r,n,a,t,i])});dt(function(e,r,n,a,t,i,c){return Or(e,[r,n,a,t,i,c])});_e(function(e,r,n,a,t,i,c,l){return Or(e,[r,n,a,t,i,c,l])});Qo(function(e,r,n,a,t,i,c,l,u){return Or(e,[r,n,a,t,i,c,l,u])});var sf=$(function(e,r){try{var n=JSON.parse(r);return Xe(e,n)}catch(a){return je(o(vi,"This is not valid JSON! "+a.message,r))}}),hl=$(function(e,r){return Xe(e,r)});function Xe(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Qe("null",r);case 3:return ya(r)?tc(e.b,r,m):Qe("a LIST",r);case 4:return ya(r)?tc(e.b,r,df):Qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Qe("an OBJECT with a field named `"+n+"`",r);var v=Xe(e.b,r[n]);return ar(v)?v:je(o(bc,n,v.a));case 7:var a=e.e;if(!ya(r))return Qe("an ARRAY",r);if(a>=r.length)return Qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Xe(e.b,r[a]);return ar(v)?v:je(o(Ul,a,v.a));case 8:if(typeof r!="object"||r===null||ya(r))return Qe("an OBJECT",r);var t=k;for(var i in r)if(r.hasOwnProperty(i)){var v=Xe(e.b,r[i]);if(!ar(v))return je(o(bc,i,v.a));t=gr(h(i,v.a),t)}return $e(be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Xe(l[u],r);if(!ar(v))return v;c=c(v.a)}return $e(c);case 10:var v=Xe(e.b,r);return ar(v)?Xe(e.h(v.a),r):v;case 11:for(var s=k,f=e.g;f.b;f=f.b){var v=Xe(f.a,r);if(ar(v))return v;s=gr(v.a,s)}return je(md(be(s)));case 1:return je(o(vi,e.a,r));case 0:return $e(e.a)}}function tc(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Xe(e,r[i]);if(!ar(c))return je(o(Ul,i,c.a));t[i]=c.a}return $e(n(t))}function ya(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function df(e){return o(xd,e.length,function(r){return e[r]})}function Qe(e,r){return je(o(vi,"Expecting "+e,r))}function bn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return bn(e.b,r.b);case 6:return e.d===r.d&&bn(e.b,r.b);case 7:return e.e===r.e&&bn(e.b,r.b);case 9:return e.f===r.f&&oc(e.g,r.g);case 10:return e.h===r.h&&bn(e.b,r.b);case 11:return oc(e.g,r.g)}}function oc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!bn(e[a],r[a]))return!1;return!0}var mf=$(function(e,r){return JSON.stringify(r,null,e)+""});function ei(e){return e}function pf(){return[]}function gf(){return{}}var bf=w(function(e,r,n){return n[e]=r,n});function hf(e){return $(function(r,n){return n.push(e(r)),n})}function an(e){return{$:0,a:e}}function _f(e){return{$:1,a:e}}function zr(e){return{$:2,b:e,c:null}}var mo=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function yf(e){return{$:5,b:e}}var Cf=0;function ri(e){var r={$:0,e:Cf++,f:e,g:null,h:[]};return ni(r),r}function _l(e){return zr(function(r){r(an(ri(e)))})}function yl(e,r){e.h.push(r),ni(e)}var wf=$(function(e,r){return zr(function(n){yl(e,r),n(an($a))})}),Vt=!1,ic=[];function ni(e){if(ic.push(e),!Vt){for(Vt=!0;e=ic.shift();)kf(e);Vt=!1}}function kf(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,ni(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return ai(r,a,e.fu,e.ge,e.f5,function(){return function(){}})});function ai(e,r,n,a,t,i){var c=o(hl,e,r?r.flags:void 0);ar(c)||Tn(2);var l={},u=n(c.a),v=u.a,s=i(g,v),f=Sf(l,g);function g(d,_){var b=o(a,d,v);s(v=b.a,_),lc(l,b.b,t(v))}return lc(l,u.b,t(v)),f?{ports:f}:{}}var vr={};function Sf(e,r){var n;for(var a in vr){var t=vr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Af(t,r)}return n}function Lf(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Af(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(mo,l,yf(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?A(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=ri(o(mo,l,e.b))}var xf=$(function(e,r){return zr(function(n){e.g(r),n(an($a))})});$(function(e,r){return o(wf,e.h,{$:0,a:r})});function Cl(e){return function(r){return{$:1,k:e,l:r}}}function Pf(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var cc=[],Rt=!1;function lc(e,r,n){if(cc.push({p:e,q:r,r:n}),!Rt){Rt=!0;for(var a;a=cc.shift();)Tf(a.p,a.q,a.r);Rt=!1}}function Tf(e,r,n){var a={};Ua(!0,r,a,null),Ua(!1,n,a,null);for(var t in e)yl(e[t],{$:"fx",a:a[t]||{i:k,j:k}})}function Ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=zf(e,t,a,r.l);n[t]=Mf(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Ua(e,c.a,n,a);return;case 3:Ua(e,r.o,n,{s:r.n,t:a});return}}function zf(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?vr[r].e:vr[r].f;return o(i,t,a)}function Mf(e,r,n){return n=n||{i:k,j:k},e?n.i=gr(r,n.i):n.j=gr(r,n.j),n}function Df(e){vr[e]&&Tn(3)}$(function(e,r){return r});function jf(e,r){return Df(e),vr[e]={f:Ff,u:r,a:Bf},Cl(e)}var Ff=$(function(e,r){return function(n){return e(r(n))}});function Bf(e,r){var n=k,a=vr[e].u,t=an(null);vr[e].b=t,vr[e].c=w(function(c,l,u){return n=l,t});function i(c){var l=o(hl,a,c);ar(l)||Tn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Oa,xr=typeof document<"u"?document:{};function ti(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Er(e,function(){}),t),{}});function po(e){return{$:0,a:e}}var wl=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:oi(n),e:t,f:e,b:i}})}),nr=wl(void 0),Ef=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:oi(n),e:t,f:e,b:i}})}),Vf=Ef(void 0);function Rf(e,r,n,a){return{$:3,d:oi(e),g:r,h:n,i:a}}var Wf=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Jr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Jr([e,r],function(){return e(r)})});w(function(e,r,n){return Jr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return Jr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Jr([e,r,n,a,t],function(){return A(e,r,n,a,t)})});Je(function(e,r,n,a,t,i){return Jr([e,r,n,a,t,i],function(){return L(e,r,n,a,t,i)})});dt(function(e,r,n,a,t,i,c){return Jr([e,r,n,a,t,i,c],function(){return fe(e,r,n,a,t,i,c)})});_e(function(e,r,n,a,t,i,c,l){return Jr([e,r,n,a,t,i,c,l],function(){return Ko(e,r,n,a,t,i,c,l)})});Qo(function(e,r,n,a,t,i,c,l,u){return Jr([e,r,n,a,t,i,c,l,u],function(){return mt(e,r,n,a,t,i,c,l,u)})});var kl=$(function(e,r){return{$:"a0",n:e,o:r}}),Nf=$(function(e,r){return{$:"a1",n:e,o:r}}),Sl=$(function(e,r){return{$:"a2",n:e,o:r}}),yr=$(function(e,r){return{$:"a3",n:e,o:r}}),Hf=w(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Gf(e){return e=="script"?"p":e}function If(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(kl,r.n,Uf(e,r.o)):r});function Uf(e,r){var n=gi(r);return{$:r.$,a:n?p(Mn,n<3?Of:Jf,ce(e),r.a):o(Za,e,r.a)}}var Of=$(function(e,r){return h(e(r.a),r.b)}),Jf=$(function(e,r){return{ar:e(r.ar),c6:r.c6,cW:r.cW}});function oi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?uc(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?uc(c,t,i):c[t]=i}return r}function uc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Er(e,r){var n=e.$;if(n===5)return Er(e.k||(e.k=e.m()),r);if(n===0)return xr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Er(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return go(c,r,e.d),c}var c=e.f?xr.createElementNS(e.f,e.c):xr.createElement(e.c);Oa&&e.c=="a"&&c.addEventListener("click",Oa(c)),go(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ti(c,Er(n===1?l[u]:l[u].b,r));return c}function go(e,r,n){for(var a in n){var t=n[a];a==="a1"?Yf(e,t):a==="a0"?Xf(e,r,t):a==="a3"?qf(e,t):a==="a4"?Zf(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Yf(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function qf(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Zf(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Xf(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Qf(r,i),e.addEventListener(t,c,ii&&{passive:gi(i)<2}),a[t]=c}}var ii;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ii=!0}}))}catch{}function Qf(e,r){function n(a){var t=n.q,i=Xe(t.a,a);if(!!ar(i)){for(var c=gi(t),l=i.a,u=c?c<3?l.a:l.ar:l,v=c==1?l.b:c==3&&l.c6,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),e),f,g;f=s.j;){if(typeof f=="function")u=f(u);else for(var g=f.length;g--;)u=f[g](u);s=s.p}s(u,v)}}return n.q=r,n}function Kf(e,r){return e.$==r.$&&bn(e.a,r.a)}function Ll(e,r){var n=[];return tr(e,r,n,0),n}function ze(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function tr(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=cs(r),i=1;else{ze(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];tr(e.k,r.k,s,0),s.length>0&&ze(n,1,a,s);return;case 4:for(var f=e.j,g=r.j,d=!1,_=e.k;_.$===4;)d=!0,typeof f!="object"?f=[f,_.j]:f.push(_.j),_=_.k;for(var b=r.k;b.$===4;)d=!0,typeof g!="object"?g=[g,b.j]:g.push(b.j),b=b.k;if(d&&f.length!==g.length){ze(n,0,a,r);return}(d?!es(f,g):f!==g)&&ze(n,2,a,g),tr(_,b,n,a+1);return;case 0:e.a!==r.a&&ze(n,3,a,r.a);return;case 1:$c(e,r,n,a,rs);return;case 2:$c(e,r,n,a,ns);return;case 3:if(e.h!==r.h){ze(n,0,a,r);return}var C=ci(e.d,r.d);C&&ze(n,4,a,C);var S=r.i(e.g,r.g);S&&ze(n,5,a,S);return}}}function es(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function $c(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ze(n,0,a,r);return}var i=ci(e.d,r.d);i&&ze(n,4,a,i),t(e,r,n,a)}function ci(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ci(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Kf(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function rs(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ze(n,6,a,{v:l,i:c-l}):c<l&&ze(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];tr(s,i[v],n,++a),a+=s.b||0}}function ns(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,f=0,g=0,d=a;f<v&&g<s;){var _=l[f],b=u[g],C=_.a,S=b.a,y=_.b,x=b.b,B=void 0,Y=void 0;if(C===S){d++,tr(y,x,t,d),d+=y.b||0,f++,g++;continue}var I=l[f+1],H=u[g+1];if(I){var J=I.a,q=I.b;Y=S===J}if(H){var W=H.a,ne=H.b;B=C===W}if(B&&Y){d++,tr(y,ne,t,d),Nn(i,t,C,x,g,c),d+=y.b||0,d++,Hn(i,t,C,q,d),d+=q.b||0,f+=2,g+=2;continue}if(B){d++,Nn(i,t,S,x,g,c),tr(y,ne,t,d),d+=y.b||0,f+=1,g+=2;continue}if(Y){d++,Hn(i,t,C,y,d),d+=y.b||0,d++,tr(q,x,t,d),d+=q.b||0,f+=2,g+=1;continue}if(I&&J===W){d++,Hn(i,t,C,y,d),Nn(i,t,S,x,g,c),d+=y.b||0,d++,tr(q,ne,t,d),d+=q.b||0,f+=2,g+=2;continue}break}for(;f<v;){d++;var _=l[f],y=_.b;Hn(i,t,_.a,y,d),d+=y.b||0,f++}for(;g<s;){var ee=ee||[],b=u[g];Nn(i,t,b.a,b.b,void 0,ee),g++}(t.length>0||c.length>0||ee)&&ze(n,8,a,{w:t,x:c,y:ee})}var Al="_elmW6BL";function Nn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];tr(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Nn(e,r,n+Al,a,t,i)}function Hn(e,r,n,a,t){var i=e[n];if(!i){var c=ze(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];tr(a,i.z,l,t),ze(r,9,t,{w:l,A:i});return}Hn(e,r,n+Al,a,t)}function xl(e,r,n,a){Gn(e,r,n,0,0,r.b,a)}function Gn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)xl(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Gn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var f=l.s;if(f){f.A.s=e;var s=f.w;s.length>0&&Gn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var g=r.$;if(g===4){for(var d=r.k;d.$===4;)d=d.k;return Gn(e,d,n,a,t+1,i,e.elm_event_node_ref)}for(var _=r.e,b=e.childNodes,C=0;C<_.length;C++){t++;var S=g===1?_[C]:_[C].b,y=t+(S.b||0);if(t<=u&&u<=y&&(a=Gn(b[C],S,n,a,t,y,c),!(l=n[a])||(u=l.r)>i))return a;t=y}return a}function Pl(e,r,n,a){return n.length===0?e:(xl(e,r,n,a),Ja(e,n))}function Ja(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=as(t,a);t===e&&(e=i)}return e}function as(e,r){switch(r.$){case 0:return ts(e,r.s,r.u);case 4:return go(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ja(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Er(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Ja(e,i.w),e;case 8:return os(e,r);case 5:return r.s(e);default:Tn(10)}}function ts(e,r,n){var a=e.parentNode,t=Er(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function os(e,r){var n=r.s,a=is(n.y,r);e=Ja(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Er(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ti(e,a),e}function is(e,r){if(!!e){for(var n=xr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;ti(n,i.c===2?i.s:Er(i.z,r.u))}return n}}function li(e){if(e.nodeType===3)return po(e.textContent);if(e.nodeType!==1)return po("");for(var r=k,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=gr(o(yr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=k,v=e.childNodes,a=v.length;a--;)u=gr(li(v[a]),u);return p(nr,l,r,u)}function cs(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var ls=E(function(e,r,n,a){return ai(r,a,e.fu,e.ge,e.f5,function(t,i){var c=e.gg,l=a.node,u=li(l);return Tl(i,function(v){var s=c(v),f=Ll(u,s);l=Pl(l,u,f,t),u=s})})});E(function(e,r,n,a){return ai(r,a,e.fu,e.ge,e.f5,function(t,i){var c=e.c2&&e.c2(t),l=e.gg,u=xr.title,v=xr.body,s=li(v);return Tl(i,function(f){Oa=c;var g=l(f),d=nr("body")(k)(g.eX),_=Ll(s,d);v=Pl(v,s,_,t),s=d,Oa=0,u!==g.ga&&(xr.title=u=g.ga)})})});var Ya=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Tl(e,r){r(e);var n=0;function a(){n=n===1?0:(Ya(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Ya(a),n=2)}}$(function(e,r){return o(_i,bi,zr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(_i,bi,zr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(_i,bi,zr(function(){history.replaceState({},"",r),e()}))});var us={addEventListener:function(){},removeEventListener:function(){}},$s=typeof window<"u"?window:us;w(function(e,r,n){return _l(zr(function(a){function t(i){ri(n(i))}return e.addEventListener(r,t,ii&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Xe(e,r);return ar(n)?N(n.a):G});function zl(e,r){return zr(function(n){Ya(function(){var a=document.getElementById(e);n(a?an(r(a)):_f(Td(e)))})})}function vs(e){return zr(function(r){Ya(function(){r(an(e()))})})}$(function(e,r){return zl(r,function(n){return n[e](),$a})});$(function(e,r){return vs(function(){return $s.scroll(e,r),$a})});w(function(e,r,n){return zl(e,function(a){return a.scrollLeft=r,a.scrollTop=n,$a})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var fs=$(function(e,r){var n="g";e.fH&&(n+="m"),e.eZ&&(n+="i");try{return N(new RegExp(r,n))}catch{return G}});$(function(e,r){return r.match(e)!==null});var ss=w(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var f=u[v];s[--v]=f?N(f):G}a.push(A(Lu,u[0],u.index,t,m(s))),l=r.lastIndex}return r.lastIndex=c,m(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?N(v):G}return n(A(Lu,c,arguments[arguments.length-2],t,m(u)))}return a.replace(r,i)});w(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,m(t)});var vc=0;function ea(e,r){for(;r.b;r=r.b)e(r.a)}function ui(e){for(var r=0;e.b;e=e.b)r++;return r}var ds=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ms=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),ps=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),gs=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),bs=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),hs=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),_s=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ys=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Cs=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),ws=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),ks=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Ss=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ls=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},As=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ml=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Dl=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},xs=function(e){e.gl.disable(e.gl.CULL_FACE)},Ps=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Ts=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},zs=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},fc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ms=[Ss,Ls,As,Ml,Dl,xs,Ps,Ts,zs];function sc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Ds(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function jl(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function js(e,r,n,a){for(var t=n.a.dv,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(d,_,b,C,S){var y;if(t===1)for(y=0;y<_;y++)d[b++]=_===1?C[S]:C[S][y];else i.forEach(function(x){for(y=0;y<_;y++)d[b++]=_===1?C[x][S]:C[x][S][y]})}var u=jl(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,f=new u.type(ui(n.b)*s);ea(function(d){l(f,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,f,e.STATIC_DRAW),g}function Fs(e,r){if(r.a.dF>0){var n=e.createBuffer(),a=Bs(r.c,r.a.dF);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dv*ui(r.b),indexBuffer:null,buffers:{}}}function Bs(e,r){var n=new Uint32Array(ui(e)*r),a=0,t;return ea(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function dc(e,r){return e+"#"+r}var Fl=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Ml(n),Dl(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=dc(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=vc++,v||(v=sc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=vc++,s||(s=sc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var f=Ds(a,v,s);l={glProgram:f,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Es(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var g=a.getProgramParameter(f,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var d=a.getActiveAttrib(f,u),_=a.getAttribLocation(f,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(_)}c=dc(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Vs(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Fs(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],_=l.activeAttributeLocations[u],b.buffers[d.name]===void 0&&(b.buffers[d.name]=js(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[d.name]);var C=jl(a,d.type);if(C.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,C.size,C.baseType,!1,0,0);else for(var S=C.size*4,y=S*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(_+x),a.vertexAttribPointer(_+x,C.size,C.baseType,!1,y,S*x)}for(n.toggle=!n.toggle,ea(_g(n),i.a),u=0;u<fc.length;u++){var B=n[fc[u]];B.toggle!==n.toggle&&B.enabled&&(Ms[u](n),B.enabled=!1,B.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.eg,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.eg,0,b.numIndices)}}return ea(t,e.g),r});function Es(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,_){var b=_.name,C=e.getUniformLocation(d,b);switch(_.type){case e.INT:return function(y){i[b]!==y&&(e.uniform1i(C,y),i[b]=y)};case e.FLOAT:return function(y){i[b]!==y&&(e.uniform1f(C,y),i[b]=y)};case e.FLOAT_VEC2:return function(y){i[b]!==y&&(e.uniform2f(C,y[0],y[1]),i[b]=y)};case e.FLOAT_VEC3:return function(y){i[b]!==y&&(e.uniform3f(C,y[0],y[1],y[2]),i[b]=y)};case e.FLOAT_VEC4:return function(y){i[b]!==y&&(e.uniform4f(C,y[0],y[1],y[2],y[3]),i[b]=y)};case e.FLOAT_MAT4:return function(y){i[b]!==y&&(e.uniformMatrix4fv(C,!1,new Float32Array(y)),i[b]=y)};case e.SAMPLER_2D:var S=c++;return function(y){e.activeTexture(e.TEXTURE0+S);var x=l.textures.get(y);x||(x=y.e4(e),l.textures.set(y,x)),e.bindTexture(e.TEXTURE_2D,x),i[b]!==y&&(e.uniform1i(C,S),i[b]=y)};case e.BOOL:return function(y){i[b]!==y&&(e.uniform1i(C,y),i[b]=y)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),f=0;f<s;f++){var g=e.getActiveUniform(t,f);v[a[g.name]||g.name]=u(t,g)}return v}function Vs(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Rs=w(function(e,r,n){return Rf(r,{g:n,f:{},h:e},Os,Js)}),Ws=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Ns=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Hs=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Gs=$(function(e,r){e.contextAttributes.antialias=!0}),Is=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Us=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Os(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ea(function(t){return o(hg,r,t)},e.h);var n=xr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),ds(function(){return o(Fl,e,n)})):(n=xr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Js(e,r){return r.f=e.f,Fl(r)}var Ys=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/qs(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function qs(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var $i=new Float64Array(3),mc=new Float64Array(3),pc=new Float64Array(3),Zs=w(function(e,r,n){return new Float64Array([e,r,n])}),Xs=function(e){return e[0]},Qs=function(e){return e[1]},Ks=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var ed=function(e){return new Float64Array([e.gl,e.gp,e.dk])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Bl(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Bl);function El(e,r,n){return n===void 0&&(n=new Float64Array(3)),qa(Bl(e,r,n),n)}$(El);function Vl(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function qa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Vl(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var rd=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),In=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(In);function bo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(bo);$(function(e,r){var n,a=$i,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=In(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(In(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(In(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(In(r,a)+e[14])/n,t});var nd=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var ad=function(e){return{gl:e[0],gp:e[1],dk:e[2],eN:e[3]}},td=function(e){return new Float64Array([e.gl,e.gp,e.dk,e.eN])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/od(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function od(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var id=new Float64Array(16),cd=new Float64Array(16),ld=function(e){var r=new Float64Array(16);return r[0]=e.dU,r[1]=e.dY,r[2]=e.d0,r[3]=e.d4,r[4]=e.dV,r[5]=e.dZ,r[6]=e.d1,r[7]=e.d5,r[8]=e.dW,r[9]=e.d_,r[10]=e.d2,r[11]=e.d6,r[12]=e.dX,r[13]=e.d$,r[14]=e.d3,r[15]=e.d7,r},ud=function(e){return{dU:e[0],dY:e[1],d0:e[2],d4:e[3],dV:e[4],dZ:e[5],d1:e[6],d5:e[7],dW:e[8],d_:e[9],d2:e[10],d6:e[11],dX:e[12],d$:e[13],d3:e[14],d7:e[15]}};function Rl(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Je(Rl);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Rl(c,l,i,t,n,a)});function Wl(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Je(Wl);E(function(e,r,n,a){return Wl(e,r,n,a,-1,1)});function Nl(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],f=e[8],g=e[9],d=e[10],_=e[11],b=e[12],C=e[13],S=e[14],y=e[15],x=r[0],B=r[1],Y=r[2],I=r[3],H=r[4],J=r[5],q=r[6],W=r[7],ne=r[8],ee=r[9],se=r[10],me=r[11],ve=r[12],ye=r[13],Ne=r[14],Ee=r[15];return n[0]=a*x+l*B+f*Y+b*I,n[1]=t*x+u*B+g*Y+C*I,n[2]=i*x+v*B+d*Y+S*I,n[3]=c*x+s*B+_*Y+y*I,n[4]=a*H+l*J+f*q+b*W,n[5]=t*H+u*J+g*q+C*W,n[6]=i*H+v*J+d*q+S*W,n[7]=c*H+s*J+_*q+y*W,n[8]=a*ne+l*ee+f*se+b*me,n[9]=t*ne+u*ee+g*se+C*me,n[10]=i*ne+v*ee+d*se+S*me,n[11]=c*ne+s*ee+_*se+y*me,n[12]=a*ve+l*ye+f*Ne+b*Ee,n[13]=t*ve+u*ye+g*Ne+C*Ee,n[14]=i*ve+v*ye+d*Ne+S*Ee,n[15]=c*ve+s*ye+_*Ne+y*Ee,n}$(Nl);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],f=e[10],g=e[12],d=e[13],_=e[14],b=r[0],C=r[1],S=r[2],y=r[4],x=r[5],B=r[6],Y=r[8],I=r[9],H=r[10],J=r[12],q=r[13],W=r[14];return n[0]=a*b+c*C+v*S,n[1]=t*b+l*C+s*S,n[2]=i*b+u*C+f*S,n[3]=0,n[4]=a*y+c*x+v*B,n[5]=t*y+l*x+s*B,n[6]=i*y+u*x+f*B,n[7]=0,n[8]=a*Y+c*I+v*H,n[9]=t*Y+l*I+s*H,n[10]=i*Y+u*I+f*H,n[11]=0,n[12]=a*J+c*q+v*W+g,n[13]=t*J+l*q+s*W+d,n[14]=i*J+u*q+f*W+_,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=qa(r,$i);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});w(function(e,r,n){var a=new Float64Array(16),t=1/Vl(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),f=i*s,g=c*s,d=l*s,_=i*c*v,b=i*l*v,C=c*l*v,S=i*i*v+u,y=_+d,x=b-g,B=_-d,Y=c*c*v+u,I=C+f,H=b+g,J=C-f,q=l*l*v+u,W=n[0],ne=n[1],ee=n[2],se=n[3],me=n[4],ve=n[5],ye=n[6],Ne=n[7],Ee=n[8],Dr=n[9],jr=n[10],Et=n[11],ov=n[12],iv=n[13],cv=n[14],lv=n[15];return a[0]=W*S+me*y+Ee*x,a[1]=ne*S+ve*y+Dr*x,a[2]=ee*S+ye*y+jr*x,a[3]=se*S+Ne*y+Et*x,a[4]=W*B+me*Y+Ee*I,a[5]=ne*B+ve*Y+Dr*I,a[6]=ee*B+ye*Y+jr*I,a[7]=se*B+Ne*Y+Et*I,a[8]=W*H+me*J+Ee*q,a[9]=ne*H+ve*J+Dr*q,a[10]=ee*H+ye*J+jr*q,a[11]=se*H+Ne*J+Et*q,a[12]=ov,a[13]=iv,a[14]=cv,a[15]=lv,a});function $d(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}w($d);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function vd(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}w(vd);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],f=a[6],g=a[7],d=a[8],_=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=f,t[7]=g,t[8]=d,t[9]=_,t[10]=b,t[11]=C,t[12]=i*e+v*r+d*n+a[12],t[13]=c*e+s*r+_*n+a[13],t[14]=l*e+f*r+b*n+a[14],t[15]=u*e+g*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],f=r[5],g=r[6],d=r[7],_=r[8],b=r[9],C=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=f,n[6]=g,n[7]=d,n[8]=_,n[9]=b,n[10]=C,n[11]=S,n[12]=c*a+s*t+_*i+r[12],n[13]=l*a+f*t+b*i+r[13],n[14]=u*a+g*t+C*i+r[14],n[15]=v*a+d*t+S*i+r[15],n});w(function(e,r,n){var a=El(e,r,$i),t=qa(bo(n,a,mc),mc),i=qa(bo(a,t,pc),pc),c=id,l=cd;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Nl(c,l)});w(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var z=hv,Ca=mv,Hl=w(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Ca,e,l,v)}else{var u=c.a;return p(Ca,i,l,u)}});return p(Ca,i,p(Ca,e,r,t),a)}),bt=w(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(bt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),gc=function(e){return p(bt,w(function(r,n,a){return o(z,h(r,n),a)}),k,e)},fd=function(e){return p(bt,w(function(r,n,a){return o(z,r,a)}),k,e)},sd=function(e){var r=e;return fd(r)},Gl=1,dd=2,Il=0,je=function(e){return{$:1,a:e}},vi=$(function(e,r){return{$:3,a:e,b:r}}),bc=$(function(e,r){return{$:0,a:e,b:r}}),Ul=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},md=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},G={$:1},pd=Uv,Ol=mf,Pe=bl,Qr=$(function(e,r){return o(Hv,e,pt(r))}),fi=$(function(e,r){return m(o(Nv,e,r))}),Jl=function(e){return o(Qr,`
    `,o(fi,`
`,e))},Cr=w(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),br=function(e){return p(Cr,$(function(r,n){return n+1}),0,e)},Yl=_v,gd=w(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(z,r,n);e=a,r=t,n=i;continue e}else return n}),Ln=$(function(e,r){return p(gd,e,r,k)}),va=$(function(e,r){return p(Yl,e,o(Ln,0,br(r)-1),r)}),fr=Qv,ql=function(e){var r=fr(e);return 97<=r&&r<=122},Zl=function(e){var r=fr(e);return r<=90&&65<=r},bd=function(e){return ql(e)||Zl(e)},hd=function(e){var r=fr(e);return r<=57&&48<=r},_d=function(e){return ql(e)||Zl(e)||hd(e)},be=function(e){return p(Cr,z,k,e)},zn=Ev,yd=$(function(e,r){return`

(`+(Pe(e+1)+(") "+Jl(Cd(r))))}),Cd=function(e){return o(wd,e,k)},wd=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=zn(n);if(b.$===1)return!1;var C=b.a,S=C.a,y=C.b;return bd(S)&&o(pd,_d,y)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(z,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Pe(i)+"]"),u=c,v=o(z,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var f=function(){return r.b?"The Json.Decode.oneOf at json"+o(Qr,"",be(r)):"Json.Decode.oneOf"}(),_=f+(" failed in the following "+(Pe(br(s))+" ways:"));return o(Qr,`

`,o(z,_,o(va,yd,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Qr,"",be(r)):"!"}();default:var g=e.a,d=e.b,_=function(){return r.b?"Problem with the value at json"+(o(Qr,"",be(r))+`:

    `):`Problem with the given value:

`}();return _+(Jl(o(Ol,4,d))+(`

`+g))}}),He=32,ho=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_o=$v,si=Tv,di=$(function(e,r){return ac(r)/ac(e)}),Un=xv,ra=si(o(di,2,He)),Xl=A(ho,0,ra,_o,_o),Ql=fv,Kl=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var ht=gv,eu=zv,yo=vv,Ge=$(function(e,r){return O(e,r)>0?e:r}),kd=function(e){return{$:0,a:e}},mi=sv,Sd=$(function(e,r){e:for(;;){var n=o(mi,He,e),a=n.a,t=n.b,i=o(z,kd(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return be(i)}}),Co=function(e){var r=e.a;return r},Ld=$(function(e,r){e:for(;;){var n=si(r/He);if(n===1)return o(mi,He,e).a;var a=o(Sd,e,k),t=n;e=a,r=t;continue e}}),ru=$(function(e,r){if(r.n){var n=r.n*He,a=eu(o(di,He,n-1)),t=e?be(r.B):r.B,i=o(Ld,t,r.n);return A(ho,yo(r.q)+n,o(Ge,5,a*ra),i,r.q)}else return A(ho,yo(r.q),ra,_o,r.q)}),Ad=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ru,!1,{B:a,n:n/He|0,q:t});var i=Kl(p(Ql,He,r,e)),c=e,l=r-He,u=n,v=o(z,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),xd=$(function(e,r){if(e<=0)return Xl;var n=e%He,a=p(Ql,n,e-n,r),t=e-n-He;return L(Ad,r,t,e,k,a)}),ar=function(e){return!e.$},M=uf,ae=af,P=lf,pe=tf,Pd=function(e){return{$:2,a:e}},pi=$(function(e,r){return e}),nu=$(function(e,r){return{W:r.W,e2:e,cj:r.cj,fa:r.fa,dL:r.dL,cV:r.cV,br:r.br,gh:r.gh}}),Za=$f,Mn=vf,ce=ef,gi=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Ve=function(e){return e},Td=Ve,hc=Je(function(e,r,n,a,t,i){return{dB:i,dD:r,em:a,eq:n,eu:e,ev:t}}),zd=Ov,Kr=Vv,hn=Gv,fa=$(function(e,r){return e<1?r:p(hn,e,Kr(r),r)}),_t=Yv,yt=function(e){return e===""},Ct=$(function(e,r){return e<1?"":p(hn,0,e,r)}),au=qv,_c=he(function(e,r,n,a,t){if(yt(t)||o(zd,"@",t))return G;var i=o(_t,":",t);if(i.b){if(i.b.b)return G;var c=i.a,l=au(o(fa,c+1,t));if(l.$===1)return G;var u=l;return N(fe(hc,e,o(Ct,c,t),u,r,n,a))}else return N(fe(hc,e,t,G,r,n,a))}),yc=E(function(e,r,n,a){if(yt(a))return G;var t=o(_t,"/",a);if(t.b){var i=t.a;return L(_c,e,o(fa,i,a),r,n,o(Ct,i,a))}else return L(_c,e,"/",r,n,a)}),Cc=w(function(e,r,n){if(yt(n))return G;var a=o(_t,"?",n);if(a.b){var t=a.a;return A(yc,e,N(o(fa,t+1,n)),r,o(Ct,t,n))}else return A(yc,e,G,r,n)});$(function(e,r){if(yt(r))return G;var n=o(_t,"#",r);if(n.b){var a=n.a;return p(Cc,e,N(o(fa,a+1,r)),o(Ct,a,r))}else return p(Cc,e,G,r)});var Md=Jv,bi=function(e){},sa=an,Dd=sa(0),tu=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,f=v.b,g=n>500?p(Cr,e,r,be(f)):A(tu,e,r,n+1,f);return o(e,t,o(e,c,o(e,u,o(e,s,g))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),Mr=w(function(e,r,n){return A(tu,e,r,0,n)}),re=$(function(e,r){return p(Mr,$(function(n,a){return o(z,e(n),a)}),k,r)}),Xa=mo,hi=$(function(e,r){return o(Xa,function(n){return sa(e(n))},r)}),jd=w(function(e,r,n){return o(Xa,function(a){return o(Xa,function(t){return sa(o(e,a,t))},n)},r)}),Fd=function(e){return p(Mr,jd(z),sa(k),e)},Bd=xf,Ed=$(function(e,r){var n=r;return _l(o(Xa,Bd(e),n))}),Vd=w(function(e,r,n){return o(hi,function(a){return 0},Fd(o(re,Ed(e),r)))}),Rd=w(function(e,r,n){return sa(0)}),Wd=$(function(e,r){var n=r;return o(hi,e,n)});vr.Task=Lf(Dd,Vd,Rd,Wd);var Nd=Cl("Task"),_i=$(function(e,r){return Nd(o(hi,e,r))}),Hd=ls,Gd=Fv,Qa={$:1},ou=function(e){return{$:2,a:e}},wt={$:0},er=$(function(e,r){return{$:0,a:e,b:r}}),K=w(function(e,r,n){return r(e(n))}),Dn=function(e){var r=e.b.D;return r.a},Id=function(e){var r=e.a,n=e.b.Y,a=e.b.D,t=e.b.ag;if(t.b){var i=t.a,c=t.b;return N(o(er,r,{D:i,ag:c,Y:o(z,a,n)}))}else return G},iu=function(e){var r=e.b;return o(er,wt,r)},ge=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ud=w(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.cV.cl?iu(n):n;case 2:var i=a.a.c7;return(O(i+r.fa,Dn(n).W)>0?o(K,Id,ge(o(er,Qa,t))):Ve)(o(er,ou({c7:i+r.fa}),t));default:var c=t.D,l=c.a,u=c.b,v=o(nu,l.e2,R(r,{W:l.W+r.fa})),s=o(e,v,u);return o(er,wt,{D:h(v,s),ag:k,Y:o(z,t.D,t.Y)})}}),yi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Od=w(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(z,a,n);e=i,r=c,n=l;continue e}else return n}}),Jd=$(function(e,r){return be(p(Od,e,r,k))}),cu=w(function(e,r,n){if(r<=0)return k;{var a=h(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,y=t.a,i=t.b,c=i.a;return m([y,c]);case 3:if(a.b.b.b.b){var l=a.b,y=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return m([y,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var f=a.b,y=f.a,g=f.b,c=g.a,d=g.b,s=d.a,_=d.b,b=_.a,C=_.b;return e>1e3?o(z,y,o(z,c,o(z,s,o(z,b,o(Jd,r-4,C))))):o(z,y,o(z,c,o(z,s,o(z,b,p(cu,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,y=S.a;return m([y])}}),lu=$(function(e,r){return p(cu,0,e,r)}),Yd=$(function(e,r){var n=r.b.Y,a=r.b.D,t=r.b.ag,i=ie(be(n),ie(m([a]),t)),c=o(lu,e,i),l=o(yi,e,i);if(l.b){var u=l.a,v=l.b;return o(er,Qa,{D:u,ag:v,Y:be(c)})}else{var s=be(c);if(s.b){var f=s.a,g=s.b;return o(er,Qa,{D:f,ag:k,Y:g})}else return r}}),qd=function(e){var r=e.b;return o(er,Qa,r)},Zd=function(e){var r=e.b;return o(er,ou({c7:Dn(e).W}),r)},Xd=$(function(e,r){switch(e.$){case 1:return qd(r);case 2:return iu(r);case 3:return Zd(r);default:var n=e.a;return o(Yd,n,r)}}),uu=$(function(e,r){var n=r.a,a=r.b;return h(e(n),a)}),Qd=$(function(e,r){return R(r,{aB:e(r.aB)})}),Kd=function(e){return{$:3,a:e}},$u=function(e){return{$:2,a:e}},vu=$(function(e,r){return{$:0,a:e,b:r}}),em=$(function(e,r){return{$:1,a:e,b:r}}),ke=$(function(e,r){if(r.$)return G;var n=r.a;return N(e(n))}),X=function(e){return e<0?-e:e},Ci=Zv,rm=w(function(e,r,n){return o(ge,0/0,Ci(o(e,r,n)))}),kt=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),nm=Wv,fu=function(e){return p(nm,z,k,e)},am=$(function(e,r){var n=o(kt,function(a){return a!=="0"&&a!=="."},fu(r));return ie(e&&n?"-":"",r)}),le=bl,wo=Bv,su=Kv,du=function(e){var r=e.a,n=e.b;if(r==="9"){var a=zn(n);if(a.$===1)return"01";var t=a.a;return o(wo,"0",du(t))}else{var i=fr(r);return i>=48&&i<57?o(wo,su(i+1),n):"0"}},ko=Pv,tm=jv,St=function(e){return o(wo,e,"")},mu=w(function(e,r,n){return e<=0?n:p(mu,e>>1,ie(r,r),e&1?ie(n,r):n)}),na=$(function(e,r){return p(mu,e,r,"")}),So=w(function(e,r,n){return ie(n,o(na,e-Kr(n),St(r)))}),Lo=Rv,pu=function(e){var r=o(fi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return h(n,t)}else{var n=r.a;return h(n,"0")}else return h("0","0")},om=function(e){var r=o(fi,"e",le(X(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(ge,0,au(o(Md,"+",t)?o(fa,1,t):t)),c=pu(n),l=c.a,u=c.b,v=ie(l,u),s=i<0?o(ge,"0",o(ke,function(f){var g=f.a,d=f.b;return g+("."+d)},o(ke,uu(St),zn(ie(o(na,X(i),"0"),v))))):p(So,i+1,"0",v);return ie(e<0?"-":"",s)}else{var n=r.a;return ie(e<0?"-":"",n)}else return""},im=w(function(e,r,n){if(ko(n)||tm(n))return le(n);var a=n<0,t=pu(om(X(n))),i=t.a,c=t.b,l=Kr(i)+r,u=ie(o(na,-l+1,"0"),p(So,l,"0",ie(i,c))),v=Kr(u),s=o(Ge,1,l),f=o(e,a,p(hn,s,v,u)),g=p(hn,0,s,u),d=f?Lo(o(ge,"1",o(ke,du,zn(Lo(g))))):g,_=Kr(d),b=d==="0"?d:r<=0?ie(d,o(na,X(r),"0")):O(r,Kr(c))<0?p(hn,0,_-r,d)+("."+p(hn,_-r,_,d)):ie(i+".",p(So,r,"0",c));return o(am,a,b)}),gu=im($(function(e,r){var n=zn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(fr(t))})),cm=rm(gu),lm=w(function(e,r,n){var a=o(di,10,X(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(cm,t,n)}),bu=bv,da=$(function(e,r){e:for(;;){if(r.$===-2)return G;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(bu,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return N(a);default:var l=e,u=i;e=l,r=u;continue e}}}),U=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),hr={$:-2},An=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,f=a.d,g=a.e;return L(U,0,r,n,L(U,1,v,s,f,g),L(U,1,i,c,l,u))}else return L(U,e,i,c,L(U,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,d=a.d;d.a;var _=d.b,b=d.c,C=d.d,S=d.e,g=a.e;return L(U,0,v,s,L(U,1,_,b,C,S),L(U,1,r,n,g,t))}else return L(U,e,r,n,a,t)}),Ao=w(function(e,r,n){if(n.$===-2)return L(U,0,e,r,hr,hr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(bu,e,t);switch(u){case 0:return L(An,a,t,i,p(Ao,e,r,c),l);case 1:return L(U,a,t,r,c,l);default:return L(An,a,t,i,c,p(Ao,e,r,l))}}),_n=w(function(e,r,n){var a=p(Ao,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return L(U,1,t,i,c,l)}else{var u=a;return u}}),um=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},hu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,f=v.c,g=v.d;g.a;var d=g.b,_=g.c,b=g.d,C=g.e,S=v.e;return L(U,0,d,_,L(U,1,n,a,L(U,0,i,c,l,u),b),L(U,1,s,f,C,S))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var i=y.b,c=y.c,l=y.d,u=y.e,x=e.e;x.a;var s=x.b,f=x.c,g=x.d,S=x.e;return L(U,1,n,a,L(U,0,i,c,l,u),L(U,0,s,f,g,S))}else return e},wc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,f=l.e,g=t.e,d=e.e;d.a;var _=d.b,b=d.c,C=d.d,S=d.e;return L(U,0,i,c,L(U,1,u,v,s,f),L(U,1,n,a,g,L(U,0,_,b,C,S)))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var i=y.b,c=y.c,x=y.d,g=y.e,B=e.e;B.a;var _=B.b,b=B.c,C=B.d,S=B.e;return L(U,1,n,a,L(U,0,i,c,x,g),L(U,0,_,b,C,S))}else return e},$m=dt(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return L(U,n,l,u,v,L(U,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var f=c.d;return f.a,wc(r)}else break e;else return c.a,c.d,wc(r);else break e;return r}}),Va=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,L(U,r,n,a,Va(t),l);var u=hu(e);if(u.$===-1){var v=u.a,s=u.b,f=u.c,g=u.d,d=u.e;return L(An,v,s,f,Va(g),d)}else return hr}else return L(U,r,n,a,Va(t),l)}else return hr},Zn=$(function(e,r){if(r.$===-2)return hr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,L(U,n,a,t,o(Zn,e,i),c);var u=hu(r);if(u.$===-1){var v=u.a,s=u.b,f=u.c,g=u.d,d=u.e;return L(An,v,s,f,o(Zn,e,g),d)}else return hr}else return L(U,n,a,t,o(Zn,e,i),c);else return o(vm,e,Ko($m,e,r,n,a,t,i,c))}),vm=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(te(e,a)){var l=um(c);if(l.$===-1){var u=l.b,v=l.c;return L(An,n,u,v,i,Va(c))}else return hr}else return L(An,n,a,t,i,o(Zn,e,c))}else return hr}),_u=$(function(e,r){var n=o(Zn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return L(U,1,a,t,i,c)}else{var l=n;return l}}),wa=w(function(e,r,n){var a=r(o(da,e,n));if(a.$)return o(_u,e,n);var t=a.a;return p(_n,e,t,n)}),fm=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(wa,r,ke(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(em,h(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(wa,r,ke(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(vu,h(i,c),p(lm,i,c,n))}));case 3:var r=e.a,n=e.b;return o(wa,r,ke(function(a){return a.$===3?Kd(n):a}));default:var r=e.a,n=e.b;return o(wa,r,ke(function(a){return a.$===2?$u(n):a}))}},sm=function(e){return Qd(fm(e))},dm=$(function(e,r){return o(re,sm(e),r)}),mm=$(function(e,r){return R(r,{e2:o(dm,e,r.e2)})}),pm=$(function(e,r){var n=r.a,a=r.b;return o(er,n,R(a,{D:o(uu,mm(e),a.D)}))}),gm=$(function(e,r){var n=r.a,a=r.b;return h(n,e(a))}),bm=w(function(e,r,n){var a=n.a,t=n.b,i=t.D;return o(er,a,R(t,{D:o(gm,o(e,i.a,r),i)}))}),hm=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return R(a,{aR:!a.aR});case 2:var t=n.a;return R(a,{I:p(Ud,e,t,a.I)});case 3:var i=n.a;return R(a,{I:o(pm,i,a.I)});case 4:var c=n.a;return R(a,{I:p(bm,r,c,a.I)});default:var l=n.a;return R(a,{I:o(Xd,l,a.I)})}}),_m=$(function(e,r){return o(er,wt,{D:h(e,r(e)),ag:k,Y:k})}),ym=Pf,kc=ym(k),nn=cf,Vr=of,Cm=jf("tick",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return ce({W:c,cj:i,fa:t,dL:a,cV:n,br:r,gh:e})},o(P,"clock",pe))},o(P,"devicePixelRatio",pe))},o(P,"dt",pe))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(f){return ce({eQ:f,e3:s,cl:v,e9:u,dM:l,fU:c,ey:i,f0:t,dd:a})},o(P,"alt",ae))},o(P,"control",ae))},o(P,"down",ae))},o(P,"downs",nn(Vr)))},o(P,"left",ae))},o(P,"pressedKeys",nn(Vr)))},o(P,"right",ae))},o(P,"shift",ae))},o(P,"up",ae))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return ce({cl:v,dI:u,fE:l,fY:c,fZ:i,dd:t,gl:a,gp:n})},o(P,"down",ae))},o(P,"isDown",ae))},o(P,"move",ae))},o(P,"rightDown",ae))},o(P,"rightUp",ae))},o(P,"up",ae))},o(P,"x",pe))},o(P,"y",pe))))},o(P,"screen",o(M,function(r){return o(M,function(n){return ce({fo:n,gj:r})},o(P,"height",pe))},o(P,"width",pe))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return ce({e5:r,e6:e})},o(P,"deltaX",pe))},o(P,"deltaY",pe))))),wm=function(e){return{$:4,a:e}},km={$:0},Lt=ei,We=$(function(e,r){return o(Sl,e,Lt(r))}),T=We("className"),Sc=function(e){var r=e.b;return r},Sm=function(e){var r=e.b.D;return r.b},D=nr("div"),Ka=We("id"),Lm=Wf,aa=Lm,Am=Nf,Q=Am,xm={$:1},Pm=function(e){return{$:3,a:e}},Tm=function(e){return{$:5,a:e}},Lc=nr("a"),Rr=nr("button"),Ac=function(e){return o(We,"href",If(e))},zm=yr("clip-rule"),Le=yr("d"),xo=yr("fill"),yu=wl("http://www.w3.org/2000/svg"),Po=yu("svg"),To=yr("viewBox"),Mm=o(Hf,"http://www.w3.org/XML/1998/namespace","xml:space"),Ye=Po(m([To("0 0 24 24"),xo("currentColor"),o(Q,"width","100%"),o(Q,"height","100%"),Mm("http://www.w3.org/2000/svg")])),Dm=yr("fill-rule"),Ae=yu("path"),or={dr:Ye(m([o(Ae,m([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),k)])),fi:Ye(m([o(Ae,m([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),k)])),fn:Ye(m([o(Ae,m([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),k)])),fF:Ye(m([o(Ae,m([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),k),o(Ae,m([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),k)])),fG:Ye(m([o(Ae,m([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),k),o(Ae,m([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),k)])),fR:Ye(m([o(Ae,m([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),k)])),fS:Ye(m([o(Ae,m([Le("M7 5V19L18 12L7 5Z")]),k)])),fT:Ye(m([o(Ae,m([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),k)])),cV:Ye(m([o(Ae,m([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),k)])),gc:Ye(m([o(Ae,m([Dm("evenodd"),zm("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),k)])),gd:Ye(m([o(Ae,m([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),k)])),gt:Ye(m([o(Ae,m([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),k)]))},jm=function(e){return{$:0,a:e}},Cu=kl,ma=$(function(e,r){return o(Cu,e,jm(r))}),$r=function(e){return o(ma,"click",ce(e))},xc=We("target"),On=We("title"),zo=$(function(e,r){if(r.$===-2)return hr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return L(U,n,a,o(e,a,t),o(zo,e,i),o(zo,e,c))}),Fm=po,oe=Fm,Bm=function(e){return p(bt,w(function(r,n,a){return o(z,n,a)}),k,e)},Em=$(function(e,r){return{$:3,a:e,b:r}}),Vm=$(function(e,r){return{$:2,a:e,b:r}}),Rm=$(function(e,r){return{$:0,a:e,b:r}}),Wm=$(function(e,r){return{$:1,a:e,b:r}}),Yr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),wi=A(Yr,0/255,0/255,0/255,1),Nm=ei,wu=$(function(e,r){return o(Sl,e,Nm(r))}),Hm=wu("checked"),Oe=Mv,Gm=w(function(e,r,n){return ie(o(na,e-Kr(n),St(r)),n)}),ta=Cv,ku=function(e){var r=function(n){return n<10?Pe(n):St(su(87+n))};return e<16?r(e):ie(ku(e/16|0),r(o(ta,16,e)))},Im=o(K,ku,o(Gm,2,"0")),Su=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aN:t,cf:a,cm:n,cY:r}},Um=function(e){var r=Su(e),n=r.cY,a=r.cm,t=r.cf;return o(Qr,"",o(z,"#",o(re,o(K,Oe,Im),m([n*255,a*255,t*255]))))},Mo=We("htmlFor"),Om=$(function(e,r){if(r.$)return G;var n=r.a;return e(n)}),et=$(function(e,r){if(r.$){var a=r.a;return je(a)}else{var n=r.a;return e(n)}}),Jm=w(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(z,t,n)}),pa=$(function(e,r){return p(Mr,Jm(e),k,r)}),Lu=E(function(e,r,n,a){return{ft:r,fC:e,fL:n,f4:a}}),Ym=ss,qm=Xv,Zm=$(function(e,r){if(r.$)return je(e);var n=r.a;return $e(n)}),Xm=fs,Qm=function(e){return o(Xm,{eZ:!1,fH:!1},e)},jn=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return G},Km=$(function(e,r){if(r.$){var a=r.a;return je(a)}else{var n=r.a;return $e(e(n))}}),ep=function(e){return{$:2,a:e}},rp=function(e){return{$:0,a:e}},np=function(e){return{$:1,a:e}},Wt=$(function(e,r){return fr(r)-fr(e)}),Nt=w(function(e,r,n){var a=fr(n);return O(fr(e),a)<1&&O(a,fr(r))<1}),ap=$(function(e,r){var n=function(t){return O(t,e)<0?$e(t):je(np(r))},a=p(Nt,"0","9",r)?$e(o(Wt,"0",r)):p(Nt,"a","z",r)?$e(10+o(Wt,"a",r)):p(Nt,"A","Z",r)?$e(10+o(Wt,"A",r)):je(rp(r));return o(et,n,a)}),Au=$(function(e,r){var n=zn(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(et,function(c){return o(et,function(l){return $e(c+l*e)},o(Au,e,i))},o(ap,e,t))}),tp=$(function(e,r){return 2<=e&&e<=36?o(Au,e,Lo(r)):je(ep(e))}),op=tp(16),ip=w(function(e,r,n){return A(Yr,e,r,n,1)}),cp=E(function(e,r,n,a){return A(Yr,e,r,n,a)}),Wr=yv,lp=$(function(e,r){var n=o(Wr,10,e);return Oe(r*n)/n}),up=Iv,$p=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=fu(n);if(a.b&&!a.b.b){var t=a.a;return qm(m([t,t]))}else return n};return o(K,up,o(K,function(n){return o(ke,function(a){return p(Ym,1,a,n)},Qm(e))},o(K,Om(jn),o(K,ke(function(n){return n.f4}),o(K,ke(pa(Ve)),o(K,Zm("Parsing hex regex failed"),et(function(n){var a=o(re,o(K,r,o(K,op,Km(Un))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(A(cp,t/255,c/255,u/255,o(lp,2,s/255)))}else break e;else{var t=a.a.a,f=a.b,c=f.a.a,g=f.b,u=g.a.a;return $e(p(ip,t/255,c/255,u/255))}else break e;return je("Parsing ints from hex failed")})))))))}(),oa=nr("input"),Do=nr("label"),jo=We("name"),xu=$(function(e,r){return p(Mr,P,r,e)}),vp=o(xu,m(["target","checked"]),ae),fp=function(e){return o(ma,"change",o(Za,e,vp))},sp=function(e){return h(e,!0)},dp=function(e){return{$:1,a:e}},mp=$(function(e,r){return o(Cu,e,dp(r))}),pp=o(xu,m(["target","value"]),Vr),ga=function(e){return o(mp,"input",o(Za,sp,o(Za,e,pp)))},Pu=We("max"),Tu=We("min"),zu=function(e){return o(We,"step",e)},rt=We("type"),ba=We("value"),Pc=function(e){var r=e.co,n=e.de,a=e.cE,t=e.cA,i=e.c5,c=e.cJ;return o(D,k,m([o(Do,m([Mo(r)]),m([o(D,m([T("relative w-full")]),m([o(D,m([T("inline-block")]),m([oe(r)])),o(D,m([T("inline-block float-right")]),m([oe(le(n))]))]))])),o(oa,m([rt("range"),o(Q,"width","100%"),Ka(r),jo(r),Tu(le(a)),Pu(le(t)),ba(le(n)),zu(le(i)),ga(o(K,Ci,o(K,ge(42),c)))]),k)]))},Mu=$(function(e,r){if(r.$)return e;var n=r.a;return n}),gp=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(D,m([T("h-12 py-4")]),m([o(Do,m([T("block"),Mo(e)]),m([o(oa,m([T("relative bottom-[1px] align-middle mr-2"),rt("checkbox"),Ka(e),jo(e),fp(Em(e)),Hm(c)]),k),oe(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Pc({co:e,cA:i,cE:t,cJ:Rm(e),c5:.01*(i-t),de:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Pc({co:e,cA:i,cE:t,cJ:o(K,Oe,Wm(e)),c5:1,de:c});default:var c=r.a;return o(D,k,m([o(D,m([o(Q,"margin-bottom","6px")]),m([o(Do,m([Mo(e)]),m([oe(e)]))])),o(oa,m([rt("color"),o(Q,"width","100%"),o(Q,"height","26px"),o(Q,"padding","0px"),Ka(e),jo(e),ga(function(l){return o(Vm,e,o(Mu,wi,$p(l)))}),ba(Um(c))]),k)]))}}),bp=function(e){return o(D,m([T("p-4 border-y-[0.5px] border-white20")]),m([o(D,m([T("text-lg pb-2")]),m([oe(e.fI)])),o(D,m([T("pl-2 pr-2")]),Bm(o(zo,gp,e.aB)))]))},hp=function(e){return o(D,m([T("text-xs text-white60")]),o(re,bp,e))},_p=function(e){return o(D,m([T("absolute left-[104px] bottom-2 text-sm text-white40")]),m([oe("clock: "+o(gu,3,Dn(e).W))]))},yp=function(e){e.a;var r=e.b.Y;return o(ke,function(n){return Oe(60/(Dn(e).W-n))},o(ke,o(K,Co,function(n){return n.W}),jn(o(yi,59,r))))},Cp=function(e){return o(D,m([T("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=yp(e);if(r.$===1)return m([oe("... Fps")]);var n=r.a;return m([oe(Pe(n)+" Fps")])}())},wp=function(e){return{$:0,a:e}},kp=function(e){var r=e.b.Y;return br(r)},Sp=function(e){var r=e.b.Y;e.b.D;var n=e.b.ag;return br(r)+1+br(n)},Lp=function(e){return o(oa,m([T("absolute w-full"),rt("range"),Tu(Pe(0)),Pu(Pe(Sp(e)-1)),ba(Pe(kp(e))),zu(Pe(1)),ga(o(K,Ci,o(K,ge(42),o(K,Oe,wp))))]),k)},Tc={$:1},zc={$:3},Mc={$:2},nt=function(e){return!e.b},Du=wu("disabled"),Ht=w(function(e,r,n){return o(Rr,m([T("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),T(n),Du(e),$r(r)]),m([oe("REC")]))}),Gt=w(function(e,r,n){return o(Rr,m([T("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Du(e),$r(n)]),m([o(D,m([T("w-4 h-6 text-white60 hover:text-white80")]),m([r]))]))}),Ap=function(e){var r=e.a,n=e.b.ag;return o(D,m([T("py-1")]),m([function(){switch(r.$){case 0:return p(Ht,!1,Tc,"text-red-500 font-bold");case 1:return p(Ht,!1,Mc,"text-white60 hover:text-white80 font-bold");default:return p(Ht,!0,Mc,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Gt,nt(n),or.fS,zc);case 1:return p(Gt,nt(n),or.fS,zc);default:return p(Gt,!1,or.fR,Tc)}}()]))},xp=function(e){return o(D,m([T("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),m([Lp(e),Ap(e),Cp(e),_p(e)]))},Pp=function(e){var r=e.a;return te(r,wt)},Tp=$(function(e,r){var n=Pp(r.I)?o(D,k,k):o(D,m([T("absolute pointer-events-none w-8 h-8"),o(Q,"left",le(e.cV.gl+.5*e.br.gj)+"px"),o(Q,"top",le(-e.cV.gp+.5*e.br.fo)+"px")]),m([o(D,m([T(e.cV.dI?"text-black80":"text-black40")]),m([or.cV]))]));return o(D,k,m([n]))}),zp=$(function(e,r){var n=o(Rr,m([T(r.aR?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),$r(xm),On("Distraction Free Mode")]),m([or.gt])),a=40,t=260,i=o(D,m([T("absolute w-8 bottom-12")]),m([o(Lc,m([T("text-twitterBlue40 hover:text-twitterBlue"),Ac("https://twitter.com/AzizErkalSelman"),xc("_blank")]),m([or.gd]))])),c=80,l=o(D,m([T("absolute w-8 bottom-2")]),m([o(Lc,m([T("text-githubCat40 hover:text-githubCat"),Ac("https://github.com/erkal/elm-3d-playground-exploration"),xc("_blank")]),m([or.fi]))])),u=e.br.gj>640?F(e.br.fo,a+t,e.br.gj-(a+t)):F(e.br.fo-c,a,e.br.gj-a),v=u.a,s=u.b,f=u.c;return r.aR?o(D,m([T("fixed w-10 h-10 p-1")]),m([n])):o(D,k,m([o(D,m([T("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(Q,"width",le(a)+"px")]),m([n,i,l])),o(D,m([T("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(Q,"width",le(t)+"px"),o(Q,"height",le(v)+"px")]),m([o(aa,Pm,hp(Dn(r.I).e2))])),o(D,m([T("absolute bottom-0"),o(Q,"left",le(s)+"px"),o(Q,"height",le(c)+"px"),o(Q,"width",le(f)+"px")]),m([o(aa,Tm,xp(r.I))])),o(Tp,e,r)]))}),Mp=w(function(e,r,n){var a=Sm(n.I),t=Dn(n.I);return o(D,m([T("bg-black40"),T("select-none"),T("antialiased"),T("font-mono"),o(Q,"width",le(t.br.gj)+"px"),o(Q,"height",le(t.br.fo)+"px")]),m([o(D,m([T("fixed")]),m([o(aa,pi(km),o(e,t,a))])),o(D,m([Ka("gui")]),m([o(zp,t,n),o(aa,wm,o(r,t,a))]))]))}),Dp=Je(function(e,r,n,a,t,i){var c=$(function(u,v){return h(A(hm,r,i,u,v),kc)}),l=function(u){var v=o(nu,n,u.fv);return h({aR:u.fv.br.gj<500,I:o(_m,v,a)},kc)};return Hd({fu:l,f5:pi(Cm(Pd)),ge:c,gg:o(Mp,e,t)})}),at={$:0},ju=he(function(e,r,n,a,t){return{$7:t,dP:n,bV:a,cU:e,eo:r}}),ia=$(function(e,r){return{$:0,a:e,b:r}}),Dc=nf,Fo=p(Mn,$(function(e,r){return h(e,r)}),o(P,"A1",Dc),o(P,"A2",Dc)),ir=$(function(e,r){return{$:0,a:e,b:r}}),ki=rf,jp=function(){var e=function(r){switch(r){case"X":return ce(0);case"Y":return ce(1);case"Z":return ce(2);default:var n=r;return ki("Unknown constructor for type Axis: "+n)}};return o(M,e,Vr)}(),Fp=function(){var e=function(r){switch(r){case"Positive":return ce(0);case"Negative":return ce(1);default:var n=r;return ki("Unknown constructor for type Sign: "+n)}};return o(M,e,Vr)}(),Bp=p(Mn,ir,o(P,"A1",jp),o(P,"A2",Fp)),jc=p(Mn,ia,o(P,"A1",Fo),o(P,"A2",Bp)),sr=$(function(e,r){return{fy:e,bo:r}}),It=p(Mn,sr,o(P,"last",Fo),o(P,"rest",nn(Fo))),Ep=ff,Vp=fe(Ep,ju,o(P,"playerCube",jc),o(P,"playerPath",It),o(P,"levelEditingCube",jc),o(P,"levelEditingPath",It),o(P,"calculatedSolutions",nn(It))),Fc=ei,Fn=function(e){return p(Cr,$(function(r,n){var a=r.a,t=r.b;return p(bf,a,t,n)}),gf(),e)},Bo=function(e){var r=e.a,n=e.b;return Fn(m([h("A1",Fc(r)),h("A2",Fc(n))]))},Rp=function(e){return Lt(function(){switch(e){case 0:return"X";case 1:return"Y";default:return"Z"}}())},Wp=function(e){return Lt(function(){return e?"Negative":"Positive"}())},Np=function(e){var r=e.a,n=e.b;return Fn(m([h("A1",Rp(r)),h("A2",Wp(n))]))},Bc=function(e){var r=e.a,n=e.b;return Fn(m([h("A1",Bo(r)),h("A2",Np(n))]))},Si=$(function(e,r){return p(Cr,hf(e),pf(),r)}),Ut=function(e){return Fn(m([h("last",Bo(e.fy)),h("rest",o(Si,Bo,e.bo))]))},Hp=function(e){return Fn(m([h("playerCube",Bc(e.cU)),h("playerPath",Ut(e.eo)),h("levelEditingCube",Bc(e.dP)),h("levelEditingPath",Ut(e.bV)),h("calculatedSolutions",o(Si,Ut,e.$7))]))},Gp=`
[
  {
    "name": "Gardner's level",
    "page": {
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
    }
  },
  {
    "name": "easy-0",
    "page": {
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
          "A1": -4,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -4,
          "A2": 3
        },
        "rest": []
      },
      "calculatedSolutions": []
    }
  },
  {
    "name": "easy-1",
    "page": {
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
            "A1": -2,
            "A2": 0
          },
          {
            "A1": -3,
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
    }
  },
  {
    "name": "easy-2",
    "page": {
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
          "A1": -2,
          "A2": 2
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -2,
          "A2": 2
        },
        "rest": [
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
            "A2": 3
          },
          {
            "A1": -5,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 5
          },
          {
            "A1": -2,
            "A2": 5
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
    }
  },
  {
    "name": "middle-1",
    "page": {
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
          "A1": -5,
          "A2": 3
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -5,
          "A2": 3
        },
        "rest": [
          {
            "A1": -5,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 4
          },
          {
            "A1": -4,
            "A2": 5
          },
          {
            "A1": -5,
            "A2": 5
          },
          {
            "A1": -5,
            "A2": 6
          },
          {
            "A1": -4,
            "A2": 6
          },
          {
            "A1": -4,
            "A2": 7
          },
          {
            "A1": -3,
            "A2": 7
          },
          {
            "A1": -2,
            "A2": 7
          },
          {
            "A1": -1,
            "A2": 7
          },
          {
            "A1": -1,
            "A2": 6
          },
          {
            "A1": -1,
            "A2": 5
          },
          {
            "A1": -2,
            "A2": 5
          },
          {
            "A1": -2,
            "A2": 6
          },
          {
            "A1": -3,
            "A2": 6
          },
          {
            "A1": -3,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 4
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
    }
  },
  {
    "name": "middle-2",
    "page": {
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
          "A1": -4,
          "A2": 5
        },
        "A2": {
          "A1": "Z",
          "A2": "Positive"
        }
      },
      "levelEditingPath": {
        "last": {
          "A1": -4,
          "A2": 5
        },
        "rest": [
          {
            "A1": -4,
            "A2": 4
          },
          {
            "A1": -5,
            "A2": 4
          },
          {
            "A1": -5,
            "A2": 3
          },
          {
            "A1": -5,
            "A2": 2
          },
          {
            "A1": -6,
            "A2": 2
          },
          {
            "A1": -7,
            "A2": 2
          },
          {
            "A1": -7,
            "A2": 3
          },
          {
            "A1": -6,
            "A2": 3
          },
          {
            "A1": -6,
            "A2": 4
          },
          {
            "A1": -6,
            "A2": 5
          },
          {
            "A1": -7,
            "A2": 5
          },
          {
            "A1": -7,
            "A2": 4
          },
          {
            "A1": -8,
            "A2": 4
          },
          {
            "A1": -8,
            "A2": 5
          },
          {
            "A1": -8,
            "A2": 6
          },
          {
            "A1": -7,
            "A2": 6
          },
          {
            "A1": -6,
            "A2": 6
          },
          {
            "A1": -5,
            "A2": 6
          },
          {
            "A1": -4,
            "A2": 6
          },
          {
            "A1": -3,
            "A2": 6
          },
          {
            "A1": -2,
            "A2": 6
          },
          {
            "A1": -1,
            "A2": 6
          },
          {
            "A1": -1,
            "A2": 5
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
            "A1": -2,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 5
          },
          {
            "A1": -3,
            "A2": 4
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
    }
  }
]
`,Ip=$(function(e,r){return{fI:e,fQ:r}}),Up=sf,Fu=$(function(e,r){return{r,m:k,D:e}}),Bu=$(function(e,r){var n=r;return R(n,{V:function(){var a=p(Mn,Ip,o(P,"name",Vr),o(P,"page",n.ek));return o(Mu,n.V,o(Up,o(M,function(t){if(t.b){var i=t.a,c=t.b;return ce(o(Fu,i,c))}else return ki("List of pages is empty")},nn(a)),e))}()})}),Op={bS:!1,ei:G,c4:0},At={$:0},Jp=At,Yp=E(function(e,r,n,a){return{dw:e,ek:r,V:o(Fu,n,a),c8:"",b9:""}}),qp=L(ju,o(ia,h(-4,3),o(ir,2,0)),o(sr,h(-4,3),k),o(ia,h(3,3),o(ir,2,0)),o(sr,h(3,3),m([h(2,3),h(1,3),h(0,3),h(0,2),h(1,2),h(1,1),h(2,1),h(2,2),h(3,2),h(3,1),h(3,0),h(3,-1),h(3,-2),h(3,-3),h(3,-4),h(2,-4),h(2,-3),h(1,-3),h(1,-4),h(0,-4),h(0,-3),h(0,-2),h(1,-2),h(2,-2),h(2,-1),h(2,0),h(1,0),h(1,-1),h(0,-1),h(0,0),h(0,1),h(-1,1),h(-1,0),h(-1,-1),h(-2,-1),h(-2,0),h(-3,0),h(-3,-1),h(-3,-2),h(-2,-2),h(-1,-2),h(-1,-3),h(-1,-4),h(-2,-4),h(-2,-3),h(-3,-3),h(-3,-4),h(-4,-4),h(-4,-3),h(-4,-2),h(-4,-1),h(-4,0),h(-4,1),h(-4,2),h(-3,2),h(-3,1),h(-2,1),h(-2,2),h(-1,2),h(-1,3),h(-2,3),h(-3,3),h(-4,3)])),k),Zp=function(e){return{ba:h(0,0),R:Op,k:o(Bu,Gp,A(Yp,Hp,Vp,{fI:"level 1",fQ:qp},k)),c4:at,bu:Jp}},qr=$(function(e,r){return h(e,$u(r))}),Xp=w(function(e,r,n){return{aB:n,fw:r,fI:e}}),Li=hr,Qp=function(e){return p(Cr,$(function(r,n){var a=r.a,t=r.b;return p(_n,a,t,n)}),Li,e)},Kp=w(function(e,r,n){return p(Xp,e,r,Qp(n))}),Ot=Kp,Fr=w(function(e,r,n){var a=r.a,t=r.b;return h(e,o(vu,h(a,t),n))}),Ke=wv,Jt=function(e){return e/255},Zr=w(function(e,r,n){return A(Yr,Jt(e),Jt(r),Jt(n),1)}),e0=m([p(Ot,"Camera",!0,m([p(Fr,"camera distance",h(3,60),20),p(Fr,"camera azimuth",h(-Ke,Ke),0),p(Fr,"camera elevation",h(-Ke/2,Ke/2),-.15)])),p(Ot,"Parameters",!0,m([p(Fr,"cubes side length",h(.5,1),.95),p(Fr,"duration of step animation",h(.1,1),.23),p(Fr,"duration of mistake animation",h(.1,1),.5),p(Fr,"height of following lights",h(.1,8),5)])),p(Ot,"Colors and light",!0,m([p(Fr,"lumens of following lights",h(4e4,12e4),1e5),o(qr,"background color",p(Zr,150,150,150)),o(qr,"color 1",p(Zr,244,88,67)),o(qr,"color 2",p(Zr,255,200,40)),o(qr,"path color",p(Zr,244,88,67)),o(qr,"board color",p(Zr,200,170,170)),o(qr,"finish mark color",p(Zr,150,215,106)),o(qr,"wall color",p(Zr,38,48,64))]))]),Ai=function(e){var r=e;return r.D},Te=function(e){var r=e;return Ai(r.V).fQ},r0=function(e){return{$:1,a:e}},Ra=Je(function(e,r,n,a,t,i){var c=i.c4;return c.$?i:R(i,{c4:r0({cF:t,bq:n,b8:r,ak:e.W,eO:a})})}),n0={$:1},a0={$:0},Yt=function(e){return{$:2,a:e}},Eu=$(function(e,r){return o(kt,function(n){return te(n,e)},r)}),Wa=$(function(e,r){var n=r.fy,a=r.bo;return o(Eu,e,o(z,n,a))}),Eo=function(e){return te(e,o(ir,2,0))},tt=$(function(e,r){var n=r.a,a=r.b;switch(e){case 0:return h(n,a+1);case 1:return h(n,a-1);case 2:return h(n-1,a);default:return h(n+1,a)}}),Vu=function(e){return e?0:1},ka=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(ir,r,n);case 1:return o(ir,2,n);default:return o(ir,1,Vu(n))}},Sa=function(e){var r=e.a,n=e.b;switch(r){case 0:return o(ir,2,Vu(n));case 1:return o(ir,r,n);default:return o(ir,0,n)}},t0=function(e){switch(e){case 0:return o(K,ka,o(K,ka,ka));case 1:return ka;case 2:return o(K,Sa,o(K,Sa,Sa));default:return Sa}},Ru=$(function(e,r){var n=r.a,a=r.b;return o(ia,o(tt,e,n),o(t0,e,a))}),o0=$(function(e,r){var n=o(Ru,e,r.dP),a=n.a,t=r.dP,i=t.b,c=r.bV.bo;if(c.b){var l=c.a,u=c.b;return te(l,a)?Yt(R(r,{dP:n,bV:o(sr,l,u)})):Eo(i)?a0:o(Wa,a,r.bV)?n0:Yt(R(r,{dP:n,bV:o(sr,a,o(z,r.bV.fy,o(z,l,u)))}))}else return Yt(R(r,{dP:n,bV:o(sr,a,m([r.bV.fy]))}))}),i0=E(function(e,r,n,a){var t=o(o0,e,Te(a.k));switch(t.$){case 0:return a;case 1:return a;default:var i=t.a;return fe(Ra,n,r,e,!1,i,a)}}),c0=function(e){return{$:2,a:e}},Ec=he(function(e,r,n,a,t){var i=t.c4;return i.$?t:R(t,{c4:c0({bq:a,b8:n,ak:e.W,dg:r})})}),l0=function(e){return{$:3,a:e}},u0=function(e){return{$:1,a:e}},Vc=function(e){return{$:2,a:e}},Wn=function(e){return{$:0,a:e}},ot=function(e){var r=e.bo;return 1+br(r)},Wu=$(function(e,r){var n=o(Ru,e,r.cU),a=n.a,t=n.b,i=r.eo.bo;if(i.b){var c=i.a,l=i.b;if(te(c,a))return u0(R(r,{cU:n,eo:o(sr,c,l)}));if(o(Wa,a,r.bV)){if(o(Wa,a,r.eo))return Wn(3);var u=R(r,{cU:n,eo:o(sr,a,o(z,r.eo.fy,o(z,c,l)))});return te(a,r.bV.fy)?te(ot(u.eo),ot(u.bV))&&Eo(t)?l0(u):Wn(0):Eo(t)?Wn(1):Vc(u)}else return Wn(2)}else return o(Wa,a,r.bV)?Vc(R(r,{cU:n,eo:o(sr,a,m([r.eo.fy]))})):Wn(2)}),$0=E(function(e,r,n,a){var t=o(Wu,e,Te(a.k));switch(t.$){case 0:switch(t.a){case 3:return t.a,a;case 2:return t.a,a;case 1:return t.a,L(Ec,n,1,r,e,a);default:return t.a,L(Ec,n,0,r,e,a)}case 2:var i=t.a;return fe(Ra,n,r,e,!1,i,a);case 1:var i=t.a;return fe(Ra,n,r,e,!1,i,a);default:var i=t.a;return fe(Ra,n,r,e,!0,i,a)}}),Rc=function(e){var r=e.a;return r},v0=function(e){var r=m([e.dd,e.cl,e.dM,e.ey]);e:for(;;)if(r.b)if(r.a)if(r.b.b&&!r.b.a&&r.b.b.b&&!r.b.b.a&&r.b.b.b.b&&!r.b.b.b.a&&!r.b.b.b.b.b){var n=r.b,a=n.b;return a.b,N(0)}else break e;else if(r.b.b)if(r.b.a)if(r.b.b.b&&!r.b.b.a&&r.b.b.b.b&&!r.b.b.b.a&&!r.b.b.b.b.b){var t=r.b,i=t.b;return i.b,N(1)}else break e;else if(r.b.b.b)if(r.b.b.a)if(r.b.b.b.b&&!r.b.b.b.a&&!r.b.b.b.b.b){var c=r.b,l=c.b;return l.b,N(2)}else break e;else if(r.b.b.b.b&&r.b.b.b.a&&!r.b.b.b.b.b){var u=r.b,v=u.b;return v.b,N(3)}else break e;else break e;else break e;else break e;return G},ha=function(e){return{$:2,a:e}},f0=ht(ha(3)),s0=ht(ha(0)),d0=ht(ha(1)),m0=ht(ha(2)),p0=function(e){return m0(e)?N(0):f0(e)?N(1):s0(e)?N(2):d0(e)?N(3):G},g0=$(function(e,r){var n=h(p0(r.bu),v0(e.dL));if(n.a.$){if(n.b.$)return G;var t=n.b.a;return N(t)}else{var a=n.a.a;return N(a)}}),b0={$:3},h0=$(function(e,r){return o(ke,function(n){if(n.$)return 0;var a=n.b;return a},o(da,e,r.aB))}),_0=$(function(e,r){return o(ge,0,jn(o(pa,h0(e),r)))}),y0=$(function(e,r){return o(_0,e,r.e2)}),de=y0,Nu=$(function(e,r){var n=r;return R(n,{D:e(n.D)})}),tn=$(function(e,r){var n=r;return R(n,{V:e(n.V)})}),Vo=function(e){return tn(Nu(function(r){return R(r,{fQ:e(r.fQ)})}))},C0=$(function(e,r){var n=r.c4;switch(n.$){case 1:var i=n.a.ak,a=n.a.cF,t=n.a.eO;return O(e.W-i,o(de,"duration of step animation",e))>0?R(r,{k:o(Vo,pi(a),r.k),c4:t?b0:at}):r;case 2:var i=n.a.ak;return O(e.W-i,o(de,"duration of mistake animation",e))>0?R(r,{c4:at}):r;default:return r}}),xn=function(e){var r=e.fy,n=e.bo;return o(z,r,n)},Wc=function(e){if(e.b){var r=e.a,n=e.b;return N(p(Cr,Ge,r,n))}else return G},yn=$(function(e,r){return O(e,r)<0?e:r}),Nc=function(e){if(e.b){var r=e.a,n=e.b;return N(p(Cr,yn,r,n))}else return G},w0=function(e){var r=xn(e.bV),n={d9:o(ge,0,Wc(o(re,o(K,Co,Un),r))),ea:o(ge,0,Wc(o(re,o(K,Sc,Un),r))),ec:o(ge,0,Nc(o(re,o(K,Co,Un),r))),ed:o(ge,0,Nc(o(re,o(K,Sc,Un),r)))},a=n.ec,t=n.d9,i=n.ed,c=n.ea;return{gl:.5*(a+t),gp:.5*(i+c)}},k0=Av,xi=function(e){return e},Re=function(e){return e},it=function(e){var r=e;return-r},S0=$(function(e,r){var n=e,a=r;return{gl:n.gp*a.dk-n.dk*a.gp,gp:n.dk*a.gl-n.gl*a.dk,dk:n.gl*a.gp-n.gp*a.gl}}),Hu=function(e){var r=e;return r.di},Gu=function(e){var r=e;return r.dj},L0=function(e){return o(S0,Hu(e),Gu(e))},Bn=function(e){var r=e;return r.cK},Nr=kv,Hr=Sv,qt=w(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Nr(c),u=Hr(c),v=a.e8,s=v,f=s.gl*u,g=l*f,d=f*f,_=s.gp*u,b=l*_,C=f*_,S=_*_,y=1-2*(d+S),x=s.dk*u,B=l*x,Y=2*(C-B),I=2*(C+B),H=f*x,J=2*(H+b),q=2*(H-b),W=_*x,ne=2*(W-g),ee=2*(W+g),se=x*x,me=1-2*(S+se),ve=1-2*(d+se);return{gl:me*i.gl+Y*i.gp+J*i.dk,gp:I*i.gl+ve*i.gp+ne*i.dk,dk:q*i.gl+ee*i.gp+y*i.dk}}),A0=w(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Nr(c),u=Hr(c),v=a.cK,s=v,f=i.gl-s.gl,g=i.gp-s.gp,d=i.dk-s.dk,_=a.e8,b=_,C=b.gl*u,S=l*C,y=C*C,x=b.gp*u,B=l*x,Y=C*x,I=x*x,H=1-2*(y+I),J=b.dk*u,q=l*J,W=2*(Y-q),ne=2*(Y+q),ee=C*J,se=2*(ee+B),me=2*(ee-B),ve=x*J,ye=2*(ve-S),Ne=2*(ve+S),Ee=J*J,Dr=1-2*(I+Ee),jr=1-2*(y+Ee);return{gl:s.gl+Dr*f+W*g+se*d,gp:s.gp+ne*f+jr*g+ye*d,dk:s.dk+me*f+Ne*g+H*d}}),on=function(e){return e},cn=function(e){var r=e;return r.di},ln=function(e){var r=e;return r.dj},un=function(e){var r=e;return r.dl},x0=w(function(e,r,n){return on({cK:p(A0,e,r,Bn(n)),di:p(qt,e,r,cn(n)),dj:p(qt,e,r,ln(n)),dl:p(qt,e,r,un(n))})}),Hc=w(function(e,r,n){return p(x0,e(n),r,n)}),xt=function(e){var r=e;return r.e8},Iu=$(function(e,r){var n=e,a=r;return{gl:a.gl+n.gl,gp:a.gp+n.gp,dk:a.dk+n.dk}}),P0=$(function(e,r){return on({cK:o(Iu,e,Bn(r)),di:cn(r),dj:ln(r),dl:un(r)})}),T0=$(function(e,r){var n=e,a=r;return{gl:n*a.gl,gp:n*a.gp,dk:n*a.dk}}),z0=w(function(e,r,n){return o(P0,o(T0,r,e),n)}),M0=w(function(e,r,n){return p(z0,xt(e(n)),r,n)}),_r=$(function(e,r){return{e8:r,cK:e}}),D0=function(e){var r=e;return o(_r,r.cK,r.di)},j0=function(e){var r=e;return o(_r,r.cK,r.dj)},F0=function(e){var r=e;return o(_r,r.cK,r.dl)},B0=function(e){var r=on({cK:e.aX,di:Gu(e.dC),dj:L0(e.dC),dl:Hu(e.dC)}),n=p(M0,F0,e.ck,p(Hc,D0,it(e.bN),p(Hc,j0,e.bI,r)));return n},E0=function(e){return{$:0,a:e}},Se=function(e){var r=e;return X(r)},Na=function(e){var r=e;return .5*r},V0=Lv,R0=function(e){var r=e;return V0(r)},W0=function(e){var r=Na(Se(e.eK)),n=R0(r);return{cX:E0(n),df:e.df}},Ie=function(e){return e},cr={gl:0,gp:0,dk:0},Uu=Ve,dr=function(e){return e},Ou=dr({gl:1,gp:0,dk:0}),Pt=Ou,Pi=dr({gl:0,gp:0,dk:1}),Tt=Pi,N0=Uu({cK:cr,di:Tt,dj:Pt}),H0=function(e){var r=e.aX,n=e.bI,a=e.bN,t=e.ck;return W0({eK:Ie(2*k0(.5)),df:B0({bI:Ie(n),ck:Re(t),bN:Ie(a),aX:xi(r),dC:N0})})},Ju=$(function(e,r){return H0({bI:o(de,"camera azimuth",e),ck:o(de,"camera distance",e),bN:o(de,"camera elevation",e),aX:function(){var n=w0(Te(r.k));return{gl:n.gl,gp:n.gp,dk:0}}()})}),G0=w(function(e,r,n){return{gl:e,gp:r,dk:n}}),Jn=function(e){return Ie(Ke*(e/180))},La=function(e){return e},Ha=function(e){var r=e;return r},I0=$(function(e,r){var n=e,a=r;return a.gl*n.gl+a.gp*n.gp+a.dk*n.dk}),ue=$(function(e,r){var n=r;return e*n}),Ti=function(e){var r=e;return r.cK},U0=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=n.fK,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp+(a.dk-i.dk)*l.dk}),O0=w(function(e,r,n){var a=e,t=r,i=n;return{gl:i.gl+t*a.gl,gp:i.gp+t*a.gp,dk:i.dk+t*a.dk}}),J0=$(function(e,r){var n=xt(r),a=e,t=a.fK,i=o(I0,t,n);if(i){var c=Ti(r),l=o(U0,e,c),u=o(ue,-1/i,l);return N(p(O0,n,u,c))}else return G}),Y0=$(function(e,r){return{gl:e,gp:r}}),Gc=$(function(e,r){var n=e,a=r;return n*a}),q0=function(e){var r=e;return r},Ic=function(e){var r=e;return q0(r.eU)},Z0=function(e){var r=e;return r.aQ},Br=Dv,X0=function(e){var r=e,n=o(Ge,X(r.gl),o(Ge,X(r.gp),X(r.dk)));if(n){var a=r.dk/n,t=r.gp/n,i=r.gl/n,c=Br(i*i+t*t+a*a);return N({gl:i/c,gp:t/c,dk:a/c})}else return G},Yu=$(function(e,r){var n=r;return n/e}),Ro=function(e){var r=e;return Bn(r)},zi=dr({gl:0,gp:0,dk:-1}),Q0=$(function(e,r){var n=e,a=r;return a/n}),K0=$(function(e,r){var n=e,a=r,t=n.dl,i=t,c=n.dj,l=c,u=n.di,v=u;return{gl:v.gl*a.gl+l.gl*a.gp+i.gl*a.dk,gp:v.gp*a.gl+l.gp*a.gp+i.gp*a.dk,dk:v.dk*a.gl+l.dk*a.gp+i.dk*a.dk}}),ct=function(e){var r=e;return{gl:-r.gl,gp:-r.gp,dk:-r.dk}},Wo=function(e){var r=e;return ct(un(r))},e1=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=n.di,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),Mi=w(function(e,r,n){var a=e,t=r,i=n;return{gl:a,gp:t,dk:i}}),r1=E(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cK,v=u,s=t.dl,f=s,g=t.dj,d=g,_=t.di,b=_;return{gl:v.gl+i*b.gl+c*d.gl+l*f.gl,gp:v.gp+i*b.gp+c*d.gp+l*f.gp,dk:v.dk+i*b.dk+c*d.dk+l*f.dk}}),n1=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=n.dj,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),Lr=0,a1=w(function(e,r,n){var a=e,t=o(n1,Ic(r),n),i=o(e1,Ic(r),n),c=a.df,l=c,u=Z0(r);u.a;var v=u.b,s=a.cX;if(s.$){var _=s.a,b=o(Q0,v,_),C=A(r1,l,o(Gc,b,i),o(Gc,b,t),Lr);return o(_r,C,Wo(a.df))}else{var f=s.a,g=it(o(Yu,f,o(ue,.5,v))),d=o(K0,l,o(ge,zi,X0(p(Mi,i,t,g))));return o(_r,Ro(a.df),d)}}),No=function(e){var r=e;return{gl:Nr(r),gp:Hr(r)}},t1=function(e){var r=e;return{gl:-r.gp,gp:r.gl}},o1=function(e){return e},i1=$(function(e,r){return o1({cK:r,di:e,dj:t1(e)})}),c1=$(function(e,r){return o(i1,No(e),r)}),l1=w(function(e,r,n){var a=e.a,t=e.b;return{eU:o(c1,r,n),aQ:h(Se(a),Se(t))}}),Cn=function(e){var r=e;return r.gl},u1=$(function(e,r){var n=e,a=r;return{gl:n,gp:a}}),wn=function(e){var r=e;return r.gp},kn=function(e){var r=e;return r.dk},$1=E(function(e,r,n,a){var t=n.gl,i=n.gp,c=function(v){return p(G0,Ha(Cn(v)),Ha(wn(v)),Ha(kn(v)))},l=p(l1,h(La(r.gj),La(r.fo)),Jn(0),o(Y0,0,0)),u=o(u1,La(t),La(i));return o(ke,c,o(J0,a,p(a1,e,l,u)))}),v1=$(function(e,r){return{fK:e,cK:r}}),f1=$(function(e,r){var n=r;return o(v1,n.fK,o(Iu,e,n.cK))}),s1=$(function(e,r){return{fK:r,cK:e}}),d1=o(s1,cr,Tt),m1=E(function(e,r,n,a){return A($1,r,n,a,o(f1,p(Mi,Re(0),Re(0),Re(e)),d1))}),p1=m1(0),g1=$(function(e,r){return R(r,{ba:o(ge,r.ba,o(ke,function(n){var a=n.gl,t=n.gp;return h(Oe(a),Oe(t))},p(p1,o(Ju,e,r),e.br,e.cV)))})}),b1=function(e){return e.$===2?At:e},h1=$(function(e,r){return e.cV.dI?r:At}),_1=$(function(e,r){return Br(o(Wr,e.gl-r.gl,2)+o(Wr,e.gp-r.gp,2))}),y1=w(function(e,r,n){var a=h(r,n),t=a.a,i=a.b;return O(o(_1,t,i),e)<0?G:O(i.gl-t.gl,X(i.gp-t.gp))>0?N(1):O(t.gl-i.gl,X(i.gp-t.gp))>0?N(0):O(i.gp-t.gp,X(i.gl-t.gl))>0?N(2):N(3)}),qu=function(e){return{gl:e.cV.gl,gp:e.cV.gp}},C1=w(function(e,r,n){var a=r.f9,t=h(n,e.cV.dI);if(t.a.$===1&&t.b){var i=t.a.a,c=p(y1,a,i,qu(e));if(c.$)return n;var l=c.a;return ha(l)}else return n}),w1=function(e){return{$:1,a:e}},k1=$(function(e,r){return r.$===1?r:e.cV.dI?w1(qu(e)):At}),S1=w(function(e,r,n){return p(C1,e,r,o(h1,e,o(k1,e,b1(n))))}),L1=$(function(e,r){return R(r,{bu:p(S1,e,{f9:20},r.bu)})}),A1=$(function(e,r){var n=Te(r.k).cU,a=Te(r.k).dP,t=function(){var i=o(g0,e,r);if(i.$===1)return Ve;var c=i.a;return r.R.bS?p(i0,c,Rc(a),e):p($0,c,Rc(n),e)}();return o(C0,e,t(o(g1,e,o(L1,e,r))))}),x1=$(function(e,r){return r.b?p(Mr,z,r,e):e}),rr=function(e){return p(Mr,x1,k,e)},Di=$(function(e,r){return rr(o(re,e,r))}),En=$(function(e,r){return p(Mr,$(function(n,a){return e(n)?o(z,n,a):a}),k,r)}),Zu=w(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Zu,e,r,i)),v=c;e=l,r=u,n=v;continue e}}),P1=$(function(e,r){return p(Zu,w(function(n,a,t){return o(_u,n,t)}),e,r)}),T1=$(function(e,r){var n=e,a=r;return o(P1,n,a)}),Xu=Li,Qu=$(function(e,r){var n=r;return p(_n,e,0,n)}),Uc=function(e){return p(Cr,Qu,Xu,e)},z1=$(function(e,r){var n=o(da,e,r);return!n.$}),Ku=$(function(e,r){var n=r;return o(z1,e,n)}),M1=$(function(e,r){return o(En,function(n){return o(Ku,n,e)},o(re,function(n){return o(tt,n,r)},m([0,1,2,3])))}),D1=$(function(e,r){var n=$(function(a,t){e:for(;;)if(t.b){var i=t.a,c=t.b,l=o(En,function(s){return!(o(Eu,s,t)||o(Ku,s,a))},o(M1,r,i)),u=o(Qu,i,a),v=ie(c,l);a=u,t=v;continue e}else return a});return o(n,Xu,m([e]))}),e$=$(function(e,r){e:for(;;){if(r.$===-2)return e;var n=r.d,a=r.e,t=o(e$,e+1,a),i=n;e=t,r=i;continue e}}),j1=function(e){return o(e$,0,e)},Oc=function(e){var r=e;return j1(r)},F1=function(e){var r=Oc(e);return o(ge,!1,o(ke,function(n){return O(Oc(o(D1,n,e)),r)<0},jn(sd(e))))},B1=function(e){return F1(o(T1,Uc(xn(e.bV)),Uc(xn(e.eo))))},E1=function(e){var r=e.fy,n=e.bo;return o(ge,r,jn(be(n)))},r$=function(e){var r=E1(e.bV);return R(e,{cU:o(ia,r,o(ir,2,0)),eo:o(sr,r,k)})},V1=function(e){var r=$(function(n,a){e:for(;;){if(nt(a))return n;var t=ie(n,a),i=o(Di,function(c){return B1(c)?k:o(pa,function(l){var u=o(Wu,l,c);switch(u.$){case 0:return G;case 1:return G;case 2:var v=u.a;return N(v);default:var v=u.a;return N(v)}},m([0,1,2,3]))},a);n=t,a=i;continue e}});return o(En,function(n){return te(ot(n),ot(e.bV))},o(re,function(n){return n.eo},o(r,k,m([r$(e)]))))},R1=function(e){return R(e,{bS:!e.bS,c4:0})},W1=$(function(e,r){var n=r;return R(n,{m:o(z,n.D,n.m),D:e})}),N1=$(function(e,r){var n=r;if(e.$)return n;var a=Ai(n.V);return o(tn,W1(R(a,{fI:a.fI+" copy"})),n)}),H1=$(function(e,r){var n=r;if(e.$===4){var a=e.a;return o(tn,Nu(function(t){return R(t,{fI:a})}),n)}else return n}),ji=function(e){var r=e;return ie(be(r.m),ie(m([r.D]),r.r))},G1=$(function(e,r){var n=r;switch(e.$){case 6:return R(n,{c8:o(Ol,2,o(Si,function(t){return Fn(m([h("name",Lt(t.fI)),h("page",n.dw(t.fQ))]))},ji(n.V)))});case 7:return o(Bu,n.b9,n);case 8:var a=e.a;return R(n,{b9:a});default:return n}}),I1=function(e){var r=e,n=r.r;if(n.b){var a=n.a,t=n.b;return R(r,{r:t,m:o(z,a,r.m)})}else return R(r,{r:be(r.m),m:k})},U1=$(function(e,r){var n=r;return e.$===2?o(tn,I1,n):n}),O1=function(e){var r=e,n=r.m;if(n.b){var a=n.a,t=n.b;return R(r,{r:o(z,a,r.r),m:t})}else return R(r,{r:k,m:be(r.r)})},J1=$(function(e,r){var n=r;return e.$===3?o(tn,O1,n):n}),Y1=function(e){var r=e,n=r.m;if(n.b){var a=n.a,t=n.b;return R(r,{m:t,D:a})}else{var i=r.r;if(i.b){var a=i.a,t=i.b;return R(r,{r:t,D:a})}else return r}},q1=$(function(e,r){var n=r;return e.$===1?o(tn,Y1,n):n}),Z1=$(function(e,r){var n=r,a=ji(n),t=o(ta,br(a),e),i=o(yi,t,a);if(i.b){var c=i.a,l=i.b;return{r:l,m:be(o(lu,t,a)),D:c}}else return n}),X1=$(function(e,r){var n=r;if(e.$===5){var a=e.a;return o(tn,Z1(a),n)}else return n}),Q1=$(function(e,r){return o(G1,e,o(H1,e,o(X1,e,o(J1,e,o(U1,e,o(q1,e,o(N1,e,r)))))))}),K1=w(function(e,r,n){var a=n.R;switch(r.$){case 0:return R(n,{R:R1(n.R),k:o(Vo,r$,n.k),c4:at});case 1:return R(n,{k:o(Vo,function(c){return R(c,{$7:V1(Te(n.k))})},n.k)});case 2:var t=r.a;return R(n,{R:R(a,{ei:N(t)})});case 3:return R(n,{R:R(a,{ei:G})});default:var i=r.a;return R(n,{k:o(Q1,i,n.k)})}}),Aa=nr("br"),xa=nr("p"),Pa=nr("span"),eg=$(function(e,r){return o(D,m([o(Q,"position","fixed"),o(Q,"width","100%"),o(Q,"text-align","center"),o(Q,"font-size","14px")]),m([o(D,m([T("text-lg font-bold")]),m([oe("The Red-Faced Cube")])),o(xa,m([T("font-bold italic")]),m([o(xa,k,m([oe("A puzzle from the book Mathematical Carnival")])),o(xa,k,m([oe("(1975, Martin Gardner)")]))])),o(xa,m([T("text-xs")]),m([o(Pa,function(){var n=r.c4;if(n.$===2){n.a.ak;var a=n.a.dg;return a?k:m([o(Q,"background-color","red")])}else return k}(),m([oe(" Visit each cell exactly once.")])),o(Aa,k,k),o(Pa,k,m([oe("End with the cube red side up on the (marked) finish cell.")])),o(Aa,k,k),o(Pa,function(){var n=r.c4;if(n.$===2){n.a.ak;var a=n.a.dg;return a===1?m([o(Q,"background-color","red")]):k}else return k}(),m([oe("At no time during the tour, however,"),o(Aa,k,k),oe("is the cube allowed to rest with the red side up.")])),o(Aa,k,k),o(Pa,k,m([oe("You can roll the cube via swiping or pressing arrow keys.")]))]))]))}),Fi=function(e){return e},Bi=w(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),rg=function(e){var r=e;return r},ng=function(e){var r=p(Bi,1667,25e3,rg(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Fi({gl:n,gp:a})},ag=function(e){return e},tg=function(e){return{$:0,a:e}},og=tg,ig={$:3},cg=ig,lg=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ug=lg,$g=function(e){return{$:1,a:e}},vg=$g,fg=function(e){return o(yr,"height",Pe(e))},sg=function(e){return Vf(Gf(e))},dg=sg,mg=function(e){return{$:2,a:e}},pg=mg,gg=function(e){return o(Qr,"",e)},bg=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Oe(l*1e3)/1e3},c=function(l){return Oe(l*1e4)/100};return gg(m(["rgba(",le(c(r)),"%,",le(c(n)),"%,",le(c(a)),"%,",le(i(t)),")"]))},hg=$(function(e,r){switch(r.$){case 0:return o(Ws,e,r);case 1:return o(Ns,e,r);case 2:return o(Hs,e,r);case 3:return o(Gs,e,r);case 4:return o(Is,e,r);default:return o(Us,e,r)}}),_g=$(function(e,r){switch(r.$){case 0:return o(ps,e,r);case 1:return o(gs,e,r);case 2:return o(bs,e,r);case 3:return o(hs,e,r);case 4:return o(_s,e,r);case 5:return o(ys,e,r);case 6:return o(Cs,e,r);case 7:return o(ws,e,r);default:return ks(e)}}),yg=w(function(e,r,n){return p(Rs,e,r,n)}),Jc=function(e){var r=e;return r},Vn=nd,Zt=A(Vn,1,1,1,1),ur=w(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),Cg=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),wg=$(function(e,r){var n=e,a=r.gl,t=r.gp;return p(Cg,n*a/t,n,n*(1-a-t)/t)}),zt=Zs,kg=function(e){var r=e.a,n=e.b,a=e.c;return p(zt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Mt=$(function(e,r){return kg(o(wg,e,r))}),n$=$(function(e,r){return{dJ:te(e.dJ,r.dJ),s:e.s*r.s+e.t*r.v+e.u*r.y,t:e.s*r.t+e.t*r.w+e.u*r.z,u:e.s*r.u+e.t*r.x+e.u*r.A,v:e.v*r.s+e.w*r.v+e.x*r.y,w:e.v*r.t+e.w*r.w+e.x*r.z,x:e.v*r.u+e.w*r.x+e.x*r.A,y:e.y*r.s+e.z*r.v+e.A*r.y,z:e.y*r.t+e.z*r.w+e.A*r.z,A:e.y*r.u+e.z*r.x+e.A*r.A,J:r.J+(e.J*r.s+e.K*r.v+e.L*r.y)*r.b6,K:r.K+(e.J*r.t+e.K*r.w+e.L*r.z)*r.b6,L:r.L+(e.J*r.u+e.K*r.x+e.L*r.A)*r.b6,b6:e.b6*r.b6}}),Ar=ld,Sg=function(e){return Ar({dU:e.s,dV:e.v,dW:e.y,dX:e.J,dY:e.t,dZ:e.w,d_:e.z,d$:e.K,d0:e.u,d1:e.x,d2:e.A,d3:e.L,d4:0,d5:0,d6:0,d7:1})},Xt=he(function(e,r,n,a,t){var i=a.dJ?1:-1,c=A(Vn,a.b6,a.b6,a.b6,i);return fe(t,e,c,Sg(a),a.dJ,r,n)}),a$=Je(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,f=o(n$,c,a),g=l,d=i;e=u,r=v,n=s,a=f,t=g,i=d;continue e;case 1:var _=t.b,b=o(z,L(Xt,e,r,n,a,_),i.O);return{O:b,Z:i.Z,f$:i.f$};case 3:var C=t.b,S=o(z,L(Xt,e,r,n,a,C),i.Z);return{O:i.O,Z:S,f$:i.f$};case 2:var y=t.a,x=o(z,L(Xt,e,r,n,a,y),i.f$);return{O:i.O,Z:i.Z,f$:x};default:var B=t.a;return p(Cr,A(a$,e,r,n,a),i,B)}}),Lg=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),t$=Lg,Ei=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ag=function(e){var r=e.ad,n=e.aa,a=e._;return A(Ei,518,r,n,a)},xg=$(function(e,r){return{$:6,a:e,b:r}}),Pg=xg,o$=m([Ag({_:1,aa:0,ad:!1}),A(t$,!1,!1,!1,!1),o(Pg,0,1)]),Pn=519,Vi=8,i$=15,Sn=7681,Tg={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Be=ms,zg=$(function(e,r){return{$:0,a:e,b:r}}),Mg=zg({dv:1,dF:0,eg:5}),en=Ys,Dg=Mg(m([{er:o(en,-1,-1)},{er:o(en,1,-1)},{er:o(en,-1,1)},{er:o(en,1,1)}])),jg={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"er"},uniforms:{}},Fg=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Ri=w(function(e,r,n){var a=e.cZ,t=e.cx,i=e.dh,c=$(function(v,s){var f=v;return s(f)}),l=$(function(v,s){var f=v;return s(f)}),u=function(v){return o(K,c(v.bw),o(K,l(v.bf),o(K,l(v.bE),l(v.bF))))};return o(u,n,o(u,r,p(Fg,a,t,i)))}),Wi=function(e){return p(Ri,{cx:e.cx,cZ:e.cZ,dh:e.dh},{bf:e.bf,bw:e.bw,bE:e.bE,bF:e.bF},{bf:e.bf,bw:e.bw,bE:e.bE,bF:e.bF})},Ni=function(e){return L(Be,m([Wi(e),A(t$,!1,!1,!1,!1)]),jg,Tg,Dg,{})},Bg=Ni({bf:Sn,cx:0,cZ:Vi,bw:Pn,dh:i$,bE:Sn,bF:Sn}),Eg=516,Yc=5386,Fe=7680,Vg=function(e){return o(Wr,2,e+4)},c$=function(e){return Ni({bf:Fe,cx:i$,cZ:Vi,bw:Eg,dh:Vg(e),bE:Yc,bF:Yc})},Rg=w(function(e,r,n){return rr(m([p(ur,e,n,o$),m([c$(r),Bg])]))}),Wg=$(function(e,r){return rr(o(va,Rg(e),r))}),Ng=function(e){var r=e.ad,n=e.aa,a=e._;return A(Ei,513,r,n,a)},Hg=Ng({_:1,aa:0,ad:!0}),Gg=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Ig=function(e){var r=e.b4,n=e.bP,a=e.bJ,t=e.bG,i=e.bL,c=e.aN,l=$(function(u,v){var s=u.a,f=u.b,g=u.c,d=v.a,_=v.b,b=v.c;return Gg(s)(f)(g)(d)(_)(b)(r)(n)(a)(t)});return o(l,i,c)},Ug=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qc=$(function(e,r){var n=e,a=r;return p(Ug,32774,n,a)}),Og=1,Zc=771,Jg=770,Hi=Ig({bG:0,aN:o(qc,Og,Zc),bJ:0,bL:o(qc,Jg,Zc),bP:0,b4:0}),mn=m([Hg,Hi]),Yg=function(e){var r=e;return r.d9},qg=function(e){var r=e;return r.ea},l$=function(e){var r=e;return r.eb},Zg=function(e){var r=e;return r.ec},Xg=function(e){var r=e;return r.ed},u$=function(e){var r=e;return r.ee},Pr=$(function(e,r){var n=e,a=r;return a-n}),$$=function(e){return F(o(Pr,Zg(e),Yg(e)),o(Pr,Xg(e),qg(e)),o(Pr,u$(e),l$(e)))},Qg=function(e){return e},Kg=function(e){return on({cK:Qg({gl:e.J,gp:e.K,dk:e.L}),di:dr({gl:e.s,gp:e.t,dk:e.u}),dj:dr({gl:e.v,gp:e.w,dk:e.x}),dl:dr({gl:e.y,gp:e.z,dk:e.A})})},Qt=$(function(e,r){var n=e,a=r,t=n.dl,i=t,c=n.dj,l=c,u=n.di,v=u;return{gl:a.gl*v.gl+a.gp*v.gp+a.dk*v.dk,gp:a.gl*l.gl+a.gp*l.gp+a.dk*l.dk,dk:a.gl*i.gl+a.gp*i.gp+a.dk*i.dk}}),v$=$(function(e,r){var n=e,a=r,t=n.cK,i=t,c=a.gl-i.gl,l=a.gp-i.gp,u=a.dk-i.dk,v=n.dl,s=v,f=n.dj,g=f,d=n.di,_=d;return{gl:c*_.gl+l*_.gp+u*_.dk,gp:c*g.gl+l*g.gp+u*g.dk,dk:c*s.gl+l*s.gp+u*s.dk}}),f$=$(function(e,r){return{cK:o(v$,e,Bn(r)),di:o(Qt,e,cn(r)),dj:o(Qt,e,ln(r)),dl:o(Qt,e,un(r))}}),ca=w(function(e,r,n){return{gl:e,gp:r,dk:n}}),lt=function(e){var r=e;return r},xe=$(function(e,r){var n=e,a=r;return o(Ge,n,a)}),De=$(function(e,r){var n=e,a=r;return o(yn,n,a)}),e3=$(function(e,r){var n=lt(r),a=lt(e);return{d9:o(xe,a.d9,n.d9),ea:o(xe,a.ea,n.ea),eb:o(xe,a.eb,n.eb),ec:o(De,a.ec,n.ec),ed:o(De,a.ed,n.ed),ee:o(De,a.ee,n.ee)}}),Ue=function(e){var r=e;return r},r3=function(e){var r=e;return F(r.gl,r.gp,r.dk)},Xn=$(function(e,r){var n=e,a=r;return a+n}),n3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Na(Se(a)),c=Na(Se(n)),l=Na(Se(t)),u=r3(r),v=u.a,s=u.b,f=u.c;return{d9:o(Xn,c,v),ea:o(Xn,i,s),eb:o(Xn,l,f),ec:o(Pr,c,v),ed:o(Pr,i,s),ee:o(Pr,l,f)}}),Xc=E(function(e,r,n,a){var t=n.e$,i=2*n.fm*r,c=2*n.fl*r,l=2*n.fk*r,u=t.dk*r,v=t.gp*r,s=t.gl*r,f=Ue(un(e)),g=X(l*f.gl)+X(c*f.gp)+X(i*f.dk),d=Ue(ln(e)),_=X(l*d.gl)+X(c*d.gp)+X(i*d.dk),b=Ue(cn(e)),C=X(l*b.gl)+X(c*b.gp)+X(i*b.dk),S=o(n3,F(C,_,g),o(v$,e,p(ca,s,v,u)));if(a.$)return N(S);var y=a.a;return N(o(e3,y,S))}),Ho=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var d=e,_=r,b=n,C=i;e=d,r=_,n=b,a=C;continue e;case 1:var c=t.a,l=A(Xc,e,r,c,n),d=e,_=r,b=l,C=i;e=d,r=_,n=b,a=C;continue e;case 2:var d=e,_=r,b=n,C=i;e=d,r=_,n=b,a=C;continue e;case 3:var c=t.a,l=A(Xc,e,r,c,n),d=e,_=r,b=l,C=i;e=d,r=_,n=b,a=C;continue e;case 4:var u=t.a,d=e,_=r,b=A(Ho,e,r,n,u),C=i;e=d,r=_,n=b,a=C;continue e;default:var v=t.a,s=t.b,f=o(f$,Kg(v),e),g=r*v.b6,d=e,_=r,b=A(Ho,f,g,n,m([s])),C=i;e=d,r=_,n=b,a=C;continue e}}else return n}),$n=Xs,vn=Qs,fn=Ks,s$=function(e){return{$:4,a:e}},a3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(z,n,r);e=t,r=i;continue e}else return r}),_a=function(e){return s$(o(a3,e,k))},t3={dJ:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:0,K:0,L:0,b6:1},Qc=Ni({bf:Sn,cx:0,cZ:Vi,bw:Pn,dh:255,bE:Sn,bF:Sn}),o3=function(e){var r=e,n=o(Ge,X(r.gl),o(Ge,X(r.gp),X(r.dk)));if(n){var a=r.dk/n,t=r.gp/n,i=r.gl/n,c=Br(i*i+t*t+a*a);return c*n}else return Lr},Me={bJ:0,e_:!1,bP:0,cT:0,b4:0,da:0,gl:0,gp:0,dk:0},Ze=$(function(e,r){var n=e,a=r;return Ar({dU:n.gl,dV:n.b4,dW:a.gl,dX:a.b4,dY:n.gp,dZ:n.bP,d_:a.gp,d$:a.bP,d0:n.dk,d1:n.bJ,d2:a.dk,d3:a.bJ,d4:n.da,d5:n.cT,d6:a.da,d7:a.cT})}),Yn=h({bk:o(Ze,Me,Me),bW:o(Ze,Me,Me),bX:o(Ze,Me,Me),bY:o(Ze,Me,Me)},A(Vn,0,0,0,0)),d$=514,m$=function(e){var r=e.ad,n=e.aa,a=e._;return A(Ei,515,r,n,a)},p$=240,i3=m([m$({_:1,aa:0,ad:!0}),Wi({bf:Fe,cx:p$,cZ:0,bw:d$,dh:0,bE:Fe,bF:Fe}),Hi]),c3=$(function(e,r){var n=e,a=r.fJ,t=r.fh,i=r.eT,c=Se(a),l=c,u=Se(t),v=u,s=n.cX;if(s.$){var g=s.a;return ko(v)?Ar({dU:2/(i*g),dV:0,dW:0,dX:0,dY:0,dZ:2/g,d_:0,d$:0,d0:0,d1:0,d2:0,d3:-1,d4:0,d5:0,d6:0,d7:1}):Ar({dU:2/(i*g),dV:0,dW:0,dX:0,dY:0,dZ:2/g,d_:0,d$:0,d0:0,d1:0,d2:-2/(v-l),d3:-(v+l)/(v-l),d4:0,d5:0,d6:0,d7:1})}else{var f=s.a;return ko(v)?Ar({dU:1/(i*f),dV:0,dW:0,dX:0,dY:0,dZ:1/f,d_:0,d$:0,d0:0,d1:0,d2:-1,d3:-2*l,d4:0,d5:0,d6:-1,d7:0}):Ar({dU:1/(i*f),dV:0,dW:0,dX:0,dY:0,dZ:1/f,d_:0,d$:0,d0:0,d1:0,d2:-(v+l)/(v-l),d3:-2*v*l/(v-l),d4:0,d5:0,d6:-1,d7:0})}}),Ta=$(function(e,r){return(1&e>>r)===1?0:1}),l3=function(e){return m([m$({_:1,aa:0,ad:!0}),Wi({bf:Fe,cx:p$,cZ:e,bw:d$,dh:0,bE:Fe,bF:Fe}),Hi])},u3=w(function(e,r,n){return rr(o(re,function(a){var t=a<<4,i=A(Vn,o(Ta,a,0),o(Ta,a,1),o(Ta,a,2),o(Ta,a,3));return p(ur,e,h(r,i),l3(t))},o(Ln,1,o(Wr,2,n)-1)))}),Go=function(e){var r=e;return r},$3=ud,Gi=dr({gl:0,gp:1,dk:0}),Ii=Gi,v3={cK:cr,di:Pt,dj:Ii,dl:Tt},sn=function(e){var r=e;return r},f3=function(e){var r=sn(Bn(e)),n=Ue(un(e)),a=Ue(ln(e)),t=Ue(cn(e));return Ar({dU:t.gl,dV:a.gl,dW:n.gl,dX:r.gl,dY:t.gp,dZ:a.gp,d_:n.gp,d$:r.gp,d0:t.dk,d1:a.dk,d2:n.dk,d3:r.dk,d4:0,d5:0,d6:0,d7:1})},s3=$(function(e,r){var n=r;return f3(o(f$,n,e))}),d3=function(e){return o(s3,v3,e)},m3=function(e){var r=e;return r.df},p3=function(e){var r=e;return cn(r)},g3=function(e){var r=e;return ln(r)},b3=function(e){var r=m3(e.eY),n=on({cK:Ro(r),di:p3(r),dj:g3(r),dl:ct(Wo(r))}),a=_a(e.aV),t=a,i=A(Ho,n,1,G,m([t]));if(i.$===1)return k;var c=i.a,l=d3(r),u=o(ue,.99,o(xe,Se(e.e1),it(l$(c)))),v=$$(c),s=v.a,f=v.b,g=v.c,d=o3(p(Mi,s,f,g)),_=o(ue,1.01,o(Xn,d,it(u$(c)))),b=o(c3,e.eY,{eT:e.eT,fh:_,fJ:u}),C=$3(b).d7,S=C?Ue(ct(Wo(r))):Go(Ro(r)),y=function(){var ve=e.gb;switch(ve.$){case 0:return h(0,0);case 1:return h(1,0);case 2:return h(2,0);case 3:var ye=ve.a;return h(3,ye);case 4:var ye=ve.a;return h(4,ye);default:return h(5,0)}}(),x=y.a,B=y.b,Y=e.ff,I=Y,H=o(Mt,I,e.gi),J=H,q=Ar({dU:0,dV:S.gl,dW:$n(J),dX:e.eE,dY:0,dZ:S.gp,d_:vn(J),d$:Ha(d),d0:0,d1:S.dk,d2:fn(J),d3:x,d4:0,d5:C,d6:0,d7:B}),W=fe(a$,q,l,b,t3,t,{O:k,Z:k,f$:k}),ne=e.fB;switch(ne.$){case 0:var ee=ne.a;return rr(m([p(ur,W.O,h(ee,Zt),mn),p(ur,W.Z,Yn,mn)]));case 1:var ee=ne.a;return rr(m([p(ur,W.O,Yn,mn),m([Qc]),p(ur,W.f$,ee.bk,o$),m([c$(0)]),p(ur,W.O,h(ee,Zt),i3),p(ur,W.Z,Yn,mn)]));default:var se=ne.a,me=ne.b;return rr(m([p(ur,W.O,h(me,Zt),mn),m([Qc]),o(Wg,W.f$,se),p(u3,W.O,me,br(se)),p(ur,W.Z,Yn,mn)]))}},h3=function(e){return o(yr,"width",Pe(e))},_3=$(function(e,r){var n=m([vg(1),pg(0),og(!0),A(ug,0,0,0,0)]),a=function(){var x=e.eR;switch(x.$){case 0:return F(n,"0",1);case 1:return F(o(z,cg,n),"1",1);default:var B=x.a;return F(n,"0",B)}}(),t=a.a,i=a.b,c=a.c,l=e.aQ,u=l.a,v=l.b,s=Jc(v),f=o(Q,"height",Pe(s)+"px"),g=Jc(u),d=g/s,_=o(Di,function(x){return b3({eT:d,eY:e.eY,e1:e.e1,aV:x.aV,ff:x.ff,fB:x.fB,eE:c,gb:x.gb,gi:x.gi})},r),b=o(Q,"width",Pe(g)+"px"),C=e.aO,S=C,y=bg(S);return p(dg,"div",m([o(Q,"padding","0px"),b,f]),m([h(i,p(yg,t,m([h3(Oe(g*c)),fg(Oe(s*c)),b,f,o(Q,"display","block"),o(Q,"background-color",y)]),_))]))}),y3=function(e){return{$:2,a:e}},C3=function(e){return y3(e)},w3=function(e){return o(_3,{eR:C3(e.cj),aO:e.aO,eY:e.eY,e1:e.e1,aQ:e.aQ},m([{aV:e.aV,ff:e.ff,fB:e.fB,gb:e.gb,gi:e.gi}]))},Kc=function(e){return e},k3=$(function(e,r){return w3({eR:e.eR,aO:ag(e.eV),eY:e.eY,e1:Re(e.e1),cj:e.cj,aQ:h(Kc(Oe(e.br.gj)),Kc(Oe(e.br.fo))),aV:r,ff:e.ff,fB:e.fB,gb:e.gb,gi:e.gi})}),g$=function(e){return e},S3=$(function(e,r){var n=e,a=Ue(r.e8),t=a.gl,i=a.gp,c=a.dk,l=o(Mt,r.bR,r.aP),u=l;return{bJ:fn(u),e_:n,bP:vn(u),cT:0,b4:$n(u),da:1,gl:-t,gp:-i,dk:-c}}),Ui=$(function(e,r){var n=e,a=r,t=Nr(a);return{gl:t*Nr(n),gp:t*Hr(n),dk:Hr(a)}}),L3=function(e){return o(S3,g$(!0),{aP:e.aP,e8:o(Ui,Ie(e.bI),Ie(e.bN)),bR:e.bR})},A3=function(e){var r=e;return r},x3=function(e){var r=e;return A3(r.eU)},b$=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),P3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),h$=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),_$=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),T3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),z3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),M3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Oi=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return A(M3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return A(b$,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return A(P3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return A(h$,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return A(z3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return A(_$,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return A(T3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ji={$:0},D3=_e(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=lt(c(u)),f=o(De,s.ec,e),g=o(xe,s.d9,r),d=o(De,s.ed,n),_=o(xe,s.ea,a),b=o(De,s.ee,t),C=o(xe,s.eb,i),S=c,y=v;e=f,r=g,n=d,a=_,t=b,i=C,c=S,l=y;continue e}else return{d9:r,ea:a,eb:i,ec:e,ed:n,ee:t}}),j3=w(function(e,r,n){var a=lt(e(r));return mt(D3,a.ec,a.d9,a.ed,a.ea,a.ee,a.eb,e,n)}),Kt=$(function(e,r){var n=e,a=r;return O(a,n)<1}),y$=function(e){return o(Kt,e.d9,e.ec)&&o(Kt,e.ea,e.ed)&&o(Kt,e.eb,e.ee)?e:{d9:o(xe,e.ec,e.d9),ea:o(xe,e.ed,e.ea),eb:o(xe,e.ee,e.eb),ec:o(De,e.ec,e.d9),ed:o(De,e.ed,e.ea),ee:o(De,e.ee,e.eb)}},ut=function(e){var r=e;return r},F3=function(e){var r=ut(e),n=r.a,a=r.b,t=r.c,i=Cn(n),c=wn(n),l=kn(n),u=Cn(a),v=wn(a),s=kn(a),f=Cn(t),g=wn(t),d=kn(t);return y$({d9:o(xe,i,o(xe,u,f)),ea:o(xe,c,o(xe,v,g)),eb:o(xe,l,o(xe,s,d)),ec:o(De,i,o(De,u,f)),ed:o(De,c,o(De,v,g)),ee:o(De,l,o(De,s,d))})},C$=ed,mr=function(e){return C$(sn(e))},w$=function(e){var r=e;return r},Dt=function(e){return C$(w$(e))},B3=$(function(e,r){var n=e,a=r;return{gl:a.gp*n.dk-a.dk*n.gp,gp:a.dk*n.gl-a.gl*n.dk,dk:a.gl*n.gp-a.gp*n.gl}}),Io=$(function(e,r){var n=e,a=r;return{gl:a.gl-n.gl,gp:a.gp-n.gp,dk:a.dk-n.dk}}),k$=function(e){return e},E3={gl:0,gp:0,dk:0},V3=$(function(e,r){var n=e,a=r,t=o(Ge,X(a.gl),o(Ge,X(a.gp),X(a.dk)));if(t){var i=a.dk/t,c=a.gp/t,l=a.gl/t,u=Br(l*l+c*c+i*i);return{gl:n*l/u,gp:n*c/u,dk:n*i/u}}else return E3}),R3=V3(k$(1)),S$=w(function(e,r,n){var a=o(Io,r,n),t=o(Io,e,r);return R3(o(B3,a,t))}),W3=function(e){var r=ut(e),n=r.a,a=r.b,t=r.c,i=Dt(p(S$,n,a,t));return F({p:i,er:mr(n)},{p:i,er:mr(a)},{p:i,er:mr(t)})},N3=$(function(e,r){return{$:2,a:e,b:r}}),H3=N3({dv:3,dF:0,eg:4}),G3=function(e){if(e.b){var r=e.a,n=e.b,a=H3(o(re,W3,e)),t=p(j3,F3,r,n);return A(b$,t,e,a,0)}else return Ji},qe=w(function(e,r,n){return F(e,r,n)}),Ce=w(function(e,r,n){var a=e,t=r,i=n;return{gl:a,gp:t,dk:i}}),L$=function(){var e=Re(1),r=Re(1),n=Re(1),a=o(ue,-.5,e),t=o(ue,-.5,r),i=o(ue,-.5,n),c=p(Ce,i,t,a),l=o(ue,.5,e),u=p(Ce,i,t,l),v=o(ue,.5,r),s=p(Ce,i,v,a),f=p(Ce,i,v,l),g=o(ue,.5,n),d=p(Ce,g,t,a),_=p(Ce,g,v,a),b=p(Ce,g,t,l),C=p(Ce,g,v,l);return Oi(G3(m([p(qe,c,_,d),p(qe,c,s,_),p(qe,u,b,C),p(qe,u,C,f),p(qe,d,_,C),p(qe,d,C,b),p(qe,c,f,s),p(qe,c,u,f),p(qe,c,d,b),p(qe,c,b,u),p(qe,s,C,_),p(qe,s,f,C)])))}(),za={$:0},I3=w(function(e,r,n){return{$:1,a:e,b:r,c:n}}),U3=w(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Dt(p(S$,u,l,c)),s={p:v,er:mr(u)},f={p:v,er:mr(l)},g={p:v,er:mr(c)};return o(z,s,o(z,f,o(z,g,n)))}),Yi=function(e){var r=e;return r.F},O3=E(function(e,r,n,a){if(r.$===1)return G;var t=r.a;if(n.$===1)return G;var i=n.a;if(a.$===1)return G;var c=a.a;return N(p(e,t,i,c))}),Uo=4294967295>>>32-ra,Oo=dv,J3=w(function(e,r,n){e:for(;;){var a=Uo&r>>>e,t=o(Oo,a,n);if(t.$){var v=t.a;return o(Oo,Uo&r,v)}else{var i=t.a,c=e-ra,l=r,u=i;e=c,r=l,n=u;continue e}}}),Y3=function(e){return e>>>5<<5},q3=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?G:O(e,Y3(n))>-1?N(o(Oo,Uo&e,i)):N(p(J3,a,e,t))}),qi=function(e){var r=e;return r.an},eo=$(function(e,r){return o(q3,e,qi(r))}),Z3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return A(O3,w(function(c,l,u){return F(c,l,u)}),o(eo,a,e),o(eo,t,e),o(eo,i,e))};return o(pa,r,Yi(e))},X3=w(function(e,r,n){e:for(;;){var a=o(mi,He,e),t=a.a,i=a.b;if(O(yo(t),He)<0)return o(ru,!0,{B:r,n,q:t});var c=i,l=o(z,Kl(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Zi=function(e){return e.b?p(X3,e,k,0):Xl},Q3=w(function(e,r,n){return e(r(n))}),K3=$(function(e,r){return!o(kt,o(Q3,Gd,e),r)}),eb=function(e){var r=e.a;return r},A$=$(function(e,r){var n=eb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(K3,a,r)?{F:r,an:e}:{F:o(En,a,r),an:e}}),rb=w(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jt=rb({dv:1,dF:3,eg:4}),Ga=$(function(e,r){var n=Go(r),a=Go(e);return h(F(a.gl,a.gp,a.dk),F(n.gl,n.gp,n.dk))}),el=p(zt,0,0,0),ro=Je(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(da,o(Ga,e,r),t);if(v.$){var f={p:el,er:mr(r)},g={p:el,er:mr(e)},d=u+1,_=u;return F(o(z,F(n,_,d),o(z,F(n,d,a),c)),o(z,f,o(z,g,l)),u+2)}else{var s=v.a;return F(o(z,F(n,s,a),c),l,u)}}),nb=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),f=e(l),g=e(c),d=a+2,_=a+1,b=a,C=e,S=r,y=v,x=a+3,B=fe(ro,s,g,d,b,r,fe(ro,f,s,_,d,r,fe(ro,g,f,b,_,r,t)));e=C,r=S,n=y,a=x,t=B;continue e}else{var Y=t,I=Y.a,H=Y.b;return h(I,be(H))}}),ab=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),f=e(l),g=e(c),d=n+2,_=n+1,b=n,C=p(_n,o(Ga,g,s),d,p(_n,o(Ga,s,f),_,p(_n,o(Ga,f,g),b,t))),S=o(z,F(b,_,d),a),y=e,x=v,B=n+3,Y=S,I=C;e=y,r=x,n=B,a=Y,t=I;continue e}else return F(a,t,n)}),Xr=w(function(e,r,n){var a=Z3(n),t=p(Mr,U3(r),k,a),i=L(ab,r,a,0,k,Li),c=i.a,l=i.b,u=i.c,v=L(nb,r,l,a,0,F(c,k,u)),s=v.a,f=v.b,g=nt(f)?t:ie(t,f);return p(I3,e,o(A$,Zi(g),s),o(jt,g,s))}),Jo=function(e){return{F:o(re,function(r){return F(3*r,3*r+1,3*r+2)},o(Ln,0,br(e)-1)),an:Zi(rr(o(re,function(r){var n=r.a,a=r.b,t=r.c;return m([n,a,t])},e)))}},x$=function(e){switch(e.$){case 0:return za;case 1:var a=e.a,r=e.b,n=o(re,ut,r);return p(Xr,a,Ve,Jo(n));case 2:var a=e.a,r=e.b,n=o(re,ut,r);return p(Xr,a,Ve,Jo(n));case 3:var a=e.a,t=e.b;return p(Xr,a,Ve,t);case 4:var a=e.a,t=e.b;return p(Xr,a,function(i){return i.er},t);case 5:var a=e.a,t=e.b;return p(Xr,a,function(i){return i.er},t);case 6:var a=e.a,t=e.b;return p(Xr,a,function(i){return i.er},t);case 7:var a=e.a,t=e.b;return p(Xr,a,function(i){return i.er},t);case 8:return za;case 9:return za;default:return za}},rl=x$(L$),tb=function(e){var r=e;return r.aQ},P$={$:0},j=P$,lr=$(function(e,r){return{$:1,a:e,b:r}}),ob={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bM"}},ib=1029,cb=function(e){return{$:5,a:e}},T$=function(e){var r=e;return cb(r)},lb=T$(ib),ub=1028,$b=T$(ub),wr=w(function(e,r,n){return r===1?e?o(z,lb,n):o(z,$b,n):n}),z$={src:`
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
    `,attributes:{position:"er",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},no=E(function(e,r,n,a){return o(lr,r,_e(function(t,i,c,l,u,v,s,f){return L(Be,p(wr,l,a,f),z$,ob,n,{bM:e,b:c,c:i,d:v,e:t,f:u})}))}),vb={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aC"}},M$={src:`
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
    `,attributes:{position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},kr=E(function(e,r,n,a){return o(lr,r,_e(function(t,i,c,l,u,v,s,f){return L(Be,p(wr,l,a,f),M$,vb,n,{aC:e,b:c,c:i,d:v,e:t,f:u})}))}),D$=$(function(e,r){return{$:3,a:e,b:r}}),fb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aC",pointRadius:"b2",sceneProperties:"e"}},j$={src:`
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
    `,attributes:{position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b2",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},sb=E(function(e,r,n,a){return o(D$,n,_e(function(t,i,c,l,u,v,s,f){return L(Be,f,j$,fb,a,{aC:e,b:c,c:i,b2:r,d:v,e:t,f:u})}))}),db={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aT",sceneProperties:"e"}},Xi=function(e){var r=e;return r},F$=rd,Sr=he(function(e,r,n,a,t){return o(lr,n,_e(function(i,c,l,u,v,s,f,g){return L(Be,p(wr,u,t,g),M$,db,a,{aT:o(F$,Xi(r),e),b:l,c,d:s,e:i,f:v})}))}),mb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aT",pointRadius:"b2",sceneProperties:"e"}},pb=he(function(e,r,n,a,t){return o(D$,a,_e(function(i,c,l,u,v,s,f,g){return L(Be,g,j$,mb,t,{aT:o(F$,Xi(r),e),b:l,c,b2:n,d:s,e:i,f:v})}))}),gb={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bk",lights34:"bW",lights56:"bX",lights78:"bY",materialColor:"cy",sceneProperties:"e",viewMatrix:"f"}},B$={src:`
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
    `,attributes:{normal:"p",position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ma=E(function(e,r,n,a){return o(lr,r,_e(function(t,i,c,l,u,v,s,f){var g=s.a,d=s.b;return L(Be,p(wr,l,a,f),B$,gb,n,{S:d,bk:g.bk,bW:g.bW,bX:g.bX,bY:g.bY,cy:e,b:c,c:i,d:v,e:t,f:u})}))}),E$={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bk",lights34:"bW",lights56:"bX",lights78:"bY",materialColorTexture:"cz",normalMapTexture:"a0",sceneProperties:"e",useNormalMap:"a5",viewMatrix:"f"}},V$={src:`
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
    `,attributes:{normal:"p",position:"er",tangent:"eG",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},bb=Je(function(e,r,n,a,t,i){return o(lr,a,_e(function(c,l,u,v,s,f,g,d){var _=g.a,b=g.b;return L(Be,p(wr,v,i,d),V$,E$,t,{S:b,bk:_.bk,bW:_.bW,bX:_.bX,bY:_.bY,cz:e,b:u,c:l,a0:r,d:f,e:c,a5:n,f:s})}))}),R$={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"ce",constantBaseColor:"cg",constantMetallic:"ch",constantRoughness:"ci",enabledLights:"S",lights12:"bk",lights34:"bW",lights56:"bX",lights78:"bY",metallicTexture:"cD",normalMapTexture:"a0",roughnessTexture:"c1",sceneProperties:"e",useNormalMap:"a5",viewMatrix:"f"}},hb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(lr,u,_e(function(f,g,d,_,b,C,S,y){var x=S.a,B=S.b;return L(Be,p(wr,_,s,y),V$,R$,v,{ce:e,cg:r,ch:i,ci:a,S:B,bk:x.bk,bW:x.bW,bX:x.bX,bY:x.bY,cD:t,b:d,c:g,a0:c,d:C,c1:n,e:f,a5:l,f:b})}))}}}}}}}}}}},_b={src:`
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
    `,attributes:{},uniforms:{baseColor:"cd",enabledLights:"S",lights12:"bk",lights34:"bW",lights56:"bX",lights78:"bY",metallic:"cC",roughness:"c0",sceneProperties:"e",viewMatrix:"f"}},Da=Je(function(e,r,n,a,t,i){return o(lr,a,_e(function(c,l,u,v,s,f,g,d){var _=g.a,b=g.b;return L(Be,p(wr,v,i,d),B$,_b,t,{cd:e,S:b,bk:_.bk,bW:_.bW,bX:_.bX,bY:_.bY,cC:n,b:u,c:l,d:f,c0:r,e:c,f:s})}))}),yb=function(e){return{$:0,a:e}},nl=$(function(e,r){return{$:1,a:e,b:r}}),Qn=$(function(e,r){if(r.$){var n=r.a.E;return h(n,1)}else return r.a,h(e,0)}),Cb=function(e){return A(Vn,$n(e),vn(e),fn(e),1)},Qi=A(Vn,0,0,0,0),Ia=$(function(e,r){if(r.$){var a=r.a.E;return h(a,Qi)}else{var n=r.a;return h(e,Cb(n))}}),wb=$(function(e,r){var n=h(e,r);if(n.a.$){var t=n.a.a.E;return o(nl,h(t,Qi),o(Qn,t,r))}else if(n.b.$){var t=n.b.a.E;return o(nl,o(Ia,t,e),o(Qn,t,r))}else{var a=n.a.a;return n.b.a,yb(a)}}),kb=w(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ja=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Sb=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Lb=function(e){return o(en,e,1)},Yo=o(en,0,0),pn=$(function(e,r){if(r.$){var a=r.a.E;return h(a,Yo)}else{var n=r.a;return h(e,Lb(n))}}),Ab=E(function(e,r,n,a){var t=A(Sb,e,r,n,a);if(t.a.$){var u=t.a.a.E;return A(ja,h(u,Qi),o(pn,u,r),o(pn,u,n),o(Qn,u,a))}else if(t.b.$){var u=t.b.a.E;return A(ja,o(Ia,u,e),h(u,Yo),o(pn,u,n),o(Qn,u,a))}else if(t.c.$){var u=t.c.a.E;return A(ja,o(Ia,u,e),o(pn,u,r),h(u,Yo),o(Qn,u,a))}else if(t.d.$){var u=t.d.a.E;return A(ja,o(Ia,u,e),o(pn,u,r),o(pn,u,n),h(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(kb,i,c,l)}}),xb={src:`
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
    `,attributes:{},uniforms:{backlight:"cb",colorTexture:"bM",sceneProperties:"e"}},ao=he(function(e,r,n,a,t){return o(lr,n,_e(function(i,c,l,u,v,s,f,g){return L(Be,p(wr,u,t,g),z$,xb,a,{cb:Xi(r),bM:e,b:l,c,d:s,e:i,f:v})}))}),W$={src:`
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
    `,attributes:{normal:"p",position:"er",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Pb=E(function(e,r,n,a){return o(lr,r,_e(function(t,i,c,l,u,v,s,f){var g=s.a,d=s.b;return L(Be,p(wr,l,a,f),W$,E$,n,{S:d,bk:g.bk,bW:g.bW,bX:g.bX,bY:g.bY,cz:e,b:c,c:i,a0:e,d:v,e:t,a5:0,f:u})}))}),Tb=Qo(function(e,r,n,a,t,i,c,l,u){return o(lr,c,_e(function(v,s,f,g,d,_,b,C){var S=b.a,y=b.b;return L(Be,p(wr,g,u,C),W$,R$,l,{ce:e,cg:r,ch:i,ci:a,S:y,bk:S.bk,bW:S.bW,bX:S.bX,bY:S.bY,cD:t,b:f,c:s,a0:e,d:_,c1:n,e:v,a5:0,f:d})}))}),la=w(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),zb=function(e){var r=e;return p(la,r.ec,r.d9,.5)},Mb=function(e){var r=e;return p(la,r.ed,r.ea,.5)},Db=function(e){var r=e;return p(la,r.ee,r.eb,.5)},jb=function(e){return p(Ce,zb(e),Mb(e),Db(e))},Z=function(e){var r=$$(e),n=r.a,a=r.b,t=r.c;return{e$:sn(jb(e)),fk:n/2,fl:a/2,fm:t/2}},Ki=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return j;case 1:return j;case 2:return j;case 3:return j;case 4:return j;case 5:var t=r.a,c=r.c,a=r.d;return A(no,l,Z(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return A(no,l,Z(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return A(no,l,Z(t),c,a);case 8:return j;case 9:return j;default:return j}}else{var n=e.b.a;switch(r.$){case 0:return j;case 1:var t=r.a,c=r.c,a=r.d;return A(kr,n,Z(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return A(kr,n,Z(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return A(kr,n,Z(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return A(kr,n,Z(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return A(kr,n,Z(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return A(kr,n,Z(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return A(kr,n,Z(t),c,a);case 8:var t=r.a,c=r.c;return A(kr,n,Z(t),c,0);case 9:var t=r.a,c=r.c;return A(kr,n,Z(t),c,0);default:var t=r.a,i=r.b,c=r.d;return A(sb,n,i,Z(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,v=e.c;switch(r.$){case 0:return j;case 1:return j;case 2:return j;case 3:return j;case 4:return j;case 5:var t=r.a,c=r.c,a=r.d;return L(ao,l,v,Z(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ao,l,v,Z(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ao,l,v,Z(t),c,a);case 8:return j;case 9:return j;default:return j}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return j;case 1:var t=r.a,c=r.c,a=r.d;return L(Sr,u,v,Z(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(Sr,u,v,Z(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(Sr,u,v,Z(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(Sr,u,v,Z(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(Sr,u,v,Z(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(Sr,u,v,Z(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(Sr,u,v,Z(t),c,a);case 8:var t=r.a,c=r.c;return L(Sr,u,v,Z(t),c,0);case 9:var t=r.a,c=r.c;return L(Sr,u,v,Z(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(pb,u,v,i,Z(t),c)}}case 2:e.a;var s=e.b,I=e.c,f=o(wb,s,I);if(f.$){var _=f.a,b=_.a;_.b;var C=f.b,S=C.a,y=C.b;switch(r.$){case 0:return j;case 1:return j;case 2:return j;case 3:return j;case 4:return j;case 5:return j;case 6:var t=r.a,c=r.c,d=r.d;return A(Pb,b,Z(t),c,d);case 7:var t=r.a,c=r.c,d=r.d;return fe(bb,b,S,y,Z(t),c,d);case 8:return j;case 9:return j;default:return j}}else{var g=f.a;switch(r.$){case 0:return j;case 1:return j;case 2:var t=r.a,c=r.c,d=r.d;return A(Ma,g,Z(t),c,d);case 3:return j;case 4:var t=r.a,c=r.c,d=r.d;return A(Ma,g,Z(t),c,d);case 5:return j;case 6:var t=r.a,c=r.c,d=r.d;return A(Ma,g,Z(t),c,d);case 7:var t=r.a,c=r.c,d=r.d;return A(Ma,g,Z(t),c,d);case 8:return j;case 9:return j;default:return j}}default:e.a;var x=e.b,B=e.c,Y=e.d,I=e.e,H=A(Ab,x,B,Y,I);if(H.$){var ne=H.a,ee=ne.a,se=ne.b,me=H.b,ve=me.a,ye=me.b,Ne=H.c,Ee=Ne.a,Dr=Ne.b,jr=H.d,S=jr.a,y=jr.b;switch(r.$){case 0:return j;case 1:return j;case 2:return j;case 3:return j;case 4:return j;case 5:return j;case 6:var t=r.a,c=r.c,a=r.d;return uv(Tb,ee,se,ve,ye,Ee,Dr,Z(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return hb(ee)(se)(ve)(ye)(Ee)(Dr)(S)(y)(Z(t))(c)(a);case 8:return j;case 9:return j;default:return j}}else{var J=H.a,q=H.b,W=H.c;switch(r.$){case 0:return j;case 1:return j;case 2:var t=r.a,c=r.c,a=r.d;return fe(Da,J,q,W,Z(t),c,a);case 3:return j;case 4:var t=r.a,c=r.c,a=r.d;return fe(Da,J,q,W,Z(t),c,a);case 5:return j;case 6:var t=r.a,c=r.c,a=r.d;return fe(Da,J,q,W,Z(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return fe(Da,J,q,W,Z(t),c,a);case 8:return j;case 9:return j;default:return j}}}}),to=function(e){var r=e;return r.gl},oo=function(e){var r=e;return r.gp},io=function(e){var r=e;return r.dk},Fb=function(e){var r=e,n=io(r.dl),a=oo(r.dl),t=to(r.dl),i=io(r.dj),c=oo(r.dj),l=to(r.dj),u=io(r.di),v=oo(r.di),s=to(r.di);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},Bb=function(e){var r=sn(Bn(e)),n=Ue(un(e)),a=Ue(ln(e)),t=Ue(cn(e));return{dJ:Fb(e),s:t.gl,t:t.gp,u:t.dk,v:a.gl,w:a.gp,x:a.dk,y:n.gl,z:n.gp,A:n.dk,J:r.gl,K:r.gp,L:r.dk,b6:1}},gn=$(function(e,r){return{$:5,a:e,b:r}}),Ft=$(function(e,r){var n=r;switch(n.$){case 0:return j;case 5:var a=n.a,t=n.b,i=o(n$,a,e);return o(gn,i,t);case 1:return o(gn,e,n);case 3:return o(gn,e,n);case 2:return o(gn,e,n);default:return o(gn,e,n)}}),N$=$(function(e,r){return o(Ft,Bb(e),r)}),ec=function(e){return{$:2,a:e}},Eb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.e$;return{e$:{gl:n*i.gl,gp:a*i.gp,dk:t*i.dk},fk:n*r.fk,fl:a*r.fl,fm:t*r.fm}}),Vb=td,Rb=ad,al=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,f=e.b,g=e.c,d=Rb(a),_=d.gl,b=d.gp,C=d.dk,S=d.eN,y=Vb({eN:S,gl:_*s,gp:b*f,dk:C*g});return mt(r,n,y,t,i,c,l,u,v)}}}}}}}}}},qo=$(function(e,r){switch(r.$){case 0:return P$;case 5:var n=r.a,a=r.b;return o(gn,n,o(qo,e,a));case 1:var t=r.a,i=r.b;return o(lr,o(Eb,e,t),o(al,e,i));case 3:return r;case 2:var i=r.a;return ec(o(al,e,i));default:var c=r.a;return s$(o(re,qo(e),c))}}),rc=$(function(e,r){var n=r;return o(qo,e,n)}),H$={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},G$=7683,I$=7682,Wb=p(Ri,{cx:0,cZ:0,dh:15},{bf:Fe,bw:Pn,bE:Fe,bF:G$},{bf:Fe,bw:Pn,bE:Fe,bF:I$}),Nb=p(Ri,{cx:0,cZ:0,dh:15},{bf:Fe,bw:Pn,bE:Fe,bF:I$},{bf:Fe,bw:Pn,bE:Fe,bF:G$}),U$=$(function(e,r){return e?o(z,Nb,r):o(z,Wb,r)}),Hb={src:`
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
    `,attributes:{normal:"p",position:"er"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b7",viewMatrix:"f"}},Gb=function(e){if(e.$){var r=e.c;return N(_e(function(n,a,t,i,c,l,u,v){return L(Be,o(U$,i,v),Hb,H$,r,{b:t,c:a,d:l,e:n,b7:u,f:c})}))}else return G},$t=function(e){var r=Gb(e);if(r.$)return j;var n=r.a;return ec(n)},Ib=E(function(e,r,n,a){var t=o(Ki,n,L$),i=function(){var s=h(e,r);return s.a?s.b?_a(m([t,$t(rl)])):t:s.b?$t(rl):j}(),c=tb(a),l=c.a,u=c.b,v=c.c;return o(N$,x3(a),o(rc,F(l,u,v),i))}),O$=$(function(e,r){return A(Ib,!0,!0,e,r)}),co=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),lo=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Ub=dr({gl:-1,gp:0,dk:0}),Ob=dr({gl:0,gp:-1,dk:0}),Jb=Je(function(e,r,n,a,t,i){var c=o(co,n,i)?Pi:zi,l=o(co,r,t)?Gi:Ob,u=o(co,e,a)?Ou:Ub,v=F(Se(o(Pr,e,a)),Se(o(Pr,r,t)),Se(o(Pr,n,i))),s=p(Ce,o(lo,e,a),o(lo,r,t),o(lo,n,i)),f=on({cK:s,di:u,dj:l,dl:c});return{eU:f,aQ:v}}),J$=$(function(e,r){return fe(Jb,Cn(e),wn(e),kn(e),Cn(r),wn(r),kn(r))}),Y$=$(function(e,r){var n=r/2;return o(O$,e,o(J$,p(ca,-n,-n,-n),p(ca,n,n,n)))}),Yb=$(function(e,r){return o(ke,function(n){if(n.$===2){var a=n.a;return a}else return wi},o(da,e,r.aB))}),qb=$(function(e,r){return o(ge,wi,jn(o(pa,Yb(e),r)))}),Zb=$(function(e,r){return o(qb,e,r.e2)}),Gr=Zb,Xb=function(e){return _a(e)},Rn=Xb,tl=function(e){return{$:0,a:e}},q$=w(function(e,r,n){return{$:2,a:e,b:r,c:n}}),uo=function(e){return p(Bi,0,1,e<=.04045?e/12.92:o(Wr,(e+.055)/1.055,2.4))},Qb=function(e){var r=Su(e),n=r.cY,a=r.cm,t=r.cf;return p(zt,uo(n),uo(a),uo(t))},Tr=function(e){return p(q$,0,tl(Qb(e)),tl(0))},Kb=w(function(e,r,n){return{gl:e,gp:r,dk:n}}),eh=function(e){var r=w$(e);return{dJ:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:r.gl,K:r.gp,L:r.dk,b6:1}},Z$=$(function(e,r){return o(Ft,eh(e),r)}),rh=$(function(e,r){return o(Z$,e,r)}),nc=function(e){var r=e.a,n=e.b,a=e.c;return rh(p(Kb,r,n,a))},dn=function(e){return nc(F(e,0,0))},Ir=function(e){return nc(F(0,e,0))},pr=function(e){return nc(F(0,0,e))},ol=$(function(e,r){var n=function(a){var t=a.a,i=a.b;return o(Ir,i,o(dn,t,o(pr,-.495,o(Y$,Tr(o(Gr,"board color",e)),1))))};return Rn(o(re,n,xn(Te(r.k).bV)))}),ua=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=F(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(O$,e,o(J$,p(ca,-c,-l,-u),p(ca,c,l,u)))}),we=function(e){return e*Ke/180},nh=function(e){return o(Wr,e,2)},ah=$(function(e,r){var n=r,a=sn(Ti(e)),t=.5*n,i=Nr(t),c=Hr(t),l=Ue(xt(e)),u=l.gl*c,v=i*u,s=u*u,f=l.gp*c,g=i*f,d=u*f,_=f*f,b=1-2*(s+_),C=l.dk*c,S=i*C,y=2*(d-S),x=2*(d+S),B=u*C,Y=2*(B+g),I=2*(B-g),H=f*C,J=2*(H-v),q=2*(H+v),W=C*C,ne=1-2*(_+W),ee=1-2*(s+W);return{dJ:!0,s:ne,t:x,u:I,v:y,w:ee,x:q,y:Y,z:J,A:b,J:a.gl-ne*a.gl-y*a.gp-Y*a.dk,K:a.gp-x*a.gl-ee*a.gp-J*a.dk,L:a.dk-I*a.gl-q*a.gp-b*a.dk,b6:1}}),th=w(function(e,r,n){return o(Ft,o(ah,e,r),n)}),Bt=w(function(e,r,n){return p(th,e,r,n)}),il=$(function(e,r){var n=e.a,a=e.b,t=a.a,i=a.b,c=a.c;return o(Bt,o(_r,xi(n),dr({gl:t,gp:i,dk:c})),Ie(r))}),X$=w(function(e,r,n){var a=r.c4;switch(a.$){case 1:var v=a.a.ak,s=a.a.b8,f=a.a.bq;if(a.a.cF,te(s,n)){var t=function(){switch(f){case 0:return h({gl:.5,gp:.5,dk:-.5},F(-1,0,0));case 1:return h({gl:-.5,gp:-.5,dk:-.5},F(1,0,0));case 2:return h({gl:-.5,gp:.5,dk:-.5},F(0,-1,0));default:return h({gl:.5,gp:-.5,dk:-.5},F(0,1,0))}}(),i=o(de,"duration of step animation",e),c=(e.W-v)/i,l=nh(c),u=o(yn,we(90),l*we(90));return o(il,t,u)}else return Ve;case 2:var v=a.a.ak,s=a.a.b8,f=a.a.bq;if(te(s,n)){var t=function(){switch(f){case 0:return h({gl:.5,gp:.5,dk:-.5},F(-1,0,0));case 1:return h({gl:-.5,gp:-.5,dk:-.5},F(1,0,0));case 2:return h({gl:-.5,gp:.5,dk:-.5},F(0,-1,0));default:return h({gl:.5,gp:-.5,dk:-.5},F(0,1,0))}}(),i=o(de,"duration of mistake animation",e),c=(e.W-v)/i,l=Hr(Ke*c),u=p(Bi,we(0),we(45),l*we(45));return o(il,t,u)}else return Ve;default:return Ve}}),oh=o(_r,cr,Pt),rn=$(function(e,r){return p(Bt,oh,Ie(e),r)}),ih=o(_r,cr,Ii),vt=$(function(e,r){return p(Bt,ih,Ie(e),r)}),ch=$(function(e,r){var n=o(de,"cubes side length",e),a=o(Gr,"color 2",e),t=o(pr,-(n/4),o(ua,Tr(a),F(n,n,n/2))),i=o(Gr,"color 1",e),c=o(pr,n/4,o(ua,Tr(i),F(n,n,n/2))),l=Te(r.k).dP,u=l.a,v=u.a,s=u.b,f=l.b,g=function(){if(f.b)switch(f.a){case 2:return f.a,f.b,rn(we(180));case 1:return f.a,f.b,rn(we(90));default:return f.a,f.b,vt(-we(90))}else switch(f.a){case 2:return f.a,f.b,Ve;case 1:return f.a,f.b,rn(-we(90));default:return f.a,f.b,vt(we(90))}}();return o(Ir,s,o(dn,v,o(pr,n/2,A(X$,e,r,h(v,s),g(Rn(m([c,t])))))))}),lh=w(function(e,r,n){return{l:o(_r,e,r),fz:Se(n.fz),fV:Se(n.fV)}}),uh=function(e){var r=e;return r.l},Kn=function(e){var r=e;return Nr(r)},$h=$(function(e,r){var n=e.er,a=e.p;return o(z,{p:Dt(a),er:mr(n)},r)}),vh=dt(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=fn(l.er),s=vn(l.er),f=$n(l.er),g=o(yn,e,f),d=o(Ge,r,f),_=o(yn,n,s),b=o(Ge,a,s),C=o(yn,t,v),S=o(Ge,i,v),y=u;e=g,r=d,n=_,a=b,t=C,i=S,c=y;continue e}else return y$({d9:r,ea:a,eb:i,ec:e,ed:n,ee:t})}),Q$=$(function(e,r){var n=fn(e.er),a=vn(e.er),t=$n(e.er);return Ko(vh,t,t,a,a,n,n,r)}),fh=function(e){var r=p(Hl,$h,k,qi(e));if(r.b){var n=r.a,a=r.b,t=o(jt,r,Yi(e)),i=o(Q$,n,a);return A(h$,i,e,t,0)}else return Ji},cl=$(function(e,r){var n=e,a=r,t=n.dj,i=t,c=n.di,l=c;return{gl:a.gl*l.gl+a.gp*i.gl,gp:a.gl*l.gp+a.gp*i.gp,dk:a.gl*l.dk+a.gp*i.dk}}),ft=function(e){var r=e;return Hr(r)},qn=function(e){var r=e;return r},Zo=function(e){return Ie(2*Ke*e)},ll=Uu({cK:cr,di:Pt,dj:Ii}),K$=function(){var e=72,r=o(Yu,e,Zo(1)),n=Re(1),a=qn(Pi),t=qn(zi),i=Re(1),c=o(ue,.5,i),l=p(Ce,Lr,Lr,c),u=o(ue,-.5,i),v=p(Ce,Lr,Lr,u),s=function(d){var _=o(ue,d,r),b=qn(o(cl,ll,No(_))),C=o(ue,Kn(_),n),S=o(ue,ft(_),n),y=p(Ce,C,S,c),x=p(Ce,C,S,u),B=o(ta,e,d+1),Y=o(ue,B,r),I=qn(o(cl,ll,No(Y))),H=o(ue,Kn(Y),n),J=o(ue,ft(Y),n),q=p(Ce,H,J,u),W=p(Ce,H,J,c);return m([F({p:t,er:v},{p:t,er:q},{p:t,er:x}),F({p:b,er:x},{p:I,er:q},{p:I,er:W}),F({p:b,er:x},{p:I,er:W},{p:b,er:y}),F({p:a,er:l},{p:a,er:y},{p:a,er:W})])},f=o(re,s,o(Ln,0,e-1)),g=Jo(rr(f));return Oi(fh(g))}(),ul=x$(K$),sh=function(e){var r=e,n=X(r.dk),a=X(r.gp),t=X(r.gl);if(O(t,a)<1)if(O(t,n)<1){var i=Br(r.dk*r.dk+r.gp*r.gp);return{gl:0,gp:-r.dk/i,dk:r.gp/i}}else{var i=Br(r.gp*r.gp+r.gl*r.gl);return{gl:-r.gp/i,gp:r.gl/i,dk:0}}else if(O(a,n)<1){var i=Br(r.dk*r.dk+r.gl*r.gl);return{gl:r.dk/i,gp:0,dk:-r.gl/i}}else{var i=Br(r.gl*r.gl+r.gp*r.gp);return{gl:-r.gp/i,gp:r.gl/i,dk:0}}},dh=function(e){var r=sh(e),n=r,a=n,t=e,i=t,c={gl:i.gp*a.dk-i.dk*a.gp,gp:i.dk*a.gl-i.gl*a.dk,dk:i.gl*a.gp-i.gp*a.gl};return h(r,c)},mh=function(e){var r=xt(e),n=dh(r),a=n.a,t=n.b;return on({cK:Ti(e),di:a,dj:t,dl:r})},ph=function(e){var r=e;return r.fz},gh=function(e){var r=e;return r.fV},bh=E(function(e,r,n,a){var t=mh(uh(a)),i=o(Ki,n,K$),c=function(){var f=h(e,r);return f.a?f.b?_a(m([i,$t(ul)])):i:f.b?$t(ul):j}(),l=gh(a),u=l,v=ph(a),s=v;return o(N$,t,o(rc,F(u,u,s),c))}),hh=$(function(e,r){return A(bh,!0,!0,e,r)}),_h=w(function(e,r,n){return o(hh,e,p(lh,cr,Gi,{fz:Re(n),fV:Re(r)}))}),yh=$(function(e,r){return(r-eu(r/e)*e)/e}),Ch=function(e){return 2*Ke*e},Xo=E(function(e,r,n,a){return e+(r-e)*(1+Nr(Ch(o(yh,n,a))))/2}),wh=$(function(e,r){var n=Te(r.k).bV.fy,a=n.a,t=n.b;return o(Ir,t,o(dn,a,o(pr,A(Xo,-.3,-.4,.5,e.W),o(rn,we(90),p(_h,Tr(o(Gr,"finish mark color",e)),.3,1)))))}),kh=$(function(e,r){var n=o(de,"cubes side length",e),a=o(Gr,"color 2",e),t=o(pr,-(n/4),o(ua,Tr(a),F(n,n,n/2))),i=o(Gr,"color 1",e),c=o(pr,n/4,o(ua,Tr(i),F(n,n,n/2))),l=Te(r.k).cU,u=l.a,v=u.a,s=u.b,f=l.b,g=function(){if(f.b)switch(f.a){case 2:return f.a,f.b,rn(we(180));case 1:return f.a,f.b,rn(we(90));default:return f.a,f.b,vt(-we(90))}else switch(f.a){case 2:return f.a,f.b,Ve;case 1:return f.a,f.b,rn(-we(90));default:return f.a,f.b,vt(we(90))}}();return o(Ir,s,o(dn,v,o(pr,n/2,A(X$,e,r,h(v,s),g(Rn(m([c,t])))))))}),Sh=E(function(e,r,n,a){var t=F(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(_){var b=_<0?_+1:_>1?_-1:_;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},f=s(i-1/3),g=s(i),d=s(i+1/3);return A(Yr,d,g,f,a)}),Lh=w(function(e,r,n){return A(Sh,e,r,n,1)}),Ah=$(function(e,r){var n=sn(e),a=1-r;return{dJ:r>=0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:a*n.gl,K:a*n.gp,L:a*n.dk,b6:r}}),xh=w(function(e,r,n){return o(Ft,o(Ah,e,r),n)}),Ph=w(function(e,r,n){return p(xh,e,r,n)}),Th=Ph(cr),zh=A(Yr,255/255,255/255,255/255,1),Mh=$(function(e,r){var n=function(i){var c=r.c4;return c.$===3?p(Lh,A(Xo,0,1,6,e.W+.03*i),1,.8):zh},a=function(i){var c=r.c4;return c.$===3?o(K,Th(.9),pr(A(Xo,.1,.7,6,e.W+.3*i))):Ve},t=$(function(i,c){var l=c.a,u=c.b;return o(Ir,u,o(dn,l,o(pr,-.49,o(a,i,o(Y$,Tr(n(i)),1)))))});return Rn(o(va,t,xn(Te(r.k).eo)))}),Dh=A(Yr,164/255,0/255,0/255,1),jh=A(Yr,239/255,41/255,41/255,1),Fh=function(e){var r=e;return r.e$},Bh=function(e){var r=e;return r.fV},$l=$(function(e,r){var n=e,a=r;return n/a}),Eh=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(z,i,t);if(te(r,e))return c;var l=e,u=r-1,v=n,s=a,f=c;e=l,r=u,n=v,a=s,t=f;continue e}}),vl=$(function(e,r){return e<1?k:L(Eh,0,e,e,r,k)}),Vh=$(function(e,r){var n=e.er,a=e.p,t=e.N,i=t,c=i.a,l=i.b;return o(z,{p:Dt(a),er:mr(n),N:o(en,c,l)},r)}),Rh=function(e){var r=p(Hl,Vh,k,qi(e));if(r.b){var n=r.a,a=r.b,t=o(jt,r,Yi(e)),i=o(Q$,n,a);return A(_$,i,e,t,0)}else return Ji},Wh=function(){var e=Re(1),r=72,n=o(Ln,0,r-1),a=o(vl,r,o(la,Lr,Zo(1))),t=si(r/2),i=o(Ln,0,t-1),c=o(vl,t,o(la,Jn(90),Jn(-90))),l=Zi(rr(o(re,function(s){return o(re,function(f){return{p:qn(o(Ui,s,f)),er:p(Ce,o(ue,Kn(f)*Kn(s),e),o(ue,Kn(f)*ft(s),e),o(ue,ft(f),e)),N:h(o($l,s,Zo(1)),o($l,o(Xn,Jn(90),f),Jn(180)))}},c)},a))),u=$(function(s,f){return s*(t+1)+f}),v=rr(o(re,function(s){return rr(o(re,function(f){var g=o(u,s+1,f),d=o(u,s,f),_=o(u,s+1,f+1),b=o(u,s,f+1);return m([F(b,_,g),F(b,g,d)])},i))},n));return Oi(Rh(o(A$,l,v)))}(),st=72,Fa=2*st,Nh=$(function(e,r){e:for(;;){var n=Fa+1,a=o(ta,Fa,2*e+3),t=o(ta,Fa,2*e+2),i=2*e+1,c=2*e,l=Fa,u=o(z,F(l,c,t),o(z,F(c,a,t),o(z,F(c,i,a),o(z,F(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Hh=w(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Gh=$(function(e,r){e:for(;;){var n=p(Hh,0,2*Ke,e/st),a={bH:n,b$:0,b5:1},t={bH:n,b$:1,b5:1},i=o(z,a,o(z,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Ih=function(){var e=o(Gh,st-1,m([{bH:0,b$:0,b5:0},{bH:0,b$:1,b5:0}])),r=o(Nh,st-1,k);return o(jt,e,r)}(),Uh={src:`
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
    `,attributes:{angle:"bH",offsetScale:"b$",radiusScale:"b5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b7",viewMatrix:"f"}},fl=function(e){return ec(_e(function(r,n,a,t,i,c,l,u){return L(Be,o(U$,!0,u),Uh,H$,Ih,{aC:p(zt,0,0,1),b:a,c:n,d:c,e:r,b7:l,f:i})}))},Oh=E(function(e,r,n,a){var t=o(Ki,n,Wh),i=function(){var u=h(e,r);return u.a?u.b?_a(m([t,fl()])):t:u.b?fl():j}(),c=Bh(a),l=c;return o(Z$,o(Io,cr,Fh(a)),o(rc,F(l,l,l),i))}),Jh=$(function(e,r){return A(Oh,!0,!0,e,r)}),Yh=w(function(e,r,n){return{$:1,a:e,b:r,c:n}}),qh=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Zh=$(function(e,r){return{$:0,a:e,b:r}}),Xh=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Zh,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Yh,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(q$,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return L(qh,n,a,t,i,c)}},Qh=Xh,Kh=$(function(e,r){return{e$:r,fV:Se(e)}}),e2=$(function(e,r){return o(Jh,Qh(e),o(Kh,Re(r),cr))}),r2=$(function(e,r){var n=e.cV.dI?jh:Dh,a=r.ba,t=a.a,i=a.b;return o(Ir,i,o(dn,t,o(e2,Tr(n),.2)))}),n2=$(function(e,r){return h(e,r)}),a2=function(e){var r=e.fy,n=e.bo;return p(Yl,n2,o(z,r,n),n)},ev=$(function(e,r){var n=e.a,a=e.b,t=function(i){var c=i.a,l=c.a,u=c.b,v=i.b,s=v.a,f=v.b;return a?te(n,c)&&te(s,l+1)||te(n,v)&&te(s,l-1):te(n,c)&&te(f,u-1)||te(n,v)&&te(f,u+1)};return o(kt,t,a2(r))}),t2=o(_r,cr,Tt),o2=$(function(e,r){return p(Bt,t2,Ie(e),r)}),rv=$(function(e,r){var n=r.a,a=n.a,t=n.b,i=r.b,c=1-o(de,"cubes side length",e),l=o(Ir,-.5,o(ua,Tr(o(Gr,"wall color",e)),F(1+c,c,c))),u=o(o2,we(90),l);return o(Ir,t,o(dn,a,function(){return i?u:l}()))}),Ba=$(function(e,r){return{$:0,a:e,b:r}}),i2=function(e){return m([o(Ba,e,0),o(Ba,e,1),o(Ba,o(tt,0,e),0),o(Ba,o(tt,2,e),1)])},nv=function(e){return o(Di,i2,xn(e))},c2=$(function(e,r){var n=o(ge,Te(r.k).bV,r.R.ei);return Rn(o(re,rv(e),o(En,function(a){return!o(ev,a,n)},nv(n))))}),l2=$(function(e,r){return Rn(o(re,rv(e),o(En,function(n){return!o(ev,n,Te(r.k).eo)},nv(Te(r.k).bV))))}),u2=function(e){return e},$2=function(e){return u2(1.2*o(Wr,2,e))},$o=Fi({gl:.37208,gp:.37529}),v2={$:5},f2=v2,s2=Fi({gl:.44757,gp:.40745}),d2=function(e){return e},sl=function(e){return e},vo=function(e){return e},m2={$:1},p2=m2,g2=$(function(e,r){var n=e,a=sn(r.er),t=a.gl,i=a.gp,c=a.dk,l=o(Mt,r.bR,r.aP),u=l;return{bJ:fn(u),e_:n,bP:vn(u),cT:0,b4:$n(u),da:2,gl:t,gp:i,dk:c}}),dl=function(e){return o(g2,g$(!0),{aP:e.aP,bR:e.bR,er:xi(e.er)})},b2=$(function(e,r){var n=e,a=r;return O(a,n)>0}),ml=function(e){var r=e;return r},h2=function(e){e:for(;;){if(te(e.dG,Lr)&&te(e.dH,Lr))return Me;if(o(b2,Se(e.dG),Se(e.dH))){var r={aP:e.aP,dG:e.dH,dH:e.dG,eJ:ct(e.eJ)};e=r;continue e}else{var n=X(ml(e.dH)/Ke),a=X(ml(e.dG)/Ke),t=Ue(e.eJ),i=t.gl,c=t.gp,l=t.dk,u=o(Mt,k$(1),e.aP),v=u;return{bJ:a*fn(v),e_:!1,bP:a*vn(v),cT:n/a,b4:a*$n(v),da:3,gl:i,gp:c,dk:l}}}},_2=function(e){return h2({aP:e.aP,dG:e.dG,dH:e.dH,eJ:o(Ui,Ie(e.bI),Ie(e.bN))})},y2=$(function(e,r){return{$:2,a:e,b:r}}),av=function(e){return{$:0,a:e}},Ea=function(e){var r=e;return r},C2=function(e){var r=e;return r.e_},w2=av(Yn.a),k2=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?h(o(z,a,i),c):h(i,o(z,a,c))});return p(Mr,n,h(k,k),r)}),S2=function(e){var r=e;return Ar({dU:r.gl,dV:r.b4,dW:0,dX:0,dY:r.gp,dZ:r.bP,d_:0,d$:0,d0:r.dk,d1:r.bJ,d2:0,d3:0,d4:r.da,d5:r.cT,d6:0,d7:0})},L2=_e(function(e,r,n,a,t,i,c,l){var u=o(k2,C2,m([Ea(e),Ea(r),Ea(n),Ea(a)])),v=u.a,s=u.b;if(v.b){var f=ie(v,s);if(f.b&&f.b.b&&f.b.b.b&&f.b.b.b.b&&!f.b.b.b.b.b){var g=f.a,d=f.b,_=d.a,b=d.b,C=b.a,S=b.b,y=S.a;return o(y2,o(re,S2,v),{bk:o(Ze,g,_),bW:o(Ze,C,y),bX:o(Ze,t,i),bY:o(Ze,c,l)})}else return w2}else return av({bk:o(Ze,e,r),bW:o(Ze,n,a),bX:o(Ze,t,i),bY:o(Ze,c,l)})}),A2=$(function(e,r){return mt(L2,e,r,Me,Me,Me,Me,Me,Me)}),x2=$(function(e,r){L3({bI:o(de,"azimuth for third light",e),aP:ng(d2(2e3)),bN:o(de,"elevation for third light",e),bR:vo(100)}),_2({bI:o(de,"azimuth for fourth light",e),aP:$o,bN:o(de,"elevation for fourth light",e),dG:vo(120),dH:vo(40)});var n=Te(r.k).cU,a=n.a,t=a.a,i=a.b,c=function(){var f=r.c4;if(f.$===1){var g=f.a.ak,d=f.a.bq,_=o(de,"duration of step animation",e),b=(e.W-g)/_,C=function(){switch(d){case 0:return h(0,b);case 1:return h(0,-b);case 2:return h(-b,0);default:return h(b,0)}}(),S=C.a,y=C.b;return h(t+S,i+y)}else return h(t,i)}(),l=c.a,u=c.b,v=dl({aP:s2,bR:sl(o(de,"lumens of following lights",e)),er:{gl:l+.5,gp:u+.5,dk:o(de,"height of following lights",e)}}),s=dl({aP:$o,bR:sl(o(de,"lumens of following lights",e)),er:{gl:l-.5,gp:u-.5,dk:o(de,"height of following lights",e)}});return o(k3,{eR:p2,eV:o(Gr,"background color",e),eY:o(Ju,e,r),e1:.1,cj:e.cj,ff:$2(6),fB:o(A2,v,s),br:e.br,gb:f2,gi:$o},r.R.bS?m([o(ol,e,r),o(ch,e,r),o(c2,e,r),o(r2,e,r)]):m([o(ol,e,r),o(kh,e,r),o(wh,e,r),o(l2,e,r),o(Mh,e,r)]))}),P2=$(function(e,r){return o(D,k,m([o(eg,e,r),o(x2,e,r)]))}),T2=function(e){return{$:4,a:e}},z2=function(e){return{$:4,a:e}},M2=function(e){return{$:5,a:e}},D2={$:0},j2={$:2},F2={$:3},B2={$:1},E2=function(e){return o(We,"autocomplete",e?"on":"off")},pl=function(e){var r=e;return br(r.m)},V2={$:6},tv=$(function(e,r){return o(Rr,m([T("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),o(Q,"transition","background-color 0.3s ease"),$r(e)]),m([oe(r)]))}),R2=nr("pre"),W2=function(e){var r=e;return o(D,k,m([o(tv,V2,"Export"),o(R2,m([T("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),m([oe(r.c8)]))]))},N2={$:7},H2=function(e){return{$:8,a:e}},G2=function(e){return o(yr,"cols",Pe(e))},I2=function(e){return o(yr,"rows",Pe(e))},U2=nr("textarea"),O2=function(e){var r=e;return o(D,k,m([o(tv,N2,"Import"),o(U2,m([T("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),I2(150),G2(10),ga(H2),ba(r.b9)]),m([oe("todo")]))]))},J2=function(e){return o(ma,"mousedown",ce(e))},Y2=We("placeholder"),q2=function(e){var r=e,n=o(D,m([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),$r(F2),On("Move Level Up")]),m([or.fG])),a=o(D,m([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),$r(j2),On("Move Level Down")]),m([or.fF])),t=o(D,m([T("inline-block ml-1 w-4 text-white40 hover:text-red-400"),$r(B2),On("Delete Level")]),m([or.gc])),i=o(Rr,m([T("inline-block ml-1 w-4 text-white40 hover:text-white80"),$r(D2),On("Duplicate Level")]),m([or.fT])),c=$(function(l,u){return o(Rr,m([T("w-full h-8 p-2 text-left text-white80 border-b border-white20"),T(te(l,pl(r.V))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),o(Q,"transition","background-color 0.3s ease"),J2(M2(l))]),m([te(l,pl(r.V))?o(D,k,m([o(oa,m([T("w-[100px] bg-transparent"),Y2("Enter Level Name"),ba(Ai(r.V).fI),ga(z2),E2(!1)]),k),o(D,m([T("float-right")]),m([i,n,a,t]))])):o(D,m([T("whitespace-nowrap")]),m([oe(u)]))]))});return o(D,m([T("w-60 text-xs")]),m([o(D,m([T("w-full h-[200px] overflow-hidden overflow-y-scroll")]),o(va,$(function(l,u){var v=u.fI;return o(c,l,v)}),ji(r.V))),o(D,m([T("p-4 border-[0.5px] border-white20")]),m([W2(r)])),o(D,m([T("p-4 border-[0.5px] border-white20")]),m([O2(r)]))]))},Z2=function(e){return o(D,k,m([o(D,m([T("text-lg")]),m([oe("Pages")])),o(D,m([T("p-4")]),m([o(aa,T2,q2(e.k))]))]))},X2=function(e){return{$:2,a:e}},Q2={$:3},K2={$:1},e_=$(function(e,r){return o(Rr,m([T("m-1 p-2 rounded bg-black40 hover:bg-black80"),$r(e)]),m([oe(r)]))}),r_=function(e){return o(ma,"mouseenter",ce(e))},n_=function(e){return o(ma,"mouseleave",ce(e))},a_=$(function(e,r){return o(D,k,m([o(D,m([T("h-40")]),m([o(D,m([T("text-lg")]),m([oe("Solution Calculator")])),o(e_,K2,"Calculate all solutions"),o(D,k,o(va,$(function(n,a){return o(D,m([T("m-2 p-2 w-24 bg-black60 hover:bg-black cursor-crosshair"),r_(X2(a)),n_(Q2)]),m([oe("Solution "+Pe(n))]))}),Te(r.k).$7))]))]))}),t_=$(function(e,r){return r.R.bS?o(D,m([T("fixed top-0 right-0 w-[300px]"),o(Q,"height",le(e.br.fo-80)+"px"),T("bg-black20"),T("border-[0.5px] border-white20"),T("overflow-y-scroll"),T("text-xs text-white60")]),m([o(D,m([T("p-4")]),m([o(a_,e,r)])),o(D,m([T("p-4 border-[0.5px] border-white20")]),m([Z2(r)]))])):o(D,k,k)}),o_={$:0},gl={dr:o(Po,m([To("0 0 24 24"),xo("currentColor")]),m([o(Ae,m([Le("M12 10.5858L16.2426 6.34313L17.6569 7.75735L13.4142 12L17.6569 16.2426L16.2426 17.6568L12 13.4142L7.75736 17.6568L6.34315 16.2426L10.5858 12L6.34315 7.75735L7.75736 6.34313L12 10.5858Z")]),k)])),du:o(Po,m([To("0 0 24 24"),xo("currentColor")]),m([o(Ae,m([Le("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),k)]))},i_=function(e){return o(D,m([T("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),m([o(Rr,m([T("w-6"),$r(o_)]),m([e.R.bS?gl.dr:gl.du]))]))},c_=$(function(e,r){return o(D,k,m([o(t_,e,r),i_(r)]))}),l_=fe(Dp,P2,A1,e0,Zp,c_,K1);const u_={Main:{init:l_(o(M,function(e){return ce({fv:e})},o(P,"inputs",o(M,function(e){return o(M,function(r){return o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return ce({W:c,cj:i,fa:t,dL:a,cV:n,br:r,gh:e})},o(P,"clock",pe))},o(P,"devicePixelRatio",pe))},o(P,"dt",pe))},o(P,"keyboard",o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return o(M,function(s){return o(M,function(f){return ce({eQ:f,e3:s,cl:v,e9:u,dM:l,fU:c,ey:i,f0:t,dd:a})},o(P,"alt",ae))},o(P,"control",ae))},o(P,"down",ae))},o(P,"downs",nn(Vr)))},o(P,"left",ae))},o(P,"pressedKeys",nn(Vr)))},o(P,"right",ae))},o(P,"shift",ae))},o(P,"up",ae))))},o(P,"pointer",o(M,function(n){return o(M,function(a){return o(M,function(t){return o(M,function(i){return o(M,function(c){return o(M,function(l){return o(M,function(u){return o(M,function(v){return ce({cl:v,dI:u,fE:l,fY:c,fZ:i,dd:t,gl:a,gp:n})},o(P,"down",ae))},o(P,"isDown",ae))},o(P,"move",ae))},o(P,"rightDown",ae))},o(P,"rightUp",ae))},o(P,"up",ae))},o(P,"x",pe))},o(P,"y",pe))))},o(P,"screen",o(M,function(r){return o(M,function(n){return ce({fo:n,gj:r})},o(P,"height",pe))},o(P,"width",pe))))},o(P,"wheel",o(M,function(e){return o(M,function(r){return ce({e5:r,e6:e})},o(P,"deltaX",pe))},o(P,"deltaY",pe)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},$_=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),t=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function s(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function f(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(V.keyboard.downs.push(d.code),V.keyboard.pressedKeys.push(d.code),r(d)&&(V.keyboard.control=!0),n(d)&&(V.keyboard.alt=!0),a(d)&&(V.keyboard.shift=!0),t(d)&&(V.keyboard.left=!0),i(d)&&(V.keyboard.right=!0),c(d)&&(V.keyboard.up=!0),l(d)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",d=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(_=>_!=d.code),r(d)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(d)&&(V.keyboard.alt=!1),a(d)&&(V.keyboard.shift=!1),t(d)&&(V.keyboard.left=!1),i(d)&&(V.keyboard.right=!1),c(d)&&(V.keyboard.up=!1),l(d)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{V.pointer.x=-.5*V.screen.width+d.pageX,V.pointer.y=.5*V.screen.height-d.pageY,u(d)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(d)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+d.pageX,V.pointer.y=.5*V.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(d)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(d)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{V.wheel.deltaX=d.deltaX,V.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{s(V)}),window.addEventListener("focus",d=>{s(V)}),window.addEventListener("visibilitychange",d=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(d){const _=d/1e3,b=_-V.clock;b<.009||(V.dt=b,V.clock=_,e.ports.tick.send(V),f(V)),window.requestAnimationFrame(g)}},v_=()=>{fo("pointerdown"),fo("wheel"),fo("keydown")},fo=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},f_=u_.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});v_();$_(f_);
