const ms=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ms();function In(e,r,n){return n.a=e,n.f=r,n}function v(e){return In(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return In(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function re(e){return In(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Xe(e){return In(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Sr(e){return In(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function Ei(e){return In(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function Pe(e){return In(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return e(r,n,t,i,o,l,c,$)}}}}}}}})}function Pl(e){return In(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(f){return e(r,n,t,i,o,l,c,$,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function tr(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function Ml(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function Lt(e,r,n,t,i,o,l,c,$){return e.a===8?e.f(r,n,t,i,o,l,c,$):e(r)(n)(t)(i)(o)(l)(c)($)}function ss(e,r,n,t,i,o,l,c,$,f){return e.a===9?e.f(r,n,t,i,o,l,c,$,f):e(r)(n)(t)(i)(o)(l)(c)($)(f)}var ds=[];function ps(e){return e.length}var gs=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),hs=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,z(n,r)}),bs=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var _s=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+ws()),r});function ws(e){return"<internals>"}function Va(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function he(e,r){for(var n,t=[],i=Go(e,r,0,t);i&&(n=t.pop());i=Go(n.a,n.b,0,t));return i}function Go(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Va(5),!1;if(n>100)return t.push(z(e,r)),!0;e.$<0&&(e=lu(e),r=lu(r));for(var i in e)if(!Go(e[i],r[i],n+1,t))return!1;return!0}v(he);v(function(e,r){return!he(e,r)});function _e(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=_e(e.a,r.a))||(n=_e(e.b,r.b))?n:_e(e.c,r.c);for(;e.b&&r.b&&!(n=_e(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return _e(e,r)<0});v(function(e,r){return _e(e,r)<1});v(function(e,r){return _e(e,r)>0});v(function(e,r){return _e(e,r)>=0});var ys=v(function(e,r){var n=_e(e,r);return n<0?Z$:n?s0:X$}),Pt=0;function z(e,r){return{a:e,b:r}}function D(e,r,n){return{a:e,b:r,c:n}}function je(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Qr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Qr(e.a,r);return n}var A={$:0};function Qr(e,r){return{$:1,a:e,b:r}}var xs=v(Qr);function u(e){for(var r=A,n=e.length;n--;)r=Qr(e[n],r);return r}function Vi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ss=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)});re(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return u(i)});Xe(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return u(o)});Sr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,t.a,i.a,o.a));return u(l)});v(function(e,r){return u(Vi(r).sort(function(n,t){return _e(e(n),e(t))}))});v(function(e,r){return u(Vi(r).sort(function(n,t){var i=a(e,n,t);return i===X$?0:i===Z$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Cs=v(Math.pow);v(function(e,r){return r%e});var zs=v(function(e,r){var n=r%e;return e===0?Va(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ls=Math.PI,Ps=Math.cos,Ms=Math.sin,Ts=Math.tan;v(Math.atan2);function ks(e){return e}function Ds(e){return e===1/0||e===-1/0}var As=Math.ceil,Fs=Math.floor,Is=Math.round,Bs=Math.sqrt,qc=Math.log,Es=isNaN;function Vs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Rs=v(function(e,r){return e+r});function js(e){var r=e.charCodeAt(0);return isNaN(r)?J:X(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}v(function(e,r){return e+r});function Us(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Ns(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Ws=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Hs=v(function(e,r){return r.split(e)}),Gs=v(function(e,r){return r.join(e)}),Os=M(function(e,r,n){return n.slice(e,r)});function qs(e){return u(e.trim().split(/\s+/g))}function Js(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Ys=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Xs=v(function(e,r){return r.indexOf(e)>-1}),Zs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Qs=v(function(e,r){var n=e.length;if(n<1)return A;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return u(i)});function x$(e){return e+""}function Ks(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:X(n==45?-r:r)}function ed(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?X(r):J}function rd(e){return Vi(e).join("")}function nd(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ad(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function td(e){return{$:0,a:e}}function id(e){return{$:1,a:e}}function Tl(e){return{$:2,b:e}}var od=Tl(function(e){return typeof e=="boolean"?Ge(e):Gr("a BOOL",e)}),ld=Tl(function(e){return typeof e=="number"?Ge(e):Gr("a FLOAT",e)}),cd=Tl(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Gr("a STRING",e)});function ud(e){return{$:3,b:e}}var $d=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Bn(e,r){return{$:9,f:e,g:r}}var vd=v(function(e,r){return{$:10,b:r,h:e}}),fd=v(function(e,r){return Bn(e,[r])}),md=M(function(e,r,n){return Bn(e,[r,n])});re(function(e,r,n,t){return Bn(e,[r,n,t])});Xe(function(e,r,n,t,i){return Bn(e,[r,n,t,i])});Sr(function(e,r,n,t,i,o){return Bn(e,[r,n,t,i,o])});Ei(function(e,r,n,t,i,o,l){return Bn(e,[r,n,t,i,o,l])});Pe(function(e,r,n,t,i,o,l,c){return Bn(e,[r,n,t,i,o,l,c])});Pl(function(e,r,n,t,i,o,l,c,$){return Bn(e,[r,n,t,i,o,l,c,$])});v(function(e,r){try{var n=JSON.parse(r);return Lr(e,n)}catch(t){return ir(a(Wl,"This is not valid JSON! "+t.message,r))}});var S$=v(function(e,r){return Lr(e,r)});function Lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Gr("null",r);case 3:return Ot(r)?Jc(e.b,r,u):Gr("a LIST",r);case 4:return Ot(r)?Jc(e.b,r,sd):Gr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Gr("an OBJECT with a field named `"+n+"`",r);var f=Lr(e.b,r[n]);return Er(f)?f:ir(a(cu,n,f.a));case 7:var t=e.e;if(!Ot(r))return Gr("an ARRAY",r);if(t>=r.length)return Gr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Lr(e.b,r[t]);return Er(f)?f:ir(a(Q$,t,f.a));case 8:if(typeof r!="object"||r===null||Ot(r))return Gr("an OBJECT",r);var i=A;for(var o in r)if(r.hasOwnProperty(o)){var f=Lr(e.b,r[o]);if(!Er(f))return ir(a(cu,o,f.a));i=Qr(z(o,f.a),i)}return Ge(dr(i));case 9:for(var l=e.f,c=e.g,$=0;$<c.length;$++){var f=Lr(c[$],r);if(!Er(f))return f;l=l(f.a)}return Ge(l);case 10:var f=Lr(e.b,r);return Er(f)?Lr(e.h(f.a),r):f;case 11:for(var m=A,p=e.g;p.b;p=p.b){var f=Lr(p.a,r);if(Er(f))return f;m=Qr(f.a,m)}return ir(d0(dr(m)));case 1:return ir(a(Wl,e.a,r));case 0:return Ge(e.a)}}function Jc(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=Lr(e,r[o]);if(!Er(l))return ir(a(Q$,o,l.a));i[o]=l.a}return Ge(n(i))}function Ot(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function sd(e){return a(T0,e.length,function(r){return e[r]})}function Gr(e,r){return ir(a(Wl,"Expecting "+e,r))}function ha(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ha(e.b,r.b);case 6:return e.d===r.d&&ha(e.b,r.b);case 7:return e.e===r.e&&ha(e.b,r.b);case 9:return e.f===r.f&&Yc(e.g,r.g);case 10:return e.h===r.h&&ha(e.b,r.b);case 11:return Yc(e.g,r.g)}}function Yc(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!ha(e[t],r[t]))return!1;return!0}var dd=v(function(e,r){return JSON.stringify(r,null,e)+""});function C$(e){return e}function pd(){return[]}function gd(){return{}}var hd=M(function(e,r,n){return n[e]=r,n});function bd(e){return v(function(r,n){return n.push(e(r)),n})}function oa(e){return{$:0,a:e}}function _d(e){return{$:1,a:e}}function _n(e){return{$:2,b:e,c:null}}var Oo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function wd(e){return{$:5,b:e}}var yd=0;function kl(e){var r={$:0,e:yd++,f:e,g:null,h:[]};return Dl(r),r}function z$(e){return _n(function(r){r(oa(kl(e)))})}function L$(e,r){e.h.push(r),Dl(e)}var xd=v(function(e,r){return _n(function(n){L$(e,r),n(oa(Pt))})}),wo=!1,Xc=[];function Dl(e){if(Xc.push(e),!wo){for(wo=!0;e=Xc.shift();)Sd(e);wo=!1}}function Sd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Dl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}re(function(e,r,n,t){return Al(r,t,e.gT,e.im,e.h$,function(){return function(){}})});function Al(e,r,n,t,i,o){var l=a(S$,e,r?r.flags:void 0);Er(l)||Va(2);var c={},$=n(l.a),f=$.a,m=o(b,f),p=Cd(c,b);function b(s,w){var _=a(t,s,f);m(f=_.a,w),Qc(c,_.b,i(f))}return Qc(c,$.b,i(f)),p?{ports:p}:{}}var Yr={};function Cd(e,r){var n;for(var t in Yr){var i=Yr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Ld(i,r)}return n}function zd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Ld(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c($){return a(Oo,c,wd(function(f){var m=f.a;return f.$===0?h(i,n,m,$):o&&l?L(t,n,m.i,m.j,$):h(t,n,o?m.i:m.j,$)}))}return n.h=kl(a(Oo,c,e.b))}var Pd=v(function(e,r){return _n(function(n){e.g(r),n(oa(Pt))})});v(function(e,r){return a(xd,e.h,{$:0,a:r})});function P$(e){return function(r){return{$:1,k:e,l:r}}}function Md(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Zc=[],yo=!1;function Qc(e,r,n){if(Zc.push({p:e,q:r,r:n}),!yo){yo=!0;for(var t;t=Zc.shift();)Td(t.p,t.q,t.r);yo=!1}}function Td(e,r,n){var t={};di(!0,r,t,null),di(!1,n,t,null);for(var i in e)L$(e[i],{$:"fx",a:t[i]||{i:A,j:A}})}function di(e,r,n,t){switch(r.$){case 1:var i=r.k,o=kd(e,i,t,r.l);n[i]=Dd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)di(e,l.a,n,t);return;case 3:di(e,r.o,n,{s:r.n,t});return}}function kd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Yr[r].e:Yr[r].f;return a(o,i,t)}function Dd(e,r,n){return n=n||{i:A,j:A},e?n.i=Qr(r,n.i):n.j=Qr(r,n.j),n}function Ad(e){Yr[e]&&Va(3)}v(function(e,r){return r});function Fd(e,r){return Ad(e),Yr[e]={f:Id,u:r,a:Bd},P$(e)}var Id=v(function(e,r){return function(n){return e(r(n))}});function Bd(e,r){var n=A,t=Yr[e].u,i=oa(null);Yr[e].b=i,Yr[e].c=M(function(l,c,$){return n=c,i});function o(l){var c=a(S$,t,l);Er(c)||Va(4,e,c.a);for(var $=c.a,f=n;f.b;f=f.b)r(f.a($))}return{send:o}}var pi,fn=typeof document!="undefined"?document:{};function Fl(e,r){e.appendChild(r)}re(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(Ln(e,function(){}),i),{}});function qo(e){return{$:0,a:e}}var M$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Bl(n),e:i,f:e,b:o}})}),en=M$(void 0),Ed=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Bl(n),e:i,f:e,b:o}})}),Vd=Ed(void 0);function Rd(e,r,n,t){return{$:3,d:Bl(e),g:r,h:n,i:t}}var jd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function En(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return En([e,r],function(){return e(r)})});M(function(e,r,n){return En([e,r,n],function(){return a(e,r,n)})});var Ud=re(function(e,r,n,t){return En([e,r,n,t],function(){return h(e,r,n,t)})});Xe(function(e,r,n,t,i){return En([e,r,n,t,i],function(){return L(e,r,n,t,i)})});Sr(function(e,r,n,t,i,o){return En([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});Ei(function(e,r,n,t,i,o,l){return En([e,r,n,t,i,o,l],function(){return tr(e,r,n,t,i,o,l)})});Pe(function(e,r,n,t,i,o,l,c){return En([e,r,n,t,i,o,l,c],function(){return Ml(e,r,n,t,i,o,l,c)})});Pl(function(e,r,n,t,i,o,l,c,$){return En([e,r,n,t,i,o,l,c,$],function(){return Lt(e,r,n,t,i,o,l,c,$)})});var T$=v(function(e,r){return{$:"a0",n:e,o:r}}),Nd=v(function(e,r){return{$:"a1",n:e,o:r}}),Il=v(function(e,r){return{$:"a2",n:e,o:r}}),Ur=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function k$(e){return e=="script"?"p":e}function Wd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Hd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Gd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function D$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Od=v(function(e,r){return r.$==="a0"?a(T$,r.n,qd(e,r.o)):r});function qd(e,r){var n=Jl(r);return{$:r.$,a:n?h(k0,n<3?Jd:Yd,ur(e),r.a):a(_i,e,r.a)}}var Jd=v(function(e,r){return z(e(r.a),r.b)}),Yd=v(function(e,r){return{aA:e(r.aA),dF:r.dF,du:r.du}});function Bl(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Kc(r,i,o):r[i]=o;continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?Kc(l,i,o):l[i]=o}return r}function Kc(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Ln(e,r){var n=e.$;if(n===5)return Ln(e.k||(e.k=e.m()),r);if(n===0)return fn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=Ln(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Jo(l,r,e.d),l}var l=e.f?fn.createElementNS(e.f,e.c):fn.createElement(e.c);pi&&e.c=="a"&&l.addEventListener("click",pi(l)),Jo(l,r,e.d);for(var c=e.e,$=0;$<c.length;$++)Fl(l,Ln(n===1?c[$]:c[$].b,r));return l}function Jo(e,r,n){for(var t in n){var i=n[t];t==="a1"?Xd(e,i):t==="a0"?Kd(e,r,i):t==="a3"?Zd(e,i):t==="a4"?Qd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Xd(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Zd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Qd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Kd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=ep(r,o),e.addEventListener(i,l,El&&{passive:Jl(o)<2}),t[i]=l}}var El;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){El=!0}}))}catch{}function ep(e,r){function n(t){var i=n.q,o=Lr(i.a,t);if(!!Er(o)){for(var l=Jl(i),c=o.a,$=l?l<3?c.a:c.aA:c,f=l==1?c.b:l==3&&c.dF,m=(f&&t.stopPropagation(),(l==2?c.b:l==3&&c.du)&&t.preventDefault(),e),p,b;p=m.j;){if(typeof p=="function")$=p($);else for(var b=p.length;b--;)$=p[b]($);m=m.p}m($,f)}}return n.q=r,n}function rp(e,r){return e.$==r.$&&ha(e.a,r.a)}function A$(e,r){var n=[];return Vr(e,r,n,0),n}function ar(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Vr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=up(r),o=1;else{ar(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,$=l.length,f=$===c.length;f&&$--;)f=l[$]===c[$];if(f){r.k=e.k;return}r.k=r.m();var m=[];Vr(e.k,r.k,m,0),m.length>0&&ar(n,1,t,m);return;case 4:for(var p=e.j,b=r.j,s=!1,w=e.k;w.$===4;)s=!0,typeof p!="object"?p=[p,w.j]:p.push(w.j),w=w.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&p.length!==b.length){ar(n,0,t,r);return}(s?!np(p,b):p!==b)&&ar(n,2,t,b),Vr(w,_,n,t+1);return;case 0:e.a!==r.a&&ar(n,3,t,r.a);return;case 1:eu(e,r,n,t,ap);return;case 2:eu(e,r,n,t,tp);return;case 3:if(e.h!==r.h){ar(n,0,t,r);return}var S=Vl(e.d,r.d);S&&ar(n,4,t,S);var C=r.i(e.g,r.g);C&&ar(n,5,t,C);return}}}function np(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function eu(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){ar(n,0,t,r);return}var o=Vl(e.d,r.d);o&&ar(n,4,t,o),i(e,r,n,t)}function Vl(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Vl(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&rp(l,c)||(t=t||{},t[i]=c)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function ap(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?ar(n,6,t,{v:c,i:l-c}):l<c&&ar(n,7,t,{v:l,e:o});for(var $=l<c?l:c,f=0;f<$;f++){var m=i[f];Vr(m,o[f],n,++t),t+=m.b||0}}function tp(e,r,n,t){for(var i=[],o={},l=[],c=e.e,$=r.e,f=c.length,m=$.length,p=0,b=0,s=t;p<f&&b<m;){var w=c[p],_=$[b],S=w.a,C=_.a,y=w.b,T=_.b,H=void 0,Q=void 0;if(S===C){s++,Vr(y,T,i,s),s+=y.b||0,p++,b++;continue}var ae=c[p+1],te=$[b+1];if(ae){var ie=ae.a,ne=ae.b;Q=C===ie}if(te){var q=te.a,de=te.b;H=S===q}if(H&&Q){s++,Vr(y,de,i,s),Ja(o,i,S,T,b,l),s+=y.b||0,s++,Ya(o,i,S,ne,s),s+=ne.b||0,p+=2,b+=2;continue}if(H){s++,Ja(o,i,C,T,b,l),Vr(y,de,i,s),s+=y.b||0,p+=1,b+=2;continue}if(Q){s++,Ya(o,i,S,y,s),s+=y.b||0,s++,Vr(ne,T,i,s),s+=ne.b||0,p+=2,b+=1;continue}if(ae&&ie===q){s++,Ya(o,i,S,y,s),Ja(o,i,C,T,b,l),s+=y.b||0,s++,Vr(ne,de,i,s),s+=ne.b||0,p+=2,b+=2;continue}break}for(;p<f;){s++;var w=c[p],y=w.b;Ya(o,i,w.a,y,s),s+=y.b||0,p++}for(;b<m;){var pe=pe||[],_=$[b];Ja(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||l.length>0||pe)&&ar(n,8,t,{w:i,x:l,y:pe})}var F$="_elmW6BL";function Ja(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Vr(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Ja(e,r,n+F$,t,i,o)}function Ya(e,r,n,t,i){var o=e[n];if(!o){var l=ar(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Vr(t,o.z,c,i),ar(r,9,i,{w:c,A:o});return}Ya(e,r,n+F$,t,i)}function I$(e,r,n,t){Xa(e,r,n,0,0,r.b,t)}function Xa(e,r,n,t,i,o,l){for(var c=n[t],$=c.r;$===i;){var f=c.$;if(f===1)I$(e,r.k,c.s,l);else if(f===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&Xa(e,r,m,0,i,o,l)}else if(f===9){c.t=e,c.u=l;var p=c.s;if(p){p.A.s=e;var m=p.w;m.length>0&&Xa(e,r,m,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||($=c.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Xa(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var w=r.e,_=e.childNodes,S=0;S<w.length;S++){i++;var C=b===1?w[S]:w[S].b,y=i+(C.b||0);if(i<=$&&$<=y&&(t=Xa(_[S],C,n,t,i,y,l),!(c=n[t])||($=c.r)>o))return t;i=y}return t}function B$(e,r,n,t){return n.length===0?e:(I$(e,r,n,t),gi(e,n))}function gi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=ip(i,t);i===e&&(e=o)}return e}function ip(e,r){switch(r.$){case 0:return op(e,r.s,r.u);case 4:return Jo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return gi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(Ln(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=gi(e,o.w),e;case 8:return lp(e,r);case 5:return r.s(e);default:Va(10)}}function op(e,r,n){var t=e.parentNode,i=Ln(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function lp(e,r){var n=r.s,t=cp(n.y,r);e=gi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,$=c.c===2?c.s:Ln(c.z,r.u);e.insertBefore($,e.childNodes[l.r])}return t&&Fl(e,t),e}function cp(e,r){if(!!e){for(var n=fn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Fl(n,o.c===2?o.s:Ln(o.z,r.u))}return n}}function Rl(e){if(e.nodeType===3)return qo(e.textContent);if(e.nodeType!==1)return qo("");for(var r=A,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=Qr(a(Ur,o,l),r)}for(var c=e.tagName.toLowerCase(),$=A,f=e.childNodes,t=f.length;t--;)$=Qr(Rl(f[t]),$);return h(en,c,r,$)}function up(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var $p=re(function(e,r,n,t){return Al(r,t,e.gT,e.im,e.h$,function(i,o){var l=e.io,c=t.node,$=Rl(c);return E$(o,function(f){var m=l(f),p=A$($,m);c=B$(c,$,p,i),$=m})})});re(function(e,r,n,t){return Al(r,t,e.gT,e.im,e.h$,function(i,o){var l=e.dD&&e.dD(i),c=e.io,$=fn.title,f=fn.body,m=Rl(f);return E$(o,function(p){pi=l;var b=c(p),s=en("body")(A)(b.fU),w=A$(m,s);f=B$(f,m,w,i),m=s,pi=0,$!==b.ih&&(fn.title=$=b.ih)})})});var hi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function E$(e,r){r(e);var n=0;function t(){n=n===1?0:(hi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&hi(t),n=2)}}v(function(e,r){return a(Xl,Tt,_n(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Xl,Tt,_n(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Xl,Tt,_n(function(){history.replaceState({},"",r),e()}))});var vp={addEventListener:function(){},removeEventListener:function(){}},fp=typeof window!="undefined"?window:vp;M(function(e,r,n){return z$(_n(function(t){function i(o){kl(n(o))}return e.addEventListener(r,i,El&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Lr(e,r);return Er(n)?X(n.a):J});function V$(e,r){return _n(function(n){hi(function(){var t=document.getElementById(e);n(t?oa(r(t)):_d(D0(e)))})})}function mp(e){return _n(function(r){hi(function(){r(oa(e()))})})}v(function(e,r){return V$(r,function(n){return n[e](),Pt})});v(function(e,r){return mp(function(){return fp.scroll(e,r),Pt})});M(function(e,r,n){return V$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,Pt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var sp=v(function(e,r){var n="g";e.hc&&(n+="m"),e.f2&&(n+="i");try{return X(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var dp=M(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,$;i++<e&&($=r.exec(o))&&c!=r.lastIndex;){for(var f=$.length-1,m=new Array(f);f>0;){var p=$[f];m[--f]=p?X(p):J}t.push(L(Lf,$[0],$.index,i,u(m))),c=r.lastIndex}return r.lastIndex=l,u(t)});re(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,$=new Array(c);c>0;){var f=arguments[c];$[--c]=f?X(f):J}return n(L(Lf,l,arguments[arguments.length-2],i,u($)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,u(i)});var pp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/gp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function gp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var jl=new Float64Array(3),ru=new Float64Array(3),nu=new Float64Array(3),hp=M(function(e,r,n){return new Float64Array([e,r,n])}),bp=function(e){return e[0]},_p=function(e){return e[1]},wp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var yp=function(e){return new Float64Array([e.is,e.iw,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function R$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(R$);function j$(e,r,n){return n===void 0&&(n=new Float64Array(3)),bi(R$(e,r,n),n)}v(j$);function U$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function bi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/U$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var xp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Za=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Za);function Yo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Yo);v(function(e,r){var n,t=jl,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Za(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Za(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Za(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Za(r,t)+e[14])/n,i});var Sp=re(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Cp=function(e){return{is:e[0],iw:e[1],dU:e[2],ft:e[3]}},zp=function(e){return new Float64Array([e.is,e.iw,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Lp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Lp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Pp=new Float64Array(16),Mp=new Float64Array(16),Tp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},kp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function N$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}Sr(N$);re(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return N$(l,c,o,i,n,t)});function W$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}Sr(W$);re(function(e,r,n,t){return W$(e,r,n,t,-1,1)});function H$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],$=e[5],f=e[6],m=e[7],p=e[8],b=e[9],s=e[10],w=e[11],_=e[12],S=e[13],C=e[14],y=e[15],T=r[0],H=r[1],Q=r[2],ae=r[3],te=r[4],ie=r[5],ne=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],B=r[14],E=r[15];return n[0]=t*T+c*H+p*Q+_*ae,n[1]=i*T+$*H+b*Q+S*ae,n[2]=o*T+f*H+s*Q+C*ae,n[3]=l*T+m*H+w*Q+y*ae,n[4]=t*te+c*ie+p*ne+_*q,n[5]=i*te+$*ie+b*ne+S*q,n[6]=o*te+f*ie+s*ne+C*q,n[7]=l*te+m*ie+w*ne+y*q,n[8]=t*de+c*pe+p*Me+_*Se,n[9]=i*de+$*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=l*de+m*pe+w*Me+y*Se,n[12]=t*me+c*Te+p*B+_*E,n[13]=i*me+$*Te+b*B+S*E,n[14]=o*me+f*Te+s*B+C*E,n[15]=l*me+m*Te+w*B+y*E,n}v(H$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],$=e[6],f=e[8],m=e[9],p=e[10],b=e[12],s=e[13],w=e[14],_=r[0],S=r[1],C=r[2],y=r[4],T=r[5],H=r[6],Q=r[8],ae=r[9],te=r[10],ie=r[12],ne=r[13],q=r[14];return n[0]=t*_+l*S+f*C,n[1]=i*_+c*S+m*C,n[2]=o*_+$*S+p*C,n[3]=0,n[4]=t*y+l*T+f*H,n[5]=i*y+c*T+m*H,n[6]=o*y+$*T+p*H,n[7]=0,n[8]=t*Q+l*ae+f*te,n[9]=i*Q+c*ae+m*te,n[10]=o*Q+$*ae+p*te,n[11]=0,n[12]=t*ie+l*ne+f*q+b,n[13]=i*ie+c*ne+m*q+s,n[14]=o*ie+$*ne+p*q+w,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=bi(r,jl);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,$=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*$,n[2]=o*t*c-i*$,n[3]=0,n[4]=t*i*c-o*$,n[5]=i*i*c+l,n[6]=i*o*c+t*$,n[7]=0,n[8]=t*o*c+i*$,n[9]=i*o*c-t*$,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/U$(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,$=Math.cos(e),f=1-$,m=Math.sin(e),p=o*m,b=l*m,s=c*m,w=o*l*f,_=o*c*f,S=l*c*f,C=o*o*f+$,y=w+s,T=_-b,H=w-s,Q=l*l*f+$,ae=S+p,te=_+b,ie=S-p,ne=c*c*f+$,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],B=n[7],E=n[8],V=n[9],R=n[10],j=n[11],U=n[12],N=n[13],W=n[14],Ne=n[15];return t[0]=q*C+Se*y+E*T,t[1]=de*C+me*y+V*T,t[2]=pe*C+Te*y+R*T,t[3]=Me*C+B*y+j*T,t[4]=q*H+Se*Q+E*ae,t[5]=de*H+me*Q+V*ae,t[6]=pe*H+Te*Q+R*ae,t[7]=Me*H+B*Q+j*ae,t[8]=q*te+Se*ie+E*ne,t[9]=de*te+me*ie+V*ne,t[10]=pe*te+Te*ie+R*ne,t[11]=Me*te+B*ie+j*ne,t[12]=U,t[13]=N,t[14]=W,t[15]=Ne,t});function Dp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(Dp);re(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ap(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(Ap);re(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],$=t[3],f=t[4],m=t[5],p=t[6],b=t[7],s=t[8],w=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=$,i[4]=f,i[5]=m,i[6]=p,i[7]=b,i[8]=s,i[9]=w,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=l*e+m*r+w*n+t[13],i[14]=c*e+p*r+_*n+t[14],i[15]=$*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],$=r[2],f=r[3],m=r[4],p=r[5],b=r[6],s=r[7],w=r[8],_=r[9],S=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=$,n[3]=f,n[4]=m,n[5]=p,n[6]=b,n[7]=s,n[8]=w,n[9]=_,n[10]=S,n[11]=C,n[12]=l*t+m*i+w*o+r[12],n[13]=c*t+p*i+_*o+r[13],n[14]=$*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=j$(e,r,jl),i=bi(Yo(n,t,ru),ru),o=bi(Yo(t,i,nu),nu),l=Pp,c=Mp;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,H$(l,c)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var au=0;function vt(e,r){for(;r.b;r=r.b)e(r.a)}function Ul(e){for(var r=0;e.b;e=e.b)r++;return r}var Fp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Ip=Xe(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Bp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Ep=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Vp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Rp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),jp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Up=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Np=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Wp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Hp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Gp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Op=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},qp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},G$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},O$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Jp=function(e){e.gl.disable(e.gl.CULL_FACE)},Yp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Xp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Zp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},tu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Qp=[Gp,Op,qp,G$,O$,Jp,Yp,Xp,Zp];function iu(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Kp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function q$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function e0(e,r,n,t){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(s,w,_,S,C){var y;if(i===1)for(y=0;y<w;y++)s[_++]=w===1?S[C]:S[C][y];else o.forEach(function(T){for(y=0;y<w;y++)s[_++]=w===1?S[T][C]:S[T][C][y]})}var $=q$(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var f=0,m=$.size*$.arraySize*i,p=new $.type(Ul(n.b)*m);vt(function(s){c(p,$.size*$.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),b}function r0(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=n0(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Ul(r.b),indexBuffer:null,buffers:{}}}function n0(e,r){var n=new Uint32Array(Ul(e)*r),t=0,i;return vt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function ou(e,r){return e+"#"+r}var J$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),G$(n),O$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,$;if(o.b.id&&o.c.id&&(l=ou(o.b.id,o.c.id),c=n.programs[l]),!c){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=au++,f||(f=iu(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=au++,m||(m=iu(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var p=Kp(t,f,m);c={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=a0(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for($=0;$<b;$++){var s=t.getActiveAttrib(p,$),w=t.getAttribLocation(p,s.name);c.activeAttributes.push(s),c.activeAttributeLocations.push(w)}l=ou(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),t0(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=r0(t,o.d),n.buffers.set(o.d,_)),$=0;$<c.activeAttributes.length;$++){s=c.activeAttributes[$],w=c.activeAttributeLocations[$],_.buffers[s.name]===void 0&&(_.buffers[s.name]=e0(t,s,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=q$(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(w),t.vertexAttribPointer(w,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,y=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(w+T),t.vertexAttribPointer(w+T,S.size,S.baseType,!1,y,C*T)}for(n.toggle=!n.toggle,vt($2(n),o.a),$=0;$<tu.length;$++){var H=n[tu[$]];H.toggle!==n.toggle&&H.enabled&&(Qp[$](n),H.enabled=!1,H.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return vt(i,e.g),r});function a0(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function $(s,w){var _=w.name,S=e.getUniformLocation(s,_);switch(w.type){case e.INT:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};case e.FLOAT:return function(y){o[_]!==y&&(e.uniform1f(S,y),o[_]=y)};case e.FLOAT_VEC2:return function(y){o[_]!==y&&(e.uniform2f(S,y[0],y[1]),o[_]=y)};case e.FLOAT_VEC3:return function(y){o[_]!==y&&(e.uniform3f(S,y[0],y[1],y[2]),o[_]=y)};case e.FLOAT_VEC4:return function(y){o[_]!==y&&(e.uniform4f(S,y[0],y[1],y[2],y[3]),o[_]=y)};case e.FLOAT_MAT4:return function(y){o[_]!==y&&(e.uniformMatrix4fv(S,!1,new Float32Array(y)),o[_]=y)};case e.SAMPLER_2D:var C=l++;return function(y){e.activeTexture(e.TEXTURE0+C);var T=c.textures.get(y);T||(T=y.ge(e),c.textures.set(y,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==y&&(e.uniform1i(S,C),o[_]=y)};case e.BOOL:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<m;p++){var b=e.getActiveUniform(i,p);f[t[b.name]||b.name]=$(i,b)}return f}function t0(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var i0=M(function(e,r,n){return Rd(r,{g:n,f:{},h:e},f0,m0)}),o0=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),l0=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),c0=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),u0=v(function(e,r){e.contextAttributes.antialias=!0}),$0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),v0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function f0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};vt(function(i){return a(u2,r,i)},e.h);var n=fn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),Fp(function(){return a(J$,e,n)})):(n=fn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function m0(e,r){return r.f=e.f,J$(r)}var P=xs,qt=_s,Y$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var f=l.a;return h(qt,e,c,f)}else{var $=l.a;return h(qt,o,c,$)}});return h(qt,o,h(qt,e,r,i),t)}),Nl=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,$=h(e,t,i,h(Nl,e,r,l)),f=o;e=c,r=$,n=f;continue e}}),lu=function(e){return h(Nl,M(function(r,n,t){return a(P,z(r,n),t)}),A,e)},X$=1,s0=2,Z$=0,ir=function(e){return{$:1,a:e}},Wl=v(function(e,r){return{$:3,a:e,b:r}}),cu=v(function(e,r){return{$:0,a:e,b:r}}),Q$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},d0=function(e){return{$:2,a:e}},X=function(e){return{$:0,a:e}},J={$:1},p0=Ys,g0=dd,k=x$,ce=v(function(e,r){return a(Gs,e,Vi(r))}),Hl=v(function(e,r){return u(a(Hs,e,r))}),K$=function(e){return a(ce,`
    `,a(Hl,`
`,e))},Ue=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),aa=function(e){return h(Ue,v(function(r,n){return n+1}),0,e)},h0=Ss,b0=M(function(e,r,n){e:for(;;)if(_e(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),Xr=v(function(e,r){return h(b0,e,r,A)}),Gl=v(function(e,r){return h(h0,e,a(Xr,0,aa(r)-1),r)}),Zr=nd,ev=function(e){var r=Zr(e);return 97<=r&&r<=122},rv=function(e){var r=Zr(e);return r<=90&&65<=r},_0=function(e){return ev(e)||rv(e)},w0=function(e){var r=Zr(e);return r<=57&&48<=r},y0=function(e){return ev(e)||rv(e)||w0(e)},dr=function(e){return h(Ue,P,A,e)},Ra=js,x0=v(function(e,r){return`

(`+(k(e+1)+(") "+K$(S0(r))))}),S0=function(e){return a(C0,e,A)},C0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,l=e.b,t=function(){var _=Ra(n);if(_.$===1)return!1;var S=_.a,C=S.a,y=S.b;return _0(C)&&a(p0,y0,y)}(),i=t?"."+n:"['"+(n+"']"),$=l,f=a(P,i,r);e=$,r=f;continue e;case 1:var o=e.a,l=e.b,c="["+(k(o)+"]"),$=l,f=a(P,c,r);e=$,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+a(ce,"",dr(r)):"Json.Decode.oneOf"}(),w=p+(" failed in the following "+(k(aa(m))+" ways:"));return a(ce,`

`,a(P,w,a(Gl,x0,m)))}else{var l=m.a,$=l,f=r;e=$,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ce,"",dr(r)):"!"}();default:var b=e.a,s=e.b,w=function(){return r.b?"Problem with the value at json"+(a(ce,"",dr(r))+`:

    `):`Problem with the given value:

`}();return w+(K$(a(g0,4,s))+(`

`+b))}}),yr=32,Xo=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Zo=ds,ft=As,Ol=v(function(e,r){return qc(r)/qc(e)}),Qa=ks,mt=ft(a(Ol,2,yr)),nv=L(Xo,0,mt,Zo,Zo),av=gs,tv=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var iv=Fs,Qo=ps,Tr=v(function(e,r){return _e(e,r)>0?e:r}),z0=function(e){return{$:0,a:e}},ql=hs,L0=v(function(e,r){e:for(;;){var n=a(ql,yr,e),t=n.a,i=n.b,o=a(P,z0(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return dr(o)}}),ov=function(e){var r=e.a;return r},P0=v(function(e,r){e:for(;;){var n=ft(r/yr);if(n===1)return a(ql,yr,e).a;var t=a(L0,e,A),i=n;e=t,r=i;continue e}}),lv=v(function(e,r){if(r.n){var n=r.n*yr,t=iv(a(Ol,yr,n-1)),i=e?dr(r.C):r.C,o=a(P0,i,r.n);return L(Xo,Qo(r.r)+n,a(Tr,5,t*mt),o,r.r)}else return L(Xo,Qo(r.r),mt,Zo,r.r)}),M0=Xe(function(e,r,n,t,i){e:for(;;){if(r<0)return a(lv,!1,{C:t,n:n/yr|0,r:i});var o=tv(h(av,yr,r,e)),l=e,c=r-yr,$=n,f=a(P,o,t),m=i;e=l,r=c,n=$,t=f,i=m;continue e}}),T0=v(function(e,r){if(e<=0)return nv;var n=e%yr,t=h(av,n,e-n,r),i=e-n-yr;return F(M0,r,i,e,A,t)}),Er=function(e){return!e.$},K=vd,Le=od,Z=$d,Oe=ld,cv=v(function(e,r){return{d1:r.d1,gb:e,cW:r.cW,gq:r.gq,g4:r.g4,hs:r.hs,dB:r.dB,ip:r.ip}}),_i=fd,k0=md,ur=td,Jl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Rr=function(e){return e},D0=Rr,uu=Sr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),A0=Xs,Yn=Us,ba=Os,Mt=v(function(e,r){return e<1?r:h(ba,e,Yn(r),r)}),Ri=Qs,ji=function(e){return e===""},Ui=v(function(e,r){return e<1?"":h(ba,0,e,r)}),uv=Ks,$u=Xe(function(e,r,n,t,i){if(ji(i)||a(A0,"@",i))return J;var o=a(Ri,":",i);if(o.b){if(o.b.b)return J;var l=o.a,c=uv(a(Mt,l+1,i));if(c.$===1)return J;var $=c;return X(tr(uu,e,a(Ui,l,i),$,r,n,t))}else return X(tr(uu,e,i,J,r,n,t))}),vu=re(function(e,r,n,t){if(ji(t))return J;var i=a(Ri,"/",t);if(i.b){var o=i.a;return F($u,e,a(Mt,o,t),r,n,a(Ui,o,t))}else return F($u,e,"/",r,n,t)}),fu=M(function(e,r,n){if(ji(n))return J;var t=a(Ri,"?",n);if(t.b){var i=t.a;return L(vu,e,X(a(Mt,i+1,n)),r,a(Ui,i,n))}else return L(vu,e,J,r,n)});v(function(e,r){if(ji(r))return J;var n=a(Ri,"#",r);if(n.b){var t=n.a;return h(fu,e,X(a(Mt,t+1,r)),a(Ui,t,r))}else return h(fu,e,J,r)});var F0=Zs,Tt=function(e){},kt=oa,I0=kt(0),$v=re(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var $=c.a,f=c.b;if(f.b){var m=f.a,p=f.b,b=n>500?h(Ue,e,r,dr(p)):L($v,e,r,n+1,p);return a(e,i,a(e,l,a(e,$,a(e,m,b))))}else return a(e,i,a(e,l,a(e,$,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),rr=M(function(e,r,n){return L($v,e,r,0,n)}),ee=v(function(e,r){return h(rr,v(function(n,t){return a(P,e(n),t)}),A,r)}),wi=Oo,Yl=v(function(e,r){return a(wi,function(n){return kt(e(n))},r)}),B0=M(function(e,r,n){return a(wi,function(t){return a(wi,function(i){return kt(a(e,t,i))},n)},r)}),E0=function(e){return h(rr,B0(P),kt(A),e)},V0=Pd,R0=v(function(e,r){var n=r;return z$(a(wi,V0(e),n))}),j0=M(function(e,r,n){return a(Yl,function(t){return 0},E0(a(ee,R0(e),r)))}),U0=M(function(e,r,n){return kt(0)}),N0=v(function(e,r){var n=r;return a(Yl,e,n)});Yr.Task=zd(I0,j0,U0,N0);var W0=P$("Task"),Xl=v(function(e,r){return W0(a(Yl,e,r))}),H0=$p,G0=Vs,yi={$:1},vv=function(e){return{$:2,a:e}},Zl={$:0},kr=v(function(e,r){return{$:0,a:e,b:r}}),Qe=M(function(e,r,n){return r(e(n))}),la=function(e){var r=e.b.s;return r.a},O0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return X(a(kr,r,{s:o,an:l,X:a(P,t,n)}))}else return J},Fe=v(function(e,r){if(r.$)return e;var n=r.a;return n}),q0=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dG;return(_e(o+r.gq,la(n).d1)>0?a(Qe,O0,Fe(a(kr,yi,i))):Rr)(a(kr,vv({dG:o+r.gq}),i));default:var l=i.s,c=l.a,$=l.b,f=a(cv,c.gb,je(r,{d1:c.d1+r.gq})),m=a(e,f,$);return a(kr,Zl,{s:z(f,m),an:A,X:a(P,i.s,i.X)})}}),fv=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),J0=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(P,t,n);e=o,r=l,n=c;continue e}else return n}}),Y0=v(function(e,r){return dr(h(J0,e,r,A))}),mv=M(function(e,r,n){if(r<=0)return A;{var t=z(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,l=o.a;return u([y,l]);case 3:if(t.b.b.b.b){var c=t.b,y=c.a,$=c.b,l=$.a,f=$.b,m=f.a;return u([y,l,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,y=p.a,b=p.b,l=b.a,s=b.b,m=s.a,w=s.b,_=w.a,S=w.b;return e>1e3?a(P,y,a(P,l,a(P,m,a(P,_,a(Y0,r-4,S))))):a(P,y,a(P,l,a(P,m,a(P,_,h(mv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,y=C.a;return u([y])}}),X0=v(function(e,r){return h(mv,0,e,r)}),Z0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Y(dr(n),Y(u([t]),i)),l=a(X0,e,o),c=a(fv,e,o);if(c.b){var $=c.a,f=c.b;return a(kr,yi,{s:$,an:f,X:dr(l)})}else{var m=dr(l);if(m.b){var p=m.a,b=m.b;return a(kr,yi,{s:p,an:A,X:b})}else return r}}),Q0=function(e){var r=e.b;return a(kr,yi,r)},K0=function(e){var r=e.b;return a(kr,vv({dG:la(e).d1}),r)},eg=function(e){var r=e.b;return a(kr,Zl,r)},rg=v(function(e,r){switch(e.$){case 1:return Q0(r);case 2:return eg(r);case 3:return K0(r);default:var n=e.a;return a(Z0,n,r)}}),xi=v(function(e,r){var n=r.a,t=r.b;return z(e(n),t)}),ng=v(function(e,r){return je(r,{aN:e(r.aN)})}),ag=function(e){return{$:3,a:e}},sv=function(e){return{$:2,a:e}},dv=v(function(e,r){return{$:0,a:e,b:r}}),tg=v(function(e,r){return{$:1,a:e,b:r}}),We=v(function(e,r){if(r.$)return J;var n=r.a;return X(e(n))}),ye=function(e){return e<0?-e:e},pv=ed,ig=M(function(e,r,n){return a(Fe,0/0,pv(a(e,r,n)))}),Dt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),og=Ws,gv=function(e){return h(og,P,A,e)},lg=v(function(e,r){var n=a(Dt,function(t){return t!=="0"&&t!=="."},gv(r));return Y(e&&n?"-":"",r)}),ve=x$,Ko=Rs,hv=ad,bv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ra(n);if(t.$===1)return"01";var i=t.a;return a(Ko,"0",bv(i))}else{var o=Zr(r);return o>=48&&o<57?a(Ko,hv(o+1),n):"0"}},el=Ds,cg=Es,Ni=function(e){return a(Ko,e,"")},_v=M(function(e,r,n){return e<=0?n:h(_v,e>>1,Y(r,r),e&1?Y(n,r):n)}),st=v(function(e,r){return h(_v,e,r,"")}),rl=M(function(e,r,n){return Y(n,a(st,e-Yn(n),Ni(r)))}),nl=Ns,wv=function(e){var r=a(Hl,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},ug=function(e){var r=a(Hl,"e",ve(ye(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Fe,0,uv(a(F0,"+",i)?a(Mt,1,i):i)),l=wv(n),c=l.a,$=l.b,f=Y(c,$),m=o<0?a(Fe,"0",a(We,function(p){var b=p.a,s=p.b;return b+("."+s)},a(We,xi(Ni),Ra(Y(a(st,ye(o),"0"),f))))):h(rl,o+1,"0",f);return Y(e<0?"-":"",m)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},$g=M(function(e,r,n){if(el(n)||cg(n))return ve(n);var t=n<0,i=wv(ug(ye(n))),o=i.a,l=i.b,c=Yn(o)+r,$=Y(a(st,-c+1,"0"),h(rl,c,"0",Y(o,l))),f=Yn($),m=a(Tr,1,c),p=a(e,t,h(ba,m,f,$)),b=h(ba,0,m,$),s=p?nl(a(Fe,"1",a(We,bv,Ra(nl(b))))):b,w=Yn(s),_=s==="0"?s:r<=0?Y(s,a(st,ye(r),"0")):_e(r,Yn(l))<0?h(ba,0,w-r,s)+("."+h(ba,w-r,w,s)):Y(o+".",h(rl,r,"0",l));return a(lg,t,_)}),yv=$g(v(function(e,r){var n=Ra(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Zr(i))})),vg=ig(yv),fg=M(function(e,r,n){var t=a(Ol,10,ye(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(vg,i,n)}),xv=ys,Wi=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(xv,e,n);switch(l){case 0:var c=e,$=i;e=c,r=$;continue e;case 1:return X(t);default:var c=e,$=o;e=c,r=$;continue e}}}),fe=Xe(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Kr={$:-2},Da=Xe(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,$=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,p=t.d,b=t.e;return F(fe,0,r,n,F(fe,1,f,m,p,b),F(fe,1,o,l,c,$))}else return F(fe,e,o,l,F(fe,0,r,n,t,c),$)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var w=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return F(fe,0,f,m,F(fe,1,w,_,S,C),F(fe,1,r,n,b,i))}else return F(fe,e,r,n,t,i)}),al=M(function(e,r,n){if(n.$===-2)return F(fe,0,e,r,Kr,Kr);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,$=a(xv,e,i);switch($){case 0:return F(Da,t,i,o,h(al,e,r,l),c);case 1:return F(fe,t,i,r,l,c);default:return F(Da,t,i,o,l,h(al,e,r,c))}}),za=M(function(e,r,n){var t=h(al,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return F(fe,1,i,o,l,c)}else{var $=t;return $}}),mg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Sv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,$=i.e,f=e.e;f.a;var m=f.b,p=f.c,b=f.d;b.a;var s=b.b,w=b.c,_=b.d,S=b.e,C=f.e;return F(fe,0,s,w,F(fe,1,n,t,F(fe,0,o,l,c,$),_),F(fe,1,m,p,S,C))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,$=y.e,T=e.e;T.a;var m=T.b,p=T.c,b=T.d,C=T.e;return F(fe,1,n,t,F(fe,0,o,l,c,$),F(fe,0,m,p,b,C))}else return e},mu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var $=c.b,f=c.c,m=c.d,p=c.e,b=i.e,s=e.e;s.a;var w=s.b,_=s.c,S=s.d,C=s.e;return F(fe,0,o,l,F(fe,1,$,f,m,p),F(fe,1,n,t,b,F(fe,0,w,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,T=y.d,b=y.e,H=e.e;H.a;var w=H.b,_=H.c,S=H.d,C=H.e;return F(fe,1,n,t,F(fe,0,o,l,T,b),F(fe,0,w,_,S,C))}else return e},sg=Ei(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,$=o.c,f=o.d,m=o.e;return F(fe,n,c,$,f,F(fe,0,t,i,m,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var p=l.d;return p.a,mu(r)}else break e;else return l.a,l.d,mu(r);else break e;return r}}),oi=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(fe,r,n,t,oi(i),c);var $=Sv(e);if($.$===-1){var f=$.a,m=$.b,p=$.c,b=$.d,s=$.e;return F(Da,f,m,p,oi(b),s)}else return Kr}else return F(fe,r,n,t,oi(i),c)}else return Kr},ot=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(_e(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(fe,n,t,i,a(ot,e,o),l);var $=Sv(r);if($.$===-1){var f=$.a,m=$.b,p=$.c,b=$.d,s=$.e;return F(Da,f,m,p,a(ot,e,b),s)}else return Kr}else return F(fe,n,t,i,a(ot,e,o),l);else return a(dg,e,Ml(sg,e,r,n,t,i,o,l))}),dg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(he(e,t)){var c=mg(l);if(c.$===-1){var $=c.b,f=c.c;return F(Da,n,$,f,o,oi(l))}else return Kr}else return F(Da,n,t,i,o,a(ot,e,l))}else return Kr}),pg=v(function(e,r){var n=a(ot,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return F(fe,1,t,i,o,l)}else{var c=n;return c}}),Jt=M(function(e,r,n){var t=r(a(Wi,e,n));if(t.$)return a(pg,e,n);var i=t.a;return h(za,e,i,n)}),gg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Jt,r,We(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(tg,z(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Jt,r,We(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(dv,z(o,l),h(fg,o,l,n))}));case 3:var r=e.a,n=e.b;return a(Jt,r,We(function(t){return t.$===3?ag(n):t}));default:var r=e.a,n=e.b;return a(Jt,r,We(function(t){return t.$===2?sv(n):t}))}},hg=function(e){return ng(gg(e))},bg=v(function(e,r){return a(ee,hg(e),r)}),_g=v(function(e,r){return je(r,{gb:a(bg,e,r.gb)})}),wg=v(function(e,r){var n=r.a,t=r.b;return a(kr,n,je(t,{s:a(xi,_g(e),t.s)}))}),tl=v(function(e,r){var n=r.a,t=r.b;return z(n,e(t))}),yg=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(kr,t,je(i,{s:a(tl,a(e,o.a,r),o)}))}),xg=re(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return je(t,{bw:!t.bw});case 2:var i=n.a;return je(t,{R:h(q0,e,i,t.R)});case 3:var o=n.a;return je(t,{bp:o});case 4:var l=n.a;return je(t,{R:a(wg,l,t.R)});case 5:var c=n.a;return je(t,{R:h(yg,r,c,t.R)});default:var $=n.a;return je(t,{R:a(rg,$,t.R)})}}),Sg=v(function(e,r){return a(kr,Zl,{s:z(e,r(e)),an:A,X:A})}),Cg=Md,su=Cg(A),zg=function(e){return{$:2,a:e}},Si=ud,Aa=cd,Lg=Fd("tick",a(K,function(e){return a(K,function(r){return a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(l){return ur({d1:l,cW:o,gq:i,g4:t,hs:n,dB:r,ip:e})},a(Z,"clock",Oe))},a(Z,"devicePixelRatio",Oe))},a(Z,"dt",Oe))},a(Z,"keyboard",a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(l){return a(K,function(c){return a(K,function($){return a(K,function(f){return a(K,function(m){return a(K,function(p){return ur({fJ:p,gd:m,d4:f,gp:$,g5:c,hu:l,hA:o,hN:i,fl:t})},a(Z,"alt",Le))},a(Z,"control",Le))},a(Z,"down",Le))},a(Z,"downs",Si(Aa)))},a(Z,"left",Le))},a(Z,"pressedKeys",Si(Aa)))},a(Z,"right",Le))},a(Z,"shift",Le))},a(Z,"up",Le))))},a(Z,"pointer",a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(l){return a(K,function(c){return a(K,function($){return a(K,function(f){return ur({d4:f,g0:$,hb:c,hB:l,hC:o,fl:i,is:t,iw:n})},a(Z,"down",Le))},a(Z,"isDown",Le))},a(Z,"move",Le))},a(Z,"rightDown",Le))},a(Z,"rightUp",Le))},a(Z,"up",Le))},a(Z,"x",Oe))},a(Z,"y",Oe))))},a(Z,"screen",a(K,function(r){return a(K,function(n){return ur({gI:n,iq:r})},a(Z,"height",Oe))},a(Z,"width",Oe))))},a(Z,"wheel",a(K,function(e){return a(K,function(r){return ur({gi:r,gj:e})},a(Z,"deltaX",Oe))},a(Z,"deltaY",Oe))))),Pg=function(e){return e.dM,Lg(zg)},Mg=function(e){return{$:5,a:e}},Tg={$:0},Ci=v(function(e,r){return e}),kg=function(e){var r=e.b.s;return r.b},Dg=function(e){return{$:1,a:e}},Ag=Dg,Cv=function(e){return{$:8,a:e}},xe=Cv,dt=function(e){return{$:0,a:e}},At=M(function(e,r,n){return e(r(n))}),Fg=a(At,dt,Ci),zn=Fg,Ie=function(e){return{$:1,a:e}},cn=Ie,zv=v(function(e,r){return{$:9,a:e,b:r}}),ta={$:0},Lv=v(function(e,r){return r.$===3?ta:a(zv,e,r)}),il=function(e){return a(Lv,4,e)},d={fy:"a",cK:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cL:"ah",cM:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gg:"cptr",gh:"ctxt",gy:"fcs",ea:"focus-within",gz:"fs",gD:"g",cY:"hbh",cZ:"hc",ee:"he",c_:"hf",ef:"hfp",gL:"hv",gO:"ic",gQ:"fr",ci:"lbl",gU:"iml",gV:"imlf",gW:"imlp",gX:"implw",gY:"it",g3:"i",et:"lnk",be:"nb",eU:"notxt",hh:"ol",hi:"or",aU:"oq",hn:"oh",eY:"pg",eZ:"p",ho:"ppe",hD:"ui",af:"r",hH:"sb",hI:"sbx",hJ:"sby",hK:"sbt",hP:"e",hQ:"cap",hS:"sev",hY:"sk",Y:"t",h3:"tc",h4:"w8",h5:"w2",h6:"w9",h7:"tj",cE:"tja",h8:"tl",h9:"w3",ia:"w5",ib:"w4",ic:"tr",id:"w6",ie:"w1",$8:"tun",fj:"ts",a$:"clr",il:"u",dN:"wc",fu:"we",dO:"wf",fv:"wfp",dQ:"wrp"},Ql=C$,Fr=v(function(e,r){return a(Il,e,Ql(r))}),Pr=Fr("className"),wr=function(e){return Ie(Pr(e))},Pv=v(function(e,r){return{$:2,a:e,b:r}}),Ig=v(function(e,r){return{$:1,a:e,b:r}}),nr=function(e){return{$:0,a:e}},xr=2,Bg={$:0},ca=Bg,Eg={$:0},Vg=d.fK+(" "+d.aw),Rg=d.fK+(" "+d.gD),jg=d.fK+(" "+d.eY),Ug=d.fK+(" "+d.eZ),Ng=d.fK+(" "+d.af),Wg=d.fK+(" "+d.hP),Hg=function(e){switch(e){case 0:return Ng;case 1:return Vg;case 2:return Wg;case 3:return Rg;case 4:return Ug;default:return jg}},du=function(e){return{$:1,a:e}},Jn={$:0},ol=function(e){return{$:1,a:e}},pu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),gu=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(ee,function(o){return z(e,o)},t),r);case 2:var i=n.a;return Y(r,a(ee,function(o){return z(e,o)},i));default:var t=n.a,i=n.b;return Y(a(ee,function(o){return z(e,o)},t),Y(r,a(ee,function(o){return z(e,o)},i)))}}),Yt=4,Gg=function(e){return{$:0,a:e}},Og=function(e){return{$:1,a:e}},we=function(e){return e>31?Og(1<<e-32):Gg(1<<e)},Mv=we(41),Tv=we(40),kv=we(42),Dv=we(43),$r=en("div"),Kl=Kr,Av=Kl,qr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+qr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+qr(o))}},Ve=Is,Re=function(e){return k(Ve(e*255))},ec=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("mv-"+(Re(n)+("-"+(Re(t)+("-"+Re(i))))));default:var o=e.a,l=o.a,c=o.b,$=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,w=s.a,_=s.b,S=s.c,C=e.d;return X("tfrm-"+(Re(l)+("-"+(Re(c)+("-"+(Re($)+("-"+(Re(m)+("-"+(Re(p)+("-"+(Re(b)+("-"+(Re(w)+("-"+(Re(_)+("-"+(Re(S)+("-"+Re(C))))))))))))))))))))}},pt=function(e){switch(e.$){case 13:var $=e.a;return $;case 12:var $=e.a;return e.b,$;case 0:var n=e.a;return n;case 1:var $=e.a;return $;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(ce,"-",a(ee,qr,i.hF))+("-cols-"+(a(ce,"-",a(ee,qr,i.ak))+("-space-x-"+(qr(i.hT.a)+("-space-y-"+qr(i.hT.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.iq)+("-"+k(o.gI)))))));case 11:var l=e.a,c=e.b,$=function(){switch(l){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ce," ",a(ee,function(m){var p=pt(m);if(p==="")return"";var b=p;return b+("-"+$)},c));default:var f=e.a;return a(Fe,"",ec(f))}},qg=v(function(e,r){var n=r;return h(za,e,0,n)}),Jg=v(function(e,r){var n=a(Wi,e,r);return!n.$}),Yg=v(function(e,r){var n=r;return a(Jg,e,n)}),Fv=v(function(e,r){var n=r.a,t=r.b,i=pt(e);return a(Yg,i,n)?r:z(a(qg,i,n),a(P,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),lt=v(function(e,r){return{$:0,a:e,b:r}}),x=function(e){return"."+e},Xg=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(P,i,n)}),Mn=v(function(e,r){return h(rr,Xg(e),A,r)}),_a=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ve(r*255))+(","+k(Ve(n*255))+(","+k(Ve(t*255))+(","+(ve(i)+")")))))},ll=function(e){return a(ce," ",a(Mn,Rr,u([e.ej?X("inset"):J,X(ve(e.eV.a)+"px"),X(ve(e.eV.b)+"px"),X(ve(e.a2)+"px"),X(ve(e.bi)+"px"),X(_a(e.b6))])))},Iv=function(e){return u([a(lt,x(d.ea)+":focus-within",a(Mn,Rr,u([a(We,function(r){return a(ue,"border-color",_a(r))},e.fW),a(We,function(r){return a(ue,"background-color",_a(r))},e.fO),a(We,function(r){return a(ue,"box-shadow",ll({a2:r.a2,b6:r.b6,ej:!1,eV:a(tl,Qa,a(xi,Qa,r.eV)),bi:r.bi}))},e.hL),X(a(ue,"outline","none"))]))),a(lt,x(d.fK)+":focus .focusable, "+(x(d.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(x(d.fK)+" .focusable-thumb"))),a(Mn,Rr,u([a(We,function(r){return a(ue,"border-color",_a(r))},e.fW),a(We,function(r){return a(ue,"background-color",_a(r))},e.fO),a(We,function(r){return a(ue,"box-shadow",ll({a2:r.a2,b6:r.b6,ej:!1,eV:a(tl,Qa,a(xi,Qa,r.eV)),bi:r.bi}))},e.hL),X(a(ue,"outline","none"))])))])},Or=function(e){return en(k$(e))},Bv=v(function(e,r){return a(Il,Hd(e),D$(r))}),xo=v(function(e,r){return{$:2,a:e,b:r}}),rc=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),hr=v(function(e,r){return{$:0,a:e,b:r}}),I=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),Zg=v(function(e,r){return{$:3,a:e,b:r}}),Ev=u([0,1,2,3,4,5]),Qg=v(function(e,r){return r.b?h(rr,P,r,e):e}),pr=function(e){return h(rr,Qg,A,e)},ja=v(function(e,r){return pr(a(ee,e,r))}),Kg=function(e){switch(e){case 0:return x(d.gc);case 1:return x(d.b9);case 2:return x(d.cb);case 3:return x(d.bt);case 4:return x(d.ca);default:return x(d.ax)}},zi=function(e){switch(e){case 0:return x(d.fH);case 1:return x(d.fA);case 2:return x(d.dY);case 3:return x(d.dX);case 4:return x(d.fB);default:return x(d.fC)}},Ka=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return u([a(I,Kg(n),i),a(O,x(d.fK),u([a(I,zi(n),o)]))])};return rc(a(ja,r,Ev))},hu=u([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(I,x(d.cY),u([a(g,"z-index","0"),a(O,x(d.fQ),u([a(g,"z-index","-1")]))])),a(I,x(d.hK),u([a(O,x(d.Y),u([a(I,x(d.c_),u([a(g,"flex-grow","0")])),a(I,x(d.dO),u([a(g,"align-self","auto !important")]))]))])),a(O,x(d.cZ),u([a(g,"height","auto")])),a(O,x(d.c_),u([a(g,"flex-grow","100000")])),a(O,x(d.dO),u([a(g,"width","100%")])),a(O,x(d.fv),u([a(g,"width","100%")])),a(O,x(d.dN),u([a(g,"align-self","flex-start")])),Ka(function(e){switch(e){case 0:return z(u([a(g,"justify-content","flex-start")]),u([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return z(u([a(g,"justify-content","flex-end")]),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return z(u([a(g,"align-items","flex-end")]),u([a(g,"align-self","flex-end")]));case 3:return z(u([a(g,"align-items","flex-start")]),u([a(g,"align-self","flex-start")]));case 4:return z(u([a(g,"align-items","center")]),u([a(g,"align-self","center")]));default:return z(u([a(O,x(d.fK),u([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),eh=function(e){var r=function(n){return u([a(O,x(d.fK),u([a(I,zi(n),e(n))]))])};return rc(a(ja,r,Ev))},rh=function(){return u([0,1,2,3,4,5])}(),nh=u([a(hr,"html,body",u([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(hr,Y(x(d.fK),Y(x(d.hP),x(d.gO))),u([a(g,"display","block"),a(I,x(d.c_),u([a(O,"img",u([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(I,x(d.dO),u([a(O,"img",u([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(hr,x(d.fK)+":focus",u([a(g,"outline","none")])),a(hr,x(d.hD),u([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(I,Y(x(d.fK),x(d.c_)),u([a(g,"height","100%"),a(O,x(d.c_),u([a(g,"height","100%")]))])),a(O,x(d.gQ),u([a(I,x(d.be),u([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(hr,x(d.be),u([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(I,x(d.hP),hu),rc(function(e){return a(ee,e,rh)}(function(e){switch(e){case 0:return a(I,x(d.fy),u([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,x(d.c_),u([a(g,"height","auto")])),a(O,x(d.dO),u([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",u([a(g,"pointer-events","auto")]))]));case 1:return a(I,x(d.fR),u([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",u([a(g,"pointer-events","auto")])),a(O,x(d.c_),u([a(g,"height","auto")]))]));case 2:return a(I,x(d.hi),u([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",u([a(g,"pointer-events","auto")]))]));case 3:return a(I,x(d.hh),u([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",u([a(g,"pointer-events","auto")]))]));case 4:return a(I,x(d.gQ),u([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",u([a(g,"pointer-events","auto")]))]));default:return a(I,x(d.fQ),u([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",u([a(g,"pointer-events","auto")]))]))}}))])),a(hr,x(d.fK),u([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(I,x(d.dQ),u([a(g,"flex-wrap","wrap")])),a(I,x(d.eU),u([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(I,x(d.gg),u([a(g,"cursor","pointer")])),a(I,x(d.gh),u([a(g,"cursor","text")])),a(I,x(d.ho),u([a(g,"pointer-events","none !important")])),a(I,x(d.b4),u([a(g,"pointer-events","auto !important")])),a(I,x(d.a$),u([a(g,"opacity","0")])),a(I,x(d.aU),u([a(g,"opacity","1")])),a(I,x(Y(d.gL,d.a$))+":hover",u([a(g,"opacity","0")])),a(I,x(Y(d.gL,d.aU))+":hover",u([a(g,"opacity","1")])),a(I,x(Y(d.gy,d.a$))+":focus",u([a(g,"opacity","0")])),a(I,x(Y(d.gy,d.aU))+":focus",u([a(g,"opacity","1")])),a(I,x(Y(d.cK,d.a$))+":active",u([a(g,"opacity","0")])),a(I,x(Y(d.cK,d.aU))+":active",u([a(g,"opacity","1")])),a(I,x(d.fj),u([a(g,"transition",a(ce,", ",a(ee,function(e){return e+" 160ms"},u(["transform","opacity","filter","background-color","color","font-size"]))))])),a(I,x(d.hH),u([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(I,x(d.hI),u([a(g,"overflow-x","auto"),a(I,x(d.af),u([a(g,"flex-shrink","1")]))])),a(I,x(d.hJ),u([a(g,"overflow-y","auto"),a(I,x(d.aw),u([a(g,"flex-shrink","1")])),a(I,x(d.hP),u([a(g,"flex-shrink","1")]))])),a(I,x(d.f7),u([a(g,"overflow","hidden")])),a(I,x(d.f8),u([a(g,"overflow-x","hidden")])),a(I,x(d.f9),u([a(g,"overflow-y","hidden")])),a(I,x(d.dN),u([a(g,"width","auto")])),a(I,x(d.b1),u([a(g,"border-width","0")])),a(I,x(d.fX),u([a(g,"border-style","dashed")])),a(I,x(d.fY),u([a(g,"border-style","dotted")])),a(I,x(d.fZ),u([a(g,"border-style","solid")])),a(I,x(d.Y),u([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(I,x(d.gY),u([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(I,x(d.hP),hu),a(I,x(d.af),u([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,x(d.fK),u([a(g,"flex-basis","0%"),a(I,x(d.fu),u([a(g,"flex-basis","auto")])),a(I,x(d.et),u([a(g,"flex-basis","auto")]))])),a(O,x(d.c_),u([a(g,"align-self","stretch !important")])),a(O,x(d.ef),u([a(g,"align-self","stretch !important")])),a(O,x(d.dO),u([a(g,"flex-grow","100000")])),a(O,x(d.b8),u([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+d.fG,u([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fE,u([a(g,"flex-grow","1"),a(O,x(d.fB),u([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+d.fE,u([a(g,"flex-grow","1"),a(O,x(d.fB),u([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+d.fE,u([a(g,"flex-grow","1"),a(O,x(d.fC),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fE+" ~ u"),u([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fG+(" ~ s."+d.fE)),u([a(g,"flex-grow","0")])),Ka(function(e){switch(e){case 0:return z(u([a(g,"align-items","flex-start")]),u([a(g,"align-self","flex-start")]));case 1:return z(u([a(g,"align-items","flex-end")]),u([a(g,"align-self","flex-end")]));case 2:return z(u([a(g,"justify-content","flex-end")]),A);case 3:return z(u([a(g,"justify-content","flex-start")]),A);case 4:return z(u([a(g,"justify-content","center")]),A);default:return z(u([a(g,"align-items","center")]),u([a(g,"align-self","center")]))}}),a(I,x(d.hS),u([a(g,"justify-content","space-between")])),a(I,x(d.ci),u([a(g,"align-items","baseline")]))])),a(I,x(d.aw),u([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,x(d.fK),u([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(I,x(d.ee),u([a(g,"flex-basis","auto")]))])),a(O,x(d.c_),u([a(g,"flex-grow","100000")])),a(O,x(d.dO),u([a(g,"width","100%")])),a(O,x(d.fv),u([a(g,"width","100%")])),a(O,x(d.dN),u([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+d.fD,u([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fF,u([a(g,"flex-grow","1"),a(O,x(d.fC),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+d.fF,u([a(g,"flex-grow","1"),a(O,x(d.fC),u([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+d.fF,u([a(g,"flex-grow","1"),a(O,x(d.fC),u([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fF+" ~ u"),u([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fD+(" ~ s."+d.fF)),u([a(g,"flex-grow","0")])),Ka(function(e){switch(e){case 0:return z(u([a(g,"justify-content","flex-start")]),u([a(g,"margin-bottom","auto")]));case 1:return z(u([a(g,"justify-content","flex-end")]),u([a(g,"margin-top","auto")]));case 2:return z(u([a(g,"align-items","flex-end")]),u([a(g,"align-self","flex-end")]));case 3:return z(u([a(g,"align-items","flex-start")]),u([a(g,"align-self","flex-start")]));case 4:return z(u([a(g,"align-items","center")]),u([a(g,"align-self","center")]));default:return z(u([a(g,"justify-content","center")]),A)}}),a(O,x(d.b8),u([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(I,x(d.hS),u([a(g,"justify-content","space-between")]))])),a(I,x(d.gD),u([a(g,"display","-ms-grid"),a(O,".gp",u([a(O,x(d.fK),u([a(g,"width","100%")]))])),a(Zg,z("display","grid"),u([z("display","grid")])),eh(function(e){switch(e){case 0:return u([a(g,"justify-content","flex-start")]);case 1:return u([a(g,"justify-content","flex-end")]);case 2:return u([a(g,"align-items","flex-end")]);case 3:return u([a(g,"align-items","flex-start")]);case 4:return u([a(g,"align-items","center")]);default:return u([a(g,"justify-content","center")])}})])),a(I,x(d.eY),u([a(g,"display","block"),a(O,x(d.fK+":first-child"),u([a(g,"margin","0 !important")])),a(O,x(d.fK+(zi(3)+(":first-child + ."+d.fK))),u([a(g,"margin","0 !important")])),a(O,x(d.fK+(zi(2)+(":first-child + ."+d.fK))),u([a(g,"margin","0 !important")])),Ka(function(e){switch(e){case 0:return z(A,A);case 1:return z(A,A);case 2:return z(A,u([a(g,"float","right"),a(I,"::after",u([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return z(A,u([a(g,"float","left"),a(I,"::after",u([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return z(A,A);default:return z(A,A)}})])),a(I,x(d.gU),u([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(I,x(d.gX),u([a(I,x(d.hP),u([a(g,"flex-basis","auto")]))])),a(I,x(d.gW),u([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,x(d.gV),u([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(I,x(d.eZ),u([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(I,x(d.cY),u([a(g,"z-index","0"),a(O,x(d.fQ),u([a(g,"z-index","-1")]))])),a(xo,x(d.Y),u([a(g,"display","inline"),a(g,"white-space","normal")])),a(xo,x(d.eZ),u([a(g,"display","inline"),a(I,"::after",u([a(g,"content","none")])),a(I,"::before",u([a(g,"content","none")]))])),a(xo,x(d.hP),u([a(g,"display","inline"),a(g,"white-space","normal"),a(I,x(d.fu),u([a(g,"display","inline-block")])),a(I,x(d.gQ),u([a(g,"display","flex")])),a(I,x(d.fQ),u([a(g,"display","flex")])),a(I,x(d.fy),u([a(g,"display","flex")])),a(I,x(d.fR),u([a(g,"display","flex")])),a(I,x(d.hi),u([a(g,"display","flex")])),a(I,x(d.hh),u([a(g,"display","flex")])),a(O,x(d.Y),u([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,x(d.af),u([a(g,"display","inline")])),a(O,x(d.aw),u([a(g,"display","inline-flex")])),a(O,x(d.gD),u([a(g,"display","inline-grid")])),Ka(function(e){switch(e){case 0:return z(A,A);case 1:return z(A,A);case 2:return z(A,u([a(g,"float","right")]));case 3:return z(A,u([a(g,"float","left")]));case 4:return z(A,A);default:return z(A,A)}})])),a(I,".hidden",u([a(g,"display","none")])),a(I,x(d.ie),u([a(g,"font-weight","100")])),a(I,x(d.h5),u([a(g,"font-weight","200")])),a(I,x(d.h9),u([a(g,"font-weight","300")])),a(I,x(d.ib),u([a(g,"font-weight","400")])),a(I,x(d.ia),u([a(g,"font-weight","500")])),a(I,x(d.id),u([a(g,"font-weight","600")])),a(I,x(d.fV),u([a(g,"font-weight","700")])),a(I,x(d.h4),u([a(g,"font-weight","800")])),a(I,x(d.h6),u([a(g,"font-weight","900")])),a(I,x(d.g3),u([a(g,"font-style","italic")])),a(I,x(d.hY),u([a(g,"text-decoration","line-through")])),a(I,x(d.il),u([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(I,Y(x(d.il),x(d.hY)),u([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(I,x(d.$8),u([a(g,"font-style","normal")])),a(I,x(d.h7),u([a(g,"text-align","justify")])),a(I,x(d.cE),u([a(g,"text-align","justify-all")])),a(I,x(d.h3),u([a(g,"text-align","center")])),a(I,x(d.ic),u([a(g,"text-align","right")])),a(I,x(d.h8),u([a(g,"text-align","left")])),a(I,".modal",u([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),yn=function(e){return u([a(hr,".v-"+e,u([a(g,"font-feature-settings",'"'+(e+'"'))])),a(hr,".v-"+(e+"-off"),u([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},ah=pr(u([a(ee,function(e){return a(hr,".border-"+k(e),u([a(g,"border-width",k(e)+"px")]))},a(Xr,0,6)),a(ee,function(e){return a(hr,".font-size-"+k(e),u([a(g,"font-size",k(e)+"px")]))},a(Xr,8,32)),a(ee,function(e){return a(hr,".p-"+k(e),u([a(g,"padding",k(e)+"px")]))},a(Xr,0,24)),u([a(hr,".v-smcp",u([a(g,"font-variant","small-caps")])),a(hr,".v-smcp-off",u([a(g,"font-variant","normal")]))]),yn("zero"),yn("onum"),yn("liga"),yn("dlig"),yn("ordn"),yn("tnum"),yn("afrc"),yn("frac")])),th=`
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

`))),ih=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,oh=`
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
`,lh=`
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
`,ch=`
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
`,uh="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(x(d.fK)+(x(d.af)+(" > "+(x(d.fK)+(" { flex-basis: auto !important; } "+(x(d.fK)+(x(d.af)+(" > "+(x(d.fK)+(x(d.b8)+(" { flex-basis: auto !important; }}"+(ih+(oh+(ch+(lh+th))))))))))))))),La=function(e){return a(ce,"",e)},da=v(function(e,r){return{b5:r,G:A,aE:A,ag:e}}),pa=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return je(o,{aE:a(P,z(l,c),o.aE)});case 3:var $=i.a,f=$.a,m=$.b,p=i.b;return je(o,{G:a(P,{b5:`
}`,G:A,aE:p,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return je(o,{G:a(P,a(pa,a(da,n.ag+(" + "+b),""),s),o.G)});case 1:var w=i.a,_=i.b;return je(o,{G:a(P,a(pa,a(da,n.ag+(" > "+w),""),_),o.G)});case 2:var w=i.a,_=i.b;return je(o,{G:a(P,a(pa,a(da,n.ag+(" "+w),""),_),o.G)});case 4:var S=i.a,C=i.b;return je(o,{G:a(P,a(pa,a(da,Y(n.ag,S),""),C),o.G)});default:var y=i.a;return je(o,{G:a(P,a(pa,a(da,n.ag,""),y),o.G)})}});return h(rr,t,n,r)}),$h=function(e){var r=function(i){return La(a(ee,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return Y(n(o),La(a(ee,t,o.G)))};return La(a(ee,t,h(rr,v(function(i,o){var l=i.a,c=i.b;return a(P,a(pa,a(da,l,""),c),o)}),A,e)))},bu=Y(uh,$h(Y(nh,ah))),Tn=qo,Vv=function(e){var r=e.eS;switch(r){case 0:return h(Or,"div",A,u([h(Or,"style",A,u([Tn(bu)]))]));case 1:return Tn("");default:return h(Or,"elm-ui-static-rules",u([a(Bv,"rules",Ql(bu))]),A)}},vh=v(function(e,r){return h(Ue,bd(e),pd(),r)}),fh=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(hd,t,i,n)}),gd(),e)},mh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hd;return'"'+(r+'"')}},sh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},dh=function(e){if(e.$===5){var r=e.a;return a(Dt,sh,r.fo)}else return!1},Pa=v(function(e,r){return _e(e,r)<0?e:r}),qa=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ae=re(function(e,r,n,t){if(r.$===1)return u([n+("{"+(h(Ue,qa(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gL;switch(o){case 0:return A;case 2:return u([n+("-hv {"+(h(Ue,qa(!0),"",t)+`
}`))]);default:return u([n+("-hv:hover {"+(h(Ue,qa(!1),"",t)+`
}`))])}case 0:var l=h(Ue,qa(!1),"",t);return u([n+("-fs:focus {"+(l+`
}`)),"."+(d.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(x(d.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return u([n+("-act:active {"+(h(Ue,qa(!1),"",t)+`
}`))])}}),ph=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},gh=function(e){if(e.$===5){var r=e.a;return X(a(ce,", ",a(ee,ph,r.fo)))}else return J},hh=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,$=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,w=s.a,_=s.b,S=s.c,C=e.d,y="translate3d("+(ve(l)+("px, "+(ve(c)+("px, "+(ve($)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(p)+(", "+(ve(b)+")"))))),H="rotate3d("+(ve(w)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return X(y+(" "+(T+(" "+H))))}},nc=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(Ae,e,n,t,i);case 13:var $=r.a,b=r.b;return L(Ae,e,n,"."+$,u([a(ue,"box-shadow",b)]));case 12:var $=r.a,o=r.b,l=a(Tr,0,a(Pa,1,1-o));return L(Ae,e,n,"."+$,u([a(ue,"opacity",ve(l))]));case 2:var c=r.a;return L(Ae,e,n,".font-size-"+k(c),u([a(ue,"font-size",k(c)+"px")]));case 1:var $=r.a,f=r.b,m=a(ce,", ",a(Mn,gh,f)),p=u([a(ue,"font-family",a(ce,", ",a(ee,mh,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(Dt,dh,f)?"small-caps":"normal")]);return L(Ae,e,n,"."+$,p);case 3:var se=r.a,b=r.b,so=r.c;return L(Ae,e,n,"."+se,u([a(ue,b,so)]));case 4:var se=r.a,b=r.b,s=r.c;return L(Ae,e,n,"."+se,u([a(ue,b,_a(s))]));case 5:var q=r.a,w=r.b,_=r.c,S=k(_)+"px",C=k(w)+"px",y="."+d.af,T="."+(d.dQ+y),pe="."+d.dY,H="."+d.eZ,Q="."+d.eY,Se="."+d.dX,ae=ve(_/2)+"px",te=ve(w/2)+"px",ie="."+d.aw,se="."+q,ne="."+d.fK;return pr(u([L(Ae,e,n,se+(y+(" > "+(ne+(" + "+ne)))),u([a(ue,"margin-left",C)])),L(Ae,e,n,se+(T+(" > "+ne)),u([a(ue,"margin",ae+(" "+te))])),L(Ae,e,n,se+(ie+(" > "+(ne+(" + "+ne)))),u([a(ue,"margin-top",S)])),L(Ae,e,n,se+(Q+(" > "+(ne+(" + "+ne)))),u([a(ue,"margin-top",S)])),L(Ae,e,n,se+(Q+(" > "+Se)),u([a(ue,"margin-right",C)])),L(Ae,e,n,se+(Q+(" > "+pe)),u([a(ue,"margin-left",C)])),L(Ae,e,n,Y(se,H),u([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),L(Ae,e,n,"textarea"+(ne+se),u([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),L(Ae,e,n,se+(H+(" > "+Se)),u([a(ue,"margin-right",C)])),L(Ae,e,n,se+(H+(" > "+pe)),u([a(ue,"margin-left",C)])),L(Ae,e,n,se+(H+"::after"),u([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),L(Ae,e,n,se+(H+"::before"),u([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ae,e,n,se,u([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return L(Ae,e,n,se,u([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Ze,Oa,rn){e:for(;;)switch(rn.$){case 0:var fs=rn.a;return k(fs)+"px";case 1:var Ir=z(Ze,Oa);if(Ir.a.$===1){if(Ir.b.$===1)return Ir.a,Ir.b,"max-content";Ir.a;var Wn=Ir.b.a;return"minmax(max-content, "+(k(Wn)+"px)")}else if(Ir.b.$===1){var Hn=Ir.a.a;return Ir.b,"minmax("+(k(Hn)+"px, max-content)")}else{var Hn=Ir.a.a,Wn=Ir.b.a;return"minmax("+(k(Hn)+("px, "+(k(Wn)+"px)")))}case 2:var Oc=rn.a,Br=z(Ze,Oa);if(Br.a.$===1){if(Br.b.$===1)return Br.a,Br.b,k(Oc)+"fr";Br.a;var Wn=Br.b.a;return"minmax(max-content, "+(k(Wn)+"px)")}else if(Br.b.$===1){var Hn=Br.a.a;return Br.b,"minmax("+(k(Hn)+("px, "+(k(Oc)+"frfr)")))}else{var Hn=Br.a.a,Wn=Br.b.a;return"minmax("+(k(Hn)+("px, "+(k(Wn)+"px)")))}case 3:var po=rn.a,go=rn.b,ho=X(po),bo=Oa,_o=go;Ze=ho,Oa=bo,rn=_o;continue e;default:var po=rn.a,go=rn.b,ho=Ze,bo=X(po),_o=go;Ze=ho,Oa=bo,rn=_o;continue e}}),B=function(Ze){return h(Te,J,J,Ze)};B(me.hT.a);var E=B(me.hT.b),V=function(Ze){return"grid-template-rows: "+(Ze+";")}(a(ce," ",a(ee,B,me.hF))),R=function(Ze){return"-ms-grid-rows: "+(Ze+";")}(a(ce,E,a(ee,B,me.ak))),j=function(Ze){return"-ms-grid-columns: "+(Ze+";")}(a(ce,E,a(ee,B,me.ak))),U="grid-row-gap:"+(B(me.hT.b)+";"),N="grid-column-gap:"+(B(me.hT.a)+";"),W=function(Ze){return"grid-template-columns: "+(Ze+";")}(a(ce," ",a(ee,B,me.ak))),se=".grid-rows-"+(a(ce,"-",a(ee,qr,me.hF))+("-cols-"+(a(ce,"-",a(ee,qr,me.ak))+("-space-x-"+(qr(me.hT.a)+("-space-y-"+qr(me.hT.b))))))),vo=se+("{"+(W+(V+(N+(U+"}"))))),fo="@supports (display:grid) {"+(vo+"}"),mo=se+("{"+(j+(R+"}")));return u([mo,fo]);case 9:var Ne=r.a,Ht=a(ce," ",u(["-ms-grid-row: "+(k(Ne.af)+";"),"-ms-grid-row-span: "+(k(Ne.gI)+";"),"-ms-grid-column: "+(k(Ne.ga)+";"),"-ms-grid-column-span: "+(k(Ne.iq)+";")])),$o=a(ce," ",u(["grid-row: "+(k(Ne.af)+(" / "+(k(Ne.af+Ne.gI)+";"))),"grid-column: "+(k(Ne.ga)+(" / "+(k(Ne.ga+Ne.iq)+";")))])),se=".grid-pos-"+(k(Ne.af)+("-"+(k(Ne.ga)+("-"+(k(Ne.iq)+("-"+k(Ne.gI))))))),vo=se+("{"+($o+"}")),fo="@supports (display:grid) {"+(vo+"}"),mo=se+("{"+(Ht+"}"));return u([mo,fo]);case 11:var se=r.a,us=r.b,$s=function(Ze){return h(nc,e,Ze,X(se))};return a(ja,$s,us);default:var Gc=r.a,so=hh(Gc),se=ec(Gc),Gt=z(se,so);if(!Gt.a.$&&!Gt.b.$){var q=Gt.a.a,vs=Gt.b.a;return L(Ae,e,n,"."+q,u([a(ue,"transform",vs)]))}else return A}}),bh=v(function(e,r){return fh(a(ee,function(n){var t=h(nc,e,n,J);return z(pt(n),a(vh,Ql,t))},r))}),Li=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ce,"",a(ee,n,r))+"}"))}),_u=M(function(e,r,n){var t=n.a,i=n.b;return u([a(Li,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Li,"."+(e+("."+(r+("> ."+(d.Y+(", ."+(e+(" ."+(r+(" > ."+d.Y)))))))))),i)])}),_h=M(function(e,r,n){var t=r.a,i=r.b,o=he(e,n)?e:n+(" ."+e);return a(ce," ",Y(h(_u,o,d.hQ,i),h(_u,o,d.gz,t)))}),wh=v(function(e,r){var n=he(e,r)?e:r+(" ."+e);return a(ce," ",u([a(Li,"."+(n+("."+(d.hQ+(", "+("."+(n+(" ."+d.hQ))))))),u([z("line-height","1")])),a(Li,"."+(n+("."+(d.hQ+("> ."+(d.Y+(", ."+(n+(" ."+(d.hQ+(" > ."+d.Y)))))))))),u([z("vertical-align","0"),z("line-height","1")]))]))}),wu=M(function(e,r,n){return{gI:r/e,bi:e,fp:n}}),Rv=v(function(e,r){return h(rr,v(function(n,t){return e(n)?a(P,n,t):t}),A,r)}),yh=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Ue,Tr,r,n))}else return J},yu=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Ue,Pa,r,n))}else return J},xu=function(e){var r=u([e.f1,e.fP,e.gl,e.g8]),n=a(Fe,e.gl,yu(r)),t=a(Fe,e.fP,yu(a(Rv,function(f){return!he(f,n)},r))),i=a(Fe,e.f1,yh(r)),o=1/(i-t),l=1-i,c=1/(i-n),$=1-i;return{f1:h(wu,o,i-t,l),ec:h(wu,c,i-n,$)}},Su=function(e){return z(u([z("display","block")]),u([z("display","inline-block"),z("line-height",ve(e.gI)),z("vertical-align",ve(e.fp)+"em"),z("font-size",ve(e.bi)+"em")]))},xh=function(e){return h(Ue,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return X(z(Su(function(l){return l.ec}(xu(o))),Su(function(l){return l.f1}(xu(o)))))}else return n;else return n}),J,e)},Sh=function(e){var r=function(o){if(o.$===4){var l=o.b;return X("@import url('"+(l+"');"))}else return J},n=function(o){o.a;var l=o.b,c=a(ce,`
`,a(Mn,r,l));return c},t=a(ee,ov,e),i=function(o){var l=o.a,c=o.b,$=xh(c);if($.$===1)return a(ce,"",a(ee,wh(l),t));var f=$.a;return a(ce,"",a(ee,a(_h,l,f),t))};return Y(a(ce,`
`,a(ee,n,e)),a(ce,`
`,a(ee,i,e)))},Ch=function(e){if(e.$===1){var r=e.a,n=e.b;return X(z(r,n))}else return J},Cu=v(function(e,r){var n=v(function(l,c){return{cA:Y(c.cA,h(nc,e,l,J)),bT:function(){var $=Ch(l);if($.$===1)return c.bT;var f=$.a;return a(P,f,c.bT)}()}}),t=h(Ue,n,{cA:A,bT:A},r),i=t.bT,o=t.cA;return Y(Sh(i),La(o))}),jv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Or,"div",A,u([h(Or,"style",A,u([Tn(a(Cu,e,r))]))]));case 1:return h(Or,"div",A,u([h(Or,"style",A,u([Tn(a(Cu,e,r))]))]));default:return h(Or,"elm-ui-rules",u([a(Bv,"rules",a(bh,e,r))]),A)}}),zu=re(function(e,r,n,t){var i=a(jv,r,h(Ue,Fv,z(Av,Iv(r.gy)),n).b);return e?a(P,z("static-stylesheet",Vv(r)),a(P,z("dynamic-stylesheet",i),t)):a(P,z("dynamic-stylesheet",i),t)}),Lu=re(function(e,r,n,t){var i=a(jv,r,h(Ue,Fv,z(Av,Iv(r.gy)),n).b);return e?a(P,Vv(r),a(P,i,t)):a(P,i,t)}),cl=we(45),gt=we(37),Uv=function(e){return Vd(k$(e))},Nv=en("p"),lr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return he(o&t,o)}else{var i=e.a;return he(i&n,i)}}),Pu=en("s"),Mu=en("u"),ul=we(44),ht=we(39),Xt=Sr(function(e,r,n,t,i,o){var l=v(function($,f){if(t.$===1){var m=t.a;return h(Uv,$,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return L(zu,!1,b,s,m);default:var b=i.a,s=i.b;return L(zu,!0,b,s,m)}}())}else{var p=t.a;return a(function(){switch($){case"div":return $r;case"p":return Nv;default:return Or($)}}(),f,function(){switch(i.$){case 0:return p;case 2:var b=i.a,s=i.b;return L(Lu,!1,b,s,p);default:var b=i.a,s=i.b;return L(Lu,!0,b,s,p)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var $=r.a;return a(l,$,n);default:var $=r.a,f=r.b;return h(Or,$,n,u([a(l,f,u([Pr(d.fK+(" "+d.hP))]))]))}}();switch(o){case 0:return a(lr,ht,e)&&!a(lr,ul,e)?c:a(lr,Tv,e)?a(Mu,u([Pr(a(ce," ",u([d.fK,d.hP,d.b8,d.ax,d.fG])))]),u([c])):a(lr,kv,e)?a(Pu,u([Pr(a(ce," ",u([d.fK,d.hP,d.b8,d.ax,d.fE])))]),u([c])):c;case 1:return a(lr,gt,e)&&!a(lr,cl,e)?c:a(lr,Dv,e)?a(Pu,u([Pr(a(ce," ",u([d.fK,d.hP,d.b8,d.fF])))]),u([c])):a(lr,Mv,e)?a(Mu,u([Pr(a(ce," ",u([d.fK,d.hP,d.b8,d.fD])))]),u([c])):c;default:return c}}),Sn=function(e){return!e.b},on=Tn,zh=d.fK+(" "+(d.Y+(" "+(d.dN+(" "+d.cZ))))),bt=function(e){return a($r,u([Pr(zh)]),u([on(e)]))},Lh=d.fK+(" "+(d.Y+(" "+(d.dO+(" "+d.c_))))),Tu=function(e){return a($r,u([Pr(Lh)]),u([on(e)]))},Ph=M(function(e,r,n){var t=v(function(w,_){var S=w.a,C=w.b,y=_.a,T=_.b;switch(C.$){case 0:var H=C.a;return he(e,Yt),z(a(P,z(S,H(e)),y),T);case 1:var Q=C.a;return he(e,Yt),z(a(P,z(S,a(Q.gM,Jn,e)),y),Sn(T)?Q.hZ:Y(Q.hZ,T));case 2:var ae=C.a;return z(a(P,z(S,he(e,xr)?Tu(ae):bt(ae)),y),T);default:return z(y,T)}}),i=v(function(w,_){var S=_.a,C=_.b;switch(w.$){case 0:var y=w.a;return he(e,Yt),z(a(P,y(e),S),C);case 1:var T=w.a;return he(e,Yt),z(a(P,a(T.gM,Jn,e),S),Sn(C)?T.hZ:Y(T.hZ,C));case 2:var H=w.a;return z(a(P,he(e,xr)?Tu(H):bt(H),S),C);default:return z(S,C)}});if(r.$===1){var o=r.a,l=h(rr,t,z(A,A),o),c=l.a,$=l.b,f=Sn($)?n.hZ:Y(n.hZ,$);if(f.b){var m=f;return ol({gM:L(Xt,n.aR,n.aT,n.aJ,du(h(gu,"nearby-element-pls",c,n.aM))),hZ:m})}else return dt(F(Xt,n.aR,n.aT,n.aJ,du(h(gu,"nearby-element-pls",c,n.aM)),Jn))}else{var p=r.a,b=h(rr,i,z(A,A),p),s=b.a,$=b.b,f=Sn($)?n.hZ:Y(n.hZ,$);if(f.b){var m=f;return ol({gM:L(Xt,n.aR,n.aT,n.aJ,nr(a(pu,s,n.aM))),hZ:m})}else return dt(F(Xt,n.aR,n.aT,n.aJ,nr(a(pu,s,n.aM)),Jn))}}),fr=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Mh=function(e){return{$:10,a:e}},Pi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(Pi,n,o|t)}else{var i=e.a;return a(Pi,i|n,t)}}),ku=function(e){return{$:1,a:e}},Zt=v(function(e,r){return{$:3,a:e,b:r}}),Du=function(e){return{$:2,a:e}},Th=v(function(e,r){return a($r,u([Pr(function(){switch(e){case 0:return a(ce," ",u([d.be,d.hP,d.fy]));case 1:return a(ce," ",u([d.be,d.hP,d.fR]));case 2:return a(ce," ",u([d.be,d.hP,d.hi]));case 3:return a(ce," ",u([d.be,d.hP,d.hh]));case 4:return a(ce," ",u([d.be,d.hP,d.gQ]));default:return a(ce," ",u([d.be,d.hP,d.fQ]))}}())]),u([function(){switch(r.$){case 3:return Tn("");case 2:var n=r.a;return bt(n);case 0:var t=r.a;return t(xr);default:var i=r.a;return a(i.gM,Jn,xr)}}()]))}),kh=M(function(e,r,n){var t=a(Th,e,r);switch(n.$){case 0:return e===5?ku(u([t])):Du(u([t]));case 1:var i=n.a;return e===5?ku(a(P,t,i)):a(Zt,i,u([t]));case 2:var o=n.a;return e===5?a(Zt,u([t]),o):Du(a(P,t,o));default:var i=n.a,o=n.b;return e===5?a(Zt,a(P,t,i),o):a(Zt,i,a(P,t,o))}}),Au=v(function(e,r){return{$:2,a:e,b:r}}),Cn=function(e){return{$:1,a:e}},Gn=v(function(e,r){switch(r.$){case 0:return Cn(e);case 1:var n=r.a;return a(Au,n,e);default:var t=r.a,i=r.b;return a(Au,t,i)}}),Dh=function(e){switch(e){case 0:return d.cL+(" "+d.dX);case 2:return d.cL+(" "+d.dY);default:return d.cL+(" "+d.fB)}},Ah=function(e){switch(e){case 0:return d.cM+(" "+d.fH);case 2:return d.cM+(" "+d.fA);default:return d.cM+(" "+d.fC)}},et=v(function(e,r){return a(Ur,Wd(e),D$(r))}),Wr=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),xn=function(e){return{$:1,a:e}},Fh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var $=r.a;return xn(D($,0,0));case 1:var f=r.a;return xn(D(0,f,0));case 2:var m=r.a;return xn(D(0,0,m));case 3:var n=r.a;return xn(n);case 4:var n=r.a,s=r.b;return L(Wr,D(0,0,0),D(1,1,1),n,s);default:var n=r.a;return L(Wr,D(0,0,0),n,D(0,0,1),0)}case 1:var c=e.a,$=c.a,f=c.b,m=c.c;switch(r.$){case 0:var t=r.a;return xn(D(t,f,m));case 1:var i=r.a;return xn(D($,i,m));case 2:var o=r.a;return xn(D($,f,o));case 3:var n=r.a;return xn(n);case 4:var n=r.a,s=r.b;return L(Wr,c,D(1,1,1),n,s);default:var l=r.a;return L(Wr,c,l,D(0,0,1),0)}default:var c=e.a,$=c.a,f=c.b,m=c.c,p=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return L(Wr,D(t,f,m),p,b,s);case 1:var i=r.a;return L(Wr,D($,i,m),p,b,s);case 2:var o=r.a;return L(Wr,D($,f,o),p,b,s);case 3:var w=r.a;return L(Wr,w,p,b,s);case 4:var _=r.a,S=r.b;return L(Wr,c,p,_,S);default:var C=r.a;return L(Wr,c,C,b,s)}}}),va=we(7),Wv=we(36),Fu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(Pi,n|i,t|o)}),un=a(Pi,0,0),$l=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return D(un,d.ee+(" "+t),u([h(fr,t,"height",n+"px")]));case 1:return D(a(ge,Wv,un),d.cZ,A);case 2:var i=e.a;return i===1?D(a(ge,gt,un),d.c_,A):D(a(ge,gt,un),d.ef+(" height-fill-"+k(i)),u([h(fr,d.fK+("."+(d.aw+(" > "+x("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,$=e.b,f="min-height-"+k(o),m=h(fr,f,"min-height",k(o)+"px !important"),l=$l($),b=l.a,s=l.b,w=l.c;return D(a(ge,cl,b),f+(" "+s),a(P,m,w));default:var c=e.a,$=e.b,f="max-height-"+k(c),m=h(fr,f,"max-height",k(c)+"px"),p=$l($),b=p.a,s=p.b,w=p.c;return D(a(ge,cl,b),f+(" "+s),a(P,m,w))}},Hv=we(38),vl=function(e){switch(e.$){case 0:var r=e.a;return D(un,d.fu+(" width-px-"+k(r)),u([h(fr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return D(a(ge,Hv,un),d.dN,A);case 2:var n=e.a;return n===1?D(a(ge,ht,un),d.dO,A):D(a(ge,ht,un),d.fv+(" width-fill-"+k(n)),u([h(fr,d.fK+("."+(d.af+(" > "+x("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,l=e.b,c="min-width-"+k(t),$=h(fr,c,"min-width",k(t)+"px"),i=vl(l),m=i.a,p=i.b,b=i.c;return D(a(ge,ul,m),c+(" "+p),a(P,$,b));default:var o=e.a,l=e.b,c="max-width-"+k(o),$=h(fr,c,"max-width",k(o)+"px"),f=vl(l),m=f.a,p=f.b,b=f.c;return D(a(ge,ul,m),c+(" "+p),a(P,$,b))}},Hi=we(27),Ih=v(function(e,r){if(he(e,Hi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return he(i,l)&&he(i,o)&&he(i,c)&&i>=0&&i<=24;default:return!1}}),fa=we(6),Iu=we(30),Bu=we(29),Bh=Pe(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var m=c.a,p=c.b;switch(m.$){case 0:var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 3:var _=m.a,b=m.b;if(a(lr,_,n)){var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else{var B=b+(" "+e),E=r,V=a(ge,_,n),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}case 1:var s=m.a,B=e,E=r,V=n,R=t,j=i,U=a(P,s,o),N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 4:var _=m.a,w=m.b;if(a(lr,_,n)){var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else if(a(Ih,_,w)){var B=pt(w)+(" "+e),E=r,V=a(ge,_,n),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else{var B=pt(w)+(" "+e),E=r,V=a(ge,_,n),R=t,j=a(P,w,i),U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}case 10:var _=m.a,S=m.b,B=e,E=r,V=a(ge,_,n),R=a(Fh,t,S),j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 7:var C=m.a;if(a(lr,fa,n)){var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else switch(C.$){case 0:var y=C.a,B=d.fu+(" width-px-"+k(y))+(" "+e),E=r,V=a(ge,fa,n),R=t,j=a(P,h(fr,"width-px-"+k(y),"width",k(y)+"px"),i),U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 1:var B=e+(" "+d.dN),E=r,V=a(ge,Hv,a(ge,fa,n)),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 2:var T=C.a;if(T===1){var B=e+(" "+d.dO),E=r,V=a(ge,ht,a(ge,fa,n)),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else{var B=e+(" "+(d.fv+(" width-fill-"+k(T)))),E=r,V=a(ge,ht,a(ge,fa,n)),R=t,j=a(P,h(fr,d.fK+("."+(d.af+(" > "+x("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}default:var H=vl(C),Q=H.a,ae=H.b,Te=H.c,B=e+(" "+ae),E=r,V=a(Fu,Q,a(ge,fa,n)),R=t,j=Y(Te,i),U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}case 8:var te=m.a;if(a(lr,va,n)){var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else switch(te.$){case 0:var y=te.a,ie=k(y)+"px",ne="height-px-"+ie,B=d.ee+(" "+(ne+(" "+e))),E=r,V=a(ge,va,n),R=t,j=a(P,h(fr,ne,"height ",ie),i),U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 1:var B=d.cZ+(" "+e),E=r,V=a(ge,Wv,a(ge,va,n)),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 2:var T=te.a;if(T===1){var B=d.c_+(" "+e),E=r,V=a(ge,gt,a(ge,va,n)),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else{var B=e+(" "+(d.ef+(" height-fill-"+k(T)))),E=r,V=a(ge,gt,a(ge,va,n)),R=t,j=a(P,h(fr,d.fK+("."+(d.aw+(" > "+x("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}default:var q=$l(te),Q=q.a,ae=q.b,Te=q.c,B=e+(" "+ae),E=r,V=a(Fu,Q,a(ge,va,n)),R=t,j=Y(Te,i),U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}case 2:var de=m.a;switch(de.$){case 0:var B=e,E=a(Gn,"main",r),V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 1:var B=e,E=a(Gn,"nav",r),V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 2:var B=e,E=a(Gn,"footer",r),V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 3:var B=e,E=a(Gn,"aside",r),V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 4:var pe=de.a;if(pe<=1){var B=e,E=a(Gn,"h1",r),V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else if(pe<7){var B=e,E=a(Gn,"h"+k(pe),r),V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else{var B=e,E=a(Gn,"h6",r),V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}case 9:var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 8:var B=e,E=r,V=n,R=t,j=i,U=a(P,a(et,"role","button"),o),N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 5:var Me=de.a,B=e,E=r,V=n,R=t,j=i,U=a(P,a(et,"aria-label",Me),o),N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 6:var B=e,E=r,V=n,R=t,j=i,U=a(P,a(et,"aria-live","polite"),o),N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;default:var B=e,E=r,V=n,R=t,j=i,U=a(P,a(et,"aria-live","assertive"),o),N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var $o=me.a;return Y(i,$o.hZ)}}(),B=e,E=r,V=n,R=t,j=Te,U=o,N=h(kh,Se,me,l),W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e;case 6:var Ne=m.a;if(a(lr,Iu,n)){var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else{var B=Dh(Ne)+(" "+e),E=r,V=function(se){switch(Ne){case 1:return a(ge,kv,se);case 2:return a(ge,Tv,se);default:return se}}(a(ge,Iu,n)),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}default:var Ht=m.a;if(a(lr,Bu,n)){var B=e,E=r,V=n,R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}else{var B=Ah(Ht)+(" "+e),E=r,V=function(se){switch(Ht){case 1:return a(ge,Dv,se);case 2:return a(ge,Mv,se);default:return se}}(a(ge,Bu,n)),R=t,j=i,U=o,N=l,W=p;e=B,r=E,n=V,t=R,i=j,o=U,l=N,c=W;continue e}}}else{var $=ec(t);if($.$===1)return{aJ:a(P,Pr(e),o),aM:l,aR:n,aT:r,hZ:i};var f=$.a;return{aJ:a(P,Pr(e+(" "+f)),o),aM:l,aR:n,aT:r,hZ:a(P,Mh(t),i)}}}),Eh={$:0},Vh=Eh,vr=re(function(e,r,n,t){return h(Ph,e,t,Lt(Bh,Hg(e),r,un,Vh,A,A,Eg,dr(n)))}),$n=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Rh={fO:J,fW:J,hL:X({a2:0,b6:L($n,155/255,203/255,1,1),eV:z(0,0),bi:3})},jh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gL;return l.$===1?je(i,{gL:X(o)}):i;case 1:var c=t.a,$=i.gy;return $.$===1?je(i,{gy:X(c)}):i;default:var f=t.a,m=i.eS;return m.$===1?je(i,{eS:X(f)}):i}}),n=function(t){return{gy:function(){var i=t.gy;if(i.$===1)return Rh;var o=i.a;return o}(),gL:function(){var i=t.gL;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(rr,r,{gy:J,gL:J,eS:J},e))},Uh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(xr);case 1:var n=r.a.hZ,t=r.a.gM;return a(t,e(n),xr);case 2:var i=r.a;return bt(i);default:return bt("")}}),Nh=M(function(e,r,n){var t=jh(e),i=function(){var o=t.eS;return o===1?Pv(t):Ig(t)}();return a(Uh,i,L(vr,xr,ca,r,nr(u([n]))))}),_t=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Gv=v(function(e,r){return{$:1,a:e,b:r}}),Ov=function(e){return{$:2,a:e}},Wh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),So=function(e){return{$:3,a:e}},qv=we(8),Jv=we(14),Yv=we(5),Xv=we(4),Fa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Re(r)+("-"+(Re(n)+("-"+(Re(t)+("-"+Re(i))))))},li=Js,Co=qs,Zv=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ce,"-",Co(li(n)));case 4:var n=e.a;return e.b,a(ce,"-",Co(li(n)));default:var n=e.a.hd;return a(ce,"-",Co(li(n)))}}())}),Hh=function(){var e=u([So("Open Sans"),So("Helvetica"),So("Verdana"),Wh]);return u([a(Ce,qv,h(_t,"bg-"+Fa(L($n,1,1,1,0)),"background-color",L($n,1,1,1,0))),a(Ce,Jv,h(_t,"fc-"+Fa(L($n,0,0,0,1)),"color",L($n,0,0,0,1))),a(Ce,Xv,Ov(20)),a(Ce,Yv,a(Gv,h(Ue,Zv,"font-",e),e))])}(),Gh=M(function(e,r,n){var t=e.hm;return h(Nh,t,a(P,wr(a(ce," ",u([d.hD,d.fK,d.hP]))),Y(Hh,r)),n)}),Qv={$:3},Kv=function(e){return{$:2,a:e}},fl=jd,ef=v(function(e,r){switch(r.$){case 1:var n=r.a;return ol({gM:v(function(o,l){return a(fl,e,a(n.gM,o,l))}),hZ:n.hZ});case 0:var t=r.a;return dt(a(At,fl(e),t));case 2:var i=r.a;return Kv(i);default:return Qv}}),ac=ef,Oh=fl,qh=function(e){return{$:0,a:e}},De=qh,Jh=Nd,Be=Jh,rf={$:1},Gi=function(e){return{$:5,a:e}},nf=Gi(0),Nr=M(function(e,r,n){return L($n,e/255,r/255,n/255,1)}),af=h(Nr,0,0,0),Yh=Ur("d"),Xh=Ur("fill"),Zh=Ur("height"),tf=M$("http://www.w3.org/2000/svg"),Qh=tf("path"),Kh=tf("svg"),e3=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gB:n,hx:r}},r3=function(e){var r=e3(e);return"rgba("+(k(Ve(r.hx*255))+(","+k(Ve(r.gB*255))+(","+k(Ve(r.fS*255))+(","+ve(r.fI)+")"))))},n3=Ur("viewBox"),a3=Ur("width"),wa=M(function(e,r,n){return a(Kh,u([n3("0 0 100 100"),a3(k(e)),Zh(k(e))]),u([a(Qh,u([Yh(n),Xh(r3(r))]),A)]))}),t3={$:1},gr=t3,of=function(e){return{$:7,a:e}},le=of,ze=v(function(e,r){return L(vr,xr,ca,a(P,le(gr),a(P,xe(gr),e)),nr(u([r])))}),lf=function(e){return{$:2,a:e}},be=lf(1),Xn={go:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gA:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gH:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hp:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hr:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hw:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hR:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ik:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",$9:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ma={c2:260,bE:54},mn=function(e){return a(Ce,qv,h(_t,"bg-"+Fa(e),"background-color",e))},i3=we(28),kn=function(e){return a(Ce,i3,h(_t,"bc-"+Fa(e),"border-color",e))},ci=1,Dr=v(function(e,r){return L(vr,ci,ca,a(P,wr(d.gc+(" "+d.bt)),a(P,xe(gr),a(P,le(gr),e))),nr(r))}),o3=h(Nr,83,83,83),cf=re(function(e,r,n,t){return L($n,e/255,r/255,n/255,t)}),Oi=L(cf,56,56,56,.25),Je=Qv,wt=Xe(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),yt=we(2),Zn=function(e){var r=e;return a(Ce,yt,F(wt,"p-"+k(e),r,r,r,r))},uf=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),$f=we(3),vf=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Dn=function(e){return a(Ce,$f,h(uf,a(vf,e,e),e,e))},l3=L(cf,0,0,0,0),c3=function(e){return{$:4,a:e}},ml=0,Vn=v(function(e,r){return L(vr,ml,ca,a(P,wr(d.bt+(" "+d.ax)),a(P,le(gr),a(P,xe(gr),e))),nr(r))}),u3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gM(a(Pv,{gy:{fO:J,fW:J,hL:J},gL:1,eS:0},n.hZ));case 2:var t=e.a;return Ci(Tn(t));default:return Ci(Tn(""))}},$3=v(function(e,r){return u3(e(r))}),v3=Ud,f3=v(function(e,r){return dt(h(v3,$3,e,r))}),An=function(e){return a(Ce,Jv,h(_t,"fc-"+Fa(e),"color",e))},tc=h(Nr,195,195,195),Rn=v(function(e,r){return{$:3,a:e,b:r}}),ff=we(13),m3=a(Rn,ff,d.ib),s3=we(20),mf=a(Rn,s3,d.hJ),ua=function(e){return a(Ce,Xv,Ov(e))},ic=a(Rn,ff,d.fV),sl=v(function(e,r){if(r.$===-2)return Kr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return F(fe,n,t,a(e,t,i),a(sl,e,o),a(sl,e,l))}),sf=v(function(e,r){if(he(e,r)){var n=e;return a(Ce,yt,F(wt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,yt,F(wt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Fn=function(e){return Kv(e)},d3=function(e){return h(Nl,M(function(r,n,t){return a(P,n,t)}),A,e)},p3=v(function(e,r){return{$:3,a:e,b:r}}),g3=v(function(e,r){return{$:2,a:e,b:r}}),h3=v(function(e,r){return{$:0,a:e,b:r}}),b3=v(function(e,r){return{$:1,a:e,b:r}}),Ua=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),df=L(Ua,0/255,0/255,0/255,1),qi=function(e){return{$:6,a:e}},_3=qi(0),Ji=function(e){return{$:2,a:e}},w3={$:6},pf=Ji(w3),gf=M(function(e,r,n){if(r.$===1)return r.a,L(vr,ci,Cn("label"),e,nr(u([n])));var t=r.a,i=r.b,o=r.c,l=L(vr,xr,ca,i,nr(u([o])));switch(t){case 2:return L(vr,ci,Cn("label"),a(P,wr(d.ci),e),nr(u([l,n])));case 3:return L(vr,ci,Cn("label"),a(P,wr(d.ci),e),nr(u([n,l])));case 0:return L(vr,ml,Cn("label"),a(P,wr(d.ci),e),nr(u([n,l])));default:return L(vr,ml,Cn("label"),a(P,wr(d.ci),e),nr(u([l,n])))}}),dl=et,gn=Gi(1),hf="Enter",y3=function(e){return{$:5,a:e}},bf=function(e){if(e.$===1){var r=e.a;return Ji(y3(r))}else return ta},_f=function(e){return e.$===1},x3=function(e){return{$:0,a:e}},oc=T$,S3=v(function(e,r){return a(oc,e,x3(r))}),wf=function(e){return a(S3,"click",ur(e))},C3=id,z3=function(e){return{$:2,a:e}},L3=v(function(e,r){return a(oc,e,z3(r))}),yf=function(e){var r=function(t){var i=e(t);if(i.$===1)return C3("No key matched");var o=i.a;return ur(o)},n=a(K,r,a(Z,"key",Aa));return Ie(a(L3,"keydown",a(_i,function(t){return z(t,!0)},n)))},P3=we(21),Qn=a(Rn,P3,d.gg),xf=" ",Sf=function(e){return a(Ur,"tabIndex",k(e))},M3=a(At,Ie,Sf),T3=v(function(e,r){var n=r.em,t=r.gN,i=r.f6,o=r.bI,l=Y(u([_f(n)?ta:Dn(6),Ie(wf(o(!i))),pf,yf(function(c){return he(c,hf)||he(c,xf)?X(o(!i)):J}),M3(0),Qn,_3,le(be)]),e);return h(gf,a(P,Ie(a(dl,"role","checkbox")),a(P,Ie(a(dl,"aria-checked",i?"true":"false")),a(P,bf(n),l))),n,L(vr,xr,ca,u([gn,xe(be),le(gr)]),nr(u([t(i)]))))}),k3=M(function(e,r,n){return Y(a(st,e-Yn(n),Ni(r)),n)}),xt=zs,Cf=function(e){var r=function(n){return n<10?k(n):Ni(hv(87+n))};return e<16?r(e):Y(Cf(e/16|0),r(a(xt,16,e)))},D3=a(Qe,Cf,a(k3,2,"0")),lc=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gB:n,hx:r}},A3=function(e){var r=lc(e),n=r.hx,t=r.gB,i=r.fS;return a(ce,"",a(P,"#",a(ee,a(Qe,Ve,D3),u([n*255,t*255,i*255]))))},cc=we(12),zf=a(Rn,cc,d.h3),pl=qi(1),br=Ls,ln=function(e){return e*br/180},F3=function(e){return{$:1,a:e}},uc=v(function(e,r){return{$:10,a:e,b:r}}),I3=we(26),B3=function(e){return a(uc,I3,F3(-e))},ya=M(function(e,r,n){return L($n,e,r,n,1)}),E3=$n,V3=v(function(e,r){return{$:4,a:e,b:r}}),R3=we(24),j3=function(e){return a(uc,R3,a(V3,D(0,0,1),e))},U3=we(17),Kn=function(e){return a(Ce,U3,h(fr,"br-"+k(e),"border-radius",k(e)+"px"))},N3=function(e){return La(u([e.ej?"box-inset":"box-",Re(e.eV.a)+"px",Re(e.eV.b)+"px",Re(e.a2)+"px",Re(e.bi)+"px",Fa(e.b6)]))},W3=we(19),H3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,W3,h(fr,N3(r),"box-shadow",ll(r)))},Eu=v(function(e,r){return{$:12,a:e,b:r}}),Vu=we(0),G3=function(e){return e?a(Ce,Vu,a(Eu,"transparent",1)):a(Ce,Vu,a(Eu,"visible",0))},zo=h(ya,1,1,1),$c=Xe(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Yi=function(e){return a(Ce,Hi,F($c,"b-"+k(e),e,e,e,e))},O3=v(function(e,r){return a(Ce,Hi,F($c,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Ft=function(e){var r=e.b2,n=e.cG,t=e.g5,i=e.hA;return he(n,r)&&he(t,i)?he(n,i)?Yi(n):a(O3,t,n):a(Ce,Hi,F($c,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},q3=function(e){return a(ze,u([wr("focusable"),le(De(14)),xe(De(14)),An(zo),gn,ua(9),zf,Kn(3),kn(e?h(ya,59/255,153/255,252/255):h(ya,211/255,211/255,211/255)),H3({a2:1,b6:e?L(E3,238/255,238/255,238/255,0):h(ya,238/255,238/255,238/255),eV:z(0,0),bi:1}),mn(e?h(ya,59/255,153/255,252/255):zo),Yi(e?0:1),il(a(ze,u([kn(zo),xe(De(6)),le(De(9)),j3(ln(-45)),pl,gn,B3(1),G3(!e),Ft({b2:2,g5:2,hA:0,cG:0})]),Je))]),Je)},J3=Fr("htmlFor"),Y3=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),Mi=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return e(n)}}),Lf=re(function(e,r,n,t){return{gS:r,g9:e,hg:n,h_:t}}),X3=dp,Z3=rd,Q3=v(function(e,r){if(r.$)return ir(e);var n=r.a;return Ge(n)}),K3=sp,eb=function(e){return a(K3,{f2:!1,hc:!1},e)},vc=function(e){if(e.b){var r=e.a;return e.b,X(r)}else return J},rb=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return Ge(e(n))}}),nb=function(e){return{$:2,a:e}},ab=function(e){return{$:0,a:e}},tb=function(e){return{$:1,a:e}},Lo=v(function(e,r){return Zr(r)-Zr(e)}),Po=M(function(e,r,n){var t=Zr(n);return _e(Zr(e),t)<1&&_e(t,Zr(r))<1}),ib=v(function(e,r){var n=function(i){return _e(i,e)<0?Ge(i):ir(tb(r))},t=h(Po,"0","9",r)?Ge(a(Lo,"0",r)):h(Po,"a","z",r)?Ge(10+a(Lo,"a",r)):h(Po,"A","Z",r)?Ge(10+a(Lo,"A",r)):ir(ab(r));return a(Mi,n,t)}),Pf=v(function(e,r){var n=Ra(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(Mi,function(l){return a(Mi,function(c){return Ge(l+c*e)},a(Pf,e,o))},a(ib,e,i))}),ob=v(function(e,r){return 2<=e&&e<=36?a(Pf,e,nl(r)):ir(nb(e))}),lb=ob(16),cb=M(function(e,r,n){return L(Ua,e,r,n,1)}),ub=re(function(e,r,n,t){return L(Ua,e,r,n,t)}),It=Cs,$b=v(function(e,r){var n=a(It,10,e);return Ve(r*n)/n}),vb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=gv(n);if(t.b&&!t.b.b){var i=t.a;return Z3(u([i,i]))}else return n};return a(Qe,li,a(Qe,function(n){return a(We,function(t){return h(X3,1,t,n)},eb(e))},a(Qe,Y3(vc),a(Qe,We(function(n){return n.h_}),a(Qe,We(Mn(Rr)),a(Qe,Q3("Parsing hex regex failed"),Mi(function(n){var t=a(ee,a(Qe,r,a(Qe,lb,rb(Qa))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,$=c.a.a,f=c.b,m=f.a.a;return Ge(L(ub,i/255,l/255,$/255,a($b,2,m/255)))}else break e;else{var i=t.a.a,p=t.b,l=p.a.a,b=p.b,$=b.a.a;return Ge(h(cb,i/255,l/255,$/255))}else break e;return ir("Parsing ints from hex failed")})))))))}(),fb=Fr("id"),mb=en("input"),sb=en("label"),Mf=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),db=Mf(0),pb=Fr("name"),gb=function(e){return z(e,!0)},hb=function(e){return{$:1,a:e}},bb=v(function(e,r){return a(oc,e,hb(r))}),_b=v(function(e,r){return h(rr,Z,r,e)}),wb=a(_b,u(["target","value"]),Aa),Tf=function(e){return a(bb,"input",a(_i,gb,a(_i,e,wb)))},yb=a(Rn,cc,d.h8),kf=a(Rn,cc,d.ic),fc=function(e){return a(Lv,5,e)},mc=function(e){return a(Ce,Yv,a(Gv,h(Ue,Zv,"ff-",e),e))},xb=h(Nr,195,195,195),Df=h(Nr,69,69,69),Sb=Mf(2),Cb={$:2},sc=Cb,zb=we(32),Lb=we(31),Ru=function(e){return h(rr,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},Pb=v(function(e,r){return a(Fe,r,h(rr,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return X(z(i,l))}else return J;else{var i=t.a;return X(i)}}),J,e))}),ju=function(e){return h(rr,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},Mb=we(33),Tb=Fr("max"),kb=Fr("min"),Db=v(function(e,r){return a(Ce,$f,h(uf,a(vf,e,r),e,r))}),Ab=function(e){return a(Fr,"step",e)},Af=Fr("type"),Ff=Fr("value"),Ia=lf,Fb=Od,If=v(function(e,r){switch(r.$){case 0:return ta;case 2:var n=r.a;return Ji(n);case 6:var t=r.a;return qi(t);case 5:var i=r.a;return Gi(i);case 7:var t=r.a;return of(t);case 8:var t=r.a;return Cv(t);case 3:var t=r.a,i=r.b;return a(Rn,t,i);case 4:var o=r.a,l=r.b;return a(Ce,o,l);case 9:var c=r.a,$=r.b;return a(zv,c,a(ef,e,$));case 1:var f=r.a;return Ie(a(Fb,e,f));default:var m=r.a,p=r.b;return a(uc,m,p)}}),Ib=M(function(e,r,n){return a(Vn,u([le(be),xe(a(Fe,be,n)),gn]),u([a(ze,u([le(Ia(Ve(e*1e4)))]),Je),a(ze,a(P,gn,a(ee,If(Tt),r)),Je),a(ze,u([le(Ia(Ve(ye(1-e)*1e4)))]),Je)]))}),Bb=M(function(e,r,n){return a(Dr,u([xe(be),le(a(Fe,be,n)),pl]),u([a(ze,u([xe(Ia(Ve(ye(1-e)*1e4)))]),Je),a(ze,a(P,pl,a(ee,If(Tt),r)),Je),a(ze,u([xe(Ia(Ve(e*1e4)))]),Je)]))}),Bf=v(function(e,r){var n=ju(e),t=Ru(e),i=function(){var C=z(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var y=C.a.a.a,T=C.b.a.a;return _e(T,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cH-r.cr)/(r.cq-r.cr),l=r.ig,c=l,$=Ru(c),f=function(){if($.$===1)return"20px";if($.a.$)return"100%";var C=$.a.a;return k(C)+"px"}(),m=ju(c),p=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(p+("-"+f)),s=u([a(ue,"width",p),a(ue,"height",f)]),w=a(Pb,e,z(5,5)),_=w.a,S=w.b;return h(gf,u([_f(r.em)?ta:a(Db,_,S),pf,le(function(){if(n.$===1)return be;if(n.a.$){var C=n.a;return C}else return gr}()),xe(function(){if(t.$===1)return gr;if(t.a.$){var C=t.a;return C}else return gr}())]),r.em,a(Vn,u([le(a(Fe,be,n)),xe(a(Fe,De(20),t))]),u([L(vr,xr,Cn("input"),u([bf(r.em),a(Ce,zb,a(lt,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,Mb,a(lt,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,Lb,a(lt,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ie(Pr(b+" ui-slide-bar focusable-parent")),Ie(Tf(function(C){var y=pv(C);if(y.$===1)return r.bI(0);var T=y.a;return r.bI(T)})),Ie(Af("range")),Ie(Ab(function(){var C=r.cD;if(C.$===1)return"any";var y=C.a;return ve(y)}())),Ie(kb(ve(r.cr))),Ie(Tb(ve(r.cq))),Ie(Ff(ve(r.cH))),i?Ie(a(dl,"orient","vertical")):ta,le(i?a(Fe,De(20),t):a(Fe,be,n)),xe(i?a(Fe,be,n):a(Fe,De(20),t))]),nr(A)),a(ze,a(P,le(a(Fe,be,n)),a(P,xe(a(Fe,De(20),t)),Y(e,u([fc(i?h(Bb,o,a(P,wr("focusable-thumb"),c),n):h(Ib,o,a(P,wr("focusable-thumb"),c),t))])))),Je)])))}),Eb=h(ya,.5,.5,.5),Ef=Rr,Uu=function(e){var r=e.c1,n=e.cH,t=e.cr,i=e.cq,o=e.cD,l=e.bI;return a(ze,u([le(be)]),a(Bf,u([Dn(2),fc(a(ze,u([le(be),xe(De(16)),gn,mn(Df),Kn(4)]),Je))]),{em:a(Sb,A,a(Vn,u([le(be)]),u([a(ze,u([yb]),Fn(r)),a(ze,u([le(be),kf,mc(u([sc]))]),Fn(ve(n)))]))),cq:i,cr:t,bI:l,cD:X(o),ig:Ef(u([le(De(12)),xe(De(12)),Kn(4),Yi(0),kn(Eb),mn(xb)])),cH:n}))},Vb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Rb=v(function(e,r){switch(r.$){case 3:var l=r.a;return a(T3,A,{f6:l,gN:q3,em:a(db,A,Fn(e)),bI:p3(e)});case 0:var n=r.a,i=n.a,o=n.b,l=r.b;return Uu({c1:e,cq:o,cr:i,bI:h3(e),cD:.001*(o-i),cH:l});case 1:var t=r.a,i=t.a,o=t.b,l=r.b;return Uu({c1:e,cq:o,cr:i,bI:a(Qe,Ve,b3(e)),cD:1,cH:l});default:var l=r.a;return a(ze,u([le(be)]),zn(a($r,A,u([a($r,u([a(Be,"margin-bottom","6px")]),u([a(sb,u([J3(e)]),u([on(e)]))])),a(mb,u([Af("color"),a(Be,"width","100%"),a(Be,"height","26px"),a(Be,"padding","0px"),fb(e),pb(e),Tf(function(c){return a(g3,e,a(Vb,df,vb(c)))}),Ff(A3(l))]),A)]))))}}),gl=h(Nr,255,255,255),jb=function(e){return a(Dr,u([le(be),Dn(8),a(sf,0,14),Ft({b2:1,g5:0,hA:0,cG:0}),kn(Oi)]),u([a(ze,u([ua(16),ic,An(gl)]),Fn(e.hd)),a(Dr,u([le(be),Dn(6)]),d3(a(sl,Rb,e.aN)))]))},Ub=function(e){return a(Dr,u([le(be),xe(be),An(tc),ua(12),m3,mf]),a(ee,jb,e))},Nb=f3(Ub),Wb=function(e){return a(Dr,u([le(be),xe(be)]),u([a(Vn,u([Dn(14),le(be)]),A),a(ac,c3,Nb(la(e).gb))]))},Hb=function(e){return{$:6,a:e}},Gb=re(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Ob=function(e){var r=e.cG,n=e.hA,t=e.b2,i=e.g5;if(he(r,n)&&he(r,t)&&he(r,i)){var o=r;return a(Ce,yt,F(wt,"p-"+k(r),o,o,o,o))}else return a(Ce,yt,F(wt,L(Gb,r,n,t,i),r,n,t,i))},qb=function(e){return{$:0,a:e}},Jb=function(e){return{$:1,a:e}},Yb=Jb,Xb=function(e){var r=e.b.X;return aa(r)},Ti=h(Nr,255,60,0),Zb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return aa(r)+1+aa(n)},Qb=function(e){var r=z(Xb(e),Zb(e)-1),n=r.a,t=r.b;return a(ze,u([le(be),gn]),a(Bf,u([fc(a(Vn,u([le(be),xe(De(4)),gn,mn(Df),Kn(2)]),u([a(ze,u([le(Ia(n)),xe(be),mn(Ti),Kn(2)]),Je),a(ze,u([le(Ia(t-n))]),Je)])))]),{em:Yb(""),cq:t,cr:0,bI:a(Qe,Ve,qb),cD:X(1),ig:Ef(u([le(De(12)),xe(De(12)),Kn(6),mn(Ti)])),cH:n}))},Kb=qi(2),ui=h(Nr,220,220,220),e1=function(e){var r=e.a,n=function(){return r.$?u([An(ui)]):u([An(Ti)])}();return a(ze,Y(n,u([ua(14),Kb,kf,mc(u([sc]))])),Fn(a(yv,3,la(e).d1)))},r1=function(e){e.a;var r=e.b.X;return a(We,function(n){return Ve(60/(la(e).d1-n))},a(We,a(Qe,ov,function(n){return n.d1}),vc(a(fv,59,r))))},n1=function(e){var r=r1(e);if(r.$===1)return Je;var n=r.a;return a(ze,u([ua(14),An(tc),mc(u([sc]))]),Fn(k(n)+" FPS"))},Nu={$:1},a1={$:3},t1={$:2},i1={$:8},o1=C$,l1=v(function(e,r){return a(Il,e,o1(r))}),c1=l1("disabled"),u1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},$1=function(e){return a(Dt,u1,e)?ta:wr("focusable")},ki=a(At,Ie,wf),Vf=v(function(e,r){var n=r.eW,t=r.em;return L(vr,xr,ca,a(P,le(gr),a(P,xe(gr),a(P,wr(d.ca+(" "+(d.ax+(" "+(d.hK+(" "+d.eU)))))),a(P,Qn,a(P,$1(e),a(P,Ji(i1),a(P,Ie(Sf(0)),function(){if(n.$===1)return a(P,Ie(c1(!0)),e);var i=n.a;return a(P,ki(i),a(P,yf(function(o){return he(o,hf)||he(o,xf)?X(i):J}),e))}()))))))),nr(u([t])))}),Wu=v(function(e,r){return a(Vf,A,{em:a(ze,u([le(De(36)),Zn(3),An(r),zf,ua(12),ic,kn(r),Yi(1),Kn(4)]),Fn("REC")),eW:X(e)})}),Hu=M(function(e,r,n){return a(Vf,A,{em:zn(h(wa,20,n,e)),eW:X(r)})}),v1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Vn,A,u([a(ze,u([le(De(40))]),function(){switch(r.$){case 0:return a(Wu,Nu,Ti);case 1:return a(Wu,t1,ui);default:return Je}}()),a(ze,u([le(De(28))]),function(){switch(r.$){case 0:return Je;case 1:return Sn(n)?Je:h(Hu,Xn.hr,a1,ui);default:return h(Hu,Xn.hp,Nu,ui)}}())]))},f1=function(e){return a(Dr,u([le(be)]),u([Qb(e),a(Vn,u([le(be),Dn(14),a(sf,0,6),gn]),u([v1(e),n1(e),e1(e)]))]))},m1=function(e){return a(Dr,u([le(be),Dn(14),Ob({b2:20,g5:0,hA:0,cG:0}),Ft({b2:1,g5:0,hA:0,cG:0}),kn(Oi)]),u([a(ze,u([ua(16),ic,An(tc)]),Fn("Time Travel")),a(ac,Hb,f1(e))]))},s1=v(function(e,r){return a(Dr,u([la(r).dB.iq>600?mn(o3):mn(l3),Ft({b2:0,g5:0,hA:1,cG:0}),kn(Oi),le(De(Ma.c2)),xe(be)]),u([function(){return e?Je:a(Dr,u([le(be),xe(be),Zn(14),Dn(14)]),u([m1(r),Wb(r)]))}()]))}),d1=function(e){return{$:3,a:e}},Gu=Gi(2),p1=h(Nr,232,78,50),g1=h(Nr,48,48,48),h1=function(e){return a(Fr,"href",Gd(e))},b1=Ur("rel"),_1=Fr("target"),Ou=v(function(e,r){var n=r.fn,t=r.em;return L(vr,xr,Cn("a"),a(P,Ie(h1(n)),a(P,Ie(b1("noopener noreferrer")),a(P,Ie(_1("_blank")),a(P,le(gr),a(P,xe(gr),a(P,wr(d.ca+(" "+(d.ax+(" "+d.et)))),e)))))),nr(u([t])))}),rt=Fr("title"),w1=h(Nr,31,161,242),y1=function(e){var r=M(function(o,l,c){var $=he(l,e)?gl:g1;return a(ze,u([cn(rt(o)),ki(d1(l)),Qn,Zn(7)]),zn(h(wa,40,$,c)))}),n=a(Dr,u([nf]),u([h(r,"Configurations",0,Xn.hR)])),t=a(Dr,A,u([a(Ou,u([cn(rt("Twitter")),Gu,Qn,Zn(7)]),{em:zn(h(wa,40,w1,Xn.ik)),fn:"https://twitter.com/AzizErkalSelman"}),a(Ou,u([cn(rt("Source Code")),Gu,Qn,Zn(7)]),{em:zn(h(wa,40,p1,Xn.gA)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(ze,u([le(De(Ma.bE)),Zn(4),ki(rf),Ft({b2:1,g5:0,hA:0,cG:0}),kn(Oi),Qn,cn(rt("Activate Distraction Free Mode"))]),zn(h(wa,46,gl,Xn.fx)));return a(Dr,u([le(De(Ma.bE)),xe(be),mf,mn(af)]),u([i,n,t]))},x1=function(e){var r=a(ze,u([le(De(Ma.bE)),nf,Zn(4),ki(rf),Qn,cn(rt("Deactivate Distraction Free Mode (A)"))]),zn(h(wa,46,af,Xn.fx)));return e.bw?r:a(Vn,u([le(De(Ma.bE+Ma.c2)),xe(be)]),u([y1(e.bp),a(s1,e.bp,e.R)]))},S1=M(function(e,r,n){var t=kg(n.R),i=la(n.R);return h(Gh,{hm:u([Ag({fO:J,fW:J,hL:J})])},u([le(De(ft(i.dB.iq))),xe(De(ft(i.dB.gI))),cn(a(Be,"-webkit-font-smoothing","antialiased")),cn(a(Be,"pointer-events","none")),cn(a(Be,"touch-action","none")),cn(a(Be,"user-select","none")),il(a(ac,Mg,a(r,i,t))),il(x1(n))]),zn(a(Oh,Ci(Tg),a(e,i,t))))}),C1=Sr(function(e,r,n,t,i,o){var l=v(function($,f){return z(L(xg,r,o,$,f),su)}),c=function($){var f=a(cv,n,$.gZ);return z({bp:0,bw:!0,R:a(Sg,f,t),dM:0},su)};return H0({gT:c,h$:Pg,im:l,io:a(S1,e,i)})}),z1=re(function(e,r,n,t){return tr(C1,e,r,n,t,v(function(i,o){return Je}),M(function(i,o,l){return l}))}),On=M(function(e,r,n){return{gf:n,ht:e,hE:r}}),L1={hq:u([h(On,D(-3,3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,1,0)])),h(On,D(0,3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,1,0),D(0,2,0)])),h(On,D(3,3,0),D(0,0,0),u([D(0,0,0),D(1,1,0),D(0,1,0),D(0,2,0)])),h(On,D(-3,-1,0),D(0,0,0),u([D(0,0,0),D(0,1,0),D(1,1,0),D(1,2,0)])),h(On,D(3,0,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,0,1),D(0,1,1)])),h(On,D(-2,-3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,0,1),D(1,1,0)])),h(On,D(2,-3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,0,1),D(0,1,0)]))])},P1=function(e){return{dP:L1}},M1=v(function(e,r){return z(e,sv(r))}),T1=M(function(e,r,n){return{aN:n,g1:r,hd:e}}),k1=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(za,t,i,n)}),Kl,e)},D1=M(function(e,r,n){return h(T1,e,r,k1(n))}),Mo=D1,nn=M(function(e,r,n){var t=r.a,i=r.b;return z(e,a(dv,z(t,i),n))}),A1=u([h(Mo,"Camera",!0,u([h(nn,"camera distance",z(3,60),20),h(nn,"camera azimuth",z(0,2*br),.6),h(nn,"camera elevation",z(-br/2,br/2),.4)])),h(Mo,"Parameters",!0,u([h(nn,"cube scale",z(.1,1),.95),h(nn,"edge width",z(.001,.5),.1)])),h(Mo,"Colors and light",!0,u([h(nn,"sunlight azimuth",z(0,2*br),5.5),h(nn,"sunlight elevation",z(-br/2,br/2),-1),h(nn,"saturation",z(0,1),.6),h(nn,"lightning",z(0,1),.8),a(M1,"edge color",df)]))]),F1=v(function(e,r){return r}),I1=en("h2"),B1=v(function(e,r){return a($r,u([a(Be,"min-width","320px"),a(Be,"max-width","500px"),a(Be,"margin","0 auto")]),u([a(I1,u([a(Be,"margin","10px"),a(Be,"text-align","center")]),u([on("The Soma Cube")])),a(Nv,u([a(Be,"margin","10px 20px 10px 20px")]),u([a($r,u([a(Be,"color","red")]),u([on("The following control are not implemented yet")])),a($r,A,u([on("Space Key to chose the next piece")])),a($r,A,u([on("Arrow keys to rotate the cube")])),a($r,A,u([on("WASDQE to move the cube")])),a($r,A,u([on("Shift + Arrow Keys to rotate the camera")]))]))]))}),E1=v(function(e,r){return a(We,function(n){if(n.$)return 0;var t=n.b;return t},a(Wi,e,r.aN))}),V1=v(function(e,r){return a(Fe,0,vc(a(Mn,E1(e),r)))}),R1=v(function(e,r){return a(V1,e,r.gb)}),jr=R1,hn=function(e){return e},nt=function(e){return hn(br*(e/180))},j1=function(e){return e},Pn=function(e){return e},hl=function(e){var r=e;return-r},U1=v(function(e,r){var n=e,t=r;return{is:n.iw*t.dU-n.dU*t.iw,iw:n.dU*t.is-n.is*t.dU,dU:n.is*t.iw-n.iw*t.is}}),Rf=function(e){var r=e;return r.dS},jf=function(e){var r=e;return r.dT},N1=function(e){return a(U1,Rf(e),jf(e))},$a=function(e){var r=e;return r.dk},ia=Ps,Ba=Ms,$i=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ia(l),$=Ba(l),f=t.gn,m=f,p=m.is*$,b=c*p,s=p*p,w=m.iw*$,_=c*w,S=p*w,C=w*w,y=1-2*(s+C),T=m.dU*$,H=c*T,Q=2*(S-H),ae=2*(S+H),te=p*T,ie=2*(te+_),ne=2*(te-_),q=w*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{is:Se*o.is+Q*o.iw+ie*o.dU,iw:ae*o.is+me*o.iw+de*o.dU,dU:ne*o.is+pe*o.iw+y*o.dU}}),Bt=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ia(l),$=Ba(l),f=t.dk,m=f,p=o.is-m.is,b=o.iw-m.iw,s=o.dU-m.dU,w=t.gn,_=w,S=_.is*$,C=c*S,y=S*S,T=_.iw*$,H=c*T,Q=S*T,ae=T*T,te=1-2*(y+ae),ie=_.dU*$,ne=c*ie,q=2*(Q-ne),de=2*(Q+ne),pe=S*ie,Me=2*(pe+H),Se=2*(pe-H),me=T*ie,Te=2*(me-C),B=2*(me+C),E=ie*ie,V=1-2*(ae+E),R=1-2*(y+E);return{is:m.is+V*p+q*b+Me*s,iw:m.iw+de*p+R*b+Te*s,dU:m.dU+Se*p+B*b+te*s}}),bn=function(e){return e},jn=function(e){var r=e;return r.dS},Un=function(e){var r=e;return r.dT},Nn=function(e){var r=e;return r.dV},Uf=M(function(e,r,n){return bn({dk:h(Bt,e,r,$a(n)),dS:h($i,e,r,jn(n)),dT:h($i,e,r,Un(n)),dV:h($i,e,r,Nn(n))})}),qu=M(function(e,r,n){return h(Uf,e(n),r,n)}),dc=function(e){var r=e;return r.gn},Et=v(function(e,r){var n=e,t=r;return{is:t.is+n.is,iw:t.iw+n.iw,dU:t.dU+n.dU}}),Nf=v(function(e,r){return bn({dk:a(Et,e,$a(r)),dS:jn(r),dT:Un(r),dV:Nn(r)})}),W1=v(function(e,r){var n=e,t=r;return{is:n*t.is,iw:n*t.iw,dU:n*t.dU}}),H1=M(function(e,r,n){return a(Nf,a(W1,r,e),n)}),G1=M(function(e,r,n){return h(H1,dc(e(n)),r,n)}),wn=v(function(e,r){return{gn:r,dk:e}}),O1=function(e){var r=e;return a(wn,r.dk,r.dS)},q1=function(e){var r=e;return a(wn,r.dk,r.dT)},J1=function(e){var r=e;return a(wn,r.dk,r.dV)},Y1=function(e){var r=bn({dk:e.ba,dS:jf(e.ed),dT:N1(e.ed),dV:Rf(e.ed)}),n=h(G1,J1,e.cX,h(qu,O1,hl(e.cc),h(qu,q1,e.b$,r)));return n},X1=function(e){return{$:0,a:e}},Ye=function(e){var r=e;return ye(r)},vi=function(e){var r=e;return .5*r},Z1=Ts,Q1=function(e){var r=e;return Z1(r)},K1=function(e){var r=vi(Ye(e.fq)),n=Q1(r);return{dv:X1(n),dL:e.dL}},Mr={is:0,iw:0,dU:0},Wf=Rr,sn=function(e){return e},Hf=sn({is:1,iw:0,dU:0}),Xi=Hf,pc=sn({is:0,iw:0,dU:1}),Zi=pc,e_=Wf({dk:Mr,dS:Zi,dT:Xi}),r_=function(e){var r=e.ba,n=e.b$,t=e.cc,i=e.cX;return K1({fq:nt(40),dL:Y1({b$:hn(n),cX:Pn(i),cc:hn(t),ba:j1(r),ed:e_})})},n_=function(e){return r_({b$:a(jr,"camera azimuth",e),cX:a(jr,"camera distance",e),cc:a(jr,"camera elevation",e),ba:{is:.5,iw:1,dU:0}})},Vt=v(function(e,r){return{$:0,a:e,b:r}}),To=v(function(e,r){var n=e,t=r;return _e(t,n)>-1}),ko=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),dn=v(function(e,r){var n=e,t=r;return t-n}),a_=sn({is:-1,iw:0,dU:0}),t_=sn({is:0,iw:-1,dU:0}),Gf=sn({is:0,iw:0,dU:-1}),Of=sn({is:0,iw:1,dU:0}),Ke=M(function(e,r,n){var t=e,i=r,o=n;return{is:t,iw:i,dU:o}}),i_=Sr(function(e,r,n,t,i,o){var l=a(To,n,o)?pc:Gf,c=a(To,r,i)?Of:t_,$=a(To,e,t)?Hf:a_,f=D(Ye(a(dn,e,t)),Ye(a(dn,r,i)),Ye(a(dn,n,o))),m=h(Ke,a(ko,e,t),a(ko,r,i),a(ko,n,o)),p=bn({dk:m,dS:$,dT:c,dV:l});return{fN:p,a4:f}}),ea=function(e){var r=e;return r.is},ra=function(e){var r=e;return r.iw},na=function(e){var r=e;return r.dU},qf=v(function(e,r){return tr(i_,ea(e),ra(e),na(e),ea(r),ra(r),na(r))}),St=M(function(e,r,n){return{is:e,iw:r,dU:n}}),o_=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=D(n/2,t/2,i/2),l=o.a,c=o.b,$=o.c;return a(Vt,e,a(qf,h(St,-l,-c,-$),h(St,l,c,$)))}),Qi=function(e){return{$:5,a:e}},Di=function(e){return Qi(e)},l_=re(function(e,r,n,t){var i=D(e,r,n),o=i.a,l=i.b,c=i.c,$=c<=.5?c*(l+1):c+l-c*l,f=c*2-$,m=function(w){var _=w<0?w+1:w>1?w-1:w;return _*6<1?f+($-f)*_*6:_*2<1?$:_*3<2?f+($-f)*(2/3-_)*6:f},p=m(o-1/3),b=m(o),s=m(o+1/3);return L(Ua,s,b,p,t)}),Jf=M(function(e,r,n){return L(l_,e,r,n,1)}),bl=function(e){return{$:0,a:e}},Yf=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Xf=M(function(e,r,n){return _e(n,e)<0?e:_e(n,r)>0?r:n}),Do=function(e){return h(Xf,0,1,e<=.04045?e/12.92:a(It,(e+.055)/1.055,2.4))},Rt=hp,c_=function(e){var r=lc(e),n=r.hx,t=r.gB,i=r.fS;return h(Rt,Do(n),Do(t),Do(i))},Zf=function(e){return h(Yf,0,bl(c_(e)),bl(0))},gc=v(function(e,r){return{$:2,a:e,b:r}}),hc=v(function(e,r){return{$:4,a:e,b:r}}),bc=v(function(e,r){return{$:3,a:e,b:r}}),_c=v(function(e,r){return{$:1,a:e,b:r}}),u_=M(function(e,r,n){return{is:e,iw:r,dU:n}}),$_=function(e){var r=e;return r},Ki=function(e){var r=e;return $_(r.fN)},eo=function(e){var r=e;return r.a4},v_=v(function(e,r){return{fN:a(Nf,e,Ki(r)),a4:eo(r)}}),f_=v(function(e,r){var n=r;return a(wn,a(Et,e,n.dk),n.gn)}),m_=v(function(e,r){var n=r;return{m:a(f_,e,n.m),g6:n.g6,hv:n.hv}}),wc=function(e){var r=e;return r},s_=function(e){return e},yc=v(function(e,r){var n=wc(r),t=n.a,i=n.b;return s_(z(e(t),e(i)))}),d_=v(function(e,r){return a(yc,Et(e),r)}),ro=function(e){var r=e;return r.f4},no=function(e){var r=e;return r.hv},xc=v(function(e,r){return{f4:r,hv:Ye(e)}}),p_=v(function(e,r){return a(xc,no(r),a(Et,e,ro(r)))}),Sc=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return D(e(t),e(i),e(o))}),g_=v(function(e,r){return a(Sc,Et(e),r)}),ao=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(u_,n,t,i);switch(r.$){case 0:var m=r.a,l=r.b;return a(Vt,m,a(v_,o,l));case 1:var m=r.a,c=r.b;return a(_c,m,a(g_,o,c));case 3:var m=r.a,$=r.b;return a(bc,m,a(p_,o,$));case 2:var m=r.a,f=r.b;return a(gc,m,a(m_,o,f));case 4:var m=r.a,p=r.b;return a(hc,m,a(d_,o,p));default:var b=r.a;return Qi(a(ee,ao(D(n,t,i)),b))}}),xa=function(e){return ao(D(e,0,0))},Sa=function(e){return ao(D(0,0,e))},h_=M(function(e,r,n){return{fN:h(Uf,e,r,Ki(n)),a4:eo(n)}}),b_=v(function(e,r){var n=a(Bt,e,r),t=a($i,e,r);return function(i){var o=i;return a(wn,n(o.dk),t(o.gn))}}),__=M(function(e,r,n){var t=n;return{m:h(b_,e,r,t.m),g6:t.g6,hv:t.hv}}),w_=M(function(e,r,n){return a(yc,a(Bt,e,r),n)}),y_=M(function(e,r,n){return a(xc,no(n),h(Bt,e,r,ro(n)))}),x_=M(function(e,r,n){return a(Sc,a(Bt,e,r),n)}),to=M(function(e,r,n){switch(n.$){case 0:var c=n.a,t=n.b;return a(Vt,c,h(h_,e,r,t));case 1:var c=n.a,i=n.b;return a(_c,c,h(x_,e,r,i));case 3:var c=n.a,o=n.b;return a(bc,c,h(y_,e,r,o));case 2:var c=n.a,l=n.b;return a(gc,c,h(__,e,r,l));case 4:var c=n.a,$=n.b;return a(hc,c,h(w_,e,r,$));default:var f=n.a;return Qi(a(ee,a(to,e,r),f))}}),S_=a(wn,Mr,Xi),Qf=v(function(e,r){return h(to,S_,hn(e),r)}),Cc=Of,C_=a(wn,Mr,Cc),fi=v(function(e,r){return h(to,C_,hn(e),r)}),z_=a(wn,Mr,Zi),Kf=v(function(e,r){return h(to,z_,hn(e),r)}),L_=v(function(e,r){return(r-iv(r/e)*e)/e}),P_=function(e){return 2*br*e},M_=re(function(e,r,n,t){return e+(r-e)*(1+ia(P_(a(L_,n,t))))/2}),T_=function(e){var r=a(jr,"edge width",e),n=h(Jf,L(M_,0,1,7,e.d1),a(jr,"saturation",e),a(jr,"lightning",e)),t=a(o_,Zf(n),D(r,3+r,r)),i=Di(u([a(xa,1.5,a(Sa,1.5,t)),a(fi,ln(90),a(xa,1.5,a(Sa,1.5,t))),a(fi,ln(180),a(xa,1.5,a(Sa,1.5,t))),a(fi,ln(270),a(xa,1.5,a(Sa,1.5,t)))]));return Di(u([i,a(Qf,ln(90),i),a(Kf,ln(90),i)]))},k_=v(function(e,r){var n=r/2;return a(Vt,e,a(qf,h(St,-n,-n,-n),h(St,n,n,n)))}),em=function(e){return ao(D(0,e,0))},ke=v(function(e,r){var n=r;return e*n}),pn=function(e){var r=e;return{is:-r.is,iw:-r.iw,dU:-r.dU}},jt=M(function(e,r,n){var t=e,i=n;return{is:t.is+r*(i.is-t.is),iw:t.iw+r*(i.iw-t.iw),dU:t.dU+r*(i.dU-t.dU)}}),D_=M(function(e,r,n){var t=Ki(n),i=jn(t),o=Un(t),l=Nn(t),c=h(jt,e,r,$a(t)),$=r>=0?bn({dk:c,dS:i,dT:o,dV:l}):bn({dk:c,dS:pn(i),dT:pn(o),dV:pn(l)}),f=eo(n),m=f.a,p=f.b,b=f.c,s=Ye(a(ke,r,m)),w=Ye(a(ke,r,p)),_=Ye(a(ke,r,b));return{fN:$,a4:D(s,w,_)}}),zc=function(e){var r=e;return r.m},Ju=function(e){return dc(zc(e))},rm=function(e){var r=e;return r.dk},A_=function(e){return rm(zc(e))},nm=function(e){var r=e;return r.g6},am=function(e){var r=e;return r.hv},F_=M(function(e,r,n){var t=Ye(a(ke,r,am(n))),i=Ye(a(ke,r,nm(n))),o=r>=0?Ju(n):pn(Ju(n)),l=h(jt,e,r,A_(n));return{m:a(wn,l,o),g6:i,hv:t}}),I_=M(function(e,r,n){return a(yc,a(jt,e,r),n)}),B_=M(function(e,r,n){return a(xc,a(ke,ye(r),no(n)),h(jt,e,r,ro(n)))}),E_=M(function(e,r,n){return a(Sc,a(jt,e,r),n)}),tm=v(function(e,r){switch(r.$){case 0:var l=r.a,n=r.b;return a(Vt,l,h(D_,Mr,e,n));case 1:var l=r.a,t=r.b;return a(_c,l,h(E_,Mr,e,t));case 3:var l=r.a,i=r.b;return a(bc,l,h(B_,Mr,e,i));case 2:var l=r.a,o=r.b;return a(gc,l,h(F_,Mr,e,o));case 4:var l=r.a,c=r.b;return a(hc,l,h(I_,Mr,e,c));default:var $=r.a;return Qi(a(ee,tm(e),$))}}),V_=M(function(e,r,n){var t=n.a,i=n.b,o=n.c;return a(Sa,o,a(em,i,a(xa,t,a(tm,a(jr,"cube scale",e),a(k_,Zf(r),1)))))}),R_=M(function(e,r,n){var t=n.hE,i=t.a,o=t.b,l=t.c,c=n.ht,$=c.a,f=c.b,m=c.c;return a(Sa,m,a(em,f,a(xa,$,a(Kf,l*ln(90),a(fi,o*ln(90),a(Qf,i*ln(90),Di(a(ee,a(V_,e,r),n.gf))))))))}),_l=4294967295>>>32-mt,wl=bs,j_=M(function(e,r,n){e:for(;;){var t=_l&r>>>e,i=a(wl,t,n);if(i.$){var f=i.a;return a(wl,_l&r,f)}else{var o=i.a,l=e-mt,c=r,$=o;e=l,r=c,n=$;continue e}}}),U_=function(e){return e>>>5<<5},im=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||_e(e,n)>-1?J:_e(e,U_(n))>-1?X(a(wl,_l&e,o)):X(h(j_,t,e,i))}),N_=L(Ua,211/255,215/255,207/255,1),om=function(e){var r=e.a;return r},W_=v(function(e,r){return a(Fe,N_,a(im,a(xt,om(r),e),r))}),H_=M(function(e,r,n){e:for(;;){var t=a(ql,yr,e),i=t.a,o=t.b;if(_e(Qo(i),yr)<0)return a(lv,!0,{C:r,n,r:i});var l=o,c=a(P,tv(i),r),$=n+1;e=l,r=c,n=$;continue e}}),io=function(e){return e.b?h(H_,e,A,0):nv},G_=function(e){var r=8,n=function(t){return h(Jf,t/r,a(jr,"saturation",e),a(jr,"lightning",e))};return io(a(ee,n,a(Xr,0,r)))},O_=v(function(e,r){var n=function(t){return a(R_,e,a(W_,t,G_(e)))};return Di(a(Gl,n,r.dP.hq))}),q_=function(e){return e},J_=function(e){return Pn(.01*e)},Yu=function(e){return e},Y_=function(e){return e},X_=function(e){return{$:0,a:e}},Z_=X_,Q_={$:3},K_=Q_,e2=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),r2=e2,n2=function(e){return{$:1,a:e}},a2=n2,t2=function(e){return a(Ur,"height",k(e))},i2=Uv,o2=function(e){return{$:2,a:e}},l2=o2,c2=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Ve(c*1e3)/1e3},l=function(c){return Ve(c*1e4)/100};return La(u(["rgba(",ve(l(r)),"%,",ve(l(n)),"%,",ve(l(t)),"%,",ve(o(i)),")"]))},u2=v(function(e,r){switch(r.$){case 0:return a(o0,e,r);case 1:return a(l0,e,r);case 2:return a(c0,e,r);case 3:return a(u0,e,r);case 4:return a($0,e,r);default:return a(v0,e,r)}}),$2=v(function(e,r){switch(r.$){case 0:return a(Bp,e,r);case 1:return a(Ep,e,r);case 2:return a(Vp,e,r);case 3:return a(Rp,e,r);case 4:return a(jp,e,r);case 5:return a(Up,e,r);case 6:return a(Np,e,r);case 7:return a(Wp,e,r);default:return Hp(e)}}),v2=M(function(e,r,n){return h(i0,e,r,n)}),Xu=function(e){var r=e;return r},Na=Sp,Ao=L(Na,1,1,1,1),Hr=M(function(e,r,n){return a(ee,function(t){return a(t,r,n)},e)}),f2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),m2=v(function(e,r){var n=e,t=r.is,i=r.iw;return h(f2,n*t/i,n,n*(1-t-i)/i)}),s2=function(e){var r=e.a,n=e.b,t=e.c;return h(Rt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},Lc=v(function(e,r){return s2(a(m2,e,r))}),lm=v(function(e,r){return{ek:he(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cB,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cB,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cB,cB:e.cB*r.cB}}),Jr=Tp,d2=function(e){return Jr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Fo=Xe(function(e,r,n,t,i){var o=t.ek?1:-1,l=L(Na,t.cB,t.cB,t.cB,o);return tr(i,e,l,d2(t),t.ek,r,n)}),cm=Sr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,$=e,f=r,m=n,p=a(lm,l,t),b=c,s=o;e=$,r=f,n=m,t=p,i=b,o=s;continue e;case 1:var w=i.b,_=a(P,F(Fo,e,r,n,t,w),o.P);return{P:_,_:o._,hM:o.hM};case 3:var S=i.b,C=a(P,F(Fo,e,r,n,t,S),o._);return{P:o.P,_:C,hM:o.hM};case 2:var y=i.a,T=a(P,F(Fo,e,r,n,t,y),o.hM);return{P:o.P,_:o._,hM:T};default:var H=i.a;return h(Ue,L(cm,e,r,n,t),o,H)}}),p2=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),um=p2,Pc=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),g2=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(Pc,518,r,n,t)},h2=v(function(e,r){return{$:6,a:e,b:r}}),b2=h2,$m=u([g2({ab:1,ac:0,ai:!1}),L(um,!1,!1,!1,!1),a(b2,0,1)]),Ea=519,Mc=8,vm=15,Ta=7681,_2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ee=Ip,w2=v(function(e,r){return{$:0,a:e,b:r}}),y2=w2({d5:1,ei:0,eS:5}),_r=pp,x2=y2(u([{ht:a(_r,-1,-1)},{ht:a(_r,1,-1)},{ht:a(_r,-1,1)},{ht:a(_r,1,1)}])),S2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ht"},uniforms:{}},C2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:$,j:f,k:m}}}}}}}}}}}},Tc=M(function(e,r,n){var t=e.dw,i=e.db,o=e.dR,l=v(function(f,m){var p=f;return m(p)}),c=v(function(f,m){var p=f;return m(p)}),$=function(f){return a(Qe,l(f.bO),a(Qe,c(f.bz),a(Qe,c(f.bX),c(f.bY))))};return a($,n,a($,r,h(C2,t,i,o)))}),kc=function(e){return h(Tc,{db:e.db,dw:e.dw,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},Dc=function(e){return F(Ee,u([kc(e),L(um,!1,!1,!1,!1)]),S2,_2,x2,{})},z2=Dc({bz:Ta,db:0,dw:Mc,bO:Ea,dR:vm,bX:Ta,bY:Ta}),L2=516,Zu=5386,or=7680,P2=function(e){return a(It,2,e+4)},fm=function(e){return Dc({bz:or,db:vm,dw:Mc,bO:L2,dR:P2(e),bX:Zu,bY:Zu})},M2=M(function(e,r,n){return pr(u([h(Hr,e,n,$m),u([fm(r),z2])]))}),T2=v(function(e,r){return pr(a(Gl,M2(e),r))}),k2=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(Pc,513,r,n,t)},D2=k2({ab:1,ac:0,ai:!0}),A2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:$,j:f}}}}}}}}}}},F2=function(e){var r=e.cy,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function($,f){var m=$.a,p=$.b,b=$.c,s=f.a,w=f.b,_=f.c;return A2(m)(p)(b)(s)(w)(_)(r)(n)(t)(i)});return a(c,o,l)},I2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qu=v(function(e,r){var n=e,t=r;return h(I2,32774,n,t)}),B2=1,Ku=771,E2=770,Ac=F2({bZ:0,fI:a(Qu,B2,Ku),b0:0,b6:a(Qu,E2,Ku),cf:0,cy:0}),ma=u([D2,Ac]),V2=function(e){var r=e;return r.eL},R2=function(e){var r=e;return r.eM},mm=function(e){var r=e;return r.eN},j2=function(e){var r=e;return r.eO},U2=function(e){var r=e;return r.eP},sm=function(e){var r=e;return r.eQ},dm=function(e){return D(a(dn,j2(e),V2(e)),a(dn,U2(e),R2(e)),a(dn,sm(e),mm(e)))},e$=function(e){var r=e;return $a(r)},N2=function(e){return e},W2=function(e){return bn({dk:N2({is:e.K,iw:e.L,dU:e.M}),dS:sn({is:e.t,iw:e.u,dU:e.v}),dT:sn({is:e.w,iw:e.x,dU:e.y}),dV:sn({is:e.z,iw:e.A,dU:e.B})})},Io=v(function(e,r){var n=e,t=r,i=n.dV,o=i,l=n.dT,c=l,$=n.dS,f=$;return{is:t.is*f.is+t.iw*f.iw+t.dU*f.dU,iw:t.is*c.is+t.iw*c.iw+t.dU*c.dU,dU:t.is*o.is+t.iw*o.iw+t.dU*o.dU}}),pm=v(function(e,r){var n=e,t=r,i=n.dk,o=i,l=t.is-o.is,c=t.iw-o.iw,$=t.dU-o.dU,f=n.dV,m=f,p=n.dT,b=p,s=n.dS,w=s;return{is:l*w.is+c*w.iw+$*w.dU,iw:l*b.is+c*b.iw+$*b.dU,dU:l*m.is+c*m.iw+$*m.dU}}),gm=v(function(e,r){return{dk:a(pm,e,$a(r)),dS:a(Io,e,jn(r)),dT:a(Io,e,Un(r)),dV:a(Io,e,Nn(r))}}),Ai=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(Tr,n,t)}),qe=v(function(e,r){var n=e,t=r;return a(Pa,n,t)}),H2=v(function(e,r){var n=Ai(r),t=Ai(e);return{eL:a(He,t.eL,n.eL),eM:a(He,t.eM,n.eM),eN:a(He,t.eN,n.eN),eO:a(qe,t.eO,n.eO),eP:a(qe,t.eP,n.eP),eQ:a(qe,t.eQ,n.eQ)}}),Ar=function(e){var r=e;return r},G2=function(e){var r=e;return D(r.is,r.iw,r.dU)},ct=v(function(e,r){var n=e,t=r;return t+n}),O2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=vi(Ye(t)),l=vi(Ye(n)),c=vi(Ye(i)),$=G2(r),f=$.a,m=$.b,p=$.c;return{eL:a(ct,l,f),eM:a(ct,o,m),eN:a(ct,c,p),eO:a(dn,l,f),eP:a(dn,o,m),eQ:a(dn,c,p)}}),r$=re(function(e,r,n,t){var i=n.f4,o=2*n.gG*r,l=2*n.gF*r,c=2*n.gE*r,$=i.dU*r,f=i.iw*r,m=i.is*r,p=Ar(Nn(e)),b=ye(c*p.is)+ye(l*p.iw)+ye(o*p.dU),s=Ar(Un(e)),w=ye(c*s.is)+ye(l*s.iw)+ye(o*s.dU),_=Ar(jn(e)),S=ye(c*_.is)+ye(l*_.iw)+ye(o*_.dU),C=a(O2,D(S,w,b),a(pm,e,h(St,m,f,$)));if(t.$)return X(C);var y=t.a;return X(a(H2,y,C))}),yl=re(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,w=r,_=n,S=o;e=s,r=w,n=_,t=S;continue e;case 1:var l=i.a,c=L(r$,e,r,l,n),s=e,w=r,_=c,S=o;e=s,r=w,n=_,t=S;continue e;case 2:var s=e,w=r,_=n,S=o;e=s,r=w,n=_,t=S;continue e;case 3:var l=i.a,c=L(r$,e,r,l,n),s=e,w=r,_=c,S=o;e=s,r=w,n=_,t=S;continue e;case 4:var $=i.a,s=e,w=r,_=L(yl,e,r,n,$),S=o;e=s,r=w,n=_,t=S;continue e;default:var f=i.a,m=i.b,p=a(gm,W2(f),e),b=r*f.cB,s=e,w=r,_=L(yl,p,b,n,u([m])),S=o;e=s,r=w,n=_,t=S;continue e}}else return n}),Wa=bp,Ha=_p,Ga=wp,hm=function(e){return{$:4,a:e}},q2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),Ut=function(e){return hm(a(q2,e,A))},J2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cB:1},Y2=function(e){var r=e;return r},n$=Dc({bz:Ta,db:0,dw:Mc,bO:Ea,dR:255,bX:Ta,bY:Ta}),Ca=Bs,vn=0,X2=function(e){var r=e,n=a(Tr,ye(r.is),a(Tr,ye(r.iw),ye(r.dU)));if(n){var t=r.dU/n,i=r.iw/n,o=r.is/n,l=Ca(o*o+i*i+t*t);return l*n}else return vn},cr={b0:0,f3:!1,cf:0,dt:0,cy:0,dI:0,is:0,iw:0,dU:0},zr=v(function(e,r){var n=e,t=r;return Jr({eu:n.is,ev:n.cy,ew:t.is,ex:t.cy,ey:n.iw,ez:n.cf,eA:t.iw,eB:t.cf,eC:n.dU,eD:n.b0,eE:t.dU,eF:t.b0,eG:n.dI,eH:n.dt,eI:t.dI,eJ:t.dt})}),at=z({bF:a(zr,cr,cr),cm:a(zr,cr,cr),cn:a(zr,cr,cr),co:a(zr,cr,cr)},L(Na,0,0,0,0)),bm=514,_m=function(e){var r=e.ai,n=e.ac,t=e.ab;return L(Pc,515,r,n,t)},wm=240,Z2=u([_m({ab:1,ac:0,ai:!0}),kc({bz:or,db:wm,dw:0,bO:bm,dR:0,bX:or,bY:or}),Ac]),Q2=v(function(e,r){var n=e,t=r.he,i=r.gw,o=r.fM,l=Ye(t),c=l,$=Ye(i),f=$,m=n.dv;if(m.$){var b=m.a;return el(f)?Jr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Jr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-c),eF:-(f+c)/(f-c),eG:0,eH:0,eI:0,eJ:1})}else{var p=m.a;return el(f)?Jr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):Jr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(f+c)/(f-c),eF:-2*f*c/(f-c),eG:0,eH:0,eI:-1,eJ:0})}}),Qt=v(function(e,r){return(1&e>>r)===1?0:1}),K2=function(e){return u([_m({ab:1,ac:0,ai:!0}),kc({bz:or,db:wm,dw:e,bO:bm,dR:0,bX:or,bY:or}),Ac])},ew=M(function(e,r,n){return pr(a(ee,function(t){var i=t<<4,o=L(Na,a(Qt,t,0),a(Qt,t,1),a(Qt,t,2),a(Qt,t,3));return h(Hr,e,z(r,o),K2(i))},a(Xr,1,a(It,2,n)-1)))}),ka=function(e){var r=e;return r},rw=kp,a$=function(e){var r=e;return pn(Nn(r))},nw={dk:Mr,dS:Xi,dT:Cc,dV:Zi},oo=function(e){var r=e;return r},aw=function(e){var r=oo($a(e)),n=Ar(Nn(e)),t=Ar(Un(e)),i=Ar(jn(e));return Jr({eu:i.is,ev:t.is,ew:n.is,ex:r.is,ey:i.iw,ez:t.iw,eA:n.iw,eB:r.iw,eC:i.dU,eD:t.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},tw=v(function(e,r){var n=r;return aw(a(gm,n,e))}),iw=function(e){return a(tw,nw,e)},ow=function(e){var r=e;return r.dL},lw=function(e){var r=e;return jn(r)},cw=M(function(e,r,n){var t=e,i=r,o=n;return{is:t,iw:i,dU:o}}),uw=function(e){var r=e;return Un(r)},$w=function(e){var r=ow(e.f0),n=bn({dk:e$(r),dS:lw(r),dT:uw(r),dV:pn(a$(r))}),t=Ut(e.a8),i=t,o=L(yl,n,1,J,u([i]));if(o.$===1)return A;var l=o.a,c=iw(r),$=a(ke,.99,a(He,Ye(e.a3),hl(mm(l)))),f=dm(l),m=f.a,p=f.b,b=f.c,s=X2(h(cw,m,p,b)),w=a(ke,1.01,a(ct,s,hl(sm(l)))),_=a(Q2,e.f0,{fM:e.fM,gw:w,he:$}),S=rw(_).eJ,C=S?Ar(pn(a$(r))):ka(e$(r)),y=function(){var me=e.cF;switch(me.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var Te=me.a;return z(3,Te);case 4:var Te=me.a;return z(4,Te);default:return z(5,0)}}(),T=y.a,H=y.b,Q=e.cd,ae=Q,te=a(Lc,ae,e.cJ),ie=te,ne=Jr({eu:0,ev:C.is,ew:Wa(ie),ex:e.ff,ey:0,ez:C.iw,eA:Ha(ie),eB:Y2(s),eC:0,eD:C.dU,eE:Ga(ie),eF:T,eG:0,eH:S,eI:0,eJ:H}),q=tr(cm,ne,c,_,J2,i,{P:A,_:A,hM:A}),de=e.cl;switch(de.$){case 0:var pe=de.a;return pr(u([h(Hr,q.P,z(pe,Ao),ma),h(Hr,q._,at,ma)]));case 1:var pe=de.a;return pr(u([h(Hr,q.P,at,ma),u([n$]),h(Hr,q.hM,pe.bF,$m),u([fm(0)]),h(Hr,q.P,z(pe,Ao),Z2),h(Hr,q._,at,ma)]));default:var Me=de.a,Se=de.b;return pr(u([h(Hr,q.P,z(Se,Ao),ma),u([n$]),a(T2,q.hM,Me),h(ew,q.P,Se,aa(Me)),h(Hr,q._,at,ma)]))}},vw=function(e){return a(Ur,"width",k(e))},fw=v(function(e,r){var n=u([a2(1),l2(0),Z_(!0),L(r2,0,0,0,0)]),t=function(){var T=e.cN;switch(T.$){case 0:return D(n,"0",1);case 1:return D(a(P,K_,n),"1",1);default:var H=T.a;return D(n,"0",H)}}(),i=t.a,o=t.b,l=t.c,c=e.a4,$=c.a,f=c.b,m=Xu(f),p=a(Be,"height",k(m)+"px"),b=Xu($),s=b/m,w=a(ja,function(T){return $w({fM:s,f0:e.f0,a3:e.a3,a8:T.a8,cd:T.cd,cl:T.cl,ff:l,cF:T.cF,cJ:T.cJ})},r),_=a(Be,"width",k(b)+"px"),S=e.a1,C=S,y=c2(C);return h(i2,"div",u([a(Be,"padding","0px"),_,p]),u([z(o,h(v2,i,u([vw(Ve(b*l)),t2(Ve(m*l)),_,p,a(Be,"display","block"),a(Be,"background-color",y)]),w))]))}),mw=function(e){return a(fw,{cN:e.cN,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},u([{a8:e.a8,cd:e.cd,cl:e.cl,cF:e.cF,cJ:e.cJ}]))},ym=function(e){return e},t$=ym({is:.31271,iw:.32902}),sw=v(function(e,r){var n=e,t=Ar(r.gn),i=t.is,o=t.iw,l=t.dU,c=a(Lc,r.c$,r.cS),$=c;return{b0:Ga($),f3:n,cf:Ha($),dt:0,cy:Wa($),dI:1,is:-i,iw:-o,dU:-l}}),dw=function(e){return e},pw=function(e){return dw(1.2*a(It,2,e))},Bo=function(e){return e},gw={$:0},hw=gw,xm=function(e){return e},bw=v(function(e,r){var n=e,t=r;return _e(t,n)>0}),i$=function(e){var r=e;return r},_w=function(e){e:for(;;){if(he(e.g_,vn)&&he(e.g$,vn))return cr;if(a(bw,Ye(e.g_),Ye(e.g$))){var r={cS:e.cS,g_:e.g$,g$:e.g_,fm:pn(e.fm)};e=r;continue e}else{var n=ye(i$(e.g$)/br),t=ye(i$(e.g_)/br),i=Ar(e.fm),o=i.is,l=i.iw,c=i.dU,$=a(Lc,xm(1),e.cS),f=$;return{b0:t*Ga(f),f3:!1,cf:t*Ha(f),dt:n/t,cy:t*Wa(f),dI:3,is:o,iw:l,dU:c}}}},o$=function(e){return _w({cS:e.cS,g_:e.c$,g$:vn,fm:e.fm})},ww=function(e){var r=e;return r},Sm=function(e){var r=h(Xf,1667,25e3,ww(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ym({is:n,iw:t})},Cm=function(e){return e},yw=Sm(Cm(12e3)),xw=Sm(Cm(5600)),Sw=function(e){return{$:2,a:e}},Cw=function(e){return Sw(e)},zw=v(function(e,r){return{$:2,a:e,b:r}}),zm=function(e){return{$:0,a:e}},Kt=function(e){var r=e;return r},Lw=function(e){var r=e;return r.f3},Pw=zm(at.a),Mw=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?z(a(P,t,o),l):z(o,a(P,t,l))});return h(rr,n,z(A,A),r)}),Tw=function(e){var r=e;return Jr({eu:r.is,ev:r.cy,ew:0,ex:0,ey:r.iw,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dI,eH:r.dt,eI:0,eJ:0})},kw=Pe(function(e,r,n,t,i,o,l,c){var $=a(Mw,Lw,u([Kt(e),Kt(r),Kt(n),Kt(t)])),f=$.a,m=$.b;if(f.b){var p=Y(f,m);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var b=p.a,s=p.b,w=s.a,_=s.b,S=_.a,C=_.b,y=C.a;return a(zw,a(ee,Tw,f),{bF:a(zr,b,w),cm:a(zr,S,y),cn:a(zr,i,o),co:a(zr,l,c)})}else return Pw}else return zm({bF:a(zr,e,r),cm:a(zr,n,t),cn:a(zr,i,o),co:a(zr,l,c)})}),Dw=M(function(e,r,n){return Lt(kw,e,r,n,cr,cr,cr,cr,cr)}),Aw=function(e){var r=a(sw,Y_(e.hM),{cS:xw,gn:e.h1,c$:Bo(8e4)}),n=o$({cS:yw,c$:Bo(2e4),fm:e.fm}),t=o$({cS:t$,c$:Bo(15e3),fm:pn(e.fm)}),i=h(Dw,r,n,t);return mw({cN:Cw(e.cW),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:pw(15),cl:i,cF:hw,cJ:t$})},Lm=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),Fw=re(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Pm=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Mm=re(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),Iw=re(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),Bw=re(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),Ew=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Fc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(Ew,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(Lm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L(Fw,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(Pm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(Bw,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L(Mm,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(Iw,n,t,i,1);case 8:return e;case 9:return e;default:return e}},Ic={$:0},Vw=Pe(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var $=c.a,f=c.b,m=Ai(l($)),p=a(qe,m.eO,e),b=a(He,m.eL,r),s=a(qe,m.eP,n),w=a(He,m.eM,t),_=a(qe,m.eQ,i),S=a(He,m.eN,o),C=l,y=f;e=p,r=b,n=s,t=w,i=_,o=S,l=C,c=y;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),Rw=M(function(e,r,n){var t=Ai(e(r));return Lt(Vw,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),Eo=v(function(e,r){var n=e,t=r;return _e(t,n)<1}),Tm=function(e){return a(Eo,e.eL,e.eO)&&a(Eo,e.eM,e.eP)&&a(Eo,e.eN,e.eQ)?e:{eL:a(He,e.eO,e.eL),eM:a(He,e.eP,e.eM),eN:a(He,e.eQ,e.eN),eO:a(qe,e.eO,e.eL),eP:a(qe,e.eP,e.eM),eQ:a(qe,e.eQ,e.eN)}},Ct=function(e){var r=e;return r},km=function(e){var r=Ct(e),n=r.a,t=r.b,i=r.c,o=ea(n),l=ra(n),c=na(n),$=ea(t),f=ra(t),m=na(t),p=ea(i),b=ra(i),s=na(i);return Tm({eL:a(He,o,a(He,$,p)),eM:a(He,l,a(He,f,b)),eN:a(He,c,a(He,m,s)),eO:a(qe,o,a(qe,$,p)),eP:a(qe,l,a(qe,f,b)),eQ:a(qe,c,a(qe,m,s))})},Dm=yp,mr=function(e){return Dm(oo(e))},Am=function(e){var r=e;return r},lo=function(e){return Dm(Am(e))},jw=v(function(e,r){var n=e,t=r;return{is:t.iw*n.dU-t.dU*n.iw,iw:t.dU*n.is-t.is*n.dU,dU:t.is*n.iw-t.iw*n.is}}),xl=v(function(e,r){var n=e,t=r;return{is:t.is-n.is,iw:t.iw-n.iw,dU:t.dU-n.dU}}),Uw={is:0,iw:0,dU:0},Nw=v(function(e,r){var n=e,t=r,i=a(Tr,ye(t.is),a(Tr,ye(t.iw),ye(t.dU)));if(i){var o=t.dU/i,l=t.iw/i,c=t.is/i,$=Ca(c*c+l*l+o*o);return{is:n*c/$,iw:n*l/$,dU:n*o/$}}else return Uw}),Ww=Nw(xm(1)),Fm=M(function(e,r,n){var t=a(xl,r,n),i=a(xl,e,r);return Ww(a(jw,t,i))}),Hw=function(e){var r=Ct(e),n=r.a,t=r.b,i=r.c,o=lo(h(Fm,n,t,i));return D({q:o,ht:mr(n)},{q:o,ht:mr(t)},{q:o,ht:mr(i)})},Gw=v(function(e,r){return{$:2,a:e,b:r}}),Im=Gw({d5:3,ei:0,eS:4}),Ow=function(e){if(e.b){var r=e.a,n=e.b,t=Im(a(ee,Hw,e)),i=h(Rw,km,r,n);return L(Lm,i,e,t,0)}else return Ic},Cr=M(function(e,r,n){return D(e,r,n)}),Bm=function(){var e=Pn(1),r=Pn(1),n=Pn(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),l=h(Ke,o,i,t),c=a(ke,.5,e),$=h(Ke,o,i,c),f=a(ke,.5,r),m=h(Ke,o,f,t),p=h(Ke,o,f,c),b=a(ke,.5,n),s=h(Ke,b,i,t),w=h(Ke,b,f,t),_=h(Ke,b,i,c),S=h(Ke,b,f,c);return Fc(Ow(u([h(Cr,l,w,s),h(Cr,l,m,w),h(Cr,$,_,S),h(Cr,$,S,p),h(Cr,s,w,S),h(Cr,s,S,_),h(Cr,l,p,m),h(Cr,l,$,p),h(Cr,l,s,_),h(Cr,l,_,$),h(Cr,m,S,w),h(Cr,m,p,S)])))}(),ei={$:0},qw=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Jw=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),$=e(t),f=lo(h(Fm,$,c,l)),m={q:f,ht:mr($)},p={q:f,ht:mr(c)},b={q:f,ht:mr(l)};return a(P,m,a(P,p,a(P,b,n)))}),Bc=function(e){var r=e;return r.H},Yw=re(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var l=t.a;return X(h(e,i,o,l))}),Ec=function(e){var r=e;return r.au},Vo=v(function(e,r){return a(im,e,Ec(r))}),Xw=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(Yw,M(function(l,c,$){return D(l,c,$)}),a(Vo,t,e),a(Vo,i,e),a(Vo,o,e))};return a(Mn,r,Bc(e))},Zw=v(function(e,r){return!a(Dt,a(At,G0,e),r)}),Em=v(function(e,r){var n=om(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&_e(o,n)<0&&l>=0&&_e(l,n)<0&&c>=0&&_e(c,n)<0};return a(Zw,t,r)?{H:r,au:e}:{H:a(Rv,t,r),au:e}}),Qw=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Nt=Qw({d5:1,ei:3,eS:4}),mi=v(function(e,r){var n=ka(r),t=ka(e);return z(D(t.is,t.iw,t.dU),D(n.is,n.iw,n.dU))}),l$=h(Rt,0,0,0),Ro=Sr(function(e,r,n,t,i,o){var l=o.a,c=o.b,$=o.c,f=a(Wi,a(mi,e,r),i);if(f.$){var p={q:l$,ht:mr(r)},b={q:l$,ht:mr(e)},s=$+1,w=$;return D(a(P,D(n,w,s),a(P,D(n,s,t),l)),a(P,p,a(P,b,c)),$+2)}else{var m=f.a;return D(a(P,D(n,m,t),l),c,$)}}),Kw=Xe(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,$=o.c,f=n.b,m=e($),p=e(c),b=e(l),s=t+2,w=t+1,_=t,S=e,C=r,y=f,T=t+3,H=tr(Ro,m,b,s,_,r,tr(Ro,p,m,w,s,r,tr(Ro,b,p,_,w,r,i)));e=S,r=C,n=y,t=T,i=H;continue e}else{var Q=i,ae=Q.a,te=Q.b;return z(ae,dr(te))}}),ey=Xe(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,$=o.c,f=r.b,m=e($),p=e(c),b=e(l),s=n+2,w=n+1,_=n,S=h(za,a(mi,b,m),s,h(za,a(mi,m,p),w,h(za,a(mi,p,b),_,i))),C=a(P,D(_,w,s),t),y=e,T=f,H=n+3,Q=C,ae=S;e=y,r=T,n=H,t=Q,i=ae;continue e}else return D(t,i,n)}),qn=M(function(e,r,n){var t=Xw(n),i=h(rr,Jw(r),A,t),o=F(ey,r,t,0,A,Kl),l=o.a,c=o.b,$=o.c,f=F(Kw,r,c,t,0,D(l,A,$)),m=f.a,p=f.b,b=Sn(p)?i:Y(i,p);return h(qw,e,a(Em,io(b),m),a(Nt,b,m))}),Sl=function(e){return{H:a(ee,function(r){return D(3*r,3*r+1,3*r+2)},a(Xr,0,aa(e)-1)),au:io(pr(a(ee,function(r){var n=r.a,t=r.b,i=r.c;return u([n,t,i])},e)))}},Vm=function(e){switch(e.$){case 0:return ei;case 1:var t=e.a,r=e.b,n=a(ee,Ct,r);return h(qn,t,Rr,Sl(n));case 2:var t=e.a,r=e.b,n=a(ee,Ct,r);return h(qn,t,Rr,Sl(n));case 3:var t=e.a,i=e.b;return h(qn,t,Rr,i);case 4:var t=e.a,i=e.b;return h(qn,t,function(o){return o.ht},i);case 5:var t=e.a,i=e.b;return h(qn,t,function(o){return o.ht},i);case 6:var t=e.a,i=e.b;return h(qn,t,function(o){return o.ht},i);case 7:var t=e.a,i=e.b;return h(qn,t,function(o){return o.ht},i);case 8:return ei;case 9:return ei;default:return ei}},c$=Vm(Bm),Rm={$:0},G=Rm,er=v(function(e,r){return{$:1,a:e,b:r}}),ry={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},ny=1029,ay=function(e){return{$:5,a:e}},jm=function(e){var r=e;return ay(r)},ty=jm(ny),iy=1028,oy=jm(iy),sr=M(function(e,r,n){return r===1?e?a(P,ty,n):a(P,oy,n):n}),Um={src:`
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
    `,attributes:{position:"ht",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},jo=re(function(e,r,n,t){return a(er,r,Pe(function(i,o,l,c,$,f,m,p){return F(Ee,h(sr,c,t,p),Um,ry,n,{b7:e,c:l,d:o,e:f,f:i,g:$})}))}),Vc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},Nm={src:`
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
    `,attributes:{position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},an=re(function(e,r,n,t){return a(er,r,Pe(function(i,o,l,c,$,f,m,p){return F(Ee,h(sr,c,t,p),Nm,Vc,n,{aO:e,c:l,d:o,e:f,f:i,g:$})}))}),Wm=v(function(e,r){return{$:3,a:e,b:r}}),ly={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Hm={src:`
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
    `,attributes:{position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},cy=re(function(e,r,n,t){return a(Wm,n,Pe(function(i,o,l,c,$,f,m,p){return F(Ee,p,Hm,ly,t,{aO:e,c:l,d:o,cw:r,e:f,f:i,g:$})}))}),Rc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Wt=function(e){var r=e;return r},co=xp,tn=Xe(function(e,r,n,t,i){return a(er,n,Pe(function(o,l,c,$,f,m,p,b){return F(Ee,h(sr,$,i,b),Nm,Rc,t,{a6:a(co,Wt(r),e),c,d:l,e:m,f:o,g:f})}))}),uy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},$y=Xe(function(e,r,n,t,i){return a(Wm,t,Pe(function(o,l,c,$,f,m,p,b){return F(Ee,b,Hm,uy,i,{a6:a(co,Wt(r),e),c,d:l,cw:n,e:m,f:o,g:f})}))}),Gm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dc",sceneProperties:"f",viewMatrix:"g"}},Om={src:`
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
    `,attributes:{normal:"q",position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ri=re(function(e,r,n,t){return a(er,r,Pe(function(i,o,l,c,$,f,m,p){var b=m.a,s=m.b;return F(Ee,h(sr,c,t,p),Om,Gm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,dc:e,c:l,d:o,e:f,f:i,g:$})}))}),qm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"dd",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Jm={src:`
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
    `,attributes:{normal:"q",position:"ht",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vy=Sr(function(e,r,n,t,i,o){return a(er,t,Pe(function(l,c,$,f,m,p,b,s){var w=b.a,_=b.b;return F(Ee,h(sr,f,o,s),Jm,qm,i,{U:_,bF:w.bF,cm:w.cm,cn:w.cn,co:w.co,dd:e,c:$,d:c,bg:r,e:p,f:l,bm:n,g:m})}))}),Ym={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cR",constantBaseColor:"cT",constantMetallic:"cU",constantRoughness:"cV",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dg",normalMapTexture:"bg",roughnessTexture:"dA",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},fy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(f){return function(m){return a(er,$,Pe(function(p,b,s,w,_,S,C,y){var T=C.a,H=C.b;return F(Ee,h(sr,w,m,y),Jm,Ym,f,{cR:e,cT:r,cU:o,cV:t,U:H,bF:T.bF,cm:T.cm,cn:T.cn,co:T.co,dg:i,c:s,d:b,bg:l,e:S,dA:n,f:p,bm:c,g:_})}))}}}}}}}}}}},Xm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cQ",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"df",roughness:"dz",sceneProperties:"f",viewMatrix:"g"}},ni=Sr(function(e,r,n,t,i,o){return a(er,t,Pe(function(l,c,$,f,m,p,b,s){var w=b.a,_=b.b;return F(Ee,h(sr,f,o,s),Om,Xm,i,{cQ:e,U:_,bF:w.bF,cm:w.cm,cn:w.cn,co:w.co,df:n,c:$,d:c,e:p,dz:r,f:l,g:m})}))}),my=function(e){return{$:0,a:e}},u$=v(function(e,r){return{$:1,a:e,b:r}}),ut=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),sy=function(e){return L(Na,Wa(e),Ha(e),Ga(e),1)},jc=L(Na,0,0,0,0),si=v(function(e,r){if(r.$){var t=r.a.E;return z(t,jc)}else{var n=r.a;return z(e,sy(n))}}),Zm=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return a(u$,z(i,jc),a(ut,i,r))}else if(n.b.$){var i=n.b.a.E;return a(u$,a(si,i,e),a(ut,i,r))}else{var t=n.a.a;return n.b.a,my(t)}}),dy=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ai=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),py=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),gy=function(e){return a(_r,e,1)},Cl=a(_r,0,0),sa=v(function(e,r){if(r.$){var t=r.a.E;return z(t,Cl)}else{var n=r.a;return z(e,gy(n))}}),Qm=re(function(e,r,n,t){var i=L(py,e,r,n,t);if(i.a.$){var $=i.a.a.E;return L(ai,z($,jc),a(sa,$,r),a(sa,$,n),a(ut,$,t))}else if(i.b.$){var $=i.b.a.E;return L(ai,a(si,$,e),z($,Cl),a(sa,$,n),a(ut,$,t))}else if(i.c.$){var $=i.c.a.E;return L(ai,a(si,$,e),a(sa,$,r),z($,Cl),a(ut,$,t))}else if(i.d.$){var $=i.d.a.E;return L(ai,a(si,$,e),a(sa,$,r),a(sa,$,n),z($,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,h(dy,o,l,c)}}),hy={src:`
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
    `,attributes:{},uniforms:{backlight:"cO",colorTexture:"b7",sceneProperties:"f"}},Uo=Xe(function(e,r,n,t,i){return a(er,n,Pe(function(o,l,c,$,f,m,p,b){return F(Ee,h(sr,$,i,b),Um,hy,t,{cO:Wt(r),b7:e,c,d:l,e:m,f:o,g:f})}))}),Km={src:`
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
    `,attributes:{normal:"q",position:"ht",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},by=re(function(e,r,n,t){return a(er,r,Pe(function(i,o,l,c,$,f,m,p){var b=m.a,s=m.b;return F(Ee,h(sr,c,t,p),Km,qm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,dd:e,c:l,d:o,bg:e,e:f,f:i,bm:0,g:$})}))}),_y=Pl(function(e,r,n,t,i,o,l,c,$){return a(er,l,Pe(function(f,m,p,b,s,w,_,S){var C=_.a,y=_.b;return F(Ee,h(sr,b,$,S),Km,Ym,c,{cR:e,cT:r,cU:o,cV:t,U:y,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dg:i,c:p,d:m,bg:e,e:w,dA:n,f,bm:0,g:s})}))}),zt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),wy=function(e){var r=e;return h(zt,r.eO,r.eL,.5)},yy=function(e){var r=e;return h(zt,r.eP,r.eM,.5)},xy=function(e){var r=e;return h(zt,r.eQ,r.eN,.5)},Sy=function(e){return h(Ke,wy(e),yy(e),xy(e))},$e=function(e){var r=dm(e),n=r.a,t=r.b,i=r.c;return{f4:oo(Sy(e)),gE:n/2,gF:t/2,gG:i/2}},Uc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:var i=r.a,l=r.c,t=r.d;return L(jo,c,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return L(jo,c,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return L(jo,c,$e(i),l,t);case 8:return G;case 9:return G;default:return G}}else{var n=e.b.a;switch(r.$){case 0:return G;case 1:var i=r.a,l=r.c,t=r.d;return L(an,n,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return L(an,n,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return L(an,n,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return L(an,n,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return L(an,n,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return L(an,n,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return L(an,n,$e(i),l,t);case 8:var i=r.a,l=r.c;return L(an,n,$e(i),l,0);case 9:var i=r.a,l=r.c;return L(an,n,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return L(cy,n,o,$e(i),l)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,f=e.c;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:var i=r.a,l=r.c,t=r.d;return F(Uo,c,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(Uo,c,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(Uo,c,f,$e(i),l,t);case 8:return G;case 9:return G;default:return G}}else{var $=e.b.a,f=e.c;switch(r.$){case 0:return G;case 1:var i=r.a,l=r.c,t=r.d;return F(tn,$,f,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return F(tn,$,f,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return F(tn,$,f,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return F(tn,$,f,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return F(tn,$,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(tn,$,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(tn,$,f,$e(i),l,t);case 8:var i=r.a,l=r.c;return F(tn,$,f,$e(i),l,0);case 9:var i=r.a,l=r.c;return F(tn,$,f,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return F($y,$,f,o,$e(i),l)}}case 2:e.a;var m=e.b,ae=e.c,p=a(Zm,m,ae);if(p.$){var w=p.a,_=w.a;w.b;var S=p.b,C=S.a,y=S.b;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:return G;case 6:var i=r.a,l=r.c,s=r.d;return L(by,_,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return tr(vy,_,C,y,$e(i),l,s);case 8:return G;case 9:return G;default:return G}}else{var b=p.a;switch(r.$){case 0:return G;case 1:return G;case 2:var i=r.a,l=r.c,s=r.d;return L(ri,b,$e(i),l,s);case 3:return G;case 4:var i=r.a,l=r.c,s=r.d;return L(ri,b,$e(i),l,s);case 5:return G;case 6:var i=r.a,l=r.c,s=r.d;return L(ri,b,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return L(ri,b,$e(i),l,s);case 8:return G;case 9:return G;default:return G}}default:e.a;var T=e.b,H=e.c,Q=e.d,ae=e.e,te=L(Qm,T,H,Q,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,B=te.c,E=B.a,V=B.b,R=te.d,C=R.a,y=R.b;switch(r.$){case 0:return G;case 1:return G;case 2:return G;case 3:return G;case 4:return G;case 5:return G;case 6:var i=r.a,l=r.c,t=r.d;return ss(_y,pe,Me,me,Te,E,V,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return fy(pe)(Me)(me)(Te)(E)(V)(C)(y)($e(i))(l)(t);case 8:return G;case 9:return G;default:return G}}else{var ie=te.a,ne=te.b,q=te.c;switch(r.$){case 0:return G;case 1:return G;case 2:var i=r.a,l=r.c,t=r.d;return tr(ni,ie,ne,q,$e(i),l,t);case 3:return G;case 4:var i=r.a,l=r.c,t=r.d;return tr(ni,ie,ne,q,$e(i),l,t);case 5:return G;case 6:var i=r.a,l=r.c,t=r.d;return tr(ni,ie,ne,q,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return tr(ni,ie,ne,q,$e(i),l,t);case 8:return G;case 9:return G;default:return G}}}}),No=function(e){var r=e;return r.is},Wo=function(e){var r=e;return r.iw},Ho=function(e){var r=e;return r.dU},Cy=function(e){var r=e,n=Ho(r.dV),t=Wo(r.dV),i=No(r.dV),o=Ho(r.dT),l=Wo(r.dT),c=No(r.dT),$=Ho(r.dS),f=Wo(r.dS),m=No(r.dS);return m*l*n+f*o*i+$*c*t-$*l*i-f*c*n-m*o*t>0},zy=function(e){var r=oo($a(e)),n=Ar(Nn(e)),t=Ar(Un(e)),i=Ar(jn(e));return{ek:Cy(e),t:i.is,u:i.iw,v:i.dU,w:t.is,x:t.iw,y:t.dU,z:n.is,A:n.iw,B:n.dU,K:r.is,L:r.iw,M:r.dU,cB:1}},ga=v(function(e,r){return{$:5,a:e,b:r}}),es=v(function(e,r){var n=r;switch(n.$){case 0:return G;case 5:var t=n.a,i=n.b,o=a(lm,t,e);return a(ga,o,i);case 1:return a(ga,e,n);case 3:return a(ga,e,n);case 2:return a(ga,e,n);default:return a(ga,e,n)}}),rs=v(function(e,r){return a(es,zy(e),r)}),uo=function(e){return{$:2,a:e}},Ly=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{is:n*o.is,iw:t*o.iw,dU:i*o.dU},gE:n*r.gE,gF:t*r.gF,gG:i*r.gG}}),Py=zp,My=Cp,$$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(f){var m=e.a,p=e.b,b=e.c,s=My(t),w=s.is,_=s.iw,S=s.dU,C=s.ft,y=Py({ft:C,is:w*m,iw:_*p,dU:S*b});return Lt(r,n,y,i,o,l,c,$,f)}}}}}}}}}},zl=v(function(e,r){switch(r.$){case 0:return Rm;case 5:var n=r.a,t=r.b;return a(ga,n,a(zl,e,t));case 1:var i=r.a,o=r.b;return a(er,a(Ly,e,i),a($$,e,o));case 3:return r;case 2:var o=r.a;return uo(a($$,e,o));default:var l=r.a;return hm(a(ee,zl(e),l))}}),Nc=v(function(e,r){var n=r;return a(zl,e,n)}),Wc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ns=7683,as=7682,Ty=h(Tc,{db:0,dw:0,dR:15},{bz:or,bO:Ea,bX:or,bY:ns},{bz:or,bO:Ea,bX:or,bY:as}),ky=h(Tc,{db:0,dw:0,dR:15},{bz:or,bO:Ea,bX:or,bY:as},{bz:or,bO:Ea,bX:or,bY:ns}),Hc=v(function(e,r){return e?a(P,ky,r):a(P,Ty,r)}),Dy={src:`
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
    `,attributes:{normal:"q",position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},Ay=function(e){if(e.$){var r=e.c;return X(Pe(function(n,t,i,o,l,c,$,f){return F(Ee,a(Hc,o,f),Dy,Wc,r,{c:i,d:t,e:c,f:n,cC:$,g:l})}))}else return J},Fi=function(e){var r=Ay(e);if(r.$)return G;var n=r.a;return uo(n)},Fy=re(function(e,r,n,t){var i=a(Uc,n,Bm),o=function(){var m=z(e,r);return m.a?m.b?Ut(u([i,Fi(c$)])):i:m.b?Fi(c$):G}(),l=eo(t),c=l.a,$=l.b,f=l.c;return a(rs,Ki(t),a(Nc,D(c,$,f),o))}),Iy=v(function(e,r){return L(Fy,!0,!0,e,r)}),ts=v(function(e,r){return{$:0,a:e,b:r}}),By=function(e){var r=lc(e),n=r.hx,t=r.gB,i=r.fS;return h(Rt,n,t,i)},Ey=function(e){return a(ts,0,bl(By(e)))},$t=function(e){var r=e;return ia(r)},Vy=v(function(e,r){var n=r;return n/e}),v$=function(e){var r=e;return{is:ia(r),iw:Ba(r)}},Ry=v(function(e,r){var n=e.ht,t=e.q;return a(P,{q:lo(t),ht:mr(n)},r)}),jy=Ei(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,$=l.b,f=Ga(c.ht),m=Ha(c.ht),p=Wa(c.ht),b=a(Pa,e,p),s=a(Tr,r,p),w=a(Pa,n,m),_=a(Tr,t,m),S=a(Pa,i,f),C=a(Tr,o,f),y=$;e=b,r=s,n=w,t=_,i=S,o=C,l=y;continue e}else return Tm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),is=v(function(e,r){var n=Ga(e.ht),t=Ha(e.ht),i=Wa(e.ht);return Ml(jy,i,i,t,t,n,n,r)}),Uy=function(e){var r=h(Y$,Ry,A,Ec(e));if(r.b){var n=r.a,t=r.b,i=a(Nt,r,Bc(e)),o=a(is,n,t);return L(Pm,o,e,i,0)}else return Ic},f$=v(function(e,r){var n=e,t=r,i=n.dT,o=i,l=n.dS,c=l;return{is:t.is*c.is+t.iw*o.is,iw:t.is*c.iw+t.iw*o.iw,dU:t.is*c.dU+t.iw*o.dU}}),Ii=function(e){var r=e;return Ba(r)},tt=function(e){var r=e;return r},Ll=function(e){return hn(2*br*e)},m$=Wf({dk:Mr,dS:Xi,dT:Cc}),os=function(){var e=72,r=a(Vy,e,Ll(1)),n=Pn(1),t=tt(pc),i=tt(Gf),o=Pn(1),l=a(ke,.5,o),c=h(Ke,vn,vn,l),$=a(ke,-.5,o),f=h(Ke,vn,vn,$),m=function(s){var w=a(ke,s,r),_=tt(a(f$,m$,v$(w))),S=a(ke,$t(w),n),C=a(ke,Ii(w),n),y=h(Ke,S,C,l),T=h(Ke,S,C,$),H=a(xt,e,s+1),Q=a(ke,H,r),ae=tt(a(f$,m$,v$(Q))),te=a(ke,$t(Q),n),ie=a(ke,Ii(Q),n),ne=h(Ke,te,ie,$),q=h(Ke,te,ie,l);return u([D({q:i,ht:f},{q:i,ht:ne},{q:i,ht:T}),D({q:_,ht:T},{q:ae,ht:ne},{q:ae,ht:q}),D({q:_,ht:T},{q:ae,ht:q},{q:_,ht:y}),D({q:t,ht:c},{q:t,ht:y},{q:t,ht:q})])},p=a(ee,m,a(Xr,0,e-1)),b=Sl(pr(p));return Fc(Uy(b))}(),s$=Vm(os),Ny=function(e){var r=e,n=ye(r.dU),t=ye(r.iw),i=ye(r.is);if(_e(i,t)<1)if(_e(i,n)<1){var o=Ca(r.dU*r.dU+r.iw*r.iw);return{is:0,iw:-r.dU/o,dU:r.iw/o}}else{var o=Ca(r.iw*r.iw+r.is*r.is);return{is:-r.iw/o,iw:r.is/o,dU:0}}else if(_e(t,n)<1){var o=Ca(r.dU*r.dU+r.is*r.is);return{is:r.dU/o,iw:0,dU:-r.is/o}}else{var o=Ca(r.is*r.is+r.iw*r.iw);return{is:-r.iw/o,iw:r.is/o,dU:0}}},Wy=function(e){var r=Ny(e),n=r,t=n,i=e,o=i,l={is:o.iw*t.dU-o.dU*t.iw,iw:o.dU*t.is-o.is*t.dU,dU:o.is*t.iw-o.iw*t.is};return z(r,l)},Hy=function(e){var r=dc(e),n=Wy(r),t=n.a,i=n.b;return bn({dk:rm(e),dS:t,dT:i,dV:r})},Gy=re(function(e,r,n,t){var i=Hy(zc(t)),o=a(Uc,n,os),l=function(){var p=z(e,r);return p.a?p.b?Ut(u([o,Fi(s$)])):o:p.b?Fi(s$):G}(),c=am(t),$=c,f=nm(t),m=f;return a(rs,i,a(Nc,D($,$,m),l))}),Oy=v(function(e,r){return L(Gy,!0,!0,e,r)}),d$={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},p$={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},it=function(e){var r=Ct(e),n=r.a,t=r.b,i=r.c,o=ka(n),l=ka(t),c=ka(i);return Jr({eu:o.is,ev:l.is,ew:c.is,ex:0,ey:o.iw,ez:l.iw,eA:c.iw,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},ti=Im(u([D({dH:0},{dH:1},{dH:2})])),qy=v(function(e,r){var n=km(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,G;var i=e.b.a;return a(er,t,Pe(function(y,T,H,Q,ae,te,ie,ne){return F(Ee,h(sr,Q,0,ne),d$,Vc,ti,{aO:i,c:H,d:T,e:te,f:y,bU:it(r),g:ae})}));case 1:if(e.b.$)return e.a,G;var o=e.b.a,l=e.c;return a(er,t,Pe(function(y,T,H,Q,ae,te,ie,ne){return F(Ee,h(sr,Q,0,ne),d$,Rc,ti,{a6:a(co,Wt(l),o),c:H,d:T,e:te,f:y,bU:it(r),g:ae})}));case 2:e.a;var c=e.b,s=e.c,$=a(Zm,c,s);if($.$)return G;var f=$.a;return a(er,t,Pe(function(y,T,H,Q,ae,te,ie,ne){var q=ie.a,de=ie.b;return F(Ee,h(sr,Q,0,ne),p$,Gm,ti,{U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dc:f,c:H,d:T,e:te,f:y,bU:it(r),g:ae})}));default:e.a;var m=e.b,p=e.c,b=e.d,s=e.e,w=L(Qm,m,p,b,s);if(w.$)return G;var _=w.a,S=w.b,C=w.c;return a(er,t,Pe(function(y,T,H,Q,ae,te,ie,ne){var q=ie.a,de=ie.b;return F(Ee,h(sr,Q,0,ne),p$,Xm,ti,{cQ:_,U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,df:C,c:H,d:T,e:te,dz:S,f:y,bU:it(r),g:ae})}))}}),Jy=function(){var e=u([{bl:a(_r,0,1)},{bl:a(_r,1,1)},{bl:a(_r,2,1)},{bl:a(_r,0,-1)},{bl:a(_r,1,-1)},{bl:a(_r,2,-1)}]),r=u([D(0,1,2),D(3,5,4),D(3,4,1),D(3,1,0),D(4,5,2),D(4,2,1),D(5,3,0),D(5,0,2)]);return a(Nt,e,r)}(),Yy={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",triangleVertexPositions:"bU",viewMatrix:"g"}},g$=function(e){return uo(Pe(function(r,n,t,i,o,l,c,$){return F(Ee,a(Hc,i,$),Yy,Wc,Jy,{c:t,d:n,e:l,f:r,cC:c,bU:it(e),g:o})}))},Xy=re(function(e,r,n,t){var i=a(qy,n,t),o=z(e,r);return o.a?o.b?Ut(u([i,g$(t)])):i:o.b?g$(t):G}),Zy=v(function(e,r){return L(Xy,!0,!0,e,r)}),Qy=v(function(e,r){var n=na(r),t=na(e),i=ra(r),o=ra(e),l=ea(r),c=ea(e);return{eL:a(He,c,l),eM:a(He,o,i),eN:a(He,t,n),eO:a(qe,c,l),eP:a(qe,o,i),eQ:a(qe,t,n)}}),Ky=function(e){var r=wc(e),n=r.a,t=r.b;return a(Qy,n,t)},h$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ex=v(function(e,r){return{$:1,a:e,b:r}}),rx=ex({d5:2,ei:0,eS:1}),b$=rx(u([z({es:0},{es:1})])),nx=v(function(e,r){var n=Ky(r),t=$e(n),i=wc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,G;var c=e.b.a;return a(er,t,Pe(function(f,m,p,b,s,w,_,S){return F(Ee,S,h$,Vc,b$,{aO:c,eq:mr(l),er:mr(o),c:p,d:m,e:w,f,g:s})}));case 1:if(e.b.$)return G;var c=e.b.a,$=e.c;return a(er,t,Pe(function(m,p,b,s,w,_,S,C){return F(Ee,C,h$,Rc,b$,{a6:a(co,Wt($),c),eq:mr(l),er:mr(o),c:b,d:p,e:_,f:m,g:w})}));case 2:return G;default:return G}}),ax=v(function(e,r){return a(nx,e,r)}),_$=v(function(e,r){var n=e,t=r;return n/t}),tx=Xe(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(P,o,i);if(he(r,e))return l;var c=e,$=r-1,f=n,m=t,p=l;e=c,r=$,n=f,t=m,i=p;continue e}}),w$=v(function(e,r){return e<1?A:F(tx,0,e,e,r,A)}),ix=v(function(e,r){var n=e.ht,t=e.q,i=e.O,o=i,l=o.a,c=o.b;return a(P,{q:lo(t),ht:mr(n),O:a(_r,l,c)},r)}),ox=function(e){var r=h(Y$,ix,A,Ec(e));if(r.b){var n=r.a,t=r.b,i=a(Nt,r,Bc(e)),o=a(is,n,t);return L(Mm,o,e,i,0)}else return Ic},ls=v(function(e,r){var n=e,t=r,i=ia(t);return{is:i*ia(n),iw:i*Ba(n),dU:Ba(t)}}),lx=function(){var e=Pn(1),r=72,n=a(Xr,0,r-1),t=a(w$,r,a(zt,vn,Ll(1))),i=ft(r/2),o=a(Xr,0,i-1),l=a(w$,i,a(zt,nt(90),nt(-90))),c=io(pr(a(ee,function(m){return a(ee,function(p){return{q:tt(a(ls,m,p)),ht:h(Ke,a(ke,$t(p)*$t(m),e),a(ke,$t(p)*Ii(m),e),a(ke,Ii(p),e)),O:z(a(_$,m,Ll(1)),a(_$,a(ct,nt(90),p),nt(180)))}},l)},t))),$=v(function(m,p){return m*(i+1)+p}),f=pr(a(ee,function(m){return pr(a(ee,function(p){var b=a($,m+1,p),s=a($,m,p),w=a($,m+1,p+1),_=a($,m,p+1);return u([D(_,w,b),D(_,b,s)])},o))},n));return Fc(ox(a(Em,c,f)))}(),Bi=72,ii=2*Bi,cx=v(function(e,r){e:for(;;){var n=ii+1,t=a(xt,ii,2*e+3),i=a(xt,ii,2*e+2),o=2*e+1,l=2*e,c=ii,$=a(P,D(c,l,i),a(P,D(l,t,i),a(P,D(l,o,t),a(P,D(o,n,t),r))));if(e){var f=e-1,m=$;e=f,r=m;continue e}else return $}}),ux=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),$x=v(function(e,r){e:for(;;){var n=h(ux,0,2*br,e/Bi),t={b_:n,ct:0,cz:1},i={b_:n,ct:1,cz:1},o=a(P,t,a(P,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),vx=function(){var e=a($x,Bi-1,u([{b_:0,ct:0,cz:0},{b_:0,ct:1,cz:0}])),r=a(cx,Bi-1,A);return a(Nt,e,r)}(),fx={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},y$=function(e){return uo(Pe(function(r,n,t,i,o,l,c,$){return F(Ee,a(Hc,!0,$),fx,Wc,vx,{aO:h(Rt,0,0,1),c:t,d:n,e:l,f:r,cC:c,g:o})}))},mx=function(e){var r=Am(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.is,L:r.iw,M:r.dU,cB:1}},sx=v(function(e,r){return a(es,mx(e),r)}),dx=re(function(e,r,n,t){var i=a(Uc,n,lx),o=function(){var $=z(e,r);return $.a?$.b?Ut(u([i,y$()])):i:$.b?y$():G}(),l=no(t),c=l;return a(sx,a(xl,Mr,ro(t)),a(Nc,D(c,c,c),o))}),px=v(function(e,r){return L(dx,!0,!0,e,r)}),gx=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),hx=Xe(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),bx=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(ts,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(gx,n,t,r);case 2:var n=e.a,t=e.b,l=e.c;return h(Yf,n,t,l);default:var n=e.a,t=e.b,i=e.c,o=e.d,l=e.e;return F(hx,n,t,i,o,l)}},_x=bx,cs=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return u([a(Iy,i,r)]);case 1:var i=e.a,n=e.b;return u([a(Zy,i,n)]);case 3:var i=e.a,t=e.b;return u([a(px,_x(i),t)]);case 2:var i=e.a,o=e.b;return u([a(Oy,i,o)]);case 4:var l=e.a,c=e.b;return u([a(ax,Ey(l),c)]);default:var $=e.a;return a(ja,cs,$)}},wx=function(e){return a(ja,cs,e)},yx=v(function(e,r){return Aw({a1:q_(e.fO),f0:e.f0,a3:J_(.5),cW:e.cW,a4:z(Yu(Ve(e.dB.iq)),Yu(Ve(e.dB.gI))),a8:wx(r),hM:!0,h1:a(ls,hn(e.h0),hn(e.h2)),fm:Zi})}),xx=L(Ua,255/255,255/255,255/255,1),Sx=v(function(e,r){return a(yx,{fO:xx,f0:n_(e),cW:e.cW,dB:e.dB,h0:a(jr,"sunlight azimuth",e),h2:a(jr,"sunlight elevation",e)},u([a(O_,e,r),T_(e)]))}),Cx=v(function(e,r){return a($r,A,u([a($r,u([a(Be,"position","absolute"),a(Be,"width","100%")]),u([a(B1,e,r)])),a(Sx,e,r)]))}),zx=L(z1,Cx,F1,A1,P1);const Lx={Main:{init:zx(a(K,function(e){return ur({gZ:e})},a(Z,"inputs",a(K,function(e){return a(K,function(r){return a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(l){return ur({d1:l,cW:o,gq:i,g4:t,hs:n,dB:r,ip:e})},a(Z,"clock",Oe))},a(Z,"devicePixelRatio",Oe))},a(Z,"dt",Oe))},a(Z,"keyboard",a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(l){return a(K,function(c){return a(K,function($){return a(K,function(f){return a(K,function(m){return a(K,function(p){return ur({fJ:p,gd:m,d4:f,gp:$,g5:c,hu:l,hA:o,hN:i,fl:t})},a(Z,"alt",Le))},a(Z,"control",Le))},a(Z,"down",Le))},a(Z,"downs",Si(Aa)))},a(Z,"left",Le))},a(Z,"pressedKeys",Si(Aa)))},a(Z,"right",Le))},a(Z,"shift",Le))},a(Z,"up",Le))))},a(Z,"pointer",a(K,function(n){return a(K,function(t){return a(K,function(i){return a(K,function(o){return a(K,function(l){return a(K,function(c){return a(K,function($){return a(K,function(f){return ur({d4:f,g0:$,hb:c,hB:l,hC:o,fl:i,is:t,iw:n})},a(Z,"down",Le))},a(Z,"isDown",Le))},a(Z,"move",Le))},a(Z,"rightDown",Le))},a(Z,"rightUp",Le))},a(Z,"up",Le))},a(Z,"x",Oe))},a(Z,"y",Oe))))},a(Z,"screen",a(K,function(r){return a(K,function(n){return ur({gI:n,iq:r})},a(Z,"height",Oe))},a(Z,"width",Oe))))},a(Z,"wheel",a(K,function(e){return a(K,function(r){return ur({gi:r,gj:e})},a(Z,"deltaX",Oe))},a(Z,"deltaY",Oe)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Px=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",l=s=>s.code=="ArrowUp",c=s=>s.code=="ArrowDown",$=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function p(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),l(s)&&(oe.keyboard.up=!0),c(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(w=>w!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),l(s)&&(oe.keyboard.up=!1),c(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,$(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{$(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{$(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const w=s/1e3,_=w-oe.clock;_<.009||(oe.dt=_,oe.clock=w,e.ports.tick.send(oe),p(oe)),window.requestAnimationFrame(b)}},Mx=Lx.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});Px(Mx);
