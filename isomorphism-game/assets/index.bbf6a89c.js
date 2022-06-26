const Dd=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Dd();function ra(e,r,n){return n.a=e,n.f=r,n}function v(e){return ra(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return ra(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function re(e){return ra(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function cr(e){return ra(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Er(e){return ra(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function _o(e){return ra(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function Ie(e){return ra(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return e(r,n,t,i,o,c,l,$)}}}}}}}})}function gl(e){return ra(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(f){return e(r,n,t,i,o,c,l,$,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function s(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function N(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function pr(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function bl(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function Yt(e,r,n,t,i,o,c,l,$){return e.a===8?e.f(r,n,t,i,o,c,l,$):e(r)(n)(t)(i)(o)(c)(l)($)}function Nd(e,r,n,t,i,o,c,l,$,f){return e.a===9?e.f(r,n,t,i,o,c,l,$,f):e(r)(n)(t)(i)(o)(c)(l)($)(f)}var Id=[];function Ed(e){return e.length}var Bd=T(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Fd=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,w(n,r)}),jd=v(function(e,r){return r[e]});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});T(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var Ad=T(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Vd()),r});function Vd(e){return"<internals>"}function ot(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function me(e,r){for(var n,t=[],i=Dc(e,r,0,t);i&&(n=t.pop());i=Dc(n.a,n.b,0,t));return i}function Dc(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ot(5),!1;if(n>100)return t.push(w(e,r)),!0;e.$<0&&(e=It(e),r=It(r));for(var i in e)if(!Dc(e[i],r[i],n+1,t))return!1;return!0}v(me);v(function(e,r){return!me(e,r)});function ge(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ge(e.a,r.a))||(n=ge(e.b,r.b))?n:ge(e.c,r.c);for(;e.b&&r.b&&!(n=ge(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ge(e,r)<0});v(function(e,r){return ge(e,r)<1});v(function(e,r){return ge(e,r)>0});v(function(e,r){return ge(e,r)>=0});var Jd=v(function(e,r){var n=ge(e,r);return n<0?lf:n?Vh:cf}),qt=0;function w(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function F(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=_n(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=_n(e.a,r);return n}var M={$:0};function _n(e,r){return{$:1,a:e,b:r}}var Rd=v(_n);function u(e){for(var r=M,n=e.length;n--;)r=_n(e[n],r);return r}function yo(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Hd=T(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)});re(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(s(e,r.a,n.a,t.a));return u(i)});cr(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return u(o)});Er(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(N(e,r.a,n.a,t.a,i.a,o.a));return u(c)});var Gd=v(function(e,r){return u(yo(r).sort(function(n,t){return ge(e(n),e(t))}))});v(function(e,r){return u(yo(r).sort(function(n,t){var i=a(e,n,t);return i===cf?0:i===lf?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Wd=v(Math.pow);v(function(e,r){return r%e});var Od=v(function(e,r){var n=r%e;return e===0?ot(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ud=Math.PI,Yd=Math.cos,qd=Math.sin,Zd=Math.tan,Xd=Math.acos,Qd=v(Math.atan2);function Kd(e){return e}function ep(e){return e===1/0||e===-1/0}var rp=Math.ceil,np=Math.floor,ap=Math.round,tp=Math.sqrt,r$=Math.log,ip=isNaN;function op(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var cp=v(function(e,r){return e+r});function lp(e){var r=e.charCodeAt(0);return isNaN(r)?U:O(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}v(function(e,r){return e+r});function up(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function $p(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}T(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var vp=T(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),fp=v(function(e,r){return r.split(e)}),mp=v(function(e,r){return r.join(e)}),sp=T(function(e,r,n){return n.slice(e,r)});function dp(e){return u(e.trim().split(/\s+/g))}function pp(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var hp=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),gp=v(function(e,r){return r.indexOf(e)>-1}),bp=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var _p=v(function(e,r){var n=e.length;if(n<1)return M;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return u(i)});function Dv(e){return e+""}function yp(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return U;r=10*r+o-48}return i==t?U:O(n==45?-r:r)}function xp(e){if(e.length===0||/[\sxbo]/.test(e))return U;var r=+e;return r===r?O(r):U}function wp(e){return yo(e).join("")}function Sp(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Cp(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function zp(e){return{$:0,a:e}}function Pp(e){return{$:1,a:e}}function xo(e){return{$:2,b:e}}var Lp=xo(function(e){return typeof e!="number"?Ar("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Oe(e):Ar("an INT",e)}),Tp=xo(function(e){return typeof e=="boolean"?Oe(e):Ar("a BOOL",e)}),Mp=xo(function(e){return typeof e=="number"?Oe(e):Ar("a FLOAT",e)}),kp=xo(function(e){return typeof e=="string"?Oe(e):e instanceof String?Oe(e+""):Ar("a STRING",e)});function Dp(e){return{$:3,b:e}}var Np=v(function(e,r){return{$:6,d:e,b:r}}),Ip=v(function(e,r){return{$:7,e,b:r}});function na(e,r){return{$:9,f:e,g:r}}var Ep=v(function(e,r){return{$:10,b:r,h:e}}),Bp=v(function(e,r){return na(e,[r])}),Fp=T(function(e,r,n){return na(e,[r,n])}),jp=re(function(e,r,n,t){return na(e,[r,n,t])});cr(function(e,r,n,t,i){return na(e,[r,n,t,i])});Er(function(e,r,n,t,i,o){return na(e,[r,n,t,i,o])});_o(function(e,r,n,t,i,o,c){return na(e,[r,n,t,i,o,c])});Ie(function(e,r,n,t,i,o,c,l){return na(e,[r,n,t,i,o,c,l])});gl(function(e,r,n,t,i,o,c,l,$){return na(e,[r,n,t,i,o,c,l,$])});var Ap=v(function(e,r){try{var n=JSON.parse(r);return jr(e,n)}catch(t){return hr(a(Dl,"This is not valid JSON! "+t.message,r))}}),Nv=v(function(e,r){return jr(e,r)});function jr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Oe(e.c):Ar("null",r);case 3:return pi(r)?n$(e.b,r,u):Ar("a LIST",r);case 4:return pi(r)?n$(e.b,r,Vp):Ar("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ar("an OBJECT with a field named `"+n+"`",r);var f=jr(e.b,r[n]);return Xr(f)?f:hr(a(d$,n,f.a));case 7:var t=e.e;if(!pi(r))return Ar("an ARRAY",r);if(t>=r.length)return Ar("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=jr(e.b,r[t]);return Xr(f)?f:hr(a(uf,t,f.a));case 8:if(typeof r!="object"||r===null||pi(r))return Ar("an OBJECT",r);var i=M;for(var o in r)if(r.hasOwnProperty(o)){var f=jr(e.b,r[o]);if(!Xr(f))return hr(a(d$,o,f.a));i=_n(w(o,f.a),i)}return Oe(Ve(i));case 9:for(var c=e.f,l=e.g,$=0;$<l.length;$++){var f=jr(l[$],r);if(!Xr(f))return f;c=c(f.a)}return Oe(c);case 10:var f=jr(e.b,r);return Xr(f)?jr(e.h(f.a),r):f;case 11:for(var m=M,d=e.g;d.b;d=d.b){var f=jr(d.a,r);if(Xr(f))return f;m=_n(f.a,m)}return hr(Jh(Ve(m)));case 1:return hr(a(Dl,e.a,r));case 0:return Oe(e.a)}}function n$(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=jr(e,r[o]);if(!Xr(c))return hr(a(uf,o,c.a));i[o]=c.a}return Oe(n(i))}function pi(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Vp(e){return a(ng,e.length,function(r){return e[r]})}function Ar(e,r){return hr(a(Dl,"Expecting "+e,r))}function Ja(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ja(e.b,r.b);case 6:return e.d===r.d&&Ja(e.b,r.b);case 7:return e.e===r.e&&Ja(e.b,r.b);case 9:return e.f===r.f&&a$(e.g,r.g);case 10:return e.h===r.h&&Ja(e.b,r.b);case 11:return a$(e.g,r.g)}}function a$(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!Ja(e[t],r[t]))return!1;return!0}var Jp=v(function(e,r){return JSON.stringify(r,null,e)+""});function wo(e){return e}function Iv(){return[]}function Rp(){return{}}var Hp=T(function(e,r,n){return n[e]=r,n});function Ev(e){return v(function(r,n){return n.push(e(r)),n})}var Gp=null;function _a(e){return{$:0,a:e}}function Wp(e){return{$:1,a:e}}function Jn(e){return{$:2,b:e,c:null}}var Nc=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Op(e){return{$:5,b:e}}var Up=0;function _l(e){var r={$:0,e:Up++,f:e,g:null,h:[]};return yl(r),r}function Bv(e){return Jn(function(r){r(_a(_l(e)))})}function Fv(e,r){e.h.push(r),yl(e)}var Yp=v(function(e,r){return Jn(function(n){Fv(e,r),n(_a(qt))})}),oc=!1,t$=[];function yl(e){if(t$.push(e),!oc){for(oc=!0;e=t$.shift();)qp(e);oc=!1}}function qp(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,yl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}re(function(e,r,n,t){return xl(r,t,e.g7,e.iC,e.ib,function(){return function(){}})});function xl(e,r,n,t,i,o){var c=a(Nv,e,r?r.flags:void 0);Xr(c)||ot(2);var l={},$=n(c.a),f=$.a,m=o(b,f),d=Zp(l,b);function b(h,y){var _=a(t,h,f);m(f=_.a,y),o$(l,_.b,i(f))}return o$(l,$.b,i(f)),d?{ports:d}:{}}var gn={};function Zp(e,r){var n;for(var t in gn){var i=gn[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Qp(i,r)}return n}function Xp(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Qp(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l($){return a(Nc,l,Op(function(f){var m=f.a;return f.$===0?s(i,n,m,$):o&&c?L(t,n,m.i,m.j,$):s(t,n,o?m.i:m.j,$)}))}return n.h=_l(a(Nc,l,e.b))}var Kp=v(function(e,r){return Jn(function(n){e.g(r),n(_a(qt))})});v(function(e,r){return a(Yp,e.h,{$:0,a:r})});function jv(e){return function(r){return{$:1,k:e,l:r}}}function e0(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var i$=[],cc=!1;function o$(e,r,n){if(i$.push({p:e,q:r,r:n}),!cc){cc=!0;for(var t;t=i$.shift();)r0(t.p,t.q,t.r);cc=!1}}function r0(e,r,n){var t={};Ji(!0,r,t,null),Ji(!1,n,t,null);for(var i in e)Fv(e[i],{$:"fx",a:t[i]||{i:M,j:M}})}function Ji(e,r,n,t){switch(r.$){case 1:var i=r.k,o=n0(e,i,t,r.l);n[i]=a0(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Ji(e,c.a,n,t);return;case 3:Ji(e,r.o,n,{s:r.n,t});return}}function n0(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?gn[r].e:gn[r].f;return a(o,i,t)}function a0(e,r,n){return n=n||{i:M,j:M},e?n.i=_n(r,n.i):n.j=_n(r,n.j),n}function t0(e){gn[e]&&ot(3)}v(function(e,r){return r});function i0(e,r){return t0(e),gn[e]={f:o0,u:r,a:c0},jv(e)}var o0=v(function(e,r){return function(n){return e(r(n))}});function c0(e,r){var n=M,t=gn[e].u,i=_a(null);gn[e].b=i,gn[e].c=T(function(c,l,$){return n=l,i});function o(c){var l=a(Nv,t,c);Xr(l)||ot(4,e,l.a);for(var $=l.a,f=n;f.b;f=f.b)r(f.a($))}return{send:o}}var Ri,In=typeof document!="undefined"?document:{};function wl(e,r){e.appendChild(r)}re(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(Un(e,function(){}),i),{}});function Ic(e){return{$:0,a:e}}var Av=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:Cl(n),e:i,f:e,b:o}})}),zn=Av(void 0),l0=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:Cl(n),e:i,f:e,b:o}})}),u0=l0(void 0);function $0(e,r,n,t){return{$:3,d:Cl(e),g:r,h:n,i:t}}var v0=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function aa(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return aa([e,r],function(){return e(r)})});T(function(e,r,n){return aa([e,r,n],function(){return a(e,r,n)})});var f0=re(function(e,r,n,t){return aa([e,r,n,t],function(){return s(e,r,n,t)})});cr(function(e,r,n,t,i){return aa([e,r,n,t,i],function(){return L(e,r,n,t,i)})});Er(function(e,r,n,t,i,o){return aa([e,r,n,t,i,o],function(){return N(e,r,n,t,i,o)})});_o(function(e,r,n,t,i,o,c){return aa([e,r,n,t,i,o,c],function(){return pr(e,r,n,t,i,o,c)})});Ie(function(e,r,n,t,i,o,c,l){return aa([e,r,n,t,i,o,c,l],function(){return bl(e,r,n,t,i,o,c,l)})});gl(function(e,r,n,t,i,o,c,l,$){return aa([e,r,n,t,i,o,c,l,$],function(){return Yt(e,r,n,t,i,o,c,l,$)})});var Vv=v(function(e,r){return{$:"a0",n:e,o:r}}),m0=v(function(e,r){return{$:"a1",n:e,o:r}}),Sl=v(function(e,r){return{$:"a2",n:e,o:r}}),cn=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Jv(e){return e=="script"?"p":e}function s0(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function d0(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function p0(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Rv(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var h0=v(function(e,r){return r.$==="a0"?a(Vv,r.n,g0(e,r.o)):r});function g0(e,r){var n=Bl(r);return{$:r.$,a:n?s(Oi,n<3?b0:_0,Ye(e),r.a):a(ga,e,r.a)}}var b0=v(function(e,r){return w(e(r.a),r.b)}),_0=v(function(e,r){return{aI:e(r.aI),dS:r.dS,dI:r.dI}});function Cl(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?c$(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?c$(c,i,o):c[i]=o}return r}function c$(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Un(e,r){var n=e.$;if(n===5)return Un(e.k||(e.k=e.m()),r);if(n===0)return In.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=Un(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Ec(c,r,e.d),c}var c=e.f?In.createElementNS(e.f,e.c):In.createElement(e.c);Ri&&e.c=="a"&&c.addEventListener("click",Ri(c)),Ec(c,r,e.d);for(var l=e.e,$=0;$<l.length;$++)wl(c,Un(n===1?l[$]:l[$].b,r));return c}function Ec(e,r,n){for(var t in n){var i=n[t];t==="a1"?y0(e,i):t==="a0"?S0(e,r,i):t==="a3"?x0(e,i):t==="a4"?w0(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function y0(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function x0(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function w0(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function S0(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=C0(r,o),e.addEventListener(i,c,zl&&{passive:Bl(o)<2}),t[i]=c}}var zl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){zl=!0}}))}catch{}function C0(e,r){function n(t){var i=n.q,o=jr(i.a,t);if(!!Xr(o)){for(var c=Bl(i),l=o.a,$=c?c<3?l.a:l.aI:l,f=c==1?l.b:c==3&&l.dS,m=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dI)&&t.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")$=d($);else for(var b=d.length;b--;)$=d[b]($);m=m.p}m($,f)}}return n.q=r,n}function z0(e,r){return e.$==r.$&&Ja(e.a,r.a)}function Hv(e,r){var n=[];return Qr(e,r,n,0),n}function dr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Qr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=I0(r),o=1;else{dr(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,$=c.length,f=$===l.length;f&&$--;)f=c[$]===l[$];if(f){r.k=e.k;return}r.k=r.m();var m=[];Qr(e.k,r.k,m,0),m.length>0&&dr(n,1,t,m);return;case 4:for(var d=e.j,b=r.j,h=!1,y=e.k;y.$===4;)h=!0,typeof d!="object"?d=[d,y.j]:d.push(y.j),y=y.k;for(var _=r.k;_.$===4;)h=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(h&&d.length!==b.length){dr(n,0,t,r);return}(h?!P0(d,b):d!==b)&&dr(n,2,t,b),Qr(y,_,n,t+1);return;case 0:e.a!==r.a&&dr(n,3,t,r.a);return;case 1:l$(e,r,n,t,L0);return;case 2:l$(e,r,n,t,T0);return;case 3:if(e.h!==r.h){dr(n,0,t,r);return}var z=Pl(e.d,r.d);z&&dr(n,4,t,z);var P=r.i(e.g,r.g);P&&dr(n,5,t,P);return}}}function P0(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function l$(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){dr(n,0,t,r);return}var o=Pl(e.d,r.d);o&&dr(n,4,t,o),i(e,r,n,t)}function Pl(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Pl(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&z0(c,l)||(t=t||{},t[i]=l)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function L0(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?dr(n,6,t,{v:l,i:c-l}):c<l&&dr(n,7,t,{v:c,e:o});for(var $=c<l?c:l,f=0;f<$;f++){var m=i[f];Qr(m,o[f],n,++t),t+=m.b||0}}function T0(e,r,n,t){for(var i=[],o={},c=[],l=e.e,$=r.e,f=l.length,m=$.length,d=0,b=0,h=t;d<f&&b<m;){var y=l[d],_=$[b],z=y.a,P=_.a,S=y.b,D=_.b,W=void 0,ne=void 0;if(z===P){h++,Qr(S,D,i,h),h+=S.b||0,d++,b++;continue}var ie=l[d+1],ce=$[b+1];if(ie){var le=ie.a,te=ie.b;ne=P===le}if(ce){var Q=ce.a,be=ce.b;W=z===Q}if(W&&ne){h++,Qr(S,be,i,h),pt(o,i,z,D,b,c),h+=S.b||0,h++,ht(o,i,z,te,h),h+=te.b||0,d+=2,b+=2;continue}if(W){h++,pt(o,i,P,D,b,c),Qr(S,be,i,h),h+=S.b||0,d+=1,b+=2;continue}if(ne){h++,ht(o,i,z,S,h),h+=S.b||0,h++,Qr(te,D,i,h),h+=te.b||0,d+=2,b+=1;continue}if(ie&&le===Q){h++,ht(o,i,z,S,h),pt(o,i,P,D,b,c),h+=S.b||0,h++,Qr(te,be,i,h),h+=te.b||0,d+=2,b+=2;continue}break}for(;d<f;){h++;var y=l[d],S=y.b;ht(o,i,y.a,S,h),h+=S.b||0,d++}for(;b<m;){var _e=_e||[],_=$[b];pt(o,i,_.a,_.b,void 0,_e),b++}(i.length>0||c.length>0||_e)&&dr(n,8,t,{w:i,x:c,y:_e})}var Gv="_elmW6BL";function pt(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Qr(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}pt(e,r,n+Gv,t,i,o)}function ht(e,r,n,t,i){var o=e[n];if(!o){var c=dr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Qr(t,o.z,l,i),dr(r,9,i,{w:l,A:o});return}ht(e,r,n+Gv,t,i)}function Wv(e,r,n,t){gt(e,r,n,0,0,r.b,t)}function gt(e,r,n,t,i,o,c){for(var l=n[t],$=l.r;$===i;){var f=l.$;if(f===1)Wv(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&gt(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var m=d.w;m.length>0&&gt(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||($=l.r)>o)return t}var b=r.$;if(b===4){for(var h=r.k;h.$===4;)h=h.k;return gt(e,h,n,t,i+1,o,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,z=0;z<y.length;z++){i++;var P=b===1?y[z]:y[z].b,S=i+(P.b||0);if(i<=$&&$<=S&&(t=gt(_[z],P,n,t,i,S,c),!(l=n[t])||($=l.r)>o))return t;i=S}return t}function Ov(e,r,n,t){return n.length===0?e:(Wv(e,r,n,t),Hi(e,n))}function Hi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=M0(i,t);i===e&&(e=o)}return e}function M0(e,r){switch(r.$){case 0:return k0(e,r.s,r.u);case 4:return Ec(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Hi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(Un(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Hi(e,o.w),e;case 8:return D0(e,r);case 5:return r.s(e);default:ot(10)}}function k0(e,r,n){var t=e.parentNode,i=Un(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function D0(e,r){var n=r.s,t=N0(n.y,r);e=Hi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,$=l.c===2?l.s:Un(l.z,r.u);e.insertBefore($,e.childNodes[c.r])}return t&&wl(e,t),e}function N0(e,r){if(!!e){for(var n=In.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;wl(n,o.c===2?o.s:Un(o.z,r.u))}return n}}function Ll(e){if(e.nodeType===3)return Ic(e.textContent);if(e.nodeType!==1)return Ic("");for(var r=M,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=_n(a(cn,o,c),r)}for(var l=e.tagName.toLowerCase(),$=M,f=e.childNodes,t=f.length;t--;)$=_n(Ll(f[t]),$);return s(zn,l,r,$)}function I0(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var E0=re(function(e,r,n,t){return xl(r,t,e.g7,e.iC,e.ib,function(i,o){var c=e.iE,l=t.node,$=Ll(l);return Uv(o,function(f){var m=c(f),d=Hv($,m);l=Ov(l,$,d,i),$=m})})});re(function(e,r,n,t){return xl(r,t,e.g7,e.iC,e.ib,function(i,o){var c=e.dQ&&e.dQ(i),l=e.iE,$=In.title,f=In.body,m=Ll(f);return Uv(o,function(d){Ri=c;var b=l(d),h=zn("body")(M)(b.f6),y=Hv(m,h);f=Ov(f,m,y,i),m=h,Ri=0,$!==b.iw&&(In.title=$=b.iw)})})});var Gi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Uv(e,r){r(e);var n=0;function t(){n=n===1?0:(Gi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Gi(t),n=2)}}v(function(e,r){return a(Al,Xt,Jn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Al,Xt,Jn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Al,Xt,Jn(function(){history.replaceState({},"",r),e()}))});var B0={addEventListener:function(){},removeEventListener:function(){}},F0=typeof window!="undefined"?window:B0;T(function(e,r,n){return Bv(Jn(function(t){function i(o){_l(n(o))}return e.addEventListener(r,i,zl&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=jr(e,r);return Xr(n)?O(n.a):U});function Yv(e,r){return Jn(function(n){Gi(function(){var t=document.getElementById(e);n(t?_a(r(t)):Wp(ag(e)))})})}function j0(e){return Jn(function(r){Gi(function(){r(_a(e()))})})}v(function(e,r){return Yv(r,function(n){return n[e](),qt})});v(function(e,r){return j0(function(){return F0.scroll(e,r),qt})});T(function(e,r,n){return Yv(e,function(t){return t.scrollLeft=r,t.scrollTop=n,qt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var A0=v(function(e,r){var n="g";e.hp&&(n+="m"),e.gg&&(n+="i");try{return O(new RegExp(r,n))}catch{return U}});v(function(e,r){return r.match(e)!==null});var V0=T(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,$;i++<e&&($=r.exec(o))&&l!=r.lastIndex;){for(var f=$.length-1,m=new Array(f);f>0;){var d=$[f];m[--f]=d?O(d):U}t.push(L(Mm,$[0],$.index,i,u(m))),l=r.lastIndex}return r.lastIndex=c,u(t)});re(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,$=new Array(l);l>0;){var f=arguments[l];$[--l]=f?O(f):U}return n(L(Mm,c,arguments[arguments.length-2],i,u($)))}return t.replace(r,o)});T(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,u(i)});var u$=0;function Nt(e,r){for(;r.b;r=r.b)e(r.a)}function Tl(e){for(var r=0;e.b;e=e.b)r++;return r}var J0=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},R0=cr(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),H0=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),G0=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),W0=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),O0=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),U0=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Y0=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),q0=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Z0=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),X0=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Q0=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},K0=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},eh=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},qv=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Zv=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},rh=function(e){e.gl.disable(e.gl.CULL_FACE)},nh=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},ah=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},th=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},$$=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],ih=[Q0,K0,eh,qv,Zv,rh,nh,ah,th];function v$(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function oh(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Xv(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function ch(e,r,n,t){for(var i=n.a.eg,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(h,y,_,z,P){var S;if(i===1)for(S=0;S<y;S++)h[_++]=y===1?z[P]:z[P][S];else o.forEach(function(D){for(S=0;S<y;S++)h[_++]=y===1?z[D][P]:z[D][P][S]})}var $=Xv(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var f=0,m=$.size*$.arraySize*i,d=new $.type(Tl(n.b)*m);Nt(function(h){l(d,$.size*$.arraySize,f,h,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function lh(e,r){if(r.a.et>0){var n=e.createBuffer(),t=uh(r.c,r.a.et);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.eg*Tl(r.b),indexBuffer:null,buffers:{}}}function uh(e,r){var n=new Uint32Array(Tl(e)*r),t=0,i;return Nt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function f$(e,r){return e+"#"+r}var Qv=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),qv(n),Zv(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,$;if(o.b.id&&o.c.id&&(c=f$(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=u$++,f||(f=v$(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=u$++,m||(m=v$(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=oh(t,f,m);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=$h(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for($=0;$<b;$++){var h=t.getActiveAttrib(d,$),y=t.getAttribLocation(d,h.name);l.activeAttributes.push(h),l.activeAttributeLocations.push(y)}c=f$(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),vh(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=lh(t,o.d),n.buffers.set(o.d,_)),$=0;$<l.activeAttributes.length;$++){h=l.activeAttributes[$],y=l.activeAttributeLocations[$],_.buffers[h.name]===void 0&&(_.buffers[h.name]=ch(t,h,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[h.name]);var z=Xv(t,h.type);if(z.arraySize===1)t.enableVertexAttribArray(y),t.vertexAttribPointer(y,z.size,z.baseType,!1,0,0);else for(var P=z.size*4,S=P*z.arraySize,D=0;D<z.arraySize;D++)t.enableVertexAttribArray(y+D),t.vertexAttribPointer(y+D,z.size,z.baseType,!1,S,P*D)}for(n.toggle=!n.toggle,Nt(X4(n),o.a),$=0;$<$$.length;$++){var W=n[$$[$]];W.toggle!==n.toggle&&W.enabled&&(ih[$](n),W.enabled=!1,W.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.e3,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.e3,0,_.numIndices)}}return Nt(i,e.g),r});function $h(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function $(h,y){var _=y.name,z=e.getUniformLocation(h,_);switch(y.type){case e.INT:return function(S){o[_]!==S&&(e.uniform1i(z,S),o[_]=S)};case e.FLOAT:return function(S){o[_]!==S&&(e.uniform1f(z,S),o[_]=S)};case e.FLOAT_VEC2:return function(S){o[_]!==S&&(e.uniform2f(z,S[0],S[1]),o[_]=S)};case e.FLOAT_VEC3:return function(S){o[_]!==S&&(e.uniform3f(z,S[0],S[1],S[2]),o[_]=S)};case e.FLOAT_VEC4:return function(S){o[_]!==S&&(e.uniform4f(z,S[0],S[1],S[2],S[3]),o[_]=S)};case e.FLOAT_MAT4:return function(S){o[_]!==S&&(e.uniformMatrix4fv(z,!1,new Float32Array(S)),o[_]=S)};case e.SAMPLER_2D:var P=c++;return function(S){e.activeTexture(e.TEXTURE0+P);var D=l.textures.get(S);D||(D=S.gu(e),l.textures.set(S,D)),e.bindTexture(e.TEXTURE_2D,D),o[_]!==S&&(e.uniform1i(z,P),o[_]=S)};case e.BOOL:return function(S){o[_]!==S&&(e.uniform1i(z,S),o[_]=S)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=$(i,b)}return f}function vh(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var fh=T(function(e,r,n){return $0(r,{g:n,f:{},h:e},bh,_h)}),mh=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),sh=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),dh=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),ph=v(function(e,r){e.contextAttributes.antialias=!0}),hh=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),gh=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function bh(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Nt(function(i){return a(Z4,r,i)},e.h);var n=In.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),J0(function(){return a(Qv,e,n)})):(n=In.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function _h(e,r){return r.f=e.f,Qv(r)}var yh=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/xh(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function xh(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ml=new Float64Array(3),m$=new Float64Array(3),s$=new Float64Array(3),wh=T(function(e,r,n){return new Float64Array([e,r,n])}),Sh=function(e){return e[0]},Ch=function(e){return e[1]},zh=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Ph=function(e){return new Float64Array([e.iJ,e.iN,e.d4])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Kv(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Kv);function ef(e,r,n){return n===void 0&&(n=new Float64Array(3)),Wi(Kv(e,r,n),n)}v(ef);function rf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function Wi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/rf(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Lh=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),bt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(bt);function Bc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Bc);v(function(e,r){var n,t=Ml,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=bt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(bt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(bt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(bt(r,t)+e[14])/n,i});var Th=re(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Mh=function(e){return{iJ:e[0],iN:e[1],d4:e[2],fH:e[3]}},kh=function(e){return new Float64Array([e.iJ,e.iN,e.d4,e.fH])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Dh(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Dh(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Nh=new Float64Array(16),Ih=new Float64Array(16),Eh=function(e){var r=new Float64Array(16);return r[0]=e.eG,r[1]=e.eK,r[2]=e.eO,r[3]=e.eS,r[4]=e.eH,r[5]=e.eL,r[6]=e.eP,r[7]=e.eT,r[8]=e.eI,r[9]=e.eM,r[10]=e.eQ,r[11]=e.eU,r[12]=e.eJ,r[13]=e.eN,r[14]=e.eR,r[15]=e.eV,r},Bh=function(e){return{eG:e[0],eK:e[1],eO:e[2],eS:e[3],eH:e[4],eL:e[5],eP:e[6],eT:e[7],eI:e[8],eM:e[9],eQ:e[10],eU:e[11],eJ:e[12],eN:e[13],eR:e[14],eV:e[15]}};function nf(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}Er(nf);re(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return nf(c,l,o,i,n,t)});function af(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}Er(af);re(function(e,r,n,t){return af(e,r,n,t,-1,1)});function tf(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],$=e[5],f=e[6],m=e[7],d=e[8],b=e[9],h=e[10],y=e[11],_=e[12],z=e[13],P=e[14],S=e[15],D=r[0],W=r[1],ne=r[2],ie=r[3],ce=r[4],le=r[5],te=r[6],Q=r[7],be=r[8],_e=r[9],Ee=r[10],Me=r[11],pe=r[12],Be=r[13],E=r[14],B=r[15];return n[0]=t*D+l*W+d*ne+_*ie,n[1]=i*D+$*W+b*ne+z*ie,n[2]=o*D+f*W+h*ne+P*ie,n[3]=c*D+m*W+y*ne+S*ie,n[4]=t*ce+l*le+d*te+_*Q,n[5]=i*ce+$*le+b*te+z*Q,n[6]=o*ce+f*le+h*te+P*Q,n[7]=c*ce+m*le+y*te+S*Q,n[8]=t*be+l*_e+d*Ee+_*Me,n[9]=i*be+$*_e+b*Ee+z*Me,n[10]=o*be+f*_e+h*Ee+P*Me,n[11]=c*be+m*_e+y*Ee+S*Me,n[12]=t*pe+l*Be+d*E+_*B,n[13]=i*pe+$*Be+b*E+z*B,n[14]=o*pe+f*Be+h*E+P*B,n[15]=c*pe+m*Be+y*E+S*B,n}v(tf);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],$=e[6],f=e[8],m=e[9],d=e[10],b=e[12],h=e[13],y=e[14],_=r[0],z=r[1],P=r[2],S=r[4],D=r[5],W=r[6],ne=r[8],ie=r[9],ce=r[10],le=r[12],te=r[13],Q=r[14];return n[0]=t*_+c*z+f*P,n[1]=i*_+l*z+m*P,n[2]=o*_+$*z+d*P,n[3]=0,n[4]=t*S+c*D+f*W,n[5]=i*S+l*D+m*W,n[6]=o*S+$*D+d*W,n[7]=0,n[8]=t*ne+c*ie+f*ce,n[9]=i*ne+l*ie+m*ce,n[10]=o*ne+$*ie+d*ce,n[11]=0,n[12]=t*le+c*te+f*Q+b,n[13]=i*le+l*te+m*Q+h,n[14]=o*le+$*te+d*Q+y,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Wi(r,Ml);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,$=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*$,n[2]=o*t*l-i*$,n[3]=0,n[4]=t*i*l-o*$,n[5]=i*i*l+c,n[6]=i*o*l+t*$,n[7]=0,n[8]=t*o*l+i*$,n[9]=i*o*l-t*$,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var t=new Float64Array(16),i=1/rf(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,$=Math.cos(e),f=1-$,m=Math.sin(e),d=o*m,b=c*m,h=l*m,y=o*c*f,_=o*l*f,z=c*l*f,P=o*o*f+$,S=y+h,D=_-b,W=y-h,ne=c*c*f+$,ie=z+d,ce=_+b,le=z-d,te=l*l*f+$,Q=n[0],be=n[1],_e=n[2],Ee=n[3],Me=n[4],pe=n[5],Be=n[6],E=n[7],B=n[8],j=n[9],A=n[10],J=n[11],R=n[12],H=n[13],G=n[14],Xe=n[15];return t[0]=Q*P+Me*S+B*D,t[1]=be*P+pe*S+j*D,t[2]=_e*P+Be*S+A*D,t[3]=Ee*P+E*S+J*D,t[4]=Q*W+Me*ne+B*ie,t[5]=be*W+pe*ne+j*ie,t[6]=_e*W+Be*ne+A*ie,t[7]=Ee*W+E*ne+J*ie,t[8]=Q*ce+Me*le+B*te,t[9]=be*ce+pe*le+j*te,t[10]=_e*ce+Be*le+A*te,t[11]=Ee*ce+E*le+J*te,t[12]=R,t[13]=H,t[14]=G,t[15]=Xe,t});function Fh(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}T(Fh);re(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function jh(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}T(jh);re(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],$=t[3],f=t[4],m=t[5],d=t[6],b=t[7],h=t[8],y=t[9],_=t[10],z=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=$,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=h,i[9]=y,i[10]=_,i[11]=z,i[12]=o*e+f*r+h*n+t[12],i[13]=c*e+m*r+y*n+t[13],i[14]=l*e+d*r+_*n+t[14],i[15]=$*e+b*r+z*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],$=r[2],f=r[3],m=r[4],d=r[5],b=r[6],h=r[7],y=r[8],_=r[9],z=r[10],P=r[11];return n[0]=c,n[1]=l,n[2]=$,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=h,n[8]=y,n[9]=_,n[10]=z,n[11]=P,n[12]=c*t+m*i+y*o+r[12],n[13]=l*t+d*i+_*o+r[13],n[14]=$*t+b*i+z*o+r[14],n[15]=f*t+h*i+P*o+r[15],n});T(function(e,r,n){var t=ef(e,r,Ml),i=Wi(Bc(n,t,m$),m$),o=Wi(Bc(t,i,s$),s$),c=Nh,l=Ih;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,tf(c,l)});T(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var x=Rd,hi=Ad,of=T(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return s(hi,e,l,f)}else{var $=c.a;return s(hi,o,l,$)}});return s(hi,o,s(hi,e,r,i),t)}),So=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,$=s(e,t,i,s(So,e,r,c)),f=o;e=l,r=$,n=f;continue e}}),It=function(e){return s(So,T(function(r,n,t){return a(x,w(r,n),t)}),M,e)},kl=function(e){return s(So,T(function(r,n,t){return a(x,r,t)}),M,e)},Ah=function(e){var r=e;return kl(r)},cf=1,Vh=2,lf=0,hr=function(e){return{$:1,a:e}},Dl=v(function(e,r){return{$:3,a:e,b:r}}),d$=v(function(e,r){return{$:0,a:e,b:r}}),uf=v(function(e,r){return{$:1,a:e,b:r}}),Oe=function(e){return{$:0,a:e}},Jh=function(e){return{$:2,a:e}},O=function(e){return{$:0,a:e}},U={$:1},Rh=hp,$f=Jp,k=Dv,$e=v(function(e,r){return a(mp,e,yo(r))}),Nl=v(function(e,r){return u(a(fp,e,r))}),vf=function(e){return a($e,`
    `,a(Nl,`
`,e))},Ae=T(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),yn=function(e){return s(Ae,v(function(r,n){return n+1}),0,e)},Hh=Hd,Gh=T(function(e,r,n){e:for(;;)if(ge(e,r)<1){var t=e,i=r-1,o=a(x,r,n);e=t,r=i,n=o;continue e}else return n}),En=v(function(e,r){return s(Gh,e,r,M)}),ff=v(function(e,r){return s(Hh,e,a(En,0,yn(r)-1),r)}),bn=Sp,mf=function(e){var r=bn(e);return 97<=r&&r<=122},sf=function(e){var r=bn(e);return r<=90&&65<=r},Wh=function(e){return mf(e)||sf(e)},Oh=function(e){var r=bn(e);return r<=57&&48<=r},Uh=function(e){return mf(e)||sf(e)||Oh(e)},Ve=function(e){return s(Ae,x,M,e)},ct=lp,Yh=v(function(e,r){return`

(`+(k(e+1)+(") "+vf(qh(r))))}),qh=function(e){return a(Zh,e,M)},Zh=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=ct(n);if(_.$===1)return!1;var z=_.a,P=z.a,S=z.b;return Wh(P)&&a(Rh,Uh,S)}(),i=t?"."+n:"['"+(n+"']"),$=c,f=a(x,i,r);e=$,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(k(o)+"]"),$=c,f=a(x,l,r);e=$,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a($e,"",Ve(r)):"Json.Decode.oneOf"}(),y=d+(" failed in the following "+(k(yn(m))+" ways:"));return a($e,`

`,a(x,y,a(ff,Yh,m)))}else{var c=m.a,$=c,f=r;e=$,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a($e,"",Ve(r)):"!"}();default:var b=e.a,h=e.b,y=function(){return r.b?"Problem with the value at json"+(a($e,"",Ve(r))+`:

    `):`Problem with the given value:

`}();return y+(vf(a($f,4,h))+(`

`+b))}}),Ir=32,Fc=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),jc=Id,Et=rp,Il=v(function(e,r){return r$(r)/r$(e)}),_t=Kd,Bt=Et(a(Il,2,Ir)),df=L(Fc,0,Bt,jc,jc),pf=Bd,hf=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});var Xh=v(function(e,r){return r(e)}),Ra=np,Ac=Ed,er=v(function(e,r){return ge(e,r)>0?e:r}),Qh=function(e){return{$:0,a:e}},El=Fd,Kh=v(function(e,r){e:for(;;){var n=a(El,Ir,e),t=n.a,i=n.b,o=a(x,Qh(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return Ve(o)}}),Co=function(e){var r=e.a;return r},eg=v(function(e,r){e:for(;;){var n=Et(r/Ir);if(n===1)return a(El,Ir,e).a;var t=a(Kh,e,M),i=n;e=t,r=i;continue e}}),gf=v(function(e,r){if(r.p){var n=r.p*Ir,t=Ra(a(Il,Ir,n-1)),i=e?Ve(r.F):r.F,o=a(eg,i,r.p);return L(Fc,Ac(r.v)+n,a(er,5,t*Bt),o,r.v)}else return L(Fc,Ac(r.v),Bt,jc,r.v)}),rg=cr(function(e,r,n,t,i){e:for(;;){if(r<0)return a(gf,!1,{F:t,p:n/Ir|0,v:i});var o=hf(s(pf,Ir,r,e)),c=e,l=r-Ir,$=n,f=a(x,o,t),m=i;e=c,r=l,n=$,t=f,i=m;continue e}}),ng=v(function(e,r){if(e<=0)return df;var n=e%Ir,t=s(pf,n,e-n,r),i=e-n-Ir;return N(rg,r,i,e,M,t)}),Xr=function(e){return!e.$},ae=Ep,De=Tp,X=Np,Ge=Mp,bf=v(function(e,r){return{gp:r.gp,gr:e,c5:r.c5,gF:r.gF,bn:r.bn,aw:r.aw,cO:r.cO,iF:r.iF}}),ga=Bp,Oi=Fp,Ye=zp,Bl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Cr=function(e){return e},ag=Cr,p$=Er(function(e,r,n,t,i,o){return{em:o,er:r,fc:t,ff:n,fi:e,fj:i}}),tg=gp,fa=up,Ha=sp,Zt=v(function(e,r){return e<1?r:s(Ha,e,fa(r),r)}),zo=_p,Po=function(e){return e===""},Lo=v(function(e,r){return e<1?"":s(Ha,0,e,r)}),Fl=yp,h$=cr(function(e,r,n,t,i){if(Po(i)||a(tg,"@",i))return U;var o=a(zo,":",i);if(o.b){if(o.b.b)return U;var c=o.a,l=Fl(a(Zt,c+1,i));if(l.$===1)return U;var $=l;return O(pr(p$,e,a(Lo,c,i),$,r,n,t))}else return O(pr(p$,e,i,U,r,n,t))}),g$=re(function(e,r,n,t){if(Po(t))return U;var i=a(zo,"/",t);if(i.b){var o=i.a;return N(h$,e,a(Zt,o,t),r,n,a(Lo,o,t))}else return N(h$,e,"/",r,n,t)}),b$=T(function(e,r,n){if(Po(n))return U;var t=a(zo,"?",n);if(t.b){var i=t.a;return L(g$,e,O(a(Zt,i+1,n)),r,a(Lo,i,n))}else return L(g$,e,U,r,n)});v(function(e,r){if(Po(r))return U;var n=a(zo,"#",r);if(n.b){var t=n.a;return s(b$,e,O(a(Zt,t+1,r)),a(Lo,t,r))}else return s(b$,e,U,r)});var ig=bp,Xt=function(e){},Qt=_a,og=Qt(0),_f=re(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var $=l.a,f=l.b;if(f.b){var m=f.a,d=f.b,b=n>500?s(Ae,e,r,Ve(d)):L(_f,e,r,n+1,d);return a(e,i,a(e,c,a(e,$,a(e,m,b))))}else return a(e,i,a(e,c,a(e,$,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),ir=T(function(e,r,n){return L(_f,e,r,0,n)}),K=v(function(e,r){return s(ir,v(function(n,t){return a(x,e(n),t)}),M,r)}),Ui=Nc,jl=v(function(e,r){return a(Ui,function(n){return Qt(e(n))},r)}),cg=T(function(e,r,n){return a(Ui,function(t){return a(Ui,function(i){return Qt(a(e,t,i))},n)},r)}),lg=function(e){return s(ir,cg(x),Qt(M),e)},ug=Kp,$g=v(function(e,r){var n=r;return Bv(a(Ui,ug(e),n))}),vg=T(function(e,r,n){return a(jl,function(t){return 0},lg(a(K,$g(e),r)))}),fg=T(function(e,r,n){return Qt(0)}),mg=v(function(e,r){var n=r;return a(jl,e,n)});gn.Task=Xp(og,vg,fg,mg);var sg=jv("Task"),Al=v(function(e,r){return sg(a(jl,e,r))}),dg=E0,pg=op,Yi={$:1},yf=function(e){return{$:2,a:e}},Vl={$:0},Jr=v(function(e,r){return{$:0,a:e,b:r}}),rr=T(function(e,r,n){return r(e(n))}),ya=function(e){var r=e.b.s;return r.a},hg=function(e){var r=e.a,n=e.b.ab,t=e.b.s,i=e.b.au;if(i.b){var o=i.a,c=i.b;return O(a(Jr,r,{s:o,au:c,ab:a(x,t,n)}))}else return U},we=v(function(e,r){if(r.$)return e;var n=r.a;return n}),gg=T(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dT;return(ge(o+r.gF,ya(n).gp)>0?a(rr,hg,we(a(Jr,Yi,i))):Cr)(a(Jr,yf({dT:o+r.gF}),i));default:var c=i.s,l=c.a,$=c.b,f=a(bf,l.gr,F(r,{gp:l.gp+r.gF})),m=a(e,f,$);return a(Jr,Vl,{s:w(f,m),au:M,ab:a(x,i.s,i.ab)})}}),xf=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),bg=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(x,t,n);e=o,r=c,n=l;continue e}else return n}}),_g=v(function(e,r){return Ve(s(bg,e,r,M))}),wf=T(function(e,r,n){if(r<=0)return M;{var t=w(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,S=i.a,o=i.b,c=o.a;return u([S,c]);case 3:if(t.b.b.b.b){var l=t.b,S=l.a,$=l.b,c=$.a,f=$.b,m=f.a;return u([S,c,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,S=d.a,b=d.b,c=b.a,h=b.b,m=h.a,y=h.b,_=y.a,z=y.b;return e>1e3?a(x,S,a(x,c,a(x,m,a(x,_,a(_g,r-4,z))))):a(x,S,a(x,c,a(x,m,a(x,_,s(wf,e+1,r-4,z)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var P=t.b,S=P.a;return u([S])}}),yg=v(function(e,r){return s(wf,0,e,r)}),xg=v(function(e,r){var n=r.b.ab,t=r.b.s,i=r.b.au,o=Y(Ve(n),Y(u([t]),i)),c=a(yg,e,o),l=a(xf,e,o);if(l.b){var $=l.a,f=l.b;return a(Jr,Yi,{s:$,au:f,ab:Ve(c)})}else{var m=Ve(c);if(m.b){var d=m.a,b=m.b;return a(Jr,Yi,{s:d,au:M,ab:b})}else return r}}),wg=function(e){var r=e.b;return a(Jr,Yi,r)},Sg=function(e){var r=e.b;return a(Jr,yf({dT:ya(e).gp}),r)},Cg=function(e){var r=e.b;return a(Jr,Vl,r)},zg=v(function(e,r){switch(e.$){case 1:return wg(r);case 2:return Cg(r);case 3:return Sg(r);default:var n=e.a;return a(xg,n,r)}}),qi=v(function(e,r){var n=r.a,t=r.b;return w(e(n),t)}),Pg=v(function(e,r){return F(r,{aW:e(r.aW)})}),Sf=function(e){return{$:3,a:e}},Cf=function(e){return{$:2,a:e}},zf=v(function(e,r){return{$:0,a:e,b:r}}),Lg=v(function(e,r){return{$:1,a:e,b:r}}),Ce=v(function(e,r){if(r.$)return U;var n=r.a;return O(e(n))}),ze=function(e){return e<0?-e:e},Pf=xp,Tg=T(function(e,r,n){return a(we,0/0,Pf(a(e,r,n)))}),ba=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),Mg=vp,Lf=function(e){return s(Mg,x,M,e)},kg=v(function(e,r){var n=a(ba,function(t){return t!=="0"&&t!=="."},Lf(r));return Y(e&&n?"-":"",r)}),fe=Dv,Vc=cp,Tf=Cp,Mf=function(e){var r=e.a,n=e.b;if(r==="9"){var t=ct(n);if(t.$===1)return"01";var i=t.a;return a(Vc,"0",Mf(i))}else{var o=bn(r);return o>=48&&o<57?a(Vc,Tf(o+1),n):"0"}},Jc=ep,Dg=ip,To=function(e){return a(Vc,e,"")},kf=T(function(e,r,n){return e<=0?n:s(kf,e>>1,Y(r,r),e&1?Y(n,r):n)}),Ft=v(function(e,r){return s(kf,e,r,"")}),Rc=T(function(e,r,n){return Y(n,a(Ft,e-fa(n),To(r)))}),Hc=$p,Df=function(e){var r=a(Nl,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return w(n,i)}else{var n=r.a;return w(n,"0")}else return w("0","0")},Ng=function(e){var r=a(Nl,"e",fe(ze(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(we,0,Fl(a(ig,"+",i)?a(Zt,1,i):i)),c=Df(n),l=c.a,$=c.b,f=Y(l,$),m=o<0?a(we,"0",a(Ce,function(d){var b=d.a,h=d.b;return b+("."+h)},a(Ce,qi(To),ct(Y(a(Ft,ze(o),"0"),f))))):s(Rc,o+1,"0",f);return Y(e<0?"-":"",m)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},Ig=T(function(e,r,n){if(Jc(n)||Dg(n))return fe(n);var t=n<0,i=Df(Ng(ze(n))),o=i.a,c=i.b,l=fa(o)+r,$=Y(a(Ft,-l+1,"0"),s(Rc,l,"0",Y(o,c))),f=fa($),m=a(er,1,l),d=a(e,t,s(Ha,m,f,$)),b=s(Ha,0,m,$),h=d?Hc(a(we,"1",a(Ce,Mf,ct(Hc(b))))):b,y=fa(h),_=h==="0"?h:r<=0?Y(h,a(Ft,ze(r),"0")):ge(r,fa(c))<0?s(Ha,0,y-r,h)+("."+s(Ha,y-r,y,h)):Y(o+".",s(Rc,r,"0",c));return a(kg,t,_)}),Nf=Ig(v(function(e,r){var n=ct(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(bn(i))})),Eg=Tg(Nf),Bg=T(function(e,r,n){var t=a(Il,10,ze(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(Eg,i,n)}),If=Jd,ta=v(function(e,r){e:for(;;){if(r.$===-2)return U;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(If,e,n);switch(c){case 0:var l=e,$=i;e=l,r=$;continue e;case 1:return O(t);default:var l=e,$=o;e=l,r=$;continue e}}}),de=cr(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),xn={$:-2},Xa=cr(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,$=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,d=t.d,b=t.e;return N(de,0,r,n,N(de,1,f,m,d,b),N(de,1,o,c,l,$))}else return N(de,e,o,c,N(de,0,r,n,t,l),$)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,h=t.d;h.a;var y=h.b,_=h.c,z=h.d,P=h.e,b=t.e;return N(de,0,f,m,N(de,1,y,_,z,P),N(de,1,r,n,b,i))}else return N(de,e,r,n,t,i)}),Gc=T(function(e,r,n){if(n.$===-2)return N(de,0,e,r,xn,xn);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,$=a(If,e,i);switch($){case 0:return N(Xa,t,i,o,s(Gc,e,r,c),l);case 1:return N(de,t,i,r,c,l);default:return N(Xa,t,i,o,c,s(Gc,e,r,l))}}),Yn=T(function(e,r,n){var t=s(Gc,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return N(de,1,i,o,c,l)}else{var $=t;return $}}),Fg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Ef=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,$=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var h=b.b,y=b.c,_=b.d,z=b.e,P=f.e;return N(de,0,h,y,N(de,1,n,t,N(de,0,o,c,l,$),_),N(de,1,m,d,z,P))}else{var r=e.a,n=e.b,t=e.c,S=e.d;S.a;var o=S.b,c=S.c,l=S.d,$=S.e,D=e.e;D.a;var m=D.b,d=D.c,b=D.d,P=D.e;return N(de,1,n,t,N(de,0,o,c,l,$),N(de,0,m,d,b,P))}else return e},_$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var $=l.b,f=l.c,m=l.d,d=l.e,b=i.e,h=e.e;h.a;var y=h.b,_=h.c,z=h.d,P=h.e;return N(de,0,o,c,N(de,1,$,f,m,d),N(de,1,n,t,b,N(de,0,y,_,z,P)))}else{var r=e.a,n=e.b,t=e.c,S=e.d;S.a;var o=S.b,c=S.c,D=S.d,b=S.e,W=e.e;W.a;var y=W.b,_=W.c,z=W.d,P=W.e;return N(de,1,n,t,N(de,0,o,c,D,b),N(de,0,y,_,z,P))}else return e},jg=_o(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,$=o.c,f=o.d,m=o.e;return N(de,n,l,$,f,N(de,0,t,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,_$(r)}else break e;else return c.a,c.d,_$(r);else break e;return r}}),Di=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,N(de,r,n,t,Di(i),l);var $=Ef(e);if($.$===-1){var f=$.a,m=$.b,d=$.c,b=$.d,h=$.e;return N(Xa,f,m,d,Di(b),h)}else return xn}else return N(de,r,n,t,Di(i),l)}else return xn},Pt=v(function(e,r){if(r.$===-2)return xn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(ge(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,N(de,n,t,i,a(Pt,e,o),c);var $=Ef(r);if($.$===-1){var f=$.a,m=$.b,d=$.c,b=$.d,h=$.e;return N(Xa,f,m,d,a(Pt,e,b),h)}else return xn}else return N(de,n,t,i,a(Pt,e,o),c);else return a(Ag,e,bl(jg,e,r,n,t,i,o,c))}),Ag=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(me(e,t)){var l=Fg(c);if(l.$===-1){var $=l.b,f=l.c;return N(Xa,n,$,f,o,Di(c))}else return xn}else return N(Xa,n,t,i,o,a(Pt,e,c))}else return xn}),Vg=v(function(e,r){var n=a(Pt,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return N(de,1,t,i,o,c)}else{var l=n;return l}}),ma=T(function(e,r,n){var t=r(a(ta,e,n));if(t.$)return a(Vg,e,n);var i=t.a;return s(Yn,e,i,n)}),Jg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(ma,r,Ce(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(Lg,w(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(ma,r,Ce(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(zf,w(o,c),s(Bg,o,c,n))}));case 3:var r=e.a,n=e.b;return a(ma,r,Ce(function(t){return t.$===3?Sf(n):t}));default:var r=e.a,n=e.b;return a(ma,r,Ce(function(t){return t.$===2?Cf(n):t}))}},Rg=function(e){return Pg(Jg(e))},Hg=v(function(e,r){return a(K,Rg(e),r)}),Gg=v(function(e,r){return F(r,{gr:a(Hg,e,r.gr)})}),Wg=v(function(e,r){var n=r.a,t=r.b;return a(Jr,n,F(t,{s:a(qi,Gg(e),t.s)}))}),Wc=v(function(e,r){var n=r.a,t=r.b;return w(n,e(t))}),Og=T(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Jr,t,F(i,{s:a(Wc,a(e,o.a,r),o)}))}),Ug=re(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return F(t,{bG:!t.bG});case 2:var i=n.a;return F(t,{W:s(gg,e,i,t.W)});case 3:var o=n.a;return F(t,{bz:o});case 4:var c=n.a;return F(t,{W:a(Wg,c,t.W)});case 5:var l=n.a;return F(t,{W:s(Og,r,l,t.W)});default:var $=n.a;return F(t,{W:a(zg,$,t.W)})}}),Yg=v(function(e,r){return a(Jr,Vl,{s:w(e,r(e)),au:M,ab:M})}),qg=e0,y$=qg(M),Zg=function(e){return{$:2,a:e}},wn=Dp,Kn=kp,Xg=i0("tick",a(ae,function(e){return a(ae,function(r){return a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return Ye({gp:c,c5:o,gF:i,bn:t,aw:n,cO:r,iF:e})},a(X,"clock",Ge))},a(X,"devicePixelRatio",Ge))},a(X,"dt",Ge))},a(X,"keyboard",a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function(l){return a(ae,function($){return a(ae,function(f){return a(ae,function(m){return a(ae,function(d){return Ye({cZ:d,gt:m,ef:f,gE:$,hh:l,hG:c,hM:o,cQ:i,fy:t})},a(X,"alt",De))},a(X,"control",De))},a(X,"down",De))},a(X,"downs",wn(Kn)))},a(X,"left",De))},a(X,"pressedKeys",wn(Kn)))},a(X,"right",De))},a(X,"shift",De))},a(X,"up",De))))},a(X,"pointer",a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function(l){return a(ae,function($){return a(ae,function(f){return Ye({ef:f,aG:$,ho:l,hN:c,hO:o,fy:i,iJ:t,iN:n})},a(X,"down",De))},a(X,"isDown",De))},a(X,"move",De))},a(X,"rightDown",De))},a(X,"rightUp",De))},a(X,"up",De))},a(X,"x",Ge))},a(X,"y",Ge))))},a(X,"screen",a(ae,function(r){return a(ae,function(n){return Ye({gY:n,iH:r})},a(X,"height",Ge))},a(X,"width",Ge))))},a(X,"wheel",a(ae,function(e){return a(ae,function(r){return Ye({gx:r,gy:e})},a(X,"deltaX",Ge))},a(X,"deltaY",Ge))))),Qg=function(e){return e.dZ,Xg(Zg)},Kg=function(e){return{$:5,a:e}},e3={$:0},Zi=v(function(e,r){return e}),r3=function(e){var r=e.b.s;return r.b},n3=function(e){return{$:1,a:e}},a3=n3,Bf=function(e){return{$:8,a:e}},ye=Bf,jt=function(e){return{$:0,a:e}},ia=T(function(e,r,n){return e(r(n))}),Ff=a(ia,jt,Zi),Wn=Ff,Le=function(e){return{$:1,a:e}},Nr=Le,jf=v(function(e,r){return{$:9,a:e,b:r}}),Vr={$:0},Af=v(function(e,r){return r.$===3?Vr:a(jf,e,r)}),Xi=function(e){return a(Af,4,e)},p={fM:"a",cW:"atv",fO:"ab",fP:"cx",fQ:"cy",fR:"acb",fS:"accx",fT:"accy",fU:"acr",d7:"al",d8:"ar",fV:"at",cX:"ah",cY:"av",fY:"s",f2:"bh",f3:"b",f7:"w7",f9:"bd",ga:"bdt",cb:"bn",gb:"bs",ce:"cpe",gl:"cp",gn:"cpx",go:"cpy",aD:"c",ci:"ctr",cj:"cb",ck:"ccx",aE:"ccy",bD:"cl",cl:"cr",gs:"ct",gv:"cptr",gw:"ctxt",gO:"fcs",el:"focus-within",gP:"fs",gT:"g",c7:"hbh",c8:"hc",ep:"he",c9:"hf",eq:"hfp",g$:"hv",g2:"ic",g4:"fr",ct:"lbl",g8:"iml",g9:"imlf",ha:"imlp",hb:"implw",hc:"it",hg:"i",eF:"lnk",bo:"nb",e5:"notxt",hu:"ol",hw:"or",a1:"oq",hB:"oh",e9:"pg",fa:"p",hC:"ppe",hP:"ui",am:"r",hS:"sb",hT:"sbx",hU:"sby",hV:"sbt",hZ:"e",h_:"cap",h2:"sev",h8:"sk",ih:"t",ii:"tc",ij:"w8",ik:"w2",il:"w9",im:"tj",cS:"tja",$9:"tl",io:"w3",ip:"w5",iq:"w4",ir:"tr",is:"w6",it:"w1",iu:"tun",fw:"ts",a8:"clr",iB:"u",d_:"wc",fI:"we",d$:"wf",fJ:"wfp",d0:"wrp"},At=wo,Yr=v(function(e,r){return a(Sl,e,At(r))}),Dr=Yr("className"),qe=function(e){return Le(Dr(e))},Vf=v(function(e,r){return{$:2,a:e,b:r}}),t3=v(function(e,r){return{$:1,a:e,b:r}}),je=function(e){return{$:0,a:e}},mr=2,i3={$:0},Rr=i3,o3={$:0},c3=p.fY+(" "+p.aD),l3=p.fY+(" "+p.gT),u3=p.fY+(" "+p.e9),$3=p.fY+(" "+p.fa),v3=p.fY+(" "+p.am),f3=p.fY+(" "+p.hZ),m3=function(e){switch(e){case 0:return v3;case 1:return c3;case 2:return f3;case 3:return l3;case 4:return $3;default:return u3}},x$=function(e){return{$:1,a:e}},va={$:0},Oc=function(e){return{$:1,a:e}},w$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),S$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(K,function(o){return w(e,o)},t),r);case 2:var i=n.a;return Y(r,a(K,function(o){return w(e,o)},i));default:var t=n.a,i=n.b;return Y(a(K,function(o){return w(e,o)},t),Y(r,a(K,function(o){return w(e,o)},i)))}}),Ga=4,s3=function(e){return{$:0,a:e}},d3=function(e){return{$:1,a:e}},Se=function(e){return e>31?d3(1<<e-32):s3(1<<e)},Jf=Se(41),Rf=Se(40),Hf=Se(42),Gf=Se(43),Qa=zn("div"),Mo=xn,Kt=Mo,dn=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+dn(o));default:var i=e.a,o=e.b;return"max"+(k(i)+dn(o))}},Re=ap,Ne=function(e){return k(Re(e*255))},Jl=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return O("mv-"+(Ne(n)+("-"+(Ne(t)+("-"+Ne(i))))));default:var o=e.a,c=o.a,l=o.b,$=o.c,f=e.b,m=f.a,d=f.b,b=f.c,h=e.c,y=h.a,_=h.b,z=h.c,P=e.d;return O("tfrm-"+(Ne(c)+("-"+(Ne(l)+("-"+(Ne($)+("-"+(Ne(m)+("-"+(Ne(d)+("-"+(Ne(b)+("-"+(Ne(y)+("-"+(Ne(_)+("-"+(Ne(z)+("-"+Ne(P))))))))))))))))))))}},Vt=function(e){switch(e.$){case 13:var $=e.a;return $;case 12:var $=e.a;return e.b,$;case 0:var n=e.a;return n;case 1:var $=e.a;return $;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a($e,"-",a(K,dn,i.hQ))+("-cols-"+(a($e,"-",a(K,dn,i.ar))+("-space-x-"+(dn(i.h3.a)+("-space-y-"+dn(i.h3.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.am)+("-"+(k(o.gq)+("-"+(k(o.iH)+("-"+k(o.gY)))))));case 11:var c=e.a,l=e.b,$=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a($e," ",a(K,function(m){var d=Vt(m);if(d==="")return"";var b=d;return b+("-"+$)},l));default:var f=e.a;return a(we,"",Jl(f))}},ko=v(function(e,r){var n=r;return s(Yn,e,0,n)}),p3=v(function(e,r){var n=a(ta,e,r);return!n.$}),h3=v(function(e,r){var n=r;return a(p3,e,n)}),Wf=v(function(e,r){var n=r.a,t=r.b,i=Vt(e);return a(h3,i,n)?r:w(a(ko,i,n),a(x,e,t))}),ve=v(function(e,r){return{$:0,a:e,b:r}}),Lt=v(function(e,r){return{$:0,a:e,b:r}}),C=function(e){return"."+e},g3=T(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(x,i,n)}),Or=v(function(e,r){return s(ir,g3(e),M,r)}),Wa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Re(r*255))+(","+k(Re(n*255))+(","+k(Re(t*255))+(","+(fe(i)+")")))))},Uc=function(e){return a($e," ",a(Or,Cr,u([e.eu?O("inset"):U,O(fe(e.e6.a)+"px"),O(fe(e.e6.b)+"px"),O(fe(e.bb)+"px"),O(fe(e.bs)+"px"),O(Wa(e.cg))])))},Of=function(e){return u([a(Lt,C(p.el)+":focus-within",a(Or,Cr,u([a(Ce,function(r){return a(ve,"border-color",Wa(r))},e.f8),a(Ce,function(r){return a(ve,"background-color",Wa(r))},e.f0),a(Ce,function(r){return a(ve,"box-shadow",Uc({bb:r.bb,cg:r.cg,eu:!1,e6:a(Wc,_t,a(qi,_t,r.e6)),bs:r.bs}))},e.hW),O(a(ve,"outline","none"))]))),a(Lt,C(p.fY)+":focus .focusable, "+(C(p.fY)+".focusable:focus, "+(".ui-slide-bar:focus + "+(C(p.fY)+" .focusable-thumb"))),a(Or,Cr,u([a(Ce,function(r){return a(ve,"border-color",Wa(r))},e.f8),a(Ce,function(r){return a(ve,"background-color",Wa(r))},e.f0),a(Ce,function(r){return a(ve,"box-shadow",Uc({bb:r.bb,cg:r.cg,eu:!1,e6:a(Wc,_t,a(qi,_t,r.e6)),bs:r.bs}))},e.hW),O(a(ve,"outline","none"))])))])},mn=function(e){return zn(Jv(e))},Uf=v(function(e,r){return a(Sl,d0(e),Rv(r))}),lc=v(function(e,r){return{$:2,a:e,b:r}}),Rl=function(e){return{$:6,a:e}},Z=v(function(e,r){return{$:1,a:e,b:r}}),Mr=v(function(e,r){return{$:0,a:e,b:r}}),I=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),b3=v(function(e,r){return{$:3,a:e,b:r}}),Yf=u([0,1,2,3,4,5]),_3=v(function(e,r){return r.b?s(ir,x,r,e):e}),br=function(e){return s(ir,_3,M,e)},xa=v(function(e,r){return br(a(K,e,r))}),y3=function(e){switch(e){case 0:return C(p.gs);case 1:return C(p.cj);case 2:return C(p.cl);case 3:return C(p.bD);case 4:return C(p.ck);default:return C(p.aE)}},Qi=function(e){switch(e){case 0:return C(p.fV);case 1:return C(p.fO);case 2:return C(p.d8);case 3:return C(p.d7);case 4:return C(p.fP);default:return C(p.fQ)}},yt=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return u([a(I,y3(n),i),a(Z,C(p.fY),u([a(I,Qi(n),o)]))])};return Rl(a(xa,r,Yf))},C$=u([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(I,C(p.c7),u([a(g,"z-index","0"),a(Z,C(p.f2),u([a(g,"z-index","-1")]))])),a(I,C(p.hV),u([a(Z,C(p.ih),u([a(I,C(p.c9),u([a(g,"flex-grow","0")])),a(I,C(p.d$),u([a(g,"align-self","auto !important")]))]))])),a(Z,C(p.c8),u([a(g,"height","auto")])),a(Z,C(p.c9),u([a(g,"flex-grow","100000")])),a(Z,C(p.d$),u([a(g,"width","100%")])),a(Z,C(p.fJ),u([a(g,"width","100%")])),a(Z,C(p.d_),u([a(g,"align-self","flex-start")])),yt(function(e){switch(e){case 0:return w(u([a(g,"justify-content","flex-start")]),u([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return w(u([a(g,"justify-content","flex-end")]),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return w(u([a(g,"align-items","flex-end")]),u([a(g,"align-self","flex-end")]));case 3:return w(u([a(g,"align-items","flex-start")]),u([a(g,"align-self","flex-start")]));case 4:return w(u([a(g,"align-items","center")]),u([a(g,"align-self","center")]));default:return w(u([a(Z,C(p.fY),u([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),x3=function(e){var r=function(n){return u([a(Z,C(p.fY),u([a(I,Qi(n),e(n))]))])};return Rl(a(xa,r,Yf))},w3=function(){return u([0,1,2,3,4,5])}(),S3=u([a(Mr,"html,body",u([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(Mr,Y(C(p.fY),Y(C(p.hZ),C(p.g2))),u([a(g,"display","block"),a(I,C(p.c9),u([a(Z,"img",u([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(I,C(p.d$),u([a(Z,"img",u([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(Mr,C(p.fY)+":focus",u([a(g,"outline","none")])),a(Mr,C(p.hP),u([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(I,Y(C(p.fY),C(p.c9)),u([a(g,"height","100%"),a(Z,C(p.c9),u([a(g,"height","100%")]))])),a(Z,C(p.g4),u([a(I,C(p.bo),u([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(Mr,C(p.bo),u([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(I,C(p.hZ),C$),Rl(function(e){return a(K,e,w3)}(function(e){switch(e){case 0:return a(I,C(p.fM),u([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(Z,C(p.c9),u([a(g,"height","auto")])),a(Z,C(p.d$),u([a(g,"width","100%")])),a(g,"pointer-events","none"),a(Z,"*",u([a(g,"pointer-events","auto")]))]));case 1:return a(I,C(p.f3),u([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(Z,"*",u([a(g,"pointer-events","auto")])),a(Z,C(p.c9),u([a(g,"height","auto")]))]));case 2:return a(I,C(p.hw),u([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(Z,"*",u([a(g,"pointer-events","auto")]))]));case 3:return a(I,C(p.hu),u([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(Z,"*",u([a(g,"pointer-events","auto")]))]));case 4:return a(I,C(p.g4),u([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(Z,"*",u([a(g,"pointer-events","auto")]))]));default:return a(I,C(p.f2),u([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(Z,"*",u([a(g,"pointer-events","auto")]))]))}}))])),a(Mr,C(p.fY),u([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(I,C(p.d0),u([a(g,"flex-wrap","wrap")])),a(I,C(p.e5),u([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(I,C(p.gv),u([a(g,"cursor","pointer")])),a(I,C(p.gw),u([a(g,"cursor","text")])),a(I,C(p.hC),u([a(g,"pointer-events","none !important")])),a(I,C(p.ce),u([a(g,"pointer-events","auto !important")])),a(I,C(p.a8),u([a(g,"opacity","0")])),a(I,C(p.a1),u([a(g,"opacity","1")])),a(I,C(Y(p.g$,p.a8))+":hover",u([a(g,"opacity","0")])),a(I,C(Y(p.g$,p.a1))+":hover",u([a(g,"opacity","1")])),a(I,C(Y(p.gO,p.a8))+":focus",u([a(g,"opacity","0")])),a(I,C(Y(p.gO,p.a1))+":focus",u([a(g,"opacity","1")])),a(I,C(Y(p.cW,p.a8))+":active",u([a(g,"opacity","0")])),a(I,C(Y(p.cW,p.a1))+":active",u([a(g,"opacity","1")])),a(I,C(p.fw),u([a(g,"transition",a($e,", ",a(K,function(e){return e+" 160ms"},u(["transform","opacity","filter","background-color","color","font-size"]))))])),a(I,C(p.hS),u([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(I,C(p.hT),u([a(g,"overflow-x","auto"),a(I,C(p.am),u([a(g,"flex-shrink","1")]))])),a(I,C(p.hU),u([a(g,"overflow-y","auto"),a(I,C(p.aD),u([a(g,"flex-shrink","1")])),a(I,C(p.hZ),u([a(g,"flex-shrink","1")]))])),a(I,C(p.gl),u([a(g,"overflow","hidden")])),a(I,C(p.gn),u([a(g,"overflow-x","hidden")])),a(I,C(p.go),u([a(g,"overflow-y","hidden")])),a(I,C(p.d_),u([a(g,"width","auto")])),a(I,C(p.cb),u([a(g,"border-width","0")])),a(I,C(p.f9),u([a(g,"border-style","dashed")])),a(I,C(p.ga),u([a(g,"border-style","dotted")])),a(I,C(p.gb),u([a(g,"border-style","solid")])),a(I,C(p.ih),u([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(I,C(p.hc),u([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(I,C(p.hZ),C$),a(I,C(p.am),u([a(g,"display","flex"),a(g,"flex-direction","row"),a(Z,C(p.fY),u([a(g,"flex-basis","0%"),a(I,C(p.fI),u([a(g,"flex-basis","auto")])),a(I,C(p.eF),u([a(g,"flex-basis","auto")]))])),a(Z,C(p.c9),u([a(g,"align-self","stretch !important")])),a(Z,C(p.eq),u([a(g,"align-self","stretch !important")])),a(Z,C(p.d$),u([a(g,"flex-grow","100000")])),a(Z,C(p.ci),u([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(Z,"u:first-of-type."+p.fU,u([a(g,"flex-grow","1")])),a(Z,"s:first-of-type."+p.fS,u([a(g,"flex-grow","1"),a(Z,C(p.fP),u([a(g,"margin-left","auto !important")]))])),a(Z,"s:last-of-type."+p.fS,u([a(g,"flex-grow","1"),a(Z,C(p.fP),u([a(g,"margin-right","auto !important")]))])),a(Z,"s:only-of-type."+p.fS,u([a(g,"flex-grow","1"),a(Z,C(p.fQ),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(Z,"s:last-of-type."+(p.fS+" ~ u"),u([a(g,"flex-grow","0")])),a(Z,"u:first-of-type."+(p.fU+(" ~ s."+p.fS)),u([a(g,"flex-grow","0")])),yt(function(e){switch(e){case 0:return w(u([a(g,"align-items","flex-start")]),u([a(g,"align-self","flex-start")]));case 1:return w(u([a(g,"align-items","flex-end")]),u([a(g,"align-self","flex-end")]));case 2:return w(u([a(g,"justify-content","flex-end")]),M);case 3:return w(u([a(g,"justify-content","flex-start")]),M);case 4:return w(u([a(g,"justify-content","center")]),M);default:return w(u([a(g,"align-items","center")]),u([a(g,"align-self","center")]))}}),a(I,C(p.h2),u([a(g,"justify-content","space-between")])),a(I,C(p.ct),u([a(g,"align-items","baseline")]))])),a(I,C(p.aD),u([a(g,"display","flex"),a(g,"flex-direction","column"),a(Z,C(p.fY),u([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(I,C(p.ep),u([a(g,"flex-basis","auto")]))])),a(Z,C(p.c9),u([a(g,"flex-grow","100000")])),a(Z,C(p.d$),u([a(g,"width","100%")])),a(Z,C(p.fJ),u([a(g,"width","100%")])),a(Z,C(p.d_),u([a(g,"align-self","flex-start")])),a(Z,"u:first-of-type."+p.fR,u([a(g,"flex-grow","1")])),a(Z,"s:first-of-type."+p.fT,u([a(g,"flex-grow","1"),a(Z,C(p.fQ),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(Z,"s:last-of-type."+p.fT,u([a(g,"flex-grow","1"),a(Z,C(p.fQ),u([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(Z,"s:only-of-type."+p.fT,u([a(g,"flex-grow","1"),a(Z,C(p.fQ),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(Z,"s:last-of-type."+(p.fT+" ~ u"),u([a(g,"flex-grow","0")])),a(Z,"u:first-of-type."+(p.fR+(" ~ s."+p.fT)),u([a(g,"flex-grow","0")])),yt(function(e){switch(e){case 0:return w(u([a(g,"justify-content","flex-start")]),u([a(g,"margin-bottom","auto")]));case 1:return w(u([a(g,"justify-content","flex-end")]),u([a(g,"margin-top","auto")]));case 2:return w(u([a(g,"align-items","flex-end")]),u([a(g,"align-self","flex-end")]));case 3:return w(u([a(g,"align-items","flex-start")]),u([a(g,"align-self","flex-start")]));case 4:return w(u([a(g,"align-items","center")]),u([a(g,"align-self","center")]));default:return w(u([a(g,"justify-content","center")]),M)}}),a(Z,C(p.ci),u([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(I,C(p.h2),u([a(g,"justify-content","space-between")]))])),a(I,C(p.gT),u([a(g,"display","-ms-grid"),a(Z,".gp",u([a(Z,C(p.fY),u([a(g,"width","100%")]))])),a(b3,w("display","grid"),u([w("display","grid")])),x3(function(e){switch(e){case 0:return u([a(g,"justify-content","flex-start")]);case 1:return u([a(g,"justify-content","flex-end")]);case 2:return u([a(g,"align-items","flex-end")]);case 3:return u([a(g,"align-items","flex-start")]);case 4:return u([a(g,"align-items","center")]);default:return u([a(g,"justify-content","center")])}})])),a(I,C(p.e9),u([a(g,"display","block"),a(Z,C(p.fY+":first-child"),u([a(g,"margin","0 !important")])),a(Z,C(p.fY+(Qi(3)+(":first-child + ."+p.fY))),u([a(g,"margin","0 !important")])),a(Z,C(p.fY+(Qi(2)+(":first-child + ."+p.fY))),u([a(g,"margin","0 !important")])),yt(function(e){switch(e){case 0:return w(M,M);case 1:return w(M,M);case 2:return w(M,u([a(g,"float","right"),a(I,"::after",u([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return w(M,u([a(g,"float","left"),a(I,"::after",u([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return w(M,M);default:return w(M,M)}})])),a(I,C(p.g8),u([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(I,C(p.hb),u([a(I,C(p.hZ),u([a(g,"flex-basis","auto")]))])),a(I,C(p.ha),u([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(Z,C(p.g9),u([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(I,C(p.fa),u([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(I,C(p.c7),u([a(g,"z-index","0"),a(Z,C(p.f2),u([a(g,"z-index","-1")]))])),a(lc,C(p.ih),u([a(g,"display","inline"),a(g,"white-space","normal")])),a(lc,C(p.fa),u([a(g,"display","inline"),a(I,"::after",u([a(g,"content","none")])),a(I,"::before",u([a(g,"content","none")]))])),a(lc,C(p.hZ),u([a(g,"display","inline"),a(g,"white-space","normal"),a(I,C(p.fI),u([a(g,"display","inline-block")])),a(I,C(p.g4),u([a(g,"display","flex")])),a(I,C(p.f2),u([a(g,"display","flex")])),a(I,C(p.fM),u([a(g,"display","flex")])),a(I,C(p.f3),u([a(g,"display","flex")])),a(I,C(p.hw),u([a(g,"display","flex")])),a(I,C(p.hu),u([a(g,"display","flex")])),a(Z,C(p.ih),u([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(Z,C(p.am),u([a(g,"display","inline")])),a(Z,C(p.aD),u([a(g,"display","inline-flex")])),a(Z,C(p.gT),u([a(g,"display","inline-grid")])),yt(function(e){switch(e){case 0:return w(M,M);case 1:return w(M,M);case 2:return w(M,u([a(g,"float","right")]));case 3:return w(M,u([a(g,"float","left")]));case 4:return w(M,M);default:return w(M,M)}})])),a(I,".hidden",u([a(g,"display","none")])),a(I,C(p.it),u([a(g,"font-weight","100")])),a(I,C(p.ik),u([a(g,"font-weight","200")])),a(I,C(p.io),u([a(g,"font-weight","300")])),a(I,C(p.iq),u([a(g,"font-weight","400")])),a(I,C(p.ip),u([a(g,"font-weight","500")])),a(I,C(p.is),u([a(g,"font-weight","600")])),a(I,C(p.f7),u([a(g,"font-weight","700")])),a(I,C(p.ij),u([a(g,"font-weight","800")])),a(I,C(p.il),u([a(g,"font-weight","900")])),a(I,C(p.hg),u([a(g,"font-style","italic")])),a(I,C(p.h8),u([a(g,"text-decoration","line-through")])),a(I,C(p.iB),u([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(I,Y(C(p.iB),C(p.h8)),u([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(I,C(p.iu),u([a(g,"font-style","normal")])),a(I,C(p.im),u([a(g,"text-align","justify")])),a(I,C(p.cS),u([a(g,"text-align","justify-all")])),a(I,C(p.ii),u([a(g,"text-align","center")])),a(I,C(p.ir),u([a(g,"text-align","right")])),a(I,C(p.$9),u([a(g,"text-align","left")])),a(I,".modal",u([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),Rn=function(e){return u([a(Mr,".v-"+e,u([a(g,"font-feature-settings",'"'+(e+'"'))])),a(Mr,".v-"+(e+"-off"),u([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},C3=br(u([a(K,function(e){return a(Mr,".border-"+k(e),u([a(g,"border-width",k(e)+"px")]))},a(En,0,6)),a(K,function(e){return a(Mr,".font-size-"+k(e),u([a(g,"font-size",k(e)+"px")]))},a(En,8,32)),a(K,function(e){return a(Mr,".p-"+k(e),u([a(g,"padding",k(e)+"px")]))},a(En,0,24)),u([a(Mr,".v-smcp",u([a(g,"font-variant","small-caps")])),a(Mr,".v-smcp-off",u([a(g,"font-variant","normal")]))]),Rn("zero"),Rn("onum"),Rn("liga"),Rn("dlig"),Rn("ordn"),Rn("tnum"),Rn("afrc"),Rn("frac")])),z3=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fY+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fY+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),P3=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,L3=`
input[type=range] {
  -webkit-appearance: none; 
  background: transparent;
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  width: 100%;
  outline: dashed 1px;
  height: 100%;
  opacity: 0;
}
`,T3=`
input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-moz-range-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range]::-ms-thumb {
    opacity: 0.5;
    width: 80px;
    height: 80px;
    background-color: black;
    border:none;
    border-radius: 5px;
}
input[type=range][orient=vertical]{
    writing-mode: bt-lr; /* IE */
    -webkit-appearance: slider-vertical;  /* WebKit */
}
`,M3=`
input[type=range]::-moz-range-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-ms-track {
    background: transparent;
    cursor: pointer;
}
input[type=range]::-webkit-slider-runnable-track {
    background: transparent;
    cursor: pointer;
}
`,k3="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(C(p.fY)+(C(p.am)+(" > "+(C(p.fY)+(" { flex-basis: auto !important; } "+(C(p.fY)+(C(p.am)+(" > "+(C(p.fY)+(C(p.ci)+(" { flex-basis: auto !important; }}"+(P3+(L3+(M3+(T3+z3))))))))))))))),ha=function(e){return a($e,"",e)},ja=v(function(e,r){return{cf:r,J:M,aN:M,an:e}}),Aa=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return F(o,{aN:a(x,w(c,l),o.aN)});case 3:var $=i.a,f=$.a,m=$.b,d=i.b;return F(o,{J:a(x,{cf:`
}`,J:M,aN:d,an:"@supports ("+(f+(":"+(m+(") {"+n.an))))},o.J)});case 5:var b=i.a,h=i.b;return F(o,{J:a(x,a(Aa,a(ja,n.an+(" + "+b),""),h),o.J)});case 1:var y=i.a,_=i.b;return F(o,{J:a(x,a(Aa,a(ja,n.an+(" > "+y),""),_),o.J)});case 2:var y=i.a,_=i.b;return F(o,{J:a(x,a(Aa,a(ja,n.an+(" "+y),""),_),o.J)});case 4:var z=i.a,P=i.b;return F(o,{J:a(x,a(Aa,a(ja,Y(n.an,z),""),P),o.J)});default:var S=i.a;return F(o,{J:a(x,a(Aa,a(ja,n.an,""),S),o.J)})}});return s(ir,t,n,r)}),D3=function(e){var r=function(i){return ha(a(K,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aN;return o.b?i.an+("{"+(r(i.aN)+(i.cf+"}"))):""},t=function(i){var o=i;return Y(n(o),ha(a(K,t,o.J)))};return ha(a(K,t,s(ir,v(function(i,o){var c=i.a,l=i.b;return a(x,a(Aa,a(ja,c,""),l),o)}),M,e)))},z$=Y(k3,D3(Y(S3,C3))),ea=Ic,qf=function(e){var r=e.e3;switch(r){case 0:return s(mn,"div",M,u([s(mn,"style",M,u([ea(z$)]))]));case 1:return ea("");default:return s(mn,"elm-ui-static-rules",u([a(Uf,"rules",At(z$))]),M)}},sa=v(function(e,r){return s(Ae,Ev(e),Iv(),r)}),wa=function(e){return s(Ae,v(function(r,n){var t=r.a,i=r.b;return s(Hp,t,i,n)}),Rp(),e)},N3=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hq;return'"'+(r+'"')}},I3=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},E3=function(e){if(e.$===5){var r=e.a;return a(ba,I3,r.fB)}else return!1},Kr=v(function(e,r){return ge(e,r)<0?e:r}),st=T(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Fe=re(function(e,r,n,t){if(r.$===1)return u([n+("{"+(s(Ae,st(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.g$;switch(o){case 0:return M;case 2:return u([n+("-hv {"+(s(Ae,st(!0),"",t)+`
}`))]);default:return u([n+("-hv:hover {"+(s(Ae,st(!1),"",t)+`
}`))])}case 0:var c=s(Ae,st(!1),"",t);return u([n+("-fs:focus {"+(c+`
}`)),"."+(p.fY+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(C(p.fY)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return u([n+("-act:active {"+(s(Ae,st(!1),"",t)+`
}`))])}}),B3=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},F3=function(e){if(e.$===5){var r=e.a;return O(a($e,", ",a(K,B3,r.fB)))}else return U},j3=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return O("translate3d("+(fe(n)+("px, "+(fe(t)+("px, "+(fe(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,$=o.c,f=e.b,m=f.a,d=f.b,b=f.c,h=e.c,y=h.a,_=h.b,z=h.c,P=e.d,S="translate3d("+(fe(c)+("px, "+(fe(l)+("px, "+(fe($)+"px)"))))),D="scale3d("+(fe(m)+(", "+(fe(d)+(", "+(fe(b)+")"))))),W="rotate3d("+(fe(y)+(", "+(fe(_)+(", "+(fe(z)+(", "+(fe(P)+"rad)")))))));return O(S+(" "+(D+(" "+W))))}},Hl=T(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(Fe,e,n,t,i);case 13:var $=r.a,b=r.b;return L(Fe,e,n,"."+$,u([a(ve,"box-shadow",b)]));case 12:var $=r.a,o=r.b,c=a(er,0,a(Kr,1,1-o));return L(Fe,e,n,"."+$,u([a(ve,"opacity",fe(c))]));case 2:var l=r.a;return L(Fe,e,n,".font-size-"+k(l),u([a(ve,"font-size",k(l)+"px")]));case 1:var $=r.a,f=r.b,m=a($e,", ",a(Or,F3,f)),d=u([a(ve,"font-family",a($e,", ",a(K,N3,f))),a(ve,"font-feature-settings",m),a(ve,"font-variant",a(ba,E3,f)?"small-caps":"normal")]);return L(Fe,e,n,"."+$,d);case 3:var he=r.a,b=r.b,ec=r.c;return L(Fe,e,n,"."+he,u([a(ve,b,ec)]));case 4:var he=r.a,b=r.b,h=r.c;return L(Fe,e,n,"."+he,u([a(ve,b,Wa(h))]));case 5:var Q=r.a,y=r.b,_=r.c,z=k(_)+"px",P=k(y)+"px",S="."+p.am,D="."+(p.d0+S),_e="."+p.d8,W="."+p.fa,ne="."+p.e9,Me="."+p.d7,ie=fe(_/2)+"px",ce=fe(y/2)+"px",le="."+p.aD,he="."+Q,te="."+p.fY;return br(u([L(Fe,e,n,he+(S+(" > "+(te+(" + "+te)))),u([a(ve,"margin-left",P)])),L(Fe,e,n,he+(D+(" > "+te)),u([a(ve,"margin",ie+(" "+ce))])),L(Fe,e,n,he+(le+(" > "+(te+(" + "+te)))),u([a(ve,"margin-top",z)])),L(Fe,e,n,he+(ne+(" > "+(te+(" + "+te)))),u([a(ve,"margin-top",z)])),L(Fe,e,n,he+(ne+(" > "+Me)),u([a(ve,"margin-right",P)])),L(Fe,e,n,he+(ne+(" > "+_e)),u([a(ve,"margin-left",P)])),L(Fe,e,n,Y(he,W),u([a(ve,"line-height","calc(1em + "+(k(_)+"px)"))])),L(Fe,e,n,"textarea"+(te+he),u([a(ve,"line-height","calc(1em + "+(k(_)+"px)")),a(ve,"height","calc(100% + "+(k(_)+"px)"))])),L(Fe,e,n,he+(W+(" > "+Me)),u([a(ve,"margin-right",P)])),L(Fe,e,n,he+(W+(" > "+_e)),u([a(ve,"margin-left",P)])),L(Fe,e,n,he+(W+"::after"),u([a(ve,"content","''"),a(ve,"display","block"),a(ve,"height","0"),a(ve,"width","0"),a(ve,"margin-top",k(-1*(_/2|0))+"px")])),L(Fe,e,n,he+(W+"::before"),u([a(ve,"content","''"),a(ve,"display","block"),a(ve,"height","0"),a(ve,"width","0"),a(ve,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var Q=r.a,be=r.b,_e=r.c,Ee=r.d,Me=r.e,he="."+Q;return L(Fe,e,n,he,u([a(ve,"padding",fe(be)+("px "+(fe(_e)+("px "+(fe(Ee)+("px "+(fe(Me)+"px")))))))]));case 6:var Q=r.a,be=r.b,_e=r.c,Ee=r.d,Me=r.e,he="."+Q;return L(Fe,e,n,he,u([a(ve,"border-width",k(be)+("px "+(k(_e)+("px "+(k(Ee)+("px "+(k(Me)+"px")))))))]));case 8:var pe=r.a,Be=T(function(lr,mt,Ln){e:for(;;)switch(Ln.$){case 0:var kd=Ln.a;return k(kd)+"px";case 1:var qr=w(lr,mt);if(qr.a.$===1){if(qr.b.$===1)return qr.a,qr.b,"max-content";qr.a;var ca=qr.b.a;return"minmax(max-content, "+(k(ca)+"px)")}else if(qr.b.$===1){var la=qr.a.a;return qr.b,"minmax("+(k(la)+"px, max-content)")}else{var la=qr.a.a,ca=qr.b.a;return"minmax("+(k(la)+("px, "+(k(ca)+"px)")))}case 2:var e$=Ln.a,Zr=w(lr,mt);if(Zr.a.$===1){if(Zr.b.$===1)return Zr.a,Zr.b,k(e$)+"fr";Zr.a;var ca=Zr.b.a;return"minmax(max-content, "+(k(ca)+"px)")}else if(Zr.b.$===1){var la=Zr.a.a;return Zr.b,"minmax("+(k(la)+("px, "+(k(e$)+"frfr)")))}else{var la=Zr.a.a,ca=Zr.b.a;return"minmax("+(k(la)+("px, "+(k(ca)+"px)")))}case 3:var rc=Ln.a,nc=Ln.b,ac=O(rc),tc=mt,ic=nc;lr=ac,mt=tc,Ln=ic;continue e;default:var rc=Ln.a,nc=Ln.b,ac=lr,tc=O(rc),ic=nc;lr=ac,mt=tc,Ln=ic;continue e}}),E=function(lr){return s(Be,U,U,lr)};E(pe.h3.a);var B=E(pe.h3.b),j=function(lr){return"grid-template-rows: "+(lr+";")}(a($e," ",a(K,E,pe.hQ))),A=function(lr){return"-ms-grid-rows: "+(lr+";")}(a($e,B,a(K,E,pe.ar))),J=function(lr){return"-ms-grid-columns: "+(lr+";")}(a($e,B,a(K,E,pe.ar))),R="grid-row-gap:"+(E(pe.h3.b)+";"),H="grid-column-gap:"+(E(pe.h3.a)+";"),G=function(lr){return"grid-template-columns: "+(lr+";")}(a($e," ",a(K,E,pe.ar))),he=".grid-rows-"+(a($e,"-",a(K,dn,pe.hQ))+("-cols-"+(a($e,"-",a(K,dn,pe.ar))+("-space-x-"+(dn(pe.h3.a)+("-space-y-"+dn(pe.h3.b))))))),Xo=he+("{"+(G+(j+(H+(R+"}"))))),Qo="@supports (display:grid) {"+(Xo+"}"),Ko=he+("{"+(J+(A+"}")));return u([Ko,Qo]);case 9:var Xe=r.a,si=a($e," ",u(["-ms-grid-row: "+(k(Xe.am)+";"),"-ms-grid-row-span: "+(k(Xe.gY)+";"),"-ms-grid-column: "+(k(Xe.gq)+";"),"-ms-grid-column-span: "+(k(Xe.iH)+";")])),Zo=a($e," ",u(["grid-row: "+(k(Xe.am)+(" / "+(k(Xe.am+Xe.gY)+";"))),"grid-column: "+(k(Xe.gq)+(" / "+(k(Xe.gq+Xe.iH)+";")))])),he=".grid-pos-"+(k(Xe.am)+("-"+(k(Xe.gq)+("-"+(k(Xe.iH)+("-"+k(Xe.gY))))))),Xo=he+("{"+(Zo+"}")),Qo="@supports (display:grid) {"+(Xo+"}"),Ko=he+("{"+(si+"}"));return u([Ko,Qo]);case 11:var he=r.a,Ld=r.b,Td=function(lr){return s(Hl,e,lr,O(he))};return a(xa,Td,Ld);default:var Ku=r.a,ec=j3(Ku),he=Jl(Ku),di=w(he,ec);if(!di.a.$&&!di.b.$){var Q=di.a.a,Md=di.b.a;return L(Fe,e,n,"."+Q,u([a(ve,"transform",Md)]))}else return M}}),A3=v(function(e,r){return wa(a(K,function(n){var t=s(Hl,e,n,U);return w(Vt(n),a(sa,At,t))},r))}),Ki=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a($e,"",a(K,n,r))+"}"))}),P$=T(function(e,r,n){var t=n.a,i=n.b;return u([a(Ki,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Ki,"."+(e+("."+(r+("> ."+(p.ih+(", ."+(e+(" ."+(r+(" > ."+p.ih)))))))))),i)])}),V3=T(function(e,r,n){var t=r.a,i=r.b,o=me(e,n)?e:n+(" ."+e);return a($e," ",Y(s(P$,o,p.h_,i),s(P$,o,p.gP,t)))}),J3=v(function(e,r){var n=me(e,r)?e:r+(" ."+e);return a($e," ",u([a(Ki,"."+(n+("."+(p.h_+(", "+("."+(n+(" ."+p.h_))))))),u([w("line-height","1")])),a(Ki,"."+(n+("."+(p.h_+("> ."+(p.ih+(", ."+(n+(" ."+(p.h_+(" > ."+p.ih)))))))))),u([w("vertical-align","0"),w("line-height","1")]))]))}),L$=T(function(e,r,n){return{gY:r/e,bs:e,fD:n}}),Gl=v(function(e,r){return s(ir,v(function(n,t){return e(n)?a(x,n,t):t}),M,r)}),Wl=function(e){if(e.b){var r=e.a,n=e.b;return O(s(Ae,er,r,n))}else return U},T$=function(e){if(e.b){var r=e.a,n=e.b;return O(s(Ae,Kr,r,n))}else return U},M$=function(e){var r=u([e.gf,e.f1,e.gA,e.hl]),n=a(we,e.gA,T$(r)),t=a(we,e.f1,T$(a(Gl,function(f){return!me(f,n)},r))),i=a(we,e.gf,Wl(r)),o=1/(i-t),c=1-i,l=1/(i-n),$=1-i;return{gf:s(L$,o,i-t,c),en:s(L$,l,i-n,$)}},k$=function(e){return w(u([w("display","block")]),u([w("display","inline-block"),w("line-height",fe(e.gY)),w("vertical-align",fe(e.fD)+"em"),w("font-size",fe(e.bs)+"em")]))},R3=function(e){return s(Ae,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fN;if(i.$===1)return n;var o=i.a;return O(w(k$(function(c){return c.en}(M$(o))),k$(function(c){return c.gf}(M$(o)))))}else return n;else return n}),U,e)},H3=function(e){var r=function(o){if(o.$===4){var c=o.b;return O("@import url('"+(c+"');"))}else return U},n=function(o){o.a;var c=o.b,l=a($e,`
`,a(Or,r,c));return l},t=a(K,Co,e),i=function(o){var c=o.a,l=o.b,$=R3(l);if($.$===1)return a($e,"",a(K,J3(c),t));var f=$.a;return a($e,"",a(K,a(V3,c,f),t))};return Y(a($e,`
`,a(K,n,e)),a($e,`
`,a(K,i,e)))},G3=function(e){if(e.$===1){var r=e.a,n=e.b;return O(w(r,n))}else return U},D$=v(function(e,r){var n=v(function(c,l){return{cM:Y(l.cM,s(Hl,e,c,U)),b1:function(){var $=G3(c);if($.$===1)return l.b1;var f=$.a;return a(x,f,l.b1)}()}}),t=s(Ae,n,{cM:M,b1:M},r),i=t.b1,o=t.cM;return Y(H3(i),ha(o))}),Zf=v(function(e,r){var n=e.e3;switch(n){case 0:return s(mn,"div",M,u([s(mn,"style",M,u([ea(a(D$,e,r))]))]));case 1:return s(mn,"div",M,u([s(mn,"style",M,u([ea(a(D$,e,r))]))]));default:return s(mn,"elm-ui-rules",u([a(Uf,"rules",a(A3,e,r))]),M)}}),N$=re(function(e,r,n,t){var i=a(Zf,r,s(Ae,Wf,w(Kt,Of(r.gO)),n).b);return e?a(x,w("static-stylesheet",qf(r)),a(x,w("dynamic-stylesheet",i),t)):a(x,w("dynamic-stylesheet",i),t)}),I$=re(function(e,r,n,t){var i=a(Zf,r,s(Ae,Wf,w(Kt,Of(r.gO)),n).b);return e?a(x,qf(r),a(x,i,t)):a(x,i,t)}),Yc=Se(45),Jt=Se(37),Xf=function(e){return u0(Jv(e))},W3=zn("p"),yr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return me(o&t,o)}else{var i=e.a;return me(i&n,i)}}),E$=zn("s"),B$=zn("u"),qc=Se(44),Rt=Se(39),gi=Er(function(e,r,n,t,i,o){var c=v(function($,f){if(t.$===1){var m=t.a;return s(Xf,$,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,h=i.b;return L(N$,!1,b,h,m);default:var b=i.a,h=i.b;return L(N$,!0,b,h,m)}}())}else{var d=t.a;return a(function(){switch($){case"div":return Qa;case"p":return W3;default:return mn($)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,h=i.b;return L(I$,!1,b,h,d);default:var b=i.a,h=i.b;return L(I$,!0,b,h,d)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var $=r.a;return a(c,$,n);default:var $=r.a,f=r.b;return s(mn,$,n,u([a(c,f,u([Dr(p.fY+(" "+p.hZ))]))]))}}();switch(o){case 0:return a(yr,Rt,e)&&!a(yr,qc,e)?l:a(yr,Rf,e)?a(B$,u([Dr(a($e," ",u([p.fY,p.hZ,p.ci,p.aE,p.fU])))]),u([l])):a(yr,Hf,e)?a(E$,u([Dr(a($e," ",u([p.fY,p.hZ,p.ci,p.aE,p.fS])))]),u([l])):l;case 1:return a(yr,Jt,e)&&!a(yr,Yc,e)?l:a(yr,Gf,e)?a(E$,u([Dr(a($e," ",u([p.fY,p.hZ,p.ci,p.fT])))]),u([l])):a(yr,Jf,e)?a(B$,u([Dr(a($e," ",u([p.fY,p.hZ,p.ci,p.fR])))]),u([l])):l;default:return l}}),Gn=function(e){return!e.b},Do=ea,O3=p.fY+(" "+(p.ih+(" "+(p.d_+(" "+p.c8))))),Ht=function(e){return a(Qa,u([Dr(O3)]),u([Do(e)]))},U3=p.fY+(" "+(p.ih+(" "+(p.d$+(" "+p.c9))))),F$=function(e){return a(Qa,u([Dr(U3)]),u([Do(e)]))},Y3=T(function(e,r,n){var t=v(function(y,_){var z=y.a,P=y.b,S=_.a,D=_.b;switch(P.$){case 0:var W=P.a;return me(e,Ga),w(a(x,w(z,W(e)),S),D);case 1:var ne=P.a;return me(e,Ga),w(a(x,w(z,a(ne.g0,va,e)),S),Gn(D)?ne.h9:Y(ne.h9,D));case 2:var ie=P.a;return w(a(x,w(z,me(e,mr)?F$(ie):Ht(ie)),S),D);default:return w(S,D)}}),i=v(function(y,_){var z=_.a,P=_.b;switch(y.$){case 0:var S=y.a;return me(e,Ga),w(a(x,S(e),z),P);case 1:var D=y.a;return me(e,Ga),w(a(x,a(D.g0,va,e),z),Gn(P)?D.h9:Y(D.h9,P));case 2:var W=y.a;return w(a(x,me(e,mr)?F$(W):Ht(W),z),P);default:return w(z,P)}});if(r.$===1){var o=r.a,c=s(ir,t,w(M,M),o),l=c.a,$=c.b,f=Gn($)?n.h9:Y(n.h9,$);if(f.b){var m=f;return Oc({g0:L(gi,n.a_,n.a0,n.aS,x$(s(S$,"nearby-element-pls",l,n.aV))),h9:m})}else return jt(N(gi,n.a_,n.a0,n.aS,x$(s(S$,"nearby-element-pls",l,n.aV)),va))}else{var d=r.a,b=s(ir,i,w(M,M),d),h=b.a,$=b.b,f=Gn($)?n.h9:Y(n.h9,$);if(f.b){var m=f;return Oc({g0:L(gi,n.a_,n.a0,n.aS,je(a(w$,h,n.aV))),h9:m})}else return jt(N(gi,n.a_,n.a0,n.aS,je(a(w$,h,n.aV)),va))}}),xr=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),q3=function(e){return{$:10,a:e}},eo=v(function(e,r){return{$:0,a:e,b:r}}),xe=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(eo,n,o|t)}else{var i=e.a;return a(eo,i|n,t)}}),j$=function(e){return{$:1,a:e}},bi=v(function(e,r){return{$:3,a:e,b:r}}),A$=function(e){return{$:2,a:e}},Z3=v(function(e,r){return a(Qa,u([Dr(function(){switch(e){case 0:return a($e," ",u([p.bo,p.hZ,p.fM]));case 1:return a($e," ",u([p.bo,p.hZ,p.f3]));case 2:return a($e," ",u([p.bo,p.hZ,p.hw]));case 3:return a($e," ",u([p.bo,p.hZ,p.hu]));case 4:return a($e," ",u([p.bo,p.hZ,p.g4]));default:return a($e," ",u([p.bo,p.hZ,p.f2]))}}())]),u([function(){switch(r.$){case 3:return ea("");case 2:var n=r.a;return Ht(n);case 0:var t=r.a;return t(mr);default:var i=r.a;return a(i.g0,va,mr)}}()]))}),X3=T(function(e,r,n){var t=a(Z3,e,r);switch(n.$){case 0:return e===5?j$(u([t])):A$(u([t]));case 1:var i=n.a;return e===5?j$(a(x,t,i)):a(bi,i,u([t]));case 2:var o=n.a;return e===5?a(bi,u([t]),o):A$(a(x,t,o));default:var i=n.a,o=n.b;return e===5?a(bi,a(x,t,i),o):a(bi,i,a(x,t,o))}}),V$=v(function(e,r){return{$:2,a:e,b:r}}),sn=function(e){return{$:1,a:e}},ua=v(function(e,r){switch(r.$){case 0:return sn(e);case 1:var n=r.a;return a(V$,n,e);default:var t=r.a,i=r.b;return a(V$,t,i)}}),Q3=function(e){switch(e){case 0:return p.cX+(" "+p.d7);case 2:return p.cX+(" "+p.d8);default:return p.cX+(" "+p.fP)}},K3=function(e){switch(e){case 0:return p.cY+(" "+p.fV);case 2:return p.cY+(" "+p.fO);default:return p.cY+(" "+p.fQ)}},xt=v(function(e,r){return a(cn,s0(e),Rv(r))}),vn=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),Hn=function(e){return{$:1,a:e}},eb=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var $=r.a;return Hn(V($,0,0));case 1:var f=r.a;return Hn(V(0,f,0));case 2:var m=r.a;return Hn(V(0,0,m));case 3:var n=r.a;return Hn(n);case 4:var n=r.a,h=r.b;return L(vn,V(0,0,0),V(1,1,1),n,h);default:var n=r.a;return L(vn,V(0,0,0),n,V(0,0,1),0)}case 1:var l=e.a,$=l.a,f=l.b,m=l.c;switch(r.$){case 0:var t=r.a;return Hn(V(t,f,m));case 1:var i=r.a;return Hn(V($,i,m));case 2:var o=r.a;return Hn(V($,f,o));case 3:var n=r.a;return Hn(n);case 4:var n=r.a,h=r.b;return L(vn,l,V(1,1,1),n,h);default:var c=r.a;return L(vn,l,c,V(0,0,1),0)}default:var l=e.a,$=l.a,f=l.b,m=l.c,d=e.b,b=e.c,h=e.d;switch(r.$){case 0:var t=r.a;return L(vn,V(t,f,m),d,b,h);case 1:var i=r.a;return L(vn,V($,i,m),d,b,h);case 2:var o=r.a;return L(vn,V($,f,o),d,b,h);case 3:var y=r.a;return L(vn,y,d,b,h);case 4:var _=r.a,z=r.b;return L(vn,l,d,_,z);default:var P=r.a;return L(vn,l,P,b,h)}}}),Ia=Se(7),Qf=Se(36),J$=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(eo,n|i,t|o)}),kn=a(eo,0,0),Zc=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return V(kn,p.ep+(" "+t),u([s(xr,t,"height",n+"px")]));case 1:return V(a(xe,Qf,kn),p.c8,M);case 2:var i=e.a;return i===1?V(a(xe,Jt,kn),p.c9,M):V(a(xe,Jt,kn),p.eq+(" height-fill-"+k(i)),u([s(xr,p.fY+("."+(p.aD+(" > "+C("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,$=e.b,f="min-height-"+k(o),m=s(xr,f,"min-height",k(o)+"px !important"),c=Zc($),b=c.a,h=c.b,y=c.c;return V(a(xe,Yc,b),f+(" "+h),a(x,m,y));default:var l=e.a,$=e.b,f="max-height-"+k(l),m=s(xr,f,"max-height",k(l)+"px"),d=Zc($),b=d.a,h=d.b,y=d.c;return V(a(xe,Yc,b),f+(" "+h),a(x,m,y))}},Kf=Se(38),Xc=function(e){switch(e.$){case 0:var r=e.a;return V(kn,p.fI+(" width-px-"+k(r)),u([s(xr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return V(a(xe,Kf,kn),p.d_,M);case 2:var n=e.a;return n===1?V(a(xe,Rt,kn),p.d$,M):V(a(xe,Rt,kn),p.fJ+(" width-fill-"+k(n)),u([s(xr,p.fY+("."+(p.am+(" > "+C("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+k(t),$=s(xr,l,"min-width",k(t)+"px"),i=Xc(c),m=i.a,d=i.b,b=i.c;return V(a(xe,qc,m),l+(" "+d),a(x,$,b));default:var o=e.a,c=e.b,l="max-width-"+k(o),$=s(xr,l,"max-width",k(o)+"px"),f=Xc(c),m=f.a,d=f.b,b=f.c;return V(a(xe,qc,m),l+(" "+d),a(x,$,b))}},No=Se(27),rb=v(function(e,r){if(me(e,No))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return me(i,c)&&me(i,o)&&me(i,l)&&i>=0&&i<=24;default:return!1}}),Ea=Se(6),R$=Se(30),H$=Se(29),nb=Ie(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var m=l.a,d=l.b;switch(m.$){case 0:var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 3:var _=m.a,b=m.b;if(a(yr,_,n)){var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else{var E=b+(" "+e),B=r,j=a(xe,_,n),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}case 1:var h=m.a,E=e,B=r,j=n,A=t,J=i,R=a(x,h,o),H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 4:var _=m.a,y=m.b;if(a(yr,_,n)){var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else if(a(rb,_,y)){var E=Vt(y)+(" "+e),B=r,j=a(xe,_,n),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else{var E=Vt(y)+(" "+e),B=r,j=a(xe,_,n),A=t,J=a(x,y,i),R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}case 10:var _=m.a,z=m.b,E=e,B=r,j=a(xe,_,n),A=a(eb,t,z),J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 7:var P=m.a;if(a(yr,Ea,n)){var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else switch(P.$){case 0:var S=P.a,E=p.fI+(" width-px-"+k(S))+(" "+e),B=r,j=a(xe,Ea,n),A=t,J=a(x,s(xr,"width-px-"+k(S),"width",k(S)+"px"),i),R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 1:var E=e+(" "+p.d_),B=r,j=a(xe,Kf,a(xe,Ea,n)),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 2:var D=P.a;if(D===1){var E=e+(" "+p.d$),B=r,j=a(xe,Rt,a(xe,Ea,n)),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else{var E=e+(" "+(p.fJ+(" width-fill-"+k(D)))),B=r,j=a(xe,Rt,a(xe,Ea,n)),A=t,J=a(x,s(xr,p.fY+("."+(p.am+(" > "+C("width-fill-"+k(D))))),"flex-grow",k(D*1e5)),i),R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}default:var W=Xc(P),ne=W.a,ie=W.b,Be=W.c,E=e+(" "+ie),B=r,j=a(J$,ne,a(xe,Ea,n)),A=t,J=Y(Be,i),R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}case 8:var ce=m.a;if(a(yr,Ia,n)){var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else switch(ce.$){case 0:var S=ce.a,le=k(S)+"px",te="height-px-"+le,E=p.ep+(" "+(te+(" "+e))),B=r,j=a(xe,Ia,n),A=t,J=a(x,s(xr,te,"height ",le),i),R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 1:var E=p.c8+(" "+e),B=r,j=a(xe,Qf,a(xe,Ia,n)),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 2:var D=ce.a;if(D===1){var E=p.c9+(" "+e),B=r,j=a(xe,Jt,a(xe,Ia,n)),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else{var E=e+(" "+(p.eq+(" height-fill-"+k(D)))),B=r,j=a(xe,Jt,a(xe,Ia,n)),A=t,J=a(x,s(xr,p.fY+("."+(p.aD+(" > "+C("height-fill-"+k(D))))),"flex-grow",k(D*1e5)),i),R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}default:var Q=Zc(ce),ne=Q.a,ie=Q.b,Be=Q.c,E=e+(" "+ie),B=r,j=a(J$,ne,a(xe,Ia,n)),A=t,J=Y(Be,i),R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}case 2:var be=m.a;switch(be.$){case 0:var E=e,B=a(ua,"main",r),j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 1:var E=e,B=a(ua,"nav",r),j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 2:var E=e,B=a(ua,"footer",r),j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 3:var E=e,B=a(ua,"aside",r),j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 4:var _e=be.a;if(_e<=1){var E=e,B=a(ua,"h1",r),j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else if(_e<7){var E=e,B=a(ua,"h"+k(_e),r),j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else{var E=e,B=a(ua,"h6",r),j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}case 9:var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 8:var E=e,B=r,j=n,A=t,J=i,R=a(x,a(xt,"role","button"),o),H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 5:var Ee=be.a,E=e,B=r,j=n,A=t,J=i,R=a(x,a(xt,"aria-label",Ee),o),H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 6:var E=e,B=r,j=n,A=t,J=i,R=a(x,a(xt,"aria-live","polite"),o),H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;default:var E=e,B=r,j=n,A=t,J=i,R=a(x,a(xt,"aria-live","assertive"),o),H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}case 9:var Me=m.a,pe=m.b,Be=function(){switch(pe.$){case 3:return i;case 2:return pe.a,i;case 0:return pe.a,i;default:var Zo=pe.a;return Y(i,Zo.h9)}}(),E=e,B=r,j=n,A=t,J=Be,R=o,H=s(X3,Me,pe,c),G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e;case 6:var Xe=m.a;if(a(yr,R$,n)){var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else{var E=Q3(Xe)+(" "+e),B=r,j=function(he){switch(Xe){case 1:return a(xe,Hf,he);case 2:return a(xe,Rf,he);default:return he}}(a(xe,R$,n)),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}default:var si=m.a;if(a(yr,H$,n)){var E=e,B=r,j=n,A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}else{var E=K3(si)+(" "+e),B=r,j=function(he){switch(si){case 1:return a(xe,Gf,he);case 2:return a(xe,Jf,he);default:return he}}(a(xe,H$,n)),A=t,J=i,R=o,H=c,G=d;e=E,r=B,n=j,t=A,i=J,o=R,c=H,l=G;continue e}}}else{var $=Jl(t);if($.$===1)return{aS:a(x,Dr(e),o),aV:c,a_:n,a0:r,h9:i};var f=$.a;return{aS:a(x,Dr(e+(" "+f)),o),aV:c,a_:n,a0:r,h9:a(x,q3(t),i)}}}),ab={$:0},tb=ab,Ze=re(function(e,r,n,t){return s(Y3,e,t,Yt(nb,m3(e),r,kn,tb,M,M,o3,Ve(n)))}),Dn=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),ib={f0:U,f8:U,hW:O({bb:0,cg:L(Dn,155/255,203/255,1,1),e6:w(0,0),bs:3})},ob=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.g$;return c.$===1?F(i,{g$:O(o)}):i;case 1:var l=t.a,$=i.gO;return $.$===1?F(i,{gO:O(l)}):i;default:var f=t.a,m=i.e3;return m.$===1?F(i,{e3:O(f)}):i}}),n=function(t){return{gO:function(){var i=t.gO;if(i.$===1)return ib;var o=i.a;return o}(),g$:function(){var i=t.g$;if(i.$===1)return 1;var o=i.a;return o}(),e3:function(){var i=t.e3;if(i.$===1)return 0;var o=i.a;return o}()}};return n(s(ir,r,{gO:U,g$:U,e3:U},e))},cb=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(mr);case 1:var n=r.a.h9,t=r.a.g0;return a(t,e(n),mr);case 2:var i=r.a;return Ht(i);default:return Ht("")}}),lb=T(function(e,r,n){var t=ob(e),i=function(){var o=t.e3;return o===1?Vf(t):t3(t)}();return a(cb,i,L(Ze,mr,Rr,r,je(u([n]))))}),Gt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),em=v(function(e,r){return{$:1,a:e,b:r}}),rm=function(e){return{$:2,a:e}},ub={$:1},Te=v(function(e,r){return{$:4,a:e,b:r}}),uc=function(e){return{$:3,a:e}},nm=Se(8),am=Se(14),tm=Se(5),im=Se(4),Ka=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ne(r)+("-"+(Ne(n)+("-"+(Ne(t)+("-"+Ne(i))))))},Ni=pp,$c=dp,om=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a($e,"-",$c(Ni(n)));case 4:var n=e.a;return e.b,a($e,"-",$c(Ni(n)));default:var n=e.a.hq;return a($e,"-",$c(Ni(n)))}}())}),$b=function(){var e=u([uc("Open Sans"),uc("Helvetica"),uc("Verdana"),ub]);return u([a(Te,nm,s(Gt,"bg-"+Ka(L(Dn,1,1,1,0)),"background-color",L(Dn,1,1,1,0))),a(Te,am,s(Gt,"fc-"+Ka(L(Dn,0,0,0,1)),"color",L(Dn,0,0,0,1))),a(Te,im,rm(20)),a(Te,tm,a(em,s(Ae,om,"font-",e),e))])}(),vb=T(function(e,r,n){var t=e.hA;return s(lb,t,a(x,qe(a($e," ",u([p.hP,p.fY,p.hZ]))),Y($b,r)),n)}),cm={$:3},lm=function(e){return{$:2,a:e}},Qc=v0,um=v(function(e,r){switch(r.$){case 1:var n=r.a;return Oc({g0:v(function(o,c){return a(Qc,e,a(n.g0,o,c))}),h9:n.h9});case 0:var t=r.a;return jt(a(ia,Qc(e),t));case 2:var i=r.a;return lm(i);default:return cm}}),Ol=um,fb=Qc,mb=function(e){return{$:0,a:e}},ke=mb,sb=m0,Ke=sb,$m={$:1},Io=function(e){return{$:5,a:e}},Ul=Io(0),ln=T(function(e,r,n){return L(Dn,e/255,r/255,n/255,1)}),ei=s(ln,0,0,0),db=cn("d"),pb=cn("fill"),hb=cn("height"),vm=Av("http://www.w3.org/2000/svg"),gb=vm("path"),bb=vm("svg"),_b=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fW:i,f4:t,gR:n,hJ:r}},yb=function(e){var r=_b(e);return"rgba("+(k(Re(r.hJ*255))+(","+k(Re(r.gR*255))+(","+k(Re(r.f4*255))+(","+fe(r.fW)+")"))))},xb=cn("viewBox"),wb=cn("width"),Oa=T(function(e,r,n){return a(bb,u([xb("0 0 100 100"),wb(k(e)),hb(k(e))]),u([a(gb,u([db(n),pb(yb(r))]),M)]))}),Sb={$:1},_r=Sb,fm=function(e){return{$:7,a:e}},ee=fm,Pe=v(function(e,r){return L(Ze,mr,Rr,a(x,ee(_r),a(x,ye(_r),e)),je(u([r])))}),mm=function(e){return{$:2,a:e}},oe=mm(1),da={gD:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gX:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hD:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hF:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hI:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",h$:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",iA:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",iD:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fL:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ya={dg:260,bO:54},zr=function(e){return a(Te,nm,s(Gt,"bg-"+Ka(e),"background-color",e))},Cb=Se(28),Sn=function(e){return a(Te,Cb,s(Gt,"bc-"+Ka(e),"border-color",e))},Ii=1,ar=v(function(e,r){return L(Ze,Ii,Rr,a(x,qe(p.gs+(" "+p.bD)),a(x,ye(_r),a(x,ee(_r),e))),je(r))}),zb=s(ln,83,83,83),sm=re(function(e,r,n,t){return L(Dn,e/255,r/255,n/255,t)}),Eo=L(sm,56,56,56,.25),tr=cm,et=cr(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),rt=Se(2),en=function(e){var r=e;return a(Te,rt,N(et,"p-"+k(e),r,r,r,r))},dm=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),pm=Se(3),hm=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),or=function(e){return a(Te,pm,s(dm,a(hm,e,e),e,e))},Pb=L(sm,0,0,0,0),Lb=function(e){return{$:4,a:e}},Kc=0,un=v(function(e,r){return L(Ze,Kc,Rr,a(x,qe(p.bD+(" "+p.aE)),a(x,ee(_r),a(x,ye(_r),e))),je(r))}),Tb=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.g0(a(Vf,{gO:{f0:U,f8:U,hW:U},g$:1,e3:0},n.h9));case 2:var t=e.a;return Zi(ea(t));default:return Zi(ea(""))}},Mb=v(function(e,r){return Tb(e(r))}),kb=f0,Db=v(function(e,r){return jt(s(kb,Mb,e,r))}),Ur=function(e){return a(Te,am,s(Gt,"fc-"+Ka(e),"color",e))},Bo=s(ln,195,195,195),$n=v(function(e,r){return{$:3,a:e,b:r}}),Yl=Se(13),Nb=a($n,Yl,p.iq),gm=Se(20),ri=a($n,gm,p.hU),an=function(e){return a(Te,im,rm(e))},Fo=a($n,Yl,p.f7),ro=v(function(e,r){if(r.$===-2)return xn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return N(de,n,t,a(e,t,i),a(ro,e,o),a(ro,e,c))}),ni=v(function(e,r){if(me(e,r)){var n=e;return a(Te,rt,N(et,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Te,rt,N(et,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),vr=function(e){return lm(e)},Ib=function(e){return s(So,T(function(r,n,t){return a(x,n,t)}),M,e)},Eb=v(function(e,r){return{$:3,a:e,b:r}}),Bb=v(function(e,r){return{$:2,a:e,b:r}}),Fb=v(function(e,r){return{$:0,a:e,b:r}}),jb=v(function(e,r){return{$:1,a:e,b:r}}),Sa=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),ql=L(Sa,0/255,0/255,0/255,1),jo=function(e){return{$:6,a:e}},Ab=jo(0),ai=function(e){return{$:2,a:e}},Vb={$:6},Zl=ai(Vb),Xl=T(function(e,r,n){if(r.$===1)return r.a,L(Ze,Ii,sn("label"),e,je(u([n])));var t=r.a,i=r.b,o=r.c,c=L(Ze,mr,Rr,i,je(u([o])));switch(t){case 2:return L(Ze,Ii,sn("label"),a(x,qe(p.ct),e),je(u([c,n])));case 3:return L(Ze,Ii,sn("label"),a(x,qe(p.ct),e),je(u([n,c])));case 0:return L(Ze,Kc,sn("label"),a(x,qe(p.ct),e),je(u([n,c])));default:return L(Ze,Kc,sn("label"),a(x,qe(p.ct),e),je(u([c,n])))}}),no=xt,jn=Io(1),bm="Enter",Jb=function(e){return{$:5,a:e}},Ql=function(e){if(e.$===1){var r=e.a;return ai(Jb(r))}else return Vr},Kl=function(e){return e.$===1},Rb=function(e){return{$:0,a:e}},eu=Vv,Hb=v(function(e,r){return a(eu,e,Rb(r))}),_m=function(e){return a(Hb,"click",Ye(e))},Gb=Pp,Wb=function(e){return{$:2,a:e}},Ob=v(function(e,r){return a(eu,e,Wb(r))}),ym=function(e){var r=function(t){var i=e(t);if(i.$===1)return Gb("No key matched");var o=i.a;return Ye(o)},n=a(ae,r,a(X,"key",Kn));return Le(a(Ob,"keydown",a(ga,function(t){return w(t,!0)},n)))},xm=Se(21),pa=a($n,xm,p.gv),wm=" ",Sm=function(e){return a(cn,"tabIndex",k(e))},Ub=a(ia,Le,Sm),Cm=v(function(e,r){var n=r.de,t=r.g1,i=r.gk,o=r.e7,c=Y(u([Kl(n)?Vr:or(6),Le(_m(o(!i))),Zl,ym(function(l){return me(l,bm)||me(l,wm)?O(o(!i)):U}),Ub(0),pa,Ab,ee(oe)]),e);return s(Xl,a(x,Le(a(no,"role","checkbox")),a(x,Le(a(no,"aria-checked",i?"true":"false")),a(x,Ql(n),c))),n,L(Ze,mr,Rr,u([jn,ye(oe),ee(_r)]),je(u([t(i)]))))}),Yb=T(function(e,r,n){return Y(a(Ft,e-fa(n),To(r)),n)}),ao=Od,zm=function(e){var r=function(n){return n<10?k(n):To(Tf(87+n))};return e<16?r(e):Y(zm(e/16|0),r(a(ao,16,e)))},qb=a(rr,zm,a(Yb,2,"0")),ru=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fW:i,f4:t,gR:n,hJ:r}},Zb=function(e){var r=ru(e),n=r.hJ,t=r.gR,i=r.f4;return a($e,"",a(x,"#",a(K,a(rr,Re,qb),u([n*255,t*255,i*255]))))},nu=Se(12),Pm=a($n,nu,p.ii),to=jo(1),He=Ud,Wt=function(e){return e*He/180},Xb=function(e){return{$:1,a:e}},au=v(function(e,r){return{$:10,a:e,b:r}}),Qb=Se(26),Lm=function(e){return a(au,Qb,Xb(-e))},On=T(function(e,r,n){return L(Dn,e,r,n,1)}),el=Dn,Kb=v(function(e,r){return{$:4,a:e,b:r}}),e1=Se(24),r1=function(e){return a(au,e1,a(Kb,V(0,0,1),e))},n1=Se(17),nn=function(e){return a(Te,n1,s(xr,"br-"+k(e),"border-radius",k(e)+"px"))},a1=function(e){return ha(u([e.eu?"box-inset":"box-",Ne(e.e6.a)+"px",Ne(e.e6.b)+"px",Ne(e.bb)+"px",Ne(e.bs)+"px",Ka(e.cg)]))},t1=Se(19),i1=function(e){var r={bb:e.bb,cg:e.cg,eu:!1,e6:e.e6,bs:e.bs};return a(Te,t1,s(xr,a1(r),"box-shadow",Uc(r)))},rl=v(function(e,r){return{$:12,a:e,b:r}}),nl=Se(0),o1=function(e){return e?a(Te,nl,a(rl,"transparent",1)):a(Te,nl,a(rl,"visible",0))},Ei=s(On,1,1,1),tu=cr(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),ti=function(e){return a(Te,No,N(tu,"b-"+k(e),e,e,e,e))},c1=v(function(e,r){return a(Te,No,N(tu,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),ii=function(e){var r=e.cc,n=e.cT,t=e.hh,i=e.hM;return me(n,r)&&me(t,i)?me(n,i)?ti(n):a(c1,t,n):a(Te,No,N(tu,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},Tm=function(e){return a(Pe,u([qe("focusable"),ee(ke(14)),ye(ke(14)),Ur(Ei),jn,an(9),Pm,nn(3),Sn(e?s(On,59/255,153/255,252/255):s(On,211/255,211/255,211/255)),i1({bb:1,cg:e?L(el,238/255,238/255,238/255,0):s(On,238/255,238/255,238/255),e6:w(0,0),bs:1}),zr(e?s(On,59/255,153/255,252/255):Ei),ti(e?0:1),Xi(a(Pe,u([Sn(Ei),ye(ke(6)),ee(ke(9)),r1(Wt(-45)),to,jn,Lm(1),o1(!e),ii({cc:2,hh:2,hM:0,cT:0})]),tr))]),tr)},l1=Yr("htmlFor"),u1=v(function(e,r){if(r.$)return U;var n=r.a;return e(n)}),io=v(function(e,r){if(r.$){var t=r.a;return hr(t)}else{var n=r.a;return e(n)}}),Mm=re(function(e,r,n,t){return{g6:r,hm:e,ht:n,ia:t}}),$1=V0,v1=wp,f1=v(function(e,r){if(r.$)return hr(e);var n=r.a;return Oe(n)}),m1=A0,s1=function(e){return a(m1,{gg:!1,hp:!1},e)},An=function(e){if(e.b){var r=e.a;return e.b,O(r)}else return U},d1=v(function(e,r){if(r.$){var t=r.a;return hr(t)}else{var n=r.a;return Oe(e(n))}}),p1=function(e){return{$:2,a:e}},h1=function(e){return{$:0,a:e}},g1=function(e){return{$:1,a:e}},vc=v(function(e,r){return bn(r)-bn(e)}),fc=T(function(e,r,n){var t=bn(n);return ge(bn(e),t)<1&&ge(t,bn(r))<1}),b1=v(function(e,r){var n=function(i){return ge(i,e)<0?Oe(i):hr(g1(r))},t=s(fc,"0","9",r)?Oe(a(vc,"0",r)):s(fc,"a","z",r)?Oe(10+a(vc,"a",r)):s(fc,"A","Z",r)?Oe(10+a(vc,"A",r)):hr(h1(r));return a(io,n,t)}),km=v(function(e,r){var n=ct(r);if(n.$===1)return Oe(0);var t=n.a,i=t.a,o=t.b;return a(io,function(c){return a(io,function(l){return Oe(c+l*e)},a(km,e,o))},a(b1,e,i))}),_1=v(function(e,r){return 2<=e&&e<=36?a(km,e,Hc(r)):hr(p1(e))}),y1=_1(16),x1=T(function(e,r,n){return L(Sa,e,r,n,1)}),w1=re(function(e,r,n,t){return L(Sa,e,r,n,t)}),Hr=Wd,S1=v(function(e,r){var n=a(Hr,10,e);return Re(r*n)/n}),C1=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=Lf(n);if(t.b&&!t.b.b){var i=t.a;return v1(u([i,i]))}else return n};return a(rr,Ni,a(rr,function(n){return a(Ce,function(t){return s($1,1,t,n)},s1(e))},a(rr,u1(An),a(rr,Ce(function(n){return n.ia}),a(rr,Ce(Or(Cr)),a(rr,f1("Parsing hex regex failed"),io(function(n){var t=a(K,a(rr,r,a(rr,y1,d1(_t))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,$=l.a.a,f=l.b,m=f.a.a;return Oe(L(w1,i/255,c/255,$/255,a(S1,2,m/255)))}else break e;else{var i=t.a.a,d=t.b,c=d.a.a,b=d.b,$=b.a.a;return Oe(s(x1,i/255,c/255,$/255))}else break e;return hr("Parsing ints from hex failed")})))))))}(),z1=Yr("id"),P1=zn("input"),L1=zn("label"),iu=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),T1=iu(0),M1=Yr("name"),k1=function(e){return w(e,!0)},D1=function(e){return{$:1,a:e}},N1=v(function(e,r){return a(eu,e,D1(r))}),I1=v(function(e,r){return s(ir,X,r,e)}),E1=a(I1,u(["target","value"]),Kn),ou=function(e){return a(N1,"input",a(ga,k1,a(ga,e,E1)))},B1=a($n,nu,p.$9),Dm=a($n,nu,p.ir),Ao=function(e){return a(Af,5,e)},oi=function(e){return a(Te,tm,a(em,s(Ae,om,"ff-",e),e))},F1=s(ln,195,195,195),Nm=s(ln,69,69,69),j1=iu(2),A1={$:2},ci=A1,V1=Se(32),J1=Se(31),G$=function(e){return s(ir,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return O(i)}else return U;else{var t=n.a;return O(t)}}),U,e)},R1=v(function(e,r){return a(we,r,s(ir,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return O(w(i,c))}else return U;else{var i=t.a;return O(i)}}),U,e))}),W$=function(e){return s(ir,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return O(i)}else return U;else{var t=n.a;return O(t)}}),U,e)},H1=Se(33),G1=Yr("max"),W1=Yr("min"),O1=v(function(e,r){return a(Te,pm,s(dm,a(hm,e,r),e,r))}),U1=function(e){return a(Yr,"step",e)},cu=Yr("type"),lu=Yr("value"),nt=mm,Y1=h0,Im=v(function(e,r){switch(r.$){case 0:return Vr;case 2:var n=r.a;return ai(n);case 6:var t=r.a;return jo(t);case 5:var i=r.a;return Io(i);case 7:var t=r.a;return fm(t);case 8:var t=r.a;return Bf(t);case 3:var t=r.a,i=r.b;return a($n,t,i);case 4:var o=r.a,c=r.b;return a(Te,o,c);case 9:var l=r.a,$=r.b;return a(jf,l,a(um,e,$));case 1:var f=r.a;return Le(a(Y1,e,f));default:var m=r.a,d=r.b;return a(au,m,d)}}),q1=T(function(e,r,n){return a(un,u([ee(oe),ye(a(we,oe,n)),jn]),u([a(Pe,u([ee(nt(Re(e*1e4)))]),tr),a(Pe,a(x,jn,a(K,Im(Xt),r)),tr),a(Pe,u([ee(nt(Re(ze(1-e)*1e4)))]),tr)]))}),Z1=T(function(e,r,n){return a(ar,u([ye(oe),ee(a(we,oe,n)),to]),u([a(Pe,u([ye(nt(Re(ze(1-e)*1e4)))]),tr),a(Pe,a(x,to,a(K,Im(Xt),r)),tr),a(Pe,u([ye(nt(Re(e*1e4)))]),tr)]))}),Em=v(function(e,r){var n=W$(e),t=G$(e),i=function(){var P=w(n,t);e:for(;;)if(P.a.$===1){if(P.b.$===1)return P.a,P.b,!1;break e}else if(!P.a.a.$&&!P.b.$)switch(P.b.a.$){case 0:var S=P.a.a.a,D=P.b.a.a;return ge(D,S)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cU-r.cD)/(r.cB-r.cD),c=r.iv,l=c,$=G$(l),f=function(){if($.$===1)return"20px";if($.a.$)return"100%";var P=$.a.a;return k(P)+"px"}(),m=W$(l),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var P=m.a.a;return k(P)+"px"}(),b="thmb-"+(d+("-"+f)),h=u([a(ve,"width",d),a(ve,"height",f)]),y=a(R1,e,w(5,5)),_=y.a,z=y.b;return s(Xl,u([Kl(r.de)?Vr:a(O1,_,z),Zl,ee(function(){if(n.$===1)return oe;if(n.a.$){var P=n.a;return P}else return _r}()),ye(function(){if(t.$===1)return _r;if(t.a.$){var P=t.a;return P}else return _r}())]),r.de,a(un,u([ee(a(we,oe,n)),ye(a(we,ke(20),t))]),u([L(Ze,mr,sn("input"),u([Ql(r.de),a(Te,V1,a(Lt,'input[type="range"].'+(b+"::-moz-range-thumb"),h)),a(Te,H1,a(Lt,'input[type="range"].'+(b+"::-webkit-slider-thumb"),h)),a(Te,J1,a(Lt,'input[type="range"].'+(b+"::-ms-thumb"),h)),Le(Dr(b+" ui-slide-bar focusable-parent")),Le(ou(function(P){var S=Pf(P);if(S.$===1)return r.e7(0);var D=S.a;return r.e7(D)})),Le(cu("range")),Le(U1(function(){var P=r.cR;if(P.$===1)return"any";var S=P.a;return fe(S)}())),Le(W1(fe(r.cD))),Le(G1(fe(r.cB))),Le(lu(fe(r.cU))),i?Le(a(no,"orient","vertical")):Vr,ee(i?a(we,ke(20),t):a(we,oe,n)),ye(i?a(we,oe,n):a(we,ke(20),t))]),je(M)),a(Pe,a(x,ee(a(we,oe,n)),a(x,ye(a(we,ke(20),t)),Y(e,u([Ao(i?s(Z1,o,a(x,qe("focusable-thumb"),l),n):s(q1,o,a(x,qe("focusable-thumb"),l),t))])))),tr)])))}),X1=s(On,.5,.5,.5),Bm=Cr,O$=function(e){var r=e.df,n=e.cU,t=e.cD,i=e.cB,o=e.cR,c=e.e7;return a(Pe,u([ee(oe)]),a(Em,u([or(2),Ao(a(Pe,u([ee(oe),ye(ke(16)),jn,zr(Nm),nn(4)]),tr))]),{de:a(j1,M,a(un,u([ee(oe)]),u([a(Pe,u([B1]),vr(r)),a(Pe,u([ee(oe),Dm,oi(u([ci]))]),vr(fe(n)))]))),cB:i,cD:t,e7:c,cR:O(o),iv:Bm(u([ee(ke(12)),ye(ke(12)),nn(4),ti(0),Sn(X1),zr(F1)])),cU:n}))},uu=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Q1=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(Cm,M,{gk:c,g1:Tm,de:a(T1,M,vr(e)),e7:Eb(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return O$({df:e,cB:o,cD:i,e7:Fb(e),cR:.001*(o-i),cU:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return O$({df:e,cB:o,cD:i,e7:a(rr,Re,jb(e)),cR:1,cU:c});default:var c=r.a;return a(Pe,u([ee(oe)]),Wn(a(Qa,M,u([a(Qa,u([a(Ke,"margin-bottom","6px")]),u([a(L1,u([l1(e)]),u([Do(e)]))])),a(P1,u([cu("color"),a(Ke,"width","100%"),a(Ke,"height","26px"),a(Ke,"padding","0px"),z1(e),M1(e),ou(function(l){return a(Bb,e,a(uu,ql,C1(l)))}),lu(Zb(c))]),M)]))))}}),oo=s(ln,255,255,255),K1=function(e){return a(ar,u([ee(oe),or(8),a(ni,0,14),ii({cc:1,hh:0,hM:0,cT:0}),Sn(Eo)]),u([a(Pe,u([an(16),Fo,Ur(oo)]),vr(e.hq)),a(ar,u([ee(oe),or(6)]),Ib(a(ro,Q1,e.aW)))]))},e_=function(e){return a(ar,u([ee(oe),ye(oe),Ur(Bo),an(12),Nb,ri]),a(K,K1,e))},r_=Db(e_),n_=function(e){return a(ar,u([ee(oe),ye(oe)]),u([a(un,u([or(14),ee(oe)]),M),a(Ol,Lb,r_(ya(e).gr))]))},a_=function(e){return{$:6,a:e}},t_=re(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Fm=function(e){var r=e.cT,n=e.hM,t=e.cc,i=e.hh;if(me(r,n)&&me(r,t)&&me(r,i)){var o=r;return a(Te,rt,N(et,"p-"+k(r),o,o,o,o))}else return a(Te,rt,N(et,L(t_,r,n,t,i),r,n,t,i))},i_=function(e){return{$:0,a:e}},o_=function(e){return{$:1,a:e}},jm=o_,c_=function(e){var r=e.b.ab;return yn(r)},co=s(ln,255,60,0),l_=function(e){var r=e.b.ab;e.b.s;var n=e.b.au;return yn(r)+1+yn(n)},u_=function(e){var r=w(c_(e),l_(e)-1),n=r.a,t=r.b;return a(Pe,u([ee(oe),jn]),a(Em,u([Ao(a(un,u([ee(oe),ye(ke(4)),jn,zr(Nm),nn(2)]),u([a(Pe,u([ee(nt(n)),ye(oe),zr(co),nn(2)]),tr),a(Pe,u([ee(nt(t-n))]),tr)])))]),{de:jm(""),cB:t,cD:0,e7:a(rr,Re,i_),cR:O(1),iv:Bm(u([ee(ke(12)),ye(ke(12)),nn(6),zr(co)])),cU:n}))},Am=jo(2),Tt=s(ln,220,220,220),$_=function(e){var r=e.a,n=function(){return r.$?u([Ur(Tt)]):u([Ur(co)])}();return a(Pe,Y(n,u([an(14),Am,Dm,oi(u([ci]))])),vr(a(Nf,3,ya(e).gp)))},v_=function(e){e.a;var r=e.b.ab;return a(Ce,function(n){return Re(60/(ya(e).gp-n))},a(Ce,a(rr,Co,function(n){return n.gp}),An(a(xf,59,r))))},f_=function(e){var r=v_(e);if(r.$===1)return tr;var n=r.a;return a(Pe,u([an(14),Ur(Bo),oi(u([ci]))]),vr(k(n)+" FPS"))},U$={$:1},m_={$:3},s_={$:2},d_={$:8},p_=wo,Vm=v(function(e,r){return a(Sl,e,p_(r))}),h_=Vm("disabled"),al=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},g_=function(e){return a(ba,al,e)?Vr:qe("focusable")},lo=a(ia,Le,_m),$u=v(function(e,r){var n=r.hv,t=r.de;return L(Ze,mr,Rr,a(x,ee(_r),a(x,ye(_r),a(x,qe(p.ck+(" "+(p.aE+(" "+(p.hV+(" "+p.e5)))))),a(x,pa,a(x,g_(e),a(x,ai(d_),a(x,Le(Sm(0)),function(){if(n.$===1)return a(x,Le(h_(!0)),e);var i=n.a;return a(x,lo(i),a(x,ym(function(o){return me(o,bm)||me(o,wm)?O(i):U}),e))}()))))))),je(u([t])))}),Y$=v(function(e,r){return a($u,M,{de:a(Pe,u([ee(ke(36)),en(3),Ur(r),Pm,an(12),Fo,Sn(r),ti(1),nn(4)]),vr("REC")),hv:O(e)})}),q$=T(function(e,r,n){return a($u,M,{de:Wn(s(Oa,20,n,e)),hv:O(r)})}),b_=function(e){var r=e.a;e.b.ab,e.b.s;var n=e.b.au;return a(un,M,u([a(Pe,u([ee(ke(40))]),function(){switch(r.$){case 0:return a(Y$,U$,co);case 1:return a(Y$,s_,Tt);default:return tr}}()),a(Pe,u([ee(ke(28))]),function(){switch(r.$){case 0:return tr;case 1:return Gn(n)?tr:s(q$,da.hF,m_,Tt);default:return s(q$,da.hD,U$,Tt)}}())]))},__=function(e){return a(ar,u([ee(oe)]),u([u_(e),a(un,u([ee(oe),or(14),a(ni,0,6),jn]),u([b_(e),f_(e),$_(e)]))]))},y_=function(e){return a(ar,u([ee(oe),or(14),Fm({cc:20,hh:0,hM:0,cT:0}),ii({cc:1,hh:0,hM:0,cT:0}),Sn(Eo)]),u([a(Pe,u([an(16),Fo,Ur(Bo)]),vr("Time Travel")),a(Ol,a_,__(e))]))},x_=v(function(e,r){return a(ar,u([ya(r).cO.iH>600?zr(zb):zr(Pb),ii({cc:0,hh:0,hM:1,cT:0}),Sn(Eo),ee(ke(Ya.dg)),ye(oe)]),u([function(){return e?tr:a(ar,u([ee(oe),ye(oe),en(14),or(14)]),u([y_(r),n_(r)]))}()]))}),w_=function(e){return{$:3,a:e}},uo=Io(2),S_=s(ln,232,78,50),C_=s(ln,48,48,48),z_=function(e){return a(Yr,"href",p0(e))},P_=cn("rel"),L_=Yr("target"),Z$=v(function(e,r){var n=r.fA,t=r.de;return L(Ze,mr,sn("a"),a(x,Le(z_(n)),a(x,Le(P_("noopener noreferrer")),a(x,Le(L_("_blank")),a(x,ee(_r),a(x,ye(_r),a(x,qe(p.ck+(" "+(p.aE+(" "+p.eF)))),e)))))),je(u([t])))}),wt=Yr("title"),T_=s(ln,31,161,242),M_=function(e){var r=T(function(o,c,l){var $=me(c,e)?oo:C_;return a(Pe,u([Nr(wt(o)),lo(w_(c)),pa,en(7)]),Wn(s(Oa,40,$,l)))}),n=a(ar,u([Ul]),u([s(r,"Configurations",0,da.h$)])),t=a(ar,M,u([a(Z$,u([Nr(wt("Twitter")),uo,pa,en(7)]),{de:Wn(s(Oa,40,T_,da.iA)),fA:"https://twitter.com/AzizErkalSelman"}),a(Z$,u([Nr(wt("Source Code")),uo,pa,en(7)]),{de:Wn(s(Oa,40,S_,da.gQ)),fA:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Pe,u([ee(ke(Ya.bO)),en(4),lo($m),ii({cc:1,hh:0,hM:0,cT:0}),Sn(Eo),pa,Nr(wt("Activate Distraction Free Mode"))]),Wn(s(Oa,46,oo,da.fL)));return a(ar,u([ee(ke(Ya.bO)),ye(oe),ri,zr(ei)]),u([i,n,t]))},k_=function(e){var r=a(Pe,u([ee(ke(Ya.bO)),Ul,en(4),lo($m),pa,Nr(wt("Deactivate Distraction Free Mode (A)"))]),Wn(s(Oa,46,ei,da.fL)));return e.bG?r:a(un,u([ee(ke(Ya.bO+Ya.dg)),ye(oe)]),u([M_(e.bz),a(x_,e.bz,e.W)]))},D_=T(function(e,r,n){var t=r3(n.W),i=ya(n.W);return s(vb,{hA:u([a3({f0:U,f8:U,hW:U})])},u([ee(ke(Et(i.cO.iH))),ye(ke(Et(i.cO.gY))),Nr(a(Ke,"-webkit-font-smoothing","antialiased")),Nr(a(Ke,"pointer-events","none")),Nr(a(Ke,"touch-action","none")),Nr(a(Ke,"user-select","none")),Xi(a(Ol,Kg,a(r,i,t))),Xi(k_(n))]),Wn(a(fb,Zi(e3),a(e,i,t))))}),N_=Er(function(e,r,n,t,i,o){var c=v(function($,f){return w(L(Ug,r,o,$,f),y$)}),l=function($){var f=a(bf,n,$.hd);return w({bz:0,bG:!0,W:a(Yg,f,t),dZ:0},y$)};return dg({g7:l,ib:Qg,iC:c,iE:a(D_,e,i)})}),Jm={$:0},tl={$:0},$o=T(function(e,r,n){return{iJ:e,iN:r,d4:n}}),Rm=Ap,I_=v(function(e,r){return{T:e,ae:r}}),Hm=T(function(e,r,n){return{cm:n,aK:r,bT:e}}),Gm=function(e){return s(Ae,ko,Kt,e)},Wm=T(function(e,r,n){return{iJ:e,iN:r,d4:n}}),E_=Oi(Xh),Gr=T(function(e,r,n){return a(E_,a(X,e,r),n)}),Om=s(Gr,"z",Ge,s(Gr,"y",Ge,s(Gr,"x",Ge,Ye(Wm)))),vu=Lp,B_=s(Gr,"data",Ye(0),s(Gr,"outNeighbours",a(ga,Gm,wn(vu)),s(Gr,"position",Om,Ye(Hm)))),F_=function(e){return{eW:e}},j_=s(Gr,"mappedToBaseVertex",vu,Ye(F_)),A_=s(Gr,"data",j_,s(Gr,"outNeighbours",a(ga,Gm,wn(vu)),s(Gr,"position",Om,Ye(Hm)))),_i=Ip,X$=v(function(e,r){return w(e,r)}),V_=s(Gr,"playerGraph",wn(s(Oi,X$,a(_i,0,Kn),a(_i,1,A_))),s(Gr,"baseGraph",wn(s(Oi,X$,a(_i,0,Kn),a(_i,1,B_))),Ye(I_))),Um=function(e){return s(Ae,v(function(r,n){var t=r.a,i=r.b;return s(Yn,t,i,n)}),Mo,e)},Q$=function(e){return Um(a(K,function(r){var n=r.a,t=r.b;return w(a(we,999,Fl(n)),t)},e))},J_=function(e){return{T:Q$(e.T),ae:Q$(e.ae)}},Ym=a(ga,J_,V_),R_=jp,qm=function(e){var r=T(function(n,t,i){return{H:i,o:n,s:t}});return L(R_,r,a(X,"before",wn(e)),a(X,"current",e),a(X,"after",wn(e)))},K$=Mo,Zm={T:K$,ae:K$},H_=`
{
  "before": [],
  "current": {
    "baseGraph": [
      [
        "0",
        {
          "position": {
            "x": -0.24675948085844226,
            "y": 2.590974549013644,
            "z": 3.552713678800501e-15
          },
          "outNeighbours": [
            1
          ],
          "data": null
        }
      ],
      [
        "1",
        {
          "position": {
            "x": -2.590974549013644,
            "y": -1.758161301116401,
            "z": 0
          },
          "outNeighbours": [
            2
          ],
          "data": null
        }
      ],
      [
        "2",
        {
          "position": {
            "x": 2.3133701330478957,
            "y": -1.7735837686700535,
            "z": 0
          },
          "outNeighbours": [],
          "data": null
        }
      ]
    ],
    "playerGraph": [
      [
        "0",
        {
          "position": {
            "x": -2.59097454901364,
            "y": -1.7581613011163988,
            "z": 1.0329372504774534e-30
          },
          "outNeighbours": [
            1
          ],
          "data": {
            "mappedToBaseVertex": 1
          }
        }
      ],
      [
        "1",
        {
          "position": {
            "x": -0.24675948086016916,
            "y": 2.5909745490149825,
            "z": 3.5527136784716473e-15
          },
          "outNeighbours": [
            2
          ],
          "data": {
            "mappedToBaseVertex": 0
          }
        }
      ],
      [
        "2",
        {
          "position": {
            "x": 2.3133701330478917,
            "y": -1.7735837686700555,
            "z": -7.324791694637559e-33
          },
          "outNeighbours": [],
          "data": {
            "mappedToBaseVertex": 2
          }
        }
      ]
    ]
  },
  "after": [
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -2.205412860172328,
              "y": 2.1283005224040648,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.1283005224040643,
              "y": -1.9894983144211906,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.112878054850412,
              "y": -1.9278084442065802,
              "z": 0
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.0203432495284956,
              "y": 2.2516802628332853,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": -2.205412860155744,
              "y": 2.128300522418598,
              "z": 1.8913496096524053e-25
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.1283005224040688,
              "y": -1.9894983144211962,
              "z": 3.0316055274290395e-29
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.0203432495284916,
              "y": 2.2516802628332897,
              "z": -1.1344976625790978e-31
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.112878054850408,
              "y": -1.9278084442065824,
              "z": 9.639441824238942e-44
            },
            "outNeighbours": [
              0
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ]
      ]
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 0.04626740266095791,
              "y": 4.194911174593519,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.4213274059234644,
              "y": 1.7273163660090958,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.5909745490136435,
              "y": 1.6964714309017905,
              "z": 0
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.606397016567296,
              "y": -1.7581613011164012,
              "z": 0
            },
            "outNeighbours": [
              4
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 0.030844935107305283,
              "y": -4.302868447469087,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -2.421327405923465,
              "y": -1.7890062362237065,
              "z": 0
            },
            "outNeighbours": [
              1,
              3
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": 2.5909745490136835,
              "y": 1.6964714309017488,
              "z": -3.665587812555619e-28
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.421327405923469,
              "y": 1.7273163660090978,
              "z": 3.2054634041132753e-32
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 0.046267402628346735,
              "y": 4.1949111747681105,
              "z": -1.0866603716007606e-25
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.6063970165673,
              "y": -1.7581613011163992,
              "z": 4.4379225004086626e-38
            },
            "outNeighbours": [
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -2.421327405923461,
              "y": -1.7890062362237087,
              "z": 6.985118375071225e-35
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 0.030844935107305252,
              "y": -4.302868447469079,
              "z": -1.7226142845885027e-41
            },
            "outNeighbours": [
              1,
              3
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ]
      ]
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -1.0641502612020322,
              "y": 4.349135850130045,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 3.4700551995718443,
              "y": 4.333713382576392,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 3.439210264464539,
              "y": -0.863658183004548,
              "z": 0
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -0.9716154558801163,
              "y": -0.987037923433769,
              "z": 3.552713678800501e-15
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -3.392942861803581,
              "y": 2.2979476654942435,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -3.3004080564816656,
              "y": -3.238718186267054,
              "z": 0
            },
            "outNeighbours": [
              6
            ],
            "data": null
          }
        ],
        [
          "6",
          {
            "position": {
              "x": 1.850696106438317,
              "y": -3.2078732511597488,
              "z": 0
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": null
          }
        ],
        [
          "7",
          {
            "position": {
              "x": 1.6810489633481378,
              "y": 2.436749873477117,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": -0.9716154558801153,
              "y": -0.9870379234337678,
              "z": 3.552713678800497e-15
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 3.439210264464535,
              "y": -0.8636581830045491,
              "z": 2.775097550203857e-47
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 3.470055199571857,
              "y": 4.3337133825764,
              "z": -4.5922617259897015e-29
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -1.0641502612020344,
              "y": 4.349135850130036,
              "z": 1.8698127623923835e-33
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 1.8506961064383192,
              "y": -3.2078732511597448,
              "z": -3.028727139831328e-49
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 6
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 1.6810489633481356,
              "y": 2.4367498734771127,
              "z": -3.525322320730601e-39
            },
            "outNeighbours": [
              6
            ],
            "data": {
              "mappedToBaseVertex": 7
            }
          }
        ],
        [
          "6",
          {
            "position": {
              "x": -3.3929428618035855,
              "y": 2.297947665494248,
              "z": -2.1772851892180453e-43
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ],
        [
          "7",
          {
            "position": {
              "x": -3.30040805648167,
              "y": -3.238718186267058,
              "z": 3.5228333833933177e-54
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ]
      ]
    }
  ]
}
`,G_=function(e){return{H:M,o:M,s:e}},W_=a(uu,G_(Zm),a(Rm,qm(Ym),H_)),O_={da:!1,db:"",dc:""},U_=function(e){return{N:O_,ac:Jm,ai:tl,a:W_,u:s($o,0,0,0)}},Y_=v(function(e,r){return w(e,Sf(r))}),yi=v(function(e,r){return w(e,Cf(r))}),q_=T(function(e,r,n){return{aW:n,he:r,hq:e}}),Z_=T(function(e,r,n){return s(q_,e,r,Um(n))}),dt=Z_,sr=T(function(e,r,n){var t=r.a,i=r.b;return w(e,a(zf,w(t,i),n))}),mc=function(e){return e/255},ev=T(function(e,r,n){return L(Sa,mc(e),mc(r),mc(n),1)}),X_=L(Sa,255/255,255/255,255/255,1),Xm=L(Sa,237/255,212/255,0/255,1),Q_=u([s(dt,"Camera",!0,u([s(sr,"camera distance",w(3,40),20),s(sr,"camera azimuth",w(0,2*He),0),s(sr,"camera elevation",w(-He/2,He/2),0)])),s(dt,"Light",!0,u([s(sr,"sunlight azimuth",w(-He,He),-.5),s(sr,"sunlight elevation",w(-He,He),-2.7),s(sr,"azimuth for third light",w(-He,He),1),s(sr,"elevation for third light",w(-He,He),-2),s(sr,"azimuth for fourth light",w(-He,He),1),s(sr,"elevation for fourth light",w(-He,He),-2)])),s(dt,"Pointer",!0,u([a(Y_,"pointer view on/off",!0),a(yi,"pointer color",Xm),s(sr,"pointer reach",w(.5,2),1)])),s(dt,"Base",!0,u([a(yi,"game background",s(ev,44,100,200)),a(yi,"base",s(ev,176,69,76)),s(sr,"base height",w(.01,5),.4),s(sr,"base vertex radius",w(.2,2),.5),s(sr,"base edge width",w(.2,1.5),1)])),s(dt,"Player CodeGraph",!0,u([a(yi,"player",X_),s(sr,"player vertex radius",w(.1,.6),.35),s(sr,"player edge width",w(.05,.6),.25)]))]),K_=v(function(e,r){return e.aw.aG?r:F(r,{ac:Jm})}),Lr=function(e){var r=e;return r.s},pn=tp,Vo=v(function(e,r){return pn(a(Hr,r.iJ-e.iJ,2)+a(Hr,r.iN-e.iN,2))}),e2=v(function(e,r){return a(Ce,function(n){if(n.$)return 0;var t=n.b;return t},a(ta,e,r.aW))}),r2=v(function(e,r){return a(we,0,An(a(Or,e2(e),r)))}),n2=v(function(e,r){return a(r2,e,r.gr)}),Ue=n2,rn=v(function(e,r){var n=r;return a(we,s($o,-10,-10,0),a(Ce,function(t){return t.bT},a(ta,e,n)))}),a2=T(function(e,r,n){var t=n;return s(ma,e,Ce(function(i){return F(i,{aK:a(ko,r,i.aK)})}),t)}),t2=re(function(e,r,n,t){var i=t,o={cm:e,aK:Kt,bT:n},c=1+a(we,-1,Wl(kl(i)));return s(ma,r,Ce(function(l){return F(l,{aK:a(ko,c,l.aK)})}),s(Yn,c,o,i))}),i2=v(function(e,r){return F(r,{T:e(r.T)})}),fu=v(function(e,r){var n=r;return F(n,{s:e(n.s)})}),vo=v(function(e,r){return F(r,{a:a(fu,i2(e),r.a)})}),o2=v(function(e,r){return a(Hr,r.iJ-e.iJ,2)+a(Hr,r.iN-e.iN,2)}),c2=Gd,Jo=function(e){var r=e;return It(r)},l2=v(function(e,r){return a(Ce,Co,An(a(c2,function(n){var t=n.b.bT;return a(o2,t,e)},Jo(r))))}),lt=v(function(e,r){return a(l2,r.u,Lr(r.a).T)}),u2=v(function(e,r){if(e.aw.aG)return r;var n=w(r.ac,a(lt,e,r));if(n.a.$===2&&!n.b.$){var t=n.a.a.h0,i=n.b.a;return ge(a(Vo,a(rn,i,Lr(r.a).T),r.u),a(Ue,"pointer reach",e))<0?a(vo,a(a2,t,i),r):a(vo,s(t2,0,t,r.u),r)}else return r}),$2=T(function(e,r,n){var t=n,i={cm:e,aK:Kt,bT:r},o=1+a(we,-1,Wl(kl(t)));return s(Yn,o,i,t)}),v2=v(function(e,r){if(e.aw.aG&&e.bn.cZ){var n=w(r.ac,a(lt,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return ge(a(Vo,a(rn,t,Lr(r.a).T),r.u),a(Ue,"pointer reach",e))>0?a(vo,a($2,0,r.u),r):r}else return r}else return r}),f2=function(e){return{$:2,a:e}},m2=v(function(e,r){if(e.bn.cQ&&!e.bn.cZ&&e.aw.aG){var n=w(r.ac,a(lt,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return F(r,{ac:f2({h0:t})})}else return r}else return r}),s2=function(e){return{$:1,a:e}},d2=v(function(e,r){if(e.aw.aG&&!e.bn.cQ){var n=w(r.ac,a(lt,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return ge(a(Vo,a(rn,t,Lr(r.a).T),r.u),a(Ue,"pointer reach",e))<0?F(r,{ac:s2({fC:t})}):r}else return r}else return r}),p2=v(function(e,r){return a(K_,e,a(u2,e,a(m2,e,a(d2,e,a(v2,e,r)))))}),Qm=v(function(e,r){var n=r;return a(Ce,function(t){return t.cm},a(ta,e,n))}),h2=v(function(e,r){return F(r,{ae:e(r.ae)})}),Km=v(function(e,r){return F(r,{a:a(fu,h2(e),r.a)})}),mu=v(function(e,r){var n=r;return a(ro,e,n)}),g2=v(function(e,r){if(e.aw.aG)return r;var n=r.ai;if(n.$===1){var t=n.a,i=t.cC;if(i.$)return F(r,{ai:tl});var o=i.a,c=v(function($,f){return F(f,{eW:$})}),l=v(function($,f){return me($,t.cn)?F(f,{cm:a(c,o,f.cm)}):me(f.cm.eW,o)?F(f,{cm:a(c,a(we,0,a(Ce,function(m){return m.eW},a(Qm,t.cn,Lr(r.a).ae))),f.cm)}):f});return a(Km,mu(l),F(r,{ai:tl}))}else return r}),es=function(e){return{$:1,a:e}},rs=v(function(e,r){var n=a(lt,e,r);return a(Ce,Co,An(a(Gl,function(t){var i=t.b.cm;return me(O(i.eW),n)},Jo(Lr(r.a).ae))))}),b2=v(function(e,r){if(e.aw.aG&&!e.bn.cQ){var n=w(r.ai,a(rs,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return ge(a(Vo,a(rn,t,Lr(r.a).ae),r.u),a(Ue,"pointer reach",e))<0?F(r,{ai:es({cn:t,cC:U})}):r}else return r}else return r}),_2=v(function(e,r){return a(g2,e,a(b2,e,r))}),y2=T(function(e,r,n){var t=n;return s(ma,e,Ce(r),t)}),x2=v(function(e,r){var n=r.ac;if(n.$===1){var t=n.a.fC,i=function(o){return F(o,{bT:r.u})};return a(vo,a(y2,t,i),r)}else return r}),xi=T(function(e,r,n){var t=function(i){return i(n)+e*(i(r)-i(n))};return{iJ:t(function(i){return i.iJ}),iN:t(function(i){return i.iN}),d4:t(function(i){return i.d4})}}),w2=v(function(e,r){var n=Lr(r.a).ae,t=Lr(r.a).T,i=v(function(o,c){var l=r.ai;if(l.$===1){var $=l.a.cn,f=l.a.cC;if(me(o,$))return F(c,{bT:function(d){return s($o,d.iJ,d.iN,d.d4)}(r.u)});if(me(O(c.cm.eW),f)){var m=s(xi,.3,a(rn,a(we,0,a(Ce,function(d){return d.eW},a(Qm,$,n))),t),a(rn,c.cm.eW,t));return F(c,{bT:s(xi,.1,function(d){return s($o,d.iJ,d.iN,d.d4+1)}(m),c.bT)})}else return F(c,{bT:s(xi,.1,a(rn,c.cm.eW,t),c.bT)})}else return F(c,{bT:s(xi,.1,a(rn,c.cm.eW,t),c.bT)})});return a(Km,mu(i),r)}),S2=v(function(e,r){var n=r.ai;if(n.$===1){var t=n.a;return F(r,{ai:es(F(t,{cC:a(lt,e,r)}))})}else return r}),tn=function(e){return e},Ua=function(e){return tn(He*(e/180))},ns=function(e){return e},Pr=function(e){return e},fo=function(e){var r=e;return-r},C2=v(function(e,r){var n=e,t=r;return{iJ:n.iN*t.d4-n.d4*t.iN,iN:n.d4*t.iJ-n.iJ*t.d4,d4:n.iJ*t.iN-n.iN*t.iJ}}),as=function(e){var r=e;return r.d2},ts=function(e){var r=e;return r.d3},z2=function(e){return a(C2,as(e),ts(e))},ut=function(e){var r=e;return r.dy},at=Yd,tt=qd,Bi=T(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=at(c),$=tt(c),f=t.gC,m=f,d=m.iJ*$,b=l*d,h=d*d,y=m.iN*$,_=l*y,z=d*y,P=y*y,S=1-2*(h+P),D=m.d4*$,W=l*D,ne=2*(z-W),ie=2*(z+W),ce=d*D,le=2*(ce+_),te=2*(ce-_),Q=y*D,be=2*(Q-b),_e=2*(Q+b),Ee=D*D,Me=1-2*(P+Ee),pe=1-2*(h+Ee);return{iJ:Me*o.iJ+ne*o.iN+le*o.d4,iN:ie*o.iJ+pe*o.iN+be*o.d4,d4:te*o.iJ+_e*o.iN+S*o.d4}}),li=T(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=at(c),$=tt(c),f=t.dy,m=f,d=o.iJ-m.iJ,b=o.iN-m.iN,h=o.d4-m.d4,y=t.gC,_=y,z=_.iJ*$,P=l*z,S=z*z,D=_.iN*$,W=l*D,ne=z*D,ie=D*D,ce=1-2*(S+ie),le=_.d4*$,te=l*le,Q=2*(ne-te),be=2*(ne+te),_e=z*le,Ee=2*(_e+W),Me=2*(_e-W),pe=D*le,Be=2*(pe-P),E=2*(pe+P),B=le*le,j=1-2*(ie+B),A=1-2*(S+B);return{iJ:m.iJ+j*d+Q*b+Ee*h,iN:m.iN+be*d+A*b+Be*h,d4:m.d4+Me*d+E*b+ce*h}}),Ca=function(e){return e},za=function(e){var r=e;return r.d2},Pa=function(e){var r=e;return r.d3},La=function(e){var r=e;return r.d5},is=T(function(e,r,n){return Ca({dy:s(li,e,r,ut(n)),d2:s(Bi,e,r,za(n)),d3:s(Bi,e,r,Pa(n)),d5:s(Bi,e,r,La(n))})}),rv=T(function(e,r,n){return s(is,e(n),r,n)}),su=function(e){var r=e;return r.gC},$t=v(function(e,r){var n=e,t=r;return{iJ:t.iJ+n.iJ,iN:t.iN+n.iN,d4:t.d4+n.d4}}),os=v(function(e,r){return Ca({dy:a($t,e,ut(r)),d2:za(r),d3:Pa(r),d5:La(r)})}),P2=v(function(e,r){var n=e,t=r;return{iJ:n*t.iJ,iN:n*t.iN,d4:n*t.d4}}),L2=T(function(e,r,n){return a(os,a(P2,r,e),n)}),T2=T(function(e,r,n){return s(L2,su(e(n)),r,n)}),on=v(function(e,r){return{gC:r,dy:e}}),M2=function(e){var r=e;return a(on,r.dy,r.d2)},k2=function(e){var r=e;return a(on,r.dy,r.d3)},D2=function(e){var r=e;return a(on,r.dy,r.d5)},N2=function(e){var r=Ca({dy:e.bj,d2:ts(e.eo),d3:z2(e.eo),d5:as(e.eo)}),n=s(T2,D2,e.c6,s(rv,M2,fo(e.co),s(rv,k2,e.b9,r)));return n},I2=function(e){return{$:0,a:e}},fr=function(e){var r=e;return ze(r)},Fi=function(e){var r=e;return .5*r},E2=Zd,B2=function(e){var r=e;return E2(r)},F2=function(e){var r=Fi(fr(e.fE)),n=B2(r);return{dJ:I2(n),dY:e.dY}},Pn={iJ:0,iN:0,d4:0},cs=Cr,Bn=function(e){return e},ls=Bn({iJ:1,iN:0,d4:0}),Ro=ls,du=Bn({iJ:0,iN:0,d4:1}),Ho=du,j2=cs({dy:Pn,d2:Ho,d3:Ro}),A2=function(e){var r=e.bj,n=e.b9,t=e.co,i=e.c6;return F2({fE:Ua(40),dY:N2({b9:tn(n),c6:Pr(i),co:tn(t),bj:ns(r),eo:j2})})},us=function(e){return A2({b9:a(Ue,"camera azimuth",e),c6:a(Ue,"camera distance",e),co:a(Ue,"camera elevation",e),bj:{iJ:0,iN:0,d4:0}})},wi=function(e){return e},ji=function(e){var r=e;return r},V2=v(function(e,r){var n=e,t=r;return t.iJ*n.iJ+t.iN*n.iN+t.d4*n.d4}),We=v(function(e,r){var n=r;return e*n}),$s=function(e){var r=e;return r.dy},J2=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=n.hs,l=c;return(t.iJ-o.iJ)*l.iJ+(t.iN-o.iN)*l.iN+(t.d4-o.d4)*l.d4}),R2=T(function(e,r,n){var t=e,i=r,o=n;return{iJ:o.iJ+i*t.iJ,iN:o.iN+i*t.iN,d4:o.d4+i*t.d4}}),H2=v(function(e,r){var n=su(r),t=e,i=t.hs,o=a(V2,i,n);if(o){var c=$s(r),l=a(J2,e,c),$=a(We,-1/o,l);return O(s(R2,n,$,c))}else return U}),G2=v(function(e,r){return{iJ:e,iN:r}}),nv=v(function(e,r){var n=e,t=r;return n*t}),W2=function(e){var r=e;return r},av=function(e){var r=e;return W2(r.f$)},O2=function(e){var r=e;return r.bd},U2=function(e){var r=e,n=a(er,ze(r.iJ),a(er,ze(r.iN),ze(r.d4)));if(n){var t=r.d4/n,i=r.iN/n,o=r.iJ/n,c=pn(o*o+i*i+t*t);return O({iJ:o/c,iN:i/c,d4:t/c})}else return U},vs=v(function(e,r){var n=r;return n/e}),il=function(e){var r=e;return ut(r)},pu=Bn({iJ:0,iN:0,d4:-1}),Y2=v(function(e,r){var n=e,t=r;return t/n}),q2=v(function(e,r){var n=e,t=r,i=n.d5,o=i,c=n.d3,l=c,$=n.d2,f=$;return{iJ:f.iJ*t.iJ+l.iJ*t.iN+o.iJ*t.d4,iN:f.iN*t.iJ+l.iN*t.iN+o.iN*t.d4,d4:f.d4*t.iJ+l.d4*t.iN+o.d4*t.d4}}),mo=function(e){var r=e;return{iJ:-r.iJ,iN:-r.iN,d4:-r.d4}},ol=function(e){var r=e;return mo(La(r))},Z2=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=n.d2,l=c;return(t.iJ-o.iJ)*l.iJ+(t.iN-o.iN)*l.iN}),hu=T(function(e,r,n){var t=e,i=r,o=n;return{iJ:t,iN:i,d4:o}}),X2=re(function(e,r,n,t){var i=e,o=r,c=n,l=t,$=i.dy,f=$,m=i.d5,d=m,b=i.d3,h=b,y=i.d2,_=y;return{iJ:f.iJ+o*_.iJ+c*h.iJ+l*d.iJ,iN:f.iN+o*_.iN+c*h.iN+l*d.iN,d4:f.d4+o*_.d4+c*h.d4+l*d.d4}}),Q2=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=n.d3,l=c;return(t.iJ-o.iJ)*l.iJ+(t.iN-o.iN)*l.iN}),Nn=0,K2=T(function(e,r,n){var t=e,i=a(Q2,av(r),n),o=a(Z2,av(r),n),c=t.dY,l=c,$=O2(r);$.a;var f=$.b,m=t.dJ;if(m.$){var y=m.a,_=a(Y2,f,y),z=L(X2,l,a(nv,_,o),a(nv,_,i),Nn);return a(on,z,ol(t.dY))}else{var d=m.a,b=fo(a(vs,d,a(We,.5,f))),h=a(q2,l,a(we,pu,U2(s(hu,o,i,b))));return a(on,il(t.dY),h)}}),cl=function(e){var r=e;return{iJ:at(r),iN:tt(r)}},e4=function(e){var r=e;return{iJ:-r.iN,iN:r.iJ}},r4=function(e){return e},n4=v(function(e,r){return r4({dy:r,d2:e,d3:e4(e)})}),a4=v(function(e,r){return a(n4,cl(e),r)}),t4=T(function(e,r,n){var t=e.a,i=e.b;return{f$:a(a4,r,n),bd:w(fr(t),fr(i))}}),qn=function(e){var r=e;return r.iJ},i4=v(function(e,r){var n=e,t=r;return{iJ:n,iN:t}}),Zn=function(e){var r=e;return r.iN},Xn=function(e){var r=e;return r.d4},o4=re(function(e,r,n,t){var i=n.iJ,o=n.iN,c=function(f){return s(Wm,ji(qn(f)),ji(Zn(f)),ji(Xn(f)))},l=s(t4,w(wi(r.iH),wi(r.gY)),Ua(0),a(G2,0,0)),$=a(i4,wi(i),wi(o));return a(Ce,c,a(H2,t,s(K2,e,l,$)))}),c4=v(function(e,r){return{hs:e,dy:r}}),l4=v(function(e,r){var n=r;return a(c4,n.hs,a($t,e,n.dy))}),u4=v(function(e,r){return{hs:r,dy:e}}),$4=a(u4,Pn,Ho),v4=re(function(e,r,n,t){return L(o4,r,n,t,a(l4,s(hu,Pr(0),Pr(0),Pr(e)),$4))}),f4=v4(0),m4=v(function(e,r){return F(r,{u:a(we,r.u,s(f4,us(e),e.cO,e.aw))})}),s4=v(function(e,r){var n=r.N.da?p2(e):_2(e);return n(a(x2,e,a(w2,e,a(S2,e,a(m4,e,r)))))}),d4=v(function(e,r){var n=r;return F(n,{o:a(x,n.s,n.o),s:e})}),sc=wo,fs=function(e){return wa(u([w("x",sc(e.iJ)),w("y",sc(e.iN)),w("z",sc(e.d4))]))},gu=wo,p4=Gp,ms=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,$=s(e,t,i,s(ms,e,r,o)),f=c;e=l,r=$,n=f;continue e}}),h4=T(function(e,r,n){var t=n;return s(ms,T(function(i,o,c){return a(e,i,c)}),r,t)}),ss=v(function(e,r){return s(h4,Ev(e),Iv(),r)}),g4=function(e){return wa(u([w("position",fs(e.bT)),w("outNeighbours",a(ss,gu,e.aK)),w("data",function(r){return p4}(e.cm))]))},b4=function(e){return wa(u([w("mappedToBaseVertex",gu(e.eW))]))},_4=function(e){return wa(u([w("position",fs(e.bT)),w("outNeighbours",a(ss,gu,e.aK)),w("data",b4(e.cm))]))},y4=function(e){return wa(u([w("baseGraph",a(sa,function(r){var n=r.a,t=r.b;return a(sa,Cr,u([At(n),g4(t)]))},e.T)),w("playerGraph",a(sa,function(r){var n=r.a,t=r.b;return a(sa,Cr,u([At(n),_4(t)]))},e.ae))]))},tv=function(e){var r=e;return a(K,function(n){var t=n.a,i=n.b;return w(k(t),i)},It(r))},x4=function(e){return{T:tv(e.T),ae:tv(e.ae)}},w4=a(rr,x4,y4),S4=v(function(e,r){var n=r;return wa(u([w("before",a(sa,e,n.o)),w("current",e(n.s)),w("after",a(sa,e,n.H))]))}),C4=v(function(e,r){return F(r,{db:a($f,2,a(S4,w4,e))})}),z4=function(e){var r=e,n=r.H;if(n.b){var t=n.a,i=n.b;return O({H:i,o:a(x,r.s,r.o),s:t})}else return U},P4=function(e){var r=e,n=r.o;if(n.b){var t=n.a,i=n.b;return O({H:a(x,r.s,r.H),o:i,s:t})}else return U},L4=function(e){var r=e,n=r.H;if(n.b){var t=n.a,i=n.b;return F(r,{H:i,o:a(x,t,r.o)})}else return F(r,{H:Ve(r.o),o:M})},T4=v(function(e,r){return F(r,{da:e})}),M4=function(e){var r=e,n=r.o;if(n.b){var t=n.a,i=n.b;return F(r,{o:i,s:t})}else{var o=r.H;if(o.b){var t=o.a,i=o.b;return F(r,{H:i,s:t})}else return r}},k4=function(e){return{T:e.T,ae:a(mu,v(function(r,n){return{cm:{eW:r},aK:n.aK,bT:n.bT}}),e.T)}},D4=v(function(e,r){return F(r,{dc:e})}),N4=T(function(e,r,n){switch(r.$){case 0:var t=r.a;return F(n,{N:a(T4,t,n.N)});case 1:return F(n,{a:a(we,n.a,P4(n.a))});case 2:return F(n,{a:a(we,n.a,z4(n.a))});case 3:return F(n,{a:a(d4,Zm,n.a)});case 4:return F(n,{a:M4(n.a)});case 5:return F(n,{a:L4(n.a)});case 6:return F(n,{a:a(fu,k4,n.a)});case 7:return F(n,{N:a(C4,n.a,n.N)});case 8:return F(n,{a:a(uu,n.a,a(Rm,qm(Ym),n.N.dc))});default:var i=r.a;return F(n,{N:a(D4,i,n.N)})}}),bu=function(e){return e},ds=T(function(e,r,n){return ge(n,e)<0?e:ge(n,r)>0?r:n}),I4=function(e){var r=e;return r},E4=function(e){var r=s(ds,1667,25e3,I4(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return bu({iJ:n,iN:t})},B4=function(e){return e},F4=function(e){return{$:0,a:e}},j4=F4,A4={$:3},V4=A4,J4=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),R4=J4,H4=function(e){return{$:1,a:e}},G4=H4,W4=function(e){return a(cn,"height",k(e))},O4=Xf,U4=function(e){return{$:2,a:e}},Y4=U4,q4=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return Re(l*1e3)/1e3},c=function(l){return Re(l*1e4)/100};return ha(u(["rgba(",fe(c(r)),"%,",fe(c(n)),"%,",fe(c(t)),"%,",fe(o(i)),")"]))},Z4=v(function(e,r){switch(r.$){case 0:return a(mh,e,r);case 1:return a(sh,e,r);case 2:return a(dh,e,r);case 3:return a(ph,e,r);case 4:return a(hh,e,r);default:return a(gh,e,r)}}),X4=v(function(e,r){switch(r.$){case 0:return a(H0,e,r);case 1:return a(G0,e,r);case 2:return a(W0,e,r);case 3:return a(O0,e,r);case 4:return a(U0,e,r);case 5:return a(Y0,e,r);case 6:return a(q0,e,r);case 7:return a(Z0,e,r);default:return X0(e)}}),Q4=T(function(e,r,n){return s(fh,e,r,n)}),iv=function(e){var r=e;return r},vt=Th,dc=L(vt,1,1,1,1),fn=T(function(e,r,n){return a(K,function(t){return a(t,r,n)},e)}),K4=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ey=v(function(e,r){var n=e,t=r.iJ,i=r.iN;return s(K4,n*t/i,n,n*(1-t-i)/i)}),ui=wh,ry=function(e){var r=e.a,n=e.b,t=e.c;return s(ui,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},Go=v(function(e,r){return ry(a(ey,e,r))}),ps=v(function(e,r){return{ex:me(e.ex,r.ex),w:e.w*r.w+e.x*r.z+e.y*r.C,x:e.w*r.x+e.x*r.A+e.y*r.D,y:e.w*r.y+e.x*r.B+e.y*r.E,z:e.z*r.w+e.A*r.z+e.B*r.C,A:e.z*r.x+e.A*r.A+e.B*r.D,B:e.z*r.y+e.A*r.B+e.B*r.E,C:e.C*r.w+e.D*r.z+e.E*r.C,D:e.C*r.x+e.D*r.A+e.E*r.D,E:e.C*r.y+e.D*r.B+e.E*r.E,O:r.O+(e.O*r.w+e.P*r.z+e.Q*r.C)*r.cN,P:r.P+(e.O*r.x+e.P*r.A+e.Q*r.D)*r.cN,Q:r.Q+(e.O*r.y+e.P*r.B+e.Q*r.E)*r.cN,cN:e.cN*r.cN}}),hn=Eh,ny=function(e){return hn({eG:e.w,eH:e.z,eI:e.C,eJ:e.O,eK:e.x,eL:e.A,eM:e.D,eN:e.P,eO:e.y,eP:e.B,eQ:e.E,eR:e.Q,eS:0,eT:0,eU:0,eV:1})},pc=cr(function(e,r,n,t,i){var o=t.ex?1:-1,c=L(vt,t.cN,t.cN,t.cN,o);return pr(i,e,c,ny(t),t.ex,r,n)}),hs=Er(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,$=e,f=r,m=n,d=a(ps,c,t),b=l,h=o;e=$,r=f,n=m,t=d,i=b,o=h;continue e;case 1:var y=i.b,_=a(x,N(pc,e,r,n,t,y),o.U);return{U:_,af:o.af,hX:o.hX};case 3:var z=i.b,P=a(x,N(pc,e,r,n,t,z),o.af);return{U:o.U,af:P,hX:o.hX};case 2:var S=i.a,D=a(x,N(pc,e,r,n,t,S),o.hX);return{U:o.U,af:o.af,hX:D};default:var W=i.a;return s(Ae,L(hs,e,r,n,t),o,W)}}),ay=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),gs=ay,_u=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),ty=function(e){var r=e.ap,n=e.aj,t=e.ah;return L(_u,518,r,n,t)},iy=v(function(e,r){return{$:6,a:e,b:r}}),oy=iy,bs=u([ty({ah:1,aj:0,ap:!1}),L(gs,!1,!1,!1,!1),a(oy,0,1)]),it=519,yu=8,_s=15,qa=7681,cy={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Je=R0,ly=v(function(e,r){return{$:0,a:e,b:r}}),uy=ly({eg:1,et:0,e3:5}),kr=yh,$y=uy(u([{bT:a(kr,-1,-1)},{bT:a(kr,1,-1)},{bT:a(kr,-1,1)},{bT:a(kr,1,1)}])),vy={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},fy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:$,j:f,k:m}}}}}}}}}}}},xu=T(function(e,r,n){var t=e.dK,i=e.dp,o=e.d1,c=v(function(f,m){var d=f;return m(d)}),l=v(function(f,m){var d=f;return m(d)}),$=function(f){return a(rr,c(f.bY),a(rr,l(f.bJ),a(rr,l(f.b5),l(f.b6))))};return a($,n,a($,r,s(fy,t,i,o)))}),wu=function(e){return s(xu,{dp:e.dp,dK:e.dK,d1:e.d1},{bJ:e.bJ,bY:e.bY,b5:e.b5,b6:e.b6},{bJ:e.bJ,bY:e.bY,b5:e.b5,b6:e.b6})},Su=function(e){return N(Je,u([wu(e),L(gs,!1,!1,!1,!1)]),vy,cy,$y,{})},my=Su({bJ:qa,dp:0,dK:yu,bY:it,d1:_s,b5:qa,b6:qa}),sy=516,ov=5386,gr=7680,dy=function(e){return a(Hr,2,e+4)},ys=function(e){return Su({bJ:gr,dp:_s,dK:yu,bY:sy,d1:dy(e),b5:ov,b6:ov})},py=T(function(e,r,n){return br(u([s(fn,e,n,bs),u([ys(r),my])]))}),hy=v(function(e,r){return br(a(ff,py(e),r))}),gy=function(e){var r=e.ap,n=e.aj,t=e.ah;return L(_u,513,r,n,t)},by=gy({ah:1,aj:0,ap:!0}),_y=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:$,j:f}}}}}}}}}}},yy=function(e){var r=e.cK,n=e.cq,t=e.ca,i=e.b7,o=e.cg,c=e.fW,l=v(function($,f){var m=$.a,d=$.b,b=$.c,h=f.a,y=f.b,_=f.c;return _y(m)(d)(b)(h)(y)(_)(r)(n)(t)(i)});return a(l,o,c)},xy=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),cv=v(function(e,r){var n=e,t=r;return s(xy,32774,n,t)}),wy=1,lv=771,Sy=770,Cu=yy({b7:0,fW:a(cv,wy,lv),ca:0,cg:a(cv,Sy,lv),cq:0,cK:0}),Ba=u([by,Cu]),Cy=function(e){var r=e;return r.eY},zy=function(e){var r=e;return r.eZ},xs=function(e){var r=e;return r.e_},Py=function(e){var r=e;return r.e$},Ly=function(e){var r=e;return r.e0},ws=function(e){var r=e;return r.e1},Fn=v(function(e,r){var n=e,t=r;return t-n}),Ss=function(e){return V(a(Fn,Py(e),Cy(e)),a(Fn,Ly(e),zy(e)),a(Fn,ws(e),xs(e)))},Ty=function(e){return e},My=function(e){return Ca({dy:Ty({iJ:e.O,iN:e.P,d4:e.Q}),d2:Bn({iJ:e.w,iN:e.x,d4:e.y}),d3:Bn({iJ:e.z,iN:e.A,d4:e.B}),d5:Bn({iJ:e.C,iN:e.D,d4:e.E})})},hc=v(function(e,r){var n=e,t=r,i=n.d5,o=i,c=n.d3,l=c,$=n.d2,f=$;return{iJ:t.iJ*f.iJ+t.iN*f.iN+t.d4*f.d4,iN:t.iJ*l.iJ+t.iN*l.iN+t.d4*l.d4,d4:t.iJ*o.iJ+t.iN*o.iN+t.d4*o.d4}}),Cs=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=t.iJ-o.iJ,l=t.iN-o.iN,$=t.d4-o.d4,f=n.d5,m=f,d=n.d3,b=d,h=n.d2,y=h;return{iJ:c*y.iJ+l*y.iN+$*y.d4,iN:c*b.iJ+l*b.iN+$*b.d4,d4:c*m.iJ+l*m.iN+$*m.d4}}),zs=v(function(e,r){return{dy:a(Cs,e,ut(r)),d2:a(hc,e,za(r)),d3:a(hc,e,Pa(r)),d5:a(hc,e,La(r))}}),ll=T(function(e,r,n){return{iJ:e,iN:r,d4:n}}),so=function(e){var r=e;return r},Qe=v(function(e,r){var n=e,t=r;return a(er,n,t)}),nr=v(function(e,r){var n=e,t=r;return a(Kr,n,t)}),ky=v(function(e,r){var n=so(r),t=so(e);return{eY:a(Qe,t.eY,n.eY),eZ:a(Qe,t.eZ,n.eZ),e_:a(Qe,t.e_,n.e_),e$:a(nr,t.e$,n.e$),e0:a(nr,t.e0,n.e0),e1:a(nr,t.e1,n.e1)}}),Wr=function(e){var r=e;return r},Dy=function(e){var r=e;return V(r.iJ,r.iN,r.d4)},Mt=v(function(e,r){var n=e,t=r;return t+n}),Ny=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=Fi(fr(t)),c=Fi(fr(n)),l=Fi(fr(i)),$=Dy(r),f=$.a,m=$.b,d=$.c;return{eY:a(Mt,c,f),eZ:a(Mt,o,m),e_:a(Mt,l,d),e$:a(Fn,c,f),e0:a(Fn,o,m),e1:a(Fn,l,d)}}),uv=re(function(e,r,n,t){var i=n.gi,o=2*n.gW*r,c=2*n.gV*r,l=2*n.gU*r,$=i.d4*r,f=i.iN*r,m=i.iJ*r,d=Wr(La(e)),b=ze(l*d.iJ)+ze(c*d.iN)+ze(o*d.d4),h=Wr(Pa(e)),y=ze(l*h.iJ)+ze(c*h.iN)+ze(o*h.d4),_=Wr(za(e)),z=ze(l*_.iJ)+ze(c*_.iN)+ze(o*_.d4),P=a(Ny,V(z,y,b),a(Cs,e,s(ll,m,f,$)));if(t.$)return O(P);var S=t.a;return O(a(ky,S,P))}),ul=re(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var h=e,y=r,_=n,z=o;e=h,r=y,n=_,t=z;continue e;case 1:var c=i.a,l=L(uv,e,r,c,n),h=e,y=r,_=l,z=o;e=h,r=y,n=_,t=z;continue e;case 2:var h=e,y=r,_=n,z=o;e=h,r=y,n=_,t=z;continue e;case 3:var c=i.a,l=L(uv,e,r,c,n),h=e,y=r,_=l,z=o;e=h,r=y,n=_,t=z;continue e;case 4:var $=i.a,h=e,y=r,_=L(ul,e,r,n,$),z=o;e=h,r=y,n=_,t=z;continue e;default:var f=i.a,m=i.b,d=a(zs,My(f),e),b=r*f.cN,h=e,y=r,_=L(ul,d,b,n,u([m])),z=o;e=h,r=y,n=_,t=z;continue e}}else return n}),Ta=Sh,Ma=Ch,ka=zh,Ps=function(e){return{$:4,a:e}},Iy=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(x,n,r);e=i,r=o;continue e}else return r}),$i=function(e){return Ps(a(Iy,e,M))},Ey={ex:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,O:0,P:0,Q:0,cN:1},$v=Su({bJ:qa,dp:0,dK:yu,bY:it,d1:255,b5:qa,b6:qa}),By=function(e){var r=e,n=a(er,ze(r.iJ),a(er,ze(r.iN),ze(r.d4)));if(n){var t=r.d4/n,i=r.iN/n,o=r.iJ/n,c=pn(o*o+i*i+t*t);return c*n}else return Nn},Tr={ca:0,gh:!1,cq:0,dH:0,cK:0,dV:0,iJ:0,iN:0,d4:0},Fr=v(function(e,r){var n=e,t=r;return hn({eG:n.iJ,eH:n.cK,eI:t.iJ,eJ:t.cK,eK:n.iN,eL:n.cq,eM:t.iN,eN:t.cq,eO:n.d4,eP:n.ca,eQ:t.d4,eR:t.ca,eS:n.dV,eT:n.dH,eU:t.dV,eV:t.dH})}),St=w({bP:a(Fr,Tr,Tr),cx:a(Fr,Tr,Tr),cy:a(Fr,Tr,Tr),cz:a(Fr,Tr,Tr)},L(vt,0,0,0,0)),Ls=514,Ts=function(e){var r=e.ap,n=e.aj,t=e.ah;return L(_u,515,r,n,t)},Ms=240,Fy=u([Ts({ah:1,aj:0,ap:!0}),wu({bJ:gr,dp:Ms,dK:0,bY:Ls,d1:0,b5:gr,b6:gr}),Cu]),jy=v(function(e,r){var n=e,t=r.hr,i=r.gM,o=r.f_,c=fr(t),l=c,$=fr(i),f=$,m=n.dJ;if(m.$){var b=m.a;return Jc(f)?hn({eG:2/(o*b),eH:0,eI:0,eJ:0,eK:0,eL:2/b,eM:0,eN:0,eO:0,eP:0,eQ:0,eR:-1,eS:0,eT:0,eU:0,eV:1}):hn({eG:2/(o*b),eH:0,eI:0,eJ:0,eK:0,eL:2/b,eM:0,eN:0,eO:0,eP:0,eQ:-2/(f-l),eR:-(f+l)/(f-l),eS:0,eT:0,eU:0,eV:1})}else{var d=m.a;return Jc(f)?hn({eG:1/(o*d),eH:0,eI:0,eJ:0,eK:0,eL:1/d,eM:0,eN:0,eO:0,eP:0,eQ:-1,eR:-2*l,eS:0,eT:0,eU:-1,eV:0}):hn({eG:1/(o*d),eH:0,eI:0,eJ:0,eK:0,eL:1/d,eM:0,eN:0,eO:0,eP:0,eQ:-(f+l)/(f-l),eR:-2*f*l/(f-l),eS:0,eT:0,eU:-1,eV:0})}}),Si=v(function(e,r){return(1&e>>r)===1?0:1}),Ay=function(e){return u([Ts({ah:1,aj:0,ap:!0}),wu({bJ:gr,dp:Ms,dK:e,bY:Ls,d1:0,b5:gr,b6:gr}),Cu])},Vy=T(function(e,r,n){return br(a(K,function(t){var i=t<<4,o=L(vt,a(Si,t,0),a(Si,t,1),a(Si,t,2),a(Si,t,3));return s(fn,e,w(r,o),Ay(i))},a(En,1,a(Hr,2,n)-1)))}),Za=function(e){var r=e;return r},Jy=Bh,zu=Bn({iJ:0,iN:1,d4:0}),Pu=zu,Ry={dy:Pn,d2:Ro,d3:Pu,d5:Ho},vi=function(e){var r=e;return r},Hy=function(e){var r=vi(ut(e)),n=Wr(La(e)),t=Wr(Pa(e)),i=Wr(za(e));return hn({eG:i.iJ,eH:t.iJ,eI:n.iJ,eJ:r.iJ,eK:i.iN,eL:t.iN,eM:n.iN,eN:r.iN,eO:i.d4,eP:t.d4,eQ:n.d4,eR:r.d4,eS:0,eT:0,eU:0,eV:1})},Gy=v(function(e,r){var n=r;return Hy(a(zs,n,e))}),Wy=function(e){return a(Gy,Ry,e)},Oy=function(e){var r=e;return r.dY},Uy=function(e){var r=e;return za(r)},Yy=function(e){var r=e;return Pa(r)},qy=function(e){var r=Oy(e.ge),n=Ca({dy:il(r),d2:Uy(r),d3:Yy(r),d5:mo(ol(r))}),t=$i(e.bh),i=t,o=L(ul,n,1,U,u([i]));if(o.$===1)return M;var c=o.a,l=Wy(r),$=a(We,.99,a(Qe,fr(e.gm),fo(xs(c)))),f=Ss(c),m=f.a,d=f.b,b=f.c,h=By(s(hu,m,d,b)),y=a(We,1.01,a(Mt,h,fo(ws(c)))),_=a(jy,e.ge,{f_:e.f_,gM:y,hr:$}),z=Jy(_).eV,P=z?Wr(mo(ol(r))):Za(il(r)),S=function(){var pe=e.ix;switch(pe.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var Be=pe.a;return w(3,Be);case 4:var Be=pe.a;return w(4,Be);default:return w(5,0)}}(),D=S.a,W=S.b,ne=e.gK,ie=ne,ce=a(Go,ie,e.iG),le=ce,te=hn({eG:0,eH:P.iJ,eI:Ta(le),eJ:e.fs,eK:0,eL:P.iN,eM:Ma(le),eN:ji(h),eO:0,eP:P.d4,eQ:ka(le),eR:D,eS:0,eT:z,eU:0,eV:W}),Q=pr(hs,te,l,_,Ey,i,{U:M,af:M,hX:M}),be=e.hk;switch(be.$){case 0:var _e=be.a;return br(u([s(fn,Q.U,w(_e,dc),Ba),s(fn,Q.af,St,Ba)]));case 1:var _e=be.a;return br(u([s(fn,Q.U,St,Ba),u([$v]),s(fn,Q.hX,_e.bP,bs),u([ys(0)]),s(fn,Q.U,w(_e,dc),Fy),s(fn,Q.af,St,Ba)]));default:var Ee=be.a,Me=be.b;return br(u([s(fn,Q.U,w(Me,dc),Ba),u([$v]),a(hy,Q.hX,Ee),s(Vy,Q.U,Me,yn(Ee)),s(fn,Q.af,St,Ba)]))}},Zy=function(e){return a(cn,"width",k(e))},Xy=v(function(e,r){var n=u([G4(1),Y4(0),j4(!0),L(R4,0,0,0,0)]),t=function(){var D=e.fX;switch(D.$){case 0:return V(n,"0",1);case 1:return V(a(x,V4,n),"1",1);default:var W=D.a;return V(n,"0",W)}}(),i=t.a,o=t.b,c=t.c,l=e.bd,$=l.a,f=l.b,m=iv(f),d=a(Ke,"height",k(m)+"px"),b=iv($),h=b/m,y=a(xa,function(D){return qy({f_:h,ge:e.ge,gm:e.gm,bh:D.bh,gK:D.gK,hk:D.hk,fs:c,ix:D.ix,iG:D.iG})},r),_=a(Ke,"width",k(b)+"px"),z=e.ba,P=z,S=q4(P);return s(O4,"div",u([a(Ke,"padding","0px"),_,d]),u([w(o,s(Q4,i,u([Zy(Re(b*c)),W4(Re(m*c)),_,d,a(Ke,"display","block"),a(Ke,"background-color",S)]),y))]))}),Qy=function(e){return{$:2,a:e}},Ky=function(e){return Qy(e)},ex=function(e){return a(Xy,{fX:Ky(e.c5),ba:e.ba,ge:e.ge,gm:e.gm,bd:e.bd},u([{bh:e.bh,gK:e.gK,hk:e.hk,ix:e.ix,iG:e.iG}]))},vv=function(e){return e},rx=function(e){var r=e;return r},Lu=function(e){var r=e;return rx(r.f$)},ks=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),nx=re(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Ds=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Ns=re(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),ax=re(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),tx=re(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),ix=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Tu=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(ix,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(ks,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L(nx,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(Ds,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(tx,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L(Ns,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(ax,n,t,i,1);case 8:return e;case 9:return e;default:return e}},Mu={$:0},ox=Ie(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var $=l.a,f=l.b,m=so(c($)),d=a(nr,m.e$,e),b=a(Qe,m.eY,r),h=a(nr,m.e0,n),y=a(Qe,m.eZ,t),_=a(nr,m.e1,i),z=a(Qe,m.e_,o),P=c,S=f;e=d,r=b,n=h,t=y,i=_,o=z,c=P,l=S;continue e}else return{eY:r,eZ:t,e_:o,e$:e,e0:n,e1:i}}),cx=T(function(e,r,n){var t=so(e(r));return Yt(ox,t.e$,t.eY,t.e0,t.eZ,t.e1,t.e_,e,n)}),gc=v(function(e,r){var n=e,t=r;return ge(t,n)<1}),Is=function(e){return a(gc,e.eY,e.e$)&&a(gc,e.eZ,e.e0)&&a(gc,e.e_,e.e1)?e:{eY:a(Qe,e.e$,e.eY),eZ:a(Qe,e.e0,e.eZ),e_:a(Qe,e.e1,e.e_),e$:a(nr,e.e$,e.eY),e0:a(nr,e.e0,e.eZ),e1:a(nr,e.e1,e.e_)}},Ot=function(e){var r=e;return r},Es=function(e){var r=Ot(e),n=r.a,t=r.b,i=r.c,o=qn(n),c=Zn(n),l=Xn(n),$=qn(t),f=Zn(t),m=Xn(t),d=qn(i),b=Zn(i),h=Xn(i);return Is({eY:a(Qe,o,a(Qe,$,d)),eZ:a(Qe,c,a(Qe,f,b)),e_:a(Qe,l,a(Qe,m,h)),e$:a(nr,o,a(nr,$,d)),e0:a(nr,c,a(nr,f,b)),e1:a(nr,l,a(nr,m,h))})},Bs=Ph,wr=function(e){return Bs(vi(e))},Fs=function(e){var r=e;return r},Wo=function(e){return Bs(Fs(e))},lx=v(function(e,r){var n=e,t=r;return{iJ:t.iN*n.d4-t.d4*n.iN,iN:t.d4*n.iJ-t.iJ*n.d4,d4:t.iJ*n.iN-t.iN*n.iJ}}),$l=v(function(e,r){var n=e,t=r;return{iJ:t.iJ-n.iJ,iN:t.iN-n.iN,d4:t.d4-n.d4}}),js=function(e){return e},ux={iJ:0,iN:0,d4:0},$x=v(function(e,r){var n=e,t=r,i=a(er,ze(t.iJ),a(er,ze(t.iN),ze(t.d4)));if(i){var o=t.d4/i,c=t.iN/i,l=t.iJ/i,$=pn(l*l+c*c+o*o);return{iJ:n*l/$,iN:n*c/$,d4:n*o/$}}else return ux}),vx=$x(js(1)),As=T(function(e,r,n){var t=a($l,r,n),i=a($l,e,r);return vx(a(lx,t,i))}),fx=function(e){var r=Ot(e),n=r.a,t=r.b,i=r.c,o=Wo(s(As,n,t,i));return V({t:o,bT:wr(n)},{t:o,bT:wr(t)},{t:o,bT:wr(i)})},mx=v(function(e,r){return{$:2,a:e,b:r}}),Vs=mx({eg:3,et:0,e3:4}),sx=function(e){if(e.b){var r=e.a,n=e.b,t=Vs(a(K,fx,e)),i=s(cx,Es,r,n);return L(ks,i,e,t,0)}else return Mu},Br=T(function(e,r,n){return V(e,r,n)}),ur=T(function(e,r,n){var t=e,i=r,o=n;return{iJ:t,iN:i,d4:o}}),Js=function(){var e=Pr(1),r=Pr(1),n=Pr(1),t=a(We,-.5,e),i=a(We,-.5,r),o=a(We,-.5,n),c=s(ur,o,i,t),l=a(We,.5,e),$=s(ur,o,i,l),f=a(We,.5,r),m=s(ur,o,f,t),d=s(ur,o,f,l),b=a(We,.5,n),h=s(ur,b,i,t),y=s(ur,b,f,t),_=s(ur,b,i,l),z=s(ur,b,f,l);return Tu(sx(u([s(Br,c,y,h),s(Br,c,m,y),s(Br,$,_,z),s(Br,$,z,d),s(Br,h,y,z),s(Br,h,z,_),s(Br,c,d,m),s(Br,c,$,d),s(Br,c,h,_),s(Br,c,_,$),s(Br,m,z,y),s(Br,m,d,z)])))}(),Ci={$:0},dx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),px=T(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),$=e(t),f=Wo(s(As,$,l,c)),m={t:f,bT:wr($)},d={t:f,bT:wr(l)},b={t:f,bT:wr(c)};return a(x,m,a(x,d,a(x,b,n)))}),ku=function(e){var r=e;return r.K},hx=re(function(e,r,n,t){if(r.$===1)return U;var i=r.a;if(n.$===1)return U;var o=n.a;if(t.$===1)return U;var c=t.a;return O(s(e,i,o,c))}),vl=4294967295>>>32-Bt,fl=jd,gx=T(function(e,r,n){e:for(;;){var t=vl&r>>>e,i=a(fl,t,n);if(i.$){var f=i.a;return a(fl,vl&r,f)}else{var o=i.a,c=e-Bt,l=r,$=o;e=c,r=l,n=$;continue e}}}),bx=function(e){return e>>>5<<5},_x=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||ge(e,n)>-1?U:ge(e,bx(n))>-1?O(a(fl,vl&e,o)):O(s(gx,t,e,i))}),Du=function(e){var r=e;return r.aB},bc=v(function(e,r){return a(_x,e,Du(r))}),yx=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(hx,T(function(c,l,$){return V(c,l,$)}),a(bc,t,e),a(bc,i,e),a(bc,o,e))};return a(Or,r,ku(e))},xx=T(function(e,r,n){e:for(;;){var t=a(El,Ir,e),i=t.a,o=t.b;if(ge(Ac(i),Ir)<0)return a(gf,!0,{F:r,p:n,v:i});var c=o,l=a(x,hf(i),r),$=n+1;e=c,r=l,n=$;continue e}}),Nu=function(e){return e.b?s(xx,e,M,0):df},wx=v(function(e,r){return!a(ba,a(ia,pg,e),r)}),Sx=function(e){var r=e.a;return r},Rs=v(function(e,r){var n=Sx(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ge(o,n)<0&&c>=0&&ge(c,n)<0&&l>=0&&ge(l,n)<0};return a(wx,t,r)?{K:r,aB:e}:{K:a(Gl,t,r),aB:e}}),Cx=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),fi=Cx({eg:1,et:3,e3:4}),Ai=v(function(e,r){var n=Za(r),t=Za(e);return w(V(t.iJ,t.iN,t.d4),V(n.iJ,n.iN,n.d4))}),fv=s(ui,0,0,0),_c=Er(function(e,r,n,t,i,o){var c=o.a,l=o.b,$=o.c,f=a(ta,a(Ai,e,r),i);if(f.$){var d={t:fv,bT:wr(r)},b={t:fv,bT:wr(e)},h=$+1,y=$;return V(a(x,V(n,y,h),a(x,V(n,h,t),c)),a(x,d,a(x,b,l)),$+2)}else{var m=f.a;return V(a(x,V(n,m,t),c),l,$)}}),zx=cr(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,$=o.c,f=n.b,m=e($),d=e(l),b=e(c),h=t+2,y=t+1,_=t,z=e,P=r,S=f,D=t+3,W=pr(_c,m,b,h,_,r,pr(_c,d,m,y,h,r,pr(_c,b,d,_,y,r,i)));e=z,r=P,n=S,t=D,i=W;continue e}else{var ne=i,ie=ne.a,ce=ne.b;return w(ie,Ve(ce))}}),Px=cr(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,$=o.c,f=r.b,m=e($),d=e(l),b=e(c),h=n+2,y=n+1,_=n,z=s(Yn,a(Ai,b,m),h,s(Yn,a(Ai,m,d),y,s(Yn,a(Ai,d,b),_,i))),P=a(x,V(_,y,h),t),S=e,D=f,W=n+3,ne=P,ie=z;e=S,r=D,n=W,t=ne,i=ie;continue e}else return V(t,i,n)}),$a=T(function(e,r,n){var t=yx(n),i=s(ir,px(r),M,t),o=N(Px,r,t,0,M,Mo),c=o.a,l=o.b,$=o.c,f=N(zx,r,l,t,0,V(c,M,$)),m=f.a,d=f.b,b=Gn(d)?i:Y(i,d);return s(dx,e,a(Rs,Nu(b),m),a(fi,b,m))}),ml=function(e){return{K:a(K,function(r){return V(3*r,3*r+1,3*r+2)},a(En,0,yn(e)-1)),aB:Nu(br(a(K,function(r){var n=r.a,t=r.b,i=r.c;return u([n,t,i])},e)))}},Hs=function(e){switch(e.$){case 0:return Ci;case 1:var t=e.a,r=e.b,n=a(K,Ot,r);return s($a,t,Cr,ml(n));case 2:var t=e.a,r=e.b,n=a(K,Ot,r);return s($a,t,Cr,ml(n));case 3:var t=e.a,i=e.b;return s($a,t,Cr,i);case 4:var t=e.a,i=e.b;return s($a,t,function(o){return o.bT},i);case 5:var t=e.a,i=e.b;return s($a,t,function(o){return o.bT},i);case 6:var t=e.a,i=e.b;return s($a,t,function(o){return o.bT},i);case 7:var t=e.a,i=e.b;return s($a,t,function(o){return o.bT},i);case 8:return Ci;case 9:return Ci;default:return Ci}},mv=Hs(Js),Iu=function(e){var r=e;return r.bd},Gs={$:0},q=Gs,$r=v(function(e,r){return{$:1,a:e,b:r}}),Lx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"ch"}},Tx=1029,Mx=function(e){return{$:5,a:e}},Ws=function(e){var r=e;return Mx(r)},kx=Ws(Tx),Dx=1028,Nx=Ws(Dx),Sr=T(function(e,r,n){return r===1?e?a(x,kx,n):a(x,Nx,n):n}),Os={src:`
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
    `,attributes:{position:"bT",uv:"S"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},yc=re(function(e,r,n,t){return a($r,r,Ie(function(i,o,c,l,$,f,m,d){return N(Je,s(Sr,l,t,d),Os,Lx,n,{ch:e,d:c,e:o,f,g:i,h:$})}))}),Eu={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aX"}},Us={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Tn=re(function(e,r,n,t){return a($r,r,Ie(function(i,o,c,l,$,f,m,d){return N(Je,s(Sr,l,t,d),Us,Eu,n,{aX:e,d:c,e:o,f,g:i,h:$})}))}),Ys=v(function(e,r){return{$:3,a:e,b:r}}),Ix={src:`
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
    `,attributes:{},uniforms:{constantColor:"aX",pointRadius:"cI",sceneProperties:"g"}},qs={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",pointRadius:"cI",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Ex=re(function(e,r,n,t){return a(Ys,n,Ie(function(i,o,c,l,$,f,m,d){return N(Je,d,qs,Ix,t,{aX:e,d:c,e:o,cI:r,f,g:i,h:$})}))}),Bu={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bf",sceneProperties:"g"}},mi=function(e){var r=e;return r},Oo=Lh,Mn=cr(function(e,r,n,t,i){return a($r,n,Ie(function(o,c,l,$,f,m,d,b){return N(Je,s(Sr,$,i,b),Us,Bu,t,{bf:a(Oo,mi(r),e),d:l,e:c,f:m,g:o,h:f})}))}),Bx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bf",pointRadius:"cI",sceneProperties:"g"}},Fx=cr(function(e,r,n,t,i){return a(Ys,t,Ie(function(o,c,l,$,f,m,d,b){return N(Je,b,qs,Bx,i,{bf:a(Oo,mi(r),e),d:l,e:c,cI:n,f:m,g:o,h:f})}))}),Zs={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",materialColor:"dq",sceneProperties:"g",viewMatrix:"h"}},Xs={src:`
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
    `,attributes:{normal:"t",position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},zi=re(function(e,r,n,t){return a($r,r,Ie(function(i,o,c,l,$,f,m,d){var b=m.a,h=m.b;return N(Je,s(Sr,l,t,d),Xs,Zs,n,{Z:h,bP:b.bP,cx:b.cx,cy:b.cy,cz:b.cz,dq:e,d:c,e:o,f,g:i,h:$})}))}),Qs={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",materialColorTexture:"dr",normalMapTexture:"bq",sceneProperties:"g",useNormalMap:"bw",viewMatrix:"h"}},Ks={src:`
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
    `,attributes:{normal:"t",position:"bT",tangent:"fu",uv:"S"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},jx=Er(function(e,r,n,t,i,o){return a($r,t,Ie(function(c,l,$,f,m,d,b,h){var y=b.a,_=b.b;return N(Je,s(Sr,f,o,h),Ks,Qs,i,{Z:_,bP:y.bP,cx:y.cx,cy:y.cy,cz:y.cz,dr:e,d:$,e:l,bq:r,f:d,g:c,bw:n,h:m})}))}),ed={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"c1",constantBaseColor:"c2",constantMetallic:"c3",constantRoughness:"c4",enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",metallicTexture:"du",normalMapTexture:"bq",roughnessTexture:"dO",sceneProperties:"g",useNormalMap:"bw",viewMatrix:"h"}},Ax=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(f){return function(m){return a($r,$,Ie(function(d,b,h,y,_,z,P,S){var D=P.a,W=P.b;return N(Je,s(Sr,y,m,S),Ks,ed,f,{c1:e,c2:r,c3:o,c4:t,Z:W,bP:D.bP,cx:D.cx,cy:D.cy,cz:D.cz,du:i,d:h,e:b,bq:c,f:z,dO:n,g:d,bw:l,h:_})}))}}}}}}}}}}},rd={src:`
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
    `,attributes:{},uniforms:{baseColor:"c0",enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",metallic:"dt",roughness:"dN",sceneProperties:"g",viewMatrix:"h"}},Pi=Er(function(e,r,n,t,i,o){return a($r,t,Ie(function(c,l,$,f,m,d,b,h){var y=b.a,_=b.b;return N(Je,s(Sr,f,o,h),Xs,rd,i,{c0:e,Z:_,bP:y.bP,cx:y.cx,cy:y.cy,cz:y.cz,dt:n,d:$,e:l,f:d,dN:r,g:c,h:m})}))}),Vx=function(e){return{$:0,a:e}},sv=v(function(e,r){return{$:1,a:e,b:r}}),kt=v(function(e,r){if(r.$){var n=r.a.cm;return w(n,1)}else return r.a,w(e,0)}),Jx=function(e){return L(vt,Ta(e),Ma(e),ka(e),1)},Fu=L(vt,0,0,0,0),Vi=v(function(e,r){if(r.$){var t=r.a.cm;return w(t,Fu)}else{var n=r.a;return w(e,Jx(n))}}),nd=v(function(e,r){var n=w(e,r);if(n.a.$){var i=n.a.a.cm;return a(sv,w(i,Fu),a(kt,i,r))}else if(n.b.$){var i=n.b.a.cm;return a(sv,a(Vi,i,e),a(kt,i,r))}else{var t=n.a.a;return n.b.a,Vx(t)}}),Rx=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Li=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Hx=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Gx=function(e){return a(kr,e,1)},sl=a(kr,0,0),Fa=v(function(e,r){if(r.$){var t=r.a.cm;return w(t,sl)}else{var n=r.a;return w(e,Gx(n))}}),ad=re(function(e,r,n,t){var i=L(Hx,e,r,n,t);if(i.a.$){var $=i.a.a.cm;return L(Li,w($,Fu),a(Fa,$,r),a(Fa,$,n),a(kt,$,t))}else if(i.b.$){var $=i.b.a.cm;return L(Li,a(Vi,$,e),w($,sl),a(Fa,$,n),a(kt,$,t))}else if(i.c.$){var $=i.c.a.cm;return L(Li,a(Vi,$,e),a(Fa,$,r),w($,sl),a(kt,$,t))}else if(i.d.$){var $=i.d.a.cm;return L(Li,a(Vi,$,e),a(Fa,$,r),a(Fa,$,n),w($,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,s(Rx,o,c,l)}}),Wx={src:`
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
    `,attributes:{},uniforms:{backlight:"c_",colorTexture:"ch",sceneProperties:"g"}},xc=cr(function(e,r,n,t,i){return a($r,n,Ie(function(o,c,l,$,f,m,d,b){return N(Je,s(Sr,$,i,b),Os,Wx,t,{c_:mi(r),ch:e,d:l,e:c,f:m,g:o,h:f})}))}),td={src:`
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
    `,attributes:{normal:"t",position:"bT",uv:"S"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Ox=re(function(e,r,n,t){return a($r,r,Ie(function(i,o,c,l,$,f,m,d){var b=m.a,h=m.b;return N(Je,s(Sr,l,t,d),td,Qs,n,{Z:h,bP:b.bP,cx:b.cx,cy:b.cy,cz:b.cz,dr:e,d:c,e:o,bq:e,f,g:i,bw:0,h:$})}))}),Ux=gl(function(e,r,n,t,i,o,c,l,$){return a($r,c,Ie(function(f,m,d,b,h,y,_,z){var P=_.a,S=_.b;return N(Je,s(Sr,b,$,z),td,ed,l,{c1:e,c2:r,c3:o,c4:t,Z:S,bP:P.bP,cx:P.cx,cy:P.cy,cz:P.cz,du:i,d,e:m,bq:e,f:y,dO:n,g:f,bw:0,h})}))}),Ut=T(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Yx=function(e){var r=e;return s(Ut,r.e$,r.eY,.5)},qx=function(e){var r=e;return s(Ut,r.e0,r.eZ,.5)},Zx=function(e){var r=e;return s(Ut,r.e1,r.e_,.5)},Xx=function(e){return s(ur,Yx(e),qx(e),Zx(e))},se=function(e){var r=Ss(e),n=r.a,t=r.b,i=r.c;return{gi:vi(Xx(e)),gU:n/2,gV:t/2,gW:i/2}},ju=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.cm;switch(r.$){case 0:return q;case 1:return q;case 2:return q;case 3:return q;case 4:return q;case 5:var i=r.a,c=r.c,t=r.d;return L(yc,l,se(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(yc,l,se(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(yc,l,se(i),c,t);case 8:return q;case 9:return q;default:return q}}else{var n=e.b.a;switch(r.$){case 0:return q;case 1:var i=r.a,c=r.c,t=r.d;return L(Tn,n,se(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return L(Tn,n,se(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return L(Tn,n,se(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return L(Tn,n,se(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return L(Tn,n,se(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(Tn,n,se(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(Tn,n,se(i),c,t);case 8:var i=r.a,c=r.c;return L(Tn,n,se(i),c,0);case 9:var i=r.a,c=r.c;return L(Tn,n,se(i),c,0);default:var i=r.a,o=r.b,c=r.d;return L(Ex,n,o,se(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.cm,f=e.c;switch(r.$){case 0:return q;case 1:return q;case 2:return q;case 3:return q;case 4:return q;case 5:var i=r.a,c=r.c,t=r.d;return N(xc,l,f,se(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return N(xc,l,f,se(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return N(xc,l,f,se(i),c,t);case 8:return q;case 9:return q;default:return q}}else{var $=e.b.a,f=e.c;switch(r.$){case 0:return q;case 1:var i=r.a,c=r.c,t=r.d;return N(Mn,$,f,se(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return N(Mn,$,f,se(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return N(Mn,$,f,se(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return N(Mn,$,f,se(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return N(Mn,$,f,se(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return N(Mn,$,f,se(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return N(Mn,$,f,se(i),c,t);case 8:var i=r.a,c=r.c;return N(Mn,$,f,se(i),c,0);case 9:var i=r.a,c=r.c;return N(Mn,$,f,se(i),c,0);default:var i=r.a,o=r.b,c=r.d;return N(Fx,$,f,o,se(i),c)}}case 2:e.a;var m=e.b,ie=e.c,d=a(nd,m,ie);if(d.$){var y=d.a,_=y.a;y.b;var z=d.b,P=z.a,S=z.b;switch(r.$){case 0:return q;case 1:return q;case 2:return q;case 3:return q;case 4:return q;case 5:return q;case 6:var i=r.a,c=r.c,h=r.d;return L(Ox,_,se(i),c,h);case 7:var i=r.a,c=r.c,h=r.d;return pr(jx,_,P,S,se(i),c,h);case 8:return q;case 9:return q;default:return q}}else{var b=d.a;switch(r.$){case 0:return q;case 1:return q;case 2:var i=r.a,c=r.c,h=r.d;return L(zi,b,se(i),c,h);case 3:return q;case 4:var i=r.a,c=r.c,h=r.d;return L(zi,b,se(i),c,h);case 5:return q;case 6:var i=r.a,c=r.c,h=r.d;return L(zi,b,se(i),c,h);case 7:var i=r.a,c=r.c,h=r.d;return L(zi,b,se(i),c,h);case 8:return q;case 9:return q;default:return q}}default:e.a;var D=e.b,W=e.c,ne=e.d,ie=e.e,ce=L(ad,D,W,ne,ie);if(ce.$){var be=ce.a,_e=be.a,Ee=be.b,Me=ce.b,pe=Me.a,Be=Me.b,E=ce.c,B=E.a,j=E.b,A=ce.d,P=A.a,S=A.b;switch(r.$){case 0:return q;case 1:return q;case 2:return q;case 3:return q;case 4:return q;case 5:return q;case 6:var i=r.a,c=r.c,t=r.d;return Nd(Ux,_e,Ee,pe,Be,B,j,se(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return Ax(_e)(Ee)(pe)(Be)(B)(j)(P)(S)(se(i))(c)(t);case 8:return q;case 9:return q;default:return q}}else{var le=ce.a,te=ce.b,Q=ce.c;switch(r.$){case 0:return q;case 1:return q;case 2:var i=r.a,c=r.c,t=r.d;return pr(Pi,le,te,Q,se(i),c,t);case 3:return q;case 4:var i=r.a,c=r.c,t=r.d;return pr(Pi,le,te,Q,se(i),c,t);case 5:return q;case 6:var i=r.a,c=r.c,t=r.d;return pr(Pi,le,te,Q,se(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return pr(Pi,le,te,Q,se(i),c,t);case 8:return q;case 9:return q;default:return q}}}}),wc=function(e){var r=e;return r.iJ},Sc=function(e){var r=e;return r.iN},Cc=function(e){var r=e;return r.d4},Qx=function(e){var r=e,n=Cc(r.d5),t=Sc(r.d5),i=wc(r.d5),o=Cc(r.d3),c=Sc(r.d3),l=wc(r.d3),$=Cc(r.d2),f=Sc(r.d2),m=wc(r.d2);return m*c*n+f*o*i+$*l*t-$*c*i-f*l*n-m*o*t>0},Kx=function(e){var r=vi(ut(e)),n=Wr(La(e)),t=Wr(Pa(e)),i=Wr(za(e));return{ex:Qx(e),w:i.iJ,x:i.iN,y:i.d4,z:t.iJ,A:t.iN,B:t.d4,C:n.iJ,D:n.iN,E:n.d4,O:r.iJ,P:r.iN,Q:r.d4,cN:1}},Va=v(function(e,r){return{$:5,a:e,b:r}}),id=v(function(e,r){var n=r;switch(n.$){case 0:return q;case 5:var t=n.a,i=n.b,o=a(ps,t,e);return a(Va,o,i);case 1:return a(Va,e,n);case 3:return a(Va,e,n);case 2:return a(Va,e,n);default:return a(Va,e,n)}}),od=v(function(e,r){return a(id,Kx(e),r)}),Uo=function(e){return{$:2,a:e}},ew=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.gi;return{gi:{iJ:n*o.iJ,iN:t*o.iN,d4:i*o.d4},gU:n*r.gU,gV:t*r.gV,gW:i*r.gW}}),rw=kh,nw=Mh,dv=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(f){var m=e.a,d=e.b,b=e.c,h=nw(t),y=h.iJ,_=h.iN,z=h.d4,P=h.fH,S=rw({fH:P,iJ:y*m,iN:_*d,d4:z*b});return Yt(r,n,S,i,o,c,l,$,f)}}}}}}}}}},dl=v(function(e,r){switch(r.$){case 0:return Gs;case 5:var n=r.a,t=r.b;return a(Va,n,a(dl,e,t));case 1:var i=r.a,o=r.b;return a($r,a(ew,e,i),a(dv,e,o));case 3:return r;case 2:var o=r.a;return Uo(a(dv,e,o));default:var c=r.a;return Ps(a(K,dl(e),c))}}),Au=v(function(e,r){var n=r;return a(dl,e,n)}),Vu={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},cd=7683,ld=7682,aw=s(xu,{dp:0,dK:0,d1:15},{bJ:gr,bY:it,b5:gr,b6:cd},{bJ:gr,bY:it,b5:gr,b6:ld}),tw=s(xu,{dp:0,dK:0,d1:15},{bJ:gr,bY:it,b5:gr,b6:ld},{bJ:gr,bY:it,b5:gr,b6:cd}),Ju=v(function(e,r){return e?a(x,tw,r):a(x,aw,r)}),iw={src:`
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
    `,attributes:{normal:"t",position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cP",viewMatrix:"h"}},ow=function(e){if(e.$){var r=e.c;return O(Ie(function(n,t,i,o,c,l,$,f){return N(Je,a(Ju,o,f),iw,Vu,r,{d:i,e:t,f:l,g:n,cP:$,h:c})}))}else return U},po=function(e){var r=ow(e);if(r.$)return q;var n=r.a;return Uo(n)},cw=re(function(e,r,n,t){var i=a(ju,n,Js),o=function(){var m=w(e,r);return m.a?m.b?$i(u([i,po(mv)])):i:m.b?po(mv):q}(),c=Iu(t),l=c.a,$=c.b,f=c.c;return a(od,Lu(t),a(Au,V(l,$,f),o))}),lw=v(function(e,r){return L(cw,!0,!0,e,r)}),pl=function(e){return{$:0,a:e}},ud=v(function(e,r){return{$:0,a:e,b:r}}),uw=function(e){var r=ru(e),n=r.hJ,t=r.gR,i=r.f4;return s(ui,n,t,i)},$w=function(e){return a(ud,0,pl(uw(e)))},vw=function(e){var r=e;return r.n},Dt=function(e){var r=e;return at(r)},fw=v(function(e,r){var n=e.bT,t=e.t;return a(x,{t:Wo(t),bT:wr(n)},r)}),mw=_o(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,$=c.b,f=ka(l.bT),m=Ma(l.bT),d=Ta(l.bT),b=a(Kr,e,d),h=a(er,r,d),y=a(Kr,n,m),_=a(er,t,m),z=a(Kr,i,f),P=a(er,o,f),S=$;e=b,r=h,n=y,t=_,i=z,o=P,c=S;continue e}else return Is({eY:r,eZ:t,e_:o,e$:e,e0:n,e1:i})}),$d=v(function(e,r){var n=ka(e.bT),t=Ma(e.bT),i=Ta(e.bT);return bl(mw,i,i,t,t,n,n,r)}),sw=function(e){var r=s(of,fw,M,Du(e));if(r.b){var n=r.a,t=r.b,i=a(fi,r,ku(e)),o=a($d,n,t);return L(Ds,o,e,i,0)}else return Mu},pv=v(function(e,r){var n=e,t=r,i=n.d3,o=i,c=n.d2,l=c;return{iJ:t.iJ*l.iJ+t.iN*o.iJ,iN:t.iJ*l.iN+t.iN*o.iN,d4:t.iJ*l.d4+t.iN*o.d4}}),ho=function(e){var r=e;return tt(r)},Ct=function(e){var r=e;return r},hl=function(e){return tn(2*He*e)},hv=cs({dy:Pn,d2:Ro,d3:Pu}),vd=function(){var e=72,r=a(vs,e,hl(1)),n=Pr(1),t=Ct(du),i=Ct(pu),o=Pr(1),c=a(We,.5,o),l=s(ur,Nn,Nn,c),$=a(We,-.5,o),f=s(ur,Nn,Nn,$),m=function(h){var y=a(We,h,r),_=Ct(a(pv,hv,cl(y))),z=a(We,Dt(y),n),P=a(We,ho(y),n),S=s(ur,z,P,c),D=s(ur,z,P,$),W=a(ao,e,h+1),ne=a(We,W,r),ie=Ct(a(pv,hv,cl(ne))),ce=a(We,Dt(ne),n),le=a(We,ho(ne),n),te=s(ur,ce,le,$),Q=s(ur,ce,le,c);return u([V({t:i,bT:f},{t:i,bT:te},{t:i,bT:D}),V({t:_,bT:D},{t:ie,bT:te},{t:ie,bT:Q}),V({t:_,bT:D},{t:ie,bT:Q},{t:_,bT:S}),V({t,bT:l},{t,bT:S},{t,bT:Q})])},d=a(K,m,a(En,0,e-1)),b=ml(br(d));return Tu(sw(b))}(),gv=Hs(vd),dw=function(e){var r=e,n=ze(r.d4),t=ze(r.iN),i=ze(r.iJ);if(ge(i,t)<1)if(ge(i,n)<1){var o=pn(r.d4*r.d4+r.iN*r.iN);return{iJ:0,iN:-r.d4/o,d4:r.iN/o}}else{var o=pn(r.iN*r.iN+r.iJ*r.iJ);return{iJ:-r.iN/o,iN:r.iJ/o,d4:0}}else if(ge(t,n)<1){var o=pn(r.d4*r.d4+r.iJ*r.iJ);return{iJ:r.d4/o,iN:0,d4:-r.iJ/o}}else{var o=pn(r.iJ*r.iJ+r.iN*r.iN);return{iJ:-r.iN/o,iN:r.iJ/o,d4:0}}},pw=function(e){var r=dw(e),n=r,t=n,i=e,o=i,c={iJ:o.iN*t.d4-o.d4*t.iN,iN:o.d4*t.iJ-o.iJ*t.d4,d4:o.iJ*t.iN-o.iN*t.iJ};return w(r,c)},hw=function(e){var r=su(e),n=pw(r),t=n.a,i=n.b;return Ca({dy:$s(e),d2:t,d3:i,d5:r})},gw=function(e){var r=e;return r.hi},bw=function(e){var r=e;return r.hH},_w=re(function(e,r,n,t){var i=hw(vw(t)),o=a(ju,n,vd),c=function(){var d=w(e,r);return d.a?d.b?$i(u([o,po(gv)])):o:d.b?po(gv):q}(),l=bw(t),$=l,f=gw(t),m=f;return a(od,i,a(Au,V($,$,m),c))}),yw=v(function(e,r){return L(_w,!0,!0,e,r)}),bv={src:`
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
    `,attributes:{triangleVertex:"dU"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b2",viewMatrix:"h"}},_v={src:`
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
    `,attributes:{triangleVertex:"dU"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b2",viewMatrix:"h"}},zt=function(e){var r=Ot(e),n=r.a,t=r.b,i=r.c,o=Za(n),c=Za(t),l=Za(i);return hn({eG:o.iJ,eH:c.iJ,eI:l.iJ,eJ:0,eK:o.iN,eL:c.iN,eM:l.iN,eN:0,eO:o.d4,eP:c.d4,eQ:l.d4,eR:0,eS:0,eT:0,eU:0,eV:0})},Ti=Vs(u([V({dU:0},{dU:1},{dU:2})])),xw=v(function(e,r){var n=Es(r),t=se(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.cm,q;var i=e.b.a;return a($r,t,Ie(function(S,D,W,ne,ie,ce,le,te){return N(Je,s(Sr,ne,0,te),bv,Eu,Ti,{aX:i,d:W,e:D,f:ce,g:S,b2:zt(r),h:ie})}));case 1:if(e.b.$)return e.a,q;var o=e.b.a,c=e.c;return a($r,t,Ie(function(S,D,W,ne,ie,ce,le,te){return N(Je,s(Sr,ne,0,te),bv,Bu,Ti,{bf:a(Oo,mi(c),o),d:W,e:D,f:ce,g:S,b2:zt(r),h:ie})}));case 2:e.a;var l=e.b,h=e.c,$=a(nd,l,h);if($.$)return q;var f=$.a;return a($r,t,Ie(function(S,D,W,ne,ie,ce,le,te){var Q=le.a,be=le.b;return N(Je,s(Sr,ne,0,te),_v,Zs,Ti,{Z:be,bP:Q.bP,cx:Q.cx,cy:Q.cy,cz:Q.cz,dq:f,d:W,e:D,f:ce,g:S,b2:zt(r),h:ie})}));default:e.a;var m=e.b,d=e.c,b=e.d,h=e.e,y=L(ad,m,d,b,h);if(y.$)return q;var _=y.a,z=y.b,P=y.c;return a($r,t,Ie(function(S,D,W,ne,ie,ce,le,te){var Q=le.a,be=le.b;return N(Je,s(Sr,ne,0,te),_v,rd,Ti,{c0:_,Z:be,bP:Q.bP,cx:Q.cx,cy:Q.cy,cz:Q.cz,dt:P,d:W,e:D,f:ce,dN:z,g:S,b2:zt(r),h:ie})}))}}),ww=function(){var e=u([{bv:a(kr,0,1)},{bv:a(kr,1,1)},{bv:a(kr,2,1)},{bv:a(kr,0,-1)},{bv:a(kr,1,-1)},{bv:a(kr,2,-1)}]),r=u([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return a(fi,e,r)}(),Sw={src:`
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
    `,attributes:{triangleShadowVertex:"bv"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cP",triangleVertexPositions:"b2",viewMatrix:"h"}},yv=function(e){return Uo(Ie(function(r,n,t,i,o,c,l,$){return N(Je,a(Ju,i,$),Sw,Vu,ww,{d:t,e:n,f:c,g:r,cP:l,b2:zt(e),h:o})}))},Cw=re(function(e,r,n,t){var i=a(xw,n,t),o=w(e,r);return o.a?o.b?$i(u([i,yv(t)])):i:o.b?yv(t):q}),zw=v(function(e,r){return L(Cw,!0,!0,e,r)}),Ru=function(e){var r=e;return r},Pw=v(function(e,r){var n=Xn(r),t=Xn(e),i=Zn(r),o=Zn(e),c=qn(r),l=qn(e);return{eY:a(Qe,l,c),eZ:a(Qe,o,i),e_:a(Qe,t,n),e$:a(nr,l,c),e0:a(nr,o,i),e1:a(nr,t,n)}}),Lw=function(e){var r=Ru(e),n=r.a,t=r.b;return a(Pw,n,t)},xv={src:`
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
    `,attributes:{lineSegmentVertex:"eE"},uniforms:{lineSegmentEndPoint:"eC",lineSegmentStartPoint:"eD",modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Tw=v(function(e,r){return{$:1,a:e,b:r}}),Mw=Tw({eg:2,et:0,e3:1}),wv=Mw(u([w({eE:0},{eE:1})])),kw=v(function(e,r){var n=Lw(r),t=se(n),i=Ru(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.cm,q;var l=e.b.a;return a($r,t,Ie(function(f,m,d,b,h,y,_,z){return N(Je,z,xv,Eu,wv,{aX:l,eC:wr(c),eD:wr(o),d,e:m,f:y,g:f,h})}));case 1:if(e.b.$)return q;var l=e.b.a,$=e.c;return a($r,t,Ie(function(m,d,b,h,y,_,z,P){return N(Je,P,xv,Bu,wv,{bf:a(Oo,mi($),l),eC:wr(c),eD:wr(o),d:b,e:d,f:_,g:m,h:y})}));case 2:return q;default:return q}}),Dw=v(function(e,r){return a(kw,e,r)}),Hu=function(e){var r=e;return r.gi},Gu=function(e){var r=e;return r.hH},Sv=v(function(e,r){var n=e,t=r;return n/t}),Nw=cr(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(x,o,i);if(me(r,e))return c;var l=e,$=r-1,f=n,m=t,d=c;e=l,r=$,n=f,t=m,i=d;continue e}}),Cv=v(function(e,r){return e<1?M:N(Nw,0,e,e,r,M)}),Iw=v(function(e,r){var n=e.bT,t=e.t,i=e.S,o=i,c=o.a,l=o.b;return a(x,{t:Wo(t),bT:wr(n),S:a(kr,c,l)},r)}),Ew=function(e){var r=s(of,Iw,M,Du(e));if(r.b){var n=r.a,t=r.b,i=a(fi,r,ku(e)),o=a($d,n,t);return L(Ns,o,e,i,0)}else return Mu},Wu=v(function(e,r){var n=e,t=r,i=at(t);return{iJ:i*at(n),iN:i*tt(n),d4:tt(t)}}),Bw=function(){var e=Pr(1),r=72,n=a(En,0,r-1),t=a(Cv,r,a(Ut,Nn,hl(1))),i=Et(r/2),o=a(En,0,i-1),c=a(Cv,i,a(Ut,Ua(90),Ua(-90))),l=Nu(br(a(K,function(m){return a(K,function(d){return{t:Ct(a(Wu,m,d)),bT:s(ur,a(We,Dt(d)*Dt(m),e),a(We,Dt(d)*ho(m),e),a(We,ho(d),e)),S:w(a(Sv,m,hl(1)),a(Sv,a(Mt,Ua(90),d),Ua(180)))}},c)},t))),$=v(function(m,d){return m*(i+1)+d}),f=br(a(K,function(m){return br(a(K,function(d){var b=a($,m+1,d),h=a($,m,d),y=a($,m+1,d+1),_=a($,m,d+1);return u([V(_,y,b),V(_,b,h)])},o))},n));return Tu(Ew(a(Rs,l,f)))}(),go=72,Mi=2*go,Fw=v(function(e,r){e:for(;;){var n=Mi+1,t=a(ao,Mi,2*e+3),i=a(ao,Mi,2*e+2),o=2*e+1,c=2*e,l=Mi,$=a(x,V(l,c,i),a(x,V(c,t,i),a(x,V(c,o,t),a(x,V(o,n,t),r))));if(e){var f=e-1,m=$;e=f,r=m;continue e}else return $}}),jw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Aw=v(function(e,r){e:for(;;){var n=s(jw,0,2*He,e/go),t={b8:n,cF:0,cL:1},i={b8:n,cF:1,cL:1},o=a(x,t,a(x,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Vw=function(){var e=a(Aw,go-1,u([{b8:0,cF:0,cL:0},{b8:0,cF:1,cL:0}])),r=a(Fw,go-1,M);return a(fi,e,r)}(),Jw={src:`
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
    `,attributes:{angle:"b8",offsetScale:"cF",radiusScale:"cL"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cP",viewMatrix:"h"}},zv=function(e){return Uo(Ie(function(r,n,t,i,o,c,l,$){return N(Je,a(Ju,!0,$),Jw,Vu,Vw,{aX:s(ui,0,0,1),d:t,e:n,f:c,g:r,cP:l,h:o})}))},Rw=function(e){var r=Fs(e);return{ex:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,O:r.iJ,P:r.iN,Q:r.d4,cN:1}},Hw=v(function(e,r){return a(id,Rw(e),r)}),Gw=re(function(e,r,n,t){var i=a(ju,n,Bw),o=function(){var $=w(e,r);return $.a?$.b?$i(u([i,zv()])):i:$.b?zv():q}(),c=Gu(t),l=c;return a(Hw,a($l,Pn,Hu(t)),a(Au,V(l,l,l),o))}),Ww=v(function(e,r){return L(Gw,!0,!0,e,r)}),Ow=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),fd=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Uw=cr(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Yw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(ud,n,t);case 1:var n=e.a,t=e.b,r=e.c;return s(Ow,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return s(fd,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return N(Uw,n,t,i,o,c)}},qw=Yw,md=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return u([a(lw,i,r)]);case 1:var i=e.a,n=e.b;return u([a(zw,i,n)]);case 3:var i=e.a,t=e.b;return u([a(Ww,qw(i),t)]);case 2:var i=e.a,o=e.b;return u([a(yw,i,o)]);case 4:var c=e.a,l=e.b;return u([a(Dw,$w(c),l)]);default:var $=e.a;return a(xa,md,$)}},Zw=function(e){return a(xa,md,e)},Xw=v(function(e,r){return ex({fX:e.fX,ba:B4(e.f0),ge:e.ge,gm:Pr(e.gm),c5:e.c5,bd:w(vv(Re(e.cO.iH)),vv(Re(e.cO.gY))),bh:Zw(r),gK:e.gK,hk:e.hk,ix:e.ix,iG:e.iG})}),sd=function(e){return e},Qw=v(function(e,r){var n=e,t=Wr(r.gC),i=t.iJ,o=t.iN,c=t.d4,l=a(Go,r.cu,r.bc),$=l;return{ca:ka($),gh:n,cq:Ma($),dH:0,cK:Ta($),dV:1,iJ:-i,iN:-o,d4:-c}}),Kw=function(e){return a(Qw,sd(!0),{bc:e.bc,gC:a(Wu,tn(e.b9),tn(e.co)),cu:e.cu})},Ou=v(function(e,r){return{$:0,a:e,b:r}}),zc=v(function(e,r){var n=e,t=r;return ge(t,n)>-1}),Pc=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),e5=Bn({iJ:-1,iN:0,d4:0}),r5=Bn({iJ:0,iN:-1,d4:0}),n5=Er(function(e,r,n,t,i,o){var c=a(zc,n,o)?du:pu,l=a(zc,r,i)?zu:r5,$=a(zc,e,t)?ls:e5,f=V(fr(a(Fn,e,t)),fr(a(Fn,r,i)),fr(a(Fn,n,o))),m=s(ur,a(Pc,e,t),a(Pc,r,i),a(Pc,n,o)),d=Ca({dy:m,d2:$,d3:l,d5:c});return{f$:d,bd:f}}),a5=v(function(e,r){return pr(n5,qn(e),Zn(e),Xn(e),qn(r),Zn(r),Xn(r))}),Uu=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=V(n/2,t/2,i/2),c=o.a,l=o.b,$=o.c;return a(Ou,e,a(a5,s(ll,-c,-l,-$),s(ll,c,l,$)))}),t5=v(function(e,r){return a(Ce,function(n){if(n.$===2){var t=n.a;return t}else return ql},a(ta,e,r.aW))}),i5=v(function(e,r){return a(we,ql,An(a(Or,t5(e),r)))}),o5=v(function(e,r){return a(i5,e,r.gr)}),Da=o5,Lc=function(e){return s(ds,0,1,e<=.04045?e/12.92:a(Hr,(e+.055)/1.055,2.4))},c5=function(e){var r=ru(e),n=r.hJ,t=r.gR,i=r.f4;return s(ui,Lc(n),Lc(t),Lc(i))},Na=function(e){return s(fd,0,pl(c5(e)),pl(0))},Yu=v(function(e,r){return{$:2,a:e,b:r}}),qu=function(e){return{$:5,a:e}},dd=v(function(e,r){return{$:4,a:e,b:r}}),Zu=v(function(e,r){return{$:3,a:e,b:r}}),pd=v(function(e,r){return{$:1,a:e,b:r}}),l5=T(function(e,r,n){return{iJ:e,iN:r,d4:n}}),u5=v(function(e,r){return{f$:a(os,e,Lu(r)),bd:Iu(r)}}),$5=v(function(e,r){var n=r;return a(on,a($t,e,n.dy),n.gC)}),v5=v(function(e,r){var n=r;return{n:a($5,e,n.n),hi:n.hi,hH:n.hH}}),f5=function(e){return e},hd=v(function(e,r){var n=Ru(r),t=n.a,i=n.b;return f5(w(e(t),e(i)))}),m5=v(function(e,r){return a(hd,$t(e),r)}),Xu=v(function(e,r){return{gi:r,hH:fr(e)}}),s5=v(function(e,r){return a(Xu,Gu(r),a($t,e,Hu(r)))}),gd=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return V(e(t),e(i),e(o))}),d5=v(function(e,r){return a(gd,$t(e),r)}),Yo=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=s(l5,n,t,i);switch(r.$){case 0:var m=r.a,c=r.b;return a(Ou,m,a(u5,o,c));case 1:var m=r.a,l=r.b;return a(pd,m,a(d5,o,l));case 3:var m=r.a,$=r.b;return a(Zu,m,a(s5,o,$));case 2:var m=r.a,f=r.b;return a(Yu,m,a(v5,o,f));case 4:var m=r.a,d=r.b;return a(dd,m,a(m5,o,d));default:var b=r.a;return qu(a(K,Yo(V(n,t,i)),b))}}),Vn=function(e){return Yo(V(e,0,0))},ft=function(e){return Yo(V(0,e,0))},Cn=function(e){return Yo(V(0,0,e))},p5=T(function(e,r,n){return{f$:s(is,e,r,Lu(n)),bd:Iu(n)}}),h5=v(function(e,r){var n=a(li,e,r),t=a(Bi,e,r);return function(i){var o=i;return a(on,n(o.dy),t(o.gC))}}),g5=T(function(e,r,n){var t=n;return{n:s(h5,e,r,t.n),hi:t.hi,hH:t.hH}}),b5=T(function(e,r,n){return a(hd,a(li,e,r),n)}),_5=T(function(e,r,n){return a(Xu,Gu(n),s(li,e,r,Hu(n)))}),y5=T(function(e,r,n){return a(gd,a(li,e,r),n)}),qo=T(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(Ou,l,s(p5,e,r,t));case 1:var l=n.a,i=n.b;return a(pd,l,s(y5,e,r,i));case 3:var l=n.a,o=n.b;return a(Zu,l,s(_5,e,r,o));case 2:var l=n.a,c=n.b;return a(Yu,l,s(g5,e,r,c));case 4:var l=n.a,$=n.b;return a(dd,l,s(b5,e,r,$));default:var f=n.a;return qu(a(K,a(qo,e,r),f))}}),x5=a(on,Pn,Ho),bo=v(function(e,r){return s(qo,x5,tn(e),r)}),bd=Qd,_d=function(e){var r=e.a,n=e.b;return w(pn(r*r+n*n),a(bd,n,r))},w5=v(function(e,r){var n=r.h1,t=r.ig;r.h0,r.$8;var i=a(Ue,"base height",e),o=_d(w(t.iJ-n.iJ,t.iN-n.iN)),c=o.a,l=o.b;return a(ft,n.iN,a(Vn,n.iJ,a(bo,l,a(Vn,c/2,a(Cn,-(i/2),a(Uu,Na(a(Da,"base",e)),V(c,a(Ue,"base edge width",e),i)))))))}),yd=function(e){var r=e;return a(xa,function(n){var t=n.a,i=n.b.aK;return a(K,function(o){return{h0:t,h1:a(rn,t,r),$8:o,ig:a(rn,o,r)}},Ah(i))},It(r))},oa=function(e){return qu(e)},S5=v(function(e,r){return oa(a(K,w5(e),yd(Lr(r.a).T)))}),C5=T(function(e,r,n){return{n:a(on,e,r),hi:fr(n.hi),hH:fr(n.hH)}}),Qu=T(function(e,r,n){return a(Yu,e,s(C5,Pn,zu,{hi:Pr(n),hH:Pr(r)}))}),z5=a(on,Pn,Ro),xd=v(function(e,r){return s(qo,z5,tn(e),r)}),P5=v(function(e,r){var n=r.b.bT;return a(Cn,n.d4,a(ft,n.iN,a(Vn,n.iJ,a(Cn,-(a(Ue,"base height",e)/2),a(xd,Wt(90),s(Qu,Na(a(Da,"base",e)),a(Ue,"base vertex radius",e),a(Ue,"base height",e)))))))}),L5=v(function(e,r){return oa(a(K,P5(e),Jo(Lr(r.a).T)))}),T5=v(function(e,r){return a(Cn,-.2,oa(u([a(L5,e,r),a(S5,e,r)])))}),M5=v(function(e,r){var n=r.ac;if(n.$===2){var t=n.a.h0,i=a(rn,t,Lr(r.a).T),o=_d(w(r.u.iJ-i.iJ,r.u.iN-i.iN)),c=o.a,l=o.b;return a(ft,i.iN,a(Vn,i.iJ,a(bo,l,a(Vn,c/2,a(Uu,Na(a(Da,"base",e)),V(c,.3,.3))))))}else return oa(M)}),k5=a(on,Pn,Pu),D5=v(function(e,r){return s(qo,k5,tn(e),r)}),N5=Xd,I5=function(e){var r=e.a,n=e.b,t=e.c,i=pn(a(Hr,r,2)+a(Hr,n,2)+a(Hr,t,2));return{b9:a(bd,n,r),g5:N5(t/i),hH:i}},E5=v(function(e,r){var n=r.h1,t=r.ig,i=a(Ue,"player edge width",e),o=V(t.iJ-n.iJ,t.iN-n.iN,t.d4-n.d4),c=o.a,l=o.b,$=o.c,f=I5(V(c,l,$)),m=f.hH,d=f.b9,b=f.g5;return a(Cn,n.d4,a(ft,n.iN,a(Vn,n.iJ,a(bo,d,a(D5,b-Wt(90),a(Vn,m/2,a(bo,Wt(90),s(Qu,Na(a(Da,"player",e)),.5*i,m))))))))}),B5=v(function(e,r){return oa(a(K,E5(e),yd(Lr(r.a).ae)))}),F5=v(function(e,r){return a(Zu,e,a(Xu,Pr(r),Pn))}),j5=T(function(e,r,n){var t=n.a,i=n.b.bT,o=me(a(rs,e,r),O(t))?Xm:a(Da,"player",e);return a(Cn,i.d4,a(ft,i.iN,a(Vn,i.iJ,a(F5,Na(o),a(Ue,"player vertex radius",e)))))}),A5=v(function(e,r){return oa(a(K,a(j5,e,r),Jo(Lr(r.a).ae)))}),V5=v(function(e,r){return oa(u([a(A5,e,r),a(B5,e,r)]))}),J5=v(function(e,r){return a(Ce,function(n){if(n.$===3){var t=n.a;return t}else return!1},a(ta,e,r.aW))}),R5=v(function(e,r){return a(we,!1,An(a(Or,J5(e),r)))}),H5=v(function(e,r){return a(R5,e,r.gr)}),G5=H5,W5=v(function(e,r){var n=V(a(Da,"pointer color",e),-a(Ue,"base height",e)+.01,a(Ue,"pointer reach",e)),t=n.a,i=n.b,o=n.c;return a(G5,"pointer view on/off",e)?a(Cn,r.u.d4,a(ft,r.u.iN,a(Vn,r.u.iJ,a(Cn,i,a(xd,Wt(90),s(Qu,Na(t),o,.02)))))):oa(M)}),O5=function(e){return e},U5=function(e){return O5(1.2*a(Hr,2,e))},Y5=function(e){return a(Cn,-a(Ue,"base height",e),a(Cn,-.5,a(Uu,Na(a(Da,"game background",e)),V(100,100,1))))},Tc=bu({iJ:.37208,iN:.37529}),q5=v(function(e,r){return{$:2,a:e,b:r}}),wd=function(e){return{$:0,a:e}},ki=function(e){var r=e;return r},Z5=function(e){var r=e;return r.gh},X5=wd(St.a),Q5=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?w(a(x,t,o),c):w(o,a(x,t,c))});return s(ir,n,w(M,M),r)}),K5=function(e){var r=e;return hn({eG:r.iJ,eH:r.cK,eI:0,eJ:0,eK:r.iN,eL:r.cq,eM:0,eN:0,eO:r.d4,eP:r.ca,eQ:0,eR:0,eS:r.dV,eT:r.dH,eU:0,eV:0})},eS=Ie(function(e,r,n,t,i,o,c,l){var $=a(Q5,Z5,u([ki(e),ki(r),ki(n),ki(t)])),f=$.a,m=$.b;if(f.b){var d=Y(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,h=d.b,y=h.a,_=h.b,z=_.a,P=_.b,S=P.a;return a(q5,a(K,K5,f),{bP:a(Fr,b,y),cx:a(Fr,z,S),cy:a(Fr,i,o),cz:a(Fr,c,l)})}else return X5}else return wd({bP:a(Fr,e,r),cx:a(Fr,n,t),cy:a(Fr,i,o),cz:a(Fr,c,l)})}),rS=re(function(e,r,n,t){return Yt(eS,e,r,n,t,Tr,Tr,Tr,Tr)}),nS={$:5},aS=nS,tS=bu({iJ:.44757,iN:.40745}),iS=function(e){return e},oS=L(Sa,114/255,159/255,207/255,1),Pv=function(e){return e},Mc=function(e){return e},cS={$:1},lS=cS,uS=v(function(e,r){var n=e,t=vi(r.bT),i=t.iJ,o=t.iN,c=t.d4,l=a(Go,r.cu,r.bc),$=l;return{ca:ka($),gh:n,cq:Ma($),dH:0,cK:Ta($),dV:2,iJ:i,iN:o,d4:c}}),Lv=function(e){return a(uS,sd(!0),{bc:e.bc,cu:e.cu,bT:ns(e.bT)})},$S=v(function(e,r){var n=e,t=r;return ge(t,n)>0}),Tv=function(e){var r=e;return r},vS=function(e){e:for(;;){if(me(e.ev,Nn)&&me(e.ew,Nn))return Tr;if(a($S,fr(e.ev),fr(e.ew))){var r={bc:e.bc,ev:e.ew,ew:e.ev,fz:mo(e.fz)};e=r;continue e}else{var n=ze(Tv(e.ew)/He),t=ze(Tv(e.ev)/He),i=Wr(e.fz),o=i.iJ,c=i.iN,l=i.d4,$=a(Go,js(1),e.bc),f=$;return{ca:t*ka(f),gh:!1,cq:t*Ma(f),dH:n/t,cK:t*Ta(f),dV:3,iJ:o,iN:c,d4:l}}}},fS=function(e){return vS({bc:e.bc,ev:e.ev,ew:e.ew,fz:a(Wu,tn(e.b9),tn(e.co))})},mS=v(function(e,r){var n=Kw({b9:a(Ue,"azimuth for third light",e),bc:E4(iS(2e3)),co:a(Ue,"elevation for third light",e),cu:Mc(120)}),t=Lv({bc:Tc,cu:Pv(12e3),bT:{iJ:2,iN:3,d4:4}}),i=fS({b9:a(Ue,"azimuth for fourth light",e),bc:Tc,co:a(Ue,"elevation for fourth light",e),ev:Mc(20),ew:Mc(10)}),o=Lv({bc:tS,cu:Pv(12e3),bT:{iJ:-2,iN:4,d4:4}});return a(Xw,{fX:lS,f0:oS,ge:us(e),gm:.1,c5:e.c5,gK:U5(6),hk:L(rS,o,t,n,i),cO:e.cO,ix:aS,iG:Tc},u([a(T5,e,r),a(V5,e,r),a(M5,e,r),Y5(e),a(W5,e,r)]))}),Sd=a($n,Yl,p.il),Cd=function(e){return a(Pe,u([ee(oe),a(ni,0,10),Sd,an(16)]),vr(e))},sS={$:9},kc=v(function(e,r){return L(Ze,Ga,Rr,a(x,ai(sS),a(x,ee(oe),a(x,or(5),e))),je(r))}),dS=5,pS=v(function(e,r){return{$:4,a:e,b:r}}),hS=v(function(e,r){return a(pS,e,r)}),gS=v(function(e,r){return{$:3,a:e,b:r}}),bS=v(function(e,r){return a(gS,e,r)}),zd=v(function(e,r){return L(Ze,dS,Rr,a(x,ee(a(hS,750,a(bS,500,oe))),e),je(r))}),_S=v(function(e,r){return a(zd,M,u([Cd("Editing the selected level"),a(kc,M,u([vr("- Hold shift + alt & Press mouse to add vertex")])),a(kc,M,u([vr("- To move vertices drag them with mouse")])),a(kc,M,u([vr("- Hold shift and drag with mouse to draw an edge")]))]))}),yS={$:6},xS={$:7},Qn=v(function(e,r){return a($u,u([Ur(ei),a(ni,10,6),zr(Tt),nn(8)]),{de:vr(e),hv:O(r)})}),wS=function(e){return a(Pe,u([ee(oe),ye(ke(100)),en(10),zr(ei),oi(u([ci])),ri,Nr(a(Ke,"user-select","text")),nn(10)]),vr(e.N.db))},SS=v(function(e,r){return a(ar,u([or(10),ee(oe)]),u([a(Qn,"Export Levels",xS),wS(r)]))}),CS={$:8},zS=function(e){return{$:9,a:e}},PS=function(e){return{$:0,a:e}},LS={$:1},TS=a(ia,Le,no("autocomplete")),MS=function(e){var r=v(function(i,o){if(i.$===4&&i.b.$===5){var c=i.b;c.b;var l=c.c;return o.$===1?O(l):o}else return o}),n=s(ir,r,U,e);if(n.$===1)return Vr;var t=n.a;return Lm(Ra(t/2))},Pd=a($n,gm,p.gl),kS=s(On,186/255,189/255,182/255),DS=a(ni,12,12),NS=u([DS,nn(3),Sn(kS),zr(Ei),ti(1),or(5),ee(oe),ye(_r)]),IS=function(e){if(e.$===8){var r=e.a;return O(r)}else return U},ES=function(e){e:for(;;)switch(e.$){case 1:return!1;case 0:return!0;case 2:return!0;case 3:var n=e.b,r=n;e=r;continue e;default:var n=e.b;return!0}},BS=function(e){if(e.$)return!0;var r=e.a;switch(r){case 0:return!1;case 1:return!1;case 2:return!0;default:return!0}},FS=function(e){return{cc:-e.cc,hh:-e.hh,hM:-e.hM,cT:-e.cT}},Mv=function(e){e:for(;;)switch(e.$){case 2:return!0;case 1:return!1;case 0:return!1;case 3:var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},jS=function(e){e:for(;;)switch(e.$){case 1:return!1;case 0:return!0;case 2:return!1;case 3:var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},AS=re(function(e,r,n,t){return"pad-"+(Ne(e)+("-"+(Ne(r)+("-"+(Ne(n)+("-"+Ne(t)))))))}),VS=re(function(e,r,n,t){switch(n.$){case 9:return F(t,{c:a(x,n,t.c)});case 7:var i=n.a;return Mv(i)?F(t,{m:a(x,n,t.m),I:a(x,n,t.I),c:a(x,n,t.c)}):r?F(t,{m:a(x,n,t.m)}):F(t,{c:a(x,n,t.c)});case 8:var o=n.a;return r?Mv(o)?F(t,{m:a(x,n,t.m),c:a(x,n,t.c)}):jS(o)?F(t,{c:a(x,n,t.c)}):F(t,{c:a(x,n,t.c)}):F(t,{m:a(x,n,t.m),c:a(x,n,t.c)});case 6:return F(t,{m:a(x,n,t.m)});case 5:return F(t,{m:a(x,n,t.m)});case 4:switch(n.b.$){case 5:return n.b,F(t,{m:a(x,n,t.m),I:a(x,n,t.I),c:a(x,n,t.c),by:a(x,n,t.by)});case 7:n.a;var c=n.b;c.a;var l=c.b,$=c.c,f=c.d,m=c.e;if(e)return F(t,{X:a(x,n,t.X),c:a(x,n,t.c)});var d=l-a(Kr,l,f),b=Nr(a(Ke,"line-height","calc(1.0em + "+(fe(2*a(Kr,l,f))+"px)"))),h=Nr(a(Ke,"height","calc(1.0em + "+(fe(2*a(Kr,l,f))+"px)"))),y=f-a(Kr,l,f),_=a(Te,rt,N(et,L(AS,d,$,y,m),d,$,y,m));return F(t,{X:a(x,n,t.X),I:a(x,h,a(x,b,t.I)),c:a(x,_,t.c)});case 6:return n.b,F(t,{X:a(x,n,t.X),c:a(x,n,t.c)});case 10:return F(t,{X:a(x,n,t.X),c:a(x,n,t.c)});case 2:return F(t,{m:a(x,n,t.m)});case 1:return n.b,F(t,{m:a(x,n,t.m)});default:return n.a,n.b,F(t,{c:a(x,n,t.c)})}case 0:return t;case 1:return n.a,F(t,{I:a(x,n,t.I)});case 2:return F(t,{I:a(x,n,t.I)});case 3:return F(t,{c:a(x,n,t.c)});default:return F(t,{I:a(x,n,t.I)})}}),JS=T(function(e,r,n){return function(t){return{X:Ve(t.X),m:Ve(t.m),I:Ve(t.I),c:Ve(t.c),by:Ve(t.by)}}(s(Ae,a(VS,e,r),{X:M,m:M,I:M,c:M,by:M},n))}),RS=function(e){var r=e.cT,n=e.hM,t=e.cc,i=e.hh;return k(r)+("px "+(k(n)+("px "+(k(t)+("px "+(k(i)+"px"))))))},HS=function(e){var r=function(n){return 1-n}(a(Kr,1,a(er,0,e)));return a(Te,nl,a(rl,"transparency-"+Ne(r),r))},GS=s(On,136/255,138/255,133/255),kv=T(function(e,r,n){var t=e.a,i=e.b;return a(Pe,Y(r,Y(u([Ur(GS),qe(p.e5+(" "+p.hC)),Pd,Sn(L(el,0,0,0,0)),zr(L(el,0,0,0,0)),ye(oe),ee(oe),HS(n?1:0)]),t)),i)}),WS=zn("span"),OS=Vm("spellcheck"),US=a(ia,Le,OS),YS=a(ia,Le,lu),qS=T(function(e,r,n){var t=Y(NS,r),i=s(JS,me(e.dV,LS),BS(n.de),t),o=function(){var m=e.dV;return m.$?a(we,!1,a(Ce,ES,An(Ve(a(Or,IS,t))))):(m.a,!1)}(),c=function(m){if(m.$===4&&m.b.$===7){m.a;var d=m.b;d.a;var b=d.b,h=d.c,y=d.d,_=d.e;return O({cc:a(er,0,Ra(y-3)),hh:a(er,0,Ra(_-3)),hM:a(er,0,Ra(h-3)),cT:a(er,0,Ra(b-3))})}else return U},l=a(we,{cc:0,hh:0,hM:0,cT:0},An(Ve(a(Or,c,t)))),$=L(Ze,mr,function(){var m=e.dV;return m.$?sn("textarea"):(m.a,sn("input"))}(),Y(function(){var m=e.dV;if(m.$)return u([Pd,ye(oe),qe(p.g8),MS(t),Fm(l),Le(a(Ke,"margin",RS(FS(l)))),Le(a(Ke,"box-sizing","content-box"))]);var d=m.a;return u([Le(cu(d)),qe(p.hc)])}(),Y(u([YS(n.ih),Le(ou(n.e7)),Ql(n.de),US(e.ao),a(we,Vr,a(Ce,TS,e.ag))]),i.I)),je(M)),f=function(){var m=e.dV;return m.$===1?L(Ze,mr,Rr,Y((o?x(ri):Cr)(u([ee(oe),a(ba,al,t)?Vr:qe(p.el),qe(p.hb)])),i.c),je(u([L(Ze,Ga,Rr,a(x,ee(oe),a(x,ye(oe),a(x,Xi($),a(x,qe(p.ha),i.by)))),je(function(){if(n.ih===""){var d=n.hE;if(d.$===1)return u([vr("\xA0")]);var b=d.a;return u([s(kv,b,M,n.ih==="")])}else return u([Ff(a(WS,u([Dr(p.g9)]),u([Do(n.ih+"\xA0")])))])}()))]))):(m.a,L(Ze,mr,Rr,a(x,ee(oe),a(x,a(ba,al,t)?Vr:qe(p.el),br(u([i.c,function(){var d=n.hE;if(d.$===1)return M;var b=d.a;return u([Ao(s(kv,b,i.X,n.ih===""))])}()])))),je(u([$]))))}();return s(Xl,a(x,a($n,xm,p.gw),a(x,Kl(n.de)?Vr:or(5),a(x,Zl,i.m))),n.de,f)}),ZS=qS({ag:U,ao:!1,dV:PS("text")}),XS=function(e){return a(ZS,u([ee(oe),ye(ke(100)),en(10),zr(ei),oi(u([ci])),ri,Nr(a(Ke,"user-select","text")),nn(10)]),{de:jm("Imported Levels"),e7:zS,hE:U,ih:e.N.dc})},QS=v(function(e,r){return a(ar,u([or(10),ee(oe)]),u([a(Qn,"Import Levels",CS),XS(r)]))}),KS={$:3},eC={$:5},rC={$:4},nC=v(function(e,r){return a(un,u([or(10)]),u([a(Qn,"Add level",KS),a(Qn,"Remove current level",rC),a(Qn,"Move level one up",eC)]))}),aC=v(function(e,r){return a(ar,u([or(10)]),u([a(nC,e,r),a(Qn,"Reset player graph",yS),a(SS,e,r),a(QS,e,r)]))}),tC=v(function(e,r){return r.N.da?a(ar,u([ee(oe),ye(oe),or(20)]),u([a(_S,e,r),a(aC,e,r)])):tr}),iC=function(e){return{$:0,a:e}},oC=iu(1),cC=v(function(e,r){return a(Cm,M,{gk:r.N.da,g1:Tm,de:a(oC,M,vr("Editor")),e7:iC})}),lC={$:2},uC={$:1},$C=function(e){var r=e;return r.o},vC=function(e){return yn($C(e))+1},fC=function(e){var r=e;return 1+yn(r.o)+yn(r.H)},mC=v(function(e,r){return a(un,u([or(10)]),u([a(Qn,"<",uC),a(Pe,u([an(22),Sd,Ur(oo)]),vr(ha(u([k(vC(r.a))," / ",k(fC(r.a))])))),a(Qn,">",lC)]))}),sC=v(function(e,r){return a(zd,u([uo]),u([Cd("Debugger")]))}),dC=v(function(e,r){return a(ar,u([ee(oe),ye(oe)]),u([a(ar,u([Ul,Am,en(20),or(20),ee(ke(600)),ye(oe),Ur(Bo),an(13)]),u([a(cC,e,r),a(tC,e,r),a(sC,e,r)])),a(un,u([uo,to,an(30),Fo,en(20)]),u([a(mC,e,r)]))]))}),pC=pr(N_,mS,s4,Q_,U_,dC,N4);const hC={Main:{init:pC(a(ae,function(e){return Ye({hd:e})},a(X,"inputs",a(ae,function(e){return a(ae,function(r){return a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return Ye({gp:c,c5:o,gF:i,bn:t,aw:n,cO:r,iF:e})},a(X,"clock",Ge))},a(X,"devicePixelRatio",Ge))},a(X,"dt",Ge))},a(X,"keyboard",a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function(l){return a(ae,function($){return a(ae,function(f){return a(ae,function(m){return a(ae,function(d){return Ye({cZ:d,gt:m,ef:f,gE:$,hh:l,hG:c,hM:o,cQ:i,fy:t})},a(X,"alt",De))},a(X,"control",De))},a(X,"down",De))},a(X,"downs",wn(Kn)))},a(X,"left",De))},a(X,"pressedKeys",wn(Kn)))},a(X,"right",De))},a(X,"shift",De))},a(X,"up",De))))},a(X,"pointer",a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function(l){return a(ae,function($){return a(ae,function(f){return Ye({ef:f,aG:$,ho:l,hN:c,hO:o,fy:i,iJ:t,iN:n})},a(X,"down",De))},a(X,"isDown",De))},a(X,"move",De))},a(X,"rightDown",De))},a(X,"rightUp",De))},a(X,"up",De))},a(X,"x",Ge))},a(X,"y",Ge))))},a(X,"screen",a(ae,function(r){return a(ae,function(n){return Ye({gY:n,iH:r})},a(X,"height",Ge))},a(X,"width",Ge))))},a(X,"wheel",a(ae,function(e){return a(ae,function(r){return Ye({gx:r,gy:e})},a(X,"deltaX",Ge))},a(X,"deltaY",Ge)))))))(0)}},ue={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},gC=e=>{const r=h=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(h.code),n=h=>["AltLeft","AltRight"].includes(h.code),t=h=>["ShiftLeft","ShiftRight"].includes(h.code),i=h=>h.code=="ArrowLeft",o=h=>h.code=="ArrowRight",c=h=>h.code=="ArrowUp",l=h=>h.code=="ArrowDown",$=h=>h.button==0,f=h=>h.button==2;function m(h){h.keyboard.pressedKeys=[],h.keyboard.control=!1,h.keyboard.alt=!1,h.keyboard.shift=!1,h.keyboard.left=!1,h.keyboard.right=!1,h.keyboard.up=!1,h.keyboard.down=!1,h.pointer.isDown=!1}function d(h){h.keyboard.downs=[],h.pointer.down=!1,h.pointer.move=!1,h.pointer.up=!1,h.pointer.rightDown=!1,h.pointer.rightUp=!1,h.wheel.deltaX=0,h.wheel.deltaY=0}window.addEventListener("keydown",h=>{h.repeat||(ue.keyboard.downs.push(h.code),ue.keyboard.pressedKeys.push(h.code),r(h)&&(ue.keyboard.control=!0),n(h)&&(ue.keyboard.alt=!0),t(h)&&(console.log("yo"),ue.keyboard.shift=!0),i(h)&&(ue.keyboard.left=!0),o(h)&&(ue.keyboard.right=!0),c(h)&&(ue.keyboard.up=!0),l(h)&&(console.log("yey"),ue.keyboard.down=!0))}),window.addEventListener("keyup",h=>{ue.keyboard.pressedKeys=ue.keyboard.pressedKeys.filter(y=>y!=h.code),r(h)&&(ue.keyboard.control=!1,ue.keyboard.pressedKeys=[]),n(h)&&(ue.keyboard.alt=!1),t(h)&&(ue.keyboard.shift=!1),i(h)&&(ue.keyboard.left=!1),o(h)&&(ue.keyboard.right=!1),c(h)&&(ue.keyboard.up=!1),l(h)&&(ue.keyboard.down=!1)}),window.addEventListener("pointerdown",h=>{ue.pointer.x=-.5*ue.screen.width+h.pageX,ue.pointer.y=.5*ue.screen.height-h.pageY,$(h)&&(ue.pointer.down=!0,ue.pointer.isDown=!0),f(h)&&(ue.pointer.rightDown=!0)}),window.addEventListener("pointermove",h=>{ue.pointer.move=!0,ue.pointer.x=-.5*ue.screen.width+h.pageX,ue.pointer.y=.5*ue.screen.height-h.pageY}),window.addEventListener("pointerup",h=>{$(h)&&(ue.pointer.up=!0,ue.pointer.isDown=!1),f(h)&&(ue.pointer.rightUp=!0)}),window.addEventListener("pointercancel",h=>{$(h)&&(ue.pointer.up=!0,ue.pointer.isDown=!1),f(h)&&(ue.pointer.rightUp=!0)}),window.addEventListener("wheel",h=>{ue.wheel.deltaX=h.deltaX,ue.wheel.deltaY=h.deltaY}),window.addEventListener("blur",h=>{m(ue)}),window.addEventListener("focus",h=>{m(ue)}),window.addEventListener("visibilitychange",h=>{m(ue)}),window.addEventListener("resize",()=>{ue.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(h){const y=h/1e3,_=y-ue.clock;_<.009||(ue.dt=_,ue.clock=y,e.ports.tick.send(ue),d(ue)),window.requestAnimationFrame(b)}},bC=hC.Main.init({node:document.querySelector("#app div"),flags:{inputs:ue}});gC(bC);
