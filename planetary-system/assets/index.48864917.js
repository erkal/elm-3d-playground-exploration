(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function yr(e,r,n){return n.a=e,n.f=r,n}function v(e){return yr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return yr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return yr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function ge(e){return yr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return yr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ta(e){return yr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return yr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function jt(e){return yr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function C(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Le(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Nt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function za(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ou(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Ju=[];function qu(e){return e.length}var Zu=S(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Xu=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,T(n,r)}),Ku=v(function(e,r){return r[e]});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});S(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});S(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});S(function(e,r,n){return n.slice(e,r)});S(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+ev()),r});function ev(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function hr(e,r){for(var n,a=[],t=vt(e,r,0,a);t&&(n=a.pop());t=vt(n.a,n.b,0,a));return t}function vt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(T(e,r)),!0;e.$<0&&(e=fi(e),r=fi(r));for(var t in e)if(!vt(e[t],r[t],n+1,a))return!1;return!0}v(hr);v(function(e,r){return!hr(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return I(e,r)<0});v(function(e,r){return I(e,r)<1});v(function(e,r){return I(e,r)>0});v(function(e,r){return I(e,r)>=0});var rv=v(function(e,r){var n=I(e,r);return n<0?Ac:n?Nf:Bc}),Dn=0;function T(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(ve);function ve(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var nv=v(ar);function b(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Ma(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var av=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});ge(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return b(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(C(e,r.a,n.a,a.a,t.a,i.a));return b(c)});v(function(e,r){return b(Ma(r).sort(function(n,a){return I(e(n),e(a))}))});v(function(e,r){return b(Ma(r).sort(function(n,a){var t=o(e,n,a);return t===Bc?0:t===Ac?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var tv=v(Math.pow);v(function(e,r){return r%e});var ov=v(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),iv=Math.PI,cv=Math.cos,lv=Math.sin,uv=Math.tan,vv=Math.atan;v(Math.atan2);function $v(e){return e}function fv(e){return e===1/0||e===-1/0}var sv=Math.ceil,mv=Math.floor,dv=Math.round,pv=Math.sqrt,Ko=Math.log,bv=isNaN;function gv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var hv=v(function(e,r){return e+r});function _v(e){var r=e.charCodeAt(0);return isNaN(r)?q:oe(55296<=r&&r<=56319?T(e[0]+e[1],e.slice(2)):T(e[0],e.slice(1)))}v(function(e,r){return e+r});function yv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Sv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var xv=S(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Cv=v(function(e,r){return r.split(e)}),wv=v(function(e,r){return r.join(e)}),Lv=S(function(e,r,n){return n.slice(e,r)});function Pv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Tv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),zv=v(function(e,r){return r.indexOf(e)>-1}),Mv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var kv=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function cc(e){return e+""}function Dv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:oe(n==45?-r:r)}function Bv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?oe(r):q}function Av(e){return Ma(e).join("")}function Fv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Vv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Ev(e){return{$:0,a:e}}function Wt(e){return{$:2,b:e}}var Rv=Wt(function(e){return typeof e=="boolean"?$e(e):Xe("a BOOL",e)}),Uv=Wt(function(e){return typeof e=="number"?$e(e):Xe("a FLOAT",e)}),jv=Wt(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):Xe("a STRING",e)});function Nv(e){return{$:3,b:e}}var Wv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Sr(e,r){return{$:9,f:e,g:r}}var Gv=v(function(e,r){return{$:10,b:r,h:e}}),Hv=v(function(e,r){return Sr(e,[r])}),Yv=S(function(e,r,n){return Sr(e,[r,n])});R(function(e,r,n,a){return Sr(e,[r,n,a])});ge(function(e,r,n,a,t){return Sr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return Sr(e,[r,n,a,t,i])});Ta(function(e,r,n,a,t,i,c){return Sr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return Sr(e,[r,n,a,t,i,c,l])});jt(function(e,r,n,a,t,i,c,l,u){return Sr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ue(e,n)}catch(a){return _e(o(eo,"This is not valid JSON! "+a.message,r))}});var lc=v(function(e,r){return Ue(e,r)});function Ue(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):Xe("null",r);case 3:return Wn(r)?Qo(e.b,r,b):Xe("a LIST",r);case 4:return Wn(r)?Qo(e.b,r,Iv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var $=Ue(e.b,r[n]);return Ie($)?$:_e(o(si,n,$.a));case 7:var a=e.e;if(!Wn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ue(e.b,r[a]);return Ie($)?$:_e(o(Fc,a,$.a));case 8:if(typeof r!="object"||r===null||Wn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var $=Ue(e.b,r[i]);if(!Ie($))return _e(o(si,i,$.a));t=ar(T(i,$.a),t)}return $e(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ue(l[u],r);if(!Ie($))return $;c=c($.a)}return $e(c);case 10:var $=Ue(e.b,r);return Ie($)?Ue(e.h($.a),r):$;case 11:for(var s=P,m=e.g;m.b;m=m.b){var $=Ue(m.a,r);if(Ie($))return $;s=ar($.a,s)}return _e(Wf(Ae(s)));case 1:return _e(o(eo,e.a,r));case 0:return $e(e.a)}}function Qo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ue(e,r[i]);if(!Ie(c))return _e(o(Fc,i,c.a));t[i]=c.a}return $e(n(t))}function Wn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function Iv(e){return o(os,e.length,function(r){return e[r]})}function Xe(e,r){return _e(o(eo,"Expecting "+e,r))}function Nr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Nr(e.b,r.b);case 6:return e.d===r.d&&Nr(e.b,r.b);case 7:return e.e===r.e&&Nr(e.b,r.b);case 9:return e.f===r.f&&ei(e.g,r.g);case 10:return e.h===r.h&&Nr(e.b,r.b);case 11:return ei(e.g,r.g)}}function ei(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Nr(e[a],r[a]))return!1;return!0}var Ov=v(function(e,r){return JSON.stringify(r,null,e)+""});function uc(e){return e}S(function(e,r,n){return n[e]=r,n});function Br(e){return{$:0,a:e}}function Jv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var $t=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function qv(e){return{$:5,b:e}}var Zv=0;function Gt(e){var r={$:0,e:Zv++,f:e,g:null,h:[]};return Ht(r),r}function vc(e){return fr(function(r){r(Br(Gt(e)))})}function $c(e,r){e.h.push(r),Ht(e)}var Xv=v(function(e,r){return fr(function(n){$c(e,r),n(Br(Dn))})}),Wa=!1,ri=[];function Ht(e){if(ri.push(e),!Wa){for(Wa=!0;e=ri.shift();)Kv(e);Wa=!1}}function Kv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ht(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Yt(e,r,n,a,t,i){var c=o(lc,e,r?r.flags:void 0);Ie(c)||Qr(2);var l={},u=n(c.a),$=u.a,s=i(d,$),m=Qv(l,d);function d(f,h){var g=o(a,f,$);s($=g.a,h),ai(l,g.b,t($))}return ai(l,u.b,t($)),m?{ports:m}:{}}var er={};function Qv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=r$(t,r)}return n}function e$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function r$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o($t,l,qv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Gt(o($t,l,e.b))}var n$=v(function(e,r){return fr(function(n){e.g(r),n(Br(Dn))})});v(function(e,r){return o(Xv,e.h,{$:0,a:r})});function fc(e){return function(r){return{$:1,k:e,l:r}}}function a$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ni=[],Ga=!1;function ai(e,r,n){if(ni.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=ni.shift();)t$(a.p,a.q,a.r);Ga=!1}}function t$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)$c(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=o$(e,t,a,r.l);n[t]=i$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function o$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function i$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function c$(e){er[e]&&Qr(3)}v(function(e,r){return r});function l$(e,r){return c$(e),er[e]={f:u$,u:r,a:v$},fc(e)}var u$=v(function(e,r){return function(n){return e(r(n))}});function v$(e,r){var n=P,a=er[e].u,t=Br(null);er[e].b=t,er[e].c=S(function(c,l,u){return n=l,t});function i(c){var l=o(lc,a,c);Ie(l)||Qr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var va,lr=typeof document<"u"?document:{};function It(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function ft(e){return{$:0,a:e}}var sc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ot(n),e:t,f:e,b:i}})}),Ar=sc(void 0),$$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ot(n),e:t,f:e,b:i}})}),f$=$$(void 0);function s$(e,r,n,a){return{$:3,d:Ot(e),g:r,h:n,i:a}}var m$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return xr([e,r],function(){return e(r)})});S(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});ge(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return C(e,r,n,a,t,i)})});Ta(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return Le(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Nt(e,r,n,a,t,i,c,l)})});jt(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return za(e,r,n,a,t,i,c,l,u)})});var mc=v(function(e,r){return{$:"a0",n:e,o:r}}),d$=v(function(e,r){return{$:"a1",n:e,o:r}}),dc=v(function(e,r){return{$:"a2",n:e,o:r}}),Cr=v(function(e,r){return{$:"a3",n:e,o:r}}),p$=S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function b$(e){return e=="script"?"p":e}function g$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(mc,r.n,h$(e,r.o)):r});function h$(e,r){var n=oo(r);return{$:r.$,a:n?p(is,n<3?_$:y$,Me(e),r.a):o(ma,e,r.a)}}var _$=v(function(e,r){return T(e(r.a),r.b)}),y$=v(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ot(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ti(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ti(c,t,i):c[t]=i}return r}function ti(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return st(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),st(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)It(c,gr(n===1?l[u]:l[u].b,r));return c}function st(e,r,n){for(var a in n){var t=n[a];a==="a1"?S$(e,t):a==="a0"?w$(e,r,t):a==="a3"?x$(e,t):a==="a4"?C$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function S$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function x$(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function C$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function w$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=L$(r,i),e.addEventListener(t,c,Jt&&{passive:oo(i)<2}),a[t]=c}}var Jt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Jt=!0}}))}catch{}function L$(e,r){function n(a){var t=n.q,i=Ue(t.a,a);if(!!Ie(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cX,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,$)}}return n.q=r,n}function P$(e,r){return e.$==r.$&&Nr(e.a,r.a)}function pc(e,r){var n=[];return Oe(e,r,n,0),n}function he(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=F$(r),i=1;else{he(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&he(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if(f&&m.length!==d.length){he(n,0,a,r);return}(f?!T$(m,d):m!==d)&&he(n,2,a,d),Oe(h,g,n,a+1);return;case 0:e.a!==r.a&&he(n,3,a,r.a);return;case 1:oi(e,r,n,a,z$);return;case 2:oi(e,r,n,a,M$);return;case 3:if(e.h!==r.h){he(n,0,a,r);return}var y=qt(e.d,r.d);y&&he(n,4,a,y);var x=r.i(e.g,r.g);x&&he(n,5,a,x);return}}}function T$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function oi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){he(n,0,a,r);return}var i=qt(e.d,r.d);i&&he(n,4,a,i),t(e,r,n,a)}function qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&P$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function z$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?he(n,6,a,{v:l,i:c-l}):c<l&&he(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Oe(s,i[$],n,++a),a+=s.b||0}}function M$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,m=0,d=0,f=a;m<$&&d<s;){var h=l[m],g=u[d],y=h.a,x=g.a,_=h.b,w=g.b,M=void 0,N=void 0;if(y===x){f++,Oe(_,w,t,f),f+=_.b||0,m++,d++;continue}var U=l[m+1],E=u[d+1];if(U){var j=U.a,W=U.b;N=x===j}if(E){var A=E.a,J=E.b;M=y===A}if(M&&N){f++,Oe(_,J,t,f),vn(i,t,y,w,d,c),f+=_.b||0,f++,$n(i,t,y,W,f),f+=W.b||0,m+=2,d+=2;continue}if(M){f++,vn(i,t,x,w,d,c),Oe(_,J,t,f),f+=_.b||0,m+=1,d+=2;continue}if(N){f++,$n(i,t,y,_,f),f+=_.b||0,f++,Oe(W,w,t,f),f+=W.b||0,m+=2,d+=1;continue}if(U&&j===A){f++,$n(i,t,y,_,f),vn(i,t,x,w,d,c),f+=_.b||0,f++,Oe(W,J,t,f),f+=W.b||0,m+=2,d+=2;continue}break}for(;m<$;){f++;var h=l[m],_=h.b;$n(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var X=X||[],g=u[d];vn(i,t,g.a,g.b,void 0,X),d++}(t.length>0||c.length>0||X)&&he(n,8,a,{w:t,x:c,y:X})}var bc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+bc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=he(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),he(r,9,t,{w:l,A:i});return}$n(e,r,n+bc,a,t)}function gc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)gc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,y=0;y<h.length;y++){t++;var x=d===1?h[y]:h[y].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=fn(g[y],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function hc(e,r,n,a){return n.length===0?e:(gc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=k$(t,a);t===e&&(e=i)}return e}function k$(e,r){switch(r.$){case 0:return D$(e,r.s,r.u);case 4:return st(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return B$(e,r);case 5:return r.s(e);default:Qr(10)}}function D$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function B$(e,r){var n=r.s,a=A$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&It(e,a),e}function A$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;It(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function Zt(e){if(e.nodeType===3)return ft(e.textContent);if(e.nodeType!==1)return ft("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Cr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,$=e.childNodes,a=$.length;a--;)u=ar(Zt($[a]),u);return p(Ar,l,r,u)}function F$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var V$=R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Zt(l);return _c(i,function($){var s=c($),m=pc(u,s);l=hc(l,u,m,t),u=s})})});R(function(e,r,n,a){return Yt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=lr.title,$=lr.body,s=Zt($);return _c(i,function(m){va=c;var d=l(m),f=Ar("body")(P)(d.eu),h=pc(s,f);$=hc($,s,h,t),s=f,va=0,u!==d.fL&&(lr.title=u=d.fL)})})});var fa=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function _c(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}v(function(e,r){return o(lo,io,fr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(lo,io,fr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(lo,io,fr(function(){history.replaceState({},"",r),e()}))});var E$={addEventListener:function(){},removeEventListener:function(){}},R$=typeof window<"u"?window:E$;S(function(e,r,n){return vc(fr(function(a){function t(i){Gt(n(i))}return e.addEventListener(r,t,Jt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ue(e,r);return Ie(n)?oe(n.a):q});function yc(e,r){return fr(function(n){fa(function(){var a=document.getElementById(e);n(a?Br(r(a)):Jv(ls(e)))})})}function U$(e){return fr(function(r){fa(function(){r(Br(e()))})})}v(function(e,r){return yc(r,function(n){return n[e](),Dn})});v(function(e,r){return U$(function(){return R$.scroll(e,r),Dn})});S(function(e,r,n){return yc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Dn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var j$=v(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return oe(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var N$=S(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var m=u[$];s[--$]=m?oe(m):q}a.push(L(dl,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?oe($):q}return n(L(dl,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var W$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/G$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function G$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Xt=new Float64Array(3),ii=new Float64Array(3),ci=new Float64Array(3),H$=S(function(e,r,n){return new Float64Array([e,r,n])}),Y$=function(e){return e[0]},I$=function(e){return e[1]},O$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var J$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Sc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Sc);function xc(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(Sc(e,r,n),n)}v(xc);function Cc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Cc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var q$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(sn);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(mt);v(function(e,r){var n,a=Xt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var Z$=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var X$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},K$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Q$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var ef=new Float64Array(16),rf=new Float64Array(16),nf=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},af=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function wc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(wc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return wc(c,l,i,t,n,a)});function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(Lc);R(function(e,r,n,a){return Lc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],x=e[14],_=e[15],w=r[0],M=r[1],N=r[2],U=r[3],E=r[4],j=r[5],W=r[6],A=r[7],J=r[8],X=r[9],ce=r[10],fe=r[11],ie=r[12],de=r[13],ze=r[14],Se=r[15];return n[0]=a*w+l*M+m*N+g*U,n[1]=t*w+u*M+d*N+y*U,n[2]=i*w+$*M+f*N+x*U,n[3]=c*w+s*M+h*N+_*U,n[4]=a*E+l*j+m*W+g*A,n[5]=t*E+u*j+d*W+y*A,n[6]=i*E+$*j+f*W+x*A,n[7]=c*E+s*j+h*W+_*A,n[8]=a*J+l*X+m*ce+g*fe,n[9]=t*J+u*X+d*ce+y*fe,n[10]=i*J+$*X+f*ce+x*fe,n[11]=c*J+s*X+h*ce+_*fe,n[12]=a*ie+l*de+m*ze+g*Se,n[13]=t*ie+u*de+d*ze+y*Se,n[14]=i*ie+$*de+f*ze+x*Se,n[15]=c*ie+s*de+h*ze+_*Se,n}v(Pc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],g=r[0],y=r[1],x=r[2],_=r[4],w=r[5],M=r[6],N=r[8],U=r[9],E=r[10],j=r[12],W=r[13],A=r[14];return n[0]=a*g+c*y+$*x,n[1]=t*g+l*y+s*x,n[2]=i*g+u*y+m*x,n[3]=0,n[4]=a*_+c*w+$*M,n[5]=t*_+l*w+s*M,n[6]=i*_+u*w+m*M,n[7]=0,n[8]=a*N+c*U+$*E,n[9]=t*N+l*U+s*E,n[10]=i*N+u*U+m*E,n[11]=0,n[12]=a*j+c*W+$*A+d,n[13]=t*j+l*W+s*A+f,n[14]=i*j+u*W+m*A+h,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=sa(r,Xt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),t=1/Cc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*$,g=i*l*$,y=c*l*$,x=i*i*$+u,_=h+f,w=g-d,M=h-f,N=c*c*$+u,U=y+m,E=g+d,j=y-m,W=l*l*$+u,A=n[0],J=n[1],X=n[2],ce=n[3],fe=n[4],ie=n[5],de=n[6],ze=n[7],Se=n[8],pr=n[9],br=n[10],Na=n[11],Gu=n[12],Hu=n[13],Yu=n[14],Iu=n[15];return a[0]=A*x+fe*_+Se*w,a[1]=J*x+ie*_+pr*w,a[2]=X*x+de*_+br*w,a[3]=ce*x+ze*_+Na*w,a[4]=A*M+fe*N+Se*U,a[5]=J*M+ie*N+pr*U,a[6]=X*M+de*N+br*U,a[7]=ce*M+ze*N+Na*U,a[8]=A*E+fe*j+Se*W,a[9]=J*E+ie*j+pr*W,a[10]=X*E+de*j+br*W,a[11]=ce*E+ze*j+Na*W,a[12]=Gu,a[13]=Hu,a[14]=Yu,a[15]=Iu,a});function tf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(tf);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function of(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(of);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],g=a[10],y=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=g,t[11]=y,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+d*r+y*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=g,n[10]=y,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+d*t+y*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});S(function(e,r,n){var a=xc(e,r,Xt),t=sa(mt(n,a,ii),ii),i=sa(mt(a,t,ci),ci),c=ef,l=rf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var li=0;function wn(e,r){for(;r.b;r=r.b)e(r.a)}function Kt(e){for(var r=0;e.b;e=e.b)r++;return r}var cf=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},lf=ge(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),uf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),vf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),$f=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),ff=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),sf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),mf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),df=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),pf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),bf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},gf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},hf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},_f=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Tc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},zc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},yf=function(e){e.gl.disable(e.gl.CULL_FACE)},Sf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},xf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Cf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ui=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],wf=[gf,hf,_f,Tc,zc,yf,Sf,xf,Cf];function vi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Lf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Mc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Pf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,y,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?y[x]:y[x][_];else i.forEach(function(w){for(_=0;_<h;_++)f[g++]=h===1?y[w][x]:y[w][x][_]})}var u=Mc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,m=new u.type(Kt(n.b)*s);wn(function(f){l(m,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Tf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=zf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Kt(r.b),indexBuffer:null,buffers:{}}}function zf(e,r){var n=new Uint32Array(Kt(e)*r),a=0,t;return wn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function $i(e,r){return e+"#"+r}var kc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Tc(n),zc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=$i(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=li++,$||($=vi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=li++,s||(s=vi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Lf(a,$,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Mf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=$i(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),kf(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Tf(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Pf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var y=Mc(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,w=0;w<y.arraySize;w++)a.enableVertexAttribArray(h+w),a.vertexAttribPointer(h+w,y.size,y.baseType,!1,_,x*w)}for(n.toggle=!n.toggle,wn(O0(n),i.a),u=0;u<ui.length;u++){var M=n[ui[u]];M.toggle!==n.toggle&&M.enabled&&(wf[u](n),M.enabled=!1,M.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.dV,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,g.numIndices)}}return wn(t,e.g),r});function Mf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,y=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(y,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(y,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[g]!==_&&(e.uniform1i(y,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(y,_),i[g]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);$[a[d.name]||d.name]=u(t,d)}return $}function kf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Df=S(function(e,r,n){return s$(r,{g:n,f:{},h:e},Uf,jf)}),Bf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Af=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ff=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Vf=v(function(e,r){e.contextAttributes.antialias=!0}),Ef=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Rf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Uf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};wn(function(t){return o(I0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),cf(function(){return o(kc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function jf(e,r){return r.f=e.f,kc(r)}var B=nv,Gn=Qu,Dc=S(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Gn,e,l,$)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),Qt=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Qt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),fi=function(e){return p(Qt,S(function(r,n,a){return o(B,T(r,n),a)}),P,e)},Bc=1,Nf=2,Ac=0,_e=function(e){return{$:1,a:e}},eo=v(function(e,r){return{$:3,a:e,b:r}}),si=v(function(e,r){return{$:0,a:e,b:r}}),Fc=v(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},Wf=function(e){return{$:2,a:e}},oe=function(e){return{$:0,a:e}},q={$:1},Gf=Tv,Hf=Ov,De=cc,Pr=v(function(e,r){return o(wv,e,Ma(r))}),ro=v(function(e,r){return b(o(Cv,e,r))}),Vc=function(e){return o(Pr,`
    `,o(ro,`
`,e))},Bn=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Dr=function(e){return p(Bn,v(function(r,n){return n+1}),0,e)},Yf=av,If=S(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Jr=v(function(e,r){return p(If,e,r,P)}),Ec=v(function(e,r){return p(Yf,e,o(Jr,0,Dr(r)-1),r)}),rr=Fv,Rc=function(e){var r=rr(e);return 97<=r&&r<=122},Uc=function(e){var r=rr(e);return r<=90&&65<=r},Of=function(e){return Rc(e)||Uc(e)},Jf=function(e){var r=rr(e);return r<=57&&48<=r},qf=function(e){return Rc(e)||Uc(e)||Jf(e)},Ae=function(e){return p(Bn,B,P,e)},en=_v,Zf=v(function(e,r){return`

(`+(De(e+1)+(") "+Vc(Xf(r))))}),Xf=function(e){return o(Kf,e,P)},Kf=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=en(n);if(g.$===1)return!1;var y=g.a,x=y.a,_=y.b;return Of(x)&&o(Gf,qf,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(B,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,$=o(B,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Ae(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(De(Dr(s))+" ways:"));return o(Pr,`

`,o(B,h,o(Ec,Zf,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Ae(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return h+(Vc(o(Hf,4,f))+(`

`+d))}}),Fe=32,dt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),pt=Ju,no=sv,ao=v(function(e,r){return Ko(r)/Ko(e)}),Qf=$v,Ln=no(o(ao,2,Fe)),jc=L(dt,0,Ln,pt,pt),Nc=Zu,Wc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Gc=mv,bt=qu,nr=v(function(e,r){return I(e,r)>0?e:r}),es=function(e){return{$:0,a:e}},to=Xu,rs=v(function(e,r){e:for(;;){var n=o(to,Fe,e),a=n.a,t=n.b,i=o(B,es(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),ns=function(e){var r=e.a;return r},as=v(function(e,r){e:for(;;){var n=no(r/Fe);if(n===1)return o(to,Fe,e).a;var a=o(rs,e,P),t=n;e=a,r=t;continue e}}),Hc=v(function(e,r){if(r.l){var n=r.l*Fe,a=Gc(o(ao,Fe,n-1)),t=e?Ae(r.z):r.z,i=o(as,t,r.l);return L(dt,bt(r.p)+n,o(nr,5,a*Ln),i,r.p)}else return L(dt,bt(r.p),Ln,pt,r.p)}),ts=ge(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Hc,!1,{z:a,l:n/Fe|0,p:t});var i=Wc(p(Nc,Fe,r,e)),c=e,l=r-Fe,u=n,$=o(B,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),os=v(function(e,r){if(e<=0)return jc;var n=e%Fe,a=p(Nc,n,e-n,r),t=e-n-Fe;return C(ts,r,t,e,P,a)}),Ie=function(e){return!e.$},D=Gv,Z=Rv,k=Wv,se=Uv,ma=Hv,is=Yv,Me=Ev,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=Ar("div"),cs=function(e){return{$:2,a:e}},Yc=v(function(e,r){return e}),Ic=v(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),zr=function(e){return e},ls=zr,mi=qe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),us=zv,Tr=yv,Wr=Lv,An=v(function(e,r){return e<1?r:p(Wr,e,Tr(r),r)}),ka=kv,Da=function(e){return e===""},Ba=v(function(e,r){return e<1?"":p(Wr,0,e,r)}),Oc=Dv,di=ge(function(e,r,n,a,t){if(Da(t)||o(us,"@",t))return q;var i=o(ka,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Oc(o(An,c+1,t));if(l.$===1)return q;var u=l;return oe(Le(mi,e,o(Ba,c,t),u,r,n,a))}else return oe(Le(mi,e,t,q,r,n,a))}),pi=R(function(e,r,n,a){if(Da(a))return q;var t=o(ka,"/",a);if(t.b){var i=t.a;return C(di,e,o(An,i,a),r,n,o(Ba,i,a))}else return C(di,e,"/",r,n,a)}),bi=S(function(e,r,n){if(Da(n))return q;var a=o(ka,"?",n);if(a.b){var t=a.a;return L(pi,e,oe(o(An,t+1,n)),r,o(Ba,t,n))}else return L(pi,e,q,r,n)});v(function(e,r){if(Da(r))return q;var n=o(ka,"#",r);if(n.b){var a=n.a;return p(bi,e,oe(o(An,a+1,r)),o(Ba,a,r))}else return p(bi,e,q,r)});var vs=Mv,io=function(e){},Fn=Br,$s=Fn(0),Jc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,m=$.b,d=n>500?p(Bn,e,r,Ae(m)):L(Jc,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),sr=S(function(e,r,n){return L(Jc,e,r,0,n)}),re=v(function(e,r){return p(sr,v(function(n,a){return o(B,e(n),a)}),P,r)}),da=$t,co=v(function(e,r){return o(da,function(n){return Fn(e(n))},r)}),fs=S(function(e,r,n){return o(da,function(a){return o(da,function(t){return Fn(o(e,a,t))},n)},r)}),ss=function(e){return p(sr,fs(B),Fn(P),e)},ms=n$,ds=v(function(e,r){var n=r;return vc(o(da,ms(e),n))}),ps=S(function(e,r,n){return o(co,function(a){return 0},ss(o(re,ds(e),r)))}),bs=S(function(e,r,n){return Fn(0)}),gs=v(function(e,r){var n=r;return o(co,e,n)});er.Task=e$($s,ps,bs,gs);var hs=fc("Task"),lo=v(function(e,r){return hs(o(co,e,r))}),_s=V$,ys=gv,pa={$:1},qc=function(e){return{$:2,a:e}},Aa={$:0},je=v(function(e,r){return{$:0,a:e,b:r}}),ae=S(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.B;return r.a},Ss=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return oe(o(je,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Zc=function(e){var r=e.b;return o(je,Aa,r)},_r=v(function(e,r){if(r.$)return e;var n=r.a;return n}),xs=S(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Zc(n):n;case 2:var i=a.a.cY;return(I(i+r.eJ,rn(n).b7)>0?o(ae,Ss,_r(o(je,pa,t))):zr)(o(je,qc({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Ic,l.eA,Ke(r,{b7:l.b7+r.eJ})),s=o(e,$,u);return o(je,Aa,{B:T($,s),ab:P,T:o(B,t.B,t.T)})}}),Xc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Cs=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),ws=v(function(e,r){return Ae(p(Cs,e,r,P))}),Kc=S(function(e,r,n){if(r<=0)return P;{var a=T(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,g=h.a,y=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,g,o(ws,r-4,y))))):o(B,_,o(B,c,o(B,s,o(B,g,p(Kc,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),Ls=v(function(e,r){return p(Kc,0,e,r)}),Ps=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=ve(Ae(n),ve(b([a]),t)),c=o(Ls,e,i),l=o(Xc,e,i);if(l.b){var u=l.a,$=l.b;return o(je,pa,{B:u,ab:$,T:Ae(c)})}else{var s=Ae(c);if(s.b){var m=s.a,d=s.b;return o(je,pa,{B:m,ab:P,T:d})}else return r}}),Ts=function(e){var r=e.b;return o(je,pa,r)},zs=function(e){var r=e.b;return o(je,qc({cY:rn(e).b7}),r)},Ms=v(function(e,r){switch(e.$){case 1:return Ts(r);case 2:return Zc(r);case 3:return zs(r);default:var n=e.a;return o(Ps,n,r)}}),Qc=v(function(e,r){var n=r.a,a=r.b;return T(e(n),a)}),ks=v(function(e,r){return Ke(r,{av:e(r.av)})}),Ds=function(e){return{$:3,a:e}},Bs=function(e){return{$:2,a:e}},el=v(function(e,r){return{$:0,a:e,b:r}}),As=v(function(e,r){return{$:1,a:e,b:r}}),Be=v(function(e,r){if(r.$)return q;var n=r.a;return oe(e(n))}),K=function(e){return e<0?-e:e},uo=Bv,Fs=S(function(e,r,n){return o(_r,0/0,uo(o(e,r,n)))}),rl=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Vs=xv,nl=function(e){return p(Vs,B,P,e)},Es=v(function(e,r){var n=o(rl,function(a){return a!=="0"&&a!=="."},nl(r));return ve(e&&n?"-":"",r)}),te=cc,gt=hv,al=Vv,tl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(gt,"0",tl(t))}else{var i=rr(r);return i>=48&&i<57?o(gt,al(i+1),n):"0"}},ht=fv,Rs=bv,Fa=function(e){return o(gt,e,"")},ol=S(function(e,r,n){return e<=0?n:p(ol,e>>1,ve(r,r),e&1?ve(n,r):n)}),Pn=v(function(e,r){return p(ol,e,r,"")}),_t=S(function(e,r,n){return ve(n,o(Pn,e-Tr(n),Fa(r)))}),yt=Sv,il=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return T(n,t)}else{var n=r.a;return T(n,"0")}else return T("0","0")},Us=function(e){var r=o(ro,"e",te(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(_r,0,Oc(o(vs,"+",t)?o(An,1,t):t)),c=il(n),l=c.a,u=c.b,$=ve(l,u),s=i<0?o(_r,"0",o(Be,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Be,Qc(Fa),en(ve(o(Pn,K(i),"0"),$))))):p(_t,i+1,"0",$);return ve(e<0?"-":"",s)}else{var n=r.a;return ve(e<0?"-":"",n)}else return""},js=S(function(e,r,n){if(ht(n)||Rs(n))return te(n);var a=n<0,t=il(Us(K(n))),i=t.a,c=t.b,l=Tr(i)+r,u=ve(o(Pn,-l+1,"0"),p(_t,l,"0",ve(i,c))),$=Tr(u),s=o(nr,1,l),m=o(e,a,p(Wr,s,$,u)),d=p(Wr,0,s,u),f=m?yt(o(_r,"1",o(Be,tl,en(yt(d))))):d,h=Tr(f),g=f==="0"?f:r<=0?ve(f,o(Pn,K(r),"0")):I(r,Tr(c))<0?p(Wr,0,h-r,f)+("."+p(Wr,h-r,h,f)):ve(i+".",p(_t,r,"0",c));return o(Es,a,g)}),cl=js(v(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Ns=Fs(cl),Ws=S(function(e,r,n){var a=o(ao,10,K(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Ns,t,n)}),ll=rv,vo=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ll,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return oe(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=ge(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},qr=ge(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,m=a.d,d=a.e;return C(H,0,r,n,C(H,1,$,s,m,d),C(H,1,i,c,l,u))}else return C(H,e,i,c,C(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,y=f.d,x=f.e,d=a.e;return C(H,0,$,s,C(H,1,h,g,y,x),C(H,1,r,n,d,t))}else return C(H,e,r,n,a,t)}),St=S(function(e,r,n){if(n.$===-2)return C(H,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ll,e,t);switch(u){case 0:return C(qr,a,t,i,p(St,e,r,c),l);case 1:return C(H,a,t,r,c,l);default:return C(qr,a,t,i,c,p(St,e,r,l))}}),bn=S(function(e,r,n){var a=p(St,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return C(H,1,t,i,c,l)}else{var u=a;return u}}),Gs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},ul=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,m=$.c,d=$.d;d.a;var f=d.b,h=d.c,g=d.d,y=d.e,x=$.e;return C(H,0,f,h,C(H,1,n,a,C(H,0,i,c,l,u),g),C(H,1,s,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,x=w.e;return C(H,1,n,a,C(H,0,i,c,l,u),C(H,0,s,m,d,x))}else return e},gi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,g=f.c,y=f.d,x=f.e;return C(H,0,i,c,C(H,1,u,$,s,m),C(H,1,n,a,d,C(H,0,h,g,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,M=e.e;M.a;var h=M.b,g=M.c,y=M.d,x=M.e;return C(H,1,n,a,C(H,0,i,c,w,d),C(H,0,h,g,y,x))}else return e},Hs=Ta(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return C(H,n,l,u,$,C(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,gi(r)}else break e;else return c.a,c.d,gi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,C(H,r,n,a,ra(t),l);var u=ul(e);if(u.$===-1){var $=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(qr,$,s,m,ra(d),f)}else return tr}else return C(H,r,n,a,ra(t),l)}else return tr},gn=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,C(H,n,a,t,o(gn,e,i),c);var u=ul(r);if(u.$===-1){var $=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return C(qr,$,s,m,o(gn,e,d),f)}else return tr}else return C(H,n,a,t,o(gn,e,i),c);else return o(Ys,e,Nt(Hs,e,r,n,a,t,i,c))}),Ys=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(hr(e,a)){var l=Gs(c);if(l.$===-1){var u=l.b,$=l.c;return C(qr,n,u,$,i,ra(c))}else return tr}else return C(qr,n,a,t,i,o(gn,e,c))}else return tr}),Is=v(function(e,r){var n=o(gn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return C(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=S(function(e,r,n){var a=r(o(vo,e,n));if(a.$)return o(Is,e,n);var t=a.a;return p(bn,e,t,n)}),Os=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(As,T(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(el,T(i,c),p(Ws,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===3?Ds(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===2?Bs(n):a}))}},Js=function(e){return ks(Os(e))},qs=v(function(e,r){return o(re,Js(e),r)}),Zs=v(function(e,r){return Ke(r,{eA:o(qs,e,r.eA)})}),Xs=v(function(e,r){var n=r.a,a=r.b;return o(je,n,Ke(a,{B:o(Qc,Zs(e),a.B)}))}),Ks=v(function(e,r){var n=r.a,a=r.b;return T(n,e(a))}),Qs=S(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,Ke(t,{B:o(Ks,o(e,i.a,r),i)}))}),em=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(xs,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Xs,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(Qs,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ms,l,a.G)})}}),rm=v(function(e,r){return o(je,Aa,{B:T(e,r(e)),ab:P,T:P})}),nm=a$,hi=nm(P),ba=Nv,Tn=jv,am=l$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(m){return Me({eo:m,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",ba(Tn)))},o(k,"left",Z))},o(k,"pressedKeys",ba(Tn)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Me({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Me({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Me({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se))))),tm=function(e){return{$:4,a:e}},om={$:0},im=uc,Ye=v(function(e,r){return o(dc,e,im(r))}),Y=Ye("className"),cm=function(e){var r=e.b.B;return r.b},ga=Ye("id"),lm=m$,ha=lm,um=d$,ee=um,vm={$:1},$m=function(e){return{$:3,a:e}},fm=function(e){return{$:5,a:e}},_i=Ar("a"),$o=Ar("button"),yi=function(e){return o(Ye,"href",g$(e))},sm=Cr("clip-rule"),xe=Cr("d"),mm=Cr("fill"),vl=sc("http://www.w3.org/2000/svg"),dm=vl("svg"),pm=Cr("viewBox"),bm=o(p$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ve=dm(b([pm("0 0 24 24"),mm("currentColor"),o(ee,"width","100%"),o(ee,"height","100%"),bm("http://www.w3.org/2000/svg")])),gm=Cr("fill-rule"),Ce=vl("path"),Mr={eD:Ve(b([o(Ce,b([xe("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ve(b([o(Ce,b([xe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ve(b([o(Ce,b([xe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ve(b([o(Ce,b([xe("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Ce,b([xe("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ve(b([o(Ce,b([xe("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Ce,b([xe("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ve(b([o(Ce,b([xe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ve(b([o(Ce,b([xe("M7 5V19L18 12L7 5Z")]),P)])),fr:Ve(b([o(Ce,b([xe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ve(b([o(Ce,b([xe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ve(b([o(Ce,b([gm("evenodd"),sm("evenodd"),xe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ve(b([o(Ce,b([xe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ve(b([o(Ce,b([xe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},hm=function(e){return{$:0,a:e}},$l=mc,fl=v(function(e,r){return o($l,e,hm(r))}),fo=function(e){return o(fl,"click",Me(e))},Si=Ye("target"),_m=Ye("title"),xt=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return C(H,n,a,o(e,a,t),o(xt,e,i),o(xt,e,c))}),ym=ft,$r=ym,Sm=function(e){return p(Qt,S(function(r,n,a){return o(B,n,a)}),P,e)},xm=v(function(e,r){return{$:3,a:e,b:r}}),Cm=v(function(e,r){return{$:2,a:e,b:r}}),wm=v(function(e,r){return{$:0,a:e,b:r}}),Lm=v(function(e,r){return{$:1,a:e,b:r}}),mr=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Pm=L(mr,0/255,0/255,0/255,1),Tm=uc,sl=v(function(e,r){return o(dc,e,Tm(r))}),zm=sl("checked"),Je=dv,Mm=S(function(e,r,n){return ve(o(Pn,e-Tr(n),Fa(r)),n)}),_a=ov,ml=function(e){var r=function(n){return n<10?De(n):Fa(al(87+n))};return e<16?r(e):ve(ml(e/16|0),r(o(_a,16,e)))},km=o(ae,ml,o(Mm,2,"0")),so=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},Dm=function(e){var r=so(e),n=r.cN,a=r.cd,t=r.b5;return o(Pr,"",o(B,"#",o(re,o(ae,Je,km),b([n*255,a*255,t*255]))))},Ct=Ye("htmlFor"),Bm=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ya=v(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return e(n)}}),Am=S(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),mo=v(function(e,r){return p(sr,Am(e),P,r)}),dl=R(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Fm=N$,Vm=Av,Em=v(function(e,r){if(r.$)return _e(e);var n=r.a;return $e(n)}),Rm=j$,Um=function(e){return o(Rm,{ew:!1,fg:!1},e)},po=function(e){if(e.b){var r=e.a;return e.b,oe(r)}else return q},jm=v(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return $e(e(n))}}),Nm=function(e){return{$:2,a:e}},Wm=function(e){return{$:0,a:e}},Gm=function(e){return{$:1,a:e}},Ha=v(function(e,r){return rr(r)-rr(e)}),Ya=S(function(e,r,n){var a=rr(n);return I(rr(e),a)<1&&I(a,rr(r))<1}),Hm=v(function(e,r){var n=function(t){return I(t,e)<0?$e(t):_e(Gm(r))},a=p(Ya,"0","9",r)?$e(o(Ha,"0",r)):p(Ya,"a","z",r)?$e(10+o(Ha,"a",r)):p(Ya,"A","Z",r)?$e(10+o(Ha,"A",r)):_e(Wm(r));return o(ya,n,a)}),pl=v(function(e,r){var n=en(r);if(n.$===1)return $e(0);var a=n.a,t=a.a,i=a.b;return o(ya,function(c){return o(ya,function(l){return $e(c+l*e)},o(pl,e,i))},o(Hm,e,t))}),Ym=v(function(e,r){return 2<=e&&e<=36?o(pl,e,yt(r)):_e(Nm(e))}),Im=Ym(16),Om=S(function(e,r,n){return L(mr,e,r,n,1)}),Jm=R(function(e,r,n,a){return L(mr,e,r,n,a)}),Vn=tv,qm=v(function(e,r){var n=o(Vn,10,e);return Je(r*n)/n}),Zm=Pv,Xm=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=nl(n);if(a.b&&!a.b.b){var t=a.a;return Vm(b([t,t]))}else return n};return o(ae,Zm,o(ae,function(n){return o(Be,function(a){return p(Fm,1,a,n)},Um(e))},o(ae,Bm(po),o(ae,Be(function(n){return n.fG}),o(ae,Be(mo(zr)),o(ae,Em("Parsing hex regex failed"),ya(function(n){var a=o(re,o(ae,r,o(ae,Im,jm(Qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return $e(L(Jm,t/255,c/255,u/255,o(qm,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return $e(p(Om,t/255,c/255,u/255))}else break e;return _e("Parsing ints from hex failed")})))))))}(),Sa=Ar("input"),wt=Ar("label"),Lt=Ye("name"),bl=v(function(e,r){return p(sr,k,r,e)}),Km=o(bl,b(["target","checked"]),Z),Qm=function(e){return o(fl,"change",o(ma,e,Km))},ed=function(e){return T(e,!0)},rd=function(e){return{$:1,a:e}},nd=v(function(e,r){return o($l,e,rd(r))}),ad=o(bl,b(["target","value"]),Tn),bo=function(e){return o(nd,"input",o(ma,ed,o(ma,e,ad)))},gl=Ye("max"),hl=Ye("min"),_l=function(e){return o(Ye,"step",e)},xa=Ye("type"),go=Ye("value"),xi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(O,P,b([o(wt,b([Ct(r)]),b([o(O,b([Y("relative w-full")]),b([o(O,b([Y("inline-block")]),b([$r(r)])),o(O,b([Y("inline-block float-right")]),b([$r(te(n))]))]))])),o(Sa,b([xa("range"),o(ee,"width","100%"),ga(r),Lt(r),hl(te(a)),gl(te(t)),go(te(n)),_l(te(i)),bo(o(ae,uo,o(ae,_r(42),c)))]),P)]))},td=v(function(e,r){if(r.$)return e;var n=r.a;return n}),od=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,b([Y("h-12 py-4")]),b([o(wt,b([Y("block"),Ct(e)]),b([o(Sa,b([Y("relative bottom-[1px] align-middle mr-2"),xa("checkbox"),ga(e),Lt(e),Qm(xm(e)),zm(c)]),P),$r(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return xi({cg:e,cs:i,cw:t,cA:wm(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return xi({cg:e,cs:i,cw:t,cA:o(ae,Je,Lm(e)),cW:1,c1:c});default:var c=r.a;return o(O,P,b([o(O,b([o(ee,"margin-bottom","6px")]),b([o(wt,b([Ct(e)]),b([$r(e)]))])),o(Sa,b([xa("color"),o(ee,"width","100%"),o(ee,"height","26px"),o(ee,"padding","0px"),ga(e),Lt(e),bo(function(l){return o(Cm,e,o(td,Pm,Xm(l)))}),go(Dm(c))]),P)]))}}),id=function(e){return o(O,b([Y("p-4 border-y-[0.5px] border-white20")]),b([o(O,b([Y("text-lg pb-2")]),b([$r(e.fh)])),o(O,b([Y("pl-2 pr-2")]),Sm(o(xt,od,e.av)))]))},cd=function(e){return o(O,b([Y("text-xs text-white60")]),o(re,id,e))},ld=function(e){return o(O,b([Y("absolute left-[104px] bottom-2 text-sm text-white40")]),b([$r("clock: "+o(cl,3,rn(e).b7))]))},ud=function(e){e.a;var r=e.b.T;return o(Be,function(n){return Je(60/(rn(e).b7-n))},o(Be,o(ae,ns,function(n){return n.b7}),po(o(Xc,59,r))))},vd=function(e){return o(O,b([Y("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=ud(e);if(r.$===1)return b([$r("... Fps")]);var n=r.a;return b([$r(De(n)+" Fps")])}())},$d=function(e){return{$:0,a:e}},fd=function(e){var r=e.b.T;return Dr(r)},sd=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Dr(r)+1+Dr(n)},md=function(e){return o(Sa,b([Y("absolute w-full"),xa("range"),hl(De(0)),gl(De(sd(e)-1)),go(De(fd(e))),_l(De(1)),bo(o(ae,uo,o(ae,_r(42),o(ae,Je,$d))))]),P)},Ci={$:1},wi={$:3},Li={$:2},Pt=function(e){return!e.b},yl=sl("disabled"),Ia=S(function(e,r,n){return o($o,b([Y("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Y(n),yl(e),fo(r)]),b([$r("REC")]))}),Oa=S(function(e,r,n){return o($o,b([Y("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),yl(e),fo(n)]),b([o(O,b([Y("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),dd=function(e){var r=e.a,n=e.b.ab;return o(O,b([Y("py-1")]),b([function(){switch(r.$){case 0:return p(Ia,!1,Ci,"text-red-500 font-bold");case 1:return p(Ia,!1,Li,"text-white60 hover:text-white80 font-bold");default:return p(Ia,!0,Li,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(Oa,Pt(n),Mr.fq,wi);case 1:return p(Oa,Pt(n),Mr.fq,wi);default:return p(Oa,!1,Mr.fp,Ci)}}()]))},pd=function(e){return o(O,b([Y("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([md(e),dd(e),vd(e),ld(e)]))},bd=function(e){var r=e.a;return hr(r,Aa)},gd=v(function(e,r){var n=bd(r.G)?o(O,P,P):o(O,b([Y("absolute pointer-events-none w-8 h-8"),o(ee,"left",te(e.fs.fU+.5*e.cT.fS)+"px"),o(ee,"top",te(-e.fs.fY+.5*e.cT.eW)+"px")]),b([o(O,b([Y(e.fs.e4?"text-black80":"text-black40")]),b([Mr.fs]))]));return o(O,P,b([n]))}),hd=v(function(e,r){var n=o($o,b([Y(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),fo(vm),_m("Distraction Free Mode")]),b([Mr.f0])),a=40,t=260,i=o(O,b([Y("absolute w-8 bottom-12")]),b([o(_i,b([Y("text-twitterBlue40 hover:text-twitterBlue"),yi("https://twitter.com/AzizErkalSelman"),Si("_blank")]),b([Mr.fN]))])),c=80,l=o(O,b([Y("absolute w-8 bottom-2")]),b([o(_i,b([Y("text-githubCat40 hover:text-githubCat"),yi("https://github.com/erkal/elm-3d-playground-exploration"),Si("_blank")]),b([Mr.eQ]))])),u=e.cT.fS>640?F(e.cT.eW,a+t,e.cT.fS-(a+t)):F(e.cT.eW-c,a,e.cT.fS-a),$=u.a,s=u.b,m=u.c;return r.aL?o(O,b([Y("fixed w-10 h-10 p-1")]),b([n])):o(O,P,b([o(O,b([Y("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(ee,"width",te(a)+"px")]),b([n,i,l])),o(O,b([Y("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(ee,"width",te(t)+"px"),o(ee,"height",te($)+"px")]),b([o(ha,$m,cd(rn(r.G).eA))])),o(O,b([Y("absolute bottom-0"),o(ee,"left",te(s)+"px"),o(ee,"height",te(c)+"px"),o(ee,"width",te(m)+"px")]),b([o(ha,fm,pd(r.G))])),o(gd,e,r)]))}),_d=S(function(e,r,n){var a=cm(n.G),t=rn(n.G);return o(O,b([Y("bg-black40"),Y("select-none"),Y("antialiased"),Y("font-mono"),o(ee,"width",te(t.cT.fS)+"px"),o(ee,"height",te(t.cT.eW)+"px")]),b([o(O,b([Y("fixed")]),b([o(ha,Yc(om),o(e,t,a))])),o(O,b([ga("gui")]),b([o(hd,t,n),o(ha,tm,o(r,t,a))]))]))}),yd=qe(function(e,r,n,a,t,i){var c=v(function(u,$){return T(L(em,r,i,u,$),hi)}),l=function(u){var $=o(Ic,n,u.e1);return T({aL:u.e1.cT.fS<500,G:o(rm,$,a)},hi)};return _s({e0:l,fH:Yc(am(cs)),fO:c,fQ:o(_d,e,t)})}),Sd=R(function(e,r,n,a){return Le(yd,e,r,n,a,v(function(t,i){return o(O,P,P)}),S(function(t,i,c){return c}))}),xd=function(e){return{}},Cd=S(function(e,r,n){return{av:n,e5:r,fh:e}}),Sl=tr,wd=function(e){return p(Bn,v(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),Sl,e)},Ld=S(function(e,r,n){return p(Cd,e,r,wd(n))}),Pi=Ld,Yn=S(function(e,r,n){var a=r.a,t=r.b;return T(e,o(el,T(a,t),n))}),ur=iv,Pd=b([p(Pi,"Camera",!0,b([p(Yn,"camera distance",T(3,8),4),p(Yn,"camera azimuth",T(0,2*ur),0),p(Yn,"camera elevation",T(-ur/2,ur/2),.5)])),p(Pi,"Parameters",!0,b([p(Yn,"sun size",T(.1,.5),.3)]))]),Td=v(function(e,r){return r}),Tt=L(mr,52/255,101/255,164/255,1),zd=L(mr,115/255,210/255,22/255,1),ho=function(e){return{$:5,a:e}},xl=function(e){return ho(e)},_o=v(function(e,r){return{$:4,a:e,b:r}}),Cl=function(e){return e},nn=v(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Md=v(function(e,r){return Cl(T(e,o(nn,r,e)))}),wl=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),kd=v(function(e,r){var n=r.a,a=r.b,t=r.c;return p(wl,e(n),e(a),e(t))}),Ne=function(e){return e},dr={fU:0,fY:0,c6:0},Ja=v(function(e,r){return o(_o,e,o(Md,dr,o(kd,Ne,r)))}),Dd=L(mr,204/255,0/255,0/255,1),Bd=xl(b([o(Ja,Dd,F(100,0,0)),o(Ja,zd,F(0,100,0)),o(Ja,Tt,F(0,0,100))])),Ad=v(function(e,r){return o(Be,function(n){if(n.$)return 0;var a=n.b;return a},o(vo,e,r.av))}),Fd=v(function(e,r){return o(_r,0,po(o(mo,Ad(e),r)))}),Vd=v(function(e,r){return o(Fd,e,r.eA)}),na=Vd,Ed=vv,Rd=function(e){return e},zt=function(e){var r=e;return-r},Ud=v(function(e,r){var n=e,a=r;return{fU:n.fY*a.c6-n.c6*a.fY,fY:n.c6*a.fU-n.fU*a.c6,c6:n.fU*a.fY-n.fY*a.fU}}),Ll=function(e){var r=e;return r.c4},Pl=function(e){var r=e;return r.c5},jd=function(e){return o(Ud,Ll(e),Pl(e))},an=function(e){var r=e;return r.cB},Zr=cv,Xr=lv,aa=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=Xr(c),$=a.eH,s=$,m=s.fU*u,d=l*m,f=m*m,h=s.fY*u,g=l*h,y=m*h,x=h*h,_=1-2*(f+x),w=s.c6*u,M=l*w,N=2*(y-M),U=2*(y+M),E=m*w,j=2*(E+g),W=2*(E-g),A=h*w,J=2*(A-d),X=2*(A+d),ce=w*w,fe=1-2*(x+ce),ie=1-2*(f+ce);return{fU:fe*i.fU+N*i.fY+j*i.c6,fY:U*i.fU+ie*i.fY+J*i.c6,c6:W*i.fU+X*i.fY+_*i.c6}}),En=S(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=Xr(c),$=a.cB,s=$,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c6-s.c6,h=a.eH,g=h,y=g.fU*u,x=l*y,_=y*y,w=g.fY*u,M=l*w,N=y*w,U=w*w,E=1-2*(_+U),j=g.c6*u,W=l*j,A=2*(N-W),J=2*(N+W),X=y*j,ce=2*(X+M),fe=2*(X-M),ie=w*j,de=2*(ie-x),ze=2*(ie+x),Se=j*j,pr=1-2*(U+Se),br=1-2*(_+Se);return{fU:s.fU+pr*m+A*d+ce*f,fY:s.fY+J*m+br*d+de*f,c6:s.c6+fe*m+ze*d+E*f}}),tn=function(e){return e},Fr=function(e){var r=e;return r.c4},Vr=function(e){var r=e;return r.c5},Er=function(e){var r=e;return r.c7},Tl=S(function(e,r,n){return tn({cB:p(En,e,r,an(n)),c4:p(aa,e,r,Fr(n)),c5:p(aa,e,r,Vr(n)),c7:p(aa,e,r,Er(n))})}),Ti=S(function(e,r,n){return p(Tl,e(n),r,n)}),zl=function(e){var r=e;return r.eH},Ml=v(function(e,r){return tn({cB:o(nn,e,an(r)),c4:Fr(r),c5:Vr(r),c7:Er(r)})}),Nd=v(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c6:n*a.c6}}),Wd=S(function(e,r,n){return o(Ml,o(Nd,r,e),n)}),Gd=S(function(e,r,n){return p(Wd,zl(e(n)),r,n)}),wr=v(function(e,r){return{eH:r,cB:e}}),Hd=function(e){var r=e;return o(wr,r.cB,r.c4)},Yd=function(e){var r=e;return o(wr,r.cB,r.c5)},Id=function(e){var r=e;return o(wr,r.cB,r.c7)},Od=function(e){var r=tn({cB:e.aR,c4:Pl(e.dl),c5:jd(e.dl),c7:Ll(e.dl)}),n=p(Gd,Id,e.cc,p(Ti,Hd,zt(e.bC),p(Ti,Yd,e.bx,r)));return n},Jd=function(e){return{$:0,a:e}},We=function(e){var r=e;return K(r)},ta=function(e){var r=e;return .5*r},qd=uv,Zd=function(e){var r=e;return qd(r)},Xd=function(e){var r=ta(We(e.ej)),n=Zd(r);return{cM:Jd(n),c2:e.c2}},vr=function(e){return e},kl=zr,kr=function(e){return e},Kd=kr({fU:1,fY:0,c6:0}),yo=Kd,Dl=kr({fU:0,fY:0,c6:1}),Va=Dl,Qd=kl({cB:dr,c4:Va,c5:yo}),e0=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cc;return Xd({ej:vr(2*Ed(.5)),c2:Od({bx:vr(n),cc:Ne(t),bC:vr(a),aR:Rd(r),dl:Qd})})},r0=function(e){return e0({bx:o(na,"camera azimuth",e),cc:o(na,"camera distance",e),bC:o(na,"camera elevation",e),aR:{fU:0,fY:0,c6:0}})},Gr=function(e){return e*ur/180},So=v(function(e,r){return{$:2,a:e,b:r}}),n0=S(function(e,r,n){return{k:o(wr,e,r),e9:We(n.e9),fu:We(n.fu)}}),Bl=kr({fU:0,fY:1,c6:0}),a0=S(function(e,r,n){return o(So,e,p(n0,dr,Bl,{e9:Ne(n),fu:Ne(r)}))}),Mt=function(e){return{$:0,a:e}},Al=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Fl=S(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),qa=function(e){return p(Fl,0,1,e<=.04045?e/12.92:o(Vn,(e+.055)/1.055,2.4))},Rn=H$,t0=function(e){var r=so(e),n=r.cN,a=r.cd,t=r.b5;return p(Rn,qa(n),qa(a),qa(t))},oa=function(e){return p(Al,0,Mt(t0(e)),Mt(0))},Vl=v(function(e,r){return{$:0,a:e,b:r}}),xo=v(function(e,r){return{$:3,a:e,b:r}}),El=v(function(e,r){return{$:1,a:e,b:r}}),o0=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),i0=function(e){var r=e;return r},Co=function(e){var r=e;return i0(r.er)},wo=function(e){var r=e;return r.aK},c0=v(function(e,r){return{er:o(Ml,e,Co(r)),aK:wo(r)}}),l0=v(function(e,r){var n=r;return o(wr,o(nn,e,n.cB),n.eH)}),u0=v(function(e,r){var n=r;return{k:o(l0,e,n.k),e9:n.e9,fu:n.fu}}),Lo=function(e){var r=e;return r},Rl=v(function(e,r){var n=Lo(r),a=n.a,t=n.b;return Cl(T(e(a),e(t)))}),v0=v(function(e,r){return o(Rl,nn(e),r)}),Po=function(e){var r=e;return r.ey},To=function(e){var r=e;return r.fu},zo=v(function(e,r){return{ey:r,fu:We(e)}}),$0=v(function(e,r){return o(zo,To(r),o(nn,e,Po(r)))}),Ul=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return F(e(a),e(t),e(i))}),f0=v(function(e,r){return o(Ul,nn(e),r)}),jl=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(o0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Vl,s,o(c0,i,c));case 1:var s=r.a,l=r.b;return o(El,s,o(f0,i,l));case 3:var s=r.a,u=r.b;return o(xo,s,o($0,i,u));case 2:var s=r.a,$=r.b;return o(So,s,o(u0,i,$));case 4:var s=r.a,m=r.b;return o(_o,s,o(v0,i,m));default:var d=r.a;return ho(o(re,jl(F(n,a,t)),d))}}),zi=function(e){return jl(F(e,0,0))},s0=S(function(e,r,n){return{er:p(Tl,e,r,Co(n)),aK:wo(n)}}),m0=v(function(e,r){var n=o(En,e,r),a=o(aa,e,r);return function(t){var i=t;return o(wr,n(i.cB),a(i.eH))}}),d0=S(function(e,r,n){var a=n;return{k:p(m0,e,r,a.k),e9:a.e9,fu:a.fu}}),p0=S(function(e,r,n){return o(Rl,o(En,e,r),n)}),b0=S(function(e,r,n){return o(zo,To(n),p(En,e,r,Po(n)))}),g0=S(function(e,r,n){return o(Ul,o(En,e,r),n)}),Mo=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Vl,l,p(s0,e,r,a));case 1:var l=n.a,t=n.b;return o(El,l,p(g0,e,r,t));case 3:var l=n.a,i=n.b;return o(xo,l,p(b0,e,r,i));case 2:var l=n.a,c=n.b;return o(So,l,p(d0,e,r,c));case 4:var l=n.a,u=n.b;return o(_o,l,p(p0,e,r,u));default:var $=n.a;return ho(o(re,o(Mo,e,r),$))}}),ko=Bl,h0=o(wr,dr,ko),Mi=v(function(e,r){return p(Mo,h0,vr(e),r)}),_0=o(wr,dr,Va),ki=v(function(e,r){return p(Mo,_0,vr(e),r)}),kt=v(function(e,r){return o(xo,e,o(zo,Ne(r),dr))}),y0=v(function(e,r){return(r-Gc(r/e)*e)/e}),Di=v(function(e,r){return 360*o(y0,e,r)}),S0=L(mr,255/255,255/255,255/255,1),x0=function(e){var r=o(ki,Gr(20),p(a0,oa(Tt),.2,.05)),n=o(ki,Gr(20),o(Mi,Gr(o(Di,3,e.b7)),o(zi,.2,o(kt,oa(S0),.04)))),a=o(kt,oa(Tt),.1);return o(Mi,Gr(o(Di,10,e.b7)),o(zi,1,xl(b([a,n,r]))))},Za=function(e){return e/255},C0=S(function(e,r,n){return L(mr,Za(e),Za(r),Za(n),1)}),w0=L(mr,245/255,121/255,0/255,1),L0=function(e){return o(kt,oa(w0),o(na,"sun size",e))},P0=function(e){return e},T0=function(e){return Ne(.01*e)},Bi=function(e){return e},z0=function(e){return e},M0=function(e){return{$:0,a:e}},k0=M0,D0={$:3},B0=D0,A0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),F0=A0,V0=v(function(e,r){return r.b?p(sr,B,r,e):e}),Ge=function(e){return p(sr,V0,P,e)},Do=v(function(e,r){return Ge(o(re,e,r))}),E0=function(e){return{$:1,a:e}},R0=E0,U0=function(e){return o(Cr,"height",De(e))},j0=function(e){return f$(b$(e))},N0=j0,W0=function(e){return{$:2,a:e}},G0=W0,H0=function(e){return o(Pr,"",e)},Y0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Je(l*1e3)/1e3},c=function(l){return Je(l*1e4)/100};return H0(b(["rgba(",te(c(r)),"%,",te(c(n)),"%,",te(c(a)),"%,",te(i(t)),")"]))},I0=v(function(e,r){switch(r.$){case 0:return o(Bf,e,r);case 1:return o(Af,e,r);case 2:return o(Ff,e,r);case 3:return o(Vf,e,r);case 4:return o(Ef,e,r);default:return o(Rf,e,r)}}),O0=v(function(e,r){switch(r.$){case 0:return o(uf,e,r);case 1:return o(vf,e,r);case 2:return o($f,e,r);case 3:return o(ff,e,r);case 4:return o(sf,e,r);case 5:return o(mf,e,r);case 6:return o(df,e,r);case 7:return o(pf,e,r);default:return bf(e)}}),J0=S(function(e,r,n){return p(Df,e,r,n)}),Ai=function(e){var r=e;return r},on=Z$,Xa=L(on,1,1,1,1),Ze=S(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),q0=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Z0=v(function(e,r){var n=e,a=r.fU,t=r.fY;return p(q0,n*a/t,n,n*(1-a-t)/t)}),X0=function(e){var r=e.a,n=e.b,a=e.c;return p(Rn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Bo=v(function(e,r){return X0(o(Z0,e,r))}),Nl=v(function(e,r){return{dp:hr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=nf,K0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ka=ge(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(on,a.bX,a.bX,a.bX,i);return Le(t,e,c,K0(a),a.dp,r,n)}),Wl=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,m=o(Nl,c,a),d=l,f=i;e=u,r=$,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,g=o(B,C(Ka,e,r,n,a,h),i.M);return{M:g,U:i.U,fB:i.fB};case 3:var y=t.b,x=o(B,C(Ka,e,r,n,a,y),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,w=o(B,C(Ka,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var M=t.a;return p(Bn,L(Wl,e,r,n,a),i,M)}}),Q0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Gl=Q0,Ao=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ep=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,518,r,n,a)},rp=v(function(e,r){return{$:6,a:e,b:r}}),np=rp,Hl=b([ep({V:1,W:0,Z:!1}),L(Gl,!1,!1,!1,!1),o(np,0,1)]),Kr=519,Fo=8,Yl=15,Yr=7681,ap={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=lf,tp=v(function(e,r){return{$:0,a:e,b:r}}),op=tp({df:1,$7:0,dV:5}),ke=W$,ip=op(b([{bT:o(ke,-1,-1)},{bT:o(ke,1,-1)},{bT:o(ke,-1,1)},{bT:o(ke,1,1)}])),cp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Vo=S(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=v(function($,s){var m=$;return s(m)}),l=v(function($,s){var m=$;return s(m)}),u=function($){return o(ae,c($.bl),o(ae,l($.a8),o(ae,l($.bt),l($.bu))))};return o(u,n,o(u,r,p(lp,a,t,i)))}),Eo=function(e){return p(Vo,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Ro=function(e){return C(ne,b([Eo(e),L(Gl,!1,!1,!1,!1)]),cp,ap,ip,{})},up=Ro({a8:Yr,cp:0,cO:Fo,bl:Kr,c3:Yl,bt:Yr,bu:Yr}),vp=516,Fi=5386,ye=7680,$p=function(e){return o(Vn,2,e+4)},Il=function(e){return Ro({a8:ye,cp:Yl,cO:Fo,bl:vp,c3:$p(e),bt:Fi,bu:Fi})},fp=S(function(e,r,n){return Ge(b([p(Ze,e,n,Hl),b([Il(r),up])]))}),sp=v(function(e,r){return Ge(o(Ec,fp(e),r))}),mp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,513,r,n,a)},dp=mp({V:1,W:0,Z:!0}),pp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},bp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,m=u.b,d=u.c,f=$.a,h=$.b,g=$.c;return pp(s)(m)(d)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},gp=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vi=v(function(e,r){var n=e,a=r;return p(gp,32774,n,a)}),hp=1,Ei=771,_p=770,Uo=bp({bv:0,aH:o(Vi,hp,Ei),by:0,bA:o(Vi,_p,Ei),bF:0,bV:0}),Rr=b([dp,Uo]),yp=function(e){var r=e;return r.dO},Sp=function(e){var r=e;return r.dP},Ol=function(e){var r=e;return r.dQ},xp=function(e){var r=e;return r.dR},Cp=function(e){var r=e;return r.dS},Jl=function(e){var r=e;return r.dT},Ir=v(function(e,r){var n=e,a=r;return a-n}),ql=function(e){return F(o(Ir,xp(e),yp(e)),o(Ir,Cp(e),Sp(e)),o(Ir,Jl(e),Ol(e)))},Ri=function(e){var r=e;return an(r)},wp=function(e){return e},Lp=function(e){return tn({cB:wp({fU:e.H,fY:e.I,c6:e.J}),c4:kr({fU:e.q,fY:e.r,c6:e.s}),c5:kr({fU:e.t,fY:e.u,c6:e.v}),c7:kr({fU:e.w,fY:e.x,c6:e.y})})},Qa=v(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,$=u;return{fU:a.fU*$.fU+a.fY*$.fY+a.c6*$.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Zl=v(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,$=n.c7,s=$,m=n.c5,d=m,f=n.c4,h=f;return{fU:c*h.fU+l*h.fY+u*h.c6,fY:c*d.fU+l*d.fY+u*d.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Xl=v(function(e,r){return{cB:o(Zl,e,an(r)),c4:o(Qa,e,Fr(r)),c5:o(Qa,e,Vr(r)),c7:o(Qa,e,Er(r))}}),Pp=S(function(e,r,n){return{fU:e,fY:r,c6:n}}),Ca=function(e){var r=e;return r},ue=v(function(e,r){var n=e,a=r;return o(nr,n,a)}),ia=v(function(e,r){return I(e,r)<0?e:r}),me=v(function(e,r){var n=e,a=r;return o(ia,n,a)}),Tp=v(function(e,r){var n=Ca(r),a=Ca(e);return{dO:o(ue,a.dO,n.dO),dP:o(ue,a.dP,n.dP),dQ:o(ue,a.dQ,n.dQ),dR:o(me,a.dR,n.dR),dS:o(me,a.dS,n.dS),dT:o(me,a.dT,n.dT)}}),He=function(e){var r=e;return r},zp=function(e){var r=e;return F(r.fU,r.fY,r.c6)},hn=v(function(e,r){var n=e,a=r;return a+n}),Mp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ta(We(a)),c=ta(We(n)),l=ta(We(t)),u=zp(r),$=u.a,s=u.b,m=u.c;return{dO:o(hn,c,$),dP:o(hn,i,s),dQ:o(hn,l,m),dR:o(Ir,c,$),dS:o(Ir,i,s),dT:o(Ir,l,m)}}),Ui=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,$=t.fY*r,s=t.fU*r,m=He(Er(e)),d=K(l*m.fU)+K(c*m.fY)+K(i*m.c6),f=He(Vr(e)),h=K(l*f.fU)+K(c*f.fY)+K(i*f.c6),g=He(Fr(e)),y=K(l*g.fU)+K(c*g.fY)+K(i*g.c6),x=o(Mp,F(y,h,d),o(Zl,e,p(Pp,s,$,u)));if(a.$)return oe(x);var _=a.a;return oe(o(Tp,_,x))}),Dt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 1:var c=t.a,l=L(Ui,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 2:var f=e,h=r,g=n,y=i;e=f,r=h,n=g,a=y;continue e;case 3:var c=t.a,l=L(Ui,e,r,c,n),f=e,h=r,g=l,y=i;e=f,r=h,n=g,a=y;continue e;case 4:var u=t.a,f=e,h=r,g=L(Dt,e,r,n,u),y=i;e=f,r=h,n=g,a=y;continue e;default:var $=t.a,s=t.b,m=o(Xl,Lp($),e),d=r*$.bX,f=e,h=r,g=L(Dt,m,d,n,b([s])),y=i;e=f,r=h,n=g,a=y;continue e}}else return n}),cn=Y$,ln=I$,un=O$,Kl=function(e){return{$:4,a:e}},kp=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Un=function(e){return Kl(o(kp,e,P))},Dp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Bp=function(e){var r=e;return r},ji=Ro({a8:Yr,cp:0,cO:Fo,bl:Kr,c3:255,bt:Yr,bu:Yr}),Hr=pv,cr=0,Ap=function(e){var r=e,n=o(nr,K(r.fU),o(nr,K(r.fY),K(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=Hr(i*i+t*t+a*a);return c*n}else return cr},we={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},Re=v(function(e,r){var n=e,a=r;return Qe({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),mn=T({bd:o(Re,we,we),bK:o(Re,we,we),bL:o(Re,we,we),bM:o(Re,we,we)},L(on,0,0,0,0)),le=v(function(e,r){var n=r;return e*n}),Ql=514,eu=function(e){var r=e.Z,n=e.W,a=e.V;return L(Ao,515,r,n,a)},ru=240,Fp=b([eu({V:1,W:0,Z:!0}),Eo({a8:ye,cp:ru,cO:0,bl:Ql,c3:0,bt:ye,bu:ye}),Uo]),Vp=v(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=We(a),l=c,u=We(t),$=u,s=n.cM;if(s.$){var d=s.a;return ht($)?Qe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return ht($)?Qe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),In=v(function(e,r){return(1&e>>r)===1?0:1}),Ep=function(e){return b([eu({V:1,W:0,Z:!0}),Eo({a8:ye,cp:ru,cO:e,bl:Ql,c3:0,bt:ye,bu:ye}),Uo])},Rp=S(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=L(on,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(Ze,e,T(r,i),Ep(t))},o(Jr,1,o(Vn,2,n)-1)))}),zn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Or=function(e){var r=e;return r},Up=af,Ni=function(e){var r=e;return zn(Er(r))},jp={cB:dr,c4:yo,c5:ko,c7:Va},Ea=function(e){var r=e;return r},Np=function(e){var r=Ea(an(e)),n=He(Er(e)),a=He(Vr(e)),t=He(Fr(e));return Qe({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Wp=v(function(e,r){var n=r;return Np(o(Xl,n,e))}),Gp=function(e){return o(Wp,jp,e)},Hp=function(e){var r=e;return r.c2},Yp=function(e){var r=e;return Fr(r)},Ip=function(e){var r=e;return Vr(r)},Op=function(e){var r=Hp(e.ev),n=tn({cB:Ri(r),c4:Yp(r),c5:Ip(r),c7:zn(Ni(r))}),a=Un(e.aP),t=a,i=L(Dt,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=Gp(r),u=o(le,.99,o(ue,We(e.aJ),zt(Ol(c)))),$=ql(c),s=$.a,m=$.b,d=$.c,f=Ap(p(wl,s,m,d)),h=o(le,1.01,o(hn,f,zt(Jl(c)))),g=o(Vp,e.ev,{eq:e.eq,eP:h,fi:u}),y=Up(g).dM,x=y?He(zn(Ni(r))):Or(Ri(r)),_=function(){var ie=e.bZ;switch(ie.$){case 0:return T(0,0);case 1:return T(1,0);case 2:return T(2,0);case 3:var de=ie.a;return T(3,de);case 4:var de=ie.a;return T(4,de);default:return T(5,0)}}(),w=_.a,M=_.b,N=e.bD,U=N,E=o(Bo,U,e.b$),j=E,W=Qe({dx:0,dy:x.fU,dz:cn(j),dA:e.ec,dB:0,dC:x.fY,dD:ln(j),dE:Bp(f),dF:0,dG:x.c6,dH:un(j),dI:w,dJ:0,dK:y,dL:0,dM:M}),A=Le(Wl,W,l,g,Dp,t,{M:P,U:P,fB:P}),J=e.bJ;switch(J.$){case 0:var X=J.a;return Ge(b([p(Ze,A.M,T(X,Xa),Rr),p(Ze,A.U,mn,Rr)]));case 1:var X=J.a;return Ge(b([p(Ze,A.M,mn,Rr),b([ji]),p(Ze,A.fB,X.bd,Hl),b([Il(0)]),p(Ze,A.M,T(X,Xa),Fp),p(Ze,A.U,mn,Rr)]));default:var ce=J.a,fe=J.b;return Ge(b([p(Ze,A.M,T(fe,Xa),Rr),b([ji]),o(sp,A.fB,ce),p(Rp,A.M,fe,Dr(ce)),p(Ze,A.U,mn,Rr)]))}},Jp=function(e){return o(Cr,"width",De(e))},qp=v(function(e,r){var n=b([R0(1),G0(0),k0(!0),L(F0,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return F(n,"0",1);case 1:return F(o(B,B0,n),"1",1);default:var M=w.a;return F(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Ai($),m=o(ee,"height",De(s)+"px"),d=Ai(u),f=d/s,h=o(Do,function(w){return Op({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),g=o(ee,"width",De(d)+"px"),y=e.aI,x=y,_=Y0(x);return p(N0,"div",b([o(ee,"padding","0px"),g,m]),b([T(i,p(J0,t,b([Jp(Je(d*c)),U0(Je(s*c)),g,m,o(ee,"display","block"),o(ee,"background-color",_)]),h))]))}),Zp=function(e){return o(qp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},nu=function(e){return e},Wi=nu({fU:.31271,fY:.32902}),Xp=v(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(Bo,r.ce,r.b6),u=l;return{by:un(u),ex:n,bF:ln(u),cK:0,bV:cn(u),c_:1,fU:-t,fY:-i,c6:-c}}),Kp=function(e){return e},Qp=function(e){return Kp(1.2*o(Vn,2,e))},et=function(e){return e},e1={$:0},r1=e1,au=function(e){return e},n1=v(function(e,r){var n=e,a=r;return I(a,n)>0}),Gi=function(e){var r=e;return r},a1=function(e){e:for(;;){if(hr(e.e2,cr)&&hr(e.e3,cr))return we;if(o(n1,We(e.e2),We(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:zn(e.ei)};e=r;continue e}else{var n=K(Gi(e.e3)/ur),a=K(Gi(e.e2)/ur),t=He(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(Bo,au(1),e.b6),$=u;return{by:a*un($),ex:!1,bF:a*ln($),cK:n/a,bV:a*cn($),c_:3,fU:i,fY:c,c6:l}}}},Hi=function(e){return a1({b6:e.b6,e2:e.ce,e3:cr,ei:e.ei})},t1=function(e){var r=e;return r},tu=function(e){var r=p(Fl,1667,25e3,t1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return nu({fU:n,fY:a})},ou=function(e){return e},o1=tu(ou(12e3)),i1=tu(ou(5600)),c1=function(e){return{$:2,a:e}},l1=function(e){return c1(e)},u1=v(function(e,r){return{$:2,a:e,b:r}}),iu=function(e){return{$:0,a:e}},On=function(e){var r=e;return r},v1=function(e){var r=e;return r.ex},$1=iu(mn.a),f1=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?T(o(B,a,i),c):T(i,o(B,a,c))});return p(sr,n,T(P,P),r)}),s1=function(e){var r=e;return Qe({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},m1=Q(function(e,r,n,a,t,i,c,l){var u=o(f1,v1,b([On(e),On(r),On(n),On(a)])),$=u.a,s=u.b;if($.b){var m=ve($,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,g=f.b,y=g.a,x=g.b,_=x.a;return o(u1,o(re,s1,$),{bd:o(Re,d,h),bK:o(Re,y,_),bL:o(Re,t,i),bM:o(Re,c,l)})}else return $1}else return iu({bd:o(Re,e,r),bK:o(Re,n,a),bL:o(Re,t,i),bM:o(Re,c,l)})}),d1=S(function(e,r,n){return za(m1,e,r,n,we,we,we,we,we)}),p1=function(e){var r=o(Xp,z0(e.fB),{b6:i1,eH:e.fJ,ce:et(8e4)}),n=Hi({b6:o1,ce:et(2e4),ei:e.ei}),a=Hi({b6:Wi,ce:et(15e3),ei:zn(e.ei)}),t=p(d1,r,n,a);return Zp({b0:l1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Qp(15),bJ:t,bZ:r1,b$:Wi})},cu=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),b1=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),lu=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),uu=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),g1=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),h1=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),_1=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),jo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(_1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(cu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(b1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(lu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(h1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(uu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(g1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},No={$:0},y1=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Ca(c(u)),m=o(me,s.dR,e),d=o(ue,s.dO,r),f=o(me,s.dS,n),h=o(ue,s.dP,a),g=o(me,s.dT,t),y=o(ue,s.dQ,i),x=c,_=$;e=m,r=d,n=f,a=h,t=g,i=y,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),S1=S(function(e,r,n){var a=Ca(e(r));return za(y1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),rt=v(function(e,r){var n=e,a=r;return I(a,n)<1}),vu=function(e){return o(rt,e.dO,e.dR)&&o(rt,e.dP,e.dS)&&o(rt,e.dQ,e.dT)?e:{dO:o(ue,e.dR,e.dO),dP:o(ue,e.dS,e.dP),dQ:o(ue,e.dT,e.dQ),dR:o(me,e.dR,e.dO),dS:o(me,e.dS,e.dP),dT:o(me,e.dT,e.dQ)}},Mn=function(e){var r=e;return r},_n=function(e){var r=e;return r.fU},yn=function(e){var r=e;return r.fY},Sn=function(e){var r=e;return r.c6},$u=function(e){var r=Mn(e),n=r.a,a=r.b,t=r.c,i=_n(n),c=yn(n),l=Sn(n),u=_n(a),$=yn(a),s=Sn(a),m=_n(t),d=yn(t),f=Sn(t);return vu({dO:o(ue,i,o(ue,u,m)),dP:o(ue,c,o(ue,$,d)),dQ:o(ue,l,o(ue,s,f)),dR:o(me,i,o(me,u,m)),dS:o(me,c,o(me,$,d)),dT:o(me,l,o(me,s,f))})},fu=J$,Pe=function(e){return fu(Ea(e))},su=function(e){var r=e;return r},Ra=function(e){return fu(su(e))},x1=v(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Bt=v(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),C1={fU:0,fY:0,c6:0},w1=v(function(e,r){var n=e,a=r,t=o(nr,K(a.fU),o(nr,K(a.fY),K(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=Hr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return C1}),L1=w1(au(1)),mu=S(function(e,r,n){var a=o(Bt,r,n),t=o(Bt,e,r);return L1(o(x1,a,t))}),P1=function(e){var r=Mn(e),n=r.a,a=r.b,t=r.c,i=Ra(p(mu,n,a,t));return F({o:i,bT:Pe(n)},{o:i,bT:Pe(a)},{o:i,bT:Pe(t)})},T1=v(function(e,r){return{$:2,a:e,b:r}}),du=T1({df:3,$7:0,dV:4}),z1=function(e){if(e.b){var r=e.a,n=e.b,a=du(o(re,P1,e)),t=p(S1,$u,r,n);return L(cu,t,e,a,0)}else return No},Ee=S(function(e,r,n){return F(e,r,n)}),be=S(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),pu=function(){var e=Ne(1),r=Ne(1),n=Ne(1),a=o(le,-.5,e),t=o(le,-.5,r),i=o(le,-.5,n),c=p(be,i,t,a),l=o(le,.5,e),u=p(be,i,t,l),$=o(le,.5,r),s=p(be,i,$,a),m=p(be,i,$,l),d=o(le,.5,n),f=p(be,d,t,a),h=p(be,d,$,a),g=p(be,d,t,l),y=p(be,d,$,l);return jo(z1(b([p(Ee,c,h,f),p(Ee,c,s,h),p(Ee,u,g,y),p(Ee,u,y,m),p(Ee,f,h,y),p(Ee,f,y,g),p(Ee,c,m,s),p(Ee,c,u,m),p(Ee,c,f,g),p(Ee,c,g,u),p(Ee,s,y,h),p(Ee,s,m,y)])))}(),Jn={$:0},M1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),k1=S(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ra(p(mu,u,l,c)),s={o:$,bT:Pe(u)},m={o:$,bT:Pe(l)},d={o:$,bT:Pe(c)};return o(B,s,o(B,m,o(B,d,n)))}),Wo=function(e){var r=e;return r.D},D1=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return oe(p(e,t,i,c))}),At=4294967295>>>32-Ln,Ft=Ku,B1=S(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Ft,a,n);if(t.$){var $=t.a;return o(Ft,At&r,$)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),A1=function(e){return e>>>5<<5},F1=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||I(e,n)>-1?q:I(e,A1(n))>-1?oe(o(Ft,At&e,i)):oe(p(B1,a,e,t))}),Go=function(e){var r=e;return r.ah},nt=v(function(e,r){return o(F1,e,Go(r))}),V1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(D1,S(function(c,l,u){return F(c,l,u)}),o(nt,a,e),o(nt,t,e),o(nt,i,e))};return o(mo,r,Wo(e))},E1=S(function(e,r,n){e:for(;;){var a=o(to,Fe,e),t=a.a,i=a.b;if(I(bt(t),Fe)<0)return o(Hc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Wc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ho=function(e){return e.b?p(E1,e,P,0):jc},R1=S(function(e,r,n){return e(r(n))}),U1=v(function(e,r){return!o(rl,o(R1,ys,e),r)}),j1=v(function(e,r){return p(sr,v(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),N1=function(e){var r=e.a;return r},bu=v(function(e,r){var n=N1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return o(U1,a,r)?{D:r,ah:e}:{D:o(j1,a,r),ah:e}}),W1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=W1({df:1,$7:3,dV:4}),ca=v(function(e,r){var n=Or(r),a=Or(e);return T(F(a.fU,a.fY,a.c6),F(n.fU,n.fY,n.c6))}),Yi=p(Rn,0,0,0),at=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(vo,o(ca,e,r),t);if($.$){var m={o:Yi,bT:Pe(r)},d={o:Yi,bT:Pe(e)},f=u+1,h=u;return F(o(B,F(n,h,f),o(B,F(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=$.a;return F(o(B,F(n,s,a),c),l,u)}}),G1=ge(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,g=a,y=e,x=r,_=$,w=a+3,M=Le(at,s,d,f,g,r,Le(at,m,s,h,f,r,Le(at,d,m,g,h,r,t)));e=y,r=x,n=_,a=w,t=M;continue e}else{var N=t,U=N.a,E=N.b;return T(U,Ae(E))}}),H1=ge(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,g=n,y=p(bn,o(ca,d,s),f,p(bn,o(ca,s,m),h,p(bn,o(ca,m,d),g,t))),x=o(B,F(g,h,f),a),_=e,w=$,M=n+3,N=x,U=y;e=_,r=w,n=M,a=N,t=U;continue e}else return F(a,t,n)}),Lr=S(function(e,r,n){var a=V1(n),t=p(sr,k1(r),P,a),i=C(H1,r,a,0,P,Sl),c=i.a,l=i.b,u=i.c,$=C(G1,r,l,a,0,F(c,P,u)),s=$.a,m=$.b,d=Pt(m)?t:ve(t,m);return p(M1,e,o(bu,Ho(d),s),o(jn,d,s))}),Vt=function(e){return{D:o(re,function(r){return F(3*r,3*r+1,3*r+2)},o(Jr,0,Dr(e)-1)),ah:Ho(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},gu=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(re,Mn,r);return p(Lr,a,zr,Vt(n));case 2:var a=e.a,r=e.b,n=o(re,Mn,r);return p(Lr,a,zr,Vt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,zr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ii=gu(pu),hu={$:0},z=hu,pe=v(function(e,r){return{$:1,a:e,b:r}}),Y1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},I1=1029,O1=function(e){return{$:5,a:e}},_u=function(e){var r=e;return O1(r)},J1=_u(I1),q1=1028,Z1=_u(q1),Te=S(function(e,r,n){return r===1?e?o(B,J1,n):o(B,Z1,n):n}),yu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tt=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,m){return C(ne,p(Te,l,a,m),yu,Y1,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),Yo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},Su={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,m){return C(ne,p(Te,l,a,m),Su,Yo,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),xu=v(function(e,r){return{$:3,a:e,b:r}}),X1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},Cu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},K1=R(function(e,r,n,a){return o(xu,n,Q(function(t,i,c,l,u,$,s,m){return C(ne,m,Cu,X1,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),Io={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ua=q$,ir=ge(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,$,s,m,d){return C(ne,p(Te,u,t,d),Su,Io,a,{aN:o(Ua,Nn(r),e),b:l,c,d:s,e:i,f:$})}))}),Q1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},e3=ge(function(e,r,n,a,t){return o(xu,a,Q(function(i,c,l,u,$,s,m,d){return C(ne,d,Cu,Q1,t,{aN:o(Ua,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),wu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,m){var d=s.a,f=s.b;return C(ne,p(Te,l,a,m),Lu,wu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,d:$,e:t,f:u})}))}),Pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Tu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},r3=qe(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,$,s,m,d,f){var h=d.a,g=d.b;return C(ne,p(Te,$,i,f),Tu,Pu,t,{P:g,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cr:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),zu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},n3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(pe,u,Q(function(m,d,f,h,g,y,x,_){var w=x.a,M=x.b;return C(ne,p(Te,h,s,_),Tu,zu,$,{b4:e,b8:r,b9:i,ca:a,P:M,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cv:t,b:f,c:d,aW:c,d:y,cS:n,e:m,a$:l,f:g})}))}}}}}}}}}}},Mu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Zn=qe(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,$,s,m,d,f){var h=d.a,g=d.b;return C(ne,p(Te,$,i,f),Lu,Mu,t,{b3:e,P:g,bd:h.bd,bK:h.bK,bL:h.bL,bM:h.bM,cu:n,b:u,c:l,d:m,cR:r,e:c,f:s})}))}),a3=function(e){return{$:0,a:e}},Oi=v(function(e,r){return{$:1,a:e,b:r}}),xn=v(function(e,r){if(r.$){var n=r.a.C;return T(n,1)}else return r.a,T(e,0)}),t3=function(e){return L(on,cn(e),ln(e),un(e),1)},Oo=L(on,0,0,0,0),la=v(function(e,r){if(r.$){var a=r.a.C;return T(a,Oo)}else{var n=r.a;return T(e,t3(n))}}),ku=v(function(e,r){var n=T(e,r);if(n.a.$){var t=n.a.a.C;return o(Oi,T(t,Oo),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Oi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,a3(a)}}),o3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),i3=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),c3=function(e){return o(ke,e,1)},Et=o(ke,0,0),Ur=v(function(e,r){if(r.$){var a=r.a.C;return T(a,Et)}else{var n=r.a;return T(e,c3(n))}}),Du=R(function(e,r,n,a){var t=L(i3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Xn,T(u,Oo),o(Ur,u,r),o(Ur,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Xn,o(la,u,e),T(u,Et),o(Ur,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Xn,o(la,u,e),o(Ur,u,r),T(u,Et),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Xn,o(la,u,e),o(Ur,u,r),o(Ur,u,n),T(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(o3,i,c,l)}}),l3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},ot=ge(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,$,s,m,d){return C(ne,p(Te,u,t,d),yu,l3,a,{b1:Nn(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),Bu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},u3=R(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,m){var d=s.a,f=s.b;return C(ne,p(Te,l,a,m),Bu,Pu,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cr:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),v3=jt(function(e,r,n,a,t,i,c,l,u){return o(pe,c,Q(function($,s,m,d,f,h,g,y){var x=g.a,_=g.b;return C(ne,p(Te,d,u,y),Bu,zu,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cv:t,b:m,c:s,aW:e,d:h,cS:n,e:$,a$:0,f})}))}),kn=S(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),$3=function(e){var r=e;return p(kn,r.dR,r.dO,.5)},f3=function(e){var r=e;return p(kn,r.dS,r.dP,.5)},s3=function(e){var r=e;return p(kn,r.dT,r.dQ,.5)},m3=function(e){return p(be,$3(e),f3(e),s3(e))},G=function(e){var r=ql(e),n=r.a,a=r.b,t=r.c;return{ey:Ea(m3(e)),eS:n/2,eT:a/2,eU:t/2}},Jo=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(tt,l,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(K1,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(ot,l,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ot,l,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ot,l,$,G(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ir,u,$,G(t),c,a);case 8:var t=r.a,c=r.c;return C(ir,u,$,G(t),c,0);case 9:var t=r.a,c=r.c;return C(ir,u,$,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(e3,u,$,i,G(t),c)}}case 2:e.a;var s=e.b,U=e.c,m=o(ku,s,U);if(m.$){var h=m.a,g=h.a;h.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(u3,g,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Le(r3,g,x,_,G(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var d=m.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(qn,d,G(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var w=e.b,M=e.c,N=e.d,U=e.e,E=L(Du,w,M,N,U);if(E.$){var J=E.a,X=J.a,ce=J.b,fe=E.b,ie=fe.a,de=fe.b,ze=E.c,Se=ze.a,pr=ze.b,br=E.d,x=br.a,_=br.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Ou(v3,X,ce,ie,de,Se,pr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return n3(X)(ce)(ie)(de)(Se)(pr)(x)(_)(G(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var j=E.a,W=E.b,A=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),it=function(e){var r=e;return r.fU},ct=function(e){var r=e;return r.fY},lt=function(e){var r=e;return r.c6},d3=function(e){var r=e,n=lt(r.c7),a=ct(r.c7),t=it(r.c7),i=lt(r.c5),c=ct(r.c5),l=it(r.c5),u=lt(r.c4),$=ct(r.c4),s=it(r.c4);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},p3=function(e){var r=Ea(an(e)),n=He(Er(e)),a=He(Vr(e)),t=He(Fr(e));return{dp:d3(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},jr=v(function(e,r){return{$:5,a:e,b:r}}),Au=v(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Nl,a,e);return o(jr,i,t);case 1:return o(jr,e,n);case 3:return o(jr,e,n);case 2:return o(jr,e,n);default:return o(jr,e,n)}}),Fu=v(function(e,r){return o(Au,p3(e),r)}),ja=function(e){return{$:2,a:e}},b3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),g3=K$,h3=X$,Ji=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,m=e.b,d=e.c,f=h3(a),h=f.fU,g=f.fY,y=f.c6,x=f.em,_=g3({em:x,fU:h*s,fY:g*m,c6:y*d});return za(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Rt=v(function(e,r){switch(r.$){case 0:return hu;case 5:var n=r.a,a=r.b;return o(jr,n,o(Rt,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(b3,e,t),o(Ji,e,i));case 3:return r;case 2:var i=r.a;return ja(o(Ji,e,i));default:var c=r.a;return Kl(o(re,Rt(e),c))}}),qo=v(function(e,r){var n=r;return o(Rt,e,n)}),Zo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Vu=7683,Eu=7682,_3=p(Vo,{cp:0,cO:0,c3:15},{a8:ye,bl:Kr,bt:ye,bu:Vu},{a8:ye,bl:Kr,bt:ye,bu:Eu}),y3=p(Vo,{cp:0,cO:0,c3:15},{a8:ye,bl:Kr,bt:ye,bu:Eu},{a8:ye,bl:Kr,bt:ye,bu:Vu}),Xo=v(function(e,r){return e?o(B,y3,r):o(B,_3,r)}),S3={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},x3=function(e){if(e.$){var r=e.c;return oe(Q(function(n,a,t,i,c,l,u,$){return C(ne,o(Xo,i,$),S3,Zo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},wa=function(e){var r=x3(e);if(r.$)return z;var n=r.a;return ja(n)},C3=R(function(e,r,n,a){var t=o(Jo,n,pu),i=function(){var s=T(e,r);return s.a?s.b?Un(b([t,wa(Ii)])):t:s.b?wa(Ii):z}(),c=wo(a),l=c.a,u=c.b,$=c.c;return o(Fu,Co(a),o(qo,F(l,u,$),i))}),w3=v(function(e,r){return L(C3,!0,!0,e,r)}),Ru=v(function(e,r){return{$:0,a:e,b:r}}),L3=function(e){var r=so(e),n=r.cN,a=r.cd,t=r.b5;return p(Rn,n,a,t)},P3=function(e){return o(Ru,0,Mt(L3(e)))},T3=function(e){var r=e;return r.k},Cn=function(e){var r=e;return Zr(r)},z3=v(function(e,r){var n=r;return n/e}),qi=function(e){var r=e;return{fU:Zr(r),fY:Xr(r)}},M3=v(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Ra(a),bT:Pe(n)},r)}),k3=Ta(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=un(l.bT),s=ln(l.bT),m=cn(l.bT),d=o(ia,e,m),f=o(nr,r,m),h=o(ia,n,s),g=o(nr,a,s),y=o(ia,t,$),x=o(nr,i,$),_=u;e=d,r=f,n=h,a=g,t=y,i=x,c=_;continue e}else return vu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Uu=v(function(e,r){var n=un(e.bT),a=ln(e.bT),t=cn(e.bT);return Nt(k3,t,t,a,a,n,n,r)}),D3=function(e){var r=p(Dc,M3,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Wo(e)),i=o(Uu,n,a);return L(lu,i,e,t,0)}else return No},B3=kr({fU:0,fY:0,c6:-1}),Zi=v(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),La=function(e){var r=e;return Xr(r)},dn=function(e){var r=e;return r},Ut=function(e){return vr(2*ur*e)},Xi=kl({cB:dr,c4:yo,c5:ko}),ju=function(){var e=72,r=o(z3,e,Ut(1)),n=Ne(1),a=dn(Dl),t=dn(B3),i=Ne(1),c=o(le,.5,i),l=p(be,cr,cr,c),u=o(le,-.5,i),$=p(be,cr,cr,u),s=function(f){var h=o(le,f,r),g=dn(o(Zi,Xi,qi(h))),y=o(le,Cn(h),n),x=o(le,La(h),n),_=p(be,y,x,c),w=p(be,y,x,u),M=o(_a,e,f+1),N=o(le,M,r),U=dn(o(Zi,Xi,qi(N))),E=o(le,Cn(N),n),j=o(le,La(N),n),W=p(be,E,j,u),A=p(be,E,j,c);return b([F({o:t,bT:$},{o:t,bT:W},{o:t,bT:w}),F({o:g,bT:w},{o:U,bT:W},{o:U,bT:A}),F({o:g,bT:w},{o:U,bT:A},{o:g,bT:_}),F({o:a,bT:l},{o:a,bT:_},{o:a,bT:A})])},m=o(re,s,o(Jr,0,e-1)),d=Vt(Ge(m));return jo(D3(d))}(),Ki=gu(ju),A3=function(e){var r=e;return r.cB},F3=function(e){var r=e,n=K(r.c6),a=K(r.fY),t=K(r.fU);if(I(t,a)<1)if(I(t,n)<1){var i=Hr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=Hr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(I(a,n)<1){var i=Hr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=Hr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},V3=function(e){var r=F3(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return T(r,c)},E3=function(e){var r=zl(e),n=V3(r),a=n.a,t=n.b;return tn({cB:A3(e),c4:a,c5:t,c7:r})},R3=function(e){var r=e;return r.e9},U3=function(e){var r=e;return r.fu},j3=R(function(e,r,n,a){var t=E3(T3(a)),i=o(Jo,n,ju),c=function(){var m=T(e,r);return m.a?m.b?Un(b([i,wa(Ki)])):i:m.b?wa(Ki):z}(),l=U3(a),u=l,$=R3(a),s=$;return o(Fu,t,o(qo,F(u,u,s),c))}),N3=v(function(e,r){return L(j3,!0,!0,e,r)}),Qi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Mn(e),n=r.a,a=r.b,t=r.c,i=Or(n),c=Or(a),l=Or(t);return Qe({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Kn=du(b([F({cZ:0},{cZ:1},{cZ:2})])),W3=v(function(e,r){var n=$u(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(pe,a,Q(function(_,w,M,N,U,E,j,W){return C(ne,p(Te,N,0,W),Qi,Yo,Kn,{aw:t,b:M,c:w,d:E,e:_,bq:pn(r),f:U})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(pe,a,Q(function(_,w,M,N,U,E,j,W){return C(ne,p(Te,N,0,W),Qi,Io,Kn,{aN:o(Ua,Nn(c),i),b:M,c:w,d:E,e:_,bq:pn(r),f:U})}));case 2:e.a;var l=e.b,f=e.c,u=o(ku,l,f);if(u.$)return z;var $=u.a;return o(pe,a,Q(function(_,w,M,N,U,E,j,W){var A=j.a,J=j.b;return C(ne,p(Te,N,0,W),ec,wu,Kn,{P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cq:$,b:M,c:w,d:E,e:_,bq:pn(r),f:U})}));default:e.a;var s=e.b,m=e.c,d=e.d,f=e.e,h=L(Du,s,m,d,f);if(h.$)return z;var g=h.a,y=h.b,x=h.c;return o(pe,a,Q(function(_,w,M,N,U,E,j,W){var A=j.a,J=j.b;return C(ne,p(Te,N,0,W),ec,Mu,Kn,{b3:g,P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cu:x,b:M,c:w,d:E,cR:y,e:_,bq:pn(r),f:U})}))}}),G3=function(){var e=b([{a_:o(ke,0,1)},{a_:o(ke,1,1)},{a_:o(ke,2,1)},{a_:o(ke,0,-1)},{a_:o(ke,1,-1)},{a_:o(ke,2,-1)}]),r=b([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return o(jn,e,r)}(),H3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},rc=function(e){return ja(Q(function(r,n,a,t,i,c,l,u){return C(ne,o(Xo,t,u),H3,Zo,G3,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},Y3=R(function(e,r,n,a){var t=o(W3,n,a),i=T(e,r);return i.a?i.b?Un(b([t,rc(a)])):t:i.b?rc(a):z}),I3=v(function(e,r){return L(Y3,!0,!0,e,r)}),O3=v(function(e,r){var n=Sn(r),a=Sn(e),t=yn(r),i=yn(e),c=_n(r),l=_n(e);return{dO:o(ue,l,c),dP:o(ue,i,t),dQ:o(ue,a,n),dR:o(me,l,c),dS:o(me,i,t),dT:o(me,a,n)}}),J3=function(e){var r=Lo(e),n=r.a,a=r.b;return o(O3,n,a)},nc={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},q3=v(function(e,r){return{$:1,a:e,b:r}}),Z3=q3({df:2,$7:0,dV:1}),ac=Z3(b([T({dw:0},{dw:1})])),X3=v(function(e,r){var n=J3(r),a=G(n),t=Lo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(pe,a,Q(function($,s,m,d,f,h,g,y){return C(ne,y,nc,Yo,ac,{aw:l,du:Pe(c),dv:Pe(i),b:m,c:s,d:h,e:$,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(pe,a,Q(function(s,m,d,f,h,g,y,x){return C(ne,x,nc,Io,ac,{aN:o(Ua,Nn(u),l),du:Pe(c),dv:Pe(i),b:d,c:m,d:g,e:s,f:h})}));case 2:return z;default:return z}}),K3=v(function(e,r){return o(X3,e,r)}),Qn=function(e){return vr(ur*(e/180))},tc=v(function(e,r){var n=e,a=r;return n/a}),Q3=ge(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(hr(r,e))return c;var l=e,u=r-1,$=n,s=a,m=c;e=l,r=u,n=$,a=s,t=m;continue e}}),oc=v(function(e,r){return e<1?P:C(Q3,0,e,e,r,P)}),eb=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Ra(a),bT:Pe(n),L:o(ke,c,l)},r)}),rb=function(e){var r=p(Dc,eb,P,Go(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Wo(e)),i=o(Uu,n,a);return L(uu,i,e,t,0)}else return No},Nu=v(function(e,r){var n=e,a=r,t=Zr(a);return{fU:t*Zr(n),fY:t*Xr(n),c6:Xr(a)}}),nb=function(){var e=Ne(1),r=72,n=o(Jr,0,r-1),a=o(oc,r,o(kn,cr,Ut(1))),t=no(r/2),i=o(Jr,0,t-1),c=o(oc,t,o(kn,Qn(90),Qn(-90))),l=Ho(Ge(o(re,function(s){return o(re,function(m){return{o:dn(o(Nu,s,m)),bT:p(be,o(le,Cn(m)*Cn(s),e),o(le,Cn(m)*La(s),e),o(le,La(m),e)),L:T(o(tc,s,Ut(1)),o(tc,o(hn,Qn(90),m),Qn(180)))}},c)},a))),u=v(function(s,m){return s*(t+1)+m}),$=Ge(o(re,function(s){return Ge(o(re,function(m){var d=o(u,s+1,m),f=o(u,s,m),h=o(u,s+1,m+1),g=o(u,s,m+1);return b([F(g,h,d),F(g,d,f)])},i))},n));return jo(rb(o(bu,l,$)))}(),Pa=72,ea=2*Pa,ab=v(function(e,r){e:for(;;){var n=ea+1,a=o(_a,ea,2*e+3),t=o(_a,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(B,F(l,c,t),o(B,F(c,a,t),o(B,F(c,i,a),o(B,F(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),tb=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),ob=v(function(e,r){e:for(;;){var n=p(tb,0,2*ur,e/Pa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),ib=function(){var e=o(ob,Pa-1,b([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(ab,Pa-1,P);return o(jn,e,r)}(),cb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ic=function(e){return ja(Q(function(r,n,a,t,i,c,l,u){return C(ne,o(Xo,!0,u),cb,Zo,ib,{aw:p(Rn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},lb=function(e){var r=su(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},ub=v(function(e,r){return o(Au,lb(e),r)}),vb=R(function(e,r,n,a){var t=o(Jo,n,nb),i=function(){var u=T(e,r);return u.a?u.b?Un(b([t,ic()])):t:u.b?ic():z}(),c=To(a),l=c;return o(ub,o(Bt,dr,Po(a)),o(qo,F(l,l,l),i))}),$b=v(function(e,r){return L(vb,!0,!0,e,r)}),fb=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),sb=ge(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),mb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Ru,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(fb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Al,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return C(sb,n,a,t,i,c)}},db=mb,Wu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(w3,t,r)]);case 1:var t=e.a,n=e.b;return b([o(I3,t,n)]);case 3:var t=e.a,a=e.b;return b([o($b,db(t),a)]);case 2:var t=e.a,i=e.b;return b([o(N3,t,i)]);case 4:var c=e.a,l=e.b;return b([o(K3,P3(c),l)]);default:var u=e.a;return o(Do,Wu,u)}},pb=function(e){return o(Do,Wu,e)},bb=v(function(e,r){return p1({aI:P0(e.es),ev:e.ev,aJ:T0(.5),cb:e.cb,aK:T(Bi(Je(e.cT.fS)),Bi(Je(e.cT.eW))),aP:pb(r),fB:!0,fJ:o(Nu,vr(e.fI),vr(e.fK)),ei:Va})}),gb=v(function(e,r){return o(bb,{es:p(C0,46,46,46),ev:r0(e),cb:e.cb,cT:e.cT,fI:-Gr(135),fK:-Gr(45)},b([L0(e),x0(e),Bd]))}),hb=L(Sd,gb,Td,Pd,xd);const _b={Main:{init:hb(o(D,function(e){return Me({e1:e})},o(k,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(k,"clock",se))},o(k,"devicePixelRatio",se))},o(k,"dt",se))},o(k,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(m){return Me({eo:m,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(k,"alt",Z))},o(k,"control",Z))},o(k,"down",Z))},o(k,"downs",ba(Tn)))},o(k,"left",Z))},o(k,"pressedKeys",ba(Tn)))},o(k,"right",Z))},o(k,"shift",Z))},o(k,"up",Z))))},o(k,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Me({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(k,"down",Z))},o(k,"isDown",Z))},o(k,"move",Z))},o(k,"rightDown",Z))},o(k,"rightUp",Z))},o(k,"up",Z))},o(k,"x",se))},o(k,"y",se))))},o(k,"screen",o(D,function(r){return o(D,function(n){return Me({eW:n,fS:r})},o(k,"height",se))},o(k,"width",se))))},o(k,"wheel",o(D,function(e){return o(D,function(r){return Me({eE:r,eF:e})},o(k,"deltaX",se))},o(k,"deltaY",se)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},yb=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),m(V)),window.requestAnimationFrame(d)}},Sb=()=>{ut("pointerdown"),ut("wheel"),ut("keydown")},ut=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},xb=_b.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Sb();yb(xb);
