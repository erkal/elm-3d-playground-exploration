const Qu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Qu();function Lr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Lr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Lr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return Lr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function be(e){return Lr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return Lr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function za(e){return Lr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Lr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ht(e){return Lr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Ut(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function Ta(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Ku(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var ev=[];function rv(e){return e.length}var nv=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),av=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),tv=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var ov=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+iv()),r});function iv(e){return"<internals>"}function nn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Pr(e,r){for(var n,a=[],t=st(e,r,0,a);t&&(n=a.pop());t=st(n.a,n.b,0,a));return t}function st(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&nn(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=hi(e),r=hi(r));for(var t in e)if(!st(e[t],r[t],n+1,a))return!1;return!0}v(Pr);v(function(e,r){return!Pr(e,r)});function q(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=q(e.a,r.a))||(n=q(e.b,r.b))?n:q(e.c,r.c);for(;e.b&&r.b&&!(n=q(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return q(e,r)<0});v(function(e,r){return q(e,r)<1});v(function(e,r){return q(e,r)>0});v(function(e,r){return q(e,r)>=0});var cv=v(function(e,r){var n=q(e,r);return n<0?Rc:n?qf:Vc}),Mn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function oe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=lr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=lr(e.a,r);return n}var P={$:0};function lr(e,r){return{$:1,a:e,b:r}}var lv=v(lr);function b(e){for(var r=P,n=e.length;n--;)r=lr(e[n],r);return r}function Ma(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var uv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});be(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return b(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(c)});v(function(e,r){return b(Ma(r).sort(function(n,a){return q(e(n),e(a))}))});v(function(e,r){return b(Ma(r).sort(function(n,a){var t=o(e,n,a);return t===Vc?0:t===Rc?-1:1}))});var vv=v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var $v=v(Math.pow);v(function(e,r){return r%e});var fv=v(function(e,r){var n=r%e;return e===0?nn(11):n>0&&e<0||n<0&&e>0?n+e:n}),sv=Math.PI,dv=Math.cos,mv=Math.sin,pv=Math.tan,bv=Math.atan;v(Math.atan2);function gv(e){return e}function hv(e){return e===1/0||e===-1/0}var _v=Math.ceil,wv=Math.floor,yv=Math.round,xv=Math.sqrt,oi=Math.log,Sv=isNaN;function Cv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Pv=v(function(e,r){return e+r});function kv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:re(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}v(function(e,r){return e+r});function Lv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function zv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Tv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Mv=v(function(e,r){return r.split(e)}),Dv=v(function(e,r){return r.join(e)}),Av=y(function(e,r,n){return n.slice(e,r)});function Bv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Fv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Vv=v(function(e,r){return r.indexOf(e)>-1}),Rv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ev=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function vc(e){return e+""}function jv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:re(n==45?-r:r)}function Nv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?re(r):Y}function Wv(e){return Ma(e).join("")}function Gv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Iv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Hv(e){return{$:0,a:e}}function Ot(e){return{$:2,b:e}}var Uv=Ot(function(e){return typeof e=="boolean"?ue(e):nr("a BOOL",e)}),Ov=Ot(function(e){return typeof e=="number"?ue(e):nr("a FLOAT",e)}),Jv=Ot(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):nr("a STRING",e)});function qv(e){return{$:3,b:e}}var Yv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function zr(e,r){return{$:9,f:e,g:r}}var Zv=v(function(e,r){return{$:10,b:r,h:e}}),Xv=v(function(e,r){return zr(e,[r])}),Qv=y(function(e,r,n){return zr(e,[r,n])});F(function(e,r,n,a){return zr(e,[r,n,a])});be(function(e,r,n,a,t){return zr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return zr(e,[r,n,a,t,i])});za(function(e,r,n,a,t,i,c){return zr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return zr(e,[r,n,a,t,i,c,l])});Ht(function(e,r,n,a,t,i,c,l,u){return zr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ie(e,n)}catch(a){return ye(o(to,"This is not valid JSON! "+a.message,r))}});var $c=v(function(e,r){return Ie(e,r)});function Ie(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):nr("null",r);case 3:return Wn(r)?ii(e.b,r,b):nr("a LIST",r);case 4:return Wn(r)?ii(e.b,r,Kv):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var $=Ie(e.b,r[n]);return Qe($)?$:ye(o(_i,n,$.a));case 7:var a=e.e;if(!Wn(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ie(e.b,r[a]);return Qe($)?$:ye(o(Ec,a,$.a));case 8:if(typeof r!="object"||r===null||Wn(r))return nr("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var $=Ie(e.b,r[i]);if(!Qe($))return ye(o(_i,i,$.a));t=lr(z(i,$.a),t)}return ue(Me(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ie(l[u],r);if(!Qe($))return $;c=c($.a)}return ue(c);case 10:var $=Ie(e.b,r);return Qe($)?Ie(e.h($.a),r):$;case 11:for(var s=P,d=e.g;d.b;d=d.b){var $=Ie(d.a,r);if(Qe($))return $;s=lr($.a,s)}return ye(Yf(Me(s)));case 1:return ye(o(to,e.a,r));case 0:return ue(e.a)}}function ii(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ie(e,r[i]);if(!Qe(c))return ye(o(Ec,i,c.a));t[i]=c.a}return ue(n(t))}function Wn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Kv(e){return o(ds,e.length,function(r){return e[r]})}function nr(e,r){return ye(o(to,"Expecting "+e,r))}function Or(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Or(e.b,r.b);case 6:return e.d===r.d&&Or(e.b,r.b);case 7:return e.e===r.e&&Or(e.b,r.b);case 9:return e.f===r.f&&ci(e.g,r.g);case 10:return e.h===r.h&&Or(e.b,r.b);case 11:return ci(e.g,r.g)}}function ci(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Or(e[a],r[a]))return!1;return!0}var e$=v(function(e,r){return JSON.stringify(r,null,e)+""});function fc(e){return e}y(function(e,r,n){return n[e]=r,n});function Vr(e){return{$:0,a:e}}function r$(e){return{$:1,a:e}}function hr(e){return{$:2,b:e,c:null}}var dt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function n$(e){return{$:5,b:e}}var a$=0;function Jt(e){var r={$:0,e:a$++,f:e,g:null,h:[]};return qt(r),r}function sc(e){return hr(function(r){r(Vr(Jt(e)))})}function dc(e,r){e.h.push(r),qt(e)}var t$=v(function(e,r){return hr(function(n){dc(e,r),n(Vr(Mn))})}),Ua=!1,li=[];function qt(e){if(li.push(e),!Ua){for(Ua=!0;e=li.shift();)o$(e);Ua=!1}}function o$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,qt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return Yt(r,a,e.fi,e.f0,e.fV,function(){return function(){}})});function Yt(e,r,n,a,t,i){var c=o($c,e,r?r.flags:void 0);Qe(c)||nn(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=i$(l,m);function m(f,h){var g=o(a,f,$);s($=g.a,h),vi(l,g.b,t($))}return vi(l,u.b,t($)),d?{ports:d}:{}}var or={};function i$(e,r){var n;for(var a in or){var t=or[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=l$(t,r)}return n}function c$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function l$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(dt,l,n$(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Jt(o(dt,l,e.b))}var u$=v(function(e,r){return hr(function(n){e.g(r),n(Vr(Mn))})});v(function(e,r){return o(t$,e.h,{$:0,a:r})});function mc(e){return function(r){return{$:1,k:e,l:r}}}function v$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ui=[],Oa=!1;function vi(e,r,n){if(ui.push({p:e,q:r,r:n}),!Oa){Oa=!0;for(var a;a=ui.shift();)$$(a.p,a.q,a.r);Oa=!1}}function $$(e,r,n){var a={};ia(!0,r,a,null),ia(!1,n,a,null);for(var t in e)dc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ia(e,r,n,a){switch(r.$){case 1:var t=r.k,i=f$(e,t,a,r.l);n[t]=s$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ia(e,c.a,n,a);return;case 3:ia(e,r.o,n,{s:r.n,t:a});return}}function f$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?or[r].e:or[r].f;return o(i,t,a)}function s$(e,r,n){return n=n||{i:P,j:P},e?n.i=lr(r,n.i):n.j=lr(r,n.j),n}function d$(e){or[e]&&nn(3)}v(function(e,r){return r});function m$(e,r){return d$(e),or[e]={f:p$,u:r,a:b$},mc(e)}var p$=v(function(e,r){return function(n){return e(r(n))}});function b$(e,r){var n=P,a=or[e].u,t=Vr(null);or[e].b=t,or[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o($c,a,c);Qe(l)||nn(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ca,dr=typeof document!="undefined"?document:{};function Zt(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(yr(e,function(){}),t),{}});function mt(e){return{$:0,a:e}}var pc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Xt(n),e:t,f:e,b:i}})}),Rr=pc(void 0),g$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Xt(n),e:t,f:e,b:i}})}),h$=g$(void 0);function _$(e,r,n,a){return{$:3,d:Xt(e),g:r,h:n,i:a}}var w$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Tr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Tr([e,r],function(){return e(r)})});y(function(e,r,n){return Tr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return Tr([e,r,n,a],function(){return p(e,r,n,a)})});be(function(e,r,n,a,t){return Tr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return Tr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});za(function(e,r,n,a,t,i,c){return Tr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Tr([e,r,n,a,t,i,c,l],function(){return Ut(e,r,n,a,t,i,c,l)})});Ht(function(e,r,n,a,t,i,c,l,u){return Tr([e,r,n,a,t,i,c,l,u],function(){return Ta(e,r,n,a,t,i,c,l,u)})});var bc=v(function(e,r){return{$:"a0",n:e,o:r}}),y$=v(function(e,r){return{$:"a1",n:e,o:r}}),gc=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}}),x$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function S$(e){return e=="script"?"p":e}function C$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(bc,r.n,P$(e,r.o)):r});function P$(e,r){var n=uo(r);return{$:r.$,a:n?p(ms,n<3?k$:L$,Ae(e),r.a):o($a,e,r.a)}}var k$=v(function(e,r){return z(e(r.a),r.b)}),L$=v(function(e,r){return{an:e(r.an),c3:r.c3,cT:r.cT}});function Xt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?$i(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?$i(c,t,i):c[t]=i}return r}function $i(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function yr(e,r){var n=e.$;if(n===5)return yr(e.k||(e.k=e.m()),r);if(n===0)return dr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=yr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return pt(c,r,e.d),c}var c=e.f?dr.createElementNS(e.f,e.c):dr.createElement(e.c);ca&&e.c=="a"&&c.addEventListener("click",ca(c)),pt(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Zt(c,yr(n===1?l[u]:l[u].b,r));return c}function pt(e,r,n){for(var a in n){var t=n[a];a==="a1"?z$(e,t):a==="a0"?D$(e,r,t):a==="a3"?T$(e,t):a==="a4"?M$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function z$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function T$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function M$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function D$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=A$(r,i),e.addEventListener(t,c,Qt&&{passive:uo(i)<2}),a[t]=c}}var Qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Qt=!0}}))}catch{}function A$(e,r){function n(a){var t=n.q,i=Ie(t.a,a);if(!!Qe(i)){for(var c=uo(t),l=i.a,u=c?c<3?l.a:l.an:l,$=c==1?l.b:c==3&&l.c3,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cT)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function B$(e,r){return e.$==r.$&&Or(e.a,r.a)}function hc(e,r){var n=[];return Ke(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ke(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=G$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ke(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof d!="object"?d=[d,h.j]:d.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!F$(d,m):d!==m)&&_e(n,2,a,m),Ke(h,g,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:fi(e,r,n,a,V$);return;case 2:fi(e,r,n,a,R$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Kt(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function F$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function fi(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Kt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Kt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Kt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&B$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function V$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ke(s,i[$],n,++a),a+=s.b||0}}function R$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var h=l[d],g=u[m],w=h.a,x=g.a,_=h.b,k=g.b,A=void 0,G=void 0;if(w===x){f++,Ke(_,k,t,f),f+=_.b||0,d++,m++;continue}var j=l[d+1],E=u[m+1];if(j){var O=j.a,I=j.b;G=x===O}if(E){var R=E.a,Q=E.b;A=w===R}if(A&&G){f++,Ke(_,Q,t,f),fn(i,t,w,k,m,c),f+=_.b||0,f++,sn(i,t,w,I,f),f+=I.b||0,d+=2,m+=2;continue}if(A){f++,fn(i,t,x,k,m,c),Ke(_,Q,t,f),f+=_.b||0,d+=1,m+=2;continue}if(G){f++,sn(i,t,w,_,f),f+=_.b||0,f++,Ke(I,k,t,f),f+=I.b||0,d+=2,m+=1;continue}if(j&&O===R){f++,sn(i,t,w,_,f),fn(i,t,x,k,m,c),f+=_.b||0,f++,Ke(I,Q,t,f),f+=I.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var h=l[d],_=h.b;sn(i,t,h.a,_,f),f+=_.b||0,d++}for(;m<s;){var ae=ae||[],g=u[m];fn(i,t,g.a,g.b,void 0,ae),m++}(t.length>0||c.length>0||ae)&&_e(n,8,a,{w:t,x:c,y:ae})}var _c="_elmW6BL";function fn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ke(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}fn(e,r,n+_c,a,t,i)}function sn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ke(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}sn(e,r,n+_c,a,t)}function wc(e,r,n,a){dn(e,r,n,0,0,r.b,a)}function dn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)wc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&dn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&dn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return dn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,w=0;w<h.length;w++){t++;var x=m===1?h[w]:h[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=dn(g[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function yc(e,r,n,a){return n.length===0?e:(wc(e,r,n,a),la(e,n))}function la(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=E$(t,a);t===e&&(e=i)}return e}function E$(e,r){switch(r.$){case 0:return j$(e,r.s,r.u);case 4:return pt(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return la(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(yr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=la(e,i.w),e;case 8:return N$(e,r);case 5:return r.s(e);default:nn(10)}}function j$(e,r,n){var a=e.parentNode,t=yr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function N$(e,r){var n=r.s,a=W$(n.y,r);e=la(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:yr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Zt(e,a),e}function W$(e,r){if(!!e){for(var n=dr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Zt(n,i.c===2?i.s:yr(i.z,r.u))}return n}}function eo(e){if(e.nodeType===3)return mt(e.textContent);if(e.nodeType!==1)return mt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=lr(o(Mr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,$=e.childNodes,a=$.length;a--;)u=lr(eo($[a]),u);return p(Rr,l,r,u)}function G$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var I$=F(function(e,r,n,a){return Yt(r,a,e.fi,e.f0,e.fV,function(t,i){var c=e.f2,l=a.node,u=eo(l);return xc(i,function($){var s=c($),d=hc(u,s);l=yc(l,u,d,t),u=s})})});F(function(e,r,n,a){return Yt(r,a,e.fi,e.f0,e.fV,function(t,i){var c=e.c0&&e.c0(t),l=e.f2,u=dr.title,$=dr.body,s=eo($);return xc(i,function(d){ca=c;var m=l(d),f=Rr("body")(P)(m.eM),h=hc(s,f);$=yc($,s,h,t),s=f,ca=0,u!==m.fZ&&(dr.title=u=m.fZ)})})});var ua=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function xc(e,r){r(e);var n=0;function a(){n=n===1?0:(ua(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ua(a),n=2)}}v(function(e,r){return o(fo,vo,hr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(fo,vo,hr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(fo,vo,hr(function(){history.replaceState({},"",r),e()}))});var H$={addEventListener:function(){},removeEventListener:function(){}},U$=typeof window!="undefined"?window:H$;y(function(e,r,n){return sc(hr(function(a){function t(i){Jt(n(i))}return e.addEventListener(r,t,Qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ie(e,r);return Qe(n)?re(n.a):Y});function Sc(e,r){return hr(function(n){ua(function(){var a=document.getElementById(e);n(a?Vr(r(a)):r$(bs(e)))})})}function O$(e){return hr(function(r){ua(function(){r(Vr(e()))})})}v(function(e,r){return Sc(r,function(n){return n[e](),Mn})});v(function(e,r){return O$(function(){return U$.scroll(e,r),Mn})});y(function(e,r,n){return Sc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Mn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var J$=v(function(e,r){var n="g";e.fv&&(n+="m"),e.eO&&(n+="i");try{return re(new RegExp(r,n))}catch{return Y}});v(function(e,r){return r.match(e)!==null});var q$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?re(d):Y}a.push(C(bl,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?re($):Y}return n(C(bl,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var Y$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ro=new Float64Array(3),si=new Float64Array(3),di=new Float64Array(3),X$=y(function(e,r,n){return new Float64Array([e,r,n])}),Q$=function(e){return e[0]},K$=function(e){return e[1]},ef=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var rf=function(e){return new Float64Array([e.f6,e.ga,e.de])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Cc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Cc);function Pc(e,r,n){return n===void 0&&(n=new Float64Array(3)),va(Cc(e,r,n),n)}v(Pc);function kc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function va(e,r){r===void 0&&(r=new Float64Array(3));var n=1/kc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var nf=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),mn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(mn);function bt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(bt);v(function(e,r){var n,a=ro,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=mn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(mn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(mn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(mn(r,a)+e[14])/n,t});var af=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var tf=function(e){return{f6:e[0],ga:e[1],de:e[2],eE:e[3]}},of=function(e){return new Float64Array([e.f6,e.ga,e.de,e.eE])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/cf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function cf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var lf=new Float64Array(16),uf=new Float64Array(16),vf=function(e){var r=new Float64Array(16);return r[0]=e.dM,r[1]=e.dQ,r[2]=e.dU,r[3]=e.dY,r[4]=e.dN,r[5]=e.dR,r[6]=e.dV,r[7]=e.dZ,r[8]=e.dO,r[9]=e.dS,r[10]=e.dW,r[11]=e.d_,r[12]=e.dP,r[13]=e.dT,r[14]=e.dX,r[15]=e.d$,r},$f=function(e){return{dM:e[0],dQ:e[1],dU:e[2],dY:e[3],dN:e[4],dR:e[5],dV:e[6],dZ:e[7],dO:e[8],dS:e[9],dW:e[10],d_:e[11],dP:e[12],dT:e[13],dX:e[14],d$:e[15]}};function Lc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(Lc);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Lc(c,l,i,t,n,a)});function zc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(zc);F(function(e,r,n,a){return zc(e,r,n,a,-1,1)});function Tc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],h=e[11],g=e[12],w=e[13],x=e[14],_=e[15],k=r[0],A=r[1],G=r[2],j=r[3],E=r[4],O=r[5],I=r[6],R=r[7],Q=r[8],ae=r[9],Se=r[10],Ce=r[11],ge=r[12],he=r[13],Ze=r[14],Xe=r[15];return n[0]=a*k+l*A+d*G+g*j,n[1]=t*k+u*A+m*G+w*j,n[2]=i*k+$*A+f*G+x*j,n[3]=c*k+s*A+h*G+_*j,n[4]=a*E+l*O+d*I+g*R,n[5]=t*E+u*O+m*I+w*R,n[6]=i*E+$*O+f*I+x*R,n[7]=c*E+s*O+h*I+_*R,n[8]=a*Q+l*ae+d*Se+g*Ce,n[9]=t*Q+u*ae+m*Se+w*Ce,n[10]=i*Q+$*ae+f*Se+x*Ce,n[11]=c*Q+s*ae+h*Se+_*Ce,n[12]=a*ge+l*he+d*Ze+g*Xe,n[13]=t*ge+u*he+m*Ze+w*Xe,n[14]=i*ge+$*he+f*Ze+x*Xe,n[15]=c*ge+s*he+h*Ze+_*Xe,n}v(Tc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],h=e[14],g=r[0],w=r[1],x=r[2],_=r[4],k=r[5],A=r[6],G=r[8],j=r[9],E=r[10],O=r[12],I=r[13],R=r[14];return n[0]=a*g+c*w+$*x,n[1]=t*g+l*w+s*x,n[2]=i*g+u*w+d*x,n[3]=0,n[4]=a*_+c*k+$*A,n[5]=t*_+l*k+s*A,n[6]=i*_+u*k+d*A,n[7]=0,n[8]=a*G+c*j+$*E,n[9]=t*G+l*j+s*E,n[10]=i*G+u*j+d*E,n[11]=0,n[12]=a*O+c*I+$*R+m,n[13]=t*O+l*I+s*R+f,n[14]=i*O+u*I+d*R+h,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=va(r,ro);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/kc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,h=i*c*$,g=i*l*$,w=c*l*$,x=i*i*$+u,_=h+f,k=g-m,A=h-f,G=c*c*$+u,j=w+d,E=g+m,O=w-d,I=l*l*$+u,R=n[0],Q=n[1],ae=n[2],Se=n[3],Ce=n[4],ge=n[5],he=n[6],Ze=n[7],Xe=n[8],Wr=n[9],Gr=n[10],Ha=n[11],qu=n[12],Yu=n[13],Zu=n[14],Xu=n[15];return a[0]=R*x+Ce*_+Xe*k,a[1]=Q*x+ge*_+Wr*k,a[2]=ae*x+he*_+Gr*k,a[3]=Se*x+Ze*_+Ha*k,a[4]=R*A+Ce*G+Xe*j,a[5]=Q*A+ge*G+Wr*j,a[6]=ae*A+he*G+Gr*j,a[7]=Se*A+Ze*G+Ha*j,a[8]=R*E+Ce*O+Xe*I,a[9]=Q*E+ge*O+Wr*I,a[10]=ae*E+he*O+Gr*I,a[11]=Se*E+Ze*O+Ha*I,a[12]=qu,a[13]=Yu,a[14]=Zu,a[15]=Xu,a});function ff(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(ff);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function sf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(sf);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],h=a[9],g=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=h,t[10]=g,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+d*r+g*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],h=r[8],g=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=h,n[9]=g,n[10]=w,n[11]=x,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+d*t+g*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Pc(e,r,ro),t=va(bt(n,a,si),si),i=va(bt(a,t,di),di),c=lf,l=uf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Tc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var mi=0;function Sn(e,r){for(;r.b;r=r.b)e(r.a)}function no(e){for(var r=0;e.b;e=e.b)r++;return r}var df=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},mf=be(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),pf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),bf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),gf=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),hf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),_f=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),wf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),yf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),xf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Sf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Cf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Pf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},kf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Mc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Dc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Lf=function(e){e.gl.disable(e.gl.CULL_FACE)},zf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Tf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Mf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},pi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Df=[Cf,Pf,kf,Mc,Dc,Lf,zf,Tf,Mf];function bi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Af(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Ac(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Bf(e,r,n,a){for(var t=n.a.dq,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,w,x){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?w[x]:w[x][_];else i.forEach(function(k){for(_=0;_<h;_++)f[g++]=h===1?w[k][x]:w[k][x][_]})}var u=Ac(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(no(n.b)*s);Sn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Ff(e,r){if(r.a.dA>0){var n=e.createBuffer(),a=Vf(r.c,r.a.dA);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dq*no(r.b),indexBuffer:null,buffers:{}}}function Vf(e,r){var n=new Uint32Array(no(e)*r),a=0,t;return Sn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function gi(e,r){return e+"#"+r}var Bc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Mc(n),Dc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=gi(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=mi++,$||($=bi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=mi++,s||(s=bi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=Af(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Rf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),h=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=gi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Ef(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Ff(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Bf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var w=Ac(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,k=0;k<w.arraySize;k++)a.enableVertexAttribArray(h+k),a.vertexAttribPointer(h+k,w.size,w.baseType,!1,_,x*k)}for(n.toggle=!n.toggle,Sn(Jp(n),i.a),u=0;u<pi.length;u++){var A=n[pi[u]];A.toggle!==n.toggle&&A.enabled&&(Df[u](n),A.enabled=!1,A.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.d8,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d8,0,g.numIndices)}}return Sn(t,e.g),r});function Rf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,w=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(w,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(w,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var k=l.textures.get(_);k||(k=_.eV(e),l.textures.set(_,k)),e.bindTexture(e.TEXTURE_2D,k),i[g]!==_&&(e.uniform1i(w,x),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(w,_),i[g]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Ef(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var jf=y(function(e,r,n){return _$(r,{g:n,f:{},h:e},Of,Jf)}),Nf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Wf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Gf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),If=v(function(e,r){e.contextAttributes.antialias=!0}),Hf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Uf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Of(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sn(function(t){return o(Op,r,t)},e.h);var n=dr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),df(function(){return o(Bc,e,n)})):(n=dr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Jf(e,r){return r.f=e.f,Bc(r)}var M=lv,Gn=ov,Fc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Gn,e,l,$)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),ao=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(ao,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),hi=function(e){return p(ao,y(function(r,n,a){return o(M,z(r,n),a)}),P,e)},Vc=1,qf=2,Rc=0,ye=function(e){return{$:1,a:e}},to=v(function(e,r){return{$:3,a:e,b:r}}),_i=v(function(e,r){return{$:0,a:e,b:r}}),Ec=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Yf=function(e){return{$:2,a:e}},Zf=vv,re=function(e){return{$:0,a:e}},Y={$:1},Xf=Fv,Qf=e$,Fe=vc,Ar=v(function(e,r){return o(Dv,e,Ma(r))}),oo=v(function(e,r){return b(o(Mv,e,r))}),jc=function(e){return o(Ar,`
    `,o(oo,`
`,e))},Dn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),kr=function(e){return p(Dn,v(function(r,n){return n+1}),0,e)},Kf=uv,es=y(function(e,r,n){e:for(;;)if(q(e,r)<1){var a=e,t=r-1,i=o(M,r,n);e=a,r=t,n=i;continue e}else return n}),Fr=v(function(e,r){return p(es,e,r,P)}),Nc=v(function(e,r){return p(Kf,e,o(Fr,0,kr(r)-1),r)}),ir=Gv,Wc=function(e){var r=ir(e);return 97<=r&&r<=122},Gc=function(e){var r=ir(e);return r<=90&&65<=r},rs=function(e){return Wc(e)||Gc(e)},ns=function(e){var r=ir(e);return r<=57&&48<=r},as=function(e){return Wc(e)||Gc(e)||ns(e)},Me=function(e){return p(Dn,M,P,e)},an=kv,ts=v(function(e,r){return`

(`+(Fe(e+1)+(") "+jc(os(r))))}),os=function(e){return o(is,e,P)},is=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=an(n);if(g.$===1)return!1;var w=g.a,x=w.a,_=w.b;return rs(x)&&o(Xf,as,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(M,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Fe(i)+"]"),u=c,$=o(M,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Ar,"",Me(r)):"Json.Decode.oneOf"}(),h=d+(" failed in the following "+(Fe(kr(s))+" ways:"));return o(Ar,`

`,o(M,h,o(Nc,ts,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Ar,"",Me(r)):"!"}();default:var m=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Ar,"",Me(r))+`:

    `):`Problem with the given value:

`}();return h+(jc(o(Qf,4,f))+(`

`+m))}}),Ve=32,gt=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ht=ev,io=_v,co=v(function(e,r){return oi(r)/oi(e)}),cs=gv,Cn=io(o(co,2,Ve)),Ic=C(gt,0,Cn,ht,ht),Hc=nv,Uc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var ls=wv,_t=rv,De=v(function(e,r){return q(e,r)>0?e:r}),us=function(e){return{$:0,a:e}},lo=av,vs=v(function(e,r){e:for(;;){var n=o(lo,Ve,e),a=n.a,t=n.b,i=o(M,us(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Me(i)}}),$s=function(e){var r=e.a;return r},fs=v(function(e,r){e:for(;;){var n=io(r/Ve);if(n===1)return o(lo,Ve,e).a;var a=o(vs,e,P),t=n;e=a,r=t;continue e}}),Oc=v(function(e,r){if(r.l){var n=r.l*Ve,a=ls(o(co,Ve,n-1)),t=e?Me(r.y):r.y,i=o(fs,t,r.l);return C(gt,_t(r.o)+n,o(De,5,a*Cn),i,r.o)}else return C(gt,_t(r.o),Cn,ht,r.o)}),ss=be(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Oc,!1,{y:a,l:n/Ve|0,o:t});var i=Uc(p(Hc,Ve,r,e)),c=e,l=r-Ve,u=n,$=o(M,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),ds=v(function(e,r){if(e<=0)return Ic;var n=e%Ve,a=p(Hc,n,e-n,r),t=e-n-Ve;return S(ss,r,t,e,P,a)}),Qe=function(e){return!e.$},D=Zv,Z=Uv,T=Yv,ve=Ov,$a=Xv,ms=Qv,Ae=Hv,uo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},U=Rr("div"),ps=function(e){return{$:2,a:e}},Jc=v(function(e,r){return e}),qc=v(function(e,r){return{eS:r.eS,eT:e,ci:r.ci,dp:r.dp,dE:r.dE,bn:r.bn,b3:r.b3,f3:r.f3}}),mr=function(e){return e},bs=mr,wi=qe(function(e,r,n,a,t,i){return{dw:i,dy:r,ec:a,eg:n,ej:e,ek:t}}),gs=Vv,Br=Lv,Jr=Av,An=v(function(e,r){return e<1?r:p(Jr,e,Br(r),r)}),Da=Ev,Aa=function(e){return e===""},Ba=v(function(e,r){return e<1?"":p(Jr,0,e,r)}),Yc=jv,yi=be(function(e,r,n,a,t){if(Aa(t)||o(gs,"@",t))return Y;var i=o(Da,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Yc(o(An,c+1,t));if(l.$===1)return Y;var u=l;return re(we(wi,e,o(Ba,c,t),u,r,n,a))}else return re(we(wi,e,t,Y,r,n,a))}),xi=F(function(e,r,n,a){if(Aa(a))return Y;var t=o(Da,"/",a);if(t.b){var i=t.a;return S(yi,e,o(An,i,a),r,n,o(Ba,i,a))}else return S(yi,e,"/",r,n,a)}),Si=y(function(e,r,n){if(Aa(n))return Y;var a=o(Da,"?",n);if(a.b){var t=a.a;return C(xi,e,re(o(An,t+1,n)),r,o(Ba,t,n))}else return C(xi,e,Y,r,n)});v(function(e,r){if(Aa(r))return Y;var n=o(Da,"#",r);if(n.b){var a=n.a;return p(Si,e,re(o(An,a+1,r)),o(Ba,a,r))}else return p(Si,e,Y,r)});var hs=Rv,vo=function(e){},Bn=Vr,_s=Bn(0),Zc=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(Dn,e,r,Me(d)):C(Zc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),_r=y(function(e,r,n){return C(Zc,e,r,0,n)}),ee=v(function(e,r){return p(_r,v(function(n,a){return o(M,e(n),a)}),P,r)}),fa=dt,$o=v(function(e,r){return o(fa,function(n){return Bn(e(n))},r)}),ws=y(function(e,r,n){return o(fa,function(a){return o(fa,function(t){return Bn(o(e,a,t))},n)},r)}),ys=function(e){return p(_r,ws(M),Bn(P),e)},xs=u$,Ss=v(function(e,r){var n=r;return sc(o(fa,xs(e),n))}),Cs=y(function(e,r,n){return o($o,function(a){return 0},ys(o(ee,Ss(e),r)))}),Ps=y(function(e,r,n){return Bn(0)}),ks=v(function(e,r){var n=r;return o($o,e,n)});or.Task=c$(_s,Cs,Ps,ks);var Ls=mc("Task"),fo=v(function(e,r){return Ls(o($o,e,r))}),zs=I$,Ts=Cv,sa={$:1},Xc=function(e){return{$:2,a:e}},Fa={$:0},Ue=v(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),tn=function(e){var r=e.b.A;return r.a},Ms=function(e){var r=e.a,n=e.b.T,a=e.b.A,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return re(o(Ue,r,{A:i,ac:c,T:o(M,a,n)}))}else return Y},Qc=function(e){var r=e.b;return o(Ue,Fa,r)},Ee=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ds=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bn.$7?Qc(n):n;case 2:var i=a.a.c4;return(q(i+r.dp,tn(n).eS)>0?o(te,Ms,Ee(o(Ue,sa,t))):mr)(o(Ue,Xc({c4:i+r.dp}),t));default:var c=t.A,l=c.a,u=c.b,$=o(qc,l.eT,oe(r,{eS:l.eS+r.dp})),s=o(e,$,u);return o(Ue,Fa,{A:z($,s),ac:P,T:o(M,t.A,t.T)})}}),Kc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),As=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(M,a,n);e=i,r=c,n=l;continue e}else return n}}),Bs=v(function(e,r){return Me(p(As,e,r,P))}),el=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,h=f.b,g=h.a,w=h.b;return e>1e3?o(M,_,o(M,c,o(M,s,o(M,g,o(Bs,r-4,w))))):o(M,_,o(M,c,o(M,s,o(M,g,p(el,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),so=v(function(e,r){return p(el,0,e,r)}),Fs=v(function(e,r){var n=r.b.T,a=r.b.A,t=r.b.ac,i=le(Me(n),le(b([a]),t)),c=o(so,e,i),l=o(Kc,e,i);if(l.b){var u=l.a,$=l.b;return o(Ue,sa,{A:u,ac:$,T:Me(c)})}else{var s=Me(c);if(s.b){var d=s.a,m=s.b;return o(Ue,sa,{A:d,ac:P,T:m})}else return r}}),Vs=function(e){var r=e.b;return o(Ue,sa,r)},Rs=function(e){var r=e.b;return o(Ue,Xc({c4:tn(e).eS}),r)},Es=v(function(e,r){switch(e.$){case 1:return Vs(r);case 2:return Qc(r);case 3:return Rs(r);default:var n=e.a;return o(Fs,n,r)}}),rl=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),js=v(function(e,r){return oe(r,{ax:e(r.ax)})}),Ns=function(e){return{$:3,a:e}},Ws=function(e){return{$:2,a:e}},Gs=v(function(e,r){return{$:0,a:e,b:r}}),Is=v(function(e,r){return{$:1,a:e,b:r}}),pe=v(function(e,r){if(r.$)return Y;var n=r.a;return re(e(n))}),J=function(e){return e<0?-e:e},mo=Nv,Hs=y(function(e,r,n){return o(Ee,0/0,mo(o(e,r,n)))}),nl=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Us=Tv,al=function(e){return p(Us,M,P,e)},Os=v(function(e,r){var n=o(nl,function(a){return a!=="0"&&a!=="."},al(r));return le(e&&n?"-":"",r)}),de=vc,wt=Pv,tl=Iv,ol=function(e){var r=e.a,n=e.b;if(r==="9"){var a=an(n);if(a.$===1)return"01";var t=a.a;return o(wt,"0",ol(t))}else{var i=ir(r);return i>=48&&i<57?o(wt,tl(i+1),n):"0"}},yt=hv,Js=Sv,Va=function(e){return o(wt,e,"")},il=y(function(e,r,n){return e<=0?n:p(il,e>>1,le(r,r),e&1?le(n,r):n)}),Pn=v(function(e,r){return p(il,e,r,"")}),xt=y(function(e,r,n){return le(n,o(Pn,e-Br(n),Va(r)))}),St=zv,cl=function(e){var r=o(oo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},qs=function(e){var r=o(oo,"e",de(J(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Ee,0,Yc(o(hs,"+",t)?o(An,1,t):t)),c=cl(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(Ee,"0",o(pe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(pe,rl(Va),an(le(o(Pn,J(i),"0"),$))))):p(xt,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Ys=y(function(e,r,n){if(yt(n)||Js(n))return de(n);var a=n<0,t=cl(qs(J(n))),i=t.a,c=t.b,l=Br(i)+r,u=le(o(Pn,-l+1,"0"),p(xt,l,"0",le(i,c))),$=Br(u),s=o(De,1,l),d=o(e,a,p(Jr,s,$,u)),m=p(Jr,0,s,u),f=d?St(o(Ee,"1",o(pe,ol,an(St(m))))):m,h=Br(f),g=f==="0"?f:r<=0?le(f,o(Pn,J(r),"0")):q(r,Br(c))<0?p(Jr,0,h-r,f)+("."+p(Jr,h-r,h,f)):le(i+".",p(xt,r,"0",c));return o(Os,a,g)}),ll=Ys(v(function(e,r){var n=an(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(ir(t))})),Zs=Hs(ll),Xs=y(function(e,r,n){var a=o(co,10,J(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Zs,t,n)}),ul=cv,vl=v(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ul,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=be(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ur={$:-2},Qr=be(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(W,0,r,n,S(W,1,$,s,d,m),S(W,1,i,c,l,u))}else return S(W,e,i,c,S(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,w=f.d,x=f.e,m=a.e;return S(W,0,$,s,S(W,1,h,g,w,x),S(W,1,r,n,m,t))}else return S(W,e,r,n,a,t)}),Ct=y(function(e,r,n){if(n.$===-2)return S(W,0,e,r,ur,ur);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ul,e,t);switch(u){case 0:return S(Qr,a,t,i,p(Ct,e,r,c),l);case 1:return S(W,a,t,r,c,l);default:return S(Qr,a,t,i,c,p(Ct,e,r,l))}}),Kn=y(function(e,r,n){var a=p(Ct,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(W,1,t,i,c,l)}else{var u=a;return u}}),Qs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},$l=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,h=m.c,g=m.d,w=m.e,x=$.e;return S(W,0,f,h,S(W,1,n,a,S(W,0,i,c,l,u),g),S(W,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,k=e.e;k.a;var s=k.b,d=k.c,m=k.d,x=k.e;return S(W,1,n,a,S(W,0,i,c,l,u),S(W,0,s,d,m,x))}else return e},Ci=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var h=f.b,g=f.c,w=f.d,x=f.e;return S(W,0,i,c,S(W,1,u,$,s,d),S(W,1,n,a,m,S(W,0,h,g,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,k=_.d,m=_.e,A=e.e;A.a;var h=A.b,g=A.c,w=A.d,x=A.e;return S(W,1,n,a,S(W,0,i,c,k,m),S(W,0,h,g,w,x))}else return e},Ks=za(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(W,n,l,u,$,S(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Ci(r)}else break e;else return c.a,c.d,Ci(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(W,r,n,a,ea(t),l);var u=$l(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Qr,$,s,d,ea(m),f)}else return ur}else return S(W,r,n,a,ea(t),l)}else return ur},hn=v(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(q(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(W,n,a,t,o(hn,e,i),c);var u=$l(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Qr,$,s,d,o(hn,e,m),f)}else return ur}else return S(W,n,a,t,o(hn,e,i),c);else return o(ed,e,Ut(Ks,e,r,n,a,t,i,c))}),ed=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Pr(e,a)){var l=Qs(c);if(l.$===-1){var u=l.b,$=l.c;return S(Qr,n,u,$,i,ea(c))}else return ur}else return S(Qr,n,a,t,i,o(hn,e,c))}else return ur}),rd=v(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(W,1,a,t,i,c)}else{var l=n;return l}}),In=y(function(e,r,n){var a=r(o(vl,e,n));if(a.$)return o(rd,e,n);var t=a.a;return p(Kn,e,t,n)}),nd=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(In,r,pe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Is,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(In,r,pe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Gs,z(i,c),p(Xs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(In,r,pe(function(a){return a.$===3?Ns(n):a}));default:var r=e.a,n=e.b;return o(In,r,pe(function(a){return a.$===2?Ws(n):a}))}},ad=function(e){return js(nd(e))},td=v(function(e,r){return o(ee,ad(e),r)}),od=v(function(e,r){return oe(r,{eT:o(td,e,r.eT)})}),id=v(function(e,r){var n=r.a,a=r.b;return o(Ue,n,oe(a,{A:o(rl,od(e),a.A)}))}),cd=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),ld=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(Ue,a,oe(t,{A:o(cd,o(e,i.a,r),i)}))}),ud=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return oe(a,{aO:!a.aO});case 2:var t=n.a;return oe(a,{G:p(Ds,e,t,a.G)});case 3:var i=n.a;return oe(a,{G:o(id,i,a.G)});case 4:var c=n.a;return oe(a,{G:p(ld,r,c,a.G)});default:var l=n.a;return oe(a,{G:o(Es,l,a.G)})}}),vd=v(function(e,r){return o(Ue,Fa,{A:z(e,r(e)),ac:P,T:P})}),$d=v$,Pi=$d(P),da=qv,kn=Jv,fd=m$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f3:e})},o(T,"clock",ve))},o(T,"devicePixelRatio",ve))},o(T,"dt",ve))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Ae({eG:d,eU:s,$7:$,e$:u,dF:l,fI:c,eo:i,fQ:t,ez:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",da(kn)))},o(T,"left",Z))},o(T,"pressedKeys",da(kn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Ae({$7:$,dB:u,fs:l,fM:c,fN:i,ez:t,f6:a,ga:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ve))},o(T,"y",ve))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ae({fc:n,f4:r})},o(T,"height",ve))},o(T,"width",ve))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ae({eX:r,eY:e})},o(T,"deltaX",ve))},o(T,"deltaY",ve))))),sd=function(e){return{$:4,a:e}},dd={$:0},md=fc,Ye=v(function(e,r){return o(gc,e,md(r))}),H=Ye("className"),pd=function(e){var r=e.b.A;return r.b},ma=Ye("id"),bd=w$,pa=bd,gd=y$,fe=gd,hd={$:1},_d=function(e){return{$:3,a:e}},wd=function(e){return{$:5,a:e}},ki=Rr("a"),po=Rr("button"),Li=function(e){return o(Ye,"href",C$(e))},yd=Mr("clip-rule"),Pe=Mr("d"),xd=Mr("fill"),fl=pc("http://www.w3.org/2000/svg"),Sd=fl("svg"),Cd=Mr("viewBox"),Pd=o(x$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ne=Sd(b([Cd("0 0 24 24"),xd("currentColor"),o(fe,"width","100%"),o(fe,"height","100%"),Pd("http://www.w3.org/2000/svg")])),kd=Mr("fill-rule"),ke=fl("path"),Yr={eW:Ne(b([o(ke,b([Pe("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),e6:Ne(b([o(ke,b([Pe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),fb:Ne(b([o(ke,b([Pe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),ft:Ne(b([o(ke,b([Pe("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(ke,b([Pe("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),fu:Ne(b([o(ke,b([Pe("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(ke,b([Pe("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fF:Ne(b([o(ke,b([Pe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fG:Ne(b([o(ke,b([Pe("M7 5V19L18 12L7 5Z")]),P)])),fH:Ne(b([o(ke,b([Pe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),bn:Ne(b([o(ke,b([Pe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),f_:Ne(b([o(ke,b([kd("evenodd"),yd("evenodd"),Pe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),f$:Ne(b([o(ke,b([Pe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),ge:Ne(b([o(ke,b([Pe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},Ld=function(e){return{$:0,a:e}},sl=bc,dl=v(function(e,r){return o(sl,e,Ld(r))}),bo=function(e){return o(dl,"click",Ae(e))},zi=Ye("target"),zd=Ye("title"),Pt=v(function(e,r){if(r.$===-2)return ur;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(W,n,a,o(e,a,t),o(Pt,e,i),o(Pt,e,c))}),Td=mt,vr=Td,Md=function(e){return p(ao,y(function(r,n,a){return o(M,n,a)}),P,e)},Dd=v(function(e,r){return{$:3,a:e,b:r}}),Ad=v(function(e,r){return{$:2,a:e,b:r}}),Bd=v(function(e,r){return{$:0,a:e,b:r}}),Fd=v(function(e,r){return{$:1,a:e,b:r}}),er=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Vd=C(er,0/255,0/255,0/255,1),Rd=fc,Ed=v(function(e,r){return o(gc,e,Rd(r))}),jd=Ed("checked"),je=yv,Nd=y(function(e,r,n){return le(o(Pn,e-Br(n),Va(r)),n)}),Kr=fv,ml=function(e){var r=function(n){return n<10?Fe(n):Va(tl(87+n))};return e<16?r(e):le(ml(e/16|0),r(o(Kr,16,e)))},Wd=o(te,ml,o(Nd,2,"0")),go=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aK:t,cd:a,ck:n,cV:r}},Gd=function(e){var r=go(e),n=r.cV,a=r.ck,t=r.cd;return o(Ar,"",o(M,"#",o(ee,o(te,je,Wd),b([n*255,a*255,t*255]))))},kt=Ye("htmlFor"),Lt=v(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),ba=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Id=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(M,t,n)}),pl=v(function(e,r){return p(_r,Id(e),P,r)}),bl=F(function(e,r,n,a){return{fh:r,fq:e,fA:n,fU:a}}),Hd=q$,Ud=Wv,Od=v(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Jd=J$,qd=function(e){return o(Jd,{eO:!1,fv:!1},e)},ga=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return Y},Yd=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Zd=function(e){return{$:2,a:e}},Xd=function(e){return{$:0,a:e}},Qd=function(e){return{$:1,a:e}},Ja=v(function(e,r){return ir(r)-ir(e)}),qa=y(function(e,r,n){var a=ir(n);return q(ir(e),a)<1&&q(a,ir(r))<1}),Kd=v(function(e,r){var n=function(t){return q(t,e)<0?ue(t):ye(Qd(r))},a=p(qa,"0","9",r)?ue(o(Ja,"0",r)):p(qa,"a","z",r)?ue(10+o(Ja,"a",r)):p(qa,"A","Z",r)?ue(10+o(Ja,"A",r)):ye(Xd(r));return o(ba,n,a)}),gl=v(function(e,r){var n=an(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ba,function(c){return o(ba,function(l){return ue(c+l*e)},o(gl,e,i))},o(Kd,e,t))}),em=v(function(e,r){return 2<=e&&e<=36?o(gl,e,St(r)):ye(Zd(e))}),rm=em(16),nm=y(function(e,r,n){return C(er,e,r,n,1)}),am=F(function(e,r,n,a){return C(er,e,r,n,a)}),Fn=$v,tm=v(function(e,r){var n=o(Fn,10,e);return je(r*n)/n}),om=Bv,im=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=al(n);if(a.b&&!a.b.b){var t=a.a;return Ud(b([t,t]))}else return n};return o(te,om,o(te,function(n){return o(pe,function(a){return p(Hd,1,a,n)},qd(e))},o(te,Lt(ga),o(te,pe(function(n){return n.fU}),o(te,pe(pl(mr)),o(te,Od("Parsing hex regex failed"),ba(function(n){var a=o(ee,o(te,r,o(te,rm,Yd(cs))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(C(am,t/255,c/255,u/255,o(tm,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(nm,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),ha=Rr("input"),zt=Rr("label"),Tt=Ye("name"),hl=v(function(e,r){return p(_r,T,r,e)}),cm=o(hl,b(["target","checked"]),Z),lm=function(e){return o(dl,"change",o($a,e,cm))},um=function(e){return z(e,!0)},vm=function(e){return{$:1,a:e}},$m=v(function(e,r){return o(sl,e,vm(r))}),fm=o(hl,b(["target","value"]),kn),ho=function(e){return o($m,"input",o($a,um,o($a,e,fm)))},_l=Ye("max"),wl=Ye("min"),yl=function(e){return o(Ye,"step",e)},_a=Ye("type"),_o=Ye("value"),Ti=function(e){var r=e.cn,n=e.c9,a=e.cD,t=e.cz,i=e.c2,c=e.cH;return o(U,P,b([o(zt,b([kt(r)]),b([o(U,b([H("relative w-full")]),b([o(U,b([H("inline-block")]),b([vr(r)])),o(U,b([H("inline-block float-right")]),b([vr(de(n))]))]))])),o(ha,b([_a("range"),o(fe,"width","100%"),ma(r),Tt(r),wl(de(a)),_l(de(t)),_o(de(n)),yl(de(i)),ho(o(te,mo,o(te,Ee(42),c)))]),P)]))},sm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),dm=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(U,b([H("h-12 py-4")]),b([o(zt,b([H("block"),kt(e)]),b([o(ha,b([H("relative bottom-[1px] align-middle mr-2"),_a("checkbox"),ma(e),Tt(e),lm(Dd(e)),jd(c)]),P),vr(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Ti({cn:e,cz:i,cD:t,cH:Bd(e),c2:.01*(i-t),c9:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Ti({cn:e,cz:i,cD:t,cH:o(te,je,Fd(e)),c2:1,c9:c});default:var c=r.a;return o(U,P,b([o(U,b([o(fe,"margin-bottom","6px")]),b([o(zt,b([kt(e)]),b([vr(e)]))])),o(ha,b([_a("color"),o(fe,"width","100%"),o(fe,"height","26px"),o(fe,"padding","0px"),ma(e),Tt(e),ho(function(l){return o(Ad,e,o(sm,Vd,im(l)))}),_o(Gd(c))]),P)]))}}),mm=function(e){return o(U,b([H("p-4 border-y-[0.5px] border-white20")]),b([o(U,b([H("text-lg pb-2")]),b([vr(e.fw)])),o(U,b([H("pl-2 pr-2")]),Md(o(Pt,dm,e.ax)))]))},pm=function(e){return o(U,b([H("text-xs text-white60")]),o(ee,mm,e))},bm=function(e){return o(U,b([H("absolute left-[104px] bottom-2 text-sm text-white40")]),b([vr("clock: "+o(ll,3,tn(e).eS))]))},gm=function(e){e.a;var r=e.b.T;return o(pe,function(n){return je(60/(tn(e).eS-n))},o(pe,o(te,$s,function(n){return n.eS}),ga(o(Kc,59,r))))},hm=function(e){return o(U,b([H("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=gm(e);if(r.$===1)return b([vr("... Fps")]);var n=r.a;return b([vr(Fe(n)+" Fps")])}())},_m=function(e){return{$:0,a:e}},wm=function(e){var r=e.b.T;return kr(r)},ym=function(e){var r=e.b.T;e.b.A;var n=e.b.ac;return kr(r)+1+kr(n)},xm=function(e){return o(ha,b([H("absolute w-full"),_a("range"),wl(Fe(0)),_l(Fe(ym(e)-1)),_o(Fe(wm(e))),yl(Fe(1)),ho(o(te,mo,o(te,Ee(42),o(te,je,_m))))]),P)},Mi={$:1},Sm={$:3},Cm={$:2},xl=function(e){return!e.b},Di=v(function(e,r){return o(po,b([H("px-2 bg-black60 hover:bg-black80 active:bg-black"),H(r),bo(e)]),b([vr("REC")]))}),Ai=v(function(e,r){return o(po,b([H("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),bo(r)]),b([o(U,b([H("w-4 h-6 text-white60 hover:text-white80")]),b([e]))]))}),Pm=function(e){var r=e.a,n=e.b.ac;return o(U,b([H("py-1")]),b([function(){switch(r.$){case 0:return o(Di,Mi,"text-red-500 font-bold");case 1:return o(Di,Cm,"text-white60 hover:text-white80 font-bold");default:return o(U,P,P)}}(),function(){switch(r.$){case 0:return o(U,P,P);case 1:return xl(n)?o(U,P,P):o(Ai,Yr.fG,Sm);default:return o(Ai,Yr.fF,Mi)}}()]))},km=function(e){return o(U,b([H("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([xm(e),Pm(e),hm(e),bm(e)]))},Lm=function(e){var r=e.a;return Pr(r,Fa)},zm=v(function(e,r){var n=Lm(r.G)?o(U,P,P):o(U,b([H("absolute pointer-events-none w-8 h-8"),o(fe,"left",de(e.bn.f6+.5*e.b3.f4)+"px"),o(fe,"top",de(-e.bn.ga+.5*e.b3.fc)+"px")]),b([o(U,b([H(e.bn.dB?"text-black80":"text-black40")]),b([Yr.bn]))]));return o(U,P,b([n]))}),Tm=v(function(e,r){var n=o(po,b([H(r.aO?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),bo(hd),zd("Distraction Free Mode")]),b([Yr.ge])),a=o(U,b([H("absolute w-8 bottom-12")]),b([o(ki,b([H("text-twitterBlue40 hover:text-twitterBlue"),Li("https://twitter.com/AzizErkalSelman"),zi("_blank")]),b([Yr.f$]))])),t=o(U,b([H("absolute w-8 bottom-2")]),b([o(ki,b([H("text-githubCat40 hover:text-githubCat"),Li("https://github.com/erkal/elm-3d-playground-exploration"),zi("_blank")]),b([Yr.e6]))]));return r.aO?o(U,b([H("fixed w-10 h-10 p-1")]),b([n])):o(U,P,b([o(U,b([H("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),b([n,a,t])),o(U,b([H("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(fe,"height",de(e.b3.fc-80)+"px")]),b([o(pa,_d,pm(tn(r.G).eT))])),o(U,b([H("absolute bottom-0 left-10 h-20"),o(fe,"width",e.b3.f4>600?"600px":de(e.b3.f4-40)+"px")]),b([o(pa,wd,km(r.G))])),o(zm,e,r)]))}),Mm=y(function(e,r,n){var a=pd(n.G),t=tn(n.G);return o(U,b([H("bg-black40"),H("select-none"),H("antialiased"),H("font-mono"),o(fe,"width",de(t.b3.f4)+"px"),o(fe,"height",de(t.b3.fc)+"px")]),b([o(U,b([H("fixed")]),b([o(pa,Jc(dd),o(e,t,a))])),o(U,b([ma("gui")]),b([o(Tm,t,n),o(pa,sd,o(r,t,a))]))]))}),Dm=qe(function(e,r,n,a,t,i){var c=v(function(u,$){return z(C(ud,r,i,u,$),Pi)}),l=function(u){var $=o(qc,n,u.fj);return z({aO:u.fj.b3.f4<500,G:o(vd,$,a)},Pi)};return zs({fi:l,fV:Jc(fd(ps)),f0:c,f2:o(Mm,e,t)})}),Am=F(function(e,r,n,a){return we(Dm,e,r,n,a,v(function(t,i){return o(U,P,P)}),y(function(t,i,c){return c}))}),Bm=y(function(e,r,n){return C(Am,e,r,P,n)}),Fm=C(er,85/255,87/255,83/255,1),Vm=C(er,32/255,74/255,135/255,1),Rm=C(er,211/255,215/255,207/255,1),Ra=function(e){return{$:0,a:e}},Em=y(function(e,r,n){e:for(;;){var a=o(lo,Ve,e),t=a.a,i=a.b;if(q(_t(t),Ve)<0)return o(Oc,!0,{y:r,l:n,o:t});var c=i,l=o(M,Uc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Ea=function(e){return e.b?p(Em,e,P,0):Ic},jm=v(function(e,r){return{dv:e,am:P,C:0,cY:Ea(r),aE:Ra({a$:0,a2:0})}}),Nm=C(er,114/255,159/255,207/255,1),Wm=C(er,233/255,185/255,110/255,1),Gm=C(er,245/255,121/255,0/255,1),Im=C(er,117/255,80/255,123/255,1),Hm=function(e){return o(jm,Wm,b([Im,Fm,Vm,Nm,Rm,Gm]))},Re={V:.35,bk:6},ja=v(function(e,r){return e*je(r/e)}),Um=function(e){var r=e;return oe(r,{aE:Ra({a$:.2*-Re.bk,a2:o(ja,Re.V,r.C-Re.V)})})},Om=function(e){var r=e;return oe(r,{aE:Ra({a$:.2*Re.bk,a2:o(ja,Re.V,r.C+Re.V)})})},Jm=function(e){var r=e.dE;return r.dF?Om:r.eo?Um:mr},qm=bv,wr=xv,Ym=v(function(e,r){var n=e,a=r,t=a.de-n.de,i=a.ga-n.ga,c=a.f6-n.f6,l=o(De,J(c),o(De,J(i),J(t)));if(l){var u=t/l,$=i/l,s=c/l,d=wr(s*s+$*$+u*u);return re({f6:s/d,ga:$/d,de:u/d})}else return Y}),Ya=function(e){return e},wo=v(function(e,r){var n=e,a=r;return{f6:a.ga*n.de-a.de*n.ga,ga:a.de*n.f6-a.f6*n.de,de:a.f6*n.ga-a.ga*n.f6}}),_n=function(e){var r=e,n=o(De,J(r.f6),o(De,J(r.ga),J(r.de)));if(n){var a=r.de/n,t=r.ga/n,i=r.f6/n,c=wr(i*i+t*t+a*a);return re({f6:i/c,ga:t/c,de:a/c})}else return Y},wa=v(function(e,r){var n=e,a=r;return{f6:a.f6-n.f6,ga:a.ga-n.ga,de:a.de-n.de}}),Zm=v(function(e,r){var n=e,a=r;return a.f6*n.f6+a.ga*n.ga+a.de*n.de}),Sl=v(function(e,r){var n=e,a=r;return q(a,n)>0}),Xm=v(function(e,r){var n=e,a=r;return q(a,n)<0}),Qm=v(function(e,r){var n=e,a=r;return{f6:a.f6-n.f6,ga:a.ga-n.ga,de:a.de-n.de}}),Km=v(function(e,r){var n=e,a=r,t=a.f6*n.f6+a.ga*n.ga+a.de*n.de;return{f6:n.f6*t,ga:n.ga*t,de:n.de*t}}),e0=function(e){var r=e;return{f6:-r.f6,ga:-r.ga,de:-r.de}},He=0,Cl={f6:0,ga:0,de:0},r0=y(function(e,r,n){return o(Lt,function(a){var t=o(Qm,o(Km,a,r),r);return o(Lt,function(i){var c=o(wo,r,e),l=o(Zm,n,c),u=o(Sl,He,l)?c:o(Xm,He,l)?e0(c):Cl;return o(pe,function($){return B(a,i,$)},_n(u))},_n(t))},_n(e))}),n0=function(e){var r=e,n=J(r.de),a=J(r.ga),t=J(r.f6);if(q(t,a)<1)if(q(t,n)<1){var i=wr(r.de*r.de+r.ga*r.ga);return{f6:0,ga:-r.de/i,de:r.ga/i}}else{var i=wr(r.ga*r.ga+r.f6*r.f6);return{f6:-r.ga/i,ga:r.f6/i,de:0}}else if(q(a,n)<1){var i=wr(r.de*r.de+r.f6*r.f6);return{f6:r.de/i,ga:0,de:-r.f6/i}}else{var i=wr(r.f6*r.f6+r.ga*r.ga);return{f6:-r.ga/i,ga:r.f6/i,de:0}}},yo=function(e){var r=n0(e),n=r,a=n,t=e,i=t,c={f6:i.ga*a.de-i.de*a.ga,ga:i.de*a.f6-i.f6*a.de,de:i.f6*a.ga-i.ga*a.f6};return z(r,c)},qr=function(e){var r=e;return r},$r=function(e){return e},a0=v(function(e,r){var n=yo(e),a=n.a,t=n.b;return $r({cI:r,dc:a,dd:t,df:e})}),t0=function(e){var r=o(wa,e.aU,e.du),n=qr(e.eA),a=o(wo,r,n),t=p(r0,r,n,a);if(t.$){var $=_n(r);if($.$){var d=yo(e.eA),m=d.a,f=d.b;return $r({cI:e.du,dc:f,dd:e.eA,df:m})}else{var s=$.a;return o(a0,s,e.du)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return $r({cI:e.du,dc:u,dd:l,df:c})}},ar={f6:0,ga:0,de:0},o0=function(e){return{$:0,a:e}},ie=function(e){var r=e;return J(r)},ra=function(e){var r=e;return .5*r},i0=pv,c0=function(e){var r=e;return i0(r)},l0=function(e){var r=ra(ie(e.eB)),n=c0(r);return{cU:o0(n),da:e.da}},pr=function(e){return e},xo=pr({f6:0,ga:1,de:0}),Ln=function(e){return e},u0=function(e){var r=e.aU,n=e.du,a=e.eA;return l0({eB:Ln(2*qm(.5)),da:t0({du:Ya(n),aU:Ya(r),eA:o(Ee,xo,o(Ym,ar,Ya(a)))})})},Pl=u0({du:{f6:0,ga:-.2,de:1},aU:{f6:0,ga:0,de:0},eA:{f6:0,ga:1,de:0}}),cr=function(e){return e},v0=y(function(e,r,n){return{f6:e,ga:r,de:n}}),en=sv,pn=function(e){return Ln(en*(e/180))},Hn=function(e){return e},na=function(e){var r=e;return r},$0=v(function(e,r){var n=e,a=r;return a.f6*n.f6+a.ga*n.ga+a.de*n.de}),So=function(e){var r=e;return r.e_},X=v(function(e,r){var n=r;return e*n}),Co=function(e){var r=e;return r.cI},f0=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.fy,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga+(a.de-i.de)*l.de}),s0=y(function(e,r,n){var a=e,t=r,i=n;return{f6:i.f6+t*a.f6,ga:i.ga+t*a.ga,de:i.de+t*a.de}}),d0=v(function(e,r){var n=So(r),a=e,t=a.fy,i=o($0,t,n);if(i){var c=Co(r),l=o(f0,e,c),u=o(X,-1/i,l);return re(p(s0,n,u,c))}else return Y}),m0=v(function(e,r){return{f6:e,ga:r}}),Bi=v(function(e,r){var n=e,a=r;return n*a}),p0=function(e){var r=e;return r},Fi=function(e){var r=e;return p0(r.eJ)},b0=function(e){var r=e;return r.aN},kl=v(function(e,r){var n=r;return n/e}),on=function(e){var r=e;return r.cI},Mt=function(e){var r=e;return on(r)},Dt=function(e){var r=e;return-r},Po=pr({f6:0,ga:0,de:-1}),g0=v(function(e,r){var n=e,a=r;return a/n}),h0=v(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,$=u;return{f6:$.f6*a.f6+l.f6*a.ga+i.f6*a.de,ga:$.ga*a.f6+l.ga*a.ga+i.ga*a.de,de:$.de*a.f6+l.de*a.ga+i.de*a.de}}),ya=v(function(e,r){return{e_:r,cI:e}}),br=function(e){var r=e;return{f6:-r.f6,ga:-r.ga,de:-r.de}},Er=function(e){var r=e;return r.df},At=function(e){var r=e;return br(Er(r))},_0=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dc,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga}),ko=y(function(e,r,n){var a=e,t=r,i=n;return{f6:a,ga:t,de:i}}),w0=F(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cI,$=u,s=t.df,d=s,m=t.dd,f=m,h=t.dc,g=h;return{f6:$.f6+i*g.f6+c*f.f6+l*d.f6,ga:$.ga+i*g.ga+c*f.ga+l*d.ga,de:$.de+i*g.de+c*f.de+l*d.de}}),y0=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dd,l=c;return(a.f6-i.f6)*l.f6+(a.ga-i.ga)*l.ga}),x0=y(function(e,r,n){var a=e,t=o(y0,Fi(r),n),i=o(_0,Fi(r),n),c=a.da,l=c,u=b0(r);u.a;var $=u.b,s=a.cU;if(s.$){var h=s.a,g=o(g0,$,h),w=C(w0,l,o(Bi,g,i),o(Bi,g,t),He);return o(ya,w,At(a.da))}else{var d=s.a,m=Dt(o(kl,d,o(X,.5,$))),f=o(h0,l,o(Ee,Po,_n(p(ko,i,t,m))));return o(ya,Mt(a.da),f)}}),xa=dv,Sa=mv,Bt=function(e){var r=e;return{f6:xa(r),ga:Sa(r)}},S0=function(e){var r=e;return{f6:-r.ga,ga:r.f6}},C0=function(e){return e},P0=v(function(e,r){return C0({cI:r,dc:e,dd:S0(e)})}),k0=v(function(e,r){return o(P0,Bt(e),r)}),L0=y(function(e,r,n){var a=e.a,t=e.b;return{eJ:o(k0,r,n),aN:z(ie(a),ie(t))}}),xr=function(e){var r=e;return r.f6},z0=v(function(e,r){var n=e,a=r;return{f6:n,ga:a}}),Sr=function(e){var r=e;return r.ga},Cr=function(e){var r=e;return r.de},T0=F(function(e,r,n,a){var t=n.f6,i=n.ga,c=function($){return p(v0,na(xr($)),na(Sr($)),na(Cr($)))},l=p(L0,z(Hn(r.f4),Hn(r.fc)),pn(0),o(m0,0,0)),u=o(z0,Hn(t),Hn(i));return o(pe,c,o(d0,a,p(x0,e,l,u)))}),cn=v(function(e,r){var n=e,a=r;return{f6:a.f6+n.f6,ga:a.ga+n.ga,de:a.de+n.de}}),M0=v(function(e,r){return{fy:e,cI:r}}),D0=v(function(e,r){var n=r;return o(M0,n.fy,o(cn,e,n.cI))}),A0=v(function(e,r){return{fy:r,cI:e}}),Lo=pr({f6:0,ga:0,de:1}),zo=Lo,B0=o(A0,ar,zo),F0=F(function(e,r,n,a){return C(T0,r,n,a,o(D0,p(ko,cr(0),cr(0),cr(e)),B0))}),V0=F0(0),Vi=v(function(e,r){return e?r:mr}),R0=y(function(e,r,n){var a=e.bn,t=r.ef,i=r.el,c=n;return oe(c,{C:i-(t-a.f6)})}),E0=F(function(e,r,n,a){var t=a;return q(J(r-t.C),.5*Re.V)<0?oe(t,{C:t.C+.1*(r-t.C)}):oe(t,{C:t.C+e*n})}),j0=function(e){var r=e;return oe(r,{am:P})},N0=function(e){return{$:1,a:e}},W0=v(function(e,r){var n=r;return oe(n,{aE:N0({ef:e.bn.f6,el:n.C})})}),To=y(function(e,r,n){return q(n,e)<0?e:q(n,r)>0?r:n}),G0=function(e){return p(Dn,Zf,0,e)},I0=function(e){var r=e,n=G0(o(so,kr(r.am)-1,o(ee,function(u){return u.dn},r.am))),a=z(o(Ee,0,o(pe,function(u){return u.cS},ga(r.am))),o(Ee,0,o(pe,function(u){return u.cS},ga(Me(r.am))))),t=a.a,i=a.b,c=t-i,l=n?c/n:0;return oe(r,{aE:Ra({a$:p(To,-Re.bk,Re.bk,l),a2:o(ja,Re.V,r.C+.3*l)})})},H0=v(function(e,r){var n=e.dp,a=e.bn,t=r;return oe(t,{am:o(so,6,o(M,{dn:n,cS:a.f6},t.am))})}),U0=v(function(e,r){var n=r,a=n.aE;if(a.$===1){var t=a.a;return p(Vi,!e.bn.dB,I0,p(R0,e,t,o(H0,e,n)))}else{var i=a.a.a2,c=a.a.a$;return C(E0,e.dp,i,c,p(Vi,e.bn.dB,W0(e),j0(n)))}}),O0=v(function(e,r){var n=e.bn,a=o(Ee,{f6:0,ga:0,de:0},p(V0,Pl,e.b3,n)),t=a.f6,i=a.ga,c=oe(e,{bn:oe(n,{f6:t,ga:i})});return o(U0,c,r)}),J0=v(function(e,r){return e.bn,o(O0,e,o(Jm,e,r))}),Ri=function(e){return e*en/180},Mo=v(function(e,r){return{$:0,a:e,b:r}}),Za=v(function(e,r){var n=e,a=r;return q(a,n)>-1}),Xa=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),gr=v(function(e,r){var n=e,a=r;return a-n}),q0=pr({f6:-1,ga:0,de:0}),Y0=pr({f6:0,ga:-1,de:0}),Ll=pr({f6:1,ga:0,de:0}),se=y(function(e,r,n){var a=e,t=r,i=n;return{f6:a,ga:t,de:i}}),Z0=qe(function(e,r,n,a,t,i){var c=o(Za,n,i)?Lo:Po,l=o(Za,r,t)?xo:Y0,u=o(Za,e,a)?Ll:q0,$=B(ie(o(gr,e,a)),ie(o(gr,r,t)),ie(o(gr,n,i))),s=p(se,o(Xa,e,a),o(Xa,r,t),o(Xa,n,i)),d=$r({cI:s,dc:u,dd:l,df:c});return{eJ:d,aN:$}}),X0=v(function(e,r){return we(Z0,xr(e),Sr(e),Cr(e),xr(r),Sr(r),Cr(r))}),Ft=y(function(e,r,n){return{f6:e,ga:r,de:n}}),Q0=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Mo,e,o(X0,p(Ft,-c,-l,-u),p(Ft,c,l,u)))}),Vt=function(e){return{$:0,a:e}},zl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Qa=function(e){return p(To,0,1,e<=.04045?e/12.92:o(Fn,(e+.055)/1.055,2.4))},Vn=X$,K0=function(e){var r=go(e),n=r.cV,a=r.ck,t=r.cd;return p(Vn,Qa(n),Qa(a),Qa(t))},ep=function(e){return p(zl,0,Vt(K0(e)),Vt(0))},rp=v(function(e,r){return o(Q0,ep(r),B(.2,.3,.3))}),Rt=4294967295>>>32-Cn,Et=tv,np=y(function(e,r,n){e:for(;;){var a=Rt&r>>>e,t=o(Et,a,n);if(t.$){var $=t.a;return o(Et,Rt&r,$)}else{var i=t.a,c=e-Cn,l=r,u=i;e=c,r=l,n=u;continue e}}}),ap=function(e){return e>>>5<<5},Tl=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||q(e,n)>-1?Y:q(e,ap(n))>-1?re(o(Et,Rt&e,i)):re(p(np,a,e,t))}),Ml=function(e){var r=e.a;return r},Dl=function(e){var r=e;return Ml(r.cY)+1},Al=v(function(e,r){var n=r,a=o(Kr,Dl(n),e);return{di:o(Ee,n.dv,o(Tl,a-1,n.cY)),fh:a,fz:n.C-o(ja,Re.V,n.C)}}),tp=function(e){var r=e;return o(Kr,Dl(r),je(-r.C/Re.V))},op=function(e){var r=e;return o(Al,tp(r),r)},Do=function(e){return{$:5,a:e}},ip=function(e){return Do(e)},Bl=v(function(e,r){return{$:2,a:e,b:r}}),Fl=v(function(e,r){return{$:4,a:e,b:r}}),Vl=v(function(e,r){return{$:3,a:e,b:r}}),Rl=v(function(e,r){return{$:1,a:e,b:r}}),cp=y(function(e,r,n){return{f6:e,ga:r,de:n}}),lp=function(e){var r=e;return r},Ao=function(e){var r=e;return lp(r.eJ)},Bo=function(e){var r=e;return r.aN},jr=function(e){var r=e;return r.dc},Nr=function(e){var r=e;return r.dd},up=v(function(e,r){return $r({cI:o(cn,e,on(r)),dc:jr(r),dd:Nr(r),df:Er(r)})}),vp=v(function(e,r){return{eJ:o(up,e,Ao(r)),aN:Bo(r)}}),$p=v(function(e,r){var n=r;return o(ya,o(cn,e,n.cI),n.e_)}),fp=v(function(e,r){var n=r;return{k:o($p,e,n.k),fo:n.fo,fJ:n.fJ}}),Fo=function(e){var r=e;return r},sp=function(e){return e},El=v(function(e,r){var n=Fo(r),a=n.a,t=n.b;return sp(z(e(a),e(t)))}),dp=v(function(e,r){return o(El,cn(e),r)}),Vo=function(e){var r=e;return r.eQ},Ro=function(e){var r=e;return r.fJ},jl=v(function(e,r){return{eQ:r,fJ:ie(e)}}),mp=v(function(e,r){return o(jl,Ro(r),o(cn,e,Vo(r)))}),Nl=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),pp=v(function(e,r){return o(Nl,cn(e),r)}),Eo=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(cp,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Mo,s,o(vp,i,c));case 1:var s=r.a,l=r.b;return o(Rl,s,o(pp,i,l));case 3:var s=r.a,u=r.b;return o(Vl,s,o(mp,i,u));case 2:var s=r.a,$=r.b;return o(Bl,s,o(fp,i,$));case 4:var s=r.a,d=r.b;return o(Fl,s,o(dp,i,d));default:var m=r.a;return Do(o(ee,Eo(B(n,a,t)),m))}}),bp=function(e){return Eo(B(e,0,0))},gp=function(e){return Eo(B(0,e,0))},Rn=y(function(e,r,n){var a=e,t=n;return{f6:a.f6+r*(t.f6-a.f6),ga:a.ga+r*(t.ga-a.ga),de:a.de+r*(t.de-a.de)}}),hp=y(function(e,r,n){var a=Ao(n),t=jr(a),i=Nr(a),c=Er(a),l=p(Rn,e,r,on(a)),u=r>=0?$r({cI:l,dc:t,dd:i,df:c}):$r({cI:l,dc:br(t),dd:br(i),df:br(c)}),$=Bo(n),s=$.a,d=$.b,m=$.c,f=ie(o(X,r,s)),h=ie(o(X,r,d)),g=ie(o(X,r,m));return{eJ:u,aN:B(f,h,g)}}),jo=function(e){var r=e;return r.k},Ei=function(e){return So(jo(e))},_p=function(e){return Co(jo(e))},Wl=function(e){var r=e;return r.fo},Gl=function(e){var r=e;return r.fJ},wp=y(function(e,r,n){var a=ie(o(X,r,Gl(n))),t=ie(o(X,r,Wl(n))),i=r>=0?Ei(n):br(Ei(n)),c=p(Rn,e,r,_p(n));return{k:o(ya,c,i),fo:t,fJ:a}}),yp=y(function(e,r,n){return o(El,o(Rn,e,r),n)}),xp=y(function(e,r,n){return o(jl,o(X,J(r),Ro(n)),p(Rn,e,r,Vo(n)))}),Sp=y(function(e,r,n){return o(Nl,o(Rn,e,r),n)}),Il=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Mo,c,p(hp,ar,e,n));case 1:var c=r.a,a=r.b;return o(Rl,c,p(Sp,ar,e,a));case 3:var c=r.a,t=r.b;return o(Vl,c,p(xp,ar,e,t));case 2:var c=r.a,i=r.b;return o(Bl,c,p(wp,ar,e,i));case 4:var c=r.a,l=r.b;return o(Fl,c,p(yp,ar,e,l));default:var u=r.a;return Do(o(ee,Il(e),u))}}),Cp=v(function(e,r){var n=op(r),a=n.fz,t=n.fh,i=function(l){return a+(l-t)*Re.V},c=function(l){return o(bp,i(l),o(gp,-(.1*J(i(l))),o(Il,1-.7*J(i(l)),o(rp,e,o(Al,l,r).di))))};return ip(o(ee,c,o(Fr,t-3,t+3)))}),Ka=function(e){return e/255},Pp=y(function(e,r,n){return C(er,Ka(e),Ka(r),Ka(n),1)}),kp=function(e){return e},Lp=function(e){return cr(.01*e)},ji=function(e){return e},zp=function(e){return e},Tp=function(e){return{$:0,a:e}},Mp=Tp,Dp={$:3},Ap=Dp,Bp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Fp=Bp,Vp=v(function(e,r){return r.b?p(_r,M,r,e):e}),Oe=function(e){return p(_r,Vp,P,e)},No=v(function(e,r){return Oe(o(ee,e,r))}),Rp=function(e){return{$:1,a:e}},Ep=Rp,jp=function(e){return o(Mr,"height",Fe(e))},Np=function(e){return h$(S$(e))},Wp=Np,Gp=function(e){return{$:2,a:e}},Ip=Gp,Hp=function(e){return o(Ar,"",e)},Up=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return je(l*1e3)/1e3},c=function(l){return je(l*1e4)/100};return Hp(b(["rgba(",de(c(r)),"%,",de(c(n)),"%,",de(c(a)),"%,",de(i(t)),")"]))},Op=v(function(e,r){switch(r.$){case 0:return o(Nf,e,r);case 1:return o(Wf,e,r);case 2:return o(Gf,e,r);case 3:return o(If,e,r);case 4:return o(Hf,e,r);default:return o(Uf,e,r)}}),Jp=v(function(e,r){switch(r.$){case 0:return o(pf,e,r);case 1:return o(bf,e,r);case 2:return o(gf,e,r);case 3:return o(hf,e,r);case 4:return o(_f,e,r);case 5:return o(wf,e,r);case 6:return o(yf,e,r);case 7:return o(xf,e,r);default:return Sf(e)}}),qp=y(function(e,r,n){return p(jf,e,r,n)}),Ni=function(e){var r=e;return r},ln=af,et=C(ln,1,1,1,1),rr=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),Yp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zp=v(function(e,r){var n=e,a=r.f6,t=r.ga;return p(Yp,n*a/t,n,n*(1-a-t)/t)}),Xp=function(e){var r=e.a,n=e.b,a=e.c;return p(Vn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Wo=v(function(e,r){return Xp(o(Zp,e,r))}),Hl=v(function(e,r){return{dC:Pr(e.dC,r.dC),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,H:r.H+(e.H*r.p+e.I*r.s+e.J*r.v)*r.b2,I:r.I+(e.H*r.q+e.I*r.t+e.J*r.w)*r.b2,J:r.J+(e.H*r.r+e.I*r.u+e.J*r.x)*r.b2,b2:e.b2*r.b2}}),tr=vf,Qp=function(e){return tr({dM:e.p,dN:e.s,dO:e.v,dP:e.H,dQ:e.q,dR:e.t,dS:e.w,dT:e.I,dU:e.r,dV:e.u,dW:e.x,dX:e.J,dY:0,dZ:0,d_:0,d$:1})},rt=be(function(e,r,n,a,t){var i=a.dC?1:-1,c=C(ln,a.b2,a.b2,a.b2,i);return we(t,e,c,Qp(a),a.dC,r,n)}),Ul=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Hl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var h=t.b,g=o(M,S(rt,e,r,n,a,h),i.M);return{M:g,U:i.U,fP:i.fP};case 3:var w=t.b,x=o(M,S(rt,e,r,n,a,w),i.U);return{M:i.M,U:x,fP:i.fP};case 2:var _=t.a,k=o(M,S(rt,e,r,n,a,_),i.fP);return{M:i.M,U:i.U,fP:k};default:var A=t.a;return p(Dn,C(Ul,e,r,n,a),i,A)}}),Kp=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ol=Kp,Go=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),eb=function(e){var r=e._,n=e.X,a=e.W;return C(Go,518,r,n,a)},rb=v(function(e,r){return{$:6,a:e,b:r}}),nb=rb,Jl=b([eb({W:1,X:0,_:!1}),C(Ol,!1,!1,!1,!1),o(nb,0,1)]),rn=519,Io=8,ql=15,Zr=7681,ab={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=mf,tb=v(function(e,r){return{$:0,a:e,b:r}}),ob=tb({dq:1,dA:0,d8:5}),Be=Y$,ib=ob(b([{b_:o(Be,-1,-1)},{b_:o(Be,1,-1)},{b_:o(Be,-1,1)},{b_:o(Be,1,1)}])),cb={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"b_"},uniforms:{}},lb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Ho=y(function(e,r,n){var a=e.cW,t=e.cw,i=e.db,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(te,c($.bs),o(te,l($.bd),o(te,l($.bA),l($.bB))))};return o(u,n,o(u,r,p(lb,a,t,i)))}),Uo=function(e){return p(Ho,{cw:e.cw,cW:e.cW,db:e.db},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB})},Oo=function(e){return S(ne,b([Uo(e),C(Ol,!1,!1,!1,!1)]),cb,ab,ib,{})},ub=Oo({bd:Zr,cw:0,cW:Io,bs:rn,db:ql,bA:Zr,bB:Zr}),vb=516,Wi=5386,xe=7680,$b=function(e){return o(Fn,2,e+4)},Yl=function(e){return Oo({bd:xe,cw:ql,cW:Io,bs:vb,db:$b(e),bA:Wi,bB:Wi})},fb=y(function(e,r,n){return Oe(b([p(rr,e,n,Jl),b([Yl(r),ub])]))}),sb=v(function(e,r){return Oe(o(Nc,fb(e),r))}),db=function(e){var r=e._,n=e.X,a=e.W;return C(Go,513,r,n,a)},mb=db({W:1,X:0,_:!0}),pb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},bb=function(e){var r=e.b0,n=e.bM,a=e.bF,t=e.bC,i=e.bH,c=e.aK,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,h=$.b,g=$.c;return pb(s)(d)(m)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},gb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Gi=v(function(e,r){var n=e,a=r;return p(gb,32774,n,a)}),hb=1,Ii=771,_b=770,Jo=bb({bC:0,aK:o(Gi,hb,Ii),bF:0,bH:o(Gi,_b,Ii),bM:0,b0:0}),Ir=b([mb,Jo]),wb=function(e){var r=e;return r.d1},yb=function(e){var r=e;return r.d2},Zl=function(e){var r=e;return r.d3},xb=function(e){var r=e;return r.d4},Sb=function(e){var r=e;return r.d5},Xl=function(e){var r=e;return r.d6},Ql=function(e){return B(o(gr,xb(e),wb(e)),o(gr,Sb(e),yb(e)),o(gr,Xl(e),Zl(e)))},Cb=function(e){return e},Pb=function(e){return $r({cI:Cb({f6:e.H,ga:e.I,de:e.J}),dc:pr({f6:e.p,ga:e.q,de:e.r}),dd:pr({f6:e.s,ga:e.t,de:e.u}),df:pr({f6:e.v,ga:e.w,de:e.x})})},nt=v(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,$=u;return{f6:a.f6*$.f6+a.ga*$.ga+a.de*$.de,ga:a.f6*l.f6+a.ga*l.ga+a.de*l.de,de:a.f6*i.f6+a.ga*i.ga+a.de*i.de}}),Kl=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=a.f6-i.f6,l=a.ga-i.ga,u=a.de-i.de,$=n.df,s=$,d=n.dd,m=d,f=n.dc,h=f;return{f6:c*h.f6+l*h.ga+u*h.de,ga:c*m.f6+l*m.ga+u*m.de,de:c*s.f6+l*s.ga+u*s.de}}),eu=v(function(e,r){return{cI:o(Kl,e,on(r)),dc:o(nt,e,jr(r)),dd:o(nt,e,Nr(r)),df:o(nt,e,Er(r))}}),Ca=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(De,n,a)}),aa=v(function(e,r){return q(e,r)<0?e:r}),$e=v(function(e,r){var n=e,a=r;return o(aa,n,a)}),kb=v(function(e,r){var n=Ca(r),a=Ca(e);return{d1:o(ce,a.d1,n.d1),d2:o(ce,a.d2,n.d2),d3:o(ce,a.d3,n.d3),d4:o($e,a.d4,n.d4),d5:o($e,a.d5,n.d5),d6:o($e,a.d6,n.d6)}}),Je=function(e){var r=e;return r},Lb=function(e){var r=e;return B(r.f6,r.ga,r.de)},wn=v(function(e,r){var n=e,a=r;return a+n}),zb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ra(ie(a)),c=ra(ie(n)),l=ra(ie(t)),u=Lb(r),$=u.a,s=u.b,d=u.c;return{d1:o(wn,c,$),d2:o(wn,i,s),d3:o(wn,l,d),d4:o(gr,c,$),d5:o(gr,i,s),d6:o(gr,l,d)}}),Hi=F(function(e,r,n,a){var t=n.eQ,i=2*n.fa*r,c=2*n.e9*r,l=2*n.e8*r,u=t.de*r,$=t.ga*r,s=t.f6*r,d=Je(Er(e)),m=J(l*d.f6)+J(c*d.ga)+J(i*d.de),f=Je(Nr(e)),h=J(l*f.f6)+J(c*f.ga)+J(i*f.de),g=Je(jr(e)),w=J(l*g.f6)+J(c*g.ga)+J(i*g.de),x=o(zb,B(w,h,m),o(Kl,e,p(Ft,s,$,u)));if(a.$)return re(x);var _=a.a;return re(o(kb,_,x))}),jt=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 1:var c=t.a,l=C(Hi,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 2:var f=e,h=r,g=n,w=i;e=f,r=h,n=g,a=w;continue e;case 3:var c=t.a,l=C(Hi,e,r,c,n),f=e,h=r,g=l,w=i;e=f,r=h,n=g,a=w;continue e;case 4:var u=t.a,f=e,h=r,g=C(jt,e,r,n,u),w=i;e=f,r=h,n=g,a=w;continue e;default:var $=t.a,s=t.b,d=o(eu,Pb($),e),m=r*$.b2,f=e,h=r,g=C(jt,d,m,n,b([s])),w=i;e=f,r=h,n=g,a=w;continue e}}else return n}),un=Q$,vn=K$,$n=ef,ru=function(e){return{$:4,a:e}},Tb=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(M,n,r);e=t,r=i;continue e}else return r}),En=function(e){return ru(o(Tb,e,P))},Mb={dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:0,I:0,J:0,b2:1},Ui=Oo({bd:Zr,cw:0,cW:Io,bs:rn,db:255,bA:Zr,bB:Zr}),Db=function(e){var r=e,n=o(De,J(r.f6),o(De,J(r.ga),J(r.de)));if(n){var a=r.de/n,t=r.ga/n,i=r.f6/n,c=wr(i*i+t*t+a*a);return c*n}else return He},Le={bF:0,eP:!1,bM:0,cR:0,b0:0,c6:0,f6:0,ga:0,de:0},Ge=v(function(e,r){var n=e,a=r;return tr({dM:n.f6,dN:n.b0,dO:a.f6,dP:a.b0,dQ:n.ga,dR:n.bM,dS:a.ga,dT:a.bM,dU:n.de,dV:n.bF,dW:a.de,dX:a.bF,dY:n.c6,dZ:n.cR,d_:a.c6,d$:a.cR})}),bn=z({bi:o(Ge,Le,Le),bR:o(Ge,Le,Le),bS:o(Ge,Le,Le),bT:o(Ge,Le,Le)},C(ln,0,0,0,0)),nu=514,au=function(e){var r=e._,n=e.X,a=e.W;return C(Go,515,r,n,a)},tu=240,Ab=b([au({W:1,X:0,_:!0}),Uo({bd:xe,cw:tu,cW:0,bs:nu,db:0,bA:xe,bB:xe}),Jo]),Bb=v(function(e,r){var n=e,a=r.fx,t=r.e5,i=r.eI,c=ie(a),l=c,u=ie(t),$=u,s=n.cU;if(s.$){var m=s.a;return yt($)?tr({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:0,dX:-1,dY:0,dZ:0,d_:0,d$:1}):tr({dM:2/(i*m),dN:0,dO:0,dP:0,dQ:0,dR:2/m,dS:0,dT:0,dU:0,dV:0,dW:-2/($-l),dX:-($+l)/($-l),dY:0,dZ:0,d_:0,d$:1})}else{var d=s.a;return yt($)?tr({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-1,dX:-2*l,dY:0,dZ:0,d_:-1,d$:0}):tr({dM:1/(i*d),dN:0,dO:0,dP:0,dQ:0,dR:1/d,dS:0,dT:0,dU:0,dV:0,dW:-($+l)/($-l),dX:-2*$*l/($-l),dY:0,dZ:0,d_:-1,d$:0})}}),Un=v(function(e,r){return(1&e>>r)===1?0:1}),Fb=function(e){return b([au({W:1,X:0,_:!0}),Uo({bd:xe,cw:tu,cW:e,bs:nu,db:0,bA:xe,bB:xe}),Jo])},Vb=y(function(e,r,n){return Oe(o(ee,function(a){var t=a<<4,i=C(ln,o(Un,a,0),o(Un,a,1),o(Un,a,2),o(Un,a,3));return p(rr,e,z(r,i),Fb(t))},o(Fr,1,o(Fn,2,n)-1)))}),Xr=function(e){var r=e;return r},Rb=$f,ou=Ll,iu=xo,Eb={cI:ar,dc:ou,dd:iu,df:zo},Na=function(e){var r=e;return r},jb=function(e){var r=Na(on(e)),n=Je(Er(e)),a=Je(Nr(e)),t=Je(jr(e));return tr({dM:t.f6,dN:a.f6,dO:n.f6,dP:r.f6,dQ:t.ga,dR:a.ga,dS:n.ga,dT:r.ga,dU:t.de,dV:a.de,dW:n.de,dX:r.de,dY:0,dZ:0,d_:0,d$:1})},Nb=v(function(e,r){var n=r;return jb(o(eu,n,e))}),Wb=function(e){return o(Nb,Eb,e)},Gb=function(e){var r=e;return r.da},Ib=function(e){var r=e;return jr(r)},Hb=function(e){var r=e;return Nr(r)},Ub=function(e){var r=Gb(e.eN),n=$r({cI:Mt(r),dc:Ib(r),dd:Hb(r),df:br(At(r))}),a=En(e.aS),t=a,i=C(jt,n,1,Y,b([t]));if(i.$===1)return P;var c=i.a,l=Wb(r),u=o(X,.99,o(ce,ie(e.aM),Dt(Zl(c)))),$=Ql(c),s=$.a,d=$.b,m=$.c,f=Db(p(ko,s,d,m)),h=o(X,1.01,o(wn,f,Dt(Xl(c)))),g=o(Bb,e.eN,{eI:e.eI,e5:h,fx:u}),w=Rb(g).d$,x=w?Je(br(At(r))):Xr(Mt(r)),_=function(){var ge=e.b5;switch(ge.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var he=ge.a;return z(3,he);case 4:var he=ge.a;return z(4,he);default:return z(5,0)}}(),k=_.a,A=_.b,G=e.bK,j=G,E=o(Wo,j,e.b7),O=E,I=tr({dM:0,dN:x.f6,dO:un(O),dP:e.eu,dQ:0,dR:x.ga,dS:vn(O),dT:na(f),dU:0,dV:x.de,dW:$n(O),dX:k,dY:0,dZ:w,d_:0,d$:A}),R=we(Ul,I,l,g,Mb,t,{M:P,U:P,fP:P}),Q=e.bQ;switch(Q.$){case 0:var ae=Q.a;return Oe(b([p(rr,R.M,z(ae,et),Ir),p(rr,R.U,bn,Ir)]));case 1:var ae=Q.a;return Oe(b([p(rr,R.M,bn,Ir),b([Ui]),p(rr,R.fP,ae.bi,Jl),b([Yl(0)]),p(rr,R.M,z(ae,et),Ab),p(rr,R.U,bn,Ir)]));default:var Se=Q.a,Ce=Q.b;return Oe(b([p(rr,R.M,z(Ce,et),Ir),b([Ui]),o(sb,R.fP,Se),p(Vb,R.M,Ce,kr(Se)),p(rr,R.U,bn,Ir)]))}},Ob=function(e){return o(Mr,"width",Fe(e))},Jb=v(function(e,r){var n=b([Ep(1),Ip(0),Mp(!0),C(Fp,0,0,0,0)]),a=function(){var k=e.b8;switch(k.$){case 0:return B(n,"0",1);case 1:return B(o(M,Ap,n),"1",1);default:var A=k.a;return B(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aN,u=l.a,$=l.b,s=Ni($),d=o(fe,"height",Fe(s)+"px"),m=Ni(u),f=m/s,h=o(No,function(k){return Ub({eI:f,eN:e.eN,aM:e.aM,aS:k.aS,bK:k.bK,bQ:k.bQ,eu:c,b5:k.b5,b7:k.b7})},r),g=o(fe,"width",Fe(m)+"px"),w=e.aL,x=w,_=Up(x);return p(Wp,"div",b([o(fe,"padding","0px"),g,d]),b([z(i,p(qp,t,b([Ob(je(m*c)),jp(je(s*c)),g,d,o(fe,"display","block"),o(fe,"background-color",_)]),h))]))}),qb=function(e){return o(Jb,{b8:e.b8,aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN},b([{aS:e.aS,bK:e.bK,bQ:e.bQ,b5:e.b5,b7:e.b7}]))},cu=function(e){return e},Oi=cu({f6:.31271,ga:.32902}),Yb=v(function(e,r){var n=e,a=Je(r.e_),t=a.f6,i=a.ga,c=a.de,l=o(Wo,r.cl,r.ce),u=l;return{bF:$n(u),eP:n,bM:vn(u),cR:0,b0:un(u),c6:1,f6:-t,ga:-i,de:-c}}),Zb=function(e){return e},Xb=function(e){return Zb(1.2*o(Fn,2,e))},at=function(e){return e},Qb={$:0},Kb=Qb,lu=function(e){return e},Ji=function(e){var r=e;return r},e1=function(e){e:for(;;){if(Pr(e.fk,He)&&Pr(e.fl,He))return Le;if(o(Sl,ie(e.fk),ie(e.fl))){var r={ce:e.ce,fk:e.fl,fl:e.fk,eA:br(e.eA)};e=r;continue e}else{var n=J(Ji(e.fl)/en),a=J(Ji(e.fk)/en),t=Je(e.eA),i=t.f6,c=t.ga,l=t.de,u=o(Wo,lu(1),e.ce),$=u;return{bF:a*$n($),eP:!1,bM:a*vn($),cR:n/a,b0:a*un($),c6:3,f6:i,ga:c,de:l}}}},qi=function(e){return e1({ce:e.ce,fk:e.cl,fl:He,eA:e.eA})},r1=function(e){var r=e;return r},uu=function(e){var r=p(To,1667,25e3,r1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return cu({f6:n,ga:a})},vu=function(e){return e},n1=uu(vu(12e3)),a1=uu(vu(5600)),t1=function(e){return{$:2,a:e}},o1=function(e){return t1(e)},i1=v(function(e,r){return{$:2,a:e,b:r}}),$u=function(e){return{$:0,a:e}},On=function(e){var r=e;return r},c1=function(e){var r=e;return r.eP},l1=$u(bn.a),u1=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(M,a,i),c):z(i,o(M,a,c))});return p(_r,n,z(P,P),r)}),v1=function(e){var r=e;return tr({dM:r.f6,dN:r.b0,dO:0,dP:0,dQ:r.ga,dR:r.bM,dS:0,dT:0,dU:r.de,dV:r.bF,dW:0,dX:0,dY:r.c6,dZ:r.cR,d_:0,d$:0})},$1=K(function(e,r,n,a,t,i,c,l){var u=o(u1,c1,b([On(e),On(r),On(n),On(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,h=f.a,g=f.b,w=g.a,x=g.b,_=x.a;return o(i1,o(ee,v1,$),{bi:o(Ge,m,h),bR:o(Ge,w,_),bS:o(Ge,t,i),bT:o(Ge,c,l)})}else return l1}else return $u({bi:o(Ge,e,r),bR:o(Ge,n,a),bS:o(Ge,t,i),bT:o(Ge,c,l)})}),f1=y(function(e,r,n){return Ta($1,e,r,n,Le,Le,Le,Le,Le)}),s1=function(e){var r=o(Yb,zp(e.fP),{ce:a1,e_:e.fX,cl:at(8e4)}),n=qi({ce:n1,cl:at(2e4),eA:e.eA}),a=qi({ce:Oi,cl:at(15e3),eA:br(e.eA)}),t=p(f1,r,n,a);return qb({b8:o1(e.ci),aL:e.aL,eN:e.eN,aM:e.aM,aN:e.aN,aS:e.aS,bK:Xb(15),bQ:t,b5:Kb,b7:Oi})},fu=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),d1=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),su=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),du=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),m1=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),p1=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),b1=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),qo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(b1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(fu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(d1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(su,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(p1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(du,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(m1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Yo={$:0},g1=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Ca(c(u)),d=o($e,s.d4,e),m=o(ce,s.d1,r),f=o($e,s.d5,n),h=o(ce,s.d2,a),g=o($e,s.d6,t),w=o(ce,s.d3,i),x=c,_=$;e=d,r=m,n=f,a=h,t=g,i=w,c=x,l=_;continue e}else return{d1:r,d2:a,d3:i,d4:e,d5:n,d6:t}}),h1=y(function(e,r,n){var a=Ca(e(r));return Ta(g1,a.d4,a.d1,a.d5,a.d2,a.d6,a.d3,e,n)}),tt=v(function(e,r){var n=e,a=r;return q(a,n)<1}),mu=function(e){return o(tt,e.d1,e.d4)&&o(tt,e.d2,e.d5)&&o(tt,e.d3,e.d6)?e:{d1:o(ce,e.d4,e.d1),d2:o(ce,e.d5,e.d2),d3:o(ce,e.d6,e.d3),d4:o($e,e.d4,e.d1),d5:o($e,e.d5,e.d2),d6:o($e,e.d6,e.d3)}},zn=function(e){var r=e;return r},pu=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=xr(n),c=Sr(n),l=Cr(n),u=xr(a),$=Sr(a),s=Cr(a),d=xr(t),m=Sr(t),f=Cr(t);return mu({d1:o(ce,i,o(ce,u,d)),d2:o(ce,c,o(ce,$,m)),d3:o(ce,l,o(ce,s,f)),d4:o($e,i,o($e,u,d)),d5:o($e,c,o($e,$,m)),d6:o($e,l,o($e,s,f))})},bu=rf,ze=function(e){return bu(Na(e))},gu=function(e){var r=e;return r},Wa=function(e){return bu(gu(e))},_1=v(function(e,r){var n=e,a=r,t=o(De,J(a.f6),o(De,J(a.ga),J(a.de)));if(t){var i=a.de/t,c=a.ga/t,l=a.f6/t,u=wr(l*l+c*c+i*i);return{f6:n*l/u,ga:n*c/u,de:n*i/u}}else return Cl}),w1=_1(lu(1)),hu=y(function(e,r,n){var a=o(wa,r,n),t=o(wa,e,r);return w1(o(wo,a,t))}),y1=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Wa(p(hu,n,a,t));return B({n:i,b_:ze(n)},{n:i,b_:ze(a)},{n:i,b_:ze(t)})},x1=v(function(e,r){return{$:2,a:e,b:r}}),_u=x1({dq:3,dA:0,d8:4}),S1=function(e){if(e.b){var r=e.a,n=e.b,a=_u(o(ee,y1,e)),t=p(h1,pu,r,n);return C(fu,t,e,a,0)}else return Yo},We=y(function(e,r,n){return B(e,r,n)}),wu=function(){var e=cr(1),r=cr(1),n=cr(1),a=o(X,-.5,e),t=o(X,-.5,r),i=o(X,-.5,n),c=p(se,i,t,a),l=o(X,.5,e),u=p(se,i,t,l),$=o(X,.5,r),s=p(se,i,$,a),d=p(se,i,$,l),m=o(X,.5,n),f=p(se,m,t,a),h=p(se,m,$,a),g=p(se,m,t,l),w=p(se,m,$,l);return qo(S1(b([p(We,c,h,f),p(We,c,s,h),p(We,u,g,w),p(We,u,w,d),p(We,f,h,w),p(We,f,w,g),p(We,c,d,s),p(We,c,u,d),p(We,c,f,g),p(We,c,g,u),p(We,s,w,h),p(We,s,d,w)])))}(),Jn={$:0},C1=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),P1=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Wa(p(hu,u,l,c)),s={n:$,b_:ze(u)},d={n:$,b_:ze(l)},m={n:$,b_:ze(c)};return o(M,s,o(M,d,o(M,m,n)))}),k1=ur,Zo=function(e){var r=e;return r.D},L1=F(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return re(p(e,t,i,c))}),Xo=function(e){var r=e;return r.ai},ot=v(function(e,r){return o(Tl,e,Xo(r))}),z1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(L1,y(function(c,l,u){return B(c,l,u)}),o(ot,a,e),o(ot,t,e),o(ot,i,e))};return o(pl,r,Zo(e))},T1=y(function(e,r,n){return e(r(n))}),M1=v(function(e,r){return!o(nl,o(T1,Ts,e),r)}),D1=v(function(e,r){return p(_r,v(function(n,a){return e(n)?o(M,n,a):a}),P,r)}),yu=v(function(e,r){var n=Ml(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&q(i,n)<0&&c>=0&&q(c,n)<0&&l>=0&&q(l,n)<0};return o(M1,a,r)?{D:r,ai:e}:{D:o(D1,a,r),ai:e}}),A1=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=A1({dq:1,dA:3,d8:4}),ta=v(function(e,r){var n=Xr(r),a=Xr(e);return z(B(a.f6,a.ga,a.de),B(n.f6,n.ga,n.de))}),Yi=p(Vn,0,0,0),it=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(vl,o(ta,e,r),t);if($.$){var d={n:Yi,b_:ze(r)},m={n:Yi,b_:ze(e)},f=u+1,h=u;return B(o(M,B(n,h,f),o(M,B(n,f,a),c)),o(M,d,o(M,m,l)),u+2)}else{var s=$.a;return B(o(M,B(n,s,a),c),l,u)}}),B1=be(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,h=a+1,g=a,w=e,x=r,_=$,k=a+3,A=we(it,s,m,f,g,r,we(it,d,s,h,f,r,we(it,m,d,g,h,r,t)));e=w,r=x,n=_,a=k,t=A;continue e}else{var G=t,j=G.a,E=G.b;return z(j,Me(E))}}),F1=be(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,h=n+1,g=n,w=p(Kn,o(ta,m,s),f,p(Kn,o(ta,s,d),h,p(Kn,o(ta,d,m),g,t))),x=o(M,B(g,h,f),a),_=e,k=$,A=n+3,G=x,j=w;e=_,r=k,n=A,a=G,t=j;continue e}else return B(a,t,n)}),Dr=y(function(e,r,n){var a=z1(n),t=p(_r,P1(r),P,a),i=S(F1,r,a,0,P,k1),c=i.a,l=i.b,u=i.c,$=S(B1,r,l,a,0,B(c,P,u)),s=$.a,d=$.b,m=xl(d)?t:le(t,d);return p(C1,e,o(yu,Ea(m),s),o(jn,m,s))}),Nt=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Fr,0,kr(e)-1)),ai:Ea(Oe(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},xu=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(ee,zn,r);return p(Dr,a,mr,Nt(n));case 2:var a=e.a,r=e.b,n=o(ee,zn,r);return p(Dr,a,mr,Nt(n));case 3:var a=e.a,t=e.b;return p(Dr,a,mr,t);case 4:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 5:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 6:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 7:var a=e.a,t=e.b;return p(Dr,a,function(i){return i.b_},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Zi=xu(wu),Su={$:0},L=Su,me=v(function(e,r){return{$:1,a:e,b:r}}),V1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bI"}},R1=1029,E1=function(e){return{$:5,a:e}},Cu=function(e){var r=e;return E1(r)},j1=Cu(R1),N1=1028,W1=Cu(N1),Te=y(function(e,r,n){return r===1?e?o(M,j1,n):o(M,W1,n):n}),Pu={src:`
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
    `,attributes:{position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ct=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){return S(ne,p(Te,l,a,d),Pu,V1,n,{bI:e,b:c,c:i,d:$,e:t,f:u})}))}),Qo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ay"}},ku={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},fr=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){return S(ne,p(Te,l,a,d),ku,Qo,n,{ay:e,b:c,c:i,d:$,e:t,f:u})}))}),Lu=v(function(e,r){return{$:3,a:e,b:r}}),G1={src:`
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
    `,attributes:{},uniforms:{constantColor:"ay",pointRadius:"bZ",sceneProperties:"e"}},zu={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bZ",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},I1=F(function(e,r,n,a){return o(Lu,n,K(function(t,i,c,l,u,$,s,d){return S(ne,d,zu,G1,a,{ay:e,b:c,c:i,bZ:r,d:$,e:t,f:u})}))}),Ko={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ga=nf,sr=be(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,$,s,d,m){return S(ne,p(Te,u,t,m),ku,Ko,a,{aQ:o(Ga,Nn(r),e),b:l,c,d:s,e:i,f:$})}))}),H1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",pointRadius:"bZ",sceneProperties:"e"}},U1=be(function(e,r,n,a,t){return o(Lu,a,K(function(i,c,l,u,$,s,d,m){return S(ne,m,zu,H1,t,{aQ:o(Ga,Nn(r),e),b:l,c,bZ:n,d:s,e:i,f:$})}))}),Tu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColor:"cx",sceneProperties:"e",viewMatrix:"f"}},Mu={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),Mu,Tu,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cx:e,b:c,c:i,d:$,e:t,f:u})}))}),Du={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColorTexture:"cy",normalMapTexture:"aZ",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},Au={src:`
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
    `,attributes:{normal:"n",position:"b_",tangent:"ew",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},O1=qe(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,$,s,d,m,f){var h=m.a,g=m.b;return S(ne,p(Te,$,i,f),Au,Du,t,{P:g,bi:h.bi,bR:h.bR,bS:h.bS,bT:h.bT,cy:e,b:u,c:l,aZ:r,d,e:c,a4:n,f:s})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cc",constantBaseColor:"cf",constantMetallic:"cg",constantRoughness:"ch",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallicTexture:"cC",normalMapTexture:"aZ",roughnessTexture:"c$",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},J1=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(me,u,K(function(d,m,f,h,g,w,x,_){var k=x.a,A=x.b;return S(ne,p(Te,h,s,_),Au,Bu,$,{cc:e,cf:r,cg:i,ch:a,P:A,bi:k.bi,bR:k.bR,bS:k.bS,bT:k.bT,cC:t,b:f,c:m,aZ:c,d:w,c$:n,e:d,a4:l,f:g})}))}}}}}}}}}}},Fu={src:`
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
    `,attributes:{},uniforms:{baseColor:"cb",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallic:"cB",roughness:"c_",sceneProperties:"e",viewMatrix:"f"}},Yn=qe(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,$,s,d,m,f){var h=m.a,g=m.b;return S(ne,p(Te,$,i,f),Mu,Fu,t,{cb:e,P:g,bi:h.bi,bR:h.bR,bS:h.bS,bT:h.bT,cB:n,b:u,c:l,d,c_:r,e:c,f:s})}))}),q1=function(e){return{$:0,a:e}},Xi=v(function(e,r){return{$:1,a:e,b:r}}),yn=v(function(e,r){if(r.$){var n=r.a.B;return z(n,1)}else return r.a,z(e,0)}),Y1=function(e){return C(ln,un(e),vn(e),$n(e),1)},ei=C(ln,0,0,0,0),oa=v(function(e,r){if(r.$){var a=r.a.B;return z(a,ei)}else{var n=r.a;return z(e,Y1(n))}}),Vu=v(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.B;return o(Xi,z(t,ei),o(yn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(Xi,o(oa,t,e),o(yn,t,r))}else{var a=n.a.a;return n.b.a,q1(a)}}),Z1=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Zn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),X1=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Q1=function(e){return o(Be,e,1)},Wt=o(Be,0,0),Hr=v(function(e,r){if(r.$){var a=r.a.B;return z(a,Wt)}else{var n=r.a;return z(e,Q1(n))}}),Ru=F(function(e,r,n,a){var t=C(X1,e,r,n,a);if(t.a.$){var u=t.a.a.B;return C(Zn,z(u,ei),o(Hr,u,r),o(Hr,u,n),o(yn,u,a))}else if(t.b.$){var u=t.b.a.B;return C(Zn,o(oa,u,e),z(u,Wt),o(Hr,u,n),o(yn,u,a))}else if(t.c.$){var u=t.c.a.B;return C(Zn,o(oa,u,e),o(Hr,u,r),z(u,Wt),o(yn,u,a))}else if(t.d.$){var u=t.d.a.B;return C(Zn,o(oa,u,e),o(Hr,u,r),o(Hr,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Z1,i,c,l)}}),K1={src:`
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
    `,attributes:{},uniforms:{backlight:"b9",colorTexture:"bI",sceneProperties:"e"}},lt=be(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,$,s,d,m){return S(ne,p(Te,u,t,m),Pu,K1,a,{b9:Nn(r),bI:e,b:l,c,d:s,e:i,f:$})}))}),Eu={src:`
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
    `,attributes:{normal:"n",position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},eg=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(Te,l,a,d),Eu,Du,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cy:e,b:c,c:i,aZ:e,d:$,e:t,a4:0,f:u})}))}),rg=Ht(function(e,r,n,a,t,i,c,l,u){return o(me,c,K(function($,s,d,m,f,h,g,w){var x=g.a,_=g.b;return S(ne,p(Te,m,u,w),Eu,Bu,l,{cc:e,cf:r,cg:i,ch:a,P:_,bi:x.bi,bR:x.bR,bS:x.bS,bT:x.bT,cC:t,b:d,c:s,aZ:e,d:h,c$:n,e:$,a4:0,f})}))}),Tn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),ng=function(e){var r=e;return p(Tn,r.d4,r.d1,.5)},ag=function(e){var r=e;return p(Tn,r.d5,r.d2,.5)},tg=function(e){var r=e;return p(Tn,r.d6,r.d3,.5)},og=function(e){return p(se,ng(e),ag(e),tg(e))},N=function(e){var r=Ql(e),n=r.a,a=r.b,t=r.c;return{eQ:Na(og(e)),e8:n/2,e9:a/2,fa:t/2}},ri=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return L;case 1:return L;case 2:return L;case 3:return L;case 4:return L;case 5:var t=r.a,c=r.c,a=r.d;return C(ct,l,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ct,l,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ct,l,N(t),c,a);case 8:return L;case 9:return L;default:return L}}else{var n=e.b.a;switch(r.$){case 0:return L;case 1:var t=r.a,c=r.c,a=r.d;return C(fr,n,N(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(fr,n,N(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(fr,n,N(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(fr,n,N(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(fr,n,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(fr,n,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(fr,n,N(t),c,a);case 8:var t=r.a,c=r.c;return C(fr,n,N(t),c,0);case 9:var t=r.a,c=r.c;return C(fr,n,N(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(I1,n,i,N(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,$=e.c;switch(r.$){case 0:return L;case 1:return L;case 2:return L;case 3:return L;case 4:return L;case 5:var t=r.a,c=r.c,a=r.d;return S(lt,l,$,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lt,l,$,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lt,l,$,N(t),c,a);case 8:return L;case 9:return L;default:return L}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return L;case 1:var t=r.a,c=r.c,a=r.d;return S(sr,u,$,N(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(sr,u,$,N(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(sr,u,$,N(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(sr,u,$,N(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(sr,u,$,N(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(sr,u,$,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(sr,u,$,N(t),c,a);case 8:var t=r.a,c=r.c;return S(sr,u,$,N(t),c,0);case 9:var t=r.a,c=r.c;return S(sr,u,$,N(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(U1,u,$,i,N(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Vu,s,j);if(d.$){var h=d.a,g=h.a;h.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return L;case 1:return L;case 2:return L;case 3:return L;case 4:return L;case 5:return L;case 6:var t=r.a,c=r.c,f=r.d;return C(eg,g,N(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(O1,g,x,_,N(t),c,f);case 8:return L;case 9:return L;default:return L}}else{var m=d.a;switch(r.$){case 0:return L;case 1:return L;case 2:var t=r.a,c=r.c,f=r.d;return C(qn,m,N(t),c,f);case 3:return L;case 4:var t=r.a,c=r.c,f=r.d;return C(qn,m,N(t),c,f);case 5:return L;case 6:var t=r.a,c=r.c,f=r.d;return C(qn,m,N(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(qn,m,N(t),c,f);case 8:return L;case 9:return L;default:return L}}default:e.a;var k=e.b,A=e.c,G=e.d,j=e.e,E=C(Ru,k,A,G,j);if(E.$){var Q=E.a,ae=Q.a,Se=Q.b,Ce=E.b,ge=Ce.a,he=Ce.b,Ze=E.c,Xe=Ze.a,Wr=Ze.b,Gr=E.d,x=Gr.a,_=Gr.b;switch(r.$){case 0:return L;case 1:return L;case 2:return L;case 3:return L;case 4:return L;case 5:return L;case 6:var t=r.a,c=r.c,a=r.d;return Ku(rg,ae,Se,ge,he,Xe,Wr,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return J1(ae)(Se)(ge)(he)(Xe)(Wr)(x)(_)(N(t))(c)(a);case 8:return L;case 9:return L;default:return L}}else{var O=E.a,I=E.b,R=E.c;switch(r.$){case 0:return L;case 1:return L;case 2:var t=r.a,c=r.c,a=r.d;return we(Yn,O,I,R,N(t),c,a);case 3:return L;case 4:var t=r.a,c=r.c,a=r.d;return we(Yn,O,I,R,N(t),c,a);case 5:return L;case 6:var t=r.a,c=r.c,a=r.d;return we(Yn,O,I,R,N(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(Yn,O,I,R,N(t),c,a);case 8:return L;case 9:return L;default:return L}}}}),ut=function(e){var r=e;return r.f6},vt=function(e){var r=e;return r.ga},$t=function(e){var r=e;return r.de},ig=function(e){var r=e,n=$t(r.df),a=vt(r.df),t=ut(r.df),i=$t(r.dd),c=vt(r.dd),l=ut(r.dd),u=$t(r.dc),$=vt(r.dc),s=ut(r.dc);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},cg=function(e){var r=Na(on(e)),n=Je(Er(e)),a=Je(Nr(e)),t=Je(jr(e));return{dC:ig(e),p:t.f6,q:t.ga,r:t.de,s:a.f6,t:a.ga,u:a.de,v:n.f6,w:n.ga,x:n.de,H:r.f6,I:r.ga,J:r.de,b2:1}},Ur=v(function(e,r){return{$:5,a:e,b:r}}),ju=v(function(e,r){var n=r;switch(n.$){case 0:return L;case 5:var a=n.a,t=n.b,i=o(Hl,a,e);return o(Ur,i,t);case 1:return o(Ur,e,n);case 3:return o(Ur,e,n);case 2:return o(Ur,e,n);default:return o(Ur,e,n)}}),Nu=v(function(e,r){return o(ju,cg(e),r)}),Ia=function(e){return{$:2,a:e}},lg=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eQ;return{eQ:{f6:n*i.f6,ga:a*i.ga,de:t*i.de},e8:n*r.e8,e9:a*r.e9,fa:t*r.fa}}),ug=of,vg=tf,Qi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=vg(a),h=f.f6,g=f.ga,w=f.de,x=f.eE,_=ug({eE:x,f6:h*s,ga:g*d,de:w*m});return Ta(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Gt=v(function(e,r){switch(r.$){case 0:return Su;case 5:var n=r.a,a=r.b;return o(Ur,n,o(Gt,e,a));case 1:var t=r.a,i=r.b;return o(me,o(lg,e,t),o(Qi,e,i));case 3:return r;case 2:var i=r.a;return Ia(o(Qi,e,i));default:var c=r.a;return ru(o(ee,Gt(e),c))}}),ni=v(function(e,r){var n=r;return o(Gt,e,n)}),ai={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Wu=7683,Gu=7682,$g=p(Ho,{cw:0,cW:0,db:15},{bd:xe,bs:rn,bA:xe,bB:Wu},{bd:xe,bs:rn,bA:xe,bB:Gu}),fg=p(Ho,{cw:0,cW:0,db:15},{bd:xe,bs:rn,bA:xe,bB:Gu},{bd:xe,bs:rn,bA:xe,bB:Wu}),ti=v(function(e,r){return e?o(M,fg,r):o(M,$g,r)}),sg={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},dg=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,$){return S(ne,o(ti,i,$),sg,ai,r,{b:t,c:a,d:l,e:n,b4:u,f:c})}))}else return Y},Pa=function(e){var r=dg(e);if(r.$)return L;var n=r.a;return Ia(n)},mg=F(function(e,r,n,a){var t=o(ri,n,wu),i=function(){var s=z(e,r);return s.a?s.b?En(b([t,Pa(Zi)])):t:s.b?Pa(Zi):L}(),c=Bo(a),l=c.a,u=c.b,$=c.c;return o(Nu,Ao(a),o(ni,B(l,u,$),i))}),pg=v(function(e,r){return C(mg,!0,!0,e,r)}),Iu=v(function(e,r){return{$:0,a:e,b:r}}),bg=function(e){var r=go(e),n=r.cV,a=r.ck,t=r.cd;return p(Vn,n,a,t)},gg=function(e){return o(Iu,0,Vt(bg(e)))},xn=function(e){var r=e;return xa(r)},hg=v(function(e,r){var n=e.b_,a=e.n;return o(M,{n:Wa(a),b_:ze(n)},r)}),_g=za(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=$n(l.b_),s=vn(l.b_),d=un(l.b_),m=o(aa,e,d),f=o(De,r,d),h=o(aa,n,s),g=o(De,a,s),w=o(aa,t,$),x=o(De,i,$),_=u;e=m,r=f,n=h,a=g,t=w,i=x,c=_;continue e}else return mu({d1:r,d2:a,d3:i,d4:e,d5:n,d6:t})}),Hu=v(function(e,r){var n=$n(e.b_),a=vn(e.b_),t=un(e.b_);return Ut(_g,t,t,a,a,n,n,r)}),wg=function(e){var r=p(Fc,hg,P,Xo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Zo(e)),i=o(Hu,n,a);return C(su,i,e,t,0)}else return Yo},Ki=v(function(e,r){var n=e,a=r,t=n.dd,i=t,c=n.dc,l=c;return{f6:a.f6*l.f6+a.ga*i.f6,ga:a.f6*l.ga+a.ga*i.ga,de:a.f6*l.de+a.ga*i.de}}),ka=function(e){var r=e;return Sa(r)},It=function(e){return Ln(2*en*e)},yg=mr,ec=yg({cI:ar,dc:ou,dd:iu}),Uu=function(){var e=72,r=o(kl,e,It(1)),n=cr(1),a=qr(Lo),t=qr(Po),i=cr(1),c=o(X,.5,i),l=p(se,He,He,c),u=o(X,-.5,i),$=p(se,He,He,u),s=function(f){var h=o(X,f,r),g=qr(o(Ki,ec,Bt(h))),w=o(X,xn(h),n),x=o(X,ka(h),n),_=p(se,w,x,c),k=p(se,w,x,u),A=o(Kr,e,f+1),G=o(X,A,r),j=qr(o(Ki,ec,Bt(G))),E=o(X,xn(G),n),O=o(X,ka(G),n),I=p(se,E,O,u),R=p(se,E,O,c);return b([B({n:t,b_:$},{n:t,b_:I},{n:t,b_:k}),B({n:g,b_:k},{n:j,b_:I},{n:j,b_:R}),B({n:g,b_:k},{n:j,b_:R},{n:g,b_:_}),B({n:a,b_:l},{n:a,b_:_},{n:a,b_:R})])},d=o(ee,s,o(Fr,0,e-1)),m=Nt(Oe(d));return qo(wg(m))}(),rc=xu(Uu),xg=function(e){var r=So(e),n=yo(r),a=n.a,t=n.b;return $r({cI:Co(e),dc:a,dd:t,df:r})},Sg=F(function(e,r,n,a){var t=xg(jo(a)),i=o(ri,n,Uu),c=function(){var d=z(e,r);return d.a?d.b?En(b([i,Pa(rc)])):i:d.b?Pa(rc):L}(),l=Gl(a),u=l,$=Wl(a),s=$;return o(Nu,t,o(ni,B(u,u,s),c))}),Cg=v(function(e,r){return C(Sg,!0,!0,e,r)}),nc={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},ac={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},gn=function(e){var r=zn(e),n=r.a,a=r.b,t=r.c,i=Xr(n),c=Xr(a),l=Xr(t);return tr({dM:i.f6,dN:c.f6,dO:l.f6,dP:0,dQ:i.ga,dR:c.ga,dS:l.ga,dT:0,dU:i.de,dV:c.de,dW:l.de,dX:0,dY:0,dZ:0,d_:0,d$:0})},Xn=_u(b([B({c5:0},{c5:1},{c5:2})])),Pg=v(function(e,r){var n=pu(r),a=N(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,L;var t=e.b.a;return o(me,a,K(function(_,k,A,G,j,E,O,I){return S(ne,p(Te,G,0,I),nc,Qo,Xn,{ay:t,b:A,c:k,d:E,e:_,bx:gn(r),f:j})}));case 1:if(e.b.$)return e.a,L;var i=e.b.a,c=e.c;return o(me,a,K(function(_,k,A,G,j,E,O,I){return S(ne,p(Te,G,0,I),nc,Ko,Xn,{aQ:o(Ga,Nn(c),i),b:A,c:k,d:E,e:_,bx:gn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Vu,l,f);if(u.$)return L;var $=u.a;return o(me,a,K(function(_,k,A,G,j,E,O,I){var R=O.a,Q=O.b;return S(ne,p(Te,G,0,I),ac,Tu,Xn,{P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cx:$,b:A,c:k,d:E,e:_,bx:gn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,h=C(Ru,s,d,m,f);if(h.$)return L;var g=h.a,w=h.b,x=h.c;return o(me,a,K(function(_,k,A,G,j,E,O,I){var R=O.a,Q=O.b;return S(ne,p(Te,G,0,I),ac,Fu,Xn,{cb:g,P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cB:x,b:A,c:k,d:E,c_:w,e:_,bx:gn(r),f:j})}))}}),kg=function(){var e=b([{a3:o(Be,0,1)},{a3:o(Be,1,1)},{a3:o(Be,2,1)},{a3:o(Be,0,-1)},{a3:o(Be,1,-1)},{a3:o(Be,2,-1)}]),r=b([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(jn,e,r)}(),Lg={src:`
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
    `,attributes:{triangleShadowVertex:"a3"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",triangleVertexPositions:"bx",viewMatrix:"f"}},tc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ti,t,u),Lg,ai,kg,{b:a,c:n,d:c,e:r,b4:l,bx:gn(e),f:i})}))},zg=F(function(e,r,n,a){var t=o(Pg,n,a),i=z(e,r);return i.a?i.b?En(b([t,tc(a)])):t:i.b?tc(a):L}),Tg=v(function(e,r){return C(zg,!0,!0,e,r)}),Mg=v(function(e,r){var n=Cr(r),a=Cr(e),t=Sr(r),i=Sr(e),c=xr(r),l=xr(e);return{d1:o(ce,l,c),d2:o(ce,i,t),d3:o(ce,a,n),d4:o($e,l,c),d5:o($e,i,t),d6:o($e,a,n)}}),Dg=function(e){var r=Fo(e),n=r.a,a=r.b;return o(Mg,n,a)},oc={src:`
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
    `,attributes:{lineSegmentVertex:"dL"},uniforms:{lineSegmentEndPoint:"dJ",lineSegmentStartPoint:"dK",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ag=v(function(e,r){return{$:1,a:e,b:r}}),Bg=Ag({dq:2,dA:0,d8:1}),ic=Bg(b([z({dL:0},{dL:1})])),Fg=v(function(e,r){var n=Dg(r),a=N(n),t=Fo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,L;var l=e.b.a;return o(me,a,K(function($,s,d,m,f,h,g,w){return S(ne,w,oc,Qo,ic,{ay:l,dJ:ze(c),dK:ze(i),b:d,c:s,d:h,e:$,f})}));case 1:if(e.b.$)return L;var l=e.b.a,u=e.c;return o(me,a,K(function(s,d,m,f,h,g,w,x){return S(ne,x,oc,Ko,ic,{aQ:o(Ga,Nn(u),l),dJ:ze(c),dK:ze(i),b:m,c:d,d:g,e:s,f:h})}));case 2:return L;default:return L}}),Vg=v(function(e,r){return o(Fg,e,r)}),cc=v(function(e,r){var n=e,a=r;return n/a}),Rg=be(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(M,i,t);if(Pr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),lc=v(function(e,r){return e<1?P:S(Rg,0,e,e,r,P)}),Eg=v(function(e,r){var n=e.b_,a=e.n,t=e.L,i=t,c=i.a,l=i.b;return o(M,{n:Wa(a),b_:ze(n),L:o(Be,c,l)},r)}),jg=function(e){var r=p(Fc,Eg,P,Xo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Zo(e)),i=o(Hu,n,a);return C(du,i,e,t,0)}else return Yo},Ou=v(function(e,r){var n=e,a=r,t=xa(a);return{f6:t*xa(n),ga:t*Sa(n),de:Sa(a)}}),Ng=function(){var e=cr(1),r=72,n=o(Fr,0,r-1),a=o(lc,r,o(Tn,He,It(1))),t=io(r/2),i=o(Fr,0,t-1),c=o(lc,t,o(Tn,pn(90),pn(-90))),l=Ea(Oe(o(ee,function(s){return o(ee,function(d){return{n:qr(o(Ou,s,d)),b_:p(se,o(X,xn(d)*xn(s),e),o(X,xn(d)*ka(s),e),o(X,ka(d),e)),L:z(o(cc,s,It(1)),o(cc,o(wn,pn(90),d),pn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Oe(o(ee,function(s){return Oe(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),h=o(u,s+1,d+1),g=o(u,s,d+1);return b([B(g,h,m),B(g,m,f)])},i))},n));return qo(jg(o(yu,l,$)))}(),La=72,Qn=2*La,Wg=v(function(e,r){e:for(;;){var n=Qn+1,a=o(Kr,Qn,2*e+3),t=o(Kr,Qn,2*e+2),i=2*e+1,c=2*e,l=Qn,u=o(M,B(l,c,t),o(M,B(c,a,t),o(M,B(c,i,a),o(M,B(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),Gg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Ig=v(function(e,r){e:for(;;){var n=p(Gg,0,2*en,e/La),a={bD:n,bW:0,b1:1},t={bD:n,bW:1,b1:1},i=o(M,a,o(M,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Hg=function(){var e=o(Ig,La-1,b([{bD:0,bW:0,b1:0},{bD:0,bW:1,b1:0}])),r=o(Wg,La-1,P);return o(jn,e,r)}(),Ug={src:`
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
    `,attributes:{angle:"bD",offsetScale:"bW",radiusScale:"b1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},uc=function(e){return Ia(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ti,!0,u),Ug,ai,Hg,{ay:p(Vn,0,0,1),b:a,c:n,d:c,e:r,b4:l,f:i})}))},Og=function(e){var r=gu(e);return{dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:r.f6,I:r.ga,J:r.de,b2:1}},Jg=v(function(e,r){return o(ju,Og(e),r)}),qg=F(function(e,r,n,a){var t=o(ri,n,Ng),i=function(){var u=z(e,r);return u.a?u.b?En(b([t,uc()])):t:u.b?uc():L}(),c=Ro(a),l=c;return o(Jg,o(wa,ar,Vo(a)),o(ni,B(l,l,l),i))}),Yg=v(function(e,r){return C(qg,!0,!0,e,r)}),Zg=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Xg=be(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Qg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Iu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Zg,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(zl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(Xg,n,a,t,i,c)}},Kg=Qg,Ju=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(pg,t,r)]);case 1:var t=e.a,n=e.b;return b([o(Tg,t,n)]);case 3:var t=e.a,a=e.b;return b([o(Yg,Kg(t),a)]);case 2:var t=e.a,i=e.b;return b([o(Cg,t,i)]);case 4:var c=e.a,l=e.b;return b([o(Vg,gg(c),l)]);default:var u=e.a;return o(No,Ju,u)}},e3=function(e){return o(No,Ju,e)},r3=v(function(e,r){return s1({aL:kp(e.eK),eN:e.eN,aM:Lp(.5),ci:e.ci,aN:z(ji(je(e.b3.f4)),ji(je(e.b3.fc))),aS:e3(r),fP:!0,fX:o(Ou,Ln(e.fW),Ln(e.fY)),eA:zo})}),n3=v(function(e,r){return o(r3,{eK:p(Pp,46,46,46),eN:Pl,ci:e.ci,b3:e.b3,fW:-Ri(15),fY:-Ri(45)},b([o(Cp,e,r)]))}),a3=v(function(e,r){return o(U,b([H("w-full")]),b([o(U,b([H("absolute p-4 text-white80"),H("grid place-items-center w-full")]),b([o(U,P,b([vr("Swipe or press left/right arrow keys")]))])),o(n3,e,r)]))}),t3=p(Bm,a3,J0,Hm);const o3={Main:{init:t3(o(D,function(e){return Ae({fj:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Ae({eS:c,ci:i,dp:t,dE:a,bn:n,b3:r,f3:e})},o(T,"clock",ve))},o(T,"devicePixelRatio",ve))},o(T,"dt",ve))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Ae({eG:d,eU:s,$7:$,e$:u,dF:l,fI:c,eo:i,fQ:t,ez:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",da(kn)))},o(T,"left",Z))},o(T,"pressedKeys",da(kn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Ae({$7:$,dB:u,fs:l,fM:c,fN:i,ez:t,f6:a,ga:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ve))},o(T,"y",ve))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Ae({fc:n,f4:r})},o(T,"height",ve))},o(T,"width",ve))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Ae({eX:r,eY:e})},o(T,"deltaX",ve))},o(T,"deltaY",ve)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},i3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const h=f/1e3,g=h-V.clock;g<.009||(V.dt=g,V.clock=h,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},c3=()=>{ft("pointerdown"),ft("wheel"),ft("keydown")},ft=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},l3=o3.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});c3();i3(l3);
