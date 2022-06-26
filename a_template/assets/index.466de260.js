const Xm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Xm();function Pn(e,r,n){return n.a=e,n.f=r,n}function v(e){return Pn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return Pn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function re(e){return Pn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Ye(e){return Pn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Sr(e){return Pn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function zi(e){return Pn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function ze(e){return Pn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function fc(e){return Pn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,t,i,o,c,l,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function V(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function tr(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function mc(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function gt(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function Qm(e,r,n,t,i,o,c,l,u,f){return e.a===9?e.f(r,n,t,i,o,c,l,u,f):e(r)(n)(t)(i)(o)(c)(l)(u)(f)}var es=[];function rs(e){return e.length}var ns=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),as=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,P(n,r)}),ts=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var is=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+os()),r});function os(e){return"<internals>"}function Ta(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=zo(e,r,0,t);i&&(n=t.pop());i=zo(n.a,n.b,0,t));return i}function zo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ta(5),!1;if(n>100)return t.push(P(e,r)),!0;e.$<0&&(e=Yl(e),r=Yl(r));for(var i in e)if(!zo(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function be(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=be(e.a,r.a))||(n=be(e.b,r.b))?n:be(e.c,r.c);for(;e.b&&r.b&&!(n=be(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return be(e,r)<0});v(function(e,r){return be(e,r)<1});v(function(e,r){return be(e,r)>0});v(function(e,r){return be(e,r)>=0});var cs=v(function(e,r){var n=be(e,r);return n<0?R$:n?Qp:B$}),ht=0;function P(e,r){return{a:e,b:r}}function j(e,r,n){return{a:e,b:r,c:n}}function Re(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Z);function Z(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Yr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Yr(e.a,r);return n}var D={$:0};function Yr(e,r){return{$:1,a:e,b:r}}var ls=v(Yr);function $(e){for(var r=D,n=e.length;n--;)r=Yr(e[n],r);return r}function Mi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var us=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});re(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Ye(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return $(o)});Sr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(Mi(r).sort(function(n,t){return be(e(n),e(t))}))});v(function(e,r){return $(Mi(r).sort(function(n,t){var i=a(e,n,t);return i===B$?0:i===R$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var $s=v(Math.pow);v(function(e,r){return r%e});var vs=v(function(e,r){var n=r%e;return e===0?Ta(11):n>0&&e<0||n<0&&e>0?n+e:n}),fs=Math.PI,ms=Math.cos,ss=Math.sin,ds=Math.tan;v(Math.atan2);function ps(e){return e}function gs(e){return e===1/0||e===-1/0}var hs=Math.ceil,bs=Math.floor,_s=Math.round,ys=Math.sqrt,Il=Math.log,xs=isNaN;function ws(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ss=v(function(e,r){return e+r});function Cs(e){var r=e.charCodeAt(0);return isNaN(r)?J:Y(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function Ls(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Ps(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var zs=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ms=v(function(e,r){return r.split(e)}),Ts=v(function(e,r){return r.join(e)}),ks=M(function(e,r,n){return n.slice(e,r)});function Ds(e){return $(e.trim().split(/\s+/g))}function Vs(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var As=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Is=v(function(e,r){return r.indexOf(e)>-1}),Fs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Es=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function v$(e){return e+""}function Bs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:Y(n==45?-r:r)}function Rs(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?Y(r):J}function js(e){return Mi(e).join("")}function Ns(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Gs(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Hs(e){return{$:0,a:e}}function Ws(e){return{$:1,a:e}}function sc(e){return{$:2,b:e}}var Us=sc(function(e){return typeof e=="boolean"?We(e):Hr("a BOOL",e)}),Os=sc(function(e){return typeof e=="number"?We(e):Hr("a FLOAT",e)}),Js=sc(function(e){return typeof e=="string"?We(e):e instanceof String?We(e+""):Hr("a STRING",e)});function qs(e){return{$:3,b:e}}var Ys=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function zn(e,r){return{$:9,f:e,g:r}}var Zs=v(function(e,r){return{$:10,b:r,h:e}}),Ks=v(function(e,r){return zn(e,[r])}),Xs=M(function(e,r,n){return zn(e,[r,n])});re(function(e,r,n,t){return zn(e,[r,n,t])});Ye(function(e,r,n,t,i){return zn(e,[r,n,t,i])});Sr(function(e,r,n,t,i,o){return zn(e,[r,n,t,i,o])});zi(function(e,r,n,t,i,o,c){return zn(e,[r,n,t,i,o,c])});ze(function(e,r,n,t,i,o,c,l){return zn(e,[r,n,t,i,o,c,l])});fc(function(e,r,n,t,i,o,c,l,u){return zn(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Pr(e,n)}catch(t){return ir(a(Pc,"This is not valid JSON! "+t.message,r))}});var f$=v(function(e,r){return Pr(e,r)});function Pr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?We(e.c):Hr("null",r);case 3:return It(r)?Fl(e.b,r,$):Hr("a LIST",r);case 4:return It(r)?Fl(e.b,r,Qs):Hr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Hr("an OBJECT with a field named `"+n+"`",r);var f=Pr(e.b,r[n]);return Ir(f)?f:ir(a(Zl,n,f.a));case 7:var t=e.e;if(!It(r))return Hr("an ARRAY",r);if(t>=r.length)return Hr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Pr(e.b,r[t]);return Ir(f)?f:ir(a(j$,t,f.a));case 8:if(typeof r!="object"||r===null||It(r))return Hr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Pr(e.b,r[o]);if(!Ir(f))return ir(a(Zl,o,f.a));i=Yr(P(o,f.a),i)}return We(sr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=Pr(l[u],r);if(!Ir(f))return f;c=c(f.a)}return We(c);case 10:var f=Pr(e.b,r);return Ir(f)?Pr(e.h(f.a),r):f;case 11:for(var s=D,p=e.g;p.b;p=p.b){var f=Pr(p.a,r);if(Ir(f))return f;s=Yr(f.a,s)}return ir(e0(sr(s)));case 1:return ir(a(Pc,e.a,r));case 0:return We(e.a)}}function Fl(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Pr(e,r[o]);if(!Ir(c))return ir(a(j$,o,c.a));i[o]=c.a}return We(n(i))}function It(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Qs(e){return a(d0,e.length,function(r){return e[r]})}function Hr(e,r){return ir(a(Pc,"Expecting "+e,r))}function fa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return fa(e.b,r.b);case 6:return e.d===r.d&&fa(e.b,r.b);case 7:return e.e===r.e&&fa(e.b,r.b);case 9:return e.f===r.f&&El(e.g,r.g);case 10:return e.h===r.h&&fa(e.b,r.b);case 11:return El(e.g,r.g)}}function El(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!fa(e[t],r[t]))return!1;return!0}var ed=v(function(e,r){return JSON.stringify(r,null,e)+""});function m$(e){return e}function rd(){return[]}function nd(){return{}}var ad=M(function(e,r,n){return n[e]=r,n});function td(e){return v(function(r,n){return n.push(e(r)),n})}function Kn(e){return{$:0,a:e}}function id(e){return{$:1,a:e}}function fn(e){return{$:2,b:e,c:null}}var Mo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function od(e){return{$:5,b:e}}var cd=0;function dc(e){var r={$:0,e:cd++,f:e,g:null,h:[]};return pc(r),r}function s$(e){return fn(function(r){r(Kn(dc(e)))})}function d$(e,r){e.h.push(r),pc(e)}var ld=v(function(e,r){return fn(function(n){d$(e,r),n(Kn(ht))})}),ro=!1,Bl=[];function pc(e){if(Bl.push(e),!ro){for(ro=!0;e=Bl.shift();)ud(e);ro=!1}}function ud(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,pc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}re(function(e,r,n,t){return gc(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function gc(e,r,n,t,i,o){var c=a(f$,e,r?r.flags:void 0);Ir(c)||Ta(2);var l={},u=n(c.a),f=u.a,s=o(b,f),p=$d(l,b);function b(m,y){var _=a(t,m,f);s(f=_.a,y),jl(l,_.b,i(f))}return jl(l,u.b,i(f)),p?{ports:p}:{}}var Jr={};function $d(e,r){var n;for(var t in Jr){var i=Jr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=fd(i,r)}return n}function vd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function fd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(Mo,l,od(function(f){var s=f.a;return f.$===0?h(i,n,s,u):o&&c?L(t,n,s.i,s.j,u):h(t,n,o?s.i:s.j,u)}))}return n.h=dc(a(Mo,l,e.b))}var md=v(function(e,r){return fn(function(n){e.g(r),n(Kn(ht))})});v(function(e,r){return a(ld,e.h,{$:0,a:r})});function p$(e){return function(r){return{$:1,k:e,l:r}}}function sd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Rl=[],no=!1;function jl(e,r,n){if(Rl.push({p:e,q:r,r:n}),!no){no=!0;for(var t;t=Rl.shift();)dd(t.p,t.q,t.r);no=!1}}function dd(e,r,n){var t={};ii(!0,r,t,null),ii(!1,n,t,null);for(var i in e)d$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ii(e,r,n,t){switch(r.$){case 1:var i=r.k,o=pd(e,i,t,r.l);n[i]=gd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)ii(e,c.a,n,t);return;case 3:ii(e,r.o,n,{s:r.n,t});return}}function pd(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Jr[r].e:Jr[r].f;return a(o,i,t)}function gd(e,r,n){return n=n||{i:D,j:D},e?n.i=Yr(r,n.i):n.j=Yr(r,n.j),n}function hd(e){Jr[e]&&Ta(3)}v(function(e,r){return r});function bd(e,r){return hd(e),Jr[e]={f:_d,u:r,a:yd},p$(e)}var _d=v(function(e,r){return function(n){return e(r(n))}});function yd(e,r){var n=D,t=Jr[e].u,i=Kn(null);Jr[e].b=i,Jr[e].c=M(function(c,l,u){return n=l,i});function o(c){var l=a(f$,t,c);Ir(l)||Ta(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var oi,tn=typeof document!="undefined"?document:{};function hc(e,r){e.appendChild(r)}re(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(_n(e,function(){}),i),{}});function To(e){return{$:0,a:e}}var g$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:_c(n),e:i,f:e,b:o}})}),mn=g$(void 0),xd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:_c(n),e:i,f:e,b:o}})}),wd=xd(void 0);function Sd(e,r,n,t){return{$:3,d:_c(e),g:r,h:n,i:t}}var Cd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Mn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Mn([e,r],function(){return e(r)})});M(function(e,r,n){return Mn([e,r,n],function(){return a(e,r,n)})});var Ld=re(function(e,r,n,t){return Mn([e,r,n,t],function(){return h(e,r,n,t)})});Ye(function(e,r,n,t,i){return Mn([e,r,n,t,i],function(){return L(e,r,n,t,i)})});Sr(function(e,r,n,t,i,o){return Mn([e,r,n,t,i,o],function(){return V(e,r,n,t,i,o)})});zi(function(e,r,n,t,i,o,c){return Mn([e,r,n,t,i,o,c],function(){return tr(e,r,n,t,i,o,c)})});ze(function(e,r,n,t,i,o,c,l){return Mn([e,r,n,t,i,o,c,l],function(){return mc(e,r,n,t,i,o,c,l)})});fc(function(e,r,n,t,i,o,c,l,u){return Mn([e,r,n,t,i,o,c,l,u],function(){return gt(e,r,n,t,i,o,c,l,u)})});var h$=v(function(e,r){return{$:"a0",n:e,o:r}}),Pd=v(function(e,r){return{$:"a1",n:e,o:r}}),bc=v(function(e,r){return{$:"a2",n:e,o:r}}),Rr=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function b$(e){return e=="script"?"p":e}function zd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Md(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Td(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function _$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var kd=v(function(e,r){return r.$==="a0"?a(h$,r.n,Dd(e,r.o)):r});function Dd(e,r){var n=kc(r);return{$:r.$,a:n?h(p0,n<3?Vd:Ad,ur(e),r.a):a($i,e,r.a)}}var Vd=v(function(e,r){return P(e(r.a),r.b)}),Ad=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function _c(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Nl(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?Nl(c,i,o):c[i]=o}return r}function Nl(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function _n(e,r){var n=e.$;if(n===5)return _n(e.k||(e.k=e.m()),r);if(n===0)return tn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=_n(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return ko(c,r,e.d),c}var c=e.f?tn.createElementNS(e.f,e.c):tn.createElement(e.c);oi&&e.c=="a"&&c.addEventListener("click",oi(c)),ko(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)hc(c,_n(n===1?l[u]:l[u].b,r));return c}function ko(e,r,n){for(var t in n){var i=n[t];t==="a1"?Id(e,i):t==="a0"?Bd(e,r,i):t==="a3"?Fd(e,i):t==="a4"?Ed(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Id(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Fd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Ed(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Bd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Rd(r,o),e.addEventListener(i,c,yc&&{passive:kc(o)<2}),t[i]=c}}var yc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yc=!0}}))}catch{}function Rd(e,r){function n(t){var i=n.q,o=Pr(i.a,t);if(!!Ir(o)){for(var c=kc(i),l=o.a,u=c?c<3?l.a:l.aA:l,f=c==1?l.b:c==3&&l.dH,s=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&t.preventDefault(),e),p,b;p=s.j;){if(typeof p=="function")u=p(u);else for(var b=p.length;b--;)u=p[b](u);s=s.p}s(u,f)}}return n.q=r,n}function jd(e,r){return e.$==r.$&&fa(e.a,r.a)}function y$(e,r){var n=[];return Fr(e,r,n,0),n}function ar(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Fr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=qd(r),o=1;else{ar(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var s=[];Fr(e.k,r.k,s,0),s.length>0&&ar(n,1,t,s);return;case 4:for(var p=e.j,b=r.j,m=!1,y=e.k;y.$===4;)m=!0,typeof p!="object"?p=[p,y.j]:p.push(y.j),y=y.k;for(var _=r.k;_.$===4;)m=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(m&&p.length!==b.length){ar(n,0,t,r);return}(m?!Nd(p,b):p!==b)&&ar(n,2,t,b),Fr(y,_,n,t+1);return;case 0:e.a!==r.a&&ar(n,3,t,r.a);return;case 1:Gl(e,r,n,t,Gd);return;case 2:Gl(e,r,n,t,Hd);return;case 3:if(e.h!==r.h){ar(n,0,t,r);return}var S=xc(e.d,r.d);S&&ar(n,4,t,S);var C=r.i(e.g,r.g);C&&ar(n,5,t,C);return}}}function Nd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Gl(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){ar(n,0,t,r);return}var o=xc(e.d,r.d);o&&ar(n,4,t,o),i(e,r,n,t)}function xc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=xc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&jd(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Gd(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?ar(n,6,t,{v:l,i:c-l}):c<l&&ar(n,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var s=i[f];Fr(s,o[f],n,++t),t+=s.b||0}}function Hd(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,s=u.length,p=0,b=0,m=t;p<f&&b<s;){var y=l[p],_=u[b],S=y.a,C=_.a,x=y.b,T=_.b,W=void 0,X=void 0;if(S===C){m++,Fr(x,T,i,m),m+=x.b||0,p++,b++;continue}var ne=l[p+1],te=u[b+1];if(ne){var ie=ne.a,ee=ne.b;X=C===ie}if(te){var q=te.a,de=te.b;W=S===q}if(W&&X){m++,Fr(x,de,i,m),ja(o,i,S,T,b,c),m+=x.b||0,m++,Na(o,i,S,ee,m),m+=ee.b||0,p+=2,b+=2;continue}if(W){m++,ja(o,i,C,T,b,c),Fr(x,de,i,m),m+=x.b||0,p+=1,b+=2;continue}if(X){m++,Na(o,i,S,x,m),m+=x.b||0,m++,Fr(ee,T,i,m),m+=ee.b||0,p+=2,b+=1;continue}if(ne&&ie===q){m++,Na(o,i,S,x,m),ja(o,i,C,T,b,c),m+=x.b||0,m++,Fr(ee,de,i,m),m+=ee.b||0,p+=2,b+=2;continue}break}for(;p<f;){m++;var y=l[p],x=y.b;Na(o,i,y.a,x,m),m+=x.b||0,p++}for(;b<s;){var pe=pe||[],_=u[b];ja(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||c.length>0||pe)&&ar(n,8,t,{w:i,x:c,y:pe})}var x$="_elmW6BL";function ja(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Fr(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}ja(e,r,n+x$,t,i,o)}function Na(e,r,n,t,i){var o=e[n];if(!o){var c=ar(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Fr(t,o.z,l,i),ar(r,9,i,{w:l,A:o});return}Na(e,r,n+x$,t,i)}function w$(e,r,n,t){Ga(e,r,n,0,0,r.b,t)}function Ga(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var f=l.$;if(f===1)w$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Ga(e,r,s,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var p=l.s;if(p){p.A.s=e;var s=p.w;s.length>0&&Ga(e,r,s,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var b=r.$;if(b===4){for(var m=r.k;m.$===4;)m=m.k;return Ga(e,m,n,t,i+1,o,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,S=0;S<y.length;S++){i++;var C=b===1?y[S]:y[S].b,x=i+(C.b||0);if(i<=u&&u<=x&&(t=Ga(_[S],C,n,t,i,x,c),!(l=n[t])||(u=l.r)>o))return t;i=x}return t}function S$(e,r,n,t){return n.length===0?e:(w$(e,r,n,t),ci(e,n))}function ci(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Wd(i,t);i===e&&(e=o)}return e}function Wd(e,r){switch(r.$){case 0:return Ud(e,r.s,r.u);case 4:return ko(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ci(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(_n(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ci(e,o.w),e;case 8:return Od(e,r);case 5:return r.s(e);default:Ta(10)}}function Ud(e,r,n){var t=e.parentNode,i=_n(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Od(e,r){var n=r.s,t=Jd(n.y,r);e=ci(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:_n(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&hc(e,t),e}function Jd(e,r){if(!!e){for(var n=tn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;hc(n,o.c===2?o.s:_n(o.z,r.u))}return n}}function wc(e){if(e.nodeType===3)return To(e.textContent);if(e.nodeType!==1)return To("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Yr(a(Rr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Yr(wc(f[t]),u);return h(mn,l,r,u)}function qd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Yd=re(function(e,r,n,t){return gc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=t.node,u=wc(l);return C$(o,function(f){var s=c(f),p=y$(u,s);l=S$(l,u,p,i),u=s})})});re(function(e,r,n,t){return gc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=tn.title,f=tn.body,s=wc(f);return C$(o,function(p){oi=c;var b=l(p),m=mn("body")(D)(b.fU),y=y$(s,m);f=S$(f,s,y,i),s=m,oi=0,u!==b.id&&(tn.title=u=b.id)})})});var li=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function C$(e,r){r(e);var n=0;function t(){n=n===1?0:(li(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&li(t),n=2)}}v(function(e,r){return a(Vc,_t,fn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Vc,_t,fn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Vc,_t,fn(function(){history.replaceState({},"",r),e()}))});var Zd={addEventListener:function(){},removeEventListener:function(){}},Kd=typeof window!="undefined"?window:Zd;M(function(e,r,n){return s$(fn(function(t){function i(o){dc(n(o))}return e.addEventListener(r,i,yc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Pr(e,r);return Ir(n)?Y(n.a):J});function L$(e,r){return fn(function(n){li(function(){var t=document.getElementById(e);n(t?Kn(r(t)):id(g0(e)))})})}function Xd(e){return fn(function(r){li(function(){r(Kn(e()))})})}v(function(e,r){return L$(r,function(n){return n[e](),ht})});v(function(e,r){return Xd(function(){return Kd.scroll(e,r),ht})});M(function(e,r,n){return L$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,ht})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Qd=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return Y(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var ep=M(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,s=new Array(f);f>0;){var p=u[f];s[--f]=p?Y(p):J}t.push(L(mf,u[0],u.index,i,$(s))),l=r.lastIndex}return r.lastIndex=c,$(t)});re(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?Y(f):J}return n(L(mf,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var rp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/np(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function np(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Sc=new Float64Array(3),Hl=new Float64Array(3),Wl=new Float64Array(3),ap=M(function(e,r,n){return new Float64Array([e,r,n])}),tp=function(e){return e[0]},ip=function(e){return e[1]},op=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var cp=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function P$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(P$);function z$(e,r,n){return n===void 0&&(n=new Float64Array(3)),ui(P$(e,r,n),n)}v(z$);function M$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function ui(e,r){r===void 0&&(r=new Float64Array(3));var n=1/M$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var lp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ha=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ha);function Do(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Do);v(function(e,r){var n,t=Sc,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ha(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ha(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ha(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ha(r,t)+e[14])/n,i});var up=re(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var $p=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},vp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/fp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function fp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var mp=new Float64Array(16),sp=new Float64Array(16),dp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},pp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function T$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}Sr(T$);re(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return T$(c,l,o,i,n,t)});function k$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}Sr(k$);re(function(e,r,n,t){return k$(e,r,n,t,-1,1)});function D$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],s=e[7],p=e[8],b=e[9],m=e[10],y=e[11],_=e[12],S=e[13],C=e[14],x=e[15],T=r[0],W=r[1],X=r[2],ne=r[3],te=r[4],ie=r[5],ee=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],I=r[14],F=r[15];return n[0]=t*T+l*W+p*X+_*ne,n[1]=i*T+u*W+b*X+S*ne,n[2]=o*T+f*W+m*X+C*ne,n[3]=c*T+s*W+y*X+x*ne,n[4]=t*te+l*ie+p*ee+_*q,n[5]=i*te+u*ie+b*ee+S*q,n[6]=o*te+f*ie+m*ee+C*q,n[7]=c*te+s*ie+y*ee+x*q,n[8]=t*de+l*pe+p*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+m*Me+C*Se,n[11]=c*de+s*pe+y*Me+x*Se,n[12]=t*me+l*Te+p*I+_*F,n[13]=i*me+u*Te+b*I+S*F,n[14]=o*me+f*Te+m*I+C*F,n[15]=c*me+s*Te+y*I+x*F,n}v(D$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],s=e[9],p=e[10],b=e[12],m=e[13],y=e[14],_=r[0],S=r[1],C=r[2],x=r[4],T=r[5],W=r[6],X=r[8],ne=r[9],te=r[10],ie=r[12],ee=r[13],q=r[14];return n[0]=t*_+c*S+f*C,n[1]=i*_+l*S+s*C,n[2]=o*_+u*S+p*C,n[3]=0,n[4]=t*x+c*T+f*W,n[5]=i*x+l*T+s*W,n[6]=o*x+u*T+p*W,n[7]=0,n[8]=t*X+c*ne+f*te,n[9]=i*X+l*ne+s*te,n[10]=o*X+u*ne+p*te,n[11]=0,n[12]=t*ie+c*ee+f*q+b,n[13]=i*ie+l*ee+s*q+m,n[14]=o*ie+u*ee+p*q+y,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ui(r,Sc);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/M$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,s=Math.sin(e),p=o*s,b=c*s,m=l*s,y=o*c*f,_=o*l*f,S=c*l*f,C=o*o*f+u,x=y+m,T=_-b,W=y-m,X=c*c*f+u,ne=S+p,te=_+b,ie=S-p,ee=l*l*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],I=n[7],F=n[8],E=n[9],B=n[10],R=n[11],N=n[12],G=n[13],H=n[14],je=n[15];return t[0]=q*C+Se*x+F*T,t[1]=de*C+me*x+E*T,t[2]=pe*C+Te*x+B*T,t[3]=Me*C+I*x+R*T,t[4]=q*W+Se*X+F*ne,t[5]=de*W+me*X+E*ne,t[6]=pe*W+Te*X+B*ne,t[7]=Me*W+I*X+R*ne,t[8]=q*te+Se*ie+F*ee,t[9]=de*te+me*ie+E*ee,t[10]=pe*te+Te*ie+B*ee,t[11]=Me*te+I*ie+R*ee,t[12]=N,t[13]=G,t[14]=H,t[15]=je,t});function gp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(gp);re(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function hp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(hp);re(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],s=t[5],p=t[6],b=t[7],m=t[8],y=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=s,i[6]=p,i[7]=b,i[8]=m,i[9]=y,i[10]=_,i[11]=S,i[12]=o*e+f*r+m*n+t[12],i[13]=c*e+s*r+y*n+t[13],i[14]=l*e+p*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],s=r[4],p=r[5],b=r[6],m=r[7],y=r[8],_=r[9],S=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=s,n[5]=p,n[6]=b,n[7]=m,n[8]=y,n[9]=_,n[10]=S,n[11]=C,n[12]=c*t+s*i+y*o+r[12],n[13]=l*t+p*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+m*i+C*o+r[15],n});M(function(e,r,n){var t=z$(e,r,Sc),i=ui(Do(n,t,Hl),Hl),o=ui(Do(t,i,Wl),Wl),c=mp,l=sp;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,D$(c,l)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var Ul=0;function at(e,r){for(;r.b;r=r.b)e(r.a)}function Cc(e){for(var r=0;e.b;e=e.b)r++;return r}var bp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},_p=Ye(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),yp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),xp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),wp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Sp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Cp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Lp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Pp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),zp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Mp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Tp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},kp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Dp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},V$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},A$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Vp=function(e){e.gl.disable(e.gl.CULL_FACE)},Ap=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Ip=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Fp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Ol=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ep=[Tp,kp,Dp,V$,A$,Vp,Ap,Ip,Fp];function Jl(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Bp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function I$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Rp(e,r,n,t){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(m,y,_,S,C){var x;if(i===1)for(x=0;x<y;x++)m[_++]=y===1?S[C]:S[C][x];else o.forEach(function(T){for(x=0;x<y;x++)m[_++]=y===1?S[T][C]:S[T][C][x]})}var u=I$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,s=u.size*u.arraySize*i,p=new u.type(Cc(n.b)*s);at(function(m){l(p,u.size*u.arraySize,f,m,t[r.name]||r.name),f+=s},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),b}function jp(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=Np(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Cc(r.b),indexBuffer:null,buffers:{}}}function Np(e,r){var n=new Uint32Array(Cc(e)*r),t=0,i;return at(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function ql(e,r){return e+"#"+r}var F$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),V$(n),A$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=ql(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Ul++,f||(f=Jl(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=Ul++,s||(s=Jl(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var p=Bp(t,f,s);l={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Gp(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var m=t.getActiveAttrib(p,u),y=t.getAttribLocation(p,m.name);l.activeAttributes.push(m),l.activeAttributeLocations.push(y)}c=ql(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),Hp(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=jp(t,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){m=l.activeAttributes[u],y=l.activeAttributeLocations[u],_.buffers[m.name]===void 0&&(_.buffers[m.name]=Rp(t,m,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[m.name]);var S=I$(t,m.type);if(S.arraySize===1)t.enableVertexAttribArray(y),t.vertexAttribPointer(y,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,x=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(y+T),t.vertexAttribPointer(y+T,S.size,S.baseType,!1,x,C*T)}for(n.toggle=!n.toggle,at(I_(n),o.a),u=0;u<Ol.length;u++){var W=n[Ol[u]];W.toggle!==n.toggle&&W.enabled&&(Ep[u](n),W.enabled=!1,W.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return at(i,e.g),r});function Gp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(m,y){var _=y.name,S=e.getUniformLocation(m,_);switch(y.type){case e.INT:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};case e.FLOAT:return function(x){o[_]!==x&&(e.uniform1f(S,x),o[_]=x)};case e.FLOAT_VEC2:return function(x){o[_]!==x&&(e.uniform2f(S,x[0],x[1]),o[_]=x)};case e.FLOAT_VEC3:return function(x){o[_]!==x&&(e.uniform3f(S,x[0],x[1],x[2]),o[_]=x)};case e.FLOAT_VEC4:return function(x){o[_]!==x&&(e.uniform4f(S,x[0],x[1],x[2],x[3]),o[_]=x)};case e.FLOAT_MAT4:return function(x){o[_]!==x&&(e.uniformMatrix4fv(S,!1,new Float32Array(x)),o[_]=x)};case e.SAMPLER_2D:var C=c++;return function(x){e.activeTexture(e.TEXTURE0+C);var T=l.textures.get(x);T||(T=x.ge(e),l.textures.set(x,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==x&&(e.uniform1i(S,C),o[_]=x)};case e.BOOL:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};default:return function(){}}}for(var f={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<s;p++){var b=e.getActiveUniform(i,p);f[t[b.name]||b.name]=u(i,b)}return f}function Hp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Wp=M(function(e,r,n){return Sd(r,{g:n,f:{},h:e},Kp,Xp)}),Up=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Op=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Jp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),qp=v(function(e,r){e.contextAttributes.antialias=!0}),Yp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Zp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Kp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};at(function(i){return a(A_,r,i)},e.h);var n=tn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),bp(function(){return a(F$,e,n)})):(n=tn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Xp(e,r){return r.f=e.f,F$(r)}var z=ls,Ft=is,E$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(Ft,e,l,f)}else{var u=c.a;return h(Ft,o,l,u)}});return h(Ft,o,h(Ft,e,r,i),t)}),Lc=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,t,i,h(Lc,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),Yl=function(e){return h(Lc,M(function(r,n,t){return a(z,P(r,n),t)}),D,e)},B$=1,Qp=2,R$=0,ir=function(e){return{$:1,a:e}},Pc=v(function(e,r){return{$:3,a:e,b:r}}),Zl=v(function(e,r){return{$:0,a:e,b:r}}),j$=v(function(e,r){return{$:1,a:e,b:r}}),We=function(e){return{$:0,a:e}},e0=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},J={$:1},r0=As,n0=ed,k=v$,le=v(function(e,r){return a(Ts,e,Mi(r))}),zc=v(function(e,r){return $(a(Ms,e,r))}),N$=function(e){return a(le,`
    `,a(zc,`
`,e))},He=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),Un=function(e){return h(He,v(function(r,n){return n+1}),0,e)},a0=us,t0=M(function(e,r,n){e:for(;;)if(be(e,r)<1){var t=e,i=r-1,o=a(z,r,n);e=t,r=i,n=o;continue e}else return n}),on=v(function(e,r){return h(t0,e,r,D)}),G$=v(function(e,r){return h(a0,e,a(on,0,Un(r)-1),r)}),qr=Ns,H$=function(e){var r=qr(e);return 97<=r&&r<=122},W$=function(e){var r=qr(e);return r<=90&&65<=r},i0=function(e){return H$(e)||W$(e)},o0=function(e){var r=qr(e);return r<=57&&48<=r},c0=function(e){return H$(e)||W$(e)||o0(e)},sr=function(e){return h(He,z,D,e)},ka=Cs,l0=v(function(e,r){return`

(`+(k(e+1)+(") "+N$(u0(r))))}),u0=function(e){return a($0,e,D)},$0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=ka(n);if(_.$===1)return!1;var S=_.a,C=S.a,x=S.b;return i0(C)&&a(r0,c0,x)}(),i=t?"."+n:"['"+(n+"']"),u=c,f=a(z,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(k(o)+"]"),u=c,f=a(z,l,r);e=u,r=f;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+a(le,"",sr(r)):"Json.Decode.oneOf"}(),y=p+(" failed in the following "+(k(Un(s))+" ways:"));return a(le,`

`,a(z,y,a(G$,l0,s)))}else{var c=s.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(le,"",sr(r)):"!"}();default:var b=e.a,m=e.b,y=function(){return r.b?"Problem with the value at json"+(a(le,"",sr(r))+`:

    `):`Problem with the given value:

`}();return y+(N$(a(n0,4,m))+(`

`+b))}}),xr=32,Vo=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ao=es,tt=hs,Mc=v(function(e,r){return Il(r)/Il(e)}),Wa=ps,it=tt(a(Mc,2,xr)),U$=L(Vo,0,it,Ao,Ao),O$=ns,J$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var q$=bs,Io=rs,nr=v(function(e,r){return be(e,r)>0?e:r}),v0=function(e){return{$:0,a:e}},Tc=as,f0=v(function(e,r){e:for(;;){var n=a(Tc,xr,e),t=n.a,i=n.b,o=a(z,v0(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return sr(o)}}),Y$=function(e){var r=e.a;return r},m0=v(function(e,r){e:for(;;){var n=tt(r/xr);if(n===1)return a(Tc,xr,e).a;var t=a(f0,e,D),i=n;e=t,r=i;continue e}}),Z$=v(function(e,r){if(r.n){var n=r.n*xr,t=q$(a(Mc,xr,n-1)),i=e?sr(r.C):r.C,o=a(m0,i,r.n);return L(Vo,Io(r.r)+n,a(nr,5,t*it),o,r.r)}else return L(Vo,Io(r.r),it,Ao,r.r)}),s0=Ye(function(e,r,n,t,i){e:for(;;){if(r<0)return a(Z$,!1,{C:t,n:n/xr|0,r:i});var o=J$(h(O$,xr,r,e)),c=e,l=r-xr,u=n,f=a(z,o,t),s=i;e=c,r=l,n=u,t=f,i=s;continue e}}),d0=v(function(e,r){if(e<=0)return U$;var n=e%xr,t=h(O$,n,e-n,r),i=e-n-xr;return V(s0,r,i,e,D,t)}),Ir=function(e){return!e.$},Q=Zs,Pe=Us,K=Ys,Ue=Os,K$=v(function(e,r){return{bt:r.bt,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),$i=Ks,p0=Xs,ur=Hs,kc=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Br=function(e){return e},g0=Br,Kl=Sr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),h0=Is,En=Ls,ma=ks,bt=v(function(e,r){return e<1?r:h(ma,e,En(r),r)}),Ti=Es,ki=function(e){return e===""},Di=v(function(e,r){return e<1?"":h(ma,0,e,r)}),X$=Bs,Xl=Ye(function(e,r,n,t,i){if(ki(i)||a(h0,"@",i))return J;var o=a(Ti,":",i);if(o.b){if(o.b.b)return J;var c=o.a,l=X$(a(bt,c+1,i));if(l.$===1)return J;var u=l;return Y(tr(Kl,e,a(Di,c,i),u,r,n,t))}else return Y(tr(Kl,e,i,J,r,n,t))}),Ql=re(function(e,r,n,t){if(ki(t))return J;var i=a(Ti,"/",t);if(i.b){var o=i.a;return V(Xl,e,a(bt,o,t),r,n,a(Di,o,t))}else return V(Xl,e,"/",r,n,t)}),eu=M(function(e,r,n){if(ki(n))return J;var t=a(Ti,"?",n);if(t.b){var i=t.a;return L(Ql,e,Y(a(bt,i+1,n)),r,a(Di,i,n))}else return L(Ql,e,J,r,n)});v(function(e,r){if(ki(r))return J;var n=a(Ti,"#",r);if(n.b){var t=n.a;return h(eu,e,Y(a(bt,t+1,r)),a(Di,t,r))}else return h(eu,e,J,r)});var b0=Fs,_t=function(e){},yt=Kn,_0=yt(0),Q$=re(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var s=f.a,p=f.b,b=n>500?h(He,e,r,sr(p)):L(Q$,e,r,n+1,p);return a(e,i,a(e,c,a(e,u,a(e,s,b))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),er=M(function(e,r,n){return L(Q$,e,r,0,n)}),ae=v(function(e,r){return h(er,v(function(n,t){return a(z,e(n),t)}),D,r)}),vi=Mo,Dc=v(function(e,r){return a(vi,function(n){return yt(e(n))},r)}),y0=M(function(e,r,n){return a(vi,function(t){return a(vi,function(i){return yt(a(e,t,i))},n)},r)}),x0=function(e){return h(er,y0(z),yt(D),e)},w0=md,S0=v(function(e,r){var n=r;return s$(a(vi,w0(e),n))}),C0=M(function(e,r,n){return a(Dc,function(t){return 0},x0(a(ae,S0(e),r)))}),L0=M(function(e,r,n){return yt(0)}),P0=v(function(e,r){var n=r;return a(Dc,e,n)});Jr.Task=vd(_0,C0,L0,P0);var z0=p$("Task"),Vc=v(function(e,r){return z0(a(Dc,e,r))}),M0=Yd,T0=ws,fi={$:1},ev=function(e){return{$:2,a:e}},Ac={$:0},Mr=v(function(e,r){return{$:0,a:e,b:r}}),Ke=M(function(e,r,n){return r(e(n))}),Xn=function(e){var r=e.b.s;return r.a},k0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return Y(a(Mr,r,{s:o,an:c,X:a(z,t,n)}))}else return J},Be=v(function(e,r){if(r.$)return e;var n=r.a;return n}),D0=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dI;return(be(o+r.gp,Xn(n).bt)>0?a(Ke,k0,Be(a(Mr,fi,i))):Br)(a(Mr,ev({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,f=a(K$,l.gb,Re(r,{bt:l.bt+r.gp})),s=a(e,f,u);return a(Mr,Ac,{s:P(f,s),an:D,X:a(z,i.s,i.X)})}}),rv=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),V0=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(z,t,n);e=o,r=c,n=l;continue e}else return n}}),A0=v(function(e,r){return sr(h(V0,e,r,D))}),nv=M(function(e,r,n){if(r<=0)return D;{var t=P(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,x=i.a,o=i.b,c=o.a;return $([x,c]);case 3:if(t.b.b.b.b){var l=t.b,x=l.a,u=l.b,c=u.a,f=u.b,s=f.a;return $([x,c,s])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,x=p.a,b=p.b,c=b.a,m=b.b,s=m.a,y=m.b,_=y.a,S=y.b;return e>1e3?a(z,x,a(z,c,a(z,s,a(z,_,a(A0,r-4,S))))):a(z,x,a(z,c,a(z,s,a(z,_,h(nv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,x=C.a;return $([x])}}),I0=v(function(e,r){return h(nv,0,e,r)}),F0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Z(sr(n),Z($([t]),i)),c=a(I0,e,o),l=a(rv,e,o);if(l.b){var u=l.a,f=l.b;return a(Mr,fi,{s:u,an:f,X:sr(c)})}else{var s=sr(c);if(s.b){var p=s.a,b=s.b;return a(Mr,fi,{s:p,an:D,X:b})}else return r}}),E0=function(e){var r=e.b;return a(Mr,fi,r)},B0=function(e){var r=e.b;return a(Mr,ev({dI:Xn(e).bt}),r)},R0=function(e){var r=e.b;return a(Mr,Ac,r)},j0=v(function(e,r){switch(e.$){case 1:return E0(r);case 2:return R0(r);case 3:return B0(r);default:var n=e.a;return a(F0,n,r)}}),mi=v(function(e,r){var n=r.a,t=r.b;return P(e(n),t)}),N0=v(function(e,r){return Re(r,{aN:e(r.aN)})}),G0=function(e){return{$:3,a:e}},H0=function(e){return{$:2,a:e}},W0=v(function(e,r){return{$:0,a:e,b:r}}),U0=v(function(e,r){return{$:1,a:e,b:r}}),Ne=v(function(e,r){if(r.$)return J;var n=r.a;return Y(e(n))}),he=function(e){return e<0?-e:e},av=Rs,O0=M(function(e,r,n){return a(Be,0/0,av(a(e,r,n)))}),xt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),J0=zs,tv=function(e){return h(J0,z,D,e)},q0=v(function(e,r){var n=a(xt,function(t){return t!=="0"&&t!=="."},tv(r));return Z(e&&n?"-":"",r)}),ve=v$,Fo=Ss,iv=Gs,ov=function(e){var r=e.a,n=e.b;if(r==="9"){var t=ka(n);if(t.$===1)return"01";var i=t.a;return a(Fo,"0",ov(i))}else{var o=qr(r);return o>=48&&o<57?a(Fo,iv(o+1),n):"0"}},Eo=gs,Y0=xs,Vi=function(e){return a(Fo,e,"")},cv=M(function(e,r,n){return e<=0?n:h(cv,e>>1,Z(r,r),e&1?Z(n,r):n)}),ot=v(function(e,r){return h(cv,e,r,"")}),Bo=M(function(e,r,n){return Z(n,a(ot,e-En(n),Vi(r)))}),Ro=Ps,lv=function(e){var r=a(zc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Z0=function(e){var r=a(zc,"e",ve(he(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Be,0,X$(a(b0,"+",i)?a(bt,1,i):i)),c=lv(n),l=c.a,u=c.b,f=Z(l,u),s=o<0?a(Be,"0",a(Ne,function(p){var b=p.a,m=p.b;return b+("."+m)},a(Ne,mi(Vi),ka(Z(a(ot,he(o),"0"),f))))):h(Bo,o+1,"0",f);return Z(e<0?"-":"",s)}else{var n=r.a;return Z(e<0?"-":"",n)}else return""},K0=M(function(e,r,n){if(Eo(n)||Y0(n))return ve(n);var t=n<0,i=lv(Z0(he(n))),o=i.a,c=i.b,l=En(o)+r,u=Z(a(ot,-l+1,"0"),h(Bo,l,"0",Z(o,c))),f=En(u),s=a(nr,1,l),p=a(e,t,h(ma,s,f,u)),b=h(ma,0,s,u),m=p?Ro(a(Be,"1",a(Ne,ov,ka(Ro(b))))):b,y=En(m),_=m==="0"?m:r<=0?Z(m,a(ot,he(r),"0")):be(r,En(c))<0?h(ma,0,y-r,m)+("."+h(ma,y-r,y,m)):Z(o+".",h(Bo,r,"0",c));return a(q0,t,_)}),uv=K0(v(function(e,r){var n=ka(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(qr(i))})),X0=O0(uv),Q0=M(function(e,r,n){var t=a(Mc,10,he(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(X0,i,n)}),$v=cs,Ic=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,c=a($v,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return Y(t);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=Ye(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Zr={$:-2},wa=Ye(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,s=t.c,p=t.d,b=t.e;return V(fe,0,r,n,V(fe,1,f,s,p,b),V(fe,1,o,c,l,u))}else return V(fe,e,o,c,V(fe,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,s=t.c,m=t.d;m.a;var y=m.b,_=m.c,S=m.d,C=m.e,b=t.e;return V(fe,0,f,s,V(fe,1,y,_,S,C),V(fe,1,r,n,b,i))}else return V(fe,e,r,n,t,i)}),jo=M(function(e,r,n){if(n.$===-2)return V(fe,0,e,r,Zr,Zr);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a($v,e,i);switch(u){case 0:return V(wa,t,i,o,h(jo,e,r,c),l);case 1:return V(fe,t,i,r,c,l);default:return V(wa,t,i,o,c,h(jo,e,r,l))}}),Ka=M(function(e,r,n){var t=h(jo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return V(fe,1,i,o,c,l)}else{var u=t;return u}}),eg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},vv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var s=f.b,p=f.c,b=f.d;b.a;var m=b.b,y=b.c,_=b.d,S=b.e,C=f.e;return V(fe,0,m,y,V(fe,1,n,t,V(fe,0,o,c,l,u),_),V(fe,1,s,p,S,C))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,u=x.e,T=e.e;T.a;var s=T.b,p=T.c,b=T.d,C=T.e;return V(fe,1,n,t,V(fe,0,o,c,l,u),V(fe,0,s,p,b,C))}else return e},ru=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,s=l.d,p=l.e,b=i.e,m=e.e;m.a;var y=m.b,_=m.c,S=m.d,C=m.e;return V(fe,0,o,c,V(fe,1,u,f,s,p),V(fe,1,n,t,b,V(fe,0,y,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,T=x.d,b=x.e,W=e.e;W.a;var y=W.b,_=W.c,S=W.d,C=W.e;return V(fe,1,n,t,V(fe,0,o,c,T,b),V(fe,0,y,_,S,C))}else return e},rg=zi(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,s=o.e;return V(fe,n,l,u,f,V(fe,0,t,i,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var p=c.d;return p.a,ru(r)}else break e;else return c.a,c.d,ru(r);else break e;return r}}),Zt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(fe,r,n,t,Zt(i),l);var u=vv(e);if(u.$===-1){var f=u.a,s=u.b,p=u.c,b=u.d,m=u.e;return V(wa,f,s,p,Zt(b),m)}else return Zr}else return V(fe,r,n,t,Zt(i),l)}else return Zr},Xa=v(function(e,r){if(r.$===-2)return Zr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(be(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(fe,n,t,i,a(Xa,e,o),c);var u=vv(r);if(u.$===-1){var f=u.a,s=u.b,p=u.c,b=u.d,m=u.e;return V(wa,f,s,p,a(Xa,e,b),m)}else return Zr}else return V(fe,n,t,i,a(Xa,e,o),c);else return a(ng,e,mc(rg,e,r,n,t,i,o,c))}),ng=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(_e(e,t)){var l=eg(c);if(l.$===-1){var u=l.b,f=l.c;return V(wa,n,u,f,o,Zt(c))}else return Zr}else return V(wa,n,t,i,o,a(Xa,e,c))}else return Zr}),ag=v(function(e,r){var n=a(Xa,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return V(fe,1,t,i,o,c)}else{var l=n;return l}}),Et=M(function(e,r,n){var t=r(a(Ic,e,n));if(t.$)return a(ag,e,n);var i=t.a;return h(Ka,e,i,n)}),tg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Et,r,Ne(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(U0,P(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Et,r,Ne(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(W0,P(o,c),h(Q0,o,c,n))}));case 3:var r=e.a,n=e.b;return a(Et,r,Ne(function(t){return t.$===3?G0(n):t}));default:var r=e.a,n=e.b;return a(Et,r,Ne(function(t){return t.$===2?H0(n):t}))}},ig=function(e){return N0(tg(e))},og=v(function(e,r){return a(ae,ig(e),r)}),cg=v(function(e,r){return Re(r,{gb:a(og,e,r.gb)})}),lg=v(function(e,r){var n=r.a,t=r.b;return a(Mr,n,Re(t,{s:a(mi,cg(e),t.s)}))}),No=v(function(e,r){var n=r.a,t=r.b;return P(n,e(t))}),ug=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Mr,t,Re(i,{s:a(No,a(e,o.a,r),o)}))}),$g=re(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Re(t,{bx:!t.bx});case 2:var i=n.a;return Re(t,{R:h(D0,e,i,t.R)});case 3:var o=n.a;return Re(t,{bp:o});case 4:var c=n.a;return Re(t,{R:a(lg,c,t.R)});case 5:var l=n.a;return Re(t,{R:h(ug,r,l,t.R)});default:var u=n.a;return Re(t,{R:a(j0,u,t.R)})}}),vg=v(function(e,r){return a(Mr,Ac,{s:P(e,r(e)),an:D,X:D})}),fg=sd,nu=fg(D),mg=function(e){return{$:2,a:e}},si=qs,Sa=Js,sg=bd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({bt:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(s){return a(Q,function(p){return ur({fJ:p,gd:s,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",si(Sa)))},a(K,"left",Pe))},a(K,"pressedKeys",si(Sa)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue))))),dg=function(e){return e.dO,sg(mg)},pg=function(e){return{$:5,a:e}},gg={$:0},di=v(function(e,r){return e}),hg=function(e){var r=e.b.s;return r.b},bg=function(e){return{$:1,a:e}},_g=bg,fv=function(e){return{$:8,a:e}},we=fv,ct=function(e){return{$:0,a:e}},wt=M(function(e,r,n){return e(r(n))}),yg=a(wt,ct,di),hn=yg,Ae=function(e){return{$:1,a:e}},rn=Ae,mv=v(function(e,r){return{$:9,a:e,b:r}}),On={$:0},sv=v(function(e,r){return r.$===3?On:a(mv,e,r)}),Go=function(e){return a(sv,4,e)},d={fy:"a",cM:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cN:"ah",cO:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b2:"bn",fZ:"bs",b5:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bu:"cl",cc:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",cj:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cG:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Fc=m$,Dr=v(function(e,r){return a(bc,e,Fc(r))}),zr=Dr("className"),yr=function(e){return Ae(zr(e))},dv=v(function(e,r){return{$:2,a:e,b:r}}),xg=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},wr=2,wg={$:0},Qn=wg,Sg={$:0},Cg=d.fK+(" "+d.aw),Lg=d.fK+(" "+d.gC),Pg=d.fK+(" "+d.eY),zg=d.fK+(" "+d.eZ),Mg=d.fK+(" "+d.af),Tg=d.fK+(" "+d.hL),kg=function(e){switch(e){case 0:return Mg;case 1:return Cg;case 2:return Tg;case 3:return Lg;case 4:return zg;default:return Pg}},au=function(e){return{$:1,a:e}},Fn={$:0},Ho=function(e){return{$:1,a:e}},tu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Z(n,e);case 2:var t=r.a;return Z(e,t);default:var n=r.a,t=r.b;return Z(n,Z(e,t))}}),iu=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Z(a(ae,function(o){return P(e,o)},t),r);case 2:var i=n.a;return Z(r,a(ae,function(o){return P(e,o)},i));default:var t=n.a,i=n.b;return Z(a(ae,function(o){return P(e,o)},t),Z(r,a(ae,function(o){return P(e,o)},i)))}}),Bt=4,Dg=function(e){return{$:0,a:e}},Vg=function(e){return{$:1,a:e}},xe=function(e){return e>31?Vg(1<<e-32):Dg(1<<e)},pv=xe(41),gv=xe(40),hv=xe(42),bv=xe(43),Ca=mn("div"),_v=Zr,yv=_v,Ur=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Ur(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Ur(o))}},Fe=_s,Ee=function(e){return k(Fe(e*255))},Ec=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Ee(n)+("-"+(Ee(t)+("-"+Ee(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,s=f.a,p=f.b,b=f.c,m=e.c,y=m.a,_=m.b,S=m.c,C=e.d;return Y("tfrm-"+(Ee(c)+("-"+(Ee(l)+("-"+(Ee(u)+("-"+(Ee(s)+("-"+(Ee(p)+("-"+(Ee(b)+("-"+(Ee(y)+("-"+(Ee(_)+("-"+(Ee(S)+("-"+Ee(C))))))))))))))))))))}},lt=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(le,"-",a(ae,Ur,i.hB))+("-cols-"+(a(le,"-",a(ae,Ur,i.ak))+("-space-x-"+(Ur(i.hP.a)+("-space-y-"+Ur(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(le," ",a(ae,function(s){var p=lt(s);if(p==="")return"";var b=p;return b+("-"+u)},l));default:var f=e.a;return a(Be,"",Ec(f))}},Ag=v(function(e,r){var n=r;return h(Ka,e,0,n)}),Ig=v(function(e,r){var n=a(Ic,e,r);return!n.$}),Fg=v(function(e,r){var n=r;return a(Ig,e,n)}),xv=v(function(e,r){var n=r.a,t=r.b,i=lt(e);return a(Fg,i,n)?r:P(a(Ag,i,n),a(z,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),Qa=v(function(e,r){return{$:0,a:e,b:r}}),w=function(e){return"."+e},Eg=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(z,i,n)}),Jn=v(function(e,r){return h(er,Eg(e),D,r)}),sa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Fe(r*255))+(","+k(Fe(n*255))+(","+k(Fe(t*255))+(","+(ve(i)+")")))))},Wo=function(e){return a(le," ",a(Jn,Br,$([e.ej?Y("inset"):J,Y(ve(e.eV.a)+"px"),Y(ve(e.eV.b)+"px"),Y(ve(e.a2)+"px"),Y(ve(e.bi)+"px"),Y(sa(e.b7))])))},wv=function(e){return $([a(Qa,w(d.ea)+":focus-within",a(Jn,Br,$([a(Ne,function(r){return a(ue,"border-color",sa(r))},e.fW),a(Ne,function(r){return a(ue,"background-color",sa(r))},e.fO),a(Ne,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b7:r.b7,ej:!1,eV:a(No,Wa,a(mi,Wa,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))]))),a(Qa,w(d.fK)+":focus .focusable, "+(w(d.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(w(d.fK)+" .focusable-thumb"))),a(Jn,Br,$([a(Ne,function(r){return a(ue,"border-color",sa(r))},e.fW),a(Ne,function(r){return a(ue,"background-color",sa(r))},e.fO),a(Ne,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b7:r.b7,ej:!1,eV:a(No,Wa,a(mi,Wa,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))])))])},Wr=function(e){return mn(b$(e))},Sv=v(function(e,r){return a(bc,Md(e),_$(r))}),ao=v(function(e,r){return{$:2,a:e,b:r}}),Bc=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),gr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),Bg=v(function(e,r){return{$:3,a:e,b:r}}),Cv=$([0,1,2,3,4,5]),Rg=v(function(e,r){return r.b?h(er,z,r,e):e}),dr=function(e){return h(er,Rg,D,e)},Da=v(function(e,r){return dr(a(ae,e,r))}),jg=function(e){switch(e){case 0:return w(d.gc);case 1:return w(d.ca);case 2:return w(d.cc);case 3:return w(d.bu);case 4:return w(d.cb);default:return w(d.ax)}},pi=function(e){switch(e){case 0:return w(d.fH);case 1:return w(d.fA);case 2:return w(d.dZ);case 3:return w(d.dY);case 4:return w(d.fB);default:return w(d.fC)}},Ua=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,jg(n),i),a(O,w(d.fK),$([a(A,pi(n),o)]))])};return Bc(a(Da,r,Cv))},ou=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,w(d.c_),$([a(g,"z-index","0"),a(O,w(d.fQ),$([a(g,"z-index","-1")]))])),a(A,w(d.hG),$([a(O,w(d.Y),$([a(A,w(d.c0),$([a(g,"flex-grow","0")])),a(A,w(d.dQ),$([a(g,"align-self","auto !important")]))]))])),a(O,w(d.c$),$([a(g,"height","auto")])),a(O,w(d.c0),$([a(g,"flex-grow","100000")])),a(O,w(d.dQ),$([a(g,"width","100%")])),a(O,w(d.fv),$([a(g,"width","100%")])),a(O,w(d.dP),$([a(g,"align-self","flex-start")])),Ua(function(e){switch(e){case 0:return P($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return P($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return P($([a(O,w(d.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Ng=function(e){var r=function(n){return $([a(O,w(d.fK),$([a(A,pi(n),e(n))]))])};return Bc(a(Da,r,Cv))},Gg=function(){return $([0,1,2,3,4,5])}(),Hg=$([a(gr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(gr,Z(w(d.fK),Z(w(d.hL),w(d.gN))),$([a(g,"display","block"),a(A,w(d.c0),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,w(d.dQ),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(gr,w(d.fK)+":focus",$([a(g,"outline","none")])),a(gr,w(d.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,Z(w(d.fK),w(d.c0)),$([a(g,"height","100%"),a(O,w(d.c0),$([a(g,"height","100%")]))])),a(O,w(d.gP),$([a(A,w(d.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(gr,w(d.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,w(d.hL),ou),Bc(function(e){return a(ae,e,Gg)}(function(e){switch(e){case 0:return a(A,w(d.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,w(d.c0),$([a(g,"height","auto")])),a(O,w(d.dQ),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,w(d.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,w(d.c0),$([a(g,"height","auto")]))]));case 2:return a(A,w(d.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,w(d.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,w(d.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,w(d.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(gr,w(d.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,w(d.dR),$([a(g,"flex-wrap","wrap")])),a(A,w(d.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,w(d.gf),$([a(g,"cursor","pointer")])),a(A,w(d.gg),$([a(g,"cursor","text")])),a(A,w(d.hn),$([a(g,"pointer-events","none !important")])),a(A,w(d.b5),$([a(g,"pointer-events","auto !important")])),a(A,w(d.a$),$([a(g,"opacity","0")])),a(A,w(d.aU),$([a(g,"opacity","1")])),a(A,w(Z(d.gK,d.a$))+":hover",$([a(g,"opacity","0")])),a(A,w(Z(d.gK,d.aU))+":hover",$([a(g,"opacity","1")])),a(A,w(Z(d.gx,d.a$))+":focus",$([a(g,"opacity","0")])),a(A,w(Z(d.gx,d.aU))+":focus",$([a(g,"opacity","1")])),a(A,w(Z(d.cM,d.a$))+":active",$([a(g,"opacity","0")])),a(A,w(Z(d.cM,d.aU))+":active",$([a(g,"opacity","1")])),a(A,w(d.fj),$([a(g,"transition",a(le,", ",a(ae,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,w(d.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,w(d.hE),$([a(g,"overflow-x","auto"),a(A,w(d.af),$([a(g,"flex-shrink","1")]))])),a(A,w(d.hF),$([a(g,"overflow-y","auto"),a(A,w(d.aw),$([a(g,"flex-shrink","1")])),a(A,w(d.hL),$([a(g,"flex-shrink","1")]))])),a(A,w(d.f7),$([a(g,"overflow","hidden")])),a(A,w(d.f8),$([a(g,"overflow-x","hidden")])),a(A,w(d.f9),$([a(g,"overflow-y","hidden")])),a(A,w(d.dP),$([a(g,"width","auto")])),a(A,w(d.b2),$([a(g,"border-width","0")])),a(A,w(d.fX),$([a(g,"border-style","dashed")])),a(A,w(d.fY),$([a(g,"border-style","dotted")])),a(A,w(d.fZ),$([a(g,"border-style","solid")])),a(A,w(d.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,w(d.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,w(d.hL),ou),a(A,w(d.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,w(d.fK),$([a(g,"flex-basis","0%"),a(A,w(d.fu),$([a(g,"flex-basis","auto")])),a(A,w(d.et),$([a(g,"flex-basis","auto")]))])),a(O,w(d.c0),$([a(g,"align-self","stretch !important")])),a(O,w(d.ef),$([a(g,"align-self","stretch !important")])),a(O,w(d.dQ),$([a(g,"flex-grow","100000")])),a(O,w(d.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+d.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,w(d.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,w(d.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,w(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fG+(" ~ s."+d.fE)),$([a(g,"flex-grow","0")])),Ua(function(e){switch(e){case 0:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return P($([a(g,"justify-content","flex-end")]),D);case 3:return P($([a(g,"justify-content","flex-start")]),D);case 4:return P($([a(g,"justify-content","center")]),D);default:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,w(d.hO),$([a(g,"justify-content","space-between")])),a(A,w(d.cj),$([a(g,"align-items","baseline")]))])),a(A,w(d.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,w(d.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,w(d.ee),$([a(g,"flex-basis","auto")]))])),a(O,w(d.c0),$([a(g,"flex-grow","100000")])),a(O,w(d.dQ),$([a(g,"width","100%")])),a(O,w(d.fv),$([a(g,"width","100%")])),a(O,w(d.dP),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+d.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,w(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,w(d.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,w(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fD+(" ~ s."+d.fF)),$([a(g,"flex-grow","0")])),Ua(function(e){switch(e){case 0:return P($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return P($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return P($([a(g,"justify-content","center")]),D)}}),a(O,w(d.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,w(d.hO),$([a(g,"justify-content","space-between")]))])),a(A,w(d.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,w(d.fK),$([a(g,"width","100%")]))])),a(Bg,P("display","grid"),$([P("display","grid")])),Ng(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,w(d.eY),$([a(g,"display","block"),a(O,w(d.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,w(d.fK+(pi(3)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),a(O,w(d.fK+(pi(2)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),Ua(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return P(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return P(D,D);default:return P(D,D)}})])),a(A,w(d.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,w(d.gW),$([a(A,w(d.hL),$([a(g,"flex-basis","auto")]))])),a(A,w(d.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,w(d.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,w(d.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,w(d.c_),$([a(g,"z-index","0"),a(O,w(d.fQ),$([a(g,"z-index","-1")]))])),a(ao,w(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(ao,w(d.eZ),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(ao,w(d.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,w(d.fu),$([a(g,"display","inline-block")])),a(A,w(d.gP),$([a(g,"display","flex")])),a(A,w(d.fQ),$([a(g,"display","flex")])),a(A,w(d.fy),$([a(g,"display","flex")])),a(A,w(d.fR),$([a(g,"display","flex")])),a(A,w(d.hh),$([a(g,"display","flex")])),a(A,w(d.hg),$([a(g,"display","flex")])),a(O,w(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,w(d.af),$([a(g,"display","inline")])),a(O,w(d.aw),$([a(g,"display","inline-flex")])),a(O,w(d.gC),$([a(g,"display","inline-grid")])),Ua(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([a(g,"float","right")]));case 3:return P(D,$([a(g,"float","left")]));case 4:return P(D,D);default:return P(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,w(d.ia),$([a(g,"font-weight","100")])),a(A,w(d.h1),$([a(g,"font-weight","200")])),a(A,w(d.h5),$([a(g,"font-weight","300")])),a(A,w(d.h7),$([a(g,"font-weight","400")])),a(A,w(d.h6),$([a(g,"font-weight","500")])),a(A,w(d.h9),$([a(g,"font-weight","600")])),a(A,w(d.fV),$([a(g,"font-weight","700")])),a(A,w(d.h0),$([a(g,"font-weight","800")])),a(A,w(d.h2),$([a(g,"font-weight","900")])),a(A,w(d.g2),$([a(g,"font-style","italic")])),a(A,w(d.hU),$([a(g,"text-decoration","line-through")])),a(A,w(d.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,Z(w(d.ih),w(d.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,w(d.ib),$([a(g,"font-style","normal")])),a(A,w(d.h3),$([a(g,"text-align","justify")])),a(A,w(d.cG),$([a(g,"text-align","justify-all")])),a(A,w(d.h$),$([a(g,"text-align","center")])),a(A,w(d.h8),$([a(g,"text-align","right")])),a(A,w(d.h4),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),sn=function(e){return $([a(gr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(gr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},Wg=dr($([a(ae,function(e){return a(gr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(on,0,6)),a(ae,function(e){return a(gr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(on,8,32)),a(ae,function(e){return a(gr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(on,0,24)),$([a(gr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(gr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),sn("zero"),sn("onum"),sn("liga"),sn("dlig"),sn("ordn"),sn("tnum"),sn("afrc"),sn("frac")])),Ug=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(d.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(d.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Og=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Jg=`
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
`,qg=`
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
`,Yg=`
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
`,Zg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(w(d.fK)+(w(d.af)+(" > "+(w(d.fK)+(" { flex-basis: auto !important; } "+(w(d.fK)+(w(d.af)+(" > "+(w(d.fK)+(w(d.b9)+(" { flex-basis: auto !important; }}"+(Og+(Jg+(Yg+(qg+Ug))))))))))))))),ha=function(e){return a(le,"",e)},ua=v(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),$a=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Re(o,{aE:a(z,P(c,l),o.aE)});case 3:var u=i.a,f=u.a,s=u.b,p=i.b;return Re(o,{G:a(z,{b6:`
}`,G:D,aE:p,ag:"@supports ("+(f+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var b=i.a,m=i.b;return Re(o,{G:a(z,a($a,a(ua,n.ag+(" + "+b),""),m),o.G)});case 1:var y=i.a,_=i.b;return Re(o,{G:a(z,a($a,a(ua,n.ag+(" > "+y),""),_),o.G)});case 2:var y=i.a,_=i.b;return Re(o,{G:a(z,a($a,a(ua,n.ag+(" "+y),""),_),o.G)});case 4:var S=i.a,C=i.b;return Re(o,{G:a(z,a($a,a(ua,Z(n.ag,S),""),C),o.G)});default:var x=i.a;return Re(o,{G:a(z,a($a,a(ua,n.ag,""),x),o.G)})}});return h(er,t,n,r)}),Kg=function(e){var r=function(i){return ha(a(ae,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},t=function(i){var o=i;return Z(n(o),ha(a(ae,t,o.G)))};return ha(a(ae,t,h(er,v(function(i,o){var c=i.a,l=i.b;return a(z,a($a,a(ua,c,""),l),o)}),D,e)))},cu=Z(Zg,Kg(Z(Hg,Wg))),xn=To,Lv=function(e){var r=e.eS;switch(r){case 0:return h(Wr,"div",D,$([h(Wr,"style",D,$([xn(cu)]))]));case 1:return xn("");default:return h(Wr,"elm-ui-static-rules",$([a(Sv,"rules",Fc(cu))]),D)}},Xg=v(function(e,r){return h(He,td(e),rd(),r)}),Qg=function(e){return h(He,v(function(r,n){var t=r.a,i=r.b;return h(ad,t,i,n)}),nd(),e)},eh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},rh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},nh=function(e){if(e.$===5){var r=e.a;return a(xt,rh,r.fo)}else return!1},ba=v(function(e,r){return be(e,r)<0?e:r}),Ra=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ve=re(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(He,Ra(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(He,Ra(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(He,Ra(!1),"",t)+`
}`))])}case 0:var c=h(He,Ra(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(d.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(w(d.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(He,Ra(!1),"",t)+`
}`))])}}),ah=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},th=function(e){if(e.$===5){var r=e.a;return Y(a(le,", ",a(ae,ah,r.fo)))}else return J},ih=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,s=f.a,p=f.b,b=f.c,m=e.c,y=m.a,_=m.b,S=m.c,C=e.d,x="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(s)+(", "+(ve(p)+(", "+(ve(b)+")"))))),W="rotate3d("+(ve(y)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(x+(" "+(T+(" "+W))))}},Rc=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(Ve,e,n,t,i);case 13:var u=r.a,b=r.b;return L(Ve,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=a(nr,0,a(ba,1,1-o));return L(Ve,e,n,"."+u,$([a(ue,"opacity",ve(c))]));case 2:var l=r.a;return L(Ve,e,n,".font-size-"+k(l),$([a(ue,"font-size",k(l)+"px")]));case 1:var u=r.a,f=r.b,s=a(le,", ",a(Jn,th,f)),p=$([a(ue,"font-family",a(le,", ",a(ae,eh,f))),a(ue,"font-feature-settings",s),a(ue,"font-variant",a(xt,nh,f)?"small-caps":"normal")]);return L(Ve,e,n,"."+u,p);case 3:var se=r.a,b=r.b,Yi=r.c;return L(Ve,e,n,"."+se,$([a(ue,b,Yi)]));case 4:var se=r.a,b=r.b,m=r.c;return L(Ve,e,n,"."+se,$([a(ue,b,sa(m))]));case 5:var q=r.a,y=r.b,_=r.c,S=k(_)+"px",C=k(y)+"px",x="."+d.af,T="."+(d.dR+x),pe="."+d.dZ,W="."+d.eZ,X="."+d.eY,Se="."+d.dY,ne=ve(_/2)+"px",te=ve(y/2)+"px",ie="."+d.aw,se="."+q,ee="."+d.fK;return dr($([L(Ve,e,n,se+(x+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-left",C)])),L(Ve,e,n,se+(T+(" > "+ee)),$([a(ue,"margin",ne+(" "+te))])),L(Ve,e,n,se+(ie+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-top",S)])),L(Ve,e,n,se+(X+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-top",S)])),L(Ve,e,n,se+(X+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Ve,e,n,se+(X+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Ve,e,n,Z(se,W),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),L(Ve,e,n,"textarea"+(ee+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),L(Ve,e,n,se+(W+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Ve,e,n,se+(W+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Ve,e,n,se+(W+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),L(Ve,e,n,se+(W+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ve,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ve,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Ze,Ba,Xr){e:for(;;)switch(Xr.$){case 0:var Km=Xr.a;return k(Km)+"px";case 1:var Vr=P(Ze,Ba);if(Vr.a.$===1){if(Vr.b.$===1)return Vr.a,Vr.b,"max-content";Vr.a;var Dn=Vr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Vr.b.$===1){var Vn=Vr.a.a;return Vr.b,"minmax("+(k(Vn)+"px, max-content)")}else{var Vn=Vr.a.a,Dn=Vr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Dn)+"px)")))}case 2:var Al=Xr.a,Ar=P(Ze,Ba);if(Ar.a.$===1){if(Ar.b.$===1)return Ar.a,Ar.b,k(Al)+"fr";Ar.a;var Dn=Ar.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Ar.b.$===1){var Vn=Ar.a.a;return Ar.b,"minmax("+(k(Vn)+("px, "+(k(Al)+"frfr)")))}else{var Vn=Ar.a.a,Dn=Ar.b.a;return"minmax("+(k(Vn)+("px, "+(k(Dn)+"px)")))}case 3:var Zi=Xr.a,Ki=Xr.b,Xi=Y(Zi),Qi=Ba,eo=Ki;Ze=Xi,Ba=Qi,Xr=eo;continue e;default:var Zi=Xr.a,Ki=Xr.b,Xi=Ze,Qi=Y(Zi),eo=Ki;Ze=Xi,Ba=Qi,Xr=eo;continue e}}),I=function(Ze){return h(Te,J,J,Ze)};I(me.hP.a);var F=I(me.hP.b),E=function(Ze){return"grid-template-rows: "+(Ze+";")}(a(le," ",a(ae,I,me.hB))),B=function(Ze){return"-ms-grid-rows: "+(Ze+";")}(a(le,F,a(ae,I,me.ak))),R=function(Ze){return"-ms-grid-columns: "+(Ze+";")}(a(le,F,a(ae,I,me.ak))),N="grid-row-gap:"+(I(me.hP.b)+";"),G="grid-column-gap:"+(I(me.hP.a)+";"),H=function(Ze){return"grid-template-columns: "+(Ze+";")}(a(le," ",a(ae,I,me.ak))),se=".grid-rows-"+(a(le,"-",a(ae,Ur,me.hB))+("-cols-"+(a(le,"-",a(ae,Ur,me.ak))+("-space-x-"+(Ur(me.hP.a)+("-space-y-"+Ur(me.hP.b))))))),Oi=se+("{"+(H+(E+(G+(N+"}"))))),Ji="@supports (display:grid) {"+(Oi+"}"),qi=se+("{"+(R+(B+"}")));return $([qi,Ji]);case 9:var je=r.a,Vt=a(le," ",$(["-ms-grid-row: "+(k(je.af)+";"),"-ms-grid-row-span: "+(k(je.gH)+";"),"-ms-grid-column: "+(k(je.ga)+";"),"-ms-grid-column-span: "+(k(je.im)+";")])),Ui=a(le," ",$(["grid-row: "+(k(je.af)+(" / "+(k(je.af+je.gH)+";"))),"grid-column: "+(k(je.ga)+(" / "+(k(je.ga+je.im)+";")))])),se=".grid-pos-"+(k(je.af)+("-"+(k(je.ga)+("-"+(k(je.im)+("-"+k(je.gH))))))),Oi=se+("{"+(Ui+"}")),Ji="@supports (display:grid) {"+(Oi+"}"),qi=se+("{"+(Vt+"}"));return $([qi,Ji]);case 11:var se=r.a,qm=r.b,Ym=function(Ze){return h(Rc,e,Ze,Y(se))};return a(Da,Ym,qm);default:var Vl=r.a,Yi=ih(Vl),se=Ec(Vl),At=P(se,Yi);if(!At.a.$&&!At.b.$){var q=At.a.a,Zm=At.b.a;return L(Ve,e,n,"."+q,$([a(ue,"transform",Zm)]))}else return D}}),oh=v(function(e,r){return Qg(a(ae,function(n){var t=h(Rc,e,n,J);return P(lt(n),a(Xg,Fc,t))},r))}),gi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(le,"",a(ae,n,r))+"}"))}),lu=M(function(e,r,n){var t=n.a,i=n.b;return $([a(gi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(gi,"."+(e+("."+(r+("> ."+(d.Y+(", ."+(e+(" ."+(r+(" > ."+d.Y)))))))))),i)])}),ch=M(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(le," ",Z(h(lu,o,d.hM,i),h(lu,o,d.gy,t)))}),lh=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(le," ",$([a(gi,"."+(n+("."+(d.hM+(", "+("."+(n+(" ."+d.hM))))))),$([P("line-height","1")])),a(gi,"."+(n+("."+(d.hM+("> ."+(d.Y+(", ."+(n+(" ."+(d.hM+(" > ."+d.Y)))))))))),$([P("vertical-align","0"),P("line-height","1")]))]))}),uu=M(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),Pv=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(z,n,t):t}),D,r)}),uh=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(He,nr,r,n))}else return J},$u=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(He,ba,r,n))}else return J},vu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Be,e.gk,$u(r)),t=a(Be,e.fP,$u(a(Pv,function(f){return!_e(f,n)},r))),i=a(Be,e.f1,uh(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f1:h(uu,o,i-t,c),ec:h(uu,l,i-n,u)}},fu=function(e){return P($([P("display","block")]),$([P("display","inline-block"),P("line-height",ve(e.gH)),P("vertical-align",ve(e.fp)+"em"),P("font-size",ve(e.bi)+"em")]))},$h=function(e){return h(He,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return Y(P(fu(function(c){return c.ec}(vu(o))),fu(function(c){return c.f1}(vu(o)))))}else return n;else return n}),J,e)},vh=function(e){var r=function(o){if(o.$===4){var c=o.b;return Y("@import url('"+(c+"');"))}else return J},n=function(o){o.a;var c=o.b,l=a(le,`
`,a(Jn,r,c));return l},t=a(ae,Y$,e),i=function(o){var c=o.a,l=o.b,u=$h(l);if(u.$===1)return a(le,"",a(ae,lh(c),t));var f=u.a;return a(le,"",a(ae,a(ch,c,f),t))};return Z(a(le,`
`,a(ae,n,e)),a(le,`
`,a(ae,i,e)))},fh=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(P(r,n))}else return J},mu=v(function(e,r){var n=v(function(c,l){return{cC:Z(l.cC,h(Rc,e,c,J)),bU:function(){var u=fh(c);if(u.$===1)return l.bU;var f=u.a;return a(z,f,l.bU)}()}}),t=h(He,n,{cC:D,bU:D},r),i=t.bU,o=t.cC;return Z(vh(i),ha(o))}),zv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Wr,"div",D,$([h(Wr,"style",D,$([xn(a(mu,e,r))]))]));case 1:return h(Wr,"div",D,$([h(Wr,"style",D,$([xn(a(mu,e,r))]))]));default:return h(Wr,"elm-ui-rules",$([a(Sv,"rules",a(oh,e,r))]),D)}}),su=re(function(e,r,n,t){var i=a(zv,r,h(He,xv,P(yv,wv(r.gx)),n).b);return e?a(z,P("static-stylesheet",Lv(r)),a(z,P("dynamic-stylesheet",i),t)):a(z,P("dynamic-stylesheet",i),t)}),du=re(function(e,r,n,t){var i=a(zv,r,h(He,xv,P(yv,wv(r.gx)),n).b);return e?a(z,Lv(r),a(z,i,t)):a(z,i,t)}),Uo=xe(45),ut=xe(37),Mv=function(e){return wd(b$(e))},mh=mn("p"),cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),pu=mn("s"),gu=mn("u"),Oo=xe(44),$t=xe(39),Rt=Sr(function(e,r,n,t,i,o){var c=v(function(u,f){if(t.$===1){var s=t.a;return h(Mv,u,f,function(){switch(i.$){case 0:return s;case 2:var b=i.a,m=i.b;return L(su,!1,b,m,s);default:var b=i.a,m=i.b;return L(su,!0,b,m,s)}}())}else{var p=t.a;return a(function(){switch(u){case"div":return Ca;case"p":return mh;default:return Wr(u)}}(),f,function(){switch(i.$){case 0:return p;case 2:var b=i.a,m=i.b;return L(du,!1,b,m,p);default:var b=i.a,m=i.b;return L(du,!0,b,m,p)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,f=r.b;return h(Wr,u,n,$([a(c,f,$([zr(d.fK+(" "+d.hL))]))]))}}();switch(o){case 0:return a(cr,$t,e)&&!a(cr,Oo,e)?l:a(cr,gv,e)?a(gu,$([zr(a(le," ",$([d.fK,d.hL,d.b9,d.ax,d.fG])))]),$([l])):a(cr,hv,e)?a(pu,$([zr(a(le," ",$([d.fK,d.hL,d.b9,d.ax,d.fE])))]),$([l])):l;case 1:return a(cr,ut,e)&&!a(cr,Uo,e)?l:a(cr,bv,e)?a(pu,$([zr(a(le," ",$([d.fK,d.hL,d.b9,d.fF])))]),$([l])):a(cr,pv,e)?a(gu,$([zr(a(le," ",$([d.fK,d.hL,d.b9,d.fD])))]),$([l])):l;default:return l}}),pn=function(e){return!e.b},jc=xn,sh=d.fK+(" "+(d.Y+(" "+(d.dP+(" "+d.c$))))),vt=function(e){return a(Ca,$([zr(sh)]),$([jc(e)]))},dh=d.fK+(" "+(d.Y+(" "+(d.dQ+(" "+d.c0))))),hu=function(e){return a(Ca,$([zr(dh)]),$([jc(e)]))},ph=M(function(e,r,n){var t=v(function(y,_){var S=y.a,C=y.b,x=_.a,T=_.b;switch(C.$){case 0:var W=C.a;return _e(e,Bt),P(a(z,P(S,W(e)),x),T);case 1:var X=C.a;return _e(e,Bt),P(a(z,P(S,a(X.gL,Fn,e)),x),pn(T)?X.hV:Z(X.hV,T));case 2:var ne=C.a;return P(a(z,P(S,_e(e,wr)?hu(ne):vt(ne)),x),T);default:return P(x,T)}}),i=v(function(y,_){var S=_.a,C=_.b;switch(y.$){case 0:var x=y.a;return _e(e,Bt),P(a(z,x(e),S),C);case 1:var T=y.a;return _e(e,Bt),P(a(z,a(T.gL,Fn,e),S),pn(C)?T.hV:Z(T.hV,C));case 2:var W=y.a;return P(a(z,_e(e,wr)?hu(W):vt(W),S),C);default:return P(S,C)}});if(r.$===1){var o=r.a,c=h(er,t,P(D,D),o),l=c.a,u=c.b,f=pn(u)?n.hV:Z(n.hV,u);if(f.b){var s=f;return Ho({gL:L(Rt,n.aR,n.aT,n.aJ,au(h(iu,"nearby-element-pls",l,n.aM))),hV:s})}else return ct(V(Rt,n.aR,n.aT,n.aJ,au(h(iu,"nearby-element-pls",l,n.aM)),Fn))}else{var p=r.a,b=h(er,i,P(D,D),p),m=b.a,u=b.b,f=pn(u)?n.hV:Z(n.hV,u);if(f.b){var s=f;return Ho({gL:L(Rt,n.aR,n.aT,n.aJ,rr(a(tu,m,n.aM))),hV:s})}else return ct(V(Rt,n.aR,n.aT,n.aJ,rr(a(tu,m,n.aM)),Fn))}}),vr=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),gh=function(e){return{$:10,a:e}},hi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(hi,n,o|t)}else{var i=e.a;return a(hi,i|n,t)}}),bu=function(e){return{$:1,a:e}},jt=v(function(e,r){return{$:3,a:e,b:r}}),_u=function(e){return{$:2,a:e}},hh=v(function(e,r){return a(Ca,$([zr(function(){switch(e){case 0:return a(le," ",$([d.be,d.hL,d.fy]));case 1:return a(le," ",$([d.be,d.hL,d.fR]));case 2:return a(le," ",$([d.be,d.hL,d.hh]));case 3:return a(le," ",$([d.be,d.hL,d.hg]));case 4:return a(le," ",$([d.be,d.hL,d.gP]));default:return a(le," ",$([d.be,d.hL,d.fQ]))}}())]),$([function(){switch(r.$){case 3:return xn("");case 2:var n=r.a;return vt(n);case 0:var t=r.a;return t(wr);default:var i=r.a;return a(i.gL,Fn,wr)}}()]))}),bh=M(function(e,r,n){var t=a(hh,e,r);switch(n.$){case 0:return e===5?bu($([t])):_u($([t]));case 1:var i=n.a;return e===5?bu(a(z,t,i)):a(jt,i,$([t]));case 2:var o=n.a;return e===5?a(jt,$([t]),o):_u(a(z,t,o));default:var i=n.a,o=n.b;return e===5?a(jt,a(z,t,i),o):a(jt,i,a(z,t,o))}}),yu=v(function(e,r){return{$:2,a:e,b:r}}),gn=function(e){return{$:1,a:e}},An=v(function(e,r){switch(r.$){case 0:return gn(e);case 1:var n=r.a;return a(yu,n,e);default:var t=r.a,i=r.b;return a(yu,t,i)}}),_h=function(e){switch(e){case 0:return d.cN+(" "+d.dY);case 2:return d.cN+(" "+d.dZ);default:return d.cN+(" "+d.fB)}},yh=function(e){switch(e){case 0:return d.cO+(" "+d.fH);case 2:return d.cO+(" "+d.fA);default:return d.cO+(" "+d.fC)}},Oa=v(function(e,r){return a(Rr,zd(e),_$(r))}),Nr=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),dn=function(e){return{$:1,a:e}},xh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return dn(j(u,0,0));case 1:var f=r.a;return dn(j(0,f,0));case 2:var s=r.a;return dn(j(0,0,s));case 3:var n=r.a;return dn(n);case 4:var n=r.a,m=r.b;return L(Nr,j(0,0,0),j(1,1,1),n,m);default:var n=r.a;return L(Nr,j(0,0,0),n,j(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,s=l.c;switch(r.$){case 0:var t=r.a;return dn(j(t,f,s));case 1:var i=r.a;return dn(j(u,i,s));case 2:var o=r.a;return dn(j(u,f,o));case 3:var n=r.a;return dn(n);case 4:var n=r.a,m=r.b;return L(Nr,l,j(1,1,1),n,m);default:var c=r.a;return L(Nr,l,c,j(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,s=l.c,p=e.b,b=e.c,m=e.d;switch(r.$){case 0:var t=r.a;return L(Nr,j(t,f,s),p,b,m);case 1:var i=r.a;return L(Nr,j(u,i,s),p,b,m);case 2:var o=r.a;return L(Nr,j(u,f,o),p,b,m);case 3:var y=r.a;return L(Nr,y,p,b,m);case 4:var _=r.a,S=r.b;return L(Nr,l,p,_,S);default:var C=r.a;return L(Nr,l,C,b,m)}}}),ia=xe(7),Tv=xe(36),xu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(hi,n|i,t|o)}),nn=a(hi,0,0),Jo=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return j(nn,d.ee+(" "+t),$([h(vr,t,"height",n+"px")]));case 1:return j(a(ge,Tv,nn),d.c$,D);case 2:var i=e.a;return i===1?j(a(ge,ut,nn),d.c0,D):j(a(ge,ut,nn),d.ef+(" height-fill-"+k(i)),$([h(vr,d.fK+("."+(d.aw+(" > "+w("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),s=h(vr,f,"min-height",k(o)+"px !important"),c=Jo(u),b=c.a,m=c.b,y=c.c;return j(a(ge,Uo,b),f+(" "+m),a(z,s,y));default:var l=e.a,u=e.b,f="max-height-"+k(l),s=h(vr,f,"max-height",k(l)+"px"),p=Jo(u),b=p.a,m=p.b,y=p.c;return j(a(ge,Uo,b),f+(" "+m),a(z,s,y))}},kv=xe(38),qo=function(e){switch(e.$){case 0:var r=e.a;return j(nn,d.fu+(" width-px-"+k(r)),$([h(vr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return j(a(ge,kv,nn),d.dP,D);case 2:var n=e.a;return n===1?j(a(ge,$t,nn),d.dQ,D):j(a(ge,$t,nn),d.fv+(" width-fill-"+k(n)),$([h(vr,d.fK+("."+(d.af+(" > "+w("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+k(t),u=h(vr,l,"min-width",k(t)+"px"),i=qo(c),s=i.a,p=i.b,b=i.c;return j(a(ge,Oo,s),l+(" "+p),a(z,u,b));default:var o=e.a,c=e.b,l="max-width-"+k(o),u=h(vr,l,"max-width",k(o)+"px"),f=qo(c),s=f.a,p=f.b,b=f.c;return j(a(ge,Oo,s),l+(" "+p),a(z,u,b))}},Ai=xe(27),wh=v(function(e,r){if(_e(e,Ai))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return _e(i,c)&&_e(i,o)&&_e(i,l)&&i>=0&&i<=24;default:return!1}}),oa=xe(6),wu=xe(30),Su=xe(29),Sh=ze(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var s=l.a,p=l.b;switch(s.$){case 0:var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 3:var _=s.a,b=s.b;if(a(cr,_,n)){var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var I=b+(" "+e),F=r,E=a(ge,_,n),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 1:var m=s.a,I=e,F=r,E=n,B=t,R=i,N=a(z,m,o),G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 4:var _=s.a,y=s.b;if(a(cr,_,n)){var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else if(a(wh,_,y)){var I=lt(y)+(" "+e),F=r,E=a(ge,_,n),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var I=lt(y)+(" "+e),F=r,E=a(ge,_,n),B=t,R=a(z,y,i),N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 10:var _=s.a,S=s.b,I=e,F=r,E=a(ge,_,n),B=a(xh,t,S),R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 7:var C=s.a;if(a(cr,oa,n)){var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else switch(C.$){case 0:var x=C.a,I=d.fu+(" width-px-"+k(x))+(" "+e),F=r,E=a(ge,oa,n),B=t,R=a(z,h(vr,"width-px-"+k(x),"width",k(x)+"px"),i),N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 1:var I=e+(" "+d.dP),F=r,E=a(ge,kv,a(ge,oa,n)),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 2:var T=C.a;if(T===1){var I=e+(" "+d.dQ),F=r,E=a(ge,$t,a(ge,oa,n)),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var I=e+(" "+(d.fv+(" width-fill-"+k(T)))),F=r,E=a(ge,$t,a(ge,oa,n)),B=t,R=a(z,h(vr,d.fK+("."+(d.af+(" > "+w("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}default:var W=qo(C),X=W.a,ne=W.b,Te=W.c,I=e+(" "+ne),F=r,E=a(xu,X,a(ge,oa,n)),B=t,R=Z(Te,i),N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 8:var te=s.a;if(a(cr,ia,n)){var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else switch(te.$){case 0:var x=te.a,ie=k(x)+"px",ee="height-px-"+ie,I=d.ee+(" "+(ee+(" "+e))),F=r,E=a(ge,ia,n),B=t,R=a(z,h(vr,ee,"height ",ie),i),N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 1:var I=d.c$+(" "+e),F=r,E=a(ge,Tv,a(ge,ia,n)),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 2:var T=te.a;if(T===1){var I=d.c0+(" "+e),F=r,E=a(ge,ut,a(ge,ia,n)),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var I=e+(" "+(d.ef+(" height-fill-"+k(T)))),F=r,E=a(ge,ut,a(ge,ia,n)),B=t,R=a(z,h(vr,d.fK+("."+(d.aw+(" > "+w("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}default:var q=Jo(te),X=q.a,ne=q.b,Te=q.c,I=e+(" "+ne),F=r,E=a(xu,X,a(ge,ia,n)),B=t,R=Z(Te,i),N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 2:var de=s.a;switch(de.$){case 0:var I=e,F=a(An,"main",r),E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 1:var I=e,F=a(An,"nav",r),E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 2:var I=e,F=a(An,"footer",r),E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 3:var I=e,F=a(An,"aside",r),E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 4:var pe=de.a;if(pe<=1){var I=e,F=a(An,"h1",r),E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else if(pe<7){var I=e,F=a(An,"h"+k(pe),r),E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var I=e,F=a(An,"h6",r),E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 9:var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 8:var I=e,F=r,E=n,B=t,R=i,N=a(z,a(Oa,"role","button"),o),G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 5:var Me=de.a,I=e,F=r,E=n,B=t,R=i,N=a(z,a(Oa,"aria-label",Me),o),G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 6:var I=e,F=r,E=n,B=t,R=i,N=a(z,a(Oa,"aria-live","polite"),o),G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;default:var I=e,F=r,E=n,B=t,R=i,N=a(z,a(Oa,"aria-live","assertive"),o),G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 9:var Se=s.a,me=s.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var Ui=me.a;return Z(i,Ui.hV)}}(),I=e,F=r,E=n,B=t,R=Te,N=o,G=h(bh,Se,me,c),H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 6:var je=s.a;if(a(cr,wu,n)){var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var I=_h(je)+(" "+e),F=r,E=function(se){switch(je){case 1:return a(ge,hv,se);case 2:return a(ge,gv,se);default:return se}}(a(ge,wu,n)),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}default:var Vt=s.a;if(a(cr,Su,n)){var I=e,F=r,E=n,B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var I=yh(Vt)+(" "+e),F=r,E=function(se){switch(Vt){case 1:return a(ge,bv,se);case 2:return a(ge,pv,se);default:return se}}(a(ge,Su,n)),B=t,R=i,N=o,G=c,H=p;e=I,r=F,n=E,t=B,i=R,o=N,c=G,l=H;continue e}}}else{var u=Ec(t);if(u.$===1)return{aJ:a(z,zr(e),o),aM:c,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(z,zr(e+(" "+f)),o),aM:c,aR:n,aT:r,hV:a(z,gh(t),i)}}}),Ch={$:0},Lh=Ch,$r=re(function(e,r,n,t){return h(ph,e,t,gt(Sh,kg(e),r,nn,Lh,D,D,Sg,sr(n)))}),an=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ph={fO:J,fW:J,hH:Y({a2:0,b7:L(an,155/255,203/255,1,1),eV:P(0,0),bi:3})},zh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gK;return c.$===1?Re(i,{gK:Y(o)}):i;case 1:var l=t.a,u=i.gx;return u.$===1?Re(i,{gx:Y(l)}):i;default:var f=t.a,s=i.eS;return s.$===1?Re(i,{eS:Y(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return Ph;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gx:J,gK:J,eS:J},e))},Mh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(wr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),wr);case 2:var i=r.a;return vt(i);default:return vt("")}}),Th=M(function(e,r,n){var t=zh(e),i=function(){var o=t.eS;return o===1?dv(t):xg(t)}();return a(Mh,i,L($r,wr,Qn,r,rr($([n]))))}),ft=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Dv=v(function(e,r){return{$:1,a:e,b:r}}),Vv=function(e){return{$:2,a:e}},kh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),to=function(e){return{$:3,a:e}},Av=xe(8),Iv=xe(14),Fv=xe(5),Ev=xe(4),La=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ee(r)+("-"+(Ee(n)+("-"+(Ee(t)+("-"+Ee(i))))))},Kt=Vs,io=Ds,Bv=v(function(e,r){return Z(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(le,"-",io(Kt(n)));case 4:var n=e.a;return e.b,a(le,"-",io(Kt(n)));default:var n=e.a.hc;return a(le,"-",io(Kt(n)))}}())}),Dh=function(){var e=$([to("Open Sans"),to("Helvetica"),to("Verdana"),kh]);return $([a(Ce,Av,h(ft,"bg-"+La(L(an,1,1,1,0)),"background-color",L(an,1,1,1,0))),a(Ce,Iv,h(ft,"fc-"+La(L(an,0,0,0,1)),"color",L(an,0,0,0,1))),a(Ce,Ev,Vv(20)),a(Ce,Fv,a(Dv,h(He,Bv,"font-",e),e))])}(),Vh=M(function(e,r,n){var t=e.hl;return h(Th,t,a(z,yr(a(le," ",$([d.hA,d.fK,d.hL]))),Z(Dh,r)),n)}),Rv={$:3},jv=function(e){return{$:2,a:e}},Yo=Cd,Nv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Ho({gL:v(function(o,c){return a(Yo,e,a(n.gL,o,c))}),hV:n.hV});case 0:var t=r.a;return ct(a(wt,Yo(e),t));case 2:var i=r.a;return jv(i);default:return Rv}}),Nc=Nv,Ah=Yo,Ih=function(e){return{$:0,a:e}},De=Ih,Fh=Pd,br=Fh,Gv={$:1},Ii=function(e){return{$:5,a:e}},Hv=Ii(0),jr=M(function(e,r,n){return L(an,e/255,r/255,n/255,1)}),Wv=h(jr,0,0,0),Eh=Rr("d"),Bh=Rr("fill"),Rh=Rr("height"),Uv=g$("http://www.w3.org/2000/svg"),jh=Uv("path"),Nh=Uv("svg"),Gh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Hh=function(e){var r=Gh(e);return"rgba("+(k(Fe(r.hu*255))+(","+k(Fe(r.gA*255))+(","+k(Fe(r.fS*255))+(","+ve(r.fI)+")"))))},Wh=Rr("viewBox"),Uh=Rr("width"),da=M(function(e,r,n){return a(Nh,$([Wh("0 0 100 100"),Uh(k(e)),Rh(k(e))]),$([a(jh,$([Eh(n),Bh(Hh(r))]),D)]))}),Oh={$:1},pr=Oh,Ov=function(e){return{$:7,a:e}},ce=Ov,Le=v(function(e,r){return L($r,wr,Qn,a(z,ce(pr),a(z,we(pr),e)),rr($([r])))}),Jv=function(e){return{$:2,a:e}},ye=Jv(1),Bn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},_a={c4:260,bF:54},cn=function(e){return a(Ce,Av,h(ft,"bg-"+La(e),"background-color",e))},Jh=xe(28),wn=function(e){return a(Ce,Jh,h(ft,"bc-"+La(e),"border-color",e))},Xt=1,Tr=v(function(e,r){return L($r,Xt,Qn,a(z,yr(d.gc+(" "+d.bu)),a(z,we(pr),a(z,ce(pr),e))),rr(r))}),qh=h(jr,83,83,83),qv=re(function(e,r,n,t){return L(an,e/255,r/255,n/255,t)}),Fi=L(qv,56,56,56,.25),Je=Rv,mt=Ye(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),st=xe(2),Rn=function(e){var r=e;return a(Ce,st,V(mt,"p-"+k(e),r,r,r,r))},Yv=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Zv=xe(3),Kv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Sn=function(e){return a(Ce,Zv,h(Yv,a(Kv,e,e),e,e))},Yh=L(qv,0,0,0,0),Zh=function(e){return{$:4,a:e}},Zo=0,Tn=v(function(e,r){return L($r,Zo,Qn,a(z,yr(d.bu+(" "+d.ax)),a(z,ce(pr),a(z,we(pr),e))),rr(r))}),Kh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(dv,{gx:{fO:J,fW:J,hH:J},gK:1,eS:0},n.hV));case 2:var t=e.a;return di(xn(t));default:return di(xn(""))}},Xh=v(function(e,r){return Kh(e(r))}),Qh=Ld,e3=v(function(e,r){return ct(h(Qh,Xh,e,r))}),Cn=function(e){return a(Ce,Iv,h(ft,"fc-"+La(e),"color",e))},Gc=h(jr,195,195,195),kn=v(function(e,r){return{$:3,a:e,b:r}}),Xv=xe(13),r3=a(kn,Xv,d.h7),n3=xe(20),Qv=a(kn,n3,d.hF),ea=function(e){return a(Ce,Ev,Vv(e))},Hc=a(kn,Xv,d.fV),Ko=v(function(e,r){if(r.$===-2)return Zr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return V(fe,n,t,a(e,t,i),a(Ko,e,o),a(Ko,e,c))}),ef=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,st,V(mt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,st,V(mt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Ln=function(e){return jv(e)},a3=function(e){return h(Lc,M(function(r,n,t){return a(z,n,t)}),D,e)},t3=v(function(e,r){return{$:3,a:e,b:r}}),i3=v(function(e,r){return{$:2,a:e,b:r}}),o3=v(function(e,r){return{$:0,a:e,b:r}}),c3=v(function(e,r){return{$:1,a:e,b:r}}),ra=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),l3=L(ra,0/255,0/255,0/255,1),Ei=function(e){return{$:6,a:e}},u3=Ei(0),Bi=function(e){return{$:2,a:e}},$3={$:6},rf=Bi($3),nf=M(function(e,r,n){if(r.$===1)return r.a,L($r,Xt,gn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,c=L($r,wr,Qn,i,rr($([o])));switch(t){case 2:return L($r,Xt,gn("label"),a(z,yr(d.cj),e),rr($([c,n])));case 3:return L($r,Xt,gn("label"),a(z,yr(d.cj),e),rr($([n,c])));case 0:return L($r,Zo,gn("label"),a(z,yr(d.cj),e),rr($([n,c])));default:return L($r,Zo,gn("label"),a(z,yr(d.cj),e),rr($([c,n])))}}),Xo=Oa,vn=Ii(1),af="Enter",v3=function(e){return{$:5,a:e}},tf=function(e){if(e.$===1){var r=e.a;return Bi(v3(r))}else return On},of=function(e){return e.$===1},f3=function(e){return{$:0,a:e}},Wc=h$,m3=v(function(e,r){return a(Wc,e,f3(r))}),cf=function(e){return a(m3,"click",ur(e))},s3=Ws,d3=function(e){return{$:2,a:e}},p3=v(function(e,r){return a(Wc,e,d3(r))}),lf=function(e){var r=function(t){var i=e(t);if(i.$===1)return s3("No key matched");var o=i.a;return ur(o)},n=a(Q,r,a(K,"key",Sa));return Ae(a(p3,"keydown",a($i,function(t){return P(t,!0)},n)))},g3=xe(21),jn=a(kn,g3,d.gf),uf=" ",$f=function(e){return a(Rr,"tabIndex",k(e))},h3=a(wt,Ae,$f),b3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bJ,c=Z($([of(n)?On:Sn(6),Ae(cf(o(!i))),rf,lf(function(l){return _e(l,af)||_e(l,uf)?Y(o(!i)):J}),h3(0),jn,u3,ce(ye)]),e);return h(nf,a(z,Ae(a(Xo,"role","checkbox")),a(z,Ae(a(Xo,"aria-checked",i?"true":"false")),a(z,tf(n),c))),n,L($r,wr,Qn,$([vn,we(ye),ce(pr)]),rr($([t(i)]))))}),_3=M(function(e,r,n){return Z(a(ot,e-En(n),Vi(r)),n)}),bi=vs,vf=function(e){var r=function(n){return n<10?k(n):Vi(iv(87+n))};return e<16?r(e):Z(vf(e/16|0),r(a(bi,16,e)))},y3=a(Ke,vf,a(_3,2,"0")),Uc=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},x3=function(e){var r=Uc(e),n=r.hu,t=r.gA,i=r.fS;return a(le,"",a(z,"#",a(ae,a(Ke,Fe,y3),$([n*255,t*255,i*255]))))},Oc=xe(12),ff=a(kn,Oc,d.h$),Qo=Ei(1),qn=fs,ec=function(e){return e*qn/180},w3=function(e){return{$:1,a:e}},Jc=v(function(e,r){return{$:10,a:e,b:r}}),S3=xe(26),C3=function(e){return a(Jc,S3,w3(-e))},pa=M(function(e,r,n){return L(an,e,r,n,1)}),L3=an,P3=v(function(e,r){return{$:4,a:e,b:r}}),z3=xe(24),M3=function(e){return a(Jc,z3,a(P3,j(0,0,1),e))},T3=xe(17),Nn=function(e){return a(Ce,T3,h(vr,"br-"+k(e),"border-radius",k(e)+"px"))},k3=function(e){return ha($([e.ej?"box-inset":"box-",Ee(e.eV.a)+"px",Ee(e.eV.b)+"px",Ee(e.a2)+"px",Ee(e.bi)+"px",La(e.b7)]))},D3=xe(19),V3=function(e){var r={a2:e.a2,b7:e.b7,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,D3,h(vr,k3(r),"box-shadow",Wo(r)))},Cu=v(function(e,r){return{$:12,a:e,b:r}}),Lu=xe(0),A3=function(e){return e?a(Ce,Lu,a(Cu,"transparent",1)):a(Ce,Lu,a(Cu,"visible",0))},oo=h(pa,1,1,1),qc=Ye(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Ri=function(e){return a(Ce,Ai,V(qc,"b-"+k(e),e,e,e,e))},I3=v(function(e,r){return a(Ce,Ai,V(qc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),St=function(e){var r=e.b3,n=e.cI,t=e.g4,i=e.hx;return _e(n,r)&&_e(t,i)?_e(n,i)?Ri(n):a(I3,t,n):a(Ce,Ai,V(qc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},F3=function(e){return a(Le,$([yr("focusable"),ce(De(14)),we(De(14)),Cn(oo),vn,ea(9),ff,Nn(3),wn(e?h(pa,59/255,153/255,252/255):h(pa,211/255,211/255,211/255)),V3({a2:1,b7:e?L(L3,238/255,238/255,238/255,0):h(pa,238/255,238/255,238/255),eV:P(0,0),bi:1}),cn(e?h(pa,59/255,153/255,252/255):oo),Ri(e?0:1),Go(a(Le,$([wn(oo),we(De(6)),ce(De(9)),M3(ec(-45)),Qo,vn,C3(1),A3(!e),St({b3:2,g4:2,hx:0,cI:0})]),Je))]),Je)},E3=Dr("htmlFor"),rc=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),_i=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return e(n)}}),mf=re(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),B3=ep,R3=js,j3=v(function(e,r){if(r.$)return ir(e);var n=r.a;return We(n)}),N3=Qd,G3=function(e){return a(N3,{f2:!1,hb:!1},e)},sf=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return J},H3=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return We(e(n))}}),W3=function(e){return{$:2,a:e}},U3=function(e){return{$:0,a:e}},O3=function(e){return{$:1,a:e}},co=v(function(e,r){return qr(r)-qr(e)}),lo=M(function(e,r,n){var t=qr(n);return be(qr(e),t)<1&&be(t,qr(r))<1}),J3=v(function(e,r){var n=function(i){return be(i,e)<0?We(i):ir(O3(r))},t=h(lo,"0","9",r)?We(a(co,"0",r)):h(lo,"a","z",r)?We(10+a(co,"a",r)):h(lo,"A","Z",r)?We(10+a(co,"A",r)):ir(U3(r));return a(_i,n,t)}),df=v(function(e,r){var n=ka(r);if(n.$===1)return We(0);var t=n.a,i=t.a,o=t.b;return a(_i,function(c){return a(_i,function(l){return We(c+l*e)},a(df,e,o))},a(J3,e,i))}),q3=v(function(e,r){return 2<=e&&e<=36?a(df,e,Ro(r)):ir(W3(e))}),Y3=q3(16),Z3=M(function(e,r,n){return L(ra,e,r,n,1)}),K3=re(function(e,r,n,t){return L(ra,e,r,n,t)}),Ct=$s,X3=v(function(e,r){var n=a(Ct,10,e);return Fe(r*n)/n}),Q3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=tv(n);if(t.b&&!t.b.b){var i=t.a;return R3($([i,i]))}else return n};return a(Ke,Kt,a(Ke,function(n){return a(Ne,function(t){return h(B3,1,t,n)},G3(e))},a(Ke,rc(sf),a(Ke,Ne(function(n){return n.hW}),a(Ke,Ne(Jn(Br)),a(Ke,j3("Parsing hex regex failed"),_i(function(n){var t=a(ae,a(Ke,r,a(Ke,Y3,H3(Wa))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,s=f.a.a;return We(L(K3,i/255,c/255,u/255,a(X3,2,s/255)))}else break e;else{var i=t.a.a,p=t.b,c=p.a.a,b=p.b,u=b.a.a;return We(h(Z3,i/255,c/255,u/255))}else break e;return ir("Parsing ints from hex failed")})))))))}(),eb=Dr("id"),rb=mn("input"),nb=mn("label"),pf=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ab=pf(0),tb=Dr("name"),ib=function(e){return P(e,!0)},ob=function(e){return{$:1,a:e}},cb=v(function(e,r){return a(Wc,e,ob(r))}),lb=v(function(e,r){return h(er,K,r,e)}),ub=a(lb,$(["target","value"]),Sa),gf=function(e){return a(cb,"input",a($i,ib,a($i,e,ub)))},$b=a(kn,Oc,d.h4),hf=a(kn,Oc,d.h8),Yc=function(e){return a(sv,5,e)},Zc=function(e){return a(Ce,Fv,a(Dv,h(He,Bv,"ff-",e),e))},vb=h(jr,195,195,195),bf=h(jr,69,69,69),fb=pf(2),mb={$:2},Kc=mb,sb=xe(32),db=xe(31),Pu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},pb=v(function(e,r){return a(Be,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return Y(P(i,c))}else return J;else{var i=t.a;return Y(i)}}),J,e))}),zu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},gb=xe(33),hb=Dr("max"),bb=Dr("min"),_b=v(function(e,r){return a(Ce,Zv,h(Yv,a(Kv,e,r),e,r))}),yb=function(e){return a(Dr,"step",e)},_f=Dr("type"),yf=Dr("value"),Pa=Jv,xb=kd,xf=v(function(e,r){switch(r.$){case 0:return On;case 2:var n=r.a;return Bi(n);case 6:var t=r.a;return Ei(t);case 5:var i=r.a;return Ii(i);case 7:var t=r.a;return Ov(t);case 8:var t=r.a;return fv(t);case 3:var t=r.a,i=r.b;return a(kn,t,i);case 4:var o=r.a,c=r.b;return a(Ce,o,c);case 9:var l=r.a,u=r.b;return a(mv,l,a(Nv,e,u));case 1:var f=r.a;return Ae(a(xb,e,f));default:var s=r.a,p=r.b;return a(Jc,s,p)}}),wb=M(function(e,r,n){return a(Tn,$([ce(ye),we(a(Be,ye,n)),vn]),$([a(Le,$([ce(Pa(Fe(e*1e4)))]),Je),a(Le,a(z,vn,a(ae,xf(_t),r)),Je),a(Le,$([ce(Pa(Fe(he(1-e)*1e4)))]),Je)]))}),Sb=M(function(e,r,n){return a(Tr,$([we(ye),ce(a(Be,ye,n)),Qo]),$([a(Le,$([we(Pa(Fe(he(1-e)*1e4)))]),Je),a(Le,a(z,Qo,a(ae,xf(_t),r)),Je),a(Le,$([we(Pa(Fe(e*1e4)))]),Je)]))}),wf=v(function(e,r){var n=zu(e),t=Pu(e),i=function(){var C=P(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var x=C.a.a.a,T=C.b.a.a;return be(T,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cs)/(r.cr-r.cs),c=r.ic,l=c,u=Pu(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),s=zu(l),p=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var C=s.a.a;return k(C)+"px"}(),b="thmb-"+(p+("-"+f)),m=$([a(ue,"width",p),a(ue,"height",f)]),y=a(pb,e,P(5,5)),_=y.a,S=y.b;return h(nf,$([of(r.em)?On:a(_b,_,S),rf,ce(function(){if(n.$===1)return ye;if(n.a.$){var C=n.a;return C}else return pr}()),we(function(){if(t.$===1)return pr;if(t.a.$){var C=t.a;return C}else return pr}())]),r.em,a(Tn,$([ce(a(Be,ye,n)),we(a(Be,De(20),t))]),$([L($r,wr,gn("input"),$([tf(r.em),a(Ce,sb,a(Qa,'input[type="range"].'+(b+"::-moz-range-thumb"),m)),a(Ce,gb,a(Qa,'input[type="range"].'+(b+"::-webkit-slider-thumb"),m)),a(Ce,db,a(Qa,'input[type="range"].'+(b+"::-ms-thumb"),m)),Ae(zr(b+" ui-slide-bar focusable-parent")),Ae(gf(function(C){var x=av(C);if(x.$===1)return r.bJ(0);var T=x.a;return r.bJ(T)})),Ae(_f("range")),Ae(yb(function(){var C=r.cF;if(C.$===1)return"any";var x=C.a;return ve(x)}())),Ae(bb(ve(r.cs))),Ae(hb(ve(r.cr))),Ae(yf(ve(r.cJ))),i?Ae(a(Xo,"orient","vertical")):On,ce(i?a(Be,De(20),t):a(Be,ye,n)),we(i?a(Be,ye,n):a(Be,De(20),t))]),rr(D)),a(Le,a(z,ce(a(Be,ye,n)),a(z,we(a(Be,De(20),t)),Z(e,$([Yc(i?h(Sb,o,a(z,yr("focusable-thumb"),l),n):h(wb,o,a(z,yr("focusable-thumb"),l),t))])))),Je)])))}),Cb=h(pa,.5,.5,.5),Sf=Br,Mu=function(e){var r=e.c3,n=e.cJ,t=e.cs,i=e.cr,o=e.cF,c=e.bJ;return a(Le,$([ce(ye)]),a(wf,$([Sn(2),Yc(a(Le,$([ce(ye),we(De(16)),vn,cn(bf),Nn(4)]),Je))]),{em:a(fb,D,a(Tn,$([ce(ye)]),$([a(Le,$([$b]),Ln(r)),a(Le,$([ce(ye),hf,Zc($([Kc]))]),Ln(ve(n)))]))),cr:i,cs:t,bJ:c,cF:Y(o),ic:Sf($([ce(De(12)),we(De(12)),Nn(4),Ri(0),wn(Cb),cn(vb)])),cJ:n}))},Lb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Pb=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(b3,D,{f6:c,gM:F3,em:a(ab,D,Ln(e)),bJ:t3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return Mu({c3:e,cr:o,cs:i,bJ:o3(e),cF:.001*(o-i),cJ:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return Mu({c3:e,cr:o,cs:i,bJ:a(Ke,Fe,c3(e)),cF:1,cJ:c});default:var c=r.a;return a(Le,$([ce(ye)]),hn(a(Ca,D,$([a(Ca,$([a(br,"margin-bottom","6px")]),$([a(nb,$([E3(e)]),$([jc(e)]))])),a(rb,$([_f("color"),a(br,"width","100%"),a(br,"height","26px"),a(br,"padding","0px"),eb(e),tb(e),gf(function(l){return a(i3,e,a(Lb,l3,Q3(l)))}),yf(x3(c))]),D)]))))}}),nc=h(jr,255,255,255),zb=function(e){return a(Tr,$([ce(ye),Sn(8),a(ef,0,14),St({b3:1,g4:0,hx:0,cI:0}),wn(Fi)]),$([a(Le,$([ea(16),Hc,Cn(nc)]),Ln(e.hc)),a(Tr,$([ce(ye),Sn(6)]),a3(a(Ko,Pb,e.aN)))]))},Mb=function(e){return a(Tr,$([ce(ye),we(ye),Cn(Gc),ea(12),r3,Qv]),a(ae,zb,e))},Tb=e3(Mb),kb=function(e){return a(Tr,$([ce(ye),we(ye)]),$([a(Tn,$([Sn(14),ce(ye)]),D),a(Nc,Zh,Tb(Xn(e).gb))]))},Db=function(e){return{$:6,a:e}},Vb=re(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Ab=function(e){var r=e.cI,n=e.hx,t=e.b3,i=e.g4;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,st,V(mt,"p-"+k(r),o,o,o,o))}else return a(Ce,st,V(mt,L(Vb,r,n,t,i),r,n,t,i))},Ib=function(e){return{$:0,a:e}},Fb=function(e){return{$:1,a:e}},Eb=Fb,Bb=function(e){var r=e.b.X;return Un(r)},yi=h(jr,255,60,0),Rb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Un(r)+1+Un(n)},jb=function(e){var r=P(Bb(e),Rb(e)-1),n=r.a,t=r.b;return a(Le,$([ce(ye),vn]),a(wf,$([Yc(a(Tn,$([ce(ye),we(De(4)),vn,cn(bf),Nn(2)]),$([a(Le,$([ce(Pa(n)),we(ye),cn(yi),Nn(2)]),Je),a(Le,$([ce(Pa(t-n))]),Je)])))]),{em:Eb(""),cr:t,cs:0,bJ:a(Ke,Fe,Ib),cF:Y(1),ic:Sf($([ce(De(12)),we(De(12)),Nn(6),cn(yi)])),cJ:n}))},Nb=Ei(2),Qt=h(jr,220,220,220),Gb=function(e){var r=e.a,n=function(){return r.$?$([Cn(Qt)]):$([Cn(yi)])}();return a(Le,Z(n,$([ea(14),Nb,hf,Zc($([Kc]))])),Ln(a(uv,3,Xn(e).bt)))},Hb=function(e){e.a;var r=e.b.X;return a(Ne,function(n){return Fe(60/(Xn(e).bt-n))},a(Ne,a(Ke,Y$,function(n){return n.bt}),sf(a(rv,59,r))))},Wb=function(e){var r=Hb(e);if(r.$===1)return Je;var n=r.a;return a(Le,$([ea(14),Cn(Gc),Zc($([Kc]))]),Ln(k(n)+" FPS"))},Tu={$:1},Ub={$:3},Ob={$:2},Jb={$:8},qb=m$,Yb=v(function(e,r){return a(bc,e,qb(r))}),Zb=Yb("disabled"),Kb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Xb=function(e){return a(xt,Kb,e)?On:yr("focusable")},xi=a(wt,Ae,cf),Cf=v(function(e,r){var n=r.eW,t=r.em;return L($r,wr,Qn,a(z,ce(pr),a(z,we(pr),a(z,yr(d.cb+(" "+(d.ax+(" "+(d.hG+(" "+d.eU)))))),a(z,jn,a(z,Xb(e),a(z,Bi(Jb),a(z,Ae($f(0)),function(){if(n.$===1)return a(z,Ae(Zb(!0)),e);var i=n.a;return a(z,xi(i),a(z,lf(function(o){return _e(o,af)||_e(o,uf)?Y(i):J}),e))}()))))))),rr($([t])))}),ku=v(function(e,r){return a(Cf,D,{em:a(Le,$([ce(De(36)),Rn(3),Cn(r),ff,ea(12),Hc,wn(r),Ri(1),Nn(4)]),Ln("REC")),eW:Y(e)})}),Du=M(function(e,r,n){return a(Cf,D,{em:hn(h(da,20,n,e)),eW:Y(r)})}),Qb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Tn,D,$([a(Le,$([ce(De(40))]),function(){switch(r.$){case 0:return a(ku,Tu,yi);case 1:return a(ku,Ob,Qt);default:return Je}}()),a(Le,$([ce(De(28))]),function(){switch(r.$){case 0:return Je;case 1:return pn(n)?Je:h(Du,Bn.hp,Ub,Qt);default:return h(Du,Bn.ho,Tu,Qt)}}())]))},e1=function(e){return a(Tr,$([ce(ye)]),$([jb(e),a(Tn,$([ce(ye),Sn(14),a(ef,0,6),vn]),$([Qb(e),Wb(e),Gb(e)]))]))},r1=function(e){return a(Tr,$([ce(ye),Sn(14),Ab({b3:20,g4:0,hx:0,cI:0}),St({b3:1,g4:0,hx:0,cI:0}),wn(Fi)]),$([a(Le,$([ea(16),Hc,Cn(Gc)]),Ln("Time Travel")),a(Nc,Db,e1(e))]))},n1=v(function(e,r){return a(Tr,$([Xn(r).dD.im>600?cn(qh):cn(Yh),St({b3:0,g4:0,hx:1,cI:0}),wn(Fi),ce(De(_a.c4)),we(ye)]),$([function(){return e?Je:a(Tr,$([ce(ye),we(ye),Rn(14),Sn(14)]),$([r1(r),kb(r)]))}()]))}),a1=function(e){return{$:3,a:e}},Vu=Ii(2),t1=h(jr,232,78,50),i1=h(jr,48,48,48),o1=function(e){return a(Dr,"href",Td(e))},c1=Rr("rel"),l1=Dr("target"),Au=v(function(e,r){var n=r.fn,t=r.em;return L($r,wr,gn("a"),a(z,Ae(o1(n)),a(z,Ae(c1("noopener noreferrer")),a(z,Ae(l1("_blank")),a(z,ce(pr),a(z,we(pr),a(z,yr(d.cb+(" "+(d.ax+(" "+d.et)))),e)))))),rr($([t])))}),Ja=Dr("title"),u1=h(jr,31,161,242),$1=function(e){var r=M(function(o,c,l){var u=_e(c,e)?nc:i1;return a(Le,$([rn(Ja(o)),xi(a1(c)),jn,Rn(7)]),hn(h(da,40,u,l)))}),n=a(Tr,$([Hv]),$([h(r,"Configurations",0,Bn.hN)])),t=a(Tr,D,$([a(Au,$([rn(Ja("Twitter")),Vu,jn,Rn(7)]),{em:hn(h(da,40,u1,Bn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(Au,$([rn(Ja("Source Code")),Vu,jn,Rn(7)]),{em:hn(h(da,40,t1,Bn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([ce(De(_a.bF)),Rn(4),xi(Gv),St({b3:1,g4:0,hx:0,cI:0}),wn(Fi),jn,rn(Ja("Activate Distraction Free Mode"))]),hn(h(da,46,nc,Bn.fx)));return a(Tr,$([ce(De(_a.bF)),we(ye),Qv,cn(Wv)]),$([i,n,t]))},v1=function(e){var r=a(Le,$([ce(De(_a.bF)),Hv,Rn(4),xi(Gv),jn,rn(Ja("Deactivate Distraction Free Mode (A)"))]),hn(h(da,46,Wv,Bn.fx)));return e.bx?r:a(Tn,$([ce(De(_a.bF+_a.c4)),we(ye)]),$([$1(e.bp),a(n1,e.bp,e.R)]))},f1=M(function(e,r,n){var t=hg(n.R),i=Xn(n.R);return h(Vh,{hl:$([_g({fO:J,fW:J,hH:J})])},$([ce(De(tt(i.dD.im))),we(De(tt(i.dD.gH))),rn(a(br,"-webkit-font-smoothing","antialiased")),rn(a(br,"pointer-events","none")),rn(a(br,"touch-action","none")),rn(a(br,"user-select","none")),Go(a(Nc,pg,a(r,i,t))),Go(v1(n))]),hn(a(Ah,di(gg),a(e,i,t))))}),m1=Sr(function(e,r,n,t,i,o){var c=v(function(u,f){return P(L($g,r,o,u,f),nu)}),l=function(u){var f=a(K$,n,u.gY);return P({bp:0,bx:!0,R:a(vg,f,t),dO:0},nu)};return M0({gS:l,hX:dg,ii:c,ik:a(f1,e,i)})}),s1=re(function(e,r,n,t){return tr(m1,e,r,n,t,v(function(i,o){return Je}),M(function(i,o,c){return c}))}),d1=M(function(e,r,n){return L(s1,e,r,D,n)}),p1=function(e){return{}},g1=v(function(e,r){return r}),Yn=function(e){return e},qa=function(e){return Yn(qn*(e/180))},bn=ys,h1=v(function(e,r){var n=e,t=r,i=t.dV-n.dV,o=t.is-n.is,c=t.io-n.io,l=a(nr,he(c),a(nr,he(o),he(i)));if(l){var u=i/l,f=o/l,s=c/l,p=bn(s*s+f*f+u*u);return Y({io:s/p,is:f/p,dV:u/p})}else return J}),uo=function(e){return e},Xc=v(function(e,r){var n=e,t=r;return{io:t.is*n.dV-t.dV*n.is,is:t.dV*n.io-t.io*n.dV,dV:t.io*n.is-t.is*n.io}}),ei=function(e){var r=e,n=a(nr,he(r.io),a(nr,he(r.is),he(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=bn(o*o+i*i+t*t);return Y({io:o/c,is:i/c,dV:t/c})}else return J},wi=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),b1=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dV*n.dV}),Lf=v(function(e,r){var n=e,t=r;return be(t,n)>0}),_1=v(function(e,r){var n=e,t=r;return be(t,n)<0}),y1=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),x1=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),w1=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Er=0,Pf={io:0,is:0,dV:0},S1=M(function(e,r,n){return a(rc,function(t){var i=a(y1,a(x1,t,r),r);return a(rc,function(o){var c=a(Xc,r,e),l=a(b1,n,c),u=a(Lf,Er,l)?c:a(_1,Er,l)?w1(c):Pf;return a(Ne,function(f){return j(t,o,f)},ei(u))},ei(i))},ei(e))}),C1=function(e){var r=e,n=he(r.dV),t=he(r.is),i=he(r.io);if(be(i,t)<1)if(be(i,n)<1){var o=bn(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=bn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(be(t,n)<1){var o=bn(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=bn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},Qc=function(e){var r=C1(e),n=r,t=n,i=e,o=i,c={io:o.is*t.dV-o.dV*t.is,is:o.dV*t.io-o.io*t.dV,dV:o.io*t.is-o.is*t.io};return P(r,c)},ga=function(e){var r=e;return r},Kr=function(e){return e},L1=v(function(e,r){var n=Qc(e),t=n.a,i=n.b;return Kr({dm:r,dT:t,dU:i,dW:e})}),P1=function(e){var r=a(wi,e.ba,e.d9),n=ga(e.fm),t=a(Xc,r,n),i=h(S1,r,n,t);if(i.$){var f=ei(r);if(f.$){var p=Qc(e.fm),b=p.a,m=p.b;return Kr({dm:e.d9,dT:m,dU:e.fm,dW:b})}else{var s=f.a;return a(L1,s,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return Kr({dm:e.d9,dT:u,dU:l,dW:c})}},_r={io:0,is:0,dV:0},z1=function(e){return{$:0,a:e}},qe=function(e){var r=e;return he(r)},ri=function(e){var r=e;return .5*r},M1=ds,T1=function(e){var r=e;return M1(r)},k1=function(e){var r=ri(qe(e.fq)),n=T1(r);return{dx:z1(n),dN:e.dN}},ln=function(e){return e},el=ln({io:0,is:1,dV:0}),D1=function(e){var r=e.ba,n=e.d9,t=e.fm;return k1({fq:qa(40),dN:P1({d9:uo(n),ba:uo(r),fm:a(Be,el,a(h1,_r,uo(t)))})})},$o=function(e){return e/255},V1=M(function(e,r,n){return L(ra,$o(e),$o(r),$o(n),1)}),zf=L(ra,52/255,101/255,164/255,1),A1=L(ra,115/255,210/255,22/255,1),rl=function(e){return{$:5,a:e}},I1=function(e){return rl(e)},nl=v(function(e,r){return{$:4,a:e,b:r}}),Mf=function(e){return e},F1=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dV:t.dV+n.dV}}),E1=v(function(e,r){return Mf(P(e,a(F1,r,e)))}),Tf=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),B1=v(function(e,r){var n=r.a,t=r.b,i=r.c;return h(Tf,e(n),e(t),e(i))}),yn=function(e){return e},vo=v(function(e,r){return a(nl,e,a(E1,_r,a(B1,yn,r)))}),R1=L(ra,204/255,0/255,0/255,1),j1=I1($([a(vo,R1,j(100,0,0)),a(vo,A1,j(0,100,0)),a(vo,zf,j(0,0,100))])),al=v(function(e,r){return{$:0,a:e,b:r}}),fo=v(function(e,r){var n=e,t=r;return be(t,n)>-1}),mo=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),un=v(function(e,r){var n=e,t=r;return t-n}),N1=ln({io:-1,is:0,dV:0}),G1=ln({io:0,is:-1,dV:0}),kf=ln({io:0,is:0,dV:-1}),Df=ln({io:1,is:0,dV:0}),tl=ln({io:0,is:0,dV:1}),Xe=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),H1=Sr(function(e,r,n,t,i,o){var c=a(fo,n,o)?tl:kf,l=a(fo,r,i)?el:G1,u=a(fo,e,t)?Df:N1,f=j(qe(a(un,e,t)),qe(a(un,r,i)),qe(a(un,n,o))),s=h(Xe,a(mo,e,t),a(mo,r,i),a(mo,n,o)),p=Kr({dm:s,dT:u,dU:l,dW:c});return{fN:p,a4:f}}),Gn=function(e){var r=e;return r.io},Hn=function(e){var r=e;return r.is},Wn=function(e){var r=e;return r.dV},W1=v(function(e,r){return tr(H1,Gn(e),Hn(e),Wn(e),Gn(r),Hn(r),Wn(r))}),ac=M(function(e,r,n){return{io:e,is:r,dV:n}}),U1=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=j(n/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(al,e,a(W1,h(ac,-c,-l,-u),h(ac,c,l,u)))}),tc=function(e){return{$:0,a:e}},Vf=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Af=M(function(e,r,n){return be(n,e)<0?e:be(n,r)>0?r:n}),so=function(e){return h(Af,0,1,e<=.04045?e/12.92:a(Ct,(e+.055)/1.055,2.4))},Lt=ap,O1=function(e){var r=Uc(e),n=r.hu,t=r.gA,i=r.fS;return h(Lt,so(n),so(t),so(i))},J1=function(e){return h(Vf,0,tc(O1(e)),tc(0))},If=v(function(e,r){return{$:2,a:e,b:r}}),Ff=v(function(e,r){return{$:3,a:e,b:r}}),Ef=v(function(e,r){return{$:1,a:e,b:r}}),q1=function(e){var r=e;return r},il=function(e){var r=e;return q1(r.fN)},ol=function(e){var r=e;return r.a4},Va=function(e){var r=e;return r.dm},Zn=ms,za=ss,ni=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Zn(c),u=za(c),f=t.gm,s=f,p=s.io*u,b=l*p,m=p*p,y=s.is*u,_=l*y,S=p*y,C=y*y,x=1-2*(m+C),T=s.dV*u,W=l*T,X=2*(S-W),ne=2*(S+W),te=p*T,ie=2*(te+_),ee=2*(te-_),q=y*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(m+Me);return{io:Se*o.io+X*o.is+ie*o.dV,is:ne*o.io+me*o.is+de*o.dV,dV:ee*o.io+pe*o.is+x*o.dV}}),Pt=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Zn(c),u=za(c),f=t.dm,s=f,p=o.io-s.io,b=o.is-s.is,m=o.dV-s.dV,y=t.gm,_=y,S=_.io*u,C=l*S,x=S*S,T=_.is*u,W=l*T,X=S*T,ne=T*T,te=1-2*(x+ne),ie=_.dV*u,ee=l*ie,q=2*(X-ee),de=2*(X+ee),pe=S*ie,Me=2*(pe+W),Se=2*(pe-W),me=T*ie,Te=2*(me-C),I=2*(me+C),F=ie*ie,E=1-2*(ne+F),B=1-2*(x+F);return{io:s.io+E*p+q*b+Me*m,is:s.is+de*p+B*b+Te*m,dV:s.dV+Se*p+I*b+te*m}}),na=function(e){var r=e;return r.dT},aa=function(e){var r=e;return r.dU},ta=function(e){var r=e;return r.dW},Y1=M(function(e,r,n){return Kr({dm:h(Pt,e,r,Va(n)),dT:h(ni,e,r,na(n)),dU:h(ni,e,r,aa(n)),dW:h(ni,e,r,ta(n))})}),Z1=M(function(e,r,n){return{fN:h(Y1,e,r,il(n)),a4:ol(n)}}),zt=v(function(e,r){return{gm:r,dm:e}}),K1=v(function(e,r){var n=a(Pt,e,r),t=a(ni,e,r);return function(i){var o=i;return a(zt,n(o.dm),t(o.gm))}}),X1=M(function(e,r,n){var t=n;return{m:h(K1,e,r,t.m),g5:t.g5,hs:t.hs}}),cl=function(e){var r=e;return r},Bf=v(function(e,r){var n=cl(r),t=n.a,i=n.b;return Mf(P(e(t),e(i)))}),Q1=M(function(e,r,n){return a(Bf,a(Pt,e,r),n)}),ll=function(e){var r=e;return r.f4},ul=function(e){var r=e;return r.hs},Rf=v(function(e,r){return{f4:r,hs:qe(e)}}),e_=M(function(e,r,n){return a(Rf,ul(n),h(Pt,e,r,ll(n)))}),jf=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return j(e(t),e(i),e(o))}),r_=M(function(e,r,n){return a(jf,a(Pt,e,r),n)}),ji=M(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(al,l,h(Z1,e,r,t));case 1:var l=n.a,i=n.b;return a(Ef,l,h(r_,e,r,i));case 3:var l=n.a,o=n.b;return a(Ff,l,h(e_,e,r,o));case 2:var l=n.a,c=n.b;return a(If,l,h(X1,e,r,c));case 4:var l=n.a,u=n.b;return a(nl,l,h(Q1,e,r,u));default:var f=n.a;return rl(a(ae,a(ji,e,r),f))}}),$l=Df,n_=a(zt,_r,$l),a_=v(function(e,r){return h(ji,n_,Yn(e),r)}),vl=el,t_=a(zt,_r,vl),i_=v(function(e,r){return h(ji,t_,Yn(e),r)}),fl=tl,o_=a(zt,_r,fl),c_=v(function(e,r){return h(ji,o_,Yn(e),r)}),ke=v(function(e,r){var n=r;return e*n}),$n=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Mt=M(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dV:t.dV+r*(i.dV-t.dV)}}),l_=M(function(e,r,n){var t=il(n),i=na(t),o=aa(t),c=ta(t),l=h(Mt,e,r,Va(t)),u=r>=0?Kr({dm:l,dT:i,dU:o,dW:c}):Kr({dm:l,dT:$n(i),dU:$n(o),dW:$n(c)}),f=ol(n),s=f.a,p=f.b,b=f.c,m=qe(a(ke,r,s)),y=qe(a(ke,r,p)),_=qe(a(ke,r,b));return{fN:u,a4:j(m,y,_)}}),ml=function(e){var r=e;return r.m},Nf=function(e){var r=e;return r.gm},Iu=function(e){return Nf(ml(e))},Gf=function(e){var r=e;return r.dm},u_=function(e){return Gf(ml(e))},Hf=function(e){var r=e;return r.g5},Wf=function(e){var r=e;return r.hs},$_=M(function(e,r,n){var t=qe(a(ke,r,Wf(n))),i=qe(a(ke,r,Hf(n))),o=r>=0?Iu(n):$n(Iu(n)),c=h(Mt,e,r,u_(n));return{m:a(zt,c,o),g5:i,hs:t}}),v_=M(function(e,r,n){return a(Bf,a(Mt,e,r),n)}),f_=M(function(e,r,n){return a(Rf,a(ke,he(r),ul(n)),h(Mt,e,r,ll(n)))}),m_=M(function(e,r,n){return a(jf,a(Mt,e,r),n)}),Uf=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return a(al,c,h(l_,_r,e,n));case 1:var c=r.a,t=r.b;return a(Ef,c,h(m_,_r,e,t));case 3:var c=r.a,i=r.b;return a(Ff,c,h(f_,_r,e,i));case 2:var c=r.a,o=r.b;return a(If,c,h($_,_r,e,o));case 4:var c=r.a,l=r.b;return a(nl,c,h(v_,_r,e,l));default:var u=r.a;return rl(a(ae,Uf(e),u))}}),s_=v(function(e,r){return(r-q$(r/e)*e)/e}),d_=function(e){return 2*qn*e},Nt=re(function(e,r,n,t){return e+(r-e)*(1+Zn(d_(a(s_,n,t))))/2}),p_=function(e){return a(c_,L(Nt,1,10,30,e.bt),a(i_,L(Nt,1,10,30,e.bt),a(a_,L(Nt,1,10,30,e.bt),a(Uf,L(Nt,1,2,14,e.bt),a(U1,J1(zf),j(1,1,1))))))},g_=v(function(e,r){return $([j1,p_(e)])}),h_=function(e){return e},b_=function(e){return yn(.01*e)},Fu=function(e){return e},__=function(e){return e},y_=function(e){return{$:0,a:e}},x_=y_,w_={$:3},S_=w_,C_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),L_=C_,P_=function(e){return{$:1,a:e}},z_=P_,M_=function(e){return a(Rr,"height",k(e))},T_=Mv,k_=function(e){return{$:2,a:e}},D_=k_,V_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return Fe(l*1e3)/1e3},c=function(l){return Fe(l*1e4)/100};return ha($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(t)),"%,",ve(o(i)),")"]))},A_=v(function(e,r){switch(r.$){case 0:return a(Up,e,r);case 1:return a(Op,e,r);case 2:return a(Jp,e,r);case 3:return a(qp,e,r);case 4:return a(Yp,e,r);default:return a(Zp,e,r)}}),I_=v(function(e,r){switch(r.$){case 0:return a(yp,e,r);case 1:return a(xp,e,r);case 2:return a(wp,e,r);case 3:return a(Sp,e,r);case 4:return a(Cp,e,r);case 5:return a(Lp,e,r);case 6:return a(Pp,e,r);case 7:return a(zp,e,r);default:return Mp(e)}}),F_=M(function(e,r,n){return h(Wp,e,r,n)}),Eu=function(e){var r=e;return r},Aa=up,po=L(Aa,1,1,1,1),Gr=M(function(e,r,n){return a(ae,function(t){return a(t,r,n)},e)}),E_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),B_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(E_,n*t/i,n,n*(1-t-i)/i)}),R_=function(e){var r=e.a,n=e.b,t=e.c;return h(Lt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},sl=v(function(e,r){return R_(a(B_,e,r))}),Of=v(function(e,r){return{ek:_e(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cD,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cD,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cD,cD:e.cD*r.cD}}),Or=dp,j_=function(e){return Or({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},go=Ye(function(e,r,n,t,i){var o=t.ek?1:-1,c=L(Aa,t.cD,t.cD,t.cD,o);return tr(i,e,c,j_(t),t.ek,r,n)}),Jf=Sr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,s=n,p=a(Of,c,t),b=l,m=o;e=u,r=f,n=s,t=p,i=b,o=m;continue e;case 1:var y=i.b,_=a(z,V(go,e,r,n,t,y),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(z,V(go,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var x=i.a,T=a(z,V(go,e,r,n,t,x),o.hI);return{P:o.P,_:o._,hI:T};default:var W=i.a;return h(He,L(Jf,e,r,n,t),o,W)}}),N_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),qf=N_,dl=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),G_=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(dl,518,r,n,t)},H_=v(function(e,r){return{$:6,a:e,b:r}}),W_=H_,Yf=$([G_({ab:1,ac:0,ai:!1}),L(qf,!1,!1,!1,!1),a(W_,0,1)]),Ma=519,pl=8,Zf=15,ya=7681,U_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ie=_p,O_=v(function(e,r){return{$:0,a:e,b:r}}),J_=O_({d5:1,ei:0,eS:5}),hr=rp,q_=J_($([{cy:a(hr,-1,-1)},{cy:a(hr,1,-1)},{cy:a(hr,-1,1)},{cy:a(hr,1,1)}])),Y_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cy"},uniforms:{}},Z_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(s){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:s}}}}}}}}}}}},gl=M(function(e,r,n){var t=e.dy,i=e.dd,o=e.dS,c=v(function(f,s){var p=f;return s(p)}),l=v(function(f,s){var p=f;return s(p)}),u=function(f){return a(Ke,c(f.bP),a(Ke,l(f.bA),a(Ke,l(f.bY),l(f.bZ))))};return a(u,n,a(u,r,h(Z_,t,i,o)))}),hl=function(e){return h(gl,{dd:e.dd,dy:e.dy,dS:e.dS},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},bl=function(e){return V(Ie,$([hl(e),L(qf,!1,!1,!1,!1)]),Y_,U_,q_,{})},K_=bl({bA:ya,dd:0,dy:pl,bP:Ma,dS:Zf,bY:ya,bZ:ya}),X_=516,Bu=5386,or=7680,Q_=function(e){return a(Ct,2,e+4)},Kf=function(e){return bl({bA:or,dd:Zf,dy:pl,bP:X_,dS:Q_(e),bY:Bu,bZ:Bu})},e2=M(function(e,r,n){return dr($([h(Gr,e,n,Yf),$([Kf(r),K_])]))}),r2=v(function(e,r){return dr(a(G$,e2(e),r))}),n2=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(dl,513,r,n,t)},a2=n2({ab:1,ac:0,ai:!0}),t2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},i2=function(e){var r=e.cA,n=e.cg,t=e.b1,i=e.b_,o=e.b7,c=e.fI,l=v(function(u,f){var s=u.a,p=u.b,b=u.c,m=f.a,y=f.b,_=f.c;return t2(s)(p)(b)(m)(y)(_)(r)(n)(t)(i)});return a(l,o,c)},o2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ru=v(function(e,r){var n=e,t=r;return h(o2,32774,n,t)}),c2=1,ju=771,l2=770,_l=i2({b_:0,fI:a(Ru,c2,ju),b1:0,b7:a(Ru,l2,ju),cg:0,cA:0}),ca=$([a2,_l]),u2=function(e){var r=e;return r.eL},$2=function(e){var r=e;return r.eM},Xf=function(e){var r=e;return r.eN},v2=function(e){var r=e;return r.eO},f2=function(e){var r=e;return r.eP},Qf=function(e){var r=e;return r.eQ},em=function(e){return j(a(un,v2(e),u2(e)),a(un,f2(e),$2(e)),a(un,Qf(e),Xf(e)))},Nu=function(e){var r=e;return Va(r)},m2=function(e){return e},s2=function(e){return Kr({dm:m2({io:e.K,is:e.L,dV:e.M}),dT:ln({io:e.t,is:e.u,dV:e.v}),dU:ln({io:e.w,is:e.x,dV:e.y}),dW:ln({io:e.z,is:e.A,dV:e.B})})},ho=v(function(e,r){var n=e,t=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,f=u;return{io:t.io*f.io+t.is*f.is+t.dV*f.dV,is:t.io*l.io+t.is*l.is+t.dV*l.dV,dV:t.io*o.io+t.is*o.is+t.dV*o.dV}}),rm=v(function(e,r){var n=e,t=r,i=n.dm,o=i,c=t.io-o.io,l=t.is-o.is,u=t.dV-o.dV,f=n.dW,s=f,p=n.dU,b=p,m=n.dT,y=m;return{io:c*y.io+l*y.is+u*y.dV,is:c*b.io+l*b.is+u*b.dV,dV:c*s.io+l*s.is+u*s.dV}}),nm=v(function(e,r){return{dm:a(rm,e,Va(r)),dT:a(ho,e,na(r)),dU:a(ho,e,aa(r)),dW:a(ho,e,ta(r))}}),Si=function(e){var r=e;return r},Ge=v(function(e,r){var n=e,t=r;return a(nr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(ba,n,t)}),d2=v(function(e,r){var n=Si(r),t=Si(e);return{eL:a(Ge,t.eL,n.eL),eM:a(Ge,t.eM,n.eM),eN:a(Ge,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),kr=function(e){var r=e;return r},p2=function(e){var r=e;return j(r.io,r.is,r.dV)},et=v(function(e,r){var n=e,t=r;return t+n}),g2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ri(qe(t)),c=ri(qe(n)),l=ri(qe(i)),u=p2(r),f=u.a,s=u.b,p=u.c;return{eL:a(et,c,f),eM:a(et,o,s),eN:a(et,l,p),eO:a(un,c,f),eP:a(un,o,s),eQ:a(un,l,p)}}),Gu=re(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,f=i.is*r,s=i.io*r,p=kr(ta(e)),b=he(l*p.io)+he(c*p.is)+he(o*p.dV),m=kr(aa(e)),y=he(l*m.io)+he(c*m.is)+he(o*m.dV),_=kr(na(e)),S=he(l*_.io)+he(c*_.is)+he(o*_.dV),C=a(g2,j(S,y,b),a(rm,e,h(ac,s,f,u)));if(t.$)return Y(C);var x=t.a;return Y(a(d2,x,C))}),ic=re(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var m=e,y=r,_=n,S=o;e=m,r=y,n=_,t=S;continue e;case 1:var c=i.a,l=L(Gu,e,r,c,n),m=e,y=r,_=l,S=o;e=m,r=y,n=_,t=S;continue e;case 2:var m=e,y=r,_=n,S=o;e=m,r=y,n=_,t=S;continue e;case 3:var c=i.a,l=L(Gu,e,r,c,n),m=e,y=r,_=l,S=o;e=m,r=y,n=_,t=S;continue e;case 4:var u=i.a,m=e,y=r,_=L(ic,e,r,n,u),S=o;e=m,r=y,n=_,t=S;continue e;default:var f=i.a,s=i.b,p=a(nm,s2(f),e),b=r*f.cD,m=e,y=r,_=L(ic,p,b,n,$([s])),S=o;e=m,r=y,n=_,t=S;continue e}}else return n}),Ia=tp,Fa=ip,Ea=op,am=function(e){return{$:4,a:e}},h2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(z,n,r);e=i,r=o;continue e}else return r}),Tt=function(e){return am(a(h2,e,D))},b2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cD:1},_2=function(e){var r=e;return r},Hu=bl({bA:ya,dd:0,dy:pl,bP:Ma,dS:255,bY:ya,bZ:ya}),y2=function(e){var r=e,n=a(nr,he(r.io),a(nr,he(r.is),he(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=bn(o*o+i*i+t*t);return c*n}else return Er},lr={b1:0,f3:!1,cg:0,dv:0,cA:0,dK:0,io:0,is:0,dV:0},Lr=v(function(e,r){var n=e,t=r;return Or({eu:n.io,ev:n.cA,ew:t.io,ex:t.cA,ey:n.is,ez:n.cg,eA:t.is,eB:t.cg,eC:n.dV,eD:n.b1,eE:t.dV,eF:t.b1,eG:n.dK,eH:n.dv,eI:t.dK,eJ:t.dv})}),Ya=P({bG:a(Lr,lr,lr),cn:a(Lr,lr,lr),co:a(Lr,lr,lr),cp:a(Lr,lr,lr)},L(Aa,0,0,0,0)),Wu=function(e){var r=e;return-r},tm=514,im=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(dl,515,r,n,t)},om=240,x2=$([im({ab:1,ac:0,ai:!0}),hl({bA:or,dd:om,dy:0,bP:tm,dS:0,bY:or,bZ:or}),_l]),w2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,c=qe(t),l=c,u=qe(i),f=u,s=n.dx;if(s.$){var b=s.a;return Eo(f)?Or({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Or({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-l),eF:-(f+l)/(f-l),eG:0,eH:0,eI:0,eJ:1})}else{var p=s.a;return Eo(f)?Or({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Or({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(f+l)/(f-l),eF:-2*f*l/(f-l),eG:0,eH:0,eI:-1,eJ:0})}}),Gt=v(function(e,r){return(1&e>>r)===1?0:1}),S2=function(e){return $([im({ab:1,ac:0,ai:!0}),hl({bA:or,dd:om,dy:e,bP:tm,dS:0,bY:or,bZ:or}),_l])},C2=M(function(e,r,n){return dr(a(ae,function(t){var i=t<<4,o=L(Aa,a(Gt,t,0),a(Gt,t,1),a(Gt,t,2),a(Gt,t,3));return h(Gr,e,P(r,o),S2(i))},a(on,1,a(Ct,2,n)-1)))}),xa=function(e){var r=e;return r},L2=pp,Uu=function(e){var r=e;return $n(ta(r))},P2={dm:_r,dT:$l,dU:vl,dW:fl},Ni=function(e){var r=e;return r},z2=function(e){var r=Ni(Va(e)),n=kr(ta(e)),t=kr(aa(e)),i=kr(na(e));return Or({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dV,eD:t.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},M2=v(function(e,r){var n=r;return z2(a(nm,n,e))}),T2=function(e){return a(M2,P2,e)},k2=function(e){var r=e;return r.dN},D2=function(e){var r=e;return na(r)},V2=function(e){var r=e;return aa(r)},A2=function(e){var r=k2(e.f0),n=Kr({dm:Nu(r),dT:D2(r),dU:V2(r),dW:$n(Uu(r))}),t=Tt(e.a8),i=t,o=L(ic,n,1,J,$([i]));if(o.$===1)return D;var c=o.a,l=T2(r),u=a(ke,.99,a(Ge,qe(e.a3),Wu(Xf(c)))),f=em(c),s=f.a,p=f.b,b=f.c,m=y2(h(Tf,s,p,b)),y=a(ke,1.01,a(et,m,Wu(Qf(c)))),_=a(w2,e.f0,{fM:e.fM,gv:y,hd:u}),S=L2(_).eJ,C=S?kr($n(Uu(r))):xa(Nu(r)),x=function(){var me=e.cH;switch(me.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var Te=me.a;return P(3,Te);case 4:var Te=me.a;return P(4,Te);default:return P(5,0)}}(),T=x.a,W=x.b,X=e.ce,ne=X,te=a(sl,ne,e.cL),ie=te,ee=Or({eu:0,ev:C.io,ew:Ia(ie),ex:e.ff,ey:0,ez:C.is,eA:Fa(ie),eB:_2(m),eC:0,eD:C.dV,eE:Ea(ie),eF:T,eG:0,eH:S,eI:0,eJ:W}),q=tr(Jf,ee,l,_,b2,i,{P:D,_:D,hI:D}),de=e.cm;switch(de.$){case 0:var pe=de.a;return dr($([h(Gr,q.P,P(pe,po),ca),h(Gr,q._,Ya,ca)]));case 1:var pe=de.a;return dr($([h(Gr,q.P,Ya,ca),$([Hu]),h(Gr,q.hI,pe.bG,Yf),$([Kf(0)]),h(Gr,q.P,P(pe,po),x2),h(Gr,q._,Ya,ca)]));default:var Me=de.a,Se=de.b;return dr($([h(Gr,q.P,P(Se,po),ca),$([Hu]),a(r2,q.hI,Me),h(C2,q.P,Se,Un(Me)),h(Gr,q._,Ya,ca)]))}},I2=function(e){return a(Rr,"width",k(e))},F2=v(function(e,r){var n=$([z_(1),D_(0),x_(!0),L(L_,0,0,0,0)]),t=function(){var T=e.cP;switch(T.$){case 0:return j(n,"0",1);case 1:return j(a(z,S_,n),"1",1);default:var W=T.a;return j(n,"0",W)}}(),i=t.a,o=t.b,c=t.c,l=e.a4,u=l.a,f=l.b,s=Eu(f),p=a(br,"height",k(s)+"px"),b=Eu(u),m=b/s,y=a(Da,function(T){return A2({fM:m,f0:e.f0,a3:e.a3,a8:T.a8,ce:T.ce,cm:T.cm,ff:c,cH:T.cH,cL:T.cL})},r),_=a(br,"width",k(b)+"px"),S=e.a1,C=S,x=V_(C);return h(T_,"div",$([a(br,"padding","0px"),_,p]),$([P(o,h(F_,i,$([I2(Fe(b*c)),M_(Fe(s*c)),_,p,a(br,"display","block"),a(br,"background-color",x)]),y))]))}),E2=function(e){return a(F2,{cP:e.cP,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,ce:e.ce,cm:e.cm,cH:e.cH,cL:e.cL}]))},cm=function(e){return e},Ou=cm({io:.31271,is:.32902}),B2=v(function(e,r){var n=e,t=kr(r.gm),i=t.io,o=t.is,c=t.dV,l=a(sl,r.c1,r.cU),u=l;return{b1:Ea(u),f3:n,cg:Fa(u),dv:0,cA:Ia(u),dK:1,io:-i,is:-o,dV:-c}}),R2=function(e){return e},j2=function(e){return R2(1.2*a(Ct,2,e))},bo=function(e){return e},N2={$:0},G2=N2,lm=function(e){return e},Ju=function(e){var r=e;return r},H2=function(e){e:for(;;){if(_e(e.gZ,Er)&&_e(e.g_,Er))return lr;if(a(Lf,qe(e.gZ),qe(e.g_))){var r={cU:e.cU,gZ:e.g_,g_:e.gZ,fm:$n(e.fm)};e=r;continue e}else{var n=he(Ju(e.g_)/qn),t=he(Ju(e.gZ)/qn),i=kr(e.fm),o=i.io,c=i.is,l=i.dV,u=a(sl,lm(1),e.cU),f=u;return{b1:t*Ea(f),f3:!1,cg:t*Fa(f),dv:n/t,cA:t*Ia(f),dK:3,io:o,is:c,dV:l}}}},qu=function(e){return H2({cU:e.cU,gZ:e.c1,g_:Er,fm:e.fm})},W2=function(e){var r=e;return r},um=function(e){var r=h(Af,1667,25e3,W2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return cm({io:n,is:t})},$m=function(e){return e},U2=um($m(12e3)),O2=um($m(5600)),J2=function(e){return{$:2,a:e}},q2=function(e){return J2(e)},Y2=v(function(e,r){return{$:2,a:e,b:r}}),vm=function(e){return{$:0,a:e}},Ht=function(e){var r=e;return r},Z2=function(e){var r=e;return r.f3},K2=vm(Ya.a),X2=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?P(a(z,t,o),c):P(o,a(z,t,c))});return h(er,n,P(D,D),r)}),Q2=function(e){var r=e;return Or({eu:r.io,ev:r.cA,ew:0,ex:0,ey:r.is,ez:r.cg,eA:0,eB:0,eC:r.dV,eD:r.b1,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},ey=ze(function(e,r,n,t,i,o,c,l){var u=a(X2,Z2,$([Ht(e),Ht(r),Ht(n),Ht(t)])),f=u.a,s=u.b;if(f.b){var p=Z(f,s);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var b=p.a,m=p.b,y=m.a,_=m.b,S=_.a,C=_.b,x=C.a;return a(Y2,a(ae,Q2,f),{bG:a(Lr,b,y),cn:a(Lr,S,x),co:a(Lr,i,o),cp:a(Lr,c,l)})}else return K2}else return vm({bG:a(Lr,e,r),cn:a(Lr,n,t),co:a(Lr,i,o),cp:a(Lr,c,l)})}),ry=M(function(e,r,n){return gt(ey,e,r,n,lr,lr,lr,lr,lr)}),ny=function(e){var r=a(B2,__(e.hI),{cU:O2,gm:e.hZ,c1:bo(8e4)}),n=qu({cU:U2,c1:bo(2e4),fm:e.fm}),t=qu({cU:Ou,c1:bo(15e3),fm:$n(e.fm)}),i=h(ry,r,n,t);return E2({cP:q2(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,ce:j2(15),cm:i,cH:G2,cL:Ou})},fm=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),ay=re(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),mm=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),sm=re(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),ty=re(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),iy=re(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),oy=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),yl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(oy,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(fm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L(ay,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(mm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(iy,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L(sm,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(ty,n,t,i,1);case 8:return e;case 9:return e;default:return e}},xl={$:0},cy=ze(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,s=Si(c(u)),p=a(Oe,s.eO,e),b=a(Ge,s.eL,r),m=a(Oe,s.eP,n),y=a(Ge,s.eM,t),_=a(Oe,s.eQ,i),S=a(Ge,s.eN,o),C=c,x=f;e=p,r=b,n=m,t=y,i=_,o=S,c=C,l=x;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),ly=M(function(e,r,n){var t=Si(e(r));return gt(cy,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),_o=v(function(e,r){var n=e,t=r;return be(t,n)<1}),dm=function(e){return a(_o,e.eL,e.eO)&&a(_o,e.eM,e.eP)&&a(_o,e.eN,e.eQ)?e:{eL:a(Ge,e.eO,e.eL),eM:a(Ge,e.eP,e.eM),eN:a(Ge,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},dt=function(e){var r=e;return r},pm=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=Gn(n),c=Hn(n),l=Wn(n),u=Gn(t),f=Hn(t),s=Wn(t),p=Gn(i),b=Hn(i),m=Wn(i);return dm({eL:a(Ge,o,a(Ge,u,p)),eM:a(Ge,c,a(Ge,f,b)),eN:a(Ge,l,a(Ge,s,m)),eO:a(Oe,o,a(Oe,u,p)),eP:a(Oe,c,a(Oe,f,b)),eQ:a(Oe,l,a(Oe,s,m))})},gm=cp,fr=function(e){return gm(Ni(e))},hm=function(e){var r=e;return r},Gi=function(e){return gm(hm(e))},uy=v(function(e,r){var n=e,t=r,i=a(nr,he(t.io),a(nr,he(t.is),he(t.dV)));if(i){var o=t.dV/i,c=t.is/i,l=t.io/i,u=bn(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return Pf}),$y=uy(lm(1)),bm=M(function(e,r,n){var t=a(wi,r,n),i=a(wi,e,r);return $y(a(Xc,t,i))}),vy=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=Gi(h(bm,n,t,i));return j({q:o,cy:fr(n)},{q:o,cy:fr(t)},{q:o,cy:fr(i)})},fy=v(function(e,r){return{$:2,a:e,b:r}}),_m=fy({d5:3,ei:0,eS:4}),my=function(e){if(e.b){var r=e.a,n=e.b,t=_m(a(ae,vy,e)),i=h(ly,pm,r,n);return L(fm,i,e,t,0)}else return xl},Cr=M(function(e,r,n){return j(e,r,n)}),ym=function(){var e=yn(1),r=yn(1),n=yn(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),c=h(Xe,o,i,t),l=a(ke,.5,e),u=h(Xe,o,i,l),f=a(ke,.5,r),s=h(Xe,o,f,t),p=h(Xe,o,f,l),b=a(ke,.5,n),m=h(Xe,b,i,t),y=h(Xe,b,f,t),_=h(Xe,b,i,l),S=h(Xe,b,f,l);return yl(my($([h(Cr,c,y,m),h(Cr,c,s,y),h(Cr,u,_,S),h(Cr,u,S,p),h(Cr,m,y,S),h(Cr,m,S,_),h(Cr,c,p,s),h(Cr,c,u,p),h(Cr,c,m,_),h(Cr,c,_,u),h(Cr,s,S,y),h(Cr,s,p,S)])))}(),Wt={$:0},sy=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),dy=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),f=Gi(h(bm,u,l,c)),s={q:f,cy:fr(u)},p={q:f,cy:fr(l)},b={q:f,cy:fr(c)};return a(z,s,a(z,p,a(z,b,n)))}),wl=function(e){var r=e;return r.H},py=re(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var c=t.a;return Y(h(e,i,o,c))}),oc=4294967295>>>32-it,cc=ts,gy=M(function(e,r,n){e:for(;;){var t=oc&r>>>e,i=a(cc,t,n);if(i.$){var f=i.a;return a(cc,oc&r,f)}else{var o=i.a,c=e-it,l=r,u=o;e=c,r=l,n=u;continue e}}}),hy=function(e){return e>>>5<<5},by=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||be(e,n)>-1?J:be(e,hy(n))>-1?Y(a(cc,oc&e,o)):Y(h(gy,t,e,i))}),Sl=function(e){var r=e;return r.au},yo=v(function(e,r){return a(by,e,Sl(r))}),_y=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(py,M(function(c,l,u){return j(c,l,u)}),a(yo,t,e),a(yo,i,e),a(yo,o,e))};return a(Jn,r,wl(e))},yy=M(function(e,r,n){e:for(;;){var t=a(Tc,xr,e),i=t.a,o=t.b;if(be(Io(i),xr)<0)return a(Z$,!0,{C:r,n,r:i});var c=o,l=a(z,J$(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Cl=function(e){return e.b?h(yy,e,D,0):U$},xy=v(function(e,r){return!a(xt,a(wt,T0,e),r)}),wy=function(e){var r=e.a;return r},xm=v(function(e,r){var n=wy(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&be(o,n)<0&&c>=0&&be(c,n)<0&&l>=0&&be(l,n)<0};return a(xy,t,r)?{H:r,au:e}:{H:a(Pv,t,r),au:e}}),Sy=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=Sy({d5:1,ei:3,eS:4}),ai=v(function(e,r){var n=xa(r),t=xa(e);return P(j(t.io,t.is,t.dV),j(n.io,n.is,n.dV))}),Yu=h(Lt,0,0,0),xo=Sr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Ic,a(ai,e,r),i);if(f.$){var p={q:Yu,cy:fr(r)},b={q:Yu,cy:fr(e)},m=u+1,y=u;return j(a(z,j(n,y,m),a(z,j(n,m,t),c)),a(z,p,a(z,b,l)),u+2)}else{var s=f.a;return j(a(z,j(n,s,t),c),l,u)}}),Cy=Ye(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,s=e(u),p=e(l),b=e(c),m=t+2,y=t+1,_=t,S=e,C=r,x=f,T=t+3,W=tr(xo,s,b,m,_,r,tr(xo,p,s,y,m,r,tr(xo,b,p,_,y,r,i)));e=S,r=C,n=x,t=T,i=W;continue e}else{var X=i,ne=X.a,te=X.b;return P(ne,sr(te))}}),Ly=Ye(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,s=e(u),p=e(l),b=e(c),m=n+2,y=n+1,_=n,S=h(Ka,a(ai,b,s),m,h(Ka,a(ai,s,p),y,h(Ka,a(ai,p,b),_,i))),C=a(z,j(_,y,m),t),x=e,T=f,W=n+3,X=C,ne=S;e=x,r=T,n=W,t=X,i=ne;continue e}else return j(t,i,n)}),In=M(function(e,r,n){var t=_y(n),i=h(er,dy(r),D,t),o=V(Ly,r,t,0,D,_v),c=o.a,l=o.b,u=o.c,f=V(Cy,r,l,t,0,j(c,D,u)),s=f.a,p=f.b,b=pn(p)?i:Z(i,p);return h(sy,e,a(xm,Cl(b),s),a(kt,b,s))}),lc=function(e){return{H:a(ae,function(r){return j(3*r,3*r+1,3*r+2)},a(on,0,Un(e)-1)),au:Cl(dr(a(ae,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},wm=function(e){switch(e.$){case 0:return Wt;case 1:var t=e.a,r=e.b,n=a(ae,dt,r);return h(In,t,Br,lc(n));case 2:var t=e.a,r=e.b,n=a(ae,dt,r);return h(In,t,Br,lc(n));case 3:var t=e.a,i=e.b;return h(In,t,Br,i);case 4:var t=e.a,i=e.b;return h(In,t,function(o){return o.cy},i);case 5:var t=e.a,i=e.b;return h(In,t,function(o){return o.cy},i);case 6:var t=e.a,i=e.b;return h(In,t,function(o){return o.cy},i);case 7:var t=e.a,i=e.b;return h(In,t,function(o){return o.cy},i);case 8:return Wt;case 9:return Wt;default:return Wt}},Zu=wm(ym),Sm={$:0},U=Sm,Qe=v(function(e,r){return{$:1,a:e,b:r}}),Py={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},zy=1029,My=function(e){return{$:5,a:e}},Cm=function(e){var r=e;return My(r)},Ty=Cm(zy),ky=1028,Dy=Cm(ky),mr=M(function(e,r,n){return r===1?e?a(z,Ty,n):a(z,Dy,n):n}),Lm={src:`
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
    `,attributes:{position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},wo=re(function(e,r,n,t){return a(Qe,r,ze(function(i,o,c,l,u,f,s,p){return V(Ie,h(mr,l,t,p),Lm,Py,n,{b8:e,c,d:o,e:f,f:i,g:u})}))}),Ll={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},Pm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Qr=re(function(e,r,n,t){return a(Qe,r,ze(function(i,o,c,l,u,f,s,p){return V(Ie,h(mr,l,t,p),Pm,Ll,n,{aO:e,c,d:o,e:f,f:i,g:u})}))}),zm=v(function(e,r){return{$:3,a:e,b:r}}),Vy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cx",sceneProperties:"f"}},Mm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cx",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ay=re(function(e,r,n,t){return a(zm,n,ze(function(i,o,c,l,u,f,s,p){return V(Ie,p,Mm,Vy,t,{aO:e,c,d:o,cx:r,e:f,f:i,g:u})}))}),Pl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Hi=lp,en=Ye(function(e,r,n,t,i){return a(Qe,n,ze(function(o,c,l,u,f,s,p,b){return V(Ie,h(mr,u,i,b),Pm,Pl,t,{a6:a(Hi,Dt(r),e),c:l,d:c,e:s,f:o,g:f})}))}),Iy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cx",sceneProperties:"f"}},Fy=Ye(function(e,r,n,t,i){return a(zm,t,ze(function(o,c,l,u,f,s,p,b){return V(Ie,b,Mm,Iy,i,{a6:a(Hi,Dt(r),e),c:l,d:c,cx:n,e:s,f:o,g:f})}))}),Tm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},km={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ut=re(function(e,r,n,t){return a(Qe,r,ze(function(i,o,c,l,u,f,s,p){var b=s.a,m=s.b;return V(Ie,h(mr,l,t,p),km,Tm,n,{U:m,bG:b.bG,cn:b.cn,co:b.co,cp:b.cp,de:e,c,d:o,e:f,f:i,g:u})}))}),Dm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Vm={src:`
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
    `,attributes:{normal:"q",position:"cy",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ey=Sr(function(e,r,n,t,i,o){return a(Qe,t,ze(function(c,l,u,f,s,p,b,m){var y=b.a,_=b.b;return V(Ie,h(mr,f,o,m),Vm,Dm,i,{U:_,bG:y.bG,cn:y.cn,co:y.co,cp:y.cp,df:e,c:u,d:l,bg:r,e:p,f:c,bm:n,g:s})}))}),Am={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cT",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},By=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(s){return a(Qe,u,ze(function(p,b,m,y,_,S,C,x){var T=C.a,W=C.b;return V(Ie,h(mr,y,s,x),Vm,Am,f,{cT:e,cV:r,cW:o,cX:t,U:W,bG:T.bG,cn:T.cn,co:T.co,cp:T.cp,di:i,c:m,d:b,bg:c,e:S,dC:n,f:p,bm:l,g:_})}))}}}}}}}}}}},Im={src:`
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
    `,attributes:{},uniforms:{baseColor:"cS",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},Ot=Sr(function(e,r,n,t,i,o){return a(Qe,t,ze(function(c,l,u,f,s,p,b,m){var y=b.a,_=b.b;return V(Ie,h(mr,f,o,m),km,Im,i,{cS:e,U:_,bG:y.bG,cn:y.cn,co:y.co,cp:y.cp,dh:n,c:u,d:l,e:p,dB:r,f:c,g:s})}))}),Ry=function(e){return{$:0,a:e}},Ku=v(function(e,r){return{$:1,a:e,b:r}}),rt=v(function(e,r){if(r.$){var n=r.a.E;return P(n,1)}else return r.a,P(e,0)}),jy=function(e){return L(Aa,Ia(e),Fa(e),Ea(e),1)},zl=L(Aa,0,0,0,0),ti=v(function(e,r){if(r.$){var t=r.a.E;return P(t,zl)}else{var n=r.a;return P(e,jy(n))}}),Fm=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.E;return a(Ku,P(i,zl),a(rt,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Ku,a(ti,i,e),a(rt,i,r))}else{var t=n.a.a;return n.b.a,Ry(t)}}),Ny=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jt=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Gy=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Hy=function(e){return a(hr,e,1)},uc=a(hr,0,0),la=v(function(e,r){if(r.$){var t=r.a.E;return P(t,uc)}else{var n=r.a;return P(e,Hy(n))}}),Em=re(function(e,r,n,t){var i=L(Gy,e,r,n,t);if(i.a.$){var u=i.a.a.E;return L(Jt,P(u,zl),a(la,u,r),a(la,u,n),a(rt,u,t))}else if(i.b.$){var u=i.b.a.E;return L(Jt,a(ti,u,e),P(u,uc),a(la,u,n),a(rt,u,t))}else if(i.c.$){var u=i.c.a.E;return L(Jt,a(ti,u,e),a(la,u,r),P(u,uc),a(rt,u,t))}else if(i.d.$){var u=i.d.a.E;return L(Jt,a(ti,u,e),a(la,u,r),a(la,u,n),P(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(Ny,o,c,l)}}),Wy={src:`
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
    `,attributes:{},uniforms:{backlight:"cQ",colorTexture:"b8",sceneProperties:"f"}},So=Ye(function(e,r,n,t,i){return a(Qe,n,ze(function(o,c,l,u,f,s,p,b){return V(Ie,h(mr,u,i,b),Lm,Wy,t,{cQ:Dt(r),b8:e,c:l,d:c,e:s,f:o,g:f})}))}),Bm={src:`
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
    `,attributes:{normal:"q",position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Uy=re(function(e,r,n,t){return a(Qe,r,ze(function(i,o,c,l,u,f,s,p){var b=s.a,m=s.b;return V(Ie,h(mr,l,t,p),Bm,Dm,n,{U:m,bG:b.bG,cn:b.cn,co:b.co,cp:b.cp,df:e,c,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),Oy=fc(function(e,r,n,t,i,o,c,l,u){return a(Qe,c,ze(function(f,s,p,b,m,y,_,S){var C=_.a,x=_.b;return V(Ie,h(mr,b,u,S),Bm,Am,l,{cT:e,cV:r,cW:o,cX:t,U:x,bG:C.bG,cn:C.cn,co:C.co,cp:C.cp,di:i,c:p,d:s,bg:e,e:y,dC:n,f,bm:0,g:m})}))}),pt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Jy=function(e){var r=e;return h(pt,r.eO,r.eL,.5)},qy=function(e){var r=e;return h(pt,r.eP,r.eM,.5)},Yy=function(e){var r=e;return h(pt,r.eQ,r.eN,.5)},Zy=function(e){return h(Xe,Jy(e),qy(e),Yy(e))},$e=function(e){var r=em(e),n=r.a,t=r.b,i=r.c;return{f4:Ni(Zy(e)),gD:n/2,gE:t/2,gF:i/2}},Ml=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return L(wo,l,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(wo,l,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(wo,l,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var n=e.b.a;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return L(Qr,n,$e(i),c,t);case 8:var i=r.a,c=r.c;return L(Qr,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return L(Qr,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return L(Ay,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,f=e.c;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return V(So,l,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(So,l,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(So,l,f,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(en,u,f,$e(i),c,t);case 8:var i=r.a,c=r.c;return V(en,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return V(en,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return V(Fy,u,f,o,$e(i),c)}}case 2:e.a;var s=e.b,ne=e.c,p=a(Fm,s,ne);if(p.$){var y=p.a,_=y.a;y.b;var S=p.b,C=S.a,x=S.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,m=r.d;return L(Uy,_,$e(i),c,m);case 7:var i=r.a,c=r.c,m=r.d;return tr(Ey,_,C,x,$e(i),c,m);case 8:return U;case 9:return U;default:return U}}else{var b=p.a;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,m=r.d;return L(Ut,b,$e(i),c,m);case 3:return U;case 4:var i=r.a,c=r.c,m=r.d;return L(Ut,b,$e(i),c,m);case 5:return U;case 6:var i=r.a,c=r.c,m=r.d;return L(Ut,b,$e(i),c,m);case 7:var i=r.a,c=r.c,m=r.d;return L(Ut,b,$e(i),c,m);case 8:return U;case 9:return U;default:return U}}default:e.a;var T=e.b,W=e.c,X=e.d,ne=e.e,te=L(Em,T,W,X,ne);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,I=te.c,F=I.a,E=I.b,B=te.d,C=B.a,x=B.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return Qm(Oy,pe,Me,me,Te,F,E,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return By(pe)(Me)(me)(Te)(F)(E)(C)(x)($e(i))(c)(t);case 8:return U;case 9:return U;default:return U}}else{var ie=te.a,ee=te.b,q=te.c;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,t=r.d;return tr(Ot,ie,ee,q,$e(i),c,t);case 3:return U;case 4:var i=r.a,c=r.c,t=r.d;return tr(Ot,ie,ee,q,$e(i),c,t);case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return tr(Ot,ie,ee,q,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return tr(Ot,ie,ee,q,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}}}),Co=function(e){var r=e;return r.io},Lo=function(e){var r=e;return r.is},Po=function(e){var r=e;return r.dV},Ky=function(e){var r=e,n=Po(r.dW),t=Lo(r.dW),i=Co(r.dW),o=Po(r.dU),c=Lo(r.dU),l=Co(r.dU),u=Po(r.dT),f=Lo(r.dT),s=Co(r.dT);return s*c*n+f*o*i+u*l*t-u*c*i-f*l*n-s*o*t>0},Xy=function(e){var r=Ni(Va(e)),n=kr(ta(e)),t=kr(aa(e)),i=kr(na(e));return{ek:Ky(e),t:i.io,u:i.is,v:i.dV,w:t.io,x:t.is,y:t.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cD:1}},va=v(function(e,r){return{$:5,a:e,b:r}}),Rm=v(function(e,r){var n=r;switch(n.$){case 0:return U;case 5:var t=n.a,i=n.b,o=a(Of,t,e);return a(va,o,i);case 1:return a(va,e,n);case 3:return a(va,e,n);case 2:return a(va,e,n);default:return a(va,e,n)}}),jm=v(function(e,r){return a(Rm,Xy(e),r)}),Wi=function(e){return{$:2,a:e}},Qy=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dV:i*o.dV},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),ex=vp,rx=$p,Xu=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var s=e.a,p=e.b,b=e.c,m=rx(t),y=m.io,_=m.is,S=m.dV,C=m.ft,x=ex({ft:C,io:y*s,is:_*p,dV:S*b});return gt(r,n,x,i,o,c,l,u,f)}}}}}}}}}},$c=v(function(e,r){switch(r.$){case 0:return Sm;case 5:var n=r.a,t=r.b;return a(va,n,a($c,e,t));case 1:var i=r.a,o=r.b;return a(Qe,a(Qy,e,i),a(Xu,e,o));case 3:return r;case 2:var o=r.a;return Wi(a(Xu,e,o));default:var c=r.a;return am(a(ae,$c(e),c))}}),Tl=v(function(e,r){var n=r;return a($c,e,n)}),kl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Nm=7683,Gm=7682,nx=h(gl,{dd:0,dy:0,dS:15},{bA:or,bP:Ma,bY:or,bZ:Nm},{bA:or,bP:Ma,bY:or,bZ:Gm}),ax=h(gl,{dd:0,dy:0,dS:15},{bA:or,bP:Ma,bY:or,bZ:Gm},{bA:or,bP:Ma,bY:or,bZ:Nm}),Dl=v(function(e,r){return e?a(z,ax,r):a(z,nx,r)}),tx={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},ix=function(e){if(e.$){var r=e.c;return Y(ze(function(n,t,i,o,c,l,u,f){return V(Ie,a(Dl,o,f),tx,kl,r,{c:i,d:t,e:l,f:n,cE:u,g:c})}))}else return J},Ci=function(e){var r=ix(e);if(r.$)return U;var n=r.a;return Wi(n)},ox=re(function(e,r,n,t){var i=a(Ml,n,ym),o=function(){var s=P(e,r);return s.a?s.b?Tt($([i,Ci(Zu)])):i:s.b?Ci(Zu):U}(),c=ol(t),l=c.a,u=c.b,f=c.c;return a(jm,il(t),a(Tl,j(l,u,f),o))}),cx=v(function(e,r){return L(ox,!0,!0,e,r)}),Hm=v(function(e,r){return{$:0,a:e,b:r}}),lx=function(e){var r=Uc(e),n=r.hu,t=r.gA,i=r.fS;return h(Lt,n,t,i)},ux=function(e){return a(Hm,0,tc(lx(e)))},nt=function(e){var r=e;return Zn(r)},$x=v(function(e,r){var n=r;return n/e}),Qu=function(e){var r=e;return{io:Zn(r),is:za(r)}},vx=v(function(e,r){var n=e.cy,t=e.q;return a(z,{q:Gi(t),cy:fr(n)},r)}),fx=zi(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=Ea(l.cy),s=Fa(l.cy),p=Ia(l.cy),b=a(ba,e,p),m=a(nr,r,p),y=a(ba,n,s),_=a(nr,t,s),S=a(ba,i,f),C=a(nr,o,f),x=u;e=b,r=m,n=y,t=_,i=S,o=C,c=x;continue e}else return dm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),Wm=v(function(e,r){var n=Ea(e.cy),t=Fa(e.cy),i=Ia(e.cy);return mc(fx,i,i,t,t,n,n,r)}),mx=function(e){var r=h(E$,vx,D,Sl(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,wl(e)),o=a(Wm,n,t);return L(mm,o,e,i,0)}else return xl},e$=v(function(e,r){var n=e,t=r,i=n.dU,o=i,c=n.dT,l=c;return{io:t.io*l.io+t.is*o.io,is:t.io*l.is+t.is*o.is,dV:t.io*l.dV+t.is*o.dV}}),Li=function(e){var r=e;return za(r)},vc=function(e){return Yn(2*qn*e)},sx=Br,r$=sx({dm:_r,dT:$l,dU:vl}),Um=function(){var e=72,r=a($x,e,vc(1)),n=yn(1),t=ga(tl),i=ga(kf),o=yn(1),c=a(ke,.5,o),l=h(Xe,Er,Er,c),u=a(ke,-.5,o),f=h(Xe,Er,Er,u),s=function(m){var y=a(ke,m,r),_=ga(a(e$,r$,Qu(y))),S=a(ke,nt(y),n),C=a(ke,Li(y),n),x=h(Xe,S,C,c),T=h(Xe,S,C,u),W=a(bi,e,m+1),X=a(ke,W,r),ne=ga(a(e$,r$,Qu(X))),te=a(ke,nt(X),n),ie=a(ke,Li(X),n),ee=h(Xe,te,ie,u),q=h(Xe,te,ie,c);return $([j({q:i,cy:f},{q:i,cy:ee},{q:i,cy:T}),j({q:_,cy:T},{q:ne,cy:ee},{q:ne,cy:q}),j({q:_,cy:T},{q:ne,cy:q},{q:_,cy:x}),j({q:t,cy:l},{q:t,cy:x},{q:t,cy:q})])},p=a(ae,s,a(on,0,e-1)),b=lc(dr(p));return yl(mx(b))}(),n$=wm(Um),dx=function(e){var r=Nf(e),n=Qc(r),t=n.a,i=n.b;return Kr({dm:Gf(e),dT:t,dU:i,dW:r})},px=re(function(e,r,n,t){var i=dx(ml(t)),o=a(Ml,n,Um),c=function(){var p=P(e,r);return p.a?p.b?Tt($([o,Ci(n$)])):o:p.b?Ci(n$):U}(),l=Wf(t),u=l,f=Hf(t),s=f;return a(jm,i,a(Tl,j(u,u,s),c))}),gx=v(function(e,r){return L(px,!0,!0,e,r)}),a$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},t$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Za=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=xa(n),c=xa(t),l=xa(i);return Or({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},qt=_m($([j({dJ:0},{dJ:1},{dJ:2})])),hx=v(function(e,r){var n=pm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var i=e.b.a;return a(Qe,t,ze(function(x,T,W,X,ne,te,ie,ee){return V(Ie,h(mr,X,0,ee),a$,Ll,qt,{aO:i,c:W,d:T,e:te,f:x,bV:Za(r),g:ne})}));case 1:if(e.b.$)return e.a,U;var o=e.b.a,c=e.c;return a(Qe,t,ze(function(x,T,W,X,ne,te,ie,ee){return V(Ie,h(mr,X,0,ee),a$,Pl,qt,{a6:a(Hi,Dt(c),o),c:W,d:T,e:te,f:x,bV:Za(r),g:ne})}));case 2:e.a;var l=e.b,m=e.c,u=a(Fm,l,m);if(u.$)return U;var f=u.a;return a(Qe,t,ze(function(x,T,W,X,ne,te,ie,ee){var q=ie.a,de=ie.b;return V(Ie,h(mr,X,0,ee),t$,Tm,qt,{U:de,bG:q.bG,cn:q.cn,co:q.co,cp:q.cp,de:f,c:W,d:T,e:te,f:x,bV:Za(r),g:ne})}));default:e.a;var s=e.b,p=e.c,b=e.d,m=e.e,y=L(Em,s,p,b,m);if(y.$)return U;var _=y.a,S=y.b,C=y.c;return a(Qe,t,ze(function(x,T,W,X,ne,te,ie,ee){var q=ie.a,de=ie.b;return V(Ie,h(mr,X,0,ee),t$,Im,qt,{cS:_,U:de,bG:q.bG,cn:q.cn,co:q.co,cp:q.cp,dh:C,c:W,d:T,e:te,dB:S,f:x,bV:Za(r),g:ne})}))}}),bx=function(){var e=$([{bl:a(hr,0,1)},{bl:a(hr,1,1)},{bl:a(hr,2,1)},{bl:a(hr,0,-1)},{bl:a(hr,1,-1)},{bl:a(hr,2,-1)}]),r=$([j(0,1,2),j(3,5,4),j(3,4,1),j(3,1,0),j(4,5,2),j(4,2,1),j(5,3,0),j(5,0,2)]);return a(kt,e,r)}(),_x={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",triangleVertexPositions:"bV",viewMatrix:"g"}},i$=function(e){return Wi(ze(function(r,n,t,i,o,c,l,u){return V(Ie,a(Dl,i,u),_x,kl,bx,{c:t,d:n,e:c,f:r,cE:l,bV:Za(e),g:o})}))},yx=re(function(e,r,n,t){var i=a(hx,n,t),o=P(e,r);return o.a?o.b?Tt($([i,i$(t)])):i:o.b?i$(t):U}),xx=v(function(e,r){return L(yx,!0,!0,e,r)}),wx=v(function(e,r){var n=Wn(r),t=Wn(e),i=Hn(r),o=Hn(e),c=Gn(r),l=Gn(e);return{eL:a(Ge,l,c),eM:a(Ge,o,i),eN:a(Ge,t,n),eO:a(Oe,l,c),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),Sx=function(e){var r=cl(e),n=r.a,t=r.b;return a(wx,n,t)},o$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Cx=v(function(e,r){return{$:1,a:e,b:r}}),Lx=Cx({d5:2,ei:0,eS:1}),c$=Lx($([P({es:0},{es:1})])),Px=v(function(e,r){var n=Sx(r),t=$e(n),i=cl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var l=e.b.a;return a(Qe,t,ze(function(f,s,p,b,m,y,_,S){return V(Ie,S,o$,Ll,c$,{aO:l,eq:fr(c),er:fr(o),c:p,d:s,e:y,f,g:m})}));case 1:if(e.b.$)return U;var l=e.b.a,u=e.c;return a(Qe,t,ze(function(s,p,b,m,y,_,S,C){return V(Ie,C,o$,Pl,c$,{a6:a(Hi,Dt(u),l),eq:fr(c),er:fr(o),c:b,d:p,e:_,f:s,g:y})}));case 2:return U;default:return U}}),zx=v(function(e,r){return a(Px,e,r)}),l$=v(function(e,r){var n=e,t=r;return n/t}),Mx=Ye(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(z,o,i);if(_e(r,e))return c;var l=e,u=r-1,f=n,s=t,p=c;e=l,r=u,n=f,t=s,i=p;continue e}}),u$=v(function(e,r){return e<1?D:V(Mx,0,e,e,r,D)}),Tx=v(function(e,r){var n=e.cy,t=e.q,i=e.O,o=i,c=o.a,l=o.b;return a(z,{q:Gi(t),cy:fr(n),O:a(hr,c,l)},r)}),kx=function(e){var r=h(E$,Tx,D,Sl(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,wl(e)),o=a(Wm,n,t);return L(sm,o,e,i,0)}else return xl},Om=v(function(e,r){var n=e,t=r,i=Zn(t);return{io:i*Zn(n),is:i*za(n),dV:za(t)}}),Dx=function(){var e=yn(1),r=72,n=a(on,0,r-1),t=a(u$,r,a(pt,Er,vc(1))),i=tt(r/2),o=a(on,0,i-1),c=a(u$,i,a(pt,qa(90),qa(-90))),l=Cl(dr(a(ae,function(s){return a(ae,function(p){return{q:ga(a(Om,s,p)),cy:h(Xe,a(ke,nt(p)*nt(s),e),a(ke,nt(p)*Li(s),e),a(ke,Li(p),e)),O:P(a(l$,s,vc(1)),a(l$,a(et,qa(90),p),qa(180)))}},c)},t))),u=v(function(s,p){return s*(i+1)+p}),f=dr(a(ae,function(s){return dr(a(ae,function(p){var b=a(u,s+1,p),m=a(u,s,p),y=a(u,s+1,p+1),_=a(u,s,p+1);return $([j(_,y,b),j(_,b,m)])},o))},n));return yl(kx(a(xm,l,f)))}(),Pi=72,Yt=2*Pi,Vx=v(function(e,r){e:for(;;){var n=Yt+1,t=a(bi,Yt,2*e+3),i=a(bi,Yt,2*e+2),o=2*e+1,c=2*e,l=Yt,u=a(z,j(l,c,i),a(z,j(c,t,i),a(z,j(c,o,t),a(z,j(o,n,t),r))));if(e){var f=e-1,s=u;e=f,r=s;continue e}else return u}}),Ax=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Ix=v(function(e,r){e:for(;;){var n=h(Ax,0,2*qn,e/Pi),t={b$:n,cu:0,cB:1},i={b$:n,cu:1,cB:1},o=a(z,t,a(z,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Fx=function(){var e=a(Ix,Pi-1,$([{b$:0,cu:0,cB:0},{b$:0,cu:1,cB:0}])),r=a(Vx,Pi-1,D);return a(kt,e,r)}(),Ex={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cu",radiusScale:"cB"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},$$=function(e){return Wi(ze(function(r,n,t,i,o,c,l,u){return V(Ie,a(Dl,!0,u),Ex,kl,Fx,{aO:h(Lt,0,0,1),c:t,d:n,e:c,f:r,cE:l,g:o})}))},Bx=function(e){var r=hm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cD:1}},Rx=v(function(e,r){return a(Rm,Bx(e),r)}),jx=re(function(e,r,n,t){var i=a(Ml,n,Dx),o=function(){var u=P(e,r);return u.a?u.b?Tt($([i,$$()])):i:u.b?$$():U}(),c=ul(t),l=c;return a(Rx,a(wi,_r,ll(t)),a(Tl,j(l,l,l),o))}),Nx=v(function(e,r){return L(jx,!0,!0,e,r)}),Gx=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Hx=Ye(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Wx=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Hm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(Gx,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return h(Vf,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return V(Hx,n,t,i,o,c)}},Ux=Wx,Jm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(cx,i,r)]);case 1:var i=e.a,n=e.b;return $([a(xx,i,n)]);case 3:var i=e.a,t=e.b;return $([a(Nx,Ux(i),t)]);case 2:var i=e.a,o=e.b;return $([a(gx,i,o)]);case 4:var c=e.a,l=e.b;return $([a(zx,ux(c),l)]);default:var u=e.a;return a(Da,Jm,u)}},Ox=function(e){return a(Da,Jm,e)},Jx=v(function(e,r){return ny({a1:h_(e.fO),f0:e.f0,a3:b_(.5),cY:e.cY,a4:P(Fu(Fe(e.dD.im)),Fu(Fe(e.dD.gH))),a8:Ox(r),hI:!0,hZ:a(Om,Yn(e.hY),Yn(e.h_)),fm:fl})}),qx=v(function(e,r){return a(Jx,{fO:h(V1,46,46,46),f0:D1({d9:{io:0,is:4,dV:8},ba:{io:0,is:0,dV:0},fm:{io:0,is:1,dV:0}}),cY:e.cY,dD:e.dD,hY:-ec(135),h_:-ec(45)},a(g_,e,r))}),Yx=h(d1,qx,g1,p1);const Zx={Main:{init:Yx(a(Q,function(e){return ur({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({bt:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(s){return a(Q,function(p){return ur({fJ:p,gd:s,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",si(Sa)))},a(K,"left",Pe))},a(K,"pressedKeys",si(Sa)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Kx=e=>{const r=m=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(m.code),n=m=>["AltLeft","AltRight"].includes(m.code),t=m=>["ShiftLeft","ShiftRight"].includes(m.code),i=m=>m.code=="ArrowLeft",o=m=>m.code=="ArrowRight",c=m=>m.code=="ArrowUp",l=m=>m.code=="ArrowDown",u=m=>m.button==0,f=m=>m.button==2;function s(m){m.keyboard.pressedKeys=[],m.keyboard.control=!1,m.keyboard.alt=!1,m.keyboard.shift=!1,m.keyboard.left=!1,m.keyboard.right=!1,m.keyboard.up=!1,m.keyboard.down=!1,m.pointer.isDown=!1}function p(m){m.keyboard.downs=[],m.pointer.down=!1,m.pointer.move=!1,m.pointer.up=!1,m.pointer.rightDown=!1,m.pointer.rightUp=!1,m.wheel.deltaX=0,m.wheel.deltaY=0}window.addEventListener("keydown",m=>{m.repeat||(oe.keyboard.downs.push(m.code),oe.keyboard.pressedKeys.push(m.code),r(m)&&(oe.keyboard.control=!0),n(m)&&(oe.keyboard.alt=!0),t(m)&&(console.log("yo"),oe.keyboard.shift=!0),i(m)&&(oe.keyboard.left=!0),o(m)&&(oe.keyboard.right=!0),c(m)&&(oe.keyboard.up=!0),l(m)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",m=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(y=>y!=m.code),r(m)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(m)&&(oe.keyboard.alt=!1),t(m)&&(oe.keyboard.shift=!1),i(m)&&(oe.keyboard.left=!1),o(m)&&(oe.keyboard.right=!1),c(m)&&(oe.keyboard.up=!1),l(m)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",m=>{oe.pointer.x=-.5*oe.screen.width+m.pageX,oe.pointer.y=.5*oe.screen.height-m.pageY,u(m)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(m)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",m=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+m.pageX,oe.pointer.y=.5*oe.screen.height-m.pageY}),window.addEventListener("pointerup",m=>{u(m)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(m)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",m=>{u(m)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(m)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",m=>{oe.wheel.deltaX=m.deltaX,oe.wheel.deltaY=m.deltaY}),window.addEventListener("blur",m=>{s(oe)}),window.addEventListener("focus",m=>{s(oe)}),window.addEventListener("visibilitychange",m=>{s(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(m){const y=m/1e3,_=y-oe.clock;_<.009||(oe.dt=_,oe.clock=y,e.ports.tick.send(oe),p(oe)),window.requestAnimationFrame(b)}},Xx=Zx.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});Kx(Xx);
