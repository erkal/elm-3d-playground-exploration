const Ou=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Ou();function Sr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Sr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Sr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function B(e){return Sr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return Sr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return Sr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ta(e){return Sr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Sr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function It(e){return Sr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ot(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ma(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ju(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var qu=[];function Zu(e){return e.length}var Xu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Qu=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,x(n,r)}),Ku=v(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var ev=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+rv()),r});function rv(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function xr(e,r){for(var n,a=[],t=dt(e,r,0,a);t&&(n=a.pop());t=dt(n.a,n.b,0,a));return t}function dt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(x(e,r)),!0;e.$<0&&(e=hi(e),r=hi(r));for(var t in e)if(!dt(e[t],r[t],n+1,a))return!1;return!0}v(xr);v(function(e,r){return!xr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return O(e,r)<0});v(function(e,r){return O(e,r)<1});v(function(e,r){return O(e,r)>0});v(function(e,r){return O(e,r)>=0});var nv=v(function(e,r){var n=O(e,r);return n<0?Fc:n?Nf:Bc}),Tn=0;function x(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Ye(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var z={$:0};function nr(e,r){return{$:1,a:e,b:r}}var av=v(nr);function _(e){for(var r=z,n=e.length;n--;)r=nr(e[n],r);return r}function Da(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var tv=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});B(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return _(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return _(c)});v(function(e,r){return _(Da(r).sort(function(n,a){return O(e(n),e(a))}))});v(function(e,r){return _(Da(r).sort(function(n,a){var t=o(e,n,a);return t===Bc?0:t===Fc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ov=v(Math.pow);v(function(e,r){return r%e});var iv=v(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),cv=Math.PI,lv=Math.cos,uv=Math.sin,vv=Math.tan;v(Math.atan2);function $v(e){return e}function fv(e){return e===1/0||e===-1/0}var sv=Math.ceil,dv=Math.floor,mv=Math.round,pv=Math.sqrt,oi=Math.log,bv=isNaN;function gv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var hv=v(function(e,r){return e+r});function _v(e){var r=e.charCodeAt(0);return isNaN(r)?q:ee(55296<=r&&r<=56319?x(e[0]+e[1],e.slice(2)):x(e[0],e.slice(1)))}v(function(e,r){return e+r});function wv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function yv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var xv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Sv=v(function(e,r){return r.split(e)}),Cv=v(function(e,r){return r.join(e)}),Pv=S(function(e,r,n){return n.slice(e,r)});function Lv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var zv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),kv=v(function(e,r){return r.indexOf(e)>-1}),Tv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Mv=v(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function lc(e){return e+""}function Dv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ee(n==45?-r:r)}function Av(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ee(r):q}function Bv(e){return Da(e).join("")}function Fv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Uv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Vv(e){return{$:0,a:e}}function Jt(e){return{$:2,b:e}}var Rv=Jt(function(e){return typeof e=="boolean"?ue(e):Xe("a BOOL",e)}),Ev=Jt(function(e){return typeof e=="number"?ue(e):Xe("a FLOAT",e)}),jv=Jt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Xe("a STRING",e)});function Yv(e){return{$:3,b:e}}var Nv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Cr(e,r){return{$:9,f:e,g:r}}var Gv=v(function(e,r){return{$:10,b:r,h:e}}),Hv=v(function(e,r){return Cr(e,[r])}),Wv=S(function(e,r,n){return Cr(e,[r,n])});B(function(e,r,n,a){return Cr(e,[r,n,a])});he(function(e,r,n,a,t){return Cr(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return Cr(e,[r,n,a,t,i])});Ta(function(e,r,n,a,t,i,c){return Cr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Cr(e,[r,n,a,t,i,c,l])});It(function(e,r,n,a,t,i,c,l,u){return Cr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(oo,"This is not valid JSON! "+a.message,r))}});var uc=v(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Xe("null",r);case 3:return Nn(r)?ii(e.b,r,_):Xe("a LIST",r);case 4:return Nn(r)?ii(e.b,r,Iv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var $=je(e.b,r[n]);return Oe($)?$:ye(o(_i,n,$.a));case 7:var a=e.e;if(!Nn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=je(e.b,r[a]);return Oe($)?$:ye(o(Uc,a,$.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Xe("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var $=je(e.b,r[i]);if(!Oe($))return ye(o(_i,i,$.a));t=nr(x(i,$.a),t)}return ue(Ue(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=je(l[u],r);if(!Oe($))return $;c=c($.a)}return ue(c);case 10:var $=je(e.b,r);return Oe($)?je(e.h($.a),r):$;case 11:for(var s=z,d=e.g;d.b;d=d.b){var $=je(d.a,r);if(Oe($))return $;s=nr($.a,s)}return ye(Gf(Ue(s)));case 1:return ye(o(oo,e.a,r));case 0:return ue(e.a)}}function ii(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Oe(c))return ye(o(Uc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Iv(e){return o(is,e.length,function(r){return e[r]})}function Xe(e,r){return ye(o(oo,"Expecting "+e,r))}function Ir(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ir(e.b,r.b);case 6:return e.d===r.d&&Ir(e.b,r.b);case 7:return e.e===r.e&&Ir(e.b,r.b);case 9:return e.f===r.f&&ci(e.g,r.g);case 10:return e.h===r.h&&Ir(e.b,r.b);case 11:return ci(e.g,r.g)}}function ci(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ir(e[a],r[a]))return!1;return!0}var Ov=v(function(e,r){return JSON.stringify(r,null,e)+""});function vc(e){return e}S(function(e,r,n){return n[e]=r,n});function Ur(e){return{$:0,a:e}}function Jv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var mt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function qv(e){return{$:5,b:e}}var Zv=0;function qt(e){var r={$:0,e:Zv++,f:e,g:null,h:[]};return Zt(r),r}function $c(e){return dr(function(r){r(Ur(qt(e)))})}function fc(e,r){e.h.push(r),Zt(e)}var Xv=v(function(e,r){return dr(function(n){fc(e,r),n(Ur(Tn))})}),Oa=!1,li=[];function Zt(e){if(li.push(e),!Oa){for(Oa=!0;e=li.shift();)Qv(e);Oa=!1}}function Qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Zt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}B(function(e,r,n,a){return Xt(r,a,e.e4,e.fM,e.fF,function(){return function(){}})});function Xt(e,r,n,a,t,i){var c=o(uc,e,r?r.flags:void 0);Oe(c)||an(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=Kv(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),vi(l,b.b,t($))}return vi(l,u.b,t($)),d?{ports:d}:{}}var Ke={};function Kv(e,r){var n;for(var a in Ke){var t=Ke[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=r$(t,r)}return n}function e$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function r$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(mt,l,qv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=qt(o(mt,l,e.b))}var n$=v(function(e,r){return dr(function(n){e.g(r),n(Ur(Tn))})});v(function(e,r){return o(Xv,e.h,{$:0,a:r})});function sc(e){return function(r){return{$:1,k:e,l:r}}}function a$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ui=[],Ja=!1;function vi(e,r,n){if(ui.push({p:e,q:r,r:n}),!Ja){Ja=!0;for(var a;a=ui.shift();)t$(a.p,a.q,a.r);Ja=!1}}function t$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)fc(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=o$(e,t,a,r.l);n[t]=i$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function o$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ke[r].e:Ke[r].f;return o(i,t,a)}function i$(e,r,n){return n=n||{i:z,j:z},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function c$(e){Ke[e]&&an(3)}v(function(e,r){return r});function l$(e,r){return c$(e),Ke[e]={f:u$,u:r,a:v$},sc(e)}var u$=v(function(e,r){return function(n){return e(r(n))}});function v$(e,r){var n=z,a=Ke[e].u,t=Ur(null);Ke[e].b=t,Ke[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(uc,a,c);Oe(l)||an(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var va,cr=typeof document!="undefined"?document:{};function Qt(e,r){e.appendChild(r)}B(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function pt(e){return{$:0,a:e}}var dc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Kt(n),e:t,f:e,b:i}})}),mr=dc(void 0),$$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Kt(n),e:t,f:e,b:i}})}),f$=$$(void 0);function s$(e,r,n,a){return{$:3,d:Kt(e),g:r,h:n,i:a}}var d$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Pr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Pr([e,r],function(){return e(r)})});S(function(e,r,n){return Pr([e,r,n],function(){return o(e,r,n)})});B(function(e,r,n,a){return Pr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return Pr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return Pr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ta(function(e,r,n,a,t,i,c){return Pr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Pr([e,r,n,a,t,i,c,l],function(){return Ot(e,r,n,a,t,i,c,l)})});It(function(e,r,n,a,t,i,c,l,u){return Pr([e,r,n,a,t,i,c,l,u],function(){return Ma(e,r,n,a,t,i,c,l,u)})});var mc=v(function(e,r){return{$:"a0",n:e,o:r}}),m$=v(function(e,r){return{$:"a1",n:e,o:r}}),pc=v(function(e,r){return{$:"a2",n:e,o:r}}),Mn=v(function(e,r){return{$:"a3",n:e,o:r}});S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function p$(e){return e=="script"?"p":e}function b$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(mc,r.n,g$(e,r.o)):r});function g$(e,r){var n=vo(r);return{$:r.$,a:n?p(cs,n<3?h$:_$,Ae(e),r.a):o(da,e,r.a)}}var h$=v(function(e,r){return x(e(r.a),r.b)}),_$=v(function(e,r){return{al:e(r.al),cT:r.cT,cI:r.cI}});function Kt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?$i(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?$i(c,t,i):c[t]=i}return r}function $i(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return bt(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),bt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Qt(c,hr(n===1?l[u]:l[u].b,r));return c}function bt(e,r,n){for(var a in n){var t=n[a];a==="a1"?w$(e,t):a==="a0"?S$(e,r,t):a==="a3"?y$(e,t):a==="a4"?x$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function w$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function y$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function x$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function S$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=C$(r,i),e.addEventListener(t,c,eo&&{passive:vo(i)<2}),a[t]=c}}var eo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){eo=!0}}))}catch{}function C$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Oe(i)){for(var c=vo(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cT,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cI)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function P$(e,r){return e.$==r.$&&Ir(e.a,r.a)}function bc(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=B$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!L$(d,m):d!==m)&&_e(n,2,a,m),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:fi(e,r,n,a,z$);return;case 2:fi(e,r,n,a,k$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=ro(e.d,r.d);w&&_e(n,4,a,w);var y=r.i(e.g,r.g);y&&_e(n,5,a,y);return}}}function L$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function fi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=ro(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function ro(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=ro(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&P$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function z$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Je(s,i[$],n,++a),a+=s.b||0}}function k$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,y=b.a,h=g.b,P=b.b,M=void 0,Y=void 0;if(w===y){f++,Je(h,P,t,f),f+=h.b||0,d++,m++;continue}var E=l[d+1],R=u[m+1];if(E){var j=E.a,N=E.b;Y=y===j}if(R){var F=R.a,Z=R.b;M=w===F}if(M&&Y){f++,Je(h,Z,t,f),vn(i,t,w,P,m,c),f+=h.b||0,f++,$n(i,t,w,N,f),f+=N.b||0,d+=2,m+=2;continue}if(M){f++,vn(i,t,y,P,m,c),Je(h,Z,t,f),f+=h.b||0,d+=1,m+=2;continue}if(Y){f++,$n(i,t,w,h,f),f+=h.b||0,f++,Je(N,P,t,f),f+=N.b||0,d+=2,m+=1;continue}if(E&&j===F){f++,$n(i,t,w,h,f),vn(i,t,y,P,m,c),f+=h.b||0,f++,Je(N,Z,t,f),f+=N.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],h=g.b;$n(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];vn(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&_e(n,8,a,{w:t,x:c,y:Q})}var gc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+gc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}$n(e,r,n+gc,a,t)}function hc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)hc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var y=m===1?g[w]:g[w].b,h=t+(y.b||0);if(t<=u&&u<=h&&(a=fn(b[w],y,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function _c(e,r,n,a){return n.length===0?e:(hc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=T$(t,a);t===e&&(e=i)}return e}function T$(e,r){switch(r.$){case 0:return M$(e,r.s,r.u);case 4:return bt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return D$(e,r);case 5:return r.s(e);default:an(10)}}function M$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function D$(e,r){var n=r.s,a=A$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Qt(e,a),e}function A$(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Qt(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function no(e){if(e.nodeType===3)return pt(e.textContent);if(e.nodeType!==1)return pt("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(Mn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,$=e.childNodes,a=$.length;a--;)u=nr(no($[a]),u);return p(mr,l,r,u)}function B$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var F$=B(function(e,r,n,a){return Xt(r,a,e.e4,e.fM,e.fF,function(t,i){var c=e.fP,l=a.node,u=no(l);return wc(i,function($){var s=c($),d=bc(u,s);l=_c(l,u,d,t),u=s})})});B(function(e,r,n,a){return Xt(r,a,e.e4,e.fM,e.fF,function(t,i){var c=e.cQ&&e.cQ(t),l=e.fP,u=cr.title,$=cr.body,s=no($);return wc(i,function(d){va=c;var m=l(d),f=mr("body")(z)(m.ew),g=bc(s,f);$=_c($,s,g,t),s=f,va=0,u!==m.fJ&&(cr.title=u=m.fJ)})})});var fa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function wc(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}v(function(e,r){return o(so,$o,dr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(so,$o,dr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(so,$o,dr(function(){history.replaceState({},"",r),e()}))});var U$={addEventListener:function(){},removeEventListener:function(){}},V$=typeof window!="undefined"?window:U$;S(function(e,r,n){return $c(dr(function(a){function t(i){qt(n(i))}return e.addEventListener(r,t,eo&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=je(e,r);return Oe(n)?ee(n.a):q});function yc(e,r){return dr(function(n){fa(function(){var a=document.getElementById(e);n(a?Ur(r(a)):Jv(us(e)))})})}function R$(e){return dr(function(r){fa(function(){r(Ur(e()))})})}v(function(e,r){return yc(r,function(n){return n[e](),Tn})});v(function(e,r){return R$(function(){return V$.scroll(e,r),Tn})});S(function(e,r,n){return yc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Tn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var E$=v(function(e,r){var n="g";e.ff&&(n+="m"),e.ey&&(n+="i");try{return ee(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var j$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?ee(d):q}a.push(L(bl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});B(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?ee($):q}return n(L(bl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var Y$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/N$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function N$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ao=new Float64Array(3),si=new Float64Array(3),di=new Float64Array(3),G$=S(function(e,r,n){return new Float64Array([e,r,n])}),H$=function(e){return e[0]},W$=function(e){return e[1]},I$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var O$=function(e){return new Float64Array([e.fU,e.fY,e.c2])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(xc);function Sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(xc(e,r,n),n)}v(Sc);function Cc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Cc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var J$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(sn);function gt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(gt);v(function(e,r){var n,a=ao,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var q$=B(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Z$=function(e){return{fU:e[0],fY:e[1],c2:e[2],en:e[3]}},X$=function(e){return new Float64Array([e.fU,e.fY,e.c2,e.en])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Q$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var K$=new Float64Array(16),ef=new Float64Array(16),rf=function(e){var r=new Float64Array(16);return r[0]=e.dw,r[1]=e.dA,r[2]=e.dE,r[3]=e.dI,r[4]=e.dx,r[5]=e.dB,r[6]=e.dF,r[7]=e.dJ,r[8]=e.dy,r[9]=e.dC,r[10]=e.dG,r[11]=e.dK,r[12]=e.dz,r[13]=e.dD,r[14]=e.dH,r[15]=e.dL,r},nf=function(e){return{dw:e[0],dA:e[1],dE:e[2],dI:e[3],dx:e[4],dB:e[5],dF:e[6],dJ:e[7],dy:e[8],dC:e[9],dG:e[10],dK:e[11],dz:e[12],dD:e[13],dH:e[14],dL:e[15]}};function Pc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(Pc);B(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Pc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(Lc);B(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function zc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],y=e[14],h=e[15],P=r[0],M=r[1],Y=r[2],E=r[3],R=r[4],j=r[5],N=r[6],F=r[7],Z=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],se=r[13],Me=r[14],Pe=r[15];return n[0]=a*P+l*M+d*Y+b*E,n[1]=t*P+u*M+m*Y+w*E,n[2]=i*P+$*M+f*Y+y*E,n[3]=c*P+s*M+g*Y+h*E,n[4]=a*R+l*j+d*N+b*F,n[5]=t*R+u*j+m*N+w*F,n[6]=i*R+$*j+f*N+y*F,n[7]=c*R+s*j+g*N+h*F,n[8]=a*Z+l*Q+d*ie+b*ve,n[9]=t*Z+u*Q+m*ie+w*ve,n[10]=i*Z+$*Q+f*ie+y*ve,n[11]=c*Z+s*Q+g*ie+h*ve,n[12]=a*oe+l*se+d*Me+b*Pe,n[13]=t*oe+u*se+m*Me+w*Pe,n[14]=i*oe+$*se+f*Me+y*Pe,n[15]=c*oe+s*se+g*Me+h*Pe,n}v(zc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],y=r[2],h=r[4],P=r[5],M=r[6],Y=r[8],E=r[9],R=r[10],j=r[12],N=r[13],F=r[14];return n[0]=a*b+c*w+$*y,n[1]=t*b+l*w+s*y,n[2]=i*b+u*w+d*y,n[3]=0,n[4]=a*h+c*P+$*M,n[5]=t*h+l*P+s*M,n[6]=i*h+u*P+d*M,n[7]=0,n[8]=a*Y+c*E+$*R,n[9]=t*Y+l*E+s*R,n[10]=i*Y+u*E+d*R,n[11]=0,n[12]=a*j+c*N+$*F+m,n[13]=t*j+l*N+s*F+f,n[14]=i*j+u*N+d*F+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=sa(r,ao);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Cc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,y=i*i*$+u,h=g+f,P=b-m,M=g-f,Y=c*c*$+u,E=w+d,R=b+m,j=w-d,N=l*l*$+u,F=n[0],Z=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],se=n[6],Me=n[7],Pe=n[8],pr=n[9],br=n[10],Ia=n[11],Gu=n[12],Hu=n[13],Wu=n[14],Iu=n[15];return a[0]=F*y+ve*h+Pe*P,a[1]=Z*y+oe*h+pr*P,a[2]=Q*y+se*h+br*P,a[3]=ie*y+Me*h+Ia*P,a[4]=F*M+ve*Y+Pe*E,a[5]=Z*M+oe*Y+pr*E,a[6]=Q*M+se*Y+br*E,a[7]=ie*M+Me*Y+Ia*E,a[8]=F*R+ve*j+Pe*N,a[9]=Z*R+oe*j+pr*N,a[10]=Q*R+se*j+br*N,a[11]=ie*R+Me*j+Ia*N,a[12]=Gu,a[13]=Hu,a[14]=Wu,a[15]=Iu,a});function af(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(af);B(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function tf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(tf);B(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],y=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=y,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+y*i+r[15],n});S(function(e,r,n){var a=Sc(e,r,ao),t=sa(gt(n,a,si),si),i=sa(gt(a,t,di),di),c=K$,l=ef;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,zc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var mi=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function to(e){for(var r=0;e.b;e=e.b)r++;return r}var of=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},cf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),lf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),uf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),vf=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),$f=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ff=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),df=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),mf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},bf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},gf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},hf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},kc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Tc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},_f=function(e){e.gl.disable(e.gl.CULL_FACE)},wf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},yf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},xf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},pi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Sf=[bf,gf,hf,kc,Tc,_f,wf,yf,xf];function bi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Cf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Mc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Pf(e,r,n,a){for(var t=n.a.db,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,y){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[y]:w[y][h];else i.forEach(function(P){for(h=0;h<g;h++)f[b++]=g===1?w[P][y]:w[P][y][h]})}var u=Mc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(to(n.b)*s);Sn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Lf(e,r){if(r.a.dk>0){var n=e.createBuffer(),a=zf(r.c,r.a.dk);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.db*to(r.b),indexBuffer:null,buffers:{}}}function zf(e,r){var n=new Uint32Array(to(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function gi(e,r){return e+"#"+r}var Dc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),kc(n),Tc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=gi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=mi++,$||($=bi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=mi++,s||(s=bi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Cf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=kf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=gi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Tf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Lf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Pf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Mc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var y=w.size*4,h=y*w.arraySize,P=0;P<w.arraySize;P++)a.enableVertexAttribArray(g+P),a.vertexAttribPointer(g+P,w.size,w.baseType,!1,h,y*P)}for(n.toggle=!n.toggle,Sn(yp(n),i.a),u=0;u<pi.length;u++){var M=n[pi[u]];M.toggle!==n.toggle&&M.enabled&&(Sf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dU,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dU,0,b.numIndices)}}return Sn(t,e.g),r});function kf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var y=c++;return function(h){e.activeTexture(e.TEXTURE0+y);var P=l.textures.get(h);P||(P=h.eF(e),l.textures.set(h,P)),e.bindTexture(e.TEXTURE_2D,P),i[b]!==h&&(e.uniform1i(w,y),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Tf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Mf=S(function(e,r,n){return s$(r,{g:n,f:{},h:e},Rf,Ef)}),Df=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Af=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Bf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ff=v(function(e,r){e.contextAttributes.antialias=!0}),Uf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Vf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Rf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(wp,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),of(function(){return o(Dc,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ef(e,r){return r.f=e.f,Dc(r)}var T=av,Gn=ev,Ac=S(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Gn,e,l,$)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),Aa=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Aa,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),hi=function(e){return p(Aa,S(function(r,n,a){return o(T,x(r,n),a)}),z,e)},jf=function(e){return p(Aa,S(function(r,n,a){return o(T,r,a)}),z,e)},Yf=function(e){var r=e;return jf(r)},Bc=1,Nf=2,Fc=0,ye=function(e){return{$:1,a:e}},oo=v(function(e,r){return{$:3,a:e,b:r}}),_i=v(function(e,r){return{$:0,a:e,b:r}}),Uc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Gf=function(e){return{$:2,a:e}},ee=function(e){return{$:0,a:e}},q={$:1},Hf=zv,Wf=Ov,Fe=lc,Tr=v(function(e,r){return o(Cv,e,Da(r))}),io=v(function(e,r){return _(o(Sv,e,r))}),Vc=function(e){return o(Tr,`
    `,o(io,`
`,e))},Dn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Ar=function(e){return p(Dn,v(function(r,n){return n+1}),0,e)},If=tv,Of=S(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(T,r,n);e=a,r=t,n=i;continue e}else return n}),Kr=v(function(e,r){return p(Of,e,r,z)}),Rc=v(function(e,r){return p(If,e,o(Kr,0,Ar(r)-1),r)}),er=Fv,Ec=function(e){var r=er(e);return 97<=r&&r<=122},jc=function(e){var r=er(e);return r<=90&&65<=r},Jf=function(e){return Ec(e)||jc(e)},qf=function(e){var r=er(e);return r<=57&&48<=r},Zf=function(e){return Ec(e)||jc(e)||qf(e)},Ue=function(e){return p(Dn,T,z,e)},tn=_v,Xf=v(function(e,r){return`

(`+(Fe(e+1)+(") "+Vc(Qf(r))))}),Qf=function(e){return o(Kf,e,z)},Kf=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=tn(n);if(b.$===1)return!1;var w=b.a,y=w.a,h=w.b;return Jf(y)&&o(Hf,Zf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(T,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,$=o(T,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Tr,"",Ue(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Fe(Ar(s))+" ways:"));return o(Tr,`

`,o(T,g,o(Rc,Xf,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Tr,"",Ue(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Tr,"",Ue(r))+`:

    `):`Problem with the given value:

`}();return g+(Vc(o(Wf,4,f))+(`

`+m))}}),Ve=32,ht=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),_t=qu,co=sv,lo=v(function(e,r){return oi(r)/oi(e)}),es=$v,Cn=co(o(lo,2,Ve)),Yc=L(ht,0,Cn,_t,_t),Nc=Xu,Gc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Hc=dv,wt=Zu,Te=v(function(e,r){return O(e,r)>0?e:r}),rs=function(e){return{$:0,a:e}},uo=Qu,ns=v(function(e,r){e:for(;;){var n=o(uo,Ve,e),a=n.a,t=n.b,i=o(T,rs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ue(i)}}),as=function(e){var r=e.a;return r},ts=v(function(e,r){e:for(;;){var n=co(r/Ve);if(n===1)return o(uo,Ve,e).a;var a=o(ns,e,z),t=n;e=a,r=t;continue e}}),Wc=v(function(e,r){if(r.l){var n=r.l*Ve,a=Hc(o(lo,Ve,n-1)),t=e?Ue(r.z):r.z,i=o(ts,t,r.l);return L(ht,wt(r.p)+n,o(Te,5,a*Cn),i,r.p)}else return L(ht,wt(r.p),Cn,_t,r.p)}),os=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Wc,!1,{z:a,l:n/Ve|0,p:t});var i=Gc(p(Nc,Ve,r,e)),c=e,l=r-Ve,u=n,$=o(T,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),is=v(function(e,r){if(e<=0)return Yc;var n=e%Ve,a=p(Nc,n,e-n,r),t=e-n-Ve;return C(os,r,t,e,z,a)}),Oe=function(e){return!e.$},A=Gv,X=Rv,D=Nv,$e=Ev,da=Hv,cs=Wv,Ae=Vv,vo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},W=mr("div"),ls=function(e){return{$:2,a:e}},Ic=v(function(e,r){return e}),Oc=v(function(e,r){return{bD:r.bD,eD:e,b8:r.b8,eM:r.eM,dp:r.dp,bi:r.bi,bk:r.bk,fQ:r.fQ}}),Dr=function(e){return e},us=Dr,wi=We(function(e,r,n,a,t,i){return{dg:i,di:r,dY:a,d$:n,d3:e,d4:t}}),vs=kv,Mr=wv,Or=Pv,An=v(function(e,r){return e<1?r:p(Or,e,Mr(r),r)}),Ba=Mv,Fa=function(e){return e===""},Ua=v(function(e,r){return e<1?"":p(Or,0,e,r)}),Jc=Dv,yi=he(function(e,r,n,a,t){if(Fa(t)||o(vs,"@",t))return q;var i=o(Ba,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Jc(o(An,c+1,t));if(l.$===1)return q;var u=l;return ee(we(wi,e,o(Ua,c,t),u,r,n,a))}else return ee(we(wi,e,t,q,r,n,a))}),xi=B(function(e,r,n,a){if(Fa(a))return q;var t=o(Ba,"/",a);if(t.b){var i=t.a;return C(yi,e,o(An,i,a),r,n,o(Ua,i,a))}else return C(yi,e,"/",r,n,a)}),Si=S(function(e,r,n){if(Fa(n))return q;var a=o(Ba,"?",n);if(a.b){var t=a.a;return L(xi,e,ee(o(An,t+1,n)),r,o(Ua,t,n))}else return L(xi,e,q,r,n)});v(function(e,r){if(Fa(r))return q;var n=o(Ba,"#",r);if(n.b){var a=n.a;return p(Si,e,ee(o(An,a+1,r)),o(Ua,a,r))}else return p(Si,e,q,r)});var $s=Tv,$o=function(e){},Bn=Ur,fs=Bn(0),qc=B(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(Dn,e,r,Ue(d)):L(qc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),tr=S(function(e,r,n){return L(qc,e,r,0,n)}),re=v(function(e,r){return p(tr,v(function(n,a){return o(T,e(n),a)}),z,r)}),ma=mt,fo=v(function(e,r){return o(ma,function(n){return Bn(e(n))},r)}),ss=S(function(e,r,n){return o(ma,function(a){return o(ma,function(t){return Bn(o(e,a,t))},n)},r)}),ds=function(e){return p(tr,ss(T),Bn(z),e)},ms=n$,ps=v(function(e,r){var n=r;return $c(o(ma,ms(e),n))}),bs=S(function(e,r,n){return o(fo,function(a){return 0},ds(o(re,ps(e),r)))}),gs=S(function(e,r,n){return Bn(0)}),hs=v(function(e,r){var n=r;return o(fo,e,n)});Ke.Task=e$(fs,bs,gs,hs);var _s=sc("Task"),so=v(function(e,r){return _s(o(fo,e,r))}),ws=F$,ys=gv,pa={$:1},Zc=function(e){return{$:2,a:e}},Va={$:0},Ne=v(function(e,r){return{$:0,a:e,b:r}}),ae=S(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},xs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ee(o(Ne,r,{B:i,ab:c,T:o(T,a,n)}))}else return q},Xc=function(e){var r=e.b;return o(Ne,Va,r)},vr=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ss=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bi.da?Xc(n):n;case 2:var i=a.a.cU;return(O(i+r.eM,on(n).bD)>0?o(ae,xs,vr(o(Ne,pa,t))):Dr)(o(Ne,Zc({cU:i+r.eM}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Oc,l.eD,Ye(r,{bD:l.bD+r.eM})),s=o(e,$,u);return o(Ne,Va,{B:x($,s),ab:z,T:o(T,t.B,t.T)})}}),Qc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Cs=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(T,a,n);e=i,r=c,n=l;continue e}else return n}}),Ps=v(function(e,r){return Ue(p(Cs,e,r,z))}),Kc=S(function(e,r,n){if(r<=0)return z;{var a=x(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(T,h,o(T,c,o(T,s,o(T,b,o(Ps,r-4,w))))):o(T,h,o(T,c,o(T,s,o(T,b,p(Kc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var y=a.b,h=y.a;return _([h])}}),Ls=v(function(e,r){return p(Kc,0,e,r)}),zs=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ue(n),le(_([a]),t)),c=o(Ls,e,i),l=o(Qc,e,i);if(l.b){var u=l.a,$=l.b;return o(Ne,pa,{B:u,ab:$,T:Ue(c)})}else{var s=Ue(c);if(s.b){var d=s.a,m=s.b;return o(Ne,pa,{B:d,ab:z,T:m})}else return r}}),ks=function(e){var r=e.b;return o(Ne,pa,r)},Ts=function(e){var r=e.b;return o(Ne,Zc({cU:on(e).bD}),r)},Ms=v(function(e,r){switch(e.$){case 1:return ks(r);case 2:return Xc(r);case 3:return Ts(r);default:var n=e.a;return o(zs,n,r)}}),el=v(function(e,r){var n=r.a,a=r.b;return x(e(n),a)}),Ds=v(function(e,r){return Ye(r,{av:e(r.av)})}),As=function(e){return{$:3,a:e}},Bs=function(e){return{$:2,a:e}},Fs=v(function(e,r){return{$:0,a:e,b:r}}),Us=v(function(e,r){return{$:1,a:e,b:r}}),Le=v(function(e,r){if(r.$)return q;var n=r.a;return ee(e(n))}),J=function(e){return e<0?-e:e},mo=Av,Vs=S(function(e,r,n){return o(vr,0/0,mo(o(e,r,n)))}),rl=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Rs=xv,nl=function(e){return p(Rs,T,z,e)},Es=v(function(e,r){var n=o(rl,function(a){return a!=="0"&&a!=="."},nl(r));return le(e&&n?"-":"",r)}),me=lc,yt=hv,al=Uv,tl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(yt,"0",tl(t))}else{var i=er(r);return i>=48&&i<57?o(yt,al(i+1),n):"0"}},xt=fv,js=bv,Ra=function(e){return o(yt,e,"")},ol=S(function(e,r,n){return e<=0?n:p(ol,e>>1,le(r,r),e&1?le(n,r):n)}),Pn=v(function(e,r){return p(ol,e,r,"")}),St=S(function(e,r,n){return le(n,o(Pn,e-Mr(n),Ra(r)))}),Ct=yv,il=function(e){var r=o(io,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return x(n,t)}else{var n=r.a;return x(n,"0")}else return x("0","0")},Ys=function(e){var r=o(io,"e",me(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(vr,0,Jc(o($s,"+",t)?o(An,1,t):t)),c=il(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(vr,"0",o(Le,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Le,el(Ra),tn(le(o(Pn,J(i),"0"),$))))):p(St,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Ns=S(function(e,r,n){if(xt(n)||js(n))return me(n);var a=n<0,t=il(Ys(J(n))),i=t.a,c=t.b,l=Mr(i)+r,u=le(o(Pn,-l+1,"0"),p(St,l,"0",le(i,c))),$=Mr(u),s=o(Te,1,l),d=o(e,a,p(Or,s,$,u)),m=p(Or,0,s,u),f=d?Ct(o(vr,"1",o(Le,tl,tn(Ct(m))))):m,g=Mr(f),b=f==="0"?f:r<=0?le(f,o(Pn,J(r),"0")):O(r,Mr(c))<0?p(Or,0,g-r,f)+("."+p(Or,g-r,g,f)):le(i+".",p(St,r,"0",c));return o(Es,a,b)}),pn=Ns(v(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(er(t))})),Gs=Vs(pn),Hs=S(function(e,r,n){var a=o(lo,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Gs,t,n)}),cl=nv,ll=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(cl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ee(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},en=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return C(H,0,r,n,C(H,1,$,s,d,m),C(H,1,i,c,l,u))}else return C(H,e,i,c,C(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,y=f.e,m=a.e;return C(H,0,$,s,C(H,1,g,b,w,y),C(H,1,r,n,m,t))}else return C(H,e,r,n,a,t)}),Pt=S(function(e,r,n){if(n.$===-2)return C(H,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(cl,e,t);switch(u){case 0:return C(en,a,t,i,p(Pt,e,r,c),l);case 1:return C(H,a,t,r,c,l);default:return C(en,a,t,i,c,p(Pt,e,r,l))}}),bn=S(function(e,r,n){var a=p(Pt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(H,1,t,i,c,l)}else{var u=a;return u}}),Ws=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ul=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,y=$.e;return C(H,0,f,g,C(H,1,n,a,C(H,0,i,c,l,u),b),C(H,1,s,d,w,y))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,P=e.e;P.a;var s=P.b,d=P.c,m=P.d,y=P.e;return C(H,1,n,a,C(H,0,i,c,l,u),C(H,0,s,d,m,y))}else return e},Ci=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,y=f.e;return C(H,0,i,c,C(H,1,u,$,s,d),C(H,1,n,a,m,C(H,0,g,b,w,y)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,P=h.d,m=h.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,y=M.e;return C(H,1,n,a,C(H,0,i,c,P,m),C(H,0,g,b,w,y))}else return e},Is=Ta(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return C(H,n,l,u,$,C(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ci(r)}else break e;else return c.a,c.d,Ci(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(H,r,n,a,ra(t),l);var u=ul(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(en,$,s,d,ra(m),f)}else return ar}else return C(H,r,n,a,ra(t),l)}else return ar},gn=v(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(H,n,a,t,o(gn,e,i),c);var u=ul(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return C(en,$,s,d,o(gn,e,m),f)}else return ar}else return C(H,n,a,t,o(gn,e,i),c);else return o(Os,e,Ot(Is,e,r,n,a,t,i,c))}),Os=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(xr(e,a)){var l=Ws(c);if(l.$===-1){var u=l.b,$=l.c;return C(en,n,u,$,i,ra(c))}else return ar}else return C(en,n,a,t,i,o(gn,e,c))}else return ar}),vl=v(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=S(function(e,r,n){var a=r(o(ll,e,n));if(a.$)return o(vl,e,n);var t=a.a;return p(bn,e,t,n)}),Js=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Le(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Us,x(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Le(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Fs,x(i,c),p(Hs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Le(function(a){return a.$===3?As(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Le(function(a){return a.$===2?Bs(n):a}))}},qs=function(e){return Ds(Js(e))},Zs=v(function(e,r){return o(re,qs(e),r)}),Xs=v(function(e,r){return Ye(r,{eD:o(Zs,e,r.eD)})}),Qs=v(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Ye(a,{B:o(el,Xs(e),a.B)}))}),Ks=v(function(e,r){var n=r.a,a=r.b;return x(n,e(a))}),ed=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Ye(t,{B:o(Ks,o(e,i.a,r),i)}))}),rd=B(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ye(a,{aM:!a.aM});case 2:var t=n.a;return Ye(a,{G:p(Ss,e,t,a.G)});case 3:var i=n.a;return Ye(a,{G:o(Qs,i,a.G)});case 4:var c=n.a;return Ye(a,{G:p(ed,r,c,a.G)});default:var l=n.a;return Ye(a,{G:o(Ms,l,a.G)})}}),nd=v(function(e,r){return o(Ne,Va,{B:x(e,r(e)),ab:z,T:z})}),ad=a$,Pi=ad(z),ba=Yv,Ln=jv,td=l$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ae({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Ae({ep:d,eE:s,da:$,eL:u,e8:l,fq:c,fv:i,ea:t,ei:a})},o(D,"alt",X))},o(D,"control",X))},o(D,"down",X))},o(D,"downs",ba(Ln)))},o(D,"left",X))},o(D,"pressedKeys",ba(Ln)))},o(D,"right",X))},o(D,"shift",X))},o(D,"up",X))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Ae({da:$,cb:u,fe:l,fw:c,fx:i,ei:t,fU:a,fY:n})},o(D,"down",X))},o(D,"isDown",X))},o(D,"move",X))},o(D,"rightDown",X))},o(D,"rightUp",X))},o(D,"up",X))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Ae({e_:n,fS:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Ae({eG:r,eH:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),od=function(e){return{$:4,a:e}},id={$:0},cd=vc,Ie=v(function(e,r){return o(pc,e,cd(r))}),I=Ie("className"),ld=function(e){var r=e.b.B;return r.b},ga=Ie("id"),ud=d$,ha=ud,vd=m$,ge=vd,$d={$:1},fd=function(e){return{$:3,a:e}},sd=function(e){return{$:5,a:e}},Li=mr("a"),po=mr("button"),dd=Mn("d"),$l=dc("http://www.w3.org/2000/svg"),md=$l("path"),pd=$l("svg"),bd=Mn("viewBox"),hn=function(e){return o(pd,_([bd("0 0 100 100"),o(ge,"width","100%"),o(ge,"height","100%")]),_([o(md,_([dd(e)]),z)]))},zi=function(e){return o(Ie,"href",b$(e))},Zr={eK:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eU:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eZ:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fo:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",bi:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fB:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f0:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},gd=function(e){return{$:0,a:e}},fl=mc,sl=v(function(e,r){return o(fl,e,gd(r))}),bo=function(e){return o(sl,"click",Ae(e))},ki=Ie("target"),hd=Ie("title"),Lt=v(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(H,n,a,o(e,a,t),o(Lt,e,i),o(Lt,e,c))}),_d=pt,be=_d,wd=function(e){return p(Aa,S(function(r,n,a){return o(T,n,a)}),z,e)},yd=v(function(e,r){return{$:3,a:e,b:r}}),xd=v(function(e,r){return{$:2,a:e,b:r}}),Sd=v(function(e,r){return{$:0,a:e,b:r}}),Cd=v(function(e,r){return{$:1,a:e,b:r}}),Ea=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dl=L(Ea,0/255,0/255,0/255,1),Pd=vc,Ld=v(function(e,r){return o(pc,e,Pd(r))}),zd=Ld("checked"),Ce=mv,kd=S(function(e,r,n){return le(o(Pn,e-Mr(n),Ra(r)),n)}),_a=iv,ml=function(e){var r=function(n){return n<10?Fe(n):Ra(al(87+n))};return e<16?r(e):le(ml(e/16|0),r(o(_a,16,e)))},Td=o(ae,ml,o(kd,2,"0")),go=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aI:t,b4:a,ca:n,cK:r}},Md=function(e){var r=go(e),n=r.cK,a=r.ca,t=r.b4;return o(Tr,"",o(T,"#",o(re,o(ae,Ce,Td),_([n*255,a*255,t*255]))))},zt=Ie("htmlFor"),kt=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),wa=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Dd=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(T,t,n)}),pl=v(function(e,r){return p(tr,Dd(e),z,r)}),bl=B(function(e,r,n,a){return{e3:r,fc:e,fj:n,fE:a}}),Ad=j$,Bd=Bv,Fd=v(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Ud=E$,Vd=function(e){return o(Ud,{ey:!1,ff:!1},e)},gl=function(e){if(e.b){var r=e.a;return e.b,ee(r)}else return q},Rd=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Ed=function(e){return{$:2,a:e}},jd=function(e){return{$:0,a:e}},Yd=function(e){return{$:1,a:e}},qa=v(function(e,r){return er(r)-er(e)}),Za=S(function(e,r,n){var a=er(n);return O(er(e),a)<1&&O(a,er(r))<1}),Nd=v(function(e,r){var n=function(t){return O(t,e)<0?ue(t):ye(Yd(r))},a=p(Za,"0","9",r)?ue(o(qa,"0",r)):p(Za,"a","z",r)?ue(10+o(qa,"a",r)):p(Za,"A","Z",r)?ue(10+o(qa,"A",r)):ye(jd(r));return o(wa,n,a)}),hl=v(function(e,r){var n=tn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(wa,function(c){return o(wa,function(l){return ue(c+l*e)},o(hl,e,i))},o(Nd,e,t))}),Gd=v(function(e,r){return 2<=e&&e<=36?o(hl,e,Ct(r)):ye(Ed(e))}),Hd=Gd(16),Wd=S(function(e,r,n){return L(Ea,e,r,n,1)}),Id=B(function(e,r,n,a){return L(Ea,e,r,n,a)}),Fn=ov,Od=v(function(e,r){var n=o(Fn,10,e);return Ce(r*n)/n}),Jd=Lv,qd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=nl(n);if(a.b&&!a.b.b){var t=a.a;return Bd(_([t,t]))}else return n};return o(ae,Jd,o(ae,function(n){return o(Le,function(a){return p(Ad,1,a,n)},Vd(e))},o(ae,kt(gl),o(ae,Le(function(n){return n.fE}),o(ae,Le(pl(Dr)),o(ae,Fd("Parsing hex regex failed"),wa(function(n){var a=o(re,o(ae,r,o(ae,Hd,Rd(es))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(L(Id,t/255,c/255,u/255,o(Od,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Wd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ya=mr("input"),Tt=mr("label"),Mt=Ie("name"),_l=v(function(e,r){return p(tr,D,r,e)}),Zd=o(_l,_(["target","checked"]),X),Xd=function(e){return o(sl,"change",o(da,e,Zd))},Qd=function(e){return x(e,!0)},Kd=function(e){return{$:1,a:e}},em=v(function(e,r){return o(fl,e,Kd(r))}),rm=o(_l,_(["target","value"]),Ln),ho=function(e){return o(em,"input",o(da,Qd,o(da,e,rm)))},wl=Ie("max"),yl=Ie("min"),xl=function(e){return o(Ie,"step",e)},xa=Ie("type"),_o=Ie("value"),Ti=function(e){var r=e.cd,n=e.cZ,a=e.ct,t=e.cp,i=e.cS,c=e.cx;return o(W,z,_([o(Tt,_([zt(r)]),_([o(W,_([I("relative w-full")]),_([o(W,_([I("inline-block")]),_([be(r)])),o(W,_([I("inline-block float-right")]),_([be(me(n))]))]))])),o(ya,_([xa("range"),o(ge,"width","100%"),ga(r),Mt(r),yl(me(a)),wl(me(t)),_o(me(n)),xl(me(i)),ho(o(ae,mo,o(ae,vr(42),c)))]),z)]))},nm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),am=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(W,z,_([o(W,_([I("mb-2")]),_([o(Tt,_([zt(e)]),_([be(e)]))])),o(ya,_([xa("checkbox"),ga(e),Mt(e),Xd(yd(e)),zd(c)]),z)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ti({cd:e,cp:i,ct:t,cx:Sd(e),cS:.01*(i-t),cZ:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ti({cd:e,cp:i,ct:t,cx:o(ae,Ce,Cd(e)),cS:1,cZ:c});default:var c=r.a;return o(W,z,_([o(W,_([o(ge,"margin-bottom","6px")]),_([o(Tt,_([zt(e)]),_([be(e)]))])),o(ya,_([xa("color"),o(ge,"width","100%"),o(ge,"height","26px"),o(ge,"padding","0px"),ga(e),Mt(e),ho(function(l){return o(xd,e,o(nm,dl,qd(l)))}),_o(Md(c))]),z)]))}}),tm=function(e){return o(W,_([I("p-6 border-y-[0.5px] border-white20")]),_([o(W,_([I("text-lg pb-2")]),_([be(e.fg)])),o(W,_([I("pl-2 pr-2")]),wd(o(Lt,am,e.av)))]))},om=function(e){return o(W,_([I("text-xs text-white60")]),o(re,tm,e))},im=function(e){return o(W,_([I("absolute left-[104px] bottom-2 text-sm text-white40")]),_([be("clock: "+o(pn,3,on(e).bD))]))},cm=function(e){e.a;var r=e.b.T;return o(Le,function(n){return Ce(60/(on(e).bD-n))},o(Le,o(ae,as,function(n){return n.bD}),gl(o(Qc,59,r))))},lm=function(e){return o(W,_([I("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=cm(e);if(r.$===1)return _([be("... Fps")]);var n=r.a;return _([be(Fe(n)+" Fps")])}())},um=function(e){return{$:0,a:e}},vm=function(e){var r=e.b.T;return Ar(r)},$m=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Ar(r)+1+Ar(n)},fm=function(e){return o(ya,_([I("absolute left-[100px] w-[490px]"),xa("range"),yl(Fe(0)),wl(Fe($m(e)-1)),_o(Fe(vm(e))),xl(Fe(1)),ho(o(ae,mo,o(ae,vr(42),o(ae,Ce,um))))]),z)},Mi={$:1},sm={$:3},dm={$:2},Sl=function(e){return!e.b},Di=v(function(e,r){return o(po,_([I("px-2 bg-black40"),I(r),bo(e)]),_([be("REC")]))}),Ai=v(function(e,r){return o(po,_([I("absolute left-[60px] mx-1 px-1 bg-black40"),bo(r)]),_([o(W,_([I("w-4 h-6 fill-white80")]),_([hn(e)]))]))}),mm=function(e){var r=e.a,n=e.b.ab;return o(W,_([I("py-1")]),_([function(){switch(r.$){case 0:return o(Di,Mi,"text-red-500 font-bold");case 1:return o(Di,dm,"text-white80 font-bold");default:return o(W,z,z)}}(),function(){switch(r.$){case 0:return o(W,z,z);case 1:return Sl(n)?o(W,z,z):o(Ai,Zr.fp,sm);default:return o(Ai,Zr.fo,Mi)}}()]))},pm=function(e){return o(W,_([I("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),_([fm(e),mm(e),lm(e),im(e)]))},Cl=function(e){return o(Tr,"",e)},bm=v(function(e,r){if(r.b){var n=r.a,a=r.b,t=v(function(c,l){return o(T,e,o(T,c,l))}),i=p(tr,t,z,a);return o(T,n,i)}else return z}),gm=function(e){var r=e.a;return xr(r,Va)},zr=mr("p"),hm=mr("pre"),_m=v(function(e,r){var n=gm(r.G)?o(W,z,z):o(W,_([I("absolute pointer-events-none w-8 h-8"),o(ge,"left",me(e.bi.fU+.5*e.bk.fS)+"px"),o(ge,"top",me(-e.bi.fY+.5*e.bk.e_)+"px")]),_([o(W,_([I(e.bi.cb?"fill-black80":"fill-white40")]),_([hn(Zr.bi)]))]));return o(W,z,_([n,o(hm,_([I("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),_([o(zr,z,_([be("pressedKeys: "+Cl(o(bm," ",e.dp.fq)))])),o(zr,z,_([be("delta time: "+o(pn,4,e.eM))])),o(zr,z,_([be("pointer is down: "+(e.bi.cb?"yes":"no"))])),o(zr,z,_([be("pointer.x: "+o(pn,2,e.bi.fU))])),o(zr,z,_([be("pointer.y: "+o(pn,2,e.bi.fY))])),o(zr,z,_([be("wheel deltaX: "+me(e.fQ.eG))])),o(zr,z,_([be("wheel deltaY: "+me(e.fQ.eH))]))]))]))}),wm=v(function(e,r){var n=o(po,_([I(r.aM?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),bo($d),hd("Distraction Free Mode")]),_([hn(Zr.f0)])),a=o(W,_([I("absolute w-8 bottom-12")]),_([o(Li,_([I("fill-twitterBlue40 hover:fill-twitterBlue"),zi("https://twitter.com/AzizErkalSelman"),ki("_blank")]),_([hn(Zr.fL)]))])),t=o(W,_([I("absolute w-8 bottom-2")]),_([o(Li,_([I("fill-githubCat40 hover:fill-githubCat"),zi("https://github.com/erkal/elm-3d-playground-exploration"),ki("_blank")]),_([hn(Zr.eU)]))]));return r.aM?o(W,_([I("fixed w-10 h-10 p-1")]),_([n])):o(W,z,_([o(W,_([I("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(W,_([I("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),_([o(ha,fd,om(on(r.G).eD))])),o(ha,sd,pm(r.G)),o(_m,e,r)]))}),ym=S(function(e,r,n){var a=ld(n.G),t=on(n.G);return o(W,_([I("bg-black40"),I("select-none"),I("antialiased"),I("font-mono"),o(ge,"width",me(t.bk.fS)+"px"),o(ge,"height",me(t.bk.e_)+"px")]),_([o(W,_([I("fixed")]),_([o(ha,Ic(id),o(e,t,a))])),o(W,_([ga("gui")]),_([o(wm,t,n),o(W,_([I("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),_([o(ha,od,o(r,t,a))]))]))]))}),xm=We(function(e,r,n,a,t,i){var c=v(function(u,$){return x(L(rd,r,i,u,$),Pi)}),l=function(u){var $=o(Oc,n,u.e5);return x({aM:u.e5.bk.fS<500,G:o(nd,$,a)},Pi)};return ws({e4:l,fF:Ic(td(ls)),fM:c,fP:o(ym,e,t)})}),Sm=B(function(e,r,n,a){return we(xm,e,r,n,a,v(function(t,i){return o(W,z,z)}),S(function(t,i,c){return c}))}),Pl=ar,Cm=Pl,Ll=v(function(e,r){var n=r;return p(bn,e,0,n)}),Pm=function(e){return p(Dn,Ll,Cm,e)},Lm=Pm(_([x(-3,-3),x(-3,1),x(-3,2),x(-3,3),x(-2,-2),x(-2,0),x(-2,3),x(-2,4),x(-1,-5),x(-1,-4),x(-1,-3),x(-1,-2),x(-1,0),x(-1,3),x(-1,4),x(0,-4),x(0,-3),x(0,-2),x(0,-1),x(0,0),x(0,1),x(0,2),x(0,3),x(0,4),x(1,-5),x(1,-4),x(1,-3),x(1,-2),x(1,0),x(1,3),x(1,4),x(2,-2),x(2,0),x(2,3),x(2,4),x(3,-3),x(3,1),x(3,2),x(3,3)])),zm=function(e){return{ax:Lm}},$r=cv,fr=function(e){return e},Jr=function(e){return fr($r*(e/180))},gr=pv,km=v(function(e,r){var n=e,a=r,t=a.c2-n.c2,i=a.fY-n.fY,c=a.fU-n.fU,l=o(Te,J(c),o(Te,J(i),J(t)));if(l){var u=t/l,$=i/l,s=c/l,d=gr(s*s+$*$+u*u);return ee({fU:s/d,fY:$/d,c2:u/d})}else return q}),na=function(e){return e},wo=v(function(e,r){var n=e,a=r;return{fU:a.fY*n.c2-a.c2*n.fY,fY:a.c2*n.fU-a.fU*n.c2,c2:a.fU*n.fY-a.fY*n.fU}}),_n=function(e){var r=e,n=o(Te,J(r.fU),o(Te,J(r.fY),J(r.c2)));if(n){var a=r.c2/n,t=r.fY/n,i=r.fU/n,c=gr(i*i+t*t+a*a);return ee({fU:i/c,fY:t/c,c2:a/c})}else return q},Sa=v(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c2:a.c2-n.c2}}),Tm=v(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c2*n.c2}),zl=v(function(e,r){var n=e,a=r;return O(a,n)>0}),Mm=v(function(e,r){var n=e,a=r;return O(a,n)<0}),Dm=v(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c2:a.c2-n.c2}}),Am=v(function(e,r){var n=e,a=r,t=a.fU*n.fU+a.fY*n.fY+a.c2*n.c2;return{fU:n.fU*t,fY:n.fY*t,c2:n.c2*t}}),Bm=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c2:-r.c2}},qe=0,kl={fU:0,fY:0,c2:0},Fm=S(function(e,r,n){return o(kt,function(a){var t=o(Dm,o(Am,a,r),r);return o(kt,function(i){var c=o(wo,r,e),l=o(Tm,n,c),u=o(zl,qe,l)?c:o(Mm,qe,l)?Bm(c):kl;return o(Le,function($){return V(a,i,$)},_n(u))},_n(t))},_n(e))}),Um=function(e){var r=e,n=J(r.c2),a=J(r.fY),t=J(r.fU);if(O(t,a)<1)if(O(t,n)<1){var i=gr(r.c2*r.c2+r.fY*r.fY);return{fU:0,fY:-r.c2/i,c2:r.fY/i}}else{var i=gr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c2:0}}else if(O(a,n)<1){var i=gr(r.c2*r.c2+r.fU*r.fU);return{fU:r.c2/i,fY:0,c2:-r.fU/i}}else{var i=gr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c2:0}}},yo=function(e){var r=Um(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c2-i.c2*a.fY,fY:i.c2*a.fU-i.fU*a.c2,c2:i.fU*a.fY-i.fY*a.fU};return x(r,c)},qr=function(e){var r=e;return r},sr=function(e){return e},Vm=v(function(e,r){var n=yo(e),a=n.a,t=n.b;return sr({cy:r,c0:a,c1:t,c3:e})}),Rm=function(e){var r=o(Sa,e.aS,e.df),n=qr(e.ej),a=o(wo,r,n),t=p(Fm,r,n,a);if(t.$){var $=_n(r);if($.$){var d=yo(e.ej),m=d.a,f=d.b;return sr({cy:e.df,c0:f,c1:e.ej,c3:m})}else{var s=$.a;return o(Vm,s,e.df)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return sr({cy:e.df,c0:u,c1:l,c3:c})}},Lr={fU:0,fY:0,c2:0},Em=function(e){return{$:0,a:e}},Se=function(e){var r=e;return J(r)},aa=function(e){var r=e;return .5*r},jm=vv,Ym=function(e){var r=e;return jm(r)},Nm=function(e){var r=aa(Se(e.ek)),n=Ym(r);return{cJ:Em(n),c_:e.c_}},lr=function(e){return e},xo=lr({fU:0,fY:1,c2:0}),Gm=function(e){var r=e.aS,n=e.df,a=e.ej;return Nm({ek:Jr(40),c_:Rm({df:na(n),aS:na(r),ej:o(vr,xo,o(km,Lr,na(a)))})})},Br=lv,Hm=v(function(e,r){return(r-Hc(r/e)*e)/e}),Wm=function(e){return 2*$r*e},Dt=B(function(e,r,n,a){return e+(r-e)*(1+Br(Wm(o(Hm,n,a))))/2}),So=function(e){return Gm({df:{fU:1+L(Dt,-5,5,7,e.bD),fY:1,c2:20},aS:{fU:0,fY:0,c2:0},ej:{fU:0,fY:1,c2:0}})},rr=function(e){return e},Im=S(function(e,r,n){return{fU:e,fY:r,c2:n}}),Wn=function(e){return e},ta=function(e){var r=e;return r},Om=v(function(e,r){var n=e,a=r;return a.fU*n.fU+a.fY*n.fY+a.c2*n.c2}),Tl=function(e){var r=e;return r.eJ},te=v(function(e,r){var n=r;return e*n}),Ml=function(e){var r=e;return r.cy},Jm=v(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.fi,l=c;return(a.fU-i.fU)*l.fU+(a.fY-i.fY)*l.fY+(a.c2-i.c2)*l.c2}),qm=S(function(e,r,n){var a=e,t=r,i=n;return{fU:i.fU+t*a.fU,fY:i.fY+t*a.fY,c2:i.c2+t*a.c2}}),Zm=v(function(e,r){var n=Tl(r),a=e,t=a.fi,i=o(Om,t,n);if(i){var c=Ml(r),l=o(Jm,e,c),u=o(te,-1/i,l);return ee(p(qm,n,u,c))}else return q}),Xm=v(function(e,r){return{fU:e,fY:r}}),Bi=v(function(e,r){var n=e,a=r;return n*a}),Qm=function(e){var r=e;return r},Fi=function(e){var r=e;return Qm(r.et)},Km=function(e){var r=e;return r.aL},Dl=v(function(e,r){var n=r;return n/e}),cn=function(e){var r=e;return r.cy},At=function(e){var r=e;return cn(r)},Bt=function(e){var r=e;return-r},Co=lr({fU:0,fY:0,c2:-1}),e0=v(function(e,r){var n=e,a=r;return a/n}),r0=v(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,$=u;return{fU:$.fU*a.fU+l.fU*a.fY+i.fU*a.c2,fY:$.fY*a.fU+l.fY*a.fY+i.fY*a.c2,c2:$.c2*a.fU+l.c2*a.fY+i.c2*a.c2}}),Fr=v(function(e,r){return{eJ:r,cy:e}}),Ca=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c2:-r.c2}},Vr=function(e){var r=e;return r.c3},Ft=function(e){var r=e;return Ca(Vr(r))},n0=v(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c0,l=c;return(a.fU-i.fU)*l.fU+(a.fY-i.fY)*l.fY}),Po=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c2:i}}),a0=B(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cy,$=u,s=t.c3,d=s,m=t.c1,f=m,g=t.c0,b=g;return{fU:$.fU+i*b.fU+c*f.fU+l*d.fU,fY:$.fY+i*b.fY+c*f.fY+l*d.fY,c2:$.c2+i*b.c2+c*f.c2+l*d.c2}}),t0=v(function(e,r){var n=e,a=r,t=n.cy,i=t,c=n.c1,l=c;return(a.fU-i.fU)*l.fU+(a.fY-i.fY)*l.fY}),o0=S(function(e,r,n){var a=e,t=o(t0,Fi(r),n),i=o(n0,Fi(r),n),c=a.c_,l=c,u=Km(r);u.a;var $=u.b,s=a.cJ;if(s.$){var g=s.a,b=o(e0,$,g),w=L(a0,l,o(Bi,b,i),o(Bi,b,t),qe);return o(Fr,w,Ft(a.c_))}else{var d=s.a,m=Bt(o(Dl,d,o(te,.5,$))),f=o(r0,l,o(vr,Co,_n(p(Po,i,t,m))));return o(Fr,At(a.c_),f)}}),rn=uv,Ut=function(e){var r=e;return{fU:Br(r),fY:rn(r)}},i0=function(e){var r=e;return{fU:-r.fY,fY:r.fU}},c0=function(e){return e},l0=v(function(e,r){return c0({cy:r,c0:e,c1:i0(e)})}),u0=v(function(e,r){return o(l0,Ut(e),r)}),v0=S(function(e,r,n){var a=e.a,t=e.b;return{et:o(u0,r,n),aL:x(Se(a),Se(t))}}),_r=function(e){var r=e;return r.fU},$0=v(function(e,r){var n=e,a=r;return{fU:n,fY:a}}),wr=function(e){var r=e;return r.fY},yr=function(e){var r=e;return r.c2},f0=B(function(e,r,n,a){var t=n.fU,i=n.fY,c=function($){return p(Im,ta(_r($)),ta(wr($)),ta(yr($)))},l=p(v0,x(Wn(r.fS),Wn(r.e_)),Jr(0),o(Xm,0,0)),u=o($0,Wn(t),Wn(i));return o(Le,c,o(Zm,a,p(o0,e,l,u)))}),ln=v(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c2:a.c2+n.c2}}),s0=v(function(e,r){return{fi:e,cy:r}}),d0=v(function(e,r){var n=r;return o(s0,n.fi,o(ln,e,n.cy))}),m0=v(function(e,r){return{fi:r,cy:e}}),Lo=lr({fU:0,fY:0,c2:1}),zo=Lo,p0=o(m0,Lr,zo),b0=B(function(e,r,n,a){return L(f0,r,n,a,o(d0,p(Po,rr(0),rr(0),rr(e)),p0))}),Al=b0(0),g0=v(function(e,r){var n=p(Al,So(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return Ye(r,{ax:o(Ll,x(Ce(a.fU),Ce(a.fY)),r.ax)})}),h0=v(function(e,r){var n=r;return o(vl,e,n)}),_0=v(function(e,r){var n=p(Al,So(e),e.bk,e.bi);if(n.$)return r;var a=n.a;return Ye(r,{ax:o(h0,x(Ce(a.fU),Ce(a.fY)),r.ax)})}),w0=v(function(e,r){return e.dp.ea&&e.bi.cb?o(_0,e,r):e.bi.cb?o(g0,e,r):r}),ko=function(e){return e},Bl=S(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),y0=function(e){var r=e;return r},x0=function(e){var r=p(Bl,1667,25e3,y0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ko({fU:n,fY:a})},To=v(function(e,r){return{$:0,a:e,b:r}}),Xa=v(function(e,r){var n=e,a=r;return O(a,n)>-1}),Qa=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),ur=v(function(e,r){var n=e,a=r;return a-n}),S0=lr({fU:-1,fY:0,c2:0}),C0=lr({fU:0,fY:-1,c2:0}),Fl=lr({fU:1,fY:0,c2:0}),de=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c2:i}}),P0=We(function(e,r,n,a,t,i){var c=o(Xa,n,i)?Lo:Co,l=o(Xa,r,t)?xo:C0,u=o(Xa,e,a)?Fl:S0,$=V(Se(o(ur,e,a)),Se(o(ur,r,t)),Se(o(ur,n,i))),s=p(de,o(Qa,e,a),o(Qa,r,t),o(Qa,n,i)),d=sr({cy:s,c0:u,c1:l,c3:c});return{et:d,aL:$}}),L0=v(function(e,r){return we(P0,_r(e),wr(e),yr(e),_r(r),wr(r),yr(r))}),Vt=S(function(e,r,n){return{fU:e,fY:r,c2:n}}),z0=v(function(e,r){var n=r/2;return o(To,e,o(L0,p(Vt,-n,-n,-n),p(Vt,n,n,n)))}),Mo=function(e){return{$:5,a:e}},k0=function(e){return Mo(e)},Rt=function(e){return{$:0,a:e}},Ul=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ka=function(e){return p(Bl,0,1,e<=.04045?e/12.92:o(Fn,(e+.055)/1.055,2.4))},Un=G$,T0=function(e){var r=go(e),n=r.cK,a=r.ca,t=r.b4;return p(Un,Ka(n),Ka(a),Ka(t))},M0=function(e){return p(Ul,0,Rt(T0(e)),Rt(0))},Vl=v(function(e,r){return{$:2,a:e,b:r}}),Rl=v(function(e,r){return{$:4,a:e,b:r}}),El=v(function(e,r){return{$:3,a:e,b:r}}),jl=v(function(e,r){return{$:1,a:e,b:r}}),D0=S(function(e,r,n){return{fU:e,fY:r,c2:n}}),A0=function(e){var r=e;return r},Do=function(e){var r=e;return A0(r.et)},Ao=function(e){var r=e;return r.aL},Rr=function(e){var r=e;return r.c0},Er=function(e){var r=e;return r.c1},B0=v(function(e,r){return sr({cy:o(ln,e,cn(r)),c0:Rr(r),c1:Er(r),c3:Vr(r)})}),F0=v(function(e,r){return{et:o(B0,e,Do(r)),aL:Ao(r)}}),U0=v(function(e,r){var n=r;return o(Fr,o(ln,e,n.cy),n.eJ)}),V0=v(function(e,r){var n=r;return{k:o(U0,e,n.k),e9:n.e9,fr:n.fr}}),Bo=function(e){var r=e;return r},R0=function(e){return e},Yl=v(function(e,r){var n=Bo(r),a=n.a,t=n.b;return R0(x(e(a),e(t)))}),E0=v(function(e,r){return o(Yl,ln(e),r)}),Fo=function(e){var r=e;return r.eA},Uo=function(e){var r=e;return r.fr},Nl=v(function(e,r){return{eA:r,fr:Se(e)}}),j0=v(function(e,r){return o(Nl,Uo(r),o(ln,e,Fo(r)))}),Gl=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),Y0=v(function(e,r){return o(Gl,ln(e),r)}),ja=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(D0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(To,s,o(F0,i,c));case 1:var s=r.a,l=r.b;return o(jl,s,o(Y0,i,l));case 3:var s=r.a,u=r.b;return o(El,s,o(j0,i,u));case 2:var s=r.a,$=r.b;return o(Vl,s,o(V0,i,$));case 4:var s=r.a,d=r.b;return o(Rl,s,o(E0,i,d));default:var m=r.a;return Mo(o(re,ja(V(n,a,t)),m))}}),N0=function(e){return ja(V(e,0,0))},Ui=function(e){return ja(V(0,e,0))},G0=function(e){return ja(V(0,0,e))},oa=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=rn(c),$=a.eJ,s=$,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,b=l*g,w=d*g,y=g*g,h=1-2*(f+y),P=s.c2*u,M=l*P,Y=2*(w-M),E=2*(w+M),R=d*P,j=2*(R+b),N=2*(R-b),F=g*P,Z=2*(F-m),Q=2*(F+m),ie=P*P,ve=1-2*(y+ie),oe=1-2*(f+ie);return{fU:ve*i.fU+Y*i.fY+j*i.c2,fY:E*i.fU+oe*i.fY+Z*i.c2,c2:N*i.fU+Q*i.fY+h*i.c2}}),Vn=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Br(c),u=rn(c),$=a.cy,s=$,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c2-s.c2,g=a.eJ,b=g,w=b.fU*u,y=l*w,h=w*w,P=b.fY*u,M=l*P,Y=w*P,E=P*P,R=1-2*(h+E),j=b.c2*u,N=l*j,F=2*(Y-N),Z=2*(Y+N),Q=w*j,ie=2*(Q+M),ve=2*(Q-M),oe=P*j,se=2*(oe-y),Me=2*(oe+y),Pe=j*j,pr=1-2*(E+Pe),br=1-2*(h+Pe);return{fU:s.fU+pr*d+F*m+ie*f,fY:s.fY+Z*d+br*m+se*f,c2:s.c2+ve*d+Me*m+R*f}}),H0=S(function(e,r,n){return sr({cy:p(Vn,e,r,cn(n)),c0:p(oa,e,r,Rr(n)),c1:p(oa,e,r,Er(n)),c3:p(oa,e,r,Vr(n))})}),W0=S(function(e,r,n){return{et:p(H0,e,r,Do(n)),aL:Ao(n)}}),I0=v(function(e,r){var n=o(Vn,e,r),a=o(oa,e,r);return function(t){var i=t;return o(Fr,n(i.cy),a(i.eJ))}}),O0=S(function(e,r,n){var a=n;return{k:p(I0,e,r,a.k),e9:a.e9,fr:a.fr}}),J0=S(function(e,r,n){return o(Yl,o(Vn,e,r),n)}),q0=S(function(e,r,n){return o(Nl,Uo(n),p(Vn,e,r,Fo(n)))}),Z0=S(function(e,r,n){return o(Gl,o(Vn,e,r),n)}),Ya=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(To,l,p(W0,e,r,a));case 1:var l=n.a,t=n.b;return o(jl,l,p(Z0,e,r,t));case 3:var l=n.a,i=n.b;return o(El,l,p(q0,e,r,i));case 2:var l=n.a,c=n.b;return o(Vl,l,p(O0,e,r,c));case 4:var l=n.a,u=n.b;return o(Rl,l,p(J0,e,r,u));default:var $=n.a;return Mo(o(re,o(Ya,e,r),$))}}),Vo=Fl,X0=o(Fr,Lr,Vo),Q0=v(function(e,r){return p(Ya,X0,fr(e),r)}),Ro=xo,K0=o(Fr,Lr,Ro),ep=v(function(e,r){return p(Ya,K0,fr(e),r)}),rp=o(Fr,Lr,zo),np=v(function(e,r){return p(Ya,rp,fr(e),r)}),ap=L(Ea,237/255,212/255,0/255,1),tp=v(function(e,r){var n=function(a){var t=a.a,i=a.b,c=(t+i)*.1,l=L(Dt,-$r,$r,14,e.bD+c);return o(G0,-.5,o(Ui,i,o(N0,t,o(np,l,o(Q0,l,o(ep,l,o(z0,M0(ap),1)))))))};return o(Ui,L(Dt,-.5,.5,7,e.bD),k0(o(re,n,Yf(r.ax))))}),op=function(e){return e},ip=function(e){return{$:0,a:e}},cp=ip,lp={$:3},up=lp,vp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),$p=vp,fp=v(function(e,r){return r.b?p(tr,T,r,e):e}),Ge=function(e){return p(tr,fp,z,e)},Eo=v(function(e,r){return Ge(o(re,e,r))}),sp=function(e){return{$:1,a:e}},dp=sp,mp=function(e){return o(Mn,"height",Fe(e))},pp=function(e){return f$(p$(e))},bp=pp,gp=function(e){return{$:2,a:e}},hp=gp,_p=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ce(l*1e3)/1e3},c=function(l){return Ce(l*1e4)/100};return Cl(_(["rgba(",me(c(r)),"%,",me(c(n)),"%,",me(c(a)),"%,",me(i(t)),")"]))},wp=v(function(e,r){switch(r.$){case 0:return o(Df,e,r);case 1:return o(Af,e,r);case 2:return o(Bf,e,r);case 3:return o(Ff,e,r);case 4:return o(Uf,e,r);default:return o(Vf,e,r)}}),yp=v(function(e,r){switch(r.$){case 0:return o(lf,e,r);case 1:return o(uf,e,r);case 2:return o(vf,e,r);case 3:return o($f,e,r);case 4:return o(ff,e,r);case 5:return o(sf,e,r);case 6:return o(df,e,r);case 7:return o(mf,e,r);default:return pf(e)}}),xp=S(function(e,r,n){return p(Mf,e,r,n)}),Vi=function(e){var r=e;return r},un=q$,et=L(un,1,1,1,1),Ze=S(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),Sp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Cp=v(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Sp,n*a/t,n,n*(1-a-t)/t)}),Pp=function(e){var r=e.a,n=e.b,a=e.c;return p(Un,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Na=v(function(e,r){return Pp(o(Cp,e,r))}),Hl=v(function(e,r){return{dn:xr(e.dn,r.dn),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bZ,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bZ,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bZ,bZ:e.bZ*r.bZ}}),Qe=rf,Lp=function(e){return Qe({dw:e.q,dx:e.t,dy:e.w,dz:e.H,dA:e.r,dB:e.u,dC:e.x,dD:e.I,dE:e.s,dF:e.v,dG:e.y,dH:e.J,dI:0,dJ:0,dK:0,dL:1})},rt=he(function(e,r,n,a,t){var i=a.dn?1:-1,c=L(un,a.bZ,a.bZ,a.bZ,i);return we(t,e,c,Lp(a),a.dn,r,n)}),Wl=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Hl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(T,C(rt,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,y=o(T,C(rt,e,r,n,a,w),i.U);return{M:i.M,U:y,fz:i.fz};case 2:var h=t.a,P=o(T,C(rt,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:P};default:var M=t.a;return p(Dn,L(Wl,e,r,n,a),i,M)}}),zp=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Il=zp,jo=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),kp=function(e){var r=e.Z,n=e.W,a=e.V;return L(jo,518,r,n,a)},Tp=v(function(e,r){return{$:6,a:e,b:r}}),Mp=Tp,Ol=_([kp({V:1,W:0,Z:!1}),L(Il,!1,!1,!1,!1),o(Mp,0,1)]),nn=519,Yo=8,Jl=15,Xr=7681,Dp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=cf,Ap=v(function(e,r){return{$:0,a:e,b:r}}),Bp=Ap({db:1,dk:0,dU:5}),Be=Y$,Fp=Bp(_([{d0:o(Be,-1,-1)},{d0:o(Be,1,-1)},{d0:o(Be,-1,1)},{d0:o(Be,1,1)}])),Up={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"d0"},uniforms:{}},Vp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},No=S(function(e,r,n){var a=e.cL,t=e.cm,i=e.c$,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(ae,c($.bo),o(ae,l($.a9),o(ae,l($.bw),l($.bx))))};return o(u,n,o(u,r,p(Vp,a,t,i)))}),Go=function(e){return p(No,{cm:e.cm,cL:e.cL,c$:e.c$},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx},{a9:e.a9,bo:e.bo,bw:e.bw,bx:e.bx})},Ho=function(e){return C(ne,_([Go(e),L(Il,!1,!1,!1,!1)]),Up,Dp,Fp,{})},Rp=Ho({a9:Xr,cm:0,cL:Yo,bo:nn,c$:Jl,bw:Xr,bx:Xr}),Ep=516,Ri=5386,xe=7680,jp=function(e){return o(Fn,2,e+4)},ql=function(e){return Ho({a9:xe,cm:Jl,cL:Yo,bo:Ep,c$:jp(e),bw:Ri,bx:Ri})},Yp=S(function(e,r,n){return Ge(_([p(Ze,e,n,Ol),_([ql(r),Rp])]))}),Np=v(function(e,r){return Ge(o(Rc,Yp(e),r))}),Gp=function(e){var r=e.Z,n=e.W,a=e.V;return L(jo,513,r,n,a)},Hp=Gp({V:1,W:0,Z:!0}),Wp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},Ip=function(e){var r=e.bX,n=e.bI,a=e.bB,t=e.by,i=e.bE,c=e.aI,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return Wp(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},Op=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ei=v(function(e,r){var n=e,a=r;return p(Op,32774,n,a)}),Jp=1,ji=771,qp=770,Wo=Ip({by:0,aI:o(Ei,Jp,ji),bB:0,bE:o(Ei,qp,ji),bI:0,bX:0}),Gr=_([Hp,Wo]),Zp=function(e){var r=e;return r.dN},Xp=function(e){var r=e;return r.dO},Zl=function(e){var r=e;return r.dP},Qp=function(e){var r=e;return r.dQ},Kp=function(e){var r=e;return r.dR},Xl=function(e){var r=e;return r.dS},Ql=function(e){return V(o(ur,Qp(e),Zp(e)),o(ur,Kp(e),Xp(e)),o(ur,Xl(e),Zl(e)))},e3=function(e){return e},r3=function(e){return sr({cy:e3({fU:e.H,fY:e.I,c2:e.J}),c0:lr({fU:e.q,fY:e.r,c2:e.s}),c1:lr({fU:e.t,fY:e.u,c2:e.v}),c3:lr({fU:e.w,fY:e.x,c2:e.y})})},nt=v(function(e,r){var n=e,a=r,t=n.c3,i=t,c=n.c1,l=c,u=n.c0,$=u;return{fU:a.fU*$.fU+a.fY*$.fY+a.c2*$.c2,fY:a.fU*l.fU+a.fY*l.fY+a.c2*l.c2,c2:a.fU*i.fU+a.fY*i.fY+a.c2*i.c2}}),Kl=v(function(e,r){var n=e,a=r,t=n.cy,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c2-i.c2,$=n.c3,s=$,d=n.c1,m=d,f=n.c0,g=f;return{fU:c*g.fU+l*g.fY+u*g.c2,fY:c*m.fU+l*m.fY+u*m.c2,c2:c*s.fU+l*s.fY+u*s.c2}}),eu=v(function(e,r){return{cy:o(Kl,e,cn(r)),c0:o(nt,e,Rr(r)),c1:o(nt,e,Er(r)),c3:o(nt,e,Vr(r))}}),Pa=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(Te,n,a)}),ia=v(function(e,r){return O(e,r)<0?e:r}),fe=v(function(e,r){var n=e,a=r;return o(ia,n,a)}),n3=v(function(e,r){var n=Pa(r),a=Pa(e);return{dN:o(ce,a.dN,n.dN),dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(fe,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS)}}),He=function(e){var r=e;return r},a3=function(e){var r=e;return V(r.fU,r.fY,r.c2)},wn=v(function(e,r){var n=e,a=r;return a+n}),t3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(Se(a)),c=aa(Se(n)),l=aa(Se(t)),u=a3(r),$=u.a,s=u.b,d=u.c;return{dN:o(wn,c,$),dO:o(wn,i,s),dP:o(wn,l,d),dQ:o(ur,c,$),dR:o(ur,i,s),dS:o(ur,l,d)}}),Yi=B(function(e,r,n,a){var t=n.eA,i=2*n.eY*r,c=2*n.eX*r,l=2*n.eW*r,u=t.c2*r,$=t.fY*r,s=t.fU*r,d=He(Vr(e)),m=J(l*d.fU)+J(c*d.fY)+J(i*d.c2),f=He(Er(e)),g=J(l*f.fU)+J(c*f.fY)+J(i*f.c2),b=He(Rr(e)),w=J(l*b.fU)+J(c*b.fY)+J(i*b.c2),y=o(t3,V(w,g,m),o(Kl,e,p(Vt,s,$,u)));if(a.$)return ee(y);var h=a.a;return ee(o(n3,h,y))}),Et=B(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=L(Yi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=L(Yi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=L(Et,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(eu,r3($),e),m=r*$.bZ,f=e,g=r,b=L(Et,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),jr=H$,Yr=W$,Nr=I$,ru=function(e){return{$:4,a:e}},o3=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(T,n,r);e=t,r=i;continue e}else return r}),Rn=function(e){return ru(o(o3,e,z))},i3={dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bZ:1},Ni=Ho({a9:Xr,cm:0,cL:Yo,bo:nn,c$:255,bw:Xr,bx:Xr}),c3=function(e){var r=e,n=o(Te,J(r.fU),o(Te,J(r.fY),J(r.c2)));if(n){var a=r.c2/n,t=r.fY/n,i=r.fU/n,c=gr(i*i+t*t+a*a);return c*n}else return qe},De={bB:0,ez:!1,bI:0,cH:0,bX:0,cW:0,fU:0,fY:0,c2:0},Ee=v(function(e,r){var n=e,a=r;return Qe({dw:n.fU,dx:n.bX,dy:a.fU,dz:a.bX,dA:n.fY,dB:n.bI,dC:a.fY,dD:a.bI,dE:n.c2,dF:n.bB,dG:a.c2,dH:a.bB,dI:n.cW,dJ:n.cH,dK:a.cW,dL:a.cH})}),dn=x({be:o(Ee,De,De),bN:o(Ee,De,De),bO:o(Ee,De,De),bP:o(Ee,De,De)},L(un,0,0,0,0)),nu=514,au=function(e){var r=e.Z,n=e.W,a=e.V;return L(jo,515,r,n,a)},tu=240,l3=_([au({V:1,W:0,Z:!0}),Go({a9:xe,cm:tu,cL:0,bo:nu,c$:0,bw:xe,bx:xe}),Wo]),u3=v(function(e,r){var n=e,a=r.fh,t=r.eT,i=r.es,c=Se(a),l=c,u=Se(t),$=u,s=n.cJ;if(s.$){var m=s.a;return xt($)?Qe({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:0,dJ:0,dK:0,dL:1}):Qe({dw:2/(i*m),dx:0,dy:0,dz:0,dA:0,dB:2/m,dC:0,dD:0,dE:0,dF:0,dG:-2/($-l),dH:-($+l)/($-l),dI:0,dJ:0,dK:0,dL:1})}else{var d=s.a;return xt($)?Qe({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-1,dH:-2*l,dI:0,dJ:0,dK:-1,dL:0}):Qe({dw:1/(i*d),dx:0,dy:0,dz:0,dA:0,dB:1/d,dC:0,dD:0,dE:0,dF:0,dG:-($+l)/($-l),dH:-2*$*l/($-l),dI:0,dJ:0,dK:-1,dL:0})}}),In=v(function(e,r){return(1&e>>r)===1?0:1}),v3=function(e){return _([au({V:1,W:0,Z:!0}),Go({a9:xe,cm:tu,cL:e,bo:nu,c$:0,bw:xe,bx:xe}),Wo])},$3=S(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=L(un,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(Ze,e,x(r,i),v3(t))},o(Kr,1,o(Fn,2,n)-1)))}),Qr=function(e){var r=e;return r},f3=nf,s3={cy:Lr,c0:Vo,c1:Ro,c3:zo},En=function(e){var r=e;return r},d3=function(e){var r=En(cn(e)),n=He(Vr(e)),a=He(Er(e)),t=He(Rr(e));return Qe({dw:t.fU,dx:a.fU,dy:n.fU,dz:r.fU,dA:t.fY,dB:a.fY,dC:n.fY,dD:r.fY,dE:t.c2,dF:a.c2,dG:n.c2,dH:r.c2,dI:0,dJ:0,dK:0,dL:1})},m3=v(function(e,r){var n=r;return d3(o(eu,n,e))}),p3=function(e){return o(m3,s3,e)},b3=function(e){var r=e;return r.c_},g3=function(e){var r=e;return Rr(r)},h3=function(e){var r=e;return Er(r)},_3=function(e){var r=b3(e.ex),n=sr({cy:At(r),c0:g3(r),c1:h3(r),c3:Ca(Ft(r))}),a=Rn(e.aQ),t=a,i=L(Et,n,1,q,_([t]));if(i.$===1)return z;var c=i.a,l=p3(r),u=o(te,.99,o(ce,Se(e.eC),Bt(Zl(c)))),$=Ql(c),s=$.a,d=$.b,m=$.c,f=c3(p(Po,s,d,m)),g=o(te,1.01,o(wn,f,Bt(Xl(c)))),b=o(u3,e.ex,{es:e.es,eT:g,fh:u}),w=f3(b).dL,y=w?He(Ca(Ft(r))):Qr(At(r)),h=function(){var oe=e.fK;switch(oe.$){case 0:return x(0,0);case 1:return x(1,0);case 2:return x(2,0);case 3:var se=oe.a;return x(3,se);case 4:var se=oe.a;return x(4,se);default:return x(5,0)}}(),P=h.a,M=h.b,Y=e.eR,E=Y,R=o(Na,E,e.fR),j=R,N=Qe({dw:0,dx:y.fU,dy:jr(j),dz:e.ed,dA:0,dB:y.fY,dC:Yr(j),dD:ta(f),dE:0,dF:y.c2,dG:Nr(j),dH:P,dI:0,dJ:w,dK:0,dL:M}),F=we(Wl,N,l,b,i3,t,{M:z,U:z,fz:z}),Z=e.fb;switch(Z.$){case 0:var Q=Z.a;return Ge(_([p(Ze,F.M,x(Q,et),Gr),p(Ze,F.U,dn,Gr)]));case 1:var Q=Z.a;return Ge(_([p(Ze,F.M,dn,Gr),_([Ni]),p(Ze,F.fz,Q.be,Ol),_([ql(0)]),p(Ze,F.M,x(Q,et),l3),p(Ze,F.U,dn,Gr)]));default:var ie=Z.a,ve=Z.b;return Ge(_([p(Ze,F.M,x(ve,et),Gr),_([Ni]),o(Np,F.fz,ie),p($3,F.M,ve,Ar(ie)),p(Ze,F.U,dn,Gr)]))}},w3=function(e){return o(Mn,"width",Fe(e))},y3=v(function(e,r){var n=_([dp(1),hp(0),cp(!0),L($p,0,0,0,0)]),a=function(){var P=e.eq;switch(P.$){case 0:return V(n,"0",1);case 1:return V(o(T,up,n),"1",1);default:var M=P.a;return V(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aL,u=l.a,$=l.b,s=Vi($),d=o(ge,"height",Fe(s)+"px"),m=Vi(u),f=m/s,g=o(Eo,function(P){return _3({es:f,ex:e.ex,eC:e.eC,aQ:P.aQ,eR:P.eR,fb:P.fb,ed:c,fK:P.fK,fR:P.fR})},r),b=o(ge,"width",Fe(m)+"px"),w=e.aJ,y=w,h=_p(y);return p(bp,"div",_([o(ge,"padding","0px"),b,d]),_([x(i,p(xp,t,_([w3(Ce(m*c)),mp(Ce(s*c)),b,d,o(ge,"display","block"),o(ge,"background-color",h)]),g))]))}),x3=function(e){return{$:2,a:e}},S3=function(e){return x3(e)},C3=function(e){return o(y3,{eq:S3(e.b8),aJ:e.aJ,ex:e.ex,eC:e.eC,aL:e.aL},_([{aQ:e.aQ,eR:e.eR,fb:e.fb,fK:e.fK,fR:e.fR}]))},Gi=function(e){return e},ou=B(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),P3=B(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),iu=B(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cu=B(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),L3=B(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),z3=B(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),k3=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Io=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(k3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(ou,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(P3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(iu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(z3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(cu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(L3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Oo={$:0},T3=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Pa(c(u)),d=o(fe,s.dQ,e),m=o(ce,s.dN,r),f=o(fe,s.dR,n),g=o(ce,s.dO,a),b=o(fe,s.dS,t),w=o(ce,s.dP,i),y=c,h=$;e=d,r=m,n=f,a=g,t=b,i=w,c=y,l=h;continue e}else return{dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t}}),M3=S(function(e,r,n){var a=Pa(e(r));return Ma(T3,a.dQ,a.dN,a.dR,a.dO,a.dS,a.dP,e,n)}),at=v(function(e,r){var n=e,a=r;return O(a,n)<1}),lu=function(e){return o(at,e.dN,e.dQ)&&o(at,e.dO,e.dR)&&o(at,e.dP,e.dS)?e:{dN:o(ce,e.dQ,e.dN),dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(fe,e.dQ,e.dN),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP)}},zn=function(e){var r=e;return r},uu=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=_r(n),c=wr(n),l=yr(n),u=_r(a),$=wr(a),s=yr(a),d=_r(t),m=wr(t),f=yr(t);return lu({dN:o(ce,i,o(ce,u,d)),dO:o(ce,c,o(ce,$,m)),dP:o(ce,l,o(ce,s,f)),dQ:o(fe,i,o(fe,u,d)),dR:o(fe,c,o(fe,$,m)),dS:o(fe,l,o(fe,s,f))})},vu=O$,ze=function(e){return vu(En(e))},$u=function(e){var r=e;return r},Ga=function(e){return vu($u(e))},fu=function(e){return e},D3=v(function(e,r){var n=e,a=r,t=o(Te,J(a.fU),o(Te,J(a.fY),J(a.c2)));if(t){var i=a.c2/t,c=a.fY/t,l=a.fU/t,u=gr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c2:n*i/u}}else return kl}),A3=D3(fu(1)),su=S(function(e,r,n){var a=o(Sa,r,n),t=o(Sa,e,r);return A3(o(wo,a,t))}),B3=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Ga(p(su,n,a,t));return V({o:i,d0:ze(n)},{o:i,d0:ze(a)},{o:i,d0:ze(t)})},F3=v(function(e,r){return{$:2,a:e,b:r}}),du=F3({db:3,dk:0,dU:4}),U3=function(e){if(e.b){var r=e.a,n=e.b,a=du(o(re,B3,e)),t=p(M3,uu,r,n);return L(ou,t,e,a,0)}else return Oo},Re=S(function(e,r,n){return V(e,r,n)}),mu=function(){var e=rr(1),r=rr(1),n=rr(1),a=o(te,-.5,e),t=o(te,-.5,r),i=o(te,-.5,n),c=p(de,i,t,a),l=o(te,.5,e),u=p(de,i,t,l),$=o(te,.5,r),s=p(de,i,$,a),d=p(de,i,$,l),m=o(te,.5,n),f=p(de,m,t,a),g=p(de,m,$,a),b=p(de,m,t,l),w=p(de,m,$,l);return Io(U3(_([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,g,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,g),p(Re,s,d,w)])))}(),On={$:0},V3=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),R3=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ga(p(su,u,l,c)),s={o:$,d0:ze(u)},d={o:$,d0:ze(l)},m={o:$,d0:ze(c)};return o(T,s,o(T,d,o(T,m,n)))}),Jo=function(e){var r=e;return r.D},E3=B(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ee(p(e,t,i,c))}),jt=4294967295>>>32-Cn,Yt=Ku,j3=S(function(e,r,n){e:for(;;){var a=jt&r>>>e,t=o(Yt,a,n);if(t.$){var $=t.a;return o(Yt,jt&r,$)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Y3=function(e){return e>>>5<<5},N3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,Y3(n))>-1?ee(o(Yt,jt&e,i)):ee(p(j3,a,e,t))}),qo=function(e){var r=e;return r.ah},tt=v(function(e,r){return o(N3,e,qo(r))}),G3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(E3,S(function(c,l,u){return V(c,l,u)}),o(tt,a,e),o(tt,t,e),o(tt,i,e))};return o(pl,r,Jo(e))},H3=S(function(e,r,n){e:for(;;){var a=o(uo,Ve,e),t=a.a,i=a.b;if(O(wt(t),Ve)<0)return o(Wc,!0,{z:r,l:n,p:t});var c=i,l=o(T,Gc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Zo=function(e){return e.b?p(H3,e,z,0):Yc},W3=S(function(e,r,n){return e(r(n))}),I3=v(function(e,r){return!o(rl,o(W3,ys,e),r)}),O3=v(function(e,r){return p(tr,v(function(n,a){return e(n)?o(T,n,a):a}),z,r)}),J3=function(e){var r=e.a;return r},pu=v(function(e,r){var n=J3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(I3,a,r)?{D:r,ah:e}:{D:o(O3,a,r),ah:e}}),q3=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=q3({db:1,dk:3,dU:4}),ca=v(function(e,r){var n=Qr(r),a=Qr(e);return x(V(a.fU,a.fY,a.c2),V(n.fU,n.fY,n.c2))}),Hi=p(Un,0,0,0),ot=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(ll,o(ca,e,r),t);if($.$){var d={o:Hi,d0:ze(r)},m={o:Hi,d0:ze(e)},f=u+1,g=u;return V(o(T,V(n,g,f),o(T,V(n,f,a),c)),o(T,d,o(T,m,l)),u+2)}else{var s=$.a;return V(o(T,V(n,s,a),c),l,u)}}),Z3=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,y=r,h=$,P=a+3,M=we(ot,s,m,f,b,r,we(ot,d,s,g,f,r,we(ot,m,d,b,g,r,t)));e=w,r=y,n=h,a=P,t=M;continue e}else{var Y=t,E=Y.a,R=Y.b;return x(E,Ue(R))}}),X3=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(bn,o(ca,m,s),f,p(bn,o(ca,s,d),g,p(bn,o(ca,d,m),b,t))),y=o(T,V(b,g,f),a),h=e,P=$,M=n+3,Y=y,E=w;e=h,r=P,n=M,a=Y,t=E;continue e}else return V(a,t,n)}),kr=S(function(e,r,n){var a=G3(n),t=p(tr,R3(r),z,a),i=C(X3,r,a,0,z,Pl),c=i.a,l=i.b,u=i.c,$=C(Z3,r,l,a,0,V(c,z,u)),s=$.a,d=$.b,m=Sl(d)?t:le(t,d);return p(V3,e,o(pu,Zo(m),s),o(jn,m,s))}),Nt=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(Kr,0,Ar(e)-1)),ah:Zo(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},bu=function(e){switch(e.$){case 0:return On;case 1:var a=e.a,r=e.b,n=o(re,zn,r);return p(kr,a,Dr,Nt(n));case 2:var a=e.a,r=e.b,n=o(re,zn,r);return p(kr,a,Dr,Nt(n));case 3:var a=e.a,t=e.b;return p(kr,a,Dr,t);case 4:var a=e.a,t=e.b;return p(kr,a,function(i){return i.d0},t);case 5:var a=e.a,t=e.b;return p(kr,a,function(i){return i.d0},t);case 6:var a=e.a,t=e.b;return p(kr,a,function(i){return i.d0},t);case 7:var a=e.a,t=e.b;return p(kr,a,function(i){return i.d0},t);case 8:return On;case 9:return On;default:return On}},Wi=bu(mu),gu={$:0},k=gu,pe=v(function(e,r){return{$:1,a:e,b:r}}),Q3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bF"}},K3=1029,eb=function(e){return{$:5,a:e}},hu=function(e){var r=e;return eb(r)},rb=hu(K3),nb=1028,ab=hu(nb),ke=S(function(e,r,n){return r===1?e?o(T,rb,n):o(T,ab,n):n}),_u={src:`
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
    `,attributes:{position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},it=B(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,$,s,d){return C(ne,p(ke,l,a,d),_u,Q3,n,{bF:e,b:c,c:i,d:$,e:t,f:u})}))}),Xo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},wu={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=B(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,$,s,d){return C(ne,p(ke,l,a,d),wu,Xo,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),yu=v(function(e,r){return{$:3,a:e,b:r}}),tb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bV",sceneProperties:"e"}},xu={src:`
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
    `,attributes:{position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bV",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ob=B(function(e,r,n,a){return o(yu,n,K(function(t,i,c,l,u,$,s,d){return C(ne,d,xu,tb,a,{aw:e,b:c,c:i,bV:r,d:$,e:t,f:u})}))}),Qo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",sceneProperties:"e"}},Yn=function(e){var r=e;return r},Ha=J$,ir=he(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,$,s,d,m){return C(ne,p(ke,u,t,m),wu,Qo,a,{aO:o(Ha,Yn(r),e),b:l,c,d:s,e:i,f:$})}))}),ib={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aO",pointRadius:"bV",sceneProperties:"e"}},cb=he(function(e,r,n,a,t){return o(yu,a,K(function(i,c,l,u,$,s,d,m){return C(ne,m,xu,ib,t,{aO:o(Ha,Yn(r),e),b:l,c,bV:n,d:s,e:i,f:$})}))}),Su={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColor:"cn",sceneProperties:"e",viewMatrix:"f"}},Cu={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=B(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return C(ne,p(ke,l,a,d),Cu,Su,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,cn:e,b:c,c:i,d:$,e:t,f:u})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",materialColorTexture:"co",normalMapTexture:"aX",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},Lu={src:`
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
    `,attributes:{normal:"o",position:"d0",tangent:"ef",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},lb=We(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return C(ne,p(ke,$,i,f),Lu,Pu,t,{P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,co:e,b:u,c:l,aX:r,d,e:c,a0:n,f:s})}))}),zu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b3",constantBaseColor:"b5",constantMetallic:"b6",constantRoughness:"b7",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallicTexture:"cs",normalMapTexture:"aX",roughnessTexture:"cP",sceneProperties:"e",useNormalMap:"a0",viewMatrix:"f"}},ub=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(pe,u,K(function(d,m,f,g,b,w,y,h){var P=y.a,M=y.b;return C(ne,p(ke,g,s,h),Lu,zu,$,{b3:e,b5:r,b6:i,b7:a,P:M,be:P.be,bN:P.bN,bO:P.bO,bP:P.bP,cs:t,b:f,c:m,aX:c,d:w,cP:n,e:d,a0:l,f:b})}))}}}}}}}}}}},ku={src:`
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
    `,attributes:{},uniforms:{baseColor:"b2",enabledLights:"P",lights12:"be",lights34:"bN",lights56:"bO",lights78:"bP",metallic:"cr",roughness:"cO",sceneProperties:"e",viewMatrix:"f"}},qn=We(function(e,r,n,a,t,i){return o(pe,a,K(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return C(ne,p(ke,$,i,f),Cu,ku,t,{b2:e,P:b,be:g.be,bN:g.bN,bO:g.bO,bP:g.bP,cr:n,b:u,c:l,d,cO:r,e:c,f:s})}))}),vb=function(e){return{$:0,a:e}},Ii=v(function(e,r){return{$:1,a:e,b:r}}),yn=v(function(e,r){if(r.$){var n=r.a.C;return x(n,1)}else return r.a,x(e,0)}),$b=function(e){return L(un,jr(e),Yr(e),Nr(e),1)},Ko=L(un,0,0,0,0),la=v(function(e,r){if(r.$){var a=r.a.C;return x(a,Ko)}else{var n=r.a;return x(e,$b(n))}}),Tu=v(function(e,r){var n=x(e,r);if(n.a.$){var t=n.a.a.C;return o(Ii,x(t,Ko),o(yn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ii,o(la,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,vb(a)}}),fb=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=B(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),sb=B(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),db=function(e){return o(Be,e,1)},Gt=o(Be,0,0),Hr=v(function(e,r){if(r.$){var a=r.a.C;return x(a,Gt)}else{var n=r.a;return x(e,db(n))}}),Mu=B(function(e,r,n,a){var t=L(sb,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Zn,x(u,Ko),o(Hr,u,r),o(Hr,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Zn,o(la,u,e),x(u,Gt),o(Hr,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Zn,o(la,u,e),o(Hr,u,r),x(u,Gt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Zn,o(la,u,e),o(Hr,u,r),o(Hr,u,n),x(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(fb,i,c,l)}}),mb={src:`
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
    `,attributes:{},uniforms:{backlight:"b0",colorTexture:"bF",sceneProperties:"e"}},ct=he(function(e,r,n,a,t){return o(pe,n,K(function(i,c,l,u,$,s,d,m){return C(ne,p(ke,u,t,m),_u,mb,a,{b0:Yn(r),bF:e,b:l,c,d:s,e:i,f:$})}))}),Du={src:`
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
    `,attributes:{normal:"o",position:"d0",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},pb=B(function(e,r,n,a){return o(pe,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return C(ne,p(ke,l,a,d),Du,Pu,n,{P:f,be:m.be,bN:m.bN,bO:m.bO,bP:m.bP,co:e,b:c,c:i,aX:e,d:$,e:t,a0:0,f:u})}))}),bb=It(function(e,r,n,a,t,i,c,l,u){return o(pe,c,K(function($,s,d,m,f,g,b,w){var y=b.a,h=b.b;return C(ne,p(ke,m,u,w),Du,zu,l,{b3:e,b5:r,b6:i,b7:a,P:h,be:y.be,bN:y.bN,bO:y.bO,bP:y.bP,cs:t,b:d,c:s,aX:e,d:g,cP:n,e:$,a0:0,f})}))}),kn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),gb=function(e){var r=e;return p(kn,r.dQ,r.dN,.5)},hb=function(e){var r=e;return p(kn,r.dR,r.dO,.5)},_b=function(e){var r=e;return p(kn,r.dS,r.dP,.5)},wb=function(e){return p(de,gb(e),hb(e),_b(e))},G=function(e){var r=Ql(e),n=r.a,a=r.b,t=r.c;return{eA:En(wb(e)),eW:n/2,eX:a/2,eY:t/2}},ei=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(it,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(it,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(it,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(ob,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return C(ct,l,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ct,l,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ct,l,$,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,u,$,G(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,u,$,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(cb,u,$,i,G(t),c)}}case 2:e.a;var s=e.b,E=e.c,d=o(Tu,s,E);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,y=w.a,h=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(pb,b,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(lb,b,y,h,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(Jn,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(Jn,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(Jn,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(Jn,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var P=e.b,M=e.c,Y=e.d,E=e.e,R=L(Mu,P,M,Y,E);if(R.$){var Z=R.a,Q=Z.a,ie=Z.b,ve=R.b,oe=ve.a,se=ve.b,Me=R.c,Pe=Me.a,pr=Me.b,br=R.d,y=br.a,h=br.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Ju(bb,Q,ie,oe,se,Pe,pr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ub(Q)(ie)(oe)(se)(Pe)(pr)(y)(h)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=R.a,N=R.b,F=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return we(qn,j,N,F,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return we(qn,j,N,F,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return we(qn,j,N,F,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(qn,j,N,F,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),lt=function(e){var r=e;return r.fU},ut=function(e){var r=e;return r.fY},vt=function(e){var r=e;return r.c2},yb=function(e){var r=e,n=vt(r.c3),a=ut(r.c3),t=lt(r.c3),i=vt(r.c1),c=ut(r.c1),l=lt(r.c1),u=vt(r.c0),$=ut(r.c0),s=lt(r.c0);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},xb=function(e){var r=En(cn(e)),n=He(Vr(e)),a=He(Er(e)),t=He(Rr(e));return{dn:yb(e),q:t.fU,r:t.fY,s:t.c2,t:a.fU,u:a.fY,v:a.c2,w:n.fU,x:n.fY,y:n.c2,H:r.fU,I:r.fY,J:r.c2,bZ:1}},Wr=v(function(e,r){return{$:5,a:e,b:r}}),Au=v(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Hl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),Bu=v(function(e,r){return o(Au,xb(e),r)}),Wa=function(e){return{$:2,a:e}},Sb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eA;return{eA:{fU:n*i.fU,fY:a*i.fY,c2:t*i.c2},eW:n*r.eW,eX:a*r.eX,eY:t*r.eY}}),Cb=X$,Pb=Z$,Oi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=Pb(a),g=f.fU,b=f.fY,w=f.c2,y=f.en,h=Cb({en:y,fU:g*s,fY:b*d,c2:w*m});return Ma(r,n,h,t,i,c,l,u,$)}}}}}}}}}},Ht=v(function(e,r){switch(r.$){case 0:return gu;case 5:var n=r.a,a=r.b;return o(Wr,n,o(Ht,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(Sb,e,t),o(Oi,e,i));case 3:return r;case 2:var i=r.a;return Wa(o(Oi,e,i));default:var c=r.a;return ru(o(re,Ht(e),c))}}),ri=v(function(e,r){var n=r;return o(Ht,e,n)}),ni={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Fu=7683,Uu=7682,Lb=p(No,{cm:0,cL:0,c$:15},{a9:xe,bo:nn,bw:xe,bx:Fu},{a9:xe,bo:nn,bw:xe,bx:Uu}),zb=p(No,{cm:0,cL:0,c$:15},{a9:xe,bo:nn,bw:xe,bx:Uu},{a9:xe,bo:nn,bw:xe,bx:Fu}),ai=v(function(e,r){return e?o(T,zb,r):o(T,Lb,r)}),kb={src:`
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
    `,attributes:{normal:"o",position:"d0"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},Tb=function(e){if(e.$){var r=e.c;return ee(K(function(n,a,t,i,c,l,u,$){return C(ne,o(ai,i,$),kb,ni,r,{b:t,c:a,d:l,e:n,b_:u,f:c})}))}else return q},La=function(e){var r=Tb(e);if(r.$)return k;var n=r.a;return Wa(n)},Mb=B(function(e,r,n,a){var t=o(ei,n,mu),i=function(){var s=x(e,r);return s.a?s.b?Rn(_([t,La(Wi)])):t:s.b?La(Wi):k}(),c=Ao(a),l=c.a,u=c.b,$=c.c;return o(Bu,Do(a),o(ri,V(l,u,$),i))}),Db=v(function(e,r){return L(Mb,!0,!0,e,r)}),Vu=v(function(e,r){return{$:0,a:e,b:r}}),Ab=function(e){var r=go(e),n=r.cK,a=r.ca,t=r.b4;return p(Un,n,a,t)},Bb=function(e){return o(Vu,0,Rt(Ab(e)))},Fb=function(e){var r=e;return r.k},xn=function(e){var r=e;return Br(r)},Ub=v(function(e,r){var n=e.d0,a=e.o;return o(T,{o:Ga(a),d0:ze(n)},r)}),Vb=Ta(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=Nr(l.d0),s=Yr(l.d0),d=jr(l.d0),m=o(ia,e,d),f=o(Te,r,d),g=o(ia,n,s),b=o(Te,a,s),w=o(ia,t,$),y=o(Te,i,$),h=u;e=m,r=f,n=g,a=b,t=w,i=y,c=h;continue e}else return lu({dN:r,dO:a,dP:i,dQ:e,dR:n,dS:t})}),Ru=v(function(e,r){var n=Nr(e.d0),a=Yr(e.d0),t=jr(e.d0);return Ot(Vb,t,t,a,a,n,n,r)}),Rb=function(e){var r=p(Ac,Ub,z,qo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Jo(e)),i=o(Ru,n,a);return L(iu,i,e,t,0)}else return Oo},Ji=v(function(e,r){var n=e,a=r,t=n.c1,i=t,c=n.c0,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c2:a.fU*l.c2+a.fY*i.c2}}),za=function(e){var r=e;return rn(r)},Wt=function(e){return fr(2*$r*e)},Eb=Dr,qi=Eb({cy:Lr,c0:Vo,c1:Ro}),Eu=function(){var e=72,r=o(Dl,e,Wt(1)),n=rr(1),a=qr(Lo),t=qr(Co),i=rr(1),c=o(te,.5,i),l=p(de,qe,qe,c),u=o(te,-.5,i),$=p(de,qe,qe,u),s=function(f){var g=o(te,f,r),b=qr(o(Ji,qi,Ut(g))),w=o(te,xn(g),n),y=o(te,za(g),n),h=p(de,w,y,c),P=p(de,w,y,u),M=o(_a,e,f+1),Y=o(te,M,r),E=qr(o(Ji,qi,Ut(Y))),R=o(te,xn(Y),n),j=o(te,za(Y),n),N=p(de,R,j,u),F=p(de,R,j,c);return _([V({o:t,d0:$},{o:t,d0:N},{o:t,d0:P}),V({o:b,d0:P},{o:E,d0:N},{o:E,d0:F}),V({o:b,d0:P},{o:E,d0:F},{o:b,d0:h}),V({o:a,d0:l},{o:a,d0:h},{o:a,d0:F})])},d=o(re,s,o(Kr,0,e-1)),m=Nt(Ge(d));return Io(Rb(m))}(),Zi=bu(Eu),jb=function(e){var r=Tl(e),n=yo(r),a=n.a,t=n.b;return sr({cy:Ml(e),c0:a,c1:t,c3:r})},Yb=function(e){var r=e;return r.e9},Nb=function(e){var r=e;return r.fr},Gb=B(function(e,r,n,a){var t=jb(Fb(a)),i=o(ei,n,Eu),c=function(){var d=x(e,r);return d.a?d.b?Rn(_([i,La(Zi)])):i:d.b?La(Zi):k}(),l=Nb(a),u=l,$=Yb(a),s=$;return o(Bu,t,o(ri,V(u,u,s),c))}),Hb=v(function(e,r){return L(Gb,!0,!0,e,r)}),Xi={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},Qi={src:`
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
    `,attributes:{triangleVertex:"cV"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bt",viewMatrix:"f"}},mn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Qr(n),c=Qr(a),l=Qr(t);return Qe({dw:i.fU,dx:c.fU,dy:l.fU,dz:0,dA:i.fY,dB:c.fY,dC:l.fY,dD:0,dE:i.c2,dF:c.c2,dG:l.c2,dH:0,dI:0,dJ:0,dK:0,dL:0})},Xn=du(_([V({cV:0},{cV:1},{cV:2})])),Wb=v(function(e,r){var n=uu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(pe,a,K(function(h,P,M,Y,E,R,j,N){return C(ne,p(ke,Y,0,N),Xi,Xo,Xn,{aw:t,b:M,c:P,d:R,e:h,bt:mn(r),f:E})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(pe,a,K(function(h,P,M,Y,E,R,j,N){return C(ne,p(ke,Y,0,N),Xi,Qo,Xn,{aO:o(Ha,Yn(c),i),b:M,c:P,d:R,e:h,bt:mn(r),f:E})}));case 2:e.a;var l=e.b,f=e.c,u=o(Tu,l,f);if(u.$)return k;var $=u.a;return o(pe,a,K(function(h,P,M,Y,E,R,j,N){var F=j.a,Z=j.b;return C(ne,p(ke,Y,0,N),Qi,Su,Xn,{P:Z,be:F.be,bN:F.bN,bO:F.bO,bP:F.bP,cn:$,b:M,c:P,d:R,e:h,bt:mn(r),f:E})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(Mu,s,d,m,f);if(g.$)return k;var b=g.a,w=g.b,y=g.c;return o(pe,a,K(function(h,P,M,Y,E,R,j,N){var F=j.a,Z=j.b;return C(ne,p(ke,Y,0,N),Qi,ku,Xn,{b2:b,P:Z,be:F.be,bN:F.bN,bO:F.bO,bP:F.bP,cr:y,b:M,c:P,d:R,cO:w,e:h,bt:mn(r),f:E})}))}}),Ib=function(){var e=_([{a$:o(Be,0,1)},{a$:o(Be,1,1)},{a$:o(Be,2,1)},{a$:o(Be,0,-1)},{a$:o(Be,1,-1)},{a$:o(Be,2,-1)}]),r=_([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(jn,e,r)}(),Ob={src:`
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
    `,attributes:{triangleShadowVertex:"a$"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",triangleVertexPositions:"bt",viewMatrix:"f"}},Ki=function(e){return Wa(K(function(r,n,a,t,i,c,l,u){return C(ne,o(ai,t,u),Ob,ni,Ib,{b:a,c:n,d:c,e:r,b_:l,bt:mn(e),f:i})}))},Jb=B(function(e,r,n,a){var t=o(Wb,n,a),i=x(e,r);return i.a?i.b?Rn(_([t,Ki(a)])):t:i.b?Ki(a):k}),qb=v(function(e,r){return L(Jb,!0,!0,e,r)}),Zb=v(function(e,r){var n=yr(r),a=yr(e),t=wr(r),i=wr(e),c=_r(r),l=_r(e);return{dN:o(ce,l,c),dO:o(ce,i,t),dP:o(ce,a,n),dQ:o(fe,l,c),dR:o(fe,i,t),dS:o(fe,a,n)}}),Xb=function(e){var r=Bo(e),n=r.a,a=r.b;return o(Zb,n,a)},ec={src:`
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
    `,attributes:{lineSegmentVertex:"dv"},uniforms:{lineSegmentEndPoint:"dt",lineSegmentStartPoint:"du",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qb=v(function(e,r){return{$:1,a:e,b:r}}),Kb=Qb({db:2,dk:0,dU:1}),rc=Kb(_([x({dv:0},{dv:1})])),eg=v(function(e,r){var n=Xb(r),a=G(n),t=Bo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(pe,a,K(function($,s,d,m,f,g,b,w){return C(ne,w,ec,Xo,rc,{aw:l,dt:ze(c),du:ze(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(pe,a,K(function(s,d,m,f,g,b,w,y){return C(ne,y,ec,Qo,rc,{aO:o(Ha,Yn(u),l),dt:ze(c),du:ze(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return k;default:return k}}),rg=v(function(e,r){return o(eg,e,r)}),nc=v(function(e,r){var n=e,a=r;return n/a}),ng=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(T,i,t);if(xr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),ac=v(function(e,r){return e<1?z:C(ng,0,e,e,r,z)}),ag=v(function(e,r){var n=e.d0,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(T,{o:Ga(a),d0:ze(n),L:o(Be,c,l)},r)}),tg=function(e){var r=p(Ac,ag,z,qo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Jo(e)),i=o(Ru,n,a);return L(cu,i,e,t,0)}else return Oo},ti=v(function(e,r){var n=e,a=r,t=Br(a);return{fU:t*Br(n),fY:t*rn(n),c2:rn(a)}}),og=function(){var e=rr(1),r=72,n=o(Kr,0,r-1),a=o(ac,r,o(kn,qe,Wt(1))),t=co(r/2),i=o(Kr,0,t-1),c=o(ac,t,o(kn,Jr(90),Jr(-90))),l=Zo(Ge(o(re,function(s){return o(re,function(d){return{o:qr(o(ti,s,d)),d0:p(de,o(te,xn(d)*xn(s),e),o(te,xn(d)*za(s),e),o(te,za(d),e)),L:x(o(nc,s,Wt(1)),o(nc,o(wn,Jr(90),d),Jr(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ge(o(re,function(s){return Ge(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([V(b,g,m),V(b,m,f)])},i))},n));return Io(tg(o(pu,l,$)))}(),ka=72,Qn=2*ka,ig=v(function(e,r){e:for(;;){var n=Qn+1,a=o(_a,Qn,2*e+3),t=o(_a,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(T,V(l,c,t),o(T,V(c,a,t),o(T,V(c,i,a),o(T,V(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),cg=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),lg=v(function(e,r){e:for(;;){var n=p(cg,0,2*$r,e/ka),a={bz:n,bS:0,bY:1},t={bz:n,bS:1,bY:1},i=o(T,a,o(T,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ug=function(){var e=o(lg,ka-1,_([{bz:0,bS:0,bY:0},{bz:0,bS:1,bY:0}])),r=o(ig,ka-1,z);return o(jn,e,r)}(),vg={src:`
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
    `,attributes:{angle:"bz",offsetScale:"bS",radiusScale:"bY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b_",viewMatrix:"f"}},tc=function(e){return Wa(K(function(r,n,a,t,i,c,l,u){return C(ne,o(ai,!0,u),vg,ni,ug,{aw:p(Un,0,0,1),b:a,c:n,d:c,e:r,b_:l,f:i})}))},$g=function(e){var r=$u(e);return{dn:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c2,bZ:1}},fg=v(function(e,r){return o(Au,$g(e),r)}),sg=B(function(e,r,n,a){var t=o(ei,n,og),i=function(){var u=x(e,r);return u.a?u.b?Rn(_([t,tc()])):t:u.b?tc():k}(),c=Uo(a),l=c;return o(fg,o(Sa,Lr,Fo(a)),o(ri,V(l,l,l),i))}),dg=v(function(e,r){return L(sg,!0,!0,e,r)}),mg=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),pg=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),bg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Vu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(mg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Ul,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(pg,n,a,t,i,c)}},gg=bg,ju=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(Db,t,r)]);case 1:var t=e.a,n=e.b;return _([o(qb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(dg,gg(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Hb,t,i)]);case 4:var c=e.a,l=e.b;return _([o(rg,Bb(c),l)]);default:var u=e.a;return o(Eo,ju,u)}},hg=function(e){return o(Eo,ju,e)},_g=v(function(e,r){return C3({eq:e.eq,aJ:op(e.eu),ex:e.ex,eC:rr(e.eC),b8:e.b8,aL:x(Gi(Ce(e.bk.fS)),Gi(Ce(e.bk.e_))),aQ:hg(r),eR:e.eR,fb:e.fb,fK:e.fK,fR:e.fR})}),Kn=function(e){return e*$r/180},Yu=function(e){return e},wg=v(function(e,r){var n=e,a=He(r.eJ),t=a.fU,i=a.fY,c=a.c2,l=o(Na,r.bK,r.aK),u=l;return{bB:Nr(u),ez:n,bI:Yr(u),cH:0,bX:jr(u),cW:1,fU:-t,fY:-i,c2:-c}}),yg=function(e){return o(wg,Yu(!0),{aK:e.aK,eJ:o(ti,fr(e.bA),fr(e.bG)),bK:e.bK})},xg=function(e){return e},Sg=function(e){return xg(1.2*o(Fn,2,e))},$t=ko({fU:.37208,fY:.37529}),Cg=v(function(e,r){return{$:2,a:e,b:r}}),Nu=function(e){return{$:0,a:e}},ea=function(e){var r=e;return r},Pg=function(e){var r=e;return r.ez},Lg=Nu(dn.a),zg=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?x(o(T,a,i),c):x(i,o(T,a,c))});return p(tr,n,x(z,z),r)}),kg=function(e){var r=e;return Qe({dw:r.fU,dx:r.bX,dy:0,dz:0,dA:r.fY,dB:r.bI,dC:0,dD:0,dE:r.c2,dF:r.bB,dG:0,dH:0,dI:r.cW,dJ:r.cH,dK:0,dL:0})},Tg=K(function(e,r,n,a,t,i,c,l){var u=o(zg,Pg,_([ea(e),ea(r),ea(n),ea(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,y=b.b,h=y.a;return o(Cg,o(re,kg,$),{be:o(Ee,m,g),bN:o(Ee,w,h),bO:o(Ee,t,i),bP:o(Ee,c,l)})}else return Lg}else return Nu({be:o(Ee,e,r),bN:o(Ee,n,a),bO:o(Ee,t,i),bP:o(Ee,c,l)})}),Mg=B(function(e,r,n,a){return Ma(Tg,e,r,n,a,De,De,De,De)}),Dg={$:5},Ag=Dg,Bg=ko({fU:.44757,fY:.40745}),Fg=function(e){return e},oc=function(e){return e},ft=function(e){return e},Ug={$:1},Vg=Ug,Rg=v(function(e,r){var n=e,a=En(r.d0),t=a.fU,i=a.fY,c=a.c2,l=o(Na,r.bK,r.aK),u=l;return{bB:Nr(u),ez:n,bI:Yr(u),cH:0,bX:jr(u),cW:2,fU:t,fY:i,c2:c}}),ic=function(e){return o(Rg,Yu(!0),{aK:e.aK,bK:e.bK,d0:na(e.d0)})},cc=function(e){var r=e;return r},Eg=function(e){e:for(;;){if(xr(e.dl,qe)&&xr(e.dm,qe))return De;if(o(zl,Se(e.dl),Se(e.dm))){var r={aK:e.aK,dl:e.dm,dm:e.dl,ej:Ca(e.ej)};e=r;continue e}else{var n=J(cc(e.dm)/$r),a=J(cc(e.dl)/$r),t=He(e.ej),i=t.fU,c=t.fY,l=t.c2,u=o(Na,fu(1),e.aK),$=u;return{bB:a*Nr($),ez:!1,bI:a*Yr($),cH:n/a,bX:a*jr($),cW:3,fU:i,fY:c,c2:l}}}},jg=function(e){return Eg({aK:e.aK,dl:e.dl,dm:e.dm,ej:o(ti,fr(e.bA),fr(e.bG))})},Yg=v(function(e,r){var n=yg({bA:Kn(-90),aK:x0(Fg(2e3)),bG:Kn(-45),bK:ft(100)}),a=ic({aK:$t,bK:oc(6e3),d0:{fU:2,fY:3,c2:3}}),t=jg({bA:Kn(0),aK:$t,bG:Kn(-45),dl:ft(20),dm:ft(10)}),i=ic({aK:Bg,bK:oc(6e3),d0:{fU:-2,fY:4,c2:3}});return o(_g,{eq:Vg,eu:dl,ex:So(e),eC:.1,b8:e.b8,eR:Sg(6),fb:L(Mg,i,a,n,t),bk:e.bk,fK:Ag,fR:$t},_([o(tp,e,r)]))}),Ng=L(Sm,Yg,w0,z,zm);const Gg={Main:{init:Ng(o(A,function(e){return Ae({e5:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return Ae({bD:c,b8:i,eM:t,dp:a,bi:n,bk:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return Ae({ep:d,eE:s,da:$,eL:u,e8:l,fq:c,fv:i,ea:t,ei:a})},o(D,"alt",X))},o(D,"control",X))},o(D,"down",X))},o(D,"downs",ba(Ln)))},o(D,"left",X))},o(D,"pressedKeys",ba(Ln)))},o(D,"right",X))},o(D,"shift",X))},o(D,"up",X))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return Ae({da:$,cb:u,fe:l,fw:c,fx:i,ei:t,fU:a,fY:n})},o(D,"down",X))},o(D,"isDown",X))},o(D,"move",X))},o(D,"rightDown",X))},o(D,"rightUp",X))},o(D,"up",X))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return Ae({e_:n,fS:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return Ae({eG:r,eH:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},U={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Hg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(U.keyboard.downs.push(f.code),U.keyboard.pressedKeys.push(f.code),r(f)&&(U.keyboard.control=!0),n(f)&&(U.keyboard.alt=!0),a(f)&&(U.keyboard.shift=!0),t(f)&&(U.keyboard.left=!0),i(f)&&(U.keyboard.right=!0),c(f)&&(U.keyboard.up=!0),l(f)&&(U.keyboard.down=!0))}),window.addEventListener("keyup",f=>{U.keyboard.pressedKeys=U.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(U.keyboard.control=!1,U.keyboard.pressedKeys=[]),n(f)&&(U.keyboard.alt=!1),a(f)&&(U.keyboard.shift=!1),t(f)&&(U.keyboard.left=!1),i(f)&&(U.keyboard.right=!1),c(f)&&(U.keyboard.up=!1),l(f)&&(U.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{U.pointer.x=-.5*U.screen.width+f.pageX,U.pointer.y=.5*U.screen.height-f.pageY,u(f)&&(U.pointer.down=!0,U.pointer.isDown=!0),$(f)&&(U.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{U.pointer.move=!0,U.pointer.x=-.5*U.screen.width+f.pageX,U.pointer.y=.5*U.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(U.pointer.up=!0,U.pointer.isDown=!1),$(f)&&(U.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(U.pointer.up=!0,U.pointer.isDown=!1),$(f)&&(U.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{U.wheel.deltaX=f.deltaX,U.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(U)}),window.addEventListener("focus",f=>{s(U)}),window.addEventListener("visibilitychange",f=>{s(U)}),window.addEventListener("resize",()=>{U.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-U.clock;b<.009||(U.dt=b,U.clock=g,e.ports.tick.send(U),d(U)),window.requestAnimationFrame(m)}},Wg=()=>{st("pointerdown"),st("wheel"),st("keydown")},st=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Ig=Gg.Main.init({node:document.querySelector("#app div"),flags:{inputs:U}});Wg();Hg(Ig);
