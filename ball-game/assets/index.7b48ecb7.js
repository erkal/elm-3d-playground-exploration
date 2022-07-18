const bs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};bs();function an(e,r,n){return n.a=e,n.f=r,n}function $(e){return an(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return an(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function W(e){return an(4,e,function(r){return function(n){return function(a){return function(o){return e(r,n,a,o)}}}})}function _e(e){return an(5,e,function(r){return function(n){return function(a){return function(o){return function(i){return e(r,n,a,o,i)}}}}})}function lr(e){return an(6,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return e(r,n,a,o,i,c)}}}}}})}function Nt(e){return an(7,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return e(r,n,a,o,i,c,l)}}}}}}})}function oe(e){return an(8,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,o,i,c,l,u)}}}}}}}})}function hi(e){return an(9,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,o,i,c,l,u,v)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function f(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function S(e,r,n,a,o){return e.a===4?e.f(r,n,a,o):e(r)(n)(a)(o)}function L(e,r,n,a,o,i){return e.a===5?e.f(r,n,a,o,i):e(r)(n)(a)(o)(i)}function Ge(e,r,n,a,o,i,c){return e.a===6?e.f(r,n,a,o,i,c):e(r)(n)(a)(o)(i)(c)}function _i(e,r,n,a,o,i,c,l){return e.a===7?e.f(r,n,a,o,i,c,l):e(r)(n)(a)(o)(i)(c)(l)}function Gt(e,r,n,a,o,i,c,l,u){return e.a===8?e.f(r,n,a,o,i,c,l,u):e(r)(n)(a)(o)(i)(c)(l)(u)}function hs(e,r,n,a,o,i,c,l,u,v){return e.a===9?e.f(r,n,a,o,i,c,l,u,v):e(r)(n)(a)(o)(i)(c)(l)(u)(v)}var _s=[];function ys(e){return[e]}function ws(e){return e.length}var xs=x(function(e,r,n){for(var a=new Array(e),o=0;o<e;o++)a[o]=n(r+o);return a}),Cs=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),Ps=$(function(e,r){return r[e]}),Ss=x(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=n[i];return o[e]=r,o}),Ls=$(function(e,r){for(var n=r.length,a=new Array(n+1),o=0;o<n;o++)a[o]=r[o];return a[n]=e,a}),ks=x(function(e,r,n){for(var a=n.length,o=0;o<a;o++)r=t(e,n[o],r);return r}),zs=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r}),Ts=$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=e(r[o]);return a});x(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=t(e,r+i,n[i]);return o});var Ms=x(function(e,r,n){return n.slice(e,r)}),Ds=x(function(e,r,n){var a=r.length,o=e-a;o>n.length&&(o=n.length);for(var i=a+o,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<o;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+js()),r});function js(e){return"<internals>"}function ea(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ve(e,r){for(var n,a=[],o=qo(e,r,0,a);o&&(n=a.pop());o=qo(n.a,n.b,0,a));return o}function qo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ea(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$<0&&(e=el(e),r=el(r));for(var o in e)if(!qo(e[o],r[o],n+1,a))return!1;return!0}$(ve);var As=$(function(e,r){return!ve(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Bs=$(function(e,r){var n=I(e,r);return n<0?Tu:n?Fm:zu}),Fa=0;function w(e,r){return{a:e,b:r}}function T(e,r,n){return{a:e,b:r,c:n}}function V(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Cr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Cr(e.a,r);return n}var C={$:0};function Cr(e,r){return{$:1,a:e,b:r}}var Fs=$(Cr);function g(e){for(var r=C,n=e.length;n--;)r=Cr(e[n],r);return r}function Ht(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Vs=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return g(a)});W(function(e,r,n,a){for(var o=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)o.push(f(e,r.a,n.a,a.a));return g(o)});_e(function(e,r,n,a,o){for(var i=[];r.b&&n.b&&a.b&&o.b;r=r.b,n=n.b,a=a.b,o=o.b)i.push(S(e,r.a,n.a,a.a,o.a));return g(i)});lr(function(e,r,n,a,o,i){for(var c=[];r.b&&n.b&&a.b&&o.b&&i.b;r=r.b,n=n.b,a=a.b,o=o.b,i=i.b)c.push(L(e,r.a,n.a,a.a,o.a,i.a));return g(c)});var Ws=$(function(e,r){return g(Ht(r).sort(function(n,a){return I(e(n),e(a))}))}),Es=$(function(e,r){return g(Ht(r).sort(function(n,a){var o=t(e,n,a);return o===zu?0:o===Tu?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var qs=$(Math.pow);$(function(e,r){return r%e});var Rs=$(function(e,r){var n=r%e;return e===0?ea(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ns=Math.PI,Gs=Math.cos,Hs=Math.sin,Is=Math.tan,Us=Math.acos,Js=Math.atan,Os=$(Math.atan2);function Ys(e){return e}function Xs(e){return e===1/0||e===-1/0}var Zs=Math.ceil,Qs=Math.floor,Ks=Math.round,ef=Math.sqrt,qc=Math.log,rf=isNaN;function nf(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var af=$(function(e,r){return e+r});function tf(e){var r=e.charCodeAt(0);return isNaN(r)?E:Z(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}$(function(e,r){return e+r});function of(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;){var i=r.charCodeAt(o);if(55296<=i&&i<=56319){a[o]=e(r[o]+r[o+1]),o+=2;continue}a[o]=e(r[o]),o++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,o=0;o<a;){var i=r[o],c=r.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=r[o],o++),e(i)&&n.push(i)}return n.join("")});function cf(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var o=e.charCodeAt(a);55296<=o&&o<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,o=0;o<a;){var i=n[o],c=n.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=n[o],o++),r=t(e,i,r)}return r});var lf=x(function(e,r,n){for(var a=n.length;a--;){var o=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,o=n[a]+o),r=t(e,o,r)}return r}),uf=$(function(e,r){return r.split(e)}),$f=$(function(e,r){return r.join(e)}),vf=x(function(e,r,n){return n.slice(e,r)});function sf(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var ff=$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),df=$(function(e,r){return r.indexOf(e)>-1}),mf=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var gf=$(function(e,r){var n=e.length;if(n<1)return C;for(var a=0,o=[];(a=r.indexOf(e,a))>-1;)o.push(a),a=a+n;return g(o)});function tu(e){return e+""}function pf(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,o=a;o<e.length;++o){var i=e.charCodeAt(o);if(i<48||57<i)return E;r=10*r+i-48}return o==a?E:Z(n==45?-r:r)}function bf(e){if(e.length===0||/[\sxbo]/.test(e))return E;var r=+e;return r===r?Z(r):E}function hf(e){return Ht(e).join("")}function _f(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function yf(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function wf(e){return{$:0,a:e}}function xf(e){return{$:1,a:e}}function It(e){return{$:2,b:e}}var Cf=It(function(e){return typeof e!="number"?or("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?se(e):or("an INT",e)}),Pf=It(function(e){return typeof e=="boolean"?se(e):or("a BOOL",e)}),Sf=It(function(e){return typeof e=="number"?se(e):or("a FLOAT",e)}),Lf=It(function(e){return typeof e=="string"?se(e):e instanceof String?se(e+""):or("a STRING",e)});function kf(e){return{$:3,b:e}}function zf(e){return{$:5,c:e}}var Tf=$(function(e,r){return{$:6,d:e,b:r}}),Mf=$(function(e,r){return{$:7,e,b:r}});function tn(e,r){return{$:9,f:e,g:r}}var Df=$(function(e,r){return{$:10,b:r,h:e}});function jf(e){return{$:11,g:e}}var Af=$(function(e,r){return tn(e,[r])}),Bf=x(function(e,r,n){return tn(e,[r,n])});W(function(e,r,n,a){return tn(e,[r,n,a])});_e(function(e,r,n,a,o){return tn(e,[r,n,a,o])});lr(function(e,r,n,a,o,i){return tn(e,[r,n,a,o,i])});Nt(function(e,r,n,a,o,i,c){return tn(e,[r,n,a,o,i,c])});oe(function(e,r,n,a,o,i,c,l){return tn(e,[r,n,a,o,i,c,l])});hi(function(e,r,n,a,o,i,c,l,u){return tn(e,[r,n,a,o,i,c,l,u])});var Ff=$(function(e,r){try{var n=JSON.parse(r);return tr(e,n)}catch(a){return Fe(t(Di,"This is not valid JSON! "+a.message,r))}}),ou=$(function(e,r){return tr(e,r)});function tr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?se(e.c):or("null",r);case 3:return Ka(r)?Rc(e.b,r,g):or("a LIST",r);case 4:return Ka(r)?Rc(e.b,r,Vf):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var v=tr(e.b,r[n]);return ur(v)?v:Fe(t(rl,n,v.a));case 7:var a=e.e;if(!Ka(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=tr(e.b,r[a]);return ur(v)?v:Fe(t(Mu,a,v.a));case 8:if(typeof r!="object"||r===null||Ka(r))return or("an OBJECT",r);var o=C;for(var i in r)if(r.hasOwnProperty(i)){var v=tr(e.b,r[i]);if(!ur(v))return Fe(t(rl,i,v.a));o=Cr(w(i,v.a),o)}return se(ie(o));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=tr(l[u],r);if(!ur(v))return v;c=c(v.a)}return se(c);case 10:var v=tr(e.b,r);return ur(v)?tr(e.h(v.a),r):v;case 11:for(var s=C,m=e.g;m.b;m=m.b){var v=tr(m.a,r);if(ur(v))return v;s=Cr(v.a,s)}return Fe(Vm(ie(s)));case 1:return Fe(t(Di,e.a,r));case 0:return se(e.a)}}function Rc(e,r,n){for(var a=r.length,o=new Array(a),i=0;i<a;i++){var c=tr(e,r[i]);if(!ur(c))return Fe(t(Mu,i,c.a));o[i]=c.a}return se(n(o))}function Ka(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Vf(e){return t(Vu,e.length,function(r){return e[r]})}function or(e,r){return Fe(t(Di,"Expecting "+e,r))}function Wn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Wn(e.b,r.b);case 6:return e.d===r.d&&Wn(e.b,r.b);case 7:return e.e===r.e&&Wn(e.b,r.b);case 9:return e.f===r.f&&Nc(e.g,r.g);case 10:return e.h===r.h&&Wn(e.b,r.b);case 11:return Nc(e.g,r.g)}}function Nc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Wn(e[a],r[a]))return!1;return!0}var Wf=$(function(e,r){return JSON.stringify(r,null,e)+""});function Ut(e){return e}function Ef(){return[]}function qf(){return{}}var Rf=x(function(e,r,n){return n[e]=r,n});function Nf(e){return $(function(r,n){return n.push(e(r)),n})}var Gf=null;function Cn(e){return{$:0,a:e}}function Hf(e){return{$:1,a:e}}function Jr(e){return{$:2,b:e,c:null}}var Ro=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function If(e){return{$:5,b:e}}var Uf=0;function yi(e){var r={$:0,e:Uf++,f:e,g:null,h:[]};return wi(r),r}function iu(e){return Jr(function(r){r(Cn(yi(e)))})}function cu(e,r){e.h.push(r),wi(e)}var Jf=$(function(e,r){return Jr(function(n){cu(e,r),n(Cn(Fa))})}),bo=!1,Gc=[];function wi(e){if(Gc.push(e),!bo){for(bo=!0;e=Gc.shift();)Of(e);bo=!1}}function Of(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,wi(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}W(function(e,r,n,a){return xi(r,a,e.fu,e.gi,e.f9,function(){return function(){}})});function xi(e,r,n,a,o,i){var c=t(ou,e,r?r.flags:void 0);ur(c)||ea(2);var l={},u=n(c.a),v=u.a,s=i(p,v),m=Yf(l,p);function p(d,b){var h=t(a,d,v);s(v=h.a,b),Ic(l,h.b,o(v))}return Ic(l,u.b,o(v)),m?{ports:m}:{}}var _r={};function Yf(e,r){var n;for(var a in _r){var o=_r[a];o.a&&(n=n||{},n[a]=o.a(a,r)),e[a]=Zf(o,r)}return n}function Xf(e,r,n,a,o){return{b:e,c:r,d:n,e:a,f:o}}function Zf(e,r){var n={g:r,h:void 0},a=e.c,o=e.d,i=e.e,c=e.f;function l(u){return t(Ro,l,If(function(v){var s=v.a;return v.$===0?f(o,n,s,u):i&&c?S(a,n,s.i,s.j,u):f(a,n,i?s.i:s.j,u)}))}return n.h=yi(t(Ro,l,e.b))}var Qf=$(function(e,r){return Jr(function(n){e.g(r),n(Cn(Fa))})});$(function(e,r){return t(Jf,e.h,{$:0,a:r})});function lu(e){return function(r){return{$:1,k:e,l:r}}}function Kf(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Hc=[],ho=!1;function Ic(e,r,n){if(Hc.push({p:e,q:r,r:n}),!ho){ho=!0;for(var a;a=Hc.shift();)ed(a.p,a.q,a.r);ho=!1}}function ed(e,r,n){var a={};xt(!0,r,a,null),xt(!1,n,a,null);for(var o in e)cu(e[o],{$:"fx",a:a[o]||{i:C,j:C}})}function xt(e,r,n,a){switch(r.$){case 1:var o=r.k,i=rd(e,o,a,r.l);n[o]=nd(e,i,n[o]);return;case 2:for(var c=r.m;c.b;c=c.b)xt(e,c.a,n,a);return;case 3:xt(e,r.o,n,{s:r.n,t:a});return}}function rd(e,r,n,a){function o(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?_r[r].e:_r[r].f;return t(i,o,a)}function nd(e,r,n){return n=n||{i:C,j:C},e?n.i=Cr(r,n.i):n.j=Cr(r,n.j),n}function ad(e){_r[e]&&ea(3)}$(function(e,r){return r});function td(e,r){return ad(e),_r[e]={f:od,u:r,a:id},lu(e)}var od=$(function(e,r){return function(n){return e(r(n))}});function id(e,r){var n=C,a=_r[e].u,o=Cn(null);_r[e].b=o,_r[e].c=x(function(c,l,u){return n=l,o});function i(c){var l=t(ou,a,c);ur(l)||ea(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Ct,Vr=typeof document!="undefined"?document:{};function Ci(e,r){e.appendChild(r)}W(function(e,r,n,a){var o=a.node;return o.parentNode.replaceChild(Kr(e,function(){}),o),{}});function No(e){return{$:0,a:e}}var uu=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,o.push(c)}return i+=o.length,{$:1,c:r,d:Pi(n),e:o,f:e,b:i}})}),Or=uu(void 0),cd=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,o.push(c)}return i+=o.length,{$:2,c:r,d:Pi(n),e:o,f:e,b:i}})}),ld=cd(void 0);function ud(e,r,n,a){return{$:3,d:Pi(e),g:r,h:n,i:a}}var $d=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function on(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return on([e,r],function(){return e(r)})});x(function(e,r,n){return on([e,r,n],function(){return t(e,r,n)})});W(function(e,r,n,a){return on([e,r,n,a],function(){return f(e,r,n,a)})});_e(function(e,r,n,a,o){return on([e,r,n,a,o],function(){return S(e,r,n,a,o)})});lr(function(e,r,n,a,o,i){return on([e,r,n,a,o,i],function(){return L(e,r,n,a,o,i)})});Nt(function(e,r,n,a,o,i,c){return on([e,r,n,a,o,i,c],function(){return Ge(e,r,n,a,o,i,c)})});oe(function(e,r,n,a,o,i,c,l){return on([e,r,n,a,o,i,c,l],function(){return _i(e,r,n,a,o,i,c,l)})});hi(function(e,r,n,a,o,i,c,l,u){return on([e,r,n,a,o,i,c,l,u],function(){return Gt(e,r,n,a,o,i,c,l,u)})});var $u=$(function(e,r){return{$:"a0",n:e,o:r}}),vd=$(function(e,r){return{$:"a1",n:e,o:r}}),vu=$(function(e,r){return{$:"a2",n:e,o:r}}),Tr=$(function(e,r){return{$:"a3",n:e,o:r}}),sd=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function fd(e){return e=="script"?"p":e}function dd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?t($u,r.n,md(e,r.o)):r});function md(e,r){var n=Ei(r);return{$:r.$,a:n?f(Xt,n<3?gd:pd,$e(e),r.a):t(Sa,e,r.a)}}var gd=$(function(e,r){return w(e(r.a),r.b)}),pd=$(function(e,r){return{as:e(r.as),c4:r.c4,cW:r.cW}});function Pi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,o=n.n,i=n.o;if(a==="a2"){o==="className"?Uc(r,o,i):r[o]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&o==="class"?Uc(c,o,i):c[o]=i}return r}function Uc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Kr(e,r){var n=e.$;if(n===5)return Kr(e.k||(e.k=e.m()),r);if(n===0)return Vr.createTextNode(e.a);if(n===4){for(var a=e.k,o=e.j;a.$===4;)typeof o!="object"?o=[o,a.j]:o.push(a.j),a=a.k;var i={j:o,p:r},c=Kr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Go(c,r,e.d),c}var c=e.f?Vr.createElementNS(e.f,e.c):Vr.createElement(e.c);Ct&&e.c=="a"&&c.addEventListener("click",Ct(c)),Go(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ci(c,Kr(n===1?l[u]:l[u].b,r));return c}function Go(e,r,n){for(var a in n){var o=n[a];a==="a1"?bd(e,o):a==="a0"?yd(e,r,o):a==="a3"?hd(e,o):a==="a4"?_d(e,o):(a!=="value"&&a!=="checked"||e[a]!==o)&&(e[a]=o)}}function bd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function hd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function _d(e,r){for(var n in r){var a=r[n],o=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(o,n,i):e.removeAttributeNS(o,n)}}function yd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var o in n){var i=n[o],c=a[o];if(!i){e.removeEventListener(o,c),a[o]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(o,c)}c=wd(r,i),e.addEventListener(o,c,Si&&{passive:Ei(i)<2}),a[o]=c}}var Si;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Si=!0}}))}catch{}function wd(e,r){function n(a){var o=n.q,i=tr(o.a,a);if(!!ur(i)){for(var c=Ei(o),l=i.a,u=c?c<3?l.a:l.as:l,v=c==1?l.b:c==3&&l.c4,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),e),m,p;m=s.j;){if(typeof m=="function")u=m(u);else for(var p=m.length;p--;)u=m[p](u);s=s.p}s(u,v)}}return n.q=r,n}function xd(e,r){return e.$==r.$&&Wn(e.a,r.a)}function su(e,r){var n=[];return $r(e,r,n,0),n}function Be(e,r,n,a){var o={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(o),o}function $r(e,r,n,a){if(e!==r){var o=e.$,i=r.$;if(o!==i)if(o===1&&i===2)r=Md(r),i=1;else{Be(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];$r(e.k,r.k,s,0),s.length>0&&Be(n,1,a,s);return;case 4:for(var m=e.j,p=r.j,d=!1,b=e.k;b.$===4;)d=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var h=r.k;h.$===4;)d=!0,typeof p!="object"?p=[p,h.j]:p.push(h.j),h=h.k;if(d&&m.length!==p.length){Be(n,0,a,r);return}(d?!Cd(m,p):m!==p)&&Be(n,2,a,p),$r(b,h,n,a+1);return;case 0:e.a!==r.a&&Be(n,3,a,r.a);return;case 1:Jc(e,r,n,a,Pd);return;case 2:Jc(e,r,n,a,Sd);return;case 3:if(e.h!==r.h){Be(n,0,a,r);return}var y=Li(e.d,r.d);y&&Be(n,4,a,y);var P=r.i(e.g,r.g);P&&Be(n,5,a,P);return}}}function Cd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Jc(e,r,n,a,o){if(e.c!==r.c||e.f!==r.f){Be(n,0,a,r);return}var i=Li(e.d,r.d);i&&Be(n,4,a,i),o(e,r,n,a)}function Li(e,r,n){var a;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=Li(e[o],r[o]||{},o);i&&(a=a||{},a[o]=i);continue}if(!(o in r)){a=a||{},a[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var c=e[o],l=r[o];c===l&&o!=="value"&&o!=="checked"||n==="a0"&&xd(c,l)||(a=a||{},a[o]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Pd(e,r,n,a){var o=e.e,i=r.e,c=o.length,l=i.length;c>l?Be(n,6,a,{v:l,i:c-l}):c<l&&Be(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=o[v];$r(s,i[v],n,++a),a+=s.b||0}}function Sd(e,r,n,a){for(var o=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,p=0,d=a;m<v&&p<s;){var b=l[m],h=u[p],y=b.a,P=h.a,_=b.b,k=h.b,A=void 0,H=void 0;if(y===P){d++,$r(_,k,o,d),d+=_.b||0,m++,p++;continue}var G=l[m+1],N=u[p+1];if(G){var U=G.a,J=G.b;H=P===U}if(N){var q=N.a,Q=N.b;A=y===q}if(A&&H){d++,$r(_,Q,o,d),va(i,o,y,k,p,c),d+=_.b||0,d++,sa(i,o,y,J,d),d+=J.b||0,m+=2,p+=2;continue}if(A){d++,va(i,o,P,k,p,c),$r(_,Q,o,d),d+=_.b||0,m+=1,p+=2;continue}if(H){d++,sa(i,o,y,_,d),d+=_.b||0,d++,$r(J,k,o,d),d+=J.b||0,m+=2,p+=1;continue}if(G&&U===q){d++,sa(i,o,y,_,d),va(i,o,P,k,p,c),d+=_.b||0,d++,$r(J,Q,o,d),d+=J.b||0,m+=2,p+=2;continue}break}for(;m<v;){d++;var b=l[m],_=b.b;sa(i,o,b.a,_,d),d+=_.b||0,m++}for(;p<s;){var ae=ae||[],h=u[p];va(i,o,h.a,h.b,void 0,ae),p++}(o.length>0||c.length>0||ae)&&Be(n,8,a,{w:o,x:c,y:ae})}var fu="_elmW6BL";function va(e,r,n,a,o,i){var c=e[n];if(!c){c={c:0,z:a,r:o,s:void 0},i.push({r:o,A:c}),e[n]=c;return}if(c.c===1){i.push({r:o,A:c}),c.c=2;var l=[];$r(c.z,a,l,c.r),c.r=o,c.s.s={w:l,A:c};return}va(e,r,n+fu,a,o,i)}function sa(e,r,n,a,o){var i=e[n];if(!i){var c=Be(r,9,o,void 0);e[n]={c:1,z:a,r:o,s:c};return}if(i.c===0){i.c=2;var l=[];$r(a,i.z,l,o),Be(r,9,o,{w:l,A:i});return}sa(e,r,n+fu,a,o)}function du(e,r,n,a){fa(e,r,n,0,0,r.b,a)}function fa(e,r,n,a,o,i,c){for(var l=n[a],u=l.r;u===o;){var v=l.$;if(v===1)du(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fa(e,r,s,0,o,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&fa(e,r,s,0,o,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var d=r.k;d.$===4;)d=d.k;return fa(e,d,n,a,o+1,i,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,y=0;y<b.length;y++){o++;var P=p===1?b[y]:b[y].b,_=o+(P.b||0);if(o<=u&&u<=_&&(a=fa(h[y],P,n,a,o,_,c),!(l=n[a])||(u=l.r)>i))return a;o=_}return a}function mu(e,r,n,a){return n.length===0?e:(du(e,r,n,a),Pt(e,n))}function Pt(e,r){for(var n=0;n<r.length;n++){var a=r[n],o=a.t,i=Ld(o,a);o===e&&(e=i)}return e}function Ld(e,r){switch(r.$){case 0:return kd(e,r.s,r.u);case 4:return Go(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Pt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,o=e.childNodes[a];a<n.length;a++)e.insertBefore(Kr(n[a],r.u),o);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Pt(e,i.w),e;case 8:return zd(e,r);case 5:return r.s(e);default:ea(10)}}function kd(e,r,n){var a=e.parentNode,o=Kr(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),a&&o!==e&&a.replaceChild(o,e),o}function zd(e,r){var n=r.s,a=Td(n.y,r);e=Pt(e,n.w);for(var o=n.x,i=0;i<o.length;i++){var c=o[i],l=c.A,u=l.c===2?l.s:Kr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ci(e,a),e}function Td(e,r){if(!!e){for(var n=Vr.createDocumentFragment(),a=0;a<e.length;a++){var o=e[a],i=o.A;Ci(n,i.c===2?i.s:Kr(i.z,r.u))}return n}}function ki(e){if(e.nodeType===3)return No(e.textContent);if(e.nodeType!==1)return No("");for(var r=C,n=e.attributes,a=n.length;a--;){var o=n[a],i=o.name,c=o.value;r=Cr(t(Tr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=C,v=e.childNodes,a=v.length;a--;)u=Cr(ki(v[a]),u);return f(Or,l,r,u)}function Md(e){for(var r=e.e,n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Dd=W(function(e,r,n,a){return xi(r,a,e.fu,e.gi,e.f9,function(o,i){var c=e.gl,l=a.node,u=ki(l);return gu(i,function(v){var s=c(v),m=su(u,s);l=mu(l,u,m,o),u=s})})});W(function(e,r,n,a){return xi(r,a,e.fu,e.gi,e.f9,function(o,i){var c=e.c2&&e.c2(o),l=e.gl,u=Vr.title,v=Vr.body,s=ki(v);return gu(i,function(m){Ct=c;var p=l(m),d=Or("body")(C)(p.eX),b=su(s,d);v=mu(v,s,b,o),s=d,Ct=0,u!==p.gd&&(Vr.title=u=p.gd)})})});var St=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function gu(e,r){r(e);var n=0;function a(){n=n===1?0:(St(a),r(e),1)}return function(o,i){e=o,i?(r(e),n===2&&(n=1)):(n===0&&St(a),n=2)}}$(function(e,r){return t(Ni,qi,Jr(function(){r&&history.go(r),e()}))});$(function(e,r){return t(Ni,qi,Jr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return t(Ni,qi,Jr(function(){history.replaceState({},"",r),e()}))});var jd={addEventListener:function(){},removeEventListener:function(){}},Ad=typeof window!="undefined"?window:jd;x(function(e,r,n){return iu(Jr(function(a){function o(i){yi(n(i))}return e.addEventListener(r,o,Si&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});$(function(e,r){var n=tr(e,r);return ur(n)?Z(n.a):E});function pu(e,r){return Jr(function(n){St(function(){var a=document.getElementById(e);n(a?Cn(r(a)):Hf(eg(e)))})})}function Bd(e){return Jr(function(r){St(function(){r(Cn(e()))})})}$(function(e,r){return pu(r,function(n){return n[e](),Fa})});$(function(e,r){return Bd(function(){return Ad.scroll(e,r),Fa})});x(function(e,r,n){return pu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Fa})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Fd=$(function(e,r){var n="g";e.fI&&(n+="m"),e.eY&&(n+="i");try{return Z(new RegExp(r,n))}catch{return E}});$(function(e,r){return r.match(e)!==null});var Vd=x(function(e,r,n){for(var a=[],o=0,i=n,c=r.lastIndex,l=-1,u;o++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?Z(m):E}a.push(S(l$,u[0],u.index,o,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});W(function(e,r,n,a){var o=0;function i(c){if(o++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Z(v):E}return n(S(l$,c,arguments[arguments.length-2],o,g(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,o=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;o.push(a.slice(i,l.index)),i=r.lastIndex}return o.push(a.slice(i)),r.lastIndex=c,g(o)});var Oc=0;function Pa(e,r){for(;r.b;r=r.b)e(r.a)}function zi(e){for(var r=0;e.b;e=e.b)r++;return r}var Wd=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Ed=_e(function(e,r,n,a,o){return{$:0,a:e,b:r,c:n,d:a,e:o}}),qd=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Rd=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Nd=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Gd=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Hd=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Id=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Ud=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Jd=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Od=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Yd=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Xd=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Zd=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},bu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},hu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Qd=function(e){e.gl.disable(e.gl.CULL_FACE)},Kd=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},em=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},rm=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Yc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],nm=[Yd,Xd,Zd,bu,hu,Qd,Kd,em,rm];function Xc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function am(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function _u(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function tm(e,r,n,a){for(var o=n.a.dv,i=[],c=0;c<o;c++)i.push(String.fromCharCode(97+c));function l(d,b,h,y,P){var _;if(o===1)for(_=0;_<b;_++)d[h++]=b===1?y[P]:y[P][_];else i.forEach(function(k){for(_=0;_<b;_++)d[h++]=b===1?y[k][P]:y[k][P][_]})}var u=_u(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*o,m=new u.type(zi(n.b)*s);Pa(function(d){l(m,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=s},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),p}function om(e,r){if(r.a.dF>0){var n=e.createBuffer(),a=im(r.c,r.a.dF);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dv*zi(r.b),indexBuffer:null,buffers:{}}}function im(e,r){var n=new Uint32Array(zi(e)*r),a=0,o;return Pa(function(i){if(r===1)n[a++]=i;else for(o=0;o<r;o++)n[a++]=i[String.fromCharCode(97+o)]},e),n}function Zc(e,r){return e+"#"+r}var yu=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),bu(n),hu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function o(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Zc(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Oc++,v||(v=Xc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Oc++,s||(s=Xc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=am(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=cm(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var d=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(b)}c=Zc(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),lm(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=om(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[d.name]===void 0&&(h.buffers[d.name]=tm(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[d.name]);var y=_u(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var P=y.size*4,_=P*y.arraySize,k=0;k<y.arraySize;k++)a.enableVertexAttribArray(b+k),a.vertexAttribPointer(b+k,y.size,y.baseType,!1,_,P*k)}for(n.toggle=!n.toggle,Pa(Q1(n),i.a),u=0;u<Yc.length;u++){var A=n[Yc[u]];A.toggle!==n.toggle&&A.enabled&&(nm[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.ee,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ee,0,h.numIndices)}}return Pa(o,e.g),r});function cm(e,r,n,a){var o=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,b){var h=b.name,y=e.getUniformLocation(d,h);switch(b.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(y,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(y,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var P=c++;return function(_){e.activeTexture(e.TEXTURE0+P);var k=l.textures.get(_);k||(k=_.e4(e),l.textures.set(_,k)),e.bindTexture(e.TEXTURE_2D,k),i[h]!==_&&(e.uniform1i(y,P),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var p=e.getActiveUniform(o,m);v[a[p.name]||p.name]=u(o,p)}return v}function lm(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var um=x(function(e,r,n){return ud(r,{g:n,f:{},h:e},gm,pm)}),$m=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),vm=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),sm=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),fm=$(function(e,r){e.contextAttributes.antialias=!0}),dm=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),mm=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function gm(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Pa(function(o){return t(Z1,r,o)},e.h);var n=Vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(o){o(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Wd(function(){return t(yu,e,n)})):(n=Vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function pm(e,r){return r.f=e.f,yu(r)}var bm=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/hm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function hm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ti=new Float64Array(3),Qc=new Float64Array(3),Kc=new Float64Array(3),_m=x(function(e,r,n){return new Float64Array([e,r,n])}),ym=function(e){return e[0]},wm=function(e){return e[1]},xm=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Cm=function(e){return new Float64Array([e.gq,e.gu,e.dg])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function wu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(wu);function xu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Lt(wu(e,r,n),n)}$(xu);function Cu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+a*a+o*o)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return n*n+a*a+o*o});function Lt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Cu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Pm=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),da=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(da);function Ho(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Ho);$(function(e,r){var n,a=Ti,o=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=da(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],o[0]=(da(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],o[1]=(da(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],o[2]=(da(r,a)+e[14])/n,o});var Sm=W(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Lm=function(e){return{gq:e[0],gu:e[1],dg:e[2],eN:e[3]}},km=function(e){return new Float64Array([e.gq,e.gu,e.dg,e.eN])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/zm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function zm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+o*o+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+o*o+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Tm=new Float64Array(16),Mm=new Float64Array(16),Dm=function(e){var r=new Float64Array(16);return r[0]=e.dS,r[1]=e.dW,r[2]=e.d_,r[3]=e.d2,r[4]=e.dT,r[5]=e.dX,r[6]=e.d$,r[7]=e.d3,r[8]=e.dU,r[9]=e.dY,r[10]=e.d0,r[11]=e.d4,r[12]=e.dV,r[13]=e.dZ,r[14]=e.d1,r[15]=e.d5,r},jm=function(e){return{dS:e[0],dW:e[1],d_:e[2],d2:e[3],dT:e[4],dX:e[5],d$:e[6],d3:e[7],dU:e[8],dY:e[9],d0:e[10],d4:e[11],dV:e[12],dZ:e[13],d1:e[14],d5:e[15]}};function Pu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2*o/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*o/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+o)/(i-o),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*o/(i-o),c[15]=0,c}lr(Pu);W(function(e,r,n,a){var o=n*Math.tan(e*Math.PI/360),i=-o,c=i*r,l=o*r;return Pu(c,l,i,o,n,a)});function Su(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-o),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+o)/(i-o),c[15]=1,c}lr(Su);W(function(e,r,n,a){return Su(e,r,n,a,-1,1)});function Lu(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],p=e[9],d=e[10],b=e[11],h=e[12],y=e[13],P=e[14],_=e[15],k=r[0],A=r[1],H=r[2],G=r[3],N=r[4],U=r[5],J=r[6],q=r[7],Q=r[8],ae=r[9],he=r[10],ye=r[11],de=r[12],Ce=r[13],Oe=r[14],Re=r[15];return n[0]=a*k+l*A+m*H+h*G,n[1]=o*k+u*A+p*H+y*G,n[2]=i*k+v*A+d*H+P*G,n[3]=c*k+s*A+b*H+_*G,n[4]=a*N+l*U+m*J+h*q,n[5]=o*N+u*U+p*J+y*q,n[6]=i*N+v*U+d*J+P*q,n[7]=c*N+s*U+b*J+_*q,n[8]=a*Q+l*ae+m*he+h*ye,n[9]=o*Q+u*ae+p*he+y*ye,n[10]=i*Q+v*ae+d*he+P*ye,n[11]=c*Q+s*ae+b*he+_*ye,n[12]=a*de+l*Ce+m*Oe+h*Re,n[13]=o*de+u*Ce+p*Oe+y*Re,n[14]=i*de+v*Ce+d*Oe+P*Re,n[15]=c*de+s*Ce+b*Oe+_*Re,n}$(Lu);$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],p=e[12],d=e[13],b=e[14],h=r[0],y=r[1],P=r[2],_=r[4],k=r[5],A=r[6],H=r[8],G=r[9],N=r[10],U=r[12],J=r[13],q=r[14];return n[0]=a*h+c*y+v*P,n[1]=o*h+l*y+s*P,n[2]=i*h+u*y+m*P,n[3]=0,n[4]=a*_+c*k+v*A,n[5]=o*_+l*k+s*A,n[6]=i*_+u*k+m*A,n[7]=0,n[8]=a*H+c*G+v*N,n[9]=o*H+l*G+s*N,n[10]=i*H+u*G+m*N,n[11]=0,n[12]=a*U+c*J+v*q+p,n[13]=o*U+l*J+s*q+d,n[14]=i*U+u*J+m*q+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Lt(r,Ti);var a=r[0],o=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=o*a*l+i*u,n[2]=i*a*l-o*u,n[3]=0,n[4]=a*o*l-i*u,n[5]=o*o*l+c,n[6]=o*i*l+a*u,n[7]=0,n[8]=a*i*l+o*u,n[9]=o*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),o=1/Cu(r),i=r[0]*o,c=r[1]*o,l=r[2]*o,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,p=c*s,d=l*s,b=i*c*v,h=i*l*v,y=c*l*v,P=i*i*v+u,_=b+d,k=h-p,A=b-d,H=c*c*v+u,G=y+m,N=h+p,U=y-m,J=l*l*v+u,q=n[0],Q=n[1],ae=n[2],he=n[3],ye=n[4],de=n[5],Ce=n[6],Oe=n[7],Re=n[8],Zr=n[9],Qr=n[10],po=n[11],ds=n[12],ms=n[13],gs=n[14],ps=n[15];return a[0]=q*P+ye*_+Re*k,a[1]=Q*P+de*_+Zr*k,a[2]=ae*P+Ce*_+Qr*k,a[3]=he*P+Oe*_+po*k,a[4]=q*A+ye*H+Re*G,a[5]=Q*A+de*H+Zr*G,a[6]=ae*A+Ce*H+Qr*G,a[7]=he*A+Oe*H+po*G,a[8]=q*N+ye*U+Re*J,a[9]=Q*N+de*U+Zr*J,a[10]=ae*N+Ce*U+Qr*J,a[11]=he*N+Oe*U+po*J,a[12]=ds,a[13]=ms,a[14]=gs,a[15]=ps,a});function Am(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(Am);W(function(e,r,n,a){var o=new Float64Array(16);return o[0]=a[0]*e,o[1]=a[1]*e,o[2]=a[2]*e,o[3]=a[3]*e,o[4]=a[4]*r,o[5]=a[5]*r,o[6]=a[6]*r,o[7]=a[7]*r,o[8]=a[8]*n,o[9]=a[9]*n,o[10]=a[10]*n,o[11]=a[11]*n,o[12]=a[12],o[13]=a[13],o[14]=a[14],o[15]=a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Bm(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Bm);W(function(e,r,n,a){var o=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],p=a[7],d=a[8],b=a[9],h=a[10],y=a[11];return o[0]=i,o[1]=c,o[2]=l,o[3]=u,o[4]=v,o[5]=s,o[6]=m,o[7]=p,o[8]=d,o[9]=b,o[10]=h,o[11]=y,o[12]=i*e+v*r+d*n+a[12],o[13]=c*e+s*r+b*n+a[13],o[14]=l*e+m*r+h*n+a[14],o[15]=u*e+p*r+y*n+a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],p=r[6],d=r[7],b=r[8],h=r[9],y=r[10],P=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=p,n[7]=d,n[8]=b,n[9]=h,n[10]=y,n[11]=P,n[12]=c*a+s*o+b*i+r[12],n[13]=l*a+m*o+h*i+r[13],n[14]=u*a+p*o+y*i+r[14],n[15]=v*a+d*o+P*i+r[15],n});x(function(e,r,n){var a=xu(e,r,Ti),o=Lt(Ho(n,a,Qc),Qc),i=Lt(Ho(a,o,Kc),Kc),c=Tm,l=Mm;return c[0]=o[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=o[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=o[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Lu(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var z=Fs,et=zs,ku=x(function(e,r,n){var a=n.c,o=n.d,i=$(function(c,l){if(c.$){var v=c.a;return f(et,e,l,v)}else{var u=c.a;return f(et,i,l,u)}});return f(et,i,f(et,e,r,o),a)}),Mi=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,o=n.c,i=n.d,c=n.e,l=e,u=f(e,a,o,f(Mi,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),el=function(e){return f(Mi,x(function(r,n,a){return t(z,w(r,n),a)}),C,e)},zu=1,Fm=2,Tu=0,Fe=function(e){return{$:1,a:e}},Di=$(function(e,r){return{$:3,a:e,b:r}}),rl=$(function(e,r){return{$:0,a:e,b:r}}),Mu=$(function(e,r){return{$:1,a:e,b:r}}),se=function(e){return{$:0,a:e}},Vm=function(e){return{$:2,a:e}},Z=function(e){return{$:0,a:e}},E={$:1},Wm=ff,Du=Wf,Ve=tu,ln=$(function(e,r){return t($f,e,Ht(r))}),ji=$(function(e,r){return g(t(uf,e,r))}),ju=function(e){return t(ln,`
    `,t(ji,`
`,e))},Ae=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,o=n.b,i=e,c=t(e,a,r),l=o;e=i,r=c,n=l;continue e}else return r}),Pr=function(e){return f(Ae,$(function(r,n){return n+1}),0,e)},Jt=Vs,Em=x(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,o=r-1,i=t(z,r,n);e=a,r=o,n=i;continue e}else return n}),bn=$(function(e,r){return f(Em,e,r,C)}),Ot=$(function(e,r){return f(Jt,e,t(bn,0,Pr(r)-1),r)}),yr=_f,Au=function(e){var r=yr(e);return 97<=r&&r<=122},Bu=function(e){var r=yr(e);return r<=90&&65<=r},qm=function(e){return Au(e)||Bu(e)},Rm=function(e){var r=yr(e);return r<=57&&48<=r},Nm=function(e){return Au(e)||Bu(e)||Rm(e)},ie=function(e){return f(Ae,z,C,e)},ra=tf,Gm=$(function(e,r){return`

(`+(Ve(e+1)+(") "+ju(Hm(r))))}),Hm=function(e){return t(Im,e,C)},Im=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=ra(n);if(h.$===1)return!1;var y=h.a,P=y.a,_=y.b;return qm(P)&&t(Wm,Nm,_)}(),o=a?"."+n:"['"+(n+"']"),u=c,v=t(z,o,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,v=t(z,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+t(ln,"",ie(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(Ve(Pr(s))+" ways:"));return t(ln,`

`,t(z,b,t(Ot,Gm,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ln,"",ie(r)):"!"}();default:var p=e.a,d=e.b,b=function(){return r.b?"Problem with the value at json"+(t(ln,"",ie(r))+`:

    `):`Problem with the given value:

`}();return b+(ju(t(Du,4,d))+(`

`+p))}}),be=32,Wr=W(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hn=_s,Ai=Zs,Bi=$(function(e,r){return qc(r)/qc(e)}),Um=Ys,sr=Ai(t(Bi,2,be)),Fi=S(Wr,0,sr,hn,hn),Fu=xs,_n=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});var Jm=$(function(e,r){return r(e)}),Om=Qs,Sr=ws,Qe=$(function(e,r){return I(e,r)>0?e:r}),$n=function(e){return{$:0,a:e}},Vi=Cs,Ym=$(function(e,r){e:for(;;){var n=t(Vi,be,e),a=n.a,o=n.b,i=t(z,$n(a),r);if(o.b){var c=o,l=i;e=c,r=l;continue e}else return ie(i)}}),Xm=function(e){var r=e.a;return r},Zm=$(function(e,r){e:for(;;){var n=Ai(r/be);if(n===1)return t(Vi,be,e).a;var a=t(Ym,e,C),o=n;e=a,r=o;continue e}}),Wi=$(function(e,r){if(r.m){var n=r.m*be,a=Om(t(Bi,be,n-1)),o=e?ie(r.A):r.A,i=t(Zm,o,r.m);return S(Wr,Sr(r.p)+n,t(Qe,5,a*sr),i,r.p)}else return S(Wr,Sr(r.p),sr,hn,r.p)}),Qm=_e(function(e,r,n,a,o){e:for(;;){if(r<0)return t(Wi,!1,{A:a,m:n/be|0,p:o});var i=_n(f(Fu,be,r,e)),c=e,l=r-be,u=n,v=t(z,i,a),s=o;e=c,r=l,n=u,a=v,o=s;continue e}}),Vu=$(function(e,r){if(e<=0)return Fi;var n=e%be,a=f(Fu,n,e-n,r),o=e-n-be;return L(Qm,r,o,e,C,a)}),ur=function(e){return!e.$},F=Df,ee=Pf,j=Tf,ne=Sf,Km=function(e){return{$:2,a:e}},Yt=$(function(e,r){return e}),Wu=$(function(e,r){return{e0:r.e0,e1:e,bg:r.bg,dt:r.dt,dL:r.dL,em:r.em,a5:r.a5,gm:r.gm}}),Sa=Af,Xt=Bf,$e=wf,Ei=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},wr=function(e){return e},eg=wr,nl=lr(function(e,r,n,a,o,i){return{dB:i,dD:r,ej:a,eo:n,es:e,et:o}}),rg=df,un=of,En=vf,Va=$(function(e,r){return e<1?r:f(En,e,un(r),r)}),Zt=gf,Qt=function(e){return e===""},Kt=$(function(e,r){return e<1?"":f(En,0,e,r)}),Eu=pf,al=_e(function(e,r,n,a,o){if(Qt(o)||t(rg,"@",o))return E;var i=t(Zt,":",o);if(i.b){if(i.b.b)return E;var c=i.a,l=Eu(t(Va,c+1,o));if(l.$===1)return E;var u=l;return Z(Ge(nl,e,t(Kt,c,o),u,r,n,a))}else return Z(Ge(nl,e,o,E,r,n,a))}),tl=W(function(e,r,n,a){if(Qt(a))return E;var o=t(Zt,"/",a);if(o.b){var i=o.a;return L(al,e,t(Va,i,a),r,n,t(Kt,i,a))}else return L(al,e,"/",r,n,a)}),ol=x(function(e,r,n){if(Qt(n))return E;var a=t(Zt,"?",n);if(a.b){var o=a.a;return S(tl,e,Z(t(Va,o+1,n)),r,t(Kt,o,n))}else return S(tl,e,E,r,n)});$(function(e,r){if(Qt(r))return E;var n=t(Zt,"#",r);if(n.b){var a=n.a;return f(ol,e,Z(t(Va,a+1,r)),t(Kt,a,r))}else return f(ol,e,E,r)});var ng=mf,qi=function(e){},Wa=Cn,ag=Wa(0),qu=W(function(e,r,n,a){if(a.b){var o=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,p=n>500?f(Ae,e,r,ie(m)):S(qu,e,r,n+1,m);return t(e,o,t(e,c,t(e,u,t(e,s,p))))}else return t(e,o,t(e,c,t(e,u,r)))}else return t(e,o,t(e,c,r))}else return t(e,o,r)}else return r}),Yr=x(function(e,r,n){return S(qu,e,r,0,n)}),X=$(function(e,r){return f(Yr,$(function(n,a){return t(z,e(n),a)}),C,r)}),kt=Ro,Ri=$(function(e,r){return t(kt,function(n){return Wa(e(n))},r)}),tg=x(function(e,r,n){return t(kt,function(a){return t(kt,function(o){return Wa(t(e,a,o))},n)},r)}),og=function(e){return f(Yr,tg(z),Wa(C),e)},ig=Qf,cg=$(function(e,r){var n=r;return iu(t(kt,ig(e),n))}),lg=x(function(e,r,n){return t(Ri,function(a){return 0},og(t(X,cg(e),r)))}),ug=x(function(e,r,n){return Wa(0)}),$g=$(function(e,r){var n=r;return t(Ri,e,n)});_r.Task=Xf(ag,lg,ug,$g);var vg=lu("Task"),Ni=$(function(e,r){return vg(t(Ri,e,r))}),sg=Dd,fg=nf,zt={$:1},Ru=function(e){return{$:2,a:e}},eo={$:0},ir=$(function(e,r){return{$:0,a:e,b:r}}),te=x(function(e,r,n){return r(e(n))}),na=function(e){var r=e.b.C;return r.a},dg=function(e){var r=e.a,n=e.b.W,a=e.b.C,o=e.b.ae;if(o.b){var i=o.a,c=o.b;return Z(t(ir,r,{C:i,ae:c,W:t(z,a,n)}))}else return E},Nu=function(e){var r=e.b;return t(ir,eo,r)},er=$(function(e,r){if(r.$)return e;var n=r.a;return n}),mg=x(function(e,r,n){var a=n.a,o=n.b;switch(a.$){case 1:return r.em.ds?Nu(n):n;case 2:var i=a.a.c5;return(I(i+r.dt,na(n).e0)>0?t(te,dg,er(t(ir,zt,o))):wr)(t(ir,Ru({c5:i+r.dt}),o));default:var c=o.C,l=c.a,u=c.b,v=t(Wu,l.e1,V(r,{e0:l.e0+r.dt})),s=t(e,v,u);return t(ir,eo,{C:w(v,s),ae:C,W:t(z,o.C,o.W)})}}),Gi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,o=n;e=a,r=o;continue e}else return r}}),gg=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,o=r.b,i=e-1,c=o,l=t(z,a,n);e=i,r=c,n=l;continue e}else return n}}),pg=$(function(e,r){return ie(f(gg,e,r,C))}),Gu=x(function(e,r,n){if(r<=0)return C;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var o=a.b,_=o.a,i=o.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,p=m.b,c=p.a,d=p.b,s=d.a,b=d.b,h=b.a,y=b.b;return e>1e3?t(z,_,t(z,c,t(z,s,t(z,h,t(pg,r-4,y))))):t(z,_,t(z,c,t(z,s,t(z,h,f(Gu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var P=a.b,_=P.a;return g([_])}}),Hi=$(function(e,r){return f(Gu,0,e,r)}),bg=$(function(e,r){var n=r.b.W,a=r.b.C,o=r.b.ae,i=le(ie(n),le(g([a]),o)),c=t(Hi,e,i),l=t(Gi,e,i);if(l.b){var u=l.a,v=l.b;return t(ir,zt,{C:u,ae:v,W:ie(c)})}else{var s=ie(c);if(s.b){var m=s.a,p=s.b;return t(ir,zt,{C:m,ae:C,W:p})}else return r}}),hg=function(e){var r=e.b;return t(ir,zt,r)},_g=function(e){var r=e.b;return t(ir,Ru({c5:na(e).e0}),r)},yg=$(function(e,r){switch(e.$){case 1:return hg(r);case 2:return Nu(r);case 3:return _g(r);default:var n=e.a;return t(bg,n,r)}}),Hu=$(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),wg=$(function(e,r){return V(r,{aC:e(r.aC)})}),Iu=function(e){return{$:3,a:e}},Uu=function(e){return{$:2,a:e}},Ju=$(function(e,r){return{$:0,a:e,b:r}}),xg=$(function(e,r){return{$:1,a:e,b:r}}),re=$(function(e,r){if(r.$)return E;var n=r.a;return Z(e(n))}),K=function(e){return e<0?-e:e},Ii=bf,Cg=x(function(e,r,n){return t(er,0/0,Ii(t(e,r,n)))}),Ou=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var o=e,i=a;e=o,r=i;continue e}else return!1}),Pg=As,Sg=lf,Yu=function(e){return f(Sg,z,C,e)},Lg=$(function(e,r){var n=t(Ou,function(a){return a!=="0"&&a!=="."},Yu(r));return le(e&&n?"-":"",r)}),Pe=tu,Io=af,Xu=yf,Zu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ra(n);if(a.$===1)return"01";var o=a.a;return t(Io,"0",Zu(o))}else{var i=yr(r);return i>=48&&i<57?t(Io,Xu(i+1),n):"0"}},Uo=Xs,kg=rf,ro=function(e){return t(Io,e,"")},Qu=x(function(e,r,n){return e<=0?n:f(Qu,e>>1,le(r,r),e&1?le(n,r):n)}),La=$(function(e,r){return f(Qu,e,r,"")}),Jo=x(function(e,r,n){return le(n,t(La,e-un(n),ro(r)))}),Oo=cf,Ku=function(e){var r=t(ji,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a;return w(n,o)}else{var n=r.a;return w(n,"0")}else return w("0","0")},zg=function(e){var r=t(ji,"e",Pe(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=t(er,0,Eu(t(ng,"+",o)?t(Va,1,o):o)),c=Ku(n),l=c.a,u=c.b,v=le(l,u),s=i<0?t(er,"0",t(re,function(m){var p=m.a,d=m.b;return p+("."+d)},t(re,Hu(ro),ra(le(t(La,K(i),"0"),v))))):f(Jo,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Tg=x(function(e,r,n){if(Uo(n)||kg(n))return Pe(n);var a=n<0,o=Ku(zg(K(n))),i=o.a,c=o.b,l=un(i)+r,u=le(t(La,-l+1,"0"),f(Jo,l,"0",le(i,c))),v=un(u),s=t(Qe,1,l),m=t(e,a,f(En,s,v,u)),p=f(En,0,s,u),d=m?Oo(t(er,"1",t(re,Zu,ra(Oo(p))))):p,b=un(d),h=d==="0"?d:r<=0?le(d,t(La,K(r),"0")):I(r,un(c))<0?f(En,0,b-r,d)+("."+f(En,b-r,b,d)):le(i+".",f(Jo,r,"0",c));return t(Lg,a,h)}),e$=Tg($(function(e,r){var n=ra(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,o=a.a;return function(i){return i>53&&e||i>=53&&!e}(yr(o))})),Mg=Cg(e$),Dg=x(function(e,r,n){var a=t(Bi,10,K(r-e)),o=a<0?3:a<1?2:a<2?1:0;return t(Mg,o,n)}),Ui=Bs,aa=$(function(e,r){e:for(;;){if(r.$===-2)return E;var n=r.b,a=r.c,o=r.d,i=r.e,c=t(Ui,e,n);switch(c){case 0:var l=e,u=o;e=l,r=u;continue e;case 1:return Z(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=_e(function(e,r,n,a,o){return{$:-1,a:e,b:r,c:n,d:a,e:o}}),Lr={$:-2},Jn=_e(function(e,r,n,a,o){if(o.$===-1&&!o.a){o.a;var i=o.b,c=o.c,l=o.d,u=o.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,p=a.e;return L(Y,0,r,n,L(Y,1,v,s,m,p),L(Y,1,i,c,l,u))}else return L(Y,e,i,c,L(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,d=a.d;d.a;var b=d.b,h=d.c,y=d.d,P=d.e,p=a.e;return L(Y,0,v,s,L(Y,1,b,h,y,P),L(Y,1,r,n,p,o))}else return L(Y,e,r,n,a,o)}),Yo=x(function(e,r,n){if(n.$===-2)return L(Y,0,e,r,Lr,Lr);var a=n.a,o=n.b,i=n.c,c=n.d,l=n.e,u=t(Ui,e,o);switch(u){case 0:return L(Jn,a,o,i,f(Yo,e,r,c),l);case 1:return L(Y,a,o,r,c,l);default:return L(Jn,a,o,i,c,f(Yo,e,r,l))}}),vn=x(function(e,r,n){var a=f(Yo,e,r,n);if(a.$===-1&&!a.a){a.a;var o=a.b,i=a.c,c=a.d,l=a.e;return L(Y,1,o,i,c,l)}else{var u=a;return u}}),jg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},r$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d,u=o.e,v=e.e;v.a;var s=v.b,m=v.c,p=v.d;p.a;var d=p.b,b=p.c,h=p.d,y=p.e,P=v.e;return L(Y,0,d,b,L(Y,1,n,a,L(Y,0,i,c,l,u),h),L(Y,1,s,m,y,P))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,k=e.e;k.a;var s=k.b,m=k.c,p=k.d,P=k.e;return L(Y,1,n,a,L(Y,0,i,c,l,u),L(Y,0,s,m,p,P))}else return e},il=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,p=o.e,d=e.e;d.a;var b=d.b,h=d.c,y=d.d,P=d.e;return L(Y,0,i,c,L(Y,1,u,v,s,m),L(Y,1,n,a,p,L(Y,0,b,h,y,P)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,k=_.d,p=_.e,A=e.e;A.a;var b=A.b,h=A.c,y=A.d,P=A.e;return L(Y,1,n,a,L(Y,0,i,c,k,p),L(Y,0,b,h,y,P))}else return e},Ag=Nt(function(e,r,n,a,o,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return L(Y,n,l,u,v,L(Y,0,a,o,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,il(r)}else break e;else return c.a,c.d,il(r);else break e;return r}}),dt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,o=e.d,i=o.a,c=o.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,L(Y,r,n,a,dt(o),l);var u=r$(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,p=u.d,d=u.e;return L(Jn,v,s,m,dt(p),d)}else return Lr}else return L(Y,r,n,a,dt(o),l)}else return Lr},_a=$(function(e,r){if(r.$===-2)return Lr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,L(Y,n,a,o,t(_a,e,i),c);var u=r$(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,p=u.d,d=u.e;return L(Jn,v,s,m,t(_a,e,p),d)}else return Lr}else return L(Y,n,a,o,t(_a,e,i),c);else return t(Bg,e,_i(Ag,e,r,n,a,o,i,c))}),Bg=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(ve(e,a)){var l=jg(c);if(l.$===-1){var u=l.b,v=l.c;return L(Jn,n,u,v,i,dt(c))}else return Lr}else return L(Jn,n,a,o,i,t(_a,e,c))}else return Lr}),Fg=$(function(e,r){var n=t(_a,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,o=n.c,i=n.d,c=n.e;return L(Y,1,a,o,i,c)}else{var l=n;return l}}),rt=x(function(e,r,n){var a=r(t(aa,e,n));if(a.$)return t(Fg,e,n);var o=a.a;return f(vn,e,o,n)}),Vg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(rt,r,re(function(a){if(a.$===1){var o=a.a,i=o.a,c=o.b;return t(xg,w(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(rt,r,re(function(a){if(a.$)return a;var o=a.a,i=o.a,c=o.b;return t(Ju,w(i,c),f(Dg,i,c,n))}));case 3:var r=e.a,n=e.b;return t(rt,r,re(function(a){return a.$===3?Iu(n):a}));default:var r=e.a,n=e.b;return t(rt,r,re(function(a){return a.$===2?Uu(n):a}))}},Wg=function(e){return wg(Vg(e))},Eg=$(function(e,r){return t(X,Wg(e),r)}),qg=$(function(e,r){return V(r,{e1:t(Eg,e,r.e1)})}),Rg=$(function(e,r){var n=r.a,a=r.b;return t(ir,n,V(a,{C:t(Hu,qg(e),a.C)}))}),Ng=$(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),Gg=x(function(e,r,n){var a=n.a,o=n.b,i=o.C;return t(ir,a,V(o,{C:t(Ng,t(e,i.a,r),i)}))}),Hg=W(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return V(a,{aU:!a.aU});case 2:var o=n.a;return V(a,{H:f(mg,e,o,a.H)});case 3:var i=n.a;return V(a,{H:t(Rg,i,a.H)});case 4:var c=n.a;return V(a,{H:f(Gg,r,c,a.H)});default:var l=n.a;return V(a,{H:t(yg,l,a.H)})}}),Ig=$(function(e,r){return t(ir,eo,{C:w(e,r(e)),ae:C,W:C})}),Ug=Kf,cl=Ug(C),xr=kf,On=Lf,Jg=td("tick",t(F,function(e){return t(F,function(r){return t(F,function(n){return t(F,function(a){return t(F,function(o){return t(F,function(i){return t(F,function(c){return $e({e0:c,bg:i,dt:o,dL:a,em:n,a5:r,gm:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(F,function(a){return t(F,function(o){return t(F,function(i){return t(F,function(c){return t(F,function(l){return t(F,function(u){return t(F,function(v){return t(F,function(s){return t(F,function(m){return $e({eP:m,e2:s,ds:v,fa:u,fz:l,fW:c,f_:i,eA:o,eI:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",xr(On)))},t(j,"left",ee))},t(j,"pressedKeys",xr(On)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(F,function(n){return t(F,function(a){return t(F,function(o){return t(F,function(i){return t(F,function(c){return t(F,function(l){return t(F,function(u){return t(F,function(v){return $e({ds:v,fw:u,fF:l,f$:c,f0:i,eI:o,gq:a,gu:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(F,function(r){return t(F,function(n){return $e({fo:n,go:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(F,function(e){return t(F,function(r){return $e({e5:r,e6:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne))))),Og=function(e){return{$:4,a:e}},Yg={$:0},n$=Ut,Je=$(function(e,r){return t(vu,e,n$(r))}),M=Je("className"),Xg=function(e){var r=e.b.C;return r.b},B=Or("div"),Tt=Je("id"),Zg=$d,ka=Zg,Qg=vd,pe=Qg,Kg={$:1},ep=function(e){return{$:3,a:e}},rp=function(e){return{$:5,a:e}},ll=Or("a"),rn=Or("button"),ul=function(e){return t(Je,"href",dd(e))},np=Tr("clip-rule"),ze=Tr("d"),Xo=Tr("fill"),a$=uu("http://www.w3.org/2000/svg"),Zo=a$("svg"),Qo=Tr("viewBox"),ap=t(sd,"http://www.w3.org/XML/1998/namespace","xml:space"),nr=Zo(g([Qo("0 0 24 24"),Xo("currentColor"),t(pe,"width","100%"),t(pe,"height","100%"),ap("http://www.w3.org/2000/svg")])),tp=Tr("fill-rule"),Te=a$("path"),pr={dp:nr(g([t(Te,g([ze("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),C)])),fi:nr(g([t(Te,g([ze("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),C)])),fn:nr(g([t(Te,g([ze("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),C)])),fG:nr(g([t(Te,g([ze("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),C),t(Te,g([ze("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),C)])),fH:nr(g([t(Te,g([ze("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),C),t(Te,g([ze("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),C)])),fS:nr(g([t(Te,g([ze("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),C)])),fT:nr(g([t(Te,g([ze("M7 5V19L18 12L7 5Z")]),C)])),fU:nr(g([t(Te,g([ze("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),C)])),em:nr(g([t(Te,g([ze("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),C)])),gg:nr(g([t(Te,g([tp("evenodd"),np("evenodd"),ze("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),C)])),gh:nr(g([t(Te,g([ze("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),C)])),gy:nr(g([t(Te,g([ze("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),C)]))},op=function(e){return{$:0,a:e}},t$=$u,Ji=$(function(e,r){return t(t$,e,op(r))}),br=function(e){return t(Ji,"click",$e(e))},$l=Je("target"),ma=Je("title"),Ko=$(function(e,r){if(r.$===-2)return Lr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;return L(Y,n,a,t(e,a,o),t(Ko,e,i),t(Ko,e,c))}),ip=No,xe=ip,cp=function(e){return f(Mi,x(function(r,n,a){return t(z,n,a)}),C,e)},lp=$(function(e,r){return{$:3,a:e,b:r}}),up=$(function(e,r){return{$:2,a:e,b:r}}),$p=$(function(e,r){return{$:0,a:e,b:r}}),vp=$(function(e,r){return{$:1,a:e,b:r}}),Mr=W(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),o$=S(Mr,0/255,0/255,0/255,1),i$=Ut,sp=$(function(e,r){return t(vu,e,i$(r))}),fp=sp("checked"),rr=Ks,dp=x(function(e,r,n){return le(t(La,e-un(n),ro(r)),n)}),za=Rs,c$=function(e){var r=function(n){return n<10?Ve(n):ro(Xu(87+n))};return e<16?r(e):le(c$(e/16|0),r(t(za,16,e)))},mp=t(te,c$,t(dp,2,"0")),Oi=function(e){var r=e.a,n=e.b,a=e.c,o=e.d;return{aQ:o,ci:a,co:n,cY:r}},gp=function(e){var r=Oi(e),n=r.cY,a=r.co,o=r.ci;return t(ln,"",t(z,"#",t(X,t(te,rr,mp),g([n*255,a*255,o*255]))))},ei=Je("htmlFor"),Er=$(function(e,r){if(r.$)return E;var n=r.a;return e(n)}),Mt=$(function(e,r){if(r.$){var a=r.a;return Fe(a)}else{var n=r.a;return e(n)}}),pp=x(function(e,r,n){var a=e(r);if(a.$)return n;var o=a.a;return t(z,o,n)}),yn=$(function(e,r){return f(Yr,pp(e),C,r)}),l$=W(function(e,r,n,a){return{ft:r,fD:e,fM:n,f8:a}}),bp=Vd,hp=hf,_p=$(function(e,r){if(r.$)return Fe(e);var n=r.a;return se(n)}),yp=Fd,wp=function(e){return t(yp,{eY:!1,fI:!1},e)},ta=function(e){if(e.b){var r=e.a;return e.b,Z(r)}else return E},xp=$(function(e,r){if(r.$){var a=r.a;return Fe(a)}else{var n=r.a;return se(e(n))}}),Cp=function(e){return{$:2,a:e}},Pp=function(e){return{$:0,a:e}},Sp=function(e){return{$:1,a:e}},_o=$(function(e,r){return yr(r)-yr(e)}),yo=x(function(e,r,n){var a=yr(n);return I(yr(e),a)<1&&I(a,yr(r))<1}),Lp=$(function(e,r){var n=function(o){return I(o,e)<0?se(o):Fe(Sp(r))},a=f(yo,"0","9",r)?se(t(_o,"0",r)):f(yo,"a","z",r)?se(10+t(_o,"a",r)):f(yo,"A","Z",r)?se(10+t(_o,"A",r)):Fe(Pp(r));return t(Mt,n,a)}),u$=$(function(e,r){var n=ra(r);if(n.$===1)return se(0);var a=n.a,o=a.a,i=a.b;return t(Mt,function(c){return t(Mt,function(l){return se(c+l*e)},t(u$,e,i))},t(Lp,e,o))}),kp=$(function(e,r){return 2<=e&&e<=36?t(u$,e,Oo(r)):Fe(Cp(e))}),zp=kp(16),Tp=x(function(e,r,n){return S(Mr,e,r,n,1)}),Mp=W(function(e,r,n,a){return S(Mr,e,r,n,a)}),en=qs,Dp=$(function(e,r){var n=t(en,10,e);return rr(r*n)/n}),jp=sf,Ap=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Yu(n);if(a.b&&!a.b.b){var o=a.a;return hp(g([o,o]))}else return n};return t(te,jp,t(te,function(n){return t(re,function(a){return f(bp,1,a,n)},wp(e))},t(te,Er(ta),t(te,re(function(n){return n.f8}),t(te,re(yn(wr)),t(te,_p("Parsing hex regex failed"),Mt(function(n){var a=t(X,t(te,r,t(te,zp,xp(Um))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var o=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return se(S(Mp,o/255,c/255,u/255,t(Dp,2,s/255)))}else break e;else{var o=a.a.a,m=a.b,c=m.a.a,p=m.b,u=p.a.a;return se(f(Tp,o/255,c/255,u/255))}else break e;return Fe("Parsing ints from hex failed")})))))))}(),Ta=Or("input"),ri=Or("label"),ni=Je("name"),$$=$(function(e,r){return f(Yr,j,r,e)}),Bp=t($$,g(["target","checked"]),ee),Fp=function(e){return t(Ji,"change",t(Sa,e,Bp))},Vp=function(e){return w(e,!0)},Wp=function(e){return{$:1,a:e}},Ep=$(function(e,r){return t(t$,e,Wp(r))}),qp=t($$,g(["target","value"]),On),Ea=function(e){return t(Ep,"input",t(Sa,Vp,t(Sa,e,qp)))},v$=Je("max"),s$=Je("min"),f$=function(e){return t(Je,"step",e)},Dt=Je("type"),qa=Je("value"),vl=function(e){var r=e.cr,n=e.db,a=e.cH,o=e.cD,i=e.c3,c=e.cL;return t(B,C,g([t(ri,g([ei(r)]),g([t(B,g([M("relative w-full")]),g([t(B,g([M("inline-block")]),g([xe(r)])),t(B,g([M("inline-block float-right")]),g([xe(Pe(n))]))]))])),t(Ta,g([Dt("range"),t(pe,"width","100%"),Tt(r),ni(r),s$(Pe(a)),v$(Pe(o)),qa(Pe(n)),f$(Pe(i)),Ea(t(te,Ii,t(te,er(42),c)))]),C)]))},d$=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Rp=$(function(e,r){switch(r.$){case 3:var c=r.a;return t(B,g([M("h-12 py-4")]),g([t(ri,g([M("block"),ei(e)]),g([t(Ta,g([M("relative bottom-[1px] align-middle mr-2"),Dt("checkbox"),Tt(e),ni(e),Fp(lp(e)),fp(c)]),C),xe(e)]))]));case 0:var n=r.a,o=n.a,i=n.b,c=r.b;return vl({cr:e,cD:i,cH:o,cL:$p(e),c3:.01*(i-o),db:c});case 1:var a=r.a,o=a.a,i=a.b,c=r.b;return vl({cr:e,cD:i,cH:o,cL:t(te,rr,vp(e)),c3:1,db:c});default:var c=r.a;return t(B,C,g([t(B,g([t(pe,"margin-bottom","6px")]),g([t(ri,g([ei(e)]),g([xe(e)]))])),t(Ta,g([Dt("color"),t(pe,"width","100%"),t(pe,"height","26px"),t(pe,"padding","0px"),Tt(e),ni(e),Ea(function(l){return t(up,e,t(d$,o$,Ap(l)))}),qa(gp(c))]),C)]))}}),Np=function(e){return t(B,g([M("p-4 border-y-[0.5px] border-white20")]),g([t(B,g([M("text-lg pb-2")]),g([xe(e.fJ)])),t(B,g([M("pl-2 pr-2")]),cp(t(Ko,Rp,e.aC)))]))},Gp=function(e){return t(B,g([M("text-xs text-white60")]),t(X,Np,e))},Hp=function(e){return t(B,g([M("absolute left-[104px] bottom-2 text-sm text-white40")]),g([xe("clock: "+t(e$,3,na(e).e0))]))},Ip=function(e){e.a;var r=e.b.W;return t(re,function(n){return rr(60/(na(e).e0-n))},t(re,t(te,Xm,function(n){return n.e0}),ta(t(Gi,59,r))))},Up=function(e){return t(B,g([M("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Ip(e);if(r.$===1)return g([xe("... Fps")]);var n=r.a;return g([xe(Ve(n)+" Fps")])}())},Jp=function(e){return{$:0,a:e}},Op=function(e){var r=e.b.W;return Pr(r)},Yp=function(e){var r=e.b.W;e.b.C;var n=e.b.ae;return Pr(r)+1+Pr(n)},Xp=function(e){return t(Ta,g([M("absolute w-full"),Dt("range"),s$(Ve(0)),v$(Ve(Yp(e)-1)),qa(Ve(Op(e))),f$(Ve(1)),Ea(t(te,Ii,t(te,er(42),t(te,rr,Jp))))]),C)},sl={$:1},Zp={$:3},Qp={$:2},Yi=function(e){return!e.b},fl=$(function(e,r){return t(rn,g([M("px-2 bg-black60 hover:bg-black80 active:bg-black"),M(r),br(e)]),g([xe("REC")]))}),dl=$(function(e,r){return t(rn,g([M("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),br(r)]),g([t(B,g([M("w-4 h-6 text-white60 hover:text-white80")]),g([e]))]))}),Kp=function(e){var r=e.a,n=e.b.ae;return t(B,g([M("py-1")]),g([function(){switch(r.$){case 0:return t(fl,sl,"text-red-500 font-bold");case 1:return t(fl,Qp,"text-white60 hover:text-white80 font-bold");default:return t(B,C,C)}}(),function(){switch(r.$){case 0:return t(B,C,C);case 1:return Yi(n)?t(B,C,C):t(dl,pr.fT,Zp);default:return t(dl,pr.fS,sl)}}()]))},e0=function(e){return t(B,g([M("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Xp(e),Kp(e),Up(e),Hp(e)]))},r0=function(e){var r=e.a;return ve(r,eo)},n0=$(function(e,r){var n=r0(r.H)?t(B,C,C):t(B,g([M("absolute pointer-events-none w-8 h-8"),t(pe,"left",Pe(e.em.gq+.5*e.a5.go)+"px"),t(pe,"top",Pe(-e.em.gu+.5*e.a5.fo)+"px")]),g([t(B,g([M(e.em.fw?"text-black80":"text-black40")]),g([pr.em]))]));return t(B,C,g([n]))}),a0=$(function(e,r){var n=t(rn,g([M(r.aU?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),br(Kg),ma("Distraction Free Mode")]),g([pr.gy])),a=t(B,g([M("absolute w-8 bottom-12")]),g([t(ll,g([M("text-twitterBlue40 hover:text-twitterBlue"),ul("https://twitter.com/AzizErkalSelman"),$l("_blank")]),g([pr.gh]))])),o=t(B,g([M("absolute w-8 bottom-2")]),g([t(ll,g([M("text-githubCat40 hover:text-githubCat"),ul("https://github.com/erkal/elm-3d-playground-exploration"),$l("_blank")]),g([pr.fi]))]));return r.aU?t(B,g([M("fixed w-10 h-10 p-1")]),g([n])):t(B,C,g([t(B,g([M("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),g([n,a,o])),t(B,g([M("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),t(pe,"height",Pe(e.a5.fo-80)+"px")]),g([t(ka,ep,Gp(na(r.H).e1))])),t(B,g([M("absolute bottom-0 left-10 h-20"),t(pe,"width",e.a5.go>600?"600px":Pe(e.a5.go-40)+"px")]),g([t(ka,rp,e0(r.H))])),t(n0,e,r)]))}),t0=x(function(e,r,n){var a=Xg(n.H),o=na(n.H);return t(B,g([M("bg-black40"),M("select-none"),M("antialiased"),M("font-mono"),t(pe,"width",Pe(o.a5.go)+"px"),t(pe,"height",Pe(o.a5.fo)+"px")]),g([t(B,g([M("fixed")]),g([t(ka,Yt(Yg),t(e,o,a))])),t(B,g([Tt("gui")]),g([t(a0,o,n),t(ka,Og,t(r,o,a))]))]))}),o0=lr(function(e,r,n,a,o,i){var c=$(function(u,v){return w(S(Hg,r,i,u,v),cl)}),l=function(u){var v=t(Wu,n,u.fv);return w({aU:u.fv.a5.go<500,H:t(Ig,v,a)},cl)};return sg({fu:l,f9:Yt(Jg(Km)),gi:c,gl:t(t0,e,o)})}),ai={$:0},qr=$(function(e,r){return{gq:e,gu:r}}),i0=$(function(e,r){return t(re,function(n){if(n.$===3){var a=n.a;return a}else return!1},t(aa,e,r.aC))}),c0=$(function(e,r){return t(er,!1,ta(t(yn,i0(e),r)))}),l0=$(function(e,r){return t(c0,e,r.e1)}),oa=l0,u0=$(function(e,r){return t(re,function(n){if(n.$)return 0;var a=n.b;return a},t(aa,e,r.aC))}),$0=$(function(e,r){return t(er,0,ta(t(yn,u0(e),r)))}),v0=$(function(e,r){return t($0,e,r.e1)}),Ar=v0,Xi=function(e){return e},Le=function(e){return e},jt=function(e){var r=e;return-r},s0=$(function(e,r){var n=e,a=r;return{gq:n.gu*a.dg-n.dg*a.gu,gu:n.dg*a.gq-n.gq*a.dg,dg:n.gq*a.gu-n.gu*a.gq}}),m$=function(e){var r=e;return r.de},g$=function(e){var r=e;return r.df},f0=function(e){return t(s0,m$(e),g$(e))},ia=function(e){var r=e;return r.cM},Hr=Gs,Ir=Hs,mt=x(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Hr(c),u=Ir(c),v=a.e8,s=v,m=s.gq*u,p=l*m,d=m*m,b=s.gu*u,h=l*b,y=m*b,P=b*b,_=1-2*(d+P),k=s.dg*u,A=l*k,H=2*(y-A),G=2*(y+A),N=m*k,U=2*(N+h),J=2*(N-h),q=b*k,Q=2*(q-p),ae=2*(q+p),he=k*k,ye=1-2*(P+he),de=1-2*(d+he);return{gq:ye*i.gq+H*i.gu+U*i.dg,gu:G*i.gq+de*i.gu+Q*i.dg,dg:J*i.gq+ae*i.gu+_*i.dg}}),Ra=x(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Hr(c),u=Ir(c),v=a.cM,s=v,m=i.gq-s.gq,p=i.gu-s.gu,d=i.dg-s.dg,b=a.e8,h=b,y=h.gq*u,P=l*y,_=y*y,k=h.gu*u,A=l*k,H=y*k,G=k*k,N=1-2*(_+G),U=h.dg*u,J=l*U,q=2*(H-J),Q=2*(H+J),ae=y*U,he=2*(ae+A),ye=2*(ae-A),de=k*U,Ce=2*(de-P),Oe=2*(de+P),Re=U*U,Zr=1-2*(G+Re),Qr=1-2*(_+Re);return{gq:s.gq+Zr*m+q*p+he*d,gu:s.gu+Q*m+Qr*p+Ce*d,dg:s.dg+ye*m+Oe*p+N*d}}),ca=function(e){return e},Pn=function(e){var r=e;return r.de},Sn=function(e){var r=e;return r.df},Ln=function(e){var r=e;return r.dh},p$=x(function(e,r,n){return ca({cM:f(Ra,e,r,ia(n)),de:f(mt,e,r,Pn(n)),df:f(mt,e,r,Sn(n)),dh:f(mt,e,r,Ln(n))})}),ml=x(function(e,r,n){return f(p$,e(n),r,n)}),Zi=function(e){var r=e;return r.e8},la=$(function(e,r){var n=e,a=r;return{gq:a.gq+n.gq,gu:a.gu+n.gu,dg:a.dg+n.dg}}),b$=$(function(e,r){return ca({cM:t(la,e,ia(r)),de:Pn(r),df:Sn(r),dh:Ln(r)})}),d0=$(function(e,r){var n=e,a=r;return{gq:n*a.gq,gu:n*a.gu,dg:n*a.dg}}),m0=x(function(e,r,n){return t(b$,t(d0,r,e),n)}),g0=x(function(e,r,n){return f(m0,Zi(e(n)),r,n)}),kr=$(function(e,r){return{e8:r,cM:e}}),p0=function(e){var r=e;return t(kr,r.cM,r.de)},b0=function(e){var r=e;return t(kr,r.cM,r.df)},h0=function(e){var r=e;return t(kr,r.cM,r.dh)},h$=function(e){var r=ca({cM:e.a_,de:g$(e.dC),df:f0(e.dC),dh:m$(e.dC)}),n=f(g0,h0,e.cn,f(ml,p0,jt(e.bP),f(ml,b0,e.bI,r)));return n},_0=function(e){return{$:1,a:e}},je=function(e){var r=e;return K(r)},y0=function(e){return{cX:_0(je(e.eM)),dc:e.dc}},Ke=function(e){return e},Xr={gq:0,gu:0,dg:0},_$=wr,sn=function(e){return e},w0=sn({gq:1,gu:0,dg:0}),Qi=w0,y$=sn({gq:0,gu:0,dg:1}),no=y$,w$=_$({cM:Xr,de:no,df:Qi}),x0=function(e){var r=e.a_,n=e.bI,a=e.bP,o=e.eM;return y0({dc:h$({bI:Ke(n),cn:Le(1e3),bP:Ke(a),a_:Xi(r),dC:w$}),eM:Le(o)})},C0=Js,P0=function(e){return{$:0,a:e}},gt=function(e){var r=e;return .5*r},S0=Is,L0=function(e){var r=e;return S0(r)},k0=function(e){var r=gt(je(e.eK)),n=L0(r);return{cX:P0(n),dc:e.dc}},z0=function(e){var r=e.a_,n=e.bI,a=e.bP,o=e.cn;return k0({eK:Ke(2*C0(.5)),dc:h$({bI:Ke(n),cn:Le(o),bP:Ke(a),a_:Xi(r),dC:w$})})},x$=$(function(e,r){return t(oa,"orthographic",e)?x0({bI:t(Ar,"camera azimuth",e),bP:t(Ar,"camera elevation",e),a_:r,eM:t(Ar,"camera distance",e)}):z0({bI:t(Ar,"camera azimuth",e),cn:t(Ar,"camera distance",e),bP:t(Ar,"camera elevation",e),a_:r})}),T0=_e(function(e,r,n,a,o){return{ce:e,dk:o,ap:n,cj:a,fV:r}}),M0=lr(function(e,r,n,a,o,i){return{aS:e,e9:n,f1:o,ew:a,gf:i,gk:r}}),D0=$(function(e,r){return{bL:e,fX:r}}),j0=Xt(Jm),me=x(function(e,r,n){return t(j0,t(j,e,r),n)}),Na=f(me,"y",ne,f(me,"x",ne,$e(qr))),A0=f(me,"radius",ne,f(me,"center",Na,$e(D0))),gl=Mf,ao=$(function(e,r){return w(e,r)}),B0=f(me,"trail",xr(Na),f(me,"rotation",ne,f(me,"rotationSpeed",ne,f(me,"directionFromXAxis",ne,f(me,"velocity",f(Xt,ao,t(gl,0,ne),t(gl,1,ne)),f(me,"circle",A0,$e(M0))))))),F0=$(function(e,r){return{bL:e,dI:r}}),V0=f(me,"isCollected",ee,f(me,"center",Na,$e(F0))),C$=Cf,W0=zf,E0=jf,q0=function(e){return E0(g([W0(E),t(Sa,Z,e)]))},R0=x(function(e,r,n){return{dl:n,cp:e,en:r}}),N0=f(me,"bounciness",ne,f(me,"polygon",xr(Na),f(me,"id",C$,$e(R0)))),G0=f(me,"ballBouncedInLastTickToPolygonWithId",q0(C$),f(me,"collisionPointsHistory",xr(Na),f(me,"coins",xr(V0),f(me,"polygons",xr(N0),f(me,"ball",B0,$e(T0)))))),Br=Ut,kn=function(e){return f(Ae,$(function(r,n){var a=r.a,o=r.b;return f(Rf,a,o,n)}),qf(),e)},Ga=function(e){return kn(g([w("x",Br(e.gq)),w("y",Br(e.gu))]))},H0=function(e){return kn(g([w("center",Ga(e.bL)),w("radius",Br(e.fX))]))},fn=$(function(e,r){return f(Ae,Nf(e),Ef(),r)}),I0=function(e){return kn(g([w("circle",H0(e.aS)),w("velocity",function(r){var n=r.a,a=r.b;return t(fn,wr,g([Br(n),Br(a)]))}(e.gk)),w("directionFromXAxis",Br(e.e9)),w("rotationSpeed",Br(e.ew)),w("rotation",Br(e.f1)),w("trail",t(fn,Ga,e.gf))]))},U0=function(e){return kn(g([w("center",Ga(e.bL)),w("isCollected",i$(e.dI))]))},P$=Ut,J0=function(e){return kn(g([w("id",P$(e.cp)),w("polygon",t(fn,Ga,e.en)),w("bounciness",Br(e.dl))]))},O0=Gf,Y0=function(e){return kn(g([w("ball",I0(e.ce)),w("polygons",t(fn,J0,e.fV)),w("coins",t(fn,U0,e.ap)),w("collisionPointsHistory",t(fn,Ga,e.cj)),w("ballBouncedInLastTickToPolygonWithId",t(te,re(P$),er(O0))(e.dk))]))},S$=$(function(e,r){return{q:r,l:C,C:e}}),X0=W(function(e,r,n,a){return{dw:e,eh:r,U:t(S$,n,a),c6:"",ca:""}}),Z0=function(e){if(e.b){var r=e.a,n=e.b;return Z(f(Ae,Qe,r,n))}else return E},L$=$(function(e,r){var n={dl:1,cp:1+t(er,-1,Z0(t(X,function(a){return a.cp},r.fV))),en:e};return V(r,{fV:t(z,n,r.fV)})}),Q0={aS:{bL:t(qr,0,0),fX:.5},e9:0,f1:0,ew:0,gf:C,gk:w(0,0)},K0=t(L$,g([t(qr,6,0),t(qr,6,6),t(qr,0,6)]),{ce:Q0,dk:E,ap:C,cj:C,fV:C}),eb=function(e){return{ao:t(x$,e,{gq:0,gu:0,dg:0}),aE:!0,I:S(X0,Y0,G0,{fJ:"level 1",fR:K0},C),aI:t(qr,0,0),aj:ai}},$a=$(function(e,r){return w(e,Iu(r))}),rb=$(function(e,r){return w(e,Uu(r))}),nb=x(function(e,r,n){return{aC:n,fx:r,fJ:e}}),to=Lr,ab=function(e){return f(Ae,$(function(r,n){var a=r.a,o=r.b;return f(vn,a,o,n)}),to,e)},tb=x(function(e,r,n){return f(nb,e,r,ab(n))}),nt=tb,An=x(function(e,r,n){var a=r.a,o=r.b;return w(e,t(Ju,w(a,o),n))}),Rr=Ns,ob=S(Mr,255/255,255/255,255/255,1),ib=g([f(nt,"View Options",!0,g([t($a,"draw speed vector",!1),t($a,"draw ball trail",!0),t($a,"orthographic",!0),t($a,"unlit",!0)])),f(nt,"Camera",!0,g([f(An,"camera distance",w(3,60),40),f(An,"camera azimuth",w(0,2*Rr),0),f(An,"camera elevation",w(-Rr/2,Rr/2),0)])),f(nt,"Physics Parameters",!0,g([t($a,"fix time steps",!0),f(An,"gas force",w(20,60),40),f(An,"friction",w(0,1),.4),f(An,"direction change speed",w(1,5),3)])),f(nt,"Color",!0,g([t(rb,"floor color",ob)]))]),k$=function(e){return{$:1,a:e}},Ha=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*o+a*i}),vr=ef,oo=function(e){return vr(t(Ha,e,e))},fr=$(function(e,r){return oo(w(e.gq-r.gq,e.gu-r.gu))}),cb=$(function(e,r){var n=w(e.dL.eA,r.aj);if(n.a&&n.b.$===1){var a=n.b.a,o=r.aI;return V(r,{aj:k$(function(){var i=ie(a);if(i.b){var c=i.a;return t(fr,c,o)>2?le(a,g([o])):a}else return g([o])}())})}else return r}),Ne=x(function(e,r,n){return{gq:e,gu:r,dg:n}}),Ki=function(e){var r=e;return r.C},Ia=function(e){var r=e;return Ki(r.U).fR},lb=$(function(e,r){var n=Ia(r.I).ce;return V(r,{ao:t(x$,e,f(Ne,n.aS.bL.gq,n.aS.bL.gu,0))})}),z$=$(function(e,r){var n=r;return V(n,{C:e(n.C)})}),zn=$(function(e,r){var n=r;return V(n,{U:e(n.U)})}),T$=function(e){return zn(z$(function(r){return V(r,{fR:e(r.fR)})}))},ub=function(e){var r=function(n){return!n.dI&&t(fr,n.bL,e.ce.aS.bL)<1?V(n,{dI:!0}):n};return V(e,{ap:t(X,r,e.ap)})},M$=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(n+o,a+i)}),zr=$(function(e,r){var n=r.a,a=r.b;return w(e*n,e*a)}),nn=$(function(e,r){return t(zr,e/oo(r),r)}),$b=$(function(e,r){return t(nn,t(Ha,e,r),e)}),vb=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(o-n,i-a)}),sb=$(function(e,r){var n=r.ce,a=t($b,e.b$,n.gk),o=t(vb,a,n.gk),i=t(M$,o,t(zr,e.b4.dl,t(zr,-1,a)));return V(r,{ce:V(n,{gk:i})})}),fb=$(function(e,r){return r.b?f(Yr,z,r,e):e}),Ee=function(e){return f(Yr,fb,C,e)},Ur=function(e){return e*Rr/180},ec=function(e){var r=function(){if(e.b){var n=e.a,a=e.b;return le(a,g([n]))}else return C}();return f(Jt,ao,e,r)},Ua=$(function(e,r){var n=r.a,a=r.b;return w(n*Hr(e)-a*Ir(e),n*Ir(e)+a*Hr(e))}),qe=$(function(e,r){var n=e.a,a=e.b;return V(r,{gq:r.gq+n,gu:r.gu+a})}),ke=$(function(e,r){return w(e.gq-r.gq,e.gu-r.gu)}),db=$(function(e,r){var n=r.a,a=r.b,o=t(nn,e,t(Ua,-Ur(90),t(ke,a,n)));return w(t(qe,o,n),t(qe,o,a))}),mb=$(function(e,r){return{e3:t(X,function(n){return{bL:n,fX:e}},r),f4:t(X,db(e),ec(r))}}),dr=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*i-a*o}),gb=$(function(e,r){var n=w(w(e.ah,e.e8),w(r.ah,r.e8)),a=n.a,o=a.a,i=a.b,c=n.b,l=c.a,u=c.b,v=t(dr,t(ke,l,o),i),s=t(dr,i,u),m=v/s,p=t(dr,t(ke,l,o),u),d=p/s;return!v&&!s?E:s&&0<=d&&0<=m?Z(t(qe,t(zr,d,i),o)):E}),D$=$(function(e,r){r.fX;var n=r.bL,a=t(dr,e.e8,t(ke,n,e.ah))<0?1:-1;return t(gb,{e8:t(Ua,a*Ur(90),e.e8),ah:n},e)}),mr=function(e){var r=e.a,n=e.b;return w(n.gq-r.gq,n.gu-r.gu)},j$=function(e){var r=e.a,n=e.b;return{e8:mr(w(r,n)),ah:r}},pb=$(function(e,r){var n=e.a,a=e.b,o=r.fX,i=t(D$,j$(e),r);if(i.$===1)return E;var c=i.a,l=t(fr,r.bL,c);if(I(l,o)<1){var u=t(qe,t(nn,-vr(o*o-l*l),mr(e)),c),v=t(Ha,t(ke,a,n),t(ke,u,n))>=0&&I(t(fr,n,u),t(fr,n,a))<1;return v?Z(u):E}else return E}),A$=nn(1),bb=x(function(e,r,n){var a=w(e,t(qe,r,e)),o=t(pb,a,n);return t(re,function(i){return{b$:A$(t(ke,i,n.bL)),cb:t(ke,i,e)}},o)}),hb=$(function(e,r){var n=e.a,a=r.a,o=w(w(n,mr(e)),w(a,mr(r))),i=o.a,c=i.a,l=i.b,u=o.b,v=u.a,s=u.b,m=t(dr,t(ke,v,c),l),p=t(dr,l,s),d=m/p,b=t(dr,t(ke,v,c),s),h=b/p;return!m&&!p?E:p&&0<=h&&h<=1&&0<=d&&d<=1?Z(t(qe,t(zr,h,l),c)):E}),B$=function(e){return A$(t(Ua,-Ur(90),mr(e)))},_b=x(function(e,r,n){var a=w(e,t(qe,r,e)),o=t(hb,a,n);return t(re,function(i){return{b$:B$(n),cb:t(ke,i,e)}},o)}),F$=Ws,pl=$(function(e,r){return{bM:e,b$:r.b$,cb:r.cb}}),yb=x(function(e,r,n){var a=t(mb,e.fX,n),o=a.f4,i=a.e3,c=t(yn,function(u){return t(re,pl(u.bL),f(bb,e.bL,r,u))},i),l=t(yn,function(u){return t(re,function(v){return t(pl,t(qe,t(nn,e.fX,t(Ua,Ur(90),mr(u))),t(qe,v.cb,e.bL)),v)},f(_b,e.bL,r,u))},o);return ta(t(F$,t(te,function(u){return u.cb},oo),Ee(g([c,l]))))}),wb=$(function(e,r){return{bM:r.bM,b$:r.b$,b4:e,cb:r.cb}}),xb=$(function(e,r){var n=t(zr,e.dt,r.ce.gk),a=function(c){return t(re,wb(c),f(yb,r.ce.aS,n,c.en))},o=ta(t(F$,t(te,function(c){return c.cb},oo),t(yn,a,r.fV)));if(o.$===1)return r;var i=o.a;return t(sb,i,V(r,{dk:Z(i.b4.cp),cj:t(Hi,15,t(z,i.bM,r.cj))}))}),io=$(function(e,r){return Ee(t(X,e,r))}),co=$(function(e,r){return f(Yr,$(function(n,a){return e(n)?t(z,n,a):a}),C,r)}),bl=$(function(e,r){var n=e.a,a=e.b,o=r.fX,i=t(D$,j$(e),r);if(i.$===1)return C;var c=i.a,l=t(fr,r.bL,c);if(I(l,o)<1){var u=vr(o*o-l*l),v=t(qe,t(nn,u,mr(e)),c),s=function(p){return t(Ha,t(ke,a,n),t(ke,p,n))>=0&&I(t(fr,n,p),t(fr,n,a))<1},m=t(qe,t(nn,-u,mr(e)),c);return t(co,s,ve(l,o)?g([m]):g([m,v]))}else return C}),Cb=$(function(e,r){var n=e.a,a=e.b;return I(t(fr,n,r.bL),r.fX)<0&&I(t(fr,a,r.bL),r.fX)>-1?t(bl,w(a,n),r):t(bl,w(n,a),r)}),Pb=$(function(e,r){var n=r.a,a=w(w(e.ah,e.e8),w(n,mr(r))),o=a.a,i=o.a,c=o.b,l=a.b,u=l.a,v=l.b,s=t(dr,t(ke,u,i),c),m=t(dr,c,v),p=s/m,d=t(dr,t(ke,u,i),v),b=d/m;return!s&&!m?E:m&&b>=0&&p>=0&&p<=1?Z(t(qe,t(zr,b,c),i)):E}),Sb=$(function(e,r){var n=e.a;r.fX;var a=r.bL,o=t(dr,mr(e),t(ke,a,n))<0?1:-1;return t(Pb,{e8:t(Ua,o*Ur(90),mr(e)),ah:a},e)}),Lb=function(e){var r=e.ce,n=$(function(i,c){var l=t(Sb,i,c);if(l.$)return c;var u=l.a;return V(c,{bL:t(qe,t(nn,c.fX,B$(i)),t(qe,t(ke,u,c.bL),c.bL))})}),a=t(co,function(i){return!Yi(t(Cb,i,r.aS))},t(io,t(te,function(i){return i.en},ec),e.fV)),o=f(Ae,n,r.aS,a);return V(e,{ce:V(r,{aS:o})})},kb=$(function(e,r){return V(r,{ce:e(r.ce)})}),zb=$(function(e,r){return V(r,{gk:t(zr,1-e.dt*5*t(Ar,"friction",e),r.gk)})}),rc=x(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Tb=function(e){var r=e.a,n=e.b;return w(r*Hr(n),r*Ir(n))},Mb=function(e){return(e.f_?1:0)-(e.fz?1:0)},Db=Mb,jb=function(e){return(e.eI?1:0)-(e.ds?1:0)},wo=jb,Ab=$(function(e,r){var n=t(Ar,"gas force",e),a=Tb(w(1,r.e9)),o=M$(t(zr,e.dt*n*wo(e.dL),a));return V(r,{e9:r.e9-Db(e.dL)*t(Ar,"direction change speed",e)*e.dt,ew:wo(e.dL)?f(rc,-14,14,r.ew+e.dt*1e3*wo(e.dL)):t(Ha,r.gk,a),gk:o(r.gk)})}),Bb=$(function(e,r){var n=r.aS;return V(r,{aS:V(n,{bL:t(qe,t(zr,e.dt,r.gk),r.aS.bL)})})}),Fb=$(function(e,r){return V(r,{f1:r.f1+e.dt*r.ew})}),Vb=function(e){return V(e,{gf:function(){var r=e.gf;if(r.b){var n=r.a;return t(fr,n,e.aS.bL)>1?t(z,e.aS.bL,e.gf):e.gf}else return g([e.aS.bL])}()})},Wb=$(function(e,r){return Vb(t(Bb,e,t(Fb,e,t(zb,e,t(Ab,e,r)))))}),Eb=$(function(e,r){return ub(Lb(t(kb,Wb(e),t(xb,e,r))))}),qb=$(function(e,r){var n=t(Eb,e,Ia(r.I));return V(r,{I:t(T$,Yt(n),r.I)})}),ga=function(e){return Ke(Rr*(e/180))},at=function(e){return e},dn=function(e){var r=e;return r},Rb=$(function(e,r){var n=e,a=r;return a.gq*n.gq+a.gu*n.gu+a.dg*n.dg}),ce=$(function(e,r){var n=r;return e*n}),V$=function(e){var r=e;return r.cM},Nb=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.fL,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu+(a.dg-i.dg)*l.dg}),Gb=x(function(e,r,n){var a=e,o=r,i=n;return{gq:i.gq+o*a.gq,gu:i.gu+o*a.gu,dg:i.dg+o*a.dg}}),Hb=$(function(e,r){var n=Zi(r),a=e,o=a.fL,i=t(Rb,o,n);if(i){var c=V$(r),l=t(Nb,e,c),u=t(ce,-1/i,l);return Z(f(Gb,n,u,c))}else return E}),Ib=$(function(e,r){return{gq:e,gu:r}}),hl=$(function(e,r){var n=e,a=r;return n*a}),Ub=function(e){var r=e;return r},_l=function(e){var r=e;return Ub(r.eT)},Jb=function(e){var r=e;return r.aT},Ob=function(e){var r=e,n=t(Qe,K(r.gq),t(Qe,K(r.gu),K(r.dg)));if(n){var a=r.dg/n,o=r.gu/n,i=r.gq/n,c=vr(i*i+o*o+a*a);return Z({gq:i/c,gu:o/c,dg:a/c})}else return E},W$=$(function(e,r){var n=r;return n/e}),ti=function(e){var r=e;return ia(r)},E$=sn({gq:0,gu:0,dg:-1}),Yb=$(function(e,r){var n=e,a=r;return a/n}),Xb=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gq:v.gq*a.gq+l.gq*a.gu+i.gq*a.dg,gu:v.gu*a.gq+l.gu*a.gu+i.gu*a.dg,dg:v.dg*a.gq+l.dg*a.gu+i.dg*a.dg}}),At=function(e){var r=e;return{gq:-r.gq,gu:-r.gu,dg:-r.dg}},oi=function(e){var r=e;return At(Ln(r))},Zb=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.de,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),nc=x(function(e,r,n){var a=e,o=r,i=n;return{gq:a,gu:o,dg:i}}),Qb=W(function(e,r,n,a){var o=e,i=r,c=n,l=a,u=o.cM,v=u,s=o.dh,m=s,p=o.df,d=p,b=o.de,h=b;return{gq:v.gq+i*h.gq+c*d.gq+l*m.gq,gu:v.gu+i*h.gu+c*d.gu+l*m.gu,dg:v.dg+i*h.dg+c*d.dg+l*m.dg}}),Kb=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.df,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),fe=0,e1=x(function(e,r,n){var a=e,o=t(Kb,_l(r),n),i=t(Zb,_l(r),n),c=a.dc,l=c,u=Jb(r);u.a;var v=u.b,s=a.cX;if(s.$){var b=s.a,h=t(Yb,v,b),y=S(Qb,l,t(hl,h,i),t(hl,h,o),fe);return t(kr,y,oi(a.dc))}else{var m=s.a,p=jt(t(W$,m,t(ce,.5,v))),d=t(Xb,l,t(er,E$,Ob(f(nc,i,o,p))));return t(kr,ti(a.dc),d)}}),ii=function(e){var r=e;return{gq:Hr(r),gu:Ir(r)}},r1=function(e){var r=e;return{gq:-r.gu,gu:r.gq}},n1=function(e){return e},a1=$(function(e,r){return n1({cM:r,de:e,df:r1(e)})}),t1=$(function(e,r){return t(a1,ii(e),r)}),o1=x(function(e,r,n){var a=e.a,o=e.b;return{eT:t(t1,r,n),aT:w(je(a),je(o))}}),Rn=function(e){var r=e;return r.gq},i1=$(function(e,r){var n=e,a=r;return{gq:n,gu:a}}),Nn=function(e){var r=e;return r.gu},Gn=function(e){var r=e;return r.dg},c1=W(function(e,r,n,a){var o=n.gq,i=n.gu,c=function(v){return f(Ne,dn(Rn(v)),dn(Nn(v)),dn(Gn(v)))},l=f(o1,w(at(r.go),at(r.fo)),ga(0),t(Ib,0,0)),u=t(i1,at(o),at(i));return t(re,c,t(Hb,a,f(e1,e,l,u)))}),l1=$(function(e,r){return{fL:e,cM:r}}),u1=$(function(e,r){var n=r;return t(l1,n.fL,t(la,e,n.cM))}),$1=$(function(e,r){return{fL:r,cM:e}}),v1=t($1,Xr,no),s1=W(function(e,r,n,a){return S(c1,r,n,a,t(u1,f(nc,Le(0),Le(0),Le(e)),v1))}),f1=s1(0),d1=$(function(e,r){return V(r,{aI:t(er,r.aI,t(re,function(n){return t(qr,n.gq,n.gu)},f(f1,r.ao,e.a5,e.em)))})}),m1=$(function(e,r){var n=t(oa,"fix time steps",e)?V(e,{dt:.016}):e,a=r.aE?cb(n):wr;return t(lb,n,t(qb,n,t(d1,n,a(r))))}),g1=$(function(e,r){var n=r;return V(n,{l:t(z,n.C,n.l),C:e})}),p1=$(function(e,r){var n=r;if(e.$)return n;var a=Ki(n.U);return t(zn,g1(V(a,{fJ:a.fJ+" copy"})),n)}),b1=$(function(e,r){var n=r;if(e.$===4){var a=e.a;return t(zn,z$(function(o){return V(o,{fJ:a})}),n)}else return n}),h1=$(function(e,r){return{fJ:e,fR:r}}),_1=Ff,y1=xf,w1=$(function(e,r){var n=r;return V(n,{U:function(){var a=f(Xt,h1,t(j,"name",On),t(j,"page",n.eh));return t(d$,n.U,t(_1,t(F,function(o){if(o.b){var i=o.a,c=o.b;return $e(t(S$,i,c))}else return y1("List of pages is empty")},xr(a)),e))}()})}),ac=function(e){var r=e;return le(ie(r.l),le(g([r.C]),r.q))},x1=$(function(e,r){var n=r;switch(e.$){case 6:return V(n,{c6:t(Du,2,t(fn,function(o){return kn(g([w("name",n$(o.fJ)),w("page",n.dw(o.fR))]))},ac(n.U)))});case 7:return t(w1,n.ca,n);case 8:var a=e.a;return V(n,{ca:a});default:return n}}),C1=function(e){var r=e,n=r.q;if(n.b){var a=n.a,o=n.b;return V(r,{q:o,l:t(z,a,r.l)})}else return V(r,{q:ie(r.l),l:C})},P1=$(function(e,r){var n=r;return e.$===2?t(zn,C1,n):n}),S1=function(e){var r=e,n=r.l;if(n.b){var a=n.a,o=n.b;return V(r,{q:t(z,a,r.q),l:o})}else return V(r,{q:C,l:ie(r.q)})},L1=$(function(e,r){var n=r;return e.$===3?t(zn,S1,n):n}),k1=function(e){var r=e,n=r.l;if(n.b){var a=n.a,o=n.b;return V(r,{l:o,C:a})}else{var i=r.q;if(i.b){var a=i.a,o=i.b;return V(r,{q:o,C:a})}else return r}},z1=$(function(e,r){var n=r;return e.$===1?t(zn,k1,n):n}),T1=$(function(e,r){var n=r,a=ac(n),o=t(za,Pr(a),e),i=t(Gi,o,a);if(i.b){var c=i.a,l=i.b;return{q:l,l:ie(t(Hi,o,a)),C:c}}else return n}),M1=$(function(e,r){var n=r;if(e.$===5){var a=e.a;return t(zn,T1(a),n)}else return n}),D1=$(function(e,r){return t(x1,e,t(b1,e,t(M1,e,t(L1,e,t(P1,e,t(z1,e,t(p1,e,r)))))))}),j1=x(function(e,r,n){switch(r.$){case 0:return V(n,{aE:!n.aE,aj:ai});case 1:return V(n,{aj:k$(C)});case 2:var a=r.a;return V(n,{I:t(T$,L$(a),n.I),aj:ai});default:var o=r.a;return V(n,{I:t(D1,o,n.I)})}}),lo=function(e){return e},A1=function(e){var r=e;return r},B1=function(e){var r=f(rc,1667,25e3,A1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return lo({gq:n,gu:a})},q$=function(e){return e},F1=function(e){return{$:0,a:e}},V1=F1,W1={$:3},E1=W1,q1=W(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),R1=q1,N1=function(e){return{$:1,a:e}},G1=N1,H1=function(e){return t(Tr,"height",Ve(e))},I1=function(e){return ld(fd(e))},U1=I1,J1=function(e){return{$:2,a:e}},O1=J1,Y1=function(e){return t(ln,"",e)},X1=function(e){var r=e.a,n=e.b,a=e.c,o=e.d,i=function(l){return rr(l*1e3)/1e3},c=function(l){return rr(l*1e4)/100};return Y1(g(["rgba(",Pe(c(r)),"%,",Pe(c(n)),"%,",Pe(c(a)),"%,",Pe(i(o)),")"]))},Z1=$(function(e,r){switch(r.$){case 0:return t($m,e,r);case 1:return t(vm,e,r);case 2:return t(sm,e,r);case 3:return t(fm,e,r);case 4:return t(dm,e,r);default:return t(mm,e,r)}}),Q1=$(function(e,r){switch(r.$){case 0:return t(qd,e,r);case 1:return t(Rd,e,r);case 2:return t(Nd,e,r);case 3:return t(Gd,e,r);case 4:return t(Hd,e,r);case 5:return t(Id,e,r);case 6:return t(Ud,e,r);case 7:return t(Jd,e,r);default:return Od(e)}}),K1=x(function(e,r,n){return f(um,e,r,n)}),yl=function(e){var r=e;return r},ua=Sm,xo=S(ua,1,1,1,1),gr=x(function(e,r,n){return t(X,function(a){return t(a,r,n)},e)}),eh=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),rh=$(function(e,r){var n=e,a=r.gq,o=r.gu;return f(eh,n*a/o,n,n*(1-a-o)/o)}),Ja=_m,nh=function(e){var r=e.a,n=e.b,a=e.c;return f(Ja,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},uo=$(function(e,r){return nh(t(rh,e,r))}),R$=$(function(e,r){return{dJ:ve(e.dJ,r.dJ),r:e.r*r.r+e.s*r.u+e.t*r.x,s:e.r*r.s+e.s*r.v+e.t*r.y,t:e.r*r.t+e.s*r.w+e.t*r.z,u:e.u*r.r+e.v*r.u+e.w*r.x,v:e.u*r.s+e.v*r.v+e.w*r.y,w:e.u*r.t+e.v*r.w+e.w*r.z,x:e.x*r.r+e.y*r.u+e.z*r.x,y:e.x*r.s+e.y*r.v+e.z*r.y,z:e.x*r.t+e.y*r.w+e.z*r.z,J:r.J+(e.J*r.r+e.K*r.u+e.L*r.x)*r.b8,K:r.K+(e.J*r.s+e.K*r.v+e.L*r.y)*r.b8,L:r.L+(e.J*r.t+e.K*r.w+e.L*r.z)*r.b8,b8:e.b8*r.b8}}),hr=Dm,ah=function(e){return hr({dS:e.r,dT:e.u,dU:e.x,dV:e.J,dW:e.s,dX:e.v,dY:e.y,dZ:e.K,d_:e.t,d$:e.w,d0:e.z,d1:e.L,d2:0,d3:0,d4:0,d5:1})},Co=_e(function(e,r,n,a,o){var i=a.dJ?1:-1,c=S(ua,a.b8,a.b8,a.b8,i);return Ge(o,e,c,ah(a),a.dJ,r,n)}),N$=lr(function(e,r,n,a,o,i){e:for(;;)switch(o.$){case 0:return i;case 5:var c=o.a,l=o.b,u=e,v=r,s=n,m=t(R$,c,a),p=l,d=i;e=u,r=v,n=s,a=m,o=p,i=d;continue e;case 1:var b=o.b,h=t(z,L(Co,e,r,n,a,b),i.O);return{O:h,X:i.X,f3:i.f3};case 3:var y=o.b,P=t(z,L(Co,e,r,n,a,y),i.X);return{O:i.O,X:P,f3:i.f3};case 2:var _=o.a,k=t(z,L(Co,e,r,n,a,_),i.f3);return{O:i.O,X:i.X,f3:k};default:var A=o.a;return f(Ae,S(N$,e,r,n,a),i,A)}}),th=W(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),G$=th,tc=W(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),oh=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(tc,518,r,n,a)},ih=$(function(e,r){return{$:6,a:e,b:r}}),ch=ih,H$=g([oh({Y:1,Z:0,ab:!1}),S(G$,!1,!1,!1,!1),t(ch,0,1)]),Yn=519,oc=8,I$=15,Hn=7681,lh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ue=Ed,uh=$(function(e,r){return{$:0,a:e,b:r}}),$h=uh({dv:1,dF:0,ee:5}),Ze=bm,vh=$h(g([{ep:t(Ze,-1,-1)},{ep:t(Ze,1,-1)},{ep:t(Ze,-1,1)},{ep:t(Ze,1,1)}])),sh={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ep"},uniforms:{}},fh=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},ic=x(function(e,r,n){var a=e.cZ,o=e.cA,i=e.dd,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return t(te,c(v.bw),t(te,l(v.bj),t(te,l(v.bE),l(v.bF))))};return t(u,n,t(u,r,f(fh,a,o,i)))}),cc=function(e){return f(ic,{cA:e.cA,cZ:e.cZ,dd:e.dd},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF})},lc=function(e){return L(ue,g([cc(e),S(G$,!1,!1,!1,!1)]),sh,lh,vh,{})},dh=lc({bj:Hn,cA:0,cZ:oc,bw:Yn,dd:I$,bE:Hn,bF:Hn}),mh=516,wl=5386,We=7680,gh=function(e){return t(en,2,e+4)},U$=function(e){return lc({bj:We,cA:I$,cZ:oc,bw:mh,dd:gh(e),bE:wl,bF:wl})},ph=x(function(e,r,n){return Ee(g([f(gr,e,n,H$),g([U$(r),dh])]))}),bh=$(function(e,r){return Ee(t(Ot,ph(e),r))}),hh=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(tc,513,r,n,a)},_h=hh({Y:1,Z:0,ab:!0}),yh=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},wh=function(e){var r=e.b6,n=e.bR,a=e.bJ,o=e.bG,i=e.bN,c=e.aQ,l=$(function(u,v){var s=u.a,m=u.b,p=u.c,d=v.a,b=v.b,h=v.c;return yh(s)(m)(p)(d)(b)(h)(r)(n)(a)(o)});return t(l,i,c)},xh=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),xl=$(function(e,r){var n=e,a=r;return f(xh,32774,n,a)}),Ch=1,Cl=771,Ph=770,uc=wh({bG:0,aQ:t(xl,Ch,Cl),bJ:0,bN:t(xl,Ph,Cl),bR:0,b6:0}),Bn=g([_h,uc]),Sh=function(e){var r=e;return r.d7},Lh=function(e){var r=e;return r.d8},J$=function(e){var r=e;return r.d9},kh=function(e){var r=e;return r.ea},zh=function(e){var r=e;return r.eb},O$=function(e){var r=e;return r.ec},De=$(function(e,r){var n=e,a=r;return a-n}),Y$=function(e){return T(t(De,kh(e),Sh(e)),t(De,zh(e),Lh(e)),t(De,O$(e),J$(e)))},Th=function(e){return e},Mh=function(e){return ca({cM:Th({gq:e.J,gu:e.K,dg:e.L}),de:sn({gq:e.r,gu:e.s,dg:e.t}),df:sn({gq:e.u,gu:e.v,dg:e.w}),dh:sn({gq:e.x,gu:e.y,dg:e.z})})},Po=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gq:a.gq*v.gq+a.gu*v.gu+a.dg*v.dg,gu:a.gq*l.gq+a.gu*l.gu+a.dg*l.dg,dg:a.gq*i.gq+a.gu*i.gu+a.dg*i.dg}}),X$=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=a.gq-i.gq,l=a.gu-i.gu,u=a.dg-i.dg,v=n.dh,s=v,m=n.df,p=m,d=n.de,b=d;return{gq:c*b.gq+l*b.gu+u*b.dg,gu:c*p.gq+l*p.gu+u*p.dg,dg:c*s.gq+l*s.gu+u*s.dg}}),Z$=$(function(e,r){return{cM:t(X$,e,ia(r)),de:t(Po,e,Pn(r)),df:t(Po,e,Sn(r)),dh:t(Po,e,Ln(r))}}),pt=x(function(e,r,n){return{gq:e,gu:r,dg:n}}),Bt=function(e){var r=e;return r},ge=$(function(e,r){var n=e,a=r;return t(Qe,n,a)}),bt=$(function(e,r){return I(e,r)<0?e:r}),we=$(function(e,r){var n=e,a=r;return t(bt,n,a)}),Dh=$(function(e,r){var n=Bt(r),a=Bt(e);return{d7:t(ge,a.d7,n.d7),d8:t(ge,a.d8,n.d8),d9:t(ge,a.d9,n.d9),ea:t(we,a.ea,n.ea),eb:t(we,a.eb,n.eb),ec:t(we,a.ec,n.ec)}}),cr=function(e){var r=e;return r},jh=function(e){var r=e;return T(r.gq,r.gu,r.dg)},mn=$(function(e,r){var n=e,a=r;return a+n}),Ah=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=gt(je(a)),c=gt(je(n)),l=gt(je(o)),u=jh(r),v=u.a,s=u.b,m=u.c;return{d7:t(mn,c,v),d8:t(mn,i,s),d9:t(mn,l,m),ea:t(De,c,v),eb:t(De,i,s),ec:t(De,l,m)}}),Pl=W(function(e,r,n,a){var o=n.e_,i=2*n.fm*r,c=2*n.fl*r,l=2*n.fk*r,u=o.dg*r,v=o.gu*r,s=o.gq*r,m=cr(Ln(e)),p=K(l*m.gq)+K(c*m.gu)+K(i*m.dg),d=cr(Sn(e)),b=K(l*d.gq)+K(c*d.gu)+K(i*d.dg),h=cr(Pn(e)),y=K(l*h.gq)+K(c*h.gu)+K(i*h.dg),P=t(Ah,T(y,b,p),t(X$,e,f(pt,s,v,u)));if(a.$)return Z(P);var _=a.a;return Z(t(Dh,_,P))}),ci=W(function(e,r,n,a){e:for(;;)if(a.b){var o=a.a,i=a.b;switch(o.$){case 0:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 1:var c=o.a,l=S(Pl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 2:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 3:var c=o.a,l=S(Pl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 4:var u=o.a,d=e,b=r,h=S(ci,e,r,n,u),y=i;e=d,r=b,n=h,a=y;continue e;default:var v=o.a,s=o.b,m=t(Z$,Mh(v),e),p=r*v.b8,d=e,b=r,h=S(ci,m,p,n,g([s])),y=i;e=d,r=b,n=h,a=y;continue e}}else return n}),Tn=ym,Mn=wm,Dn=xm,Q$=function(e){return{$:4,a:e}},Bh=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,o=a,i=t(z,n,r);e=o,r=i;continue e}else return r}),Oa=function(e){return Q$(t(Bh,e,C))},Fh={dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:0,K:0,L:0,b8:1},Sl=lc({bj:Hn,cA:0,cZ:oc,bw:Yn,dd:255,bE:Hn,bF:Hn}),Vh=function(e){var r=e,n=t(Qe,K(r.gq),t(Qe,K(r.gu),K(r.dg)));if(n){var a=r.dg/n,o=r.gu/n,i=r.gq/n,c=vr(i*i+o*o+a*a);return c*n}else return fe},Xe={bJ:0,eZ:!1,bR:0,cV:0,b6:0,c8:0,gq:0,gu:0,dg:0},ar=$(function(e,r){var n=e,a=r;return hr({dS:n.gq,dT:n.b6,dU:a.gq,dV:a.b6,dW:n.gu,dX:n.bR,dY:a.gu,dZ:a.bR,d_:n.dg,d$:n.bJ,d0:a.dg,d1:a.bJ,d2:n.c8,d3:n.cV,d4:a.c8,d5:a.cV})}),pa=w({bo:t(ar,Xe,Xe),bW:t(ar,Xe,Xe),bX:t(ar,Xe,Xe),bY:t(ar,Xe,Xe)},S(ua,0,0,0,0)),K$=514,ev=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(tc,515,r,n,a)},rv=240,Wh=g([ev({Y:1,Z:0,ab:!0}),cc({bj:We,cA:rv,cZ:0,bw:K$,dd:0,bE:We,bF:We}),uc]),Eh=$(function(e,r){var n=e,a=r.fK,o=r.fh,i=r.eS,c=je(a),l=c,u=je(o),v=u,s=n.cX;if(s.$){var p=s.a;return Uo(v)?hr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:0,d1:-1,d2:0,d3:0,d4:0,d5:1}):hr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:-2/(v-l),d1:-(v+l)/(v-l),d2:0,d3:0,d4:0,d5:1})}else{var m=s.a;return Uo(v)?hr({dS:1/(i*m),dT:0,dU:0,dV:0,dW:0,dX:1/m,dY:0,dZ:0,d_:0,d$:0,d0:-1,d1:-2*l,d2:0,d3:0,d4:-1,d5:0}):hr({dS:1/(i*m),dT:0,dU:0,dV:0,dW:0,dX:1/m,dY:0,dZ:0,d_:0,d$:0,d0:-(v+l)/(v-l),d1:-2*v*l/(v-l),d2:0,d3:0,d4:-1,d5:0})}}),tt=$(function(e,r){return(1&e>>r)===1?0:1}),qh=function(e){return g([ev({Y:1,Z:0,ab:!0}),cc({bj:We,cA:rv,cZ:e,bw:K$,dd:0,bE:We,bF:We}),uc])},Rh=x(function(e,r,n){return Ee(t(X,function(a){var o=a<<4,i=S(ua,t(tt,a,0),t(tt,a,1),t(tt,a,2),t(tt,a,3));return f(gr,e,w(r,i),qh(o))},t(bn,1,t(en,2,n)-1)))}),In=function(e){var r=e;return r},Nh=jm,nv=sn({gq:0,gu:1,dg:0}),$c=nv,Gh={cM:Xr,de:Qi,df:$c,dh:no},Ya=function(e){var r=e;return r},Hh=function(e){var r=Ya(ia(e)),n=cr(Ln(e)),a=cr(Sn(e)),o=cr(Pn(e));return hr({dS:o.gq,dT:a.gq,dU:n.gq,dV:r.gq,dW:o.gu,dX:a.gu,dY:n.gu,dZ:r.gu,d_:o.dg,d$:a.dg,d0:n.dg,d1:r.dg,d2:0,d3:0,d4:0,d5:1})},Ih=$(function(e,r){var n=r;return Hh(t(Z$,n,e))}),Uh=function(e){return t(Ih,Gh,e)},Jh=function(e){var r=e;return r.dc},Oh=function(e){var r=e;return Pn(r)},Yh=function(e){var r=e;return Sn(r)},Xh=function(e){var r=Jh(e.ao),n=ca({cM:ti(r),de:Oh(r),df:Yh(r),dh:At(oi(r))}),a=Oa(e.aY),o=a,i=S(ci,n,1,E,g([o]));if(i.$===1)return C;var c=i.a,l=Uh(r),u=t(ce,.99,t(ge,je(e.$7),jt(J$(c)))),v=Y$(c),s=v.a,m=v.b,p=v.c,d=Vh(f(nc,s,m,p)),b=t(ce,1.01,t(mn,d,jt(O$(c)))),h=t(Eh,e.ao,{eS:e.eS,fh:b,fK:u}),y=Nh(h).d5,P=y?cr(At(oi(r))):In(ti(r)),_=function(){var de=e.ge;switch(de.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var Ce=de.a;return w(3,Ce);case 4:var Ce=de.a;return w(4,Ce);default:return w(5,0)}}(),k=_.a,A=_.b,H=e.ff,G=H,N=t(uo,G,e.gn),U=N,J=hr({dS:0,dT:P.gq,dU:Tn(U),dV:e.eD,dW:0,dX:P.gu,dY:Mn(U),dZ:dn(d),d_:0,d$:P.dg,d0:Dn(U),d1:k,d2:0,d3:y,d4:0,d5:A}),q=Ge(N$,J,l,h,Fh,o,{O:C,X:C,f3:C}),Q=e.fC;switch(Q.$){case 0:var ae=Q.a;return Ee(g([f(gr,q.O,w(ae,xo),Bn),f(gr,q.X,pa,Bn)]));case 1:var ae=Q.a;return Ee(g([f(gr,q.O,pa,Bn),g([Sl]),f(gr,q.f3,ae.bo,H$),g([U$(0)]),f(gr,q.O,w(ae,xo),Wh),f(gr,q.X,pa,Bn)]));default:var he=Q.a,ye=Q.b;return Ee(g([f(gr,q.O,w(ye,xo),Bn),g([Sl]),t(bh,q.f3,he),f(Rh,q.O,ye,Pr(he)),f(gr,q.X,pa,Bn)]))}},Zh=function(e){return t(Tr,"width",Ve(e))},av=$(function(e,r){var n=g([G1(1),O1(0),V1(!0),S(R1,0,0,0,0)]),a=function(){var k=e.eQ;switch(k.$){case 0:return T(n,"0",1);case 1:return T(t(z,E1,n),"1",1);default:var A=k.a;return T(n,"0",A)}}(),o=a.a,i=a.b,c=a.c,l=e.aT,u=l.a,v=l.b,s=yl(v),m=t(pe,"height",Ve(s)+"px"),p=yl(u),d=p/s,b=t(io,function(k){return Xh({eS:d,ao:e.ao,$7:e.$7,aY:k.aY,ff:k.ff,fC:k.fC,eD:c,ge:k.ge,gn:k.gn})},r),h=t(pe,"width",Ve(p)+"px"),y=e.eU,P=y,_=X1(P);return f(U1,"div",g([t(pe,"padding","0px"),h,m]),g([w(i,f(K1,o,g([Zh(rr(p*c)),H1(rr(s*c)),h,m,t(pe,"display","block"),t(pe,"background-color",_)]),b))]))}),Qh=function(e){return{$:2,a:e}},tv=function(e){return Qh(e)},Kh=function(e){return t(av,{eQ:tv(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aT:e.aT},g([{aY:e.aY,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},Ft=function(e){return e},e3=function(e){var r=e;return r},vc=function(e){var r=e;return e3(r.eT)},ov=W(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),r3=W(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),iv=W(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),cv=W(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),n3=W(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),a3=W(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),t3=W(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),sc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return S(t3,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return S(ov,n,r,o,1);case 3:var n=e.a,a=e.b,o=e.c;return S(r3,n,a,o,1);case 4:var n=e.a,a=e.b,o=e.c;return S(iv,n,a,o,1);case 5:var n=e.a,a=e.b,o=e.c;return S(a3,n,a,o,1);case 6:var n=e.a,a=e.b,o=e.c;return S(cv,n,a,o,1);case 7:var n=e.a,a=e.b,o=e.c;return S(n3,n,a,o,1);case 8:return e;case 9:return e;default:return e}},fc={$:0},o3=oe(function(e,r,n,a,o,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Bt(c(u)),m=t(we,s.ea,e),p=t(ge,s.d7,r),d=t(we,s.eb,n),b=t(ge,s.d8,a),h=t(we,s.ec,o),y=t(ge,s.d9,i),P=c,_=v;e=m,r=p,n=d,a=b,o=h,i=y,c=P,l=_;continue e}else return{d7:r,d8:a,d9:i,ea:e,eb:n,ec:o}}),i3=x(function(e,r,n){var a=Bt(e(r));return Gt(o3,a.ea,a.d7,a.eb,a.d8,a.ec,a.d9,e,n)}),ya=$(function(e,r){var n=e,a=r;return I(a,n)<1}),lv=function(e){return t(ya,e.d7,e.ea)&&t(ya,e.d8,e.eb)&&t(ya,e.d9,e.ec)?e:{d7:t(ge,e.ea,e.d7),d8:t(ge,e.eb,e.d8),d9:t(ge,e.ec,e.d9),ea:t(we,e.ea,e.d7),eb:t(we,e.eb,e.d8),ec:t(we,e.ec,e.d9)}},Ma=function(e){var r=e;return r},uv=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=Rn(n),c=Nn(n),l=Gn(n),u=Rn(a),v=Nn(a),s=Gn(a),m=Rn(o),p=Nn(o),d=Gn(o);return lv({d7:t(ge,i,t(ge,u,m)),d8:t(ge,c,t(ge,v,p)),d9:t(ge,l,t(ge,s,d)),ea:t(we,i,t(we,u,m)),eb:t(we,c,t(we,v,p)),ec:t(we,l,t(we,s,d))})},$v=Cm,Ie=function(e){return $v(Ya(e))},vv=function(e){var r=e;return r},$o=function(e){return $v(vv(e))},c3=$(function(e,r){var n=e,a=r;return{gq:a.gu*n.dg-a.dg*n.gu,gu:a.dg*n.gq-a.gq*n.dg,dg:a.gq*n.gu-a.gu*n.gq}}),li=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu,dg:a.dg-n.dg}}),sv=function(e){return e},l3={gq:0,gu:0,dg:0},u3=$(function(e,r){var n=e,a=r,o=t(Qe,K(a.gq),t(Qe,K(a.gu),K(a.dg)));if(o){var i=a.dg/o,c=a.gu/o,l=a.gq/o,u=vr(l*l+c*c+i*i);return{gq:n*l/u,gu:n*c/u,dg:n*i/u}}else return l3}),$3=u3(sv(1)),fv=x(function(e,r,n){var a=t(li,r,n),o=t(li,e,r);return $3(t(c3,a,o))}),v3=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=$o(f(fv,n,a,o));return T({o:i,ep:Ie(n)},{o:i,ep:Ie(a)},{o:i,ep:Ie(o)})},s3=$(function(e,r){return{$:2,a:e,b:r}}),dv=s3({dv:3,dF:0,ee:4}),f3=function(e){if(e.b){var r=e.a,n=e.b,a=dv(t(X,v3,e)),o=f(i3,uv,r,n);return S(ov,o,e,a,0)}else return fc},Ye=x(function(e,r,n){return T(e,r,n)}),Me=x(function(e,r,n){var a=e,o=r,i=n;return{gq:a,gu:o,dg:i}}),mv=function(){var e=Le(1),r=Le(1),n=Le(1),a=t(ce,-.5,e),o=t(ce,-.5,r),i=t(ce,-.5,n),c=f(Me,i,o,a),l=t(ce,.5,e),u=f(Me,i,o,l),v=t(ce,.5,r),s=f(Me,i,v,a),m=f(Me,i,v,l),p=t(ce,.5,n),d=f(Me,p,o,a),b=f(Me,p,v,a),h=f(Me,p,o,l),y=f(Me,p,v,l);return sc(f3(g([f(Ye,c,b,d),f(Ye,c,s,b),f(Ye,u,h,y),f(Ye,u,y,m),f(Ye,d,b,y),f(Ye,d,y,h),f(Ye,c,m,s),f(Ye,c,u,m),f(Ye,c,d,h),f(Ye,c,h,u),f(Ye,s,y,b),f(Ye,s,m,y)])))}(),ot={$:0},d3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),m3=x(function(e,r,n){var a=r.a,o=r.b,i=r.c,c=e(i),l=e(o),u=e(a),v=$o(f(fv,u,l,c)),s={o:v,ep:Ie(u)},m={o:v,ep:Ie(l)},p={o:v,ep:Ie(c)};return t(z,s,t(z,m,t(z,p,n)))}),dc=function(e){var r=e;return r.E},g3=W(function(e,r,n,a){if(r.$===1)return E;var o=r.a;if(n.$===1)return E;var i=n.a;if(a.$===1)return E;var c=a.a;return Z(f(e,o,i,c))}),wn=4294967295>>>32-sr,Da=Ps,p3=x(function(e,r,n){e:for(;;){var a=wn&r>>>e,o=t(Da,a,n);if(o.$){var v=o.a;return t(Da,wn&r,v)}else{var i=o.a,c=e-sr,l=r,u=i;e=c,r=l,n=u;continue e}}}),gv=function(e){return e>>>5<<5},Fr=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d;return e<0||I(e,n)>-1?E:I(e,gv(n))>-1?Z(t(Da,wn&e,i)):Z(f(p3,a,e,o))}),mc=function(e){var r=e;return r.am},So=$(function(e,r){return t(Fr,e,mc(r))}),pv=function(e){var r=function(n){var a=n.a,o=n.b,i=n.c;return S(g3,x(function(c,l,u){return T(c,l,u)}),t(So,a,e),t(So,o,e),t(So,i,e))};return t(yn,r,dc(e))},b3=x(function(e,r,n){e:for(;;){var a=t(Vi,be,e),o=a.a,i=a.b;if(I(Sr(o),be)<0)return t(Wi,!0,{A:r,m:n,p:o});var c=i,l=t(z,_n(o),r),u=n+1;e=c,r=l,n=u;continue e}}),ja=function(e){return e.b?f(b3,e,C,0):Fi},h3=x(function(e,r,n){return e(r(n))}),_3=$(function(e,r){return!t(Ou,t(h3,fg,e),r)}),gc=function(e){var r=e.a;return r},pc=$(function(e,r){var n=gc(e),a=function(o){var i=o.a,c=o.b,l=o.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return t(_3,a,r)?{E:r,am:e}:{E:t(co,a,r),am:e}}),y3=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Xa=y3({dv:1,dF:3,ee:4}),ht=$(function(e,r){var n=In(r),a=In(e);return w(T(a.gq,a.gu,a.dg),T(n.gq,n.gu,n.dg))}),Ll=f(Ja,0,0,0),Lo=lr(function(e,r,n,a,o,i){var c=i.a,l=i.b,u=i.c,v=t(aa,t(ht,e,r),o);if(v.$){var m={o:Ll,ep:Ie(r)},p={o:Ll,ep:Ie(e)},d=u+1,b=u;return T(t(z,T(n,b,d),t(z,T(n,d,a),c)),t(z,m,t(z,p,l)),u+2)}else{var s=v.a;return T(t(z,T(n,s,a),c),l,u)}}),w3=_e(function(e,r,n,a,o){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),p=e(c),d=a+2,b=a+1,h=a,y=e,P=r,_=v,k=a+3,A=Ge(Lo,s,p,d,h,r,Ge(Lo,m,s,b,d,r,Ge(Lo,p,m,h,b,r,o)));e=y,r=P,n=_,a=k,o=A;continue e}else{var H=o,G=H.a,N=H.b;return w(G,ie(N))}}),x3=_e(function(e,r,n,a,o){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),p=e(c),d=n+2,b=n+1,h=n,y=f(vn,t(ht,p,s),d,f(vn,t(ht,s,m),b,f(vn,t(ht,m,p),h,o))),P=t(z,T(h,b,d),a),_=e,k=v,A=n+3,H=P,G=y;e=_,r=k,n=A,a=H,o=G;continue e}else return T(a,o,n)}),cn=x(function(e,r,n){var a=pv(n),o=f(Yr,m3(r),C,a),i=L(x3,r,a,0,C,to),c=i.a,l=i.b,u=i.c,v=L(w3,r,l,a,0,T(c,C,u)),s=v.a,m=v.b,p=Yi(m)?o:le(o,m);return f(d3,e,t(pc,ja(p),s),t(Xa,p,s))}),ui=function(e){return{E:t(X,function(r){return T(3*r,3*r+1,3*r+2)},t(bn,0,Pr(e)-1)),am:ja(Ee(t(X,function(r){var n=r.a,a=r.b,o=r.c;return g([n,a,o])},e)))}},bv=function(e){switch(e.$){case 0:return ot;case 1:var a=e.a,r=e.b,n=t(X,Ma,r);return f(cn,a,wr,ui(n));case 2:var a=e.a,r=e.b,n=t(X,Ma,r);return f(cn,a,wr,ui(n));case 3:var a=e.a,o=e.b;return f(cn,a,wr,o);case 4:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 5:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 6:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 7:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 8:return ot;case 9:return ot;default:return ot}},kl=bv(mv),bc=function(e){var r=e;return r.aT},hv={$:0},D=hv,Se=$(function(e,r){return{$:1,a:e,b:r}}),C3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bO"}},P3=1029,S3=function(e){return{$:5,a:e}},_v=function(e){var r=e;return S3(r)},L3=_v(P3),k3=1028,z3=_v(k3),Ue=x(function(e,r,n){return r===1?e?t(z,L3,n):t(z,z3,n):n}),yv={src:`
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
    `,attributes:{position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ko=W(function(e,r,n,a){return t(Se,r,oe(function(o,i,c,l,u,v,s,m){return L(ue,f(Ue,l,a,m),yv,C3,n,{bO:e,b:c,c:i,d:v,e:o,f:u})}))}),hc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aD"}},wv={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Dr=W(function(e,r,n,a){return t(Se,r,oe(function(o,i,c,l,u,v,s,m){return L(ue,f(Ue,l,a,m),wv,hc,n,{aD:e,b:c,c:i,d:v,e:o,f:u})}))}),xv=$(function(e,r){return{$:3,a:e,b:r}}),T3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aD",pointRadius:"b3",sceneProperties:"e"}},Cv={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b3",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},M3=W(function(e,r,n,a){return t(xv,n,oe(function(o,i,c,l,u,v,s,m){return L(ue,m,Cv,T3,a,{aD:e,b:c,c:i,b3:r,d:v,e:o,f:u})}))}),_c={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aW",sceneProperties:"e"}},Za=function(e){var r=e;return r},vo=Pm,jr=_e(function(e,r,n,a,o){return t(Se,n,oe(function(i,c,l,u,v,s,m,p){return L(ue,f(Ue,u,o,p),wv,_c,a,{aW:t(vo,Za(r),e),b:l,c,d:s,e:i,f:v})}))}),D3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aW",pointRadius:"b3",sceneProperties:"e"}},j3=_e(function(e,r,n,a,o){return t(xv,a,oe(function(i,c,l,u,v,s,m,p){return L(ue,p,Cv,D3,o,{aW:t(vo,Za(r),e),b:l,c,b3:n,d:s,e:i,f:v})}))}),Pv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",materialColor:"cB",sceneProperties:"e",viewMatrix:"f"}},Sv={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},it=W(function(e,r,n,a){return t(Se,r,oe(function(o,i,c,l,u,v,s,m){var p=s.a,d=s.b;return L(ue,f(Ue,l,a,m),Sv,Pv,n,{R:d,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cB:e,b:c,c:i,d:v,e:o,f:u})}))}),Lv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",materialColorTexture:"cC",normalMapTexture:"a3",sceneProperties:"e",useNormalMap:"a9",viewMatrix:"f"}},kv={src:`
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
    `,attributes:{normal:"o",position:"ep",tangent:"eF",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},A3=lr(function(e,r,n,a,o,i){return t(Se,a,oe(function(c,l,u,v,s,m,p,d){var b=p.a,h=p.b;return L(ue,f(Ue,v,i,d),kv,Lv,o,{R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cC:e,b:u,c:l,a3:r,d:m,e:c,a9:n,f:s})}))}),zv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"ch",constantBaseColor:"ck",constantMetallic:"cl",constantRoughness:"cm",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallicTexture:"cG",normalMapTexture:"a3",roughnessTexture:"c1",sceneProperties:"e",useNormalMap:"a9",viewMatrix:"f"}},B3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return t(Se,u,oe(function(m,p,d,b,h,y,P,_){var k=P.a,A=P.b;return L(ue,f(Ue,b,s,_),kv,zv,v,{ch:e,ck:r,cl:i,cm:a,R:A,bo:k.bo,bW:k.bW,bX:k.bX,bY:k.bY,cG:o,b:d,c:p,a3:c,d:y,c1:n,e:m,a9:l,f:h})}))}}}}}}}}}}},Tv={src:`
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
    `,attributes:{},uniforms:{baseColor:"cg",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallic:"cF",roughness:"c0",sceneProperties:"e",viewMatrix:"f"}},ct=lr(function(e,r,n,a,o,i){return t(Se,a,oe(function(c,l,u,v,s,m,p,d){var b=p.a,h=p.b;return L(ue,f(Ue,v,i,d),Sv,Tv,o,{cg:e,R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cF:n,b:u,c:l,d:m,c0:r,e:c,f:s})}))}),F3=function(e){return{$:0,a:e}},zl=$(function(e,r){return{$:1,a:e,b:r}}),wa=$(function(e,r){if(r.$){var n=r.a.D;return w(n,1)}else return r.a,w(e,0)}),V3=function(e){return S(ua,Tn(e),Mn(e),Dn(e),1)},yc=S(ua,0,0,0,0),_t=$(function(e,r){if(r.$){var a=r.a.D;return w(a,yc)}else{var n=r.a;return w(e,V3(n))}}),Mv=$(function(e,r){var n=w(e,r);if(n.a.$){var o=n.a.a.D;return t(zl,w(o,yc),t(wa,o,r))}else if(n.b.$){var o=n.b.a.D;return t(zl,t(_t,o,e),t(wa,o,r))}else{var a=n.a.a;return n.b.a,F3(a)}}),W3=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lt=W(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),E3=W(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),q3=function(e){return t(Ze,e,1)},$i=t(Ze,0,0),Fn=$(function(e,r){if(r.$){var a=r.a.D;return w(a,$i)}else{var n=r.a;return w(e,q3(n))}}),Dv=W(function(e,r,n,a){var o=S(E3,e,r,n,a);if(o.a.$){var u=o.a.a.D;return S(lt,w(u,yc),t(Fn,u,r),t(Fn,u,n),t(wa,u,a))}else if(o.b.$){var u=o.b.a.D;return S(lt,t(_t,u,e),w(u,$i),t(Fn,u,n),t(wa,u,a))}else if(o.c.$){var u=o.c.a.D;return S(lt,t(_t,u,e),t(Fn,u,r),w(u,$i),t(wa,u,a))}else if(o.d.$){var u=o.d.a.D;return S(lt,t(_t,u,e),t(Fn,u,r),t(Fn,u,n),w(u,1))}else{var i=o.a.a,c=o.b.a,l=o.c.a;return o.d.a,f(W3,i,c,l)}}),R3={src:`
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
    `,attributes:{},uniforms:{backlight:"cd",colorTexture:"bO",sceneProperties:"e"}},zo=_e(function(e,r,n,a,o){return t(Se,n,oe(function(i,c,l,u,v,s,m,p){return L(ue,f(Ue,u,o,p),yv,R3,a,{cd:Za(r),bO:e,b:l,c,d:s,e:i,f:v})}))}),jv={src:`
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
    `,attributes:{normal:"o",position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},N3=W(function(e,r,n,a){return t(Se,r,oe(function(o,i,c,l,u,v,s,m){var p=s.a,d=s.b;return L(ue,f(Ue,l,a,m),jv,Lv,n,{R:d,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cC:e,b:c,c:i,a3:e,d:v,e:o,a9:0,f:u})}))}),G3=hi(function(e,r,n,a,o,i,c,l,u){return t(Se,c,oe(function(v,s,m,p,d,b,h,y){var P=h.a,_=h.b;return L(ue,f(Ue,p,u,y),jv,zv,l,{ch:e,ck:r,cl:i,cm:a,R:_,bo:P.bo,bW:P.bW,bX:P.bX,bY:P.bY,cG:o,b:m,c:s,a3:e,d:b,c1:n,e:v,a9:0,f:d})}))}),Aa=x(function(e,r,n){var a=e,o=r;return n<=.5?a+n*(o-a):o+(1-n)*(a-o)}),H3=function(e){var r=e;return f(Aa,r.ea,r.d7,.5)},I3=function(e){var r=e;return f(Aa,r.eb,r.d8,.5)},U3=function(e){var r=e;return f(Aa,r.ec,r.d9,.5)},J3=function(e){return f(Me,H3(e),I3(e),U3(e))},O=function(e){var r=Y$(e),n=r.a,a=r.b,o=r.c;return{e_:Ya(J3(e)),fk:n/2,fl:a/2,fm:o/2}},wc=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.D;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var o=r.a,c=r.c,a=r.d;return S(ko,l,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return S(ko,l,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return S(ko,l,O(o),c,a);case 8:return D;case 9:return D;default:return D}}else{var n=e.b.a;switch(r.$){case 0:return D;case 1:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 8:var o=r.a,c=r.c;return S(Dr,n,O(o),c,0);case 9:var o=r.a,c=r.c;return S(Dr,n,O(o),c,0);default:var o=r.a,i=r.b,c=r.d;return S(M3,n,i,O(o),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.D,v=e.c;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var o=r.a,c=r.c,a=r.d;return L(zo,l,v,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return L(zo,l,v,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return L(zo,l,v,O(o),c,a);case 8:return D;case 9:return D;default:return D}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return D;case 1:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 8:var o=r.a,c=r.c;return L(jr,u,v,O(o),c,0);case 9:var o=r.a,c=r.c;return L(jr,u,v,O(o),c,0);default:var o=r.a,i=r.b,c=r.d;return L(j3,u,v,i,O(o),c)}}case 2:e.a;var s=e.b,G=e.c,m=t(Mv,s,G);if(m.$){var b=m.a,h=b.a;b.b;var y=m.b,P=y.a,_=y.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var o=r.a,c=r.c,d=r.d;return S(N3,h,O(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return Ge(A3,h,P,_,O(o),c,d);case 8:return D;case 9:return D;default:return D}}else{var p=m.a;switch(r.$){case 0:return D;case 1:return D;case 2:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 3:return D;case 4:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 5:return D;case 6:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 8:return D;case 9:return D;default:return D}}default:e.a;var k=e.b,A=e.c,H=e.d,G=e.e,N=S(Dv,k,A,H,G);if(N.$){var Q=N.a,ae=Q.a,he=Q.b,ye=N.b,de=ye.a,Ce=ye.b,Oe=N.c,Re=Oe.a,Zr=Oe.b,Qr=N.d,P=Qr.a,_=Qr.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var o=r.a,c=r.c,a=r.d;return hs(G3,ae,he,de,Ce,Re,Zr,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return B3(ae)(he)(de)(Ce)(Re)(Zr)(P)(_)(O(o))(c)(a);case 8:return D;case 9:return D;default:return D}}else{var U=N.a,J=N.b,q=N.c;switch(r.$){case 0:return D;case 1:return D;case 2:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 3:return D;case 4:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 5:return D;case 6:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 8:return D;case 9:return D;default:return D}}}}),To=function(e){var r=e;return r.gq},Mo=function(e){var r=e;return r.gu},Do=function(e){var r=e;return r.dg},O3=function(e){var r=e,n=Do(r.dh),a=Mo(r.dh),o=To(r.dh),i=Do(r.df),c=Mo(r.df),l=To(r.df),u=Do(r.de),v=Mo(r.de),s=To(r.de);return s*c*n+v*i*o+u*l*a-u*c*o-v*l*n-s*i*a>0},Y3=function(e){var r=Ya(ia(e)),n=cr(Ln(e)),a=cr(Sn(e)),o=cr(Pn(e));return{dJ:O3(e),r:o.gq,s:o.gu,t:o.dg,u:a.gq,v:a.gu,w:a.dg,x:n.gq,y:n.gu,z:n.dg,J:r.gq,K:r.gu,L:r.dg,b8:1}},Vn=$(function(e,r){return{$:5,a:e,b:r}}),Av=$(function(e,r){var n=r;switch(n.$){case 0:return D;case 5:var a=n.a,o=n.b,i=t(R$,a,e);return t(Vn,i,o);case 1:return t(Vn,e,n);case 3:return t(Vn,e,n);case 2:return t(Vn,e,n);default:return t(Vn,e,n)}}),Bv=$(function(e,r){return t(Av,Y3(e),r)}),so=function(e){return{$:2,a:e}},X3=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=r.e_;return{e_:{gq:n*i.gq,gu:a*i.gu,dg:o*i.dg},fk:n*r.fk,fl:a*r.fl,fm:o*r.fm}}),Z3=km,Q3=Lm,Tl=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,p=e.c,d=Q3(a),b=d.gq,h=d.gu,y=d.dg,P=d.eN,_=Z3({eN:P,gq:b*s,gu:h*m,dg:y*p});return Gt(r,n,_,o,i,c,l,u,v)}}}}}}}}}},vi=$(function(e,r){switch(r.$){case 0:return hv;case 5:var n=r.a,a=r.b;return t(Vn,n,t(vi,e,a));case 1:var o=r.a,i=r.b;return t(Se,t(X3,e,o),t(Tl,e,i));case 3:return r;case 2:var i=r.a;return so(t(Tl,e,i));default:var c=r.a;return Q$(t(X,vi(e),c))}}),xc=$(function(e,r){var n=r;return t(vi,e,n)}),Cc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Fv=7683,Vv=7682,K3=f(ic,{cA:0,cZ:0,dd:15},{bj:We,bw:Yn,bE:We,bF:Fv},{bj:We,bw:Yn,bE:We,bF:Vv}),e2=f(ic,{cA:0,cZ:0,dd:15},{bj:We,bw:Yn,bE:We,bF:Vv},{bj:We,bw:Yn,bE:We,bF:Fv}),Pc=$(function(e,r){return e?t(z,e2,r):t(z,K3,r)}),r2={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},n2=function(e){if(e.$){var r=e.c;return Z(oe(function(n,a,o,i,c,l,u,v){return L(ue,t(Pc,i,v),r2,Cc,r,{b:o,c:a,d:l,e:n,b9:u,f:c})}))}else return E},Vt=function(e){var r=n2(e);if(r.$)return D;var n=r.a;return so(n)},a2=W(function(e,r,n,a){var o=t(wc,n,mv),i=function(){var s=w(e,r);return s.a?s.b?Oa(g([o,Vt(kl)])):o:s.b?Vt(kl):D}(),c=bc(a),l=c.a,u=c.b,v=c.c;return t(Bv,vc(a),t(xc,T(l,u,v),i))}),t2=$(function(e,r){return S(a2,!0,!0,e,r)}),si=function(e){return{$:0,a:e}},Wv=$(function(e,r){return{$:0,a:e,b:r}}),o2=function(e){var r=Oi(e),n=r.cY,a=r.co,o=r.ci;return f(Ja,n,a,o)},Ev=function(e){return t(Wv,0,si(o2(e)))},i2=function(e){var r=e;return r.k},xa=function(e){var r=e;return Hr(r)},c2=$(function(e,r){var n=e.ep,a=e.o;return t(z,{o:$o(a),ep:Ie(n)},r)}),l2=Nt(function(e,r,n,a,o,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Dn(l.ep),s=Mn(l.ep),m=Tn(l.ep),p=t(bt,e,m),d=t(Qe,r,m),b=t(bt,n,s),h=t(Qe,a,s),y=t(bt,o,v),P=t(Qe,i,v),_=u;e=p,r=d,n=b,a=h,o=y,i=P,c=_;continue e}else return lv({d7:r,d8:a,d9:i,ea:e,eb:n,ec:o})}),qv=$(function(e,r){var n=Dn(e.ep),a=Mn(e.ep),o=Tn(e.ep);return _i(l2,o,o,a,a,n,n,r)}),u2=function(e){var r=f(ku,c2,C,mc(e));if(r.b){var n=r.a,a=r.b,o=t(Xa,r,dc(e)),i=t(qv,n,a);return S(iv,i,e,o,0)}else return fc},Ml=$(function(e,r){var n=e,a=r,o=n.df,i=o,c=n.de,l=c;return{gq:a.gq*l.gq+a.gu*i.gq,gu:a.gq*l.gu+a.gu*i.gu,dg:a.gq*l.dg+a.gu*i.dg}}),Wt=function(e){var r=e;return Ir(r)},ba=function(e){var r=e;return r},fi=function(e){return Ke(2*Rr*e)},Dl=_$({cM:Xr,de:Qi,df:$c}),Rv=function(){var e=72,r=t(W$,e,fi(1)),n=Le(1),a=ba(y$),o=ba(E$),i=Le(1),c=t(ce,.5,i),l=f(Me,fe,fe,c),u=t(ce,-.5,i),v=f(Me,fe,fe,u),s=function(d){var b=t(ce,d,r),h=ba(t(Ml,Dl,ii(b))),y=t(ce,xa(b),n),P=t(ce,Wt(b),n),_=f(Me,y,P,c),k=f(Me,y,P,u),A=t(za,e,d+1),H=t(ce,A,r),G=ba(t(Ml,Dl,ii(H))),N=t(ce,xa(H),n),U=t(ce,Wt(H),n),J=f(Me,N,U,u),q=f(Me,N,U,c);return g([T({o,ep:v},{o,ep:J},{o,ep:k}),T({o:h,ep:k},{o:G,ep:J},{o:G,ep:q}),T({o:h,ep:k},{o:G,ep:q},{o:h,ep:_}),T({o:a,ep:l},{o:a,ep:_},{o:a,ep:q})])},m=t(X,s,t(bn,0,e-1)),p=ui(Ee(m));return sc(u2(p))}(),jl=bv(Rv),$2=function(e){var r=e,n=K(r.dg),a=K(r.gu),o=K(r.gq);if(I(o,a)<1)if(I(o,n)<1){var i=vr(r.dg*r.dg+r.gu*r.gu);return{gq:0,gu:-r.dg/i,dg:r.gu/i}}else{var i=vr(r.gu*r.gu+r.gq*r.gq);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}else if(I(a,n)<1){var i=vr(r.dg*r.dg+r.gq*r.gq);return{gq:r.dg/i,gu:0,dg:-r.gq/i}}else{var i=vr(r.gq*r.gq+r.gu*r.gu);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}},v2=function(e){var r=$2(e),n=r,a=n,o=e,i=o,c={gq:i.gu*a.dg-i.dg*a.gu,gu:i.dg*a.gq-i.gq*a.dg,dg:i.gq*a.gu-i.gu*a.gq};return w(r,c)},s2=function(e){var r=Zi(e),n=v2(r),a=n.a,o=n.b;return ca({cM:V$(e),de:a,df:o,dh:r})},f2=function(e){var r=e;return r.fA},d2=function(e){var r=e;return r.fX},m2=W(function(e,r,n,a){var o=s2(i2(a)),i=t(wc,n,Rv),c=function(){var m=w(e,r);return m.a?m.b?Oa(g([i,Vt(jl)])):i:m.b?Vt(jl):D}(),l=d2(a),u=l,v=f2(a),s=v;return t(Bv,o,t(xc,T(u,u,s),c))}),g2=$(function(e,r){return S(m2,!0,!0,e,r)}),Al={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bB",viewMatrix:"f"}},Bl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bB",viewMatrix:"f"}},ha=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=In(n),c=In(a),l=In(o);return hr({dS:i.gq,dT:c.gq,dU:l.gq,dV:0,dW:i.gu,dX:c.gu,dY:l.gu,dZ:0,d_:i.dg,d$:c.dg,d0:l.dg,d1:0,d2:0,d3:0,d4:0,d5:0})},ut=dv(g([T({c7:0},{c7:1},{c7:2})])),p2=$(function(e,r){var n=uv(r),a=O(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,D;var o=e.b.a;return t(Se,a,oe(function(_,k,A,H,G,N,U,J){return L(ue,f(Ue,H,0,J),Al,hc,ut,{aD:o,b:A,c:k,d:N,e:_,bB:ha(r),f:G})}));case 1:if(e.b.$)return e.a,D;var i=e.b.a,c=e.c;return t(Se,a,oe(function(_,k,A,H,G,N,U,J){return L(ue,f(Ue,H,0,J),Al,_c,ut,{aW:t(vo,Za(c),i),b:A,c:k,d:N,e:_,bB:ha(r),f:G})}));case 2:e.a;var l=e.b,d=e.c,u=t(Mv,l,d);if(u.$)return D;var v=u.a;return t(Se,a,oe(function(_,k,A,H,G,N,U,J){var q=U.a,Q=U.b;return L(ue,f(Ue,H,0,J),Bl,Pv,ut,{R:Q,bo:q.bo,bW:q.bW,bX:q.bX,bY:q.bY,cB:v,b:A,c:k,d:N,e:_,bB:ha(r),f:G})}));default:e.a;var s=e.b,m=e.c,p=e.d,d=e.e,b=S(Dv,s,m,p,d);if(b.$)return D;var h=b.a,y=b.b,P=b.c;return t(Se,a,oe(function(_,k,A,H,G,N,U,J){var q=U.a,Q=U.b;return L(ue,f(Ue,H,0,J),Bl,Tv,ut,{cg:h,R:Q,bo:q.bo,bW:q.bW,bX:q.bX,bY:q.bY,cF:P,b:A,c:k,d:N,c0:y,e:_,bB:ha(r),f:G})}))}}),b2=function(){var e=g([{a8:t(Ze,0,1)},{a8:t(Ze,1,1)},{a8:t(Ze,2,1)},{a8:t(Ze,0,-1)},{a8:t(Ze,1,-1)},{a8:t(Ze,2,-1)}]),r=g([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return t(Xa,e,r)}(),h2={src:`
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
    `,attributes:{triangleShadowVertex:"a8"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",triangleVertexPositions:"bB",viewMatrix:"f"}},Fl=function(e){return so(oe(function(r,n,a,o,i,c,l,u){return L(ue,t(Pc,o,u),h2,Cc,b2,{b:a,c:n,d:c,e:r,b9:l,bB:ha(e),f:i})}))},_2=W(function(e,r,n,a){var o=t(p2,n,a),i=w(e,r);return i.a?i.b?Oa(g([o,Fl(a)])):o:i.b?Fl(a):D}),y2=$(function(e,r){return S(_2,!0,!0,e,r)}),Sc=function(e){var r=e;return r},w2=$(function(e,r){var n=Gn(r),a=Gn(e),o=Nn(r),i=Nn(e),c=Rn(r),l=Rn(e);return{d7:t(ge,l,c),d8:t(ge,i,o),d9:t(ge,a,n),ea:t(we,l,c),eb:t(we,i,o),ec:t(we,a,n)}}),x2=function(e){var r=Sc(e),n=r.a,a=r.b;return t(w2,n,a)},Vl={src:`
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
    `,attributes:{lineSegmentVertex:"dR"},uniforms:{lineSegmentEndPoint:"dP",lineSegmentStartPoint:"dQ",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},C2=$(function(e,r){return{$:1,a:e,b:r}}),P2=C2({dv:2,dF:0,ee:1}),Wl=P2(g([w({dR:0},{dR:1})])),S2=$(function(e,r){var n=x2(r),a=O(n),o=Sc(r),i=o.a,c=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,D;var l=e.b.a;return t(Se,a,oe(function(v,s,m,p,d,b,h,y){return L(ue,y,Vl,hc,Wl,{aD:l,dP:Ie(c),dQ:Ie(i),b:m,c:s,d:b,e:v,f:d})}));case 1:if(e.b.$)return D;var l=e.b.a,u=e.c;return t(Se,a,oe(function(s,m,p,d,b,h,y,P){return L(ue,P,Vl,_c,Wl,{aW:t(vo,Za(u),l),dP:Ie(c),dQ:Ie(i),b:p,c:m,d:h,e:s,f:b})}));case 2:return D;default:return D}}),L2=$(function(e,r){return t(S2,e,r)}),Lc=function(e){var r=e;return r.e_},kc=function(e){var r=e;return r.fX},di=$(function(e,r){var n=e,a=r;return n/a}),k2=_e(function(e,r,n,a,o){e:for(;;){var i=a(r/n),c=t(z,i,o);if(ve(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,o=m;continue e}}),El=$(function(e,r){return e<1?C:L(k2,0,e,e,r,C)}),z2=$(function(e,r){var n=e.ep,a=e.o,o=e.N,i=o,c=i.a,l=i.b;return t(z,{o:$o(a),ep:Ie(n),N:t(Ze,c,l)},r)}),T2=function(e){var r=f(ku,z2,C,mc(e));if(r.b){var n=r.a,a=r.b,o=t(Xa,r,dc(e)),i=t(qv,n,a);return S(cv,i,e,o,0)}else return fc},zc=$(function(e,r){var n=e,a=r,o=Hr(a);return{gq:o*Hr(n),gu:o*Ir(n),dg:Ir(a)}}),M2=function(){var e=Le(1),r=72,n=t(bn,0,r-1),a=t(El,r,t(Aa,fe,fi(1))),o=Ai(r/2),i=t(bn,0,o-1),c=t(El,o,t(Aa,ga(90),ga(-90))),l=ja(Ee(t(X,function(s){return t(X,function(m){return{o:ba(t(zc,s,m)),ep:f(Me,t(ce,xa(m)*xa(s),e),t(ce,xa(m)*Wt(s),e),t(ce,Wt(m),e)),N:w(t(di,s,fi(1)),t(di,t(mn,ga(90),m),ga(180)))}},c)},a))),u=$(function(s,m){return s*(o+1)+m}),v=Ee(t(X,function(s){return Ee(t(X,function(m){var p=t(u,s+1,m),d=t(u,s,m),b=t(u,s+1,m+1),h=t(u,s,m+1);return g([T(h,b,p),T(h,p,d)])},i))},n));return sc(T2(t(pc,l,v)))}(),Et=72,$t=2*Et,D2=$(function(e,r){e:for(;;){var n=$t+1,a=t(za,$t,2*e+3),o=t(za,$t,2*e+2),i=2*e+1,c=2*e,l=$t,u=t(z,T(l,c,o),t(z,T(c,a,o),t(z,T(c,i,a),t(z,T(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),j2=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),A2=$(function(e,r){e:for(;;){var n=f(j2,0,2*Rr,e/Et),a={bH:n,b0:0,b7:1},o={bH:n,b0:1,b7:1},i=t(z,a,t(z,o,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),B2=function(){var e=t(A2,Et-1,g([{bH:0,b0:0,b7:0},{bH:0,b0:1,b7:0}])),r=t(D2,Et-1,C);return t(Xa,e,r)}(),F2={src:`
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
    `,attributes:{angle:"bH",offsetScale:"b0",radiusScale:"b7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},ql=function(e){return so(oe(function(r,n,a,o,i,c,l,u){return L(ue,t(Pc,!0,u),F2,Cc,B2,{aD:f(Ja,0,0,1),b:a,c:n,d:c,e:r,b9:l,f:i})}))},V2=function(e){var r=vv(e);return{dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:r.gq,K:r.gu,L:r.dg,b8:1}},W2=$(function(e,r){return t(Av,V2(e),r)}),E2=W(function(e,r,n,a){var o=t(wc,n,M2),i=function(){var u=w(e,r);return u.a?u.b?Oa(g([o,ql()])):o:u.b?ql():D}(),c=kc(a),l=c;return t(W2,t(li,Xr,Lc(a)),t(xc,T(l,l,l),i))}),q2=$(function(e,r){return S(E2,!0,!0,e,r)}),R2=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Nv=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),N2=_e(function(e,r,n,a,o){return{$:3,a:e,b:r,c:n,d:a,e:o}}),G2=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return t(Wv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return f(R2,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return f(Nv,n,a,c);default:var n=e.a,a=e.b,o=e.c,i=e.d,c=e.e;return L(N2,n,a,o,i,c)}},H2=G2,Gv=function(e){switch(e.$){case 0:var o=e.a,r=e.b;return g([t(t2,o,r)]);case 1:var o=e.a,n=e.b;return g([t(y2,o,n)]);case 3:var o=e.a,a=e.b;return g([t(q2,H2(o),a)]);case 2:var o=e.a,i=e.b;return g([t(g2,o,i)]);case 4:var c=e.a,l=e.b;return g([t(L2,Ev(c),l)]);default:var u=e.a;return t(io,Gv,u)}},Hv=function(e){return t(io,Gv,e)},I2=$(function(e,r){return Kh({eQ:e.eQ,eU:q$(e.eV),ao:e.ao,$7:Le(e.$7),bg:e.bg,aT:w(Ft(rr(e.a5.go)),Ft(rr(e.a5.fo))),aY:Hv(r),ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn})}),Iv=function(e){return e},U2=$(function(e,r){var n=e,a=cr(r.e8),o=a.gq,i=a.gu,c=a.dg,l=t(uo,r.bT,r.aR),u=l;return{bJ:Dn(u),eZ:n,bR:Mn(u),cV:0,b6:Tn(u),c8:1,gq:-o,gu:-i,dg:-c}}),J2=function(e){return t(U2,Iv(!0),{aR:e.aR,e8:t(zc,Ke(e.bI),Ke(e.bP)),bT:e.bT})},fo=S(Mr,52/255,101/255,164/255,1),O2=S(Mr,115/255,210/255,22/255,1),Tc=function(e){return{$:5,a:e}},He=function(e){return Tc(e)},Mc=S(Mr,204/255,0/255,0/255,1),Dc=$(function(e,r){return{$:2,a:e,b:r}}),Y2=x(function(e,r,n){return{k:t(kr,e,r),fA:je(n.fA),fX:je(n.fX)}}),Uv=x(function(e,r,n){return t(Dc,e,f(Y2,Xr,nv,{fA:Le(n),fX:Le(r)}))}),jo=function(e){return f(rc,0,1,e<=.04045?e/12.92:t(en,(e+.055)/1.055,2.4))},X2=function(e){var r=Oi(e),n=r.cY,a=r.co,o=r.ci;return f(Ja,jo(n),jo(a),jo(o))},Z2=function(e){return f(Nv,0,si(X2(e)),si(0))},gn=$(function(e,r){return t(oa,"unlit",e)?Ev(r):Z2(r)}),Jv=$(function(e,r){return{$:0,a:e,b:r}}),Ov=$(function(e,r){return{$:4,a:e,b:r}}),jc=$(function(e,r){return{$:3,a:e,b:r}}),Ac=$(function(e,r){return{$:1,a:e,b:r}}),Q2=x(function(e,r,n){return{gq:e,gu:r,dg:n}}),K2=$(function(e,r){return{eT:t(b$,e,vc(r)),aT:bc(r)}}),e_=$(function(e,r){var n=r;return t(kr,t(la,e,n.cM),n.e8)}),r_=$(function(e,r){var n=r;return{k:t(e_,e,n.k),fA:n.fA,fX:n.fX}}),n_=function(e){return e},Yv=$(function(e,r){var n=Sc(r),a=n.a,o=n.b;return n_(w(e(a),e(o)))}),a_=$(function(e,r){return t(Yv,la(e),r)}),Bc=$(function(e,r){return{e_:r,fX:je(e)}}),t_=$(function(e,r){return t(Bc,kc(r),t(la,e,Lc(r)))}),Xv=$(function(e,r){var n=r,a=n.a,o=n.b,i=n.c;return T(e(a),e(o),e(i))}),o_=$(function(e,r){return t(Xv,la(e),r)}),mo=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=f(Q2,n,a,o);switch(r.$){case 0:var s=r.a,c=r.b;return t(Jv,s,t(K2,i,c));case 1:var s=r.a,l=r.b;return t(Ac,s,t(o_,i,l));case 3:var s=r.a,u=r.b;return t(jc,s,t(t_,i,u));case 2:var s=r.a,v=r.b;return t(Dc,s,t(r_,i,v));case 4:var s=r.a,m=r.b;return t(Ov,s,t(a_,i,m));default:var p=r.a;return Tc(t(X,mo(T(n,a,o)),p))}}),pn=function(e){return mo(T(e,0,0))},go=function(e){return mo(T(0,e,0))},Zv=function(e){return mo(T(0,0,e))},i_=x(function(e,r,n){return{eT:f(p$,e,r,vc(n)),aT:bc(n)}}),c_=$(function(e,r){var n=t(Ra,e,r),a=t(mt,e,r);return function(o){var i=o;return t(kr,n(i.cM),a(i.e8))}}),l_=x(function(e,r,n){var a=n;return{k:f(c_,e,r,a.k),fA:a.fA,fX:a.fX}}),u_=x(function(e,r,n){return t(Yv,t(Ra,e,r),n)}),$_=x(function(e,r,n){return t(Bc,kc(n),f(Ra,e,r,Lc(n)))}),v_=x(function(e,r,n){return t(Xv,t(Ra,e,r),n)}),Fc=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return t(Jv,l,f(i_,e,r,a));case 1:var l=n.a,o=n.b;return t(Ac,l,f(v_,e,r,o));case 3:var l=n.a,i=n.b;return t(jc,l,f($_,e,r,i));case 2:var l=n.a,c=n.b;return t(Dc,l,f(l_,e,r,c));case 4:var l=n.a,u=n.b;return t(Ov,l,f(u_,e,r,u));default:var v=n.a;return Tc(t(X,t(Fc,e,r),v))}}),s_=t(kr,Xr,$c),Qv=$(function(e,r){return f(Fc,s_,Ke(e),r)}),f_=t(kr,Xr,no),mi=$(function(e,r){return f(Fc,f_,Ke(e),r)}),d_=Us,m_=Os,g_=function(e){var r=e.a,n=e.b,a=e.c;return vr(t(en,r,2)+t(en,n,2)+t(en,a,2))},p_=function(e){var r=e.a,n=e.b,a=e.c,o=g_(T(r,n,a));return{bI:t(m_,n,r),fs:d_(a/o),fX:o}},yt=W(function(e,r,n,a){var o=a.a,i=a.b,c=T(i.gq-o.gq,i.gu-o.gu,i.dg-o.dg),l=c.a,u=c.b,v=c.c,s=p_(T(l,u,v)),m=s.fX,p=s.bI,d=s.fs;return t(Zv,o.dg,t(go,o.gu,t(pn,o.gq,t(mi,p,t(Qv,d-Ur(90),t(pn,m/2,t(mi,Ur(90),f(Uv,t(gn,e,r),n/2,m))))))))}),b_=function(e){return He(g([S(yt,e,Mc,.1,w(f(Ne,0,0,0),f(Ne,10,0,0))),S(yt,e,O2,.1,w(f(Ne,0,0,0),f(Ne,0,10,0))),S(yt,e,fo,.1,w(f(Ne,0,0,0),f(Ne,0,0,10)))]))},h_=S(Mr,78/255,154/255,6/255,1),gi=$(function(e,r){return t(jc,e,t(Bc,Le(r),Xr))}),Kv=W(function(e,r,n,a){var o=a.a,i=a.b;return S(yt,e,r,n,w(f(Ne,o.gq,o.gu,0),f(Ne,i.gq,i.gu,0)))}),__=S(Mr,237/255,212/255,0/255,1),y_=$(function(e,r){var n=Ia(r.I).ce,a=t(mi,n.e9,He(g([t(Qv,n.f1,He(g([t(pn,-.02,t(gi,t(gn,e,Mc),n.aS.fX)),t(pn,.02,t(gi,t(gn,e,__),n.aS.fX))]))),f(Uv,t(gn,e,o$),.2,1.1)]))),o=n.gk,i=o.a,c=o.b,l=t(oa,"draw speed vector",e)?S(Kv,e,h_,.2,w(t(qr,0,0),t(qr,.3*i,.3*c))):He(C);return t(go,n.aS.bL.gu,t(pn,n.aS.bL.gq,t(Zv,.5,He(g([a,l])))))}),wt=$(function(e,r){var n=r.a,a=r.b,o=r.c;return t(Ac,e,f(Ye,f(pt,n.gq,n.gu,n.dg),f(pt,a.gq,a.gu,a.dg),f(pt,o.gq,o.gu,o.dg)))}),w_=function(e){return t(wt,t(gn,e,fo),T(f(Ne,0,0,0),f(Ne,.1,0,0),f(Ne,0,.1,0)))},x_=$(function(e,r){if(t(oa,"draw ball trail",e)){var n=Ia(r.I).ce;return He(t(X,function(a){return t(go,a.gu,t(pn,a.gq,w_(e)))},n.gf))}else return He(C)}),C_=$(function(e,r){return t(go,r.aI.gu,t(pn,r.aI.gq,t(gi,t(gn,e,Mc),.2)))}),P_=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return C}();return f(Jt,ao,e,r)},S_=$(function(e,r){var n=r.aj;if(n.$===1){var a=n.a;return He(t(X,f(Kv,e,fo,.2),P_(a)))}else return He(C)}),Ao=$(function(e,r){var n=e.a,a=e.b,o=e.c;return{gq:r.gq+n,gu:r.gu+a,dg:r.dg+o}}),L_=$(function(e,r){return{gq:e,gu:r}}),k_=$(function(e,r){var n=e,a=r;return a.gq*n.gu-a.gu*n.gq}),Rl=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu}}),z_=function(e){var r=e;return r},es=function(e){var r=z_(e),n=r.a,a=r.b,o=r.c,i=t(Rl,n,a),c=t(Rl,n,o);return t(ce,.5,t(k_,c,i))},rs=x(function(e,r,n){return T(e,r,n)}),T_=function(e){return f(Ae,mn,fe,e)},ns=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=$(function(s,m){return es(f(rs,r,s,m))}),l=f(Jt,c,t(z,a,i),i);return T_(l)}else{var r=e.a,n=e.b,a=n.a;return fe}else return e.a,fe;else return fe},M_=function(e){return t(ya,fe,ns(e))?e:ie(e)},as=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),D_=function(e){return t(as,fe,ns(e))?e:ie(e)},j_=$(function(e,r){return{a0:t(X,M_,e),a4:D_(r)}}),A_=function(e){return t(j_,C,e)},Nr=function(e){var r=e;return r.gq},Gr=function(e){var r=e;return r.gu},Bo=$(function(e,r){return{gq:e(Nr(r)),gu:e(Gr(r))}}),xn=$(function(e,r){var n=e,a=r;return I(a,n)>0}),qt=x(function(e,r,n){return es(f(rs,e.ep,r.ep,n.ep))}),B_=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var o=n.a,i=n.b;if(t(xn,fe,f(qt,o,r.g,e))){var a=T(o.ft,r.g.ft,e.ft),c=e,l={g:o,n:i,j:r.j,bi:t(z,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:t(z,r.g,r.n),j:r.j,bi:r.bi}}else if(t(xn,fe,f(qt,r.j,r.g,e))){var a=T(r.j.ft,r.g.ft,e.ft);return{g:e,n:C,j:r.j,bi:t(z,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),F_=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var o=n.a,i=n.b;if(t(xn,fe,f(qt,e,r.g,o))){var a=T(e.ft,r.g.ft,o.ft),c=e,l={g:o,n:i,j:r.j,bi:t(z,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:t(z,r.g,r.n),j:r.j,bi:r.bi}}else if(t(xn,fe,f(qt,e,r.g,r.j))){var a=T(e.ft,r.g.ft,r.j.ft);return{g:e,n:C,j:r.j,bi:t(z,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),V_=$(function(e,r){var n=e,a=r;return t(Ui,n,a)}),W_=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Ba=$(function(e,r){var n=Gr(r),a=Gr(e),o=Nr(r),i=Nr(e);return t(W_,n,a)?0:t(xn,n,a)?2:t(V_,o,i)}),Rt=function(e){return e},ts=Es,E_=$(function(e,r){var n=x(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(e.ft,a.ft,l.ft),v=l,s=u,m=t(z,c,i);a=v,o=s,i=m;continue e}else{var c=T(e.ft,a.ft,r.j.ft);return t(z,c,i)}});return{g:e,n:C,j:r.g,bi:f(n,r.g,r.n,r.bi)}}),q_=$(function(e,r){var n=x(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(a.ft,e.ft,l.ft),v=l,s=u,m=t(z,c,i);a=v,o=s,i=m;continue e}else{var c=T(a.ft,e.ft,r.j.ft);return t(z,c,i)}});return{g:e,n:C,j:r.g,bi:f(n,r.g,r.n,r.bi)}}),R_=function(e){var r=t(ts,$(function(u,v){return t(Ba,v.ep,u.ep)}),e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=a.b,c=$(function(u,v){return ve(u.a2,v.j.ft)?t(q_,u,v):ve(v.j.a2,u.ft)?t(E_,u,v):ve(u.a2,v.g.ft)?t(F_,u,v):ve(v.g.a2,u.ft)?t(B_,u,v):Rt(v)}),l={g:o,n:C,j:n,bi:C};return f(Ae,c,l,i).bi}else return r.a,C;else return C},Qa=$(function(e,r){return t(Fr,e,r.Q)}),N_=$(function(e,r){var n=r;return f(vn,e,0,n)}),G_=_e(function(e,r,n,a,o){e:for(;;){var i=o.a,c=o.b,l=t(Qa,a,e);if(l.$)return Rt(w(i,C));var u=l.a,v=t(Fr,u.ai,r);if(v.$)return Rt(w(i,C));var s=v.a,m=t(N_,a,i),p=u.at,d={ft:u.ai,a2:u.aq,ep:s},b=t(z,d,c);if(ve(p,n))return w(m,ie(b));var h=e,y=r,P=n,_=p,k=w(m,b);e=h,r=y,n=P,a=_,o=k;continue e}}),H_=to,vt=Ts,I_=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=function(l){if(l.$){var v=l.a;return _n(t(vt,e,v))}else{var u=l.a;return $n(t(vt,c,u))}};return S(Wr,n,a,t(vt,c,o),t(vt,e,i))}),U_=$(function(e,r){var n=t(aa,e,r);return!n.$}),J_=$(function(e,r){var n=r;return t(U_,e,n)}),O_=function(e){var r=t(I_,function(c){return c.ep},e.am),n=$(function(c,l){var u=l,v=u.a,s=u.b;if(t(J_,c,v))return l;var m=L(G_,e,r,c,c,w(v,C)),p=m.a,d=m.b;return w(p,t(z,d,s))}),a=t(bn,0,gc(e.Q)-1),o=f(Ae,n,w(H_,C),a),i=o.b;return w(r,i)},Y_=C,jn=$(function(e,r){if(r.$)return Rt(e);var n=r.a;return n}),X_=_e(function(e,r,n,a,o){if(r.$===1)return E;var i=r.a;if(n.$===1)return E;var c=n.a;if(a.$===1)return E;var l=a.a;if(o.$===1)return E;var u=o.a;return Z(S(e,i,c,l,u))}),pi=Ls,os=ys,Un=Ss,Ca=W(function(e,r,n,a){var o=wn&r>>>e;if(I(o,Sr(a))>-1){if(e===5)return t(pi,_n(n),a);var i=$n(S(Ca,e-sr,r,n,hn));return t(pi,i,a)}else{var c=t(Da,o,a);if(c.$){var i=$n(S(Ca,e-sr,r,n,os(c)));return f(Un,o,i,a)}else{var l=c.a,i=$n(S(Ca,e-sr,r,n,l));return f(Un,o,i,a)}}}),bi=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=Sr(i),l=Sr(e),u=n+(l-c);if(ve(l,be)){var v=I(u>>>sr,1<<a)>0;if(v){var s=a+sr,m=S(Ca,s,n,e,os($n(o)));return S(Wr,u,s,m,hn)}else return S(Wr,u,a,S(Ca,a,n,e,o),hn)}else return S(Wr,u,a,o,e)}),Nl=$(function(e,r){var n=r.d;return t(bi,t(pi,e,n),r)}),Gl=$(function(e,r){return V(r,{at:e})}),Hl=$(function(e,r){return V(r,{B:e})}),is=W(function(e,r,n,a){var o=wn&r>>>e,i=t(Da,o,a);if(i.$){var u=i.a,v=f(Un,wn&r,n,u);return f(Un,o,_n(v),a)}else{var c=i.a,l=S(is,e-sr,r,n,c);return f(Un,o,$n(l),a)}}),Z_=x(function(e,r,n){var a=n.a,o=n.b,i=n.c,c=n.d;return e<0||I(e,a)>-1?n:I(e,gv(a))>-1?S(Wr,a,o,i,f(Un,wn&e,r,c)):S(Wr,a,o,S(is,o,e,r,i),c)}),st=x(function(e,r,n){var a=t(Fr,e,n);if(a.$)return n;var o=a.a;return f(Z_,e,r(o),n)}),Xn=x(function(e,r,n){var a=gc(n.Q);return t(jn,w(n,-1),L(X_,W(function(o,i,c,l){return w(V(n,{Q:t(Nl,{aq:e,at:e,B:l.B,ai:r.ft},t(Nl,{aq:r.ft,at:r.b1,B:c.B,ai:e},f(st,l.B,Gl(a+1),f(st,c.B,Gl(a),f(st,r.b1,Hl(a),f(st,e,Hl(a+1),n.Q))))))}),a)}),t(Fr,e,n.am),t(Fr,r.ft,n.am),t(Fr,e,n.Q),t(Fr,r.b1,n.Q)))}),Zn=$(function(e,r){return t(aa,e,r.bm)}),Q_=wr,Il=$(function(e,r){return t(Fr,e,r.am)}),K_=x(function(e,r,n){if(r.$===1)return E;var a=r.a;if(n.$===1)return E;var o=n.a;return Z(t(e,a,o))}),cs=x(function(e,r,n){return t(jn,n,t(Er,function(a){return f(K_,$(function(o,i){var c=Q_(w(o.ep,i.ep));return V(n,{bh:t(e,w(r,c),n.bh)})}),t(Il,a.ai,n),t(Il,a.aq,n))},t(Qa,r,n)))}),ey=$(function(e,r){var n=r;return t(co,Pg(e),n)}),Vc=cs(ey),ry=$(function(e,r){return t(jn,r,t(Er,function(n){return t(re,function(a){var o=a.a1?f(Xn,e,a,r).a:r;return t(Vc,n.B,o)},t(Zn,n.B,r))},t(Qa,e,r)))}),Qn=x(function(e,r,n){return{ft:e,a1:n,b1:r}}),ny=$(function(e,r){var n=r;return t(z,e,n)}),Wc=cs(ny),Kn=x(function(e,r,n){return V(n,{bm:f(vn,e,r,n.bm)})}),ay=$(function(e,r){return t(jn,r,t(Er,function(n){return t(re,function(a){var o=a.a1?f(Xn,e,a,r).a:r;return f(Kn,e,f(Qn,e,e,!1),t(Wc,e,t(Vc,n.B,o)))},t(Zn,n.B,r))},t(Qa,e,r)))}),ty=function(e){var r=e;return r},oy=$(function(e,r){var n=r,a=Gr(e),o=Nr(e);return t(re,function(i){i.a;var c=i.b,l=c.a;return c.b,l},f(Ae,$(function(i,c){var l=ty(i.b),u=l.a,v=l.b,s=Nr(u),m=Gr(u),p=Nr(v),d=Gr(v),b=function(){if(ve(m,d))return t(De,t(ge,s,p),o);var P=t(di,t(De,m,a),t(De,m,d));return t(De,t(mn,t(ce,P,t(De,s,p)),s),o)}();if(t(as,fe,b)){if(c.$===1)return Z(w(b,i));var h=c.a,y=h.a;return h.b,t(ya,y,b)?Z(w(b,i)):c}else return c}),E,n))}),Ec=$(function(e,r){return t(oy,e,r.bh)}),iy=x(function(e,r,n){return t(jn,n,t(Er,function(a){return t(Er,function(o){var i=o.a1?f(Xn,e,o,n).a:n,c=t(Vc,a.B,i);return t(Er,function(l){return t(re,function(u){var v=u.a1?f(Xn,e,u,c):w(c,e),s=v.a,m=v.b;return f(Kn,l,f(Qn,e,m,!0),s)},t(Zn,l,n))},t(Ec,r,c))},t(Zn,a.B,n))},t(Qa,e,n)))}),cy=x(function(e,r,n){return t(jn,n,t(Er,function(a){return t(re,function(o){var i=o.a1?f(Xn,e,o,n):w(n,e),c=i.a,l=i.b;return f(Kn,a,f(Qn,e,l,!1),c)},t(Zn,a,n))},t(Ec,r,n)))}),ly=x(function(e,r,n){return t(jn,n,t(Er,function(a){return t(re,function(o){var i=f(Xn,e,o,n),c=i.a,l=i.b;return f(Kn,e,f(Qn,e,e,!1),t(Wc,e,f(Kn,a,f(Qn,e,l,!1),c)))},t(Zn,a,n))},t(Ec,r,n)))}),uy=$(function(e,r){return f(Kn,e,f(Qn,e,e,!1),t(Wc,e,r))}),ls=Ds,us=Ms,Ul=$(function(e,r){var n=Sr(e),a=be-Sr(r.p)-n,o=f(ls,be,r.p,e);return a<0?{A:t(z,_n(o),r.A),m:r.m+1,p:f(us,a,n,e)}:a?{A:r.A,m:r.m,p:o}:{A:t(z,_n(o),r.A),m:r.m+1,p:hn}}),Jl=$(function(e,r){r.a,r.c;var n=r.d,a=Sr(e),o=be-Sr(n)-a,i=f(ls,be,n,e),c=t(bi,i,r);if(o<0){var l=f(us,o,a,e);return t(bi,l,c)}else return c}),qn=ks,$y=function(e){var r=e.a,n=e.c,a=e.d,o=$(function(i,c){if(i.$)return t(z,i,c);var l=i.a;return f(qn,o,c,l)});return{A:f(qn,o,C,n),m:r/be|0,p:a}},vy=$(function(e,r){e.d;var n=r.a,a=r.c,o=r.d;if(I(n,be*4)<1){var i=$(function(c,l){if(c.$){var v=c.a;return t(Jl,v,l)}else{var u=c.a;return f(qn,i,l,u)}});return t(Jl,o,f(qn,i,e,a))}else{var i=$(function(l,u){if(l.$){var s=l.a;return t(Ul,s,u)}else{var v=l.a;return f(qn,i,u,v)}});return t(Wi,!0,t(Ul,o,f(qn,i,$y(e),a)))}}),sy=x(function(e,r,n){e:for(;;)if(r.b){var a=r.a,o=r.b,i=ve(a,e)?n:t(z,a,n),c=a,l=o,u=i;e=c,r=l,n=u;continue e}else return n}),fy=function(e){if(e.b){var r=e.a,n=e.b,a=f(sy,r,n,C);if(a.b){var o=a.a,i=a.b;return ve(o,r)?t(z,r,ie(i)):t(z,r,ie(a))}else return g([r])}else return C},Ol=$(function(e,r){var n=e,a=r;return a*n}),Yl=x(function(e,r,n){var a=Gr(n),o=Gr(r),i=Gr(e),c=Nr(n),l=Nr(r),u=Nr(e),v=t(Ol,t(De,l,c),t(De,i,o)),s=t(Ol,t(De,o,a),t(De,u,l)),m=t(De,v,s);return t(xn,fe,m)}),Xl=x(function(e,r,n){var a=t(Ba,r,e),o=t(Ba,r,n);return a===2&&o===2?f(Yl,e,r,n)?0:4:!a&&!o?f(Yl,e,r,n)?1:5:a===2?3:2}),dy=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=i.a,l=i.b,u=f(Ae,Yt,c,l),v=W(function(p,d,b,h){e:for(;;)if(b.b){var P=b.a,_=b.b,k={ar:f(Xl,p,d,P),ep:d},A=d,H=P,G=_,N=t(z,k,h);p=A,d=H,b=G,h=N;continue e}else{var y={ar:f(Xl,p,d,r),ep:d};return ie(t(z,y,h))}});return S(v,u,r,t(z,a,t(z,c,l)),C)}else{var r=e.a,n=e.b,a=n.a;return t(Ba,r,a)===2?g([{ar:4,ep:r},{ar:5,ep:a}]):g([{ar:5,ep:r},{ar:4,ep:a}])}else return e.a,C;else return C},my=function(e){var r=e.a4,n=e.a0,a=t(X,function(c){return fy(c)},t(z,r,n)),o=f(Ae,$(function(c,l){var u=l.a,v=l.b,s=Pr(c),m=t(Vu,s,function(p){return p?ve(p,s-1)?{aq:u,at:u,B:u+p-1,ai:u+p}:{aq:u+p+1,at:u+p+1,B:u+p-1,ai:u+p}:{aq:u+1,at:u+1,B:u+s-1,ai:u}});return w(u+s,t(vy,v,m))}),w(0,Fi),a).b,i=Ee(t(X,dy,a));return{Q:o,am:i}},gy=function(e){var r=$(function(u,v){var s=u.a,m=u.b,p=m.ar;switch(p){case 0:return t(uy,s,v);case 1:return t(ry,s,v);case 3:return f(cy,s,m.ep,v);case 2:return t(ay,s,v);case 4:return f(ly,s,m.ep,v);default:return f(iy,s,m.ep,v)}}),n=my(e),a=n.am,o=n.Q,i={bh:Y_,Q:o,bm:to,am:ja(a)},c=t(ts,$(function(u,v){var s=u.b,m=v.b;return t(Ba,m.ep,s.ep)}),t(Ot,ao,a)),l=f(Ae,r,i,c);return ja(a),O_(l)},py=function(e){var r=gy(e),n=r.a,a=r.b;return t(pc,n,Ee(t(X,R_,a)))},by=function(e){return py(e)},hy=function(e){return t(X,function(r){var n=r.a,a=r.b,o=r.c;return T(t(Bo,dn,n),t(Bo,dn,a),t(Bo,dn,o))},pv(by(A_(t(X,function(r){return t(L_,r.gq,r.gu)},e)))))},_y=$(function(e,r){var n=t(gn,e,fo),a=2,o=function(v){var s=v.gq,m=v.gu;return f(Ne,s,m,a)},i=function(v){var s=v.a,m=v.b;return He(g([t(wt,n,T(o(s),o(m),t(Ao,T(0,0,-a),o(s)))),t(wt,n,T(t(Ao,T(0,0,-a),o(s)),o(m),t(Ao,T(0,0,-a),o(m))))]))},c=function(v){return He(t(X,i,ec(v.en)))},l=function(v){return He(t(X,function(s){var m=s.a,p=s.b,d=s.c;return t(wt,n,T(o(m),o(p),o(d)))},hy(v.en)))},u=function(v){return He(g([l(v),c(v)]))};return He(t(X,u,Ia(r.I).fV))}),$s=function(e){return e},yy=function(e){return $s(1.2*t(en,2,e))},Fo=lo({gq:.37208,gu:.37529}),wy=$(function(e,r){return{$:2,a:e,b:r}}),vs=function(e){return{$:0,a:e}},ft=function(e){var r=e;return r},xy=function(e){var r=e;return r.eZ},ss=vs(pa.a),Cy=$(function(e,r){var n=$(function(a,o){var i=o.a,c=o.b;return e(a)?w(t(z,a,i),c):w(i,t(z,a,c))});return f(Yr,n,w(C,C),r)}),Py=function(e){var r=e;return hr({dS:r.gq,dT:r.b6,dU:0,dV:0,dW:r.gu,dX:r.bR,dY:0,dZ:0,d_:r.dg,d$:r.bJ,d0:0,d1:0,d2:r.c8,d3:r.cV,d4:0,d5:0})},Sy=oe(function(e,r,n,a,o,i,c,l){var u=t(Cy,xy,g([ft(e),ft(r),ft(n),ft(a)])),v=u.a,s=u.b;if(v.b){var m=le(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var p=m.a,d=m.b,b=d.a,h=d.b,y=h.a,P=h.b,_=P.a;return t(wy,t(X,Py,v),{bo:t(ar,p,b),bW:t(ar,y,_),bX:t(ar,o,i),bY:t(ar,c,l)})}else return ss}else return vs({bo:t(ar,e,r),bW:t(ar,n,a),bX:t(ar,o,i),bY:t(ar,c,l)})}),Ly=W(function(e,r,n,a){return Gt(Sy,e,r,n,a,Xe,Xe,Xe,Xe)}),ky={$:5},zy=ky,Ty=lo({gq:.44757,gu:.40745}),My=function(e){return e},Zl=function(e){return e},Vo=function(e){return e},Dy={$:1},jy=Dy,Ay=$(function(e,r){var n=e,a=Ya(r.ep),o=a.gq,i=a.gu,c=a.dg,l=t(uo,r.bT,r.aR),u=l;return{bJ:Dn(u),eZ:n,bR:Mn(u),cV:0,b6:Tn(u),c8:2,gq:o,gu:i,dg:c}}),Ql=function(e){return t(Ay,Iv(!0),{aR:e.aR,bT:e.bT,ep:Xi(e.ep)})},Wo=function(e){return e/255},Kl=x(function(e,r,n){return S(Mr,Wo(e),Wo(r),Wo(n),1)}),eu=function(e){var r=e;return r},By=function(e){e:for(;;){if(ve(e.dG,fe)&&ve(e.dH,fe))return Xe;if(t(xn,je(e.dG),je(e.dH))){var r={aR:e.aR,dG:e.dH,dH:e.dG,eJ:At(e.eJ)};e=r;continue e}else{var n=K(eu(e.dH)/Rr),a=K(eu(e.dG)/Rr),o=cr(e.eJ),i=o.gq,c=o.gu,l=o.dg,u=t(uo,sv(1),e.aR),v=u;return{bJ:a*Dn(v),eZ:!1,bR:a*Mn(v),cV:n/a,b6:a*Tn(v),c8:3,gq:i,gu:c,dg:l}}}},Fy=function(e){return By({aR:e.aR,dG:e.dG,dH:e.dH,eJ:t(zc,Ke(e.bI),Ke(e.bP))})},Vy=function(e){return t(av,{eQ:e.eQ,eU:e.eU,ao:e.ao,$7:e.$7,aT:e.aT},g([{aY:e.aY,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},Wy=lo({gq:.31271,gu:.32902}),Ey=function(e){return je(e)},qy={$:0},Ry=qy,Ny=function(e){return Vy({eQ:tv(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aT:e.aT,aY:e.aY,ff:Ey($s(80)),fC:ss,ge:Ry,gn:Wy})},Gy=$(function(e,r){return Ny({eU:q$(e.eU),ao:e.ao,$7:Le(e.$7),bg:e.bg,aT:w(Ft(rr(e.a5.go)),Ft(rr(e.a5.fo))),aY:Hv(r)})}),Hy=$(function(e,r){var n=J2({bI:0,aR:B1(My(2e3)),bP:Ur(90),bT:Vo(240)}),a=Ql({aR:Fo,bT:Zl(6e3),ep:{gq:2,gu:3,dg:3}}),o=Fy({bI:0,aR:Fo,bP:Ur(90),dG:Vo(30),dH:Vo(30)}),i=Ql({aR:Ty,bT:Zl(6e3),ep:{gq:-2,gu:4,dg:3}}),c=t(oa,"unlit",e)?Gy({eU:f(Kl,46,46,46),ao:r.ao,$7:.1,bg:e.bg,a5:e.a5}):I2({eQ:jy,eV:f(Kl,46,46,46),ao:r.ao,$7:.1,bg:e.bg,ff:yy(6),fC:S(Ly,i,a,n,o),a5:e.a5,ge:zy,gn:Fo});return c(g([b_(e),t(y_,e,r),t(x_,e,r),t(_y,e,r),t(C_,e,r),t(S_,e,r)]))}),Iy=$(function(e,r){return t(Hy,e,r)}),Uy=function(e){return{$:3,a:e}},Jy=function(e){return{$:4,a:e}},Oy=function(e){return{$:5,a:e}},Yy={$:0},Xy={$:2},Zy={$:3},Qy={$:1},Ky=function(e){return t(Je,"autocomplete",e?"on":"off")},ru=function(e){var r=e;return Pr(r.l)},ew={$:6},fs=$(function(e,r){return t(rn,g([M("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),t(pe,"transition","background-color 0.3s ease"),br(e)]),g([xe(r)]))}),rw=Or("pre"),nw=function(e){var r=e;return t(B,C,g([t(fs,ew,"Export"),t(rw,g([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),g([xe(r.c6)]))]))},aw={$:7},tw=function(e){return{$:8,a:e}},ow=function(e){return t(Tr,"cols",Ve(e))},iw=function(e){return t(Tr,"rows",Ve(e))},cw=Or("textarea"),lw=function(e){var r=e;return t(B,C,g([t(fs,aw,"Import"),t(cw,g([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),iw(150),ow(10),Ea(tw),qa(r.ca)]),g([xe("todo")]))]))},uw=function(e){return t(Ji,"mousedown",$e(e))},$w=Je("placeholder"),vw=function(e){var r=e,n=t(B,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Zy),ma("Move Level Up")]),g([pr.fH])),a=t(B,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Xy),ma("Move Level Down")]),g([pr.fG])),o=t(B,g([M("inline-block ml-1 w-4 text-white40 hover:text-red-400"),br(Qy),ma("Delete Level")]),g([pr.gg])),i=t(rn,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Yy),ma("Duplicate Level")]),g([pr.fU])),c=$(function(l,u){return t(rn,g([M("w-full h-8 p-2 text-left text-white80 border-b border-white20"),M(ve(l,ru(r.U))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),t(pe,"transition","background-color 0.3s ease"),uw(Oy(l))]),g([ve(l,ru(r.U))?t(B,C,g([t(Ta,g([M("w-[100px] bg-transparent"),$w("Enter Level Name"),qa(Ki(r.U).fJ),Ea(Jy),Ky(!1)]),C),t(B,g([M("float-right")]),g([i,n,a,o]))])):t(B,g([M("whitespace-nowrap")]),g([xe(u)]))]))});return t(B,g([M("w-60 text-xs")]),g([t(B,g([M("w-full h-[200px] overflow-hidden overflow-y-scroll")]),t(Ot,$(function(l,u){var v=u.fJ;return t(c,l,v)}),ac(r.U))),t(B,g([M("p-4 border-[0.5px] border-white20")]),g([nw(r)])),t(B,g([M("p-4 border-[0.5px] border-white20")]),g([lw(r)]))]))},sw=function(e){return t(B,C,g([t(B,g([M("text-lg")]),g([xe("Pages")])),t(B,g([M("p-4")]),g([t(ka,Uy,vw(e.I))]))]))},fw=function(e){return{$:2,a:e}},dw={$:1},nu=$(function(e,r){return t(rn,g([M("m-1 p-2 rounded bg-black40 hover:bg-black80"),br(e)]),g([xe(r)]))}),mw=$(function(e,r){return t(B,C,g([t(B,g([M("h-40")]),g([t(B,g([M("text-lg")]),g([xe("Polygon editor")])),function(){var n=r.aj;if(n.$===1){var a=n.a;return t(B,g([M("p-2")]),g([t(B,C,g([xe("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ")])),t(B,C,g([xe("After you are finished drawing, click the button below.")])),t(nu,fw(a),"Finish drawing polygon")]))}else return t(nu,dw,"Start drawing a polygon")}()]))]))}),gw=$(function(e,r){return r.aE?t(B,g([M("fixed top-0 right-0 w-[300px] h-full"),M("bg-black20"),M("border-[0.5px] border-white20"),M("overflow-y-scroll"),M("text-xs text-white60")]),g([t(B,g([M("p-4 border-[0.5px] border-white20")]),g([t(mw,e,r)])),t(B,g([M("p-4 border-[0.5px] border-white20")]),g([sw(r)]))])):t(B,C,C)}),pw={$:0},au={dp:t(Zo,g([Qo("0 0 24 24"),Xo("currentColor")]),g([t(Te,g([ze("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),C)])),du:t(Zo,g([Qo("0 0 24 24"),Xo("currentColor")]),g([t(Te,g([ze("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),C)]))},bw=function(e){return t(B,g([M("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),g([t(rn,g([M("w-6"),br(pw)]),g([e.aE?au.dp:au.du]))]))},hw=$(function(e,r){return t(B,C,g([t(gw,e,r),bw(r)]))}),_w=Ge(o0,Iy,m1,ib,eb,hw,j1);const yw={Main:{init:_w(t(F,function(e){return $e({fv:e})},t(j,"inputs",t(F,function(e){return t(F,function(r){return t(F,function(n){return t(F,function(a){return t(F,function(o){return t(F,function(i){return t(F,function(c){return $e({e0:c,bg:i,dt:o,dL:a,em:n,a5:r,gm:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(F,function(a){return t(F,function(o){return t(F,function(i){return t(F,function(c){return t(F,function(l){return t(F,function(u){return t(F,function(v){return t(F,function(s){return t(F,function(m){return $e({eP:m,e2:s,ds:v,fa:u,fz:l,fW:c,f_:i,eA:o,eI:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",xr(On)))},t(j,"left",ee))},t(j,"pressedKeys",xr(On)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(F,function(n){return t(F,function(a){return t(F,function(o){return t(F,function(i){return t(F,function(c){return t(F,function(l){return t(F,function(u){return t(F,function(v){return $e({ds:v,fw:u,fF:l,f$:c,f0:i,eI:o,gq:a,gu:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(F,function(r){return t(F,function(n){return $e({fo:n,go:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(F,function(e){return t(F,function(r){return $e({e5:r,e6:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ww=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),o=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function s(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function m(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),r(d)&&(R.keyboard.control=!0),n(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),o(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=d.code),r(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),o(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{s(R)}),window.addEventListener("focus",d=>{s(R)}),window.addEventListener("visibilitychange",d=>{s(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(d){const b=d/1e3,h=b-R.clock;h<.009||(R.dt=h,R.clock=b,e.ports.tick.send(R),m(R)),window.requestAnimationFrame(p)}},xw=()=>{Eo("pointerdown"),Eo("wheel"),Eo("keydown")},Eo=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Cw=yw.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});xw();ww(Cw);
