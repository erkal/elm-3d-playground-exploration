(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function Cr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Cr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Cr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function V(e){return Cr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Cr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ie(e){return Cr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return Cr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return Cr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Nt(e){return Cr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function jt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Pa(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Iu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ou=[];function Ju(e){return e.length}var qu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),Qu=$(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Xu=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function yr(e,r){for(var n,a=[],t=ft(e,r,0,a);t&&(n=a.pop());t=ft(n.a,n.b,0,a));return t}function ft(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=fi(e),r=fi(r));for(var t in e)if(!ft(e[t],r[t],n+1,a))return!1;return!0}$(yr);$(function(e,r){return!yr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var ev=$(function(e,r){var n=I(e,r);return n<0?kc:n?Nf:Mc}),Tn=0;function T(e,r){return{a:e,b:r}}function A(e,r,n){return{a:e,b:r,c:n}}function er(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var P={$:0};function tr(e,r){return{$:1,a:e,b:r}}var rv=$(tr);function h(e){for(var r=P,n=e.length;n--;)r=tr(e[n],r);return r}function za(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});V(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return h(i)});Ie(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(za(r).sort(function(n,a){return I(e(n),e(a))}))});$(function(e,r){return h(za(r).sort(function(n,a){var t=o(e,n,a);return t===Mc?0:t===kc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var av=$(Math.pow);$(function(e,r){return r%e});var tv=$(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin,lv=Math.tan,uv=Math.atan;$(Math.atan2);function vv(e){return e}function $v(e){return e===1/0||e===-1/0}var fv=Math.ceil,sv=Math.floor,mv=Math.round,dv=Math.sqrt,Xo=Math.log,pv=isNaN;function bv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var gv=$(function(e,r){return e+r});function hv(e){var r=e.charCodeAt(0);return isNaN(r)?q:re(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}$(function(e,r){return e+r});function _v(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function yv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Sv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),xv=$(function(e,r){return r.split(e)}),Cv=$(function(e,r){return r.join(e)}),wv=S(function(e,r,n){return n.slice(e,r)});function Lv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Pv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),zv=$(function(e,r){return r.indexOf(e)>-1}),Tv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Mv=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function tc(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:re(n==45?-r:r)}function Dv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?re(r):q}function Bv(e){return za(e).join("")}function Av(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Uv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fv(e){return{$:0,a:e}}function Yt(e){return{$:2,b:e}}var Vv=Yt(function(e){return typeof e=="boolean"?$e(e):Ke("a BOOL",e)}),Ev=Yt(function(e){return typeof e=="number"?$e(e):Ke("a FLOAT",e)}),Rv=Yt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Ke("a STRING",e)});function Nv(e){return{$:3,b:e}}var jv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function wr(e,r){return{$:9,f:e,g:r}}var Yv=$(function(e,r){return{$:10,b:r,h:e}}),Gv=$(function(e,r){return wr(e,[r])}),Wv=S(function(e,r,n){return wr(e,[r,n])});V(function(e,r,n,a){return wr(e,[r,n,a])});he(function(e,r,n,a,t){return wr(e,[r,n,a,t])});Ie(function(e,r,n,a,t,i){return wr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return wr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return wr(e,[r,n,a,t,i,c,l])});Nt(function(e,r,n,a,t,i,c,l,u){return wr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ye(e,n)}catch(a){return Se(o(eo,"This is not valid JSON! "+a.message,r))}});var oc=$(function(e,r){return Ye(e,r)});function Ye(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Ke("null",r);case 3:return Nn(r)?Ko(e.b,r,h):Ke("a LIST",r);case 4:return Nn(r)?Ko(e.b,r,Hv):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var v=Ye(e.b,r[n]);return Je(v)?v:Se(o(si,n,v.a));case 7:var a=e.e;if(!Nn(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ye(e.b,r[a]);return Je(v)?v:Se(o(Dc,a,v.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Ke("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ye(e.b,r[i]);if(!Je(v))return Se(o(si,i,v.a));t=tr(T(i,v.a),t)}return $e(Ve(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ye(l[u],r);if(!Je(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ye(e.b,r);return Je(v)?Ye(e.h(v.a),r):v;case 11:for(var s=P,m=e.g;m.b;m=m.b){var v=Ye(m.a,r);if(Je(v))return v;s=tr(v.a,s)}return Se(jf(Ve(s)));case 1:return Se(o(eo,e.a,r));case 0:return $e(e.a)}}function Ko(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ye(e,r[i]);if(!Je(c))return Se(o(Dc,i,c.a));t[i]=c.a}return $e(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Hv(e){return o(ts,e.length,function(r){return e[r]})}function Ke(e,r){return Se(o(eo,"Expecting "+e,r))}function Jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Jr(e.b,r.b);case 6:return e.d===r.d&&Jr(e.b,r.b);case 7:return e.e===r.e&&Jr(e.b,r.b);case 9:return e.f===r.f&&ei(e.g,r.g);case 10:return e.h===r.h&&Jr(e.b,r.b);case 11:return ei(e.g,r.g)}}function ei(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Jr(e[a],r[a]))return!1;return!0}var Iv=$(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}S(function(e,r,n){return n[e]=r,n});function Nr(e){return{$:0,a:e}}function Ov(e){return{$:1,a:e}}function mr(e){return{$:2,b:e,c:null}}var st=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Jv(e){return{$:5,b:e}}var qv=0;function Gt(e){var r={$:0,e:qv++,f:e,g:null,h:[]};return Wt(r),r}function cc(e){return mr(function(r){r(Nr(Gt(e)))})}function lc(e,r){e.h.push(r),Wt(e)}var Zv=$(function(e,r){return mr(function(n){lc(e,r),n(Nr(Tn))})}),ja=!1,ri=[];function Wt(e){if(ri.push(e),!ja){for(ja=!0;e=ri.shift();)Qv(e);ja=!1}}function Qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}V(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Ht(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);Je(c)||an(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Xv(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),ai(l,b.b,t(v))}return ai(l,u.b,t(v)),m?{ports:m}:{}}var nr={};function Xv(e,r){var n;for(var a in nr){var t=nr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=e$(t,r)}return n}function Kv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function e$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(st,l,Jv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Gt(o(st,l,e.b))}var r$=$(function(e,r){return mr(function(n){e.g(r),n(Nr(Tn))})});$(function(e,r){return o(Zv,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function n$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var ni=[],Ya=!1;function ai(e,r,n){if(ni.push({p:e,q:r,r:n}),!Ya){Ya=!0;for(var a;a=ni.shift();)a$(a.p,a.q,a.r);Ya=!1}}function a$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=t$(e,t,a,r.l);n[t]=o$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function t$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?nr[r].e:nr[r].f;return o(i,t,a)}function o$(e,r,n){return n=n||{i:P,j:P},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function i$(e){nr[e]&&an(3)}$(function(e,r){return r});function c$(e,r){return i$(e),nr[e]={f:l$,u:r,a:u$},uc(e)}var l$=$(function(e,r){return function(n){return e(r(n))}});function u$(e,r){var n=P,a=nr[e].u,t=Nr(null);nr[e].b=t,nr[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);Je(l)||an(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ca,ur=typeof document<"u"?document:{};function It(e,r){e.appendChild(r)}V(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function mt(e){return{$:0,a:e}}var vc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ot(n),e:t,f:e,b:i}})}),jr=vc(void 0),v$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ot(n),e:t,f:e,b:i}})}),$$=v$(void 0);function f$(e,r,n,a){return{$:3,d:Ot(e),g:r,h:n,i:a}}var s$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Lr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return Lr([e,r],function(){return e(r)})});S(function(e,r,n){return Lr([e,r,n],function(){return o(e,r,n)})});V(function(e,r,n,a){return Lr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Lr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});Ie(function(e,r,n,a,t,i){return Lr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return Lr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return Lr([e,r,n,a,t,i,c,l],function(){return jt(e,r,n,a,t,i,c,l)})});Nt(function(e,r,n,a,t,i,c,l,u){return Lr([e,r,n,a,t,i,c,l,u],function(){return Pa(e,r,n,a,t,i,c,l,u)})});var $c=$(function(e,r){return{$:"a0",n:e,o:r}}),m$=$(function(e,r){return{$:"a1",n:e,o:r}}),fc=$(function(e,r){return{$:"a2",n:e,o:r}}),Pr=$(function(e,r){return{$:"a3",n:e,o:r}}),d$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function p$(e){return e=="script"?"p":e}function b$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o($c,r.n,g$(e,r.o)):r});function g$(e,r){var n=oo(r);return{$:r.$,a:n?p(os,n<3?h$:_$,De(e),r.a):o($a,e,r.a)}}var h$=$(function(e,r){return T(e(r.a),r.b)}),_$=$(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ot(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ti(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ti(c,t,i):c[t]=i}return r}function ti(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,hr(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?y$(e,t):a==="a0"?C$(e,r,t):a==="a3"?S$(e,t):a==="a4"?x$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function y$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function S$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function x$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function C$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=w$(r,i),e.addEventListener(t,c,Jt&&{passive:oo(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function w$(e,r){function n(a){var t=n.q,i=Ye(t.a,a);if(!!Je(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cX,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function L$(e,r){return e.$==r.$&&Jr(e.a,r.a)}function sc(e,r){var n=[];return qe(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function qe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=A$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];qe(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){_e(n,0,a,r);return}(f?!P$(m,d):m!==d)&&_e(n,2,a,d),qe(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:oi(e,r,n,a,z$);return;case 2:oi(e,r,n,a,T$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var y=qt(e.d,r.d);y&&_e(n,4,a,y);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function P$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function oi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=qt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&L$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function z$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];qe(s,i[v],n,++a),a+=s.b||0}}function T$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],y=g.a,x=b.a,_=g.b,w=b.b,M=void 0,j=void 0;if(y===x){f++,qe(_,w,t,f),f+=_.b||0,m++,d++;continue}var R=l[m+1],E=u[d+1];if(R){var N=R.a,Y=R.b;j=x===N}if(E){var U=E.a,Z=E.b;M=y===U}if(M&&j){f++,qe(_,Z,t,f),sn(i,t,y,w,d,c),f+=_.b||0,f++,mn(i,t,y,Y,f),f+=Y.b||0,m+=2,d+=2;continue}if(M){f++,sn(i,t,x,w,d,c),qe(_,Z,t,f),f+=_.b||0,m+=1,d+=2;continue}if(j){f++,mn(i,t,y,_,f),f+=_.b||0,f++,qe(Y,w,t,f),f+=Y.b||0,m+=2,d+=1;continue}if(R&&N===U){f++,mn(i,t,y,_,f),sn(i,t,x,w,d,c),f+=_.b||0,f++,qe(Y,Z,t,f),f+=Y.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;mn(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],b=u[d];sn(i,t,b.a,b.b,void 0,X),d++}(t.length>0||c.length>0||X)&&_e(n,8,a,{w:t,x:c,y:X})}var mc="_elmW6BL";function sn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];qe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}sn(e,r,n+mc,a,t,i)}function mn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];qe(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}mn(e,r,n+mc,a,t)}function dc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)dc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,y=0;y<g.length;y++){t++;var x=d===1?g[y]:g[y].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=dn(b[y],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function pc(e,r,n,a){return n.length===0?e:(dc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=M$(t,a);t===e&&(e=i)}return e}function M$(e,r){switch(r.$){case 0:return k$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return D$(e,r);case 5:return r.s(e);default:an(10)}}function k$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function D$(e,r){var n=r.s,a=B$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function B$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Zt(e){if(e.nodeType===3)return mt(e.textContent);if(e.nodeType!==1)return mt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(Pr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=tr(Zt(v[a]),u);return p(jr,l,r,u)}function A$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var U$=V(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Zt(l);return bc(i,function(v){var s=c(v),m=sc(u,s);l=pc(l,u,m,t),u=s})})});V(function(e,r,n,a){return Ht(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=ur.title,v=ur.body,s=Zt(v);return bc(i,function(m){ca=c;var d=l(m),f=jr("body")(P)(d.eu),g=sc(s,f);v=pc(v,s,g,t),s=f,ca=0,u!==d.fL&&(ur.title=u=d.fL)})})});var ua=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}$(function(e,r){return o(lo,io,mr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(lo,io,mr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(lo,io,mr(function(){history.replaceState({},"",r),e()}))});var F$={addEventListener:function(){},removeEventListener:function(){}},V$=typeof window<"u"?window:F$;S(function(e,r,n){return cc(mr(function(a){function t(i){Gt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ye(e,r);return Je(n)?re(n.a):q});function gc(e,r){return mr(function(n){ua(function(){var a=document.getElementById(e);n(a?Nr(r(a)):Ov(cs(e)))})})}function E$(e){return mr(function(r){ua(function(){r(Nr(e()))})})}$(function(e,r){return gc(r,function(n){return n[e](),Tn})});$(function(e,r){return E$(function(){return V$.scroll(e,r),Tn})});S(function(e,r,n){return gc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Tn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var R$=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return re(new RegExp(r,n))}catch{return q}});$(function(e,r){return r.match(e)!==null});var N$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?re(m):q}a.push(L(sl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});V(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?re(v):q}return n(L(sl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var j$=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Y$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Y$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Qt=new Float64Array(3),ii=new Float64Array(3),ci=new Float64Array(3),G$=S(function(e,r,n){return new Float64Array([e,r,n])}),W$=function(e){return e[0]},H$=function(e){return e[1]},I$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var O$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(hc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(hc(e,r,n),n)}$(_c);function yc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/yc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var J$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),pn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(pn);function pt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(pt);$(function(e,r){var n,a=Qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=pn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(pn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(pn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(pn(r,a)+e[14])/n,t});var q$=V(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Z$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},Q$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/X$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function X$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var K$=new Float64Array(16),ef=new Float64Array(16),rf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},nf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ie(Sc);V(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Sc(c,l,i,t,n,a)});function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ie(xc);V(function(e,r,n,a){return xc(e,r,n,a,-1,1)});function Cc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],y=e[13],x=e[14],_=e[15],w=r[0],M=r[1],j=r[2],R=r[3],E=r[4],N=r[5],Y=r[6],U=r[7],Z=r[8],X=r[9],le=r[10],fe=r[11],ce=r[12],pe=r[13],ke=r[14],Ce=r[15];return n[0]=a*w+l*M+m*j+b*R,n[1]=t*w+u*M+d*j+y*R,n[2]=i*w+v*M+f*j+x*R,n[3]=c*w+s*M+g*j+_*R,n[4]=a*E+l*N+m*Y+b*U,n[5]=t*E+u*N+d*Y+y*U,n[6]=i*E+v*N+f*Y+x*U,n[7]=c*E+s*N+g*Y+_*U,n[8]=a*Z+l*X+m*le+b*fe,n[9]=t*Z+u*X+d*le+y*fe,n[10]=i*Z+v*X+f*le+x*fe,n[11]=c*Z+s*X+g*le+_*fe,n[12]=a*ce+l*pe+m*ke+b*Ce,n[13]=t*ce+u*pe+d*ke+y*Ce,n[14]=i*ce+v*pe+f*ke+x*Ce,n[15]=c*ce+s*pe+g*ke+_*Ce,n}$(Cc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],y=r[1],x=r[2],_=r[4],w=r[5],M=r[6],j=r[8],R=r[9],E=r[10],N=r[12],Y=r[13],U=r[14];return n[0]=a*b+c*y+v*x,n[1]=t*b+l*y+s*x,n[2]=i*b+u*y+m*x,n[3]=0,n[4]=a*_+c*w+v*M,n[5]=t*_+l*w+s*M,n[6]=i*_+u*w+m*M,n[7]=0,n[8]=a*j+c*R+v*E,n[9]=t*j+l*R+s*E,n[10]=i*j+u*R+m*E,n[11]=0,n[12]=a*N+c*Y+v*U+d,n[13]=t*N+l*Y+s*U+f,n[14]=i*N+u*Y+m*U+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=va(r,Qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/yc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,y=c*l*v,x=i*i*v+u,_=g+f,w=b-d,M=g-f,j=c*c*v+u,R=y+m,E=b+d,N=y-m,Y=l*l*v+u,U=n[0],Z=n[1],X=n[2],le=n[3],fe=n[4],ce=n[5],pe=n[6],ke=n[7],Ce=n[8],pr=n[9],br=n[10],Na=n[11],Yu=n[12],Gu=n[13],Wu=n[14],Hu=n[15];return a[0]=U*x+fe*_+Ce*w,a[1]=Z*x+ce*_+pr*w,a[2]=X*x+pe*_+br*w,a[3]=le*x+ke*_+Na*w,a[4]=U*M+fe*j+Ce*R,a[5]=Z*M+ce*j+pr*R,a[6]=X*M+pe*j+br*R,a[7]=le*M+ke*j+Na*R,a[8]=U*E+fe*N+Ce*Y,a[9]=Z*E+ce*N+pr*Y,a[10]=X*E+pe*N+br*Y,a[11]=le*E+ke*N+Na*Y,a[12]=Yu,a[13]=Gu,a[14]=Wu,a[15]=Hu,a});function af(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(af);V(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function tf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(tf);V(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=y,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=y,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});S(function(e,r,n){var a=_c(e,r,Qt),t=va(pt(n,a,ii),ii),i=va(pt(a,t,ci),ci),c=K$,l=ef;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Cc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var li=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function Xt(e){for(var r=0;e.b;e=e.b)r++;return r}var of=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},cf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),lf=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),uf=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),vf=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),$f=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sf=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),mf=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),df=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},bf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},gf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},hf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},wc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},_f=function(e){e.gl.disable(e.gl.CULL_FACE)},yf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Sf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},xf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ui=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Cf=[bf,gf,hf,wc,Lc,_f,yf,Sf,xf];function vi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function wf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Lf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,y,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?y[x]:y[x][_];else i.forEach(function(w){for(_=0;_<g;_++)f[b++]=g===1?y[w][x]:y[w][x][_]})}var u=Pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Xt(n.b)*s);xn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Pf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=zf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Xt(r.b),indexBuffer:null,buffers:{}}}function zf(e,r){var n=new Uint32Array(Xt(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function $i(e,r){return e+"#"+r}var zc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),wc(n),Lc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=$i(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=li++,v||(v=vi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=li++,s||(s=vi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=wf(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Tf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=$i(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Mf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Pf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Lf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var y=Pc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(g+w),a.vertexAttribPointer(g+w,y.size,y.baseType,!1,_,x*w)}for(n.toggle=!n.toggle,xn(q0(n),i.a),u=0;u<ui.length;u++){var M=n[ui[u]];M.toggle!==n.toggle&&M.enabled&&(Cf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return xn(t,e.g),r});function Tf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,y=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(y,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(y,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(y,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(y,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Mf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var kf=S(function(e,r,n){return f$(r,{g:n,f:{},h:e},Ef,Rf)}),Df=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Bf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Af=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Uf=$(function(e,r){e.contextAttributes.antialias=!0}),Ff=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Vf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ef(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(J0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),of(function(){return o(zc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rf(e,r){return r.f=e.f,zc(r)}var B=rv,jn=Xu,Tc=S(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(jn,e,l,v)}else{var u=c.a;return p(jn,i,l,u)}});return p(jn,i,p(jn,e,r,t),a)}),Kt=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Kt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),fi=function(e){return p(Kt,S(function(r,n,a){return o(B,T(r,n),a)}),P,e)},Mc=1,Nf=2,kc=0,Se=function(e){return{$:1,a:e}},eo=$(function(e,r){return{$:3,a:e,b:r}}),si=$(function(e,r){return{$:0,a:e,b:r}}),Dc=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},jf=function(e){return{$:2,a:e}},re=function(e){return{$:0,a:e}},q={$:1},Yf=Pv,Gf=Iv,Ue=tc,Mr=$(function(e,r){return o(Cv,e,za(r))}),ro=$(function(e,r){return h(o(xv,e,r))}),Bc=function(e){return o(Mr,`
    `,o(ro,`
`,e))},Ta=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Vr=function(e){return p(Ta,$(function(r,n){return n+1}),0,e)},Wf=nv,Hf=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=$(function(e,r){return p(Hf,e,r,P)}),Ac=$(function(e,r){return p(Wf,e,o(Kr,0,Vr(r)-1),r)}),ar=Av,Uc=function(e){var r=ar(e);return 97<=r&&r<=122},Fc=function(e){var r=ar(e);return r<=90&&65<=r},If=function(e){return Uc(e)||Fc(e)},Of=function(e){var r=ar(e);return r<=57&&48<=r},Jf=function(e){return Uc(e)||Fc(e)||Of(e)},Ve=function(e){return p(Ta,B,P,e)},tn=hv,qf=$(function(e,r){return`

(`+(Ue(e+1)+(") "+Bc(Zf(r))))}),Zf=function(e){return o(Qf,e,P)},Qf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=tn(n);if(b.$===1)return!1;var y=b.a,x=y.a,_=y.b;return If(x)&&o(Yf,Jf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ue(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Mr,"",Ve(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Ue(Vr(s))+" ways:"));return o(Mr,`

`,o(B,g,o(Ac,qf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Mr,"",Ve(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Mr,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return g+(Bc(o(Gf,4,f))+(`

`+d))}}),Ee=32,bt=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gt=Ou,no=fv,ao=$(function(e,r){return Xo(r)/Xo(e)}),Xf=vv,Cn=no(o(ao,2,Ee)),Vc=L(bt,0,Cn,gt,gt),Ec=qu,Rc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Nc=sv,ht=Ju,Me=$(function(e,r){return I(e,r)>0?e:r}),Kf=function(e){return{$:0,a:e}},to=Zu,es=$(function(e,r){e:for(;;){var n=o(to,Ee,e),a=n.a,t=n.b,i=o(B,Kf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ve(i)}}),rs=function(e){var r=e.a;return r},ns=$(function(e,r){e:for(;;){var n=no(r/Ee);if(n===1)return o(to,Ee,e).a;var a=o(es,e,P),t=n;e=a,r=t;continue e}}),jc=$(function(e,r){if(r.l){var n=r.l*Ee,a=Nc(o(ao,Ee,n-1)),t=e?Ve(r.z):r.z,i=o(ns,t,r.l);return L(bt,ht(r.p)+n,o(Me,5,a*Cn),i,r.p)}else return L(bt,ht(r.p),Cn,gt,r.p)}),as=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(jc,!1,{z:a,l:n/Ee|0,p:t});var i=Rc(p(Ec,Ee,r,e)),c=e,l=r-Ee,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ts=$(function(e,r){if(e<=0)return Vc;var n=e%Ee,a=p(Ec,n,e-n,r),t=e-n-Ee;return C(as,r,t,e,P,a)}),Je=function(e){return!e.$},D=Yv,Q=Vv,k=jv,se=Ev,$a=Gv,os=Wv,De=Fv,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},J=jr("div"),is=function(e){return{$:2,a:e}},Yc=$(function(e,r){return e}),Gc=$(function(e,r){return{aK:r.aK,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),Dr=function(e){return e},cs=Dr,mi=Ie(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ls=zv,kr=_v,qr=wv,Mn=$(function(e,r){return e<1?r:p(qr,e,kr(r),r)}),Ma=Mv,ka=function(e){return e===""},Da=$(function(e,r){return e<1?"":p(qr,0,e,r)}),Wc=kv,di=he(function(e,r,n,a,t){if(ka(t)||o(ls,"@",t))return q;var i=o(Ma,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Wc(o(Mn,c+1,t));if(l.$===1)return q;var u=l;return re(ye(mi,e,o(Da,c,t),u,r,n,a))}else return re(ye(mi,e,t,q,r,n,a))}),pi=V(function(e,r,n,a){if(ka(a))return q;var t=o(Ma,"/",a);if(t.b){var i=t.a;return C(di,e,o(Mn,i,a),r,n,o(Da,i,a))}else return C(di,e,"/",r,n,a)}),bi=S(function(e,r,n){if(ka(n))return q;var a=o(Ma,"?",n);if(a.b){var t=a.a;return L(pi,e,re(o(Mn,t+1,n)),r,o(Da,t,n))}else return L(pi,e,q,r,n)});$(function(e,r){if(ka(r))return q;var n=o(Ma,"#",r);if(n.b){var a=n.a;return p(bi,e,re(o(Mn,a+1,r)),o(Da,a,r))}else return p(bi,e,q,r)});var us=Tv,io=function(e){},kn=Nr,vs=kn(0),Hc=V(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Ta,e,r,Ve(m)):L(Hc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=S(function(e,r,n){return L(Hc,e,r,0,n)}),ae=$(function(e,r){return p(dr,$(function(n,a){return o(B,e(n),a)}),P,r)}),fa=st,co=$(function(e,r){return o(fa,function(n){return kn(e(n))},r)}),$s=S(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return kn(o(e,a,t))},n)},r)}),fs=function(e){return p(dr,$s(B),kn(P),e)},ss=r$,ms=$(function(e,r){var n=r;return cc(o(fa,ss(e),n))}),ds=S(function(e,r,n){return o(co,function(a){return 0},fs(o(ae,ms(e),r)))}),ps=S(function(e,r,n){return kn(0)}),bs=$(function(e,r){var n=r;return o(co,e,n)});nr.Task=Kv(vs,ds,ps,bs);var gs=uc("Task"),lo=$(function(e,r){return gs(o(co,e,r))}),hs=U$,_s=bv,sa={$:1},Ic=function(e){return{$:2,a:e}},Ba={$:0},Ge=$(function(e,r){return{$:0,a:e,b:r}}),oe=S(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},ys=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return re(o(Ge,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Oc=function(e){var r=e.b;return o(Ge,Ba,r)},Sr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ss=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Oc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,on(n).aK)>0?o(oe,ys,Sr(o(Ge,sa,t))):Dr)(o(Ge,Ic({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(Gc,l.eA,er(r,{aK:l.aK+r.eJ})),s=o(e,v,u);return o(Ge,Ba,{B:T(v,s),ab:P,T:o(B,t.B,t.T)})}}),Jc=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),xs=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Cs=$(function(e,r){return Ve(p(xs,e,r,P))}),qc=S(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,y=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(Cs,r-4,y))))):o(B,_,o(B,c,o(B,s,o(B,b,p(qc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),ws=$(function(e,r){return p(qc,0,e,r)}),Ls=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Ve(n),ve(h([a]),t)),c=o(ws,e,i),l=o(Jc,e,i);if(l.b){var u=l.a,v=l.b;return o(Ge,sa,{B:u,ab:v,T:Ve(c)})}else{var s=Ve(c);if(s.b){var m=s.a,d=s.b;return o(Ge,sa,{B:m,ab:P,T:d})}else return r}}),Ps=function(e){var r=e.b;return o(Ge,sa,r)},zs=function(e){var r=e.b;return o(Ge,Ic({cY:on(e).aK}),r)},Ts=$(function(e,r){switch(e.$){case 1:return Ps(r);case 2:return Oc(r);case 3:return zs(r);default:var n=e.a;return o(Ls,n,r)}}),Zc=$(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),Ms=$(function(e,r){return er(r,{av:e(r.av)})}),ks=function(e){return{$:3,a:e}},Ds=function(e){return{$:2,a:e}},Bs=$(function(e,r){return{$:0,a:e,b:r}}),As=$(function(e,r){return{$:1,a:e,b:r}}),Fe=$(function(e,r){if(r.$)return q;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},uo=Dv,Us=S(function(e,r,n){return o(Sr,0/0,uo(o(e,r,n)))}),Qc=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Fs=Sv,Xc=function(e){return p(Fs,B,P,e)},Vs=$(function(e,r){var n=o(Qc,function(a){return a!=="0"&&a!=="."},Xc(r));return ve(e&&n?"-":"",r)}),ie=tc,_t=gv,Kc=Uv,el=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(_t,"0",el(t))}else{var i=ar(r);return i>=48&&i<57?o(_t,Kc(i+1),n):"0"}},yt=$v,Es=pv,Aa=function(e){return o(_t,e,"")},rl=S(function(e,r,n){return e<=0?n:p(rl,e>>1,ve(r,r),e&1?ve(n,r):n)}),wn=$(function(e,r){return p(rl,e,r,"")}),St=S(function(e,r,n){return ve(n,o(wn,e-kr(n),Aa(r)))}),xt=yv,nl=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Rs=function(e){var r=o(ro,"e",ie(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Sr,0,Wc(o(us,"+",t)?o(Mn,1,t):t)),c=nl(n),l=c.a,u=c.b,v=ve(l,u),s=i<0?o(Sr,"0",o(Fe,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Fe,Zc(Aa),tn(ve(o(wn,O(i),"0"),v))))):p(St,i+1,"0",v);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Ns=S(function(e,r,n){if(yt(n)||Es(n))return ie(n);var a=n<0,t=nl(Rs(O(n))),i=t.a,c=t.b,l=kr(i)+r,u=ve(o(wn,-l+1,"0"),p(St,l,"0",ve(i,c))),v=kr(u),s=o(Me,1,l),m=o(e,a,p(qr,s,v,u)),d=p(qr,0,s,u),f=m?xt(o(Sr,"1",o(Fe,el,tn(xt(d))))):d,g=kr(f),b=f==="0"?f:r<=0?ve(f,o(wn,O(r),"0")):I(r,kr(c))<0?p(qr,0,g-r,f)+("."+p(qr,g-r,g,f)):ve(i+".",p(St,r,"0",c));return o(Vs,a,b)}),al=Ns($(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ar(t))})),js=Us(al),Ys=S(function(e,r,n){var a=o(ao,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(js,t,n)}),tl=ev,ol=$(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(tl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},en=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return C(W,0,r,n,C(W,1,v,s,m,d),C(W,1,i,c,l,u))}else return C(W,e,i,c,C(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,y=f.d,x=f.e,d=a.e;return C(W,0,v,s,C(W,1,g,b,y,x),C(W,1,r,n,d,t))}else return C(W,e,r,n,a,t)}),Ct=S(function(e,r,n){if(n.$===-2)return C(W,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(tl,e,t);switch(u){case 0:return C(en,a,t,i,p(Ct,e,r,c),l);case 1:return C(W,a,t,r,c,l);default:return C(en,a,t,i,c,p(Ct,e,r,l))}}),Xn=S(function(e,r,n){var a=p(Ct,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(W,1,t,i,c,l)}else{var u=a;return u}}),Gs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},il=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,y=d.e,x=v.e;return C(W,0,f,g,C(W,1,n,a,C(W,0,i,c,l,u),b),C(W,1,s,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,x=w.e;return C(W,1,n,a,C(W,0,i,c,l,u),C(W,0,s,m,d,x))}else return e},gi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,y=f.d,x=f.e;return C(W,0,i,c,C(W,1,u,v,s,m),C(W,1,n,a,d,C(W,0,g,b,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,M=e.e;M.a;var g=M.b,b=M.c,y=M.d,x=M.e;return C(W,1,n,a,C(W,0,i,c,w,d),C(W,0,g,b,y,x))}else return e},Ws=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return C(W,n,l,u,v,C(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,gi(r)}else break e;else return c.a,c.d,gi(r);else break e;return r}}),Kn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(W,r,n,a,Kn(t),l);var u=il(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(en,v,s,m,Kn(d),f)}else return or}else return C(W,r,n,a,Kn(t),l)}else return or},hn=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(W,n,a,t,o(hn,e,i),c);var u=il(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(en,v,s,m,o(hn,e,d),f)}else return or}else return C(W,n,a,t,o(hn,e,i),c);else return o(Hs,e,jt(Ws,e,r,n,a,t,i,c))}),Hs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(yr(e,a)){var l=Gs(c);if(l.$===-1){var u=l.b,v=l.c;return C(en,n,u,v,i,Kn(c))}else return or}else return C(en,n,a,t,i,o(hn,e,c))}else return or}),Is=$(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(W,1,a,t,i,c)}else{var l=n;return l}}),Yn=S(function(e,r,n){var a=r(o(ol,e,n));if(a.$)return o(Is,e,n);var t=a.a;return p(Xn,e,t,n)}),Os=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Yn,r,Fe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(As,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Yn,r,Fe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Bs,T(i,c),p(Ys,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Yn,r,Fe(function(a){return a.$===3?ks(n):a}));default:var r=e.a,n=e.b;return o(Yn,r,Fe(function(a){return a.$===2?Ds(n):a}))}},Js=function(e){return Ms(Os(e))},qs=$(function(e,r){return o(ae,Js(e),r)}),Zs=$(function(e,r){return er(r,{eA:o(qs,e,r.eA)})}),Qs=$(function(e,r){var n=r.a,a=r.b;return o(Ge,n,er(a,{B:o(Zc,Zs(e),a.B)}))}),Xs=$(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),Ks=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ge,a,er(t,{B:o(Xs,o(e,i.a,r),i)}))}),em=V(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return er(a,{aM:!a.aM});case 2:var t=n.a;return er(a,{G:p(Ss,e,t,a.G)});case 3:var i=n.a;return er(a,{G:o(Qs,i,a.G)});case 4:var c=n.a;return er(a,{G:p(Ks,r,c,a.G)});default:var l=n.a;return er(a,{G:o(Ts,l,a.G)})}}),rm=$(function(e,r){return o(Ge,Ba,{B:T(e,r(e)),ab:P,T:P})}),nm=n$,hi=nm(P),ma=Nv,Ln=Rv,am=c$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Q))},o(k,"control",Q))},o(k,"down",Q))},o(k,"downs",ma(Ln)))},o(k,"left",Q))},o(k,"pressedKeys",ma(Ln)))},o(k,"right",Q))},o(k,"shift",Q))},o(k,"up",Q))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Q))},o(k,"isDown",Q))},o(k,"move",Q))},o(k,"rightDown",Q))},o(k,"rightUp",Q))},o(k,"up",Q))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se))))),tm=function(e){return{$:4,a:e}},om={$:0},im=ic,Oe=$(function(e,r){return o(fc,e,im(r))}),H=Oe("className"),cm=function(e){var r=e.b.B;return r.b},da=Oe("id"),lm=s$,pa=lm,um=m$,ne=um,vm={$:1},$m=function(e){return{$:3,a:e}},fm=function(e){return{$:5,a:e}},_i=jr("a"),vo=jr("button"),yi=function(e){return o(Oe,"href",b$(e))},sm=Pr("clip-rule"),we=Pr("d"),mm=Pr("fill"),cl=vc("http://www.w3.org/2000/svg"),dm=cl("svg"),pm=Pr("viewBox"),bm=o(d$,"http://www.w3.org/XML/1998/namespace","xml:space"),Re=dm(h([pm("0 0 24 24"),mm("currentColor"),o(ne,"width","100%"),o(ne,"height","100%"),bm("http://www.w3.org/2000/svg")])),gm=Pr("fill-rule"),Le=cl("path"),Br={eD:Re(h([o(Le,h([we("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Re(h([o(Le,h([we("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Re(h([o(Le,h([we("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Re(h([o(Le,h([we("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Le,h([we("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Re(h([o(Le,h([we("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Le,h([we("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Re(h([o(Le,h([we("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Re(h([o(Le,h([we("M7 5V19L18 12L7 5Z")]),P)])),fr:Re(h([o(Le,h([we("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Re(h([o(Le,h([we("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Re(h([o(Le,h([gm("evenodd"),sm("evenodd"),we("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Re(h([o(Le,h([we("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Re(h([o(Le,h([we("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},hm=function(e){return{$:0,a:e}},ll=$c,ul=$(function(e,r){return o(ll,e,hm(r))}),$o=function(e){return o(ul,"click",De(e))},Si=Oe("target"),_m=Oe("title"),wt=$(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(W,n,a,o(e,a,t),o(wt,e,i),o(wt,e,c))}),ym=mt,sr=ym,Sm=function(e){return p(Kt,S(function(r,n,a){return o(B,n,a)}),P,e)},xm=$(function(e,r){return{$:3,a:e,b:r}}),Cm=$(function(e,r){return{$:2,a:e,b:r}}),wm=$(function(e,r){return{$:0,a:e,b:r}}),Lm=$(function(e,r){return{$:1,a:e,b:r}}),zr=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Pm=L(zr,0/255,0/255,0/255,1),zm=ic,vl=$(function(e,r){return o(fc,e,zm(r))}),Tm=vl("checked"),Qe=mv,Mm=S(function(e,r,n){return ve(o(wn,e-kr(n),Aa(r)),n)}),ba=tv,$l=function(e){var r=function(n){return n<10?Ue(n):Aa(Kc(87+n))};return e<16?r(e):ve($l(e/16|0),r(o(ba,16,e)))},km=o(oe,$l,o(Mm,2,"0")),fo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b6:a,cd:n,cN:r}},Dm=function(e){var r=fo(e),n=r.cN,a=r.cd,t=r.b6;return o(Mr,"",o(B,"#",o(ae,o(oe,Qe,km),h([n*255,a*255,t*255]))))},Lt=Oe("htmlFor"),Pt=$(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ga=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return e(n)}}),Bm=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),fl=$(function(e,r){return p(dr,Bm(e),P,r)}),sl=V(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Am=N$,Um=Bv,Fm=$(function(e,r){if(r.$)return Se(e);var n=r.a;return $e(n)}),Vm=R$,Em=function(e){return o(Vm,{ew:!1,fg:!1},e)},ml=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return q},Rm=$(function(e,r){if(r.$){var a=r.a;return Se(a)}else{var n=r.a;return $e(e(n))}}),Nm=function(e){return{$:2,a:e}},jm=function(e){return{$:0,a:e}},Ym=function(e){return{$:1,a:e}},Ga=$(function(e,r){return ar(r)-ar(e)}),Wa=S(function(e,r,n){var a=ar(n);return I(ar(e),a)<1&&I(a,ar(r))<1}),Gm=$(function(e,r){var n=function(t){return I(t,e)<0?$e(t):Se(Ym(r))},a=p(Wa,"0","9",r)?$e(o(Ga,"0",r)):p(Wa,"a","z",r)?$e(10+o(Ga,"a",r)):p(Wa,"A","Z",r)?$e(10+o(Ga,"A",r)):Se(jm(r));return o(ga,n,a)}),dl=$(function(e,r){var n=tn(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ga,function(c){return o(ga,function(l){return $e(c+l*e)},o(dl,e,i))},o(Gm,e,t))}),Wm=$(function(e,r){return 2<=e&&e<=36?o(dl,e,xt(r)):Se(Nm(e))}),Hm=Wm(16),Im=S(function(e,r,n){return L(zr,e,r,n,1)}),Om=V(function(e,r,n,a){return L(zr,e,r,n,a)}),Dn=av,Jm=$(function(e,r){var n=o(Dn,10,e);return Qe(r*n)/n}),qm=Lv,Zm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Xc(n);if(a.b&&!a.b.b){var t=a.a;return Um(h([t,t]))}else return n};return o(oe,qm,o(oe,function(n){return o(Fe,function(a){return p(Am,1,a,n)},Em(e))},o(oe,Pt(ml),o(oe,Fe(function(n){return n.fG}),o(oe,Fe(fl(Dr)),o(oe,Fm("Parsing hex regex failed"),ga(function(n){var a=o(ae,o(oe,r,o(oe,Hm,Rm(Xf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return $e(L(Om,t/255,c/255,u/255,o(Jm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return $e(p(Im,t/255,c/255,u/255))}else break e;return Se("Parsing ints from hex failed")})))))))}(),ha=jr("input"),zt=jr("label"),Tt=Oe("name"),pl=$(function(e,r){return p(dr,k,r,e)}),Qm=o(pl,h(["target","checked"]),Q),Xm=function(e){return o(ul,"change",o($a,e,Qm))},Km=function(e){return T(e,!0)},ed=function(e){return{$:1,a:e}},rd=$(function(e,r){return o(ll,e,ed(r))}),nd=o(pl,h(["target","value"]),Ln),so=function(e){return o(rd,"input",o($a,Km,o($a,e,nd)))},bl=Oe("max"),gl=Oe("min"),hl=function(e){return o(Oe,"step",e)},_a=Oe("type"),mo=Oe("value"),xi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(J,P,h([o(zt,h([Lt(r)]),h([o(J,h([H("relative w-full")]),h([o(J,h([H("inline-block")]),h([sr(r)])),o(J,h([H("inline-block float-right")]),h([sr(ie(n))]))]))])),o(ha,h([_a("range"),o(ne,"width","100%"),da(r),Tt(r),gl(ie(a)),bl(ie(t)),mo(ie(n)),hl(ie(i)),so(o(oe,uo,o(oe,Sr(42),c)))]),P)]))},ad=$(function(e,r){if(r.$)return e;var n=r.a;return n}),td=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(J,h([H("h-12 py-4")]),h([o(zt,h([H("block"),Lt(e)]),h([o(ha,h([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),da(e),Tt(e),Xm(xm(e)),Tm(c)]),P),sr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return xi({cg:e,cs:i,cw:t,cA:wm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return xi({cg:e,cs:i,cw:t,cA:o(oe,Qe,Lm(e)),cW:1,c1:c});default:var c=r.a;return o(J,P,h([o(J,h([o(ne,"margin-bottom","6px")]),h([o(zt,h([Lt(e)]),h([sr(e)]))])),o(ha,h([_a("color"),o(ne,"width","100%"),o(ne,"height","26px"),o(ne,"padding","0px"),da(e),Tt(e),so(function(l){return o(Cm,e,o(ad,Pm,Zm(l)))}),mo(Dm(c))]),P)]))}}),od=function(e){return o(J,h([H("p-4 border-y-[0.5px] border-white20")]),h([o(J,h([H("text-lg pb-2")]),h([sr(e.fh)])),o(J,h([H("pl-2 pr-2")]),Sm(o(wt,td,e.av)))]))},id=function(e){return o(J,h([H("text-xs text-white60")]),o(ae,od,e))},cd=function(e){return o(J,h([H("absolute left-[104px] bottom-2 text-sm text-white40")]),h([sr("clock: "+o(al,3,on(e).aK))]))},ld=function(e){e.a;var r=e.b.T;return o(Fe,function(n){return Qe(60/(on(e).aK-n))},o(Fe,o(oe,rs,function(n){return n.aK}),ml(o(Jc,59,r))))},ud=function(e){return o(J,h([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=ld(e);if(r.$===1)return h([sr("... Fps")]);var n=r.a;return h([sr(Ue(n)+" Fps")])}())},vd=function(e){return{$:0,a:e}},$d=function(e){var r=e.b.T;return Vr(r)},fd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Vr(r)+1+Vr(n)},sd=function(e){return o(ha,h([H("absolute w-full"),_a("range"),gl(Ue(0)),bl(Ue(fd(e)-1)),mo(Ue($d(e))),hl(Ue(1)),so(o(oe,uo,o(oe,Sr(42),o(oe,Qe,vd))))]),P)},Ci={$:1},wi={$:3},Li={$:2},Mt=function(e){return!e.b},_l=vl("disabled"),Ha=S(function(e,r,n){return o(vo,h([H("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),H(n),_l(e),$o(r)]),h([sr("REC")]))}),Ia=S(function(e,r,n){return o(vo,h([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),_l(e),$o(n)]),h([o(J,h([H("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),md=function(e){var r=e.a,n=e.b.ab;return o(J,h([H("py-1")]),h([function(){switch(r.$){case 0:return p(Ha,!1,Ci,"text-red-500 font-bold");case 1:return p(Ha,!1,Li,"text-white60 hover:text-white80 font-bold");default:return p(Ha,!0,Li,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Ia,Mt(n),Br.fq,wi);case 1:return p(Ia,Mt(n),Br.fq,wi);default:return p(Ia,!1,Br.fp,Ci)}}()]))},dd=function(e){return o(J,h([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([sd(e),md(e),ud(e),cd(e)]))},pd=function(e){var r=e.a;return yr(r,Ba)},bd=$(function(e,r){var n=pd(r.G)?o(J,P,P):o(J,h([H("absolute pointer-events-none w-8 h-8"),o(ne,"left",ie(e.fs.fU+.5*e.cT.fS)+"px"),o(ne,"top",ie(-e.fs.fY+.5*e.cT.eW)+"px")]),h([o(J,h([H(e.fs.e4?"text-black80":"text-black40")]),h([Br.fs]))]));return o(J,P,h([n]))}),gd=$(function(e,r){var n=o(vo,h([H(r.aM?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),$o(vm),_m("Distraction Free Mode")]),h([Br.f0])),a=40,t=260,i=o(J,h([H("absolute w-8 bottom-12")]),h([o(_i,h([H("text-twitterBlue40 hover:text-twitterBlue"),yi("https://twitter.com/AzizErkalSelman"),Si("_blank")]),h([Br.fN]))])),c=80,l=o(J,h([H("absolute w-8 bottom-2")]),h([o(_i,h([H("text-githubCat40 hover:text-githubCat"),yi("https://github.com/erkal/elm-3d-playground-exploration"),Si("_blank")]),h([Br.eQ]))])),u=e.cT.fS>640?A(e.cT.eW,a+t,e.cT.fS-(a+t)):A(e.cT.eW-c,a,e.cT.fS-a),v=u.a,s=u.b,m=u.c;return r.aM?o(J,h([H("fixed w-10 h-10 p-1")]),h([n])):o(J,P,h([o(J,h([H("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ne,"width",ie(a)+"px")]),h([n,i,l])),o(J,h([H("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ne,"width",ie(t)+"px"),o(ne,"height",ie(v)+"px")]),h([o(pa,$m,id(on(r.G).eA))])),o(J,h([H("absolute bottom-0"),o(ne,"left",ie(s)+"px"),o(ne,"height",ie(c)+"px"),o(ne,"width",ie(m)+"px")]),h([o(pa,fm,dd(r.G))])),o(bd,e,r)]))}),hd=S(function(e,r,n){var a=cm(n.G),t=on(n.G);return o(J,h([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(ne,"width",ie(t.cT.fS)+"px"),o(ne,"height",ie(t.cT.eW)+"px")]),h([o(J,h([H("fixed")]),h([o(pa,Yc(om),o(e,t,a))])),o(J,h([da("gui")]),h([o(gd,t,n),o(pa,tm,o(r,t,a))]))]))}),_d=Ie(function(e,r,n,a,t,i){var c=$(function(u,v){return T(L(em,r,i,u,v),hi)}),l=function(u){var v=o(Gc,n,u.e1);return T({aM:u.e1.cT.fS<500,G:o(rm,v,a)},hi)};return hs({e0:l,fH:Yc(am(is)),fO:c,fQ:o(hd,e,t)})}),yd=V(function(e,r,n,a){return ye(_d,e,r,n,a,$(function(t,i){return o(J,P,P)}),S(function(t,i,c){return c}))}),Sd=S(function(e,r,n){return L(yd,e,r,P,n)}),xd=function(e){return{}},Cd=$(function(e,r){return r}),Er=ov,Pi=function(e){return e*Er/180},wd=uv,gr=dv,Ld=$(function(e,r){var n=e,a=r,t=a.c6-n.c6,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Me,O(c),o(Me,O(i),O(t)));if(l){var u=t/l,v=i/l,s=c/l,m=gr(s*s+v*v+u*u);return re({fU:s/m,fY:v/m,c6:u/m})}else return q}),Oa=function(e){return e},po=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),ea=function(e){var r=e,n=o(Me,O(r.fU),o(Me,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=gr(i*i+t*t+a*a);return re({fU:i/c,fY:t/c,c6:a/c})}else return q},ya=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Pd=$(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c6*n.c6}),yl=$(function(e,r){var n=e,a=r;return I(a,n)>0}),zd=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Td=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Md=$(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c6*n.c6;return{fU:n.fU*t,fY:n.fY*t,c6:n.c6*t}}),kd=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Ze=0,Sl={fU:0,fY:0,c6:0},Dd=S(function(e,r,n){return o(Pt,function(a){var t=o(Td,o(Md,a,r),r);return o(Pt,function(i){var c=o(po,r,e),l=o(Pd,n,c),u=o(yl,Ze,l)?c:o(zd,Ze,l)?kd(c):Sl;return o(Fe,function(v){return A(a,i,v)},ea(u))},ea(t))},ea(e))}),Bd=function(e){var r=e,n=O(r.c6),a=O(r.fY),t=O(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=gr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=gr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=gr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=gr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},bo=function(e){var r=Bd(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return T(r,c)},Zr=function(e){var r=e;return r},ir=function(e){return e},Ad=$(function(e,r){var n=bo(e),a=n.a,t=n.b;return ir({cB:r,c4:a,c5:t,c7:e})}),Ud=function(e){var r=o(ya,e.aS,e.dj),n=Zr(e.ei),a=o(po,r,n),t=p(Dd,r,n,a);if(t.$){var v=ea(r);if(v.$){var m=bo(e.ei),d=m.a,f=m.b;return ir({cB:e.dj,c4:f,c5:e.ei,c7:d})}else{var s=v.a;return o(Ad,s,e.dj)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return ir({cB:e.dj,c4:u,c5:l,c7:c})}},Ae={fU:0,fY:0,c6:0},Fd=function(e){return{$:0,a:e}},de=function(e){var r=e;return O(r)},ra=function(e){var r=e;return .5*r},Vd=lv,Ed=function(e){var r=e;return Vd(r)},Rd=function(e){var r=ra(de(e.ej)),n=Ed(r);return{cM:Fd(n),c2:e.c2}},vr=function(e){return e},go=vr({fU:0,fY:1,c6:0}),xr=function(e){return e},Nd=function(e){var r=e.aS,n=e.dj,a=e.ei;return Rd({ej:xr(2*wd(.5)),c2:Ud({dj:Oa(n),aS:Oa(r),ei:o(Sr,go,o(Ld,Ae,Oa(a)))})})},Ja=function(e){return e/255},jd=S(function(e,r,n){return L(zr,Ja(e),Ja(r),Ja(n),1)}),Yd=L(zr,52/255,101/255,164/255,1),Gd=L(zr,115/255,210/255,22/255,1),ho=function(e){return{$:5,a:e}},Wd=function(e){return ho(e)},_o=$(function(e,r){return{$:4,a:e,b:r}}),xl=function(e){return e},Hd=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Id=$(function(e,r){return xl(T(e,o(Hd,r,e)))}),Cl=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Od=$(function(e,r){var n=r.a,a=r.b,t=r.c;return p(Cl,e(n),e(a),e(t))}),_r=function(e){return e},qa=$(function(e,r){return o(_o,e,o(Id,Ae,o(Od,_r,r)))}),Jd=L(zr,204/255,0/255,0/255,1),qd=Wd(h([o(qa,Jd,A(100,0,0)),o(qa,Gd,A(0,100,0)),o(qa,Yd,A(0,0,100))])),yo=$(function(e,r){return{$:0,a:e,b:r}}),Za=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),Qa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$r=$(function(e,r){var n=e,a=r;return a-n}),Zd=vr({fU:-1,fY:0,c6:0}),Qd=vr({fU:0,fY:-1,c6:0}),wl=vr({fU:0,fY:0,c6:-1}),Ll=vr({fU:1,fY:0,c6:0}),So=vr({fU:0,fY:0,c6:1}),be=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Xd=Ie(function(e,r,n,a,t,i){var c=o(Za,n,i)?So:wl,l=o(Za,r,t)?go:Qd,u=o(Za,e,a)?Ll:Zd,v=A(de(o($r,e,a)),de(o($r,r,t)),de(o($r,n,i))),s=p(be,o(Qa,e,a),o(Qa,r,t),o(Qa,n,i)),m=ir({cB:s,c4:u,c5:l,c7:c});return{er:m,aL:v}}),Ar=function(e){var r=e;return r.fU},Ur=function(e){var r=e;return r.fY},Fr=function(e){var r=e;return r.c6},Kd=$(function(e,r){return ye(Xd,Ar(e),Ur(e),Fr(e),Ar(r),Ur(r),Fr(r))}),kt=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),e0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=A(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(yo,e,o(Kd,p(kt,-c,-l,-u),p(kt,c,l,u)))}),r0=V(function(e,r,n,a){var t=A(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return L(zr,f,d,m,a)}),n0=S(function(e,r,n){return L(r0,e,r,n,1)}),Dt=function(e){return{$:0,a:e}},Pl=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),zl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Xa=function(e){return p(zl,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},Bn=G$,a0=function(e){var r=fo(e),n=r.cN,a=r.cd,t=r.b6;return p(Bn,Xa(n),Xa(a),Xa(t))},t0=function(e){return p(Pl,0,Dt(a0(e)),Dt(0))},Tl=$(function(e,r){return{$:2,a:e,b:r}}),Ml=$(function(e,r){return{$:3,a:e,b:r}}),kl=$(function(e,r){return{$:1,a:e,b:r}}),o0=function(e){var r=e;return r},xo=function(e){var r=e;return o0(r.er)},Co=function(e){var r=e;return r.aL},cn=function(e){var r=e;return r.cB},Rr=iv,rn=cv,na=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Rr(c),u=rn(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,g=s.fY*u,b=l*g,y=m*g,x=g*g,_=1-2*(f+x),w=s.c6*u,M=l*w,j=2*(y-M),R=2*(y+M),E=m*w,N=2*(E+b),Y=2*(E-b),U=g*w,Z=2*(U-d),X=2*(U+d),le=w*w,fe=1-2*(x+le),ce=1-2*(f+le);return{fU:fe*i.fU+j*i.fY+N*i.c6,fY:R*i.fU+ce*i.fY+Z*i.c6,c6:Y*i.fU+X*i.fY+_*i.c6}}),An=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Rr(c),u=rn(c),v=a.cB,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c6-s.c6,g=a.eH,b=g,y=b.fU*u,x=l*y,_=y*y,w=b.fY*u,M=l*w,j=y*w,R=w*w,E=1-2*(_+R),N=b.c6*u,Y=l*N,U=2*(j-Y),Z=2*(j+Y),X=y*N,le=2*(X+M),fe=2*(X-M),ce=w*N,pe=2*(ce-x),ke=2*(ce+x),Ce=N*N,pr=1-2*(R+Ce),br=1-2*(_+Ce);return{fU:s.fU+pr*m+U*d+le*f,fY:s.fY+Z*m+br*d+pe*f,c6:s.c6+fe*m+ke*d+E*f}}),Yr=function(e){var r=e;return r.c4},Gr=function(e){var r=e;return r.c5},Wr=function(e){var r=e;return r.c7},i0=S(function(e,r,n){return ir({cB:p(An,e,r,cn(n)),c4:p(na,e,r,Yr(n)),c5:p(na,e,r,Gr(n)),c7:p(na,e,r,Wr(n))})}),c0=S(function(e,r,n){return{er:p(i0,e,r,xo(n)),aL:Co(n)}}),Un=$(function(e,r){return{eH:r,cB:e}}),l0=$(function(e,r){var n=o(An,e,r),a=o(na,e,r);return function(t){var i=t;return o(Un,n(i.cB),a(i.eH))}}),u0=S(function(e,r,n){var a=n;return{k:p(l0,e,r,a.k),e9:a.e9,fu:a.fu}}),wo=function(e){var r=e;return r},Dl=$(function(e,r){var n=wo(r),a=n.a,t=n.b;return xl(T(e(a),e(t)))}),v0=S(function(e,r,n){return o(Dl,o(An,e,r),n)}),Lo=function(e){var r=e;return r.ey},Po=function(e){var r=e;return r.fu},Bl=$(function(e,r){return{ey:r,fu:de(e)}}),$0=S(function(e,r,n){return o(Bl,Po(n),p(An,e,r,Lo(n)))}),Al=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return A(e(a),e(t),e(i))}),f0=S(function(e,r,n){return o(Al,o(An,e,r),n)}),Ua=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(yo,l,p(c0,e,r,a));case 1:var l=n.a,t=n.b;return o(kl,l,p(f0,e,r,t));case 3:var l=n.a,i=n.b;return o(Ml,l,p($0,e,r,i));case 2:var l=n.a,c=n.b;return o(Tl,l,p(u0,e,r,c));case 4:var l=n.a,u=n.b;return o(_o,l,p(v0,e,r,u));default:var v=n.a;return ho(o(ae,o(Ua,e,r),v))}}),zo=Ll,s0=o(Un,Ae,zo),m0=$(function(e,r){return p(Ua,s0,xr(e),r)}),To=go,d0=o(Un,Ae,To),p0=$(function(e,r){return p(Ua,d0,xr(e),r)}),Mo=So,b0=o(Un,Ae,Mo),g0=$(function(e,r){return p(Ua,b0,xr(e),r)}),K=$(function(e,r){var n=r;return e*n}),fr=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Fn=S(function(e,r,n){var a=e,t=n;return{fU:a.fU+r*(t.fU-a.fU),fY:a.fY+r*(t.fY-a.fY),c6:a.c6+r*(t.c6-a.c6)}}),h0=S(function(e,r,n){var a=xo(n),t=Yr(a),i=Gr(a),c=Wr(a),l=p(Fn,e,r,cn(a)),u=r>=0?ir({cB:l,c4:t,c5:i,c7:c}):ir({cB:l,c4:fr(t),c5:fr(i),c7:fr(c)}),v=Co(n),s=v.a,m=v.b,d=v.c,f=de(o(K,r,s)),g=de(o(K,r,m)),b=de(o(K,r,d));return{er:u,aL:A(f,g,b)}}),ko=function(e){var r=e;return r.k},Ul=function(e){var r=e;return r.eH},zi=function(e){return Ul(ko(e))},Fl=function(e){var r=e;return r.cB},_0=function(e){return Fl(ko(e))},Vl=function(e){var r=e;return r.e9},El=function(e){var r=e;return r.fu},y0=S(function(e,r,n){var a=de(o(K,r,El(n))),t=de(o(K,r,Vl(n))),i=r>=0?zi(n):fr(zi(n)),c=p(Fn,e,r,_0(n));return{k:o(Un,c,i),e9:t,fu:a}}),S0=S(function(e,r,n){return o(Dl,o(Fn,e,r),n)}),x0=S(function(e,r,n){return o(Bl,o(K,O(r),Po(n)),p(Fn,e,r,Lo(n)))}),C0=S(function(e,r,n){return o(Al,o(Fn,e,r),n)}),Rl=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(yo,c,p(h0,Ae,e,n));case 1:var c=r.a,a=r.b;return o(kl,c,p(C0,Ae,e,a));case 3:var c=r.a,t=r.b;return o(Ml,c,p(x0,Ae,e,t));case 2:var c=r.a,i=r.b;return o(Tl,c,p(y0,Ae,e,i));case 4:var c=r.a,l=r.b;return o(_o,c,p(S0,Ae,e,l));default:var u=r.a;return ho(o(ae,Rl(e),u))}}),w0=$(function(e,r){return(r-Nc(r/e)*e)/e}),L0=function(e){return 2*Er*e},fn=V(function(e,r,n,a){return e+(r-e)*(1+Rr(L0(o(w0,n,a))))/2}),P0=function(e){return o(g0,L(fn,1,10,30,e.aK),o(p0,L(fn,1,10,30,e.aK),o(m0,L(fn,1,10,30,e.aK),o(Rl,L(fn,1,2,14,e.aK),o(e0,t0(p(n0,L(fn,0,1,30,e.aK),.4,.4)),A(1,1,1))))))},z0=$(function(e,r){return h([qd,P0(e)])}),T0=function(e){return e},M0=function(e){return _r(.01*e)},Ti=function(e){return e},k0=function(e){return e},D0=function(e){return{$:0,a:e}},B0=D0,A0={$:3},U0=A0,F0=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),V0=F0,E0=$(function(e,r){return r.b?p(dr,B,r,e):e}),We=function(e){return p(dr,E0,P,e)},Do=$(function(e,r){return We(o(ae,e,r))}),R0=function(e){return{$:1,a:e}},N0=R0,j0=function(e){return o(Pr,"height",Ue(e))},Y0=function(e){return $$(p$(e))},G0=Y0,W0=function(e){return{$:2,a:e}},H0=W0,I0=function(e){return o(Mr,"",e)},O0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return I0(h(["rgba(",ie(c(r)),"%,",ie(c(n)),"%,",ie(c(a)),"%,",ie(i(t)),")"]))},J0=$(function(e,r){switch(r.$){case 0:return o(Df,e,r);case 1:return o(Bf,e,r);case 2:return o(Af,e,r);case 3:return o(Uf,e,r);case 4:return o(Ff,e,r);default:return o(Vf,e,r)}}),q0=$(function(e,r){switch(r.$){case 0:return o(lf,e,r);case 1:return o(uf,e,r);case 2:return o(vf,e,r);case 3:return o($f,e,r);case 4:return o(ff,e,r);case 5:return o(sf,e,r);case 6:return o(mf,e,r);case 7:return o(df,e,r);default:return pf(e)}}),Z0=S(function(e,r,n){return p(kf,e,r,n)}),Mi=function(e){var r=e;return r},ln=q$,Ka=L(ln,1,1,1,1),Xe=S(function(e,r,n){return o(ae,function(a){return o(a,r,n)},e)}),Q0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),X0=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Q0,n*a/t,n,n*(1-a-t)/t)}),K0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Bo=$(function(e,r){return K0(o(X0,e,r))}),Nl=$(function(e,r){return{dp:yr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bY,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bY,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bY,bY:e.bY*r.bY}}),rr=rf,ep=function(e){return rr({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},et=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(ln,a.bY,a.bY,a.bY,i);return ye(t,e,c,ep(a),a.dp,r,n)}),jl=Ie(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Nl,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(B,C(et,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var y=t.b,x=o(B,C(et,e,r,n,a,y),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,w=o(B,C(et,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var M=t.a;return p(Ta,L(jl,e,r,n,a),i,M)}}),rp=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Yl=rp,Ao=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),np=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,518,r,n,a)},ap=$(function(e,r){return{$:6,a:e,b:r}}),tp=ap,Gl=h([np({V:1,W:0,Z:!1}),L(Yl,!1,!1,!1,!1),o(tp,0,1)]),nn=519,Uo=8,Wl=15,Qr=7681,op={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},te=cf,ip=$(function(e,r){return{$:0,a:e,b:r}}),cp=ip({df:1,$7:0,dV:5}),Be=j$,lp=cp(h([{bU:o(Be,-1,-1)},{bU:o(Be,1,-1)},{bU:o(Be,-1,1)},{bU:o(Be,1,1)}])),up={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bU"},uniforms:{}},vp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Fo=S(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(oe,c(v.bm),o(oe,l(v.a9),o(oe,l(v.bu),l(v.bv))))};return o(u,n,o(u,r,p(vp,a,t,i)))}),Vo=function(e){return p(Fo,{cp:e.cp,cO:e.cO,c3:e.c3},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv},{a9:e.a9,bm:e.bm,bu:e.bu,bv:e.bv})},Eo=function(e){return C(te,h([Vo(e),L(Yl,!1,!1,!1,!1)]),up,op,lp,{})},$p=Eo({a9:Qr,cp:0,cO:Uo,bm:nn,c3:Wl,bu:Qr,bv:Qr}),fp=516,ki=5386,xe=7680,sp=function(e){return o(Dn,2,e+4)},Hl=function(e){return Eo({a9:xe,cp:Wl,cO:Uo,bm:fp,c3:sp(e),bu:ki,bv:ki})},mp=S(function(e,r,n){return We(h([p(Xe,e,n,Gl),h([Hl(r),$p])]))}),dp=$(function(e,r){return We(o(Ac,mp(e),r))}),pp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,513,r,n,a)},bp=pp({V:1,W:0,Z:!0}),gp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},hp=function(e){var r=e.bW,n=e.bG,a=e.bz,t=e.bw,i=e.bB,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return gp(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},_p=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Di=$(function(e,r){var n=e,a=r;return p(_p,32774,n,a)}),yp=1,Bi=771,Sp=770,Ro=hp({bw:0,aH:o(Di,yp,Bi),bz:0,bB:o(Di,Sp,Bi),bG:0,bW:0}),Hr=h([bp,Ro]),xp=function(e){var r=e;return r.dO},Cp=function(e){var r=e;return r.dP},Il=function(e){var r=e;return r.dQ},wp=function(e){var r=e;return r.dR},Lp=function(e){var r=e;return r.dS},Ol=function(e){var r=e;return r.dT},Jl=function(e){return A(o($r,wp(e),xp(e)),o($r,Lp(e),Cp(e)),o($r,Ol(e),Il(e)))},Ai=function(e){var r=e;return cn(r)},Pp=function(e){return e},zp=function(e){return ir({cB:Pp({fU:e.H,fY:e.I,c6:e.J}),c4:vr({fU:e.q,fY:e.r,c6:e.s}),c5:vr({fU:e.t,fY:e.u,c6:e.v}),c7:vr({fU:e.w,fY:e.x,c6:e.y})})},rt=$(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c6*v.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),ql=$(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,v=n.c7,s=v,m=n.c5,d=m,f=n.c4,g=f;return{fU:c*g.fU+l*g.fY+u*g.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Zl=$(function(e,r){return{cB:o(ql,e,cn(r)),c4:o(rt,e,Yr(r)),c5:o(rt,e,Gr(r)),c7:o(rt,e,Wr(r))}}),Sa=function(e){var r=e;return r},ue=$(function(e,r){var n=e,a=r;return o(Me,n,a)}),aa=$(function(e,r){return I(e,r)<0?e:r}),me=$(function(e,r){var n=e,a=r;return o(aa,n,a)}),Tp=$(function(e,r){var n=Sa(r),a=Sa(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),He=function(e){var r=e;return r},Mp=function(e){var r=e;return A(r.fU,r.fY,r.c6)},_n=$(function(e,r){var n=e,a=r;return a+n}),kp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(de(a)),c=ra(de(n)),l=ra(de(t)),u=Mp(r),v=u.a,s=u.b,m=u.c;return{dO:o(_n,c,v),dP:o(_n,i,s),dQ:o(_n,l,m),dR:o($r,c,v),dS:o($r,i,s),dT:o($r,l,m)}}),Ui=V(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,v=t.fY*r,s=t.fU*r,m=He(Wr(e)),d=O(l*m.fU)+O(c*m.fY)+O(i*m.c6),f=He(Gr(e)),g=O(l*f.fU)+O(c*f.fY)+O(i*f.c6),b=He(Yr(e)),y=O(l*b.fU)+O(c*b.fY)+O(i*b.c6),x=o(kp,A(y,g,d),o(ql,e,p(kt,s,v,u)));if(a.$)return re(x);var _=a.a;return re(o(Tp,_,x))}),Bt=V(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 1:var c=t.a,l=L(Ui,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 2:var f=e,g=r,b=n,y=i;e=f,r=g,n=b,a=y;continue e;case 3:var c=t.a,l=L(Ui,e,r,c,n),f=e,g=r,b=l,y=i;e=f,r=g,n=b,a=y;continue e;case 4:var u=t.a,f=e,g=r,b=L(Bt,e,r,n,u),y=i;e=f,r=g,n=b,a=y;continue e;default:var v=t.a,s=t.b,m=o(Zl,zp(v),e),d=r*v.bY,f=e,g=r,b=L(Bt,m,d,n,h([s])),y=i;e=f,r=g,n=b,a=y;continue e}}else return n}),un=W$,vn=H$,$n=I$,Ql=function(e){return{$:4,a:e}},Dp=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Vn=function(e){return Ql(o(Dp,e,P))},Bp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bY:1},Ap=function(e){var r=e;return r},Fi=Eo({a9:Qr,cp:0,cO:Uo,bm:nn,c3:255,bu:Qr,bv:Qr}),Up=function(e){var r=e,n=o(Me,O(r.fU),o(Me,O(r.fY),O(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=gr(i*i+t*t+a*a);return c*n}else return Ze},Pe={bz:0,ex:!1,bG:0,cK:0,bW:0,c_:0,fU:0,fY:0,c6:0},je=$(function(e,r){var n=e,a=r;return rr({dx:n.fU,dy:n.bW,dz:a.fU,dA:a.bW,dB:n.fY,dC:n.bG,dD:a.fY,dE:a.bG,dF:n.c6,dG:n.bz,dH:a.c6,dI:a.bz,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),bn=T({be:o(je,Pe,Pe),bL:o(je,Pe,Pe),bM:o(je,Pe,Pe),bN:o(je,Pe,Pe)},L(ln,0,0,0,0)),Vi=function(e){var r=e;return-r},Xl=514,Kl=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,515,r,n,a)},eu=240,Fp=h([Kl({V:1,W:0,Z:!0}),Vo({a9:xe,cp:eu,cO:0,bm:Xl,c3:0,bu:xe,bv:xe}),Ro]),Vp=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=de(a),l=c,u=de(t),v=u,s=n.cM;if(s.$){var d=s.a;return yt(v)?rr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):rr({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return yt(v)?rr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):rr({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Gn=$(function(e,r){return(1&e>>r)===1?0:1}),Ep=function(e){return h([Kl({V:1,W:0,Z:!0}),Vo({a9:xe,cp:eu,cO:e,bm:Xl,c3:0,bu:xe,bv:xe}),Ro])},Rp=S(function(e,r,n){return We(o(ae,function(a){var t=a<<4,i=L(ln,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Xe,e,T(r,i),Ep(t))},o(Kr,1,o(Dn,2,n)-1)))}),Xr=function(e){var r=e;return r},Np=nf,Ei=function(e){var r=e;return fr(Wr(r))},jp={cB:Ae,c4:zo,c5:To,c7:Mo},Fa=function(e){var r=e;return r},Yp=function(e){var r=Fa(cn(e)),n=He(Wr(e)),a=He(Gr(e)),t=He(Yr(e));return rr({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Gp=$(function(e,r){var n=r;return Yp(o(Zl,n,e))}),Wp=function(e){return o(Gp,jp,e)},Hp=function(e){var r=e;return r.c2},Ip=function(e){var r=e;return Yr(r)},Op=function(e){var r=e;return Gr(r)},Jp=function(e){var r=Hp(e.ev),n=ir({cB:Ai(r),c4:Ip(r),c5:Op(r),c7:fr(Ei(r))}),a=Vn(e.aQ),t=a,i=L(Bt,n,1,q,h([t]));if(i.$===1)return P;var c=i.a,l=Wp(r),u=o(K,.99,o(ue,de(e.aJ),Vi(Il(c)))),v=Jl(c),s=v.a,m=v.b,d=v.c,f=Up(p(Cl,s,m,d)),g=o(K,1.01,o(_n,f,Vi(Ol(c)))),b=o(Vp,e.ev,{eq:e.eq,eP:g,fi:u}),y=Np(b).dM,x=y?He(fr(Ei(r))):Xr(Ai(r)),_=function(){var ce=e.b_;switch(ce.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var pe=ce.a;return T(3,pe);case 4:var pe=ce.a;return T(4,pe);default:return T(5,0)}}(),w=_.a,M=_.b,j=e.bE,R=j,E=o(Bo,R,e.b0),N=E,Y=rr({dx:0,dy:x.fU,dz:un(N),dA:e.ec,dB:0,dC:x.fY,dD:vn(N),dE:Ap(f),dF:0,dG:x.c6,dH:$n(N),dI:w,dJ:0,dK:y,dL:0,dM:M}),U=ye(jl,Y,l,b,Bp,t,{M:P,U:P,fB:P}),Z=e.bK;switch(Z.$){case 0:var X=Z.a;return We(h([p(Xe,U.M,T(X,Ka),Hr),p(Xe,U.U,bn,Hr)]));case 1:var X=Z.a;return We(h([p(Xe,U.M,bn,Hr),h([Fi]),p(Xe,U.fB,X.be,Gl),h([Hl(0)]),p(Xe,U.M,T(X,Ka),Fp),p(Xe,U.U,bn,Hr)]));default:var le=Z.a,fe=Z.b;return We(h([p(Xe,U.M,T(fe,Ka),Hr),h([Fi]),o(dp,U.fB,le),p(Rp,U.M,fe,Vr(le)),p(Xe,U.U,bn,Hr)]))}},qp=function(e){return o(Pr,"width",Ue(e))},Zp=$(function(e,r){var n=h([N0(1),H0(0),B0(!0),L(V0,0,0,0,0)]),a=function(){var w=e.b1;switch(w.$){case 0:return A(n,"0",1);case 1:return A(o(B,U0,n),"1",1);default:var M=w.a;return A(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,v=l.b,s=Mi(v),m=o(ne,"height",Ue(s)+"px"),d=Mi(u),f=d/s,g=o(Do,function(w){return Jp({eq:f,ev:e.ev,aJ:e.aJ,aQ:w.aQ,bE:w.bE,bK:w.bK,ec:c,b_:w.b_,b0:w.b0})},r),b=o(ne,"width",Ue(d)+"px"),y=e.aI,x=y,_=O0(x);return p(G0,"div",h([o(ne,"padding","0px"),b,m]),h([T(i,p(Z0,t,h([qp(Qe(d*c)),j0(Qe(s*c)),b,m,o(ne,"display","block"),o(ne,"background-color",_)]),g))]))}),Qp=function(e){return o(Zp,{b1:e.b1,aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL},h([{aQ:e.aQ,bE:e.bE,bK:e.bK,b_:e.b_,b0:e.b0}]))},ru=function(e){return e},Ri=ru({fU:.31271,fY:.32902}),Xp=$(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(Bo,r.ce,r.b7),u=l;return{bz:$n(u),ex:n,bG:vn(u),cK:0,bW:un(u),c_:1,fU:-t,fY:-i,c6:-c}}),Kp=function(e){return e},e1=function(e){return Kp(1.2*o(Dn,2,e))},nt=function(e){return e},r1={$:0},n1=r1,nu=function(e){return e},Ni=function(e){var r=e;return r},a1=function(e){e:for(;;){if(yr(e.e2,Ze)&&yr(e.e3,Ze))return Pe;if(o(yl,de(e.e2),de(e.e3))){var r={b7:e.b7,e2:e.e3,e3:e.e2,ei:fr(e.ei)};e=r;continue e}else{var n=O(Ni(e.e3)/Er),a=O(Ni(e.e2)/Er),t=He(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(Bo,nu(1),e.b7),v=u;return{bz:a*$n(v),ex:!1,bG:a*vn(v),cK:n/a,bW:a*un(v),c_:3,fU:i,fY:c,c6:l}}}},ji=function(e){return a1({b7:e.b7,e2:e.ce,e3:Ze,ei:e.ei})},t1=function(e){var r=e;return r},au=function(e){var r=p(zl,1667,25e3,t1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ru({fU:n,fY:a})},tu=function(e){return e},o1=au(tu(12e3)),i1=au(tu(5600)),c1=function(e){return{$:2,a:e}},l1=function(e){return c1(e)},u1=$(function(e,r){return{$:2,a:e,b:r}}),ou=function(e){return{$:0,a:e}},Wn=function(e){var r=e;return r},v1=function(e){var r=e;return r.ex},$1=ou(bn.a),f1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(B,a,i),c):T(i,o(B,a,c))});return p(dr,n,T(P,P),r)}),s1=function(e){var r=e;return rr({dx:r.fU,dy:r.bW,dz:0,dA:0,dB:r.fY,dC:r.bG,dD:0,dE:0,dF:r.c6,dG:r.bz,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},m1=ee(function(e,r,n,a,t,i,c,l){var u=o(f1,v1,h([Wn(e),Wn(r),Wn(n),Wn(a)])),v=u.a,s=u.b;if(v.b){var m=ve(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,y=b.a,x=b.b,_=x.a;return o(u1,o(ae,s1,v),{be:o(je,d,g),bL:o(je,y,_),bM:o(je,t,i),bN:o(je,c,l)})}else return $1}else return ou({be:o(je,e,r),bL:o(je,n,a),bM:o(je,t,i),bN:o(je,c,l)})}),d1=S(function(e,r,n){return Pa(m1,e,r,n,Pe,Pe,Pe,Pe,Pe)}),p1=function(e){var r=o(Xp,k0(e.fB),{b7:i1,eH:e.fJ,ce:nt(8e4)}),n=ji({b7:o1,ce:nt(2e4),ei:e.ei}),a=ji({b7:Ri,ce:nt(15e3),ei:fr(e.ei)}),t=p(d1,r,n,a);return Qp({b1:l1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aL:e.aL,aQ:e.aQ,bE:e1(15),bK:t,b_:n1,b0:Ri})},iu=V(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),b1=V(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),cu=V(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),lu=V(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),g1=V(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),h1=V(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),_1=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),No=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(_1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(iu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(b1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(cu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(h1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(lu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(g1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},jo={$:0},y1=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Sa(c(u)),m=o(me,s.dR,e),d=o(ue,s.dO,r),f=o(me,s.dS,n),g=o(ue,s.dP,a),b=o(me,s.dT,t),y=o(ue,s.dQ,i),x=c,_=v;e=m,r=d,n=f,a=g,t=b,i=y,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),S1=S(function(e,r,n){var a=Sa(e(r));return Pa(y1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),at=$(function(e,r){var n=e,a=r;return I(a,n)<1}),uu=function(e){return o(at,e.dO,e.dR)&&o(at,e.dP,e.dS)&&o(at,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},vu=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Ar(n),c=Ur(n),l=Fr(n),u=Ar(a),v=Ur(a),s=Fr(a),m=Ar(t),d=Ur(t),f=Fr(t);return uu({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,v,d)),dQ:o(ue,l,o(ue,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,v,d)),dT:o(me,l,o(me,s,f))})},$u=O$,ze=function(e){return $u(Fa(e))},fu=function(e){var r=e;return r},Va=function(e){return $u(fu(e))},x1=$(function(e,r){var n=e,a=r,t=o(Me,O(a.fU),o(Me,O(a.fY),O(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=gr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return Sl}),C1=x1(nu(1)),su=S(function(e,r,n){var a=o(ya,r,n),t=o(ya,e,r);return C1(o(po,a,t))}),w1=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Va(p(su,n,a,t));return A({o:i,bU:ze(n)},{o:i,bU:ze(a)},{o:i,bU:ze(t)})},L1=$(function(e,r){return{$:2,a:e,b:r}}),mu=L1({df:3,$7:0,dV:4}),P1=function(e){if(e.b){var r=e.a,n=e.b,a=mu(o(ae,w1,e)),t=p(S1,vu,r,n);return L(iu,t,e,a,0)}else return jo},Ne=S(function(e,r,n){return A(e,r,n)}),du=function(){var e=_r(1),r=_r(1),n=_r(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(be,i,t,a),l=o(K,.5,e),u=p(be,i,t,l),v=o(K,.5,r),s=p(be,i,v,a),m=p(be,i,v,l),d=o(K,.5,n),f=p(be,d,t,a),g=p(be,d,v,a),b=p(be,d,t,l),y=p(be,d,v,l);return No(P1(h([p(Ne,c,g,f),p(Ne,c,s,g),p(Ne,u,b,y),p(Ne,u,y,m),p(Ne,f,g,y),p(Ne,f,y,b),p(Ne,c,m,s),p(Ne,c,u,m),p(Ne,c,f,b),p(Ne,c,b,u),p(Ne,s,y,g),p(Ne,s,m,y)])))}(),Hn={$:0},z1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),T1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Va(p(su,u,l,c)),s={o:v,bU:ze(u)},m={o:v,bU:ze(l)},d={o:v,bU:ze(c)};return o(B,s,o(B,m,o(B,d,n)))}),M1=or,Yo=function(e){var r=e;return r.D},k1=V(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return re(p(e,t,i,c))}),At=4294967295>>>32-Cn,Ut=Qu,D1=S(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Ut,a,n);if(t.$){var v=t.a;return o(Ut,At&r,v)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),B1=function(e){return e>>>5<<5},A1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,B1(n))>-1?re(o(Ut,At&e,i)):re(p(D1,a,e,t))}),Go=function(e){var r=e;return r.ah},tt=$(function(e,r){return o(A1,e,Go(r))}),U1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(k1,S(function(c,l,u){return A(c,l,u)}),o(tt,a,e),o(tt,t,e),o(tt,i,e))};return o(fl,r,Yo(e))},F1=S(function(e,r,n){e:for(;;){var a=o(to,Ee,e),t=a.a,i=a.b;if(I(ht(t),Ee)<0)return o(jc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Rc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Wo=function(e){return e.b?p(F1,e,P,0):Vc},V1=S(function(e,r,n){return e(r(n))}),E1=$(function(e,r){return!o(Qc,o(V1,_s,e),r)}),R1=$(function(e,r){return p(dr,$(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),N1=function(e){var r=e.a;return r},pu=$(function(e,r){var n=N1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(E1,a,r)?{D:r,ah:e}:{D:o(R1,a,r),ah:e}}),j1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),En=j1({df:1,$7:3,dV:4}),ta=$(function(e,r){var n=Xr(r),a=Xr(e);return T(A(a.fU,a.fY,a.c6),A(n.fU,n.fY,n.c6))}),Yi=p(Bn,0,0,0),ot=Ie(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ol,o(ta,e,r),t);if(v.$){var m={o:Yi,bU:ze(r)},d={o:Yi,bU:ze(e)},f=u+1,g=u;return A(o(B,A(n,g,f),o(B,A(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return A(o(B,A(n,s,a),c),l,u)}}),Y1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,y=e,x=r,_=v,w=a+3,M=ye(ot,s,d,f,b,r,ye(ot,m,s,g,f,r,ye(ot,d,m,b,g,r,t)));e=y,r=x,n=_,a=w,t=M;continue e}else{var j=t,R=j.a,E=j.b;return T(R,Ve(E))}}),G1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,y=p(Xn,o(ta,d,s),f,p(Xn,o(ta,s,m),g,p(Xn,o(ta,m,d),b,t))),x=o(B,A(b,g,f),a),_=e,w=v,M=n+3,j=x,R=y;e=_,r=w,n=M,a=j,t=R;continue e}else return A(a,t,n)}),Tr=S(function(e,r,n){var a=U1(n),t=p(dr,T1(r),P,a),i=C(G1,r,a,0,P,M1),c=i.a,l=i.b,u=i.c,v=C(Y1,r,l,a,0,A(c,P,u)),s=v.a,m=v.b,d=Mt(m)?t:ve(t,m);return p(z1,e,o(pu,Wo(d),s),o(En,d,s))}),Ft=function(e){return{D:o(ae,function(r){return A(3*r,3*r+1,3*r+2)},o(Kr,0,Vr(e)-1)),ah:Wo(We(o(ae,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},bu=function(e){switch(e.$){case 0:return Hn;case 1:var a=e.a,r=e.b,n=o(ae,Pn,r);return p(Tr,a,Dr,Ft(n));case 2:var a=e.a,r=e.b,n=o(ae,Pn,r);return p(Tr,a,Dr,Ft(n));case 3:var a=e.a,t=e.b;return p(Tr,a,Dr,t);case 4:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 5:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 6:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 7:var a=e.a,t=e.b;return p(Tr,a,function(i){return i.bU},t);case 8:return Hn;case 9:return Hn;default:return Hn}},Gi=bu(du),gu={$:0},z=gu,ge=$(function(e,r){return{$:1,a:e,b:r}}),W1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bC"}},H1=1029,I1=function(e){return{$:5,a:e}},hu=function(e){var r=e;return I1(r)},O1=hu(H1),J1=1028,q1=hu(J1),Te=S(function(e,r,n){return r===1?e?o(B,O1,n):o(B,q1,n):n}),_u={src:`
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
    `,attributes:{position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},it=V(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return C(te,p(Te,l,a,m),_u,W1,n,{bC:e,b:c,c:i,d:v,e:t,f:u})}))}),Ho={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},yu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=V(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){return C(te,p(Te,l,a,m),yu,Ho,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),Su=$(function(e,r){return{$:3,a:e,b:r}}),Z1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bT",sceneProperties:"e"}},xu={src:`
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
    `,attributes:{position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bT",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Q1=V(function(e,r,n,a){return o(Su,n,ee(function(t,i,c,l,u,v,s,m){return C(te,m,xu,Z1,a,{aw:e,b:c,c:i,bT:r,d:v,e:t,f:u})}))}),Io={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Rn=function(e){var r=e;return r},Ea=J$,lr=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return C(te,p(Te,u,t,d),yu,Io,a,{aO:o(Ea,Rn(r),e),b:l,c,d:s,e:i,f:v})}))}),X1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bT",sceneProperties:"e"}},K1=he(function(e,r,n,a,t){return o(Su,a,ee(function(i,c,l,u,v,s,m,d){return C(te,d,xu,X1,t,{aO:o(Ea,Rn(r),e),b:l,c,bT:n,d:s,e:i,f:v})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},wu={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},In=V(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(te,p(Te,l,a,m),wu,Cu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cq:e,b:c,c:i,d:v,e:t,f:u})}))}),Lu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",materialColorTexture:"cr",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Pu={src:`
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
    `,attributes:{normal:"o",position:"bU",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},e3=Ie(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return C(te,p(Te,v,i,f),Pu,Lu,t,{P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cr:e,b:u,c:l,aX:r,d:m,e:c,a0:n,f:s})}))}),zu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b5",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallicTexture:"cv",normalMapTexture:"aX",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},r3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(m,d,f,g,b,y,x,_){var w=x.a,M=x.b;return C(te,p(Te,g,s,_),Pu,zu,v,{b5:e,b8:r,b9:i,ca:a,P:M,be:w.be,bL:w.bL,bM:w.bM,bN:w.bN,cv:t,b:f,c:d,aX:c,d:y,cS:n,e:m,a0:l,f:b})}))}}}}}}}}}}},Tu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b4",enabledLights:"P",lights12:"be",lights34:"bL",lights56:"bM",lights78:"bN",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},On=Ie(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return C(te,p(Te,v,i,f),wu,Tu,t,{b4:e,P:b,be:g.be,bL:g.bL,bM:g.bM,bN:g.bN,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),n3=function(e){return{$:0,a:e}},Wi=$(function(e,r){return{$:1,a:e,b:r}}),yn=$(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),a3=function(e){return L(ln,un(e),vn(e),$n(e),1)},Oo=L(ln,0,0,0,0),oa=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Oo)}else{var n=r.a;return T(e,a3(n))}}),Mu=$(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(Wi,T(t,Oo),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Wi,o(oa,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,n3(a)}}),t3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=V(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),o3=V(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),i3=function(e){return o(Be,e,1)},Vt=o(Be,0,0),Ir=$(function(e,r){if(r.$){var a=r.a.C;return T(a,Vt)}else{var n=r.a;return T(e,i3(n))}}),ku=V(function(e,r,n,a){var t=L(o3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Jn,T(u,Oo),o(Ir,u,r),o(Ir,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Jn,o(oa,u,e),T(u,Vt),o(Ir,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Jn,o(oa,u,e),o(Ir,u,r),T(u,Vt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Jn,o(oa,u,e),o(Ir,u,r),o(Ir,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(t3,i,c,l)}}),c3={src:`
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
    `,attributes:{},uniforms:{backlight:"b2",colorTexture:"bC",sceneProperties:"e"}},ct=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,m,d){return C(te,p(Te,u,t,d),_u,c3,a,{b2:Rn(r),bC:e,b:l,c,d:s,e:i,f:v})}))}),Du={src:`
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
    `,attributes:{normal:"o",position:"bU",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},l3=V(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return C(te,p(Te,l,a,m),Du,Lu,n,{P:f,be:d.be,bL:d.bL,bM:d.bM,bN:d.bN,cr:e,b:c,c:i,aX:e,d:v,e:t,a0:0,f:u})}))}),u3=Nt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,m,d,f,g,b,y){var x=b.a,_=b.b;return C(te,p(Te,d,u,y),Du,zu,l,{b5:e,b8:r,b9:i,ca:a,P:_,be:x.be,bL:x.bL,bM:x.bM,bN:x.bN,cv:t,b:m,c:s,aX:e,d:g,cS:n,e:v,a0:0,f})}))}),zn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),v3=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},$3=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},f3=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},s3=function(e){return p(be,v3(e),$3(e),f3(e))},G=function(e){var r=Jl(e),n=r.a,a=r.b,t=r.c;return{ey:Fa(s3(e)),eS:n/2,eT:a/2,eU:t/2}},Jo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(it,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(it,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(it,l,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(cr,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(cr,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(cr,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Q1,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(ct,l,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ct,l,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ct,l,v,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(lr,u,v,G(t),c,a);case 8:var t=r.a,c=r.c;return C(lr,u,v,G(t),c,0);case 9:var t=r.a,c=r.c;return C(lr,u,v,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(K1,u,v,i,G(t),c)}}case 2:e.a;var s=e.b,R=e.c,m=o(Mu,s,R);if(m.$){var g=m.a,b=g.a;g.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(l3,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(e3,b,x,_,G(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var d=m.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(In,d,G(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(In,d,G(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(In,d,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(In,d,G(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var w=e.b,M=e.c,j=e.d,R=e.e,E=L(ku,w,M,j,R);if(E.$){var Z=E.a,X=Z.a,le=Z.b,fe=E.b,ce=fe.a,pe=fe.b,ke=E.c,Ce=ke.a,pr=ke.b,br=E.d,x=br.a,_=br.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Iu(u3,X,le,ce,pe,Ce,pr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return r3(X)(le)(ce)(pe)(Ce)(pr)(x)(_)(G(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=E.a,Y=E.b,U=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return ye(On,N,Y,U,G(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return ye(On,N,Y,U,G(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return ye(On,N,Y,U,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(On,N,Y,U,G(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),lt=function(e){var r=e;return r.fU},ut=function(e){var r=e;return r.fY},vt=function(e){var r=e;return r.c6},m3=function(e){var r=e,n=vt(r.c7),a=ut(r.c7),t=lt(r.c7),i=vt(r.c5),c=ut(r.c5),l=lt(r.c5),u=vt(r.c4),v=ut(r.c4),s=lt(r.c4);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},d3=function(e){var r=Fa(cn(e)),n=He(Wr(e)),a=He(Gr(e)),t=He(Yr(e));return{dp:m3(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bY:1}},Or=$(function(e,r){return{$:5,a:e,b:r}}),Bu=$(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Nl,a,e);return o(Or,i,t);case 1:return o(Or,e,n);case 3:return o(Or,e,n);case 2:return o(Or,e,n);default:return o(Or,e,n)}}),Au=$(function(e,r){return o(Bu,d3(e),r)}),Ra=function(e){return{$:2,a:e}},p3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),b3=Q$,g3=Z$,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=g3(a),g=f.fU,b=f.fY,y=f.c6,x=f.em,_=b3({em:x,fU:g*s,fY:b*m,c6:y*d});return Pa(r,n,_,t,i,c,l,u,v)}}}}}}}}}},Et=$(function(e,r){switch(r.$){case 0:return gu;case 5:var n=r.a,a=r.b;return o(Or,n,o(Et,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(p3,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Ra(o(Hi,e,i));default:var c=r.a;return Ql(o(ae,Et(e),c))}}),qo=$(function(e,r){var n=r;return o(Et,e,n)}),Zo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Uu=7683,Fu=7682,h3=p(Fo,{cp:0,cO:0,c3:15},{a9:xe,bm:nn,bu:xe,bv:Uu},{a9:xe,bm:nn,bu:xe,bv:Fu}),_3=p(Fo,{cp:0,cO:0,c3:15},{a9:xe,bm:nn,bu:xe,bv:Fu},{a9:xe,bm:nn,bu:xe,bv:Uu}),Qo=$(function(e,r){return e?o(B,_3,r):o(B,h3,r)}),y3={src:`
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
    `,attributes:{normal:"o",position:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},S3=function(e){if(e.$){var r=e.c;return re(ee(function(n,a,t,i,c,l,u,v){return C(te,o(Qo,i,v),y3,Zo,r,{b:t,c:a,d:l,e:n,bZ:u,f:c})}))}else return q},xa=function(e){var r=S3(e);if(r.$)return z;var n=r.a;return Ra(n)},x3=V(function(e,r,n,a){var t=o(Jo,n,du),i=function(){var s=T(e,r);return s.a?s.b?Vn(h([t,xa(Gi)])):t:s.b?xa(Gi):z}(),c=Co(a),l=c.a,u=c.b,v=c.c;return o(Au,xo(a),o(qo,A(l,u,v),i))}),C3=$(function(e,r){return L(x3,!0,!0,e,r)}),Vu=$(function(e,r){return{$:0,a:e,b:r}}),w3=function(e){var r=fo(e),n=r.cN,a=r.cd,t=r.b6;return p(Bn,n,a,t)},L3=function(e){return o(Vu,0,Dt(w3(e)))},Sn=function(e){var r=e;return Rr(r)},P3=$(function(e,r){var n=r;return n/e}),Ii=function(e){var r=e;return{fU:Rr(r),fY:rn(r)}},z3=$(function(e,r){var n=e.bU,a=e.o;return o(B,{o:Va(a),bU:ze(n)},r)}),T3=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=$n(l.bU),s=vn(l.bU),m=un(l.bU),d=o(aa,e,m),f=o(Me,r,m),g=o(aa,n,s),b=o(Me,a,s),y=o(aa,t,v),x=o(Me,i,v),_=u;e=d,r=f,n=g,a=b,t=y,i=x,c=_;continue e}else return uu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Eu=$(function(e,r){var n=$n(e.bU),a=vn(e.bU),t=un(e.bU);return jt(T3,t,t,a,a,n,n,r)}),M3=function(e){var r=p(Tc,z3,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Yo(e)),i=o(Eu,n,a);return L(cu,i,e,t,0)}else return jo},Oi=$(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),Ca=function(e){var r=e;return rn(r)},Rt=function(e){return xr(2*Er*e)},k3=Dr,Ji=k3({cB:Ae,c4:zo,c5:To}),Ru=function(){var e=72,r=o(P3,e,Rt(1)),n=_r(1),a=Zr(So),t=Zr(wl),i=_r(1),c=o(K,.5,i),l=p(be,Ze,Ze,c),u=o(K,-.5,i),v=p(be,Ze,Ze,u),s=function(f){var g=o(K,f,r),b=Zr(o(Oi,Ji,Ii(g))),y=o(K,Sn(g),n),x=o(K,Ca(g),n),_=p(be,y,x,c),w=p(be,y,x,u),M=o(ba,e,f+1),j=o(K,M,r),R=Zr(o(Oi,Ji,Ii(j))),E=o(K,Sn(j),n),N=o(K,Ca(j),n),Y=p(be,E,N,u),U=p(be,E,N,c);return h([A({o:t,bU:v},{o:t,bU:Y},{o:t,bU:w}),A({o:b,bU:w},{o:R,bU:Y},{o:R,bU:U}),A({o:b,bU:w},{o:R,bU:U},{o:b,bU:_}),A({o:a,bU:l},{o:a,bU:_},{o:a,bU:U})])},m=o(ae,s,o(Kr,0,e-1)),d=Ft(We(m));return No(M3(d))}(),qi=bu(Ru),D3=function(e){var r=Ul(e),n=bo(r),a=n.a,t=n.b;return ir({cB:Fl(e),c4:a,c5:t,c7:r})},B3=V(function(e,r,n,a){var t=D3(ko(a)),i=o(Jo,n,Ru),c=function(){var m=T(e,r);return m.a?m.b?Vn(h([i,xa(qi)])):i:m.b?xa(qi):z}(),l=El(a),u=l,v=Vl(a),s=v;return o(Au,t,o(qo,A(u,u,s),c))}),A3=$(function(e,r){return L(B3,!0,!0,e,r)}),Zi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},Qi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"br",viewMatrix:"f"}},gn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return rr({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},qn=mu(h([A({cZ:0},{cZ:1},{cZ:2})])),U3=$(function(e,r){var n=vu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(ge,a,ee(function(_,w,M,j,R,E,N,Y){return C(te,p(Te,j,0,Y),Zi,Ho,qn,{aw:t,b:M,c:w,d:E,e:_,br:gn(r),f:R})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(ge,a,ee(function(_,w,M,j,R,E,N,Y){return C(te,p(Te,j,0,Y),Zi,Io,qn,{aO:o(Ea,Rn(c),i),b:M,c:w,d:E,e:_,br:gn(r),f:R})}));case 2:e.a;var l=e.b,f=e.c,u=o(Mu,l,f);if(u.$)return z;var v=u.a;return o(ge,a,ee(function(_,w,M,j,R,E,N,Y){var U=N.a,Z=N.b;return C(te,p(Te,j,0,Y),Qi,Cu,qn,{P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cq:v,b:M,c:w,d:E,e:_,br:gn(r),f:R})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,g=L(ku,s,m,d,f);if(g.$)return z;var b=g.a,y=g.b,x=g.c;return o(ge,a,ee(function(_,w,M,j,R,E,N,Y){var U=N.a,Z=N.b;return C(te,p(Te,j,0,Y),Qi,Tu,qn,{b4:b,P:Z,be:U.be,bL:U.bL,bM:U.bM,bN:U.bN,cu:x,b:M,c:w,d:E,cR:y,e:_,br:gn(r),f:R})}))}}),F3=function(){var e=h([{a$:o(Be,0,1)},{a$:o(Be,1,1)},{a$:o(Be,2,1)},{a$:o(Be,0,-1)},{a$:o(Be,1,-1)},{a$:o(Be,2,-1)}]),r=h([A(0,1,2),A(3,5,4),A(3,4,1),A(3,1,0),A(4,5,2),A(4,2,1),A(5,3,0),A(5,0,2)]);return o(En,e,r)}(),V3={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",triangleVertexPositions:"br",viewMatrix:"f"}},Xi=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return C(te,o(Qo,t,u),V3,Zo,F3,{b:a,c:n,d:c,e:r,bZ:l,br:gn(e),f:i})}))},E3=V(function(e,r,n,a){var t=o(U3,n,a),i=T(e,r);return i.a?i.b?Vn(h([t,Xi(a)])):t:i.b?Xi(a):z}),R3=$(function(e,r){return L(E3,!0,!0,e,r)}),N3=$(function(e,r){var n=Fr(r),a=Fr(e),t=Ur(r),i=Ur(e),c=Ar(r),l=Ar(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),j3=function(e){var r=wo(e),n=r.a,a=r.b;return o(N3,n,a)},Ki={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Y3=$(function(e,r){return{$:1,a:e,b:r}}),G3=Y3({df:2,$7:0,dV:1}),ec=G3(h([T({dw:0},{dw:1})])),W3=$(function(e,r){var n=j3(r),a=G(n),t=wo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(ge,a,ee(function(v,s,m,d,f,g,b,y){return C(te,y,Ki,Ho,ec,{aw:l,du:ze(c),dv:ze(i),b:m,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,m,d,f,g,b,y,x){return C(te,x,Ki,Io,ec,{aO:o(Ea,Rn(u),l),du:ze(c),dv:ze(i),b:d,c:m,d:b,e:s,f:g})}));case 2:return z;default:return z}}),H3=$(function(e,r){return o(W3,e,r)}),Zn=function(e){return xr(Er*(e/180))},rc=$(function(e,r){var n=e,a=r;return n/a}),I3=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(yr(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,t=m;continue e}}),nc=$(function(e,r){return e<1?P:C(I3,0,e,e,r,P)}),O3=$(function(e,r){var n=e.bU,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Va(a),bU:ze(n),L:o(Be,c,l)},r)}),J3=function(e){var r=p(Tc,O3,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(En,r,Yo(e)),i=o(Eu,n,a);return L(lu,i,e,t,0)}else return jo},Nu=$(function(e,r){var n=e,a=r,t=Rr(a);return{fU:t*Rr(n),fY:t*rn(n),c6:rn(a)}}),q3=function(){var e=_r(1),r=72,n=o(Kr,0,r-1),a=o(nc,r,o(zn,Ze,Rt(1))),t=no(r/2),i=o(Kr,0,t-1),c=o(nc,t,o(zn,Zn(90),Zn(-90))),l=Wo(We(o(ae,function(s){return o(ae,function(m){return{o:Zr(o(Nu,s,m)),bU:p(be,o(K,Sn(m)*Sn(s),e),o(K,Sn(m)*Ca(s),e),o(K,Ca(m),e)),L:T(o(rc,s,Rt(1)),o(rc,o(_n,Zn(90),m),Zn(180)))}},c)},a))),u=$(function(s,m){return s*(t+1)+m}),v=We(o(ae,function(s){return We(o(ae,function(m){var d=o(u,s+1,m),f=o(u,s,m),g=o(u,s+1,m+1),b=o(u,s,m+1);return h([A(b,g,d),A(b,d,f)])},i))},n));return No(J3(o(pu,l,v)))}(),wa=72,Qn=2*wa,Z3=$(function(e,r){e:for(;;){var n=Qn+1,a=o(ba,Qn,2*e+3),t=o(ba,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(B,A(l,c,t),o(B,A(c,a,t),o(B,A(c,i,a),o(B,A(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),Q3=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),X3=$(function(e,r){e:for(;;){var n=p(Q3,0,2*Er,e/wa),a={bx:n,bQ:0,bX:1},t={bx:n,bQ:1,bX:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),K3=function(){var e=o(X3,wa-1,h([{bx:0,bQ:0,bX:0},{bx:0,bQ:1,bX:0}])),r=o(Z3,wa-1,P);return o(En,e,r)}(),eb={src:`
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
    `,attributes:{angle:"bx",offsetScale:"bQ",radiusScale:"bX"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bZ",viewMatrix:"f"}},ac=function(e){return Ra(ee(function(r,n,a,t,i,c,l,u){return C(te,o(Qo,!0,u),eb,Zo,K3,{aw:p(Bn,0,0,1),b:a,c:n,d:c,e:r,bZ:l,f:i})}))},rb=function(e){var r=fu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bY:1}},nb=$(function(e,r){return o(Bu,rb(e),r)}),ab=V(function(e,r,n,a){var t=o(Jo,n,q3),i=function(){var u=T(e,r);return u.a?u.b?Vn(h([t,ac()])):t:u.b?ac():z}(),c=Po(a),l=c;return o(nb,o(ya,Ae,Lo(a)),o(qo,A(l,l,l),i))}),tb=$(function(e,r){return L(ab,!0,!0,e,r)}),ob=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ib=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),cb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Vu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(ob,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Pl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(ib,n,a,t,i,c)}},lb=cb,ju=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(C3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(R3,t,n)]);case 3:var t=e.a,a=e.b;return h([o(tb,lb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(A3,t,i)]);case 4:var c=e.a,l=e.b;return h([o(H3,L3(c),l)]);default:var u=e.a;return o(Do,ju,u)}},ub=function(e){return o(Do,ju,e)},vb=$(function(e,r){return p1({aI:T0(e.es),ev:e.ev,aJ:M0(.5),cb:e.cb,aL:T(Ti(Qe(e.cT.fS)),Ti(Qe(e.cT.eW))),aQ:ub(r),fB:!0,fJ:o(Nu,xr(e.fI),xr(e.fK)),ei:Mo})}),$b=$(function(e,r){return o(vb,{es:p(jd,46,46,46),ev:Nd({dj:{fU:0,fY:4,c6:8},aS:{fU:0,fY:0,c6:0},ei:{fU:0,fY:1,c6:0}}),cb:e.cb,cT:e.cT,fI:-Pi(135),fK:-Pi(45)},o(z0,e,r))}),fb=p(Sd,$b,Cd,xd);const sb={Main:{init:fb(o(D,function(e){return De({e1:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return De({aK:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(m){return De({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Q))},o(k,"control",Q))},o(k,"down",Q))},o(k,"downs",ma(Ln)))},o(k,"left",Q))},o(k,"pressedKeys",ma(Ln)))},o(k,"right",Q))},o(k,"shift",Q))},o(k,"up",Q))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return De({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Q))},o(k,"isDown",Q))},o(k,"move",Q))},o(k,"rightDown",Q))},o(k,"rightUp",Q))},o(k,"up",Q))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return De({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return De({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},mb=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),v(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),v(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),m(F)),window.requestAnimationFrame(d)}},db=()=>{$t("pointerdown"),$t("wheel"),$t("keydown")},$t=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},pb=sb.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});db();mb(pb);
