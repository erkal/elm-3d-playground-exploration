const Ou=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Ou();function wr(e,r,n){return n.a=e,n.f=r,n}function v(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function za(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function jt(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Le(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Nt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ka(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ju(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var qu=[];function Zu(e){return e.length}var Xu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ku=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Qu=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var ev=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+rv()),r});function rv(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=vt(e,r,0,a);t&&(n=a.pop());t=vt(n.a,n.b,0,a));return t}function vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=fi(e),r=fi(r));for(var t in e)if(!vt(e[t],r[t],n+1,a))return!1;return!0}v(gr);v(function(e,r){return!gr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return I(e,r)<0});v(function(e,r){return I(e,r)<1});v(function(e,r){return I(e,r)>0});v(function(e,r){return I(e,r)>=0});var nv=v(function(e,r){var n=I(e,r);return n<0?Ac:n?Wf:Bc}),Dn=0;function z(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var av=v(ar);function b(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var tv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return b(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(c)});v(function(e,r){return b(Ta(r).sort(function(n,a){return I(e(n),e(a))}))});v(function(e,r){return b(Ta(r).sort(function(n,a){var t=o(e,n,a);return t===Bc?0:t===Ac?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ov=v(Math.pow);v(function(e,r){return r%e});var iv=v(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),cv=Math.PI,lv=Math.cos,uv=Math.sin,vv=Math.tan,$v=Math.atan;v(Math.atan2);function fv(e){return e}function sv(e){return e===1/0||e===-1/0}var dv=Math.ceil,mv=Math.floor,pv=Math.round,bv=Math.sqrt,Ko=Math.log,hv=isNaN;function gv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var _v=v(function(e,r){return e+r});function wv(e){var r=e.charCodeAt(0);return isNaN(r)?q:oe(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}v(function(e,r){return e+r});function yv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function xv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Sv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Cv=v(function(e,r){return r.split(e)}),Lv=v(function(e,r){return r.join(e)}),Pv=y(function(e,r,n){return n.slice(e,r)});function zv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var kv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Tv=v(function(e,r){return r.indexOf(e)>-1}),Mv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Dv=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function cc(e){return e+""}function Bv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:oe(n==45?-r:r)}function Av(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?oe(r):q}function Fv(e){return Ta(e).join("")}function Vv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ev(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Rv(e){return{$:0,a:e}}function Wt(e){return{$:2,b:e}}var Uv=Wt(function(e){return typeof e=="boolean"?$e(e):Xe("a BOOL",e)}),jv=Wt(function(e){return typeof e=="number"?$e(e):Xe("a FLOAT",e)}),Nv=Wt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Xe("a STRING",e)});function Wv(e){return{$:3,b:e}}var Gv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var Hv=v(function(e,r){return{$:10,b:r,h:e}}),Yv=v(function(e,r){return yr(e,[r])}),Iv=y(function(e,r,n){return yr(e,[r,n])});R(function(e,r,n,a){return yr(e,[r,n,a])});he(function(e,r,n,a,t){return yr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});za(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});jt(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ue(e,n)}catch(a){return _e(o(eo,"This is not valid JSON! "+a.message,r))}});var lc=v(function(e,r){return Ue(e,r)});function Ue(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Xe("null",r);case 3:return Wn(r)?Qo(e.b,r,b):Xe("a LIST",r);case 4:return Wn(r)?Qo(e.b,r,Ov):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var $=Ue(e.b,r[n]);return Ie($)?$:_e(o(si,n,$.a));case 7:var a=e.e;if(!Wn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ue(e.b,r[a]);return Ie($)?$:_e(o(Fc,a,$.a));case 8:if(typeof r!="object"||r===null||Wn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var $=Ue(e.b,r[i]);if(!Ie($))return _e(o(si,i,$.a));t=ar(z(i,$.a),t)}return $e(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ue(l[u],r);if(!Ie($))return $;c=c($.a)}return $e(c);case 10:var $=Ue(e.b,r);return Ie($)?Ue(e.h($.a),r):$;case 11:for(var s=P,d=e.g;d.b;d=d.b){var $=Ue(d.a,r);if(Ie($))return $;s=ar($.a,s)}return _e(Gf(Ae(s)));case 1:return _e(o(eo,e.a,r));case 0:return $e(e.a)}}function Qo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ue(e,r[i]);if(!Ie(c))return _e(o(Fc,i,c.a));t[i]=c.a}return $e(n(t))}function Wn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ov(e){return o(is,e.length,function(r){return e[r]})}function Xe(e,r){return _e(o(eo,"Expecting "+e,r))}function Nr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Nr(e.b,r.b);case 6:return e.d===r.d&&Nr(e.b,r.b);case 7:return e.e===r.e&&Nr(e.b,r.b);case 9:return e.f===r.f&&ei(e.g,r.g);case 10:return e.h===r.h&&Nr(e.b,r.b);case 11:return ei(e.g,r.g)}}function ei(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Nr(e[a],r[a]))return!1;return!0}var Jv=v(function(e,r){return JSON.stringify(r,null,e)+""});function uc(e){return e}y(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function qv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var $t=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Zv(e){return{$:5,b:e}}var Xv=0;function Gt(e){var r={$:0,e:Xv++,f:e,g:null,h:[]};return Ht(r),r}function vc(e){return fr(function(r){r(Br(Gt(e)))})}function $c(e,r){e.h.push(r),Ht(e)}var Kv=v(function(e,r){return fr(function(n){$c(e,r),n(Br(Dn))})}),Wa=!1,ri=[];function Ht(e){if(ri.push(e),!Wa){for(Wa=!0;e=ri.shift();)Qv(e);Wa=!1}}function Qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ht(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Yt(e,r,n,a,t,i){var c=o(lc,e,r?r.flags:void 0);Ie(c)||Qr(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=e$(l,m);function m(f,g){var h=o(a,f,$);s($=h.a,g),ai(l,h.b,t($))}return ai(l,u.b,t($)),d?{ports:d}:{}}var er={};function e$(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=n$(t,r)}return n}function r$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function n$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o($t,l,Zv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Gt(o($t,l,e.b))}var a$=v(function(e,r){return fr(function(n){e.g(r),n(Br(Dn))})});v(function(e,r){return o(Kv,e.h,{$:0,a:r})});function fc(e){return function(r){return{$:1,k:e,l:r}}}function t$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ni=[],Ga=!1;function ai(e,r,n){if(ni.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=ni.shift();)o$(a.p,a.q,a.r);Ga=!1}}function o$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)$c(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=i$(e,t,a,r.l);n[t]=c$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function i$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function c$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function l$(e){er[e]&&Qr(3)}v(function(e,r){return r});function u$(e,r){return l$(e),er[e]={f:v$,u:r,a:$$},fc(e)}var v$=v(function(e,r){return function(n){return e(r(n))}});function $$(e,r){var n=P,a=er[e].u,t=Br(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(lc,a,c);Ie(l)||Qr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var va,lr=typeof document!="undefined"?document:{};function It(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function ft(e){return{$:0,a:e}}var sc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ot(n),e:t,f:e,b:i}})}),Ar=sc(void 0),f$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ot(n),e:t,f:e,b:i}})}),s$=f$(void 0);function d$(e,r,n,a){return{$:3,d:Ot(e),g:r,h:n,i:a}}var m$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return xr([e,r],function(){return e(r)})});y(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});za(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return Le(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Nt(e,r,n,a,t,i,c,l)})});jt(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return ka(e,r,n,a,t,i,c,l,u)})});var dc=v(function(e,r){return{$:"a0",n:e,o:r}}),p$=v(function(e,r){return{$:"a1",n:e,o:r}}),mc=v(function(e,r){return{$:"a2",n:e,o:r}}),Sr=v(function(e,r){return{$:"a3",n:e,o:r}}),b$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function h$(e){return e=="script"?"p":e}function g$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(dc,r.n,_$(e,r.o)):r});function _$(e,r){var n=oo(r);return{$:r.$,a:n?p(cs,n<3?w$:y$,Te(e),r.a):o(da,e,r.a)}}var w$=v(function(e,r){return z(e(r.a),r.b)}),y$=v(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ot(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ti(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ti(c,t,i):c[t]=i}return r}function ti(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return st(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),st(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,hr(n===1?l[u]:l[u].b,r));return c}function st(e,r,n){for(var a in n){var t=n[a];a==="a1"?x$(e,t):a==="a0"?L$(e,r,t):a==="a3"?S$(e,t):a==="a4"?C$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function x$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function S$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function C$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function L$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=P$(r,i),e.addEventListener(t,c,Jt&&{passive:oo(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function P$(e,r){function n(a){var t=n.q,i=Ue(t.a,a);if(!!Ie(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cX,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function z$(e,r){return e.$==r.$&&Nr(e.a,r.a)}function pc(e,r){var n=[];return Oe(e,r,n,0),n}function ge(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=V$(r),i=1;else{ge(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&ge(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var h=r.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;if(f&&d.length!==m.length){ge(n,0,a,r);return}(f?!k$(d,m):d!==m)&&ge(n,2,a,m),Oe(g,h,n,a+1);return;case 0:e.a!==r.a&&ge(n,3,a,r.a);return;case 1:oi(e,r,n,a,T$);return;case 2:oi(e,r,n,a,M$);return;case 3:if(e.h!==r.h){ge(n,0,a,r);return}var w=qt(e.d,r.d);w&&ge(n,4,a,w);var x=r.i(e.g,r.g);x&&ge(n,5,a,x);return}}}function k$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function oi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ge(n,0,a,r);return}var i=qt(e.d,r.d);i&&ge(n,4,a,i),t(e,r,n,a)}function qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&z$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function T$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ge(n,6,a,{v:l,i:c-l}):c<l&&ge(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Oe(s,i[$],n,++a),a+=s.b||0}}function M$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],h=u[m],w=g.a,x=h.a,_=g.b,C=h.b,T=void 0,N=void 0;if(w===x){f++,Oe(_,C,t,f),f+=_.b||0,d++,m++;continue}var U=l[d+1],E=u[m+1];if(U){var j=U.a,W=U.b;N=x===j}if(E){var A=E.a,J=E.b;T=w===A}if(T&&N){f++,Oe(_,J,t,f),vn(i,t,w,C,m,c),f+=_.b||0,f++,$n(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,vn(i,t,x,C,m,c),Oe(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,$n(i,t,w,_,f),f+=_.b||0,f++,Oe(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(U&&j===A){f++,$n(i,t,w,_,f),vn(i,t,x,C,m,c),f+=_.b||0,f++,Oe(W,J,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;$n(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],h=u[m];vn(i,t,h.a,h.b,void 0,X),m++}(t.length>0||c.length>0||X)&&ge(n,8,a,{w:t,x:c,y:X})}var bc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+bc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=ge(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),ge(r,9,t,{w:l,A:i});return}$n(e,r,n+bc,a,t)}function hc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)hc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,h=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=fn(h[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function gc(e,r,n,a){return n.length===0?e:(hc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=D$(t,a);t===e&&(e=i)}return e}function D$(e,r){switch(r.$){case 0:return B$(e,r.s,r.u);case 4:return st(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return A$(e,r);case 5:return r.s(e);default:Qr(10)}}function B$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function A$(e,r){var n=r.s,a=F$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function F$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Zt(e){if(e.nodeType===3)return ft(e.textContent);if(e.nodeType!==1)return ft("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Sr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,$=e.childNodes,a=$.length;a--;)u=ar(Zt($[a]),u);return p(Ar,l,r,u)}function V$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var E$=R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Zt(l);return _c(i,function($){var s=c($),d=pc(u,s);l=gc(l,u,d,t),u=s})})});R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=lr.title,$=lr.body,s=Zt($);return _c(i,function(d){va=c;var m=l(d),f=Ar("body")(P)(m.eu),g=pc(s,f);$=gc($,s,g,t),s=f,va=0,u!==m.fL&&(lr.title=u=m.fL)})})});var fa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function _c(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}v(function(e,r){return o(lo,io,fr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(lo,io,fr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(lo,io,fr(function(){history.replaceState({},"",r),e()}))});var R$={addEventListener:function(){},removeEventListener:function(){}},U$=typeof window!="undefined"?window:R$;y(function(e,r,n){return vc(fr(function(a){function t(i){Gt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ue(e,r);return Ie(n)?oe(n.a):q});function wc(e,r){return fr(function(n){fa(function(){var a=document.getElementById(e);n(a?Br(r(a)):qv(us(e)))})})}function j$(e){return fr(function(r){fa(function(){r(Br(e()))})})}v(function(e,r){return wc(r,function(n){return n[e](),Dn})});v(function(e,r){return j$(function(){return U$.scroll(e,r),Dn})});y(function(e,r,n){return wc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Dn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var N$=v(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return oe(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var W$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?oe(d):q}a.push(L(ml,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?oe($):q}return n(L(ml,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var G$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/H$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function H$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Xt=new Float64Array(3),ii=new Float64Array(3),ci=new Float64Array(3),Y$=y(function(e,r,n){return new Float64Array([e,r,n])}),I$=function(e){return e[0]},O$=function(e){return e[1]},J$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var q$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function yc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(yc);function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(yc(e,r,n),n)}v(xc);function Sc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Sc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Z$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(sn);function dt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(dt);v(function(e,r){var n,a=Xt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var X$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var K$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},Q$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/ef(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function ef(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var rf=new Float64Array(16),nf=new Float64Array(16),af=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},tf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(Cc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Cc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(Lc);R(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],h=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],U=r[3],E=r[4],j=r[5],W=r[6],A=r[7],J=r[8],X=r[9],ce=r[10],fe=r[11],ie=r[12],me=r[13],ke=r[14],ye=r[15];return n[0]=a*C+l*T+d*N+h*U,n[1]=t*C+u*T+m*N+w*U,n[2]=i*C+$*T+f*N+x*U,n[3]=c*C+s*T+g*N+_*U,n[4]=a*E+l*j+d*W+h*A,n[5]=t*E+u*j+m*W+w*A,n[6]=i*E+$*j+f*W+x*A,n[7]=c*E+s*j+g*W+_*A,n[8]=a*J+l*X+d*ce+h*fe,n[9]=t*J+u*X+m*ce+w*fe,n[10]=i*J+$*X+f*ce+x*fe,n[11]=c*J+s*X+g*ce+_*fe,n[12]=a*ie+l*me+d*ke+h*ye,n[13]=t*ie+u*me+m*ke+w*ye,n[14]=i*ie+$*me+f*ke+x*ye,n[15]=c*ie+s*me+g*ke+_*ye,n}v(Pc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],h=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],U=r[9],E=r[10],j=r[12],W=r[13],A=r[14];return n[0]=a*h+c*w+$*x,n[1]=t*h+l*w+s*x,n[2]=i*h+u*w+d*x,n[3]=0,n[4]=a*_+c*C+$*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*U+$*E,n[9]=t*N+l*U+s*E,n[10]=i*N+u*U+d*E,n[11]=0,n[12]=a*j+c*W+$*A+m,n[13]=t*j+l*W+s*A+f,n[14]=i*j+u*W+d*A+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=sa(r,Xt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Sc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,h=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,C=h-m,T=g-f,N=c*c*$+u,U=w+d,E=h+m,j=w-d,W=l*l*$+u,A=n[0],J=n[1],X=n[2],ce=n[3],fe=n[4],ie=n[5],me=n[6],ke=n[7],ye=n[8],pr=n[9],br=n[10],Na=n[11],Gu=n[12],Hu=n[13],Yu=n[14],Iu=n[15];return a[0]=A*x+fe*_+ye*C,a[1]=J*x+ie*_+pr*C,a[2]=X*x+me*_+br*C,a[3]=ce*x+ke*_+Na*C,a[4]=A*T+fe*N+ye*U,a[5]=J*T+ie*N+pr*U,a[6]=X*T+me*N+br*U,a[7]=ce*T+ke*N+Na*U,a[8]=A*E+fe*j+ye*W,a[9]=J*E+ie*j+pr*W,a[10]=X*E+me*j+br*W,a[11]=ce*E+ke*j+Na*W,a[12]=Gu,a[13]=Hu,a[14]=Yu,a[15]=Iu,a});function of(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(of);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function cf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(cf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],h=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=h,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+h*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],h=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=h,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+h*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=xc(e,r,Xt),t=sa(dt(n,a,ii),ii),i=sa(dt(a,t,ci),ci),c=rf,l=nf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var li=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function Kt(e){for(var r=0;e.b;e=e.b)r++;return r}var lf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},uf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),vf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),$f=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),ff=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),sf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),df=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),pf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),bf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),hf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},gf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},_f=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},wf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},zc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},kc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},yf=function(e){e.gl.disable(e.gl.CULL_FACE)},xf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Sf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Cf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ui=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Lf=[gf,_f,wf,zc,kc,yf,xf,Sf,Cf];function vi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Pf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Tc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function zf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,h,w,x){var _;if(t===1)for(_=0;_<g;_++)f[h++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[h++]=g===1?w[C][x]:w[C][x][_]})}var u=Tc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(Kt(n.b)*s);Cn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function kf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Tf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Kt(r.b),indexBuffer:null,buffers:{}}}function Tf(e,r){var n=new Uint32Array(Kt(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function $i(e,r){return e+"#"+r}var Mc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),zc(n),kc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=$i(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=li++,$||($=vi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=li++,s||(s=vi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Pf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Mf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=$i(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Df(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=kf(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],h.buffers[f.name]===void 0&&(h.buffers[f.name]=zf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[f.name]);var w=Tc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Cn(J0(n),i.a),u=0;u<ui.length;u++){var T=n[ui[u]];T.toggle!==n.toggle&&T.enabled&&(Lf[u](n),T.enabled=!1,T.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.dV,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,h.numIndices)}}return Cn(t,e.g),r});function Mf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var h=g.name,w=e.getUniformLocation(f,h);switch(g.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(w,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(w,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(w,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[h]!==_&&(e.uniform1i(w,x),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(w,_),i[h]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Df(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Bf=y(function(e,r,n){return d$(r,{g:n,f:{},h:e},jf,Nf)}),Af=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Ff=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Vf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ef=v(function(e,r){e.contextAttributes.antialias=!0}),Rf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Uf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function jf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(O0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),lf(function(){return o(Mc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Nf(e,r){return r.f=e.f,Mc(r)}var B=av,Gn=ev,Dc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Gn,e,l,$)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),Qt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Qt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),fi=function(e){return p(Qt,y(function(r,n,a){return o(B,z(r,n),a)}),P,e)},Bc=1,Wf=2,Ac=0,_e=function(e){return{$:1,a:e}},eo=v(function(e,r){return{$:3,a:e,b:r}}),si=v(function(e,r){return{$:0,a:e,b:r}}),Fc=v(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Gf=function(e){return{$:2,a:e}},oe=function(e){return{$:0,a:e}},q={$:1},Hf=kv,Yf=Jv,De=cc,Pr=v(function(e,r){return o(Lv,e,Ta(r))}),ro=v(function(e,r){return b(o(Cv,e,r))}),Vc=function(e){return o(Pr,`
    `,o(ro,`
`,e))},Bn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Dr=function(e){return p(Bn,v(function(r,n){return n+1}),0,e)},If=tv,Of=y(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Jr=v(function(e,r){return p(Of,e,r,P)}),Ec=v(function(e,r){return p(If,e,o(Jr,0,Dr(r)-1),r)}),rr=Vv,Rc=function(e){var r=rr(e);return 97<=r&&r<=122},Uc=function(e){var r=rr(e);return r<=90&&65<=r},Jf=function(e){return Rc(e)||Uc(e)},qf=function(e){var r=rr(e);return r<=57&&48<=r},Zf=function(e){return Rc(e)||Uc(e)||qf(e)},Ae=function(e){return p(Bn,B,P,e)},en=wv,Xf=v(function(e,r){return`

(`+(De(e+1)+(") "+Vc(Kf(r))))}),Kf=function(e){return o(Qf,e,P)},Qf=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=en(n);if(h.$===1)return!1;var w=h.a,x=w.a,_=w.b;return Jf(x)&&o(Hf,Zf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(B,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,$=o(B,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Ae(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(De(Dr(s))+" ways:"));return o(Pr,`

`,o(B,g,o(Ec,Xf,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Ae(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return g+(Vc(o(Yf,4,f))+(`

`+m))}}),Fe=32,mt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pt=qu,no=dv,ao=v(function(e,r){return Ko(r)/Ko(e)}),es=fv,Ln=no(o(ao,2,Fe)),jc=L(mt,0,Ln,pt,pt),Nc=Xu,Wc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Gc=mv,bt=Zu,nr=v(function(e,r){return I(e,r)>0?e:r}),rs=function(e){return{$:0,a:e}},to=Ku,ns=v(function(e,r){e:for(;;){var n=o(to,Fe,e),a=n.a,t=n.b,i=o(B,rs(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),as=function(e){var r=e.a;return r},ts=v(function(e,r){e:for(;;){var n=no(r/Fe);if(n===1)return o(to,Fe,e).a;var a=o(ns,e,P),t=n;e=a,r=t;continue e}}),Hc=v(function(e,r){if(r.l){var n=r.l*Fe,a=Gc(o(ao,Fe,n-1)),t=e?Ae(r.z):r.z,i=o(ts,t,r.l);return L(mt,bt(r.p)+n,o(nr,5,a*Ln),i,r.p)}else return L(mt,bt(r.p),Ln,pt,r.p)}),os=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Hc,!1,{z:a,l:n/Fe|0,p:t});var i=Wc(p(Nc,Fe,r,e)),c=e,l=r-Fe,u=n,$=o(B,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),is=v(function(e,r){if(e<=0)return jc;var n=e%Fe,a=p(Nc,n,e-n,r),t=e-n-Fe;return S(os,r,t,e,P,a)}),Ie=function(e){return!e.$},D=Hv,Z=Uv,M=Gv,se=jv,da=Yv,cs=Iv,Te=Rv,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=Ar("div"),ls=function(e){return{$:2,a:e}},Yc=v(function(e,r){return e}),Ic=v(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),kr=function(e){return e},us=kr,di=qe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),vs=Tv,zr=yv,Wr=Pv,An=v(function(e,r){return e<1?r:p(Wr,e,zr(r),r)}),Ma=Dv,Da=function(e){return e===""},Ba=v(function(e,r){return e<1?"":p(Wr,0,e,r)}),Oc=Bv,mi=he(function(e,r,n,a,t){if(Da(t)||o(vs,"@",t))return q;var i=o(Ma,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Oc(o(An,c+1,t));if(l.$===1)return q;var u=l;return oe(Le(di,e,o(Ba,c,t),u,r,n,a))}else return oe(Le(di,e,t,q,r,n,a))}),pi=R(function(e,r,n,a){if(Da(a))return q;var t=o(Ma,"/",a);if(t.b){var i=t.a;return S(mi,e,o(An,i,a),r,n,o(Ba,i,a))}else return S(mi,e,"/",r,n,a)}),bi=y(function(e,r,n){if(Da(n))return q;var a=o(Ma,"?",n);if(a.b){var t=a.a;return L(pi,e,oe(o(An,t+1,n)),r,o(Ba,t,n))}else return L(pi,e,q,r,n)});v(function(e,r){if(Da(r))return q;var n=o(Ma,"#",r);if(n.b){var a=n.a;return p(bi,e,oe(o(An,a+1,r)),o(Ba,a,r))}else return p(bi,e,q,r)});var $s=Mv,io=function(e){},Fn=Br,fs=Fn(0),Jc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(Bn,e,r,Ae(d)):L(Jc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),sr=y(function(e,r,n){return L(Jc,e,r,0,n)}),re=v(function(e,r){return p(sr,v(function(n,a){return o(B,e(n),a)}),P,r)}),ma=$t,co=v(function(e,r){return o(ma,function(n){return Fn(e(n))},r)}),ss=y(function(e,r,n){return o(ma,function(a){return o(ma,function(t){return Fn(o(e,a,t))},n)},r)}),ds=function(e){return p(sr,ss(B),Fn(P),e)},ms=a$,ps=v(function(e,r){var n=r;return vc(o(ma,ms(e),n))}),bs=y(function(e,r,n){return o(co,function(a){return 0},ds(o(re,ps(e),r)))}),hs=y(function(e,r,n){return Fn(0)}),gs=v(function(e,r){var n=r;return o(co,e,n)});er.Task=r$(fs,bs,hs,gs);var _s=fc("Task"),lo=v(function(e,r){return _s(o(co,e,r))}),ws=E$,ys=gv,pa={$:1},qc=function(e){return{$:2,a:e}},Aa={$:0},je=v(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.B;return r.a},xs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return oe(o(je,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Zc=function(e){var r=e.b;return o(je,Aa,r)},_r=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ss=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Zc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,rn(n).b7)>0?o(ae,xs,_r(o(je,pa,t))):kr)(o(je,qc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Ic,l.eA,Ke(r,{b7:l.b7+r.eJ})),s=o(e,$,u);return o(je,Aa,{B:z($,s),ab:P,T:o(B,t.B,t.T)})}}),Xc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Cs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Ls=v(function(e,r){return Ae(p(Cs,e,r,P))}),Kc=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,h=g.a,w=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,h,o(Ls,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,h,p(Kc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),Ps=v(function(e,r){return p(Kc,0,e,r)}),zs=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Ae(n),ve(b([a]),t)),c=o(Ps,e,i),l=o(Xc,e,i);if(l.b){var u=l.a,$=l.b;return o(je,pa,{B:u,ab:$,T:Ae(c)})}else{var s=Ae(c);if(s.b){var d=s.a,m=s.b;return o(je,pa,{B:d,ab:P,T:m})}else return r}}),ks=function(e){var r=e.b;return o(je,pa,r)},Ts=function(e){var r=e.b;return o(je,qc({cY:rn(e).b7}),r)},Ms=v(function(e,r){switch(e.$){case 1:return ks(r);case 2:return Zc(r);case 3:return Ts(r);default:var n=e.a;return o(zs,n,r)}}),Qc=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ds=v(function(e,r){return Ke(r,{av:e(r.av)})}),Bs=function(e){return{$:3,a:e}},As=function(e){return{$:2,a:e}},el=v(function(e,r){return{$:0,a:e,b:r}}),Fs=v(function(e,r){return{$:1,a:e,b:r}}),Be=v(function(e,r){if(r.$)return q;var n=r.a;return oe(e(n))}),K=function(e){return e<0?-e:e},uo=Av,Vs=y(function(e,r,n){return o(_r,0/0,uo(o(e,r,n)))}),rl=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Es=Sv,nl=function(e){return p(Es,B,P,e)},Rs=v(function(e,r){var n=o(rl,function(a){return a!=="0"&&a!=="."},nl(r));return ve(e&&n?"-":"",r)}),te=cc,ht=_v,al=Ev,tl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",tl(t))}else{var i=rr(r);return i>=48&&i<57?o(ht,al(i+1),n):"0"}},gt=sv,Us=hv,Fa=function(e){return o(ht,e,"")},ol=y(function(e,r,n){return e<=0?n:p(ol,e>>1,ve(r,r),e&1?ve(n,r):n)}),Pn=v(function(e,r){return p(ol,e,r,"")}),_t=y(function(e,r,n){return ve(n,o(Pn,e-zr(n),Fa(r)))}),wt=xv,il=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},js=function(e){var r=o(ro,"e",te(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(_r,0,Oc(o($s,"+",t)?o(An,1,t):t)),c=il(n),l=c.a,u=c.b,$=ve(l,u),s=i<0?o(_r,"0",o(Be,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Be,Qc(Fa),en(ve(o(Pn,K(i),"0"),$))))):p(_t,i+1,"0",$);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},Ns=y(function(e,r,n){if(gt(n)||Us(n))return te(n);var a=n<0,t=il(js(K(n))),i=t.a,c=t.b,l=zr(i)+r,u=ve(o(Pn,-l+1,"0"),p(_t,l,"0",ve(i,c))),$=zr(u),s=o(nr,1,l),d=o(e,a,p(Wr,s,$,u)),m=p(Wr,0,s,u),f=d?wt(o(_r,"1",o(Be,tl,en(wt(m))))):m,g=zr(f),h=f==="0"?f:r<=0?ve(f,o(Pn,K(r),"0")):I(r,zr(c))<0?p(Wr,0,g-r,f)+("."+p(Wr,g-r,g,f)):ve(i+".",p(_t,r,"0",c));return o(Rs,a,h)}),cl=Ns(v(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Ws=Vs(cl),Gs=y(function(e,r,n){var a=o(ao,10,K(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ws,t,n)}),ll=nv,vo=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ll,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return oe(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},qr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(H,0,r,n,S(H,1,$,s,d,m),S(H,1,i,c,l,u))}else return S(H,e,i,c,S(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,h=f.c,w=f.d,x=f.e,m=a.e;return S(H,0,$,s,S(H,1,g,h,w,x),S(H,1,r,n,m,t))}else return S(H,e,r,n,a,t)}),yt=y(function(e,r,n){if(n.$===-2)return S(H,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ll,e,t);switch(u){case 0:return S(qr,a,t,i,p(yt,e,r,c),l);case 1:return S(H,a,t,r,c,l);default:return S(qr,a,t,i,c,p(yt,e,r,l))}}),bn=y(function(e,r,n){var a=p(yt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(H,1,t,i,c,l)}else{var u=a;return u}}),Hs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ul=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,h=m.d,w=m.e,x=$.e;return S(H,0,f,g,S(H,1,n,a,S(H,0,i,c,l,u),h),S(H,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(H,1,n,a,S(H,0,i,c,l,u),S(H,0,s,d,m,x))}else return e},hi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,h=f.c,w=f.d,x=f.e;return S(H,0,i,c,S(H,1,u,$,s,d),S(H,1,n,a,m,S(H,0,g,h,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,h=T.c,w=T.d,x=T.e;return S(H,1,n,a,S(H,0,i,c,C,m),S(H,0,g,h,w,x))}else return e},Ys=za(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(H,n,l,u,$,S(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,hi(r)}else break e;else return c.a,c.d,hi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(H,r,n,a,ra(t),l);var u=ul(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,$,s,d,ra(m),f)}else return tr}else return S(H,r,n,a,ra(t),l)}else return tr},hn=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(H,n,a,t,o(hn,e,i),c);var u=ul(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,$,s,d,o(hn,e,m),f)}else return tr}else return S(H,n,a,t,o(hn,e,i),c);else return o(Is,e,Nt(Ys,e,r,n,a,t,i,c))}),Is=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=Hs(c);if(l.$===-1){var u=l.b,$=l.c;return S(qr,n,u,$,i,ra(c))}else return tr}else return S(qr,n,a,t,i,o(hn,e,c))}else return tr}),Os=v(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(vo,e,n));if(a.$)return o(Os,e,n);var t=a.a;return p(bn,e,t,n)}),Js=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Fs,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(el,z(i,c),p(Gs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===3?Bs(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===2?As(n):a}))}},qs=function(e){return Ds(Js(e))},Zs=v(function(e,r){return o(re,qs(e),r)}),Xs=v(function(e,r){return Ke(r,{eA:o(Zs,e,r.eA)})}),Ks=v(function(e,r){var n=r.a,a=r.b;return o(je,n,Ke(a,{B:o(Qc,Xs(e),a.B)}))}),Qs=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),ed=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,Ke(t,{B:o(Qs,o(e,i.a,r),i)}))}),rd=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(Ss,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Ks,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(ed,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ms,l,a.G)})}}),nd=v(function(e,r){return o(je,Aa,{B:z(e,r(e)),ab:P,T:P})}),ad=t$,gi=ad(P),ba=Wv,zn=Nv,td=u$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Te({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Te({eo:d,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ba(zn)))},o(M,"left",Z))},o(M,"pressedKeys",ba(zn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Te({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Te({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Te({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se))))),od=function(e){return{$:4,a:e}},id={$:0},cd=uc,Ye=v(function(e,r){return o(mc,e,cd(r))}),Y=Ye("className"),ld=function(e){var r=e.b.B;return r.b},ha=Ye("id"),ud=m$,ga=ud,vd=p$,ee=vd,$d={$:1},fd=function(e){return{$:3,a:e}},sd=function(e){return{$:5,a:e}},_i=Ar("a"),$o=Ar("button"),wi=function(e){return o(Ye,"href",g$(e))},dd=Sr("clip-rule"),xe=Sr("d"),md=Sr("fill"),vl=sc("http://www.w3.org/2000/svg"),pd=vl("svg"),bd=Sr("viewBox"),hd=o(b$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ve=pd(b([bd("0 0 24 24"),md("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),hd("http://www.w3.org/2000/svg")])),gd=Sr("fill-rule"),Se=vl("path"),Tr={eD:Ve(b([o(Se,b([xe("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ve(b([o(Se,b([xe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ve(b([o(Se,b([xe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ve(b([o(Se,b([xe("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Se,b([xe("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ve(b([o(Se,b([xe("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Se,b([xe("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ve(b([o(Se,b([xe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ve(b([o(Se,b([xe("M7 5V19L18 12L7 5Z")]),P)])),fr:Ve(b([o(Se,b([xe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ve(b([o(Se,b([xe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ve(b([o(Se,b([gd("evenodd"),dd("evenodd"),xe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ve(b([o(Se,b([xe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ve(b([o(Se,b([xe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},_d=function(e){return{$:0,a:e}},$l=dc,fl=v(function(e,r){return o($l,e,_d(r))}),fo=function(e){return o(fl,"click",Te(e))},yi=Ye("target"),wd=Ye("title"),xt=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(H,n,a,o(e,a,t),o(xt,e,i),o(xt,e,c))}),yd=ft,$r=yd,xd=function(e){return p(Qt,y(function(r,n,a){return o(B,n,a)}),P,e)},Sd=v(function(e,r){return{$:3,a:e,b:r}}),Cd=v(function(e,r){return{$:2,a:e,b:r}}),Ld=v(function(e,r){return{$:0,a:e,b:r}}),Pd=v(function(e,r){return{$:1,a:e,b:r}}),dr=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),zd=L(dr,0/255,0/255,0/255,1),kd=uc,sl=v(function(e,r){return o(mc,e,kd(r))}),Td=sl("checked"),Je=pv,Md=y(function(e,r,n){return ve(o(Pn,e-zr(n),Fa(r)),n)}),_a=iv,dl=function(e){var r=function(n){return n<10?De(n):Fa(al(87+n))};return e<16?r(e):ve(dl(e/16|0),r(o(_a,16,e)))},Dd=o(ae,dl,o(Md,2,"0")),so=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},Bd=function(e){var r=so(e),n=r.cN,a=r.cd,t=r.b5;return o(Pr,"",o(B,"#",o(re,o(ae,Je,Dd),b([n*255,a*255,t*255]))))},St=Ye("htmlFor"),Ad=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),wa=v(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return e(n)}}),Fd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),mo=v(function(e,r){return p(sr,Fd(e),P,r)}),ml=R(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Vd=W$,Ed=Fv,Rd=v(function(e,r){if(r.$)return _e(e);var n=r.a;return $e(n)}),Ud=N$,jd=function(e){return o(Ud,{ew:!1,fg:!1},e)},po=function(e){if(e.b){var r=e.a;return e.b,oe(r)}else return q},Nd=v(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return $e(e(n))}}),Wd=function(e){return{$:2,a:e}},Gd=function(e){return{$:0,a:e}},Hd=function(e){return{$:1,a:e}},Ha=v(function(e,r){return rr(r)-rr(e)}),Ya=y(function(e,r,n){var a=rr(n);return I(rr(e),a)<1&&I(a,rr(r))<1}),Yd=v(function(e,r){var n=function(t){return I(t,e)<0?$e(t):_e(Hd(r))},a=p(Ya,"0","9",r)?$e(o(Ha,"0",r)):p(Ya,"a","z",r)?$e(10+o(Ha,"a",r)):p(Ya,"A","Z",r)?$e(10+o(Ha,"A",r)):_e(Gd(r));return o(wa,n,a)}),pl=v(function(e,r){var n=en(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(wa,function(c){return o(wa,function(l){return $e(c+l*e)},o(pl,e,i))},o(Yd,e,t))}),Id=v(function(e,r){return 2<=e&&e<=36?o(pl,e,wt(r)):_e(Wd(e))}),Od=Id(16),Jd=y(function(e,r,n){return L(dr,e,r,n,1)}),qd=R(function(e,r,n,a){return L(dr,e,r,n,a)}),Vn=ov,Zd=v(function(e,r){var n=o(Vn,10,e);return Je(r*n)/n}),Xd=zv,Kd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=nl(n);if(a.b&&!a.b.b){var t=a.a;return Ed(b([t,t]))}else return n};return o(ae,Xd,o(ae,function(n){return o(Be,function(a){return p(Vd,1,a,n)},jd(e))},o(ae,Ad(po),o(ae,Be(function(n){return n.fG}),o(ae,Be(mo(kr)),o(ae,Rd("Parsing hex regex failed"),wa(function(n){var a=o(re,o(ae,r,o(ae,Od,Nd(es))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return $e(L(qd,t/255,c/255,u/255,o(Zd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return $e(p(Jd,t/255,c/255,u/255))}else break e;return _e("Parsing ints from hex failed")})))))))}(),ya=Ar("input"),Ct=Ar("label"),Lt=Ye("name"),bl=v(function(e,r){return p(sr,M,r,e)}),Qd=o(bl,b(["target","checked"]),Z),em=function(e){return o(fl,"change",o(da,e,Qd))},rm=function(e){return z(e,!0)},nm=function(e){return{$:1,a:e}},am=v(function(e,r){return o($l,e,nm(r))}),tm=o(bl,b(["target","value"]),zn),bo=function(e){return o(am,"input",o(da,rm,o(da,e,tm)))},hl=Ye("max"),gl=Ye("min"),_l=function(e){return o(Ye,"step",e)},xa=Ye("type"),ho=Ye("value"),xi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(O,P,b([o(Ct,b([St(r)]),b([o(O,b([Y("relative w-full")]),b([o(O,b([Y("inline-block")]),b([$r(r)])),o(O,b([Y("inline-block float-right")]),b([$r(te(n))]))]))])),o(ya,b([xa("range"),o(ee,"width","100%"),ha(r),Lt(r),gl(te(a)),hl(te(t)),ho(te(n)),_l(te(i)),bo(o(ae,uo,o(ae,_r(42),c)))]),P)]))},om=v(function(e,r){if(r.$)return e;var n=r.a;return n}),im=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,b([Y("h-12 py-4")]),b([o(Ct,b([Y("block"),St(e)]),b([o(ya,b([Y("relative bottom-[1px] align-middle mr-2"),xa("checkbox"),ha(e),Lt(e),em(Sd(e)),Td(c)]),P),$r(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return xi({cg:e,cs:i,cw:t,cA:Ld(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return xi({cg:e,cs:i,cw:t,cA:o(ae,Je,Pd(e)),cW:1,c1:c});default:var c=r.a;return o(O,P,b([o(O,b([o(ee,"margin-bottom","6px")]),b([o(Ct,b([St(e)]),b([$r(e)]))])),o(ya,b([xa("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),ha(e),Lt(e),bo(function(l){return o(Cd,e,o(om,zd,Kd(l)))}),ho(Bd(c))]),P)]))}}),cm=function(e){return o(O,b([Y("p-4 border-y-[0.5px] border-white20")]),b([o(O,b([Y("text-lg pb-2")]),b([$r(e.fh)])),o(O,b([Y("pl-2 pr-2")]),xd(o(xt,im,e.av)))]))},lm=function(e){return o(O,b([Y("text-xs text-white60")]),o(re,cm,e))},um=function(e){return o(O,b([Y("absolute left-[104px] bottom-2 text-sm text-white40")]),b([$r("clock: "+o(cl,3,rn(e).b7))]))},vm=function(e){e.a;var r=e.b.T;return o(Be,function(n){return Je(60/(rn(e).b7-n))},o(Be,o(ae,as,function(n){return n.b7}),po(o(Xc,59,r))))},$m=function(e){return o(O,b([Y("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=vm(e);if(r.$===1)return b([$r("... Fps")]);var n=r.a;return b([$r(De(n)+" Fps")])}())},fm=function(e){return{$:0,a:e}},sm=function(e){var r=e.b.T;return Dr(r)},dm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Dr(r)+1+Dr(n)},mm=function(e){return o(ya,b([Y("absolute w-full"),xa("range"),gl(De(0)),hl(De(dm(e)-1)),ho(De(sm(e))),_l(De(1)),bo(o(ae,uo,o(ae,_r(42),o(ae,Je,fm))))]),P)},Si={$:1},Ci={$:3},Li={$:2},Pt=function(e){return!e.b},wl=sl("disabled"),Ia=y(function(e,r,n){return o($o,b([Y("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Y(n),wl(e),fo(r)]),b([$r("REC")]))}),Oa=y(function(e,r,n){return o($o,b([Y("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),wl(e),fo(n)]),b([o(O,b([Y("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),pm=function(e){var r=e.a,n=e.b.ab;return o(O,b([Y("py-1")]),b([function(){switch(r.$){case 0:return p(Ia,!1,Si,"text-red-500 font-bold");case 1:return p(Ia,!1,Li,"text-white60 hover:text-white80 font-bold");default:return p(Ia,!0,Li,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Oa,Pt(n),Tr.fq,Ci);case 1:return p(Oa,Pt(n),Tr.fq,Ci);default:return p(Oa,!1,Tr.fp,Si)}}()]))},bm=function(e){return o(O,b([Y("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([mm(e),pm(e),$m(e),um(e)]))},hm=function(e){var r=e.a;return gr(r,Aa)},gm=v(function(e,r){var n=hm(r.G)?o(O,P,P):o(O,b([Y("absolute pointer-events-none w-8 h-8"),o(ee,"left",te(e.fs.fU+.5*e.cT.fS)+"px"),o(ee,"top",te(-e.fs.fY+.5*e.cT.eW)+"px")]),b([o(O,b([Y(e.fs.e4?"text-black80":"text-black40")]),b([Tr.fs]))]));return o(O,P,b([n]))}),_m=v(function(e,r){var n=o($o,b([Y(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),fo($d),wd("Distraction Free Mode")]),b([Tr.f0])),a=40,t=260,i=o(O,b([Y("absolute w-8 bottom-12")]),b([o(_i,b([Y("text-twitterBlue40 hover:text-twitterBlue"),wi("https://twitter.com/AzizErkalSelman"),yi("_blank")]),b([Tr.fN]))])),c=80,l=o(O,b([Y("absolute w-8 bottom-2")]),b([o(_i,b([Y("text-githubCat40 hover:text-githubCat"),wi("https://github.com/erkal/elm-3d-playground-exploration"),yi("_blank")]),b([Tr.eQ]))])),u=e.cT.fS>640?F(e.cT.eW,a+t,e.cT.fS-(a+t)):F(e.cT.eW-c,a,e.cT.fS-a),$=u.a,s=u.b,d=u.c;return r.aL?o(O,b([Y("fixed w-10 h-10 p-1")]),b([n])):o(O,P,b([o(O,b([Y("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",te(a)+"px")]),b([n,i,l])),o(O,b([Y("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",te(t)+"px"),o(ee,"height",te($)+"px")]),b([o(ga,fd,lm(rn(r.G).eA))])),o(O,b([Y("absolute bottom-0"),o(ee,"left",te(s)+"px"),o(ee,"height",te(c)+"px"),o(ee,"width",te(d)+"px")]),b([o(ga,sd,bm(r.G))])),o(gm,e,r)]))}),wm=y(function(e,r,n){var a=ld(n.G),t=rn(n.G);return o(O,b([Y("bg-black40"),Y("select-none"),Y("antialiased"),Y("font-mono"),o(ee,"width",te(t.cT.fS)+"px"),o(ee,"height",te(t.cT.eW)+"px")]),b([o(O,b([Y("fixed")]),b([o(ga,Yc(id),o(e,t,a))])),o(O,b([ha("gui")]),b([o(_m,t,n),o(ga,od,o(r,t,a))]))]))}),ym=qe(function(e,r,n,a,t,i){var c=v(function(u,$){return z(L(rd,r,i,u,$),gi)}),l=function(u){var $=o(Ic,n,u.e1);return z({aL:u.e1.cT.fS<500,G:o(nd,$,a)},gi)};return ws({e0:l,fH:Yc(td(ls)),fO:c,fQ:o(wm,e,t)})}),xm=R(function(e,r,n,a){return Le(ym,e,r,n,a,v(function(t,i){return o(O,P,P)}),y(function(t,i,c){return c}))}),Sm=function(e){return{}},Cm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),yl=tr,Lm=function(e){return p(Bn,v(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),yl,e)},Pm=y(function(e,r,n){return p(Cm,e,r,Lm(n))}),Pi=Pm,Yn=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(el,z(a,t),n))}),ur=cv,zm=b([p(Pi,"Camera",!0,b([p(Yn,"camera distance",z(3,8),4),p(Yn,"camera azimuth",z(0,2*ur),0),p(Yn,"camera elevation",z(-ur/2,ur/2),.5)])),p(Pi,"Parameters",!0,b([p(Yn,"sun size",z(.1,.5),.3)]))]),km=v(function(e,r){return r}),zt=L(dr,52/255,101/255,164/255,1),Tm=L(dr,115/255,210/255,22/255,1),go=function(e){return{$:5,a:e}},xl=function(e){return go(e)},_o=v(function(e,r){return{$:4,a:e,b:r}}),Sl=function(e){return e},nn=v(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Mm=v(function(e,r){return Sl(z(e,o(nn,r,e)))}),Cl=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Dm=v(function(e,r){var n=r.a,a=r.b,t=r.c;return p(Cl,e(n),e(a),e(t))}),Ne=function(e){return e},mr={fU:0,fY:0,c6:0},Ja=v(function(e,r){return o(_o,e,o(Mm,mr,o(Dm,Ne,r)))}),Bm=L(dr,204/255,0/255,0/255,1),Am=xl(b([o(Ja,Bm,F(100,0,0)),o(Ja,Tm,F(0,100,0)),o(Ja,zt,F(0,0,100))])),Fm=v(function(e,r){return o(Be,function(n){if(n.$)return 0;var a=n.b;return a},o(vo,e,r.av))}),Vm=v(function(e,r){return o(_r,0,po(o(mo,Fm(e),r)))}),Em=v(function(e,r){return o(Vm,e,r.eA)}),na=Em,Rm=$v,Um=function(e){return e},kt=function(e){var r=e;return-r},jm=v(function(e,r){var n=e,a=r;return{fU:n.fY*a.c6-n.c6*a.fY,fY:n.c6*a.fU-n.fU*a.c6,c6:n.fU*a.fY-n.fY*a.fU}}),Ll=function(e){var r=e;return r.c4},Pl=function(e){var r=e;return r.c5},Nm=function(e){return o(jm,Ll(e),Pl(e))},an=function(e){var r=e;return r.cB},Zr=lv,Xr=uv,aa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=Xr(c),$=a.eH,s=$,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,h=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c6*u,T=l*C,N=2*(w-T),U=2*(w+T),E=d*C,j=2*(E+h),W=2*(E-h),A=g*C,J=2*(A-m),X=2*(A+m),ce=C*C,fe=1-2*(x+ce),ie=1-2*(f+ce);return{fU:fe*i.fU+N*i.fY+j*i.c6,fY:U*i.fU+ie*i.fY+J*i.c6,c6:W*i.fU+X*i.fY+_*i.c6}}),En=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=Xr(c),$=a.cB,s=$,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c6-s.c6,g=a.eH,h=g,w=h.fU*u,x=l*w,_=w*w,C=h.fY*u,T=l*C,N=w*C,U=C*C,E=1-2*(_+U),j=h.c6*u,W=l*j,A=2*(N-W),J=2*(N+W),X=w*j,ce=2*(X+T),fe=2*(X-T),ie=C*j,me=2*(ie-x),ke=2*(ie+x),ye=j*j,pr=1-2*(U+ye),br=1-2*(_+ye);return{fU:s.fU+pr*d+A*m+ce*f,fY:s.fY+J*d+br*m+me*f,c6:s.c6+fe*d+ke*m+E*f}}),tn=function(e){return e},Fr=function(e){var r=e;return r.c4},Vr=function(e){var r=e;return r.c5},Er=function(e){var r=e;return r.c7},zl=y(function(e,r,n){return tn({cB:p(En,e,r,an(n)),c4:p(aa,e,r,Fr(n)),c5:p(aa,e,r,Vr(n)),c7:p(aa,e,r,Er(n))})}),zi=y(function(e,r,n){return p(zl,e(n),r,n)}),kl=function(e){var r=e;return r.eH},Tl=v(function(e,r){return tn({cB:o(nn,e,an(r)),c4:Fr(r),c5:Vr(r),c7:Er(r)})}),Wm=v(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c6:n*a.c6}}),Gm=y(function(e,r,n){return o(Tl,o(Wm,r,e),n)}),Hm=y(function(e,r,n){return p(Gm,kl(e(n)),r,n)}),Cr=v(function(e,r){return{eH:r,cB:e}}),Ym=function(e){var r=e;return o(Cr,r.cB,r.c4)},Im=function(e){var r=e;return o(Cr,r.cB,r.c5)},Om=function(e){var r=e;return o(Cr,r.cB,r.c7)},Jm=function(e){var r=tn({cB:e.aR,c4:Pl(e.dl),c5:Nm(e.dl),c7:Ll(e.dl)}),n=p(Hm,Om,e.cc,p(zi,Ym,kt(e.bC),p(zi,Im,e.bx,r)));return n},qm=function(e){return{$:0,a:e}},We=function(e){var r=e;return K(r)},ta=function(e){var r=e;return .5*r},Zm=vv,Xm=function(e){var r=e;return Zm(r)},Km=function(e){var r=ta(We(e.ej)),n=Xm(r);return{cM:qm(n),c2:e.c2}},vr=function(e){return e},Ml=kr,Mr=function(e){return e},Qm=Mr({fU:1,fY:0,c6:0}),wo=Qm,Dl=Mr({fU:0,fY:0,c6:1}),Va=Dl,e0=Ml({cB:mr,c4:Va,c5:wo}),r0=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cc;return Km({ej:vr(2*Rm(.5)),c2:Jm({bx:vr(n),cc:Ne(t),bC:vr(a),aR:Um(r),dl:e0})})},n0=function(e){return r0({bx:o(na,"camera azimuth",e),cc:o(na,"camera distance",e),bC:o(na,"camera elevation",e),aR:{fU:0,fY:0,c6:0}})},Gr=function(e){return e*ur/180},yo=v(function(e,r){return{$:2,a:e,b:r}}),a0=y(function(e,r,n){return{k:o(Cr,e,r),e9:We(n.e9),fu:We(n.fu)}}),Bl=Mr({fU:0,fY:1,c6:0}),t0=y(function(e,r,n){return o(yo,e,p(a0,mr,Bl,{e9:Ne(n),fu:Ne(r)}))}),Tt=function(e){return{$:0,a:e}},Al=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Fl=y(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),qa=function(e){return p(Fl,0,1,e<=.04045?e/12.92:o(Vn,(e+.055)/1.055,2.4))},Rn=Y$,o0=function(e){var r=so(e),n=r.cN,a=r.cd,t=r.b5;return p(Rn,qa(n),qa(a),qa(t))},oa=function(e){return p(Al,0,Tt(o0(e)),Tt(0))},Vl=v(function(e,r){return{$:0,a:e,b:r}}),xo=v(function(e,r){return{$:3,a:e,b:r}}),El=v(function(e,r){return{$:1,a:e,b:r}}),i0=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),c0=function(e){var r=e;return r},So=function(e){var r=e;return c0(r.er)},Co=function(e){var r=e;return r.aK},l0=v(function(e,r){return{er:o(Tl,e,So(r)),aK:Co(r)}}),u0=v(function(e,r){var n=r;return o(Cr,o(nn,e,n.cB),n.eH)}),v0=v(function(e,r){var n=r;return{k:o(u0,e,n.k),e9:n.e9,fu:n.fu}}),Lo=function(e){var r=e;return r},Rl=v(function(e,r){var n=Lo(r),a=n.a,t=n.b;return Sl(z(e(a),e(t)))}),$0=v(function(e,r){return o(Rl,nn(e),r)}),Po=function(e){var r=e;return r.ey},zo=function(e){var r=e;return r.fu},ko=v(function(e,r){return{ey:r,fu:We(e)}}),f0=v(function(e,r){return o(ko,zo(r),o(nn,e,Po(r)))}),Ul=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return F(e(a),e(t),e(i))}),s0=v(function(e,r){return o(Ul,nn(e),r)}),jl=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(i0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Vl,s,o(l0,i,c));case 1:var s=r.a,l=r.b;return o(El,s,o(s0,i,l));case 3:var s=r.a,u=r.b;return o(xo,s,o(f0,i,u));case 2:var s=r.a,$=r.b;return o(yo,s,o(v0,i,$));case 4:var s=r.a,d=r.b;return o(_o,s,o($0,i,d));default:var m=r.a;return go(o(re,jl(F(n,a,t)),m))}}),ki=function(e){return jl(F(e,0,0))},d0=y(function(e,r,n){return{er:p(zl,e,r,So(n)),aK:Co(n)}}),m0=v(function(e,r){var n=o(En,e,r),a=o(aa,e,r);return function(t){var i=t;return o(Cr,n(i.cB),a(i.eH))}}),p0=y(function(e,r,n){var a=n;return{k:p(m0,e,r,a.k),e9:a.e9,fu:a.fu}}),b0=y(function(e,r,n){return o(Rl,o(En,e,r),n)}),h0=y(function(e,r,n){return o(ko,zo(n),p(En,e,r,Po(n)))}),g0=y(function(e,r,n){return o(Ul,o(En,e,r),n)}),To=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Vl,l,p(d0,e,r,a));case 1:var l=n.a,t=n.b;return o(El,l,p(g0,e,r,t));case 3:var l=n.a,i=n.b;return o(xo,l,p(h0,e,r,i));case 2:var l=n.a,c=n.b;return o(yo,l,p(p0,e,r,c));case 4:var l=n.a,u=n.b;return o(_o,l,p(b0,e,r,u));default:var $=n.a;return go(o(re,o(To,e,r),$))}}),Mo=Bl,_0=o(Cr,mr,Mo),Ti=v(function(e,r){return p(To,_0,vr(e),r)}),w0=o(Cr,mr,Va),Mi=v(function(e,r){return p(To,w0,vr(e),r)}),Mt=v(function(e,r){return o(xo,e,o(ko,Ne(r),mr))}),y0=v(function(e,r){return(r-Gc(r/e)*e)/e}),Di=v(function(e,r){return 360*o(y0,e,r)}),x0=L(dr,255/255,255/255,255/255,1),S0=function(e){var r=o(Mi,Gr(20),p(t0,oa(zt),.2,.05)),n=o(Mi,Gr(20),o(Ti,Gr(o(Di,3,e.b7)),o(ki,.2,o(Mt,oa(x0),.04)))),a=o(Mt,oa(zt),.1);return o(Ti,Gr(o(Di,10,e.b7)),o(ki,1,xl(b([a,n,r]))))},Za=function(e){return e/255},C0=y(function(e,r,n){return L(dr,Za(e),Za(r),Za(n),1)}),L0=L(dr,245/255,121/255,0/255,1),P0=function(e){return o(Mt,oa(L0),o(na,"sun size",e))},z0=function(e){return e},k0=function(e){return Ne(.01*e)},Bi=function(e){return e},T0=function(e){return e},M0=function(e){return{$:0,a:e}},D0=M0,B0={$:3},A0=B0,F0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),V0=F0,E0=v(function(e,r){return r.b?p(sr,B,r,e):e}),Ge=function(e){return p(sr,E0,P,e)},Do=v(function(e,r){return Ge(o(re,e,r))}),R0=function(e){return{$:1,a:e}},U0=R0,j0=function(e){return o(Sr,"height",De(e))},N0=function(e){return s$(h$(e))},W0=N0,G0=function(e){return{$:2,a:e}},H0=G0,Y0=function(e){return o(Pr,"",e)},I0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Je(l*1e3)/1e3},c=function(l){return Je(l*1e4)/100};return Y0(b(["rgba(",te(c(r)),"%,",te(c(n)),"%,",te(c(a)),"%,",te(i(t)),")"]))},O0=v(function(e,r){switch(r.$){case 0:return o(Af,e,r);case 1:return o(Ff,e,r);case 2:return o(Vf,e,r);case 3:return o(Ef,e,r);case 4:return o(Rf,e,r);default:return o(Uf,e,r)}}),J0=v(function(e,r){switch(r.$){case 0:return o(vf,e,r);case 1:return o($f,e,r);case 2:return o(ff,e,r);case 3:return o(sf,e,r);case 4:return o(df,e,r);case 5:return o(mf,e,r);case 6:return o(pf,e,r);case 7:return o(bf,e,r);default:return hf(e)}}),q0=y(function(e,r,n){return p(Bf,e,r,n)}),Ai=function(e){var r=e;return r},on=X$,Xa=L(on,1,1,1,1),Ze=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),Z0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),X0=v(function(e,r){var n=e,a=r.fU,t=r.fY;return p(Z0,n*a/t,n,n*(1-a-t)/t)}),K0=function(e){var r=e.a,n=e.b,a=e.c;return p(Rn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Bo=v(function(e,r){return K0(o(X0,e,r))}),Nl=v(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=af,Q0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ka=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(on,a.bX,a.bX,a.bX,i);return Le(t,e,c,Q0(a),a.dp,r,n)}),Wl=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Nl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,h=o(B,S(Ka,e,r,n,a,g),i.M);return{M:h,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(B,S(Ka,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(B,S(Ka,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(Bn,L(Wl,e,r,n,a),i,T)}}),ep=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Gl=ep,Ao=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),rp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,518,r,n,a)},np=v(function(e,r){return{$:6,a:e,b:r}}),ap=np,Hl=b([rp({V:1,W:0,Z:!1}),L(Gl,!1,!1,!1,!1),o(ap,0,1)]),Kr=519,Fo=8,Yl=15,Yr=7681,tp={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=uf,op=v(function(e,r){return{$:0,a:e,b:r}}),ip=op({df:1,$7:0,dV:5}),Me=G$,cp=ip(b([{bT:o(Me,-1,-1)},{bT:o(Me,1,-1)},{bT:o(Me,-1,1)},{bT:o(Me,1,1)}])),lp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},up=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Vo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(ae,c($.bl),o(ae,l($.a8),o(ae,l($.bt),l($.bu))))};return o(u,n,o(u,r,p(up,a,t,i)))}),Eo=function(e){return p(Vo,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Ro=function(e){return S(ne,b([Eo(e),L(Gl,!1,!1,!1,!1)]),lp,tp,cp,{})},vp=Ro({a8:Yr,cp:0,cO:Fo,bl:Kr,c3:Yl,bt:Yr,bu:Yr}),$p=516,Fi=5386,we=7680,fp=function(e){return o(Vn,2,e+4)},Il=function(e){return Ro({a8:we,cp:Yl,cO:Fo,bl:$p,c3:fp(e),bt:Fi,bu:Fi})},sp=y(function(e,r,n){return Ge(b([p(Ze,e,n,Hl),b([Il(r),vp])]))}),dp=v(function(e,r){return Ge(o(Ec,sp(e),r))}),mp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,513,r,n,a)},pp=mp({V:1,W:0,Z:!0}),bp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},hp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,h=$.c;return bp(s)(d)(m)(f)(g)(h)(r)(n)(a)(t)});return o(l,i,c)},gp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vi=v(function(e,r){var n=e,a=r;return p(gp,32774,n,a)}),_p=1,Ei=771,wp=770,Uo=hp({bv:0,aH:o(Vi,_p,Ei),by:0,bA:o(Vi,wp,Ei),bF:0,bV:0}),Rr=b([pp,Uo]),yp=function(e){var r=e;return r.dO},xp=function(e){var r=e;return r.dP},Ol=function(e){var r=e;return r.dQ},Sp=function(e){var r=e;return r.dR},Cp=function(e){var r=e;return r.dS},Jl=function(e){var r=e;return r.dT},Ir=v(function(e,r){var n=e,a=r;return a-n}),ql=function(e){return F(o(Ir,Sp(e),yp(e)),o(Ir,Cp(e),xp(e)),o(Ir,Jl(e),Ol(e)))},Ri=function(e){var r=e;return an(r)},Lp=function(e){return e},Pp=function(e){return tn({cB:Lp({fU:e.H,fY:e.I,c6:e.J}),c4:Mr({fU:e.q,fY:e.r,c6:e.s}),c5:Mr({fU:e.t,fY:e.u,c6:e.v}),c7:Mr({fU:e.w,fY:e.x,c6:e.y})})},Qa=v(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,$=u;return{fU:a.fU*$.fU+a.fY*$.fY+a.c6*$.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Zl=v(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,$=n.c7,s=$,d=n.c5,m=d,f=n.c4,g=f;return{fU:c*g.fU+l*g.fY+u*g.c6,fY:c*m.fU+l*m.fY+u*m.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Xl=v(function(e,r){return{cB:o(Zl,e,an(r)),c4:o(Qa,e,Fr(r)),c5:o(Qa,e,Vr(r)),c7:o(Qa,e,Er(r))}}),zp=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),Sa=function(e){var r=e;return r},ue=v(function(e,r){var n=e,a=r;return o(nr,n,a)}),ia=v(function(e,r){return I(e,r)<0?e:r}),de=v(function(e,r){var n=e,a=r;return o(ia,n,a)}),kp=v(function(e,r){var n=Sa(r),a=Sa(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(de,a.dR,n.dR),dS:o(de,a.dS,n.dS),dT:o(de,a.dT,n.dT)}}),He=function(e){var r=e;return r},Tp=function(e){var r=e;return F(r.fU,r.fY,r.c6)},gn=v(function(e,r){var n=e,a=r;return a+n}),Mp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ta(We(a)),c=ta(We(n)),l=ta(We(t)),u=Tp(r),$=u.a,s=u.b,d=u.c;return{dO:o(gn,c,$),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o(Ir,c,$),dS:o(Ir,i,s),dT:o(Ir,l,d)}}),Ui=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,$=t.fY*r,s=t.fU*r,d=He(Er(e)),m=K(l*d.fU)+K(c*d.fY)+K(i*d.c6),f=He(Vr(e)),g=K(l*f.fU)+K(c*f.fY)+K(i*f.c6),h=He(Fr(e)),w=K(l*h.fU)+K(c*h.fY)+K(i*h.c6),x=o(Mp,F(w,g,m),o(Zl,e,p(zp,s,$,u)));if(a.$)return oe(x);var _=a.a;return oe(o(kp,_,x))}),Dt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,h=n,w=i;e=f,r=g,n=h,a=w;continue e;case 1:var c=t.a,l=L(Ui,e,r,c,n),f=e,g=r,h=l,w=i;e=f,r=g,n=h,a=w;continue e;case 2:var f=e,g=r,h=n,w=i;e=f,r=g,n=h,a=w;continue e;case 3:var c=t.a,l=L(Ui,e,r,c,n),f=e,g=r,h=l,w=i;e=f,r=g,n=h,a=w;continue e;case 4:var u=t.a,f=e,g=r,h=L(Dt,e,r,n,u),w=i;e=f,r=g,n=h,a=w;continue e;default:var $=t.a,s=t.b,d=o(Xl,Pp($),e),m=r*$.bX,f=e,g=r,h=L(Dt,d,m,n,b([s])),w=i;e=f,r=g,n=h,a=w;continue e}}else return n}),cn=I$,ln=O$,un=J$,Kl=function(e){return{$:4,a:e}},Dp=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Un=function(e){return Kl(o(Dp,e,P))},Bp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Ap=function(e){var r=e;return r},ji=Ro({a8:Yr,cp:0,cO:Fo,bl:Kr,c3:255,bt:Yr,bu:Yr}),Hr=bv,cr=0,Fp=function(e){var r=e,n=o(nr,K(r.fU),o(nr,K(r.fY),K(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=Hr(i*i+t*t+a*a);return c*n}else return cr},Ce={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},Re=v(function(e,r){var n=e,a=r;return Qe({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),dn=z({bd:o(Re,Ce,Ce),bK:o(Re,Ce,Ce),bL:o(Re,Ce,Ce),bM:o(Re,Ce,Ce)},L(on,0,0,0,0)),le=v(function(e,r){var n=r;return e*n}),Ql=514,eu=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,515,r,n,a)},ru=240,Vp=b([eu({V:1,W:0,Z:!0}),Eo({a8:we,cp:ru,cO:0,bl:Ql,c3:0,bt:we,bu:we}),Uo]),Ep=v(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=We(a),l=c,u=We(t),$=u,s=n.cM;if(s.$){var m=s.a;return gt($)?Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return gt($)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),In=v(function(e,r){return(1&e>>r)===1?0:1}),Rp=function(e){return b([eu({V:1,W:0,Z:!0}),Eo({a8:we,cp:ru,cO:e,bl:Ql,c3:0,bt:we,bu:we}),Uo])},Up=y(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=L(on,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(Ze,e,z(r,i),Rp(t))},o(Jr,1,o(Vn,2,n)-1)))}),kn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Or=function(e){var r=e;return r},jp=tf,Ni=function(e){var r=e;return kn(Er(r))},Np={cB:mr,c4:wo,c5:Mo,c7:Va},Ea=function(e){var r=e;return r},Wp=function(e){var r=Ea(an(e)),n=He(Er(e)),a=He(Vr(e)),t=He(Fr(e));return Qe({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Gp=v(function(e,r){var n=r;return Wp(o(Xl,n,e))}),Hp=function(e){return o(Gp,Np,e)},Yp=function(e){var r=e;return r.c2},Ip=function(e){var r=e;return Fr(r)},Op=function(e){var r=e;return Vr(r)},Jp=function(e){var r=Yp(e.ev),n=tn({cB:Ri(r),c4:Ip(r),c5:Op(r),c7:kn(Ni(r))}),a=Un(e.aP),t=a,i=L(Dt,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=Hp(r),u=o(le,.99,o(ue,We(e.aJ),kt(Ol(c)))),$=ql(c),s=$.a,d=$.b,m=$.c,f=Fp(p(Cl,s,d,m)),g=o(le,1.01,o(gn,f,kt(Jl(c)))),h=o(Ep,e.ev,{eq:e.eq,eP:g,fi:u}),w=jp(h).dM,x=w?He(kn(Ni(r))):Or(Ri(r)),_=function(){var ie=e.bZ;switch(ie.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var me=ie.a;return z(3,me);case 4:var me=ie.a;return z(4,me);default:return z(5,0)}}(),C=_.a,T=_.b,N=e.bD,U=N,E=o(Bo,U,e.b$),j=E,W=Qe({dx:0,dy:x.fU,dz:cn(j),dA:e.ec,dB:0,dC:x.fY,dD:ln(j),dE:Ap(f),dF:0,dG:x.c6,dH:un(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),A=Le(Wl,W,l,h,Bp,t,{M:P,U:P,fB:P}),J=e.bJ;switch(J.$){case 0:var X=J.a;return Ge(b([p(Ze,A.M,z(X,Xa),Rr),p(Ze,A.U,dn,Rr)]));case 1:var X=J.a;return Ge(b([p(Ze,A.M,dn,Rr),b([ji]),p(Ze,A.fB,X.bd,Hl),b([Il(0)]),p(Ze,A.M,z(X,Xa),Vp),p(Ze,A.U,dn,Rr)]));default:var ce=J.a,fe=J.b;return Ge(b([p(Ze,A.M,z(fe,Xa),Rr),b([ji]),o(dp,A.fB,ce),p(Up,A.M,fe,Dr(ce)),p(Ze,A.U,dn,Rr)]))}},qp=function(e){return o(Sr,"width",De(e))},Zp=v(function(e,r){var n=b([U0(1),H0(0),D0(!0),L(V0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return F(n,"0",1);case 1:return F(o(B,A0,n),"1",1);default:var T=C.a;return F(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Ai($),d=o(ee,"height",De(s)+"px"),m=Ai(u),f=m/s,g=o(Do,function(C){return Jp({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),h=o(ee,"width",De(m)+"px"),w=e.aI,x=w,_=I0(x);return p(W0,"div",b([o(ee,"padding","0px"),h,d]),b([z(i,p(q0,t,b([qp(Je(m*c)),j0(Je(s*c)),h,d,o(ee,"display","block"),o(ee,"background-color",_)]),g))]))}),Xp=function(e){return o(Zp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},nu=function(e){return e},Wi=nu({fU:.31271,fY:.32902}),Kp=v(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(Bo,r.ce,r.b6),u=l;return{by:un(u),ex:n,bF:ln(u),cK:0,bV:cn(u),c_:1,fU:-t,fY:-i,c6:-c}}),Qp=function(e){return e},eb=function(e){return Qp(1.2*o(Vn,2,e))},et=function(e){return e},rb={$:0},nb=rb,au=function(e){return e},ab=v(function(e,r){var n=e,a=r;return I(a,n)>0}),Gi=function(e){var r=e;return r},tb=function(e){e:for(;;){if(gr(e.e2,cr)&&gr(e.e3,cr))return Ce;if(o(ab,We(e.e2),We(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:kn(e.ei)};e=r;continue e}else{var n=K(Gi(e.e3)/ur),a=K(Gi(e.e2)/ur),t=He(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(Bo,au(1),e.b6),$=u;return{by:a*un($),ex:!1,bF:a*ln($),cK:n/a,bV:a*cn($),c_:3,fU:i,fY:c,c6:l}}}},Hi=function(e){return tb({b6:e.b6,e2:e.ce,e3:cr,ei:e.ei})},ob=function(e){var r=e;return r},tu=function(e){var r=p(Fl,1667,25e3,ob(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return nu({fU:n,fY:a})},ou=function(e){return e},ib=tu(ou(12e3)),cb=tu(ou(5600)),lb=function(e){return{$:2,a:e}},ub=function(e){return lb(e)},vb=v(function(e,r){return{$:2,a:e,b:r}}),iu=function(e){return{$:0,a:e}},On=function(e){var r=e;return r},$b=function(e){var r=e;return r.ex},fb=iu(dn.a),sb=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(B,a,i),c):z(i,o(B,a,c))});return p(sr,n,z(P,P),r)}),db=function(e){var r=e;return Qe({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},mb=Q(function(e,r,n,a,t,i,c,l){var u=o(sb,$b,b([On(e),On(r),On(n),On(a)])),$=u.a,s=u.b;if($.b){var d=ve($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,h=f.b,w=h.a,x=h.b,_=x.a;return o(vb,o(re,db,$),{bd:o(Re,m,g),bK:o(Re,w,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return fb}else return iu({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),pb=y(function(e,r,n){return ka(mb,e,r,n,Ce,Ce,Ce,Ce,Ce)}),bb=function(e){var r=o(Kp,T0(e.fB),{b6:cb,eH:e.fJ,ce:et(8e4)}),n=Hi({b6:ib,ce:et(2e4),ei:e.ei}),a=Hi({b6:Wi,ce:et(15e3),ei:kn(e.ei)}),t=p(pb,r,n,a);return Xp({b0:ub(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:eb(15),bJ:t,bZ:nb,b$:Wi})},cu=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),hb=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),lu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),uu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),gb=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),_b=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),wb=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),jo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(wb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(cu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(hb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(lu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(_b,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(uu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(gb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},No={$:0},yb=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Sa(c(u)),d=o(de,s.dR,e),m=o(ue,s.dO,r),f=o(de,s.dS,n),g=o(ue,s.dP,a),h=o(de,s.dT,t),w=o(ue,s.dQ,i),x=c,_=$;e=d,r=m,n=f,a=g,t=h,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),xb=y(function(e,r,n){var a=Sa(e(r));return ka(yb,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),rt=v(function(e,r){var n=e,a=r;return I(a,n)<1}),vu=function(e){return o(rt,e.dO,e.dR)&&o(rt,e.dP,e.dS)&&o(rt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(de,e.dR,e.dO),dS:o(de,e.dS,e.dP),dT:o(de,e.dT,e.dQ)}},Tn=function(e){var r=e;return r},_n=function(e){var r=e;return r.fU},wn=function(e){var r=e;return r.fY},yn=function(e){var r=e;return r.c6},$u=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=_n(n),c=wn(n),l=yn(n),u=_n(a),$=wn(a),s=yn(a),d=_n(t),m=wn(t),f=yn(t);return vu({dO:o(ue,i,o(ue,u,d)),dP:o(ue,c,o(ue,$,m)),dQ:o(ue,l,o(ue,s,f)),dR:o(de,i,o(de,u,d)),dS:o(de,c,o(de,$,m)),dT:o(de,l,o(de,s,f))})},fu=q$,Pe=function(e){return fu(Ea(e))},su=function(e){var r=e;return r},Ra=function(e){return fu(su(e))},Sb=v(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Bt=v(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),Cb={fU:0,fY:0,c6:0},Lb=v(function(e,r){var n=e,a=r,t=o(nr,K(a.fU),o(nr,K(a.fY),K(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=Hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return Cb}),Pb=Lb(au(1)),du=y(function(e,r,n){var a=o(Bt,r,n),t=o(Bt,e,r);return Pb(o(Sb,a,t))}),zb=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Ra(p(du,n,a,t));return F({o:i,bT:Pe(n)},{o:i,bT:Pe(a)},{o:i,bT:Pe(t)})},kb=v(function(e,r){return{$:2,a:e,b:r}}),mu=kb({df:3,$7:0,dV:4}),Tb=function(e){if(e.b){var r=e.a,n=e.b,a=mu(o(re,zb,e)),t=p(xb,$u,r,n);return L(cu,t,e,a,0)}else return No},Ee=y(function(e,r,n){return F(e,r,n)}),be=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),pu=function(){var e=Ne(1),r=Ne(1),n=Ne(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(be,i,t,a),l=o(le,.5,e),u=p(be,i,t,l),$=o(le,.5,r),s=p(be,i,$,a),d=p(be,i,$,l),m=o(le,.5,n),f=p(be,m,t,a),g=p(be,m,$,a),h=p(be,m,t,l),w=p(be,m,$,l);return jo(Tb(b([p(Ee,c,g,f),p(Ee,c,s,g),p(Ee,u,h,w),p(Ee,u,w,d),p(Ee,f,g,w),p(Ee,f,w,h),p(Ee,c,d,s),p(Ee,c,u,d),p(Ee,c,f,h),p(Ee,c,h,u),p(Ee,s,w,g),p(Ee,s,d,w)])))}(),Jn={$:0},Mb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Db=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ra(p(du,u,l,c)),s={o:$,bT:Pe(u)},d={o:$,bT:Pe(l)},m={o:$,bT:Pe(c)};return o(B,s,o(B,d,o(B,m,n)))}),Wo=function(e){var r=e;return r.D},Bb=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return oe(p(e,t,i,c))}),At=4294967295>>>32-Ln,Ft=Qu,Ab=y(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Ft,a,n);if(t.$){var $=t.a;return o(Ft,At&r,$)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),Fb=function(e){return e>>>5<<5},Vb=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,Fb(n))>-1?oe(o(Ft,At&e,i)):oe(p(Ab,a,e,t))}),Go=function(e){var r=e;return r.ah},nt=v(function(e,r){return o(Vb,e,Go(r))}),Eb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(Bb,y(function(c,l,u){return F(c,l,u)}),o(nt,a,e),o(nt,t,e),o(nt,i,e))};return o(mo,r,Wo(e))},Rb=y(function(e,r,n){e:for(;;){var a=o(to,Fe,e),t=a.a,i=a.b;if(I(bt(t),Fe)<0)return o(Hc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Wc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ho=function(e){return e.b?p(Rb,e,P,0):jc},Ub=y(function(e,r,n){return e(r(n))}),jb=v(function(e,r){return!o(rl,o(Ub,ys,e),r)}),Nb=v(function(e,r){return p(sr,v(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),Wb=function(e){var r=e.a;return r},bu=v(function(e,r){var n=Wb(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(jb,a,r)?{D:r,ah:e}:{D:o(Nb,a,r),ah:e}}),Gb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=Gb({df:1,$7:3,dV:4}),ca=v(function(e,r){var n=Or(r),a=Or(e);return z(F(a.fU,a.fY,a.c6),F(n.fU,n.fY,n.c6))}),Yi=p(Rn,0,0,0),at=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(vo,o(ca,e,r),t);if($.$){var d={o:Yi,bT:Pe(r)},m={o:Yi,bT:Pe(e)},f=u+1,g=u;return F(o(B,F(n,g,f),o(B,F(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=$.a;return F(o(B,F(n,s,a),c),l,u)}}),Hb=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,h=a,w=e,x=r,_=$,C=a+3,T=Le(at,s,m,f,h,r,Le(at,d,s,g,f,r,Le(at,m,d,h,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,U=N.a,E=N.b;return z(U,Ae(E))}}),Yb=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,h=n,w=p(bn,o(ca,m,s),f,p(bn,o(ca,s,d),g,p(bn,o(ca,d,m),h,t))),x=o(B,F(h,g,f),a),_=e,C=$,T=n+3,N=x,U=w;e=_,r=C,n=T,a=N,t=U;continue e}else return F(a,t,n)}),Lr=y(function(e,r,n){var a=Eb(n),t=p(sr,Db(r),P,a),i=S(Yb,r,a,0,P,yl),c=i.a,l=i.b,u=i.c,$=S(Hb,r,l,a,0,F(c,P,u)),s=$.a,d=$.b,m=Pt(d)?t:ve(t,d);return p(Mb,e,o(bu,Ho(m),s),o(jn,m,s))}),Vt=function(e){return{D:o(re,function(r){return F(3*r,3*r+1,3*r+2)},o(Jr,0,Dr(e)-1)),ah:Ho(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},hu=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(re,Tn,r);return p(Lr,a,kr,Vt(n));case 2:var a=e.a,r=e.b,n=o(re,Tn,r);return p(Lr,a,kr,Vt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,kr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ii=hu(pu),gu={$:0},k=gu,pe=v(function(e,r){return{$:1,a:e,b:r}}),Ib={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Ob=1029,Jb=function(e){return{$:5,a:e}},_u=function(e){var r=e;return Jb(r)},qb=_u(Ob),Zb=1028,Xb=_u(Zb),ze=y(function(e,r,n){return r===1?e?o(B,qb,n):o(B,Xb,n):n}),wu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tt=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),wu,Ib,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),Yo={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),yu,Yo,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),xu=v(function(e,r){return{$:3,a:e,b:r}}),Kb={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Su={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qb=R(function(e,r,n,a){return o(xu,n,Q(function(t,i,c,l,u,$,s,d){return S(ne,d,Su,Kb,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),Io={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ua=Z$,ir=he(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),yu,Io,a,{aN:o(Ua,Nn(r),e),b:l,c,d:s,e:i,f:$})}))}),e1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},r1=he(function(e,r,n,a,t){return o(xu,a,Q(function(i,c,l,u,$,s,d,m){return S(ne,m,Su,e1,t,{aN:o(Ua,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},Lu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),Lu,Cu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,d:$,e:t,f:u})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},zu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},n1=qe(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,h=m.b;return S(ne,p(ze,$,i,f),zu,Pu,t,{P:h,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),ku={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},a1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(pe,u,Q(function(d,m,f,g,h,w,x,_){var C=x.a,T=x.b;return S(ne,p(ze,g,s,_),zu,ku,$,{b4:e,b8:r,b9:i,ca:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:h})}))}}}}}}}}}}},Tu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Zn=qe(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,h=m.b;return S(ne,p(ze,$,i,f),Lu,Tu,t,{b3:e,P:h,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),t1=function(e){return{$:0,a:e}},Oi=v(function(e,r){return{$:1,a:e,b:r}}),xn=v(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),o1=function(e){return L(on,cn(e),ln(e),un(e),1)},Oo=L(on,0,0,0,0),la=v(function(e,r){if(r.$){var a=r.a.C;return z(a,Oo)}else{var n=r.a;return z(e,o1(n))}}),Mu=v(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Oi,z(t,Oo),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Oi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,t1(a)}}),i1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),c1=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),l1=function(e){return o(Me,e,1)},Et=o(Me,0,0),Ur=v(function(e,r){if(r.$){var a=r.a.C;return z(a,Et)}else{var n=r.a;return z(e,l1(n))}}),Du=R(function(e,r,n,a){var t=L(c1,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Xn,z(u,Oo),o(Ur,u,r),o(Ur,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Xn,o(la,u,e),z(u,Et),o(Ur,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Xn,o(la,u,e),o(Ur,u,r),z(u,Et),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Xn,o(la,u,e),o(Ur,u,r),o(Ur,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(i1,i,c,l)}}),u1={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},ot=he(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),wu,u1,a,{b1:Nn(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),Bu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},v1=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),Bu,Pu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cr:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),$1=jt(function(e,r,n,a,t,i,c,l,u){return o(pe,c,Q(function($,s,d,m,f,g,h,w){var x=h.a,_=h.b;return S(ne,p(ze,m,u,w),Bu,ku,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cv:t,b:d,c:s,aW:e,d:g,cS:n,e:$,a$:0,f})}))}),Mn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),f1=function(e){var r=e;return p(Mn,r.dR,r.dO,.5)},s1=function(e){var r=e;return p(Mn,r.dS,r.dP,.5)},d1=function(e){var r=e;return p(Mn,r.dT,r.dQ,.5)},m1=function(e){return p(be,f1(e),s1(e),d1(e))},G=function(e){var r=ql(e),n=r.a,a=r.b,t=r.c;return{ey:Ea(m1(e)),eS:n/2,eT:a/2,eU:t/2}},Jo=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(Qb,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(ot,l,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ot,l,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ot,l,$,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 8:var t=r.a,c=r.c;return S(ir,u,$,G(t),c,0);case 9:var t=r.a,c=r.c;return S(ir,u,$,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(r1,u,$,i,G(t),c)}}case 2:e.a;var s=e.b,U=e.c,d=o(Mu,s,U);if(d.$){var g=d.a,h=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(v1,h,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Le(n1,h,x,_,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,N=e.d,U=e.e,E=L(Du,C,T,N,U);if(E.$){var J=E.a,X=J.a,ce=J.b,fe=E.b,ie=fe.a,me=fe.b,ke=E.c,ye=ke.a,pr=ke.b,br=E.d,x=br.a,_=br.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Ju($1,X,ce,ie,me,ye,pr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return a1(X)(ce)(ie)(me)(ye)(pr)(x)(_)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=E.a,W=E.b,A=E.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),it=function(e){var r=e;return r.fU},ct=function(e){var r=e;return r.fY},lt=function(e){var r=e;return r.c6},p1=function(e){var r=e,n=lt(r.c7),a=ct(r.c7),t=it(r.c7),i=lt(r.c5),c=ct(r.c5),l=it(r.c5),u=lt(r.c4),$=ct(r.c4),s=it(r.c4);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},b1=function(e){var r=Ea(an(e)),n=He(Er(e)),a=He(Vr(e)),t=He(Fr(e));return{dp:p1(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},jr=v(function(e,r){return{$:5,a:e,b:r}}),Au=v(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Nl,a,e);return o(jr,i,t);case 1:return o(jr,e,n);case 3:return o(jr,e,n);case 2:return o(jr,e,n);default:return o(jr,e,n)}}),Fu=v(function(e,r){return o(Au,b1(e),r)}),ja=function(e){return{$:2,a:e}},h1=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),g1=Q$,_1=K$,Ji=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=_1(a),g=f.fU,h=f.fY,w=f.c6,x=f.em,_=g1({em:x,fU:g*s,fY:h*d,c6:w*m});return ka(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Rt=v(function(e,r){switch(r.$){case 0:return gu;case 5:var n=r.a,a=r.b;return o(jr,n,o(Rt,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(h1,e,t),o(Ji,e,i));case 3:return r;case 2:var i=r.a;return ja(o(Ji,e,i));default:var c=r.a;return Kl(o(re,Rt(e),c))}}),qo=v(function(e,r){var n=r;return o(Rt,e,n)}),Zo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Vu=7683,Eu=7682,w1=p(Vo,{cp:0,cO:0,c3:15},{a8:we,bl:Kr,bt:we,bu:Vu},{a8:we,bl:Kr,bt:we,bu:Eu}),y1=p(Vo,{cp:0,cO:0,c3:15},{a8:we,bl:Kr,bt:we,bu:Eu},{a8:we,bl:Kr,bt:we,bu:Vu}),Xo=v(function(e,r){return e?o(B,y1,r):o(B,w1,r)}),x1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},S1=function(e){if(e.$){var r=e.c;return oe(Q(function(n,a,t,i,c,l,u,$){return S(ne,o(Xo,i,$),x1,Zo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},Ca=function(e){var r=S1(e);if(r.$)return k;var n=r.a;return ja(n)},C1=R(function(e,r,n,a){var t=o(Jo,n,pu),i=function(){var s=z(e,r);return s.a?s.b?Un(b([t,Ca(Ii)])):t:s.b?Ca(Ii):k}(),c=Co(a),l=c.a,u=c.b,$=c.c;return o(Fu,So(a),o(qo,F(l,u,$),i))}),L1=v(function(e,r){return L(C1,!0,!0,e,r)}),Ru=v(function(e,r){return{$:0,a:e,b:r}}),P1=function(e){var r=so(e),n=r.cN,a=r.cd,t=r.b5;return p(Rn,n,a,t)},z1=function(e){return o(Ru,0,Tt(P1(e)))},k1=function(e){var r=e;return r.k},Sn=function(e){var r=e;return Zr(r)},T1=v(function(e,r){var n=r;return n/e}),qi=function(e){var r=e;return{fU:Zr(r),fY:Xr(r)}},M1=v(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Ra(a),bT:Pe(n)},r)}),D1=za(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=un(l.bT),s=ln(l.bT),d=cn(l.bT),m=o(ia,e,d),f=o(nr,r,d),g=o(ia,n,s),h=o(nr,a,s),w=o(ia,t,$),x=o(nr,i,$),_=u;e=m,r=f,n=g,a=h,t=w,i=x,c=_;continue e}else return vu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Uu=v(function(e,r){var n=un(e.bT),a=ln(e.bT),t=cn(e.bT);return Nt(D1,t,t,a,a,n,n,r)}),B1=function(e){var r=p(Dc,M1,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Wo(e)),i=o(Uu,n,a);return L(lu,i,e,t,0)}else return No},A1=Mr({fU:0,fY:0,c6:-1}),Zi=v(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),La=function(e){var r=e;return Xr(r)},mn=function(e){var r=e;return r},Ut=function(e){return vr(2*ur*e)},Xi=Ml({cB:mr,c4:wo,c5:Mo}),ju=function(){var e=72,r=o(T1,e,Ut(1)),n=Ne(1),a=mn(Dl),t=mn(A1),i=Ne(1),c=o(le,.5,i),l=p(be,cr,cr,c),u=o(le,-.5,i),$=p(be,cr,cr,u),s=function(f){var g=o(le,f,r),h=mn(o(Zi,Xi,qi(g))),w=o(le,Sn(g),n),x=o(le,La(g),n),_=p(be,w,x,c),C=p(be,w,x,u),T=o(_a,e,f+1),N=o(le,T,r),U=mn(o(Zi,Xi,qi(N))),E=o(le,Sn(N),n),j=o(le,La(N),n),W=p(be,E,j,u),A=p(be,E,j,c);return b([F({o:t,bT:$},{o:t,bT:W},{o:t,bT:C}),F({o:h,bT:C},{o:U,bT:W},{o:U,bT:A}),F({o:h,bT:C},{o:U,bT:A},{o:h,bT:_}),F({o:a,bT:l},{o:a,bT:_},{o:a,bT:A})])},d=o(re,s,o(Jr,0,e-1)),m=Vt(Ge(d));return jo(B1(m))}(),Ki=hu(ju),F1=function(e){var r=e;return r.cB},V1=function(e){var r=e,n=K(r.c6),a=K(r.fY),t=K(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=Hr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=Hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=Hr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=Hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},E1=function(e){var r=V1(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return z(r,c)},R1=function(e){var r=kl(e),n=E1(r),a=n.a,t=n.b;return tn({cB:F1(e),c4:a,c5:t,c7:r})},U1=function(e){var r=e;return r.e9},j1=function(e){var r=e;return r.fu},N1=R(function(e,r,n,a){var t=R1(k1(a)),i=o(Jo,n,ju),c=function(){var d=z(e,r);return d.a?d.b?Un(b([i,Ca(Ki)])):i:d.b?Ca(Ki):k}(),l=j1(a),u=l,$=U1(a),s=$;return o(Fu,t,o(qo,F(u,u,s),c))}),W1=v(function(e,r){return L(N1,!0,!0,e,r)}),Qi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},ec={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Or(n),c=Or(a),l=Or(t);return Qe({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Kn=mu(b([F({cZ:0},{cZ:1},{cZ:2})])),G1=v(function(e,r){var n=$u(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(pe,a,Q(function(_,C,T,N,U,E,j,W){return S(ne,p(ze,N,0,W),Qi,Yo,Kn,{aw:t,b:T,c:C,d:E,e:_,bq:pn(r),f:U})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(pe,a,Q(function(_,C,T,N,U,E,j,W){return S(ne,p(ze,N,0,W),Qi,Io,Kn,{aN:o(Ua,Nn(c),i),b:T,c:C,d:E,e:_,bq:pn(r),f:U})}));case 2:e.a;var l=e.b,f=e.c,u=o(Mu,l,f);if(u.$)return k;var $=u.a;return o(pe,a,Q(function(_,C,T,N,U,E,j,W){var A=j.a,J=j.b;return S(ne,p(ze,N,0,W),ec,Cu,Kn,{P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cq:$,b:T,c:C,d:E,e:_,bq:pn(r),f:U})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(Du,s,d,m,f);if(g.$)return k;var h=g.a,w=g.b,x=g.c;return o(pe,a,Q(function(_,C,T,N,U,E,j,W){var A=j.a,J=j.b;return S(ne,p(ze,N,0,W),ec,Tu,Kn,{b3:h,P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cu:x,b:T,c:C,d:E,cR:w,e:_,bq:pn(r),f:U})}))}}),H1=function(){var e=b([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=b([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return o(jn,e,r)}(),Y1={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},rc=function(e){return ja(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(Xo,t,u),Y1,Zo,H1,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},I1=R(function(e,r,n,a){var t=o(G1,n,a),i=z(e,r);return i.a?i.b?Un(b([t,rc(a)])):t:i.b?rc(a):k}),O1=v(function(e,r){return L(I1,!0,!0,e,r)}),J1=v(function(e,r){var n=yn(r),a=yn(e),t=wn(r),i=wn(e),c=_n(r),l=_n(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(de,l,c),dS:o(de,i,t),dT:o(de,a,n)}}),q1=function(e){var r=Lo(e),n=r.a,a=r.b;return o(J1,n,a)},nc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Z1=v(function(e,r){return{$:1,a:e,b:r}}),X1=Z1({df:2,$7:0,dV:1}),ac=X1(b([z({dw:0},{dw:1})])),K1=v(function(e,r){var n=q1(r),a=G(n),t=Lo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(pe,a,Q(function($,s,d,m,f,g,h,w){return S(ne,w,nc,Yo,ac,{aw:l,du:Pe(c),dv:Pe(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(pe,a,Q(function(s,d,m,f,g,h,w,x){return S(ne,x,nc,Io,ac,{aN:o(Ua,Nn(u),l),du:Pe(c),dv:Pe(i),b:m,c:d,d:h,e:s,f:g})}));case 2:return k;default:return k}}),Q1=v(function(e,r){return o(K1,e,r)}),Qn=function(e){return vr(ur*(e/180))},tc=v(function(e,r){var n=e,a=r;return n/a}),e3=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(gr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),oc=v(function(e,r){return e<1?P:S(e3,0,e,e,r,P)}),r3=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Ra(a),bT:Pe(n),L:o(Me,c,l)},r)}),n3=function(e){var r=p(Dc,r3,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Wo(e)),i=o(Uu,n,a);return L(uu,i,e,t,0)}else return No},Nu=v(function(e,r){var n=e,a=r,t=Zr(a);return{fU:t*Zr(n),fY:t*Xr(n),c6:Xr(a)}}),a3=function(){var e=Ne(1),r=72,n=o(Jr,0,r-1),a=o(oc,r,o(Mn,cr,Ut(1))),t=no(r/2),i=o(Jr,0,t-1),c=o(oc,t,o(Mn,Qn(90),Qn(-90))),l=Ho(Ge(o(re,function(s){return o(re,function(d){return{o:mn(o(Nu,s,d)),bT:p(be,o(le,Sn(d)*Sn(s),e),o(le,Sn(d)*La(s),e),o(le,La(d),e)),L:z(o(tc,s,Ut(1)),o(tc,o(gn,Qn(90),d),Qn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ge(o(re,function(s){return Ge(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),h=o(u,s,d+1);return b([F(h,g,m),F(h,m,f)])},i))},n));return jo(n3(o(bu,l,$)))}(),Pa=72,ea=2*Pa,t3=v(function(e,r){e:for(;;){var n=ea+1,a=o(_a,ea,2*e+3),t=o(_a,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(B,F(l,c,t),o(B,F(c,a,t),o(B,F(c,i,a),o(B,F(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),o3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),i3=v(function(e,r){e:for(;;){var n=p(o3,0,2*ur,e/Pa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),c3=function(){var e=o(i3,Pa-1,b([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(t3,Pa-1,P);return o(jn,e,r)}(),l3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ic=function(e){return ja(Q(function(r,n,a,t,i,c,l,u){return S(ne,o(Xo,!0,u),l3,Zo,c3,{aw:p(Rn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},u3=function(e){var r=su(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},v3=v(function(e,r){return o(Au,u3(e),r)}),$3=R(function(e,r,n,a){var t=o(Jo,n,a3),i=function(){var u=z(e,r);return u.a?u.b?Un(b([t,ic()])):t:u.b?ic():k}(),c=zo(a),l=c;return o(v3,o(Bt,mr,Po(a)),o(qo,F(l,l,l),i))}),f3=v(function(e,r){return L($3,!0,!0,e,r)}),s3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),d3=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),m3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Ru,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(s3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Al,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(d3,n,a,t,i,c)}},p3=m3,Wu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(L1,t,r)]);case 1:var t=e.a,n=e.b;return b([o(O1,t,n)]);case 3:var t=e.a,a=e.b;return b([o(f3,p3(t),a)]);case 2:var t=e.a,i=e.b;return b([o(W1,t,i)]);case 4:var c=e.a,l=e.b;return b([o(Q1,z1(c),l)]);default:var u=e.a;return o(Do,Wu,u)}},b3=function(e){return o(Do,Wu,e)},h3=v(function(e,r){return bb({aI:z0(e.es),ev:e.ev,aJ:k0(.5),cb:e.cb,aK:z(Bi(Je(e.cT.fS)),Bi(Je(e.cT.eW))),aP:b3(r),fB:!0,fJ:o(Nu,vr(e.fI),vr(e.fK)),ei:Va})}),g3=v(function(e,r){return o(h3,{es:p(C0,46,46,46),ev:n0(e),cb:e.cb,cT:e.cT,fI:-Gr(135),fK:-Gr(45)},b([P0(e),S0(e),Am]))}),_3=L(xm,g3,km,zm,Sm);const w3={Main:{init:_3(o(D,function(e){return Te({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Te({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",se))},o(M,"devicePixelRatio",se))},o(M,"dt",se))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Te({eo:d,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ba(zn)))},o(M,"left",Z))},o(M,"pressedKeys",ba(zn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Te({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",se))},o(M,"y",se))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Te({eW:n,fS:r})},o(M,"height",se))},o(M,"width",se))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Te({eE:r,eF:e})},o(M,"deltaX",se))},o(M,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},y3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,h=g-V.clock;h<.009||(V.dt=h,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},x3=()=>{ut("pointerdown"),ut("wheel"),ut("keydown")},ut=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},S3=w3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});x3();y3(S3);
