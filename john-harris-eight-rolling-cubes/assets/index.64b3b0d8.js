const bs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};bs();function In(e,r,n){return n.a=e,n.f=r,n}function v(e){return In(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return In(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ee(e){return In(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Oe(e){return In(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function zr(e){return In(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function Gi(e){return In(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function Pe(e){return In(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function Ec(e){return In(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,t,i,o,c,l,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ar(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function Bc(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function zt(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function _s(e,r,n,t,i,o,c,l,u,f){return e.a===9?e.f(r,n,t,i,o,c,l,u,f):e(r)(n)(t)(i)(o)(c)(l)(u)(f)}var xs=[];function ys(e){return e.length}var ws=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Ss=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,w(n,r)}),Cs=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var zs=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Ls()),r});function Ls(e){return"<internals>"}function Ea(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function de(e,r){for(var n,t=[],i=qo(e,r,0,t);i&&(n=t.pop());i=qo(n.a,n.b,0,t));return i}function qo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ea(5),!1;if(n>100)return t.push(w(e,r)),!0;e.$<0&&(e=pu(e),r=pu(r));for(var i in e)if(!qo(e[i],r[i],n+1,t))return!1;return!0}v(de);v(function(e,r){return!de(e,r)});function he(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=he(e.a,r.a))||(n=he(e.b,r.b))?n:he(e.c,r.c);for(;e.b&&r.b&&!(n=he(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return he(e,r)<0});v(function(e,r){return he(e,r)<1});v(function(e,r){return he(e,r)>0});v(function(e,r){return he(e,r)>=0});var Ps=v(function(e,r){var n=he(e,r);return n<0?iv:n?_0:tv}),Lt=0;function w(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ae(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=en(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=en(e.a,r);return n}var D={$:0};function en(e,r){return{$:1,a:e,b:r}}var Ms=v(en);function $(e){for(var r=D,n=e.length;n--;)r=en(e[n],r);return r}function Oi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ks=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ee(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Oe(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return $(o)});zr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(F(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(Oi(r).sort(function(n,t){return he(e(n),e(t))}))});v(function(e,r){return $(Oi(r).sort(function(n,t){var i=a(e,n,t);return i===tv?0:i===iv?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Ts=v(Math.pow);v(function(e,r){return r%e});var Ds=v(function(e,r){var n=r%e;return e===0?Ea(11):n>0&&e<0||n<0&&e>0?n+e:n}),Fs=Math.PI,As=Math.cos,Is=Math.sin,Es=Math.tan;v(Math.atan2);function Bs(e){return e}function Rs(e){return e===1/0||e===-1/0}var Vs=Math.ceil,js=Math.floor,Ns=Math.round,Ws=Math.sqrt,nu=Math.log,Zs=isNaN;function Hs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Gs=v(function(e,r){return e+r});function Os(e){var r=e.charCodeAt(0);return isNaN(r)?O:J(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}v(function(e,r){return e+r});function Us(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Js(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var qs=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ys=v(function(e,r){return r.split(e)}),Xs=v(function(e,r){return r.join(e)}),Qs=M(function(e,r,n){return n.slice(e,r)});function Ks(e){return $(e.trim().split(/\s+/g))}function ed(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var rd=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),nd=v(function(e,r){return r.indexOf(e)>-1}),ad=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var td=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function T$(e){return e+""}function id(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return O;r=10*r+o-48}return i==t?O:J(n==45?-r:r)}function od(e){if(e.length===0||/[\sxbo]/.test(e))return O;var r=+e;return r===r?J(r):O}function cd(e){return Oi(e).join("")}function ld(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ud(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function $d(e){return{$:0,a:e}}function vd(e){return{$:1,a:e}}function Rc(e){return{$:2,b:e}}var fd=Rc(function(e){return typeof e=="boolean"?Ge(e):Or("a BOOL",e)}),md=Rc(function(e){return typeof e=="number"?Ge(e):Or("a FLOAT",e)}),sd=Rc(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Or("a STRING",e)});function dd(e){return{$:3,b:e}}var pd=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function En(e,r){return{$:9,f:e,g:r}}var gd=v(function(e,r){return{$:10,b:r,h:e}}),hd=v(function(e,r){return En(e,[r])}),bd=M(function(e,r,n){return En(e,[r,n])});ee(function(e,r,n,t){return En(e,[r,n,t])});Oe(function(e,r,n,t,i){return En(e,[r,n,t,i])});zr(function(e,r,n,t,i,o){return En(e,[r,n,t,i,o])});Gi(function(e,r,n,t,i,o,c){return En(e,[r,n,t,i,o,c])});Pe(function(e,r,n,t,i,o,c,l){return En(e,[r,n,t,i,o,c,l])});Ec(function(e,r,n,t,i,o,c,l,u){return En(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Mr(e,n)}catch(t){return tr(a(Xc,"This is not valid JSON! "+t.message,r))}});var D$=v(function(e,r){return Mr(e,r)});function Mr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Or("null",r);case 3:return Ht(r)?au(e.b,r,$):Or("a LIST",r);case 4:return Ht(r)?au(e.b,r,_d):Or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Or("an OBJECT with a field named `"+n+"`",r);var f=Mr(e.b,r[n]);return Br(f)?f:tr(a(gu,n,f.a));case 7:var t=e.e;if(!Ht(r))return Or("an ARRAY",r);if(t>=r.length)return Or("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Mr(e.b,r[t]);return Br(f)?f:tr(a(ov,t,f.a));case 8:if(typeof r!="object"||r===null||Ht(r))return Or("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Mr(e.b,r[o]);if(!Br(f))return tr(a(gu,o,f.a));i=en(w(o,f.a),i)}return Ge(dr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=Mr(l[u],r);if(!Br(f))return f;c=c(f.a)}return Ge(c);case 10:var f=Mr(e.b,r);return Br(f)?Mr(e.h(f.a),r):f;case 11:for(var m=D,d=e.g;d.b;d=d.b){var f=Mr(d.a,r);if(Br(f))return f;m=en(f.a,m)}return tr(x0(dr(m)));case 1:return tr(a(Xc,e.a,r));case 0:return Ge(e.a)}}function au(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Mr(e,r[o]);if(!Br(c))return tr(a(ov,o,c.a));i[o]=c.a}return Ge(n(i))}function Ht(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function _d(e){return a(B0,e.length,function(r){return e[r]})}function Or(e,r){return tr(a(Xc,"Expecting "+e,r))}function ga(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ga(e.b,r.b);case 6:return e.d===r.d&&ga(e.b,r.b);case 7:return e.e===r.e&&ga(e.b,r.b);case 9:return e.f===r.f&&tu(e.g,r.g);case 10:return e.h===r.h&&ga(e.b,r.b);case 11:return tu(e.g,r.g)}}function tu(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!ga(e[t],r[t]))return!1;return!0}var xd=v(function(e,r){return JSON.stringify(r,null,e)+""});function F$(e){return e}function yd(){return[]}function wd(){return{}}var Sd=M(function(e,r,n){return n[e]=r,n});function Cd(e){return v(function(r,n){return n.push(e(r)),n})}function na(e){return{$:0,a:e}}function zd(e){return{$:1,a:e}}function bn(e){return{$:2,b:e,c:null}}var Yo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Ld(e){return{$:5,b:e}}var Pd=0;function Vc(e){var r={$:0,e:Pd++,f:e,g:null,h:[]};return jc(r),r}function A$(e){return bn(function(r){r(na(Vc(e)))})}function I$(e,r){e.h.push(r),jc(e)}var Md=v(function(e,r){return bn(function(n){I$(e,r),n(na(Lt))})}),yo=!1,iu=[];function jc(e){if(iu.push(e),!yo){for(yo=!0;e=iu.shift();)kd(e);yo=!1}}function kd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,jc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ee(function(e,r,n,t){return Nc(r,t,e.gZ,e.$9,e.h0,function(){return function(){}})});function Nc(e,r,n,t,i,o){var c=a(D$,e,r?r.flags:void 0);Br(c)||Ea(2);var l={},u=n(c.a),f=u.a,m=o(b,f),d=Td(l,b);function b(s,x){var _=a(t,s,f);m(f=_.a,x),cu(l,_.b,i(f))}return cu(l,u.b,i(f)),d?{ports:d}:{}}var Xr={};function Td(e,r){var n;for(var t in Xr){var i=Xr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Fd(i,r)}return n}function Dd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Fd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(Yo,l,Ld(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&c?L(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=Vc(a(Yo,l,e.b))}var Ad=v(function(e,r){return bn(function(n){e.g(r),n(na(Lt))})});v(function(e,r){return a(Md,e.h,{$:0,a:r})});function E$(e){return function(r){return{$:1,k:e,l:r}}}function Id(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ou=[],wo=!1;function cu(e,r,n){if(ou.push({p:e,q:r,r:n}),!wo){wo=!0;for(var t;t=ou.shift();)Ed(t.p,t.q,t.r);wo=!1}}function Ed(e,r,n){var t={};bi(!0,r,t,null),bi(!1,n,t,null);for(var i in e)I$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function bi(e,r,n,t){switch(r.$){case 1:var i=r.k,o=Bd(e,i,t,r.l);n[i]=Rd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)bi(e,c.a,n,t);return;case 3:bi(e,r.o,n,{s:r.n,t});return}}function Bd(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Xr[r].e:Xr[r].f;return a(o,i,t)}function Rd(e,r,n){return n=n||{i:D,j:D},e?n.i=en(r,n.i):n.j=en(r,n.j),n}function Vd(e){Xr[e]&&Ea(3)}v(function(e,r){return r});function jd(e,r){return Vd(e),Xr[e]={f:Nd,u:r,a:Wd},E$(e)}var Nd=v(function(e,r){return function(n){return e(r(n))}});function Wd(e,r){var n=D,t=Xr[e].u,i=na(null);Xr[e].b=i,Xr[e].c=M(function(c,l,u){return n=l,i});function o(c){var l=a(D$,t,c);Br(l)||Ea(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var _i,mn=typeof document!="undefined"?document:{};function Wc(e,r){e.appendChild(r)}ee(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(Cn(e,function(){}),i),{}});function Xo(e){return{$:0,a:e}}var B$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:Hc(n),e:i,f:e,b:o}})}),tn=B$(void 0),Zd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:Hc(n),e:i,f:e,b:o}})}),Hd=Zd(void 0);function Gd(e,r,n,t){return{$:3,d:Hc(e),g:r,h:n,i:t}}var Od=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Bn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Bn([e,r],function(){return e(r)})});M(function(e,r,n){return Bn([e,r,n],function(){return a(e,r,n)})});var Ud=ee(function(e,r,n,t){return Bn([e,r,n,t],function(){return h(e,r,n,t)})});Oe(function(e,r,n,t,i){return Bn([e,r,n,t,i],function(){return L(e,r,n,t,i)})});zr(function(e,r,n,t,i,o){return Bn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});Gi(function(e,r,n,t,i,o,c){return Bn([e,r,n,t,i,o,c],function(){return ar(e,r,n,t,i,o,c)})});Pe(function(e,r,n,t,i,o,c,l){return Bn([e,r,n,t,i,o,c,l],function(){return Bc(e,r,n,t,i,o,c,l)})});Ec(function(e,r,n,t,i,o,c,l,u){return Bn([e,r,n,t,i,o,c,l,u],function(){return zt(e,r,n,t,i,o,c,l,u)})});var R$=v(function(e,r){return{$:"a0",n:e,o:r}}),Jd=v(function(e,r){return{$:"a1",n:e,o:r}}),Zc=v(function(e,r){return{$:"a2",n:e,o:r}}),Wr=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function V$(e){return e=="script"?"p":e}function qd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Yd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Xd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function j$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Qd=v(function(e,r){return r.$==="a0"?a(R$,r.n,Kd(e,r.o)):r});function Kd(e,r){var n=rl(r);return{$:r.$,a:n?h(R0,n<3?ep:rp,$r(e),r.a):a(Si,e,r.a)}}var ep=v(function(e,r){return w(e(r.a),r.b)}),rp=v(function(e,r){return{az:e(r.az),dL:r.dL,dA:r.dA}});function Hc(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?lu(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?lu(c,i,o):c[i]=o}return r}function lu(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Cn(e,r){var n=e.$;if(n===5)return Cn(e.k||(e.k=e.m()),r);if(n===0)return mn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=Cn(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Qo(c,r,e.d),c}var c=e.f?mn.createElementNS(e.f,e.c):mn.createElement(e.c);_i&&e.c=="a"&&c.addEventListener("click",_i(c)),Qo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Wc(c,Cn(n===1?l[u]:l[u].b,r));return c}function Qo(e,r,n){for(var t in n){var i=n[t];t==="a1"?np(e,i):t==="a0"?ip(e,r,i):t==="a3"?ap(e,i):t==="a4"?tp(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function np(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function ap(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function tp(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function ip(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=op(r,o),e.addEventListener(i,c,Gc&&{passive:rl(o)<2}),t[i]=c}}var Gc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Gc=!0}}))}catch{}function op(e,r){function n(t){var i=n.q,o=Mr(i.a,t);if(!!Br(o)){for(var c=rl(i),l=o.a,u=c?c<3?l.a:l.az:l,f=c==1?l.b:c==3&&l.dL,m=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dA)&&t.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")u=d(u);else for(var b=d.length;b--;)u=d[b](u);m=m.p}m(u,f)}}return n.q=r,n}function cp(e,r){return e.$==r.$&&ga(e.a,r.a)}function N$(e,r){var n=[];return Rr(e,r,n,0),n}function nr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Rr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=dp(r),o=1;else{nr(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Rr(e.k,r.k,m,0),m.length>0&&nr(n,1,t,m);return;case 4:for(var d=e.j,b=r.j,s=!1,x=e.k;x.$===4;)s=!0,typeof d!="object"?d=[d,x.j]:d.push(x.j),x=x.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&d.length!==b.length){nr(n,0,t,r);return}(s?!lp(d,b):d!==b)&&nr(n,2,t,b),Rr(x,_,n,t+1);return;case 0:e.a!==r.a&&nr(n,3,t,r.a);return;case 1:uu(e,r,n,t,up);return;case 2:uu(e,r,n,t,$p);return;case 3:if(e.h!==r.h){nr(n,0,t,r);return}var C=Oc(e.d,r.d);C&&nr(n,4,t,C);var z=r.i(e.g,r.g);z&&nr(n,5,t,z);return}}}function lp(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function uu(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){nr(n,0,t,r);return}var o=Oc(e.d,r.d);o&&nr(n,4,t,o),i(e,r,n,t)}function Oc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Oc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&cp(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function up(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?nr(n,6,t,{v:l,i:c-l}):c<l&&nr(n,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var m=i[f];Rr(m,o[f],n,++t),t+=m.b||0}}function $p(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,m=u.length,d=0,b=0,s=t;d<f&&b<m;){var x=l[d],_=u[b],C=x.a,z=_.a,y=x.b,k=_.b,H=void 0,Q=void 0;if(C===z){s++,Rr(y,k,i,s),s+=y.b||0,d++,b++;continue}var ae=l[d+1],te=u[b+1];if(ae){var ie=ae.a,re=ae.b;Q=z===ie}if(te){var q=te.a,pe=te.b;H=C===q}if(H&&Q){s++,Rr(y,pe,i,s),qa(o,i,C,k,b,c),s+=y.b||0,s++,Ya(o,i,C,re,s),s+=re.b||0,d+=2,b+=2;continue}if(H){s++,qa(o,i,z,k,b,c),Rr(y,pe,i,s),s+=y.b||0,d+=1,b+=2;continue}if(Q){s++,Ya(o,i,C,y,s),s+=y.b||0,s++,Rr(re,k,i,s),s+=re.b||0,d+=2,b+=1;continue}if(ae&&ie===q){s++,Ya(o,i,C,y,s),qa(o,i,z,k,b,c),s+=y.b||0,s++,Rr(re,pe,i,s),s+=re.b||0,d+=2,b+=2;continue}break}for(;d<f;){s++;var x=l[d],y=x.b;Ya(o,i,x.a,y,s),s+=y.b||0,d++}for(;b<m;){var ge=ge||[],_=u[b];qa(o,i,_.a,_.b,void 0,ge),b++}(i.length>0||c.length>0||ge)&&nr(n,8,t,{w:i,x:c,y:ge})}var W$="_elmW6BL";function qa(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Rr(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}qa(e,r,n+W$,t,i,o)}function Ya(e,r,n,t,i){var o=e[n];if(!o){var c=nr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Rr(t,o.z,l,i),nr(r,9,i,{w:l,A:o});return}Ya(e,r,n+W$,t,i)}function Z$(e,r,n,t){Xa(e,r,n,0,0,r.b,t)}function Xa(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var f=l.$;if(f===1)Z$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&Xa(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var m=d.w;m.length>0&&Xa(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Xa(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var x=r.e,_=e.childNodes,C=0;C<x.length;C++){i++;var z=b===1?x[C]:x[C].b,y=i+(z.b||0);if(i<=u&&u<=y&&(t=Xa(_[C],z,n,t,i,y,c),!(l=n[t])||(u=l.r)>o))return t;i=y}return t}function H$(e,r,n,t){return n.length===0?e:(Z$(e,r,n,t),xi(e,n))}function xi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=vp(i,t);i===e&&(e=o)}return e}function vp(e,r){switch(r.$){case 0:return fp(e,r.s,r.u);case 4:return Qo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return xi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(Cn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=xi(e,o.w),e;case 8:return mp(e,r);case 5:return r.s(e);default:Ea(10)}}function fp(e,r,n){var t=e.parentNode,i=Cn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function mp(e,r){var n=r.s,t=sp(n.y,r);e=xi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:Cn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&Wc(e,t),e}function sp(e,r){if(!!e){for(var n=mn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Wc(n,o.c===2?o.s:Cn(o.z,r.u))}return n}}function Uc(e){if(e.nodeType===3)return Xo(e.textContent);if(e.nodeType!==1)return Xo("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=en(a(Wr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=en(Uc(f[t]),u);return h(tn,l,r,u)}function dp(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var pp=ee(function(e,r,n,t){return Nc(r,t,e.gZ,e.$9,e.h0,function(i,o){var c=e.ip,l=t.node,u=Uc(l);return G$(o,function(f){var m=c(f),d=N$(u,m);l=H$(l,u,d,i),u=m})})});ee(function(e,r,n,t){return Nc(r,t,e.gZ,e.$9,e.h0,function(i,o){var c=e.dI&&e.dI(i),l=e.ip,u=mn.title,f=mn.body,m=Uc(f);return G$(o,function(d){_i=c;var b=l(d),s=tn("body")(D)(b.f$),x=N$(m,s);f=H$(f,m,x,i),m=s,_i=0,u!==b.ii&&(mn.title=u=b.ii)})})});var yi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function G$(e,r){r(e);var n=0;function t(){n=n===1?0:(yi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&yi(t),n=2)}}v(function(e,r){return a(al,Mt,bn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(al,Mt,bn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(al,Mt,bn(function(){history.replaceState({},"",r),e()}))});var gp={addEventListener:function(){},removeEventListener:function(){}},hp=typeof window!="undefined"?window:gp;M(function(e,r,n){return A$(bn(function(t){function i(o){Vc(n(o))}return e.addEventListener(r,i,Gc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Mr(e,r);return Br(n)?J(n.a):O});function O$(e,r){return bn(function(n){yi(function(){var t=document.getElementById(e);n(t?na(r(t)):zd(V0(e)))})})}function bp(e){return bn(function(r){yi(function(){r(na(e()))})})}v(function(e,r){return O$(r,function(n){return n[e](),Lt})});v(function(e,r){return bp(function(){return hp.scroll(e,r),Lt})});M(function(e,r,n){return O$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,Lt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var _p=v(function(e,r){var n="g";e.hh&&(n+="m"),e.f9&&(n+="i");try{return J(new RegExp(r,n))}catch{return O}});v(function(e,r){return r.match(e)!==null});var xp=M(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var d=u[f];m[--f]=d?J(d):O}t.push(L(Df,u[0],u.index,i,$(m))),l=r.lastIndex}return r.lastIndex=c,$(t)});ee(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?J(f):O}return n(L(Df,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var yp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/wp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function wp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Jc=new Float64Array(3),$u=new Float64Array(3),vu=new Float64Array(3),Sp=M(function(e,r,n){return new Float64Array([e,r,n])}),Cp=function(e){return e[0]},zp=function(e){return e[1]},Lp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Pp=function(e){return new Float64Array([e.it,e.ix,e.dZ])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function U$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(U$);function J$(e,r,n){return n===void 0&&(n=new Float64Array(3)),wi(U$(e,r,n),n)}v(J$);function q$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function wi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/q$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Mp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Qa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Qa);function Ko(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Ko);v(function(e,r){var n,t=Jc,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Qa(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Qa(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Qa(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Qa(r,t)+e[14])/n,i});var kp=ee(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Tp=function(e){return{it:e[0],ix:e[1],dZ:e[2],fA:e[3]}},Dp=function(e){return new Float64Array([e.it,e.ix,e.dZ,e.fA])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Fp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Fp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Ap=new Float64Array(16),Ip=new Float64Array(16),Ep=function(e){var r=new Float64Array(16);return r[0]=e.ez,r[1]=e.eD,r[2]=e.eH,r[3]=e.eL,r[4]=e.eA,r[5]=e.eE,r[6]=e.eI,r[7]=e.eM,r[8]=e.eB,r[9]=e.eF,r[10]=e.eJ,r[11]=e.eN,r[12]=e.eC,r[13]=e.eG,r[14]=e.eK,r[15]=e.eO,r},Bp=function(e){return{ez:e[0],eD:e[1],eH:e[2],eL:e[3],eA:e[4],eE:e[5],eI:e[6],eM:e[7],eB:e[8],eF:e[9],eJ:e[10],eN:e[11],eC:e[12],eG:e[13],eK:e[14],eO:e[15]}};function Y$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}zr(Y$);ee(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return Y$(c,l,o,i,n,t)});function X$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}zr(X$);ee(function(e,r,n,t){return X$(e,r,n,t,-1,1)});function Q$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],m=e[7],d=e[8],b=e[9],s=e[10],x=e[11],_=e[12],C=e[13],z=e[14],y=e[15],k=r[0],H=r[1],Q=r[2],ae=r[3],te=r[4],ie=r[5],re=r[6],q=r[7],pe=r[8],ge=r[9],Me=r[10],Se=r[11],me=r[12],ke=r[13],I=r[14],E=r[15];return n[0]=t*k+l*H+d*Q+_*ae,n[1]=i*k+u*H+b*Q+C*ae,n[2]=o*k+f*H+s*Q+z*ae,n[3]=c*k+m*H+x*Q+y*ae,n[4]=t*te+l*ie+d*re+_*q,n[5]=i*te+u*ie+b*re+C*q,n[6]=o*te+f*ie+s*re+z*q,n[7]=c*te+m*ie+x*re+y*q,n[8]=t*pe+l*ge+d*Me+_*Se,n[9]=i*pe+u*ge+b*Me+C*Se,n[10]=o*pe+f*ge+s*Me+z*Se,n[11]=c*pe+m*ge+x*Me+y*Se,n[12]=t*me+l*ke+d*I+_*E,n[13]=i*me+u*ke+b*I+C*E,n[14]=o*me+f*ke+s*I+z*E,n[15]=c*me+m*ke+x*I+y*E,n}v(Q$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],m=e[9],d=e[10],b=e[12],s=e[13],x=e[14],_=r[0],C=r[1],z=r[2],y=r[4],k=r[5],H=r[6],Q=r[8],ae=r[9],te=r[10],ie=r[12],re=r[13],q=r[14];return n[0]=t*_+c*C+f*z,n[1]=i*_+l*C+m*z,n[2]=o*_+u*C+d*z,n[3]=0,n[4]=t*y+c*k+f*H,n[5]=i*y+l*k+m*H,n[6]=o*y+u*k+d*H,n[7]=0,n[8]=t*Q+c*ae+f*te,n[9]=i*Q+l*ae+m*te,n[10]=o*Q+u*ae+d*te,n[11]=0,n[12]=t*ie+c*re+f*q+b,n[13]=i*ie+l*re+m*q+s,n[14]=o*ie+u*re+d*q+x,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=wi(r,Jc);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/q$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),d=o*m,b=c*m,s=l*m,x=o*c*f,_=o*l*f,C=c*l*f,z=o*o*f+u,y=x+s,k=_-b,H=x-s,Q=c*c*f+u,ae=C+d,te=_+b,ie=C-d,re=l*l*f+u,q=n[0],pe=n[1],ge=n[2],Me=n[3],Se=n[4],me=n[5],ke=n[6],I=n[7],E=n[8],R=n[9],V=n[10],j=n[11],N=n[12],W=n[13],Z=n[14],Ze=n[15];return t[0]=q*z+Se*y+E*k,t[1]=pe*z+me*y+R*k,t[2]=ge*z+ke*y+V*k,t[3]=Me*z+I*y+j*k,t[4]=q*H+Se*Q+E*ae,t[5]=pe*H+me*Q+R*ae,t[6]=ge*H+ke*Q+V*ae,t[7]=Me*H+I*Q+j*ae,t[8]=q*te+Se*ie+E*re,t[9]=pe*te+me*ie+R*re,t[10]=ge*te+ke*ie+V*re,t[11]=Me*te+I*ie+j*re,t[12]=N,t[13]=W,t[14]=Z,t[15]=Ze,t});function Rp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(Rp);ee(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Vp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(Vp);ee(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],m=t[5],d=t[6],b=t[7],s=t[8],x=t[9],_=t[10],C=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=s,i[9]=x,i[10]=_,i[11]=C,i[12]=o*e+f*r+s*n+t[12],i[13]=c*e+m*r+x*n+t[13],i[14]=l*e+d*r+_*n+t[14],i[15]=u*e+b*r+C*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],m=r[4],d=r[5],b=r[6],s=r[7],x=r[8],_=r[9],C=r[10],z=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=s,n[8]=x,n[9]=_,n[10]=C,n[11]=z,n[12]=c*t+m*i+x*o+r[12],n[13]=l*t+d*i+_*o+r[13],n[14]=u*t+b*i+C*o+r[14],n[15]=f*t+s*i+z*o+r[15],n});M(function(e,r,n){var t=J$(e,r,Jc),i=wi(Ko(n,t,$u),$u),o=wi(Ko(t,i,vu),vu),c=Ap,l=Ip;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Q$(c,l)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var fu=0;function vt(e,r){for(;r.b;r=r.b)e(r.a)}function qc(e){for(var r=0;e.b;e=e.b)r++;return r}var jp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Np=Oe(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Wp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Zp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Hp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Gp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Op=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Up=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Jp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),qp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Yp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Xp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Qp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Kp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},K$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},ev=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},e0=function(e){e.gl.disable(e.gl.CULL_FACE)},r0=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},n0=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},a0=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},mu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],t0=[Xp,Qp,Kp,K$,ev,e0,r0,n0,a0];function su(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function i0(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function rv(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function o0(e,r,n,t){for(var i=n.a.d9,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(s,x,_,C,z){var y;if(i===1)for(y=0;y<x;y++)s[_++]=x===1?C[z]:C[z][y];else o.forEach(function(k){for(y=0;y<x;y++)s[_++]=x===1?C[k][z]:C[k][z][y]})}var u=rv(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,d=new u.type(qc(n.b)*m);vt(function(s){l(d,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function c0(e,r){if(r.a.em>0){var n=e.createBuffer(),t=l0(r.c,r.a.em);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d9*qc(r.b),indexBuffer:null,buffers:{}}}function l0(e,r){var n=new Uint32Array(qc(e)*r),t=0,i;return vt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function du(e,r){return e+"#"+r}var nv=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),K$(n),ev(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=du(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=fu++,f||(f=su(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=fu++,m||(m=su(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=i0(t,f,m);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=u0(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(d,u),x=t.getAttribLocation(d,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(x)}c=du(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),$0(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=c0(t,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],x=l.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=o0(t,s,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var C=rv(t,s.type);if(C.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,C.size,C.baseType,!1,0,0);else for(var z=C.size*4,y=z*C.arraySize,k=0;k<C.arraySize;k++)t.enableVertexAttribArray(x+k),t.vertexAttribPointer(x+k,C.size,C.baseType,!1,y,z*k)}for(n.toggle=!n.toggle,vt(H2(n),o.a),u=0;u<mu.length;u++){var H=n[mu[u]];H.toggle!==n.toggle&&H.enabled&&(t0[u](n),H.enabled=!1,H.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eX,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eX,0,_.numIndices)}}return vt(i,e.g),r});function u0(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(s,x){var _=x.name,C=e.getUniformLocation(s,_);switch(x.type){case e.INT:return function(y){o[_]!==y&&(e.uniform1i(C,y),o[_]=y)};case e.FLOAT:return function(y){o[_]!==y&&(e.uniform1f(C,y),o[_]=y)};case e.FLOAT_VEC2:return function(y){o[_]!==y&&(e.uniform2f(C,y[0],y[1]),o[_]=y)};case e.FLOAT_VEC3:return function(y){o[_]!==y&&(e.uniform3f(C,y[0],y[1],y[2]),o[_]=y)};case e.FLOAT_VEC4:return function(y){o[_]!==y&&(e.uniform4f(C,y[0],y[1],y[2],y[3]),o[_]=y)};case e.FLOAT_MAT4:return function(y){o[_]!==y&&(e.uniformMatrix4fv(C,!1,new Float32Array(y)),o[_]=y)};case e.SAMPLER_2D:var z=c++;return function(y){e.activeTexture(e.TEXTURE0+z);var k=l.textures.get(y);k||(k=y.gl(e),l.textures.set(y,k)),e.bindTexture(e.TEXTURE_2D,k),o[_]!==y&&(e.uniform1i(C,z),o[_]=y)};case e.BOOL:return function(y){o[_]!==y&&(e.uniform1i(C,y),o[_]=y)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=u(i,b)}return f}function $0(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var v0=M(function(e,r,n){return Gd(r,{g:n,f:{},h:e},h0,b0)}),f0=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),m0=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),s0=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),d0=v(function(e,r){e.contextAttributes.antialias=!0}),p0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),g0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function h0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};vt(function(i){return a(Z2,r,i)},e.h);var n=mn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),jp(function(){return a(nv,e,n)})):(n=mn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function b0(e,r){return r.f=e.f,nv(r)}var P=Ms,Gt=zs,av=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(Gt,e,l,f)}else{var u=c.a;return h(Gt,o,l,u)}});return h(Gt,o,h(Gt,e,r,i),t)}),Yc=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,t,i,h(Yc,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),pu=function(e){return h(Yc,M(function(r,n,t){return a(P,w(r,n),t)}),D,e)},tv=1,_0=2,iv=0,tr=function(e){return{$:1,a:e}},Xc=v(function(e,r){return{$:3,a:e,b:r}}),gu=v(function(e,r){return{$:0,a:e,b:r}}),ov=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},x0=function(e){return{$:2,a:e}},J=function(e){return{$:0,a:e}},O={$:1},y0=rd,w0=xd,T=T$,le=v(function(e,r){return a(Xs,e,Oi(r))}),Qc=v(function(e,r){return $(a(Ys,e,r))}),cv=function(e){return a(le,`
    `,a(Qc,`
`,e))},We=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),ea=function(e){return h(We,v(function(r,n){return n+1}),0,e)},S0=ks,C0=M(function(e,r,n){e:for(;;)if(he(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),sn=v(function(e,r){return h(C0,e,r,D)}),lv=v(function(e,r){return h(S0,e,a(sn,0,ea(r)-1),r)}),Qr=ld,uv=function(e){var r=Qr(e);return 97<=r&&r<=122},$v=function(e){var r=Qr(e);return r<=90&&65<=r},z0=function(e){return uv(e)||$v(e)},L0=function(e){var r=Qr(e);return r<=57&&48<=r},P0=function(e){return uv(e)||$v(e)||L0(e)},dr=function(e){return h(We,P,D,e)},Ba=Os,M0=v(function(e,r){return`

(`+(T(e+1)+(") "+cv(k0(r))))}),k0=function(e){return a(T0,e,D)},T0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=Ba(n);if(_.$===1)return!1;var C=_.a,z=C.a,y=C.b;return z0(z)&&a(y0,P0,y)}(),i=t?"."+n:"['"+(n+"']"),u=c,f=a(P,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(T(o)+"]"),u=c,f=a(P,l,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(le,"",dr(r)):"Json.Decode.oneOf"}(),x=d+(" failed in the following "+(T(ea(m))+" ways:"));return a(le,`

`,a(P,x,a(lv,M0,m)))}else{var c=m.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(le,"",dr(r)):"!"}();default:var b=e.a,s=e.b,x=function(){return r.b?"Problem with the value at json"+(a(le,"",dr(r))+`:

    `):`Problem with the given value:

`}();return x+(cv(a(w0,4,s))+(`

`+b))}}),Sr=32,ec=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),rc=xs,ft=Vs,Kc=v(function(e,r){return nu(r)/nu(e)}),Ka=Bs,mt=ft(a(Kc,2,Sr)),vv=L(ec,0,mt,rc,rc),fv=ws,mv=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var D0=js,nc=ys,pr=v(function(e,r){return he(e,r)>0?e:r}),F0=function(e){return{$:0,a:e}},el=Ss,A0=v(function(e,r){e:for(;;){var n=a(el,Sr,e),t=n.a,i=n.b,o=a(P,F0(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return dr(o)}}),sv=function(e){var r=e.a;return r},I0=v(function(e,r){e:for(;;){var n=ft(r/Sr);if(n===1)return a(el,Sr,e).a;var t=a(A0,e,D),i=n;e=t,r=i;continue e}}),dv=v(function(e,r){if(r.n){var n=r.n*Sr,t=D0(a(Kc,Sr,n-1)),i=e?dr(r.B):r.B,o=a(I0,i,r.n);return L(ec,nc(r.q)+n,a(pr,5,t*mt),o,r.q)}else return L(ec,nc(r.q),mt,rc,r.q)}),E0=Oe(function(e,r,n,t,i){e:for(;;){if(r<0)return a(dv,!1,{B:t,n:n/Sr|0,q:i});var o=mv(h(fv,Sr,r,e)),c=e,l=r-Sr,u=n,f=a(P,o,t),m=i;e=c,r=l,n=u,t=f,i=m;continue e}}),B0=v(function(e,r){if(e<=0)return vv;var n=e%Sr,t=h(fv,n,e-n,r),i=e-n-Sr;return F(E0,r,i,e,D,t)}),Br=function(e){return!e.$},K=gd,Le=fd,X=pd,Ue=md,pv=v(function(e,r){return{b6:r.b6,gi:e,c_:r.c_,gw:r.gw,g9:r.g9,dz:r.dz,cF:r.cF,iq:r.iq}}),Si=hd,R0=bd,$r=$d,rl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},gr=function(e){return e},V0=gr,hu=zr(function(e,r,n,t,i,o){return{ef:o,ek:r,e4:t,e7:n,fa:e,fb:i}}),j0=nd,Un=Us,ha=Qs,Pt=v(function(e,r){return e<1?r:h(ha,e,Un(r),r)}),Ui=td,Ji=function(e){return e===""},qi=v(function(e,r){return e<1?"":h(ha,0,e,r)}),gv=id,bu=Oe(function(e,r,n,t,i){if(Ji(i)||a(j0,"@",i))return O;var o=a(Ui,":",i);if(o.b){if(o.b.b)return O;var c=o.a,l=gv(a(Pt,c+1,i));if(l.$===1)return O;var u=l;return J(ar(hu,e,a(qi,c,i),u,r,n,t))}else return J(ar(hu,e,i,O,r,n,t))}),_u=ee(function(e,r,n,t){if(Ji(t))return O;var i=a(Ui,"/",t);if(i.b){var o=i.a;return F(bu,e,a(Pt,o,t),r,n,a(qi,o,t))}else return F(bu,e,"/",r,n,t)}),xu=M(function(e,r,n){if(Ji(n))return O;var t=a(Ui,"?",n);if(t.b){var i=t.a;return L(_u,e,J(a(Pt,i+1,n)),r,a(qi,i,n))}else return L(_u,e,O,r,n)});v(function(e,r){if(Ji(r))return O;var n=a(Ui,"#",r);if(n.b){var t=n.a;return h(xu,e,J(a(Pt,t+1,r)),a(qi,t,r))}else return h(xu,e,O,r)});var N0=ad,Mt=function(e){},kt=na,W0=kt(0),hv=ee(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var m=f.a,d=f.b,b=n>500?h(We,e,r,dr(d)):L(hv,e,r,n+1,d);return a(e,i,a(e,c,a(e,u,a(e,m,b))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),er=M(function(e,r,n){return L(hv,e,r,0,n)}),ne=v(function(e,r){return h(er,v(function(n,t){return a(P,e(n),t)}),D,r)}),Ci=Yo,nl=v(function(e,r){return a(Ci,function(n){return kt(e(n))},r)}),Z0=M(function(e,r,n){return a(Ci,function(t){return a(Ci,function(i){return kt(a(e,t,i))},n)},r)}),H0=function(e){return h(er,Z0(P),kt(D),e)},G0=Ad,O0=v(function(e,r){var n=r;return A$(a(Ci,G0(e),n))}),U0=M(function(e,r,n){return a(nl,function(t){return 0},H0(a(ne,O0(e),r)))}),J0=M(function(e,r,n){return kt(0)}),q0=v(function(e,r){var n=r;return a(nl,e,n)});Xr.Task=Dd(W0,U0,J0,q0);var Y0=E$("Task"),al=v(function(e,r){return Y0(a(nl,e,r))}),X0=pp,Q0=Hs,zi={$:1},bv=function(e){return{$:2,a:e}},tl={$:0},Tr=v(function(e,r){return{$:0,a:e,b:r}}),Ve=M(function(e,r,n){return r(e(n))}),aa=function(e){var r=e.b.r;return r.a},K0=function(e){var r=e.a,n=e.b.W,t=e.b.r,i=e.b.am;if(i.b){var o=i.a,c=i.b;return J(a(Tr,r,{r:o,am:c,W:a(P,t,n)}))}else return O},Fe=v(function(e,r){if(r.$)return e;var n=r.a;return n}),eg=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dM;return(he(o+r.gw,aa(n).b6)>0?a(Ve,K0,Fe(a(Tr,zi,i))):gr)(a(Tr,bv({dM:o+r.gw}),i));default:var c=i.r,l=c.a,u=c.b,f=a(pv,l.gi,Ae(r,{b6:l.b6+r.gw})),m=a(e,f,u);return a(Tr,tl,{r:w(f,m),am:D,W:a(P,i.r,i.W)})}}),_v=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),rg=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(P,t,n);e=o,r=c,n=l;continue e}else return n}}),ng=v(function(e,r){return dr(h(rg,e,r,D))}),xv=M(function(e,r,n){if(r<=0)return D;{var t=w(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,c=o.a;return $([y,c]);case 3:if(t.b.b.b.b){var l=t.b,y=l.a,u=l.b,c=u.a,f=u.b,m=f.a;return $([y,c,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,y=d.a,b=d.b,c=b.a,s=b.b,m=s.a,x=s.b,_=x.a,C=x.b;return e>1e3?a(P,y,a(P,c,a(P,m,a(P,_,a(ng,r-4,C))))):a(P,y,a(P,c,a(P,m,a(P,_,h(xv,e+1,r-4,C)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var z=t.b,y=z.a;return $([y])}}),ag=v(function(e,r){return h(xv,0,e,r)}),tg=v(function(e,r){var n=r.b.W,t=r.b.r,i=r.b.am,o=Y(dr(n),Y($([t]),i)),c=a(ag,e,o),l=a(_v,e,o);if(l.b){var u=l.a,f=l.b;return a(Tr,zi,{r:u,am:f,W:dr(c)})}else{var m=dr(c);if(m.b){var d=m.a,b=m.b;return a(Tr,zi,{r:d,am:D,W:b})}else return r}}),ig=function(e){var r=e.b;return a(Tr,zi,r)},og=function(e){var r=e.b;return a(Tr,bv({dM:aa(e).b6}),r)},cg=function(e){var r=e.b;return a(Tr,tl,r)},lg=v(function(e,r){switch(e.$){case 1:return ig(r);case 2:return cg(r);case 3:return og(r);default:var n=e.a;return a(tg,n,r)}}),Li=v(function(e,r){var n=r.a,t=r.b;return w(e(n),t)}),ug=v(function(e,r){return Ae(r,{aM:e(r.aM)})}),$g=function(e){return{$:3,a:e}},yv=function(e){return{$:2,a:e}},wv=v(function(e,r){return{$:0,a:e,b:r}}),vg=v(function(e,r){return{$:1,a:e,b:r}}),Ne=v(function(e,r){if(r.$)return O;var n=r.a;return J(e(n))}),ye=function(e){return e<0?-e:e},Sv=od,fg=M(function(e,r,n){return a(Fe,0/0,Sv(a(e,r,n)))}),Ra=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),mg=qs,Cv=function(e){return h(mg,P,D,e)},sg=v(function(e,r){var n=a(Ra,function(t){return t!=="0"&&t!=="."},Cv(r));return Y(e&&n?"-":"",r)}),ve=T$,ac=Gs,zv=ud,Lv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ba(n);if(t.$===1)return"01";var i=t.a;return a(ac,"0",Lv(i))}else{var o=Qr(r);return o>=48&&o<57?a(ac,zv(o+1),n):"0"}},tc=Rs,dg=Zs,Yi=function(e){return a(ac,e,"")},Pv=M(function(e,r,n){return e<=0?n:h(Pv,e>>1,Y(r,r),e&1?Y(n,r):n)}),st=v(function(e,r){return h(Pv,e,r,"")}),ic=M(function(e,r,n){return Y(n,a(st,e-Un(n),Yi(r)))}),oc=Js,Mv=function(e){var r=a(Qc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return w(n,i)}else{var n=r.a;return w(n,"0")}else return w("0","0")},pg=function(e){var r=a(Qc,"e",ve(ye(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Fe,0,gv(a(N0,"+",i)?a(Pt,1,i):i)),c=Mv(n),l=c.a,u=c.b,f=Y(l,u),m=o<0?a(Fe,"0",a(Ne,function(d){var b=d.a,s=d.b;return b+("."+s)},a(Ne,Li(Yi),Ba(Y(a(st,ye(o),"0"),f))))):h(ic,o+1,"0",f);return Y(e<0?"-":"",m)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},gg=M(function(e,r,n){if(tc(n)||dg(n))return ve(n);var t=n<0,i=Mv(pg(ye(n))),o=i.a,c=i.b,l=Un(o)+r,u=Y(a(st,-l+1,"0"),h(ic,l,"0",Y(o,c))),f=Un(u),m=a(pr,1,l),d=a(e,t,h(ha,m,f,u)),b=h(ha,0,m,u),s=d?oc(a(Fe,"1",a(Ne,Lv,Ba(oc(b))))):b,x=Un(s),_=s==="0"?s:r<=0?Y(s,a(st,ye(r),"0")):he(r,Un(c))<0?h(ha,0,x-r,s)+("."+h(ha,x-r,x,s)):Y(o+".",h(ic,r,"0",c));return a(sg,t,_)}),kv=gg(v(function(e,r){var n=Ba(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Qr(i))})),hg=fg(kv),bg=M(function(e,r,n){var t=a(Kc,10,ye(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(hg,i,n)}),Tv=Ps,Tt=v(function(e,r){e:for(;;){if(r.$===-2)return O;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(Tv,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return J(t);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=Oe(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),rn={$:-2},Ma=Oe(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,d=t.d,b=t.e;return F(fe,0,r,n,F(fe,1,f,m,d,b),F(fe,1,o,c,l,u))}else return F(fe,e,o,c,F(fe,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var x=s.b,_=s.c,C=s.d,z=s.e,b=t.e;return F(fe,0,f,m,F(fe,1,x,_,C,z),F(fe,1,r,n,b,i))}else return F(fe,e,r,n,t,i)}),cc=M(function(e,r,n){if(n.$===-2)return F(fe,0,e,r,rn,rn);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a(Tv,e,i);switch(u){case 0:return F(Ma,t,i,o,h(cc,e,r,c),l);case 1:return F(fe,t,i,r,c,l);default:return F(Ma,t,i,o,c,h(cc,e,r,l))}}),wa=M(function(e,r,n){var t=h(cc,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return F(fe,1,i,o,c,l)}else{var u=t;return u}}),_g=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Dv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var s=b.b,x=b.c,_=b.d,C=b.e,z=f.e;return F(fe,0,s,x,F(fe,1,n,t,F(fe,0,o,c,l,u),_),F(fe,1,m,d,C,z))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,c=y.c,l=y.d,u=y.e,k=e.e;k.a;var m=k.b,d=k.c,b=k.d,z=k.e;return F(fe,1,n,t,F(fe,0,o,c,l,u),F(fe,0,m,d,b,z))}else return e},yu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,m=l.d,d=l.e,b=i.e,s=e.e;s.a;var x=s.b,_=s.c,C=s.d,z=s.e;return F(fe,0,o,c,F(fe,1,u,f,m,d),F(fe,1,n,t,b,F(fe,0,x,_,C,z)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,c=y.c,k=y.d,b=y.e,H=e.e;H.a;var x=H.b,_=H.c,C=H.d,z=H.e;return F(fe,1,n,t,F(fe,0,o,c,k,b),F(fe,0,x,_,C,z))}else return e},xg=Gi(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,m=o.e;return F(fe,n,l,u,f,F(fe,0,t,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,yu(r)}else break e;else return c.a,c.d,yu(r);else break e;return r}}),ui=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,F(fe,r,n,t,ui(i),l);var u=Dv(e);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return F(Ma,f,m,d,ui(b),s)}else return rn}else return F(fe,r,n,t,ui(i),l)}else return rn},ot=v(function(e,r){if(r.$===-2)return rn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(he(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,F(fe,n,t,i,a(ot,e,o),c);var u=Dv(r);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return F(Ma,f,m,d,a(ot,e,b),s)}else return rn}else return F(fe,n,t,i,a(ot,e,o),c);else return a(yg,e,Bc(xg,e,r,n,t,i,o,c))}),yg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(de(e,t)){var l=_g(c);if(l.$===-1){var u=l.b,f=l.c;return F(Ma,n,u,f,o,ui(c))}else return rn}else return F(Ma,n,t,i,o,a(ot,e,c))}else return rn}),wg=v(function(e,r){var n=a(ot,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return F(fe,1,t,i,o,c)}else{var l=n;return l}}),Ot=M(function(e,r,n){var t=r(a(Tt,e,n));if(t.$)return a(wg,e,n);var i=t.a;return h(wa,e,i,n)}),Sg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Ot,r,Ne(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(vg,w(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Ot,r,Ne(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(wv,w(o,c),h(bg,o,c,n))}));case 3:var r=e.a,n=e.b;return a(Ot,r,Ne(function(t){return t.$===3?$g(n):t}));default:var r=e.a,n=e.b;return a(Ot,r,Ne(function(t){return t.$===2?yv(n):t}))}},Cg=function(e){return ug(Sg(e))},zg=v(function(e,r){return a(ne,Cg(e),r)}),Lg=v(function(e,r){return Ae(r,{gi:a(zg,e,r.gi)})}),Pg=v(function(e,r){var n=r.a,t=r.b;return a(Tr,n,Ae(t,{r:a(Li,Lg(e),t.r)}))}),lc=v(function(e,r){var n=r.a,t=r.b;return w(n,e(t))}),Mg=M(function(e,r,n){var t=n.a,i=n.b,o=i.r;return a(Tr,t,Ae(i,{r:a(lc,a(e,o.a,r),o)}))}),kg=ee(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Ae(t,{bw:!t.bw});case 2:var i=n.a;return Ae(t,{Q:h(eg,e,i,t.Q)});case 3:var o=n.a;return Ae(t,{bp:o});case 4:var c=n.a;return Ae(t,{Q:a(Pg,c,t.Q)});case 5:var l=n.a;return Ae(t,{Q:h(Mg,r,l,t.Q)});default:var u=n.a;return Ae(t,{Q:a(lg,u,t.Q)})}}),Tg=v(function(e,r){return a(Tr,tl,{r:w(e,r(e)),am:D,W:D})}),Dg=Id,wu=Dg(D),Fg=function(e){return{$:2,a:e}},Pi=dd,ka=sd,Ag=jd("tick",a(K,function(e){return a(K,function(r){return a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(c){return $r({b6:c,c_:o,gw:i,g9:t,dz:n,cF:r,iq:e})},a(X,"clock",Ue))},a(X,"devicePixelRatio",Ue))},a(X,"dt",Ue))},a(X,"keyboard",a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(c){return a(K,function(l){return a(K,function(u){return a(K,function(f){return a(K,function(m){return a(K,function(d){return $r({fQ:d,gk:m,d8:f,gv:u,ha:l,hw:c,hC:o,hO:i,fs:t})},a(X,"alt",Le))},a(X,"control",Le))},a(X,"down",Le))},a(X,"downs",Pi(ka)))},a(X,"left",Le))},a(X,"pressedKeys",Pi(ka)))},a(X,"right",Le))},a(X,"shift",Le))},a(X,"up",Le))))},a(X,"pointer",a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(c){return a(K,function(l){return a(K,function(u){return a(K,function(f){return $r({d8:f,eo:u,hg:l,hD:c,hE:o,fs:i,it:t,ix:n})},a(X,"down",Le))},a(X,"isDown",Le))},a(X,"move",Le))},a(X,"rightDown",Le))},a(X,"rightUp",Le))},a(X,"up",Le))},a(X,"x",Ue))},a(X,"y",Ue))))},a(X,"screen",a(K,function(r){return a(K,function(n){return $r({gO:n,ir:r})},a(X,"height",Ue))},a(X,"width",Ue))))},a(X,"wheel",a(K,function(e){return a(K,function(r){return $r({go:r,gp:e})},a(X,"deltaX",Ue))},a(X,"deltaY",Ue))))),Ig=function(e){return e.dS,Ag(Fg)},Eg=function(e){return{$:5,a:e}},Bg={$:0},Mi=v(function(e,r){return e}),Rg=function(e){var r=e.b.r;return r.b},Vg=function(e){return{$:1,a:e}},jg=Vg,Fv=function(e){return{$:8,a:e}},we=Fv,dt=function(e){return{$:0,a:e}},Dt=M(function(e,r,n){return e(r(n))}),Ng=a(Dt,dt,Mi),Sn=Ng,Ee=function(e){return{$:1,a:e}},$n=Ee,Av=v(function(e,r){return{$:9,a:e,b:r}}),ra={$:0},Iv=v(function(e,r){return r.$===3?ra:a(Av,e,r)}),uc=function(e){return a(Iv,4,e)},p={fF:"a",cO:"atv",fH:"ab",fI:"cx",fJ:"cy",fK:"acb",fL:"accx",fM:"accy",fN:"acr",d0:"al",d1:"ar",fO:"at",cP:"ah",cQ:"av",fR:"s",fX:"bh",fY:"b",f0:"w7",f2:"bd",f3:"bdt",b2:"bn",f4:"bs",b5:"cpe",ge:"cp",gf:"cpx",gg:"cpy",av:"c",ca:"ctr",cb:"cb",cc:"ccx",aw:"ccy",bt:"cl",cd:"cr",gj:"ct",gm:"cptr",gn:"ctxt",gE:"fcs",ee:"focus-within",gF:"fs",gJ:"g",c0:"hbh",c1:"hc",ei:"he",c2:"hf",ej:"hfp",gR:"hv",gU:"ic",gW:"fr",ck:"lbl",g_:"iml",g$:"imlf",g0:"imlp",g1:"implw",g2:"it",g8:"i",ey:"lnk",be:"nb",eZ:"notxt",hm:"ol",hn:"or",aT:"oq",hs:"oh",e1:"pg",e2:"p",ht:"ppe",hF:"ui",ae:"r",hI:"sb",hJ:"sbx",hK:"sby",hL:"sbt",hQ:"e",hR:"cap",hT:"sev",hZ:"sk",X:"t",h4:"tc",h5:"w8",h6:"w2",h7:"w9",h8:"tj",cI:"tja",h9:"tl",ia:"w3",ib:"w5",ic:"w4",id:"tr",ie:"w6",$8:"w1",ig:"tun",fq:"ts",a$:"clr",im:"u",dT:"wc",fB:"we",dU:"wf",fC:"wfp",dV:"wrp"},il=F$,Ar=v(function(e,r){return a(Zc,e,il(r))}),kr=Ar("className"),wr=function(e){return Ee(kr(e))},Ev=v(function(e,r){return{$:2,a:e,b:r}}),Wg=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},Cr=2,Zg={$:0},ta=Zg,Hg={$:0},Gg=p.fR+(" "+p.av),Og=p.fR+(" "+p.gJ),Ug=p.fR+(" "+p.e1),Jg=p.fR+(" "+p.e2),qg=p.fR+(" "+p.ae),Yg=p.fR+(" "+p.hQ),Xg=function(e){switch(e){case 0:return qg;case 1:return Gg;case 2:return Yg;case 3:return Og;case 4:return Jg;default:return Ug}},Su=function(e){return{$:1,a:e}},On={$:0},$c=function(e){return{$:1,a:e}},Cu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),zu=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(ne,function(o){return w(e,o)},t),r);case 2:var i=n.a;return Y(r,a(ne,function(o){return w(e,o)},i));default:var t=n.a,i=n.b;return Y(a(ne,function(o){return w(e,o)},t),Y(r,a(ne,function(o){return w(e,o)},i)))}}),Ut=4,Qg=function(e){return{$:0,a:e}},Kg=function(e){return{$:1,a:e}},xe=function(e){return e>31?Kg(1<<e-32):Qg(1<<e)},Bv=xe(41),Rv=xe(40),Vv=xe(42),jv=xe(43),Mn=tn("div"),ol=rn,Nv=ol,Jr=function(e){switch(e.$){case 0:var r=e.a;return T(r)+"px";case 1:return"auto";case 2:var n=e.a;return T(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(T(t)+Jr(o));default:var i=e.a,o=e.b;return"max"+(T(i)+Jr(o))}},De=Ns,Re=function(e){return T(De(e*255))},cl=function(e){switch(e.$){case 0:return O;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return J("mv-"+(Re(n)+("-"+(Re(t)+("-"+Re(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,x=s.a,_=s.b,C=s.c,z=e.d;return J("tfrm-"+(Re(c)+("-"+(Re(l)+("-"+(Re(u)+("-"+(Re(m)+("-"+(Re(d)+("-"+(Re(b)+("-"+(Re(x)+("-"+(Re(_)+("-"+(Re(C)+("-"+Re(z))))))))))))))))))))}},pt=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+T(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(le,"-",a(ne,Jr,i.hG))+("-cols-"+(a(le,"-",a(ne,Jr,i.aj))+("-space-x-"+(Jr(i.hU.a)+("-space-y-"+Jr(i.hU.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(T(o.ae)+("-"+(T(o.gh)+("-"+(T(o.ir)+("-"+T(o.gO)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(le," ",a(ne,function(m){var d=pt(m);if(d==="")return"";var b=d;return b+("-"+u)},l));default:var f=e.a;return a(Fe,"",cl(f))}},eh=v(function(e,r){var n=r;return h(wa,e,0,n)}),rh=v(function(e,r){var n=a(Tt,e,r);return!n.$}),nh=v(function(e,r){var n=r;return a(rh,e,n)}),Wv=v(function(e,r){var n=r.a,t=r.b,i=pt(e);return a(nh,i,n)?r:w(a(eh,i,n),a(P,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),ct=v(function(e,r){return{$:0,a:e,b:r}}),S=function(e){return"."+e},ah=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(P,i,n)}),nn=v(function(e,r){return h(er,ah(e),D,r)}),ba=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(T(De(r*255))+(","+T(De(n*255))+(","+T(De(t*255))+(","+(ve(i)+")")))))},vc=function(e){return a(le," ",a(nn,gr,$([e.en?J("inset"):O,J(ve(e.e_.a)+"px"),J(ve(e.e_.b)+"px"),J(ve(e.a2)+"px"),J(ve(e.bi)+"px"),J(ba(e.b8))])))},Zv=function(e){return $([a(ct,S(p.ee)+":focus-within",a(nn,gr,$([a(Ne,function(r){return a(ue,"border-color",ba(r))},e.f1),a(Ne,function(r){return a(ue,"background-color",ba(r))},e.fV),a(Ne,function(r){return a(ue,"box-shadow",vc({a2:r.a2,b8:r.b8,en:!1,e_:a(lc,Ka,a(Li,Ka,r.e_)),bi:r.bi}))},e.hM),J(a(ue,"outline","none"))]))),a(ct,S(p.fR)+":focus .focusable, "+(S(p.fR)+".focusable:focus, "+(".ui-slide-bar:focus + "+(S(p.fR)+" .focusable-thumb"))),a(nn,gr,$([a(Ne,function(r){return a(ue,"border-color",ba(r))},e.f1),a(Ne,function(r){return a(ue,"background-color",ba(r))},e.fV),a(Ne,function(r){return a(ue,"box-shadow",vc({a2:r.a2,b8:r.b8,en:!1,e_:a(lc,Ka,a(Li,Ka,r.e_)),bi:r.bi}))},e.hM),J(a(ue,"outline","none"))])))])},Ur=function(e){return tn(V$(e))},Hv=v(function(e,r){return a(Zc,Yd(e),j$(r))}),So=v(function(e,r){return{$:2,a:e,b:r}}),ll=function(e){return{$:6,a:e}},U=v(function(e,r){return{$:1,a:e,b:r}}),xr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),th=v(function(e,r){return{$:3,a:e,b:r}}),Gv=$([0,1,2,3,4,5]),ih=v(function(e,r){return r.b?h(er,P,r,e):e}),hr=function(e){return h(er,ih,D,e)},Va=v(function(e,r){return hr(a(ne,e,r))}),oh=function(e){switch(e){case 0:return S(p.gj);case 1:return S(p.cb);case 2:return S(p.cd);case 3:return S(p.bt);case 4:return S(p.cc);default:return S(p.aw)}},ki=function(e){switch(e){case 0:return S(p.fO);case 1:return S(p.fH);case 2:return S(p.d1);case 3:return S(p.d0);case 4:return S(p.fI);default:return S(p.fJ)}},et=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,oh(n),i),a(U,S(p.fR),$([a(A,ki(n),o)]))])};return ll(a(Va,r,Gv))},Lu=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,S(p.c0),$([a(g,"z-index","0"),a(U,S(p.fX),$([a(g,"z-index","-1")]))])),a(A,S(p.hL),$([a(U,S(p.X),$([a(A,S(p.c2),$([a(g,"flex-grow","0")])),a(A,S(p.dU),$([a(g,"align-self","auto !important")]))]))])),a(U,S(p.c1),$([a(g,"height","auto")])),a(U,S(p.c2),$([a(g,"flex-grow","100000")])),a(U,S(p.dU),$([a(g,"width","100%")])),a(U,S(p.fC),$([a(g,"width","100%")])),a(U,S(p.dT),$([a(g,"align-self","flex-start")])),et(function(e){switch(e){case 0:return w($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return w($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return w($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return w($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return w($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return w($([a(U,S(p.fR),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),ch=function(e){var r=function(n){return $([a(U,S(p.fR),$([a(A,ki(n),e(n))]))])};return ll(a(Va,r,Gv))},lh=function(){return $([0,1,2,3,4,5])}(),uh=$([a(xr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(xr,Y(S(p.fR),Y(S(p.hQ),S(p.gU))),$([a(g,"display","block"),a(A,S(p.c2),$([a(U,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,S(p.dU),$([a(U,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(xr,S(p.fR)+":focus",$([a(g,"outline","none")])),a(xr,S(p.hF),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,Y(S(p.fR),S(p.c2)),$([a(g,"height","100%"),a(U,S(p.c2),$([a(g,"height","100%")]))])),a(U,S(p.gW),$([a(A,S(p.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(xr,S(p.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,S(p.hQ),Lu),ll(function(e){return a(ne,e,lh)}(function(e){switch(e){case 0:return a(A,S(p.fF),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(U,S(p.c2),$([a(g,"height","auto")])),a(U,S(p.dU),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,S(p.fY),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")])),a(U,S(p.c2),$([a(g,"height","auto")]))]));case 2:return a(A,S(p.hn),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,S(p.hm),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,S(p.gW),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,S(p.fX),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(xr,S(p.fR),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,S(p.dV),$([a(g,"flex-wrap","wrap")])),a(A,S(p.eZ),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,S(p.gm),$([a(g,"cursor","pointer")])),a(A,S(p.gn),$([a(g,"cursor","text")])),a(A,S(p.ht),$([a(g,"pointer-events","none !important")])),a(A,S(p.b5),$([a(g,"pointer-events","auto !important")])),a(A,S(p.a$),$([a(g,"opacity","0")])),a(A,S(p.aT),$([a(g,"opacity","1")])),a(A,S(Y(p.gR,p.a$))+":hover",$([a(g,"opacity","0")])),a(A,S(Y(p.gR,p.aT))+":hover",$([a(g,"opacity","1")])),a(A,S(Y(p.gE,p.a$))+":focus",$([a(g,"opacity","0")])),a(A,S(Y(p.gE,p.aT))+":focus",$([a(g,"opacity","1")])),a(A,S(Y(p.cO,p.a$))+":active",$([a(g,"opacity","0")])),a(A,S(Y(p.cO,p.aT))+":active",$([a(g,"opacity","1")])),a(A,S(p.fq),$([a(g,"transition",a(le,", ",a(ne,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,S(p.hI),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,S(p.hJ),$([a(g,"overflow-x","auto"),a(A,S(p.ae),$([a(g,"flex-shrink","1")]))])),a(A,S(p.hK),$([a(g,"overflow-y","auto"),a(A,S(p.av),$([a(g,"flex-shrink","1")])),a(A,S(p.hQ),$([a(g,"flex-shrink","1")]))])),a(A,S(p.ge),$([a(g,"overflow","hidden")])),a(A,S(p.gf),$([a(g,"overflow-x","hidden")])),a(A,S(p.gg),$([a(g,"overflow-y","hidden")])),a(A,S(p.dT),$([a(g,"width","auto")])),a(A,S(p.b2),$([a(g,"border-width","0")])),a(A,S(p.f2),$([a(g,"border-style","dashed")])),a(A,S(p.f3),$([a(g,"border-style","dotted")])),a(A,S(p.f4),$([a(g,"border-style","solid")])),a(A,S(p.X),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,S(p.g2),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,S(p.hQ),Lu),a(A,S(p.ae),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(U,S(p.fR),$([a(g,"flex-basis","0%"),a(A,S(p.fB),$([a(g,"flex-basis","auto")])),a(A,S(p.ey),$([a(g,"flex-basis","auto")]))])),a(U,S(p.c2),$([a(g,"align-self","stretch !important")])),a(U,S(p.ej),$([a(g,"align-self","stretch !important")])),a(U,S(p.dU),$([a(g,"flex-grow","100000")])),a(U,S(p.ca),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(U,"u:first-of-type."+p.fN,$([a(g,"flex-grow","1")])),a(U,"s:first-of-type."+p.fL,$([a(g,"flex-grow","1"),a(U,S(p.fI),$([a(g,"margin-left","auto !important")]))])),a(U,"s:last-of-type."+p.fL,$([a(g,"flex-grow","1"),a(U,S(p.fI),$([a(g,"margin-right","auto !important")]))])),a(U,"s:only-of-type."+p.fL,$([a(g,"flex-grow","1"),a(U,S(p.fJ),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(p.fL+" ~ u"),$([a(g,"flex-grow","0")])),a(U,"u:first-of-type."+(p.fN+(" ~ s."+p.fL)),$([a(g,"flex-grow","0")])),et(function(e){switch(e){case 0:return w($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return w($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return w($([a(g,"justify-content","flex-end")]),D);case 3:return w($([a(g,"justify-content","flex-start")]),D);case 4:return w($([a(g,"justify-content","center")]),D);default:return w($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,S(p.hT),$([a(g,"justify-content","space-between")])),a(A,S(p.ck),$([a(g,"align-items","baseline")]))])),a(A,S(p.av),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(U,S(p.fR),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,S(p.ei),$([a(g,"flex-basis","auto")]))])),a(U,S(p.c2),$([a(g,"flex-grow","100000")])),a(U,S(p.dU),$([a(g,"width","100%")])),a(U,S(p.fC),$([a(g,"width","100%")])),a(U,S(p.dT),$([a(g,"align-self","flex-start")])),a(U,"u:first-of-type."+p.fK,$([a(g,"flex-grow","1")])),a(U,"s:first-of-type."+p.fM,$([a(g,"flex-grow","1"),a(U,S(p.fJ),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(U,"s:last-of-type."+p.fM,$([a(g,"flex-grow","1"),a(U,S(p.fJ),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(U,"s:only-of-type."+p.fM,$([a(g,"flex-grow","1"),a(U,S(p.fJ),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(p.fM+" ~ u"),$([a(g,"flex-grow","0")])),a(U,"u:first-of-type."+(p.fK+(" ~ s."+p.fM)),$([a(g,"flex-grow","0")])),et(function(e){switch(e){case 0:return w($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return w($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return w($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return w($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return w($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return w($([a(g,"justify-content","center")]),D)}}),a(U,S(p.ca),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,S(p.hT),$([a(g,"justify-content","space-between")]))])),a(A,S(p.gJ),$([a(g,"display","-ms-grid"),a(U,".gp",$([a(U,S(p.fR),$([a(g,"width","100%")]))])),a(th,w("display","grid"),$([w("display","grid")])),ch(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,S(p.e1),$([a(g,"display","block"),a(U,S(p.fR+":first-child"),$([a(g,"margin","0 !important")])),a(U,S(p.fR+(ki(3)+(":first-child + ."+p.fR))),$([a(g,"margin","0 !important")])),a(U,S(p.fR+(ki(2)+(":first-child + ."+p.fR))),$([a(g,"margin","0 !important")])),et(function(e){switch(e){case 0:return w(D,D);case 1:return w(D,D);case 2:return w(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return w(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return w(D,D);default:return w(D,D)}})])),a(A,S(p.g_),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,S(p.g1),$([a(A,S(p.hQ),$([a(g,"flex-basis","auto")]))])),a(A,S(p.g0),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(U,S(p.g$),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,S(p.e2),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,S(p.c0),$([a(g,"z-index","0"),a(U,S(p.fX),$([a(g,"z-index","-1")]))])),a(So,S(p.X),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(So,S(p.e2),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(So,S(p.hQ),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,S(p.fB),$([a(g,"display","inline-block")])),a(A,S(p.gW),$([a(g,"display","flex")])),a(A,S(p.fX),$([a(g,"display","flex")])),a(A,S(p.fF),$([a(g,"display","flex")])),a(A,S(p.fY),$([a(g,"display","flex")])),a(A,S(p.hn),$([a(g,"display","flex")])),a(A,S(p.hm),$([a(g,"display","flex")])),a(U,S(p.X),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(U,S(p.ae),$([a(g,"display","inline")])),a(U,S(p.av),$([a(g,"display","inline-flex")])),a(U,S(p.gJ),$([a(g,"display","inline-grid")])),et(function(e){switch(e){case 0:return w(D,D);case 1:return w(D,D);case 2:return w(D,$([a(g,"float","right")]));case 3:return w(D,$([a(g,"float","left")]));case 4:return w(D,D);default:return w(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,S(p.$8),$([a(g,"font-weight","100")])),a(A,S(p.h6),$([a(g,"font-weight","200")])),a(A,S(p.ia),$([a(g,"font-weight","300")])),a(A,S(p.ic),$([a(g,"font-weight","400")])),a(A,S(p.ib),$([a(g,"font-weight","500")])),a(A,S(p.ie),$([a(g,"font-weight","600")])),a(A,S(p.f0),$([a(g,"font-weight","700")])),a(A,S(p.h5),$([a(g,"font-weight","800")])),a(A,S(p.h7),$([a(g,"font-weight","900")])),a(A,S(p.g8),$([a(g,"font-style","italic")])),a(A,S(p.hZ),$([a(g,"text-decoration","line-through")])),a(A,S(p.im),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,Y(S(p.im),S(p.hZ)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,S(p.ig),$([a(g,"font-style","normal")])),a(A,S(p.h8),$([a(g,"text-align","justify")])),a(A,S(p.cI),$([a(g,"text-align","justify-all")])),a(A,S(p.h4),$([a(g,"text-align","center")])),a(A,S(p.id),$([a(g,"text-align","right")])),a(A,S(p.h9),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),_n=function(e){return $([a(xr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(xr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},$h=hr($([a(ne,function(e){return a(xr,".border-"+T(e),$([a(g,"border-width",T(e)+"px")]))},a(sn,0,6)),a(ne,function(e){return a(xr,".font-size-"+T(e),$([a(g,"font-size",T(e)+"px")]))},a(sn,8,32)),a(ne,function(e){return a(xr,".p-"+T(e),$([a(g,"padding",T(e)+"px")]))},a(sn,0,24)),$([a(xr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(xr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),_n("zero"),_n("onum"),_n("liga"),_n("dlig"),_n("ordn"),_n("tnum"),_n("afrc"),_n("frac")])),vh=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fR+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fR+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),fh=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,mh=`
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
`,sh=`
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
`,dh=`
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
`,ph="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(S(p.fR)+(S(p.ae)+(" > "+(S(p.fR)+(" { flex-basis: auto !important; } "+(S(p.fR)+(S(p.ae)+(" > "+(S(p.fR)+(S(p.ca)+(" { flex-basis: auto !important; }}"+(fh+(mh+(dh+(sh+vh))))))))))))))),Sa=function(e){return a(le,"",e)},sa=v(function(e,r){return{b7:r,F:D,aD:D,af:e}}),da=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Ae(o,{aD:a(P,w(c,l),o.aD)});case 3:var u=i.a,f=u.a,m=u.b,d=i.b;return Ae(o,{F:a(P,{b7:`
}`,F:D,aD:d,af:"@supports ("+(f+(":"+(m+(") {"+n.af))))},o.F)});case 5:var b=i.a,s=i.b;return Ae(o,{F:a(P,a(da,a(sa,n.af+(" + "+b),""),s),o.F)});case 1:var x=i.a,_=i.b;return Ae(o,{F:a(P,a(da,a(sa,n.af+(" > "+x),""),_),o.F)});case 2:var x=i.a,_=i.b;return Ae(o,{F:a(P,a(da,a(sa,n.af+(" "+x),""),_),o.F)});case 4:var C=i.a,z=i.b;return Ae(o,{F:a(P,a(da,a(sa,Y(n.af,C),""),z),o.F)});default:var y=i.a;return Ae(o,{F:a(P,a(da,a(sa,n.af,""),y),o.F)})}});return h(er,t,n,r)}),gh=function(e){var r=function(i){return Sa(a(ne,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aD;return o.b?i.af+("{"+(r(i.aD)+(i.b7+"}"))):""},t=function(i){var o=i;return Y(n(o),Sa(a(ne,t,o.F)))};return Sa(a(ne,t,h(er,v(function(i,o){var c=i.a,l=i.b;return a(P,a(da,a(sa,c,""),l),o)}),D,e)))},Pu=Y(ph,gh(Y(uh,$h))),kn=Xo,Ov=function(e){var r=e.eX;switch(r){case 0:return h(Ur,"div",D,$([h(Ur,"style",D,$([kn(Pu)]))]));case 1:return kn("");default:return h(Ur,"elm-ui-static-rules",$([a(Hv,"rules",il(Pu))]),D)}},hh=v(function(e,r){return h(We,Cd(e),yd(),r)}),bh=function(e){return h(We,v(function(r,n){var t=r.a,i=r.b;return h(Sd,t,i,n)}),wd(),e)},_h=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hi;return'"'+(r+'"')}},xh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},yh=function(e){if(e.$===5){var r=e.a;return a(Ra,xh,r.fv)}else return!1},Qn=v(function(e,r){return he(e,r)<0?e:r}),Ja=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ie=ee(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(We,Ja(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gR;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(We,Ja(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(We,Ja(!1),"",t)+`
}`))])}case 0:var c=h(We,Ja(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fR+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(S(p.fR)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(We,Ja(!1),"",t)+`
}`))])}}),wh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+T(n)))}},Sh=function(e){if(e.$===5){var r=e.a;return J(a(le,", ",a(ne,wh,r.fv)))}else return O},Ch=function(e){switch(e.$){case 0:return O;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return J("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,x=s.a,_=s.b,C=s.c,z=e.d,y="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),k="scale3d("+(ve(m)+(", "+(ve(d)+(", "+(ve(b)+")"))))),H="rotate3d("+(ve(x)+(", "+(ve(_)+(", "+(ve(C)+(", "+(ve(z)+"rad)")))))));return J(y+(" "+(k+(" "+H))))}},ul=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(Ie,e,n,t,i);case 13:var u=r.a,b=r.b;return L(Ie,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=a(pr,0,a(Qn,1,1-o));return L(Ie,e,n,"."+u,$([a(ue,"opacity",ve(c))]));case 2:var l=r.a;return L(Ie,e,n,".font-size-"+T(l),$([a(ue,"font-size",T(l)+"px")]));case 1:var u=r.a,f=r.b,m=a(le,", ",a(nn,Sh,f)),d=$([a(ue,"font-family",a(le,", ",a(ne,_h,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(Ra,yh,f)?"small-caps":"normal")]);return L(Ie,e,n,"."+u,d);case 3:var se=r.a,b=r.b,po=r.c;return L(Ie,e,n,"."+se,$([a(ue,b,po)]));case 4:var se=r.a,b=r.b,s=r.c;return L(Ie,e,n,"."+se,$([a(ue,b,ba(s))]));case 5:var q=r.a,x=r.b,_=r.c,C=T(_)+"px",z=T(x)+"px",y="."+p.ae,k="."+(p.dV+y),ge="."+p.d1,H="."+p.e2,Q="."+p.e1,Se="."+p.d0,ae=ve(_/2)+"px",te=ve(x/2)+"px",ie="."+p.av,se="."+q,re="."+p.fR;return hr($([L(Ie,e,n,se+(y+(" > "+(re+(" + "+re)))),$([a(ue,"margin-left",z)])),L(Ie,e,n,se+(k+(" > "+re)),$([a(ue,"margin",ae+(" "+te))])),L(Ie,e,n,se+(ie+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",C)])),L(Ie,e,n,se+(Q+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",C)])),L(Ie,e,n,se+(Q+(" > "+Se)),$([a(ue,"margin-right",z)])),L(Ie,e,n,se+(Q+(" > "+ge)),$([a(ue,"margin-left",z)])),L(Ie,e,n,Y(se,H),$([a(ue,"line-height","calc(1em + "+(T(_)+"px)"))])),L(Ie,e,n,"textarea"+(re+se),$([a(ue,"line-height","calc(1em + "+(T(_)+"px)")),a(ue,"height","calc(100% + "+(T(_)+"px)"))])),L(Ie,e,n,se+(H+(" > "+Se)),$([a(ue,"margin-right",z)])),L(Ie,e,n,se+(H+(" > "+ge)),$([a(ue,"margin-left",z)])),L(Ie,e,n,se+(H+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",T(-1*(_/2|0))+"px")])),L(Ie,e,n,se+(H+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",T(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,pe=r.b,ge=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ie,e,n,se,$([a(ue,"padding",ve(pe)+("px "+(ve(ge)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,pe=r.b,ge=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ie,e,n,se,$([a(ue,"border-width",T(pe)+("px "+(T(ge)+("px "+(T(Me)+("px "+(T(Se)+"px")))))))]));case 8:var me=r.a,ke=M(function(Xe,Ua,on){e:for(;;)switch(on.$){case 0:var hs=on.a;return T(hs)+"px";case 1:var Ir=w(Xe,Ua);if(Ir.a.$===1){if(Ir.b.$===1)return Ir.a,Ir.b,"max-content";Ir.a;var Nn=Ir.b.a;return"minmax(max-content, "+(T(Nn)+"px)")}else if(Ir.b.$===1){var Wn=Ir.a.a;return Ir.b,"minmax("+(T(Wn)+"px, max-content)")}else{var Wn=Ir.a.a,Nn=Ir.b.a;return"minmax("+(T(Wn)+("px, "+(T(Nn)+"px)")))}case 2:var ru=on.a,Er=w(Xe,Ua);if(Er.a.$===1){if(Er.b.$===1)return Er.a,Er.b,T(ru)+"fr";Er.a;var Nn=Er.b.a;return"minmax(max-content, "+(T(Nn)+"px)")}else if(Er.b.$===1){var Wn=Er.a.a;return Er.b,"minmax("+(T(Wn)+("px, "+(T(ru)+"frfr)")))}else{var Wn=Er.a.a,Nn=Er.b.a;return"minmax("+(T(Wn)+("px, "+(T(Nn)+"px)")))}case 3:var go=on.a,ho=on.b,bo=J(go),_o=Ua,xo=ho;Xe=bo,Ua=_o,on=xo;continue e;default:var go=on.a,ho=on.b,bo=Xe,_o=J(go),xo=ho;Xe=bo,Ua=_o,on=xo;continue e}}),I=function(Xe){return h(ke,O,O,Xe)};I(me.hU.a);var E=I(me.hU.b),R=function(Xe){return"grid-template-rows: "+(Xe+";")}(a(le," ",a(ne,I,me.hG))),V=function(Xe){return"-ms-grid-rows: "+(Xe+";")}(a(le,E,a(ne,I,me.aj))),j=function(Xe){return"-ms-grid-columns: "+(Xe+";")}(a(le,E,a(ne,I,me.aj))),N="grid-row-gap:"+(I(me.hU.b)+";"),W="grid-column-gap:"+(I(me.hU.a)+";"),Z=function(Xe){return"grid-template-columns: "+(Xe+";")}(a(le," ",a(ne,I,me.aj))),se=".grid-rows-"+(a(le,"-",a(ne,Jr,me.hG))+("-cols-"+(a(le,"-",a(ne,Jr,me.aj))+("-space-x-"+(Jr(me.hU.a)+("-space-y-"+Jr(me.hU.b))))))),fo=se+("{"+(Z+(R+(W+(N+"}"))))),mo="@supports (display:grid) {"+(fo+"}"),so=se+("{"+(j+(V+"}")));return $([so,mo]);case 9:var Ze=r.a,Wt=a(le," ",$(["-ms-grid-row: "+(T(Ze.ae)+";"),"-ms-grid-row-span: "+(T(Ze.gO)+";"),"-ms-grid-column: "+(T(Ze.gh)+";"),"-ms-grid-column-span: "+(T(Ze.ir)+";")])),vo=a(le," ",$(["grid-row: "+(T(Ze.ae)+(" / "+(T(Ze.ae+Ze.gO)+";"))),"grid-column: "+(T(Ze.gh)+(" / "+(T(Ze.gh+Ze.ir)+";")))])),se=".grid-pos-"+(T(Ze.ae)+("-"+(T(Ze.gh)+("-"+(T(Ze.ir)+("-"+T(Ze.gO))))))),fo=se+("{"+(vo+"}")),mo="@supports (display:grid) {"+(fo+"}"),so=se+("{"+(Wt+"}"));return $([so,mo]);case 11:var se=r.a,ds=r.b,ps=function(Xe){return h(ul,e,Xe,J(se))};return a(Va,ps,ds);default:var eu=r.a,po=Ch(eu),se=cl(eu),Zt=w(se,po);if(!Zt.a.$&&!Zt.b.$){var q=Zt.a.a,gs=Zt.b.a;return L(Ie,e,n,"."+q,$([a(ue,"transform",gs)]))}else return D}}),zh=v(function(e,r){return bh(a(ne,function(n){var t=h(ul,e,n,O);return w(pt(n),a(hh,il,t))},r))}),Ti=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(le,"",a(ne,n,r))+"}"))}),Mu=M(function(e,r,n){var t=n.a,i=n.b;return $([a(Ti,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Ti,"."+(e+("."+(r+("> ."+(p.X+(", ."+(e+(" ."+(r+(" > ."+p.X)))))))))),i)])}),Lh=M(function(e,r,n){var t=r.a,i=r.b,o=de(e,n)?e:n+(" ."+e);return a(le," ",Y(h(Mu,o,p.hR,i),h(Mu,o,p.gF,t)))}),Ph=v(function(e,r){var n=de(e,r)?e:r+(" ."+e);return a(le," ",$([a(Ti,"."+(n+("."+(p.hR+(", "+("."+(n+(" ."+p.hR))))))),$([w("line-height","1")])),a(Ti,"."+(n+("."+(p.hR+("> ."+(p.X+(", ."+(n+(" ."+(p.hR+(" > ."+p.X)))))))))),$([w("vertical-align","0"),w("line-height","1")]))]))}),ku=M(function(e,r,n){return{gO:r/e,bi:e,fw:n}}),Xi=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(P,n,t):t}),D,r)}),Mh=function(e){if(e.b){var r=e.a,n=e.b;return J(h(We,pr,r,n))}else return O},Tu=function(e){if(e.b){var r=e.a,n=e.b;return J(h(We,Qn,r,n))}else return O},Du=function(e){var r=$([e.f8,e.fW,e.gr,e.hd]),n=a(Fe,e.gr,Tu(r)),t=a(Fe,e.fW,Tu(a(Xi,function(f){return!de(f,n)},r))),i=a(Fe,e.f8,Mh(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f8:h(ku,o,i-t,c),eg:h(ku,l,i-n,u)}},Fu=function(e){return w($([w("display","block")]),$([w("display","inline-block"),w("line-height",ve(e.gO)),w("vertical-align",ve(e.fw)+"em"),w("font-size",ve(e.bi)+"em")]))},kh=function(e){return h(We,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fG;if(i.$===1)return n;var o=i.a;return J(w(Fu(function(c){return c.eg}(Du(o))),Fu(function(c){return c.f8}(Du(o)))))}else return n;else return n}),O,e)},Th=function(e){var r=function(o){if(o.$===4){var c=o.b;return J("@import url('"+(c+"');"))}else return O},n=function(o){o.a;var c=o.b,l=a(le,`
`,a(nn,r,c));return l},t=a(ne,sv,e),i=function(o){var c=o.a,l=o.b,u=kh(l);if(u.$===1)return a(le,"",a(ne,Ph(c),t));var f=u.a;return a(le,"",a(ne,a(Lh,c,f),t))};return Y(a(le,`
`,a(ne,n,e)),a(le,`
`,a(ne,i,e)))},Dh=function(e){if(e.$===1){var r=e.a,n=e.b;return J(w(r,n))}else return O},Au=v(function(e,r){var n=v(function(c,l){return{cD:Y(l.cD,h(ul,e,c,O)),bT:function(){var u=Dh(c);if(u.$===1)return l.bT;var f=u.a;return a(P,f,l.bT)}()}}),t=h(We,n,{cD:D,bT:D},r),i=t.bT,o=t.cD;return Y(Th(i),Sa(o))}),Uv=v(function(e,r){var n=e.eX;switch(n){case 0:return h(Ur,"div",D,$([h(Ur,"style",D,$([kn(a(Au,e,r))]))]));case 1:return h(Ur,"div",D,$([h(Ur,"style",D,$([kn(a(Au,e,r))]))]));default:return h(Ur,"elm-ui-rules",$([a(Hv,"rules",a(zh,e,r))]),D)}}),Iu=ee(function(e,r,n,t){var i=a(Uv,r,h(We,Wv,w(Nv,Zv(r.gE)),n).b);return e?a(P,w("static-stylesheet",Ov(r)),a(P,w("dynamic-stylesheet",i),t)):a(P,w("dynamic-stylesheet",i),t)}),Eu=ee(function(e,r,n,t){var i=a(Uv,r,h(We,Wv,w(Nv,Zv(r.gE)),n).b);return e?a(P,Ov(r),a(P,i,t)):a(P,i,t)}),fc=xe(45),gt=xe(37),Jv=function(e){return Hd(V$(e))},mc=tn("p"),cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return de(o&t,o)}else{var i=e.a;return de(i&n,i)}}),Bu=tn("s"),Ru=tn("u"),sc=xe(44),ht=xe(39),Jt=zr(function(e,r,n,t,i,o){var c=v(function(u,f){if(t.$===1){var m=t.a;return h(Jv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return L(Iu,!1,b,s,m);default:var b=i.a,s=i.b;return L(Iu,!0,b,s,m)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return Mn;case"p":return mc;default:return Ur(u)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,s=i.b;return L(Eu,!1,b,s,d);default:var b=i.a,s=i.b;return L(Eu,!0,b,s,d)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,f=r.b;return h(Ur,u,n,$([a(c,f,$([kr(p.fR+(" "+p.hQ))]))]))}}();switch(o){case 0:return a(cr,ht,e)&&!a(cr,sc,e)?l:a(cr,Rv,e)?a(Ru,$([kr(a(le," ",$([p.fR,p.hQ,p.ca,p.aw,p.fN])))]),$([l])):a(cr,Vv,e)?a(Bu,$([kr(a(le," ",$([p.fR,p.hQ,p.ca,p.aw,p.fL])))]),$([l])):l;case 1:return a(cr,gt,e)&&!a(cr,fc,e)?l:a(cr,jv,e)?a(Bu,$([kr(a(le," ",$([p.fR,p.hQ,p.ca,p.fM])))]),$([l])):a(cr,Bv,e)?a(Ru,$([kr(a(le," ",$([p.fR,p.hQ,p.ca,p.fK])))]),$([l])):l;default:return l}}),yn=function(e){return!e.b},Ca=kn,Fh=p.fR+(" "+(p.X+(" "+(p.dT+(" "+p.c1))))),bt=function(e){return a(Mn,$([kr(Fh)]),$([Ca(e)]))},Ah=p.fR+(" "+(p.X+(" "+(p.dU+(" "+p.c2))))),Vu=function(e){return a(Mn,$([kr(Ah)]),$([Ca(e)]))},Ih=M(function(e,r,n){var t=v(function(x,_){var C=x.a,z=x.b,y=_.a,k=_.b;switch(z.$){case 0:var H=z.a;return de(e,Ut),w(a(P,w(C,H(e)),y),k);case 1:var Q=z.a;return de(e,Ut),w(a(P,w(C,a(Q.gS,On,e)),y),yn(k)?Q.h_:Y(Q.h_,k));case 2:var ae=z.a;return w(a(P,w(C,de(e,Cr)?Vu(ae):bt(ae)),y),k);default:return w(y,k)}}),i=v(function(x,_){var C=_.a,z=_.b;switch(x.$){case 0:var y=x.a;return de(e,Ut),w(a(P,y(e),C),z);case 1:var k=x.a;return de(e,Ut),w(a(P,a(k.gS,On,e),C),yn(z)?k.h_:Y(k.h_,z));case 2:var H=x.a;return w(a(P,de(e,Cr)?Vu(H):bt(H),C),z);default:return w(C,z)}});if(r.$===1){var o=r.a,c=h(er,t,w(D,D),o),l=c.a,u=c.b,f=yn(u)?n.h_:Y(n.h_,u);if(f.b){var m=f;return $c({gS:L(Jt,n.aQ,n.aS,n.aI,Su(h(zu,"nearby-element-pls",l,n.aL))),h_:m})}else return dt(F(Jt,n.aQ,n.aS,n.aI,Su(h(zu,"nearby-element-pls",l,n.aL)),On))}else{var d=r.a,b=h(er,i,w(D,D),d),s=b.a,u=b.b,f=yn(u)?n.h_:Y(n.h_,u);if(f.b){var m=f;return $c({gS:L(Jt,n.aQ,n.aS,n.aI,rr(a(Cu,s,n.aL))),h_:m})}else return dt(F(Jt,n.aQ,n.aS,n.aI,rr(a(Cu,s,n.aL)),On))}}),fr=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Eh=function(e){return{$:10,a:e}},Di=v(function(e,r){return{$:0,a:e,b:r}}),be=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(Di,n,o|t)}else{var i=e.a;return a(Di,i|n,t)}}),ju=function(e){return{$:1,a:e}},qt=v(function(e,r){return{$:3,a:e,b:r}}),Nu=function(e){return{$:2,a:e}},Bh=v(function(e,r){return a(Mn,$([kr(function(){switch(e){case 0:return a(le," ",$([p.be,p.hQ,p.fF]));case 1:return a(le," ",$([p.be,p.hQ,p.fY]));case 2:return a(le," ",$([p.be,p.hQ,p.hn]));case 3:return a(le," ",$([p.be,p.hQ,p.hm]));case 4:return a(le," ",$([p.be,p.hQ,p.gW]));default:return a(le," ",$([p.be,p.hQ,p.fX]))}}())]),$([function(){switch(r.$){case 3:return kn("");case 2:var n=r.a;return bt(n);case 0:var t=r.a;return t(Cr);default:var i=r.a;return a(i.gS,On,Cr)}}()]))}),Rh=M(function(e,r,n){var t=a(Bh,e,r);switch(n.$){case 0:return e===5?ju($([t])):Nu($([t]));case 1:var i=n.a;return e===5?ju(a(P,t,i)):a(qt,i,$([t]));case 2:var o=n.a;return e===5?a(qt,$([t]),o):Nu(a(P,t,o));default:var i=n.a,o=n.b;return e===5?a(qt,a(P,t,i),o):a(qt,i,a(P,t,o))}}),Wu=v(function(e,r){return{$:2,a:e,b:r}}),wn=function(e){return{$:1,a:e}},Zn=v(function(e,r){switch(r.$){case 0:return wn(e);case 1:var n=r.a;return a(Wu,n,e);default:var t=r.a,i=r.b;return a(Wu,t,i)}}),Vh=function(e){switch(e){case 0:return p.cP+(" "+p.d0);case 2:return p.cP+(" "+p.d1);default:return p.cP+(" "+p.fI)}},jh=function(e){switch(e){case 0:return p.cQ+(" "+p.fO);case 2:return p.cQ+(" "+p.fH);default:return p.cQ+(" "+p.fJ)}},rt=v(function(e,r){return a(Wr,qd(e),j$(r))}),Hr=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),xn=function(e){return{$:1,a:e}},Nh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return xn(B(u,0,0));case 1:var f=r.a;return xn(B(0,f,0));case 2:var m=r.a;return xn(B(0,0,m));case 3:var n=r.a;return xn(n);case 4:var n=r.a,s=r.b;return L(Hr,B(0,0,0),B(1,1,1),n,s);default:var n=r.a;return L(Hr,B(0,0,0),n,B(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,m=l.c;switch(r.$){case 0:var t=r.a;return xn(B(t,f,m));case 1:var i=r.a;return xn(B(u,i,m));case 2:var o=r.a;return xn(B(u,f,o));case 3:var n=r.a;return xn(n);case 4:var n=r.a,s=r.b;return L(Hr,l,B(1,1,1),n,s);default:var c=r.a;return L(Hr,l,c,B(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,m=l.c,d=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return L(Hr,B(t,f,m),d,b,s);case 1:var i=r.a;return L(Hr,B(u,i,m),d,b,s);case 2:var o=r.a;return L(Hr,B(u,f,o),d,b,s);case 3:var x=r.a;return L(Hr,x,d,b,s);case 4:var _=r.a,C=r.b;return L(Hr,l,d,_,C);default:var z=r.a;return L(Hr,l,z,b,s)}}}),$a=xe(7),qv=xe(36),Zu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(Di,n|i,t|o)}),vn=a(Di,0,0),dc=function(e){switch(e.$){case 0:var r=e.a,n=T(r),t="height-px-"+n;return B(vn,p.ei+(" "+t),$([h(fr,t,"height",n+"px")]));case 1:return B(a(be,qv,vn),p.c1,D);case 2:var i=e.a;return i===1?B(a(be,gt,vn),p.c2,D):B(a(be,gt,vn),p.ej+(" height-fill-"+T(i)),$([h(fr,p.fR+("."+(p.av+(" > "+S("height-fill-"+T(i))))),"flex-grow",T(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+T(o),m=h(fr,f,"min-height",T(o)+"px !important"),c=dc(u),b=c.a,s=c.b,x=c.c;return B(a(be,fc,b),f+(" "+s),a(P,m,x));default:var l=e.a,u=e.b,f="max-height-"+T(l),m=h(fr,f,"max-height",T(l)+"px"),d=dc(u),b=d.a,s=d.b,x=d.c;return B(a(be,fc,b),f+(" "+s),a(P,m,x))}},Yv=xe(38),pc=function(e){switch(e.$){case 0:var r=e.a;return B(vn,p.fB+(" width-px-"+T(r)),$([h(fr,"width-px-"+T(r),"width",T(r)+"px")]));case 1:return B(a(be,Yv,vn),p.dT,D);case 2:var n=e.a;return n===1?B(a(be,ht,vn),p.dU,D):B(a(be,ht,vn),p.fC+(" width-fill-"+T(n)),$([h(fr,p.fR+("."+(p.ae+(" > "+S("width-fill-"+T(n))))),"flex-grow",T(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+T(t),u=h(fr,l,"min-width",T(t)+"px"),i=pc(c),m=i.a,d=i.b,b=i.c;return B(a(be,sc,m),l+(" "+d),a(P,u,b));default:var o=e.a,c=e.b,l="max-width-"+T(o),u=h(fr,l,"max-width",T(o)+"px"),f=pc(c),m=f.a,d=f.b,b=f.c;return B(a(be,sc,m),l+(" "+d),a(P,u,b))}},Qi=xe(27),Wh=v(function(e,r){if(de(e,Qi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return de(i,c)&&de(i,o)&&de(i,l)&&i>=0&&i<=24;default:return!1}}),va=xe(6),Hu=xe(30),Gu=xe(29),Zh=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var m=l.a,d=l.b;switch(m.$){case 0:var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 3:var _=m.a,b=m.b;if(a(cr,_,n)){var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else{var I=b+(" "+e),E=r,R=a(be,_,n),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}case 1:var s=m.a,I=e,E=r,R=n,V=t,j=i,N=a(P,s,o),W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 4:var _=m.a,x=m.b;if(a(cr,_,n)){var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else if(a(Wh,_,x)){var I=pt(x)+(" "+e),E=r,R=a(be,_,n),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else{var I=pt(x)+(" "+e),E=r,R=a(be,_,n),V=t,j=a(P,x,i),N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}case 10:var _=m.a,C=m.b,I=e,E=r,R=a(be,_,n),V=a(Nh,t,C),j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 7:var z=m.a;if(a(cr,va,n)){var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else switch(z.$){case 0:var y=z.a,I=p.fB+(" width-px-"+T(y))+(" "+e),E=r,R=a(be,va,n),V=t,j=a(P,h(fr,"width-px-"+T(y),"width",T(y)+"px"),i),N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 1:var I=e+(" "+p.dT),E=r,R=a(be,Yv,a(be,va,n)),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 2:var k=z.a;if(k===1){var I=e+(" "+p.dU),E=r,R=a(be,ht,a(be,va,n)),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else{var I=e+(" "+(p.fC+(" width-fill-"+T(k)))),E=r,R=a(be,ht,a(be,va,n)),V=t,j=a(P,h(fr,p.fR+("."+(p.ae+(" > "+S("width-fill-"+T(k))))),"flex-grow",T(k*1e5)),i),N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}default:var H=pc(z),Q=H.a,ae=H.b,ke=H.c,I=e+(" "+ae),E=r,R=a(Zu,Q,a(be,va,n)),V=t,j=Y(ke,i),N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}case 8:var te=m.a;if(a(cr,$a,n)){var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else switch(te.$){case 0:var y=te.a,ie=T(y)+"px",re="height-px-"+ie,I=p.ei+(" "+(re+(" "+e))),E=r,R=a(be,$a,n),V=t,j=a(P,h(fr,re,"height ",ie),i),N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 1:var I=p.c1+(" "+e),E=r,R=a(be,qv,a(be,$a,n)),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 2:var k=te.a;if(k===1){var I=p.c2+(" "+e),E=r,R=a(be,gt,a(be,$a,n)),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else{var I=e+(" "+(p.ej+(" height-fill-"+T(k)))),E=r,R=a(be,gt,a(be,$a,n)),V=t,j=a(P,h(fr,p.fR+("."+(p.av+(" > "+S("height-fill-"+T(k))))),"flex-grow",T(k*1e5)),i),N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}default:var q=dc(te),Q=q.a,ae=q.b,ke=q.c,I=e+(" "+ae),E=r,R=a(Zu,Q,a(be,$a,n)),V=t,j=Y(ke,i),N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}case 2:var pe=m.a;switch(pe.$){case 0:var I=e,E=a(Zn,"main",r),R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 1:var I=e,E=a(Zn,"nav",r),R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 2:var I=e,E=a(Zn,"footer",r),R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 3:var I=e,E=a(Zn,"aside",r),R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 4:var ge=pe.a;if(ge<=1){var I=e,E=a(Zn,"h1",r),R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else if(ge<7){var I=e,E=a(Zn,"h"+T(ge),r),R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else{var I=e,E=a(Zn,"h6",r),R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}case 9:var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 8:var I=e,E=r,R=n,V=t,j=i,N=a(P,a(rt,"role","button"),o),W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 5:var Me=pe.a,I=e,E=r,R=n,V=t,j=i,N=a(P,a(rt,"aria-label",Me),o),W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 6:var I=e,E=r,R=n,V=t,j=i,N=a(P,a(rt,"aria-live","polite"),o),W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;default:var I=e,E=r,R=n,V=t,j=i,N=a(P,a(rt,"aria-live","assertive"),o),W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}case 9:var Se=m.a,me=m.b,ke=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var vo=me.a;return Y(i,vo.h_)}}(),I=e,E=r,R=n,V=t,j=ke,N=o,W=h(Rh,Se,me,c),Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e;case 6:var Ze=m.a;if(a(cr,Hu,n)){var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else{var I=Vh(Ze)+(" "+e),E=r,R=function(se){switch(Ze){case 1:return a(be,Vv,se);case 2:return a(be,Rv,se);default:return se}}(a(be,Hu,n)),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}default:var Wt=m.a;if(a(cr,Gu,n)){var I=e,E=r,R=n,V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}else{var I=jh(Wt)+(" "+e),E=r,R=function(se){switch(Wt){case 1:return a(be,jv,se);case 2:return a(be,Bv,se);default:return se}}(a(be,Gu,n)),V=t,j=i,N=o,W=c,Z=d;e=I,r=E,n=R,t=V,i=j,o=N,c=W,l=Z;continue e}}}else{var u=cl(t);if(u.$===1)return{aI:a(P,kr(e),o),aL:c,aQ:n,aS:r,h_:i};var f=u.a;return{aI:a(P,kr(e+(" "+f)),o),aL:c,aQ:n,aS:r,h_:a(P,Eh(t),i)}}}),Hh={$:0},Gh=Hh,vr=ee(function(e,r,n,t){return h(Ih,e,t,zt(Zh,Xg(e),r,vn,Gh,D,D,Hg,dr(n)))}),fn=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Oh={fV:O,f1:O,hM:J({a2:0,b8:L(fn,155/255,203/255,1,1),e_:w(0,0),bi:3})},Uh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gR;return c.$===1?Ae(i,{gR:J(o)}):i;case 1:var l=t.a,u=i.gE;return u.$===1?Ae(i,{gE:J(l)}):i;default:var f=t.a,m=i.eX;return m.$===1?Ae(i,{eX:J(f)}):i}}),n=function(t){return{gE:function(){var i=t.gE;if(i.$===1)return Oh;var o=i.a;return o}(),gR:function(){var i=t.gR;if(i.$===1)return 1;var o=i.a;return o}(),eX:function(){var i=t.eX;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gE:O,gR:O,eX:O},e))},Jh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(Cr);case 1:var n=r.a.h_,t=r.a.gS;return a(t,e(n),Cr);case 2:var i=r.a;return bt(i);default:return bt("")}}),qh=M(function(e,r,n){var t=Uh(e),i=function(){var o=t.eX;return o===1?Ev(t):Wg(t)}();return a(Jh,i,L(vr,Cr,ta,r,rr($([n]))))}),_t=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Xv=v(function(e,r){return{$:1,a:e,b:r}}),Qv=function(e){return{$:2,a:e}},Yh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),Co=function(e){return{$:3,a:e}},Kv=xe(8),ef=xe(14),rf=xe(5),nf=xe(4),Ta=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Re(r)+("-"+(Re(n)+("-"+(Re(t)+("-"+Re(i))))))},$i=ed,zo=Ks,af=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(le,"-",zo($i(n)));case 4:var n=e.a;return e.b,a(le,"-",zo($i(n)));default:var n=e.a.hi;return a(le,"-",zo($i(n)))}}())}),Xh=function(){var e=$([Co("Open Sans"),Co("Helvetica"),Co("Verdana"),Yh]);return $([a(Ce,Kv,h(_t,"bg-"+Ta(L(fn,1,1,1,0)),"background-color",L(fn,1,1,1,0))),a(Ce,ef,h(_t,"fc-"+Ta(L(fn,0,0,0,1)),"color",L(fn,0,0,0,1))),a(Ce,nf,Qv(20)),a(Ce,rf,a(Xv,h(We,af,"font-",e),e))])}(),Qh=M(function(e,r,n){var t=e.hr;return h(qh,t,a(P,wr(a(le," ",$([p.hF,p.fR,p.hQ]))),Y(Xh,r)),n)}),tf={$:3},of=function(e){return{$:2,a:e}},gc=Od,cf=v(function(e,r){switch(r.$){case 1:var n=r.a;return $c({gS:v(function(o,c){return a(gc,e,a(n.gS,o,c))}),h_:n.h_});case 0:var t=r.a;return dt(a(Dt,gc(e),t));case 2:var i=r.a;return of(i);default:return tf}}),$l=cf,Kh=gc,e3=function(e){return{$:0,a:e}},Te=e3,r3=Jd,qe=r3,lf={$:1},Ki=function(e){return{$:5,a:e}},uf=Ki(0),Zr=M(function(e,r,n){return L(fn,e/255,r/255,n/255,1)}),$f=h(Zr,0,0,0),n3=Wr("d"),a3=Wr("fill"),t3=Wr("height"),vf=B$("http://www.w3.org/2000/svg"),i3=vf("path"),o3=vf("svg"),c3=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fP:i,fZ:t,gH:n,hz:r}},l3=function(e){var r=c3(e);return"rgba("+(T(De(r.hz*255))+(","+T(De(r.gH*255))+(","+T(De(r.fZ*255))+(","+ve(r.fP)+")"))))},u3=Wr("viewBox"),$3=Wr("width"),_a=M(function(e,r,n){return a(o3,$([u3("0 0 100 100"),$3(T(e)),t3(T(e))]),$([a(i3,$([n3(n),a3(l3(r))]),D)]))}),v3={$:1},br=v3,ff=function(e){return{$:7,a:e}},ce=ff,ze=v(function(e,r){return L(vr,Cr,ta,a(P,ce(br),a(P,we(br),e)),rr($([r])))}),mf=function(e){return{$:2,a:e}},_e=mf(1),Jn={gu:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gG:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gN:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hu:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hv:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hy:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hS:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",il:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",io:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fE:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},za={c6:260,bE:54},dn=function(e){return a(Ce,Kv,h(_t,"bg-"+Ta(e),"background-color",e))},f3=xe(28),Tn=function(e){return a(Ce,f3,h(_t,"bc-"+Ta(e),"border-color",e))},vi=1,Dr=v(function(e,r){return L(vr,vi,ta,a(P,wr(p.gj+(" "+p.bt)),a(P,we(br),a(P,ce(br),e))),rr(r))}),m3=h(Zr,83,83,83),sf=ee(function(e,r,n,t){return L(fn,e/255,r/255,n/255,t)}),eo=L(sf,56,56,56,.25),Ye=tf,xt=Oe(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),yt=xe(2),qn=function(e){var r=e;return a(Ce,yt,F(xt,"p-"+T(e),r,r,r,r))},df=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),pf=xe(3),gf=v(function(e,r){return"spacing-"+(T(e)+("-"+T(r)))}),Dn=function(e){return a(Ce,pf,h(df,a(gf,e,e),e,e))},s3=L(sf,0,0,0,0),d3=function(e){return{$:4,a:e}},hc=0,Rn=v(function(e,r){return L(vr,hc,ta,a(P,wr(p.bt+(" "+p.aw)),a(P,ce(br),a(P,we(br),e))),rr(r))}),p3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gS(a(Ev,{gE:{fV:O,f1:O,hM:O},gR:1,eX:0},n.h_));case 2:var t=e.a;return Mi(kn(t));default:return Mi(kn(""))}},g3=v(function(e,r){return p3(e(r))}),h3=Ud,b3=v(function(e,r){return dt(h(h3,g3,e,r))}),Fn=function(e){return a(Ce,ef,h(_t,"fc-"+Ta(e),"color",e))},vl=h(Zr,195,195,195),Vn=v(function(e,r){return{$:3,a:e,b:r}}),hf=xe(13),_3=a(Vn,hf,p.ic),x3=xe(20),bf=a(Vn,x3,p.hK),ia=function(e){return a(Ce,nf,Qv(e))},fl=a(Vn,hf,p.f0),bc=v(function(e,r){if(r.$===-2)return rn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return F(fe,n,t,a(e,t,i),a(bc,e,o),a(bc,e,c))}),_f=v(function(e,r){if(de(e,r)){var n=e;return a(Ce,yt,F(xt,"p-"+T(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,yt,F(xt,"p-"+(T(e)+("-"+T(r))),t,i,t,i))}}),An=function(e){return of(e)},y3=function(e){return h(Yc,M(function(r,n,t){return a(P,n,t)}),D,e)},w3=v(function(e,r){return{$:3,a:e,b:r}}),S3=v(function(e,r){return{$:2,a:e,b:r}}),C3=v(function(e,r){return{$:0,a:e,b:r}}),z3=v(function(e,r){return{$:1,a:e,b:r}}),ro=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),ml=L(ro,0/255,0/255,0/255,1),no=function(e){return{$:6,a:e}},L3=no(0),ao=function(e){return{$:2,a:e}},P3={$:6},xf=ao(P3),yf=M(function(e,r,n){if(r.$===1)return r.a,L(vr,vi,wn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,c=L(vr,Cr,ta,i,rr($([o])));switch(t){case 2:return L(vr,vi,wn("label"),a(P,wr(p.ck),e),rr($([c,n])));case 3:return L(vr,vi,wn("label"),a(P,wr(p.ck),e),rr($([n,c])));case 0:return L(vr,hc,wn("label"),a(P,wr(p.ck),e),rr($([n,c])));default:return L(vr,hc,wn("label"),a(P,wr(p.ck),e),rr($([c,n])))}}),_c=rt,hn=Ki(1),wf="Enter",M3=function(e){return{$:5,a:e}},Sf=function(e){if(e.$===1){var r=e.a;return ao(M3(r))}else return ra},Cf=function(e){return e.$===1},k3=function(e){return{$:0,a:e}},sl=R$,T3=v(function(e,r){return a(sl,e,k3(r))}),zf=function(e){return a(T3,"click",$r(e))},D3=vd,F3=function(e){return{$:2,a:e}},A3=v(function(e,r){return a(sl,e,F3(r))}),Lf=function(e){var r=function(t){var i=e(t);if(i.$===1)return D3("No key matched");var o=i.a;return $r(o)},n=a(K,r,a(X,"key",ka));return Ee(a(A3,"keydown",a(Si,function(t){return w(t,!0)},n)))},I3=xe(21),Yn=a(Vn,I3,p.gm),Pf=" ",Mf=function(e){return a(Wr,"tabIndex",T(e))},E3=a(Dt,Ee,Mf),B3=v(function(e,r){var n=r.er,t=r.gT,i=r.gd,o=r.bI,c=Y($([Cf(n)?ra:Dn(6),Ee(zf(o(!i))),xf,Lf(function(l){return de(l,wf)||de(l,Pf)?J(o(!i)):O}),E3(0),Yn,L3,ce(_e)]),e);return h(yf,a(P,Ee(a(_c,"role","checkbox")),a(P,Ee(a(_c,"aria-checked",i?"true":"false")),a(P,Sf(n),c))),n,L(vr,Cr,ta,$([hn,we(_e),ce(br)]),rr($([t(i)]))))}),R3=M(function(e,r,n){return Y(a(st,e-Un(n),Yi(r)),n)}),Fi=Ds,kf=function(e){var r=function(n){return n<10?T(n):Yi(zv(87+n))};return e<16?r(e):Y(kf(e/16|0),r(a(Fi,16,e)))},V3=a(Ve,kf,a(R3,2,"0")),dl=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fP:i,fZ:t,gH:n,hz:r}},j3=function(e){var r=dl(e),n=r.hz,t=r.gH,i=r.fZ;return a(le,"",a(P,"#",a(ne,a(Ve,De,V3),$([n*255,t*255,i*255]))))},pl=xe(12),Tf=a(Vn,pl,p.h4),xc=no(1),_r=Fs,Vr=function(e){return e*_r/180},N3=function(e){return{$:1,a:e}},gl=v(function(e,r){return{$:10,a:e,b:r}}),W3=xe(26),Z3=function(e){return a(gl,W3,N3(-e))},xa=M(function(e,r,n){return L(fn,e,r,n,1)}),H3=fn,G3=v(function(e,r){return{$:4,a:e,b:r}}),O3=xe(24),U3=function(e){return a(gl,O3,a(G3,B(0,0,1),e))},J3=xe(17),Kn=function(e){return a(Ce,J3,h(fr,"br-"+T(e),"border-radius",T(e)+"px"))},q3=function(e){return Sa($([e.en?"box-inset":"box-",Re(e.e_.a)+"px",Re(e.e_.b)+"px",Re(e.a2)+"px",Re(e.bi)+"px",Ta(e.b8)]))},Y3=xe(19),X3=function(e){var r={a2:e.a2,b8:e.b8,en:!1,e_:e.e_,bi:e.bi};return a(Ce,Y3,h(fr,q3(r),"box-shadow",vc(r)))},Ou=v(function(e,r){return{$:12,a:e,b:r}}),Uu=xe(0),Q3=function(e){return e?a(Ce,Uu,a(Ou,"transparent",1)):a(Ce,Uu,a(Ou,"visible",0))},Lo=h(xa,1,1,1),hl=Oe(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),to=function(e){return a(Ce,Qi,F(hl,"b-"+T(e),e,e,e,e))},K3=v(function(e,r){return a(Ce,Qi,F(hl,"b-"+(T(e)+("-"+T(r))),r,e,r,e))}),Ft=function(e){var r=e.b3,n=e.cK,t=e.ha,i=e.hC;return de(n,r)&&de(t,i)?de(n,i)?to(n):a(K3,t,n):a(Ce,Qi,F(hl,"b-"+(T(n)+("-"+(T(i)+("-"+(T(r)+("-"+T(t))))))),n,i,r,t))},eb=function(e){return a(ze,$([wr("focusable"),ce(Te(14)),we(Te(14)),Fn(Lo),hn,ia(9),Tf,Kn(3),Tn(e?h(xa,59/255,153/255,252/255):h(xa,211/255,211/255,211/255)),X3({a2:1,b8:e?L(H3,238/255,238/255,238/255,0):h(xa,238/255,238/255,238/255),e_:w(0,0),bi:1}),dn(e?h(xa,59/255,153/255,252/255):Lo),to(e?0:1),uc(a(ze,$([Tn(Lo),we(Te(6)),ce(Te(9)),U3(Vr(-45)),xc,hn,Z3(1),Q3(!e),Ft({b3:2,ha:2,hC:0,cK:0})]),Ye))]),Ye)},rb=Ar("htmlFor"),nb=v(function(e,r){if(r.$)return O;var n=r.a;return e(n)}),Ai=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return e(n)}}),Df=ee(function(e,r,n,t){return{gY:r,he:e,hl:n,h$:t}}),ab=xp,tb=cd,ib=v(function(e,r){if(r.$)return tr(e);var n=r.a;return Ge(n)}),ob=_p,cb=function(e){return a(ob,{f9:!1,hh:!1},e)},ja=function(e){if(e.b){var r=e.a;return e.b,J(r)}else return O},lb=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return Ge(e(n))}}),ub=function(e){return{$:2,a:e}},$b=function(e){return{$:0,a:e}},vb=function(e){return{$:1,a:e}},Po=v(function(e,r){return Qr(r)-Qr(e)}),Mo=M(function(e,r,n){var t=Qr(n);return he(Qr(e),t)<1&&he(t,Qr(r))<1}),fb=v(function(e,r){var n=function(i){return he(i,e)<0?Ge(i):tr(vb(r))},t=h(Mo,"0","9",r)?Ge(a(Po,"0",r)):h(Mo,"a","z",r)?Ge(10+a(Po,"a",r)):h(Mo,"A","Z",r)?Ge(10+a(Po,"A",r)):tr($b(r));return a(Ai,n,t)}),Ff=v(function(e,r){var n=Ba(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(Ai,function(c){return a(Ai,function(l){return Ge(c+l*e)},a(Ff,e,o))},a(fb,e,i))}),mb=v(function(e,r){return 2<=e&&e<=36?a(Ff,e,oc(r)):tr(ub(e))}),sb=mb(16),db=M(function(e,r,n){return L(ro,e,r,n,1)}),pb=ee(function(e,r,n,t){return L(ro,e,r,n,t)}),At=Ts,gb=v(function(e,r){var n=a(At,10,e);return De(r*n)/n}),hb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=Cv(n);if(t.b&&!t.b.b){var i=t.a;return tb($([i,i]))}else return n};return a(Ve,$i,a(Ve,function(n){return a(Ne,function(t){return h(ab,1,t,n)},cb(e))},a(Ve,nb(ja),a(Ve,Ne(function(n){return n.h$}),a(Ve,Ne(nn(gr)),a(Ve,ib("Parsing hex regex failed"),Ai(function(n){var t=a(ne,a(Ve,r,a(Ve,sb,lb(Ka))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,m=f.a.a;return Ge(L(pb,i/255,c/255,u/255,a(gb,2,m/255)))}else break e;else{var i=t.a.a,d=t.b,c=d.a.a,b=d.b,u=b.a.a;return Ge(h(db,i/255,c/255,u/255))}else break e;return tr("Parsing ints from hex failed")})))))))}(),bb=Ar("id"),_b=tn("input"),xb=tn("label"),Af=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),yb=Af(0),wb=Ar("name"),Sb=function(e){return w(e,!0)},Cb=function(e){return{$:1,a:e}},zb=v(function(e,r){return a(sl,e,Cb(r))}),Lb=v(function(e,r){return h(er,X,r,e)}),Pb=a(Lb,$(["target","value"]),ka),If=function(e){return a(zb,"input",a(Si,Sb,a(Si,e,Pb)))},Mb=a(Vn,pl,p.h9),Ef=a(Vn,pl,p.id),bl=function(e){return a(Iv,5,e)},_l=function(e){return a(Ce,rf,a(Xv,h(We,af,"ff-",e),e))},kb=h(Zr,195,195,195),Bf=h(Zr,69,69,69),Tb=Af(2),Db={$:2},xl=Db,Fb=xe(32),Ab=xe(31),Ju=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return J(i)}else return O;else{var t=n.a;return J(t)}}),O,e)},Ib=v(function(e,r){return a(Fe,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return J(w(i,c))}else return O;else{var i=t.a;return J(i)}}),O,e))}),qu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return J(i)}else return O;else{var t=n.a;return J(t)}}),O,e)},Eb=xe(33),Bb=Ar("max"),Rb=Ar("min"),Vb=v(function(e,r){return a(Ce,pf,h(df,a(gf,e,r),e,r))}),jb=function(e){return a(Ar,"step",e)},Rf=Ar("type"),Vf=Ar("value"),Da=mf,Nb=Qd,jf=v(function(e,r){switch(r.$){case 0:return ra;case 2:var n=r.a;return ao(n);case 6:var t=r.a;return no(t);case 5:var i=r.a;return Ki(i);case 7:var t=r.a;return ff(t);case 8:var t=r.a;return Fv(t);case 3:var t=r.a,i=r.b;return a(Vn,t,i);case 4:var o=r.a,c=r.b;return a(Ce,o,c);case 9:var l=r.a,u=r.b;return a(Av,l,a(cf,e,u));case 1:var f=r.a;return Ee(a(Nb,e,f));default:var m=r.a,d=r.b;return a(gl,m,d)}}),Wb=M(function(e,r,n){return a(Rn,$([ce(_e),we(a(Fe,_e,n)),hn]),$([a(ze,$([ce(Da(De(e*1e4)))]),Ye),a(ze,a(P,hn,a(ne,jf(Mt),r)),Ye),a(ze,$([ce(Da(De(ye(1-e)*1e4)))]),Ye)]))}),Zb=M(function(e,r,n){return a(Dr,$([we(_e),ce(a(Fe,_e,n)),xc]),$([a(ze,$([we(Da(De(ye(1-e)*1e4)))]),Ye),a(ze,a(P,xc,a(ne,jf(Mt),r)),Ye),a(ze,$([we(Da(De(e*1e4)))]),Ye)]))}),Nf=v(function(e,r){var n=qu(e),t=Ju(e),i=function(){var z=w(n,t);e:for(;;)if(z.a.$===1){if(z.b.$===1)return z.a,z.b,!1;break e}else if(!z.a.a.$&&!z.b.$)switch(z.b.a.$){case 0:var y=z.a.a.a,k=z.b.a.a;return he(k,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cL-r.ct)/(r.cs-r.ct),c=r.ih,l=c,u=Ju(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var z=u.a.a;return T(z)+"px"}(),m=qu(l),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var z=m.a.a;return T(z)+"px"}(),b="thmb-"+(d+("-"+f)),s=$([a(ue,"width",d),a(ue,"height",f)]),x=a(Ib,e,w(5,5)),_=x.a,C=x.b;return h(yf,$([Cf(r.er)?ra:a(Vb,_,C),xf,ce(function(){if(n.$===1)return _e;if(n.a.$){var z=n.a;return z}else return br}()),we(function(){if(t.$===1)return br;if(t.a.$){var z=t.a;return z}else return br}())]),r.er,a(Rn,$([ce(a(Fe,_e,n)),we(a(Fe,Te(20),t))]),$([L(vr,Cr,wn("input"),$([Sf(r.er),a(Ce,Fb,a(ct,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,Eb,a(ct,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,Ab,a(ct,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ee(kr(b+" ui-slide-bar focusable-parent")),Ee(If(function(z){var y=Sv(z);if(y.$===1)return r.bI(0);var k=y.a;return r.bI(k)})),Ee(Rf("range")),Ee(jb(function(){var z=r.cH;if(z.$===1)return"any";var y=z.a;return ve(y)}())),Ee(Rb(ve(r.ct))),Ee(Bb(ve(r.cs))),Ee(Vf(ve(r.cL))),i?Ee(a(_c,"orient","vertical")):ra,ce(i?a(Fe,Te(20),t):a(Fe,_e,n)),we(i?a(Fe,_e,n):a(Fe,Te(20),t))]),rr(D)),a(ze,a(P,ce(a(Fe,_e,n)),a(P,we(a(Fe,Te(20),t)),Y(e,$([bl(i?h(Zb,o,a(P,wr("focusable-thumb"),l),n):h(Wb,o,a(P,wr("focusable-thumb"),l),t))])))),Ye)])))}),Hb=h(xa,.5,.5,.5),Wf=gr,Yu=function(e){var r=e.c5,n=e.cL,t=e.ct,i=e.cs,o=e.cH,c=e.bI;return a(ze,$([ce(_e)]),a(Nf,$([Dn(2),bl(a(ze,$([ce(_e),we(Te(16)),hn,dn(Bf),Kn(4)]),Ye))]),{er:a(Tb,D,a(Rn,$([ce(_e)]),$([a(ze,$([Mb]),An(r)),a(ze,$([ce(_e),Ef,_l($([xl]))]),An(ve(n)))]))),cs:i,ct:t,bI:c,cH:J(o),ih:Wf($([ce(Te(12)),we(Te(12)),Kn(4),to(0),Tn(Hb),dn(kb)])),cL:n}))},Gb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ob=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(B3,D,{gd:c,gT:eb,er:a(yb,D,An(e)),bI:w3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return Yu({c5:e,cs:o,ct:i,bI:C3(e),cH:.001*(o-i),cL:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return Yu({c5:e,cs:o,ct:i,bI:a(Ve,De,z3(e)),cH:1,cL:c});default:var c=r.a;return a(ze,$([ce(_e)]),Sn(a(Mn,D,$([a(Mn,$([a(qe,"margin-bottom","6px")]),$([a(xb,$([rb(e)]),$([Ca(e)]))])),a(_b,$([Rf("color"),a(qe,"width","100%"),a(qe,"height","26px"),a(qe,"padding","0px"),bb(e),wb(e),If(function(l){return a(S3,e,a(Gb,ml,hb(l)))}),Vf(j3(c))]),D)]))))}}),yc=h(Zr,255,255,255),Ub=function(e){return a(Dr,$([ce(_e),Dn(8),a(_f,0,14),Ft({b3:1,ha:0,hC:0,cK:0}),Tn(eo)]),$([a(ze,$([ia(16),fl,Fn(yc)]),An(e.hi)),a(Dr,$([ce(_e),Dn(6)]),y3(a(bc,Ob,e.aM)))]))},Jb=function(e){return a(Dr,$([ce(_e),we(_e),Fn(vl),ia(12),_3,bf]),a(ne,Ub,e))},qb=b3(Jb),Yb=function(e){return a(Dr,$([ce(_e),we(_e)]),$([a(Rn,$([Dn(14),ce(_e)]),D),a($l,d3,qb(aa(e).gi))]))},Xb=function(e){return{$:6,a:e}},Qb=ee(function(e,r,n,t){return"pad-"+(T(e)+("-"+(T(r)+("-"+(T(n)+("-"+T(t)))))))}),Kb=function(e){var r=e.cK,n=e.hC,t=e.b3,i=e.ha;if(de(r,n)&&de(r,t)&&de(r,i)){var o=r;return a(Ce,yt,F(xt,"p-"+T(r),o,o,o,o))}else return a(Ce,yt,F(xt,L(Qb,r,n,t,i),r,n,t,i))},e1=function(e){return{$:0,a:e}},r1=function(e){return{$:1,a:e}},n1=r1,a1=function(e){var r=e.b.W;return ea(r)},Ii=h(Zr,255,60,0),t1=function(e){var r=e.b.W;e.b.r;var n=e.b.am;return ea(r)+1+ea(n)},i1=function(e){var r=w(a1(e),t1(e)-1),n=r.a,t=r.b;return a(ze,$([ce(_e),hn]),a(Nf,$([bl(a(Rn,$([ce(_e),we(Te(4)),hn,dn(Bf),Kn(2)]),$([a(ze,$([ce(Da(n)),we(_e),dn(Ii),Kn(2)]),Ye),a(ze,$([ce(Da(t-n))]),Ye)])))]),{er:n1(""),cs:t,ct:0,bI:a(Ve,De,e1),cH:J(1),ih:Wf($([ce(Te(12)),we(Te(12)),Kn(6),dn(Ii)])),cL:n}))},o1=no(2),fi=h(Zr,220,220,220),c1=function(e){var r=e.a,n=function(){return r.$?$([Fn(fi)]):$([Fn(Ii)])}();return a(ze,Y(n,$([ia(14),o1,Ef,_l($([xl]))])),An(a(kv,3,aa(e).b6)))},l1=function(e){e.a;var r=e.b.W;return a(Ne,function(n){return De(60/(aa(e).b6-n))},a(Ne,a(Ve,sv,function(n){return n.b6}),ja(a(_v,59,r))))},u1=function(e){var r=l1(e);if(r.$===1)return Ye;var n=r.a;return a(ze,$([ia(14),Fn(vl),_l($([xl]))]),An(T(n)+" FPS"))},Xu={$:1},$1={$:3},v1={$:2},f1={$:8},m1=F$,s1=v(function(e,r){return a(Zc,e,m1(r))}),d1=s1("disabled"),p1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},g1=function(e){return a(Ra,p1,e)?ra:wr("focusable")},Ei=a(Dt,Ee,zf),Zf=v(function(e,r){var n=r.e$,t=r.er;return L(vr,Cr,ta,a(P,ce(br),a(P,we(br),a(P,wr(p.cc+(" "+(p.aw+(" "+(p.hL+(" "+p.eZ)))))),a(P,Yn,a(P,g1(e),a(P,ao(f1),a(P,Ee(Mf(0)),function(){if(n.$===1)return a(P,Ee(d1(!0)),e);var i=n.a;return a(P,Ei(i),a(P,Lf(function(o){return de(o,wf)||de(o,Pf)?J(i):O}),e))}()))))))),rr($([t])))}),Qu=v(function(e,r){return a(Zf,D,{er:a(ze,$([ce(Te(36)),qn(3),Fn(r),Tf,ia(12),fl,Tn(r),to(1),Kn(4)]),An("REC")),e$:J(e)})}),Ku=M(function(e,r,n){return a(Zf,D,{er:Sn(h(_a,20,n,e)),e$:J(r)})}),h1=function(e){var r=e.a;e.b.W,e.b.r;var n=e.b.am;return a(Rn,D,$([a(ze,$([ce(Te(40))]),function(){switch(r.$){case 0:return a(Qu,Xu,Ii);case 1:return a(Qu,v1,fi);default:return Ye}}()),a(ze,$([ce(Te(28))]),function(){switch(r.$){case 0:return Ye;case 1:return yn(n)?Ye:h(Ku,Jn.hv,$1,fi);default:return h(Ku,Jn.hu,Xu,fi)}}())]))},b1=function(e){return a(Dr,$([ce(_e)]),$([i1(e),a(Rn,$([ce(_e),Dn(14),a(_f,0,6),hn]),$([h1(e),u1(e),c1(e)]))]))},_1=function(e){return a(Dr,$([ce(_e),Dn(14),Kb({b3:20,ha:0,hC:0,cK:0}),Ft({b3:1,ha:0,hC:0,cK:0}),Tn(eo)]),$([a(ze,$([ia(16),fl,Fn(vl)]),An("Time Travel")),a($l,Xb,b1(e))]))},x1=v(function(e,r){return a(Dr,$([aa(r).cF.ir>600?dn(m3):dn(s3),Ft({b3:0,ha:0,hC:1,cK:0}),Tn(eo),ce(Te(za.c6)),we(_e)]),$([function(){return e?Ye:a(Dr,$([ce(_e),we(_e),qn(14),Dn(14)]),$([_1(r),Yb(r)]))}()]))}),y1=function(e){return{$:3,a:e}},e$=Ki(2),w1=h(Zr,232,78,50),S1=h(Zr,48,48,48),C1=function(e){return a(Ar,"href",Xd(e))},z1=Wr("rel"),L1=Ar("target"),r$=v(function(e,r){var n=r.fu,t=r.er;return L(vr,Cr,wn("a"),a(P,Ee(C1(n)),a(P,Ee(z1("noopener noreferrer")),a(P,Ee(L1("_blank")),a(P,ce(br),a(P,we(br),a(P,wr(p.cc+(" "+(p.aw+(" "+p.ey)))),e)))))),rr($([t])))}),nt=Ar("title"),P1=h(Zr,31,161,242),M1=function(e){var r=M(function(o,c,l){var u=de(c,e)?yc:S1;return a(ze,$([$n(nt(o)),Ei(y1(c)),Yn,qn(7)]),Sn(h(_a,40,u,l)))}),n=a(Dr,$([uf]),$([h(r,"Configurations",0,Jn.hS)])),t=a(Dr,D,$([a(r$,$([$n(nt("Twitter")),e$,Yn,qn(7)]),{er:Sn(h(_a,40,P1,Jn.il)),fu:"https://twitter.com/AzizErkalSelman"}),a(r$,$([$n(nt("Source Code")),e$,Yn,qn(7)]),{er:Sn(h(_a,40,w1,Jn.gG)),fu:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(ze,$([ce(Te(za.bE)),qn(4),Ei(lf),Ft({b3:1,ha:0,hC:0,cK:0}),Tn(eo),Yn,$n(nt("Activate Distraction Free Mode"))]),Sn(h(_a,46,yc,Jn.fE)));return a(Dr,$([ce(Te(za.bE)),we(_e),bf,dn($f)]),$([i,n,t]))},k1=function(e){var r=a(ze,$([ce(Te(za.bE)),uf,qn(4),Ei(lf),Yn,$n(nt("Deactivate Distraction Free Mode (A)"))]),Sn(h(_a,46,$f,Jn.fE)));return e.bw?r:a(Rn,$([ce(Te(za.bE+za.c6)),we(_e)]),$([M1(e.bp),a(x1,e.bp,e.Q)]))},T1=M(function(e,r,n){var t=Rg(n.Q),i=aa(n.Q);return h(Qh,{hr:$([jg({fV:O,f1:O,hM:O})])},$([ce(Te(ft(i.cF.ir))),we(Te(ft(i.cF.gO))),$n(a(qe,"-webkit-font-smoothing","antialiased")),$n(a(qe,"pointer-events","none")),$n(a(qe,"touch-action","none")),$n(a(qe,"user-select","none")),uc(a($l,Eg,a(r,i,t))),uc(k1(n))]),Sn(a(Kh,Mi(Bg),a(e,i,t))))}),D1=zr(function(e,r,n,t,i,o){var c=v(function(u,f){return w(L(kg,r,o,u,f),wu)}),l=function(u){var f=a(pv,n,u.g3);return w({bp:0,bw:!0,Q:a(Tg,f,t),dS:0},wu)};return X0({gZ:l,h0:Ig,$9:c,ip:a(T1,e,i)})}),F1=ee(function(e,r,n,t){return ar(D1,e,r,n,t,v(function(i,o){return Ye}),M(function(i,o,c){return c}))}),Hf={$:0},un=v(function(e,r){return{$:0,a:e,b:r}}),lr=v(function(e,r){return{$:0,a:e,b:r}}),A1=$([a(un,w(-1,1),a(lr,2,0)),a(un,w(-1,0),a(lr,2,0)),a(un,w(-1,-1),a(lr,2,0)),a(un,w(0,-1),a(lr,2,0)),a(un,w(0,1),a(lr,2,0)),a(un,w(1,1),a(lr,2,0)),a(un,w(1,0),a(lr,2,0)),a(un,w(1,-1),a(lr,2,0))]),I1=function(e){return{aW:Hf,bX:A1}},Yt=v(function(e,r){return w(e,yv(r))}),E1=M(function(e,r,n){return{aM:n,g6:r,hi:e}}),B1=function(e){return h(We,v(function(r,n){var t=r.a,i=r.b;return h(wa,t,i,n)}),ol,e)},R1=M(function(e,r,n){return h(E1,e,r,B1(n))}),ko=R1,Hn=M(function(e,r,n){var t=r.a,i=r.b;return w(e,a(wv,w(t,i),n))}),To=function(e){return e/255},Xt=M(function(e,r,n){return L(ro,To(e),To(r),To(n),1)}),V1=$([h(ko,"Camera",!0,$([h(Hn,"camera distance",w(3,20),10),h(Hn,"camera azimuth",w(-_r,_r),0),h(Hn,"camera elevation",w(-_r/2,_r/2),0)])),h(ko,"Parameters",!0,$([h(Hn,"cubes side length",w(.5,1),.9),h(Hn,"duration of rolling animation",w(.1,1),.25)])),h(ko,"Colors and light",!0,$([a(Yt,"color 1",h(Xt,244,88,67)),a(Yt,"color 2",h(Xt,47,41,43)),a(Yt,"board color",h(Xt,223,224,226)),a(Yt,"background color",h(Xt,165,166,169)),h(Hn,"sunlight azimuth",w(-_r,_r),2),h(Hn,"sunlight elevation",w(-_r,0),-2)]))]),j1=v(function(e,r){return a(Ne,function(n){if(n.$)return 0;var t=n.b;return t},a(Tt,e,r.aM))}),N1=v(function(e,r){return a(Fe,0,ja(a(nn,j1(e),r)))}),W1=v(function(e,r){return a(N1,e,r.gi)}),pn=W1,an=function(e){return e},ya=function(e){return an(_r*(e/180))},Gf=function(e){return e},jr=function(e){return e},Bi=function(e){var r=e;return-r},Z1=v(function(e,r){var n=e,t=r;return{it:n.ix*t.dZ-n.dZ*t.ix,ix:n.dZ*t.it-n.it*t.dZ,dZ:n.it*t.ix-n.ix*t.it}}),Of=function(e){var r=e;return r.dX},Uf=function(e){var r=e;return r.dY},H1=function(e){return a(Z1,Of(e),Uf(e))},Na=function(e){var r=e;return r.dp},Fa=As,Aa=Is,mi=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Fa(c),u=Aa(c),f=t.gt,m=f,d=m.it*u,b=l*d,s=d*d,x=m.ix*u,_=l*x,C=d*x,z=x*x,y=1-2*(s+z),k=m.dZ*u,H=l*k,Q=2*(C-H),ae=2*(C+H),te=d*k,ie=2*(te+_),re=2*(te-_),q=x*k,pe=2*(q-b),ge=2*(q+b),Me=k*k,Se=1-2*(z+Me),me=1-2*(s+Me);return{it:Se*o.it+Q*o.ix+ie*o.dZ,ix:ae*o.it+me*o.ix+pe*o.dZ,dZ:re*o.it+ge*o.ix+y*o.dZ}}),It=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Fa(c),u=Aa(c),f=t.dp,m=f,d=o.it-m.it,b=o.ix-m.ix,s=o.dZ-m.dZ,x=t.gt,_=x,C=_.it*u,z=l*C,y=C*C,k=_.ix*u,H=l*k,Q=C*k,ae=k*k,te=1-2*(y+ae),ie=_.dZ*u,re=l*ie,q=2*(Q-re),pe=2*(Q+re),ge=C*ie,Me=2*(ge+H),Se=2*(ge-H),me=k*ie,ke=2*(me-z),I=2*(me+z),E=ie*ie,R=1-2*(ae+E),V=1-2*(y+E);return{it:m.it+R*d+q*b+Me*s,ix:m.ix+pe*d+V*b+ke*s,dZ:m.dZ+Se*d+I*b+te*s}}),oa=function(e){return e},ca=function(e){var r=e;return r.dX},la=function(e){var r=e;return r.dY},ua=function(e){var r=e;return r.d_},Jf=M(function(e,r,n){return oa({dp:h(It,e,r,Na(n)),dX:h(mi,e,r,ca(n)),dY:h(mi,e,r,la(n)),d_:h(mi,e,r,ua(n))})}),n$=M(function(e,r,n){return h(Jf,e(n),r,n)}),yl=function(e){var r=e;return r.gt},Wa=v(function(e,r){var n=e,t=r;return{it:t.it+n.it,ix:t.ix+n.ix,dZ:t.dZ+n.dZ}}),qf=v(function(e,r){return oa({dp:a(Wa,e,Na(r)),dX:ca(r),dY:la(r),d_:ua(r)})}),G1=v(function(e,r){var n=e,t=r;return{it:n*t.it,ix:n*t.ix,dZ:n*t.dZ}}),O1=M(function(e,r,n){return a(qf,a(G1,r,e),n)}),U1=M(function(e,r,n){return h(O1,yl(e(n)),r,n)}),Nr=v(function(e,r){return{gt:r,dp:e}}),J1=function(e){var r=e;return a(Nr,r.dp,r.dX)},q1=function(e){var r=e;return a(Nr,r.dp,r.dY)},Y1=function(e){var r=e;return a(Nr,r.dp,r.d_)},X1=function(e){var r=oa({dp:e.ba,dX:Uf(e.eh),dY:H1(e.eh),d_:Of(e.eh)}),n=h(U1,Y1,e.c$,h(n$,J1,Bi(e.ce),h(n$,q1,e.b0,r)));return n},Q1=function(e){return{$:0,a:e}},or=function(e){var r=e;return ye(r)},si=function(e){var r=e;return .5*r},K1=Es,e_=function(e){var r=e;return K1(r)},r_=function(e){var r=si(or(e.fx)),n=e_(r);return{dB:Q1(n),dR:e.dR}},jn={it:0,ix:0,dZ:0},Yf=gr,Kr=function(e){return e},Xf=Kr({it:1,ix:0,dZ:0}),io=Xf,wl=Kr({it:0,ix:0,dZ:1}),Et=wl,n_=Yf({dp:jn,dX:Et,dY:io}),a_=function(e){var r=e.ba,n=e.b0,t=e.ce,i=e.c$;return r_({fx:ya(40),dR:X1({b0:an(n),c$:jr(i),ce:an(t),ba:Gf(r),eh:n_})})},Qf=function(e){return a_({b0:a(pn,"camera azimuth",e),c$:a(pn,"camera distance",e),ce:a(pn,"camera elevation",e),ba:{it:0,ix:0,dZ:0}})},t_={$:0},i_={$:1},o_=v(function(e,r){return{$:2,a:e,b:r}}),c_=function(e){return Ra(function(r){var n=r.a;return de(e,n)})},l_=function(e){var r=e.a,n=e.b;return he(r,-1)>-1&&r<=1&&he(n,-1)>-1&&n<=1},u_=v(function(e,r){var n=r.a,t=r.b;switch(e){case 0:return w(n,t+1);case 1:return w(n,t-1);case 2:return w(n-1,t);default:return w(n+1,t)}}),Kf=function(e){return e?0:1},Qt=function(e){var r=e.a,n=e.b;switch(r){case 0:return a(lr,r,n);case 1:return a(lr,2,n);default:return a(lr,1,Kf(n))}},Kt=function(e){var r=e.a,n=e.b;switch(r){case 0:return a(lr,2,Kf(n));case 1:return a(lr,r,n);default:return a(lr,0,n)}},$_=function(e){switch(e){case 0:return a(Ve,Qt,a(Ve,Qt,Qt));case 1:return Qt;case 2:return a(Ve,Kt,a(Ve,Kt,Kt));default:return Kt}},v_=v(function(e,r){var n=r.a,t=r.b;return a(un,a(u_,e,n),a($_,e,t))}),f_=v(function(e,r){var n=e.a,t=ja(a(nn,function(l){var u=a(v_,l,e),f=u.a;return a(c_,f,r)||!l_(f)?O:J(w(u,l))},$([0,1,2,3])));if(t.$===1)return i_;var i=t.a,o=i.a,c=i.b;return a(o_,c,a(P,o,a(Xi,function(l){var u=l.a;return!de(u,n)},r)))}),m_=v(function(e,r){var n=function(o){var c=o.a;return de(c,e)},t=ja(a(Xi,n,r));if(t.$===1)return t_;var i=t.a;return a(f_,i,r)}),s_=function(e){return{$:1,a:e}},d_=Oe(function(e,r,n,t,i){var o=i.aW;return o.$?i:Ae(i,{aW:s_({dl:t,fe:n,fk:r,dK:e.b6})})}),p_=M(function(e,r,n){var t=e.it,i=e.ix,o=w(De(t),De(i)),c=a(m_,o,n.bX);switch(c.$){case 0:return n;case 1:return n;default:var l=c.a,u=c.b;return F(d_,r,o,l,u,n)}}),g_=M(function(e,r,n){return{it:e,ix:r,dZ:n}}),ei=function(e){return e},di=function(e){var r=e;return r},h_=v(function(e,r){var n=e,t=r;return t.it*n.it+t.ix*n.ix+t.dZ*n.dZ}),je=v(function(e,r){var n=r;return e*n}),em=function(e){var r=e;return r.dp},b_=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=n.hk,l=c;return(t.it-o.it)*l.it+(t.ix-o.ix)*l.ix+(t.dZ-o.dZ)*l.dZ}),__=M(function(e,r,n){var t=e,i=r,o=n;return{it:o.it+i*t.it,ix:o.ix+i*t.ix,dZ:o.dZ+i*t.dZ}}),x_=v(function(e,r){var n=yl(r),t=e,i=t.hk,o=a(h_,i,n);if(o){var c=em(r),l=a(b_,e,c),u=a(je,-1/o,l);return J(h(__,n,u,c))}else return O}),y_=v(function(e,r){return{it:e,ix:r}}),a$=v(function(e,r){var n=e,t=r;return n*t}),w_=function(e){var r=e;return r},t$=function(e){var r=e;return w_(r.fU)},S_=function(e){var r=e;return r.a4},Xn=Ws,C_=function(e){var r=e,n=a(pr,ye(r.it),a(pr,ye(r.ix),ye(r.dZ)));if(n){var t=r.dZ/n,i=r.ix/n,o=r.it/n,c=Xn(o*o+i*i+t*t);return J({it:o/c,ix:i/c,dZ:t/c})}else return O},rm=v(function(e,r){var n=r;return n/e}),wc=function(e){var r=e;return Na(r)},Sl=Kr({it:0,ix:0,dZ:-1}),z_=v(function(e,r){var n=e,t=r;return t/n}),L_=v(function(e,r){var n=e,t=r,i=n.d_,o=i,c=n.dY,l=c,u=n.dX,f=u;return{it:f.it*t.it+l.it*t.ix+o.it*t.dZ,ix:f.ix*t.it+l.ix*t.ix+o.ix*t.dZ,dZ:f.dZ*t.it+l.dZ*t.ix+o.dZ*t.dZ}}),wt=function(e){var r=e;return{it:-r.it,ix:-r.ix,dZ:-r.dZ}},Sc=function(e){var r=e;return wt(ua(r))},P_=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=n.dX,l=c;return(t.it-o.it)*l.it+(t.ix-o.ix)*l.ix}),Cl=M(function(e,r,n){var t=e,i=r,o=n;return{it:t,ix:i,dZ:o}}),M_=ee(function(e,r,n,t){var i=e,o=r,c=n,l=t,u=i.dp,f=u,m=i.d_,d=m,b=i.dY,s=b,x=i.dX,_=x;return{it:f.it+o*_.it+c*s.it+l*d.it,ix:f.ix+o*_.ix+c*s.ix+l*d.ix,dZ:f.dZ+o*_.dZ+c*s.dZ+l*d.dZ}}),k_=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=n.dY,l=c;return(t.it-o.it)*l.it+(t.ix-o.ix)*l.ix}),qr=0,T_=M(function(e,r,n){var t=e,i=a(k_,t$(r),n),o=a(P_,t$(r),n),c=t.dR,l=c,u=S_(r);u.a;var f=u.b,m=t.dB;if(m.$){var x=m.a,_=a(z_,f,x),C=L(M_,l,a(a$,_,o),a(a$,_,i),qr);return a(Nr,C,Sc(t.dR))}else{var d=m.a,b=Bi(a(rm,d,a(je,.5,f))),s=a(L_,l,a(Fe,Sl,C_(h(Cl,o,i,b))));return a(Nr,wc(t.dR),s)}}),Cc=function(e){var r=e;return{it:Fa(r),ix:Aa(r)}},D_=function(e){var r=e;return{it:-r.ix,ix:r.it}},F_=function(e){return e},A_=v(function(e,r){return F_({dp:r,dX:e,dY:D_(e)})}),I_=v(function(e,r){return a(A_,Cc(e),r)}),E_=M(function(e,r,n){var t=e.a,i=e.b;return{fU:a(I_,r,n),a4:w(or(t),or(i))}}),zn=function(e){var r=e;return r.it},B_=v(function(e,r){var n=e,t=r;return{it:n,ix:t}}),Ln=function(e){var r=e;return r.ix},Pn=function(e){var r=e;return r.dZ},R_=ee(function(e,r,n,t){var i=n.it,o=n.ix,c=function(f){return h(g_,di(zn(f)),di(Ln(f)),di(Pn(f)))},l=h(E_,w(ei(r.ir),ei(r.gO)),ya(0),a(y_,0,0)),u=a(B_,ei(i),ei(o));return a(Ne,c,a(x_,t,h(T_,e,l,u)))}),V_=v(function(e,r){return{hk:e,dp:r}}),j_=v(function(e,r){var n=r;return a(V_,n.hk,a(Wa,e,n.dp))}),N_=v(function(e,r){return{hk:r,dp:e}}),W_=a(N_,jn,Et),Z_=ee(function(e,r,n,t){return L(R_,r,n,t,a(j_,h(Cl,jr(0),jr(0),jr(e)),W_))}),H_=v(function(e,r){if(e.dz.eo){var n=L(Z_,a(pn,"cubes side length",e),Qf(e),e.cF,e.dz);if(n.$===1)return r;var t=n.a;return h(p_,t,e,r)}else return r}),G_=v(function(e,r){var n=r.aW;if(n.$){var t=n.a.dK,i=n.a.dl;return he(e.b6-t,a(pn,"duration of rolling animation",e))>0?Ae(r,{aW:Hf,bX:i}):r}else return r}),O_=v(function(e,r){return a(G_,e,a(H_,e,r))}),U_=tn("br"),J_=a(Mn,$([a(qe,"position","absolute"),a(qe,"width","100%"),a(qe,"font-size","20px"),a(qe,"text-align","center")]),$([a(mc,D,$([Ca("Eight Rolling Cubes Puzzle"),a(U_,D,D),Ca("by John Harris")])),a(mc,D,$([Ca("Can you make all the red faces look down with the center cell vacant?")]))])),zl=v(function(e,r){return{$:0,a:e,b:r}}),Do=v(function(e,r){var n=e,t=r;return he(t,n)>-1}),Fo=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),gn=v(function(e,r){var n=e,t=r;return t-n}),q_=Kr({it:-1,ix:0,dZ:0}),Y_=Kr({it:0,ix:-1,dZ:0}),nm=Kr({it:0,ix:1,dZ:0}),Qe=M(function(e,r,n){var t=e,i=r,o=n;return{it:t,ix:i,dZ:o}}),X_=zr(function(e,r,n,t,i,o){var c=a(Do,n,o)?wl:Sl,l=a(Do,r,i)?nm:Y_,u=a(Do,e,t)?Xf:q_,f=B(or(a(gn,e,t)),or(a(gn,r,i)),or(a(gn,n,o))),m=h(Qe,a(Fo,e,t),a(Fo,r,i),a(Fo,n,o)),d=oa({dp:m,dX:u,dY:l,d_:c});return{fU:d,a4:f}}),Q_=v(function(e,r){return ar(X_,zn(e),Ln(e),Pn(e),zn(r),Ln(r),Pn(r))}),zc=M(function(e,r,n){return{it:e,ix:r,dZ:n}}),Ri=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=B(n/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(zl,e,a(Q_,h(zc,-c,-l,-u),h(zc,c,l,u)))}),K_=v(function(e,r){return a(Ne,function(n){if(n.$===2){var t=n.a;return t}else return ml},a(Tt,e,r.aM))}),e2=v(function(e,r){return a(Fe,ml,ja(a(nn,K_(e),r)))}),r2=v(function(e,r){return a(e2,e,r.gi)}),Vi=r2,Ll=function(e){return{$:5,a:e}},Pl=function(e){return Ll(e)},Lc=function(e){return{$:0,a:e}},am=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),tm=M(function(e,r,n){return he(n,e)<0?e:he(n,r)>0?r:n}),Ao=function(e){return h(tm,0,1,e<=.04045?e/12.92:a(At,(e+.055)/1.055,2.4))},Bt=Sp,n2=function(e){var r=dl(e),n=r.hz,t=r.gH,i=r.fZ;return h(Bt,Ao(n),Ao(t),Ao(i))},ji=function(e){return h(am,0,Lc(n2(e)),Lc(0))},im=v(function(e,r){return{$:2,a:e,b:r}}),om=v(function(e,r){return{$:4,a:e,b:r}}),cm=v(function(e,r){return{$:3,a:e,b:r}}),lm=v(function(e,r){return{$:1,a:e,b:r}}),a2=M(function(e,r,n){return{it:e,ix:r,dZ:n}}),t2=function(e){var r=e;return r},Ml=function(e){var r=e;return t2(r.fU)},kl=function(e){var r=e;return r.a4},i2=v(function(e,r){return{fU:a(qf,e,Ml(r)),a4:kl(r)}}),o2=v(function(e,r){var n=r;return a(Nr,a(Wa,e,n.dp),n.gt)}),c2=v(function(e,r){var n=r;return{m:a(o2,e,n.m),hb:n.hb,hx:n.hx}}),Tl=function(e){var r=e;return r},l2=function(e){return e},um=v(function(e,r){var n=Tl(r),t=n.a,i=n.b;return l2(w(e(t),e(i)))}),u2=v(function(e,r){return a(um,Wa(e),r)}),Dl=function(e){var r=e;return r.gb},Fl=function(e){var r=e;return r.hx},$m=v(function(e,r){return{gb:r,hx:or(e)}}),$2=v(function(e,r){return a($m,Fl(r),a(Wa,e,Dl(r)))}),vm=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return B(e(t),e(i),e(o))}),v2=v(function(e,r){return a(vm,Wa(e),r)}),oo=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(a2,n,t,i);switch(r.$){case 0:var m=r.a,c=r.b;return a(zl,m,a(i2,o,c));case 1:var m=r.a,l=r.b;return a(lm,m,a(v2,o,l));case 3:var m=r.a,u=r.b;return a(cm,m,a($2,o,u));case 2:var m=r.a,f=r.b;return a(im,m,a(c2,o,f));case 4:var m=r.a,d=r.b;return a(om,m,a(u2,o,d));default:var b=r.a;return Ll(a(ne,oo(B(n,t,i)),b))}}),fm=function(e){return oo(B(e,0,0))},pi=function(e){return oo(B(0,0,e))},f2=M(function(e,r,n){return{fU:h(Jf,e,r,Ml(n)),a4:kl(n)}}),m2=v(function(e,r){var n=a(It,e,r),t=a(mi,e,r);return function(i){var o=i;return a(Nr,n(o.dp),t(o.gt))}}),s2=M(function(e,r,n){var t=n;return{m:h(m2,e,r,t.m),hb:t.hb,hx:t.hx}}),d2=M(function(e,r,n){return a(um,a(It,e,r),n)}),p2=M(function(e,r,n){return a($m,Fl(n),h(It,e,r,Dl(n)))}),g2=M(function(e,r,n){return a(vm,a(It,e,r),n)}),Rt=M(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(zl,l,h(f2,e,r,t));case 1:var l=n.a,i=n.b;return a(lm,l,h(g2,e,r,i));case 3:var l=n.a,o=n.b;return a(cm,l,h(p2,e,r,o));case 2:var l=n.a,c=n.b;return a(im,l,h(s2,e,r,c));case 4:var l=n.a,u=n.b;return a(om,l,h(d2,e,r,u));default:var f=n.a;return Ll(a(ne,a(Rt,e,r),f))}}),h2=a(Nr,jn,Et),Io=v(function(e,r){return h(Rt,h2,an(e),r)}),b2=function(e){var r=a(Vi,"board color",e),n=a(fm,-1.55,a(Ri,ji(r),B(.1,3.2,.2))),t=a(pi,-.5,a(Ri,ji(r),B(3,3,1)));return Pl($([n,a(Io,Vr(90),n),a(Io,Vr(180),n),a(Io,Vr(270),n),t]))},_2=function(e){return oo(B(0,e,0))},x2=v(function(e,r){var n=e.a,t=e.b,i=t.a,o=t.b,c=t.c;return a(Rt,a(Nr,Gf(n),Kr({it:i,ix:o,dZ:c})),an(r))}),y2=M(function(e,r,n){var t=r.aW;if(t.$){var i=t.a.dK,o=t.a.fk,c=t.a.fe;if(t.a.dl,de(o,n)){var l=a(pn,"duration of rolling animation",e),u=(e.b6-i)/l,f=u,m=a(Qn,Vr(90),f*Vr(90)),d=function(){switch(c){case 0:return w({it:.5,ix:.5,dZ:-.5},B(-1,0,0));case 1:return w({it:-.5,ix:-.5,dZ:-.5},B(1,0,0));case 2:return w({it:-.5,ix:.5,dZ:-.5},B(0,-1,0));default:return w({it:.5,ix:-.5,dZ:-.5},B(0,1,0))}}();return a(x2,d,m)}else return gr}else return gr}),w2=a(Nr,jn,io),Eo=v(function(e,r){return h(Rt,w2,an(e),r)}),Al=nm,S2=a(Nr,jn,Al),i$=v(function(e,r){return h(Rt,S2,an(e),r)}),C2=M(function(e,r,n){var t=n.a,i=t.a,o=t.b,c=n.b,l=a(pn,"cubes side length",e),u=function(){if(c.b)switch(c.a){case 2:return c.a,c.b,Eo(Vr(180));case 1:return c.a,c.b,Eo(Vr(90));default:return c.a,c.b,i$(-Vr(90))}else switch(c.a){case 2:return c.a,c.b,gr;case 1:return c.a,c.b,Eo(-Vr(90));default:return c.a,c.b,i$(Vr(90))}}(),f=a(Vi,"color 2",e),m=a(Vi,"color 1",e),d=a(pi,l/4,a(Ri,ji(m),B(l,l,l/2))),b=a(pi,-(l/4),a(Ri,ji(f),B(l,l,l/2)));return a(_2,o,a(fm,i,a(pi,l/2,L(y2,e,r,w(i,o),u(Pl($([d,b])))))))}),z2=v(function(e,r){return Pl(a(ne,a(C2,e,r),r.bX))}),L2=function(e){return e},P2=function(e){return jr(.01*e)},o$=function(e){return e},M2=function(e){return e},k2=function(e){return{$:0,a:e}},T2=k2,D2={$:3},F2=D2,A2=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),I2=A2,E2=function(e){return{$:1,a:e}},B2=E2,R2=function(e){return a(Wr,"height",T(e))},V2=Jv,j2=function(e){return{$:2,a:e}},N2=j2,W2=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return De(l*1e3)/1e3},c=function(l){return De(l*1e4)/100};return Sa($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(t)),"%,",ve(o(i)),")"]))},Z2=v(function(e,r){switch(r.$){case 0:return a(f0,e,r);case 1:return a(m0,e,r);case 2:return a(s0,e,r);case 3:return a(d0,e,r);case 4:return a(p0,e,r);default:return a(g0,e,r)}}),H2=v(function(e,r){switch(r.$){case 0:return a(Wp,e,r);case 1:return a(Zp,e,r);case 2:return a(Hp,e,r);case 3:return a(Gp,e,r);case 4:return a(Op,e,r);case 5:return a(Up,e,r);case 6:return a(Jp,e,r);case 7:return a(qp,e,r);default:return Yp(e)}}),G2=M(function(e,r,n){return h(v0,e,r,n)}),c$=function(e){var r=e;return r},Za=kp,Bo=L(Za,1,1,1,1),Gr=M(function(e,r,n){return a(ne,function(t){return a(t,r,n)},e)}),O2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),U2=v(function(e,r){var n=e,t=r.it,i=r.ix;return h(O2,n*t/i,n,n*(1-t-i)/i)}),J2=function(e){var r=e.a,n=e.b,t=e.c;return h(Bt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},Il=v(function(e,r){return J2(a(U2,e,r))}),mm=v(function(e,r){return{ep:de(e.ep,r.ep),s:e.s*r.s+e.t*r.v+e.u*r.y,t:e.s*r.t+e.t*r.w+e.u*r.z,u:e.s*r.u+e.t*r.x+e.u*r.A,v:e.v*r.s+e.w*r.v+e.x*r.y,w:e.v*r.t+e.w*r.w+e.x*r.z,x:e.v*r.u+e.w*r.x+e.x*r.A,y:e.y*r.s+e.z*r.v+e.A*r.y,z:e.y*r.t+e.z*r.w+e.A*r.z,A:e.y*r.u+e.z*r.x+e.A*r.A,J:r.J+(e.J*r.s+e.K*r.v+e.L*r.y)*r.cE,K:r.K+(e.J*r.t+e.K*r.w+e.L*r.z)*r.cE,L:r.L+(e.J*r.u+e.K*r.x+e.L*r.A)*r.cE,cE:e.cE*r.cE}}),Yr=Ep,q2=function(e){return Yr({ez:e.s,eA:e.v,eB:e.y,eC:e.J,eD:e.t,eE:e.w,eF:e.z,eG:e.K,eH:e.u,eI:e.x,eJ:e.A,eK:e.L,eL:0,eM:0,eN:0,eO:1})},Ro=Oe(function(e,r,n,t,i){var o=t.ep?1:-1,c=L(Za,t.cE,t.cE,t.cE,o);return ar(i,e,c,q2(t),t.ep,r,n)}),sm=zr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,m=n,d=a(mm,c,t),b=l,s=o;e=u,r=f,n=m,t=d,i=b,o=s;continue e;case 1:var x=i.b,_=a(P,F(Ro,e,r,n,t,x),o.O);return{O:_,Z:o.Z,hN:o.hN};case 3:var C=i.b,z=a(P,F(Ro,e,r,n,t,C),o.Z);return{O:o.O,Z:z,hN:o.hN};case 2:var y=i.a,k=a(P,F(Ro,e,r,n,t,y),o.hN);return{O:o.O,Z:o.Z,hN:k};default:var H=i.a;return h(We,L(sm,e,r,n,t),o,H)}}),Y2=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),dm=Y2,El=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),X2=function(e){var r=e.ah,n=e.ab,t=e.aa;return L(El,518,r,n,t)},Q2=v(function(e,r){return{$:6,a:e,b:r}}),K2=Q2,pm=$([X2({aa:1,ab:0,ah:!1}),L(dm,!1,!1,!1,!1),a(K2,0,1)]),Ia=519,Bl=8,gm=15,La=7681,ex={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Be=Np,rx=v(function(e,r){return{$:0,a:e,b:r}}),nx=rx({d9:1,em:0,eX:5}),yr=yp,ax=nx($([{cz:a(yr,-1,-1)},{cz:a(yr,1,-1)},{cz:a(yr,-1,1)},{cz:a(yr,1,1)}])),tx={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cz"},uniforms:{}},ix=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:m}}}}}}}}}}}},Rl=M(function(e,r,n){var t=e.dC,i=e.df,o=e.dW,c=v(function(f,m){var d=f;return m(d)}),l=v(function(f,m){var d=f;return m(d)}),u=function(f){return a(Ve,c(f.bO),a(Ve,l(f.bz),a(Ve,l(f.bY),l(f.bZ))))};return a(u,n,a(u,r,h(ix,t,i,o)))}),Vl=function(e){return h(Rl,{df:e.df,dC:e.dC,dW:e.dW},{bz:e.bz,bO:e.bO,bY:e.bY,bZ:e.bZ},{bz:e.bz,bO:e.bO,bY:e.bY,bZ:e.bZ})},jl=function(e){return F(Be,$([Vl(e),L(dm,!1,!1,!1,!1)]),tx,ex,ax,{})},ox=jl({bz:La,df:0,dC:Bl,bO:Ia,dW:gm,bY:La,bZ:La}),cx=516,l$=5386,ir=7680,lx=function(e){return a(At,2,e+4)},hm=function(e){return jl({bz:ir,df:gm,dC:Bl,bO:cx,dW:lx(e),bY:l$,bZ:l$})},ux=M(function(e,r,n){return hr($([h(Gr,e,n,pm),$([hm(r),ox])]))}),$x=v(function(e,r){return hr(a(lv,ux(e),r))}),vx=function(e){var r=e.ah,n=e.ab,t=e.aa;return L(El,513,r,n,t)},fx=vx({aa:1,ab:0,ah:!0}),mx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},sx=function(e){var r=e.cB,n=e.ch,t=e.b1,i=e.b_,o=e.b8,c=e.fP,l=v(function(u,f){var m=u.a,d=u.b,b=u.c,s=f.a,x=f.b,_=f.c;return mx(m)(d)(b)(s)(x)(_)(r)(n)(t)(i)});return a(l,o,c)},dx=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),u$=v(function(e,r){var n=e,t=r;return h(dx,32774,n,t)}),px=1,$$=771,gx=770,Nl=sx({b_:0,fP:a(u$,px,$$),b1:0,b8:a(u$,gx,$$),ch:0,cB:0}),fa=$([fx,Nl]),hx=function(e){var r=e;return r.eQ},bx=function(e){var r=e;return r.eR},bm=function(e){var r=e;return r.eS},_x=function(e){var r=e;return r.eT},xx=function(e){var r=e;return r.eU},_m=function(e){var r=e;return r.eV},xm=function(e){return B(a(gn,_x(e),hx(e)),a(gn,xx(e),bx(e)),a(gn,_m(e),bm(e)))},yx=function(e){return e},wx=function(e){return oa({dp:yx({it:e.J,ix:e.K,dZ:e.L}),dX:Kr({it:e.s,ix:e.t,dZ:e.u}),dY:Kr({it:e.v,ix:e.w,dZ:e.x}),d_:Kr({it:e.y,ix:e.z,dZ:e.A})})},Vo=v(function(e,r){var n=e,t=r,i=n.d_,o=i,c=n.dY,l=c,u=n.dX,f=u;return{it:t.it*f.it+t.ix*f.ix+t.dZ*f.dZ,ix:t.it*l.it+t.ix*l.ix+t.dZ*l.dZ,dZ:t.it*o.it+t.ix*o.ix+t.dZ*o.dZ}}),ym=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=t.it-o.it,l=t.ix-o.ix,u=t.dZ-o.dZ,f=n.d_,m=f,d=n.dY,b=d,s=n.dX,x=s;return{it:c*x.it+l*x.ix+u*x.dZ,ix:c*b.it+l*b.ix+u*b.dZ,dZ:c*m.it+l*m.ix+u*m.dZ}}),wm=v(function(e,r){return{dp:a(ym,e,Na(r)),dX:a(Vo,e,ca(r)),dY:a(Vo,e,la(r)),d_:a(Vo,e,ua(r))}}),Ni=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(pr,n,t)}),Je=v(function(e,r){var n=e,t=r;return a(Qn,n,t)}),Sx=v(function(e,r){var n=Ni(r),t=Ni(e);return{eQ:a(He,t.eQ,n.eQ),eR:a(He,t.eR,n.eR),eS:a(He,t.eS,n.eS),eT:a(Je,t.eT,n.eT),eU:a(Je,t.eU,n.eU),eV:a(Je,t.eV,n.eV)}}),Fr=function(e){var r=e;return r},Cx=function(e){var r=e;return B(r.it,r.ix,r.dZ)},lt=v(function(e,r){var n=e,t=r;return t+n}),zx=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=si(or(t)),c=si(or(n)),l=si(or(i)),u=Cx(r),f=u.a,m=u.b,d=u.c;return{eQ:a(lt,c,f),eR:a(lt,o,m),eS:a(lt,l,d),eT:a(gn,c,f),eU:a(gn,o,m),eV:a(gn,l,d)}}),v$=ee(function(e,r,n,t){var i=n.gb,o=2*n.gM*r,c=2*n.gL*r,l=2*n.gK*r,u=i.dZ*r,f=i.ix*r,m=i.it*r,d=Fr(ua(e)),b=ye(l*d.it)+ye(c*d.ix)+ye(o*d.dZ),s=Fr(la(e)),x=ye(l*s.it)+ye(c*s.ix)+ye(o*s.dZ),_=Fr(ca(e)),C=ye(l*_.it)+ye(c*_.ix)+ye(o*_.dZ),z=a(zx,B(C,x,b),a(ym,e,h(zc,m,f,u)));if(t.$)return J(z);var y=t.a;return J(a(Sx,y,z))}),Pc=ee(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,x=r,_=n,C=o;e=s,r=x,n=_,t=C;continue e;case 1:var c=i.a,l=L(v$,e,r,c,n),s=e,x=r,_=l,C=o;e=s,r=x,n=_,t=C;continue e;case 2:var s=e,x=r,_=n,C=o;e=s,r=x,n=_,t=C;continue e;case 3:var c=i.a,l=L(v$,e,r,c,n),s=e,x=r,_=l,C=o;e=s,r=x,n=_,t=C;continue e;case 4:var u=i.a,s=e,x=r,_=L(Pc,e,r,n,u),C=o;e=s,r=x,n=_,t=C;continue e;default:var f=i.a,m=i.b,d=a(wm,wx(f),e),b=r*f.cE,s=e,x=r,_=L(Pc,d,b,n,$([m])),C=o;e=s,r=x,n=_,t=C;continue e}}else return n}),Ha=Cp,Ga=zp,Oa=Lp,Sm=function(e){return{$:4,a:e}},Lx=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),Vt=function(e){return Sm(a(Lx,e,D))},Px={ep:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:0,K:0,L:0,cE:1},f$=jl({bz:La,df:0,dC:Bl,bO:Ia,dW:255,bY:La,bZ:La}),Mx=function(e){var r=e,n=a(pr,ye(r.it),a(pr,ye(r.ix),ye(r.dZ)));if(n){var t=r.dZ/n,i=r.ix/n,o=r.it/n,c=Xn(o*o+i*i+t*t);return c*n}else return qr},ur={b1:0,ga:!1,ch:0,dy:0,cB:0,dO:0,it:0,ix:0,dZ:0},Pr=v(function(e,r){var n=e,t=r;return Yr({ez:n.it,eA:n.cB,eB:t.it,eC:t.cB,eD:n.ix,eE:n.ch,eF:t.ix,eG:t.ch,eH:n.dZ,eI:n.b1,eJ:t.dZ,eK:t.b1,eL:n.dO,eM:n.dy,eN:t.dO,eO:t.dy})}),at=w({bF:a(Pr,ur,ur),co:a(Pr,ur,ur),cp:a(Pr,ur,ur),cq:a(Pr,ur,ur)},L(Za,0,0,0,0)),Cm=514,zm=function(e){var r=e.ah,n=e.ab,t=e.aa;return L(El,515,r,n,t)},Lm=240,kx=$([zm({aa:1,ab:0,ah:!0}),Vl({bz:ir,df:Lm,dC:0,bO:Cm,dW:0,bY:ir,bZ:ir}),Nl]),Tx=v(function(e,r){var n=e,t=r.hj,i=r.gC,o=r.fT,c=or(t),l=c,u=or(i),f=u,m=n.dB;if(m.$){var b=m.a;return tc(f)?Yr({ez:2/(o*b),eA:0,eB:0,eC:0,eD:0,eE:2/b,eF:0,eG:0,eH:0,eI:0,eJ:0,eK:-1,eL:0,eM:0,eN:0,eO:1}):Yr({ez:2/(o*b),eA:0,eB:0,eC:0,eD:0,eE:2/b,eF:0,eG:0,eH:0,eI:0,eJ:-2/(f-l),eK:-(f+l)/(f-l),eL:0,eM:0,eN:0,eO:1})}else{var d=m.a;return tc(f)?Yr({ez:1/(o*d),eA:0,eB:0,eC:0,eD:0,eE:1/d,eF:0,eG:0,eH:0,eI:0,eJ:-1,eK:-2*l,eL:0,eM:0,eN:-1,eO:0}):Yr({ez:1/(o*d),eA:0,eB:0,eC:0,eD:0,eE:1/d,eF:0,eG:0,eH:0,eI:0,eJ:-(f+l)/(f-l),eK:-2*f*l/(f-l),eL:0,eM:0,eN:-1,eO:0})}}),ri=v(function(e,r){return(1&e>>r)===1?0:1}),Dx=function(e){return $([zm({aa:1,ab:0,ah:!0}),Vl({bz:ir,df:Lm,dC:e,bO:Cm,dW:0,bY:ir,bZ:ir}),Nl])},Fx=M(function(e,r,n){return hr(a(ne,function(t){var i=t<<4,o=L(Za,a(ri,t,0),a(ri,t,1),a(ri,t,2),a(ri,t,3));return h(Gr,e,w(r,o),Dx(i))},a(sn,1,a(At,2,n)-1)))}),Pa=function(e){var r=e;return r},Ax=Bp,Ix={dp:jn,dX:io,dY:Al,d_:Et},co=function(e){var r=e;return r},Ex=function(e){var r=co(Na(e)),n=Fr(ua(e)),t=Fr(la(e)),i=Fr(ca(e));return Yr({ez:i.it,eA:t.it,eB:n.it,eC:r.it,eD:i.ix,eE:t.ix,eF:n.ix,eG:r.ix,eH:i.dZ,eI:t.dZ,eJ:n.dZ,eK:r.dZ,eL:0,eM:0,eN:0,eO:1})},Bx=v(function(e,r){var n=r;return Ex(a(wm,n,e))}),Rx=function(e){return a(Bx,Ix,e)},Vx=function(e){var r=e;return r.dR},jx=function(e){var r=e;return ca(r)},Nx=function(e){var r=e;return la(r)},Wx=function(e){var r=Vx(e.f7),n=oa({dp:wc(r),dX:jx(r),dY:Nx(r),d_:wt(Sc(r))}),t=Vt(e.a8),i=t,o=L(Pc,n,1,O,$([i]));if(o.$===1)return D;var c=o.a,l=Rx(r),u=a(je,.99,a(He,or(e.a3),Bi(bm(c)))),f=xm(c),m=f.a,d=f.b,b=f.c,s=Mx(h(Cl,m,d,b)),x=a(je,1.01,a(lt,s,Bi(_m(c)))),_=a(Tx,e.f7,{fT:e.fT,gC:x,hj:u}),C=Ax(_).eO,z=C?Fr(wt(Sc(r))):Pa(wc(r)),y=function(){var me=e.cJ;switch(me.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var ke=me.a;return w(3,ke);case 4:var ke=me.a;return w(4,ke);default:return w(5,0)}}(),k=y.a,H=y.b,Q=e.cf,ae=Q,te=a(Il,ae,e.cN),ie=te,re=Yr({ez:0,eA:z.it,eB:Ha(ie),eC:e.fm,eD:0,eE:z.ix,eF:Ga(ie),eG:di(s),eH:0,eI:z.dZ,eJ:Oa(ie),eK:k,eL:0,eM:C,eN:0,eO:H}),q=ar(sm,re,l,_,Px,i,{O:D,Z:D,hN:D}),pe=e.cn;switch(pe.$){case 0:var ge=pe.a;return hr($([h(Gr,q.O,w(ge,Bo),fa),h(Gr,q.Z,at,fa)]));case 1:var ge=pe.a;return hr($([h(Gr,q.O,at,fa),$([f$]),h(Gr,q.hN,ge.bF,pm),$([hm(0)]),h(Gr,q.O,w(ge,Bo),kx),h(Gr,q.Z,at,fa)]));default:var Me=pe.a,Se=pe.b;return hr($([h(Gr,q.O,w(Se,Bo),fa),$([f$]),a($x,q.hN,Me),h(Fx,q.O,Se,ea(Me)),h(Gr,q.Z,at,fa)]))}},Zx=function(e){return a(Wr,"width",T(e))},Hx=v(function(e,r){var n=$([B2(1),N2(0),T2(!0),L(I2,0,0,0,0)]),t=function(){var k=e.cR;switch(k.$){case 0:return B(n,"0",1);case 1:return B(a(P,F2,n),"1",1);default:var H=k.a;return B(n,"0",H)}}(),i=t.a,o=t.b,c=t.c,l=e.a4,u=l.a,f=l.b,m=c$(f),d=a(qe,"height",T(m)+"px"),b=c$(u),s=b/m,x=a(Va,function(k){return Wx({fT:s,f7:e.f7,a3:e.a3,a8:k.a8,cf:k.cf,cn:k.cn,fm:c,cJ:k.cJ,cN:k.cN})},r),_=a(qe,"width",T(b)+"px"),C=e.a1,z=C,y=W2(z);return h(V2,"div",$([a(qe,"padding","0px"),_,d]),$([w(o,h(G2,i,$([Zx(De(b*c)),R2(De(m*c)),_,d,a(qe,"display","block"),a(qe,"background-color",y)]),x))]))}),Gx=function(e){return a(Hx,{cR:e.cR,a1:e.a1,f7:e.f7,a3:e.a3,a4:e.a4},$([{a8:e.a8,cf:e.cf,cn:e.cn,cJ:e.cJ,cN:e.cN}]))},Pm=function(e){return e},m$=Pm({it:.31271,ix:.32902}),Ox=v(function(e,r){var n=e,t=Fr(r.gt),i=t.it,o=t.ix,c=t.dZ,l=a(Il,r.c3,r.cW),u=l;return{b1:Oa(u),ga:n,ch:Ga(u),dy:0,cB:Ha(u),dO:1,it:-i,ix:-o,dZ:-c}}),Ux=function(e){return e},Jx=function(e){return Ux(1.2*a(At,2,e))},jo=function(e){return e},qx={$:0},Yx=qx,Mm=function(e){return e},Xx=v(function(e,r){var n=e,t=r;return he(t,n)>0}),s$=function(e){var r=e;return r},Qx=function(e){e:for(;;){if(de(e.g4,qr)&&de(e.g5,qr))return ur;if(a(Xx,or(e.g4),or(e.g5))){var r={cW:e.cW,g4:e.g5,g5:e.g4,ft:wt(e.ft)};e=r;continue e}else{var n=ye(s$(e.g5)/_r),t=ye(s$(e.g4)/_r),i=Fr(e.ft),o=i.it,c=i.ix,l=i.dZ,u=a(Il,Mm(1),e.cW),f=u;return{b1:t*Oa(f),ga:!1,ch:t*Ga(f),dy:n/t,cB:t*Ha(f),dO:3,it:o,ix:c,dZ:l}}}},d$=function(e){return Qx({cW:e.cW,g4:e.c3,g5:qr,ft:e.ft})},Kx=function(e){var r=e;return r},km=function(e){var r=h(tm,1667,25e3,Kx(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Pm({it:n,ix:t})},Tm=function(e){return e},ey=km(Tm(12e3)),ry=km(Tm(5600)),ny=function(e){return{$:2,a:e}},ay=function(e){return ny(e)},ty=v(function(e,r){return{$:2,a:e,b:r}}),Dm=function(e){return{$:0,a:e}},ni=function(e){var r=e;return r},iy=function(e){var r=e;return r.ga},oy=Dm(at.a),cy=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?w(a(P,t,o),c):w(o,a(P,t,c))});return h(er,n,w(D,D),r)}),ly=function(e){var r=e;return Yr({ez:r.it,eA:r.cB,eB:0,eC:0,eD:r.ix,eE:r.ch,eF:0,eG:0,eH:r.dZ,eI:r.b1,eJ:0,eK:0,eL:r.dO,eM:r.dy,eN:0,eO:0})},uy=Pe(function(e,r,n,t,i,o,c,l){var u=a(cy,iy,$([ni(e),ni(r),ni(n),ni(t)])),f=u.a,m=u.b;if(f.b){var d=Y(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,s=d.b,x=s.a,_=s.b,C=_.a,z=_.b,y=z.a;return a(ty,a(ne,ly,f),{bF:a(Pr,b,x),co:a(Pr,C,y),cp:a(Pr,i,o),cq:a(Pr,c,l)})}else return oy}else return Dm({bF:a(Pr,e,r),co:a(Pr,n,t),cp:a(Pr,i,o),cq:a(Pr,c,l)})}),$y=M(function(e,r,n){return zt(uy,e,r,n,ur,ur,ur,ur,ur)}),vy=function(e){var r=a(Ox,M2(e.hN),{cW:ry,gt:e.h2,c3:jo(8e4)}),n=d$({cW:ey,c3:jo(2e4),ft:e.ft}),t=d$({cW:m$,c3:jo(15e3),ft:wt(e.ft)}),i=h($y,r,n,t);return Gx({cR:ay(e.c_),a1:e.a1,f7:e.f7,a3:e.a3,a4:e.a4,a8:e.a8,cf:Jx(15),cn:i,cJ:Yx,cN:m$})},Fm=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),fy=ee(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Am=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Im=ee(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),my=ee(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),sy=ee(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),dy=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Wl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(dy,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(Fm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L(fy,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(Am,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(sy,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L(Im,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(my,n,t,i,1);case 8:return e;case 9:return e;default:return e}},Zl={$:0},py=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,m=Ni(c(u)),d=a(Je,m.eT,e),b=a(He,m.eQ,r),s=a(Je,m.eU,n),x=a(He,m.eR,t),_=a(Je,m.eV,i),C=a(He,m.eS,o),z=c,y=f;e=d,r=b,n=s,t=x,i=_,o=C,c=z,l=y;continue e}else return{eQ:r,eR:t,eS:o,eT:e,eU:n,eV:i}}),gy=M(function(e,r,n){var t=Ni(e(r));return zt(py,t.eT,t.eQ,t.eU,t.eR,t.eV,t.eS,e,n)}),No=v(function(e,r){var n=e,t=r;return he(t,n)<1}),Em=function(e){return a(No,e.eQ,e.eT)&&a(No,e.eR,e.eU)&&a(No,e.eS,e.eV)?e:{eQ:a(He,e.eT,e.eQ),eR:a(He,e.eU,e.eR),eS:a(He,e.eV,e.eS),eT:a(Je,e.eT,e.eQ),eU:a(Je,e.eU,e.eR),eV:a(Je,e.eV,e.eS)}},St=function(e){var r=e;return r},Bm=function(e){var r=St(e),n=r.a,t=r.b,i=r.c,o=zn(n),c=Ln(n),l=Pn(n),u=zn(t),f=Ln(t),m=Pn(t),d=zn(i),b=Ln(i),s=Pn(i);return Em({eQ:a(He,o,a(He,u,d)),eR:a(He,c,a(He,f,b)),eS:a(He,l,a(He,m,s)),eT:a(Je,o,a(Je,u,d)),eU:a(Je,c,a(Je,f,b)),eV:a(Je,l,a(Je,m,s))})},Rm=Pp,mr=function(e){return Rm(co(e))},Vm=function(e){var r=e;return r},lo=function(e){return Rm(Vm(e))},hy=v(function(e,r){var n=e,t=r;return{it:t.ix*n.dZ-t.dZ*n.ix,ix:t.dZ*n.it-t.it*n.dZ,dZ:t.it*n.ix-t.ix*n.it}}),Mc=v(function(e,r){var n=e,t=r;return{it:t.it-n.it,ix:t.ix-n.ix,dZ:t.dZ-n.dZ}}),by={it:0,ix:0,dZ:0},_y=v(function(e,r){var n=e,t=r,i=a(pr,ye(t.it),a(pr,ye(t.ix),ye(t.dZ)));if(i){var o=t.dZ/i,c=t.ix/i,l=t.it/i,u=Xn(l*l+c*c+o*o);return{it:n*l/u,ix:n*c/u,dZ:n*o/u}}else return by}),xy=_y(Mm(1)),jm=M(function(e,r,n){var t=a(Mc,r,n),i=a(Mc,e,r);return xy(a(hy,t,i))}),yy=function(e){var r=St(e),n=r.a,t=r.b,i=r.c,o=lo(h(jm,n,t,i));return B({p:o,cz:mr(n)},{p:o,cz:mr(t)},{p:o,cz:mr(i)})},wy=v(function(e,r){return{$:2,a:e,b:r}}),Nm=wy({d9:3,em:0,eX:4}),Sy=function(e){if(e.b){var r=e.a,n=e.b,t=Nm(a(ne,yy,e)),i=h(gy,Bm,r,n);return L(Fm,i,e,t,0)}else return Zl},Lr=M(function(e,r,n){return B(e,r,n)}),Wm=function(){var e=jr(1),r=jr(1),n=jr(1),t=a(je,-.5,e),i=a(je,-.5,r),o=a(je,-.5,n),c=h(Qe,o,i,t),l=a(je,.5,e),u=h(Qe,o,i,l),f=a(je,.5,r),m=h(Qe,o,f,t),d=h(Qe,o,f,l),b=a(je,.5,n),s=h(Qe,b,i,t),x=h(Qe,b,f,t),_=h(Qe,b,i,l),C=h(Qe,b,f,l);return Wl(Sy($([h(Lr,c,x,s),h(Lr,c,m,x),h(Lr,u,_,C),h(Lr,u,C,d),h(Lr,s,x,C),h(Lr,s,C,_),h(Lr,c,d,m),h(Lr,c,u,d),h(Lr,c,s,_),h(Lr,c,_,u),h(Lr,m,C,x),h(Lr,m,d,C)])))}(),ai={$:0},Cy=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zy=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),f=lo(h(jm,u,l,c)),m={p:f,cz:mr(u)},d={p:f,cz:mr(l)},b={p:f,cz:mr(c)};return a(P,m,a(P,d,a(P,b,n)))}),Hl=function(e){var r=e;return r.G},Ly=ee(function(e,r,n,t){if(r.$===1)return O;var i=r.a;if(n.$===1)return O;var o=n.a;if(t.$===1)return O;var c=t.a;return J(h(e,i,o,c))}),kc=4294967295>>>32-mt,Tc=Cs,Py=M(function(e,r,n){e:for(;;){var t=kc&r>>>e,i=a(Tc,t,n);if(i.$){var f=i.a;return a(Tc,kc&r,f)}else{var o=i.a,c=e-mt,l=r,u=o;e=c,r=l,n=u;continue e}}}),My=function(e){return e>>>5<<5},ky=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||he(e,n)>-1?O:he(e,My(n))>-1?J(a(Tc,kc&e,o)):J(h(Py,t,e,i))}),Gl=function(e){var r=e;return r.at},Wo=v(function(e,r){return a(ky,e,Gl(r))}),Ty=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(Ly,M(function(c,l,u){return B(c,l,u)}),a(Wo,t,e),a(Wo,i,e),a(Wo,o,e))};return a(nn,r,Hl(e))},Dy=M(function(e,r,n){e:for(;;){var t=a(el,Sr,e),i=t.a,o=t.b;if(he(nc(i),Sr)<0)return a(dv,!0,{B:r,n,q:i});var c=o,l=a(P,mv(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Ol=function(e){return e.b?h(Dy,e,D,0):vv},Fy=v(function(e,r){return!a(Ra,a(Dt,Q0,e),r)}),Ay=function(e){var r=e.a;return r},Zm=v(function(e,r){var n=Ay(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&he(o,n)<0&&c>=0&&he(c,n)<0&&l>=0&&he(l,n)<0};return a(Fy,t,r)?{G:r,at:e}:{G:a(Xi,t,r),at:e}}),Iy=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jt=Iy({d9:1,em:3,eX:4}),gi=v(function(e,r){var n=Pa(r),t=Pa(e);return w(B(t.it,t.ix,t.dZ),B(n.it,n.ix,n.dZ))}),p$=h(Bt,0,0,0),Zo=zr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Tt,a(gi,e,r),i);if(f.$){var d={p:p$,cz:mr(r)},b={p:p$,cz:mr(e)},s=u+1,x=u;return B(a(P,B(n,x,s),a(P,B(n,s,t),c)),a(P,d,a(P,b,l)),u+2)}else{var m=f.a;return B(a(P,B(n,m,t),c),l,u)}}),Ey=Oe(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,m=e(u),d=e(l),b=e(c),s=t+2,x=t+1,_=t,C=e,z=r,y=f,k=t+3,H=ar(Zo,m,b,s,_,r,ar(Zo,d,m,x,s,r,ar(Zo,b,d,_,x,r,i)));e=C,r=z,n=y,t=k,i=H;continue e}else{var Q=i,ae=Q.a,te=Q.b;return w(ae,dr(te))}}),By=Oe(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,m=e(u),d=e(l),b=e(c),s=n+2,x=n+1,_=n,C=h(wa,a(gi,b,m),s,h(wa,a(gi,m,d),x,h(wa,a(gi,d,b),_,i))),z=a(P,B(_,x,s),t),y=e,k=f,H=n+3,Q=z,ae=C;e=y,r=k,n=H,t=Q,i=ae;continue e}else return B(t,i,n)}),Gn=M(function(e,r,n){var t=Ty(n),i=h(er,zy(r),D,t),o=F(By,r,t,0,D,ol),c=o.a,l=o.b,u=o.c,f=F(Ey,r,l,t,0,B(c,D,u)),m=f.a,d=f.b,b=yn(d)?i:Y(i,d);return h(Cy,e,a(Zm,Ol(b),m),a(jt,b,m))}),Dc=function(e){return{G:a(ne,function(r){return B(3*r,3*r+1,3*r+2)},a(sn,0,ea(e)-1)),at:Ol(hr(a(ne,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},Hm=function(e){switch(e.$){case 0:return ai;case 1:var t=e.a,r=e.b,n=a(ne,St,r);return h(Gn,t,gr,Dc(n));case 2:var t=e.a,r=e.b,n=a(ne,St,r);return h(Gn,t,gr,Dc(n));case 3:var t=e.a,i=e.b;return h(Gn,t,gr,i);case 4:var t=e.a,i=e.b;return h(Gn,t,function(o){return o.cz},i);case 5:var t=e.a,i=e.b;return h(Gn,t,function(o){return o.cz},i);case 6:var t=e.a,i=e.b;return h(Gn,t,function(o){return o.cz},i);case 7:var t=e.a,i=e.b;return h(Gn,t,function(o){return o.cz},i);case 8:return ai;case 9:return ai;default:return ai}},g$=Hm(Wm),Gm={$:0},G=Gm,Ke=v(function(e,r){return{$:1,a:e,b:r}}),Ry={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b9"}},Vy=1029,jy=function(e){return{$:5,a:e}},Om=function(e){var r=e;return jy(r)},Ny=Om(Vy),Wy=1028,Zy=Om(Wy),sr=M(function(e,r,n){return r===1?e?a(P,Ny,n):a(P,Zy,n):n}),Um={src:`
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
    `,attributes:{position:"cz",uv:"N"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ho=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,d){return F(Be,h(sr,l,t,d),Um,Ry,n,{b9:e,c,d:o,e:f,f:i,g:u})}))}),Ul={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aN"}},Jm={src:`
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
    `,attributes:{position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},cn=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,d){return F(Be,h(sr,l,t,d),Jm,Ul,n,{aN:e,c,d:o,e:f,f:i,g:u})}))}),qm=v(function(e,r){return{$:3,a:e,b:r}}),Hy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aN",pointRadius:"cy",sceneProperties:"f"}},Ym={src:`
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
    `,attributes:{position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cy",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Gy=ee(function(e,r,n,t){return a(qm,n,Pe(function(i,o,c,l,u,f,m,d){return F(Be,d,Ym,Hy,t,{aN:e,c,d:o,cy:r,e:f,f:i,g:u})}))}),Jl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Nt=function(e){var r=e;return r},uo=Mp,ln=Oe(function(e,r,n,t,i){return a(Ke,n,Pe(function(o,c,l,u,f,m,d,b){return F(Be,h(sr,u,i,b),Jm,Jl,t,{a6:a(uo,Nt(r),e),c:l,d:c,e:m,f:o,g:f})}))}),Oy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cy",sceneProperties:"f"}},Uy=Oe(function(e,r,n,t,i){return a(qm,t,Pe(function(o,c,l,u,f,m,d,b){return F(Be,b,Ym,Oy,i,{a6:a(uo,Nt(r),e),c:l,d:c,cy:n,e:m,f:o,g:f})}))}),Xm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",materialColor:"dg",sceneProperties:"f",viewMatrix:"g"}},Qm={src:`
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
    `,attributes:{normal:"p",position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ti=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return F(Be,h(sr,l,t,d),Qm,Xm,n,{T:s,bF:b.bF,co:b.co,cp:b.cp,cq:b.cq,dg:e,c,d:o,e:f,f:i,g:u})}))}),Km={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",materialColorTexture:"dh",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},es={src:`
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
    `,attributes:{normal:"p",position:"cz",tangent:"fo",uv:"N"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Jy=zr(function(e,r,n,t,i,o){return a(Ke,t,Pe(function(c,l,u,f,m,d,b,s){var x=b.a,_=b.b;return F(Be,h(sr,f,o,s),es,Km,i,{T:_,bF:x.bF,co:x.co,cp:x.cp,cq:x.cq,dh:e,c:u,d:l,bg:r,e:d,f:c,bm:n,g:m})}))}),rs={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cV",constantBaseColor:"cX",constantMetallic:"cY",constantRoughness:"cZ",enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",metallicTexture:"dk",normalMapTexture:"bg",roughnessTexture:"dG",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},qy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return a(Ke,u,Pe(function(d,b,s,x,_,C,z,y){var k=z.a,H=z.b;return F(Be,h(sr,x,m,y),es,rs,f,{cV:e,cX:r,cY:o,cZ:t,T:H,bF:k.bF,co:k.co,cp:k.cp,cq:k.cq,dk:i,c:s,d:b,bg:c,e:C,dG:n,f:d,bm:l,g:_})}))}}}}}}}}}}},ns={src:`
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
    `,attributes:{},uniforms:{baseColor:"cU",enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",metallic:"dj",roughness:"dF",sceneProperties:"f",viewMatrix:"g"}},ii=zr(function(e,r,n,t,i,o){return a(Ke,t,Pe(function(c,l,u,f,m,d,b,s){var x=b.a,_=b.b;return F(Be,h(sr,f,o,s),Qm,ns,i,{cU:e,T:_,bF:x.bF,co:x.co,cp:x.cp,cq:x.cq,dj:n,c:u,d:l,e:d,dF:r,f:c,g:m})}))}),Yy=function(e){return{$:0,a:e}},h$=v(function(e,r){return{$:1,a:e,b:r}}),ut=v(function(e,r){if(r.$){var n=r.a.D;return w(n,1)}else return r.a,w(e,0)}),Xy=function(e){return L(Za,Ha(e),Ga(e),Oa(e),1)},ql=L(Za,0,0,0,0),hi=v(function(e,r){if(r.$){var t=r.a.D;return w(t,ql)}else{var n=r.a;return w(e,Xy(n))}}),as=v(function(e,r){var n=w(e,r);if(n.a.$){var i=n.a.a.D;return a(h$,w(i,ql),a(ut,i,r))}else if(n.b.$){var i=n.b.a.D;return a(h$,a(hi,i,e),a(ut,i,r))}else{var t=n.a.a;return n.b.a,Yy(t)}}),Qy=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),oi=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Ky=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),ew=function(e){return a(yr,e,1)},Fc=a(yr,0,0),ma=v(function(e,r){if(r.$){var t=r.a.D;return w(t,Fc)}else{var n=r.a;return w(e,ew(n))}}),ts=ee(function(e,r,n,t){var i=L(Ky,e,r,n,t);if(i.a.$){var u=i.a.a.D;return L(oi,w(u,ql),a(ma,u,r),a(ma,u,n),a(ut,u,t))}else if(i.b.$){var u=i.b.a.D;return L(oi,a(hi,u,e),w(u,Fc),a(ma,u,n),a(ut,u,t))}else if(i.c.$){var u=i.c.a.D;return L(oi,a(hi,u,e),a(ma,u,r),w(u,Fc),a(ut,u,t))}else if(i.d.$){var u=i.d.a.D;return L(oi,a(hi,u,e),a(ma,u,r),a(ma,u,n),w(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(Qy,o,c,l)}}),rw={src:`
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
    `,attributes:{},uniforms:{backlight:"cS",colorTexture:"b9",sceneProperties:"f"}},Go=Oe(function(e,r,n,t,i){return a(Ke,n,Pe(function(o,c,l,u,f,m,d,b){return F(Be,h(sr,u,i,b),Um,rw,t,{cS:Nt(r),b9:e,c:l,d:c,e:m,f:o,g:f})}))}),is={src:`
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
    `,attributes:{normal:"p",position:"cz",uv:"N"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},nw=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return F(Be,h(sr,l,t,d),is,Km,n,{T:s,bF:b.bF,co:b.co,cp:b.cp,cq:b.cq,dh:e,c,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),aw=Ec(function(e,r,n,t,i,o,c,l,u){return a(Ke,c,Pe(function(f,m,d,b,s,x,_,C){var z=_.a,y=_.b;return F(Be,h(sr,b,u,C),is,rs,l,{cV:e,cX:r,cY:o,cZ:t,T:y,bF:z.bF,co:z.co,cp:z.cp,cq:z.cq,dk:i,c:d,d:m,bg:e,e:x,dG:n,f,bm:0,g:s})}))}),Ct=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),tw=function(e){var r=e;return h(Ct,r.eT,r.eQ,.5)},iw=function(e){var r=e;return h(Ct,r.eU,r.eR,.5)},ow=function(e){var r=e;return h(Ct,r.eV,r.eS,.5)},cw=function(e){return h(Qe,tw(e),iw(e),ow(e))},$e=function(e){var r=xm(e),n=r.a,t=r.b,i=r.c;return{gb:co(cw(e)),gK:n/2,gL:t/2,gM:i/2}},Yl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.D;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:var i=r.a,c=r.c,t=r.d;return L(Ho,l,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(Ho,l,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(Ho,l,$e(i),c,t);case 8:return G;case 9:return G;default:return G}}else{var n=e.b.a;switch(r.$){case 0:return G;case 1:var i=r.a,c=r.c,t=r.d;return L(cn,n,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return L(cn,n,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return L(cn,n,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return L(cn,n,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return L(cn,n,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(cn,n,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(cn,n,$e(i),c,t);case 8:var i=r.a,c=r.c;return L(cn,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return L(cn,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return L(Gy,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.D,f=e.c;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:var i=r.a,c=r.c,t=r.d;return F(Go,l,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return F(Go,l,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return F(Go,l,f,$e(i),c,t);case 8:return G;case 9:return G;default:return G}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return G;case 1:var i=r.a,c=r.c,t=r.d;return F(ln,u,f,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return F(ln,u,f,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return F(ln,u,f,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return F(ln,u,f,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return F(ln,u,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return F(ln,u,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return F(ln,u,f,$e(i),c,t);case 8:var i=r.a,c=r.c;return F(ln,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return F(ln,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return F(Uy,u,f,o,$e(i),c)}}case 2:e.a;var m=e.b,ae=e.c,d=a(as,m,ae);if(d.$){var x=d.a,_=x.a;x.b;var C=d.b,z=C.a,y=C.b;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:return G;case 6:var i=r.a,c=r.c,s=r.d;return L(nw,_,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return ar(Jy,_,z,y,$e(i),c,s);case 8:return G;case 9:return G;default:return G}}else{var b=d.a;switch(r.$){case 0:return G;case 1:return G;case 2:var i=r.a,c=r.c,s=r.d;return L(ti,b,$e(i),c,s);case 3:return G;case 4:var i=r.a,c=r.c,s=r.d;return L(ti,b,$e(i),c,s);case 5:return G;case 6:var i=r.a,c=r.c,s=r.d;return L(ti,b,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return L(ti,b,$e(i),c,s);case 8:return G;case 9:return G;default:return G}}default:e.a;var k=e.b,H=e.c,Q=e.d,ae=e.e,te=L(ts,k,H,Q,ae);if(te.$){var pe=te.a,ge=pe.a,Me=pe.b,Se=te.b,me=Se.a,ke=Se.b,I=te.c,E=I.a,R=I.b,V=te.d,z=V.a,y=V.b;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:return G;case 6:var i=r.a,c=r.c,t=r.d;return _s(aw,ge,Me,me,ke,E,R,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return qy(ge)(Me)(me)(ke)(E)(R)(z)(y)($e(i))(c)(t);case 8:return G;case 9:return G;default:return G}}else{var ie=te.a,re=te.b,q=te.c;switch(r.$){case 0:return G;case 1:return G;case 2:var i=r.a,c=r.c,t=r.d;return ar(ii,ie,re,q,$e(i),c,t);case 3:return G;case 4:var i=r.a,c=r.c,t=r.d;return ar(ii,ie,re,q,$e(i),c,t);case 5:return G;case 6:var i=r.a,c=r.c,t=r.d;return ar(ii,ie,re,q,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return ar(ii,ie,re,q,$e(i),c,t);case 8:return G;case 9:return G;default:return G}}}}),Oo=function(e){var r=e;return r.it},Uo=function(e){var r=e;return r.ix},Jo=function(e){var r=e;return r.dZ},lw=function(e){var r=e,n=Jo(r.d_),t=Uo(r.d_),i=Oo(r.d_),o=Jo(r.dY),c=Uo(r.dY),l=Oo(r.dY),u=Jo(r.dX),f=Uo(r.dX),m=Oo(r.dX);return m*c*n+f*o*i+u*l*t-u*c*i-f*l*n-m*o*t>0},uw=function(e){var r=co(Na(e)),n=Fr(ua(e)),t=Fr(la(e)),i=Fr(ca(e));return{ep:lw(e),s:i.it,t:i.ix,u:i.dZ,v:t.it,w:t.ix,x:t.dZ,y:n.it,z:n.ix,A:n.dZ,J:r.it,K:r.ix,L:r.dZ,cE:1}},pa=v(function(e,r){return{$:5,a:e,b:r}}),os=v(function(e,r){var n=r;switch(n.$){case 0:return G;case 5:var t=n.a,i=n.b,o=a(mm,t,e);return a(pa,o,i);case 1:return a(pa,e,n);case 3:return a(pa,e,n);case 2:return a(pa,e,n);default:return a(pa,e,n)}}),cs=v(function(e,r){return a(os,uw(e),r)}),$o=function(e){return{$:2,a:e}},$w=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.gb;return{gb:{it:n*o.it,ix:t*o.ix,dZ:i*o.dZ},gK:n*r.gK,gL:t*r.gL,gM:i*r.gM}}),vw=Dp,fw=Tp,b$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var m=e.a,d=e.b,b=e.c,s=fw(t),x=s.it,_=s.ix,C=s.dZ,z=s.fA,y=vw({fA:z,it:x*m,ix:_*d,dZ:C*b});return zt(r,n,y,i,o,c,l,u,f)}}}}}}}}}},Ac=v(function(e,r){switch(r.$){case 0:return Gm;case 5:var n=r.a,t=r.b;return a(pa,n,a(Ac,e,t));case 1:var i=r.a,o=r.b;return a(Ke,a($w,e,i),a(b$,e,o));case 3:return r;case 2:var o=r.a;return $o(a(b$,e,o));default:var c=r.a;return Sm(a(ne,Ac(e),c))}}),Xl=v(function(e,r){var n=r;return a(Ac,e,n)}),Ql={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ls=7683,us=7682,mw=h(Rl,{df:0,dC:0,dW:15},{bz:ir,bO:Ia,bY:ir,bZ:ls},{bz:ir,bO:Ia,bY:ir,bZ:us}),sw=h(Rl,{df:0,dC:0,dW:15},{bz:ir,bO:Ia,bY:ir,bZ:us},{bz:ir,bO:Ia,bY:ir,bZ:ls}),Kl=v(function(e,r){return e?a(P,sw,r):a(P,mw,r)}),dw={src:`
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
    `,attributes:{normal:"p",position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cG",viewMatrix:"g"}},pw=function(e){if(e.$){var r=e.c;return J(Pe(function(n,t,i,o,c,l,u,f){return F(Be,a(Kl,o,f),dw,Ql,r,{c:i,d:t,e:l,f:n,cG:u,g:c})}))}else return O},Wi=function(e){var r=pw(e);if(r.$)return G;var n=r.a;return $o(n)},gw=ee(function(e,r,n,t){var i=a(Yl,n,Wm),o=function(){var m=w(e,r);return m.a?m.b?Vt($([i,Wi(g$)])):i:m.b?Wi(g$):G}(),c=kl(t),l=c.a,u=c.b,f=c.c;return a(cs,Ml(t),a(Xl,B(l,u,f),o))}),hw=v(function(e,r){return L(gw,!0,!0,e,r)}),$s=v(function(e,r){return{$:0,a:e,b:r}}),bw=function(e){var r=dl(e),n=r.hz,t=r.gH,i=r.fZ;return h(Bt,n,t,i)},_w=function(e){return a($s,0,Lc(bw(e)))},xw=function(e){var r=e;return r.m},$t=function(e){var r=e;return Fa(r)},yw=v(function(e,r){var n=e.cz,t=e.p;return a(P,{p:lo(t),cz:mr(n)},r)}),ww=Gi(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=Oa(l.cz),m=Ga(l.cz),d=Ha(l.cz),b=a(Qn,e,d),s=a(pr,r,d),x=a(Qn,n,m),_=a(pr,t,m),C=a(Qn,i,f),z=a(pr,o,f),y=u;e=b,r=s,n=x,t=_,i=C,o=z,c=y;continue e}else return Em({eQ:r,eR:t,eS:o,eT:e,eU:n,eV:i})}),vs=v(function(e,r){var n=Oa(e.cz),t=Ga(e.cz),i=Ha(e.cz);return Bc(ww,i,i,t,t,n,n,r)}),Sw=function(e){var r=h(av,yw,D,Gl(e));if(r.b){var n=r.a,t=r.b,i=a(jt,r,Hl(e)),o=a(vs,n,t);return L(Am,o,e,i,0)}else return Zl},_$=v(function(e,r){var n=e,t=r,i=n.dY,o=i,c=n.dX,l=c;return{it:t.it*l.it+t.ix*o.it,ix:t.it*l.ix+t.ix*o.ix,dZ:t.it*l.dZ+t.ix*o.dZ}}),Zi=function(e){var r=e;return Aa(r)},tt=function(e){var r=e;return r},Ic=function(e){return an(2*_r*e)},x$=Yf({dp:jn,dX:io,dY:Al}),fs=function(){var e=72,r=a(rm,e,Ic(1)),n=jr(1),t=tt(wl),i=tt(Sl),o=jr(1),c=a(je,.5,o),l=h(Qe,qr,qr,c),u=a(je,-.5,o),f=h(Qe,qr,qr,u),m=function(s){var x=a(je,s,r),_=tt(a(_$,x$,Cc(x))),C=a(je,$t(x),n),z=a(je,Zi(x),n),y=h(Qe,C,z,c),k=h(Qe,C,z,u),H=a(Fi,e,s+1),Q=a(je,H,r),ae=tt(a(_$,x$,Cc(Q))),te=a(je,$t(Q),n),ie=a(je,Zi(Q),n),re=h(Qe,te,ie,u),q=h(Qe,te,ie,c);return $([B({p:i,cz:f},{p:i,cz:re},{p:i,cz:k}),B({p:_,cz:k},{p:ae,cz:re},{p:ae,cz:q}),B({p:_,cz:k},{p:ae,cz:q},{p:_,cz:y}),B({p:t,cz:l},{p:t,cz:y},{p:t,cz:q})])},d=a(ne,m,a(sn,0,e-1)),b=Dc(hr(d));return Wl(Sw(b))}(),y$=Hm(fs),Cw=function(e){var r=e,n=ye(r.dZ),t=ye(r.ix),i=ye(r.it);if(he(i,t)<1)if(he(i,n)<1){var o=Xn(r.dZ*r.dZ+r.ix*r.ix);return{it:0,ix:-r.dZ/o,dZ:r.ix/o}}else{var o=Xn(r.ix*r.ix+r.it*r.it);return{it:-r.ix/o,ix:r.it/o,dZ:0}}else if(he(t,n)<1){var o=Xn(r.dZ*r.dZ+r.it*r.it);return{it:r.dZ/o,ix:0,dZ:-r.it/o}}else{var o=Xn(r.it*r.it+r.ix*r.ix);return{it:-r.ix/o,ix:r.it/o,dZ:0}}},zw=function(e){var r=Cw(e),n=r,t=n,i=e,o=i,c={it:o.ix*t.dZ-o.dZ*t.ix,ix:o.dZ*t.it-o.it*t.dZ,dZ:o.it*t.ix-o.ix*t.it};return w(r,c)},Lw=function(e){var r=yl(e),n=zw(r),t=n.a,i=n.b;return oa({dp:em(e),dX:t,dY:i,d_:r})},Pw=function(e){var r=e;return r.hb},Mw=function(e){var r=e;return r.hx},kw=ee(function(e,r,n,t){var i=Lw(xw(t)),o=a(Yl,n,fs),c=function(){var d=w(e,r);return d.a?d.b?Vt($([o,Wi(y$)])):o:d.b?Wi(y$):G}(),l=Mw(t),u=l,f=Pw(t),m=f;return a(cs,i,a(Xl,B(u,u,m),c))}),Tw=v(function(e,r){return L(kw,!0,!0,e,r)}),w$={src:`
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
    `,attributes:{triangleVertex:"dN"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},S$={src:`
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
    `,attributes:{triangleVertex:"dN"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},it=function(e){var r=St(e),n=r.a,t=r.b,i=r.c,o=Pa(n),c=Pa(t),l=Pa(i);return Yr({ez:o.it,eA:c.it,eB:l.it,eC:0,eD:o.ix,eE:c.ix,eF:l.ix,eG:0,eH:o.dZ,eI:c.dZ,eJ:l.dZ,eK:0,eL:0,eM:0,eN:0,eO:0})},ci=Nm($([B({dN:0},{dN:1},{dN:2})])),Dw=v(function(e,r){var n=Bm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,G;var i=e.b.a;return a(Ke,t,Pe(function(y,k,H,Q,ae,te,ie,re){return F(Be,h(sr,Q,0,re),w$,Ul,ci,{aN:i,c:H,d:k,e:te,f:y,bU:it(r),g:ae})}));case 1:if(e.b.$)return e.a,G;var o=e.b.a,c=e.c;return a(Ke,t,Pe(function(y,k,H,Q,ae,te,ie,re){return F(Be,h(sr,Q,0,re),w$,Jl,ci,{a6:a(uo,Nt(c),o),c:H,d:k,e:te,f:y,bU:it(r),g:ae})}));case 2:e.a;var l=e.b,s=e.c,u=a(as,l,s);if(u.$)return G;var f=u.a;return a(Ke,t,Pe(function(y,k,H,Q,ae,te,ie,re){var q=ie.a,pe=ie.b;return F(Be,h(sr,Q,0,re),S$,Xm,ci,{T:pe,bF:q.bF,co:q.co,cp:q.cp,cq:q.cq,dg:f,c:H,d:k,e:te,f:y,bU:it(r),g:ae})}));default:e.a;var m=e.b,d=e.c,b=e.d,s=e.e,x=L(ts,m,d,b,s);if(x.$)return G;var _=x.a,C=x.b,z=x.c;return a(Ke,t,Pe(function(y,k,H,Q,ae,te,ie,re){var q=ie.a,pe=ie.b;return F(Be,h(sr,Q,0,re),S$,ns,ci,{cU:_,T:pe,bF:q.bF,co:q.co,cp:q.cp,cq:q.cq,dj:z,c:H,d:k,e:te,dF:C,f:y,bU:it(r),g:ae})}))}}),Fw=function(){var e=$([{bl:a(yr,0,1)},{bl:a(yr,1,1)},{bl:a(yr,2,1)},{bl:a(yr,0,-1)},{bl:a(yr,1,-1)},{bl:a(yr,2,-1)}]),r=$([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return a(jt,e,r)}(),Aw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cG",triangleVertexPositions:"bU",viewMatrix:"g"}},C$=function(e){return $o(Pe(function(r,n,t,i,o,c,l,u){return F(Be,a(Kl,i,u),Aw,Ql,Fw,{c:t,d:n,e:c,f:r,cG:l,bU:it(e),g:o})}))},Iw=ee(function(e,r,n,t){var i=a(Dw,n,t),o=w(e,r);return o.a?o.b?Vt($([i,C$(t)])):i:o.b?C$(t):G}),Ew=v(function(e,r){return L(Iw,!0,!0,e,r)}),Bw=v(function(e,r){var n=Pn(r),t=Pn(e),i=Ln(r),o=Ln(e),c=zn(r),l=zn(e);return{eQ:a(He,l,c),eR:a(He,o,i),eS:a(He,t,n),eT:a(Je,l,c),eU:a(Je,o,i),eV:a(Je,t,n)}}),Rw=function(e){var r=Tl(e),n=r.a,t=r.b;return a(Bw,n,t)},z$={src:`
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
    `,attributes:{lineSegmentVertex:"ex"},uniforms:{lineSegmentEndPoint:"ev",lineSegmentStartPoint:"ew",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Vw=v(function(e,r){return{$:1,a:e,b:r}}),jw=Vw({d9:2,em:0,eX:1}),L$=jw($([w({ex:0},{ex:1})])),Nw=v(function(e,r){var n=Rw(r),t=$e(n),i=Tl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,G;var l=e.b.a;return a(Ke,t,Pe(function(f,m,d,b,s,x,_,C){return F(Be,C,z$,Ul,L$,{aN:l,ev:mr(c),ew:mr(o),c:d,d:m,e:x,f,g:s})}));case 1:if(e.b.$)return G;var l=e.b.a,u=e.c;return a(Ke,t,Pe(function(m,d,b,s,x,_,C,z){return F(Be,z,z$,Jl,L$,{a6:a(uo,Nt(u),l),ev:mr(c),ew:mr(o),c:b,d,e:_,f:m,g:x})}));case 2:return G;default:return G}}),Ww=v(function(e,r){return a(Nw,e,r)}),P$=v(function(e,r){var n=e,t=r;return n/t}),Zw=Oe(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(P,o,i);if(de(r,e))return c;var l=e,u=r-1,f=n,m=t,d=c;e=l,r=u,n=f,t=m,i=d;continue e}}),M$=v(function(e,r){return e<1?D:F(Zw,0,e,e,r,D)}),Hw=v(function(e,r){var n=e.cz,t=e.p,i=e.N,o=i,c=o.a,l=o.b;return a(P,{p:lo(t),cz:mr(n),N:a(yr,c,l)},r)}),Gw=function(e){var r=h(av,Hw,D,Gl(e));if(r.b){var n=r.a,t=r.b,i=a(jt,r,Hl(e)),o=a(vs,n,t);return L(Im,o,e,i,0)}else return Zl},ms=v(function(e,r){var n=e,t=r,i=Fa(t);return{it:i*Fa(n),ix:i*Aa(n),dZ:Aa(t)}}),Ow=function(){var e=jr(1),r=72,n=a(sn,0,r-1),t=a(M$,r,a(Ct,qr,Ic(1))),i=ft(r/2),o=a(sn,0,i-1),c=a(M$,i,a(Ct,ya(90),ya(-90))),l=Ol(hr(a(ne,function(m){return a(ne,function(d){return{p:tt(a(ms,m,d)),cz:h(Qe,a(je,$t(d)*$t(m),e),a(je,$t(d)*Zi(m),e),a(je,Zi(d),e)),N:w(a(P$,m,Ic(1)),a(P$,a(lt,ya(90),d),ya(180)))}},c)},t))),u=v(function(m,d){return m*(i+1)+d}),f=hr(a(ne,function(m){return hr(a(ne,function(d){var b=a(u,m+1,d),s=a(u,m,d),x=a(u,m+1,d+1),_=a(u,m,d+1);return $([B(_,x,b),B(_,b,s)])},o))},n));return Wl(Gw(a(Zm,l,f)))}(),Hi=72,li=2*Hi,Uw=v(function(e,r){e:for(;;){var n=li+1,t=a(Fi,li,2*e+3),i=a(Fi,li,2*e+2),o=2*e+1,c=2*e,l=li,u=a(P,B(l,c,i),a(P,B(c,t,i),a(P,B(c,o,t),a(P,B(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Jw=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),qw=v(function(e,r){e:for(;;){var n=h(Jw,0,2*_r,e/Hi),t={b$:n,cv:0,cC:1},i={b$:n,cv:1,cC:1},o=a(P,t,a(P,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Yw=function(){var e=a(qw,Hi-1,$([{b$:0,cv:0,cC:0},{b$:0,cv:1,cC:0}])),r=a(Uw,Hi-1,D);return a(jt,e,r)}(),Xw={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cv",radiusScale:"cC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cG",viewMatrix:"g"}},k$=function(e){return $o(Pe(function(r,n,t,i,o,c,l,u){return F(Be,a(Kl,!0,u),Xw,Ql,Yw,{aN:h(Bt,0,0,1),c:t,d:n,e:c,f:r,cG:l,g:o})}))},Qw=function(e){var r=Vm(e);return{ep:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:r.it,K:r.ix,L:r.dZ,cE:1}},Kw=v(function(e,r){return a(os,Qw(e),r)}),eS=ee(function(e,r,n,t){var i=a(Yl,n,Ow),o=function(){var u=w(e,r);return u.a?u.b?Vt($([i,k$()])):i:u.b?k$():G}(),c=Fl(t),l=c;return a(Kw,a(Mc,jn,Dl(t)),a(Xl,B(l,l,l),o))}),rS=v(function(e,r){return L(eS,!0,!0,e,r)}),nS=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),aS=Oe(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),tS=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a($s,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(nS,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return h(am,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return F(aS,n,t,i,o,c)}},iS=tS,ss=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(hw,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Ew,i,n)]);case 3:var i=e.a,t=e.b;return $([a(rS,iS(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Tw,i,o)]);case 4:var c=e.a,l=e.b;return $([a(Ww,_w(c),l)]);default:var u=e.a;return a(Va,ss,u)}},oS=function(e){return a(Va,ss,e)},cS=v(function(e,r){return vy({a1:L2(e.fV),f7:e.f7,a3:P2(.5),c_:e.c_,a4:w(o$(De(e.cF.ir)),o$(De(e.cF.gO))),a8:oS(r),hN:!0,h2:a(ms,an(e.h1),an(e.h3)),ft:Et})}),lS=v(function(e,r){return a(cS,{fV:a(Vi,"background color",e),f7:Qf(e),c_:e.c_,cF:e.cF,h1:a(pn,"sunlight azimuth",e),h3:a(pn,"sunlight elevation",e)},$([b2(e),a(z2,e,r)]))}),uS=v(function(e,r){return a(Mn,$([a(qe,"width","100%")]),$([J_,a(lS,e,r)]))}),$S=L(F1,uS,O_,V1,I1);const vS={Main:{init:$S(a(K,function(e){return $r({g3:e})},a(X,"inputs",a(K,function(e){return a(K,function(r){return a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(c){return $r({b6:c,c_:o,gw:i,g9:t,dz:n,cF:r,iq:e})},a(X,"clock",Ue))},a(X,"devicePixelRatio",Ue))},a(X,"dt",Ue))},a(X,"keyboard",a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(c){return a(K,function(l){return a(K,function(u){return a(K,function(f){return a(K,function(m){return a(K,function(d){return $r({fQ:d,gk:m,d8:f,gv:u,ha:l,hw:c,hC:o,hO:i,fs:t})},a(X,"alt",Le))},a(X,"control",Le))},a(X,"down",Le))},a(X,"downs",Pi(ka)))},a(X,"left",Le))},a(X,"pressedKeys",Pi(ka)))},a(X,"right",Le))},a(X,"shift",Le))},a(X,"up",Le))))},a(X,"pointer",a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(c){return a(K,function(l){return a(K,function(u){return a(K,function(f){return $r({d8:f,eo:u,hg:l,hD:c,hE:o,fs:i,it:t,ix:n})},a(X,"down",Le))},a(X,"isDown",Le))},a(X,"move",Le))},a(X,"rightDown",Le))},a(X,"rightUp",Le))},a(X,"up",Le))},a(X,"x",Ue))},a(X,"y",Ue))))},a(X,"screen",a(K,function(r){return a(K,function(n){return $r({gO:n,ir:r})},a(X,"height",Ue))},a(X,"width",Ue))))},a(X,"wheel",a(K,function(e){return a(K,function(r){return $r({go:r,gp:e})},a(X,"deltaX",Ue))},a(X,"deltaY",Ue)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},fS=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),c(s)&&(oe.keyboard.up=!0),l(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(x=>x!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),c(s)&&(oe.keyboard.up=!1),l(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const x=s/1e3,_=x-oe.clock;_<.009||(oe.dt=_,oe.clock=x,e.ports.tick.send(oe),d(oe)),window.requestAnimationFrame(b)}},mS=vS.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});fS(mS);
