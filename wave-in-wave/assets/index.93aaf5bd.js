const Jm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Jm();function Ln(e,r,n){return n.a=e,n.f=r,n}function v(e){return Ln(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return Ln(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ee(e){return Ln(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function qe(e){return Ln(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function xr(e){return Ln(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function ki(e){return Ln(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function Pe(e){return Ln(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,t,i,o,l,c,u)}}}}}}}})}function ml(e){return Ln(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return e(r,n,t,i,o,l,c,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function z(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ar(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function sl(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function ht(e,r,n,t,i,o,l,c,u){return e.a===8?e.f(r,n,t,i,o,l,c,u):e(r)(n)(t)(i)(o)(l)(c)(u)}function qm(e,r,n,t,i,o,l,c,u,f){return e.a===9?e.f(r,n,t,i,o,l,c,u,f):e(r)(n)(t)(i)(o)(l)(c)(u)(f)}var Ym=[];function Xm(e){return e.length}var Zm=T(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Km=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),Qm=v(function(e,r){return r[e]});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});T(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var es=T(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+rs()),r});function rs(e){return"<internals>"}function Fa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=Mo(e,r,0,t);i&&(n=t.pop());i=Mo(n.a,n.b,0,t));return i}function Mo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Fa(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=qc(e),r=qc(r));for(var i in e)if(!Mo(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function he(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=he(e.a,r.a))||(n=he(e.b,r.b))?n:he(e.c,r.c);for(;e.b&&r.b&&!(n=he(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return he(e,r)<0});v(function(e,r){return he(e,r)<1});v(function(e,r){return he(e,r)>0});v(function(e,r){return he(e,r)>=0});var ns=v(function(e,r){var n=he(e,r);return n<0?V$:n?qp:E$}),bt=0;function L(e,r){return{a:e,b:r}}function R(e,r,n){return{a:e,b:r,c:n}}function Ve(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Xr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Xr(e.a,r);return n}var D={$:0};function Xr(e,r){return{$:1,a:e,b:r}}var as=v(Xr);function $(e){for(var r=D,n=e.length;n--;)r=Xr(e[n],r);return r}function Di(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ts=T(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ee(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});qe(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(z(e,r.a,n.a,t.a,i.a));return $(o)});xr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,t.a,i.a,o.a));return $(l)});v(function(e,r){return $(Di(r).sort(function(n,t){return he(e(n),e(t))}))});v(function(e,r){return $(Di(r).sort(function(n,t){var i=a(e,n,t);return i===E$?0:i===V$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var is=v(Math.pow);v(function(e,r){return r%e});var os=v(function(e,r){var n=r%e;return e===0?Fa(11):n>0&&e<0||n<0&&e>0?n+e:n}),ls=Math.PI,cs=Math.cos,us=Math.sin,$s=Math.tan;v(Math.atan2);function vs(e){return e}function fs(e){return e===1/0||e===-1/0}var ms=Math.ceil,ss=Math.floor,ds=Math.round,ps=Math.sqrt,Ac=Math.log,gs=isNaN;function hs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var bs=v(function(e,r){return e+r});function _s(e){var r=e.charCodeAt(0);return isNaN(r)?J:Y(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function ws(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function ys(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}T(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var xs=T(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ss=v(function(e,r){return r.split(e)}),Cs=v(function(e,r){return r.join(e)}),Ls=T(function(e,r,n){return n.slice(e,r)});function zs(e){return $(e.trim().split(/\s+/g))}function Ps(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Ms=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Ts=v(function(e,r){return r.indexOf(e)>-1}),ks=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ds=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function $$(e){return e+""}function Fs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:Y(n==45?-r:r)}function As(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?Y(r):J}function Is(e){return Di(e).join("")}function Bs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Es(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Vs(e){return{$:0,a:e}}function js(e){return{$:1,a:e}}function dl(e){return{$:2,b:e}}var Rs=dl(function(e){return typeof e=="boolean"?Ge(e):Or("a BOOL",e)}),Ns=dl(function(e){return typeof e=="number"?Ge(e):Or("a FLOAT",e)}),Os=dl(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Or("a STRING",e)});function Hs(e){return{$:3,b:e}}var Gs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function zn(e,r){return{$:9,f:e,g:r}}var Ws=v(function(e,r){return{$:10,b:r,h:e}}),Us=v(function(e,r){return zn(e,[r])}),Js=T(function(e,r,n){return zn(e,[r,n])});ee(function(e,r,n,t){return zn(e,[r,n,t])});qe(function(e,r,n,t,i){return zn(e,[r,n,t,i])});xr(function(e,r,n,t,i,o){return zn(e,[r,n,t,i,o])});ki(function(e,r,n,t,i,o,l){return zn(e,[r,n,t,i,o,l])});Pe(function(e,r,n,t,i,o,l,c){return zn(e,[r,n,t,i,o,l,c])});ml(function(e,r,n,t,i,o,l,c,u){return zn(e,[r,n,t,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Lr(e,n)}catch(t){return tr(a(Pl,"This is not valid JSON! "+t.message,r))}});var v$=v(function(e,r){return Lr(e,r)});function Lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Or("null",r);case 3:return Et(r)?Ic(e.b,r,$):Or("a LIST",r);case 4:return Et(r)?Ic(e.b,r,qs):Or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Or("an OBJECT with a field named `"+n+"`",r);var f=Lr(e.b,r[n]);return Ir(f)?f:tr(a(Yc,n,f.a));case 7:var t=e.e;if(!Et(r))return Or("an ARRAY",r);if(t>=r.length)return Or("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Lr(e.b,r[t]);return Ir(f)?f:tr(a(j$,t,f.a));case 8:if(typeof r!="object"||r===null||Et(r))return Or("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Lr(e.b,r[o]);if(!Ir(f))return tr(a(Yc,o,f.a));i=Xr(L(o,f.a),i)}return Ge(fr(i));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var f=Lr(c[u],r);if(!Ir(f))return f;l=l(f.a)}return Ge(l);case 10:var f=Lr(e.b,r);return Ir(f)?Lr(e.h(f.a),r):f;case 11:for(var m=D,s=e.g;s.b;s=s.b){var f=Lr(s.a,r);if(Ir(f))return f;m=Xr(f.a,m)}return tr(Yp(fr(m)));case 1:return tr(a(Pl,e.a,r));case 0:return Ge(e.a)}}function Ic(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=Lr(e,r[o]);if(!Ir(l))return tr(a(j$,o,l.a));i[o]=l.a}return Ge(n(i))}function Et(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function qs(e){return a($0,e.length,function(r){return e[r]})}function Or(e,r){return tr(a(Pl,"Expecting "+e,r))}function sa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return sa(e.b,r.b);case 6:return e.d===r.d&&sa(e.b,r.b);case 7:return e.e===r.e&&sa(e.b,r.b);case 9:return e.f===r.f&&Bc(e.g,r.g);case 10:return e.h===r.h&&sa(e.b,r.b);case 11:return Bc(e.g,r.g)}}function Bc(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!sa(e[t],r[t]))return!1;return!0}var Ys=v(function(e,r){return JSON.stringify(r,null,e)+""});function f$(e){return e}function Xs(){return[]}function Zs(){return{}}var Ks=T(function(e,r,n){return n[e]=r,n});function Qs(e){return v(function(r,n){return n.push(e(r)),n})}function Zn(e){return{$:0,a:e}}function ed(e){return{$:1,a:e}}function fn(e){return{$:2,b:e,c:null}}var To=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function rd(e){return{$:5,b:e}}var nd=0;function pl(e){var r={$:0,e:nd++,f:e,g:null,h:[]};return gl(r),r}function m$(e){return fn(function(r){r(Zn(pl(e)))})}function s$(e,r){e.h.push(r),gl(e)}var ad=v(function(e,r){return fn(function(n){s$(e,r),n(Zn(bt))})}),to=!1,Ec=[];function gl(e){if(Ec.push(e),!to){for(to=!0;e=Ec.shift();)td(e);to=!1}}function td(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,gl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ee(function(e,r,n,t){return hl(r,t,e.gR,e.ih,e.hV,function(){return function(){}})});function hl(e,r,n,t,i,o){var l=a(v$,e,r?r.flags:void 0);Ir(l)||Fa(2);var c={},u=n(l.a),f=u.a,m=o(b,f),s=id(c,b);function b(d,w){var _=a(t,d,f);m(f=_.a,w),jc(c,_.b,i(f))}return jc(c,u.b,i(f)),s?{ports:s}:{}}var Jr={};function id(e,r){var n;for(var t in Jr){var i=Jr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=ld(i,r)}return n}function od(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function ld(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c(u){return a(To,c,rd(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&l?z(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=pl(a(To,c,e.b))}var cd=v(function(e,r){return fn(function(n){e.g(r),n(Zn(bt))})});v(function(e,r){return a(ad,e.h,{$:0,a:r})});function d$(e){return function(r){return{$:1,k:e,l:r}}}function ud(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Vc=[],io=!1;function jc(e,r,n){if(Vc.push({p:e,q:r,r:n}),!io){io=!0;for(var t;t=Vc.shift();)$d(t.p,t.q,t.r);io=!1}}function $d(e,r,n){var t={};li(!0,r,t,null),li(!1,n,t,null);for(var i in e)s$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function li(e,r,n,t){switch(r.$){case 1:var i=r.k,o=vd(e,i,t,r.l);n[i]=fd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)li(e,l.a,n,t);return;case 3:li(e,r.o,n,{s:r.n,t});return}}function vd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Jr[r].e:Jr[r].f;return a(o,i,t)}function fd(e,r,n){return n=n||{i:D,j:D},e?n.i=Xr(r,n.i):n.j=Xr(r,n.j),n}function md(e){Jr[e]&&Fa(3)}v(function(e,r){return r});function sd(e,r){return md(e),Jr[e]={f:dd,u:r,a:pd},d$(e)}var dd=v(function(e,r){return function(n){return e(r(n))}});function pd(e,r){var n=D,t=Jr[e].u,i=Zn(null);Jr[e].b=i,Jr[e].c=T(function(l,c,u){return n=c,i});function o(l){var c=a(v$,t,l);Ir(c)||Fa(4,e,c.a);for(var u=c.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var ci,tn=typeof document!="undefined"?document:{};function bl(e,r){e.appendChild(r)}ee(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(_n(e,function(){}),i),{}});function ko(e){return{$:0,a:e}}var p$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:wl(n),e:i,f:e,b:o}})}),mn=p$(void 0),gd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:wl(n),e:i,f:e,b:o}})}),hd=gd(void 0);function bd(e,r,n,t){return{$:3,d:wl(e),g:r,h:n,i:t}}var _d=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Pn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Pn([e,r],function(){return e(r)})});T(function(e,r,n){return Pn([e,r,n],function(){return a(e,r,n)})});var wd=ee(function(e,r,n,t){return Pn([e,r,n,t],function(){return h(e,r,n,t)})});qe(function(e,r,n,t,i){return Pn([e,r,n,t,i],function(){return z(e,r,n,t,i)})});xr(function(e,r,n,t,i,o){return Pn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});ki(function(e,r,n,t,i,o,l){return Pn([e,r,n,t,i,o,l],function(){return ar(e,r,n,t,i,o,l)})});Pe(function(e,r,n,t,i,o,l,c){return Pn([e,r,n,t,i,o,l,c],function(){return sl(e,r,n,t,i,o,l,c)})});ml(function(e,r,n,t,i,o,l,c,u){return Pn([e,r,n,t,i,o,l,c,u],function(){return ht(e,r,n,t,i,o,l,c,u)})});var g$=v(function(e,r){return{$:"a0",n:e,o:r}}),yd=v(function(e,r){return{$:"a1",n:e,o:r}}),_l=v(function(e,r){return{$:"a2",n:e,o:r}}),Vr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function h$(e){return e=="script"?"p":e}function xd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Sd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Cd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function b$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Ld=v(function(e,r){return r.$==="a0"?a(g$,r.n,zd(e,r.o)):r});function zd(e,r){var n=Dl(r);return{$:r.$,a:n?h(v0,n<3?Pd:Md,lr(e),r.a):a(fi,e,r.a)}}var Pd=v(function(e,r){return L(e(r.a),r.b)}),Md=v(function(e,r){return{aA:e(r.aA),dA:r.dA,dp:r.dp}});function wl(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Rc(r,i,o):r[i]=o;continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?Rc(l,i,o):l[i]=o}return r}function Rc(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function _n(e,r){var n=e.$;if(n===5)return _n(e.k||(e.k=e.m()),r);if(n===0)return tn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=_n(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Do(l,r,e.d),l}var l=e.f?tn.createElementNS(e.f,e.c):tn.createElement(e.c);ci&&e.c=="a"&&l.addEventListener("click",ci(l)),Do(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)bl(l,_n(n===1?c[u]:c[u].b,r));return l}function Do(e,r,n){for(var t in n){var i=n[t];t==="a1"?Td(e,i):t==="a0"?Fd(e,r,i):t==="a3"?kd(e,i):t==="a4"?Dd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Td(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function kd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Dd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Fd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Ad(r,o),e.addEventListener(i,l,yl&&{passive:Dl(o)<2}),t[i]=l}}var yl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yl=!0}}))}catch{}function Ad(e,r){function n(t){var i=n.q,o=Lr(i.a,t);if(!!Ir(o)){for(var l=Dl(i),c=o.a,u=l?l<3?c.a:c.aA:c,f=l==1?c.b:l==3&&c.dA,m=(f&&t.stopPropagation(),(l==2?c.b:l==3&&c.dp)&&t.preventDefault(),e),s,b;s=m.j;){if(typeof s=="function")u=s(u);else for(var b=s.length;b--;)u=s[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Id(e,r){return e.$==r.$&&sa(e.a,r.a)}function _$(e,r){var n=[];return Br(e,r,n,0),n}function nr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Br(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Hd(r),o=1;else{nr(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,f=u===c.length;f&&u--;)f=l[u]===c[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Br(e.k,r.k,m,0),m.length>0&&nr(n,1,t,m);return;case 4:for(var s=e.j,b=r.j,d=!1,w=e.k;w.$===4;)d=!0,typeof s!="object"?s=[s,w.j]:s.push(w.j),w=w.k;for(var _=r.k;_.$===4;)d=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(d&&s.length!==b.length){nr(n,0,t,r);return}(d?!Bd(s,b):s!==b)&&nr(n,2,t,b),Br(w,_,n,t+1);return;case 0:e.a!==r.a&&nr(n,3,t,r.a);return;case 1:Nc(e,r,n,t,Ed);return;case 2:Nc(e,r,n,t,Vd);return;case 3:if(e.h!==r.h){nr(n,0,t,r);return}var S=xl(e.d,r.d);S&&nr(n,4,t,S);var C=r.i(e.g,r.g);C&&nr(n,5,t,C);return}}}function Bd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Nc(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){nr(n,0,t,r);return}var o=xl(e.d,r.d);o&&nr(n,4,t,o),i(e,r,n,t)}function xl(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=xl(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Id(l,c)||(t=t||{},t[i]=c)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Ed(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?nr(n,6,t,{v:c,i:l-c}):l<c&&nr(n,7,t,{v:l,e:o});for(var u=l<c?l:c,f=0;f<u;f++){var m=i[f];Br(m,o[f],n,++t),t+=m.b||0}}function Vd(e,r,n,t){for(var i=[],o={},l=[],c=e.e,u=r.e,f=c.length,m=u.length,s=0,b=0,d=t;s<f&&b<m;){var w=c[s],_=u[b],S=w.a,C=_.a,y=w.b,M=_.b,G=void 0,K=void 0;if(S===C){d++,Br(y,M,i,d),d+=y.b||0,s++,b++;continue}var ae=c[s+1],te=u[b+1];if(ae){var ie=ae.a,re=ae.b;K=C===ie}if(te){var q=te.a,de=te.b;G=S===q}if(G&&K){d++,Br(y,de,i,d),Oa(o,i,S,M,b,l),d+=y.b||0,d++,Ha(o,i,S,re,d),d+=re.b||0,s+=2,b+=2;continue}if(G){d++,Oa(o,i,C,M,b,l),Br(y,de,i,d),d+=y.b||0,s+=1,b+=2;continue}if(K){d++,Ha(o,i,S,y,d),d+=y.b||0,d++,Br(re,M,i,d),d+=re.b||0,s+=2,b+=1;continue}if(ae&&ie===q){d++,Ha(o,i,S,y,d),Oa(o,i,C,M,b,l),d+=y.b||0,d++,Br(re,de,i,d),d+=re.b||0,s+=2,b+=2;continue}break}for(;s<f;){d++;var w=c[s],y=w.b;Ha(o,i,w.a,y,d),d+=y.b||0,s++}for(;b<m;){var pe=pe||[],_=u[b];Oa(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||l.length>0||pe)&&nr(n,8,t,{w:i,x:l,y:pe})}var w$="_elmW6BL";function Oa(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Br(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Oa(e,r,n+w$,t,i,o)}function Ha(e,r,n,t,i){var o=e[n];if(!o){var l=nr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Br(t,o.z,c,i),nr(r,9,i,{w:c,A:o});return}Ha(e,r,n+w$,t,i)}function y$(e,r,n,t){Ga(e,r,n,0,0,r.b,t)}function Ga(e,r,n,t,i,o,l){for(var c=n[t],u=c.r;u===i;){var f=c.$;if(f===1)y$(e,r.k,c.s,l);else if(f===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&Ga(e,r,m,0,i,o,l)}else if(f===9){c.t=e,c.u=l;var s=c.s;if(s){s.A.s=e;var m=s.w;m.length>0&&Ga(e,r,m,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||(u=c.r)>o)return t}var b=r.$;if(b===4){for(var d=r.k;d.$===4;)d=d.k;return Ga(e,d,n,t,i+1,o,e.elm_event_node_ref)}for(var w=r.e,_=e.childNodes,S=0;S<w.length;S++){i++;var C=b===1?w[S]:w[S].b,y=i+(C.b||0);if(i<=u&&u<=y&&(t=Ga(_[S],C,n,t,i,y,l),!(c=n[t])||(u=c.r)>o))return t;i=y}return t}function x$(e,r,n,t){return n.length===0?e:(y$(e,r,n,t),ui(e,n))}function ui(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=jd(i,t);i===e&&(e=o)}return e}function jd(e,r){switch(r.$){case 0:return Rd(e,r.s,r.u);case 4:return Do(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ui(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(_n(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=ui(e,o.w),e;case 8:return Nd(e,r);case 5:return r.s(e);default:Fa(10)}}function Rd(e,r,n){var t=e.parentNode,i=_n(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Nd(e,r){var n=r.s,t=Od(n.y,r);e=ui(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:_n(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return t&&bl(e,t),e}function Od(e,r){if(!!e){for(var n=tn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;bl(n,o.c===2?o.s:_n(o.z,r.u))}return n}}function Sl(e){if(e.nodeType===3)return ko(e.textContent);if(e.nodeType!==1)return ko("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=Xr(a(Vr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Xr(Sl(f[t]),u);return h(mn,c,r,u)}function Hd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Gd=ee(function(e,r,n,t){return hl(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.ij,c=t.node,u=Sl(c);return S$(o,function(f){var m=l(f),s=_$(u,m);c=x$(c,u,s,i),u=m})})});ee(function(e,r,n,t){return hl(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.dy&&e.dy(i),c=e.ij,u=tn.title,f=tn.body,m=Sl(f);return S$(o,function(s){ci=l;var b=c(s),d=mn("body")(D)(b.fR),w=_$(m,d);f=x$(f,m,w,i),m=d,ci=0,u!==b.ib&&(tn.title=u=b.ib)})})});var $i=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function S$(e,r){r(e);var n=0;function t(){n=n===1?0:($i(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&$i(t),n=2)}}v(function(e,r){return a(Al,wt,fn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Al,wt,fn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Al,wt,fn(function(){history.replaceState({},"",r),e()}))});var Wd={addEventListener:function(){},removeEventListener:function(){}},Ud=typeof window!="undefined"?window:Wd;T(function(e,r,n){return m$(fn(function(t){function i(o){pl(n(o))}return e.addEventListener(r,i,yl&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Lr(e,r);return Ir(n)?Y(n.a):J});function C$(e,r){return fn(function(n){$i(function(){var t=document.getElementById(e);n(t?Zn(r(t)):ed(f0(e)))})})}function Jd(e){return fn(function(r){$i(function(){r(Zn(e()))})})}v(function(e,r){return C$(r,function(n){return n[e](),bt})});v(function(e,r){return Jd(function(){return Ud.scroll(e,r),bt})});T(function(e,r,n){return C$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,bt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var qd=v(function(e,r){var n="g";e.g9&&(n+="m"),e.f$&&(n+="i");try{return Y(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var Yd=T(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var s=u[f];m[--f]=s?Y(s):J}t.push(z(mf,u[0],u.index,i,$(m))),c=r.lastIndex}return r.lastIndex=l,$(t)});ee(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var f=arguments[c];u[--c]=f?Y(f):J}return n(z(mf,l,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});T(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,$(i)});var Oc=0;function tt(e,r){for(;r.b;r=r.b)e(r.a)}function Cl(e){for(var r=0;e.b;e=e.b)r++;return r}var Xd=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Zd=qe(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Kd=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Qd=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),ep=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),rp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),np=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),ap=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),tp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),ip=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),op=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},lp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},cp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},up=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},L$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},z$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},$p=function(e){e.gl.disable(e.gl.CULL_FACE)},vp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},fp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},mp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Hc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],sp=[lp,cp,up,L$,z$,$p,vp,fp,mp];function Gc(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function dp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function P$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function pp(e,r,n,t){for(var i=n.a.d_,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(d,w,_,S,C){var y;if(i===1)for(y=0;y<w;y++)d[_++]=w===1?S[C]:S[C][y];else o.forEach(function(M){for(y=0;y<w;y++)d[_++]=w===1?S[M][C]:S[M][C][y]})}var u=P$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,s=new u.type(Cl(n.b)*m);tt(function(d){c(s,u.size*u.arraySize,f,d,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),b}function gp(e,r){if(r.a.eb>0){var n=e.createBuffer(),t=hp(r.c,r.a.eb);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d_*Cl(r.b),indexBuffer:null,buffers:{}}}function hp(e,r){var n=new Uint32Array(Cl(e)*r),t=0,i;return tt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Wc(e,r){return e+"#"+r}var M$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),L$(n),z$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=Wc(o.b.id,o.c.id),c=n.programs[l]),!c){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Oc++,f||(f=Gc(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Oc++,m||(m=Gc(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var s=dp(t,f,m);c={glProgram:s,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=bp(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(s,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var d=t.getActiveAttrib(s,u),w=t.getAttribLocation(s,d.name);c.activeAttributes.push(d),c.activeAttributeLocations.push(w)}l=Wc(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),_p(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=gp(t,o.d),n.buffers.set(o.d,_)),u=0;u<c.activeAttributes.length;u++){d=c.activeAttributes[u],w=c.activeAttributeLocations[u],_.buffers[d.name]===void 0&&(_.buffers[d.name]=pp(t,d,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[d.name]);var S=P$(t,d.type);if(S.arraySize===1)t.enableVertexAttribArray(w),t.vertexAttribPointer(w,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,y=C*S.arraySize,M=0;M<S.arraySize;M++)t.enableVertexAttribArray(w+M),t.vertexAttribPointer(w+M,S.size,S.baseType,!1,y,C*M)}for(n.toggle=!n.toggle,tt(Z1(n),o.a),u=0;u<Hc.length;u++){var G=n[Hc[u]];G.toggle!==n.toggle&&G.enabled&&(sp[u](n),G.enabled=!1,G.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eN,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eN,0,_.numIndices)}}return tt(i,e.g),r});function bp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(d,w){var _=w.name,S=e.getUniformLocation(d,_);switch(w.type){case e.INT:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};case e.FLOAT:return function(y){o[_]!==y&&(e.uniform1f(S,y),o[_]=y)};case e.FLOAT_VEC2:return function(y){o[_]!==y&&(e.uniform2f(S,y[0],y[1]),o[_]=y)};case e.FLOAT_VEC3:return function(y){o[_]!==y&&(e.uniform3f(S,y[0],y[1],y[2]),o[_]=y)};case e.FLOAT_VEC4:return function(y){o[_]!==y&&(e.uniform4f(S,y[0],y[1],y[2],y[3]),o[_]=y)};case e.FLOAT_MAT4:return function(y){o[_]!==y&&(e.uniformMatrix4fv(S,!1,new Float32Array(y)),o[_]=y)};case e.SAMPLER_2D:var C=l++;return function(y){e.activeTexture(e.TEXTURE0+C);var M=c.textures.get(y);M||(M=y.gc(e),c.textures.set(y,M)),e.bindTexture(e.TEXTURE_2D,M),o[_]!==y&&(e.uniform1i(S,C),o[_]=y)};case e.BOOL:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),s=0;s<m;s++){var b=e.getActiveUniform(i,s);f[t[b.name]||b.name]=u(i,b)}return f}function _p(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var wp=T(function(e,r,n){return bd(r,{g:n,f:{},h:e},Pp,Mp)}),yp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),xp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Sp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Cp=v(function(e,r){e.contextAttributes.antialias=!0}),Lp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),zp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Pp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};tt(function(i){return a(X1,r,i)},e.h);var n=tn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),Xd(function(){return a(M$,e,n)})):(n=tn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Mp(e,r){return r.f=e.f,M$(r)}var Tp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/kp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function kp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ll=new Float64Array(3),Uc=new Float64Array(3),Jc=new Float64Array(3),Dp=T(function(e,r,n){return new Float64Array([e,r,n])}),Fp=function(e){return e[0]},Ap=function(e){return e[1]},Ip=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Bp=function(e){return new Float64Array([e.io,e.is,e.dO])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function T$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(T$);function k$(e,r,n){return n===void 0&&(n=new Float64Array(3)),vi(T$(e,r,n),n)}v(k$);function D$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function vi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/D$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Ep=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Wa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Wa);function Fo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Fo);v(function(e,r){var n,t=Ll,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Wa(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Wa(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Wa(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Wa(r,t)+e[14])/n,i});var Vp=ee(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var jp=function(e){return{io:e[0],is:e[1],dO:e[2],fp:e[3]}},Rp=function(e){return new Float64Array([e.io,e.is,e.dO,e.fp])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Np(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Np(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Op=new Float64Array(16),Hp=new Float64Array(16),Gp=function(e){var r=new Float64Array(16);return r[0]=e.ep,r[1]=e.et,r[2]=e.ex,r[3]=e.eB,r[4]=e.eq,r[5]=e.eu,r[6]=e.ey,r[7]=e.eC,r[8]=e.er,r[9]=e.ev,r[10]=e.ez,r[11]=e.eD,r[12]=e.es,r[13]=e.ew,r[14]=e.eA,r[15]=e.eE,r},Wp=function(e){return{ep:e[0],et:e[1],ex:e[2],eB:e[3],eq:e[4],eu:e[5],ey:e[6],eC:e[7],er:e[8],ev:e[9],ez:e[10],eD:e[11],es:e[12],ew:e[13],eA:e[14],eE:e[15]}};function F$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}xr(F$);ee(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return F$(l,c,o,i,n,t)});function A$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}xr(A$);ee(function(e,r,n,t){return A$(e,r,n,t,-1,1)});function I$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],m=e[7],s=e[8],b=e[9],d=e[10],w=e[11],_=e[12],S=e[13],C=e[14],y=e[15],M=r[0],G=r[1],K=r[2],ae=r[3],te=r[4],ie=r[5],re=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],I=r[14],B=r[15];return n[0]=t*M+c*G+s*K+_*ae,n[1]=i*M+u*G+b*K+S*ae,n[2]=o*M+f*G+d*K+C*ae,n[3]=l*M+m*G+w*K+y*ae,n[4]=t*te+c*ie+s*re+_*q,n[5]=i*te+u*ie+b*re+S*q,n[6]=o*te+f*ie+d*re+C*q,n[7]=l*te+m*ie+w*re+y*q,n[8]=t*de+c*pe+s*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+d*Me+C*Se,n[11]=l*de+m*pe+w*Me+y*Se,n[12]=t*me+c*Te+s*I+_*B,n[13]=i*me+u*Te+b*I+S*B,n[14]=o*me+f*Te+d*I+C*B,n[15]=l*me+m*Te+w*I+y*B,n}v(I$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],f=e[8],m=e[9],s=e[10],b=e[12],d=e[13],w=e[14],_=r[0],S=r[1],C=r[2],y=r[4],M=r[5],G=r[6],K=r[8],ae=r[9],te=r[10],ie=r[12],re=r[13],q=r[14];return n[0]=t*_+l*S+f*C,n[1]=i*_+c*S+m*C,n[2]=o*_+u*S+s*C,n[3]=0,n[4]=t*y+l*M+f*G,n[5]=i*y+c*M+m*G,n[6]=o*y+u*M+s*G,n[7]=0,n[8]=t*K+l*ae+f*te,n[9]=i*K+c*ae+m*te,n[10]=o*K+u*ae+s*te,n[11]=0,n[12]=t*ie+l*re+f*q+b,n[13]=i*ie+c*re+m*q+d,n[14]=o*ie+u*re+s*q+w,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=vi(r,Ll);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*u,n[2]=o*t*c-i*u,n[3]=0,n[4]=t*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+t*u,n[7]=0,n[8]=t*o*c+i*u,n[9]=i*o*c-t*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var t=new Float64Array(16),i=1/D$(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),s=o*m,b=l*m,d=c*m,w=o*l*f,_=o*c*f,S=l*c*f,C=o*o*f+u,y=w+d,M=_-b,G=w-d,K=l*l*f+u,ae=S+s,te=_+b,ie=S-s,re=c*c*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],I=n[7],B=n[8],E=n[9],V=n[10],j=n[11],N=n[12],O=n[13],H=n[14],Ne=n[15];return t[0]=q*C+Se*y+B*M,t[1]=de*C+me*y+E*M,t[2]=pe*C+Te*y+V*M,t[3]=Me*C+I*y+j*M,t[4]=q*G+Se*K+B*ae,t[5]=de*G+me*K+E*ae,t[6]=pe*G+Te*K+V*ae,t[7]=Me*G+I*K+j*ae,t[8]=q*te+Se*ie+B*re,t[9]=de*te+me*ie+E*re,t[10]=pe*te+Te*ie+V*re,t[11]=Me*te+I*ie+j*re,t[12]=N,t[13]=O,t[14]=H,t[15]=Ne,t});function Up(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}T(Up);ee(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Jp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}T(Jp);ee(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],u=t[3],f=t[4],m=t[5],s=t[6],b=t[7],d=t[8],w=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=f,i[5]=m,i[6]=s,i[7]=b,i[8]=d,i[9]=w,i[10]=_,i[11]=S,i[12]=o*e+f*r+d*n+t[12],i[13]=l*e+m*r+w*n+t[13],i[14]=c*e+s*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],f=r[3],m=r[4],s=r[5],b=r[6],d=r[7],w=r[8],_=r[9],S=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=f,n[4]=m,n[5]=s,n[6]=b,n[7]=d,n[8]=w,n[9]=_,n[10]=S,n[11]=C,n[12]=l*t+m*i+w*o+r[12],n[13]=c*t+s*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+d*i+C*o+r[15],n});T(function(e,r,n){var t=k$(e,r,Ll),i=vi(Fo(n,t,Uc),Uc),o=vi(Fo(t,i,Jc),Jc),l=Op,c=Hp;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,I$(l,c)});T(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var P=as,Vt=es,B$=T(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var f=l.a;return h(Vt,e,c,f)}else{var u=l.a;return h(Vt,o,c,u)}});return h(Vt,o,h(Vt,e,r,i),t)}),zl=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,u=h(e,t,i,h(zl,e,r,l)),f=o;e=c,r=u,n=f;continue e}}),qc=function(e){return h(zl,T(function(r,n,t){return a(P,L(r,n),t)}),D,e)},E$=1,qp=2,V$=0,tr=function(e){return{$:1,a:e}},Pl=v(function(e,r){return{$:3,a:e,b:r}}),Yc=v(function(e,r){return{$:0,a:e,b:r}}),j$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},Yp=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},J={$:1},Xp=Ms,Zp=Ys,k=$$,ce=v(function(e,r){return a(Cs,e,Di(r))}),Ml=v(function(e,r){return $(a(Ss,e,r))}),R$=function(e){return a(ce,`
    `,a(Ml,`
`,e))},Re=T(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),Un=function(e){return h(Re,v(function(r,n){return n+1}),0,e)},Kp=ts,Qp=T(function(e,r,n){e:for(;;)if(he(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),qr=v(function(e,r){return h(Qp,e,r,D)}),N$=v(function(e,r){return h(Kp,e,a(qr,0,Un(r)-1),r)}),Yr=Bs,O$=function(e){var r=Yr(e);return 97<=r&&r<=122},H$=function(e){var r=Yr(e);return r<=90&&65<=r},e0=function(e){return O$(e)||H$(e)},r0=function(e){var r=Yr(e);return r<=57&&48<=r},n0=function(e){return O$(e)||H$(e)||r0(e)},fr=function(e){return h(Re,P,D,e)},Aa=_s,a0=v(function(e,r){return`

(`+(k(e+1)+(") "+R$(t0(r))))}),t0=function(e){return a(i0,e,D)},i0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,l=e.b,t=function(){var _=Aa(n);if(_.$===1)return!1;var S=_.a,C=S.a,y=S.b;return e0(C)&&a(Xp,n0,y)}(),i=t?"."+n:"['"+(n+"']"),u=l,f=a(P,i,r);e=u,r=f;continue e;case 1:var o=e.a,l=e.b,c="["+(k(o)+"]"),u=l,f=a(P,c,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var s=function(){return r.b?"The Json.Decode.oneOf at json"+a(ce,"",fr(r)):"Json.Decode.oneOf"}(),w=s+(" failed in the following "+(k(Un(m))+" ways:"));return a(ce,`

`,a(P,w,a(N$,a0,m)))}else{var l=m.a,u=l,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ce,"",fr(r)):"!"}();default:var b=e.a,d=e.b,w=function(){return r.b?"Problem with the value at json"+(a(ce,"",fr(r))+`:

    `):`Problem with the given value:

`}();return w+(R$(a(Zp,4,d))+(`

`+b))}}),_r=32,Ao=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Io=Ym,it=ms,Tl=v(function(e,r){return Ac(r)/Ac(e)}),Ua=vs,ot=it(a(Tl,2,_r)),G$=z(Ao,0,ot,Io,Io),W$=Zm,U$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var J$=ss,Bo=Xm,Qe=v(function(e,r){return he(e,r)>0?e:r}),o0=function(e){return{$:0,a:e}},kl=Km,l0=v(function(e,r){e:for(;;){var n=a(kl,_r,e),t=n.a,i=n.b,o=a(P,o0(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return fr(o)}}),q$=function(e){var r=e.a;return r},c0=v(function(e,r){e:for(;;){var n=it(r/_r);if(n===1)return a(kl,_r,e).a;var t=a(l0,e,D),i=n;e=t,r=i;continue e}}),Y$=v(function(e,r){if(r.n){var n=r.n*_r,t=J$(a(Tl,_r,n-1)),i=e?fr(r.C):r.C,o=a(c0,i,r.n);return z(Ao,Bo(r.r)+n,a(Qe,5,t*ot),o,r.r)}else return z(Ao,Bo(r.r),ot,Io,r.r)}),u0=qe(function(e,r,n,t,i){e:for(;;){if(r<0)return a(Y$,!1,{C:t,n:n/_r|0,r:i});var o=U$(h(W$,_r,r,e)),l=e,c=r-_r,u=n,f=a(P,o,t),m=i;e=l,r=c,n=u,t=f,i=m;continue e}}),$0=v(function(e,r){if(e<=0)return G$;var n=e%_r,t=h(W$,n,e-n,r),i=e-n-_r;return F(u0,r,i,e,D,t)}),Ir=function(e){return!e.$},Q=Ws,ze=Rs,Z=Gs,We=Ns,X$=v(function(e,r){return{b5:r.b5,f9:e,cS:r.cS,gn:r.gn,g0:r.g0,ho:r.ho,dw:r.dw,ik:r.ik}}),fi=Us,v0=Js,lr=Vs,Dl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Er=function(e){return e},f0=Er,Xc=xr(function(e,r,n,t,i,o){return{d4:o,d9:r,eW:t,eZ:n,e1:e,e2:i}}),m0=Ts,En=ws,da=Ls,_t=v(function(e,r){return e<1?r:h(da,e,En(r),r)}),Fi=Ds,Ai=function(e){return e===""},Ii=v(function(e,r){return e<1?"":h(da,0,e,r)}),Z$=Fs,Zc=qe(function(e,r,n,t,i){if(Ai(i)||a(m0,"@",i))return J;var o=a(Fi,":",i);if(o.b){if(o.b.b)return J;var l=o.a,c=Z$(a(_t,l+1,i));if(c.$===1)return J;var u=c;return Y(ar(Xc,e,a(Ii,l,i),u,r,n,t))}else return Y(ar(Xc,e,i,J,r,n,t))}),Kc=ee(function(e,r,n,t){if(Ai(t))return J;var i=a(Fi,"/",t);if(i.b){var o=i.a;return F(Zc,e,a(_t,o,t),r,n,a(Ii,o,t))}else return F(Zc,e,"/",r,n,t)}),Qc=T(function(e,r,n){if(Ai(n))return J;var t=a(Fi,"?",n);if(t.b){var i=t.a;return z(Kc,e,Y(a(_t,i+1,n)),r,a(Ii,i,n))}else return z(Kc,e,J,r,n)});v(function(e,r){if(Ai(r))return J;var n=a(Fi,"#",r);if(n.b){var t=n.a;return h(Qc,e,Y(a(_t,t+1,r)),a(Ii,t,r))}else return h(Qc,e,J,r)});var s0=ks,wt=function(e){},yt=Zn,d0=yt(0),K$=ee(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,f=c.b;if(f.b){var m=f.a,s=f.b,b=n>500?h(Re,e,r,fr(s)):z(K$,e,r,n+1,s);return a(e,i,a(e,l,a(e,u,a(e,m,b))))}else return a(e,i,a(e,l,a(e,u,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),er=T(function(e,r,n){return z(K$,e,r,0,n)}),ne=v(function(e,r){return h(er,v(function(n,t){return a(P,e(n),t)}),D,r)}),mi=To,Fl=v(function(e,r){return a(mi,function(n){return yt(e(n))},r)}),p0=T(function(e,r,n){return a(mi,function(t){return a(mi,function(i){return yt(a(e,t,i))},n)},r)}),g0=function(e){return h(er,p0(P),yt(D),e)},h0=cd,b0=v(function(e,r){var n=r;return m$(a(mi,h0(e),n))}),_0=T(function(e,r,n){return a(Fl,function(t){return 0},g0(a(ne,b0(e),r)))}),w0=T(function(e,r,n){return yt(0)}),y0=v(function(e,r){var n=r;return a(Fl,e,n)});Jr.Task=od(d0,_0,w0,y0);var x0=d$("Task"),Al=v(function(e,r){return x0(a(Fl,e,r))}),S0=Gd,C0=hs,si={$:1},Q$=function(e){return{$:2,a:e}},Il={$:0},Pr=v(function(e,r){return{$:0,a:e,b:r}}),Xe=T(function(e,r,n){return r(e(n))}),Kn=function(e){var r=e.b.s;return r.a},L0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return Y(a(Pr,r,{s:o,an:l,X:a(P,t,n)}))}else return J},De=v(function(e,r){if(r.$)return e;var n=r.a;return n}),z0=T(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dB;return(he(o+r.gn,Kn(n).b5)>0?a(Xe,L0,De(a(Pr,si,i))):Er)(a(Pr,Q$({dB:o+r.gn}),i));default:var l=i.s,c=l.a,u=l.b,f=a(X$,c.f9,Ve(r,{b5:c.b5+r.gn})),m=a(e,f,u);return a(Pr,Il,{s:L(f,m),an:D,X:a(P,i.s,i.X)})}}),ev=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),P0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(P,t,n);e=o,r=l,n=c;continue e}else return n}}),M0=v(function(e,r){return fr(h(P0,e,r,D))}),rv=T(function(e,r,n){if(r<=0)return D;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,l=o.a;return $([y,l]);case 3:if(t.b.b.b.b){var c=t.b,y=c.a,u=c.b,l=u.a,f=u.b,m=f.a;return $([y,l,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var s=t.b,y=s.a,b=s.b,l=b.a,d=b.b,m=d.a,w=d.b,_=w.a,S=w.b;return e>1e3?a(P,y,a(P,l,a(P,m,a(P,_,a(M0,r-4,S))))):a(P,y,a(P,l,a(P,m,a(P,_,h(rv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,y=C.a;return $([y])}}),T0=v(function(e,r){return h(rv,0,e,r)}),k0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=X(fr(n),X($([t]),i)),l=a(T0,e,o),c=a(ev,e,o);if(c.b){var u=c.a,f=c.b;return a(Pr,si,{s:u,an:f,X:fr(l)})}else{var m=fr(l);if(m.b){var s=m.a,b=m.b;return a(Pr,si,{s,an:D,X:b})}else return r}}),D0=function(e){var r=e.b;return a(Pr,si,r)},F0=function(e){var r=e.b;return a(Pr,Q$({dB:Kn(e).b5}),r)},A0=function(e){var r=e.b;return a(Pr,Il,r)},I0=v(function(e,r){switch(e.$){case 1:return D0(r);case 2:return A0(r);case 3:return F0(r);default:var n=e.a;return a(k0,n,r)}}),di=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),B0=v(function(e,r){return Ve(r,{aN:e(r.aN)})}),E0=function(e){return{$:3,a:e}},V0=function(e){return{$:2,a:e}},nv=v(function(e,r){return{$:0,a:e,b:r}}),av=v(function(e,r){return{$:1,a:e,b:r}}),je=v(function(e,r){if(r.$)return J;var n=r.a;return Y(e(n))}),be=function(e){return e<0?-e:e},tv=As,j0=T(function(e,r,n){return a(De,0/0,tv(a(e,r,n)))}),xt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),R0=xs,iv=function(e){return h(R0,P,D,e)},N0=v(function(e,r){var n=a(xt,function(t){return t!=="0"&&t!=="."},iv(r));return X(e&&n?"-":"",r)}),ve=$$,Eo=bs,ov=Es,lv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Aa(n);if(t.$===1)return"01";var i=t.a;return a(Eo,"0",lv(i))}else{var o=Yr(r);return o>=48&&o<57?a(Eo,ov(o+1),n):"0"}},Vo=fs,O0=gs,Bi=function(e){return a(Eo,e,"")},cv=T(function(e,r,n){return e<=0?n:h(cv,e>>1,X(r,r),e&1?X(n,r):n)}),lt=v(function(e,r){return h(cv,e,r,"")}),jo=T(function(e,r,n){return X(n,a(lt,e-En(n),Bi(r)))}),Ro=ys,uv=function(e){var r=a(Ml,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},H0=function(e){var r=a(Ml,"e",ve(be(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(De,0,Z$(a(s0,"+",i)?a(_t,1,i):i)),l=uv(n),c=l.a,u=l.b,f=X(c,u),m=o<0?a(De,"0",a(je,function(s){var b=s.a,d=s.b;return b+("."+d)},a(je,di(Bi),Aa(X(a(lt,be(o),"0"),f))))):h(jo,o+1,"0",f);return X(e<0?"-":"",m)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},G0=T(function(e,r,n){if(Vo(n)||O0(n))return ve(n);var t=n<0,i=uv(H0(be(n))),o=i.a,l=i.b,c=En(o)+r,u=X(a(lt,-c+1,"0"),h(jo,c,"0",X(o,l))),f=En(u),m=a(Qe,1,c),s=a(e,t,h(da,m,f,u)),b=h(da,0,m,u),d=s?Ro(a(De,"1",a(je,lv,Aa(Ro(b))))):b,w=En(d),_=d==="0"?d:r<=0?X(d,a(lt,be(r),"0")):he(r,En(l))<0?h(da,0,w-r,d)+("."+h(da,w-r,w,d)):X(o+".",h(jo,r,"0",l));return a(N0,t,_)}),$v=G0(v(function(e,r){var n=Aa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Yr(i))})),W0=j0($v),U0=T(function(e,r,n){var t=a(Tl,10,be(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(W0,i,n)}),vv=ns,St=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(vv,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return Y(t);default:var c=e,u=o;e=c,r=u;continue e}}}),fe=qe(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Zr={$:-2},La=qe(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,s=t.d,b=t.e;return F(fe,0,r,n,F(fe,1,f,m,s,b),F(fe,1,o,l,c,u))}else return F(fe,e,o,l,F(fe,0,r,n,t,c),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,d=t.d;d.a;var w=d.b,_=d.c,S=d.d,C=d.e,b=t.e;return F(fe,0,f,m,F(fe,1,w,_,S,C),F(fe,1,r,n,b,i))}else return F(fe,e,r,n,t,i)}),No=T(function(e,r,n){if(n.$===-2)return F(fe,0,e,r,Zr,Zr);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=a(vv,e,i);switch(u){case 0:return F(La,t,i,o,h(No,e,r,l),c);case 1:return F(fe,t,i,r,l,c);default:return F(La,t,i,o,l,h(No,e,r,c))}}),_a=T(function(e,r,n){var t=h(No,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return F(fe,1,i,o,l,c)}else{var u=t;return u}}),J0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},fv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,f=e.e;f.a;var m=f.b,s=f.c,b=f.d;b.a;var d=b.b,w=b.c,_=b.d,S=b.e,C=f.e;return F(fe,0,d,w,F(fe,1,n,t,F(fe,0,o,l,c,u),_),F(fe,1,m,s,S,C))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,u=y.e,M=e.e;M.a;var m=M.b,s=M.c,b=M.d,C=M.e;return F(fe,1,n,t,F(fe,0,o,l,c,u),F(fe,0,m,s,b,C))}else return e},eu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,f=c.c,m=c.d,s=c.e,b=i.e,d=e.e;d.a;var w=d.b,_=d.c,S=d.d,C=d.e;return F(fe,0,o,l,F(fe,1,u,f,m,s),F(fe,1,n,t,b,F(fe,0,w,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,M=y.d,b=y.e,G=e.e;G.a;var w=G.b,_=G.c,S=G.d,C=G.e;return F(fe,1,n,t,F(fe,0,o,l,M,b),F(fe,0,w,_,S,C))}else return e},q0=ki(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,f=o.d,m=o.e;return F(fe,n,c,u,f,F(fe,0,t,i,m,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var s=l.d;return s.a,eu(r)}else break e;else return l.a,l.d,eu(r);else break e;return r}}),Zt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(fe,r,n,t,Zt(i),c);var u=fv(e);if(u.$===-1){var f=u.a,m=u.b,s=u.c,b=u.d,d=u.e;return F(La,f,m,s,Zt(b),d)}else return Zr}else return F(fe,r,n,t,Zt(i),c)}else return Zr},Qa=v(function(e,r){if(r.$===-2)return Zr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(he(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(fe,n,t,i,a(Qa,e,o),l);var u=fv(r);if(u.$===-1){var f=u.a,m=u.b,s=u.c,b=u.d,d=u.e;return F(La,f,m,s,a(Qa,e,b),d)}else return Zr}else return F(fe,n,t,i,a(Qa,e,o),l);else return a(Y0,e,sl(q0,e,r,n,t,i,o,l))}),Y0=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(_e(e,t)){var c=J0(l);if(c.$===-1){var u=c.b,f=c.c;return F(La,n,u,f,o,Zt(l))}else return Zr}else return F(La,n,t,i,o,a(Qa,e,l))}else return Zr}),X0=v(function(e,r){var n=a(Qa,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return F(fe,1,t,i,o,l)}else{var c=n;return c}}),jt=T(function(e,r,n){var t=r(a(St,e,n));if(t.$)return a(X0,e,n);var i=t.a;return h(_a,e,i,n)}),Z0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(jt,r,je(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(av,L(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(jt,r,je(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(nv,L(o,l),h(U0,o,l,n))}));case 3:var r=e.a,n=e.b;return a(jt,r,je(function(t){return t.$===3?E0(n):t}));default:var r=e.a,n=e.b;return a(jt,r,je(function(t){return t.$===2?V0(n):t}))}},K0=function(e){return B0(Z0(e))},Q0=v(function(e,r){return a(ne,K0(e),r)}),eg=v(function(e,r){return Ve(r,{f9:a(Q0,e,r.f9)})}),rg=v(function(e,r){var n=r.a,t=r.b;return a(Pr,n,Ve(t,{s:a(di,eg(e),t.s)}))}),Oo=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),ng=T(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Pr,t,Ve(i,{s:a(Oo,a(e,o.a,r),o)}))}),ag=ee(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Ve(t,{bw:!t.bw});case 2:var i=n.a;return Ve(t,{R:h(z0,e,i,t.R)});case 3:var o=n.a;return Ve(t,{bp:o});case 4:var l=n.a;return Ve(t,{R:a(rg,l,t.R)});case 5:var c=n.a;return Ve(t,{R:h(ng,r,c,t.R)});default:var u=n.a;return Ve(t,{R:a(I0,u,t.R)})}}),tg=v(function(e,r){return a(Pr,Il,{s:L(e,r(e)),an:D,X:D})}),ig=ud,ru=ig(D),og=function(e){return{$:2,a:e}},pi=Hs,za=Os,lg=sd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return lr({b5:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(Z,"clock",We))},a(Z,"devicePixelRatio",We))},a(Z,"dt",We))},a(Z,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(s){return lr({fF:s,gb:m,dZ:f,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(Z,"alt",ze))},a(Z,"control",ze))},a(Z,"down",ze))},a(Z,"downs",pi(za)))},a(Z,"left",ze))},a(Z,"pressedKeys",pi(za)))},a(Z,"right",ze))},a(Z,"shift",ze))},a(Z,"up",ze))))},a(Z,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return lr({dZ:f,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(Z,"down",ze))},a(Z,"isDown",ze))},a(Z,"move",ze))},a(Z,"rightDown",ze))},a(Z,"rightUp",ze))},a(Z,"up",ze))},a(Z,"x",We))},a(Z,"y",We))))},a(Z,"screen",a(Q,function(r){return a(Q,function(n){return lr({gG:n,im:r})},a(Z,"height",We))},a(Z,"width",We))))},a(Z,"wheel",a(Q,function(e){return a(Q,function(r){return lr({gf:r,gg:e})},a(Z,"deltaX",We))},a(Z,"deltaY",We))))),cg=function(e){return e.dH,lg(og)},ug=function(e){return{$:5,a:e}},$g={$:0},gi=v(function(e,r){return e}),vg=function(e){var r=e.b.s;return r.b},fg=function(e){return{$:1,a:e}},mg=fg,mv=function(e){return{$:8,a:e}},xe=mv,ct=function(e){return{$:0,a:e}},Ct=T(function(e,r,n){return e(r(n))}),sg=a(Ct,ct,gi),hn=sg,Ae=function(e){return{$:1,a:e}},rn=Ae,sv=v(function(e,r){return{$:9,a:e,b:r}}),Jn={$:0},dv=v(function(e,r){return r.$===3?Jn:a(sv,e,r)}),Ho=function(e){return a(dv,4,e)},p={fu:"a",cI:"atv",fw:"ab",fx:"cx",fy:"cy",fz:"acb",fA:"accx",fB:"accy",fC:"acr",dR:"al",dS:"ar",fD:"at",cJ:"ah",cK:"av",fH:"s",fN:"bh",fO:"b",fS:"w7",fU:"bd",fV:"bdt",b1:"bn",fW:"bs",b4:"cpe",f4:"cp",f6:"cpx",f7:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bt:"cl",cc:"cr",ga:"ct",gd:"cptr",ge:"ctxt",gw:"fcs",d3:"focus-within",gx:"fs",gB:"g",cU:"hbh",cV:"hc",d7:"he",cW:"hf",d8:"hfp",gJ:"hv",gM:"ic",gO:"fr",ci:"lbl",gS:"iml",gT:"imlf",gU:"imlp",gV:"implw",gW:"it",g$:"i",eo:"lnk",be:"nb",eP:"notxt",he:"ol",hf:"or",aU:"oq",hk:"oh",eT:"pg",eU:"p",hl:"ppe",hy:"ui",af:"r",hB:"sb",hC:"sbx",hD:"sby",hE:"sbt",hJ:"e",hK:"cap",hM:"sev",hS:"sk",Y:"t",hZ:"tc",h_:"w8",h$:"w2",h0:"w9",h1:"tj",cE:"tja",h2:"tl",h3:"w3",h4:"w5",h5:"w4",h6:"tr",h7:"w6",h8:"w1",h9:"tun",ff:"ts",a$:"clr",ig:"u",dI:"wc",fq:"we",dJ:"wf",fr:"wfp",dK:"wrp"},Bl=f$,kr=v(function(e,r){return a(_l,e,Bl(r))}),zr=kr("className"),br=function(e){return Ae(zr(e))},pv=v(function(e,r){return{$:2,a:e,b:r}}),dg=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},yr=2,pg={$:0},Qn=pg,gg={$:0},hg=p.fH+(" "+p.aw),bg=p.fH+(" "+p.gB),_g=p.fH+(" "+p.eT),wg=p.fH+(" "+p.eU),yg=p.fH+(" "+p.af),xg=p.fH+(" "+p.hJ),Sg=function(e){switch(e){case 0:return yg;case 1:return hg;case 2:return xg;case 3:return bg;case 4:return wg;default:return _g}},nu=function(e){return{$:1,a:e}},Bn={$:0},Go=function(e){return{$:1,a:e}},au=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return X(n,e);case 2:var t=r.a;return X(e,t);default:var n=r.a,t=r.b;return X(n,X(e,t))}}),tu=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return X(a(ne,function(o){return L(e,o)},t),r);case 2:var i=n.a;return X(r,a(ne,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return X(a(ne,function(o){return L(e,o)},t),X(r,a(ne,function(o){return L(e,o)},i)))}}),Rt=4,Cg=function(e){return{$:0,a:e}},Lg=function(e){return{$:1,a:e}},ye=function(e){return e>31?Lg(1<<e-32):Cg(1<<e)},gv=ye(41),hv=ye(40),bv=ye(42),_v=ye(43),Pa=mn("div"),El=Zr,wv=El,Gr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Gr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Gr(o))}},Be=ds,Ee=function(e){return k(Be(e*255))},Vl=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Ee(n)+("-"+(Ee(t)+("-"+Ee(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,s=f.b,b=f.c,d=e.c,w=d.a,_=d.b,S=d.c,C=e.d;return Y("tfrm-"+(Ee(l)+("-"+(Ee(c)+("-"+(Ee(u)+("-"+(Ee(m)+("-"+(Ee(s)+("-"+(Ee(b)+("-"+(Ee(w)+("-"+(Ee(_)+("-"+(Ee(S)+("-"+Ee(C))))))))))))))))))))}},ut=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(ce,"-",a(ne,Gr,i.hz))+("-cols-"+(a(ce,"-",a(ne,Gr,i.ak))+("-space-x-"+(Gr(i.hN.a)+("-space-y-"+Gr(i.hN.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.f8)+("-"+(k(o.im)+("-"+k(o.gG)))))));case 11:var l=e.a,c=e.b,u=function(){switch(l){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ce," ",a(ne,function(m){var s=ut(m);if(s==="")return"";var b=s;return b+("-"+u)},c));default:var f=e.a;return a(De,"",Vl(f))}},zg=v(function(e,r){var n=r;return h(_a,e,0,n)}),Pg=v(function(e,r){var n=a(St,e,r);return!n.$}),Mg=v(function(e,r){var n=r;return a(Pg,e,n)}),yv=v(function(e,r){var n=r.a,t=r.b,i=ut(e);return a(Mg,i,n)?r:L(a(zg,i,n),a(P,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),et=v(function(e,r){return{$:0,a:e,b:r}}),x=function(e){return"."+e},Tg=T(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(P,i,n)}),un=v(function(e,r){return h(er,Tg(e),D,r)}),pa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Be(r*255))+(","+k(Be(n*255))+(","+k(Be(t*255))+(","+(ve(i)+")")))))},Wo=function(e){return a(ce," ",a(un,Er,$([e.ec?Y("inset"):J,Y(ve(e.eQ.a)+"px"),Y(ve(e.eQ.b)+"px"),Y(ve(e.a2)+"px"),Y(ve(e.bi)+"px"),Y(pa(e.b7))])))},xv=function(e){return $([a(et,x(p.d3)+":focus-within",a(un,Er,$([a(je,function(r){return a(ue,"border-color",pa(r))},e.fT),a(je,function(r){return a(ue,"background-color",pa(r))},e.fL),a(je,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b7:r.b7,ec:!1,eQ:a(Oo,Ua,a(di,Ua,r.eQ)),bi:r.bi}))},e.hF),Y(a(ue,"outline","none"))]))),a(et,x(p.fH)+":focus .focusable, "+(x(p.fH)+".focusable:focus, "+(".ui-slide-bar:focus + "+(x(p.fH)+" .focusable-thumb"))),a(un,Er,$([a(je,function(r){return a(ue,"border-color",pa(r))},e.fT),a(je,function(r){return a(ue,"background-color",pa(r))},e.fL),a(je,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b7:r.b7,ec:!1,eQ:a(Oo,Ua,a(di,Ua,r.eQ)),bi:r.bi}))},e.hF),Y(a(ue,"outline","none"))])))])},Hr=function(e){return mn(h$(e))},Sv=v(function(e,r){return a(_l,Sd(e),b$(r))}),oo=v(function(e,r){return{$:2,a:e,b:r}}),jl=function(e){return{$:6,a:e}},U=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),kg=v(function(e,r){return{$:3,a:e,b:r}}),Cv=$([0,1,2,3,4,5]),Dg=v(function(e,r){return r.b?h(er,P,r,e):e}),mr=function(e){return h(er,Dg,D,e)},Ia=v(function(e,r){return mr(a(ne,e,r))}),Fg=function(e){switch(e){case 0:return x(p.ga);case 1:return x(p.ca);case 2:return x(p.cc);case 3:return x(p.bt);case 4:return x(p.cb);default:return x(p.ax)}},hi=function(e){switch(e){case 0:return x(p.fD);case 1:return x(p.fw);case 2:return x(p.dS);case 3:return x(p.dR);case 4:return x(p.fx);default:return x(p.fy)}},Ja=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,Fg(n),i),a(U,x(p.fH),$([a(A,hi(n),o)]))])};return jl(a(Ia,r,Cv))},iu=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,x(p.cU),$([a(g,"z-index","0"),a(U,x(p.fN),$([a(g,"z-index","-1")]))])),a(A,x(p.hE),$([a(U,x(p.Y),$([a(A,x(p.cW),$([a(g,"flex-grow","0")])),a(A,x(p.dJ),$([a(g,"align-self","auto !important")]))]))])),a(U,x(p.cV),$([a(g,"height","auto")])),a(U,x(p.cW),$([a(g,"flex-grow","100000")])),a(U,x(p.dJ),$([a(g,"width","100%")])),a(U,x(p.fr),$([a(g,"width","100%")])),a(U,x(p.dI),$([a(g,"align-self","flex-start")])),Ja(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(U,x(p.fH),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Ag=function(e){var r=function(n){return $([a(U,x(p.fH),$([a(A,hi(n),e(n))]))])};return jl(a(Ia,r,Cv))},Ig=function(){return $([0,1,2,3,4,5])}(),Bg=$([a(pr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(pr,X(x(p.fH),X(x(p.hJ),x(p.gM))),$([a(g,"display","block"),a(A,x(p.cW),$([a(U,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,x(p.dJ),$([a(U,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(pr,x(p.fH)+":focus",$([a(g,"outline","none")])),a(pr,x(p.hy),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,X(x(p.fH),x(p.cW)),$([a(g,"height","100%"),a(U,x(p.cW),$([a(g,"height","100%")]))])),a(U,x(p.gO),$([a(A,x(p.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(pr,x(p.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,x(p.hJ),iu),jl(function(e){return a(ne,e,Ig)}(function(e){switch(e){case 0:return a(A,x(p.fu),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(U,x(p.cW),$([a(g,"height","auto")])),a(U,x(p.dJ),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,x(p.fO),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")])),a(U,x(p.cW),$([a(g,"height","auto")]))]));case 2:return a(A,x(p.hf),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,x(p.he),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,x(p.gO),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,x(p.fN),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(pr,x(p.fH),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,x(p.dK),$([a(g,"flex-wrap","wrap")])),a(A,x(p.eP),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,x(p.gd),$([a(g,"cursor","pointer")])),a(A,x(p.ge),$([a(g,"cursor","text")])),a(A,x(p.hl),$([a(g,"pointer-events","none !important")])),a(A,x(p.b4),$([a(g,"pointer-events","auto !important")])),a(A,x(p.a$),$([a(g,"opacity","0")])),a(A,x(p.aU),$([a(g,"opacity","1")])),a(A,x(X(p.gJ,p.a$))+":hover",$([a(g,"opacity","0")])),a(A,x(X(p.gJ,p.aU))+":hover",$([a(g,"opacity","1")])),a(A,x(X(p.gw,p.a$))+":focus",$([a(g,"opacity","0")])),a(A,x(X(p.gw,p.aU))+":focus",$([a(g,"opacity","1")])),a(A,x(X(p.cI,p.a$))+":active",$([a(g,"opacity","0")])),a(A,x(X(p.cI,p.aU))+":active",$([a(g,"opacity","1")])),a(A,x(p.ff),$([a(g,"transition",a(ce,", ",a(ne,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,x(p.hB),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,x(p.hC),$([a(g,"overflow-x","auto"),a(A,x(p.af),$([a(g,"flex-shrink","1")]))])),a(A,x(p.hD),$([a(g,"overflow-y","auto"),a(A,x(p.aw),$([a(g,"flex-shrink","1")])),a(A,x(p.hJ),$([a(g,"flex-shrink","1")]))])),a(A,x(p.f4),$([a(g,"overflow","hidden")])),a(A,x(p.f6),$([a(g,"overflow-x","hidden")])),a(A,x(p.f7),$([a(g,"overflow-y","hidden")])),a(A,x(p.dI),$([a(g,"width","auto")])),a(A,x(p.b1),$([a(g,"border-width","0")])),a(A,x(p.fU),$([a(g,"border-style","dashed")])),a(A,x(p.fV),$([a(g,"border-style","dotted")])),a(A,x(p.fW),$([a(g,"border-style","solid")])),a(A,x(p.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,x(p.gW),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,x(p.hJ),iu),a(A,x(p.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(U,x(p.fH),$([a(g,"flex-basis","0%"),a(A,x(p.fq),$([a(g,"flex-basis","auto")])),a(A,x(p.eo),$([a(g,"flex-basis","auto")]))])),a(U,x(p.cW),$([a(g,"align-self","stretch !important")])),a(U,x(p.d8),$([a(g,"align-self","stretch !important")])),a(U,x(p.dJ),$([a(g,"flex-grow","100000")])),a(U,x(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(U,"u:first-of-type."+p.fC,$([a(g,"flex-grow","1")])),a(U,"s:first-of-type."+p.fA,$([a(g,"flex-grow","1"),a(U,x(p.fx),$([a(g,"margin-left","auto !important")]))])),a(U,"s:last-of-type."+p.fA,$([a(g,"flex-grow","1"),a(U,x(p.fx),$([a(g,"margin-right","auto !important")]))])),a(U,"s:only-of-type."+p.fA,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(p.fA+" ~ u"),$([a(g,"flex-grow","0")])),a(U,"u:first-of-type."+(p.fC+(" ~ s."+p.fA)),$([a(g,"flex-grow","0")])),Ja(function(e){switch(e){case 0:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return L($([a(g,"justify-content","flex-end")]),D);case 3:return L($([a(g,"justify-content","flex-start")]),D);case 4:return L($([a(g,"justify-content","center")]),D);default:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,x(p.hM),$([a(g,"justify-content","space-between")])),a(A,x(p.ci),$([a(g,"align-items","baseline")]))])),a(A,x(p.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(U,x(p.fH),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,x(p.d7),$([a(g,"flex-basis","auto")]))])),a(U,x(p.cW),$([a(g,"flex-grow","100000")])),a(U,x(p.dJ),$([a(g,"width","100%")])),a(U,x(p.fr),$([a(g,"width","100%")])),a(U,x(p.dI),$([a(g,"align-self","flex-start")])),a(U,"u:first-of-type."+p.fz,$([a(g,"flex-grow","1")])),a(U,"s:first-of-type."+p.fB,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(U,"s:last-of-type."+p.fB,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(U,"s:only-of-type."+p.fB,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(p.fB+" ~ u"),$([a(g,"flex-grow","0")])),a(U,"u:first-of-type."+(p.fz+(" ~ s."+p.fB)),$([a(g,"flex-grow","0")])),Ja(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(g,"justify-content","center")]),D)}}),a(U,x(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,x(p.hM),$([a(g,"justify-content","space-between")]))])),a(A,x(p.gB),$([a(g,"display","-ms-grid"),a(U,".gp",$([a(U,x(p.fH),$([a(g,"width","100%")]))])),a(kg,L("display","grid"),$([L("display","grid")])),Ag(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,x(p.eT),$([a(g,"display","block"),a(U,x(p.fH+":first-child"),$([a(g,"margin","0 !important")])),a(U,x(p.fH+(hi(3)+(":first-child + ."+p.fH))),$([a(g,"margin","0 !important")])),a(U,x(p.fH+(hi(2)+(":first-child + ."+p.fH))),$([a(g,"margin","0 !important")])),Ja(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return L(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,x(p.gS),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,x(p.gV),$([a(A,x(p.hJ),$([a(g,"flex-basis","auto")]))])),a(A,x(p.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(U,x(p.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,x(p.eU),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,x(p.cU),$([a(g,"z-index","0"),a(U,x(p.fN),$([a(g,"z-index","-1")]))])),a(oo,x(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(oo,x(p.eU),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(oo,x(p.hJ),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,x(p.fq),$([a(g,"display","inline-block")])),a(A,x(p.gO),$([a(g,"display","flex")])),a(A,x(p.fN),$([a(g,"display","flex")])),a(A,x(p.fu),$([a(g,"display","flex")])),a(A,x(p.fO),$([a(g,"display","flex")])),a(A,x(p.hf),$([a(g,"display","flex")])),a(A,x(p.he),$([a(g,"display","flex")])),a(U,x(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(U,x(p.af),$([a(g,"display","inline")])),a(U,x(p.aw),$([a(g,"display","inline-flex")])),a(U,x(p.gB),$([a(g,"display","inline-grid")])),Ja(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right")]));case 3:return L(D,$([a(g,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,x(p.h8),$([a(g,"font-weight","100")])),a(A,x(p.h$),$([a(g,"font-weight","200")])),a(A,x(p.h3),$([a(g,"font-weight","300")])),a(A,x(p.h5),$([a(g,"font-weight","400")])),a(A,x(p.h4),$([a(g,"font-weight","500")])),a(A,x(p.h7),$([a(g,"font-weight","600")])),a(A,x(p.fS),$([a(g,"font-weight","700")])),a(A,x(p.h_),$([a(g,"font-weight","800")])),a(A,x(p.h0),$([a(g,"font-weight","900")])),a(A,x(p.g$),$([a(g,"font-style","italic")])),a(A,x(p.hS),$([a(g,"text-decoration","line-through")])),a(A,x(p.ig),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,X(x(p.ig),x(p.hS)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,x(p.h9),$([a(g,"font-style","normal")])),a(A,x(p.h1),$([a(g,"text-align","justify")])),a(A,x(p.cE),$([a(g,"text-align","justify-all")])),a(A,x(p.hZ),$([a(g,"text-align","center")])),a(A,x(p.h6),$([a(g,"text-align","right")])),a(A,x(p.h2),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),sn=function(e){return $([a(pr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(pr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},Eg=mr($([a(ne,function(e){return a(pr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(qr,0,6)),a(ne,function(e){return a(pr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(qr,8,32)),a(ne,function(e){return a(pr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(qr,0,24)),$([a(pr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(pr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),sn("zero"),sn("onum"),sn("liga"),sn("dlig"),sn("ordn"),sn("tnum"),sn("afrc"),sn("frac")])),Vg=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fH+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fH+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),jg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Rg=`
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
`,Ng=`
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
`,Og=`
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
`,Hg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(x(p.fH)+(x(p.af)+(" > "+(x(p.fH)+(" { flex-basis: auto !important; } "+(x(p.fH)+(x(p.af)+(" > "+(x(p.fH)+(x(p.b9)+(" { flex-basis: auto !important; }}"+(jg+(Rg+(Og+(Ng+Vg))))))))))))))),wa=function(e){return a(ce,"",e)},va=v(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),fa=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return Ve(o,{aE:a(P,L(l,c),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,s=i.b;return Ve(o,{G:a(P,{b6:`
}`,G:D,aE:s,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,d=i.b;return Ve(o,{G:a(P,a(fa,a(va,n.ag+(" + "+b),""),d),o.G)});case 1:var w=i.a,_=i.b;return Ve(o,{G:a(P,a(fa,a(va,n.ag+(" > "+w),""),_),o.G)});case 2:var w=i.a,_=i.b;return Ve(o,{G:a(P,a(fa,a(va,n.ag+(" "+w),""),_),o.G)});case 4:var S=i.a,C=i.b;return Ve(o,{G:a(P,a(fa,a(va,X(n.ag,S),""),C),o.G)});default:var y=i.a;return Ve(o,{G:a(P,a(fa,a(va,n.ag,""),y),o.G)})}});return h(er,t,n,r)}),Gg=function(e){var r=function(i){return wa(a(ne,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},t=function(i){var o=i;return X(n(o),wa(a(ne,t,o.G)))};return wa(a(ne,t,h(er,v(function(i,o){var l=i.a,c=i.b;return a(P,a(fa,a(va,l,""),c),o)}),D,e)))},ou=X(Hg,Gg(X(Bg,Eg))),wn=ko,Lv=function(e){var r=e.eN;switch(r){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([wn(ou)]))]));case 1:return wn("");default:return h(Hr,"elm-ui-static-rules",$([a(Sv,"rules",Bl(ou))]),D)}},Wg=v(function(e,r){return h(Re,Qs(e),Xs(),r)}),Ug=function(e){return h(Re,v(function(r,n){var t=r.a,i=r.b;return h(Ks,t,i,n)}),Zs(),e)},Jg=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.ha;return'"'+(r+'"')}},qg=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},Yg=function(e){if(e.$===5){var r=e.a;return a(xt,qg,r.fk)}else return!1},ya=v(function(e,r){return he(e,r)<0?e:r}),Na=T(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Fe=ee(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Re,Na(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gJ;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Re,Na(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Re,Na(!1),"",t)+`
}`))])}case 0:var l=h(Re,Na(!1),"",t);return $([n+("-fs:focus {"+(l+`
}`)),"."+(p.fH+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(x(p.fH)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(h(Re,Na(!1),"",t)+`
}`))])}}),Xg=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},Zg=function(e){if(e.$===5){var r=e.a;return Y(a(ce,", ",a(ne,Xg,r.fk)))}else return J},Kg=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,s=f.b,b=f.c,d=e.c,w=d.a,_=d.b,S=d.c,C=e.d,y="translate3d("+(ve(l)+("px, "+(ve(c)+("px, "+(ve(u)+"px)"))))),M="scale3d("+(ve(m)+(", "+(ve(s)+(", "+(ve(b)+")"))))),G="rotate3d("+(ve(w)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(y+(" "+(M+(" "+G))))}},Rl=T(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return z(Fe,e,n,t,i);case 13:var u=r.a,b=r.b;return z(Fe,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,l=a(Qe,0,a(ya,1,1-o));return z(Fe,e,n,"."+u,$([a(ue,"opacity",ve(l))]));case 2:var c=r.a;return z(Fe,e,n,".font-size-"+k(c),$([a(ue,"font-size",k(c)+"px")]));case 1:var u=r.a,f=r.b,m=a(ce,", ",a(un,Zg,f)),s=$([a(ue,"font-family",a(ce,", ",a(ne,Jg,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(xt,Yg,f)?"small-caps":"normal")]);return z(Fe,e,n,"."+u,s);case 3:var se=r.a,b=r.b,Ki=r.c;return z(Fe,e,n,"."+se,$([a(ue,b,Ki)]));case 4:var se=r.a,b=r.b,d=r.c;return z(Fe,e,n,"."+se,$([a(ue,b,pa(d))]));case 5:var q=r.a,w=r.b,_=r.c,S=k(_)+"px",C=k(w)+"px",y="."+p.af,M="."+(p.dK+y),pe="."+p.dS,G="."+p.eU,K="."+p.eT,Se="."+p.dR,ae=ve(_/2)+"px",te=ve(w/2)+"px",ie="."+p.aw,se="."+q,re="."+p.fH;return mr($([z(Fe,e,n,se+(y+(" > "+(re+(" + "+re)))),$([a(ue,"margin-left",C)])),z(Fe,e,n,se+(M+(" > "+re)),$([a(ue,"margin",ae+(" "+te))])),z(Fe,e,n,se+(ie+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),z(Fe,e,n,se+(K+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),z(Fe,e,n,se+(K+(" > "+Se)),$([a(ue,"margin-right",C)])),z(Fe,e,n,se+(K+(" > "+pe)),$([a(ue,"margin-left",C)])),z(Fe,e,n,X(se,G),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),z(Fe,e,n,"textarea"+(re+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),z(Fe,e,n,se+(G+(" > "+Se)),$([a(ue,"margin-right",C)])),z(Fe,e,n,se+(G+(" > "+pe)),$([a(ue,"margin-left",C)])),z(Fe,e,n,se+(G+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),z(Fe,e,n,se+(G+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return z(Fe,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return z(Fe,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=T(function(Ye,Ra,Kr){e:for(;;)switch(Kr.$){case 0:var Um=Kr.a;return k(Um)+"px";case 1:var Dr=L(Ye,Ra);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var kn=Dr.b.a;return"minmax(max-content, "+(k(kn)+"px)")}else if(Dr.b.$===1){var Dn=Dr.a.a;return Dr.b,"minmax("+(k(Dn)+"px, max-content)")}else{var Dn=Dr.a.a,kn=Dr.b.a;return"minmax("+(k(Dn)+("px, "+(k(kn)+"px)")))}case 2:var Fc=Kr.a,Fr=L(Ye,Ra);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(Fc)+"fr";Fr.a;var kn=Fr.b.a;return"minmax(max-content, "+(k(kn)+"px)")}else if(Fr.b.$===1){var Dn=Fr.a.a;return Fr.b,"minmax("+(k(Dn)+("px, "+(k(Fc)+"frfr)")))}else{var Dn=Fr.a.a,kn=Fr.b.a;return"minmax("+(k(Dn)+("px, "+(k(kn)+"px)")))}case 3:var Qi=Kr.a,eo=Kr.b,ro=Y(Qi),no=Ra,ao=eo;Ye=ro,Ra=no,Kr=ao;continue e;default:var Qi=Kr.a,eo=Kr.b,ro=Ye,no=Y(Qi),ao=eo;Ye=ro,Ra=no,Kr=ao;continue e}}),I=function(Ye){return h(Te,J,J,Ye)};I(me.hN.a);var B=I(me.hN.b),E=function(Ye){return"grid-template-rows: "+(Ye+";")}(a(ce," ",a(ne,I,me.hz))),V=function(Ye){return"-ms-grid-rows: "+(Ye+";")}(a(ce,B,a(ne,I,me.ak))),j=function(Ye){return"-ms-grid-columns: "+(Ye+";")}(a(ce,B,a(ne,I,me.ak))),N="grid-row-gap:"+(I(me.hN.b)+";"),O="grid-column-gap:"+(I(me.hN.a)+";"),H=function(Ye){return"grid-template-columns: "+(Ye+";")}(a(ce," ",a(ne,I,me.ak))),se=".grid-rows-"+(a(ce,"-",a(ne,Gr,me.hz))+("-cols-"+(a(ce,"-",a(ne,Gr,me.ak))+("-space-x-"+(Gr(me.hN.a)+("-space-y-"+Gr(me.hN.b))))))),Yi=se+("{"+(H+(E+(O+(N+"}"))))),Xi="@supports (display:grid) {"+(Yi+"}"),Zi=se+("{"+(j+(V+"}")));return $([Zi,Xi]);case 9:var Ne=r.a,It=a(ce," ",$(["-ms-grid-row: "+(k(Ne.af)+";"),"-ms-grid-row-span: "+(k(Ne.gG)+";"),"-ms-grid-column: "+(k(Ne.f8)+";"),"-ms-grid-column-span: "+(k(Ne.im)+";")])),qi=a(ce," ",$(["grid-row: "+(k(Ne.af)+(" / "+(k(Ne.af+Ne.gG)+";"))),"grid-column: "+(k(Ne.f8)+(" / "+(k(Ne.f8+Ne.im)+";")))])),se=".grid-pos-"+(k(Ne.af)+("-"+(k(Ne.f8)+("-"+(k(Ne.im)+("-"+k(Ne.gG))))))),Yi=se+("{"+(qi+"}")),Xi="@supports (display:grid) {"+(Yi+"}"),Zi=se+("{"+(It+"}"));return $([Zi,Xi]);case 11:var se=r.a,Hm=r.b,Gm=function(Ye){return h(Rl,e,Ye,Y(se))};return a(Ia,Gm,Hm);default:var Dc=r.a,Ki=Kg(Dc),se=Vl(Dc),Bt=L(se,Ki);if(!Bt.a.$&&!Bt.b.$){var q=Bt.a.a,Wm=Bt.b.a;return z(Fe,e,n,"."+q,$([a(ue,"transform",Wm)]))}else return D}}),Qg=v(function(e,r){return Ug(a(ne,function(n){var t=h(Rl,e,n,J);return L(ut(n),a(Wg,Bl,t))},r))}),bi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ce,"",a(ne,n,r))+"}"))}),lu=T(function(e,r,n){var t=n.a,i=n.b;return $([a(bi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(bi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),eh=T(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(ce," ",X(h(lu,o,p.hK,i),h(lu,o,p.gx,t)))}),rh=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(ce," ",$([a(bi,"."+(n+("."+(p.hK+(", "+("."+(n+(" ."+p.hK))))))),$([L("line-height","1")])),a(bi,"."+(n+("."+(p.hK+("> ."+(p.Y+(", ."+(n+(" ."+(p.hK+(" > ."+p.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),cu=T(function(e,r,n){return{gG:r/e,bi:e,fl:n}}),zv=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(P,n,t):t}),D,r)}),nh=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Re,Qe,r,n))}else return J},uu=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Re,ya,r,n))}else return J},$u=function(e){var r=$([e.f_,e.fM,e.gi,e.g5]),n=a(De,e.gi,uu(r)),t=a(De,e.fM,uu(a(zv,function(f){return!_e(f,n)},r))),i=a(De,e.f_,nh(r)),o=1/(i-t),l=1-i,c=1/(i-n),u=1-i;return{f_:h(cu,o,i-t,l),d5:h(cu,c,i-n,u)}},vu=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ve(e.gG)),L("vertical-align",ve(e.fl)+"em"),L("font-size",ve(e.bi)+"em")]))},ah=function(e){return h(Re,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fv;if(i.$===1)return n;var o=i.a;return Y(L(vu(function(l){return l.d5}($u(o))),vu(function(l){return l.f_}($u(o)))))}else return n;else return n}),J,e)},th=function(e){var r=function(o){if(o.$===4){var l=o.b;return Y("@import url('"+(l+"');"))}else return J},n=function(o){o.a;var l=o.b,c=a(ce,`
`,a(un,r,l));return c},t=a(ne,q$,e),i=function(o){var l=o.a,c=o.b,u=ah(c);if(u.$===1)return a(ce,"",a(ne,rh(l),t));var f=u.a;return a(ce,"",a(ne,a(eh,l,f),t))};return X(a(ce,`
`,a(ne,n,e)),a(ce,`
`,a(ne,i,e)))},ih=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(L(r,n))}else return J},fu=v(function(e,r){var n=v(function(l,c){return{cA:X(c.cA,h(Rl,e,l,J)),bT:function(){var u=ih(l);if(u.$===1)return c.bT;var f=u.a;return a(P,f,c.bT)}()}}),t=h(Re,n,{cA:D,bT:D},r),i=t.bT,o=t.cA;return X(th(i),wa(o))}),Pv=v(function(e,r){var n=e.eN;switch(n){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([wn(a(fu,e,r))]))]));case 1:return h(Hr,"div",D,$([h(Hr,"style",D,$([wn(a(fu,e,r))]))]));default:return h(Hr,"elm-ui-rules",$([a(Sv,"rules",a(Qg,e,r))]),D)}}),mu=ee(function(e,r,n,t){var i=a(Pv,r,h(Re,yv,L(wv,xv(r.gw)),n).b);return e?a(P,L("static-stylesheet",Lv(r)),a(P,L("dynamic-stylesheet",i),t)):a(P,L("dynamic-stylesheet",i),t)}),su=ee(function(e,r,n,t){var i=a(Pv,r,h(Re,yv,L(wv,xv(r.gw)),n).b);return e?a(P,Lv(r),a(P,i,t)):a(P,i,t)}),Uo=ye(45),$t=ye(37),Mv=function(e){return hd(h$(e))},oh=mn("p"),or=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),du=mn("s"),pu=mn("u"),Jo=ye(44),vt=ye(39),Nt=xr(function(e,r,n,t,i,o){var l=v(function(u,f){if(t.$===1){var m=t.a;return h(Mv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,d=i.b;return z(mu,!1,b,d,m);default:var b=i.a,d=i.b;return z(mu,!0,b,d,m)}}())}else{var s=t.a;return a(function(){switch(u){case"div":return Pa;case"p":return oh;default:return Hr(u)}}(),f,function(){switch(i.$){case 0:return s;case 2:var b=i.a,d=i.b;return z(su,!1,b,d,s);default:var b=i.a,d=i.b;return z(su,!0,b,d,s)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var u=r.a;return a(l,u,n);default:var u=r.a,f=r.b;return h(Hr,u,n,$([a(l,f,$([zr(p.fH+(" "+p.hJ))]))]))}}();switch(o){case 0:return a(or,vt,e)&&!a(or,Jo,e)?c:a(or,hv,e)?a(pu,$([zr(a(ce," ",$([p.fH,p.hJ,p.b9,p.ax,p.fC])))]),$([c])):a(or,bv,e)?a(du,$([zr(a(ce," ",$([p.fH,p.hJ,p.b9,p.ax,p.fA])))]),$([c])):c;case 1:return a(or,$t,e)&&!a(or,Uo,e)?c:a(or,_v,e)?a(du,$([zr(a(ce," ",$([p.fH,p.hJ,p.b9,p.fB])))]),$([c])):a(or,gv,e)?a(pu,$([zr(a(ce," ",$([p.fH,p.hJ,p.b9,p.fz])))]),$([c])):c;default:return c}}),pn=function(e){return!e.b},Nl=wn,lh=p.fH+(" "+(p.Y+(" "+(p.dI+(" "+p.cV))))),ft=function(e){return a(Pa,$([zr(lh)]),$([Nl(e)]))},ch=p.fH+(" "+(p.Y+(" "+(p.dJ+(" "+p.cW))))),gu=function(e){return a(Pa,$([zr(ch)]),$([Nl(e)]))},uh=T(function(e,r,n){var t=v(function(w,_){var S=w.a,C=w.b,y=_.a,M=_.b;switch(C.$){case 0:var G=C.a;return _e(e,Rt),L(a(P,L(S,G(e)),y),M);case 1:var K=C.a;return _e(e,Rt),L(a(P,L(S,a(K.gK,Bn,e)),y),pn(M)?K.hT:X(K.hT,M));case 2:var ae=C.a;return L(a(P,L(S,_e(e,yr)?gu(ae):ft(ae)),y),M);default:return L(y,M)}}),i=v(function(w,_){var S=_.a,C=_.b;switch(w.$){case 0:var y=w.a;return _e(e,Rt),L(a(P,y(e),S),C);case 1:var M=w.a;return _e(e,Rt),L(a(P,a(M.gK,Bn,e),S),pn(C)?M.hT:X(M.hT,C));case 2:var G=w.a;return L(a(P,_e(e,yr)?gu(G):ft(G),S),C);default:return L(S,C)}});if(r.$===1){var o=r.a,l=h(er,t,L(D,D),o),c=l.a,u=l.b,f=pn(u)?n.hT:X(n.hT,u);if(f.b){var m=f;return Go({gK:z(Nt,n.aR,n.aT,n.aJ,nu(h(tu,"nearby-element-pls",c,n.aM))),hT:m})}else return ct(F(Nt,n.aR,n.aT,n.aJ,nu(h(tu,"nearby-element-pls",c,n.aM)),Bn))}else{var s=r.a,b=h(er,i,L(D,D),s),d=b.a,u=b.b,f=pn(u)?n.hT:X(n.hT,u);if(f.b){var m=f;return Go({gK:z(Nt,n.aR,n.aT,n.aJ,rr(a(au,d,n.aM))),hT:m})}else return ct(F(Nt,n.aR,n.aT,n.aJ,rr(a(au,d,n.aM)),Bn))}}),ur=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),$h=function(e){return{$:10,a:e}},_i=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(_i,n,o|t)}else{var i=e.a;return a(_i,i|n,t)}}),hu=function(e){return{$:1,a:e}},Ot=v(function(e,r){return{$:3,a:e,b:r}}),bu=function(e){return{$:2,a:e}},vh=v(function(e,r){return a(Pa,$([zr(function(){switch(e){case 0:return a(ce," ",$([p.be,p.hJ,p.fu]));case 1:return a(ce," ",$([p.be,p.hJ,p.fO]));case 2:return a(ce," ",$([p.be,p.hJ,p.hf]));case 3:return a(ce," ",$([p.be,p.hJ,p.he]));case 4:return a(ce," ",$([p.be,p.hJ,p.gO]));default:return a(ce," ",$([p.be,p.hJ,p.fN]))}}())]),$([function(){switch(r.$){case 3:return wn("");case 2:var n=r.a;return ft(n);case 0:var t=r.a;return t(yr);default:var i=r.a;return a(i.gK,Bn,yr)}}()]))}),fh=T(function(e,r,n){var t=a(vh,e,r);switch(n.$){case 0:return e===5?hu($([t])):bu($([t]));case 1:var i=n.a;return e===5?hu(a(P,t,i)):a(Ot,i,$([t]));case 2:var o=n.a;return e===5?a(Ot,$([t]),o):bu(a(P,t,o));default:var i=n.a,o=n.b;return e===5?a(Ot,a(P,t,i),o):a(Ot,i,a(P,t,o))}}),_u=v(function(e,r){return{$:2,a:e,b:r}}),gn=function(e){return{$:1,a:e}},Fn=v(function(e,r){switch(r.$){case 0:return gn(e);case 1:var n=r.a;return a(_u,n,e);default:var t=r.a,i=r.b;return a(_u,t,i)}}),mh=function(e){switch(e){case 0:return p.cJ+(" "+p.dR);case 2:return p.cJ+(" "+p.dS);default:return p.cJ+(" "+p.fx)}},sh=function(e){switch(e){case 0:return p.cK+(" "+p.fD);case 2:return p.cK+(" "+p.fw);default:return p.cK+(" "+p.fy)}},qa=v(function(e,r){return a(Vr,xd(e),b$(r))}),Rr=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),dn=function(e){return{$:1,a:e}},dh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return dn(R(u,0,0));case 1:var f=r.a;return dn(R(0,f,0));case 2:var m=r.a;return dn(R(0,0,m));case 3:var n=r.a;return dn(n);case 4:var n=r.a,d=r.b;return z(Rr,R(0,0,0),R(1,1,1),n,d);default:var n=r.a;return z(Rr,R(0,0,0),n,R(0,0,1),0)}case 1:var c=e.a,u=c.a,f=c.b,m=c.c;switch(r.$){case 0:var t=r.a;return dn(R(t,f,m));case 1:var i=r.a;return dn(R(u,i,m));case 2:var o=r.a;return dn(R(u,f,o));case 3:var n=r.a;return dn(n);case 4:var n=r.a,d=r.b;return z(Rr,c,R(1,1,1),n,d);default:var l=r.a;return z(Rr,c,l,R(0,0,1),0)}default:var c=e.a,u=c.a,f=c.b,m=c.c,s=e.b,b=e.c,d=e.d;switch(r.$){case 0:var t=r.a;return z(Rr,R(t,f,m),s,b,d);case 1:var i=r.a;return z(Rr,R(u,i,m),s,b,d);case 2:var o=r.a;return z(Rr,R(u,f,o),s,b,d);case 3:var w=r.a;return z(Rr,w,s,b,d);case 4:var _=r.a,S=r.b;return z(Rr,c,s,_,S);default:var C=r.a;return z(Rr,c,C,b,d)}}}),la=ye(7),Tv=ye(36),wu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(_i,n|i,t|o)}),nn=a(_i,0,0),qo=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return R(nn,p.d7+(" "+t),$([h(ur,t,"height",n+"px")]));case 1:return R(a(ge,Tv,nn),p.cV,D);case 2:var i=e.a;return i===1?R(a(ge,$t,nn),p.cW,D):R(a(ge,$t,nn),p.d8+(" height-fill-"+k(i)),$([h(ur,p.fH+("."+(p.aw+(" > "+x("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h(ur,f,"min-height",k(o)+"px !important"),l=qo(u),b=l.a,d=l.b,w=l.c;return R(a(ge,Uo,b),f+(" "+d),a(P,m,w));default:var c=e.a,u=e.b,f="max-height-"+k(c),m=h(ur,f,"max-height",k(c)+"px"),s=qo(u),b=s.a,d=s.b,w=s.c;return R(a(ge,Uo,b),f+(" "+d),a(P,m,w))}},kv=ye(38),Yo=function(e){switch(e.$){case 0:var r=e.a;return R(nn,p.fq+(" width-px-"+k(r)),$([h(ur,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return R(a(ge,kv,nn),p.dI,D);case 2:var n=e.a;return n===1?R(a(ge,vt,nn),p.dJ,D):R(a(ge,vt,nn),p.fr+(" width-fill-"+k(n)),$([h(ur,p.fH+("."+(p.af+(" > "+x("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,l=e.b,c="min-width-"+k(t),u=h(ur,c,"min-width",k(t)+"px"),i=Yo(l),m=i.a,s=i.b,b=i.c;return R(a(ge,Jo,m),c+(" "+s),a(P,u,b));default:var o=e.a,l=e.b,c="max-width-"+k(o),u=h(ur,c,"max-width",k(o)+"px"),f=Yo(l),m=f.a,s=f.b,b=f.c;return R(a(ge,Jo,m),c+(" "+s),a(P,u,b))}},Ei=ye(27),ph=v(function(e,r){if(_e(e,Ei))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return _e(i,l)&&_e(i,o)&&_e(i,c)&&i>=0&&i<=24;default:return!1}}),ca=ye(6),yu=ye(30),xu=ye(29),gh=Pe(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var m=c.a,s=c.b;switch(m.$){case 0:var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 3:var _=m.a,b=m.b;if(a(or,_,n)){var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else{var I=b+(" "+e),B=r,E=a(ge,_,n),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}case 1:var d=m.a,I=e,B=r,E=n,V=t,j=i,N=a(P,d,o),O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 4:var _=m.a,w=m.b;if(a(or,_,n)){var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else if(a(ph,_,w)){var I=ut(w)+(" "+e),B=r,E=a(ge,_,n),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else{var I=ut(w)+(" "+e),B=r,E=a(ge,_,n),V=t,j=a(P,w,i),N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}case 10:var _=m.a,S=m.b,I=e,B=r,E=a(ge,_,n),V=a(dh,t,S),j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 7:var C=m.a;if(a(or,ca,n)){var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else switch(C.$){case 0:var y=C.a,I=p.fq+(" width-px-"+k(y))+(" "+e),B=r,E=a(ge,ca,n),V=t,j=a(P,h(ur,"width-px-"+k(y),"width",k(y)+"px"),i),N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 1:var I=e+(" "+p.dI),B=r,E=a(ge,kv,a(ge,ca,n)),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 2:var M=C.a;if(M===1){var I=e+(" "+p.dJ),B=r,E=a(ge,vt,a(ge,ca,n)),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else{var I=e+(" "+(p.fr+(" width-fill-"+k(M)))),B=r,E=a(ge,vt,a(ge,ca,n)),V=t,j=a(P,h(ur,p.fH+("."+(p.af+(" > "+x("width-fill-"+k(M))))),"flex-grow",k(M*1e5)),i),N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}default:var G=Yo(C),K=G.a,ae=G.b,Te=G.c,I=e+(" "+ae),B=r,E=a(wu,K,a(ge,ca,n)),V=t,j=X(Te,i),N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}case 8:var te=m.a;if(a(or,la,n)){var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else switch(te.$){case 0:var y=te.a,ie=k(y)+"px",re="height-px-"+ie,I=p.d7+(" "+(re+(" "+e))),B=r,E=a(ge,la,n),V=t,j=a(P,h(ur,re,"height ",ie),i),N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 1:var I=p.cV+(" "+e),B=r,E=a(ge,Tv,a(ge,la,n)),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 2:var M=te.a;if(M===1){var I=p.cW+(" "+e),B=r,E=a(ge,$t,a(ge,la,n)),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else{var I=e+(" "+(p.d8+(" height-fill-"+k(M)))),B=r,E=a(ge,$t,a(ge,la,n)),V=t,j=a(P,h(ur,p.fH+("."+(p.aw+(" > "+x("height-fill-"+k(M))))),"flex-grow",k(M*1e5)),i),N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}default:var q=qo(te),K=q.a,ae=q.b,Te=q.c,I=e+(" "+ae),B=r,E=a(wu,K,a(ge,la,n)),V=t,j=X(Te,i),N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}case 2:var de=m.a;switch(de.$){case 0:var I=e,B=a(Fn,"main",r),E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 1:var I=e,B=a(Fn,"nav",r),E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 2:var I=e,B=a(Fn,"footer",r),E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 3:var I=e,B=a(Fn,"aside",r),E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 4:var pe=de.a;if(pe<=1){var I=e,B=a(Fn,"h1",r),E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else if(pe<7){var I=e,B=a(Fn,"h"+k(pe),r),E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else{var I=e,B=a(Fn,"h6",r),E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}case 9:var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 8:var I=e,B=r,E=n,V=t,j=i,N=a(P,a(qa,"role","button"),o),O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 5:var Me=de.a,I=e,B=r,E=n,V=t,j=i,N=a(P,a(qa,"aria-label",Me),o),O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 6:var I=e,B=r,E=n,V=t,j=i,N=a(P,a(qa,"aria-live","polite"),o),O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;default:var I=e,B=r,E=n,V=t,j=i,N=a(P,a(qa,"aria-live","assertive"),o),O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var qi=me.a;return X(i,qi.hT)}}(),I=e,B=r,E=n,V=t,j=Te,N=o,O=h(fh,Se,me,l),H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e;case 6:var Ne=m.a;if(a(or,yu,n)){var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else{var I=mh(Ne)+(" "+e),B=r,E=function(se){switch(Ne){case 1:return a(ge,bv,se);case 2:return a(ge,hv,se);default:return se}}(a(ge,yu,n)),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}default:var It=m.a;if(a(or,xu,n)){var I=e,B=r,E=n,V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}else{var I=sh(It)+(" "+e),B=r,E=function(se){switch(It){case 1:return a(ge,_v,se);case 2:return a(ge,gv,se);default:return se}}(a(ge,xu,n)),V=t,j=i,N=o,O=l,H=s;e=I,r=B,n=E,t=V,i=j,o=N,l=O,c=H;continue e}}}else{var u=Vl(t);if(u.$===1)return{aJ:a(P,zr(e),o),aM:l,aR:n,aT:r,hT:i};var f=u.a;return{aJ:a(P,zr(e+(" "+f)),o),aM:l,aR:n,aT:r,hT:a(P,$h(t),i)}}}),hh={$:0},bh=hh,cr=ee(function(e,r,n,t){return h(uh,e,t,ht(gh,Sg(e),r,nn,bh,D,D,gg,fr(n)))}),an=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),_h={fL:J,fT:J,hF:Y({a2:0,b7:z(an,155/255,203/255,1,1),eQ:L(0,0),bi:3})},wh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gJ;return l.$===1?Ve(i,{gJ:Y(o)}):i;case 1:var c=t.a,u=i.gw;return u.$===1?Ve(i,{gw:Y(c)}):i;default:var f=t.a,m=i.eN;return m.$===1?Ve(i,{eN:Y(f)}):i}}),n=function(t){return{gw:function(){var i=t.gw;if(i.$===1)return _h;var o=i.a;return o}(),gJ:function(){var i=t.gJ;if(i.$===1)return 1;var o=i.a;return o}(),eN:function(){var i=t.eN;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gw:J,gJ:J,eN:J},e))},yh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(yr);case 1:var n=r.a.hT,t=r.a.gK;return a(t,e(n),yr);case 2:var i=r.a;return ft(i);default:return ft("")}}),xh=T(function(e,r,n){var t=wh(e),i=function(){var o=t.eN;return o===1?pv(t):dg(t)}();return a(yh,i,z(cr,yr,Qn,r,rr($([n]))))}),mt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Dv=v(function(e,r){return{$:1,a:e,b:r}}),Fv=function(e){return{$:2,a:e}},Sh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),lo=function(e){return{$:3,a:e}},Av=ye(8),Iv=ye(14),Bv=ye(5),Ev=ye(4),Ma=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ee(r)+("-"+(Ee(n)+("-"+(Ee(t)+("-"+Ee(i))))))},Kt=Ps,co=zs,Vv=v(function(e,r){return X(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ce,"-",co(Kt(n)));case 4:var n=e.a;return e.b,a(ce,"-",co(Kt(n)));default:var n=e.a.ha;return a(ce,"-",co(Kt(n)))}}())}),Ch=function(){var e=$([lo("Open Sans"),lo("Helvetica"),lo("Verdana"),Sh]);return $([a(Ce,Av,h(mt,"bg-"+Ma(z(an,1,1,1,0)),"background-color",z(an,1,1,1,0))),a(Ce,Iv,h(mt,"fc-"+Ma(z(an,0,0,0,1)),"color",z(an,0,0,0,1))),a(Ce,Ev,Fv(20)),a(Ce,Bv,a(Dv,h(Re,Vv,"font-",e),e))])}(),Lh=T(function(e,r,n){var t=e.hj;return h(xh,t,a(P,br(a(ce," ",$([p.hy,p.fH,p.hJ]))),X(Ch,r)),n)}),jv={$:3},Rv=function(e){return{$:2,a:e}},Xo=_d,Nv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Go({gK:v(function(o,l){return a(Xo,e,a(n.gK,o,l))}),hT:n.hT});case 0:var t=r.a;return ct(a(Ct,Xo(e),t));case 2:var i=r.a;return Rv(i);default:return jv}}),Ol=Nv,zh=Xo,Ph=function(e){return{$:0,a:e}},ke=Ph,Mh=yd,hr=Mh,Ov={$:1},Vi=function(e){return{$:5,a:e}},Hv=Vi(0),jr=T(function(e,r,n){return z(an,e/255,r/255,n/255,1)}),Gv=h(jr,0,0,0),Th=Vr("d"),kh=Vr("fill"),Dh=Vr("height"),Wv=p$("http://www.w3.org/2000/svg"),Fh=Wv("path"),Ah=Wv("svg"),Ih=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},Bh=function(e){var r=Ih(e);return"rgba("+(k(Be(r.hs*255))+(","+k(Be(r.gz*255))+(","+k(Be(r.fP*255))+(","+ve(r.fE)+")"))))},Eh=Vr("viewBox"),Vh=Vr("width"),ga=T(function(e,r,n){return a(Ah,$([Eh("0 0 100 100"),Vh(k(e)),Dh(k(e))]),$([a(Fh,$([Th(n),kh(Bh(r))]),D)]))}),jh={$:1},sr=jh,Uv=function(e){return{$:7,a:e}},le=Uv,Le=v(function(e,r){return z(cr,yr,Qn,a(P,le(sr),a(P,xe(sr),e)),rr($([r])))}),Jv=function(e){return{$:2,a:e}},we=Jv(1),Vn={gl:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gy:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gF:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hm:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hn:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hr:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hL:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",$8:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ii:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",ft:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},xa={cZ:260,bE:54},on=function(e){return a(Ce,Av,h(mt,"bg-"+Ma(e),"background-color",e))},Rh=ye(28),yn=function(e){return a(Ce,Rh,h(mt,"bc-"+Ma(e),"border-color",e))},Qt=1,Mr=v(function(e,r){return z(cr,Qt,Qn,a(P,br(p.ga+(" "+p.bt)),a(P,xe(sr),a(P,le(sr),e))),rr(r))}),Nh=h(jr,83,83,83),qv=ee(function(e,r,n,t){return z(an,e/255,r/255,n/255,t)}),ji=z(qv,56,56,56,.25),Je=jv,st=qe(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),dt=ye(2),jn=function(e){var r=e;return a(Ce,dt,F(st,"p-"+k(e),r,r,r,r))},Yv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Xv=ye(3),Zv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),xn=function(e){return a(Ce,Xv,h(Yv,a(Zv,e,e),e,e))},Oh=z(qv,0,0,0,0),Hh=function(e){return{$:4,a:e}},Zo=0,Mn=v(function(e,r){return z(cr,Zo,Qn,a(P,br(p.bt+(" "+p.ax)),a(P,le(sr),a(P,xe(sr),e))),rr(r))}),Gh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gK(a(pv,{gw:{fL:J,fT:J,hF:J},gJ:1,eN:0},n.hT));case 2:var t=e.a;return gi(wn(t));default:return gi(wn(""))}},Wh=v(function(e,r){return Gh(e(r))}),Uh=wd,Jh=v(function(e,r){return ct(h(Uh,Wh,e,r))}),Sn=function(e){return a(Ce,Iv,h(mt,"fc-"+Ma(e),"color",e))},Hl=h(jr,195,195,195),Tn=v(function(e,r){return{$:3,a:e,b:r}}),Kv=ye(13),qh=a(Tn,Kv,p.h5),Yh=ye(20),Qv=a(Tn,Yh,p.hD),ea=function(e){return a(Ce,Ev,Fv(e))},Gl=a(Tn,Kv,p.fS),Ko=v(function(e,r){if(r.$===-2)return Zr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return F(fe,n,t,a(e,t,i),a(Ko,e,o),a(Ko,e,l))}),ef=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,dt,F(st,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,dt,F(st,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Cn=function(e){return Rv(e)},Xh=function(e){return h(zl,T(function(r,n,t){return a(P,n,t)}),D,e)},Zh=v(function(e,r){return{$:3,a:e,b:r}}),Kh=v(function(e,r){return{$:2,a:e,b:r}}),Qh=v(function(e,r){return{$:0,a:e,b:r}}),e3=v(function(e,r){return{$:1,a:e,b:r}}),Ba=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),r3=z(Ba,0/255,0/255,0/255,1),Ri=function(e){return{$:6,a:e}},n3=Ri(0),Ni=function(e){return{$:2,a:e}},a3={$:6},rf=Ni(a3),nf=T(function(e,r,n){if(r.$===1)return r.a,z(cr,Qt,gn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,l=z(cr,yr,Qn,i,rr($([o])));switch(t){case 2:return z(cr,Qt,gn("label"),a(P,br(p.ci),e),rr($([l,n])));case 3:return z(cr,Qt,gn("label"),a(P,br(p.ci),e),rr($([n,l])));case 0:return z(cr,Zo,gn("label"),a(P,br(p.ci),e),rr($([n,l])));default:return z(cr,Zo,gn("label"),a(P,br(p.ci),e),rr($([l,n])))}}),Qo=qa,$n=Vi(1),af="Enter",t3=function(e){return{$:5,a:e}},tf=function(e){if(e.$===1){var r=e.a;return Ni(t3(r))}else return Jn},of=function(e){return e.$===1},i3=function(e){return{$:0,a:e}},Wl=g$,o3=v(function(e,r){return a(Wl,e,i3(r))}),lf=function(e){return a(o3,"click",lr(e))},l3=js,c3=function(e){return{$:2,a:e}},u3=v(function(e,r){return a(Wl,e,c3(r))}),cf=function(e){var r=function(t){var i=e(t);if(i.$===1)return l3("No key matched");var o=i.a;return lr(o)},n=a(Q,r,a(Z,"key",za));return Ae(a(u3,"keydown",a(fi,function(t){return L(t,!0)},n)))},$3=ye(21),Rn=a(Tn,$3,p.gd),uf=" ",$f=function(e){return a(Vr,"tabIndex",k(e))},v3=a(Ct,Ae,$f),f3=v(function(e,r){var n=r.eh,t=r.gL,i=r.f3,o=r.bI,l=X($([of(n)?Jn:xn(6),Ae(lf(o(!i))),rf,cf(function(c){return _e(c,af)||_e(c,uf)?Y(o(!i)):J}),v3(0),Rn,n3,le(we)]),e);return h(nf,a(P,Ae(a(Qo,"role","checkbox")),a(P,Ae(a(Qo,"aria-checked",i?"true":"false")),a(P,tf(n),l))),n,z(cr,yr,Qn,$([$n,xe(we),le(sr)]),rr($([t(i)]))))}),m3=T(function(e,r,n){return X(a(lt,e-En(n),Bi(r)),n)}),wi=os,vf=function(e){var r=function(n){return n<10?k(n):Bi(ov(87+n))};return e<16?r(e):X(vf(e/16|0),r(a(wi,16,e)))},s3=a(Xe,vf,a(m3,2,"0")),Ul=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},d3=function(e){var r=Ul(e),n=r.hs,t=r.gz,i=r.fP;return a(ce,"",a(P,"#",a(ne,a(Xe,Be,s3),$([n*255,t*255,i*255]))))},Jl=ye(12),ff=a(Tn,Jl,p.hZ),el=Ri(1),qn=ls,p3=function(e){return e*qn/180},g3=function(e){return{$:1,a:e}},ql=v(function(e,r){return{$:10,a:e,b:r}}),h3=ye(26),b3=function(e){return a(ql,h3,g3(-e))},ha=T(function(e,r,n){return z(an,e,r,n,1)}),_3=an,w3=v(function(e,r){return{$:4,a:e,b:r}}),y3=ye(24),x3=function(e){return a(ql,y3,a(w3,R(0,0,1),e))},S3=ye(17),Nn=function(e){return a(Ce,S3,h(ur,"br-"+k(e),"border-radius",k(e)+"px"))},C3=function(e){return wa($([e.ec?"box-inset":"box-",Ee(e.eQ.a)+"px",Ee(e.eQ.b)+"px",Ee(e.a2)+"px",Ee(e.bi)+"px",Ma(e.b7)]))},L3=ye(19),z3=function(e){var r={a2:e.a2,b7:e.b7,ec:!1,eQ:e.eQ,bi:e.bi};return a(Ce,L3,h(ur,C3(r),"box-shadow",Wo(r)))},Su=v(function(e,r){return{$:12,a:e,b:r}}),Cu=ye(0),P3=function(e){return e?a(Ce,Cu,a(Su,"transparent",1)):a(Ce,Cu,a(Su,"visible",0))},uo=h(ha,1,1,1),Yl=qe(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Oi=function(e){return a(Ce,Ei,F(Yl,"b-"+k(e),e,e,e,e))},M3=v(function(e,r){return a(Ce,Ei,F(Yl,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Lt=function(e){var r=e.b2,n=e.cF,t=e.g1,i=e.hv;return _e(n,r)&&_e(t,i)?_e(n,i)?Oi(n):a(M3,t,n):a(Ce,Ei,F(Yl,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},T3=function(e){return a(Le,$([br("focusable"),le(ke(14)),xe(ke(14)),Sn(uo),$n,ea(9),ff,Nn(3),yn(e?h(ha,59/255,153/255,252/255):h(ha,211/255,211/255,211/255)),z3({a2:1,b7:e?z(_3,238/255,238/255,238/255,0):h(ha,238/255,238/255,238/255),eQ:L(0,0),bi:1}),on(e?h(ha,59/255,153/255,252/255):uo),Oi(e?0:1),Ho(a(Le,$([yn(uo),xe(ke(6)),le(ke(9)),x3(p3(-45)),el,$n,b3(1),P3(!e),Lt({b2:2,g1:2,hv:0,cF:0})]),Je))]),Je)},k3=kr("htmlFor"),rl=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),yi=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return e(n)}}),mf=ee(function(e,r,n,t){return{gQ:r,g6:e,hd:n,hU:t}}),D3=Yd,F3=Is,A3=v(function(e,r){if(r.$)return tr(e);var n=r.a;return Ge(n)}),I3=qd,B3=function(e){return a(I3,{f$:!1,g9:!1},e)},Hi=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return J},E3=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return Ge(e(n))}}),V3=function(e){return{$:2,a:e}},j3=function(e){return{$:0,a:e}},R3=function(e){return{$:1,a:e}},$o=v(function(e,r){return Yr(r)-Yr(e)}),vo=T(function(e,r,n){var t=Yr(n);return he(Yr(e),t)<1&&he(t,Yr(r))<1}),N3=v(function(e,r){var n=function(i){return he(i,e)<0?Ge(i):tr(R3(r))},t=h(vo,"0","9",r)?Ge(a($o,"0",r)):h(vo,"a","z",r)?Ge(10+a($o,"a",r)):h(vo,"A","Z",r)?Ge(10+a($o,"A",r)):tr(j3(r));return a(yi,n,t)}),sf=v(function(e,r){var n=Aa(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(yi,function(l){return a(yi,function(c){return Ge(l+c*e)},a(sf,e,o))},a(N3,e,i))}),O3=v(function(e,r){return 2<=e&&e<=36?a(sf,e,Ro(r)):tr(V3(e))}),H3=O3(16),G3=T(function(e,r,n){return z(Ba,e,r,n,1)}),W3=ee(function(e,r,n,t){return z(Ba,e,r,n,t)}),Ea=is,U3=v(function(e,r){var n=a(Ea,10,e);return Be(r*n)/n}),J3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=iv(n);if(t.b&&!t.b.b){var i=t.a;return F3($([i,i]))}else return n};return a(Xe,Kt,a(Xe,function(n){return a(je,function(t){return h(D3,1,t,n)},B3(e))},a(Xe,rl(Hi),a(Xe,je(function(n){return n.hU}),a(Xe,je(un(Er)),a(Xe,A3("Parsing hex regex failed"),yi(function(n){var t=a(ne,a(Xe,r,a(Xe,H3,E3(Ua))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,u=c.a.a,f=c.b,m=f.a.a;return Ge(z(W3,i/255,l/255,u/255,a(U3,2,m/255)))}else break e;else{var i=t.a.a,s=t.b,l=s.a.a,b=s.b,u=b.a.a;return Ge(h(G3,i/255,l/255,u/255))}else break e;return tr("Parsing ints from hex failed")})))))))}(),q3=kr("id"),Y3=mn("input"),X3=mn("label"),df=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Z3=df(0),K3=kr("name"),Q3=function(e){return L(e,!0)},eb=function(e){return{$:1,a:e}},rb=v(function(e,r){return a(Wl,e,eb(r))}),nb=v(function(e,r){return h(er,Z,r,e)}),ab=a(nb,$(["target","value"]),za),pf=function(e){return a(rb,"input",a(fi,Q3,a(fi,e,ab)))},tb=a(Tn,Jl,p.h2),gf=a(Tn,Jl,p.h6),Xl=function(e){return a(dv,5,e)},Zl=function(e){return a(Ce,Bv,a(Dv,h(Re,Vv,"ff-",e),e))},ib=h(jr,195,195,195),hf=h(jr,69,69,69),ob=df(2),lb={$:2},Kl=lb,cb=ye(32),ub=ye(31),Lu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},$b=v(function(e,r){return a(De,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return Y(L(i,l))}else return J;else{var i=t.a;return Y(i)}}),J,e))}),zu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},vb=ye(33),fb=kr("max"),mb=kr("min"),sb=v(function(e,r){return a(Ce,Xv,h(Yv,a(Zv,e,r),e,r))}),db=function(e){return a(kr,"step",e)},bf=kr("type"),_f=kr("value"),Ta=Jv,pb=Ld,wf=v(function(e,r){switch(r.$){case 0:return Jn;case 2:var n=r.a;return Ni(n);case 6:var t=r.a;return Ri(t);case 5:var i=r.a;return Vi(i);case 7:var t=r.a;return Uv(t);case 8:var t=r.a;return mv(t);case 3:var t=r.a,i=r.b;return a(Tn,t,i);case 4:var o=r.a,l=r.b;return a(Ce,o,l);case 9:var c=r.a,u=r.b;return a(sv,c,a(Nv,e,u));case 1:var f=r.a;return Ae(a(pb,e,f));default:var m=r.a,s=r.b;return a(ql,m,s)}}),gb=T(function(e,r,n){return a(Mn,$([le(we),xe(a(De,we,n)),$n]),$([a(Le,$([le(Ta(Be(e*1e4)))]),Je),a(Le,a(P,$n,a(ne,wf(wt),r)),Je),a(Le,$([le(Ta(Be(be(1-e)*1e4)))]),Je)]))}),hb=T(function(e,r,n){return a(Mr,$([xe(we),le(a(De,we,n)),el]),$([a(Le,$([xe(Ta(Be(be(1-e)*1e4)))]),Je),a(Le,a(P,el,a(ne,wf(wt),r)),Je),a(Le,$([xe(Ta(Be(e*1e4)))]),Je)]))}),yf=v(function(e,r){var n=zu(e),t=Lu(e),i=function(){var C=L(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var y=C.a.a.a,M=C.b.a.a;return he(M,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cG-r.cr)/(r.cq-r.cr),l=r.ia,c=l,u=Lu(c),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=zu(c),s=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(s+("-"+f)),d=$([a(ue,"width",s),a(ue,"height",f)]),w=a($b,e,L(5,5)),_=w.a,S=w.b;return h(nf,$([of(r.eh)?Jn:a(sb,_,S),rf,le(function(){if(n.$===1)return we;if(n.a.$){var C=n.a;return C}else return sr}()),xe(function(){if(t.$===1)return sr;if(t.a.$){var C=t.a;return C}else return sr}())]),r.eh,a(Mn,$([le(a(De,we,n)),xe(a(De,ke(20),t))]),$([z(cr,yr,gn("input"),$([tf(r.eh),a(Ce,cb,a(et,'input[type="range"].'+(b+"::-moz-range-thumb"),d)),a(Ce,vb,a(et,'input[type="range"].'+(b+"::-webkit-slider-thumb"),d)),a(Ce,ub,a(et,'input[type="range"].'+(b+"::-ms-thumb"),d)),Ae(zr(b+" ui-slide-bar focusable-parent")),Ae(pf(function(C){var y=tv(C);if(y.$===1)return r.bI(0);var M=y.a;return r.bI(M)})),Ae(bf("range")),Ae(db(function(){var C=r.cD;if(C.$===1)return"any";var y=C.a;return ve(y)}())),Ae(mb(ve(r.cr))),Ae(fb(ve(r.cq))),Ae(_f(ve(r.cG))),i?Ae(a(Qo,"orient","vertical")):Jn,le(i?a(De,ke(20),t):a(De,we,n)),xe(i?a(De,we,n):a(De,ke(20),t))]),rr(D)),a(Le,a(P,le(a(De,we,n)),a(P,xe(a(De,ke(20),t)),X(e,$([Xl(i?h(hb,o,a(P,br("focusable-thumb"),c),n):h(gb,o,a(P,br("focusable-thumb"),c),t))])))),Je)])))}),bb=h(ha,.5,.5,.5),xf=Er,Pu=function(e){var r=e.cY,n=e.cG,t=e.cr,i=e.cq,o=e.cD,l=e.bI;return a(Le,$([le(we)]),a(yf,$([xn(2),Xl(a(Le,$([le(we),xe(ke(16)),$n,on(hf),Nn(4)]),Je))]),{eh:a(ob,D,a(Mn,$([le(we)]),$([a(Le,$([tb]),Cn(r)),a(Le,$([le(we),gf,Zl($([Kl]))]),Cn(ve(n)))]))),cq:i,cr:t,bI:l,cD:Y(o),ia:xf($([le(ke(12)),xe(ke(12)),Nn(4),Oi(0),yn(bb),on(ib)])),cG:n}))},_b=v(function(e,r){if(r.$)return e;var n=r.a;return n}),wb=v(function(e,r){switch(r.$){case 3:var l=r.a;return a(f3,D,{f3:l,gL:T3,eh:a(Z3,D,Cn(e)),bI:Zh(e)});case 0:var n=r.a,i=n.a,o=n.b,l=r.b;return Pu({cY:e,cq:o,cr:i,bI:Qh(e),cD:.001*(o-i),cG:l});case 1:var t=r.a,i=t.a,o=t.b,l=r.b;return Pu({cY:e,cq:o,cr:i,bI:a(Xe,Be,e3(e)),cD:1,cG:l});default:var l=r.a;return a(Le,$([le(we)]),hn(a(Pa,D,$([a(Pa,$([a(hr,"margin-bottom","6px")]),$([a(X3,$([k3(e)]),$([Nl(e)]))])),a(Y3,$([bf("color"),a(hr,"width","100%"),a(hr,"height","26px"),a(hr,"padding","0px"),q3(e),K3(e),pf(function(c){return a(Kh,e,a(_b,r3,J3(c)))}),_f(d3(l))]),D)]))))}}),nl=h(jr,255,255,255),yb=function(e){return a(Mr,$([le(we),xn(8),a(ef,0,14),Lt({b2:1,g1:0,hv:0,cF:0}),yn(ji)]),$([a(Le,$([ea(16),Gl,Sn(nl)]),Cn(e.ha)),a(Mr,$([le(we),xn(6)]),Xh(a(Ko,wb,e.aN)))]))},xb=function(e){return a(Mr,$([le(we),xe(we),Sn(Hl),ea(12),qh,Qv]),a(ne,yb,e))},Sb=Jh(xb),Cb=function(e){return a(Mr,$([le(we),xe(we)]),$([a(Mn,$([xn(14),le(we)]),D),a(Ol,Hh,Sb(Kn(e).f9))]))},Lb=function(e){return{$:6,a:e}},zb=ee(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Pb=function(e){var r=e.cF,n=e.hv,t=e.b2,i=e.g1;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,dt,F(st,"p-"+k(r),o,o,o,o))}else return a(Ce,dt,F(st,z(zb,r,n,t,i),r,n,t,i))},Mb=function(e){return{$:0,a:e}},Tb=function(e){return{$:1,a:e}},kb=Tb,Db=function(e){var r=e.b.X;return Un(r)},xi=h(jr,255,60,0),Fb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Un(r)+1+Un(n)},Ab=function(e){var r=L(Db(e),Fb(e)-1),n=r.a,t=r.b;return a(Le,$([le(we),$n]),a(yf,$([Xl(a(Mn,$([le(we),xe(ke(4)),$n,on(hf),Nn(2)]),$([a(Le,$([le(Ta(n)),xe(we),on(xi),Nn(2)]),Je),a(Le,$([le(Ta(t-n))]),Je)])))]),{eh:kb(""),cq:t,cr:0,bI:a(Xe,Be,Mb),cD:Y(1),ia:xf($([le(ke(12)),xe(ke(12)),Nn(6),on(xi)])),cG:n}))},Ib=Ri(2),ei=h(jr,220,220,220),Bb=function(e){var r=e.a,n=function(){return r.$?$([Sn(ei)]):$([Sn(xi)])}();return a(Le,X(n,$([ea(14),Ib,gf,Zl($([Kl]))])),Cn(a($v,3,Kn(e).b5)))},Eb=function(e){e.a;var r=e.b.X;return a(je,function(n){return Be(60/(Kn(e).b5-n))},a(je,a(Xe,q$,function(n){return n.b5}),Hi(a(ev,59,r))))},Vb=function(e){var r=Eb(e);if(r.$===1)return Je;var n=r.a;return a(Le,$([ea(14),Sn(Hl),Zl($([Kl]))]),Cn(k(n)+" FPS"))},Mu={$:1},jb={$:3},Rb={$:2},Nb={$:8},Ob=f$,Hb=v(function(e,r){return a(_l,e,Ob(r))}),Gb=Hb("disabled"),Wb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Ub=function(e){return a(xt,Wb,e)?Jn:br("focusable")},Si=a(Ct,Ae,lf),Sf=v(function(e,r){var n=r.eR,t=r.eh;return z(cr,yr,Qn,a(P,le(sr),a(P,xe(sr),a(P,br(p.cb+(" "+(p.ax+(" "+(p.hE+(" "+p.eP)))))),a(P,Rn,a(P,Ub(e),a(P,Ni(Nb),a(P,Ae($f(0)),function(){if(n.$===1)return a(P,Ae(Gb(!0)),e);var i=n.a;return a(P,Si(i),a(P,cf(function(o){return _e(o,af)||_e(o,uf)?Y(i):J}),e))}()))))))),rr($([t])))}),Tu=v(function(e,r){return a(Sf,D,{eh:a(Le,$([le(ke(36)),jn(3),Sn(r),ff,ea(12),Gl,yn(r),Oi(1),Nn(4)]),Cn("REC")),eR:Y(e)})}),ku=T(function(e,r,n){return a(Sf,D,{eh:hn(h(ga,20,n,e)),eR:Y(r)})}),Jb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Mn,D,$([a(Le,$([le(ke(40))]),function(){switch(r.$){case 0:return a(Tu,Mu,xi);case 1:return a(Tu,Rb,ei);default:return Je}}()),a(Le,$([le(ke(28))]),function(){switch(r.$){case 0:return Je;case 1:return pn(n)?Je:h(ku,Vn.hn,jb,ei);default:return h(ku,Vn.hm,Mu,ei)}}())]))},qb=function(e){return a(Mr,$([le(we)]),$([Ab(e),a(Mn,$([le(we),xn(14),a(ef,0,6),$n]),$([Jb(e),Vb(e),Bb(e)]))]))},Yb=function(e){return a(Mr,$([le(we),xn(14),Pb({b2:20,g1:0,hv:0,cF:0}),Lt({b2:1,g1:0,hv:0,cF:0}),yn(ji)]),$([a(Le,$([ea(16),Gl,Sn(Hl)]),Cn("Time Travel")),a(Ol,Lb,qb(e))]))},Xb=v(function(e,r){return a(Mr,$([Kn(r).dw.im>600?on(Nh):on(Oh),Lt({b2:0,g1:0,hv:1,cF:0}),yn(ji),le(ke(xa.cZ)),xe(we)]),$([function(){return e?Je:a(Mr,$([le(we),xe(we),jn(14),xn(14)]),$([Yb(r),Cb(r)]))}()]))}),Zb=function(e){return{$:3,a:e}},Du=Vi(2),Kb=h(jr,232,78,50),Qb=h(jr,48,48,48),e1=function(e){return a(kr,"href",Cd(e))},r1=Vr("rel"),n1=kr("target"),Fu=v(function(e,r){var n=r.fj,t=r.eh;return z(cr,yr,gn("a"),a(P,Ae(e1(n)),a(P,Ae(r1("noopener noreferrer")),a(P,Ae(n1("_blank")),a(P,le(sr),a(P,xe(sr),a(P,br(p.cb+(" "+(p.ax+(" "+p.eo)))),e)))))),rr($([t])))}),Ya=kr("title"),a1=h(jr,31,161,242),t1=function(e){var r=T(function(o,l,c){var u=_e(l,e)?nl:Qb;return a(Le,$([rn(Ya(o)),Si(Zb(l)),Rn,jn(7)]),hn(h(ga,40,u,c)))}),n=a(Mr,$([Hv]),$([h(r,"Configurations",0,Vn.hL)])),t=a(Mr,D,$([a(Fu,$([rn(Ya("Twitter")),Du,Rn,jn(7)]),{eh:hn(h(ga,40,a1,Vn.$8)),fj:"https://twitter.com/AzizErkalSelman"}),a(Fu,$([rn(Ya("Source Code")),Du,Rn,jn(7)]),{eh:hn(h(ga,40,Kb,Vn.gy)),fj:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([le(ke(xa.bE)),jn(4),Si(Ov),Lt({b2:1,g1:0,hv:0,cF:0}),yn(ji),Rn,rn(Ya("Activate Distraction Free Mode"))]),hn(h(ga,46,nl,Vn.ft)));return a(Mr,$([le(ke(xa.bE)),xe(we),Qv,on(Gv)]),$([i,n,t]))},i1=function(e){var r=a(Le,$([le(ke(xa.bE)),Hv,jn(4),Si(Ov),Rn,rn(Ya("Deactivate Distraction Free Mode (A)"))]),hn(h(ga,46,Gv,Vn.ft)));return e.bw?r:a(Mn,$([le(ke(xa.bE+xa.cZ)),xe(we)]),$([t1(e.bp),a(Xb,e.bp,e.R)]))},o1=T(function(e,r,n){var t=vg(n.R),i=Kn(n.R);return h(Lh,{hj:$([mg({fL:J,fT:J,hF:J})])},$([le(ke(it(i.dw.im))),xe(ke(it(i.dw.gG))),rn(a(hr,"-webkit-font-smoothing","antialiased")),rn(a(hr,"pointer-events","none")),rn(a(hr,"touch-action","none")),rn(a(hr,"user-select","none")),Ho(a(Ol,ug,a(r,i,t))),Ho(i1(n))]),hn(a(zh,gi($g),a(e,i,t))))}),l1=xr(function(e,r,n,t,i,o){var l=v(function(u,f){return L(z(ag,r,o,u,f),ru)}),c=function(u){var f=a(X$,n,u.gX);return L({bp:0,bw:!0,R:a(tg,f,t),dH:0},ru)};return S0({gR:c,hV:cg,ih:l,ij:a(o1,e,i)})}),c1=ee(function(e,r,n,t){return ar(l1,e,r,n,t,v(function(i,o){return Je}),T(function(i,o,l){return l}))}),u1=function(e){return{}},$1=T(function(e,r,n){return{aN:n,gZ:r,ha:e}}),v1=function(e){return h(Re,v(function(r,n){var t=r.a,i=r.b;return h(_a,t,i,n)}),El,e)},f1=T(function(e,r,n){return h($1,e,r,v1(n))}),Au=f1,An=T(function(e,r,n){var t=r.a,i=r.b;return L(e,a(nv,L(t,i),n))}),m1=T(function(e,r,n){var t=r.a,i=r.b;return L(e,a(av,L(t,i),n))}),s1=$([h(Au,"Parameters",!0,$([h(m1,"number of blocks",L(10,60),25),h(An,"frequency",L(1,20),10),h(An,"minWidth",L(0,45),35),h(An,"maxWidth",L(10,50),37),h(An,"period",L(.5,10),5)])),h(Au,"Colors and light",!0,$([h(An,"lux",L(2,5),5),h(An,"intensity above",L(0,300),0),h(An,"intensity below",L(0,300),0)]))]),d1=v(function(e,r){return r}),Yn=function(e){return e},Xa=function(e){return Yn(qn*(e/180))},bn=ps,p1=v(function(e,r){var n=e,t=r,i=t.dO-n.dO,o=t.is-n.is,l=t.io-n.io,c=a(Qe,be(l),a(Qe,be(o),be(i)));if(c){var u=i/c,f=o/c,m=l/c,s=bn(m*m+f*f+u*u);return Y({io:m/s,is:f/s,dO:u/s})}else return J}),ri=function(e){return e},Ql=v(function(e,r){var n=e,t=r;return{io:t.is*n.dO-t.dO*n.is,is:t.dO*n.io-t.io*n.dO,dO:t.io*n.is-t.is*n.io}}),ni=function(e){var r=e,n=a(Qe,be(r.io),a(Qe,be(r.is),be(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=bn(o*o+i*i+t*t);return Y({io:o/l,is:i/l,dO:t/l})}else return J},Ci=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),g1=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dO*n.dO}),Cf=v(function(e,r){var n=e,t=r;return he(t,n)>0}),h1=v(function(e,r){var n=e,t=r;return he(t,n)<0}),b1=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),_1=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dO*n.dO;return{io:n.io*i,is:n.is*i,dO:n.dO*i}}),w1=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Wr=0,Lf={io:0,is:0,dO:0},y1=T(function(e,r,n){return a(rl,function(t){var i=a(b1,a(_1,t,r),r);return a(rl,function(o){var l=a(Ql,r,e),c=a(g1,n,l),u=a(Cf,Wr,c)?l:a(h1,Wr,c)?w1(l):Lf;return a(je,function(f){return R(t,o,f)},ni(u))},ni(i))},ni(e))}),x1=function(e){var r=e,n=be(r.dO),t=be(r.is),i=be(r.io);if(he(i,t)<1)if(he(i,n)<1){var o=bn(r.dO*r.dO+r.is*r.is);return{io:0,is:-r.dO/o,dO:r.is/o}}else{var o=bn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dO:0}}else if(he(t,n)<1){var o=bn(r.dO*r.dO+r.io*r.io);return{io:r.dO/o,is:0,dO:-r.io/o}}else{var o=bn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dO:0}}},ec=function(e){var r=x1(e),n=r,t=n,i=e,o=i,l={io:o.is*t.dO-o.dO*t.is,is:o.dO*t.io-o.io*t.dO,dO:o.io*t.is-o.is*t.io};return L(r,l)},ba=function(e){var r=e;return r},vn=function(e){return e},S1=v(function(e,r){var n=ec(e),t=n.a,i=n.b;return vn({df:r,dM:t,dN:i,dP:e})}),C1=function(e){var r=a(Ci,e.ba,e.d2),n=ba(e.fi),t=a(Ql,r,n),i=h(y1,r,n,t);if(i.$){var f=ni(r);if(f.$){var s=ec(e.fi),b=s.a,d=s.b;return vn({df:e.d2,dM:d,dN:e.fi,dP:b})}else{var m=f.a;return a(S1,m,e.d2)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return vn({df:e.d2,dM:u,dN:c,dP:l})}},zt={io:0,is:0,dO:0},L1=function(e){return{$:0,a:e}},wr=function(e){var r=e;return be(r)},ai=function(e){var r=e;return .5*r},z1=$s,P1=function(e){var r=e;return z1(r)},M1=function(e){var r=ai(wr(e.fm)),n=P1(r);return{dq:L1(n),dG:e.dG}},ln=function(e){return e},rc=ln({io:0,is:1,dO:0}),T1=function(e){var r=e.ba,n=e.d2,t=e.fi;return M1({fm:Xa(40),dG:C1({d2:ri(n),ba:ri(r),fi:a(De,rc,a(p1,zt,ri(t)))})})},Xn=cs,k1=v(function(e,r){return(r-J$(r/e)*e)/e}),D1=function(e){return 2*qn*e},al=ee(function(e,r,n,t){return e+(r-e)*(1+Xn(D1(a(k1,n,t))))/2}),F1=function(e){return T1({d2:{io:10,is:z(al,-20,20,20,e.b5),dO:145},ba:{io:0,is:0,dO:0},fi:{io:0,is:1,dO:0}})},nc=function(e){return e},zf=T(function(e,r,n){return he(n,e)<0?e:he(n,r)>0?r:n}),A1=function(e){var r=e;return r},I1=function(e){var r=h(zf,1667,25e3,A1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return nc({io:n,is:t})},B1=function(e){return e},E1=function(e){return{$:0,a:e}},V1=E1,j1={$:3},R1=j1,N1=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),O1=N1,H1=function(e){return{$:1,a:e}},G1=H1,W1=function(e){return a(Vr,"height",k(e))},U1=Mv,J1=function(e){return{$:2,a:e}},q1=J1,Y1=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Be(c*1e3)/1e3},l=function(c){return Be(c*1e4)/100};return wa($(["rgba(",ve(l(r)),"%,",ve(l(n)),"%,",ve(l(t)),"%,",ve(o(i)),")"]))},X1=v(function(e,r){switch(r.$){case 0:return a(yp,e,r);case 1:return a(xp,e,r);case 2:return a(Sp,e,r);case 3:return a(Cp,e,r);case 4:return a(Lp,e,r);default:return a(zp,e,r)}}),Z1=v(function(e,r){switch(r.$){case 0:return a(Kd,e,r);case 1:return a(Qd,e,r);case 2:return a(ep,e,r);case 3:return a(rp,e,r);case 4:return a(np,e,r);case 5:return a(ap,e,r);case 6:return a(tp,e,r);case 7:return a(ip,e,r);default:return op(e)}}),K1=T(function(e,r,n){return h(wp,e,r,n)}),Iu=function(e){var r=e;return r},Va=Vp,fo=z(Va,1,1,1,1),Nr=T(function(e,r,n){return a(ne,function(t){return a(t,r,n)},e)}),Q1=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),e_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(Q1,n*t/i,n,n*(1-t-i)/i)}),Pt=Dp,r_=function(e){var r=e.a,n=e.b,t=e.c;return h(Pt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},Gi=v(function(e,r){return r_(a(e_,e,r))}),Pf=v(function(e,r){return{ef:_e(e.ef,r.ef),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cB,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cB,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cB,cB:e.cB*r.cB}}),Ur=Gp,n_=function(e){return Ur({ep:e.t,eq:e.w,er:e.z,es:e.K,et:e.u,eu:e.x,ev:e.A,ew:e.L,ex:e.v,ey:e.y,ez:e.B,eA:e.M,eB:0,eC:0,eD:0,eE:1})},mo=qe(function(e,r,n,t,i){var o=t.ef?1:-1,l=z(Va,t.cB,t.cB,t.cB,o);return ar(i,e,l,n_(t),t.ef,r,n)}),Mf=xr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,f=r,m=n,s=a(Pf,l,t),b=c,d=o;e=u,r=f,n=m,t=s,i=b,o=d;continue e;case 1:var w=i.b,_=a(P,F(mo,e,r,n,t,w),o.P);return{P:_,_:o._,hG:o.hG};case 3:var S=i.b,C=a(P,F(mo,e,r,n,t,S),o._);return{P:o.P,_:C,hG:o.hG};case 2:var y=i.a,M=a(P,F(mo,e,r,n,t,y),o.hG);return{P:o.P,_:o._,hG:M};default:var G=i.a;return h(Re,z(Mf,e,r,n,t),o,G)}}),a_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Tf=a_,ac=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),t_=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(ac,518,r,n,t)},i_=v(function(e,r){return{$:6,a:e,b:r}}),o_=i_,kf=$([t_({ab:1,ac:0,ai:!1}),z(Tf,!1,!1,!1,!1),a(o_,0,1)]),ka=519,tc=8,Df=15,Sa=7681,l_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ie=Zd,c_=v(function(e,r){return{$:0,a:e,b:r}}),u_=c_({d_:1,eb:0,eN:5}),gr=Tp,$_=u_($([{e_:a(gr,-1,-1)},{e_:a(gr,1,-1)},{e_:a(gr,-1,1)},{e_:a(gr,1,1)}])),v_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e_"},uniforms:{}},f_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f,k:m}}}}}}}}}}}},ic=T(function(e,r,n){var t=e.dr,i=e.c6,o=e.dL,l=v(function(f,m){var s=f;return m(s)}),c=v(function(f,m){var s=f;return m(s)}),u=function(f){return a(Xe,l(f.bO),a(Xe,c(f.bz),a(Xe,c(f.bX),c(f.bY))))};return a(u,n,a(u,r,h(f_,t,i,o)))}),oc=function(e){return h(ic,{c6:e.c6,dr:e.dr,dL:e.dL},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},lc=function(e){return F(Ie,$([oc(e),z(Tf,!1,!1,!1,!1)]),v_,l_,$_,{})},m_=lc({bz:Sa,c6:0,dr:tc,bO:ka,dL:Df,bX:Sa,bY:Sa}),s_=516,Bu=5386,ir=7680,d_=function(e){return a(Ea,2,e+4)},Ff=function(e){return lc({bz:ir,c6:Df,dr:tc,bO:s_,dL:d_(e),bX:Bu,bY:Bu})},p_=T(function(e,r,n){return mr($([h(Nr,e,n,kf),$([Ff(r),m_])]))}),g_=v(function(e,r){return mr(a(N$,p_(e),r))}),h_=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(ac,513,r,n,t)},b_=h_({ab:1,ac:0,ai:!0}),__=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f}}}}}}}}}}},w_=function(e){var r=e.cy,n=e.cf,t=e.b0,i=e.bZ,o=e.b7,l=e.fE,c=v(function(u,f){var m=u.a,s=u.b,b=u.c,d=f.a,w=f.b,_=f.c;return __(m)(s)(b)(d)(w)(_)(r)(n)(t)(i)});return a(c,o,l)},y_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Eu=v(function(e,r){var n=e,t=r;return h(y_,32774,n,t)}),x_=1,Vu=771,S_=770,cc=w_({bZ:0,fE:a(Eu,x_,Vu),b0:0,b7:a(Eu,S_,Vu),cf:0,cy:0}),ua=$([b_,cc]),C_=function(e){var r=e;return r.eG},L_=function(e){var r=e;return r.eH},Af=function(e){var r=e;return r.eI},z_=function(e){var r=e;return r.eJ},P_=function(e){var r=e;return r.eK},If=function(e){var r=e;return r.eL},cn=v(function(e,r){var n=e,t=r;return t-n}),Bf=function(e){return R(a(cn,z_(e),C_(e)),a(cn,P_(e),L_(e)),a(cn,If(e),Af(e)))},ja=function(e){var r=e;return r.df},ju=function(e){var r=e;return ja(r)},M_=function(e){return e},T_=function(e){return vn({df:M_({io:e.K,is:e.L,dO:e.M}),dM:ln({io:e.t,is:e.u,dO:e.v}),dN:ln({io:e.w,is:e.x,dO:e.y}),dP:ln({io:e.z,is:e.A,dO:e.B})})},so=v(function(e,r){var n=e,t=r,i=n.dP,o=i,l=n.dN,c=l,u=n.dM,f=u;return{io:t.io*f.io+t.is*f.is+t.dO*f.dO,is:t.io*c.io+t.is*c.is+t.dO*c.dO,dO:t.io*o.io+t.is*o.is+t.dO*o.dO}}),Ef=v(function(e,r){var n=e,t=r,i=n.df,o=i,l=t.io-o.io,c=t.is-o.is,u=t.dO-o.dO,f=n.dP,m=f,s=n.dN,b=s,d=n.dM,w=d;return{io:l*w.io+c*w.is+u*w.dO,is:l*b.io+c*b.is+u*b.dO,dO:l*m.io+c*m.is+u*m.dO}}),ra=function(e){var r=e;return r.dM},na=function(e){var r=e;return r.dN},aa=function(e){var r=e;return r.dP},Vf=v(function(e,r){return{df:a(Ef,e,ja(r)),dM:a(so,e,ra(r)),dN:a(so,e,na(r)),dP:a(so,e,aa(r))}}),tl=T(function(e,r,n){return{io:e,is:r,dO:n}}),Li=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(Qe,n,t)}),Ue=v(function(e,r){var n=e,t=r;return a(ya,n,t)}),k_=v(function(e,r){var n=Li(r),t=Li(e);return{eG:a(He,t.eG,n.eG),eH:a(He,t.eH,n.eH),eI:a(He,t.eI,n.eI),eJ:a(Ue,t.eJ,n.eJ),eK:a(Ue,t.eK,n.eK),eL:a(Ue,t.eL,n.eL)}}),Tr=function(e){var r=e;return r},D_=function(e){var r=e;return R(r.io,r.is,r.dO)},rt=v(function(e,r){var n=e,t=r;return t+n}),F_=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ai(wr(t)),l=ai(wr(n)),c=ai(wr(i)),u=D_(r),f=u.a,m=u.b,s=u.c;return{eG:a(rt,l,f),eH:a(rt,o,m),eI:a(rt,c,s),eJ:a(cn,l,f),eK:a(cn,o,m),eL:a(cn,c,s)}}),Ru=ee(function(e,r,n,t){var i=n.f1,o=2*n.gE*r,l=2*n.gD*r,c=2*n.gC*r,u=i.dO*r,f=i.is*r,m=i.io*r,s=Tr(aa(e)),b=be(c*s.io)+be(l*s.is)+be(o*s.dO),d=Tr(na(e)),w=be(c*d.io)+be(l*d.is)+be(o*d.dO),_=Tr(ra(e)),S=be(c*_.io)+be(l*_.is)+be(o*_.dO),C=a(F_,R(S,w,b),a(Ef,e,h(tl,m,f,u)));if(t.$)return Y(C);var y=t.a;return Y(a(k_,y,C))}),il=ee(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var d=e,w=r,_=n,S=o;e=d,r=w,n=_,t=S;continue e;case 1:var l=i.a,c=z(Ru,e,r,l,n),d=e,w=r,_=c,S=o;e=d,r=w,n=_,t=S;continue e;case 2:var d=e,w=r,_=n,S=o;e=d,r=w,n=_,t=S;continue e;case 3:var l=i.a,c=z(Ru,e,r,l,n),d=e,w=r,_=c,S=o;e=d,r=w,n=_,t=S;continue e;case 4:var u=i.a,d=e,w=r,_=z(il,e,r,n,u),S=o;e=d,r=w,n=_,t=S;continue e;default:var f=i.a,m=i.b,s=a(Vf,T_(f),e),b=r*f.cB,d=e,w=r,_=z(il,s,b,n,$([m])),S=o;e=d,r=w,n=_,t=S;continue e}}else return n}),ta=Fp,ia=Ap,oa=Ip,jf=function(e){return{$:4,a:e}},A_=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),Mt=function(e){return jf(a(A_,e,D))},I_={ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cB:1},B_=function(e){var r=e;return r},Nu=lc({bz:Sa,c6:0,dr:tc,bO:ka,dL:255,bX:Sa,bY:Sa}),E_=function(e){var r=e,n=a(Qe,be(r.io),a(Qe,be(r.is),be(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=bn(o*o+i*i+t*t);return l*n}else return Wr},dr={b0:0,f0:!1,cf:0,$7:0,cy:0,dD:0,io:0,is:0,dO:0},Cr=v(function(e,r){var n=e,t=r;return Ur({ep:n.io,eq:n.cy,er:t.io,es:t.cy,et:n.is,eu:n.cf,ev:t.is,ew:t.cf,ex:n.dO,ey:n.b0,ez:t.dO,eA:t.b0,eB:n.dD,eC:n.$7,eD:t.dD,eE:t.$7})}),Za=L({bF:a(Cr,dr,dr),cm:a(Cr,dr,dr),cn:a(Cr,dr,dr),co:a(Cr,dr,dr)},z(Va,0,0,0,0)),Oe=v(function(e,r){var n=r;return e*n}),Ou=function(e){var r=e;return-r},Rf=514,Nf=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(ac,515,r,n,t)},Of=240,V_=$([Nf({ab:1,ac:0,ai:!0}),oc({bz:ir,c6:Of,dr:0,bO:Rf,dL:0,bX:ir,bY:ir}),cc]),j_=v(function(e,r){var n=e,t=r.hb,i=r.gu,o=r.fJ,l=wr(t),c=l,u=wr(i),f=u,m=n.dq;if(m.$){var b=m.a;return Vo(f)?Ur({ep:2/(o*b),eq:0,er:0,es:0,et:0,eu:2/b,ev:0,ew:0,ex:0,ey:0,ez:0,eA:-1,eB:0,eC:0,eD:0,eE:1}):Ur({ep:2/(o*b),eq:0,er:0,es:0,et:0,eu:2/b,ev:0,ew:0,ex:0,ey:0,ez:-2/(f-c),eA:-(f+c)/(f-c),eB:0,eC:0,eD:0,eE:1})}else{var s=m.a;return Vo(f)?Ur({ep:1/(o*s),eq:0,er:0,es:0,et:0,eu:1/s,ev:0,ew:0,ex:0,ey:0,ez:-1,eA:-2*c,eB:0,eC:0,eD:-1,eE:0}):Ur({ep:1/(o*s),eq:0,er:0,es:0,et:0,eu:1/s,ev:0,ew:0,ex:0,ey:0,ez:-(f+c)/(f-c),eA:-2*f*c/(f-c),eB:0,eC:0,eD:-1,eE:0})}}),Ht=v(function(e,r){return(1&e>>r)===1?0:1}),R_=function(e){return $([Nf({ab:1,ac:0,ai:!0}),oc({bz:ir,c6:Of,dr:e,bO:Rf,dL:0,bX:ir,bY:ir}),cc])},N_=T(function(e,r,n){return mr(a(ne,function(t){var i=t<<4,o=z(Va,a(Ht,t,0),a(Ht,t,1),a(Ht,t,2),a(Ht,t,3));return h(Nr,e,L(r,o),R_(i))},a(qr,1,a(Ea,2,n)-1)))}),zi=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Ca=function(e){var r=e;return r},O_=Wp,Hu=function(e){var r=e;return zi(aa(r))},Hf=ln({io:1,is:0,dO:0}),Gf=Hf,uc=rc,$c=ln({io:0,is:0,dO:1}),H_=$c,G_={df:zt,dM:Gf,dN:uc,dP:H_},Tt=function(e){var r=e;return r},W_=function(e){var r=Tt(ja(e)),n=Tr(aa(e)),t=Tr(na(e)),i=Tr(ra(e));return Ur({ep:i.io,eq:t.io,er:n.io,es:r.io,et:i.is,eu:t.is,ev:n.is,ew:r.is,ex:i.dO,ey:t.dO,ez:n.dO,eA:r.dO,eB:0,eC:0,eD:0,eE:1})},U_=v(function(e,r){var n=r;return W_(a(Vf,n,e))}),J_=function(e){return a(U_,G_,e)},q_=function(e){var r=e;return r.dG},Y_=function(e){var r=e;return ra(r)},X_=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),Z_=function(e){var r=e;return na(r)},K_=function(e){var r=q_(e.fZ),n=vn({df:ju(r),dM:Y_(r),dN:Z_(r),dP:zi(Hu(r))}),t=Mt(e.a8),i=t,o=z(il,n,1,J,$([i]));if(o.$===1)return D;var l=o.a,c=J_(r),u=a(Oe,.99,a(He,wr(e.f5),Ou(Af(l)))),f=Bf(l),m=f.a,s=f.b,b=f.c,d=E_(h(X_,m,s,b)),w=a(Oe,1.01,a(rt,d,Ou(If(l)))),_=a(j_,e.fZ,{fJ:e.fJ,gu:w,hb:u}),S=O_(_).eE,C=S?Tr(zi(Hu(r))):Ca(ju(r)),y=function(){var me=e.ic;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var Te=me.a;return L(3,Te);case 4:var Te=me.a;return L(4,Te);default:return L(5,0)}}(),M=y.a,G=y.b,K=e.gs,ae=K,te=a(Gi,ae,e.il),ie=te,re=Ur({ep:0,eq:C.io,er:ta(ie),es:e.fb,et:0,eu:C.is,ev:ia(ie),ew:B_(d),ex:0,ey:C.dO,ez:oa(ie),eA:M,eB:0,eC:S,eD:0,eE:G}),q=ar(Mf,re,c,_,I_,i,{P:D,_:D,hG:D}),de=e.g4;switch(de.$){case 0:var pe=de.a;return mr($([h(Nr,q.P,L(pe,fo),ua),h(Nr,q._,Za,ua)]));case 1:var pe=de.a;return mr($([h(Nr,q.P,Za,ua),$([Nu]),h(Nr,q.hG,pe.bF,kf),$([Ff(0)]),h(Nr,q.P,L(pe,fo),V_),h(Nr,q._,Za,ua)]));default:var Me=de.a,Se=de.b;return mr($([h(Nr,q.P,L(Se,fo),ua),$([Nu]),a(g_,q.hG,Me),h(N_,q.P,Se,Un(Me)),h(Nr,q._,Za,ua)]))}},Q_=function(e){return a(Vr,"width",k(e))},e2=v(function(e,r){var n=$([G1(1),q1(0),V1(!0),z(O1,0,0,0,0)]),t=function(){var M=e.fG;switch(M.$){case 0:return R(n,"0",1);case 1:return R(a(P,R1,n),"1",1);default:var G=M.a;return R(n,"0",G)}}(),i=t.a,o=t.b,l=t.c,c=e.a4,u=c.a,f=c.b,m=Iu(f),s=a(hr,"height",k(m)+"px"),b=Iu(u),d=b/m,w=a(Ia,function(M){return K_({fJ:d,fZ:e.fZ,f5:e.f5,a8:M.a8,gs:M.gs,g4:M.g4,fb:l,ic:M.ic,il:M.il})},r),_=a(hr,"width",k(b)+"px"),S=e.a1,C=S,y=Y1(C);return h(U1,"div",$([a(hr,"padding","0px"),_,s]),$([L(o,h(K1,i,$([Q_(Be(b*l)),W1(Be(m*l)),_,s,a(hr,"display","block"),a(hr,"background-color",y)]),w))]))}),r2=function(e){return{$:2,a:e}},n2=function(e){return r2(e)},a2=function(e){return a(e2,{fG:n2(e.cS),a1:e.a1,fZ:e.fZ,f5:e.f5,a4:e.a4},$([{a8:e.a8,gs:e.gs,g4:e.g4,ic:e.ic,il:e.il}]))},Gu=function(e){return e},On=function(e){return e},t2=function(e){var r=e;return r},vc=function(e){var r=e;return t2(r.fK)},Wf=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),i2=ee(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Uf=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Jf=ee(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),o2=ee(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),l2=ee(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),c2=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),fc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return z(c2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return z(Wf,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return z(i2,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return z(Uf,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return z(l2,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return z(Jf,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return z(o2,n,t,i,1);case 8:return e;case 9:return e;default:return e}},mc={$:0},u2=Pe(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var u=c.a,f=c.b,m=Li(l(u)),s=a(Ue,m.eJ,e),b=a(He,m.eG,r),d=a(Ue,m.eK,n),w=a(He,m.eH,t),_=a(Ue,m.eL,i),S=a(He,m.eI,o),C=l,y=f;e=s,r=b,n=d,t=w,i=_,o=S,l=C,c=y;continue e}else return{eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i}}),$2=T(function(e,r,n){var t=Li(e(r));return ht(u2,t.eJ,t.eG,t.eK,t.eH,t.eL,t.eI,e,n)}),po=v(function(e,r){var n=e,t=r;return he(t,n)<1}),qf=function(e){return a(po,e.eG,e.eJ)&&a(po,e.eH,e.eK)&&a(po,e.eI,e.eL)?e:{eG:a(He,e.eJ,e.eG),eH:a(He,e.eK,e.eH),eI:a(He,e.eL,e.eI),eJ:a(Ue,e.eJ,e.eG),eK:a(Ue,e.eK,e.eH),eL:a(Ue,e.eL,e.eI)}},pt=function(e){var r=e;return r},Hn=function(e){var r=e;return r.io},Gn=function(e){var r=e;return r.is},Wn=function(e){var r=e;return r.dO},Yf=function(e){var r=pt(e),n=r.a,t=r.b,i=r.c,o=Hn(n),l=Gn(n),c=Wn(n),u=Hn(t),f=Gn(t),m=Wn(t),s=Hn(i),b=Gn(i),d=Wn(i);return qf({eG:a(He,o,a(He,u,s)),eH:a(He,l,a(He,f,b)),eI:a(He,c,a(He,m,d)),eJ:a(Ue,o,a(Ue,u,s)),eK:a(Ue,l,a(Ue,f,b)),eL:a(Ue,c,a(Ue,m,d))})},Xf=Bp,$r=function(e){return Xf(Tt(e))},Zf=function(e){var r=e;return r},Wi=function(e){return Xf(Zf(e))},Kf=function(e){return e},v2=v(function(e,r){var n=e,t=r,i=a(Qe,be(t.io),a(Qe,be(t.is),be(t.dO)));if(i){var o=t.dO/i,l=t.is/i,c=t.io/i,u=bn(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dO:n*o/u}}else return Lf}),f2=v2(Kf(1)),Qf=T(function(e,r,n){var t=a(Ci,r,n),i=a(Ci,e,r);return f2(a(Ql,t,i))}),m2=function(e){var r=pt(e),n=r.a,t=r.b,i=r.c,o=Wi(h(Qf,n,t,i));return R({q:o,e_:$r(n)},{q:o,e_:$r(t)},{q:o,e_:$r(i)})},s2=v(function(e,r){return{$:2,a:e,b:r}}),em=s2({d_:3,eb:0,eN:4}),d2=function(e){if(e.b){var r=e.a,n=e.b,t=em(a(ne,m2,e)),i=h($2,Yf,r,n);return z(Wf,i,e,t,0)}else return mc},Sr=T(function(e,r,n){return R(e,r,n)}),Ze=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),rm=function(){var e=On(1),r=On(1),n=On(1),t=a(Oe,-.5,e),i=a(Oe,-.5,r),o=a(Oe,-.5,n),l=h(Ze,o,i,t),c=a(Oe,.5,e),u=h(Ze,o,i,c),f=a(Oe,.5,r),m=h(Ze,o,f,t),s=h(Ze,o,f,c),b=a(Oe,.5,n),d=h(Ze,b,i,t),w=h(Ze,b,f,t),_=h(Ze,b,i,c),S=h(Ze,b,f,c);return fc(d2($([h(Sr,l,w,d),h(Sr,l,m,w),h(Sr,u,_,S),h(Sr,u,S,s),h(Sr,d,w,S),h(Sr,d,S,_),h(Sr,l,s,m),h(Sr,l,u,s),h(Sr,l,d,_),h(Sr,l,_,u),h(Sr,m,S,w),h(Sr,m,s,S)])))}(),Gt={$:0},p2=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),g2=T(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(t),f=Wi(h(Qf,u,c,l)),m={q:f,e_:$r(u)},s={q:f,e_:$r(c)},b={q:f,e_:$r(l)};return a(P,m,a(P,s,a(P,b,n)))}),sc=function(e){var r=e;return r.H},h2=ee(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var l=t.a;return Y(h(e,i,o,l))}),ol=4294967295>>>32-ot,ll=Qm,b2=T(function(e,r,n){e:for(;;){var t=ol&r>>>e,i=a(ll,t,n);if(i.$){var f=i.a;return a(ll,ol&r,f)}else{var o=i.a,l=e-ot,c=r,u=o;e=l,r=c,n=u;continue e}}}),_2=function(e){return e>>>5<<5},w2=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||he(e,n)>-1?J:he(e,_2(n))>-1?Y(a(ll,ol&e,o)):Y(h(b2,t,e,i))}),dc=function(e){var r=e;return r.au},go=v(function(e,r){return a(w2,e,dc(r))}),y2=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return z(h2,T(function(l,c,u){return R(l,c,u)}),a(go,t,e),a(go,i,e),a(go,o,e))};return a(un,r,sc(e))},x2=T(function(e,r,n){e:for(;;){var t=a(kl,_r,e),i=t.a,o=t.b;if(he(Bo(i),_r)<0)return a(Y$,!0,{C:r,n,r:i});var l=o,c=a(P,U$(i),r),u=n+1;e=l,r=c,n=u;continue e}}),pc=function(e){return e.b?h(x2,e,D,0):G$},S2=v(function(e,r){return!a(xt,a(Ct,C0,e),r)}),C2=function(e){var r=e.a;return r},nm=v(function(e,r){var n=C2(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&he(o,n)<0&&l>=0&&he(l,n)<0&&c>=0&&he(c,n)<0};return a(S2,t,r)?{H:r,au:e}:{H:a(zv,t,r),au:e}}),L2=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=L2({d_:1,eb:3,eN:4}),ti=v(function(e,r){var n=Ca(r),t=Ca(e);return L(R(t.io,t.is,t.dO),R(n.io,n.is,n.dO))}),Wu=h(Pt,0,0,0),ho=xr(function(e,r,n,t,i,o){var l=o.a,c=o.b,u=o.c,f=a(St,a(ti,e,r),i);if(f.$){var s={q:Wu,e_:$r(r)},b={q:Wu,e_:$r(e)},d=u+1,w=u;return R(a(P,R(n,w,d),a(P,R(n,d,t),l)),a(P,s,a(P,b,c)),u+2)}else{var m=f.a;return R(a(P,R(n,m,t),l),c,u)}}),z2=qe(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,f=n.b,m=e(u),s=e(c),b=e(l),d=t+2,w=t+1,_=t,S=e,C=r,y=f,M=t+3,G=ar(ho,m,b,d,_,r,ar(ho,s,m,w,d,r,ar(ho,b,s,_,w,r,i)));e=S,r=C,n=y,t=M,i=G;continue e}else{var K=i,ae=K.a,te=K.b;return L(ae,fr(te))}}),P2=qe(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,f=r.b,m=e(u),s=e(c),b=e(l),d=n+2,w=n+1,_=n,S=h(_a,a(ti,b,m),d,h(_a,a(ti,m,s),w,h(_a,a(ti,s,b),_,i))),C=a(P,R(_,w,d),t),y=e,M=f,G=n+3,K=C,ae=S;e=y,r=M,n=G,t=K,i=ae;continue e}else return R(t,i,n)}),In=T(function(e,r,n){var t=y2(n),i=h(er,g2(r),D,t),o=F(P2,r,t,0,D,El),l=o.a,c=o.b,u=o.c,f=F(z2,r,c,t,0,R(l,D,u)),m=f.a,s=f.b,b=pn(s)?i:X(i,s);return h(p2,e,a(nm,pc(b),m),a(kt,b,m))}),cl=function(e){return{H:a(ne,function(r){return R(3*r,3*r+1,3*r+2)},a(qr,0,Un(e)-1)),au:pc(mr(a(ne,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},am=function(e){switch(e.$){case 0:return Gt;case 1:var t=e.a,r=e.b,n=a(ne,pt,r);return h(In,t,Er,cl(n));case 2:var t=e.a,r=e.b,n=a(ne,pt,r);return h(In,t,Er,cl(n));case 3:var t=e.a,i=e.b;return h(In,t,Er,i);case 4:var t=e.a,i=e.b;return h(In,t,function(o){return o.e_},i);case 5:var t=e.a,i=e.b;return h(In,t,function(o){return o.e_},i);case 6:var t=e.a,i=e.b;return h(In,t,function(o){return o.e_},i);case 7:var t=e.a,i=e.b;return h(In,t,function(o){return o.e_},i);case 8:return Gt;case 9:return Gt;default:return Gt}},Uu=am(rm),gc=function(e){var r=e;return r.a4},tm={$:0},W=tm,Ke=v(function(e,r){return{$:1,a:e,b:r}}),M2={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},T2=1029,k2=function(e){return{$:5,a:e}},im=function(e){var r=e;return k2(r)},D2=im(T2),F2=1028,A2=im(F2),vr=T(function(e,r,n){return r===1?e?a(P,D2,n):a(P,A2,n):n}),om={src:`
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
    `,attributes:{position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},bo=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,l,c,u,f,m,s){return F(Ie,h(vr,c,t,s),om,M2,n,{b8:e,c:l,d:o,e:f,f:i,g:u})}))}),hc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},lm={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Qr=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,l,c,u,f,m,s){return F(Ie,h(vr,c,t,s),lm,hc,n,{aO:e,c:l,d:o,e:f,f:i,g:u})}))}),cm=v(function(e,r){return{$:3,a:e,b:r}}),I2={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},um={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},B2=ee(function(e,r,n,t){return a(cm,n,Pe(function(i,o,l,c,u,f,m,s){return F(Ie,s,um,I2,t,{aO:e,c:l,d:o,cw:r,e:f,f:i,g:u})}))}),bc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Ui=Ep,en=qe(function(e,r,n,t,i){return a(Ke,n,Pe(function(o,l,c,u,f,m,s,b){return F(Ie,h(vr,u,i,b),lm,bc,t,{a6:a(Ui,Dt(r),e),c,d:l,e:m,f:o,g:f})}))}),E2={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},V2=qe(function(e,r,n,t,i){return a(cm,t,Pe(function(o,l,c,u,f,m,s,b){return F(Ie,b,um,E2,i,{a6:a(Ui,Dt(r),e),c,d:l,cw:n,e:m,f:o,g:f})}))}),$m={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"c7",sceneProperties:"f",viewMatrix:"g"}},vm={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Wt=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,l,c,u,f,m,s){var b=m.a,d=m.b;return F(Ie,h(vr,c,t,s),vm,$m,n,{U:d,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,c7:e,c:l,d:o,e:f,f:i,g:u})}))}),fm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"c8",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},mm={src:`
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
    `,attributes:{normal:"q",position:"e_",tangent:"fd",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},j2=xr(function(e,r,n,t,i,o){return a(Ke,t,Pe(function(l,c,u,f,m,s,b,d){var w=b.a,_=b.b;return F(Ie,h(vr,f,o,d),mm,fm,i,{U:_,bF:w.bF,cm:w.cm,cn:w.cn,co:w.co,c8:e,c:u,d:c,bg:r,e:s,f:l,bm:n,g:m})}))}),sm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cO",constantBaseColor:"cP",constantMetallic:"cQ",constantRoughness:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"db",normalMapTexture:"bg",roughnessTexture:"dv",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},R2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return a(Ke,u,Pe(function(s,b,d,w,_,S,C,y){var M=C.a,G=C.b;return F(Ie,h(vr,w,m,y),mm,sm,f,{cO:e,cP:r,cQ:o,cR:t,U:G,bF:M.bF,cm:M.cm,cn:M.cn,co:M.co,db:i,c:d,d:b,bg:l,e:S,dv:n,f:s,bm:c,g:_})}))}}}}}}}}}}},dm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cN",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"da",roughness:"du",sceneProperties:"f",viewMatrix:"g"}},Ut=xr(function(e,r,n,t,i,o){return a(Ke,t,Pe(function(l,c,u,f,m,s,b,d){var w=b.a,_=b.b;return F(Ie,h(vr,f,o,d),vm,dm,i,{cN:e,U:_,bF:w.bF,cm:w.cm,cn:w.cn,co:w.co,da:n,c:u,d:c,e:s,du:r,f:l,g:m})}))}),N2=function(e){return{$:0,a:e}},Ju=v(function(e,r){return{$:1,a:e,b:r}}),nt=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),O2=function(e){return z(Va,ta(e),ia(e),oa(e),1)},_c=z(Va,0,0,0,0),ii=v(function(e,r){if(r.$){var t=r.a.E;return L(t,_c)}else{var n=r.a;return L(e,O2(n))}}),pm=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(Ju,L(i,_c),a(nt,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Ju,a(ii,i,e),a(nt,i,r))}else{var t=n.a.a;return n.b.a,N2(t)}}),H2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jt=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),G2=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),W2=function(e){return a(gr,e,1)},ul=a(gr,0,0),$a=v(function(e,r){if(r.$){var t=r.a.E;return L(t,ul)}else{var n=r.a;return L(e,W2(n))}}),gm=ee(function(e,r,n,t){var i=z(G2,e,r,n,t);if(i.a.$){var u=i.a.a.E;return z(Jt,L(u,_c),a($a,u,r),a($a,u,n),a(nt,u,t))}else if(i.b.$){var u=i.b.a.E;return z(Jt,a(ii,u,e),L(u,ul),a($a,u,n),a(nt,u,t))}else if(i.c.$){var u=i.c.a.E;return z(Jt,a(ii,u,e),a($a,u,r),L(u,ul),a(nt,u,t))}else if(i.d.$){var u=i.d.a.E;return z(Jt,a(ii,u,e),a($a,u,r),a($a,u,n),L(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,h(H2,o,l,c)}}),U2={src:`
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
    `,attributes:{},uniforms:{backlight:"cL",colorTexture:"b8",sceneProperties:"f"}},_o=qe(function(e,r,n,t,i){return a(Ke,n,Pe(function(o,l,c,u,f,m,s,b){return F(Ie,h(vr,u,i,b),om,U2,t,{cL:Dt(r),b8:e,c,d:l,e:m,f:o,g:f})}))}),hm={src:`
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
    `,attributes:{normal:"q",position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},J2=ee(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,l,c,u,f,m,s){var b=m.a,d=m.b;return F(Ie,h(vr,c,t,s),hm,fm,n,{U:d,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,c8:e,c:l,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),q2=ml(function(e,r,n,t,i,o,l,c,u){return a(Ke,l,Pe(function(f,m,s,b,d,w,_,S){var C=_.a,y=_.b;return F(Ie,h(vr,b,u,S),hm,sm,c,{cO:e,cP:r,cQ:o,cR:t,U:y,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,db:i,c:s,d:m,bg:e,e:w,dv:n,f,bm:0,g:d})}))}),gt=T(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Y2=function(e){var r=e;return h(gt,r.eJ,r.eG,.5)},X2=function(e){var r=e;return h(gt,r.eK,r.eH,.5)},Z2=function(e){var r=e;return h(gt,r.eL,r.eI,.5)},K2=function(e){return h(Ze,Y2(e),X2(e),Z2(e))},$e=function(e){var r=Bf(e),n=r.a,t=r.b,i=r.c;return{f1:Tt(K2(e)),gC:n/2,gD:t/2,gE:i/2}},wc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return z(bo,c,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return z(bo,c,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return z(bo,c,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var n=e.b.a;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return z(Qr,n,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return z(Qr,n,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return z(Qr,n,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return z(Qr,n,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return z(Qr,n,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return z(Qr,n,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return z(Qr,n,$e(i),l,t);case 8:var i=r.a,l=r.c;return z(Qr,n,$e(i),l,0);case 9:var i=r.a,l=r.c;return z(Qr,n,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return z(B2,n,o,$e(i),l)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,f=e.c;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return F(_o,c,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(_o,c,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(_o,c,f,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 8:var i=r.a,l=r.c;return F(en,u,f,$e(i),l,0);case 9:var i=r.a,l=r.c;return F(en,u,f,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return F(V2,u,f,o,$e(i),l)}}case 2:e.a;var m=e.b,ae=e.c,s=a(pm,m,ae);if(s.$){var w=s.a,_=w.a;w.b;var S=s.b,C=S.a,y=S.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,d=r.d;return z(J2,_,$e(i),l,d);case 7:var i=r.a,l=r.c,d=r.d;return ar(j2,_,C,y,$e(i),l,d);case 8:return W;case 9:return W;default:return W}}else{var b=s.a;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,d=r.d;return z(Wt,b,$e(i),l,d);case 3:return W;case 4:var i=r.a,l=r.c,d=r.d;return z(Wt,b,$e(i),l,d);case 5:return W;case 6:var i=r.a,l=r.c,d=r.d;return z(Wt,b,$e(i),l,d);case 7:var i=r.a,l=r.c,d=r.d;return z(Wt,b,$e(i),l,d);case 8:return W;case 9:return W;default:return W}}default:e.a;var M=e.b,G=e.c,K=e.d,ae=e.e,te=z(gm,M,G,K,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,I=te.c,B=I.a,E=I.b,V=te.d,C=V.a,y=V.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return qm(q2,pe,Me,me,Te,B,E,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return R2(pe)(Me)(me)(Te)(B)(E)(C)(y)($e(i))(l)(t);case 8:return W;case 9:return W;default:return W}}else{var ie=te.a,re=te.b,q=te.c;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,t=r.d;return ar(Ut,ie,re,q,$e(i),l,t);case 3:return W;case 4:var i=r.a,l=r.c,t=r.d;return ar(Ut,ie,re,q,$e(i),l,t);case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return ar(Ut,ie,re,q,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return ar(Ut,ie,re,q,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}}}),wo=function(e){var r=e;return r.io},yo=function(e){var r=e;return r.is},xo=function(e){var r=e;return r.dO},Q2=function(e){var r=e,n=xo(r.dP),t=yo(r.dP),i=wo(r.dP),o=xo(r.dN),l=yo(r.dN),c=wo(r.dN),u=xo(r.dM),f=yo(r.dM),m=wo(r.dM);return m*l*n+f*o*i+u*c*t-u*l*i-f*c*n-m*o*t>0},ew=function(e){var r=Tt(ja(e)),n=Tr(aa(e)),t=Tr(na(e)),i=Tr(ra(e));return{ef:Q2(e),t:i.io,u:i.is,v:i.dO,w:t.io,x:t.is,y:t.dO,z:n.io,A:n.is,B:n.dO,K:r.io,L:r.is,M:r.dO,cB:1}},ma=v(function(e,r){return{$:5,a:e,b:r}}),bm=v(function(e,r){var n=r;switch(n.$){case 0:return W;case 5:var t=n.a,i=n.b,o=a(Pf,t,e);return a(ma,o,i);case 1:return a(ma,e,n);case 3:return a(ma,e,n);case 2:return a(ma,e,n);default:return a(ma,e,n)}}),_m=v(function(e,r){return a(bm,ew(e),r)}),Ji=function(e){return{$:2,a:e}},rw=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f1;return{f1:{io:n*o.io,is:t*o.is,dO:i*o.dO},gC:n*r.gC,gD:t*r.gD,gE:i*r.gE}}),nw=Rp,aw=jp,qu=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){var m=e.a,s=e.b,b=e.c,d=aw(t),w=d.io,_=d.is,S=d.dO,C=d.fp,y=nw({fp:C,io:w*m,is:_*s,dO:S*b});return ht(r,n,y,i,o,l,c,u,f)}}}}}}}}}},$l=v(function(e,r){switch(r.$){case 0:return tm;case 5:var n=r.a,t=r.b;return a(ma,n,a($l,e,t));case 1:var i=r.a,o=r.b;return a(Ke,a(rw,e,i),a(qu,e,o));case 3:return r;case 2:var o=r.a;return Ji(a(qu,e,o));default:var l=r.a;return jf(a(ne,$l(e),l))}}),yc=v(function(e,r){var n=r;return a($l,e,n)}),xc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},wm=7683,ym=7682,tw=h(ic,{c6:0,dr:0,dL:15},{bz:ir,bO:ka,bX:ir,bY:wm},{bz:ir,bO:ka,bX:ir,bY:ym}),iw=h(ic,{c6:0,dr:0,dL:15},{bz:ir,bO:ka,bX:ir,bY:ym},{bz:ir,bO:ka,bX:ir,bY:wm}),Sc=v(function(e,r){return e?a(P,iw,r):a(P,tw,r)}),ow={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},lw=function(e){if(e.$){var r=e.c;return Y(Pe(function(n,t,i,o,l,c,u,f){return F(Ie,a(Sc,o,f),ow,xc,r,{c:i,d:t,e:c,f:n,cC:u,g:l})}))}else return J},Pi=function(e){var r=lw(e);if(r.$)return W;var n=r.a;return Ji(n)},cw=ee(function(e,r,n,t){var i=a(wc,n,rm),o=function(){var m=L(e,r);return m.a?m.b?Mt($([i,Pi(Uu)])):i:m.b?Pi(Uu):W}(),l=gc(t),c=l.a,u=l.b,f=l.c;return a(_m,vc(t),a(yc,R(c,u,f),o))}),uw=v(function(e,r){return z(cw,!0,!0,e,r)}),vl=function(e){return{$:0,a:e}},xm=v(function(e,r){return{$:0,a:e,b:r}}),$w=function(e){var r=Ul(e),n=r.hs,t=r.gz,i=r.fP;return h(Pt,n,t,i)},vw=function(e){return a(xm,0,vl($w(e)))},fw=function(e){var r=e;return r.m},at=function(e){var r=e;return Xn(r)},mw=v(function(e,r){var n=r;return n/e}),Da=us,Yu=function(e){var r=e;return{io:Xn(r),is:Da(r)}},sw=v(function(e,r){var n=e.e_,t=e.q;return a(P,{q:Wi(t),e_:$r(n)},r)}),dw=ki(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,f=oa(c.e_),m=ia(c.e_),s=ta(c.e_),b=a(ya,e,s),d=a(Qe,r,s),w=a(ya,n,m),_=a(Qe,t,m),S=a(ya,i,f),C=a(Qe,o,f),y=u;e=b,r=d,n=w,t=_,i=S,o=C,l=y;continue e}else return qf({eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i})}),Sm=v(function(e,r){var n=oa(e.e_),t=ia(e.e_),i=ta(e.e_);return sl(dw,i,i,t,t,n,n,r)}),pw=function(e){var r=h(B$,sw,D,dc(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,sc(e)),o=a(Sm,n,t);return z(Uf,o,e,i,0)}else return mc},Cm=ln({io:0,is:0,dO:-1}),Xu=v(function(e,r){var n=e,t=r,i=n.dN,o=i,l=n.dM,c=l;return{io:t.io*c.io+t.is*o.io,is:t.io*c.is+t.is*o.is,dO:t.io*c.dO+t.is*o.dO}}),Mi=function(e){var r=e;return Da(r)},fl=function(e){return Yn(2*qn*e)},gw=Er,Zu=gw({df:zt,dM:Gf,dN:uc}),Lm=function(){var e=72,r=a(mw,e,fl(1)),n=On(1),t=ba($c),i=ba(Cm),o=On(1),l=a(Oe,.5,o),c=h(Ze,Wr,Wr,l),u=a(Oe,-.5,o),f=h(Ze,Wr,Wr,u),m=function(d){var w=a(Oe,d,r),_=ba(a(Xu,Zu,Yu(w))),S=a(Oe,at(w),n),C=a(Oe,Mi(w),n),y=h(Ze,S,C,l),M=h(Ze,S,C,u),G=a(wi,e,d+1),K=a(Oe,G,r),ae=ba(a(Xu,Zu,Yu(K))),te=a(Oe,at(K),n),ie=a(Oe,Mi(K),n),re=h(Ze,te,ie,u),q=h(Ze,te,ie,l);return $([R({q:i,e_:f},{q:i,e_:re},{q:i,e_:M}),R({q:_,e_:M},{q:ae,e_:re},{q:ae,e_:q}),R({q:_,e_:M},{q:ae,e_:q},{q:_,e_:y}),R({q:t,e_:c},{q:t,e_:y},{q:t,e_:q})])},s=a(ne,m,a(qr,0,e-1)),b=cl(mr(s));return fc(pw(b))}(),Ku=am(Lm),hw=function(e){var r=e;return r.gk},bw=function(e){var r=e;return r.df},_w=function(e){var r=hw(e),n=ec(r),t=n.a,i=n.b;return vn({df:bw(e),dM:t,dN:i,dP:r})},ww=function(e){var r=e;return r.g2},yw=function(e){var r=e;return r.hq},xw=ee(function(e,r,n,t){var i=_w(fw(t)),o=a(wc,n,Lm),l=function(){var s=L(e,r);return s.a?s.b?Mt($([o,Pi(Ku)])):o:s.b?Pi(Ku):W}(),c=yw(t),u=c,f=ww(t),m=f;return a(_m,i,a(yc,R(u,u,m),l))}),Sw=v(function(e,r){return z(xw,!0,!0,e,r)}),Qu={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},e$={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Ka=function(e){var r=pt(e),n=r.a,t=r.b,i=r.c,o=Ca(n),l=Ca(t),c=Ca(i);return Ur({ep:o.io,eq:l.io,er:c.io,es:0,et:o.is,eu:l.is,ev:c.is,ew:0,ex:o.dO,ey:l.dO,ez:c.dO,eA:0,eB:0,eC:0,eD:0,eE:0})},qt=em($([R({dC:0},{dC:1},{dC:2})])),Cw=v(function(e,r){var n=Yf(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var i=e.b.a;return a(Ke,t,Pe(function(y,M,G,K,ae,te,ie,re){return F(Ie,h(vr,K,0,re),Qu,hc,qt,{aO:i,c:G,d:M,e:te,f:y,bU:Ka(r),g:ae})}));case 1:if(e.b.$)return e.a,W;var o=e.b.a,l=e.c;return a(Ke,t,Pe(function(y,M,G,K,ae,te,ie,re){return F(Ie,h(vr,K,0,re),Qu,bc,qt,{a6:a(Ui,Dt(l),o),c:G,d:M,e:te,f:y,bU:Ka(r),g:ae})}));case 2:e.a;var c=e.b,d=e.c,u=a(pm,c,d);if(u.$)return W;var f=u.a;return a(Ke,t,Pe(function(y,M,G,K,ae,te,ie,re){var q=ie.a,de=ie.b;return F(Ie,h(vr,K,0,re),e$,$m,qt,{U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,c7:f,c:G,d:M,e:te,f:y,bU:Ka(r),g:ae})}));default:e.a;var m=e.b,s=e.c,b=e.d,d=e.e,w=z(gm,m,s,b,d);if(w.$)return W;var _=w.a,S=w.b,C=w.c;return a(Ke,t,Pe(function(y,M,G,K,ae,te,ie,re){var q=ie.a,de=ie.b;return F(Ie,h(vr,K,0,re),e$,dm,qt,{cN:_,U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,da:C,c:G,d:M,e:te,du:S,f:y,bU:Ka(r),g:ae})}))}}),Lw=function(){var e=$([{bl:a(gr,0,1)},{bl:a(gr,1,1)},{bl:a(gr,2,1)},{bl:a(gr,0,-1)},{bl:a(gr,1,-1)},{bl:a(gr,2,-1)}]),r=$([R(0,1,2),R(3,5,4),R(3,4,1),R(3,1,0),R(4,5,2),R(4,2,1),R(5,3,0),R(5,0,2)]);return a(kt,e,r)}(),zw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",triangleVertexPositions:"bU",viewMatrix:"g"}},r$=function(e){return Ji(Pe(function(r,n,t,i,o,l,c,u){return F(Ie,a(Sc,i,u),zw,xc,Lw,{c:t,d:n,e:l,f:r,cC:c,bU:Ka(e),g:o})}))},Pw=ee(function(e,r,n,t){var i=a(Cw,n,t),o=L(e,r);return o.a?o.b?Mt($([i,r$(t)])):i:o.b?r$(t):W}),Mw=v(function(e,r){return z(Pw,!0,!0,e,r)}),Cc=function(e){var r=e;return r},Tw=v(function(e,r){var n=Wn(r),t=Wn(e),i=Gn(r),o=Gn(e),l=Hn(r),c=Hn(e);return{eG:a(He,c,l),eH:a(He,o,i),eI:a(He,t,n),eJ:a(Ue,c,l),eK:a(Ue,o,i),eL:a(Ue,t,n)}}),kw=function(e){var r=Cc(e),n=r.a,t=r.b;return a(Tw,n,t)},n$={src:`
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
    `,attributes:{lineSegmentVertex:"en"},uniforms:{lineSegmentEndPoint:"el",lineSegmentStartPoint:"em",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Dw=v(function(e,r){return{$:1,a:e,b:r}}),Fw=Dw({d_:2,eb:0,eN:1}),a$=Fw($([L({en:0},{en:1})])),Aw=v(function(e,r){var n=kw(r),t=$e(n),i=Cc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var c=e.b.a;return a(Ke,t,Pe(function(f,m,s,b,d,w,_,S){return F(Ie,S,n$,hc,a$,{aO:c,el:$r(l),em:$r(o),c:s,d:m,e:w,f,g:d})}));case 1:if(e.b.$)return W;var c=e.b.a,u=e.c;return a(Ke,t,Pe(function(m,s,b,d,w,_,S,C){return F(Ie,C,n$,bc,a$,{a6:a(Ui,Dt(u),c),el:$r(l),em:$r(o),c:b,d:s,e:_,f:m,g:w})}));case 2:return W;default:return W}}),Iw=v(function(e,r){return a(Aw,e,r)}),Lc=function(e){var r=e;return r.f1},zc=function(e){var r=e;return r.hq},t$=v(function(e,r){var n=e,t=r;return n/t}),Bw=qe(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(P,o,i);if(_e(r,e))return l;var c=e,u=r-1,f=n,m=t,s=l;e=c,r=u,n=f,t=m,i=s;continue e}}),i$=v(function(e,r){return e<1?D:F(Bw,0,e,e,r,D)}),Ew=v(function(e,r){var n=e.e_,t=e.q,i=e.O,o=i,l=o.a,c=o.b;return a(P,{q:Wi(t),e_:$r(n),O:a(gr,l,c)},r)}),Vw=function(e){var r=h(B$,Ew,D,dc(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,sc(e)),o=a(Sm,n,t);return z(Jf,o,e,i,0)}else return mc},Pc=v(function(e,r){var n=e,t=r,i=Xn(t);return{io:i*Xn(n),is:i*Da(n),dO:Da(t)}}),jw=function(){var e=On(1),r=72,n=a(qr,0,r-1),t=a(i$,r,a(gt,Wr,fl(1))),i=it(r/2),o=a(qr,0,i-1),l=a(i$,i,a(gt,Xa(90),Xa(-90))),c=pc(mr(a(ne,function(m){return a(ne,function(s){return{q:ba(a(Pc,m,s)),e_:h(Ze,a(Oe,at(s)*at(m),e),a(Oe,at(s)*Mi(m),e),a(Oe,Mi(s),e)),O:L(a(t$,m,fl(1)),a(t$,a(rt,Xa(90),s),Xa(180)))}},l)},t))),u=v(function(m,s){return m*(i+1)+s}),f=mr(a(ne,function(m){return mr(a(ne,function(s){var b=a(u,m+1,s),d=a(u,m,s),w=a(u,m+1,s+1),_=a(u,m,s+1);return $([R(_,w,b),R(_,b,d)])},o))},n));return fc(Vw(a(nm,c,f)))}(),Ti=72,Yt=2*Ti,Rw=v(function(e,r){e:for(;;){var n=Yt+1,t=a(wi,Yt,2*e+3),i=a(wi,Yt,2*e+2),o=2*e+1,l=2*e,c=Yt,u=a(P,R(c,l,i),a(P,R(l,t,i),a(P,R(l,o,t),a(P,R(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Nw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Ow=v(function(e,r){e:for(;;){var n=h(Nw,0,2*qn,e/Ti),t={b_:n,ct:0,cz:1},i={b_:n,ct:1,cz:1},o=a(P,t,a(P,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Hw=function(){var e=a(Ow,Ti-1,$([{b_:0,ct:0,cz:0},{b_:0,ct:1,cz:0}])),r=a(Rw,Ti-1,D);return a(kt,e,r)}(),Gw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},o$=function(e){return Ji(Pe(function(r,n,t,i,o,l,c,u){return F(Ie,a(Sc,!0,u),Gw,xc,Hw,{aO:h(Pt,0,0,1),c:t,d:n,e:l,f:r,cC:c,g:o})}))},Ww=function(e){var r=Zf(e);return{ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dO,cB:1}},Uw=v(function(e,r){return a(bm,Ww(e),r)}),Jw=ee(function(e,r,n,t){var i=a(wc,n,jw),o=function(){var u=L(e,r);return u.a?u.b?Mt($([i,o$()])):i:u.b?o$():W}(),l=zc(t),c=l;return a(Uw,a(Ci,zt,Lc(t)),a(yc,R(c,c,c),o))}),qw=v(function(e,r){return z(Jw,!0,!0,e,r)}),Yw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zm=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Xw=qe(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Zw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(xm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(Yw,n,t,r);case 2:var n=e.a,t=e.b,l=e.c;return h(zm,n,t,l);default:var n=e.a,t=e.b,i=e.c,o=e.d,l=e.e;return F(Xw,n,t,i,o,l)}},Kw=Zw,Pm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(uw,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Mw,i,n)]);case 3:var i=e.a,t=e.b;return $([a(qw,Kw(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Sw,i,o)]);case 4:var l=e.a,c=e.b;return $([a(Iw,vw(l),c)]);default:var u=e.a;return a(Ia,Pm,u)}},Qw=function(e){return a(Ia,Pm,e)},ey=v(function(e,r){return a2({fG:e.fG,a1:B1(e.fL),fZ:e.fZ,f5:On(e.f5),cS:e.cS,a4:L(Gu(Be(e.dw.im)),Gu(Be(e.dw.gG))),a8:Qw(r),gs:e.gs,g4:e.g4,ic:e.ic,il:e.il})}),ry=z(Ba,186/255,189/255,182/255,1),Mm=function(e){return e},ny=v(function(e,r){var n=e,t=Tr(r.gk),i=t.io,o=t.is,l=t.dO,c=a(Gi,r.cj,r.a3),u=c;return{b0:oa(u),f0:n,cf:ia(u),$7:0,cy:ta(u),dD:1,io:-i,is:-o,dO:-l}}),ay=function(e){return a(ny,Mm(!0),{a3:e.a3,gk:a(Pc,Yn(e.b$),Yn(e.cd)),cj:e.cj})},ty=function(e){return e},iy=function(e){return ty(1.2*a(Ea,2,e))},So=nc({io:.37208,is:.37529}),oy=v(function(e,r){return{$:2,a:e,b:r}}),Tm=function(e){return{$:0,a:e}},Xt=function(e){var r=e;return r},ly=function(e){var r=e;return r.f0},cy=Tm(Za.a),uy=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?L(a(P,t,o),l):L(o,a(P,t,l))});return h(er,n,L(D,D),r)}),$y=function(e){var r=e;return Ur({ep:r.io,eq:r.cy,er:0,es:0,et:r.is,eu:r.cf,ev:0,ew:0,ex:r.dO,ey:r.b0,ez:0,eA:0,eB:r.dD,eC:r.$7,eD:0,eE:0})},vy=Pe(function(e,r,n,t,i,o,l,c){var u=a(uy,ly,$([Xt(e),Xt(r),Xt(n),Xt(t)])),f=u.a,m=u.b;if(f.b){var s=X(f,m);if(s.b&&s.b.b&&s.b.b.b&&s.b.b.b.b&&!s.b.b.b.b.b){var b=s.a,d=s.b,w=d.a,_=d.b,S=_.a,C=_.b,y=C.a;return a(oy,a(ne,$y,f),{bF:a(Cr,b,w),cm:a(Cr,S,y),cn:a(Cr,i,o),co:a(Cr,l,c)})}else return cy}else return Tm({bF:a(Cr,e,r),cm:a(Cr,n,t),cn:a(Cr,i,o),co:a(Cr,l,c)})}),fy=ee(function(e,r,n,t){return ht(vy,e,r,n,t,dr,dr,dr,dr)}),my=v(function(e,r){return a(je,function(n){if(n.$)return 0;var t=n.b;return t},a(St,e,r.aN))}),sy=v(function(e,r){return a(De,0,Hi(a(un,my(e),r)))}),dy=v(function(e,r){return a(sy,e,r.f9)}),Ar=dy,py={$:5},gy=py,hy=nc({io:.44757,is:.40745}),by=function(e){return e},l$=function(e){return e},Co=function(e){return e},_y={$:1},wy=_y,yy=v(function(e,r){var n=e,t=Tt(r.e_),i=t.io,o=t.is,l=t.dO,c=a(Gi,r.cj,r.a3),u=c;return{b0:oa(u),f0:n,cf:ia(u),$7:0,cy:ta(u),dD:2,io:i,is:o,dO:l}}),c$=function(e){return a(yy,Mm(!0),{a3:e.a3,cj:e.cj,e_:ri(e.e_)})},Mc=v(function(e,r){return{$:0,a:e,b:r}}),Lo=v(function(e,r){var n=e,t=r;return he(t,n)>-1}),zo=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),xy=ln({io:-1,is:0,dO:0}),Sy=ln({io:0,is:-1,dO:0}),Cy=xr(function(e,r,n,t,i,o){var l=a(Lo,n,o)?$c:Cm,c=a(Lo,r,i)?rc:Sy,u=a(Lo,e,t)?Hf:xy,f=R(wr(a(cn,e,t)),wr(a(cn,r,i)),wr(a(cn,n,o))),m=h(Ze,a(zo,e,t),a(zo,r,i),a(zo,n,o)),s=vn({df:m,dM:u,dN:c,dP:l});return{fK:s,a4:f}}),Ly=v(function(e,r){return ar(Cy,Hn(e),Gn(e),Wn(e),Hn(r),Gn(r),Wn(r))}),km=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=R(n/2,t/2,i/2),l=o.a,c=o.b,u=o.c;return a(Mc,e,a(Ly,h(tl,-l,-c,-u),h(tl,l,c,u)))}),zy=z(Ba,211/255,215/255,207/255,1),Po=function(e){return h(zf,0,1,e<=.04045?e/12.92:a(Ea,(e+.055)/1.055,2.4))},Py=function(e){var r=Ul(e),n=r.hs,t=r.gz,i=r.fP;return h(Pt,Po(n),Po(t),Po(i))},Dm=function(e){return h(zm,0,vl(Py(e)),vl(0))},Fm=v(function(e,r){return{$:2,a:e,b:r}}),Tc=function(e){return{$:5,a:e}},Am=v(function(e,r){return{$:4,a:e,b:r}}),Im=v(function(e,r){return{$:3,a:e,b:r}}),Bm=v(function(e,r){return{$:1,a:e,b:r}}),My=T(function(e,r,n){return{io:e,is:r,dO:n}}),Ft=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dO:t.dO+n.dO}}),Ty=v(function(e,r){return vn({df:a(Ft,e,ja(r)),dM:ra(r),dN:na(r),dP:aa(r)})}),ky=v(function(e,r){return{fK:a(Ty,e,vc(r)),a4:gc(r)}}),kc=v(function(e,r){return{gk:r,df:e}}),Dy=v(function(e,r){var n=r;return a(kc,a(Ft,e,n.df),n.gk)}),Fy=v(function(e,r){var n=r;return{m:a(Dy,e,n.m),g2:n.g2,hq:n.hq}}),Ay=function(e){return e},Em=v(function(e,r){var n=Cc(r),t=n.a,i=n.b;return Ay(L(e(t),e(i)))}),Iy=v(function(e,r){return a(Em,Ft(e),r)}),Vm=v(function(e,r){return{f1:r,hq:wr(e)}}),By=v(function(e,r){return a(Vm,zc(r),a(Ft,e,Lc(r)))}),jm=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return R(e(t),e(i),e(o))}),Ey=v(function(e,r){return a(jm,Ft(e),r)}),Rm=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(My,n,t,i);switch(r.$){case 0:var m=r.a,l=r.b;return a(Mc,m,a(ky,o,l));case 1:var m=r.a,c=r.b;return a(Bm,m,a(Ey,o,c));case 3:var m=r.a,u=r.b;return a(Im,m,a(By,o,u));case 2:var m=r.a,f=r.b;return a(Fm,m,a(Fy,o,f));case 4:var m=r.a,s=r.b;return a(Am,m,a(Iy,o,s));default:var b=r.a;return Tc(a(ne,Rm(R(n,t,i)),b))}}),Nm=function(e){return Rm(R(0,e,0))},Vy=v(function(e,r){return a(je,function(n){if(n.$===1){var t=n.b;return t}else return 0},a(St,e,r.aN))}),jy=v(function(e,r){return a(De,0,Hi(a(un,Vy(e),r)))}),Ry=v(function(e,r){return a(jy,e,r.f9)}),Ny=Ry,Oy=function(e){return Tc(e)},Hy=ee(function(e,r,n,t){var i=R(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,f=c*2-u,m=function(w){var _=w<0?w+1:w>1?w-1:w;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},s=m(o-1/3),b=m(o),d=m(o+1/3);return z(Ba,d,b,s,t)}),Gy=T(function(e,r,n){return z(Hy,e,r,n,1)}),oi=T(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Xn(l),u=Da(l),f=t.gk,m=f,s=m.io*u,b=c*s,d=s*s,w=m.is*u,_=c*w,S=s*w,C=w*w,y=1-2*(d+C),M=m.dO*u,G=c*M,K=2*(S-G),ae=2*(S+G),te=s*M,ie=2*(te+_),re=2*(te-_),q=w*M,de=2*(q-b),pe=2*(q+b),Me=M*M,Se=1-2*(C+Me),me=1-2*(d+Me);return{io:Se*o.io+K*o.is+ie*o.dO,is:ae*o.io+me*o.is+de*o.dO,dO:re*o.io+pe*o.is+y*o.dO}}),At=T(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Xn(l),u=Da(l),f=t.df,m=f,s=o.io-m.io,b=o.is-m.is,d=o.dO-m.dO,w=t.gk,_=w,S=_.io*u,C=c*S,y=S*S,M=_.is*u,G=c*M,K=S*M,ae=M*M,te=1-2*(y+ae),ie=_.dO*u,re=c*ie,q=2*(K-re),de=2*(K+re),pe=S*ie,Me=2*(pe+G),Se=2*(pe-G),me=M*ie,Te=2*(me-C),I=2*(me+C),B=ie*ie,E=1-2*(ae+B),V=1-2*(y+B);return{io:m.io+E*s+q*b+Me*d,is:m.is+de*s+V*b+Te*d,dO:m.dO+Se*s+I*b+te*d}}),Wy=T(function(e,r,n){return vn({df:h(At,e,r,ja(n)),dM:h(oi,e,r,ra(n)),dN:h(oi,e,r,na(n)),dP:h(oi,e,r,aa(n))})}),Uy=T(function(e,r,n){return{fK:h(Wy,e,r,vc(n)),a4:gc(n)}}),Jy=v(function(e,r){var n=a(At,e,r),t=a(oi,e,r);return function(i){var o=i;return a(kc,n(o.df),t(o.gk))}}),qy=T(function(e,r,n){var t=n;return{m:h(Jy,e,r,t.m),g2:t.g2,hq:t.hq}}),Yy=T(function(e,r,n){return a(Em,a(At,e,r),n)}),Xy=T(function(e,r,n){return a(Vm,zc(n),h(At,e,r,Lc(n)))}),Zy=T(function(e,r,n){return a(jm,a(At,e,r),n)}),Om=T(function(e,r,n){switch(n.$){case 0:var c=n.a,t=n.b;return a(Mc,c,h(Uy,e,r,t));case 1:var c=n.a,i=n.b;return a(Bm,c,h(Zy,e,r,i));case 3:var c=n.a,o=n.b;return a(Im,c,h(Xy,e,r,o));case 2:var c=n.a,l=n.b;return a(Fm,c,h(qy,e,r,l));case 4:var c=n.a,u=n.b;return a(Am,c,h(Yy,e,r,u));default:var f=n.a;return Tc(a(ne,a(Om,e,r),f))}}),Ky=a(kc,zt,uc),Qy=v(function(e,r){return h(Om,Ky,Yn(e),r)}),ex=function(e){var r=a(Ar,"period",e),n=a(Ny,"number of blocks",e),t=a(Ar,"minWidth",e),i=a(Qe,t,a(Ar,"maxWidth",e)),o=a(Ar,"frequency",e),l=80/n,c=function(b){return o*b/n},u=function(b){return z(al,t,i,r,e.b5+c(b))},f=function(b){return .004*r*b},m=function(b){return h(Gy,z(al,0,1,3,e.b5+f(b)),.65,.7)},s=function(b){return a(Qy,.1*u(b),a(Nm,b*l,a(km,Dm(m(b)),R(u(b),.9*l,u(b)))))};return Oy(a(ne,s,a(qr,-(n/2|0),n/2|0)))},rx=v(function(e,r){return $([ex(e),a(Nm,-33,a(km,Dm(zy),R(300,1,300)))])}),u$=function(e){var r=e;return r},nx=function(e){e:for(;;){if(_e(e.ed,Wr)&&_e(e.ee,Wr))return dr;if(a(Cf,wr(e.ed),wr(e.ee))){var r={a3:e.a3,ed:e.ee,ee:e.ed,fi:zi(e.fi)};e=r;continue e}else{var n=be(u$(e.ee)/qn),t=be(u$(e.ed)/qn),i=Tr(e.fi),o=i.io,l=i.is,c=i.dO,u=a(Gi,Kf(1),e.a3),f=u;return{b0:t*oa(f),f0:!1,cf:t*ia(f),$7:n/t,cy:t*ta(f),dD:3,io:o,is:l,dO:c}}}},ax=function(e){return nx({a3:e.a3,ed:e.ed,ee:e.ee,fi:a(Pc,Yn(e.b$),Yn(e.cd))})},tx=v(function(e,r){var n=ay({b$:a(Ar,"azimuth for third light",e),a3:I1(by(2e3)),cd:a(Ar,"elevation for third light",e),cj:Co(a(Ea,10,a(Ar,"lux",e)))}),t=c$({a3:So,cj:l$(6e3),e_:{io:-45,is:-30,dO:45}}),i=ax({b$:a(Ar,"azimuth for fourth light",e),a3:So,cd:a(Ar,"elevation for fourth light",e),ed:Co(a(Ar,"intensity above",e)),ee:Co(a(Ar,"intensity below",e))}),o=c$({a3:hy,cj:l$(6e3),e_:{io:-45,is:30,dO:45}});return a(ey,{fG:wy,fL:ry,fZ:F1(e),f5:.1,cS:e.cS,gs:iy(6),g4:z(fy,o,t,n,i),dw:e.dw,ic:gy,il:So},a(rx,e,r))}),ix=z(c1,tx,d1,s1,u1);const ox={Main:{init:ix(a(Q,function(e){return lr({gX:e})},a(Z,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return lr({b5:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(Z,"clock",We))},a(Z,"devicePixelRatio",We))},a(Z,"dt",We))},a(Z,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(s){return lr({fF:s,gb:m,dZ:f,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(Z,"alt",ze))},a(Z,"control",ze))},a(Z,"down",ze))},a(Z,"downs",pi(za)))},a(Z,"left",ze))},a(Z,"pressedKeys",pi(za)))},a(Z,"right",ze))},a(Z,"shift",ze))},a(Z,"up",ze))))},a(Z,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return lr({dZ:f,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(Z,"down",ze))},a(Z,"isDown",ze))},a(Z,"move",ze))},a(Z,"rightDown",ze))},a(Z,"rightUp",ze))},a(Z,"up",ze))},a(Z,"x",We))},a(Z,"y",We))))},a(Z,"screen",a(Q,function(r){return a(Q,function(n){return lr({gG:n,im:r})},a(Z,"height",We))},a(Z,"width",We))))},a(Z,"wheel",a(Q,function(e){return a(Q,function(r){return lr({gf:r,gg:e})},a(Z,"deltaX",We))},a(Z,"deltaY",We)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},lx=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),t=d=>["ShiftLeft","ShiftRight"].includes(d.code),i=d=>d.code=="ArrowLeft",o=d=>d.code=="ArrowRight",l=d=>d.code=="ArrowUp",c=d=>d.code=="ArrowDown",u=d=>d.button==0,f=d=>d.button==2;function m(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function s(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(oe.keyboard.downs.push(d.code),oe.keyboard.pressedKeys.push(d.code),r(d)&&(oe.keyboard.control=!0),n(d)&&(oe.keyboard.alt=!0),t(d)&&(console.log("yo"),oe.keyboard.shift=!0),i(d)&&(oe.keyboard.left=!0),o(d)&&(oe.keyboard.right=!0),l(d)&&(oe.keyboard.up=!0),c(d)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",d=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(w=>w!=d.code),r(d)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(d)&&(oe.keyboard.alt=!1),t(d)&&(oe.keyboard.shift=!1),i(d)&&(oe.keyboard.left=!1),o(d)&&(oe.keyboard.right=!1),l(d)&&(oe.keyboard.up=!1),c(d)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{oe.pointer.x=-.5*oe.screen.width+d.pageX,oe.pointer.y=.5*oe.screen.height-d.pageY,u(d)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(d)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+d.pageX,oe.pointer.y=.5*oe.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(d)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(d)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{oe.wheel.deltaX=d.deltaX,oe.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{m(oe)}),window.addEventListener("focus",d=>{m(oe)}),window.addEventListener("visibilitychange",d=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(d){const w=d/1e3,_=w-oe.clock;_<.009||(oe.dt=_,oe.clock=w,e.ports.tick.send(oe),s(oe)),window.requestAnimationFrame(b)}},cx=ox.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});lx(cx);
