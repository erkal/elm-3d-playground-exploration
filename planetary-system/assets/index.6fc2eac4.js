const Km=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Km();function Ln(e,r,n){return n.a=e,n.f=r,n}function v(e){return Ln(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return Ln(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ae(e){return Ln(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Je(e){return Ln(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function kr(e){return Ln(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function Mi(e){return Ln(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function Pe(e){return Ln(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function fc(e){return Ln(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,t,i,o,c,l,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function z(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function V(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function lr(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function mc(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function _t(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function Zm(e,r,n,t,i,o,c,l,u,f){return e.a===9?e.f(r,n,t,i,o,c,l,u,f):e(r)(n)(t)(i)(o)(c)(l)(u)(f)}var Qm=[];function es(e){return e.length}var rs=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),ns=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),as=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var ts=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+is()),r});function is(e){return"<internals>"}function za(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function he(e,r){for(var n,t=[],i=zo(e,r,0,t);i&&(n=t.pop());i=zo(n.a,n.b,0,t));return i}function zo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&za(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=ql(e),r=ql(r));for(var i in e)if(!zo(e[i],r[i],n+1,t))return!1;return!0}v(he);v(function(e,r){return!he(e,r)});function xe(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=xe(e.a,r.a))||(n=xe(e.b,r.b))?n:xe(e.c,r.c);for(;e.b&&r.b&&!(n=xe(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return xe(e,r)<0});v(function(e,r){return xe(e,r)<1});v(function(e,r){return xe(e,r)>0});v(function(e,r){return xe(e,r)>=0});var os=v(function(e,r){var n=xe(e,r);return n<0?N$:n?Zp:j$}),xt=0;function L(e,r){return{a:e,b:r}}function G(e,r,n){return{a:e,b:r,c:n}}function Be(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Jr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Jr(e.a,r);return n}var D={$:0};function Jr(e,r){return{$:1,a:e,b:r}}var cs=v(Jr);function $(e){for(var r=D,n=e.length;n--;)r=Jr(e[n],r);return r}function Ti(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ls=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ae(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Je(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(z(e,r.a,n.a,t.a,i.a));return $(o)});kr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(Ti(r).sort(function(n,t){return xe(e(n),e(t))}))});v(function(e,r){return $(Ti(r).sort(function(n,t){var i=a(e,n,t);return i===j$?0:i===N$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var us=v(Math.pow);v(function(e,r){return r%e});var $s=v(function(e,r){var n=r%e;return e===0?za(11):n>0&&e<0||n<0&&e>0?n+e:n}),vs=Math.PI,fs=Math.cos,ms=Math.sin,ss=Math.tan;v(Math.atan2);function ds(e){return e}function ps(e){return e===1/0||e===-1/0}var gs=Math.ceil,hs=Math.floor,bs=Math.round,_s=Math.sqrt,Vl=Math.log,xs=isNaN;function ws(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var ys=v(function(e,r){return e+r});function Ss(e){var r=e.charCodeAt(0);return isNaN(r)?J:X(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function Cs(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Ls(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var zs=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ps=v(function(e,r){return r.split(e)}),Ms=v(function(e,r){return r.join(e)}),Ts=M(function(e,r,n){return n.slice(e,r)});function ks(e){return $(e.trim().split(/\s+/g))}function Ds(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Vs=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Fs=v(function(e,r){return r.indexOf(e)>-1}),As=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Is=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function m$(e){return e+""}function Es(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:X(n==45?-r:r)}function Bs(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?X(r):J}function Rs(e){return Ti(e).join("")}function js(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ns(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Hs(e){return{$:0,a:e}}function Ws(e){return{$:1,a:e}}function sc(e){return{$:2,b:e}}var Gs=sc(function(e){return typeof e=="boolean"?Ge(e):Hr("a BOOL",e)}),Us=sc(function(e){return typeof e=="number"?Ge(e):Hr("a FLOAT",e)}),Os=sc(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Hr("a STRING",e)});function qs(e){return{$:3,b:e}}var Js=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function zn(e,r){return{$:9,f:e,g:r}}var Ys=v(function(e,r){return{$:10,b:r,h:e}}),Xs=v(function(e,r){return zn(e,[r])}),Ks=M(function(e,r,n){return zn(e,[r,n])});ae(function(e,r,n,t){return zn(e,[r,n,t])});Je(function(e,r,n,t,i){return zn(e,[r,n,t,i])});kr(function(e,r,n,t,i,o){return zn(e,[r,n,t,i,o])});Mi(function(e,r,n,t,i,o,c){return zn(e,[r,n,t,i,o,c])});Pe(function(e,r,n,t,i,o,c,l){return zn(e,[r,n,t,i,o,c,l])});fc(function(e,r,n,t,i,o,c,l,u){return zn(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return yr(e,n)}catch(t){return nr(a(zc,"This is not valid JSON! "+t.message,r))}});var s$=v(function(e,r){return yr(e,r)});function yr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Hr("null",r);case 3:return It(r)?Fl(e.b,r,$):Hr("a LIST",r);case 4:return It(r)?Fl(e.b,r,Zs):Hr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Hr("an OBJECT with a field named `"+n+"`",r);var f=yr(e.b,r[n]);return Ar(f)?f:nr(a(Jl,n,f.a));case 7:var t=e.e;if(!It(r))return Hr("an ARRAY",r);if(t>=r.length)return Hr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=yr(e.b,r[t]);return Ar(f)?f:nr(a(H$,t,f.a));case 8:if(typeof r!="object"||r===null||It(r))return Hr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=yr(e.b,r[o]);if(!Ar(f))return nr(a(Jl,o,f.a));i=Jr(L(o,f.a),i)}return Ge(fr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=yr(l[u],r);if(!Ar(f))return f;c=c(f.a)}return Ge(c);case 10:var f=yr(e.b,r);return Ar(f)?yr(e.h(f.a),r):f;case 11:for(var m=D,g=e.g;g.b;g=g.b){var f=yr(g.a,r);if(Ar(f))return f;m=Jr(f.a,m)}return nr(Qp(fr(m)));case 1:return nr(a(zc,e.a,r));case 0:return Ge(e.a)}}function Fl(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=yr(e,r[o]);if(!Ar(c))return nr(a(H$,o,c.a));i[o]=c.a}return Ge(n(i))}function It(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Zs(e){return a(s0,e.length,function(r){return e[r]})}function Hr(e,r){return nr(a(zc,"Expecting "+e,r))}function oa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return oa(e.b,r.b);case 6:return e.d===r.d&&oa(e.b,r.b);case 7:return e.e===r.e&&oa(e.b,r.b);case 9:return e.f===r.f&&Al(e.g,r.g);case 10:return e.h===r.h&&oa(e.b,r.b);case 11:return Al(e.g,r.g)}}function Al(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!oa(e[t],r[t]))return!1;return!0}var Qs=v(function(e,r){return JSON.stringify(r,null,e)+""});function d$(e){return e}function ed(){return[]}function rd(){return{}}var nd=M(function(e,r,n){return n[e]=r,n});function ad(e){return v(function(r,n){return n.push(e(r)),n})}function On(e){return{$:0,a:e}}function td(e){return{$:1,a:e}}function un(e){return{$:2,b:e,c:null}}var Po=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function id(e){return{$:5,b:e}}var od=0;function dc(e){var r={$:0,e:od++,f:e,g:null,h:[]};return pc(r),r}function p$(e){return un(function(r){r(On(dc(e)))})}function g$(e,r){e.h.push(r),pc(e)}var cd=v(function(e,r){return un(function(n){g$(e,r),n(On(xt))})}),ao=!1,Il=[];function pc(e){if(Il.push(e),!ao){for(ao=!0;e=Il.shift();)ld(e);ao=!1}}function ld(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,pc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ae(function(e,r,n,t){return gc(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function gc(e,r,n,t,i,o){var c=a(s$,e,r?r.flags:void 0);Ar(c)||za(2);var l={},u=n(c.a),f=u.a,m=o(b,f),g=ud(l,b);function b(d,x){var _=a(t,d,f);m(f=_.a,x),Bl(l,_.b,i(f))}return Bl(l,u.b,i(f)),g?{ports:g}:{}}var Or={};function ud(e,r){var n;for(var t in Or){var i=Or[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=vd(i,r)}return n}function $d(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function vd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(Po,l,id(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&c?z(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=dc(a(Po,l,e.b))}var fd=v(function(e,r){return un(function(n){e.g(r),n(On(xt))})});v(function(e,r){return a(cd,e.h,{$:0,a:r})});function h$(e){return function(r){return{$:1,k:e,l:r}}}function md(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var El=[],to=!1;function Bl(e,r,n){if(El.push({p:e,q:r,r:n}),!to){to=!0;for(var t;t=El.shift();)sd(t.p,t.q,t.r);to=!1}}function sd(e,r,n){var t={};ci(!0,r,t,null),ci(!1,n,t,null);for(var i in e)g$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ci(e,r,n,t){switch(r.$){case 1:var i=r.k,o=dd(e,i,t,r.l);n[i]=pd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)ci(e,c.a,n,t);return;case 3:ci(e,r.o,n,{s:r.n,t});return}}function dd(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Or[r].e:Or[r].f;return a(o,i,t)}function pd(e,r,n){return n=n||{i:D,j:D},e?n.i=Jr(r,n.i):n.j=Jr(r,n.j),n}function gd(e){Or[e]&&za(3)}v(function(e,r){return r});function hd(e,r){return gd(e),Or[e]={f:bd,u:r,a:_d},h$(e)}var bd=v(function(e,r){return function(n){return e(r(n))}});function _d(e,r){var n=D,t=Or[e].u,i=On(null);Or[e].b=i,Or[e].c=M(function(c,l,u){return n=l,i});function o(c){var l=a(s$,t,c);Ar(l)||za(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var li,an=typeof document!="undefined"?document:{};function hc(e,r){e.appendChild(r)}ae(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(hn(e,function(){}),i),{}});function Mo(e){return{$:0,a:e}}var b$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:_c(n),e:i,f:e,b:o}})}),$n=b$(void 0),xd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:_c(n),e:i,f:e,b:o}})}),wd=xd(void 0);function yd(e,r,n,t){return{$:3,d:_c(e),g:r,h:n,i:t}}var Sd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Pn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Pn([e,r],function(){return e(r)})});M(function(e,r,n){return Pn([e,r,n],function(){return a(e,r,n)})});var Cd=ae(function(e,r,n,t){return Pn([e,r,n,t],function(){return h(e,r,n,t)})});Je(function(e,r,n,t,i){return Pn([e,r,n,t,i],function(){return z(e,r,n,t,i)})});kr(function(e,r,n,t,i,o){return Pn([e,r,n,t,i,o],function(){return V(e,r,n,t,i,o)})});Mi(function(e,r,n,t,i,o,c){return Pn([e,r,n,t,i,o,c],function(){return lr(e,r,n,t,i,o,c)})});Pe(function(e,r,n,t,i,o,c,l){return Pn([e,r,n,t,i,o,c,l],function(){return mc(e,r,n,t,i,o,c,l)})});fc(function(e,r,n,t,i,o,c,l,u){return Pn([e,r,n,t,i,o,c,l,u],function(){return _t(e,r,n,t,i,o,c,l,u)})});var _$=v(function(e,r){return{$:"a0",n:e,o:r}}),Ld=v(function(e,r){return{$:"a1",n:e,o:r}}),bc=v(function(e,r){return{$:"a2",n:e,o:r}}),Br=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function x$(e){return e=="script"?"p":e}function zd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Pd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Md(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function w$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Td=v(function(e,r){return r.$==="a0"?a(_$,r.n,kd(e,r.o)):r});function kd(e,r){var n=kc(r);return{$:r.$,a:n?h(d0,n<3?Dd:Vd,or(e),r.a):a(fi,e,r.a)}}var Dd=v(function(e,r){return L(e(r.a),r.b)}),Vd=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function _c(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Rl(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?Rl(c,i,o):c[i]=o}return r}function Rl(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function hn(e,r){var n=e.$;if(n===5)return hn(e.k||(e.k=e.m()),r);if(n===0)return an.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=hn(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return To(c,r,e.d),c}var c=e.f?an.createElementNS(e.f,e.c):an.createElement(e.c);li&&e.c=="a"&&c.addEventListener("click",li(c)),To(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)hc(c,hn(n===1?l[u]:l[u].b,r));return c}function To(e,r,n){for(var t in n){var i=n[t];t==="a1"?Fd(e,i):t==="a0"?Ed(e,r,i):t==="a3"?Ad(e,i):t==="a4"?Id(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Fd(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Ad(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Id(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Ed(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Bd(r,o),e.addEventListener(i,c,xc&&{passive:kc(o)<2}),t[i]=c}}var xc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xc=!0}}))}catch{}function Bd(e,r){function n(t){var i=n.q,o=yr(i.a,t);if(!!Ar(o)){for(var c=kc(i),l=o.a,u=c?c<3?l.a:l.aA:l,f=c==1?l.b:c==3&&l.dH,m=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&t.preventDefault(),e),g,b;g=m.j;){if(typeof g=="function")u=g(u);else for(var b=g.length;b--;)u=g[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Rd(e,r){return e.$==r.$&&oa(e.a,r.a)}function y$(e,r){var n=[];return Ir(e,r,n,0),n}function rr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Ir(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=qd(r),o=1;else{rr(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Ir(e.k,r.k,m,0),m.length>0&&rr(n,1,t,m);return;case 4:for(var g=e.j,b=r.j,d=!1,x=e.k;x.$===4;)d=!0,typeof g!="object"?g=[g,x.j]:g.push(x.j),x=x.k;for(var _=r.k;_.$===4;)d=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(d&&g.length!==b.length){rr(n,0,t,r);return}(d?!jd(g,b):g!==b)&&rr(n,2,t,b),Ir(x,_,n,t+1);return;case 0:e.a!==r.a&&rr(n,3,t,r.a);return;case 1:jl(e,r,n,t,Nd);return;case 2:jl(e,r,n,t,Hd);return;case 3:if(e.h!==r.h){rr(n,0,t,r);return}var S=wc(e.d,r.d);S&&rr(n,4,t,S);var C=r.i(e.g,r.g);C&&rr(n,5,t,C);return}}}function jd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function jl(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){rr(n,0,t,r);return}var o=wc(e.d,r.d);o&&rr(n,4,t,o),i(e,r,n,t)}function wc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=wc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Rd(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Nd(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?rr(n,6,t,{v:l,i:c-l}):c<l&&rr(n,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var m=i[f];Ir(m,o[f],n,++t),t+=m.b||0}}function Hd(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,m=u.length,g=0,b=0,d=t;g<f&&b<m;){var x=l[g],_=u[b],S=x.a,C=_.a,w=x.b,T=_.b,W=void 0,Z=void 0;if(S===C){d++,Ir(w,T,i,d),d+=w.b||0,g++,b++;continue}var re=l[g+1],te=u[b+1];if(re){var ie=re.a,ee=re.b;Z=C===ie}if(te){var q=te.a,de=te.b;W=S===q}if(W&&Z){d++,Ir(w,de,i,d),Ra(o,i,S,T,b,c),d+=w.b||0,d++,ja(o,i,S,ee,d),d+=ee.b||0,g+=2,b+=2;continue}if(W){d++,Ra(o,i,C,T,b,c),Ir(w,de,i,d),d+=w.b||0,g+=1,b+=2;continue}if(Z){d++,ja(o,i,S,w,d),d+=w.b||0,d++,Ir(ee,T,i,d),d+=ee.b||0,g+=2,b+=1;continue}if(re&&ie===q){d++,ja(o,i,S,w,d),Ra(o,i,C,T,b,c),d+=w.b||0,d++,Ir(ee,de,i,d),d+=ee.b||0,g+=2,b+=2;continue}break}for(;g<f;){d++;var x=l[g],w=x.b;ja(o,i,x.a,w,d),d+=w.b||0,g++}for(;b<m;){var pe=pe||[],_=u[b];Ra(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||c.length>0||pe)&&rr(n,8,t,{w:i,x:c,y:pe})}var S$="_elmW6BL";function Ra(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Ir(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Ra(e,r,n+S$,t,i,o)}function ja(e,r,n,t,i){var o=e[n];if(!o){var c=rr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Ir(t,o.z,l,i),rr(r,9,i,{w:l,A:o});return}ja(e,r,n+S$,t,i)}function C$(e,r,n,t){Na(e,r,n,0,0,r.b,t)}function Na(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var f=l.$;if(f===1)C$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&Na(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var g=l.s;if(g){g.A.s=e;var m=g.w;m.length>0&&Na(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var b=r.$;if(b===4){for(var d=r.k;d.$===4;)d=d.k;return Na(e,d,n,t,i+1,o,e.elm_event_node_ref)}for(var x=r.e,_=e.childNodes,S=0;S<x.length;S++){i++;var C=b===1?x[S]:x[S].b,w=i+(C.b||0);if(i<=u&&u<=w&&(t=Na(_[S],C,n,t,i,w,c),!(l=n[t])||(u=l.r)>o))return t;i=w}return t}function L$(e,r,n,t){return n.length===0?e:(C$(e,r,n,t),ui(e,n))}function ui(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Wd(i,t);i===e&&(e=o)}return e}function Wd(e,r){switch(r.$){case 0:return Gd(e,r.s,r.u);case 4:return To(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ui(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(hn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ui(e,o.w),e;case 8:return Ud(e,r);case 5:return r.s(e);default:za(10)}}function Gd(e,r,n){var t=e.parentNode,i=hn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Ud(e,r){var n=r.s,t=Od(n.y,r);e=ui(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:hn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&hc(e,t),e}function Od(e,r){if(!!e){for(var n=an.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;hc(n,o.c===2?o.s:hn(o.z,r.u))}return n}}function yc(e){if(e.nodeType===3)return Mo(e.textContent);if(e.nodeType!==1)return Mo("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Jr(a(Br,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Jr(yc(f[t]),u);return h($n,l,r,u)}function qd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Jd=ae(function(e,r,n,t){return gc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=t.node,u=yc(l);return z$(o,function(f){var m=c(f),g=y$(u,m);l=L$(l,u,g,i),u=m})})});ae(function(e,r,n,t){return gc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=an.title,f=an.body,m=yc(f);return z$(o,function(g){li=c;var b=l(g),d=$n("body")(D)(b.fU),x=y$(m,d);f=L$(f,m,x,i),m=d,li=0,u!==b.id&&(an.title=u=b.id)})})});var $i=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function z$(e,r){r(e);var n=0;function t(){n=n===1?0:($i(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&$i(t),n=2)}}v(function(e,r){return a(Vc,yt,un(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Vc,yt,un(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Vc,yt,un(function(){history.replaceState({},"",r),e()}))});var Yd={addEventListener:function(){},removeEventListener:function(){}},Xd=typeof window!="undefined"?window:Yd;M(function(e,r,n){return p$(un(function(t){function i(o){dc(n(o))}return e.addEventListener(r,i,xc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=yr(e,r);return Ar(n)?X(n.a):J});function P$(e,r){return un(function(n){$i(function(){var t=document.getElementById(e);n(t?On(r(t)):td(p0(e)))})})}function Kd(e){return un(function(r){$i(function(){r(On(e()))})})}v(function(e,r){return P$(r,function(n){return n[e](),xt})});v(function(e,r){return Kd(function(){return Xd.scroll(e,r),xt})});M(function(e,r,n){return P$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,xt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Zd=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return X(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var Qd=M(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var g=u[f];m[--f]=g?X(g):J}t.push(z(df,u[0],u.index,i,$(m))),l=r.lastIndex}return r.lastIndex=c,$(t)});ae(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?X(f):J}return n(z(df,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var ep=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/rp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function rp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Sc=new Float64Array(3),Nl=new Float64Array(3),Hl=new Float64Array(3),np=M(function(e,r,n){return new Float64Array([e,r,n])}),ap=function(e){return e[0]},tp=function(e){return e[1]},ip=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var op=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function M$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(M$);function T$(e,r,n){return n===void 0&&(n=new Float64Array(3)),vi(M$(e,r,n),n)}v(T$);function k$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function vi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/k$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var cp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ha=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ha);function ko(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(ko);v(function(e,r){var n,t=Sc,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ha(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ha(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ha(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ha(r,t)+e[14])/n,i});var lp=ae(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var up=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},$p=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/vp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function vp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var fp=new Float64Array(16),mp=new Float64Array(16),sp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},dp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function D$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}kr(D$);ae(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return D$(c,l,o,i,n,t)});function V$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}kr(V$);ae(function(e,r,n,t){return V$(e,r,n,t,-1,1)});function F$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],m=e[7],g=e[8],b=e[9],d=e[10],x=e[11],_=e[12],S=e[13],C=e[14],w=e[15],T=r[0],W=r[1],Z=r[2],re=r[3],te=r[4],ie=r[5],ee=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],A=r[14],I=r[15];return n[0]=t*T+l*W+g*Z+_*re,n[1]=i*T+u*W+b*Z+S*re,n[2]=o*T+f*W+d*Z+C*re,n[3]=c*T+m*W+x*Z+w*re,n[4]=t*te+l*ie+g*ee+_*q,n[5]=i*te+u*ie+b*ee+S*q,n[6]=o*te+f*ie+d*ee+C*q,n[7]=c*te+m*ie+x*ee+w*q,n[8]=t*de+l*pe+g*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+d*Me+C*Se,n[11]=c*de+m*pe+x*Me+w*Se,n[12]=t*me+l*Te+g*A+_*I,n[13]=i*me+u*Te+b*A+S*I,n[14]=o*me+f*Te+d*A+C*I,n[15]=c*me+m*Te+x*A+w*I,n}v(F$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],m=e[9],g=e[10],b=e[12],d=e[13],x=e[14],_=r[0],S=r[1],C=r[2],w=r[4],T=r[5],W=r[6],Z=r[8],re=r[9],te=r[10],ie=r[12],ee=r[13],q=r[14];return n[0]=t*_+c*S+f*C,n[1]=i*_+l*S+m*C,n[2]=o*_+u*S+g*C,n[3]=0,n[4]=t*w+c*T+f*W,n[5]=i*w+l*T+m*W,n[6]=o*w+u*T+g*W,n[7]=0,n[8]=t*Z+c*re+f*te,n[9]=i*Z+l*re+m*te,n[10]=o*Z+u*re+g*te,n[11]=0,n[12]=t*ie+c*ee+f*q+b,n[13]=i*ie+l*ee+m*q+d,n[14]=o*ie+u*ee+g*q+x,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=vi(r,Sc);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/k$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),g=o*m,b=c*m,d=l*m,x=o*c*f,_=o*l*f,S=c*l*f,C=o*o*f+u,w=x+d,T=_-b,W=x-d,Z=c*c*f+u,re=S+g,te=_+b,ie=S-g,ee=l*l*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],A=n[7],I=n[8],E=n[9],B=n[10],R=n[11],j=n[12],N=n[13],H=n[14],je=n[15];return t[0]=q*C+Se*w+I*T,t[1]=de*C+me*w+E*T,t[2]=pe*C+Te*w+B*T,t[3]=Me*C+A*w+R*T,t[4]=q*W+Se*Z+I*re,t[5]=de*W+me*Z+E*re,t[6]=pe*W+Te*Z+B*re,t[7]=Me*W+A*Z+R*re,t[8]=q*te+Se*ie+I*ee,t[9]=de*te+me*ie+E*ee,t[10]=pe*te+Te*ie+B*ee,t[11]=Me*te+A*ie+R*ee,t[12]=j,t[13]=N,t[14]=H,t[15]=je,t});function pp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(pp);ae(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function gp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(gp);ae(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],m=t[5],g=t[6],b=t[7],d=t[8],x=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=m,i[6]=g,i[7]=b,i[8]=d,i[9]=x,i[10]=_,i[11]=S,i[12]=o*e+f*r+d*n+t[12],i[13]=c*e+m*r+x*n+t[13],i[14]=l*e+g*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],m=r[4],g=r[5],b=r[6],d=r[7],x=r[8],_=r[9],S=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=m,n[5]=g,n[6]=b,n[7]=d,n[8]=x,n[9]=_,n[10]=S,n[11]=C,n[12]=c*t+m*i+x*o+r[12],n[13]=l*t+g*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+d*i+C*o+r[15],n});M(function(e,r,n){var t=T$(e,r,Sc),i=vi(ko(n,t,Nl),Nl),o=vi(ko(t,i,Hl),Hl),c=fp,l=mp;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,F$(c,l)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var Wl=0;function it(e,r){for(;r.b;r=r.b)e(r.a)}function Cc(e){for(var r=0;e.b;e=e.b)r++;return r}var hp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},bp=Je(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),_p=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),xp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),wp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),yp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Sp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Cp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Lp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),zp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Pp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Mp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Tp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},kp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},A$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},I$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Dp=function(e){e.gl.disable(e.gl.CULL_FACE)},Vp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Fp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Ap=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Gl=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ip=[Mp,Tp,kp,A$,I$,Dp,Vp,Fp,Ap];function Ul(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Ep(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function E$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Bp(e,r,n,t){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(d,x,_,S,C){var w;if(i===1)for(w=0;w<x;w++)d[_++]=x===1?S[C]:S[C][w];else o.forEach(function(T){for(w=0;w<x;w++)d[_++]=x===1?S[T][C]:S[T][C][w]})}var u=E$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,g=new u.type(Cc(n.b)*m);it(function(d){l(g,u.size*u.arraySize,f,d,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,g,e.STATIC_DRAW),b}function Rp(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=jp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Cc(r.b),indexBuffer:null,buffers:{}}}function jp(e,r){var n=new Uint32Array(Cc(e)*r),t=0,i;return it(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Ol(e,r){return e+"#"+r}var B$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),A$(n),I$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=Ol(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Wl++,f||(f=Ul(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Wl++,m||(m=Ul(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var g=Ep(t,f,m);l={glProgram:g,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Np(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(g,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var d=t.getActiveAttrib(g,u),x=t.getAttribLocation(g,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(x)}c=Ol(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),Hp(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Rp(t,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],x=l.activeAttributeLocations[u],_.buffers[d.name]===void 0&&(_.buffers[d.name]=Bp(t,d,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[d.name]);var S=E$(t,d.type);if(S.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,w=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(x+T),t.vertexAttribPointer(x+T,S.size,S.baseType,!1,w,C*T)}for(n.toggle=!n.toggle,it(F_(n),o.a),u=0;u<Gl.length;u++){var W=n[Gl[u]];W.toggle!==n.toggle&&W.enabled&&(Ip[u](n),W.enabled=!1,W.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return it(i,e.g),r});function Np(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(d,x){var _=x.name,S=e.getUniformLocation(d,_);switch(x.type){case e.INT:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};case e.FLOAT:return function(w){o[_]!==w&&(e.uniform1f(S,w),o[_]=w)};case e.FLOAT_VEC2:return function(w){o[_]!==w&&(e.uniform2f(S,w[0],w[1]),o[_]=w)};case e.FLOAT_VEC3:return function(w){o[_]!==w&&(e.uniform3f(S,w[0],w[1],w[2]),o[_]=w)};case e.FLOAT_VEC4:return function(w){o[_]!==w&&(e.uniform4f(S,w[0],w[1],w[2],w[3]),o[_]=w)};case e.FLOAT_MAT4:return function(w){o[_]!==w&&(e.uniformMatrix4fv(S,!1,new Float32Array(w)),o[_]=w)};case e.SAMPLER_2D:var C=c++;return function(w){e.activeTexture(e.TEXTURE0+C);var T=l.textures.get(w);T||(T=w.ge(e),l.textures.set(w,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==w&&(e.uniform1i(S,C),o[_]=w)};case e.BOOL:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),g=0;g<m;g++){var b=e.getActiveUniform(i,g);f[t[b.name]||b.name]=u(i,b)}return f}function Hp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Wp=M(function(e,r,n){return yd(r,{g:n,f:{},h:e},Xp,Kp)}),Gp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Up=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Op=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),qp=v(function(e,r){e.contextAttributes.antialias=!0}),Jp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Yp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Xp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};it(function(i){return a(V_,r,i)},e.h);var n=an.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),hp(function(){return a(B$,e,n)})):(n=an.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Kp(e,r){return r.f=e.f,B$(r)}var P=cs,Et=ts,R$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(Et,e,l,f)}else{var u=c.a;return h(Et,o,l,u)}});return h(Et,o,h(Et,e,r,i),t)}),Lc=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,t,i,h(Lc,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),ql=function(e){return h(Lc,M(function(r,n,t){return a(P,L(r,n),t)}),D,e)},j$=1,Zp=2,N$=0,nr=function(e){return{$:1,a:e}},zc=v(function(e,r){return{$:3,a:e,b:r}}),Jl=v(function(e,r){return{$:0,a:e,b:r}}),H$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},Qp=function(e){return{$:2,a:e}},X=function(e){return{$:0,a:e}},J={$:1},e0=Vs,r0=Qs,k=m$,le=v(function(e,r){return a(Ms,e,Ti(r))}),Pc=v(function(e,r){return $(a(Ps,e,r))}),W$=function(e){return a(le,`
    `,a(Pc,`
`,e))},Re=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),Gn=function(e){return h(Re,v(function(r,n){return n+1}),0,e)},n0=ls,a0=M(function(e,r,n){e:for(;;)if(xe(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),tn=v(function(e,r){return h(a0,e,r,D)}),G$=v(function(e,r){return h(n0,e,a(tn,0,Gn(r)-1),r)}),qr=js,U$=function(e){var r=qr(e);return 97<=r&&r<=122},O$=function(e){var r=qr(e);return r<=90&&65<=r},t0=function(e){return U$(e)||O$(e)},i0=function(e){var r=qr(e);return r<=57&&48<=r},o0=function(e){return U$(e)||O$(e)||i0(e)},fr=function(e){return h(Re,P,D,e)},Pa=Ss,c0=v(function(e,r){return`

(`+(k(e+1)+(") "+W$(l0(r))))}),l0=function(e){return a(u0,e,D)},u0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=Pa(n);if(_.$===1)return!1;var S=_.a,C=S.a,w=S.b;return t0(C)&&a(e0,o0,w)}(),i=t?"."+n:"['"+(n+"']"),u=c,f=a(P,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(k(o)+"]"),u=c,f=a(P,l,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var g=function(){return r.b?"The Json.Decode.oneOf at json"+a(le,"",fr(r)):"Json.Decode.oneOf"}(),x=g+(" failed in the following "+(k(Gn(m))+" ways:"));return a(le,`

`,a(P,x,a(G$,c0,m)))}else{var c=m.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(le,"",fr(r)):"!"}();default:var b=e.a,d=e.b,x=function(){return r.b?"Problem with the value at json"+(a(le,"",fr(r))+`:

    `):`Problem with the given value:

`}();return x+(W$(a(r0,4,d))+(`

`+b))}}),br=32,Do=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Vo=Qm,ot=gs,Mc=v(function(e,r){return Vl(r)/Vl(e)}),Wa=ds,ct=ot(a(Mc,2,br)),q$=z(Do,0,ct,Vo,Vo),J$=rs,Y$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var X$=hs,Fo=es,Cr=v(function(e,r){return xe(e,r)>0?e:r}),$0=function(e){return{$:0,a:e}},Tc=ns,v0=v(function(e,r){e:for(;;){var n=a(Tc,br,e),t=n.a,i=n.b,o=a(P,$0(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return fr(o)}}),K$=function(e){var r=e.a;return r},f0=v(function(e,r){e:for(;;){var n=ot(r/br);if(n===1)return a(Tc,br,e).a;var t=a(v0,e,D),i=n;e=t,r=i;continue e}}),Z$=v(function(e,r){if(r.n){var n=r.n*br,t=X$(a(Mc,br,n-1)),i=e?fr(r.C):r.C,o=a(f0,i,r.n);return z(Do,Fo(r.r)+n,a(Cr,5,t*ct),o,r.r)}else return z(Do,Fo(r.r),ct,Vo,r.r)}),m0=Je(function(e,r,n,t,i){e:for(;;){if(r<0)return a(Z$,!1,{C:t,n:n/br|0,r:i});var o=Y$(h(J$,br,r,e)),c=e,l=r-br,u=n,f=a(P,o,t),m=i;e=c,r=l,n=u,t=f,i=m;continue e}}),s0=v(function(e,r){if(e<=0)return q$;var n=e%br,t=h(J$,n,e-n,r),i=e-n-br;return V(m0,r,i,e,D,t)}),Ar=function(e){return!e.$},Q=Ys,ze=Gs,K=Js,Ue=Us,Q$=v(function(e,r){return{cU:r.cU,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),fi=Xs,d0=Ks,or=Hs,kc=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Er=function(e){return e},p0=Er,Yl=kr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),g0=Fs,En=Cs,ca=Ts,wt=v(function(e,r){return e<1?r:h(ca,e,En(r),r)}),ki=Is,Di=function(e){return e===""},Vi=v(function(e,r){return e<1?"":h(ca,0,e,r)}),ev=Es,Xl=Je(function(e,r,n,t,i){if(Di(i)||a(g0,"@",i))return J;var o=a(ki,":",i);if(o.b){if(o.b.b)return J;var c=o.a,l=ev(a(wt,c+1,i));if(l.$===1)return J;var u=l;return X(lr(Yl,e,a(Vi,c,i),u,r,n,t))}else return X(lr(Yl,e,i,J,r,n,t))}),Kl=ae(function(e,r,n,t){if(Di(t))return J;var i=a(ki,"/",t);if(i.b){var o=i.a;return V(Xl,e,a(wt,o,t),r,n,a(Vi,o,t))}else return V(Xl,e,"/",r,n,t)}),Zl=M(function(e,r,n){if(Di(n))return J;var t=a(ki,"?",n);if(t.b){var i=t.a;return z(Kl,e,X(a(wt,i+1,n)),r,a(Vi,i,n))}else return z(Kl,e,J,r,n)});v(function(e,r){if(Di(r))return J;var n=a(ki,"#",r);if(n.b){var t=n.a;return h(Zl,e,X(a(wt,t+1,r)),a(Vi,t,r))}else return h(Zl,e,J,r)});var h0=As,yt=function(e){},St=On,b0=St(0),rv=ae(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var m=f.a,g=f.b,b=n>500?h(Re,e,r,fr(g)):z(rv,e,r,n+1,g);return a(e,i,a(e,c,a(e,u,a(e,m,b))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),Ze=M(function(e,r,n){return z(rv,e,r,0,n)}),ne=v(function(e,r){return h(Ze,v(function(n,t){return a(P,e(n),t)}),D,r)}),mi=Po,Dc=v(function(e,r){return a(mi,function(n){return St(e(n))},r)}),_0=M(function(e,r,n){return a(mi,function(t){return a(mi,function(i){return St(a(e,t,i))},n)},r)}),x0=function(e){return h(Ze,_0(P),St(D),e)},w0=fd,y0=v(function(e,r){var n=r;return p$(a(mi,w0(e),n))}),S0=M(function(e,r,n){return a(Dc,function(t){return 0},x0(a(ne,y0(e),r)))}),C0=M(function(e,r,n){return St(0)}),L0=v(function(e,r){var n=r;return a(Dc,e,n)});Or.Task=$d(b0,S0,C0,L0);var z0=h$("Task"),Vc=v(function(e,r){return z0(a(Dc,e,r))}),P0=Jd,M0=ws,si={$:1},nv=function(e){return{$:2,a:e}},Fc={$:0},Lr=v(function(e,r){return{$:0,a:e,b:r}}),Xe=M(function(e,r,n){return r(e(n))}),qn=function(e){var r=e.b.s;return r.a},T0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return X(a(Lr,r,{s:o,an:c,X:a(P,t,n)}))}else return J},Ee=v(function(e,r){if(r.$)return e;var n=r.a;return n}),k0=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dI;return(xe(o+r.gp,qn(n).cU)>0?a(Xe,T0,Ee(a(Lr,si,i))):Er)(a(Lr,nv({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,f=a(Q$,l.gb,Be(r,{cU:l.cU+r.gp})),m=a(e,f,u);return a(Lr,Fc,{s:L(f,m),an:D,X:a(P,i.s,i.X)})}}),av=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),D0=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(P,t,n);e=o,r=c,n=l;continue e}else return n}}),V0=v(function(e,r){return fr(h(D0,e,r,D))}),tv=M(function(e,r,n){if(r<=0)return D;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,w=i.a,o=i.b,c=o.a;return $([w,c]);case 3:if(t.b.b.b.b){var l=t.b,w=l.a,u=l.b,c=u.a,f=u.b,m=f.a;return $([w,c,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var g=t.b,w=g.a,b=g.b,c=b.a,d=b.b,m=d.a,x=d.b,_=x.a,S=x.b;return e>1e3?a(P,w,a(P,c,a(P,m,a(P,_,a(V0,r-4,S))))):a(P,w,a(P,c,a(P,m,a(P,_,h(tv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,w=C.a;return $([w])}}),F0=v(function(e,r){return h(tv,0,e,r)}),A0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Y(fr(n),Y($([t]),i)),c=a(F0,e,o),l=a(av,e,o);if(l.b){var u=l.a,f=l.b;return a(Lr,si,{s:u,an:f,X:fr(c)})}else{var m=fr(c);if(m.b){var g=m.a,b=m.b;return a(Lr,si,{s:g,an:D,X:b})}else return r}}),I0=function(e){var r=e.b;return a(Lr,si,r)},E0=function(e){var r=e.b;return a(Lr,nv({dI:qn(e).cU}),r)},B0=function(e){var r=e.b;return a(Lr,Fc,r)},R0=v(function(e,r){switch(e.$){case 1:return I0(r);case 2:return B0(r);case 3:return E0(r);default:var n=e.a;return a(A0,n,r)}}),di=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),j0=v(function(e,r){return Be(r,{aN:e(r.aN)})}),N0=function(e){return{$:3,a:e}},H0=function(e){return{$:2,a:e}},iv=v(function(e,r){return{$:0,a:e,b:r}}),W0=v(function(e,r){return{$:1,a:e,b:r}}),He=v(function(e,r){if(r.$)return J;var n=r.a;return X(e(n))}),we=function(e){return e<0?-e:e},ov=Bs,G0=M(function(e,r,n){return a(Ee,0/0,ov(a(e,r,n)))}),Ct=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),U0=zs,cv=function(e){return h(U0,P,D,e)},O0=v(function(e,r){var n=a(Ct,function(t){return t!=="0"&&t!=="."},cv(r));return Y(e&&n?"-":"",r)}),ve=m$,Ao=ys,lv=Ns,uv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Pa(n);if(t.$===1)return"01";var i=t.a;return a(Ao,"0",uv(i))}else{var o=qr(r);return o>=48&&o<57?a(Ao,lv(o+1),n):"0"}},Io=ps,q0=xs,Fi=function(e){return a(Ao,e,"")},$v=M(function(e,r,n){return e<=0?n:h($v,e>>1,Y(r,r),e&1?Y(n,r):n)}),lt=v(function(e,r){return h($v,e,r,"")}),Eo=M(function(e,r,n){return Y(n,a(lt,e-En(n),Fi(r)))}),Bo=Ls,vv=function(e){var r=a(Pc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},J0=function(e){var r=a(Pc,"e",ve(we(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ee,0,ev(a(h0,"+",i)?a(wt,1,i):i)),c=vv(n),l=c.a,u=c.b,f=Y(l,u),m=o<0?a(Ee,"0",a(He,function(g){var b=g.a,d=g.b;return b+("."+d)},a(He,di(Fi),Pa(Y(a(lt,we(o),"0"),f))))):h(Eo,o+1,"0",f);return Y(e<0?"-":"",m)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},Y0=M(function(e,r,n){if(Io(n)||q0(n))return ve(n);var t=n<0,i=vv(J0(we(n))),o=i.a,c=i.b,l=En(o)+r,u=Y(a(lt,-l+1,"0"),h(Eo,l,"0",Y(o,c))),f=En(u),m=a(Cr,1,l),g=a(e,t,h(ca,m,f,u)),b=h(ca,0,m,u),d=g?Bo(a(Ee,"1",a(He,uv,Pa(Bo(b))))):b,x=En(d),_=d==="0"?d:r<=0?Y(d,a(lt,we(r),"0")):xe(r,En(c))<0?h(ca,0,x-r,d)+("."+h(ca,x-r,x,d)):Y(o+".",h(Eo,r,"0",c));return a(O0,t,_)}),fv=Y0(v(function(e,r){var n=Pa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(qr(i))})),X0=G0(fv),K0=M(function(e,r,n){var t=a(Mc,10,we(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(X0,i,n)}),mv=os,Ai=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(mv,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return X(t);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=Je(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Yr={$:-2},ba=Je(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,g=t.d,b=t.e;return V(fe,0,r,n,V(fe,1,f,m,g,b),V(fe,1,o,c,l,u))}else return V(fe,e,o,c,V(fe,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,d=t.d;d.a;var x=d.b,_=d.c,S=d.d,C=d.e,b=t.e;return V(fe,0,f,m,V(fe,1,x,_,S,C),V(fe,1,r,n,b,i))}else return V(fe,e,r,n,t,i)}),Ro=M(function(e,r,n){if(n.$===-2)return V(fe,0,e,r,Yr,Yr);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a(mv,e,i);switch(u){case 0:return V(ba,t,i,o,h(Ro,e,r,c),l);case 1:return V(fe,t,i,r,c,l);default:return V(ba,t,i,o,c,h(Ro,e,r,l))}}),fa=M(function(e,r,n){var t=h(Ro,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return V(fe,1,i,o,c,l)}else{var u=t;return u}}),Z0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},sv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var m=f.b,g=f.c,b=f.d;b.a;var d=b.b,x=b.c,_=b.d,S=b.e,C=f.e;return V(fe,0,d,x,V(fe,1,n,t,V(fe,0,o,c,l,u),_),V(fe,1,m,g,S,C))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,c=w.c,l=w.d,u=w.e,T=e.e;T.a;var m=T.b,g=T.c,b=T.d,C=T.e;return V(fe,1,n,t,V(fe,0,o,c,l,u),V(fe,0,m,g,b,C))}else return e},Ql=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,m=l.d,g=l.e,b=i.e,d=e.e;d.a;var x=d.b,_=d.c,S=d.d,C=d.e;return V(fe,0,o,c,V(fe,1,u,f,m,g),V(fe,1,n,t,b,V(fe,0,x,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,c=w.c,T=w.d,b=w.e,W=e.e;W.a;var x=W.b,_=W.c,S=W.d,C=W.e;return V(fe,1,n,t,V(fe,0,o,c,T,b),V(fe,0,x,_,S,C))}else return e},Q0=Mi(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,m=o.e;return V(fe,n,l,u,f,V(fe,0,t,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var g=c.d;return g.a,Ql(r)}else break e;else return c.a,c.d,Ql(r);else break e;return r}}),Kt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(fe,r,n,t,Kt(i),l);var u=sv(e);if(u.$===-1){var f=u.a,m=u.b,g=u.c,b=u.d,d=u.e;return V(ba,f,m,g,Kt(b),d)}else return Yr}else return V(fe,r,n,t,Kt(i),l)}else return Yr},Ka=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(xe(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(fe,n,t,i,a(Ka,e,o),c);var u=sv(r);if(u.$===-1){var f=u.a,m=u.b,g=u.c,b=u.d,d=u.e;return V(ba,f,m,g,a(Ka,e,b),d)}else return Yr}else return V(fe,n,t,i,a(Ka,e,o),c);else return a(eg,e,mc(Q0,e,r,n,t,i,o,c))}),eg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(he(e,t)){var l=Z0(c);if(l.$===-1){var u=l.b,f=l.c;return V(ba,n,u,f,o,Kt(c))}else return Yr}else return V(ba,n,t,i,o,a(Ka,e,c))}else return Yr}),rg=v(function(e,r){var n=a(Ka,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return V(fe,1,t,i,o,c)}else{var l=n;return l}}),Bt=M(function(e,r,n){var t=r(a(Ai,e,n));if(t.$)return a(rg,e,n);var i=t.a;return h(fa,e,i,n)}),ng=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Bt,r,He(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(W0,L(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Bt,r,He(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(iv,L(o,c),h(K0,o,c,n))}));case 3:var r=e.a,n=e.b;return a(Bt,r,He(function(t){return t.$===3?N0(n):t}));default:var r=e.a,n=e.b;return a(Bt,r,He(function(t){return t.$===2?H0(n):t}))}},ag=function(e){return j0(ng(e))},tg=v(function(e,r){return a(ne,ag(e),r)}),ig=v(function(e,r){return Be(r,{gb:a(tg,e,r.gb)})}),og=v(function(e,r){var n=r.a,t=r.b;return a(Lr,n,Be(t,{s:a(di,ig(e),t.s)}))}),jo=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),cg=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Lr,t,Be(i,{s:a(jo,a(e,o.a,r),o)}))}),lg=ae(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Be(t,{bw:!t.bw});case 2:var i=n.a;return Be(t,{R:h(k0,e,i,t.R)});case 3:var o=n.a;return Be(t,{bp:o});case 4:var c=n.a;return Be(t,{R:a(og,c,t.R)});case 5:var l=n.a;return Be(t,{R:h(cg,r,l,t.R)});default:var u=n.a;return Be(t,{R:a(R0,u,t.R)})}}),ug=v(function(e,r){return a(Lr,Fc,{s:L(e,r(e)),an:D,X:D})}),$g=md,eu=$g(D),vg=function(e){return{$:2,a:e}},pi=qs,_a=Os,fg=hd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return or({cU:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(g){return or({fJ:g,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",ze))},a(K,"control",ze))},a(K,"down",ze))},a(K,"downs",pi(_a)))},a(K,"left",ze))},a(K,"pressedKeys",pi(_a)))},a(K,"right",ze))},a(K,"shift",ze))},a(K,"up",ze))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return or({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",ze))},a(K,"isDown",ze))},a(K,"move",ze))},a(K,"rightDown",ze))},a(K,"rightUp",ze))},a(K,"up",ze))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return or({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return or({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue))))),mg=function(e){return e.dO,fg(vg)},sg=function(e){return{$:5,a:e}},dg={$:0},gi=v(function(e,r){return e}),pg=function(e){var r=e.b.s;return r.b},gg=function(e){return{$:1,a:e}},hg=gg,dv=function(e){return{$:8,a:e}},ye=dv,ut=function(e){return{$:0,a:e}},Lt=M(function(e,r,n){return e(r(n))}),bg=a(Lt,ut,gi),gn=bg,Ve=function(e){return{$:1,a:e}},Qr=Ve,pv=v(function(e,r){return{$:9,a:e,b:r}}),Un={$:0},gv=v(function(e,r){return r.$===3?Un:a(pv,e,r)}),No=function(e){return a(gv,4,e)},s={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Ac=d$,Dr=v(function(e,r){return a(bc,e,Ac(r))}),Sr=Dr("className"),hr=function(e){return Ve(Sr(e))},hv=v(function(e,r){return{$:2,a:e,b:r}}),_g=v(function(e,r){return{$:1,a:e,b:r}}),er=function(e){return{$:0,a:e}},_r=2,xg={$:0},Jn=xg,wg={$:0},yg=s.fK+(" "+s.aw),Sg=s.fK+(" "+s.gC),Cg=s.fK+(" "+s.eY),Lg=s.fK+(" "+s.eZ),zg=s.fK+(" "+s.af),Pg=s.fK+(" "+s.hL),Mg=function(e){switch(e){case 0:return zg;case 1:return yg;case 2:return Pg;case 3:return Sg;case 4:return Lg;default:return Cg}},ru=function(e){return{$:1,a:e}},In={$:0},Ho=function(e){return{$:1,a:e}},nu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),au=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(ne,function(o){return L(e,o)},t),r);case 2:var i=n.a;return Y(r,a(ne,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return Y(a(ne,function(o){return L(e,o)},t),Y(r,a(ne,function(o){return L(e,o)},i)))}}),Rt=4,Tg=function(e){return{$:0,a:e}},kg=function(e){return{$:1,a:e}},_e=function(e){return e>31?kg(1<<e-32):Tg(1<<e)},bv=_e(41),_v=_e(40),xv=_e(42),wv=_e(43),xa=$n("div"),Ic=Yr,yv=Ic,Gr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Gr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Gr(o))}},Ae=bs,Ie=function(e){return k(Ae(e*255))},Ec=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("mv-"+(Ie(n)+("-"+(Ie(t)+("-"+Ie(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,g=f.b,b=f.c,d=e.c,x=d.a,_=d.b,S=d.c,C=e.d;return X("tfrm-"+(Ie(c)+("-"+(Ie(l)+("-"+(Ie(u)+("-"+(Ie(m)+("-"+(Ie(g)+("-"+(Ie(b)+("-"+(Ie(x)+("-"+(Ie(_)+("-"+(Ie(S)+("-"+Ie(C))))))))))))))))))))}},$t=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(le,"-",a(ne,Gr,i.hB))+("-cols-"+(a(le,"-",a(ne,Gr,i.ak))+("-space-x-"+(Gr(i.hP.a)+("-space-y-"+Gr(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(le," ",a(ne,function(m){var g=$t(m);if(g==="")return"";var b=g;return b+("-"+u)},l));default:var f=e.a;return a(Ee,"",Ec(f))}},Dg=v(function(e,r){var n=r;return h(fa,e,0,n)}),Vg=v(function(e,r){var n=a(Ai,e,r);return!n.$}),Fg=v(function(e,r){var n=r;return a(Vg,e,n)}),Sv=v(function(e,r){var n=r.a,t=r.b,i=$t(e);return a(Fg,i,n)?r:L(a(Dg,i,n),a(P,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),Za=v(function(e,r){return{$:0,a:e,b:r}}),y=function(e){return"."+e},Ag=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(P,i,n)}),bn=v(function(e,r){return h(Ze,Ag(e),D,r)}),la=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ae(r*255))+(","+k(Ae(n*255))+(","+k(Ae(t*255))+(","+(ve(i)+")")))))},Wo=function(e){return a(le," ",a(bn,Er,$([e.ej?X("inset"):J,X(ve(e.eV.a)+"px"),X(ve(e.eV.b)+"px"),X(ve(e.a2)+"px"),X(ve(e.bi)+"px"),X(la(e.b6))])))},Cv=function(e){return $([a(Za,y(s.ea)+":focus-within",a(bn,Er,$([a(He,function(r){return a(ue,"border-color",la(r))},e.fW),a(He,function(r){return a(ue,"background-color",la(r))},e.fO),a(He,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b6:r.b6,ej:!1,eV:a(jo,Wa,a(di,Wa,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))]))),a(Za,y(s.fK)+":focus .focusable, "+(y(s.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(y(s.fK)+" .focusable-thumb"))),a(bn,Er,$([a(He,function(r){return a(ue,"border-color",la(r))},e.fW),a(He,function(r){return a(ue,"background-color",la(r))},e.fO),a(He,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b6:r.b6,ej:!1,eV:a(jo,Wa,a(di,Wa,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))])))])},Wr=function(e){return $n(x$(e))},Lv=v(function(e,r){return a(bc,Pd(e),w$(r))}),io=v(function(e,r){return{$:2,a:e,b:r}}),Bc=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),dr=v(function(e,r){return{$:0,a:e,b:r}}),F=v(function(e,r){return{$:4,a:e,b:r}}),p=v(function(e,r){return{$:0,a:e,b:r}}),Ig=v(function(e,r){return{$:3,a:e,b:r}}),zv=$([0,1,2,3,4,5]),Eg=v(function(e,r){return r.b?h(Ze,P,r,e):e}),mr=function(e){return h(Ze,Eg,D,e)},Ma=v(function(e,r){return mr(a(ne,e,r))}),Bg=function(e){switch(e){case 0:return y(s.gc);case 1:return y(s.b9);case 2:return y(s.cb);case 3:return y(s.bt);case 4:return y(s.ca);default:return y(s.ax)}},hi=function(e){switch(e){case 0:return y(s.fH);case 1:return y(s.fA);case 2:return y(s.dZ);case 3:return y(s.dY);case 4:return y(s.fB);default:return y(s.fC)}},Ga=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(F,Bg(n),i),a(O,y(s.fK),$([a(F,hi(n),o)]))])};return Bc(a(Ma,r,zv))},tu=$([a(p,"display","flex"),a(p,"flex-direction","column"),a(p,"white-space","pre"),a(F,y(s.c_),$([a(p,"z-index","0"),a(O,y(s.fQ),$([a(p,"z-index","-1")]))])),a(F,y(s.hG),$([a(O,y(s.Y),$([a(F,y(s.c0),$([a(p,"flex-grow","0")])),a(F,y(s.dQ),$([a(p,"align-self","auto !important")]))]))])),a(O,y(s.c$),$([a(p,"height","auto")])),a(O,y(s.c0),$([a(p,"flex-grow","100000")])),a(O,y(s.dQ),$([a(p,"width","100%")])),a(O,y(s.fv),$([a(p,"width","100%")])),a(O,y(s.dP),$([a(p,"align-self","flex-start")])),Ga(function(e){switch(e){case 0:return L($([a(p,"justify-content","flex-start")]),$([a(p,"margin-bottom","auto !important"),a(p,"margin-top","0 !important")]));case 1:return L($([a(p,"justify-content","flex-end")]),$([a(p,"margin-top","auto !important"),a(p,"margin-bottom","0 !important")]));case 2:return L($([a(p,"align-items","flex-end")]),$([a(p,"align-self","flex-end")]));case 3:return L($([a(p,"align-items","flex-start")]),$([a(p,"align-self","flex-start")]));case 4:return L($([a(p,"align-items","center")]),$([a(p,"align-self","center")]));default:return L($([a(O,y(s.fK),$([a(p,"margin-top","auto"),a(p,"margin-bottom","auto")]))]),$([a(p,"margin-top","auto !important"),a(p,"margin-bottom","auto !important")]))}})]),Rg=function(e){var r=function(n){return $([a(O,y(s.fK),$([a(F,hi(n),e(n))]))])};return Bc(a(Ma,r,zv))},jg=function(){return $([0,1,2,3,4,5])}(),Ng=$([a(dr,"html,body",$([a(p,"height","100%"),a(p,"padding","0"),a(p,"margin","0")])),a(dr,Y(y(s.fK),Y(y(s.hL),y(s.gN))),$([a(p,"display","block"),a(F,y(s.c0),$([a(O,"img",$([a(p,"max-height","100%"),a(p,"object-fit","cover")]))])),a(F,y(s.dQ),$([a(O,"img",$([a(p,"max-width","100%"),a(p,"object-fit","cover")]))]))])),a(dr,y(s.fK)+":focus",$([a(p,"outline","none")])),a(dr,y(s.hA),$([a(p,"width","100%"),a(p,"height","auto"),a(p,"min-height","100%"),a(p,"z-index","0"),a(F,Y(y(s.fK),y(s.c0)),$([a(p,"height","100%"),a(O,y(s.c0),$([a(p,"height","100%")]))])),a(O,y(s.gP),$([a(F,y(s.be),$([a(p,"position","fixed"),a(p,"z-index","20")]))]))])),a(dr,y(s.be),$([a(p,"position","relative"),a(p,"border","none"),a(p,"display","flex"),a(p,"flex-direction","row"),a(p,"flex-basis","auto"),a(F,y(s.hL),tu),Bc(function(e){return a(ne,e,jg)}(function(e){switch(e){case 0:return a(F,y(s.fy),$([a(p,"position","absolute"),a(p,"bottom","100%"),a(p,"left","0"),a(p,"width","100%"),a(p,"z-index","20"),a(p,"margin","0 !important"),a(O,y(s.c0),$([a(p,"height","auto")])),a(O,y(s.dQ),$([a(p,"width","100%")])),a(p,"pointer-events","none"),a(O,"*",$([a(p,"pointer-events","auto")]))]));case 1:return a(F,y(s.fR),$([a(p,"position","absolute"),a(p,"bottom","0"),a(p,"left","0"),a(p,"height","0"),a(p,"width","100%"),a(p,"z-index","20"),a(p,"margin","0 !important"),a(p,"pointer-events","none"),a(O,"*",$([a(p,"pointer-events","auto")])),a(O,y(s.c0),$([a(p,"height","auto")]))]));case 2:return a(F,y(s.hh),$([a(p,"position","absolute"),a(p,"left","100%"),a(p,"top","0"),a(p,"height","100%"),a(p,"margin","0 !important"),a(p,"z-index","20"),a(p,"pointer-events","none"),a(O,"*",$([a(p,"pointer-events","auto")]))]));case 3:return a(F,y(s.hg),$([a(p,"position","absolute"),a(p,"right","100%"),a(p,"top","0"),a(p,"height","100%"),a(p,"margin","0 !important"),a(p,"z-index","20"),a(p,"pointer-events","none"),a(O,"*",$([a(p,"pointer-events","auto")]))]));case 4:return a(F,y(s.gP),$([a(p,"position","absolute"),a(p,"width","100%"),a(p,"height","100%"),a(p,"left","0"),a(p,"top","0"),a(p,"margin","0 !important"),a(p,"pointer-events","none"),a(O,"*",$([a(p,"pointer-events","auto")]))]));default:return a(F,y(s.fQ),$([a(p,"position","absolute"),a(p,"width","100%"),a(p,"height","100%"),a(p,"left","0"),a(p,"top","0"),a(p,"margin","0 !important"),a(p,"z-index","0"),a(p,"pointer-events","none"),a(O,"*",$([a(p,"pointer-events","auto")]))]))}}))])),a(dr,y(s.fK),$([a(p,"position","relative"),a(p,"border","none"),a(p,"flex-shrink","0"),a(p,"display","flex"),a(p,"flex-direction","row"),a(p,"flex-basis","auto"),a(p,"resize","none"),a(p,"font-feature-settings","inherit"),a(p,"box-sizing","border-box"),a(p,"margin","0"),a(p,"padding","0"),a(p,"border-width","0"),a(p,"border-style","solid"),a(p,"font-size","inherit"),a(p,"color","inherit"),a(p,"font-family","inherit"),a(p,"line-height","1"),a(p,"font-weight","inherit"),a(p,"text-decoration","none"),a(p,"font-style","inherit"),a(F,y(s.dR),$([a(p,"flex-wrap","wrap")])),a(F,y(s.eU),$([a(p,"-moz-user-select","none"),a(p,"-webkit-user-select","none"),a(p,"-ms-user-select","none"),a(p,"user-select","none")])),a(F,y(s.gf),$([a(p,"cursor","pointer")])),a(F,y(s.gg),$([a(p,"cursor","text")])),a(F,y(s.hn),$([a(p,"pointer-events","none !important")])),a(F,y(s.b4),$([a(p,"pointer-events","auto !important")])),a(F,y(s.a$),$([a(p,"opacity","0")])),a(F,y(s.aU),$([a(p,"opacity","1")])),a(F,y(Y(s.gK,s.a$))+":hover",$([a(p,"opacity","0")])),a(F,y(Y(s.gK,s.aU))+":hover",$([a(p,"opacity","1")])),a(F,y(Y(s.gx,s.a$))+":focus",$([a(p,"opacity","0")])),a(F,y(Y(s.gx,s.aU))+":focus",$([a(p,"opacity","1")])),a(F,y(Y(s.cL,s.a$))+":active",$([a(p,"opacity","0")])),a(F,y(Y(s.cL,s.aU))+":active",$([a(p,"opacity","1")])),a(F,y(s.fj),$([a(p,"transition",a(le,", ",a(ne,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(F,y(s.hD),$([a(p,"overflow","auto"),a(p,"flex-shrink","1")])),a(F,y(s.hE),$([a(p,"overflow-x","auto"),a(F,y(s.af),$([a(p,"flex-shrink","1")]))])),a(F,y(s.hF),$([a(p,"overflow-y","auto"),a(F,y(s.aw),$([a(p,"flex-shrink","1")])),a(F,y(s.hL),$([a(p,"flex-shrink","1")]))])),a(F,y(s.f7),$([a(p,"overflow","hidden")])),a(F,y(s.f8),$([a(p,"overflow-x","hidden")])),a(F,y(s.f9),$([a(p,"overflow-y","hidden")])),a(F,y(s.dP),$([a(p,"width","auto")])),a(F,y(s.b1),$([a(p,"border-width","0")])),a(F,y(s.fX),$([a(p,"border-style","dashed")])),a(F,y(s.fY),$([a(p,"border-style","dotted")])),a(F,y(s.fZ),$([a(p,"border-style","solid")])),a(F,y(s.Y),$([a(p,"white-space","pre"),a(p,"display","inline-block")])),a(F,y(s.gX),$([a(p,"line-height","1.05"),a(p,"background","transparent"),a(p,"text-align","inherit")])),a(F,y(s.hL),tu),a(F,y(s.af),$([a(p,"display","flex"),a(p,"flex-direction","row"),a(O,y(s.fK),$([a(p,"flex-basis","0%"),a(F,y(s.fu),$([a(p,"flex-basis","auto")])),a(F,y(s.et),$([a(p,"flex-basis","auto")]))])),a(O,y(s.c0),$([a(p,"align-self","stretch !important")])),a(O,y(s.ef),$([a(p,"align-self","stretch !important")])),a(O,y(s.dQ),$([a(p,"flex-grow","100000")])),a(O,y(s.b8),$([a(p,"flex-grow","0"),a(p,"flex-basis","auto"),a(p,"align-self","stretch")])),a(O,"u:first-of-type."+s.fG,$([a(p,"flex-grow","1")])),a(O,"s:first-of-type."+s.fE,$([a(p,"flex-grow","1"),a(O,y(s.fB),$([a(p,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+s.fE,$([a(p,"flex-grow","1"),a(O,y(s.fB),$([a(p,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+s.fE,$([a(p,"flex-grow","1"),a(O,y(s.fC),$([a(p,"margin-top","auto !important"),a(p,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(s.fE+" ~ u"),$([a(p,"flex-grow","0")])),a(O,"u:first-of-type."+(s.fG+(" ~ s."+s.fE)),$([a(p,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return L($([a(p,"align-items","flex-start")]),$([a(p,"align-self","flex-start")]));case 1:return L($([a(p,"align-items","flex-end")]),$([a(p,"align-self","flex-end")]));case 2:return L($([a(p,"justify-content","flex-end")]),D);case 3:return L($([a(p,"justify-content","flex-start")]),D);case 4:return L($([a(p,"justify-content","center")]),D);default:return L($([a(p,"align-items","center")]),$([a(p,"align-self","center")]))}}),a(F,y(s.hO),$([a(p,"justify-content","space-between")])),a(F,y(s.ci),$([a(p,"align-items","baseline")]))])),a(F,y(s.aw),$([a(p,"display","flex"),a(p,"flex-direction","column"),a(O,y(s.fK),$([a(p,"flex-basis","0px"),a(p,"min-height","min-content"),a(F,y(s.ee),$([a(p,"flex-basis","auto")]))])),a(O,y(s.c0),$([a(p,"flex-grow","100000")])),a(O,y(s.dQ),$([a(p,"width","100%")])),a(O,y(s.fv),$([a(p,"width","100%")])),a(O,y(s.dP),$([a(p,"align-self","flex-start")])),a(O,"u:first-of-type."+s.fD,$([a(p,"flex-grow","1")])),a(O,"s:first-of-type."+s.fF,$([a(p,"flex-grow","1"),a(O,y(s.fC),$([a(p,"margin-top","auto !important"),a(p,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+s.fF,$([a(p,"flex-grow","1"),a(O,y(s.fC),$([a(p,"margin-bottom","auto !important"),a(p,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+s.fF,$([a(p,"flex-grow","1"),a(O,y(s.fC),$([a(p,"margin-top","auto !important"),a(p,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(s.fF+" ~ u"),$([a(p,"flex-grow","0")])),a(O,"u:first-of-type."+(s.fD+(" ~ s."+s.fF)),$([a(p,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return L($([a(p,"justify-content","flex-start")]),$([a(p,"margin-bottom","auto")]));case 1:return L($([a(p,"justify-content","flex-end")]),$([a(p,"margin-top","auto")]));case 2:return L($([a(p,"align-items","flex-end")]),$([a(p,"align-self","flex-end")]));case 3:return L($([a(p,"align-items","flex-start")]),$([a(p,"align-self","flex-start")]));case 4:return L($([a(p,"align-items","center")]),$([a(p,"align-self","center")]));default:return L($([a(p,"justify-content","center")]),D)}}),a(O,y(s.b8),$([a(p,"flex-grow","0"),a(p,"flex-basis","auto"),a(p,"width","100%"),a(p,"align-self","stretch !important")])),a(F,y(s.hO),$([a(p,"justify-content","space-between")]))])),a(F,y(s.gC),$([a(p,"display","-ms-grid"),a(O,".gp",$([a(O,y(s.fK),$([a(p,"width","100%")]))])),a(Ig,L("display","grid"),$([L("display","grid")])),Rg(function(e){switch(e){case 0:return $([a(p,"justify-content","flex-start")]);case 1:return $([a(p,"justify-content","flex-end")]);case 2:return $([a(p,"align-items","flex-end")]);case 3:return $([a(p,"align-items","flex-start")]);case 4:return $([a(p,"align-items","center")]);default:return $([a(p,"justify-content","center")])}})])),a(F,y(s.eY),$([a(p,"display","block"),a(O,y(s.fK+":first-child"),$([a(p,"margin","0 !important")])),a(O,y(s.fK+(hi(3)+(":first-child + ."+s.fK))),$([a(p,"margin","0 !important")])),a(O,y(s.fK+(hi(2)+(":first-child + ."+s.fK))),$([a(p,"margin","0 !important")])),Ga(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(p,"float","right"),a(F,"::after",$([a(p,"content",'""'),a(p,"display","table"),a(p,"clear","both")]))]));case 3:return L(D,$([a(p,"float","left"),a(F,"::after",$([a(p,"content",'""'),a(p,"display","table"),a(p,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),a(F,y(s.gT),$([a(p,"white-space","pre-wrap !important"),a(p,"height","100%"),a(p,"width","100%"),a(p,"background-color","transparent")])),a(F,y(s.gW),$([a(F,y(s.hL),$([a(p,"flex-basis","auto")]))])),a(F,y(s.gV),$([a(p,"white-space","pre-wrap !important"),a(p,"cursor","text"),a(O,y(s.gU),$([a(p,"white-space","pre-wrap !important"),a(p,"color","transparent")]))])),a(F,y(s.eZ),$([a(p,"display","block"),a(p,"white-space","normal"),a(p,"overflow-wrap","break-word"),a(F,y(s.c_),$([a(p,"z-index","0"),a(O,y(s.fQ),$([a(p,"z-index","-1")]))])),a(io,y(s.Y),$([a(p,"display","inline"),a(p,"white-space","normal")])),a(io,y(s.eZ),$([a(p,"display","inline"),a(F,"::after",$([a(p,"content","none")])),a(F,"::before",$([a(p,"content","none")]))])),a(io,y(s.hL),$([a(p,"display","inline"),a(p,"white-space","normal"),a(F,y(s.fu),$([a(p,"display","inline-block")])),a(F,y(s.gP),$([a(p,"display","flex")])),a(F,y(s.fQ),$([a(p,"display","flex")])),a(F,y(s.fy),$([a(p,"display","flex")])),a(F,y(s.fR),$([a(p,"display","flex")])),a(F,y(s.hh),$([a(p,"display","flex")])),a(F,y(s.hg),$([a(p,"display","flex")])),a(O,y(s.Y),$([a(p,"display","inline"),a(p,"white-space","normal")]))])),a(O,y(s.af),$([a(p,"display","inline")])),a(O,y(s.aw),$([a(p,"display","inline-flex")])),a(O,y(s.gC),$([a(p,"display","inline-grid")])),Ga(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(p,"float","right")]));case 3:return L(D,$([a(p,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),a(F,".hidden",$([a(p,"display","none")])),a(F,y(s.ia),$([a(p,"font-weight","100")])),a(F,y(s.h1),$([a(p,"font-weight","200")])),a(F,y(s.h5),$([a(p,"font-weight","300")])),a(F,y(s.h7),$([a(p,"font-weight","400")])),a(F,y(s.h6),$([a(p,"font-weight","500")])),a(F,y(s.h9),$([a(p,"font-weight","600")])),a(F,y(s.fV),$([a(p,"font-weight","700")])),a(F,y(s.h0),$([a(p,"font-weight","800")])),a(F,y(s.h2),$([a(p,"font-weight","900")])),a(F,y(s.g2),$([a(p,"font-style","italic")])),a(F,y(s.hU),$([a(p,"text-decoration","line-through")])),a(F,y(s.ih),$([a(p,"text-decoration","underline"),a(p,"text-decoration-skip-ink","auto"),a(p,"text-decoration-skip","ink")])),a(F,Y(y(s.ih),y(s.hU)),$([a(p,"text-decoration","line-through underline"),a(p,"text-decoration-skip-ink","auto"),a(p,"text-decoration-skip","ink")])),a(F,y(s.ib),$([a(p,"font-style","normal")])),a(F,y(s.h3),$([a(p,"text-align","justify")])),a(F,y(s.cF),$([a(p,"text-align","justify-all")])),a(F,y(s.h$),$([a(p,"text-align","center")])),a(F,y(s.h8),$([a(p,"text-align","right")])),a(F,y(s.h4),$([a(p,"text-align","left")])),a(F,".modal",$([a(p,"position","fixed"),a(p,"left","0"),a(p,"top","0"),a(p,"width","100%"),a(p,"height","100%"),a(p,"pointer-events","none")]))]))]),mn=function(e){return $([a(dr,".v-"+e,$([a(p,"font-feature-settings",'"'+(e+'"'))])),a(dr,".v-"+(e+"-off"),$([a(p,"font-feature-settings",'"'+(e+'" 0'))]))])},Hg=mr($([a(ne,function(e){return a(dr,".border-"+k(e),$([a(p,"border-width",k(e)+"px")]))},a(tn,0,6)),a(ne,function(e){return a(dr,".font-size-"+k(e),$([a(p,"font-size",k(e)+"px")]))},a(tn,8,32)),a(ne,function(e){return a(dr,".p-"+k(e),$([a(p,"padding",k(e)+"px")]))},a(tn,0,24)),$([a(dr,".v-smcp",$([a(p,"font-variant","small-caps")])),a(dr,".v-smcp-off",$([a(p,"font-variant","normal")]))]),mn("zero"),mn("onum"),mn("liga"),mn("dlig"),mn("ordn"),mn("tnum"),mn("afrc"),mn("frac")])),Wg=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(s.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(s.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Gg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Ug=`
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
`,Og=`
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
`,qg=`
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
`,Jg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(y(s.fK)+(y(s.af)+(" > "+(y(s.fK)+(" { flex-basis: auto !important; } "+(y(s.fK)+(y(s.af)+(" > "+(y(s.fK)+(y(s.b8)+(" { flex-basis: auto !important; }}"+(Gg+(Ug+(qg+(Og+Wg))))))))))))))),ma=function(e){return a(le,"",e)},aa=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),ta=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Be(o,{aE:a(P,L(c,l),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,g=i.b;return Be(o,{G:a(P,{b5:`
}`,G:D,aE:g,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,d=i.b;return Be(o,{G:a(P,a(ta,a(aa,n.ag+(" + "+b),""),d),o.G)});case 1:var x=i.a,_=i.b;return Be(o,{G:a(P,a(ta,a(aa,n.ag+(" > "+x),""),_),o.G)});case 2:var x=i.a,_=i.b;return Be(o,{G:a(P,a(ta,a(aa,n.ag+(" "+x),""),_),o.G)});case 4:var S=i.a,C=i.b;return Be(o,{G:a(P,a(ta,a(aa,Y(n.ag,S),""),C),o.G)});default:var w=i.a;return Be(o,{G:a(P,a(ta,a(aa,n.ag,""),w),o.G)})}});return h(Ze,t,n,r)}),Yg=function(e){var r=function(i){return ma(a(ne,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return Y(n(o),ma(a(ne,t,o.G)))};return ma(a(ne,t,h(Ze,v(function(i,o){var c=i.a,l=i.b;return a(P,a(ta,a(aa,c,""),l),o)}),D,e)))},iu=Y(Jg,Yg(Y(Ng,Hg))),_n=Mo,Pv=function(e){var r=e.eS;switch(r){case 0:return h(Wr,"div",D,$([h(Wr,"style",D,$([_n(iu)]))]));case 1:return _n("");default:return h(Wr,"elm-ui-static-rules",$([a(Lv,"rules",Ac(iu))]),D)}},Xg=v(function(e,r){return h(Re,ad(e),ed(),r)}),Kg=function(e){return h(Re,v(function(r,n){var t=r.a,i=r.b;return h(nd,t,i,n)}),rd(),e)},Zg=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},Qg=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},eh=function(e){if(e.$===5){var r=e.a;return a(Ct,Qg,r.fo)}else return!1},sa=v(function(e,r){return xe(e,r)<0?e:r}),Ba=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),De=ae(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Re,Ba(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Re,Ba(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Re,Ba(!1),"",t)+`
}`))])}case 0:var c=h(Re,Ba(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(s.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(y(s.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(Re,Ba(!1),"",t)+`
}`))])}}),rh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},nh=function(e){if(e.$===5){var r=e.a;return X(a(le,", ",a(ne,rh,r.fo)))}else return J},ah=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,g=f.b,b=f.c,d=e.c,x=d.a,_=d.b,S=d.c,C=e.d,w="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(g)+(", "+(ve(b)+")"))))),W="rotate3d("+(ve(x)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return X(w+(" "+(T+(" "+W))))}},Rc=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return z(De,e,n,t,i);case 13:var u=r.a,b=r.b;return z(De,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=a(Cr,0,a(sa,1,1-o));return z(De,e,n,"."+u,$([a(ue,"opacity",ve(c))]));case 2:var l=r.a;return z(De,e,n,".font-size-"+k(l),$([a(ue,"font-size",k(l)+"px")]));case 1:var u=r.a,f=r.b,m=a(le,", ",a(bn,nh,f)),g=$([a(ue,"font-family",a(le,", ",a(ne,Zg,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(Ct,eh,f)?"small-caps":"normal")]);return z(De,e,n,"."+u,g);case 3:var se=r.a,b=r.b,Ki=r.c;return z(De,e,n,"."+se,$([a(ue,b,Ki)]));case 4:var se=r.a,b=r.b,d=r.c;return z(De,e,n,"."+se,$([a(ue,b,la(d))]));case 5:var q=r.a,x=r.b,_=r.c,S=k(_)+"px",C=k(x)+"px",w="."+s.af,T="."+(s.dR+w),pe="."+s.dZ,W="."+s.eZ,Z="."+s.eY,Se="."+s.dY,re=ve(_/2)+"px",te=ve(x/2)+"px",ie="."+s.aw,se="."+q,ee="."+s.fK;return mr($([z(De,e,n,se+(w+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-left",C)])),z(De,e,n,se+(T+(" > "+ee)),$([a(ue,"margin",re+(" "+te))])),z(De,e,n,se+(ie+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-top",S)])),z(De,e,n,se+(Z+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-top",S)])),z(De,e,n,se+(Z+(" > "+Se)),$([a(ue,"margin-right",C)])),z(De,e,n,se+(Z+(" > "+pe)),$([a(ue,"margin-left",C)])),z(De,e,n,Y(se,W),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),z(De,e,n,"textarea"+(ee+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),z(De,e,n,se+(W+(" > "+Se)),$([a(ue,"margin-right",C)])),z(De,e,n,se+(W+(" > "+pe)),$([a(ue,"margin-left",C)])),z(De,e,n,se+(W+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),z(De,e,n,se+(W+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return z(De,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return z(De,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Ye,Ea,Xr){e:for(;;)switch(Xr.$){case 0:var Xm=Xr.a;return k(Xm)+"px";case 1:var Vr=L(Ye,Ea);if(Vr.a.$===1){if(Vr.b.$===1)return Vr.a,Vr.b,"max-content";Vr.a;var Dn=Vr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Vr.b.$===1){var Vn=Vr.a.a;return Vr.b,"minmax("+(k(Vn)+"px, max-content)")}else{var Vn=Vr.a.a,Dn=Vr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Dn)+"px)")))}case 2:var Dl=Xr.a,Fr=L(Ye,Ea);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(Dl)+"fr";Fr.a;var Dn=Fr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Fr.b.$===1){var Vn=Fr.a.a;return Fr.b,"minmax("+(k(Vn)+("px, "+(k(Dl)+"frfr)")))}else{var Vn=Fr.a.a,Dn=Fr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Dn)+"px)")))}case 3:var Zi=Xr.a,Qi=Xr.b,eo=X(Zi),ro=Ea,no=Qi;Ye=eo,Ea=ro,Xr=no;continue e;default:var Zi=Xr.a,Qi=Xr.b,eo=Ye,ro=X(Zi),no=Qi;Ye=eo,Ea=ro,Xr=no;continue e}}),A=function(Ye){return h(Te,J,J,Ye)};A(me.hP.a);var I=A(me.hP.b),E=function(Ye){return"grid-template-rows: "+(Ye+";")}(a(le," ",a(ne,A,me.hB))),B=function(Ye){return"-ms-grid-rows: "+(Ye+";")}(a(le,I,a(ne,A,me.ak))),R=function(Ye){return"-ms-grid-columns: "+(Ye+";")}(a(le,I,a(ne,A,me.ak))),j="grid-row-gap:"+(A(me.hP.b)+";"),N="grid-column-gap:"+(A(me.hP.a)+";"),H=function(Ye){return"grid-template-columns: "+(Ye+";")}(a(le," ",a(ne,A,me.ak))),se=".grid-rows-"+(a(le,"-",a(ne,Gr,me.hB))+("-cols-"+(a(le,"-",a(ne,Gr,me.ak))+("-space-x-"+(Gr(me.hP.a)+("-space-y-"+Gr(me.hP.b))))))),Ji=se+("{"+(H+(E+(N+(j+"}"))))),Yi="@supports (display:grid) {"+(Ji+"}"),Xi=se+("{"+(R+(B+"}")));return $([Xi,Yi]);case 9:var je=r.a,Ft=a(le," ",$(["-ms-grid-row: "+(k(je.af)+";"),"-ms-grid-row-span: "+(k(je.gH)+";"),"-ms-grid-column: "+(k(je.ga)+";"),"-ms-grid-column-span: "+(k(je.im)+";")])),qi=a(le," ",$(["grid-row: "+(k(je.af)+(" / "+(k(je.af+je.gH)+";"))),"grid-column: "+(k(je.ga)+(" / "+(k(je.ga+je.im)+";")))])),se=".grid-pos-"+(k(je.af)+("-"+(k(je.ga)+("-"+(k(je.im)+("-"+k(je.gH))))))),Ji=se+("{"+(qi+"}")),Yi="@supports (display:grid) {"+(Ji+"}"),Xi=se+("{"+(Ft+"}"));return $([Xi,Yi]);case 11:var se=r.a,qm=r.b,Jm=function(Ye){return h(Rc,e,Ye,X(se))};return a(Ma,Jm,qm);default:var kl=r.a,Ki=ah(kl),se=Ec(kl),At=L(se,Ki);if(!At.a.$&&!At.b.$){var q=At.a.a,Ym=At.b.a;return z(De,e,n,"."+q,$([a(ue,"transform",Ym)]))}else return D}}),th=v(function(e,r){return Kg(a(ne,function(n){var t=h(Rc,e,n,J);return L($t(n),a(Xg,Ac,t))},r))}),bi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(le,"",a(ne,n,r))+"}"))}),ou=M(function(e,r,n){var t=n.a,i=n.b;return $([a(bi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(bi,"."+(e+("."+(r+("> ."+(s.Y+(", ."+(e+(" ."+(r+(" > ."+s.Y)))))))))),i)])}),ih=M(function(e,r,n){var t=r.a,i=r.b,o=he(e,n)?e:n+(" ."+e);return a(le," ",Y(h(ou,o,s.hM,i),h(ou,o,s.gy,t)))}),oh=v(function(e,r){var n=he(e,r)?e:r+(" ."+e);return a(le," ",$([a(bi,"."+(n+("."+(s.hM+(", "+("."+(n+(" ."+s.hM))))))),$([L("line-height","1")])),a(bi,"."+(n+("."+(s.hM+("> ."+(s.Y+(", ."+(n+(" ."+(s.hM+(" > ."+s.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),cu=M(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),Mv=v(function(e,r){return h(Ze,v(function(n,t){return e(n)?a(P,n,t):t}),D,r)}),ch=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Re,Cr,r,n))}else return J},lu=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Re,sa,r,n))}else return J},uu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Ee,e.gk,lu(r)),t=a(Ee,e.fP,lu(a(Mv,function(f){return!he(f,n)},r))),i=a(Ee,e.f1,ch(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f1:h(cu,o,i-t,c),ec:h(cu,l,i-n,u)}},$u=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ve(e.gH)),L("vertical-align",ve(e.fp)+"em"),L("font-size",ve(e.bi)+"em")]))},lh=function(e){return h(Re,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return X(L($u(function(c){return c.ec}(uu(o))),$u(function(c){return c.f1}(uu(o)))))}else return n;else return n}),J,e)},uh=function(e){var r=function(o){if(o.$===4){var c=o.b;return X("@import url('"+(c+"');"))}else return J},n=function(o){o.a;var c=o.b,l=a(le,`
`,a(bn,r,c));return l},t=a(ne,K$,e),i=function(o){var c=o.a,l=o.b,u=lh(l);if(u.$===1)return a(le,"",a(ne,oh(c),t));var f=u.a;return a(le,"",a(ne,a(ih,c,f),t))};return Y(a(le,`
`,a(ne,n,e)),a(le,`
`,a(ne,i,e)))},$h=function(e){if(e.$===1){var r=e.a,n=e.b;return X(L(r,n))}else return J},vu=v(function(e,r){var n=v(function(c,l){return{cB:Y(l.cB,h(Rc,e,c,J)),bT:function(){var u=$h(c);if(u.$===1)return l.bT;var f=u.a;return a(P,f,l.bT)}()}}),t=h(Re,n,{cB:D,bT:D},r),i=t.bT,o=t.cB;return Y(uh(i),ma(o))}),Tv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Wr,"div",D,$([h(Wr,"style",D,$([_n(a(vu,e,r))]))]));case 1:return h(Wr,"div",D,$([h(Wr,"style",D,$([_n(a(vu,e,r))]))]));default:return h(Wr,"elm-ui-rules",$([a(Lv,"rules",a(th,e,r))]),D)}}),fu=ae(function(e,r,n,t){var i=a(Tv,r,h(Re,Sv,L(yv,Cv(r.gx)),n).b);return e?a(P,L("static-stylesheet",Pv(r)),a(P,L("dynamic-stylesheet",i),t)):a(P,L("dynamic-stylesheet",i),t)}),mu=ae(function(e,r,n,t){var i=a(Tv,r,h(Re,Sv,L(yv,Cv(r.gx)),n).b);return e?a(P,Pv(r),a(P,i,t)):a(P,i,t)}),Go=_e(45),vt=_e(37),kv=function(e){return wd(x$(e))},vh=$n("p"),tr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return he(o&t,o)}else{var i=e.a;return he(i&n,i)}}),su=$n("s"),du=$n("u"),Uo=_e(44),ft=_e(39),jt=kr(function(e,r,n,t,i,o){var c=v(function(u,f){if(t.$===1){var m=t.a;return h(kv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,d=i.b;return z(fu,!1,b,d,m);default:var b=i.a,d=i.b;return z(fu,!0,b,d,m)}}())}else{var g=t.a;return a(function(){switch(u){case"div":return xa;case"p":return vh;default:return Wr(u)}}(),f,function(){switch(i.$){case 0:return g;case 2:var b=i.a,d=i.b;return z(mu,!1,b,d,g);default:var b=i.a,d=i.b;return z(mu,!0,b,d,g)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,f=r.b;return h(Wr,u,n,$([a(c,f,$([Sr(s.fK+(" "+s.hL))]))]))}}();switch(o){case 0:return a(tr,ft,e)&&!a(tr,Uo,e)?l:a(tr,_v,e)?a(du,$([Sr(a(le," ",$([s.fK,s.hL,s.b8,s.ax,s.fG])))]),$([l])):a(tr,xv,e)?a(su,$([Sr(a(le," ",$([s.fK,s.hL,s.b8,s.ax,s.fE])))]),$([l])):l;case 1:return a(tr,vt,e)&&!a(tr,Go,e)?l:a(tr,wv,e)?a(su,$([Sr(a(le," ",$([s.fK,s.hL,s.b8,s.fF])))]),$([l])):a(tr,bv,e)?a(du,$([Sr(a(le," ",$([s.fK,s.hL,s.b8,s.fD])))]),$([l])):l;default:return l}}),dn=function(e){return!e.b},jc=_n,fh=s.fK+(" "+(s.Y+(" "+(s.dP+(" "+s.c$))))),mt=function(e){return a(xa,$([Sr(fh)]),$([jc(e)]))},mh=s.fK+(" "+(s.Y+(" "+(s.dQ+(" "+s.c0))))),pu=function(e){return a(xa,$([Sr(mh)]),$([jc(e)]))},sh=M(function(e,r,n){var t=v(function(x,_){var S=x.a,C=x.b,w=_.a,T=_.b;switch(C.$){case 0:var W=C.a;return he(e,Rt),L(a(P,L(S,W(e)),w),T);case 1:var Z=C.a;return he(e,Rt),L(a(P,L(S,a(Z.gL,In,e)),w),dn(T)?Z.hV:Y(Z.hV,T));case 2:var re=C.a;return L(a(P,L(S,he(e,_r)?pu(re):mt(re)),w),T);default:return L(w,T)}}),i=v(function(x,_){var S=_.a,C=_.b;switch(x.$){case 0:var w=x.a;return he(e,Rt),L(a(P,w(e),S),C);case 1:var T=x.a;return he(e,Rt),L(a(P,a(T.gL,In,e),S),dn(C)?T.hV:Y(T.hV,C));case 2:var W=x.a;return L(a(P,he(e,_r)?pu(W):mt(W),S),C);default:return L(S,C)}});if(r.$===1){var o=r.a,c=h(Ze,t,L(D,D),o),l=c.a,u=c.b,f=dn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Ho({gL:z(jt,n.aR,n.aT,n.aJ,ru(h(au,"nearby-element-pls",l,n.aM))),hV:m})}else return ut(V(jt,n.aR,n.aT,n.aJ,ru(h(au,"nearby-element-pls",l,n.aM)),In))}else{var g=r.a,b=h(Ze,i,L(D,D),g),d=b.a,u=b.b,f=dn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Ho({gL:z(jt,n.aR,n.aT,n.aJ,er(a(nu,d,n.aM))),hV:m})}else return ut(V(jt,n.aR,n.aT,n.aJ,er(a(nu,d,n.aM)),In))}}),ur=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),dh=function(e){return{$:10,a:e}},_i=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(_i,n,o|t)}else{var i=e.a;return a(_i,i|n,t)}}),gu=function(e){return{$:1,a:e}},Nt=v(function(e,r){return{$:3,a:e,b:r}}),hu=function(e){return{$:2,a:e}},ph=v(function(e,r){return a(xa,$([Sr(function(){switch(e){case 0:return a(le," ",$([s.be,s.hL,s.fy]));case 1:return a(le," ",$([s.be,s.hL,s.fR]));case 2:return a(le," ",$([s.be,s.hL,s.hh]));case 3:return a(le," ",$([s.be,s.hL,s.hg]));case 4:return a(le," ",$([s.be,s.hL,s.gP]));default:return a(le," ",$([s.be,s.hL,s.fQ]))}}())]),$([function(){switch(r.$){case 3:return _n("");case 2:var n=r.a;return mt(n);case 0:var t=r.a;return t(_r);default:var i=r.a;return a(i.gL,In,_r)}}()]))}),gh=M(function(e,r,n){var t=a(ph,e,r);switch(n.$){case 0:return e===5?gu($([t])):hu($([t]));case 1:var i=n.a;return e===5?gu(a(P,t,i)):a(Nt,i,$([t]));case 2:var o=n.a;return e===5?a(Nt,$([t]),o):hu(a(P,t,o));default:var i=n.a,o=n.b;return e===5?a(Nt,a(P,t,i),o):a(Nt,i,a(P,t,o))}}),bu=v(function(e,r){return{$:2,a:e,b:r}}),pn=function(e){return{$:1,a:e}},Fn=v(function(e,r){switch(r.$){case 0:return pn(e);case 1:var n=r.a;return a(bu,n,e);default:var t=r.a,i=r.b;return a(bu,t,i)}}),hh=function(e){switch(e){case 0:return s.cM+(" "+s.dY);case 2:return s.cM+(" "+s.dZ);default:return s.cM+(" "+s.fB)}},bh=function(e){switch(e){case 0:return s.cN+(" "+s.fH);case 2:return s.cN+(" "+s.fA);default:return s.cN+(" "+s.fC)}},Ua=v(function(e,r){return a(Br,zd(e),w$(r))}),jr=ae(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),sn=function(e){return{$:1,a:e}},_h=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return sn(G(u,0,0));case 1:var f=r.a;return sn(G(0,f,0));case 2:var m=r.a;return sn(G(0,0,m));case 3:var n=r.a;return sn(n);case 4:var n=r.a,d=r.b;return z(jr,G(0,0,0),G(1,1,1),n,d);default:var n=r.a;return z(jr,G(0,0,0),n,G(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,m=l.c;switch(r.$){case 0:var t=r.a;return sn(G(t,f,m));case 1:var i=r.a;return sn(G(u,i,m));case 2:var o=r.a;return sn(G(u,f,o));case 3:var n=r.a;return sn(n);case 4:var n=r.a,d=r.b;return z(jr,l,G(1,1,1),n,d);default:var c=r.a;return z(jr,l,c,G(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,m=l.c,g=e.b,b=e.c,d=e.d;switch(r.$){case 0:var t=r.a;return z(jr,G(t,f,m),g,b,d);case 1:var i=r.a;return z(jr,G(u,i,m),g,b,d);case 2:var o=r.a;return z(jr,G(u,f,o),g,b,d);case 3:var x=r.a;return z(jr,x,g,b,d);case 4:var _=r.a,S=r.b;return z(jr,l,g,_,S);default:var C=r.a;return z(jr,l,C,b,d)}}}),Qn=_e(7),Dv=_e(36),_u=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(_i,n|i,t|o)}),en=a(_i,0,0),Oo=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return G(en,s.ee+(" "+t),$([h(ur,t,"height",n+"px")]));case 1:return G(a(ge,Dv,en),s.c$,D);case 2:var i=e.a;return i===1?G(a(ge,vt,en),s.c0,D):G(a(ge,vt,en),s.ef+(" height-fill-"+k(i)),$([h(ur,s.fK+("."+(s.aw+(" > "+y("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h(ur,f,"min-height",k(o)+"px !important"),c=Oo(u),b=c.a,d=c.b,x=c.c;return G(a(ge,Go,b),f+(" "+d),a(P,m,x));default:var l=e.a,u=e.b,f="max-height-"+k(l),m=h(ur,f,"max-height",k(l)+"px"),g=Oo(u),b=g.a,d=g.b,x=g.c;return G(a(ge,Go,b),f+(" "+d),a(P,m,x))}},Vv=_e(38),qo=function(e){switch(e.$){case 0:var r=e.a;return G(en,s.fu+(" width-px-"+k(r)),$([h(ur,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return G(a(ge,Vv,en),s.dP,D);case 2:var n=e.a;return n===1?G(a(ge,ft,en),s.dQ,D):G(a(ge,ft,en),s.fv+(" width-fill-"+k(n)),$([h(ur,s.fK+("."+(s.af+(" > "+y("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+k(t),u=h(ur,l,"min-width",k(t)+"px"),i=qo(c),m=i.a,g=i.b,b=i.c;return G(a(ge,Uo,m),l+(" "+g),a(P,u,b));default:var o=e.a,c=e.b,l="max-width-"+k(o),u=h(ur,l,"max-width",k(o)+"px"),f=qo(c),m=f.a,g=f.b,b=f.c;return G(a(ge,Uo,m),l+(" "+g),a(P,u,b))}},Ii=_e(27),xh=v(function(e,r){if(he(e,Ii))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return he(i,c)&&he(i,o)&&he(i,l)&&i>=0&&i<=24;default:return!1}}),ea=_e(6),xu=_e(30),wu=_e(29),wh=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var m=l.a,g=l.b;switch(m.$){case 0:var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 3:var _=m.a,b=m.b;if(a(tr,_,n)){var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else{var A=b+(" "+e),I=r,E=a(ge,_,n),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}case 1:var d=m.a,A=e,I=r,E=n,B=t,R=i,j=a(P,d,o),N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 4:var _=m.a,x=m.b;if(a(tr,_,n)){var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else if(a(xh,_,x)){var A=$t(x)+(" "+e),I=r,E=a(ge,_,n),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else{var A=$t(x)+(" "+e),I=r,E=a(ge,_,n),B=t,R=a(P,x,i),j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}case 10:var _=m.a,S=m.b,A=e,I=r,E=a(ge,_,n),B=a(_h,t,S),R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 7:var C=m.a;if(a(tr,ea,n)){var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else switch(C.$){case 0:var w=C.a,A=s.fu+(" width-px-"+k(w))+(" "+e),I=r,E=a(ge,ea,n),B=t,R=a(P,h(ur,"width-px-"+k(w),"width",k(w)+"px"),i),j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 1:var A=e+(" "+s.dP),I=r,E=a(ge,Vv,a(ge,ea,n)),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 2:var T=C.a;if(T===1){var A=e+(" "+s.dQ),I=r,E=a(ge,ft,a(ge,ea,n)),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else{var A=e+(" "+(s.fv+(" width-fill-"+k(T)))),I=r,E=a(ge,ft,a(ge,ea,n)),B=t,R=a(P,h(ur,s.fK+("."+(s.af+(" > "+y("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}default:var W=qo(C),Z=W.a,re=W.b,Te=W.c,A=e+(" "+re),I=r,E=a(_u,Z,a(ge,ea,n)),B=t,R=Y(Te,i),j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}case 8:var te=m.a;if(a(tr,Qn,n)){var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else switch(te.$){case 0:var w=te.a,ie=k(w)+"px",ee="height-px-"+ie,A=s.ee+(" "+(ee+(" "+e))),I=r,E=a(ge,Qn,n),B=t,R=a(P,h(ur,ee,"height ",ie),i),j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 1:var A=s.c$+(" "+e),I=r,E=a(ge,Dv,a(ge,Qn,n)),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 2:var T=te.a;if(T===1){var A=s.c0+(" "+e),I=r,E=a(ge,vt,a(ge,Qn,n)),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else{var A=e+(" "+(s.ef+(" height-fill-"+k(T)))),I=r,E=a(ge,vt,a(ge,Qn,n)),B=t,R=a(P,h(ur,s.fK+("."+(s.aw+(" > "+y("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}default:var q=Oo(te),Z=q.a,re=q.b,Te=q.c,A=e+(" "+re),I=r,E=a(_u,Z,a(ge,Qn,n)),B=t,R=Y(Te,i),j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}case 2:var de=m.a;switch(de.$){case 0:var A=e,I=a(Fn,"main",r),E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 1:var A=e,I=a(Fn,"nav",r),E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 2:var A=e,I=a(Fn,"footer",r),E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 3:var A=e,I=a(Fn,"aside",r),E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 4:var pe=de.a;if(pe<=1){var A=e,I=a(Fn,"h1",r),E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else if(pe<7){var A=e,I=a(Fn,"h"+k(pe),r),E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else{var A=e,I=a(Fn,"h6",r),E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}case 9:var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 8:var A=e,I=r,E=n,B=t,R=i,j=a(P,a(Ua,"role","button"),o),N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 5:var Me=de.a,A=e,I=r,E=n,B=t,R=i,j=a(P,a(Ua,"aria-label",Me),o),N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 6:var A=e,I=r,E=n,B=t,R=i,j=a(P,a(Ua,"aria-live","polite"),o),N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;default:var A=e,I=r,E=n,B=t,R=i,j=a(P,a(Ua,"aria-live","assertive"),o),N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var qi=me.a;return Y(i,qi.hV)}}(),A=e,I=r,E=n,B=t,R=Te,j=o,N=h(gh,Se,me,c),H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e;case 6:var je=m.a;if(a(tr,xu,n)){var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else{var A=hh(je)+(" "+e),I=r,E=function(se){switch(je){case 1:return a(ge,xv,se);case 2:return a(ge,_v,se);default:return se}}(a(ge,xu,n)),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}default:var Ft=m.a;if(a(tr,wu,n)){var A=e,I=r,E=n,B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}else{var A=bh(Ft)+(" "+e),I=r,E=function(se){switch(Ft){case 1:return a(ge,wv,se);case 2:return a(ge,bv,se);default:return se}}(a(ge,wu,n)),B=t,R=i,j=o,N=c,H=g;e=A,r=I,n=E,t=B,i=R,o=j,c=N,l=H;continue e}}}else{var u=Ec(t);if(u.$===1)return{aJ:a(P,Sr(e),o),aM:c,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(P,Sr(e+(" "+f)),o),aM:c,aR:n,aT:r,hV:a(P,dh(t),i)}}}),yh={$:0},Sh=yh,cr=ae(function(e,r,n,t){return h(sh,e,t,_t(wh,Mg(e),r,en,Sh,D,D,wg,fr(n)))}),rn=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ch={fO:J,fW:J,hH:X({a2:0,b6:z(rn,155/255,203/255,1,1),eV:L(0,0),bi:3})},Lh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gK;return c.$===1?Be(i,{gK:X(o)}):i;case 1:var l=t.a,u=i.gx;return u.$===1?Be(i,{gx:X(l)}):i;default:var f=t.a,m=i.eS;return m.$===1?Be(i,{eS:X(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return Ch;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(Ze,r,{gx:J,gK:J,eS:J},e))},zh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(_r);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),_r);case 2:var i=r.a;return mt(i);default:return mt("")}}),Ph=M(function(e,r,n){var t=Lh(e),i=function(){var o=t.eS;return o===1?hv(t):_g(t)}();return a(zh,i,z(cr,_r,Jn,r,er($([n]))))}),st=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Fv=v(function(e,r){return{$:1,a:e,b:r}}),Av=function(e){return{$:2,a:e}},Mh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),oo=function(e){return{$:3,a:e}},Iv=_e(8),Ev=_e(14),Bv=_e(5),Rv=_e(4),wa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ie(r)+("-"+(Ie(n)+("-"+(Ie(t)+("-"+Ie(i))))))},Zt=Ds,co=ks,jv=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(le,"-",co(Zt(n)));case 4:var n=e.a;return e.b,a(le,"-",co(Zt(n)));default:var n=e.a.hc;return a(le,"-",co(Zt(n)))}}())}),Th=function(){var e=$([oo("Open Sans"),oo("Helvetica"),oo("Verdana"),Mh]);return $([a(Ce,Iv,h(st,"bg-"+wa(z(rn,1,1,1,0)),"background-color",z(rn,1,1,1,0))),a(Ce,Ev,h(st,"fc-"+wa(z(rn,0,0,0,1)),"color",z(rn,0,0,0,1))),a(Ce,Rv,Av(20)),a(Ce,Bv,a(Fv,h(Re,jv,"font-",e),e))])}(),kh=M(function(e,r,n){var t=e.hl;return h(Ph,t,a(P,hr(a(le," ",$([s.hA,s.fK,s.hL]))),Y(Th,r)),n)}),Nv={$:3},Hv=function(e){return{$:2,a:e}},Jo=Sd,Wv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Ho({gL:v(function(o,c){return a(Jo,e,a(n.gL,o,c))}),hV:n.hV});case 0:var t=r.a;return ut(a(Lt,Jo(e),t));case 2:var i=r.a;return Hv(i);default:return Nv}}),Nc=Wv,Dh=Jo,Vh=function(e){return{$:0,a:e}},ke=Vh,Fh=Ld,gr=Fh,Gv={$:1},Ei=function(e){return{$:5,a:e}},Uv=Ei(0),Rr=M(function(e,r,n){return z(rn,e/255,r/255,n/255,1)}),Ov=h(Rr,0,0,0),Ah=Br("d"),Ih=Br("fill"),Eh=Br("height"),qv=b$("http://www.w3.org/2000/svg"),Bh=qv("path"),Rh=qv("svg"),jh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Nh=function(e){var r=jh(e);return"rgba("+(k(Ae(r.hu*255))+(","+k(Ae(r.gA*255))+(","+k(Ae(r.fS*255))+(","+ve(r.fI)+")"))))},Hh=Br("viewBox"),Wh=Br("width"),ua=M(function(e,r,n){return a(Rh,$([Hh("0 0 100 100"),Wh(k(e)),Eh(k(e))]),$([a(Bh,$([Ah(n),Ih(Nh(r))]),D)]))}),Gh={$:1},sr=Gh,Jv=function(e){return{$:7,a:e}},ce=Jv,Le=v(function(e,r){return z(cr,_r,Jn,a(P,ce(sr),a(P,ye(sr),e)),er($([r])))}),Yv=function(e){return{$:2,a:e}},be=Yv(1),Bn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},da={c4:260,bE:54},on=function(e){return a(Ce,Iv,h(st,"bg-"+wa(e),"background-color",e))},Uh=_e(28),xn=function(e){return a(Ce,Uh,h(st,"bc-"+wa(e),"border-color",e))},Qt=1,zr=v(function(e,r){return z(cr,Qt,Jn,a(P,hr(s.gc+(" "+s.bt)),a(P,ye(sr),a(P,ce(sr),e))),er(r))}),Oh=h(Rr,83,83,83),Xv=ae(function(e,r,n,t){return z(rn,e/255,r/255,n/255,t)}),Bi=z(Xv,56,56,56,.25),qe=Nv,dt=Je(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),pt=_e(2),Rn=function(e){var r=e;return a(Ce,pt,V(dt,"p-"+k(e),r,r,r,r))},Kv=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Zv=_e(3),Qv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),wn=function(e){return a(Ce,Zv,h(Kv,a(Qv,e,e),e,e))},qh=z(Xv,0,0,0,0),Jh=function(e){return{$:4,a:e}},Yo=0,Mn=v(function(e,r){return z(cr,Yo,Jn,a(P,hr(s.bt+(" "+s.ax)),a(P,ce(sr),a(P,ye(sr),e))),er(r))}),Yh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(hv,{gx:{fO:J,fW:J,hH:J},gK:1,eS:0},n.hV));case 2:var t=e.a;return gi(_n(t));default:return gi(_n(""))}},Xh=v(function(e,r){return Yh(e(r))}),Kh=Cd,Zh=v(function(e,r){return ut(h(Kh,Xh,e,r))}),yn=function(e){return a(Ce,Ev,h(st,"fc-"+wa(e),"color",e))},Hc=h(Rr,195,195,195),Tn=v(function(e,r){return{$:3,a:e,b:r}}),ef=_e(13),Qh=a(Tn,ef,s.h7),e3=_e(20),rf=a(Tn,e3,s.hF),Yn=function(e){return a(Ce,Rv,Av(e))},Wc=a(Tn,ef,s.fV),Xo=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return V(fe,n,t,a(e,t,i),a(Xo,e,o),a(Xo,e,c))}),nf=v(function(e,r){if(he(e,r)){var n=e;return a(Ce,pt,V(dt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,pt,V(dt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Sn=function(e){return Hv(e)},r3=function(e){return h(Lc,M(function(r,n,t){return a(P,n,t)}),D,e)},n3=v(function(e,r){return{$:3,a:e,b:r}}),a3=v(function(e,r){return{$:2,a:e,b:r}}),t3=v(function(e,r){return{$:0,a:e,b:r}}),i3=v(function(e,r){return{$:1,a:e,b:r}}),vn=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),o3=z(vn,0/255,0/255,0/255,1),Ri=function(e){return{$:6,a:e}},c3=Ri(0),ji=function(e){return{$:2,a:e}},l3={$:6},af=ji(l3),tf=M(function(e,r,n){if(r.$===1)return r.a,z(cr,Qt,pn("label"),e,er($([n])));var t=r.a,i=r.b,o=r.c,c=z(cr,_r,Jn,i,er($([o])));switch(t){case 2:return z(cr,Qt,pn("label"),a(P,hr(s.ci),e),er($([c,n])));case 3:return z(cr,Qt,pn("label"),a(P,hr(s.ci),e),er($([n,c])));case 0:return z(cr,Yo,pn("label"),a(P,hr(s.ci),e),er($([n,c])));default:return z(cr,Yo,pn("label"),a(P,hr(s.ci),e),er($([c,n])))}}),Ko=Ua,ln=Ei(1),of="Enter",u3=function(e){return{$:5,a:e}},cf=function(e){if(e.$===1){var r=e.a;return ji(u3(r))}else return Un},lf=function(e){return e.$===1},$3=function(e){return{$:0,a:e}},Gc=_$,v3=v(function(e,r){return a(Gc,e,$3(r))}),uf=function(e){return a(v3,"click",or(e))},f3=Ws,m3=function(e){return{$:2,a:e}},s3=v(function(e,r){return a(Gc,e,m3(r))}),$f=function(e){var r=function(t){var i=e(t);if(i.$===1)return f3("No key matched");var o=i.a;return or(o)},n=a(Q,r,a(K,"key",_a));return Ve(a(s3,"keydown",a(fi,function(t){return L(t,!0)},n)))},d3=_e(21),jn=a(Tn,d3,s.gf),vf=" ",ff=function(e){return a(Br,"tabIndex",k(e))},p3=a(Lt,Ve,ff),g3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bI,c=Y($([lf(n)?Un:wn(6),Ve(uf(o(!i))),af,$f(function(l){return he(l,of)||he(l,vf)?X(o(!i)):J}),p3(0),jn,c3,ce(be)]),e);return h(tf,a(P,Ve(a(Ko,"role","checkbox")),a(P,Ve(a(Ko,"aria-checked",i?"true":"false")),a(P,cf(n),c))),n,z(cr,_r,Jn,$([ln,ye(be),ce(sr)]),er($([t(i)]))))}),h3=M(function(e,r,n){return Y(a(lt,e-En(n),Fi(r)),n)}),xi=$s,mf=function(e){var r=function(n){return n<10?k(n):Fi(lv(87+n))};return e<16?r(e):Y(mf(e/16|0),r(a(xi,16,e)))},b3=a(Xe,mf,a(h3,2,"0")),Uc=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},_3=function(e){var r=Uc(e),n=r.hu,t=r.gA,i=r.fS;return a(le,"",a(P,"#",a(ne,a(Xe,Ae,b3),$([n*255,t*255,i*255]))))},Oc=_e(12),sf=a(Tn,Oc,s.h$),Zo=Ri(1),cn=vs,Nn=function(e){return e*cn/180},x3=function(e){return{$:1,a:e}},qc=v(function(e,r){return{$:10,a:e,b:r}}),w3=_e(26),y3=function(e){return a(qc,w3,x3(-e))},$a=M(function(e,r,n){return z(rn,e,r,n,1)}),S3=rn,C3=v(function(e,r){return{$:4,a:e,b:r}}),L3=_e(24),z3=function(e){return a(qc,L3,a(C3,G(0,0,1),e))},P3=_e(17),Hn=function(e){return a(Ce,P3,h(ur,"br-"+k(e),"border-radius",k(e)+"px"))},M3=function(e){return ma($([e.ej?"box-inset":"box-",Ie(e.eV.a)+"px",Ie(e.eV.b)+"px",Ie(e.a2)+"px",Ie(e.bi)+"px",wa(e.b6)]))},T3=_e(19),k3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,T3,h(ur,M3(r),"box-shadow",Wo(r)))},yu=v(function(e,r){return{$:12,a:e,b:r}}),Su=_e(0),D3=function(e){return e?a(Ce,Su,a(yu,"transparent",1)):a(Ce,Su,a(yu,"visible",0))},lo=h($a,1,1,1),Jc=Je(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Ni=function(e){return a(Ce,Ii,V(Jc,"b-"+k(e),e,e,e,e))},V3=v(function(e,r){return a(Ce,Ii,V(Jc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),zt=function(e){var r=e.b2,n=e.cH,t=e.g4,i=e.hx;return he(n,r)&&he(t,i)?he(n,i)?Ni(n):a(V3,t,n):a(Ce,Ii,V(Jc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},F3=function(e){return a(Le,$([hr("focusable"),ce(ke(14)),ye(ke(14)),yn(lo),ln,Yn(9),sf,Hn(3),xn(e?h($a,59/255,153/255,252/255):h($a,211/255,211/255,211/255)),k3({a2:1,b6:e?z(S3,238/255,238/255,238/255,0):h($a,238/255,238/255,238/255),eV:L(0,0),bi:1}),on(e?h($a,59/255,153/255,252/255):lo),Ni(e?0:1),No(a(Le,$([xn(lo),ye(ke(6)),ce(ke(9)),z3(Nn(-45)),Zo,ln,y3(1),D3(!e),zt({b2:2,g4:2,hx:0,cH:0})]),qe))]),qe)},A3=Dr("htmlFor"),I3=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),wi=v(function(e,r){if(r.$){var t=r.a;return nr(t)}else{var n=r.a;return e(n)}}),df=ae(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),E3=Qd,B3=Rs,R3=v(function(e,r){if(r.$)return nr(e);var n=r.a;return Ge(n)}),j3=Zd,N3=function(e){return a(j3,{f2:!1,hb:!1},e)},Yc=function(e){if(e.b){var r=e.a;return e.b,X(r)}else return J},H3=v(function(e,r){if(r.$){var t=r.a;return nr(t)}else{var n=r.a;return Ge(e(n))}}),W3=function(e){return{$:2,a:e}},G3=function(e){return{$:0,a:e}},U3=function(e){return{$:1,a:e}},uo=v(function(e,r){return qr(r)-qr(e)}),$o=M(function(e,r,n){var t=qr(n);return xe(qr(e),t)<1&&xe(t,qr(r))<1}),O3=v(function(e,r){var n=function(i){return xe(i,e)<0?Ge(i):nr(U3(r))},t=h($o,"0","9",r)?Ge(a(uo,"0",r)):h($o,"a","z",r)?Ge(10+a(uo,"a",r)):h($o,"A","Z",r)?Ge(10+a(uo,"A",r)):nr(G3(r));return a(wi,n,t)}),pf=v(function(e,r){var n=Pa(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(wi,function(c){return a(wi,function(l){return Ge(c+l*e)},a(pf,e,o))},a(O3,e,i))}),q3=v(function(e,r){return 2<=e&&e<=36?a(pf,e,Bo(r)):nr(W3(e))}),J3=q3(16),Y3=M(function(e,r,n){return z(vn,e,r,n,1)}),X3=ae(function(e,r,n,t){return z(vn,e,r,n,t)}),Pt=us,K3=v(function(e,r){var n=a(Pt,10,e);return Ae(r*n)/n}),Z3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=cv(n);if(t.b&&!t.b.b){var i=t.a;return B3($([i,i]))}else return n};return a(Xe,Zt,a(Xe,function(n){return a(He,function(t){return h(E3,1,t,n)},N3(e))},a(Xe,I3(Yc),a(Xe,He(function(n){return n.hW}),a(Xe,He(bn(Er)),a(Xe,R3("Parsing hex regex failed"),wi(function(n){var t=a(ne,a(Xe,r,a(Xe,J3,H3(Wa))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,m=f.a.a;return Ge(z(X3,i/255,c/255,u/255,a(K3,2,m/255)))}else break e;else{var i=t.a.a,g=t.b,c=g.a.a,b=g.b,u=b.a.a;return Ge(h(Y3,i/255,c/255,u/255))}else break e;return nr("Parsing ints from hex failed")})))))))}(),Q3=Dr("id"),eb=$n("input"),rb=$n("label"),gf=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),nb=gf(0),ab=Dr("name"),tb=function(e){return L(e,!0)},ib=function(e){return{$:1,a:e}},ob=v(function(e,r){return a(Gc,e,ib(r))}),cb=v(function(e,r){return h(Ze,K,r,e)}),lb=a(cb,$(["target","value"]),_a),hf=function(e){return a(ob,"input",a(fi,tb,a(fi,e,lb)))},ub=a(Tn,Oc,s.h4),bf=a(Tn,Oc,s.h8),Xc=function(e){return a(gv,5,e)},Kc=function(e){return a(Ce,Bv,a(Fv,h(Re,jv,"ff-",e),e))},$b=h(Rr,195,195,195),_f=h(Rr,69,69,69),vb=gf(2),fb={$:2},Zc=fb,mb=_e(32),sb=_e(31),Cu=function(e){return h(Ze,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},db=v(function(e,r){return a(Ee,r,h(Ze,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return X(L(i,c))}else return J;else{var i=t.a;return X(i)}}),J,e))}),Lu=function(e){return h(Ze,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},pb=_e(33),gb=Dr("max"),hb=Dr("min"),bb=v(function(e,r){return a(Ce,Zv,h(Kv,a(Qv,e,r),e,r))}),_b=function(e){return a(Dr,"step",e)},xf=Dr("type"),wf=Dr("value"),ya=Yv,xb=Td,yf=v(function(e,r){switch(r.$){case 0:return Un;case 2:var n=r.a;return ji(n);case 6:var t=r.a;return Ri(t);case 5:var i=r.a;return Ei(i);case 7:var t=r.a;return Jv(t);case 8:var t=r.a;return dv(t);case 3:var t=r.a,i=r.b;return a(Tn,t,i);case 4:var o=r.a,c=r.b;return a(Ce,o,c);case 9:var l=r.a,u=r.b;return a(pv,l,a(Wv,e,u));case 1:var f=r.a;return Ve(a(xb,e,f));default:var m=r.a,g=r.b;return a(qc,m,g)}}),wb=M(function(e,r,n){return a(Mn,$([ce(be),ye(a(Ee,be,n)),ln]),$([a(Le,$([ce(ya(Ae(e*1e4)))]),qe),a(Le,a(P,ln,a(ne,yf(yt),r)),qe),a(Le,$([ce(ya(Ae(we(1-e)*1e4)))]),qe)]))}),yb=M(function(e,r,n){return a(zr,$([ye(be),ce(a(Ee,be,n)),Zo]),$([a(Le,$([ye(ya(Ae(we(1-e)*1e4)))]),qe),a(Le,a(P,Zo,a(ne,yf(yt),r)),qe),a(Le,$([ye(ya(Ae(e*1e4)))]),qe)]))}),Sf=v(function(e,r){var n=Lu(e),t=Cu(e),i=function(){var C=L(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var w=C.a.a.a,T=C.b.a.a;return xe(T,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),c=r.ic,l=c,u=Cu(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Lu(l),g=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(g+("-"+f)),d=$([a(ue,"width",g),a(ue,"height",f)]),x=a(db,e,L(5,5)),_=x.a,S=x.b;return h(tf,$([lf(r.em)?Un:a(bb,_,S),af,ce(function(){if(n.$===1)return be;if(n.a.$){var C=n.a;return C}else return sr}()),ye(function(){if(t.$===1)return sr;if(t.a.$){var C=t.a;return C}else return sr}())]),r.em,a(Mn,$([ce(a(Ee,be,n)),ye(a(Ee,ke(20),t))]),$([z(cr,_r,pn("input"),$([cf(r.em),a(Ce,mb,a(Za,'input[type="range"].'+(b+"::-moz-range-thumb"),d)),a(Ce,pb,a(Za,'input[type="range"].'+(b+"::-webkit-slider-thumb"),d)),a(Ce,sb,a(Za,'input[type="range"].'+(b+"::-ms-thumb"),d)),Ve(Sr(b+" ui-slide-bar focusable-parent")),Ve(hf(function(C){var w=ov(C);if(w.$===1)return r.bI(0);var T=w.a;return r.bI(T)})),Ve(xf("range")),Ve(_b(function(){var C=r.cE;if(C.$===1)return"any";var w=C.a;return ve(w)}())),Ve(hb(ve(r.cr))),Ve(gb(ve(r.cq))),Ve(wf(ve(r.cI))),i?Ve(a(Ko,"orient","vertical")):Un,ce(i?a(Ee,ke(20),t):a(Ee,be,n)),ye(i?a(Ee,be,n):a(Ee,ke(20),t))]),er(D)),a(Le,a(P,ce(a(Ee,be,n)),a(P,ye(a(Ee,ke(20),t)),Y(e,$([Xc(i?h(yb,o,a(P,hr("focusable-thumb"),l),n):h(wb,o,a(P,hr("focusable-thumb"),l),t))])))),qe)])))}),Sb=h($a,.5,.5,.5),Cf=Er,zu=function(e){var r=e.c3,n=e.cI,t=e.cr,i=e.cq,o=e.cE,c=e.bI;return a(Le,$([ce(be)]),a(Sf,$([wn(2),Xc(a(Le,$([ce(be),ye(ke(16)),ln,on(_f),Hn(4)]),qe))]),{em:a(vb,D,a(Mn,$([ce(be)]),$([a(Le,$([ub]),Sn(r)),a(Le,$([ce(be),bf,Kc($([Zc]))]),Sn(ve(n)))]))),cq:i,cr:t,bI:c,cE:X(o),ic:Cf($([ce(ke(12)),ye(ke(12)),Hn(4),Ni(0),xn(Sb),on($b)])),cI:n}))},Cb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Lb=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(g3,D,{f6:c,gM:F3,em:a(nb,D,Sn(e)),bI:n3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return zu({c3:e,cq:o,cr:i,bI:t3(e),cE:.001*(o-i),cI:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return zu({c3:e,cq:o,cr:i,bI:a(Xe,Ae,i3(e)),cE:1,cI:c});default:var c=r.a;return a(Le,$([ce(be)]),gn(a(xa,D,$([a(xa,$([a(gr,"margin-bottom","6px")]),$([a(rb,$([A3(e)]),$([jc(e)]))])),a(eb,$([xf("color"),a(gr,"width","100%"),a(gr,"height","26px"),a(gr,"padding","0px"),Q3(e),ab(e),hf(function(l){return a(a3,e,a(Cb,o3,Z3(l)))}),wf(_3(c))]),D)]))))}}),Qo=h(Rr,255,255,255),zb=function(e){return a(zr,$([ce(be),wn(8),a(nf,0,14),zt({b2:1,g4:0,hx:0,cH:0}),xn(Bi)]),$([a(Le,$([Yn(16),Wc,yn(Qo)]),Sn(e.hc)),a(zr,$([ce(be),wn(6)]),r3(a(Xo,Lb,e.aN)))]))},Pb=function(e){return a(zr,$([ce(be),ye(be),yn(Hc),Yn(12),Qh,rf]),a(ne,zb,e))},Mb=Zh(Pb),Tb=function(e){return a(zr,$([ce(be),ye(be)]),$([a(Mn,$([wn(14),ce(be)]),D),a(Nc,Jh,Mb(qn(e).gb))]))},kb=function(e){return{$:6,a:e}},Db=ae(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Vb=function(e){var r=e.cH,n=e.hx,t=e.b2,i=e.g4;if(he(r,n)&&he(r,t)&&he(r,i)){var o=r;return a(Ce,pt,V(dt,"p-"+k(r),o,o,o,o))}else return a(Ce,pt,V(dt,z(Db,r,n,t,i),r,n,t,i))},Fb=function(e){return{$:0,a:e}},Ab=function(e){return{$:1,a:e}},Ib=Ab,Eb=function(e){var r=e.b.X;return Gn(r)},yi=h(Rr,255,60,0),Bb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Gn(r)+1+Gn(n)},Rb=function(e){var r=L(Eb(e),Bb(e)-1),n=r.a,t=r.b;return a(Le,$([ce(be),ln]),a(Sf,$([Xc(a(Mn,$([ce(be),ye(ke(4)),ln,on(_f),Hn(2)]),$([a(Le,$([ce(ya(n)),ye(be),on(yi),Hn(2)]),qe),a(Le,$([ce(ya(t-n))]),qe)])))]),{em:Ib(""),cq:t,cr:0,bI:a(Xe,Ae,Fb),cE:X(1),ic:Cf($([ce(ke(12)),ye(ke(12)),Hn(6),on(yi)])),cI:n}))},jb=Ri(2),ei=h(Rr,220,220,220),Nb=function(e){var r=e.a,n=function(){return r.$?$([yn(ei)]):$([yn(yi)])}();return a(Le,Y(n,$([Yn(14),jb,bf,Kc($([Zc]))])),Sn(a(fv,3,qn(e).cU)))},Hb=function(e){e.a;var r=e.b.X;return a(He,function(n){return Ae(60/(qn(e).cU-n))},a(He,a(Xe,K$,function(n){return n.cU}),Yc(a(av,59,r))))},Wb=function(e){var r=Hb(e);if(r.$===1)return qe;var n=r.a;return a(Le,$([Yn(14),yn(Hc),Kc($([Zc]))]),Sn(k(n)+" FPS"))},Pu={$:1},Gb={$:3},Ub={$:2},Ob={$:8},qb=d$,Jb=v(function(e,r){return a(bc,e,qb(r))}),Yb=Jb("disabled"),Xb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Kb=function(e){return a(Ct,Xb,e)?Un:hr("focusable")},Si=a(Lt,Ve,uf),Lf=v(function(e,r){var n=r.eW,t=r.em;return z(cr,_r,Jn,a(P,ce(sr),a(P,ye(sr),a(P,hr(s.ca+(" "+(s.ax+(" "+(s.hG+(" "+s.eU)))))),a(P,jn,a(P,Kb(e),a(P,ji(Ob),a(P,Ve(ff(0)),function(){if(n.$===1)return a(P,Ve(Yb(!0)),e);var i=n.a;return a(P,Si(i),a(P,$f(function(o){return he(o,of)||he(o,vf)?X(i):J}),e))}()))))))),er($([t])))}),Mu=v(function(e,r){return a(Lf,D,{em:a(Le,$([ce(ke(36)),Rn(3),yn(r),sf,Yn(12),Wc,xn(r),Ni(1),Hn(4)]),Sn("REC")),eW:X(e)})}),Tu=M(function(e,r,n){return a(Lf,D,{em:gn(h(ua,20,n,e)),eW:X(r)})}),Zb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Mn,D,$([a(Le,$([ce(ke(40))]),function(){switch(r.$){case 0:return a(Mu,Pu,yi);case 1:return a(Mu,Ub,ei);default:return qe}}()),a(Le,$([ce(ke(28))]),function(){switch(r.$){case 0:return qe;case 1:return dn(n)?qe:h(Tu,Bn.hp,Gb,ei);default:return h(Tu,Bn.ho,Pu,ei)}}())]))},Qb=function(e){return a(zr,$([ce(be)]),$([Rb(e),a(Mn,$([ce(be),wn(14),a(nf,0,6),ln]),$([Zb(e),Wb(e),Nb(e)]))]))},e1=function(e){return a(zr,$([ce(be),wn(14),Vb({b2:20,g4:0,hx:0,cH:0}),zt({b2:1,g4:0,hx:0,cH:0}),xn(Bi)]),$([a(Le,$([Yn(16),Wc,yn(Hc)]),Sn("Time Travel")),a(Nc,kb,Qb(e))]))},r1=v(function(e,r){return a(zr,$([qn(r).dD.im>600?on(Oh):on(qh),zt({b2:0,g4:0,hx:1,cH:0}),xn(Bi),ce(ke(da.c4)),ye(be)]),$([function(){return e?qe:a(zr,$([ce(be),ye(be),Rn(14),wn(14)]),$([e1(r),Tb(r)]))}()]))}),n1=function(e){return{$:3,a:e}},ku=Ei(2),a1=h(Rr,232,78,50),t1=h(Rr,48,48,48),i1=function(e){return a(Dr,"href",Md(e))},o1=Br("rel"),c1=Dr("target"),Du=v(function(e,r){var n=r.fn,t=r.em;return z(cr,_r,pn("a"),a(P,Ve(i1(n)),a(P,Ve(o1("noopener noreferrer")),a(P,Ve(c1("_blank")),a(P,ce(sr),a(P,ye(sr),a(P,hr(s.ca+(" "+(s.ax+(" "+s.et)))),e)))))),er($([t])))}),Oa=Dr("title"),l1=h(Rr,31,161,242),u1=function(e){var r=M(function(o,c,l){var u=he(c,e)?Qo:t1;return a(Le,$([Qr(Oa(o)),Si(n1(c)),jn,Rn(7)]),gn(h(ua,40,u,l)))}),n=a(zr,$([Uv]),$([h(r,"Configurations",0,Bn.hN)])),t=a(zr,D,$([a(Du,$([Qr(Oa("Twitter")),ku,jn,Rn(7)]),{em:gn(h(ua,40,l1,Bn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(Du,$([Qr(Oa("Source Code")),ku,jn,Rn(7)]),{em:gn(h(ua,40,a1,Bn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([ce(ke(da.bE)),Rn(4),Si(Gv),zt({b2:1,g4:0,hx:0,cH:0}),xn(Bi),jn,Qr(Oa("Activate Distraction Free Mode"))]),gn(h(ua,46,Qo,Bn.fx)));return a(zr,$([ce(ke(da.bE)),ye(be),rf,on(Ov)]),$([i,n,t]))},$1=function(e){var r=a(Le,$([ce(ke(da.bE)),Uv,Rn(4),Si(Gv),jn,Qr(Oa("Deactivate Distraction Free Mode (A)"))]),gn(h(ua,46,Ov,Bn.fx)));return e.bw?r:a(Mn,$([ce(ke(da.bE+da.c4)),ye(be)]),$([u1(e.bp),a(r1,e.bp,e.R)]))},v1=M(function(e,r,n){var t=pg(n.R),i=qn(n.R);return h(kh,{hl:$([hg({fO:J,fW:J,hH:J})])},$([ce(ke(ot(i.dD.im))),ye(ke(ot(i.dD.gH))),Qr(a(gr,"-webkit-font-smoothing","antialiased")),Qr(a(gr,"pointer-events","none")),Qr(a(gr,"touch-action","none")),Qr(a(gr,"user-select","none")),No(a(Nc,sg,a(r,i,t))),No($1(n))]),gn(a(Dh,gi(dg),a(e,i,t))))}),f1=kr(function(e,r,n,t,i,o){var c=v(function(u,f){return L(z(lg,r,o,u,f),eu)}),l=function(u){var f=a(Q$,n,u.gY);return L({bp:0,bw:!0,R:a(ug,f,t),dO:0},eu)};return P0({gS:l,hX:mg,ii:c,ik:a(v1,e,i)})}),m1=ae(function(e,r,n,t){return lr(f1,e,r,n,t,v(function(i,o){return qe}),M(function(i,o,c){return c}))}),s1=function(e){return{}},d1=M(function(e,r,n){return{aN:n,g0:r,hc:e}}),p1=function(e){return h(Re,v(function(r,n){var t=r.a,i=r.b;return h(fa,t,i,n)}),Ic,e)},g1=M(function(e,r,n){return h(d1,e,r,p1(n))}),Vu=g1,Ht=M(function(e,r,n){var t=r.a,i=r.b;return L(e,a(iv,L(t,i),n))}),h1=$([h(Vu,"Camera",!0,$([h(Ht,"camera distance",L(3,8),4),h(Ht,"camera azimuth",L(0,2*cn),0),h(Ht,"camera elevation",L(-cn/2,cn/2),.5)])),h(Vu,"Parameters",!0,$([h(Ht,"sun size",L(.1,.5),.3)]))]),b1=v(function(e,r){return r}),ec=z(vn,52/255,101/255,164/255,1),_1=z(vn,115/255,210/255,22/255,1),Qc=function(e){return{$:5,a:e}},zf=function(e){return Qc(e)},el=v(function(e,r){return{$:4,a:e,b:r}}),Pf=function(e){return e},Ta=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dV:t.dV+n.dV}}),x1=v(function(e,r){return Pf(L(e,a(Ta,r,e)))}),Mf=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),w1=v(function(e,r){var n=r.a,t=r.b,i=r.c;return h(Mf,e(n),e(t),e(i))}),Pr=function(e){return e},fn={io:0,is:0,dV:0},vo=v(function(e,r){return a(el,e,a(x1,fn,a(w1,Pr,r)))}),y1=z(vn,204/255,0/255,0/255,1),S1=zf($([a(vo,y1,G(100,0,0)),a(vo,_1,G(0,100,0)),a(vo,ec,G(0,0,100))])),C1=v(function(e,r){return a(He,function(n){if(n.$)return 0;var t=n.b;return t},a(Ai,e,r.aN))}),L1=v(function(e,r){return a(Ee,0,Yc(a(bn,C1(e),r)))}),z1=v(function(e,r){return a(L1,e,r.gb)}),ri=z1,Cn=function(e){return e},qa=function(e){return Cn(cn*(e/180))},P1=function(e){return e},rc=function(e){var r=e;return-r},M1=v(function(e,r){var n=e,t=r;return{io:n.is*t.dV-n.dV*t.is,is:n.dV*t.io-n.io*t.dV,dV:n.io*t.is-n.is*t.io}}),Tf=function(e){var r=e;return r.dT},kf=function(e){var r=e;return r.dU},T1=function(e){return a(M1,Tf(e),kf(e))},ka=function(e){var r=e;return r.dm},Sa=fs,Ca=ms,ni=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Sa(c),u=Ca(c),f=t.gm,m=f,g=m.io*u,b=l*g,d=g*g,x=m.is*u,_=l*x,S=g*x,C=x*x,w=1-2*(d+C),T=m.dV*u,W=l*T,Z=2*(S-W),re=2*(S+W),te=g*T,ie=2*(te+_),ee=2*(te-_),q=x*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(d+Me);return{io:Se*o.io+Z*o.is+ie*o.dV,is:re*o.io+me*o.is+de*o.dV,dV:ee*o.io+pe*o.is+w*o.dV}}),Mt=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Sa(c),u=Ca(c),f=t.dm,m=f,g=o.io-m.io,b=o.is-m.is,d=o.dV-m.dV,x=t.gm,_=x,S=_.io*u,C=l*S,w=S*S,T=_.is*u,W=l*T,Z=S*T,re=T*T,te=1-2*(w+re),ie=_.dV*u,ee=l*ie,q=2*(Z-ee),de=2*(Z+ee),pe=S*ie,Me=2*(pe+W),Se=2*(pe-W),me=T*ie,Te=2*(me-C),A=2*(me+C),I=ie*ie,E=1-2*(re+I),B=1-2*(w+I);return{io:m.io+E*g+q*b+Me*d,is:m.is+de*g+B*b+Te*d,dV:m.dV+Se*g+A*b+te*d}}),Da=function(e){return e},Xn=function(e){var r=e;return r.dT},Kn=function(e){var r=e;return r.dU},Zn=function(e){var r=e;return r.dW},Df=M(function(e,r,n){return Da({dm:h(Mt,e,r,ka(n)),dT:h(ni,e,r,Xn(n)),dU:h(ni,e,r,Kn(n)),dW:h(ni,e,r,Zn(n))})}),Fu=M(function(e,r,n){return h(Df,e(n),r,n)}),Vf=function(e){var r=e;return r.gm},Ff=v(function(e,r){return Da({dm:a(Ta,e,ka(r)),dT:Xn(r),dU:Kn(r),dW:Zn(r)})}),k1=v(function(e,r){var n=e,t=r;return{io:n*t.io,is:n*t.is,dV:n*t.dV}}),D1=M(function(e,r,n){return a(Ff,a(k1,r,e),n)}),V1=M(function(e,r,n){return h(D1,Vf(e(n)),r,n)}),kn=v(function(e,r){return{gm:r,dm:e}}),F1=function(e){var r=e;return a(kn,r.dm,r.dT)},A1=function(e){var r=e;return a(kn,r.dm,r.dU)},I1=function(e){var r=e;return a(kn,r.dm,r.dW)},E1=function(e){var r=Da({dm:e.ba,dT:kf(e.ed),dU:T1(e.ed),dW:Tf(e.ed)}),n=h(V1,I1,e.cZ,h(Fu,F1,rc(e.cc),h(Fu,A1,e.b$,r)));return n},B1=function(e){return{$:0,a:e}},Mr=function(e){var r=e;return we(r)},ai=function(e){var r=e;return .5*r},R1=ss,j1=function(e){var r=e;return R1(r)},N1=function(e){var r=ai(Mr(e.fq)),n=j1(r);return{dx:B1(n),dN:e.dN}},Af=Er,Wn=function(e){return e},H1=Wn({io:1,is:0,dV:0}),rl=H1,If=Wn({io:0,is:0,dV:1}),Hi=If,W1=Af({dm:fn,dT:Hi,dU:rl}),G1=function(e){var r=e.ba,n=e.b$,t=e.cc,i=e.cZ;return N1({fq:qa(40),dN:E1({b$:Cn(n),cZ:Pr(i),cc:Cn(t),ba:P1(r),ed:W1})})},U1=function(e){return G1({b$:a(ri,"camera azimuth",e),cZ:a(ri,"camera distance",e),cc:a(ri,"camera elevation",e),ba:{io:0,is:0,dV:0}})},nl=v(function(e,r){return{$:2,a:e,b:r}}),O1=M(function(e,r,n){return{m:a(kn,e,r),g5:Mr(n.g5),hs:Mr(n.hs)}}),Ef=Wn({io:0,is:1,dV:0}),q1=M(function(e,r,n){return a(nl,e,h(O1,fn,Ef,{g5:Pr(n),hs:Pr(r)}))}),nc=function(e){return{$:0,a:e}},Bf=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Rf=M(function(e,r,n){return xe(n,e)<0?e:xe(n,r)>0?r:n}),fo=function(e){return h(Rf,0,1,e<=.04045?e/12.92:a(Pt,(e+.055)/1.055,2.4))},Tt=np,J1=function(e){var r=Uc(e),n=r.hu,t=r.gA,i=r.fS;return h(Tt,fo(n),fo(t),fo(i))},ti=function(e){return h(Bf,0,nc(J1(e)),nc(0))},jf=v(function(e,r){return{$:0,a:e,b:r}}),al=v(function(e,r){return{$:3,a:e,b:r}}),Nf=v(function(e,r){return{$:1,a:e,b:r}}),Y1=M(function(e,r,n){return{io:e,is:r,dV:n}}),X1=function(e){var r=e;return r},tl=function(e){var r=e;return X1(r.fN)},il=function(e){var r=e;return r.a4},K1=v(function(e,r){return{fN:a(Ff,e,tl(r)),a4:il(r)}}),Z1=v(function(e,r){var n=r;return a(kn,a(Ta,e,n.dm),n.gm)}),Q1=v(function(e,r){var n=r;return{m:a(Z1,e,n.m),g5:n.g5,hs:n.hs}}),ol=function(e){var r=e;return r},Hf=v(function(e,r){var n=ol(r),t=n.a,i=n.b;return Pf(L(e(t),e(i)))}),e_=v(function(e,r){return a(Hf,Ta(e),r)}),cl=function(e){var r=e;return r.f4},ll=function(e){var r=e;return r.hs},ul=v(function(e,r){return{f4:r,hs:Mr(e)}}),r_=v(function(e,r){return a(ul,ll(r),a(Ta,e,cl(r)))}),Wf=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return G(e(t),e(i),e(o))}),n_=v(function(e,r){return a(Wf,Ta(e),r)}),Gf=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(Y1,n,t,i);switch(r.$){case 0:var m=r.a,c=r.b;return a(jf,m,a(K1,o,c));case 1:var m=r.a,l=r.b;return a(Nf,m,a(n_,o,l));case 3:var m=r.a,u=r.b;return a(al,m,a(r_,o,u));case 2:var m=r.a,f=r.b;return a(nl,m,a(Q1,o,f));case 4:var m=r.a,g=r.b;return a(el,m,a(e_,o,g));default:var b=r.a;return Qc(a(ne,Gf(G(n,t,i)),b))}}),Au=function(e){return Gf(G(e,0,0))},a_=M(function(e,r,n){return{fN:h(Df,e,r,tl(n)),a4:il(n)}}),t_=v(function(e,r){var n=a(Mt,e,r),t=a(ni,e,r);return function(i){var o=i;return a(kn,n(o.dm),t(o.gm))}}),i_=M(function(e,r,n){var t=n;return{m:h(t_,e,r,t.m),g5:t.g5,hs:t.hs}}),o_=M(function(e,r,n){return a(Hf,a(Mt,e,r),n)}),c_=M(function(e,r,n){return a(ul,ll(n),h(Mt,e,r,cl(n)))}),l_=M(function(e,r,n){return a(Wf,a(Mt,e,r),n)}),$l=M(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(jf,l,h(a_,e,r,t));case 1:var l=n.a,i=n.b;return a(Nf,l,h(l_,e,r,i));case 3:var l=n.a,o=n.b;return a(al,l,h(c_,e,r,o));case 2:var l=n.a,c=n.b;return a(nl,l,h(i_,e,r,c));case 4:var l=n.a,u=n.b;return a(el,l,h(o_,e,r,u));default:var f=n.a;return Qc(a(ne,a($l,e,r),f))}}),vl=Ef,u_=a(kn,fn,vl),Iu=v(function(e,r){return h($l,u_,Cn(e),r)}),$_=a(kn,fn,Hi),Eu=v(function(e,r){return h($l,$_,Cn(e),r)}),ac=v(function(e,r){return a(al,e,a(ul,Pr(r),fn))}),v_=v(function(e,r){return(r-X$(r/e)*e)/e}),Bu=v(function(e,r){return 360*a(v_,e,r)}),f_=z(vn,255/255,255/255,255/255,1),m_=function(e){var r=a(Eu,Nn(20),h(q1,ti(ec),.2,.05)),n=a(Eu,Nn(20),a(Iu,Nn(a(Bu,3,e.cU)),a(Au,.2,a(ac,ti(f_),.04)))),t=a(ac,ti(ec),.1);return a(Iu,Nn(a(Bu,10,e.cU)),a(Au,1,zf($([t,n,r]))))},mo=function(e){return e/255},s_=M(function(e,r,n){return z(vn,mo(e),mo(r),mo(n),1)}),d_=z(vn,245/255,121/255,0/255,1),p_=function(e){return a(ac,ti(d_),a(ri,"sun size",e))},g_=function(e){return e},h_=function(e){return Pr(.01*e)},Ru=function(e){return e},b_=function(e){return e},__=function(e){return{$:0,a:e}},x_=__,w_={$:3},y_=w_,S_=ae(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),C_=S_,L_=function(e){return{$:1,a:e}},z_=L_,P_=function(e){return a(Br,"height",k(e))},M_=kv,T_=function(e){return{$:2,a:e}},k_=T_,D_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return Ae(l*1e3)/1e3},c=function(l){return Ae(l*1e4)/100};return ma($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(t)),"%,",ve(o(i)),")"]))},V_=v(function(e,r){switch(r.$){case 0:return a(Gp,e,r);case 1:return a(Up,e,r);case 2:return a(Op,e,r);case 3:return a(qp,e,r);case 4:return a(Jp,e,r);default:return a(Yp,e,r)}}),F_=v(function(e,r){switch(r.$){case 0:return a(_p,e,r);case 1:return a(xp,e,r);case 2:return a(wp,e,r);case 3:return a(yp,e,r);case 4:return a(Sp,e,r);case 5:return a(Cp,e,r);case 6:return a(Lp,e,r);case 7:return a(zp,e,r);default:return Pp(e)}}),A_=M(function(e,r,n){return h(Wp,e,r,n)}),ju=function(e){var r=e;return r},Va=lp,so=z(Va,1,1,1,1),Nr=M(function(e,r,n){return a(ne,function(t){return a(t,r,n)},e)}),I_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),E_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(I_,n*t/i,n,n*(1-t-i)/i)}),B_=function(e){var r=e.a,n=e.b,t=e.c;return h(Tt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},fl=v(function(e,r){return B_(a(E_,e,r))}),Uf=v(function(e,r){return{ek:he(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Ur=sp,R_=function(e){return Ur({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},po=Je(function(e,r,n,t,i){var o=t.ek?1:-1,c=z(Va,t.cC,t.cC,t.cC,o);return lr(i,e,c,R_(t),t.ek,r,n)}),Of=kr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,m=n,g=a(Uf,c,t),b=l,d=o;e=u,r=f,n=m,t=g,i=b,o=d;continue e;case 1:var x=i.b,_=a(P,V(po,e,r,n,t,x),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(P,V(po,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var w=i.a,T=a(P,V(po,e,r,n,t,w),o.hI);return{P:o.P,_:o._,hI:T};default:var W=i.a;return h(Re,z(Of,e,r,n,t),o,W)}}),j_=ae(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),qf=j_,ml=ae(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),N_=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(ml,518,r,n,t)},H_=v(function(e,r){return{$:6,a:e,b:r}}),W_=H_,Jf=$([N_({ab:1,ac:0,ai:!1}),z(qf,!1,!1,!1,!1),a(W_,0,1)]),La=519,sl=8,Yf=15,pa=7681,G_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Fe=bp,U_=v(function(e,r){return{$:0,a:e,b:r}}),O_=U_({d5:1,ei:0,eS:5}),pr=ep,q_=O_($([{cx:a(pr,-1,-1)},{cx:a(pr,1,-1)},{cx:a(pr,-1,1)},{cx:a(pr,1,1)}])),J_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},Y_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:m}}}}}}}}}}}},dl=M(function(e,r,n){var t=e.dy,i=e.dd,o=e.dS,c=v(function(f,m){var g=f;return m(g)}),l=v(function(f,m){var g=f;return m(g)}),u=function(f){return a(Xe,c(f.bO),a(Xe,l(f.bz),a(Xe,l(f.bX),l(f.bY))))};return a(u,n,a(u,r,h(Y_,t,i,o)))}),pl=function(e){return h(dl,{dd:e.dd,dy:e.dy,dS:e.dS},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},gl=function(e){return V(Fe,$([pl(e),z(qf,!1,!1,!1,!1)]),J_,G_,q_,{})},X_=gl({bz:pa,dd:0,dy:sl,bO:La,dS:Yf,bX:pa,bY:pa}),K_=516,Nu=5386,ar=7680,Z_=function(e){return a(Pt,2,e+4)},Xf=function(e){return gl({bz:ar,dd:Yf,dy:sl,bO:K_,dS:Z_(e),bX:Nu,bY:Nu})},Q_=M(function(e,r,n){return mr($([h(Nr,e,n,Jf),$([Xf(r),X_])]))}),e2=v(function(e,r){return mr(a(G$,Q_(e),r))}),r2=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(ml,513,r,n,t)},n2=r2({ab:1,ac:0,ai:!0}),a2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},t2=function(e){var r=e.cz,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,c=e.fI,l=v(function(u,f){var m=u.a,g=u.b,b=u.c,d=f.a,x=f.b,_=f.c;return a2(m)(g)(b)(d)(x)(_)(r)(n)(t)(i)});return a(l,o,c)},i2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Hu=v(function(e,r){var n=e,t=r;return h(i2,32774,n,t)}),o2=1,Wu=771,c2=770,hl=t2({bZ:0,fI:a(Hu,o2,Wu),b0:0,b6:a(Hu,c2,Wu),cf:0,cz:0}),ra=$([n2,hl]),l2=function(e){var r=e;return r.eL},u2=function(e){var r=e;return r.eM},Kf=function(e){var r=e;return r.eN},$2=function(e){var r=e;return r.eO},v2=function(e){var r=e;return r.eP},Zf=function(e){var r=e;return r.eQ},ga=v(function(e,r){var n=e,t=r;return t-n}),Qf=function(e){return G(a(ga,$2(e),l2(e)),a(ga,v2(e),u2(e)),a(ga,Zf(e),Kf(e)))},Gu=function(e){var r=e;return ka(r)},f2=function(e){return e},m2=function(e){return Da({dm:f2({io:e.K,is:e.L,dV:e.M}),dT:Wn({io:e.t,is:e.u,dV:e.v}),dU:Wn({io:e.w,is:e.x,dV:e.y}),dW:Wn({io:e.z,is:e.A,dV:e.B})})},go=v(function(e,r){var n=e,t=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,f=u;return{io:t.io*f.io+t.is*f.is+t.dV*f.dV,is:t.io*l.io+t.is*l.is+t.dV*l.dV,dV:t.io*o.io+t.is*o.is+t.dV*o.dV}}),em=v(function(e,r){var n=e,t=r,i=n.dm,o=i,c=t.io-o.io,l=t.is-o.is,u=t.dV-o.dV,f=n.dW,m=f,g=n.dU,b=g,d=n.dT,x=d;return{io:c*x.io+l*x.is+u*x.dV,is:c*b.io+l*b.is+u*b.dV,dV:c*m.io+l*m.is+u*m.dV}}),rm=v(function(e,r){return{dm:a(em,e,ka(r)),dT:a(go,e,Xn(r)),dU:a(go,e,Kn(r)),dW:a(go,e,Zn(r))}}),s2=M(function(e,r,n){return{io:e,is:r,dV:n}}),Ci=function(e){var r=e;return r},We=v(function(e,r){var n=e,t=r;return a(Cr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(sa,n,t)}),d2=v(function(e,r){var n=Ci(r),t=Ci(e);return{eL:a(We,t.eL,n.eL),eM:a(We,t.eM,n.eM),eN:a(We,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Tr=function(e){var r=e;return r},p2=function(e){var r=e;return G(r.io,r.is,r.dV)},Qa=v(function(e,r){var n=e,t=r;return t+n}),g2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ai(Mr(t)),c=ai(Mr(n)),l=ai(Mr(i)),u=p2(r),f=u.a,m=u.b,g=u.c;return{eL:a(Qa,c,f),eM:a(Qa,o,m),eN:a(Qa,l,g),eO:a(ga,c,f),eP:a(ga,o,m),eQ:a(ga,l,g)}}),Uu=ae(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,f=i.is*r,m=i.io*r,g=Tr(Zn(e)),b=we(l*g.io)+we(c*g.is)+we(o*g.dV),d=Tr(Kn(e)),x=we(l*d.io)+we(c*d.is)+we(o*d.dV),_=Tr(Xn(e)),S=we(l*_.io)+we(c*_.is)+we(o*_.dV),C=a(g2,G(S,x,b),a(em,e,h(s2,m,f,u)));if(t.$)return X(C);var w=t.a;return X(a(d2,w,C))}),tc=ae(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var d=e,x=r,_=n,S=o;e=d,r=x,n=_,t=S;continue e;case 1:var c=i.a,l=z(Uu,e,r,c,n),d=e,x=r,_=l,S=o;e=d,r=x,n=_,t=S;continue e;case 2:var d=e,x=r,_=n,S=o;e=d,r=x,n=_,t=S;continue e;case 3:var c=i.a,l=z(Uu,e,r,c,n),d=e,x=r,_=l,S=o;e=d,r=x,n=_,t=S;continue e;case 4:var u=i.a,d=e,x=r,_=z(tc,e,r,n,u),S=o;e=d,r=x,n=_,t=S;continue e;default:var f=i.a,m=i.b,g=a(rm,m2(f),e),b=r*f.cC,d=e,x=r,_=z(tc,g,b,n,$([m])),S=o;e=d,r=x,n=_,t=S;continue e}}else return n}),Fa=ap,Aa=tp,Ia=ip,nm=function(e){return{$:4,a:e}},h2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),kt=function(e){return nm(a(h2,e,D))},b2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},_2=function(e){var r=e;return r},Ou=gl({bz:pa,dd:0,dy:sl,bO:La,dS:255,bX:pa,bY:pa}),va=_s,nn=0,x2=function(e){var r=e,n=a(Cr,we(r.io),a(Cr,we(r.is),we(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=va(o*o+i*i+t*t);return c*n}else return nn},ir={b0:0,f3:!1,cf:0,dv:0,cz:0,dK:0,io:0,is:0,dV:0},wr=v(function(e,r){var n=e,t=r;return Ur({eu:n.io,ev:n.cz,ew:t.io,ex:t.cz,ey:n.is,ez:n.cf,eA:t.is,eB:t.cf,eC:n.dV,eD:n.b0,eE:t.dV,eF:t.b0,eG:n.dK,eH:n.dv,eI:t.dK,eJ:t.dv})}),Ja=L({bF:a(wr,ir,ir),cm:a(wr,ir,ir),cn:a(wr,ir,ir),co:a(wr,ir,ir)},z(Va,0,0,0,0)),Ne=v(function(e,r){var n=r;return e*n}),am=514,tm=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(ml,515,r,n,t)},im=240,w2=$([tm({ab:1,ac:0,ai:!0}),pl({bz:ar,dd:im,dy:0,bO:am,dS:0,bX:ar,bY:ar}),hl]),y2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,c=Mr(t),l=c,u=Mr(i),f=u,m=n.dx;if(m.$){var b=m.a;return Io(f)?Ur({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Ur({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-l),eF:-(f+l)/(f-l),eG:0,eH:0,eI:0,eJ:1})}else{var g=m.a;return Io(f)?Ur({eu:1/(o*g),ev:0,ew:0,ex:0,ey:0,ez:1/g,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Ur({eu:1/(o*g),ev:0,ew:0,ex:0,ey:0,ez:1/g,eA:0,eB:0,eC:0,eD:0,eE:-(f+l)/(f-l),eF:-2*f*l/(f-l),eG:0,eH:0,eI:-1,eJ:0})}}),Wt=v(function(e,r){return(1&e>>r)===1?0:1}),S2=function(e){return $([tm({ab:1,ac:0,ai:!0}),pl({bz:ar,dd:im,dy:e,bO:am,dS:0,bX:ar,bY:ar}),hl])},C2=M(function(e,r,n){return mr(a(ne,function(t){var i=t<<4,o=z(Va,a(Wt,t,0),a(Wt,t,1),a(Wt,t,2),a(Wt,t,3));return h(Nr,e,L(r,o),S2(i))},a(tn,1,a(Pt,2,n)-1)))}),gt=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},ha=function(e){var r=e;return r},L2=dp,qu=function(e){var r=e;return gt(Zn(r))},z2={dm:fn,dT:rl,dU:vl,dW:Hi},Wi=function(e){var r=e;return r},P2=function(e){var r=Wi(ka(e)),n=Tr(Zn(e)),t=Tr(Kn(e)),i=Tr(Xn(e));return Ur({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dV,eD:t.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},M2=v(function(e,r){var n=r;return P2(a(rm,n,e))}),T2=function(e){return a(M2,z2,e)},k2=function(e){var r=e;return r.dN},D2=function(e){var r=e;return Xn(r)},V2=function(e){var r=e;return Kn(r)},F2=function(e){var r=k2(e.f0),n=Da({dm:Gu(r),dT:D2(r),dU:V2(r),dW:gt(qu(r))}),t=kt(e.a8),i=t,o=z(tc,n,1,J,$([i]));if(o.$===1)return D;var c=o.a,l=T2(r),u=a(Ne,.99,a(We,Mr(e.a3),rc(Kf(c)))),f=Qf(c),m=f.a,g=f.b,b=f.c,d=x2(h(Mf,m,g,b)),x=a(Ne,1.01,a(Qa,d,rc(Zf(c)))),_=a(y2,e.f0,{fM:e.fM,gv:x,hd:u}),S=L2(_).eJ,C=S?Tr(gt(qu(r))):ha(Gu(r)),w=function(){var me=e.cG;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var Te=me.a;return L(3,Te);case 4:var Te=me.a;return L(4,Te);default:return L(5,0)}}(),T=w.a,W=w.b,Z=e.cd,re=Z,te=a(fl,re,e.cK),ie=te,ee=Ur({eu:0,ev:C.io,ew:Fa(ie),ex:e.ff,ey:0,ez:C.is,eA:Aa(ie),eB:_2(d),eC:0,eD:C.dV,eE:Ia(ie),eF:T,eG:0,eH:S,eI:0,eJ:W}),q=lr(Of,ee,l,_,b2,i,{P:D,_:D,hI:D}),de=e.cl;switch(de.$){case 0:var pe=de.a;return mr($([h(Nr,q.P,L(pe,so),ra),h(Nr,q._,Ja,ra)]));case 1:var pe=de.a;return mr($([h(Nr,q.P,Ja,ra),$([Ou]),h(Nr,q.hI,pe.bF,Jf),$([Xf(0)]),h(Nr,q.P,L(pe,so),w2),h(Nr,q._,Ja,ra)]));default:var Me=de.a,Se=de.b;return mr($([h(Nr,q.P,L(Se,so),ra),$([Ou]),a(e2,q.hI,Me),h(C2,q.P,Se,Gn(Me)),h(Nr,q._,Ja,ra)]))}},A2=function(e){return a(Br,"width",k(e))},I2=v(function(e,r){var n=$([z_(1),k_(0),x_(!0),z(C_,0,0,0,0)]),t=function(){var T=e.cO;switch(T.$){case 0:return G(n,"0",1);case 1:return G(a(P,y_,n),"1",1);default:var W=T.a;return G(n,"0",W)}}(),i=t.a,o=t.b,c=t.c,l=e.a4,u=l.a,f=l.b,m=ju(f),g=a(gr,"height",k(m)+"px"),b=ju(u),d=b/m,x=a(Ma,function(T){return F2({fM:d,f0:e.f0,a3:e.a3,a8:T.a8,cd:T.cd,cl:T.cl,ff:c,cG:T.cG,cK:T.cK})},r),_=a(gr,"width",k(b)+"px"),S=e.a1,C=S,w=D_(C);return h(M_,"div",$([a(gr,"padding","0px"),_,g]),$([L(o,h(A_,i,$([A2(Ae(b*c)),P_(Ae(m*c)),_,g,a(gr,"display","block"),a(gr,"background-color",w)]),x))]))}),E2=function(e){return a(I2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},om=function(e){return e},Ju=om({io:.31271,is:.32902}),B2=v(function(e,r){var n=e,t=Tr(r.gm),i=t.io,o=t.is,c=t.dV,l=a(fl,r.c1,r.cT),u=l;return{b0:Ia(u),f3:n,cf:Aa(u),dv:0,cz:Fa(u),dK:1,io:-i,is:-o,dV:-c}}),R2=function(e){return e},j2=function(e){return R2(1.2*a(Pt,2,e))},ho=function(e){return e},N2={$:0},H2=N2,cm=function(e){return e},W2=v(function(e,r){var n=e,t=r;return xe(t,n)>0}),Yu=function(e){var r=e;return r},G2=function(e){e:for(;;){if(he(e.gZ,nn)&&he(e.g_,nn))return ir;if(a(W2,Mr(e.gZ),Mr(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:gt(e.fm)};e=r;continue e}else{var n=we(Yu(e.g_)/cn),t=we(Yu(e.gZ)/cn),i=Tr(e.fm),o=i.io,c=i.is,l=i.dV,u=a(fl,cm(1),e.cT),f=u;return{b0:t*Ia(f),f3:!1,cf:t*Aa(f),dv:n/t,cz:t*Fa(f),dK:3,io:o,is:c,dV:l}}}},Xu=function(e){return G2({cT:e.cT,gZ:e.c1,g_:nn,fm:e.fm})},U2=function(e){var r=e;return r},lm=function(e){var r=h(Rf,1667,25e3,U2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return om({io:n,is:t})},um=function(e){return e},O2=lm(um(12e3)),q2=lm(um(5600)),J2=function(e){return{$:2,a:e}},Y2=function(e){return J2(e)},X2=v(function(e,r){return{$:2,a:e,b:r}}),$m=function(e){return{$:0,a:e}},Gt=function(e){var r=e;return r},K2=function(e){var r=e;return r.f3},Z2=$m(Ja.a),Q2=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?L(a(P,t,o),c):L(o,a(P,t,c))});return h(Ze,n,L(D,D),r)}),ex=function(e){var r=e;return Ur({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dV,eD:r.b0,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},rx=Pe(function(e,r,n,t,i,o,c,l){var u=a(Q2,K2,$([Gt(e),Gt(r),Gt(n),Gt(t)])),f=u.a,m=u.b;if(f.b){var g=Y(f,m);if(g.b&&g.b.b&&g.b.b.b&&g.b.b.b.b&&!g.b.b.b.b.b){var b=g.a,d=g.b,x=d.a,_=d.b,S=_.a,C=_.b,w=C.a;return a(X2,a(ne,ex,f),{bF:a(wr,b,x),cm:a(wr,S,w),cn:a(wr,i,o),co:a(wr,c,l)})}else return Z2}else return $m({bF:a(wr,e,r),cm:a(wr,n,t),cn:a(wr,i,o),co:a(wr,c,l)})}),nx=M(function(e,r,n){return _t(rx,e,r,n,ir,ir,ir,ir,ir)}),ax=function(e){var r=a(B2,b_(e.hI),{cT:q2,gm:e.hZ,c1:ho(8e4)}),n=Xu({cT:O2,c1:ho(2e4),fm:e.fm}),t=Xu({cT:Ju,c1:ho(15e3),fm:gt(e.fm)}),i=h(nx,r,n,t);return E2({cO:Y2(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:j2(15),cl:i,cG:H2,cK:Ju})},vm=ae(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),tx=ae(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),fm=ae(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),mm=ae(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),ix=ae(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),ox=ae(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),cx=ae(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),bl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return z(cx,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return z(vm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return z(tx,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return z(fm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return z(ox,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return z(mm,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return z(ix,n,t,i,1);case 8:return e;case 9:return e;default:return e}},_l={$:0},lx=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,m=Ci(c(u)),g=a(Oe,m.eO,e),b=a(We,m.eL,r),d=a(Oe,m.eP,n),x=a(We,m.eM,t),_=a(Oe,m.eQ,i),S=a(We,m.eN,o),C=c,w=f;e=g,r=b,n=d,t=x,i=_,o=S,c=C,l=w;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),ux=M(function(e,r,n){var t=Ci(e(r));return _t(lx,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),bo=v(function(e,r){var n=e,t=r;return xe(t,n)<1}),sm=function(e){return a(bo,e.eL,e.eO)&&a(bo,e.eM,e.eP)&&a(bo,e.eN,e.eQ)?e:{eL:a(We,e.eO,e.eL),eM:a(We,e.eP,e.eM),eN:a(We,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},ht=function(e){var r=e;return r},et=function(e){var r=e;return r.io},rt=function(e){var r=e;return r.is},nt=function(e){var r=e;return r.dV},dm=function(e){var r=ht(e),n=r.a,t=r.b,i=r.c,o=et(n),c=rt(n),l=nt(n),u=et(t),f=rt(t),m=nt(t),g=et(i),b=rt(i),d=nt(i);return sm({eL:a(We,o,a(We,u,g)),eM:a(We,c,a(We,f,b)),eN:a(We,l,a(We,m,d)),eO:a(Oe,o,a(Oe,u,g)),eP:a(Oe,c,a(Oe,f,b)),eQ:a(Oe,l,a(Oe,m,d))})},pm=op,$r=function(e){return pm(Wi(e))},gm=function(e){var r=e;return r},Gi=function(e){return pm(gm(e))},$x=v(function(e,r){var n=e,t=r;return{io:t.is*n.dV-t.dV*n.is,is:t.dV*n.io-t.io*n.dV,dV:t.io*n.is-t.is*n.io}}),ic=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),vx={io:0,is:0,dV:0},fx=v(function(e,r){var n=e,t=r,i=a(Cr,we(t.io),a(Cr,we(t.is),we(t.dV)));if(i){var o=t.dV/i,c=t.is/i,l=t.io/i,u=va(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return vx}),mx=fx(cm(1)),hm=M(function(e,r,n){var t=a(ic,r,n),i=a(ic,e,r);return mx(a($x,t,i))}),sx=function(e){var r=ht(e),n=r.a,t=r.b,i=r.c,o=Gi(h(hm,n,t,i));return G({q:o,cx:$r(n)},{q:o,cx:$r(t)},{q:o,cx:$r(i)})},dx=v(function(e,r){return{$:2,a:e,b:r}}),bm=dx({d5:3,ei:0,eS:4}),px=function(e){if(e.b){var r=e.a,n=e.b,t=bm(a(ne,sx,e)),i=h(ux,dm,r,n);return z(vm,i,e,t,0)}else return _l},xr=M(function(e,r,n){return G(e,r,n)}),Qe=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),_m=function(){var e=Pr(1),r=Pr(1),n=Pr(1),t=a(Ne,-.5,e),i=a(Ne,-.5,r),o=a(Ne,-.5,n),c=h(Qe,o,i,t),l=a(Ne,.5,e),u=h(Qe,o,i,l),f=a(Ne,.5,r),m=h(Qe,o,f,t),g=h(Qe,o,f,l),b=a(Ne,.5,n),d=h(Qe,b,i,t),x=h(Qe,b,f,t),_=h(Qe,b,i,l),S=h(Qe,b,f,l);return bl(px($([h(xr,c,x,d),h(xr,c,m,x),h(xr,u,_,S),h(xr,u,S,g),h(xr,d,x,S),h(xr,d,S,_),h(xr,c,g,m),h(xr,c,u,g),h(xr,c,d,_),h(xr,c,_,u),h(xr,m,S,x),h(xr,m,g,S)])))}(),Ut={$:0},gx=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),hx=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),f=Gi(h(hm,u,l,c)),m={q:f,cx:$r(u)},g={q:f,cx:$r(l)},b={q:f,cx:$r(c)};return a(P,m,a(P,g,a(P,b,n)))}),xl=function(e){var r=e;return r.H},bx=ae(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var c=t.a;return X(h(e,i,o,c))}),oc=4294967295>>>32-ct,cc=as,_x=M(function(e,r,n){e:for(;;){var t=oc&r>>>e,i=a(cc,t,n);if(i.$){var f=i.a;return a(cc,oc&r,f)}else{var o=i.a,c=e-ct,l=r,u=o;e=c,r=l,n=u;continue e}}}),xx=function(e){return e>>>5<<5},wx=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||xe(e,n)>-1?J:xe(e,xx(n))>-1?X(a(cc,oc&e,o)):X(h(_x,t,e,i))}),wl=function(e){var r=e;return r.au},_o=v(function(e,r){return a(wx,e,wl(r))}),yx=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return z(bx,M(function(c,l,u){return G(c,l,u)}),a(_o,t,e),a(_o,i,e),a(_o,o,e))};return a(bn,r,xl(e))},Sx=M(function(e,r,n){e:for(;;){var t=a(Tc,br,e),i=t.a,o=t.b;if(xe(Fo(i),br)<0)return a(Z$,!0,{C:r,n,r:i});var c=o,l=a(P,Y$(i),r),u=n+1;e=c,r=l,n=u;continue e}}),yl=function(e){return e.b?h(Sx,e,D,0):q$},Cx=v(function(e,r){return!a(Ct,a(Lt,M0,e),r)}),Lx=function(e){var r=e.a;return r},xm=v(function(e,r){var n=Lx(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&xe(o,n)<0&&c>=0&&xe(c,n)<0&&l>=0&&xe(l,n)<0};return a(Cx,t,r)?{H:r,au:e}:{H:a(Mv,t,r),au:e}}),zx=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Dt=zx({d5:1,ei:3,eS:4}),ii=v(function(e,r){var n=ha(r),t=ha(e);return L(G(t.io,t.is,t.dV),G(n.io,n.is,n.dV))}),Ku=h(Tt,0,0,0),xo=kr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Ai,a(ii,e,r),i);if(f.$){var g={q:Ku,cx:$r(r)},b={q:Ku,cx:$r(e)},d=u+1,x=u;return G(a(P,G(n,x,d),a(P,G(n,d,t),c)),a(P,g,a(P,b,l)),u+2)}else{var m=f.a;return G(a(P,G(n,m,t),c),l,u)}}),Px=Je(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,m=e(u),g=e(l),b=e(c),d=t+2,x=t+1,_=t,S=e,C=r,w=f,T=t+3,W=lr(xo,m,b,d,_,r,lr(xo,g,m,x,d,r,lr(xo,b,g,_,x,r,i)));e=S,r=C,n=w,t=T,i=W;continue e}else{var Z=i,re=Z.a,te=Z.b;return L(re,fr(te))}}),Mx=Je(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,m=e(u),g=e(l),b=e(c),d=n+2,x=n+1,_=n,S=h(fa,a(ii,b,m),d,h(fa,a(ii,m,g),x,h(fa,a(ii,g,b),_,i))),C=a(P,G(_,x,d),t),w=e,T=f,W=n+3,Z=C,re=S;e=w,r=T,n=W,t=Z,i=re;continue e}else return G(t,i,n)}),An=M(function(e,r,n){var t=yx(n),i=h(Ze,hx(r),D,t),o=V(Mx,r,t,0,D,Ic),c=o.a,l=o.b,u=o.c,f=V(Px,r,l,t,0,G(c,D,u)),m=f.a,g=f.b,b=dn(g)?i:Y(i,g);return h(gx,e,a(xm,yl(b),m),a(Dt,b,m))}),lc=function(e){return{H:a(ne,function(r){return G(3*r,3*r+1,3*r+2)},a(tn,0,Gn(e)-1)),au:yl(mr(a(ne,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},wm=function(e){switch(e.$){case 0:return Ut;case 1:var t=e.a,r=e.b,n=a(ne,ht,r);return h(An,t,Er,lc(n));case 2:var t=e.a,r=e.b,n=a(ne,ht,r);return h(An,t,Er,lc(n));case 3:var t=e.a,i=e.b;return h(An,t,Er,i);case 4:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 5:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 6:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 7:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 8:return Ut;case 9:return Ut;default:return Ut}},Zu=wm(_m),ym={$:0},U=ym,Ke=v(function(e,r){return{$:1,a:e,b:r}}),Tx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},kx=1029,Dx=function(e){return{$:5,a:e}},Sm=function(e){var r=e;return Dx(r)},Vx=Sm(kx),Fx=1028,Ax=Sm(Fx),vr=M(function(e,r,n){return r===1?e?a(P,Vx,n):a(P,Ax,n):n}),Cm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},wo=ae(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,g){return V(Fe,h(vr,l,t,g),Cm,Tx,n,{b7:e,c,d:o,e:f,f:i,g:u})}))}),Sl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},Lm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Kr=ae(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,g){return V(Fe,h(vr,l,t,g),Lm,Sl,n,{aO:e,c,d:o,e:f,f:i,g:u})}))}),zm=v(function(e,r){return{$:3,a:e,b:r}}),Ix={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Pm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ex=ae(function(e,r,n,t){return a(zm,n,Pe(function(i,o,c,l,u,f,m,g){return V(Fe,g,Pm,Ix,t,{aO:e,c,d:o,cw:r,e:f,f:i,g:u})}))}),Cl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Vt=function(e){var r=e;return r},Ui=cp,Zr=Je(function(e,r,n,t,i){return a(Ke,n,Pe(function(o,c,l,u,f,m,g,b){return V(Fe,h(vr,u,i,b),Lm,Cl,t,{a6:a(Ui,Vt(r),e),c:l,d:c,e:m,f:o,g:f})}))}),Bx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Rx=Je(function(e,r,n,t,i){return a(zm,t,Pe(function(o,c,l,u,f,m,g,b){return V(Fe,b,Pm,Bx,i,{a6:a(Ui,Vt(r),e),c:l,d:c,cw:n,e:m,f:o,g:f})}))}),Mm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},Tm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ot=ae(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,g){var b=m.a,d=m.b;return V(Fe,h(vr,l,t,g),Tm,Mm,n,{U:d,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,de:e,c,d:o,e:f,f:i,g:u})}))}),km={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Dm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},jx=kr(function(e,r,n,t,i,o){return a(Ke,t,Pe(function(c,l,u,f,m,g,b,d){var x=b.a,_=b.b;return V(Fe,h(vr,f,o,d),Dm,km,i,{U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,df:e,c:u,d:l,bg:r,e:g,f:c,bm:n,g:m})}))}),Vm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Nx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return a(Ke,u,Pe(function(g,b,d,x,_,S,C,w){var T=C.a,W=C.b;return V(Fe,h(vr,x,m,w),Dm,Vm,f,{cS:e,cV:r,cW:o,cX:t,U:W,bF:T.bF,cm:T.cm,cn:T.cn,co:T.co,di:i,c:d,d:b,bg:c,e:S,dC:n,f:g,bm:l,g:_})}))}}}}}}}}}}},Fm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},qt=kr(function(e,r,n,t,i,o){return a(Ke,t,Pe(function(c,l,u,f,m,g,b,d){var x=b.a,_=b.b;return V(Fe,h(vr,f,o,d),Tm,Fm,i,{cR:e,U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,dh:n,c:u,d:l,e:g,dB:r,f:c,g:m})}))}),Hx=function(e){return{$:0,a:e}},Qu=v(function(e,r){return{$:1,a:e,b:r}}),at=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),Wx=function(e){return z(Va,Fa(e),Aa(e),Ia(e),1)},Ll=z(Va,0,0,0,0),oi=v(function(e,r){if(r.$){var t=r.a.E;return L(t,Ll)}else{var n=r.a;return L(e,Wx(n))}}),Am=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(Qu,L(i,Ll),a(at,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Qu,a(oi,i,e),a(at,i,r))}else{var t=n.a.a;return n.b.a,Hx(t)}}),Gx=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jt=ae(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Ux=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ox=function(e){return a(pr,e,1)},uc=a(pr,0,0),na=v(function(e,r){if(r.$){var t=r.a.E;return L(t,uc)}else{var n=r.a;return L(e,Ox(n))}}),Im=ae(function(e,r,n,t){var i=z(Ux,e,r,n,t);if(i.a.$){var u=i.a.a.E;return z(Jt,L(u,Ll),a(na,u,r),a(na,u,n),a(at,u,t))}else if(i.b.$){var u=i.b.a.E;return z(Jt,a(oi,u,e),L(u,uc),a(na,u,n),a(at,u,t))}else if(i.c.$){var u=i.c.a.E;return z(Jt,a(oi,u,e),a(na,u,r),L(u,uc),a(at,u,t))}else if(i.d.$){var u=i.d.a.E;return z(Jt,a(oi,u,e),a(na,u,r),a(na,u,n),L(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(Gx,o,c,l)}}),qx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},yo=Je(function(e,r,n,t,i){return a(Ke,n,Pe(function(o,c,l,u,f,m,g,b){return V(Fe,h(vr,u,i,b),Cm,qx,t,{cP:Vt(r),b7:e,c:l,d:c,e:m,f:o,g:f})}))}),Em={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Jx=ae(function(e,r,n,t){return a(Ke,r,Pe(function(i,o,c,l,u,f,m,g){var b=m.a,d=m.b;return V(Fe,h(vr,l,t,g),Em,km,n,{U:d,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,df:e,c,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),Yx=fc(function(e,r,n,t,i,o,c,l,u){return a(Ke,c,Pe(function(f,m,g,b,d,x,_,S){var C=_.a,w=_.b;return V(Fe,h(vr,b,u,S),Em,Vm,l,{cS:e,cV:r,cW:o,cX:t,U:w,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,di:i,c:g,d:m,bg:e,e:x,dC:n,f,bm:0,g:d})}))}),bt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Xx=function(e){var r=e;return h(bt,r.eO,r.eL,.5)},Kx=function(e){var r=e;return h(bt,r.eP,r.eM,.5)},Zx=function(e){var r=e;return h(bt,r.eQ,r.eN,.5)},Qx=function(e){return h(Qe,Xx(e),Kx(e),Zx(e))},$e=function(e){var r=Qf(e),n=r.a,t=r.b,i=r.c;return{f4:Wi(Qx(e)),gD:n/2,gE:t/2,gF:i/2}},zl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return z(wo,l,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return z(wo,l,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return z(wo,l,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var n=e.b.a;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 8:var i=r.a,c=r.c;return z(Kr,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return z(Kr,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return z(Ex,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,f=e.c;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return V(yo,l,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(yo,l,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(yo,l,f,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return V(Zr,u,f,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return V(Zr,u,f,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return V(Zr,u,f,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return V(Zr,u,f,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return V(Zr,u,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(Zr,u,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(Zr,u,f,$e(i),c,t);case 8:var i=r.a,c=r.c;return V(Zr,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return V(Zr,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return V(Rx,u,f,o,$e(i),c)}}case 2:e.a;var m=e.b,re=e.c,g=a(Am,m,re);if(g.$){var x=g.a,_=x.a;x.b;var S=g.b,C=S.a,w=S.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,d=r.d;return z(Jx,_,$e(i),c,d);case 7:var i=r.a,c=r.c,d=r.d;return lr(jx,_,C,w,$e(i),c,d);case 8:return U;case 9:return U;default:return U}}else{var b=g.a;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,d=r.d;return z(Ot,b,$e(i),c,d);case 3:return U;case 4:var i=r.a,c=r.c,d=r.d;return z(Ot,b,$e(i),c,d);case 5:return U;case 6:var i=r.a,c=r.c,d=r.d;return z(Ot,b,$e(i),c,d);case 7:var i=r.a,c=r.c,d=r.d;return z(Ot,b,$e(i),c,d);case 8:return U;case 9:return U;default:return U}}default:e.a;var T=e.b,W=e.c,Z=e.d,re=e.e,te=z(Im,T,W,Z,re);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,A=te.c,I=A.a,E=A.b,B=te.d,C=B.a,w=B.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return Zm(Yx,pe,Me,me,Te,I,E,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return Nx(pe)(Me)(me)(Te)(I)(E)(C)(w)($e(i))(c)(t);case 8:return U;case 9:return U;default:return U}}else{var ie=te.a,ee=te.b,q=te.c;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,t=r.d;return lr(qt,ie,ee,q,$e(i),c,t);case 3:return U;case 4:var i=r.a,c=r.c,t=r.d;return lr(qt,ie,ee,q,$e(i),c,t);case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return lr(qt,ie,ee,q,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return lr(qt,ie,ee,q,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}}}),So=function(e){var r=e;return r.io},Co=function(e){var r=e;return r.is},Lo=function(e){var r=e;return r.dV},ew=function(e){var r=e,n=Lo(r.dW),t=Co(r.dW),i=So(r.dW),o=Lo(r.dU),c=Co(r.dU),l=So(r.dU),u=Lo(r.dT),f=Co(r.dT),m=So(r.dT);return m*c*n+f*o*i+u*l*t-u*c*i-f*l*n-m*o*t>0},rw=function(e){var r=Wi(ka(e)),n=Tr(Zn(e)),t=Tr(Kn(e)),i=Tr(Xn(e));return{ek:ew(e),t:i.io,u:i.is,v:i.dV,w:t.io,x:t.is,y:t.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cC:1}},ia=v(function(e,r){return{$:5,a:e,b:r}}),Bm=v(function(e,r){var n=r;switch(n.$){case 0:return U;case 5:var t=n.a,i=n.b,o=a(Uf,t,e);return a(ia,o,i);case 1:return a(ia,e,n);case 3:return a(ia,e,n);case 2:return a(ia,e,n);default:return a(ia,e,n)}}),Rm=v(function(e,r){return a(Bm,rw(e),r)}),Oi=function(e){return{$:2,a:e}},nw=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dV:i*o.dV},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),aw=$p,tw=up,e$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var m=e.a,g=e.b,b=e.c,d=tw(t),x=d.io,_=d.is,S=d.dV,C=d.ft,w=aw({ft:C,io:x*m,is:_*g,dV:S*b});return _t(r,n,w,i,o,c,l,u,f)}}}}}}}}}},$c=v(function(e,r){switch(r.$){case 0:return ym;case 5:var n=r.a,t=r.b;return a(ia,n,a($c,e,t));case 1:var i=r.a,o=r.b;return a(Ke,a(nw,e,i),a(e$,e,o));case 3:return r;case 2:var o=r.a;return Oi(a(e$,e,o));default:var c=r.a;return nm(a(ne,$c(e),c))}}),Pl=v(function(e,r){var n=r;return a($c,e,n)}),Ml={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},jm=7683,Nm=7682,iw=h(dl,{dd:0,dy:0,dS:15},{bz:ar,bO:La,bX:ar,bY:jm},{bz:ar,bO:La,bX:ar,bY:Nm}),ow=h(dl,{dd:0,dy:0,dS:15},{bz:ar,bO:La,bX:ar,bY:Nm},{bz:ar,bO:La,bX:ar,bY:jm}),Tl=v(function(e,r){return e?a(P,ow,r):a(P,iw,r)}),cw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},lw=function(e){if(e.$){var r=e.c;return X(Pe(function(n,t,i,o,c,l,u,f){return V(Fe,a(Tl,o,f),cw,Ml,r,{c:i,d:t,e:l,f:n,cD:u,g:c})}))}else return J},Li=function(e){var r=lw(e);if(r.$)return U;var n=r.a;return Oi(n)},uw=ae(function(e,r,n,t){var i=a(zl,n,_m),o=function(){var m=L(e,r);return m.a?m.b?kt($([i,Li(Zu)])):i:m.b?Li(Zu):U}(),c=il(t),l=c.a,u=c.b,f=c.c;return a(Rm,tl(t),a(Pl,G(l,u,f),o))}),$w=v(function(e,r){return z(uw,!0,!0,e,r)}),Hm=v(function(e,r){return{$:0,a:e,b:r}}),vw=function(e){var r=Uc(e),n=r.hu,t=r.gA,i=r.fS;return h(Tt,n,t,i)},fw=function(e){return a(Hm,0,nc(vw(e)))},mw=function(e){var r=e;return r.m},tt=function(e){var r=e;return Sa(r)},sw=v(function(e,r){var n=r;return n/e}),r$=function(e){var r=e;return{io:Sa(r),is:Ca(r)}},dw=v(function(e,r){var n=e.cx,t=e.q;return a(P,{q:Gi(t),cx:$r(n)},r)}),pw=Mi(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=Ia(l.cx),m=Aa(l.cx),g=Fa(l.cx),b=a(sa,e,g),d=a(Cr,r,g),x=a(sa,n,m),_=a(Cr,t,m),S=a(sa,i,f),C=a(Cr,o,f),w=u;e=b,r=d,n=x,t=_,i=S,o=C,c=w;continue e}else return sm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),Wm=v(function(e,r){var n=Ia(e.cx),t=Aa(e.cx),i=Fa(e.cx);return mc(pw,i,i,t,t,n,n,r)}),gw=function(e){var r=h(R$,dw,D,wl(e));if(r.b){var n=r.a,t=r.b,i=a(Dt,r,xl(e)),o=a(Wm,n,t);return z(fm,o,e,i,0)}else return _l},hw=Wn({io:0,is:0,dV:-1}),n$=v(function(e,r){var n=e,t=r,i=n.dU,o=i,c=n.dT,l=c;return{io:t.io*l.io+t.is*o.io,is:t.io*l.is+t.is*o.is,dV:t.io*l.dV+t.is*o.dV}}),zi=function(e){var r=e;return Ca(r)},Ya=function(e){var r=e;return r},vc=function(e){return Cn(2*cn*e)},a$=Af({dm:fn,dT:rl,dU:vl}),Gm=function(){var e=72,r=a(sw,e,vc(1)),n=Pr(1),t=Ya(If),i=Ya(hw),o=Pr(1),c=a(Ne,.5,o),l=h(Qe,nn,nn,c),u=a(Ne,-.5,o),f=h(Qe,nn,nn,u),m=function(d){var x=a(Ne,d,r),_=Ya(a(n$,a$,r$(x))),S=a(Ne,tt(x),n),C=a(Ne,zi(x),n),w=h(Qe,S,C,c),T=h(Qe,S,C,u),W=a(xi,e,d+1),Z=a(Ne,W,r),re=Ya(a(n$,a$,r$(Z))),te=a(Ne,tt(Z),n),ie=a(Ne,zi(Z),n),ee=h(Qe,te,ie,u),q=h(Qe,te,ie,c);return $([G({q:i,cx:f},{q:i,cx:ee},{q:i,cx:T}),G({q:_,cx:T},{q:re,cx:ee},{q:re,cx:q}),G({q:_,cx:T},{q:re,cx:q},{q:_,cx:w}),G({q:t,cx:l},{q:t,cx:w},{q:t,cx:q})])},g=a(ne,m,a(tn,0,e-1)),b=lc(mr(g));return bl(gw(b))}(),t$=wm(Gm),bw=function(e){var r=e;return r.dm},_w=function(e){var r=e,n=we(r.dV),t=we(r.is),i=we(r.io);if(xe(i,t)<1)if(xe(i,n)<1){var o=va(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=va(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(xe(t,n)<1){var o=va(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=va(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},xw=function(e){var r=_w(e),n=r,t=n,i=e,o=i,c={io:o.is*t.dV-o.dV*t.is,is:o.dV*t.io-o.io*t.dV,dV:o.io*t.is-o.is*t.io};return L(r,c)},ww=function(e){var r=Vf(e),n=xw(r),t=n.a,i=n.b;return Da({dm:bw(e),dT:t,dU:i,dW:r})},yw=function(e){var r=e;return r.g5},Sw=function(e){var r=e;return r.hs},Cw=ae(function(e,r,n,t){var i=ww(mw(t)),o=a(zl,n,Gm),c=function(){var g=L(e,r);return g.a?g.b?kt($([o,Li(t$)])):o:g.b?Li(t$):U}(),l=Sw(t),u=l,f=yw(t),m=f;return a(Rm,i,a(Pl,G(u,u,m),c))}),Lw=v(function(e,r){return z(Cw,!0,!0,e,r)}),i$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},o$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Xa=function(e){var r=ht(e),n=r.a,t=r.b,i=r.c,o=ha(n),c=ha(t),l=ha(i);return Ur({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},Yt=bm($([G({dJ:0},{dJ:1},{dJ:2})])),zw=v(function(e,r){var n=dm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var i=e.b.a;return a(Ke,t,Pe(function(w,T,W,Z,re,te,ie,ee){return V(Fe,h(vr,Z,0,ee),i$,Sl,Yt,{aO:i,c:W,d:T,e:te,f:w,bU:Xa(r),g:re})}));case 1:if(e.b.$)return e.a,U;var o=e.b.a,c=e.c;return a(Ke,t,Pe(function(w,T,W,Z,re,te,ie,ee){return V(Fe,h(vr,Z,0,ee),i$,Cl,Yt,{a6:a(Ui,Vt(c),o),c:W,d:T,e:te,f:w,bU:Xa(r),g:re})}));case 2:e.a;var l=e.b,d=e.c,u=a(Am,l,d);if(u.$)return U;var f=u.a;return a(Ke,t,Pe(function(w,T,W,Z,re,te,ie,ee){var q=ie.a,de=ie.b;return V(Fe,h(vr,Z,0,ee),o$,Mm,Yt,{U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,de:f,c:W,d:T,e:te,f:w,bU:Xa(r),g:re})}));default:e.a;var m=e.b,g=e.c,b=e.d,d=e.e,x=z(Im,m,g,b,d);if(x.$)return U;var _=x.a,S=x.b,C=x.c;return a(Ke,t,Pe(function(w,T,W,Z,re,te,ie,ee){var q=ie.a,de=ie.b;return V(Fe,h(vr,Z,0,ee),o$,Fm,Yt,{cR:_,U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dh:C,c:W,d:T,e:te,dB:S,f:w,bU:Xa(r),g:re})}))}}),Pw=function(){var e=$([{bl:a(pr,0,1)},{bl:a(pr,1,1)},{bl:a(pr,2,1)},{bl:a(pr,0,-1)},{bl:a(pr,1,-1)},{bl:a(pr,2,-1)}]),r=$([G(0,1,2),G(3,5,4),G(3,4,1),G(3,1,0),G(4,5,2),G(4,2,1),G(5,3,0),G(5,0,2)]);return a(Dt,e,r)}(),Mw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},c$=function(e){return Oi(Pe(function(r,n,t,i,o,c,l,u){return V(Fe,a(Tl,i,u),Mw,Ml,Pw,{c:t,d:n,e:c,f:r,cD:l,bU:Xa(e),g:o})}))},Tw=ae(function(e,r,n,t){var i=a(zw,n,t),o=L(e,r);return o.a?o.b?kt($([i,c$(t)])):i:o.b?c$(t):U}),kw=v(function(e,r){return z(Tw,!0,!0,e,r)}),Dw=v(function(e,r){var n=nt(r),t=nt(e),i=rt(r),o=rt(e),c=et(r),l=et(e);return{eL:a(We,l,c),eM:a(We,o,i),eN:a(We,t,n),eO:a(Oe,l,c),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),Vw=function(e){var r=ol(e),n=r.a,t=r.b;return a(Dw,n,t)},l$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Fw=v(function(e,r){return{$:1,a:e,b:r}}),Aw=Fw({d5:2,ei:0,eS:1}),u$=Aw($([L({es:0},{es:1})])),Iw=v(function(e,r){var n=Vw(r),t=$e(n),i=ol(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var l=e.b.a;return a(Ke,t,Pe(function(f,m,g,b,d,x,_,S){return V(Fe,S,l$,Sl,u$,{aO:l,eq:$r(c),er:$r(o),c:g,d:m,e:x,f,g:d})}));case 1:if(e.b.$)return U;var l=e.b.a,u=e.c;return a(Ke,t,Pe(function(m,g,b,d,x,_,S,C){return V(Fe,C,l$,Cl,u$,{a6:a(Ui,Vt(u),l),eq:$r(c),er:$r(o),c:b,d:g,e:_,f:m,g:x})}));case 2:return U;default:return U}}),Ew=v(function(e,r){return a(Iw,e,r)}),$$=v(function(e,r){var n=e,t=r;return n/t}),Bw=Je(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(P,o,i);if(he(r,e))return c;var l=e,u=r-1,f=n,m=t,g=c;e=l,r=u,n=f,t=m,i=g;continue e}}),v$=v(function(e,r){return e<1?D:V(Bw,0,e,e,r,D)}),Rw=v(function(e,r){var n=e.cx,t=e.q,i=e.O,o=i,c=o.a,l=o.b;return a(P,{q:Gi(t),cx:$r(n),O:a(pr,c,l)},r)}),jw=function(e){var r=h(R$,Rw,D,wl(e));if(r.b){var n=r.a,t=r.b,i=a(Dt,r,xl(e)),o=a(Wm,n,t);return z(mm,o,e,i,0)}else return _l},Um=v(function(e,r){var n=e,t=r,i=Sa(t);return{io:i*Sa(n),is:i*Ca(n),dV:Ca(t)}}),Nw=function(){var e=Pr(1),r=72,n=a(tn,0,r-1),t=a(v$,r,a(bt,nn,vc(1))),i=ot(r/2),o=a(tn,0,i-1),c=a(v$,i,a(bt,qa(90),qa(-90))),l=yl(mr(a(ne,function(m){return a(ne,function(g){return{q:Ya(a(Um,m,g)),cx:h(Qe,a(Ne,tt(g)*tt(m),e),a(Ne,tt(g)*zi(m),e),a(Ne,zi(g),e)),O:L(a($$,m,vc(1)),a($$,a(Qa,qa(90),g),qa(180)))}},c)},t))),u=v(function(m,g){return m*(i+1)+g}),f=mr(a(ne,function(m){return mr(a(ne,function(g){var b=a(u,m+1,g),d=a(u,m,g),x=a(u,m+1,g+1),_=a(u,m,g+1);return $([G(_,x,b),G(_,b,d)])},o))},n));return bl(jw(a(xm,l,f)))}(),Pi=72,Xt=2*Pi,Hw=v(function(e,r){e:for(;;){var n=Xt+1,t=a(xi,Xt,2*e+3),i=a(xi,Xt,2*e+2),o=2*e+1,c=2*e,l=Xt,u=a(P,G(l,c,i),a(P,G(c,t,i),a(P,G(c,o,t),a(P,G(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Ww=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Gw=v(function(e,r){e:for(;;){var n=h(Ww,0,2*cn,e/Pi),t={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=a(P,t,a(P,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Uw=function(){var e=a(Gw,Pi-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=a(Hw,Pi-1,D);return a(Dt,e,r)}(),Ow={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},f$=function(e){return Oi(Pe(function(r,n,t,i,o,c,l,u){return V(Fe,a(Tl,!0,u),Ow,Ml,Uw,{aO:h(Tt,0,0,1),c:t,d:n,e:c,f:r,cD:l,g:o})}))},qw=function(e){var r=gm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cC:1}},Jw=v(function(e,r){return a(Bm,qw(e),r)}),Yw=ae(function(e,r,n,t){var i=a(zl,n,Nw),o=function(){var u=L(e,r);return u.a?u.b?kt($([i,f$()])):i:u.b?f$():U}(),c=ll(t),l=c;return a(Jw,a(ic,fn,cl(t)),a(Pl,G(l,l,l),o))}),Xw=v(function(e,r){return z(Yw,!0,!0,e,r)}),Kw=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Zw=Je(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Qw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Hm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(Kw,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return h(Bf,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return V(Zw,n,t,i,o,c)}},ey=Qw,Om=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a($w,i,r)]);case 1:var i=e.a,n=e.b;return $([a(kw,i,n)]);case 3:var i=e.a,t=e.b;return $([a(Xw,ey(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Lw,i,o)]);case 4:var c=e.a,l=e.b;return $([a(Ew,fw(c),l)]);default:var u=e.a;return a(Ma,Om,u)}},ry=function(e){return a(Ma,Om,e)},ny=v(function(e,r){return ax({a1:g_(e.fO),f0:e.f0,a3:h_(.5),cY:e.cY,a4:L(Ru(Ae(e.dD.im)),Ru(Ae(e.dD.gH))),a8:ry(r),hI:!0,hZ:a(Um,Cn(e.hY),Cn(e.h_)),fm:Hi})}),ay=v(function(e,r){return a(ny,{fO:h(s_,46,46,46),f0:U1(e),cY:e.cY,dD:e.dD,hY:-Nn(135),h_:-Nn(45)},$([p_(e),m_(e),S1]))}),ty=z(m1,ay,b1,h1,s1);const iy={Main:{init:ty(a(Q,function(e){return or({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return or({cU:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(g){return or({fJ:g,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",ze))},a(K,"control",ze))},a(K,"down",ze))},a(K,"downs",pi(_a)))},a(K,"left",ze))},a(K,"pressedKeys",pi(_a)))},a(K,"right",ze))},a(K,"shift",ze))},a(K,"up",ze))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return or({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",ze))},a(K,"isDown",ze))},a(K,"move",ze))},a(K,"rightDown",ze))},a(K,"rightUp",ze))},a(K,"up",ze))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return or({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return or({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},oy=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),t=d=>["ShiftLeft","ShiftRight"].includes(d.code),i=d=>d.code=="ArrowLeft",o=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,f=d=>d.button==2;function m(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function g(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(oe.keyboard.downs.push(d.code),oe.keyboard.pressedKeys.push(d.code),r(d)&&(oe.keyboard.control=!0),n(d)&&(oe.keyboard.alt=!0),t(d)&&(console.log("yo"),oe.keyboard.shift=!0),i(d)&&(oe.keyboard.left=!0),o(d)&&(oe.keyboard.right=!0),c(d)&&(oe.keyboard.up=!0),l(d)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",d=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(x=>x!=d.code),r(d)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(d)&&(oe.keyboard.alt=!1),t(d)&&(oe.keyboard.shift=!1),i(d)&&(oe.keyboard.left=!1),o(d)&&(oe.keyboard.right=!1),c(d)&&(oe.keyboard.up=!1),l(d)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{oe.pointer.x=-.5*oe.screen.width+d.pageX,oe.pointer.y=.5*oe.screen.height-d.pageY,u(d)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(d)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+d.pageX,oe.pointer.y=.5*oe.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(d)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(d)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{oe.wheel.deltaX=d.deltaX,oe.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{m(oe)}),window.addEventListener("focus",d=>{m(oe)}),window.addEventListener("visibilitychange",d=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(d){const x=d/1e3,_=x-oe.clock;_<.009||(oe.dt=_,oe.clock=x,e.ports.tick.send(oe),g(oe)),window.requestAnimationFrame(b)}},cy=iy.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});oy(cy);
