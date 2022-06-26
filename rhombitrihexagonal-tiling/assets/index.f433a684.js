const ns=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ns();function zn(e,r,n){return n.a=e,n.f=r,n}function v(e){return zn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return zn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function re(e){return zn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function qe(e){return zn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Lr(e){return zn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function Ai(e){return zn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function Me(e){return zn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function xc(e){return zn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,t,i,o,c,l,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function V(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function tr(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function wc(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function xt(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function as(e,r,n,t,i,o,c,l,u,f){return e.a===9?e.f(r,n,t,i,o,c,l,u,f):e(r)(n)(t)(i)(o)(c)(l)(u)(f)}var ts=[];function is(e){return e.length}var os=T(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),cs=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),ls=v(function(e,r){return r[e]});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});T(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var us=T(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+$s()),r});function $s(e){return"<internals>"}function Va(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=Bo(e,r,0,t);i&&(n=t.pop());i=Bo(n.a,n.b,0,t));return i}function Bo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Va(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=tu(e),r=tu(r));for(var i in e)if(!Bo(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function he(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=he(e.a,r.a))||(n=he(e.b,r.b))?n:he(e.c,r.c);for(;e.b&&r.b&&!(n=he(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return he(e,r)<0});v(function(e,r){return he(e,r)<1});v(function(e,r){return he(e,r)>0});v(function(e,r){return he(e,r)>=0});var vs=v(function(e,r){var n=he(e,r);return n<0?Y$:n?a0:q$}),wt=0;function L(e,r){return{a:e,b:r}}function j(e,r,n){return{a:e,b:r,c:n}}function Be(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Z);function Z(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Kr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Kr(e.a,r);return n}var D={$:0};function Kr(e,r){return{$:1,a:e,b:r}}var fs=v(Kr);function $(e){for(var r=D,n=e.length;n--;)r=Kr(e[n],r);return r}function Fi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ms=T(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});re(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});qe(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return $(o)});Lr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(Fi(r).sort(function(n,t){return he(e(n),e(t))}))});v(function(e,r){return $(Fi(r).sort(function(n,t){var i=a(e,n,t);return i===q$?0:i===Y$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ss=v(Math.pow);v(function(e,r){return r%e});var ds=v(function(e,r){var n=r%e;return e===0?Va(11):n>0&&e<0||n<0&&e>0?n+e:n}),ps=Math.PI,gs=Math.cos,hs=Math.sin,bs=Math.tan;v(Math.atan2);function _s(e){return e}function ys(e){return e===1/0||e===-1/0}var xs=Math.ceil,ws=Math.floor,Ss=Math.round,Cs=Math.sqrt,Wl=Math.log,Ls=isNaN;function Ps(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ms=v(function(e,r){return e+r});function zs(e){var r=e.charCodeAt(0);return isNaN(r)?J:Y(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function Ts(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function ks(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}T(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Ds=T(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Vs=v(function(e,r){return r.split(e)}),As=v(function(e,r){return r.join(e)}),Fs=T(function(e,r,n){return n.slice(e,r)});function Is(e){return $(e.trim().split(/\s+/g))}function Es(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Bs=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),js=v(function(e,r){return r.indexOf(e)>-1}),Rs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ns=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function y$(e){return e+""}function Gs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:Y(n==45?-r:r)}function Hs(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?Y(r):J}function Ws(e){return Fi(e).join("")}function Us(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Os(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Js(e){return{$:0,a:e}}function qs(e){return{$:1,a:e}}function Sc(e){return{$:2,b:e}}var Ys=Sc(function(e){return typeof e=="boolean"?We(e):Ur("a BOOL",e)}),Zs=Sc(function(e){return typeof e=="number"?We(e):Ur("a FLOAT",e)}),Ks=Sc(function(e){return typeof e=="string"?We(e):e instanceof String?We(e+""):Ur("a STRING",e)});function Xs(e){return{$:3,b:e}}var Qs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Tn(e,r){return{$:9,f:e,g:r}}var ed=v(function(e,r){return{$:10,b:r,h:e}}),rd=v(function(e,r){return Tn(e,[r])}),nd=T(function(e,r,n){return Tn(e,[r,n])});re(function(e,r,n,t){return Tn(e,[r,n,t])});qe(function(e,r,n,t,i){return Tn(e,[r,n,t,i])});Lr(function(e,r,n,t,i,o){return Tn(e,[r,n,t,i,o])});Ai(function(e,r,n,t,i,o,c){return Tn(e,[r,n,t,i,o,c])});Me(function(e,r,n,t,i,o,c,l){return Tn(e,[r,n,t,i,o,c,l])});xc(function(e,r,n,t,i,o,c,l,u){return Tn(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Mr(e,n)}catch(t){return ir(a(Ec,"This is not valid JSON! "+t.message,r))}});var x$=v(function(e,r){return Mr(e,r)});function Mr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?We(e.c):Ur("null",r);case 3:return Nt(r)?Ul(e.b,r,$):Ur("a LIST",r);case 4:return Nt(r)?Ul(e.b,r,ad):Ur("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ur("an OBJECT with a field named `"+n+"`",r);var f=Mr(e.b,r[n]);return Ir(f)?f:ir(a(iu,n,f.a));case 7:var t=e.e;if(!Nt(r))return Ur("an ARRAY",r);if(t>=r.length)return Ur("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Mr(e.b,r[t]);return Ir(f)?f:ir(a(Z$,t,f.a));case 8:if(typeof r!="object"||r===null||Nt(r))return Ur("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Mr(e.b,r[o]);if(!Ir(f))return ir(a(iu,o,f.a));i=Kr(L(o,f.a),i)}return We(sr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=Mr(l[u],r);if(!Ir(f))return f;c=c(f.a)}return We(c);case 10:var f=Mr(e.b,r);return Ir(f)?Mr(e.h(f.a),r):f;case 11:for(var m=D,s=e.g;s.b;s=s.b){var f=Mr(s.a,r);if(Ir(f))return f;m=Kr(f.a,m)}return ir(t0(sr(m)));case 1:return ir(a(Ec,e.a,r));case 0:return We(e.a)}}function Ul(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Mr(e,r[o]);if(!Ir(c))return ir(a(Z$,o,c.a));i[o]=c.a}return We(n(i))}function Nt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function ad(e){return a(b0,e.length,function(r){return e[r]})}function Ur(e,r){return ir(a(Ec,"Expecting "+e,r))}function da(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return da(e.b,r.b);case 6:return e.d===r.d&&da(e.b,r.b);case 7:return e.e===r.e&&da(e.b,r.b);case 9:return e.f===r.f&&Ol(e.g,r.g);case 10:return e.h===r.h&&da(e.b,r.b);case 11:return Ol(e.g,r.g)}}function Ol(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!da(e[t],r[t]))return!1;return!0}var td=v(function(e,r){return JSON.stringify(r,null,e)+""});function w$(e){return e}function id(){return[]}function od(){return{}}var cd=T(function(e,r,n){return n[e]=r,n});function ld(e){return v(function(r,n){return n.push(e(r)),n})}function Qn(e){return{$:0,a:e}}function ud(e){return{$:1,a:e}}function fn(e){return{$:2,b:e,c:null}}var jo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function $d(e){return{$:5,b:e}}var vd=0;function Cc(e){var r={$:0,e:vd++,f:e,g:null,h:[]};return Lc(r),r}function S$(e){return fn(function(r){r(Qn(Cc(e)))})}function C$(e,r){e.h.push(r),Lc(e)}var fd=v(function(e,r){return fn(function(n){C$(e,r),n(Qn(wt))})}),$o=!1,Jl=[];function Lc(e){if(Jl.push(e),!$o){for($o=!0;e=Jl.shift();)md(e);$o=!1}}function md(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Lc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}re(function(e,r,n,t){return Pc(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function Pc(e,r,n,t,i,o){var c=a(x$,e,r?r.flags:void 0);Ir(c)||Va(2);var l={},u=n(c.a),f=u.a,m=o(b,f),s=sd(l,b);function b(d,y){var _=a(t,d,f);m(f=_.a,y),Yl(l,_.b,i(f))}return Yl(l,u.b,i(f)),s?{ports:s}:{}}var Yr={};function sd(e,r){var n;for(var t in Yr){var i=Yr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=pd(i,r)}return n}function dd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function pd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(jo,l,$d(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&c?P(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=Cc(a(jo,l,e.b))}var gd=v(function(e,r){return fn(function(n){e.g(r),n(Qn(wt))})});v(function(e,r){return a(fd,e.h,{$:0,a:r})});function L$(e){return function(r){return{$:1,k:e,l:r}}}function hd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ql=[],vo=!1;function Yl(e,r,n){if(ql.push({p:e,q:r,r:n}),!vo){vo=!0;for(var t;t=ql.shift();)bd(t.p,t.q,t.r);vo=!1}}function bd(e,r,n){var t={};$i(!0,r,t,null),$i(!1,n,t,null);for(var i in e)C$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function $i(e,r,n,t){switch(r.$){case 1:var i=r.k,o=_d(e,i,t,r.l);n[i]=yd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)$i(e,c.a,n,t);return;case 3:$i(e,r.o,n,{s:r.n,t});return}}function _d(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Yr[r].e:Yr[r].f;return a(o,i,t)}function yd(e,r,n){return n=n||{i:D,j:D},e?n.i=Kr(r,n.i):n.j=Kr(r,n.j),n}function xd(e){Yr[e]&&Va(3)}v(function(e,r){return r});function wd(e,r){return xd(e),Yr[e]={f:Sd,u:r,a:Cd},L$(e)}var Sd=v(function(e,r){return function(n){return e(r(n))}});function Cd(e,r){var n=D,t=Yr[e].u,i=Qn(null);Yr[e].b=i,Yr[e].c=T(function(c,l,u){return n=l,i});function o(c){var l=a(x$,t,c);Ir(l)||Va(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var vi,on=typeof document!="undefined"?document:{};function Mc(e,r){e.appendChild(r)}re(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(bn(e,function(){}),i),{}});function Ro(e){return{$:0,a:e}}var P$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:Tc(n),e:i,f:e,b:o}})}),mn=P$(void 0),Ld=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:Tc(n),e:i,f:e,b:o}})}),Pd=Ld(void 0);function Md(e,r,n,t){return{$:3,d:Tc(e),g:r,h:n,i:t}}var zd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function kn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return kn([e,r],function(){return e(r)})});T(function(e,r,n){return kn([e,r,n],function(){return a(e,r,n)})});var Td=re(function(e,r,n,t){return kn([e,r,n,t],function(){return h(e,r,n,t)})});qe(function(e,r,n,t,i){return kn([e,r,n,t,i],function(){return P(e,r,n,t,i)})});Lr(function(e,r,n,t,i,o){return kn([e,r,n,t,i,o],function(){return V(e,r,n,t,i,o)})});Ai(function(e,r,n,t,i,o,c){return kn([e,r,n,t,i,o,c],function(){return tr(e,r,n,t,i,o,c)})});Me(function(e,r,n,t,i,o,c,l){return kn([e,r,n,t,i,o,c,l],function(){return wc(e,r,n,t,i,o,c,l)})});xc(function(e,r,n,t,i,o,c,l,u){return kn([e,r,n,t,i,o,c,l,u],function(){return xt(e,r,n,t,i,o,c,l,u)})});var M$=v(function(e,r){return{$:"a0",n:e,o:r}}),kd=v(function(e,r){return{$:"a1",n:e,o:r}}),zc=v(function(e,r){return{$:"a2",n:e,o:r}}),Nr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function z$(e){return e=="script"?"p":e}function Dd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Vd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Ad(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function T$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Fd=v(function(e,r){return r.$==="a0"?a(M$,r.n,Id(e,r.o)):r});function Id(e,r){var n=Nc(r);return{$:r.$,a:n?h(_0,n<3?Ed:Bd,ur(e),r.a):a(di,e,r.a)}}var Ed=v(function(e,r){return L(e(r.a),r.b)}),Bd=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function Tc(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Zl(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?Zl(c,i,o):c[i]=o}return r}function Zl(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function bn(e,r){var n=e.$;if(n===5)return bn(e.k||(e.k=e.m()),r);if(n===0)return on.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=bn(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return No(c,r,e.d),c}var c=e.f?on.createElementNS(e.f,e.c):on.createElement(e.c);vi&&e.c=="a"&&c.addEventListener("click",vi(c)),No(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Mc(c,bn(n===1?l[u]:l[u].b,r));return c}function No(e,r,n){for(var t in n){var i=n[t];t==="a1"?jd(e,i):t==="a0"?Gd(e,r,i):t==="a3"?Rd(e,i):t==="a4"?Nd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function jd(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Rd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Nd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Gd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Hd(r,o),e.addEventListener(i,c,kc&&{passive:Nc(o)<2}),t[i]=c}}var kc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){kc=!0}}))}catch{}function Hd(e,r){function n(t){var i=n.q,o=Mr(i.a,t);if(!!Ir(o)){for(var c=Nc(i),l=o.a,u=c?c<3?l.a:l.aA:l,f=c==1?l.b:c==3&&l.dH,m=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&t.preventDefault(),e),s,b;s=m.j;){if(typeof s=="function")u=s(u);else for(var b=s.length;b--;)u=s[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Wd(e,r){return e.$==r.$&&da(e.a,r.a)}function k$(e,r){var n=[];return Er(e,r,n,0),n}function ar(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Er(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Xd(r),o=1;else{ar(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Er(e.k,r.k,m,0),m.length>0&&ar(n,1,t,m);return;case 4:for(var s=e.j,b=r.j,d=!1,y=e.k;y.$===4;)d=!0,typeof s!="object"?s=[s,y.j]:s.push(y.j),y=y.k;for(var _=r.k;_.$===4;)d=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(d&&s.length!==b.length){ar(n,0,t,r);return}(d?!Ud(s,b):s!==b)&&ar(n,2,t,b),Er(y,_,n,t+1);return;case 0:e.a!==r.a&&ar(n,3,t,r.a);return;case 1:Kl(e,r,n,t,Od);return;case 2:Kl(e,r,n,t,Jd);return;case 3:if(e.h!==r.h){ar(n,0,t,r);return}var S=Dc(e.d,r.d);S&&ar(n,4,t,S);var C=r.i(e.g,r.g);C&&ar(n,5,t,C);return}}}function Ud(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Kl(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){ar(n,0,t,r);return}var o=Dc(e.d,r.d);o&&ar(n,4,t,o),i(e,r,n,t)}function Dc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Dc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Wd(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Od(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?ar(n,6,t,{v:l,i:c-l}):c<l&&ar(n,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var m=i[f];Er(m,o[f],n,++t),t+=m.b||0}}function Jd(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,m=u.length,s=0,b=0,d=t;s<f&&b<m;){var y=l[s],_=u[b],S=y.a,C=_.a,x=y.b,z=_.b,W=void 0,X=void 0;if(S===C){d++,Er(x,z,i,d),d+=x.b||0,s++,b++;continue}var ae=l[s+1],te=u[b+1];if(ae){var ie=ae.a,ne=ae.b;X=C===ie}if(te){var q=te.a,de=te.b;W=S===q}if(W&&X){d++,Er(x,de,i,d),Ga(o,i,S,z,b,c),d+=x.b||0,d++,Ha(o,i,S,ne,d),d+=ne.b||0,s+=2,b+=2;continue}if(W){d++,Ga(o,i,C,z,b,c),Er(x,de,i,d),d+=x.b||0,s+=1,b+=2;continue}if(X){d++,Ha(o,i,S,x,d),d+=x.b||0,d++,Er(ne,z,i,d),d+=ne.b||0,s+=2,b+=1;continue}if(ae&&ie===q){d++,Ha(o,i,S,x,d),Ga(o,i,C,z,b,c),d+=x.b||0,d++,Er(ne,de,i,d),d+=ne.b||0,s+=2,b+=2;continue}break}for(;s<f;){d++;var y=l[s],x=y.b;Ha(o,i,y.a,x,d),d+=x.b||0,s++}for(;b<m;){var pe=pe||[],_=u[b];Ga(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||c.length>0||pe)&&ar(n,8,t,{w:i,x:c,y:pe})}var D$="_elmW6BL";function Ga(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Er(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Ga(e,r,n+D$,t,i,o)}function Ha(e,r,n,t,i){var o=e[n];if(!o){var c=ar(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Er(t,o.z,l,i),ar(r,9,i,{w:l,A:o});return}Ha(e,r,n+D$,t,i)}function V$(e,r,n,t){Wa(e,r,n,0,0,r.b,t)}function Wa(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var f=l.$;if(f===1)V$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&Wa(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var s=l.s;if(s){s.A.s=e;var m=s.w;m.length>0&&Wa(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var b=r.$;if(b===4){for(var d=r.k;d.$===4;)d=d.k;return Wa(e,d,n,t,i+1,o,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,S=0;S<y.length;S++){i++;var C=b===1?y[S]:y[S].b,x=i+(C.b||0);if(i<=u&&u<=x&&(t=Wa(_[S],C,n,t,i,x,c),!(l=n[t])||(u=l.r)>o))return t;i=x}return t}function A$(e,r,n,t){return n.length===0?e:(V$(e,r,n,t),fi(e,n))}function fi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=qd(i,t);i===e&&(e=o)}return e}function qd(e,r){switch(r.$){case 0:return Yd(e,r.s,r.u);case 4:return No(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return fi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(bn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=fi(e,o.w),e;case 8:return Zd(e,r);case 5:return r.s(e);default:Va(10)}}function Yd(e,r,n){var t=e.parentNode,i=bn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Zd(e,r){var n=r.s,t=Kd(n.y,r);e=fi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:bn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&Mc(e,t),e}function Kd(e,r){if(!!e){for(var n=on.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Mc(n,o.c===2?o.s:bn(o.z,r.u))}return n}}function Vc(e){if(e.nodeType===3)return Ro(e.textContent);if(e.nodeType!==1)return Ro("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Kr(a(Nr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Kr(Vc(f[t]),u);return h(mn,l,r,u)}function Xd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Qd=re(function(e,r,n,t){return Pc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=t.node,u=Vc(l);return F$(o,function(f){var m=c(f),s=k$(u,m);l=A$(l,u,s,i),u=m})})});re(function(e,r,n,t){return Pc(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=on.title,f=on.body,m=Vc(f);return F$(o,function(s){vi=c;var b=l(s),d=mn("body")(D)(b.fU),y=k$(m,d);f=A$(f,m,y,i),m=d,vi=0,u!==b.id&&(on.title=u=b.id)})})});var mi=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function F$(e,r){r(e);var n=0;function t(){n=n===1?0:(mi(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&mi(t),n=2)}}v(function(e,r){return a(Hc,Ct,fn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Hc,Ct,fn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Hc,Ct,fn(function(){history.replaceState({},"",r),e()}))});var ep={addEventListener:function(){},removeEventListener:function(){}},rp=typeof window!="undefined"?window:ep;T(function(e,r,n){return S$(fn(function(t){function i(o){Cc(n(o))}return e.addEventListener(r,i,kc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Mr(e,r);return Ir(n)?Y(n.a):J});function I$(e,r){return fn(function(n){mi(function(){var t=document.getElementById(e);n(t?Qn(r(t)):ud(y0(e)))})})}function np(e){return fn(function(r){mi(function(){r(Qn(e()))})})}v(function(e,r){return I$(r,function(n){return n[e](),wt})});v(function(e,r){return np(function(){return rp.scroll(e,r),wt})});T(function(e,r,n){return I$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,wt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var ap=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return Y(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var tp=T(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var s=u[f];m[--f]=s?Y(s):J}t.push(P(wf,u[0],u.index,i,$(m))),l=r.lastIndex}return r.lastIndex=c,$(t)});re(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?Y(f):J}return n(P(wf,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});T(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var ip=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/op(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function op(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ac=new Float64Array(3),Xl=new Float64Array(3),Ql=new Float64Array(3),cp=T(function(e,r,n){return new Float64Array([e,r,n])}),lp=function(e){return e[0]},up=function(e){return e[1]},$p=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var vp=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function E$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(E$);function B$(e,r,n){return n===void 0&&(n=new Float64Array(3)),si(E$(e,r,n),n)}v(B$);function j$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function si(e,r){r===void 0&&(r=new Float64Array(3));var n=1/j$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var fp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ua=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ua);function Go(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Go);v(function(e,r){var n,t=Ac,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ua(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ua(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ua(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ua(r,t)+e[14])/n,i});var mp=re(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var sp=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},dp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/pp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function pp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var gp=new Float64Array(16),hp=new Float64Array(16),bp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},_p=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function R$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}Lr(R$);re(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return R$(c,l,o,i,n,t)});function N$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}Lr(N$);re(function(e,r,n,t){return N$(e,r,n,t,-1,1)});function G$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],m=e[7],s=e[8],b=e[9],d=e[10],y=e[11],_=e[12],S=e[13],C=e[14],x=e[15],z=r[0],W=r[1],X=r[2],ae=r[3],te=r[4],ie=r[5],ne=r[6],q=r[7],de=r[8],pe=r[9],ze=r[10],Se=r[11],me=r[12],Te=r[13],F=r[14],I=r[15];return n[0]=t*z+l*W+s*X+_*ae,n[1]=i*z+u*W+b*X+S*ae,n[2]=o*z+f*W+d*X+C*ae,n[3]=c*z+m*W+y*X+x*ae,n[4]=t*te+l*ie+s*ne+_*q,n[5]=i*te+u*ie+b*ne+S*q,n[6]=o*te+f*ie+d*ne+C*q,n[7]=c*te+m*ie+y*ne+x*q,n[8]=t*de+l*pe+s*ze+_*Se,n[9]=i*de+u*pe+b*ze+S*Se,n[10]=o*de+f*pe+d*ze+C*Se,n[11]=c*de+m*pe+y*ze+x*Se,n[12]=t*me+l*Te+s*F+_*I,n[13]=i*me+u*Te+b*F+S*I,n[14]=o*me+f*Te+d*F+C*I,n[15]=c*me+m*Te+y*F+x*I,n}v(G$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],m=e[9],s=e[10],b=e[12],d=e[13],y=e[14],_=r[0],S=r[1],C=r[2],x=r[4],z=r[5],W=r[6],X=r[8],ae=r[9],te=r[10],ie=r[12],ne=r[13],q=r[14];return n[0]=t*_+c*S+f*C,n[1]=i*_+l*S+m*C,n[2]=o*_+u*S+s*C,n[3]=0,n[4]=t*x+c*z+f*W,n[5]=i*x+l*z+m*W,n[6]=o*x+u*z+s*W,n[7]=0,n[8]=t*X+c*ae+f*te,n[9]=i*X+l*ae+m*te,n[10]=o*X+u*ae+s*te,n[11]=0,n[12]=t*ie+c*ne+f*q+b,n[13]=i*ie+l*ne+m*q+d,n[14]=o*ie+u*ne+s*q+y,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=si(r,Ac);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var t=new Float64Array(16),i=1/j$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),s=o*m,b=c*m,d=l*m,y=o*c*f,_=o*l*f,S=c*l*f,C=o*o*f+u,x=y+d,z=_-b,W=y-d,X=c*c*f+u,ae=S+s,te=_+b,ie=S-s,ne=l*l*f+u,q=n[0],de=n[1],pe=n[2],ze=n[3],Se=n[4],me=n[5],Te=n[6],F=n[7],I=n[8],E=n[9],B=n[10],R=n[11],N=n[12],G=n[13],H=n[14],Ne=n[15];return t[0]=q*C+Se*x+I*z,t[1]=de*C+me*x+E*z,t[2]=pe*C+Te*x+B*z,t[3]=ze*C+F*x+R*z,t[4]=q*W+Se*X+I*ae,t[5]=de*W+me*X+E*ae,t[6]=pe*W+Te*X+B*ae,t[7]=ze*W+F*X+R*ae,t[8]=q*te+Se*ie+I*ne,t[9]=de*te+me*ie+E*ne,t[10]=pe*te+Te*ie+B*ne,t[11]=ze*te+F*ie+R*ne,t[12]=N,t[13]=G,t[14]=H,t[15]=Ne,t});function yp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}T(yp);re(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function xp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}T(xp);re(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],m=t[5],s=t[6],b=t[7],d=t[8],y=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=m,i[6]=s,i[7]=b,i[8]=d,i[9]=y,i[10]=_,i[11]=S,i[12]=o*e+f*r+d*n+t[12],i[13]=c*e+m*r+y*n+t[13],i[14]=l*e+s*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],m=r[4],s=r[5],b=r[6],d=r[7],y=r[8],_=r[9],S=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=m,n[5]=s,n[6]=b,n[7]=d,n[8]=y,n[9]=_,n[10]=S,n[11]=C,n[12]=c*t+m*i+y*o+r[12],n[13]=l*t+s*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+d*i+C*o+r[15],n});T(function(e,r,n){var t=B$(e,r,Ac),i=si(Go(n,t,Xl),Xl),o=si(Go(t,i,Ql),Ql),c=gp,l=hp;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,G$(c,l)});T(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var eu=0;function ot(e,r){for(;r.b;r=r.b)e(r.a)}function Fc(e){for(var r=0;e.b;e=e.b)r++;return r}var wp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Sp=qe(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Cp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Lp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Pp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Mp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),zp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Tp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),kp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Dp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Vp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Ap=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Fp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Ip=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},H$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},W$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ep=function(e){e.gl.disable(e.gl.CULL_FACE)},Bp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},jp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Rp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ru=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Np=[Ap,Fp,Ip,H$,W$,Ep,Bp,jp,Rp];function nu(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Gp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function U$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Hp(e,r,n,t){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(d,y,_,S,C){var x;if(i===1)for(x=0;x<y;x++)d[_++]=y===1?S[C]:S[C][x];else o.forEach(function(z){for(x=0;x<y;x++)d[_++]=y===1?S[z][C]:S[z][C][x]})}var u=U$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,s=new u.type(Fc(n.b)*m);ot(function(d){l(s,u.size*u.arraySize,f,d,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,s,e.STATIC_DRAW),b}function Wp(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=Up(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Fc(r.b),indexBuffer:null,buffers:{}}}function Up(e,r){var n=new Uint32Array(Fc(e)*r),t=0,i;return ot(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function au(e,r){return e+"#"+r}var O$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),H$(n),W$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=au(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=eu++,f||(f=nu(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=eu++,m||(m=nu(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var s=Gp(t,f,m);l={glProgram:s,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Op(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(s,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var d=t.getActiveAttrib(s,u),y=t.getAttribLocation(s,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(y)}c=au(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),Jp(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Wp(t,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],y=l.activeAttributeLocations[u],_.buffers[d.name]===void 0&&(_.buffers[d.name]=Hp(t,d,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[d.name]);var S=U$(t,d.type);if(S.arraySize===1)t.enableVertexAttribArray(y),t.vertexAttribPointer(y,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,x=C*S.arraySize,z=0;z<S.arraySize;z++)t.enableVertexAttribArray(y+z),t.vertexAttribPointer(y+z,S.size,S.baseType,!1,x,C*z)}for(n.toggle=!n.toggle,ot(N_(n),o.a),u=0;u<ru.length;u++){var W=n[ru[u]];W.toggle!==n.toggle&&W.enabled&&(Np[u](n),W.enabled=!1,W.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return ot(i,e.g),r});function Op(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(d,y){var _=y.name,S=e.getUniformLocation(d,_);switch(y.type){case e.INT:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};case e.FLOAT:return function(x){o[_]!==x&&(e.uniform1f(S,x),o[_]=x)};case e.FLOAT_VEC2:return function(x){o[_]!==x&&(e.uniform2f(S,x[0],x[1]),o[_]=x)};case e.FLOAT_VEC3:return function(x){o[_]!==x&&(e.uniform3f(S,x[0],x[1],x[2]),o[_]=x)};case e.FLOAT_VEC4:return function(x){o[_]!==x&&(e.uniform4f(S,x[0],x[1],x[2],x[3]),o[_]=x)};case e.FLOAT_MAT4:return function(x){o[_]!==x&&(e.uniformMatrix4fv(S,!1,new Float32Array(x)),o[_]=x)};case e.SAMPLER_2D:var C=c++;return function(x){e.activeTexture(e.TEXTURE0+C);var z=l.textures.get(x);z||(z=x.ge(e),l.textures.set(x,z)),e.bindTexture(e.TEXTURE_2D,z),o[_]!==x&&(e.uniform1i(S,C),o[_]=x)};case e.BOOL:return function(x){o[_]!==x&&(e.uniform1i(S,x),o[_]=x)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),s=0;s<m;s++){var b=e.getActiveUniform(i,s);f[t[b.name]||b.name]=u(i,b)}return f}function Jp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var qp=T(function(e,r,n){return Md(r,{g:n,f:{},h:e},r0,n0)}),Yp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Zp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Kp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Xp=v(function(e,r){e.contextAttributes.antialias=!0}),Qp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),e0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function r0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ot(function(i){return a(R_,r,i)},e.h);var n=on.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),wp(function(){return a(O$,e,n)})):(n=on.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function n0(e,r){return r.f=e.f,O$(r)}var M=fs,Gt=us,J$=T(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(Gt,e,l,f)}else{var u=c.a;return h(Gt,o,l,u)}});return h(Gt,o,h(Gt,e,r,i),t)}),Ic=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,t,i,h(Ic,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),tu=function(e){return h(Ic,T(function(r,n,t){return a(M,L(r,n),t)}),D,e)},q$=1,a0=2,Y$=0,ir=function(e){return{$:1,a:e}},Ec=v(function(e,r){return{$:3,a:e,b:r}}),iu=v(function(e,r){return{$:0,a:e,b:r}}),Z$=v(function(e,r){return{$:1,a:e,b:r}}),We=function(e){return{$:0,a:e}},t0=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},J={$:1},i0=Bs,o0=td,k=y$,le=v(function(e,r){return a(As,e,Fi(r))}),Bc=v(function(e,r){return $(a(Vs,e,r))}),K$=function(e){return a(le,`
    `,a(Bc,`
`,e))},Re=T(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),Yn=function(e){return h(Re,v(function(r,n){return n+1}),0,e)},c0=ms,l0=T(function(e,r,n){e:for(;;)if(he(e,r)<1){var t=e,i=r-1,o=a(M,r,n);e=t,r=i,n=o;continue e}else return n}),jr=v(function(e,r){return h(l0,e,r,D)}),X$=v(function(e,r){return h(c0,e,a(jr,0,Yn(r)-1),r)}),Zr=Us,Q$=function(e){var r=Zr(e);return 97<=r&&r<=122},ev=function(e){var r=Zr(e);return r<=90&&65<=r},u0=function(e){return Q$(e)||ev(e)},$0=function(e){var r=Zr(e);return r<=57&&48<=r},v0=function(e){return Q$(e)||ev(e)||$0(e)},sr=function(e){return h(Re,M,D,e)},Aa=zs,f0=v(function(e,r){return`

(`+(k(e+1)+(") "+K$(m0(r))))}),m0=function(e){return a(s0,e,D)},s0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=Aa(n);if(_.$===1)return!1;var S=_.a,C=S.a,x=S.b;return u0(C)&&a(i0,v0,x)}(),i=t?"."+n:"['"+(n+"']"),u=c,f=a(M,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(k(o)+"]"),u=c,f=a(M,l,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var s=function(){return r.b?"The Json.Decode.oneOf at json"+a(le,"",sr(r)):"Json.Decode.oneOf"}(),y=s+(" failed in the following "+(k(Yn(m))+" ways:"));return a(le,`

`,a(M,y,a(X$,f0,m)))}else{var c=m.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(le,"",sr(r)):"!"}();default:var b=e.a,d=e.b,y=function(){return r.b?"Problem with the value at json"+(a(le,"",sr(r))+`:

    `):`Problem with the given value:

`}();return y+(K$(a(o0,4,d))+(`

`+b))}}),wr=32,Ho=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Wo=ts,ct=xs,jc=v(function(e,r){return Wl(r)/Wl(e)}),Oa=_s,lt=ct(a(jc,2,wr)),rv=P(Ho,0,lt,Wo,Wo),nv=os,av=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var tv=ws,Uo=is,nr=v(function(e,r){return he(e,r)>0?e:r}),d0=function(e){return{$:0,a:e}},Rc=cs,p0=v(function(e,r){e:for(;;){var n=a(Rc,wr,e),t=n.a,i=n.b,o=a(M,d0(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return sr(o)}}),iv=function(e){var r=e.a;return r},g0=v(function(e,r){e:for(;;){var n=ct(r/wr);if(n===1)return a(Rc,wr,e).a;var t=a(p0,e,D),i=n;e=t,r=i;continue e}}),ov=v(function(e,r){if(r.n){var n=r.n*wr,t=tv(a(jc,wr,n-1)),i=e?sr(r.C):r.C,o=a(g0,i,r.n);return P(Ho,Uo(r.r)+n,a(nr,5,t*lt),o,r.r)}else return P(Ho,Uo(r.r),lt,Wo,r.r)}),h0=qe(function(e,r,n,t,i){e:for(;;){if(r<0)return a(ov,!1,{C:t,n:n/wr|0,r:i});var o=av(h(nv,wr,r,e)),c=e,l=r-wr,u=n,f=a(M,o,t),m=i;e=c,r=l,n=u,t=f,i=m;continue e}}),b0=v(function(e,r){if(e<=0)return rv;var n=e%wr,t=h(nv,n,e-n,r),i=e-n-wr;return V(h0,r,i,e,D,t)}),Ir=function(e){return!e.$},Q=ed,Pe=Ys,K=Qs,Ue=Zs,cv=v(function(e,r){return{a4:r.a4,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),di=rd,_0=nd,ur=Js,Nc=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Rr=function(e){return e},y0=Rr,ou=Lr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),x0=js,Rn=Ts,pa=Fs,St=v(function(e,r){return e<1?r:h(pa,e,Rn(r),r)}),Ii=Ns,Ei=function(e){return e===""},Bi=v(function(e,r){return e<1?"":h(pa,0,e,r)}),lv=Gs,cu=qe(function(e,r,n,t,i){if(Ei(i)||a(x0,"@",i))return J;var o=a(Ii,":",i);if(o.b){if(o.b.b)return J;var c=o.a,l=lv(a(St,c+1,i));if(l.$===1)return J;var u=l;return Y(tr(ou,e,a(Bi,c,i),u,r,n,t))}else return Y(tr(ou,e,i,J,r,n,t))}),lu=re(function(e,r,n,t){if(Ei(t))return J;var i=a(Ii,"/",t);if(i.b){var o=i.a;return V(cu,e,a(St,o,t),r,n,a(Bi,o,t))}else return V(cu,e,"/",r,n,t)}),uu=T(function(e,r,n){if(Ei(n))return J;var t=a(Ii,"?",n);if(t.b){var i=t.a;return P(lu,e,Y(a(St,i+1,n)),r,a(Bi,i,n))}else return P(lu,e,J,r,n)});v(function(e,r){if(Ei(r))return J;var n=a(Ii,"#",r);if(n.b){var t=n.a;return h(uu,e,Y(a(St,t+1,r)),a(Bi,t,r))}else return h(uu,e,J,r)});var w0=Rs,Ct=function(e){},Lt=Qn,S0=Lt(0),uv=re(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var m=f.a,s=f.b,b=n>500?h(Re,e,r,sr(s)):P(uv,e,r,n+1,s);return a(e,i,a(e,c,a(e,u,a(e,m,b))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),er=T(function(e,r,n){return P(uv,e,r,0,n)}),ee=v(function(e,r){return h(er,v(function(n,t){return a(M,e(n),t)}),D,r)}),pi=jo,Gc=v(function(e,r){return a(pi,function(n){return Lt(e(n))},r)}),C0=T(function(e,r,n){return a(pi,function(t){return a(pi,function(i){return Lt(a(e,t,i))},n)},r)}),L0=function(e){return h(er,C0(M),Lt(D),e)},P0=gd,M0=v(function(e,r){var n=r;return S$(a(pi,P0(e),n))}),z0=T(function(e,r,n){return a(Gc,function(t){return 0},L0(a(ee,M0(e),r)))}),T0=T(function(e,r,n){return Lt(0)}),k0=v(function(e,r){var n=r;return a(Gc,e,n)});Yr.Task=dd(S0,z0,T0,k0);var D0=L$("Task"),Hc=v(function(e,r){return D0(a(Gc,e,r))}),V0=Qd,A0=Ps,gi={$:1},$v=function(e){return{$:2,a:e}},Wc={$:0},Tr=v(function(e,r){return{$:0,a:e,b:r}}),Ze=T(function(e,r,n){return r(e(n))}),ea=function(e){var r=e.b.s;return r.a},F0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return Y(a(Tr,r,{s:o,an:c,X:a(M,t,n)}))}else return J},Ve=v(function(e,r){if(r.$)return e;var n=r.a;return n}),I0=T(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dI;return(he(o+r.gp,ea(n).a4)>0?a(Ze,F0,Ve(a(Tr,gi,i))):Rr)(a(Tr,$v({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,f=a(cv,l.gb,Be(r,{a4:l.a4+r.gp})),m=a(e,f,u);return a(Tr,Wc,{s:L(f,m),an:D,X:a(M,i.s,i.X)})}}),vv=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),E0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(M,t,n);e=o,r=c,n=l;continue e}else return n}}),B0=v(function(e,r){return sr(h(E0,e,r,D))}),fv=T(function(e,r,n){if(r<=0)return D;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,x=i.a,o=i.b,c=o.a;return $([x,c]);case 3:if(t.b.b.b.b){var l=t.b,x=l.a,u=l.b,c=u.a,f=u.b,m=f.a;return $([x,c,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var s=t.b,x=s.a,b=s.b,c=b.a,d=b.b,m=d.a,y=d.b,_=y.a,S=y.b;return e>1e3?a(M,x,a(M,c,a(M,m,a(M,_,a(B0,r-4,S))))):a(M,x,a(M,c,a(M,m,a(M,_,h(fv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,x=C.a;return $([x])}}),j0=v(function(e,r){return h(fv,0,e,r)}),R0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Z(sr(n),Z($([t]),i)),c=a(j0,e,o),l=a(vv,e,o);if(l.b){var u=l.a,f=l.b;return a(Tr,gi,{s:u,an:f,X:sr(c)})}else{var m=sr(c);if(m.b){var s=m.a,b=m.b;return a(Tr,gi,{s,an:D,X:b})}else return r}}),N0=function(e){var r=e.b;return a(Tr,gi,r)},G0=function(e){var r=e.b;return a(Tr,$v({dI:ea(e).a4}),r)},H0=function(e){var r=e.b;return a(Tr,Wc,r)},W0=v(function(e,r){switch(e.$){case 1:return N0(r);case 2:return H0(r);case 3:return G0(r);default:var n=e.a;return a(R0,n,r)}}),hi=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),U0=v(function(e,r){return Be(r,{aN:e(r.aN)})}),O0=function(e){return{$:3,a:e}},J0=function(e){return{$:2,a:e}},mv=v(function(e,r){return{$:0,a:e,b:r}}),q0=v(function(e,r){return{$:1,a:e,b:r}}),je=v(function(e,r){if(r.$)return J;var n=r.a;return Y(e(n))}),be=function(e){return e<0?-e:e},sv=Hs,Y0=T(function(e,r,n){return a(Ve,0/0,sv(a(e,r,n)))}),Pt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),Z0=Ds,dv=function(e){return h(Z0,M,D,e)},K0=v(function(e,r){var n=a(Pt,function(t){return t!=="0"&&t!=="."},dv(r));return Z(e&&n?"-":"",r)}),ve=y$,Oo=Ms,pv=Os,gv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Aa(n);if(t.$===1)return"01";var i=t.a;return a(Oo,"0",gv(i))}else{var o=Zr(r);return o>=48&&o<57?a(Oo,pv(o+1),n):"0"}},Jo=ys,X0=Ls,ji=function(e){return a(Oo,e,"")},hv=T(function(e,r,n){return e<=0?n:h(hv,e>>1,Z(r,r),e&1?Z(n,r):n)}),ut=v(function(e,r){return h(hv,e,r,"")}),qo=T(function(e,r,n){return Z(n,a(ut,e-Rn(n),ji(r)))}),Yo=ks,bv=function(e){var r=a(Bc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Q0=function(e){var r=a(Bc,"e",ve(be(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ve,0,lv(a(w0,"+",i)?a(St,1,i):i)),c=bv(n),l=c.a,u=c.b,f=Z(l,u),m=o<0?a(Ve,"0",a(je,function(s){var b=s.a,d=s.b;return b+("."+d)},a(je,hi(ji),Aa(Z(a(ut,be(o),"0"),f))))):h(qo,o+1,"0",f);return Z(e<0?"-":"",m)}else{var n=r.a;return Z(e<0?"-":"",n)}else return""},eg=T(function(e,r,n){if(Jo(n)||X0(n))return ve(n);var t=n<0,i=bv(Q0(be(n))),o=i.a,c=i.b,l=Rn(o)+r,u=Z(a(ut,-l+1,"0"),h(qo,l,"0",Z(o,c))),f=Rn(u),m=a(nr,1,l),s=a(e,t,h(pa,m,f,u)),b=h(pa,0,m,u),d=s?Yo(a(Ve,"1",a(je,gv,Aa(Yo(b))))):b,y=Rn(d),_=d==="0"?d:r<=0?Z(d,a(ut,be(r),"0")):he(r,Rn(c))<0?h(pa,0,y-r,d)+("."+h(pa,y-r,y,d)):Z(o+".",h(qo,r,"0",c));return a(K0,t,_)}),_v=eg(v(function(e,r){var n=Aa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Zr(i))})),rg=Y0(_v),ng=T(function(e,r,n){var t=a(jc,10,be(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(rg,i,n)}),yv=vs,Ri=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(yv,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return Y(t);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=qe(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Xr={$:-2},Pa=qe(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,s=t.d,b=t.e;return V(fe,0,r,n,V(fe,1,f,m,s,b),V(fe,1,o,c,l,u))}else return V(fe,e,o,c,V(fe,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,d=t.d;d.a;var y=d.b,_=d.c,S=d.d,C=d.e,b=t.e;return V(fe,0,f,m,V(fe,1,y,_,S,C),V(fe,1,r,n,b,i))}else return V(fe,e,r,n,t,i)}),Zo=T(function(e,r,n){if(n.$===-2)return V(fe,0,e,r,Xr,Xr);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a(yv,e,i);switch(u){case 0:return V(Pa,t,i,o,h(Zo,e,r,c),l);case 1:return V(fe,t,i,r,c,l);default:return V(Pa,t,i,o,c,h(Zo,e,r,l))}}),ya=T(function(e,r,n){var t=h(Zo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return V(fe,1,i,o,c,l)}else{var u=t;return u}}),ag=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},xv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var m=f.b,s=f.c,b=f.d;b.a;var d=b.b,y=b.c,_=b.d,S=b.e,C=f.e;return V(fe,0,d,y,V(fe,1,n,t,V(fe,0,o,c,l,u),_),V(fe,1,m,s,S,C))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,u=x.e,z=e.e;z.a;var m=z.b,s=z.c,b=z.d,C=z.e;return V(fe,1,n,t,V(fe,0,o,c,l,u),V(fe,0,m,s,b,C))}else return e},$u=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,m=l.d,s=l.e,b=i.e,d=e.e;d.a;var y=d.b,_=d.c,S=d.d,C=d.e;return V(fe,0,o,c,V(fe,1,u,f,m,s),V(fe,1,n,t,b,V(fe,0,y,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,z=x.d,b=x.e,W=e.e;W.a;var y=W.b,_=W.c,S=W.d,C=W.e;return V(fe,1,n,t,V(fe,0,o,c,z,b),V(fe,0,y,_,S,C))}else return e},tg=Ai(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,m=o.e;return V(fe,n,l,u,f,V(fe,0,t,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var s=c.d;return s.a,$u(r)}else break e;else return c.a,c.d,$u(r);else break e;return r}}),ri=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(fe,r,n,t,ri(i),l);var u=xv(e);if(u.$===-1){var f=u.a,m=u.b,s=u.c,b=u.d,d=u.e;return V(Pa,f,m,s,ri(b),d)}else return Xr}else return V(fe,r,n,t,ri(i),l)}else return Xr},et=v(function(e,r){if(r.$===-2)return Xr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(he(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(fe,n,t,i,a(et,e,o),c);var u=xv(r);if(u.$===-1){var f=u.a,m=u.b,s=u.c,b=u.d,d=u.e;return V(Pa,f,m,s,a(et,e,b),d)}else return Xr}else return V(fe,n,t,i,a(et,e,o),c);else return a(ig,e,wc(tg,e,r,n,t,i,o,c))}),ig=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(_e(e,t)){var l=ag(c);if(l.$===-1){var u=l.b,f=l.c;return V(Pa,n,u,f,o,ri(c))}else return Xr}else return V(Pa,n,t,i,o,a(et,e,c))}else return Xr}),og=v(function(e,r){var n=a(et,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return V(fe,1,t,i,o,c)}else{var l=n;return l}}),Ht=T(function(e,r,n){var t=r(a(Ri,e,n));if(t.$)return a(og,e,n);var i=t.a;return h(ya,e,i,n)}),cg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Ht,r,je(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(q0,L(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Ht,r,je(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(mv,L(o,c),h(ng,o,c,n))}));case 3:var r=e.a,n=e.b;return a(Ht,r,je(function(t){return t.$===3?O0(n):t}));default:var r=e.a,n=e.b;return a(Ht,r,je(function(t){return t.$===2?J0(n):t}))}},lg=function(e){return U0(cg(e))},ug=v(function(e,r){return a(ee,lg(e),r)}),$g=v(function(e,r){return Be(r,{gb:a(ug,e,r.gb)})}),vg=v(function(e,r){var n=r.a,t=r.b;return a(Tr,n,Be(t,{s:a(hi,$g(e),t.s)}))}),Ko=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),fg=T(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Tr,t,Be(i,{s:a(Ko,a(e,o.a,r),o)}))}),mg=re(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Be(t,{bx:!t.bx});case 2:var i=n.a;return Be(t,{R:h(I0,e,i,t.R)});case 3:var o=n.a;return Be(t,{bq:o});case 4:var c=n.a;return Be(t,{R:a(vg,c,t.R)});case 5:var l=n.a;return Be(t,{R:h(fg,r,l,t.R)});default:var u=n.a;return Be(t,{R:a(W0,u,t.R)})}}),sg=v(function(e,r){return a(Tr,Wc,{s:L(e,r(e)),an:D,X:D})}),dg=hd,vu=dg(D),pg=function(e){return{$:2,a:e}},bi=Xs,Ma=Ks,gg=wd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({a4:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(s){return ur({fJ:s,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",bi(Ma)))},a(K,"left",Pe))},a(K,"pressedKeys",bi(Ma)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue))))),hg=function(e){return e.dO,gg(pg)},bg=function(e){return{$:5,a:e}},_g={$:0},_i=v(function(e,r){return e}),yg=function(e){var r=e.b.s;return r.b},xg=function(e){return{$:1,a:e}},wg=xg,wv=function(e){return{$:8,a:e}},we=wv,$t=function(e){return{$:0,a:e}},Mt=T(function(e,r,n){return e(r(n))}),Sg=a(Mt,$t,_i),hn=Sg,Ae=function(e){return{$:1,a:e}},nn=Ae,Sv=v(function(e,r){return{$:9,a:e,b:r}}),Zn={$:0},Cv=v(function(e,r){return r.$===3?Zn:a(Sv,e,r)}),Xo=function(e){return a(Cv,4,e)},p={fy:"a",cM:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cN:"ah",cO:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b2:"bn",fZ:"bs",b5:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bu:"cl",cc:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",cj:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",bf:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cG:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Uc=w$,Vr=v(function(e,r){return a(zc,e,Uc(r))}),zr=Vr("className"),xr=function(e){return Ae(zr(e))},Lv=v(function(e,r){return{$:2,a:e,b:r}}),Cg=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},Cr=2,Lg={$:0},ra=Lg,Pg={$:0},Mg=p.fK+(" "+p.aw),zg=p.fK+(" "+p.gC),Tg=p.fK+(" "+p.eY),kg=p.fK+(" "+p.eZ),Dg=p.fK+(" "+p.af),Vg=p.fK+(" "+p.hL),Ag=function(e){switch(e){case 0:return Dg;case 1:return Mg;case 2:return Vg;case 3:return zg;case 4:return kg;default:return Tg}},fu=function(e){return{$:1,a:e}},Bn={$:0},Qo=function(e){return{$:1,a:e}},mu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Z(n,e);case 2:var t=r.a;return Z(e,t);default:var n=r.a,t=r.b;return Z(n,Z(e,t))}}),su=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Z(a(ee,function(o){return L(e,o)},t),r);case 2:var i=n.a;return Z(r,a(ee,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return Z(a(ee,function(o){return L(e,o)},t),Z(r,a(ee,function(o){return L(e,o)},i)))}}),Wt=4,Fg=function(e){return{$:0,a:e}},Ig=function(e){return{$:1,a:e}},xe=function(e){return e>31?Ig(1<<e-32):Fg(1<<e)},Pv=xe(41),Mv=xe(40),zv=xe(42),Tv=xe(43),za=mn("div"),Oc=Xr,kv=Oc,Jr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Jr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Jr(o))}},Ie=Ss,Ee=function(e){return k(Ie(e*255))},Jc=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Ee(n)+("-"+(Ee(t)+("-"+Ee(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,s=f.b,b=f.c,d=e.c,y=d.a,_=d.b,S=d.c,C=e.d;return Y("tfrm-"+(Ee(c)+("-"+(Ee(l)+("-"+(Ee(u)+("-"+(Ee(m)+("-"+(Ee(s)+("-"+(Ee(b)+("-"+(Ee(y)+("-"+(Ee(_)+("-"+(Ee(S)+("-"+Ee(C))))))))))))))))))))}},vt=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(le,"-",a(ee,Jr,i.hB))+("-cols-"+(a(le,"-",a(ee,Jr,i.ak))+("-space-x-"+(Jr(i.hP.a)+("-space-y-"+Jr(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(le," ",a(ee,function(m){var s=vt(m);if(s==="")return"";var b=s;return b+("-"+u)},l));default:var f=e.a;return a(Ve,"",Jc(f))}},Eg=v(function(e,r){var n=r;return h(ya,e,0,n)}),Bg=v(function(e,r){var n=a(Ri,e,r);return!n.$}),jg=v(function(e,r){var n=r;return a(Bg,e,n)}),Dv=v(function(e,r){var n=r.a,t=r.b,i=vt(e);return a(jg,i,n)?r:L(a(Eg,i,n),a(M,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),rt=v(function(e,r){return{$:0,a:e,b:r}}),w=function(e){return"."+e},Rg=T(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(M,i,n)}),yn=v(function(e,r){return h(er,Rg(e),D,r)}),ga=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ie(r*255))+(","+k(Ie(n*255))+(","+k(Ie(t*255))+(","+(ve(i)+")")))))},ec=function(e){return a(le," ",a(yn,Rr,$([e.ej?Y("inset"):J,Y(ve(e.eV.a)+"px"),Y(ve(e.eV.b)+"px"),Y(ve(e.a2)+"px"),Y(ve(e.bj)+"px"),Y(ga(e.b7))])))},Vv=function(e){return $([a(rt,w(p.ea)+":focus-within",a(yn,Rr,$([a(je,function(r){return a(ue,"border-color",ga(r))},e.fW),a(je,function(r){return a(ue,"background-color",ga(r))},e.fO),a(je,function(r){return a(ue,"box-shadow",ec({a2:r.a2,b7:r.b7,ej:!1,eV:a(Ko,Oa,a(hi,Oa,r.eV)),bj:r.bj}))},e.hH),Y(a(ue,"outline","none"))]))),a(rt,w(p.fK)+":focus .focusable, "+(w(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(w(p.fK)+" .focusable-thumb"))),a(yn,Rr,$([a(je,function(r){return a(ue,"border-color",ga(r))},e.fW),a(je,function(r){return a(ue,"background-color",ga(r))},e.fO),a(je,function(r){return a(ue,"box-shadow",ec({a2:r.a2,b7:r.b7,ej:!1,eV:a(Ko,Oa,a(hi,Oa,r.eV)),bj:r.bj}))},e.hH),Y(a(ue,"outline","none"))])))])},Or=function(e){return mn(z$(e))},Av=v(function(e,r){return a(zc,Vd(e),T$(r))}),fo=v(function(e,r){return{$:2,a:e,b:r}}),qc=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),hr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),Ng=v(function(e,r){return{$:3,a:e,b:r}}),Fv=$([0,1,2,3,4,5]),Gg=v(function(e,r){return r.b?h(er,M,r,e):e}),dr=function(e){return h(er,Gg,D,e)},na=v(function(e,r){return dr(a(ee,e,r))}),Hg=function(e){switch(e){case 0:return w(p.gc);case 1:return w(p.ca);case 2:return w(p.cc);case 3:return w(p.bu);case 4:return w(p.cb);default:return w(p.ax)}},yi=function(e){switch(e){case 0:return w(p.fH);case 1:return w(p.fA);case 2:return w(p.dZ);case 3:return w(p.dY);case 4:return w(p.fB);default:return w(p.fC)}},Ja=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,Hg(n),i),a(O,w(p.fK),$([a(A,yi(n),o)]))])};return qc(a(na,r,Fv))},du=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,w(p.c_),$([a(g,"z-index","0"),a(O,w(p.fQ),$([a(g,"z-index","-1")]))])),a(A,w(p.hG),$([a(O,w(p.Y),$([a(A,w(p.c0),$([a(g,"flex-grow","0")])),a(A,w(p.dQ),$([a(g,"align-self","auto !important")]))]))])),a(O,w(p.c$),$([a(g,"height","auto")])),a(O,w(p.c0),$([a(g,"flex-grow","100000")])),a(O,w(p.dQ),$([a(g,"width","100%")])),a(O,w(p.fv),$([a(g,"width","100%")])),a(O,w(p.dP),$([a(g,"align-self","flex-start")])),Ja(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(O,w(p.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),Wg=function(e){var r=function(n){return $([a(O,w(p.fK),$([a(A,yi(n),e(n))]))])};return qc(a(na,r,Fv))},Ug=function(){return $([0,1,2,3,4,5])}(),Og=$([a(hr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(hr,Z(w(p.fK),Z(w(p.hL),w(p.gN))),$([a(g,"display","block"),a(A,w(p.c0),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,w(p.dQ),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(hr,w(p.fK)+":focus",$([a(g,"outline","none")])),a(hr,w(p.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,Z(w(p.fK),w(p.c0)),$([a(g,"height","100%"),a(O,w(p.c0),$([a(g,"height","100%")]))])),a(O,w(p.gP),$([a(A,w(p.bf),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(hr,w(p.bf),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,w(p.hL),du),qc(function(e){return a(ee,e,Ug)}(function(e){switch(e){case 0:return a(A,w(p.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,w(p.c0),$([a(g,"height","auto")])),a(O,w(p.dQ),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,w(p.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,w(p.c0),$([a(g,"height","auto")]))]));case 2:return a(A,w(p.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,w(p.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,w(p.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,w(p.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(hr,w(p.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,w(p.dR),$([a(g,"flex-wrap","wrap")])),a(A,w(p.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,w(p.gf),$([a(g,"cursor","pointer")])),a(A,w(p.gg),$([a(g,"cursor","text")])),a(A,w(p.hn),$([a(g,"pointer-events","none !important")])),a(A,w(p.b5),$([a(g,"pointer-events","auto !important")])),a(A,w(p.a$),$([a(g,"opacity","0")])),a(A,w(p.aU),$([a(g,"opacity","1")])),a(A,w(Z(p.gK,p.a$))+":hover",$([a(g,"opacity","0")])),a(A,w(Z(p.gK,p.aU))+":hover",$([a(g,"opacity","1")])),a(A,w(Z(p.gx,p.a$))+":focus",$([a(g,"opacity","0")])),a(A,w(Z(p.gx,p.aU))+":focus",$([a(g,"opacity","1")])),a(A,w(Z(p.cM,p.a$))+":active",$([a(g,"opacity","0")])),a(A,w(Z(p.cM,p.aU))+":active",$([a(g,"opacity","1")])),a(A,w(p.fj),$([a(g,"transition",a(le,", ",a(ee,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,w(p.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,w(p.hE),$([a(g,"overflow-x","auto"),a(A,w(p.af),$([a(g,"flex-shrink","1")]))])),a(A,w(p.hF),$([a(g,"overflow-y","auto"),a(A,w(p.aw),$([a(g,"flex-shrink","1")])),a(A,w(p.hL),$([a(g,"flex-shrink","1")]))])),a(A,w(p.f7),$([a(g,"overflow","hidden")])),a(A,w(p.f8),$([a(g,"overflow-x","hidden")])),a(A,w(p.f9),$([a(g,"overflow-y","hidden")])),a(A,w(p.dP),$([a(g,"width","auto")])),a(A,w(p.b2),$([a(g,"border-width","0")])),a(A,w(p.fX),$([a(g,"border-style","dashed")])),a(A,w(p.fY),$([a(g,"border-style","dotted")])),a(A,w(p.fZ),$([a(g,"border-style","solid")])),a(A,w(p.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,w(p.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,w(p.hL),du),a(A,w(p.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,w(p.fK),$([a(g,"flex-basis","0%"),a(A,w(p.fu),$([a(g,"flex-basis","auto")])),a(A,w(p.et),$([a(g,"flex-basis","auto")]))])),a(O,w(p.c0),$([a(g,"align-self","stretch !important")])),a(O,w(p.ef),$([a(g,"align-self","stretch !important")])),a(O,w(p.dQ),$([a(g,"flex-grow","100000")])),a(O,w(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+p.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,w(p.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,w(p.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+p.fE,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([a(g,"flex-grow","0")])),Ja(function(e){switch(e){case 0:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return L($([a(g,"justify-content","flex-end")]),D);case 3:return L($([a(g,"justify-content","flex-start")]),D);case 4:return L($([a(g,"justify-content","center")]),D);default:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,w(p.hO),$([a(g,"justify-content","space-between")])),a(A,w(p.cj),$([a(g,"align-items","baseline")]))])),a(A,w(p.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,w(p.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,w(p.ee),$([a(g,"flex-basis","auto")]))])),a(O,w(p.c0),$([a(g,"flex-grow","100000")])),a(O,w(p.dQ),$([a(g,"width","100%")])),a(O,w(p.fv),$([a(g,"width","100%")])),a(O,w(p.dP),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+p.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+p.fF,$([a(g,"flex-grow","1"),a(O,w(p.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(p.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([a(g,"flex-grow","0")])),Ja(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(g,"justify-content","center")]),D)}}),a(O,w(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,w(p.hO),$([a(g,"justify-content","space-between")]))])),a(A,w(p.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,w(p.fK),$([a(g,"width","100%")]))])),a(Ng,L("display","grid"),$([L("display","grid")])),Wg(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,w(p.eY),$([a(g,"display","block"),a(O,w(p.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,w(p.fK+(yi(3)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),a(O,w(p.fK+(yi(2)+(":first-child + ."+p.fK))),$([a(g,"margin","0 !important")])),Ja(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return L(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,w(p.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,w(p.gW),$([a(A,w(p.hL),$([a(g,"flex-basis","auto")]))])),a(A,w(p.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,w(p.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,w(p.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,w(p.c_),$([a(g,"z-index","0"),a(O,w(p.fQ),$([a(g,"z-index","-1")]))])),a(fo,w(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(fo,w(p.eZ),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(fo,w(p.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,w(p.fu),$([a(g,"display","inline-block")])),a(A,w(p.gP),$([a(g,"display","flex")])),a(A,w(p.fQ),$([a(g,"display","flex")])),a(A,w(p.fy),$([a(g,"display","flex")])),a(A,w(p.fR),$([a(g,"display","flex")])),a(A,w(p.hh),$([a(g,"display","flex")])),a(A,w(p.hg),$([a(g,"display","flex")])),a(O,w(p.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,w(p.af),$([a(g,"display","inline")])),a(O,w(p.aw),$([a(g,"display","inline-flex")])),a(O,w(p.gC),$([a(g,"display","inline-grid")])),Ja(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right")]));case 3:return L(D,$([a(g,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,w(p.ia),$([a(g,"font-weight","100")])),a(A,w(p.h1),$([a(g,"font-weight","200")])),a(A,w(p.h5),$([a(g,"font-weight","300")])),a(A,w(p.h7),$([a(g,"font-weight","400")])),a(A,w(p.h6),$([a(g,"font-weight","500")])),a(A,w(p.h9),$([a(g,"font-weight","600")])),a(A,w(p.fV),$([a(g,"font-weight","700")])),a(A,w(p.h0),$([a(g,"font-weight","800")])),a(A,w(p.h2),$([a(g,"font-weight","900")])),a(A,w(p.g2),$([a(g,"font-style","italic")])),a(A,w(p.hU),$([a(g,"text-decoration","line-through")])),a(A,w(p.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,Z(w(p.ih),w(p.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,w(p.ib),$([a(g,"font-style","normal")])),a(A,w(p.h3),$([a(g,"text-align","justify")])),a(A,w(p.cG),$([a(g,"text-align","justify-all")])),a(A,w(p.h$),$([a(g,"text-align","center")])),a(A,w(p.h8),$([a(g,"text-align","right")])),a(A,w(p.h4),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),sn=function(e){return $([a(hr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(hr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},Jg=dr($([a(ee,function(e){return a(hr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(jr,0,6)),a(ee,function(e){return a(hr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(jr,8,32)),a(ee,function(e){return a(hr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(jr,0,24)),$([a(hr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(hr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),sn("zero"),sn("onum"),sn("liga"),sn("dlig"),sn("ordn"),sn("tnum"),sn("afrc"),sn("frac")])),qg=`
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

`))),Yg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Zg=`
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
`,Kg=`
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
`,Xg=`
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
`,Qg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(w(p.fK)+(w(p.af)+(" > "+(w(p.fK)+(" { flex-basis: auto !important; } "+(w(p.fK)+(w(p.af)+(" > "+(w(p.fK)+(w(p.b9)+(" { flex-basis: auto !important; }}"+(Yg+(Zg+(Xg+(Kg+qg))))))))))))))),xa=function(e){return a(le,"",e)},fa=v(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),ma=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Be(o,{aE:a(M,L(c,l),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,s=i.b;return Be(o,{G:a(M,{b6:`
}`,G:D,aE:s,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,d=i.b;return Be(o,{G:a(M,a(ma,a(fa,n.ag+(" + "+b),""),d),o.G)});case 1:var y=i.a,_=i.b;return Be(o,{G:a(M,a(ma,a(fa,n.ag+(" > "+y),""),_),o.G)});case 2:var y=i.a,_=i.b;return Be(o,{G:a(M,a(ma,a(fa,n.ag+(" "+y),""),_),o.G)});case 4:var S=i.a,C=i.b;return Be(o,{G:a(M,a(ma,a(fa,Z(n.ag,S),""),C),o.G)});default:var x=i.a;return Be(o,{G:a(M,a(ma,a(fa,n.ag,""),x),o.G)})}});return h(er,t,n,r)}),eh=function(e){var r=function(i){return xa(a(ee,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},t=function(i){var o=i;return Z(n(o),xa(a(ee,t,o.G)))};return xa(a(ee,t,h(er,v(function(i,o){var c=i.a,l=i.b;return a(M,a(ma,a(fa,c,""),l),o)}),D,e)))},pu=Z(Qg,eh(Z(Og,Jg))),xn=Ro,Iv=function(e){var r=e.eS;switch(r){case 0:return h(Or,"div",D,$([h(Or,"style",D,$([xn(pu)]))]));case 1:return xn("");default:return h(Or,"elm-ui-static-rules",$([a(Av,"rules",Uc(pu))]),D)}},rh=v(function(e,r){return h(Re,ld(e),id(),r)}),nh=function(e){return h(Re,v(function(r,n){var t=r.a,i=r.b;return h(cd,t,i,n)}),od(),e)},ah=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},th=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},ih=function(e){if(e.$===5){var r=e.a;return a(Pt,th,r.fo)}else return!1},wa=v(function(e,r){return he(e,r)<0?e:r}),Na=T(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),De=re(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Re,Na(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Re,Na(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Re,Na(!1),"",t)+`
}`))])}case 0:var c=h(Re,Na(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(w(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(Re,Na(!1),"",t)+`
}`))])}}),oh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},ch=function(e){if(e.$===5){var r=e.a;return Y(a(le,", ",a(ee,oh,r.fo)))}else return J},lh=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,s=f.b,b=f.c,d=e.c,y=d.a,_=d.b,S=d.c,C=e.d,x="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),z="scale3d("+(ve(m)+(", "+(ve(s)+(", "+(ve(b)+")"))))),W="rotate3d("+(ve(y)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(x+(" "+(z+(" "+W))))}},Yc=T(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(De,e,n,t,i);case 13:var u=r.a,b=r.b;return P(De,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=a(nr,0,a(wa,1,1-o));return P(De,e,n,"."+u,$([a(ue,"opacity",ve(c))]));case 2:var l=r.a;return P(De,e,n,".font-size-"+k(l),$([a(ue,"font-size",k(l)+"px")]));case 1:var u=r.a,f=r.b,m=a(le,", ",a(yn,ch,f)),s=$([a(ue,"font-family",a(le,", ",a(ee,ah,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(Pt,ih,f)?"small-caps":"normal")]);return P(De,e,n,"."+u,s);case 3:var se=r.a,b=r.b,to=r.c;return P(De,e,n,"."+se,$([a(ue,b,to)]));case 4:var se=r.a,b=r.b,d=r.c;return P(De,e,n,"."+se,$([a(ue,b,ga(d))]));case 5:var q=r.a,y=r.b,_=r.c,S=k(_)+"px",C=k(y)+"px",x="."+p.af,z="."+(p.dR+x),pe="."+p.dZ,W="."+p.eZ,X="."+p.eY,Se="."+p.dY,ae=ve(_/2)+"px",te=ve(y/2)+"px",ie="."+p.aw,se="."+q,ne="."+p.fK;return dr($([P(De,e,n,se+(x+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-left",C)])),P(De,e,n,se+(z+(" > "+ne)),$([a(ue,"margin",ae+(" "+te))])),P(De,e,n,se+(ie+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),P(De,e,n,se+(X+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),P(De,e,n,se+(X+(" > "+Se)),$([a(ue,"margin-right",C)])),P(De,e,n,se+(X+(" > "+pe)),$([a(ue,"margin-left",C)])),P(De,e,n,Z(se,W),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),P(De,e,n,"textarea"+(ne+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),P(De,e,n,se+(W+(" > "+Se)),$([a(ue,"margin-right",C)])),P(De,e,n,se+(W+(" > "+pe)),$([a(ue,"margin-left",C)])),P(De,e,n,se+(W+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),P(De,e,n,se+(W+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,ze=r.d,Se=r.e,se="."+q;return P(De,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(ze)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,ze=r.d,Se=r.e,se="."+q;return P(De,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(ze)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=T(function(Ye,Ra,Qr){e:for(;;)switch(Qr.$){case 0:var rs=Qr.a;return k(rs)+"px";case 1:var Ar=L(Ye,Ra);if(Ar.a.$===1){if(Ar.b.$===1)return Ar.a,Ar.b,"max-content";Ar.a;var An=Ar.b.a;return"minmax(max-content, "+(k(An)+"px)")}else if(Ar.b.$===1){var Fn=Ar.a.a;return Ar.b,"minmax("+(k(Fn)+"px, max-content)")}else{var Fn=Ar.a.a,An=Ar.b.a;return"minmax("+(k(Fn)+("px, "+(k(An)+"px)")))}case 2:var Hl=Qr.a,Fr=L(Ye,Ra);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(Hl)+"fr";Fr.a;var An=Fr.b.a;return"minmax(max-content, "+(k(An)+"px)")}else if(Fr.b.$===1){var Fn=Fr.a.a;return Fr.b,"minmax("+(k(Fn)+("px, "+(k(Hl)+"frfr)")))}else{var Fn=Fr.a.a,An=Fr.b.a;return"minmax("+(k(Fn)+("px, "+(k(An)+"px)")))}case 3:var io=Qr.a,oo=Qr.b,co=Y(io),lo=Ra,uo=oo;Ye=co,Ra=lo,Qr=uo;continue e;default:var io=Qr.a,oo=Qr.b,co=Ye,lo=Y(io),uo=oo;Ye=co,Ra=lo,Qr=uo;continue e}}),F=function(Ye){return h(Te,J,J,Ye)};F(me.hP.a);var I=F(me.hP.b),E=function(Ye){return"grid-template-rows: "+(Ye+";")}(a(le," ",a(ee,F,me.hB))),B=function(Ye){return"-ms-grid-rows: "+(Ye+";")}(a(le,I,a(ee,F,me.ak))),R=function(Ye){return"-ms-grid-columns: "+(Ye+";")}(a(le,I,a(ee,F,me.ak))),N="grid-row-gap:"+(F(me.hP.b)+";"),G="grid-column-gap:"+(F(me.hP.a)+";"),H=function(Ye){return"grid-template-columns: "+(Ye+";")}(a(le," ",a(ee,F,me.ak))),se=".grid-rows-"+(a(le,"-",a(ee,Jr,me.hB))+("-cols-"+(a(le,"-",a(ee,Jr,me.ak))+("-space-x-"+(Jr(me.hP.a)+("-space-y-"+Jr(me.hP.b))))))),ro=se+("{"+(H+(E+(G+(N+"}"))))),no="@supports (display:grid) {"+(ro+"}"),ao=se+("{"+(R+(B+"}")));return $([ao,no]);case 9:var Ne=r.a,jt=a(le," ",$(["-ms-grid-row: "+(k(Ne.af)+";"),"-ms-grid-row-span: "+(k(Ne.gH)+";"),"-ms-grid-column: "+(k(Ne.ga)+";"),"-ms-grid-column-span: "+(k(Ne.im)+";")])),eo=a(le," ",$(["grid-row: "+(k(Ne.af)+(" / "+(k(Ne.af+Ne.gH)+";"))),"grid-column: "+(k(Ne.ga)+(" / "+(k(Ne.ga+Ne.im)+";")))])),se=".grid-pos-"+(k(Ne.af)+("-"+(k(Ne.ga)+("-"+(k(Ne.im)+("-"+k(Ne.gH))))))),ro=se+("{"+(eo+"}")),no="@supports (display:grid) {"+(ro+"}"),ao=se+("{"+(jt+"}"));return $([ao,no]);case 11:var se=r.a,Xm=r.b,Qm=function(Ye){return h(Yc,e,Ye,Y(se))};return a(na,Qm,Xm);default:var Gl=r.a,to=lh(Gl),se=Jc(Gl),Rt=L(se,to);if(!Rt.a.$&&!Rt.b.$){var q=Rt.a.a,es=Rt.b.a;return P(De,e,n,"."+q,$([a(ue,"transform",es)]))}else return D}}),uh=v(function(e,r){return nh(a(ee,function(n){var t=h(Yc,e,n,J);return L(vt(n),a(rh,Uc,t))},r))}),xi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(le,"",a(ee,n,r))+"}"))}),gu=T(function(e,r,n){var t=n.a,i=n.b;return $([a(xi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(xi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),$h=T(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(le," ",Z(h(gu,o,p.hM,i),h(gu,o,p.gy,t)))}),vh=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(le," ",$([a(xi,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([L("line-height","1")])),a(xi,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),hu=T(function(e,r,n){return{gH:r/e,bj:e,fp:n}}),Ev=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(M,n,t):t}),D,r)}),fh=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Re,nr,r,n))}else return J},bu=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(Re,wa,r,n))}else return J},_u=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Ve,e.gk,bu(r)),t=a(Ve,e.fP,bu(a(Ev,function(f){return!_e(f,n)},r))),i=a(Ve,e.f1,fh(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f1:h(hu,o,i-t,c),ec:h(hu,l,i-n,u)}},yu=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ve(e.gH)),L("vertical-align",ve(e.fp)+"em"),L("font-size",ve(e.bj)+"em")]))},mh=function(e){return h(Re,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return Y(L(yu(function(c){return c.ec}(_u(o))),yu(function(c){return c.f1}(_u(o)))))}else return n;else return n}),J,e)},sh=function(e){var r=function(o){if(o.$===4){var c=o.b;return Y("@import url('"+(c+"');"))}else return J},n=function(o){o.a;var c=o.b,l=a(le,`
`,a(yn,r,c));return l},t=a(ee,iv,e),i=function(o){var c=o.a,l=o.b,u=mh(l);if(u.$===1)return a(le,"",a(ee,vh(c),t));var f=u.a;return a(le,"",a(ee,a($h,c,f),t))};return Z(a(le,`
`,a(ee,n,e)),a(le,`
`,a(ee,i,e)))},dh=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(L(r,n))}else return J},xu=v(function(e,r){var n=v(function(c,l){return{cC:Z(l.cC,h(Yc,e,c,J)),bU:function(){var u=dh(c);if(u.$===1)return l.bU;var f=u.a;return a(M,f,l.bU)}()}}),t=h(Re,n,{cC:D,bU:D},r),i=t.bU,o=t.cC;return Z(sh(i),xa(o))}),Bv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Or,"div",D,$([h(Or,"style",D,$([xn(a(xu,e,r))]))]));case 1:return h(Or,"div",D,$([h(Or,"style",D,$([xn(a(xu,e,r))]))]));default:return h(Or,"elm-ui-rules",$([a(Av,"rules",a(uh,e,r))]),D)}}),wu=re(function(e,r,n,t){var i=a(Bv,r,h(Re,Dv,L(kv,Vv(r.gx)),n).b);return e?a(M,L("static-stylesheet",Iv(r)),a(M,L("dynamic-stylesheet",i),t)):a(M,L("dynamic-stylesheet",i),t)}),Su=re(function(e,r,n,t){var i=a(Bv,r,h(Re,Dv,L(kv,Vv(r.gx)),n).b);return e?a(M,Iv(r),a(M,i,t)):a(M,i,t)}),rc=xe(45),ft=xe(37),jv=function(e){return Pd(z$(e))},ph=mn("p"),cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),Cu=mn("s"),Lu=mn("u"),nc=xe(44),mt=xe(39),Ut=Lr(function(e,r,n,t,i,o){var c=v(function(u,f){if(t.$===1){var m=t.a;return h(jv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,d=i.b;return P(wu,!1,b,d,m);default:var b=i.a,d=i.b;return P(wu,!0,b,d,m)}}())}else{var s=t.a;return a(function(){switch(u){case"div":return za;case"p":return ph;default:return Or(u)}}(),f,function(){switch(i.$){case 0:return s;case 2:var b=i.a,d=i.b;return P(Su,!1,b,d,s);default:var b=i.a,d=i.b;return P(Su,!0,b,d,s)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,f=r.b;return h(Or,u,n,$([a(c,f,$([zr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return a(cr,mt,e)&&!a(cr,nc,e)?l:a(cr,Mv,e)?a(Lu,$([zr(a(le," ",$([p.fK,p.hL,p.b9,p.ax,p.fG])))]),$([l])):a(cr,zv,e)?a(Cu,$([zr(a(le," ",$([p.fK,p.hL,p.b9,p.ax,p.fE])))]),$([l])):l;case 1:return a(cr,ft,e)&&!a(cr,rc,e)?l:a(cr,Tv,e)?a(Cu,$([zr(a(le," ",$([p.fK,p.hL,p.b9,p.fF])))]),$([l])):a(cr,Pv,e)?a(Lu,$([zr(a(le," ",$([p.fK,p.hL,p.b9,p.fD])))]),$([l])):l;default:return l}}),pn=function(e){return!e.b},Zc=xn,gh=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),st=function(e){return a(za,$([zr(gh)]),$([Zc(e)]))},hh=p.fK+(" "+(p.Y+(" "+(p.dQ+(" "+p.c0))))),Pu=function(e){return a(za,$([zr(hh)]),$([Zc(e)]))},bh=T(function(e,r,n){var t=v(function(y,_){var S=y.a,C=y.b,x=_.a,z=_.b;switch(C.$){case 0:var W=C.a;return _e(e,Wt),L(a(M,L(S,W(e)),x),z);case 1:var X=C.a;return _e(e,Wt),L(a(M,L(S,a(X.gL,Bn,e)),x),pn(z)?X.hV:Z(X.hV,z));case 2:var ae=C.a;return L(a(M,L(S,_e(e,Cr)?Pu(ae):st(ae)),x),z);default:return L(x,z)}}),i=v(function(y,_){var S=_.a,C=_.b;switch(y.$){case 0:var x=y.a;return _e(e,Wt),L(a(M,x(e),S),C);case 1:var z=y.a;return _e(e,Wt),L(a(M,a(z.gL,Bn,e),S),pn(C)?z.hV:Z(z.hV,C));case 2:var W=y.a;return L(a(M,_e(e,Cr)?Pu(W):st(W),S),C);default:return L(S,C)}});if(r.$===1){var o=r.a,c=h(er,t,L(D,D),o),l=c.a,u=c.b,f=pn(u)?n.hV:Z(n.hV,u);if(f.b){var m=f;return Qo({gL:P(Ut,n.aR,n.aT,n.aJ,fu(h(su,"nearby-element-pls",l,n.aM))),hV:m})}else return $t(V(Ut,n.aR,n.aT,n.aJ,fu(h(su,"nearby-element-pls",l,n.aM)),Bn))}else{var s=r.a,b=h(er,i,L(D,D),s),d=b.a,u=b.b,f=pn(u)?n.hV:Z(n.hV,u);if(f.b){var m=f;return Qo({gL:P(Ut,n.aR,n.aT,n.aJ,rr(a(mu,d,n.aM))),hV:m})}else return $t(V(Ut,n.aR,n.aT,n.aJ,rr(a(mu,d,n.aM)),Bn))}}),vr=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),_h=function(e){return{$:10,a:e}},wi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(wi,n,o|t)}else{var i=e.a;return a(wi,i|n,t)}}),Mu=function(e){return{$:1,a:e}},Ot=v(function(e,r){return{$:3,a:e,b:r}}),zu=function(e){return{$:2,a:e}},yh=v(function(e,r){return a(za,$([zr(function(){switch(e){case 0:return a(le," ",$([p.bf,p.hL,p.fy]));case 1:return a(le," ",$([p.bf,p.hL,p.fR]));case 2:return a(le," ",$([p.bf,p.hL,p.hh]));case 3:return a(le," ",$([p.bf,p.hL,p.hg]));case 4:return a(le," ",$([p.bf,p.hL,p.gP]));default:return a(le," ",$([p.bf,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return xn("");case 2:var n=r.a;return st(n);case 0:var t=r.a;return t(Cr);default:var i=r.a;return a(i.gL,Bn,Cr)}}()]))}),xh=T(function(e,r,n){var t=a(yh,e,r);switch(n.$){case 0:return e===5?Mu($([t])):zu($([t]));case 1:var i=n.a;return e===5?Mu(a(M,t,i)):a(Ot,i,$([t]));case 2:var o=n.a;return e===5?a(Ot,$([t]),o):zu(a(M,t,o));default:var i=n.a,o=n.b;return e===5?a(Ot,a(M,t,i),o):a(Ot,i,a(M,t,o))}}),Tu=v(function(e,r){return{$:2,a:e,b:r}}),gn=function(e){return{$:1,a:e}},In=v(function(e,r){switch(r.$){case 0:return gn(e);case 1:var n=r.a;return a(Tu,n,e);default:var t=r.a,i=r.b;return a(Tu,t,i)}}),wh=function(e){switch(e){case 0:return p.cN+(" "+p.dY);case 2:return p.cN+(" "+p.dZ);default:return p.cN+(" "+p.fB)}},Sh=function(e){switch(e){case 0:return p.cO+(" "+p.fH);case 2:return p.cO+(" "+p.fA);default:return p.cO+(" "+p.fC)}},qa=v(function(e,r){return a(Nr,Dd(e),T$(r))}),Hr=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),dn=function(e){return{$:1,a:e}},Ch=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return dn(j(u,0,0));case 1:var f=r.a;return dn(j(0,f,0));case 2:var m=r.a;return dn(j(0,0,m));case 3:var n=r.a;return dn(n);case 4:var n=r.a,d=r.b;return P(Hr,j(0,0,0),j(1,1,1),n,d);default:var n=r.a;return P(Hr,j(0,0,0),n,j(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,m=l.c;switch(r.$){case 0:var t=r.a;return dn(j(t,f,m));case 1:var i=r.a;return dn(j(u,i,m));case 2:var o=r.a;return dn(j(u,f,o));case 3:var n=r.a;return dn(n);case 4:var n=r.a,d=r.b;return P(Hr,l,j(1,1,1),n,d);default:var c=r.a;return P(Hr,l,c,j(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,m=l.c,s=e.b,b=e.c,d=e.d;switch(r.$){case 0:var t=r.a;return P(Hr,j(t,f,m),s,b,d);case 1:var i=r.a;return P(Hr,j(u,i,m),s,b,d);case 2:var o=r.a;return P(Hr,j(u,f,o),s,b,d);case 3:var y=r.a;return P(Hr,y,s,b,d);case 4:var _=r.a,S=r.b;return P(Hr,l,s,_,S);default:var C=r.a;return P(Hr,l,C,b,d)}}}),la=xe(7),Rv=xe(36),ku=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(wi,n|i,t|o)}),an=a(wi,0,0),ac=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return j(an,p.ee+(" "+t),$([h(vr,t,"height",n+"px")]));case 1:return j(a(ge,Rv,an),p.c$,D);case 2:var i=e.a;return i===1?j(a(ge,ft,an),p.c0,D):j(a(ge,ft,an),p.ef+(" height-fill-"+k(i)),$([h(vr,p.fK+("."+(p.aw+(" > "+w("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h(vr,f,"min-height",k(o)+"px !important"),c=ac(u),b=c.a,d=c.b,y=c.c;return j(a(ge,rc,b),f+(" "+d),a(M,m,y));default:var l=e.a,u=e.b,f="max-height-"+k(l),m=h(vr,f,"max-height",k(l)+"px"),s=ac(u),b=s.a,d=s.b,y=s.c;return j(a(ge,rc,b),f+(" "+d),a(M,m,y))}},Nv=xe(38),tc=function(e){switch(e.$){case 0:var r=e.a;return j(an,p.fu+(" width-px-"+k(r)),$([h(vr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return j(a(ge,Nv,an),p.dP,D);case 2:var n=e.a;return n===1?j(a(ge,mt,an),p.dQ,D):j(a(ge,mt,an),p.fv+(" width-fill-"+k(n)),$([h(vr,p.fK+("."+(p.af+(" > "+w("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+k(t),u=h(vr,l,"min-width",k(t)+"px"),i=tc(c),m=i.a,s=i.b,b=i.c;return j(a(ge,nc,m),l+(" "+s),a(M,u,b));default:var o=e.a,c=e.b,l="max-width-"+k(o),u=h(vr,l,"max-width",k(o)+"px"),f=tc(c),m=f.a,s=f.b,b=f.c;return j(a(ge,nc,m),l+(" "+s),a(M,u,b))}},Ni=xe(27),Lh=v(function(e,r){if(_e(e,Ni))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return _e(i,c)&&_e(i,o)&&_e(i,l)&&i>=0&&i<=24;default:return!1}}),ua=xe(6),Du=xe(30),Vu=xe(29),Ph=Me(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var m=l.a,s=l.b;switch(m.$){case 0:var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 3:var _=m.a,b=m.b;if(a(cr,_,n)){var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var F=b+(" "+e),I=r,E=a(ge,_,n),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 1:var d=m.a,F=e,I=r,E=n,B=t,R=i,N=a(M,d,o),G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 4:var _=m.a,y=m.b;if(a(cr,_,n)){var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else if(a(Lh,_,y)){var F=vt(y)+(" "+e),I=r,E=a(ge,_,n),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var F=vt(y)+(" "+e),I=r,E=a(ge,_,n),B=t,R=a(M,y,i),N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 10:var _=m.a,S=m.b,F=e,I=r,E=a(ge,_,n),B=a(Ch,t,S),R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 7:var C=m.a;if(a(cr,ua,n)){var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else switch(C.$){case 0:var x=C.a,F=p.fu+(" width-px-"+k(x))+(" "+e),I=r,E=a(ge,ua,n),B=t,R=a(M,h(vr,"width-px-"+k(x),"width",k(x)+"px"),i),N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 1:var F=e+(" "+p.dP),I=r,E=a(ge,Nv,a(ge,ua,n)),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 2:var z=C.a;if(z===1){var F=e+(" "+p.dQ),I=r,E=a(ge,mt,a(ge,ua,n)),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var F=e+(" "+(p.fv+(" width-fill-"+k(z)))),I=r,E=a(ge,mt,a(ge,ua,n)),B=t,R=a(M,h(vr,p.fK+("."+(p.af+(" > "+w("width-fill-"+k(z))))),"flex-grow",k(z*1e5)),i),N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}default:var W=tc(C),X=W.a,ae=W.b,Te=W.c,F=e+(" "+ae),I=r,E=a(ku,X,a(ge,ua,n)),B=t,R=Z(Te,i),N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 8:var te=m.a;if(a(cr,la,n)){var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else switch(te.$){case 0:var x=te.a,ie=k(x)+"px",ne="height-px-"+ie,F=p.ee+(" "+(ne+(" "+e))),I=r,E=a(ge,la,n),B=t,R=a(M,h(vr,ne,"height ",ie),i),N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 1:var F=p.c$+(" "+e),I=r,E=a(ge,Rv,a(ge,la,n)),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 2:var z=te.a;if(z===1){var F=p.c0+(" "+e),I=r,E=a(ge,ft,a(ge,la,n)),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var F=e+(" "+(p.ef+(" height-fill-"+k(z)))),I=r,E=a(ge,ft,a(ge,la,n)),B=t,R=a(M,h(vr,p.fK+("."+(p.aw+(" > "+w("height-fill-"+k(z))))),"flex-grow",k(z*1e5)),i),N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}default:var q=ac(te),X=q.a,ae=q.b,Te=q.c,F=e+(" "+ae),I=r,E=a(ku,X,a(ge,la,n)),B=t,R=Z(Te,i),N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 2:var de=m.a;switch(de.$){case 0:var F=e,I=a(In,"main",r),E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 1:var F=e,I=a(In,"nav",r),E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 2:var F=e,I=a(In,"footer",r),E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 3:var F=e,I=a(In,"aside",r),E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 4:var pe=de.a;if(pe<=1){var F=e,I=a(In,"h1",r),E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else if(pe<7){var F=e,I=a(In,"h"+k(pe),r),E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var F=e,I=a(In,"h6",r),E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 9:var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 8:var F=e,I=r,E=n,B=t,R=i,N=a(M,a(qa,"role","button"),o),G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 5:var ze=de.a,F=e,I=r,E=n,B=t,R=i,N=a(M,a(qa,"aria-label",ze),o),G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 6:var F=e,I=r,E=n,B=t,R=i,N=a(M,a(qa,"aria-live","polite"),o),G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;default:var F=e,I=r,E=n,B=t,R=i,N=a(M,a(qa,"aria-live","assertive"),o),G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var eo=me.a;return Z(i,eo.hV)}}(),F=e,I=r,E=n,B=t,R=Te,N=o,G=h(xh,Se,me,c),H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e;case 6:var Ne=m.a;if(a(cr,Du,n)){var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var F=wh(Ne)+(" "+e),I=r,E=function(se){switch(Ne){case 1:return a(ge,zv,se);case 2:return a(ge,Mv,se);default:return se}}(a(ge,Du,n)),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}default:var jt=m.a;if(a(cr,Vu,n)){var F=e,I=r,E=n,B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}else{var F=Sh(jt)+(" "+e),I=r,E=function(se){switch(jt){case 1:return a(ge,Tv,se);case 2:return a(ge,Pv,se);default:return se}}(a(ge,Vu,n)),B=t,R=i,N=o,G=c,H=s;e=F,r=I,n=E,t=B,i=R,o=N,c=G,l=H;continue e}}}else{var u=Jc(t);if(u.$===1)return{aJ:a(M,zr(e),o),aM:c,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(M,zr(e+(" "+f)),o),aM:c,aR:n,aT:r,hV:a(M,_h(t),i)}}}),Mh={$:0},zh=Mh,$r=re(function(e,r,n,t){return h(bh,e,t,xt(Ph,Ag(e),r,an,zh,D,D,Pg,sr(n)))}),tn=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Th={fO:J,fW:J,hH:Y({a2:0,b7:P(tn,155/255,203/255,1,1),eV:L(0,0),bj:3})},kh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gK;return c.$===1?Be(i,{gK:Y(o)}):i;case 1:var l=t.a,u=i.gx;return u.$===1?Be(i,{gx:Y(l)}):i;default:var f=t.a,m=i.eS;return m.$===1?Be(i,{eS:Y(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return Th;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gx:J,gK:J,eS:J},e))},Dh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(Cr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),Cr);case 2:var i=r.a;return st(i);default:return st("")}}),Vh=T(function(e,r,n){var t=kh(e),i=function(){var o=t.eS;return o===1?Lv(t):Cg(t)}();return a(Dh,i,P($r,Cr,ra,r,rr($([n]))))}),dt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Gv=v(function(e,r){return{$:1,a:e,b:r}}),Hv=function(e){return{$:2,a:e}},Ah={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),mo=function(e){return{$:3,a:e}},Wv=xe(8),Uv=xe(14),Ov=xe(5),Jv=xe(4),Ta=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ee(r)+("-"+(Ee(n)+("-"+(Ee(t)+("-"+Ee(i))))))},ni=Es,so=Is,qv=v(function(e,r){return Z(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(le,"-",so(ni(n)));case 4:var n=e.a;return e.b,a(le,"-",so(ni(n)));default:var n=e.a.hc;return a(le,"-",so(ni(n)))}}())}),Fh=function(){var e=$([mo("Open Sans"),mo("Helvetica"),mo("Verdana"),Ah]);return $([a(Ce,Wv,h(dt,"bg-"+Ta(P(tn,1,1,1,0)),"background-color",P(tn,1,1,1,0))),a(Ce,Uv,h(dt,"fc-"+Ta(P(tn,0,0,0,1)),"color",P(tn,0,0,0,1))),a(Ce,Jv,Hv(20)),a(Ce,Ov,a(Gv,h(Re,qv,"font-",e),e))])}(),Ih=T(function(e,r,n){var t=e.hl;return h(Vh,t,a(M,xr(a(le," ",$([p.hA,p.fK,p.hL]))),Z(Fh,r)),n)}),Yv={$:3},Zv=function(e){return{$:2,a:e}},ic=zd,Kv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Qo({gL:v(function(o,c){return a(ic,e,a(n.gL,o,c))}),hV:n.hV});case 0:var t=r.a;return $t(a(Mt,ic(e),t));case 2:var i=r.a;return Zv(i);default:return Yv}}),Kc=Kv,Eh=ic,Bh=function(e){return{$:0,a:e}},ke=Bh,jh=kd,_r=jh,Xv={$:1},Gi=function(e){return{$:5,a:e}},Qv=Gi(0),Gr=T(function(e,r,n){return P(tn,e/255,r/255,n/255,1)}),ef=h(Gr,0,0,0),Rh=Nr("d"),Nh=Nr("fill"),Gh=Nr("height"),rf=P$("http://www.w3.org/2000/svg"),Hh=rf("path"),Wh=rf("svg"),Uh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Oh=function(e){var r=Uh(e);return"rgba("+(k(Ie(r.hu*255))+(","+k(Ie(r.gA*255))+(","+k(Ie(r.fS*255))+(","+ve(r.fI)+")"))))},Jh=Nr("viewBox"),qh=Nr("width"),ha=T(function(e,r,n){return a(Wh,$([Jh("0 0 100 100"),qh(k(e)),Gh(k(e))]),$([a(Hh,$([Rh(n),Nh(Oh(r))]),D)]))}),Yh={$:1},pr=Yh,nf=function(e){return{$:7,a:e}},ce=nf,Le=v(function(e,r){return P($r,Cr,ra,a(M,ce(pr),a(M,we(pr),e)),rr($([r])))}),af=function(e){return{$:2,a:e}},ye=af(1),Nn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Sa={c4:260,bF:54},cn=function(e){return a(Ce,Wv,h(dt,"bg-"+Ta(e),"background-color",e))},Zh=xe(28),wn=function(e){return a(Ce,Zh,h(dt,"bc-"+Ta(e),"border-color",e))},ai=1,kr=v(function(e,r){return P($r,ai,ra,a(M,xr(p.gc+(" "+p.bu)),a(M,we(pr),a(M,ce(pr),e))),rr(r))}),Kh=h(Gr,83,83,83),tf=re(function(e,r,n,t){return P(tn,e/255,r/255,n/255,t)}),Hi=P(tf,56,56,56,.25),Je=Yv,pt=qe(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),gt=xe(2),Gn=function(e){var r=e;return a(Ce,gt,V(pt,"p-"+k(e),r,r,r,r))},of=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),cf=xe(3),lf=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Sn=function(e){return a(Ce,cf,h(of,a(lf,e,e),e,e))},Xh=P(tf,0,0,0,0),Qh=function(e){return{$:4,a:e}},oc=0,Dn=v(function(e,r){return P($r,oc,ra,a(M,xr(p.bu+(" "+p.ax)),a(M,ce(pr),a(M,we(pr),e))),rr(r))}),e3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(Lv,{gx:{fO:J,fW:J,hH:J},gK:1,eS:0},n.hV));case 2:var t=e.a;return _i(xn(t));default:return _i(xn(""))}},r3=v(function(e,r){return e3(e(r))}),n3=Td,a3=v(function(e,r){return $t(h(n3,r3,e,r))}),Cn=function(e){return a(Ce,Uv,h(dt,"fc-"+Ta(e),"color",e))},Xc=h(Gr,195,195,195),Vn=v(function(e,r){return{$:3,a:e,b:r}}),uf=xe(13),t3=a(Vn,uf,p.h7),i3=xe(20),$f=a(Vn,i3,p.hF),aa=function(e){return a(Ce,Jv,Hv(e))},Qc=a(Vn,uf,p.fV),cc=v(function(e,r){if(r.$===-2)return Xr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return V(fe,n,t,a(e,t,i),a(cc,e,o),a(cc,e,c))}),vf=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,gt,V(pt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,gt,V(pt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Ln=function(e){return Zv(e)},o3=function(e){return h(Ic,T(function(r,n,t){return a(M,n,t)}),D,e)},c3=v(function(e,r){return{$:3,a:e,b:r}}),l3=v(function(e,r){return{$:2,a:e,b:r}}),u3=v(function(e,r){return{$:0,a:e,b:r}}),$3=v(function(e,r){return{$:1,a:e,b:r}}),zt=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),v3=P(zt,0/255,0/255,0/255,1),Wi=function(e){return{$:6,a:e}},f3=Wi(0),Ui=function(e){return{$:2,a:e}},m3={$:6},ff=Ui(m3),mf=T(function(e,r,n){if(r.$===1)return r.a,P($r,ai,gn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,c=P($r,Cr,ra,i,rr($([o])));switch(t){case 2:return P($r,ai,gn("label"),a(M,xr(p.cj),e),rr($([c,n])));case 3:return P($r,ai,gn("label"),a(M,xr(p.cj),e),rr($([n,c])));case 0:return P($r,oc,gn("label"),a(M,xr(p.cj),e),rr($([n,c])));default:return P($r,oc,gn("label"),a(M,xr(p.cj),e),rr($([c,n])))}}),lc=qa,$n=Gi(1),sf="Enter",s3=function(e){return{$:5,a:e}},df=function(e){if(e.$===1){var r=e.a;return Ui(s3(r))}else return Zn},pf=function(e){return e.$===1},d3=function(e){return{$:0,a:e}},el=M$,p3=v(function(e,r){return a(el,e,d3(r))}),gf=function(e){return a(p3,"click",ur(e))},g3=qs,h3=function(e){return{$:2,a:e}},b3=v(function(e,r){return a(el,e,h3(r))}),hf=function(e){var r=function(t){var i=e(t);if(i.$===1)return g3("No key matched");var o=i.a;return ur(o)},n=a(Q,r,a(K,"key",Ma));return Ae(a(b3,"keydown",a(di,function(t){return L(t,!0)},n)))},_3=xe(21),Hn=a(Vn,_3,p.gf),bf=" ",_f=function(e){return a(Nr,"tabIndex",k(e))},y3=a(Mt,Ae,_f),x3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bJ,c=Z($([pf(n)?Zn:Sn(6),Ae(gf(o(!i))),ff,hf(function(l){return _e(l,sf)||_e(l,bf)?Y(o(!i)):J}),y3(0),Hn,f3,ce(ye)]),e);return h(mf,a(M,Ae(a(lc,"role","checkbox")),a(M,Ae(a(lc,"aria-checked",i?"true":"false")),a(M,df(n),c))),n,P($r,Cr,ra,$([$n,we(ye),ce(pr)]),rr($([t(i)]))))}),w3=T(function(e,r,n){return Z(a(ut,e-Rn(n),ji(r)),n)}),Si=ds,yf=function(e){var r=function(n){return n<10?k(n):ji(pv(87+n))};return e<16?r(e):Z(yf(e/16|0),r(a(Si,16,e)))},S3=a(Ze,yf,a(w3,2,"0")),rl=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},C3=function(e){var r=rl(e),n=r.hu,t=r.gA,i=r.fS;return a(le,"",a(M,"#",a(ee,a(Ze,Ie,S3),$([n*255,t*255,i*255]))))},nl=xe(12),xf=a(Vn,nl,p.h$),uc=Wi(1),Pn=ps,yr=function(e){return e*Pn/180},L3=function(e){return{$:1,a:e}},al=v(function(e,r){return{$:10,a:e,b:r}}),P3=xe(26),M3=function(e){return a(al,P3,L3(-e))},ba=T(function(e,r,n){return P(tn,e,r,n,1)}),z3=tn,T3=v(function(e,r){return{$:4,a:e,b:r}}),k3=xe(24),D3=function(e){return a(al,k3,a(T3,j(0,0,1),e))},V3=xe(17),Wn=function(e){return a(Ce,V3,h(vr,"br-"+k(e),"border-radius",k(e)+"px"))},A3=function(e){return xa($([e.ej?"box-inset":"box-",Ee(e.eV.a)+"px",Ee(e.eV.b)+"px",Ee(e.a2)+"px",Ee(e.bj)+"px",Ta(e.b7)]))},F3=xe(19),I3=function(e){var r={a2:e.a2,b7:e.b7,ej:!1,eV:e.eV,bj:e.bj};return a(Ce,F3,h(vr,A3(r),"box-shadow",ec(r)))},Au=v(function(e,r){return{$:12,a:e,b:r}}),Fu=xe(0),E3=function(e){return e?a(Ce,Fu,a(Au,"transparent",1)):a(Ce,Fu,a(Au,"visible",0))},po=h(ba,1,1,1),tl=qe(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Oi=function(e){return a(Ce,Ni,V(tl,"b-"+k(e),e,e,e,e))},B3=v(function(e,r){return a(Ce,Ni,V(tl,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Tt=function(e){var r=e.b3,n=e.cI,t=e.g4,i=e.hx;return _e(n,r)&&_e(t,i)?_e(n,i)?Oi(n):a(B3,t,n):a(Ce,Ni,V(tl,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},j3=function(e){return a(Le,$([xr("focusable"),ce(ke(14)),we(ke(14)),Cn(po),$n,aa(9),xf,Wn(3),wn(e?h(ba,59/255,153/255,252/255):h(ba,211/255,211/255,211/255)),I3({a2:1,b7:e?P(z3,238/255,238/255,238/255,0):h(ba,238/255,238/255,238/255),eV:L(0,0),bj:1}),cn(e?h(ba,59/255,153/255,252/255):po),Oi(e?0:1),Xo(a(Le,$([wn(po),we(ke(6)),ce(ke(9)),D3(yr(-45)),uc,$n,M3(1),E3(!e),Tt({b3:2,g4:2,hx:0,cI:0})]),Je))]),Je)},R3=Vr("htmlFor"),$c=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),Ci=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return e(n)}}),wf=re(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),N3=tp,G3=Ws,H3=v(function(e,r){if(r.$)return ir(e);var n=r.a;return We(n)}),W3=ap,U3=function(e){return a(W3,{f2:!1,hb:!1},e)},il=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return J},O3=v(function(e,r){if(r.$){var t=r.a;return ir(t)}else{var n=r.a;return We(e(n))}}),J3=function(e){return{$:2,a:e}},q3=function(e){return{$:0,a:e}},Y3=function(e){return{$:1,a:e}},go=v(function(e,r){return Zr(r)-Zr(e)}),ho=T(function(e,r,n){var t=Zr(n);return he(Zr(e),t)<1&&he(t,Zr(r))<1}),Z3=v(function(e,r){var n=function(i){return he(i,e)<0?We(i):ir(Y3(r))},t=h(ho,"0","9",r)?We(a(go,"0",r)):h(ho,"a","z",r)?We(10+a(go,"a",r)):h(ho,"A","Z",r)?We(10+a(go,"A",r)):ir(q3(r));return a(Ci,n,t)}),Sf=v(function(e,r){var n=Aa(r);if(n.$===1)return We(0);var t=n.a,i=t.a,o=t.b;return a(Ci,function(c){return a(Ci,function(l){return We(c+l*e)},a(Sf,e,o))},a(Z3,e,i))}),K3=v(function(e,r){return 2<=e&&e<=36?a(Sf,e,Yo(r)):ir(J3(e))}),X3=K3(16),Q3=T(function(e,r,n){return P(zt,e,r,n,1)}),eb=re(function(e,r,n,t){return P(zt,e,r,n,t)}),kt=ss,rb=v(function(e,r){var n=a(kt,10,e);return Ie(r*n)/n}),nb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=dv(n);if(t.b&&!t.b.b){var i=t.a;return G3($([i,i]))}else return n};return a(Ze,ni,a(Ze,function(n){return a(je,function(t){return h(N3,1,t,n)},U3(e))},a(Ze,$c(il),a(Ze,je(function(n){return n.hW}),a(Ze,je(yn(Rr)),a(Ze,H3("Parsing hex regex failed"),Ci(function(n){var t=a(ee,a(Ze,r,a(Ze,X3,O3(Oa))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,m=f.a.a;return We(P(eb,i/255,c/255,u/255,a(rb,2,m/255)))}else break e;else{var i=t.a.a,s=t.b,c=s.a.a,b=s.b,u=b.a.a;return We(h(Q3,i/255,c/255,u/255))}else break e;return ir("Parsing ints from hex failed")})))))))}(),ab=Vr("id"),tb=mn("input"),ib=mn("label"),Cf=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ob=Cf(0),cb=Vr("name"),lb=function(e){return L(e,!0)},ub=function(e){return{$:1,a:e}},$b=v(function(e,r){return a(el,e,ub(r))}),vb=v(function(e,r){return h(er,K,r,e)}),fb=a(vb,$(["target","value"]),Ma),Lf=function(e){return a($b,"input",a(di,lb,a(di,e,fb)))},mb=a(Vn,nl,p.h4),Pf=a(Vn,nl,p.h8),ol=function(e){return a(Cv,5,e)},cl=function(e){return a(Ce,Ov,a(Gv,h(Re,qv,"ff-",e),e))},sb=h(Gr,195,195,195),Mf=h(Gr,69,69,69),db=Cf(2),pb={$:2},ll=pb,gb=xe(32),hb=xe(31),Iu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},bb=v(function(e,r){return a(Ve,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return Y(L(i,c))}else return J;else{var i=t.a;return Y(i)}}),J,e))}),Eu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return J;else{var t=n.a;return Y(t)}}),J,e)},_b=xe(33),yb=Vr("max"),xb=Vr("min"),wb=v(function(e,r){return a(Ce,cf,h(of,a(lf,e,r),e,r))}),Sb=function(e){return a(Vr,"step",e)},zf=Vr("type"),Tf=Vr("value"),ka=af,Cb=Fd,kf=v(function(e,r){switch(r.$){case 0:return Zn;case 2:var n=r.a;return Ui(n);case 6:var t=r.a;return Wi(t);case 5:var i=r.a;return Gi(i);case 7:var t=r.a;return nf(t);case 8:var t=r.a;return wv(t);case 3:var t=r.a,i=r.b;return a(Vn,t,i);case 4:var o=r.a,c=r.b;return a(Ce,o,c);case 9:var l=r.a,u=r.b;return a(Sv,l,a(Kv,e,u));case 1:var f=r.a;return Ae(a(Cb,e,f));default:var m=r.a,s=r.b;return a(al,m,s)}}),Lb=T(function(e,r,n){return a(Dn,$([ce(ye),we(a(Ve,ye,n)),$n]),$([a(Le,$([ce(ka(Ie(e*1e4)))]),Je),a(Le,a(M,$n,a(ee,kf(Ct),r)),Je),a(Le,$([ce(ka(Ie(be(1-e)*1e4)))]),Je)]))}),Pb=T(function(e,r,n){return a(kr,$([we(ye),ce(a(Ve,ye,n)),uc]),$([a(Le,$([we(ka(Ie(be(1-e)*1e4)))]),Je),a(Le,a(M,uc,a(ee,kf(Ct),r)),Je),a(Le,$([we(ka(Ie(e*1e4)))]),Je)]))}),Df=v(function(e,r){var n=Eu(e),t=Iu(e),i=function(){var C=L(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var x=C.a.a.a,z=C.b.a.a;return he(z,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cs)/(r.cr-r.cs),c=r.ic,l=c,u=Iu(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Eu(l),s=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(s+("-"+f)),d=$([a(ue,"width",s),a(ue,"height",f)]),y=a(bb,e,L(5,5)),_=y.a,S=y.b;return h(mf,$([pf(r.em)?Zn:a(wb,_,S),ff,ce(function(){if(n.$===1)return ye;if(n.a.$){var C=n.a;return C}else return pr}()),we(function(){if(t.$===1)return pr;if(t.a.$){var C=t.a;return C}else return pr}())]),r.em,a(Dn,$([ce(a(Ve,ye,n)),we(a(Ve,ke(20),t))]),$([P($r,Cr,gn("input"),$([df(r.em),a(Ce,gb,a(rt,'input[type="range"].'+(b+"::-moz-range-thumb"),d)),a(Ce,_b,a(rt,'input[type="range"].'+(b+"::-webkit-slider-thumb"),d)),a(Ce,hb,a(rt,'input[type="range"].'+(b+"::-ms-thumb"),d)),Ae(zr(b+" ui-slide-bar focusable-parent")),Ae(Lf(function(C){var x=sv(C);if(x.$===1)return r.bJ(0);var z=x.a;return r.bJ(z)})),Ae(zf("range")),Ae(Sb(function(){var C=r.cF;if(C.$===1)return"any";var x=C.a;return ve(x)}())),Ae(xb(ve(r.cs))),Ae(yb(ve(r.cr))),Ae(Tf(ve(r.cJ))),i?Ae(a(lc,"orient","vertical")):Zn,ce(i?a(Ve,ke(20),t):a(Ve,ye,n)),we(i?a(Ve,ye,n):a(Ve,ke(20),t))]),rr(D)),a(Le,a(M,ce(a(Ve,ye,n)),a(M,we(a(Ve,ke(20),t)),Z(e,$([ol(i?h(Pb,o,a(M,xr("focusable-thumb"),l),n):h(Lb,o,a(M,xr("focusable-thumb"),l),t))])))),Je)])))}),Mb=h(ba,.5,.5,.5),Vf=Rr,Bu=function(e){var r=e.c3,n=e.cJ,t=e.cs,i=e.cr,o=e.cF,c=e.bJ;return a(Le,$([ce(ye)]),a(Df,$([Sn(2),ol(a(Le,$([ce(ye),we(ke(16)),$n,cn(Mf),Wn(4)]),Je))]),{em:a(db,D,a(Dn,$([ce(ye)]),$([a(Le,$([mb]),Ln(r)),a(Le,$([ce(ye),Pf,cl($([ll]))]),Ln(ve(n)))]))),cr:i,cs:t,bJ:c,cF:Y(o),ic:Vf($([ce(ke(12)),we(ke(12)),Wn(4),Oi(0),wn(Mb),cn(sb)])),cJ:n}))},zb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Tb=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(x3,D,{f6:c,gM:j3,em:a(ob,D,Ln(e)),bJ:c3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return Bu({c3:e,cr:o,cs:i,bJ:u3(e),cF:.001*(o-i),cJ:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return Bu({c3:e,cr:o,cs:i,bJ:a(Ze,Ie,$3(e)),cF:1,cJ:c});default:var c=r.a;return a(Le,$([ce(ye)]),hn(a(za,D,$([a(za,$([a(_r,"margin-bottom","6px")]),$([a(ib,$([R3(e)]),$([Zc(e)]))])),a(tb,$([zf("color"),a(_r,"width","100%"),a(_r,"height","26px"),a(_r,"padding","0px"),ab(e),cb(e),Lf(function(l){return a(l3,e,a(zb,v3,nb(l)))}),Tf(C3(c))]),D)]))))}}),vc=h(Gr,255,255,255),kb=function(e){return a(kr,$([ce(ye),Sn(8),a(vf,0,14),Tt({b3:1,g4:0,hx:0,cI:0}),wn(Hi)]),$([a(Le,$([aa(16),Qc,Cn(vc)]),Ln(e.hc)),a(kr,$([ce(ye),Sn(6)]),o3(a(cc,Tb,e.aN)))]))},Db=function(e){return a(kr,$([ce(ye),we(ye),Cn(Xc),aa(12),t3,$f]),a(ee,kb,e))},Vb=a3(Db),Ab=function(e){return a(kr,$([ce(ye),we(ye)]),$([a(Dn,$([Sn(14),ce(ye)]),D),a(Kc,Qh,Vb(ea(e).gb))]))},Fb=function(e){return{$:6,a:e}},Ib=re(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Eb=function(e){var r=e.cI,n=e.hx,t=e.b3,i=e.g4;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,gt,V(pt,"p-"+k(r),o,o,o,o))}else return a(Ce,gt,V(pt,P(Ib,r,n,t,i),r,n,t,i))},Bb=function(e){return{$:0,a:e}},jb=function(e){return{$:1,a:e}},Rb=jb,Nb=function(e){var r=e.b.X;return Yn(r)},Li=h(Gr,255,60,0),Gb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Yn(r)+1+Yn(n)},Hb=function(e){var r=L(Nb(e),Gb(e)-1),n=r.a,t=r.b;return a(Le,$([ce(ye),$n]),a(Df,$([ol(a(Dn,$([ce(ye),we(ke(4)),$n,cn(Mf),Wn(2)]),$([a(Le,$([ce(ka(n)),we(ye),cn(Li),Wn(2)]),Je),a(Le,$([ce(ka(t-n))]),Je)])))]),{em:Rb(""),cr:t,cs:0,bJ:a(Ze,Ie,Bb),cF:Y(1),ic:Vf($([ce(ke(12)),we(ke(12)),Wn(6),cn(Li)])),cJ:n}))},Wb=Wi(2),ti=h(Gr,220,220,220),Ub=function(e){var r=e.a,n=function(){return r.$?$([Cn(ti)]):$([Cn(Li)])}();return a(Le,Z(n,$([aa(14),Wb,Pf,cl($([ll]))])),Ln(a(_v,3,ea(e).a4)))},Ob=function(e){e.a;var r=e.b.X;return a(je,function(n){return Ie(60/(ea(e).a4-n))},a(je,a(Ze,iv,function(n){return n.a4}),il(a(vv,59,r))))},Jb=function(e){var r=Ob(e);if(r.$===1)return Je;var n=r.a;return a(Le,$([aa(14),Cn(Xc),cl($([ll]))]),Ln(k(n)+" FPS"))},ju={$:1},qb={$:3},Yb={$:2},Zb={$:8},Kb=w$,Xb=v(function(e,r){return a(zc,e,Kb(r))}),Qb=Xb("disabled"),e1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},r1=function(e){return a(Pt,e1,e)?Zn:xr("focusable")},Pi=a(Mt,Ae,gf),Af=v(function(e,r){var n=r.eW,t=r.em;return P($r,Cr,ra,a(M,ce(pr),a(M,we(pr),a(M,xr(p.cb+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),a(M,Hn,a(M,r1(e),a(M,Ui(Zb),a(M,Ae(_f(0)),function(){if(n.$===1)return a(M,Ae(Qb(!0)),e);var i=n.a;return a(M,Pi(i),a(M,hf(function(o){return _e(o,sf)||_e(o,bf)?Y(i):J}),e))}()))))))),rr($([t])))}),Ru=v(function(e,r){return a(Af,D,{em:a(Le,$([ce(ke(36)),Gn(3),Cn(r),xf,aa(12),Qc,wn(r),Oi(1),Wn(4)]),Ln("REC")),eW:Y(e)})}),Nu=T(function(e,r,n){return a(Af,D,{em:hn(h(ha,20,n,e)),eW:Y(r)})}),n1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Dn,D,$([a(Le,$([ce(ke(40))]),function(){switch(r.$){case 0:return a(Ru,ju,Li);case 1:return a(Ru,Yb,ti);default:return Je}}()),a(Le,$([ce(ke(28))]),function(){switch(r.$){case 0:return Je;case 1:return pn(n)?Je:h(Nu,Nn.hp,qb,ti);default:return h(Nu,Nn.ho,ju,ti)}}())]))},a1=function(e){return a(kr,$([ce(ye)]),$([Hb(e),a(Dn,$([ce(ye),Sn(14),a(vf,0,6),$n]),$([n1(e),Jb(e),Ub(e)]))]))},t1=function(e){return a(kr,$([ce(ye),Sn(14),Eb({b3:20,g4:0,hx:0,cI:0}),Tt({b3:1,g4:0,hx:0,cI:0}),wn(Hi)]),$([a(Le,$([aa(16),Qc,Cn(Xc)]),Ln("Time Travel")),a(Kc,Fb,a1(e))]))},i1=v(function(e,r){return a(kr,$([ea(r).dD.im>600?cn(Kh):cn(Xh),Tt({b3:0,g4:0,hx:1,cI:0}),wn(Hi),ce(ke(Sa.c4)),we(ye)]),$([function(){return e?Je:a(kr,$([ce(ye),we(ye),Gn(14),Sn(14)]),$([t1(r),Ab(r)]))}()]))}),o1=function(e){return{$:3,a:e}},Gu=Gi(2),c1=h(Gr,232,78,50),l1=h(Gr,48,48,48),u1=function(e){return a(Vr,"href",Ad(e))},$1=Nr("rel"),v1=Vr("target"),Hu=v(function(e,r){var n=r.fn,t=r.em;return P($r,Cr,gn("a"),a(M,Ae(u1(n)),a(M,Ae($1("noopener noreferrer")),a(M,Ae(v1("_blank")),a(M,ce(pr),a(M,we(pr),a(M,xr(p.cb+(" "+(p.ax+(" "+p.et)))),e)))))),rr($([t])))}),Ya=Vr("title"),f1=h(Gr,31,161,242),m1=function(e){var r=T(function(o,c,l){var u=_e(c,e)?vc:l1;return a(Le,$([nn(Ya(o)),Pi(o1(c)),Hn,Gn(7)]),hn(h(ha,40,u,l)))}),n=a(kr,$([Qv]),$([h(r,"Configurations",0,Nn.hN)])),t=a(kr,D,$([a(Hu,$([nn(Ya("Twitter")),Gu,Hn,Gn(7)]),{em:hn(h(ha,40,f1,Nn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(Hu,$([nn(Ya("Source Code")),Gu,Hn,Gn(7)]),{em:hn(h(ha,40,c1,Nn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([ce(ke(Sa.bF)),Gn(4),Pi(Xv),Tt({b3:1,g4:0,hx:0,cI:0}),wn(Hi),Hn,nn(Ya("Activate Distraction Free Mode"))]),hn(h(ha,46,vc,Nn.fx)));return a(kr,$([ce(ke(Sa.bF)),we(ye),$f,cn(ef)]),$([i,n,t]))},s1=function(e){var r=a(Le,$([ce(ke(Sa.bF)),Qv,Gn(4),Pi(Xv),Hn,nn(Ya("Deactivate Distraction Free Mode (A)"))]),hn(h(ha,46,ef,Nn.fx)));return e.bx?r:a(Dn,$([ce(ke(Sa.bF+Sa.c4)),we(ye)]),$([m1(e.bq),a(i1,e.bq,e.R)]))},d1=T(function(e,r,n){var t=yg(n.R),i=ea(n.R);return h(Ih,{hl:$([wg({fO:J,fW:J,hH:J})])},$([ce(ke(ct(i.dD.im))),we(ke(ct(i.dD.gH))),nn(a(_r,"-webkit-font-smoothing","antialiased")),nn(a(_r,"pointer-events","none")),nn(a(_r,"touch-action","none")),nn(a(_r,"user-select","none")),Xo(a(Kc,bg,a(r,i,t))),Xo(s1(n))]),hn(a(Eh,_i(_g),a(e,i,t))))}),p1=Lr(function(e,r,n,t,i,o){var c=v(function(u,f){return L(P(mg,r,o,u,f),vu)}),l=function(u){var f=a(cv,n,u.gY);return L({bq:0,bx:!0,R:a(sg,f,t),dO:0},vu)};return V0({gS:l,hX:hg,ii:c,ik:a(d1,e,i)})}),g1=re(function(e,r,n,t){return tr(p1,e,r,n,t,v(function(i,o){return Je}),T(function(i,o,c){return c}))}),h1=function(e){return{}},b1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),_1=function(e){return h(Re,v(function(r,n){var t=r.a,i=r.b;return h(ya,t,i,n)}),Oc,e)},y1=T(function(e,r,n){return h(b1,e,r,_1(n))}),x1=y1,bo=T(function(e,r,n){var t=r.a,i=r.b;return L(e,a(mv,L(t,i),n))}),w1=$([h(x1,"Camera",!0,$([h(bo,"camera x",L(-40,40),0),h(bo,"camera y",L(-40,40),0),h(bo,"camera z",L(-40,40),16)]))]),S1=v(function(e,r){return r}),C1=function(e){var r=function(n){return a(ee,function(t){return L(n,t)},e)};return na(r)},ul=function(e){return{$:5,a:e}},Mi=function(e){return ul(e)},Ji=v(function(e,r){return{$:0,a:e,b:r}}),Ff=v(function(e,r){return{$:2,a:e,b:r}}),If=v(function(e,r){return{$:4,a:e,b:r}}),Ef=v(function(e,r){return{$:3,a:e,b:r}}),$l=v(function(e,r){return{$:1,a:e,b:r}}),L1=T(function(e,r,n){return{io:e,is:r,dV:n}}),P1=function(e){var r=e;return r},vl=function(e){var r=e;return P1(r.fN)},fl=function(e){var r=e;return r.a5},Fa=function(e){var r=e;return r.dm},Dt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dV:t.dV+n.dV}}),vn=function(e){return e},ta=function(e){var r=e;return r.dT},ia=function(e){var r=e;return r.dU},oa=function(e){var r=e;return r.dW},M1=v(function(e,r){return vn({dm:a(Dt,e,Fa(r)),dT:ta(r),dU:ia(r),dW:oa(r)})}),z1=v(function(e,r){return{fN:a(M1,e,vl(r)),a5:fl(r)}}),Vt=v(function(e,r){return{gm:r,dm:e}}),T1=v(function(e,r){var n=r;return a(Vt,a(Dt,e,n.dm),n.gm)}),k1=v(function(e,r){var n=r;return{m:a(T1,e,n.m),g5:n.g5,hs:n.hs}}),ml=function(e){var r=e;return r},D1=function(e){return e},Bf=v(function(e,r){var n=ml(r),t=n.a,i=n.b;return D1(L(e(t),e(i)))}),V1=v(function(e,r){return a(Bf,Dt(e),r)}),sl=function(e){var r=e;return r.f4},dl=function(e){var r=e;return r.hs},Sr=function(e){var r=e;return be(r)},jf=v(function(e,r){return{f4:r,hs:Sr(e)}}),A1=v(function(e,r){return a(jf,dl(r),a(Dt,e,sl(r)))}),Rf=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return j(e(t),e(i),e(o))}),F1=v(function(e,r){return a(Rf,Dt(e),r)}),qi=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(L1,n,t,i);switch(r.$){case 0:var m=r.a,c=r.b;return a(Ji,m,a(z1,o,c));case 1:var m=r.a,l=r.b;return a($l,m,a(F1,o,l));case 3:var m=r.a,u=r.b;return a(Ef,m,a(A1,o,u));case 2:var m=r.a,f=r.b;return a(Ff,m,a(k1,o,f));case 4:var m=r.a,s=r.b;return a(If,m,a(V1,o,s));default:var b=r.a;return ul(a(ee,qi(j(n,t,i)),b))}}),fc=function(e){return qi(j(e,0,0))},jn=function(e){return qi(j(0,e,0))},ht=function(e){return qi(j(0,0,e))},Kn=function(e){return e},Mn=gs,Xn=hs,ii=T(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Mn(c),u=Xn(c),f=t.gm,m=f,s=m.io*u,b=l*s,d=s*s,y=m.is*u,_=l*y,S=s*y,C=y*y,x=1-2*(d+C),z=m.dV*u,W=l*z,X=2*(S-W),ae=2*(S+W),te=s*z,ie=2*(te+_),ne=2*(te-_),q=y*z,de=2*(q-b),pe=2*(q+b),ze=z*z,Se=1-2*(C+ze),me=1-2*(d+ze);return{io:Se*o.io+X*o.is+ie*o.dV,is:ae*o.io+me*o.is+de*o.dV,dV:ne*o.io+pe*o.is+x*o.dV}}),At=T(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Mn(c),u=Xn(c),f=t.dm,m=f,s=o.io-m.io,b=o.is-m.is,d=o.dV-m.dV,y=t.gm,_=y,S=_.io*u,C=l*S,x=S*S,z=_.is*u,W=l*z,X=S*z,ae=z*z,te=1-2*(x+ae),ie=_.dV*u,ne=l*ie,q=2*(X-ne),de=2*(X+ne),pe=S*ie,ze=2*(pe+W),Se=2*(pe-W),me=z*ie,Te=2*(me-C),F=2*(me+C),I=ie*ie,E=1-2*(ae+I),B=1-2*(x+I);return{io:m.io+E*s+q*b+ze*d,is:m.is+de*s+B*b+Te*d,dV:m.dV+Se*s+F*b+te*d}}),I1=T(function(e,r,n){return vn({dm:h(At,e,r,Fa(n)),dT:h(ii,e,r,ta(n)),dU:h(ii,e,r,ia(n)),dW:h(ii,e,r,oa(n))})}),E1=T(function(e,r,n){return{fN:h(I1,e,r,vl(n)),a5:fl(n)}}),B1=v(function(e,r){var n=a(At,e,r),t=a(ii,e,r);return function(i){var o=i;return a(Vt,n(o.dm),t(o.gm))}}),j1=T(function(e,r,n){var t=n;return{m:h(B1,e,r,t.m),g5:t.g5,hs:t.hs}}),R1=T(function(e,r,n){return a(Bf,a(At,e,r),n)}),N1=T(function(e,r,n){return a(jf,dl(n),h(At,e,r,sl(n)))}),G1=T(function(e,r,n){return a(Rf,a(At,e,r),n)}),Yi=T(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(Ji,l,h(E1,e,r,t));case 1:var l=n.a,i=n.b;return a($l,l,h(G1,e,r,i));case 3:var l=n.a,o=n.b;return a(Ef,l,h(N1,e,r,o));case 2:var l=n.a,c=n.b;return a(Ff,l,h(j1,e,r,c));case 4:var l=n.a,u=n.b;return a(If,l,h(R1,e,r,u));default:var f=n.a;return ul(a(ee,a(Yi,e,r),f))}}),ca={io:0,is:0,dV:0},ln=function(e){return e},Nf=ln({io:1,is:0,dV:0}),pl=Nf,H1=a(Vt,ca,pl),Wu=v(function(e,r){return h(Yi,H1,Kn(e),r)}),gl=ln({io:0,is:1,dV:0}),hl=gl,W1=a(Vt,ca,hl),U1=v(function(e,r){return h(Yi,W1,Kn(e),r)}),bl=ln({io:0,is:0,dV:1}),_l=bl,O1=a(Vt,ca,_l),nt=v(function(e,r){return h(Yi,O1,Kn(e),r)}),Xe=Cs,_o=v(function(e,r){var n=e,t=r;return he(t,n)>-1}),yo=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),un=v(function(e,r){var n=e,t=r;return t-n}),J1=ln({io:-1,is:0,dV:0}),q1=ln({io:0,is:-1,dV:0}),Gf=ln({io:0,is:0,dV:-1}),Ke=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),Y1=Lr(function(e,r,n,t,i,o){var c=a(_o,n,o)?bl:Gf,l=a(_o,r,i)?gl:q1,u=a(_o,e,t)?Nf:J1,f=j(Sr(a(un,e,t)),Sr(a(un,r,i)),Sr(a(un,n,o))),m=h(Ke,a(yo,e,t),a(yo,r,i),a(yo,n,o)),s=vn({dm:m,dT:u,dU:l,dW:c});return{fN:s,a5:f}}),Un=function(e){var r=e;return r.io},On=function(e){var r=e;return r.is},Jn=function(e){var r=e;return r.dV},Hf=v(function(e,r){return tr(Y1,Un(e),On(e),Jn(e),Un(r),On(r),Jn(r))}),_n=T(function(e,r,n){return{io:e,is:r,dV:n}}),Z1=v(function(e,r){var n=r/2;return a(Ji,e,a(Hf,h(_n,-n,-n,-n),h(_n,n,n,n)))}),K1=re(function(e,r,n,t){var i=j(e,r,n),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,f=l*2-u,m=function(y){var _=y<0?y+1:y>1?y-1:y;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},s=m(o-1/3),b=m(o),d=m(o+1/3);return P(zt,d,b,s,t)}),X1=T(function(e,r,n){return P(K1,e,r,n,1)}),mc=function(e){return{$:0,a:e}},Wf=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Uf=T(function(e,r,n){return he(n,e)<0?e:he(n,r)>0?r:n}),xo=function(e){return h(Uf,0,1,e<=.04045?e/12.92:a(kt,(e+.055)/1.055,2.4))},Ft=cp,Q1=function(e){var r=rl(e),n=r.hu,t=r.gA,i=r.fS;return h(Ft,xo(n),xo(t),xo(i))},Of=function(e){return h(Wf,0,mc(Q1(e)),mc(0))},e_=v(function(e,r){return(r-tv(r/e)*e)/e}),r_=function(e){return 2*Pn*e},Za=re(function(e,r,n,t){return e+(r-e)*(1+Mn(r_(a(e_,n,t))))/2}),sc=function(e){return Of(h(X1,P(Za,0,1,7,e.a4),.8,.8))},wo=function(e){return a(Z1,sc(e),1)},Jf=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=j(n/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(Ji,e,a(Hf,h(_n,-c,-l,-u),h(_n,c,l,u)))}),gr=T(function(e,r,n){return j(e,r,n)}),n_=v(function(e,r){var n=r.a,t=r.b,i=r.c;return a($l,e,h(gr,h(_n,n.io,n.is,n.dV),h(_n,t.io,t.is,t.dV),h(_n,i.io,i.is,i.dV)))}),a_=function(e){var r=a(jn,-(Xe(3)/6),a(fc,-.5,a(nt,-yr(30),a(n_,sc(e),j({io:0,is:0,dV:0},{io:Mn(yr(30)),is:Xn(yr(30)),dV:0},{io:0,is:1,dV:0}))))),n=a(jn,-(Xe(3)/6),a(Jf,sc(e),j(1,1e-8,1)));return Mi($([a(ht,-.5,r),a(ht,.5,r),n,a(nt,yr(120),n),a(nt,yr(240),n)]))},t_=v(function(e,r){var n=r.a,t=r.b,i=v(function(s,b){return a(jn,(1+Xe(3))/2,a(nt,s,a(jn,-((1+Xe(3))/2),b)))}),o=Pn,c=20,l=function(s){return a(Wu,P(Za,0,o,c,e.a4),s)},u=a(i,yr(240),l(wo(e))),f=a(fc,(3+Xe(3))/2,a(jn,(1+Xe(3))/2,l(wo(e)))),m=l(Mi($([a(nt,yr(90),a(jn,1/2+Xe(3)/6,a_(e))),wo(e)])));return a(ht,P(Za,-1,1,7,e.a4),a(jn,t*(1+Xe(3)),a(fc,n*(3+Xe(3)),a(U1,P(Za,0,o,c,e.a4),a(Wu,P(Za,0,o,c,e.a4),Mi($([m,a(i,yr(60),m),a(i,yr(120),m),a(i,-yr(60),m),f,u])))))))}),i_=function(e){return Mi(a(ee,t_(e),a(C1,a(jr,-1,1),a(jr,-1,1))))},o_=v(function(e,r){return a(je,function(n){if(n.$)return 0;var t=n.b;return t},a(Ri,e,r.aN))}),c_=v(function(e,r){return a(Ve,0,il(a(yn,o_(e),r)))}),l_=v(function(e,r){return a(c_,e,r.gb)}),So=l_,Ka=function(e){return Kn(Pn*(e/180))},u_=v(function(e,r){var n=e,t=r,i=t.dV-n.dV,o=t.is-n.is,c=t.io-n.io,l=a(nr,be(c),a(nr,be(o),be(i)));if(l){var u=i/l,f=o/l,m=c/l,s=Xe(m*m+f*f+u*u);return Y({io:m/s,is:f/s,dV:u/s})}else return J}),Co=function(e){return e},yl=v(function(e,r){var n=e,t=r;return{io:t.is*n.dV-t.dV*n.is,is:t.dV*n.io-t.io*n.dV,dV:t.io*n.is-t.is*n.io}}),oi=function(e){var r=e,n=a(nr,be(r.io),a(nr,be(r.is),be(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=Xe(o*o+i*i+t*t);return Y({io:o/c,is:i/c,dV:t/c})}else return J},zi=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),$_=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dV*n.dV}),qf=v(function(e,r){var n=e,t=r;return he(t,n)>0}),v_=v(function(e,r){var n=e,t=r;return he(t,n)<0}),f_=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dV:t.dV-n.dV}}),m_=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),s_=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Br=0,Yf={io:0,is:0,dV:0},d_=T(function(e,r,n){return a($c,function(t){var i=a(f_,a(m_,t,r),r);return a($c,function(o){var c=a(yl,r,e),l=a($_,n,c),u=a(qf,Br,l)?c:a(v_,Br,l)?s_(c):Yf;return a(je,function(f){return j(t,o,f)},oi(u))},oi(i))},oi(e))}),p_=function(e){var r=e,n=be(r.dV),t=be(r.is),i=be(r.io);if(he(i,t)<1)if(he(i,n)<1){var o=Xe(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=Xe(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(he(t,n)<1){var o=Xe(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=Xe(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},xl=function(e){var r=p_(e),n=r,t=n,i=e,o=i,c={io:o.is*t.dV-o.dV*t.is,is:o.dV*t.io-o.io*t.dV,dV:o.io*t.is-o.is*t.io};return L(r,c)},_a=function(e){var r=e;return r},g_=v(function(e,r){var n=xl(e),t=n.a,i=n.b;return vn({dm:r,dT:t,dU:i,dW:e})}),h_=function(e){var r=a(zi,e.bb,e.d9),n=_a(e.fm),t=a(yl,r,n),i=h(d_,r,n,t);if(i.$){var f=oi(r);if(f.$){var s=xl(e.fm),b=s.a,d=s.b;return vn({dm:e.d9,dT:d,dU:e.fm,dW:b})}else{var m=f.a;return a(g_,m,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return vn({dm:e.d9,dT:u,dU:l,dW:c})}},b_=function(e){return{$:0,a:e}},ci=function(e){var r=e;return .5*r},__=bs,y_=function(e){var r=e;return __(r)},x_=function(e){var r=ci(Sr(e.fq)),n=y_(r);return{dx:b_(n),dN:e.dN}},w_=function(e){var r=e.bb,n=e.d9,t=e.fm;return x_({fq:Ka(40),dN:h_({d9:Co(n),bb:Co(r),fm:a(Ve,gl,a(u_,ca,Co(t)))})})},S_=function(e){return e},qn=function(e){return e},C_=function(e){return qn(.01*e)},Uu=function(e){return e},L_=function(e){return e},P_=function(e){return{$:0,a:e}},M_=P_,z_={$:3},T_=z_,k_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),D_=k_,V_=function(e){return{$:1,a:e}},A_=V_,F_=function(e){return a(Nr,"height",k(e))},I_=jv,E_=function(e){return{$:2,a:e}},B_=E_,j_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return Ie(l*1e3)/1e3},c=function(l){return Ie(l*1e4)/100};return xa($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(t)),"%,",ve(o(i)),")"]))},R_=v(function(e,r){switch(r.$){case 0:return a(Yp,e,r);case 1:return a(Zp,e,r);case 2:return a(Kp,e,r);case 3:return a(Xp,e,r);case 4:return a(Qp,e,r);default:return a(e0,e,r)}}),N_=v(function(e,r){switch(r.$){case 0:return a(Cp,e,r);case 1:return a(Lp,e,r);case 2:return a(Pp,e,r);case 3:return a(Mp,e,r);case 4:return a(zp,e,r);case 5:return a(Tp,e,r);case 6:return a(kp,e,r);case 7:return a(Dp,e,r);default:return Vp(e)}}),G_=T(function(e,r,n){return h(qp,e,r,n)}),Ou=function(e){var r=e;return r},Ia=mp,Lo=P(Ia,1,1,1,1),Wr=T(function(e,r,n){return a(ee,function(t){return a(t,r,n)},e)}),H_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),W_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(H_,n*t/i,n,n*(1-t-i)/i)}),U_=function(e){var r=e.a,n=e.b,t=e.c;return h(Ft,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},wl=v(function(e,r){return U_(a(W_,e,r))}),Zf=v(function(e,r){return{ek:_e(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cD,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cD,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cD,cD:e.cD*r.cD}}),qr=bp,O_=function(e){return qr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Po=qe(function(e,r,n,t,i){var o=t.ek?1:-1,c=P(Ia,t.cD,t.cD,t.cD,o);return tr(i,e,c,O_(t),t.ek,r,n)}),Kf=Lr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,m=n,s=a(Zf,c,t),b=l,d=o;e=u,r=f,n=m,t=s,i=b,o=d;continue e;case 1:var y=i.b,_=a(M,V(Po,e,r,n,t,y),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(M,V(Po,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var x=i.a,z=a(M,V(Po,e,r,n,t,x),o.hI);return{P:o.P,_:o._,hI:z};default:var W=i.a;return h(Re,P(Kf,e,r,n,t),o,W)}}),J_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Xf=J_,Sl=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),q_=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(Sl,518,r,n,t)},Y_=v(function(e,r){return{$:6,a:e,b:r}}),Z_=Y_,Qf=$([q_({ab:1,ac:0,ai:!1}),P(Xf,!1,!1,!1,!1),a(Z_,0,1)]),Da=519,Cl=8,em=15,Ca=7681,K_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Fe=Sp,X_=v(function(e,r){return{$:0,a:e,b:r}}),Q_=X_({d5:1,ei:0,eS:5}),br=ip,e2=Q_($([{cy:a(br,-1,-1)},{cy:a(br,1,-1)},{cy:a(br,-1,1)},{cy:a(br,1,1)}])),r2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cy"},uniforms:{}},n2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:m}}}}}}}}}}}},Ll=T(function(e,r,n){var t=e.dy,i=e.dd,o=e.dS,c=v(function(f,m){var s=f;return m(s)}),l=v(function(f,m){var s=f;return m(s)}),u=function(f){return a(Ze,c(f.bP),a(Ze,l(f.bA),a(Ze,l(f.bY),l(f.bZ))))};return a(u,n,a(u,r,h(n2,t,i,o)))}),Pl=function(e){return h(Ll,{dd:e.dd,dy:e.dy,dS:e.dS},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},Ml=function(e){return V(Fe,$([Pl(e),P(Xf,!1,!1,!1,!1)]),r2,K_,e2,{})},a2=Ml({bA:Ca,dd:0,dy:Cl,bP:Da,dS:em,bY:Ca,bZ:Ca}),t2=516,Ju=5386,or=7680,i2=function(e){return a(kt,2,e+4)},rm=function(e){return Ml({bA:or,dd:em,dy:Cl,bP:t2,dS:i2(e),bY:Ju,bZ:Ju})},o2=T(function(e,r,n){return dr($([h(Wr,e,n,Qf),$([rm(r),a2])]))}),c2=v(function(e,r){return dr(a(X$,o2(e),r))}),l2=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(Sl,513,r,n,t)},u2=l2({ab:1,ac:0,ai:!0}),$2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},v2=function(e){var r=e.cA,n=e.cg,t=e.b1,i=e.b_,o=e.b7,c=e.fI,l=v(function(u,f){var m=u.a,s=u.b,b=u.c,d=f.a,y=f.b,_=f.c;return $2(m)(s)(b)(d)(y)(_)(r)(n)(t)(i)});return a(l,o,c)},f2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qu=v(function(e,r){var n=e,t=r;return h(f2,32774,n,t)}),m2=1,Yu=771,s2=770,zl=v2({b_:0,fI:a(qu,m2,Yu),b1:0,b7:a(qu,s2,Yu),cg:0,cA:0}),$a=$([u2,zl]),d2=function(e){var r=e;return r.eL},p2=function(e){var r=e;return r.eM},nm=function(e){var r=e;return r.eN},g2=function(e){var r=e;return r.eO},h2=function(e){var r=e;return r.eP},am=function(e){var r=e;return r.eQ},tm=function(e){return j(a(un,g2(e),d2(e)),a(un,h2(e),p2(e)),a(un,am(e),nm(e)))},Zu=function(e){var r=e;return Fa(r)},b2=function(e){return e},_2=function(e){return vn({dm:b2({io:e.K,is:e.L,dV:e.M}),dT:ln({io:e.t,is:e.u,dV:e.v}),dU:ln({io:e.w,is:e.x,dV:e.y}),dW:ln({io:e.z,is:e.A,dV:e.B})})},Mo=v(function(e,r){var n=e,t=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,f=u;return{io:t.io*f.io+t.is*f.is+t.dV*f.dV,is:t.io*l.io+t.is*l.is+t.dV*l.dV,dV:t.io*o.io+t.is*o.is+t.dV*o.dV}}),im=v(function(e,r){var n=e,t=r,i=n.dm,o=i,c=t.io-o.io,l=t.is-o.is,u=t.dV-o.dV,f=n.dW,m=f,s=n.dU,b=s,d=n.dT,y=d;return{io:c*y.io+l*y.is+u*y.dV,is:c*b.io+l*b.is+u*b.dV,dV:c*m.io+l*m.is+u*m.dV}}),om=v(function(e,r){return{dm:a(im,e,Fa(r)),dT:a(Mo,e,ta(r)),dU:a(Mo,e,ia(r)),dW:a(Mo,e,oa(r))}}),Ti=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(nr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(wa,n,t)}),y2=v(function(e,r){var n=Ti(r),t=Ti(e);return{eL:a(He,t.eL,n.eL),eM:a(He,t.eM,n.eM),eN:a(He,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Dr=function(e){var r=e;return r},x2=function(e){var r=e;return j(r.io,r.is,r.dV)},at=v(function(e,r){var n=e,t=r;return t+n}),w2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ci(Sr(t)),c=ci(Sr(n)),l=ci(Sr(i)),u=x2(r),f=u.a,m=u.b,s=u.c;return{eL:a(at,c,f),eM:a(at,o,m),eN:a(at,l,s),eO:a(un,c,f),eP:a(un,o,m),eQ:a(un,l,s)}}),Ku=re(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,f=i.is*r,m=i.io*r,s=Dr(oa(e)),b=be(l*s.io)+be(c*s.is)+be(o*s.dV),d=Dr(ia(e)),y=be(l*d.io)+be(c*d.is)+be(o*d.dV),_=Dr(ta(e)),S=be(l*_.io)+be(c*_.is)+be(o*_.dV),C=a(w2,j(S,y,b),a(im,e,h(_n,m,f,u)));if(t.$)return Y(C);var x=t.a;return Y(a(y2,x,C))}),dc=re(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var d=e,y=r,_=n,S=o;e=d,r=y,n=_,t=S;continue e;case 1:var c=i.a,l=P(Ku,e,r,c,n),d=e,y=r,_=l,S=o;e=d,r=y,n=_,t=S;continue e;case 2:var d=e,y=r,_=n,S=o;e=d,r=y,n=_,t=S;continue e;case 3:var c=i.a,l=P(Ku,e,r,c,n),d=e,y=r,_=l,S=o;e=d,r=y,n=_,t=S;continue e;case 4:var u=i.a,d=e,y=r,_=P(dc,e,r,n,u),S=o;e=d,r=y,n=_,t=S;continue e;default:var f=i.a,m=i.b,s=a(om,_2(f),e),b=r*f.cD,d=e,y=r,_=P(dc,s,b,n,$([m])),S=o;e=d,r=y,n=_,t=S;continue e}}else return n}),Ea=lp,Ba=up,ja=$p,cm=function(e){return{$:4,a:e}},S2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(M,n,r);e=i,r=o;continue e}else return r}),It=function(e){return cm(a(S2,e,D))},C2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cD:1},L2=function(e){var r=e;return r},Xu=Ml({bA:Ca,dd:0,dy:Cl,bP:Da,dS:255,bY:Ca,bZ:Ca}),P2=function(e){var r=e,n=a(nr,be(r.io),a(nr,be(r.is),be(r.dV)));if(n){var t=r.dV/n,i=r.is/n,o=r.io/n,c=Xe(o*o+i*i+t*t);return c*n}else return Br},lr={b1:0,f3:!1,cg:0,dv:0,cA:0,dK:0,io:0,is:0,dV:0},Pr=v(function(e,r){var n=e,t=r;return qr({eu:n.io,ev:n.cA,ew:t.io,ex:t.cA,ey:n.is,ez:n.cg,eA:t.is,eB:t.cg,eC:n.dV,eD:n.b1,eE:t.dV,eF:t.b1,eG:n.dK,eH:n.dv,eI:t.dK,eJ:t.dv})}),Xa=L({bG:a(Pr,lr,lr),cn:a(Pr,lr,lr),co:a(Pr,lr,lr),cp:a(Pr,lr,lr)},P(Ia,0,0,0,0)),Ge=v(function(e,r){var n=r;return e*n}),Qu=function(e){var r=e;return-r},lm=514,um=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(Sl,515,r,n,t)},$m=240,M2=$([um({ab:1,ac:0,ai:!0}),Pl({bA:or,dd:$m,dy:0,bP:lm,dS:0,bY:or,bZ:or}),zl]),z2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,c=Sr(t),l=c,u=Sr(i),f=u,m=n.dx;if(m.$){var b=m.a;return Jo(f)?qr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):qr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-l),eF:-(f+l)/(f-l),eG:0,eH:0,eI:0,eJ:1})}else{var s=m.a;return Jo(f)?qr({eu:1/(o*s),ev:0,ew:0,ex:0,ey:0,ez:1/s,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):qr({eu:1/(o*s),ev:0,ew:0,ex:0,ey:0,ez:1/s,eA:0,eB:0,eC:0,eD:0,eE:-(f+l)/(f-l),eF:-2*f*l/(f-l),eG:0,eH:0,eI:-1,eJ:0})}}),Jt=v(function(e,r){return(1&e>>r)===1?0:1}),T2=function(e){return $([um({ab:1,ac:0,ai:!0}),Pl({bA:or,dd:$m,dy:e,bP:lm,dS:0,bY:or,bZ:or}),zl])},k2=T(function(e,r,n){return dr(a(ee,function(t){var i=t<<4,o=P(Ia,a(Jt,t,0),a(Jt,t,1),a(Jt,t,2),a(Jt,t,3));return h(Wr,e,L(r,o),T2(i))},a(jr,1,a(kt,2,n)-1)))}),bt=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},La=function(e){var r=e;return r},D2=_p,e$=function(e){var r=e;return bt(oa(r))},V2={dm:ca,dT:pl,dU:hl,dW:_l},Zi=function(e){var r=e;return r},A2=function(e){var r=Zi(Fa(e)),n=Dr(oa(e)),t=Dr(ia(e)),i=Dr(ta(e));return qr({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dV,eD:t.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},F2=v(function(e,r){var n=r;return A2(a(om,n,e))}),I2=function(e){return a(F2,V2,e)},E2=function(e){var r=e;return r.dN},B2=function(e){var r=e;return ta(r)},j2=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dV:o}}),R2=function(e){var r=e;return ia(r)},N2=function(e){var r=E2(e.f0),n=vn({dm:Zu(r),dT:B2(r),dU:R2(r),dW:bt(e$(r))}),t=It(e.a9),i=t,o=P(dc,n,1,J,$([i]));if(o.$===1)return D;var c=o.a,l=I2(r),u=a(Ge,.99,a(He,Sr(e.a3),Qu(nm(c)))),f=tm(c),m=f.a,s=f.b,b=f.c,d=P2(h(j2,m,s,b)),y=a(Ge,1.01,a(at,d,Qu(am(c)))),_=a(z2,e.f0,{fM:e.fM,gv:y,hd:u}),S=D2(_).eJ,C=S?Dr(bt(e$(r))):La(Zu(r)),x=function(){var me=e.cH;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var Te=me.a;return L(3,Te);case 4:var Te=me.a;return L(4,Te);default:return L(5,0)}}(),z=x.a,W=x.b,X=e.ce,ae=X,te=a(wl,ae,e.cL),ie=te,ne=qr({eu:0,ev:C.io,ew:Ea(ie),ex:e.ff,ey:0,ez:C.is,eA:Ba(ie),eB:L2(d),eC:0,eD:C.dV,eE:ja(ie),eF:z,eG:0,eH:S,eI:0,eJ:W}),q=tr(Kf,ne,l,_,C2,i,{P:D,_:D,hI:D}),de=e.cm;switch(de.$){case 0:var pe=de.a;return dr($([h(Wr,q.P,L(pe,Lo),$a),h(Wr,q._,Xa,$a)]));case 1:var pe=de.a;return dr($([h(Wr,q.P,Xa,$a),$([Xu]),h(Wr,q.hI,pe.bG,Qf),$([rm(0)]),h(Wr,q.P,L(pe,Lo),M2),h(Wr,q._,Xa,$a)]));default:var ze=de.a,Se=de.b;return dr($([h(Wr,q.P,L(Se,Lo),$a),$([Xu]),a(c2,q.hI,ze),h(k2,q.P,Se,Yn(ze)),h(Wr,q._,Xa,$a)]))}},G2=function(e){return a(Nr,"width",k(e))},H2=v(function(e,r){var n=$([A_(1),B_(0),M_(!0),P(D_,0,0,0,0)]),t=function(){var z=e.cP;switch(z.$){case 0:return j(n,"0",1);case 1:return j(a(M,T_,n),"1",1);default:var W=z.a;return j(n,"0",W)}}(),i=t.a,o=t.b,c=t.c,l=e.a5,u=l.a,f=l.b,m=Ou(f),s=a(_r,"height",k(m)+"px"),b=Ou(u),d=b/m,y=a(na,function(z){return N2({fM:d,f0:e.f0,a3:e.a3,a9:z.a9,ce:z.ce,cm:z.cm,ff:c,cH:z.cH,cL:z.cL})},r),_=a(_r,"width",k(b)+"px"),S=e.a1,C=S,x=j_(C);return h(I_,"div",$([a(_r,"padding","0px"),_,s]),$([L(o,h(G_,i,$([G2(Ie(b*c)),F_(Ie(m*c)),_,s,a(_r,"display","block"),a(_r,"background-color",x)]),y))]))}),W2=function(e){return a(H2,{cP:e.cP,a1:e.a1,f0:e.f0,a3:e.a3,a5:e.a5},$([{a9:e.a9,ce:e.ce,cm:e.cm,cH:e.cH,cL:e.cL}]))},vm=function(e){return e},r$=vm({io:.31271,is:.32902}),U2=v(function(e,r){var n=e,t=Dr(r.gm),i=t.io,o=t.is,c=t.dV,l=a(wl,r.c1,r.cU),u=l;return{b1:ja(u),f3:n,cg:Ba(u),dv:0,cA:Ea(u),dK:1,io:-i,is:-o,dV:-c}}),O2=function(e){return e},J2=function(e){return O2(1.2*a(kt,2,e))},zo=function(e){return e},q2={$:0},Y2=q2,fm=function(e){return e},n$=function(e){var r=e;return r},Z2=function(e){e:for(;;){if(_e(e.gZ,Br)&&_e(e.g_,Br))return lr;if(a(qf,Sr(e.gZ),Sr(e.g_))){var r={cU:e.cU,gZ:e.g_,g_:e.gZ,fm:bt(e.fm)};e=r;continue e}else{var n=be(n$(e.g_)/Pn),t=be(n$(e.gZ)/Pn),i=Dr(e.fm),o=i.io,c=i.is,l=i.dV,u=a(wl,fm(1),e.cU),f=u;return{b1:t*ja(f),f3:!1,cg:t*Ba(f),dv:n/t,cA:t*Ea(f),dK:3,io:o,is:c,dV:l}}}},a$=function(e){return Z2({cU:e.cU,gZ:e.c1,g_:Br,fm:e.fm})},K2=function(e){var r=e;return r},mm=function(e){var r=h(Uf,1667,25e3,K2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return vm({io:n,is:t})},sm=function(e){return e},X2=mm(sm(12e3)),Q2=mm(sm(5600)),ey=function(e){return{$:2,a:e}},ry=function(e){return ey(e)},ny=v(function(e,r){return{$:2,a:e,b:r}}),dm=function(e){return{$:0,a:e}},qt=function(e){var r=e;return r},ay=function(e){var r=e;return r.f3},ty=dm(Xa.a),iy=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?L(a(M,t,o),c):L(o,a(M,t,c))});return h(er,n,L(D,D),r)}),oy=function(e){var r=e;return qr({eu:r.io,ev:r.cA,ew:0,ex:0,ey:r.is,ez:r.cg,eA:0,eB:0,eC:r.dV,eD:r.b1,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},cy=Me(function(e,r,n,t,i,o,c,l){var u=a(iy,ay,$([qt(e),qt(r),qt(n),qt(t)])),f=u.a,m=u.b;if(f.b){var s=Z(f,m);if(s.b&&s.b.b&&s.b.b.b&&s.b.b.b.b&&!s.b.b.b.b.b){var b=s.a,d=s.b,y=d.a,_=d.b,S=_.a,C=_.b,x=C.a;return a(ny,a(ee,oy,f),{bG:a(Pr,b,y),cn:a(Pr,S,x),co:a(Pr,i,o),cp:a(Pr,c,l)})}else return ty}else return dm({bG:a(Pr,e,r),cn:a(Pr,n,t),co:a(Pr,i,o),cp:a(Pr,c,l)})}),ly=T(function(e,r,n){return xt(cy,e,r,n,lr,lr,lr,lr,lr)}),uy=function(e){var r=a(U2,L_(e.hI),{cU:Q2,gm:e.hZ,c1:zo(8e4)}),n=a$({cU:X2,c1:zo(2e4),fm:e.fm}),t=a$({cU:r$,c1:zo(15e3),fm:bt(e.fm)}),i=h(ly,r,n,t);return W2({cP:ry(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a5:e.a5,a9:e.a9,ce:J2(15),cm:i,cH:Y2,cL:r$})},pm=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),$y=re(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),gm=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),hm=re(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),vy=re(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),fy=re(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),my=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Tl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return P(my,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return P(pm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return P($y,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return P(gm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return P(fy,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return P(hm,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return P(vy,n,t,i,1);case 8:return e;case 9:return e;default:return e}},kl={$:0},sy=Me(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,m=Ti(c(u)),s=a(Oe,m.eO,e),b=a(He,m.eL,r),d=a(Oe,m.eP,n),y=a(He,m.eM,t),_=a(Oe,m.eQ,i),S=a(He,m.eN,o),C=c,x=f;e=s,r=b,n=d,t=y,i=_,o=S,c=C,l=x;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),dy=T(function(e,r,n){var t=Ti(e(r));return xt(sy,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),To=v(function(e,r){var n=e,t=r;return he(t,n)<1}),bm=function(e){return a(To,e.eL,e.eO)&&a(To,e.eM,e.eP)&&a(To,e.eN,e.eQ)?e:{eL:a(He,e.eO,e.eL),eM:a(He,e.eP,e.eM),eN:a(He,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},_t=function(e){var r=e;return r},_m=function(e){var r=_t(e),n=r.a,t=r.b,i=r.c,o=Un(n),c=On(n),l=Jn(n),u=Un(t),f=On(t),m=Jn(t),s=Un(i),b=On(i),d=Jn(i);return bm({eL:a(He,o,a(He,u,s)),eM:a(He,c,a(He,f,b)),eN:a(He,l,a(He,m,d)),eO:a(Oe,o,a(Oe,u,s)),eP:a(Oe,c,a(Oe,f,b)),eQ:a(Oe,l,a(Oe,m,d))})},ym=vp,fr=function(e){return ym(Zi(e))},xm=function(e){var r=e;return r},Ki=function(e){return ym(xm(e))},py=v(function(e,r){var n=e,t=r,i=a(nr,be(t.io),a(nr,be(t.is),be(t.dV)));if(i){var o=t.dV/i,c=t.is/i,l=t.io/i,u=Xe(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return Yf}),gy=py(fm(1)),wm=T(function(e,r,n){var t=a(zi,r,n),i=a(zi,e,r);return gy(a(yl,t,i))}),hy=function(e){var r=_t(e),n=r.a,t=r.b,i=r.c,o=Ki(h(wm,n,t,i));return j({q:o,cy:fr(n)},{q:o,cy:fr(t)},{q:o,cy:fr(i)})},by=v(function(e,r){return{$:2,a:e,b:r}}),Sm=by({d5:3,ei:0,eS:4}),_y=function(e){if(e.b){var r=e.a,n=e.b,t=Sm(a(ee,hy,e)),i=h(dy,_m,r,n);return P(pm,i,e,t,0)}else return kl},Cm=function(){var e=qn(1),r=qn(1),n=qn(1),t=a(Ge,-.5,e),i=a(Ge,-.5,r),o=a(Ge,-.5,n),c=h(Ke,o,i,t),l=a(Ge,.5,e),u=h(Ke,o,i,l),f=a(Ge,.5,r),m=h(Ke,o,f,t),s=h(Ke,o,f,l),b=a(Ge,.5,n),d=h(Ke,b,i,t),y=h(Ke,b,f,t),_=h(Ke,b,i,l),S=h(Ke,b,f,l);return Tl(_y($([h(gr,c,y,d),h(gr,c,m,y),h(gr,u,_,S),h(gr,u,S,s),h(gr,d,y,S),h(gr,d,S,_),h(gr,c,s,m),h(gr,c,u,s),h(gr,c,d,_),h(gr,c,_,u),h(gr,m,S,y),h(gr,m,s,S)])))}(),Yt={$:0},yy=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),xy=T(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),f=Ki(h(wm,u,l,c)),m={q:f,cy:fr(u)},s={q:f,cy:fr(l)},b={q:f,cy:fr(c)};return a(M,m,a(M,s,a(M,b,n)))}),Dl=function(e){var r=e;return r.H},wy=re(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var c=t.a;return Y(h(e,i,o,c))}),pc=4294967295>>>32-lt,gc=ls,Sy=T(function(e,r,n){e:for(;;){var t=pc&r>>>e,i=a(gc,t,n);if(i.$){var f=i.a;return a(gc,pc&r,f)}else{var o=i.a,c=e-lt,l=r,u=o;e=c,r=l,n=u;continue e}}}),Cy=function(e){return e>>>5<<5},Ly=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||he(e,n)>-1?J:he(e,Cy(n))>-1?Y(a(gc,pc&e,o)):Y(h(Sy,t,e,i))}),Vl=function(e){var r=e;return r.au},ko=v(function(e,r){return a(Ly,e,Vl(r))}),Py=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(wy,T(function(c,l,u){return j(c,l,u)}),a(ko,t,e),a(ko,i,e),a(ko,o,e))};return a(yn,r,Dl(e))},My=T(function(e,r,n){e:for(;;){var t=a(Rc,wr,e),i=t.a,o=t.b;if(he(Uo(i),wr)<0)return a(ov,!0,{C:r,n,r:i});var c=o,l=a(M,av(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Al=function(e){return e.b?h(My,e,D,0):rv},zy=v(function(e,r){return!a(Pt,a(Mt,A0,e),r)}),Ty=function(e){var r=e.a;return r},Lm=v(function(e,r){var n=Ty(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&he(o,n)<0&&c>=0&&he(c,n)<0&&l>=0&&he(l,n)<0};return a(zy,t,r)?{H:r,au:e}:{H:a(Ev,t,r),au:e}}),ky=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Et=ky({d5:1,ei:3,eS:4}),li=v(function(e,r){var n=La(r),t=La(e);return L(j(t.io,t.is,t.dV),j(n.io,n.is,n.dV))}),t$=h(Ft,0,0,0),Do=Lr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Ri,a(li,e,r),i);if(f.$){var s={q:t$,cy:fr(r)},b={q:t$,cy:fr(e)},d=u+1,y=u;return j(a(M,j(n,y,d),a(M,j(n,d,t),c)),a(M,s,a(M,b,l)),u+2)}else{var m=f.a;return j(a(M,j(n,m,t),c),l,u)}}),Dy=qe(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,m=e(u),s=e(l),b=e(c),d=t+2,y=t+1,_=t,S=e,C=r,x=f,z=t+3,W=tr(Do,m,b,d,_,r,tr(Do,s,m,y,d,r,tr(Do,b,s,_,y,r,i)));e=S,r=C,n=x,t=z,i=W;continue e}else{var X=i,ae=X.a,te=X.b;return L(ae,sr(te))}}),Vy=qe(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,m=e(u),s=e(l),b=e(c),d=n+2,y=n+1,_=n,S=h(ya,a(li,b,m),d,h(ya,a(li,m,s),y,h(ya,a(li,s,b),_,i))),C=a(M,j(_,y,d),t),x=e,z=f,W=n+3,X=C,ae=S;e=x,r=z,n=W,t=X,i=ae;continue e}else return j(t,i,n)}),En=T(function(e,r,n){var t=Py(n),i=h(er,xy(r),D,t),o=V(Vy,r,t,0,D,Oc),c=o.a,l=o.b,u=o.c,f=V(Dy,r,l,t,0,j(c,D,u)),m=f.a,s=f.b,b=pn(s)?i:Z(i,s);return h(yy,e,a(Lm,Al(b),m),a(Et,b,m))}),hc=function(e){return{H:a(ee,function(r){return j(3*r,3*r+1,3*r+2)},a(jr,0,Yn(e)-1)),au:Al(dr(a(ee,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},Pm=function(e){switch(e.$){case 0:return Yt;case 1:var t=e.a,r=e.b,n=a(ee,_t,r);return h(En,t,Rr,hc(n));case 2:var t=e.a,r=e.b,n=a(ee,_t,r);return h(En,t,Rr,hc(n));case 3:var t=e.a,i=e.b;return h(En,t,Rr,i);case 4:var t=e.a,i=e.b;return h(En,t,function(o){return o.cy},i);case 5:var t=e.a,i=e.b;return h(En,t,function(o){return o.cy},i);case 6:var t=e.a,i=e.b;return h(En,t,function(o){return o.cy},i);case 7:var t=e.a,i=e.b;return h(En,t,function(o){return o.cy},i);case 8:return Yt;case 9:return Yt;default:return Yt}},i$=Pm(Cm),Mm={$:0},U=Mm,Qe=v(function(e,r){return{$:1,a:e,b:r}}),Ay={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},Fy=1029,Iy=function(e){return{$:5,a:e}},zm=function(e){var r=e;return Iy(r)},Ey=zm(Fy),By=1028,jy=zm(By),mr=T(function(e,r,n){return r===1?e?a(M,Ey,n):a(M,jy,n):n}),Tm={src:`
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
    `,attributes:{position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Vo=re(function(e,r,n,t){return a(Qe,r,Me(function(i,o,c,l,u,f,m,s){return V(Fe,h(mr,l,t,s),Tm,Ay,n,{b8:e,c,d:o,e:f,f:i,g:u})}))}),Fl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},km={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},en=re(function(e,r,n,t){return a(Qe,r,Me(function(i,o,c,l,u,f,m,s){return V(Fe,h(mr,l,t,s),km,Fl,n,{aO:e,c,d:o,e:f,f:i,g:u})}))}),Dm=v(function(e,r){return{$:3,a:e,b:r}}),Ry={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cx",sceneProperties:"f"}},Vm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cx",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ny=re(function(e,r,n,t){return a(Dm,n,Me(function(i,o,c,l,u,f,m,s){return V(Fe,s,Vm,Ry,t,{aO:e,c,d:o,cx:r,e:f,f:i,g:u})}))}),Il={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",sceneProperties:"f"}},Bt=function(e){var r=e;return r},Xi=fp,rn=qe(function(e,r,n,t,i){return a(Qe,n,Me(function(o,c,l,u,f,m,s,b){return V(Fe,h(mr,u,i,b),km,Il,t,{a7:a(Xi,Bt(r),e),c:l,d:c,e:m,f:o,g:f})}))}),Gy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",pointRadius:"cx",sceneProperties:"f"}},Hy=qe(function(e,r,n,t,i){return a(Dm,t,Me(function(o,c,l,u,f,m,s,b){return V(Fe,b,Vm,Gy,i,{a7:a(Xi,Bt(r),e),c:l,d:c,cx:n,e:m,f:o,g:f})}))}),Am={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},Fm={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Zt=re(function(e,r,n,t){return a(Qe,r,Me(function(i,o,c,l,u,f,m,s){var b=m.a,d=m.b;return V(Fe,h(mr,l,t,s),Fm,Am,n,{U:d,bG:b.bG,cn:b.cn,co:b.co,cp:b.cp,de:e,c,d:o,e:f,f:i,g:u})}))}),Im={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColorTexture:"df",normalMapTexture:"bh",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},Em={src:`
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
    `,attributes:{normal:"q",position:"cy",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Wy=Lr(function(e,r,n,t,i,o){return a(Qe,t,Me(function(c,l,u,f,m,s,b,d){var y=b.a,_=b.b;return V(Fe,h(mr,f,o,d),Em,Im,i,{U:_,bG:y.bG,cn:y.cn,co:y.co,cp:y.cp,df:e,c:u,d:l,bh:r,e:s,f:c,bn:n,g:m})}))}),Bm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cT",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallicTexture:"di",normalMapTexture:"bh",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},Uy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return a(Qe,u,Me(function(s,b,d,y,_,S,C,x){var z=C.a,W=C.b;return V(Fe,h(mr,y,m,x),Em,Bm,f,{cT:e,cV:r,cW:o,cX:t,U:W,bG:z.bG,cn:z.cn,co:z.co,cp:z.cp,di:i,c:d,d:b,bh:c,e:S,dC:n,f:s,bn:l,g:_})}))}}}}}}}}}}},jm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cS",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},Kt=Lr(function(e,r,n,t,i,o){return a(Qe,t,Me(function(c,l,u,f,m,s,b,d){var y=b.a,_=b.b;return V(Fe,h(mr,f,o,d),Fm,jm,i,{cS:e,U:_,bG:y.bG,cn:y.cn,co:y.co,cp:y.cp,dh:n,c:u,d:l,e:s,dB:r,f:c,g:m})}))}),Oy=function(e){return{$:0,a:e}},o$=v(function(e,r){return{$:1,a:e,b:r}}),tt=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),Jy=function(e){return P(Ia,Ea(e),Ba(e),ja(e),1)},El=P(Ia,0,0,0,0),ui=v(function(e,r){if(r.$){var t=r.a.E;return L(t,El)}else{var n=r.a;return L(e,Jy(n))}}),Rm=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(o$,L(i,El),a(tt,i,r))}else if(n.b.$){var i=n.b.a.E;return a(o$,a(ui,i,e),a(tt,i,r))}else{var t=n.a.a;return n.b.a,Oy(t)}}),qy=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xt=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Yy=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Zy=function(e){return a(br,e,1)},bc=a(br,0,0),va=v(function(e,r){if(r.$){var t=r.a.E;return L(t,bc)}else{var n=r.a;return L(e,Zy(n))}}),Nm=re(function(e,r,n,t){var i=P(Yy,e,r,n,t);if(i.a.$){var u=i.a.a.E;return P(Xt,L(u,El),a(va,u,r),a(va,u,n),a(tt,u,t))}else if(i.b.$){var u=i.b.a.E;return P(Xt,a(ui,u,e),L(u,bc),a(va,u,n),a(tt,u,t))}else if(i.c.$){var u=i.c.a.E;return P(Xt,a(ui,u,e),a(va,u,r),L(u,bc),a(tt,u,t))}else if(i.d.$){var u=i.d.a.E;return P(Xt,a(ui,u,e),a(va,u,r),a(va,u,n),L(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(qy,o,c,l)}}),Ky={src:`
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
    `,attributes:{},uniforms:{backlight:"cQ",colorTexture:"b8",sceneProperties:"f"}},Ao=qe(function(e,r,n,t,i){return a(Qe,n,Me(function(o,c,l,u,f,m,s,b){return V(Fe,h(mr,u,i,b),Tm,Ky,t,{cQ:Bt(r),b8:e,c:l,d:c,e:m,f:o,g:f})}))}),Gm={src:`
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
    `,attributes:{normal:"q",position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Xy=re(function(e,r,n,t){return a(Qe,r,Me(function(i,o,c,l,u,f,m,s){var b=m.a,d=m.b;return V(Fe,h(mr,l,t,s),Gm,Im,n,{U:d,bG:b.bG,cn:b.cn,co:b.co,cp:b.cp,df:e,c,d:o,bh:e,e:f,f:i,bn:0,g:u})}))}),Qy=xc(function(e,r,n,t,i,o,c,l,u){return a(Qe,c,Me(function(f,m,s,b,d,y,_,S){var C=_.a,x=_.b;return V(Fe,h(mr,b,u,S),Gm,Bm,l,{cT:e,cV:r,cW:o,cX:t,U:x,bG:C.bG,cn:C.cn,co:C.co,cp:C.cp,di:i,c:s,d:m,bh:e,e:y,dC:n,f,bn:0,g:d})}))}),yt=T(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),ex=function(e){var r=e;return h(yt,r.eO,r.eL,.5)},rx=function(e){var r=e;return h(yt,r.eP,r.eM,.5)},nx=function(e){var r=e;return h(yt,r.eQ,r.eN,.5)},ax=function(e){return h(Ke,ex(e),rx(e),nx(e))},$e=function(e){var r=tm(e),n=r.a,t=r.b,i=r.c;return{f4:Zi(ax(e)),gD:n/2,gE:t/2,gF:i/2}},Bl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return P(Vo,l,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return P(Vo,l,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return P(Vo,l,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var n=e.b.a;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return P(en,n,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return P(en,n,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return P(en,n,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return P(en,n,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return P(en,n,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return P(en,n,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return P(en,n,$e(i),c,t);case 8:var i=r.a,c=r.c;return P(en,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return P(en,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return P(Ny,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,f=e.c;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,t=r.d;return V(Ao,l,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(Ao,l,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(Ao,l,f,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,t=r.d;return V(rn,u,f,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return V(rn,u,f,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return V(rn,u,f,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return V(rn,u,f,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return V(rn,u,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return V(rn,u,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return V(rn,u,f,$e(i),c,t);case 8:var i=r.a,c=r.c;return V(rn,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return V(rn,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return V(Hy,u,f,o,$e(i),c)}}case 2:e.a;var m=e.b,ae=e.c,s=a(Rm,m,ae);if(s.$){var y=s.a,_=y.a;y.b;var S=s.b,C=S.a,x=S.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,d=r.d;return P(Xy,_,$e(i),c,d);case 7:var i=r.a,c=r.c,d=r.d;return tr(Wy,_,C,x,$e(i),c,d);case 8:return U;case 9:return U;default:return U}}else{var b=s.a;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,d=r.d;return P(Zt,b,$e(i),c,d);case 3:return U;case 4:var i=r.a,c=r.c,d=r.d;return P(Zt,b,$e(i),c,d);case 5:return U;case 6:var i=r.a,c=r.c,d=r.d;return P(Zt,b,$e(i),c,d);case 7:var i=r.a,c=r.c,d=r.d;return P(Zt,b,$e(i),c,d);case 8:return U;case 9:return U;default:return U}}default:e.a;var z=e.b,W=e.c,X=e.d,ae=e.e,te=P(Nm,z,W,X,ae);if(te.$){var de=te.a,pe=de.a,ze=de.b,Se=te.b,me=Se.a,Te=Se.b,F=te.c,I=F.a,E=F.b,B=te.d,C=B.a,x=B.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return as(Qy,pe,ze,me,Te,I,E,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return Uy(pe)(ze)(me)(Te)(I)(E)(C)(x)($e(i))(c)(t);case 8:return U;case 9:return U;default:return U}}else{var ie=te.a,ne=te.b,q=te.c;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,t=r.d;return tr(Kt,ie,ne,q,$e(i),c,t);case 3:return U;case 4:var i=r.a,c=r.c,t=r.d;return tr(Kt,ie,ne,q,$e(i),c,t);case 5:return U;case 6:var i=r.a,c=r.c,t=r.d;return tr(Kt,ie,ne,q,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return tr(Kt,ie,ne,q,$e(i),c,t);case 8:return U;case 9:return U;default:return U}}}}),Fo=function(e){var r=e;return r.io},Io=function(e){var r=e;return r.is},Eo=function(e){var r=e;return r.dV},tx=function(e){var r=e,n=Eo(r.dW),t=Io(r.dW),i=Fo(r.dW),o=Eo(r.dU),c=Io(r.dU),l=Fo(r.dU),u=Eo(r.dT),f=Io(r.dT),m=Fo(r.dT);return m*c*n+f*o*i+u*l*t-u*c*i-f*l*n-m*o*t>0},ix=function(e){var r=Zi(Fa(e)),n=Dr(oa(e)),t=Dr(ia(e)),i=Dr(ta(e));return{ek:tx(e),t:i.io,u:i.is,v:i.dV,w:t.io,x:t.is,y:t.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cD:1}},sa=v(function(e,r){return{$:5,a:e,b:r}}),Hm=v(function(e,r){var n=r;switch(n.$){case 0:return U;case 5:var t=n.a,i=n.b,o=a(Zf,t,e);return a(sa,o,i);case 1:return a(sa,e,n);case 3:return a(sa,e,n);case 2:return a(sa,e,n);default:return a(sa,e,n)}}),Wm=v(function(e,r){return a(Hm,ix(e),r)}),Qi=function(e){return{$:2,a:e}},ox=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dV:i*o.dV},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),cx=dp,lx=sp,c$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var m=e.a,s=e.b,b=e.c,d=lx(t),y=d.io,_=d.is,S=d.dV,C=d.ft,x=cx({ft:C,io:y*m,is:_*s,dV:S*b});return xt(r,n,x,i,o,c,l,u,f)}}}}}}}}}},_c=v(function(e,r){switch(r.$){case 0:return Mm;case 5:var n=r.a,t=r.b;return a(sa,n,a(_c,e,t));case 1:var i=r.a,o=r.b;return a(Qe,a(ox,e,i),a(c$,e,o));case 3:return r;case 2:var o=r.a;return Qi(a(c$,e,o));default:var c=r.a;return cm(a(ee,_c(e),c))}}),jl=v(function(e,r){var n=r;return a(_c,e,n)}),Rl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Um=7683,Om=7682,ux=h(Ll,{dd:0,dy:0,dS:15},{bA:or,bP:Da,bY:or,bZ:Um},{bA:or,bP:Da,bY:or,bZ:Om}),$x=h(Ll,{dd:0,dy:0,dS:15},{bA:or,bP:Da,bY:or,bZ:Om},{bA:or,bP:Da,bY:or,bZ:Um}),Nl=v(function(e,r){return e?a(M,$x,r):a(M,ux,r)}),vx={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},fx=function(e){if(e.$){var r=e.c;return Y(Me(function(n,t,i,o,c,l,u,f){return V(Fe,a(Nl,o,f),vx,Rl,r,{c:i,d:t,e:l,f:n,cE:u,g:c})}))}else return J},ki=function(e){var r=fx(e);if(r.$)return U;var n=r.a;return Qi(n)},mx=re(function(e,r,n,t){var i=a(Bl,n,Cm),o=function(){var m=L(e,r);return m.a?m.b?It($([i,ki(i$)])):i:m.b?ki(i$):U}(),c=fl(t),l=c.a,u=c.b,f=c.c;return a(Wm,vl(t),a(jl,j(l,u,f),o))}),sx=v(function(e,r){return P(mx,!0,!0,e,r)}),Jm=v(function(e,r){return{$:0,a:e,b:r}}),dx=function(e){var r=rl(e),n=r.hu,t=r.gA,i=r.fS;return h(Ft,n,t,i)},px=function(e){return a(Jm,0,mc(dx(e)))},gx=function(e){var r=e;return r.m},it=function(e){var r=e;return Mn(r)},hx=v(function(e,r){var n=r;return n/e}),l$=function(e){var r=e;return{io:Mn(r),is:Xn(r)}},bx=v(function(e,r){var n=e.cy,t=e.q;return a(M,{q:Ki(t),cy:fr(n)},r)}),_x=Ai(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=ja(l.cy),m=Ba(l.cy),s=Ea(l.cy),b=a(wa,e,s),d=a(nr,r,s),y=a(wa,n,m),_=a(nr,t,m),S=a(wa,i,f),C=a(nr,o,f),x=u;e=b,r=d,n=y,t=_,i=S,o=C,c=x;continue e}else return bm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),qm=v(function(e,r){var n=ja(e.cy),t=Ba(e.cy),i=Ea(e.cy);return wc(_x,i,i,t,t,n,n,r)}),yx=function(e){var r=h(J$,bx,D,Vl(e));if(r.b){var n=r.a,t=r.b,i=a(Et,r,Dl(e)),o=a(qm,n,t);return P(gm,o,e,i,0)}else return kl},u$=v(function(e,r){var n=e,t=r,i=n.dU,o=i,c=n.dT,l=c;return{io:t.io*l.io+t.is*o.io,is:t.io*l.is+t.is*o.is,dV:t.io*l.dV+t.is*o.dV}}),Di=function(e){var r=e;return Xn(r)},yc=function(e){return Kn(2*Pn*e)},xx=Rr,$$=xx({dm:ca,dT:pl,dU:hl}),Ym=function(){var e=72,r=a(hx,e,yc(1)),n=qn(1),t=_a(bl),i=_a(Gf),o=qn(1),c=a(Ge,.5,o),l=h(Ke,Br,Br,c),u=a(Ge,-.5,o),f=h(Ke,Br,Br,u),m=function(d){var y=a(Ge,d,r),_=_a(a(u$,$$,l$(y))),S=a(Ge,it(y),n),C=a(Ge,Di(y),n),x=h(Ke,S,C,c),z=h(Ke,S,C,u),W=a(Si,e,d+1),X=a(Ge,W,r),ae=_a(a(u$,$$,l$(X))),te=a(Ge,it(X),n),ie=a(Ge,Di(X),n),ne=h(Ke,te,ie,u),q=h(Ke,te,ie,c);return $([j({q:i,cy:f},{q:i,cy:ne},{q:i,cy:z}),j({q:_,cy:z},{q:ae,cy:ne},{q:ae,cy:q}),j({q:_,cy:z},{q:ae,cy:q},{q:_,cy:x}),j({q:t,cy:l},{q:t,cy:x},{q:t,cy:q})])},s=a(ee,m,a(jr,0,e-1)),b=hc(dr(s));return Tl(yx(b))}(),v$=Pm(Ym),wx=function(e){var r=e;return r.gm},Sx=function(e){var r=e;return r.dm},Cx=function(e){var r=wx(e),n=xl(r),t=n.a,i=n.b;return vn({dm:Sx(e),dT:t,dU:i,dW:r})},Lx=function(e){var r=e;return r.g5},Px=function(e){var r=e;return r.hs},Mx=re(function(e,r,n,t){var i=Cx(gx(t)),o=a(Bl,n,Ym),c=function(){var s=L(e,r);return s.a?s.b?It($([o,ki(v$)])):o:s.b?ki(v$):U}(),l=Px(t),u=l,f=Lx(t),m=f;return a(Wm,i,a(jl,j(u,u,m),c))}),zx=v(function(e,r){return P(Mx,!0,!0,e,r)}),f$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},m$={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Qa=function(e){var r=_t(e),n=r.a,t=r.b,i=r.c,o=La(n),c=La(t),l=La(i);return qr({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},Qt=Sm($([j({dJ:0},{dJ:1},{dJ:2})])),Tx=v(function(e,r){var n=_m(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var i=e.b.a;return a(Qe,t,Me(function(x,z,W,X,ae,te,ie,ne){return V(Fe,h(mr,X,0,ne),f$,Fl,Qt,{aO:i,c:W,d:z,e:te,f:x,bV:Qa(r),g:ae})}));case 1:if(e.b.$)return e.a,U;var o=e.b.a,c=e.c;return a(Qe,t,Me(function(x,z,W,X,ae,te,ie,ne){return V(Fe,h(mr,X,0,ne),f$,Il,Qt,{a7:a(Xi,Bt(c),o),c:W,d:z,e:te,f:x,bV:Qa(r),g:ae})}));case 2:e.a;var l=e.b,d=e.c,u=a(Rm,l,d);if(u.$)return U;var f=u.a;return a(Qe,t,Me(function(x,z,W,X,ae,te,ie,ne){var q=ie.a,de=ie.b;return V(Fe,h(mr,X,0,ne),m$,Am,Qt,{U:de,bG:q.bG,cn:q.cn,co:q.co,cp:q.cp,de:f,c:W,d:z,e:te,f:x,bV:Qa(r),g:ae})}));default:e.a;var m=e.b,s=e.c,b=e.d,d=e.e,y=P(Nm,m,s,b,d);if(y.$)return U;var _=y.a,S=y.b,C=y.c;return a(Qe,t,Me(function(x,z,W,X,ae,te,ie,ne){var q=ie.a,de=ie.b;return V(Fe,h(mr,X,0,ne),m$,jm,Qt,{cS:_,U:de,bG:q.bG,cn:q.cn,co:q.co,cp:q.cp,dh:C,c:W,d:z,e:te,dB:S,f:x,bV:Qa(r),g:ae})}))}}),kx=function(){var e=$([{bm:a(br,0,1)},{bm:a(br,1,1)},{bm:a(br,2,1)},{bm:a(br,0,-1)},{bm:a(br,1,-1)},{bm:a(br,2,-1)}]),r=$([j(0,1,2),j(3,5,4),j(3,4,1),j(3,1,0),j(4,5,2),j(4,2,1),j(5,3,0),j(5,0,2)]);return a(Et,e,r)}(),Dx={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",triangleVertexPositions:"bV",viewMatrix:"g"}},s$=function(e){return Qi(Me(function(r,n,t,i,o,c,l,u){return V(Fe,a(Nl,i,u),Dx,Rl,kx,{c:t,d:n,e:c,f:r,cE:l,bV:Qa(e),g:o})}))},Vx=re(function(e,r,n,t){var i=a(Tx,n,t),o=L(e,r);return o.a?o.b?It($([i,s$(t)])):i:o.b?s$(t):U}),Ax=v(function(e,r){return P(Vx,!0,!0,e,r)}),Fx=v(function(e,r){var n=Jn(r),t=Jn(e),i=On(r),o=On(e),c=Un(r),l=Un(e);return{eL:a(He,l,c),eM:a(He,o,i),eN:a(He,t,n),eO:a(Oe,l,c),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),Ix=function(e){var r=ml(e),n=r.a,t=r.b;return a(Fx,n,t)},d$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ex=v(function(e,r){return{$:1,a:e,b:r}}),Bx=Ex({d5:2,ei:0,eS:1}),p$=Bx($([L({es:0},{es:1})])),jx=v(function(e,r){var n=Ix(r),t=$e(n),i=ml(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var l=e.b.a;return a(Qe,t,Me(function(f,m,s,b,d,y,_,S){return V(Fe,S,d$,Fl,p$,{aO:l,eq:fr(c),er:fr(o),c:s,d:m,e:y,f,g:d})}));case 1:if(e.b.$)return U;var l=e.b.a,u=e.c;return a(Qe,t,Me(function(m,s,b,d,y,_,S,C){return V(Fe,C,d$,Il,p$,{a7:a(Xi,Bt(u),l),eq:fr(c),er:fr(o),c:b,d:s,e:_,f:m,g:y})}));case 2:return U;default:return U}}),Rx=v(function(e,r){return a(jx,e,r)}),g$=v(function(e,r){var n=e,t=r;return n/t}),Nx=qe(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(M,o,i);if(_e(r,e))return c;var l=e,u=r-1,f=n,m=t,s=c;e=l,r=u,n=f,t=m,i=s;continue e}}),h$=v(function(e,r){return e<1?D:V(Nx,0,e,e,r,D)}),Gx=v(function(e,r){var n=e.cy,t=e.q,i=e.O,o=i,c=o.a,l=o.b;return a(M,{q:Ki(t),cy:fr(n),O:a(br,c,l)},r)}),Hx=function(e){var r=h(J$,Gx,D,Vl(e));if(r.b){var n=r.a,t=r.b,i=a(Et,r,Dl(e)),o=a(qm,n,t);return P(hm,o,e,i,0)}else return kl},Zm=v(function(e,r){var n=e,t=r,i=Mn(t);return{io:i*Mn(n),is:i*Xn(n),dV:Xn(t)}}),Wx=function(){var e=qn(1),r=72,n=a(jr,0,r-1),t=a(h$,r,a(yt,Br,yc(1))),i=ct(r/2),o=a(jr,0,i-1),c=a(h$,i,a(yt,Ka(90),Ka(-90))),l=Al(dr(a(ee,function(m){return a(ee,function(s){return{q:_a(a(Zm,m,s)),cy:h(Ke,a(Ge,it(s)*it(m),e),a(Ge,it(s)*Di(m),e),a(Ge,Di(s),e)),O:L(a(g$,m,yc(1)),a(g$,a(at,Ka(90),s),Ka(180)))}},c)},t))),u=v(function(m,s){return m*(i+1)+s}),f=dr(a(ee,function(m){return dr(a(ee,function(s){var b=a(u,m+1,s),d=a(u,m,s),y=a(u,m+1,s+1),_=a(u,m,s+1);return $([j(_,y,b),j(_,b,d)])},o))},n));return Tl(Hx(a(Lm,l,f)))}(),Vi=72,ei=2*Vi,Ux=v(function(e,r){e:for(;;){var n=ei+1,t=a(Si,ei,2*e+3),i=a(Si,ei,2*e+2),o=2*e+1,c=2*e,l=ei,u=a(M,j(l,c,i),a(M,j(c,t,i),a(M,j(c,o,t),a(M,j(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Ox=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Jx=v(function(e,r){e:for(;;){var n=h(Ox,0,2*Pn,e/Vi),t={b$:n,cu:0,cB:1},i={b$:n,cu:1,cB:1},o=a(M,t,a(M,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),qx=function(){var e=a(Jx,Vi-1,$([{b$:0,cu:0,cB:0},{b$:0,cu:1,cB:0}])),r=a(Ux,Vi-1,D);return a(Et,e,r)}(),Yx={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cu",radiusScale:"cB"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},b$=function(e){return Qi(Me(function(r,n,t,i,o,c,l,u){return V(Fe,a(Nl,!0,u),Yx,Rl,qx,{aO:h(Ft,0,0,1),c:t,d:n,e:c,f:r,cE:l,g:o})}))},Zx=function(e){var r=xm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cD:1}},Kx=v(function(e,r){return a(Hm,Zx(e),r)}),Xx=re(function(e,r,n,t){var i=a(Bl,n,Wx),o=function(){var u=L(e,r);return u.a?u.b?It($([i,b$()])):i:u.b?b$():U}(),c=dl(t),l=c;return a(Kx,a(zi,ca,sl(t)),a(jl,j(l,l,l),o))}),Qx=v(function(e,r){return P(Xx,!0,!0,e,r)}),ew=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),rw=qe(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),nw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Jm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(ew,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return h(Wf,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return V(rw,n,t,i,o,c)}},aw=nw,Km=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(sx,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Ax,i,n)]);case 3:var i=e.a,t=e.b;return $([a(Qx,aw(i),t)]);case 2:var i=e.a,o=e.b;return $([a(zx,i,o)]);case 4:var c=e.a,l=e.b;return $([a(Rx,px(c),l)]);default:var u=e.a;return a(na,Km,u)}},tw=function(e){return a(na,Km,e)},iw=v(function(e,r){return uy({a1:S_(e.fO),f0:e.f0,a3:C_(.5),cY:e.cY,a5:L(Uu(Ie(e.dD.im)),Uu(Ie(e.dD.gH))),a9:tw(r),hI:!0,hZ:a(Zm,Kn(e.hY),Kn(e.h_)),fm:_l})}),_$=P(zt,255/255,255/255,255/255,1),ow=v(function(e,r){return a(iw,{fO:_$,f0:w_({d9:{io:a(So,"camera x",e),is:a(So,"camera y",e),dV:a(So,"camera z",e)},bb:{io:0,is:0,dV:0},fm:{io:0,is:1,dV:0}}),cY:e.cY,dD:e.dD,hY:-yr(135),h_:-yr(45)},$([a(ht,-4,a(Jf,Of(_$),j(40,40,1))),a(ht,-.5,i_(e))]))}),cw=P(g1,ow,S1,w1,h1);const lw={Main:{init:cw(a(Q,function(e){return ur({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return ur({a4:c,cY:o,gp:i,g3:t,hq:n,dD:r,il:e})},a(K,"clock",Ue))},a(K,"devicePixelRatio",Ue))},a(K,"dt",Ue))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(s){return ur({fJ:s,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",bi(Ma)))},a(K,"left",Pe))},a(K,"pressedKeys",bi(Ma)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return ur({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",Ue))},a(K,"y",Ue))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return ur({gH:n,im:r})},a(K,"height",Ue))},a(K,"width",Ue))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return ur({gh:r,gi:e})},a(K,"deltaX",Ue))},a(K,"deltaY",Ue)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},uw=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),t=d=>["ShiftLeft","ShiftRight"].includes(d.code),i=d=>d.code=="ArrowLeft",o=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,f=d=>d.button==2;function m(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function s(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(oe.keyboard.downs.push(d.code),oe.keyboard.pressedKeys.push(d.code),r(d)&&(oe.keyboard.control=!0),n(d)&&(oe.keyboard.alt=!0),t(d)&&(console.log("yo"),oe.keyboard.shift=!0),i(d)&&(oe.keyboard.left=!0),o(d)&&(oe.keyboard.right=!0),c(d)&&(oe.keyboard.up=!0),l(d)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",d=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(y=>y!=d.code),r(d)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(d)&&(oe.keyboard.alt=!1),t(d)&&(oe.keyboard.shift=!1),i(d)&&(oe.keyboard.left=!1),o(d)&&(oe.keyboard.right=!1),c(d)&&(oe.keyboard.up=!1),l(d)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{oe.pointer.x=-.5*oe.screen.width+d.pageX,oe.pointer.y=.5*oe.screen.height-d.pageY,u(d)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(d)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+d.pageX,oe.pointer.y=.5*oe.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(d)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(d)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{oe.wheel.deltaX=d.deltaX,oe.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{m(oe)}),window.addEventListener("focus",d=>{m(oe)}),window.addEventListener("visibilitychange",d=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(d){const y=d/1e3,_=y-oe.clock;_<.009||(oe.dt=_,oe.clock=y,e.ports.tick.send(oe),s(oe)),window.requestAnimationFrame(b)}},$w=lw.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});uw($w);
