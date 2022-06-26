const qm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};qm();function Pn(e,r,n){return n.a=e,n.f=r,n}function v(e){return Pn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return Pn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ee(e){return Pn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Je(e){return Pn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function yr(e){return Pn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function Ti(e){return Pn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function ze(e){return Pn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,t,i,o,l,c,u)}}}}}}}})}function fl(e){return Pn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return e(r,n,t,i,o,l,c,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ar(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function ml(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function gt(e,r,n,t,i,o,l,c,u){return e.a===8?e.f(r,n,t,i,o,l,c,u):e(r)(n)(t)(i)(o)(l)(c)(u)}function Jm(e,r,n,t,i,o,l,c,u,f){return e.a===9?e.f(r,n,t,i,o,l,c,u,f):e(r)(n)(t)(i)(o)(l)(c)(u)(f)}var Ym=[];function Xm(e){return e.length}var Km=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Zm=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),Qm=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var es=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+rs()),r});function rs(e){return"<internals>"}function Ma(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=Mo(e,r,0,t);i&&(n=t.pop());i=Mo(n.a,n.b,0,t));return i}function Mo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ma(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=qc(e),r=qc(r));for(var i in e)if(!Mo(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function he(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=he(e.a,r.a))||(n=he(e.b,r.b))?n:he(e.c,r.c);for(;e.b&&r.b&&!(n=he(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return he(e,r)<0});v(function(e,r){return he(e,r)<1});v(function(e,r){return he(e,r)>0});v(function(e,r){return he(e,r)>=0});var ns=v(function(e,r){var n=he(e,r);return n<0?V$:n?Jp:B$}),ht=0;function L(e,r){return{a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function Ve(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Yr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Yr(e.a,r);return n}var D={$:0};function Yr(e,r){return{$:1,a:e,b:r}}var as=v(Yr);function $(e){for(var r=D,n=e.length;n--;)r=Yr(e[n],r);return r}function ki(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ts=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ee(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Je(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return $(o)});yr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,t.a,i.a,o.a));return $(l)});v(function(e,r){return $(ki(r).sort(function(n,t){return he(e(n),e(t))}))});v(function(e,r){return $(ki(r).sort(function(n,t){var i=a(e,n,t);return i===B$?0:i===V$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var is=v(Math.pow);v(function(e,r){return r%e});var os=v(function(e,r){var n=r%e;return e===0?Ma(11):n>0&&e<0||n<0&&e>0?n+e:n}),ls=Math.PI,cs=Math.cos,us=Math.sin,$s=Math.tan;v(Math.atan2);function vs(e){return e}function fs(e){return e===1/0||e===-1/0}var ms=Math.ceil,ss=Math.floor,ds=Math.round,ps=Math.sqrt,Fc=Math.log,gs=isNaN;function hs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var bs=v(function(e,r){return e+r});function _s(e){var r=e.charCodeAt(0);return isNaN(r)?q:Y(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function xs(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function ws(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var ys=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ss=v(function(e,r){return r.split(e)}),Cs=v(function(e,r){return r.join(e)}),Ls=M(function(e,r,n){return n.slice(e,r)});function Ps(e){return $(e.trim().split(/\s+/g))}function zs(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Ms=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Ts=v(function(e,r){return r.indexOf(e)>-1}),ks=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ds=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function $$(e){return e+""}function Fs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return q;r=10*r+o-48}return i==t?q:Y(n==45?-r:r)}function Is(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?Y(r):q}function As(e){return ki(e).join("")}function Es(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bs(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Vs(e){return{$:0,a:e}}function Rs(e){return{$:1,a:e}}function sl(e){return{$:2,b:e}}var Us=sl(function(e){return typeof e=="boolean"?Ge(e):Nr("a BOOL",e)}),js=sl(function(e){return typeof e=="number"?Ge(e):Nr("a FLOAT",e)}),Ns=sl(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):Nr("a STRING",e)});function Hs(e){return{$:3,b:e}}var Gs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function zn(e,r){return{$:9,f:e,g:r}}var Ws=v(function(e,r){return{$:10,b:r,h:e}}),Os=v(function(e,r){return zn(e,[r])}),qs=M(function(e,r,n){return zn(e,[r,n])});ee(function(e,r,n,t){return zn(e,[r,n,t])});Je(function(e,r,n,t,i){return zn(e,[r,n,t,i])});yr(function(e,r,n,t,i,o){return zn(e,[r,n,t,i,o])});Ti(function(e,r,n,t,i,o,l){return zn(e,[r,n,t,i,o,l])});ze(function(e,r,n,t,i,o,l,c){return zn(e,[r,n,t,i,o,l,c])});fl(function(e,r,n,t,i,o,l,c,u){return zn(e,[r,n,t,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Lr(e,n)}catch(t){return tr(a(Pl,"This is not valid JSON! "+t.message,r))}});var v$=v(function(e,r){return Lr(e,r)});function Lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):Nr("null",r);case 3:return Bt(r)?Ic(e.b,r,$):Nr("a LIST",r);case 4:return Bt(r)?Ic(e.b,r,Js):Nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Nr("an OBJECT with a field named `"+n+"`",r);var f=Lr(e.b,r[n]);return Ir(f)?f:tr(a(Jc,n,f.a));case 7:var t=e.e;if(!Bt(r))return Nr("an ARRAY",r);if(t>=r.length)return Nr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Lr(e.b,r[t]);return Ir(f)?f:tr(a(R$,t,f.a));case 8:if(typeof r!="object"||r===null||Bt(r))return Nr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Lr(e.b,r[o]);if(!Ir(f))return tr(a(Jc,o,f.a));i=Yr(L(o,f.a),i)}return Ge(mr(i));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var f=Lr(c[u],r);if(!Ir(f))return f;l=l(f.a)}return Ge(l);case 10:var f=Lr(e.b,r);return Ir(f)?Lr(e.h(f.a),r):f;case 11:for(var m=D,d=e.g;d.b;d=d.b){var f=Lr(d.a,r);if(Ir(f))return f;m=Yr(f.a,m)}return tr(Yp(mr(m)));case 1:return tr(a(Pl,e.a,r));case 0:return Ge(e.a)}}function Ic(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=Lr(e,r[o]);if(!Ir(l))return tr(a(R$,o,l.a));i[o]=l.a}return Ge(n(i))}function Bt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Js(e){return a($0,e.length,function(r){return e[r]})}function Nr(e,r){return tr(a(Pl,"Expecting "+e,r))}function $a(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return $a(e.b,r.b);case 6:return e.d===r.d&&$a(e.b,r.b);case 7:return e.e===r.e&&$a(e.b,r.b);case 9:return e.f===r.f&&Ac(e.g,r.g);case 10:return e.h===r.h&&$a(e.b,r.b);case 11:return Ac(e.g,r.g)}}function Ac(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!$a(e[t],r[t]))return!1;return!0}var Ys=v(function(e,r){return JSON.stringify(r,null,e)+""});function f$(e){return e}function Xs(){return[]}function Ks(){return{}}var Zs=M(function(e,r,n){return n[e]=r,n});function Qs(e){return v(function(r,n){return n.push(e(r)),n})}function Xn(e){return{$:0,a:e}}function ed(e){return{$:1,a:e}}function mn(e){return{$:2,b:e,c:null}}var To=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function rd(e){return{$:5,b:e}}var nd=0;function dl(e){var r={$:0,e:nd++,f:e,g:null,h:[]};return pl(r),r}function m$(e){return mn(function(r){r(Xn(dl(e)))})}function s$(e,r){e.h.push(r),pl(e)}var ad=v(function(e,r){return mn(function(n){s$(e,r),n(Xn(ht))})}),ao=!1,Ec=[];function pl(e){if(Ec.push(e),!ao){for(ao=!0;e=Ec.shift();)td(e);ao=!1}}function td(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,pl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ee(function(e,r,n,t){return gl(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function gl(e,r,n,t,i,o){var l=a(v$,e,r?r.flags:void 0);Ir(l)||Ma(2);var c={},u=n(l.a),f=u.a,m=o(b,f),d=id(c,b);function b(s,x){var _=a(t,s,f);m(f=_.a,x),Vc(c,_.b,i(f))}return Vc(c,u.b,i(f)),d?{ports:d}:{}}var Or={};function id(e,r){var n;for(var t in Or){var i=Or[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=ld(i,r)}return n}function od(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function ld(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c(u){return a(To,c,rd(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&l?P(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=dl(a(To,c,e.b))}var cd=v(function(e,r){return mn(function(n){e.g(r),n(Xn(ht))})});v(function(e,r){return a(ad,e.h,{$:0,a:r})});function d$(e){return function(r){return{$:1,k:e,l:r}}}function ud(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Bc=[],to=!1;function Vc(e,r,n){if(Bc.push({p:e,q:r,r:n}),!to){to=!0;for(var t;t=Bc.shift();)$d(t.p,t.q,t.r);to=!1}}function $d(e,r,n){var t={};oi(!0,r,t,null),oi(!1,n,t,null);for(var i in e)s$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function oi(e,r,n,t){switch(r.$){case 1:var i=r.k,o=vd(e,i,t,r.l);n[i]=fd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)oi(e,l.a,n,t);return;case 3:oi(e,r.o,n,{s:r.n,t});return}}function vd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Or[r].e:Or[r].f;return a(o,i,t)}function fd(e,r,n){return n=n||{i:D,j:D},e?n.i=Yr(r,n.i):n.j=Yr(r,n.j),n}function md(e){Or[e]&&Ma(3)}v(function(e,r){return r});function sd(e,r){return md(e),Or[e]={f:dd,u:r,a:pd},d$(e)}var dd=v(function(e,r){return function(n){return e(r(n))}});function pd(e,r){var n=D,t=Or[e].u,i=Xn(null);Or[e].b=i,Or[e].c=M(function(l,c,u){return n=c,i});function o(l){var c=a(v$,t,l);Ir(c)||Ma(4,e,c.a);for(var u=c.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var li,on=typeof document!="undefined"?document:{};function hl(e,r){e.appendChild(r)}ee(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(xn(e,function(){}),i),{}});function ko(e){return{$:0,a:e}}var p$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:_l(n),e:i,f:e,b:o}})}),sn=p$(void 0),gd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:_l(n),e:i,f:e,b:o}})}),hd=gd(void 0);function bd(e,r,n,t){return{$:3,d:_l(e),g:r,h:n,i:t}}var _d=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Mn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Mn([e,r],function(){return e(r)})});M(function(e,r,n){return Mn([e,r,n],function(){return a(e,r,n)})});var xd=ee(function(e,r,n,t){return Mn([e,r,n,t],function(){return h(e,r,n,t)})});Je(function(e,r,n,t,i){return Mn([e,r,n,t,i],function(){return P(e,r,n,t,i)})});yr(function(e,r,n,t,i,o){return Mn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});Ti(function(e,r,n,t,i,o,l){return Mn([e,r,n,t,i,o,l],function(){return ar(e,r,n,t,i,o,l)})});ze(function(e,r,n,t,i,o,l,c){return Mn([e,r,n,t,i,o,l,c],function(){return ml(e,r,n,t,i,o,l,c)})});fl(function(e,r,n,t,i,o,l,c,u){return Mn([e,r,n,t,i,o,l,c,u],function(){return gt(e,r,n,t,i,o,l,c,u)})});var g$=v(function(e,r){return{$:"a0",n:e,o:r}}),wd=v(function(e,r){return{$:"a1",n:e,o:r}}),bl=v(function(e,r){return{$:"a2",n:e,o:r}}),Vr=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function h$(e){return e=="script"?"p":e}function yd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Sd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Cd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function b$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Ld=v(function(e,r){return r.$==="a0"?a(g$,r.n,Pd(e,r.o)):r});function Pd(e,r){var n=kl(r);return{$:r.$,a:n?h(v0,n<3?zd:Md,cr(e),r.a):a(vi,e,r.a)}}var zd=v(function(e,r){return L(e(r.a),r.b)}),Md=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function _l(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Rc(r,i,o):r[i]=o;continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?Rc(l,i,o):l[i]=o}return r}function Rc(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function xn(e,r){var n=e.$;if(n===5)return xn(e.k||(e.k=e.m()),r);if(n===0)return on.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=xn(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Do(l,r,e.d),l}var l=e.f?on.createElementNS(e.f,e.c):on.createElement(e.c);li&&e.c=="a"&&l.addEventListener("click",li(l)),Do(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)hl(l,xn(n===1?c[u]:c[u].b,r));return l}function Do(e,r,n){for(var t in n){var i=n[t];t==="a1"?Td(e,i):t==="a0"?Fd(e,r,i):t==="a3"?kd(e,i):t==="a4"?Dd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Td(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function kd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Dd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Fd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Id(r,o),e.addEventListener(i,l,xl&&{passive:kl(o)<2}),t[i]=l}}var xl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xl=!0}}))}catch{}function Id(e,r){function n(t){var i=n.q,o=Lr(i.a,t);if(!!Ir(o)){for(var l=kl(i),c=o.a,u=l?l<3?c.a:c.aA:c,f=l==1?c.b:l==3&&c.dG,m=(f&&t.stopPropagation(),(l==2?c.b:l==3&&c.dv)&&t.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")u=d(u);else for(var b=d.length;b--;)u=d[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Ad(e,r){return e.$==r.$&&$a(e.a,r.a)}function _$(e,r){var n=[];return Ar(e,r,n,0),n}function nr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Ar(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Hd(r),o=1;else{nr(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,f=u===c.length;f&&u--;)f=l[u]===c[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Ar(e.k,r.k,m,0),m.length>0&&nr(n,1,t,m);return;case 4:for(var d=e.j,b=r.j,s=!1,x=e.k;x.$===4;)s=!0,typeof d!="object"?d=[d,x.j]:d.push(x.j),x=x.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&d.length!==b.length){nr(n,0,t,r);return}(s?!Ed(d,b):d!==b)&&nr(n,2,t,b),Ar(x,_,n,t+1);return;case 0:e.a!==r.a&&nr(n,3,t,r.a);return;case 1:Uc(e,r,n,t,Bd);return;case 2:Uc(e,r,n,t,Vd);return;case 3:if(e.h!==r.h){nr(n,0,t,r);return}var S=wl(e.d,r.d);S&&nr(n,4,t,S);var C=r.i(e.g,r.g);C&&nr(n,5,t,C);return}}}function Ed(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Uc(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){nr(n,0,t,r);return}var o=wl(e.d,r.d);o&&nr(n,4,t,o),i(e,r,n,t)}function wl(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=wl(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Ad(l,c)||(t=t||{},t[i]=c)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Bd(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?nr(n,6,t,{v:c,i:l-c}):l<c&&nr(n,7,t,{v:l,e:o});for(var u=l<c?l:c,f=0;f<u;f++){var m=i[f];Ar(m,o[f],n,++t),t+=m.b||0}}function Vd(e,r,n,t){for(var i=[],o={},l=[],c=e.e,u=r.e,f=c.length,m=u.length,d=0,b=0,s=t;d<f&&b<m;){var x=c[d],_=u[b],S=x.a,C=_.a,w=x.b,T=_.b,G=void 0,Z=void 0;if(S===C){s++,Ar(w,T,i,s),s+=w.b||0,d++,b++;continue}var ae=c[d+1],te=u[b+1];if(ae){var ie=ae.a,re=ae.b;Z=C===ie}if(te){var J=te.a,de=te.b;G=S===J}if(G&&Z){s++,Ar(w,de,i,s),Ra(o,i,S,T,b,l),s+=w.b||0,s++,Ua(o,i,S,re,s),s+=re.b||0,d+=2,b+=2;continue}if(G){s++,Ra(o,i,C,T,b,l),Ar(w,de,i,s),s+=w.b||0,d+=1,b+=2;continue}if(Z){s++,Ua(o,i,S,w,s),s+=w.b||0,s++,Ar(re,T,i,s),s+=re.b||0,d+=2,b+=1;continue}if(ae&&ie===J){s++,Ua(o,i,S,w,s),Ra(o,i,C,T,b,l),s+=w.b||0,s++,Ar(re,de,i,s),s+=re.b||0,d+=2,b+=2;continue}break}for(;d<f;){s++;var x=c[d],w=x.b;Ua(o,i,x.a,w,s),s+=w.b||0,d++}for(;b<m;){var pe=pe||[],_=u[b];Ra(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||l.length>0||pe)&&nr(n,8,t,{w:i,x:l,y:pe})}var x$="_elmW6BL";function Ra(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Ar(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Ra(e,r,n+x$,t,i,o)}function Ua(e,r,n,t,i){var o=e[n];if(!o){var l=nr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Ar(t,o.z,c,i),nr(r,9,i,{w:c,A:o});return}Ua(e,r,n+x$,t,i)}function w$(e,r,n,t){ja(e,r,n,0,0,r.b,t)}function ja(e,r,n,t,i,o,l){for(var c=n[t],u=c.r;u===i;){var f=c.$;if(f===1)w$(e,r.k,c.s,l);else if(f===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&ja(e,r,m,0,i,o,l)}else if(f===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var m=d.w;m.length>0&&ja(e,r,m,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||(u=c.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return ja(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var x=r.e,_=e.childNodes,S=0;S<x.length;S++){i++;var C=b===1?x[S]:x[S].b,w=i+(C.b||0);if(i<=u&&u<=w&&(t=ja(_[S],C,n,t,i,w,l),!(c=n[t])||(u=c.r)>o))return t;i=w}return t}function y$(e,r,n,t){return n.length===0?e:(w$(e,r,n,t),ci(e,n))}function ci(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Rd(i,t);i===e&&(e=o)}return e}function Rd(e,r){switch(r.$){case 0:return Ud(e,r.s,r.u);case 4:return Do(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ci(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(xn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=ci(e,o.w),e;case 8:return jd(e,r);case 5:return r.s(e);default:Ma(10)}}function Ud(e,r,n){var t=e.parentNode,i=xn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function jd(e,r){var n=r.s,t=Nd(n.y,r);e=ci(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:xn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return t&&hl(e,t),e}function Nd(e,r){if(!!e){for(var n=on.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;hl(n,o.c===2?o.s:xn(o.z,r.u))}return n}}function yl(e){if(e.nodeType===3)return ko(e.textContent);if(e.nodeType!==1)return ko("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=Yr(a(Vr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Yr(yl(f[t]),u);return h(sn,c,r,u)}function Hd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Gd=ee(function(e,r,n,t){return gl(r,t,e.gS,e.ii,e.hX,function(i,o){var l=e.ik,c=t.node,u=yl(c);return S$(o,function(f){var m=l(f),d=_$(u,m);c=y$(c,u,d,i),u=m})})});ee(function(e,r,n,t){return gl(r,t,e.gS,e.ii,e.hX,function(i,o){var l=e.dE&&e.dE(i),c=e.ik,u=on.title,f=on.body,m=yl(f);return S$(o,function(d){li=l;var b=c(d),s=sn("body")(D)(b.fU),x=_$(m,s);f=y$(f,m,x,i),m=s,li=0,u!==b.id&&(on.title=u=b.id)})})});var ui=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function S$(e,r){r(e);var n=0;function t(){n=n===1?0:(ui(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&ui(t),n=2)}}v(function(e,r){return a(Fl,_t,mn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Fl,_t,mn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Fl,_t,mn(function(){history.replaceState({},"",r),e()}))});var Wd={addEventListener:function(){},removeEventListener:function(){}},Od=typeof window!="undefined"?window:Wd;M(function(e,r,n){return m$(mn(function(t){function i(o){dl(n(o))}return e.addEventListener(r,i,xl&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Lr(e,r);return Ir(n)?Y(n.a):q});function C$(e,r){return mn(function(n){ui(function(){var t=document.getElementById(e);n(t?Xn(r(t)):ed(f0(e)))})})}function qd(e){return mn(function(r){ui(function(){r(Xn(e()))})})}v(function(e,r){return C$(r,function(n){return n[e](),ht})});v(function(e,r){return qd(function(){return Od.scroll(e,r),ht})});M(function(e,r,n){return C$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,ht})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Jd=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return Y(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var Yd=M(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var d=u[f];m[--f]=d?Y(d):q}t.push(P(mf,u[0],u.index,i,$(m))),c=r.lastIndex}return r.lastIndex=l,$(t)});ee(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var f=arguments[c];u[--c]=f?Y(f):q}return n(P(mf,l,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,$(i)});var Xd=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Kd(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Kd(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Sl=new Float64Array(3),jc=new Float64Array(3),Nc=new Float64Array(3),Zd=M(function(e,r,n){return new Float64Array([e,r,n])}),Qd=function(e){return e[0]},ep=function(e){return e[1]},rp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var np=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function L$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(L$);function P$(e,r,n){return n===void 0&&(n=new Float64Array(3)),$i(L$(e,r,n),n)}v(P$);function z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function $i(e,r){r===void 0&&(r=new Float64Array(3));var n=1/z$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var ap=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Na=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Na);function Fo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Fo);v(function(e,r){var n,t=Sl,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Na(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Na(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Na(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Na(r,t)+e[14])/n,i});var tp=ee(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var ip=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},op=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/lp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function lp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var cp=new Float64Array(16),up=new Float64Array(16),$p=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},vp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function M$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}yr(M$);ee(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return M$(l,c,o,i,n,t)});function T$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}yr(T$);ee(function(e,r,n,t){return T$(e,r,n,t,-1,1)});function k$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],m=e[7],d=e[8],b=e[9],s=e[10],x=e[11],_=e[12],S=e[13],C=e[14],w=e[15],T=r[0],G=r[1],Z=r[2],ae=r[3],te=r[4],ie=r[5],re=r[6],J=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],A=r[14],E=r[15];return n[0]=t*T+c*G+d*Z+_*ae,n[1]=i*T+u*G+b*Z+S*ae,n[2]=o*T+f*G+s*Z+C*ae,n[3]=l*T+m*G+x*Z+w*ae,n[4]=t*te+c*ie+d*re+_*J,n[5]=i*te+u*ie+b*re+S*J,n[6]=o*te+f*ie+s*re+C*J,n[7]=l*te+m*ie+x*re+w*J,n[8]=t*de+c*pe+d*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=l*de+m*pe+x*Me+w*Se,n[12]=t*me+c*Te+d*A+_*E,n[13]=i*me+u*Te+b*A+S*E,n[14]=o*me+f*Te+s*A+C*E,n[15]=l*me+m*Te+x*A+w*E,n}v(k$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],f=e[8],m=e[9],d=e[10],b=e[12],s=e[13],x=e[14],_=r[0],S=r[1],C=r[2],w=r[4],T=r[5],G=r[6],Z=r[8],ae=r[9],te=r[10],ie=r[12],re=r[13],J=r[14];return n[0]=t*_+l*S+f*C,n[1]=i*_+c*S+m*C,n[2]=o*_+u*S+d*C,n[3]=0,n[4]=t*w+l*T+f*G,n[5]=i*w+c*T+m*G,n[6]=o*w+u*T+d*G,n[7]=0,n[8]=t*Z+l*ae+f*te,n[9]=i*Z+c*ae+m*te,n[10]=o*Z+u*ae+d*te,n[11]=0,n[12]=t*ie+l*re+f*J+b,n[13]=i*ie+c*re+m*J+s,n[14]=o*ie+u*re+d*J+x,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=$i(r,Sl);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*u,n[2]=o*t*c-i*u,n[3]=0,n[4]=t*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+t*u,n[7]=0,n[8]=t*o*c+i*u,n[9]=i*o*c-t*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/z$(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),d=o*m,b=l*m,s=c*m,x=o*l*f,_=o*c*f,S=l*c*f,C=o*o*f+u,w=x+s,T=_-b,G=x-s,Z=l*l*f+u,ae=S+d,te=_+b,ie=S-d,re=c*c*f+u,J=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],A=n[7],E=n[8],B=n[9],V=n[10],R=n[11],U=n[12],j=n[13],N=n[14],je=n[15];return t[0]=J*C+Se*w+E*T,t[1]=de*C+me*w+B*T,t[2]=pe*C+Te*w+V*T,t[3]=Me*C+A*w+R*T,t[4]=J*G+Se*Z+E*ae,t[5]=de*G+me*Z+B*ae,t[6]=pe*G+Te*Z+V*ae,t[7]=Me*G+A*Z+R*ae,t[8]=J*te+Se*ie+E*re,t[9]=de*te+me*ie+B*re,t[10]=pe*te+Te*ie+V*re,t[11]=Me*te+A*ie+R*re,t[12]=U,t[13]=j,t[14]=N,t[15]=je,t});function fp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(fp);ee(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function mp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(mp);ee(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],u=t[3],f=t[4],m=t[5],d=t[6],b=t[7],s=t[8],x=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=s,i[9]=x,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=l*e+m*r+x*n+t[13],i[14]=c*e+d*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],f=r[3],m=r[4],d=r[5],b=r[6],s=r[7],x=r[8],_=r[9],S=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=s,n[8]=x,n[9]=_,n[10]=S,n[11]=C,n[12]=l*t+m*i+x*o+r[12],n[13]=c*t+d*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=P$(e,r,Sl),i=$i(Fo(n,t,jc),jc),o=$i(Fo(t,i,Nc),Nc),l=cp,c=up;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,k$(l,c)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var Hc=0;function rt(e,r){for(;r.b;r=r.b)e(r.a)}function Cl(e){for(var r=0;e.b;e=e.b)r++;return r}var sp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},dp=Je(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),pp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),gp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),hp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),bp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),_p=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),xp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),wp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),yp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Sp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Cp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Lp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Pp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},D$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},F$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},zp=function(e){e.gl.disable(e.gl.CULL_FACE)},Mp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Tp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},kp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Gc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Dp=[Cp,Lp,Pp,D$,F$,zp,Mp,Tp,kp];function Wc(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Fp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function I$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ip(e,r,n,t){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(s,x,_,S,C){var w;if(i===1)for(w=0;w<x;w++)s[_++]=x===1?S[C]:S[C][w];else o.forEach(function(T){for(w=0;w<x;w++)s[_++]=x===1?S[T][C]:S[T][C][w]})}var u=I$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,d=new u.type(Cl(n.b)*m);rt(function(s){c(d,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function Ap(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=Ep(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Cl(r.b),indexBuffer:null,buffers:{}}}function Ep(e,r){var n=new Uint32Array(Cl(e)*r),t=0,i;return rt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Oc(e,r){return e+"#"+r}var A$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),D$(n),F$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=Oc(o.b.id,o.c.id),c=n.programs[l]),!c){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Hc++,f||(f=Wc(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Hc++,m||(m=Wc(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=Fp(t,f,m);c={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Bp(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(d,u),x=t.getAttribLocation(d,s.name);c.activeAttributes.push(s),c.activeAttributeLocations.push(x)}l=Oc(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),Vp(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Ap(t,o.d),n.buffers.set(o.d,_)),u=0;u<c.activeAttributes.length;u++){s=c.activeAttributes[u],x=c.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=Ip(t,s,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=I$(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,w=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(x+T),t.vertexAttribPointer(x+T,S.size,S.baseType,!1,w,C*T)}for(n.toggle=!n.toggle,rt(F_(n),o.a),u=0;u<Gc.length;u++){var G=n[Gc[u]];G.toggle!==n.toggle&&G.enabled&&(Dp[u](n),G.enabled=!1,G.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return rt(i,e.g),r});function Bp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(s,x){var _=x.name,S=e.getUniformLocation(s,_);switch(x.type){case e.INT:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};case e.FLOAT:return function(w){o[_]!==w&&(e.uniform1f(S,w),o[_]=w)};case e.FLOAT_VEC2:return function(w){o[_]!==w&&(e.uniform2f(S,w[0],w[1]),o[_]=w)};case e.FLOAT_VEC3:return function(w){o[_]!==w&&(e.uniform3f(S,w[0],w[1],w[2]),o[_]=w)};case e.FLOAT_VEC4:return function(w){o[_]!==w&&(e.uniform4f(S,w[0],w[1],w[2],w[3]),o[_]=w)};case e.FLOAT_MAT4:return function(w){o[_]!==w&&(e.uniformMatrix4fv(S,!1,new Float32Array(w)),o[_]=w)};case e.SAMPLER_2D:var C=l++;return function(w){e.activeTexture(e.TEXTURE0+C);var T=c.textures.get(w);T||(T=w.ge(e),c.textures.set(w,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==w&&(e.uniform1i(S,C),o[_]=w)};case e.BOOL:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=u(i,b)}return f}function Vp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Rp=M(function(e,r,n){return bd(r,{g:n,f:{},h:e},Op,qp)}),Up=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),jp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Np=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Hp=v(function(e,r){e.contextAttributes.antialias=!0}),Gp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Wp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Op(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};rt(function(i){return a(D_,r,i)},e.h);var n=on.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),sp(function(){return a(A$,e,n)})):(n=on.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function qp(e,r){return r.f=e.f,A$(r)}var z=as,Vt=es,E$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var f=l.a;return h(Vt,e,c,f)}else{var u=l.a;return h(Vt,o,c,u)}});return h(Vt,o,h(Vt,e,r,i),t)}),Ll=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,u=h(e,t,i,h(Ll,e,r,l)),f=o;e=c,r=u,n=f;continue e}}),qc=function(e){return h(Ll,M(function(r,n,t){return a(z,L(r,n),t)}),D,e)},B$=1,Jp=2,V$=0,tr=function(e){return{$:1,a:e}},Pl=v(function(e,r){return{$:3,a:e,b:r}}),Jc=v(function(e,r){return{$:0,a:e,b:r}}),R$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},Yp=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},q={$:1},Xp=Ms,Kp=Ys,k=$$,ce=v(function(e,r){return a(Cs,e,ki(r))}),zl=v(function(e,r){return $(a(Ss,e,r))}),U$=function(e){return a(ce,`
    `,a(zl,`
`,e))},Ue=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),On=function(e){return h(Ue,v(function(r,n){return n+1}),0,e)},Zp=ts,Qp=M(function(e,r,n){e:for(;;)if(he(e,r)<1){var t=e,i=r-1,o=a(z,r,n);e=t,r=i,n=o;continue e}else return n}),qr=v(function(e,r){return h(Qp,e,r,D)}),j$=v(function(e,r){return h(Zp,e,a(qr,0,On(r)-1),r)}),Jr=Es,N$=function(e){var r=Jr(e);return 97<=r&&r<=122},H$=function(e){var r=Jr(e);return r<=90&&65<=r},e0=function(e){return N$(e)||H$(e)},r0=function(e){var r=Jr(e);return r<=57&&48<=r},n0=function(e){return N$(e)||H$(e)||r0(e)},mr=function(e){return h(Ue,z,D,e)},Ta=_s,a0=v(function(e,r){return`

(`+(k(e+1)+(") "+U$(t0(r))))}),t0=function(e){return a(i0,e,D)},i0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,l=e.b,t=function(){var _=Ta(n);if(_.$===1)return!1;var S=_.a,C=S.a,w=S.b;return e0(C)&&a(Xp,n0,w)}(),i=t?"."+n:"['"+(n+"']"),u=l,f=a(z,i,r);e=u,r=f;continue e;case 1:var o=e.a,l=e.b,c="["+(k(o)+"]"),u=l,f=a(z,c,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(ce,"",mr(r)):"Json.Decode.oneOf"}(),x=d+(" failed in the following "+(k(On(m))+" ways:"));return a(ce,`

`,a(z,x,a(j$,a0,m)))}else{var l=m.a,u=l,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ce,"",mr(r)):"!"}();default:var b=e.a,s=e.b,x=function(){return r.b?"Problem with the value at json"+(a(ce,"",mr(r))+`:

    `):`Problem with the given value:

`}();return x+(U$(a(Kp,4,s))+(`

`+b))}}),_r=32,Io=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ao=Ym,nt=ms,Ml=v(function(e,r){return Fc(r)/Fc(e)}),Ha=vs,at=nt(a(Ml,2,_r)),G$=P(Io,0,at,Ao,Ao),W$=Km,O$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var q$=ss,Eo=Xm,rr=v(function(e,r){return he(e,r)>0?e:r}),o0=function(e){return{$:0,a:e}},Tl=Zm,l0=v(function(e,r){e:for(;;){var n=a(Tl,_r,e),t=n.a,i=n.b,o=a(z,o0(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return mr(o)}}),J$=function(e){var r=e.a;return r},c0=v(function(e,r){e:for(;;){var n=nt(r/_r);if(n===1)return a(Tl,_r,e).a;var t=a(l0,e,D),i=n;e=t,r=i;continue e}}),Y$=v(function(e,r){if(r.n){var n=r.n*_r,t=q$(a(Ml,_r,n-1)),i=e?mr(r.C):r.C,o=a(c0,i,r.n);return P(Io,Eo(r.r)+n,a(rr,5,t*at),o,r.r)}else return P(Io,Eo(r.r),at,Ao,r.r)}),u0=Je(function(e,r,n,t,i){e:for(;;){if(r<0)return a(Y$,!1,{C:t,n:n/_r|0,r:i});var o=O$(h(W$,_r,r,e)),l=e,c=r-_r,u=n,f=a(z,o,t),m=i;e=l,r=c,n=u,t=f,i=m;continue e}}),$0=v(function(e,r){if(e<=0)return G$;var n=e%_r,t=h(W$,n,e-n,r),i=e-n-_r;return F(u0,r,i,e,D,t)}),Ir=function(e){return!e.$},Q=Ws,Pe=Us,K=Gs,We=js,X$=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),vi=Os,v0=qs,cr=Vs,kl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Br=function(e){return e},f0=Br,Yc=yr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),m0=Ts,Bn=xs,va=Ls,bt=v(function(e,r){return e<1?r:h(va,e,Bn(r),r)}),Di=Ds,Fi=function(e){return e===""},Ii=v(function(e,r){return e<1?"":h(va,0,e,r)}),K$=Fs,Xc=Je(function(e,r,n,t,i){if(Fi(i)||a(m0,"@",i))return q;var o=a(Di,":",i);if(o.b){if(o.b.b)return q;var l=o.a,c=K$(a(bt,l+1,i));if(c.$===1)return q;var u=c;return Y(ar(Yc,e,a(Ii,l,i),u,r,n,t))}else return Y(ar(Yc,e,i,q,r,n,t))}),Kc=ee(function(e,r,n,t){if(Fi(t))return q;var i=a(Di,"/",t);if(i.b){var o=i.a;return F(Xc,e,a(bt,o,t),r,n,a(Ii,o,t))}else return F(Xc,e,"/",r,n,t)}),Zc=M(function(e,r,n){if(Fi(n))return q;var t=a(Di,"?",n);if(t.b){var i=t.a;return P(Kc,e,Y(a(bt,i+1,n)),r,a(Ii,i,n))}else return P(Kc,e,q,r,n)});v(function(e,r){if(Fi(r))return q;var n=a(Di,"#",r);if(n.b){var t=n.a;return h(Zc,e,Y(a(bt,t+1,r)),a(Ii,t,r))}else return h(Zc,e,q,r)});var s0=ks,_t=function(e){},xt=Xn,d0=xt(0),Z$=ee(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,f=c.b;if(f.b){var m=f.a,d=f.b,b=n>500?h(Ue,e,r,mr(d)):P(Z$,e,r,n+1,d);return a(e,i,a(e,l,a(e,u,a(e,m,b))))}else return a(e,i,a(e,l,a(e,u,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),Qe=M(function(e,r,n){return P(Z$,e,r,0,n)}),ne=v(function(e,r){return h(Qe,v(function(n,t){return a(z,e(n),t)}),D,r)}),fi=To,Dl=v(function(e,r){return a(fi,function(n){return xt(e(n))},r)}),p0=M(function(e,r,n){return a(fi,function(t){return a(fi,function(i){return xt(a(e,t,i))},n)},r)}),g0=function(e){return h(Qe,p0(z),xt(D),e)},h0=cd,b0=v(function(e,r){var n=r;return m$(a(fi,h0(e),n))}),_0=M(function(e,r,n){return a(Dl,function(t){return 0},g0(a(ne,b0(e),r)))}),x0=M(function(e,r,n){return xt(0)}),w0=v(function(e,r){var n=r;return a(Dl,e,n)});Or.Task=od(d0,_0,x0,w0);var y0=d$("Task"),Fl=v(function(e,r){return y0(a(Dl,e,r))}),S0=Gd,C0=hs,mi={$:1},Q$=function(e){return{$:2,a:e}},Il={$:0},zr=v(function(e,r){return{$:0,a:e,b:r}}),Xe=M(function(e,r,n){return r(e(n))}),Kn=function(e){var r=e.b.s;return r.a},L0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return Y(a(zr,r,{s:o,an:l,X:a(z,t,n)}))}else return q},De=v(function(e,r){if(r.$)return e;var n=r.a;return n}),P0=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dH;return(he(o+r.gp,Kn(n).d1)>0?a(Xe,L0,De(a(zr,mi,i))):Br)(a(zr,Q$({dH:o+r.gp}),i));default:var l=i.s,c=l.a,u=l.b,f=a(X$,c.gb,Ve(r,{d1:c.d1+r.gp})),m=a(e,f,u);return a(zr,Il,{s:L(f,m),an:D,X:a(z,i.s,i.X)})}}),ev=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),z0=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(z,t,n);e=o,r=l,n=c;continue e}else return n}}),M0=v(function(e,r){return mr(h(z0,e,r,D))}),rv=M(function(e,r,n){if(r<=0)return D;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,w=i.a,o=i.b,l=o.a;return $([w,l]);case 3:if(t.b.b.b.b){var c=t.b,w=c.a,u=c.b,l=u.a,f=u.b,m=f.a;return $([w,l,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,w=d.a,b=d.b,l=b.a,s=b.b,m=s.a,x=s.b,_=x.a,S=x.b;return e>1e3?a(z,w,a(z,l,a(z,m,a(z,_,a(M0,r-4,S))))):a(z,w,a(z,l,a(z,m,a(z,_,h(rv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,w=C.a;return $([w])}}),T0=v(function(e,r){return h(rv,0,e,r)}),k0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=X(mr(n),X($([t]),i)),l=a(T0,e,o),c=a(ev,e,o);if(c.b){var u=c.a,f=c.b;return a(zr,mi,{s:u,an:f,X:mr(l)})}else{var m=mr(l);if(m.b){var d=m.a,b=m.b;return a(zr,mi,{s:d,an:D,X:b})}else return r}}),D0=function(e){var r=e.b;return a(zr,mi,r)},F0=function(e){var r=e.b;return a(zr,Q$({dH:Kn(e).d1}),r)},I0=function(e){var r=e.b;return a(zr,Il,r)},A0=v(function(e,r){switch(e.$){case 1:return D0(r);case 2:return I0(r);case 3:return F0(r);default:var n=e.a;return a(k0,n,r)}}),si=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),E0=v(function(e,r){return Ve(r,{aN:e(r.aN)})}),B0=function(e){return{$:3,a:e}},V0=function(e){return{$:2,a:e}},nv=v(function(e,r){return{$:0,a:e,b:r}}),av=v(function(e,r){return{$:1,a:e,b:r}}),Re=v(function(e,r){if(r.$)return q;var n=r.a;return Y(e(n))}),be=function(e){return e<0?-e:e},tv=Is,R0=M(function(e,r,n){return a(De,0/0,tv(a(e,r,n)))}),wt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),U0=ys,iv=function(e){return h(U0,z,D,e)},j0=v(function(e,r){var n=a(wt,function(t){return t!=="0"&&t!=="."},iv(r));return X(e&&n?"-":"",r)}),ve=$$,Bo=bs,ov=Bs,lv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Ta(n);if(t.$===1)return"01";var i=t.a;return a(Bo,"0",lv(i))}else{var o=Jr(r);return o>=48&&o<57?a(Bo,ov(o+1),n):"0"}},Vo=fs,N0=gs,Ai=function(e){return a(Bo,e,"")},cv=M(function(e,r,n){return e<=0?n:h(cv,e>>1,X(r,r),e&1?X(n,r):n)}),tt=v(function(e,r){return h(cv,e,r,"")}),Ro=M(function(e,r,n){return X(n,a(tt,e-Bn(n),Ai(r)))}),Uo=ws,uv=function(e){var r=a(zl,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},H0=function(e){var r=a(zl,"e",ve(be(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(De,0,K$(a(s0,"+",i)?a(bt,1,i):i)),l=uv(n),c=l.a,u=l.b,f=X(c,u),m=o<0?a(De,"0",a(Re,function(d){var b=d.a,s=d.b;return b+("."+s)},a(Re,si(Ai),Ta(X(a(tt,be(o),"0"),f))))):h(Ro,o+1,"0",f);return X(e<0?"-":"",m)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},G0=M(function(e,r,n){if(Vo(n)||N0(n))return ve(n);var t=n<0,i=uv(H0(be(n))),o=i.a,l=i.b,c=Bn(o)+r,u=X(a(tt,-c+1,"0"),h(Ro,c,"0",X(o,l))),f=Bn(u),m=a(rr,1,c),d=a(e,t,h(va,m,f,u)),b=h(va,0,m,u),s=d?Uo(a(De,"1",a(Re,lv,Ta(Uo(b))))):b,x=Bn(s),_=s==="0"?s:r<=0?X(s,a(tt,be(r),"0")):he(r,Bn(l))<0?h(va,0,x-r,s)+("."+h(va,x-r,x,s)):X(o+".",h(Ro,r,"0",l));return a(j0,t,_)}),$v=G0(v(function(e,r){var n=Ta(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Jr(i))})),W0=R0($v),O0=M(function(e,r,n){var t=a(Ml,10,be(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(W0,i,n)}),vv=ns,yt=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(vv,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return Y(t);default:var c=e,u=o;e=c,r=u;continue e}}}),fe=Je(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Xr={$:-2},wa=Je(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,d=t.d,b=t.e;return F(fe,0,r,n,F(fe,1,f,m,d,b),F(fe,1,o,l,c,u))}else return F(fe,e,o,l,F(fe,0,r,n,t,c),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var x=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return F(fe,0,f,m,F(fe,1,x,_,S,C),F(fe,1,r,n,b,i))}else return F(fe,e,r,n,t,i)}),jo=M(function(e,r,n){if(n.$===-2)return F(fe,0,e,r,Xr,Xr);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=a(vv,e,i);switch(u){case 0:return F(wa,t,i,o,h(jo,e,r,l),c);case 1:return F(fe,t,i,r,l,c);default:return F(wa,t,i,o,l,h(jo,e,r,c))}}),pa=M(function(e,r,n){var t=h(jo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return F(fe,1,i,o,l,c)}else{var u=t;return u}}),q0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},fv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var s=b.b,x=b.c,_=b.d,S=b.e,C=f.e;return F(fe,0,s,x,F(fe,1,n,t,F(fe,0,o,l,c,u),_),F(fe,1,m,d,S,C))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,l=w.c,c=w.d,u=w.e,T=e.e;T.a;var m=T.b,d=T.c,b=T.d,C=T.e;return F(fe,1,n,t,F(fe,0,o,l,c,u),F(fe,0,m,d,b,C))}else return e},Qc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,f=c.c,m=c.d,d=c.e,b=i.e,s=e.e;s.a;var x=s.b,_=s.c,S=s.d,C=s.e;return F(fe,0,o,l,F(fe,1,u,f,m,d),F(fe,1,n,t,b,F(fe,0,x,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,l=w.c,T=w.d,b=w.e,G=e.e;G.a;var x=G.b,_=G.c,S=G.d,C=G.e;return F(fe,1,n,t,F(fe,0,o,l,T,b),F(fe,0,x,_,S,C))}else return e},J0=Ti(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,f=o.d,m=o.e;return F(fe,n,c,u,f,F(fe,0,t,i,m,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var d=l.d;return d.a,Qc(r)}else break e;else return l.a,l.d,Qc(r);else break e;return r}}),Kt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(fe,r,n,t,Kt(i),c);var u=fv(e);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return F(wa,f,m,d,Kt(b),s)}else return Xr}else return F(fe,r,n,t,Kt(i),c)}else return Xr},Xa=v(function(e,r){if(r.$===-2)return Xr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(he(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(fe,n,t,i,a(Xa,e,o),l);var u=fv(r);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return F(wa,f,m,d,a(Xa,e,b),s)}else return Xr}else return F(fe,n,t,i,a(Xa,e,o),l);else return a(Y0,e,ml(J0,e,r,n,t,i,o,l))}),Y0=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(_e(e,t)){var c=q0(l);if(c.$===-1){var u=c.b,f=c.c;return F(wa,n,u,f,o,Kt(l))}else return Xr}else return F(wa,n,t,i,o,a(Xa,e,l))}else return Xr}),X0=v(function(e,r){var n=a(Xa,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return F(fe,1,t,i,o,l)}else{var c=n;return c}}),Rt=M(function(e,r,n){var t=r(a(yt,e,n));if(t.$)return a(X0,e,n);var i=t.a;return h(pa,e,i,n)}),K0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Rt,r,Re(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(av,L(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Rt,r,Re(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(nv,L(o,l),h(O0,o,l,n))}));case 3:var r=e.a,n=e.b;return a(Rt,r,Re(function(t){return t.$===3?B0(n):t}));default:var r=e.a,n=e.b;return a(Rt,r,Re(function(t){return t.$===2?V0(n):t}))}},Z0=function(e){return E0(K0(e))},Q0=v(function(e,r){return a(ne,Z0(e),r)}),eg=v(function(e,r){return Ve(r,{gb:a(Q0,e,r.gb)})}),rg=v(function(e,r){var n=r.a,t=r.b;return a(zr,n,Ve(t,{s:a(si,eg(e),t.s)}))}),No=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),ng=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(zr,t,Ve(i,{s:a(No,a(e,o.a,r),o)}))}),ag=ee(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Ve(t,{bw:!t.bw});case 2:var i=n.a;return Ve(t,{R:h(P0,e,i,t.R)});case 3:var o=n.a;return Ve(t,{bp:o});case 4:var l=n.a;return Ve(t,{R:a(rg,l,t.R)});case 5:var c=n.a;return Ve(t,{R:h(ng,r,c,t.R)});default:var u=n.a;return Ve(t,{R:a(A0,u,t.R)})}}),tg=v(function(e,r){return a(zr,Il,{s:L(e,r(e)),an:D,X:D})}),ig=ud,eu=ig(D),og=function(e){return{$:2,a:e}},di=Hs,ya=Ns,lg=sd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return cr({d1:l,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return cr({fJ:d,gd:m,d4:f,go:u,g4:c,hr:l,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",di(ya)))},a(K,"left",Pe))},a(K,"pressedKeys",di(ya)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return cr({d4:f,g$:u,ha:c,hy:l,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return cr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return cr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We))))),cg=function(e){return e.dN,lg(og)},ug=function(e){return{$:5,a:e}},$g={$:0},pi=v(function(e,r){return e}),vg=function(e){var r=e.b.s;return r.b},fg=function(e){return{$:1,a:e}},mg=fg,mv=function(e){return{$:8,a:e}},ye=mv,it=function(e){return{$:0,a:e}},St=M(function(e,r,n){return e(r(n))}),sg=a(St,it,pi),bn=sg,Ie=function(e){return{$:1,a:e}},nn=Ie,sv=v(function(e,r){return{$:9,a:e,b:r}}),qn={$:0},dv=v(function(e,r){return r.$===3?qn:a(sv,e,r)}),Ho=function(e){return a(dv,4,e)},p={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},Al=f$,kr=v(function(e,r){return a(bl,e,Al(r))}),Pr=kr("className"),br=function(e){return Ie(Pr(e))},pv=v(function(e,r){return{$:2,a:e,b:r}}),dg=v(function(e,r){return{$:1,a:e,b:r}}),er=function(e){return{$:0,a:e}},wr=2,pg={$:0},Zn=pg,gg={$:0},hg=p.fK+(" "+p.aw),bg=p.fK+(" "+p.gC),_g=p.fK+(" "+p.eY),xg=p.fK+(" "+p.eZ),wg=p.fK+(" "+p.af),yg=p.fK+(" "+p.hL),Sg=function(e){switch(e){case 0:return wg;case 1:return hg;case 2:return yg;case 3:return bg;case 4:return xg;default:return _g}},ru=function(e){return{$:1,a:e}},En={$:0},Go=function(e){return{$:1,a:e}},nu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return X(n,e);case 2:var t=r.a;return X(e,t);default:var n=r.a,t=r.b;return X(n,X(e,t))}}),au=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return X(a(ne,function(o){return L(e,o)},t),r);case 2:var i=n.a;return X(r,a(ne,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return X(a(ne,function(o){return L(e,o)},t),X(r,a(ne,function(o){return L(e,o)},i)))}}),Ut=4,Cg=function(e){return{$:0,a:e}},Lg=function(e){return{$:1,a:e}},we=function(e){return e>31?Lg(1<<e-32):Cg(1<<e)},gv=we(41),hv=we(40),bv=we(42),_v=we(43),Sa=sn("div"),El=Xr,xv=El,Gr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Gr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Gr(o))}},Ee=ds,Be=function(e){return k(Ee(e*255))},Bl=function(e){switch(e.$){case 0:return q;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Be(n)+("-"+(Be(t)+("-"+Be(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d;return Y("tfrm-"+(Be(l)+("-"+(Be(c)+("-"+(Be(u)+("-"+(Be(m)+("-"+(Be(d)+("-"+(Be(b)+("-"+(Be(x)+("-"+(Be(_)+("-"+(Be(S)+("-"+Be(C))))))))))))))))))))}},ot=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(ce,"-",a(ne,Gr,i.hB))+("-cols-"+(a(ce,"-",a(ne,Gr,i.ak))+("-space-x-"+(Gr(i.hP.a)+("-space-y-"+Gr(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var l=e.a,c=e.b,u=function(){switch(l){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ce," ",a(ne,function(m){var d=ot(m);if(d==="")return"";var b=d;return b+("-"+u)},c));default:var f=e.a;return a(De,"",Bl(f))}},Pg=v(function(e,r){var n=r;return h(pa,e,0,n)}),zg=v(function(e,r){var n=a(yt,e,r);return!n.$}),Mg=v(function(e,r){var n=r;return a(zg,e,n)}),wv=v(function(e,r){var n=r.a,t=r.b,i=ot(e);return a(Mg,i,n)?r:L(a(Pg,i,n),a(z,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),Ka=v(function(e,r){return{$:0,a:e,b:r}}),y=function(e){return"."+e},Tg=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(z,i,n)}),$n=v(function(e,r){return h(Qe,Tg(e),D,r)}),fa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ee(r*255))+(","+k(Ee(n*255))+(","+k(Ee(t*255))+(","+(ve(i)+")")))))},Wo=function(e){return a(ce," ",a($n,Br,$([e.ej?Y("inset"):q,Y(ve(e.eV.a)+"px"),Y(ve(e.eV.b)+"px"),Y(ve(e.a2)+"px"),Y(ve(e.bi)+"px"),Y(fa(e.b6))])))},yv=function(e){return $([a(Ka,y(p.ea)+":focus-within",a($n,Br,$([a(Re,function(r){return a(ue,"border-color",fa(r))},e.fW),a(Re,function(r){return a(ue,"background-color",fa(r))},e.fO),a(Re,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b6:r.b6,ej:!1,eV:a(No,Ha,a(si,Ha,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))]))),a(Ka,y(p.fK)+":focus .focusable, "+(y(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(y(p.fK)+" .focusable-thumb"))),a($n,Br,$([a(Re,function(r){return a(ue,"border-color",fa(r))},e.fW),a(Re,function(r){return a(ue,"background-color",fa(r))},e.fO),a(Re,function(r){return a(ue,"box-shadow",Wo({a2:r.a2,b6:r.b6,ej:!1,eV:a(No,Ha,a(si,Ha,r.eV)),bi:r.bi}))},e.hH),Y(a(ue,"outline","none"))])))])},Hr=function(e){return sn(h$(e))},Sv=v(function(e,r){return a(bl,Sd(e),b$(r))}),io=v(function(e,r){return{$:2,a:e,b:r}}),Vl=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),I=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),kg=v(function(e,r){return{$:3,a:e,b:r}}),Cv=$([0,1,2,3,4,5]),Dg=v(function(e,r){return r.b?h(Qe,z,r,e):e}),sr=function(e){return h(Qe,Dg,D,e)},ka=v(function(e,r){return sr(a(ne,e,r))}),Fg=function(e){switch(e){case 0:return y(p.gc);case 1:return y(p.b9);case 2:return y(p.cb);case 3:return y(p.bt);case 4:return y(p.ca);default:return y(p.ax)}},gi=function(e){switch(e){case 0:return y(p.fH);case 1:return y(p.fA);case 2:return y(p.dY);case 3:return y(p.dX);case 4:return y(p.fB);default:return y(p.fC)}},Ga=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(I,Fg(n),i),a(O,y(p.fK),$([a(I,gi(n),o)]))])};return Vl(a(ka,r,Cv))},tu=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(I,y(p.cZ),$([a(g,"z-index","0"),a(O,y(p.fQ),$([a(g,"z-index","-1")]))])),a(I,y(p.hG),$([a(O,y(p.Y),$([a(I,y(p.c$),$([a(g,"flex-grow","0")])),a(I,y(p.dP),$([a(g,"align-self","auto !important")]))]))])),a(O,y(p.c_),$([a(g,"height","auto")])),a(O,y(p.c$),$([a(g,"flex-grow","100000")])),a(O,y(p.dP),$([a(g,"width","100%")])),a(O,y(p.fv),$([a(g,"width","100%")])),a(O,y(p.dO),$([a(g,"align-self","flex-start")])),Ga(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(O,y(p.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Ig=function(e){var r=function(n){return $([a(O,y(p.fK),$([a(I,gi(n),e(n))]))])};return Vl(a(ka,r,Cv))},Ag=function(){return $([0,1,2,3,4,5])}(),Eg=$([a(pr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(pr,X(y(p.fK),X(y(p.hL),y(p.gN))),$([a(g,"display","block"),a(I,y(p.c$),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(I,y(p.dP),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(pr,y(p.fK)+":focus",$([a(g,"outline","none")])),a(pr,y(p.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(I,X(y(p.fK),y(p.c$)),$([a(g,"height","100%"),a(O,y(p.c$),$([a(g,"height","100%")]))])),a(O,y(p.gP),$([a(I,y(p.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(pr,y(p.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(I,y(p.hL),tu),Vl(function(e){return a(ne,e,Ag)}(function(e){switch(e){case 0:return a(I,y(p.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,y(p.c$),$([a(g,"height","auto")])),a(O,y(p.dP),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(I,y(p.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,y(p.c$),$([a(g,"height","auto")]))]));case 2:return a(I,y(p.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(I,y(p.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(I,y(p.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(I,y(p.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(pr,y(p.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(I,y(p.dQ),$([a(g,"flex-wrap","wrap")])),a(I,y(p.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(I,y(p.gf),$([a(g,"cursor","pointer")])),a(I,y(p.gg),$([a(g,"cursor","text")])),a(I,y(p.hn),$([a(g,"pointer-events","none !important")])),a(I,y(p.b4),$([a(g,"pointer-events","auto !important")])),a(I,y(p.a$),$([a(g,"opacity","0")])),a(I,y(p.aU),$([a(g,"opacity","1")])),a(I,y(X(p.gK,p.a$))+":hover",$([a(g,"opacity","0")])),a(I,y(X(p.gK,p.aU))+":hover",$([a(g,"opacity","1")])),a(I,y(X(p.gx,p.a$))+":focus",$([a(g,"opacity","0")])),a(I,y(X(p.gx,p.aU))+":focus",$([a(g,"opacity","1")])),a(I,y(X(p.cL,p.a$))+":active",$([a(g,"opacity","0")])),a(I,y(X(p.cL,p.aU))+":active",$([a(g,"opacity","1")])),a(I,y(p.fj),$([a(g,"transition",a(ce,", ",a(ne,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(I,y(p.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(I,y(p.hE),$([a(g,"overflow-x","auto"),a(I,y(p.af),$([a(g,"flex-shrink","1")]))])),a(I,y(p.hF),$([a(g,"overflow-y","auto"),a(I,y(p.aw),$([a(g,"flex-shrink","1")])),a(I,y(p.hL),$([a(g,"flex-shrink","1")]))])),a(I,y(p.f7),$([a(g,"overflow","hidden")])),a(I,y(p.f8),$([a(g,"overflow-x","hidden")])),a(I,y(p.f9),$([a(g,"overflow-y","hidden")])),a(I,y(p.dO),$([a(g,"width","auto")])),a(I,y(p.b1),$([a(g,"border-width","0")])),a(I,y(p.fX),$([a(g,"border-style","dashed")])),a(I,y(p.fY),$([a(g,"border-style","dotted")])),a(I,y(p.fZ),$([a(g,"border-style","solid")])),a(I,y(p.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(I,y(p.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(I,y(p.hL),tu),a(I,y(p.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,y(p.fK),$([a(g,"flex-basis","0%"),a(I,y(p.fu),$([a(g,"flex-basis","auto")])),a(I,y(p.et),$([a(g,"flex-basis","auto")]))])),a(O,y(p.c$),$([a(g,"align-self","stretch !important")])),a(O,y(p.ef),$([a(g,"align-self","stretch !important")])),a(O,y(p.dP),$([a(g,"flex-grow","100000")])),a(O,y(p.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+p.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,y(p.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,y(p.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([a(g,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return L($([a(g,"justify-content","flex-end")]),D);case 3:return L($([a(g,"justify-content","flex-start")]),D);case 4:return L($([a(g,"justify-content","center")]),D);default:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(I,y(p.hO),$([a(g,"justify-content","space-between")])),a(I,y(p.ci),$([a(g,"align-items","baseline")]))])),a(I,y(p.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,y(p.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(I,y(p.ee),$([a(g,"flex-basis","auto")]))])),a(O,y(p.c$),$([a(g,"flex-grow","100000")])),a(O,y(p.dP),$([a(g,"width","100%")])),a(O,y(p.fv),$([a(g,"width","100%")])),a(O,y(p.dO),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+p.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,y(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([a(g,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(g,"justify-content","center")]),D)}}),a(O,y(p.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(I,y(p.hO),$([a(g,"justify-content","space-between")]))])),a(I,y(p.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,y(p.fK),$([a(g,"width","100%")]))])),a(kg,L("display","grid"),$([L("display","grid")])),Ig(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(I,y(p.eY),$([a(g,"display","block"),a(O,y(p.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,y(p.fK+(gi(3)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),a(O,y(p.fK+(gi(2)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),Ga(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right"),a(I,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return L(D,$([a(g,"float","left"),a(I,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),a(I,y(p.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(I,y(p.gW),$([a(I,y(p.hL),$([a(g,"flex-basis","auto")]))])),a(I,y(p.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,y(p.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(I,y(p.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(I,y(p.cZ),$([a(g,"z-index","0"),a(O,y(p.fQ),$([a(g,"z-index","-1")]))])),a(io,y(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(io,y(p.eZ),$([a(g,"display","inline"),a(I,"::after",$([a(g,"content","none")])),a(I,"::before",$([a(g,"content","none")]))])),a(io,y(p.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(I,y(p.fu),$([a(g,"display","inline-block")])),a(I,y(p.gP),$([a(g,"display","flex")])),a(I,y(p.fQ),$([a(g,"display","flex")])),a(I,y(p.fy),$([a(g,"display","flex")])),a(I,y(p.fR),$([a(g,"display","flex")])),a(I,y(p.hh),$([a(g,"display","flex")])),a(I,y(p.hg),$([a(g,"display","flex")])),a(O,y(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,y(p.af),$([a(g,"display","inline")])),a(O,y(p.aw),$([a(g,"display","inline-flex")])),a(O,y(p.gC),$([a(g,"display","inline-grid")])),Ga(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right")]));case 3:return L(D,$([a(g,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),a(I,".hidden",$([a(g,"display","none")])),a(I,y(p.ia),$([a(g,"font-weight","100")])),a(I,y(p.h1),$([a(g,"font-weight","200")])),a(I,y(p.h5),$([a(g,"font-weight","300")])),a(I,y(p.h7),$([a(g,"font-weight","400")])),a(I,y(p.h6),$([a(g,"font-weight","500")])),a(I,y(p.h9),$([a(g,"font-weight","600")])),a(I,y(p.fV),$([a(g,"font-weight","700")])),a(I,y(p.h0),$([a(g,"font-weight","800")])),a(I,y(p.h2),$([a(g,"font-weight","900")])),a(I,y(p.g2),$([a(g,"font-style","italic")])),a(I,y(p.hU),$([a(g,"text-decoration","line-through")])),a(I,y(p.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(I,X(y(p.ih),y(p.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(I,y(p.ib),$([a(g,"font-style","normal")])),a(I,y(p.h3),$([a(g,"text-align","justify")])),a(I,y(p.cF),$([a(g,"text-align","justify-all")])),a(I,y(p.h$),$([a(g,"text-align","center")])),a(I,y(p.h8),$([a(g,"text-align","right")])),a(I,y(p.h4),$([a(g,"text-align","left")])),a(I,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),dn=function(e){return $([a(pr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(pr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},Bg=sr($([a(ne,function(e){return a(pr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(qr,0,6)),a(ne,function(e){return a(pr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(qr,8,32)),a(ne,function(e){return a(pr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(qr,0,24)),$([a(pr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(pr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),dn("zero"),dn("onum"),dn("liga"),dn("dlig"),dn("ordn"),dn("tnum"),dn("afrc"),dn("frac")])),Vg=`
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

`))),Rg=`
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
`,jg=`
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
`,Ng=`
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
`,Hg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(y(p.fK)+(y(p.af)+(" > "+(y(p.fK)+(" { flex-basis: auto !important; } "+(y(p.fK)+(y(p.af)+(" > "+(y(p.fK)+(y(p.b8)+(" { flex-basis: auto !important; }}"+(Rg+(Ug+(Ng+(jg+Vg))))))))))))))),ga=function(e){return a(ce,"",e)},la=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),ca=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return Ve(o,{aE:a(z,L(l,c),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,d=i.b;return Ve(o,{G:a(z,{b5:`
}`,G:D,aE:d,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Ve(o,{G:a(z,a(ca,a(la,n.ag+(" + "+b),""),s),o.G)});case 1:var x=i.a,_=i.b;return Ve(o,{G:a(z,a(ca,a(la,n.ag+(" > "+x),""),_),o.G)});case 2:var x=i.a,_=i.b;return Ve(o,{G:a(z,a(ca,a(la,n.ag+(" "+x),""),_),o.G)});case 4:var S=i.a,C=i.b;return Ve(o,{G:a(z,a(ca,a(la,X(n.ag,S),""),C),o.G)});default:var w=i.a;return Ve(o,{G:a(z,a(ca,a(la,n.ag,""),w),o.G)})}});return h(Qe,t,n,r)}),Gg=function(e){var r=function(i){return ga(a(ne,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return X(n(o),ga(a(ne,t,o.G)))};return ga(a(ne,t,h(Qe,v(function(i,o){var l=i.a,c=i.b;return a(z,a(ca,a(la,l,""),c),o)}),D,e)))},iu=X(Hg,Gg(X(Eg,Bg))),wn=ko,Lv=function(e){var r=e.eS;switch(r){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([wn(iu)]))]));case 1:return wn("");default:return h(Hr,"elm-ui-static-rules",$([a(Sv,"rules",Al(iu))]),D)}},Wg=v(function(e,r){return h(Ue,Qs(e),Xs(),r)}),Og=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(Zs,t,i,n)}),Ks(),e)},qg=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},Jg=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},Yg=function(e){if(e.$===5){var r=e.a;return a(wt,Jg,r.fo)}else return!1},ha=v(function(e,r){return he(e,r)<0?e:r}),Va=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Fe=ee(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Ue,Va(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Ue,Va(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Ue,Va(!1),"",t)+`
}`))])}case 0:var l=h(Ue,Va(!1),"",t);return $([n+("-fs:focus {"+(l+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(y(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(h(Ue,Va(!1),"",t)+`
}`))])}}),Xg=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},Kg=function(e){if(e.$===5){var r=e.a;return Y(a(ce,", ",a(ne,Xg,r.fo)))}else return q},Zg=function(e){switch(e.$){case 0:return q;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d,w="translate3d("+(ve(l)+("px, "+(ve(c)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(d)+(", "+(ve(b)+")"))))),G="rotate3d("+(ve(x)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(w+(" "+(T+(" "+G))))}},Rl=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(Fe,e,n,t,i);case 13:var u=r.a,b=r.b;return P(Fe,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,l=a(rr,0,a(ha,1,1-o));return P(Fe,e,n,"."+u,$([a(ue,"opacity",ve(l))]));case 2:var c=r.a;return P(Fe,e,n,".font-size-"+k(c),$([a(ue,"font-size",k(c)+"px")]));case 1:var u=r.a,f=r.b,m=a(ce,", ",a($n,Kg,f)),d=$([a(ue,"font-family",a(ce,", ",a(ne,qg,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(wt,Yg,f)?"small-caps":"normal")]);return P(Fe,e,n,"."+u,d);case 3:var se=r.a,b=r.b,Ki=r.c;return P(Fe,e,n,"."+se,$([a(ue,b,Ki)]));case 4:var se=r.a,b=r.b,s=r.c;return P(Fe,e,n,"."+se,$([a(ue,b,fa(s))]));case 5:var J=r.a,x=r.b,_=r.c,S=k(_)+"px",C=k(x)+"px",w="."+p.af,T="."+(p.dQ+w),pe="."+p.dY,G="."+p.eZ,Z="."+p.eY,Se="."+p.dX,ae=ve(_/2)+"px",te=ve(x/2)+"px",ie="."+p.aw,se="."+J,re="."+p.fK;return sr($([P(Fe,e,n,se+(w+(" > "+(re+(" + "+re)))),$([a(ue,"margin-left",C)])),P(Fe,e,n,se+(T+(" > "+re)),$([a(ue,"margin",ae+(" "+te))])),P(Fe,e,n,se+(ie+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),P(Fe,e,n,se+(Z+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),P(Fe,e,n,se+(Z+(" > "+Se)),$([a(ue,"margin-right",C)])),P(Fe,e,n,se+(Z+(" > "+pe)),$([a(ue,"margin-left",C)])),P(Fe,e,n,X(se,G),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),P(Fe,e,n,"textarea"+(re+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),P(Fe,e,n,se+(G+(" > "+Se)),$([a(ue,"margin-right",C)])),P(Fe,e,n,se+(G+(" > "+pe)),$([a(ue,"margin-left",C)])),P(Fe,e,n,se+(G+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),P(Fe,e,n,se+(G+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var J=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+J;return P(Fe,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var J=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+J;return P(Fe,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Ye,Ba,Kr){e:for(;;)switch(Kr.$){case 0:var Om=Kr.a;return k(Om)+"px";case 1:var Dr=L(Ye,Ba);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var Dn=Dr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Dr.b.$===1){var Fn=Dr.a.a;return Dr.b,"minmax("+(k(Fn)+"px, max-content)")}else{var Fn=Dr.a.a,Dn=Dr.b.a;return"minmax("+(k(Fn)+("px, "+(k(Dn)+"px)")))}case 2:var Dc=Kr.a,Fr=L(Ye,Ba);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(Dc)+"fr";Fr.a;var Dn=Fr.b.a;return"minmax(max-content, "+(k(Dn)+"px)")}else if(Fr.b.$===1){var Fn=Fr.a.a;return Fr.b,"minmax("+(k(Fn)+("px, "+(k(Dc)+"frfr)")))}else{var Fn=Fr.a.a,Dn=Fr.b.a;return"minmax("+(k(Fn)+("px, "+(k(Dn)+"px)")))}case 3:var Zi=Kr.a,Qi=Kr.b,eo=Y(Zi),ro=Ba,no=Qi;Ye=eo,Ba=ro,Kr=no;continue e;default:var Zi=Kr.a,Qi=Kr.b,eo=Ye,ro=Y(Zi),no=Qi;Ye=eo,Ba=ro,Kr=no;continue e}}),A=function(Ye){return h(Te,q,q,Ye)};A(me.hP.a);var E=A(me.hP.b),B=function(Ye){return"grid-template-rows: "+(Ye+";")}(a(ce," ",a(ne,A,me.hB))),V=function(Ye){return"-ms-grid-rows: "+(Ye+";")}(a(ce,E,a(ne,A,me.ak))),R=function(Ye){return"-ms-grid-columns: "+(Ye+";")}(a(ce,E,a(ne,A,me.ak))),U="grid-row-gap:"+(A(me.hP.b)+";"),j="grid-column-gap:"+(A(me.hP.a)+";"),N=function(Ye){return"grid-template-columns: "+(Ye+";")}(a(ce," ",a(ne,A,me.ak))),se=".grid-rows-"+(a(ce,"-",a(ne,Gr,me.hB))+("-cols-"+(a(ce,"-",a(ne,Gr,me.ak))+("-space-x-"+(Gr(me.hP.a)+("-space-y-"+Gr(me.hP.b))))))),Ji=se+("{"+(N+(B+(j+(U+"}"))))),Yi="@supports (display:grid) {"+(Ji+"}"),Xi=se+("{"+(R+(V+"}")));return $([Xi,Yi]);case 9:var je=r.a,At=a(ce," ",$(["-ms-grid-row: "+(k(je.af)+";"),"-ms-grid-row-span: "+(k(je.gH)+";"),"-ms-grid-column: "+(k(je.ga)+";"),"-ms-grid-column-span: "+(k(je.im)+";")])),qi=a(ce," ",$(["grid-row: "+(k(je.af)+(" / "+(k(je.af+je.gH)+";"))),"grid-column: "+(k(je.ga)+(" / "+(k(je.ga+je.im)+";")))])),se=".grid-pos-"+(k(je.af)+("-"+(k(je.ga)+("-"+(k(je.im)+("-"+k(je.gH))))))),Ji=se+("{"+(qi+"}")),Yi="@supports (display:grid) {"+(Ji+"}"),Xi=se+("{"+(At+"}"));return $([Xi,Yi]);case 11:var se=r.a,Hm=r.b,Gm=function(Ye){return h(Rl,e,Ye,Y(se))};return a(ka,Gm,Hm);default:var kc=r.a,Ki=Zg(kc),se=Bl(kc),Et=L(se,Ki);if(!Et.a.$&&!Et.b.$){var J=Et.a.a,Wm=Et.b.a;return P(Fe,e,n,"."+J,$([a(ue,"transform",Wm)]))}else return D}}),Qg=v(function(e,r){return Og(a(ne,function(n){var t=h(Rl,e,n,q);return L(ot(n),a(Wg,Al,t))},r))}),hi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ce,"",a(ne,n,r))+"}"))}),ou=M(function(e,r,n){var t=n.a,i=n.b;return $([a(hi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(hi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),eh=M(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(ce," ",X(h(ou,o,p.hM,i),h(ou,o,p.gy,t)))}),rh=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(ce," ",$([a(hi,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([L("line-height","1")])),a(hi,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),lu=M(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),Pv=v(function(e,r){return h(Qe,v(function(n,t){return e(n)?a(z,n,t):t}),D,r)}),nh=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Ue,rr,r,n))}else return q},cu=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Ue,ha,r,n))}else return q},uu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(De,e.gk,cu(r)),t=a(De,e.fP,cu(a(Pv,function(f){return!_e(f,n)},r))),i=a(De,e.f1,nh(r)),o=1/(i-t),l=1-i,c=1/(i-n),u=1-i;return{f1:h(lu,o,i-t,l),ec:h(lu,c,i-n,u)}},$u=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ve(e.gH)),L("vertical-align",ve(e.fp)+"em"),L("font-size",ve(e.bi)+"em")]))},ah=function(e){return h(Ue,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return Y(L($u(function(l){return l.ec}(uu(o))),$u(function(l){return l.f1}(uu(o)))))}else return n;else return n}),q,e)},th=function(e){var r=function(o){if(o.$===4){var l=o.b;return Y("@import url('"+(l+"');"))}else return q},n=function(o){o.a;var l=o.b,c=a(ce,`
`,a($n,r,l));return c},t=a(ne,J$,e),i=function(o){var l=o.a,c=o.b,u=ah(c);if(u.$===1)return a(ce,"",a(ne,rh(l),t));var f=u.a;return a(ce,"",a(ne,a(eh,l,f),t))};return X(a(ce,`
`,a(ne,n,e)),a(ce,`
`,a(ne,i,e)))},ih=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(L(r,n))}else return q},vu=v(function(e,r){var n=v(function(l,c){return{cB:X(c.cB,h(Rl,e,l,q)),bT:function(){var u=ih(l);if(u.$===1)return c.bT;var f=u.a;return a(z,f,c.bT)}()}}),t=h(Ue,n,{cB:D,bT:D},r),i=t.bT,o=t.cB;return X(th(i),ga(o))}),zv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([wn(a(vu,e,r))]))]));case 1:return h(Hr,"div",D,$([h(Hr,"style",D,$([wn(a(vu,e,r))]))]));default:return h(Hr,"elm-ui-rules",$([a(Sv,"rules",a(Qg,e,r))]),D)}}),fu=ee(function(e,r,n,t){var i=a(zv,r,h(Ue,wv,L(xv,yv(r.gx)),n).b);return e?a(z,L("static-stylesheet",Lv(r)),a(z,L("dynamic-stylesheet",i),t)):a(z,L("dynamic-stylesheet",i),t)}),mu=ee(function(e,r,n,t){var i=a(zv,r,h(Ue,wv,L(xv,yv(r.gx)),n).b);return e?a(z,Lv(r),a(z,i,t)):a(z,i,t)}),Oo=we(45),lt=we(37),Mv=function(e){return hd(h$(e))},oh=sn("p"),or=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),su=sn("s"),du=sn("u"),qo=we(44),ct=we(39),jt=yr(function(e,r,n,t,i,o){var l=v(function(u,f){if(t.$===1){var m=t.a;return h(Mv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return P(fu,!1,b,s,m);default:var b=i.a,s=i.b;return P(fu,!0,b,s,m)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return Sa;case"p":return oh;default:return Hr(u)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,s=i.b;return P(mu,!1,b,s,d);default:var b=i.a,s=i.b;return P(mu,!0,b,s,d)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var u=r.a;return a(l,u,n);default:var u=r.a,f=r.b;return h(Hr,u,n,$([a(l,f,$([Pr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return a(or,ct,e)&&!a(or,qo,e)?c:a(or,hv,e)?a(du,$([Pr(a(ce," ",$([p.fK,p.hL,p.b8,p.ax,p.fG])))]),$([c])):a(or,bv,e)?a(su,$([Pr(a(ce," ",$([p.fK,p.hL,p.b8,p.ax,p.fE])))]),$([c])):c;case 1:return a(or,lt,e)&&!a(or,Oo,e)?c:a(or,_v,e)?a(su,$([Pr(a(ce," ",$([p.fK,p.hL,p.b8,p.fF])))]),$([c])):a(or,gv,e)?a(du,$([Pr(a(ce," ",$([p.fK,p.hL,p.b8,p.fD])))]),$([c])):c;default:return c}}),gn=function(e){return!e.b},Ul=wn,lh=p.fK+(" "+(p.Y+(" "+(p.dO+(" "+p.c_))))),ut=function(e){return a(Sa,$([Pr(lh)]),$([Ul(e)]))},ch=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),pu=function(e){return a(Sa,$([Pr(ch)]),$([Ul(e)]))},uh=M(function(e,r,n){var t=v(function(x,_){var S=x.a,C=x.b,w=_.a,T=_.b;switch(C.$){case 0:var G=C.a;return _e(e,Ut),L(a(z,L(S,G(e)),w),T);case 1:var Z=C.a;return _e(e,Ut),L(a(z,L(S,a(Z.gL,En,e)),w),gn(T)?Z.hV:X(Z.hV,T));case 2:var ae=C.a;return L(a(z,L(S,_e(e,wr)?pu(ae):ut(ae)),w),T);default:return L(w,T)}}),i=v(function(x,_){var S=_.a,C=_.b;switch(x.$){case 0:var w=x.a;return _e(e,Ut),L(a(z,w(e),S),C);case 1:var T=x.a;return _e(e,Ut),L(a(z,a(T.gL,En,e),S),gn(C)?T.hV:X(T.hV,C));case 2:var G=x.a;return L(a(z,_e(e,wr)?pu(G):ut(G),S),C);default:return L(S,C)}});if(r.$===1){var o=r.a,l=h(Qe,t,L(D,D),o),c=l.a,u=l.b,f=gn(u)?n.hV:X(n.hV,u);if(f.b){var m=f;return Go({gL:P(jt,n.aR,n.aT,n.aJ,ru(h(au,"nearby-element-pls",c,n.aM))),hV:m})}else return it(F(jt,n.aR,n.aT,n.aJ,ru(h(au,"nearby-element-pls",c,n.aM)),En))}else{var d=r.a,b=h(Qe,i,L(D,D),d),s=b.a,u=b.b,f=gn(u)?n.hV:X(n.hV,u);if(f.b){var m=f;return Go({gL:P(jt,n.aR,n.aT,n.aJ,er(a(nu,s,n.aM))),hV:m})}else return it(F(jt,n.aR,n.aT,n.aJ,er(a(nu,s,n.aM)),En))}}),$r=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),$h=function(e){return{$:10,a:e}},bi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(bi,n,o|t)}else{var i=e.a;return a(bi,i|n,t)}}),gu=function(e){return{$:1,a:e}},Nt=v(function(e,r){return{$:3,a:e,b:r}}),hu=function(e){return{$:2,a:e}},vh=v(function(e,r){return a(Sa,$([Pr(function(){switch(e){case 0:return a(ce," ",$([p.be,p.hL,p.fy]));case 1:return a(ce," ",$([p.be,p.hL,p.fR]));case 2:return a(ce," ",$([p.be,p.hL,p.hh]));case 3:return a(ce," ",$([p.be,p.hL,p.hg]));case 4:return a(ce," ",$([p.be,p.hL,p.gP]));default:return a(ce," ",$([p.be,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return wn("");case 2:var n=r.a;return ut(n);case 0:var t=r.a;return t(wr);default:var i=r.a;return a(i.gL,En,wr)}}()]))}),fh=M(function(e,r,n){var t=a(vh,e,r);switch(n.$){case 0:return e===5?gu($([t])):hu($([t]));case 1:var i=n.a;return e===5?gu(a(z,t,i)):a(Nt,i,$([t]));case 2:var o=n.a;return e===5?a(Nt,$([t]),o):hu(a(z,t,o));default:var i=n.a,o=n.b;return e===5?a(Nt,a(z,t,i),o):a(Nt,i,a(z,t,o))}}),bu=v(function(e,r){return{$:2,a:e,b:r}}),hn=function(e){return{$:1,a:e}},In=v(function(e,r){switch(r.$){case 0:return hn(e);case 1:var n=r.a;return a(bu,n,e);default:var t=r.a,i=r.b;return a(bu,t,i)}}),mh=function(e){switch(e){case 0:return p.cM+(" "+p.dX);case 2:return p.cM+(" "+p.dY);default:return p.cM+(" "+p.fB)}},sh=function(e){switch(e){case 0:return p.cN+(" "+p.fH);case 2:return p.cN+(" "+p.fA);default:return p.cN+(" "+p.fC)}},Wa=v(function(e,r){return a(Vr,yd(e),b$(r))}),Ur=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),pn=function(e){return{$:1,a:e}},dh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return pn(H(u,0,0));case 1:var f=r.a;return pn(H(0,f,0));case 2:var m=r.a;return pn(H(0,0,m));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return P(Ur,H(0,0,0),H(1,1,1),n,s);default:var n=r.a;return P(Ur,H(0,0,0),n,H(0,0,1),0)}case 1:var c=e.a,u=c.a,f=c.b,m=c.c;switch(r.$){case 0:var t=r.a;return pn(H(t,f,m));case 1:var i=r.a;return pn(H(u,i,m));case 2:var o=r.a;return pn(H(u,f,o));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return P(Ur,c,H(1,1,1),n,s);default:var l=r.a;return P(Ur,c,l,H(0,0,1),0)}default:var c=e.a,u=c.a,f=c.b,m=c.c,d=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return P(Ur,H(t,f,m),d,b,s);case 1:var i=r.a;return P(Ur,H(u,i,m),d,b,s);case 2:var o=r.a;return P(Ur,H(u,f,o),d,b,s);case 3:var x=r.a;return P(Ur,x,d,b,s);case 4:var _=r.a,S=r.b;return P(Ur,c,d,_,S);default:var C=r.a;return P(Ur,c,C,b,s)}}}),aa=we(7),Tv=we(36),_u=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(bi,n|i,t|o)}),an=a(bi,0,0),Jo=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return H(an,p.ee+(" "+t),$([h($r,t,"height",n+"px")]));case 1:return H(a(ge,Tv,an),p.c_,D);case 2:var i=e.a;return i===1?H(a(ge,lt,an),p.c$,D):H(a(ge,lt,an),p.ef+(" height-fill-"+k(i)),$([h($r,p.fK+("."+(p.aw+(" > "+y("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h($r,f,"min-height",k(o)+"px !important"),l=Jo(u),b=l.a,s=l.b,x=l.c;return H(a(ge,Oo,b),f+(" "+s),a(z,m,x));default:var c=e.a,u=e.b,f="max-height-"+k(c),m=h($r,f,"max-height",k(c)+"px"),d=Jo(u),b=d.a,s=d.b,x=d.c;return H(a(ge,Oo,b),f+(" "+s),a(z,m,x))}},kv=we(38),Yo=function(e){switch(e.$){case 0:var r=e.a;return H(an,p.fu+(" width-px-"+k(r)),$([h($r,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return H(a(ge,kv,an),p.dO,D);case 2:var n=e.a;return n===1?H(a(ge,ct,an),p.dP,D):H(a(ge,ct,an),p.fv+(" width-fill-"+k(n)),$([h($r,p.fK+("."+(p.af+(" > "+y("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,l=e.b,c="min-width-"+k(t),u=h($r,c,"min-width",k(t)+"px"),i=Yo(l),m=i.a,d=i.b,b=i.c;return H(a(ge,qo,m),c+(" "+d),a(z,u,b));default:var o=e.a,l=e.b,c="max-width-"+k(o),u=h($r,c,"max-width",k(o)+"px"),f=Yo(l),m=f.a,d=f.b,b=f.c;return H(a(ge,qo,m),c+(" "+d),a(z,u,b))}},Ei=we(27),ph=v(function(e,r){if(_e(e,Ei))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return _e(i,l)&&_e(i,o)&&_e(i,c)&&i>=0&&i<=24;default:return!1}}),ta=we(6),xu=we(30),wu=we(29),gh=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var m=c.a,d=c.b;switch(m.$){case 0:var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 3:var _=m.a,b=m.b;if(a(or,_,n)){var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else{var A=b+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}case 1:var s=m.a,A=e,E=r,B=n,V=t,R=i,U=a(z,s,o),j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 4:var _=m.a,x=m.b;if(a(or,_,n)){var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else if(a(ph,_,x)){var A=ot(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else{var A=ot(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=a(z,x,i),U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}case 10:var _=m.a,S=m.b,A=e,E=r,B=a(ge,_,n),V=a(dh,t,S),R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 7:var C=m.a;if(a(or,ta,n)){var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else switch(C.$){case 0:var w=C.a,A=p.fu+(" width-px-"+k(w))+(" "+e),E=r,B=a(ge,ta,n),V=t,R=a(z,h($r,"width-px-"+k(w),"width",k(w)+"px"),i),U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 1:var A=e+(" "+p.dO),E=r,B=a(ge,kv,a(ge,ta,n)),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 2:var T=C.a;if(T===1){var A=e+(" "+p.dP),E=r,B=a(ge,ct,a(ge,ta,n)),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else{var A=e+(" "+(p.fv+(" width-fill-"+k(T)))),E=r,B=a(ge,ct,a(ge,ta,n)),V=t,R=a(z,h($r,p.fK+("."+(p.af+(" > "+y("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}default:var G=Yo(C),Z=G.a,ae=G.b,Te=G.c,A=e+(" "+ae),E=r,B=a(_u,Z,a(ge,ta,n)),V=t,R=X(Te,i),U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}case 8:var te=m.a;if(a(or,aa,n)){var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else switch(te.$){case 0:var w=te.a,ie=k(w)+"px",re="height-px-"+ie,A=p.ee+(" "+(re+(" "+e))),E=r,B=a(ge,aa,n),V=t,R=a(z,h($r,re,"height ",ie),i),U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 1:var A=p.c_+(" "+e),E=r,B=a(ge,Tv,a(ge,aa,n)),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 2:var T=te.a;if(T===1){var A=p.c$+(" "+e),E=r,B=a(ge,lt,a(ge,aa,n)),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else{var A=e+(" "+(p.ef+(" height-fill-"+k(T)))),E=r,B=a(ge,lt,a(ge,aa,n)),V=t,R=a(z,h($r,p.fK+("."+(p.aw+(" > "+y("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}default:var J=Jo(te),Z=J.a,ae=J.b,Te=J.c,A=e+(" "+ae),E=r,B=a(_u,Z,a(ge,aa,n)),V=t,R=X(Te,i),U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}case 2:var de=m.a;switch(de.$){case 0:var A=e,E=a(In,"main",r),B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 1:var A=e,E=a(In,"nav",r),B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 2:var A=e,E=a(In,"footer",r),B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 3:var A=e,E=a(In,"aside",r),B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 4:var pe=de.a;if(pe<=1){var A=e,E=a(In,"h1",r),B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else if(pe<7){var A=e,E=a(In,"h"+k(pe),r),B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else{var A=e,E=a(In,"h6",r),B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}case 9:var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 8:var A=e,E=r,B=n,V=t,R=i,U=a(z,a(Wa,"role","button"),o),j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 5:var Me=de.a,A=e,E=r,B=n,V=t,R=i,U=a(z,a(Wa,"aria-label",Me),o),j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 6:var A=e,E=r,B=n,V=t,R=i,U=a(z,a(Wa,"aria-live","polite"),o),j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;default:var A=e,E=r,B=n,V=t,R=i,U=a(z,a(Wa,"aria-live","assertive"),o),j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var qi=me.a;return X(i,qi.hV)}}(),A=e,E=r,B=n,V=t,R=Te,U=o,j=h(fh,Se,me,l),N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e;case 6:var je=m.a;if(a(or,xu,n)){var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else{var A=mh(je)+(" "+e),E=r,B=function(se){switch(je){case 1:return a(ge,bv,se);case 2:return a(ge,hv,se);default:return se}}(a(ge,xu,n)),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}default:var At=m.a;if(a(or,wu,n)){var A=e,E=r,B=n,V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}else{var A=sh(At)+(" "+e),E=r,B=function(se){switch(At){case 1:return a(ge,_v,se);case 2:return a(ge,gv,se);default:return se}}(a(ge,wu,n)),V=t,R=i,U=o,j=l,N=d;e=A,r=E,n=B,t=V,i=R,o=U,l=j,c=N;continue e}}}else{var u=Bl(t);if(u.$===1)return{aJ:a(z,Pr(e),o),aM:l,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(z,Pr(e+(" "+f)),o),aM:l,aR:n,aT:r,hV:a(z,$h(t),i)}}}),hh={$:0},bh=hh,ur=ee(function(e,r,n,t){return h(uh,e,t,gt(gh,Sg(e),r,an,bh,D,D,gg,mr(n)))}),tn=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),_h={fO:q,fW:q,hH:Y({a2:0,b6:P(tn,155/255,203/255,1,1),eV:L(0,0),bi:3})},xh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gK;return l.$===1?Ve(i,{gK:Y(o)}):i;case 1:var c=t.a,u=i.gx;return u.$===1?Ve(i,{gx:Y(c)}):i;default:var f=t.a,m=i.eS;return m.$===1?Ve(i,{eS:Y(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return _h;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(Qe,r,{gx:q,gK:q,eS:q},e))},wh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(wr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),wr);case 2:var i=r.a;return ut(i);default:return ut("")}}),yh=M(function(e,r,n){var t=xh(e),i=function(){var o=t.eS;return o===1?pv(t):dg(t)}();return a(wh,i,P(ur,wr,Zn,r,er($([n]))))}),$t=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Dv=v(function(e,r){return{$:1,a:e,b:r}}),Fv=function(e){return{$:2,a:e}},Sh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),oo=function(e){return{$:3,a:e}},Iv=we(8),Av=we(14),Ev=we(5),Bv=we(4),Ca=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Be(r)+("-"+(Be(n)+("-"+(Be(t)+("-"+Be(i))))))},Zt=zs,lo=Ps,Vv=v(function(e,r){return X(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ce,"-",lo(Zt(n)));case 4:var n=e.a;return e.b,a(ce,"-",lo(Zt(n)));default:var n=e.a.hc;return a(ce,"-",lo(Zt(n)))}}())}),Ch=function(){var e=$([oo("Open Sans"),oo("Helvetica"),oo("Verdana"),Sh]);return $([a(Ce,Iv,h($t,"bg-"+Ca(P(tn,1,1,1,0)),"background-color",P(tn,1,1,1,0))),a(Ce,Av,h($t,"fc-"+Ca(P(tn,0,0,0,1)),"color",P(tn,0,0,0,1))),a(Ce,Bv,Fv(20)),a(Ce,Ev,a(Dv,h(Ue,Vv,"font-",e),e))])}(),Lh=M(function(e,r,n){var t=e.hl;return h(yh,t,a(z,br(a(ce," ",$([p.hA,p.fK,p.hL]))),X(Ch,r)),n)}),Rv={$:3},Uv=function(e){return{$:2,a:e}},Xo=_d,jv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Go({gL:v(function(o,l){return a(Xo,e,a(n.gL,o,l))}),hV:n.hV});case 0:var t=r.a;return it(a(St,Xo(e),t));case 2:var i=r.a;return Uv(i);default:return Rv}}),jl=jv,Ph=Xo,zh=function(e){return{$:0,a:e}},ke=zh,Mh=wd,hr=Mh,Nv={$:1},Bi=function(e){return{$:5,a:e}},Hv=Bi(0),Rr=M(function(e,r,n){return P(tn,e/255,r/255,n/255,1)}),Gv=h(Rr,0,0,0),Th=Vr("d"),kh=Vr("fill"),Dh=Vr("height"),Wv=p$("http://www.w3.org/2000/svg"),Fh=Wv("path"),Ih=Wv("svg"),Ah=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Eh=function(e){var r=Ah(e);return"rgba("+(k(Ee(r.hu*255))+(","+k(Ee(r.gA*255))+(","+k(Ee(r.fS*255))+(","+ve(r.fI)+")"))))},Bh=Vr("viewBox"),Vh=Vr("width"),ma=M(function(e,r,n){return a(Ih,$([Bh("0 0 100 100"),Vh(k(e)),Dh(k(e))]),$([a(Fh,$([Th(n),kh(Eh(r))]),D)]))}),Rh={$:1},dr=Rh,Ov=function(e){return{$:7,a:e}},le=Ov,Le=v(function(e,r){return P(ur,wr,Zn,a(z,le(dr),a(z,ye(dr),e)),er($([r])))}),qv=function(e){return{$:2,a:e}},xe=qv(1),Vn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ba={c3:260,bE:54},ln=function(e){return a(Ce,Iv,h($t,"bg-"+Ca(e),"background-color",e))},Uh=we(28),yn=function(e){return a(Ce,Uh,h($t,"bc-"+Ca(e),"border-color",e))},Qt=1,Mr=v(function(e,r){return P(ur,Qt,Zn,a(z,br(p.gc+(" "+p.bt)),a(z,ye(dr),a(z,le(dr),e))),er(r))}),jh=h(Rr,83,83,83),Jv=ee(function(e,r,n,t){return P(tn,e/255,r/255,n/255,t)}),Vi=P(Jv,56,56,56,.25),qe=Rv,vt=Je(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),ft=we(2),Rn=function(e){var r=e;return a(Ce,ft,F(vt,"p-"+k(e),r,r,r,r))},Yv=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Xv=we(3),Kv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Sn=function(e){return a(Ce,Xv,h(Yv,a(Kv,e,e),e,e))},Nh=P(Jv,0,0,0,0),Hh=function(e){return{$:4,a:e}},Ko=0,Tn=v(function(e,r){return P(ur,Ko,Zn,a(z,br(p.bt+(" "+p.ax)),a(z,le(dr),a(z,ye(dr),e))),er(r))}),Gh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(pv,{gx:{fO:q,fW:q,hH:q},gK:1,eS:0},n.hV));case 2:var t=e.a;return pi(wn(t));default:return pi(wn(""))}},Wh=v(function(e,r){return Gh(e(r))}),Oh=xd,qh=v(function(e,r){return it(h(Oh,Wh,e,r))}),Cn=function(e){return a(Ce,Av,h($t,"fc-"+Ca(e),"color",e))},Nl=h(Rr,195,195,195),kn=v(function(e,r){return{$:3,a:e,b:r}}),Zv=we(13),Jh=a(kn,Zv,p.h7),Yh=we(20),Qv=a(kn,Yh,p.hF),Qn=function(e){return a(Ce,Bv,Fv(e))},Hl=a(kn,Zv,p.fV),Zo=v(function(e,r){if(r.$===-2)return Xr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return F(fe,n,t,a(e,t,i),a(Zo,e,o),a(Zo,e,l))}),ef=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,ft,F(vt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,ft,F(vt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Ln=function(e){return Uv(e)},Xh=function(e){return h(Ll,M(function(r,n,t){return a(z,n,t)}),D,e)},Kh=v(function(e,r){return{$:3,a:e,b:r}}),Zh=v(function(e,r){return{$:2,a:e,b:r}}),Qh=v(function(e,r){return{$:0,a:e,b:r}}),e3=v(function(e,r){return{$:1,a:e,b:r}}),Ct=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),r3=P(Ct,0/255,0/255,0/255,1),Ri=function(e){return{$:6,a:e}},n3=Ri(0),Ui=function(e){return{$:2,a:e}},a3={$:6},rf=Ui(a3),nf=M(function(e,r,n){if(r.$===1)return r.a,P(ur,Qt,hn("label"),e,er($([n])));var t=r.a,i=r.b,o=r.c,l=P(ur,wr,Zn,i,er($([o])));switch(t){case 2:return P(ur,Qt,hn("label"),a(z,br(p.ci),e),er($([l,n])));case 3:return P(ur,Qt,hn("label"),a(z,br(p.ci),e),er($([n,l])));case 0:return P(ur,Ko,hn("label"),a(z,br(p.ci),e),er($([n,l])));default:return P(ur,Ko,hn("label"),a(z,br(p.ci),e),er($([l,n])))}}),Qo=Wa,vn=Bi(1),af="Enter",t3=function(e){return{$:5,a:e}},tf=function(e){if(e.$===1){var r=e.a;return Ui(t3(r))}else return qn},of=function(e){return e.$===1},i3=function(e){return{$:0,a:e}},Gl=g$,o3=v(function(e,r){return a(Gl,e,i3(r))}),lf=function(e){return a(o3,"click",cr(e))},l3=Rs,c3=function(e){return{$:2,a:e}},u3=v(function(e,r){return a(Gl,e,c3(r))}),cf=function(e){var r=function(t){var i=e(t);if(i.$===1)return l3("No key matched");var o=i.a;return cr(o)},n=a(Q,r,a(K,"key",ya));return Ie(a(u3,"keydown",a(vi,function(t){return L(t,!0)},n)))},$3=we(21),Un=a(kn,$3,p.gf),uf=" ",$f=function(e){return a(Vr,"tabIndex",k(e))},v3=a(St,Ie,$f),f3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bI,l=X($([of(n)?qn:Sn(6),Ie(lf(o(!i))),rf,cf(function(c){return _e(c,af)||_e(c,uf)?Y(o(!i)):q}),v3(0),Un,n3,le(xe)]),e);return h(nf,a(z,Ie(a(Qo,"role","checkbox")),a(z,Ie(a(Qo,"aria-checked",i?"true":"false")),a(z,tf(n),l))),n,P(ur,wr,Zn,$([vn,ye(xe),le(dr)]),er($([t(i)]))))}),m3=M(function(e,r,n){return X(a(tt,e-Bn(n),Ai(r)),n)}),_i=os,vf=function(e){var r=function(n){return n<10?k(n):Ai(ov(87+n))};return e<16?r(e):X(vf(e/16|0),r(a(_i,16,e)))},s3=a(Xe,vf,a(m3,2,"0")),Wl=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},d3=function(e){var r=Wl(e),n=r.hu,t=r.gA,i=r.fS;return a(ce,"",a(z,"#",a(ne,a(Xe,Ee,s3),$([n*255,t*255,i*255]))))},Ol=we(12),ff=a(kn,Ol,p.h$),el=Ri(1),Jn=ls,xi=function(e){return e*Jn/180},p3=function(e){return{$:1,a:e}},ql=v(function(e,r){return{$:10,a:e,b:r}}),g3=we(26),h3=function(e){return a(ql,g3,p3(-e))},sa=M(function(e,r,n){return P(tn,e,r,n,1)}),b3=tn,_3=v(function(e,r){return{$:4,a:e,b:r}}),x3=we(24),w3=function(e){return a(ql,x3,a(_3,H(0,0,1),e))},y3=we(17),jn=function(e){return a(Ce,y3,h($r,"br-"+k(e),"border-radius",k(e)+"px"))},S3=function(e){return ga($([e.ej?"box-inset":"box-",Be(e.eV.a)+"px",Be(e.eV.b)+"px",Be(e.a2)+"px",Be(e.bi)+"px",Ca(e.b6)]))},C3=we(19),L3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,C3,h($r,S3(r),"box-shadow",Wo(r)))},yu=v(function(e,r){return{$:12,a:e,b:r}}),Su=we(0),P3=function(e){return e?a(Ce,Su,a(yu,"transparent",1)):a(Ce,Su,a(yu,"visible",0))},co=h(sa,1,1,1),Jl=Je(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),ji=function(e){return a(Ce,Ei,F(Jl,"b-"+k(e),e,e,e,e))},z3=v(function(e,r){return a(Ce,Ei,F(Jl,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Lt=function(e){var r=e.b2,n=e.cH,t=e.g4,i=e.hx;return _e(n,r)&&_e(t,i)?_e(n,i)?ji(n):a(z3,t,n):a(Ce,Ei,F(Jl,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},M3=function(e){return a(Le,$([br("focusable"),le(ke(14)),ye(ke(14)),Cn(co),vn,Qn(9),ff,jn(3),yn(e?h(sa,59/255,153/255,252/255):h(sa,211/255,211/255,211/255)),L3({a2:1,b6:e?P(b3,238/255,238/255,238/255,0):h(sa,238/255,238/255,238/255),eV:L(0,0),bi:1}),ln(e?h(sa,59/255,153/255,252/255):co),ji(e?0:1),Ho(a(Le,$([yn(co),ye(ke(6)),le(ke(9)),w3(xi(-45)),el,vn,h3(1),P3(!e),Lt({b2:2,g4:2,hx:0,cH:0})]),qe))]),qe)},T3=kr("htmlFor"),rl=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),wi=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return e(n)}}),mf=ee(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),k3=Yd,D3=As,F3=v(function(e,r){if(r.$)return tr(e);var n=r.a;return Ge(n)}),I3=Jd,A3=function(e){return a(I3,{f2:!1,hb:!1},e)},Ni=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return q},E3=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return Ge(e(n))}}),B3=function(e){return{$:2,a:e}},V3=function(e){return{$:0,a:e}},R3=function(e){return{$:1,a:e}},uo=v(function(e,r){return Jr(r)-Jr(e)}),$o=M(function(e,r,n){var t=Jr(n);return he(Jr(e),t)<1&&he(t,Jr(r))<1}),U3=v(function(e,r){var n=function(i){return he(i,e)<0?Ge(i):tr(R3(r))},t=h($o,"0","9",r)?Ge(a(uo,"0",r)):h($o,"a","z",r)?Ge(10+a(uo,"a",r)):h($o,"A","Z",r)?Ge(10+a(uo,"A",r)):tr(V3(r));return a(wi,n,t)}),sf=v(function(e,r){var n=Ta(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(wi,function(l){return a(wi,function(c){return Ge(l+c*e)},a(sf,e,o))},a(U3,e,i))}),j3=v(function(e,r){return 2<=e&&e<=36?a(sf,e,Uo(r)):tr(B3(e))}),N3=j3(16),H3=M(function(e,r,n){return P(Ct,e,r,n,1)}),G3=ee(function(e,r,n,t){return P(Ct,e,r,n,t)}),Pt=is,W3=v(function(e,r){var n=a(Pt,10,e);return Ee(r*n)/n}),O3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=iv(n);if(t.b&&!t.b.b){var i=t.a;return D3($([i,i]))}else return n};return a(Xe,Zt,a(Xe,function(n){return a(Re,function(t){return h(k3,1,t,n)},A3(e))},a(Xe,rl(Ni),a(Xe,Re(function(n){return n.hW}),a(Xe,Re($n(Br)),a(Xe,F3("Parsing hex regex failed"),wi(function(n){var t=a(ne,a(Xe,r,a(Xe,N3,E3(Ha))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,u=c.a.a,f=c.b,m=f.a.a;return Ge(P(G3,i/255,l/255,u/255,a(W3,2,m/255)))}else break e;else{var i=t.a.a,d=t.b,l=d.a.a,b=d.b,u=b.a.a;return Ge(h(H3,i/255,l/255,u/255))}else break e;return tr("Parsing ints from hex failed")})))))))}(),q3=kr("id"),J3=sn("input"),Y3=sn("label"),df=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),X3=df(0),K3=kr("name"),Z3=function(e){return L(e,!0)},Q3=function(e){return{$:1,a:e}},eb=v(function(e,r){return a(Gl,e,Q3(r))}),rb=v(function(e,r){return h(Qe,K,r,e)}),nb=a(rb,$(["target","value"]),ya),pf=function(e){return a(eb,"input",a(vi,Z3,a(vi,e,nb)))},ab=a(kn,Ol,p.h4),gf=a(kn,Ol,p.h8),Yl=function(e){return a(dv,5,e)},Xl=function(e){return a(Ce,Ev,a(Dv,h(Ue,Vv,"ff-",e),e))},tb=h(Rr,195,195,195),hf=h(Rr,69,69,69),ib=df(2),ob={$:2},Kl=ob,lb=we(32),cb=we(31),Cu=function(e){return h(Qe,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return q;else{var t=n.a;return Y(t)}}),q,e)},ub=v(function(e,r){return a(De,r,h(Qe,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return Y(L(i,l))}else return q;else{var i=t.a;return Y(i)}}),q,e))}),Lu=function(e){return h(Qe,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return q;else{var t=n.a;return Y(t)}}),q,e)},$b=we(33),vb=kr("max"),fb=kr("min"),mb=v(function(e,r){return a(Ce,Xv,h(Yv,a(Kv,e,r),e,r))}),sb=function(e){return a(kr,"step",e)},bf=kr("type"),_f=kr("value"),La=qv,db=Ld,xf=v(function(e,r){switch(r.$){case 0:return qn;case 2:var n=r.a;return Ui(n);case 6:var t=r.a;return Ri(t);case 5:var i=r.a;return Bi(i);case 7:var t=r.a;return Ov(t);case 8:var t=r.a;return mv(t);case 3:var t=r.a,i=r.b;return a(kn,t,i);case 4:var o=r.a,l=r.b;return a(Ce,o,l);case 9:var c=r.a,u=r.b;return a(sv,c,a(jv,e,u));case 1:var f=r.a;return Ie(a(db,e,f));default:var m=r.a,d=r.b;return a(ql,m,d)}}),pb=M(function(e,r,n){return a(Tn,$([le(xe),ye(a(De,xe,n)),vn]),$([a(Le,$([le(La(Ee(e*1e4)))]),qe),a(Le,a(z,vn,a(ne,xf(_t),r)),qe),a(Le,$([le(La(Ee(be(1-e)*1e4)))]),qe)]))}),gb=M(function(e,r,n){return a(Mr,$([ye(xe),le(a(De,xe,n)),el]),$([a(Le,$([ye(La(Ee(be(1-e)*1e4)))]),qe),a(Le,a(z,el,a(ne,xf(_t),r)),qe),a(Le,$([ye(La(Ee(e*1e4)))]),qe)]))}),wf=v(function(e,r){var n=Lu(e),t=Cu(e),i=function(){var C=L(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var w=C.a.a.a,T=C.b.a.a;return he(T,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),l=r.ic,c=l,u=Cu(c),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Lu(c),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(d+("-"+f)),s=$([a(ue,"width",d),a(ue,"height",f)]),x=a(ub,e,L(5,5)),_=x.a,S=x.b;return h(nf,$([of(r.em)?qn:a(mb,_,S),rf,le(function(){if(n.$===1)return xe;if(n.a.$){var C=n.a;return C}else return dr}()),ye(function(){if(t.$===1)return dr;if(t.a.$){var C=t.a;return C}else return dr}())]),r.em,a(Tn,$([le(a(De,xe,n)),ye(a(De,ke(20),t))]),$([P(ur,wr,hn("input"),$([tf(r.em),a(Ce,lb,a(Ka,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,$b,a(Ka,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,cb,a(Ka,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ie(Pr(b+" ui-slide-bar focusable-parent")),Ie(pf(function(C){var w=tv(C);if(w.$===1)return r.bI(0);var T=w.a;return r.bI(T)})),Ie(bf("range")),Ie(sb(function(){var C=r.cE;if(C.$===1)return"any";var w=C.a;return ve(w)}())),Ie(fb(ve(r.cr))),Ie(vb(ve(r.cq))),Ie(_f(ve(r.cI))),i?Ie(a(Qo,"orient","vertical")):qn,le(i?a(De,ke(20),t):a(De,xe,n)),ye(i?a(De,xe,n):a(De,ke(20),t))]),er(D)),a(Le,a(z,le(a(De,xe,n)),a(z,ye(a(De,ke(20),t)),X(e,$([Yl(i?h(gb,o,a(z,br("focusable-thumb"),c),n):h(pb,o,a(z,br("focusable-thumb"),c),t))])))),qe)])))}),hb=h(sa,.5,.5,.5),yf=Br,Pu=function(e){var r=e.c2,n=e.cI,t=e.cr,i=e.cq,o=e.cE,l=e.bI;return a(Le,$([le(xe)]),a(wf,$([Sn(2),Yl(a(Le,$([le(xe),ye(ke(16)),vn,ln(hf),jn(4)]),qe))]),{em:a(ib,D,a(Tn,$([le(xe)]),$([a(Le,$([ab]),Ln(r)),a(Le,$([le(xe),gf,Xl($([Kl]))]),Ln(ve(n)))]))),cq:i,cr:t,bI:l,cE:Y(o),ic:yf($([le(ke(12)),ye(ke(12)),jn(4),ji(0),yn(hb),ln(tb)])),cI:n}))},bb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),_b=v(function(e,r){switch(r.$){case 3:var l=r.a;return a(f3,D,{f6:l,gM:M3,em:a(X3,D,Ln(e)),bI:Kh(e)});case 0:var n=r.a,i=n.a,o=n.b,l=r.b;return Pu({c2:e,cq:o,cr:i,bI:Qh(e),cE:.001*(o-i),cI:l});case 1:var t=r.a,i=t.a,o=t.b,l=r.b;return Pu({c2:e,cq:o,cr:i,bI:a(Xe,Ee,e3(e)),cE:1,cI:l});default:var l=r.a;return a(Le,$([le(xe)]),bn(a(Sa,D,$([a(Sa,$([a(hr,"margin-bottom","6px")]),$([a(Y3,$([T3(e)]),$([Ul(e)]))])),a(J3,$([bf("color"),a(hr,"width","100%"),a(hr,"height","26px"),a(hr,"padding","0px"),q3(e),K3(e),pf(function(c){return a(Zh,e,a(bb,r3,O3(c)))}),_f(d3(l))]),D)]))))}}),nl=h(Rr,255,255,255),xb=function(e){return a(Mr,$([le(xe),Sn(8),a(ef,0,14),Lt({b2:1,g4:0,hx:0,cH:0}),yn(Vi)]),$([a(Le,$([Qn(16),Hl,Cn(nl)]),Ln(e.hc)),a(Mr,$([le(xe),Sn(6)]),Xh(a(Zo,_b,e.aN)))]))},wb=function(e){return a(Mr,$([le(xe),ye(xe),Cn(Nl),Qn(12),Jh,Qv]),a(ne,xb,e))},yb=qh(wb),Sb=function(e){return a(Mr,$([le(xe),ye(xe)]),$([a(Tn,$([Sn(14),le(xe)]),D),a(jl,Hh,yb(Kn(e).gb))]))},Cb=function(e){return{$:6,a:e}},Lb=ee(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Pb=function(e){var r=e.cH,n=e.hx,t=e.b2,i=e.g4;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,ft,F(vt,"p-"+k(r),o,o,o,o))}else return a(Ce,ft,F(vt,P(Lb,r,n,t,i),r,n,t,i))},zb=function(e){return{$:0,a:e}},Mb=function(e){return{$:1,a:e}},Tb=Mb,kb=function(e){var r=e.b.X;return On(r)},yi=h(Rr,255,60,0),Db=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return On(r)+1+On(n)},Fb=function(e){var r=L(kb(e),Db(e)-1),n=r.a,t=r.b;return a(Le,$([le(xe),vn]),a(wf,$([Yl(a(Tn,$([le(xe),ye(ke(4)),vn,ln(hf),jn(2)]),$([a(Le,$([le(La(n)),ye(xe),ln(yi),jn(2)]),qe),a(Le,$([le(La(t-n))]),qe)])))]),{em:Tb(""),cq:t,cr:0,bI:a(Xe,Ee,zb),cE:Y(1),ic:yf($([le(ke(12)),ye(ke(12)),jn(6),ln(yi)])),cI:n}))},Ib=Ri(2),ei=h(Rr,220,220,220),Ab=function(e){var r=e.a,n=function(){return r.$?$([Cn(ei)]):$([Cn(yi)])}();return a(Le,X(n,$([Qn(14),Ib,gf,Xl($([Kl]))])),Ln(a($v,3,Kn(e).d1)))},Eb=function(e){e.a;var r=e.b.X;return a(Re,function(n){return Ee(60/(Kn(e).d1-n))},a(Re,a(Xe,J$,function(n){return n.d1}),Ni(a(ev,59,r))))},Bb=function(e){var r=Eb(e);if(r.$===1)return qe;var n=r.a;return a(Le,$([Qn(14),Cn(Nl),Xl($([Kl]))]),Ln(k(n)+" FPS"))},zu={$:1},Vb={$:3},Rb={$:2},Ub={$:8},jb=f$,Nb=v(function(e,r){return a(bl,e,jb(r))}),Hb=Nb("disabled"),Gb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Wb=function(e){return a(wt,Gb,e)?qn:br("focusable")},Si=a(St,Ie,lf),Sf=v(function(e,r){var n=r.eW,t=r.em;return P(ur,wr,Zn,a(z,le(dr),a(z,ye(dr),a(z,br(p.ca+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),a(z,Un,a(z,Wb(e),a(z,Ui(Ub),a(z,Ie($f(0)),function(){if(n.$===1)return a(z,Ie(Hb(!0)),e);var i=n.a;return a(z,Si(i),a(z,cf(function(o){return _e(o,af)||_e(o,uf)?Y(i):q}),e))}()))))))),er($([t])))}),Mu=v(function(e,r){return a(Sf,D,{em:a(Le,$([le(ke(36)),Rn(3),Cn(r),ff,Qn(12),Hl,yn(r),ji(1),jn(4)]),Ln("REC")),eW:Y(e)})}),Tu=M(function(e,r,n){return a(Sf,D,{em:bn(h(ma,20,n,e)),eW:Y(r)})}),Ob=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Tn,D,$([a(Le,$([le(ke(40))]),function(){switch(r.$){case 0:return a(Mu,zu,yi);case 1:return a(Mu,Rb,ei);default:return qe}}()),a(Le,$([le(ke(28))]),function(){switch(r.$){case 0:return qe;case 1:return gn(n)?qe:h(Tu,Vn.hp,Vb,ei);default:return h(Tu,Vn.ho,zu,ei)}}())]))},qb=function(e){return a(Mr,$([le(xe)]),$([Fb(e),a(Tn,$([le(xe),Sn(14),a(ef,0,6),vn]),$([Ob(e),Bb(e),Ab(e)]))]))},Jb=function(e){return a(Mr,$([le(xe),Sn(14),Pb({b2:20,g4:0,hx:0,cH:0}),Lt({b2:1,g4:0,hx:0,cH:0}),yn(Vi)]),$([a(Le,$([Qn(16),Hl,Cn(Nl)]),Ln("Time Travel")),a(jl,Cb,qb(e))]))},Yb=v(function(e,r){return a(Mr,$([Kn(r).dC.im>600?ln(jh):ln(Nh),Lt({b2:0,g4:0,hx:1,cH:0}),yn(Vi),le(ke(ba.c3)),ye(xe)]),$([function(){return e?qe:a(Mr,$([le(xe),ye(xe),Rn(14),Sn(14)]),$([Jb(r),Sb(r)]))}()]))}),Xb=function(e){return{$:3,a:e}},ku=Bi(2),Kb=h(Rr,232,78,50),Zb=h(Rr,48,48,48),Qb=function(e){return a(kr,"href",Cd(e))},e1=Vr("rel"),r1=kr("target"),Du=v(function(e,r){var n=r.fn,t=r.em;return P(ur,wr,hn("a"),a(z,Ie(Qb(n)),a(z,Ie(e1("noopener noreferrer")),a(z,Ie(r1("_blank")),a(z,le(dr),a(z,ye(dr),a(z,br(p.ca+(" "+(p.ax+(" "+p.et)))),e)))))),er($([t])))}),Oa=kr("title"),n1=h(Rr,31,161,242),a1=function(e){var r=M(function(o,l,c){var u=_e(l,e)?nl:Zb;return a(Le,$([nn(Oa(o)),Si(Xb(l)),Un,Rn(7)]),bn(h(ma,40,u,c)))}),n=a(Mr,$([Hv]),$([h(r,"Configurations",0,Vn.hN)])),t=a(Mr,D,$([a(Du,$([nn(Oa("Twitter")),ku,Un,Rn(7)]),{em:bn(h(ma,40,n1,Vn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(Du,$([nn(Oa("Source Code")),ku,Un,Rn(7)]),{em:bn(h(ma,40,Kb,Vn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([le(ke(ba.bE)),Rn(4),Si(Nv),Lt({b2:1,g4:0,hx:0,cH:0}),yn(Vi),Un,nn(Oa("Activate Distraction Free Mode"))]),bn(h(ma,46,nl,Vn.fx)));return a(Mr,$([le(ke(ba.bE)),ye(xe),Qv,ln(Gv)]),$([i,n,t]))},t1=function(e){var r=a(Le,$([le(ke(ba.bE)),Hv,Rn(4),Si(Nv),Un,nn(Oa("Deactivate Distraction Free Mode (A)"))]),bn(h(ma,46,Gv,Vn.fx)));return e.bw?r:a(Tn,$([le(ke(ba.bE+ba.c3)),ye(xe)]),$([a1(e.bp),a(Yb,e.bp,e.R)]))},i1=M(function(e,r,n){var t=vg(n.R),i=Kn(n.R);return h(Lh,{hl:$([mg({fO:q,fW:q,hH:q})])},$([le(ke(nt(i.dC.im))),ye(ke(nt(i.dC.gH))),nn(a(hr,"-webkit-font-smoothing","antialiased")),nn(a(hr,"pointer-events","none")),nn(a(hr,"touch-action","none")),nn(a(hr,"user-select","none")),Ho(a(jl,ug,a(r,i,t))),Ho(t1(n))]),bn(a(Ph,pi($g),a(e,i,t))))}),o1=yr(function(e,r,n,t,i,o){var l=v(function(u,f){return L(P(ag,r,o,u,f),eu)}),c=function(u){var f=a(X$,n,u.gY);return L({bp:0,bw:!0,R:a(tg,f,t),dN:0},eu)};return S0({gS:c,hX:cg,ii:l,ik:a(i1,e,i)})}),l1=ee(function(e,r,n,t){return ar(o1,e,r,n,t,v(function(i,o){return qe}),M(function(i,o,l){return l}))}),c1=function(e){return{}},u1=M(function(e,r,n){return{aN:n,g0:r,hc:e}}),$1=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(pa,t,i,n)}),El,e)},v1=M(function(e,r,n){return h(u1,e,r,$1(n))}),vo=v1,Zr=M(function(e,r,n){var t=r.a,i=r.b;return L(e,a(nv,L(t,i),n))}),Fu=M(function(e,r,n){var t=r.a,i=r.b;return L(e,a(av,L(t,i),n))}),f1=$([h(vo,"Camera",!0,$([h(Zr,"camera x",L(0,16),8),h(Zr,"camera y",L(0,10),0),h(Zr,"camera z",L(0,16),6)])),h(vo,"Parameters",!0,$([h(Zr,"radius",L(0,6),1),h(Fu,"number of cubes",L(1,100),19),h(Fu,"number of waves",L(1,20),2),h(Zr,"cube size",L(.1,4),1),h(Zr,"cycle duration",L(1,10),5),h(Zr,"wave height",L(.5,6),1.5)])),h(vo,"Colors and light",!0,$([h(Zr,"saturation",L(0,1),.8),h(Zr,"lightness",L(0,1),.7)]))]),m1=v(function(e,r){return r}),Zl=v(function(e,r){return{$:0,a:e,b:r}}),xr=function(e){var r=e;return be(r)},fo=v(function(e,r){var n=e,t=r;return he(t,n)>-1}),mo=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),cn=v(function(e,r){var n=e,t=r;return t-n}),un=function(e){return e},s1=un({io:-1,is:0,dU:0}),d1=un({io:0,is:-1,dU:0}),Cf=un({io:0,is:0,dU:-1}),Lf=un({io:1,is:0,dU:0}),Ql=un({io:0,is:1,dU:0}),ec=un({io:0,is:0,dU:1}),fn=function(e){return e},Ke=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),p1=yr(function(e,r,n,t,i,o){var l=a(fo,n,o)?ec:Cf,c=a(fo,r,i)?Ql:d1,u=a(fo,e,t)?Lf:s1,f=H(xr(a(cn,e,t)),xr(a(cn,r,i)),xr(a(cn,n,o))),m=h(Ke,a(mo,e,t),a(mo,r,i),a(mo,n,o)),d=fn({dl:m,dS:u,dT:c,dV:l});return{fN:d,a4:f}}),Nn=function(e){var r=e;return r.io},Hn=function(e){var r=e;return r.is},Gn=function(e){var r=e;return r.dU},g1=v(function(e,r){return ar(p1,Nn(e),Hn(e),Gn(e),Nn(r),Hn(r),Gn(r))}),al=M(function(e,r,n){return{io:e,is:r,dU:n}}),h1=v(function(e,r){var n=r/2;return a(Zl,e,a(g1,h(al,-n,-n,-n),h(al,n,n,n)))}),b1=v(function(e,r){return a(Re,function(n){if(n.$)return 0;var t=n.b;return t},a(yt,e,r.aN))}),_1=v(function(e,r){return a(De,0,Ni(a($n,b1(e),r)))}),x1=v(function(e,r){return a(_1,e,r.gb)}),rn=x1,w1=v(function(e,r){return a(Re,function(n){if(n.$===1){var t=n.b;return t}else return 0},a(yt,e,r.aN))}),y1=v(function(e,r){return a(De,0,Ni(a($n,w1(e),r)))}),S1=v(function(e,r){return a(y1,e,r.gb)}),Iu=S1,rc=function(e){return{$:5,a:e}},C1=function(e){return rc(e)},L1=ee(function(e,r,n,t){var i=H(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,f=c*2-u,m=function(x){var _=x<0?x+1:x>1?x-1:x;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},d=m(o-1/3),b=m(o),s=m(o+1/3);return P(Ct,s,b,d,t)}),P1=M(function(e,r,n){return P(L1,e,r,n,1)}),tl=function(e){return{$:0,a:e}},Pf=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),zf=M(function(e,r,n){return he(n,e)<0?e:he(n,r)>0?r:n}),so=function(e){return h(zf,0,1,e<=.04045?e/12.92:a(Pt,(e+.055)/1.055,2.4))},zt=Zd,z1=function(e){var r=Wl(e),n=r.hu,t=r.gA,i=r.fS;return h(zt,so(n),so(t),so(i))},M1=function(e){return h(Pf,0,tl(z1(e)),tl(0))},Mf=v(function(e,r){return{$:2,a:e,b:r}}),Tf=v(function(e,r){return{$:4,a:e,b:r}}),kf=v(function(e,r){return{$:3,a:e,b:r}}),Df=v(function(e,r){return{$:1,a:e,b:r}}),T1=M(function(e,r,n){return{io:e,is:r,dU:n}}),k1=function(e){var r=e;return r},nc=function(e){var r=e;return k1(r.fN)},ac=function(e){var r=e;return r.a4},Da=function(e){var r=e;return r.dl},Mt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dU:t.dU+n.dU}}),ea=function(e){var r=e;return r.dS},ra=function(e){var r=e;return r.dT},na=function(e){var r=e;return r.dV},D1=v(function(e,r){return fn({dl:a(Mt,e,Da(r)),dS:ea(r),dT:ra(r),dV:na(r)})}),F1=v(function(e,r){return{fN:a(D1,e,nc(r)),a4:ac(r)}}),tc=v(function(e,r){return{gm:r,dl:e}}),I1=v(function(e,r){var n=r;return a(tc,a(Mt,e,n.dl),n.gm)}),A1=v(function(e,r){var n=r;return{m:a(I1,e,n.m),g5:n.g5,hs:n.hs}}),ic=function(e){var r=e;return r},E1=function(e){return e},Ff=v(function(e,r){var n=ic(r),t=n.a,i=n.b;return E1(L(e(t),e(i)))}),B1=v(function(e,r){return a(Ff,Mt(e),r)}),oc=function(e){var r=e;return r.f4},lc=function(e){var r=e;return r.hs},If=v(function(e,r){return{f4:r,hs:xr(e)}}),V1=v(function(e,r){return a(If,lc(r),a(Mt,e,oc(r)))}),Af=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return H(e(t),e(i),e(o))}),R1=v(function(e,r){return a(Af,Mt(e),r)}),cc=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(T1,n,t,i);switch(r.$){case 0:var m=r.a,l=r.b;return a(Zl,m,a(F1,o,l));case 1:var m=r.a,c=r.b;return a(Df,m,a(R1,o,c));case 3:var m=r.a,u=r.b;return a(kf,m,a(V1,o,u));case 2:var m=r.a,f=r.b;return a(Mf,m,a(A1,o,f));case 4:var m=r.a,d=r.b;return a(Tf,m,a(B1,o,d));default:var b=r.a;return rc(a(ne,cc(H(n,t,i)),b))}}),U1=function(e){return cc(H(0,e,0))},j1=function(e){return cc(H(0,0,e))},mt=function(e){return e},Yn=cs,Pa=us,ri=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Yn(l),u=Pa(l),f=t.gm,m=f,d=m.io*u,b=c*d,s=d*d,x=m.is*u,_=c*x,S=d*x,C=x*x,w=1-2*(s+C),T=m.dU*u,G=c*T,Z=2*(S-G),ae=2*(S+G),te=d*T,ie=2*(te+_),re=2*(te-_),J=x*T,de=2*(J-b),pe=2*(J+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+Z*o.is+ie*o.dU,is:ae*o.io+me*o.is+de*o.dU,dU:re*o.io+pe*o.is+w*o.dU}}),Tt=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Yn(l),u=Pa(l),f=t.dl,m=f,d=o.io-m.io,b=o.is-m.is,s=o.dU-m.dU,x=t.gm,_=x,S=_.io*u,C=c*S,w=S*S,T=_.is*u,G=c*T,Z=S*T,ae=T*T,te=1-2*(w+ae),ie=_.dU*u,re=c*ie,J=2*(Z-re),de=2*(Z+re),pe=S*ie,Me=2*(pe+G),Se=2*(pe-G),me=T*ie,Te=2*(me-C),A=2*(me+C),E=ie*ie,B=1-2*(ae+E),V=1-2*(w+E);return{io:m.io+B*d+J*b+Me*s,is:m.is+de*d+V*b+Te*s,dU:m.dU+Se*d+A*b+te*s}}),N1=M(function(e,r,n){return fn({dl:h(Tt,e,r,Da(n)),dS:h(ri,e,r,ea(n)),dT:h(ri,e,r,ra(n)),dV:h(ri,e,r,na(n))})}),H1=M(function(e,r,n){return{fN:h(N1,e,r,nc(n)),a4:ac(n)}}),G1=v(function(e,r){var n=a(Tt,e,r),t=a(ri,e,r);return function(i){var o=i;return a(tc,n(o.dl),t(o.gm))}}),W1=M(function(e,r,n){var t=n;return{m:h(G1,e,r,t.m),g5:t.g5,hs:t.hs}}),O1=M(function(e,r,n){return a(Ff,a(Tt,e,r),n)}),q1=M(function(e,r,n){return a(If,lc(n),h(Tt,e,r,oc(n)))}),J1=M(function(e,r,n){return a(Af,a(Tt,e,r),n)}),Ef=M(function(e,r,n){switch(n.$){case 0:var c=n.a,t=n.b;return a(Zl,c,h(H1,e,r,t));case 1:var c=n.a,i=n.b;return a(Df,c,h(J1,e,r,i));case 3:var c=n.a,o=n.b;return a(kf,c,h(q1,e,r,o));case 2:var c=n.a,l=n.b;return a(Mf,c,h(W1,e,r,l));case 4:var c=n.a,u=n.b;return a(Tf,c,h(O1,e,r,u));default:var f=n.a;return rc(a(ne,a(Ef,e,r),f))}}),kt={io:0,is:0,dU:0},uc=Ql,Y1=a(tc,kt,uc),X1=v(function(e,r){return h(Ef,Y1,mt(e),r)}),K1=v(function(e,r){return(r-q$(r/e)*e)/e}),Z1=function(e){return 2*Jn*e},Q1=ee(function(e,r,n,t){return e+(r-e)*(1+Yn(Z1(a(K1,n,t))))/2}),e_=function(e){var r=a(rn,"wave height",e),n=a(Iu,"number of waves",e),t=a(Iu,"number of cubes",e),i=a(rn,"cycle duration",e),o=function(l){var c=l/t,u=n*i*c;return a(X1,xi(360)*c,a(U1,P(Q1,-r,r,i,e.d1+u),a(j1,a(rn,"radius",e),a(h1,M1(h(P1,c,a(rn,"saturation",e),a(rn,"lightness",e))),a(rn,"cube size",e)))))};return C1(a(ne,o,a(qr,0,t-1)))},qa=function(e){return mt(Jn*(e/180))},_n=ps,r_=v(function(e,r){var n=e,t=r,i=t.dU-n.dU,o=t.is-n.is,l=t.io-n.io,c=a(rr,be(l),a(rr,be(o),be(i)));if(c){var u=i/c,f=o/c,m=l/c,d=_n(m*m+f*f+u*u);return Y({io:m/d,is:f/d,dU:u/d})}else return q}),po=function(e){return e},$c=v(function(e,r){var n=e,t=r;return{io:t.is*n.dU-t.dU*n.is,is:t.dU*n.io-t.io*n.dU,dU:t.io*n.is-t.is*n.io}}),ni=function(e){var r=e,n=a(rr,be(r.io),a(rr,be(r.is),be(r.dU)));if(n){var t=r.dU/n,i=r.is/n,o=r.io/n,l=_n(o*o+i*i+t*t);return Y({io:o/l,is:i/l,dU:t/l})}else return q},Ci=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dU:t.dU-n.dU}}),n_=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dU*n.dU}),Bf=v(function(e,r){var n=e,t=r;return he(t,n)>0}),a_=v(function(e,r){var n=e,t=r;return he(t,n)<0}),t_=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dU:t.dU-n.dU}}),i_=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dU*n.dU;return{io:n.io*i,is:n.is*i,dU:n.dU*i}}),o_=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},Er=0,Vf={io:0,is:0,dU:0},l_=M(function(e,r,n){return a(rl,function(t){var i=a(t_,a(i_,t,r),r);return a(rl,function(o){var l=a($c,r,e),c=a(n_,n,l),u=a(Bf,Er,c)?l:a(a_,Er,c)?o_(l):Vf;return a(Re,function(f){return H(t,o,f)},ni(u))},ni(i))},ni(e))}),c_=function(e){var r=e,n=be(r.dU),t=be(r.is),i=be(r.io);if(he(i,t)<1)if(he(i,n)<1){var o=_n(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=_n(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if(he(t,n)<1){var o=_n(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=_n(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},vc=function(e){var r=c_(e),n=r,t=n,i=e,o=i,l={io:o.is*t.dU-o.dU*t.is,is:o.dU*t.io-o.io*t.dU,dU:o.io*t.is-o.is*t.io};return L(r,l)},da=function(e){var r=e;return r},u_=v(function(e,r){var n=vc(e),t=n.a,i=n.b;return fn({dl:r,dS:t,dT:i,dV:e})}),$_=function(e){var r=a(Ci,e.ba,e.d9),n=da(e.fm),t=a($c,r,n),i=h(l_,r,n,t);if(i.$){var f=ni(r);if(f.$){var d=vc(e.fm),b=d.a,s=d.b;return fn({dl:e.d9,dS:s,dT:e.fm,dV:b})}else{var m=f.a;return a(u_,m,e.d9)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return fn({dl:e.d9,dS:u,dT:c,dV:l})}},v_=function(e){return{$:0,a:e}},ai=function(e){var r=e;return .5*r},f_=$s,m_=function(e){var r=e;return f_(r)},s_=function(e){var r=ai(xr(e.fq)),n=m_(r);return{dw:v_(n),dM:e.dM}},d_=function(e){var r=e.ba,n=e.d9,t=e.fm;return s_({fq:qa(40),dM:$_({d9:po(n),ba:po(r),fm:a(De,Ql,a(r_,kt,po(t)))})})},p_=function(e){return e},Wn=function(e){return e},g_=function(e){return Wn(.01*e)},Au=function(e){return e},h_=function(e){return e},b_=function(e){return{$:0,a:e}},__=b_,x_={$:3},w_=x_,y_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),S_=y_,C_=function(e){return{$:1,a:e}},L_=C_,P_=function(e){return a(Vr,"height",k(e))},z_=Mv,M_=function(e){return{$:2,a:e}},T_=M_,k_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Ee(c*1e3)/1e3},l=function(c){return Ee(c*1e4)/100};return ga($(["rgba(",ve(l(r)),"%,",ve(l(n)),"%,",ve(l(t)),"%,",ve(o(i)),")"]))},D_=v(function(e,r){switch(r.$){case 0:return a(Up,e,r);case 1:return a(jp,e,r);case 2:return a(Np,e,r);case 3:return a(Hp,e,r);case 4:return a(Gp,e,r);default:return a(Wp,e,r)}}),F_=v(function(e,r){switch(r.$){case 0:return a(pp,e,r);case 1:return a(gp,e,r);case 2:return a(hp,e,r);case 3:return a(bp,e,r);case 4:return a(_p,e,r);case 5:return a(xp,e,r);case 6:return a(wp,e,r);case 7:return a(yp,e,r);default:return Sp(e)}}),I_=M(function(e,r,n){return h(Rp,e,r,n)}),Eu=function(e){var r=e;return r},Fa=tp,go=P(Fa,1,1,1,1),jr=M(function(e,r,n){return a(ne,function(t){return a(t,r,n)},e)}),A_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),E_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(A_,n*t/i,n,n*(1-t-i)/i)}),B_=function(e){var r=e.a,n=e.b,t=e.c;return h(zt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},fc=v(function(e,r){return B_(a(E_,e,r))}),Rf=v(function(e,r){return{ek:_e(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Wr=$p,V_=function(e){return Wr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},ho=Je(function(e,r,n,t,i){var o=t.ek?1:-1,l=P(Fa,t.cC,t.cC,t.cC,o);return ar(i,e,l,V_(t),t.ek,r,n)}),Uf=yr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,f=r,m=n,d=a(Rf,l,t),b=c,s=o;e=u,r=f,n=m,t=d,i=b,o=s;continue e;case 1:var x=i.b,_=a(z,F(ho,e,r,n,t,x),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(z,F(ho,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var w=i.a,T=a(z,F(ho,e,r,n,t,w),o.hI);return{P:o.P,_:o._,hI:T};default:var G=i.a;return h(Ue,P(Uf,e,r,n,t),o,G)}}),R_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),jf=R_,mc=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),U_=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(mc,518,r,n,t)},j_=v(function(e,r){return{$:6,a:e,b:r}}),N_=j_,Nf=$([U_({ab:1,ac:0,ai:!1}),P(jf,!1,!1,!1,!1),a(N_,0,1)]),za=519,sc=8,Hf=15,_a=7681,H_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ae=dp,G_=v(function(e,r){return{$:0,a:e,b:r}}),W_=G_({d5:1,ei:0,eS:5}),gr=Xd,O_=W_($([{cx:a(gr,-1,-1)},{cx:a(gr,1,-1)},{cx:a(gr,-1,1)},{cx:a(gr,1,1)}])),q_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},J_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f,k:m}}}}}}}}}}}},dc=M(function(e,r,n){var t=e.dx,i=e.dc,o=e.dR,l=v(function(f,m){var d=f;return m(d)}),c=v(function(f,m){var d=f;return m(d)}),u=function(f){return a(Xe,l(f.bO),a(Xe,c(f.bz),a(Xe,c(f.bX),c(f.bY))))};return a(u,n,a(u,r,h(J_,t,i,o)))}),pc=function(e){return h(dc,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},gc=function(e){return F(Ae,$([pc(e),P(jf,!1,!1,!1,!1)]),q_,H_,O_,{})},Y_=gc({bz:_a,dc:0,dx:sc,bO:za,dR:Hf,bX:_a,bY:_a}),X_=516,Bu=5386,ir=7680,K_=function(e){return a(Pt,2,e+4)},Gf=function(e){return gc({bz:ir,dc:Hf,dx:sc,bO:X_,dR:K_(e),bX:Bu,bY:Bu})},Z_=M(function(e,r,n){return sr($([h(jr,e,n,Nf),$([Gf(r),Y_])]))}),Q_=v(function(e,r){return sr(a(j$,Z_(e),r))}),e2=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(mc,513,r,n,t)},r2=e2({ab:1,ac:0,ai:!0}),n2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f}}}}}}}}}}},a2=function(e){var r=e.cz,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function(u,f){var m=u.a,d=u.b,b=u.c,s=f.a,x=f.b,_=f.c;return n2(m)(d)(b)(s)(x)(_)(r)(n)(t)(i)});return a(c,o,l)},t2=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vu=v(function(e,r){var n=e,t=r;return h(t2,32774,n,t)}),i2=1,Ru=771,o2=770,hc=a2({bZ:0,fI:a(Vu,i2,Ru),b0:0,b6:a(Vu,o2,Ru),cf:0,cz:0}),ia=$([r2,hc]),l2=function(e){var r=e;return r.eL},c2=function(e){var r=e;return r.eM},Wf=function(e){var r=e;return r.eN},u2=function(e){var r=e;return r.eO},$2=function(e){var r=e;return r.eP},Of=function(e){var r=e;return r.eQ},qf=function(e){return H(a(cn,u2(e),l2(e)),a(cn,$2(e),c2(e)),a(cn,Of(e),Wf(e)))},Uu=function(e){var r=e;return Da(r)},v2=function(e){return e},f2=function(e){return fn({dl:v2({io:e.K,is:e.L,dU:e.M}),dS:un({io:e.t,is:e.u,dU:e.v}),dT:un({io:e.w,is:e.x,dU:e.y}),dV:un({io:e.z,is:e.A,dU:e.B})})},bo=v(function(e,r){var n=e,t=r,i=n.dV,o=i,l=n.dT,c=l,u=n.dS,f=u;return{io:t.io*f.io+t.is*f.is+t.dU*f.dU,is:t.io*c.io+t.is*c.is+t.dU*c.dU,dU:t.io*o.io+t.is*o.is+t.dU*o.dU}}),Jf=v(function(e,r){var n=e,t=r,i=n.dl,o=i,l=t.io-o.io,c=t.is-o.is,u=t.dU-o.dU,f=n.dV,m=f,d=n.dT,b=d,s=n.dS,x=s;return{io:l*x.io+c*x.is+u*x.dU,is:l*b.io+c*b.is+u*b.dU,dU:l*m.io+c*m.is+u*m.dU}}),Yf=v(function(e,r){return{dl:a(Jf,e,Da(r)),dS:a(bo,e,ea(r)),dT:a(bo,e,ra(r)),dV:a(bo,e,na(r))}}),Li=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(rr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(ha,n,t)}),m2=v(function(e,r){var n=Li(r),t=Li(e);return{eL:a(He,t.eL,n.eL),eM:a(He,t.eM,n.eM),eN:a(He,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Tr=function(e){var r=e;return r},s2=function(e){var r=e;return H(r.io,r.is,r.dU)},Za=v(function(e,r){var n=e,t=r;return t+n}),d2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ai(xr(t)),l=ai(xr(n)),c=ai(xr(i)),u=s2(r),f=u.a,m=u.b,d=u.c;return{eL:a(Za,l,f),eM:a(Za,o,m),eN:a(Za,c,d),eO:a(cn,l,f),eP:a(cn,o,m),eQ:a(cn,c,d)}}),ju=ee(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,l=2*n.gE*r,c=2*n.gD*r,u=i.dU*r,f=i.is*r,m=i.io*r,d=Tr(na(e)),b=be(c*d.io)+be(l*d.is)+be(o*d.dU),s=Tr(ra(e)),x=be(c*s.io)+be(l*s.is)+be(o*s.dU),_=Tr(ea(e)),S=be(c*_.io)+be(l*_.is)+be(o*_.dU),C=a(d2,H(S,x,b),a(Jf,e,h(al,m,f,u)));if(t.$)return Y(C);var w=t.a;return Y(a(m2,w,C))}),il=ee(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 1:var l=i.a,c=P(ju,e,r,l,n),s=e,x=r,_=c,S=o;e=s,r=x,n=_,t=S;continue e;case 2:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 3:var l=i.a,c=P(ju,e,r,l,n),s=e,x=r,_=c,S=o;e=s,r=x,n=_,t=S;continue e;case 4:var u=i.a,s=e,x=r,_=P(il,e,r,n,u),S=o;e=s,r=x,n=_,t=S;continue e;default:var f=i.a,m=i.b,d=a(Yf,f2(f),e),b=r*f.cC,s=e,x=r,_=P(il,d,b,n,$([m])),S=o;e=s,r=x,n=_,t=S;continue e}}else return n}),Ia=Qd,Aa=ep,Ea=rp,Xf=function(e){return{$:4,a:e}},p2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(z,n,r);e=i,r=o;continue e}else return r}),Dt=function(e){return Xf(a(p2,e,D))},g2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},h2=function(e){var r=e;return r},Nu=gc({bz:_a,dc:0,dx:sc,bO:za,dR:255,bX:_a,bY:_a}),b2=function(e){var r=e,n=a(rr,be(r.io),a(rr,be(r.is),be(r.dU)));if(n){var t=r.dU/n,i=r.is/n,o=r.io/n,l=_n(o*o+i*i+t*t);return l*n}else return Er},lr={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},Cr=v(function(e,r){var n=e,t=r;return Wr({eu:n.io,ev:n.cz,ew:t.io,ex:t.cz,ey:n.is,ez:n.cf,eA:t.is,eB:t.cf,eC:n.dU,eD:n.b0,eE:t.dU,eF:t.b0,eG:n.dJ,eH:n.du,eI:t.dJ,eJ:t.du})}),Ja=L({bF:a(Cr,lr,lr),cm:a(Cr,lr,lr),cn:a(Cr,lr,lr),co:a(Cr,lr,lr)},P(Fa,0,0,0,0)),Ne=v(function(e,r){var n=r;return e*n}),Hu=function(e){var r=e;return-r},Kf=514,Zf=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(mc,515,r,n,t)},Qf=240,_2=$([Zf({ab:1,ac:0,ai:!0}),pc({bz:ir,dc:Qf,dx:0,bO:Kf,dR:0,bX:ir,bY:ir}),hc]),x2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,l=xr(t),c=l,u=xr(i),f=u,m=n.dw;if(m.$){var b=m.a;return Vo(f)?Wr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Wr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-c),eF:-(f+c)/(f-c),eG:0,eH:0,eI:0,eJ:1})}else{var d=m.a;return Vo(f)?Wr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):Wr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-(f+c)/(f-c),eF:-2*f*c/(f-c),eG:0,eH:0,eI:-1,eJ:0})}}),Ht=v(function(e,r){return(1&e>>r)===1?0:1}),w2=function(e){return $([Zf({ab:1,ac:0,ai:!0}),pc({bz:ir,dc:Qf,dx:e,bO:Kf,dR:0,bX:ir,bY:ir}),hc])},y2=M(function(e,r,n){return sr(a(ne,function(t){var i=t<<4,o=P(Fa,a(Ht,t,0),a(Ht,t,1),a(Ht,t,2),a(Ht,t,3));return h(jr,e,L(r,o),w2(i))},a(qr,1,a(Pt,2,n)-1)))}),st=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},xa=function(e){var r=e;return r},S2=vp,Gu=function(e){var r=e;return st(na(r))},em=Lf,rm=ec,C2={dl:kt,dS:em,dT:uc,dV:rm},Hi=function(e){var r=e;return r},L2=function(e){var r=Hi(Da(e)),n=Tr(na(e)),t=Tr(ra(e)),i=Tr(ea(e));return Wr({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dU,eD:t.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},P2=v(function(e,r){var n=r;return L2(a(Yf,n,e))}),z2=function(e){return a(P2,C2,e)},M2=function(e){var r=e;return r.dM},T2=function(e){var r=e;return ea(r)},k2=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),D2=function(e){var r=e;return ra(r)},F2=function(e){var r=M2(e.f0),n=fn({dl:Uu(r),dS:T2(r),dT:D2(r),dV:st(Gu(r))}),t=Dt(e.a8),i=t,o=P(il,n,1,q,$([i]));if(o.$===1)return D;var l=o.a,c=z2(r),u=a(Ne,.99,a(He,xr(e.a3),Hu(Wf(l)))),f=qf(l),m=f.a,d=f.b,b=f.c,s=b2(h(k2,m,d,b)),x=a(Ne,1.01,a(Za,s,Hu(Of(l)))),_=a(x2,e.f0,{fM:e.fM,gv:x,hd:u}),S=S2(_).eJ,C=S?Tr(st(Gu(r))):xa(Uu(r)),w=function(){var me=e.cG;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var Te=me.a;return L(3,Te);case 4:var Te=me.a;return L(4,Te);default:return L(5,0)}}(),T=w.a,G=w.b,Z=e.cd,ae=Z,te=a(fc,ae,e.cK),ie=te,re=Wr({eu:0,ev:C.io,ew:Ia(ie),ex:e.ff,ey:0,ez:C.is,eA:Aa(ie),eB:h2(s),eC:0,eD:C.dU,eE:Ea(ie),eF:T,eG:0,eH:S,eI:0,eJ:G}),J=ar(Uf,re,c,_,g2,i,{P:D,_:D,hI:D}),de=e.cl;switch(de.$){case 0:var pe=de.a;return sr($([h(jr,J.P,L(pe,go),ia),h(jr,J._,Ja,ia)]));case 1:var pe=de.a;return sr($([h(jr,J.P,Ja,ia),$([Nu]),h(jr,J.hI,pe.bF,Nf),$([Gf(0)]),h(jr,J.P,L(pe,go),_2),h(jr,J._,Ja,ia)]));default:var Me=de.a,Se=de.b;return sr($([h(jr,J.P,L(Se,go),ia),$([Nu]),a(Q_,J.hI,Me),h(y2,J.P,Se,On(Me)),h(jr,J._,Ja,ia)]))}},I2=function(e){return a(Vr,"width",k(e))},A2=v(function(e,r){var n=$([L_(1),T_(0),__(!0),P(S_,0,0,0,0)]),t=function(){var T=e.cO;switch(T.$){case 0:return H(n,"0",1);case 1:return H(a(z,w_,n),"1",1);default:var G=T.a;return H(n,"0",G)}}(),i=t.a,o=t.b,l=t.c,c=e.a4,u=c.a,f=c.b,m=Eu(f),d=a(hr,"height",k(m)+"px"),b=Eu(u),s=b/m,x=a(ka,function(T){return F2({fM:s,f0:e.f0,a3:e.a3,a8:T.a8,cd:T.cd,cl:T.cl,ff:l,cG:T.cG,cK:T.cK})},r),_=a(hr,"width",k(b)+"px"),S=e.a1,C=S,w=k_(C);return h(z_,"div",$([a(hr,"padding","0px"),_,d]),$([L(o,h(I_,i,$([I2(Ee(b*l)),P_(Ee(m*l)),_,d,a(hr,"display","block"),a(hr,"background-color",w)]),x))]))}),E2=function(e){return a(A2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},nm=function(e){return e},Wu=nm({io:.31271,is:.32902}),B2=v(function(e,r){var n=e,t=Tr(r.gm),i=t.io,o=t.is,l=t.dU,c=a(fc,r.c0,r.cT),u=c;return{b0:Ea(u),f3:n,cf:Aa(u),du:0,cz:Ia(u),dJ:1,io:-i,is:-o,dU:-l}}),V2=function(e){return e},R2=function(e){return V2(1.2*a(Pt,2,e))},_o=function(e){return e},U2={$:0},j2=U2,am=function(e){return e},Ou=function(e){var r=e;return r},N2=function(e){e:for(;;){if(_e(e.gZ,Er)&&_e(e.g_,Er))return lr;if(a(Bf,xr(e.gZ),xr(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:st(e.fm)};e=r;continue e}else{var n=be(Ou(e.g_)/Jn),t=be(Ou(e.gZ)/Jn),i=Tr(e.fm),o=i.io,l=i.is,c=i.dU,u=a(fc,am(1),e.cT),f=u;return{b0:t*Ea(f),f3:!1,cf:t*Aa(f),du:n/t,cz:t*Ia(f),dJ:3,io:o,is:l,dU:c}}}},qu=function(e){return N2({cT:e.cT,gZ:e.c0,g_:Er,fm:e.fm})},H2=function(e){var r=e;return r},tm=function(e){var r=h(zf,1667,25e3,H2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return nm({io:n,is:t})},im=function(e){return e},G2=tm(im(12e3)),W2=tm(im(5600)),O2=function(e){return{$:2,a:e}},q2=function(e){return O2(e)},J2=v(function(e,r){return{$:2,a:e,b:r}}),om=function(e){return{$:0,a:e}},Gt=function(e){var r=e;return r},Y2=function(e){var r=e;return r.f3},X2=om(Ja.a),K2=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?L(a(z,t,o),l):L(o,a(z,t,l))});return h(Qe,n,L(D,D),r)}),Z2=function(e){var r=e;return Wr({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},Q2=ze(function(e,r,n,t,i,o,l,c){var u=a(K2,Y2,$([Gt(e),Gt(r),Gt(n),Gt(t)])),f=u.a,m=u.b;if(f.b){var d=X(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,s=d.b,x=s.a,_=s.b,S=_.a,C=_.b,w=C.a;return a(J2,a(ne,Z2,f),{bF:a(Cr,b,x),cm:a(Cr,S,w),cn:a(Cr,i,o),co:a(Cr,l,c)})}else return X2}else return om({bF:a(Cr,e,r),cm:a(Cr,n,t),cn:a(Cr,i,o),co:a(Cr,l,c)})}),ex=M(function(e,r,n){return gt(Q2,e,r,n,lr,lr,lr,lr,lr)}),rx=function(e){var r=a(B2,h_(e.hI),{cT:W2,gm:e.hZ,c0:_o(8e4)}),n=qu({cT:G2,c0:_o(2e4),fm:e.fm}),t=qu({cT:Wu,c0:_o(15e3),fm:st(e.fm)}),i=h(ex,r,n,t);return E2({cO:q2(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:R2(15),cl:i,cG:j2,cK:Wu})},lm=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),nx=ee(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),cm=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),um=ee(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),ax=ee(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),tx=ee(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),ix=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),bc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return P(ix,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return P(lm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return P(nx,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return P(cm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return P(tx,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return P(um,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return P(ax,n,t,i,1);case 8:return e;case 9:return e;default:return e}},_c={$:0},ox=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var u=c.a,f=c.b,m=Li(l(u)),d=a(Oe,m.eO,e),b=a(He,m.eL,r),s=a(Oe,m.eP,n),x=a(He,m.eM,t),_=a(Oe,m.eQ,i),S=a(He,m.eN,o),C=l,w=f;e=d,r=b,n=s,t=x,i=_,o=S,l=C,c=w;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),lx=M(function(e,r,n){var t=Li(e(r));return gt(ox,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),xo=v(function(e,r){var n=e,t=r;return he(t,n)<1}),$m=function(e){return a(xo,e.eL,e.eO)&&a(xo,e.eM,e.eP)&&a(xo,e.eN,e.eQ)?e:{eL:a(He,e.eO,e.eL),eM:a(He,e.eP,e.eM),eN:a(He,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},dt=function(e){var r=e;return r},vm=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=Nn(n),l=Hn(n),c=Gn(n),u=Nn(t),f=Hn(t),m=Gn(t),d=Nn(i),b=Hn(i),s=Gn(i);return $m({eL:a(He,o,a(He,u,d)),eM:a(He,l,a(He,f,b)),eN:a(He,c,a(He,m,s)),eO:a(Oe,o,a(Oe,u,d)),eP:a(Oe,l,a(Oe,f,b)),eQ:a(Oe,c,a(Oe,m,s))})},fm=np,vr=function(e){return fm(Hi(e))},mm=function(e){var r=e;return r},Gi=function(e){return fm(mm(e))},cx=v(function(e,r){var n=e,t=r,i=a(rr,be(t.io),a(rr,be(t.is),be(t.dU)));if(i){var o=t.dU/i,l=t.is/i,c=t.io/i,u=_n(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dU:n*o/u}}else return Vf}),ux=cx(am(1)),sm=M(function(e,r,n){var t=a(Ci,r,n),i=a(Ci,e,r);return ux(a($c,t,i))}),$x=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=Gi(h(sm,n,t,i));return H({q:o,cx:vr(n)},{q:o,cx:vr(t)},{q:o,cx:vr(i)})},vx=v(function(e,r){return{$:2,a:e,b:r}}),dm=vx({d5:3,ei:0,eS:4}),fx=function(e){if(e.b){var r=e.a,n=e.b,t=dm(a(ne,$x,e)),i=h(lx,vm,r,n);return P(lm,i,e,t,0)}else return _c},Sr=M(function(e,r,n){return H(e,r,n)}),pm=function(){var e=Wn(1),r=Wn(1),n=Wn(1),t=a(Ne,-.5,e),i=a(Ne,-.5,r),o=a(Ne,-.5,n),l=h(Ke,o,i,t),c=a(Ne,.5,e),u=h(Ke,o,i,c),f=a(Ne,.5,r),m=h(Ke,o,f,t),d=h(Ke,o,f,c),b=a(Ne,.5,n),s=h(Ke,b,i,t),x=h(Ke,b,f,t),_=h(Ke,b,i,c),S=h(Ke,b,f,c);return bc(fx($([h(Sr,l,x,s),h(Sr,l,m,x),h(Sr,u,_,S),h(Sr,u,S,d),h(Sr,s,x,S),h(Sr,s,S,_),h(Sr,l,d,m),h(Sr,l,u,d),h(Sr,l,s,_),h(Sr,l,_,u),h(Sr,m,S,x),h(Sr,m,d,S)])))}(),Wt={$:0},mx=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),sx=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(t),f=Gi(h(sm,u,c,l)),m={q:f,cx:vr(u)},d={q:f,cx:vr(c)},b={q:f,cx:vr(l)};return a(z,m,a(z,d,a(z,b,n)))}),xc=function(e){var r=e;return r.H},dx=ee(function(e,r,n,t){if(r.$===1)return q;var i=r.a;if(n.$===1)return q;var o=n.a;if(t.$===1)return q;var l=t.a;return Y(h(e,i,o,l))}),ol=4294967295>>>32-at,ll=Qm,px=M(function(e,r,n){e:for(;;){var t=ol&r>>>e,i=a(ll,t,n);if(i.$){var f=i.a;return a(ll,ol&r,f)}else{var o=i.a,l=e-at,c=r,u=o;e=l,r=c,n=u;continue e}}}),gx=function(e){return e>>>5<<5},hx=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||he(e,n)>-1?q:he(e,gx(n))>-1?Y(a(ll,ol&e,o)):Y(h(px,t,e,i))}),wc=function(e){var r=e;return r.au},wo=v(function(e,r){return a(hx,e,wc(r))}),bx=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(dx,M(function(l,c,u){return H(l,c,u)}),a(wo,t,e),a(wo,i,e),a(wo,o,e))};return a($n,r,xc(e))},_x=M(function(e,r,n){e:for(;;){var t=a(Tl,_r,e),i=t.a,o=t.b;if(he(Eo(i),_r)<0)return a(Y$,!0,{C:r,n,r:i});var l=o,c=a(z,O$(i),r),u=n+1;e=l,r=c,n=u;continue e}}),yc=function(e){return e.b?h(_x,e,D,0):G$},xx=v(function(e,r){return!a(wt,a(St,C0,e),r)}),wx=function(e){var r=e.a;return r},gm=v(function(e,r){var n=wx(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&he(o,n)<0&&l>=0&&he(l,n)<0&&c>=0&&he(c,n)<0};return a(xx,t,r)?{H:r,au:e}:{H:a(Pv,t,r),au:e}}),yx=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ft=yx({d5:1,ei:3,eS:4}),ti=v(function(e,r){var n=xa(r),t=xa(e);return L(H(t.io,t.is,t.dU),H(n.io,n.is,n.dU))}),Ju=h(zt,0,0,0),yo=yr(function(e,r,n,t,i,o){var l=o.a,c=o.b,u=o.c,f=a(yt,a(ti,e,r),i);if(f.$){var d={q:Ju,cx:vr(r)},b={q:Ju,cx:vr(e)},s=u+1,x=u;return H(a(z,H(n,x,s),a(z,H(n,s,t),l)),a(z,d,a(z,b,c)),u+2)}else{var m=f.a;return H(a(z,H(n,m,t),l),c,u)}}),Sx=Je(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,f=n.b,m=e(u),d=e(c),b=e(l),s=t+2,x=t+1,_=t,S=e,C=r,w=f,T=t+3,G=ar(yo,m,b,s,_,r,ar(yo,d,m,x,s,r,ar(yo,b,d,_,x,r,i)));e=S,r=C,n=w,t=T,i=G;continue e}else{var Z=i,ae=Z.a,te=Z.b;return L(ae,mr(te))}}),Cx=Je(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,f=r.b,m=e(u),d=e(c),b=e(l),s=n+2,x=n+1,_=n,S=h(pa,a(ti,b,m),s,h(pa,a(ti,m,d),x,h(pa,a(ti,d,b),_,i))),C=a(z,H(_,x,s),t),w=e,T=f,G=n+3,Z=C,ae=S;e=w,r=T,n=G,t=Z,i=ae;continue e}else return H(t,i,n)}),An=M(function(e,r,n){var t=bx(n),i=h(Qe,sx(r),D,t),o=F(Cx,r,t,0,D,El),l=o.a,c=o.b,u=o.c,f=F(Sx,r,c,t,0,H(l,D,u)),m=f.a,d=f.b,b=gn(d)?i:X(i,d);return h(mx,e,a(gm,yc(b),m),a(Ft,b,m))}),cl=function(e){return{H:a(ne,function(r){return H(3*r,3*r+1,3*r+2)},a(qr,0,On(e)-1)),au:yc(sr(a(ne,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},hm=function(e){switch(e.$){case 0:return Wt;case 1:var t=e.a,r=e.b,n=a(ne,dt,r);return h(An,t,Br,cl(n));case 2:var t=e.a,r=e.b,n=a(ne,dt,r);return h(An,t,Br,cl(n));case 3:var t=e.a,i=e.b;return h(An,t,Br,i);case 4:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 5:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 6:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 7:var t=e.a,i=e.b;return h(An,t,function(o){return o.cx},i);case 8:return Wt;case 9:return Wt;default:return Wt}},Yu=hm(pm),bm={$:0},W=bm,Ze=v(function(e,r){return{$:1,a:e,b:r}}),Lx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},Px=1029,zx=function(e){return{$:5,a:e}},_m=function(e){var r=e;return zx(r)},Mx=_m(Px),Tx=1028,kx=_m(Tx),fr=M(function(e,r,n){return r===1?e?a(z,Mx,n):a(z,kx,n):n}),xm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},So=ee(function(e,r,n,t){return a(Ze,r,ze(function(i,o,l,c,u,f,m,d){return F(Ae,h(fr,c,t,d),xm,Lx,n,{b7:e,c:l,d:o,e:f,f:i,g:u})}))}),Sc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},wm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Qr=ee(function(e,r,n,t){return a(Ze,r,ze(function(i,o,l,c,u,f,m,d){return F(Ae,h(fr,c,t,d),wm,Sc,n,{aO:e,c:l,d:o,e:f,f:i,g:u})}))}),ym=v(function(e,r){return{$:3,a:e,b:r}}),Dx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Sm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Fx=ee(function(e,r,n,t){return a(ym,n,ze(function(i,o,l,c,u,f,m,d){return F(Ae,d,Sm,Dx,t,{aO:e,c:l,d:o,cw:r,e:f,f:i,g:u})}))}),Cc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},It=function(e){var r=e;return r},Wi=ap,en=Je(function(e,r,n,t,i){return a(Ze,n,ze(function(o,l,c,u,f,m,d,b){return F(Ae,h(fr,u,i,b),wm,Cc,t,{a6:a(Wi,It(r),e),c,d:l,e:m,f:o,g:f})}))}),Ix={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Ax=Je(function(e,r,n,t,i){return a(ym,t,ze(function(o,l,c,u,f,m,d,b){return F(Ae,b,Sm,Ix,i,{a6:a(Wi,It(r),e),c,d:l,cw:n,e:m,f:o,g:f})}))}),Cm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},Lm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ot=ee(function(e,r,n,t){return a(Ze,r,ze(function(i,o,l,c,u,f,m,d){var b=m.a,s=m.b;return F(Ae,h(fr,c,t,d),Lm,Cm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,dd:e,c:l,d:o,e:f,f:i,g:u})}))}),Pm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},zm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ex=yr(function(e,r,n,t,i,o){return a(Ze,t,ze(function(l,c,u,f,m,d,b,s){var x=b.a,_=b.b;return F(Ae,h(fr,f,o,s),zm,Pm,i,{U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,de:e,c:u,d:c,bg:r,e:d,f:l,bm:n,g:m})}))}),Mm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Bx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return a(Ze,u,ze(function(d,b,s,x,_,S,C,w){var T=C.a,G=C.b;return F(Ae,h(fr,x,m,w),zm,Mm,f,{cS:e,cU:r,cV:o,cW:t,U:G,bF:T.bF,cm:T.cm,cn:T.cn,co:T.co,dh:i,c:s,d:b,bg:l,e:S,dB:n,f:d,bm:c,g:_})}))}}}}}}}}}}},Tm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},qt=yr(function(e,r,n,t,i,o){return a(Ze,t,ze(function(l,c,u,f,m,d,b,s){var x=b.a,_=b.b;return F(Ae,h(fr,f,o,s),Lm,Tm,i,{cR:e,U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,dg:n,c:u,d:c,e:d,dA:r,f:l,g:m})}))}),Vx=function(e){return{$:0,a:e}},Xu=v(function(e,r){return{$:1,a:e,b:r}}),Qa=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),Rx=function(e){return P(Fa,Ia(e),Aa(e),Ea(e),1)},Lc=P(Fa,0,0,0,0),ii=v(function(e,r){if(r.$){var t=r.a.E;return L(t,Lc)}else{var n=r.a;return L(e,Rx(n))}}),km=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(Xu,L(i,Lc),a(Qa,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Xu,a(ii,i,e),a(Qa,i,r))}else{var t=n.a.a;return n.b.a,Vx(t)}}),Ux=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jt=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),jx=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Nx=function(e){return a(gr,e,1)},ul=a(gr,0,0),oa=v(function(e,r){if(r.$){var t=r.a.E;return L(t,ul)}else{var n=r.a;return L(e,Nx(n))}}),Dm=ee(function(e,r,n,t){var i=P(jx,e,r,n,t);if(i.a.$){var u=i.a.a.E;return P(Jt,L(u,Lc),a(oa,u,r),a(oa,u,n),a(Qa,u,t))}else if(i.b.$){var u=i.b.a.E;return P(Jt,a(ii,u,e),L(u,ul),a(oa,u,n),a(Qa,u,t))}else if(i.c.$){var u=i.c.a.E;return P(Jt,a(ii,u,e),a(oa,u,r),L(u,ul),a(Qa,u,t))}else if(i.d.$){var u=i.d.a.E;return P(Jt,a(ii,u,e),a(oa,u,r),a(oa,u,n),L(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,h(Ux,o,l,c)}}),Hx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},Co=Je(function(e,r,n,t,i){return a(Ze,n,ze(function(o,l,c,u,f,m,d,b){return F(Ae,h(fr,u,i,b),xm,Hx,t,{cP:It(r),b7:e,c,d:l,e:m,f:o,g:f})}))}),Fm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Gx=ee(function(e,r,n,t){return a(Ze,r,ze(function(i,o,l,c,u,f,m,d){var b=m.a,s=m.b;return F(Ae,h(fr,c,t,d),Fm,Pm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,de:e,c:l,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),Wx=fl(function(e,r,n,t,i,o,l,c,u){return a(Ze,l,ze(function(f,m,d,b,s,x,_,S){var C=_.a,w=_.b;return F(Ae,h(fr,b,u,S),Fm,Mm,c,{cS:e,cU:r,cV:o,cW:t,U:w,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:d,d:m,bg:e,e:x,dB:n,f,bm:0,g:s})}))}),pt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Ox=function(e){var r=e;return h(pt,r.eO,r.eL,.5)},qx=function(e){var r=e;return h(pt,r.eP,r.eM,.5)},Jx=function(e){var r=e;return h(pt,r.eQ,r.eN,.5)},Yx=function(e){return h(Ke,Ox(e),qx(e),Jx(e))},$e=function(e){var r=qf(e),n=r.a,t=r.b,i=r.c;return{f4:Hi(Yx(e)),gD:n/2,gE:t/2,gF:i/2}},Pc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return P(So,c,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return P(So,c,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return P(So,c,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var n=e.b.a;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return P(Qr,n,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return P(Qr,n,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return P(Qr,n,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return P(Qr,n,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return P(Qr,n,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return P(Qr,n,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return P(Qr,n,$e(i),l,t);case 8:var i=r.a,l=r.c;return P(Qr,n,$e(i),l,0);case 9:var i=r.a,l=r.c;return P(Qr,n,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return P(Fx,n,o,$e(i),l)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,f=e.c;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return F(Co,c,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(Co,c,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(Co,c,f,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(en,u,f,$e(i),l,t);case 8:var i=r.a,l=r.c;return F(en,u,f,$e(i),l,0);case 9:var i=r.a,l=r.c;return F(en,u,f,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return F(Ax,u,f,o,$e(i),l)}}case 2:e.a;var m=e.b,ae=e.c,d=a(km,m,ae);if(d.$){var x=d.a,_=x.a;x.b;var S=d.b,C=S.a,w=S.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return P(Gx,_,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return ar(Ex,_,C,w,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}else{var b=d.a;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 3:return W;case 4:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}default:e.a;var T=e.b,G=e.c,Z=e.d,ae=e.e,te=P(Dm,T,G,Z,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,A=te.c,E=A.a,B=A.b,V=te.d,C=V.a,w=V.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return Jm(Wx,pe,Me,me,Te,E,B,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return Bx(pe)(Me)(me)(Te)(E)(B)(C)(w)($e(i))(l)(t);case 8:return W;case 9:return W;default:return W}}else{var ie=te.a,re=te.b,J=te.c;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,J,$e(i),l,t);case 3:return W;case 4:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,J,$e(i),l,t);case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,J,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,J,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}}}),Lo=function(e){var r=e;return r.io},Po=function(e){var r=e;return r.is},zo=function(e){var r=e;return r.dU},Xx=function(e){var r=e,n=zo(r.dV),t=Po(r.dV),i=Lo(r.dV),o=zo(r.dT),l=Po(r.dT),c=Lo(r.dT),u=zo(r.dS),f=Po(r.dS),m=Lo(r.dS);return m*l*n+f*o*i+u*c*t-u*l*i-f*c*n-m*o*t>0},Kx=function(e){var r=Hi(Da(e)),n=Tr(na(e)),t=Tr(ra(e)),i=Tr(ea(e));return{ek:Xx(e),t:i.io,u:i.is,v:i.dU,w:t.io,x:t.is,y:t.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},ua=v(function(e,r){return{$:5,a:e,b:r}}),Im=v(function(e,r){var n=r;switch(n.$){case 0:return W;case 5:var t=n.a,i=n.b,o=a(Rf,t,e);return a(ua,o,i);case 1:return a(ua,e,n);case 3:return a(ua,e,n);case 2:return a(ua,e,n);default:return a(ua,e,n)}}),Am=v(function(e,r){return a(Im,Kx(e),r)}),Oi=function(e){return{$:2,a:e}},Zx=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dU:i*o.dU},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),Qx=op,ew=ip,Ku=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){var m=e.a,d=e.b,b=e.c,s=ew(t),x=s.io,_=s.is,S=s.dU,C=s.ft,w=Qx({ft:C,io:x*m,is:_*d,dU:S*b});return gt(r,n,w,i,o,l,c,u,f)}}}}}}}}}},$l=v(function(e,r){switch(r.$){case 0:return bm;case 5:var n=r.a,t=r.b;return a(ua,n,a($l,e,t));case 1:var i=r.a,o=r.b;return a(Ze,a(Zx,e,i),a(Ku,e,o));case 3:return r;case 2:var o=r.a;return Oi(a(Ku,e,o));default:var l=r.a;return Xf(a(ne,$l(e),l))}}),zc=v(function(e,r){var n=r;return a($l,e,n)}),Mc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Em=7683,Bm=7682,rw=h(dc,{dc:0,dx:0,dR:15},{bz:ir,bO:za,bX:ir,bY:Em},{bz:ir,bO:za,bX:ir,bY:Bm}),nw=h(dc,{dc:0,dx:0,dR:15},{bz:ir,bO:za,bX:ir,bY:Bm},{bz:ir,bO:za,bX:ir,bY:Em}),Tc=v(function(e,r){return e?a(z,nw,r):a(z,rw,r)}),aw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},tw=function(e){if(e.$){var r=e.c;return Y(ze(function(n,t,i,o,l,c,u,f){return F(Ae,a(Tc,o,f),aw,Mc,r,{c:i,d:t,e:c,f:n,cD:u,g:l})}))}else return q},Pi=function(e){var r=tw(e);if(r.$)return W;var n=r.a;return Oi(n)},iw=ee(function(e,r,n,t){var i=a(Pc,n,pm),o=function(){var m=L(e,r);return m.a?m.b?Dt($([i,Pi(Yu)])):i:m.b?Pi(Yu):W}(),l=ac(t),c=l.a,u=l.b,f=l.c;return a(Am,nc(t),a(zc,H(c,u,f),o))}),ow=v(function(e,r){return P(iw,!0,!0,e,r)}),Vm=v(function(e,r){return{$:0,a:e,b:r}}),lw=function(e){var r=Wl(e),n=r.hu,t=r.gA,i=r.fS;return h(zt,n,t,i)},cw=function(e){return a(Vm,0,tl(lw(e)))},uw=function(e){var r=e;return r.m},et=function(e){var r=e;return Yn(r)},$w=v(function(e,r){var n=r;return n/e}),Zu=function(e){var r=e;return{io:Yn(r),is:Pa(r)}},vw=v(function(e,r){var n=e.cx,t=e.q;return a(z,{q:Gi(t),cx:vr(n)},r)}),fw=Ti(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,f=Ea(c.cx),m=Aa(c.cx),d=Ia(c.cx),b=a(ha,e,d),s=a(rr,r,d),x=a(ha,n,m),_=a(rr,t,m),S=a(ha,i,f),C=a(rr,o,f),w=u;e=b,r=s,n=x,t=_,i=S,o=C,l=w;continue e}else return $m({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),Rm=v(function(e,r){var n=Ea(e.cx),t=Aa(e.cx),i=Ia(e.cx);return ml(fw,i,i,t,t,n,n,r)}),mw=function(e){var r=h(E$,vw,D,wc(e));if(r.b){var n=r.a,t=r.b,i=a(Ft,r,xc(e)),o=a(Rm,n,t);return P(cm,o,e,i,0)}else return _c},Qu=v(function(e,r){var n=e,t=r,i=n.dT,o=i,l=n.dS,c=l;return{io:t.io*c.io+t.is*o.io,is:t.io*c.is+t.is*o.is,dU:t.io*c.dU+t.is*o.dU}}),zi=function(e){var r=e;return Pa(r)},vl=function(e){return mt(2*Jn*e)},sw=Br,e$=sw({dl:kt,dS:em,dT:uc}),Um=function(){var e=72,r=a($w,e,vl(1)),n=Wn(1),t=da(ec),i=da(Cf),o=Wn(1),l=a(Ne,.5,o),c=h(Ke,Er,Er,l),u=a(Ne,-.5,o),f=h(Ke,Er,Er,u),m=function(s){var x=a(Ne,s,r),_=da(a(Qu,e$,Zu(x))),S=a(Ne,et(x),n),C=a(Ne,zi(x),n),w=h(Ke,S,C,l),T=h(Ke,S,C,u),G=a(_i,e,s+1),Z=a(Ne,G,r),ae=da(a(Qu,e$,Zu(Z))),te=a(Ne,et(Z),n),ie=a(Ne,zi(Z),n),re=h(Ke,te,ie,u),J=h(Ke,te,ie,l);return $([H({q:i,cx:f},{q:i,cx:re},{q:i,cx:T}),H({q:_,cx:T},{q:ae,cx:re},{q:ae,cx:J}),H({q:_,cx:T},{q:ae,cx:J},{q:_,cx:w}),H({q:t,cx:c},{q:t,cx:w},{q:t,cx:J})])},d=a(ne,m,a(qr,0,e-1)),b=cl(sr(d));return bc(mw(b))}(),r$=hm(Um),dw=function(e){var r=e;return r.gm},pw=function(e){var r=e;return r.dl},gw=function(e){var r=dw(e),n=vc(r),t=n.a,i=n.b;return fn({dl:pw(e),dS:t,dT:i,dV:r})},hw=function(e){var r=e;return r.g5},bw=function(e){var r=e;return r.hs},_w=ee(function(e,r,n,t){var i=gw(uw(t)),o=a(Pc,n,Um),l=function(){var d=L(e,r);return d.a?d.b?Dt($([o,Pi(r$)])):o:d.b?Pi(r$):W}(),c=bw(t),u=c,f=hw(t),m=f;return a(Am,i,a(zc,H(u,u,m),l))}),xw=v(function(e,r){return P(_w,!0,!0,e,r)}),n$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},a$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Ya=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=xa(n),l=xa(t),c=xa(i);return Wr({eu:o.io,ev:l.io,ew:c.io,ex:0,ey:o.is,ez:l.is,eA:c.is,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},Yt=dm($([H({dI:0},{dI:1},{dI:2})])),ww=v(function(e,r){var n=vm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var i=e.b.a;return a(Ze,t,ze(function(w,T,G,Z,ae,te,ie,re){return F(Ae,h(fr,Z,0,re),n$,Sc,Yt,{aO:i,c:G,d:T,e:te,f:w,bU:Ya(r),g:ae})}));case 1:if(e.b.$)return e.a,W;var o=e.b.a,l=e.c;return a(Ze,t,ze(function(w,T,G,Z,ae,te,ie,re){return F(Ae,h(fr,Z,0,re),n$,Cc,Yt,{a6:a(Wi,It(l),o),c:G,d:T,e:te,f:w,bU:Ya(r),g:ae})}));case 2:e.a;var c=e.b,s=e.c,u=a(km,c,s);if(u.$)return W;var f=u.a;return a(Ze,t,ze(function(w,T,G,Z,ae,te,ie,re){var J=ie.a,de=ie.b;return F(Ae,h(fr,Z,0,re),a$,Cm,Yt,{U:de,bF:J.bF,cm:J.cm,cn:J.cn,co:J.co,dd:f,c:G,d:T,e:te,f:w,bU:Ya(r),g:ae})}));default:e.a;var m=e.b,d=e.c,b=e.d,s=e.e,x=P(Dm,m,d,b,s);if(x.$)return W;var _=x.a,S=x.b,C=x.c;return a(Ze,t,ze(function(w,T,G,Z,ae,te,ie,re){var J=ie.a,de=ie.b;return F(Ae,h(fr,Z,0,re),a$,Tm,Yt,{cR:_,U:de,bF:J.bF,cm:J.cm,cn:J.cn,co:J.co,dg:C,c:G,d:T,e:te,dA:S,f:w,bU:Ya(r),g:ae})}))}}),yw=function(){var e=$([{bl:a(gr,0,1)},{bl:a(gr,1,1)},{bl:a(gr,2,1)},{bl:a(gr,0,-1)},{bl:a(gr,1,-1)},{bl:a(gr,2,-1)}]),r=$([H(0,1,2),H(3,5,4),H(3,4,1),H(3,1,0),H(4,5,2),H(4,2,1),H(5,3,0),H(5,0,2)]);return a(Ft,e,r)}(),Sw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},t$=function(e){return Oi(ze(function(r,n,t,i,o,l,c,u){return F(Ae,a(Tc,i,u),Sw,Mc,yw,{c:t,d:n,e:l,f:r,cD:c,bU:Ya(e),g:o})}))},Cw=ee(function(e,r,n,t){var i=a(ww,n,t),o=L(e,r);return o.a?o.b?Dt($([i,t$(t)])):i:o.b?t$(t):W}),Lw=v(function(e,r){return P(Cw,!0,!0,e,r)}),Pw=v(function(e,r){var n=Gn(r),t=Gn(e),i=Hn(r),o=Hn(e),l=Nn(r),c=Nn(e);return{eL:a(He,c,l),eM:a(He,o,i),eN:a(He,t,n),eO:a(Oe,c,l),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),zw=function(e){var r=ic(e),n=r.a,t=r.b;return a(Pw,n,t)},i$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Mw=v(function(e,r){return{$:1,a:e,b:r}}),Tw=Mw({d5:2,ei:0,eS:1}),o$=Tw($([L({es:0},{es:1})])),kw=v(function(e,r){var n=zw(r),t=$e(n),i=ic(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var c=e.b.a;return a(Ze,t,ze(function(f,m,d,b,s,x,_,S){return F(Ae,S,i$,Sc,o$,{aO:c,eq:vr(l),er:vr(o),c:d,d:m,e:x,f,g:s})}));case 1:if(e.b.$)return W;var c=e.b.a,u=e.c;return a(Ze,t,ze(function(m,d,b,s,x,_,S,C){return F(Ae,C,i$,Cc,o$,{a6:a(Wi,It(u),c),eq:vr(l),er:vr(o),c:b,d,e:_,f:m,g:x})}));case 2:return W;default:return W}}),Dw=v(function(e,r){return a(kw,e,r)}),l$=v(function(e,r){var n=e,t=r;return n/t}),Fw=Je(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(z,o,i);if(_e(r,e))return l;var c=e,u=r-1,f=n,m=t,d=l;e=c,r=u,n=f,t=m,i=d;continue e}}),c$=v(function(e,r){return e<1?D:F(Fw,0,e,e,r,D)}),Iw=v(function(e,r){var n=e.cx,t=e.q,i=e.O,o=i,l=o.a,c=o.b;return a(z,{q:Gi(t),cx:vr(n),O:a(gr,l,c)},r)}),Aw=function(e){var r=h(E$,Iw,D,wc(e));if(r.b){var n=r.a,t=r.b,i=a(Ft,r,xc(e)),o=a(Rm,n,t);return P(um,o,e,i,0)}else return _c},jm=v(function(e,r){var n=e,t=r,i=Yn(t);return{io:i*Yn(n),is:i*Pa(n),dU:Pa(t)}}),Ew=function(){var e=Wn(1),r=72,n=a(qr,0,r-1),t=a(c$,r,a(pt,Er,vl(1))),i=nt(r/2),o=a(qr,0,i-1),l=a(c$,i,a(pt,qa(90),qa(-90))),c=yc(sr(a(ne,function(m){return a(ne,function(d){return{q:da(a(jm,m,d)),cx:h(Ke,a(Ne,et(d)*et(m),e),a(Ne,et(d)*zi(m),e),a(Ne,zi(d),e)),O:L(a(l$,m,vl(1)),a(l$,a(Za,qa(90),d),qa(180)))}},l)},t))),u=v(function(m,d){return m*(i+1)+d}),f=sr(a(ne,function(m){return sr(a(ne,function(d){var b=a(u,m+1,d),s=a(u,m,d),x=a(u,m+1,d+1),_=a(u,m,d+1);return $([H(_,x,b),H(_,b,s)])},o))},n));return bc(Aw(a(gm,c,f)))}(),Mi=72,Xt=2*Mi,Bw=v(function(e,r){e:for(;;){var n=Xt+1,t=a(_i,Xt,2*e+3),i=a(_i,Xt,2*e+2),o=2*e+1,l=2*e,c=Xt,u=a(z,H(c,l,i),a(z,H(l,t,i),a(z,H(l,o,t),a(z,H(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Vw=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Rw=v(function(e,r){e:for(;;){var n=h(Vw,0,2*Jn,e/Mi),t={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=a(z,t,a(z,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Uw=function(){var e=a(Rw,Mi-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=a(Bw,Mi-1,D);return a(Ft,e,r)}(),jw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},u$=function(e){return Oi(ze(function(r,n,t,i,o,l,c,u){return F(Ae,a(Tc,!0,u),jw,Mc,Uw,{aO:h(zt,0,0,1),c:t,d:n,e:l,f:r,cD:c,g:o})}))},Nw=function(e){var r=mm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},Hw=v(function(e,r){return a(Im,Nw(e),r)}),Gw=ee(function(e,r,n,t){var i=a(Pc,n,Ew),o=function(){var u=L(e,r);return u.a?u.b?Dt($([i,u$()])):i:u.b?u$():W}(),l=lc(t),c=l;return a(Hw,a(Ci,kt,oc(t)),a(zc,H(c,c,c),o))}),Ww=v(function(e,r){return P(Gw,!0,!0,e,r)}),Ow=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),qw=Je(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Jw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Vm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(Ow,n,t,r);case 2:var n=e.a,t=e.b,l=e.c;return h(Pf,n,t,l);default:var n=e.a,t=e.b,i=e.c,o=e.d,l=e.e;return F(qw,n,t,i,o,l)}},Yw=Jw,Nm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(ow,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Lw,i,n)]);case 3:var i=e.a,t=e.b;return $([a(Ww,Yw(i),t)]);case 2:var i=e.a,o=e.b;return $([a(xw,i,o)]);case 4:var l=e.a,c=e.b;return $([a(Dw,cw(l),c)]);default:var u=e.a;return a(ka,Nm,u)}},Xw=function(e){return a(ka,Nm,e)},Kw=v(function(e,r){return rx({a1:p_(e.fO),f0:e.f0,a3:g_(.5),cX:e.cX,a4:L(Au(Ee(e.dC.im)),Au(Ee(e.dC.gH))),a8:Xw(r),hI:!0,hZ:a(jm,mt(e.hY),mt(e.h_)),fm:rm})}),Zw=P(Ct,255/255,255/255,255/255,1),Qw=v(function(e,r){return a(Kw,{fO:Zw,f0:d_({d9:{io:a(rn,"camera x",e),is:a(rn,"camera y",e),dU:a(rn,"camera z",e)},ba:{io:0,is:0,dU:0},fm:{io:0,is:1,dU:0}}),cX:e.cX,dC:e.dC,hY:-xi(135),h_:-xi(45)},$([e_(e)]))}),ey=P(l1,Qw,m1,f1,c1);const ry={Main:{init:ey(a(Q,function(e){return cr({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return cr({d1:l,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(d){return cr({fJ:d,gd:m,d4:f,go:u,g4:c,hr:l,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",di(ya)))},a(K,"left",Pe))},a(K,"pressedKeys",di(ya)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return cr({d4:f,g$:u,ha:c,hy:l,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return cr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return cr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ny=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",l=s=>s.code=="ArrowUp",c=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),l(s)&&(oe.keyboard.up=!0),c(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(x=>x!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),l(s)&&(oe.keyboard.up=!1),c(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const x=s/1e3,_=x-oe.clock;_<.009||(oe.dt=_,oe.clock=x,e.ports.tick.send(oe),d(oe)),window.requestAnimationFrame(b)}},ay=ry.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});ny(ay);
