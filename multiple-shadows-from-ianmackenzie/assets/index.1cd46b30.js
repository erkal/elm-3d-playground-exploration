(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Tr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Tr(2,e,function(r){return function(n){return e(r,n)}})}function C(e){return Tr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return Tr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function fe(e){return Tr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ie(e){return Tr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Va(e){return Tr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return Tr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function eo(e){return Tr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function w(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function x(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function he(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ro(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ua(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Wu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Gu=[];function Iu(e){return e.length}var Ou=C(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ju=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),qu=$(function(e,r){return r[e]});C(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});C(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ku=C(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});C(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});C(function(e,r,n){return n.slice(e,r)});C(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Zu()),r});function Zu(e){return"<internals>"}function vn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Mr(e,r){for(var n,a=[],t=Lt(e,r,0,a);t&&(n=a.pop());t=Lt(n.a,n.b,0,a));return t}function Lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&vn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=mi(e),r=mi(r));for(var t in e)if(!Lt(e[t],r[t],n+1,a))return!1;return!0}$(Mr);$(function(e,r){return!Mr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Xu=$(function(e,r){var n=I(e,r);return n<0?Bc:n?Yf:Ac}),Yn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function ar(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ce);function ce(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=$r(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=$r(e.a,r);return n}var P={$:0};function $r(e,r){return{$:1,a:e,b:r}}var Qu=$($r);function b(e){for(var r=P,n=e.length;n--;)r=$r(e[n],r);return r}function Ea(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=C(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});V(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});fe(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(w(e,r.a,n.a,a.a,t.a));return b(i)});Ie(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(x(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(Ea(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return b(Ea(r).sort(function(n,a){var t=o(e,n,a);return t===Ac?0:t===Bc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var rv=$(Math.pow);$(function(e,r){return r%e});var nv=$(function(e,r){var n=r%e;return e===0?vn(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan,cv=Math.acos,lv=Math.atan;$(Math.atan2);function uv(e){return e}function vv(e){return e===1/0||e===-1/0}var $v=Math.ceil,fv=Math.floor,sv=Math.round,dv=Math.sqrt,ri=Math.log,mv=isNaN;function pv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var bv=$(function(e,r){return e+r});function hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function gv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function _v(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}C(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var yv=C(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Cv=$(function(e,r){return r.split(e)}),Sv=$(function(e,r){return r.join(e)}),xv=C(function(e,r,n){return n.slice(e,r)});function wv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Lv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Pv=$(function(e,r){return r.indexOf(e)>-1}),zv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Mv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function cc(e){return e+""}function Tv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function kv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Dv(e){return Ea(e).join("")}function Av(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fv(e){return{$:0,a:e}}function no(e){return{$:2,b:e}}var Vv=no(function(e){return typeof e=="boolean"?le(e):nr("a BOOL",e)}),Uv=no(function(e){return typeof e=="number"?le(e):nr("a FLOAT",e)}),Ev=no(function(e){return typeof e=="string"?le(e):e instanceof String?le(e+""):nr("a STRING",e)});function Yv(e){return{$:3,b:e}}var Rv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function kr(e,r){return{$:9,f:e,g:r}}var jv=$(function(e,r){return{$:10,b:r,h:e}}),Nv=$(function(e,r){return kr(e,[r])}),Hv=C(function(e,r,n){return kr(e,[r,n])});V(function(e,r,n,a){return kr(e,[r,n,a])});fe(function(e,r,n,a,t){return kr(e,[r,n,a,t])});Ie(function(e,r,n,a,t,i){return kr(e,[r,n,a,t,i])});Va(function(e,r,n,a,t,i,c){return kr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return kr(e,[r,n,a,t,i,c,l])});eo(function(e,r,n,a,t,i,c,l,u){return kr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return He(e,n)}catch(a){return ge(o(mo,"This is not valid JSON! "+a.message,r))}});var lc=$(function(e,r){return He(e,r)});function He(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?le(e.c):nr("null",r);case 3:return Jn(r)?ni(e.b,r,b):nr("a LIST",r);case 4:return Jn(r)?ni(e.b,r,Wv):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var v=He(e.b,r[n]);return Ze(v)?v:ge(o(pi,n,v.a));case 7:var a=e.e;if(!Jn(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=He(e.b,r[a]);return Ze(v)?v:ge(o(Fc,a,v.a));case 8:if(typeof r!="object"||r===null||Jn(r))return nr("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=He(e.b,r[i]);if(!Ze(v))return ge(o(pi,i,v.a));t=$r(z(i,v.a),t)}return le(Ue(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=He(l[u],r);if(!Ze(v))return v;c=c(v.a)}return le(c);case 10:var v=He(e.b,r);return Ze(v)?He(e.h(v.a),r):v;case 11:for(var s=P,d=e.g;d.b;d=d.b){var v=He(d.a,r);if(Ze(v))return v;s=$r(v.a,s)}return ge(Rf(Ue(s)));case 1:return ge(o(mo,e.a,r));case 0:return le(e.a)}}function ni(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=He(e,r[i]);if(!Ze(c))return ge(o(Fc,i,c.a));t[i]=c.a}return le(n(t))}function Jn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Wv(e){return o(as,e.length,function(r){return e[r]})}function nr(e,r){return ge(o(mo,"Expecting "+e,r))}function Qr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Qr(e.b,r.b);case 6:return e.d===r.d&&Qr(e.b,r.b);case 7:return e.e===r.e&&Qr(e.b,r.b);case 9:return e.f===r.f&&ai(e.g,r.g);case 10:return e.h===r.h&&Qr(e.b,r.b);case 11:return ai(e.g,r.g)}}function ai(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Qr(e[a],r[a]))return!1;return!0}var Gv=$(function(e,r){return JSON.stringify(r,null,e)+""});function uc(e){return e}C(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function Iv(e){return{$:1,a:e}}function wr(e){return{$:2,b:e,c:null}}var Pt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Ov(e){return{$:5,b:e}}var Jv=0;function ao(e){var r={$:0,e:Jv++,f:e,g:null,h:[]};return to(r),r}function vc(e){return wr(function(r){r(Nr(ao(e)))})}function $c(e,r){e.h.push(r),to(e)}var qv=$(function(e,r){return wr(function(n){$c(e,r),n(Nr(Yn))})}),at=!1,ti=[];function to(e){if(ti.push(e),!at){for(at=!0;e=ti.shift();)Kv(e);at=!1}}function Kv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,to(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return oo(r,a,e.e$,e.fN,e.fF,function(){return function(){}})});function oo(e,r,n,a,t,i){var c=o(lc,e,r?r.flags:void 0);Ze(c)||vn(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Zv(l,m);function m(f,g){var h=o(a,f,v);s(v=h.a,g),ii(l,h.b,t(v))}return ii(l,u.b,t(v)),d?{ports:d}:{}}var ir={};function Zv(e,r){var n;for(var a in ir){var t=ir[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Qv(t,r)}return n}function Xv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Pt,l,Ov(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?w(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=ao(o(Pt,l,e.b))}var e$=$(function(e,r){return wr(function(n){e.g(r),n(Nr(Yn))})});$(function(e,r){return o(qv,e.h,{$:0,a:r})});function fc(e){return function(r){return{$:1,k:e,l:r}}}function r$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var oi=[],tt=!1;function ii(e,r,n){if(oi.push({p:e,q:r,r:n}),!tt){tt=!0;for(var a;a=oi.shift();)n$(a.p,a.q,a.r);tt=!1}}function n$(e,r,n){var a={};da(!0,r,a,null),da(!1,n,a,null);for(var t in e)$c(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function da(e,r,n,a){switch(r.$){case 1:var t=r.k,i=a$(e,t,a,r.l);n[t]=t$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)da(e,c.a,n,a);return;case 3:da(e,r.o,n,{s:r.n,t:a});return}}function a$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?ir[r].e:ir[r].f;return o(i,t,a)}function t$(e,r,n){return n=n||{i:P,j:P},e?n.i=$r(r,n.i):n.j=$r(r,n.j),n}function o$(e){ir[e]&&vn(3)}$(function(e,r){return r});function i$(e,r){return o$(e),ir[e]={f:c$,u:r,a:l$},fc(e)}var c$=$(function(e,r){return function(n){return e(r(n))}});function l$(e,r){var n=P,a=ir[e].u,t=Nr(null);ir[e].b=t,ir[e].c=C(function(c,l,u){return n=l,t});function i(c){var l=o(lc,a,c);Ze(l)||vn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ma,gr=typeof document<"u"?document:{};function io(e,r){e.appendChild(r)}V(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Pr(e,function(){}),t),{}});function zt(e){return{$:0,a:e}}var sc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:co(n),e:t,f:e,b:i}})}),Hr=sc(void 0),u$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:co(n),e:t,f:e,b:i}})}),v$=u$(void 0);function $$(e,r,n,a){return{$:3,d:co(e),g:r,h:n,i:a}}var f$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Dr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Dr([e,r],function(){return e(r)})});C(function(e,r,n){return Dr([e,r,n],function(){return o(e,r,n)})});V(function(e,r,n,a){return Dr([e,r,n,a],function(){return p(e,r,n,a)})});fe(function(e,r,n,a,t){return Dr([e,r,n,a,t],function(){return w(e,r,n,a,t)})});Ie(function(e,r,n,a,t,i){return Dr([e,r,n,a,t,i],function(){return x(e,r,n,a,t,i)})});Va(function(e,r,n,a,t,i,c){return Dr([e,r,n,a,t,i,c],function(){return he(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return Dr([e,r,n,a,t,i,c,l],function(){return ro(e,r,n,a,t,i,c,l)})});eo(function(e,r,n,a,t,i,c,l,u){return Dr([e,r,n,a,t,i,c,l,u],function(){return Ua(e,r,n,a,t,i,c,l,u)})});var dc=$(function(e,r){return{$:"a0",n:e,o:r}}),s$=$(function(e,r){return{$:"a1",n:e,o:r}}),mc=$(function(e,r){return{$:"a2",n:e,o:r}}),Ar=$(function(e,r){return{$:"a3",n:e,o:r}}),d$=C(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function m$(e){return e=="script"?"p":e}function p$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(dc,r.n,b$(e,r.o)):r});function b$(e,r){var n=_o(r);return{$:r.$,a:n?p(ts,n<3?h$:g$,Be(e),r.a):o(ga,e,r.a)}}var h$=$(function(e,r){return z(e(r.a),r.b)}),g$=$(function(e,r){return{am:e(r.am),cQ:r.cQ,cE:r.cE}});function co(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ci(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ci(c,t,i):c[t]=i}return r}function ci(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Pr(e,r){var n=e.$;if(n===5)return Pr(e.k||(e.k=e.m()),r);if(n===0)return gr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Pr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Mt(c,r,e.d),c}var c=e.f?gr.createElementNS(e.f,e.c):gr.createElement(e.c);ma&&e.c=="a"&&c.addEventListener("click",ma(c)),Mt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)io(c,Pr(n===1?l[u]:l[u].b,r));return c}function Mt(e,r,n){for(var a in n){var t=n[a];a==="a1"?_$(e,t):a==="a0"?S$(e,r,t):a==="a3"?y$(e,t):a==="a4"?C$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function _$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function y$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function C$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function S$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,lo&&{passive:_o(i)<2}),a[t]=c}}var lo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){lo=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=He(t.a,a);if(!!Ze(i)){for(var c=_o(t),l=i.a,u=c?c<3?l.a:l.am:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function w$(e,r){return e.$==r.$&&Qr(e.a,r.a)}function pc(e,r){var n=[];return Xe(e,r,n,0),n}function me(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Xe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=A$(r),i=1;else{me(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Xe(e.k,r.k,s,0),s.length>0&&me(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var h=r.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;if(f&&d.length!==m.length){me(n,0,a,r);return}(f?!L$(d,m):d!==m)&&me(n,2,a,m),Xe(g,h,n,a+1);return;case 0:e.a!==r.a&&me(n,3,a,r.a);return;case 1:li(e,r,n,a,P$);return;case 2:li(e,r,n,a,z$);return;case 3:if(e.h!==r.h){me(n,0,a,r);return}var y=uo(e.d,r.d);y&&me(n,4,a,y);var S=r.i(e.g,r.g);S&&me(n,5,a,S);return}}}function L$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function li(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){me(n,0,a,r);return}var i=uo(e.d,r.d);i&&me(n,4,a,i),t(e,r,n,a)}function uo(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=uo(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&w$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function P$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?me(n,6,a,{v:l,i:c-l}):c<l&&me(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Xe(s,i[v],n,++a),a+=s.b||0}}function z$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],h=u[m],y=g.a,S=h.a,_=g.b,L=h.b,A=void 0,R=void 0;if(y===S){f++,Xe(_,L,t,f),f+=_.b||0,d++,m++;continue}var Y=l[d+1],E=u[m+1];if(Y){var H=Y.a,j=Y.b;R=S===H}if(E){var U=E.a,K=E.b;A=y===U}if(A&&R){f++,Xe(_,K,t,f),pn(i,t,y,L,m,c),f+=_.b||0,f++,bn(i,t,y,j,f),f+=j.b||0,d+=2,m+=2;continue}if(A){f++,pn(i,t,S,L,m,c),Xe(_,K,t,f),f+=_.b||0,d+=1,m+=2;continue}if(R){f++,bn(i,t,y,_,f),f+=_.b||0,f++,Xe(j,L,t,f),f+=j.b||0,d+=2,m+=1;continue}if(Y&&H===U){f++,bn(i,t,y,_,f),pn(i,t,S,L,m,c),f+=_.b||0,f++,Xe(j,K,t,f),f+=j.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],_=g.b;bn(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],h=u[m];pn(i,t,h.a,h.b,void 0,X),m++}(t.length>0||c.length>0||X)&&me(n,8,a,{w:t,x:c,y:X})}var bc="_elmW6BL";function pn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Xe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}pn(e,r,n+bc,a,t,i)}function bn(e,r,n,a,t){var i=e[n];if(!i){var c=me(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Xe(a,i.z,l,t),me(r,9,t,{w:l,A:i});return}bn(e,r,n+bc,a,t)}function hc(e,r,n,a){hn(e,r,n,0,0,r.b,a)}function hn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)hc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&hn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&hn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return hn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,h=e.childNodes,y=0;y<g.length;y++){t++;var S=m===1?g[y]:g[y].b,_=t+(S.b||0);if(t<=u&&u<=_&&(a=hn(h[y],S,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function gc(e,r,n,a){return n.length===0?e:(hc(e,r,n,a),pa(e,n))}function pa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=M$(t,a);t===e&&(e=i)}return e}function M$(e,r){switch(r.$){case 0:return T$(e,r.s,r.u);case 4:return Mt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return pa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Pr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=pa(e,i.w),e;case 8:return k$(e,r);case 5:return r.s(e);default:vn(10)}}function T$(e,r,n){var a=e.parentNode,t=Pr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function k$(e,r){var n=r.s,a=D$(n.y,r);e=pa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Pr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&io(e,a),e}function D$(e,r){if(!!e){for(var n=gr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;io(n,i.c===2?i.s:Pr(i.z,r.u))}return n}}function vo(e){if(e.nodeType===3)return zt(e.textContent);if(e.nodeType!==1)return zt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=$r(o(Ar,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=$r(vo(v[a]),u);return p(Hr,l,r,u)}function A$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var B$=V(function(e,r,n,a){return oo(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.fP,l=a.node,u=vo(l);return _c(i,function(v){var s=c(v),d=pc(u,s);l=gc(l,u,d,t),u=s})})});V(function(e,r,n,a){return oo(r,a,e.e$,e.fN,e.fF,function(t,i){var c=e.cN&&e.cN(t),l=e.fP,u=gr.title,v=gr.body,s=vo(v);return _c(i,function(d){ma=c;var m=l(d),f=Hr("body")(P)(m.er),g=pc(s,f);v=gc(v,s,g,t),s=f,ma=0,u!==m.fJ&&(gr.title=u=m.fJ)})})});var ba=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function _c(e,r){r(e);var n=0;function a(){n=n===1?0:(ba(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ba(a),n=2)}}$(function(e,r){return o(So,yo,wr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(So,yo,wr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(So,yo,wr(function(){history.replaceState({},"",r),e()}))});var F$={addEventListener:function(){},removeEventListener:function(){}},V$=typeof window<"u"?window:F$;C(function(e,r,n){return vc(wr(function(a){function t(i){ao(n(i))}return e.addEventListener(r,t,lo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=He(e,r);return Ze(n)?re(n.a):q});function yc(e,r){return wr(function(n){ba(function(){var a=document.getElementById(e);n(a?Nr(r(a)):Iv(is(e)))})})}function U$(e){return wr(function(r){ba(function(){r(Nr(e()))})})}$(function(e,r){return yc(r,function(n){return n[e](),Yn})});$(function(e,r){return U$(function(){return V$.scroll(e,r),Yn})});C(function(e,r,n){return yc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Yn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var E$=$(function(e,r){var n="g";e.fe&&(n+="m"),e.et&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var Y$=C(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?re(d):q}a.push(w(bl,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});V(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(w(bl,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});C(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var ui=0;function Dn(e,r){for(;r.b;r=r.b)e(r.a)}function $o(e){for(var r=0;e.b;e=e.b)r++;return r}var R$=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},j$=fe(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),N$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),H$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),W$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),G$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),I$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),O$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),J$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),q$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),K$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Z$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},X$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Q$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Sc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},ef=function(e){e.gl.disable(e.gl.CULL_FACE)},rf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},nf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},af=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},vi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],tf=[Z$,X$,Q$,Cc,Sc,ef,rf,nf,af];function $i(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function of(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function xc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function cf(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,h,y,S){var _;if(t===1)for(_=0;_<g;_++)f[h++]=g===1?y[S]:y[S][_];else i.forEach(function(L){for(_=0;_<g;_++)f[h++]=g===1?y[L][S]:y[L][S][_]})}var u=xc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type($o(n.b)*s);Dn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function lf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=uf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*$o(r.b),indexBuffer:null,buffers:{}}}function uf(e,r){var n=new Uint32Array($o(e)*r),a=0,t;return Dn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function fi(e,r){return e+"#"+r}var wc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cc(n),Sc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=fi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=ui++,v||(v=$i(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ui++,s||(s=$i(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=of(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=vf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=fi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),$f(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=lf(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],h.buffers[f.name]===void 0&&(h.buffers[f.name]=cf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[f.name]);var y=xc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,_=S*y.arraySize,L=0;L<y.arraySize;L++)a.enableVertexAttribArray(g+L),a.vertexAttribPointer(g+L,y.size,y.baseType,!1,_,S*L)}for(n.toggle=!n.toggle,Dn(v0(n),i.a),u=0;u<vi.length;u++){var A=n[vi[u]];A.toggle!==n.toggle&&A.enabled&&(tf[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.dQ,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,h.numIndices)}}return Dn(t,e.g),r});function vf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var h=g.name,y=e.getUniformLocation(f,h);switch(g.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(y,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(y,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var S=c++;return function(_){e.activeTexture(e.TEXTURE0+S);var L=l.textures.get(_);L||(L=_.eA(e),l.textures.set(_,L)),e.bindTexture(e.TEXTURE_2D,L),i[h]!==_&&(e.uniform1i(y,S),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function $f(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var ff=C(function(e,r,n){return $$(r,{g:n,f:{},h:e},gf,_f)}),sf=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),df=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),mf=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),pf=$(function(e,r){e.contextAttributes.antialias=!0}),bf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),hf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function gf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Dn(function(t){return o(u0,r,t)},e.h);var n=gr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),R$(function(){return o(wc,e,n)})):(n=gr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function _f(e,r){return r.f=e.f,wc(r)}var yf=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Cf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Cf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var fo=new Float64Array(3),si=new Float64Array(3),di=new Float64Array(3),Sf=C(function(e,r,n){return new Float64Array([e,r,n])}),xf=function(e){return e[0]},wf=function(e){return e[1]},Lf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Pf=function(e){return new Float64Array([e.fU,e.fY,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Lc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Lc);function Pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ha(Lc(e,r,n),n)}$(Pc);function zc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ha(e,r){r===void 0&&(r=new Float64Array(3));var n=1/zc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var zf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),gn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(gn);function Tt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Tt);$(function(e,r){var n,a=fo,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=gn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(gn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(gn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(gn(r,a)+e[14])/n,t});var Mf=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Tf=function(e){return{fU:e[0],fY:e[1],c$:e[2],ei:e[3]}},kf=function(e){return new Float64Array([e.fU,e.fY,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Df(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Df(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Af=new Float64Array(16),Bf=new Float64Array(16),Ff=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},Vf=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Mc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ie(Mc);V(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Mc(c,l,i,t,n,a)});function Tc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ie(Tc);V(function(e,r,n,a){return Tc(e,r,n,a,-1,1)});function kc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],h=e[12],y=e[13],S=e[14],_=e[15],L=r[0],A=r[1],R=r[2],Y=r[3],E=r[4],H=r[5],j=r[6],U=r[7],K=r[8],X=r[9],Le=r[10],Pe=r[11],se=r[12],de=r[13],qe=r[14],Ke=r[15];return n[0]=a*L+l*A+d*R+h*Y,n[1]=t*L+u*A+m*R+y*Y,n[2]=i*L+v*A+f*R+S*Y,n[3]=c*L+s*A+g*R+_*Y,n[4]=a*E+l*H+d*j+h*U,n[5]=t*E+u*H+m*j+y*U,n[6]=i*E+v*H+f*j+S*U,n[7]=c*E+s*H+g*j+_*U,n[8]=a*K+l*X+d*Le+h*Pe,n[9]=t*K+u*X+m*Le+y*Pe,n[10]=i*K+v*X+f*Le+S*Pe,n[11]=c*K+s*X+g*Le+_*Pe,n[12]=a*se+l*de+d*qe+h*Ke,n[13]=t*se+u*de+m*qe+y*Ke,n[14]=i*se+v*de+f*qe+S*Ke,n[15]=c*se+s*de+g*qe+_*Ke,n}$(kc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],h=r[0],y=r[1],S=r[2],_=r[4],L=r[5],A=r[6],R=r[8],Y=r[9],E=r[10],H=r[12],j=r[13],U=r[14];return n[0]=a*h+c*y+v*S,n[1]=t*h+l*y+s*S,n[2]=i*h+u*y+d*S,n[3]=0,n[4]=a*_+c*L+v*A,n[5]=t*_+l*L+s*A,n[6]=i*_+u*L+d*A,n[7]=0,n[8]=a*R+c*Y+v*E,n[9]=t*R+l*Y+s*E,n[10]=i*R+u*Y+d*E,n[11]=0,n[12]=a*H+c*j+v*U+m,n[13]=t*H+l*j+s*U+f,n[14]=i*H+u*j+d*U+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ha(r,fo);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});C(function(e,r,n){var a=new Float64Array(16),t=1/zc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,h=i*l*v,y=c*l*v,S=i*i*v+u,_=g+f,L=h-m,A=g-f,R=c*c*v+u,Y=y+d,E=h+m,H=y-d,j=l*l*v+u,U=n[0],K=n[1],X=n[2],Le=n[3],Pe=n[4],se=n[5],de=n[6],qe=n[7],Ke=n[8],Jr=n[9],qr=n[10],nt=n[11],Ru=n[12],ju=n[13],Nu=n[14],Hu=n[15];return a[0]=U*S+Pe*_+Ke*L,a[1]=K*S+se*_+Jr*L,a[2]=X*S+de*_+qr*L,a[3]=Le*S+qe*_+nt*L,a[4]=U*A+Pe*R+Ke*Y,a[5]=K*A+se*R+Jr*Y,a[6]=X*A+de*R+qr*Y,a[7]=Le*A+qe*R+nt*Y,a[8]=U*E+Pe*H+Ke*j,a[9]=K*E+se*H+Jr*j,a[10]=X*E+de*H+qr*j,a[11]=Le*E+qe*H+nt*j,a[12]=Ru,a[13]=ju,a[14]=Nu,a[15]=Hu,a});function Uf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}C(Uf);V(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ef(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}C(Ef);V(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],h=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=h,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+h*n+a[14],t[15]=u*e+m*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],h=r[9],y=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=h,n[10]=y,n[11]=S,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+h*i+r[13],n[14]=u*a+m*t+y*i+r[14],n[15]=v*a+f*t+S*i+r[15],n});C(function(e,r,n){var a=Pc(e,r,fo),t=ha(Tt(n,a,si),si),i=ha(Tt(a,t,di),di),c=Af,l=Bf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,kc(c,l)});C(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var D=Qu,qn=Ku,Dc=C(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(qn,e,l,v)}else{var u=c.a;return p(qn,i,l,u)}});return p(qn,i,p(qn,e,r,t),a)}),so=C(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(so,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),mi=function(e){return p(so,C(function(r,n,a){return o(D,z(r,n),a)}),P,e)},Ac=1,Yf=2,Bc=0,ge=function(e){return{$:1,a:e}},mo=$(function(e,r){return{$:3,a:e,b:r}}),pi=$(function(e,r){return{$:0,a:e,b:r}}),Fc=$(function(e,r){return{$:1,a:e,b:r}}),le=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},jf=Lv,Nf=Gv,Ve=cc,Fr=$(function(e,r){return o(Sv,e,Ea(r))}),po=$(function(e,r){return b(o(Cv,e,r))}),Vc=function(e){return o(Fr,`
    `,o(po,`
`,e))},Rn=C(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Rr=function(e){return p(Rn,$(function(r,n){return n+1}),0,e)},Hf=ev,Wf=C(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(D,r,n);e=a,r=t,n=i;continue e}else return n}),Cr=$(function(e,r){return p(Wf,e,r,P)}),Uc=$(function(e,r){return p(Hf,e,o(Cr,0,Rr(r)-1),r)}),cr=Av,Ec=function(e){var r=cr(e);return 97<=r&&r<=122},Yc=function(e){var r=cr(e);return r<=90&&65<=r},Gf=function(e){return Ec(e)||Yc(e)},If=function(e){var r=cr(e);return r<=57&&48<=r},Of=function(e){return Ec(e)||Yc(e)||If(e)},Ue=function(e){return p(Rn,D,P,e)},$n=hv,Jf=$(function(e,r){return`

(`+(Ve(e+1)+(") "+Vc(qf(r))))}),qf=function(e){return o(Kf,e,P)},Kf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=$n(n);if(h.$===1)return!1;var y=h.a,S=y.a,_=y.b;return Gf(S)&&o(jf,Of,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(D,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,v=o(D,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Fr,"",Ue(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ve(Rr(s))+" ways:"));return o(Fr,`

`,o(D,g,o(Uc,Jf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Fr,"",Ue(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Fr,"",Ue(r))+`:

    `):`Problem with the given value:

`}();return g+(Vc(o(Nf,4,f))+(`

`+m))}}),Ee=32,kt=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Dt=Gu,bo=$v,ho=$(function(e,r){return ri(r)/ri(e)}),Zf=uv,An=bo(o(ho,2,Ee)),Rc=w(kt,0,An,Dt,Dt),jc=Ou,Nc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Hc=fv,At=Iu,ke=$(function(e,r){return I(e,r)>0?e:r}),Xf=function(e){return{$:0,a:e}},go=Ju,Qf=$(function(e,r){e:for(;;){var n=o(go,Ee,e),a=n.a,t=n.b,i=o(D,Xf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ue(i)}}),es=function(e){var r=e.a;return r},rs=$(function(e,r){e:for(;;){var n=bo(r/Ee);if(n===1)return o(go,Ee,e).a;var a=o(Qf,e,P),t=n;e=a,r=t;continue e}}),Wc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Hc(o(ho,Ee,n-1)),t=e?Ue(r.z):r.z,i=o(rs,t,r.l);return w(kt,At(r.p)+n,o(ke,5,a*An),i,r.p)}else return w(kt,At(r.p),An,Dt,r.p)}),ns=fe(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Wc,!1,{z:a,l:n/Ee|0,p:t});var i=Nc(p(jc,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(D,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),as=$(function(e,r){if(e<=0)return Rc;var n=e%Ee,a=p(jc,n,e-n,r),t=e-n-Ee;return x(ns,r,t,e,P,a)}),Ze=function(e){return!e.$},k=jv,Z=Vv,T=Rv,ue=Uv,ga=Nv,ts=Hv,Be=Fv,_o=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=Hr("div"),os=function(e){return{$:2,a:e}},Gc=$(function(e,r){return e}),Ic=$(function(e,r){return{D:r.D,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fq:r.fq,cM:r.cM,fQ:r.fQ}}),Ur=function(e){return e},is=Ur,bi=Ie(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),cs=Pv,Vr=gv,en=xv,jn=$(function(e,r){return e<1?r:p(en,e,Vr(r),r)}),Ya=Mv,Ra=function(e){return e===""},ja=$(function(e,r){return e<1?"":p(en,0,e,r)}),Oc=Tv,hi=fe(function(e,r,n,a,t){if(Ra(t)||o(cs,"@",t))return q;var i=o(Ya,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Oc(o(jn,c+1,t));if(l.$===1)return q;var u=l;return re(he(bi,e,o(ja,c,t),u,r,n,a))}else return re(he(bi,e,t,q,r,n,a))}),gi=V(function(e,r,n,a){if(Ra(a))return q;var t=o(Ya,"/",a);if(t.b){var i=t.a;return x(hi,e,o(jn,i,a),r,n,o(ja,i,a))}else return x(hi,e,"/",r,n,a)}),_i=C(function(e,r,n){if(Ra(n))return q;var a=o(Ya,"?",n);if(a.b){var t=a.a;return w(gi,e,re(o(jn,t+1,n)),r,o(ja,t,n))}else return w(gi,e,q,r,n)});$(function(e,r){if(Ra(r))return q;var n=o(Ya,"#",r);if(n.b){var a=n.a;return p(_i,e,re(o(jn,a+1,r)),o(ja,a,r))}else return p(_i,e,q,r)});var ls=zv,yo=function(e){},Nn=Nr,us=Nn(0),Jc=V(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(Rn,e,r,Ue(d)):w(Jc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),Lr=C(function(e,r,n){return w(Jc,e,r,0,n)}),ee=$(function(e,r){return p(Lr,$(function(n,a){return o(D,e(n),a)}),P,r)}),_a=Pt,Co=$(function(e,r){return o(_a,function(n){return Nn(e(n))},r)}),vs=C(function(e,r,n){return o(_a,function(a){return o(_a,function(t){return Nn(o(e,a,t))},n)},r)}),$s=function(e){return p(Lr,vs(D),Nn(P),e)},fs=e$,ss=$(function(e,r){var n=r;return vc(o(_a,fs(e),n))}),ds=C(function(e,r,n){return o(Co,function(a){return 0},$s(o(ee,ss(e),r)))}),ms=C(function(e,r,n){return Nn(0)}),ps=$(function(e,r){var n=r;return o(Co,e,n)});ir.Task=Xv(us,ds,ms,ps);var bs=fc("Task"),So=$(function(e,r){return bs(o(Co,e,r))}),hs=B$,gs=pv,ya={$:1},qc=function(e){return{$:2,a:e}},Na={$:0},We=$(function(e,r){return{$:0,a:e,b:r}}),ae=C(function(e,r,n){return r(e(n))}),fn=function(e){var r=e.b.B;return r.a},_s=function(e){var r=e.a,n=e.b.U,a=e.b.B,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{B:i,ac:c,U:o(D,a,n)}))}else return q},Kc=function(e){var r=e.b;return o(We,Na,r)},fr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ys=C(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fq.c7?Kc(n):n;case 2:var i=a.a.cR;return(I(i+r.eH,fn(n).D)>0?o(ae,_s,fr(o(We,ya,t))):Ur)(o(We,qc({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Ic,l.ey,ar(r,{D:l.D+r.eH})),s=o(e,v,u);return o(We,Na,{B:z(v,s),ac:P,U:o(D,t.B,t.U)})}}),Zc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Cs=C(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(D,a,n);e=i,r=c,n=l;continue e}else return n}}),Ss=$(function(e,r){return Ue(p(Cs,e,r,P))}),Xc=C(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,h=g.a,y=g.b;return e>1e3?o(D,_,o(D,c,o(D,s,o(D,h,o(Ss,r-4,y))))):o(D,_,o(D,c,o(D,s,o(D,h,p(Xc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,_=S.a;return b([_])}}),xs=$(function(e,r){return p(Xc,0,e,r)}),ws=$(function(e,r){var n=r.b.U,a=r.b.B,t=r.b.ac,i=ce(Ue(n),ce(b([a]),t)),c=o(xs,e,i),l=o(Zc,e,i);if(l.b){var u=l.a,v=l.b;return o(We,ya,{B:u,ac:v,U:Ue(c)})}else{var s=Ue(c);if(s.b){var d=s.a,m=s.b;return o(We,ya,{B:d,ac:P,U:m})}else return r}}),Ls=function(e){var r=e.b;return o(We,ya,r)},Ps=function(e){var r=e.b;return o(We,qc({cR:fn(e).D}),r)},zs=$(function(e,r){switch(e.$){case 1:return Ls(r);case 2:return Kc(r);case 3:return Ps(r);default:var n=e.a;return o(ws,n,r)}}),Qc=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ms=$(function(e,r){return ar(r,{aw:e(r.aw)})}),Ts=function(e){return{$:3,a:e}},ks=function(e){return{$:2,a:e}},el=$(function(e,r){return{$:0,a:e,b:r}}),rl=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},xo=kv,Ds=C(function(e,r,n){return o(fr,0/0,xo(o(e,r,n)))}),nl=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=yv,al=function(e){return p(As,D,P,e)},Bs=$(function(e,r){var n=o(nl,function(a){return a!=="0"&&a!=="."},al(r));return ce(e&&n?"-":"",r)}),te=cc,Bt=bv,tl=Bv,ol=function(e){var r=e.a,n=e.b;if(r==="9"){var a=$n(n);if(a.$===1)return"01";var t=a.a;return o(Bt,"0",ol(t))}else{var i=cr(r);return i>=48&&i<57?o(Bt,tl(i+1),n):"0"}},Ft=vv,Fs=mv,Ha=function(e){return o(Bt,e,"")},il=C(function(e,r,n){return e<=0?n:p(il,e>>1,ce(r,r),e&1?ce(n,r):n)}),Bn=$(function(e,r){return p(il,e,r,"")}),Vt=C(function(e,r,n){return ce(n,o(Bn,e-Vr(n),Ha(r)))}),Ut=_v,cl=function(e){var r=o(po,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Vs=function(e){var r=o(po,"e",te(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(fr,0,Oc(o(ls,"+",t)?o(jn,1,t):t)),c=cl(n),l=c.a,u=c.b,v=ce(l,u),s=i<0?o(fr,"0",o(ye,function(d){var m=d.a,f=d.b;return m+("."+f)},o(ye,Qc(Ha),$n(ce(o(Bn,O(i),"0"),v))))):p(Vt,i+1,"0",v);return ce(e<0?"-":"",s)}else{var n=r.a;return ce(e<0?"-":"",n)}else return""},Us=C(function(e,r,n){if(Ft(n)||Fs(n))return te(n);var a=n<0,t=cl(Vs(O(n))),i=t.a,c=t.b,l=Vr(i)+r,u=ce(o(Bn,-l+1,"0"),p(Vt,l,"0",ce(i,c))),v=Vr(u),s=o(ke,1,l),d=o(e,a,p(en,s,v,u)),m=p(en,0,s,u),f=d?Ut(o(fr,"1",o(ye,ol,$n(Ut(m))))):m,g=Vr(f),h=f==="0"?f:r<=0?ce(f,o(Bn,O(r),"0")):I(r,Vr(c))<0?p(en,0,g-r,f)+("."+p(en,g-r,g,f)):ce(i+".",p(Vt,r,"0",c));return o(Bs,a,h)}),ll=Us($(function(e,r){var n=$n(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(cr(t))})),Es=Ds(ll),Ys=C(function(e,r,n){var a=o(ho,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Es,t,n)}),ul=Xu,Wa=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ul,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),N=fe(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),sr={$:-2},on=fe(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return x(N,0,r,n,x(N,1,v,s,d,m),x(N,1,i,c,l,u))}else return x(N,e,i,c,x(N,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,h=f.c,y=f.d,S=f.e,m=a.e;return x(N,0,v,s,x(N,1,g,h,y,S),x(N,1,r,n,m,t))}else return x(N,e,r,n,a,t)}),Et=C(function(e,r,n){if(n.$===-2)return x(N,0,e,r,sr,sr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ul,e,t);switch(u){case 0:return x(on,a,t,i,p(Et,e,r,c),l);case 1:return x(N,a,t,r,c,l);default:return x(on,a,t,i,c,p(Et,e,r,l))}}),Sn=C(function(e,r,n){var a=p(Et,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return x(N,1,t,i,c,l)}else{var u=a;return u}}),Rs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},vl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,h=m.d,y=m.e,S=v.e;return x(N,0,f,g,x(N,1,n,a,x(N,0,i,c,l,u),h),x(N,1,s,d,y,S))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,L=e.e;L.a;var s=L.b,d=L.c,m=L.d,S=L.e;return x(N,1,n,a,x(N,0,i,c,l,u),x(N,0,s,d,m,S))}else return e},yi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,h=f.c,y=f.d,S=f.e;return x(N,0,i,c,x(N,1,u,v,s,d),x(N,1,n,a,m,x(N,0,g,h,y,S)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,L=_.d,m=_.e,A=e.e;A.a;var g=A.b,h=A.c,y=A.d,S=A.e;return x(N,1,n,a,x(N,0,i,c,L,m),x(N,0,g,h,y,S))}else return e},js=Va(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return x(N,n,l,u,v,x(N,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,yi(r)}else break e;else return c.a,c.d,yi(r);else break e;return r}}),ia=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,x(N,r,n,a,ia(t),l);var u=vl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return x(on,v,s,d,ia(m),f)}else return sr}else return x(N,r,n,a,ia(t),l)}else return sr},xn=$(function(e,r){if(r.$===-2)return sr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,x(N,n,a,t,o(xn,e,i),c);var u=vl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return x(on,v,s,d,o(xn,e,m),f)}else return sr}else return x(N,n,a,t,o(xn,e,i),c);else return o(Ns,e,ro(js,e,r,n,a,t,i,c))}),Ns=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Mr(e,a)){var l=Rs(c);if(l.$===-1){var u=l.b,v=l.c;return x(on,n,u,v,i,ia(c))}else return sr}else return x(on,n,a,t,i,o(xn,e,c))}else return sr}),Hs=$(function(e,r){var n=o(xn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return x(N,1,a,t,i,c)}else{var l=n;return l}}),Kn=C(function(e,r,n){var a=r(o(Wa,e,n));if(a.$)return o(Hs,e,n);var t=a.a;return p(Sn,e,t,n)}),Ws=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(rl,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(el,z(i,c),p(Ys,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){return a.$===3?Ts(n):a}));default:var r=e.a,n=e.b;return o(Kn,r,ye(function(a){return a.$===2?ks(n):a}))}},Gs=function(e){return Ms(Ws(e))},Is=$(function(e,r){return o(ee,Gs(e),r)}),Os=$(function(e,r){return ar(r,{ey:o(Is,e,r.ey)})}),Js=$(function(e,r){var n=r.a,a=r.b;return o(We,n,ar(a,{B:o(Qc,Os(e),a.B)}))}),qs=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Ks=C(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(We,a,ar(t,{B:o(qs,o(e,i.a,r),i)}))}),Zs=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ar(a,{aM:!a.aM});case 2:var t=n.a;return ar(a,{H:p(ys,e,t,a.H)});case 3:var i=n.a;return ar(a,{H:o(Js,i,a.H)});case 4:var c=n.a;return ar(a,{H:p(Ks,r,c,a.H)});default:var l=n.a;return ar(a,{H:o(zs,l,a.H)})}}),Xs=$(function(e,r){return o(We,Na,{B:z(e,r(e)),ac:P,U:P})}),Qs=r$,Ci=Qs(P),Ca=Yv,Fn=Ev,ed=i$("tick",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return Be({D:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",ue))},o(T,"devicePixelRatio",ue))},o(T,"dt",ue))},o(T,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(d){return Be({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",Ca(Fn)))},o(T,"left",Z))},o(T,"pressedKeys",Ca(Fn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return Be({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ue))},o(T,"y",ue))))},o(T,"screen",o(k,function(r){return o(k,function(n){return Be({eV:n,fS:r})},o(T,"height",ue))},o(T,"width",ue))))},o(T,"wheel",o(k,function(e){return o(k,function(r){return Be({eC:r,eD:e})},o(T,"deltaX",ue))},o(T,"deltaY",ue))))),rd=function(e){return{$:4,a:e}},nd={$:0},ad=uc,Oe=$(function(e,r){return o(mc,e,ad(r))}),G=Oe("className"),td=function(e){var r=e.b.B;return r.b},Sa=Oe("id"),od=f$,xa=od,id=s$,ne=id,cd={$:1},ld=function(e){return{$:3,a:e}},ud=function(e){return{$:5,a:e}},Si=Hr("a"),wo=Hr("button"),xi=function(e){return o(Oe,"href",p$(e))},vd=Ar("clip-rule"),ze=Ar("d"),$d=Ar("fill"),$l=sc("http://www.w3.org/2000/svg"),fd=$l("svg"),sd=Ar("viewBox"),dd=o(d$,"http://www.w3.org/XML/1998/namespace","xml:space"),je=fd(b([sd("0 0 24 24"),$d("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),dd("http://www.w3.org/2000/svg")])),md=Ar("fill-rule"),Me=$l("path"),Er={eB:je(b([o(Me,b([ze("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eP:je(b([o(Me,b([ze("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eU:je(b([o(Me,b([ze("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fc:je(b([o(Me,b([ze("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Me,b([ze("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fd:je(b([o(Me,b([ze("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Me,b([ze("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fn:je(b([o(Me,b([ze("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fo:je(b([o(Me,b([ze("M7 5V19L18 12L7 5Z")]),P)])),fp:je(b([o(Me,b([ze("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fq:je(b([o(Me,b([ze("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fL:je(b([o(Me,b([md("evenodd"),vd("evenodd"),ze("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fM:je(b([o(Me,b([ze("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:je(b([o(Me,b([ze("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},pd=function(e){return{$:0,a:e}},fl=dc,sl=$(function(e,r){return o(fl,e,pd(r))}),Lo=function(e){return o(sl,"click",Be(e))},wi=Oe("target"),bd=Oe("title"),Yt=$(function(e,r){if(r.$===-2)return sr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return x(N,n,a,o(e,a,t),o(Yt,e,i),o(Yt,e,c))}),hd=zt,Sr=hd,gd=function(e){return p(so,C(function(r,n,a){return o(D,n,a)}),P,e)},_d=$(function(e,r){return{$:3,a:e,b:r}}),yd=$(function(e,r){return{$:2,a:e,b:r}}),Cd=$(function(e,r){return{$:0,a:e,b:r}}),Sd=$(function(e,r){return{$:1,a:e,b:r}}),Je=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),xd=w(Je,0/255,0/255,0/255,1),wd=uc,dl=$(function(e,r){return o(mc,e,wd(r))}),Ld=dl("checked"),er=sv,Pd=C(function(e,r,n){return ce(o(Bn,e-Vr(n),Ha(r)),n)}),wa=nv,ml=function(e){var r=function(n){return n<10?Ve(n):Ha(tl(87+n))};return e<16?r(e):ce(ml(e/16|0),r(o(wa,16,e)))},zd=o(ae,ml,o(Pd,2,"0")),pl=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b1:a,b7:n,cG:r}},Md=function(e){var r=pl(e),n=r.cG,a=r.b7,t=r.b1;return o(Fr,"",o(D,"#",o(ee,o(ae,er,zd),b([n*255,a*255,t*255]))))},Rt=Oe("htmlFor"),jt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),La=$(function(e,r){if(r.$){var a=r.a;return ge(a)}else{var n=r.a;return e(n)}}),Td=C(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(D,t,n)}),Ga=$(function(e,r){return p(Lr,Td(e),P,r)}),bl=V(function(e,r,n,a){return{e_:r,e9:e,fi:n,fE:a}}),kd=Y$,Dd=Dv,Ad=$(function(e,r){if(r.$)return ge(e);var n=r.a;return le(n)}),Bd=E$,Fd=function(e){return o(Bd,{et:!1,fe:!1},e)},Ia=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Vd=$(function(e,r){if(r.$){var a=r.a;return ge(a)}else{var n=r.a;return le(e(n))}}),Ud=function(e){return{$:2,a:e}},Ed=function(e){return{$:0,a:e}},Yd=function(e){return{$:1,a:e}},ot=$(function(e,r){return cr(r)-cr(e)}),it=C(function(e,r,n){var a=cr(n);return I(cr(e),a)<1&&I(a,cr(r))<1}),Rd=$(function(e,r){var n=function(t){return I(t,e)<0?le(t):ge(Yd(r))},a=p(it,"0","9",r)?le(o(ot,"0",r)):p(it,"a","z",r)?le(10+o(ot,"a",r)):p(it,"A","Z",r)?le(10+o(ot,"A",r)):ge(Ed(r));return o(La,n,a)}),hl=$(function(e,r){var n=$n(r);if(n.$===1)return le(0);var a=n.a,t=a.a,i=a.b;return o(La,function(c){return o(La,function(l){return le(c+l*e)},o(hl,e,i))},o(Rd,e,t))}),jd=$(function(e,r){return 2<=e&&e<=36?o(hl,e,Ut(r)):ge(Ud(e))}),Nd=jd(16),Hd=C(function(e,r,n){return w(Je,e,r,n,1)}),Wd=V(function(e,r,n,a){return w(Je,e,r,n,a)}),Hn=rv,Gd=$(function(e,r){var n=o(Hn,10,e);return er(r*n)/n}),Id=wv,Od=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=al(n);if(a.b&&!a.b.b){var t=a.a;return Dd(b([t,t]))}else return n};return o(ae,Id,o(ae,function(n){return o(ye,function(a){return p(kd,1,a,n)},Fd(e))},o(ae,jt(Ia),o(ae,ye(function(n){return n.fE}),o(ae,ye(Ga(Ur)),o(ae,Ad("Parsing hex regex failed"),La(function(n){var a=o(ee,o(ae,r,o(ae,Nd,Vd(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return le(w(Wd,t/255,c/255,u/255,o(Gd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return le(p(Hd,t/255,c/255,u/255))}else break e;return ge("Parsing ints from hex failed")})))))))}(),Pa=Hr("input"),Nt=Hr("label"),Ht=Oe("name"),gl=$(function(e,r){return p(Lr,T,r,e)}),Jd=o(gl,b(["target","checked"]),Z),qd=function(e){return o(sl,"change",o(ga,e,Jd))},Kd=function(e){return z(e,!0)},Zd=function(e){return{$:1,a:e}},Xd=$(function(e,r){return o(fl,e,Zd(r))}),Qd=o(gl,b(["target","value"]),Fn),Po=function(e){return o(Xd,"input",o(ga,Kd,o(ga,e,Qd)))},_l=Oe("max"),yl=Oe("min"),Cl=function(e){return o(Oe,"step",e)},za=Oe("type"),zo=Oe("value"),Li=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(J,P,b([o(Nt,b([Rt(r)]),b([o(J,b([G("relative w-full")]),b([o(J,b([G("inline-block")]),b([Sr(r)])),o(J,b([G("inline-block float-right")]),b([Sr(te(n))]))]))])),o(Pa,b([za("range"),o(ne,"width","100%"),Sa(r),Ht(r),yl(te(a)),_l(te(t)),zo(te(n)),Cl(te(i)),Po(o(ae,xo,o(ae,fr(42),c)))]),P)]))},em=$(function(e,r){if(r.$)return e;var n=r.a;return n}),rm=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,b([G("h-12 py-4")]),b([o(Nt,b([G("block"),Rt(e)]),b([o(Pa,b([G("relative bottom-[1px] align-middle mr-2"),za("checkbox"),Sa(e),Ht(e),qd(_d(e)),Ld(c)]),P),Sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Li({b9:e,cl:i,cp:t,ct:Cd(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Li({b9:e,cl:i,cp:t,ct:o(ae,er,Sd(e)),cP:1,cW:c});default:var c=r.a;return o(J,P,b([o(J,b([o(ne,"margin-bottom","6px")]),b([o(Nt,b([Rt(e)]),b([Sr(e)]))])),o(Pa,b([za("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),Sa(e),Ht(e),Po(function(l){return o(yd,e,o(em,xd,Od(l)))}),zo(Md(c))]),P)]))}}),nm=function(e){return o(J,b([G("p-4 border-y-[0.5px] border-white20")]),b([o(J,b([G("text-lg pb-2")]),b([Sr(e.ff)])),o(J,b([G("pl-2 pr-2")]),gd(o(Yt,rm,e.aw)))]))},am=function(e){return o(J,b([G("text-xs text-white60")]),o(ee,nm,e))},tm=function(e){return o(J,b([G("absolute left-[104px] bottom-2 text-sm text-white40")]),b([Sr("clock: "+o(ll,3,fn(e).D))]))},om=function(e){e.a;var r=e.b.U;return o(ye,function(n){return er(60/(fn(e).D-n))},o(ye,o(ae,es,function(n){return n.D}),Ia(o(Zc,59,r))))},im=function(e){return o(J,b([G("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=om(e);if(r.$===1)return b([Sr("... Fps")]);var n=r.a;return b([Sr(Ve(n)+" Fps")])}())},cm=function(e){return{$:0,a:e}},lm=function(e){var r=e.b.U;return Rr(r)},um=function(e){var r=e.b.U;e.b.B;var n=e.b.ac;return Rr(r)+1+Rr(n)},vm=function(e){return o(Pa,b([G("absolute w-full"),za("range"),yl(Ve(0)),_l(Ve(um(e)-1)),zo(Ve(lm(e))),Cl(Ve(1)),Po(o(ae,xo,o(ae,fr(42),o(ae,er,cm))))]),P)},Pi={$:1},zi={$:3},Mi={$:2},Wt=function(e){return!e.b},Sl=dl("disabled"),ct=C(function(e,r,n){return o(wo,b([G("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),G(n),Sl(e),Lo(r)]),b([Sr("REC")]))}),lt=C(function(e,r,n){return o(wo,b([G("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Sl(e),Lo(n)]),b([o(J,b([G("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),$m=function(e){var r=e.a,n=e.b.ac;return o(J,b([G("py-1")]),b([function(){switch(r.$){case 0:return p(ct,!1,Pi,"text-red-500 font-bold");case 1:return p(ct,!1,Mi,"text-white60 hover:text-white80 font-bold");default:return p(ct,!0,Mi,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(lt,Wt(n),Er.fo,zi);case 1:return p(lt,Wt(n),Er.fo,zi);default:return p(lt,!1,Er.fn,Pi)}}()]))},fm=function(e){return o(J,b([G("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([vm(e),$m(e),im(e),tm(e)]))},sm=function(e){var r=e.a;return Mr(r,Na)},dm=$(function(e,r){var n=sm(r.H)?o(J,P,P):o(J,b([G("absolute pointer-events-none w-8 h-8"),o(ne,"left",te(e.fq.fU+.5*e.cM.fS)+"px"),o(ne,"top",te(-e.fq.fY+.5*e.cM.eV)+"px")]),b([o(J,b([G(e.fq.e1?"text-black80":"text-black40")]),b([Er.fq]))]));return o(J,P,b([n]))}),mm=$(function(e,r){var n=o(wo,b([G(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Lo(cd),bd("Distraction Free Mode")]),b([Er.f0])),a=40,t=260,i=o(J,b([G("absolute w-8 bottom-12")]),b([o(Si,b([G("text-twitterBlue40 hover:text-twitterBlue"),xi("https://twitter.com/AzizErkalSelman"),wi("_blank")]),b([Er.fM]))])),c=80,l=o(J,b([G("absolute w-8 bottom-2")]),b([o(Si,b([G("text-githubCat40 hover:text-githubCat"),xi("https://github.com/erkal/elm-3d-playground-exploration"),wi("_blank")]),b([Er.eP]))])),u=e.cM.fS>640?B(e.cM.eV,a+t,e.cM.fS-(a+t)):B(e.cM.eV-c,a,e.cM.fS-a),v=u.a,s=u.b,d=u.c;return r.aM?o(J,b([G("fixed w-10 h-10 p-1")]),b([n])):o(J,P,b([o(J,b([G("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",te(a)+"px")]),b([n,i,l])),o(J,b([G("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",te(t)+"px"),o(ne,"height",te(v)+"px")]),b([o(xa,ld,am(fn(r.H).ey))])),o(J,b([G("absolute bottom-0"),o(ne,"left",te(s)+"px"),o(ne,"height",te(c)+"px"),o(ne,"width",te(d)+"px")]),b([o(xa,ud,fm(r.H))])),o(dm,e,r)]))}),pm=C(function(e,r,n){var a=td(n.H),t=fn(n.H);return o(J,b([G("bg-black40"),G("select-none"),G("antialiased"),G("font-mono"),o(ne,"width",te(t.cM.fS)+"px"),o(ne,"height",te(t.cM.eV)+"px")]),b([o(J,b([G("fixed")]),b([o(xa,Gc(nd),o(e,t,a))])),o(J,b([Sa("gui")]),b([o(mm,t,n),o(xa,rd,o(r,t,a))]))]))}),bm=Ie(function(e,r,n,a,t,i){var c=$(function(u,v){return z(w(Zs,r,i,u,v),Ci)}),l=function(u){var v=o(Ic,n,u.e0);return z({aM:u.e0.cM.fS<500,H:o(Xs,v,a)},Ci)};return hs({e$:l,fF:Gc(ed(os)),fN:c,fP:o(pm,e,t)})}),hm=V(function(e,r,n,a){return he(bm,e,r,n,a,$(function(t,i){return o(J,P,P)}),C(function(t,i,c){return c}))}),gm=function(e){return{}},_m=C(function(e,r,n){return{aw:n,e2:r,ff:e}}),xl=sr,ym=function(e){return p(Rn,$(function(r,n){var a=r.a,t=r.b;return p(Sn,a,t,n)}),xl,e)},Cm=C(function(e,r,n){return p(_m,e,r,ym(n))}),Ti=Cm,mn=C(function(e,r,n){var a=r.a,t=r.b;return z(e,o(el,z(a,t),n))}),Sm=C(function(e,r,n){var a=r.a,t=r.b;return z(e,o(rl,z(a,t),n))}),pe=av,xm=b([p(Ti,"Parameters",!0,b([p(Sm,"number of tree blocks",z(1,20),16),p(mn,"turning speed of the tree",z(.1,4),1)])),p(Ti,"Lighting",!0,b([p(mn,"azimuth for third light",z(-pe,pe),1),p(mn,"elevation for third light",z(-pe,pe),-2),p(mn,"azimuth for fourth light",z(-pe,pe),1),p(mn,"elevation for fourth light",z(-pe,pe),-2)]))]),wm=$(function(e,r){return r}),Lm=lv,hr=dv,Pm=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fY-n.fY,c=a.fU-n.fU,l=o(ke,O(c),o(ke,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,d=hr(s*s+v*v+u*u);return re({fU:s/d,fY:v/d,c$:u/d})}else return q}),ca=function(e){return e},Mo=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c$-a.c$*n.fY,fY:a.c$*n.fU-a.fU*n.c$,c$:a.fU*n.fY-a.fY*n.fU}}),la=function(e){var r=e,n=o(ke,O(r.fU),o(ke,O(r.fY),O(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c$:a/c})}else return q},Ma=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),zm=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c$*n.c$}),wl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Mm=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Tm=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c$:a.c$-n.c$}}),km=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c$*n.c$;return{fU:n.fU*t,fY:n.fY*t,c$:n.c$*t}}),Dm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},tr=0,Ll={fU:0,fY:0,c$:0},Am=C(function(e,r,n){return o(jt,function(a){var t=o(Tm,o(km,a,r),r);return o(jt,function(i){var c=o(Mo,r,e),l=o(zm,n,c),u=o(wl,tr,l)?c:o(Mm,tr,l)?Dm(c):Ll;return o(ye,function(v){return B(a,i,v)},la(u))},la(t))},la(e))}),Bm=function(e){var r=e,n=O(r.c$),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=hr(r.c$*r.c$+r.fY*r.fY);return{fU:0,fY:-r.c$/i,c$:r.fY/i}}else{var i=hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}else if(I(a,n)<1){var i=hr(r.c$*r.c$+r.fU*r.fU);return{fU:r.c$/i,fY:0,c$:-r.fU/i}}else{var i=hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c$:0}}},To=function(e){var r=Bm(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c$-i.c$*a.fY,fY:i.c$*a.fU-i.fU*a.c$,c$:i.fU*a.fY-i.fY*a.fU};return z(r,c)},rn=function(e){var r=e;return r},jr=function(e){return e},Fm=$(function(e,r){var n=To(e),a=n.a,t=n.b;return jr({cu:r,cZ:a,c_:t,c0:e})}),Vm=function(e){var r=o(Ma,e.aS,e.dc),n=rn(e.ee),a=o(Mo,r,n),t=p(Am,r,n,a);if(t.$){var v=la(r);if(v.$){var d=To(e.ee),m=d.a,f=d.b;return jr({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Fm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return jr({cu:e.dc,cZ:u,c_:l,c0:c})}},mr={fU:0,fY:0,c$:0},Um=function(e){return{$:0,a:e}},xe=function(e){var r=e;return O(r)},ua=function(e){var r=e;return .5*r},Em=iv,Ym=function(e){var r=e;return Em(r)},Rm=function(e){var r=ua(xe(e.ef)),n=Ym(r);return{cF:Um(n),cX:e.cX}},_r=function(e){return e},Oa=_r({fU:0,fY:1,c$:0}),dr=function(e){return e},jm=function(e){var r=e.aS,n=e.dc,a=e.ee;return Rm({ef:dr(2*Lm(.5)),cX:Vm({dc:ca(n),aS:ca(r),ee:o(fr,Oa,o(Pm,mr,ca(a)))})})},Nm=jm({dc:{fU:5,fY:5,c$:12},aS:{fU:0,fY:1,c$:0},ee:{fU:0,fY:1,c$:0}}),ko=function(e){return e},Pl=C(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Hm=function(e){var r=e;return r},Wm=function(e){var r=p(Pl,1667,25e3,Hm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ko({fU:n,fY:a})},Gm=function(e){return e},Im=function(e){return{$:0,a:e}},Om=Im,Jm={$:3},qm=Jm,Km=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Zm=Km,Xm=$(function(e,r){return r.b?p(Lr,D,r,e):e}),Ge=function(e){return p(Lr,Xm,P,e)},Qm=$(function(e,r){return Ge(o(ee,e,r))}),e0=function(e){return{$:1,a:e}},r0=e0,n0=function(e){return o(Ar,"height",Ve(e))},a0=function(e){return v$(m$(e))},t0=a0,o0=function(e){return{$:2,a:e}},i0=o0,c0=function(e){return o(Fr,"",e)},l0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return er(l*1e3)/1e3},c=function(l){return er(l*1e4)/100};return c0(b(["rgba(",te(c(r)),"%,",te(c(n)),"%,",te(c(a)),"%,",te(i(t)),")"]))},u0=$(function(e,r){switch(r.$){case 0:return o(sf,e,r);case 1:return o(df,e,r);case 2:return o(mf,e,r);case 3:return o(pf,e,r);case 4:return o(bf,e,r);default:return o(hf,e,r)}}),v0=$(function(e,r){switch(r.$){case 0:return o(N$,e,r);case 1:return o(H$,e,r);case 2:return o(W$,e,r);case 3:return o(G$,e,r);case 4:return o(I$,e,r);case 5:return o(O$,e,r);case 6:return o(J$,e,r);case 7:return o(q$,e,r);default:return K$(e)}}),$0=C(function(e,r,n){return p(ff,e,r,n)}),ki=function(e){var r=e;return r},sn=Mf,ut=w(sn,1,1,1,1),rr=C(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),f0=C(function(e,r,n){return{$:0,a:e,b:r,c:n}}),s0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(f0,n*a/t,n,n*(1-a-t)/t)}),Ja=Sf,d0=function(e){var r=e.a,n=e.b,a=e.c;return p(Ja,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},qa=$(function(e,r){return d0(o(s0,e,r))}),zl=$(function(e,r){return{dk:Mr(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,I:r.I+(e.I*r.q+e.J*r.t+e.K*r.w)*r.bW,J:r.J+(e.I*r.r+e.J*r.u+e.K*r.x)*r.bW,K:r.K+(e.I*r.s+e.J*r.v+e.K*r.y)*r.bW,bW:e.bW*r.bW}}),or=Ff,m0=function(e){return or({ds:e.q,dt:e.t,du:e.w,dv:e.I,dw:e.r,dx:e.u,dy:e.x,dz:e.J,dA:e.s,dB:e.v,dC:e.y,dD:e.K,dE:0,dF:0,dG:0,dH:1})},vt=fe(function(e,r,n,a,t){var i=a.dk?1:-1,c=w(sn,a.bW,a.bW,a.bW,i);return he(t,e,c,m0(a),a.dk,r,n)}),Ml=Ie(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(zl,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,h=o(D,x(vt,e,r,n,a,g),i.N);return{N:h,V:i.V,fz:i.fz};case 3:var y=t.b,S=o(D,x(vt,e,r,n,a,y),i.V);return{N:i.N,V:S,fz:i.fz};case 2:var _=t.a,L=o(D,x(vt,e,r,n,a,_),i.fz);return{N:i.N,V:i.V,fz:L};default:var A=t.a;return p(Rn,w(Ml,e,r,n,a),i,A)}}),p0=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Tl=p0,Do=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),b0=function(e){var r=e._,n=e.X,a=e.W;return w(Do,518,r,n,a)},h0=$(function(e,r){return{$:6,a:e,b:r}}),g0=h0,kl=b([b0({W:1,X:0,_:!1}),w(Tl,!1,!1,!1,!1),o(g0,0,1)]),cn=519,Ao=8,Dl=15,nn=7681,_0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},oe=j$,y0=$(function(e,r){return{$:0,a:e,b:r}}),C0=y0({c8:1,dh:0,dQ:5}),Fe=yf,S0=C0(b([{dY:o(Fe,-1,-1)},{dY:o(Fe,1,-1)},{dY:o(Fe,-1,1)},{dY:o(Fe,1,1)}])),x0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},w0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Bo=C(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(ae,c(v.bm),o(ae,l(v.a9),o(ae,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(w0,a,t,i)))}),Fo=function(e){return p(Bo,{ci:e.ci,cH:e.cH,cY:e.cY},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Vo=function(e){return x(oe,b([Fo(e),w(Tl,!1,!1,!1,!1)]),x0,_0,S0,{})},L0=Vo({a9:nn,ci:0,cH:Ao,bm:cn,cY:Dl,bu:nn,bv:nn}),P0=516,Di=5386,Ce=7680,z0=function(e){return o(Hn,2,e+4)},Al=function(e){return Vo({a9:Ce,ci:Dl,cH:Ao,bm:P0,cY:z0(e),bu:Di,bv:Di})},M0=C(function(e,r,n){return Ge(b([p(rr,e,n,kl),b([Al(r),L0])]))}),T0=$(function(e,r){return Ge(o(Uc,M0(e),r))}),k0=function(e){var r=e._,n=e.X,a=e.W;return w(Do,513,r,n,a)},D0=k0({W:1,X:0,_:!0}),A0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},B0=function(e){var r=e.bU,n=e.bF,a=e.bz,t=e.bw,i=e.bB,c=e.aI,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,h=v.c;return A0(s)(d)(m)(f)(g)(h)(r)(n)(a)(t)});return o(l,i,c)},F0=C(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ai=$(function(e,r){var n=e,a=r;return p(F0,32774,n,a)}),V0=1,Bi=771,U0=770,Uo=B0({bw:0,aI:o(Ai,V0,Bi),bz:0,bB:o(Ai,U0,Bi),bF:0,bU:0}),Kr=b([D0,Uo]),E0=function(e){var r=e;return r.dJ},Y0=function(e){var r=e;return r.dK},Bl=function(e){var r=e;return r.dL},R0=function(e){var r=e;return r.dM},j0=function(e){var r=e;return r.dN},Fl=function(e){var r=e;return r.dO},yr=$(function(e,r){var n=e,a=r;return a-n}),Vl=function(e){return B(o(yr,R0(e),E0(e)),o(yr,j0(e),Y0(e)),o(yr,Fl(e),Bl(e)))},Ka=function(e){var r=e;return r.cu},Fi=function(e){var r=e;return Ka(r)},N0=function(e){return e},H0=function(e){return jr({cu:N0({fU:e.I,fY:e.J,c$:e.K}),cZ:_r({fU:e.q,fY:e.r,c$:e.s}),c_:_r({fU:e.t,fY:e.u,c$:e.v}),c0:_r({fU:e.w,fY:e.x,c$:e.y})})},$t=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c$*v.c$,fY:a.fU*l.fU+a.fY*l.fY+a.c$*l.c$,c$:a.fU*i.fU+a.fY*i.fY+a.c$*i.c$}}),Ul=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fU:c*g.fU+l*g.fY+u*g.c$,fY:c*m.fU+l*m.fY+u*m.c$,c$:c*s.fU+l*s.fY+u*s.c$}}),Wn=function(e){var r=e;return r.cZ},Gn=function(e){var r=e;return r.c_},In=function(e){var r=e;return r.c0},El=$(function(e,r){return{cu:o(Ul,e,Ka(r)),cZ:o($t,e,Wn(r)),c_:o($t,e,Gn(r)),c0:o($t,e,In(r))}}),zr=C(function(e,r,n){return{fU:e,fY:r,c$:n}}),Ta=function(e){var r=e;return r},$e=$(function(e,r){var n=e,a=r;return o(ke,n,a)}),wn=$(function(e,r){return I(e,r)<0?e:r}),be=$(function(e,r){var n=e,a=r;return o(wn,n,a)}),W0=$(function(e,r){var n=Ta(r),a=Ta(e);return{dJ:o($e,a.dJ,n.dJ),dK:o($e,a.dK,n.dK),dL:o($e,a.dL,n.dL),dM:o(be,a.dM,n.dM),dN:o(be,a.dN,n.dN),dO:o(be,a.dO,n.dO)}}),Ye=function(e){var r=e;return r},G0=function(e){var r=e;return B(r.fU,r.fY,r.c$)},Ln=$(function(e,r){var n=e,a=r;return a+n}),I0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ua(xe(a)),c=ua(xe(n)),l=ua(xe(t)),u=G0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(Ln,c,v),dK:o(Ln,i,s),dL:o(Ln,l,d),dM:o(yr,c,v),dN:o(yr,i,s),dO:o(yr,l,d)}}),Vi=V(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fY*r,s=t.fU*r,d=Ye(In(e)),m=O(l*d.fU)+O(c*d.fY)+O(i*d.c$),f=Ye(Gn(e)),g=O(l*f.fU)+O(c*f.fY)+O(i*f.c$),h=Ye(Wn(e)),y=O(l*h.fU)+O(c*h.fY)+O(i*h.c$),S=o(I0,B(y,g,m),o(Ul,e,p(zr,s,v,u)));if(a.$)return re(S);var _=a.a;return re(o(W0,_,S))}),Gt=V(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,h=n,y=i;e=f,r=g,n=h,a=y;continue e;case 1:var c=t.a,l=w(Vi,e,r,c,n),f=e,g=r,h=l,y=i;e=f,r=g,n=h,a=y;continue e;case 2:var f=e,g=r,h=n,y=i;e=f,r=g,n=h,a=y;continue e;case 3:var c=t.a,l=w(Vi,e,r,c,n),f=e,g=r,h=l,y=i;e=f,r=g,n=h,a=y;continue e;case 4:var u=t.a,f=e,g=r,h=w(Gt,e,r,n,u),y=i;e=f,r=g,n=h,a=y;continue e;default:var v=t.a,s=t.b,d=o(El,H0(v),e),m=r*v.bW,f=e,g=r,h=w(Gt,d,m,n,b([s])),y=i;e=f,r=g,n=h,a=y;continue e}}else return n}),Wr=xf,Gr=wf,Ir=Lf,Yl=function(e){return{$:4,a:e}},O0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(D,n,r);e=t,r=i;continue e}else return r}),dn=function(e){return Yl(o(O0,e,P))},J0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:0,J:0,K:0,bW:1},q0=function(e){var r=e;return r},Ui=Vo({a9:nn,ci:0,cH:Ao,bm:cn,cY:255,bu:nn,bv:nn}),K0=function(e){var r=e,n=o(ke,O(r.fU),o(ke,O(r.fY),O(r.c$)));if(n){var a=r.c$/n,t=r.fY/n,i=r.fU/n,c=hr(i*i+t*t+a*a);return c*n}else return tr},Ae={bz:0,eu:!1,bF:0,cD:0,bU:0,cT:0,fU:0,fY:0,c$:0},Ne=$(function(e,r){var n=e,a=r;return or({ds:n.fU,dt:n.bU,du:a.fU,dv:a.bU,dw:n.fY,dx:n.bF,dy:a.fY,dz:a.bF,dA:n.c$,dB:n.bz,dC:a.c$,dD:a.bz,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),_n=z({be:o(Ne,Ae,Ae),bK:o(Ne,Ae,Ae),bL:o(Ne,Ae,Ae),bM:o(Ne,Ae,Ae)},w(sn,0,0,0,0)),ie=$(function(e,r){var n=r;return e*n}),Ei=function(e){var r=e;return-r},Rl=514,jl=function(e){var r=e._,n=e.X,a=e.W;return w(Do,515,r,n,a)},Nl=240,Z0=b([jl({W:1,X:0,_:!0}),Fo({a9:Ce,ci:Nl,cH:0,bm:Rl,cY:0,bu:Ce,bv:Ce}),Uo]),X0=$(function(e,r){var n=e,a=r.fg,t=r.eO,i=r.en,c=xe(a),l=c,u=xe(t),v=u,s=n.cF;if(s.$){var m=s.a;return Ft(v)?or({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):or({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return Ft(v)?or({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):or({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),Zn=$(function(e,r){return(1&e>>r)===1?0:1}),Q0=function(e){return b([jl({W:1,X:0,_:!0}),Fo({a9:Ce,ci:Nl,cH:e,bm:Rl,cY:0,bu:Ce,bv:Ce}),Uo])},ep=C(function(e,r,n){return Ge(o(ee,function(a){var t=a<<4,i=w(sn,o(Zn,a,0),o(Zn,a,1),o(Zn,a,2),o(Zn,a,3));return p(rr,e,z(r,i),Q0(t))},o(Cr,1,o(Hn,2,n)-1)))}),ka=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c$:-r.c$}},an=function(e){var r=e;return r},rp=Vf,Yi=function(e){var r=e;return ka(In(r))},Hl=_r({fU:1,fY:0,c$:0}),Eo=Hl,Yo=Oa,Ro=_r({fU:0,fY:0,c$:1}),Wl=Ro,np={cu:mr,cZ:Eo,c_:Yo,c0:Wl},Or=function(e){var r=e;return r},ap=function(e){var r=Or(Ka(e)),n=Ye(In(e)),a=Ye(Gn(e)),t=Ye(Wn(e));return or({ds:t.fU,dt:a.fU,du:n.fU,dv:r.fU,dw:t.fY,dx:a.fY,dy:n.fY,dz:r.fY,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},tp=$(function(e,r){var n=r;return ap(o(El,n,e))}),op=function(e){return o(tp,np,e)},ip=function(e){var r=e;return r.cX},cp=function(e){var r=e;return Wn(r)},lp=C(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),up=function(e){var r=e;return Gn(r)},vp=function(e){var r=ip(e.es),n=jr({cu:Fi(r),cZ:cp(r),c_:up(r),c0:ka(Yi(r))}),a=dn(e.aQ),t=a,i=w(Gt,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=op(r),u=o(ie,.99,o($e,xe(e.ex),Ei(Bl(c)))),v=Vl(c),s=v.a,d=v.b,m=v.c,f=K0(p(lp,s,d,m)),g=o(ie,1.01,o(Ln,f,Ei(Fl(c)))),h=o(X0,e.es,{en:e.en,eO:g,fg:u}),y=rp(h).dH,S=y?Ye(ka(Yi(r))):an(Fi(r)),_=function(){var se=e.fK;switch(se.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=se.a;return z(3,de);case 4:var de=se.a;return z(4,de);default:return z(5,0)}}(),L=_.a,A=_.b,R=e.eM,Y=R,E=o(qa,Y,e.fR),H=E,j=or({ds:0,dt:S.fU,du:Wr(H),dv:e.d8,dw:0,dx:S.fY,dy:Gr(H),dz:q0(f),dA:0,dB:S.c$,dC:Ir(H),dD:L,dE:0,dF:y,dG:0,dH:A}),U=he(Ml,j,l,h,J0,t,{N:P,V:P,fz:P}),K=e.e8;switch(K.$){case 0:var X=K.a;return Ge(b([p(rr,U.N,z(X,ut),Kr),p(rr,U.V,_n,Kr)]));case 1:var X=K.a;return Ge(b([p(rr,U.N,_n,Kr),b([Ui]),p(rr,U.fz,X.be,kl),b([Al(0)]),p(rr,U.N,z(X,ut),Z0),p(rr,U.V,_n,Kr)]));default:var Le=K.a,Pe=K.b;return Ge(b([p(rr,U.N,z(Pe,ut),Kr),b([Ui]),o(T0,U.fz,Le),p(ep,U.N,Pe,Rr(Le)),p(rr,U.V,_n,Kr)]))}},$p=function(e){return o(Ar,"width",Ve(e))},fp=$(function(e,r){var n=b([r0(1),i0(0),Om(!0),w(Zm,0,0,0,0)]),a=function(){var L=e.el;switch(L.$){case 0:return B(n,"0",1);case 1:return B(o(D,qm,n),"1",1);default:var A=L.a;return B(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=ki(v),d=o(ne,"height",Ve(s)+"px"),m=ki(u),f=m/s,g=o(Qm,function(L){return vp({en:f,es:e.es,ex:e.ex,aQ:L.aQ,eM:L.eM,e8:L.e8,d8:c,fK:L.fK,fR:L.fR})},r),h=o(ne,"width",Ve(m)+"px"),y=e.aJ,S=y,_=l0(S);return p(t0,"div",b([o(ne,"padding","0px"),h,d]),b([z(i,p($0,t,b([$p(er(m*c)),n0(er(s*c)),h,d,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),sp=function(e){return{$:2,a:e}},dp=function(e){return sp(e)},mp=function(e){return o(fp,{el:dp(e.b5),aJ:e.aJ,es:e.es,ex:e.ex,aL:e.aL},b([{aQ:e.aQ,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR}]))},Ri=function(e){return e},lr=function(e){return e},pp=$(function(e,r){return mp({el:e.el,aJ:Gm(e.ep),es:e.es,ex:lr(e.ex),b5:e.b5,aL:z(Ri(er(e.cM.fS)),Ri(er(e.cM.eV))),aQ:r,eM:e.eM,e8:e.e8,fK:e.fK,fR:e.fR})}),Gl=function(e){return e},bp=$(function(e,r){var n=e,a=Ye(r.eF),t=a.fU,i=a.fY,c=a.c$,l=o(qa,r.bH,r.aK),u=l;return{bz:Ir(u),eu:n,bF:Gr(u),cD:0,bU:Wr(u),cT:1,fU:-t,fY:-i,c$:-c}}),ln=tv,Vn=ov,jo=$(function(e,r){var n=e,a=r,t=ln(a);return{fU:t*ln(n),fY:t*Vn(n),c$:Vn(a)}}),hp=function(e){return o(bp,Gl(!0),{aK:e.aK,eF:o(jo,dr(e.by),dr(e.bD)),bH:e.bH})},gp=function(e){return e},_p=function(e){return gp(1.2*o(Hn,2,e))},ft=ko({fU:.37208,fY:.37529}),yp=$(function(e,r){return{$:2,a:e,b:r}}),Il=function(e){return{$:0,a:e}},Xn=function(e){var r=e;return r},Cp=function(e){var r=e;return r.eu},Sp=Il(_n.a),xp=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(D,a,i),c):z(i,o(D,a,c))});return p(Lr,n,z(P,P),r)}),wp=function(e){var r=e;return or({ds:r.fU,dt:r.bU,du:0,dv:0,dw:r.fY,dx:r.bF,dy:0,dz:0,dA:r.c$,dB:r.bz,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},Lp=Q(function(e,r,n,a,t,i,c,l){var u=o(xp,Cp,b([Xn(e),Xn(r),Xn(n),Xn(a)])),v=u.a,s=u.b;if(v.b){var d=ce(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,h=f.b,y=h.a,S=h.b,_=S.a;return o(yp,o(ee,wp,v),{be:o(Ne,m,g),bK:o(Ne,y,_),bL:o(Ne,t,i),bM:o(Ne,c,l)})}else return Sp}else return Il({be:o(Ne,e,r),bK:o(Ne,n,a),bL:o(Ne,t,i),bM:o(Ne,c,l)})}),Pp=V(function(e,r,n,a){return Ua(Lp,e,r,n,a,Ae,Ae,Ae,Ae)}),zp=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(Wa,e,r.aw))}),Mp=$(function(e,r){return o(fr,0,Ia(o(Ga,zp(e),r)))}),Tp=$(function(e,r){return o(Mp,e,r.ey)}),yn=Tp,kp={$:5},Dp=kp,Ap=ko({fU:.44757,fY:.40745}),Bp=function(e){return e},Ol=w(Je,114/255,159/255,207/255,1),ji=function(e){return e},st=function(e){return e},Fp={$:1},Vp=Fp,Up=$(function(e,r){var n=e,a=Or(r.dY),t=a.fU,i=a.fY,c=a.c$,l=o(qa,r.bH,r.aK),u=l;return{bz:Ir(u),eu:n,bF:Gr(u),cD:0,bU:Wr(u),cT:2,fU:t,fY:i,c$:c}}),Ni=function(e){return o(Up,Gl(!0),{aK:e.aK,bH:e.bH,dY:ca(e.dY)})},Jl=w(Je,52/255,101/255,164/255,1),Ep=function(e){var r=e;return r},Yp=function(e){var r=e;return Ep(r.eo)},ql=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Rp=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Kl=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Zl=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),jp=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Np=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Hp=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),No=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return w(Hp,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return w(ql,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return w(Rp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return w(Kl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return w(Np,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return w(Zl,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return w(jp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ho={$:0},Wp=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Ta(c(u)),d=o(be,s.dM,e),m=o($e,s.dJ,r),f=o(be,s.dN,n),g=o($e,s.dK,a),h=o(be,s.dO,t),y=o($e,s.dL,i),S=c,_=v;e=d,r=m,n=f,a=g,t=h,i=y,c=S,l=_;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),Gp=C(function(e,r,n){var a=Ta(e(r));return Ua(Wp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),dt=$(function(e,r){var n=e,a=r;return I(a,n)<1}),Xl=function(e){return o(dt,e.dJ,e.dM)&&o(dt,e.dK,e.dN)&&o(dt,e.dL,e.dO)?e:{dJ:o($e,e.dM,e.dJ),dK:o($e,e.dN,e.dK),dL:o($e,e.dO,e.dL),dM:o(be,e.dM,e.dJ),dN:o(be,e.dN,e.dK),dO:o(be,e.dO,e.dL)}},Un=function(e){var r=e;return r},Pn=function(e){var r=e;return r.fU},zn=function(e){var r=e;return r.fY},Mn=function(e){var r=e;return r.c$},Ql=function(e){var r=Un(e),n=r.a,a=r.b,t=r.c,i=Pn(n),c=zn(n),l=Mn(n),u=Pn(a),v=zn(a),s=Mn(a),d=Pn(t),m=zn(t),f=Mn(t);return Xl({dJ:o($e,i,o($e,u,d)),dK:o($e,c,o($e,v,m)),dL:o($e,l,o($e,s,f)),dM:o(be,i,o(be,u,d)),dN:o(be,c,o(be,v,m)),dO:o(be,l,o(be,s,f))})},eu=Pf,ur=function(e){return eu(Or(e))},ru=function(e){var r=e;return r},Za=function(e){return eu(ru(e))},nu=function(e){return e},Ip=$(function(e,r){var n=e,a=r,t=o(ke,O(a.fU),o(ke,O(a.fY),O(a.c$)));if(t){var i=a.c$/t,c=a.fY/t,l=a.fU/t,u=hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c$:n*i/u}}else return Ll}),Op=Ip(nu(1)),au=C(function(e,r,n){var a=o(Ma,r,n),t=o(Ma,e,r);return Op(o(Mo,a,t))}),Jp=function(e){var r=Un(e),n=r.a,a=r.b,t=r.c,i=Za(p(au,n,a,t));return B({o:i,dY:ur(n)},{o:i,dY:ur(a)},{o:i,dY:ur(t)})},qp=$(function(e,r){return{$:2,a:e,b:r}}),tu=qp({c8:3,dh:0,dQ:4}),Kp=function(e){if(e.b){var r=e.a,n=e.b,a=tu(o(ee,Jp,e)),t=p(Gp,Ql,r,n);return w(ql,t,e,a,0)}else return Ho},De=C(function(e,r,n){return B(e,r,n)}),ve=C(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c$:i}}),ou=function(){var e=lr(1),r=lr(1),n=lr(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(ve,i,t,a),l=o(ie,.5,e),u=p(ve,i,t,l),v=o(ie,.5,r),s=p(ve,i,v,a),d=p(ve,i,v,l),m=o(ie,.5,n),f=p(ve,m,t,a),g=p(ve,m,v,a),h=p(ve,m,t,l),y=p(ve,m,v,l);return No(Kp(b([p(De,c,g,f),p(De,c,s,g),p(De,u,h,y),p(De,u,y,d),p(De,f,g,y),p(De,f,y,h),p(De,c,d,s),p(De,c,u,d),p(De,c,f,h),p(De,c,h,u),p(De,s,y,g),p(De,s,d,y)])))}(),Qn={$:0},Zp=C(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Xp=C(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Za(p(au,u,l,c)),s={o:v,dY:ur(u)},d={o:v,dY:ur(l)},m={o:v,dY:ur(c)};return o(D,s,o(D,d,o(D,m,n)))}),Wo=function(e){var r=e;return r.E},Qp=V(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),It=4294967295>>>32-An,Ot=qu,e1=C(function(e,r,n){e:for(;;){var a=It&r>>>e,t=o(Ot,a,n);if(t.$){var v=t.a;return o(Ot,It&r,v)}else{var i=t.a,c=e-An,l=r,u=i;e=c,r=l,n=u;continue e}}}),r1=function(e){return e>>>5<<5},n1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,r1(n))>-1?re(o(Ot,It&e,i)):re(p(e1,a,e,t))}),Go=function(e){var r=e;return r.ai},mt=$(function(e,r){return o(n1,e,Go(r))}),a1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return w(Qp,C(function(c,l,u){return B(c,l,u)}),o(mt,a,e),o(mt,t,e),o(mt,i,e))};return o(Ga,r,Wo(e))},t1=C(function(e,r,n){e:for(;;){var a=o(go,Ee,e),t=a.a,i=a.b;if(I(At(t),Ee)<0)return o(Wc,!0,{z:r,l:n,p:t});var c=i,l=o(D,Nc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Io=function(e){return e.b?p(t1,e,P,0):Rc},o1=C(function(e,r,n){return e(r(n))}),i1=$(function(e,r){return!o(nl,o(o1,gs,e),r)}),c1=$(function(e,r){return p(Lr,$(function(n,a){return e(n)?o(D,n,a):a}),P,r)}),l1=function(e){var r=e.a;return r},iu=$(function(e,r){var n=l1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(i1,a,r)?{E:r,ai:e}:{E:o(c1,a,r),ai:e}}),u1=C(function(e,r,n){return{$:3,a:e,b:r,c:n}}),On=u1({c8:1,dh:3,dQ:4}),va=$(function(e,r){var n=an(r),a=an(e);return z(B(a.fU,a.fY,a.c$),B(n.fU,n.fY,n.c$))}),Hi=p(Ja,0,0,0),pt=Ie(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Wa,o(va,e,r),t);if(v.$){var d={o:Hi,dY:ur(r)},m={o:Hi,dY:ur(e)},f=u+1,g=u;return B(o(D,B(n,g,f),o(D,B(n,f,a),c)),o(D,d,o(D,m,l)),u+2)}else{var s=v.a;return B(o(D,B(n,s,a),c),l,u)}}),v1=fe(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,h=a,y=e,S=r,_=v,L=a+3,A=he(pt,s,m,f,h,r,he(pt,d,s,g,f,r,he(pt,m,d,h,g,r,t)));e=y,r=S,n=_,a=L,t=A;continue e}else{var R=t,Y=R.a,E=R.b;return z(Y,Ue(E))}}),$1=fe(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,h=n,y=p(Sn,o(va,m,s),f,p(Sn,o(va,s,d),g,p(Sn,o(va,d,m),h,t))),S=o(D,B(h,g,f),a),_=e,L=v,A=n+3,R=S,Y=y;e=_,r=L,n=A,a=R,t=Y;continue e}else return B(a,t,n)}),Br=C(function(e,r,n){var a=a1(n),t=p(Lr,Xp(r),P,a),i=x($1,r,a,0,P,xl),c=i.a,l=i.b,u=i.c,v=x(v1,r,l,a,0,B(c,P,u)),s=v.a,d=v.b,m=Wt(d)?t:ce(t,d);return p(Zp,e,o(iu,Io(m),s),o(On,m,s))}),Jt=function(e){return{E:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Cr,0,Rr(e)-1)),ai:Io(Ge(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},cu=function(e){switch(e.$){case 0:return Qn;case 1:var a=e.a,r=e.b,n=o(ee,Un,r);return p(Br,a,Ur,Jt(n));case 2:var a=e.a,r=e.b,n=o(ee,Un,r);return p(Br,a,Ur,Jt(n));case 3:var a=e.a,t=e.b;return p(Br,a,Ur,t);case 4:var a=e.a,t=e.b;return p(Br,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Br,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Br,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Br,a,function(i){return i.dY},t);case 8:return Qn;case 9:return Qn;default:return Qn}},Wi=cu(ou),f1=function(e){var r=e;return r.aL},lu={$:0},M=lu,Se=$(function(e,r){return{$:1,a:e,b:r}}),s1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},d1=1029,m1=function(e){return{$:5,a:e}},uu=function(e){var r=e;return m1(r)},p1=uu(d1),b1=1028,h1=uu(b1),Te=C(function(e,r,n){return r===1?e?o(D,p1,n):o(D,h1,n):n}),vu={src:`
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
    `,attributes:{position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},bt=V(function(e,r,n,a){return o(Se,r,Q(function(t,i,c,l,u,v,s,d){return x(oe,p(Te,l,a,d),vu,s1,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),$u={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ax"}},fu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pr=V(function(e,r,n,a){return o(Se,r,Q(function(t,i,c,l,u,v,s,d){return x(oe,p(Te,l,a,d),fu,$u,n,{ax:e,b:c,c:i,d:v,e:t,f:u})}))}),su=$(function(e,r){return{$:3,a:e,b:r}}),g1={src:`
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
    `,attributes:{},uniforms:{constantColor:"ax",pointRadius:"bS",sceneProperties:"e"}},du={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},_1=V(function(e,r,n,a){return o(su,n,Q(function(t,i,c,l,u,v,s,d){return x(oe,d,du,g1,a,{ax:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),mu={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Xa=function(e){var r=e;return r},Oo=zf,br=fe(function(e,r,n,a,t){return o(Se,n,Q(function(i,c,l,u,v,s,d,m){return x(oe,p(Te,u,t,m),fu,mu,a,{aO:o(Oo,Xa(r),e),b:l,c,d:s,e:i,f:v})}))}),y1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bS",sceneProperties:"e"}},C1=fe(function(e,r,n,a,t){return o(su,a,Q(function(i,c,l,u,v,s,d,m){return x(oe,m,du,y1,t,{aO:o(Oo,Xa(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},bu={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ea=V(function(e,r,n,a){return o(Se,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return x(oe,p(Te,l,a,d),bu,pu,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),hu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"ck",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},gu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},S1=Ie(function(e,r,n,a,t,i){return o(Se,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,h=m.b;return x(oe,p(Te,v,i,f),gu,hu,t,{Q:h,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,ck:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),_u={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b0",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"co",normalMapTexture:"aX",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},x1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Se,u,Q(function(d,m,f,g,h,y,S,_){var L=S.a,A=S.b;return x(oe,p(Te,g,s,_),gu,_u,v,{b0:e,b2:r,b3:i,b4:a,Q:A,be:L.be,bK:L.bK,bL:L.bL,bM:L.bM,co:t,b:f,c:m,aX:c,d:y,cL:n,e:d,a0:l,f:h})}))}}}}}}}}}}},yu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b$",enabledLights:"Q",lights12:"be",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},ra=Ie(function(e,r,n,a,t,i){return o(Se,a,Q(function(c,l,u,v,s,d,m,f){var g=m.a,h=m.b;return x(oe,p(Te,v,i,f),bu,yu,t,{b$:e,Q:h,be:g.be,bK:g.bK,bL:g.bL,bM:g.bM,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),w1=function(e){return{$:0,a:e}},Gi=$(function(e,r){return{$:1,a:e,b:r}}),Tn=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),L1=function(e){return w(sn,Wr(e),Gr(e),Ir(e),1)},Jo=w(sn,0,0,0,0),$a=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Jo)}else{var n=r.a;return z(e,L1(n))}}),Cu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Gi,z(t,Jo),o(Tn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Gi,o($a,t,e),o(Tn,t,r))}else{var a=n.a.a;return n.b.a,w1(a)}}),P1=C(function(e,r,n){return{$:0,a:e,b:r,c:n}}),na=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),z1=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),M1=function(e){return o(Fe,e,1)},qt=o(Fe,0,0),Zr=$(function(e,r){if(r.$){var a=r.a.C;return z(a,qt)}else{var n=r.a;return z(e,M1(n))}}),Su=V(function(e,r,n,a){var t=w(z1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return w(na,z(u,Jo),o(Zr,u,r),o(Zr,u,n),o(Tn,u,a))}else if(t.b.$){var u=t.b.a.C;return w(na,o($a,u,e),z(u,qt),o(Zr,u,n),o(Tn,u,a))}else if(t.c.$){var u=t.c.a.C;return w(na,o($a,u,e),o(Zr,u,r),z(u,qt),o(Tn,u,a))}else if(t.d.$){var u=t.d.a.C;return w(na,o($a,u,e),o(Zr,u,r),o(Zr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(P1,i,c,l)}}),T1={src:`
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
    `,attributes:{},uniforms:{backlight:"bZ",colorTexture:"bC",sceneProperties:"e"}},ht=fe(function(e,r,n,a,t){return o(Se,n,Q(function(i,c,l,u,v,s,d,m){return x(oe,p(Te,u,t,m),vu,T1,a,{bZ:Xa(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),xu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},k1=V(function(e,r,n,a){return o(Se,r,Q(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return x(oe,p(Te,l,a,d),xu,hu,n,{Q:f,be:m.be,bK:m.bK,bL:m.bL,bM:m.bM,ck:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),D1=eo(function(e,r,n,a,t,i,c,l,u){return o(Se,c,Q(function(v,s,d,m,f,g,h,y){var S=h.a,_=h.b;return x(oe,p(Te,m,u,y),xu,_u,l,{b0:e,b2:r,b3:i,b4:a,Q:_,be:S.be,bK:S.bK,bL:S.bL,bM:S.bM,co:t,b:d,c:s,aX:e,d:g,cL:n,e:v,a0:0,f})}))}),En=C(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),A1=function(e){var r=e;return p(En,r.dM,r.dJ,.5)},B1=function(e){var r=e;return p(En,r.dN,r.dK,.5)},F1=function(e){var r=e;return p(En,r.dO,r.dL,.5)},V1=function(e){return p(ve,A1(e),B1(e),F1(e))},W=function(e){var r=Vl(e),n=r.a,a=r.b,t=r.c;return{ev:Or(V1(e)),eR:n/2,eS:a/2,eT:t/2}},qo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return w(bt,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(bt,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(bt,l,W(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return w(pr,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return w(pr,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return w(pr,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return w(pr,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return w(pr,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return w(pr,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return w(pr,n,W(t),c,a);case 8:var t=r.a,c=r.c;return w(pr,n,W(t),c,0);case 9:var t=r.a,c=r.c;return w(pr,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return w(_1,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var t=r.a,c=r.c,a=r.d;return x(ht,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(ht,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(ht,l,v,W(t),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var t=r.a,c=r.c,a=r.d;return x(br,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(br,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(br,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(br,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(br,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(br,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(br,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return x(br,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return x(br,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(C1,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,Y=e.c,d=o(Cu,s,Y);if(d.$){var g=d.a,h=g.a;g.b;var y=d.b,S=y.a,_=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return w(k1,h,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return he(S1,h,S,_,W(t),c,f);case 8:return M;case 9:return M;default:return M}}else{var m=d.a;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,f=r.d;return w(ea,m,W(t),c,f);case 3:return M;case 4:var t=r.a,c=r.c,f=r.d;return w(ea,m,W(t),c,f);case 5:return M;case 6:var t=r.a,c=r.c,f=r.d;return w(ea,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return w(ea,m,W(t),c,f);case 8:return M;case 9:return M;default:return M}}default:e.a;var L=e.b,A=e.c,R=e.d,Y=e.e,E=w(Su,L,A,R,Y);if(E.$){var K=E.a,X=K.a,Le=K.b,Pe=E.b,se=Pe.a,de=Pe.b,qe=E.c,Ke=qe.a,Jr=qe.b,qr=E.d,S=qr.a,_=qr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return Wu(D1,X,Le,se,de,Ke,Jr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x1(X)(Le)(se)(de)(Ke)(Jr)(S)(_)(W(t))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var H=E.a,j=E.b,U=E.c;switch(r.$){case 0:return M;case 1:return M;case 2:var t=r.a,c=r.c,a=r.d;return he(ra,H,j,U,W(t),c,a);case 3:return M;case 4:var t=r.a,c=r.c,a=r.d;return he(ra,H,j,U,W(t),c,a);case 5:return M;case 6:var t=r.a,c=r.c,a=r.d;return he(ra,H,j,U,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return he(ra,H,j,U,W(t),c,a);case 8:return M;case 9:return M;default:return M}}}}),gt=function(e){var r=e;return r.fU},_t=function(e){var r=e;return r.fY},yt=function(e){var r=e;return r.c$},U1=function(e){var r=e,n=yt(r.c0),a=_t(r.c0),t=gt(r.c0),i=yt(r.c_),c=_t(r.c_),l=gt(r.c_),u=yt(r.cZ),v=_t(r.cZ),s=gt(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},E1=function(e){var r=Or(Ka(e)),n=Ye(In(e)),a=Ye(Gn(e)),t=Ye(Wn(e));return{dk:U1(e),q:t.fU,r:t.fY,s:t.c$,t:a.fU,u:a.fY,v:a.c$,w:n.fU,x:n.fY,y:n.c$,I:r.fU,J:r.fY,K:r.c$,bW:1}},Xr=$(function(e,r){return{$:5,a:e,b:r}}),Qa=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,t=n.b,i=o(zl,a,e);return o(Xr,i,t);case 1:return o(Xr,e,n);case 3:return o(Xr,e,n);case 2:return o(Xr,e,n);default:return o(Xr,e,n)}}),wu=$(function(e,r){return o(Qa,E1(e),r)}),et=function(e){return{$:2,a:e}},Y1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fU:n*i.fU,fY:a*i.fY,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),R1=kf,j1=Tf,Ii=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=j1(a),g=f.fU,h=f.fY,y=f.c$,S=f.ei,_=R1({ei:S,fU:g*s,fY:h*d,c$:y*m});return Ua(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Kt=$(function(e,r){switch(r.$){case 0:return lu;case 5:var n=r.a,a=r.b;return o(Xr,n,o(Kt,e,a));case 1:var t=r.a,i=r.b;return o(Se,o(Y1,e,t),o(Ii,e,i));case 3:return r;case 2:var i=r.a;return et(o(Ii,e,i));default:var c=r.a;return Yl(o(ee,Kt(e),c))}}),Ko=$(function(e,r){var n=r;return o(Kt,e,n)}),Zo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Lu=7683,Pu=7682,N1=p(Bo,{ci:0,cH:0,cY:15},{a9:Ce,bm:cn,bu:Ce,bv:Lu},{a9:Ce,bm:cn,bu:Ce,bv:Pu}),H1=p(Bo,{ci:0,cH:0,cY:15},{a9:Ce,bm:cn,bu:Ce,bv:Pu},{a9:Ce,bm:cn,bu:Ce,bv:Lu}),Xo=$(function(e,r){return e?o(D,H1,r):o(D,N1,r)}),W1={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},G1=function(e){if(e.$){var r=e.c;return re(Q(function(n,a,t,i,c,l,u,v){return x(oe,o(Xo,i,v),W1,Zo,r,{b:t,c:a,d:l,e:n,bX:u,f:c})}))}else return q},Da=function(e){var r=G1(e);if(r.$)return M;var n=r.a;return et(n)},I1=V(function(e,r,n,a){var t=o(qo,n,ou),i=function(){var s=z(e,r);return s.a?s.b?dn(b([t,Da(Wi)])):t:s.b?Da(Wi):M}(),c=f1(a),l=c.a,u=c.b,v=c.c;return o(wu,Yp(a),o(Ko,B(l,u,v),i))}),zu=$(function(e,r){return w(I1,!0,!0,e,r)}),Ct=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),St=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),O1=_r({fU:-1,fY:0,c$:0}),J1=_r({fU:0,fY:-1,c$:0}),Mu=_r({fU:0,fY:0,c$:-1}),q1=Ie(function(e,r,n,a,t,i){var c=o(Ct,n,i)?Ro:Mu,l=o(Ct,r,t)?Oa:J1,u=o(Ct,e,a)?Hl:O1,v=B(xe(o(yr,e,a)),xe(o(yr,r,t)),xe(o(yr,n,i))),s=p(ve,o(St,e,a),o(St,r,t),o(St,n,i)),d=jr({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aL:v}}),Tu=$(function(e,r){return he(q1,Pn(e),zn(e),Mn(e),Pn(r),zn(r),Mn(r))}),tn=$(function(e,r){var n=r/2;return o(zu,e,o(Tu,p(zr,-n,-n,-n),p(zr,n,n,n)))}),K1=function(e){return dn(e)},Re=K1,ku=w(Je,138/255,226/255,52/255,1),Z1=w(Je,173/255,127/255,168/255,1),Oi=function(e){return{$:0,a:e}},Du=C(function(e,r,n){return{$:2,a:e,b:r,c:n}}),xt=function(e){return p(Pl,0,1,e<=.04045?e/12.92:o(Hn,(e+.055)/1.055,2.4))},X1=function(e){var r=pl(e),n=r.cG,a=r.b7,t=r.b1;return p(Ja,xt(n),xt(a),xt(t))},we=function(e){return p(Du,0,Oi(X1(e)),Oi(0))},Q1=C(function(e,r,n){return{fU:e,fY:r,c$:n}}),e3=function(e){var r=ru(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:r.fU,J:r.fY,K:r.c$,bW:1}},Au=$(function(e,r){return o(Qa,e3(e),r)}),r3=$(function(e,r){return o(Au,e,r)}),Qo=function(e){var r=e.a,n=e.b,a=e.c;return r3(p(Q1,r,n,a))},xr=function(e){return Qo(B(e,0,0))},_e=function(e){return Qo(B(0,e,0))},Bu=function(e){var r=e;return r.eF},Fu=function(e){var r=e;return r.cu},n3=$(function(e,r){var n=r,a=Or(Fu(e)),t=.5*n,i=ln(t),c=Vn(t),l=Ye(Bu(e)),u=l.fU*c,v=i*u,s=u*u,d=l.fY*c,m=i*d,f=u*d,g=d*d,h=1-2*(s+g),y=l.c$*c,S=i*y,_=2*(f-S),L=2*(f+S),A=u*y,R=2*(A+m),Y=2*(A-m),E=d*y,H=2*(E-v),j=2*(E+v),U=y*y,K=1-2*(g+U),X=1-2*(s+U);return{dk:!0,q:K,r:L,s:Y,t:_,u:X,v:j,w:R,x:H,y:h,I:a.fU-K*a.fU-_*a.fY-R*a.c$,J:a.fY-L*a.fU-X*a.fY-H*a.c$,K:a.c$-Y*a.fU-j*a.fY-h*a.c$,bW:1}}),a3=C(function(e,r,n){return o(Qa,o(n3,e,r),n)}),ei=C(function(e,r,n){return p(a3,e,r,n)}),rt=$(function(e,r){return{eF:r,cu:e}}),t3=o(rt,mr,Eo),Aa=$(function(e,r){return p(ei,t3,dr(e),r)}),o3=o(rt,mr,Yo),vr=$(function(e,r){return p(ei,o3,dr(e),r)}),i3=o(rt,mr,Wl),un=$(function(e,r){return p(ei,i3,dr(e),r)}),Vu=$(function(e,r){return(r-Hc(r/e)*e)/e}),Qe=$(function(e,r){return 360*o(Vu,e,r)}),c3=cv,Yr=function(e){return e*pe/180},Ji={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},qi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Cn=function(e){var r=Un(e),n=r.a,a=r.b,t=r.c,i=an(n),c=an(a),l=an(t);return or({ds:i.fU,dt:c.fU,du:l.fU,dv:0,dw:i.fY,dx:c.fY,dy:l.fY,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},aa=tu(b([B({cS:0},{cS:1},{cS:2})])),l3=$(function(e,r){var n=Ql(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,M;var t=e.b.a;return o(Se,a,Q(function(_,L,A,R,Y,E,H,j){return x(oe,p(Te,R,0,j),Ji,$u,aa,{ax:t,b:A,c:L,d:E,e:_,br:Cn(r),f:Y})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return o(Se,a,Q(function(_,L,A,R,Y,E,H,j){return x(oe,p(Te,R,0,j),Ji,mu,aa,{aO:o(Oo,Xa(c),i),b:A,c:L,d:E,e:_,br:Cn(r),f:Y})}));case 2:e.a;var l=e.b,f=e.c,u=o(Cu,l,f);if(u.$)return M;var v=u.a;return o(Se,a,Q(function(_,L,A,R,Y,E,H,j){var U=H.a,K=H.b;return x(oe,p(Te,R,0,j),qi,pu,aa,{Q:K,be:U.be,bK:U.bK,bL:U.bL,bM:U.bM,cj:v,b:A,c:L,d:E,e:_,br:Cn(r),f:Y})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=w(Su,s,d,m,f);if(g.$)return M;var h=g.a,y=g.b,S=g.c;return o(Se,a,Q(function(_,L,A,R,Y,E,H,j){var U=H.a,K=H.b;return x(oe,p(Te,R,0,j),qi,yu,aa,{b$:h,Q:K,be:U.be,bK:U.bK,bL:U.bL,bM:U.bM,cn:S,b:A,c:L,d:E,cK:y,e:_,br:Cn(r),f:Y})}))}}),u3=function(){var e=b([{a$:o(Fe,0,1)},{a$:o(Fe,1,1)},{a$:o(Fe,2,1)},{a$:o(Fe,0,-1)},{a$:o(Fe,1,-1)},{a$:o(Fe,2,-1)}]),r=b([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(On,e,r)}(),v3={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",triangleVertexPositions:"br",viewMatrix:"f"}},Ki=function(e){return et(Q(function(r,n,a,t,i,c,l,u){return x(oe,o(Xo,t,u),v3,Zo,u3,{b:a,c:n,d:c,e:r,bX:l,br:Cn(e),f:i})}))},$3=V(function(e,r,n,a){var t=o(l3,n,a),i=z(e,r);return i.a?i.b?dn(b([t,Ki(a)])):t:i.b?Ki(a):M}),f3=$(function(e,r){return w($3,!0,!0,e,r)}),s3=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(f3,e,p(De,p(zr,n.fU,n.fY,n.c$),p(zr,a.fU,a.fY,a.c$),p(zr,t.fU,t.fY,t.c$)))}),fa=w(Je,255/255,255/255,255/255,1),Uu=function(){var e=hr(3)/2,r=o(s3,we(fa),B({fU:e,fY:0,c$:0},{fU:0,fY:.5,c$:0},{fU:0,fY:-.5,c$:0})),n=o(xr,-(e/3),o(vr,c3(1/3),r));return o(_e,-(e/3),o(Aa,Yr(90),Re(b([o(xr,-(e/3),r),n,o(un,Yr(120),n),o(un,Yr(240),n)]))))}(),d3=function(e){var r=function(n){return o(un,o(Qe,300,e.D),o(vr,o(Qe,300,e.D),o(Aa,o(Qe,300,e.D),n)))};return Re(b([o(_e,2,o(xr,-2,r(o(tn,we(ku),1)))),o(_e,2,o(xr,2,r(o(tn,we(Jl),1)))),o(_e,4,r(o(tn,we(Z1),1))),o(_e,1.5,r(Uu))]))},Zt=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(zu,e,o(Tu,p(zr,-c,-l,-u),p(zr,c,l,u)))}),m3=C(function(e,r,n){return{k:o(rt,e,r),e6:xe(n.e6),fs:xe(n.fs)}}),p3=function(e){var r=e;return r.k},kn=function(e){var r=e;return ln(r)},b3=$(function(e,r){var n=r;return n/e}),Zi=function(e){var r=e;return{fU:ln(r),fY:Vn(r)}},h3=$(function(e,r){var n=e.dY,a=e.o;return o(D,{o:Za(a),dY:ur(n)},r)}),g3=Va(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Ir(l.dY),s=Gr(l.dY),d=Wr(l.dY),m=o(wn,e,d),f=o(ke,r,d),g=o(wn,n,s),h=o(ke,a,s),y=o(wn,t,v),S=o(ke,i,v),_=u;e=m,r=f,n=g,a=h,t=y,i=S,c=_;continue e}else return Xl({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Eu=$(function(e,r){var n=Ir(e.dY),a=Gr(e.dY),t=Wr(e.dY);return ro(g3,t,t,a,a,n,n,r)}),_3=function(e){var r=p(Dc,h3,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(On,r,Wo(e)),i=o(Eu,n,a);return w(Kl,i,e,t,0)}else return Ho},Xi=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c$:a.fU*l.c$+a.fY*i.c$}}),Ba=function(e){var r=e;return Vn(r)},Xt=function(e){return dr(2*pe*e)},y3=Ur,Qi=y3({cu:mr,cZ:Eo,c_:Yo}),Yu=function(){var e=72,r=o(b3,e,Xt(1)),n=lr(1),a=rn(Ro),t=rn(Mu),i=lr(1),c=o(ie,.5,i),l=p(ve,tr,tr,c),u=o(ie,-.5,i),v=p(ve,tr,tr,u),s=function(f){var g=o(ie,f,r),h=rn(o(Xi,Qi,Zi(g))),y=o(ie,kn(g),n),S=o(ie,Ba(g),n),_=p(ve,y,S,c),L=p(ve,y,S,u),A=o(wa,e,f+1),R=o(ie,A,r),Y=rn(o(Xi,Qi,Zi(R))),E=o(ie,kn(R),n),H=o(ie,Ba(R),n),j=p(ve,E,H,u),U=p(ve,E,H,c);return b([B({o:t,dY:v},{o:t,dY:j},{o:t,dY:L}),B({o:h,dY:L},{o:Y,dY:j},{o:Y,dY:U}),B({o:h,dY:L},{o:Y,dY:U},{o:h,dY:_}),B({o:a,dY:l},{o:a,dY:_},{o:a,dY:U})])},d=o(ee,s,o(Cr,0,e-1)),m=Jt(Ge(d));return No(_3(m))}(),ec=cu(Yu),C3=function(e){var r=Bu(e),n=To(r),a=n.a,t=n.b;return jr({cu:Fu(e),cZ:a,c_:t,c0:r})},S3=function(e){var r=e;return r.e6},x3=function(e){var r=e;return r.fs},w3=V(function(e,r,n,a){var t=C3(p3(a)),i=o(qo,n,Yu),c=function(){var d=z(e,r);return d.a?d.b?dn(b([i,Da(ec)])):i:d.b?Da(ec):M}(),l=x3(a),u=l,v=S3(a),s=v;return o(wu,t,o(Ko,B(u,u,s),c))}),L3=$(function(e,r){return w(w3,!0,!0,e,r)}),P3=C(function(e,r,n){return o(L3,e,p(m3,mr,Oa,{e6:lr(n),fs:lr(r)}))}),z3=$(function(e,r){var n=Or(e),a=1-r;return{dk:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:a*n.fU,J:a*n.fY,K:a*n.c$,bW:r}}),M3=C(function(e,r,n){return o(Qa,o(z3,e,r),n)}),T3=C(function(e,r,n){return p(M3,e,r,n)}),sa=T3(mr),k3=function(){var e=Re(b([o(tn,we(fa),1),o(vr,Yr(45),o(tn,we(fa),1))]));return Re(b([Re(b([e,o(_e,-.4,o(sa,1.3,e))])),o(_e,-.7,p(P3,we(fa),1,.5))]))}(),rc=w(Je,211/255,215/255,207/255,1),D3=w(Je,193/255,125/255,17/255,1),A3=$(function(e,r){return o(ye,function(n){if(n.$===1){var a=n.b;return a}else return 0},o(Wa,e,r.aw))}),B3=$(function(e,r){return o(fr,0,Ia(o(Ga,A3(e),r)))}),F3=$(function(e,r){return o(B3,e,r.ey)}),V3=F3,U3=V(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var h=g<0?g+1:g>1?g-1:g;return h*6<1?v+(u-v)*h*6:h*2<1?u:h*3<2?v+(u-v)*(2/3-h)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return w(Je,f,m,d,a)}),E3=C(function(e,r,n){return w(U3,e,r,n,1)}),Y3=function(e){return 2*pe*e},Qt=V(function(e,r,n,a){return e+(r-e)*(1+ln(Y3(o(Vu,n,a))))/2}),R3=function(e){var r=o(V3,"number of tree blocks",e),n=function(a){var t=o(wn,2,.2*(r-a)),i=p(E3,w(Qt,a/r,1,10,e.D),.6,.6),c=.25;return o(vr,o(yn,"turning speed of the tree",e)*a*w(Qt,3,5,10,e.D),o(_e,a*1.2*c,o(Zt,we(i),B(t,c,t))))};return Re(b([o(Zt,we(D3),B(.2,8,.2)),Re(o(ee,n,o(Cr,0,r-1)))]))},j3=function(e){var r=function(a){return o(_e,-1,o(Zt,a,B(10,1,10)))},n=function(a){return Re(b([r(a),o(vr,Yr(45),r(a))]))};return o(vr,o(Qe,1e3,e.D),Re(b([k3,n(we(rc)),o(_e,-.1,o(sa,1.1,n(we(Jl)))),o(_e,-.2,o(sa,1.2,n(we(rc)))),o(_e,1,o(xr,5,R3(e))),Re(o(ee,function(a){return o(vr,Yr(a*45),o(_e,-1/3,o(xr,5.5,o(sa,2,Uu))))},o(Cr,1,7)))])))},N3=w(Je,245/255,121/255,0/255,1),H3=function(e){var r=14;return Re(o(ee,function(n){return o(_e,4,o(un,o(Qe,1e3,e.D),o(Aa,o(Qe,1e3,e.D),o(vr,-o(Qe,200,e.D),o(vr,-(n/r*Yr(360)),o(xr,1.3,o(_e,w(Qt,-1,1,10,e.D),o(Aa,o(Qe,600,e.D),o(un,o(Qe,300,e.D),o(tn,we(N3),.3))))))))))},o(Cr,0,r-1)))},W3=function(e){return Qo(B(0,0,e))},G3=function(e){var r=e;return r.ev},I3=function(e){var r=e;return r.fs},ta=function(e){return dr(pe*(e/180))},nc=$(function(e,r){var n=e,a=r;return n/a}),O3=fe(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(D,i,t);if(Mr(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),ac=$(function(e,r){return e<1?P:x(O3,0,e,e,r,P)}),J3=$(function(e,r){var n=e.dY,a=e.o,t=e.M,i=t,c=i.a,l=i.b;return o(D,{o:Za(a),dY:ur(n),M:o(Fe,c,l)},r)}),q3=function(e){var r=p(Dc,J3,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(On,r,Wo(e)),i=o(Eu,n,a);return w(Zl,i,e,t,0)}else return Ho},K3=function(){var e=lr(1),r=72,n=o(Cr,0,r-1),a=o(ac,r,o(En,tr,Xt(1))),t=bo(r/2),i=o(Cr,0,t-1),c=o(ac,t,o(En,ta(90),ta(-90))),l=Io(Ge(o(ee,function(s){return o(ee,function(d){return{o:rn(o(jo,s,d)),dY:p(ve,o(ie,kn(d)*kn(s),e),o(ie,kn(d)*Ba(s),e),o(ie,Ba(d),e)),M:z(o(nc,s,Xt(1)),o(nc,o(Ln,ta(90),d),ta(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(ee,function(s){return Ge(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),h=o(u,s,d+1);return b([B(h,g,m),B(h,m,f)])},i))},n));return No(q3(o(iu,l,v)))}(),Fa=72,oa=2*Fa,Z3=$(function(e,r){e:for(;;){var n=oa+1,a=o(wa,oa,2*e+3),t=o(wa,oa,2*e+2),i=2*e+1,c=2*e,l=oa,u=o(D,B(l,c,t),o(D,B(c,a,t),o(D,B(c,i,a),o(D,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),X3=C(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Q3=$(function(e,r){e:for(;;){var n=p(X3,0,2*pe,e/Fa),a={bx:n,bP:0,bV:1},t={bx:n,bP:1,bV:1},i=o(D,a,o(D,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),eb=function(){var e=o(Q3,Fa-1,b([{bx:0,bP:0,bV:0},{bx:0,bP:1,bV:0}])),r=o(Z3,Fa-1,P);return o(On,e,r)}(),rb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bP",radiusScale:"bV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bX",viewMatrix:"f"}},tc=function(e){return et(Q(function(r,n,a,t,i,c,l,u){return x(oe,o(Xo,!0,u),rb,Zo,eb,{ax:p(Ja,0,0,1),b:a,c:n,d:c,e:r,bX:l,f:i})}))},nb=V(function(e,r,n,a){var t=o(qo,n,K3),i=function(){var u=z(e,r);return u.a?u.b?dn(b([t,tc()])):t:u.b?tc():M}(),c=I3(a),l=c;return o(Au,o(Ma,mr,G3(a)),o(Ko,B(l,l,l),i))}),ab=$(function(e,r){return w(nb,!0,!0,e,r)}),tb=C(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ob=fe(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),ib=$(function(e,r){return{$:0,a:e,b:r}}),cb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(ib,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(tb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Du,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return x(ob,n,a,t,i,c)}},lb=cb,ub=$(function(e,r){return{ev:r,fs:xe(e)}}),oc=$(function(e,r){return o(ab,lb(e),o(ub,lr(r),mr))}),vb=function(e){return Re(b([o(vr,-o(Qe,640,e.D),o(W3,3.5,o(un,o(Qe,100,e.D),Re(b([o(xr,-.02,o(oc,we(Ol),.5)),o(xr,.02,o(oc,we(ku),.5))])))))]))},$b=$(function(e,r){return b([j3(e),d3(e),H3(e),vb(e)])}),ic=function(e){var r=e;return r},fb=function(e){e:for(;;){if(Mr(e.di,tr)&&Mr(e.dj,tr))return Ae;if(o(wl,xe(e.di),xe(e.dj))){var r={aK:e.aK,di:e.dj,dj:e.di,ee:ka(e.ee)};e=r;continue e}else{var n=O(ic(e.dj)/pe),a=O(ic(e.di)/pe),t=Ye(e.ee),i=t.fU,c=t.fY,l=t.c$,u=o(qa,nu(1),e.aK),v=u;return{bz:a*Ir(v),eu:!1,bF:a*Gr(v),cD:n/a,bU:a*Wr(v),cT:3,fU:i,fY:c,c$:l}}}},sb=function(e){return fb({aK:e.aK,di:e.di,dj:e.dj,ee:o(jo,dr(e.by),dr(e.bD))})},db=$(function(e,r){var n=hp({by:o(yn,"azimuth for third light",e),aK:Wm(Bp(2e3)),bD:o(yn,"elevation for third light",e),bH:st(120)}),a=Ni({aK:ft,bH:ji(6e3),dY:{fU:2,fY:3,c$:1}}),t=sb({by:o(yn,"azimuth for fourth light",e),aK:ft,bD:o(yn,"elevation for fourth light",e),di:st(20),dj:st(10)}),i=Ni({aK:Ap,bH:ji(6e3),dY:{fU:-2,fY:4,c$:1}});return o(pp,{el:Vp,ep:Ol,es:Nm,ex:.1,b5:e.b5,eM:_p(6),e8:w(Pp,i,a,n,t),cM:e.cM,fK:Dp,fR:ft},o($b,e,r))}),mb=w(hm,db,wm,xm,gm);const pb={Main:{init:mb(o(k,function(e){return Be({e0:e})},o(T,"inputs",o(k,function(e){return o(k,function(r){return o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return Be({D:c,b5:i,eH:t,e4:a,fq:n,cM:r,fQ:e})},o(T,"clock",ue))},o(T,"devicePixelRatio",ue))},o(T,"dt",ue))},o(T,"keyboard",o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return o(k,function(s){return o(k,function(d){return Be({ek:d,ez:s,c7:v,eG:u,e5:l,fr:c,fv:i,fA:t,ed:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",Ca(Fn)))},o(T,"left",Z))},o(T,"pressedKeys",Ca(Fn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(k,function(n){return o(k,function(a){return o(k,function(t){return o(k,function(i){return o(k,function(c){return o(k,function(l){return o(k,function(u){return o(k,function(v){return Be({c7:v,e1:u,fb:l,fw:c,fx:i,ed:t,fU:a,fY:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ue))},o(T,"y",ue))))},o(T,"screen",o(k,function(r){return o(k,function(n){return Be({eV:n,fS:r})},o(T,"height",ue))},o(T,"width",ue))))},o(T,"wheel",o(k,function(e){return o(k,function(r){return Be({eC:r,eD:e})},o(T,"deltaX",ue))},o(T,"deltaY",ue)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},bb=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,h=g-F.clock;h<.009||(F.dt=h,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},hb=()=>{wt("pointerdown"),wt("wheel"),wt("keydown")},wt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},gb=pb.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});hb();bb(gb);
