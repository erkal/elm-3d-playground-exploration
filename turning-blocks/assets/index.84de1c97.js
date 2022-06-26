const Qm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Qm();function Mn(e,r,n){return n.a=e,n.f=r,n}function v(e){return Mn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return Mn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ee(e){return Mn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Ye(e){return Mn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function xr(e){return Mn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function Di(e){return Mn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function Pe(e){return Mn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,t,i,o,l,c,u)}}}}}}}})}function _l(e){return Mn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return e(r,n,t,i,o,l,c,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function A(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function tr(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function wl(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function bt(e,r,n,t,i,o,l,c,u){return e.a===8?e.f(r,n,t,i,o,l,c,u):e(r)(n)(t)(i)(o)(l)(c)(u)}function es(e,r,n,t,i,o,l,c,u,f){return e.a===9?e.f(r,n,t,i,o,l,c,u,f):e(r)(n)(t)(i)(o)(l)(c)(u)(f)}var rs=[];function ns(e){return e.length}var as=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),ts=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,z(n,r)}),is=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var os=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+ls()),r});function ls(e){return"<internals>"}function Ia(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=Bo(e,r,0,t);i&&(n=t.pop());i=Bo(n.a,n.b,0,t));return i}function Bo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ia(5),!1;if(n>100)return t.push(z(e,r)),!0;e.$<0&&(e=tu(e),r=tu(r));for(var i in e)if(!Bo(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function be(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=be(e.a,r.a))||(n=be(e.b,r.b))?n:be(e.c,r.c);for(;e.b&&r.b&&!(n=be(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return be(e,r)<0});v(function(e,r){return be(e,r)<1});v(function(e,r){return be(e,r)>0});v(function(e,r){return be(e,r)>=0});var cs=v(function(e,r){var n=be(e,r);return n<0?X$:n?e0:Y$}),_t=0;function z(e,r){return{a:e,b:r}}function O(e,r,n){return{a:e,b:r,c:n}}function Re(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Zr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Zr(e.a,r);return n}var D={$:0};function Zr(e,r){return{$:1,a:e,b:r}}var us=v(Zr);function $(e){for(var r=D,n=e.length;n--;)r=Zr(e[n],r);return r}function Ai(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var $s=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ee(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Ye(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return $(o)});xr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(A(e,r.a,n.a,t.a,i.a,o.a));return $(l)});v(function(e,r){return $(Ai(r).sort(function(n,t){return be(e(n),e(t))}))});v(function(e,r){return $(Ai(r).sort(function(n,t){var i=a(e,n,t);return i===Y$?0:i===X$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var vs=v(Math.pow);v(function(e,r){return r%e});var fs=v(function(e,r){var n=r%e;return e===0?Ia(11):n>0&&e<0||n<0&&e>0?n+e:n}),ms=Math.PI,ss=Math.cos,ds=Math.sin,ps=Math.tan;v(Math.atan2);function gs(e){return e}function hs(e){return e===1/0||e===-1/0}var bs=Math.ceil,_s=Math.floor,ws=Math.round,ys=Math.sqrt,Gc=Math.log,xs=isNaN;function Ss(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Cs=v(function(e,r){return e+r});function zs(e){var r=e.charCodeAt(0);return isNaN(r)?J:Y(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}v(function(e,r){return e+r});function Ls(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Ps(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Ms=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ts=v(function(e,r){return r.split(e)}),ks=v(function(e,r){return r.join(e)}),Ds=M(function(e,r,n){return n.slice(e,r)});function As(e){return $(e.trim().split(/\s+/g))}function Fs(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Is=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Es=v(function(e,r){return r.indexOf(e)>-1}),Bs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Vs=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function y$(e){return e+""}function Rs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:Y(n==45?-r:r)}function Os(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?Y(r):J}function Ns(e){return Ai(e).join("")}function js(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Hs(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Gs(e){return{$:0,a:e}}function Ws(e){return{$:1,a:e}}function yl(e){return{$:2,b:e}}var Us=yl(function(e){return typeof e=="boolean"?Ge(e):Hr("a BOOL",e)}),Js=yl(function(e){return typeof e=="number"?Ge(e):Hr("a FLOAT",e)}),qs=yl(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Hr("a STRING",e)});function Ys(e){return{$:3,b:e}}var Xs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Tn(e,r){return{$:9,f:e,g:r}}var Zs=v(function(e,r){return{$:10,b:r,h:e}}),Ks=v(function(e,r){return Tn(e,[r])}),Qs=M(function(e,r,n){return Tn(e,[r,n])});ee(function(e,r,n,t){return Tn(e,[r,n,t])});Ye(function(e,r,n,t,i){return Tn(e,[r,n,t,i])});xr(function(e,r,n,t,i,o){return Tn(e,[r,n,t,i,o])});Di(function(e,r,n,t,i,o,l){return Tn(e,[r,n,t,i,o,l])});Pe(function(e,r,n,t,i,o,l,c){return Tn(e,[r,n,t,i,o,l,c])});_l(function(e,r,n,t,i,o,l,c,u){return Tn(e,[r,n,t,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return zr(e,n)}catch(t){return ir(a(Il,"This is not valid JSON! "+t.message,r))}});var x$=v(function(e,r){return zr(e,r)});function zr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Hr("null",r);case 3:return Vt(r)?Wc(e.b,r,$):Hr("a LIST",r);case 4:return Vt(r)?Wc(e.b,r,ed):Hr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Hr("an OBJECT with a field named `"+n+"`",r);var f=zr(e.b,r[n]);return Ir(f)?f:ir(a(iu,n,f.a));case 7:var t=e.e;if(!Vt(r))return Hr("an ARRAY",r);if(t>=r.length)return Hr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=zr(e.b,r[t]);return Ir(f)?f:ir(a(Z$,t,f.a));case 8:if(typeof r!="object"||r===null||Vt(r))return Hr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=zr(e.b,r[o]);if(!Ir(f))return ir(a(iu,o,f.a));i=Zr(z(o,f.a),i)}return Ge(mr(i));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var f=zr(c[u],r);if(!Ir(f))return f;l=l(f.a)}return Ge(l);case 10:var f=zr(e.b,r);return Ir(f)?zr(e.h(f.a),r):f;case 11:for(var m=D,d=e.g;d.b;d=d.b){var f=zr(d.a,r);if(Ir(f))return f;m=Zr(f.a,m)}return ir(r0(mr(m)));case 1:return ir(a(Il,e.a,r));case 0:return Ge(e.a)}}function Wc(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=zr(e,r[o]);if(!Ir(l))return ir(a(Z$,o,l.a));i[o]=l.a}return Ge(n(i))}function Vt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function ed(e){return a(p0,e.length,function(r){return e[r]})}function Hr(e,r){return ir(a(Il,"Expecting "+e,r))}function pa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return pa(e.b,r.b);case 6:return e.d===r.d&&pa(e.b,r.b);case 7:return e.e===r.e&&pa(e.b,r.b);case 9:return e.f===r.f&&Uc(e.g,r.g);case 10:return e.h===r.h&&pa(e.b,r.b);case 11:return Uc(e.g,r.g)}}function Uc(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!pa(e[t],r[t]))return!1;return!0}var rd=v(function(e,r){return JSON.stringify(r,null,e)+""});function S$(e){return e}function nd(){return[]}function ad(){return{}}var td=M(function(e,r,n){return n[e]=r,n});function id(e){return v(function(r,n){return n.push(e(r)),n})}function ra(e){return{$:0,a:e}}function od(e){return{$:1,a:e}}function mn(e){return{$:2,b:e,c:null}}var Vo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ld(e){return{$:5,b:e}}var cd=0;function xl(e){var r={$:0,e:cd++,f:e,g:null,h:[]};return Sl(r),r}function C$(e){return mn(function(r){r(ra(xl(e)))})}function z$(e,r){e.h.push(r),Sl(e)}var ud=v(function(e,r){return mn(function(n){z$(e,r),n(ra(_t))})}),fo=!1,Jc=[];function Sl(e){if(Jc.push(e),!fo){for(fo=!0;e=Jc.shift();)$d(e);fo=!1}}function $d(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Sl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ee(function(e,r,n,t){return Cl(r,t,e.gR,e.ih,e.hV,function(){return function(){}})});function Cl(e,r,n,t,i,o){var l=a(x$,e,r?r.flags:void 0);Ir(l)||Ia(2);var c={},u=n(l.a),f=u.a,m=o(b,f),d=vd(c,b);function b(s,w){var _=a(t,s,f);m(f=_.a,w),Yc(c,_.b,i(f))}return Yc(c,u.b,i(f)),d?{ports:d}:{}}var qr={};function vd(e,r){var n;for(var t in qr){var i=qr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=md(i,r)}return n}function fd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function md(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c(u){return a(Vo,c,ld(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&l?L(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=xl(a(Vo,c,e.b))}var sd=v(function(e,r){return mn(function(n){e.g(r),n(ra(_t))})});v(function(e,r){return a(ud,e.h,{$:0,a:r})});function L$(e){return function(r){return{$:1,k:e,l:r}}}function dd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var qc=[],mo=!1;function Yc(e,r,n){if(qc.push({p:e,q:r,r:n}),!mo){mo=!0;for(var t;t=qc.shift();)pd(t.p,t.q,t.r);mo=!1}}function pd(e,r,n){var t={};ui(!0,r,t,null),ui(!1,n,t,null);for(var i in e)z$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ui(e,r,n,t){switch(r.$){case 1:var i=r.k,o=gd(e,i,t,r.l);n[i]=hd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)ui(e,l.a,n,t);return;case 3:ui(e,r.o,n,{s:r.n,t});return}}function gd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?qr[r].e:qr[r].f;return a(o,i,t)}function hd(e,r,n){return n=n||{i:D,j:D},e?n.i=Zr(r,n.i):n.j=Zr(r,n.j),n}function bd(e){qr[e]&&Ia(3)}v(function(e,r){return r});function _d(e,r){return bd(e),qr[e]={f:wd,u:r,a:yd},L$(e)}var wd=v(function(e,r){return function(n){return e(r(n))}});function yd(e,r){var n=D,t=qr[e].u,i=ra(null);qr[e].b=i,qr[e].c=M(function(l,c,u){return n=c,i});function o(l){var c=a(x$,t,l);Ir(c)||Ia(4,e,c.a);for(var u=c.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var $i,ln=typeof document!="undefined"?document:{};function zl(e,r){e.appendChild(r)}ee(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(wn(e,function(){}),i),{}});function Ro(e){return{$:0,a:e}}var P$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Pl(n),e:i,f:e,b:o}})}),sn=P$(void 0),xd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Pl(n),e:i,f:e,b:o}})}),Sd=xd(void 0);function Cd(e,r,n,t){return{$:3,d:Pl(e),g:r,h:n,i:t}}var zd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function kn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return kn([e,r],function(){return e(r)})});M(function(e,r,n){return kn([e,r,n],function(){return a(e,r,n)})});var Ld=ee(function(e,r,n,t){return kn([e,r,n,t],function(){return h(e,r,n,t)})});Ye(function(e,r,n,t,i){return kn([e,r,n,t,i],function(){return L(e,r,n,t,i)})});xr(function(e,r,n,t,i,o){return kn([e,r,n,t,i,o],function(){return A(e,r,n,t,i,o)})});Di(function(e,r,n,t,i,o,l){return kn([e,r,n,t,i,o,l],function(){return tr(e,r,n,t,i,o,l)})});Pe(function(e,r,n,t,i,o,l,c){return kn([e,r,n,t,i,o,l,c],function(){return wl(e,r,n,t,i,o,l,c)})});_l(function(e,r,n,t,i,o,l,c,u){return kn([e,r,n,t,i,o,l,c,u],function(){return bt(e,r,n,t,i,o,l,c,u)})});var M$=v(function(e,r){return{$:"a0",n:e,o:r}}),Pd=v(function(e,r){return{$:"a1",n:e,o:r}}),Ll=v(function(e,r){return{$:"a2",n:e,o:r}}),Rr=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function T$(e){return e=="script"?"p":e}function Md(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Td(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function kd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function k$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Dd=v(function(e,r){return r.$==="a0"?a(M$,r.n,Ad(e,r.o)):r});function Ad(e,r){var n=Rl(r);return{$:r.$,a:n?h(g0,n<3?Fd:Id,cr(e),r.a):a(si,e,r.a)}}var Fd=v(function(e,r){return z(e(r.a),r.b)}),Id=v(function(e,r){return{aA:e(r.aA),dA:r.dA,dp:r.dp}});function Pl(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Xc(r,i,o):r[i]=o;continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?Xc(l,i,o):l[i]=o}return r}function Xc(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function wn(e,r){var n=e.$;if(n===5)return wn(e.k||(e.k=e.m()),r);if(n===0)return ln.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=wn(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Oo(l,r,e.d),l}var l=e.f?ln.createElementNS(e.f,e.c):ln.createElement(e.c);$i&&e.c=="a"&&l.addEventListener("click",$i(l)),Oo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)zl(l,wn(n===1?c[u]:c[u].b,r));return l}function Oo(e,r,n){for(var t in n){var i=n[t];t==="a1"?Ed(e,i):t==="a0"?Rd(e,r,i):t==="a3"?Bd(e,i):t==="a4"?Vd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Ed(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Bd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Vd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Rd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Od(r,o),e.addEventListener(i,l,Ml&&{passive:Rl(o)<2}),t[i]=l}}var Ml;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ml=!0}}))}catch{}function Od(e,r){function n(t){var i=n.q,o=zr(i.a,t);if(!!Ir(o)){for(var l=Rl(i),c=o.a,u=l?l<3?c.a:c.aA:c,f=l==1?c.b:l==3&&c.dA,m=(f&&t.stopPropagation(),(l==2?c.b:l==3&&c.dp)&&t.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")u=d(u);else for(var b=d.length;b--;)u=d[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Nd(e,r){return e.$==r.$&&pa(e.a,r.a)}function D$(e,r){var n=[];return Er(e,r,n,0),n}function ar(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Er(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Yd(r),o=1;else{ar(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,f=u===c.length;f&&u--;)f=l[u]===c[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Er(e.k,r.k,m,0),m.length>0&&ar(n,1,t,m);return;case 4:for(var d=e.j,b=r.j,s=!1,w=e.k;w.$===4;)s=!0,typeof d!="object"?d=[d,w.j]:d.push(w.j),w=w.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&d.length!==b.length){ar(n,0,t,r);return}(s?!jd(d,b):d!==b)&&ar(n,2,t,b),Er(w,_,n,t+1);return;case 0:e.a!==r.a&&ar(n,3,t,r.a);return;case 1:Zc(e,r,n,t,Hd);return;case 2:Zc(e,r,n,t,Gd);return;case 3:if(e.h!==r.h){ar(n,0,t,r);return}var S=Tl(e.d,r.d);S&&ar(n,4,t,S);var C=r.i(e.g,r.g);C&&ar(n,5,t,C);return}}}function jd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Zc(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){ar(n,0,t,r);return}var o=Tl(e.d,r.d);o&&ar(n,4,t,o),i(e,r,n,t)}function Tl(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Tl(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Nd(l,c)||(t=t||{},t[i]=c)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Hd(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?ar(n,6,t,{v:c,i:l-c}):l<c&&ar(n,7,t,{v:l,e:o});for(var u=l<c?l:c,f=0;f<u;f++){var m=i[f];Er(m,o[f],n,++t),t+=m.b||0}}function Gd(e,r,n,t){for(var i=[],o={},l=[],c=e.e,u=r.e,f=c.length,m=u.length,d=0,b=0,s=t;d<f&&b<m;){var w=c[d],_=u[b],S=w.a,C=_.a,y=w.b,T=_.b,G=void 0,K=void 0;if(S===C){s++,Er(y,T,i,s),s+=y.b||0,d++,b++;continue}var ae=c[d+1],te=u[b+1];if(ae){var ie=ae.a,ne=ae.b;K=C===ie}if(te){var q=te.a,de=te.b;G=S===q}if(G&&K){s++,Er(y,de,i,s),Ha(o,i,S,T,b,l),s+=y.b||0,s++,Ga(o,i,S,ne,s),s+=ne.b||0,d+=2,b+=2;continue}if(G){s++,Ha(o,i,C,T,b,l),Er(y,de,i,s),s+=y.b||0,d+=1,b+=2;continue}if(K){s++,Ga(o,i,S,y,s),s+=y.b||0,s++,Er(ne,T,i,s),s+=ne.b||0,d+=2,b+=1;continue}if(ae&&ie===q){s++,Ga(o,i,S,y,s),Ha(o,i,C,T,b,l),s+=y.b||0,s++,Er(ne,de,i,s),s+=ne.b||0,d+=2,b+=2;continue}break}for(;d<f;){s++;var w=c[d],y=w.b;Ga(o,i,w.a,y,s),s+=y.b||0,d++}for(;b<m;){var pe=pe||[],_=u[b];Ha(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||l.length>0||pe)&&ar(n,8,t,{w:i,x:l,y:pe})}var A$="_elmW6BL";function Ha(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Er(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Ha(e,r,n+A$,t,i,o)}function Ga(e,r,n,t,i){var o=e[n];if(!o){var l=ar(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Er(t,o.z,c,i),ar(r,9,i,{w:c,A:o});return}Ga(e,r,n+A$,t,i)}function F$(e,r,n,t){Wa(e,r,n,0,0,r.b,t)}function Wa(e,r,n,t,i,o,l){for(var c=n[t],u=c.r;u===i;){var f=c.$;if(f===1)F$(e,r.k,c.s,l);else if(f===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&Wa(e,r,m,0,i,o,l)}else if(f===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var m=d.w;m.length>0&&Wa(e,r,m,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||(u=c.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Wa(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var w=r.e,_=e.childNodes,S=0;S<w.length;S++){i++;var C=b===1?w[S]:w[S].b,y=i+(C.b||0);if(i<=u&&u<=y&&(t=Wa(_[S],C,n,t,i,y,l),!(c=n[t])||(u=c.r)>o))return t;i=y}return t}function I$(e,r,n,t){return n.length===0?e:(F$(e,r,n,t),vi(e,n))}function vi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Wd(i,t);i===e&&(e=o)}return e}function Wd(e,r){switch(r.$){case 0:return Ud(e,r.s,r.u);case 4:return Oo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return vi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(wn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=vi(e,o.w),e;case 8:return Jd(e,r);case 5:return r.s(e);default:Ia(10)}}function Ud(e,r,n){var t=e.parentNode,i=wn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Jd(e,r){var n=r.s,t=qd(n.y,r);e=vi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:wn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return t&&zl(e,t),e}function qd(e,r){if(!!e){for(var n=ln.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;zl(n,o.c===2?o.s:wn(o.z,r.u))}return n}}function kl(e){if(e.nodeType===3)return Ro(e.textContent);if(e.nodeType!==1)return Ro("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=Zr(a(Rr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Zr(kl(f[t]),u);return h(sn,c,r,u)}function Yd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Xd=ee(function(e,r,n,t){return Cl(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.ij,c=t.node,u=kl(c);return E$(o,function(f){var m=l(f),d=D$(u,m);c=I$(c,u,d,i),u=m})})});ee(function(e,r,n,t){return Cl(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.dy&&e.dy(i),c=e.ij,u=ln.title,f=ln.body,m=kl(f);return E$(o,function(d){$i=l;var b=c(d),s=sn("body")(D)(b.fR),w=D$(m,s);f=I$(f,m,w,i),m=s,$i=0,u!==b.ib&&(ln.title=u=b.ib)})})});var fi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function E$(e,r){r(e);var n=0;function t(){n=n===1?0:(fi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&fi(t),n=2)}}v(function(e,r){return a(Nl,yt,mn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Nl,yt,mn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Nl,yt,mn(function(){history.replaceState({},"",r),e()}))});var Zd={addEventListener:function(){},removeEventListener:function(){}},Kd=typeof window!="undefined"?window:Zd;M(function(e,r,n){return C$(mn(function(t){function i(o){xl(n(o))}return e.addEventListener(r,i,Ml&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=zr(e,r);return Ir(n)?Y(n.a):J});function B$(e,r){return mn(function(n){fi(function(){var t=document.getElementById(e);n(t?ra(r(t)):od(h0(e)))})})}function Qd(e){return mn(function(r){fi(function(){r(ra(e()))})})}v(function(e,r){return B$(r,function(n){return n[e](),_t})});v(function(e,r){return Qd(function(){return Kd.scroll(e,r),_t})});M(function(e,r,n){return B$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,_t})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var ep=v(function(e,r){var n="g";e.g9&&(n+="m"),e.f$&&(n+="i");try{return Y(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var rp=M(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var d=u[f];m[--f]=d?Y(d):J}t.push(L(Sf,u[0],u.index,i,$(m))),c=r.lastIndex}return r.lastIndex=l,$(t)});ee(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var f=arguments[c];u[--c]=f?Y(f):J}return n(L(Sf,l,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,$(i)});var Kc=0;function it(e,r){for(;r.b;r=r.b)e(r.a)}function Dl(e){for(var r=0;e.b;e=e.b)r++;return r}var np=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ap=Ye(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),tp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),ip=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),op=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),lp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),up=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),$p=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),vp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),fp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},mp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},sp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},dp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},V$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},R$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},pp=function(e){e.gl.disable(e.gl.CULL_FACE)},gp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},hp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},bp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Qc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],_p=[mp,sp,dp,V$,R$,pp,gp,hp,bp];function eu(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function wp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function O$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function yp(e,r,n,t){for(var i=n.a.d_,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(s,w,_,S,C){var y;if(i===1)for(y=0;y<w;y++)s[_++]=w===1?S[C]:S[C][y];else o.forEach(function(T){for(y=0;y<w;y++)s[_++]=w===1?S[T][C]:S[T][C][y]})}var u=O$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,d=new u.type(Dl(n.b)*m);it(function(s){c(d,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function xp(e,r){if(r.a.eb>0){var n=e.createBuffer(),t=Sp(r.c,r.a.eb);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d_*Dl(r.b),indexBuffer:null,buffers:{}}}function Sp(e,r){var n=new Uint32Array(Dl(e)*r),t=0,i;return it(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function ru(e,r){return e+"#"+r}var N$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),V$(n),R$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=ru(o.b.id,o.c.id),c=n.programs[l]),!c){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Kc++,f||(f=eu(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Kc++,m||(m=eu(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=wp(t,f,m);c={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Cp(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(d,u),w=t.getAttribLocation(d,s.name);c.activeAttributes.push(s),c.activeAttributeLocations.push(w)}l=ru(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),zp(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=xp(t,o.d),n.buffers.set(o.d,_)),u=0;u<c.activeAttributes.length;u++){s=c.activeAttributes[u],w=c.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=yp(t,s,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=O$(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(w),t.vertexAttribPointer(w,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,y=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(w+T),t.vertexAttribPointer(w+T,S.size,S.baseType,!1,y,C*T)}for(n.toggle=!n.toggle,it(a_(n),o.a),u=0;u<Qc.length;u++){var G=n[Qc[u]];G.toggle!==n.toggle&&G.enabled&&(_p[u](n),G.enabled=!1,G.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eN,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eN,0,_.numIndices)}}return it(i,e.g),r});function Cp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(s,w){var _=w.name,S=e.getUniformLocation(s,_);switch(w.type){case e.INT:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};case e.FLOAT:return function(y){o[_]!==y&&(e.uniform1f(S,y),o[_]=y)};case e.FLOAT_VEC2:return function(y){o[_]!==y&&(e.uniform2f(S,y[0],y[1]),o[_]=y)};case e.FLOAT_VEC3:return function(y){o[_]!==y&&(e.uniform3f(S,y[0],y[1],y[2]),o[_]=y)};case e.FLOAT_VEC4:return function(y){o[_]!==y&&(e.uniform4f(S,y[0],y[1],y[2],y[3]),o[_]=y)};case e.FLOAT_MAT4:return function(y){o[_]!==y&&(e.uniformMatrix4fv(S,!1,new Float32Array(y)),o[_]=y)};case e.SAMPLER_2D:var C=l++;return function(y){e.activeTexture(e.TEXTURE0+C);var T=c.textures.get(y);T||(T=y.gc(e),c.textures.set(y,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==y&&(e.uniform1i(S,C),o[_]=y)};case e.BOOL:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=u(i,b)}return f}function zp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Lp=M(function(e,r,n){return Cd(r,{g:n,f:{},h:e},Fp,Ip)}),Pp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Mp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Tp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),kp=v(function(e,r){e.contextAttributes.antialias=!0}),Dp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ap=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Fp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};it(function(i){return a(n_,r,i)},e.h);var n=ln.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),np(function(){return a(N$,e,n)})):(n=ln.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ip(e,r){return r.f=e.f,N$(r)}var Ep=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Bp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Bp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Al=new Float64Array(3),nu=new Float64Array(3),au=new Float64Array(3),Vp=M(function(e,r,n){return new Float64Array([e,r,n])}),Rp=function(e){return e[0]},Op=function(e){return e[1]},Np=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var jp=function(e){return new Float64Array([e.io,e.is,e.dO])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function j$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(j$);function H$(e,r,n){return n===void 0&&(n=new Float64Array(3)),mi(j$(e,r,n),n)}v(H$);function G$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function mi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/G$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Hp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ua=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ua);function No(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(No);v(function(e,r){var n,t=Al,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ua(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ua(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ua(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ua(r,t)+e[14])/n,i});var Gp=ee(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Wp=function(e){return{io:e[0],is:e[1],dO:e[2],fp:e[3]}},Up=function(e){return new Float64Array([e.io,e.is,e.dO,e.fp])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Jp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Jp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var qp=new Float64Array(16),Yp=new Float64Array(16),Xp=function(e){var r=new Float64Array(16);return r[0]=e.ep,r[1]=e.et,r[2]=e.ex,r[3]=e.eB,r[4]=e.eq,r[5]=e.eu,r[6]=e.ey,r[7]=e.eC,r[8]=e.er,r[9]=e.ev,r[10]=e.ez,r[11]=e.eD,r[12]=e.es,r[13]=e.ew,r[14]=e.eA,r[15]=e.eE,r},Zp=function(e){return{ep:e[0],et:e[1],ex:e[2],eB:e[3],eq:e[4],eu:e[5],ey:e[6],eC:e[7],er:e[8],ev:e[9],ez:e[10],eD:e[11],es:e[12],ew:e[13],eA:e[14],eE:e[15]}};function W$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}xr(W$);ee(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return W$(l,c,o,i,n,t)});function U$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}xr(U$);ee(function(e,r,n,t){return U$(e,r,n,t,-1,1)});function J$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],m=e[7],d=e[8],b=e[9],s=e[10],w=e[11],_=e[12],S=e[13],C=e[14],y=e[15],T=r[0],G=r[1],K=r[2],ae=r[3],te=r[4],ie=r[5],ne=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],I=r[14],E=r[15];return n[0]=t*T+c*G+d*K+_*ae,n[1]=i*T+u*G+b*K+S*ae,n[2]=o*T+f*G+s*K+C*ae,n[3]=l*T+m*G+w*K+y*ae,n[4]=t*te+c*ie+d*ne+_*q,n[5]=i*te+u*ie+b*ne+S*q,n[6]=o*te+f*ie+s*ne+C*q,n[7]=l*te+m*ie+w*ne+y*q,n[8]=t*de+c*pe+d*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=l*de+m*pe+w*Me+y*Se,n[12]=t*me+c*Te+d*I+_*E,n[13]=i*me+u*Te+b*I+S*E,n[14]=o*me+f*Te+s*I+C*E,n[15]=l*me+m*Te+w*I+y*E,n}v(J$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],f=e[8],m=e[9],d=e[10],b=e[12],s=e[13],w=e[14],_=r[0],S=r[1],C=r[2],y=r[4],T=r[5],G=r[6],K=r[8],ae=r[9],te=r[10],ie=r[12],ne=r[13],q=r[14];return n[0]=t*_+l*S+f*C,n[1]=i*_+c*S+m*C,n[2]=o*_+u*S+d*C,n[3]=0,n[4]=t*y+l*T+f*G,n[5]=i*y+c*T+m*G,n[6]=o*y+u*T+d*G,n[7]=0,n[8]=t*K+l*ae+f*te,n[9]=i*K+c*ae+m*te,n[10]=o*K+u*ae+d*te,n[11]=0,n[12]=t*ie+l*ne+f*q+b,n[13]=i*ie+c*ne+m*q+s,n[14]=o*ie+u*ne+d*q+w,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=mi(r,Al);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*u,n[2]=o*t*c-i*u,n[3]=0,n[4]=t*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+t*u,n[7]=0,n[8]=t*o*c+i*u,n[9]=i*o*c-t*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/G$(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),d=o*m,b=l*m,s=c*m,w=o*l*f,_=o*c*f,S=l*c*f,C=o*o*f+u,y=w+s,T=_-b,G=w-s,K=l*l*f+u,ae=S+d,te=_+b,ie=S-d,ne=c*c*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],I=n[7],E=n[8],B=n[9],V=n[10],R=n[11],N=n[12],j=n[13],H=n[14],je=n[15];return t[0]=q*C+Se*y+E*T,t[1]=de*C+me*y+B*T,t[2]=pe*C+Te*y+V*T,t[3]=Me*C+I*y+R*T,t[4]=q*G+Se*K+E*ae,t[5]=de*G+me*K+B*ae,t[6]=pe*G+Te*K+V*ae,t[7]=Me*G+I*K+R*ae,t[8]=q*te+Se*ie+E*ne,t[9]=de*te+me*ie+B*ne,t[10]=pe*te+Te*ie+V*ne,t[11]=Me*te+I*ie+R*ne,t[12]=N,t[13]=j,t[14]=H,t[15]=je,t});function Kp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(Kp);ee(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Qp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(Qp);ee(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],u=t[3],f=t[4],m=t[5],d=t[6],b=t[7],s=t[8],w=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=s,i[9]=w,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=l*e+m*r+w*n+t[13],i[14]=c*e+d*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],f=r[3],m=r[4],d=r[5],b=r[6],s=r[7],w=r[8],_=r[9],S=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=s,n[8]=w,n[9]=_,n[10]=S,n[11]=C,n[12]=l*t+m*i+w*o+r[12],n[13]=c*t+d*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=H$(e,r,Al),i=mi(No(n,t,nu),nu),o=mi(No(t,i,au),au),l=qp,c=Yp;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,J$(l,c)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var P=us,Rt=os,q$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var f=l.a;return h(Rt,e,c,f)}else{var u=l.a;return h(Rt,o,c,u)}});return h(Rt,o,h(Rt,e,r,i),t)}),Fl=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,u=h(e,t,i,h(Fl,e,r,l)),f=o;e=c,r=u,n=f;continue e}}),tu=function(e){return h(Fl,M(function(r,n,t){return a(P,z(r,n),t)}),D,e)},Y$=1,e0=2,X$=0,ir=function(e){return{$:1,a:e}},Il=v(function(e,r){return{$:3,a:e,b:r}}),iu=v(function(e,r){return{$:0,a:e,b:r}}),Z$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},r0=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},J={$:1},n0=Is,a0=rd,k=y$,ce=v(function(e,r){return a(ks,e,Ai(r))}),El=v(function(e,r){return $(a(Ts,e,r))}),K$=function(e){return a(ce,`
    `,a(El,`
`,e))},Ne=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),Zn=function(e){return h(Ne,v(function(r,n){return n+1}),0,e)},t0=$s,i0=M(function(e,r,n){e:for(;;)if(be(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),Yr=v(function(e,r){return h(i0,e,r,D)}),Q$=v(function(e,r){return h(t0,e,a(Yr,0,Zn(r)-1),r)}),Xr=js,ev=function(e){var r=Xr(e);return 97<=r&&r<=122},rv=function(e){var r=Xr(e);return r<=90&&65<=r},o0=function(e){return ev(e)||rv(e)},l0=function(e){var r=Xr(e);return r<=57&&48<=r},c0=function(e){return ev(e)||rv(e)||l0(e)},mr=function(e){return h(Ne,P,D,e)},Ea=zs,u0=v(function(e,r){return`

(`+(k(e+1)+(") "+K$($0(r))))}),$0=function(e){return a(v0,e,D)},v0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,l=e.b,t=function(){var _=Ea(n);if(_.$===1)return!1;var S=_.a,C=S.a,y=S.b;return o0(C)&&a(n0,c0,y)}(),i=t?"."+n:"['"+(n+"']"),u=l,f=a(P,i,r);e=u,r=f;continue e;case 1:var o=e.a,l=e.b,c="["+(k(o)+"]"),u=l,f=a(P,c,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(ce,"",mr(r)):"Json.Decode.oneOf"}(),w=d+(" failed in the following "+(k(Zn(m))+" ways:"));return a(ce,`

`,a(P,w,a(Q$,u0,m)))}else{var l=m.a,u=l,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ce,"",mr(r)):"!"}();default:var b=e.a,s=e.b,w=function(){return r.b?"Problem with the value at json"+(a(ce,"",mr(r))+`:

    `):`Problem with the given value:

`}();return w+(K$(a(a0,4,s))+(`

`+b))}}),wr=32,jo=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ho=rs,ot=bs,Bl=v(function(e,r){return Gc(r)/Gc(e)}),Ja=gs,lt=ot(a(Bl,2,wr)),nv=L(jo,0,lt,Ho,Ho),av=as,tv=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var iv=_s,Go=ns,nr=v(function(e,r){return be(e,r)>0?e:r}),f0=function(e){return{$:0,a:e}},Vl=ts,m0=v(function(e,r){e:for(;;){var n=a(Vl,wr,e),t=n.a,i=n.b,o=a(P,f0(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return mr(o)}}),ov=function(e){var r=e.a;return r},s0=v(function(e,r){e:for(;;){var n=ot(r/wr);if(n===1)return a(Vl,wr,e).a;var t=a(m0,e,D),i=n;e=t,r=i;continue e}}),lv=v(function(e,r){if(r.n){var n=r.n*wr,t=iv(a(Bl,wr,n-1)),i=e?mr(r.C):r.C,o=a(s0,i,r.n);return L(jo,Go(r.r)+n,a(nr,5,t*lt),o,r.r)}else return L(jo,Go(r.r),lt,Ho,r.r)}),d0=Ye(function(e,r,n,t,i){e:for(;;){if(r<0)return a(lv,!1,{C:t,n:n/wr|0,r:i});var o=tv(h(av,wr,r,e)),l=e,c=r-wr,u=n,f=a(P,o,t),m=i;e=l,r=c,n=u,t=f,i=m;continue e}}),p0=v(function(e,r){if(e<=0)return nv;var n=e%wr,t=h(av,n,e-n,r),i=e-n-wr;return A(d0,r,i,e,D,t)}),Ir=function(e){return!e.$},Q=Zs,Le=Us,Z=Xs,We=Js,cv=v(function(e,r){return{cO:r.cO,f9:e,cS:r.cS,gn:r.gn,g0:r.g0,ho:r.ho,dw:r.dw,ik:r.ik}}),si=Ks,g0=Qs,cr=Gs,Rl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Br=function(e){return e},h0=Br,ou=xr(function(e,r,n,t,i,o){return{d4:o,d9:r,eW:t,eZ:n,e1:e,e2:i}}),b0=Es,jn=Ls,ga=Ds,wt=v(function(e,r){return e<1?r:h(ga,e,jn(r),r)}),Fi=Vs,Ii=function(e){return e===""},Ei=v(function(e,r){return e<1?"":h(ga,0,e,r)}),uv=Rs,lu=Ye(function(e,r,n,t,i){if(Ii(i)||a(b0,"@",i))return J;var o=a(Fi,":",i);if(o.b){if(o.b.b)return J;var l=o.a,c=uv(a(wt,l+1,i));if(c.$===1)return J;var u=c;return Y(tr(ou,e,a(Ei,l,i),u,r,n,t))}else return Y(tr(ou,e,i,J,r,n,t))}),cu=ee(function(e,r,n,t){if(Ii(t))return J;var i=a(Fi,"/",t);if(i.b){var o=i.a;return A(lu,e,a(wt,o,t),r,n,a(Ei,o,t))}else return A(lu,e,"/",r,n,t)}),uu=M(function(e,r,n){if(Ii(n))return J;var t=a(Fi,"?",n);if(t.b){var i=t.a;return L(cu,e,Y(a(wt,i+1,n)),r,a(Ei,i,n))}else return L(cu,e,J,r,n)});v(function(e,r){if(Ii(r))return J;var n=a(Fi,"#",r);if(n.b){var t=n.a;return h(uu,e,Y(a(wt,t+1,r)),a(Ei,t,r))}else return h(uu,e,J,r)});var _0=Bs,yt=function(e){},xt=ra,w0=xt(0),$v=ee(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,f=c.b;if(f.b){var m=f.a,d=f.b,b=n>500?h(Ne,e,r,mr(d)):L($v,e,r,n+1,d);return a(e,i,a(e,l,a(e,u,a(e,m,b))))}else return a(e,i,a(e,l,a(e,u,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),er=M(function(e,r,n){return L($v,e,r,0,n)}),re=v(function(e,r){return h(er,v(function(n,t){return a(P,e(n),t)}),D,r)}),di=Vo,Ol=v(function(e,r){return a(di,function(n){return xt(e(n))},r)}),y0=M(function(e,r,n){return a(di,function(t){return a(di,function(i){return xt(a(e,t,i))},n)},r)}),x0=function(e){return h(er,y0(P),xt(D),e)},S0=sd,C0=v(function(e,r){var n=r;return C$(a(di,S0(e),n))}),z0=M(function(e,r,n){return a(Ol,function(t){return 0},x0(a(re,C0(e),r)))}),L0=M(function(e,r,n){return xt(0)}),P0=v(function(e,r){var n=r;return a(Ol,e,n)});qr.Task=fd(w0,z0,L0,P0);var M0=L$("Task"),Nl=v(function(e,r){return M0(a(Ol,e,r))}),T0=Xd,k0=Ss,pi={$:1},vv=function(e){return{$:2,a:e}},jl={$:0},Mr=v(function(e,r){return{$:0,a:e,b:r}}),Ze=M(function(e,r,n){return r(e(n))}),na=function(e){var r=e.b.s;return r.a},D0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return Y(a(Mr,r,{s:o,an:l,X:a(P,t,n)}))}else return J},Fe=v(function(e,r){if(r.$)return e;var n=r.a;return n}),A0=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dB;return(be(o+r.gn,na(n).cO)>0?a(Ze,D0,Fe(a(Mr,pi,i))):Br)(a(Mr,vv({dB:o+r.gn}),i));default:var l=i.s,c=l.a,u=l.b,f=a(cv,c.f9,Re(r,{cO:c.cO+r.gn})),m=a(e,f,u);return a(Mr,jl,{s:z(f,m),an:D,X:a(P,i.s,i.X)})}}),fv=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),F0=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(P,t,n);e=o,r=l,n=c;continue e}else return n}}),I0=v(function(e,r){return mr(h(F0,e,r,D))}),mv=M(function(e,r,n){if(r<=0)return D;{var t=z(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,l=o.a;return $([y,l]);case 3:if(t.b.b.b.b){var c=t.b,y=c.a,u=c.b,l=u.a,f=u.b,m=f.a;return $([y,l,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,y=d.a,b=d.b,l=b.a,s=b.b,m=s.a,w=s.b,_=w.a,S=w.b;return e>1e3?a(P,y,a(P,l,a(P,m,a(P,_,a(I0,r-4,S))))):a(P,y,a(P,l,a(P,m,a(P,_,h(mv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,y=C.a;return $([y])}}),E0=v(function(e,r){return h(mv,0,e,r)}),B0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=X(mr(n),X($([t]),i)),l=a(E0,e,o),c=a(fv,e,o);if(c.b){var u=c.a,f=c.b;return a(Mr,pi,{s:u,an:f,X:mr(l)})}else{var m=mr(l);if(m.b){var d=m.a,b=m.b;return a(Mr,pi,{s:d,an:D,X:b})}else return r}}),V0=function(e){var r=e.b;return a(Mr,pi,r)},R0=function(e){var r=e.b;return a(Mr,vv({dB:na(e).cO}),r)},O0=function(e){var r=e.b;return a(Mr,jl,r)},N0=v(function(e,r){switch(e.$){case 1:return V0(r);case 2:return O0(r);case 3:return R0(r);default:var n=e.a;return a(B0,n,r)}}),gi=v(function(e,r){var n=r.a,t=r.b;return z(e(n),t)}),j0=v(function(e,r){return Re(r,{aN:e(r.aN)})}),H0=function(e){return{$:3,a:e}},G0=function(e){return{$:2,a:e}},sv=v(function(e,r){return{$:0,a:e,b:r}}),W0=v(function(e,r){return{$:1,a:e,b:r}}),Oe=v(function(e,r){if(r.$)return J;var n=r.a;return Y(e(n))}),he=function(e){return e<0?-e:e},dv=Os,U0=M(function(e,r,n){return a(Fe,0/0,dv(a(e,r,n)))}),St=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),J0=Ms,pv=function(e){return h(J0,P,D,e)},q0=v(function(e,r){var n=a(St,function(t){return t!=="0"&&t!=="."},pv(r));return X(e&&n?"-":"",r)}),ve=y$,Wo=Cs,gv=Hs,hv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ea(n);if(t.$===1)return"01";var i=t.a;return a(Wo,"0",hv(i))}else{var o=Xr(r);return o>=48&&o<57?a(Wo,gv(o+1),n):"0"}},Uo=hs,Y0=xs,Bi=function(e){return a(Wo,e,"")},bv=M(function(e,r,n){return e<=0?n:h(bv,e>>1,X(r,r),e&1?X(n,r):n)}),ct=v(function(e,r){return h(bv,e,r,"")}),Jo=M(function(e,r,n){return X(n,a(ct,e-jn(n),Bi(r)))}),qo=Ps,_v=function(e){var r=a(El,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},X0=function(e){var r=a(El,"e",ve(he(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Fe,0,uv(a(_0,"+",i)?a(wt,1,i):i)),l=_v(n),c=l.a,u=l.b,f=X(c,u),m=o<0?a(Fe,"0",a(Oe,function(d){var b=d.a,s=d.b;return b+("."+s)},a(Oe,gi(Bi),Ea(X(a(ct,he(o),"0"),f))))):h(Jo,o+1,"0",f);return X(e<0?"-":"",m)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},Z0=M(function(e,r,n){if(Uo(n)||Y0(n))return ve(n);var t=n<0,i=_v(X0(he(n))),o=i.a,l=i.b,c=jn(o)+r,u=X(a(ct,-c+1,"0"),h(Jo,c,"0",X(o,l))),f=jn(u),m=a(nr,1,c),d=a(e,t,h(ga,m,f,u)),b=h(ga,0,m,u),s=d?qo(a(Fe,"1",a(Oe,hv,Ea(qo(b))))):b,w=jn(s),_=s==="0"?s:r<=0?X(s,a(ct,he(r),"0")):be(r,jn(l))<0?h(ga,0,w-r,s)+("."+h(ga,w-r,w,s)):X(o+".",h(Jo,r,"0",l));return a(q0,t,_)}),wv=Z0(v(function(e,r){var n=Ea(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Xr(i))})),K0=U0(wv),Q0=M(function(e,r,n){var t=a(Bl,10,he(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(K0,i,n)}),yv=cs,Vi=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(yv,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return Y(t);default:var c=e,u=o;e=c,r=u;continue e}}}),fe=Ye(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Kr={$:-2},Pa=Ye(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,d=t.d,b=t.e;return A(fe,0,r,n,A(fe,1,f,m,d,b),A(fe,1,o,l,c,u))}else return A(fe,e,o,l,A(fe,0,r,n,t,c),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var w=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return A(fe,0,f,m,A(fe,1,w,_,S,C),A(fe,1,r,n,b,i))}else return A(fe,e,r,n,t,i)}),Yo=M(function(e,r,n){if(n.$===-2)return A(fe,0,e,r,Kr,Kr);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=a(yv,e,i);switch(u){case 0:return A(Pa,t,i,o,h(Yo,e,r,l),c);case 1:return A(fe,t,i,r,l,c);default:return A(Pa,t,i,o,l,h(Yo,e,r,c))}}),ya=M(function(e,r,n){var t=h(Yo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return A(fe,1,i,o,l,c)}else{var u=t;return u}}),eg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},xv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var s=b.b,w=b.c,_=b.d,S=b.e,C=f.e;return A(fe,0,s,w,A(fe,1,n,t,A(fe,0,o,l,c,u),_),A(fe,1,m,d,S,C))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,u=y.e,T=e.e;T.a;var m=T.b,d=T.c,b=T.d,C=T.e;return A(fe,1,n,t,A(fe,0,o,l,c,u),A(fe,0,m,d,b,C))}else return e},$u=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,f=c.c,m=c.d,d=c.e,b=i.e,s=e.e;s.a;var w=s.b,_=s.c,S=s.d,C=s.e;return A(fe,0,o,l,A(fe,1,u,f,m,d),A(fe,1,n,t,b,A(fe,0,w,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,T=y.d,b=y.e,G=e.e;G.a;var w=G.b,_=G.c,S=G.d,C=G.e;return A(fe,1,n,t,A(fe,0,o,l,T,b),A(fe,0,w,_,S,C))}else return e},rg=Di(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,f=o.d,m=o.e;return A(fe,n,c,u,f,A(fe,0,t,i,m,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var d=l.d;return d.a,$u(r)}else break e;else return l.a,l.d,$u(r);else break e;return r}}),Qt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,A(fe,r,n,t,Qt(i),c);var u=xv(e);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return A(Pa,f,m,d,Qt(b),s)}else return Kr}else return A(fe,r,n,t,Qt(i),c)}else return Kr},et=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(be(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,A(fe,n,t,i,a(et,e,o),l);var u=xv(r);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return A(Pa,f,m,d,a(et,e,b),s)}else return Kr}else return A(fe,n,t,i,a(et,e,o),l);else return a(ng,e,wl(rg,e,r,n,t,i,o,l))}),ng=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(_e(e,t)){var c=eg(l);if(c.$===-1){var u=c.b,f=c.c;return A(Pa,n,u,f,o,Qt(l))}else return Kr}else return A(Pa,n,t,i,o,a(et,e,l))}else return Kr}),ag=v(function(e,r){var n=a(et,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return A(fe,1,t,i,o,l)}else{var c=n;return c}}),Ot=M(function(e,r,n){var t=r(a(Vi,e,n));if(t.$)return a(ag,e,n);var i=t.a;return h(ya,e,i,n)}),tg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Ot,r,Oe(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(W0,z(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Ot,r,Oe(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(sv,z(o,l),h(Q0,o,l,n))}));case 3:var r=e.a,n=e.b;return a(Ot,r,Oe(function(t){return t.$===3?H0(n):t}));default:var r=e.a,n=e.b;return a(Ot,r,Oe(function(t){return t.$===2?G0(n):t}))}},ig=function(e){return j0(tg(e))},og=v(function(e,r){return a(re,ig(e),r)}),lg=v(function(e,r){return Re(r,{f9:a(og,e,r.f9)})}),cg=v(function(e,r){var n=r.a,t=r.b;return a(Mr,n,Re(t,{s:a(gi,lg(e),t.s)}))}),Xo=v(function(e,r){var n=r.a,t=r.b;return z(n,e(t))}),ug=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Mr,t,Re(i,{s:a(Xo,a(e,o.a,r),o)}))}),$g=ee(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Re(t,{bw:!t.bw});case 2:var i=n.a;return Re(t,{R:h(A0,e,i,t.R)});case 3:var o=n.a;return Re(t,{bp:o});case 4:var l=n.a;return Re(t,{R:a(cg,l,t.R)});case 5:var c=n.a;return Re(t,{R:h(ug,r,c,t.R)});default:var u=n.a;return Re(t,{R:a(N0,u,t.R)})}}),vg=v(function(e,r){return a(Mr,jl,{s:z(e,r(e)),an:D,X:D})}),fg=dd,vu=fg(D),mg=function(e){return{$:2,a:e}},hi=Ys,Ma=qs,sg=_d("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return cr({cO:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(Z,"clock",We))},a(Z,"devicePixelRatio",We))},a(Z,"dt",We))},a(Z,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return cr({fF:d,gb:m,dZ:f,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(Z,"alt",Le))},a(Z,"control",Le))},a(Z,"down",Le))},a(Z,"downs",hi(Ma)))},a(Z,"left",Le))},a(Z,"pressedKeys",hi(Ma)))},a(Z,"right",Le))},a(Z,"shift",Le))},a(Z,"up",Le))))},a(Z,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return cr({dZ:f,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(Z,"down",Le))},a(Z,"isDown",Le))},a(Z,"move",Le))},a(Z,"rightDown",Le))},a(Z,"rightUp",Le))},a(Z,"up",Le))},a(Z,"x",We))},a(Z,"y",We))))},a(Z,"screen",a(Q,function(r){return a(Q,function(n){return cr({gG:n,im:r})},a(Z,"height",We))},a(Z,"width",We))))},a(Z,"wheel",a(Q,function(e){return a(Q,function(r){return cr({gf:r,gg:e})},a(Z,"deltaX",We))},a(Z,"deltaY",We))))),dg=function(e){return e.dH,sg(mg)},pg=function(e){return{$:5,a:e}},gg={$:0},bi=v(function(e,r){return e}),hg=function(e){var r=e.b.s;return r.b},bg=function(e){return{$:1,a:e}},_g=bg,Sv=function(e){return{$:8,a:e}},xe=Sv,ut=function(e){return{$:0,a:e}},Ct=M(function(e,r,n){return e(r(n))}),wg=a(Ct,ut,bi),bn=wg,Ie=function(e){return{$:1,a:e}},an=Ie,Cv=v(function(e,r){return{$:9,a:e,b:r}}),Kn={$:0},zv=v(function(e,r){return r.$===3?Kn:a(Cv,e,r)}),Zo=function(e){return a(zv,4,e)},p={fu:"a",cH:"atv",fw:"ab",fx:"cx",fy:"cy",fz:"acb",fA:"accx",fB:"accy",fC:"acr",dR:"al",dS:"ar",fD:"at",cI:"ah",cJ:"av",fH:"s",fN:"bh",fO:"b",fS:"w7",fU:"bd",fV:"bdt",b1:"bn",fW:"bs",b4:"cpe",f4:"cp",f6:"cpx",f7:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",ga:"ct",gd:"cptr",ge:"ctxt",gw:"fcs",d3:"focus-within",gx:"fs",gB:"g",cU:"hbh",cV:"hc",d7:"he",cW:"hf",d8:"hfp",gJ:"hv",gM:"ic",gO:"fr",ch:"lbl",gS:"iml",gT:"imlf",gU:"imlp",gV:"implw",gW:"it",g$:"i",eo:"lnk",be:"nb",eP:"notxt",he:"ol",hf:"or",aU:"oq",hk:"oh",eT:"pg",eU:"p",hl:"ppe",hy:"ui",af:"r",hB:"sb",hC:"sbx",hD:"sby",hE:"sbt",hJ:"e",hK:"cap",hM:"sev",hS:"sk",Y:"t",hZ:"tc",h_:"w8",h$:"w2",h0:"w9",h1:"tj",cD:"tja",h2:"tl",h3:"w3",h4:"w5",h5:"w4",h6:"tr",h7:"w6",h8:"w1",h9:"tun",ff:"ts",a$:"clr",ig:"u",dI:"wc",fq:"we",dJ:"wf",fr:"wfp",dK:"wrp"},Hl=S$,Dr=v(function(e,r){return a(Ll,e,Hl(r))}),Lr=Dr("className"),_r=function(e){return Ie(Lr(e))},Lv=v(function(e,r){return{$:2,a:e,b:r}}),yg=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},yr=2,xg={$:0},aa=xg,Sg={$:0},Cg=p.fH+(" "+p.aw),zg=p.fH+(" "+p.gB),Lg=p.fH+(" "+p.eT),Pg=p.fH+(" "+p.eU),Mg=p.fH+(" "+p.af),Tg=p.fH+(" "+p.hJ),kg=function(e){switch(e){case 0:return Mg;case 1:return Cg;case 2:return Tg;case 3:return zg;case 4:return Pg;default:return Lg}},fu=function(e){return{$:1,a:e}},Nn={$:0},Ko=function(e){return{$:1,a:e}},mu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return X(n,e);case 2:var t=r.a;return X(e,t);default:var n=r.a,t=r.b;return X(n,X(e,t))}}),su=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return X(a(re,function(o){return z(e,o)},t),r);case 2:var i=n.a;return X(r,a(re,function(o){return z(e,o)},i));default:var t=n.a,i=n.b;return X(a(re,function(o){return z(e,o)},t),X(r,a(re,function(o){return z(e,o)},i)))}}),Nt=4,Dg=function(e){return{$:0,a:e}},Ag=function(e){return{$:1,a:e}},ye=function(e){return e>31?Ag(1<<e-32):Dg(1<<e)},Pv=ye(41),Mv=ye(40),Tv=ye(42),kv=ye(43),Ta=sn("div"),Gl=Kr,Dv=Gl,Wr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Wr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Wr(o))}},Be=ws,Ve=function(e){return k(Be(e*255))},Wl=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,w=s.a,_=s.b,S=s.c,C=e.d;return Y("tfrm-"+(Ve(l)+("-"+(Ve(c)+("-"+(Ve(u)+("-"+(Ve(m)+("-"+(Ve(d)+("-"+(Ve(b)+("-"+(Ve(w)+("-"+(Ve(_)+("-"+(Ve(S)+("-"+Ve(C))))))))))))))))))))}},$t=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(ce,"-",a(re,Wr,i.hz))+("-cols-"+(a(ce,"-",a(re,Wr,i.ak))+("-space-x-"+(Wr(i.hN.a)+("-space-y-"+Wr(i.hN.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.f8)+("-"+(k(o.im)+("-"+k(o.gG)))))));case 11:var l=e.a,c=e.b,u=function(){switch(l){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ce," ",a(re,function(m){var d=$t(m);if(d==="")return"";var b=d;return b+("-"+u)},c));default:var f=e.a;return a(Fe,"",Wl(f))}},Fg=v(function(e,r){var n=r;return h(ya,e,0,n)}),Ig=v(function(e,r){var n=a(Vi,e,r);return!n.$}),Eg=v(function(e,r){var n=r;return a(Ig,e,n)}),Av=v(function(e,r){var n=r.a,t=r.b,i=$t(e);return a(Eg,i,n)?r:z(a(Fg,i,n),a(P,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),rt=v(function(e,r){return{$:0,a:e,b:r}}),x=function(e){return"."+e},Bg=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(P,i,n)}),xn=v(function(e,r){return h(er,Bg(e),D,r)}),ha=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Be(r*255))+(","+k(Be(n*255))+(","+k(Be(t*255))+(","+(ve(i)+")")))))},Qo=function(e){return a(ce," ",a(xn,Br,$([e.ec?Y("inset"):J,Y(ve(e.eQ.a)+"px"),Y(ve(e.eQ.b)+"px"),Y(ve(e.a2)+"px"),Y(ve(e.bi)+"px"),Y(ha(e.b6))])))},Fv=function(e){return $([a(rt,x(p.d3)+":focus-within",a(xn,Br,$([a(Oe,function(r){return a(ue,"border-color",ha(r))},e.fT),a(Oe,function(r){return a(ue,"background-color",ha(r))},e.fL),a(Oe,function(r){return a(ue,"box-shadow",Qo({a2:r.a2,b6:r.b6,ec:!1,eQ:a(Xo,Ja,a(gi,Ja,r.eQ)),bi:r.bi}))},e.hF),Y(a(ue,"outline","none"))]))),a(rt,x(p.fH)+":focus .focusable, "+(x(p.fH)+".focusable:focus, "+(".ui-slide-bar:focus + "+(x(p.fH)+" .focusable-thumb"))),a(xn,Br,$([a(Oe,function(r){return a(ue,"border-color",ha(r))},e.fT),a(Oe,function(r){return a(ue,"background-color",ha(r))},e.fL),a(Oe,function(r){return a(ue,"box-shadow",Qo({a2:r.a2,b6:r.b6,ec:!1,eQ:a(Xo,Ja,a(gi,Ja,r.eQ)),bi:r.bi}))},e.hF),Y(a(ue,"outline","none"))])))])},Gr=function(e){return sn(T$(e))},Iv=v(function(e,r){return a(Ll,Td(e),k$(r))}),so=v(function(e,r){return{$:2,a:e,b:r}}),Ul=function(e){return{$:6,a:e}},U=v(function(e,r){return{$:1,a:e,b:r}}),gr=v(function(e,r){return{$:0,a:e,b:r}}),F=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),Vg=v(function(e,r){return{$:3,a:e,b:r}}),Ev=$([0,1,2,3,4,5]),Rg=v(function(e,r){return r.b?h(er,P,r,e):e}),sr=function(e){return h(er,Rg,D,e)},Ba=v(function(e,r){return sr(a(re,e,r))}),Og=function(e){switch(e){case 0:return x(p.ga);case 1:return x(p.b9);case 2:return x(p.cb);case 3:return x(p.bt);case 4:return x(p.ca);default:return x(p.ax)}},_i=function(e){switch(e){case 0:return x(p.fD);case 1:return x(p.fw);case 2:return x(p.dS);case 3:return x(p.dR);case 4:return x(p.fx);default:return x(p.fy)}},qa=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(F,Og(n),i),a(U,x(p.fH),$([a(F,_i(n),o)]))])};return Ul(a(Ba,r,Ev))},du=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(F,x(p.cU),$([a(g,"z-index","0"),a(U,x(p.fN),$([a(g,"z-index","-1")]))])),a(F,x(p.hE),$([a(U,x(p.Y),$([a(F,x(p.cW),$([a(g,"flex-grow","0")])),a(F,x(p.dJ),$([a(g,"align-self","auto !important")]))]))])),a(U,x(p.cV),$([a(g,"height","auto")])),a(U,x(p.cW),$([a(g,"flex-grow","100000")])),a(U,x(p.dJ),$([a(g,"width","100%")])),a(U,x(p.fr),$([a(g,"width","100%")])),a(U,x(p.dI),$([a(g,"align-self","flex-start")])),qa(function(e){switch(e){case 0:return z($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return z($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return z($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return z($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return z($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return z($([a(U,x(p.fH),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Ng=function(e){var r=function(n){return $([a(U,x(p.fH),$([a(F,_i(n),e(n))]))])};return Ul(a(Ba,r,Ev))},jg=function(){return $([0,1,2,3,4,5])}(),Hg=$([a(gr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(gr,X(x(p.fH),X(x(p.hJ),x(p.gM))),$([a(g,"display","block"),a(F,x(p.cW),$([a(U,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(F,x(p.dJ),$([a(U,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(gr,x(p.fH)+":focus",$([a(g,"outline","none")])),a(gr,x(p.hy),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(F,X(x(p.fH),x(p.cW)),$([a(g,"height","100%"),a(U,x(p.cW),$([a(g,"height","100%")]))])),a(U,x(p.gO),$([a(F,x(p.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(gr,x(p.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(F,x(p.hJ),du),Ul(function(e){return a(re,e,jg)}(function(e){switch(e){case 0:return a(F,x(p.fu),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(U,x(p.cW),$([a(g,"height","auto")])),a(U,x(p.dJ),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(F,x(p.fO),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")])),a(U,x(p.cW),$([a(g,"height","auto")]))]));case 2:return a(F,x(p.hf),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(F,x(p.he),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(F,x(p.gO),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]));default:return a(F,x(p.fN),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(U,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(gr,x(p.fH),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(F,x(p.dK),$([a(g,"flex-wrap","wrap")])),a(F,x(p.eP),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(F,x(p.gd),$([a(g,"cursor","pointer")])),a(F,x(p.ge),$([a(g,"cursor","text")])),a(F,x(p.hl),$([a(g,"pointer-events","none !important")])),a(F,x(p.b4),$([a(g,"pointer-events","auto !important")])),a(F,x(p.a$),$([a(g,"opacity","0")])),a(F,x(p.aU),$([a(g,"opacity","1")])),a(F,x(X(p.gJ,p.a$))+":hover",$([a(g,"opacity","0")])),a(F,x(X(p.gJ,p.aU))+":hover",$([a(g,"opacity","1")])),a(F,x(X(p.gw,p.a$))+":focus",$([a(g,"opacity","0")])),a(F,x(X(p.gw,p.aU))+":focus",$([a(g,"opacity","1")])),a(F,x(X(p.cH,p.a$))+":active",$([a(g,"opacity","0")])),a(F,x(X(p.cH,p.aU))+":active",$([a(g,"opacity","1")])),a(F,x(p.ff),$([a(g,"transition",a(ce,", ",a(re,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(F,x(p.hB),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(F,x(p.hC),$([a(g,"overflow-x","auto"),a(F,x(p.af),$([a(g,"flex-shrink","1")]))])),a(F,x(p.hD),$([a(g,"overflow-y","auto"),a(F,x(p.aw),$([a(g,"flex-shrink","1")])),a(F,x(p.hJ),$([a(g,"flex-shrink","1")]))])),a(F,x(p.f4),$([a(g,"overflow","hidden")])),a(F,x(p.f6),$([a(g,"overflow-x","hidden")])),a(F,x(p.f7),$([a(g,"overflow-y","hidden")])),a(F,x(p.dI),$([a(g,"width","auto")])),a(F,x(p.b1),$([a(g,"border-width","0")])),a(F,x(p.fU),$([a(g,"border-style","dashed")])),a(F,x(p.fV),$([a(g,"border-style","dotted")])),a(F,x(p.fW),$([a(g,"border-style","solid")])),a(F,x(p.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(F,x(p.gW),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(F,x(p.hJ),du),a(F,x(p.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(U,x(p.fH),$([a(g,"flex-basis","0%"),a(F,x(p.fq),$([a(g,"flex-basis","auto")])),a(F,x(p.eo),$([a(g,"flex-basis","auto")]))])),a(U,x(p.cW),$([a(g,"align-self","stretch !important")])),a(U,x(p.d8),$([a(g,"align-self","stretch !important")])),a(U,x(p.dJ),$([a(g,"flex-grow","100000")])),a(U,x(p.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(U,"u:first-of-type."+p.fC,$([a(g,"flex-grow","1")])),a(U,"s:first-of-type."+p.fA,$([a(g,"flex-grow","1"),a(U,x(p.fx),$([a(g,"margin-left","auto !important")]))])),a(U,"s:last-of-type."+p.fA,$([a(g,"flex-grow","1"),a(U,x(p.fx),$([a(g,"margin-right","auto !important")]))])),a(U,"s:only-of-type."+p.fA,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(p.fA+" ~ u"),$([a(g,"flex-grow","0")])),a(U,"u:first-of-type."+(p.fC+(" ~ s."+p.fA)),$([a(g,"flex-grow","0")])),qa(function(e){switch(e){case 0:return z($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return z($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return z($([a(g,"justify-content","flex-end")]),D);case 3:return z($([a(g,"justify-content","flex-start")]),D);case 4:return z($([a(g,"justify-content","center")]),D);default:return z($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(F,x(p.hM),$([a(g,"justify-content","space-between")])),a(F,x(p.ch),$([a(g,"align-items","baseline")]))])),a(F,x(p.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(U,x(p.fH),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(F,x(p.d7),$([a(g,"flex-basis","auto")]))])),a(U,x(p.cW),$([a(g,"flex-grow","100000")])),a(U,x(p.dJ),$([a(g,"width","100%")])),a(U,x(p.fr),$([a(g,"width","100%")])),a(U,x(p.dI),$([a(g,"align-self","flex-start")])),a(U,"u:first-of-type."+p.fz,$([a(g,"flex-grow","1")])),a(U,"s:first-of-type."+p.fB,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(U,"s:last-of-type."+p.fB,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(U,"s:only-of-type."+p.fB,$([a(g,"flex-grow","1"),a(U,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(U,"s:last-of-type."+(p.fB+" ~ u"),$([a(g,"flex-grow","0")])),a(U,"u:first-of-type."+(p.fz+(" ~ s."+p.fB)),$([a(g,"flex-grow","0")])),qa(function(e){switch(e){case 0:return z($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return z($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return z($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return z($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return z($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return z($([a(g,"justify-content","center")]),D)}}),a(U,x(p.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(F,x(p.hM),$([a(g,"justify-content","space-between")]))])),a(F,x(p.gB),$([a(g,"display","-ms-grid"),a(U,".gp",$([a(U,x(p.fH),$([a(g,"width","100%")]))])),a(Vg,z("display","grid"),$([z("display","grid")])),Ng(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(F,x(p.eT),$([a(g,"display","block"),a(U,x(p.fH+":first-child"),$([a(g,"margin","0 !important")])),a(U,x(p.fH+(_i(3)+(":first-child + ."+p.fH))),$([a(g,"margin","0 !important")])),a(U,x(p.fH+(_i(2)+(":first-child + ."+p.fH))),$([a(g,"margin","0 !important")])),qa(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(g,"float","right"),a(F,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return z(D,$([a(g,"float","left"),a(F,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),a(F,x(p.gS),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(F,x(p.gV),$([a(F,x(p.hJ),$([a(g,"flex-basis","auto")]))])),a(F,x(p.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(U,x(p.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(F,x(p.eU),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(F,x(p.cU),$([a(g,"z-index","0"),a(U,x(p.fN),$([a(g,"z-index","-1")]))])),a(so,x(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(so,x(p.eU),$([a(g,"display","inline"),a(F,"::after",$([a(g,"content","none")])),a(F,"::before",$([a(g,"content","none")]))])),a(so,x(p.hJ),$([a(g,"display","inline"),a(g,"white-space","normal"),a(F,x(p.fq),$([a(g,"display","inline-block")])),a(F,x(p.gO),$([a(g,"display","flex")])),a(F,x(p.fN),$([a(g,"display","flex")])),a(F,x(p.fu),$([a(g,"display","flex")])),a(F,x(p.fO),$([a(g,"display","flex")])),a(F,x(p.hf),$([a(g,"display","flex")])),a(F,x(p.he),$([a(g,"display","flex")])),a(U,x(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(U,x(p.af),$([a(g,"display","inline")])),a(U,x(p.aw),$([a(g,"display","inline-flex")])),a(U,x(p.gB),$([a(g,"display","inline-grid")])),qa(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(g,"float","right")]));case 3:return z(D,$([a(g,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),a(F,".hidden",$([a(g,"display","none")])),a(F,x(p.h8),$([a(g,"font-weight","100")])),a(F,x(p.h$),$([a(g,"font-weight","200")])),a(F,x(p.h3),$([a(g,"font-weight","300")])),a(F,x(p.h5),$([a(g,"font-weight","400")])),a(F,x(p.h4),$([a(g,"font-weight","500")])),a(F,x(p.h7),$([a(g,"font-weight","600")])),a(F,x(p.fS),$([a(g,"font-weight","700")])),a(F,x(p.h_),$([a(g,"font-weight","800")])),a(F,x(p.h0),$([a(g,"font-weight","900")])),a(F,x(p.g$),$([a(g,"font-style","italic")])),a(F,x(p.hS),$([a(g,"text-decoration","line-through")])),a(F,x(p.ig),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(F,X(x(p.ig),x(p.hS)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(F,x(p.h9),$([a(g,"font-style","normal")])),a(F,x(p.h1),$([a(g,"text-align","justify")])),a(F,x(p.cD),$([a(g,"text-align","justify-all")])),a(F,x(p.hZ),$([a(g,"text-align","center")])),a(F,x(p.h6),$([a(g,"text-align","right")])),a(F,x(p.h2),$([a(g,"text-align","left")])),a(F,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),dn=function(e){return $([a(gr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(gr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},Gg=sr($([a(re,function(e){return a(gr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(Yr,0,6)),a(re,function(e){return a(gr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(Yr,8,32)),a(re,function(e){return a(gr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(Yr,0,24)),$([a(gr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(gr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),dn("zero"),dn("onum"),dn("liga"),dn("dlig"),dn("ordn"),dn("tnum"),dn("afrc"),dn("frac")])),Wg=`
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

`))),Ug=`
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
`,Xg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(x(p.fH)+(x(p.af)+(" > "+(x(p.fH)+(" { flex-basis: auto !important; } "+(x(p.fH)+(x(p.af)+(" > "+(x(p.fH)+(x(p.b8)+(" { flex-basis: auto !important; }}"+(Ug+(Jg+(Yg+(qg+Wg))))))))))))))),xa=function(e){return a(ce,"",e)},ma=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),sa=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return Re(o,{aE:a(P,z(l,c),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,d=i.b;return Re(o,{G:a(P,{b5:`
}`,G:D,aE:d,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Re(o,{G:a(P,a(sa,a(ma,n.ag+(" + "+b),""),s),o.G)});case 1:var w=i.a,_=i.b;return Re(o,{G:a(P,a(sa,a(ma,n.ag+(" > "+w),""),_),o.G)});case 2:var w=i.a,_=i.b;return Re(o,{G:a(P,a(sa,a(ma,n.ag+(" "+w),""),_),o.G)});case 4:var S=i.a,C=i.b;return Re(o,{G:a(P,a(sa,a(ma,X(n.ag,S),""),C),o.G)});default:var y=i.a;return Re(o,{G:a(P,a(sa,a(ma,n.ag,""),y),o.G)})}});return h(er,t,n,r)}),Zg=function(e){var r=function(i){return xa(a(re,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return X(n(o),xa(a(re,t,o.G)))};return xa(a(re,t,h(er,v(function(i,o){var l=i.a,c=i.b;return a(P,a(sa,a(ma,l,""),c),o)}),D,e)))},pu=X(Xg,Zg(X(Hg,Gg))),Sn=Ro,Bv=function(e){var r=e.eN;switch(r){case 0:return h(Gr,"div",D,$([h(Gr,"style",D,$([Sn(pu)]))]));case 1:return Sn("");default:return h(Gr,"elm-ui-static-rules",$([a(Iv,"rules",Hl(pu))]),D)}},Kg=v(function(e,r){return h(Ne,id(e),nd(),r)}),Qg=function(e){return h(Ne,v(function(r,n){var t=r.a,i=r.b;return h(td,t,i,n)}),ad(),e)},eh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.ha;return'"'+(r+'"')}},rh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},nh=function(e){if(e.$===5){var r=e.a;return a(St,rh,r.fk)}else return!1},Sa=v(function(e,r){return be(e,r)<0?e:r}),ja=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ae=ee(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Ne,ja(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gJ;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Ne,ja(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Ne,ja(!1),"",t)+`
}`))])}case 0:var l=h(Ne,ja(!1),"",t);return $([n+("-fs:focus {"+(l+`
}`)),"."+(p.fH+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(x(p.fH)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(h(Ne,ja(!1),"",t)+`
}`))])}}),ah=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},th=function(e){if(e.$===5){var r=e.a;return Y(a(ce,", ",a(re,ah,r.fk)))}else return J},ih=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,w=s.a,_=s.b,S=s.c,C=e.d,y="translate3d("+(ve(l)+("px, "+(ve(c)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(d)+(", "+(ve(b)+")"))))),G="rotate3d("+(ve(w)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(y+(" "+(T+(" "+G))))}},Jl=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(Ae,e,n,t,i);case 13:var u=r.a,b=r.b;return L(Ae,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,l=a(nr,0,a(Sa,1,1-o));return L(Ae,e,n,"."+u,$([a(ue,"opacity",ve(l))]));case 2:var c=r.a;return L(Ae,e,n,".font-size-"+k(c),$([a(ue,"font-size",k(c)+"px")]));case 1:var u=r.a,f=r.b,m=a(ce,", ",a(xn,th,f)),d=$([a(ue,"font-family",a(ce,", ",a(re,eh,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(St,nh,f)?"small-caps":"normal")]);return L(Ae,e,n,"."+u,d);case 3:var se=r.a,b=r.b,oo=r.c;return L(Ae,e,n,"."+se,$([a(ue,b,oo)]));case 4:var se=r.a,b=r.b,s=r.c;return L(Ae,e,n,"."+se,$([a(ue,b,ha(s))]));case 5:var q=r.a,w=r.b,_=r.c,S=k(_)+"px",C=k(w)+"px",y="."+p.af,T="."+(p.dK+y),pe="."+p.dS,G="."+p.eU,K="."+p.eT,Se="."+p.dR,ae=ve(_/2)+"px",te=ve(w/2)+"px",ie="."+p.aw,se="."+q,ne="."+p.fH;return sr($([L(Ae,e,n,se+(y+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-left",C)])),L(Ae,e,n,se+(T+(" > "+ne)),$([a(ue,"margin",ae+(" "+te))])),L(Ae,e,n,se+(ie+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),L(Ae,e,n,se+(K+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),L(Ae,e,n,se+(K+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Ae,e,n,se+(K+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Ae,e,n,X(se,G),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),L(Ae,e,n,"textarea"+(ne+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),L(Ae,e,n,se+(G+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Ae,e,n,se+(G+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Ae,e,n,se+(G+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),L(Ae,e,n,se+(G+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ae,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ae,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Xe,Na,Qr){e:for(;;)switch(Qr.$){case 0:var Km=Qr.a;return k(Km)+"px";case 1:var Ar=z(Xe,Na);if(Ar.a.$===1){if(Ar.b.$===1)return Ar.a,Ar.b,"max-content";Ar.a;var Bn=Ar.b.a;return"minmax(max-content, "+(k(Bn)+"px)")}else if(Ar.b.$===1){var Vn=Ar.a.a;return Ar.b,"minmax("+(k(Vn)+"px, max-content)")}else{var Vn=Ar.a.a,Bn=Ar.b.a;return"minmax("+(k(Vn)+("px, "+(k(Bn)+"px)")))}case 2:var Hc=Qr.a,Fr=z(Xe,Na);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(Hc)+"fr";Fr.a;var Bn=Fr.b.a;return"minmax(max-content, "+(k(Bn)+"px)")}else if(Fr.b.$===1){var Vn=Fr.a.a;return Fr.b,"minmax("+(k(Vn)+("px, "+(k(Hc)+"frfr)")))}else{var Vn=Fr.a.a,Bn=Fr.b.a;return"minmax("+(k(Vn)+("px, "+(k(Bn)+"px)")))}case 3:var lo=Qr.a,co=Qr.b,uo=Y(lo),$o=Na,vo=co;Xe=uo,Na=$o,Qr=vo;continue e;default:var lo=Qr.a,co=Qr.b,uo=Xe,$o=Y(lo),vo=co;Xe=uo,Na=$o,Qr=vo;continue e}}),I=function(Xe){return h(Te,J,J,Xe)};I(me.hN.a);var E=I(me.hN.b),B=function(Xe){return"grid-template-rows: "+(Xe+";")}(a(ce," ",a(re,I,me.hz))),V=function(Xe){return"-ms-grid-rows: "+(Xe+";")}(a(ce,E,a(re,I,me.ak))),R=function(Xe){return"-ms-grid-columns: "+(Xe+";")}(a(ce,E,a(re,I,me.ak))),N="grid-row-gap:"+(I(me.hN.b)+";"),j="grid-column-gap:"+(I(me.hN.a)+";"),H=function(Xe){return"grid-template-columns: "+(Xe+";")}(a(ce," ",a(re,I,me.ak))),se=".grid-rows-"+(a(ce,"-",a(re,Wr,me.hz))+("-cols-"+(a(ce,"-",a(re,Wr,me.ak))+("-space-x-"+(Wr(me.hN.a)+("-space-y-"+Wr(me.hN.b))))))),ao=se+("{"+(H+(B+(j+(N+"}"))))),to="@supports (display:grid) {"+(ao+"}"),io=se+("{"+(R+(V+"}")));return $([io,to]);case 9:var je=r.a,Et=a(ce," ",$(["-ms-grid-row: "+(k(je.af)+";"),"-ms-grid-row-span: "+(k(je.gG)+";"),"-ms-grid-column: "+(k(je.f8)+";"),"-ms-grid-column-span: "+(k(je.im)+";")])),no=a(ce," ",$(["grid-row: "+(k(je.af)+(" / "+(k(je.af+je.gG)+";"))),"grid-column: "+(k(je.f8)+(" / "+(k(je.f8+je.im)+";")))])),se=".grid-pos-"+(k(je.af)+("-"+(k(je.f8)+("-"+(k(je.im)+("-"+k(je.gG))))))),ao=se+("{"+(no+"}")),to="@supports (display:grid) {"+(ao+"}"),io=se+("{"+(Et+"}"));return $([io,to]);case 11:var se=r.a,Ym=r.b,Xm=function(Xe){return h(Jl,e,Xe,Y(se))};return a(Ba,Xm,Ym);default:var jc=r.a,oo=ih(jc),se=Wl(jc),Bt=z(se,oo);if(!Bt.a.$&&!Bt.b.$){var q=Bt.a.a,Zm=Bt.b.a;return L(Ae,e,n,"."+q,$([a(ue,"transform",Zm)]))}else return D}}),oh=v(function(e,r){return Qg(a(re,function(n){var t=h(Jl,e,n,J);return z($t(n),a(Kg,Hl,t))},r))}),wi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ce,"",a(re,n,r))+"}"))}),gu=M(function(e,r,n){var t=n.a,i=n.b;return $([a(wi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(wi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),lh=M(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(ce," ",X(h(gu,o,p.hK,i),h(gu,o,p.gx,t)))}),ch=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(ce," ",$([a(wi,"."+(n+("."+(p.hK+(", "+("."+(n+(" ."+p.hK))))))),$([z("line-height","1")])),a(wi,"."+(n+("."+(p.hK+("> ."+(p.Y+(", ."+(n+(" ."+(p.hK+(" > ."+p.Y)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),hu=M(function(e,r,n){return{gG:r/e,bi:e,fl:n}}),Vv=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(P,n,t):t}),D,r)}),uh=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Ne,nr,r,n))}else return J},bu=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Ne,Sa,r,n))}else return J},_u=function(e){var r=$([e.f_,e.fM,e.gi,e.g5]),n=a(Fe,e.gi,bu(r)),t=a(Fe,e.fM,bu(a(Vv,function(f){return!_e(f,n)},r))),i=a(Fe,e.f_,uh(r)),o=1/(i-t),l=1-i,c=1/(i-n),u=1-i;return{f_:h(hu,o,i-t,l),d5:h(hu,c,i-n,u)}},wu=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ve(e.gG)),z("vertical-align",ve(e.fl)+"em"),z("font-size",ve(e.bi)+"em")]))},$h=function(e){return h(Ne,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fv;if(i.$===1)return n;var o=i.a;return Y(z(wu(function(l){return l.d5}(_u(o))),wu(function(l){return l.f_}(_u(o)))))}else return n;else return n}),J,e)},vh=function(e){var r=function(o){if(o.$===4){var l=o.b;return Y("@import url('"+(l+"');"))}else return J},n=function(o){o.a;var l=o.b,c=a(ce,`
`,a(xn,r,l));return c},t=a(re,ov,e),i=function(o){var l=o.a,c=o.b,u=$h(c);if(u.$===1)return a(ce,"",a(re,ch(l),t));var f=u.a;return a(ce,"",a(re,a(lh,l,f),t))};return X(a(ce,`
`,a(re,n,e)),a(ce,`
`,a(re,i,e)))},fh=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(z(r,n))}else return J},yu=v(function(e,r){var n=v(function(l,c){return{cz:X(c.cz,h(Jl,e,l,J)),bT:function(){var u=fh(l);if(u.$===1)return c.bT;var f=u.a;return a(P,f,c.bT)}()}}),t=h(Ne,n,{cz:D,bT:D},r),i=t.bT,o=t.cz;return X(vh(i),xa(o))}),Rv=v(function(e,r){var n=e.eN;switch(n){case 0:return h(Gr,"div",D,$([h(Gr,"style",D,$([Sn(a(yu,e,r))]))]));case 1:return h(Gr,"div",D,$([h(Gr,"style",D,$([Sn(a(yu,e,r))]))]));default:return h(Gr,"elm-ui-rules",$([a(Iv,"rules",a(oh,e,r))]),D)}}),xu=ee(function(e,r,n,t){var i=a(Rv,r,h(Ne,Av,z(Dv,Fv(r.gw)),n).b);return e?a(P,z("static-stylesheet",Bv(r)),a(P,z("dynamic-stylesheet",i),t)):a(P,z("dynamic-stylesheet",i),t)}),Su=ee(function(e,r,n,t){var i=a(Rv,r,h(Ne,Av,z(Dv,Fv(r.gw)),n).b);return e?a(P,Bv(r),a(P,i,t)):a(P,i,t)}),el=ye(45),vt=ye(37),Ov=function(e){return Sd(T$(e))},mh=sn("p"),lr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),Cu=sn("s"),zu=sn("u"),rl=ye(44),ft=ye(39),jt=xr(function(e,r,n,t,i,o){var l=v(function(u,f){if(t.$===1){var m=t.a;return h(Ov,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return L(xu,!1,b,s,m);default:var b=i.a,s=i.b;return L(xu,!0,b,s,m)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return Ta;case"p":return mh;default:return Gr(u)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,s=i.b;return L(Su,!1,b,s,d);default:var b=i.a,s=i.b;return L(Su,!0,b,s,d)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var u=r.a;return a(l,u,n);default:var u=r.a,f=r.b;return h(Gr,u,n,$([a(l,f,$([Lr(p.fH+(" "+p.hJ))]))]))}}();switch(o){case 0:return a(lr,ft,e)&&!a(lr,rl,e)?c:a(lr,Mv,e)?a(zu,$([Lr(a(ce," ",$([p.fH,p.hJ,p.b8,p.ax,p.fC])))]),$([c])):a(lr,Tv,e)?a(Cu,$([Lr(a(ce," ",$([p.fH,p.hJ,p.b8,p.ax,p.fA])))]),$([c])):c;case 1:return a(lr,vt,e)&&!a(lr,el,e)?c:a(lr,kv,e)?a(Cu,$([Lr(a(ce," ",$([p.fH,p.hJ,p.b8,p.fB])))]),$([c])):a(lr,Pv,e)?a(zu,$([Lr(a(ce," ",$([p.fH,p.hJ,p.b8,p.fz])))]),$([c])):c;default:return c}}),gn=function(e){return!e.b},ql=Sn,sh=p.fH+(" "+(p.Y+(" "+(p.dI+(" "+p.cV))))),mt=function(e){return a(Ta,$([Lr(sh)]),$([ql(e)]))},dh=p.fH+(" "+(p.Y+(" "+(p.dJ+(" "+p.cW))))),Lu=function(e){return a(Ta,$([Lr(dh)]),$([ql(e)]))},ph=M(function(e,r,n){var t=v(function(w,_){var S=w.a,C=w.b,y=_.a,T=_.b;switch(C.$){case 0:var G=C.a;return _e(e,Nt),z(a(P,z(S,G(e)),y),T);case 1:var K=C.a;return _e(e,Nt),z(a(P,z(S,a(K.gK,Nn,e)),y),gn(T)?K.hT:X(K.hT,T));case 2:var ae=C.a;return z(a(P,z(S,_e(e,yr)?Lu(ae):mt(ae)),y),T);default:return z(y,T)}}),i=v(function(w,_){var S=_.a,C=_.b;switch(w.$){case 0:var y=w.a;return _e(e,Nt),z(a(P,y(e),S),C);case 1:var T=w.a;return _e(e,Nt),z(a(P,a(T.gK,Nn,e),S),gn(C)?T.hT:X(T.hT,C));case 2:var G=w.a;return z(a(P,_e(e,yr)?Lu(G):mt(G),S),C);default:return z(S,C)}});if(r.$===1){var o=r.a,l=h(er,t,z(D,D),o),c=l.a,u=l.b,f=gn(u)?n.hT:X(n.hT,u);if(f.b){var m=f;return Ko({gK:L(jt,n.aR,n.aT,n.aJ,fu(h(su,"nearby-element-pls",c,n.aM))),hT:m})}else return ut(A(jt,n.aR,n.aT,n.aJ,fu(h(su,"nearby-element-pls",c,n.aM)),Nn))}else{var d=r.a,b=h(er,i,z(D,D),d),s=b.a,u=b.b,f=gn(u)?n.hT:X(n.hT,u);if(f.b){var m=f;return Ko({gK:L(jt,n.aR,n.aT,n.aJ,rr(a(mu,s,n.aM))),hT:m})}else return ut(A(jt,n.aR,n.aT,n.aJ,rr(a(mu,s,n.aM)),Nn))}}),$r=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),gh=function(e){return{$:10,a:e}},yi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(yi,n,o|t)}else{var i=e.a;return a(yi,i|n,t)}}),Pu=function(e){return{$:1,a:e}},Ht=v(function(e,r){return{$:3,a:e,b:r}}),Mu=function(e){return{$:2,a:e}},hh=v(function(e,r){return a(Ta,$([Lr(function(){switch(e){case 0:return a(ce," ",$([p.be,p.hJ,p.fu]));case 1:return a(ce," ",$([p.be,p.hJ,p.fO]));case 2:return a(ce," ",$([p.be,p.hJ,p.hf]));case 3:return a(ce," ",$([p.be,p.hJ,p.he]));case 4:return a(ce," ",$([p.be,p.hJ,p.gO]));default:return a(ce," ",$([p.be,p.hJ,p.fN]))}}())]),$([function(){switch(r.$){case 3:return Sn("");case 2:var n=r.a;return mt(n);case 0:var t=r.a;return t(yr);default:var i=r.a;return a(i.gK,Nn,yr)}}()]))}),bh=M(function(e,r,n){var t=a(hh,e,r);switch(n.$){case 0:return e===5?Pu($([t])):Mu($([t]));case 1:var i=n.a;return e===5?Pu(a(P,t,i)):a(Ht,i,$([t]));case 2:var o=n.a;return e===5?a(Ht,$([t]),o):Mu(a(P,t,o));default:var i=n.a,o=n.b;return e===5?a(Ht,a(P,t,i),o):a(Ht,i,a(P,t,o))}}),Tu=v(function(e,r){return{$:2,a:e,b:r}}),hn=function(e){return{$:1,a:e}},Rn=v(function(e,r){switch(r.$){case 0:return hn(e);case 1:var n=r.a;return a(Tu,n,e);default:var t=r.a,i=r.b;return a(Tu,t,i)}}),_h=function(e){switch(e){case 0:return p.cI+(" "+p.dR);case 2:return p.cI+(" "+p.dS);default:return p.cI+(" "+p.fx)}},wh=function(e){switch(e){case 0:return p.cJ+(" "+p.fD);case 2:return p.cJ+(" "+p.fw);default:return p.cJ+(" "+p.fy)}},Ya=v(function(e,r){return a(Rr,Md(e),k$(r))}),Nr=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),pn=function(e){return{$:1,a:e}},yh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return pn(O(u,0,0));case 1:var f=r.a;return pn(O(0,f,0));case 2:var m=r.a;return pn(O(0,0,m));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return L(Nr,O(0,0,0),O(1,1,1),n,s);default:var n=r.a;return L(Nr,O(0,0,0),n,O(0,0,1),0)}case 1:var c=e.a,u=c.a,f=c.b,m=c.c;switch(r.$){case 0:var t=r.a;return pn(O(t,f,m));case 1:var i=r.a;return pn(O(u,i,m));case 2:var o=r.a;return pn(O(u,f,o));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return L(Nr,c,O(1,1,1),n,s);default:var l=r.a;return L(Nr,c,l,O(0,0,1),0)}default:var c=e.a,u=c.a,f=c.b,m=c.c,d=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return L(Nr,O(t,f,m),d,b,s);case 1:var i=r.a;return L(Nr,O(u,i,m),d,b,s);case 2:var o=r.a;return L(Nr,O(u,f,o),d,b,s);case 3:var w=r.a;return L(Nr,w,d,b,s);case 4:var _=r.a,S=r.b;return L(Nr,c,d,_,S);default:var C=r.a;return L(Nr,c,C,b,s)}}}),ua=ye(7),Nv=ye(36),ku=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(yi,n|i,t|o)}),tn=a(yi,0,0),nl=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return O(tn,p.d7+(" "+t),$([h($r,t,"height",n+"px")]));case 1:return O(a(ge,Nv,tn),p.cV,D);case 2:var i=e.a;return i===1?O(a(ge,vt,tn),p.cW,D):O(a(ge,vt,tn),p.d8+(" height-fill-"+k(i)),$([h($r,p.fH+("."+(p.aw+(" > "+x("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h($r,f,"min-height",k(o)+"px !important"),l=nl(u),b=l.a,s=l.b,w=l.c;return O(a(ge,el,b),f+(" "+s),a(P,m,w));default:var c=e.a,u=e.b,f="max-height-"+k(c),m=h($r,f,"max-height",k(c)+"px"),d=nl(u),b=d.a,s=d.b,w=d.c;return O(a(ge,el,b),f+(" "+s),a(P,m,w))}},jv=ye(38),al=function(e){switch(e.$){case 0:var r=e.a;return O(tn,p.fq+(" width-px-"+k(r)),$([h($r,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return O(a(ge,jv,tn),p.dI,D);case 2:var n=e.a;return n===1?O(a(ge,ft,tn),p.dJ,D):O(a(ge,ft,tn),p.fr+(" width-fill-"+k(n)),$([h($r,p.fH+("."+(p.af+(" > "+x("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,l=e.b,c="min-width-"+k(t),u=h($r,c,"min-width",k(t)+"px"),i=al(l),m=i.a,d=i.b,b=i.c;return O(a(ge,rl,m),c+(" "+d),a(P,u,b));default:var o=e.a,l=e.b,c="max-width-"+k(o),u=h($r,c,"max-width",k(o)+"px"),f=al(l),m=f.a,d=f.b,b=f.c;return O(a(ge,rl,m),c+(" "+d),a(P,u,b))}},Ri=ye(27),xh=v(function(e,r){if(_e(e,Ri))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return _e(i,l)&&_e(i,o)&&_e(i,c)&&i>=0&&i<=24;default:return!1}}),$a=ye(6),Du=ye(30),Au=ye(29),Sh=Pe(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var m=c.a,d=c.b;switch(m.$){case 0:var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 3:var _=m.a,b=m.b;if(a(lr,_,n)){var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else{var I=b+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}case 1:var s=m.a,I=e,E=r,B=n,V=t,R=i,N=a(P,s,o),j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 4:var _=m.a,w=m.b;if(a(lr,_,n)){var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else if(a(xh,_,w)){var I=$t(w)+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else{var I=$t(w)+(" "+e),E=r,B=a(ge,_,n),V=t,R=a(P,w,i),N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}case 10:var _=m.a,S=m.b,I=e,E=r,B=a(ge,_,n),V=a(yh,t,S),R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 7:var C=m.a;if(a(lr,$a,n)){var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else switch(C.$){case 0:var y=C.a,I=p.fq+(" width-px-"+k(y))+(" "+e),E=r,B=a(ge,$a,n),V=t,R=a(P,h($r,"width-px-"+k(y),"width",k(y)+"px"),i),N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 1:var I=e+(" "+p.dI),E=r,B=a(ge,jv,a(ge,$a,n)),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 2:var T=C.a;if(T===1){var I=e+(" "+p.dJ),E=r,B=a(ge,ft,a(ge,$a,n)),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else{var I=e+(" "+(p.fr+(" width-fill-"+k(T)))),E=r,B=a(ge,ft,a(ge,$a,n)),V=t,R=a(P,h($r,p.fH+("."+(p.af+(" > "+x("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}default:var G=al(C),K=G.a,ae=G.b,Te=G.c,I=e+(" "+ae),E=r,B=a(ku,K,a(ge,$a,n)),V=t,R=X(Te,i),N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}case 8:var te=m.a;if(a(lr,ua,n)){var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else switch(te.$){case 0:var y=te.a,ie=k(y)+"px",ne="height-px-"+ie,I=p.d7+(" "+(ne+(" "+e))),E=r,B=a(ge,ua,n),V=t,R=a(P,h($r,ne,"height ",ie),i),N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 1:var I=p.cV+(" "+e),E=r,B=a(ge,Nv,a(ge,ua,n)),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 2:var T=te.a;if(T===1){var I=p.cW+(" "+e),E=r,B=a(ge,vt,a(ge,ua,n)),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else{var I=e+(" "+(p.d8+(" height-fill-"+k(T)))),E=r,B=a(ge,vt,a(ge,ua,n)),V=t,R=a(P,h($r,p.fH+("."+(p.aw+(" > "+x("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}default:var q=nl(te),K=q.a,ae=q.b,Te=q.c,I=e+(" "+ae),E=r,B=a(ku,K,a(ge,ua,n)),V=t,R=X(Te,i),N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}case 2:var de=m.a;switch(de.$){case 0:var I=e,E=a(Rn,"main",r),B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 1:var I=e,E=a(Rn,"nav",r),B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 2:var I=e,E=a(Rn,"footer",r),B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 3:var I=e,E=a(Rn,"aside",r),B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 4:var pe=de.a;if(pe<=1){var I=e,E=a(Rn,"h1",r),B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else if(pe<7){var I=e,E=a(Rn,"h"+k(pe),r),B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else{var I=e,E=a(Rn,"h6",r),B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}case 9:var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 8:var I=e,E=r,B=n,V=t,R=i,N=a(P,a(Ya,"role","button"),o),j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 5:var Me=de.a,I=e,E=r,B=n,V=t,R=i,N=a(P,a(Ya,"aria-label",Me),o),j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 6:var I=e,E=r,B=n,V=t,R=i,N=a(P,a(Ya,"aria-live","polite"),o),j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;default:var I=e,E=r,B=n,V=t,R=i,N=a(P,a(Ya,"aria-live","assertive"),o),j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var no=me.a;return X(i,no.hT)}}(),I=e,E=r,B=n,V=t,R=Te,N=o,j=h(bh,Se,me,l),H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e;case 6:var je=m.a;if(a(lr,Du,n)){var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else{var I=_h(je)+(" "+e),E=r,B=function(se){switch(je){case 1:return a(ge,Tv,se);case 2:return a(ge,Mv,se);default:return se}}(a(ge,Du,n)),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}default:var Et=m.a;if(a(lr,Au,n)){var I=e,E=r,B=n,V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}else{var I=wh(Et)+(" "+e),E=r,B=function(se){switch(Et){case 1:return a(ge,kv,se);case 2:return a(ge,Pv,se);default:return se}}(a(ge,Au,n)),V=t,R=i,N=o,j=l,H=d;e=I,r=E,n=B,t=V,i=R,o=N,l=j,c=H;continue e}}}else{var u=Wl(t);if(u.$===1)return{aJ:a(P,Lr(e),o),aM:l,aR:n,aT:r,hT:i};var f=u.a;return{aJ:a(P,Lr(e+(" "+f)),o),aM:l,aR:n,aT:r,hT:a(P,gh(t),i)}}}),Ch={$:0},zh=Ch,ur=ee(function(e,r,n,t){return h(ph,e,t,bt(Sh,kg(e),r,tn,zh,D,D,Sg,mr(n)))}),on=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Lh={fL:J,fT:J,hF:Y({a2:0,b6:L(on,155/255,203/255,1,1),eQ:z(0,0),bi:3})},Ph=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gJ;return l.$===1?Re(i,{gJ:Y(o)}):i;case 1:var c=t.a,u=i.gw;return u.$===1?Re(i,{gw:Y(c)}):i;default:var f=t.a,m=i.eN;return m.$===1?Re(i,{eN:Y(f)}):i}}),n=function(t){return{gw:function(){var i=t.gw;if(i.$===1)return Lh;var o=i.a;return o}(),gJ:function(){var i=t.gJ;if(i.$===1)return 1;var o=i.a;return o}(),eN:function(){var i=t.eN;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gw:J,gJ:J,eN:J},e))},Mh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(yr);case 1:var n=r.a.hT,t=r.a.gK;return a(t,e(n),yr);case 2:var i=r.a;return mt(i);default:return mt("")}}),Th=M(function(e,r,n){var t=Ph(e),i=function(){var o=t.eN;return o===1?Lv(t):yg(t)}();return a(Mh,i,L(ur,yr,aa,r,rr($([n]))))}),st=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Hv=v(function(e,r){return{$:1,a:e,b:r}}),Gv=function(e){return{$:2,a:e}},kh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),po=function(e){return{$:3,a:e}},Wv=ye(8),Uv=ye(14),Jv=ye(5),qv=ye(4),ka=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ve(r)+("-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))))},ei=Fs,go=As,Yv=v(function(e,r){return X(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ce,"-",go(ei(n)));case 4:var n=e.a;return e.b,a(ce,"-",go(ei(n)));default:var n=e.a.ha;return a(ce,"-",go(ei(n)))}}())}),Dh=function(){var e=$([po("Open Sans"),po("Helvetica"),po("Verdana"),kh]);return $([a(Ce,Wv,h(st,"bg-"+ka(L(on,1,1,1,0)),"background-color",L(on,1,1,1,0))),a(Ce,Uv,h(st,"fc-"+ka(L(on,0,0,0,1)),"color",L(on,0,0,0,1))),a(Ce,qv,Gv(20)),a(Ce,Jv,a(Hv,h(Ne,Yv,"font-",e),e))])}(),Ah=M(function(e,r,n){var t=e.hj;return h(Th,t,a(P,_r(a(ce," ",$([p.hy,p.fH,p.hJ]))),X(Dh,r)),n)}),Xv={$:3},Zv=function(e){return{$:2,a:e}},tl=zd,Kv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Ko({gK:v(function(o,l){return a(tl,e,a(n.gK,o,l))}),hT:n.hT});case 0:var t=r.a;return ut(a(Ct,tl(e),t));case 2:var i=r.a;return Zv(i);default:return Xv}}),Yl=Kv,Fh=tl,Ih=function(e){return{$:0,a:e}},De=Ih,Eh=Pd,br=Eh,Qv={$:1},Oi=function(e){return{$:5,a:e}},ef=Oi(0),Or=M(function(e,r,n){return L(on,e/255,r/255,n/255,1)}),rf=h(Or,0,0,0),Bh=Rr("d"),Vh=Rr("fill"),Rh=Rr("height"),nf=P$("http://www.w3.org/2000/svg"),Oh=nf("path"),Nh=nf("svg"),jh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},Hh=function(e){var r=jh(e);return"rgba("+(k(Be(r.hs*255))+(","+k(Be(r.gz*255))+(","+k(Be(r.fP*255))+(","+ve(r.fE)+")"))))},Gh=Rr("viewBox"),Wh=Rr("width"),ba=M(function(e,r,n){return a(Nh,$([Gh("0 0 100 100"),Wh(k(e)),Rh(k(e))]),$([a(Oh,$([Bh(n),Vh(Hh(r))]),D)]))}),Uh={$:1},dr=Uh,af=function(e){return{$:7,a:e}},le=af,ze=v(function(e,r){return L(ur,yr,aa,a(P,le(dr),a(P,xe(dr),e)),rr($([r])))}),tf=function(e){return{$:2,a:e}},we=tf(1),Hn={gl:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gy:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gF:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hm:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hn:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hr:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hL:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",$8:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ii:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",ft:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ca={cZ:260,bE:54},cn=function(e){return a(Ce,Wv,h(st,"bg-"+ka(e),"background-color",e))},Jh=ye(28),Cn=function(e){return a(Ce,Jh,h(st,"bc-"+ka(e),"border-color",e))},ri=1,Tr=v(function(e,r){return L(ur,ri,aa,a(P,_r(p.ga+(" "+p.bt)),a(P,xe(dr),a(P,le(dr),e))),rr(r))}),qh=h(Or,83,83,83),of=ee(function(e,r,n,t){return L(on,e/255,r/255,n/255,t)}),Ni=L(of,56,56,56,.25),Je=Xv,dt=Ye(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),pt=ye(2),Gn=function(e){var r=e;return a(Ce,pt,A(dt,"p-"+k(e),r,r,r,r))},lf=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),cf=ye(3),uf=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),zn=function(e){return a(Ce,cf,h(lf,a(uf,e,e),e,e))},Yh=L(of,0,0,0,0),Xh=function(e){return{$:4,a:e}},il=0,Dn=v(function(e,r){return L(ur,il,aa,a(P,_r(p.bt+(" "+p.ax)),a(P,le(dr),a(P,xe(dr),e))),rr(r))}),Zh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gK(a(Lv,{gw:{fL:J,fT:J,hF:J},gJ:1,eN:0},n.hT));case 2:var t=e.a;return bi(Sn(t));default:return bi(Sn(""))}},Kh=v(function(e,r){return Zh(e(r))}),Qh=Ld,e3=v(function(e,r){return ut(h(Qh,Kh,e,r))}),Ln=function(e){return a(Ce,Uv,h(st,"fc-"+ka(e),"color",e))},Xl=h(Or,195,195,195),An=v(function(e,r){return{$:3,a:e,b:r}}),$f=ye(13),r3=a(An,$f,p.h5),n3=ye(20),vf=a(An,n3,p.hD),ta=function(e){return a(Ce,qv,Gv(e))},Zl=a(An,$f,p.fS),ol=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return A(fe,n,t,a(e,t,i),a(ol,e,o),a(ol,e,l))}),ff=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,pt,A(dt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,pt,A(dt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Pn=function(e){return Zv(e)},a3=function(e){return h(Fl,M(function(r,n,t){return a(P,n,t)}),D,e)},t3=v(function(e,r){return{$:3,a:e,b:r}}),i3=v(function(e,r){return{$:2,a:e,b:r}}),o3=v(function(e,r){return{$:0,a:e,b:r}}),l3=v(function(e,r){return{$:1,a:e,b:r}}),zt=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),c3=L(zt,0/255,0/255,0/255,1),ji=function(e){return{$:6,a:e}},u3=ji(0),Hi=function(e){return{$:2,a:e}},$3={$:6},mf=Hi($3),sf=M(function(e,r,n){if(r.$===1)return r.a,L(ur,ri,hn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,l=L(ur,yr,aa,i,rr($([o])));switch(t){case 2:return L(ur,ri,hn("label"),a(P,_r(p.ch),e),rr($([l,n])));case 3:return L(ur,ri,hn("label"),a(P,_r(p.ch),e),rr($([n,l])));case 0:return L(ur,il,hn("label"),a(P,_r(p.ch),e),rr($([n,l])));default:return L(ur,il,hn("label"),a(P,_r(p.ch),e),rr($([l,n])))}}),ll=Ya,vn=Oi(1),df="Enter",v3=function(e){return{$:5,a:e}},pf=function(e){if(e.$===1){var r=e.a;return Hi(v3(r))}else return Kn},gf=function(e){return e.$===1},f3=function(e){return{$:0,a:e}},Kl=M$,m3=v(function(e,r){return a(Kl,e,f3(r))}),hf=function(e){return a(m3,"click",cr(e))},s3=Ws,d3=function(e){return{$:2,a:e}},p3=v(function(e,r){return a(Kl,e,d3(r))}),bf=function(e){var r=function(t){var i=e(t);if(i.$===1)return s3("No key matched");var o=i.a;return cr(o)},n=a(Q,r,a(Z,"key",Ma));return Ie(a(p3,"keydown",a(si,function(t){return z(t,!0)},n)))},g3=ye(21),Wn=a(An,g3,p.gd),_f=" ",wf=function(e){return a(Rr,"tabIndex",k(e))},h3=a(Ct,Ie,wf),b3=v(function(e,r){var n=r.eh,t=r.gL,i=r.f3,o=r.bI,l=X($([gf(n)?Kn:zn(6),Ie(hf(o(!i))),mf,bf(function(c){return _e(c,df)||_e(c,_f)?Y(o(!i)):J}),h3(0),Wn,u3,le(we)]),e);return h(sf,a(P,Ie(a(ll,"role","checkbox")),a(P,Ie(a(ll,"aria-checked",i?"true":"false")),a(P,pf(n),l))),n,L(ur,yr,aa,$([vn,xe(we),le(dr)]),rr($([t(i)]))))}),_3=M(function(e,r,n){return X(a(ct,e-jn(n),Bi(r)),n)}),xi=fs,yf=function(e){var r=function(n){return n<10?k(n):Bi(gv(87+n))};return e<16?r(e):X(yf(e/16|0),r(a(xi,16,e)))},w3=a(Ze,yf,a(_3,2,"0")),Ql=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},y3=function(e){var r=Ql(e),n=r.hs,t=r.gz,i=r.fP;return a(ce,"",a(P,"#",a(re,a(Ze,Be,w3),$([n*255,t*255,i*255]))))},ec=ye(12),xf=a(An,ec,p.hZ),cl=ji(1),Qn=ms,x3=function(e){return e*Qn/180},S3=function(e){return{$:1,a:e}},rc=v(function(e,r){return{$:10,a:e,b:r}}),C3=ye(26),z3=function(e){return a(rc,C3,S3(-e))},_a=M(function(e,r,n){return L(on,e,r,n,1)}),L3=on,P3=v(function(e,r){return{$:4,a:e,b:r}}),M3=ye(24),T3=function(e){return a(rc,M3,a(P3,O(0,0,1),e))},k3=ye(17),Un=function(e){return a(Ce,k3,h($r,"br-"+k(e),"border-radius",k(e)+"px"))},D3=function(e){return xa($([e.ec?"box-inset":"box-",Ve(e.eQ.a)+"px",Ve(e.eQ.b)+"px",Ve(e.a2)+"px",Ve(e.bi)+"px",ka(e.b6)]))},A3=ye(19),F3=function(e){var r={a2:e.a2,b6:e.b6,ec:!1,eQ:e.eQ,bi:e.bi};return a(Ce,A3,h($r,D3(r),"box-shadow",Qo(r)))},Fu=v(function(e,r){return{$:12,a:e,b:r}}),Iu=ye(0),I3=function(e){return e?a(Ce,Iu,a(Fu,"transparent",1)):a(Ce,Iu,a(Fu,"visible",0))},ho=h(_a,1,1,1),nc=Ye(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Gi=function(e){return a(Ce,Ri,A(nc,"b-"+k(e),e,e,e,e))},E3=v(function(e,r){return a(Ce,Ri,A(nc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Lt=function(e){var r=e.b2,n=e.cE,t=e.g1,i=e.hv;return _e(n,r)&&_e(t,i)?_e(n,i)?Gi(n):a(E3,t,n):a(Ce,Ri,A(nc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},B3=function(e){return a(ze,$([_r("focusable"),le(De(14)),xe(De(14)),Ln(ho),vn,ta(9),xf,Un(3),Cn(e?h(_a,59/255,153/255,252/255):h(_a,211/255,211/255,211/255)),F3({a2:1,b6:e?L(L3,238/255,238/255,238/255,0):h(_a,238/255,238/255,238/255),eQ:z(0,0),bi:1}),cn(e?h(_a,59/255,153/255,252/255):ho),Gi(e?0:1),Zo(a(ze,$([Cn(ho),xe(De(6)),le(De(9)),T3(x3(-45)),cl,vn,z3(1),I3(!e),Lt({b2:2,g1:2,hv:0,cE:0})]),Je))]),Je)},V3=Dr("htmlFor"),ul=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),Si=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return e(n)}}),Sf=ee(function(e,r,n,t){return{gQ:r,g6:e,hd:n,hU:t}}),R3=rp,O3=Ns,N3=v(function(e,r){if(r.$)return ir(e);var n=r.a;return Ge(n)}),j3=ep,H3=function(e){return a(j3,{f$:!1,g9:!1},e)},ac=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return J},G3=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return Ge(e(n))}}),W3=function(e){return{$:2,a:e}},U3=function(e){return{$:0,a:e}},J3=function(e){return{$:1,a:e}},bo=v(function(e,r){return Xr(r)-Xr(e)}),_o=M(function(e,r,n){var t=Xr(n);return be(Xr(e),t)<1&&be(t,Xr(r))<1}),q3=v(function(e,r){var n=function(i){return be(i,e)<0?Ge(i):ir(J3(r))},t=h(_o,"0","9",r)?Ge(a(bo,"0",r)):h(_o,"a","z",r)?Ge(10+a(bo,"a",r)):h(_o,"A","Z",r)?Ge(10+a(bo,"A",r)):ir(U3(r));return a(Si,n,t)}),Cf=v(function(e,r){var n=Ea(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(Si,function(l){return a(Si,function(c){return Ge(l+c*e)},a(Cf,e,o))},a(q3,e,i))}),Y3=v(function(e,r){return 2<=e&&e<=36?a(Cf,e,qo(r)):ir(W3(e))}),X3=Y3(16),Z3=M(function(e,r,n){return L(zt,e,r,n,1)}),K3=ee(function(e,r,n,t){return L(zt,e,r,n,t)}),Va=vs,Q3=v(function(e,r){var n=a(Va,10,e);return Be(r*n)/n}),eb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=pv(n);if(t.b&&!t.b.b){var i=t.a;return O3($([i,i]))}else return n};return a(Ze,ei,a(Ze,function(n){return a(Oe,function(t){return h(R3,1,t,n)},H3(e))},a(Ze,ul(ac),a(Ze,Oe(function(n){return n.hU}),a(Ze,Oe(xn(Br)),a(Ze,N3("Parsing hex regex failed"),Si(function(n){var t=a(re,a(Ze,r,a(Ze,X3,G3(Ja))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,u=c.a.a,f=c.b,m=f.a.a;return Ge(L(K3,i/255,l/255,u/255,a(Q3,2,m/255)))}else break e;else{var i=t.a.a,d=t.b,l=d.a.a,b=d.b,u=b.a.a;return Ge(h(Z3,i/255,l/255,u/255))}else break e;return ir("Parsing ints from hex failed")})))))))}(),rb=Dr("id"),nb=sn("input"),ab=sn("label"),zf=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),tb=zf(0),ib=Dr("name"),ob=function(e){return z(e,!0)},lb=function(e){return{$:1,a:e}},cb=v(function(e,r){return a(Kl,e,lb(r))}),ub=v(function(e,r){return h(er,Z,r,e)}),$b=a(ub,$(["target","value"]),Ma),Lf=function(e){return a(cb,"input",a(si,ob,a(si,e,$b)))},vb=a(An,ec,p.h2),Pf=a(An,ec,p.h6),tc=function(e){return a(zv,5,e)},ic=function(e){return a(Ce,Jv,a(Hv,h(Ne,Yv,"ff-",e),e))},fb=h(Or,195,195,195),Mf=h(Or,69,69,69),mb=zf(2),sb={$:2},oc=sb,db=ye(32),pb=ye(31),Eu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},gb=v(function(e,r){return a(Fe,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return Y(z(i,l))}else return J;else{var i=t.a;return Y(i)}}),J,e))}),Bu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},hb=ye(33),bb=Dr("max"),_b=Dr("min"),wb=v(function(e,r){return a(Ce,cf,h(lf,a(uf,e,r),e,r))}),yb=function(e){return a(Dr,"step",e)},Tf=Dr("type"),kf=Dr("value"),Da=tf,xb=Dd,Df=v(function(e,r){switch(r.$){case 0:return Kn;case 2:var n=r.a;return Hi(n);case 6:var t=r.a;return ji(t);case 5:var i=r.a;return Oi(i);case 7:var t=r.a;return af(t);case 8:var t=r.a;return Sv(t);case 3:var t=r.a,i=r.b;return a(An,t,i);case 4:var o=r.a,l=r.b;return a(Ce,o,l);case 9:var c=r.a,u=r.b;return a(Cv,c,a(Kv,e,u));case 1:var f=r.a;return Ie(a(xb,e,f));default:var m=r.a,d=r.b;return a(rc,m,d)}}),Sb=M(function(e,r,n){return a(Dn,$([le(we),xe(a(Fe,we,n)),vn]),$([a(ze,$([le(Da(Be(e*1e4)))]),Je),a(ze,a(P,vn,a(re,Df(yt),r)),Je),a(ze,$([le(Da(Be(he(1-e)*1e4)))]),Je)]))}),Cb=M(function(e,r,n){return a(Tr,$([xe(we),le(a(Fe,we,n)),cl]),$([a(ze,$([xe(Da(Be(he(1-e)*1e4)))]),Je),a(ze,a(P,cl,a(re,Df(yt),r)),Je),a(ze,$([xe(Da(Be(e*1e4)))]),Je)]))}),Af=v(function(e,r){var n=Bu(e),t=Eu(e),i=function(){var C=z(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var y=C.a.a.a,T=C.b.a.a;return be(T,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cF-r.cq)/(r.cp-r.cq),l=r.ia,c=l,u=Eu(c),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Bu(c),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(d+("-"+f)),s=$([a(ue,"width",d),a(ue,"height",f)]),w=a(gb,e,z(5,5)),_=w.a,S=w.b;return h(sf,$([gf(r.eh)?Kn:a(wb,_,S),mf,le(function(){if(n.$===1)return we;if(n.a.$){var C=n.a;return C}else return dr}()),xe(function(){if(t.$===1)return dr;if(t.a.$){var C=t.a;return C}else return dr}())]),r.eh,a(Dn,$([le(a(Fe,we,n)),xe(a(Fe,De(20),t))]),$([L(ur,yr,hn("input"),$([pf(r.eh),a(Ce,db,a(rt,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,hb,a(rt,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,pb,a(rt,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ie(Lr(b+" ui-slide-bar focusable-parent")),Ie(Lf(function(C){var y=dv(C);if(y.$===1)return r.bI(0);var T=y.a;return r.bI(T)})),Ie(Tf("range")),Ie(yb(function(){var C=r.cC;if(C.$===1)return"any";var y=C.a;return ve(y)}())),Ie(_b(ve(r.cq))),Ie(bb(ve(r.cp))),Ie(kf(ve(r.cF))),i?Ie(a(ll,"orient","vertical")):Kn,le(i?a(Fe,De(20),t):a(Fe,we,n)),xe(i?a(Fe,we,n):a(Fe,De(20),t))]),rr(D)),a(ze,a(P,le(a(Fe,we,n)),a(P,xe(a(Fe,De(20),t)),X(e,$([tc(i?h(Cb,o,a(P,_r("focusable-thumb"),c),n):h(Sb,o,a(P,_r("focusable-thumb"),c),t))])))),Je)])))}),zb=h(_a,.5,.5,.5),Ff=Br,Vu=function(e){var r=e.cY,n=e.cF,t=e.cq,i=e.cp,o=e.cC,l=e.bI;return a(ze,$([le(we)]),a(Af,$([zn(2),tc(a(ze,$([le(we),xe(De(16)),vn,cn(Mf),Un(4)]),Je))]),{eh:a(mb,D,a(Dn,$([le(we)]),$([a(ze,$([vb]),Pn(r)),a(ze,$([le(we),Pf,ic($([oc]))]),Pn(ve(n)))]))),cp:i,cq:t,bI:l,cC:Y(o),ia:Ff($([le(De(12)),xe(De(12)),Un(4),Gi(0),Cn(zb),cn(fb)])),cF:n}))},Lb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Pb=v(function(e,r){switch(r.$){case 3:var l=r.a;return a(b3,D,{f3:l,gL:B3,eh:a(tb,D,Pn(e)),bI:t3(e)});case 0:var n=r.a,i=n.a,o=n.b,l=r.b;return Vu({cY:e,cp:o,cq:i,bI:o3(e),cC:.001*(o-i),cF:l});case 1:var t=r.a,i=t.a,o=t.b,l=r.b;return Vu({cY:e,cp:o,cq:i,bI:a(Ze,Be,l3(e)),cC:1,cF:l});default:var l=r.a;return a(ze,$([le(we)]),bn(a(Ta,D,$([a(Ta,$([a(br,"margin-bottom","6px")]),$([a(ab,$([V3(e)]),$([ql(e)]))])),a(nb,$([Tf("color"),a(br,"width","100%"),a(br,"height","26px"),a(br,"padding","0px"),rb(e),ib(e),Lf(function(c){return a(i3,e,a(Lb,c3,eb(c)))}),kf(y3(l))]),D)]))))}}),$l=h(Or,255,255,255),Mb=function(e){return a(Tr,$([le(we),zn(8),a(ff,0,14),Lt({b2:1,g1:0,hv:0,cE:0}),Cn(Ni)]),$([a(ze,$([ta(16),Zl,Ln($l)]),Pn(e.ha)),a(Tr,$([le(we),zn(6)]),a3(a(ol,Pb,e.aN)))]))},Tb=function(e){return a(Tr,$([le(we),xe(we),Ln(Xl),ta(12),r3,vf]),a(re,Mb,e))},kb=e3(Tb),Db=function(e){return a(Tr,$([le(we),xe(we)]),$([a(Dn,$([zn(14),le(we)]),D),a(Yl,Xh,kb(na(e).f9))]))},Ab=function(e){return{$:6,a:e}},Fb=ee(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Ib=function(e){var r=e.cE,n=e.hv,t=e.b2,i=e.g1;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,pt,A(dt,"p-"+k(r),o,o,o,o))}else return a(Ce,pt,A(dt,L(Fb,r,n,t,i),r,n,t,i))},Eb=function(e){return{$:0,a:e}},Bb=function(e){return{$:1,a:e}},Vb=Bb,Rb=function(e){var r=e.b.X;return Zn(r)},Ci=h(Or,255,60,0),Ob=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Zn(r)+1+Zn(n)},Nb=function(e){var r=z(Rb(e),Ob(e)-1),n=r.a,t=r.b;return a(ze,$([le(we),vn]),a(Af,$([tc(a(Dn,$([le(we),xe(De(4)),vn,cn(Mf),Un(2)]),$([a(ze,$([le(Da(n)),xe(we),cn(Ci),Un(2)]),Je),a(ze,$([le(Da(t-n))]),Je)])))]),{eh:Vb(""),cp:t,cq:0,bI:a(Ze,Be,Eb),cC:Y(1),ia:Ff($([le(De(12)),xe(De(12)),Un(6),cn(Ci)])),cF:n}))},jb=ji(2),ni=h(Or,220,220,220),Hb=function(e){var r=e.a,n=function(){return r.$?$([Ln(ni)]):$([Ln(Ci)])}();return a(ze,X(n,$([ta(14),jb,Pf,ic($([oc]))])),Pn(a(wv,3,na(e).cO)))},Gb=function(e){e.a;var r=e.b.X;return a(Oe,function(n){return Be(60/(na(e).cO-n))},a(Oe,a(Ze,ov,function(n){return n.cO}),ac(a(fv,59,r))))},Wb=function(e){var r=Gb(e);if(r.$===1)return Je;var n=r.a;return a(ze,$([ta(14),Ln(Xl),ic($([oc]))]),Pn(k(n)+" FPS"))},Ru={$:1},Ub={$:3},Jb={$:2},qb={$:8},Yb=S$,Xb=v(function(e,r){return a(Ll,e,Yb(r))}),Zb=Xb("disabled"),Kb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Qb=function(e){return a(St,Kb,e)?Kn:_r("focusable")},zi=a(Ct,Ie,hf),If=v(function(e,r){var n=r.eR,t=r.eh;return L(ur,yr,aa,a(P,le(dr),a(P,xe(dr),a(P,_r(p.ca+(" "+(p.ax+(" "+(p.hE+(" "+p.eP)))))),a(P,Wn,a(P,Qb(e),a(P,Hi(qb),a(P,Ie(wf(0)),function(){if(n.$===1)return a(P,Ie(Zb(!0)),e);var i=n.a;return a(P,zi(i),a(P,bf(function(o){return _e(o,df)||_e(o,_f)?Y(i):J}),e))}()))))))),rr($([t])))}),Ou=v(function(e,r){return a(If,D,{eh:a(ze,$([le(De(36)),Gn(3),Ln(r),xf,ta(12),Zl,Cn(r),Gi(1),Un(4)]),Pn("REC")),eR:Y(e)})}),Nu=M(function(e,r,n){return a(If,D,{eh:bn(h(ba,20,n,e)),eR:Y(r)})}),e1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Dn,D,$([a(ze,$([le(De(40))]),function(){switch(r.$){case 0:return a(Ou,Ru,Ci);case 1:return a(Ou,Jb,ni);default:return Je}}()),a(ze,$([le(De(28))]),function(){switch(r.$){case 0:return Je;case 1:return gn(n)?Je:h(Nu,Hn.hn,Ub,ni);default:return h(Nu,Hn.hm,Ru,ni)}}())]))},r1=function(e){return a(Tr,$([le(we)]),$([Nb(e),a(Dn,$([le(we),zn(14),a(ff,0,6),vn]),$([e1(e),Wb(e),Hb(e)]))]))},n1=function(e){return a(Tr,$([le(we),zn(14),Ib({b2:20,g1:0,hv:0,cE:0}),Lt({b2:1,g1:0,hv:0,cE:0}),Cn(Ni)]),$([a(ze,$([ta(16),Zl,Ln(Xl)]),Pn("Time Travel")),a(Yl,Ab,r1(e))]))},a1=v(function(e,r){return a(Tr,$([na(r).dw.im>600?cn(qh):cn(Yh),Lt({b2:0,g1:0,hv:1,cE:0}),Cn(Ni),le(De(Ca.cZ)),xe(we)]),$([function(){return e?Je:a(Tr,$([le(we),xe(we),Gn(14),zn(14)]),$([n1(r),Db(r)]))}()]))}),t1=function(e){return{$:3,a:e}},ju=Oi(2),i1=h(Or,232,78,50),o1=h(Or,48,48,48),l1=function(e){return a(Dr,"href",kd(e))},c1=Rr("rel"),u1=Dr("target"),Hu=v(function(e,r){var n=r.fj,t=r.eh;return L(ur,yr,hn("a"),a(P,Ie(l1(n)),a(P,Ie(c1("noopener noreferrer")),a(P,Ie(u1("_blank")),a(P,le(dr),a(P,xe(dr),a(P,_r(p.ca+(" "+(p.ax+(" "+p.eo)))),e)))))),rr($([t])))}),Xa=Dr("title"),$1=h(Or,31,161,242),v1=function(e){var r=M(function(o,l,c){var u=_e(l,e)?$l:o1;return a(ze,$([an(Xa(o)),zi(t1(l)),Wn,Gn(7)]),bn(h(ba,40,u,c)))}),n=a(Tr,$([ef]),$([h(r,"Configurations",0,Hn.hL)])),t=a(Tr,D,$([a(Hu,$([an(Xa("Twitter")),ju,Wn,Gn(7)]),{eh:bn(h(ba,40,$1,Hn.$8)),fj:"https://twitter.com/AzizErkalSelman"}),a(Hu,$([an(Xa("Source Code")),ju,Wn,Gn(7)]),{eh:bn(h(ba,40,i1,Hn.gy)),fj:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(ze,$([le(De(Ca.bE)),Gn(4),zi(Qv),Lt({b2:1,g1:0,hv:0,cE:0}),Cn(Ni),Wn,an(Xa("Activate Distraction Free Mode"))]),bn(h(ba,46,$l,Hn.ft)));return a(Tr,$([le(De(Ca.bE)),xe(we),vf,cn(rf)]),$([i,n,t]))},f1=function(e){var r=a(ze,$([le(De(Ca.bE)),ef,Gn(4),zi(Qv),Wn,an(Xa("Deactivate Distraction Free Mode (A)"))]),bn(h(ba,46,rf,Hn.ft)));return e.bw?r:a(Dn,$([le(De(Ca.bE+Ca.cZ)),xe(we)]),$([v1(e.bp),a(a1,e.bp,e.R)]))},m1=M(function(e,r,n){var t=hg(n.R),i=na(n.R);return h(Ah,{hj:$([_g({fL:J,fT:J,hF:J})])},$([le(De(ot(i.dw.im))),xe(De(ot(i.dw.gG))),an(a(br,"-webkit-font-smoothing","antialiased")),an(a(br,"pointer-events","none")),an(a(br,"touch-action","none")),an(a(br,"user-select","none")),Zo(a(Yl,pg,a(r,i,t))),Zo(f1(n))]),bn(a(Fh,bi(gg),a(e,i,t))))}),s1=xr(function(e,r,n,t,i,o){var l=v(function(u,f){return z(L($g,r,o,u,f),vu)}),c=function(u){var f=a(cv,n,u.gX);return z({bp:0,bw:!0,R:a(vg,f,t),dH:0},vu)};return T0({gR:c,hV:dg,ih:l,ij:a(m1,e,i)})}),d1=ee(function(e,r,n,t){return tr(s1,e,r,n,t,v(function(i,o){return Je}),M(function(i,o,l){return l}))}),p1=function(e){return{}},g1=M(function(e,r,n){return{aN:n,gZ:r,ha:e}}),h1=function(e){return h(Ne,v(function(r,n){var t=r.a,i=r.b;return h(ya,t,i,n)}),Gl,e)},b1=M(function(e,r,n){return h(g1,e,r,h1(n))}),Gu=b1,Gt=M(function(e,r,n){var t=r.a,i=r.b;return z(e,a(sv,z(t,i),n))}),_1=$([h(Gu,"Parameters",!0,$([h(Gt,"a",z(0,3),1)])),h(Gu,"Colors and light",!0,$([h(Gt,"lux",z(2,5),5),h(Gt,"intensity above",z(0,300),60),h(Gt,"intensity below",z(0,300),290)]))]),w1=v(function(e,r){return r}),fn=function(e){return e},Za=function(e){return fn(Qn*(e/180))},_n=ys,y1=v(function(e,r){var n=e,t=r,i=t.dO-n.dO,o=t.is-n.is,l=t.io-n.io,c=a(nr,he(l),a(nr,he(o),he(i)));if(c){var u=i/c,f=o/c,m=l/c,d=_n(m*m+f*f+u*u);return Y({io:m/d,is:f/d,dO:u/d})}else return J}),ai=function(e){return e},lc=v(function(e,r){var n=e,t=r;return{io:t.is*n.dO-t.dO*n.is,is:t.dO*n.io-t.io*n.dO,dO:t.io*n.is-t.is*n.io}}),ti=function(e){var r=e,n=a(nr,he(r.io),a(nr,he(r.is),he(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=_n(o*o+i*i+t*t);return Y({io:o/l,is:i/l,dO:t/l})}else return J},Li=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),x1=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dO*n.dO}),Ef=v(function(e,r){var n=e,t=r;return be(t,n)>0}),S1=v(function(e,r){var n=e,t=r;return be(t,n)<0}),C1=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),z1=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dO*n.dO;return{io:n.io*i,is:n.is*i,dO:n.dO*i}}),L1=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Ur=0,Bf={io:0,is:0,dO:0},P1=M(function(e,r,n){return a(ul,function(t){var i=a(C1,a(z1,t,r),r);return a(ul,function(o){var l=a(lc,r,e),c=a(x1,n,l),u=a(Ef,Ur,c)?l:a(S1,Ur,c)?L1(l):Bf;return a(Oe,function(f){return O(t,o,f)},ti(u))},ti(i))},ti(e))}),M1=function(e){var r=e,n=he(r.dO),t=he(r.is),i=he(r.io);if(be(i,t)<1)if(be(i,n)<1){var o=_n(r.dO*r.dO+r.is*r.is);return{io:0,is:-r.dO/o,dO:r.is/o}}else{var o=_n(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dO:0}}else if(be(t,n)<1){var o=_n(r.dO*r.dO+r.io*r.io);return{io:r.dO/o,is:0,dO:-r.io/o}}else{var o=_n(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dO:0}}},cc=function(e){var r=M1(e),n=r,t=n,i=e,o=i,l={io:o.is*t.dO-o.dO*t.is,is:o.dO*t.io-o.io*t.dO,dO:o.io*t.is-o.is*t.io};return z(r,l)},wa=function(e){var r=e;return r},Vr=function(e){return e},T1=v(function(e,r){var n=cc(e),t=n.a,i=n.b;return Vr({df:r,dM:t,dN:i,dP:e})}),k1=function(e){var r=a(Li,e.ba,e.d2),n=wa(e.fi),t=a(lc,r,n),i=h(P1,r,n,t);if(i.$){var f=ti(r);if(f.$){var d=cc(e.fi),b=d.a,s=d.b;return Vr({df:e.d2,dM:s,dN:e.fi,dP:b})}else{var m=f.a;return a(T1,m,e.d2)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return Vr({df:e.d2,dM:u,dN:c,dP:l})}},Pr={io:0,is:0,dO:0},D1=function(e){return{$:0,a:e}},qe=function(e){var r=e;return he(r)},ii=function(e){var r=e;return .5*r},A1=ps,F1=function(e){var r=e;return A1(r)},I1=function(e){var r=ii(qe(e.fm)),n=F1(r);return{dq:D1(n),dG:e.dG}},un=function(e){return e},uc=un({io:0,is:1,dO:0}),E1=function(e){var r=e.ba,n=e.d2,t=e.fi;return I1({fm:Za(40),dG:k1({d2:ai(n),ba:ai(r),fi:a(Fe,uc,a(y1,Pr,ai(t)))})})},ea=ss,B1=v(function(e,r){return(r-iv(r/e)*e)/e}),V1=function(e){return 2*Qn*e},Vf=ee(function(e,r,n,t){return e+(r-e)*(1+ea(V1(a(B1,n,t))))/2}),R1=function(e){return E1({d2:{io:10,is:L(Vf,-20,20,20,e.cO),dO:60},ba:{io:0,is:0,dO:0},fi:{io:0,is:1,dO:0}})},$c=function(e){return e},Rf=M(function(e,r,n){return be(n,e)<0?e:be(n,r)>0?r:n}),O1=function(e){var r=e;return r},N1=function(e){var r=h(Rf,1667,25e3,O1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return $c({io:n,is:t})},j1=function(e){return e},H1=function(e){return{$:0,a:e}},G1=H1,W1={$:3},U1=W1,J1=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),q1=J1,Y1=function(e){return{$:1,a:e}},X1=Y1,Z1=function(e){return a(Rr,"height",k(e))},K1=Ov,Q1=function(e){return{$:2,a:e}},e_=Q1,r_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Be(c*1e3)/1e3},l=function(c){return Be(c*1e4)/100};return xa($(["rgba(",ve(l(r)),"%,",ve(l(n)),"%,",ve(l(t)),"%,",ve(o(i)),")"]))},n_=v(function(e,r){switch(r.$){case 0:return a(Pp,e,r);case 1:return a(Mp,e,r);case 2:return a(Tp,e,r);case 3:return a(kp,e,r);case 4:return a(Dp,e,r);default:return a(Ap,e,r)}}),a_=v(function(e,r){switch(r.$){case 0:return a(tp,e,r);case 1:return a(ip,e,r);case 2:return a(op,e,r);case 3:return a(lp,e,r);case 4:return a(cp,e,r);case 5:return a(up,e,r);case 6:return a($p,e,r);case 7:return a(vp,e,r);default:return fp(e)}}),t_=M(function(e,r,n){return h(Lp,e,r,n)}),Wu=function(e){var r=e;return r},Ra=Gp,wo=L(Ra,1,1,1,1),jr=M(function(e,r,n){return a(re,function(t){return a(t,r,n)},e)}),i_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),o_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(i_,n*t/i,n,n*(1-t-i)/i)}),Pt=Vp,l_=function(e){var r=e.a,n=e.b,t=e.c;return h(Pt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},Wi=v(function(e,r){return l_(a(o_,e,r))}),Of=v(function(e,r){return{ef:_e(e.ef,r.ef),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cA,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cA,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cA,cA:e.cA*r.cA}}),Jr=Xp,c_=function(e){return Jr({ep:e.t,eq:e.w,er:e.z,es:e.K,et:e.u,eu:e.x,ev:e.A,ew:e.L,ex:e.v,ey:e.y,ez:e.B,eA:e.M,eB:0,eC:0,eD:0,eE:1})},yo=Ye(function(e,r,n,t,i){var o=t.ef?1:-1,l=L(Ra,t.cA,t.cA,t.cA,o);return tr(i,e,l,c_(t),t.ef,r,n)}),Nf=xr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,f=r,m=n,d=a(Of,l,t),b=c,s=o;e=u,r=f,n=m,t=d,i=b,o=s;continue e;case 1:var w=i.b,_=a(P,A(yo,e,r,n,t,w),o.P);return{P:_,_:o._,hG:o.hG};case 3:var S=i.b,C=a(P,A(yo,e,r,n,t,S),o._);return{P:o.P,_:C,hG:o.hG};case 2:var y=i.a,T=a(P,A(yo,e,r,n,t,y),o.hG);return{P:o.P,_:o._,hG:T};default:var G=i.a;return h(Ne,L(Nf,e,r,n,t),o,G)}}),u_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),jf=u_,vc=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),$_=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(vc,518,r,n,t)},v_=v(function(e,r){return{$:6,a:e,b:r}}),f_=v_,Hf=$([$_({ab:1,ac:0,ai:!1}),L(jf,!1,!1,!1,!1),a(f_,0,1)]),Aa=519,fc=8,Gf=15,za=7681,m_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ee=ap,s_=v(function(e,r){return{$:0,a:e,b:r}}),d_=s_({d_:1,eb:0,eN:5}),hr=Ep,p_=d_($([{e_:a(hr,-1,-1)},{e_:a(hr,1,-1)},{e_:a(hr,-1,1)},{e_:a(hr,1,1)}])),g_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e_"},uniforms:{}},h_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f,k:m}}}}}}}}}}}},mc=M(function(e,r,n){var t=e.dr,i=e.c6,o=e.dL,l=v(function(f,m){var d=f;return m(d)}),c=v(function(f,m){var d=f;return m(d)}),u=function(f){return a(Ze,l(f.bO),a(Ze,c(f.bz),a(Ze,c(f.bX),c(f.bY))))};return a(u,n,a(u,r,h(h_,t,i,o)))}),sc=function(e){return h(mc,{c6:e.c6,dr:e.dr,dL:e.dL},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},dc=function(e){return A(Ee,$([sc(e),L(jf,!1,!1,!1,!1)]),g_,m_,p_,{})},b_=dc({bz:za,c6:0,dr:fc,bO:Aa,dL:Gf,bX:za,bY:za}),__=516,Uu=5386,or=7680,w_=function(e){return a(Va,2,e+4)},Wf=function(e){return dc({bz:or,c6:Gf,dr:fc,bO:__,dL:w_(e),bX:Uu,bY:Uu})},y_=M(function(e,r,n){return sr($([h(jr,e,n,Hf),$([Wf(r),b_])]))}),x_=v(function(e,r){return sr(a(Q$,y_(e),r))}),S_=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(vc,513,r,n,t)},C_=S_({ab:1,ac:0,ai:!0}),z_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f}}}}}}}}}}},L_=function(e){var r=e.cx,n=e.ce,t=e.b0,i=e.bZ,o=e.b6,l=e.fE,c=v(function(u,f){var m=u.a,d=u.b,b=u.c,s=f.a,w=f.b,_=f.c;return z_(m)(d)(b)(s)(w)(_)(r)(n)(t)(i)});return a(c,o,l)},P_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ju=v(function(e,r){var n=e,t=r;return h(P_,32774,n,t)}),M_=1,qu=771,T_=770,pc=L_({bZ:0,fE:a(Ju,M_,qu),b0:0,b6:a(Ju,T_,qu),ce:0,cx:0}),va=$([C_,pc]),k_=function(e){var r=e;return r.eG},D_=function(e){var r=e;return r.eH},Uf=function(e){var r=e;return r.eI},A_=function(e){var r=e;return r.eJ},F_=function(e){var r=e;return r.eK},Jf=function(e){var r=e;return r.eL},$n=v(function(e,r){var n=e,t=r;return t-n}),qf=function(e){return O(a($n,A_(e),k_(e)),a($n,F_(e),D_(e)),a($n,Jf(e),Uf(e)))},ia=function(e){var r=e;return r.df},Yu=function(e){var r=e;return ia(r)},I_=function(e){return e},E_=function(e){return Vr({df:I_({io:e.K,is:e.L,dO:e.M}),dM:un({io:e.t,is:e.u,dO:e.v}),dN:un({io:e.w,is:e.x,dO:e.y}),dP:un({io:e.z,is:e.A,dO:e.B})})},xo=v(function(e,r){var n=e,t=r,i=n.dP,o=i,l=n.dN,c=l,u=n.dM,f=u;return{io:t.io*f.io+t.is*f.is+t.dO*f.dO,is:t.io*c.io+t.is*c.is+t.dO*c.dO,dO:t.io*o.io+t.is*o.is+t.dO*o.dO}}),Yf=v(function(e,r){var n=e,t=r,i=n.df,o=i,l=t.io-o.io,c=t.is-o.is,u=t.dO-o.dO,f=n.dP,m=f,d=n.dN,b=d,s=n.dM,w=s;return{io:l*w.io+c*w.is+u*w.dO,is:l*b.io+c*b.is+u*b.dO,dO:l*m.io+c*m.is+u*m.dO}}),Fn=function(e){var r=e;return r.dM},In=function(e){var r=e;return r.dN},En=function(e){var r=e;return r.dP},Xf=v(function(e,r){return{df:a(Yf,e,ia(r)),dM:a(xo,e,Fn(r)),dN:a(xo,e,In(r)),dP:a(xo,e,En(r))}}),vl=M(function(e,r,n){return{io:e,is:r,dO:n}}),Pi=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(nr,n,t)}),Ue=v(function(e,r){var n=e,t=r;return a(Sa,n,t)}),B_=v(function(e,r){var n=Pi(r),t=Pi(e);return{eG:a(He,t.eG,n.eG),eH:a(He,t.eH,n.eH),eI:a(He,t.eI,n.eI),eJ:a(Ue,t.eJ,n.eJ),eK:a(Ue,t.eK,n.eK),eL:a(Ue,t.eL,n.eL)}}),kr=function(e){var r=e;return r},V_=function(e){var r=e;return O(r.io,r.is,r.dO)},nt=v(function(e,r){var n=e,t=r;return t+n}),R_=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ii(qe(t)),l=ii(qe(n)),c=ii(qe(i)),u=V_(r),f=u.a,m=u.b,d=u.c;return{eG:a(nt,l,f),eH:a(nt,o,m),eI:a(nt,c,d),eJ:a($n,l,f),eK:a($n,o,m),eL:a($n,c,d)}}),Xu=ee(function(e,r,n,t){var i=n.f1,o=2*n.gE*r,l=2*n.gD*r,c=2*n.gC*r,u=i.dO*r,f=i.is*r,m=i.io*r,d=kr(En(e)),b=he(c*d.io)+he(l*d.is)+he(o*d.dO),s=kr(In(e)),w=he(c*s.io)+he(l*s.is)+he(o*s.dO),_=kr(Fn(e)),S=he(c*_.io)+he(l*_.is)+he(o*_.dO),C=a(R_,O(S,w,b),a(Yf,e,h(vl,m,f,u)));if(t.$)return Y(C);var y=t.a;return Y(a(B_,y,C))}),fl=ee(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,w=r,_=n,S=o;e=s,r=w,n=_,t=S;continue e;case 1:var l=i.a,c=L(Xu,e,r,l,n),s=e,w=r,_=c,S=o;e=s,r=w,n=_,t=S;continue e;case 2:var s=e,w=r,_=n,S=o;e=s,r=w,n=_,t=S;continue e;case 3:var l=i.a,c=L(Xu,e,r,l,n),s=e,w=r,_=c,S=o;e=s,r=w,n=_,t=S;continue e;case 4:var u=i.a,s=e,w=r,_=L(fl,e,r,n,u),S=o;e=s,r=w,n=_,t=S;continue e;default:var f=i.a,m=i.b,d=a(Xf,E_(f),e),b=r*f.cA,s=e,w=r,_=L(fl,d,b,n,$([m])),S=o;e=s,r=w,n=_,t=S;continue e}}else return n}),oa=Rp,la=Op,ca=Np,Zf=function(e){return{$:4,a:e}},O_=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),Mt=function(e){return Zf(a(O_,e,D))},N_={ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cA:1},j_=function(e){var r=e;return r},Zu=dc({bz:za,c6:0,dr:fc,bO:Aa,dL:255,bX:za,bY:za}),H_=function(e){var r=e,n=a(nr,he(r.io),a(nr,he(r.is),he(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=_n(o*o+i*i+t*t);return l*n}else return Ur},pr={b0:0,f0:!1,ce:0,$7:0,cx:0,dD:0,io:0,is:0,dO:0},Cr=v(function(e,r){var n=e,t=r;return Jr({ep:n.io,eq:n.cx,er:t.io,es:t.cx,et:n.is,eu:n.ce,ev:t.is,ew:t.ce,ex:n.dO,ey:n.b0,ez:t.dO,eA:t.b0,eB:n.dD,eC:n.$7,eD:t.dD,eE:t.$7})}),Ka=z({bF:a(Cr,pr,pr),cl:a(Cr,pr,pr),cm:a(Cr,pr,pr),cn:a(Cr,pr,pr)},L(Ra,0,0,0,0)),ke=v(function(e,r){var n=r;return e*n}),Ku=function(e){var r=e;return-r},Kf=514,Qf=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(vc,515,r,n,t)},em=240,G_=$([Qf({ab:1,ac:0,ai:!0}),sc({bz:or,c6:em,dr:0,bO:Kf,dL:0,bX:or,bY:or}),pc]),W_=v(function(e,r){var n=e,t=r.hb,i=r.gu,o=r.fJ,l=qe(t),c=l,u=qe(i),f=u,m=n.dq;if(m.$){var b=m.a;return Uo(f)?Jr({ep:2/(o*b),eq:0,er:0,es:0,et:0,eu:2/b,ev:0,ew:0,ex:0,ey:0,ez:0,eA:-1,eB:0,eC:0,eD:0,eE:1}):Jr({ep:2/(o*b),eq:0,er:0,es:0,et:0,eu:2/b,ev:0,ew:0,ex:0,ey:0,ez:-2/(f-c),eA:-(f+c)/(f-c),eB:0,eC:0,eD:0,eE:1})}else{var d=m.a;return Uo(f)?Jr({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-1,eA:-2*c,eB:0,eC:0,eD:-1,eE:0}):Jr({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-(f+c)/(f-c),eA:-2*f*c/(f-c),eB:0,eC:0,eD:-1,eE:0})}}),Wt=v(function(e,r){return(1&e>>r)===1?0:1}),U_=function(e){return $([Qf({ab:1,ac:0,ai:!0}),sc({bz:or,c6:em,dr:e,bO:Kf,dL:0,bX:or,bY:or}),pc])},J_=M(function(e,r,n){return sr(a(re,function(t){var i=t<<4,o=L(Ra,a(Wt,t,0),a(Wt,t,1),a(Wt,t,2),a(Wt,t,3));return h(jr,e,z(r,o),U_(i))},a(Yr,1,a(Va,2,n)-1)))}),yn=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},La=function(e){var r=e;return r},q_=Zp,Qu=function(e){var r=e;return yn(En(r))},rm=un({io:1,is:0,dO:0}),gc=rm,hc=uc,bc=un({io:0,is:0,dO:1}),nm=bc,Y_={df:Pr,dM:gc,dN:hc,dP:nm},Tt=function(e){var r=e;return r},X_=function(e){var r=Tt(ia(e)),n=kr(En(e)),t=kr(In(e)),i=kr(Fn(e));return Jr({ep:i.io,eq:t.io,er:n.io,es:r.io,et:i.is,eu:t.is,ev:n.is,ew:r.is,ex:i.dO,ey:t.dO,ez:n.dO,eA:r.dO,eB:0,eC:0,eD:0,eE:1})},Z_=v(function(e,r){var n=r;return X_(a(Xf,n,e))}),K_=function(e){return a(Z_,Y_,e)},Q_=function(e){var r=e;return r.dG},e2=function(e){var r=e;return Fn(r)},r2=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),n2=function(e){var r=e;return In(r)},a2=function(e){var r=Q_(e.fZ),n=Vr({df:Yu(r),dM:e2(r),dN:n2(r),dP:yn(Qu(r))}),t=Mt(e.a8),i=t,o=L(fl,n,1,J,$([i]));if(o.$===1)return D;var l=o.a,c=K_(r),u=a(ke,.99,a(He,qe(e.f5),Ku(Uf(l)))),f=qf(l),m=f.a,d=f.b,b=f.c,s=H_(h(r2,m,d,b)),w=a(ke,1.01,a(nt,s,Ku(Jf(l)))),_=a(W_,e.fZ,{fJ:e.fJ,gu:w,hb:u}),S=q_(_).eE,C=S?kr(yn(Qu(r))):La(Yu(r)),y=function(){var me=e.ic;switch(me.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var Te=me.a;return z(3,Te);case 4:var Te=me.a;return z(4,Te);default:return z(5,0)}}(),T=y.a,G=y.b,K=e.gs,ae=K,te=a(Wi,ae,e.il),ie=te,ne=Jr({ep:0,eq:C.io,er:oa(ie),es:e.fb,et:0,eu:C.is,ev:la(ie),ew:j_(s),ex:0,ey:C.dO,ez:ca(ie),eA:T,eB:0,eC:S,eD:0,eE:G}),q=tr(Nf,ne,c,_,N_,i,{P:D,_:D,hG:D}),de=e.g4;switch(de.$){case 0:var pe=de.a;return sr($([h(jr,q.P,z(pe,wo),va),h(jr,q._,Ka,va)]));case 1:var pe=de.a;return sr($([h(jr,q.P,Ka,va),$([Zu]),h(jr,q.hG,pe.bF,Hf),$([Wf(0)]),h(jr,q.P,z(pe,wo),G_),h(jr,q._,Ka,va)]));default:var Me=de.a,Se=de.b;return sr($([h(jr,q.P,z(Se,wo),va),$([Zu]),a(x_,q.hG,Me),h(J_,q.P,Se,Zn(Me)),h(jr,q._,Ka,va)]))}},t2=function(e){return a(Rr,"width",k(e))},i2=v(function(e,r){var n=$([X1(1),e_(0),G1(!0),L(q1,0,0,0,0)]),t=function(){var T=e.fG;switch(T.$){case 0:return O(n,"0",1);case 1:return O(a(P,U1,n),"1",1);default:var G=T.a;return O(n,"0",G)}}(),i=t.a,o=t.b,l=t.c,c=e.a4,u=c.a,f=c.b,m=Wu(f),d=a(br,"height",k(m)+"px"),b=Wu(u),s=b/m,w=a(Ba,function(T){return a2({fJ:s,fZ:e.fZ,f5:e.f5,a8:T.a8,gs:T.gs,g4:T.g4,fb:l,ic:T.ic,il:T.il})},r),_=a(br,"width",k(b)+"px"),S=e.a1,C=S,y=r_(C);return h(K1,"div",$([a(br,"padding","0px"),_,d]),$([z(o,h(t_,i,$([t2(Be(b*l)),Z1(Be(m*l)),_,d,a(br,"display","block"),a(br,"background-color",y)]),w))]))}),o2=function(e){return{$:2,a:e}},l2=function(e){return o2(e)},c2=function(e){return a(i2,{fG:l2(e.cS),a1:e.a1,fZ:e.fZ,f5:e.f5,a4:e.a4},$([{a8:e.a8,gs:e.gs,g4:e.g4,ic:e.ic,il:e.il}]))},e$=function(e){return e},Jn=function(e){return e},u2=function(e){var r=e;return r},Ui=function(e){var r=e;return u2(r.fK)},am=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),$2=ee(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),tm=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),im=ee(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),v2=ee(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),f2=ee(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),m2=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),_c=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(m2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(am,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L($2,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(tm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(f2,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L(im,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(v2,n,t,i,1);case 8:return e;case 9:return e;default:return e}},wc={$:0},s2=Pe(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var u=c.a,f=c.b,m=Pi(l(u)),d=a(Ue,m.eJ,e),b=a(He,m.eG,r),s=a(Ue,m.eK,n),w=a(He,m.eH,t),_=a(Ue,m.eL,i),S=a(He,m.eI,o),C=l,y=f;e=d,r=b,n=s,t=w,i=_,o=S,l=C,c=y;continue e}else return{eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i}}),d2=M(function(e,r,n){var t=Pi(e(r));return bt(s2,t.eJ,t.eG,t.eK,t.eH,t.eL,t.eI,e,n)}),So=v(function(e,r){var n=e,t=r;return be(t,n)<1}),om=function(e){return a(So,e.eG,e.eJ)&&a(So,e.eH,e.eK)&&a(So,e.eI,e.eL)?e:{eG:a(He,e.eJ,e.eG),eH:a(He,e.eK,e.eH),eI:a(He,e.eL,e.eI),eJ:a(Ue,e.eJ,e.eG),eK:a(Ue,e.eK,e.eH),eL:a(Ue,e.eL,e.eI)}},gt=function(e){var r=e;return r},qn=function(e){var r=e;return r.io},Yn=function(e){var r=e;return r.is},Xn=function(e){var r=e;return r.dO},lm=function(e){var r=gt(e),n=r.a,t=r.b,i=r.c,o=qn(n),l=Yn(n),c=Xn(n),u=qn(t),f=Yn(t),m=Xn(t),d=qn(i),b=Yn(i),s=Xn(i);return om({eG:a(He,o,a(He,u,d)),eH:a(He,l,a(He,f,b)),eI:a(He,c,a(He,m,s)),eJ:a(Ue,o,a(Ue,u,d)),eK:a(Ue,l,a(Ue,f,b)),eL:a(Ue,c,a(Ue,m,s))})},cm=jp,vr=function(e){return cm(Tt(e))},um=function(e){var r=e;return r},Ji=function(e){return cm(um(e))},$m=function(e){return e},p2=v(function(e,r){var n=e,t=r,i=a(nr,he(t.io),a(nr,he(t.is),he(t.dO)));if(i){var o=t.dO/i,l=t.is/i,c=t.io/i,u=_n(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dO:n*o/u}}else return Bf}),g2=p2($m(1)),vm=M(function(e,r,n){var t=a(Li,r,n),i=a(Li,e,r);return g2(a(lc,t,i))}),h2=function(e){var r=gt(e),n=r.a,t=r.b,i=r.c,o=Ji(h(vm,n,t,i));return O({q:o,e_:vr(n)},{q:o,e_:vr(t)},{q:o,e_:vr(i)})},b2=v(function(e,r){return{$:2,a:e,b:r}}),fm=b2({d_:3,eb:0,eN:4}),_2=function(e){if(e.b){var r=e.a,n=e.b,t=fm(a(re,h2,e)),i=h(d2,lm,r,n);return L(am,i,e,t,0)}else return wc},Sr=M(function(e,r,n){return O(e,r,n)}),Ke=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),mm=function(){var e=Jn(1),r=Jn(1),n=Jn(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),l=h(Ke,o,i,t),c=a(ke,.5,e),u=h(Ke,o,i,c),f=a(ke,.5,r),m=h(Ke,o,f,t),d=h(Ke,o,f,c),b=a(ke,.5,n),s=h(Ke,b,i,t),w=h(Ke,b,f,t),_=h(Ke,b,i,c),S=h(Ke,b,f,c);return _c(_2($([h(Sr,l,w,s),h(Sr,l,m,w),h(Sr,u,_,S),h(Sr,u,S,d),h(Sr,s,w,S),h(Sr,s,S,_),h(Sr,l,d,m),h(Sr,l,u,d),h(Sr,l,s,_),h(Sr,l,_,u),h(Sr,m,S,w),h(Sr,m,d,S)])))}(),Ut={$:0},w2=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),y2=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(t),f=Ji(h(vm,u,c,l)),m={q:f,e_:vr(u)},d={q:f,e_:vr(c)},b={q:f,e_:vr(l)};return a(P,m,a(P,d,a(P,b,n)))}),yc=function(e){var r=e;return r.H},x2=ee(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var l=t.a;return Y(h(e,i,o,l))}),ml=4294967295>>>32-lt,sl=is,S2=M(function(e,r,n){e:for(;;){var t=ml&r>>>e,i=a(sl,t,n);if(i.$){var f=i.a;return a(sl,ml&r,f)}else{var o=i.a,l=e-lt,c=r,u=o;e=l,r=c,n=u;continue e}}}),C2=function(e){return e>>>5<<5},z2=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||be(e,n)>-1?J:be(e,C2(n))>-1?Y(a(sl,ml&e,o)):Y(h(S2,t,e,i))}),xc=function(e){var r=e;return r.au},Co=v(function(e,r){return a(z2,e,xc(r))}),L2=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(x2,M(function(l,c,u){return O(l,c,u)}),a(Co,t,e),a(Co,i,e),a(Co,o,e))};return a(xn,r,yc(e))},P2=M(function(e,r,n){e:for(;;){var t=a(Vl,wr,e),i=t.a,o=t.b;if(be(Go(i),wr)<0)return a(lv,!0,{C:r,n,r:i});var l=o,c=a(P,tv(i),r),u=n+1;e=l,r=c,n=u;continue e}}),Sc=function(e){return e.b?h(P2,e,D,0):nv},M2=v(function(e,r){return!a(St,a(Ct,k0,e),r)}),T2=function(e){var r=e.a;return r},sm=v(function(e,r){var n=T2(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&be(o,n)<0&&l>=0&&be(l,n)<0&&c>=0&&be(c,n)<0};return a(M2,t,r)?{H:r,au:e}:{H:a(Vv,t,r),au:e}}),k2=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=k2({d_:1,eb:3,eN:4}),oi=v(function(e,r){var n=La(r),t=La(e);return z(O(t.io,t.is,t.dO),O(n.io,n.is,n.dO))}),r$=h(Pt,0,0,0),zo=xr(function(e,r,n,t,i,o){var l=o.a,c=o.b,u=o.c,f=a(Vi,a(oi,e,r),i);if(f.$){var d={q:r$,e_:vr(r)},b={q:r$,e_:vr(e)},s=u+1,w=u;return O(a(P,O(n,w,s),a(P,O(n,s,t),l)),a(P,d,a(P,b,c)),u+2)}else{var m=f.a;return O(a(P,O(n,m,t),l),c,u)}}),D2=Ye(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,f=n.b,m=e(u),d=e(c),b=e(l),s=t+2,w=t+1,_=t,S=e,C=r,y=f,T=t+3,G=tr(zo,m,b,s,_,r,tr(zo,d,m,w,s,r,tr(zo,b,d,_,w,r,i)));e=S,r=C,n=y,t=T,i=G;continue e}else{var K=i,ae=K.a,te=K.b;return z(ae,mr(te))}}),A2=Ye(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,f=r.b,m=e(u),d=e(c),b=e(l),s=n+2,w=n+1,_=n,S=h(ya,a(oi,b,m),s,h(ya,a(oi,m,d),w,h(ya,a(oi,d,b),_,i))),C=a(P,O(_,w,s),t),y=e,T=f,G=n+3,K=C,ae=S;e=y,r=T,n=G,t=K,i=ae;continue e}else return O(t,i,n)}),On=M(function(e,r,n){var t=L2(n),i=h(er,y2(r),D,t),o=A(A2,r,t,0,D,Gl),l=o.a,c=o.b,u=o.c,f=A(D2,r,c,t,0,O(l,D,u)),m=f.a,d=f.b,b=gn(d)?i:X(i,d);return h(w2,e,a(sm,Sc(b),m),a(kt,b,m))}),dl=function(e){return{H:a(re,function(r){return O(3*r,3*r+1,3*r+2)},a(Yr,0,Zn(e)-1)),au:Sc(sr(a(re,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},dm=function(e){switch(e.$){case 0:return Ut;case 1:var t=e.a,r=e.b,n=a(re,gt,r);return h(On,t,Br,dl(n));case 2:var t=e.a,r=e.b,n=a(re,gt,r);return h(On,t,Br,dl(n));case 3:var t=e.a,i=e.b;return h(On,t,Br,i);case 4:var t=e.a,i=e.b;return h(On,t,function(o){return o.e_},i);case 5:var t=e.a,i=e.b;return h(On,t,function(o){return o.e_},i);case 6:var t=e.a,i=e.b;return h(On,t,function(o){return o.e_},i);case 7:var t=e.a,i=e.b;return h(On,t,function(o){return o.e_},i);case 8:return Ut;case 9:return Ut;default:return Ut}},n$=dm(mm),qi=function(e){var r=e;return r.a4},pm={$:0},W=pm,Qe=v(function(e,r){return{$:1,a:e,b:r}}),F2={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},I2=1029,E2=function(e){return{$:5,a:e}},gm=function(e){var r=e;return E2(r)},B2=gm(I2),V2=1028,R2=gm(V2),fr=M(function(e,r,n){return r===1?e?a(P,B2,n):a(P,R2,n):n}),hm={src:`
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
    `,attributes:{position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Lo=ee(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,l,c,u,f,m,d){return A(Ee,h(fr,c,t,d),hm,F2,n,{b7:e,c:l,d:o,e:f,f:i,g:u})}))}),Cc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},bm={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},en=ee(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,l,c,u,f,m,d){return A(Ee,h(fr,c,t,d),bm,Cc,n,{aO:e,c:l,d:o,e:f,f:i,g:u})}))}),_m=v(function(e,r){return{$:3,a:e,b:r}}),O2={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cv",sceneProperties:"f"}},wm={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cv",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},N2=ee(function(e,r,n,t){return a(_m,n,Pe(function(i,o,l,c,u,f,m,d){return A(Ee,d,wm,O2,t,{aO:e,c:l,d:o,cv:r,e:f,f:i,g:u})}))}),zc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Yi=Hp,rn=Ye(function(e,r,n,t,i){return a(Qe,n,Pe(function(o,l,c,u,f,m,d,b){return A(Ee,h(fr,u,i,b),bm,zc,t,{a6:a(Yi,Dt(r),e),c,d:l,e:m,f:o,g:f})}))}),j2={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cv",sceneProperties:"f"}},H2=Ye(function(e,r,n,t,i){return a(_m,t,Pe(function(o,l,c,u,f,m,d,b){return A(Ee,b,wm,j2,i,{a6:a(Yi,Dt(r),e),c,d:l,cv:n,e:m,f:o,g:f})}))}),ym={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",materialColor:"c7",sceneProperties:"f",viewMatrix:"g"}},xm={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Jt=ee(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,l,c,u,f,m,d){var b=m.a,s=m.b;return A(Ee,h(fr,c,t,d),xm,ym,n,{U:s,bF:b.bF,cl:b.cl,cm:b.cm,cn:b.cn,c7:e,c:l,d:o,e:f,f:i,g:u})}))}),Sm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",materialColorTexture:"c8",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Cm={src:`
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
    `,attributes:{normal:"q",position:"e_",tangent:"fd",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},G2=xr(function(e,r,n,t,i,o){return a(Qe,t,Pe(function(l,c,u,f,m,d,b,s){var w=b.a,_=b.b;return A(Ee,h(fr,f,o,s),Cm,Sm,i,{U:_,bF:w.bF,cl:w.cl,cm:w.cm,cn:w.cn,c8:e,c:u,d:c,bg:r,e:d,f:l,bm:n,g:m})}))}),zm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cN",constantBaseColor:"cP",constantMetallic:"cQ",constantRoughness:"cR",enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",metallicTexture:"db",normalMapTexture:"bg",roughnessTexture:"dv",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},W2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return a(Qe,u,Pe(function(d,b,s,w,_,S,C,y){var T=C.a,G=C.b;return A(Ee,h(fr,w,m,y),Cm,zm,f,{cN:e,cP:r,cQ:o,cR:t,U:G,bF:T.bF,cl:T.cl,cm:T.cm,cn:T.cn,db:i,c:s,d:b,bg:l,e:S,dv:n,f:d,bm:c,g:_})}))}}}}}}}}}}},Lm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cM",enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",metallic:"da",roughness:"du",sceneProperties:"f",viewMatrix:"g"}},qt=xr(function(e,r,n,t,i,o){return a(Qe,t,Pe(function(l,c,u,f,m,d,b,s){var w=b.a,_=b.b;return A(Ee,h(fr,f,o,s),xm,Lm,i,{cM:e,U:_,bF:w.bF,cl:w.cl,cm:w.cm,cn:w.cn,da:n,c:u,d:c,e:d,du:r,f:l,g:m})}))}),U2=function(e){return{$:0,a:e}},a$=v(function(e,r){return{$:1,a:e,b:r}}),at=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),J2=function(e){return L(Ra,oa(e),la(e),ca(e),1)},Lc=L(Ra,0,0,0,0),li=v(function(e,r){if(r.$){var t=r.a.E;return z(t,Lc)}else{var n=r.a;return z(e,J2(n))}}),Pm=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return a(a$,z(i,Lc),a(at,i,r))}else if(n.b.$){var i=n.b.a.E;return a(a$,a(li,i,e),a(at,i,r))}else{var t=n.a.a;return n.b.a,U2(t)}}),q2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yt=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Y2=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),X2=function(e){return a(hr,e,1)},pl=a(hr,0,0),fa=v(function(e,r){if(r.$){var t=r.a.E;return z(t,pl)}else{var n=r.a;return z(e,X2(n))}}),Mm=ee(function(e,r,n,t){var i=L(Y2,e,r,n,t);if(i.a.$){var u=i.a.a.E;return L(Yt,z(u,Lc),a(fa,u,r),a(fa,u,n),a(at,u,t))}else if(i.b.$){var u=i.b.a.E;return L(Yt,a(li,u,e),z(u,pl),a(fa,u,n),a(at,u,t))}else if(i.c.$){var u=i.c.a.E;return L(Yt,a(li,u,e),a(fa,u,r),z(u,pl),a(at,u,t))}else if(i.d.$){var u=i.d.a.E;return L(Yt,a(li,u,e),a(fa,u,r),a(fa,u,n),z(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,h(q2,o,l,c)}}),Z2={src:`
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
    `,attributes:{},uniforms:{backlight:"cK",colorTexture:"b7",sceneProperties:"f"}},Po=Ye(function(e,r,n,t,i){return a(Qe,n,Pe(function(o,l,c,u,f,m,d,b){return A(Ee,h(fr,u,i,b),hm,Z2,t,{cK:Dt(r),b7:e,c,d:l,e:m,f:o,g:f})}))}),Tm={src:`
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
    `,attributes:{normal:"q",position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},K2=ee(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,l,c,u,f,m,d){var b=m.a,s=m.b;return A(Ee,h(fr,c,t,d),Tm,Sm,n,{U:s,bF:b.bF,cl:b.cl,cm:b.cm,cn:b.cn,c8:e,c:l,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),Q2=_l(function(e,r,n,t,i,o,l,c,u){return a(Qe,l,Pe(function(f,m,d,b,s,w,_,S){var C=_.a,y=_.b;return A(Ee,h(fr,b,u,S),Tm,zm,c,{cN:e,cP:r,cQ:o,cR:t,U:y,bF:C.bF,cl:C.cl,cm:C.cm,cn:C.cn,db:i,c:d,d:m,bg:e,e:w,dv:n,f,bm:0,g:s})}))}),ht=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),ew=function(e){var r=e;return h(ht,r.eJ,r.eG,.5)},rw=function(e){var r=e;return h(ht,r.eK,r.eH,.5)},nw=function(e){var r=e;return h(ht,r.eL,r.eI,.5)},aw=function(e){return h(Ke,ew(e),rw(e),nw(e))},$e=function(e){var r=qf(e),n=r.a,t=r.b,i=r.c;return{f1:Tt(aw(e)),gC:n/2,gD:t/2,gE:i/2}},Pc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return L(Lo,c,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return L(Lo,c,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return L(Lo,c,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var n=e.b.a;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return L(en,n,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return L(en,n,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return L(en,n,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return L(en,n,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return L(en,n,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return L(en,n,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return L(en,n,$e(i),l,t);case 8:var i=r.a,l=r.c;return L(en,n,$e(i),l,0);case 9:var i=r.a,l=r.c;return L(en,n,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return L(N2,n,o,$e(i),l)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,f=e.c;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return A(Po,c,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return A(Po,c,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return A(Po,c,f,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return A(rn,u,f,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return A(rn,u,f,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return A(rn,u,f,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return A(rn,u,f,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return A(rn,u,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return A(rn,u,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return A(rn,u,f,$e(i),l,t);case 8:var i=r.a,l=r.c;return A(rn,u,f,$e(i),l,0);case 9:var i=r.a,l=r.c;return A(rn,u,f,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return A(H2,u,f,o,$e(i),l)}}case 2:e.a;var m=e.b,ae=e.c,d=a(Pm,m,ae);if(d.$){var w=d.a,_=w.a;w.b;var S=d.b,C=S.a,y=S.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return L(K2,_,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return tr(G2,_,C,y,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}else{var b=d.a;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,s=r.d;return L(Jt,b,$e(i),l,s);case 3:return W;case 4:var i=r.a,l=r.c,s=r.d;return L(Jt,b,$e(i),l,s);case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return L(Jt,b,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return L(Jt,b,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}default:e.a;var T=e.b,G=e.c,K=e.d,ae=e.e,te=L(Mm,T,G,K,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,I=te.c,E=I.a,B=I.b,V=te.d,C=V.a,y=V.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return es(Q2,pe,Me,me,Te,E,B,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return W2(pe)(Me)(me)(Te)(E)(B)(C)(y)($e(i))(l)(t);case 8:return W;case 9:return W;default:return W}}else{var ie=te.a,ne=te.b,q=te.c;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,t=r.d;return tr(qt,ie,ne,q,$e(i),l,t);case 3:return W;case 4:var i=r.a,l=r.c,t=r.d;return tr(qt,ie,ne,q,$e(i),l,t);case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return tr(qt,ie,ne,q,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return tr(qt,ie,ne,q,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}}}),Mo=function(e){var r=e;return r.io},To=function(e){var r=e;return r.is},ko=function(e){var r=e;return r.dO},tw=function(e){var r=e,n=ko(r.dP),t=To(r.dP),i=Mo(r.dP),o=ko(r.dN),l=To(r.dN),c=Mo(r.dN),u=ko(r.dM),f=To(r.dM),m=Mo(r.dM);return m*l*n+f*o*i+u*c*t-u*l*i-f*c*n-m*o*t>0},iw=function(e){var r=Tt(ia(e)),n=kr(En(e)),t=kr(In(e)),i=kr(Fn(e));return{ef:tw(e),t:i.io,u:i.is,v:i.dO,w:t.io,x:t.is,y:t.dO,z:n.io,A:n.is,B:n.dO,K:r.io,L:r.is,M:r.dO,cA:1}},da=v(function(e,r){return{$:5,a:e,b:r}}),km=v(function(e,r){var n=r;switch(n.$){case 0:return W;case 5:var t=n.a,i=n.b,o=a(Of,t,e);return a(da,o,i);case 1:return a(da,e,n);case 3:return a(da,e,n);case 2:return a(da,e,n);default:return a(da,e,n)}}),Dm=v(function(e,r){return a(km,iw(e),r)}),Xi=function(e){return{$:2,a:e}},ow=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f1;return{f1:{io:n*o.io,is:t*o.is,dO:i*o.dO},gC:n*r.gC,gD:t*r.gD,gE:i*r.gE}}),lw=Up,cw=Wp,t$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){var m=e.a,d=e.b,b=e.c,s=cw(t),w=s.io,_=s.is,S=s.dO,C=s.fp,y=lw({fp:C,io:w*m,is:_*d,dO:S*b});return bt(r,n,y,i,o,l,c,u,f)}}}}}}}}}},gl=v(function(e,r){switch(r.$){case 0:return pm;case 5:var n=r.a,t=r.b;return a(da,n,a(gl,e,t));case 1:var i=r.a,o=r.b;return a(Qe,a(ow,e,i),a(t$,e,o));case 3:return r;case 2:var o=r.a;return Xi(a(t$,e,o));default:var l=r.a;return Zf(a(re,gl(e),l))}}),Mc=v(function(e,r){var n=r;return a(gl,e,n)}),Tc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Am=7683,Fm=7682,uw=h(mc,{c6:0,dr:0,dL:15},{bz:or,bO:Aa,bX:or,bY:Am},{bz:or,bO:Aa,bX:or,bY:Fm}),$w=h(mc,{c6:0,dr:0,dL:15},{bz:or,bO:Aa,bX:or,bY:Fm},{bz:or,bO:Aa,bX:or,bY:Am}),kc=v(function(e,r){return e?a(P,$w,r):a(P,uw,r)}),vw={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cB",viewMatrix:"g"}},fw=function(e){if(e.$){var r=e.c;return Y(Pe(function(n,t,i,o,l,c,u,f){return A(Ee,a(kc,o,f),vw,Tc,r,{c:i,d:t,e:c,f:n,cB:u,g:l})}))}else return J},Mi=function(e){var r=fw(e);if(r.$)return W;var n=r.a;return Xi(n)},mw=ee(function(e,r,n,t){var i=a(Pc,n,mm),o=function(){var m=z(e,r);return m.a?m.b?Mt($([i,Mi(n$)])):i:m.b?Mi(n$):W}(),l=qi(t),c=l.a,u=l.b,f=l.c;return a(Dm,Ui(t),a(Mc,O(c,u,f),o))}),sw=v(function(e,r){return L(mw,!0,!0,e,r)}),hl=function(e){return{$:0,a:e}},Im=v(function(e,r){return{$:0,a:e,b:r}}),dw=function(e){var r=Ql(e),n=r.hs,t=r.gz,i=r.fP;return h(Pt,n,t,i)},pw=function(e){return a(Im,0,hl(dw(e)))},Dc=function(e){var r=e;return r.m},tt=function(e){var r=e;return ea(r)},gw=v(function(e,r){var n=r;return n/e}),Fa=ds,i$=function(e){var r=e;return{io:ea(r),is:Fa(r)}},hw=v(function(e,r){var n=e.e_,t=e.q;return a(P,{q:Ji(t),e_:vr(n)},r)}),bw=Di(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,f=ca(c.e_),m=la(c.e_),d=oa(c.e_),b=a(Sa,e,d),s=a(nr,r,d),w=a(Sa,n,m),_=a(nr,t,m),S=a(Sa,i,f),C=a(nr,o,f),y=u;e=b,r=s,n=w,t=_,i=S,o=C,l=y;continue e}else return om({eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i})}),Em=v(function(e,r){var n=ca(e.e_),t=la(e.e_),i=oa(e.e_);return wl(bw,i,i,t,t,n,n,r)}),_w=function(e){var r=h(q$,hw,D,xc(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,yc(e)),o=a(Em,n,t);return L(tm,o,e,i,0)}else return wc},Bm=un({io:0,is:0,dO:-1}),o$=v(function(e,r){var n=e,t=r,i=n.dN,o=i,l=n.dM,c=l;return{io:t.io*c.io+t.is*o.io,is:t.io*c.is+t.is*o.is,dO:t.io*c.dO+t.is*o.dO}}),Ti=function(e){var r=e;return Fa(r)},bl=function(e){return fn(2*Qn*e)},ww=Br,l$=ww({df:Pr,dM:gc,dN:hc}),Vm=function(){var e=72,r=a(gw,e,bl(1)),n=Jn(1),t=wa(bc),i=wa(Bm),o=Jn(1),l=a(ke,.5,o),c=h(Ke,Ur,Ur,l),u=a(ke,-.5,o),f=h(Ke,Ur,Ur,u),m=function(s){var w=a(ke,s,r),_=wa(a(o$,l$,i$(w))),S=a(ke,tt(w),n),C=a(ke,Ti(w),n),y=h(Ke,S,C,l),T=h(Ke,S,C,u),G=a(xi,e,s+1),K=a(ke,G,r),ae=wa(a(o$,l$,i$(K))),te=a(ke,tt(K),n),ie=a(ke,Ti(K),n),ne=h(Ke,te,ie,u),q=h(Ke,te,ie,l);return $([O({q:i,e_:f},{q:i,e_:ne},{q:i,e_:T}),O({q:_,e_:T},{q:ae,e_:ne},{q:ae,e_:q}),O({q:_,e_:T},{q:ae,e_:q},{q:_,e_:y}),O({q:t,e_:c},{q:t,e_:y},{q:t,e_:q})])},d=a(re,m,a(Yr,0,e-1)),b=dl(sr(d));return _c(_w(b))}(),c$=dm(Vm),Rm=function(e){var r=e;return r.gk},Om=function(e){var r=e;return r.df},yw=function(e){var r=Rm(e),n=cc(r),t=n.a,i=n.b;return Vr({df:Om(e),dM:t,dN:i,dP:r})},Nm=function(e){var r=e;return r.g2},jm=function(e){var r=e;return r.hq},xw=ee(function(e,r,n,t){var i=yw(Dc(t)),o=a(Pc,n,Vm),l=function(){var d=z(e,r);return d.a?d.b?Mt($([o,Mi(c$)])):o:d.b?Mi(c$):W}(),c=jm(t),u=c,f=Nm(t),m=f;return a(Dm,i,a(Mc,O(u,u,m),l))}),Sw=v(function(e,r){return L(xw,!0,!0,e,r)}),u$={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},$$={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Qa=function(e){var r=gt(e),n=r.a,t=r.b,i=r.c,o=La(n),l=La(t),c=La(i);return Jr({ep:o.io,eq:l.io,er:c.io,es:0,et:o.is,eu:l.is,ev:c.is,ew:0,ex:o.dO,ey:l.dO,ez:c.dO,eA:0,eB:0,eC:0,eD:0,eE:0})},Xt=fm($([O({dC:0},{dC:1},{dC:2})])),Cw=v(function(e,r){var n=lm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var i=e.b.a;return a(Qe,t,Pe(function(y,T,G,K,ae,te,ie,ne){return A(Ee,h(fr,K,0,ne),u$,Cc,Xt,{aO:i,c:G,d:T,e:te,f:y,bU:Qa(r),g:ae})}));case 1:if(e.b.$)return e.a,W;var o=e.b.a,l=e.c;return a(Qe,t,Pe(function(y,T,G,K,ae,te,ie,ne){return A(Ee,h(fr,K,0,ne),u$,zc,Xt,{a6:a(Yi,Dt(l),o),c:G,d:T,e:te,f:y,bU:Qa(r),g:ae})}));case 2:e.a;var c=e.b,s=e.c,u=a(Pm,c,s);if(u.$)return W;var f=u.a;return a(Qe,t,Pe(function(y,T,G,K,ae,te,ie,ne){var q=ie.a,de=ie.b;return A(Ee,h(fr,K,0,ne),$$,ym,Xt,{U:de,bF:q.bF,cl:q.cl,cm:q.cm,cn:q.cn,c7:f,c:G,d:T,e:te,f:y,bU:Qa(r),g:ae})}));default:e.a;var m=e.b,d=e.c,b=e.d,s=e.e,w=L(Mm,m,d,b,s);if(w.$)return W;var _=w.a,S=w.b,C=w.c;return a(Qe,t,Pe(function(y,T,G,K,ae,te,ie,ne){var q=ie.a,de=ie.b;return A(Ee,h(fr,K,0,ne),$$,Lm,Xt,{cM:_,U:de,bF:q.bF,cl:q.cl,cm:q.cm,cn:q.cn,da:C,c:G,d:T,e:te,du:S,f:y,bU:Qa(r),g:ae})}))}}),zw=function(){var e=$([{bl:a(hr,0,1)},{bl:a(hr,1,1)},{bl:a(hr,2,1)},{bl:a(hr,0,-1)},{bl:a(hr,1,-1)},{bl:a(hr,2,-1)}]),r=$([O(0,1,2),O(3,5,4),O(3,4,1),O(3,1,0),O(4,5,2),O(4,2,1),O(5,3,0),O(5,0,2)]);return a(kt,e,r)}(),Lw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cB",triangleVertexPositions:"bU",viewMatrix:"g"}},v$=function(e){return Xi(Pe(function(r,n,t,i,o,l,c,u){return A(Ee,a(kc,i,u),Lw,Tc,zw,{c:t,d:n,e:l,f:r,cB:c,bU:Qa(e),g:o})}))},Pw=ee(function(e,r,n,t){var i=a(Cw,n,t),o=z(e,r);return o.a?o.b?Mt($([i,v$(t)])):i:o.b?v$(t):W}),Mw=v(function(e,r){return L(Pw,!0,!0,e,r)}),Ac=function(e){var r=e;return r},Tw=v(function(e,r){var n=Xn(r),t=Xn(e),i=Yn(r),o=Yn(e),l=qn(r),c=qn(e);return{eG:a(He,c,l),eH:a(He,o,i),eI:a(He,t,n),eJ:a(Ue,c,l),eK:a(Ue,o,i),eL:a(Ue,t,n)}}),kw=function(e){var r=Ac(e),n=r.a,t=r.b;return a(Tw,n,t)},f$={src:`
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
    `,attributes:{lineSegmentVertex:"en"},uniforms:{lineSegmentEndPoint:"el",lineSegmentStartPoint:"em",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Dw=v(function(e,r){return{$:1,a:e,b:r}}),Aw=Dw({d_:2,eb:0,eN:1}),m$=Aw($([z({en:0},{en:1})])),Fw=v(function(e,r){var n=kw(r),t=$e(n),i=Ac(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var c=e.b.a;return a(Qe,t,Pe(function(f,m,d,b,s,w,_,S){return A(Ee,S,f$,Cc,m$,{aO:c,el:vr(l),em:vr(o),c:d,d:m,e:w,f,g:s})}));case 1:if(e.b.$)return W;var c=e.b.a,u=e.c;return a(Qe,t,Pe(function(m,d,b,s,w,_,S,C){return A(Ee,C,f$,zc,m$,{a6:a(Yi,Dt(u),c),el:vr(l),em:vr(o),c:b,d,e:_,f:m,g:w})}));case 2:return W;default:return W}}),Iw=v(function(e,r){return a(Fw,e,r)}),Zi=function(e){var r=e;return r.f1},Ki=function(e){var r=e;return r.hq},s$=v(function(e,r){var n=e,t=r;return n/t}),Ew=Ye(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(P,o,i);if(_e(r,e))return l;var c=e,u=r-1,f=n,m=t,d=l;e=c,r=u,n=f,t=m,i=d;continue e}}),d$=v(function(e,r){return e<1?D:A(Ew,0,e,e,r,D)}),Bw=v(function(e,r){var n=e.e_,t=e.q,i=e.O,o=i,l=o.a,c=o.b;return a(P,{q:Ji(t),e_:vr(n),O:a(hr,l,c)},r)}),Vw=function(e){var r=h(q$,Bw,D,xc(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,yc(e)),o=a(Em,n,t);return L(im,o,e,i,0)}else return wc},Fc=v(function(e,r){var n=e,t=r,i=ea(t);return{io:i*ea(n),is:i*Fa(n),dO:Fa(t)}}),Rw=function(){var e=Jn(1),r=72,n=a(Yr,0,r-1),t=a(d$,r,a(ht,Ur,bl(1))),i=ot(r/2),o=a(Yr,0,i-1),l=a(d$,i,a(ht,Za(90),Za(-90))),c=Sc(sr(a(re,function(m){return a(re,function(d){return{q:wa(a(Fc,m,d)),e_:h(Ke,a(ke,tt(d)*tt(m),e),a(ke,tt(d)*Ti(m),e),a(ke,Ti(d),e)),O:z(a(s$,m,bl(1)),a(s$,a(nt,Za(90),d),Za(180)))}},l)},t))),u=v(function(m,d){return m*(i+1)+d}),f=sr(a(re,function(m){return sr(a(re,function(d){var b=a(u,m+1,d),s=a(u,m,d),w=a(u,m+1,d+1),_=a(u,m,d+1);return $([O(_,w,b),O(_,b,s)])},o))},n));return _c(Vw(a(sm,c,f)))}(),ki=72,Zt=2*ki,Ow=v(function(e,r){e:for(;;){var n=Zt+1,t=a(xi,Zt,2*e+3),i=a(xi,Zt,2*e+2),o=2*e+1,l=2*e,c=Zt,u=a(P,O(c,l,i),a(P,O(l,t,i),a(P,O(l,o,t),a(P,O(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Nw=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),jw=v(function(e,r){e:for(;;){var n=h(Nw,0,2*Qn,e/ki),t={b_:n,cs:0,cy:1},i={b_:n,cs:1,cy:1},o=a(P,t,a(P,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Hw=function(){var e=a(jw,ki-1,$([{b_:0,cs:0,cy:0},{b_:0,cs:1,cy:0}])),r=a(Ow,ki-1,D);return a(kt,e,r)}(),Gw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"cs",radiusScale:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cB",viewMatrix:"g"}},p$=function(e){return Xi(Pe(function(r,n,t,i,o,l,c,u){return A(Ee,a(kc,!0,u),Gw,Tc,Hw,{aO:h(Pt,0,0,1),c:t,d:n,e:l,f:r,cB:c,g:o})}))},Ww=function(e){var r=um(e);return{ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dO,cA:1}},Uw=v(function(e,r){return a(km,Ww(e),r)}),Jw=ee(function(e,r,n,t){var i=a(Pc,n,Rw),o=function(){var u=z(e,r);return u.a?u.b?Mt($([i,p$()])):i:u.b?p$():W}(),l=Ki(t),c=l;return a(Uw,a(Li,Pr,Zi(t)),a(Mc,O(c,c,c),o))}),qw=v(function(e,r){return L(Jw,!0,!0,e,r)}),Yw=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Hm=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Xw=Ye(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Zw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Im,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(Yw,n,t,r);case 2:var n=e.a,t=e.b,l=e.c;return h(Hm,n,t,l);default:var n=e.a,t=e.b,i=e.c,o=e.d,l=e.e;return A(Xw,n,t,i,o,l)}},Kw=Zw,Gm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(sw,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Mw,i,n)]);case 3:var i=e.a,t=e.b;return $([a(qw,Kw(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Sw,i,o)]);case 4:var l=e.a,c=e.b;return $([a(Iw,pw(l),c)]);default:var u=e.a;return a(Ba,Gm,u)}},Qw=function(e){return a(Ba,Gm,e)},ey=v(function(e,r){return c2({fG:e.fG,a1:j1(e.fL),fZ:e.fZ,f5:Jn(e.f5),cS:e.cS,a4:z(e$(Be(e.dw.im)),e$(Be(e.dw.gG))),a8:Qw(r),gs:e.gs,g4:e.g4,ic:e.ic,il:e.il})}),Wm=function(e){return e},ry=v(function(e,r){var n=e,t=kr(r.gk),i=t.io,o=t.is,l=t.dO,c=a(Wi,r.ci,r.a3),u=c;return{b0:ca(u),f0:n,ce:la(u),$7:0,cx:oa(u),dD:1,io:-i,is:-o,dO:-l}}),ny=function(e){return a(ry,Wm(!0),{a3:e.a3,gk:a(Fc,fn(e.b$),fn(e.cc)),ci:e.ci})},ay=function(e){return e},ty=function(e){return ay(1.2*a(Va,2,e))},Do=$c({io:.37208,is:.37529}),iy=v(function(e,r){return{$:2,a:e,b:r}}),Um=function(e){return{$:0,a:e}},Kt=function(e){var r=e;return r},oy=function(e){var r=e;return r.f0},ly=Um(Ka.a),cy=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?z(a(P,t,o),l):z(o,a(P,t,l))});return h(er,n,z(D,D),r)}),uy=function(e){var r=e;return Jr({ep:r.io,eq:r.cx,er:0,es:0,et:r.is,eu:r.ce,ev:0,ew:0,ex:r.dO,ey:r.b0,ez:0,eA:0,eB:r.dD,eC:r.$7,eD:0,eE:0})},$y=Pe(function(e,r,n,t,i,o,l,c){var u=a(cy,oy,$([Kt(e),Kt(r),Kt(n),Kt(t)])),f=u.a,m=u.b;if(f.b){var d=X(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,s=d.b,w=s.a,_=s.b,S=_.a,C=_.b,y=C.a;return a(iy,a(re,uy,f),{bF:a(Cr,b,w),cl:a(Cr,S,y),cm:a(Cr,i,o),cn:a(Cr,l,c)})}else return ly}else return Um({bF:a(Cr,e,r),cl:a(Cr,n,t),cm:a(Cr,i,o),cn:a(Cr,l,c)})}),vy=ee(function(e,r,n,t){return bt($y,e,r,n,t,pr,pr,pr,pr)}),fy=v(function(e,r){return a(Oe,function(n){if(n.$)return 0;var t=n.b;return t},a(Vi,e,r.aN))}),my=v(function(e,r){return a(Fe,0,ac(a(xn,fy(e),r)))}),sy=v(function(e,r){return a(my,e,r.f9)}),nn=sy,dy=L(zt,211/255,215/255,207/255,1),py={$:5},gy=py,hy=$c({io:.44757,is:.40745}),by=function(e){return e},g$=function(e){return e},Ao=function(e){return e},_y={$:1},wy=_y,yy=v(function(e,r){var n=e,t=Tt(r.e_),i=t.io,o=t.is,l=t.dO,c=a(Wi,r.ci,r.a3),u=c;return{b0:ca(u),f0:n,ce:la(u),$7:0,cx:oa(u),dD:2,io:i,is:o,dO:l}}),h$=function(e){return a(yy,Wm(!0),{a3:e.a3,ci:e.ci,e_:ai(e.e_)})},Qi=v(function(e,r){return{$:0,a:e,b:r}}),Fo=v(function(e,r){var n=e,t=r;return be(t,n)>-1}),Io=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),xy=un({io:-1,is:0,dO:0}),Sy=un({io:0,is:-1,dO:0}),Cy=xr(function(e,r,n,t,i,o){var l=a(Fo,n,o)?bc:Bm,c=a(Fo,r,i)?uc:Sy,u=a(Fo,e,t)?rm:xy,f=O(qe(a($n,e,t)),qe(a($n,r,i)),qe(a($n,n,o))),m=h(Ke,a(Io,e,t),a(Io,r,i),a(Io,n,o)),d=Vr({df:m,dM:u,dN:c,dP:l});return{fK:d,a4:f}}),zy=v(function(e,r){return tr(Cy,qn(e),Yn(e),Xn(e),qn(r),Yn(r),Xn(r))}),Ly=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=O(n/2,t/2,i/2),l=o.a,c=o.b,u=o.c;return a(Qi,e,a(zy,h(vl,-l,-c,-u),h(vl,l,c,u)))}),eo=function(e){return{$:5,a:e}},Py=function(e){return eo(e)},My=ee(function(e,r,n,t){var i=O(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,f=c*2-u,m=function(w){var _=w<0?w+1:w>1?w-1:w;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},d=m(o-1/3),b=m(o),s=m(o+1/3);return L(zt,s,b,d,t)}),Ty=M(function(e,r,n){return L(My,e,r,n,1)}),Eo=function(e){return h(Rf,0,1,e<=.04045?e/12.92:a(Va,(e+.055)/1.055,2.4))},ky=function(e){var r=Ql(e),n=r.hs,t=r.gz,i=r.fP;return h(Pt,Eo(n),Eo(t),Eo(i))},Dy=function(e){return h(Hm,0,hl(ky(e)),hl(0))},Ic=v(function(e,r){return{$:2,a:e,b:r}}),Ec=v(function(e,r){return{$:4,a:e,b:r}}),Bc=v(function(e,r){return{$:3,a:e,b:r}}),Vc=v(function(e,r){return{$:1,a:e,b:r}}),Ay=M(function(e,r,n){return{io:e,is:r,dO:n}}),At=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dO:t.dO+n.dO}}),Fy=v(function(e,r){return Vr({df:a(At,e,ia(r)),dM:Fn(r),dN:In(r),dP:En(r)})}),Iy=v(function(e,r){return{fK:a(Fy,e,Ui(r)),a4:qi(r)}}),Oa=v(function(e,r){return{gk:r,df:e}}),Ey=v(function(e,r){var n=r;return a(Oa,a(At,e,n.df),n.gk)}),By=v(function(e,r){var n=r;return{m:a(Ey,e,n.m),g2:n.g2,hq:n.hq}}),Vy=function(e){return e},Rc=v(function(e,r){var n=Ac(r),t=n.a,i=n.b;return Vy(z(e(t),e(i)))}),Ry=v(function(e,r){return a(Rc,At(e),r)}),Oc=v(function(e,r){return{f1:r,hq:qe(e)}}),Oy=v(function(e,r){return a(Oc,Ki(r),a(At,e,Zi(r)))}),Nc=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return O(e(t),e(i),e(o))}),Ny=v(function(e,r){return a(Nc,At(e),r)}),Jm=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(Ay,n,t,i);switch(r.$){case 0:var m=r.a,l=r.b;return a(Qi,m,a(Iy,o,l));case 1:var m=r.a,c=r.b;return a(Vc,m,a(Ny,o,c));case 3:var m=r.a,u=r.b;return a(Bc,m,a(Oy,o,u));case 2:var m=r.a,f=r.b;return a(Ic,m,a(By,o,f));case 4:var m=r.a,d=r.b;return a(Ec,m,a(Ry,o,d));default:var b=r.a;return eo(a(re,Jm(O(n,t,i)),b))}}),b$=function(e){return Jm(O(e,0,0))},ci=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ea(l),u=Fa(l),f=t.gk,m=f,d=m.io*u,b=c*d,s=d*d,w=m.is*u,_=c*w,S=d*w,C=w*w,y=1-2*(s+C),T=m.dO*u,G=c*T,K=2*(S-G),ae=2*(S+G),te=d*T,ie=2*(te+_),ne=2*(te-_),q=w*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+K*o.is+ie*o.dO,is:ae*o.io+me*o.is+de*o.dO,dO:ne*o.io+pe*o.is+y*o.dO}}),Ft=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ea(l),u=Fa(l),f=t.df,m=f,d=o.io-m.io,b=o.is-m.is,s=o.dO-m.dO,w=t.gk,_=w,S=_.io*u,C=c*S,y=S*S,T=_.is*u,G=c*T,K=S*T,ae=T*T,te=1-2*(y+ae),ie=_.dO*u,ne=c*ie,q=2*(K-ne),de=2*(K+ne),pe=S*ie,Me=2*(pe+G),Se=2*(pe-G),me=T*ie,Te=2*(me-C),I=2*(me+C),E=ie*ie,B=1-2*(ae+E),V=1-2*(y+E);return{io:m.io+B*d+q*b+Me*s,is:m.is+de*d+V*b+Te*s,dO:m.dO+Se*d+I*b+te*s}}),jy=M(function(e,r,n){return Vr({df:h(Ft,e,r,ia(n)),dM:h(ci,e,r,Fn(n)),dN:h(ci,e,r,In(n)),dP:h(ci,e,r,En(n))})}),Hy=M(function(e,r,n){return{fK:h(jy,e,r,Ui(n)),a4:qi(n)}}),Gy=v(function(e,r){var n=a(Ft,e,r),t=a(ci,e,r);return function(i){var o=i;return a(Oa,n(o.df),t(o.gk))}}),Wy=M(function(e,r,n){var t=n;return{m:h(Gy,e,r,t.m),g2:t.g2,hq:t.hq}}),Uy=M(function(e,r,n){return a(Rc,a(Ft,e,r),n)}),Jy=M(function(e,r,n){return a(Oc,Ki(n),h(Ft,e,r,Zi(n)))}),qy=M(function(e,r,n){return a(Nc,a(Ft,e,r),n)}),ro=M(function(e,r,n){switch(n.$){case 0:var c=n.a,t=n.b;return a(Qi,c,h(Hy,e,r,t));case 1:var c=n.a,i=n.b;return a(Vc,c,h(qy,e,r,i));case 3:var c=n.a,o=n.b;return a(Bc,c,h(Jy,e,r,o));case 2:var c=n.a,l=n.b;return a(Ic,c,h(Wy,e,r,l));case 4:var c=n.a,u=n.b;return a(Ec,c,h(Uy,e,r,u));default:var f=n.a;return eo(a(re,a(ro,e,r),f))}}),Yy=a(Oa,Pr,gc),Xy=v(function(e,r){return h(ro,Yy,fn(e),r)}),Zy=a(Oa,Pr,hc),Ky=v(function(e,r){return h(ro,Zy,fn(e),r)}),Qy=a(Oa,Pr,nm),ex=v(function(e,r){return h(ro,Qy,fn(e),r)}),It=M(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dO:t.dO+r*(i.dO-t.dO)}}),rx=M(function(e,r,n){var t=Ui(n),i=Fn(t),o=In(t),l=En(t),c=h(It,e,r,ia(t)),u=r>=0?Vr({df:c,dM:i,dN:o,dP:l}):Vr({df:c,dM:yn(i),dN:yn(o),dP:yn(l)}),f=qi(n),m=f.a,d=f.b,b=f.c,s=qe(a(ke,r,m)),w=qe(a(ke,r,d)),_=qe(a(ke,r,b));return{fK:u,a4:O(s,w,_)}}),_$=function(e){return Rm(Dc(e))},nx=function(e){return Om(Dc(e))},ax=M(function(e,r,n){var t=qe(a(ke,r,jm(n))),i=qe(a(ke,r,Nm(n))),o=r>=0?_$(n):yn(_$(n)),l=h(It,e,r,nx(n));return{m:a(Oa,l,o),g2:i,hq:t}}),tx=M(function(e,r,n){return a(Rc,a(It,e,r),n)}),ix=M(function(e,r,n){return a(Oc,a(ke,he(r),Ki(n)),h(It,e,r,Zi(n)))}),ox=M(function(e,r,n){return a(Nc,a(It,e,r),n)}),qm=v(function(e,r){switch(r.$){case 0:var l=r.a,n=r.b;return a(Qi,l,h(rx,Pr,e,n));case 1:var l=r.a,t=r.b;return a(Vc,l,h(ox,Pr,e,t));case 3:var l=r.a,i=r.b;return a(Bc,l,h(ix,Pr,e,i));case 2:var l=r.a,o=r.b;return a(Ic,l,h(ax,Pr,e,o));case 4:var l=r.a,c=r.b;return a(Ec,l,h(tx,Pr,e,c));default:var u=r.a;return eo(a(re,qm(e),u))}}),lx=function(e){var r=function(i){return .1*i},n=function(i){return L(Vf,0,1,4,e.cO+r(i))},t=function(i){return a(b$,1.4*i,a(ex,n(i),a(Xy,n(i),a(Ky,n(i),a(b$,a(nn,"a",e)*i,a(qm,a(nn,"a",e)*i,a(Ly,Dy(h(Ty,n(i),.6,.8)),O(1,3,1))))))))};return Py(a(re,t,a(Yr,-10,10)))},cx=v(function(e,r){return $([lx(e)])}),w$=function(e){var r=e;return r},ux=function(e){e:for(;;){if(_e(e.ed,Ur)&&_e(e.ee,Ur))return pr;if(a(Ef,qe(e.ed),qe(e.ee))){var r={a3:e.a3,ed:e.ee,ee:e.ed,fi:yn(e.fi)};e=r;continue e}else{var n=he(w$(e.ee)/Qn),t=he(w$(e.ed)/Qn),i=kr(e.fi),o=i.io,l=i.is,c=i.dO,u=a(Wi,$m(1),e.a3),f=u;return{b0:t*ca(f),f0:!1,ce:t*la(f),$7:n/t,cx:t*oa(f),dD:3,io:o,is:l,dO:c}}}},$x=function(e){return ux({a3:e.a3,ed:e.ed,ee:e.ee,fi:a(Fc,fn(e.b$),fn(e.cc))})},vx=v(function(e,r){var n=ny({b$:a(nn,"azimuth for third light",e),a3:N1(by(2e3)),cc:a(nn,"elevation for third light",e),ci:Ao(a(Va,10,a(nn,"lux",e)))}),t=h$({a3:Do,ci:g$(6e3),e_:{io:-45,is:-30,dO:45}}),i=$x({b$:a(nn,"azimuth for fourth light",e),a3:Do,cc:a(nn,"elevation for fourth light",e),ed:Ao(a(nn,"intensity above",e)),ee:Ao(a(nn,"intensity below",e))}),o=h$({a3:hy,ci:g$(6e3),e_:{io:-45,is:30,dO:45}});return a(ey,{fG:wy,fL:dy,fZ:R1(e),f5:.1,cS:e.cS,gs:ty(6),g4:L(vy,o,t,n,i),dw:e.dw,ic:gy,il:Do},a(cx,e,r))}),fx=L(d1,vx,w1,_1,p1);const mx={Main:{init:fx(a(Q,function(e){return cr({gX:e})},a(Z,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return cr({cO:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(Z,"clock",We))},a(Z,"devicePixelRatio",We))},a(Z,"dt",We))},a(Z,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return cr({fF:d,gb:m,dZ:f,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(Z,"alt",Le))},a(Z,"control",Le))},a(Z,"down",Le))},a(Z,"downs",hi(Ma)))},a(Z,"left",Le))},a(Z,"pressedKeys",hi(Ma)))},a(Z,"right",Le))},a(Z,"shift",Le))},a(Z,"up",Le))))},a(Z,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return cr({dZ:f,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(Z,"down",Le))},a(Z,"isDown",Le))},a(Z,"move",Le))},a(Z,"rightDown",Le))},a(Z,"rightUp",Le))},a(Z,"up",Le))},a(Z,"x",We))},a(Z,"y",We))))},a(Z,"screen",a(Q,function(r){return a(Q,function(n){return cr({gG:n,im:r})},a(Z,"height",We))},a(Z,"width",We))))},a(Z,"wheel",a(Q,function(e){return a(Q,function(r){return cr({gf:r,gg:e})},a(Z,"deltaX",We))},a(Z,"deltaY",We)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},sx=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",l=s=>s.code=="ArrowUp",c=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),l(s)&&(oe.keyboard.up=!0),c(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(w=>w!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),l(s)&&(oe.keyboard.up=!1),c(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const w=s/1e3,_=w-oe.clock;_<.009||(oe.dt=_,oe.clock=w,e.ports.tick.send(oe),d(oe)),window.requestAnimationFrame(b)}},dx=mx.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});sx(dx);
