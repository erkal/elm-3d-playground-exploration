const Zu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Zu();function Cr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Cr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Cr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return Cr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function be(e){return Cr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return Cr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return Cr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Cr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Gt(e){return Cr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function It(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function za(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xu(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Qu=[];function Ku(e){return e.length}var ev=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),rv=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),nv=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var av=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+tv()),r});function tv(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function xr(e,r){for(var n,a=[],t=$t(e,r,0,a);t&&(n=a.pop());t=$t(n.a,n.b,0,a));return t}function $t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=bi(e),r=bi(r));for(var t in e)if(!$t(e[t],r[t],n+1,a))return!1;return!0}v(xr);v(function(e,r){return!xr(e,r)});function q(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=q(e.a,r.a))||(n=q(e.b,r.b))?n:q(e.c,r.c);for(;e.b&&r.b&&!(n=q(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return q(e,r)<0});v(function(e,r){return q(e,r)<1});v(function(e,r){return q(e,r)>0});v(function(e,r){return q(e,r)>=0});var ov=v(function(e,r){var n=q(e,r);return n<0?Fc:n?Uf:Bc}),zn=0;function k(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function oe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=or(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=or(e.a,r);return n}var L={$:0};function or(e,r){return{$:1,a:e,b:r}}var iv=v(or);function h(e){for(var r=L,n=e.length;n--;)r=or(e[n],r);return r}function ka(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var cv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});be(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});Ue(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});v(function(e,r){return h(ka(r).sort(function(n,a){return q(e(n),e(a))}))});v(function(e,r){return h(ka(r).sort(function(n,a){var t=o(e,n,a);return t===Bc?0:t===Fc?-1:1}))});var lv=v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var uv=v(Math.pow);v(function(e,r){return r%e});var vv=v(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),$v=Math.PI,fv=Math.cos,sv=Math.sin,dv=Math.tan,mv=Math.atan;v(Math.atan2);function pv(e){return e}function bv(e){return e===1/0||e===-1/0}var gv=Math.ceil,hv=Math.floor,_v=Math.round,wv=Math.sqrt,ai=Math.log,yv=isNaN;function xv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Sv=v(function(e,r){return e+r});function Cv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:re(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}v(function(e,r){return e+r});function Pv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Lv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var zv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),kv=v(function(e,r){return r.split(e)}),Tv=v(function(e,r){return r.join(e)}),Mv=y(function(e,r,n){return n.slice(e,r)});function Dv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Av=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Bv=v(function(e,r){return r.indexOf(e)>-1}),Fv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Vv=v(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function lc(e){return e+""}function Rv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:re(n==45?-r:r)}function Ev(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?re(r):Y}function Nv(e){return ka(e).join("")}function jv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Wv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Gv(e){return{$:0,a:e}}function Ht(e){return{$:2,b:e}}var Iv=Ht(function(e){return typeof e=="boolean"?ue(e):Ke("a BOOL",e)}),Hv=Ht(function(e){return typeof e=="number"?ue(e):Ke("a FLOAT",e)}),Uv=Ht(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Ke("a STRING",e)});function Ov(e){return{$:3,b:e}}var Jv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Pr(e,r){return{$:9,f:e,g:r}}var qv=v(function(e,r){return{$:10,b:r,h:e}}),Yv=v(function(e,r){return Pr(e,[r])}),Zv=y(function(e,r,n){return Pr(e,[r,n])});F(function(e,r,n,a){return Pr(e,[r,n,a])});be(function(e,r,n,a,t){return Pr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return Pr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return Pr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Pr(e,[r,n,a,t,i,c,l])});Gt(function(e,r,n,a,t,i,c,l,u){return Pr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return je(e,n)}catch(a){return ye(o(no,"This is not valid JSON! "+a.message,r))}});var uc=v(function(e,r){return je(e,r)});function je(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Ke("null",r);case 3:return Nn(r)?ti(e.b,r,h):Ke("a LIST",r);case 4:return Nn(r)?ti(e.b,r,Xv):Ke("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ke("an OBJECT with a field named `"+n+"`",r);var $=je(e.b,r[n]);return Ye($)?$:ye(o(gi,n,$.a));case 7:var a=e.e;if(!Nn(r))return Ke("an ARRAY",r);if(a>=r.length)return Ke("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=je(e.b,r[a]);return Ye($)?$:ye(o(Vc,a,$.a));case 8:if(typeof r!="object"||r===null||Nn(r))return Ke("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var $=je(e.b,r[i]);if(!Ye($))return ye(o(gi,i,$.a));t=or(k(i,$.a),t)}return ue(ke(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=je(l[u],r);if(!Ye($))return $;c=c($.a)}return ue(c);case 10:var $=je(e.b,r);return Ye($)?je(e.h($.a),r):$;case 11:for(var s=L,d=e.g;d.b;d=d.b){var $=je(d.a,r);if(Ye($))return $;s=or($.a,s)}return ye(Of(ke(s)));case 1:return ye(o(no,e.a,r));case 0:return ue(e.a)}}function ti(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=je(e,r[i]);if(!Ye(c))return ye(o(Vc,i,c.a));t[i]=c.a}return ue(n(t))}function Nn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Xv(e){return o($s,e.length,function(r){return e[r]})}function Ke(e,r){return ye(o(no,"Expecting "+e,r))}function Gr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Gr(e.b,r.b);case 6:return e.d===r.d&&Gr(e.b,r.b);case 7:return e.e===r.e&&Gr(e.b,r.b);case 9:return e.f===r.f&&oi(e.g,r.g);case 10:return e.h===r.h&&Gr(e.b,r.b);case 11:return oi(e.g,r.g)}}function oi(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Gr(e[a],r[a]))return!1;return!0}var Qv=v(function(e,r){return JSON.stringify(r,null,e)+""});function vc(e){return e}y(function(e,r,n){return n[e]=r,n});function Dr(e){return{$:0,a:e}}function Kv(e){return{$:1,a:e}}function pr(e){return{$:2,b:e,c:null}}var ft=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function e$(e){return{$:5,b:e}}var r$=0;function Ut(e){var r={$:0,e:r$++,f:e,g:null,h:[]};return Ot(r),r}function $c(e){return pr(function(r){r(Dr(Ut(e)))})}function fc(e,r){e.h.push(r),Ot(e)}var n$=v(function(e,r){return pr(function(n){fc(e,r),n(Dr(zn))})}),Ia=!1,ii=[];function Ot(e){if(ii.push(e),!Ia){for(Ia=!0;e=ii.shift();)a$(e);Ia=!1}}function a$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ot(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return Jt(r,a,e.fi,e.f_,e.fU,function(){return function(){}})});function Jt(e,r,n,a,t,i){var c=o(uc,e,r?r.flags:void 0);Ye(c)||Qr(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=t$(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),li(l,b.b,t($))}return li(l,u.b,t($)),d?{ports:d}:{}}var nr={};function t$(e,r){var n;for(var a in nr){var t=nr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=i$(t,r)}return n}function o$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function i$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ft,l,e$(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ut(o(ft,l,e.b))}var c$=v(function(e,r){return pr(function(n){e.g(r),n(Dr(zn))})});v(function(e,r){return o(n$,e.h,{$:0,a:r})});function sc(e){return function(r){return{$:1,k:e,l:r}}}function l$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ci=[],Ha=!1;function li(e,r,n){if(ci.push({p:e,q:r,r:n}),!Ha){Ha=!0;for(var a;a=ci.shift();)u$(a.p,a.q,a.r);Ha=!1}}function u$(e,r,n){var a={};ta(!0,r,a,null),ta(!1,n,a,null);for(var t in e)fc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ta(e,r,n,a){switch(r.$){case 1:var t=r.k,i=v$(e,t,a,r.l);n[t]=$$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ta(e,c.a,n,a);return;case 3:ta(e,r.o,n,{s:r.n,t:a});return}}function v$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?nr[r].e:nr[r].f;return o(i,t,a)}function $$(e,r,n){return n=n||{i:L,j:L},e?n.i=or(r,n.i):n.j=or(r,n.j),n}function f$(e){nr[e]&&Qr(3)}v(function(e,r){return r});function s$(e,r){return f$(e),nr[e]={f:d$,u:r,a:m$},sc(e)}var d$=v(function(e,r){return function(n){return e(r(n))}});function m$(e,r){var n=L,a=nr[e].u,t=Dr(null);nr[e].b=t,nr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(uc,a,c);Ye(l)||Qr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var oa,$r=typeof document!="undefined"?document:{};function qt(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var dc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Yt(n),e:t,f:e,b:i}})}),Ar=dc(void 0),p$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Yt(n),e:t,f:e,b:i}})}),b$=p$(void 0);function g$(e,r,n,a){return{$:3,d:Yt(e),g:r,h:n,i:a}}var h$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Lr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Lr([e,r],function(){return e(r)})});y(function(e,r,n){return Lr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return Lr([e,r,n,a],function(){return p(e,r,n,a)})});be(function(e,r,n,a,t){return Lr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return Lr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return Lr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Lr([e,r,n,a,t,i,c,l],function(){return It(e,r,n,a,t,i,c,l)})});Gt(function(e,r,n,a,t,i,c,l,u){return Lr([e,r,n,a,t,i,c,l,u],function(){return za(e,r,n,a,t,i,c,l,u)})});var mc=v(function(e,r){return{$:"a0",n:e,o:r}}),_$=v(function(e,r){return{$:"a1",n:e,o:r}}),pc=v(function(e,r){return{$:"a2",n:e,o:r}}),kn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function w$(e){return e=="script"?"p":e}function y$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(mc,r.n,x$(e,r.o)):r});function x$(e,r){var n=co(r);return{$:r.$,a:n?p(fs,n<3?S$:C$,Me(e),r.a):o(ua,e,r.a)}}var S$=v(function(e,r){return k(e(r.a),r.b)}),C$=v(function(e,r){return{an:e(r.an),c3:r.c3,cT:r.cT}});function Yt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ui(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ui(c,t,i):c[t]=i}return r}function ui(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return $r.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?$r.createElementNS(e.f,e.c):$r.createElement(e.c);oa&&e.c=="a"&&c.addEventListener("click",oa(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)qt(c,hr(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?P$(e,t):a==="a0"?k$(e,r,t):a==="a3"?L$(e,t):a==="a4"?z$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function P$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function L$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function z$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function k$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=T$(r,i),e.addEventListener(t,c,Zt&&{passive:co(i)<2}),a[t]=c}}var Zt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zt=!0}}))}catch{}function T$(e,r){function n(a){var t=n.q,i=je(t.a,a);if(!!Ye(i)){for(var c=co(t),l=i.a,u=c?c<3?l.a:l.an:l,$=c==1?l.b:c==3&&l.c3,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cT)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function M$(e,r){return e.$==r.$&&Gr(e.a,r.a)}function bc(e,r){var n=[];return Ze(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ze(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=N$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ze(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!D$(d,m):d!==m)&&_e(n,2,a,m),Ze(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:vi(e,r,n,a,A$);return;case 2:vi(e,r,n,a,B$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Xt(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function D$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function vi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Xt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Xt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Xt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&M$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function A$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ze(s,i[$],n,++a),a+=s.b||0}}function B$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,P=b.b,A=void 0,G=void 0;if(w===x){f++,Ze(_,P,t,f),f+=_.b||0,d++,m++;continue}var N=l[d+1],E=u[m+1];if(N){var U=N.a,I=N.b;G=x===U}if(E){var R=E.a,Q=E.b;A=w===R}if(A&&G){f++,Ze(_,Q,t,f),ln(i,t,w,P,m,c),f+=_.b||0,f++,un(i,t,w,I,f),f+=I.b||0,d+=2,m+=2;continue}if(A){f++,ln(i,t,x,P,m,c),Ze(_,Q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(G){f++,un(i,t,w,_,f),f+=_.b||0,f++,Ze(I,P,t,f),f+=I.b||0,d+=2,m+=1;continue}if(N&&U===R){f++,un(i,t,w,_,f),ln(i,t,x,P,m,c),f+=_.b||0,f++,Ze(I,Q,t,f),f+=I.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;un(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var ae=ae||[],b=u[m];ln(i,t,b.a,b.b,void 0,ae),m++}(t.length>0||c.length>0||ae)&&_e(n,8,a,{w:t,x:c,y:ae})}var gc="_elmW6BL";function ln(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ze(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}ln(e,r,n+gc,a,t,i)}function un(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ze(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}un(e,r,n+gc,a,t)}function hc(e,r,n,a){vn(e,r,n,0,0,r.b,a)}function vn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)hc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&vn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&vn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return vn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=vn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function _c(e,r,n,a){return n.length===0?e:(hc(e,r,n,a),ia(e,n))}function ia(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=F$(t,a);t===e&&(e=i)}return e}function F$(e,r){switch(r.$){case 0:return V$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ia(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ia(e,i.w),e;case 8:return R$(e,r);case 5:return r.s(e);default:Qr(10)}}function V$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function R$(e,r){var n=r.s,a=E$(n.y,r);e=ia(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&qt(e,a),e}function E$(e,r){if(!!e){for(var n=$r.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;qt(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Qt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=or(o(kn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,$=e.childNodes,a=$.length;a--;)u=or(Qt($[a]),u);return p(Ar,l,r,u)}function N$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var j$=F(function(e,r,n,a){return Jt(r,a,e.fi,e.f_,e.fU,function(t,i){var c=e.f1,l=a.node,u=Qt(l);return wc(i,function($){var s=c($),d=bc(u,s);l=_c(l,u,d,t),u=s})})});F(function(e,r,n,a){return Jt(r,a,e.fi,e.f_,e.fU,function(t,i){var c=e.c0&&e.c0(t),l=e.f1,u=$r.title,$=$r.body,s=Qt($);return wc(i,function(d){oa=c;var m=l(d),f=Ar("body")(L)(m.eM),g=bc(s,f);$=_c($,s,g,t),s=f,oa=0,u!==m.fY&&($r.title=u=m.fY)})})});var ca=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function wc(e,r){r(e);var n=0;function a(){n=n===1?0:(ca(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ca(a),n=2)}}v(function(e,r){return o(vo,lo,pr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(vo,lo,pr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(vo,lo,pr(function(){history.replaceState({},"",r),e()}))});var W$={addEventListener:function(){},removeEventListener:function(){}},G$=typeof window!="undefined"?window:W$;y(function(e,r,n){return $c(pr(function(a){function t(i){Ut(n(i))}return e.addEventListener(r,t,Zt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=je(e,r);return Ye(n)?re(n.a):Y});function yc(e,r){return pr(function(n){ca(function(){var a=document.getElementById(e);n(a?Dr(r(a)):Kv(ds(e)))})})}function I$(e){return pr(function(r){ca(function(){r(Dr(e()))})})}v(function(e,r){return yc(r,function(n){return n[e](),zn})});v(function(e,r){return I$(function(){return G$.scroll(e,r),zn})});y(function(e,r,n){return yc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var H$=v(function(e,r){var n="g";e.ft&&(n+="m"),e.eO&&(n+="i");try{return re(new RegExp(r,n))}catch{return Y}});v(function(e,r){return r.match(e)!==null});var U$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?re(d):Y}a.push(C(ml,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?re($):Y}return n(C(ml,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var O$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/J$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function J$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Kt=new Float64Array(3),$i=new Float64Array(3),fi=new Float64Array(3),q$=y(function(e,r,n){return new Float64Array([e,r,n])}),Y$=function(e){return e[0]},Z$=function(e){return e[1]},X$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Q$=function(e){return new Float64Array([e.f5,e.f9,e.de])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(xc);function Sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),la(xc(e,r,n),n)}v(Sc);function Cc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function la(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Cc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var K$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v($n);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(mt);v(function(e,r){var n,a=Kt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($n(r,a)+e[14])/n,t});var ef=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var rf=function(e){return{f5:e[0],f9:e[1],de:e[2],eE:e[3]}},nf=function(e){return new Float64Array([e.f5,e.f9,e.de,e.eE])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/af(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function af(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var tf=new Float64Array(16),of=new Float64Array(16),cf=function(e){var r=new Float64Array(16);return r[0]=e.dM,r[1]=e.dQ,r[2]=e.dU,r[3]=e.dY,r[4]=e.dN,r[5]=e.dR,r[6]=e.dV,r[7]=e.dZ,r[8]=e.dO,r[9]=e.dS,r[10]=e.dW,r[11]=e.d_,r[12]=e.dP,r[13]=e.dT,r[14]=e.dX,r[15]=e.d$,r},lf=function(e){return{dM:e[0],dQ:e[1],dU:e[2],dY:e[3],dN:e[4],dR:e[5],dV:e[6],dZ:e[7],dO:e[8],dS:e[9],dW:e[10],d_:e[11],dP:e[12],dT:e[13],dX:e[14],d$:e[15]}};function Pc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ue(Pc);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Pc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ue(Lc);F(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function zc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],P=r[0],A=r[1],G=r[2],N=r[3],E=r[4],U=r[5],I=r[6],R=r[7],Q=r[8],ae=r[9],Se=r[10],Ce=r[11],ge=r[12],he=r[13],Je=r[14],qe=r[15];return n[0]=a*P+l*A+d*G+b*N,n[1]=t*P+u*A+m*G+w*N,n[2]=i*P+$*A+f*G+x*N,n[3]=c*P+s*A+g*G+_*N,n[4]=a*E+l*U+d*I+b*R,n[5]=t*E+u*U+m*I+w*R,n[6]=i*E+$*U+f*I+x*R,n[7]=c*E+s*U+g*I+_*R,n[8]=a*Q+l*ae+d*Se+b*Ce,n[9]=t*Q+u*ae+m*Se+w*Ce,n[10]=i*Q+$*ae+f*Se+x*Ce,n[11]=c*Q+s*ae+g*Se+_*Ce,n[12]=a*ge+l*he+d*Je+b*qe,n[13]=t*ge+u*he+m*Je+w*qe,n[14]=i*ge+$*he+f*Je+x*qe,n[15]=c*ge+s*he+g*Je+_*qe,n}v(zc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],P=r[5],A=r[6],G=r[8],N=r[9],E=r[10],U=r[12],I=r[13],R=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*P+$*A,n[5]=t*_+l*P+s*A,n[6]=i*_+u*P+d*A,n[7]=0,n[8]=a*G+c*N+$*E,n[9]=t*G+l*N+s*E,n[10]=i*G+u*N+d*E,n[11]=0,n[12]=a*U+c*I+$*R+m,n[13]=t*U+l*I+s*R+f,n[14]=i*U+u*I+d*R+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=la(r,Kt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Cc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,P=b-m,A=g-f,G=c*c*$+u,N=w+d,E=b+m,U=w-d,I=l*l*$+u,R=n[0],Q=n[1],ae=n[2],Se=n[3],Ce=n[4],ge=n[5],he=n[6],Je=n[7],qe=n[8],Rr=n[9],Er=n[10],Ga=n[11],Ou=n[12],Ju=n[13],qu=n[14],Yu=n[15];return a[0]=R*x+Ce*_+qe*P,a[1]=Q*x+ge*_+Rr*P,a[2]=ae*x+he*_+Er*P,a[3]=Se*x+Je*_+Ga*P,a[4]=R*A+Ce*G+qe*N,a[5]=Q*A+ge*G+Rr*N,a[6]=ae*A+he*G+Er*N,a[7]=Se*A+Je*G+Ga*N,a[8]=R*E+Ce*U+qe*I,a[9]=Q*E+ge*U+Rr*I,a[10]=ae*E+he*U+Er*I,a[11]=Se*E+Je*U+Ga*I,a[12]=Ou,a[13]=Ju,a[14]=qu,a[15]=Yu,a});function uf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(uf);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function vf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(vf);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Sc(e,r,Kt),t=la(mt(n,a,$i),$i),i=la(mt(a,t,fi),fi),c=tf,l=of;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,zc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var si=0;function wn(e,r){for(;r.b;r=r.b)e(r.a)}function eo(e){for(var r=0;e.b;e=e.b)r++;return r}var $f=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ff=be(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),sf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),df=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),mf=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),pf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),bf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),gf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),hf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),_f=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),wf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},yf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},xf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Sf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},kc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Tc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Cf=function(e){e.gl.disable(e.gl.CULL_FACE)},Pf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Lf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},zf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},di=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],kf=[yf,xf,Sf,kc,Tc,Cf,Pf,Lf,zf];function mi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Tf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Mc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Mf(e,r,n,a){for(var t=n.a.dq,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(P){for(_=0;_<g;_++)f[b++]=g===1?w[P][x]:w[P][x][_]})}var u=Mc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(eo(n.b)*s);wn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Df(e,r){if(r.a.dA>0){var n=e.createBuffer(),a=Af(r.c,r.a.dA);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dq*eo(r.b),indexBuffer:null,buffers:{}}}function Af(e,r){var n=new Uint32Array(eo(e)*r),a=0,t;return wn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function pi(e,r){return e+"#"+r}var Dc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),kc(n),Tc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=pi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=si++,$||($=mi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=si++,s||(s=mi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Tf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Bf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=pi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Ff(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Df(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Mf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Mc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,P=0;P<w.arraySize;P++)a.enableVertexAttribArray(g+P),a.vertexAttribPointer(g+P,w.size,w.baseType,!1,_,x*P)}for(n.toggle=!n.toggle,wn(G0(n),i.a),u=0;u<di.length;u++){var A=n[di[u]];A.toggle!==n.toggle&&A.enabled&&(kf[u](n),A.enabled=!1,A.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.d8,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d8,0,b.numIndices)}}return wn(t,e.g),r});function Bf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var P=l.textures.get(_);P||(P=_.eV(e),l.textures.set(_,P)),e.bindTexture(e.TEXTURE_2D,P),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Ff(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Vf=y(function(e,r,n){return g$(r,{g:n,f:{},h:e},If,Hf)}),Rf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Ef=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Nf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),jf=v(function(e,r){e.contextAttributes.antialias=!0}),Wf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Gf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function If(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};wn(function(t){return o(W0,r,t)},e.h);var n=$r.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),$f(function(){return o(Dc,e,n)})):(n=$r.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Hf(e,r){return r.f=e.f,Dc(r)}var M=iv,jn=av,Ac=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(jn,e,l,$)}else{var u=c.a;return p(jn,i,l,u)}});return p(jn,i,p(jn,e,r,t),a)}),ro=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ro,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),bi=function(e){return p(ro,y(function(r,n,a){return o(M,k(r,n),a)}),L,e)},Bc=1,Uf=2,Fc=0,ye=function(e){return{$:1,a:e}},no=v(function(e,r){return{$:3,a:e,b:r}}),gi=v(function(e,r){return{$:0,a:e,b:r}}),Vc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Of=function(e){return{$:2,a:e}},Jf=lv,re=function(e){return{$:0,a:e}},Y={$:1},qf=Av,Yf=Qv,Ae=lc,kr=v(function(e,r){return o(Tv,e,ka(r))}),ao=v(function(e,r){return h(o(kv,e,r))}),Rc=function(e){return o(kr,`
    `,o(ao,`
`,e))},Tn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Sr=function(e){return p(Tn,v(function(r,n){return n+1}),0,e)},Zf=cv,Xf=y(function(e,r,n){e:for(;;)if(q(e,r)<1){var a=e,t=r-1,i=o(M,r,n);e=a,r=t,n=i;continue e}else return n}),Mr=v(function(e,r){return p(Xf,e,r,L)}),Ec=v(function(e,r){return p(Zf,e,o(Mr,0,Sr(r)-1),r)}),ar=jv,Nc=function(e){var r=ar(e);return 97<=r&&r<=122},jc=function(e){var r=ar(e);return r<=90&&65<=r},Qf=function(e){return Nc(e)||jc(e)},Kf=function(e){var r=ar(e);return r<=57&&48<=r},es=function(e){return Nc(e)||jc(e)||Kf(e)},ke=function(e){return p(Tn,M,L,e)},Kr=Cv,rs=v(function(e,r){return`

(`+(Ae(e+1)+(") "+Rc(ns(r))))}),ns=function(e){return o(as,e,L)},as=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Kr(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Qf(x)&&o(qf,es,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(M,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,$=o(M,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(kr,"",ke(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(Sr(s))+" ways:"));return o(kr,`

`,o(M,g,o(Ec,rs,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(kr,"",ke(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(kr,"",ke(r))+`:

    `):`Problem with the given value:

`}();return g+(Rc(o(Yf,4,f))+(`

`+m))}}),Be=32,pt=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bt=Qu,to=gv,oo=v(function(e,r){return ai(r)/ai(e)}),ts=pv,yn=to(o(oo,2,Be)),Wc=C(pt,0,yn,bt,bt),Gc=ev,Ic=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var os=hv,gt=Ku,Te=v(function(e,r){return q(e,r)>0?e:r}),is=function(e){return{$:0,a:e}},io=rv,cs=v(function(e,r){e:for(;;){var n=o(io,Be,e),a=n.a,t=n.b,i=o(M,is(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ke(i)}}),ls=function(e){var r=e.a;return r},us=v(function(e,r){e:for(;;){var n=to(r/Be);if(n===1)return o(io,Be,e).a;var a=o(cs,e,L),t=n;e=a,r=t;continue e}}),Hc=v(function(e,r){if(r.l){var n=r.l*Be,a=os(o(oo,Be,n-1)),t=e?ke(r.y):r.y,i=o(us,t,r.l);return C(pt,gt(r.o)+n,o(Te,5,a*yn),i,r.o)}else return C(pt,gt(r.o),yn,bt,r.o)}),vs=be(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Hc,!1,{y:a,l:n/Be|0,o:t});var i=Ic(p(Gc,Be,r,e)),c=e,l=r-Be,u=n,$=o(M,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),$s=v(function(e,r){if(e<=0)return Wc;var n=e%Be,a=p(Gc,n,e-n,r),t=e-n-Be;return S(vs,r,t,e,L,a)}),Ye=function(e){return!e.$},D=qv,Z=Iv,T=Jv,ve=Hv,ua=Yv,fs=Zv,Me=Gv,co=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},H=Ar("div"),ss=function(e){return{$:2,a:e}},Uc=v(function(e,r){return e}),Oc=v(function(e,r){return{eS:r.eS,eT:e,ci:r.ci,dp:r.dp,dE:r.dE,bn:r.bn,b3:r.b3,f2:r.f2}}),fr=function(e){return e},ds=fr,hi=Ue(function(e,r,n,a,t,i){return{dw:i,dy:r,ec:a,eg:n,ej:e,ek:t}}),ms=Bv,Tr=Pv,Ir=Mv,Mn=v(function(e,r){return e<1?r:p(Ir,e,Tr(r),r)}),Ta=Vv,Ma=function(e){return e===""},Da=v(function(e,r){return e<1?"":p(Ir,0,e,r)}),Jc=Rv,_i=be(function(e,r,n,a,t){if(Ma(t)||o(ms,"@",t))return Y;var i=o(Ta,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Jc(o(Mn,c+1,t));if(l.$===1)return Y;var u=l;return re(we(hi,e,o(Da,c,t),u,r,n,a))}else return re(we(hi,e,t,Y,r,n,a))}),wi=F(function(e,r,n,a){if(Ma(a))return Y;var t=o(Ta,"/",a);if(t.b){var i=t.a;return S(_i,e,o(Mn,i,a),r,n,o(Da,i,a))}else return S(_i,e,"/",r,n,a)}),yi=y(function(e,r,n){if(Ma(n))return Y;var a=o(Ta,"?",n);if(a.b){var t=a.a;return C(wi,e,re(o(Mn,t+1,n)),r,o(Da,t,n))}else return C(wi,e,Y,r,n)});v(function(e,r){if(Ma(r))return Y;var n=o(Ta,"#",r);if(n.b){var a=n.a;return p(yi,e,re(o(Mn,a+1,r)),o(Da,a,r))}else return p(yi,e,Y,r)});var ps=Fv,lo=function(e){},Dn=Dr,bs=Dn(0),qc=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(Tn,e,r,ke(d)):C(qc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),br=y(function(e,r,n){return C(qc,e,r,0,n)}),ee=v(function(e,r){return p(br,v(function(n,a){return o(M,e(n),a)}),L,r)}),va=ft,uo=v(function(e,r){return o(va,function(n){return Dn(e(n))},r)}),gs=y(function(e,r,n){return o(va,function(a){return o(va,function(t){return Dn(o(e,a,t))},n)},r)}),hs=function(e){return p(br,gs(M),Dn(L),e)},_s=c$,ws=v(function(e,r){var n=r;return $c(o(va,_s(e),n))}),ys=y(function(e,r,n){return o(uo,function(a){return 0},hs(o(ee,ws(e),r)))}),xs=y(function(e,r,n){return Dn(0)}),Ss=v(function(e,r){var n=r;return o(uo,e,n)});nr.Task=o$(bs,ys,xs,Ss);var Cs=sc("Task"),vo=v(function(e,r){return Cs(o(uo,e,r))}),Ps=j$,Ls=xv,$a={$:1},Yc=function(e){return{$:2,a:e}},Aa={$:0},Ge=v(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),en=function(e){var r=e.b.A;return r.a},zs=function(e){var r=e.a,n=e.b.T,a=e.b.A,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return re(o(Ge,r,{A:i,ac:c,T:o(M,a,n)}))}else return Y},Zc=function(e){var r=e.b;return o(Ge,Aa,r)},Ve=v(function(e,r){if(r.$)return e;var n=r.a;return n}),ks=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bn.$7?Zc(n):n;case 2:var i=a.a.c4;return(q(i+r.dp,en(n).eS)>0?o(te,zs,Ve(o(Ge,$a,t))):fr)(o(Ge,Yc({c4:i+r.dp}),t));default:var c=t.A,l=c.a,u=c.b,$=o(Oc,l.eT,oe(r,{eS:l.eS+r.dp})),s=o(e,$,u);return o(Ge,Aa,{A:k($,s),ac:L,T:o(M,t.A,t.T)})}}),Xc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Ts=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(M,a,n);e=i,r=c,n=l;continue e}else return n}}),Ms=v(function(e,r){return ke(p(Ts,e,r,L))}),Qc=y(function(e,r,n){if(r<=0)return L;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(M,_,o(M,c,o(M,s,o(M,b,o(Ms,r-4,w))))):o(M,_,o(M,c,o(M,s,o(M,b,p(Qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),$o=v(function(e,r){return p(Qc,0,e,r)}),Ds=v(function(e,r){var n=r.b.T,a=r.b.A,t=r.b.ac,i=le(ke(n),le(h([a]),t)),c=o($o,e,i),l=o(Xc,e,i);if(l.b){var u=l.a,$=l.b;return o(Ge,$a,{A:u,ac:$,T:ke(c)})}else{var s=ke(c);if(s.b){var d=s.a,m=s.b;return o(Ge,$a,{A:d,ac:L,T:m})}else return r}}),As=function(e){var r=e.b;return o(Ge,$a,r)},Bs=function(e){var r=e.b;return o(Ge,Yc({c4:en(e).eS}),r)},Fs=v(function(e,r){switch(e.$){case 1:return As(r);case 2:return Zc(r);case 3:return Bs(r);default:var n=e.a;return o(Ds,n,r)}}),Kc=v(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Vs=v(function(e,r){return oe(r,{ax:e(r.ax)})}),Rs=function(e){return{$:3,a:e}},Es=function(e){return{$:2,a:e}},Ns=v(function(e,r){return{$:0,a:e,b:r}}),js=v(function(e,r){return{$:1,a:e,b:r}}),pe=v(function(e,r){if(r.$)return Y;var n=r.a;return re(e(n))}),O=function(e){return e<0?-e:e},fo=Ev,Ws=y(function(e,r,n){return o(Ve,0/0,fo(o(e,r,n)))}),el=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Gs=zv,rl=function(e){return p(Gs,M,L,e)},Is=v(function(e,r){var n=o(el,function(a){return a!=="0"&&a!=="."},rl(r));return le(e&&n?"-":"",r)}),de=lc,ht=Sv,nl=Wv,al=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Kr(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",al(t))}else{var i=ar(r);return i>=48&&i<57?o(ht,nl(i+1),n):"0"}},_t=bv,Hs=yv,Ba=function(e){return o(ht,e,"")},tl=y(function(e,r,n){return e<=0?n:p(tl,e>>1,le(r,r),e&1?le(n,r):n)}),xn=v(function(e,r){return p(tl,e,r,"")}),wt=y(function(e,r,n){return le(n,o(xn,e-Tr(n),Ba(r)))}),yt=Lv,ol=function(e){var r=o(ao,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Us=function(e){var r=o(ao,"e",de(O(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Ve,0,Jc(o(ps,"+",t)?o(Mn,1,t):t)),c=ol(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(Ve,"0",o(pe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(pe,Kc(Ba),Kr(le(o(xn,O(i),"0"),$))))):p(wt,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Os=y(function(e,r,n){if(_t(n)||Hs(n))return de(n);var a=n<0,t=ol(Us(O(n))),i=t.a,c=t.b,l=Tr(i)+r,u=le(o(xn,-l+1,"0"),p(wt,l,"0",le(i,c))),$=Tr(u),s=o(Te,1,l),d=o(e,a,p(Ir,s,$,u)),m=p(Ir,0,s,u),f=d?yt(o(Ve,"1",o(pe,al,Kr(yt(m))))):m,g=Tr(f),b=f==="0"?f:r<=0?le(f,o(xn,O(r),"0")):q(r,Tr(c))<0?p(Ir,0,g-r,f)+("."+p(Ir,g-r,g,f)):le(i+".",p(wt,r,"0",c));return o(Is,a,b)}),il=Os(v(function(e,r){var n=Kr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ar(t))})),Js=Ws(il),qs=y(function(e,r,n){var a=o(oo,10,O(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Js,t,n)}),cl=ov,ll=v(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(cl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=be(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ir={$:-2},qr=be(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(W,0,r,n,S(W,1,$,s,d,m),S(W,1,i,c,l,u))}else return S(W,e,i,c,S(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(W,0,$,s,S(W,1,g,b,w,x),S(W,1,r,n,m,t))}else return S(W,e,r,n,a,t)}),xt=y(function(e,r,n){if(n.$===-2)return S(W,0,e,r,ir,ir);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(cl,e,t);switch(u){case 0:return S(qr,a,t,i,p(xt,e,r,c),l);case 1:return S(W,a,t,r,c,l);default:return S(qr,a,t,i,c,p(xt,e,r,l))}}),Xn=y(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(W,1,t,i,c,l)}else{var u=a;return u}}),Ys=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ul=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(W,0,f,g,S(W,1,n,a,S(W,0,i,c,l,u),b),S(W,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,P=e.e;P.a;var s=P.b,d=P.c,m=P.d,x=P.e;return S(W,1,n,a,S(W,0,i,c,l,u),S(W,0,s,d,m,x))}else return e},xi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(W,0,i,c,S(W,1,u,$,s,d),S(W,1,n,a,m,S(W,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,P=_.d,m=_.e,A=e.e;A.a;var g=A.b,b=A.c,w=A.d,x=A.e;return S(W,1,n,a,S(W,0,i,c,P,m),S(W,0,g,b,w,x))}else return e},Zs=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(W,n,l,u,$,S(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,xi(r)}else break e;else return c.a,c.d,xi(r);else break e;return r}}),Qn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(W,r,n,a,Qn(t),l);var u=ul(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,$,s,d,Qn(m),f)}else return ir}else return S(W,r,n,a,Qn(t),l)}else return ir},mn=v(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(q(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(W,n,a,t,o(mn,e,i),c);var u=ul(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,$,s,d,o(mn,e,m),f)}else return ir}else return S(W,n,a,t,o(mn,e,i),c);else return o(Xs,e,It(Zs,e,r,n,a,t,i,c))}),Xs=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(xr(e,a)){var l=Ys(c);if(l.$===-1){var u=l.b,$=l.c;return S(qr,n,u,$,i,Qn(c))}else return ir}else return S(qr,n,a,t,i,o(mn,e,c))}else return ir}),Qs=v(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(W,1,a,t,i,c)}else{var l=n;return l}}),Wn=y(function(e,r,n){var a=r(o(ll,e,n));if(a.$)return o(Qs,e,n);var t=a.a;return p(Xn,e,t,n)}),Ks=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Wn,r,pe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(js,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Wn,r,pe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Ns,k(i,c),p(qs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Wn,r,pe(function(a){return a.$===3?Rs(n):a}));default:var r=e.a,n=e.b;return o(Wn,r,pe(function(a){return a.$===2?Es(n):a}))}},ed=function(e){return Vs(Ks(e))},rd=v(function(e,r){return o(ee,ed(e),r)}),nd=v(function(e,r){return oe(r,{eT:o(rd,e,r.eT)})}),ad=v(function(e,r){var n=r.a,a=r.b;return o(Ge,n,oe(a,{A:o(Kc,nd(e),a.A)}))}),td=v(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),od=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ge,a,oe(t,{A:o(td,o(e,i.a,r),i)}))}),id=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return oe(a,{aO:!a.aO});case 2:var t=n.a;return oe(a,{G:p(ks,e,t,a.G)});case 3:var i=n.a;return oe(a,{G:o(ad,i,a.G)});case 4:var c=n.a;return oe(a,{G:p(od,r,c,a.G)});default:var l=n.a;return oe(a,{G:o(Fs,l,a.G)})}}),cd=v(function(e,r){return o(Ge,Aa,{A:k(e,r(e)),ac:L,T:L})}),ld=l$,Si=ld(L),fa=Ov,Sn=Uv,ud=s$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f2:e})},o(T,"clock",ve))},o(T,"devicePixelRatio",ve))},o(T,"dt",ve))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Me({eG:d,eU:s,$7:$,e$:u,dF:l,fF:c,eo:i,fO:t,ez:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",fa(Sn)))},o(T,"left",Z))},o(T,"pressedKeys",fa(Sn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Me({$7:$,dB:u,fs:l,fK:c,fL:i,ez:t,f5:a,f9:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ve))},o(T,"y",ve))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Me({fc:n,f3:r})},o(T,"height",ve))},o(T,"width",ve))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Me({eW:r,eX:e})},o(T,"deltaX",ve))},o(T,"deltaY",ve))))),vd=function(e){return{$:4,a:e}},$d={$:0},fd=vc,Oe=v(function(e,r){return o(pc,e,fd(r))}),J=Oe("className"),sd=function(e){var r=e.b.A;return r.b},sa=Oe("id"),dd=h$,da=dd,md=_$,fe=md,pd={$:1},bd=function(e){return{$:3,a:e}},gd=function(e){return{$:5,a:e}},Ci=Ar("a"),so=Ar("button"),hd=kn("d"),vl=dc("http://www.w3.org/2000/svg"),_d=vl("path"),wd=vl("svg"),yd=kn("viewBox"),pn=function(e){return o(wd,h([yd("0 0 100 100"),o(fe,"width","100%"),o(fe,"height","100%")]),h([o(_d,h([hd(e)]),L)]))},Pi=function(e){return o(Oe,"href",y$(e))},Ur={e_:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",e6:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fb:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fD:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fE:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",bn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fH:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fQ:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fZ:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",f$:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gd:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},xd=function(e){return{$:0,a:e}},$l=mc,fl=v(function(e,r){return o($l,e,xd(r))}),mo=function(e){return o(fl,"click",Me(e))},Li=Oe("target"),Sd=Oe("title"),St=v(function(e,r){if(r.$===-2)return ir;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(W,n,a,o(e,a,t),o(St,e,i),o(St,e,c))}),Cd=st,cr=Cd,Pd=function(e){return p(ro,y(function(r,n,a){return o(M,n,a)}),L,e)},Ld=v(function(e,r){return{$:3,a:e,b:r}}),zd=v(function(e,r){return{$:2,a:e,b:r}}),kd=v(function(e,r){return{$:0,a:e,b:r}}),Td=v(function(e,r){return{$:1,a:e,b:r}}),Xe=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Md=C(Xe,0/255,0/255,0/255,1),Dd=vc,Ad=v(function(e,r){return o(pc,e,Dd(r))}),Bd=Ad("checked"),Re=_v,Fd=y(function(e,r,n){return le(o(xn,e-Tr(n),Ba(r)),n)}),Yr=vv,sl=function(e){var r=function(n){return n<10?Ae(n):Ba(nl(87+n))};return e<16?r(e):le(sl(e/16|0),r(o(Yr,16,e)))},Vd=o(te,sl,o(Fd,2,"0")),po=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aK:t,cd:a,ck:n,cV:r}},Rd=function(e){var r=po(e),n=r.cV,a=r.ck,t=r.cd;return o(kr,"",o(M,"#",o(ee,o(te,Re,Vd),h([n*255,a*255,t*255]))))},Ct=Oe("htmlFor"),Pt=v(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),ma=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Ed=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(M,t,n)}),dl=v(function(e,r){return p(br,Ed(e),L,r)}),ml=F(function(e,r,n,a){return{fh:r,fq:e,fy:n,fT:a}}),Nd=U$,jd=Nv,Wd=v(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Gd=H$,Id=function(e){return o(Gd,{eO:!1,ft:!1},e)},pa=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return Y},Hd=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Ud=function(e){return{$:2,a:e}},Od=function(e){return{$:0,a:e}},Jd=function(e){return{$:1,a:e}},Ua=v(function(e,r){return ar(r)-ar(e)}),Oa=y(function(e,r,n){var a=ar(n);return q(ar(e),a)<1&&q(a,ar(r))<1}),qd=v(function(e,r){var n=function(t){return q(t,e)<0?ue(t):ye(Jd(r))},a=p(Oa,"0","9",r)?ue(o(Ua,"0",r)):p(Oa,"a","z",r)?ue(10+o(Ua,"a",r)):p(Oa,"A","Z",r)?ue(10+o(Ua,"A",r)):ye(Od(r));return o(ma,n,a)}),pl=v(function(e,r){var n=Kr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ma,function(c){return o(ma,function(l){return ue(c+l*e)},o(pl,e,i))},o(qd,e,t))}),Yd=v(function(e,r){return 2<=e&&e<=36?o(pl,e,yt(r)):ye(Ud(e))}),Zd=Yd(16),Xd=y(function(e,r,n){return C(Xe,e,r,n,1)}),Qd=F(function(e,r,n,a){return C(Xe,e,r,n,a)}),An=uv,Kd=v(function(e,r){var n=o(An,10,e);return Re(r*n)/n}),em=Dv,rm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=rl(n);if(a.b&&!a.b.b){var t=a.a;return jd(h([t,t]))}else return n};return o(te,em,o(te,function(n){return o(pe,function(a){return p(Nd,1,a,n)},Id(e))},o(te,Pt(pa),o(te,pe(function(n){return n.fT}),o(te,pe(dl(fr)),o(te,Wd("Parsing hex regex failed"),ma(function(n){var a=o(ee,o(te,r,o(te,Zd,Hd(ts))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(C(Qd,t/255,c/255,u/255,o(Kd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Xd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ba=Ar("input"),Lt=Ar("label"),zt=Oe("name"),bl=v(function(e,r){return p(br,T,r,e)}),nm=o(bl,h(["target","checked"]),Z),am=function(e){return o(fl,"change",o(ua,e,nm))},tm=function(e){return k(e,!0)},om=function(e){return{$:1,a:e}},im=v(function(e,r){return o($l,e,om(r))}),cm=o(bl,h(["target","value"]),Sn),bo=function(e){return o(im,"input",o(ua,tm,o(ua,e,cm)))},gl=Oe("max"),hl=Oe("min"),_l=function(e){return o(Oe,"step",e)},ga=Oe("type"),go=Oe("value"),zi=function(e){var r=e.cn,n=e.c9,a=e.cD,t=e.cz,i=e.c2,c=e.cH;return o(H,L,h([o(Lt,h([Ct(r)]),h([o(H,h([J("relative w-full")]),h([o(H,h([J("inline-block")]),h([cr(r)])),o(H,h([J("inline-block float-right")]),h([cr(de(n))]))]))])),o(ba,h([ga("range"),o(fe,"width","100%"),sa(r),zt(r),hl(de(a)),gl(de(t)),go(de(n)),_l(de(i)),bo(o(te,fo,o(te,Ve(42),c)))]),L)]))},lm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),um=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(H,L,h([o(H,h([J("mb-2")]),h([o(Lt,h([Ct(e)]),h([cr(e)]))])),o(ba,h([ga("checkbox"),sa(e),zt(e),am(Ld(e)),Bd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return zi({cn:e,cz:i,cD:t,cH:kd(e),c2:.01*(i-t),c9:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return zi({cn:e,cz:i,cD:t,cH:o(te,Re,Td(e)),c2:1,c9:c});default:var c=r.a;return o(H,L,h([o(H,h([o(fe,"margin-bottom","6px")]),h([o(Lt,h([Ct(e)]),h([cr(e)]))])),o(ba,h([ga("color"),o(fe,"width","100%"),o(fe,"height","26px"),o(fe,"padding","0px"),sa(e),zt(e),bo(function(l){return o(zd,e,o(lm,Md,rm(l)))}),go(Rd(c))]),L)]))}}),vm=function(e){return o(H,h([J("p-4 border-y-[0.5px] border-white20")]),h([o(H,h([J("text-lg pb-2")]),h([cr(e.fu)])),o(H,h([J("pl-2 pr-2")]),Pd(o(St,um,e.ax)))]))},$m=function(e){return o(H,h([J("text-xs text-white60")]),o(ee,vm,e))},fm=function(e){return o(H,h([J("absolute left-[104px] bottom-2 text-sm text-white40")]),h([cr("clock: "+o(il,3,en(e).eS))]))},sm=function(e){e.a;var r=e.b.T;return o(pe,function(n){return Re(60/(en(e).eS-n))},o(pe,o(te,ls,function(n){return n.eS}),pa(o(Xc,59,r))))},dm=function(e){return o(H,h([J("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=sm(e);if(r.$===1)return h([cr("... Fps")]);var n=r.a;return h([cr(Ae(n)+" Fps")])}())},mm=function(e){return{$:0,a:e}},pm=function(e){var r=e.b.T;return Sr(r)},bm=function(e){var r=e.b.T;e.b.A;var n=e.b.ac;return Sr(r)+1+Sr(n)},gm=function(e){return o(ba,h([J("absolute w-full"),ga("range"),hl(Ae(0)),gl(Ae(bm(e)-1)),go(Ae(pm(e))),_l(Ae(1)),bo(o(te,fo,o(te,Ve(42),o(te,Re,mm))))]),L)},ki={$:1},hm={$:3},_m={$:2},wl=function(e){return!e.b},Ti=v(function(e,r){return o(so,h([J("px-2 bg-black40"),J(r),mo(e)]),h([cr("REC")]))}),Mi=v(function(e,r){return o(so,h([J("absolute left-[60px] mx-1 px-1 bg-black40"),mo(r)]),h([o(H,h([J("w-4 h-6 fill-white80")]),h([pn(e)]))]))}),wm=function(e){var r=e.a,n=e.b.ac;return o(H,h([J("py-1")]),h([function(){switch(r.$){case 0:return o(Ti,ki,"text-red-500 font-bold");case 1:return o(Ti,_m,"text-white80 font-bold");default:return o(H,L,L)}}(),function(){switch(r.$){case 0:return o(H,L,L);case 1:return wl(n)?o(H,L,L):o(Mi,Ur.fE,hm);default:return o(Mi,Ur.fD,ki)}}()]))},ym=function(e){return o(H,h([J("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([gm(e),wm(e),dm(e),fm(e)]))},xm=function(e){var r=e.a;return xr(r,Aa)},Sm=v(function(e,r){var n=xm(r.G)?o(H,L,L):o(H,h([J("absolute pointer-events-none w-8 h-8"),o(fe,"left",de(e.bn.f5+.5*e.b3.f3)+"px"),o(fe,"top",de(-e.bn.f9+.5*e.b3.fc)+"px")]),h([o(H,h([J(e.bn.dB?"fill-black80":"fill-white40")]),h([pn(Ur.bn)]))]));return o(H,L,h([n]))}),Cm=v(function(e,r){var n=o(so,h([J(r.aO?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),mo(pd),Sd("Distraction Free Mode")]),h([pn(Ur.gd)])),a=o(H,h([J("absolute w-8 bottom-12")]),h([o(Ci,h([J("fill-twitterBlue40 hover:fill-twitterBlue"),Pi("https://twitter.com/AzizErkalSelman"),Li("_blank")]),h([pn(Ur.fZ)]))])),t=o(H,h([J("absolute w-8 bottom-2")]),h([o(Ci,h([J("fill-githubCat40 hover:fill-githubCat"),Pi("https://github.com/erkal/elm-3d-playground-exploration"),Li("_blank")]),h([pn(Ur.e6)]))]));return r.aO?o(H,h([J("fixed w-10 h-10 p-1")]),h([n])):o(H,L,h([o(H,h([J("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(H,h([J("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(fe,"height",de(e.b3.fc-80)+"px")]),h([o(da,bd,$m(en(r.G).eT))])),o(H,h([J("absolute bottom-0 left-10 h-20"),o(fe,"width",e.b3.f3>600?"600px":de(e.b3.f3-40)+"px")]),h([o(da,gd,ym(r.G))])),o(Sm,e,r)]))}),Pm=y(function(e,r,n){var a=sd(n.G),t=en(n.G);return o(H,h([J("bg-black40"),J("select-none"),J("antialiased"),J("font-mono"),o(fe,"width",de(t.b3.f3)+"px"),o(fe,"height",de(t.b3.fc)+"px")]),h([o(H,h([J("fixed")]),h([o(da,Uc($d),o(e,t,a))])),o(H,h([sa("gui")]),h([o(Cm,t,n),o(da,vd,o(r,t,a))]))]))}),Lm=Ue(function(e,r,n,a,t,i){var c=v(function(u,$){return k(C(id,r,i,u,$),Si)}),l=function(u){var $=o(Oc,n,u.fj);return k({aO:u.fj.b3.f3<500,G:o(cd,$,a)},Si)};return Ps({fi:l,fU:Uc(ud(ss)),f_:c,f1:o(Pm,e,t)})}),zm=F(function(e,r,n,a){return we(Lm,e,r,n,a,v(function(t,i){return o(H,L,L)}),y(function(t,i,c){return c}))}),km=y(function(e,r,n){return C(zm,e,r,L,n)}),Tm=C(Xe,85/255,87/255,83/255,1),Mm=C(Xe,32/255,74/255,135/255,1),Dm=C(Xe,211/255,215/255,207/255,1),Fa=function(e){return{$:0,a:e}},Am=y(function(e,r,n){e:for(;;){var a=o(io,Be,e),t=a.a,i=a.b;if(q(gt(t),Be)<0)return o(Hc,!0,{y:r,l:n,o:t});var c=i,l=o(M,Ic(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Va=function(e){return e.b?p(Am,e,L,0):Wc},Bm=v(function(e,r){return{dv:e,am:L,C:0,cY:Va(r),aE:Fa({a$:0,a2:0})}}),Fm=C(Xe,114/255,159/255,207/255,1),Vm=C(Xe,233/255,185/255,110/255,1),Rm=C(Xe,245/255,121/255,0/255,1),Em=C(Xe,117/255,80/255,123/255,1),Nm=function(e){return o(Bm,Vm,h([Em,Tm,Mm,Fm,Dm,Rm]))},Fe={V:.35,bk:6},Ra=v(function(e,r){return e*Re(r/e)}),jm=function(e){var r=e;return oe(r,{aE:Fa({a$:.2*-Fe.bk,a2:o(Ra,Fe.V,r.C-Fe.V)})})},Wm=function(e){var r=e;return oe(r,{aE:Fa({a$:.2*Fe.bk,a2:o(Ra,Fe.V,r.C+Fe.V)})})},Gm=function(e){var r=e.dE;return r.dF?Wm:r.eo?jm:fr},Im=mv,gr=wv,Hm=v(function(e,r){var n=e,a=r,t=a.de-n.de,i=a.f9-n.f9,c=a.f5-n.f5,l=o(Te,O(c),o(Te,O(i),O(t)));if(l){var u=t/l,$=i/l,s=c/l,d=gr(s*s+$*$+u*u);return re({f5:s/d,f9:$/d,de:u/d})}else return Y}),Ja=function(e){return e},ho=v(function(e,r){var n=e,a=r;return{f5:a.f9*n.de-a.de*n.f9,f9:a.de*n.f5-a.f5*n.de,de:a.f5*n.f9-a.f9*n.f5}}),bn=function(e){var r=e,n=o(Te,O(r.f5),o(Te,O(r.f9),O(r.de)));if(n){var a=r.de/n,t=r.f9/n,i=r.f5/n,c=gr(i*i+t*t+a*a);return re({f5:i/c,f9:t/c,de:a/c})}else return Y},ha=v(function(e,r){var n=e,a=r;return{f5:a.f5-n.f5,f9:a.f9-n.f9,de:a.de-n.de}}),Um=v(function(e,r){var n=e,a=r;return a.f5*n.f5+a.f9*n.f9+a.de*n.de}),yl=v(function(e,r){var n=e,a=r;return q(a,n)>0}),Om=v(function(e,r){var n=e,a=r;return q(a,n)<0}),Jm=v(function(e,r){var n=e,a=r;return{f5:a.f5-n.f5,f9:a.f9-n.f9,de:a.de-n.de}}),qm=v(function(e,r){var n=e,a=r,t=a.f5*n.f5+a.f9*n.f9+a.de*n.de;return{f5:n.f5*t,f9:n.f9*t,de:n.de*t}}),Ym=function(e){var r=e;return{f5:-r.f5,f9:-r.f9,de:-r.de}},We=0,xl={f5:0,f9:0,de:0},Zm=y(function(e,r,n){return o(Pt,function(a){var t=o(Jm,o(qm,a,r),r);return o(Pt,function(i){var c=o(ho,r,e),l=o(Um,n,c),u=o(yl,We,l)?c:o(Om,We,l)?Ym(c):xl;return o(pe,function($){return B(a,i,$)},bn(u))},bn(t))},bn(e))}),Xm=function(e){var r=e,n=O(r.de),a=O(r.f9),t=O(r.f5);if(q(t,a)<1)if(q(t,n)<1){var i=gr(r.de*r.de+r.f9*r.f9);return{f5:0,f9:-r.de/i,de:r.f9/i}}else{var i=gr(r.f9*r.f9+r.f5*r.f5);return{f5:-r.f9/i,f9:r.f5/i,de:0}}else if(q(a,n)<1){var i=gr(r.de*r.de+r.f5*r.f5);return{f5:r.de/i,f9:0,de:-r.f5/i}}else{var i=gr(r.f5*r.f5+r.f9*r.f9);return{f5:-r.f9/i,f9:r.f5/i,de:0}}},_o=function(e){var r=Xm(e),n=r,a=n,t=e,i=t,c={f5:i.f9*a.de-i.de*a.f9,f9:i.de*a.f5-i.f5*a.de,de:i.f5*a.f9-i.f9*a.f5};return k(r,c)},Hr=function(e){var r=e;return r},lr=function(e){return e},Qm=v(function(e,r){var n=_o(e),a=n.a,t=n.b;return lr({cI:r,dc:a,dd:t,df:e})}),Km=function(e){var r=o(ha,e.aU,e.du),n=Hr(e.eA),a=o(ho,r,n),t=p(Zm,r,n,a);if(t.$){var $=bn(r);if($.$){var d=_o(e.eA),m=d.a,f=d.b;return lr({cI:e.du,dc:f,dd:e.eA,df:m})}else{var s=$.a;return o(Qm,s,e.du)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return lr({cI:e.du,dc:u,dd:l,df:c})}},er={f5:0,f9:0,de:0},ep=function(e){return{$:0,a:e}},ie=function(e){var r=e;return O(r)},Kn=function(e){var r=e;return .5*r},rp=dv,np=function(e){var r=e;return rp(r)},ap=function(e){var r=Kn(ie(e.eB)),n=np(r);return{cU:ep(n),da:e.da}},sr=function(e){return e},wo=sr({f5:0,f9:1,de:0}),Cn=function(e){return e},tp=function(e){var r=e.aU,n=e.du,a=e.eA;return ap({eB:Cn(2*Im(.5)),da:Km({du:Ja(n),aU:Ja(r),eA:o(Ve,wo,o(Hm,er,Ja(a)))})})},Sl=tp({du:{f5:0,f9:-.2,de:1},aU:{f5:0,f9:0,de:0},eA:{f5:0,f9:1,de:0}}),tr=function(e){return e},op=y(function(e,r,n){return{f5:e,f9:r,de:n}}),Zr=$v,fn=function(e){return Cn(Zr*(e/180))},Gn=function(e){return e},ea=function(e){var r=e;return r},ip=v(function(e,r){var n=e,a=r;return a.f5*n.f5+a.f9*n.f9+a.de*n.de}),yo=function(e){var r=e;return r.eZ},X=v(function(e,r){var n=r;return e*n}),xo=function(e){var r=e;return r.cI},cp=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.fw,l=c;return(a.f5-i.f5)*l.f5+(a.f9-i.f9)*l.f9+(a.de-i.de)*l.de}),lp=y(function(e,r,n){var a=e,t=r,i=n;return{f5:i.f5+t*a.f5,f9:i.f9+t*a.f9,de:i.de+t*a.de}}),up=v(function(e,r){var n=yo(r),a=e,t=a.fw,i=o(ip,t,n);if(i){var c=xo(r),l=o(cp,e,c),u=o(X,-1/i,l);return re(p(lp,n,u,c))}else return Y}),vp=v(function(e,r){return{f5:e,f9:r}}),Di=v(function(e,r){var n=e,a=r;return n*a}),$p=function(e){var r=e;return r},Ai=function(e){var r=e;return $p(r.eJ)},fp=function(e){var r=e;return r.aN},Cl=v(function(e,r){var n=r;return n/e}),rn=function(e){var r=e;return r.cI},kt=function(e){var r=e;return rn(r)},Tt=function(e){var r=e;return-r},So=sr({f5:0,f9:0,de:-1}),sp=v(function(e,r){var n=e,a=r;return a/n}),dp=v(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,$=u;return{f5:$.f5*a.f5+l.f5*a.f9+i.f5*a.de,f9:$.f9*a.f5+l.f9*a.f9+i.f9*a.de,de:$.de*a.f5+l.de*a.f9+i.de*a.de}}),_a=v(function(e,r){return{eZ:r,cI:e}}),dr=function(e){var r=e;return{f5:-r.f5,f9:-r.f9,de:-r.de}},Br=function(e){var r=e;return r.df},Mt=function(e){var r=e;return dr(Br(r))},mp=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dc,l=c;return(a.f5-i.f5)*l.f5+(a.f9-i.f9)*l.f9}),Co=y(function(e,r,n){var a=e,t=r,i=n;return{f5:a,f9:t,de:i}}),pp=F(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cI,$=u,s=t.df,d=s,m=t.dd,f=m,g=t.dc,b=g;return{f5:$.f5+i*b.f5+c*f.f5+l*d.f5,f9:$.f9+i*b.f9+c*f.f9+l*d.f9,de:$.de+i*b.de+c*f.de+l*d.de}}),bp=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dd,l=c;return(a.f5-i.f5)*l.f5+(a.f9-i.f9)*l.f9}),gp=y(function(e,r,n){var a=e,t=o(bp,Ai(r),n),i=o(mp,Ai(r),n),c=a.da,l=c,u=fp(r);u.a;var $=u.b,s=a.cU;if(s.$){var g=s.a,b=o(sp,$,g),w=C(pp,l,o(Di,b,i),o(Di,b,t),We);return o(_a,w,Mt(a.da))}else{var d=s.a,m=Tt(o(Cl,d,o(X,.5,$))),f=o(dp,l,o(Ve,So,bn(p(Co,i,t,m))));return o(_a,kt(a.da),f)}}),wa=fv,ya=sv,Dt=function(e){var r=e;return{f5:wa(r),f9:ya(r)}},hp=function(e){var r=e;return{f5:-r.f9,f9:r.f5}},_p=function(e){return e},wp=v(function(e,r){return _p({cI:r,dc:e,dd:hp(e)})}),yp=v(function(e,r){return o(wp,Dt(e),r)}),xp=y(function(e,r,n){var a=e.a,t=e.b;return{eJ:o(yp,r,n),aN:k(ie(a),ie(t))}}),_r=function(e){var r=e;return r.f5},Sp=v(function(e,r){var n=e,a=r;return{f5:n,f9:a}}),wr=function(e){var r=e;return r.f9},yr=function(e){var r=e;return r.de},Cp=F(function(e,r,n,a){var t=n.f5,i=n.f9,c=function($){return p(op,ea(_r($)),ea(wr($)),ea(yr($)))},l=p(xp,k(Gn(r.f3),Gn(r.fc)),fn(0),o(vp,0,0)),u=o(Sp,Gn(t),Gn(i));return o(pe,c,o(up,a,p(gp,e,l,u)))}),nn=v(function(e,r){var n=e,a=r;return{f5:a.f5+n.f5,f9:a.f9+n.f9,de:a.de+n.de}}),Pp=v(function(e,r){return{fw:e,cI:r}}),Lp=v(function(e,r){var n=r;return o(Pp,n.fw,o(nn,e,n.cI))}),zp=v(function(e,r){return{fw:r,cI:e}}),Po=sr({f5:0,f9:0,de:1}),Lo=Po,kp=o(zp,er,Lo),Tp=F(function(e,r,n,a){return C(Cp,r,n,a,o(Lp,p(Co,tr(0),tr(0),tr(e)),kp))}),Mp=Tp(0),Bi=v(function(e,r){return e?r:fr}),Dp=y(function(e,r,n){var a=e.bn,t=r.ef,i=r.el,c=n;return oe(c,{C:i-(t-a.f5)})}),Ap=F(function(e,r,n,a){var t=a;return q(O(r-t.C),.5*Fe.V)<0?oe(t,{C:t.C+.1*(r-t.C)}):oe(t,{C:t.C+e*n})}),Bp=function(e){var r=e;return oe(r,{am:L})},Fp=function(e){return{$:1,a:e}},Vp=v(function(e,r){var n=r;return oe(n,{aE:Fp({ef:e.bn.f5,el:n.C})})}),zo=y(function(e,r,n){return q(n,e)<0?e:q(n,r)>0?r:n}),Rp=function(e){return p(Tn,Jf,0,e)},Ep=function(e){var r=e,n=Rp(o($o,Sr(r.am)-1,o(ee,function(u){return u.dn},r.am))),a=k(o(Ve,0,o(pe,function(u){return u.cS},pa(r.am))),o(Ve,0,o(pe,function(u){return u.cS},pa(ke(r.am))))),t=a.a,i=a.b,c=t-i,l=n?c/n:0;return oe(r,{aE:Fa({a$:p(zo,-Fe.bk,Fe.bk,l),a2:o(Ra,Fe.V,r.C+.3*l)})})},Np=v(function(e,r){var n=e.dp,a=e.bn,t=r;return oe(t,{am:o($o,6,o(M,{dn:n,cS:a.f5},t.am))})}),jp=v(function(e,r){var n=r,a=n.aE;if(a.$===1){var t=a.a;return p(Bi,!e.bn.dB,Ep,p(Dp,e,t,o(Np,e,n)))}else{var i=a.a.a2,c=a.a.a$;return C(Ap,e.dp,i,c,p(Bi,e.bn.dB,Vp(e),Bp(n)))}}),Wp=v(function(e,r){var n=e.bn,a=o(Ve,{f5:0,f9:0,de:0},p(Mp,Sl,e.b3,n)),t=a.f5,i=a.f9,c=oe(e,{bn:oe(n,{f5:t,f9:i})});return o(jp,c,r)}),Gp=v(function(e,r){return e.bn,o(Wp,e,o(Gm,e,r))}),Fi=function(e){return e*Zr/180},ko=v(function(e,r){return{$:0,a:e,b:r}}),qa=v(function(e,r){var n=e,a=r;return q(a,n)>-1}),Ya=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),mr=v(function(e,r){var n=e,a=r;return a-n}),Ip=sr({f5:-1,f9:0,de:0}),Hp=sr({f5:0,f9:-1,de:0}),Pl=sr({f5:1,f9:0,de:0}),se=y(function(e,r,n){var a=e,t=r,i=n;return{f5:a,f9:t,de:i}}),Up=Ue(function(e,r,n,a,t,i){var c=o(qa,n,i)?Po:So,l=o(qa,r,t)?wo:Hp,u=o(qa,e,a)?Pl:Ip,$=B(ie(o(mr,e,a)),ie(o(mr,r,t)),ie(o(mr,n,i))),s=p(se,o(Ya,e,a),o(Ya,r,t),o(Ya,n,i)),d=lr({cI:s,dc:u,dd:l,df:c});return{eJ:d,aN:$}}),Op=v(function(e,r){return we(Up,_r(e),wr(e),yr(e),_r(r),wr(r),yr(r))}),At=y(function(e,r,n){return{f5:e,f9:r,de:n}}),Jp=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(ko,e,o(Op,p(At,-c,-l,-u),p(At,c,l,u)))}),Bt=function(e){return{$:0,a:e}},Ll=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Za=function(e){return p(zo,0,1,e<=.04045?e/12.92:o(An,(e+.055)/1.055,2.4))},Bn=q$,qp=function(e){var r=po(e),n=r.cV,a=r.ck,t=r.cd;return p(Bn,Za(n),Za(a),Za(t))},Yp=function(e){return p(Ll,0,Bt(qp(e)),Bt(0))},Zp=v(function(e,r){return o(Jp,Yp(r),B(.2,.3,.3))}),Ft=4294967295>>>32-yn,Vt=nv,Xp=y(function(e,r,n){e:for(;;){var a=Ft&r>>>e,t=o(Vt,a,n);if(t.$){var $=t.a;return o(Vt,Ft&r,$)}else{var i=t.a,c=e-yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Qp=function(e){return e>>>5<<5},zl=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||q(e,n)>-1?Y:q(e,Qp(n))>-1?re(o(Vt,Ft&e,i)):re(p(Xp,a,e,t))}),kl=function(e){var r=e.a;return r},Tl=function(e){var r=e;return kl(r.cY)+1},Ml=v(function(e,r){var n=r,a=o(Yr,Tl(n),e);return{di:o(Ve,n.dv,o(zl,a-1,n.cY)),fh:a,fx:n.C-o(Ra,Fe.V,n.C)}}),Kp=function(e){var r=e;return o(Yr,Tl(r),Re(-r.C/Fe.V))},e0=function(e){var r=e;return o(Ml,Kp(r),r)},To=function(e){return{$:5,a:e}},r0=function(e){return To(e)},Dl=v(function(e,r){return{$:2,a:e,b:r}}),Al=v(function(e,r){return{$:4,a:e,b:r}}),Bl=v(function(e,r){return{$:3,a:e,b:r}}),Fl=v(function(e,r){return{$:1,a:e,b:r}}),n0=y(function(e,r,n){return{f5:e,f9:r,de:n}}),a0=function(e){var r=e;return r},Mo=function(e){var r=e;return a0(r.eJ)},Do=function(e){var r=e;return r.aN},Fr=function(e){var r=e;return r.dc},Vr=function(e){var r=e;return r.dd},t0=v(function(e,r){return lr({cI:o(nn,e,rn(r)),dc:Fr(r),dd:Vr(r),df:Br(r)})}),o0=v(function(e,r){return{eJ:o(t0,e,Mo(r)),aN:Do(r)}}),i0=v(function(e,r){var n=r;return o(_a,o(nn,e,n.cI),n.eZ)}),c0=v(function(e,r){var n=r;return{k:o(i0,e,n.k),fo:n.fo,fG:n.fG}}),Ao=function(e){var r=e;return r},l0=function(e){return e},Vl=v(function(e,r){var n=Ao(r),a=n.a,t=n.b;return l0(k(e(a),e(t)))}),u0=v(function(e,r){return o(Vl,nn(e),r)}),Bo=function(e){var r=e;return r.eQ},Fo=function(e){var r=e;return r.fG},Rl=v(function(e,r){return{eQ:r,fG:ie(e)}}),v0=v(function(e,r){return o(Rl,Fo(r),o(nn,e,Bo(r)))}),El=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),$0=v(function(e,r){return o(El,nn(e),r)}),Vo=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(n0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(ko,s,o(o0,i,c));case 1:var s=r.a,l=r.b;return o(Fl,s,o($0,i,l));case 3:var s=r.a,u=r.b;return o(Bl,s,o(v0,i,u));case 2:var s=r.a,$=r.b;return o(Dl,s,o(c0,i,$));case 4:var s=r.a,d=r.b;return o(Al,s,o(u0,i,d));default:var m=r.a;return To(o(ee,Vo(B(n,a,t)),m))}}),f0=function(e){return Vo(B(e,0,0))},s0=function(e){return Vo(B(0,e,0))},Fn=y(function(e,r,n){var a=e,t=n;return{f5:a.f5+r*(t.f5-a.f5),f9:a.f9+r*(t.f9-a.f9),de:a.de+r*(t.de-a.de)}}),d0=y(function(e,r,n){var a=Mo(n),t=Fr(a),i=Vr(a),c=Br(a),l=p(Fn,e,r,rn(a)),u=r>=0?lr({cI:l,dc:t,dd:i,df:c}):lr({cI:l,dc:dr(t),dd:dr(i),df:dr(c)}),$=Do(n),s=$.a,d=$.b,m=$.c,f=ie(o(X,r,s)),g=ie(o(X,r,d)),b=ie(o(X,r,m));return{eJ:u,aN:B(f,g,b)}}),Ro=function(e){var r=e;return r.k},Vi=function(e){return yo(Ro(e))},m0=function(e){return xo(Ro(e))},Nl=function(e){var r=e;return r.fo},jl=function(e){var r=e;return r.fG},p0=y(function(e,r,n){var a=ie(o(X,r,jl(n))),t=ie(o(X,r,Nl(n))),i=r>=0?Vi(n):dr(Vi(n)),c=p(Fn,e,r,m0(n));return{k:o(_a,c,i),fo:t,fG:a}}),b0=y(function(e,r,n){return o(Vl,o(Fn,e,r),n)}),g0=y(function(e,r,n){return o(Rl,o(X,O(r),Fo(n)),p(Fn,e,r,Bo(n)))}),h0=y(function(e,r,n){return o(El,o(Fn,e,r),n)}),Wl=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(ko,c,p(d0,er,e,n));case 1:var c=r.a,a=r.b;return o(Fl,c,p(h0,er,e,a));case 3:var c=r.a,t=r.b;return o(Bl,c,p(g0,er,e,t));case 2:var c=r.a,i=r.b;return o(Dl,c,p(p0,er,e,i));case 4:var c=r.a,l=r.b;return o(Al,c,p(b0,er,e,l));default:var u=r.a;return To(o(ee,Wl(e),u))}}),_0=v(function(e,r){var n=e0(r),a=n.fx,t=n.fh,i=function(l){return a+(l-t)*Fe.V},c=function(l){return o(f0,i(l),o(s0,-(.1*O(i(l))),o(Wl,1-.7*O(i(l)),o(Zp,e,o(Ml,l,r).di))))};return r0(o(ee,c,o(Mr,t-3,t+3)))}),Xa=function(e){return e/255},w0=y(function(e,r,n){return C(Xe,Xa(e),Xa(r),Xa(n),1)}),y0=function(e){return e},x0=function(e){return tr(.01*e)},Ri=function(e){return e},S0=function(e){return e},C0=function(e){return{$:0,a:e}},P0=C0,L0={$:3},z0=L0,k0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),T0=k0,M0=v(function(e,r){return r.b?p(br,M,r,e):e}),Ie=function(e){return p(br,M0,L,e)},Eo=v(function(e,r){return Ie(o(ee,e,r))}),D0=function(e){return{$:1,a:e}},A0=D0,B0=function(e){return o(kn,"height",Ae(e))},F0=function(e){return b$(w$(e))},V0=F0,R0=function(e){return{$:2,a:e}},E0=R0,N0=function(e){return o(kr,"",e)},j0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Re(l*1e3)/1e3},c=function(l){return Re(l*1e4)/100};return N0(h(["rgba(",de(c(r)),"%,",de(c(n)),"%,",de(c(a)),"%,",de(i(t)),")"]))},W0=v(function(e,r){switch(r.$){case 0:return o(Rf,e,r);case 1:return o(Ef,e,r);case 2:return o(Nf,e,r);case 3:return o(jf,e,r);case 4:return o(Wf,e,r);default:return o(Gf,e,r)}}),G0=v(function(e,r){switch(r.$){case 0:return o(sf,e,r);case 1:return o(df,e,r);case 2:return o(mf,e,r);case 3:return o(pf,e,r);case 4:return o(bf,e,r);case 5:return o(gf,e,r);case 6:return o(hf,e,r);case 7:return o(_f,e,r);default:return wf(e)}}),I0=y(function(e,r,n){return p(Vf,e,r,n)}),Ei=function(e){var r=e;return r},an=ef,Qa=C(an,1,1,1,1),Qe=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),H0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),U0=v(function(e,r){var n=e,a=r.f5,t=r.f9;return p(H0,n*a/t,n,n*(1-a-t)/t)}),O0=function(e){var r=e.a,n=e.b,a=e.c;return p(Bn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},No=v(function(e,r){return O0(o(U0,e,r))}),Gl=v(function(e,r){return{dC:xr(e.dC,r.dC),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,H:r.H+(e.H*r.p+e.I*r.s+e.J*r.v)*r.b2,I:r.I+(e.H*r.q+e.I*r.t+e.J*r.w)*r.b2,J:r.J+(e.H*r.r+e.I*r.u+e.J*r.x)*r.b2,b2:e.b2*r.b2}}),rr=cf,J0=function(e){return rr({dM:e.p,dN:e.s,dO:e.v,dP:e.H,dQ:e.q,dR:e.t,dS:e.w,dT:e.I,dU:e.r,dV:e.u,dW:e.x,dX:e.J,dY:0,dZ:0,d_:0,d$:1})},Ka=be(function(e,r,n,a,t){var i=a.dC?1:-1,c=C(an,a.b2,a.b2,a.b2,i);return we(t,e,c,J0(a),a.dC,r,n)}),Il=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Gl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(M,S(Ka,e,r,n,a,g),i.M);return{M:b,U:i.U,fN:i.fN};case 3:var w=t.b,x=o(M,S(Ka,e,r,n,a,w),i.U);return{M:i.M,U:x,fN:i.fN};case 2:var _=t.a,P=o(M,S(Ka,e,r,n,a,_),i.fN);return{M:i.M,U:i.U,fN:P};default:var A=t.a;return p(Tn,C(Il,e,r,n,a),i,A)}}),q0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Hl=q0,jo=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Y0=function(e){var r=e._,n=e.X,a=e.W;return C(jo,518,r,n,a)},Z0=v(function(e,r){return{$:6,a:e,b:r}}),X0=Z0,Ul=h([Y0({W:1,X:0,_:!1}),C(Hl,!1,!1,!1,!1),o(X0,0,1)]),Xr=519,Wo=8,Ol=15,Or=7681,Q0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=ff,K0=v(function(e,r){return{$:0,a:e,b:r}}),e3=K0({dq:1,dA:0,d8:5}),De=O$,r3=e3(h([{b_:o(De,-1,-1)},{b_:o(De,1,-1)},{b_:o(De,-1,1)},{b_:o(De,1,1)}])),n3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"b_"},uniforms:{}},a3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Go=y(function(e,r,n){var a=e.cW,t=e.cw,i=e.db,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(te,c($.bs),o(te,l($.bd),o(te,l($.bA),l($.bB))))};return o(u,n,o(u,r,p(a3,a,t,i)))}),Io=function(e){return p(Go,{cw:e.cw,cW:e.cW,db:e.db},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB})},Ho=function(e){return S(ne,h([Io(e),C(Hl,!1,!1,!1,!1)]),n3,Q0,r3,{})},t3=Ho({bd:Or,cw:0,cW:Wo,bs:Xr,db:Ol,bA:Or,bB:Or}),o3=516,Ni=5386,xe=7680,i3=function(e){return o(An,2,e+4)},Jl=function(e){return Ho({bd:xe,cw:Ol,cW:Wo,bs:o3,db:i3(e),bA:Ni,bB:Ni})},c3=y(function(e,r,n){return Ie(h([p(Qe,e,n,Ul),h([Jl(r),t3])]))}),l3=v(function(e,r){return Ie(o(Ec,c3(e),r))}),u3=function(e){var r=e._,n=e.X,a=e.W;return C(jo,513,r,n,a)},v3=u3({W:1,X:0,_:!0}),$3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},f3=function(e){var r=e.b0,n=e.bM,a=e.bF,t=e.bC,i=e.bH,c=e.aK,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return $3(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},s3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ji=v(function(e,r){var n=e,a=r;return p(s3,32774,n,a)}),d3=1,Wi=771,m3=770,Uo=f3({bC:0,aK:o(ji,d3,Wi),bF:0,bH:o(ji,m3,Wi),bM:0,b0:0}),Nr=h([v3,Uo]),p3=function(e){var r=e;return r.d1},b3=function(e){var r=e;return r.d2},ql=function(e){var r=e;return r.d3},g3=function(e){var r=e;return r.d4},h3=function(e){var r=e;return r.d5},Yl=function(e){var r=e;return r.d6},Zl=function(e){return B(o(mr,g3(e),p3(e)),o(mr,h3(e),b3(e)),o(mr,Yl(e),ql(e)))},_3=function(e){return e},w3=function(e){return lr({cI:_3({f5:e.H,f9:e.I,de:e.J}),dc:sr({f5:e.p,f9:e.q,de:e.r}),dd:sr({f5:e.s,f9:e.t,de:e.u}),df:sr({f5:e.v,f9:e.w,de:e.x})})},et=v(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,$=u;return{f5:a.f5*$.f5+a.f9*$.f9+a.de*$.de,f9:a.f5*l.f5+a.f9*l.f9+a.de*l.de,de:a.f5*i.f5+a.f9*i.f9+a.de*i.de}}),Xl=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=a.f5-i.f5,l=a.f9-i.f9,u=a.de-i.de,$=n.df,s=$,d=n.dd,m=d,f=n.dc,g=f;return{f5:c*g.f5+l*g.f9+u*g.de,f9:c*m.f5+l*m.f9+u*m.de,de:c*s.f5+l*s.f9+u*s.de}}),Ql=v(function(e,r){return{cI:o(Xl,e,rn(r)),dc:o(et,e,Fr(r)),dd:o(et,e,Vr(r)),df:o(et,e,Br(r))}}),xa=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(Te,n,a)}),ra=v(function(e,r){return q(e,r)<0?e:r}),$e=v(function(e,r){var n=e,a=r;return o(ra,n,a)}),y3=v(function(e,r){var n=xa(r),a=xa(e);return{d1:o(ce,a.d1,n.d1),d2:o(ce,a.d2,n.d2),d3:o(ce,a.d3,n.d3),d4:o($e,a.d4,n.d4),d5:o($e,a.d5,n.d5),d6:o($e,a.d6,n.d6)}}),He=function(e){var r=e;return r},x3=function(e){var r=e;return B(r.f5,r.f9,r.de)},gn=v(function(e,r){var n=e,a=r;return a+n}),S3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=Kn(ie(a)),c=Kn(ie(n)),l=Kn(ie(t)),u=x3(r),$=u.a,s=u.b,d=u.c;return{d1:o(gn,c,$),d2:o(gn,i,s),d3:o(gn,l,d),d4:o(mr,c,$),d5:o(mr,i,s),d6:o(mr,l,d)}}),Gi=F(function(e,r,n,a){var t=n.eQ,i=2*n.fa*r,c=2*n.e9*r,l=2*n.e8*r,u=t.de*r,$=t.f9*r,s=t.f5*r,d=He(Br(e)),m=O(l*d.f5)+O(c*d.f9)+O(i*d.de),f=He(Vr(e)),g=O(l*f.f5)+O(c*f.f9)+O(i*f.de),b=He(Fr(e)),w=O(l*b.f5)+O(c*b.f9)+O(i*b.de),x=o(S3,B(w,g,m),o(Xl,e,p(At,s,$,u)));if(a.$)return re(x);var _=a.a;return re(o(y3,_,x))}),Rt=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Gi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Gi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Rt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(Ql,w3($),e),m=r*$.b2,f=e,g=r,b=C(Rt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),tn=Y$,on=Z$,cn=X$,Kl=function(e){return{$:4,a:e}},C3=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(M,n,r);e=t,r=i;continue e}else return r}),Vn=function(e){return Kl(o(C3,e,L))},P3={dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:0,I:0,J:0,b2:1},Ii=Ho({bd:Or,cw:0,cW:Wo,bs:Xr,db:255,bA:Or,bB:Or}),L3=function(e){var r=e,n=o(Te,O(r.f5),o(Te,O(r.f9),O(r.de)));if(n){var a=r.de/n,t=r.f9/n,i=r.f5/n,c=gr(i*i+t*t+a*a);return c*n}else return We},Pe={bF:0,eP:!1,bM:0,cR:0,b0:0,c6:0,f5:0,f9:0,de:0},Ne=v(function(e,r){var n=e,a=r;return rr({dM:n.f5,dN:n.b0,dO:a.f5,dP:a.b0,dQ:n.f9,dR:n.bM,dS:a.f9,dT:a.bM,dU:n.de,dV:n.bF,dW:a.de,dX:a.bF,dY:n.c6,dZ:n.cR,d_:a.c6,d$:a.cR})}),sn=k({bi:o(Ne,Pe,Pe),bR:o(Ne,Pe,Pe),bS:o(Ne,Pe,Pe),bT:o(Ne,Pe,Pe)},C(an,0,0,0,0)),eu=514,ru=function(e){var r=e._,n=e.X,a=e.W;return C(jo,515,r,n,a)},nu=240,z3=h([ru({W:1,X:0,_:!0}),Io({bd:xe,cw:nu,cW:0,bs:eu,db:0,bA:xe,bB:xe}),Uo]),k3=v(function(e,r){var n=e,a=r.fv,t=r.e5,i=r.eI,c=ie(a),l=c,u=ie(t),$=u,s=n.cU;if(s.$){var m=s.a;return _t($)?rr({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:0,dX:-1,dY:0,dZ:0,d_:0,d$:1}):rr({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:-2/($-l),dX:-($+l)/($-l),dY:0,dZ:0,d_:0,d$:1})}else{var d=s.a;return _t($)?rr({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-1,dX:-2*l,dY:0,dZ:0,d_:-1,d$:0}):rr({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-($+l)/($-l),dX:-2*$*l/($-l),dY:0,dZ:0,d_:-1,d$:0})}}),In=v(function(e,r){return(1&e>>r)===1?0:1}),T3=function(e){return h([ru({W:1,X:0,_:!0}),Io({bd:xe,cw:nu,cW:e,bs:eu,db:0,bA:xe,bB:xe}),Uo])},M3=y(function(e,r,n){return Ie(o(ee,function(a){var t=a<<4,i=C(an,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(Qe,e,k(r,i),T3(t))},o(Mr,1,o(An,2,n)-1)))}),Jr=function(e){var r=e;return r},D3=lf,au=Pl,tu=wo,A3={cI:er,dc:au,dd:tu,df:Lo},Ea=function(e){var r=e;return r},B3=function(e){var r=Ea(rn(e)),n=He(Br(e)),a=He(Vr(e)),t=He(Fr(e));return rr({dM:t.f5,dN:a.f5,dO:n.f5,dP:r.f5,dQ:t.f9,dR:a.f9,dS:n.f9,dT:r.f9,dU:t.de,dV:a.de,dW:n.de,dX:r.de,dY:0,dZ:0,d_:0,d$:1})},F3=v(function(e,r){var n=r;return B3(o(Ql,n,e))}),V3=function(e){return o(F3,A3,e)},R3=function(e){var r=e;return r.da},E3=function(e){var r=e;return Fr(r)},N3=function(e){var r=e;return Vr(r)},j3=function(e){var r=R3(e.eN),n=lr({cI:kt(r),dc:E3(r),dd:N3(r),df:dr(Mt(r))}),a=Vn(e.aS),t=a,i=C(Rt,n,1,Y,h([t]));if(i.$===1)return L;var c=i.a,l=V3(r),u=o(X,.99,o(ce,ie(e.aM),Tt(ql(c)))),$=Zl(c),s=$.a,d=$.b,m=$.c,f=L3(p(Co,s,d,m)),g=o(X,1.01,o(gn,f,Tt(Yl(c)))),b=o(k3,e.eN,{eI:e.eI,e5:g,fv:u}),w=D3(b).d$,x=w?He(dr(Mt(r))):Jr(kt(r)),_=function(){var ge=e.b5;switch(ge.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var he=ge.a;return k(3,he);case 4:var he=ge.a;return k(4,he);default:return k(5,0)}}(),P=_.a,A=_.b,G=e.bK,N=G,E=o(No,N,e.b7),U=E,I=rr({dM:0,dN:x.f5,dO:tn(U),dP:e.eu,dQ:0,dR:x.f9,dS:on(U),dT:ea(f),dU:0,dV:x.de,dW:cn(U),dX:P,dY:0,dZ:w,d_:0,d$:A}),R=we(Il,I,l,b,P3,t,{M:L,U:L,fN:L}),Q=e.bQ;switch(Q.$){case 0:var ae=Q.a;return Ie(h([p(Qe,R.M,k(ae,Qa),Nr),p(Qe,R.U,sn,Nr)]));case 1:var ae=Q.a;return Ie(h([p(Qe,R.M,sn,Nr),h([Ii]),p(Qe,R.fN,ae.bi,Ul),h([Jl(0)]),p(Qe,R.M,k(ae,Qa),z3),p(Qe,R.U,sn,Nr)]));default:var Se=Q.a,Ce=Q.b;return Ie(h([p(Qe,R.M,k(Ce,Qa),Nr),h([Ii]),o(l3,R.fN,Se),p(M3,R.M,Ce,Sr(Se)),p(Qe,R.U,sn,Nr)]))}},W3=function(e){return o(kn,"width",Ae(e))},G3=v(function(e,r){var n=h([A0(1),E0(0),P0(!0),C(T0,0,0,0,0)]),a=function(){var P=e.b8;switch(P.$){case 0:return B(n,"0",1);case 1:return B(o(M,z0,n),"1",1);default:var A=P.a;return B(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aN,u=l.a,$=l.b,s=Ei($),d=o(fe,"height",Ae(s)+"px"),m=Ei(u),f=m/s,g=o(Eo,function(P){return j3({eI:f,eN:e.eN,aM:e.aM,aS:P.aS,bK:P.bK,bQ:P.bQ,eu:c,b5:P.b5,b7:P.b7})},r),b=o(fe,"width",Ae(m)+"px"),w=e.aL,x=w,_=j0(x);return p(V0,"div",h([o(fe,"padding","0px"),b,d]),h([k(i,p(I0,t,h([W3(Re(m*c)),B0(Re(s*c)),b,d,o(fe,"display","block"),o(fe,"background-color",_)]),g))]))}),I3=function(e){return o(G3,{b8:e.b8,aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN},h([{aS:e.aS,bK:e.bK,bQ:e.bQ,b5:e.b5,b7:e.b7}]))},ou=function(e){return e},Hi=ou({f5:.31271,f9:.32902}),H3=v(function(e,r){var n=e,a=He(r.eZ),t=a.f5,i=a.f9,c=a.de,l=o(No,r.cl,r.ce),u=l;return{bF:cn(u),eP:n,bM:on(u),cR:0,b0:tn(u),c6:1,f5:-t,f9:-i,de:-c}}),U3=function(e){return e},O3=function(e){return U3(1.2*o(An,2,e))},rt=function(e){return e},J3={$:0},q3=J3,iu=function(e){return e},Ui=function(e){var r=e;return r},Y3=function(e){e:for(;;){if(xr(e.fk,We)&&xr(e.fl,We))return Pe;if(o(yl,ie(e.fk),ie(e.fl))){var r={ce:e.ce,fk:e.fl,fl:e.fk,eA:dr(e.eA)};e=r;continue e}else{var n=O(Ui(e.fl)/Zr),a=O(Ui(e.fk)/Zr),t=He(e.eA),i=t.f5,c=t.f9,l=t.de,u=o(No,iu(1),e.ce),$=u;return{bF:a*cn($),eP:!1,bM:a*on($),cR:n/a,b0:a*tn($),c6:3,f5:i,f9:c,de:l}}}},Oi=function(e){return Y3({ce:e.ce,fk:e.cl,fl:We,eA:e.eA})},Z3=function(e){var r=e;return r},cu=function(e){var r=p(zo,1667,25e3,Z3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ou({f5:n,f9:a})},lu=function(e){return e},X3=cu(lu(12e3)),Q3=cu(lu(5600)),K3=function(e){return{$:2,a:e}},eb=function(e){return K3(e)},rb=v(function(e,r){return{$:2,a:e,b:r}}),uu=function(e){return{$:0,a:e}},Hn=function(e){var r=e;return r},nb=function(e){var r=e;return r.eP},ab=uu(sn.a),tb=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(M,a,i),c):k(i,o(M,a,c))});return p(br,n,k(L,L),r)}),ob=function(e){var r=e;return rr({dM:r.f5,dN:r.b0,dO:0,dP:0,dQ:r.f9,dR:r.bM,dS:0,dT:0,dU:r.de,dV:r.bF,dW:0,dX:0,dY:r.c6,dZ:r.cR,d_:0,d$:0})},ib=K(function(e,r,n,a,t,i,c,l){var u=o(tb,nb,h([Hn(e),Hn(r),Hn(n),Hn(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(rb,o(ee,ob,$),{bi:o(Ne,m,g),bR:o(Ne,w,_),bS:o(Ne,t,i),bT:o(Ne,c,l)})}else return ab}else return uu({bi:o(Ne,e,r),bR:o(Ne,n,a),bS:o(Ne,t,i),bT:o(Ne,c,l)})}),cb=y(function(e,r,n){return za(ib,e,r,n,Pe,Pe,Pe,Pe,Pe)}),lb=function(e){var r=o(H3,S0(e.fN),{ce:Q3,eZ:e.fW,cl:rt(8e4)}),n=Oi({ce:X3,cl:rt(2e4),eA:e.eA}),a=Oi({ce:Hi,cl:rt(15e3),eA:dr(e.eA)}),t=p(cb,r,n,a);return I3({b8:eb(e.ci),aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN,aS:e.aS,bK:O3(15),bQ:t,b5:q3,b7:Hi})},vu=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),ub=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),$u=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),fu=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),vb=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),$b=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),fb=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Oo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(fb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(vu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(ub,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C($u,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C($b,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(fu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(vb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Jo={$:0},sb=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=xa(c(u)),d=o($e,s.d4,e),m=o(ce,s.d1,r),f=o($e,s.d5,n),g=o(ce,s.d2,a),b=o($e,s.d6,t),w=o(ce,s.d3,i),x=c,_=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{d1:r,d2:a,d3:i,d4:e,d5:n,d6:t}}),db=y(function(e,r,n){var a=xa(e(r));return za(sb,a.d4,a.d1,a.d5,a.d2,a.d6,a.d3,e,n)}),nt=v(function(e,r){var n=e,a=r;return q(a,n)<1}),su=function(e){return o(nt,e.d1,e.d4)&&o(nt,e.d2,e.d5)&&o(nt,e.d3,e.d6)?e:{d1:o(ce,e.d4,e.d1),d2:o(ce,e.d5,e.d2),d3:o(ce,e.d6,e.d3),d4:o($e,e.d4,e.d1),d5:o($e,e.d5,e.d2),d6:o($e,e.d6,e.d3)}},Pn=function(e){var r=e;return r},du=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=_r(n),c=wr(n),l=yr(n),u=_r(a),$=wr(a),s=yr(a),d=_r(t),m=wr(t),f=yr(t);return su({d1:o(ce,i,o(ce,u,d)),d2:o(ce,c,o(ce,$,m)),d3:o(ce,l,o(ce,s,f)),d4:o($e,i,o($e,u,d)),d5:o($e,c,o($e,$,m)),d6:o($e,l,o($e,s,f))})},mu=Q$,Le=function(e){return mu(Ea(e))},pu=function(e){var r=e;return r},Na=function(e){return mu(pu(e))},mb=v(function(e,r){var n=e,a=r,t=o(Te,O(a.f5),o(Te,O(a.f9),O(a.de)));if(t){var i=a.de/t,c=a.f9/t,l=a.f5/t,u=gr(l*l+c*c+i*i);return{f5:n*l/u,f9:n*c/u,de:n*i/u}}else return xl}),pb=mb(iu(1)),bu=y(function(e,r,n){var a=o(ha,r,n),t=o(ha,e,r);return pb(o(ho,a,t))}),bb=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Na(p(bu,n,a,t));return B({n:i,b_:Le(n)},{n:i,b_:Le(a)},{n:i,b_:Le(t)})},gb=v(function(e,r){return{$:2,a:e,b:r}}),gu=gb({dq:3,dA:0,d8:4}),hb=function(e){if(e.b){var r=e.a,n=e.b,a=gu(o(ee,bb,e)),t=p(db,du,r,n);return C(vu,t,e,a,0)}else return Jo},Ee=y(function(e,r,n){return B(e,r,n)}),hu=function(){var e=tr(1),r=tr(1),n=tr(1),a=o(X,-.5,e),t=o(X,-.5,r),i=o(X,-.5,n),c=p(se,i,t,a),l=o(X,.5,e),u=p(se,i,t,l),$=o(X,.5,r),s=p(se,i,$,a),d=p(se,i,$,l),m=o(X,.5,n),f=p(se,m,t,a),g=p(se,m,$,a),b=p(se,m,t,l),w=p(se,m,$,l);return Oo(hb(h([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,b,w),p(Ee,u,w,d),p(Ee,f,g,w),p(Ee,f,w,b),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,b),p(Ee,c,b,u),p(Ee,s,w,g),p(Ee,s,d,w)])))}(),Un={$:0},_b=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),wb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Na(p(bu,u,l,c)),s={n:$,b_:Le(u)},d={n:$,b_:Le(l)},m={n:$,b_:Le(c)};return o(M,s,o(M,d,o(M,m,n)))}),yb=ir,qo=function(e){var r=e;return r.D},xb=F(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return re(p(e,t,i,c))}),Yo=function(e){var r=e;return r.ai},at=v(function(e,r){return o(zl,e,Yo(r))}),Sb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(xb,y(function(c,l,u){return B(c,l,u)}),o(at,a,e),o(at,t,e),o(at,i,e))};return o(dl,r,qo(e))},Cb=y(function(e,r,n){return e(r(n))}),Pb=v(function(e,r){return!o(el,o(Cb,Ls,e),r)}),Lb=v(function(e,r){return p(br,v(function(n,a){return e(n)?o(M,n,a):a}),L,r)}),_u=v(function(e,r){var n=kl(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&q(i,n)<0&&c>=0&&q(c,n)<0&&l>=0&&q(l,n)<0};return o(Pb,a,r)?{D:r,ai:e}:{D:o(Lb,a,r),ai:e}}),zb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rn=zb({dq:1,dA:3,d8:4}),na=v(function(e,r){var n=Jr(r),a=Jr(e);return k(B(a.f5,a.f9,a.de),B(n.f5,n.f9,n.de))}),Ji=p(Bn,0,0,0),tt=Ue(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(ll,o(na,e,r),t);if($.$){var d={n:Ji,b_:Le(r)},m={n:Ji,b_:Le(e)},f=u+1,g=u;return B(o(M,B(n,g,f),o(M,B(n,f,a),c)),o(M,d,o(M,m,l)),u+2)}else{var s=$.a;return B(o(M,B(n,s,a),c),l,u)}}),kb=be(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=$,P=a+3,A=we(tt,s,m,f,b,r,we(tt,d,s,g,f,r,we(tt,m,d,b,g,r,t)));e=w,r=x,n=_,a=P,t=A;continue e}else{var G=t,N=G.a,E=G.b;return k(N,ke(E))}}),Tb=be(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(Xn,o(na,m,s),f,p(Xn,o(na,s,d),g,p(Xn,o(na,d,m),b,t))),x=o(M,B(b,g,f),a),_=e,P=$,A=n+3,G=x,N=w;e=_,r=P,n=A,a=G,t=N;continue e}else return B(a,t,n)}),zr=y(function(e,r,n){var a=Sb(n),t=p(br,wb(r),L,a),i=S(Tb,r,a,0,L,yb),c=i.a,l=i.b,u=i.c,$=S(kb,r,l,a,0,B(c,L,u)),s=$.a,d=$.b,m=wl(d)?t:le(t,d);return p(_b,e,o(_u,Va(m),s),o(Rn,m,s))}),Et=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Mr,0,Sr(e)-1)),ai:Va(Ie(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},wu=function(e){switch(e.$){case 0:return Un;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(zr,a,fr,Et(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(zr,a,fr,Et(n));case 3:var a=e.a,t=e.b;return p(zr,a,fr,t);case 4:var a=e.a,t=e.b;return p(zr,a,function(i){return i.b_},t);case 5:var a=e.a,t=e.b;return p(zr,a,function(i){return i.b_},t);case 6:var a=e.a,t=e.b;return p(zr,a,function(i){return i.b_},t);case 7:var a=e.a,t=e.b;return p(zr,a,function(i){return i.b_},t);case 8:return Un;case 9:return Un;default:return Un}},qi=wu(hu),yu={$:0},z=yu,me=v(function(e,r){return{$:1,a:e,b:r}}),Mb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bI"}},Db=1029,Ab=function(e){return{$:5,a:e}},xu=function(e){var r=e;return Ab(r)},Bb=xu(Db),Fb=1028,Vb=xu(Fb),ze=y(function(e,r,n){return r===1?e?o(M,Bb,n):o(M,Vb,n):n}),Su={src:`
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
    `,attributes:{position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ot=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),Su,Mb,n,{bI:e,b:c,c:i,d:$,e:t,f:u})}))}),Zo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ay"}},Cu={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ur=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),Cu,Zo,n,{ay:e,b:c,c:i,d:$,e:t,f:u})}))}),Pu=v(function(e,r){return{$:3,a:e,b:r}}),Rb={src:`
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
    `,attributes:{},uniforms:{constantColor:"ay",pointRadius:"bZ",sceneProperties:"e"}},Lu={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bZ",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Eb=F(function(e,r,n,a){return o(Pu,n,K(function(t,i,c,l,u,$,s,d){return S(ne,d,Lu,Rb,a,{ay:e,b:c,c:i,bZ:r,d:$,e:t,f:u})}))}),Xo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",sceneProperties:"e"}},En=function(e){var r=e;return r},ja=K$,vr=be(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),Cu,Xo,a,{aQ:o(ja,En(r),e),b:l,c,d:s,e:i,f:$})}))}),Nb={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",pointRadius:"bZ",sceneProperties:"e"}},jb=be(function(e,r,n,a,t){return o(Pu,a,K(function(i,c,l,u,$,s,d,m){return S(ne,m,Lu,Nb,t,{aQ:o(ja,En(r),e),b:l,c,bZ:n,d:s,e:i,f:$})}))}),zu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColor:"cx",sceneProperties:"e",viewMatrix:"f"}},ku={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},On=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),ku,zu,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cx:e,b:c,c:i,d:$,e:t,f:u})}))}),Tu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColorTexture:"cy",normalMapTexture:"aZ",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},Mu={src:`
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
    `,attributes:{normal:"n",position:"b_",tangent:"ew",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Wb=Ue(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,$,i,f),Mu,Tu,t,{P:b,bi:g.bi,bR:g.bR,bS:g.bS,bT:g.bT,cy:e,b:u,c:l,aZ:r,d,e:c,a4:n,f:s})}))}),Du={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cc",constantBaseColor:"cf",constantMetallic:"cg",constantRoughness:"ch",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallicTexture:"cC",normalMapTexture:"aZ",roughnessTexture:"c$",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},Gb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(me,u,K(function(d,m,f,g,b,w,x,_){var P=x.a,A=x.b;return S(ne,p(ze,g,s,_),Mu,Du,$,{cc:e,cf:r,cg:i,ch:a,P:A,bi:P.bi,bR:P.bR,bS:P.bS,bT:P.bT,cC:t,b:f,c:m,aZ:c,d:w,c$:n,e:d,a4:l,f:b})}))}}}}}}}}}}},Au={src:`
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
    `,attributes:{},uniforms:{baseColor:"cb",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallic:"cB",roughness:"c_",sceneProperties:"e",viewMatrix:"f"}},Jn=Ue(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,$,i,f),ku,Au,t,{cb:e,P:b,bi:g.bi,bR:g.bR,bS:g.bS,bT:g.bT,cB:n,b:u,c:l,d,c_:r,e:c,f:s})}))}),Ib=function(e){return{$:0,a:e}},Yi=v(function(e,r){return{$:1,a:e,b:r}}),hn=v(function(e,r){if(r.$){var n=r.a.B;return k(n,1)}else return r.a,k(e,0)}),Hb=function(e){return C(an,tn(e),on(e),cn(e),1)},Qo=C(an,0,0,0,0),aa=v(function(e,r){if(r.$){var a=r.a.B;return k(a,Qo)}else{var n=r.a;return k(e,Hb(n))}}),Bu=v(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.B;return o(Yi,k(t,Qo),o(hn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(Yi,o(aa,t,e),o(hn,t,r))}else{var a=n.a.a;return n.b.a,Ib(a)}}),Ub=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ob=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Jb=function(e){return o(De,e,1)},Nt=o(De,0,0),jr=v(function(e,r){if(r.$){var a=r.a.B;return k(a,Nt)}else{var n=r.a;return k(e,Jb(n))}}),Fu=F(function(e,r,n,a){var t=C(Ob,e,r,n,a);if(t.a.$){var u=t.a.a.B;return C(qn,k(u,Qo),o(jr,u,r),o(jr,u,n),o(hn,u,a))}else if(t.b.$){var u=t.b.a.B;return C(qn,o(aa,u,e),k(u,Nt),o(jr,u,n),o(hn,u,a))}else if(t.c.$){var u=t.c.a.B;return C(qn,o(aa,u,e),o(jr,u,r),k(u,Nt),o(hn,u,a))}else if(t.d.$){var u=t.d.a.B;return C(qn,o(aa,u,e),o(jr,u,r),o(jr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Ub,i,c,l)}}),qb={src:`
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
    `,attributes:{},uniforms:{backlight:"b9",colorTexture:"bI",sceneProperties:"e"}},it=be(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),Su,qb,a,{b9:En(r),bI:e,b:l,c,d:s,e:i,f:$})}))}),Vu={src:`
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
    `,attributes:{normal:"n",position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Yb=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),Vu,Tu,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cy:e,b:c,c:i,aZ:e,d:$,e:t,a4:0,f:u})}))}),Zb=Gt(function(e,r,n,a,t,i,c,l,u){return o(me,c,K(function($,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ne,p(ze,m,u,w),Vu,Du,l,{cc:e,cf:r,cg:i,ch:a,P:_,bi:x.bi,bR:x.bR,bS:x.bS,bT:x.bT,cC:t,b:d,c:s,aZ:e,d:g,c$:n,e:$,a4:0,f})}))}),Ln=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Xb=function(e){var r=e;return p(Ln,r.d4,r.d1,.5)},Qb=function(e){var r=e;return p(Ln,r.d5,r.d2,.5)},Kb=function(e){var r=e;return p(Ln,r.d6,r.d3,.5)},eg=function(e){return p(se,Xb(e),Qb(e),Kb(e))},j=function(e){var r=Zl(e),n=r.a,a=r.b,t=r.c;return{eQ:Ea(eg(e)),e8:n/2,e9:a/2,fa:t/2}},Ko=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(ot,l,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ot,l,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ot,l,j(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(ur,n,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ur,n,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ur,n,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ur,n,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ur,n,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ur,n,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ur,n,j(t),c,a);case 8:var t=r.a,c=r.c;return C(ur,n,j(t),c,0);case 9:var t=r.a,c=r.c;return C(ur,n,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(Eb,n,i,j(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,$=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(it,l,$,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(it,l,$,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(it,l,$,j(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(vr,u,$,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(vr,u,$,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(vr,u,$,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(vr,u,$,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(vr,u,$,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(vr,u,$,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(vr,u,$,j(t),c,a);case 8:var t=r.a,c=r.c;return S(vr,u,$,j(t),c,0);case 9:var t=r.a,c=r.c;return S(vr,u,$,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(jb,u,$,i,j(t),c)}}case 2:e.a;var s=e.b,N=e.c,d=o(Bu,s,N);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Yb,b,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(Wb,b,x,_,j(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(On,m,j(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(On,m,j(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(On,m,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(On,m,j(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var P=e.b,A=e.c,G=e.d,N=e.e,E=C(Fu,P,A,G,N);if(E.$){var Q=E.a,ae=Q.a,Se=Q.b,Ce=E.b,ge=Ce.a,he=Ce.b,Je=E.c,qe=Je.a,Rr=Je.b,Er=E.d,x=Er.a,_=Er.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Xu(Zb,ae,Se,ge,he,qe,Rr,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Gb(ae)(Se)(ge)(he)(qe)(Rr)(x)(_)(j(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var U=E.a,I=E.b,R=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return we(Jn,U,I,R,j(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return we(Jn,U,I,R,j(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return we(Jn,U,I,R,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(Jn,U,I,R,j(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),ct=function(e){var r=e;return r.f5},lt=function(e){var r=e;return r.f9},ut=function(e){var r=e;return r.de},rg=function(e){var r=e,n=ut(r.df),a=lt(r.df),t=ct(r.df),i=ut(r.dd),c=lt(r.dd),l=ct(r.dd),u=ut(r.dc),$=lt(r.dc),s=ct(r.dc);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},ng=function(e){var r=Ea(rn(e)),n=He(Br(e)),a=He(Vr(e)),t=He(Fr(e));return{dC:rg(e),p:t.f5,q:t.f9,r:t.de,s:a.f5,t:a.f9,u:a.de,v:n.f5,w:n.f9,x:n.de,H:r.f5,I:r.f9,J:r.de,b2:1}},Wr=v(function(e,r){return{$:5,a:e,b:r}}),Ru=v(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Gl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),Eu=v(function(e,r){return o(Ru,ng(e),r)}),Wa=function(e){return{$:2,a:e}},ag=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eQ;return{eQ:{f5:n*i.f5,f9:a*i.f9,de:t*i.de},e8:n*r.e8,e9:a*r.e9,fa:t*r.fa}}),tg=nf,og=rf,Zi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=og(a),g=f.f5,b=f.f9,w=f.de,x=f.eE,_=tg({eE:x,f5:g*s,f9:b*d,de:w*m});return za(r,n,_,t,i,c,l,u,$)}}}}}}}}}},jt=v(function(e,r){switch(r.$){case 0:return yu;case 5:var n=r.a,a=r.b;return o(Wr,n,o(jt,e,a));case 1:var t=r.a,i=r.b;return o(me,o(ag,e,t),o(Zi,e,i));case 3:return r;case 2:var i=r.a;return Wa(o(Zi,e,i));default:var c=r.a;return Kl(o(ee,jt(e),c))}}),ei=v(function(e,r){var n=r;return o(jt,e,n)}),ri={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Nu=7683,ju=7682,ig=p(Go,{cw:0,cW:0,db:15},{bd:xe,bs:Xr,bA:xe,bB:Nu},{bd:xe,bs:Xr,bA:xe,bB:ju}),cg=p(Go,{cw:0,cW:0,db:15},{bd:xe,bs:Xr,bA:xe,bB:ju},{bd:xe,bs:Xr,bA:xe,bB:Nu}),ni=v(function(e,r){return e?o(M,cg,r):o(M,ig,r)}),lg={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},ug=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,$){return S(ne,o(ni,i,$),lg,ri,r,{b:t,c:a,d:l,e:n,b4:u,f:c})}))}else return Y},Sa=function(e){var r=ug(e);if(r.$)return z;var n=r.a;return Wa(n)},vg=F(function(e,r,n,a){var t=o(Ko,n,hu),i=function(){var s=k(e,r);return s.a?s.b?Vn(h([t,Sa(qi)])):t:s.b?Sa(qi):z}(),c=Do(a),l=c.a,u=c.b,$=c.c;return o(Eu,Mo(a),o(ei,B(l,u,$),i))}),$g=v(function(e,r){return C(vg,!0,!0,e,r)}),Wu=v(function(e,r){return{$:0,a:e,b:r}}),fg=function(e){var r=po(e),n=r.cV,a=r.ck,t=r.cd;return p(Bn,n,a,t)},sg=function(e){return o(Wu,0,Bt(fg(e)))},_n=function(e){var r=e;return wa(r)},dg=v(function(e,r){var n=e.b_,a=e.n;return o(M,{n:Na(a),b_:Le(n)},r)}),mg=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=cn(l.b_),s=on(l.b_),d=tn(l.b_),m=o(ra,e,d),f=o(Te,r,d),g=o(ra,n,s),b=o(Te,a,s),w=o(ra,t,$),x=o(Te,i,$),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return su({d1:r,d2:a,d3:i,d4:e,d5:n,d6:t})}),Gu=v(function(e,r){var n=cn(e.b_),a=on(e.b_),t=tn(e.b_);return It(mg,t,t,a,a,n,n,r)}),pg=function(e){var r=p(Ac,dg,L,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,qo(e)),i=o(Gu,n,a);return C($u,i,e,t,0)}else return Jo},Xi=v(function(e,r){var n=e,a=r,t=n.dd,i=t,c=n.dc,l=c;return{f5:a.f5*l.f5+a.f9*i.f5,f9:a.f5*l.f9+a.f9*i.f9,de:a.f5*l.de+a.f9*i.de}}),Ca=function(e){var r=e;return ya(r)},Wt=function(e){return Cn(2*Zr*e)},bg=fr,Qi=bg({cI:er,dc:au,dd:tu}),Iu=function(){var e=72,r=o(Cl,e,Wt(1)),n=tr(1),a=Hr(Po),t=Hr(So),i=tr(1),c=o(X,.5,i),l=p(se,We,We,c),u=o(X,-.5,i),$=p(se,We,We,u),s=function(f){var g=o(X,f,r),b=Hr(o(Xi,Qi,Dt(g))),w=o(X,_n(g),n),x=o(X,Ca(g),n),_=p(se,w,x,c),P=p(se,w,x,u),A=o(Yr,e,f+1),G=o(X,A,r),N=Hr(o(Xi,Qi,Dt(G))),E=o(X,_n(G),n),U=o(X,Ca(G),n),I=p(se,E,U,u),R=p(se,E,U,c);return h([B({n:t,b_:$},{n:t,b_:I},{n:t,b_:P}),B({n:b,b_:P},{n:N,b_:I},{n:N,b_:R}),B({n:b,b_:P},{n:N,b_:R},{n:b,b_:_}),B({n:a,b_:l},{n:a,b_:_},{n:a,b_:R})])},d=o(ee,s,o(Mr,0,e-1)),m=Et(Ie(d));return Oo(pg(m))}(),Ki=wu(Iu),gg=function(e){var r=yo(e),n=_o(r),a=n.a,t=n.b;return lr({cI:xo(e),dc:a,dd:t,df:r})},hg=F(function(e,r,n,a){var t=gg(Ro(a)),i=o(Ko,n,Iu),c=function(){var d=k(e,r);return d.a?d.b?Vn(h([i,Sa(Ki)])):i:d.b?Sa(Ki):z}(),l=jl(a),u=l,$=Nl(a),s=$;return o(Eu,t,o(ei,B(u,u,s),c))}),_g=v(function(e,r){return C(hg,!0,!0,e,r)}),ec={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},rc={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},dn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Jr(n),c=Jr(a),l=Jr(t);return rr({dM:i.f5,dN:c.f5,dO:l.f5,dP:0,dQ:i.f9,dR:c.f9,dS:l.f9,dT:0,dU:i.de,dV:c.de,dW:l.de,dX:0,dY:0,dZ:0,d_:0,d$:0})},Yn=gu(h([B({c5:0},{c5:1},{c5:2})])),wg=v(function(e,r){var n=du(r),a=j(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,z;var t=e.b.a;return o(me,a,K(function(_,P,A,G,N,E,U,I){return S(ne,p(ze,G,0,I),ec,Zo,Yn,{ay:t,b:A,c:P,d:E,e:_,bx:dn(r),f:N})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(me,a,K(function(_,P,A,G,N,E,U,I){return S(ne,p(ze,G,0,I),ec,Xo,Yn,{aQ:o(ja,En(c),i),b:A,c:P,d:E,e:_,bx:dn(r),f:N})}));case 2:e.a;var l=e.b,f=e.c,u=o(Bu,l,f);if(u.$)return z;var $=u.a;return o(me,a,K(function(_,P,A,G,N,E,U,I){var R=U.a,Q=U.b;return S(ne,p(ze,G,0,I),rc,zu,Yn,{P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cx:$,b:A,c:P,d:E,e:_,bx:dn(r),f:N})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Fu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(me,a,K(function(_,P,A,G,N,E,U,I){var R=U.a,Q=U.b;return S(ne,p(ze,G,0,I),rc,Au,Yn,{cb:b,P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cB:x,b:A,c:P,d:E,c_:w,e:_,bx:dn(r),f:N})}))}}),yg=function(){var e=h([{a3:o(De,0,1)},{a3:o(De,1,1)},{a3:o(De,2,1)},{a3:o(De,0,-1)},{a3:o(De,1,-1)},{a3:o(De,2,-1)}]),r=h([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Rn,e,r)}(),xg={src:`
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
    `,attributes:{triangleShadowVertex:"a3"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",triangleVertexPositions:"bx",viewMatrix:"f"}},nc=function(e){return Wa(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ni,t,u),xg,ri,yg,{b:a,c:n,d:c,e:r,b4:l,bx:dn(e),f:i})}))},Sg=F(function(e,r,n,a){var t=o(wg,n,a),i=k(e,r);return i.a?i.b?Vn(h([t,nc(a)])):t:i.b?nc(a):z}),Cg=v(function(e,r){return C(Sg,!0,!0,e,r)}),Pg=v(function(e,r){var n=yr(r),a=yr(e),t=wr(r),i=wr(e),c=_r(r),l=_r(e);return{d1:o(ce,l,c),d2:o(ce,i,t),d3:o(ce,a,n),d4:o($e,l,c),d5:o($e,i,t),d6:o($e,a,n)}}),Lg=function(e){var r=Ao(e),n=r.a,a=r.b;return o(Pg,n,a)},ac={src:`
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
    `,attributes:{lineSegmentVertex:"dL"},uniforms:{lineSegmentEndPoint:"dJ",lineSegmentStartPoint:"dK",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},zg=v(function(e,r){return{$:1,a:e,b:r}}),kg=zg({dq:2,dA:0,d8:1}),tc=kg(h([k({dL:0},{dL:1})])),Tg=v(function(e,r){var n=Lg(r),a=j(n),t=Ao(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,z;var l=e.b.a;return o(me,a,K(function($,s,d,m,f,g,b,w){return S(ne,w,ac,Zo,tc,{ay:l,dJ:Le(c),dK:Le(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(me,a,K(function(s,d,m,f,g,b,w,x){return S(ne,x,ac,Xo,tc,{aQ:o(ja,En(u),l),dJ:Le(c),dK:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Mg=v(function(e,r){return o(Tg,e,r)}),oc=v(function(e,r){var n=e,a=r;return n/a}),Dg=be(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(M,i,t);if(xr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),ic=v(function(e,r){return e<1?L:S(Dg,0,e,e,r,L)}),Ag=v(function(e,r){var n=e.b_,a=e.n,t=e.L,i=t,c=i.a,l=i.b;return o(M,{n:Na(a),b_:Le(n),L:o(De,c,l)},r)}),Bg=function(e){var r=p(Ac,Ag,L,Yo(e));if(r.b){var n=r.a,a=r.b,t=o(Rn,r,qo(e)),i=o(Gu,n,a);return C(fu,i,e,t,0)}else return Jo},Hu=v(function(e,r){var n=e,a=r,t=wa(a);return{f5:t*wa(n),f9:t*ya(n),de:ya(a)}}),Fg=function(){var e=tr(1),r=72,n=o(Mr,0,r-1),a=o(ic,r,o(Ln,We,Wt(1))),t=to(r/2),i=o(Mr,0,t-1),c=o(ic,t,o(Ln,fn(90),fn(-90))),l=Va(Ie(o(ee,function(s){return o(ee,function(d){return{n:Hr(o(Hu,s,d)),b_:p(se,o(X,_n(d)*_n(s),e),o(X,_n(d)*Ca(s),e),o(X,Ca(d),e)),L:k(o(oc,s,Wt(1)),o(oc,o(gn,fn(90),d),fn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ie(o(ee,function(s){return Ie(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([B(b,g,m),B(b,m,f)])},i))},n));return Oo(Bg(o(_u,l,$)))}(),Pa=72,Zn=2*Pa,Vg=v(function(e,r){e:for(;;){var n=Zn+1,a=o(Yr,Zn,2*e+3),t=o(Yr,Zn,2*e+2),i=2*e+1,c=2*e,l=Zn,u=o(M,B(l,c,t),o(M,B(c,a,t),o(M,B(c,i,a),o(M,B(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),Rg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Eg=v(function(e,r){e:for(;;){var n=p(Rg,0,2*Zr,e/Pa),a={bD:n,bW:0,b1:1},t={bD:n,bW:1,b1:1},i=o(M,a,o(M,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Ng=function(){var e=o(Eg,Pa-1,h([{bD:0,bW:0,b1:0},{bD:0,bW:1,b1:0}])),r=o(Vg,Pa-1,L);return o(Rn,e,r)}(),jg={src:`
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
    `,attributes:{angle:"bD",offsetScale:"bW",radiusScale:"b1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},cc=function(e){return Wa(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ni,!0,u),jg,ri,Ng,{ay:p(Bn,0,0,1),b:a,c:n,d:c,e:r,b4:l,f:i})}))},Wg=function(e){var r=pu(e);return{dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:r.f5,I:r.f9,J:r.de,b2:1}},Gg=v(function(e,r){return o(Ru,Wg(e),r)}),Ig=F(function(e,r,n,a){var t=o(Ko,n,Fg),i=function(){var u=k(e,r);return u.a?u.b?Vn(h([t,cc()])):t:u.b?cc():z}(),c=Fo(a),l=c;return o(Gg,o(ha,er,Bo(a)),o(ei,B(l,l,l),i))}),Hg=v(function(e,r){return C(Ig,!0,!0,e,r)}),Ug=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Og=be(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Jg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Wu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Ug,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Ll,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Og,n,a,t,i,c)}},qg=Jg,Uu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o($g,t,r)]);case 1:var t=e.a,n=e.b;return h([o(Cg,t,n)]);case 3:var t=e.a,a=e.b;return h([o(Hg,qg(t),a)]);case 2:var t=e.a,i=e.b;return h([o(_g,t,i)]);case 4:var c=e.a,l=e.b;return h([o(Mg,sg(c),l)]);default:var u=e.a;return o(Eo,Uu,u)}},Yg=function(e){return o(Eo,Uu,e)},Zg=v(function(e,r){return lb({aL:y0(e.eK),eN:e.eN,aM:x0(.5),ci:e.ci,aN:k(Ri(Re(e.b3.f3)),Ri(Re(e.b3.fc))),aS:Yg(r),fN:!0,fW:o(Hu,Cn(e.fV),Cn(e.fX)),eA:Lo})}),Xg=v(function(e,r){return o(Zg,{eK:p(w0,46,46,46),eN:Sl,ci:e.ci,b3:e.b3,fV:-Fi(15),fX:-Fi(45)},h([o(_0,e,r)]))}),Qg=v(function(e,r){return o(H,h([J("w-full")]),h([o(H,h([J("absolute p-4 text-white80"),J("grid place-items-center w-full")]),h([o(H,L,h([cr("Swipe or press left/right arrow keys")]))])),o(Xg,e,r)]))}),Kg=p(km,Qg,Gp,Nm);const eh={Main:{init:Kg(o(D,function(e){return Me({fj:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f2:e})},o(T,"clock",ve))},o(T,"devicePixelRatio",ve))},o(T,"dt",ve))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Me({eG:d,eU:s,$7:$,e$:u,dF:l,fF:c,eo:i,fO:t,ez:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",fa(Sn)))},o(T,"left",Z))},o(T,"pressedKeys",fa(Sn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Me({$7:$,dB:u,fs:l,fK:c,fL:i,ez:t,f5:a,f9:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ve))},o(T,"y",ve))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Me({fc:n,f3:r})},o(T,"height",ve))},o(T,"width",ve))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Me({eW:r,eX:e})},o(T,"deltaX",ve))},o(T,"deltaY",ve)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},rh=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},nh=()=>{vt("pointerdown"),vt("wheel"),vt("keydown")},vt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},ah=eh.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});nh();rh(ah);
