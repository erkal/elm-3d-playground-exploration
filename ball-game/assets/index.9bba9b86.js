const vf=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};vf();function Kr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Kr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Kr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Kr(4,e,function(r){return function(n){return function(a){return function(o){return e(r,n,a,o)}}}})}function _e(e){return Kr(5,e,function(r){return function(n){return function(a){return function(o){return function(i){return e(r,n,a,o,i)}}}}})}function tr(e){return Kr(6,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return e(r,n,a,o,i,c)}}}}}})}function Rt(e){return Kr(7,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return e(r,n,a,o,i,c,l)}}}}}}})}function ie(e){return Kr(8,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,o,i,c,l,u)}}}}}}}})}function fi(e){return Kr(9,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,o,i,c,l,u,v)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function s(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,o){return e.a===4?e.f(r,n,a,o):e(r)(n)(a)(o)}function z(e,r,n,a,o,i){return e.a===5?e.f(r,n,a,o,i):e(r)(n)(a)(o)(i)}function Ge(e,r,n,a,o,i,c){return e.a===6?e.f(r,n,a,o,i,c):e(r)(n)(a)(o)(i)(c)}function si(e,r,n,a,o,i,c,l){return e.a===7?e.f(r,n,a,o,i,c,l):e(r)(n)(a)(o)(i)(c)(l)}function Nt(e,r,n,a,o,i,c,l,u){return e.a===8?e.f(r,n,a,o,i,c,l,u):e(r)(n)(a)(o)(i)(c)(l)(u)}function ff(e,r,n,a,o,i,c,l,u,v){return e.a===9?e.f(r,n,a,o,i,c,l,u,v):e(r)(n)(a)(o)(i)(c)(l)(u)(v)}var sf=[];function df(e){return[e]}function mf(e){return e.length}var pf=S(function(e,r,n){for(var a=new Array(e),o=0;o<e;o++)a[o]=n(r+o);return a}),gf=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),bf=$(function(e,r){return r[e]}),hf=S(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=n[i];return o[e]=r,o}),_f=$(function(e,r){for(var n=r.length,a=new Array(n+1),o=0;o<n;o++)a[o]=r[o];return a[n]=e,a}),yf=S(function(e,r,n){for(var a=n.length,o=0;o<a;o++)r=t(e,n[o],r);return r}),wf=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r}),Sf=$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=e(r[o]);return a});S(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=t(e,r+i,n[i]);return o});var Pf=S(function(e,r,n){return n.slice(e,r)}),xf=S(function(e,r,n){var a=r.length,o=e-a;o>n.length&&(o=n.length);for(var i=a+o,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<o;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Cf()),r});function Cf(e){return"<internals>"}function Xn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function he(e,r){for(var n,a=[],o=Ro(e,r,0,a);o&&(n=a.pop());o=Ro(n.a,n.b,0,a));return o}function Ro(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Xn(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$<0&&(e=Oc(e),r=Oc(r));for(var o in e)if(!Ro(e[o],r[o],n+1,a))return!1;return!0}$(he);var zf=$(function(e,r){return!he(e,r)});function q(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=q(e.a,r.a))||(n=q(e.b,r.b))?n:q(e.c,r.c);for(;e.b&&r.b&&!(n=q(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return q(e,r)<0});$(function(e,r){return q(e,r)<1});$(function(e,r){return q(e,r)>0});$(function(e,r){return q(e,r)>=0});var kf=$(function(e,r){var n=q(e,r);return n<0?hu:n?Cm:bu}),ja=0;function w(e,r){return{a:e,b:r}}function T(e,r,n){return{a:e,b:r,c:n}}function D(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=wr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=wr(e.a,r);return n}var P={$:0};function wr(e,r){return{$:1,a:e,b:r}}var Lf=$(wr);function g(e){for(var r=P,n=e.length;n--;)r=wr(e[n],r);return r}function Gt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Tf=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return g(a)});E(function(e,r,n,a){for(var o=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)o.push(s(e,r.a,n.a,a.a));return g(o)});_e(function(e,r,n,a,o){for(var i=[];r.b&&n.b&&a.b&&o.b;r=r.b,n=n.b,a=a.b,o=o.b)i.push(C(e,r.a,n.a,a.a,o.a));return g(i)});tr(function(e,r,n,a,o,i){for(var c=[];r.b&&n.b&&a.b&&o.b&&i.b;r=r.b,n=n.b,a=a.b,o=o.b,i=i.b)c.push(z(e,r.a,n.a,a.a,o.a,i.a));return g(c)});var Mf=$(function(e,r){return g(Gt(r).sort(function(n,a){return q(e(n),e(a))}))}),Df=$(function(e,r){return g(Gt(r).sort(function(n,a){var o=t(e,n,a);return o===bu?0:o===hu?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var jf=$(Math.pow);$(function(e,r){return r%e});var Af=$(function(e,r){var n=r%e;return e===0?Xn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Bf=Math.PI,Ff=Math.cos,Ef=Math.sin,Vf=Math.tan,Wf=Math.acos,Rf=$(Math.atan2);function Nf(e){return e}function Gf(e){return e===1/0||e===-1/0}var Hf=Math.ceil,If=Math.floor,qf=Math.round,Of=Math.sqrt,Dc=Math.log,Jf=isNaN;function Uf(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Yf=$(function(e,r){return e+r});function Xf(e){var r=e.charCodeAt(0);return isNaN(r)?F:Q(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}$(function(e,r){return e+r});function Qf(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;){var i=r.charCodeAt(o);if(55296<=i&&i<=56319){a[o]=e(r[o]+r[o+1]),o+=2;continue}a[o]=e(r[o]),o++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,o=0;o<a;){var i=r[o],c=r.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=r[o],o++),e(i)&&n.push(i)}return n.join("")});function Zf(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var o=e.charCodeAt(a);55296<=o&&o<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,o=0;o<a;){var i=n[o],c=n.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=n[o],o++),r=t(e,i,r)}return r});var Kf=S(function(e,r,n){for(var a=n.length;a--;){var o=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,o=n[a]+o),r=t(e,o,r)}return r}),es=$(function(e,r){return r.split(e)}),rs=$(function(e,r){return r.join(e)}),ns=S(function(e,r,n){return n.slice(e,r)});function as(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var ts=$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),os=$(function(e,r){return r.indexOf(e)>-1}),is=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var cs=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,o=[];(a=r.indexOf(e,a))>-1;)o.push(a),a=a+n;return g(o)});function Jl(e){return e+""}function ls(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,o=a;o<e.length;++o){var i=e.charCodeAt(o);if(i<48||57<i)return F;r=10*r+i-48}return o==a?F:Q(n==45?-r:r)}function us(e){if(e.length===0||/[\sxbo]/.test(e))return F;var r=+e;return r===r?Q(r):F}function $s(e){return Gt(e).join("")}function vs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function fs(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function ss(e){return{$:0,a:e}}function Ht(e){return{$:2,b:e}}var ds=Ht(function(e){return typeof e!="number"?er("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?$e(e):er("an INT",e)}),ms=Ht(function(e){return typeof e=="boolean"?$e(e):er("a BOOL",e)}),ps=Ht(function(e){return typeof e=="number"?$e(e):er("a FLOAT",e)}),gs=Ht(function(e){return typeof e=="string"?$e(e):e instanceof String?$e(e+""):er("a STRING",e)});function bs(e){return{$:3,b:e}}function hs(e){return{$:5,c:e}}var _s=$(function(e,r){return{$:6,d:e,b:r}}),ys=$(function(e,r){return{$:7,e,b:r}});function en(e,r){return{$:9,f:e,g:r}}var ws=$(function(e,r){return{$:10,b:r,h:e}});function Ss(e){return{$:11,g:e}}var Ps=$(function(e,r){return en(e,[r])}),xs=S(function(e,r,n){return en(e,[r,n])}),Cs=E(function(e,r,n,a){return en(e,[r,n,a])});_e(function(e,r,n,a,o){return en(e,[r,n,a,o])});tr(function(e,r,n,a,o,i){return en(e,[r,n,a,o,i])});Rt(function(e,r,n,a,o,i,c){return en(e,[r,n,a,o,i,c])});ie(function(e,r,n,a,o,i,c,l){return en(e,[r,n,a,o,i,c,l])});fi(function(e,r,n,a,o,i,c,l,u){return en(e,[r,n,a,o,i,c,l,u])});var zs=$(function(e,r){try{var n=JSON.parse(r);return Ke(e,n)}catch(a){return Be(t(xi,"This is not valid JSON! "+a.message,r))}}),Ul=$(function(e,r){return Ke(e,r)});function Ke(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?$e(e.c):er("null",r);case 3:return Ua(r)?jc(e.b,r,g):er("a LIST",r);case 4:return Ua(r)?jc(e.b,r,ks):er("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return er("an OBJECT with a field named `"+n+"`",r);var v=Ke(e.b,r[n]);return ir(v)?v:Be(t(Jc,n,v.a));case 7:var a=e.e;if(!Ua(r))return er("an ARRAY",r);if(a>=r.length)return er("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ke(e.b,r[a]);return ir(v)?v:Be(t(_u,a,v.a));case 8:if(typeof r!="object"||r===null||Ua(r))return er("an OBJECT",r);var o=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ke(e.b,r[i]);if(!ir(v))return Be(t(Jc,i,v.a));o=wr(w(i,v.a),o)}return $e(fe(o));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ke(l[u],r);if(!ir(v))return v;c=c(v.a)}return $e(c);case 10:var v=Ke(e.b,r);return ir(v)?Ke(e.h(v.a),r):v;case 11:for(var f=P,m=e.g;m.b;m=m.b){var v=Ke(m.a,r);if(ir(v))return v;f=wr(v.a,f)}return Be(zm(fe(f)));case 1:return Be(t(xi,e.a,r));case 0:return $e(e.a)}}function jc(e,r,n){for(var a=r.length,o=new Array(a),i=0;i<a;i++){var c=Ke(e,r[i]);if(!ir(c))return Be(t(_u,i,c.a));o[i]=c.a}return $e(n(o))}function Ua(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function ks(e){return t(Cu,e.length,function(r){return e[r]})}function er(e,r){return Be(t(xi,"Expecting "+e,r))}function jn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return jn(e.b,r.b);case 6:return e.d===r.d&&jn(e.b,r.b);case 7:return e.e===r.e&&jn(e.b,r.b);case 9:return e.f===r.f&&Ac(e.g,r.g);case 10:return e.h===r.h&&jn(e.b,r.b);case 11:return Ac(e.g,r.g)}}function Ac(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!jn(e[a],r[a]))return!1;return!0}var Ls=$(function(e,r){return JSON.stringify(r,null,e)+""});function It(e){return e}function Ts(){return[]}function Ms(){return{}}var Ds=S(function(e,r,n){return n[e]=r,n});function js(e){return $(function(r,n){return n.push(e(r)),n})}var As=null;function hn(e){return{$:0,a:e}}function Bs(e){return{$:1,a:e}}function Ir(e){return{$:2,b:e,c:null}}var No=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Fs(e){return{$:5,b:e}}var Es=0;function di(e){var r={$:0,e:Es++,f:e,g:null,h:[]};return mi(r),r}function Yl(e){return Ir(function(r){r(hn(di(e)))})}function Xl(e,r){e.h.push(r),mi(e)}var Vs=$(function(e,r){return Ir(function(n){Xl(e,r),n(hn(ja))})}),bo=!1,Bc=[];function mi(e){if(Bc.push(e),!bo){for(bo=!0;e=Bc.shift();)Ws(e);bo=!1}}function Ws(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,mi(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return pi(r,a,e.fr,e.gc,e.f4,function(){return function(){}})});function pi(e,r,n,a,o,i){var c=t(Ul,e,r?r.flags:void 0);ir(c)||Xn(2);var l={},u=n(c.a),v=u.a,f=i(p,v),m=Rs(l,p);function p(d,b){var h=t(a,d,v);f(v=h.a,b),Ec(l,h.b,o(v))}return Ec(l,u.b,o(v)),m?{ports:m}:{}}var br={};function Rs(e,r){var n;for(var a in br){var o=br[a];o.a&&(n=n||{},n[a]=o.a(a,r)),e[a]=Gs(o,r)}return n}function Ns(e,r,n,a,o){return{b:e,c:r,d:n,e:a,f:o}}function Gs(e,r){var n={g:r,h:void 0},a=e.c,o=e.d,i=e.e,c=e.f;function l(u){return t(No,l,Fs(function(v){var f=v.a;return v.$===0?s(o,n,f,u):i&&c?C(a,n,f.i,f.j,u):s(a,n,i?f.i:f.j,u)}))}return n.h=di(t(No,l,e.b))}var Hs=$(function(e,r){return Ir(function(n){e.g(r),n(hn(ja))})});$(function(e,r){return t(Vs,e.h,{$:0,a:r})});function Ql(e){return function(r){return{$:1,k:e,l:r}}}function Is(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Fc=[],ho=!1;function Ec(e,r,n){if(Fc.push({p:e,q:r,r:n}),!ho){ho=!0;for(var a;a=Fc.shift();)qs(a.p,a.q,a.r);ho=!1}}function qs(e,r,n){var a={};bt(!0,r,a,null),bt(!1,n,a,null);for(var o in e)Xl(e[o],{$:"fx",a:a[o]||{i:P,j:P}})}function bt(e,r,n,a){switch(r.$){case 1:var o=r.k,i=Os(e,o,a,r.l);n[o]=Js(e,i,n[o]);return;case 2:for(var c=r.m;c.b;c=c.b)bt(e,c.a,n,a);return;case 3:bt(e,r.o,n,{s:r.n,t:a});return}}function Os(e,r,n,a){function o(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?br[r].e:br[r].f;return t(i,o,a)}function Js(e,r,n){return n=n||{i:P,j:P},e?n.i=wr(r,n.i):n.j=wr(r,n.j),n}function Us(e){br[e]&&Xn(3)}$(function(e,r){return r});function Ys(e,r){return Us(e),br[e]={f:Xs,u:r,a:Qs},Ql(e)}var Xs=$(function(e,r){return function(n){return e(r(n))}});function Qs(e,r){var n=P,a=br[e].u,o=hn(null);br[e].b=o,br[e].c=S(function(c,l,u){return n=l,o});function i(c){var l=t(Ul,a,c);ir(l)||Xn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ht,Br=typeof document!="undefined"?document:{};function gi(e,r){e.appendChild(r)}E(function(e,r,n,a){var o=a.node;return o.parentNode.replaceChild(Yr(e,function(){}),o),{}});function Go(e){return{$:0,a:e}}var Zl=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,o.push(c)}return i+=o.length,{$:1,c:r,d:bi(n),e:o,f:e,b:i}})}),mr=Zl(void 0),Zs=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,o.push(c)}return i+=o.length,{$:2,c:r,d:bi(n),e:o,f:e,b:i}})}),Ks=Zs(void 0);function ed(e,r,n,a){return{$:3,d:bi(e),g:r,h:n,i:a}}var rd=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function rn(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return rn([e,r],function(){return e(r)})});S(function(e,r,n){return rn([e,r,n],function(){return t(e,r,n)})});E(function(e,r,n,a){return rn([e,r,n,a],function(){return s(e,r,n,a)})});_e(function(e,r,n,a,o){return rn([e,r,n,a,o],function(){return C(e,r,n,a,o)})});tr(function(e,r,n,a,o,i){return rn([e,r,n,a,o,i],function(){return z(e,r,n,a,o,i)})});Rt(function(e,r,n,a,o,i,c){return rn([e,r,n,a,o,i,c],function(){return Ge(e,r,n,a,o,i,c)})});ie(function(e,r,n,a,o,i,c,l){return rn([e,r,n,a,o,i,c,l],function(){return si(e,r,n,a,o,i,c,l)})});fi(function(e,r,n,a,o,i,c,l,u){return rn([e,r,n,a,o,i,c,l,u],function(){return Nt(e,r,n,a,o,i,c,l,u)})});var Kl=$(function(e,r){return{$:"a0",n:e,o:r}}),nd=$(function(e,r){return{$:"a1",n:e,o:r}}),eu=$(function(e,r){return{$:"a2",n:e,o:r}}),_n=$(function(e,r){return{$:"a3",n:e,o:r}});S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function ad(e){return e=="script"?"p":e}function td(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?t(Kl,r.n,od(e,r.o)):r});function od(e,r){var n=Ai(r);return{$:r.$,a:n?s(ji,n<3?id:cd,be(e),r.a):t(wa,e,r.a)}}var id=$(function(e,r){return w(e(r.a),r.b)}),cd=$(function(e,r){return{ar:e(r.ar),c5:r.c5,cX:r.cX}});function bi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,o=n.n,i=n.o;if(a==="a2"){o==="className"?Vc(r,o,i):r[o]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&o==="class"?Vc(c,o,i):c[o]=i}return r}function Vc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Yr(e,r){var n=e.$;if(n===5)return Yr(e.k||(e.k=e.m()),r);if(n===0)return Br.createTextNode(e.a);if(n===4){for(var a=e.k,o=e.j;a.$===4;)typeof o!="object"?o=[o,a.j]:o.push(a.j),a=a.k;var i={j:o,p:r},c=Yr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ho(c,r,e.d),c}var c=e.f?Br.createElementNS(e.f,e.c):Br.createElement(e.c);ht&&e.c=="a"&&c.addEventListener("click",ht(c)),Ho(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)gi(c,Yr(n===1?l[u]:l[u].b,r));return c}function Ho(e,r,n){for(var a in n){var o=n[a];a==="a1"?ld(e,o):a==="a0"?vd(e,r,o):a==="a3"?ud(e,o):a==="a4"?$d(e,o):(a!=="value"&&a!=="checked"||e[a]!==o)&&(e[a]=o)}}function ld(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function ud(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function $d(e,r){for(var n in r){var a=r[n],o=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(o,n,i):e.removeAttributeNS(o,n)}}function vd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var o in n){var i=n[o],c=a[o];if(!i){e.removeEventListener(o,c),a[o]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(o,c)}c=fd(r,i),e.addEventListener(o,c,hi&&{passive:Ai(i)<2}),a[o]=c}}var hi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){hi=!0}}))}catch{}function fd(e,r){function n(a){var o=n.q,i=Ke(o.a,a);if(!!ir(i)){for(var c=Ai(o),l=i.a,u=c?c<3?l.a:l.ar:l,v=c==1?l.b:c==3&&l.c5,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cX)&&a.preventDefault(),e),m,p;m=f.j;){if(typeof m=="function")u=m(u);else for(var p=m.length;p--;)u=m[p](u);f=f.p}f(u,v)}}return n.q=r,n}function sd(e,r){return e.$==r.$&&jn(e.a,r.a)}function ru(e,r){var n=[];return cr(e,r,n,0),n}function Ae(e,r,n,a){var o={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(o),o}function cr(e,r,n,a){if(e!==r){var o=e.$,i=r.$;if(o!==i)if(o===1&&i===2)r=yd(r),i=1;else{Ae(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];cr(e.k,r.k,f,0),f.length>0&&Ae(n,1,a,f);return;case 4:for(var m=e.j,p=r.j,d=!1,b=e.k;b.$===4;)d=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var h=r.k;h.$===4;)d=!0,typeof p!="object"?p=[p,h.j]:p.push(h.j),h=h.k;if(d&&m.length!==p.length){Ae(n,0,a,r);return}(d?!dd(m,p):m!==p)&&Ae(n,2,a,p),cr(b,h,n,a+1);return;case 0:e.a!==r.a&&Ae(n,3,a,r.a);return;case 1:Wc(e,r,n,a,md);return;case 2:Wc(e,r,n,a,pd);return;case 3:if(e.h!==r.h){Ae(n,0,a,r);return}var y=_i(e.d,r.d);y&&Ae(n,4,a,y);var x=r.i(e.g,r.g);x&&Ae(n,5,a,x);return}}}function dd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Wc(e,r,n,a,o){if(e.c!==r.c||e.f!==r.f){Ae(n,0,a,r);return}var i=_i(e.d,r.d);i&&Ae(n,4,a,i),o(e,r,n,a)}function _i(e,r,n){var a;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=_i(e[o],r[o]||{},o);i&&(a=a||{},a[o]=i);continue}if(!(o in r)){a=a||{},a[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var c=e[o],l=r[o];c===l&&o!=="value"&&o!=="checked"||n==="a0"&&sd(c,l)||(a=a||{},a[o]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function md(e,r,n,a){var o=e.e,i=r.e,c=o.length,l=i.length;c>l?Ae(n,6,a,{v:l,i:c-l}):c<l&&Ae(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=o[v];cr(f,i[v],n,++a),a+=f.b||0}}function pd(e,r,n,a){for(var o=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,m=0,p=0,d=a;m<v&&p<f;){var b=l[m],h=u[p],y=b.a,x=h.a,_=b.b,k=h.b,A=void 0,I=void 0;if(y===x){d++,cr(_,k,o,d),d+=_.b||0,m++,p++;continue}var H=l[m+1],G=u[p+1];if(H){var O=H.a,J=H.b;I=x===O}if(G){var W=G.a,Z=G.b;A=y===W}if(A&&I){d++,cr(_,Z,o,d),ca(i,o,y,k,p,c),d+=_.b||0,d++,la(i,o,y,J,d),d+=J.b||0,m+=2,p+=2;continue}if(A){d++,ca(i,o,x,k,p,c),cr(_,Z,o,d),d+=_.b||0,m+=1,p+=2;continue}if(I){d++,la(i,o,y,_,d),d+=_.b||0,d++,cr(J,k,o,d),d+=J.b||0,m+=2,p+=1;continue}if(H&&O===W){d++,la(i,o,y,_,d),ca(i,o,x,k,p,c),d+=_.b||0,d++,cr(J,Z,o,d),d+=J.b||0,m+=2,p+=2;continue}break}for(;m<v;){d++;var b=l[m],_=b.b;la(i,o,b.a,_,d),d+=_.b||0,m++}for(;p<f;){var ae=ae||[],h=u[p];ca(i,o,h.a,h.b,void 0,ae),p++}(o.length>0||c.length>0||ae)&&Ae(n,8,a,{w:o,x:c,y:ae})}var nu="_elmW6BL";function ca(e,r,n,a,o,i){var c=e[n];if(!c){c={c:0,z:a,r:o,s:void 0},i.push({r:o,A:c}),e[n]=c;return}if(c.c===1){i.push({r:o,A:c}),c.c=2;var l=[];cr(c.z,a,l,c.r),c.r=o,c.s.s={w:l,A:c};return}ca(e,r,n+nu,a,o,i)}function la(e,r,n,a,o){var i=e[n];if(!i){var c=Ae(r,9,o,void 0);e[n]={c:1,z:a,r:o,s:c};return}if(i.c===0){i.c=2;var l=[];cr(a,i.z,l,o),Ae(r,9,o,{w:l,A:i});return}la(e,r,n+nu,a,o)}function au(e,r,n,a){ua(e,r,n,0,0,r.b,a)}function ua(e,r,n,a,o,i,c){for(var l=n[a],u=l.r;u===o;){var v=l.$;if(v===1)au(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&ua(e,r,f,0,o,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var f=m.w;f.length>0&&ua(e,r,f,0,o,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var d=r.k;d.$===4;)d=d.k;return ua(e,d,n,a,o+1,i,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,y=0;y<b.length;y++){o++;var x=p===1?b[y]:b[y].b,_=o+(x.b||0);if(o<=u&&u<=_&&(a=ua(h[y],x,n,a,o,_,c),!(l=n[a])||(u=l.r)>i))return a;o=_}return a}function tu(e,r,n,a){return n.length===0?e:(au(e,r,n,a),_t(e,n))}function _t(e,r){for(var n=0;n<r.length;n++){var a=r[n],o=a.t,i=gd(o,a);o===e&&(e=i)}return e}function gd(e,r){switch(r.$){case 0:return bd(e,r.s,r.u);case 4:return Ho(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return _t(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,o=e.childNodes[a];a<n.length;a++)e.insertBefore(Yr(n[a],r.u),o);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=_t(e,i.w),e;case 8:return hd(e,r);case 5:return r.s(e);default:Xn(10)}}function bd(e,r,n){var a=e.parentNode,o=Yr(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),a&&o!==e&&a.replaceChild(o,e),o}function hd(e,r){var n=r.s,a=_d(n.y,r);e=_t(e,n.w);for(var o=n.x,i=0;i<o.length;i++){var c=o[i],l=c.A,u=l.c===2?l.s:Yr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&gi(e,a),e}function _d(e,r){if(!!e){for(var n=Br.createDocumentFragment(),a=0;a<e.length;a++){var o=e[a],i=o.A;gi(n,i.c===2?i.s:Yr(i.z,r.u))}return n}}function yi(e){if(e.nodeType===3)return Go(e.textContent);if(e.nodeType!==1)return Go("");for(var r=P,n=e.attributes,a=n.length;a--;){var o=n[a],i=o.name,c=o.value;r=wr(t(_n,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=wr(yi(v[a]),u);return s(mr,l,r,u)}function yd(e){for(var r=e.e,n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var wd=E(function(e,r,n,a){return pi(r,a,e.fr,e.gc,e.f4,function(o,i){var c=e.gg,l=a.node,u=yi(l);return ou(i,function(v){var f=c(v),m=ru(u,f);l=tu(l,u,m,o),u=f})})});E(function(e,r,n,a){return pi(r,a,e.fr,e.gc,e.f4,function(o,i){var c=e.c3&&e.c3(o),l=e.gg,u=Br.title,v=Br.body,f=yi(v);return ou(i,function(m){ht=c;var p=l(m),d=mr("body")(P)(p.eT),b=ru(f,d);v=tu(v,f,b,o),f=d,ht=0,u!==p.f8&&(Br.title=u=p.f8)})})});var yt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function ou(e,r){r(e);var n=0;function a(){n=n===1?0:(yt(a),r(e),1)}return function(o,i){e=o,i?(r(e),n===2&&(n=1)):(n===0&&yt(a),n=2)}}$(function(e,r){return t(Ei,Bi,Ir(function(){r&&history.go(r),e()}))});$(function(e,r){return t(Ei,Bi,Ir(function(){history.pushState({},"",r),e()}))});$(function(e,r){return t(Ei,Bi,Ir(function(){history.replaceState({},"",r),e()}))});var Sd={addEventListener:function(){},removeEventListener:function(){}},Pd=typeof window!="undefined"?window:Sd;S(function(e,r,n){return Yl(Ir(function(a){function o(i){di(n(i))}return e.addEventListener(r,o,hi&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});$(function(e,r){var n=Ke(e,r);return ir(n)?Q(n.a):F});function iu(e,r){return Ir(function(n){yt(function(){var a=document.getElementById(e);n(a?hn(r(a)):Bs(Im(e)))})})}function xd(e){return Ir(function(r){yt(function(){r(hn(e()))})})}$(function(e,r){return iu(r,function(n){return n[e](),ja})});$(function(e,r){return xd(function(){return Pd.scroll(e,r),ja})});S(function(e,r,n){return iu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,ja})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Cd=$(function(e,r){var n="g";e.fD&&(n+="m"),e.eU&&(n+="i");try{return Q(new RegExp(r,n))}catch{return F}});$(function(e,r){return r.match(e)!==null});var zd=S(function(e,r,n){for(var a=[],o=0,i=n,c=r.lastIndex,l=-1,u;o++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?Q(m):F}a.push(C(Ku,u[0],u.index,o,g(f))),l=r.lastIndex}return r.lastIndex=c,g(a)});E(function(e,r,n,a){var o=0;function i(c){if(o++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Q(v):F}return n(C(Ku,c,arguments[arguments.length-2],o,g(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,o=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;o.push(a.slice(i,l.index)),i=r.lastIndex}return o.push(a.slice(i)),r.lastIndex=c,g(o)});var Rc=0;function ya(e,r){for(;r.b;r=r.b)e(r.a)}function wi(e){for(var r=0;e.b;e=e.b)r++;return r}var kd=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Ld=_e(function(e,r,n,a,o){return{$:0,a:e,b:r,c:n,d:a,e:o}}),Td=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Md=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Dd=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),jd=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ad=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Bd=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Fd=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Ed=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Vd=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Wd=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Rd=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Nd=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},cu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},lu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Gd=function(e){e.gl.disable(e.gl.CULL_FACE)},Hd=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Id=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},qd=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Nc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Od=[Wd,Rd,Nd,cu,lu,Gd,Hd,Id,qd];function Gc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Jd(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function uu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ud(e,r,n,a){for(var o=n.a.dt,i=[],c=0;c<o;c++)i.push(String.fromCharCode(97+c));function l(d,b,h,y,x){var _;if(o===1)for(_=0;_<b;_++)d[h++]=b===1?y[x]:y[x][_];else i.forEach(function(k){for(_=0;_<b;_++)d[h++]=b===1?y[k][x]:y[k][x][_]})}var u=uu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*o,m=new u.type(wi(n.b)*f);ya(function(d){l(m,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=f},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),p}function Yd(e,r){if(r.a.dC>0){var n=e.createBuffer(),a=Xd(r.c,r.a.dC);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dt*wi(r.b),indexBuffer:null,buffers:{}}}function Xd(e,r){var n=new Uint32Array(wi(e)*r),a=0,o;return ya(function(i){if(r===1)n[a++]=i;else for(o=0;o<r;o++)n[a++]=i[String.fromCharCode(97+o)]},e),n}function Hc(e,r){return e+"#"+r}var $u=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),cu(n),lu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function o(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Hc(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Rc++,v||(v=Gc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=Rc++,f||(f=Gc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var m=Jd(a,v,f);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Qd(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var d=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(b)}c=Hc(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Zd(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=Yd(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[d.name]===void 0&&(h.buffers[d.name]=Ud(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[d.name]);var y=uu(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,k=0;k<y.arraySize;k++)a.enableVertexAttribArray(b+k),a.vertexAttribPointer(b+k,y.size,y.baseType,!1,_,x*k)}for(n.toggle=!n.toggle,ya(Hh(n),i.a),u=0;u<Nc.length;u++){var A=n[Nc[u]];A.toggle!==n.toggle&&A.enabled&&(Od[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.eb,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.eb,0,h.numIndices)}}return ya(o,e.g),r});function Qd(e,r,n,a){var o=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,b){var h=b.name,y=e.getUniformLocation(d,h);switch(b.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(y,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(y,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var k=l.textures.get(_);k||(k=_.e0(e),l.textures.set(_,k)),e.bindTexture(e.TEXTURE_2D,k),i[h]!==_&&(e.uniform1i(y,x),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};default:return function(){}}}for(var v={},f=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var p=e.getActiveUniform(o,m);v[a[p.name]||p.name]=u(o,p)}return v}function Zd(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Kd=S(function(e,r,n){return ed(r,{g:n,f:{},h:e},im,cm)}),em=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),rm=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),nm=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),am=$(function(e,r){e.contextAttributes.antialias=!0}),tm=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),om=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function im(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ya(function(o){return t(Gh,r,o)},e.h);var n=Br.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(o){o(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),kd(function(){return t($u,e,n)})):(n=Br.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function cm(e,r){return r.f=e.f,$u(r)}var lm=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/um(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function um(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Si=new Float64Array(3),Ic=new Float64Array(3),qc=new Float64Array(3),$m=S(function(e,r,n){return new Float64Array([e,r,n])}),vm=function(e){return e[0]},fm=function(e){return e[1]},sm=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var dm=function(e){return new Float64Array([e.gl,e.gp,e.dg])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function vu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(vu);function fu(e,r,n){return n===void 0&&(n=new Float64Array(3)),wt(vu(e,r,n),n)}$(fu);function su(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+a*a+o*o)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return n*n+a*a+o*o});function wt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/su(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var mm=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$a=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$($a);function Io(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Io);$(function(e,r){var n,a=Si,o=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$a(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],o[0]=($a(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],o[1]=($a(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],o[2]=($a(r,a)+e[14])/n,o});var pm=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var gm=function(e){return{gl:e[0],gp:e[1],dg:e[2],eJ:e[3]}},bm=function(e){return new Float64Array([e.gl,e.gp,e.dg,e.eJ])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/hm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function hm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+o*o+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+o*o+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var _m=new Float64Array(16),ym=new Float64Array(16),wm=function(e){var r=new Float64Array(16);return r[0]=e.dP,r[1]=e.dT,r[2]=e.dX,r[3]=e.d$,r[4]=e.dQ,r[5]=e.dU,r[6]=e.dY,r[7]=e.d0,r[8]=e.dR,r[9]=e.dV,r[10]=e.dZ,r[11]=e.d1,r[12]=e.dS,r[13]=e.dW,r[14]=e.d_,r[15]=e.d2,r},Sm=function(e){return{dP:e[0],dT:e[1],dX:e[2],d$:e[3],dQ:e[4],dU:e[5],dY:e[6],d0:e[7],dR:e[8],dV:e[9],dZ:e[10],d1:e[11],dS:e[12],dW:e[13],d_:e[14],d2:e[15]}};function du(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2*o/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*o/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+o)/(i-o),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*o/(i-o),c[15]=0,c}tr(du);E(function(e,r,n,a){var o=n*Math.tan(e*Math.PI/360),i=-o,c=i*r,l=o*r;return du(c,l,i,o,n,a)});function mu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-o),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+o)/(i-o),c[15]=1,c}tr(mu);E(function(e,r,n,a){return mu(e,r,n,a,-1,1)});function pu(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],m=e[8],p=e[9],d=e[10],b=e[11],h=e[12],y=e[13],x=e[14],_=e[15],k=r[0],A=r[1],I=r[2],H=r[3],G=r[4],O=r[5],J=r[6],W=r[7],Z=r[8],ae=r[9],ge=r[10],ye=r[11],se=r[12],xe=r[13],Oe=r[14],Re=r[15];return n[0]=a*k+l*A+m*I+h*H,n[1]=o*k+u*A+p*I+y*H,n[2]=i*k+v*A+d*I+x*H,n[3]=c*k+f*A+b*I+_*H,n[4]=a*G+l*O+m*J+h*W,n[5]=o*G+u*O+p*J+y*W,n[6]=i*G+v*O+d*J+x*W,n[7]=c*G+f*O+b*J+_*W,n[8]=a*Z+l*ae+m*ge+h*ye,n[9]=o*Z+u*ae+p*ge+y*ye,n[10]=i*Z+v*ae+d*ge+x*ye,n[11]=c*Z+f*ae+b*ge+_*ye,n[12]=a*se+l*xe+m*Oe+h*Re,n[13]=o*se+u*xe+p*Oe+y*Re,n[14]=i*se+v*xe+d*Oe+x*Re,n[15]=c*se+f*xe+b*Oe+_*Re,n}$(pu);$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],m=e[10],p=e[12],d=e[13],b=e[14],h=r[0],y=r[1],x=r[2],_=r[4],k=r[5],A=r[6],I=r[8],H=r[9],G=r[10],O=r[12],J=r[13],W=r[14];return n[0]=a*h+c*y+v*x,n[1]=o*h+l*y+f*x,n[2]=i*h+u*y+m*x,n[3]=0,n[4]=a*_+c*k+v*A,n[5]=o*_+l*k+f*A,n[6]=i*_+u*k+m*A,n[7]=0,n[8]=a*I+c*H+v*G,n[9]=o*I+l*H+f*G,n[10]=i*I+u*H+m*G,n[11]=0,n[12]=a*O+c*J+v*W+p,n[13]=o*O+l*J+f*W+d,n[14]=i*O+u*J+m*W+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=wt(r,Si);var a=r[0],o=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=o*a*l+i*u,n[2]=i*a*l-o*u,n[3]=0,n[4]=a*o*l-i*u,n[5]=o*o*l+c,n[6]=o*i*l+a*u,n[7]=0,n[8]=a*i*l+o*u,n[9]=o*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),o=1/su(r),i=r[0]*o,c=r[1]*o,l=r[2]*o,u=Math.cos(e),v=1-u,f=Math.sin(e),m=i*f,p=c*f,d=l*f,b=i*c*v,h=i*l*v,y=c*l*v,x=i*i*v+u,_=b+d,k=h-p,A=b-d,I=c*c*v+u,H=y+m,G=h+p,O=y-m,J=l*l*v+u,W=n[0],Z=n[1],ae=n[2],ge=n[3],ye=n[4],se=n[5],xe=n[6],Oe=n[7],Re=n[8],Or=n[9],Jr=n[10],go=n[11],cf=n[12],lf=n[13],uf=n[14],$f=n[15];return a[0]=W*x+ye*_+Re*k,a[1]=Z*x+se*_+Or*k,a[2]=ae*x+xe*_+Jr*k,a[3]=ge*x+Oe*_+go*k,a[4]=W*A+ye*I+Re*H,a[5]=Z*A+se*I+Or*H,a[6]=ae*A+xe*I+Jr*H,a[7]=ge*A+Oe*I+go*H,a[8]=W*G+ye*O+Re*J,a[9]=Z*G+se*O+Or*J,a[10]=ae*G+xe*O+Jr*J,a[11]=ge*G+Oe*O+go*J,a[12]=cf,a[13]=lf,a[14]=uf,a[15]=$f,a});function Pm(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(Pm);E(function(e,r,n,a){var o=new Float64Array(16);return o[0]=a[0]*e,o[1]=a[1]*e,o[2]=a[2]*e,o[3]=a[3]*e,o[4]=a[4]*r,o[5]=a[5]*r,o[6]=a[6]*r,o[7]=a[7]*r,o[8]=a[8]*n,o[9]=a[9]*n,o[10]=a[10]*n,o[11]=a[11]*n,o[12]=a[12],o[13]=a[13],o[14]=a[14],o[15]=a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function xm(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(xm);E(function(e,r,n,a){var o=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],m=a[6],p=a[7],d=a[8],b=a[9],h=a[10],y=a[11];return o[0]=i,o[1]=c,o[2]=l,o[3]=u,o[4]=v,o[5]=f,o[6]=m,o[7]=p,o[8]=d,o[9]=b,o[10]=h,o[11]=y,o[12]=i*e+v*r+d*n+a[12],o[13]=c*e+f*r+b*n+a[13],o[14]=l*e+m*r+h*n+a[14],o[15]=u*e+p*r+y*n+a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],m=r[5],p=r[6],d=r[7],b=r[8],h=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=p,n[7]=d,n[8]=b,n[9]=h,n[10]=y,n[11]=x,n[12]=c*a+f*o+b*i+r[12],n[13]=l*a+m*o+h*i+r[13],n[14]=u*a+p*o+y*i+r[14],n[15]=v*a+d*o+x*i+r[15],n});S(function(e,r,n){var a=fu(e,r,Si),o=wt(Io(n,a,Ic),Ic),i=wt(Io(a,o,qc),qc),c=_m,l=ym;return c[0]=o[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=o[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=o[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,pu(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var L=Lf,Ya=wf,gu=S(function(e,r,n){var a=n.c,o=n.d,i=$(function(c,l){if(c.$){var v=c.a;return s(Ya,e,l,v)}else{var u=c.a;return s(Ya,i,l,u)}});return s(Ya,i,s(Ya,e,r,o),a)}),Pi=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,o=n.c,i=n.d,c=n.e,l=e,u=s(e,a,o,s(Pi,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Oc=function(e){return s(Pi,S(function(r,n,a){return t(L,w(r,n),a)}),P,e)},bu=1,Cm=2,hu=0,Be=function(e){return{$:1,a:e}},xi=$(function(e,r){return{$:3,a:e,b:r}}),Jc=$(function(e,r){return{$:0,a:e,b:r}}),_u=$(function(e,r){return{$:1,a:e,b:r}}),$e=function(e){return{$:0,a:e}},zm=function(e){return{$:2,a:e}},Q=function(e){return{$:0,a:e}},F={$:1},km=ts,yu=Ls,Ce=Jl,an=$(function(e,r){return t(rs,e,Gt(r))}),Ci=$(function(e,r){return g(t(es,e,r))}),wu=function(e){return t(an,`
    `,t(Ci,`
`,e))},je=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,o=n.b,i=e,c=t(e,a,r),l=o;e=i,r=c,n=l;continue e}else return r}),sr=function(e){return s(je,$(function(r,n){return n+1}),0,e)},qt=Tf,Lm=S(function(e,r,n){e:for(;;)if(q(e,r)<1){var a=e,o=r-1,i=t(L,r,n);e=a,r=o,n=i;continue e}else return n}),sn=$(function(e,r){return s(Lm,e,r,P)}),zi=$(function(e,r){return s(qt,e,t(sn,0,sr(r)-1),r)}),hr=vs,Su=function(e){var r=hr(e);return 97<=r&&r<=122},Pu=function(e){var r=hr(e);return r<=90&&65<=r},Tm=function(e){return Su(e)||Pu(e)},Mm=function(e){var r=hr(e);return r<=57&&48<=r},Dm=function(e){return Su(e)||Pu(e)||Mm(e)},fe=function(e){return s(je,L,P,e)},Qn=Xf,jm=$(function(e,r){return`

(`+(Ce(e+1)+(") "+wu(Am(r))))}),Am=function(e){return t(Bm,e,P)},Bm=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=Qn(n);if(h.$===1)return!1;var y=h.a,x=y.a,_=y.b;return Tm(x)&&t(km,Dm,_)}(),o=a?"."+n:"['"+(n+"']"),u=c,v=t(L,o,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ce(i)+"]"),u=c,v=t(L,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+t(an,"",fe(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(Ce(sr(f))+" ways:"));return t(an,`

`,t(L,b,t(zi,jm,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(an,"",fe(r)):"!"}();default:var p=e.a,d=e.b,b=function(){return r.b?"Problem with the value at json"+(t(an,"",fe(r))+`:

    `):`Problem with the given value:

`}();return b+(wu(t(yu,4,d))+(`

`+p))}}),pe=32,Fr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dn=sf,ki=Hf,Li=$(function(e,r){return Dc(r)/Dc(e)}),Fm=Nf,ur=ki(t(Li,2,pe)),Ti=C(Fr,0,ur,dn,dn),xu=pf,mn=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});var Em=$(function(e,r){return r(e)}),Vm=If,Sr=mf,Xe=$(function(e,r){return q(e,r)>0?e:r}),on=function(e){return{$:0,a:e}},Mi=gf,Wm=$(function(e,r){e:for(;;){var n=t(Mi,pe,e),a=n.a,o=n.b,i=t(L,on(a),r);if(o.b){var c=o,l=i;e=c,r=l;continue e}else return fe(i)}}),Rm=function(e){var r=e.a;return r},Nm=$(function(e,r){e:for(;;){var n=ki(r/pe);if(n===1)return t(Mi,pe,e).a;var a=t(Wm,e,P),o=n;e=a,r=o;continue e}}),Di=$(function(e,r){if(r.o){var n=r.o*pe,a=Vm(t(Li,pe,n-1)),o=e?fe(r.C):r.C,i=t(Nm,o,r.o);return C(Fr,Sr(r.s)+n,t(Xe,5,a*ur),i,r.s)}else return C(Fr,Sr(r.s),ur,dn,r.s)}),Gm=_e(function(e,r,n,a,o){e:for(;;){if(r<0)return t(Di,!1,{C:a,o:n/pe|0,s:o});var i=mn(s(xu,pe,r,e)),c=e,l=r-pe,u=n,v=t(L,i,a),f=o;e=c,r=l,n=u,a=v,o=f;continue e}}),Cu=$(function(e,r){if(e<=0)return Ti;var n=e%pe,a=s(xu,n,e-n,r),o=e-n-pe;return z(Gm,r,o,e,P,a)}),ir=function(e){return!e.$},B=ws,ee=ms,j=_s,ne=ps,Hm=function(e){return{$:2,a:e}},Ot=$(function(e,r){return e}),zu=$(function(e,r){return{eY:r.eY,eZ:e,bf:r.bf,ds:r.ds,dI:r.dI,ei:r.ei,aJ:r.aJ,gh:r.gh}}),wa=Ps,ji=xs,be=ss,Ai=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},_r=function(e){return e},Im=_r,Uc=tr(function(e,r,n,a,o,i){return{dy:i,dA:r,ef:a,ek:n,eo:e,ep:o}}),qm=os,tn=Qf,An=ns,Aa=$(function(e,r){return e<1?r:s(An,e,tn(r),r)}),Jt=cs,Ut=function(e){return e===""},Yt=$(function(e,r){return e<1?"":s(An,0,e,r)}),ku=ls,Yc=_e(function(e,r,n,a,o){if(Ut(o)||t(qm,"@",o))return F;var i=t(Jt,":",o);if(i.b){if(i.b.b)return F;var c=i.a,l=ku(t(Aa,c+1,o));if(l.$===1)return F;var u=l;return Q(Ge(Uc,e,t(Yt,c,o),u,r,n,a))}else return Q(Ge(Uc,e,o,F,r,n,a))}),Xc=E(function(e,r,n,a){if(Ut(a))return F;var o=t(Jt,"/",a);if(o.b){var i=o.a;return z(Yc,e,t(Aa,i,a),r,n,t(Yt,i,a))}else return z(Yc,e,"/",r,n,a)}),Qc=S(function(e,r,n){if(Ut(n))return F;var a=t(Jt,"?",n);if(a.b){var o=a.a;return C(Xc,e,Q(t(Aa,o+1,n)),r,t(Yt,o,n))}else return C(Xc,e,F,r,n)});$(function(e,r){if(Ut(r))return F;var n=t(Jt,"#",r);if(n.b){var a=n.a;return s(Qc,e,Q(t(Aa,a+1,r)),t(Yt,a,r))}else return s(Qc,e,F,r)});var Om=is,Bi=function(e){},Ba=hn,Jm=Ba(0),Lu=E(function(e,r,n,a){if(a.b){var o=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,m=v.b,p=n>500?s(je,e,r,fe(m)):C(Lu,e,r,n+1,m);return t(e,o,t(e,c,t(e,u,t(e,f,p))))}else return t(e,o,t(e,c,t(e,u,r)))}else return t(e,o,t(e,c,r))}else return t(e,o,r)}else return r}),zr=S(function(e,r,n){return C(Lu,e,r,0,n)}),X=$(function(e,r){return s(zr,$(function(n,a){return t(L,e(n),a)}),P,r)}),St=No,Fi=$(function(e,r){return t(St,function(n){return Ba(e(n))},r)}),Um=S(function(e,r,n){return t(St,function(a){return t(St,function(o){return Ba(t(e,a,o))},n)},r)}),Ym=function(e){return s(zr,Um(L),Ba(P),e)},Xm=Hs,Qm=$(function(e,r){var n=r;return Yl(t(St,Xm(e),n))}),Zm=S(function(e,r,n){return t(Fi,function(a){return 0},Ym(t(X,Qm(e),r)))}),Km=S(function(e,r,n){return Ba(0)}),ep=$(function(e,r){var n=r;return t(Fi,e,n)});br.Task=Ns(Jm,Zm,Km,ep);var rp=Ql("Task"),Ei=$(function(e,r){return rp(t(Fi,e,r))}),np=wd,ap=Uf,Pt={$:1},Tu=function(e){return{$:2,a:e}},Xt={$:0},rr=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),Zn=function(e){var r=e.b.q;return r.a},tp=function(e){var r=e.a,n=e.b.W,a=e.b.q,o=e.b.ae;if(o.b){var i=o.a,c=o.b;return Q(t(rr,r,{q:i,ae:c,W:t(L,a,n)}))}else return F},Mu=function(e){var r=e.b;return t(rr,Xt,r)},Ve=$(function(e,r){if(r.$)return e;var n=r.a;return n}),op=S(function(e,r,n){var a=n.a,o=n.b;switch(a.$){case 1:return r.ei.dr?Mu(n):n;case 2:var i=a.a.c6;return(q(i+r.ds,Zn(n).eY)>0?t(te,tp,Ve(t(rr,Pt,o))):_r)(t(rr,Tu({c6:i+r.ds}),o));default:var c=o.q,l=c.a,u=c.b,v=t(zu,l.eZ,D(r,{eY:l.eY+r.ds})),f=t(e,v,u);return t(rr,Xt,{q:w(v,f),ae:P,W:t(L,o.q,o.W)})}}),Du=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,o=n;e=a,r=o;continue e}else return r}}),ip=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,o=r.b,i=e-1,c=o,l=t(L,a,n);e=i,r=c,n=l;continue e}else return n}}),cp=$(function(e,r){return fe(s(ip,e,r,P))}),ju=S(function(e,r,n){if(r<=0)return P;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var o=a.b,_=o.a,i=o.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return g([_,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,p=m.b,c=p.a,d=p.b,f=d.a,b=d.b,h=b.a,y=b.b;return e>1e3?t(L,_,t(L,c,t(L,f,t(L,h,t(cp,r-4,y))))):t(L,_,t(L,c,t(L,f,t(L,h,s(ju,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return g([_])}}),Au=$(function(e,r){return s(ju,0,e,r)}),lp=$(function(e,r){var n=r.b.W,a=r.b.q,o=r.b.ae,i=ue(fe(n),ue(g([a]),o)),c=t(Au,e,i),l=t(Du,e,i);if(l.b){var u=l.a,v=l.b;return t(rr,Pt,{q:u,ae:v,W:fe(c)})}else{var f=fe(c);if(f.b){var m=f.a,p=f.b;return t(rr,Pt,{q:m,ae:P,W:p})}else return r}}),up=function(e){var r=e.b;return t(rr,Pt,r)},$p=function(e){var r=e.b;return t(rr,Tu({c6:Zn(e).eY}),r)},vp=$(function(e,r){switch(e.$){case 1:return up(r);case 2:return Mu(r);case 3:return $p(r);default:var n=e.a;return t(lp,n,r)}}),Bu=$(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),fp=$(function(e,r){return D(r,{aB:e(r.aB)})}),Fu=function(e){return{$:3,a:e}},Eu=function(e){return{$:2,a:e}},Vu=$(function(e,r){return{$:0,a:e,b:r}}),sp=$(function(e,r){return{$:1,a:e,b:r}}),re=$(function(e,r){if(r.$)return F;var n=r.a;return Q(e(n))}),K=function(e){return e<0?-e:e},Vi=us,dp=S(function(e,r,n){return t(Ve,0/0,Vi(t(e,r,n)))}),Wu=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var o=e,i=a;e=o,r=i;continue e}else return!1}),mp=zf,pp=Kf,Ru=function(e){return s(pp,L,P,e)},gp=$(function(e,r){var n=t(Wu,function(a){return a!=="0"&&a!=="."},Ru(r));return ue(e&&n?"-":"",r)}),Se=Jl,qo=Yf,Nu=fs,Gu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Qn(n);if(a.$===1)return"01";var o=a.a;return t(qo,"0",Gu(o))}else{var i=hr(r);return i>=48&&i<57?t(qo,Nu(i+1),n):"0"}},Oo=Gf,bp=Jf,Qt=function(e){return t(qo,e,"")},Hu=S(function(e,r,n){return e<=0?n:s(Hu,e>>1,ue(r,r),e&1?ue(n,r):n)}),Sa=$(function(e,r){return s(Hu,e,r,"")}),Jo=S(function(e,r,n){return ue(n,t(Sa,e-tn(n),Qt(r)))}),Uo=Zf,Iu=function(e){var r=t(Ci,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a;return w(n,o)}else{var n=r.a;return w(n,"0")}else return w("0","0")},hp=function(e){var r=t(Ci,"e",Se(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=t(Ve,0,ku(t(Om,"+",o)?t(Aa,1,o):o)),c=Iu(n),l=c.a,u=c.b,v=ue(l,u),f=i<0?t(Ve,"0",t(re,function(m){var p=m.a,d=m.b;return p+("."+d)},t(re,Bu(Qt),Qn(ue(t(Sa,K(i),"0"),v))))):s(Jo,i+1,"0",v);return ue(e<0?"-":"",f)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},_p=S(function(e,r,n){if(Oo(n)||bp(n))return Se(n);var a=n<0,o=Iu(hp(K(n))),i=o.a,c=o.b,l=tn(i)+r,u=ue(t(Sa,-l+1,"0"),s(Jo,l,"0",ue(i,c))),v=tn(u),f=t(Xe,1,l),m=t(e,a,s(An,f,v,u)),p=s(An,0,f,u),d=m?Uo(t(Ve,"1",t(re,Gu,Qn(Uo(p))))):p,b=tn(d),h=d==="0"?d:r<=0?ue(d,t(Sa,K(r),"0")):q(r,tn(c))<0?s(An,0,b-r,d)+("."+s(An,b-r,b,d)):ue(i+".",s(Jo,r,"0",c));return t(gp,a,h)}),da=_p($(function(e,r){var n=Qn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,o=a.a;return function(i){return i>53&&e||i>=53&&!e}(hr(o))})),yp=dp(da),wp=S(function(e,r,n){var a=t(Li,10,K(r-e)),o=a<0?3:a<1?2:a<2?1:0;return t(yp,o,n)}),Wi=kf,Kn=$(function(e,r){e:for(;;){if(r.$===-2)return F;var n=r.b,a=r.c,o=r.d,i=r.e,c=t(Wi,e,n);switch(c){case 0:var l=e,u=o;e=l,r=u;continue e;case 1:return Q(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=_e(function(e,r,n,a,o){return{$:-1,a:e,b:r,c:n,d:a,e:o}}),Pr={$:-2},In=_e(function(e,r,n,a,o){if(o.$===-1&&!o.a){o.a;var i=o.b,c=o.c,l=o.d,u=o.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,m=a.d,p=a.e;return z(Y,0,r,n,z(Y,1,v,f,m,p),z(Y,1,i,c,l,u))}else return z(Y,e,i,c,z(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,d=a.d;d.a;var b=d.b,h=d.c,y=d.d,x=d.e,p=a.e;return z(Y,0,v,f,z(Y,1,b,h,y,x),z(Y,1,r,n,p,o))}else return z(Y,e,r,n,a,o)}),Yo=S(function(e,r,n){if(n.$===-2)return z(Y,0,e,r,Pr,Pr);var a=n.a,o=n.b,i=n.c,c=n.d,l=n.e,u=t(Wi,e,o);switch(u){case 0:return z(In,a,o,i,s(Yo,e,r,c),l);case 1:return z(Y,a,o,r,c,l);default:return z(In,a,o,i,c,s(Yo,e,r,l))}}),cn=S(function(e,r,n){var a=s(Yo,e,r,n);if(a.$===-1&&!a.a){a.a;var o=a.b,i=a.c,c=a.d,l=a.e;return z(Y,1,o,i,c,l)}else{var u=a;return u}}),Sp=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},qu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d,u=o.e,v=e.e;v.a;var f=v.b,m=v.c,p=v.d;p.a;var d=p.b,b=p.c,h=p.d,y=p.e,x=v.e;return z(Y,0,d,b,z(Y,1,n,a,z(Y,0,i,c,l,u),h),z(Y,1,f,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,k=e.e;k.a;var f=k.b,m=k.c,p=k.d,x=k.e;return z(Y,1,n,a,z(Y,0,i,c,l,u),z(Y,0,f,m,p,x))}else return e},Zc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d;l.a;var u=l.b,v=l.c,f=l.d,m=l.e,p=o.e,d=e.e;d.a;var b=d.b,h=d.c,y=d.d,x=d.e;return z(Y,0,i,c,z(Y,1,u,v,f,m),z(Y,1,n,a,p,z(Y,0,b,h,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,k=_.d,p=_.e,A=e.e;A.a;var b=A.b,h=A.c,y=A.d,x=A.e;return z(Y,1,n,a,z(Y,0,i,c,k,p),z(Y,0,b,h,y,x))}else return e},Pp=Rt(function(e,r,n,a,o,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return z(Y,n,l,u,v,z(Y,0,a,o,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Zc(r)}else break e;else return c.a,c.d,Zc(r);else break e;return r}}),ut=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,o=e.d,i=o.a,c=o.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,z(Y,r,n,a,ut(o),l);var u=qu(e);if(u.$===-1){var v=u.a,f=u.b,m=u.c,p=u.d,d=u.e;return z(In,v,f,m,ut(p),d)}else return Pr}else return z(Y,r,n,a,ut(o),l)}else return Pr},ma=$(function(e,r){if(r.$===-2)return Pr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(q(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,z(Y,n,a,o,t(ma,e,i),c);var u=qu(r);if(u.$===-1){var v=u.a,f=u.b,m=u.c,p=u.d,d=u.e;return z(In,v,f,m,t(ma,e,p),d)}else return Pr}else return z(Y,n,a,o,t(ma,e,i),c);else return t(xp,e,si(Pp,e,r,n,a,o,i,c))}),xp=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(he(e,a)){var l=Sp(c);if(l.$===-1){var u=l.b,v=l.c;return z(In,n,u,v,i,ut(c))}else return Pr}else return z(In,n,a,o,i,t(ma,e,c))}else return Pr}),Cp=$(function(e,r){var n=t(ma,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,o=n.c,i=n.d,c=n.e;return z(Y,1,a,o,i,c)}else{var l=n;return l}}),Xa=S(function(e,r,n){var a=r(t(Kn,e,n));if(a.$)return t(Cp,e,n);var o=a.a;return s(cn,e,o,n)}),zp=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(Xa,r,re(function(a){if(a.$===1){var o=a.a,i=o.a,c=o.b;return t(sp,w(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(Xa,r,re(function(a){if(a.$)return a;var o=a.a,i=o.a,c=o.b;return t(Vu,w(i,c),s(wp,i,c,n))}));case 3:var r=e.a,n=e.b;return t(Xa,r,re(function(a){return a.$===3?Fu(n):a}));default:var r=e.a,n=e.b;return t(Xa,r,re(function(a){return a.$===2?Eu(n):a}))}},kp=function(e){return fp(zp(e))},Lp=$(function(e,r){return t(X,kp(e),r)}),Tp=$(function(e,r){return D(r,{eZ:t(Lp,e,r.eZ)})}),Mp=$(function(e,r){var n=r.a,a=r.b;return t(rr,n,D(a,{q:t(Bu,Tp(e),a.q)}))}),Dp=$(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),jp=S(function(e,r,n){var a=n.a,o=n.b,i=o.q;return t(rr,a,D(o,{q:t(Dp,t(e,i.a,r),i)}))}),Ap=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return D(a,{aU:!a.aU});case 2:var o=n.a;return D(a,{J:s(op,e,o,a.J)});case 3:var i=n.a;return D(a,{J:t(Mp,i,a.J)});case 4:var c=n.a;return D(a,{J:s(jp,r,c,a.J)});default:var l=n.a;return D(a,{J:t(vp,l,a.J)})}}),Bp=$(function(e,r){return t(rr,Xt,{q:w(e,r(e)),ae:P,W:P})}),Fp=Is,Kc=Fp(P),$r=bs,Pa=gs,Ep=Ys("tick",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return be({eY:c,bf:i,ds:o,dI:a,ei:n,aJ:r,gh:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return be({eL:m,e_:f,dr:v,e7:u,fw:l,fP:c,fU:i,ew:o,eE:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",$r(Pa)))},t(j,"left",ee))},t(j,"pressedKeys",$r(Pa)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return be({dr:v,ft:u,fC:l,fV:c,fW:i,eE:o,gl:a,gp:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return be({fl:n,gj:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return be({e1:r,e2:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne))))),Vp=function(e){return{$:4,a:e}},Wp={$:0},Rp=It,or=$(function(e,r){return t(eu,e,Rp(r))}),N=or("className"),Np=function(e){var r=e.b.q;return r.b},V=mr("div"),xa=or("id"),Gp=rd,xt=Gp,Hp=nd,Pe=Hp,Ip={$:1},qp=function(e){return{$:3,a:e}},Op=function(e){return{$:5,a:e}},el=mr("a"),Zt=mr("button"),Jp=_n("d"),Ou=Zl("http://www.w3.org/2000/svg"),Up=Ou("path"),Yp=Ou("svg"),Xp=_n("viewBox"),pa=function(e){return t(Yp,g([Xp("0 0 100 100"),t(Pe,"width","100%"),t(Pe,"height","100%")]),g([t(Up,g([Jp(e)]),P)]))},rl=function(e){return t(or,"href",td(e))},En={e6:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",ff:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fk:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fM:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fN:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ei:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fR:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",f0:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",gb:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",gd:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gt:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Qp=function(e){return{$:0,a:e}},Ju=Kl,Uu=$(function(e,r){return t(Ju,e,Qp(r))}),Kt=function(e){return t(Uu,"click",be(e))},nl=or("target"),Zp=or("title"),Xo=$(function(e,r){if(r.$===-2)return Pr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;return z(Y,n,a,t(e,a,o),t(Xo,e,i),t(Xo,e,c))}),Kp=Go,oe=Kp,eg=function(e){return s(Pi,S(function(r,n,a){return t(L,n,a)}),P,e)},rg=$(function(e,r){return{$:3,a:e,b:r}}),ng=$(function(e,r){return{$:2,a:e,b:r}}),ag=$(function(e,r){return{$:0,a:e,b:r}}),tg=$(function(e,r){return{$:1,a:e,b:r}}),kr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Yu=C(kr,0/255,0/255,0/255,1),Xu=It,og=$(function(e,r){return t(eu,e,Xu(r))}),Qu=og("checked"),Qe=qf,ig=S(function(e,r,n){return ue(t(Sa,e-tn(n),Qt(r)),n)}),Ct=Af,Zu=function(e){var r=function(n){return n<10?Ce(n):Qt(Nu(87+n))};return e<16?r(e):ue(Zu(e/16|0),r(t(Ct,16,e)))},cg=t(te,Zu,t(ig,2,"0")),Ri=function(e){var r=e.a,n=e.b,a=e.c,o=e.d;return{aQ:o,cg:a,cm:n,cZ:r}},lg=function(e){var r=Ri(e),n=r.cZ,a=r.cm,o=r.cg;return t(an,"",t(L,"#",t(X,t(te,Qe,cg),g([n*255,a*255,o*255]))))},zt=or("htmlFor"),Er=$(function(e,r){if(r.$)return F;var n=r.a;return e(n)}),kt=$(function(e,r){if(r.$){var a=r.a;return Be(a)}else{var n=r.a;return e(n)}}),ug=S(function(e,r,n){var a=e(r);if(a.$)return n;var o=a.a;return t(L,o,n)}),pn=$(function(e,r){return s(zr,ug(e),P,r)}),Ku=E(function(e,r,n,a){return{fq:r,fA:e,fH:n,f3:a}}),$g=zd,vg=$s,fg=$(function(e,r){if(r.$)return Be(e);var n=r.a;return $e(n)}),sg=Cd,dg=function(e){return t(sg,{eU:!1,fD:!1},e)},ea=function(e){if(e.b){var r=e.a;return e.b,Q(r)}else return F},mg=$(function(e,r){if(r.$){var a=r.a;return Be(a)}else{var n=r.a;return $e(e(n))}}),pg=function(e){return{$:2,a:e}},gg=function(e){return{$:0,a:e}},bg=function(e){return{$:1,a:e}},_o=$(function(e,r){return hr(r)-hr(e)}),yo=S(function(e,r,n){var a=hr(n);return q(hr(e),a)<1&&q(a,hr(r))<1}),hg=$(function(e,r){var n=function(o){return q(o,e)<0?$e(o):Be(bg(r))},a=s(yo,"0","9",r)?$e(t(_o,"0",r)):s(yo,"a","z",r)?$e(10+t(_o,"a",r)):s(yo,"A","Z",r)?$e(10+t(_o,"A",r)):Be(gg(r));return t(kt,n,a)}),e$=$(function(e,r){var n=Qn(r);if(n.$===1)return $e(0);var a=n.a,o=a.a,i=a.b;return t(kt,function(c){return t(kt,function(l){return $e(c+l*e)},t(e$,e,i))},t(hg,e,o))}),_g=$(function(e,r){return 2<=e&&e<=36?t(e$,e,Uo(r)):Be(pg(e))}),yg=_g(16),wg=S(function(e,r,n){return C(kr,e,r,n,1)}),Sg=E(function(e,r,n,a){return C(kr,e,r,n,a)}),Xr=jf,Pg=$(function(e,r){var n=t(Xr,10,e);return Qe(r*n)/n}),xg=as,Cg=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ru(n);if(a.b&&!a.b.b){var o=a.a;return vg(g([o,o]))}else return n};return t(te,xg,t(te,function(n){return t(re,function(a){return s($g,1,a,n)},dg(e))},t(te,Er(ea),t(te,re(function(n){return n.f3}),t(te,re(pn(_r)),t(te,fg("Parsing hex regex failed"),kt(function(n){var a=t(X,t(te,r,t(te,yg,mg(Fm))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var o=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return $e(C(Sg,o/255,c/255,u/255,t(Pg,2,f/255)))}else break e;else{var o=a.a.a,m=a.b,c=m.a.a,p=m.b,u=p.a.a;return $e(s(wg,o/255,c/255,u/255))}else break e;return Be("Parsing ints from hex failed")})))))))}(),Ca=mr("input"),Lt=mr("label"),Tt=or("name"),r$=$(function(e,r){return s(zr,j,r,e)}),zg=t(r$,g(["target","checked"]),ee),n$=function(e){return t(Uu,"change",t(wa,e,zg))},kg=function(e){return w(e,!0)},Lg=function(e){return{$:1,a:e}},Tg=$(function(e,r){return t(Ju,e,Lg(r))}),Mg=t(r$,g(["target","value"]),Pa),eo=function(e){return t(Tg,"input",t(wa,kg,t(wa,e,Mg)))},a$=or("max"),t$=or("min"),o$=function(e){return t(or,"step",e)},za=or("type"),ro=or("value"),al=function(e){var r=e.cs,n=e.db,a=e.cI,o=e.cE,i=e.c4,c=e.cM;return t(V,P,g([t(Lt,g([zt(r)]),g([t(V,g([N("relative w-full")]),g([t(V,g([N("inline-block")]),g([oe(r)])),t(V,g([N("inline-block float-right")]),g([oe(Se(n))]))]))])),t(Ca,g([za("range"),t(Pe,"width","100%"),xa(r),Tt(r),t$(Se(a)),a$(Se(o)),ro(Se(n)),o$(Se(i)),eo(t(te,Vi,t(te,Ve(42),c)))]),P)]))},i$=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Dg=$(function(e,r){switch(r.$){case 3:var c=r.a;return t(V,P,g([t(V,g([N("mb-2")]),g([t(Lt,g([zt(e)]),g([oe(e)]))])),t(Ca,g([za("checkbox"),xa(e),Tt(e),n$(rg(e)),Qu(c)]),P)]));case 0:var n=r.a,o=n.a,i=n.b,c=r.b;return al({cs:e,cE:i,cI:o,cM:ag(e),c4:.01*(i-o),db:c});case 1:var a=r.a,o=a.a,i=a.b,c=r.b;return al({cs:e,cE:i,cI:o,cM:t(te,Qe,tg(e)),c4:1,db:c});default:var c=r.a;return t(V,P,g([t(V,g([t(Pe,"margin-bottom","6px")]),g([t(Lt,g([zt(e)]),g([oe(e)]))])),t(Ca,g([za("color"),t(Pe,"width","100%"),t(Pe,"height","26px"),t(Pe,"padding","0px"),xa(e),Tt(e),eo(function(l){return t(ng,e,t(i$,Yu,Cg(l)))}),ro(lg(c))]),P)]))}}),jg=function(e){return t(V,g([N("p-6 border-y-[0.5px] border-white20")]),g([t(V,g([N("text-lg pb-2")]),g([oe(e.fE)])),t(V,g([N("pl-2 pr-2")]),eg(t(Xo,Dg,e.aB)))]))},Ag=function(e){return t(V,g([N("text-xs text-white60")]),t(X,jg,e))},Bg=function(e){return t(V,g([N("absolute left-[104px] bottom-2 text-sm text-white40")]),g([oe("clock: "+t(da,3,Zn(e).eY))]))},Fg=function(e){e.a;var r=e.b.W;return t(re,function(n){return Qe(60/(Zn(e).eY-n))},t(re,t(te,Rm,function(n){return n.eY}),ea(t(Du,59,r))))},Eg=function(e){return t(V,g([N("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Fg(e);if(r.$===1)return g([oe("... Fps")]);var n=r.a;return g([oe(Ce(n)+" Fps")])}())},Vg=function(e){return{$:0,a:e}},Wg=function(e){var r=e.b.W;return sr(r)},Rg=function(e){var r=e.b.W;e.b.q;var n=e.b.ae;return sr(r)+1+sr(n)},Ng=function(e){return t(Ca,g([N("absolute left-[100px] w-[490px]"),za("range"),t$(Ce(0)),a$(Ce(Rg(e)-1)),ro(Ce(Wg(e))),o$(Ce(1)),eo(t(te,Vi,t(te,Ve(42),t(te,Qe,Vg))))]),P)},tl={$:1},Gg={$:3},Hg={$:2},Ni=function(e){return!e.b},ol=$(function(e,r){return t(Zt,g([N("px-2 bg-black40"),N(r),Kt(e)]),g([oe("REC")]))}),il=$(function(e,r){return t(Zt,g([N("absolute left-[60px] mx-1 px-1 bg-black40"),Kt(r)]),g([t(V,g([N("w-4 h-6 fill-white80")]),g([pa(e)]))]))}),Ig=function(e){var r=e.a,n=e.b.ae;return t(V,g([N("py-1")]),g([function(){switch(r.$){case 0:return t(ol,tl,"text-red-500 font-bold");case 1:return t(ol,Hg,"text-white80 font-bold");default:return t(V,P,P)}}(),function(){switch(r.$){case 0:return t(V,P,P);case 1:return Ni(n)?t(V,P,P):t(il,En.fN,Gg);default:return t(il,En.fM,tl)}}()]))},qg=function(e){return t(V,g([N("absolute pl-4 py-4 bottom-0 right-[300px] w-[600px] h-16 border-[0.5px] border-white20 bg-black20")]),g([Ng(e),Ig(e),Eg(e),Bg(e)]))},Gi=function(e){return t(an,"",e)},Og=$(function(e,r){if(r.b){var n=r.a,a=r.b,o=$(function(c,l){return t(L,e,t(L,c,l))}),i=s(zr,o,P,a);return t(L,n,i)}else return P}),Jg=function(e){var r=e.a;return he(r,Xt)},Ur=mr("p"),c$=mr("pre"),Ug=$(function(e,r){var n=Jg(r.J)?t(V,P,P):t(V,g([N("absolute pointer-events-none w-8 h-8"),t(Pe,"left",Se(e.ei.gl+.5*e.aJ.gj)+"px"),t(Pe,"top",Se(-e.ei.gp+.5*e.aJ.fl)+"px")]),g([t(V,g([N(e.ei.ft?"fill-black80":"fill-white40")]),g([pa(En.ei)]))]));return t(V,P,g([n,t(c$,g([N("fixed p-2 w-[300px] h-[130px] bottom-0 right-0 border-[0.5px] border-white20 bg-black20 text-xs text-white60")]),g([t(Ur,P,g([oe("pressedKeys: "+Gi(t(Og," ",e.dI.fP)))])),t(Ur,P,g([oe("delta time: "+t(da,4,e.ds))])),t(Ur,P,g([oe("pointer is down: "+(e.ei.ft?"yes":"no"))])),t(Ur,P,g([oe("pointer.x: "+t(da,2,e.ei.gl))])),t(Ur,P,g([oe("pointer.y: "+t(da,2,e.ei.gp))])),t(Ur,P,g([oe("wheel deltaX: "+Se(e.gh.e1))])),t(Ur,P,g([oe("wheel deltaY: "+Se(e.gh.e2))]))]))]))}),Yg=$(function(e,r){var n=t(Zt,g([N(r.aU?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Kt(Ip),Zp("Distraction Free Mode")]),g([pa(En.gt)])),a=t(V,g([N("absolute w-8 bottom-12")]),g([t(el,g([N("fill-twitterBlue40 hover:fill-twitterBlue"),rl("https://twitter.com/AzizErkalSelman"),nl("_blank")]),g([pa(En.gb)]))])),o=t(V,g([N("absolute w-8 bottom-2")]),g([t(el,g([N("fill-githubCat40 hover:fill-githubCat"),rl("https://github.com/erkal/elm-3d-playground-exploration"),nl("_blank")]),g([pa(En.ff)]))]));return r.aU?t(V,g([N("fixed w-10 h-10 p-1")]),g([n])):t(V,P,g([t(V,g([N("absolute h-full w-10 p-1 border-r-[0.5px] border-white20 bg-black80")]),g([n,a,o])),t(V,g([N("absolute overflow-y-auto left-10 h-full w-[220px] bg-black20 border-x-[0.5px] border-white20")]),g([t(xt,qp,Ag(Zn(r.J).eZ))])),t(xt,Op,qg(r.J)),t(Ug,e,r)]))}),Xg=S(function(e,r,n){var a=Np(n.J),o=Zn(n.J);return t(V,g([N("bg-black40"),N("select-none"),N("antialiased"),N("font-mono"),t(Pe,"width",Se(o.aJ.gj)+"px"),t(Pe,"height",Se(o.aJ.fl)+"px")]),g([t(V,g([N("fixed")]),g([t(xt,Ot(Wp),t(e,o,a))])),t(V,g([xa("gui")]),g([t(Yg,o,n),t(V,g([N("fixed w-[300px] top-0 right-0 border-[0.5px] border-white20 text-xs text-white60")]),g([t(xt,Vp,t(r,o,a))]))]))]))}),Qg=tr(function(e,r,n,a,o,i){var c=$(function(u,v){return w(C(Ap,r,i,u,v),Kc)}),l=function(u){var v=t(zu,n,u.fs);return w({aU:u.fs.aJ.gj<500,J:t(Bp,v,a)},Kc)};return np({fr:l,f4:Ot(Ep(Hm)),gc:c,gg:t(Xg,e,o)})}),yr=$(function(e,r){return{gl:e,gp:r}}),Zg=$(function(e,r){return t(re,function(n){if(n.$===3){var a=n.a;return a}else return!1},t(Kn,e,r.aB))}),Kg=$(function(e,r){return t(Ve,!1,ea(t(pn,Zg(e),r)))}),e0=$(function(e,r){return t(Kg,e,r.eZ)}),ra=e0,r0=$(function(e,r){return t(re,function(n){if(n.$)return 0;var a=n.b;return a},t(Kn,e,r.aB))}),n0=$(function(e,r){return t(Ve,0,ea(t(pn,r0(e),r)))}),a0=$(function(e,r){return t(n0,e,r.eZ)}),Mr=a0,Hi=function(e){return e},ke=function(e){return e},Mt=function(e){var r=e;return-r},t0=$(function(e,r){var n=e,a=r;return{gl:n.gp*a.dg-n.dg*a.gp,gp:n.dg*a.gl-n.gl*a.dg,dg:n.gl*a.gp-n.gp*a.gl}}),l$=function(e){var r=e;return r.de},u$=function(e){var r=e;return r.df},o0=function(e){return t(t0,l$(e),u$(e))},na=function(e){var r=e;return r.cN},Nr=Ff,Gr=Ef,$t=S(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Nr(c),u=Gr(c),v=a.e4,f=v,m=f.gl*u,p=l*m,d=m*m,b=f.gp*u,h=l*b,y=m*b,x=b*b,_=1-2*(d+x),k=f.dg*u,A=l*k,I=2*(y-A),H=2*(y+A),G=m*k,O=2*(G+h),J=2*(G-h),W=b*k,Z=2*(W-p),ae=2*(W+p),ge=k*k,ye=1-2*(x+ge),se=1-2*(d+ge);return{gl:ye*i.gl+I*i.gp+O*i.dg,gp:H*i.gl+se*i.gp+Z*i.dg,dg:J*i.gl+ae*i.gp+_*i.dg}}),Fa=S(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Nr(c),u=Gr(c),v=a.cN,f=v,m=i.gl-f.gl,p=i.gp-f.gp,d=i.dg-f.dg,b=a.e4,h=b,y=h.gl*u,x=l*y,_=y*y,k=h.gp*u,A=l*k,I=y*k,H=k*k,G=1-2*(_+H),O=h.dg*u,J=l*O,W=2*(I-J),Z=2*(I+J),ae=y*O,ge=2*(ae+A),ye=2*(ae-A),se=k*O,xe=2*(se-x),Oe=2*(se+x),Re=O*O,Or=1-2*(H+Re),Jr=1-2*(_+Re);return{gl:f.gl+Or*m+W*p+ge*d,gp:f.gp+Z*m+Jr*p+xe*d,dg:f.dg+ye*m+Oe*p+G*d}}),aa=function(e){return e},yn=function(e){var r=e;return r.de},wn=function(e){var r=e;return r.df},Sn=function(e){var r=e;return r.dh},$$=S(function(e,r,n){return aa({cN:s(Fa,e,r,na(n)),de:s($t,e,r,yn(n)),df:s($t,e,r,wn(n)),dh:s($t,e,r,Sn(n))})}),cl=S(function(e,r,n){return s($$,e(n),r,n)}),Ii=function(e){var r=e;return r.e4},ta=$(function(e,r){var n=e,a=r;return{gl:a.gl+n.gl,gp:a.gp+n.gp,dg:a.dg+n.dg}}),v$=$(function(e,r){return aa({cN:t(ta,e,na(r)),de:yn(r),df:wn(r),dh:Sn(r)})}),i0=$(function(e,r){var n=e,a=r;return{gl:n*a.gl,gp:n*a.gp,dg:n*a.dg}}),c0=S(function(e,r,n){return t(v$,t(i0,r,e),n)}),l0=S(function(e,r,n){return s(c0,Ii(e(n)),r,n)}),xr=$(function(e,r){return{e4:r,cN:e}}),u0=function(e){var r=e;return t(xr,r.cN,r.de)},$0=function(e){var r=e;return t(xr,r.cN,r.df)},v0=function(e){var r=e;return t(xr,r.cN,r.dh)},f$=function(e){var r=aa({cN:e.a_,de:u$(e.dz),df:o0(e.dz),dh:l$(e.dz)}),n=s(l0,v0,e.cl,s(cl,u0,Mt(e.bO),s(cl,$0,e.bH,r)));return n},f0=function(e){return{$:1,a:e}},De=function(e){var r=e;return K(r)},s0=function(e){return{cY:f0(De(e.eI)),dc:e.dc}},ar=function(e){return e},qr={gl:0,gp:0,dg:0},s$=_r,ln=function(e){return e},d0=ln({gl:1,gp:0,dg:0}),qi=d0,d$=ln({gl:0,gp:0,dg:1}),no=d$,m$=s$({cN:qr,de:no,df:qi}),m0=function(e){var r=e.a_,n=e.bH,a=e.bO,o=e.eI;return s0({dc:f$({bH:ar(n),cl:ke(1e3),bO:ar(a),a_:Hi(r),dz:m$}),eI:ke(o)})},Vr=Bf,Bn=function(e){return ar(Vr*(e/180))},p0=function(e){return{$:0,a:e}},vt=function(e){var r=e;return .5*r},g0=Vf,b0=function(e){var r=e;return g0(r)},h0=function(e){var r=vt(De(e.eG)),n=b0(r);return{cY:p0(n),dc:e.dc}},_0=function(e){var r=e.a_,n=e.bH,a=e.bO,o=e.cl;return h0({eG:Bn(40),dc:f$({bH:ar(n),cl:ke(o),bO:ar(a),a_:Hi(r),dz:m$})})},p$=$(function(e,r){return t(ra,"orthographic",e)?m0({bH:t(Mr,"camera azimuth",e),bO:t(Mr,"camera elevation",e),a_:r,eI:t(Mr,"camera distance",e)}):_0({bH:t(Mr,"camera azimuth",e),cl:t(Mr,"camera distance",e),bO:t(Mr,"camera elevation",e),a_:r})}),Oi={$:0},y0={co:!0,cp:"",cq:"",aK:Oi},w0=function(e){if(e.b){var r=e.a,n=e.b;return Q(s(je,Xe,r,n))}else return F},g$=$(function(e,r){var n={dl:1,cn:1+t(Ve,-1,w0(t(X,function(a){return a.cn},r.fO))),ej:e};return D(r,{fO:t(L,n,r.fO)})}),b$={aS:{bK:t(yr,0,0),fQ:.5},e5:0,fX:0,es:0,ga:P,gf:w(0,0)},h$=t(g$,g([t(yr,6,0),t(yr,6,6),t(yr,0,6)]),{cc:b$,dk:F,ao:P,ch:P,fO:P}),S0=function(e){return{E:P,n:P,q:e}},P0=function(e){return{an:t(p$,e,{gl:0,gp:0,dg:0}),l:y0,k:S0(h$),aG:t(yr,0,0)}},ia=$(function(e,r){return w(e,Fu(r))}),x0=$(function(e,r){return w(e,Eu(r))}),C0=S(function(e,r,n){return{aB:n,fu:r,fE:e}}),ao=Pr,z0=function(e){return s(je,$(function(r,n){var a=r.a,o=r.b;return s(cn,a,o,n)}),ao,e)},k0=S(function(e,r,n){return s(C0,e,r,z0(n))}),Qa=k0,Ln=S(function(e,r,n){var a=r.a,o=r.b;return w(e,t(Vu,w(a,o),n))}),L0=C(kr,255/255,255/255,255/255,1),T0=g([s(Qa,"View Options",!0,g([t(ia,"draw speed vector",!1),t(ia,"draw ball trail",!0),t(ia,"orthographic",!0),t(ia,"unlit",!0)])),s(Qa,"Camera",!0,g([s(Ln,"camera distance",w(3,60),40),s(Ln,"camera azimuth",w(0,2*Vr),0),s(Ln,"camera elevation",w(-Vr/2,Vr/2),0)])),s(Qa,"Physics Parameters",!0,g([t(ia,"fix time steps",!0),s(Ln,"gas force",w(20,60),40),s(Ln,"friction",w(0,1),.4),s(Ln,"direction change speed",w(1,5),3)])),s(Qa,"Color",!0,g([t(x0,"floor color",L0)]))]),_$=function(e){return{$:1,a:e}},Ea=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*o+a*i}),lr=Of,to=function(e){return lr(t(Ea,e,e))},vr=$(function(e,r){return to(w(e.gl-r.gl,e.gp-r.gp))}),M0=$(function(e,r){var n=r.aK;if(n.$){var a=n.a,o=t(yr,e.gl,e.gp);return D(r,{aK:_$(function(){var i=fe(a);if(i.b){var c=i.a;return t(vr,c,o)>2?ue(a,g([o])):a}else return g([o])}())})}else return r}),D0=$(function(e,r){return e.dI.ew?D(r,{l:t(M0,r.aG,r.l)}):r}),Ne=S(function(e,r,n){return{gl:e,gp:r,dg:n}}),Va=function(e){var r=e;return r.q},j0=$(function(e,r){var n=Va(r.k).cc;return D(r,{an:t(p$,e,s(Ne,n.aS.bK.gl,n.aS.bK.gp,0))})}),y$=$(function(e,r){var n=r;return D(n,{q:e(n.q)})}),A0=function(e){var r=function(n){return!n.dF&&t(vr,n.bK,e.cc.aS.bK)<1?D(n,{dF:!0}):n};return D(e,{ao:t(X,r,e.ao)})},w$=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(n+o,a+i)}),Cr=$(function(e,r){var n=r.a,a=r.b;return w(e*n,e*a)}),Zr=$(function(e,r){return t(Cr,e/to(r),r)}),B0=$(function(e,r){return t(Zr,t(Ea,e,r),e)}),F0=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(o-n,i-a)}),E0=$(function(e,r){var n=r.cc,a=t(B0,e.b_,n.gf),o=t(F0,a,n.gf),i=t(w$,o,t(Cr,e.b3.dl,t(Cr,-1,a)));return D(r,{cc:D(n,{gf:i})})}),V0=$(function(e,r){return r.b?s(zr,L,r,e):e}),Ee=function(e){return s(zr,V0,P,e)},Hr=function(e){return e*Vr/180},oo=$(function(e,r){return w(e,r)}),Ji=function(e){var r=function(){if(e.b){var n=e.a,a=e.b;return ue(a,g([n]))}else return P}();return s(qt,oo,e,r)},Wa=$(function(e,r){var n=r.a,a=r.b;return w(n*Nr(e)-a*Gr(e),n*Gr(e)+a*Nr(e))}),We=$(function(e,r){var n=e.a,a=e.b;return D(r,{gl:r.gl+n,gp:r.gp+a})}),Le=$(function(e,r){return w(e.gl-r.gl,e.gp-r.gp)}),W0=$(function(e,r){var n=r.a,a=r.b,o=t(Zr,e,t(Wa,-Hr(90),t(Le,a,n)));return w(t(We,o,n),t(We,o,a))}),R0=$(function(e,r){return{e$:t(X,function(n){return{bK:n,fQ:e}},r),f_:t(X,W0(e),Ji(r))}}),fr=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*i-a*o}),N0=$(function(e,r){var n=w(w(e.ah,e.e4),w(r.ah,r.e4)),a=n.a,o=a.a,i=a.b,c=n.b,l=c.a,u=c.b,v=t(fr,t(Le,l,o),i),f=t(fr,i,u),m=v/f,p=t(fr,t(Le,l,o),u),d=p/f;return!v&&!f?F:f&&0<=d&&0<=m?Q(t(We,t(Cr,d,i),o)):F}),S$=$(function(e,r){r.fQ;var n=r.bK,a=t(fr,e.e4,t(Le,n,e.ah))<0?1:-1;return t(N0,{e4:t(Wa,a*Hr(90),e.e4),ah:n},e)}),dr=function(e){var r=e.a,n=e.b;return w(n.gl-r.gl,n.gp-r.gp)},P$=function(e){var r=e.a,n=e.b;return{e4:dr(w(r,n)),ah:r}},G0=$(function(e,r){var n=e.a,a=e.b,o=r.fQ,i=t(S$,P$(e),r);if(i.$===1)return F;var c=i.a,l=t(vr,r.bK,c);if(q(l,o)<1){var u=t(We,t(Zr,-lr(o*o-l*l),dr(e)),c),v=t(Ea,t(Le,a,n),t(Le,u,n))>=0&&q(t(vr,n,u),t(vr,n,a))<1;return v?Q(u):F}else return F}),x$=Zr(1),H0=S(function(e,r,n){var a=w(e,t(We,r,e)),o=t(G0,a,n);return t(re,function(i){return{b_:x$(t(Le,i,n.bK)),b9:t(Le,i,e)}},o)}),I0=$(function(e,r){var n=e.a,a=r.a,o=w(w(n,dr(e)),w(a,dr(r))),i=o.a,c=i.a,l=i.b,u=o.b,v=u.a,f=u.b,m=t(fr,t(Le,v,c),l),p=t(fr,l,f),d=m/p,b=t(fr,t(Le,v,c),f),h=b/p;return!m&&!p?F:p&&0<=h&&h<=1&&0<=d&&d<=1?Q(t(We,t(Cr,h,l),c)):F}),C$=function(e){return x$(t(Wa,-Hr(90),dr(e)))},q0=S(function(e,r,n){var a=w(e,t(We,r,e)),o=t(I0,a,n);return t(re,function(i){return{b_:C$(n),b9:t(Le,i,e)}},o)}),z$=Mf,ll=$(function(e,r){return{bL:e,b_:r.b_,b9:r.b9}}),O0=S(function(e,r,n){var a=t(R0,e.fQ,n),o=a.f_,i=a.e$,c=t(pn,function(u){return t(re,ll(u.bK),s(H0,e.bK,r,u))},i),l=t(pn,function(u){return t(re,function(v){return t(ll,t(We,t(Zr,e.fQ,t(Wa,Hr(90),dr(u))),t(We,v.b9,e.bK)),v)},s(q0,e.bK,r,u))},o);return ea(t(z$,t(te,function(u){return u.b9},to),Ee(g([c,l]))))}),J0=$(function(e,r){return{bL:r.bL,b_:r.b_,b3:e,b9:r.b9}}),U0=$(function(e,r){var n=t(Cr,e.ds,r.cc.gf),a=function(c){return t(re,J0(c),s(O0,r.cc.aS,n,c.ej))},o=ea(t(z$,t(te,function(c){return c.b9},to),t(pn,a,r.fO)));if(o.$===1)return r;var i=o.a;return t(E0,i,D(r,{dk:Q(i.b3.cn),ch:t(Au,15,t(L,i.bL,r.ch))}))}),io=$(function(e,r){return Ee(t(X,e,r))}),co=$(function(e,r){return s(zr,$(function(n,a){return e(n)?t(L,n,a):a}),P,r)}),ul=$(function(e,r){var n=e.a,a=e.b,o=r.fQ,i=t(S$,P$(e),r);if(i.$===1)return P;var c=i.a,l=t(vr,r.bK,c);if(q(l,o)<1){var u=lr(o*o-l*l),v=t(We,t(Zr,u,dr(e)),c),f=function(p){return t(Ea,t(Le,a,n),t(Le,p,n))>=0&&q(t(vr,n,p),t(vr,n,a))<1},m=t(We,t(Zr,-u,dr(e)),c);return t(co,f,he(l,o)?g([m]):g([m,v]))}else return P}),Y0=$(function(e,r){var n=e.a,a=e.b;return q(t(vr,n,r.bK),r.fQ)<0&&q(t(vr,a,r.bK),r.fQ)>-1?t(ul,w(a,n),r):t(ul,w(n,a),r)}),X0=$(function(e,r){var n=r.a,a=w(w(e.ah,e.e4),w(n,dr(r))),o=a.a,i=o.a,c=o.b,l=a.b,u=l.a,v=l.b,f=t(fr,t(Le,u,i),c),m=t(fr,c,v),p=f/m,d=t(fr,t(Le,u,i),v),b=d/m;return!f&&!m?F:m&&b>=0&&p>=0&&p<=1?Q(t(We,t(Cr,b,c),i)):F}),Q0=$(function(e,r){var n=e.a;r.fQ;var a=r.bK,o=t(fr,dr(e),t(Le,a,n))<0?1:-1;return t(X0,{e4:t(Wa,o*Hr(90),dr(e)),ah:a},e)}),Z0=function(e){var r=e.cc,n=$(function(i,c){var l=t(Q0,i,c);if(l.$)return c;var u=l.a;return D(c,{bK:t(We,t(Zr,c.fQ,C$(i)),t(We,t(Le,u,c.bK),c.bK))})}),a=t(co,function(i){return!Ni(t(Y0,i,r.aS))},t(io,t(te,function(i){return i.ej},Ji),e.fO)),o=s(je,n,r.aS,a);return D(e,{cc:D(r,{aS:o})})},K0=$(function(e,r){return D(r,{cc:e(r.cc)})}),eb=$(function(e,r){return D(r,{gf:t(Cr,1-e.ds*5*t(Mr,"friction",e),r.gf)})}),Ui=S(function(e,r,n){return q(n,e)<0?e:q(n,r)>0?r:n}),rb=function(e){var r=e.a,n=e.b;return w(r*Nr(n),r*Gr(n))},nb=function(e){return(e.fU?1:0)-(e.fw?1:0)},ab=nb,tb=function(e){return(e.eE?1:0)-(e.dr?1:0)},wo=tb,ob=$(function(e,r){var n=t(Mr,"gas force",e),a=rb(w(1,r.e5)),o=w$(t(Cr,e.ds*n*wo(e.dI),a));return D(r,{e5:r.e5-ab(e.dI)*t(Mr,"direction change speed",e)*e.ds,es:wo(e.dI)?s(Ui,-14,14,r.es+e.ds*1e3*wo(e.dI)):t(Ea,r.gf,a),gf:o(r.gf)})}),ib=$(function(e,r){var n=r.aS;return D(r,{aS:D(n,{bK:t(We,t(Cr,e.ds,r.gf),r.aS.bK)})})}),cb=$(function(e,r){return D(r,{fX:r.fX+e.ds*r.es})}),lb=function(e){return D(e,{ga:function(){var r=e.ga;if(r.b){var n=r.a;return t(vr,n,e.aS.bK)>1?t(L,e.aS.bK,e.ga):e.ga}else return g([e.aS.bK])}()})},ub=$(function(e,r){return lb(t(ib,e,t(cb,e,t(eb,e,t(ob,e,r)))))}),$b=$(function(e,r){return A0(Z0(t(K0,ub(e),t(U0,e,r))))}),vb=$(function(e,r){var n=t($b,e,Va(r.k));return D(r,{k:t(y$,Ot(n),r.k)})}),Za=function(e){return e},un=function(e){var r=e;return r},fb=$(function(e,r){var n=e,a=r;return a.gl*n.gl+a.gp*n.gp+a.dg*n.dg}),ce=$(function(e,r){var n=r;return e*n}),k$=function(e){var r=e;return r.cN},sb=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.fG,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp+(a.dg-i.dg)*l.dg}),db=S(function(e,r,n){var a=e,o=r,i=n;return{gl:i.gl+o*a.gl,gp:i.gp+o*a.gp,dg:i.dg+o*a.dg}}),mb=$(function(e,r){var n=Ii(r),a=e,o=a.fG,i=t(fb,o,n);if(i){var c=k$(r),l=t(sb,e,c),u=t(ce,-1/i,l);return Q(s(db,n,u,c))}else return F}),pb=$(function(e,r){return{gl:e,gp:r}}),$l=$(function(e,r){var n=e,a=r;return n*a}),gb=function(e){var r=e;return r},vl=function(e){var r=e;return gb(r.eP)},bb=function(e){var r=e;return r.aT},hb=function(e){var r=e,n=t(Xe,K(r.gl),t(Xe,K(r.gp),K(r.dg)));if(n){var a=r.dg/n,o=r.gp/n,i=r.gl/n,c=lr(i*i+o*o+a*a);return Q({gl:i/c,gp:o/c,dg:a/c})}else return F},L$=$(function(e,r){var n=r;return n/e}),Qo=function(e){var r=e;return na(r)},T$=ln({gl:0,gp:0,dg:-1}),_b=$(function(e,r){var n=e,a=r;return a/n}),yb=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gl:v.gl*a.gl+l.gl*a.gp+i.gl*a.dg,gp:v.gp*a.gl+l.gp*a.gp+i.gp*a.dg,dg:v.dg*a.gl+l.dg*a.gp+i.dg*a.dg}}),Dt=function(e){var r=e;return{gl:-r.gl,gp:-r.gp,dg:-r.dg}},Zo=function(e){var r=e;return Dt(Sn(r))},wb=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.de,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),Yi=S(function(e,r,n){var a=e,o=r,i=n;return{gl:a,gp:o,dg:i}}),Sb=E(function(e,r,n,a){var o=e,i=r,c=n,l=a,u=o.cN,v=u,f=o.dh,m=f,p=o.df,d=p,b=o.de,h=b;return{gl:v.gl+i*h.gl+c*d.gl+l*m.gl,gp:v.gp+i*h.gp+c*d.gp+l*m.gp,dg:v.dg+i*h.dg+c*d.dg+l*m.dg}}),Pb=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.df,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),ve=0,xb=S(function(e,r,n){var a=e,o=t(Pb,vl(r),n),i=t(wb,vl(r),n),c=a.dc,l=c,u=bb(r);u.a;var v=u.b,f=a.cY;if(f.$){var b=f.a,h=t(_b,v,b),y=C(Sb,l,t($l,h,i),t($l,h,o),ve);return t(xr,y,Zo(a.dc))}else{var m=f.a,p=Mt(t(L$,m,t(ce,.5,v))),d=t(yb,l,t(Ve,T$,hb(s(Yi,i,o,p))));return t(xr,Qo(a.dc),d)}}),Ko=function(e){var r=e;return{gl:Nr(r),gp:Gr(r)}},Cb=function(e){var r=e;return{gl:-r.gp,gp:r.gl}},zb=function(e){return e},kb=$(function(e,r){return zb({cN:r,de:e,df:Cb(e)})}),Lb=$(function(e,r){return t(kb,Ko(e),r)}),Tb=S(function(e,r,n){var a=e.a,o=e.b;return{eP:t(Lb,r,n),aT:w(De(a),De(o))}}),Vn=function(e){var r=e;return r.gl},Mb=$(function(e,r){var n=e,a=r;return{gl:n,gp:a}}),Wn=function(e){var r=e;return r.gp},Rn=function(e){var r=e;return r.dg},Db=E(function(e,r,n,a){var o=n.gl,i=n.gp,c=function(v){return s(Ne,un(Vn(v)),un(Wn(v)),un(Rn(v)))},l=s(Tb,w(Za(r.gj),Za(r.fl)),Bn(0),t(pb,0,0)),u=t(Mb,Za(o),Za(i));return t(re,c,t(mb,a,s(xb,e,l,u)))}),jb=$(function(e,r){return{fG:e,cN:r}}),Ab=$(function(e,r){var n=r;return t(jb,n.fG,t(ta,e,n.cN))}),Bb=$(function(e,r){return{fG:r,cN:e}}),Fb=t(Bb,qr,no),Eb=E(function(e,r,n,a){return C(Db,r,n,a,t(Ab,s(Yi,ke(0),ke(0),ke(e)),Fb))}),Vb=Eb(0),Wb=$(function(e,r){return D(r,{aG:t(Ve,r.aG,t(re,function(n){return t(yr,n.gl,n.gp)},s(Vb,r.an,e.aJ,e.ei)))})}),Rb=$(function(e,r){var n=t(ra,"fix time steps",e)?D(e,{ds:.016}):e,a=r.l.co?D0(n):_r;return t(j0,n,t(vb,n,t(Wb,n,a(r))))}),Nb=$(function(e,r){var n=r;return D(n,{n:t(L,n.q,n.n),q:e})}),Gb=zs,Hb=Cs,Ib=function(e){var r=S(function(n,a,o){return{E:o,n,q:a}});return C(Hb,r,t(j,"before",$r(e)),t(j,"current",e),t(j,"after",$r(e)))},qb=_e(function(e,r,n,a,o){return{cc:e,dk:o,ao:n,ch:a,fO:r}}),Ob=tr(function(e,r,n,a,o,i){return{aS:e,e5:n,fX:o,es:a,ga:i,gf:r}}),Jb=$(function(e,r){return{bK:e,fQ:r}}),Ub=ji(Em),de=S(function(e,r,n){return t(Ub,t(j,e,r),n)}),Ra=s(de,"y",ne,s(de,"x",ne,be(yr))),Yb=s(de,"radius",ne,s(de,"center",Ra,be(Jb))),fl=ys,Xb=s(de,"trail",$r(Ra),s(de,"rotation",ne,s(de,"rotationSpeed",ne,s(de,"directionFromXAxis",ne,s(de,"velocity",s(ji,oo,t(fl,0,ne),t(fl,1,ne)),s(de,"circle",Yb,be(Ob))))))),Qb=$(function(e,r){return{bK:e,dF:r}}),Zb=s(de,"isCollected",ee,s(de,"center",Ra,be(Qb))),M$=ds,Kb=hs,eh=Ss,rh=function(e){return eh(g([Kb(F),t(wa,Q,e)]))},nh=S(function(e,r,n){return{dl:n,cn:e,ej:r}}),ah=s(de,"bounciness",ne,s(de,"polygon",$r(Ra),s(de,"id",M$,be(nh)))),th=s(de,"ballBouncedInLastTickToPolygonWithId",rh(M$),s(de,"collisionPointsHistory",$r(Ra),s(de,"coins",$r(Zb),s(de,"polygons",$r(ah),s(de,"ball",Xb,be(qb)))))),Qr=$(function(e,r){return s(je,js(e),Ts(),r)}),Pn=function(e){return s(je,$(function(r,n){var a=r.a,o=r.b;return s(Ds,a,o,n)}),Ms(),e)},oh=$(function(e,r){var n=r;return Pn(g([w("before",t(Qr,e,n.n)),w("current",e(n.q)),w("after",t(Qr,e,n.E))]))}),Dr=It,Na=function(e){return Pn(g([w("x",Dr(e.gl)),w("y",Dr(e.gp))]))},ih=function(e){return Pn(g([w("center",Na(e.bK)),w("radius",Dr(e.fQ))]))},ch=function(e){return Pn(g([w("circle",ih(e.aS)),w("velocity",function(r){var n=r.a,a=r.b;return t(Qr,_r,g([Dr(n),Dr(a)]))}(e.gf)),w("directionFromXAxis",Dr(e.e5)),w("rotationSpeed",Dr(e.es)),w("rotation",Dr(e.fX)),w("trail",t(Qr,Na,e.ga))]))},lh=function(e){return Pn(g([w("center",Na(e.bK)),w("isCollected",Xu(e.dF))]))},D$=It,uh=function(e){return Pn(g([w("id",D$(e.cn)),w("polygon",t(Qr,Na,e.ej)),w("bounciness",Dr(e.dl))]))},$h=As,vh=function(e){return Pn(g([w("ball",ch(e.cc)),w("polygons",t(Qr,uh,e.fO)),w("coins",t(Qr,lh,e.ao)),w("collisionPointsHistory",t(Qr,Na,e.ch)),w("ballBouncedInLastTickToPolygonWithId",t(te,re(D$),Ve($h))(e.dk))]))},fh=function(e){return D(e,{cc:b$})},sh=function(e){return D(e,{ao:t(X,function(r){return D(r,{dF:!1})},e.ao)})},dh=function(e){return D(e,{ch:P})},mh=function(e){return dh(sh(fh(e)))},ph=$(function(e,r){return D(r,{cp:t(yu,2,t(oh,t(te,mh,vh),e))})}),gh=function(e){return D(e,{aK:Oi})},bh=function(e){var r=e,n=r.E;if(n.b){var a=n.a,o=n.b;return Q({E:o,n:t(L,r.q,r.n),q:a})}else return F},hh=function(e){var r=e,n=r.n;if(n.b){var a=n.a,o=n.b;return Q({E:t(L,r.q,r.E),n:o,q:a})}else return F},_h=function(e){var r=e,n=r.E;if(n.b){var a=n.a,o=n.b;return D(r,{E:o,n:t(L,a,r.n)})}else return D(r,{E:fe(r.n),n:P})},yh=function(e){var r=e,n=r.n;if(n.b){var a=n.a,o=n.b;return D(r,{n:o,q:a})}else{var i=r.E;if(i.b){var a=i.a,o=i.b;return D(r,{E:o,q:a})}else return r}},wh=$(function(e,r){return D(r,{cq:e})}),Sh=function(e){return D(e,{aK:_$(P)})},Ph=$(function(e,r){return D(r,{co:e,aK:Oi})}),xh=S(function(e,r,n){switch(r.$){case 0:var a=r.a;return D(n,{l:t(Ph,a,n.l)});case 1:return D(n,{l:Sh(n.l)});case 2:var o=r.a;return D(n,{l:gh(n.l),k:t(y$,g$(o),n.k)});case 3:return D(n,{k:t(Ve,n.k,hh(n.k))});case 4:return D(n,{k:t(Ve,n.k,bh(n.k))});case 5:return D(n,{k:t(Nb,h$,n.k)});case 6:return D(n,{k:yh(n.k)});case 7:return D(n,{k:_h(n.k)});case 8:return D(n,{l:t(ph,n.k,n.l)});case 9:return D(n,{k:t(i$,n.k,t(Gb,Ib(th),n.l.cq))});default:var i=r.a;return D(n,{l:t(wh,i,n.l)})}}),lo=function(e){return e},Ch=function(e){var r=e;return r},zh=function(e){var r=s(Ui,1667,25e3,Ch(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return lo({gl:n,gp:a})},j$=function(e){return e},kh=function(e){return{$:0,a:e}},Lh=kh,Th={$:3},Mh=Th,Dh=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),jh=Dh,Ah=function(e){return{$:1,a:e}},Bh=Ah,Fh=function(e){return t(_n,"height",Ce(e))},Eh=function(e){return Ks(ad(e))},Vh=Eh,Wh=function(e){return{$:2,a:e}},Rh=Wh,Nh=function(e){var r=e.a,n=e.b,a=e.c,o=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return Gi(g(["rgba(",Se(c(r)),"%,",Se(c(n)),"%,",Se(c(a)),"%,",Se(i(o)),")"]))},Gh=$(function(e,r){switch(r.$){case 0:return t(em,e,r);case 1:return t(rm,e,r);case 2:return t(nm,e,r);case 3:return t(am,e,r);case 4:return t(tm,e,r);default:return t(om,e,r)}}),Hh=$(function(e,r){switch(r.$){case 0:return t(Td,e,r);case 1:return t(Md,e,r);case 2:return t(Dd,e,r);case 3:return t(jd,e,r);case 4:return t(Ad,e,r);case 5:return t(Bd,e,r);case 6:return t(Fd,e,r);case 7:return t(Ed,e,r);default:return Vd(e)}}),Ih=S(function(e,r,n){return s(Kd,e,r,n)}),sl=function(e){var r=e;return r},oa=pm,So=C(oa,1,1,1,1),pr=S(function(e,r,n){return t(X,function(a){return t(a,r,n)},e)}),qh=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Oh=$(function(e,r){var n=e,a=r.gl,o=r.gp;return s(qh,n*a/o,n,n*(1-a-o)/o)}),Ga=$m,Jh=function(e){var r=e.a,n=e.b,a=e.c;return s(Ga,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},uo=$(function(e,r){return Jh(t(Oh,e,r))}),A$=$(function(e,r){return{dG:he(e.dG,r.dG),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.b7,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.b7,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.b7,b7:e.b7*r.b7}}),gr=wm,Uh=function(e){return gr({dP:e.t,dQ:e.w,dR:e.z,dS:e.K,dT:e.u,dU:e.x,dV:e.A,dW:e.L,dX:e.v,dY:e.y,dZ:e.B,d_:e.M,d$:0,d0:0,d1:0,d2:1})},Po=_e(function(e,r,n,a,o){var i=a.dG?1:-1,c=C(oa,a.b7,a.b7,a.b7,i);return Ge(o,e,c,Uh(a),a.dG,r,n)}),B$=tr(function(e,r,n,a,o,i){e:for(;;)switch(o.$){case 0:return i;case 5:var c=o.a,l=o.b,u=e,v=r,f=n,m=t(A$,c,a),p=l,d=i;e=u,r=v,n=f,a=m,o=p,i=d;continue e;case 1:var b=o.b,h=t(L,z(Po,e,r,n,a,b),i.P);return{P:h,X:i.X,fZ:i.fZ};case 3:var y=o.b,x=t(L,z(Po,e,r,n,a,y),i.X);return{P:i.P,X:x,fZ:i.fZ};case 2:var _=o.a,k=t(L,z(Po,e,r,n,a,_),i.fZ);return{P:i.P,X:i.X,fZ:k};default:var A=o.a;return s(je,C(B$,e,r,n,a),i,A)}}),Yh=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),F$=Yh,Xi=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Xh=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Xi,518,r,n,a)},Qh=$(function(e,r){return{$:6,a:e,b:r}}),Zh=Qh,E$=g([Xh({Y:1,Z:0,ab:!1}),C(F$,!1,!1,!1,!1),t(Zh,0,1)]),qn=519,Qi=8,V$=15,Nn=7681,Kh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},le=Ld,e3=$(function(e,r){return{$:0,a:e,b:r}}),r3=e3({dt:1,dC:0,eb:5}),Ye=lm,n3=r3(g([{el:t(Ye,-1,-1)},{el:t(Ye,1,-1)},{el:t(Ye,-1,1)},{el:t(Ye,1,1)}])),a3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"el"},uniforms:{}},t3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Zi=S(function(e,r,n){var a=e.c_,o=e.cB,i=e.dd,c=$(function(v,f){var m=v;return f(m)}),l=$(function(v,f){var m=v;return f(m)}),u=function(v){return t(te,c(v.bv),t(te,l(v.bi),t(te,l(v.bD),l(v.bE))))};return t(u,n,t(u,r,s(t3,a,o,i)))}),Ki=function(e){return s(Zi,{cB:e.cB,c_:e.c_,dd:e.dd},{bi:e.bi,bv:e.bv,bD:e.bD,bE:e.bE},{bi:e.bi,bv:e.bv,bD:e.bD,bE:e.bE})},ec=function(e){return z(le,g([Ki(e),C(F$,!1,!1,!1,!1)]),a3,Kh,n3,{})},o3=ec({bi:Nn,cB:0,c_:Qi,bv:qn,dd:V$,bD:Nn,bE:Nn}),i3=516,dl=5386,Fe=7680,c3=function(e){return t(Xr,2,e+4)},W$=function(e){return ec({bi:Fe,cB:V$,c_:Qi,bv:i3,dd:c3(e),bD:dl,bE:dl})},l3=S(function(e,r,n){return Ee(g([s(pr,e,n,E$),g([W$(r),o3])]))}),u3=$(function(e,r){return Ee(t(zi,l3(e),r))}),$3=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Xi,513,r,n,a)},v3=$3({Y:1,Z:0,ab:!0}),f3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},s3=function(e){var r=e.b5,n=e.bQ,a=e.bI,o=e.bF,i=e.bM,c=e.aQ,l=$(function(u,v){var f=u.a,m=u.b,p=u.c,d=v.a,b=v.b,h=v.c;return f3(f)(m)(p)(d)(b)(h)(r)(n)(a)(o)});return t(l,i,c)},d3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ml=$(function(e,r){var n=e,a=r;return s(d3,32774,n,a)}),m3=1,pl=771,p3=770,rc=s3({bF:0,aQ:t(ml,m3,pl),bI:0,bM:t(ml,p3,pl),bQ:0,b5:0}),Tn=g([v3,rc]),g3=function(e){var r=e;return r.d4},b3=function(e){var r=e;return r.d5},R$=function(e){var r=e;return r.d6},h3=function(e){var r=e;return r.d7},_3=function(e){var r=e;return r.d8},N$=function(e){var r=e;return r.d9},Me=$(function(e,r){var n=e,a=r;return a-n}),G$=function(e){return T(t(Me,h3(e),g3(e)),t(Me,_3(e),b3(e)),t(Me,N$(e),R$(e)))},y3=function(e){return e},w3=function(e){return aa({cN:y3({gl:e.K,gp:e.L,dg:e.M}),de:ln({gl:e.t,gp:e.u,dg:e.v}),df:ln({gl:e.w,gp:e.x,dg:e.y}),dh:ln({gl:e.z,gp:e.A,dg:e.B})})},xo=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gl:a.gl*v.gl+a.gp*v.gp+a.dg*v.dg,gp:a.gl*l.gl+a.gp*l.gp+a.dg*l.dg,dg:a.gl*i.gl+a.gp*i.gp+a.dg*i.dg}}),H$=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=a.gl-i.gl,l=a.gp-i.gp,u=a.dg-i.dg,v=n.dh,f=v,m=n.df,p=m,d=n.de,b=d;return{gl:c*b.gl+l*b.gp+u*b.dg,gp:c*p.gl+l*p.gp+u*p.dg,dg:c*f.gl+l*f.gp+u*f.dg}}),I$=$(function(e,r){return{cN:t(H$,e,na(r)),de:t(xo,e,yn(r)),df:t(xo,e,wn(r)),dh:t(xo,e,Sn(r))}}),ft=S(function(e,r,n){return{gl:e,gp:r,dg:n}}),jt=function(e){var r=e;return r},me=$(function(e,r){var n=e,a=r;return t(Xe,n,a)}),st=$(function(e,r){return q(e,r)<0?e:r}),we=$(function(e,r){var n=e,a=r;return t(st,n,a)}),S3=$(function(e,r){var n=jt(r),a=jt(e);return{d4:t(me,a.d4,n.d4),d5:t(me,a.d5,n.d5),d6:t(me,a.d6,n.d6),d7:t(we,a.d7,n.d7),d8:t(we,a.d8,n.d8),d9:t(we,a.d9,n.d9)}}),nr=function(e){var r=e;return r},P3=function(e){var r=e;return T(r.gl,r.gp,r.dg)},$n=$(function(e,r){var n=e,a=r;return a+n}),x3=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=vt(De(a)),c=vt(De(n)),l=vt(De(o)),u=P3(r),v=u.a,f=u.b,m=u.c;return{d4:t($n,c,v),d5:t($n,i,f),d6:t($n,l,m),d7:t(Me,c,v),d8:t(Me,i,f),d9:t(Me,l,m)}}),gl=E(function(e,r,n,a){var o=n.eW,i=2*n.fj*r,c=2*n.fi*r,l=2*n.fh*r,u=o.dg*r,v=o.gp*r,f=o.gl*r,m=nr(Sn(e)),p=K(l*m.gl)+K(c*m.gp)+K(i*m.dg),d=nr(wn(e)),b=K(l*d.gl)+K(c*d.gp)+K(i*d.dg),h=nr(yn(e)),y=K(l*h.gl)+K(c*h.gp)+K(i*h.dg),x=t(x3,T(y,b,p),t(H$,e,s(ft,f,v,u)));if(a.$)return Q(x);var _=a.a;return Q(t(S3,_,x))}),ei=E(function(e,r,n,a){e:for(;;)if(a.b){var o=a.a,i=a.b;switch(o.$){case 0:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 1:var c=o.a,l=C(gl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 2:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 3:var c=o.a,l=C(gl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 4:var u=o.a,d=e,b=r,h=C(ei,e,r,n,u),y=i;e=d,r=b,n=h,a=y;continue e;default:var v=o.a,f=o.b,m=t(I$,w3(v),e),p=r*v.b7,d=e,b=r,h=C(ei,m,p,n,g([f])),y=i;e=d,r=b,n=h,a=y;continue e}}else return n}),xn=vm,Cn=fm,zn=sm,q$=function(e){return{$:4,a:e}},C3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,o=a,i=t(L,n,r);e=o,r=i;continue e}else return r}),Ha=function(e){return q$(t(C3,e,P))},z3={dG:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,b7:1},bl=ec({bi:Nn,cB:0,c_:Qi,bv:qn,dd:255,bD:Nn,bE:Nn}),k3=function(e){var r=e,n=t(Xe,K(r.gl),t(Xe,K(r.gp),K(r.dg)));if(n){var a=r.dg/n,o=r.gp/n,i=r.gl/n,c=lr(i*i+o*o+a*a);return c*n}else return ve},Ue={bI:0,eV:!1,bQ:0,cW:0,b5:0,c8:0,gl:0,gp:0,dg:0},Ze=$(function(e,r){var n=e,a=r;return gr({dP:n.gl,dQ:n.b5,dR:a.gl,dS:a.b5,dT:n.gp,dU:n.bQ,dV:a.gp,dW:a.bQ,dX:n.dg,dY:n.bI,dZ:a.dg,d_:a.bI,d$:n.c8,d0:n.cW,d1:a.c8,d2:a.cW})}),va=w({bn:t(Ze,Ue,Ue),bV:t(Ze,Ue,Ue),bW:t(Ze,Ue,Ue),bX:t(Ze,Ue,Ue)},C(oa,0,0,0,0)),O$=514,J$=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Xi,515,r,n,a)},U$=240,L3=g([J$({Y:1,Z:0,ab:!0}),Ki({bi:Fe,cB:U$,c_:0,bv:O$,dd:0,bD:Fe,bE:Fe}),rc]),T3=$(function(e,r){var n=e,a=r.fF,o=r.fe,i=r.eO,c=De(a),l=c,u=De(o),v=u,f=n.cY;if(f.$){var p=f.a;return Oo(v)?gr({dP:2/(i*p),dQ:0,dR:0,dS:0,dT:0,dU:2/p,dV:0,dW:0,dX:0,dY:0,dZ:0,d_:-1,d$:0,d0:0,d1:0,d2:1}):gr({dP:2/(i*p),dQ:0,dR:0,dS:0,dT:0,dU:2/p,dV:0,dW:0,dX:0,dY:0,dZ:-2/(v-l),d_:-(v+l)/(v-l),d$:0,d0:0,d1:0,d2:1})}else{var m=f.a;return Oo(v)?gr({dP:1/(i*m),dQ:0,dR:0,dS:0,dT:0,dU:1/m,dV:0,dW:0,dX:0,dY:0,dZ:-1,d_:-2*l,d$:0,d0:0,d1:-1,d2:0}):gr({dP:1/(i*m),dQ:0,dR:0,dS:0,dT:0,dU:1/m,dV:0,dW:0,dX:0,dY:0,dZ:-(v+l)/(v-l),d_:-2*v*l/(v-l),d$:0,d0:0,d1:-1,d2:0})}}),Ka=$(function(e,r){return(1&e>>r)===1?0:1}),M3=function(e){return g([J$({Y:1,Z:0,ab:!0}),Ki({bi:Fe,cB:U$,c_:e,bv:O$,dd:0,bD:Fe,bE:Fe}),rc])},D3=S(function(e,r,n){return Ee(t(X,function(a){var o=a<<4,i=C(oa,t(Ka,a,0),t(Ka,a,1),t(Ka,a,2),t(Ka,a,3));return s(pr,e,w(r,i),M3(o))},t(sn,1,t(Xr,2,n)-1)))}),Gn=function(e){var r=e;return r},j3=Sm,Y$=ln({gl:0,gp:1,dg:0}),nc=Y$,A3={cN:qr,de:qi,df:nc,dh:no},Ia=function(e){var r=e;return r},B3=function(e){var r=Ia(na(e)),n=nr(Sn(e)),a=nr(wn(e)),o=nr(yn(e));return gr({dP:o.gl,dQ:a.gl,dR:n.gl,dS:r.gl,dT:o.gp,dU:a.gp,dV:n.gp,dW:r.gp,dX:o.dg,dY:a.dg,dZ:n.dg,d_:r.dg,d$:0,d0:0,d1:0,d2:1})},F3=$(function(e,r){var n=r;return B3(t(I$,n,e))}),E3=function(e){return t(F3,A3,e)},V3=function(e){var r=e;return r.dc},W3=function(e){var r=e;return yn(r)},R3=function(e){var r=e;return wn(r)},N3=function(e){var r=V3(e.an),n=aa({cN:Qo(r),de:W3(r),df:R3(r),dh:Dt(Zo(r))}),a=Ha(e.aY),o=a,i=C(ei,n,1,F,g([o]));if(i.$===1)return P;var c=i.a,l=E3(r),u=t(ce,.99,t(me,De(e.$7),Mt(R$(c)))),v=G$(c),f=v.a,m=v.b,p=v.c,d=k3(s(Yi,f,m,p)),b=t(ce,1.01,t($n,d,Mt(N$(c)))),h=t(T3,e.an,{eO:e.eO,fe:b,fF:u}),y=j3(h).d2,x=y?nr(Dt(Zo(r))):Gn(Qo(r)),_=function(){var se=e.f9;switch(se.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var xe=se.a;return w(3,xe);case 4:var xe=se.a;return w(4,xe);default:return w(5,0)}}(),k=_.a,A=_.b,I=e.fc,H=I,G=t(uo,H,e.gi),O=G,J=gr({dP:0,dQ:x.gl,dR:xn(O),dS:e.ez,dT:0,dU:x.gp,dV:Cn(O),dW:un(d),dX:0,dY:x.dg,dZ:zn(O),d_:k,d$:0,d0:y,d1:0,d2:A}),W=Ge(B$,J,l,h,z3,o,{P,X:P,fZ:P}),Z=e.fz;switch(Z.$){case 0:var ae=Z.a;return Ee(g([s(pr,W.P,w(ae,So),Tn),s(pr,W.X,va,Tn)]));case 1:var ae=Z.a;return Ee(g([s(pr,W.P,va,Tn),g([bl]),s(pr,W.fZ,ae.bn,E$),g([W$(0)]),s(pr,W.P,w(ae,So),L3),s(pr,W.X,va,Tn)]));default:var ge=Z.a,ye=Z.b;return Ee(g([s(pr,W.P,w(ye,So),Tn),g([bl]),t(u3,W.fZ,ge),s(D3,W.P,ye,sr(ge)),s(pr,W.X,va,Tn)]))}},G3=function(e){return t(_n,"width",Ce(e))},X$=$(function(e,r){var n=g([Bh(1),Rh(0),Lh(!0),C(jh,0,0,0,0)]),a=function(){var k=e.eM;switch(k.$){case 0:return T(n,"0",1);case 1:return T(t(L,Mh,n),"1",1);default:var A=k.a;return T(n,"0",A)}}(),o=a.a,i=a.b,c=a.c,l=e.aT,u=l.a,v=l.b,f=sl(v),m=t(Pe,"height",Ce(f)+"px"),p=sl(u),d=p/f,b=t(io,function(k){return N3({eO:d,an:e.an,$7:e.$7,aY:k.aY,fc:k.fc,fz:k.fz,ez:c,f9:k.f9,gi:k.gi})},r),h=t(Pe,"width",Ce(p)+"px"),y=e.eQ,x=y,_=Nh(x);return s(Vh,"div",g([t(Pe,"padding","0px"),h,m]),g([w(i,s(Ih,o,g([G3(Qe(p*c)),Fh(Qe(f*c)),h,m,t(Pe,"display","block"),t(Pe,"background-color",_)]),b))]))}),H3=function(e){return{$:2,a:e}},Q$=function(e){return H3(e)},I3=function(e){return t(X$,{eM:Q$(e.bf),eQ:e.eQ,an:e.an,$7:e.$7,aT:e.aT},g([{aY:e.aY,fc:e.fc,fz:e.fz,f9:e.f9,gi:e.gi}]))},At=function(e){return e},q3=function(e){var r=e;return r},ac=function(e){var r=e;return q3(r.eP)},Z$=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),O3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),K$=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ev=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),J3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),U3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Y3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),tc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return C(Y3,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return C(Z$,n,r,o,1);case 3:var n=e.a,a=e.b,o=e.c;return C(O3,n,a,o,1);case 4:var n=e.a,a=e.b,o=e.c;return C(K$,n,a,o,1);case 5:var n=e.a,a=e.b,o=e.c;return C(U3,n,a,o,1);case 6:var n=e.a,a=e.b,o=e.c;return C(ev,n,a,o,1);case 7:var n=e.a,a=e.b,o=e.c;return C(J3,n,a,o,1);case 8:return e;case 9:return e;default:return e}},oc={$:0},X3=ie(function(e,r,n,a,o,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,f=jt(c(u)),m=t(we,f.d7,e),p=t(me,f.d4,r),d=t(we,f.d8,n),b=t(me,f.d5,a),h=t(we,f.d9,o),y=t(me,f.d6,i),x=c,_=v;e=m,r=p,n=d,a=b,o=h,i=y,c=x,l=_;continue e}else return{d4:r,d5:a,d6:i,d7:e,d8:n,d9:o}}),Q3=S(function(e,r,n){var a=jt(e(r));return Nt(X3,a.d7,a.d4,a.d8,a.d5,a.d9,a.d6,e,n)}),ga=$(function(e,r){var n=e,a=r;return q(a,n)<1}),rv=function(e){return t(ga,e.d4,e.d7)&&t(ga,e.d5,e.d8)&&t(ga,e.d6,e.d9)?e:{d4:t(me,e.d7,e.d4),d5:t(me,e.d8,e.d5),d6:t(me,e.d9,e.d6),d7:t(we,e.d7,e.d4),d8:t(we,e.d8,e.d5),d9:t(we,e.d9,e.d6)}},ka=function(e){var r=e;return r},nv=function(e){var r=ka(e),n=r.a,a=r.b,o=r.c,i=Vn(n),c=Wn(n),l=Rn(n),u=Vn(a),v=Wn(a),f=Rn(a),m=Vn(o),p=Wn(o),d=Rn(o);return rv({d4:t(me,i,t(me,u,m)),d5:t(me,c,t(me,v,p)),d6:t(me,l,t(me,f,d)),d7:t(we,i,t(we,u,m)),d8:t(we,c,t(we,v,p)),d9:t(we,l,t(we,f,d))})},av=dm,Ie=function(e){return av(Ia(e))},tv=function(e){var r=e;return r},$o=function(e){return av(tv(e))},Z3=$(function(e,r){var n=e,a=r;return{gl:a.gp*n.dg-a.dg*n.gp,gp:a.dg*n.gl-a.gl*n.dg,dg:a.gl*n.gp-a.gp*n.gl}}),ri=$(function(e,r){var n=e,a=r;return{gl:a.gl-n.gl,gp:a.gp-n.gp,dg:a.dg-n.dg}}),ov=function(e){return e},K3={gl:0,gp:0,dg:0},e1=$(function(e,r){var n=e,a=r,o=t(Xe,K(a.gl),t(Xe,K(a.gp),K(a.dg)));if(o){var i=a.dg/o,c=a.gp/o,l=a.gl/o,u=lr(l*l+c*c+i*i);return{gl:n*l/u,gp:n*c/u,dg:n*i/u}}else return K3}),r1=e1(ov(1)),iv=S(function(e,r,n){var a=t(ri,r,n),o=t(ri,e,r);return r1(t(Z3,a,o))}),n1=function(e){var r=ka(e),n=r.a,a=r.b,o=r.c,i=$o(s(iv,n,a,o));return T({r:i,el:Ie(n)},{r:i,el:Ie(a)},{r:i,el:Ie(o)})},a1=$(function(e,r){return{$:2,a:e,b:r}}),cv=a1({dt:3,dC:0,eb:4}),t1=function(e){if(e.b){var r=e.a,n=e.b,a=cv(t(X,n1,e)),o=s(Q3,nv,r,n);return C(Z$,o,e,a,0)}else return oc},Je=S(function(e,r,n){return T(e,r,n)}),Te=S(function(e,r,n){var a=e,o=r,i=n;return{gl:a,gp:o,dg:i}}),lv=function(){var e=ke(1),r=ke(1),n=ke(1),a=t(ce,-.5,e),o=t(ce,-.5,r),i=t(ce,-.5,n),c=s(Te,i,o,a),l=t(ce,.5,e),u=s(Te,i,o,l),v=t(ce,.5,r),f=s(Te,i,v,a),m=s(Te,i,v,l),p=t(ce,.5,n),d=s(Te,p,o,a),b=s(Te,p,v,a),h=s(Te,p,o,l),y=s(Te,p,v,l);return tc(t1(g([s(Je,c,b,d),s(Je,c,f,b),s(Je,u,h,y),s(Je,u,y,m),s(Je,d,b,y),s(Je,d,y,h),s(Je,c,m,f),s(Je,c,u,m),s(Je,c,d,h),s(Je,c,h,u),s(Je,f,y,b),s(Je,f,m,y)])))}(),et={$:0},o1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),i1=S(function(e,r,n){var a=r.a,o=r.b,i=r.c,c=e(i),l=e(o),u=e(a),v=$o(s(iv,u,l,c)),f={r:v,el:Ie(u)},m={r:v,el:Ie(l)},p={r:v,el:Ie(c)};return t(L,f,t(L,m,t(L,p,n)))}),ic=function(e){var r=e;return r.G},c1=E(function(e,r,n,a){if(r.$===1)return F;var o=r.a;if(n.$===1)return F;var i=n.a;if(a.$===1)return F;var c=a.a;return Q(s(e,o,i,c))}),gn=4294967295>>>32-ur,La=bf,l1=S(function(e,r,n){e:for(;;){var a=gn&r>>>e,o=t(La,a,n);if(o.$){var v=o.a;return t(La,gn&r,v)}else{var i=o.a,c=e-ur,l=r,u=i;e=c,r=l,n=u;continue e}}}),uv=function(e){return e>>>5<<5},Ar=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d;return e<0||q(e,n)>-1?F:q(e,uv(n))>-1?Q(t(La,gn&e,i)):Q(s(l1,a,e,o))}),cc=function(e){var r=e;return r.al},Co=$(function(e,r){return t(Ar,e,cc(r))}),$v=function(e){var r=function(n){var a=n.a,o=n.b,i=n.c;return C(c1,S(function(c,l,u){return T(c,l,u)}),t(Co,a,e),t(Co,o,e),t(Co,i,e))};return t(pn,r,ic(e))},u1=S(function(e,r,n){e:for(;;){var a=t(Mi,pe,e),o=a.a,i=a.b;if(q(Sr(o),pe)<0)return t(Di,!0,{C:r,o:n,s:o});var c=i,l=t(L,mn(o),r),u=n+1;e=c,r=l,n=u;continue e}}),Ta=function(e){return e.b?s(u1,e,P,0):Ti},$1=S(function(e,r,n){return e(r(n))}),v1=$(function(e,r){return!t(Wu,t($1,ap,e),r)}),lc=function(e){var r=e.a;return r},uc=$(function(e,r){var n=lc(e),a=function(o){var i=o.a,c=o.b,l=o.c;return i>=0&&q(i,n)<0&&c>=0&&q(c,n)<0&&l>=0&&q(l,n)<0};return t(v1,a,r)?{G:r,al:e}:{G:t(co,a,r),al:e}}),f1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),qa=f1({dt:1,dC:3,eb:4}),dt=$(function(e,r){var n=Gn(r),a=Gn(e);return w(T(a.gl,a.gp,a.dg),T(n.gl,n.gp,n.dg))}),hl=s(Ga,0,0,0),zo=tr(function(e,r,n,a,o,i){var c=i.a,l=i.b,u=i.c,v=t(Kn,t(dt,e,r),o);if(v.$){var m={r:hl,el:Ie(r)},p={r:hl,el:Ie(e)},d=u+1,b=u;return T(t(L,T(n,b,d),t(L,T(n,d,a),c)),t(L,m,t(L,p,l)),u+2)}else{var f=v.a;return T(t(L,T(n,f,a),c),l,u)}}),s1=_e(function(e,r,n,a,o){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),m=e(l),p=e(c),d=a+2,b=a+1,h=a,y=e,x=r,_=v,k=a+3,A=Ge(zo,f,p,d,h,r,Ge(zo,m,f,b,d,r,Ge(zo,p,m,h,b,r,o)));e=y,r=x,n=_,a=k,o=A;continue e}else{var I=o,H=I.a,G=I.b;return w(H,fe(G))}}),d1=_e(function(e,r,n,a,o){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),m=e(l),p=e(c),d=n+2,b=n+1,h=n,y=s(cn,t(dt,p,f),d,s(cn,t(dt,f,m),b,s(cn,t(dt,m,p),h,o))),x=t(L,T(h,b,d),a),_=e,k=v,A=n+3,I=x,H=y;e=_,r=k,n=A,a=I,o=H;continue e}else return T(a,o,n)}),nn=S(function(e,r,n){var a=$v(n),o=s(zr,i1(r),P,a),i=z(d1,r,a,0,P,ao),c=i.a,l=i.b,u=i.c,v=z(s1,r,l,a,0,T(c,P,u)),f=v.a,m=v.b,p=Ni(m)?o:ue(o,m);return s(o1,e,t(uc,Ta(p),f),t(qa,p,f))}),ni=function(e){return{G:t(X,function(r){return T(3*r,3*r+1,3*r+2)},t(sn,0,sr(e)-1)),al:Ta(Ee(t(X,function(r){var n=r.a,a=r.b,o=r.c;return g([n,a,o])},e)))}},vv=function(e){switch(e.$){case 0:return et;case 1:var a=e.a,r=e.b,n=t(X,ka,r);return s(nn,a,_r,ni(n));case 2:var a=e.a,r=e.b,n=t(X,ka,r);return s(nn,a,_r,ni(n));case 3:var a=e.a,o=e.b;return s(nn,a,_r,o);case 4:var a=e.a,o=e.b;return s(nn,a,function(i){return i.el},o);case 5:var a=e.a,o=e.b;return s(nn,a,function(i){return i.el},o);case 6:var a=e.a,o=e.b;return s(nn,a,function(i){return i.el},o);case 7:var a=e.a,o=e.b;return s(nn,a,function(i){return i.el},o);case 8:return et;case 9:return et;default:return et}},_l=vv(lv),$c=function(e){var r=e;return r.aT},fv={$:0},M=fv,ze=$(function(e,r){return{$:1,a:e,b:r}}),m1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bN"}},p1=1029,g1=function(e){return{$:5,a:e}},sv=function(e){var r=e;return g1(r)},b1=sv(p1),h1=1028,_1=sv(h1),qe=S(function(e,r,n){return r===1?e?t(L,b1,n):t(L,_1,n):n}),dv={src:`
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
    `,attributes:{position:"el",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ko=E(function(e,r,n,a){return t(ze,r,ie(function(o,i,c,l,u,v,f,m){return z(le,s(qe,l,a,m),dv,m1,n,{bN:e,b:c,c:i,d:v,e:o,f:u})}))}),vc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aC"}},mv={src:`
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
    `,attributes:{position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Lr=E(function(e,r,n,a){return t(ze,r,ie(function(o,i,c,l,u,v,f,m){return z(le,s(qe,l,a,m),mv,vc,n,{aC:e,b:c,c:i,d:v,e:o,f:u})}))}),pv=$(function(e,r){return{$:3,a:e,b:r}}),y1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aC",pointRadius:"b2",sceneProperties:"e"}},gv={src:`
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
    `,attributes:{position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b2",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},w1=E(function(e,r,n,a){return t(pv,n,ie(function(o,i,c,l,u,v,f,m){return z(le,m,gv,y1,a,{aC:e,b:c,c:i,b2:r,d:v,e:o,f:u})}))}),fc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aW",sceneProperties:"e"}},Oa=function(e){var r=e;return r},vo=mm,Tr=_e(function(e,r,n,a,o){return t(ze,n,ie(function(i,c,l,u,v,f,m,p){return z(le,s(qe,u,o,p),mv,fc,a,{aW:t(vo,Oa(r),e),b:l,c,d:f,e:i,f:v})}))}),S1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aW",pointRadius:"b2",sceneProperties:"e"}},P1=_e(function(e,r,n,a,o){return t(pv,a,ie(function(i,c,l,u,v,f,m,p){return z(le,p,gv,S1,o,{aW:t(vo,Oa(r),e),b:l,c,b2:n,d:f,e:i,f:v})}))}),bv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",materialColor:"cC",sceneProperties:"e",viewMatrix:"f"}},hv={src:`
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
    `,attributes:{normal:"r",position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rt=E(function(e,r,n,a){return t(ze,r,ie(function(o,i,c,l,u,v,f,m){var p=f.a,d=f.b;return z(le,s(qe,l,a,m),hv,bv,n,{S:d,bn:p.bn,bV:p.bV,bW:p.bW,bX:p.bX,cC:e,b:c,c:i,d:v,e:o,f:u})}))}),_v={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",materialColorTexture:"cD",normalMapTexture:"a3",sceneProperties:"e",useNormalMap:"a8",viewMatrix:"f"}},yv={src:`
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
    `,attributes:{normal:"r",position:"el",tangent:"eB",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},x1=tr(function(e,r,n,a,o,i){return t(ze,a,ie(function(c,l,u,v,f,m,p,d){var b=p.a,h=p.b;return z(le,s(qe,v,i,d),yv,_v,o,{S:h,bn:b.bn,bV:b.bV,bW:b.bW,bX:b.bX,cD:e,b:u,c:l,a3:r,d:m,e:c,a8:n,f})}))}),wv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cf",constantBaseColor:"ci",constantMetallic:"cj",constantRoughness:"ck",enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",metallicTexture:"cH",normalMapTexture:"a3",roughnessTexture:"c2",sceneProperties:"e",useNormalMap:"a8",viewMatrix:"f"}},C1=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return t(ze,u,ie(function(m,p,d,b,h,y,x,_){var k=x.a,A=x.b;return z(le,s(qe,b,f,_),yv,wv,v,{cf:e,ci:r,cj:i,ck:a,S:A,bn:k.bn,bV:k.bV,bW:k.bW,bX:k.bX,cH:o,b:d,c:p,a3:c,d:y,c2:n,e:m,a8:l,f:h})}))}}}}}}}}}}},Sv={src:`
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
    `,attributes:{},uniforms:{baseColor:"ce",enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",metallic:"cG",roughness:"c1",sceneProperties:"e",viewMatrix:"f"}},nt=tr(function(e,r,n,a,o,i){return t(ze,a,ie(function(c,l,u,v,f,m,p,d){var b=p.a,h=p.b;return z(le,s(qe,v,i,d),hv,Sv,o,{ce:e,S:h,bn:b.bn,bV:b.bV,bW:b.bW,bX:b.bX,cG:n,b:u,c:l,d:m,c1:r,e:c,f})}))}),z1=function(e){return{$:0,a:e}},yl=$(function(e,r){return{$:1,a:e,b:r}}),ba=$(function(e,r){if(r.$){var n=r.a.F;return w(n,1)}else return r.a,w(e,0)}),k1=function(e){return C(oa,xn(e),Cn(e),zn(e),1)},sc=C(oa,0,0,0,0),mt=$(function(e,r){if(r.$){var a=r.a.F;return w(a,sc)}else{var n=r.a;return w(e,k1(n))}}),Pv=$(function(e,r){var n=w(e,r);if(n.a.$){var o=n.a.a.F;return t(yl,w(o,sc),t(ba,o,r))}else if(n.b.$){var o=n.b.a.F;return t(yl,t(mt,o,e),t(ba,o,r))}else{var a=n.a.a;return n.b.a,z1(a)}}),L1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),at=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),T1=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),M1=function(e){return t(Ye,e,1)},ai=t(Ye,0,0),Mn=$(function(e,r){if(r.$){var a=r.a.F;return w(a,ai)}else{var n=r.a;return w(e,M1(n))}}),xv=E(function(e,r,n,a){var o=C(T1,e,r,n,a);if(o.a.$){var u=o.a.a.F;return C(at,w(u,sc),t(Mn,u,r),t(Mn,u,n),t(ba,u,a))}else if(o.b.$){var u=o.b.a.F;return C(at,t(mt,u,e),w(u,ai),t(Mn,u,n),t(ba,u,a))}else if(o.c.$){var u=o.c.a.F;return C(at,t(mt,u,e),t(Mn,u,r),w(u,ai),t(ba,u,a))}else if(o.d.$){var u=o.d.a.F;return C(at,t(mt,u,e),t(Mn,u,r),t(Mn,u,n),w(u,1))}else{var i=o.a.a,c=o.b.a,l=o.c.a;return o.d.a,s(L1,i,c,l)}}),D1={src:`
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
    `,attributes:{},uniforms:{backlight:"cb",colorTexture:"bN",sceneProperties:"e"}},Lo=_e(function(e,r,n,a,o){return t(ze,n,ie(function(i,c,l,u,v,f,m,p){return z(le,s(qe,u,o,p),dv,D1,a,{cb:Oa(r),bN:e,b:l,c,d:f,e:i,f:v})}))}),Cv={src:`
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
    `,attributes:{normal:"r",position:"el",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},j1=E(function(e,r,n,a){return t(ze,r,ie(function(o,i,c,l,u,v,f,m){var p=f.a,d=f.b;return z(le,s(qe,l,a,m),Cv,_v,n,{S:d,bn:p.bn,bV:p.bV,bW:p.bW,bX:p.bX,cD:e,b:c,c:i,a3:e,d:v,e:o,a8:0,f:u})}))}),A1=fi(function(e,r,n,a,o,i,c,l,u){return t(ze,c,ie(function(v,f,m,p,d,b,h,y){var x=h.a,_=h.b;return z(le,s(qe,p,u,y),Cv,wv,l,{cf:e,ci:r,cj:i,ck:a,S:_,bn:x.bn,bV:x.bV,bW:x.bW,bX:x.bX,cH:o,b:m,c:f,a3:e,d:b,c2:n,e:v,a8:0,f:d})}))}),Ma=S(function(e,r,n){var a=e,o=r;return n<=.5?a+n*(o-a):o+(1-n)*(a-o)}),B1=function(e){var r=e;return s(Ma,r.d7,r.d4,.5)},F1=function(e){var r=e;return s(Ma,r.d8,r.d5,.5)},E1=function(e){var r=e;return s(Ma,r.d9,r.d6,.5)},V1=function(e){return s(Te,B1(e),F1(e),E1(e))},U=function(e){var r=G$(e),n=r.a,a=r.b,o=r.c;return{eW:Ia(V1(e)),fh:n/2,fi:a/2,fj:o/2}},dc=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.F;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var o=r.a,c=r.c,a=r.d;return C(ko,l,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return C(ko,l,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return C(ko,l,U(o),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var o=r.a,c=r.c,a=r.d;return C(Lr,n,U(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return C(Lr,n,U(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return C(Lr,n,U(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return C(Lr,n,U(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return C(Lr,n,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return C(Lr,n,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return C(Lr,n,U(o),c,a);case 8:var o=r.a,c=r.c;return C(Lr,n,U(o),c,0);case 9:var o=r.a,c=r.c;return C(Lr,n,U(o),c,0);default:var o=r.a,i=r.b,c=r.d;return C(w1,n,i,U(o),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.F,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var o=r.a,c=r.c,a=r.d;return z(Lo,l,v,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return z(Lo,l,v,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return z(Lo,l,v,U(o),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var o=r.a,c=r.c,a=r.d;return z(Tr,u,v,U(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return z(Tr,u,v,U(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return z(Tr,u,v,U(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return z(Tr,u,v,U(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return z(Tr,u,v,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return z(Tr,u,v,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return z(Tr,u,v,U(o),c,a);case 8:var o=r.a,c=r.c;return z(Tr,u,v,U(o),c,0);case 9:var o=r.a,c=r.c;return z(Tr,u,v,U(o),c,0);default:var o=r.a,i=r.b,c=r.d;return z(P1,u,v,i,U(o),c)}}case 2:e.a;var f=e.b,H=e.c,m=t(Pv,f,H);if(m.$){var b=m.a,h=b.a;b.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var o=r.a,c=r.c,d=r.d;return C(j1,h,U(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return Ge(x1,h,x,_,U(o),c,d);case 8:return M;case 9:return M;default:return M}}else{var p=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var o=r.a,c=r.c,d=r.d;return C(rt,p,U(o),c,d);case 3:return M;case 4:var o=r.a,c=r.c,d=r.d;return C(rt,p,U(o),c,d);case 5:return M;case 6:var o=r.a,c=r.c,d=r.d;return C(rt,p,U(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return C(rt,p,U(o),c,d);case 8:return M;case 9:return M;default:return M}}default:e.a;var k=e.b,A=e.c,I=e.d,H=e.e,G=C(xv,k,A,I,H);if(G.$){var Z=G.a,ae=Z.a,ge=Z.b,ye=G.b,se=ye.a,xe=ye.b,Oe=G.c,Re=Oe.a,Or=Oe.b,Jr=G.d,x=Jr.a,_=Jr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var o=r.a,c=r.c,a=r.d;return ff(A1,ae,ge,se,xe,Re,Or,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return C1(ae)(ge)(se)(xe)(Re)(Or)(x)(_)(U(o))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var O=G.a,J=G.b,W=G.c;switch(r.$){case 0:return M;case 1:return M;case 2:var o=r.a,c=r.c,a=r.d;return Ge(nt,O,J,W,U(o),c,a);case 3:return M;case 4:var o=r.a,c=r.c,a=r.d;return Ge(nt,O,J,W,U(o),c,a);case 5:return M;case 6:var o=r.a,c=r.c,a=r.d;return Ge(nt,O,J,W,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return Ge(nt,O,J,W,U(o),c,a);case 8:return M;case 9:return M;default:return M}}}}),To=function(e){var r=e;return r.gl},Mo=function(e){var r=e;return r.gp},Do=function(e){var r=e;return r.dg},W1=function(e){var r=e,n=Do(r.dh),a=Mo(r.dh),o=To(r.dh),i=Do(r.df),c=Mo(r.df),l=To(r.df),u=Do(r.de),v=Mo(r.de),f=To(r.de);return f*c*n+v*i*o+u*l*a-u*c*o-v*l*n-f*i*a>0},R1=function(e){var r=Ia(na(e)),n=nr(Sn(e)),a=nr(wn(e)),o=nr(yn(e));return{dG:W1(e),t:o.gl,u:o.gp,v:o.dg,w:a.gl,x:a.gp,y:a.dg,z:n.gl,A:n.gp,B:n.dg,K:r.gl,L:r.gp,M:r.dg,b7:1}},Dn=$(function(e,r){return{$:5,a:e,b:r}}),zv=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,o=n.b,i=t(A$,a,e);return t(Dn,i,o);case 1:return t(Dn,e,n);case 3:return t(Dn,e,n);case 2:return t(Dn,e,n);default:return t(Dn,e,n)}}),kv=$(function(e,r){return t(zv,R1(e),r)}),fo=function(e){return{$:2,a:e}},N1=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=r.eW;return{eW:{gl:n*i.gl,gp:a*i.gp,dg:o*i.dg},fh:n*r.fh,fi:a*r.fi,fj:o*r.fj}}),G1=bm,H1=gm,wl=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,m=e.b,p=e.c,d=H1(a),b=d.gl,h=d.gp,y=d.dg,x=d.eJ,_=G1({eJ:x,gl:b*f,gp:h*m,dg:y*p});return Nt(r,n,_,o,i,c,l,u,v)}}}}}}}}}},ti=$(function(e,r){switch(r.$){case 0:return fv;case 5:var n=r.a,a=r.b;return t(Dn,n,t(ti,e,a));case 1:var o=r.a,i=r.b;return t(ze,t(N1,e,o),t(wl,e,i));case 3:return r;case 2:var i=r.a;return fo(t(wl,e,i));default:var c=r.a;return q$(t(X,ti(e),c))}}),mc=$(function(e,r){var n=r;return t(ti,e,n)}),pc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Lv=7683,Tv=7682,I1=s(Zi,{cB:0,c_:0,dd:15},{bi:Fe,bv:qn,bD:Fe,bE:Lv},{bi:Fe,bv:qn,bD:Fe,bE:Tv}),q1=s(Zi,{cB:0,c_:0,dd:15},{bi:Fe,bv:qn,bD:Fe,bE:Tv},{bi:Fe,bv:qn,bD:Fe,bE:Lv}),gc=$(function(e,r){return e?t(L,q1,r):t(L,I1,r)}),O1={src:`
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
    `,attributes:{normal:"r",position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b8",viewMatrix:"f"}},J1=function(e){if(e.$){var r=e.c;return Q(ie(function(n,a,o,i,c,l,u,v){return z(le,t(gc,i,v),O1,pc,r,{b:o,c:a,d:l,e:n,b8:u,f:c})}))}else return F},Bt=function(e){var r=J1(e);if(r.$)return M;var n=r.a;return fo(n)},U1=E(function(e,r,n,a){var o=t(dc,n,lv),i=function(){var f=w(e,r);return f.a?f.b?Ha(g([o,Bt(_l)])):o:f.b?Bt(_l):M}(),c=$c(a),l=c.a,u=c.b,v=c.c;return t(kv,ac(a),t(mc,T(l,u,v),i))}),Y1=$(function(e,r){return C(U1,!0,!0,e,r)}),oi=function(e){return{$:0,a:e}},Mv=$(function(e,r){return{$:0,a:e,b:r}}),X1=function(e){var r=Ri(e),n=r.cZ,a=r.cm,o=r.cg;return s(Ga,n,a,o)},Dv=function(e){return t(Mv,0,oi(X1(e)))},Q1=function(e){var r=e;return r.m},ha=function(e){var r=e;return Nr(r)},Z1=$(function(e,r){var n=e.el,a=e.r;return t(L,{r:$o(a),el:Ie(n)},r)}),K1=Rt(function(e,r,n,a,o,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=zn(l.el),f=Cn(l.el),m=xn(l.el),p=t(st,e,m),d=t(Xe,r,m),b=t(st,n,f),h=t(Xe,a,f),y=t(st,o,v),x=t(Xe,i,v),_=u;e=p,r=d,n=b,a=h,o=y,i=x,c=_;continue e}else return rv({d4:r,d5:a,d6:i,d7:e,d8:n,d9:o})}),jv=$(function(e,r){var n=zn(e.el),a=Cn(e.el),o=xn(e.el);return si(K1,o,o,a,a,n,n,r)}),e_=function(e){var r=s(gu,Z1,P,cc(e));if(r.b){var n=r.a,a=r.b,o=t(qa,r,ic(e)),i=t(jv,n,a);return C(K$,i,e,o,0)}else return oc},Sl=$(function(e,r){var n=e,a=r,o=n.df,i=o,c=n.de,l=c;return{gl:a.gl*l.gl+a.gp*i.gl,gp:a.gl*l.gp+a.gp*i.gp,dg:a.gl*l.dg+a.gp*i.dg}}),Ft=function(e){var r=e;return Gr(r)},fa=function(e){var r=e;return r},ii=function(e){return ar(2*Vr*e)},Pl=s$({cN:qr,de:qi,df:nc}),Av=function(){var e=72,r=t(L$,e,ii(1)),n=ke(1),a=fa(d$),o=fa(T$),i=ke(1),c=t(ce,.5,i),l=s(Te,ve,ve,c),u=t(ce,-.5,i),v=s(Te,ve,ve,u),f=function(d){var b=t(ce,d,r),h=fa(t(Sl,Pl,Ko(b))),y=t(ce,ha(b),n),x=t(ce,Ft(b),n),_=s(Te,y,x,c),k=s(Te,y,x,u),A=t(Ct,e,d+1),I=t(ce,A,r),H=fa(t(Sl,Pl,Ko(I))),G=t(ce,ha(I),n),O=t(ce,Ft(I),n),J=s(Te,G,O,u),W=s(Te,G,O,c);return g([T({r:o,el:v},{r:o,el:J},{r:o,el:k}),T({r:h,el:k},{r:H,el:J},{r:H,el:W}),T({r:h,el:k},{r:H,el:W},{r:h,el:_}),T({r:a,el:l},{r:a,el:_},{r:a,el:W})])},m=t(X,f,t(sn,0,e-1)),p=ni(Ee(m));return tc(e_(p))}(),xl=vv(Av),r_=function(e){var r=e,n=K(r.dg),a=K(r.gp),o=K(r.gl);if(q(o,a)<1)if(q(o,n)<1){var i=lr(r.dg*r.dg+r.gp*r.gp);return{gl:0,gp:-r.dg/i,dg:r.gp/i}}else{var i=lr(r.gp*r.gp+r.gl*r.gl);return{gl:-r.gp/i,gp:r.gl/i,dg:0}}else if(q(a,n)<1){var i=lr(r.dg*r.dg+r.gl*r.gl);return{gl:r.dg/i,gp:0,dg:-r.gl/i}}else{var i=lr(r.gl*r.gl+r.gp*r.gp);return{gl:-r.gp/i,gp:r.gl/i,dg:0}}},n_=function(e){var r=r_(e),n=r,a=n,o=e,i=o,c={gl:i.gp*a.dg-i.dg*a.gp,gp:i.dg*a.gl-i.gl*a.dg,dg:i.gl*a.gp-i.gp*a.gl};return w(r,c)},a_=function(e){var r=Ii(e),n=n_(r),a=n.a,o=n.b;return aa({cN:k$(e),de:a,df:o,dh:r})},t_=function(e){var r=e;return r.fx},o_=function(e){var r=e;return r.fQ},i_=E(function(e,r,n,a){var o=a_(Q1(a)),i=t(dc,n,Av),c=function(){var m=w(e,r);return m.a?m.b?Ha(g([i,Bt(xl)])):i:m.b?Bt(xl):M}(),l=o_(a),u=l,v=t_(a),f=v;return t(kv,o,t(mc,T(u,u,f),c))}),c_=$(function(e,r){return C(i_,!0,!0,e,r)}),Cl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bA",viewMatrix:"f"}},zl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bA",viewMatrix:"f"}},sa=function(e){var r=ka(e),n=r.a,a=r.b,o=r.c,i=Gn(n),c=Gn(a),l=Gn(o);return gr({dP:i.gl,dQ:c.gl,dR:l.gl,dS:0,dT:i.gp,dU:c.gp,dV:l.gp,dW:0,dX:i.dg,dY:c.dg,dZ:l.dg,d_:0,d$:0,d0:0,d1:0,d2:0})},tt=cv(g([T({c7:0},{c7:1},{c7:2})])),l_=$(function(e,r){var n=nv(r),a=U(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.F,M;var o=e.b.a;return t(ze,a,ie(function(_,k,A,I,H,G,O,J){return z(le,s(qe,I,0,J),Cl,vc,tt,{aC:o,b:A,c:k,d:G,e:_,bA:sa(r),f:H})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return t(ze,a,ie(function(_,k,A,I,H,G,O,J){return z(le,s(qe,I,0,J),Cl,fc,tt,{aW:t(vo,Oa(c),i),b:A,c:k,d:G,e:_,bA:sa(r),f:H})}));case 2:e.a;var l=e.b,d=e.c,u=t(Pv,l,d);if(u.$)return M;var v=u.a;return t(ze,a,ie(function(_,k,A,I,H,G,O,J){var W=O.a,Z=O.b;return z(le,s(qe,I,0,J),zl,bv,tt,{S:Z,bn:W.bn,bV:W.bV,bW:W.bW,bX:W.bX,cC:v,b:A,c:k,d:G,e:_,bA:sa(r),f:H})}));default:e.a;var f=e.b,m=e.c,p=e.d,d=e.e,b=C(xv,f,m,p,d);if(b.$)return M;var h=b.a,y=b.b,x=b.c;return t(ze,a,ie(function(_,k,A,I,H,G,O,J){var W=O.a,Z=O.b;return z(le,s(qe,I,0,J),zl,Sv,tt,{ce:h,S:Z,bn:W.bn,bV:W.bV,bW:W.bW,bX:W.bX,cG:x,b:A,c:k,d:G,c1:y,e:_,bA:sa(r),f:H})}))}}),u_=function(){var e=g([{a7:t(Ye,0,1)},{a7:t(Ye,1,1)},{a7:t(Ye,2,1)},{a7:t(Ye,0,-1)},{a7:t(Ye,1,-1)},{a7:t(Ye,2,-1)}]),r=g([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return t(qa,e,r)}(),$_={src:`
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
    `,attributes:{triangleShadowVertex:"a7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b8",triangleVertexPositions:"bA",viewMatrix:"f"}},kl=function(e){return fo(ie(function(r,n,a,o,i,c,l,u){return z(le,t(gc,o,u),$_,pc,u_,{b:a,c:n,d:c,e:r,b8:l,bA:sa(e),f:i})}))},v_=E(function(e,r,n,a){var o=t(l_,n,a),i=w(e,r);return i.a?i.b?Ha(g([o,kl(a)])):o:i.b?kl(a):M}),f_=$(function(e,r){return C(v_,!0,!0,e,r)}),bc=function(e){var r=e;return r},s_=$(function(e,r){var n=Rn(r),a=Rn(e),o=Wn(r),i=Wn(e),c=Vn(r),l=Vn(e);return{d4:t(me,l,c),d5:t(me,i,o),d6:t(me,a,n),d7:t(we,l,c),d8:t(we,i,o),d9:t(we,a,n)}}),d_=function(e){var r=bc(e),n=r.a,a=r.b;return t(s_,n,a)},Ll={src:`
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
    `,attributes:{lineSegmentVertex:"dO"},uniforms:{lineSegmentEndPoint:"dM",lineSegmentStartPoint:"dN",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},m_=$(function(e,r){return{$:1,a:e,b:r}}),p_=m_({dt:2,dC:0,eb:1}),Tl=p_(g([w({dO:0},{dO:1})])),g_=$(function(e,r){var n=d_(r),a=U(n),o=bc(r),i=o.a,c=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.F,M;var l=e.b.a;return t(ze,a,ie(function(v,f,m,p,d,b,h,y){return z(le,y,Ll,vc,Tl,{aC:l,dM:Ie(c),dN:Ie(i),b:m,c:f,d:b,e:v,f:d})}));case 1:if(e.b.$)return M;var l=e.b.a,u=e.c;return t(ze,a,ie(function(f,m,p,d,b,h,y,x){return z(le,x,Ll,fc,Tl,{aW:t(vo,Oa(u),l),dM:Ie(c),dN:Ie(i),b:p,c:m,d:h,e:f,f:b})}));case 2:return M;default:return M}}),b_=$(function(e,r){return t(g_,e,r)}),hc=function(e){var r=e;return r.eW},_c=function(e){var r=e;return r.fQ},ci=$(function(e,r){var n=e,a=r;return n/a}),h_=_e(function(e,r,n,a,o){e:for(;;){var i=a(r/n),c=t(L,i,o);if(he(r,e))return c;var l=e,u=r-1,v=n,f=a,m=c;e=l,r=u,n=v,a=f,o=m;continue e}}),Ml=$(function(e,r){return e<1?P:z(h_,0,e,e,r,P)}),__=$(function(e,r){var n=e.el,a=e.r,o=e.O,i=o,c=i.a,l=i.b;return t(L,{r:$o(a),el:Ie(n),O:t(Ye,c,l)},r)}),y_=function(e){var r=s(gu,__,P,cc(e));if(r.b){var n=r.a,a=r.b,o=t(qa,r,ic(e)),i=t(jv,n,a);return C(ev,i,e,o,0)}else return oc},yc=$(function(e,r){var n=e,a=r,o=Nr(a);return{gl:o*Nr(n),gp:o*Gr(n),dg:Gr(a)}}),w_=function(){var e=ke(1),r=72,n=t(sn,0,r-1),a=t(Ml,r,t(Ma,ve,ii(1))),o=ki(r/2),i=t(sn,0,o-1),c=t(Ml,o,t(Ma,Bn(90),Bn(-90))),l=Ta(Ee(t(X,function(f){return t(X,function(m){return{r:fa(t(yc,f,m)),el:s(Te,t(ce,ha(m)*ha(f),e),t(ce,ha(m)*Ft(f),e),t(ce,Ft(m),e)),O:w(t(ci,f,ii(1)),t(ci,t($n,Bn(90),m),Bn(180)))}},c)},a))),u=$(function(f,m){return f*(o+1)+m}),v=Ee(t(X,function(f){return Ee(t(X,function(m){var p=t(u,f+1,m),d=t(u,f,m),b=t(u,f+1,m+1),h=t(u,f,m+1);return g([T(h,b,p),T(h,p,d)])},i))},n));return tc(y_(t(uc,l,v)))}(),Et=72,ot=2*Et,S_=$(function(e,r){e:for(;;){var n=ot+1,a=t(Ct,ot,2*e+3),o=t(Ct,ot,2*e+2),i=2*e+1,c=2*e,l=ot,u=t(L,T(l,c,o),t(L,T(c,a,o),t(L,T(c,i,a),t(L,T(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),P_=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),x_=$(function(e,r){e:for(;;){var n=s(P_,0,2*Vr,e/Et),a={bG:n,b$:0,b6:1},o={bG:n,b$:1,b6:1},i=t(L,a,t(L,o,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),C_=function(){var e=t(x_,Et-1,g([{bG:0,b$:0,b6:0},{bG:0,b$:1,b6:0}])),r=t(S_,Et-1,P);return t(qa,e,r)}(),z_={src:`
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
    `,attributes:{angle:"bG",offsetScale:"b$",radiusScale:"b6"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b8",viewMatrix:"f"}},Dl=function(e){return fo(ie(function(r,n,a,o,i,c,l,u){return z(le,t(gc,!0,u),z_,pc,C_,{aC:s(Ga,0,0,1),b:a,c:n,d:c,e:r,b8:l,f:i})}))},k_=function(e){var r=tv(e);return{dG:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.gl,L:r.gp,M:r.dg,b7:1}},L_=$(function(e,r){return t(zv,k_(e),r)}),T_=E(function(e,r,n,a){var o=t(dc,n,w_),i=function(){var u=w(e,r);return u.a?u.b?Ha(g([o,Dl()])):o:u.b?Dl():M}(),c=_c(a),l=c;return t(L_,t(ri,qr,hc(a)),t(mc,T(l,l,l),i))}),M_=$(function(e,r){return C(T_,!0,!0,e,r)}),D_=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Bv=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),j_=_e(function(e,r,n,a,o){return{$:3,a:e,b:r,c:n,d:a,e:o}}),A_=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return t(Mv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return s(D_,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return s(Bv,n,a,c);default:var n=e.a,a=e.b,o=e.c,i=e.d,c=e.e;return z(j_,n,a,o,i,c)}},B_=A_,Fv=function(e){switch(e.$){case 0:var o=e.a,r=e.b;return g([t(Y1,o,r)]);case 1:var o=e.a,n=e.b;return g([t(f_,o,n)]);case 3:var o=e.a,a=e.b;return g([t(M_,B_(o),a)]);case 2:var o=e.a,i=e.b;return g([t(c_,o,i)]);case 4:var c=e.a,l=e.b;return g([t(b_,Dv(c),l)]);default:var u=e.a;return t(io,Fv,u)}},Ev=function(e){return t(io,Fv,e)},F_=$(function(e,r){return I3({eM:e.eM,eQ:j$(e.eR),an:e.an,$7:ke(e.$7),bf:e.bf,aT:w(At(Qe(e.aJ.gj)),At(Qe(e.aJ.fl))),aY:Ev(r),fc:e.fc,fz:e.fz,f9:e.f9,gi:e.gi})}),Vv=function(e){return e},E_=$(function(e,r){var n=e,a=nr(r.e4),o=a.gl,i=a.gp,c=a.dg,l=t(uo,r.bS,r.aR),u=l;return{bI:zn(u),eV:n,bQ:Cn(u),cW:0,b5:xn(u),c8:1,gl:-o,gp:-i,dg:-c}}),V_=function(e){return t(E_,Vv(!0),{aR:e.aR,e4:t(yc,ar(e.bH),ar(e.bO)),bS:e.bS})},so=C(kr,52/255,101/255,164/255,1),W_=C(kr,115/255,210/255,22/255,1),wc=function(e){return{$:5,a:e}},He=function(e){return wc(e)},Sc=C(kr,204/255,0/255,0/255,1),Pc=$(function(e,r){return{$:2,a:e,b:r}}),R_=S(function(e,r,n){return{m:t(xr,e,r),fx:De(n.fx),fQ:De(n.fQ)}}),Wv=S(function(e,r,n){return t(Pc,e,s(R_,qr,Y$,{fx:ke(n),fQ:ke(r)}))}),jo=function(e){return s(Ui,0,1,e<=.04045?e/12.92:t(Xr,(e+.055)/1.055,2.4))},N_=function(e){var r=Ri(e),n=r.cZ,a=r.cm,o=r.cg;return s(Ga,jo(n),jo(a),jo(o))},G_=function(e){return s(Bv,0,oi(N_(e)),oi(0))},vn=$(function(e,r){return t(ra,"unlit",e)?Dv(r):G_(r)}),Rv=$(function(e,r){return{$:0,a:e,b:r}}),Nv=$(function(e,r){return{$:4,a:e,b:r}}),xc=$(function(e,r){return{$:3,a:e,b:r}}),Cc=$(function(e,r){return{$:1,a:e,b:r}}),H_=S(function(e,r,n){return{gl:e,gp:r,dg:n}}),I_=$(function(e,r){return{eP:t(v$,e,ac(r)),aT:$c(r)}}),q_=$(function(e,r){var n=r;return t(xr,t(ta,e,n.cN),n.e4)}),O_=$(function(e,r){var n=r;return{m:t(q_,e,n.m),fx:n.fx,fQ:n.fQ}}),J_=function(e){return e},Gv=$(function(e,r){var n=bc(r),a=n.a,o=n.b;return J_(w(e(a),e(o)))}),U_=$(function(e,r){return t(Gv,ta(e),r)}),zc=$(function(e,r){return{eW:r,fQ:De(e)}}),Y_=$(function(e,r){return t(zc,_c(r),t(ta,e,hc(r)))}),Hv=$(function(e,r){var n=r,a=n.a,o=n.b,i=n.c;return T(e(a),e(o),e(i))}),X_=$(function(e,r){return t(Hv,ta(e),r)}),mo=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=s(H_,n,a,o);switch(r.$){case 0:var f=r.a,c=r.b;return t(Rv,f,t(I_,i,c));case 1:var f=r.a,l=r.b;return t(Cc,f,t(X_,i,l));case 3:var f=r.a,u=r.b;return t(xc,f,t(Y_,i,u));case 2:var f=r.a,v=r.b;return t(Pc,f,t(O_,i,v));case 4:var f=r.a,m=r.b;return t(Nv,f,t(U_,i,m));default:var p=r.a;return wc(t(X,mo(T(n,a,o)),p))}}),fn=function(e){return mo(T(e,0,0))},po=function(e){return mo(T(0,e,0))},Iv=function(e){return mo(T(0,0,e))},Q_=S(function(e,r,n){return{eP:s($$,e,r,ac(n)),aT:$c(n)}}),Z_=$(function(e,r){var n=t(Fa,e,r),a=t($t,e,r);return function(o){var i=o;return t(xr,n(i.cN),a(i.e4))}}),K_=S(function(e,r,n){var a=n;return{m:s(Z_,e,r,a.m),fx:a.fx,fQ:a.fQ}}),e2=S(function(e,r,n){return t(Gv,t(Fa,e,r),n)}),r2=S(function(e,r,n){return t(zc,_c(n),s(Fa,e,r,hc(n)))}),n2=S(function(e,r,n){return t(Hv,t(Fa,e,r),n)}),kc=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return t(Rv,l,s(Q_,e,r,a));case 1:var l=n.a,o=n.b;return t(Cc,l,s(n2,e,r,o));case 3:var l=n.a,i=n.b;return t(xc,l,s(r2,e,r,i));case 2:var l=n.a,c=n.b;return t(Pc,l,s(K_,e,r,c));case 4:var l=n.a,u=n.b;return t(Nv,l,s(e2,e,r,u));default:var v=n.a;return wc(t(X,t(kc,e,r),v))}}),a2=t(xr,qr,nc),qv=$(function(e,r){return s(kc,a2,ar(e),r)}),t2=t(xr,qr,no),li=$(function(e,r){return s(kc,t2,ar(e),r)}),o2=Wf,i2=Rf,c2=function(e){var r=e.a,n=e.b,a=e.c;return lr(t(Xr,r,2)+t(Xr,n,2)+t(Xr,a,2))},l2=function(e){var r=e.a,n=e.b,a=e.c,o=c2(T(r,n,a));return{bH:t(i2,n,r),fp:o2(a/o),fQ:o}},pt=E(function(e,r,n,a){var o=a.a,i=a.b,c=T(i.gl-o.gl,i.gp-o.gp,i.dg-o.dg),l=c.a,u=c.b,v=c.c,f=l2(T(l,u,v)),m=f.fQ,p=f.bH,d=f.fp;return t(Iv,o.dg,t(po,o.gp,t(fn,o.gl,t(li,p,t(qv,d-Hr(90),t(fn,m/2,t(li,Hr(90),s(Wv,t(vn,e,r),n/2,m))))))))}),u2=function(e){return He(g([C(pt,e,Sc,.1,w(s(Ne,0,0,0),s(Ne,10,0,0))),C(pt,e,W_,.1,w(s(Ne,0,0,0),s(Ne,0,10,0))),C(pt,e,so,.1,w(s(Ne,0,0,0),s(Ne,0,0,10)))]))},$2=C(kr,78/255,154/255,6/255,1),ui=$(function(e,r){return t(xc,e,t(zc,ke(r),qr))}),Ov=E(function(e,r,n,a){var o=a.a,i=a.b;return C(pt,e,r,n,w(s(Ne,o.gl,o.gp,0),s(Ne,i.gl,i.gp,0)))}),v2=C(kr,237/255,212/255,0/255,1),f2=$(function(e,r){var n=Va(r.k).cc,a=t(li,n.e5,He(g([t(qv,n.fX,He(g([t(fn,-.02,t(ui,t(vn,e,Sc),n.aS.fQ)),t(fn,.02,t(ui,t(vn,e,v2),n.aS.fQ))]))),s(Wv,t(vn,e,Yu),.2,1.1)]))),o=n.gf,i=o.a,c=o.b,l=t(ra,"draw speed vector",e)?C(Ov,e,$2,.2,w(t(yr,0,0),t(yr,.3*i,.3*c))):He(P);return t(po,n.aS.bK.gp,t(fn,n.aS.bK.gl,t(Iv,.5,He(g([a,l])))))}),gt=$(function(e,r){var n=r.a,a=r.b,o=r.c;return t(Cc,e,s(Je,s(ft,n.gl,n.gp,n.dg),s(ft,a.gl,a.gp,a.dg),s(ft,o.gl,o.gp,o.dg)))}),s2=function(e){return t(gt,t(vn,e,so),T(s(Ne,0,0,0),s(Ne,.1,0,0),s(Ne,0,.1,0)))},d2=$(function(e,r){if(t(ra,"draw ball trail",e)){var n=Va(r.k).cc;return He(t(X,function(a){return t(po,a.gp,t(fn,a.gl,s2(e)))},n.ga))}else return He(P)}),m2=$(function(e,r){return t(po,r.aG.gp,t(fn,r.aG.gl,t(ui,t(vn,e,Sc),.2)))}),p2=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return P}();return s(qt,oo,e,r)},g2=$(function(e,r){var n=r.l.aK;if(n.$===1){var a=n.a;return He(t(X,s(Ov,e,so,.2),p2(a)))}else return He(P)}),Ao=$(function(e,r){var n=e.a,a=e.b,o=e.c;return{gl:r.gl+n,gp:r.gp+a,dg:r.dg+o}}),b2=$(function(e,r){return{gl:e,gp:r}}),h2=$(function(e,r){var n=e,a=r;return a.gl*n.gp-a.gp*n.gl}),jl=$(function(e,r){var n=e,a=r;return{gl:a.gl-n.gl,gp:a.gp-n.gp}}),_2=function(e){var r=e;return r},Jv=function(e){var r=_2(e),n=r.a,a=r.b,o=r.c,i=t(jl,n,a),c=t(jl,n,o);return t(ce,.5,t(h2,c,i))},Uv=S(function(e,r,n){return T(e,r,n)}),y2=function(e){return s(je,$n,ve,e)},Yv=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=$(function(f,m){return Jv(s(Uv,r,f,m))}),l=s(qt,c,t(L,a,i),i);return y2(l)}else{var r=e.a,n=e.b,a=n.a;return ve}else return e.a,ve;else return ve},w2=function(e){return t(ga,ve,Yv(e))?e:fe(e)},Xv=$(function(e,r){var n=e,a=r;return q(a,n)>-1}),S2=function(e){return t(Xv,ve,Yv(e))?e:fe(e)},P2=$(function(e,r){return{a0:t(X,w2,e),a4:S2(r)}}),x2=function(e){return t(P2,P,e)},Wr=function(e){var r=e;return r.gl},Rr=function(e){var r=e;return r.gp},Bo=$(function(e,r){return{gl:e(Wr(r)),gp:e(Rr(r))}}),bn=$(function(e,r){var n=e,a=r;return q(a,n)>0}),Vt=S(function(e,r,n){return Jv(s(Uv,e.el,r.el,n.el))}),C2=$(function(e,r){e:for(;;){var n=r.p;if(n.b){var o=n.a,i=n.b;if(t(bn,ve,s(Vt,o,r.g,e))){var a=T(o.fq,r.g.fq,e.fq),c=e,l={g:o,p:i,j:r.j,bh:t(L,a,r.bh)};e=c,r=l;continue e}else return{g:e,p:t(L,r.g,r.p),j:r.j,bh:r.bh}}else if(t(bn,ve,s(Vt,r.j,r.g,e))){var a=T(r.j.fq,r.g.fq,e.fq);return{g:e,p:P,j:r.j,bh:t(L,a,r.bh)}}else return{g:e,p:g([r.g]),j:r.j,bh:r.bh}}}),z2=$(function(e,r){e:for(;;){var n=r.p;if(n.b){var o=n.a,i=n.b;if(t(bn,ve,s(Vt,e,r.g,o))){var a=T(e.fq,r.g.fq,o.fq),c=e,l={g:o,p:i,j:r.j,bh:t(L,a,r.bh)};e=c,r=l;continue e}else return{g:e,p:t(L,r.g,r.p),j:r.j,bh:r.bh}}else if(t(bn,ve,s(Vt,e,r.g,r.j))){var a=T(e.fq,r.g.fq,r.j.fq);return{g:e,p:P,j:r.j,bh:t(L,a,r.bh)}}else return{g:e,p:g([r.g]),j:r.j,bh:r.bh}}}),k2=$(function(e,r){var n=e,a=r;return t(Wi,n,a)}),L2=$(function(e,r){var n=e,a=r;return q(a,n)<0}),Da=$(function(e,r){var n=Rr(r),a=Rr(e),o=Wr(r),i=Wr(e);return t(L2,n,a)?0:t(bn,n,a)?2:t(k2,o,i)}),Wt=function(e){return e},Qv=Df,T2=$(function(e,r){var n=S(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(e.fq,a.fq,l.fq),v=l,f=u,m=t(L,c,i);a=v,o=f,i=m;continue e}else{var c=T(e.fq,a.fq,r.j.fq);return t(L,c,i)}});return{g:e,p:P,j:r.g,bh:s(n,r.g,r.p,r.bh)}}),M2=$(function(e,r){var n=S(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(a.fq,e.fq,l.fq),v=l,f=u,m=t(L,c,i);a=v,o=f,i=m;continue e}else{var c=T(a.fq,e.fq,r.j.fq);return t(L,c,i)}});return{g:e,p:P,j:r.g,bh:s(n,r.g,r.p,r.bh)}}),D2=function(e){var r=t(Qv,$(function(u,v){return t(Da,v.el,u.el)}),e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=a.b,c=$(function(u,v){return he(u.a2,v.j.fq)?t(M2,u,v):he(v.j.a2,u.fq)?t(T2,u,v):he(u.a2,v.g.fq)?t(z2,u,v):he(v.g.a2,u.fq)?t(C2,u,v):Wt(v)}),l={g:o,p:P,j:n,bh:P};return s(je,c,l,i).bh}else return r.a,P;else return P},Ja=$(function(e,r){return t(Ar,e,r.R)}),j2=$(function(e,r){var n=r;return s(cn,e,0,n)}),A2=_e(function(e,r,n,a,o){e:for(;;){var i=o.a,c=o.b,l=t(Ja,a,e);if(l.$)return Wt(w(i,P));var u=l.a,v=t(Ar,u.ai,r);if(v.$)return Wt(w(i,P));var f=v.a,m=t(j2,a,i),p=u.as,d={fq:u.ai,a2:u.ap,el:f},b=t(L,d,c);if(he(p,n))return w(m,fe(b));var h=e,y=r,x=n,_=p,k=w(m,b);e=h,r=y,n=x,a=_,o=k;continue e}}),B2=ao,it=Sf,F2=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=function(l){if(l.$){var v=l.a;return mn(t(it,e,v))}else{var u=l.a;return on(t(it,c,u))}};return C(Fr,n,a,t(it,c,o),t(it,e,i))}),E2=$(function(e,r){var n=t(Kn,e,r);return!n.$}),V2=$(function(e,r){var n=r;return t(E2,e,n)}),W2=function(e){var r=t(F2,function(c){return c.el},e.al),n=$(function(c,l){var u=l,v=u.a,f=u.b;if(t(V2,c,v))return l;var m=z(A2,e,r,c,c,w(v,P)),p=m.a,d=m.b;return w(p,t(L,d,f))}),a=t(sn,0,lc(e.R)-1),o=s(je,n,w(B2,P),a),i=o.b;return w(r,i)},R2=P,kn=$(function(e,r){if(r.$)return Wt(e);var n=r.a;return n}),N2=_e(function(e,r,n,a,o){if(r.$===1)return F;var i=r.a;if(n.$===1)return F;var c=n.a;if(a.$===1)return F;var l=a.a;if(o.$===1)return F;var u=o.a;return Q(C(e,i,c,l,u))}),$i=_f,Zv=df,Hn=hf,_a=E(function(e,r,n,a){var o=gn&r>>>e;if(q(o,Sr(a))>-1){if(e===5)return t($i,mn(n),a);var i=on(C(_a,e-ur,r,n,dn));return t($i,i,a)}else{var c=t(La,o,a);if(c.$){var i=on(C(_a,e-ur,r,n,Zv(c)));return s(Hn,o,i,a)}else{var l=c.a,i=on(C(_a,e-ur,r,n,l));return s(Hn,o,i,a)}}}),vi=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=Sr(i),l=Sr(e),u=n+(l-c);if(he(l,pe)){var v=q(u>>>ur,1<<a)>0;if(v){var f=a+ur,m=C(_a,f,n,e,Zv(on(o)));return C(Fr,u,f,m,dn)}else return C(Fr,u,a,C(_a,a,n,e,o),dn)}else return C(Fr,u,a,o,e)}),Al=$(function(e,r){var n=r.d;return t(vi,t($i,e,n),r)}),Bl=$(function(e,r){return D(r,{as:e})}),Fl=$(function(e,r){return D(r,{D:e})}),Kv=E(function(e,r,n,a){var o=gn&r>>>e,i=t(La,o,a);if(i.$){var u=i.a,v=s(Hn,gn&r,n,u);return s(Hn,o,mn(v),a)}else{var c=i.a,l=C(Kv,e-ur,r,n,c);return s(Hn,o,on(l),a)}}),G2=S(function(e,r,n){var a=n.a,o=n.b,i=n.c,c=n.d;return e<0||q(e,a)>-1?n:q(e,uv(a))>-1?C(Fr,a,o,i,s(Hn,gn&e,r,c)):C(Fr,a,o,C(Kv,o,e,r,i),c)}),ct=S(function(e,r,n){var a=t(Ar,e,n);if(a.$)return n;var o=a.a;return s(G2,e,r(o),n)}),On=S(function(e,r,n){var a=lc(n.R);return t(kn,w(n,-1),z(N2,E(function(o,i,c,l){return w(D(n,{R:t(Al,{ap:e,as:e,D:l.D,ai:r.fq},t(Al,{ap:r.fq,as:r.b0,D:c.D,ai:e},s(ct,l.D,Bl(a+1),s(ct,c.D,Bl(a),s(ct,r.b0,Fl(a),s(ct,e,Fl(a+1),n.R))))))}),a)}),t(Ar,e,n.al),t(Ar,r.fq,n.al),t(Ar,e,n.R),t(Ar,r.b0,n.R)))}),Jn=$(function(e,r){return t(Kn,e,r.bl)}),H2=_r,El=$(function(e,r){return t(Ar,e,r.al)}),I2=S(function(e,r,n){if(r.$===1)return F;var a=r.a;if(n.$===1)return F;var o=n.a;return Q(t(e,a,o))}),ef=S(function(e,r,n){return t(kn,n,t(Er,function(a){return s(I2,$(function(o,i){var c=H2(w(o.el,i.el));return D(n,{bg:t(e,w(r,c),n.bg)})}),t(El,a.ai,n),t(El,a.ap,n))},t(Ja,r,n)))}),q2=$(function(e,r){var n=r;return t(co,mp(e),n)}),Lc=ef(q2),O2=$(function(e,r){return t(kn,r,t(Er,function(n){return t(re,function(a){var o=a.a1?s(On,e,a,r).a:r;return t(Lc,n.D,o)},t(Jn,n.D,r))},t(Ja,e,r)))}),Un=S(function(e,r,n){return{fq:e,a1:n,b0:r}}),J2=$(function(e,r){var n=r;return t(L,e,n)}),Tc=ef(J2),Yn=S(function(e,r,n){return D(n,{bl:s(cn,e,r,n.bl)})}),U2=$(function(e,r){return t(kn,r,t(Er,function(n){return t(re,function(a){var o=a.a1?s(On,e,a,r).a:r;return s(Yn,e,s(Un,e,e,!1),t(Tc,e,t(Lc,n.D,o)))},t(Jn,n.D,r))},t(Ja,e,r)))}),Y2=function(e){var r=e;return r},X2=$(function(e,r){var n=r,a=Rr(e),o=Wr(e);return t(re,function(i){i.a;var c=i.b,l=c.a;return c.b,l},s(je,$(function(i,c){var l=Y2(i.b),u=l.a,v=l.b,f=Wr(u),m=Rr(u),p=Wr(v),d=Rr(v),b=function(){if(he(m,d))return t(Me,t(me,f,p),o);var x=t(ci,t(Me,m,a),t(Me,m,d));return t(Me,t($n,t(ce,x,t(Me,f,p)),f),o)}();if(t(Xv,ve,b)){if(c.$===1)return Q(w(b,i));var h=c.a,y=h.a;return h.b,t(ga,y,b)?Q(w(b,i)):c}else return c}),F,n))}),Mc=$(function(e,r){return t(X2,e,r.bg)}),Q2=S(function(e,r,n){return t(kn,n,t(Er,function(a){return t(Er,function(o){var i=o.a1?s(On,e,o,n).a:n,c=t(Lc,a.D,i);return t(Er,function(l){return t(re,function(u){var v=u.a1?s(On,e,u,c):w(c,e),f=v.a,m=v.b;return s(Yn,l,s(Un,e,m,!0),f)},t(Jn,l,n))},t(Mc,r,c))},t(Jn,a.D,n))},t(Ja,e,n)))}),Z2=S(function(e,r,n){return t(kn,n,t(Er,function(a){return t(re,function(o){var i=o.a1?s(On,e,o,n):w(n,e),c=i.a,l=i.b;return s(Yn,a,s(Un,e,l,!1),c)},t(Jn,a,n))},t(Mc,r,n)))}),K2=S(function(e,r,n){return t(kn,n,t(Er,function(a){return t(re,function(o){var i=s(On,e,o,n),c=i.a,l=i.b;return s(Yn,e,s(Un,e,e,!1),t(Tc,e,s(Yn,a,s(Un,e,l,!1),c)))},t(Jn,a,n))},t(Mc,r,n)))}),ey=$(function(e,r){return s(Yn,e,s(Un,e,e,!1),t(Tc,e,r))}),rf=xf,nf=Pf,Vl=$(function(e,r){var n=Sr(e),a=pe-Sr(r.s)-n,o=s(rf,pe,r.s,e);return a<0?{C:t(L,mn(o),r.C),o:r.o+1,s:s(nf,a,n,e)}:a?{C:r.C,o:r.o,s:o}:{C:t(L,mn(o),r.C),o:r.o+1,s:dn}}),Wl=$(function(e,r){r.a,r.c;var n=r.d,a=Sr(e),o=pe-Sr(n)-a,i=s(rf,pe,n,e),c=t(vi,i,r);if(o<0){var l=s(nf,o,a,e);return t(vi,l,c)}else return c}),Fn=yf,ry=function(e){var r=e.a,n=e.c,a=e.d,o=$(function(i,c){if(i.$)return t(L,i,c);var l=i.a;return s(Fn,o,c,l)});return{C:s(Fn,o,P,n),o:r/pe|0,s:a}},ny=$(function(e,r){e.d;var n=r.a,a=r.c,o=r.d;if(q(n,pe*4)<1){var i=$(function(c,l){if(c.$){var v=c.a;return t(Wl,v,l)}else{var u=c.a;return s(Fn,i,l,u)}});return t(Wl,o,s(Fn,i,e,a))}else{var i=$(function(l,u){if(l.$){var f=l.a;return t(Vl,f,u)}else{var v=l.a;return s(Fn,i,u,v)}});return t(Di,!0,t(Vl,o,s(Fn,i,ry(e),a)))}}),ay=S(function(e,r,n){e:for(;;)if(r.b){var a=r.a,o=r.b,i=he(a,e)?n:t(L,a,n),c=a,l=o,u=i;e=c,r=l,n=u;continue e}else return n}),ty=function(e){if(e.b){var r=e.a,n=e.b,a=s(ay,r,n,P);if(a.b){var o=a.a,i=a.b;return he(o,r)?t(L,r,fe(i)):t(L,r,fe(a))}else return g([r])}else return P},Rl=$(function(e,r){var n=e,a=r;return a*n}),Nl=S(function(e,r,n){var a=Rr(n),o=Rr(r),i=Rr(e),c=Wr(n),l=Wr(r),u=Wr(e),v=t(Rl,t(Me,l,c),t(Me,i,o)),f=t(Rl,t(Me,o,a),t(Me,u,l)),m=t(Me,v,f);return t(bn,ve,m)}),Gl=S(function(e,r,n){var a=t(Da,r,e),o=t(Da,r,n);return a===2&&o===2?s(Nl,e,r,n)?0:4:!a&&!o?s(Nl,e,r,n)?1:5:a===2?3:2}),oy=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=i.a,l=i.b,u=s(je,Ot,c,l),v=E(function(p,d,b,h){e:for(;;)if(b.b){var x=b.a,_=b.b,k={aq:s(Gl,p,d,x),el:d},A=d,I=x,H=_,G=t(L,k,h);p=A,d=I,b=H,h=G;continue e}else{var y={aq:s(Gl,p,d,r),el:d};return fe(t(L,y,h))}});return C(v,u,r,t(L,a,t(L,c,l)),P)}else{var r=e.a,n=e.b,a=n.a;return t(Da,r,a)===2?g([{aq:4,el:r},{aq:5,el:a}]):g([{aq:5,el:r},{aq:4,el:a}])}else return e.a,P;else return P},iy=function(e){var r=e.a4,n=e.a0,a=t(X,function(c){return ty(c)},t(L,r,n)),o=s(je,$(function(c,l){var u=l.a,v=l.b,f=sr(c),m=t(Cu,f,function(p){return p?he(p,f-1)?{ap:u,as:u,D:u+p-1,ai:u+p}:{ap:u+p+1,as:u+p+1,D:u+p-1,ai:u+p}:{ap:u+1,as:u+1,D:u+f-1,ai:u}});return w(u+f,t(ny,v,m))}),w(0,Ti),a).b,i=Ee(t(X,oy,a));return{R:o,al:i}},cy=function(e){var r=$(function(u,v){var f=u.a,m=u.b,p=m.aq;switch(p){case 0:return t(ey,f,v);case 1:return t(O2,f,v);case 3:return s(Z2,f,m.el,v);case 2:return t(U2,f,v);case 4:return s(K2,f,m.el,v);default:return s(Q2,f,m.el,v)}}),n=iy(e),a=n.al,o=n.R,i={bg:R2,R:o,bl:ao,al:Ta(a)},c=t(Qv,$(function(u,v){var f=u.b,m=v.b;return t(Da,m.el,f.el)}),t(zi,oo,a)),l=s(je,r,i,c);return Ta(a),W2(l)},ly=function(e){var r=cy(e),n=r.a,a=r.b;return t(uc,n,Ee(t(X,D2,a)))},uy=function(e){return ly(e)},$y=function(e){return t(X,function(r){var n=r.a,a=r.b,o=r.c;return T(t(Bo,un,n),t(Bo,un,a),t(Bo,un,o))},$v(uy(x2(t(X,function(r){return t(b2,r.gl,r.gp)},e)))))},vy=$(function(e,r){var n=t(vn,e,so),a=2,o=function(v){var f=v.gl,m=v.gp;return s(Ne,f,m,a)},i=function(v){var f=v.a,m=v.b;return He(g([t(gt,n,T(o(f),o(m),t(Ao,T(0,0,-a),o(f)))),t(gt,n,T(t(Ao,T(0,0,-a),o(f)),o(m),t(Ao,T(0,0,-a),o(m))))]))},c=function(v){return He(t(X,i,Ji(v.ej)))},l=function(v){return He(t(X,function(f){var m=f.a,p=f.b,d=f.c;return t(gt,n,T(o(m),o(p),o(d)))},$y(v.ej)))},u=function(v){return He(g([l(v),c(v)]))};return He(t(X,u,Va(r.k).fO))}),af=function(e){return e},fy=function(e){return af(1.2*t(Xr,2,e))},Fo=lo({gl:.37208,gp:.37529}),sy=$(function(e,r){return{$:2,a:e,b:r}}),tf=function(e){return{$:0,a:e}},lt=function(e){var r=e;return r},dy=function(e){var r=e;return r.eV},of=tf(va.a),my=$(function(e,r){var n=$(function(a,o){var i=o.a,c=o.b;return e(a)?w(t(L,a,i),c):w(i,t(L,a,c))});return s(zr,n,w(P,P),r)}),py=function(e){var r=e;return gr({dP:r.gl,dQ:r.b5,dR:0,dS:0,dT:r.gp,dU:r.bQ,dV:0,dW:0,dX:r.dg,dY:r.bI,dZ:0,d_:0,d$:r.c8,d0:r.cW,d1:0,d2:0})},gy=ie(function(e,r,n,a,o,i,c,l){var u=t(my,dy,g([lt(e),lt(r),lt(n),lt(a)])),v=u.a,f=u.b;if(v.b){var m=ue(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var p=m.a,d=m.b,b=d.a,h=d.b,y=h.a,x=h.b,_=x.a;return t(sy,t(X,py,v),{bn:t(Ze,p,b),bV:t(Ze,y,_),bW:t(Ze,o,i),bX:t(Ze,c,l)})}else return of}else return tf({bn:t(Ze,e,r),bV:t(Ze,n,a),bW:t(Ze,o,i),bX:t(Ze,c,l)})}),by=E(function(e,r,n,a){return Nt(gy,e,r,n,a,Ue,Ue,Ue,Ue)}),hy={$:5},_y=hy,yy=lo({gl:.44757,gp:.40745}),wy=function(e){return e},Hl=function(e){return e},Eo=function(e){return e},Sy={$:1},Py=Sy,xy=$(function(e,r){var n=e,a=Ia(r.el),o=a.gl,i=a.gp,c=a.dg,l=t(uo,r.bS,r.aR),u=l;return{bI:zn(u),eV:n,bQ:Cn(u),cW:0,b5:xn(u),c8:2,gl:o,gp:i,dg:c}}),Il=function(e){return t(xy,Vv(!0),{aR:e.aR,bS:e.bS,el:Hi(e.el)})},Vo=function(e){return e/255},ql=S(function(e,r,n){return C(kr,Vo(e),Vo(r),Vo(n),1)}),Ol=function(e){var r=e;return r},Cy=function(e){e:for(;;){if(he(e.dD,ve)&&he(e.dE,ve))return Ue;if(t(bn,De(e.dD),De(e.dE))){var r={aR:e.aR,dD:e.dE,dE:e.dD,eF:Dt(e.eF)};e=r;continue e}else{var n=K(Ol(e.dE)/Vr),a=K(Ol(e.dD)/Vr),o=nr(e.eF),i=o.gl,c=o.gp,l=o.dg,u=t(uo,ov(1),e.aR),v=u;return{bI:a*zn(v),eV:!1,bQ:a*Cn(v),cW:n/a,b5:a*xn(v),c8:3,gl:i,gp:c,dg:l}}}},zy=function(e){return Cy({aR:e.aR,dD:e.dD,dE:e.dE,eF:t(yc,ar(e.bH),ar(e.bO))})},ky=function(e){return t(X$,{eM:e.eM,eQ:e.eQ,an:e.an,$7:e.$7,aT:e.aT},g([{aY:e.aY,fc:e.fc,fz:e.fz,f9:e.f9,gi:e.gi}]))},Ly=lo({gl:.31271,gp:.32902}),Ty=function(e){return De(e)},My={$:0},Dy=My,jy=function(e){return ky({eM:Q$(e.bf),eQ:e.eQ,an:e.an,$7:e.$7,aT:e.aT,aY:e.aY,fc:Ty(af(80)),fz:of,f9:Dy,gi:Ly})},Ay=$(function(e,r){return jy({eQ:j$(e.eQ),an:e.an,$7:ke(e.$7),bf:e.bf,aT:w(At(Qe(e.aJ.gj)),At(Qe(e.aJ.fl))),aY:Ev(r)})}),By=$(function(e,r){var n=V_({bH:0,aR:zh(wy(2e3)),bO:Hr(90),bS:Eo(240)}),a=Il({aR:Fo,bS:Hl(6e3),el:{gl:2,gp:3,dg:3}}),o=zy({bH:0,aR:Fo,bO:Hr(90),dD:Eo(30),dE:Eo(30)}),i=Il({aR:yy,bS:Hl(6e3),el:{gl:-2,gp:4,dg:3}}),c=t(ra,"unlit",e)?Ay({eQ:s(ql,46,46,46),an:r.an,$7:.1,bf:e.bf,aJ:e.aJ}):F_({eM:Py,eR:s(ql,46,46,46),an:r.an,$7:.1,bf:e.bf,fc:fy(6),fz:C(by,i,a,n,o),aJ:e.aJ,f9:_y,gi:Fo});return c(g([u2(e),t(f2,e,r),t(d2,e,r),t(vy,e,r),t(m2,e,r),t(g2,e,r)]))}),Fy=$(function(e,r){return t(By,e,r)}),Ey=function(e){return{$:0,a:e}},Vy={$:8},jr=$(function(e,r){return t(Zt,g([N("m-1 p-2 rounded bg-black40 hover:bg-black80"),Kt(e)]),g([oe(r)]))}),Wy=function(e){return t(c$,g([N("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),g([oe(e.l.cp)]))},Ry=$(function(e,r){return t(V,P,g([t(jr,Vy,"Export Levels"),Wy(r)]))}),Ny={$:9},Gy=function(e){return{$:10,a:e}},Hy=function(e){return t(_n,"cols",Ce(e))},Iy=function(e){return t(_n,"rows",Ce(e))},qy=mr("textarea"),Oy=function(e){return t(qy,g([N("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),Iy(150),Hy(10),eo(Gy),ro(e.l.cq)]),g([oe("todo")]))},Jy=$(function(e,r){return t(V,P,g([t(jr,Ny,"Import Levels"),Oy(r)]))}),Uy={$:5},Yy={$:7},Xy={$:4},Qy={$:3},Zy={$:6},Ky=function(e){var r=e;return r.n},ew=function(e){return sr(Ky(e))+1},rw=function(e){var r=e;return 1+sr(r.n)+sr(r.E)},nw=mr("span"),aw=function(e){return t(V,P,g([t(V,g([N("text-lg")]),g([oe("Level Selection")])),t(Ur,P,g([t(jr,Qy,"<"),t(nw,g([t(Pe,"margin","10px")]),g([oe(Gi(g([Ce(ew(e.k))," / ",Ce(rw(e.k))])))])),t(jr,Xy,">")])),t(jr,Uy,"Add level"),t(jr,Zy,"Remove current level"),t(jr,Yy,"Move level one up")]))},tw=function(e){return{$:2,a:e}},ow={$:1},iw=$(function(e,r){return t(V,P,g([t(V,g([N("h-40")]),g([t(V,g([N("text-lg")]),g([oe("Polygon editor")])),function(){var n=r.l.aK;if(n.$===1){var a=n.a;return t(V,g([N("p-2")]),g([t(V,P,g([oe("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ")])),t(V,P,g([oe("After you are finished drawing, click the button below.")])),t(jr,tw(a),"Finish drawing polygon")]))}else return t(jr,ow,"Start drawing a polygon")}()]))]))}),cw=$(function(e,r){return r.l.co?t(V,P,g([t(V,g([N("p-4")]),g([t(iw,e,r)])),t(V,g([N("p-4 border-[0.5px] border-white20")]),g([aw(r)])),t(V,g([N("p-4 border-[0.5px] border-white20")]),g([t(Ry,e,r)])),t(V,g([N("p-4 border-[0.5px] border-white20")]),g([t(Jy,e,r)]))])):t(V,P,P)}),lw=S(function(e,r,n){return t(V,P,g([t(Ca,g([N("align-bottom"),za("checkbox"),xa(n),Tt(n),n$(e),Qu(r)]),P),t(Lt,g([N("pl-2 font-bold"),zt(n)]),g([oe(n)]))]))}),uw=$(function(e,r){return t(V,g([N("w-[300px] overflow-y-scroll text-xs bg-black20"),t(Pe,"height",Se(e.aJ.fl-140)+"px")]),g([t(V,g([N("m-4")]),g([s(lw,Ey,r.l.co,"Editor")])),t(cw,e,r)]))}),$w=Ge(Qg,Fy,Rb,T0,P0,uw,xh);const vw={Main:{init:$w(t(B,function(e){return be({fs:e})},t(j,"inputs",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return be({eY:c,bf:i,ds:o,dI:a,ei:n,aJ:r,gh:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return be({eL:m,e_:f,dr:v,e7:u,fw:l,fP:c,fU:i,ew:o,eE:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",$r(Pa)))},t(j,"left",ee))},t(j,"pressedKeys",$r(Pa)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return be({dr:v,ft:u,fC:l,fV:c,fW:i,eE:o,gl:a,gp:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return be({fl:n,gj:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return be({e1:r,e2:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},fw=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),o=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function f(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function m(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),r(d)&&(R.keyboard.control=!0),n(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),o(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=d.code),r(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),o(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{f(R)}),window.addEventListener("focus",d=>{f(R)}),window.addEventListener("visibilitychange",d=>{f(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(d){const b=d/1e3,h=b-R.clock;h<.009||(R.dt=h,R.clock=b,e.ports.tick.send(R),m(R)),window.requestAnimationFrame(p)}},sw=()=>{Wo("pointerdown"),Wo("wheel"),Wo("keydown")},Wo=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},dw=vw.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});sw();fw(dw);
