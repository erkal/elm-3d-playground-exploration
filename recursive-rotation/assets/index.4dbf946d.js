const Iu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Iu();function _r(e,r,n){return n.a=e,n.f=r,n}function v(e){return _r(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return _r(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function R(e){return _r(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function _e(e){return _r(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return _r(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Sa(e){return _r(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return _r(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Nt(e){return _r(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function ye(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Gt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ta(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Uu(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Ju=[];function Ou(e){return e.length}var qu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Yu=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),Zu=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Qu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function en(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=$t(e,r,0,a);t&&(n=a.pop());t=$t(n.a,n.b,0,a));return t}function $t(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&en(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=si(e),r=si(r));for(var t in e)if(!$t(e[t],r[t],n+1,a))return!1;return!0}v(gr);v(function(e,r){return!gr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return J(e,r)<0});v(function(e,r){return J(e,r)<1});v(function(e,r){return J(e,r)>0});v(function(e,r){return J(e,r)>=0});var ev=v(function(e,r){var n=J(e,r);return n<0?Ac:n?Ef:Dc}),zn=0;function z(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=rr(e.a,r);return n}var L={$:0};function rr(e,r){return{$:1,a:e,b:r}}var rv=v(rr);function h(e){for(var r=L,n=e.length;n--;)r=rr(e[n],r);return r}function Ca(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var nv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});R(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});_e(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return h(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});v(function(e,r){return h(Ca(r).sort(function(n,a){return J(e(n),e(a))}))});v(function(e,r){return h(Ca(r).sort(function(n,a){var t=o(e,n,a);return t===Dc?0:t===Ac?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var av=v(Math.pow);v(function(e,r){return r%e});var tv=v(function(e,r){var n=r%e;return e===0?en(11):n>0&&e<0||n<0&&e>0?n+e:n}),ov=Math.PI,iv=Math.cos,cv=Math.sin;v(Math.atan2);function lv(e){return e}function uv(e){return e===1/0||e===-1/0}var vv=Math.ceil,$v=Math.floor,fv=Math.round,sv=Math.sqrt,Ko=Math.log,dv=isNaN;function mv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var pv=v(function(e,r){return e+r});function bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:te(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}v(function(e,r){return e+r});function gv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function hv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var _v=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),wv=v(function(e,r){return r.split(e)}),yv=v(function(e,r){return r.join(e)}),xv=y(function(e,r,n){return n.slice(e,r)});function Sv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Tv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Cv=v(function(e,r){return r.indexOf(e)>-1}),Lv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Pv=v(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function ic(e){return e+""}function zv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:te(n==45?-r:r)}function kv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?te(r):q}function Mv(e){return Ca(e).join("")}function Dv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Av(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Bv(e){return{$:0,a:e}}function Wt(e){return{$:2,b:e}}var Fv=Wt(function(e){return typeof e=="boolean"?ue(e):Oe("a BOOL",e)}),Vv=Wt(function(e){return typeof e=="number"?ue(e):Oe("a FLOAT",e)}),Ev=Wt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Oe("a STRING",e)});function Rv(e){return{$:3,b:e}}var jv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function wr(e,r){return{$:9,f:e,g:r}}var Nv=v(function(e,r){return{$:10,b:r,h:e}}),Gv=v(function(e,r){return wr(e,[r])}),Wv=y(function(e,r,n){return wr(e,[r,n])});R(function(e,r,n,a){return wr(e,[r,n,a])});_e(function(e,r,n,a,t){return wr(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return wr(e,[r,n,a,t,i])});Sa(function(e,r,n,a,t,i,c){return wr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return wr(e,[r,n,a,t,i,c,l])});Nt(function(e,r,n,a,t,i,c,l,u){return wr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return xe(o(eo,"This is not valid JSON! "+a.message,r))}});var cc=v(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Oe("null",r);case 3:return Hn(r)?ei(e.b,r,h):Oe("a LIST",r);case 4:return Hn(r)?ei(e.b,r,Hv):Oe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Oe("an OBJECT with a field named `"+n+"`",r);var $=Re(e.b,r[n]);return Xe($)?$:xe(o(di,n,$.a));case 7:var a=e.e;if(!Hn(r))return Oe("an ARRAY",r);if(a>=r.length)return Oe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Re(e.b,r[a]);return Xe($)?$:xe(o(Bc,a,$.a));case 8:if(typeof r!="object"||r===null||Hn(r))return Oe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var $=Re(e.b,r[i]);if(!Xe($))return xe(o(di,i,$.a));t=rr(z(i,$.a),t)}return ue(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Re(l[u],r);if(!Xe($))return $;c=c($.a)}return ue(c);case 10:var $=Re(e.b,r);return Xe($)?Re(e.h($.a),r):$;case 11:for(var s=L,d=e.g;d.b;d=d.b){var $=Re(d.a,r);if(Xe($))return $;s=rr($.a,s)}return xe(Rf(Be(s)));case 1:return xe(o(eo,e.a,r));case 0:return ue(e.a)}}function ei(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!Xe(c))return xe(o(Bc,i,c.a));t[i]=c.a}return ue(n(t))}function Hn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Hv(e){return o(rs,e.length,function(r){return e[r]})}function Oe(e,r){return xe(o(eo,"Expecting "+e,r))}function Xr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Xr(e.b,r.b);case 6:return e.d===r.d&&Xr(e.b,r.b);case 7:return e.e===r.e&&Xr(e.b,r.b);case 9:return e.f===r.f&&ri(e.g,r.g);case 10:return e.h===r.h&&Xr(e.b,r.b);case 11:return ri(e.g,r.g)}}function ri(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Xr(e[a],r[a]))return!1;return!0}var Xv=v(function(e,r){return JSON.stringify(r,null,e)+""});function lc(e){return e}y(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Iv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var ft=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Uv(e){return{$:5,b:e}}var Jv=0;function Ht(e){var r={$:0,e:Jv++,f:e,g:null,h:[]};return Xt(r),r}function uc(e){return sr(function(r){r(Rr(Ht(e)))})}function vc(e,r){e.h.push(r),Xt(e)}var Ov=v(function(e,r){return sr(function(n){vc(e,r),n(Rr(zn))})}),Ha=!1,ni=[];function Xt(e){if(ni.push(e),!Ha){for(Ha=!0;e=ni.shift();)qv(e);Ha=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Xt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}R(function(e,r,n,a){return It(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function It(e,r,n,a,t,i){var c=o(cc,e,r?r.flags:void 0);Xe(c)||en(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=Yv(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),ti(l,b.b,t($))}return ti(l,u.b,t($)),d?{ports:d}:{}}var Qe={};function Yv(e,r){var n;for(var a in Qe){var t=Qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Qv(t,r)}return n}function Zv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ft,l,Uv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ht(o(ft,l,e.b))}var Kv=v(function(e,r){return sr(function(n){e.g(r),n(Rr(zn))})});v(function(e,r){return o(Ov,e.h,{$:0,a:r})});function $c(e){return function(r){return{$:1,k:e,l:r}}}function e$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ai=[],Xa=!1;function ti(e,r,n){if(ai.push({p:e,q:r,r:n}),!Xa){Xa=!0;for(var a;a=ai.shift();)r$(a.p,a.q,a.r);Xa=!1}}function r$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)vc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=n$(e,t,a,r.l);n[t]=a$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function n$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Qe[r].e:Qe[r].f;return o(i,t,a)}function a$(e,r,n){return n=n||{i:L,j:L},e?n.i=rr(r,n.i):n.j=rr(r,n.j),n}function t$(e){Qe[e]&&en(3)}v(function(e,r){return r});function o$(e,r){return t$(e),Qe[e]={f:i$,u:r,a:c$},$c(e)}var i$=v(function(e,r){return function(n){return e(r(n))}});function c$(e,r){var n=L,a=Qe[e].u,t=Rr(null);Qe[e].b=t,Qe[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(cc,a,c);Xe(l)||en(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ca,cr=typeof document!="undefined"?document:{};function Ut(e,r){e.appendChild(r)}R(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function st(e){return{$:0,a:e}}var fc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Jt(n),e:t,f:e,b:i}})}),dr=fc(void 0),l$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Jt(n),e:t,f:e,b:i}})}),u$=l$(void 0);function v$(e,r,n,a){return{$:3,d:Jt(e),g:r,h:n,i:a}}var $$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return yr([e,r],function(){return e(r)})});y(function(e,r,n){return yr([e,r,n],function(){return o(e,r,n)})});R(function(e,r,n,a){return yr([e,r,n,a],function(){return p(e,r,n,a)})});_e(function(e,r,n,a,t){return yr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return yr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Sa(function(e,r,n,a,t,i,c){return yr([e,r,n,a,t,i,c],function(){return ye(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return yr([e,r,n,a,t,i,c,l],function(){return Gt(e,r,n,a,t,i,c,l)})});Nt(function(e,r,n,a,t,i,c,l,u){return yr([e,r,n,a,t,i,c,l,u],function(){return Ta(e,r,n,a,t,i,c,l,u)})});var sc=v(function(e,r){return{$:"a0",n:e,o:r}}),f$=v(function(e,r){return{$:"a1",n:e,o:r}}),dc=v(function(e,r){return{$:"a2",n:e,o:r}}),kn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function s$(e){return e=="script"?"p":e}function d$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(sc,r.n,m$(e,r.o)):r});function m$(e,r){var n=oo(r);return{$:r.$,a:n?p(ns,n<3?p$:b$,ke(e),r.a):o($a,e,r.a)}}var p$=v(function(e,r){return z(e(r.a),r.b)}),b$=v(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function Jt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?oi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?oi(c,t,i):c[t]=i}return r}function oi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return cr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return dt(c,r,e.d),c}var c=e.f?cr.createElementNS(e.f,e.c):cr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),dt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ut(c,br(n===1?l[u]:l[u].b,r));return c}function dt(e,r,n){for(var a in n){var t=n[a];a==="a1"?g$(e,t):a==="a0"?w$(e,r,t):a==="a3"?h$(e,t):a==="a4"?_$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function g$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function h$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function _$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function w$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=y$(r,i),e.addEventListener(t,c,Ot&&{passive:oo(i)<2}),a[t]=c}}var Ot;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ot=!0}}))}catch{}function y$(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!Xe(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cW,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function x$(e,r){return e.$==r.$&&Xr(e.a,r.a)}function mc(e,r){var n=[];return Ie(e,r,n,0),n}function we(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=M$(r),i=1;else{we(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&we(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){we(n,0,a,r);return}(f?!S$(d,m):d!==m)&&we(n,2,a,m),Ie(g,b,n,a+1);return;case 0:e.a!==r.a&&we(n,3,a,r.a);return;case 1:ii(e,r,n,a,T$);return;case 2:ii(e,r,n,a,C$);return;case 3:if(e.h!==r.h){we(n,0,a,r);return}var w=qt(e.d,r.d);w&&we(n,4,a,w);var x=r.i(e.g,r.g);x&&we(n,5,a,x);return}}}function S$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ii(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){we(n,0,a,r);return}var i=qt(e.d,r.d);i&&we(n,4,a,i),t(e,r,n,a)}function qt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=qt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&x$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function T$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?we(n,6,a,{v:l,i:c-l}):c<l&&we(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ie(s,i[$],n,++a),a+=s.b||0}}function C$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,_=g.b,T=b.b,M=void 0,G=void 0;if(w===x){f++,Ie(_,T,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var N=j.a,W=j.b;G=x===N}if(E){var B=E.a,O=E.b;M=w===B}if(M&&G){f++,Ie(_,O,t,f),ln(i,t,w,T,m,c),f+=_.b||0,f++,un(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(M){f++,ln(i,t,x,T,m,c),Ie(_,O,t,f),f+=_.b||0,d+=1,m+=2;continue}if(G){f++,un(i,t,w,_,f),f+=_.b||0,f++,Ie(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===B){f++,un(i,t,w,_,f),ln(i,t,x,T,m,c),f+=_.b||0,f++,Ie(W,O,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;un(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var Q=Q||[],b=u[m];ln(i,t,b.a,b.b,void 0,Q),m++}(t.length>0||c.length>0||Q)&&we(n,8,a,{w:t,x:c,y:Q})}var pc="_elmW6BL";function ln(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}ln(e,r,n+pc,a,t,i)}function un(e,r,n,a,t){var i=e[n];if(!i){var c=we(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),we(r,9,t,{w:l,A:i});return}un(e,r,n+pc,a,t)}function bc(e,r,n,a){vn(e,r,n,0,0,r.b,a)}function vn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)bc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&vn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&vn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return vn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=vn(b[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function gc(e,r,n,a){return n.length===0?e:(bc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=L$(t,a);t===e&&(e=i)}return e}function L$(e,r){switch(r.$){case 0:return P$(e,r.s,r.u);case 4:return dt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return z$(e,r);case 5:return r.s(e);default:en(10)}}function P$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function z$(e,r){var n=r.s,a=k$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ut(e,a),e}function k$(e,r){if(!!e){for(var n=cr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ut(n,i.c===2?i.s:br(i.z,r.u))}return n}}function Yt(e){if(e.nodeType===3)return st(e.textContent);if(e.nodeType!==1)return st("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=rr(o(kn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,$=e.childNodes,a=$.length;a--;)u=rr(Yt($[a]),u);return p(dr,l,r,u)}function M$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var D$=R(function(e,r,n,a){return It(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Yt(l);return hc(i,function($){var s=c($),d=mc(u,s);l=gc(l,u,d,t),u=s})})});R(function(e,r,n,a){return It(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cT&&e.cT(t),l=e.fP,u=cr.title,$=cr.body,s=Yt($);return hc(i,function(d){ca=c;var m=l(d),f=dr("body")(L)(m.eu),g=mc(s,f);$=gc($,s,g,t),s=f,ca=0,u!==m.fK&&(cr.title=u=m.fK)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function hc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}v(function(e,r){return o(lo,io,sr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(lo,io,sr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(lo,io,sr(function(){history.replaceState({},"",r),e()}))});var A$={addEventListener:function(){},removeEventListener:function(){}},B$=typeof window!="undefined"?window:A$;y(function(e,r,n){return uc(sr(function(a){function t(i){Ht(n(i))}return e.addEventListener(r,t,Ot&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Re(e,r);return Xe(n)?te(n.a):q});function _c(e,r){return sr(function(n){ua(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Iv(ts(e)))})})}function F$(e){return sr(function(r){ua(function(){r(Rr(e()))})})}v(function(e,r){return _c(r,function(n){return n[e](),zn})});v(function(e,r){return F$(function(){return B$.scroll(e,r),zn})});y(function(e,r,n){return _c(e,function(a){return a.scrollLeft=r,a.scrollTop=n,zn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var V$=v(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return te(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var E$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?te(d):q}a.push(C(fl,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});R(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?te($):q}return n(C(fl,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var ci=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function Zt(e){for(var r=0;e.b;e=e.b)r++;return r}var R$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},j$=_e(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),N$=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),G$=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),W$=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),H$=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),X$=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),I$=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),U$=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),J$=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),O$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},q$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Y$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Z$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},wc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},yc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Q$=function(e){e.gl.disable(e.gl.CULL_FACE)},K$=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},ef=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},rf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},li=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],nf=[q$,Y$,Z$,wc,yc,Q$,K$,ef,rf];function ui(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function af(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function xc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function tf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?w[x]:w[x][_];else i.forEach(function(T){for(_=0;_<g;_++)f[b++]=g===1?w[T][x]:w[T][x][_]})}var u=xc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(Zt(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function of(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=cf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Zt(r.b),indexBuffer:null,buffers:{}}}function cf(e,r){var n=new Uint32Array(Zt(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function vi(e,r){return e+"#"+r}var Sc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),wc(n),yc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=vi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=ci++,$||($=ui(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ci++,s||(s=ui(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=af(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=lf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=vi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),uf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=of(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=tf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=xc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,_,x*T)}for(n.toggle=!n.toggle,yn(f0(n),i.a),u=0;u<li.length;u++){var M=n[li[u]];M.toggle!==n.toggle&&M.enabled&&(nf[u](n),M.enabled=!1,M.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return yn(t,e.g),r});function lf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(w,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(w,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(_);T||(T=_.eC(e),l.textures.set(_,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==_&&(e.uniform1i(w,x),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(w,_),i[b]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function uf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var vf=y(function(e,r,n){return v$(r,{g:n,f:{},h:e},bf,gf)}),$f=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),ff=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),sf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),df=v(function(e,r){e.contextAttributes.antialias=!0}),mf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),pf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function bf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o($0,r,t)},e.h);var n=cr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),R$(function(){return o(Sc,e,n)})):(n=cr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function gf(e,r){return r.f=e.f,Sc(r)}var hf=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/_f(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function _f(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Qt=new Float64Array(3),$i=new Float64Array(3),fi=new Float64Array(3),wf=y(function(e,r,n){return new Float64Array([e,r,n])}),yf=function(e){return e[0]},xf=function(e){return e[1]},Sf=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Tf=function(e){return new Float64Array([e.fT,e.fX,e.c5])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Tc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Tc);function Cc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(Tc(e,r,n),n)}v(Cc);function Lc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Lc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Cf=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$n=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v($n);function mt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(mt);v(function(e,r){var n,a=Qt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$n(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($n(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($n(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($n(r,a)+e[14])/n,t});var Lf=R(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Pf=function(e){return{fT:e[0],fX:e[1],c5:e[2],em:e[3]}},zf=function(e){return new Float64Array([e.fT,e.fX,e.c5,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/kf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function kf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Mf=new Float64Array(16),Df=new Float64Array(16),Af=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Bf=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Pc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(Pc);R(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Pc(c,l,i,t,n,a)});function zc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(zc);R(function(e,r,n,a){return zc(e,r,n,a,-1,1)});function kc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],_=e[15],T=r[0],M=r[1],G=r[2],j=r[3],E=r[4],N=r[5],W=r[6],B=r[7],O=r[8],Q=r[9],ie=r[10],ve=r[11],oe=r[12],de=r[13],ze=r[14],Te=r[15];return n[0]=a*T+l*M+d*G+b*j,n[1]=t*T+u*M+m*G+w*j,n[2]=i*T+$*M+f*G+x*j,n[3]=c*T+s*M+g*G+_*j,n[4]=a*E+l*N+d*W+b*B,n[5]=t*E+u*N+m*W+w*B,n[6]=i*E+$*N+f*W+x*B,n[7]=c*E+s*N+g*W+_*B,n[8]=a*O+l*Q+d*ie+b*ve,n[9]=t*O+u*Q+m*ie+w*ve,n[10]=i*O+$*Q+f*ie+x*ve,n[11]=c*O+s*Q+g*ie+_*ve,n[12]=a*oe+l*de+d*ze+b*Te,n[13]=t*oe+u*de+m*ze+w*Te,n[14]=i*oe+$*de+f*ze+x*Te,n[15]=c*oe+s*de+g*ze+_*Te,n}v(kc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],_=r[4],T=r[5],M=r[6],G=r[8],j=r[9],E=r[10],N=r[12],W=r[13],B=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*_+c*T+$*M,n[5]=t*_+l*T+s*M,n[6]=i*_+u*T+d*M,n[7]=0,n[8]=a*G+c*j+$*E,n[9]=t*G+l*j+s*E,n[10]=i*G+u*j+d*E,n[11]=0,n[12]=a*N+c*W+$*B+m,n[13]=t*N+l*W+s*B+f,n[14]=i*N+u*W+d*B+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=va(r,Qt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Lc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,T=b-m,M=g-f,G=c*c*$+u,j=w+d,E=b+m,N=w-d,W=l*l*$+u,B=n[0],O=n[1],Q=n[2],ie=n[3],ve=n[4],oe=n[5],de=n[6],ze=n[7],Te=n[8],mr=n[9],pr=n[10],Wa=n[11],Gu=n[12],Wu=n[13],Hu=n[14],Xu=n[15];return a[0]=B*x+ve*_+Te*T,a[1]=O*x+oe*_+mr*T,a[2]=Q*x+de*_+pr*T,a[3]=ie*x+ze*_+Wa*T,a[4]=B*M+ve*G+Te*j,a[5]=O*M+oe*G+mr*j,a[6]=Q*M+de*G+pr*j,a[7]=ie*M+ze*G+Wa*j,a[8]=B*E+ve*N+Te*W,a[9]=O*E+oe*N+mr*W,a[10]=Q*E+de*N+pr*W,a[11]=ie*E+ze*N+Wa*W,a[12]=Gu,a[13]=Wu,a[14]=Hu,a[15]=Xu,a});function Ff(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Ff);R(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Vf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Vf);R(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Cc(e,r,Qt),t=va(mt(n,a,$i),$i),i=va(mt(a,t,fi),fi),c=Mf,l=Df;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,kc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=rv,Xn=Qu,Mc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Xn,e,l,$)}else{var u=c.a;return p(Xn,i,l,u)}});return p(Xn,i,p(Xn,e,r,t),a)}),Kt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Kt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),si=function(e){return p(Kt,y(function(r,n,a){return o(k,z(r,n),a)}),L,e)},Dc=1,Ef=2,Ac=0,xe=function(e){return{$:1,a:e}},eo=v(function(e,r){return{$:3,a:e,b:r}}),di=v(function(e,r){return{$:0,a:e,b:r}}),Bc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Rf=function(e){return{$:2,a:e}},te=function(e){return{$:0,a:e}},q={$:1},jf=Tv,Nf=Xv,De=ic,Pr=v(function(e,r){return o(yv,e,Ca(r))}),ro=v(function(e,r){return h(o(wv,e,r))}),Fc=function(e){return o(Pr,`
    `,o(ro,`
`,e))},Mn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Br=function(e){return p(Mn,v(function(r,n){return n+1}),0,e)},Gf=nv,Wf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(k,r,n);e=a,r=t,n=i;continue e}else return n}),Yr=v(function(e,r){return p(Wf,e,r,L)}),Vc=v(function(e,r){return p(Gf,e,o(Yr,0,Br(r)-1),r)}),Ke=Dv,Ec=function(e){var r=Ke(e);return 97<=r&&r<=122},Rc=function(e){var r=Ke(e);return r<=90&&65<=r},Hf=function(e){return Ec(e)||Rc(e)},Xf=function(e){var r=Ke(e);return r<=57&&48<=r},If=function(e){return Ec(e)||Rc(e)||Xf(e)},Be=function(e){return p(Mn,k,L,e)},rn=bv,Uf=v(function(e,r){return`

(`+(De(e+1)+(") "+Fc(Jf(r))))}),Jf=function(e){return o(Of,e,L)},Of=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=rn(n);if(b.$===1)return!1;var w=b.a,x=w.a,_=w.b;return Hf(x)&&o(jf,If,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(k,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,$=o(k,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(De(Br(s))+" ways:"));return o(Pr,`

`,o(k,g,o(Vc,Uf,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(Fc(o(Nf,4,f))+(`

`+m))}}),Fe=32,pt=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bt=Ju,no=vv,ao=v(function(e,r){return Ko(r)/Ko(e)}),qf=lv,xn=no(o(ao,2,Fe)),jc=C(pt,0,xn,bt,bt),Nc=qu,Gc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Wc=$v,gt=Ou,er=v(function(e,r){return J(e,r)>0?e:r}),Yf=function(e){return{$:0,a:e}},to=Yu,Zf=v(function(e,r){e:for(;;){var n=o(to,Fe,e),a=n.a,t=n.b,i=o(k,Yf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),Qf=function(e){var r=e.a;return r},Kf=v(function(e,r){e:for(;;){var n=no(r/Fe);if(n===1)return o(to,Fe,e).a;var a=o(Zf,e,L),t=n;e=a,r=t;continue e}}),Hc=v(function(e,r){if(r.l){var n=r.l*Fe,a=Wc(o(ao,Fe,n-1)),t=e?Be(r.z):r.z,i=o(Kf,t,r.l);return C(pt,gt(r.p)+n,o(er,5,a*xn),i,r.p)}else return C(pt,gt(r.p),xn,bt,r.p)}),es=_e(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Hc,!1,{z:a,l:n/Fe|0,p:t});var i=Gc(p(Nc,Fe,r,e)),c=e,l=r-Fe,u=n,$=o(k,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),rs=v(function(e,r){if(e<=0)return jc;var n=e%Fe,a=p(Nc,n,e-n,r),t=e-n-Fe;return S(es,r,t,e,L,a)}),Xe=function(e){return!e.$},A=Nv,Y=Fv,D=jv,$e=Vv,$a=Gv,ns=Wv,ke=Bv,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=dr("div"),as=function(e){return{$:2,a:e}},Xc=v(function(e,r){return e}),Ic=v(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fp:r.fp,cS:r.cS,fQ:r.fQ}}),kr=function(e){return e},ts=kr,mi=We(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),os=Cv,zr=gv,Ir=xv,Dn=v(function(e,r){return e<1?r:p(Ir,e,zr(r),r)}),La=Pv,Pa=function(e){return e===""},za=v(function(e,r){return e<1?"":p(Ir,0,e,r)}),Uc=zv,pi=_e(function(e,r,n,a,t){if(Pa(t)||o(os,"@",t))return q;var i=o(La,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Uc(o(Dn,c+1,t));if(l.$===1)return q;var u=l;return te(ye(mi,e,o(za,c,t),u,r,n,a))}else return te(ye(mi,e,t,q,r,n,a))}),bi=R(function(e,r,n,a){if(Pa(a))return q;var t=o(La,"/",a);if(t.b){var i=t.a;return S(pi,e,o(Dn,i,a),r,n,o(za,i,a))}else return S(pi,e,"/",r,n,a)}),gi=y(function(e,r,n){if(Pa(n))return q;var a=o(La,"?",n);if(a.b){var t=a.a;return C(bi,e,te(o(Dn,t+1,n)),r,o(za,t,n))}else return C(bi,e,q,r,n)});v(function(e,r){if(Pa(r))return q;var n=o(La,"#",r);if(n.b){var a=n.a;return p(gi,e,te(o(Dn,a+1,r)),o(za,a,r))}else return p(gi,e,q,r)});var is=Lv,io=function(e){},An=Rr,cs=An(0),Jc=R(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(Mn,e,r,Be(d)):C(Jc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ar=y(function(e,r,n){return C(Jc,e,r,0,n)}),re=v(function(e,r){return p(ar,v(function(n,a){return o(k,e(n),a)}),L,r)}),fa=ft,co=v(function(e,r){return o(fa,function(n){return An(e(n))},r)}),ls=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return An(o(e,a,t))},n)},r)}),us=function(e){return p(ar,ls(k),An(L),e)},vs=Kv,$s=v(function(e,r){var n=r;return uc(o(fa,vs(e),n))}),fs=y(function(e,r,n){return o(co,function(a){return 0},us(o(re,$s(e),r)))}),ss=y(function(e,r,n){return An(0)}),ds=v(function(e,r){var n=r;return o(co,e,n)});Qe.Task=Zv(cs,fs,ss,ds);var ms=$c("Task"),lo=v(function(e,r){return ms(o(co,e,r))}),ps=D$,bs=mv,sa={$:1},Oc=function(e){return{$:2,a:e}},ka={$:0},je=v(function(e,r){return{$:0,a:e,b:r}}),ae=y(function(e,r,n){return r(e(n))}),nn=function(e){var r=e.b.B;return r.a},gs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return te(o(je,r,{B:i,ab:c,T:o(k,a,n)}))}else return q},qc=function(e){var r=e.b;return o(je,ka,r)},hr=v(function(e,r){if(r.$)return e;var n=r.a;return n}),hs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?qc(n):n;case 2:var i=a.a.cX;return(J(i+r.eJ,nn(n).db)>0?o(ae,gs,hr(o(je,sa,t))):kr)(o(je,Oc({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Ic,l.eA,qe(r,{db:l.db+r.eJ})),s=o(e,$,u);return o(je,ka,{B:z($,s),ab:L,T:o(k,t.B,t.T)})}}),Yc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),_s=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(k,a,n);e=i,r=c,n=l;continue e}else return n}}),ws=v(function(e,r){return Be(p(_s,e,r,L))}),Zc=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(k,_,o(k,c,o(k,s,o(k,b,o(ws,r-4,w))))):o(k,_,o(k,c,o(k,s,o(k,b,p(Zc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return h([_])}}),ys=v(function(e,r){return p(Zc,0,e,r)}),xs=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Be(n),le(h([a]),t)),c=o(ys,e,i),l=o(Yc,e,i);if(l.b){var u=l.a,$=l.b;return o(je,sa,{B:u,ab:$,T:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(je,sa,{B:d,ab:L,T:m})}else return r}}),Ss=function(e){var r=e.b;return o(je,sa,r)},Ts=function(e){var r=e.b;return o(je,Oc({cX:nn(e).db}),r)},Cs=v(function(e,r){switch(e.$){case 1:return Ss(r);case 2:return qc(r);case 3:return Ts(r);default:var n=e.a;return o(xs,n,r)}}),Qc=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ls=v(function(e,r){return qe(r,{av:e(r.av)})}),Ps=function(e){return{$:3,a:e}},zs=function(e){return{$:2,a:e}},Kc=v(function(e,r){return{$:0,a:e,b:r}}),ks=v(function(e,r){return{$:1,a:e,b:r}}),Ae=v(function(e,r){if(r.$)return q;var n=r.a;return te(e(n))}),Z=function(e){return e<0?-e:e},uo=kv,Ms=y(function(e,r,n){return o(hr,0/0,uo(o(e,r,n)))}),el=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ds=_v,rl=function(e){return p(Ds,k,L,e)},As=v(function(e,r){var n=o(el,function(a){return a!=="0"&&a!=="."},rl(r));return le(e&&n?"-":"",r)}),pe=ic,ht=pv,nl=Av,al=function(e){var r=e.a,n=e.b;if(r==="9"){var a=rn(n);if(a.$===1)return"01";var t=a.a;return o(ht,"0",al(t))}else{var i=Ke(r);return i>=48&&i<57?o(ht,nl(i+1),n):"0"}},_t=uv,Bs=dv,Ma=function(e){return o(ht,e,"")},tl=y(function(e,r,n){return e<=0?n:p(tl,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=v(function(e,r){return p(tl,e,r,"")}),wt=y(function(e,r,n){return le(n,o(Sn,e-zr(n),Ma(r)))}),yt=hv,ol=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Fs=function(e){var r=o(ro,"e",pe(Z(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(hr,0,Uc(o(is,"+",t)?o(Dn,1,t):t)),c=ol(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(hr,"0",o(Ae,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Ae,Qc(Ma),rn(le(o(Sn,Z(i),"0"),$))))):p(wt,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Vs=y(function(e,r,n){if(_t(n)||Bs(n))return pe(n);var a=n<0,t=ol(Fs(Z(n))),i=t.a,c=t.b,l=zr(i)+r,u=le(o(Sn,-l+1,"0"),p(wt,l,"0",le(i,c))),$=zr(u),s=o(er,1,l),d=o(e,a,p(Ir,s,$,u)),m=p(Ir,0,s,u),f=d?yt(o(hr,"1",o(Ae,al,rn(yt(m))))):m,g=zr(f),b=f==="0"?f:r<=0?le(f,o(Sn,Z(r),"0")):J(r,zr(c))<0?p(Ir,0,g-r,f)+("."+p(Ir,g-r,g,f)):le(i+".",p(wt,r,"0",c));return o(As,a,b)}),mn=Vs(v(function(e,r){var n=rn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ke(t))})),Es=Ms(mn),Rs=y(function(e,r,n){var a=o(ao,10,Z(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Es,t,n)}),il=ev,vo=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(il,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return te(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=_e(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),nr={$:-2},Zr=_e(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,$,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,$,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),xt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,nr,nr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(il,e,t);switch(u){case 0:return S(Zr,a,t,i,p(xt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Zr,a,t,i,c,p(xt,e,r,l))}}),pn=y(function(e,r,n){var a=p(xt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},hi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,$,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,T=_.d,m=_.e,M=e.e;M.a;var g=M.b,b=M.c,w=M.d,x=M.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},Ns=Sa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(X,n,l,u,$,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,hi(r)}else break e;else return c.a,c.d,hi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,ra(t),l);var u=cl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Zr,$,s,d,ra(m),f)}else return nr}else return S(X,r,n,a,ra(t),l)}else return nr},bn=v(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(bn,e,i),c);var u=cl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Zr,$,s,d,o(bn,e,m),f)}else return nr}else return S(X,n,a,t,o(bn,e,i),c);else return o(Gs,e,Gt(Ns,e,r,n,a,t,i,c))}),Gs=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=js(c);if(l.$===-1){var u=l.b,$=l.c;return S(Zr,n,u,$,i,ra(c))}else return nr}else return S(Zr,n,a,t,i,o(bn,e,c))}else return nr}),Ws=v(function(e,r){var n=o(bn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),In=y(function(e,r,n){var a=r(o(vo,e,n));if(a.$)return o(Ws,e,n);var t=a.a;return p(pn,e,t,n)}),Hs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(In,r,Ae(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(ks,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(In,r,Ae(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Kc,z(i,c),p(Rs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(In,r,Ae(function(a){return a.$===3?Ps(n):a}));default:var r=e.a,n=e.b;return o(In,r,Ae(function(a){return a.$===2?zs(n):a}))}},Xs=function(e){return Ls(Hs(e))},Is=v(function(e,r){return o(re,Xs(e),r)}),Us=v(function(e,r){return qe(r,{eA:o(Is,e,r.eA)})}),Js=v(function(e,r){var n=r.a,a=r.b;return o(je,n,qe(a,{B:o(Qc,Us(e),a.B)}))}),Os=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),qs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,qe(t,{B:o(Os,o(e,i.a,r),i)}))}),Ys=R(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return qe(a,{aL:!a.aL});case 2:var t=n.a;return qe(a,{G:p(hs,e,t,a.G)});case 3:var i=n.a;return qe(a,{G:o(Js,i,a.G)});case 4:var c=n.a;return qe(a,{G:p(qs,r,c,a.G)});default:var l=n.a;return qe(a,{G:o(Cs,l,a.G)})}}),Zs=v(function(e,r){return o(je,ka,{B:z(e,r(e)),ab:L,T:L})}),Qs=e$,_i=Qs(L),da=Rv,Tn=Ev,Ks=o$("tick",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return ke({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",da(Tn)))},o(D,"left",Y))},o(D,"pressedKeys",da(Tn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return ke({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return ke({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return ke({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e))))),ed=function(e){return{$:4,a:e}},rd={$:0},nd=lc,He=v(function(e,r){return o(dc,e,nd(r))}),U=He("className"),ad=function(e){var r=e.b.B;return r.b},ma=He("id"),td=$$,pa=td,od=f$,he=od,id={$:1},cd=function(e){return{$:3,a:e}},ld=function(e){return{$:5,a:e}},wi=dr("a"),$o=dr("button"),ud=kn("d"),ll=fc("http://www.w3.org/2000/svg"),vd=ll("path"),$d=ll("svg"),fd=kn("viewBox"),gn=function(e){return o($d,h([fd("0 0 100 100"),o(he,"width","100%"),o(he,"height","100%")]),h([o(vd,h([ud(e)]),L)]))},yi=function(e){return o(He,"href",d$(e))},Jr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},sd=function(e){return{$:0,a:e}},ul=sc,vl=v(function(e,r){return o(ul,e,sd(r))}),fo=function(e){return o(vl,"click",ke(e))},xi=He("target"),dd=He("title"),St=v(function(e,r){if(r.$===-2)return nr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(St,e,i),o(St,e,c))}),md=st,ge=md,pd=function(e){return p(Kt,y(function(r,n,a){return o(k,n,a)}),L,e)},bd=v(function(e,r){return{$:3,a:e,b:r}}),gd=v(function(e,r){return{$:2,a:e,b:r}}),hd=v(function(e,r){return{$:0,a:e,b:r}}),_d=v(function(e,r){return{$:1,a:e,b:r}}),Bn=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),wd=C(Bn,0/255,0/255,0/255,1),yd=lc,xd=v(function(e,r){return o(dc,e,yd(r))}),Sd=xd("checked"),Ue=fv,Td=y(function(e,r,n){return le(o(Sn,e-zr(n),Ma(r)),n)}),Cn=tv,$l=function(e){var r=function(n){return n<10?De(n):Ma(nl(87+n))};return e<16?r(e):le($l(e/16|0),r(o(Cn,16,e)))},Cd=o(ae,$l,o(Td,2,"0")),so=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},Ld=function(e){var r=so(e),n=r.cM,a=r.cc,t=r.b5;return o(Pr,"",o(k,"#",o(re,o(ae,Ue,Cd),h([n*255,a*255,t*255]))))},Tt=He("htmlFor"),Pd=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ba=v(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return e(n)}}),zd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(k,t,n)}),mo=v(function(e,r){return p(ar,zd(e),L,r)}),fl=R(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),kd=E$,Md=Mv,Dd=v(function(e,r){if(r.$)return xe(e);var n=r.a;return ue(n)}),Ad=V$,Bd=function(e){return o(Ad,{ew:!1,fe:!1},e)},po=function(e){if(e.b){var r=e.a;return e.b,te(r)}else return q},Fd=v(function(e,r){if(r.$){var a=r.a;return xe(a)}else{var n=r.a;return ue(e(n))}}),Vd=function(e){return{$:2,a:e}},Ed=function(e){return{$:0,a:e}},Rd=function(e){return{$:1,a:e}},Ia=v(function(e,r){return Ke(r)-Ke(e)}),Ua=y(function(e,r,n){var a=Ke(n);return J(Ke(e),a)<1&&J(a,Ke(r))<1}),jd=v(function(e,r){var n=function(t){return J(t,e)<0?ue(t):xe(Rd(r))},a=p(Ua,"0","9",r)?ue(o(Ia,"0",r)):p(Ua,"a","z",r)?ue(10+o(Ia,"a",r)):p(Ua,"A","Z",r)?ue(10+o(Ia,"A",r)):xe(Ed(r));return o(ba,n,a)}),sl=v(function(e,r){var n=rn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ba,function(c){return o(ba,function(l){return ue(c+l*e)},o(sl,e,i))},o(jd,e,t))}),Nd=v(function(e,r){return 2<=e&&e<=36?o(sl,e,yt(r)):xe(Vd(e))}),Gd=Nd(16),Wd=y(function(e,r,n){return C(Bn,e,r,n,1)}),dl=R(function(e,r,n,a){return C(Bn,e,r,n,a)}),Fn=av,Hd=v(function(e,r){var n=o(Fn,10,e);return Ue(r*n)/n}),Xd=Sv,Id=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=rl(n);if(a.b&&!a.b.b){var t=a.a;return Md(h([t,t]))}else return n};return o(ae,Xd,o(ae,function(n){return o(Ae,function(a){return p(kd,1,a,n)},Bd(e))},o(ae,Pd(po),o(ae,Ae(function(n){return n.fF}),o(ae,Ae(mo(kr)),o(ae,Dd("Parsing hex regex failed"),ba(function(n){var a=o(re,o(ae,r,o(ae,Gd,Fd(qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(C(dl,t/255,c/255,u/255,o(Hd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Wd,t/255,c/255,u/255))}else break e;return xe("Parsing ints from hex failed")})))))))}(),ga=dr("input"),Ct=dr("label"),Lt=He("name"),ml=v(function(e,r){return p(ar,D,r,e)}),Ud=o(ml,h(["target","checked"]),Y),Jd=function(e){return o(vl,"change",o($a,e,Ud))},Od=function(e){return z(e,!0)},qd=function(e){return{$:1,a:e}},Yd=v(function(e,r){return o(ul,e,qd(r))}),Zd=o(ml,h(["target","value"]),Tn),bo=function(e){return o(Yd,"input",o($a,Od,o($a,e,Zd)))},pl=He("max"),bl=He("min"),gl=function(e){return o(He,"step",e)},ha=He("type"),go=He("value"),Si=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,L,h([o(Ct,h([Tt(r)]),h([o(I,h([U("relative w-full")]),h([o(I,h([U("inline-block")]),h([ge(r)])),o(I,h([U("inline-block float-right")]),h([ge(pe(n))]))]))])),o(ga,h([ha("range"),o(he,"width","100%"),ma(r),Lt(r),bl(pe(a)),pl(pe(t)),go(pe(n)),gl(pe(i)),bo(o(ae,uo,o(ae,hr(42),c)))]),L)]))},Qd=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Kd=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,h([o(I,h([U("mb-2")]),h([o(Ct,h([Tt(e)]),h([ge(e)]))])),o(ga,h([ha("checkbox"),ma(e),Lt(e),Jd(bd(e)),Sd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Si({cf:e,cr:i,cv:t,cz:hd(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Si({cf:e,cr:i,cv:t,cz:o(ae,Ue,_d(e)),cV:1,c0:c});default:var c=r.a;return o(I,L,h([o(I,h([o(he,"margin-bottom","6px")]),h([o(Ct,h([Tt(e)]),h([ge(e)]))])),o(ga,h([ha("color"),o(he,"width","100%"),o(he,"height","26px"),o(he,"padding","0px"),ma(e),Lt(e),bo(function(l){return o(gd,e,o(Qd,wd,Id(l)))}),go(Ld(c))]),L)]))}}),em=function(e){return o(I,h([U("p-6 border-y-[0.5px] border-white20")]),h([o(I,h([U("text-lg pb-2")]),h([ge(e.ff)])),o(I,h([U("pl-2 pr-2")]),pd(o(St,Kd,e.av)))]))},rm=function(e){return o(I,h([U("text-xs text-white60")]),o(re,em,e))},nm=function(e){return o(I,h([U("absolute left-[104px] bottom-2 text-sm text-white40")]),h([ge("clock: "+o(mn,3,nn(e).db))]))},am=function(e){e.a;var r=e.b.T;return o(Ae,function(n){return Ue(60/(nn(e).db-n))},o(Ae,o(ae,Qf,function(n){return n.db}),po(o(Yc,59,r))))},tm=function(e){return o(I,h([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=am(e);if(r.$===1)return h([ge("... Fps")]);var n=r.a;return h([ge(De(n)+" Fps")])}())},om=function(e){return{$:0,a:e}},im=function(e){var r=e.b.T;return Br(r)},cm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Br(r)+1+Br(n)},lm=function(e){return o(ga,h([U("absolute left-[100px] w-[490px]"),ha("range"),bl(De(0)),pl(De(cm(e)-1)),go(De(im(e))),gl(De(1)),bo(o(ae,uo,o(ae,hr(42),o(ae,Ue,om))))]),L)},Ti={$:1},um={$:3},vm={$:2},hl=function(e){return!e.b},Ci=v(function(e,r){return o($o,h([U("px-2 bg-black40"),U(r),fo(e)]),h([ge("REC")]))}),Li=v(function(e,r){return o($o,h([U("absolute left-[60px] mx-1 px-1 bg-black40"),fo(r)]),h([o(I,h([U("w-4 h-6 fill-white80")]),h([gn(e)]))]))}),$m=function(e){var r=e.a,n=e.b.ab;return o(I,h([U("py-1")]),h([function(){switch(r.$){case 0:return o(Ci,Ti,"text-red-500 font-bold");case 1:return o(Ci,vm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return hl(n)?o(I,L,L):o(Li,Jr.fo,um);default:return o(Li,Jr.fn,Ti)}}()]))},fm=function(e){return o(I,h([U("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),h([lm(e),$m(e),tm(e),nm(e)]))},_l=function(e){return o(Pr,"",e)},sm=v(function(e,r){if(r.b){var n=r.a,a=r.b,t=v(function(c,l){return o(k,e,o(k,c,l))}),i=p(ar,t,L,a);return o(k,n,i)}else return L}),dm=function(e){var r=e.a;return gr(r,ka)},Cr=dr("p"),mm=dr("pre"),pm=v(function(e,r){var n=dm(r.G)?o(I,L,L):o(I,h([U("absolute pointer-events-none w-8 h-8"),o(he,"left",pe(e.fp.fT+.5*e.cS.fR)+"px"),o(he,"top",pe(-e.fp.fX+.5*e.cS.eW)+"px")]),h([o(I,h([U(e.fp.e4?"fill-black80":"fill-white40")]),h([gn(Jr.fp)]))]));return o(I,L,h([n,o(mm,h([U("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),h([o(Cr,L,h([ge("pressedKeys: "+_l(o(sm," ",e.e7.fq)))])),o(Cr,L,h([ge("delta time: "+o(mn,4,e.eJ))])),o(Cr,L,h([ge("pointer is down: "+(e.fp.e4?"yes":"no"))])),o(Cr,L,h([ge("pointer.x: "+o(mn,2,e.fp.fT))])),o(Cr,L,h([ge("pointer.y: "+o(mn,2,e.fp.fX))])),o(Cr,L,h([ge("wheel deltaX: "+pe(e.fQ.eD))])),o(Cr,L,h([ge("wheel deltaY: "+pe(e.fQ.eE))]))]))]))}),bm=v(function(e,r){var n=o($o,h([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),fo(id),dd("Distraction Free Mode")]),h([gn(Jr.f$)])),a=o(I,h([U("absolute w-8 bottom-12")]),h([o(wi,h([U("fill-twitterBlue40 hover:fill-twitterBlue"),yi("https://twitter.com/AzizErkalSelman"),xi("_blank")]),h([gn(Jr.fL)]))])),t=o(I,h([U("absolute w-8 bottom-2")]),h([o(wi,h([U("fill-githubCat40 hover:fill-githubCat"),yi("https://github.com/erkal/elm-3d-playground-exploration"),xi("_blank")]),h([gn(Jr.eQ)]))]));return r.aL?o(I,h([U("fixed w-10 h-10 p-1")]),h([n])):o(I,L,h([o(I,h([U("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),h([n,a,t])),o(I,h([U("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),h([o(pa,cd,rm(nn(r.G).eA))])),o(pa,ld,fm(r.G)),o(pm,e,r)]))}),gm=y(function(e,r,n){var a=ad(n.G),t=nn(n.G);return o(I,h([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(he,"width",pe(t.cS.fR)+"px"),o(he,"height",pe(t.cS.eW)+"px")]),h([o(I,h([U("fixed")]),h([o(pa,Xc(rd),o(e,t,a))])),o(I,h([ma("gui")]),h([o(bm,t,n),o(I,h([U("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),h([o(pa,ed,o(r,t,a))]))]))]))}),hm=We(function(e,r,n,a,t,i){var c=v(function(u,$){return z(C(Ys,r,i,u,$),_i)}),l=function(u){var $=o(Ic,n,u.e1);return z({aL:u.e1.cS.fR<500,G:o(Zs,$,a)},_i)};return ps({e0:l,fG:Xc(Ks(as)),fM:c,fP:o(gm,e,t)})}),_m=R(function(e,r,n,a){return ye(hm,e,r,n,a,v(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),wm=function(e){return{}},ym=y(function(e,r,n){return{av:n,e5:r,ff:e}}),wl=nr,xm=function(e){return p(Mn,v(function(r,n){var a=r.a,t=r.b;return p(pn,a,t,n)}),wl,e)},Sm=y(function(e,r,n){return p(ym,e,r,xm(n))}),Tm=Sm,Cm=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Kc,z(a,t),n))}),Lm=h([p(Tm,"Camera",!0,h([p(Cm,"camera height",z(1.4,1.57),1.57)]))]),Pm=v(function(e,r){return r}),zm=v(function(e,r){return o(Ae,function(n){if(n.$)return 0;var a=n.b;return a},o(vo,e,r.av))}),km=v(function(e,r){return o(hr,0,po(o(mo,zm(e),r)))}),Mm=v(function(e,r){return o(km,e,r.eA)}),Pi=Mm,Dm=function(e){return e},lr=function(e){return e},Pt=function(e){var r=e;return-r},Am=v(function(e,r){var n=e,a=r;return{fT:n.fX*a.c5-n.c5*a.fX,fX:n.c5*a.fT-n.fT*a.c5,c5:n.fT*a.fX-n.fX*a.fT}}),yl=function(e){var r=e;return r.c3},xl=function(e){var r=e;return r.c4},Bm=function(e){return o(Am,yl(e),xl(e))},jr=function(e){var r=e;return r.cA},Fr=iv,Qr=cv,na=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Qr(c),$=a.eG,s=$,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,_=1-2*(f+x),T=s.c5*u,M=l*T,G=2*(w-M),j=2*(w+M),E=d*T,N=2*(E+b),W=2*(E-b),B=g*T,O=2*(B-m),Q=2*(B+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+G*i.fX+N*i.c5,fX:j*i.fT+oe*i.fX+O*i.c5,c5:W*i.fT+Q*i.fX+_*i.c5}}),Vn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Fr(c),u=Qr(c),$=a.cA,s=$,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c5-s.c5,g=a.eG,b=g,w=b.fT*u,x=l*w,_=w*w,T=b.fX*u,M=l*T,G=w*T,j=T*T,E=1-2*(_+j),N=b.c5*u,W=l*N,B=2*(G-W),O=2*(G+W),Q=w*N,ie=2*(Q+M),ve=2*(Q-M),oe=T*N,de=2*(oe-x),ze=2*(oe+x),Te=N*N,mr=1-2*(j+Te),pr=1-2*(_+Te);return{fT:s.fT+mr*d+B*m+ie*f,fX:s.fX+O*d+pr*m+de*f,c5:s.c5+ve*d+ze*m+E*f}}),fr=function(e){return e},xr=function(e){var r=e;return r.c3},Sr=function(e){var r=e;return r.c4},Tr=function(e){var r=e;return r.c6},Sl=y(function(e,r,n){return fr({cA:p(Vn,e,r,jr(n)),c3:p(na,e,r,xr(n)),c4:p(na,e,r,Sr(n)),c6:p(na,e,r,Tr(n))})}),zi=y(function(e,r,n){return p(Sl,e(n),r,n)}),ho=function(e){var r=e;return r.eG},En=v(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c5:a.c5+n.c5}}),Tl=v(function(e,r){return fr({cA:o(En,e,jr(r)),c3:xr(r),c4:Sr(r),c6:Tr(r)})}),Fm=v(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c5:n*a.c5}}),Vm=y(function(e,r,n){return o(Tl,o(Fm,r,e),n)}),Em=y(function(e,r,n){return p(Vm,ho(e(n)),r,n)}),Nr=v(function(e,r){return{eG:r,cA:e}}),Rm=function(e){var r=e;return o(Nr,r.cA,r.c3)},jm=function(e){var r=e;return o(Nr,r.cA,r.c4)},Nm=function(e){var r=e;return o(Nr,r.cA,r.c6)},Gm=function(e){var r=fr({cA:e.aR,c3:xl(e.dl),c4:Bm(e.dl),c6:yl(e.dl)}),n=p(Em,Nm,e.cb,p(zi,Rm,Pt(e.bC),p(zi,jm,e.bx,r)));return n},Wm=function(e){return{$:1,a:e}},se=function(e){var r=e;return Z(r)},Hm=function(e){return{cL:Wm(se(e.el)),c1:e.c1}},Vr=function(e){return e},Ye={fT:0,fX:0,c5:0},Cl=kr,ur=function(e){return e},Ll=ur({fT:1,fX:0,c5:0}),_o=Ll,wo=ur({fT:0,fX:0,c5:1}),yo=wo,Xm=Cl({cA:Ye,c3:yo,c4:_o}),Im=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.el;return Hm({c1:Gm({bx:Vr(n),cb:lr(1e3),bC:Vr(a),aR:Dm(r),dl:Xm}),el:lr(t)})},Um=function(e){return Im({bx:o(Pi,"camera height",e),bC:o(Pi,"camera height",e),aR:{fT:0,fX:2,c5:0},el:2})},Er=ov,zt=function(e){return e*Er/180},Jm=function(e){return e},Om=function(e){return lr(.01*e)},ki=function(e){return e},qm=function(e){return e},Ym=function(e){return{$:0,a:e}},Zm=Ym,Qm={$:3},Km=Qm,e0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),r0=e0,n0=v(function(e,r){return r.b?p(ar,k,r,e):e}),Ne=function(e){return p(ar,n0,L,e)},xo=v(function(e,r){return Ne(o(re,e,r))}),a0=function(e){return{$:1,a:e}},t0=a0,o0=function(e){return o(kn,"height",De(e))},i0=function(e){return u$(s$(e))},c0=i0,l0=function(e){return{$:2,a:e}},u0=l0,v0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ue(l*1e3)/1e3},c=function(l){return Ue(l*1e4)/100};return _l(h(["rgba(",pe(c(r)),"%,",pe(c(n)),"%,",pe(c(a)),"%,",pe(i(t)),")"]))},$0=v(function(e,r){switch(r.$){case 0:return o($f,e,r);case 1:return o(ff,e,r);case 2:return o(sf,e,r);case 3:return o(df,e,r);case 4:return o(mf,e,r);default:return o(pf,e,r)}}),f0=v(function(e,r){switch(r.$){case 0:return o(N$,e,r);case 1:return o(G$,e,r);case 2:return o(W$,e,r);case 3:return o(H$,e,r);case 4:return o(X$,e,r);case 5:return o(I$,e,r);case 6:return o(U$,e,r);case 7:return o(J$,e,r);default:return O$(e)}}),s0=y(function(e,r,n){return p(vf,e,r,n)}),Mi=function(e){var r=e;return r},an=Lf,Ja=C(an,1,1,1,1),Je=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),d0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),m0=v(function(e,r){var n=e,a=r.fT,t=r.fX;return p(d0,n*a/t,n,n*(1-a-t)/t)}),Rn=wf,p0=function(e){var r=e.a,n=e.b,a=e.c;return p(Rn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},So=v(function(e,r){return p0(o(m0,e,r))}),Pl=v(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ze=Af,b0=function(e){return Ze({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Oa=_e(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(an,a.bX,a.bX,a.bX,i);return ye(t,e,c,b0(a),a.dp,r,n)}),zl=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Pl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(k,S(Oa,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(k,S(Oa,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var _=t.a,T=o(k,S(Oa,e,r,n,a,_),i.fz);return{M:i.M,U:i.U,fz:T};default:var M=t.a;return p(Mn,C(zl,e,r,n,a),i,M)}}),g0=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),kl=g0,To=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),h0=function(e){var r=e.Z,n=e.W,a=e.V;return C(To,518,r,n,a)},_0=v(function(e,r){return{$:6,a:e,b:r}}),w0=_0,Ml=h([h0({V:1,W:0,Z:!1}),C(kl,!1,!1,!1,!1),o(w0,0,1)]),Kr=519,Co=8,Dl=15,Or=7681,y0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=j$,x0=v(function(e,r){return{$:0,a:e,b:r}}),S0=x0({df:1,$7:0,dV:5}),Me=hf,T0=S0(h([{bT:o(Me,-1,-1)},{bT:o(Me,1,-1)},{bT:o(Me,-1,1)},{bT:o(Me,1,1)}])),C0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},L0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Lo=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(ae,c($.bl),o(ae,l($.a8),o(ae,l($.bt),l($.bu))))};return o(u,n,o(u,r,p(L0,a,t,i)))}),Po=function(e){return p(Lo,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},zo=function(e){return S(ne,h([Po(e),C(kl,!1,!1,!1,!1)]),C0,y0,T0,{})},P0=zo({a8:Or,co:0,cN:Co,bl:Kr,c2:Dl,bt:Or,bu:Or}),z0=516,Di=5386,Se=7680,k0=function(e){return o(Fn,2,e+4)},Al=function(e){return zo({a8:Se,co:Dl,cN:Co,bl:z0,c2:k0(e),bt:Di,bu:Di})},M0=y(function(e,r,n){return Ne(h([p(Je,e,n,Ml),h([Al(r),P0])]))}),D0=v(function(e,r){return Ne(o(Vc,M0(e),r))}),A0=function(e){var r=e.Z,n=e.W,a=e.V;return C(To,513,r,n,a)},B0=A0({V:1,W:0,Z:!0}),F0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},V0=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return F0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},E0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ai=v(function(e,r){var n=e,a=r;return p(E0,32774,n,a)}),R0=1,Bi=771,j0=770,ko=V0({bv:0,aH:o(Ai,R0,Bi),by:0,bA:o(Ai,j0,Bi),bF:0,bV:0}),Gr=h([B0,ko]),N0=function(e){var r=e;return r.dO},G0=function(e){var r=e;return r.dP},Bl=function(e){var r=e;return r.dQ},W0=function(e){var r=e;return r.dR},H0=function(e){var r=e;return r.dS},Fl=function(e){var r=e;return r.dT},vr=v(function(e,r){var n=e,a=r;return a-n}),Vl=function(e){return V(o(vr,W0(e),N0(e)),o(vr,H0(e),G0(e)),o(vr,Fl(e),Bl(e)))},Fi=function(e){var r=e;return jr(r)},X0=function(e){return e},I0=function(e){return fr({cA:X0({fT:e.H,fX:e.I,c5:e.J}),c3:ur({fT:e.q,fX:e.r,c5:e.s}),c4:ur({fT:e.t,fX:e.u,c5:e.v}),c6:ur({fT:e.w,fX:e.x,c5:e.y})})},qa=v(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,$=u;return{fT:a.fT*$.fT+a.fX*$.fX+a.c5*$.c5,fX:a.fT*l.fT+a.fX*l.fX+a.c5*l.c5,c5:a.fT*i.fT+a.fX*i.fX+a.c5*i.c5}}),El=v(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c5-i.c5,$=n.c6,s=$,d=n.c4,m=d,f=n.c3,g=f;return{fT:c*g.fT+l*g.fX+u*g.c5,fX:c*m.fT+l*m.fX+u*m.c5,c5:c*s.fT+l*s.fX+u*s.c5}}),Rl=v(function(e,r){return{cA:o(El,e,jr(r)),c3:o(qa,e,xr(r)),c4:o(qa,e,Sr(r)),c6:o(qa,e,Tr(r))}}),kt=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),_a=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(er,n,a)}),aa=v(function(e,r){return J(e,r)<0?e:r}),fe=v(function(e,r){var n=e,a=r;return o(aa,n,a)}),U0=v(function(e,r){var n=_a(r),a=_a(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},J0=function(e){var r=e;return V(r.fT,r.fX,r.c5)},Ya=function(e){var r=e;return .5*r},hn=v(function(e,r){var n=e,a=r;return a+n}),O0=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=Ya(se(a)),c=Ya(se(n)),l=Ya(se(t)),u=J0(r),$=u.a,s=u.b,d=u.c;return{dO:o(hn,c,$),dP:o(hn,i,s),dQ:o(hn,l,d),dR:o(vr,c,$),dS:o(vr,i,s),dT:o(vr,l,d)}}),Vi=R(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,$=t.fX*r,s=t.fT*r,d=Ge(Tr(e)),m=Z(l*d.fT)+Z(c*d.fX)+Z(i*d.c5),f=Ge(Sr(e)),g=Z(l*f.fT)+Z(c*f.fX)+Z(i*f.c5),b=Ge(xr(e)),w=Z(l*b.fT)+Z(c*b.fX)+Z(i*b.c5),x=o(O0,V(w,g,m),o(El,e,p(kt,s,$,u)));if(a.$)return te(x);var _=a.a;return te(o(U0,_,x))}),Mt=R(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Vi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Vi,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Mt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(Rl,I0($),e),m=r*$.bX,f=e,g=r,b=C(Mt,d,m,n,h([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),tn=yf,on=xf,cn=Sf,jl=function(e){return{$:4,a:e}},q0=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(k,n,r);e=t,r=i;continue e}else return r}),jn=function(e){return jl(o(q0,e,L))},Y0={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Z0=function(e){var r=e;return r},Ei=zo({a8:Or,co:0,cN:Co,bl:Kr,c2:255,bt:Or,bu:Or}),Ur=sv,ir=0,Q0=function(e){var r=e,n=o(er,Z(r.fT),o(er,Z(r.fX),Z(r.c5)));if(n){var a=r.c5/n,t=r.fX/n,i=r.fT/n,c=Ur(i*i+t*t+a*a);return c*n}else return ir},Ce={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fT:0,fX:0,c5:0},Ee=v(function(e,r){var n=e,a=r;return Ze({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),fn=z({bd:o(Ee,Ce,Ce),bK:o(Ee,Ce,Ce),bL:o(Ee,Ce,Ce),bM:o(Ee,Ce,Ce)},C(an,0,0,0,0)),K=v(function(e,r){var n=r;return e*n}),Nl=514,Gl=function(e){var r=e.Z,n=e.W,a=e.V;return C(To,515,r,n,a)},Wl=240,K0=h([Gl({V:1,W:0,Z:!0}),Po({a8:Se,co:Wl,cN:0,bl:Nl,c2:0,bt:Se,bu:Se}),ko]),ep=v(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=se(a),l=c,u=se(t),$=u,s=n.cL;if(s.$){var m=s.a;return _t($)?Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ze({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return _t($)?Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ze({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),Un=v(function(e,r){return(1&e>>r)===1?0:1}),rp=function(e){return h([Gl({V:1,W:0,Z:!0}),Po({a8:Se,co:Wl,cN:e,bl:Nl,c2:0,bt:Se,bu:Se}),ko])},np=y(function(e,r,n){return Ne(o(re,function(a){var t=a<<4,i=C(an,o(Un,a,0),o(Un,a,1),o(Un,a,2),o(Un,a,3));return p(Je,e,z(r,i),rp(t))},o(Yr,1,o(Fn,2,n)-1)))}),$r=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c5:-r.c5}},qr=function(e){var r=e;return r},ap=Bf,Ri=function(e){var r=e;return $r(Tr(r))},Hl=ur({fT:0,fX:1,c5:0}),Mo=Hl,tp={cA:Ye,c3:_o,c4:Mo,c6:yo},Da=function(e){var r=e;return r},op=function(e){var r=Da(jr(e)),n=Ge(Tr(e)),a=Ge(Sr(e)),t=Ge(xr(e));return Ze({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},ip=v(function(e,r){var n=r;return op(o(Rl,n,e))}),cp=function(e){return o(ip,tp,e)},lp=function(e){var r=e;return r.c1},up=function(e){var r=e;return xr(r)},vp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),$p=function(e){var r=e;return Sr(r)},fp=function(e){var r=lp(e.ev),n=fr({cA:Fi(r),c3:up(r),c4:$p(r),c6:$r(Ri(r))}),a=jn(e.aP),t=a,i=C(Mt,n,1,q,h([t]));if(i.$===1)return L;var c=i.a,l=cp(r),u=o(K,.99,o(ce,se(e.aJ),Pt(Bl(c)))),$=Vl(c),s=$.a,d=$.b,m=$.c,f=Q0(p(vp,s,d,m)),g=o(K,1.01,o(hn,f,Pt(Fl(c)))),b=o(ep,e.ev,{eq:e.eq,eP:g,fg:u}),w=ap(b).dM,x=w?Ge($r(Ri(r))):qr(Fi(r)),_=function(){var oe=e.bZ;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=oe.a;return z(3,de);case 4:var de=oe.a;return z(4,de);default:return z(5,0)}}(),T=_.a,M=_.b,G=e.bD,j=G,E=o(So,j,e.b$),N=E,W=Ze({dx:0,dy:x.fT,dz:tn(N),dA:e.ec,dB:0,dC:x.fX,dD:on(N),dE:Z0(f),dF:0,dG:x.c5,dH:cn(N),dI:T,dJ:0,dK:w,dL:0,dM:M}),B=ye(zl,W,l,b,Y0,t,{M:L,U:L,fz:L}),O=e.bJ;switch(O.$){case 0:var Q=O.a;return Ne(h([p(Je,B.M,z(Q,Ja),Gr),p(Je,B.U,fn,Gr)]));case 1:var Q=O.a;return Ne(h([p(Je,B.M,fn,Gr),h([Ei]),p(Je,B.fz,Q.bd,Ml),h([Al(0)]),p(Je,B.M,z(Q,Ja),K0),p(Je,B.U,fn,Gr)]));default:var ie=O.a,ve=O.b;return Ne(h([p(Je,B.M,z(ve,Ja),Gr),h([Ei]),o(D0,B.fz,ie),p(np,B.M,ve,Br(ie)),p(Je,B.U,fn,Gr)]))}},sp=function(e){return o(kn,"width",De(e))},dp=v(function(e,r){var n=h([t0(1),u0(0),Zm(!0),C(r0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(k,Km,n),"1",1);default:var M=T.a;return V(n,"0",M)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Mi($),d=o(he,"height",De(s)+"px"),m=Mi(u),f=m/s,g=o(xo,function(T){return fp({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(he,"width",De(m)+"px"),w=e.aI,x=w,_=v0(x);return p(c0,"div",h([o(he,"padding","0px"),b,d]),h([z(i,p(s0,t,h([sp(Ue(m*c)),o0(Ue(s*c)),b,d,o(he,"display","block"),o(he,"background-color",_)]),g))]))}),mp=function(e){return o(dp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Xl=function(e){return e},ji=Xl({fT:.31271,fX:.32902}),pp=v(function(e,r){var n=e,a=Ge(r.eG),t=a.fT,i=a.fX,c=a.c5,l=o(So,r.cd,r.b6),u=l;return{by:cn(u),ex:n,bF:on(u),cJ:0,bV:tn(u),cZ:1,fT:-t,fX:-i,c5:-c}}),bp=function(e){return e},gp=function(e){return bp(1.2*o(Fn,2,e))},Za=function(e){return e},hp={$:0},_p=hp,Il=function(e){return e},wp=v(function(e,r){var n=e,a=r;return J(a,n)>0}),Ni=function(e){var r=e;return r},yp=function(e){e:for(;;){if(gr(e.e2,ir)&&gr(e.e3,ir))return Ce;if(o(wp,se(e.e2),se(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:$r(e.ei)};e=r;continue e}else{var n=Z(Ni(e.e3)/Er),a=Z(Ni(e.e2)/Er),t=Ge(e.ei),i=t.fT,c=t.fX,l=t.c5,u=o(So,Il(1),e.b6),$=u;return{by:a*cn($),ex:!1,bF:a*on($),cJ:n/a,bV:a*tn($),cZ:3,fT:i,fX:c,c5:l}}}},Gi=function(e){return yp({b6:e.b6,e2:e.cd,e3:ir,ei:e.ei})},Ul=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),xp=function(e){var r=e;return r},Jl=function(e){var r=p(Ul,1667,25e3,xp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Xl({fT:n,fX:a})},Ol=function(e){return e},Sp=Jl(Ol(12e3)),Tp=Jl(Ol(5600)),Cp=function(e){return{$:2,a:e}},Lp=function(e){return Cp(e)},Pp=v(function(e,r){return{$:2,a:e,b:r}}),ql=function(e){return{$:0,a:e}},Jn=function(e){var r=e;return r},zp=function(e){var r=e;return r.ex},kp=ql(fn.a),Mp=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(k,a,i),c):z(i,o(k,a,c))});return p(ar,n,z(L,L),r)}),Dp=function(e){var r=e;return Ze({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},Ap=ee(function(e,r,n,a,t,i,c,l){var u=o(Mp,zp,h([Jn(e),Jn(r),Jn(n),Jn(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,_=x.a;return o(Pp,o(re,Dp,$),{bd:o(Ee,m,g),bK:o(Ee,w,_),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return kp}else return ql({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),Bp=y(function(e,r,n){return Ta(Ap,e,r,n,Ce,Ce,Ce,Ce,Ce)}),Fp=function(e){var r=o(pp,qm(e.fz),{b6:Tp,eG:e.fI,cd:Za(8e4)}),n=Gi({b6:Sp,cd:Za(2e4),ei:e.ei}),a=Gi({b6:ji,cd:Za(15e3),ei:$r(e.ei)}),t=p(Bp,r,n,a);return mp({b0:Lp(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:gp(15),bJ:t,bZ:_p,b$:ji})},Vp=function(e){var r=e;return r},Aa=function(e){var r=e;return Vp(r.er)},Yl=R(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Ep=R(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Zl=R(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ql=R(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Rp=R(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),jp=R(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Np=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Do=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(Np,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Yl,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(Ep,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(Zl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(jp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(Ql,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(Rp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Ao={$:0},Gp=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=_a(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),Wp=y(function(e,r,n){var a=_a(e(r));return Ta(Gp,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Qa=v(function(e,r){var n=e,a=r;return J(a,n)<1}),Kl=function(e){return o(Qa,e.dO,e.dR)&&o(Qa,e.dP,e.dS)&&o(Qa,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Ln=function(e){var r=e;return r},Mr=function(e){var r=e;return r.fT},Dr=function(e){var r=e;return r.fX},Ar=function(e){var r=e;return r.c5},eu=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Mr(n),c=Dr(n),l=Ar(n),u=Mr(a),$=Dr(a),s=Ar(a),d=Mr(t),m=Dr(t),f=Ar(t);return Kl({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,$,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,$,m)),dT:o(fe,l,o(fe,s,f))})},ru=Tf,Le=function(e){return ru(Da(e))},nu=function(e){var r=e;return r},Ba=function(e){return ru(nu(e))},Hp=v(function(e,r){var n=e,a=r;return{fT:a.fX*n.c5-a.c5*n.fX,fX:a.c5*n.fT-a.fT*n.c5,c5:a.fT*n.fX-a.fX*n.fT}}),Dt=v(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c5:a.c5-n.c5}}),Xp={fT:0,fX:0,c5:0},Ip=v(function(e,r){var n=e,a=r,t=o(er,Z(a.fT),o(er,Z(a.fX),Z(a.c5)));if(t){var i=a.c5/t,c=a.fX/t,l=a.fT/t,u=Ur(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c5:n*i/u}}else return Xp}),Up=Ip(Il(1)),au=y(function(e,r,n){var a=o(Dt,r,n),t=o(Dt,e,r);return Up(o(Hp,a,t))}),Jp=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=Ba(p(au,n,a,t));return V({o:i,bT:Le(n)},{o:i,bT:Le(a)},{o:i,bT:Le(t)})},Op=v(function(e,r){return{$:2,a:e,b:r}}),tu=Op({df:3,$7:0,dV:4}),qp=function(e){if(e.b){var r=e.a,n=e.b,a=tu(o(re,Jp,e)),t=p(Wp,eu,r,n);return C(Yl,t,e,a,0)}else return Ao},Ve=y(function(e,r,n){return V(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c5:i}}),ou=function(){var e=lr(1),r=lr(1),n=lr(1),a=o(K,-.5,e),t=o(K,-.5,r),i=o(K,-.5,n),c=p(me,i,t,a),l=o(K,.5,e),u=p(me,i,t,l),$=o(K,.5,r),s=p(me,i,$,a),d=p(me,i,$,l),m=o(K,.5,n),f=p(me,m,t,a),g=p(me,m,$,a),b=p(me,m,t,l),w=p(me,m,$,l);return Do(qp(h([p(Ve,c,g,f),p(Ve,c,s,g),p(Ve,u,b,w),p(Ve,u,w,d),p(Ve,f,g,w),p(Ve,f,w,b),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,b),p(Ve,c,b,u),p(Ve,s,w,g),p(Ve,s,d,w)])))}(),On={$:0},Yp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Zp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ba(p(au,u,l,c)),s={o:$,bT:Le(u)},d={o:$,bT:Le(l)},m={o:$,bT:Le(c)};return o(k,s,o(k,d,o(k,m,n)))}),Bo=function(e){var r=e;return r.D},Qp=R(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return te(p(e,t,i,c))}),At=4294967295>>>32-xn,Bt=Zu,Kp=y(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Bt,a,n);if(t.$){var $=t.a;return o(Bt,At&r,$)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),e3=function(e){return e>>>5<<5},r3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?q:J(e,e3(n))>-1?te(o(Bt,At&e,i)):te(p(Kp,a,e,t))}),Fo=function(e){var r=e;return r.ah},Ka=v(function(e,r){return o(r3,e,Fo(r))}),n3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(Qp,y(function(c,l,u){return V(c,l,u)}),o(Ka,a,e),o(Ka,t,e),o(Ka,i,e))};return o(mo,r,Bo(e))},a3=y(function(e,r,n){e:for(;;){var a=o(to,Fe,e),t=a.a,i=a.b;if(J(gt(t),Fe)<0)return o(Hc,!0,{z:r,l:n,p:t});var c=i,l=o(k,Gc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Vo=function(e){return e.b?p(a3,e,L,0):jc},t3=y(function(e,r,n){return e(r(n))}),o3=v(function(e,r){return!o(el,o(t3,bs,e),r)}),i3=v(function(e,r){return p(ar,v(function(n,a){return e(n)?o(k,n,a):a}),L,r)}),c3=function(e){var r=e.a;return r},iu=v(function(e,r){var n=c3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(o3,a,r)?{D:r,ah:e}:{D:o(i3,a,r),ah:e}}),l3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Nn=l3({df:1,$7:3,dV:4}),ta=v(function(e,r){var n=qr(r),a=qr(e);return z(V(a.fT,a.fX,a.c5),V(n.fT,n.fX,n.c5))}),Wi=p(Rn,0,0,0),et=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(vo,o(ta,e,r),t);if($.$){var d={o:Wi,bT:Le(r)},m={o:Wi,bT:Le(e)},f=u+1,g=u;return V(o(k,V(n,g,f),o(k,V(n,f,a),c)),o(k,d,o(k,m,l)),u+2)}else{var s=$.a;return V(o(k,V(n,s,a),c),l,u)}}),u3=_e(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,_=$,T=a+3,M=ye(et,s,m,f,b,r,ye(et,d,s,g,f,r,ye(et,m,d,b,g,r,t)));e=w,r=x,n=_,a=T,t=M;continue e}else{var G=t,j=G.a,E=G.b;return z(j,Be(E))}}),v3=_e(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(pn,o(ta,m,s),f,p(pn,o(ta,s,d),g,p(pn,o(ta,d,m),b,t))),x=o(k,V(b,g,f),a),_=e,T=$,M=n+3,G=x,j=w;e=_,r=T,n=M,a=G,t=j;continue e}else return V(a,t,n)}),Lr=y(function(e,r,n){var a=n3(n),t=p(ar,Zp(r),L,a),i=S(v3,r,a,0,L,wl),c=i.a,l=i.b,u=i.c,$=S(u3,r,l,a,0,V(c,L,u)),s=$.a,d=$.b,m=hl(d)?t:le(t,d);return p(Yp,e,o(iu,Vo(m),s),o(Nn,m,s))}),Ft=function(e){return{D:o(re,function(r){return V(3*r,3*r+1,3*r+2)},o(Yr,0,Br(e)-1)),ah:Vo(Ne(o(re,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},cu=function(e){switch(e.$){case 0:return On;case 1:var a=e.a,r=e.b,n=o(re,Ln,r);return p(Lr,a,kr,Ft(n));case 2:var a=e.a,r=e.b,n=o(re,Ln,r);return p(Lr,a,kr,Ft(n));case 3:var a=e.a,t=e.b;return p(Lr,a,kr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return On;case 9:return On;default:return On}},Hi=cu(ou),Fa=function(e){var r=e;return r.aK},lu={$:0},P=lu,be=v(function(e,r){return{$:1,a:e,b:r}}),$3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},f3=1029,s3=function(e){return{$:5,a:e}},uu=function(e){var r=e;return s3(r)},d3=uu(f3),m3=1028,p3=uu(m3),Pe=y(function(e,r,n){return r===1?e?o(k,d3,n):o(k,p3,n):n}),vu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rt=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return S(ne,p(Pe,l,a,d),vu,$3,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),Eo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},$u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},tr=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){return S(ne,p(Pe,l,a,d),$u,Eo,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),fu=v(function(e,r){return{$:3,a:e,b:r}}),b3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},su={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},g3=R(function(e,r,n,a){return o(fu,n,ee(function(t,i,c,l,u,$,s,d){return S(ne,d,su,b3,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),Ro={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Gn=function(e){var r=e;return r},Va=Cf,or=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return S(ne,p(Pe,u,t,m),$u,Ro,a,{aN:o(Va,Gn(r),e),b:l,c,d:s,e:i,f:$})}))}),h3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},_3=_e(function(e,r,n,a,t){return o(fu,a,ee(function(i,c,l,u,$,s,d,m){return S(ne,m,su,h3,t,{aN:o(Va,Gn(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),du={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},mu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),mu,du,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cp:e,b:c,c:i,d:$,e:t,f:u})}))}),pu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},bu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},w3=We(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,$,i,f),bu,pu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),gu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},y3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(be,u,ee(function(d,m,f,g,b,w,x,_){var T=x.a,M=x.b;return S(ne,p(Pe,g,s,_),bu,gu,$,{b4:e,b7:r,b8:i,b9:a,P:M,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cu:t,b:f,c:m,aW:c,d:w,cR:n,e:d,a$:l,f:b})}))}}}}}}}}}}},hu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Yn=We(function(e,r,n,a,t,i){return o(be,a,ee(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(Pe,$,i,f),mu,hu,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d,cQ:r,e:c,f:s})}))}),x3=function(e){return{$:0,a:e}},Xi=v(function(e,r){return{$:1,a:e,b:r}}),_n=v(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),S3=function(e){return C(an,tn(e),on(e),cn(e),1)},jo=C(an,0,0,0,0),oa=v(function(e,r){if(r.$){var a=r.a.C;return z(a,jo)}else{var n=r.a;return z(e,S3(n))}}),_u=v(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Xi,z(t,jo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Xi,o(oa,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,x3(a)}}),T3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=R(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),C3=R(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),L3=function(e){return o(Me,e,1)},Vt=o(Me,0,0),Wr=v(function(e,r){if(r.$){var a=r.a.C;return z(a,Vt)}else{var n=r.a;return z(e,L3(n))}}),wu=R(function(e,r,n,a){var t=C(C3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Zn,z(u,jo),o(Wr,u,r),o(Wr,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Zn,o(oa,u,e),z(u,Vt),o(Wr,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Zn,o(oa,u,e),o(Wr,u,r),z(u,Vt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Zn,o(oa,u,e),o(Wr,u,r),o(Wr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(T3,i,c,l)}}),P3={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},nt=_e(function(e,r,n,a,t){return o(be,n,ee(function(i,c,l,u,$,s,d,m){return S(ne,p(Pe,u,t,m),vu,P3,a,{b1:Gn(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),yu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},z3=R(function(e,r,n,a){return o(be,r,ee(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(Pe,l,a,d),yu,pu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),k3=Nt(function(e,r,n,a,t,i,c,l,u){return o(be,c,ee(function($,s,d,m,f,g,b,w){var x=b.a,_=b.b;return S(ne,p(Pe,m,u,w),yu,gu,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cu:t,b:d,c:s,aW:e,d:g,cR:n,e:$,a$:0,f})}))}),Pn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),M3=function(e){var r=e;return p(Pn,r.dR,r.dO,.5)},D3=function(e){var r=e;return p(Pn,r.dS,r.dP,.5)},A3=function(e){var r=e;return p(Pn,r.dT,r.dQ,.5)},B3=function(e){return p(me,M3(e),D3(e),A3(e))},H=function(e){var r=Vl(e),n=r.a,a=r.b,t=r.c;return{ey:Da(B3(e)),eS:n/2,eT:a/2,eU:t/2}},No=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(rt,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(rt,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(rt,l,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(tr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(tr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(g3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(nt,l,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(nt,l,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(nt,l,$,H(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(or,u,$,H(t),c,a);case 8:var t=r.a,c=r.c;return S(or,u,$,H(t),c,0);case 9:var t=r.a,c=r.c;return S(or,u,$,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(_3,u,$,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(_u,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(z3,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return ye(w3,b,x,_,H(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(qn,m,H(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,M=e.c,G=e.d,j=e.e,E=C(wu,T,M,G,j);if(E.$){var O=E.a,Q=O.a,ie=O.b,ve=E.b,oe=ve.a,de=ve.b,ze=E.c,Te=ze.a,mr=ze.b,pr=E.d,x=pr.a,_=pr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Uu(k3,Q,ie,oe,de,Te,mr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return y3(Q)(ie)(oe)(de)(Te)(mr)(x)(_)(H(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=E.a,W=E.b,B=E.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,W,B,H(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,W,B,H(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,W,B,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return ye(Yn,N,W,B,H(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),at=function(e){var r=e;return r.fT},tt=function(e){var r=e;return r.fX},ot=function(e){var r=e;return r.c5},F3=function(e){var r=e,n=ot(r.c6),a=tt(r.c6),t=at(r.c6),i=ot(r.c4),c=tt(r.c4),l=at(r.c4),u=ot(r.c3),$=tt(r.c3),s=at(r.c3);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},V3=function(e){var r=Da(jr(e)),n=Ge(Tr(e)),a=Ge(Sr(e)),t=Ge(xr(e));return{dp:F3(e),q:t.fT,r:t.fX,s:t.c5,t:a.fT,u:a.fX,v:a.c5,w:n.fT,x:n.fX,y:n.c5,H:r.fT,I:r.fX,J:r.c5,bX:1}},Hr=v(function(e,r){return{$:5,a:e,b:r}}),xu=v(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Pl,a,e);return o(Hr,i,t);case 1:return o(Hr,e,n);case 3:return o(Hr,e,n);case 2:return o(Hr,e,n);default:return o(Hr,e,n)}}),Su=v(function(e,r){return o(xu,V3(e),r)}),Ea=function(e){return{$:2,a:e}},E3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),R3=zf,j3=Pf,Ii=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=j3(a),g=f.fT,b=f.fX,w=f.c5,x=f.em,_=R3({em:x,fT:g*s,fX:b*d,c5:w*m});return Ta(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Et=v(function(e,r){switch(r.$){case 0:return lu;case 5:var n=r.a,a=r.b;return o(Hr,n,o(Et,e,a));case 1:var t=r.a,i=r.b;return o(be,o(E3,e,t),o(Ii,e,i));case 3:return r;case 2:var i=r.a;return Ea(o(Ii,e,i));default:var c=r.a;return jl(o(re,Et(e),c))}}),Go=v(function(e,r){var n=r;return o(Et,e,n)}),Wo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Tu=7683,Cu=7682,N3=p(Lo,{co:0,cN:0,c2:15},{a8:Se,bl:Kr,bt:Se,bu:Tu},{a8:Se,bl:Kr,bt:Se,bu:Cu}),G3=p(Lo,{co:0,cN:0,c2:15},{a8:Se,bl:Kr,bt:Se,bu:Cu},{a8:Se,bl:Kr,bt:Se,bu:Tu}),Ho=v(function(e,r){return e?o(k,G3,r):o(k,N3,r)}),W3={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},H3=function(e){if(e.$){var r=e.c;return te(ee(function(n,a,t,i,c,l,u,$){return S(ne,o(Ho,i,$),W3,Wo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},wa=function(e){var r=H3(e);if(r.$)return P;var n=r.a;return Ea(n)},X3=R(function(e,r,n,a){var t=o(No,n,ou),i=function(){var s=z(e,r);return s.a?s.b?jn(h([t,wa(Hi)])):t:s.b?wa(Hi):P}(),c=Fa(a),l=c.a,u=c.b,$=c.c;return o(Su,Aa(a),o(Go,V(l,u,$),i))}),I3=v(function(e,r){return C(X3,!0,!0,e,r)}),Rt=function(e){return{$:0,a:e}},Lu=v(function(e,r){return{$:0,a:e,b:r}}),U3=function(e){var r=so(e),n=r.cM,a=r.cc,t=r.b5;return p(Rn,n,a,t)},J3=function(e){return o(Lu,0,Rt(U3(e)))},Xo=function(e){var r=e;return r.k},wn=function(e){var r=e;return Fr(r)},O3=v(function(e,r){var n=r;return n/e}),Ui=function(e){var r=e;return{fT:Fr(r),fX:Qr(r)}},q3=v(function(e,r){var n=e.bT,a=e.o;return o(k,{o:Ba(a),bT:Le(n)},r)}),Y3=Sa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=cn(l.bT),s=on(l.bT),d=tn(l.bT),m=o(aa,e,d),f=o(er,r,d),g=o(aa,n,s),b=o(er,a,s),w=o(aa,t,$),x=o(er,i,$),_=u;e=m,r=f,n=g,a=b,t=w,i=x,c=_;continue e}else return Kl({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Pu=v(function(e,r){var n=cn(e.bT),a=on(e.bT),t=tn(e.bT);return Gt(Y3,t,t,a,a,n,n,r)}),Z3=function(e){var r=p(Mc,q3,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,Bo(e)),i=o(Pu,n,a);return C(Zl,i,e,t,0)}else return Ao},zu=ur({fT:0,fX:0,c5:-1}),Ji=v(function(e,r){var n=e,a=r,t=n.c4,i=t,c=n.c3,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c5:a.fT*l.c5+a.fX*i.c5}}),ya=function(e){var r=e;return Qr(r)},sn=function(e){var r=e;return r},jt=function(e){return Vr(2*Er*e)},Oi=Cl({cA:Ye,c3:_o,c4:Mo}),ku=function(){var e=72,r=o(O3,e,jt(1)),n=lr(1),a=sn(wo),t=sn(zu),i=lr(1),c=o(K,.5,i),l=p(me,ir,ir,c),u=o(K,-.5,i),$=p(me,ir,ir,u),s=function(f){var g=o(K,f,r),b=sn(o(Ji,Oi,Ui(g))),w=o(K,wn(g),n),x=o(K,ya(g),n),_=p(me,w,x,c),T=p(me,w,x,u),M=o(Cn,e,f+1),G=o(K,M,r),j=sn(o(Ji,Oi,Ui(G))),E=o(K,wn(G),n),N=o(K,ya(G),n),W=p(me,E,N,u),B=p(me,E,N,c);return h([V({o:t,bT:$},{o:t,bT:W},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:W},{o:j,bT:B}),V({o:b,bT:T},{o:j,bT:B},{o:b,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:B})])},d=o(re,s,o(Yr,0,e-1)),m=Ft(Ne(d));return Do(Z3(m))}(),qi=cu(ku),Mu=function(e){var r=e;return r.cA},Q3=function(e){var r=e,n=Z(r.c5),a=Z(r.fX),t=Z(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=Ur(r.c5*r.c5+r.fX*r.fX);return{fT:0,fX:-r.c5/i,c5:r.fX/i}}else{var i=Ur(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}else if(J(a,n)<1){var i=Ur(r.c5*r.c5+r.fT*r.fT);return{fT:r.c5/i,fX:0,c5:-r.fT/i}}else{var i=Ur(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c5:0}}},K3=function(e){var r=Q3(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c5-i.c5*a.fX,fX:i.c5*a.fT-i.fT*a.c5,c5:i.fT*a.fX-i.fX*a.fT};return z(r,c)},eb=function(e){var r=ho(e),n=K3(r),a=n.a,t=n.b;return fr({cA:Mu(e),c3:a,c4:t,c6:r})},Du=function(e){var r=e;return r.e9},Au=function(e){var r=e;return r.fr},rb=R(function(e,r,n,a){var t=eb(Xo(a)),i=o(No,n,ku),c=function(){var d=z(e,r);return d.a?d.b?jn(h([i,wa(qi)])):i:d.b?wa(qi):P}(),l=Au(a),u=l,$=Du(a),s=$;return o(Su,t,o(Go,V(u,u,s),c))}),nb=v(function(e,r){return C(rb,!0,!0,e,r)}),Yi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Zi={src:`
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
    `,attributes:{triangleVertex:"cY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},dn=function(e){var r=Ln(e),n=r.a,a=r.b,t=r.c,i=qr(n),c=qr(a),l=qr(t);return Ze({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c5,dG:c.c5,dH:l.c5,dI:0,dJ:0,dK:0,dL:0,dM:0})},Qn=tu(h([V({cY:0},{cY:1},{cY:2})])),ab=v(function(e,r){var n=eu(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(be,a,ee(function(_,T,M,G,j,E,N,W){return S(ne,p(Pe,G,0,W),Yi,Eo,Qn,{aw:t,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(be,a,ee(function(_,T,M,G,j,E,N,W){return S(ne,p(Pe,G,0,W),Yi,Ro,Qn,{aN:o(Va,Gn(c),i),b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(_u,l,f);if(u.$)return P;var $=u.a;return o(be,a,ee(function(_,T,M,G,j,E,N,W){var B=N.a,O=N.b;return S(ne,p(Pe,G,0,W),Zi,du,Qn,{P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,cp:$,b:M,c:T,d:E,e:_,bq:dn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(wu,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(be,a,ee(function(_,T,M,G,j,E,N,W){var B=N.a,O=N.b;return S(ne,p(Pe,G,0,W),Zi,hu,Qn,{b3:b,P:O,bd:B.bd,bK:B.bK,bL:B.bL,bM:B.bM,ct:x,b:M,c:T,d:E,cQ:w,e:_,bq:dn(r),f:j})}))}}),tb=function(){var e=h([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=h([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(Nn,e,r)}(),ob={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Qi=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,t,u),ob,Wo,tb,{b:a,c:n,d:c,e:r,bY:l,bq:dn(e),f:i})}))},ib=R(function(e,r,n,a){var t=o(ab,n,a),i=z(e,r);return i.a?i.b?jn(h([t,Qi(a)])):t:i.b?Qi(a):P}),cb=v(function(e,r){return C(ib,!0,!0,e,r)}),Io=function(e){var r=e;return r},lb=v(function(e,r){var n=Ar(r),a=Ar(e),t=Dr(r),i=Dr(e),c=Mr(r),l=Mr(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),ub=function(e){var r=Io(e),n=r.a,a=r.b;return o(lb,n,a)},Ki={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},vb=v(function(e,r){return{$:1,a:e,b:r}}),$b=vb({df:2,$7:0,dV:1}),ec=$b(h([z({dw:0},{dw:1})])),fb=v(function(e,r){var n=ub(r),a=H(n),t=Io(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(be,a,ee(function($,s,d,m,f,g,b,w){return S(ne,w,Ki,Eo,ec,{aw:l,du:Le(c),dv:Le(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(be,a,ee(function(s,d,m,f,g,b,w,x){return S(ne,x,Ki,Ro,ec,{aN:o(Va,Gn(u),l),du:Le(c),dv:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),sb=v(function(e,r){return o(fb,e,r)}),Ra=function(e){var r=e;return r.ey},ja=function(e){var r=e;return r.fr},Kn=function(e){return Vr(Er*(e/180))},rc=v(function(e,r){var n=e,a=r;return n/a}),db=_e(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(k,i,t);if(gr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),nc=v(function(e,r){return e<1?L:S(db,0,e,e,r,L)}),mb=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(k,{o:Ba(a),bT:Le(n),L:o(Me,c,l)},r)}),pb=function(e){var r=p(Mc,mb,L,Fo(e));if(r.b){var n=r.a,a=r.b,t=o(Nn,r,Bo(e)),i=o(Pu,n,a);return C(Ql,i,e,t,0)}else return Ao},Bu=v(function(e,r){var n=e,a=r,t=Fr(a);return{fT:t*Fr(n),fX:t*Qr(n),c5:Qr(a)}}),bb=function(){var e=lr(1),r=72,n=o(Yr,0,r-1),a=o(nc,r,o(Pn,ir,jt(1))),t=no(r/2),i=o(Yr,0,t-1),c=o(nc,t,o(Pn,Kn(90),Kn(-90))),l=Vo(Ne(o(re,function(s){return o(re,function(d){return{o:sn(o(Bu,s,d)),bT:p(me,o(K,wn(d)*wn(s),e),o(K,wn(d)*ya(s),e),o(K,ya(d),e)),L:z(o(rc,s,jt(1)),o(rc,o(hn,Kn(90),d),Kn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ne(o(re,function(s){return Ne(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return h([V(b,g,m),V(b,m,f)])},i))},n));return Do(pb(o(iu,l,$)))}(),xa=72,ea=2*xa,gb=v(function(e,r){e:for(;;){var n=ea+1,a=o(Cn,ea,2*e+3),t=o(Cn,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(k,V(l,c,t),o(k,V(c,a,t),o(k,V(c,i,a),o(k,V(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),hb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),_b=v(function(e,r){e:for(;;){var n=p(hb,0,2*Er,e/xa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(k,a,o(k,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),wb=function(){var e=o(_b,xa-1,h([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(gb,xa-1,L);return o(Nn,e,r)}(),yb={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ac=function(e){return Ea(ee(function(r,n,a,t,i,c,l,u){return S(ne,o(Ho,!0,u),yb,Wo,wb,{aw:p(Rn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},xb=function(e){var r=nu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c5,bX:1}},Sb=v(function(e,r){return o(xu,xb(e),r)}),Tb=R(function(e,r,n,a){var t=o(No,n,bb),i=function(){var u=z(e,r);return u.a?u.b?jn(h([t,ac()])):t:u.b?ac():P}(),c=ja(a),l=c;return o(Sb,o(Dt,Ye,Ra(a)),o(Go,V(l,l,l),i))}),Cb=v(function(e,r){return C(Tb,!0,!0,e,r)}),Lb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Fu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Pb=_e(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),zb=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Lu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Lb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Fu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Pb,n,a,t,i,c)}},kb=zb,Vu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return h([o(I3,t,r)]);case 1:var t=e.a,n=e.b;return h([o(cb,t,n)]);case 3:var t=e.a,a=e.b;return h([o(Cb,kb(t),a)]);case 2:var t=e.a,i=e.b;return h([o(nb,t,i)]);case 4:var c=e.a,l=e.b;return h([o(sb,J3(c),l)]);default:var u=e.a;return o(xo,Vu,u)}},Mb=function(e){return o(xo,Vu,e)},Db=v(function(e,r){return Fp({aI:Jm(e.es),ev:e.ev,aJ:Om(.5),ca:e.ca,aK:z(ki(Ue(e.cS.fR)),ki(Ue(e.cS.eW))),aP:Mb(r),fz:!0,fI:o(Bu,Vr(e.fH),Vr(e.fJ)),ei:yo})}),Na=v(function(e,r){return{$:0,a:e,b:r}}),it=v(function(e,r){var n=e,a=r;return J(a,n)>-1}),ct=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Ab=ur({fT:-1,fX:0,c5:0}),Bb=ur({fT:0,fX:-1,c5:0}),Fb=We(function(e,r,n,a,t,i){var c=o(it,n,i)?wo:zu,l=o(it,r,t)?Hl:Bb,u=o(it,e,a)?Ll:Ab,$=V(se(o(vr,e,a)),se(o(vr,r,t)),se(o(vr,n,i))),s=p(me,o(ct,e,a),o(ct,r,t),o(ct,n,i)),d=fr({cA:s,c3:u,c4:l,c6:c});return{er:d,aK:$}}),Vb=v(function(e,r){return ye(Fb,Mr(e),Dr(e),Ar(e),Mr(r),Dr(r),Ar(r))}),Eb=v(function(e,r){var n=r/2;return o(Na,e,o(Vb,p(kt,-n,-n,-n),p(kt,n,n,n)))}),Ga=function(e){return{$:5,a:e}},tc=function(e){return Ga(e)},lt=function(e){return p(Ul,0,1,e<=.04045?e/12.92:o(Fn,(e+.055)/1.055,2.4))},Rb=function(e){var r=so(e),n=r.cM,a=r.cc,t=r.b5;return p(Rn,lt(n),lt(a),lt(t))},jb=function(e){return p(Fu,0,Rt(Rb(e)),Rt(0))},Uo=v(function(e,r){return{$:2,a:e,b:r}}),Jo=v(function(e,r){return{$:4,a:e,b:r}}),Oo=v(function(e,r){return{$:3,a:e,b:r}}),qo=v(function(e,r){return{$:1,a:e,b:r}}),Nb=y(function(e,r,n){return{fT:e,fX:r,c5:n}}),Gb=v(function(e,r){return{er:o(Tl,e,Aa(r)),aK:Fa(r)}}),Wb=v(function(e,r){var n=r;return o(Nr,o(En,e,n.cA),n.eG)}),Hb=v(function(e,r){var n=r;return{k:o(Wb,e,n.k),e9:n.e9,fr:n.fr}}),Xb=function(e){return e},Yo=v(function(e,r){var n=Io(r),a=n.a,t=n.b;return Xb(z(e(a),e(t)))}),Ib=v(function(e,r){return o(Yo,En(e),r)}),Zo=v(function(e,r){return{ey:r,fr:se(e)}}),Ub=v(function(e,r){return o(Zo,ja(r),o(En,e,Ra(r)))}),Qo=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),Jb=v(function(e,r){return o(Qo,En(e),r)}),Eu=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Nb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Na,s,o(Gb,i,c));case 1:var s=r.a,l=r.b;return o(qo,s,o(Jb,i,l));case 3:var s=r.a,u=r.b;return o(Oo,s,o(Ub,i,u));case 2:var s=r.a,$=r.b;return o(Uo,s,o(Hb,i,$));case 4:var s=r.a,d=r.b;return o(Jo,s,o(Ib,i,d));default:var m=r.a;return Ga(o(re,Eu(V(n,a,t)),m))}}),Ob=function(e){return Eu(V(0,e,0))},ut=function(e){return e/255},qb=y(function(e,r,n){return C(Bn,ut(e),ut(r),ut(n),1)}),Yb=y(function(e,r,n){return{er:p(Sl,e,r,Aa(n)),aK:Fa(n)}}),Zb=v(function(e,r){var n=o(Vn,e,r),a=o(na,e,r);return function(t){var i=t;return o(Nr,n(i.cA),a(i.eG))}}),Qb=y(function(e,r,n){var a=n;return{k:p(Zb,e,r,a.k),e9:a.e9,fr:a.fr}}),Kb=y(function(e,r,n){return o(Yo,o(Vn,e,r),n)}),eg=y(function(e,r,n){return o(Zo,ja(n),p(Vn,e,r,Ra(n)))}),rg=y(function(e,r,n){return o(Qo,o(Vn,e,r),n)}),Ru=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Na,l,p(Yb,e,r,a));case 1:var l=n.a,t=n.b;return o(qo,l,p(rg,e,r,t));case 3:var l=n.a,i=n.b;return o(Oo,l,p(eg,e,r,i));case 2:var l=n.a,c=n.b;return o(Uo,l,p(Qb,e,r,c));case 4:var l=n.a,u=n.b;return o(Jo,l,p(Kb,e,r,u));default:var $=n.a;return Ga(o(re,o(Ru,e,r),$))}}),ng=o(Nr,Ye,Mo),ag=v(function(e,r){return p(Ru,ng,Vr(e),r)}),Wn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c5:a.c5+r*(t.c5-a.c5)}}),tg=y(function(e,r,n){var a=Aa(n),t=xr(a),i=Sr(a),c=Tr(a),l=p(Wn,e,r,jr(a)),u=r>=0?fr({cA:l,c3:t,c4:i,c6:c}):fr({cA:l,c3:$r(t),c4:$r(i),c6:$r(c)}),$=Fa(n),s=$.a,d=$.b,m=$.c,f=se(o(K,r,s)),g=se(o(K,r,d)),b=se(o(K,r,m));return{er:u,aK:V(f,g,b)}}),oc=function(e){return ho(Xo(e))},og=function(e){return Mu(Xo(e))},ig=y(function(e,r,n){var a=se(o(K,r,Au(n))),t=se(o(K,r,Du(n))),i=r>=0?oc(n):$r(oc(n)),c=p(Wn,e,r,og(n));return{k:o(Nr,c,i),e9:t,fr:a}}),cg=y(function(e,r,n){return o(Yo,o(Wn,e,r),n)}),lg=y(function(e,r,n){return o(Zo,o(K,Z(r),ja(n)),p(Wn,e,r,Ra(n)))}),ug=y(function(e,r,n){return o(Qo,o(Wn,e,r),n)}),ju=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Na,c,p(tg,Ye,e,n));case 1:var c=r.a,a=r.b;return o(qo,c,p(ug,Ye,e,a));case 3:var c=r.a,t=r.b;return o(Oo,c,p(lg,Ye,e,t));case 2:var c=r.a,i=r.b;return o(Uo,c,p(ig,Ye,e,i));case 4:var c=r.a,l=r.b;return o(Jo,c,p(cg,Ye,e,l));default:var u=r.a;return Ga(o(re,ju(e),u))}}),vg=v(function(e,r){return(r-Wc(r/e)*e)/e}),$g=v(function(e,r){return 360*o(vg,e,r)}),fg=C(Bn,255/255,255/255,255/255,1),Nu=v(function(e,r){var n=o(Cn,2,r)?fg:p(qb,17,147,216),a=zt(o($g,8,e.db))/4,t=.707/Fr(Er/4-a);return tc(r?h([o(Eb,jb(n),1),o(Ob,.3,o(ag,a,o(ju,t,o(Nu,e,r-1))))]):L)}),sg=function(e){return o(Nu,e,20)},dg=v(function(e,r){return o(Db,{es:C(dl,0,0,0,.7),ev:Um(e),ca:e.ca,cS:e.cS,fH:zt(90),fJ:-zt(180)},h([sg(e)]))}),mg=C(_m,dg,Pm,Lm,wm);const pg={Main:{init:mg(o(A,function(e){return ke({e1:e})},o(D,"inputs",o(A,function(e){return o(A,function(r){return o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return ke({db:c,ca:i,eJ:t,e7:a,fp:n,cS:r,fQ:e})},o(D,"clock",$e))},o(D,"devicePixelRatio",$e))},o(D,"dt",$e))},o(D,"keyboard",o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return o(A,function(s){return o(A,function(d){return ke({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(D,"alt",Y))},o(D,"control",Y))},o(D,"down",Y))},o(D,"downs",da(Tn)))},o(D,"left",Y))},o(D,"pressedKeys",da(Tn)))},o(D,"right",Y))},o(D,"shift",Y))},o(D,"up",Y))))},o(D,"pointer",o(A,function(n){return o(A,function(a){return o(A,function(t){return o(A,function(i){return o(A,function(c){return o(A,function(l){return o(A,function(u){return o(A,function($){return ke({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(D,"down",Y))},o(D,"isDown",Y))},o(D,"move",Y))},o(D,"rightDown",Y))},o(D,"rightUp",Y))},o(D,"up",Y))},o(D,"x",$e))},o(D,"y",$e))))},o(D,"screen",o(A,function(r){return o(A,function(n){return ke({eW:n,fR:r})},o(D,"height",$e))},o(D,"width",$e))))},o(D,"wheel",o(A,function(e){return o(A,function(r){return ke({eD:r,eE:e})},o(D,"deltaX",$e))},o(D,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},bg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),$(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},gg=()=>{vt("pointerdown"),vt("wheel"),vt("keydown")},vt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},hg=pg.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});gg();bg(hg);
