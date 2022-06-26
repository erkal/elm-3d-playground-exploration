const Jm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Jm();function Cn(e,r,n){return n.a=e,n.f=r,n}function v(e){return Cn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return Cn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ee(e){return Cn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Je(e){return Cn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function yr(e){return Cn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function Li(e){return Cn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function Pe(e){return Cn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function uc(e){return Cn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,t,i,o,c,l,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function V(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ar(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function $c(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function ht(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function Ym(e,r,n,t,i,o,c,l,u,f){return e.a===9?e.f(r,n,t,i,o,c,l,u,f):e(r)(n)(t)(i)(o)(c)(l)(u)(f)}var Xm=[];function Km(e){return e.length}var Zm=T(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Qm=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,z(n,r)}),es=v(function(e,r){return r[e]});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});T(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var rs=T(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+ns()),r});function ns(e){return"<internals>"}function Pa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=Lo(e,r,0,t);i&&(n=t.pop());i=Lo(n.a,n.b,0,t));return i}function Lo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Pa(5),!1;if(n>100)return t.push(z(e,r)),!0;e.$<0&&(e=Wl(e),r=Wl(r));for(var i in e)if(!Lo(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function he(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=he(e.a,r.a))||(n=he(e.b,r.b))?n:he(e.c,r.c);for(;e.b&&r.b&&!(n=he(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return he(e,r)<0});v(function(e,r){return he(e,r)<1});v(function(e,r){return he(e,r)>0});v(function(e,r){return he(e,r)>=0});var as=v(function(e,r){var n=he(e,r);return n<0?V$:n?Yp:D$}),bt=0;function z(e,r){return{a:e,b:r}}function R(e,r,n){return{a:e,b:r,c:n}}function Be(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Xr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Xr(e.a,r);return n}var D={$:0};function Xr(e,r){return{$:1,a:e,b:r}}var ts=v(Xr);function $(e){for(var r=D,n=e.length;n--;)r=Xr(e[n],r);return r}function zi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var is=T(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ee(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Je(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return $(o)});yr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(zi(r).sort(function(n,t){return he(e(n),e(t))}))});v(function(e,r){return $(zi(r).sort(function(n,t){var i=a(e,n,t);return i===D$?0:i===V$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var os=v(Math.pow);v(function(e,r){return r%e});var cs=v(function(e,r){var n=r%e;return e===0?Pa(11):n>0&&e<0||n<0&&e>0?n+e:n}),ls=Math.PI,us=Math.cos,$s=Math.sin,vs=Math.tan;v(Math.atan2);function fs(e){return e}function ms(e){return e===1/0||e===-1/0}var ss=Math.ceil,ds=Math.floor,ps=Math.round,gs=Math.sqrt,Ml=Math.log,hs=isNaN;function bs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var _s=v(function(e,r){return e+r});function xs(e){var r=e.charCodeAt(0);return isNaN(r)?q:Y(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}v(function(e,r){return e+r});function ws(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function ys(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}T(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Ss=T(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Cs=v(function(e,r){return r.split(e)}),Ls=v(function(e,r){return r.join(e)}),zs=T(function(e,r,n){return n.slice(e,r)});function Ps(e){return $(e.trim().split(/\s+/g))}function Ms(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Ts=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),ks=v(function(e,r){return r.indexOf(e)>-1}),Ds=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Vs=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function i$(e){return e+""}function Fs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return q;r=10*r+o-48}return i==t?q:Y(n==45?-r:r)}function As(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?Y(r):q}function Is(e){return zi(e).join("")}function Es(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bs(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Rs(e){return{$:0,a:e}}function js(e){return{$:1,a:e}}function vc(e){return{$:2,b:e}}var Ns=vc(function(e){return typeof e=="boolean"?Ge(e):Hr("a BOOL",e)}),Hs=vc(function(e){return typeof e=="number"?Ge(e):Hr("a FLOAT",e)}),Ws=vc(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Hr("a STRING",e)});function Gs(e){return{$:3,b:e}}var Us=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Ln(e,r){return{$:9,f:e,g:r}}var Os=v(function(e,r){return{$:10,b:r,h:e}}),qs=v(function(e,r){return Ln(e,[r])}),Js=T(function(e,r,n){return Ln(e,[r,n])});ee(function(e,r,n,t){return Ln(e,[r,n,t])});Je(function(e,r,n,t,i){return Ln(e,[r,n,t,i])});yr(function(e,r,n,t,i,o){return Ln(e,[r,n,t,i,o])});Li(function(e,r,n,t,i,o,c){return Ln(e,[r,n,t,i,o,c])});Pe(function(e,r,n,t,i,o,c,l){return Ln(e,[r,n,t,i,o,c,l])});uc(function(e,r,n,t,i,o,c,l,u){return Ln(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Lr(e,n)}catch(t){return tr(a(Sc,"This is not valid JSON! "+t.message,r))}});var o$=v(function(e,r){return Lr(e,r)});function Lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Hr("null",r);case 3:return Ft(r)?Tl(e.b,r,$):Hr("a LIST",r);case 4:return Ft(r)?Tl(e.b,r,Ys):Hr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Hr("an OBJECT with a field named `"+n+"`",r);var f=Lr(e.b,r[n]);return Fr(f)?f:tr(a(Gl,n,f.a));case 7:var t=e.e;if(!Ft(r))return Hr("an ARRAY",r);if(t>=r.length)return Hr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Lr(e.b,r[t]);return Fr(f)?f:tr(a(F$,t,f.a));case 8:if(typeof r!="object"||r===null||Ft(r))return Hr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Lr(e.b,r[o]);if(!Fr(f))return tr(a(Gl,o,f.a));i=Xr(z(o,f.a),i)}return Ge(sr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=Lr(l[u],r);if(!Fr(f))return f;c=c(f.a)}return Ge(c);case 10:var f=Lr(e.b,r);return Fr(f)?Lr(e.h(f.a),r):f;case 11:for(var m=D,d=e.g;d.b;d=d.b){var f=Lr(d.a,r);if(Fr(f))return f;m=Xr(f.a,m)}return tr(Xp(sr(m)));case 1:return tr(a(Sc,e.a,r));case 0:return Ge(e.a)}}function Tl(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Lr(e,r[o]);if(!Fr(c))return tr(a(F$,o,c.a));i[o]=c.a}return Ge(n(i))}function Ft(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ys(e){return a(v0,e.length,function(r){return e[r]})}function Hr(e,r){return tr(a(Sc,"Expecting "+e,r))}function $a(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return $a(e.b,r.b);case 6:return e.d===r.d&&$a(e.b,r.b);case 7:return e.e===r.e&&$a(e.b,r.b);case 9:return e.f===r.f&&kl(e.g,r.g);case 10:return e.h===r.h&&$a(e.b,r.b);case 11:return kl(e.g,r.g)}}function kl(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!$a(e[t],r[t]))return!1;return!0}var Xs=v(function(e,r){return JSON.stringify(r,null,e)+""});function c$(e){return e}function Ks(){return[]}function Zs(){return{}}var Qs=T(function(e,r,n){return n[e]=r,n});function ed(e){return v(function(r,n){return n.push(e(r)),n})}function Yn(e){return{$:0,a:e}}function rd(e){return{$:1,a:e}}function vn(e){return{$:2,b:e,c:null}}var zo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function nd(e){return{$:5,b:e}}var ad=0;function fc(e){var r={$:0,e:ad++,f:e,g:null,h:[]};return mc(r),r}function l$(e){return vn(function(r){r(Yn(fc(e)))})}function u$(e,r){e.h.push(r),mc(e)}var td=v(function(e,r){return vn(function(n){u$(e,r),n(Yn(bt))})}),eo=!1,Dl=[];function mc(e){if(Dl.push(e),!eo){for(eo=!0;e=Dl.shift();)id(e);eo=!1}}function id(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,mc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ee(function(e,r,n,t){return sc(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function sc(e,r,n,t,i,o){var c=a(o$,e,r?r.flags:void 0);Fr(c)||Pa(2);var l={},u=n(c.a),f=u.a,m=o(b,f),d=od(l,b);function b(s,x){var _=a(t,s,f);m(f=_.a,x),Fl(l,_.b,i(f))}return Fl(l,u.b,i(f)),d?{ports:d}:{}}var Or={};function od(e,r){var n;for(var t in Or){var i=Or[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=ld(i,r)}return n}function cd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function ld(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(zo,l,nd(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&c?L(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=fc(a(zo,l,e.b))}var ud=v(function(e,r){return vn(function(n){e.g(r),n(Yn(bt))})});v(function(e,r){return a(td,e.h,{$:0,a:r})});function $$(e){return function(r){return{$:1,k:e,l:r}}}function $d(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Vl=[],ro=!1;function Fl(e,r,n){if(Vl.push({p:e,q:r,r:n}),!ro){ro=!0;for(var t;t=Vl.shift();)vd(t.p,t.q,t.r);ro=!1}}function vd(e,r,n){var t={};ai(!0,r,t,null),ai(!1,n,t,null);for(var i in e)u$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ai(e,r,n,t){switch(r.$){case 1:var i=r.k,o=fd(e,i,t,r.l);n[i]=md(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)ai(e,c.a,n,t);return;case 3:ai(e,r.o,n,{s:r.n,t});return}}function fd(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Or[r].e:Or[r].f;return a(o,i,t)}function md(e,r,n){return n=n||{i:D,j:D},e?n.i=Xr(r,n.i):n.j=Xr(r,n.j),n}function sd(e){Or[e]&&Pa(3)}v(function(e,r){return r});function dd(e,r){return sd(e),Or[e]={f:pd,u:r,a:gd},$$(e)}var pd=v(function(e,r){return function(n){return e(r(n))}});function gd(e,r){var n=D,t=Or[e].u,i=Yn(null);Or[e].b=i,Or[e].c=T(function(c,l,u){return n=l,i});function o(c){var l=a(o$,t,c);Fr(l)||Pa(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var ti,tn=typeof document!="undefined"?document:{};function dc(e,r){e.appendChild(r)}ee(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(bn(e,function(){}),i),{}});function Po(e){return{$:0,a:e}}var v$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:gc(n),e:i,f:e,b:o}})}),fn=v$(void 0),hd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:gc(n),e:i,f:e,b:o}})}),bd=hd(void 0);function _d(e,r,n,t){return{$:3,d:gc(e),g:r,h:n,i:t}}var xd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function zn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return zn([e,r],function(){return e(r)})});T(function(e,r,n){return zn([e,r,n],function(){return a(e,r,n)})});var wd=ee(function(e,r,n,t){return zn([e,r,n,t],function(){return h(e,r,n,t)})});Je(function(e,r,n,t,i){return zn([e,r,n,t,i],function(){return L(e,r,n,t,i)})});yr(function(e,r,n,t,i,o){return zn([e,r,n,t,i,o],function(){return V(e,r,n,t,i,o)})});Li(function(e,r,n,t,i,o,c){return zn([e,r,n,t,i,o,c],function(){return ar(e,r,n,t,i,o,c)})});Pe(function(e,r,n,t,i,o,c,l){return zn([e,r,n,t,i,o,c,l],function(){return $c(e,r,n,t,i,o,c,l)})});uc(function(e,r,n,t,i,o,c,l,u){return zn([e,r,n,t,i,o,c,l,u],function(){return ht(e,r,n,t,i,o,c,l,u)})});var f$=v(function(e,r){return{$:"a0",n:e,o:r}}),yd=v(function(e,r){return{$:"a1",n:e,o:r}}),pc=v(function(e,r){return{$:"a2",n:e,o:r}}),Br=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function m$(e){return e=="script"?"p":e}function Sd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Cd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Ld(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function s$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var zd=v(function(e,r){return r.$==="a0"?a(f$,r.n,Pd(e,r.o)):r});function Pd(e,r){var n=Pc(r);return{$:r.$,a:n?h(f0,n<3?Md:Td,ur(e),r.a):a(li,e,r.a)}}var Md=v(function(e,r){return z(e(r.a),r.b)}),Td=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function gc(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Al(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?Al(c,i,o):c[i]=o}return r}function Al(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function bn(e,r){var n=e.$;if(n===5)return bn(e.k||(e.k=e.m()),r);if(n===0)return tn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=bn(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Mo(c,r,e.d),c}var c=e.f?tn.createElementNS(e.f,e.c):tn.createElement(e.c);ti&&e.c=="a"&&c.addEventListener("click",ti(c)),Mo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)dc(c,bn(n===1?l[u]:l[u].b,r));return c}function Mo(e,r,n){for(var t in n){var i=n[t];t==="a1"?kd(e,i):t==="a0"?Fd(e,r,i):t==="a3"?Dd(e,i):t==="a4"?Vd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function kd(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Dd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Vd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Fd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Ad(r,o),e.addEventListener(i,c,hc&&{passive:Pc(o)<2}),t[i]=c}}var hc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){hc=!0}}))}catch{}function Ad(e,r){function n(t){var i=n.q,o=Lr(i.a,t);if(!!Fr(o)){for(var c=Pc(i),l=o.a,u=c?c<3?l.a:l.aA:l,f=c==1?l.b:c==3&&l.dH,m=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&t.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")u=d(u);else for(var b=d.length;b--;)u=d[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Id(e,r){return e.$==r.$&&$a(e.a,r.a)}function d$(e,r){var n=[];return Ar(e,r,n,0),n}function nr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Ar(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Gd(r),o=1;else{nr(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Ar(e.k,r.k,m,0),m.length>0&&nr(n,1,t,m);return;case 4:for(var d=e.j,b=r.j,s=!1,x=e.k;x.$===4;)s=!0,typeof d!="object"?d=[d,x.j]:d.push(x.j),x=x.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&d.length!==b.length){nr(n,0,t,r);return}(s?!Ed(d,b):d!==b)&&nr(n,2,t,b),Ar(x,_,n,t+1);return;case 0:e.a!==r.a&&nr(n,3,t,r.a);return;case 1:Il(e,r,n,t,Bd);return;case 2:Il(e,r,n,t,Rd);return;case 3:if(e.h!==r.h){nr(n,0,t,r);return}var S=bc(e.d,r.d);S&&nr(n,4,t,S);var C=r.i(e.g,r.g);C&&nr(n,5,t,C);return}}}function Ed(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Il(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){nr(n,0,t,r);return}var o=bc(e.d,r.d);o&&nr(n,4,t,o),i(e,r,n,t)}function bc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=bc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Id(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Bd(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?nr(n,6,t,{v:l,i:c-l}):c<l&&nr(n,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var m=i[f];Ar(m,o[f],n,++t),t+=m.b||0}}function Rd(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,m=u.length,d=0,b=0,s=t;d<f&&b<m;){var x=l[d],_=u[b],S=x.a,C=_.a,w=x.b,M=_.b,G=void 0,Z=void 0;if(S===C){s++,Ar(w,M,i,s),s+=w.b||0,d++,b++;continue}var ae=l[d+1],te=u[b+1];if(ae){var ie=ae.a,re=ae.b;Z=C===ie}if(te){var J=te.a,de=te.b;G=S===J}if(G&&Z){s++,Ar(w,de,i,s),Ra(o,i,S,M,b,c),s+=w.b||0,s++,ja(o,i,S,re,s),s+=re.b||0,d+=2,b+=2;continue}if(G){s++,Ra(o,i,C,M,b,c),Ar(w,de,i,s),s+=w.b||0,d+=1,b+=2;continue}if(Z){s++,ja(o,i,S,w,s),s+=w.b||0,s++,Ar(re,M,i,s),s+=re.b||0,d+=2,b+=1;continue}if(ae&&ie===J){s++,ja(o,i,S,w,s),Ra(o,i,C,M,b,c),s+=w.b||0,s++,Ar(re,de,i,s),s+=re.b||0,d+=2,b+=2;continue}break}for(;d<f;){s++;var x=l[d],w=x.b;ja(o,i,x.a,w,s),s+=w.b||0,d++}for(;b<m;){var pe=pe||[],_=u[b];Ra(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||c.length>0||pe)&&nr(n,8,t,{w:i,x:c,y:pe})}var p$="_elmW6BL";function Ra(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Ar(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Ra(e,r,n+p$,t,i,o)}function ja(e,r,n,t,i){var o=e[n];if(!o){var c=nr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Ar(t,o.z,l,i),nr(r,9,i,{w:l,A:o});return}ja(e,r,n+p$,t,i)}function g$(e,r,n,t){Na(e,r,n,0,0,r.b,t)}function Na(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var f=l.$;if(f===1)g$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&Na(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var m=d.w;m.length>0&&Na(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Na(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var x=r.e,_=e.childNodes,S=0;S<x.length;S++){i++;var C=b===1?x[S]:x[S].b,w=i+(C.b||0);if(i<=u&&u<=w&&(t=Na(_[S],C,n,t,i,w,c),!(l=n[t])||(u=l.r)>o))return t;i=w}return t}function h$(e,r,n,t){return n.length===0?e:(g$(e,r,n,t),ii(e,n))}function ii(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=jd(i,t);i===e&&(e=o)}return e}function jd(e,r){switch(r.$){case 0:return Nd(e,r.s,r.u);case 4:return Mo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ii(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(bn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ii(e,o.w),e;case 8:return Hd(e,r);case 5:return r.s(e);default:Pa(10)}}function Nd(e,r,n){var t=e.parentNode,i=bn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Hd(e,r){var n=r.s,t=Wd(n.y,r);e=ii(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:bn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&dc(e,t),e}function Wd(e,r){if(!!e){for(var n=tn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;dc(n,o.c===2?o.s:bn(o.z,r.u))}return n}}function _c(e){if(e.nodeType===3)return Po(e.textContent);if(e.nodeType!==1)return Po("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Xr(a(Br,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Xr(_c(f[t]),u);return h(fn,l,r,u)}function Gd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Ud=ee(function(e,r,n,t){return sc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=t.node,u=_c(l);return b$(o,function(f){var m=c(f),d=d$(u,m);l=h$(l,u,d,i),u=m})})});ee(function(e,r,n,t){return sc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=tn.title,f=tn.body,m=_c(f);return b$(o,function(d){ti=c;var b=l(d),s=fn("body")(D)(b.fU),x=d$(m,s);f=h$(f,m,x,i),m=s,ti=0,u!==b.id&&(tn.title=u=b.id)})})});var oi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function b$(e,r){r(e);var n=0;function t(){n=n===1?0:(oi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&oi(t),n=2)}}v(function(e,r){return a(Tc,xt,vn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Tc,xt,vn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Tc,xt,vn(function(){history.replaceState({},"",r),e()}))});var Od={addEventListener:function(){},removeEventListener:function(){}},qd=typeof window!="undefined"?window:Od;T(function(e,r,n){return l$(vn(function(t){function i(o){fc(n(o))}return e.addEventListener(r,i,hc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Lr(e,r);return Fr(n)?Y(n.a):q});function _$(e,r){return vn(function(n){oi(function(){var t=document.getElementById(e);n(t?Yn(r(t)):rd(m0(e)))})})}function Jd(e){return vn(function(r){oi(function(){r(Yn(e()))})})}v(function(e,r){return _$(r,function(n){return n[e](),bt})});v(function(e,r){return Jd(function(){return qd.scroll(e,r),bt})});T(function(e,r,n){return _$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,bt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Yd=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return Y(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var Xd=T(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var d=u[f];m[--f]=d?Y(d):q}t.push(L(cf,u[0],u.index,i,$(m))),l=r.lastIndex}return r.lastIndex=c,$(t)});ee(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?Y(f):q}return n(L(cf,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});T(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var Kd=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Zd(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Zd(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var xc=new Float64Array(3),El=new Float64Array(3),Bl=new Float64Array(3),Qd=T(function(e,r,n){return new Float64Array([e,r,n])}),ep=function(e){return e[0]},rp=function(e){return e[1]},np=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var ap=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function x$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(x$);function w$(e,r,n){return n===void 0&&(n=new Float64Array(3)),ci(x$(e,r,n),n)}v(w$);function y$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function ci(e,r){r===void 0&&(r=new Float64Array(3));var n=1/y$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var tp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ha=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ha);function To(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(To);v(function(e,r){var n,t=xc,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ha(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ha(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ha(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ha(r,t)+e[14])/n,i});var ip=ee(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var op=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},cp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/lp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function lp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var up=new Float64Array(16),$p=new Float64Array(16),vp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},fp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function S$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}yr(S$);ee(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return S$(c,l,o,i,n,t)});function C$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}yr(C$);ee(function(e,r,n,t){return C$(e,r,n,t,-1,1)});function L$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],m=e[7],d=e[8],b=e[9],s=e[10],x=e[11],_=e[12],S=e[13],C=e[14],w=e[15],M=r[0],G=r[1],Z=r[2],ae=r[3],te=r[4],ie=r[5],re=r[6],J=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],A=r[14],I=r[15];return n[0]=t*M+l*G+d*Z+_*ae,n[1]=i*M+u*G+b*Z+S*ae,n[2]=o*M+f*G+s*Z+C*ae,n[3]=c*M+m*G+x*Z+w*ae,n[4]=t*te+l*ie+d*re+_*J,n[5]=i*te+u*ie+b*re+S*J,n[6]=o*te+f*ie+s*re+C*J,n[7]=c*te+m*ie+x*re+w*J,n[8]=t*de+l*pe+d*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=c*de+m*pe+x*Me+w*Se,n[12]=t*me+l*Te+d*A+_*I,n[13]=i*me+u*Te+b*A+S*I,n[14]=o*me+f*Te+s*A+C*I,n[15]=c*me+m*Te+x*A+w*I,n}v(L$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],m=e[9],d=e[10],b=e[12],s=e[13],x=e[14],_=r[0],S=r[1],C=r[2],w=r[4],M=r[5],G=r[6],Z=r[8],ae=r[9],te=r[10],ie=r[12],re=r[13],J=r[14];return n[0]=t*_+c*S+f*C,n[1]=i*_+l*S+m*C,n[2]=o*_+u*S+d*C,n[3]=0,n[4]=t*w+c*M+f*G,n[5]=i*w+l*M+m*G,n[6]=o*w+u*M+d*G,n[7]=0,n[8]=t*Z+c*ae+f*te,n[9]=i*Z+l*ae+m*te,n[10]=o*Z+u*ae+d*te,n[11]=0,n[12]=t*ie+c*re+f*J+b,n[13]=i*ie+l*re+m*J+s,n[14]=o*ie+u*re+d*J+x,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ci(r,xc);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var t=new Float64Array(16),i=1/y$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),d=o*m,b=c*m,s=l*m,x=o*c*f,_=o*l*f,S=c*l*f,C=o*o*f+u,w=x+s,M=_-b,G=x-s,Z=c*c*f+u,ae=S+d,te=_+b,ie=S-d,re=l*l*f+u,J=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],A=n[7],I=n[8],E=n[9],B=n[10],j=n[11],N=n[12],H=n[13],W=n[14],Re=n[15];return t[0]=J*C+Se*w+I*M,t[1]=de*C+me*w+E*M,t[2]=pe*C+Te*w+B*M,t[3]=Me*C+A*w+j*M,t[4]=J*G+Se*Z+I*ae,t[5]=de*G+me*Z+E*ae,t[6]=pe*G+Te*Z+B*ae,t[7]=Me*G+A*Z+j*ae,t[8]=J*te+Se*ie+I*re,t[9]=de*te+me*ie+E*re,t[10]=pe*te+Te*ie+B*re,t[11]=Me*te+A*ie+j*re,t[12]=N,t[13]=H,t[14]=W,t[15]=Re,t});function mp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}T(mp);ee(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function sp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}T(sp);ee(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],m=t[5],d=t[6],b=t[7],s=t[8],x=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=s,i[9]=x,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=c*e+m*r+x*n+t[13],i[14]=l*e+d*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],m=r[4],d=r[5],b=r[6],s=r[7],x=r[8],_=r[9],S=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=s,n[8]=x,n[9]=_,n[10]=S,n[11]=C,n[12]=c*t+m*i+x*o+r[12],n[13]=l*t+d*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});T(function(e,r,n){var t=w$(e,r,xc),i=ci(To(n,t,El),El),o=ci(To(t,i,Bl),Bl),c=up,l=$p;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,L$(c,l)});T(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var Rl=0;function nt(e,r){for(;r.b;r=r.b)e(r.a)}function wc(e){for(var r=0;e.b;e=e.b)r++;return r}var dp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},pp=Je(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),gp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),hp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),bp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),_p=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),xp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),wp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),yp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Sp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Cp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Lp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},zp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Pp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},z$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},P$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Mp=function(e){e.gl.disable(e.gl.CULL_FACE)},Tp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},kp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Dp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},jl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Vp=[Lp,zp,Pp,z$,P$,Mp,Tp,kp,Dp];function Nl(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Fp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function M$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ap(e,r,n,t){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(s,x,_,S,C){var w;if(i===1)for(w=0;w<x;w++)s[_++]=x===1?S[C]:S[C][w];else o.forEach(function(M){for(w=0;w<x;w++)s[_++]=x===1?S[M][C]:S[M][C][w]})}var u=M$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,d=new u.type(wc(n.b)*m);nt(function(s){l(d,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function Ip(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=Ep(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*wc(r.b),indexBuffer:null,buffers:{}}}function Ep(e,r){var n=new Uint32Array(wc(e)*r),t=0,i;return nt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Hl(e,r){return e+"#"+r}var T$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),z$(n),P$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=Hl(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Rl++,f||(f=Nl(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Rl++,m||(m=Nl(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=Fp(t,f,m);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Bp(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(d,u),x=t.getAttribLocation(d,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(x)}c=Hl(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),Rp(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Ip(t,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],x=l.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=Ap(t,s,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=M$(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,w=C*S.arraySize,M=0;M<S.arraySize;M++)t.enableVertexAttribArray(x+M),t.vertexAttribPointer(x+M,S.size,S.baseType,!1,w,C*M)}for(n.toggle=!n.toggle,nt(F_(n),o.a),u=0;u<jl.length;u++){var G=n[jl[u]];G.toggle!==n.toggle&&G.enabled&&(Vp[u](n),G.enabled=!1,G.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return nt(i,e.g),r});function Bp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(s,x){var _=x.name,S=e.getUniformLocation(s,_);switch(x.type){case e.INT:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};case e.FLOAT:return function(w){o[_]!==w&&(e.uniform1f(S,w),o[_]=w)};case e.FLOAT_VEC2:return function(w){o[_]!==w&&(e.uniform2f(S,w[0],w[1]),o[_]=w)};case e.FLOAT_VEC3:return function(w){o[_]!==w&&(e.uniform3f(S,w[0],w[1],w[2]),o[_]=w)};case e.FLOAT_VEC4:return function(w){o[_]!==w&&(e.uniform4f(S,w[0],w[1],w[2],w[3]),o[_]=w)};case e.FLOAT_MAT4:return function(w){o[_]!==w&&(e.uniformMatrix4fv(S,!1,new Float32Array(w)),o[_]=w)};case e.SAMPLER_2D:var C=c++;return function(w){e.activeTexture(e.TEXTURE0+C);var M=l.textures.get(w);M||(M=w.ge(e),l.textures.set(w,M)),e.bindTexture(e.TEXTURE_2D,M),o[_]!==w&&(e.uniform1i(S,C),o[_]=w)};case e.BOOL:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=u(i,b)}return f}function Rp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var jp=T(function(e,r,n){return _d(r,{g:n,f:{},h:e},qp,Jp)}),Np=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Hp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Wp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Gp=v(function(e,r){e.contextAttributes.antialias=!0}),Up=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Op=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function qp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};nt(function(i){return a(V_,r,i)},e.h);var n=tn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),dp(function(){return a(T$,e,n)})):(n=tn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Jp(e,r){return r.f=e.f,T$(r)}var P=ts,At=rs,k$=T(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(At,e,l,f)}else{var u=c.a;return h(At,o,l,u)}});return h(At,o,h(At,e,r,i),t)}),yc=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,t,i,h(yc,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),Wl=function(e){return h(yc,T(function(r,n,t){return a(P,z(r,n),t)}),D,e)},D$=1,Yp=2,V$=0,tr=function(e){return{$:1,a:e}},Sc=v(function(e,r){return{$:3,a:e,b:r}}),Gl=v(function(e,r){return{$:0,a:e,b:r}}),F$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},Xp=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},q={$:1},Kp=Ts,Zp=Xs,k=i$,le=v(function(e,r){return a(Ls,e,zi(r))}),Cc=v(function(e,r){return $(a(Cs,e,r))}),A$=function(e){return a(le,`
    `,a(Cc,`
`,e))},We=T(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),Gn=function(e){return h(We,v(function(r,n){return n+1}),0,e)},Qp=is,e0=T(function(e,r,n){e:for(;;)if(he(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),qr=v(function(e,r){return h(e0,e,r,D)}),I$=v(function(e,r){return h(Qp,e,a(qr,0,Gn(r)-1),r)}),Jr=Es,E$=function(e){var r=Jr(e);return 97<=r&&r<=122},B$=function(e){var r=Jr(e);return r<=90&&65<=r},r0=function(e){return E$(e)||B$(e)},n0=function(e){var r=Jr(e);return r<=57&&48<=r},a0=function(e){return E$(e)||B$(e)||n0(e)},sr=function(e){return h(We,P,D,e)},Ma=xs,t0=v(function(e,r){return`

(`+(k(e+1)+(") "+A$(i0(r))))}),i0=function(e){return a(o0,e,D)},o0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=Ma(n);if(_.$===1)return!1;var S=_.a,C=S.a,w=S.b;return r0(C)&&a(Kp,a0,w)}(),i=t?"."+n:"['"+(n+"']"),u=c,f=a(P,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(k(o)+"]"),u=c,f=a(P,l,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(le,"",sr(r)):"Json.Decode.oneOf"}(),x=d+(" failed in the following "+(k(Gn(m))+" ways:"));return a(le,`

`,a(P,x,a(I$,t0,m)))}else{var c=m.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(le,"",sr(r)):"!"}();default:var b=e.a,s=e.b,x=function(){return r.b?"Problem with the value at json"+(a(le,"",sr(r))+`:

    `):`Problem with the given value:

`}();return x+(A$(a(Zp,4,s))+(`

`+b))}}),xr=32,ko=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Do=Xm,at=ss,Lc=v(function(e,r){return Ml(r)/Ml(e)}),Wa=fs,tt=at(a(Lc,2,xr)),R$=L(ko,0,tt,Do,Do),j$=Zm,N$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var H$=ds,Vo=Km,rr=v(function(e,r){return he(e,r)>0?e:r}),c0=function(e){return{$:0,a:e}},zc=Qm,l0=v(function(e,r){e:for(;;){var n=a(zc,xr,e),t=n.a,i=n.b,o=a(P,c0(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return sr(o)}}),W$=function(e){var r=e.a;return r},u0=v(function(e,r){e:for(;;){var n=at(r/xr);if(n===1)return a(zc,xr,e).a;var t=a(l0,e,D),i=n;e=t,r=i;continue e}}),G$=v(function(e,r){if(r.n){var n=r.n*xr,t=H$(a(Lc,xr,n-1)),i=e?sr(r.C):r.C,o=a(u0,i,r.n);return L(ko,Vo(r.r)+n,a(rr,5,t*tt),o,r.r)}else return L(ko,Vo(r.r),tt,Do,r.r)}),$0=Je(function(e,r,n,t,i){e:for(;;){if(r<0)return a(G$,!1,{C:t,n:n/xr|0,r:i});var o=N$(h(j$,xr,r,e)),c=e,l=r-xr,u=n,f=a(P,o,t),m=i;e=c,r=l,n=u,t=f,i=m;continue e}}),v0=v(function(e,r){if(e<=0)return R$;var n=e%xr,t=h(j$,n,e-n,r),i=e-n-xr;return V($0,r,i,e,D,t)}),Fr=function(e){return!e.$},Q=Os,ze=Ns,K=Us,Ue=Hs,U$=v(function(e,r){return{cU:r.cU,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),li=qs,f0=Js,ur=Rs,Pc=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Er=function(e){return e},m0=Er,Ul=yr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),s0=ks,In=ws,va=zs,_t=v(function(e,r){return e<1?r:h(va,e,In(r),r)}),Pi=Vs,Mi=function(e){return e===""},Ti=v(function(e,r){return e<1?"":h(va,0,e,r)}),O$=Fs,Ol=Je(function(e,r,n,t,i){if(Mi(i)||a(s0,"@",i))return q;var o=a(Pi,":",i);if(o.b){if(o.b.b)return q;var c=o.a,l=O$(a(_t,c+1,i));if(l.$===1)return q;var u=l;return Y(ar(Ul,e,a(Ti,c,i),u,r,n,t))}else return Y(ar(Ul,e,i,q,r,n,t))}),ql=ee(function(e,r,n,t){if(Mi(t))return q;var i=a(Pi,"/",t);if(i.b){var o=i.a;return V(Ol,e,a(_t,o,t),r,n,a(Ti,o,t))}else return V(Ol,e,"/",r,n,t)}),Jl=T(function(e,r,n){if(Mi(n))return q;var t=a(Pi,"?",n);if(t.b){var i=t.a;return L(ql,e,Y(a(_t,i+1,n)),r,a(Ti,i,n))}else return L(ql,e,q,r,n)});v(function(e,r){if(Mi(r))return q;var n=a(Pi,"#",r);if(n.b){var t=n.a;return h(Jl,e,Y(a(_t,t+1,r)),a(Ti,t,r))}else return h(Jl,e,q,r)});var d0=Ds,xt=function(e){},wt=Yn,p0=wt(0),q$=ee(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var m=f.a,d=f.b,b=n>500?h(We,e,r,sr(d)):L(q$,e,r,n+1,d);return a(e,i,a(e,c,a(e,u,a(e,m,b))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),Qe=T(function(e,r,n){return L(q$,e,r,0,n)}),ne=v(function(e,r){return h(Qe,v(function(n,t){return a(P,e(n),t)}),D,r)}),ui=zo,Mc=v(function(e,r){return a(ui,function(n){return wt(e(n))},r)}),g0=T(function(e,r,n){return a(ui,function(t){return a(ui,function(i){return wt(a(e,t,i))},n)},r)}),h0=function(e){return h(Qe,g0(P),wt(D),e)},b0=ud,_0=v(function(e,r){var n=r;return l$(a(ui,b0(e),n))}),x0=T(function(e,r,n){return a(Mc,function(t){return 0},h0(a(ne,_0(e),r)))}),w0=T(function(e,r,n){return wt(0)}),y0=v(function(e,r){var n=r;return a(Mc,e,n)});Or.Task=cd(p0,x0,w0,y0);var S0=$$("Task"),Tc=v(function(e,r){return S0(a(Mc,e,r))}),C0=Ud,L0=bs,$i={$:1},J$=function(e){return{$:2,a:e}},kc={$:0},Pr=v(function(e,r){return{$:0,a:e,b:r}}),Xe=T(function(e,r,n){return r(e(n))}),Xn=function(e){var r=e.b.s;return r.a},z0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return Y(a(Pr,r,{s:o,an:c,X:a(P,t,n)}))}else return q},Ee=v(function(e,r){if(r.$)return e;var n=r.a;return n}),P0=T(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dI;return(he(o+r.gp,Xn(n).cU)>0?a(Xe,z0,Ee(a(Pr,$i,i))):Er)(a(Pr,J$({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,f=a(U$,l.gb,Be(r,{cU:l.cU+r.gp})),m=a(e,f,u);return a(Pr,kc,{s:z(f,m),an:D,X:a(P,i.s,i.X)})}}),Y$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),M0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(P,t,n);e=o,r=c,n=l;continue e}else return n}}),T0=v(function(e,r){return sr(h(M0,e,r,D))}),X$=T(function(e,r,n){if(r<=0)return D;{var t=z(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,w=i.a,o=i.b,c=o.a;return $([w,c]);case 3:if(t.b.b.b.b){var l=t.b,w=l.a,u=l.b,c=u.a,f=u.b,m=f.a;return $([w,c,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,w=d.a,b=d.b,c=b.a,s=b.b,m=s.a,x=s.b,_=x.a,S=x.b;return e>1e3?a(P,w,a(P,c,a(P,m,a(P,_,a(T0,r-4,S))))):a(P,w,a(P,c,a(P,m,a(P,_,h(X$,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,w=C.a;return $([w])}}),k0=v(function(e,r){return h(X$,0,e,r)}),D0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=X(sr(n),X($([t]),i)),c=a(k0,e,o),l=a(Y$,e,o);if(l.b){var u=l.a,f=l.b;return a(Pr,$i,{s:u,an:f,X:sr(c)})}else{var m=sr(c);if(m.b){var d=m.a,b=m.b;return a(Pr,$i,{s:d,an:D,X:b})}else return r}}),V0=function(e){var r=e.b;return a(Pr,$i,r)},F0=function(e){var r=e.b;return a(Pr,J$({dI:Xn(e).cU}),r)},A0=function(e){var r=e.b;return a(Pr,kc,r)},I0=v(function(e,r){switch(e.$){case 1:return V0(r);case 2:return A0(r);case 3:return F0(r);default:var n=e.a;return a(D0,n,r)}}),vi=v(function(e,r){var n=r.a,t=r.b;return z(e(n),t)}),E0=v(function(e,r){return Be(r,{aN:e(r.aN)})}),B0=function(e){return{$:3,a:e}},R0=function(e){return{$:2,a:e}},j0=v(function(e,r){return{$:0,a:e,b:r}}),N0=v(function(e,r){return{$:1,a:e,b:r}}),Ne=v(function(e,r){if(r.$)return q;var n=r.a;return Y(e(n))}),be=function(e){return e<0?-e:e},K$=As,H0=T(function(e,r,n){return a(Ee,0/0,K$(a(e,r,n)))}),yt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),W0=Ss,Z$=function(e){return h(W0,P,D,e)},G0=v(function(e,r){var n=a(yt,function(t){return t!=="0"&&t!=="."},Z$(r));return X(e&&n?"-":"",r)}),ve=i$,Fo=_s,Q$=Bs,ev=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ma(n);if(t.$===1)return"01";var i=t.a;return a(Fo,"0",ev(i))}else{var o=Jr(r);return o>=48&&o<57?a(Fo,Q$(o+1),n):"0"}},Ao=ms,U0=hs,ki=function(e){return a(Fo,e,"")},rv=T(function(e,r,n){return e<=0?n:h(rv,e>>1,X(r,r),e&1?X(n,r):n)}),it=v(function(e,r){return h(rv,e,r,"")}),Io=T(function(e,r,n){return X(n,a(it,e-In(n),ki(r)))}),Eo=ys,nv=function(e){var r=a(Cc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},O0=function(e){var r=a(Cc,"e",ve(be(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ee,0,O$(a(d0,"+",i)?a(_t,1,i):i)),c=nv(n),l=c.a,u=c.b,f=X(l,u),m=o<0?a(Ee,"0",a(Ne,function(d){var b=d.a,s=d.b;return b+("."+s)},a(Ne,vi(ki),Ma(X(a(it,be(o),"0"),f))))):h(Io,o+1,"0",f);return X(e<0?"-":"",m)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},q0=T(function(e,r,n){if(Ao(n)||U0(n))return ve(n);var t=n<0,i=nv(O0(be(n))),o=i.a,c=i.b,l=In(o)+r,u=X(a(it,-l+1,"0"),h(Io,l,"0",X(o,c))),f=In(u),m=a(rr,1,l),d=a(e,t,h(va,m,f,u)),b=h(va,0,m,u),s=d?Eo(a(Ee,"1",a(Ne,ev,Ma(Eo(b))))):b,x=In(s),_=s==="0"?s:r<=0?X(s,a(it,be(r),"0")):he(r,In(c))<0?h(va,0,x-r,s)+("."+h(va,x-r,x,s)):X(o+".",h(Io,r,"0",c));return a(G0,t,_)}),av=q0(v(function(e,r){var n=Ma(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Jr(i))})),J0=H0(av),Y0=T(function(e,r,n){var t=a(Lc,10,be(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(J0,i,n)}),tv=as,Dc=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(tv,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return Y(t);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=Je(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Kr={$:-2},xa=Je(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,d=t.d,b=t.e;return V(fe,0,r,n,V(fe,1,f,m,d,b),V(fe,1,o,c,l,u))}else return V(fe,e,o,c,V(fe,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var x=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return V(fe,0,f,m,V(fe,1,x,_,S,C),V(fe,1,r,n,b,i))}else return V(fe,e,r,n,t,i)}),Bo=T(function(e,r,n){if(n.$===-2)return V(fe,0,e,r,Kr,Kr);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a(tv,e,i);switch(u){case 0:return V(xa,t,i,o,h(Bo,e,r,c),l);case 1:return V(fe,t,i,r,c,l);default:return V(xa,t,i,o,c,h(Bo,e,r,l))}}),Xa=T(function(e,r,n){var t=h(Bo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return V(fe,1,i,o,c,l)}else{var u=t;return u}}),X0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},iv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var s=b.b,x=b.c,_=b.d,S=b.e,C=f.e;return V(fe,0,s,x,V(fe,1,n,t,V(fe,0,o,c,l,u),_),V(fe,1,m,d,S,C))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,c=w.c,l=w.d,u=w.e,M=e.e;M.a;var m=M.b,d=M.c,b=M.d,C=M.e;return V(fe,1,n,t,V(fe,0,o,c,l,u),V(fe,0,m,d,b,C))}else return e},Yl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,m=l.d,d=l.e,b=i.e,s=e.e;s.a;var x=s.b,_=s.c,S=s.d,C=s.e;return V(fe,0,o,c,V(fe,1,u,f,m,d),V(fe,1,n,t,b,V(fe,0,x,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,c=w.c,M=w.d,b=w.e,G=e.e;G.a;var x=G.b,_=G.c,S=G.d,C=G.e;return V(fe,1,n,t,V(fe,0,o,c,M,b),V(fe,0,x,_,S,C))}else return e},K0=Li(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,m=o.e;return V(fe,n,l,u,f,V(fe,0,t,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Yl(r)}else break e;else return c.a,c.d,Yl(r);else break e;return r}}),Jt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(fe,r,n,t,Jt(i),l);var u=iv(e);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return V(xa,f,m,d,Jt(b),s)}else return Kr}else return V(fe,r,n,t,Jt(i),l)}else return Kr},Ka=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(he(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(fe,n,t,i,a(Ka,e,o),c);var u=iv(r);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return V(xa,f,m,d,a(Ka,e,b),s)}else return Kr}else return V(fe,n,t,i,a(Ka,e,o),c);else return a(Z0,e,$c(K0,e,r,n,t,i,o,c))}),Z0=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(_e(e,t)){var l=X0(c);if(l.$===-1){var u=l.b,f=l.c;return V(xa,n,u,f,o,Jt(c))}else return Kr}else return V(xa,n,t,i,o,a(Ka,e,c))}else return Kr}),Q0=v(function(e,r){var n=a(Ka,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return V(fe,1,t,i,o,c)}else{var l=n;return l}}),It=T(function(e,r,n){var t=r(a(Dc,e,n));if(t.$)return a(Q0,e,n);var i=t.a;return h(Xa,e,i,n)}),eg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(It,r,Ne(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(N0,z(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(It,r,Ne(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(j0,z(o,c),h(Y0,o,c,n))}));case 3:var r=e.a,n=e.b;return a(It,r,Ne(function(t){return t.$===3?B0(n):t}));default:var r=e.a,n=e.b;return a(It,r,Ne(function(t){return t.$===2?R0(n):t}))}},rg=function(e){return E0(eg(e))},ng=v(function(e,r){return a(ne,rg(e),r)}),ag=v(function(e,r){return Be(r,{gb:a(ng,e,r.gb)})}),tg=v(function(e,r){var n=r.a,t=r.b;return a(Pr,n,Be(t,{s:a(vi,ag(e),t.s)}))}),Ro=v(function(e,r){var n=r.a,t=r.b;return z(n,e(t))}),ig=T(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Pr,t,Be(i,{s:a(Ro,a(e,o.a,r),o)}))}),og=ee(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Be(t,{bw:!t.bw});case 2:var i=n.a;return Be(t,{R:h(P0,e,i,t.R)});case 3:var o=n.a;return Be(t,{bp:o});case 4:var c=n.a;return Be(t,{R:a(tg,c,t.R)});case 5:var l=n.a;return Be(t,{R:h(ig,r,l,t.R)});default:var u=n.a;return Be(t,{R:a(I0,u,t.R)})}}),cg=v(function(e,r){return a(Pr,kc,{s:z(e,r(e)),an:D,X:D})}),lg=$d,Xl=lg(D),ug=function(e){return{$:2,a:e}},fi=Gs,wa=Ws,$g=dd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({cU:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return ur({fJ:d,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",ze))},a(K,"control",ze))},a(K,"down",ze))},a(K,"downs",fi(wa)))},a(K,"left",ze))},a(K,"pressedKeys",fi(wa)))},a(K,"right",ze))},a(K,"shift",ze))},a(K,"up",ze))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",ze))},a(K,"isDown",ze))},a(K,"move",ze))},a(K,"rightDown",ze))},a(K,"rightUp",ze))},a(K,"up",ze))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue))))),vg=function(e){return e.dO,$g(ug)},fg=function(e){return{$:5,a:e}},mg={$:0},mi=v(function(e,r){return e}),sg=function(e){var r=e.b.s;return r.b},dg=function(e){return{$:1,a:e}},pg=dg,ov=function(e){return{$:8,a:e}},ye=ov,ot=function(e){return{$:0,a:e}},St=T(function(e,r,n){return e(r(n))}),gg=a(St,ot,mi),gn=gg,Ve=function(e){return{$:1,a:e}},rn=Ve,cv=v(function(e,r){return{$:9,a:e,b:r}}),Un={$:0},lv=v(function(e,r){return r.$===3?Un:a(cv,e,r)}),jo=function(e){return a(lv,4,e)},p={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Vc=c$,kr=v(function(e,r){return a(pc,e,Vc(r))}),zr=kr("className"),_r=function(e){return Ve(zr(e))},uv=v(function(e,r){return{$:2,a:e,b:r}}),hg=v(function(e,r){return{$:1,a:e,b:r}}),er=function(e){return{$:0,a:e}},wr=2,bg={$:0},Kn=bg,_g={$:0},xg=p.fK+(" "+p.aw),wg=p.fK+(" "+p.gC),yg=p.fK+(" "+p.eY),Sg=p.fK+(" "+p.eZ),Cg=p.fK+(" "+p.af),Lg=p.fK+(" "+p.hL),zg=function(e){switch(e){case 0:return Cg;case 1:return xg;case 2:return Lg;case 3:return wg;case 4:return Sg;default:return yg}},Kl=function(e){return{$:1,a:e}},An={$:0},No=function(e){return{$:1,a:e}},Zl=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return X(n,e);case 2:var t=r.a;return X(e,t);default:var n=r.a,t=r.b;return X(n,X(e,t))}}),Ql=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return X(a(ne,function(o){return z(e,o)},t),r);case 2:var i=n.a;return X(r,a(ne,function(o){return z(e,o)},i));default:var t=n.a,i=n.b;return X(a(ne,function(o){return z(e,o)},t),X(r,a(ne,function(o){return z(e,o)},i)))}}),Et=4,Pg=function(e){return{$:0,a:e}},Mg=function(e){return{$:1,a:e}},we=function(e){return e>31?Mg(1<<e-32):Pg(1<<e)},$v=we(41),vv=we(40),fv=we(42),mv=we(43),ya=fn("div"),sv=Kr,dv=sv,Gr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Gr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Gr(o))}},Ae=ps,Ie=function(e){return k(Ae(e*255))},Fc=function(e){switch(e.$){case 0:return q;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Ie(n)+("-"+(Ie(t)+("-"+Ie(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d;return Y("tfrm-"+(Ie(c)+("-"+(Ie(l)+("-"+(Ie(u)+("-"+(Ie(m)+("-"+(Ie(d)+("-"+(Ie(b)+("-"+(Ie(x)+("-"+(Ie(_)+("-"+(Ie(S)+("-"+Ie(C))))))))))))))))))))}},ct=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(le,"-",a(ne,Gr,i.hB))+("-cols-"+(a(le,"-",a(ne,Gr,i.ak))+("-space-x-"+(Gr(i.hP.a)+("-space-y-"+Gr(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(le," ",a(ne,function(m){var d=ct(m);if(d==="")return"";var b=d;return b+("-"+u)},l));default:var f=e.a;return a(Ee,"",Fc(f))}},Tg=v(function(e,r){var n=r;return h(Xa,e,0,n)}),kg=v(function(e,r){var n=a(Dc,e,r);return!n.$}),Dg=v(function(e,r){var n=r;return a(kg,e,n)}),pv=v(function(e,r){var n=r.a,t=r.b,i=ct(e);return a(Dg,i,n)?r:z(a(Tg,i,n),a(P,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),Za=v(function(e,r){return{$:0,a:e,b:r}}),y=function(e){return"."+e},Vg=T(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(P,i,n)}),On=v(function(e,r){return h(Qe,Vg(e),D,r)}),fa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ae(r*255))+(","+k(Ae(n*255))+(","+k(Ae(t*255))+(","+(ve(i)+")")))))},Ho=function(e){return a(le," ",a(On,Er,$([e.ej?Y("inset"):q,Y(ve(e.eV.a)+"px"),Y(ve(e.eV.b)+"px"),Y(ve(e.a2)+"px"),Y(ve(e.bi)+"px"),Y(fa(e.b6))])))},gv=function(e){return $([a(Za,y(p.ea)+":focus-within",a(On,Er,$([a(Ne,function(r){return a(ue,"border-color",fa(r))},e.fW),a(Ne,function(r){return a(ue,"background-color",fa(r))},e.fO),a(Ne,function(r){return a(ue,"box-shadow",Ho({a2:r.a2,b6:r.b6,ej:!1,eV:a(Ro,Wa,a(vi,Wa,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))]))),a(Za,y(p.fK)+":focus .focusable, "+(y(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(y(p.fK)+" .focusable-thumb"))),a(On,Er,$([a(Ne,function(r){return a(ue,"border-color",fa(r))},e.fW),a(Ne,function(r){return a(ue,"background-color",fa(r))},e.fO),a(Ne,function(r){return a(ue,"box-shadow",Ho({a2:r.a2,b6:r.b6,ej:!1,eV:a(Ro,Wa,a(vi,Wa,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))])))])},Wr=function(e){return fn(m$(e))},hv=v(function(e,r){return a(pc,Cd(e),s$(r))}),no=v(function(e,r){return{$:2,a:e,b:r}}),Ac=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),gr=v(function(e,r){return{$:0,a:e,b:r}}),F=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),Fg=v(function(e,r){return{$:3,a:e,b:r}}),bv=$([0,1,2,3,4,5]),Ag=v(function(e,r){return r.b?h(Qe,P,r,e):e}),dr=function(e){return h(Qe,Ag,D,e)},Ta=v(function(e,r){return dr(a(ne,e,r))}),Ig=function(e){switch(e){case 0:return y(p.gc);case 1:return y(p.b9);case 2:return y(p.cb);case 3:return y(p.bt);case 4:return y(p.ca);default:return y(p.ax)}},si=function(e){switch(e){case 0:return y(p.fH);case 1:return y(p.fA);case 2:return y(p.dZ);case 3:return y(p.dY);case 4:return y(p.fB);default:return y(p.fC)}},Ga=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(F,Ig(n),i),a(O,y(p.fK),$([a(F,si(n),o)]))])};return Ac(a(Ta,r,bv))},eu=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(F,y(p.c_),$([a(g,"z-index","0"),a(O,y(p.fQ),$([a(g,"z-index","-1")]))])),a(F,y(p.hG),$([a(O,y(p.Y),$([a(F,y(p.c0),$([a(g,"flex-grow","0")])),a(F,y(p.dQ),$([a(g,"align-self","auto !important")]))]))])),a(O,y(p.c$),$([a(g,"height","auto")])),a(O,y(p.c0),$([a(g,"flex-grow","100000")])),a(O,y(p.dQ),$([a(g,"width","100%")])),a(O,y(p.fv),$([a(g,"width","100%")])),a(O,y(p.dP),$([a(g,"align-self","flex-start")])),Ga(function(e){switch(e){case 0:return z($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return z($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return z($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return z($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return z($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return z($([a(O,y(p.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Eg=function(e){var r=function(n){return $([a(O,y(p.fK),$([a(F,si(n),e(n))]))])};return Ac(a(Ta,r,bv))},Bg=function(){return $([0,1,2,3,4,5])}(),Rg=$([a(gr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(gr,X(y(p.fK),X(y(p.hL),y(p.gN))),$([a(g,"display","block"),a(F,y(p.c0),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(F,y(p.dQ),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(gr,y(p.fK)+":focus",$([a(g,"outline","none")])),a(gr,y(p.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(F,X(y(p.fK),y(p.c0)),$([a(g,"height","100%"),a(O,y(p.c0),$([a(g,"height","100%")]))])),a(O,y(p.gP),$([a(F,y(p.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(gr,y(p.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(F,y(p.hL),eu),Ac(function(e){return a(ne,e,Bg)}(function(e){switch(e){case 0:return a(F,y(p.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,y(p.c0),$([a(g,"height","auto")])),a(O,y(p.dQ),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(F,y(p.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,y(p.c0),$([a(g,"height","auto")]))]));case 2:return a(F,y(p.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(F,y(p.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(F,y(p.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(F,y(p.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(gr,y(p.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(F,y(p.dR),$([a(g,"flex-wrap","wrap")])),a(F,y(p.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(F,y(p.gf),$([a(g,"cursor","pointer")])),a(F,y(p.gg),$([a(g,"cursor","text")])),a(F,y(p.hn),$([a(g,"pointer-events","none !important")])),a(F,y(p.b4),$([a(g,"pointer-events","auto !important")])),a(F,y(p.a$),$([a(g,"opacity","0")])),a(F,y(p.aU),$([a(g,"opacity","1")])),a(F,y(X(p.gK,p.a$))+":hover",$([a(g,"opacity","0")])),a(F,y(X(p.gK,p.aU))+":hover",$([a(g,"opacity","1")])),a(F,y(X(p.gx,p.a$))+":focus",$([a(g,"opacity","0")])),a(F,y(X(p.gx,p.aU))+":focus",$([a(g,"opacity","1")])),a(F,y(X(p.cL,p.a$))+":active",$([a(g,"opacity","0")])),a(F,y(X(p.cL,p.aU))+":active",$([a(g,"opacity","1")])),a(F,y(p.fj),$([a(g,"transition",a(le,", ",a(ne,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(F,y(p.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(F,y(p.hE),$([a(g,"overflow-x","auto"),a(F,y(p.af),$([a(g,"flex-shrink","1")]))])),a(F,y(p.hF),$([a(g,"overflow-y","auto"),a(F,y(p.aw),$([a(g,"flex-shrink","1")])),a(F,y(p.hL),$([a(g,"flex-shrink","1")]))])),a(F,y(p.f7),$([a(g,"overflow","hidden")])),a(F,y(p.f8),$([a(g,"overflow-x","hidden")])),a(F,y(p.f9),$([a(g,"overflow-y","hidden")])),a(F,y(p.dP),$([a(g,"width","auto")])),a(F,y(p.b1),$([a(g,"border-width","0")])),a(F,y(p.fX),$([a(g,"border-style","dashed")])),a(F,y(p.fY),$([a(g,"border-style","dotted")])),a(F,y(p.fZ),$([a(g,"border-style","solid")])),a(F,y(p.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(F,y(p.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(F,y(p.hL),eu),a(F,y(p.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,y(p.fK),$([a(g,"flex-basis","0%"),a(F,y(p.fu),$([a(g,"flex-basis","auto")])),a(F,y(p.et),$([a(g,"flex-basis","auto")]))])),a(O,y(p.c0),$([a(g,"align-self","stretch !important")])),a(O,y(p.ef),$([a(g,"align-self","stretch !important")])),a(O,y(p.dQ),$([a(g,"flex-grow","100000")])),a(O,y(p.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+p.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,y(p.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,y(p.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([a(g,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return z($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return z($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return z($([a(g,"justify-content","flex-end")]),D);case 3:return z($([a(g,"justify-content","flex-start")]),D);case 4:return z($([a(g,"justify-content","center")]),D);default:return z($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(F,y(p.hO),$([a(g,"justify-content","space-between")])),a(F,y(p.ci),$([a(g,"align-items","baseline")]))])),a(F,y(p.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,y(p.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(F,y(p.ee),$([a(g,"flex-basis","auto")]))])),a(O,y(p.c0),$([a(g,"flex-grow","100000")])),a(O,y(p.dQ),$([a(g,"width","100%")])),a(O,y(p.fv),$([a(g,"width","100%")])),a(O,y(p.dP),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+p.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([a(g,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return z($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return z($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return z($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return z($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return z($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return z($([a(g,"justify-content","center")]),D)}}),a(O,y(p.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(F,y(p.hO),$([a(g,"justify-content","space-between")]))])),a(F,y(p.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,y(p.fK),$([a(g,"width","100%")]))])),a(Fg,z("display","grid"),$([z("display","grid")])),Eg(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(F,y(p.eY),$([a(g,"display","block"),a(O,y(p.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,y(p.fK+(si(3)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),a(O,y(p.fK+(si(2)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),Ga(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(g,"float","right"),a(F,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return z(D,$([a(g,"float","left"),a(F,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),a(F,y(p.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(F,y(p.gW),$([a(F,y(p.hL),$([a(g,"flex-basis","auto")]))])),a(F,y(p.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,y(p.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(F,y(p.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(F,y(p.c_),$([a(g,"z-index","0"),a(O,y(p.fQ),$([a(g,"z-index","-1")]))])),a(no,y(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(no,y(p.eZ),$([a(g,"display","inline"),a(F,"::after",$([a(g,"content","none")])),a(F,"::before",$([a(g,"content","none")]))])),a(no,y(p.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(F,y(p.fu),$([a(g,"display","inline-block")])),a(F,y(p.gP),$([a(g,"display","flex")])),a(F,y(p.fQ),$([a(g,"display","flex")])),a(F,y(p.fy),$([a(g,"display","flex")])),a(F,y(p.fR),$([a(g,"display","flex")])),a(F,y(p.hh),$([a(g,"display","flex")])),a(F,y(p.hg),$([a(g,"display","flex")])),a(O,y(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,y(p.af),$([a(g,"display","inline")])),a(O,y(p.aw),$([a(g,"display","inline-flex")])),a(O,y(p.gC),$([a(g,"display","inline-grid")])),Ga(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(g,"float","right")]));case 3:return z(D,$([a(g,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),a(F,".hidden",$([a(g,"display","none")])),a(F,y(p.ia),$([a(g,"font-weight","100")])),a(F,y(p.h1),$([a(g,"font-weight","200")])),a(F,y(p.h5),$([a(g,"font-weight","300")])),a(F,y(p.h7),$([a(g,"font-weight","400")])),a(F,y(p.h6),$([a(g,"font-weight","500")])),a(F,y(p.h9),$([a(g,"font-weight","600")])),a(F,y(p.fV),$([a(g,"font-weight","700")])),a(F,y(p.h0),$([a(g,"font-weight","800")])),a(F,y(p.h2),$([a(g,"font-weight","900")])),a(F,y(p.g2),$([a(g,"font-style","italic")])),a(F,y(p.hU),$([a(g,"text-decoration","line-through")])),a(F,y(p.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(F,X(y(p.ih),y(p.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(F,y(p.ib),$([a(g,"font-style","normal")])),a(F,y(p.h3),$([a(g,"text-align","justify")])),a(F,y(p.cF),$([a(g,"text-align","justify-all")])),a(F,y(p.h$),$([a(g,"text-align","center")])),a(F,y(p.h8),$([a(g,"text-align","right")])),a(F,y(p.h4),$([a(g,"text-align","left")])),a(F,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),mn=function(e){return $([a(gr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(gr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},jg=dr($([a(ne,function(e){return a(gr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(qr,0,6)),a(ne,function(e){return a(gr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(qr,8,32)),a(ne,function(e){return a(gr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(qr,0,24)),$([a(gr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(gr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),mn("zero"),mn("onum"),mn("liga"),mn("dlig"),mn("ordn"),mn("tnum"),mn("afrc"),mn("frac")])),Ng=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Hg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Wg=`
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
`,Gg=`
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
`,Ug=`
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
`,Og="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(y(p.fK)+(y(p.af)+(" > "+(y(p.fK)+(" { flex-basis: auto !important; } "+(y(p.fK)+(y(p.af)+(" > "+(y(p.fK)+(y(p.b8)+(" { flex-basis: auto !important; }}"+(Hg+(Wg+(Ug+(Gg+Ng))))))))))))))),pa=function(e){return a(le,"",e)},ca=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),la=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Be(o,{aE:a(P,z(c,l),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,d=i.b;return Be(o,{G:a(P,{b5:`
}`,G:D,aE:d,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Be(o,{G:a(P,a(la,a(ca,n.ag+(" + "+b),""),s),o.G)});case 1:var x=i.a,_=i.b;return Be(o,{G:a(P,a(la,a(ca,n.ag+(" > "+x),""),_),o.G)});case 2:var x=i.a,_=i.b;return Be(o,{G:a(P,a(la,a(ca,n.ag+(" "+x),""),_),o.G)});case 4:var S=i.a,C=i.b;return Be(o,{G:a(P,a(la,a(ca,X(n.ag,S),""),C),o.G)});default:var w=i.a;return Be(o,{G:a(P,a(la,a(ca,n.ag,""),w),o.G)})}});return h(Qe,t,n,r)}),qg=function(e){var r=function(i){return pa(a(ne,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return X(n(o),pa(a(ne,t,o.G)))};return pa(a(ne,t,h(Qe,v(function(i,o){var c=i.a,l=i.b;return a(P,a(la,a(ca,c,""),l),o)}),D,e)))},ru=X(Og,qg(X(Rg,jg))),_n=Po,_v=function(e){var r=e.eS;switch(r){case 0:return h(Wr,"div",D,$([h(Wr,"style",D,$([_n(ru)]))]));case 1:return _n("");default:return h(Wr,"elm-ui-static-rules",$([a(hv,"rules",Vc(ru))]),D)}},Jg=v(function(e,r){return h(We,ed(e),Ks(),r)}),Yg=function(e){return h(We,v(function(r,n){var t=r.a,i=r.b;return h(Qs,t,i,n)}),Zs(),e)},Xg=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},Kg=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},Zg=function(e){if(e.$===5){var r=e.a;return a(yt,Kg,r.fo)}else return!1},ga=v(function(e,r){return he(e,r)<0?e:r}),Ba=T(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),De=ee(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(We,Ba(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(We,Ba(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(We,Ba(!1),"",t)+`
}`))])}case 0:var c=h(We,Ba(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(y(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(We,Ba(!1),"",t)+`
}`))])}}),Qg=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},eh=function(e){if(e.$===5){var r=e.a;return Y(a(le,", ",a(ne,Qg,r.fo)))}else return q},rh=function(e){switch(e.$){case 0:return q;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d,w="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),M="scale3d("+(ve(m)+(", "+(ve(d)+(", "+(ve(b)+")"))))),G="rotate3d("+(ve(x)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(w+(" "+(M+(" "+G))))}},Ic=T(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(De,e,n,t,i);case 13:var u=r.a,b=r.b;return L(De,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=a(rr,0,a(ga,1,1-o));return L(De,e,n,"."+u,$([a(ue,"opacity",ve(c))]));case 2:var l=r.a;return L(De,e,n,".font-size-"+k(l),$([a(ue,"font-size",k(l)+"px")]));case 1:var u=r.a,f=r.b,m=a(le,", ",a(On,eh,f)),d=$([a(ue,"font-family",a(le,", ",a(ne,Xg,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(yt,Zg,f)?"small-caps":"normal")]);return L(De,e,n,"."+u,d);case 3:var se=r.a,b=r.b,Ji=r.c;return L(De,e,n,"."+se,$([a(ue,b,Ji)]));case 4:var se=r.a,b=r.b,s=r.c;return L(De,e,n,"."+se,$([a(ue,b,fa(s))]));case 5:var J=r.a,x=r.b,_=r.c,S=k(_)+"px",C=k(x)+"px",w="."+p.af,M="."+(p.dR+w),pe="."+p.dZ,G="."+p.eZ,Z="."+p.eY,Se="."+p.dY,ae=ve(_/2)+"px",te=ve(x/2)+"px",ie="."+p.aw,se="."+J,re="."+p.fK;return dr($([L(De,e,n,se+(w+(" > "+(re+(" + "+re)))),$([a(ue,"margin-left",C)])),L(De,e,n,se+(M+(" > "+re)),$([a(ue,"margin",ae+(" "+te))])),L(De,e,n,se+(ie+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),L(De,e,n,se+(Z+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),L(De,e,n,se+(Z+(" > "+Se)),$([a(ue,"margin-right",C)])),L(De,e,n,se+(Z+(" > "+pe)),$([a(ue,"margin-left",C)])),L(De,e,n,X(se,G),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),L(De,e,n,"textarea"+(re+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),L(De,e,n,se+(G+(" > "+Se)),$([a(ue,"margin-right",C)])),L(De,e,n,se+(G+(" > "+pe)),$([a(ue,"margin-left",C)])),L(De,e,n,se+(G+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),L(De,e,n,se+(G+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var J=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+J;return L(De,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var J=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+J;return L(De,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=T(function(Ye,Ea,Zr){e:for(;;)switch(Zr.$){case 0:var qm=Zr.a;return k(qm)+"px";case 1:var Dr=z(Ye,Ea);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var kn=Dr.b.a;return"minmax(max-content, "+(k(kn)+"px)")}else if(Dr.b.$===1){var Dn=Dr.a.a;return Dr.b,"minmax("+(k(Dn)+"px, max-content)")}else{var Dn=Dr.a.a,kn=Dr.b.a;return"minmax("+(k(Dn)+("px, "+(k(kn)+"px)")))}case 2:var Pl=Zr.a,Vr=z(Ye,Ea);if(Vr.a.$===1){if(Vr.b.$===1)return Vr.a,Vr.b,k(Pl)+"fr";Vr.a;var kn=Vr.b.a;return"minmax(max-content, "+(k(kn)+"px)")}else if(Vr.b.$===1){var Dn=Vr.a.a;return Vr.b,"minmax("+(k(Dn)+("px, "+(k(Pl)+"frfr)")))}else{var Dn=Vr.a.a,kn=Vr.b.a;return"minmax("+(k(Dn)+("px, "+(k(kn)+"px)")))}case 3:var Yi=Zr.a,Xi=Zr.b,Ki=Y(Yi),Zi=Ea,Qi=Xi;Ye=Ki,Ea=Zi,Zr=Qi;continue e;default:var Yi=Zr.a,Xi=Zr.b,Ki=Ye,Zi=Y(Yi),Qi=Xi;Ye=Ki,Ea=Zi,Zr=Qi;continue e}}),A=function(Ye){return h(Te,q,q,Ye)};A(me.hP.a);var I=A(me.hP.b),E=function(Ye){return"grid-template-rows: "+(Ye+";")}(a(le," ",a(ne,A,me.hB))),B=function(Ye){return"-ms-grid-rows: "+(Ye+";")}(a(le,I,a(ne,A,me.ak))),j=function(Ye){return"-ms-grid-columns: "+(Ye+";")}(a(le,I,a(ne,A,me.ak))),N="grid-row-gap:"+(A(me.hP.b)+";"),H="grid-column-gap:"+(A(me.hP.a)+";"),W=function(Ye){return"grid-template-columns: "+(Ye+";")}(a(le," ",a(ne,A,me.ak))),se=".grid-rows-"+(a(le,"-",a(ne,Gr,me.hB))+("-cols-"+(a(le,"-",a(ne,Gr,me.ak))+("-space-x-"+(Gr(me.hP.a)+("-space-y-"+Gr(me.hP.b))))))),Ui=se+("{"+(W+(E+(H+(N+"}"))))),Oi="@supports (display:grid) {"+(Ui+"}"),qi=se+("{"+(j+(B+"}")));return $([qi,Oi]);case 9:var Re=r.a,Dt=a(le," ",$(["-ms-grid-row: "+(k(Re.af)+";"),"-ms-grid-row-span: "+(k(Re.gH)+";"),"-ms-grid-column: "+(k(Re.ga)+";"),"-ms-grid-column-span: "+(k(Re.im)+";")])),Gi=a(le," ",$(["grid-row: "+(k(Re.af)+(" / "+(k(Re.af+Re.gH)+";"))),"grid-column: "+(k(Re.ga)+(" / "+(k(Re.ga+Re.im)+";")))])),se=".grid-pos-"+(k(Re.af)+("-"+(k(Re.ga)+("-"+(k(Re.im)+("-"+k(Re.gH))))))),Ui=se+("{"+(Gi+"}")),Oi="@supports (display:grid) {"+(Ui+"}"),qi=se+("{"+(Dt+"}"));return $([qi,Oi]);case 11:var se=r.a,Gm=r.b,Um=function(Ye){return h(Ic,e,Ye,Y(se))};return a(Ta,Um,Gm);default:var zl=r.a,Ji=rh(zl),se=Fc(zl),Vt=z(se,Ji);if(!Vt.a.$&&!Vt.b.$){var J=Vt.a.a,Om=Vt.b.a;return L(De,e,n,"."+J,$([a(ue,"transform",Om)]))}else return D}}),nh=v(function(e,r){return Yg(a(ne,function(n){var t=h(Ic,e,n,q);return z(ct(n),a(Jg,Vc,t))},r))}),di=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(le,"",a(ne,n,r))+"}"))}),nu=T(function(e,r,n){var t=n.a,i=n.b;return $([a(di,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(di,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),ah=T(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(le," ",X(h(nu,o,p.hM,i),h(nu,o,p.gy,t)))}),th=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(le," ",$([a(di,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([z("line-height","1")])),a(di,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),au=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),xv=v(function(e,r){return h(Qe,v(function(n,t){return e(n)?a(P,n,t):t}),D,r)}),ih=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(We,rr,r,n))}else return q},tu=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(We,ga,r,n))}else return q},iu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Ee,e.gk,tu(r)),t=a(Ee,e.fP,tu(a(xv,function(f){return!_e(f,n)},r))),i=a(Ee,e.f1,ih(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f1:h(au,o,i-t,c),ec:h(au,l,i-n,u)}},ou=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ve(e.gH)),z("vertical-align",ve(e.fp)+"em"),z("font-size",ve(e.bi)+"em")]))},oh=function(e){return h(We,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return Y(z(ou(function(c){return c.ec}(iu(o))),ou(function(c){return c.f1}(iu(o)))))}else return n;else return n}),q,e)},ch=function(e){var r=function(o){if(o.$===4){var c=o.b;return Y("@import url('"+(c+"');"))}else return q},n=function(o){o.a;var c=o.b,l=a(le,`
`,a(On,r,c));return l},t=a(ne,W$,e),i=function(o){var c=o.a,l=o.b,u=oh(l);if(u.$===1)return a(le,"",a(ne,th(c),t));var f=u.a;return a(le,"",a(ne,a(ah,c,f),t))};return X(a(le,`
`,a(ne,n,e)),a(le,`
`,a(ne,i,e)))},lh=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(z(r,n))}else return q},cu=v(function(e,r){var n=v(function(c,l){return{cB:X(l.cB,h(Ic,e,c,q)),bT:function(){var u=lh(c);if(u.$===1)return l.bT;var f=u.a;return a(P,f,l.bT)}()}}),t=h(We,n,{cB:D,bT:D},r),i=t.bT,o=t.cB;return X(ch(i),pa(o))}),wv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Wr,"div",D,$([h(Wr,"style",D,$([_n(a(cu,e,r))]))]));case 1:return h(Wr,"div",D,$([h(Wr,"style",D,$([_n(a(cu,e,r))]))]));default:return h(Wr,"elm-ui-rules",$([a(hv,"rules",a(nh,e,r))]),D)}}),lu=ee(function(e,r,n,t){var i=a(wv,r,h(We,pv,z(dv,gv(r.gx)),n).b);return e?a(P,z("static-stylesheet",_v(r)),a(P,z("dynamic-stylesheet",i),t)):a(P,z("dynamic-stylesheet",i),t)}),uu=ee(function(e,r,n,t){var i=a(wv,r,h(We,pv,z(dv,gv(r.gx)),n).b);return e?a(P,_v(r),a(P,i,t)):a(P,i,t)}),Wo=we(45),lt=we(37),yv=function(e){return bd(m$(e))},uh=fn("p"),cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),$u=fn("s"),vu=fn("u"),Go=we(44),ut=we(39),Bt=yr(function(e,r,n,t,i,o){var c=v(function(u,f){if(t.$===1){var m=t.a;return h(yv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return L(lu,!1,b,s,m);default:var b=i.a,s=i.b;return L(lu,!0,b,s,m)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return ya;case"p":return uh;default:return Wr(u)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,s=i.b;return L(uu,!1,b,s,d);default:var b=i.a,s=i.b;return L(uu,!0,b,s,d)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,f=r.b;return h(Wr,u,n,$([a(c,f,$([zr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return a(cr,ut,e)&&!a(cr,Go,e)?l:a(cr,vv,e)?a(vu,$([zr(a(le," ",$([p.fK,p.hL,p.b8,p.ax,p.fG])))]),$([l])):a(cr,fv,e)?a($u,$([zr(a(le," ",$([p.fK,p.hL,p.b8,p.ax,p.fE])))]),$([l])):l;case 1:return a(cr,lt,e)&&!a(cr,Wo,e)?l:a(cr,mv,e)?a($u,$([zr(a(le," ",$([p.fK,p.hL,p.b8,p.fF])))]),$([l])):a(cr,$v,e)?a(vu,$([zr(a(le," ",$([p.fK,p.hL,p.b8,p.fD])))]),$([l])):l;default:return l}}),dn=function(e){return!e.b},Ec=_n,$h=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),$t=function(e){return a(ya,$([zr($h)]),$([Ec(e)]))},vh=p.fK+(" "+(p.Y+(" "+(p.dQ+(" "+p.c0))))),fu=function(e){return a(ya,$([zr(vh)]),$([Ec(e)]))},fh=T(function(e,r,n){var t=v(function(x,_){var S=x.a,C=x.b,w=_.a,M=_.b;switch(C.$){case 0:var G=C.a;return _e(e,Et),z(a(P,z(S,G(e)),w),M);case 1:var Z=C.a;return _e(e,Et),z(a(P,z(S,a(Z.gL,An,e)),w),dn(M)?Z.hV:X(Z.hV,M));case 2:var ae=C.a;return z(a(P,z(S,_e(e,wr)?fu(ae):$t(ae)),w),M);default:return z(w,M)}}),i=v(function(x,_){var S=_.a,C=_.b;switch(x.$){case 0:var w=x.a;return _e(e,Et),z(a(P,w(e),S),C);case 1:var M=x.a;return _e(e,Et),z(a(P,a(M.gL,An,e),S),dn(C)?M.hV:X(M.hV,C));case 2:var G=x.a;return z(a(P,_e(e,wr)?fu(G):$t(G),S),C);default:return z(S,C)}});if(r.$===1){var o=r.a,c=h(Qe,t,z(D,D),o),l=c.a,u=c.b,f=dn(u)?n.hV:X(n.hV,u);if(f.b){var m=f;return No({gL:L(Bt,n.aR,n.aT,n.aJ,Kl(h(Ql,"nearby-element-pls",l,n.aM))),hV:m})}else return ot(V(Bt,n.aR,n.aT,n.aJ,Kl(h(Ql,"nearby-element-pls",l,n.aM)),An))}else{var d=r.a,b=h(Qe,i,z(D,D),d),s=b.a,u=b.b,f=dn(u)?n.hV:X(n.hV,u);if(f.b){var m=f;return No({gL:L(Bt,n.aR,n.aT,n.aJ,er(a(Zl,s,n.aM))),hV:m})}else return ot(V(Bt,n.aR,n.aT,n.aJ,er(a(Zl,s,n.aM)),An))}}),vr=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),mh=function(e){return{$:10,a:e}},pi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(pi,n,o|t)}else{var i=e.a;return a(pi,i|n,t)}}),mu=function(e){return{$:1,a:e}},Rt=v(function(e,r){return{$:3,a:e,b:r}}),su=function(e){return{$:2,a:e}},sh=v(function(e,r){return a(ya,$([zr(function(){switch(e){case 0:return a(le," ",$([p.be,p.hL,p.fy]));case 1:return a(le," ",$([p.be,p.hL,p.fR]));case 2:return a(le," ",$([p.be,p.hL,p.hh]));case 3:return a(le," ",$([p.be,p.hL,p.hg]));case 4:return a(le," ",$([p.be,p.hL,p.gP]));default:return a(le," ",$([p.be,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return _n("");case 2:var n=r.a;return $t(n);case 0:var t=r.a;return t(wr);default:var i=r.a;return a(i.gL,An,wr)}}()]))}),dh=T(function(e,r,n){var t=a(sh,e,r);switch(n.$){case 0:return e===5?mu($([t])):su($([t]));case 1:var i=n.a;return e===5?mu(a(P,t,i)):a(Rt,i,$([t]));case 2:var o=n.a;return e===5?a(Rt,$([t]),o):su(a(P,t,o));default:var i=n.a,o=n.b;return e===5?a(Rt,a(P,t,i),o):a(Rt,i,a(P,t,o))}}),du=v(function(e,r){return{$:2,a:e,b:r}}),pn=function(e){return{$:1,a:e}},Vn=v(function(e,r){switch(r.$){case 0:return pn(e);case 1:var n=r.a;return a(du,n,e);default:var t=r.a,i=r.b;return a(du,t,i)}}),ph=function(e){switch(e){case 0:return p.cM+(" "+p.dY);case 2:return p.cM+(" "+p.dZ);default:return p.cM+(" "+p.fB)}},gh=function(e){switch(e){case 0:return p.cN+(" "+p.fH);case 2:return p.cN+(" "+p.fA);default:return p.cN+(" "+p.fC)}},Ua=v(function(e,r){return a(Br,Sd(e),s$(r))}),jr=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),sn=function(e){return{$:1,a:e}},hh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return sn(R(u,0,0));case 1:var f=r.a;return sn(R(0,f,0));case 2:var m=r.a;return sn(R(0,0,m));case 3:var n=r.a;return sn(n);case 4:var n=r.a,s=r.b;return L(jr,R(0,0,0),R(1,1,1),n,s);default:var n=r.a;return L(jr,R(0,0,0),n,R(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,m=l.c;switch(r.$){case 0:var t=r.a;return sn(R(t,f,m));case 1:var i=r.a;return sn(R(u,i,m));case 2:var o=r.a;return sn(R(u,f,o));case 3:var n=r.a;return sn(n);case 4:var n=r.a,s=r.b;return L(jr,l,R(1,1,1),n,s);default:var c=r.a;return L(jr,l,c,R(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,m=l.c,d=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return L(jr,R(t,f,m),d,b,s);case 1:var i=r.a;return L(jr,R(u,i,m),d,b,s);case 2:var o=r.a;return L(jr,R(u,f,o),d,b,s);case 3:var x=r.a;return L(jr,x,d,b,s);case 4:var _=r.a,S=r.b;return L(jr,l,d,_,S);default:var C=r.a;return L(jr,l,C,b,s)}}}),aa=we(7),Sv=we(36),pu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(pi,n|i,t|o)}),nn=a(pi,0,0),Uo=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return R(nn,p.ee+(" "+t),$([h(vr,t,"height",n+"px")]));case 1:return R(a(ge,Sv,nn),p.c$,D);case 2:var i=e.a;return i===1?R(a(ge,lt,nn),p.c0,D):R(a(ge,lt,nn),p.ef+(" height-fill-"+k(i)),$([h(vr,p.fK+("."+(p.aw+(" > "+y("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h(vr,f,"min-height",k(o)+"px !important"),c=Uo(u),b=c.a,s=c.b,x=c.c;return R(a(ge,Wo,b),f+(" "+s),a(P,m,x));default:var l=e.a,u=e.b,f="max-height-"+k(l),m=h(vr,f,"max-height",k(l)+"px"),d=Uo(u),b=d.a,s=d.b,x=d.c;return R(a(ge,Wo,b),f+(" "+s),a(P,m,x))}},Cv=we(38),Oo=function(e){switch(e.$){case 0:var r=e.a;return R(nn,p.fu+(" width-px-"+k(r)),$([h(vr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return R(a(ge,Cv,nn),p.dP,D);case 2:var n=e.a;return n===1?R(a(ge,ut,nn),p.dQ,D):R(a(ge,ut,nn),p.fv+(" width-fill-"+k(n)),$([h(vr,p.fK+("."+(p.af+(" > "+y("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+k(t),u=h(vr,l,"min-width",k(t)+"px"),i=Oo(c),m=i.a,d=i.b,b=i.c;return R(a(ge,Go,m),l+(" "+d),a(P,u,b));default:var o=e.a,c=e.b,l="max-width-"+k(o),u=h(vr,l,"max-width",k(o)+"px"),f=Oo(c),m=f.a,d=f.b,b=f.c;return R(a(ge,Go,m),l+(" "+d),a(P,u,b))}},Di=we(27),bh=v(function(e,r){if(_e(e,Di))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return _e(i,c)&&_e(i,o)&&_e(i,l)&&i>=0&&i<=24;default:return!1}}),ta=we(6),gu=we(30),hu=we(29),_h=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var m=l.a,d=l.b;switch(m.$){case 0:var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 3:var _=m.a,b=m.b;if(a(cr,_,n)){var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else{var A=b+(" "+e),I=r,E=a(ge,_,n),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}case 1:var s=m.a,A=e,I=r,E=n,B=t,j=i,N=a(P,s,o),H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 4:var _=m.a,x=m.b;if(a(cr,_,n)){var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else if(a(bh,_,x)){var A=ct(x)+(" "+e),I=r,E=a(ge,_,n),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else{var A=ct(x)+(" "+e),I=r,E=a(ge,_,n),B=t,j=a(P,x,i),N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}case 10:var _=m.a,S=m.b,A=e,I=r,E=a(ge,_,n),B=a(hh,t,S),j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 7:var C=m.a;if(a(cr,ta,n)){var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else switch(C.$){case 0:var w=C.a,A=p.fu+(" width-px-"+k(w))+(" "+e),I=r,E=a(ge,ta,n),B=t,j=a(P,h(vr,"width-px-"+k(w),"width",k(w)+"px"),i),N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 1:var A=e+(" "+p.dP),I=r,E=a(ge,Cv,a(ge,ta,n)),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 2:var M=C.a;if(M===1){var A=e+(" "+p.dQ),I=r,E=a(ge,ut,a(ge,ta,n)),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else{var A=e+(" "+(p.fv+(" width-fill-"+k(M)))),I=r,E=a(ge,ut,a(ge,ta,n)),B=t,j=a(P,h(vr,p.fK+("."+(p.af+(" > "+y("width-fill-"+k(M))))),"flex-grow",k(M*1e5)),i),N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}default:var G=Oo(C),Z=G.a,ae=G.b,Te=G.c,A=e+(" "+ae),I=r,E=a(pu,Z,a(ge,ta,n)),B=t,j=X(Te,i),N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}case 8:var te=m.a;if(a(cr,aa,n)){var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else switch(te.$){case 0:var w=te.a,ie=k(w)+"px",re="height-px-"+ie,A=p.ee+(" "+(re+(" "+e))),I=r,E=a(ge,aa,n),B=t,j=a(P,h(vr,re,"height ",ie),i),N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 1:var A=p.c$+(" "+e),I=r,E=a(ge,Sv,a(ge,aa,n)),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 2:var M=te.a;if(M===1){var A=p.c0+(" "+e),I=r,E=a(ge,lt,a(ge,aa,n)),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else{var A=e+(" "+(p.ef+(" height-fill-"+k(M)))),I=r,E=a(ge,lt,a(ge,aa,n)),B=t,j=a(P,h(vr,p.fK+("."+(p.aw+(" > "+y("height-fill-"+k(M))))),"flex-grow",k(M*1e5)),i),N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}default:var J=Uo(te),Z=J.a,ae=J.b,Te=J.c,A=e+(" "+ae),I=r,E=a(pu,Z,a(ge,aa,n)),B=t,j=X(Te,i),N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}case 2:var de=m.a;switch(de.$){case 0:var A=e,I=a(Vn,"main",r),E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 1:var A=e,I=a(Vn,"nav",r),E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 2:var A=e,I=a(Vn,"footer",r),E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 3:var A=e,I=a(Vn,"aside",r),E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 4:var pe=de.a;if(pe<=1){var A=e,I=a(Vn,"h1",r),E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else if(pe<7){var A=e,I=a(Vn,"h"+k(pe),r),E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else{var A=e,I=a(Vn,"h6",r),E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}case 9:var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 8:var A=e,I=r,E=n,B=t,j=i,N=a(P,a(Ua,"role","button"),o),H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 5:var Me=de.a,A=e,I=r,E=n,B=t,j=i,N=a(P,a(Ua,"aria-label",Me),o),H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 6:var A=e,I=r,E=n,B=t,j=i,N=a(P,a(Ua,"aria-live","polite"),o),H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;default:var A=e,I=r,E=n,B=t,j=i,N=a(P,a(Ua,"aria-live","assertive"),o),H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var Gi=me.a;return X(i,Gi.hV)}}(),A=e,I=r,E=n,B=t,j=Te,N=o,H=h(dh,Se,me,c),W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e;case 6:var Re=m.a;if(a(cr,gu,n)){var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else{var A=ph(Re)+(" "+e),I=r,E=function(se){switch(Re){case 1:return a(ge,fv,se);case 2:return a(ge,vv,se);default:return se}}(a(ge,gu,n)),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}default:var Dt=m.a;if(a(cr,hu,n)){var A=e,I=r,E=n,B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}else{var A=gh(Dt)+(" "+e),I=r,E=function(se){switch(Dt){case 1:return a(ge,mv,se);case 2:return a(ge,$v,se);default:return se}}(a(ge,hu,n)),B=t,j=i,N=o,H=c,W=d;e=A,r=I,n=E,t=B,i=j,o=N,c=H,l=W;continue e}}}else{var u=Fc(t);if(u.$===1)return{aJ:a(P,zr(e),o),aM:c,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(P,zr(e+(" "+f)),o),aM:c,aR:n,aT:r,hV:a(P,mh(t),i)}}}),xh={$:0},wh=xh,$r=ee(function(e,r,n,t){return h(fh,e,t,ht(_h,zg(e),r,nn,wh,D,D,_g,sr(n)))}),an=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),yh={fO:q,fW:q,hH:Y({a2:0,b6:L(an,155/255,203/255,1,1),eV:z(0,0),bi:3})},Sh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gK;return c.$===1?Be(i,{gK:Y(o)}):i;case 1:var l=t.a,u=i.gx;return u.$===1?Be(i,{gx:Y(l)}):i;default:var f=t.a,m=i.eS;return m.$===1?Be(i,{eS:Y(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return yh;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(Qe,r,{gx:q,gK:q,eS:q},e))},Ch=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(wr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),wr);case 2:var i=r.a;return $t(i);default:return $t("")}}),Lh=T(function(e,r,n){var t=Sh(e),i=function(){var o=t.eS;return o===1?uv(t):hg(t)}();return a(Ch,i,L($r,wr,Kn,r,er($([n]))))}),vt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Lv=v(function(e,r){return{$:1,a:e,b:r}}),zv=function(e){return{$:2,a:e}},zh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),ao=function(e){return{$:3,a:e}},Pv=we(8),Mv=we(14),Tv=we(5),kv=we(4),Sa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ie(r)+("-"+(Ie(n)+("-"+(Ie(t)+("-"+Ie(i))))))},Yt=Ms,to=Ps,Dv=v(function(e,r){return X(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(le,"-",to(Yt(n)));case 4:var n=e.a;return e.b,a(le,"-",to(Yt(n)));default:var n=e.a.hc;return a(le,"-",to(Yt(n)))}}())}),Ph=function(){var e=$([ao("Open Sans"),ao("Helvetica"),ao("Verdana"),zh]);return $([a(Ce,Pv,h(vt,"bg-"+Sa(L(an,1,1,1,0)),"background-color",L(an,1,1,1,0))),a(Ce,Mv,h(vt,"fc-"+Sa(L(an,0,0,0,1)),"color",L(an,0,0,0,1))),a(Ce,kv,zv(20)),a(Ce,Tv,a(Lv,h(We,Dv,"font-",e),e))])}(),Mh=T(function(e,r,n){var t=e.hl;return h(Lh,t,a(P,_r(a(le," ",$([p.hA,p.fK,p.hL]))),X(Ph,r)),n)}),Vv={$:3},Fv=function(e){return{$:2,a:e}},qo=xd,Av=v(function(e,r){switch(r.$){case 1:var n=r.a;return No({gL:v(function(o,c){return a(qo,e,a(n.gL,o,c))}),hV:n.hV});case 0:var t=r.a;return ot(a(St,qo(e),t));case 2:var i=r.a;return Fv(i);default:return Vv}}),Bc=Av,Th=qo,kh=function(e){return{$:0,a:e}},ke=kh,Dh=yd,br=Dh,Iv={$:1},Vi=function(e){return{$:5,a:e}},Ev=Vi(0),Rr=T(function(e,r,n){return L(an,e/255,r/255,n/255,1)}),Bv=h(Rr,0,0,0),Vh=Br("d"),Fh=Br("fill"),Ah=Br("height"),Rv=v$("http://www.w3.org/2000/svg"),Ih=Rv("path"),Eh=Rv("svg"),Bh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Rh=function(e){var r=Bh(e);return"rgba("+(k(Ae(r.hu*255))+(","+k(Ae(r.gA*255))+(","+k(Ae(r.fS*255))+(","+ve(r.fI)+")"))))},jh=Br("viewBox"),Nh=Br("width"),ma=T(function(e,r,n){return a(Eh,$([jh("0 0 100 100"),Nh(k(e)),Ah(k(e))]),$([a(Ih,$([Vh(n),Fh(Rh(r))]),D)]))}),Hh={$:1},pr=Hh,jv=function(e){return{$:7,a:e}},ce=jv,Le=v(function(e,r){return L($r,wr,Kn,a(P,ce(pr),a(P,ye(pr),e)),er($([r])))}),Nv=function(e){return{$:2,a:e}},xe=Nv(1),En={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ha={c4:260,bE:54},on=function(e){return a(Ce,Pv,h(vt,"bg-"+Sa(e),"background-color",e))},Wh=we(28),xn=function(e){return a(Ce,Wh,h(vt,"bc-"+Sa(e),"border-color",e))},Xt=1,Mr=v(function(e,r){return L($r,Xt,Kn,a(P,_r(p.gc+(" "+p.bt)),a(P,ye(pr),a(P,ce(pr),e))),er(r))}),Gh=h(Rr,83,83,83),Hv=ee(function(e,r,n,t){return L(an,e/255,r/255,n/255,t)}),Fi=L(Hv,56,56,56,.25),qe=Vv,ft=Je(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),mt=we(2),Bn=function(e){var r=e;return a(Ce,mt,V(ft,"p-"+k(e),r,r,r,r))},Wv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Gv=we(3),Uv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),wn=function(e){return a(Ce,Gv,h(Wv,a(Uv,e,e),e,e))},Uh=L(Hv,0,0,0,0),Oh=function(e){return{$:4,a:e}},Jo=0,Pn=v(function(e,r){return L($r,Jo,Kn,a(P,_r(p.bt+(" "+p.ax)),a(P,ce(pr),a(P,ye(pr),e))),er(r))}),qh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(uv,{gx:{fO:q,fW:q,hH:q},gK:1,eS:0},n.hV));case 2:var t=e.a;return mi(_n(t));default:return mi(_n(""))}},Jh=v(function(e,r){return qh(e(r))}),Yh=wd,Xh=v(function(e,r){return ot(h(Yh,Jh,e,r))}),yn=function(e){return a(Ce,Mv,h(vt,"fc-"+Sa(e),"color",e))},Rc=h(Rr,195,195,195),Mn=v(function(e,r){return{$:3,a:e,b:r}}),Ov=we(13),Kh=a(Mn,Ov,p.h7),Zh=we(20),qv=a(Mn,Zh,p.hF),Zn=function(e){return a(Ce,kv,zv(e))},jc=a(Mn,Ov,p.fV),Yo=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return V(fe,n,t,a(e,t,i),a(Yo,e,o),a(Yo,e,c))}),Jv=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,mt,V(ft,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,mt,V(ft,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Sn=function(e){return Fv(e)},Qh=function(e){return h(yc,T(function(r,n,t){return a(P,n,t)}),D,e)},e3=v(function(e,r){return{$:3,a:e,b:r}}),r3=v(function(e,r){return{$:2,a:e,b:r}}),n3=v(function(e,r){return{$:0,a:e,b:r}}),a3=v(function(e,r){return{$:1,a:e,b:r}}),Tn=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),t3=L(Tn,0/255,0/255,0/255,1),Ai=function(e){return{$:6,a:e}},i3=Ai(0),Ii=function(e){return{$:2,a:e}},o3={$:6},Yv=Ii(o3),Xv=T(function(e,r,n){if(r.$===1)return r.a,L($r,Xt,pn("label"),e,er($([n])));var t=r.a,i=r.b,o=r.c,c=L($r,wr,Kn,i,er($([o])));switch(t){case 2:return L($r,Xt,pn("label"),a(P,_r(p.ci),e),er($([c,n])));case 3:return L($r,Xt,pn("label"),a(P,_r(p.ci),e),er($([n,c])));case 0:return L($r,Jo,pn("label"),a(P,_r(p.ci),e),er($([n,c])));default:return L($r,Jo,pn("label"),a(P,_r(p.ci),e),er($([c,n])))}}),Xo=Ua,un=Vi(1),Kv="Enter",c3=function(e){return{$:5,a:e}},Zv=function(e){if(e.$===1){var r=e.a;return Ii(c3(r))}else return Un},Qv=function(e){return e.$===1},l3=function(e){return{$:0,a:e}},Nc=f$,u3=v(function(e,r){return a(Nc,e,l3(r))}),ef=function(e){return a(u3,"click",ur(e))},$3=js,v3=function(e){return{$:2,a:e}},f3=v(function(e,r){return a(Nc,e,v3(r))}),rf=function(e){var r=function(t){var i=e(t);if(i.$===1)return $3("No key matched");var o=i.a;return ur(o)},n=a(Q,r,a(K,"key",wa));return Ve(a(f3,"keydown",a(li,function(t){return z(t,!0)},n)))},m3=we(21),Rn=a(Mn,m3,p.gf),nf=" ",af=function(e){return a(Br,"tabIndex",k(e))},s3=a(St,Ve,af),d3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bI,c=X($([Qv(n)?Un:wn(6),Ve(ef(o(!i))),Yv,rf(function(l){return _e(l,Kv)||_e(l,nf)?Y(o(!i)):q}),s3(0),Rn,i3,ce(xe)]),e);return h(Xv,a(P,Ve(a(Xo,"role","checkbox")),a(P,Ve(a(Xo,"aria-checked",i?"true":"false")),a(P,Zv(n),c))),n,L($r,wr,Kn,$([un,ye(xe),ce(pr)]),er($([t(i)]))))}),p3=T(function(e,r,n){return X(a(it,e-In(n),ki(r)),n)}),gi=cs,tf=function(e){var r=function(n){return n<10?k(n):ki(Q$(87+n))};return e<16?r(e):X(tf(e/16|0),r(a(gi,16,e)))},g3=a(Xe,tf,a(p3,2,"0")),Hc=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},h3=function(e){var r=Hc(e),n=r.hu,t=r.gA,i=r.fS;return a(le,"",a(P,"#",a(ne,a(Xe,Ae,g3),$([n*255,t*255,i*255]))))},Wc=we(12),of=a(Mn,Wc,p.h$),Ko=Ai(1),qn=ls,b3=function(e){return e*qn/180},_3=function(e){return{$:1,a:e}},Gc=v(function(e,r){return{$:10,a:e,b:r}}),x3=we(26),w3=function(e){return a(Gc,x3,_3(-e))},sa=T(function(e,r,n){return L(an,e,r,n,1)}),y3=an,S3=v(function(e,r){return{$:4,a:e,b:r}}),C3=we(24),L3=function(e){return a(Gc,C3,a(S3,R(0,0,1),e))},z3=we(17),jn=function(e){return a(Ce,z3,h(vr,"br-"+k(e),"border-radius",k(e)+"px"))},P3=function(e){return pa($([e.ej?"box-inset":"box-",Ie(e.eV.a)+"px",Ie(e.eV.b)+"px",Ie(e.a2)+"px",Ie(e.bi)+"px",Sa(e.b6)]))},M3=we(19),T3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,M3,h(vr,P3(r),"box-shadow",Ho(r)))},bu=v(function(e,r){return{$:12,a:e,b:r}}),_u=we(0),k3=function(e){return e?a(Ce,_u,a(bu,"transparent",1)):a(Ce,_u,a(bu,"visible",0))},io=h(sa,1,1,1),Uc=Je(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Ei=function(e){return a(Ce,Di,V(Uc,"b-"+k(e),e,e,e,e))},D3=v(function(e,r){return a(Ce,Di,V(Uc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Ct=function(e){var r=e.b2,n=e.cH,t=e.g4,i=e.hx;return _e(n,r)&&_e(t,i)?_e(n,i)?Ei(n):a(D3,t,n):a(Ce,Di,V(Uc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},V3=function(e){return a(Le,$([_r("focusable"),ce(ke(14)),ye(ke(14)),yn(io),un,Zn(9),of,jn(3),xn(e?h(sa,59/255,153/255,252/255):h(sa,211/255,211/255,211/255)),T3({a2:1,b6:e?L(y3,238/255,238/255,238/255,0):h(sa,238/255,238/255,238/255),eV:z(0,0),bi:1}),on(e?h(sa,59/255,153/255,252/255):io),Ei(e?0:1),jo(a(Le,$([xn(io),ye(ke(6)),ce(ke(9)),L3(b3(-45)),Ko,un,w3(1),k3(!e),Ct({b2:2,g4:2,hx:0,cH:0})]),qe))]),qe)},F3=kr("htmlFor"),Zo=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),hi=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return e(n)}}),cf=ee(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),A3=Xd,I3=Is,E3=v(function(e,r){if(r.$)return tr(e);var n=r.a;return Ge(n)}),B3=Yd,R3=function(e){return a(B3,{f2:!1,hb:!1},e)},lf=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return q},j3=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return Ge(e(n))}}),N3=function(e){return{$:2,a:e}},H3=function(e){return{$:0,a:e}},W3=function(e){return{$:1,a:e}},oo=v(function(e,r){return Jr(r)-Jr(e)}),co=T(function(e,r,n){var t=Jr(n);return he(Jr(e),t)<1&&he(t,Jr(r))<1}),G3=v(function(e,r){var n=function(i){return he(i,e)<0?Ge(i):tr(W3(r))},t=h(co,"0","9",r)?Ge(a(oo,"0",r)):h(co,"a","z",r)?Ge(10+a(oo,"a",r)):h(co,"A","Z",r)?Ge(10+a(oo,"A",r)):tr(H3(r));return a(hi,n,t)}),uf=v(function(e,r){var n=Ma(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(hi,function(c){return a(hi,function(l){return Ge(c+l*e)},a(uf,e,o))},a(G3,e,i))}),U3=v(function(e,r){return 2<=e&&e<=36?a(uf,e,Eo(r)):tr(N3(e))}),O3=U3(16),$f=T(function(e,r,n){return L(Tn,e,r,n,1)}),q3=ee(function(e,r,n,t){return L(Tn,e,r,n,t)}),Lt=os,J3=v(function(e,r){var n=a(Lt,10,e);return Ae(r*n)/n}),Y3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=Z$(n);if(t.b&&!t.b.b){var i=t.a;return I3($([i,i]))}else return n};return a(Xe,Yt,a(Xe,function(n){return a(Ne,function(t){return h(A3,1,t,n)},R3(e))},a(Xe,Zo(lf),a(Xe,Ne(function(n){return n.hW}),a(Xe,Ne(On(Er)),a(Xe,E3("Parsing hex regex failed"),hi(function(n){var t=a(ne,a(Xe,r,a(Xe,O3,j3(Wa))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,m=f.a.a;return Ge(L(q3,i/255,c/255,u/255,a(J3,2,m/255)))}else break e;else{var i=t.a.a,d=t.b,c=d.a.a,b=d.b,u=b.a.a;return Ge(h($f,i/255,c/255,u/255))}else break e;return tr("Parsing ints from hex failed")})))))))}(),X3=kr("id"),K3=fn("input"),Z3=fn("label"),vf=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Q3=vf(0),eb=kr("name"),rb=function(e){return z(e,!0)},nb=function(e){return{$:1,a:e}},ab=v(function(e,r){return a(Nc,e,nb(r))}),tb=v(function(e,r){return h(Qe,K,r,e)}),ib=a(tb,$(["target","value"]),wa),ff=function(e){return a(ab,"input",a(li,rb,a(li,e,ib)))},ob=a(Mn,Wc,p.h4),mf=a(Mn,Wc,p.h8),Oc=function(e){return a(lv,5,e)},qc=function(e){return a(Ce,Tv,a(Lv,h(We,Dv,"ff-",e),e))},cb=h(Rr,195,195,195),sf=h(Rr,69,69,69),lb=vf(2),ub={$:2},Jc=ub,$b=we(32),vb=we(31),xu=function(e){return h(Qe,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return q;else{var t=n.a;return Y(t)}}),q,e)},fb=v(function(e,r){return a(Ee,r,h(Qe,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return Y(z(i,c))}else return q;else{var i=t.a;return Y(i)}}),q,e))}),wu=function(e){return h(Qe,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return q;else{var t=n.a;return Y(t)}}),q,e)},mb=we(33),sb=kr("max"),db=kr("min"),pb=v(function(e,r){return a(Ce,Gv,h(Wv,a(Uv,e,r),e,r))}),gb=function(e){return a(kr,"step",e)},df=kr("type"),pf=kr("value"),Ca=Nv,hb=zd,gf=v(function(e,r){switch(r.$){case 0:return Un;case 2:var n=r.a;return Ii(n);case 6:var t=r.a;return Ai(t);case 5:var i=r.a;return Vi(i);case 7:var t=r.a;return jv(t);case 8:var t=r.a;return ov(t);case 3:var t=r.a,i=r.b;return a(Mn,t,i);case 4:var o=r.a,c=r.b;return a(Ce,o,c);case 9:var l=r.a,u=r.b;return a(cv,l,a(Av,e,u));case 1:var f=r.a;return Ve(a(hb,e,f));default:var m=r.a,d=r.b;return a(Gc,m,d)}}),bb=T(function(e,r,n){return a(Pn,$([ce(xe),ye(a(Ee,xe,n)),un]),$([a(Le,$([ce(Ca(Ae(e*1e4)))]),qe),a(Le,a(P,un,a(ne,gf(xt),r)),qe),a(Le,$([ce(Ca(Ae(be(1-e)*1e4)))]),qe)]))}),_b=T(function(e,r,n){return a(Mr,$([ye(xe),ce(a(Ee,xe,n)),Ko]),$([a(Le,$([ye(Ca(Ae(be(1-e)*1e4)))]),qe),a(Le,a(P,Ko,a(ne,gf(xt),r)),qe),a(Le,$([ye(Ca(Ae(e*1e4)))]),qe)]))}),hf=v(function(e,r){var n=wu(e),t=xu(e),i=function(){var C=z(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var w=C.a.a.a,M=C.b.a.a;return he(M,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),c=r.ic,l=c,u=xu(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=wu(l),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(d+("-"+f)),s=$([a(ue,"width",d),a(ue,"height",f)]),x=a(fb,e,z(5,5)),_=x.a,S=x.b;return h(Xv,$([Qv(r.em)?Un:a(pb,_,S),Yv,ce(function(){if(n.$===1)return xe;if(n.a.$){var C=n.a;return C}else return pr}()),ye(function(){if(t.$===1)return pr;if(t.a.$){var C=t.a;return C}else return pr}())]),r.em,a(Pn,$([ce(a(Ee,xe,n)),ye(a(Ee,ke(20),t))]),$([L($r,wr,pn("input"),$([Zv(r.em),a(Ce,$b,a(Za,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,mb,a(Za,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,vb,a(Za,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ve(zr(b+" ui-slide-bar focusable-parent")),Ve(ff(function(C){var w=K$(C);if(w.$===1)return r.bI(0);var M=w.a;return r.bI(M)})),Ve(df("range")),Ve(gb(function(){var C=r.cE;if(C.$===1)return"any";var w=C.a;return ve(w)}())),Ve(db(ve(r.cr))),Ve(sb(ve(r.cq))),Ve(pf(ve(r.cI))),i?Ve(a(Xo,"orient","vertical")):Un,ce(i?a(Ee,ke(20),t):a(Ee,xe,n)),ye(i?a(Ee,xe,n):a(Ee,ke(20),t))]),er(D)),a(Le,a(P,ce(a(Ee,xe,n)),a(P,ye(a(Ee,ke(20),t)),X(e,$([Oc(i?h(_b,o,a(P,_r("focusable-thumb"),l),n):h(bb,o,a(P,_r("focusable-thumb"),l),t))])))),qe)])))}),xb=h(sa,.5,.5,.5),bf=Er,yu=function(e){var r=e.c3,n=e.cI,t=e.cr,i=e.cq,o=e.cE,c=e.bI;return a(Le,$([ce(xe)]),a(hf,$([wn(2),Oc(a(Le,$([ce(xe),ye(ke(16)),un,on(sf),jn(4)]),qe))]),{em:a(lb,D,a(Pn,$([ce(xe)]),$([a(Le,$([ob]),Sn(r)),a(Le,$([ce(xe),mf,qc($([Jc]))]),Sn(ve(n)))]))),cq:i,cr:t,bI:c,cE:Y(o),ic:bf($([ce(ke(12)),ye(ke(12)),jn(4),Ei(0),xn(xb),on(cb)])),cI:n}))},wb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),yb=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(d3,D,{f6:c,gM:V3,em:a(Q3,D,Sn(e)),bI:e3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return yu({c3:e,cq:o,cr:i,bI:n3(e),cE:.001*(o-i),cI:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return yu({c3:e,cq:o,cr:i,bI:a(Xe,Ae,a3(e)),cE:1,cI:c});default:var c=r.a;return a(Le,$([ce(xe)]),gn(a(ya,D,$([a(ya,$([a(br,"margin-bottom","6px")]),$([a(Z3,$([F3(e)]),$([Ec(e)]))])),a(K3,$([df("color"),a(br,"width","100%"),a(br,"height","26px"),a(br,"padding","0px"),X3(e),eb(e),ff(function(l){return a(r3,e,a(wb,t3,Y3(l)))}),pf(h3(c))]),D)]))))}}),Qo=h(Rr,255,255,255),Sb=function(e){return a(Mr,$([ce(xe),wn(8),a(Jv,0,14),Ct({b2:1,g4:0,hx:0,cH:0}),xn(Fi)]),$([a(Le,$([Zn(16),jc,yn(Qo)]),Sn(e.hc)),a(Mr,$([ce(xe),wn(6)]),Qh(a(Yo,yb,e.aN)))]))},Cb=function(e){return a(Mr,$([ce(xe),ye(xe),yn(Rc),Zn(12),Kh,qv]),a(ne,Sb,e))},Lb=Xh(Cb),zb=function(e){return a(Mr,$([ce(xe),ye(xe)]),$([a(Pn,$([wn(14),ce(xe)]),D),a(Bc,Oh,Lb(Xn(e).gb))]))},Pb=function(e){return{$:6,a:e}},Mb=ee(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Tb=function(e){var r=e.cH,n=e.hx,t=e.b2,i=e.g4;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,mt,V(ft,"p-"+k(r),o,o,o,o))}else return a(Ce,mt,V(ft,L(Mb,r,n,t,i),r,n,t,i))},kb=function(e){return{$:0,a:e}},Db=function(e){return{$:1,a:e}},Vb=Db,Fb=function(e){var r=e.b.X;return Gn(r)},bi=h(Rr,255,60,0),Ab=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Gn(r)+1+Gn(n)},Ib=function(e){var r=z(Fb(e),Ab(e)-1),n=r.a,t=r.b;return a(Le,$([ce(xe),un]),a(hf,$([Oc(a(Pn,$([ce(xe),ye(ke(4)),un,on(sf),jn(2)]),$([a(Le,$([ce(Ca(n)),ye(xe),on(bi),jn(2)]),qe),a(Le,$([ce(Ca(t-n))]),qe)])))]),{em:Vb(""),cq:t,cr:0,bI:a(Xe,Ae,kb),cE:Y(1),ic:bf($([ce(ke(12)),ye(ke(12)),jn(6),on(bi)])),cI:n}))},Eb=Ai(2),Kt=h(Rr,220,220,220),Bb=function(e){var r=e.a,n=function(){return r.$?$([yn(Kt)]):$([yn(bi)])}();return a(Le,X(n,$([Zn(14),Eb,mf,qc($([Jc]))])),Sn(a(av,3,Xn(e).cU)))},Rb=function(e){e.a;var r=e.b.X;return a(Ne,function(n){return Ae(60/(Xn(e).cU-n))},a(Ne,a(Xe,W$,function(n){return n.cU}),lf(a(Y$,59,r))))},jb=function(e){var r=Rb(e);if(r.$===1)return qe;var n=r.a;return a(Le,$([Zn(14),yn(Rc),qc($([Jc]))]),Sn(k(n)+" FPS"))},Su={$:1},Nb={$:3},Hb={$:2},Wb={$:8},Gb=c$,Ub=v(function(e,r){return a(pc,e,Gb(r))}),Ob=Ub("disabled"),qb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Jb=function(e){return a(yt,qb,e)?Un:_r("focusable")},_i=a(St,Ve,ef),_f=v(function(e,r){var n=r.eW,t=r.em;return L($r,wr,Kn,a(P,ce(pr),a(P,ye(pr),a(P,_r(p.ca+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),a(P,Rn,a(P,Jb(e),a(P,Ii(Wb),a(P,Ve(af(0)),function(){if(n.$===1)return a(P,Ve(Ob(!0)),e);var i=n.a;return a(P,_i(i),a(P,rf(function(o){return _e(o,Kv)||_e(o,nf)?Y(i):q}),e))}()))))))),er($([t])))}),Cu=v(function(e,r){return a(_f,D,{em:a(Le,$([ce(ke(36)),Bn(3),yn(r),of,Zn(12),jc,xn(r),Ei(1),jn(4)]),Sn("REC")),eW:Y(e)})}),Lu=T(function(e,r,n){return a(_f,D,{em:gn(h(ma,20,n,e)),eW:Y(r)})}),Yb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Pn,D,$([a(Le,$([ce(ke(40))]),function(){switch(r.$){case 0:return a(Cu,Su,bi);case 1:return a(Cu,Hb,Kt);default:return qe}}()),a(Le,$([ce(ke(28))]),function(){switch(r.$){case 0:return qe;case 1:return dn(n)?qe:h(Lu,En.hp,Nb,Kt);default:return h(Lu,En.ho,Su,Kt)}}())]))},Xb=function(e){return a(Mr,$([ce(xe)]),$([Ib(e),a(Pn,$([ce(xe),wn(14),a(Jv,0,6),un]),$([Yb(e),jb(e),Bb(e)]))]))},Kb=function(e){return a(Mr,$([ce(xe),wn(14),Tb({b2:20,g4:0,hx:0,cH:0}),Ct({b2:1,g4:0,hx:0,cH:0}),xn(Fi)]),$([a(Le,$([Zn(16),jc,yn(Rc)]),Sn("Time Travel")),a(Bc,Pb,Xb(e))]))},Zb=v(function(e,r){return a(Mr,$([Xn(r).dD.im>600?on(Gh):on(Uh),Ct({b2:0,g4:0,hx:1,cH:0}),xn(Fi),ce(ke(ha.c4)),ye(xe)]),$([function(){return e?qe:a(Mr,$([ce(xe),ye(xe),Bn(14),wn(14)]),$([Kb(r),zb(r)]))}()]))}),Qb=function(e){return{$:3,a:e}},zu=Vi(2),e1=h(Rr,232,78,50),r1=h(Rr,48,48,48),n1=function(e){return a(kr,"href",Ld(e))},a1=Br("rel"),t1=kr("target"),Pu=v(function(e,r){var n=r.fn,t=r.em;return L($r,wr,pn("a"),a(P,Ve(n1(n)),a(P,Ve(a1("noopener noreferrer")),a(P,Ve(t1("_blank")),a(P,ce(pr),a(P,ye(pr),a(P,_r(p.ca+(" "+(p.ax+(" "+p.et)))),e)))))),er($([t])))}),Oa=kr("title"),i1=h(Rr,31,161,242),o1=function(e){var r=T(function(o,c,l){var u=_e(c,e)?Qo:r1;return a(Le,$([rn(Oa(o)),_i(Qb(c)),Rn,Bn(7)]),gn(h(ma,40,u,l)))}),n=a(Mr,$([Ev]),$([h(r,"Configurations",0,En.hN)])),t=a(Mr,D,$([a(Pu,$([rn(Oa("Twitter")),zu,Rn,Bn(7)]),{em:gn(h(ma,40,i1,En.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(Pu,$([rn(Oa("Source Code")),zu,Rn,Bn(7)]),{em:gn(h(ma,40,e1,En.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([ce(ke(ha.bE)),Bn(4),_i(Iv),Ct({b2:1,g4:0,hx:0,cH:0}),xn(Fi),Rn,rn(Oa("Activate Distraction Free Mode"))]),gn(h(ma,46,Qo,En.fx)));return a(Mr,$([ce(ke(ha.bE)),ye(xe),qv,on(Bv)]),$([i,n,t]))},c1=function(e){var r=a(Le,$([ce(ke(ha.bE)),Ev,Bn(4),_i(Iv),Rn,rn(Oa("Deactivate Distraction Free Mode (A)"))]),gn(h(ma,46,Bv,En.fx)));return e.bw?r:a(Pn,$([ce(ke(ha.bE+ha.c4)),ye(xe)]),$([o1(e.bp),a(Zb,e.bp,e.R)]))},l1=T(function(e,r,n){var t=sg(n.R),i=Xn(n.R);return h(Mh,{hl:$([pg({fO:q,fW:q,hH:q})])},$([ce(ke(at(i.dD.im))),ye(ke(at(i.dD.gH))),rn(a(br,"-webkit-font-smoothing","antialiased")),rn(a(br,"pointer-events","none")),rn(a(br,"touch-action","none")),rn(a(br,"user-select","none")),jo(a(Bc,fg,a(r,i,t))),jo(c1(n))]),gn(a(Th,mi(mg),a(e,i,t))))}),u1=yr(function(e,r,n,t,i,o){var c=v(function(u,f){return z(L(og,r,o,u,f),Xl)}),l=function(u){var f=a(U$,n,u.gY);return z({bp:0,bw:!0,R:a(cg,f,t),dO:0},Xl)};return C0({gS:l,hX:vg,ii:c,ik:a(l1,e,i)})}),$1=ee(function(e,r,n,t){return ar(u1,e,r,n,t,v(function(i,o){return qe}),T(function(i,o,c){return c}))}),v1=T(function(e,r,n){return L($1,e,r,D,n)}),f1=function(e){return{}},m1=v(function(e,r){return r}),st=function(e){return e},qa=function(e){return st(qn*(e/180))},hn=gs,s1=v(function(e,r){var n=e,t=r,i=t.dV-n.dV,o=t.is-n.is,c=t.io-n.io,l=a(rr,be(c),a(rr,be(o),be(i)));if(l){var u=i/l,f=o/l,m=c/l,d=hn(m*m+f*f+u*u);return Y({io:m/d,is:f/d,dV:u/d})}else return q}),lo=function(e){return e},Yc=v(function(e,r){var n=e,t=r;return{io:t.is*n.dV-t.dV*n.is,is:t.dV*n.io-t.io*n.dV,dV:t.io*n.is-t.is*n.io}}),Zt=function(e){var r=e,n=a(rr,be(r.io),a(rr,be(r.is),be(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=hn(o*o+i*i+t*t);return Y({io:o/c,is:i/c,dV:t/c})}else return q},xi=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),d1=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dV*n.dV}),xf=v(function(e,r){var n=e,t=r;return he(t,n)>0}),p1=v(function(e,r){var n=e,t=r;return he(t,n)<0}),g1=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),h1=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),b1=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Ir=0,wf={io:0,is:0,dV:0},_1=T(function(e,r,n){return a(Zo,function(t){var i=a(g1,a(h1,t,r),r);return a(Zo,function(o){var c=a(Yc,r,e),l=a(d1,n,c),u=a(xf,Ir,l)?c:a(p1,Ir,l)?b1(c):wf;return a(Ne,function(f){return R(t,o,f)},Zt(u))},Zt(i))},Zt(e))}),x1=function(e){var r=e,n=be(r.dV),t=be(r.is),i=be(r.io);if(he(i,t)<1)if(he(i,n)<1){var o=hn(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=hn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(he(t,n)<1){var o=hn(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=hn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},Xc=function(e){var r=x1(e),n=r,t=n,i=e,o=i,c={io:o.is*t.dV-o.dV*t.is,is:o.dV*t.io-o.io*t.dV,dV:o.io*t.is-o.is*t.io};return z(r,c)},da=function(e){var r=e;return r},$n=function(e){return e},w1=v(function(e,r){var n=Xc(e),t=n.a,i=n.b;return $n({dm:r,dT:t,dU:i,dW:e})}),y1=function(e){var r=a(xi,e.ba,e.d9),n=da(e.fm),t=a(Yc,r,n),i=h(_1,r,n,t);if(i.$){var f=Zt(r);if(f.$){var d=Xc(e.fm),b=d.a,s=d.b;return $n({dm:e.d9,dT:s,dU:e.fm,dW:b})}else{var m=f.a;return a(w1,m,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return $n({dm:e.d9,dT:u,dU:l,dW:c})}},Qn={io:0,is:0,dV:0},S1=function(e){return{$:0,a:e}},or=function(e){var r=e;return be(r)},Qt=function(e){var r=e;return .5*r},C1=vs,L1=function(e){var r=e;return C1(r)},z1=function(e){var r=Qt(or(e.fq)),n=L1(r);return{dx:S1(n),dN:e.dN}},cn=function(e){return e},Bi=cn({io:0,is:1,dV:0}),P1=function(e){var r=e.ba,n=e.d9,t=e.fm;return z1({fq:qa(40),dN:y1({d9:lo(n),ba:lo(r),fm:a(Ee,Bi,a(s1,Qn,lo(t)))})})},M1=P1({d9:{io:0,is:10,dV:30},ba:{io:0,is:10,dV:0},fm:{io:0,is:1,dV:0}}),T1=L(Tn,114/255,159/255,207/255,1),k1=L(Tn,52/255,101/255,164/255,1),D1=L(Tn,115/255,210/255,22/255,1),Kc=function(e){return{$:5,a:e}},yf=function(e){return Kc(e)},Zc=v(function(e,r){return{$:4,a:e,b:r}}),Sf=function(e){return e},ka=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dV:t.dV+n.dV}}),V1=v(function(e,r){return Sf(z(e,a(ka,r,e)))}),Cf=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),F1=v(function(e,r){var n=r.a,t=r.b,i=r.c;return h(Cf,e(n),e(t),e(i))}),Yr=function(e){return e},uo=v(function(e,r){return a(Zc,e,a(V1,Qn,a(F1,Yr,r)))}),A1=L(Tn,204/255,0/255,0/255,1),I1=yf($([a(uo,A1,R(100,0,0)),a(uo,D1,R(0,100,0)),a(uo,k1,R(0,0,100))])),Qc=v(function(e,r){return{$:0,a:e,b:r}}),$o=v(function(e,r){var n=e,t=r;return he(t,n)>-1}),vo=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),ln=v(function(e,r){var n=e,t=r;return t-n}),E1=cn({io:-1,is:0,dV:0}),B1=cn({io:0,is:-1,dV:0}),Lf=cn({io:0,is:0,dV:-1}),zf=cn({io:1,is:0,dV:0}),el=cn({io:0,is:0,dV:1}),Ke=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),R1=yr(function(e,r,n,t,i,o){var c=a($o,n,o)?el:Lf,l=a($o,r,i)?Bi:B1,u=a($o,e,t)?zf:E1,f=R(or(a(ln,e,t)),or(a(ln,r,i)),or(a(ln,n,o))),m=h(Ke,a(vo,e,t),a(vo,r,i),a(vo,n,o)),d=$n({dm:m,dT:u,dU:l,dW:c});return{fN:d,a4:f}}),Nn=function(e){var r=e;return r.io},Hn=function(e){var r=e;return r.is},Wn=function(e){var r=e;return r.dV},j1=v(function(e,r){return ar(R1,Nn(e),Hn(e),Wn(e),Nn(r),Hn(r),Wn(r))}),ec=T(function(e,r,n){return{io:e,is:r,dV:n}}),N1=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=R(n/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(Qc,e,a(j1,h(ec,-c,-l,-u),h(ec,c,l,u)))}),H1=ee(function(e,r,n,t){var i=R(e,r,n),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,f=l*2-u,m=function(x){var _=x<0?x+1:x>1?x-1:x;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},d=m(o-1/3),b=m(o),s=m(o+1/3);return L(Tn,s,b,d,t)}),W1=T(function(e,r,n){return L(H1,e,r,n,1)}),rc=function(e){return{$:0,a:e}},Pf=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Mf=T(function(e,r,n){return he(n,e)<0?e:he(n,r)>0?r:n}),fo=function(e){return h(Mf,0,1,e<=.04045?e/12.92:a(Lt,(e+.055)/1.055,2.4))},zt=Qd,G1=function(e){var r=Hc(e),n=r.hu,t=r.gA,i=r.fS;return h(zt,fo(n),fo(t),fo(i))},Tf=function(e){return h(Pf,0,rc(G1(e)),rc(0))},rl=v(function(e,r){return{$:2,a:e,b:r}}),kf=v(function(e,r){return{$:3,a:e,b:r}}),Df=v(function(e,r){return{$:1,a:e,b:r}}),U1=T(function(e,r,n){return{io:e,is:r,dV:n}}),O1=function(e){var r=e;return r},nl=function(e){var r=e;return O1(r.fN)},al=function(e){var r=e;return r.a4},Da=function(e){var r=e;return r.dm},ea=function(e){var r=e;return r.dT},ra=function(e){var r=e;return r.dU},na=function(e){var r=e;return r.dW},q1=v(function(e,r){return $n({dm:a(ka,e,Da(r)),dT:ea(r),dU:ra(r),dW:na(r)})}),J1=v(function(e,r){return{fN:a(q1,e,nl(r)),a4:al(r)}}),Ri=v(function(e,r){return{gm:r,dm:e}}),Y1=v(function(e,r){var n=r;return a(Ri,a(ka,e,n.dm),n.gm)}),X1=v(function(e,r){var n=r;return{m:a(Y1,e,n.m),g5:n.g5,hs:n.hs}}),tl=function(e){var r=e;return r},Vf=v(function(e,r){var n=tl(r),t=n.a,i=n.b;return Sf(z(e(t),e(i)))}),K1=v(function(e,r){return a(Vf,ka(e),r)}),il=function(e){var r=e;return r.f4},ol=function(e){var r=e;return r.hs},Ff=v(function(e,r){return{f4:r,hs:or(e)}}),Z1=v(function(e,r){return a(Ff,ol(r),a(ka,e,il(r)))}),Af=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return R(e(t),e(i),e(o))}),Q1=v(function(e,r){return a(Af,ka(e),r)}),If=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(U1,n,t,i);switch(r.$){case 0:var m=r.a,c=r.b;return a(Qc,m,a(J1,o,c));case 1:var m=r.a,l=r.b;return a(Df,m,a(Q1,o,l));case 3:var m=r.a,u=r.b;return a(kf,m,a(Z1,o,u));case 2:var m=r.a,f=r.b;return a(rl,m,a(X1,o,f));case 4:var m=r.a,d=r.b;return a(Zc,m,a(K1,o,d));default:var b=r.a;return Kc(a(ne,If(R(n,t,i)),b))}}),Ef=function(e){return If(R(0,e,0))},Jn=us,La=$s,ei=T(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Jn(c),u=La(c),f=t.gm,m=f,d=m.io*u,b=l*d,s=d*d,x=m.is*u,_=l*x,S=d*x,C=x*x,w=1-2*(s+C),M=m.dV*u,G=l*M,Z=2*(S-G),ae=2*(S+G),te=d*M,ie=2*(te+_),re=2*(te-_),J=x*M,de=2*(J-b),pe=2*(J+b),Me=M*M,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+Z*o.is+ie*o.dV,is:ae*o.io+me*o.is+de*o.dV,dV:re*o.io+pe*o.is+w*o.dV}}),Pt=T(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Jn(c),u=La(c),f=t.dm,m=f,d=o.io-m.io,b=o.is-m.is,s=o.dV-m.dV,x=t.gm,_=x,S=_.io*u,C=l*S,w=S*S,M=_.is*u,G=l*M,Z=S*M,ae=M*M,te=1-2*(w+ae),ie=_.dV*u,re=l*ie,J=2*(Z-re),de=2*(Z+re),pe=S*ie,Me=2*(pe+G),Se=2*(pe-G),me=M*ie,Te=2*(me-C),A=2*(me+C),I=ie*ie,E=1-2*(ae+I),B=1-2*(w+I);return{io:m.io+E*d+J*b+Me*s,is:m.is+de*d+B*b+Te*s,dV:m.dV+Se*d+A*b+te*s}}),e_=T(function(e,r,n){return $n({dm:h(Pt,e,r,Da(n)),dT:h(ei,e,r,ea(n)),dU:h(ei,e,r,ra(n)),dW:h(ei,e,r,na(n))})}),r_=T(function(e,r,n){return{fN:h(e_,e,r,nl(n)),a4:al(n)}}),n_=v(function(e,r){var n=a(Pt,e,r),t=a(ei,e,r);return function(i){var o=i;return a(Ri,n(o.dm),t(o.gm))}}),a_=T(function(e,r,n){var t=n;return{m:h(n_,e,r,t.m),g5:t.g5,hs:t.hs}}),t_=T(function(e,r,n){return a(Vf,a(Pt,e,r),n)}),i_=T(function(e,r,n){return a(Ff,ol(n),h(Pt,e,r,il(n)))}),o_=T(function(e,r,n){return a(Af,a(Pt,e,r),n)}),Bf=T(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(Qc,l,h(r_,e,r,t));case 1:var l=n.a,i=n.b;return a(Df,l,h(o_,e,r,i));case 3:var l=n.a,o=n.b;return a(kf,l,h(i_,e,r,o));case 2:var l=n.a,c=n.b;return a(rl,l,h(a_,e,r,c));case 4:var l=n.a,u=n.b;return a(Zc,l,h(t_,e,r,u));default:var f=n.a;return Kc(a(ne,a(Bf,e,r),f))}}),cl=Bi,c_=a(Ri,Qn,cl),Mu=v(function(e,r){return h(Bf,c_,st(e),r)}),Rf=v(function(e,r){return(r-H$(r/e)*e)/e}),l_=v(function(e,r){return 360*a(Rf,e,r)}),u_=function(e){return 2*qn*e},$_=ee(function(e,r,n,t){return e+(r-e)*(1+Jn(u_(a(Rf,n,t))))/2}),v_=v(function(e,r){var n=L($_,.2,.8,10,e.cU);return a(Mu,a(l_,1e3,e.cU),a(Mu,.1*r,a(Ef,r*1.1,a(N1,Tf(h(W1,n,.5,.5)),R(r,1,r)))))}),f_=function(e){return yf(a(ne,v_(e),a(qr,1,18)))},m_=T(function(e,r,n){return{m:a(Ri,e,r),g5:or(n.g5),hs:or(n.hs)}}),s_=T(function(e,r,n){return a(rl,e,h(m_,Qn,Bi,{g5:Yr(n),hs:Yr(r)}))}),d_=a(Ef,-1.001,h(s_,Tf(h($f,.294,.588,.478)),30,1)),p_=v(function(e,r){return $([I1,d_,f_(e)])}),g_=function(e){return e},h_=function(e){return Yr(.01*e)},Tu=function(e){return e},b_=function(e){return e},__=function(e){return{$:0,a:e}},x_=__,w_={$:3},y_=w_,S_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),C_=S_,L_=function(e){return{$:1,a:e}},z_=L_,P_=function(e){return a(Br,"height",k(e))},M_=yv,T_=function(e){return{$:2,a:e}},k_=T_,D_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return Ae(l*1e3)/1e3},c=function(l){return Ae(l*1e4)/100};return pa($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(t)),"%,",ve(o(i)),")"]))},V_=v(function(e,r){switch(r.$){case 0:return a(Np,e,r);case 1:return a(Hp,e,r);case 2:return a(Wp,e,r);case 3:return a(Gp,e,r);case 4:return a(Up,e,r);default:return a(Op,e,r)}}),F_=v(function(e,r){switch(r.$){case 0:return a(gp,e,r);case 1:return a(hp,e,r);case 2:return a(bp,e,r);case 3:return a(_p,e,r);case 4:return a(xp,e,r);case 5:return a(wp,e,r);case 6:return a(yp,e,r);case 7:return a(Sp,e,r);default:return Cp(e)}}),A_=T(function(e,r,n){return h(jp,e,r,n)}),ku=function(e){var r=e;return r},Va=ip,mo=L(Va,1,1,1,1),Nr=T(function(e,r,n){return a(ne,function(t){return a(t,r,n)},e)}),I_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),E_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(I_,n*t/i,n,n*(1-t-i)/i)}),B_=function(e){var r=e.a,n=e.b,t=e.c;return h(zt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},ll=v(function(e,r){return B_(a(E_,e,r))}),jf=v(function(e,r){return{ek:_e(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Ur=vp,R_=function(e){return Ur({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},so=Je(function(e,r,n,t,i){var o=t.ek?1:-1,c=L(Va,t.cC,t.cC,t.cC,o);return ar(i,e,c,R_(t),t.ek,r,n)}),Nf=yr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,m=n,d=a(jf,c,t),b=l,s=o;e=u,r=f,n=m,t=d,i=b,o=s;continue e;case 1:var x=i.b,_=a(P,V(so,e,r,n,t,x),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(P,V(so,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var w=i.a,M=a(P,V(so,e,r,n,t,w),o.hI);return{P:o.P,_:o._,hI:M};default:var G=i.a;return h(We,L(Nf,e,r,n,t),o,G)}}),j_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Hf=j_,ul=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),N_=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(ul,518,r,n,t)},H_=v(function(e,r){return{$:6,a:e,b:r}}),W_=H_,Wf=$([N_({ab:1,ac:0,ai:!1}),L(Hf,!1,!1,!1,!1),a(W_,0,1)]),za=519,$l=8,Gf=15,ba=7681,G_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Fe=pp,U_=v(function(e,r){return{$:0,a:e,b:r}}),O_=U_({d5:1,ei:0,eS:5}),hr=Kd,q_=O_($([{cx:a(hr,-1,-1)},{cx:a(hr,1,-1)},{cx:a(hr,-1,1)},{cx:a(hr,1,1)}])),J_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},Y_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:m}}}}}}}}}}}},vl=T(function(e,r,n){var t=e.dy,i=e.dd,o=e.dS,c=v(function(f,m){var d=f;return m(d)}),l=v(function(f,m){var d=f;return m(d)}),u=function(f){return a(Xe,c(f.bO),a(Xe,l(f.bz),a(Xe,l(f.bX),l(f.bY))))};return a(u,n,a(u,r,h(Y_,t,i,o)))}),fl=function(e){return h(vl,{dd:e.dd,dy:e.dy,dS:e.dS},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},ml=function(e){return V(Fe,$([fl(e),L(Hf,!1,!1,!1,!1)]),J_,G_,q_,{})},X_=ml({bz:ba,dd:0,dy:$l,bO:za,dS:Gf,bX:ba,bY:ba}),K_=516,Du=5386,ir=7680,Z_=function(e){return a(Lt,2,e+4)},Uf=function(e){return ml({bz:ir,dd:Gf,dy:$l,bO:K_,dS:Z_(e),bX:Du,bY:Du})},Q_=T(function(e,r,n){return dr($([h(Nr,e,n,Wf),$([Uf(r),X_])]))}),e2=v(function(e,r){return dr(a(I$,Q_(e),r))}),r2=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(ul,513,r,n,t)},n2=r2({ab:1,ac:0,ai:!0}),a2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},t2=function(e){var r=e.cz,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,c=e.fI,l=v(function(u,f){var m=u.a,d=u.b,b=u.c,s=f.a,x=f.b,_=f.c;return a2(m)(d)(b)(s)(x)(_)(r)(n)(t)(i)});return a(l,o,c)},i2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vu=v(function(e,r){var n=e,t=r;return h(i2,32774,n,t)}),o2=1,Fu=771,c2=770,sl=t2({bZ:0,fI:a(Vu,o2,Fu),b0:0,b6:a(Vu,c2,Fu),cf:0,cz:0}),ia=$([n2,sl]),l2=function(e){var r=e;return r.eL},u2=function(e){var r=e;return r.eM},Of=function(e){var r=e;return r.eN},$2=function(e){var r=e;return r.eO},v2=function(e){var r=e;return r.eP},qf=function(e){var r=e;return r.eQ},Jf=function(e){return R(a(ln,$2(e),l2(e)),a(ln,v2(e),u2(e)),a(ln,qf(e),Of(e)))},Au=function(e){var r=e;return Da(r)},f2=function(e){return e},m2=function(e){return $n({dm:f2({io:e.K,is:e.L,dV:e.M}),dT:cn({io:e.t,is:e.u,dV:e.v}),dU:cn({io:e.w,is:e.x,dV:e.y}),dW:cn({io:e.z,is:e.A,dV:e.B})})},po=v(function(e,r){var n=e,t=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,f=u;return{io:t.io*f.io+t.is*f.is+t.dV*f.dV,is:t.io*l.io+t.is*l.is+t.dV*l.dV,dV:t.io*o.io+t.is*o.is+t.dV*o.dV}}),Yf=v(function(e,r){var n=e,t=r,i=n.dm,o=i,c=t.io-o.io,l=t.is-o.is,u=t.dV-o.dV,f=n.dW,m=f,d=n.dU,b=d,s=n.dT,x=s;return{io:c*x.io+l*x.is+u*x.dV,is:c*b.io+l*b.is+u*b.dV,dV:c*m.io+l*m.is+u*m.dV}}),Xf=v(function(e,r){return{dm:a(Yf,e,Da(r)),dT:a(po,e,ea(r)),dU:a(po,e,ra(r)),dW:a(po,e,na(r))}}),wi=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(rr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(ga,n,t)}),s2=v(function(e,r){var n=wi(r),t=wi(e);return{eL:a(He,t.eL,n.eL),eM:a(He,t.eM,n.eM),eN:a(He,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Tr=function(e){var r=e;return r},d2=function(e){var r=e;return R(r.io,r.is,r.dV)},Qa=v(function(e,r){var n=e,t=r;return t+n}),p2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=Qt(or(t)),c=Qt(or(n)),l=Qt(or(i)),u=d2(r),f=u.a,m=u.b,d=u.c;return{eL:a(Qa,c,f),eM:a(Qa,o,m),eN:a(Qa,l,d),eO:a(ln,c,f),eP:a(ln,o,m),eQ:a(ln,l,d)}}),Iu=ee(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,f=i.is*r,m=i.io*r,d=Tr(na(e)),b=be(l*d.io)+be(c*d.is)+be(o*d.dV),s=Tr(ra(e)),x=be(l*s.io)+be(c*s.is)+be(o*s.dV),_=Tr(ea(e)),S=be(l*_.io)+be(c*_.is)+be(o*_.dV),C=a(p2,R(S,x,b),a(Yf,e,h(ec,m,f,u)));if(t.$)return Y(C);var w=t.a;return Y(a(s2,w,C))}),nc=ee(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 1:var c=i.a,l=L(Iu,e,r,c,n),s=e,x=r,_=l,S=o;e=s,r=x,n=_,t=S;continue e;case 2:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 3:var c=i.a,l=L(Iu,e,r,c,n),s=e,x=r,_=l,S=o;e=s,r=x,n=_,t=S;continue e;case 4:var u=i.a,s=e,x=r,_=L(nc,e,r,n,u),S=o;e=s,r=x,n=_,t=S;continue e;default:var f=i.a,m=i.b,d=a(Xf,m2(f),e),b=r*f.cC,s=e,x=r,_=L(nc,d,b,n,$([m])),S=o;e=s,r=x,n=_,t=S;continue e}}else return n}),Fa=ep,Aa=rp,Ia=np,Kf=function(e){return{$:4,a:e}},g2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),Mt=function(e){return Kf(a(g2,e,D))},h2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},b2=function(e){var r=e;return r},Eu=ml({bz:ba,dd:0,dy:$l,bO:za,dS:255,bX:ba,bY:ba}),_2=function(e){var r=e,n=a(rr,be(r.io),a(rr,be(r.is),be(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=hn(o*o+i*i+t*t);return c*n}else return Ir},lr={b0:0,f3:!1,cf:0,dv:0,cz:0,dK:0,io:0,is:0,dV:0},Cr=v(function(e,r){var n=e,t=r;return Ur({eu:n.io,ev:n.cz,ew:t.io,ex:t.cz,ey:n.is,ez:n.cf,eA:t.is,eB:t.cf,eC:n.dV,eD:n.b0,eE:t.dV,eF:t.b0,eG:n.dK,eH:n.dv,eI:t.dK,eJ:t.dv})}),Ja=z({bF:a(Cr,lr,lr),cm:a(Cr,lr,lr),cn:a(Cr,lr,lr),co:a(Cr,lr,lr)},L(Va,0,0,0,0)),je=v(function(e,r){var n=r;return e*n}),Bu=function(e){var r=e;return-r},Zf=514,Qf=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(ul,515,r,n,t)},em=240,x2=$([Qf({ab:1,ac:0,ai:!0}),fl({bz:ir,dd:em,dy:0,bO:Zf,dS:0,bX:ir,bY:ir}),sl]),w2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,c=or(t),l=c,u=or(i),f=u,m=n.dx;if(m.$){var b=m.a;return Ao(f)?Ur({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Ur({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-l),eF:-(f+l)/(f-l),eG:0,eH:0,eI:0,eJ:1})}else{var d=m.a;return Ao(f)?Ur({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Ur({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-(f+l)/(f-l),eF:-2*f*l/(f-l),eG:0,eH:0,eI:-1,eJ:0})}}),jt=v(function(e,r){return(1&e>>r)===1?0:1}),y2=function(e){return $([Qf({ab:1,ac:0,ai:!0}),fl({bz:ir,dd:em,dy:e,bO:Zf,dS:0,bX:ir,bY:ir}),sl])},S2=T(function(e,r,n){return dr(a(ne,function(t){var i=t<<4,o=L(Va,a(jt,t,0),a(jt,t,1),a(jt,t,2),a(jt,t,3));return h(Nr,e,z(r,o),y2(i))},a(qr,1,a(Lt,2,n)-1)))}),dt=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},_a=function(e){var r=e;return r},C2=fp,Ru=function(e){var r=e;return dt(na(r))},rm=zf,nm=el,L2={dm:Qn,dT:rm,dU:cl,dW:nm},ji=function(e){var r=e;return r},z2=function(e){var r=ji(Da(e)),n=Tr(na(e)),t=Tr(ra(e)),i=Tr(ea(e));return Ur({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dV,eD:t.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},P2=v(function(e,r){var n=r;return z2(a(Xf,n,e))}),M2=function(e){return a(P2,L2,e)},T2=function(e){var r=e;return r.dN},k2=function(e){var r=e;return ea(r)},D2=function(e){var r=e;return ra(r)},V2=function(e){var r=T2(e.f0),n=$n({dm:Au(r),dT:k2(r),dU:D2(r),dW:dt(Ru(r))}),t=Mt(e.a8),i=t,o=L(nc,n,1,q,$([i]));if(o.$===1)return D;var c=o.a,l=M2(r),u=a(je,.99,a(He,or(e.a3),Bu(Of(c)))),f=Jf(c),m=f.a,d=f.b,b=f.c,s=_2(h(Cf,m,d,b)),x=a(je,1.01,a(Qa,s,Bu(qf(c)))),_=a(w2,e.f0,{fM:e.fM,gv:x,hd:u}),S=C2(_).eJ,C=S?Tr(dt(Ru(r))):_a(Au(r)),w=function(){var me=e.cG;switch(me.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var Te=me.a;return z(3,Te);case 4:var Te=me.a;return z(4,Te);default:return z(5,0)}}(),M=w.a,G=w.b,Z=e.cd,ae=Z,te=a(ll,ae,e.cK),ie=te,re=Ur({eu:0,ev:C.io,ew:Fa(ie),ex:e.ff,ey:0,ez:C.is,eA:Aa(ie),eB:b2(s),eC:0,eD:C.dV,eE:Ia(ie),eF:M,eG:0,eH:S,eI:0,eJ:G}),J=ar(Nf,re,l,_,h2,i,{P:D,_:D,hI:D}),de=e.cl;switch(de.$){case 0:var pe=de.a;return dr($([h(Nr,J.P,z(pe,mo),ia),h(Nr,J._,Ja,ia)]));case 1:var pe=de.a;return dr($([h(Nr,J.P,Ja,ia),$([Eu]),h(Nr,J.hI,pe.bF,Wf),$([Uf(0)]),h(Nr,J.P,z(pe,mo),x2),h(Nr,J._,Ja,ia)]));default:var Me=de.a,Se=de.b;return dr($([h(Nr,J.P,z(Se,mo),ia),$([Eu]),a(e2,J.hI,Me),h(S2,J.P,Se,Gn(Me)),h(Nr,J._,Ja,ia)]))}},F2=function(e){return a(Br,"width",k(e))},A2=v(function(e,r){var n=$([z_(1),k_(0),x_(!0),L(C_,0,0,0,0)]),t=function(){var M=e.cO;switch(M.$){case 0:return R(n,"0",1);case 1:return R(a(P,y_,n),"1",1);default:var G=M.a;return R(n,"0",G)}}(),i=t.a,o=t.b,c=t.c,l=e.a4,u=l.a,f=l.b,m=ku(f),d=a(br,"height",k(m)+"px"),b=ku(u),s=b/m,x=a(Ta,function(M){return V2({fM:s,f0:e.f0,a3:e.a3,a8:M.a8,cd:M.cd,cl:M.cl,ff:c,cG:M.cG,cK:M.cK})},r),_=a(br,"width",k(b)+"px"),S=e.a1,C=S,w=D_(C);return h(M_,"div",$([a(br,"padding","0px"),_,d]),$([z(o,h(A_,i,$([F2(Ae(b*c)),P_(Ae(m*c)),_,d,a(br,"display","block"),a(br,"background-color",w)]),x))]))}),I2=function(e){return a(A2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},am=function(e){return e},ju=am({io:.31271,is:.32902}),E2=v(function(e,r){var n=e,t=Tr(r.gm),i=t.io,o=t.is,c=t.dV,l=a(ll,r.c1,r.cT),u=l;return{b0:Ia(u),f3:n,cf:Aa(u),dv:0,cz:Fa(u),dK:1,io:-i,is:-o,dV:-c}}),B2=function(e){return e},R2=function(e){return B2(1.2*a(Lt,2,e))},go=function(e){return e},j2={$:0},N2=j2,tm=function(e){return e},Nu=function(e){var r=e;return r},H2=function(e){e:for(;;){if(_e(e.gZ,Ir)&&_e(e.g_,Ir))return lr;if(a(xf,or(e.gZ),or(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:dt(e.fm)};e=r;continue e}else{var n=be(Nu(e.g_)/qn),t=be(Nu(e.gZ)/qn),i=Tr(e.fm),o=i.io,c=i.is,l=i.dV,u=a(ll,tm(1),e.cT),f=u;return{b0:t*Ia(f),f3:!1,cf:t*Aa(f),dv:n/t,cz:t*Fa(f),dK:3,io:o,is:c,dV:l}}}},Hu=function(e){return H2({cT:e.cT,gZ:e.c1,g_:Ir,fm:e.fm})},W2=function(e){var r=e;return r},im=function(e){var r=h(Mf,1667,25e3,W2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return am({io:n,is:t})},om=function(e){return e},G2=im(om(12e3)),U2=im(om(5600)),O2=function(e){return{$:2,a:e}},q2=function(e){return O2(e)},J2=v(function(e,r){return{$:2,a:e,b:r}}),cm=function(e){return{$:0,a:e}},Nt=function(e){var r=e;return r},Y2=function(e){var r=e;return r.f3},X2=cm(Ja.a),K2=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?z(a(P,t,o),c):z(o,a(P,t,c))});return h(Qe,n,z(D,D),r)}),Z2=function(e){var r=e;return Ur({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dV,eD:r.b0,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},Q2=Pe(function(e,r,n,t,i,o,c,l){var u=a(K2,Y2,$([Nt(e),Nt(r),Nt(n),Nt(t)])),f=u.a,m=u.b;if(f.b){var d=X(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,s=d.b,x=s.a,_=s.b,S=_.a,C=_.b,w=C.a;return a(J2,a(ne,Z2,f),{bF:a(Cr,b,x),cm:a(Cr,S,w),cn:a(Cr,i,o),co:a(Cr,c,l)})}else return X2}else return cm({bF:a(Cr,e,r),cm:a(Cr,n,t),cn:a(Cr,i,o),co:a(Cr,c,l)})}),ex=T(function(e,r,n){return ht(Q2,e,r,n,lr,lr,lr,lr,lr)}),rx=function(e){var r=a(E2,b_(e.hI),{cT:U2,gm:e.hZ,c1:go(8e4)}),n=Hu({cT:G2,c1:go(2e4),fm:e.fm}),t=Hu({cT:ju,c1:go(15e3),fm:dt(e.fm)}),i=h(ex,r,n,t);return I2({cO:q2(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:R2(15),cl:i,cG:N2,cK:ju})},lm=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),nx=ee(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),um=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),$m=ee(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),ax=ee(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),tx=ee(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),ix=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),dl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(ix,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(lm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L(nx,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(um,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(tx,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L($m,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(ax,n,t,i,1);case 8:return e;case 9:return e;default:return e}},pl={$:0},ox=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,m=wi(c(u)),d=a(Oe,m.eO,e),b=a(He,m.eL,r),s=a(Oe,m.eP,n),x=a(He,m.eM,t),_=a(Oe,m.eQ,i),S=a(He,m.eN,o),C=c,w=f;e=d,r=b,n=s,t=x,i=_,o=S,c=C,l=w;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),cx=T(function(e,r,n){var t=wi(e(r));return ht(ox,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),ho=v(function(e,r){var n=e,t=r;return he(t,n)<1}),vm=function(e){return a(ho,e.eL,e.eO)&&a(ho,e.eM,e.eP)&&a(ho,e.eN,e.eQ)?e:{eL:a(He,e.eO,e.eL),eM:a(He,e.eP,e.eM),eN:a(He,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},pt=function(e){var r=e;return r},fm=function(e){var r=pt(e),n=r.a,t=r.b,i=r.c,o=Nn(n),c=Hn(n),l=Wn(n),u=Nn(t),f=Hn(t),m=Wn(t),d=Nn(i),b=Hn(i),s=Wn(i);return vm({eL:a(He,o,a(He,u,d)),eM:a(He,c,a(He,f,b)),eN:a(He,l,a(He,m,s)),eO:a(Oe,o,a(Oe,u,d)),eP:a(Oe,c,a(Oe,f,b)),eQ:a(Oe,l,a(Oe,m,s))})},mm=ap,fr=function(e){return mm(ji(e))},sm=function(e){var r=e;return r},Ni=function(e){return mm(sm(e))},lx=v(function(e,r){var n=e,t=r,i=a(rr,be(t.io),a(rr,be(t.is),be(t.dV)));if(i){var o=t.dV/i,c=t.is/i,l=t.io/i,u=hn(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return wf}),ux=lx(tm(1)),dm=T(function(e,r,n){var t=a(xi,r,n),i=a(xi,e,r);return ux(a(Yc,t,i))}),$x=function(e){var r=pt(e),n=r.a,t=r.b,i=r.c,o=Ni(h(dm,n,t,i));return R({q:o,cx:fr(n)},{q:o,cx:fr(t)},{q:o,cx:fr(i)})},vx=v(function(e,r){return{$:2,a:e,b:r}}),pm=vx({d5:3,ei:0,eS:4}),fx=function(e){if(e.b){var r=e.a,n=e.b,t=pm(a(ne,$x,e)),i=h(cx,fm,r,n);return L(lm,i,e,t,0)}else return pl},Sr=T(function(e,r,n){return R(e,r,n)}),gm=function(){var e=Yr(1),r=Yr(1),n=Yr(1),t=a(je,-.5,e),i=a(je,-.5,r),o=a(je,-.5,n),c=h(Ke,o,i,t),l=a(je,.5,e),u=h(Ke,o,i,l),f=a(je,.5,r),m=h(Ke,o,f,t),d=h(Ke,o,f,l),b=a(je,.5,n),s=h(Ke,b,i,t),x=h(Ke,b,f,t),_=h(Ke,b,i,l),S=h(Ke,b,f,l);return dl(fx($([h(Sr,c,x,s),h(Sr,c,m,x),h(Sr,u,_,S),h(Sr,u,S,d),h(Sr,s,x,S),h(Sr,s,S,_),h(Sr,c,d,m),h(Sr,c,u,d),h(Sr,c,s,_),h(Sr,c,_,u),h(Sr,m,S,x),h(Sr,m,d,S)])))}(),Ht={$:0},mx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),sx=T(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),f=Ni(h(dm,u,l,c)),m={q:f,cx:fr(u)},d={q:f,cx:fr(l)},b={q:f,cx:fr(c)};return a(P,m,a(P,d,a(P,b,n)))}),gl=function(e){var r=e;return r.H},dx=ee(function(e,r,n,t){if(r.$===1)return q;var i=r.a;if(n.$===1)return q;var o=n.a;if(t.$===1)return q;var c=t.a;return Y(h(e,i,o,c))}),ac=4294967295>>>32-tt,tc=es,px=T(function(e,r,n){e:for(;;){var t=ac&r>>>e,i=a(tc,t,n);if(i.$){var f=i.a;return a(tc,ac&r,f)}else{var o=i.a,c=e-tt,l=r,u=o;e=c,r=l,n=u;continue e}}}),gx=function(e){return e>>>5<<5},hx=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||he(e,n)>-1?q:he(e,gx(n))>-1?Y(a(tc,ac&e,o)):Y(h(px,t,e,i))}),hl=function(e){var r=e;return r.au},bo=v(function(e,r){return a(hx,e,hl(r))}),bx=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(dx,T(function(c,l,u){return R(c,l,u)}),a(bo,t,e),a(bo,i,e),a(bo,o,e))};return a(On,r,gl(e))},_x=T(function(e,r,n){e:for(;;){var t=a(zc,xr,e),i=t.a,o=t.b;if(he(Vo(i),xr)<0)return a(G$,!0,{C:r,n,r:i});var c=o,l=a(P,N$(i),r),u=n+1;e=c,r=l,n=u;continue e}}),bl=function(e){return e.b?h(_x,e,D,0):R$},xx=v(function(e,r){return!a(yt,a(St,L0,e),r)}),wx=function(e){var r=e.a;return r},hm=v(function(e,r){var n=wx(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&he(o,n)<0&&c>=0&&he(c,n)<0&&l>=0&&he(l,n)<0};return a(xx,t,r)?{H:r,au:e}:{H:a(xv,t,r),au:e}}),yx=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Tt=yx({d5:1,ei:3,eS:4}),ri=v(function(e,r){var n=_a(r),t=_a(e);return z(R(t.io,t.is,t.dV),R(n.io,n.is,n.dV))}),Wu=h(zt,0,0,0),_o=yr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Dc,a(ri,e,r),i);if(f.$){var d={q:Wu,cx:fr(r)},b={q:Wu,cx:fr(e)},s=u+1,x=u;return R(a(P,R(n,x,s),a(P,R(n,s,t),c)),a(P,d,a(P,b,l)),u+2)}else{var m=f.a;return R(a(P,R(n,m,t),c),l,u)}}),Sx=Je(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,m=e(u),d=e(l),b=e(c),s=t+2,x=t+1,_=t,S=e,C=r,w=f,M=t+3,G=ar(_o,m,b,s,_,r,ar(_o,d,m,x,s,r,ar(_o,b,d,_,x,r,i)));e=S,r=C,n=w,t=M,i=G;continue e}else{var Z=i,ae=Z.a,te=Z.b;return z(ae,sr(te))}}),Cx=Je(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,m=e(u),d=e(l),b=e(c),s=n+2,x=n+1,_=n,S=h(Xa,a(ri,b,m),s,h(Xa,a(ri,m,d),x,h(Xa,a(ri,d,b),_,i))),C=a(P,R(_,x,s),t),w=e,M=f,G=n+3,Z=C,ae=S;e=w,r=M,n=G,t=Z,i=ae;continue e}else return R(t,i,n)}),Fn=T(function(e,r,n){var t=bx(n),i=h(Qe,sx(r),D,t),o=V(Cx,r,t,0,D,sv),c=o.a,l=o.b,u=o.c,f=V(Sx,r,l,t,0,R(c,D,u)),m=f.a,d=f.b,b=dn(d)?i:X(i,d);return h(mx,e,a(hm,bl(b),m),a(Tt,b,m))}),ic=function(e){return{H:a(ne,function(r){return R(3*r,3*r+1,3*r+2)},a(qr,0,Gn(e)-1)),au:bl(dr(a(ne,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},bm=function(e){switch(e.$){case 0:return Ht;case 1:var t=e.a,r=e.b,n=a(ne,pt,r);return h(Fn,t,Er,ic(n));case 2:var t=e.a,r=e.b,n=a(ne,pt,r);return h(Fn,t,Er,ic(n));case 3:var t=e.a,i=e.b;return h(Fn,t,Er,i);case 4:var t=e.a,i=e.b;return h(Fn,t,function(o){return o.cx},i);case 5:var t=e.a,i=e.b;return h(Fn,t,function(o){return o.cx},i);case 6:var t=e.a,i=e.b;return h(Fn,t,function(o){return o.cx},i);case 7:var t=e.a,i=e.b;return h(Fn,t,function(o){return o.cx},i);case 8:return Ht;case 9:return Ht;default:return Ht}},Gu=bm(gm),_m={$:0},U=_m,Ze=v(function(e,r){return{$:1,a:e,b:r}}),Lx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},zx=1029,Px=function(e){return{$:5,a:e}},xm=function(e){var r=e;return Px(r)},Mx=xm(zx),Tx=1028,kx=xm(Tx),mr=T(function(e,r,n){return r===1?e?a(P,Mx,n):a(P,kx,n):n}),wm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},xo=ee(function(e,r,n,t){return a(Ze,r,Pe(function(i,o,c,l,u,f,m,d){return V(Fe,h(mr,l,t,d),wm,Lx,n,{b7:e,c,d:o,e:f,f:i,g:u})}))}),_l={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},ym={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Qr=ee(function(e,r,n,t){return a(Ze,r,Pe(function(i,o,c,l,u,f,m,d){return V(Fe,h(mr,l,t,d),ym,_l,n,{aO:e,c,d:o,e:f,f:i,g:u})}))}),Sm=v(function(e,r){return{$:3,a:e,b:r}}),Dx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Cm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Vx=ee(function(e,r,n,t){return a(Sm,n,Pe(function(i,o,c,l,u,f,m,d){return V(Fe,d,Cm,Dx,t,{aO:e,c,d:o,cw:r,e:f,f:i,g:u})}))}),xl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},kt=function(e){var r=e;return r},Hi=tp,en=Je(function(e,r,n,t,i){return a(Ze,n,Pe(function(o,c,l,u,f,m,d,b){return V(Fe,h(mr,u,i,b),ym,xl,t,{a6:a(Hi,kt(r),e),c:l,d:c,e:m,f:o,g:f})}))}),Fx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Ax=Je(function(e,r,n,t,i){return a(Sm,t,Pe(function(o,c,l,u,f,m,d,b){return V(Fe,b,Cm,Fx,i,{a6:a(Hi,kt(r),e),c:l,d:c,cw:n,e:m,f:o,g:f})}))}),Lm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},zm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Wt=ee(function(e,r,n,t){return a(Ze,r,Pe(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return V(Fe,h(mr,l,t,d),zm,Lm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,de:e,c,d:o,e:f,f:i,g:u})}))}),Pm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Mm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ix=yr(function(e,r,n,t,i,o){return a(Ze,t,Pe(function(c,l,u,f,m,d,b,s){var x=b.a,_=b.b;return V(Fe,h(mr,f,o,s),Mm,Pm,i,{U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,df:e,c:u,d:l,bg:r,e:d,f:c,bm:n,g:m})}))}),Tm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Ex=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return a(Ze,u,Pe(function(d,b,s,x,_,S,C,w){var M=C.a,G=C.b;return V(Fe,h(mr,x,m,w),Mm,Tm,f,{cS:e,cV:r,cW:o,cX:t,U:G,bF:M.bF,cm:M.cm,cn:M.cn,co:M.co,di:i,c:s,d:b,bg:c,e:S,dC:n,f:d,bm:l,g:_})}))}}}}}}}}}}},km={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},Gt=yr(function(e,r,n,t,i,o){return a(Ze,t,Pe(function(c,l,u,f,m,d,b,s){var x=b.a,_=b.b;return V(Fe,h(mr,f,o,s),zm,km,i,{cR:e,U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,dh:n,c:u,d:l,e:d,dB:r,f:c,g:m})}))}),Bx=function(e){return{$:0,a:e}},Uu=v(function(e,r){return{$:1,a:e,b:r}}),et=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),Rx=function(e){return L(Va,Fa(e),Aa(e),Ia(e),1)},wl=L(Va,0,0,0,0),ni=v(function(e,r){if(r.$){var t=r.a.E;return z(t,wl)}else{var n=r.a;return z(e,Rx(n))}}),Dm=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return a(Uu,z(i,wl),a(et,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Uu,a(ni,i,e),a(et,i,r))}else{var t=n.a.a;return n.b.a,Bx(t)}}),jx=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ut=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Nx=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Hx=function(e){return a(hr,e,1)},oc=a(hr,0,0),oa=v(function(e,r){if(r.$){var t=r.a.E;return z(t,oc)}else{var n=r.a;return z(e,Hx(n))}}),Vm=ee(function(e,r,n,t){var i=L(Nx,e,r,n,t);if(i.a.$){var u=i.a.a.E;return L(Ut,z(u,wl),a(oa,u,r),a(oa,u,n),a(et,u,t))}else if(i.b.$){var u=i.b.a.E;return L(Ut,a(ni,u,e),z(u,oc),a(oa,u,n),a(et,u,t))}else if(i.c.$){var u=i.c.a.E;return L(Ut,a(ni,u,e),a(oa,u,r),z(u,oc),a(et,u,t))}else if(i.d.$){var u=i.d.a.E;return L(Ut,a(ni,u,e),a(oa,u,r),a(oa,u,n),z(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(jx,o,c,l)}}),Wx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},wo=Je(function(e,r,n,t,i){return a(Ze,n,Pe(function(o,c,l,u,f,m,d,b){return V(Fe,h(mr,u,i,b),wm,Wx,t,{cP:kt(r),b7:e,c:l,d:c,e:m,f:o,g:f})}))}),Fm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Gx=ee(function(e,r,n,t){return a(Ze,r,Pe(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return V(Fe,h(mr,l,t,d),Fm,Pm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,df:e,c,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),Ux=uc(function(e,r,n,t,i,o,c,l,u){return a(Ze,c,Pe(function(f,m,d,b,s,x,_,S){var C=_.a,w=_.b;return V(Fe,h(mr,b,u,S),Fm,Tm,l,{cS:e,cV:r,cW:o,cX:t,U:w,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,di:i,c:d,d:m,bg:e,e:x,dC:n,f,bm:0,g:s})}))}),gt=T(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Ox=function(e){var r=e;return h(gt,r.eO,r.eL,.5)},qx=function(e){var r=e;return h(gt,r.eP,r.eM,.5)},Jx=function(e){var r=e;return h(gt,r.eQ,r.eN,.5)},Yx=function(e){return h(Ke,Ox(e),qx(e),Jx(e))},$e=function(e){var r=Jf(e),n=r.a,t=r.b,i=r.c;return{f4:ji(Yx(e)),gD:n/2,gE:t/2,gF:i/2}},yl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return L(xo,l,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(xo,l,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(xo,l,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var n=e.b.a;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 8:var i=r.a,c=r.c;return L(Qr,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return L(Qr,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return L(Vx,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,f=e.c;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return V(wo,l,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(wo,l,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(wo,l,f,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 8:var i=r.a,c=r.c;return V(en,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return V(en,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return V(Ax,u,f,o,$e(i),c)}}case 2:e.a;var m=e.b,ae=e.c,d=a(Dm,m,ae);if(d.$){var x=d.a,_=x.a;x.b;var S=d.b,C=S.a,w=S.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,s=r.d;return L(Gx,_,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return ar(Ix,_,C,w,$e(i),c,s);case 8:return U;case 9:return U;default:return U}}else{var b=d.a;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,s=r.d;return L(Wt,b,$e(i),c,s);case 3:return U;case 4:var i=r.a,c=r.c,s=r.d;return L(Wt,b,$e(i),c,s);case 5:return U;case 6:var i=r.a,c=r.c,s=r.d;return L(Wt,b,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return L(Wt,b,$e(i),c,s);case 8:return U;case 9:return U;default:return U}}default:e.a;var M=e.b,G=e.c,Z=e.d,ae=e.e,te=L(Vm,M,G,Z,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,A=te.c,I=A.a,E=A.b,B=te.d,C=B.a,w=B.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return Ym(Ux,pe,Me,me,Te,I,E,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return Ex(pe)(Me)(me)(Te)(I)(E)(C)(w)($e(i))(c)(t);case 8:return U;case 9:return U;default:return U}}else{var ie=te.a,re=te.b,J=te.c;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,t=r.d;return ar(Gt,ie,re,J,$e(i),c,t);case 3:return U;case 4:var i=r.a,c=r.c,t=r.d;return ar(Gt,ie,re,J,$e(i),c,t);case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return ar(Gt,ie,re,J,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return ar(Gt,ie,re,J,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}}}),yo=function(e){var r=e;return r.io},So=function(e){var r=e;return r.is},Co=function(e){var r=e;return r.dV},Xx=function(e){var r=e,n=Co(r.dW),t=So(r.dW),i=yo(r.dW),o=Co(r.dU),c=So(r.dU),l=yo(r.dU),u=Co(r.dT),f=So(r.dT),m=yo(r.dT);return m*c*n+f*o*i+u*l*t-u*c*i-f*l*n-m*o*t>0},Kx=function(e){var r=ji(Da(e)),n=Tr(na(e)),t=Tr(ra(e)),i=Tr(ea(e));return{ek:Xx(e),t:i.io,u:i.is,v:i.dV,w:t.io,x:t.is,y:t.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cC:1}},ua=v(function(e,r){return{$:5,a:e,b:r}}),Am=v(function(e,r){var n=r;switch(n.$){case 0:return U;case 5:var t=n.a,i=n.b,o=a(jf,t,e);return a(ua,o,i);case 1:return a(ua,e,n);case 3:return a(ua,e,n);case 2:return a(ua,e,n);default:return a(ua,e,n)}}),Im=v(function(e,r){return a(Am,Kx(e),r)}),Wi=function(e){return{$:2,a:e}},Zx=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dV:i*o.dV},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),Qx=cp,ew=op,Ou=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var m=e.a,d=e.b,b=e.c,s=ew(t),x=s.io,_=s.is,S=s.dV,C=s.ft,w=Qx({ft:C,io:x*m,is:_*d,dV:S*b});return ht(r,n,w,i,o,c,l,u,f)}}}}}}}}}},cc=v(function(e,r){switch(r.$){case 0:return _m;case 5:var n=r.a,t=r.b;return a(ua,n,a(cc,e,t));case 1:var i=r.a,o=r.b;return a(Ze,a(Zx,e,i),a(Ou,e,o));case 3:return r;case 2:var o=r.a;return Wi(a(Ou,e,o));default:var c=r.a;return Kf(a(ne,cc(e),c))}}),Sl=v(function(e,r){var n=r;return a(cc,e,n)}),Cl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Em=7683,Bm=7682,rw=h(vl,{dd:0,dy:0,dS:15},{bz:ir,bO:za,bX:ir,bY:Em},{bz:ir,bO:za,bX:ir,bY:Bm}),nw=h(vl,{dd:0,dy:0,dS:15},{bz:ir,bO:za,bX:ir,bY:Bm},{bz:ir,bO:za,bX:ir,bY:Em}),Ll=v(function(e,r){return e?a(P,nw,r):a(P,rw,r)}),aw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},tw=function(e){if(e.$){var r=e.c;return Y(Pe(function(n,t,i,o,c,l,u,f){return V(Fe,a(Ll,o,f),aw,Cl,r,{c:i,d:t,e:l,f:n,cD:u,g:c})}))}else return q},yi=function(e){var r=tw(e);if(r.$)return U;var n=r.a;return Wi(n)},iw=ee(function(e,r,n,t){var i=a(yl,n,gm),o=function(){var m=z(e,r);return m.a?m.b?Mt($([i,yi(Gu)])):i:m.b?yi(Gu):U}(),c=al(t),l=c.a,u=c.b,f=c.c;return a(Im,nl(t),a(Sl,R(l,u,f),o))}),ow=v(function(e,r){return L(iw,!0,!0,e,r)}),Rm=v(function(e,r){return{$:0,a:e,b:r}}),cw=function(e){var r=Hc(e),n=r.hu,t=r.gA,i=r.fS;return h(zt,n,t,i)},lw=function(e){return a(Rm,0,rc(cw(e)))},uw=function(e){var r=e;return r.m},rt=function(e){var r=e;return Jn(r)},$w=v(function(e,r){var n=r;return n/e}),qu=function(e){var r=e;return{io:Jn(r),is:La(r)}},vw=v(function(e,r){var n=e.cx,t=e.q;return a(P,{q:Ni(t),cx:fr(n)},r)}),fw=Li(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=Ia(l.cx),m=Aa(l.cx),d=Fa(l.cx),b=a(ga,e,d),s=a(rr,r,d),x=a(ga,n,m),_=a(rr,t,m),S=a(ga,i,f),C=a(rr,o,f),w=u;e=b,r=s,n=x,t=_,i=S,o=C,c=w;continue e}else return vm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),jm=v(function(e,r){var n=Ia(e.cx),t=Aa(e.cx),i=Fa(e.cx);return $c(fw,i,i,t,t,n,n,r)}),mw=function(e){var r=h(k$,vw,D,hl(e));if(r.b){var n=r.a,t=r.b,i=a(Tt,r,gl(e)),o=a(jm,n,t);return L(um,o,e,i,0)}else return pl},Ju=v(function(e,r){var n=e,t=r,i=n.dU,o=i,c=n.dT,l=c;return{io:t.io*l.io+t.is*o.io,is:t.io*l.is+t.is*o.is,dV:t.io*l.dV+t.is*o.dV}}),Si=function(e){var r=e;return La(r)},lc=function(e){return st(2*qn*e)},sw=Er,Yu=sw({dm:Qn,dT:rm,dU:cl}),Nm=function(){var e=72,r=a($w,e,lc(1)),n=Yr(1),t=da(el),i=da(Lf),o=Yr(1),c=a(je,.5,o),l=h(Ke,Ir,Ir,c),u=a(je,-.5,o),f=h(Ke,Ir,Ir,u),m=function(s){var x=a(je,s,r),_=da(a(Ju,Yu,qu(x))),S=a(je,rt(x),n),C=a(je,Si(x),n),w=h(Ke,S,C,c),M=h(Ke,S,C,u),G=a(gi,e,s+1),Z=a(je,G,r),ae=da(a(Ju,Yu,qu(Z))),te=a(je,rt(Z),n),ie=a(je,Si(Z),n),re=h(Ke,te,ie,u),J=h(Ke,te,ie,c);return $([R({q:i,cx:f},{q:i,cx:re},{q:i,cx:M}),R({q:_,cx:M},{q:ae,cx:re},{q:ae,cx:J}),R({q:_,cx:M},{q:ae,cx:J},{q:_,cx:w}),R({q:t,cx:l},{q:t,cx:w},{q:t,cx:J})])},d=a(ne,m,a(qr,0,e-1)),b=ic(dr(d));return dl(mw(b))}(),Xu=bm(Nm),dw=function(e){var r=e;return r.gm},pw=function(e){var r=e;return r.dm},gw=function(e){var r=dw(e),n=Xc(r),t=n.a,i=n.b;return $n({dm:pw(e),dT:t,dU:i,dW:r})},hw=function(e){var r=e;return r.g5},bw=function(e){var r=e;return r.hs},_w=ee(function(e,r,n,t){var i=gw(uw(t)),o=a(yl,n,Nm),c=function(){var d=z(e,r);return d.a?d.b?Mt($([o,yi(Xu)])):o:d.b?yi(Xu):U}(),l=bw(t),u=l,f=hw(t),m=f;return a(Im,i,a(Sl,R(u,u,m),c))}),xw=v(function(e,r){return L(_w,!0,!0,e,r)}),Ku={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Zu={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Ya=function(e){var r=pt(e),n=r.a,t=r.b,i=r.c,o=_a(n),c=_a(t),l=_a(i);return Ur({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},Ot=pm($([R({dJ:0},{dJ:1},{dJ:2})])),ww=v(function(e,r){var n=fm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var i=e.b.a;return a(Ze,t,Pe(function(w,M,G,Z,ae,te,ie,re){return V(Fe,h(mr,Z,0,re),Ku,_l,Ot,{aO:i,c:G,d:M,e:te,f:w,bU:Ya(r),g:ae})}));case 1:if(e.b.$)return e.a,U;var o=e.b.a,c=e.c;return a(Ze,t,Pe(function(w,M,G,Z,ae,te,ie,re){return V(Fe,h(mr,Z,0,re),Ku,xl,Ot,{a6:a(Hi,kt(c),o),c:G,d:M,e:te,f:w,bU:Ya(r),g:ae})}));case 2:e.a;var l=e.b,s=e.c,u=a(Dm,l,s);if(u.$)return U;var f=u.a;return a(Ze,t,Pe(function(w,M,G,Z,ae,te,ie,re){var J=ie.a,de=ie.b;return V(Fe,h(mr,Z,0,re),Zu,Lm,Ot,{U:de,bF:J.bF,cm:J.cm,cn:J.cn,co:J.co,de:f,c:G,d:M,e:te,f:w,bU:Ya(r),g:ae})}));default:e.a;var m=e.b,d=e.c,b=e.d,s=e.e,x=L(Vm,m,d,b,s);if(x.$)return U;var _=x.a,S=x.b,C=x.c;return a(Ze,t,Pe(function(w,M,G,Z,ae,te,ie,re){var J=ie.a,de=ie.b;return V(Fe,h(mr,Z,0,re),Zu,km,Ot,{cR:_,U:de,bF:J.bF,cm:J.cm,cn:J.cn,co:J.co,dh:C,c:G,d:M,e:te,dB:S,f:w,bU:Ya(r),g:ae})}))}}),yw=function(){var e=$([{bl:a(hr,0,1)},{bl:a(hr,1,1)},{bl:a(hr,2,1)},{bl:a(hr,0,-1)},{bl:a(hr,1,-1)},{bl:a(hr,2,-1)}]),r=$([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return a(Tt,e,r)}(),Sw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},Qu=function(e){return Wi(Pe(function(r,n,t,i,o,c,l,u){return V(Fe,a(Ll,i,u),Sw,Cl,yw,{c:t,d:n,e:c,f:r,cD:l,bU:Ya(e),g:o})}))},Cw=ee(function(e,r,n,t){var i=a(ww,n,t),o=z(e,r);return o.a?o.b?Mt($([i,Qu(t)])):i:o.b?Qu(t):U}),Lw=v(function(e,r){return L(Cw,!0,!0,e,r)}),zw=v(function(e,r){var n=Wn(r),t=Wn(e),i=Hn(r),o=Hn(e),c=Nn(r),l=Nn(e);return{eL:a(He,l,c),eM:a(He,o,i),eN:a(He,t,n),eO:a(Oe,l,c),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),Pw=function(e){var r=tl(e),n=r.a,t=r.b;return a(zw,n,t)},e$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Mw=v(function(e,r){return{$:1,a:e,b:r}}),Tw=Mw({d5:2,ei:0,eS:1}),r$=Tw($([z({es:0},{es:1})])),kw=v(function(e,r){var n=Pw(r),t=$e(n),i=tl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var l=e.b.a;return a(Ze,t,Pe(function(f,m,d,b,s,x,_,S){return V(Fe,S,e$,_l,r$,{aO:l,eq:fr(c),er:fr(o),c:d,d:m,e:x,f,g:s})}));case 1:if(e.b.$)return U;var l=e.b.a,u=e.c;return a(Ze,t,Pe(function(m,d,b,s,x,_,S,C){return V(Fe,C,e$,xl,r$,{a6:a(Hi,kt(u),l),eq:fr(c),er:fr(o),c:b,d,e:_,f:m,g:x})}));case 2:return U;default:return U}}),Dw=v(function(e,r){return a(kw,e,r)}),n$=v(function(e,r){var n=e,t=r;return n/t}),Vw=Je(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(P,o,i);if(_e(r,e))return c;var l=e,u=r-1,f=n,m=t,d=c;e=l,r=u,n=f,t=m,i=d;continue e}}),a$=v(function(e,r){return e<1?D:V(Vw,0,e,e,r,D)}),Fw=v(function(e,r){var n=e.cx,t=e.q,i=e.O,o=i,c=o.a,l=o.b;return a(P,{q:Ni(t),cx:fr(n),O:a(hr,c,l)},r)}),Aw=function(e){var r=h(k$,Fw,D,hl(e));if(r.b){var n=r.a,t=r.b,i=a(Tt,r,gl(e)),o=a(jm,n,t);return L($m,o,e,i,0)}else return pl},Hm=v(function(e,r){var n=e,t=r,i=Jn(t);return{io:i*Jn(n),is:i*La(n),dV:La(t)}}),Iw=function(){var e=Yr(1),r=72,n=a(qr,0,r-1),t=a(a$,r,a(gt,Ir,lc(1))),i=at(r/2),o=a(qr,0,i-1),c=a(a$,i,a(gt,qa(90),qa(-90))),l=bl(dr(a(ne,function(m){return a(ne,function(d){return{q:da(a(Hm,m,d)),cx:h(Ke,a(je,rt(d)*rt(m),e),a(je,rt(d)*Si(m),e),a(je,Si(d),e)),O:z(a(n$,m,lc(1)),a(n$,a(Qa,qa(90),d),qa(180)))}},c)},t))),u=v(function(m,d){return m*(i+1)+d}),f=dr(a(ne,function(m){return dr(a(ne,function(d){var b=a(u,m+1,d),s=a(u,m,d),x=a(u,m+1,d+1),_=a(u,m,d+1);return $([R(_,x,b),R(_,b,s)])},o))},n));return dl(Aw(a(hm,l,f)))}(),Ci=72,qt=2*Ci,Ew=v(function(e,r){e:for(;;){var n=qt+1,t=a(gi,qt,2*e+3),i=a(gi,qt,2*e+2),o=2*e+1,c=2*e,l=qt,u=a(P,R(l,c,i),a(P,R(c,t,i),a(P,R(c,o,t),a(P,R(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Bw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Rw=v(function(e,r){e:for(;;){var n=h(Bw,0,2*qn,e/Ci),t={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=a(P,t,a(P,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),jw=function(){var e=a(Rw,Ci-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=a(Ew,Ci-1,D);return a(Tt,e,r)}(),Nw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},t$=function(e){return Wi(Pe(function(r,n,t,i,o,c,l,u){return V(Fe,a(Ll,!0,u),Nw,Cl,jw,{aO:h(zt,0,0,1),c:t,d:n,e:c,f:r,cD:l,g:o})}))},Hw=function(e){var r=sm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cC:1}},Ww=v(function(e,r){return a(Am,Hw(e),r)}),Gw=ee(function(e,r,n,t){var i=a(yl,n,Iw),o=function(){var u=z(e,r);return u.a?u.b?Mt($([i,t$()])):i:u.b?t$():U}(),c=ol(t),l=c;return a(Ww,a(xi,Qn,il(t)),a(Sl,R(l,l,l),o))}),Uw=v(function(e,r){return L(Gw,!0,!0,e,r)}),Ow=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),qw=Je(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Jw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Rm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(Ow,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return h(Pf,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return V(qw,n,t,i,o,c)}},Yw=Jw,Wm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(ow,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Lw,i,n)]);case 3:var i=e.a,t=e.b;return $([a(Uw,Yw(i),t)]);case 2:var i=e.a,o=e.b;return $([a(xw,i,o)]);case 4:var c=e.a,l=e.b;return $([a(Dw,lw(c),l)]);default:var u=e.a;return a(Ta,Wm,u)}},Xw=function(e){return a(Ta,Wm,e)},Kw=v(function(e,r){return rx({a1:g_(e.fO),f0:e.f0,a3:h_(.5),cY:e.cY,a4:z(Tu(Ae(e.dD.im)),Tu(Ae(e.dD.gH))),a8:Xw(r),hI:!0,hZ:a(Hm,st(e.hY),st(e.h_)),fm:nm})}),Zw=v(function(e,r){return a(Kw,{fO:T1,f0:M1,cY:e.cY,dD:e.dD,hY:0,h_:0},a(p_,e,r))}),Qw=h(v1,Zw,m1,f1);const ey={Main:{init:Qw(a(Q,function(e){return ur({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({cU:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return ur({fJ:d,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",ze))},a(K,"control",ze))},a(K,"down",ze))},a(K,"downs",fi(wa)))},a(K,"left",ze))},a(K,"pressedKeys",fi(wa)))},a(K,"right",ze))},a(K,"shift",ze))},a(K,"up",ze))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",ze))},a(K,"isDown",ze))},a(K,"move",ze))},a(K,"rightDown",ze))},a(K,"rightUp",ze))},a(K,"up",ze))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ry=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),c(s)&&(oe.keyboard.up=!0),l(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(x=>x!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),c(s)&&(oe.keyboard.up=!1),l(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const x=s/1e3,_=x-oe.clock;_<.009||(oe.dt=_,oe.clock=x,e.ports.tick.send(oe),d(oe)),window.requestAnimationFrame(b)}},ny=ey.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});ry(ny);
