const sf=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};sf();function Qr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Qr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Qr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Qr(4,e,function(r){return function(n){return function(a){return function(o){return e(r,n,a,o)}}}})}function _e(e){return Qr(5,e,function(r){return function(n){return function(a){return function(o){return function(i){return e(r,n,a,o,i)}}}}})}function tr(e){return Qr(6,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return e(r,n,a,o,i,c)}}}}}})}function Et(e){return Qr(7,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return e(r,n,a,o,i,c,l)}}}}}}})}function oe(e){return Qr(8,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,o,i,c,l,u)}}}}}}}})}function di(e){return Qr(9,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,o,i,c,l,u,v)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function s(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,o){return e.a===4?e.f(r,n,a,o):e(r)(n)(a)(o)}function k(e,r,n,a,o,i){return e.a===5?e.f(r,n,a,o,i):e(r)(n)(a)(o)(i)}function Ge(e,r,n,a,o,i,c){return e.a===6?e.f(r,n,a,o,i,c):e(r)(n)(a)(o)(i)(c)}function mi(e,r,n,a,o,i,c,l){return e.a===7?e.f(r,n,a,o,i,c,l):e(r)(n)(a)(o)(i)(c)(l)}function Wt(e,r,n,a,o,i,c,l,u){return e.a===8?e.f(r,n,a,o,i,c,l,u):e(r)(n)(a)(o)(i)(c)(l)(u)}function df(e,r,n,a,o,i,c,l,u,v){return e.a===9?e.f(r,n,a,o,i,c,l,u,v):e(r)(n)(a)(o)(i)(c)(l)(u)(v)}var mf=[];function gf(e){return[e]}function pf(e){return e.length}var bf=S(function(e,r,n){for(var a=new Array(e),o=0;o<e;o++)a[o]=n(r+o);return a}),hf=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),_f=$(function(e,r){return r[e]}),yf=S(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=n[i];return o[e]=r,o}),wf=$(function(e,r){for(var n=r.length,a=new Array(n+1),o=0;o<n;o++)a[o]=r[o];return a[n]=e,a}),Sf=S(function(e,r,n){for(var a=n.length,o=0;o<a;o++)r=t(e,n[o],r);return r}),xf=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r}),Pf=$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=e(r[o]);return a});S(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=t(e,r+i,n[i]);return o});var Cf=S(function(e,r,n){return n.slice(e,r)}),kf=S(function(e,r,n){var a=r.length,o=e-a;o>n.length&&(o=n.length);for(var i=a+o,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<o;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+zf()),r});function zf(e){return"<internals>"}function qn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function he(e,r){for(var n,a=[],o=Bo(e,r,0,a);o&&(n=a.pop());o=Bo(n.a,n.b,0,a));return o}function Bo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&qn(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$<0&&(e=Uc(e),r=Uc(r));for(var o in e)if(!Bo(e[o],r[o],n+1,a))return!1;return!0}$(he);var Lf=$(function(e,r){return!he(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return O(e,r)<0});$(function(e,r){return O(e,r)<1});$(function(e,r){return O(e,r)>0});$(function(e,r){return O(e,r)>=0});var Tf=$(function(e,r){var n=O(e,r);return n<0?wu:n?Lm:yu}),za=0;function w(e,r){return{a:e,b:r}}function T(e,r,n){return{a:e,b:r,c:n}}function D(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=wr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=wr(e.a,r);return n}var x={$:0};function wr(e,r){return{$:1,a:e,b:r}}var Mf=$(wr);function p(e){for(var r=x,n=e.length;n--;)r=wr(e[n],r);return r}function Vt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Df=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return p(a)});E(function(e,r,n,a){for(var o=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)o.push(s(e,r.a,n.a,a.a));return p(o)});_e(function(e,r,n,a,o){for(var i=[];r.b&&n.b&&a.b&&o.b;r=r.b,n=n.b,a=a.b,o=o.b)i.push(C(e,r.a,n.a,a.a,o.a));return p(i)});tr(function(e,r,n,a,o,i){for(var c=[];r.b&&n.b&&a.b&&o.b&&i.b;r=r.b,n=n.b,a=a.b,o=o.b,i=i.b)c.push(k(e,r.a,n.a,a.a,o.a,i.a));return p(c)});var jf=$(function(e,r){return p(Vt(r).sort(function(n,a){return O(e(n),e(a))}))}),Af=$(function(e,r){return p(Vt(r).sort(function(n,a){var o=t(e,n,a);return o===yu?0:o===wu?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Bf=$(Math.pow);$(function(e,r){return r%e});var Ff=$(function(e,r){var n=r%e;return e===0?qn(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ef=Math.PI,Wf=Math.cos,Vf=Math.sin,Rf=Math.tan,Nf=Math.acos,Gf=Math.atan,Hf=$(Math.atan2);function If(e){return e}function Of(e){return e===1/0||e===-1/0}var Jf=Math.ceil,Uf=Math.floor,qf=Math.round,Yf=Math.sqrt,jc=Math.log,Xf=isNaN;function Zf(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Qf=$(function(e,r){return e+r});function Kf(e){var r=e.charCodeAt(0);return isNaN(r)?F:Z(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}$(function(e,r){return e+r});function es(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;){var i=r.charCodeAt(o);if(55296<=i&&i<=56319){a[o]=e(r[o]+r[o+1]),o+=2;continue}a[o]=e(r[o]),o++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,o=0;o<a;){var i=r[o],c=r.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=r[o],o++),e(i)&&n.push(i)}return n.join("")});function rs(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var o=e.charCodeAt(a);55296<=o&&o<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,o=0;o<a;){var i=n[o],c=n.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=n[o],o++),r=t(e,i,r)}return r});var ns=S(function(e,r,n){for(var a=n.length;a--;){var o=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,o=n[a]+o),r=t(e,o,r)}return r}),as=$(function(e,r){return r.split(e)}),ts=$(function(e,r){return r.join(e)}),os=S(function(e,r,n){return n.slice(e,r)});function is(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var cs=$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),ls=$(function(e,r){return r.indexOf(e)>-1}),us=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var $s=$(function(e,r){var n=e.length;if(n<1)return x;for(var a=0,o=[];(a=r.indexOf(e,a))>-1;)o.push(a),a=a+n;return p(o)});function Xl(e){return e+""}function vs(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,o=a;o<e.length;++o){var i=e.charCodeAt(o);if(i<48||57<i)return F;r=10*r+i-48}return o==a?F:Z(n==45?-r:r)}function fs(e){if(e.length===0||/[\sxbo]/.test(e))return F;var r=+e;return r===r?Z(r):F}function ss(e){return Vt(e).join("")}function ds(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ms(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function gs(e){return{$:0,a:e}}function Rt(e){return{$:2,b:e}}var ps=Rt(function(e){return typeof e!="number"?rr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?ue(e):rr("an INT",e)}),bs=Rt(function(e){return typeof e=="boolean"?ue(e):rr("a BOOL",e)}),hs=Rt(function(e){return typeof e=="number"?ue(e):rr("a FLOAT",e)}),_s=Rt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):rr("a STRING",e)});function ys(e){return{$:3,b:e}}function ws(e){return{$:5,c:e}}var Ss=$(function(e,r){return{$:6,d:e,b:r}}),xs=$(function(e,r){return{$:7,e,b:r}});function Kr(e,r){return{$:9,f:e,g:r}}var Ps=$(function(e,r){return{$:10,b:r,h:e}});function Cs(e){return{$:11,g:e}}var ks=$(function(e,r){return Kr(e,[r])}),zs=S(function(e,r,n){return Kr(e,[r,n])}),Ls=E(function(e,r,n,a){return Kr(e,[r,n,a])});_e(function(e,r,n,a,o){return Kr(e,[r,n,a,o])});tr(function(e,r,n,a,o,i){return Kr(e,[r,n,a,o,i])});Et(function(e,r,n,a,o,i,c){return Kr(e,[r,n,a,o,i,c])});oe(function(e,r,n,a,o,i,c,l){return Kr(e,[r,n,a,o,i,c,l])});di(function(e,r,n,a,o,i,c,l,u){return Kr(e,[r,n,a,o,i,c,l,u])});var Ts=$(function(e,r){try{var n=JSON.parse(r);return er(e,n)}catch(a){return Be(t(ki,"This is not valid JSON! "+a.message,r))}}),Zl=$(function(e,r){return er(e,r)});function er(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):rr("null",r);case 3:return Oa(r)?Ac(e.b,r,p):rr("a LIST",r);case 4:return Oa(r)?Ac(e.b,r,Ms):rr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return rr("an OBJECT with a field named `"+n+"`",r);var v=er(e.b,r[n]);return ir(v)?v:Be(t(qc,n,v.a));case 7:var a=e.e;if(!Oa(r))return rr("an ARRAY",r);if(a>=r.length)return rr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=er(e.b,r[a]);return ir(v)?v:Be(t(Su,a,v.a));case 8:if(typeof r!="object"||r===null||Oa(r))return rr("an OBJECT",r);var o=x;for(var i in r)if(r.hasOwnProperty(i)){var v=er(e.b,r[i]);if(!ir(v))return Be(t(qc,i,v.a));o=wr(w(i,v.a),o)}return ue(ve(o));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=er(l[u],r);if(!ir(v))return v;c=c(v.a)}return ue(c);case 10:var v=er(e.b,r);return ir(v)?er(e.h(v.a),r):v;case 11:for(var f=x,m=e.g;m.b;m=m.b){var v=er(m.a,r);if(ir(v))return v;f=wr(v.a,f)}return Be(Tm(ve(f)));case 1:return Be(t(ki,e.a,r));case 0:return ue(e.a)}}function Ac(e,r,n){for(var a=r.length,o=new Array(a),i=0;i<a;i++){var c=er(e,r[i]);if(!ir(c))return Be(t(Su,i,c.a));o[i]=c.a}return ue(n(o))}function Oa(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Ms(e){return t(Lu,e.length,function(r){return e[r]})}function rr(e,r){return Be(t(ki,"Expecting "+e,r))}function Dn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Dn(e.b,r.b);case 6:return e.d===r.d&&Dn(e.b,r.b);case 7:return e.e===r.e&&Dn(e.b,r.b);case 9:return e.f===r.f&&Bc(e.g,r.g);case 10:return e.h===r.h&&Dn(e.b,r.b);case 11:return Bc(e.g,r.g)}}function Bc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Dn(e[a],r[a]))return!1;return!0}var Ds=$(function(e,r){return JSON.stringify(r,null,e)+""});function Nt(e){return e}function js(){return[]}function As(){return{}}var Bs=S(function(e,r,n){return n[e]=r,n});function Fs(e){return $(function(r,n){return n.push(e(r)),n})}var Es=null;function hn(e){return{$:0,a:e}}function Ws(e){return{$:1,a:e}}function Hr(e){return{$:2,b:e,c:null}}var Fo=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Vs(e){return{$:5,b:e}}var Rs=0;function gi(e){var r={$:0,e:Rs++,f:e,g:null,h:[]};return pi(r),r}function Ql(e){return Hr(function(r){r(hn(gi(e)))})}function Kl(e,r){e.h.push(r),pi(e)}var Ns=$(function(e,r){return Hr(function(n){Kl(e,r),n(hn(za))})}),fo=!1,Fc=[];function pi(e){if(Fc.push(e),!fo){for(fo=!0;e=Fc.shift();)Gs(e);fo=!1}}function Gs(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,pi(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return bi(r,a,e.ft,e.ge,e.f6,function(){return function(){}})});function bi(e,r,n,a,o,i){var c=t(Zl,e,r?r.flags:void 0);ir(c)||qn(2);var l={},u=n(c.a),v=u.a,f=i(g,v),m=Hs(l,g);function g(d,b){var h=t(a,d,v);f(v=h.a,b),Wc(l,h.b,o(v))}return Wc(l,u.b,o(v)),m?{ports:m}:{}}var br={};function Hs(e,r){var n;for(var a in br){var o=br[a];o.a&&(n=n||{},n[a]=o.a(a,r)),e[a]=Os(o,r)}return n}function Is(e,r,n,a,o){return{b:e,c:r,d:n,e:a,f:o}}function Os(e,r){var n={g:r,h:void 0},a=e.c,o=e.d,i=e.e,c=e.f;function l(u){return t(Fo,l,Vs(function(v){var f=v.a;return v.$===0?s(o,n,f,u):i&&c?C(a,n,f.i,f.j,u):s(a,n,i?f.i:f.j,u)}))}return n.h=gi(t(Fo,l,e.b))}var Js=$(function(e,r){return Hr(function(n){e.g(r),n(hn(za))})});$(function(e,r){return t(Ns,e.h,{$:0,a:r})});function eu(e){return function(r){return{$:1,k:e,l:r}}}function Us(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Ec=[],so=!1;function Wc(e,r,n){if(Ec.push({p:e,q:r,r:n}),!so){so=!0;for(var a;a=Ec.shift();)qs(a.p,a.q,a.r);so=!1}}function qs(e,r,n){var a={};mt(!0,r,a,null),mt(!1,n,a,null);for(var o in e)Kl(e[o],{$:"fx",a:a[o]||{i:x,j:x}})}function mt(e,r,n,a){switch(r.$){case 1:var o=r.k,i=Ys(e,o,a,r.l);n[o]=Xs(e,i,n[o]);return;case 2:for(var c=r.m;c.b;c=c.b)mt(e,c.a,n,a);return;case 3:mt(e,r.o,n,{s:r.n,t:a});return}}function Ys(e,r,n,a){function o(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?br[r].e:br[r].f;return t(i,o,a)}function Xs(e,r,n){return n=n||{i:x,j:x},e?n.i=wr(r,n.i):n.j=wr(r,n.j),n}function Zs(e){br[e]&&qn(3)}$(function(e,r){return r});function Qs(e,r){return Zs(e),br[e]={f:Ks,u:r,a:ed},eu(e)}var Ks=$(function(e,r){return function(n){return e(r(n))}});function ed(e,r){var n=x,a=br[e].u,o=hn(null);br[e].b=o,br[e].c=S(function(c,l,u){return n=l,o});function i(c){var l=t(Zl,a,c);ir(l)||qn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var gt,Ar=typeof document!="undefined"?document:{};function hi(e,r){e.appendChild(r)}E(function(e,r,n,a){var o=a.node;return o.parentNode.replaceChild(qr(e,function(){}),o),{}});function Eo(e){return{$:0,a:e}}var ru=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,o.push(c)}return i+=o.length,{$:1,c:r,d:_i(n),e:o,f:e,b:i}})}),mr=ru(void 0),rd=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,o.push(c)}return i+=o.length,{$:2,c:r,d:_i(n),e:o,f:e,b:i}})}),nd=rd(void 0);function ad(e,r,n,a){return{$:3,d:_i(e),g:r,h:n,i:a}}var td=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function en(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return en([e,r],function(){return e(r)})});S(function(e,r,n){return en([e,r,n],function(){return t(e,r,n)})});E(function(e,r,n,a){return en([e,r,n,a],function(){return s(e,r,n,a)})});_e(function(e,r,n,a,o){return en([e,r,n,a,o],function(){return C(e,r,n,a,o)})});tr(function(e,r,n,a,o,i){return en([e,r,n,a,o,i],function(){return k(e,r,n,a,o,i)})});Et(function(e,r,n,a,o,i,c){return en([e,r,n,a,o,i,c],function(){return Ge(e,r,n,a,o,i,c)})});oe(function(e,r,n,a,o,i,c,l){return en([e,r,n,a,o,i,c,l],function(){return mi(e,r,n,a,o,i,c,l)})});di(function(e,r,n,a,o,i,c,l,u){return en([e,r,n,a,o,i,c,l,u],function(){return Wt(e,r,n,a,o,i,c,l,u)})});var nu=$(function(e,r){return{$:"a0",n:e,o:r}}),od=$(function(e,r){return{$:"a1",n:e,o:r}}),au=$(function(e,r){return{$:"a2",n:e,o:r}}),rn=$(function(e,r){return{$:"a3",n:e,o:r}});S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function id(e){return e=="script"?"p":e}function cd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?t(nu,r.n,ld(e,r.o)):r});function ld(e,r){var n=Fi(r);return{$:r.$,a:n?s(Bi,n<3?ud:$d,pe(e),r.a):t(_a,e,r.a)}}var ud=$(function(e,r){return w(e(r.a),r.b)}),$d=$(function(e,r){return{ar:e(r.ar),c5:r.c5,cX:r.cX}});function _i(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,o=n.n,i=n.o;if(a==="a2"){o==="className"?Vc(r,o,i):r[o]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&o==="class"?Vc(c,o,i):c[o]=i}return r}function Vc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function qr(e,r){var n=e.$;if(n===5)return qr(e.k||(e.k=e.m()),r);if(n===0)return Ar.createTextNode(e.a);if(n===4){for(var a=e.k,o=e.j;a.$===4;)typeof o!="object"?o=[o,a.j]:o.push(a.j),a=a.k;var i={j:o,p:r},c=qr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Wo(c,r,e.d),c}var c=e.f?Ar.createElementNS(e.f,e.c):Ar.createElement(e.c);gt&&e.c=="a"&&c.addEventListener("click",gt(c)),Wo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)hi(c,qr(n===1?l[u]:l[u].b,r));return c}function Wo(e,r,n){for(var a in n){var o=n[a];a==="a1"?vd(e,o):a==="a0"?dd(e,r,o):a==="a3"?fd(e,o):a==="a4"?sd(e,o):(a!=="value"&&a!=="checked"||e[a]!==o)&&(e[a]=o)}}function vd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function fd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function sd(e,r){for(var n in r){var a=r[n],o=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(o,n,i):e.removeAttributeNS(o,n)}}function dd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var o in n){var i=n[o],c=a[o];if(!i){e.removeEventListener(o,c),a[o]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(o,c)}c=md(r,i),e.addEventListener(o,c,yi&&{passive:Fi(i)<2}),a[o]=c}}var yi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yi=!0}}))}catch{}function md(e,r){function n(a){var o=n.q,i=er(o.a,a);if(!!ir(i)){for(var c=Fi(o),l=i.a,u=c?c<3?l.a:l.ar:l,v=c==1?l.b:c==3&&l.c5,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cX)&&a.preventDefault(),e),m,g;m=f.j;){if(typeof m=="function")u=m(u);else for(var g=m.length;g--;)u=m[g](u);f=f.p}f(u,v)}}return n.q=r,n}function gd(e,r){return e.$==r.$&&Dn(e.a,r.a)}function tu(e,r){var n=[];return cr(e,r,n,0),n}function Ae(e,r,n,a){var o={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(o),o}function cr(e,r,n,a){if(e!==r){var o=e.$,i=r.$;if(o!==i)if(o===1&&i===2)r=xd(r),i=1;else{Ae(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];cr(e.k,r.k,f,0),f.length>0&&Ae(n,1,a,f);return;case 4:for(var m=e.j,g=r.j,d=!1,b=e.k;b.$===4;)d=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var h=r.k;h.$===4;)d=!0,typeof g!="object"?g=[g,h.j]:g.push(h.j),h=h.k;if(d&&m.length!==g.length){Ae(n,0,a,r);return}(d?!pd(m,g):m!==g)&&Ae(n,2,a,g),cr(b,h,n,a+1);return;case 0:e.a!==r.a&&Ae(n,3,a,r.a);return;case 1:Rc(e,r,n,a,bd);return;case 2:Rc(e,r,n,a,hd);return;case 3:if(e.h!==r.h){Ae(n,0,a,r);return}var y=wi(e.d,r.d);y&&Ae(n,4,a,y);var P=r.i(e.g,r.g);P&&Ae(n,5,a,P);return}}}function pd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Rc(e,r,n,a,o){if(e.c!==r.c||e.f!==r.f){Ae(n,0,a,r);return}var i=wi(e.d,r.d);i&&Ae(n,4,a,i),o(e,r,n,a)}function wi(e,r,n){var a;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=wi(e[o],r[o]||{},o);i&&(a=a||{},a[o]=i);continue}if(!(o in r)){a=a||{},a[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var c=e[o],l=r[o];c===l&&o!=="value"&&o!=="checked"||n==="a0"&&gd(c,l)||(a=a||{},a[o]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function bd(e,r,n,a){var o=e.e,i=r.e,c=o.length,l=i.length;c>l?Ae(n,6,a,{v:l,i:c-l}):c<l&&Ae(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=o[v];cr(f,i[v],n,++a),a+=f.b||0}}function hd(e,r,n,a){for(var o=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,m=0,g=0,d=a;m<v&&g<f;){var b=l[m],h=u[g],y=b.a,P=h.a,_=b.b,z=h.b,A=void 0,I=void 0;if(y===P){d++,cr(_,z,o,d),d+=_.b||0,m++,g++;continue}var H=l[m+1],G=u[g+1];if(H){var J=H.a,U=H.b;I=P===J}if(G){var R=G.a,Q=G.b;A=y===R}if(A&&I){d++,cr(_,Q,o,d),oa(i,o,y,z,g,c),d+=_.b||0,d++,ia(i,o,y,U,d),d+=U.b||0,m+=2,g+=2;continue}if(A){d++,oa(i,o,P,z,g,c),cr(_,Q,o,d),d+=_.b||0,m+=1,g+=2;continue}if(I){d++,ia(i,o,y,_,d),d+=_.b||0,d++,cr(U,z,o,d),d+=U.b||0,m+=2,g+=1;continue}if(H&&J===R){d++,ia(i,o,y,_,d),oa(i,o,P,z,g,c),d+=_.b||0,d++,cr(U,Q,o,d),d+=U.b||0,m+=2,g+=2;continue}break}for(;m<v;){d++;var b=l[m],_=b.b;ia(i,o,b.a,_,d),d+=_.b||0,m++}for(;g<f;){var ae=ae||[],h=u[g];oa(i,o,h.a,h.b,void 0,ae),g++}(o.length>0||c.length>0||ae)&&Ae(n,8,a,{w:o,x:c,y:ae})}var ou="_elmW6BL";function oa(e,r,n,a,o,i){var c=e[n];if(!c){c={c:0,z:a,r:o,s:void 0},i.push({r:o,A:c}),e[n]=c;return}if(c.c===1){i.push({r:o,A:c}),c.c=2;var l=[];cr(c.z,a,l,c.r),c.r=o,c.s.s={w:l,A:c};return}oa(e,r,n+ou,a,o,i)}function ia(e,r,n,a,o){var i=e[n];if(!i){var c=Ae(r,9,o,void 0);e[n]={c:1,z:a,r:o,s:c};return}if(i.c===0){i.c=2;var l=[];cr(a,i.z,l,o),Ae(r,9,o,{w:l,A:i});return}ia(e,r,n+ou,a,o)}function iu(e,r,n,a){ca(e,r,n,0,0,r.b,a)}function ca(e,r,n,a,o,i,c){for(var l=n[a],u=l.r;u===o;){var v=l.$;if(v===1)iu(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&ca(e,r,f,0,o,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var f=m.w;f.length>0&&ca(e,r,f,0,o,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var g=r.$;if(g===4){for(var d=r.k;d.$===4;)d=d.k;return ca(e,d,n,a,o+1,i,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,y=0;y<b.length;y++){o++;var P=g===1?b[y]:b[y].b,_=o+(P.b||0);if(o<=u&&u<=_&&(a=ca(h[y],P,n,a,o,_,c),!(l=n[a])||(u=l.r)>i))return a;o=_}return a}function cu(e,r,n,a){return n.length===0?e:(iu(e,r,n,a),pt(e,n))}function pt(e,r){for(var n=0;n<r.length;n++){var a=r[n],o=a.t,i=_d(o,a);o===e&&(e=i)}return e}function _d(e,r){switch(r.$){case 0:return yd(e,r.s,r.u);case 4:return Wo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return pt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,o=e.childNodes[a];a<n.length;a++)e.insertBefore(qr(n[a],r.u),o);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=pt(e,i.w),e;case 8:return wd(e,r);case 5:return r.s(e);default:qn(10)}}function yd(e,r,n){var a=e.parentNode,o=qr(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),a&&o!==e&&a.replaceChild(o,e),o}function wd(e,r){var n=r.s,a=Sd(n.y,r);e=pt(e,n.w);for(var o=n.x,i=0;i<o.length;i++){var c=o[i],l=c.A,u=l.c===2?l.s:qr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&hi(e,a),e}function Sd(e,r){if(!!e){for(var n=Ar.createDocumentFragment(),a=0;a<e.length;a++){var o=e[a],i=o.A;hi(n,i.c===2?i.s:qr(i.z,r.u))}return n}}function Si(e){if(e.nodeType===3)return Eo(e.textContent);if(e.nodeType!==1)return Eo("");for(var r=x,n=e.attributes,a=n.length;a--;){var o=n[a],i=o.name,c=o.value;r=wr(t(rn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=x,v=e.childNodes,a=v.length;a--;)u=wr(Si(v[a]),u);return s(mr,l,r,u)}function xd(e){for(var r=e.e,n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Pd=E(function(e,r,n,a){return bi(r,a,e.ft,e.ge,e.f6,function(o,i){var c=e.gi,l=a.node,u=Si(l);return lu(i,function(v){var f=c(v),m=tu(u,f);l=cu(l,u,m,o),u=f})})});E(function(e,r,n,a){return bi(r,a,e.ft,e.ge,e.f6,function(o,i){var c=e.c3&&e.c3(o),l=e.gi,u=Ar.title,v=Ar.body,f=Si(v);return lu(i,function(m){gt=c;var g=l(m),d=mr("body")(x)(g.eV),b=tu(f,d);v=cu(v,f,b,o),f=d,gt=0,u!==g.ga&&(Ar.title=u=g.ga)})})});var bt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function lu(e,r){r(e);var n=0;function a(){n=n===1?0:(bt(a),r(e),1)}return function(o,i){e=o,i?(r(e),n===2&&(n=1)):(n===0&&bt(a),n=2)}}$(function(e,r){return t(Vi,Ei,Hr(function(){r&&history.go(r),e()}))});$(function(e,r){return t(Vi,Ei,Hr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return t(Vi,Ei,Hr(function(){history.replaceState({},"",r),e()}))});var Cd={addEventListener:function(){},removeEventListener:function(){}},kd=typeof window!="undefined"?window:Cd;S(function(e,r,n){return Ql(Hr(function(a){function o(i){gi(n(i))}return e.addEventListener(r,o,yi&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});$(function(e,r){var n=er(e,r);return ir(n)?Z(n.a):F});function uu(e,r){return Hr(function(n){bt(function(){var a=document.getElementById(e);n(a?hn(r(a)):Ws(Um(e)))})})}function zd(e){return Hr(function(r){bt(function(){r(hn(e()))})})}$(function(e,r){return uu(r,function(n){return n[e](),za})});$(function(e,r){return zd(function(){return kd.scroll(e,r),za})});S(function(e,r,n){return uu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,za})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Ld=$(function(e,r){var n="g";e.fF&&(n+="m"),e.eW&&(n+="i");try{return Z(new RegExp(r,n))}catch{return F}});$(function(e,r){return r.match(e)!==null});var Td=S(function(e,r,n){for(var a=[],o=0,i=n,c=r.lastIndex,l=-1,u;o++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?Z(m):F}a.push(C(n$,u[0],u.index,o,p(f))),l=r.lastIndex}return r.lastIndex=c,p(a)});E(function(e,r,n,a){var o=0;function i(c){if(o++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Z(v):F}return n(C(n$,c,arguments[arguments.length-2],o,p(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,o=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;o.push(a.slice(i,l.index)),i=r.lastIndex}return o.push(a.slice(i)),r.lastIndex=c,p(o)});var Nc=0;function ha(e,r){for(;r.b;r=r.b)e(r.a)}function xi(e){for(var r=0;e.b;e=e.b)r++;return r}var Md=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Dd=_e(function(e,r,n,a,o){return{$:0,a:e,b:r,c:n,d:a,e:o}}),jd=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Ad=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Bd=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Fd=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Ed=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Wd=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Vd=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Rd=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Nd=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Gd=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Hd=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Id=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},$u=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},vu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Od=function(e){e.gl.disable(e.gl.CULL_FACE)},Jd=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Ud=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},qd=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Gc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Yd=[Gd,Hd,Id,$u,vu,Od,Jd,Ud,qd];function Hc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Xd(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function fu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Zd(e,r,n,a){for(var o=n.a.dv,i=[],c=0;c<o;c++)i.push(String.fromCharCode(97+c));function l(d,b,h,y,P){var _;if(o===1)for(_=0;_<b;_++)d[h++]=b===1?y[P]:y[P][_];else i.forEach(function(z){for(_=0;_<b;_++)d[h++]=b===1?y[z][P]:y[z][P][_]})}var u=fu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*o,m=new u.type(xi(n.b)*f);ha(function(d){l(m,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=f},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),g}function Qd(e,r){if(r.a.dE>0){var n=e.createBuffer(),a=Kd(r.c,r.a.dE);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dv*xi(r.b),indexBuffer:null,buffers:{}}}function Kd(e,r){var n=new Uint32Array(xi(e)*r),a=0,o;return ha(function(i){if(r===1)n[a++]=i;else for(o=0;o<r;o++)n[a++]=i[String.fromCharCode(97+o)]},e),n}function Ic(e,r){return e+"#"+r}var su=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),$u(n),vu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function o(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Ic(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Nc++,v||(v=Hc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=Nc++,f||(f=Hc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var m=Xd(a,v,f);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=em(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var g=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var d=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(b)}c=Ic(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),rm(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=Qd(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[d.name]===void 0&&(h.buffers[d.name]=Zd(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[d.name]);var y=fu(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var P=y.size*4,_=P*y.arraySize,z=0;z<y.arraySize;z++)a.enableVertexAttribArray(b+z),a.vertexAttribPointer(b+z,y.size,y.baseType,!1,_,P*z)}for(n.toggle=!n.toggle,ha(Ih(n),i.a),u=0;u<Gc.length;u++){var A=n[Gc[u]];A.toggle!==n.toggle&&A.enabled&&(Yd[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.ed,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ed,0,h.numIndices)}}return ha(o,e.g),r});function em(e,r,n,a){var o=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,b){var h=b.name,y=e.getUniformLocation(d,h);switch(b.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(y,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(y,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var P=c++;return function(_){e.activeTexture(e.TEXTURE0+P);var z=l.textures.get(_);z||(z=_.e2(e),l.textures.set(_,z)),e.bindTexture(e.TEXTURE_2D,z),i[h]!==_&&(e.uniform1i(y,P),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};default:return function(){}}}for(var v={},f=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var g=e.getActiveUniform(o,m);v[a[g.name]||g.name]=u(o,g)}return v}function rm(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var nm=S(function(e,r,n){return ad(r,{g:n,f:{},h:e},um,$m)}),am=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),tm=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),om=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),im=$(function(e,r){e.contextAttributes.antialias=!0}),cm=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),lm=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function um(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ha(function(o){return t(Hh,r,o)},e.h);var n=Ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(o){o(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Md(function(){return t(su,e,n)})):(n=Ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function $m(e,r){return r.f=e.f,su(r)}var vm=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/fm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function fm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Pi=new Float64Array(3),Oc=new Float64Array(3),Jc=new Float64Array(3),sm=S(function(e,r,n){return new Float64Array([e,r,n])}),dm=function(e){return e[0]},mm=function(e){return e[1]},gm=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var pm=function(e){return new Float64Array([e.gn,e.gr,e.dg])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function du(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(du);function mu(e,r,n){return n===void 0&&(n=new Float64Array(3)),ht(du(e,r,n),n)}$(mu);function gu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+a*a+o*o)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return n*n+a*a+o*o});function ht(e,r){r===void 0&&(r=new Float64Array(3));var n=1/gu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var bm=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),la=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(la);function Vo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Vo);$(function(e,r){var n,a=Pi,o=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=la(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],o[0]=(la(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],o[1]=(la(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],o[2]=(la(r,a)+e[14])/n,o});var hm=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var _m=function(e){return{gn:e[0],gr:e[1],dg:e[2],eL:e[3]}},ym=function(e){return new Float64Array([e.gn,e.gr,e.dg,e.eL])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/wm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function wm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+o*o+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+o*o+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Sm=new Float64Array(16),xm=new Float64Array(16),Pm=function(e){var r=new Float64Array(16);return r[0]=e.dR,r[1]=e.dV,r[2]=e.dZ,r[3]=e.d1,r[4]=e.dS,r[5]=e.dW,r[6]=e.d_,r[7]=e.d2,r[8]=e.dT,r[9]=e.dX,r[10]=e.d$,r[11]=e.d3,r[12]=e.dU,r[13]=e.dY,r[14]=e.d0,r[15]=e.d4,r},Cm=function(e){return{dR:e[0],dV:e[1],dZ:e[2],d1:e[3],dS:e[4],dW:e[5],d_:e[6],d2:e[7],dT:e[8],dX:e[9],d$:e[10],d3:e[11],dU:e[12],dY:e[13],d0:e[14],d4:e[15]}};function pu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2*o/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*o/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+o)/(i-o),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*o/(i-o),c[15]=0,c}tr(pu);E(function(e,r,n,a){var o=n*Math.tan(e*Math.PI/360),i=-o,c=i*r,l=o*r;return pu(c,l,i,o,n,a)});function bu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-o),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+o)/(i-o),c[15]=1,c}tr(bu);E(function(e,r,n,a){return bu(e,r,n,a,-1,1)});function hu(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],m=e[8],g=e[9],d=e[10],b=e[11],h=e[12],y=e[13],P=e[14],_=e[15],z=r[0],A=r[1],I=r[2],H=r[3],G=r[4],J=r[5],U=r[6],R=r[7],Q=r[8],ae=r[9],ge=r[10],ye=r[11],fe=r[12],Se=r[13],Je=r[14],Re=r[15];return n[0]=a*z+l*A+m*I+h*H,n[1]=o*z+u*A+g*I+y*H,n[2]=i*z+v*A+d*I+P*H,n[3]=c*z+f*A+b*I+_*H,n[4]=a*G+l*J+m*U+h*R,n[5]=o*G+u*J+g*U+y*R,n[6]=i*G+v*J+d*U+P*R,n[7]=c*G+f*J+b*U+_*R,n[8]=a*Q+l*ae+m*ge+h*ye,n[9]=o*Q+u*ae+g*ge+y*ye,n[10]=i*Q+v*ae+d*ge+P*ye,n[11]=c*Q+f*ae+b*ge+_*ye,n[12]=a*fe+l*Se+m*Je+h*Re,n[13]=o*fe+u*Se+g*Je+y*Re,n[14]=i*fe+v*Se+d*Je+P*Re,n[15]=c*fe+f*Se+b*Je+_*Re,n}$(hu);$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],m=e[10],g=e[12],d=e[13],b=e[14],h=r[0],y=r[1],P=r[2],_=r[4],z=r[5],A=r[6],I=r[8],H=r[9],G=r[10],J=r[12],U=r[13],R=r[14];return n[0]=a*h+c*y+v*P,n[1]=o*h+l*y+f*P,n[2]=i*h+u*y+m*P,n[3]=0,n[4]=a*_+c*z+v*A,n[5]=o*_+l*z+f*A,n[6]=i*_+u*z+m*A,n[7]=0,n[8]=a*I+c*H+v*G,n[9]=o*I+l*H+f*G,n[10]=i*I+u*H+m*G,n[11]=0,n[12]=a*J+c*U+v*R+g,n[13]=o*J+l*U+f*R+d,n[14]=i*J+u*U+m*R+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=ht(r,Pi);var a=r[0],o=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=o*a*l+i*u,n[2]=i*a*l-o*u,n[3]=0,n[4]=a*o*l-i*u,n[5]=o*o*l+c,n[6]=o*i*l+a*u,n[7]=0,n[8]=a*i*l+o*u,n[9]=o*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),o=1/gu(r),i=r[0]*o,c=r[1]*o,l=r[2]*o,u=Math.cos(e),v=1-u,f=Math.sin(e),m=i*f,g=c*f,d=l*f,b=i*c*v,h=i*l*v,y=c*l*v,P=i*i*v+u,_=b+d,z=h-g,A=b-d,I=c*c*v+u,H=y+m,G=h+g,J=y-m,U=l*l*v+u,R=n[0],Q=n[1],ae=n[2],ge=n[3],ye=n[4],fe=n[5],Se=n[6],Je=n[7],Re=n[8],Jr=n[9],Ur=n[10],vo=n[11],uf=n[12],$f=n[13],vf=n[14],ff=n[15];return a[0]=R*P+ye*_+Re*z,a[1]=Q*P+fe*_+Jr*z,a[2]=ae*P+Se*_+Ur*z,a[3]=ge*P+Je*_+vo*z,a[4]=R*A+ye*I+Re*H,a[5]=Q*A+fe*I+Jr*H,a[6]=ae*A+Se*I+Ur*H,a[7]=ge*A+Je*I+vo*H,a[8]=R*G+ye*J+Re*U,a[9]=Q*G+fe*J+Jr*U,a[10]=ae*G+Se*J+Ur*U,a[11]=ge*G+Je*J+vo*U,a[12]=uf,a[13]=$f,a[14]=vf,a[15]=ff,a});function km(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(km);E(function(e,r,n,a){var o=new Float64Array(16);return o[0]=a[0]*e,o[1]=a[1]*e,o[2]=a[2]*e,o[3]=a[3]*e,o[4]=a[4]*r,o[5]=a[5]*r,o[6]=a[6]*r,o[7]=a[7]*r,o[8]=a[8]*n,o[9]=a[9]*n,o[10]=a[10]*n,o[11]=a[11]*n,o[12]=a[12],o[13]=a[13],o[14]=a[14],o[15]=a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function zm(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(zm);E(function(e,r,n,a){var o=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],m=a[6],g=a[7],d=a[8],b=a[9],h=a[10],y=a[11];return o[0]=i,o[1]=c,o[2]=l,o[3]=u,o[4]=v,o[5]=f,o[6]=m,o[7]=g,o[8]=d,o[9]=b,o[10]=h,o[11]=y,o[12]=i*e+v*r+d*n+a[12],o[13]=c*e+f*r+b*n+a[13],o[14]=l*e+m*r+h*n+a[14],o[15]=u*e+g*r+y*n+a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],m=r[5],g=r[6],d=r[7],b=r[8],h=r[9],y=r[10],P=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=g,n[7]=d,n[8]=b,n[9]=h,n[10]=y,n[11]=P,n[12]=c*a+f*o+b*i+r[12],n[13]=l*a+m*o+h*i+r[13],n[14]=u*a+g*o+y*i+r[14],n[15]=v*a+d*o+P*i+r[15],n});S(function(e,r,n){var a=mu(e,r,Pi),o=ht(Vo(n,a,Oc),Oc),i=ht(Vo(a,o,Jc),Jc),c=Sm,l=xm;return c[0]=o[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=o[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=o[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,hu(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var L=Mf,Ja=xf,_u=S(function(e,r,n){var a=n.c,o=n.d,i=$(function(c,l){if(c.$){var v=c.a;return s(Ja,e,l,v)}else{var u=c.a;return s(Ja,i,l,u)}});return s(Ja,i,s(Ja,e,r,o),a)}),Ci=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,o=n.c,i=n.d,c=n.e,l=e,u=s(e,a,o,s(Ci,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Uc=function(e){return s(Ci,S(function(r,n,a){return t(L,w(r,n),a)}),x,e)},yu=1,Lm=2,wu=0,Be=function(e){return{$:1,a:e}},ki=$(function(e,r){return{$:3,a:e,b:r}}),qc=$(function(e,r){return{$:0,a:e,b:r}}),Su=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Tm=function(e){return{$:2,a:e}},Z=function(e){return{$:0,a:e}},F={$:1},Mm=cs,xu=Ds,Pe=Xl,an=$(function(e,r){return t(ts,e,Vt(r))}),zi=$(function(e,r){return p(t(as,e,r))}),Pu=function(e){return t(an,`
    `,t(zi,`
`,e))},je=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,o=n.b,i=e,c=t(e,a,r),l=o;e=i,r=c,n=l;continue e}else return r}),sr=function(e){return s(je,$(function(r,n){return n+1}),0,e)},Gt=Df,Dm=S(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,o=r-1,i=t(L,r,n);e=a,r=o,n=i;continue e}else return n}),sn=$(function(e,r){return s(Dm,e,r,x)}),Li=$(function(e,r){return s(Gt,e,t(sn,0,sr(r)-1),r)}),hr=ds,Cu=function(e){var r=hr(e);return 97<=r&&r<=122},ku=function(e){var r=hr(e);return r<=90&&65<=r},jm=function(e){return Cu(e)||ku(e)},Am=function(e){var r=hr(e);return r<=57&&48<=r},Bm=function(e){return Cu(e)||ku(e)||Am(e)},ve=function(e){return s(je,L,x,e)},Yn=Kf,Fm=$(function(e,r){return`

(`+(Pe(e+1)+(") "+Pu(Em(r))))}),Em=function(e){return t(Wm,e,x)},Wm=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=Yn(n);if(h.$===1)return!1;var y=h.a,P=y.a,_=y.b;return jm(P)&&t(Mm,Bm,_)}(),o=a?"."+n:"['"+(n+"']"),u=c,v=t(L,o,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Pe(i)+"]"),u=c,v=t(L,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+t(an,"",ve(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(Pe(sr(f))+" ways:"));return t(an,`

`,t(L,b,t(Li,Fm,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(an,"",ve(r)):"!"}();default:var g=e.a,d=e.b,b=function(){return r.b?"Problem with the value at json"+(t(an,"",ve(r))+`:

    `):`Problem with the given value:

`}();return b+(Pu(t(xu,4,d))+(`

`+g))}}),me=32,Br=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dn=mf,Ti=Jf,Mi=$(function(e,r){return jc(r)/jc(e)}),Vm=If,ur=Ti(t(Mi,2,me)),Di=C(Br,0,ur,dn,dn),zu=bf,mn=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});var Rm=$(function(e,r){return r(e)}),Nm=Uf,Sr=pf,Xe=$(function(e,r){return O(e,r)>0?e:r}),on=function(e){return{$:0,a:e}},ji=hf,Gm=$(function(e,r){e:for(;;){var n=t(ji,me,e),a=n.a,o=n.b,i=t(L,on(a),r);if(o.b){var c=o,l=i;e=c,r=l;continue e}else return ve(i)}}),Hm=function(e){var r=e.a;return r},Im=$(function(e,r){e:for(;;){var n=Ti(r/me);if(n===1)return t(ji,me,e).a;var a=t(Gm,e,x),o=n;e=a,r=o;continue e}}),Ai=$(function(e,r){if(r.o){var n=r.o*me,a=Nm(t(Mi,me,n-1)),o=e?ve(r.C):r.C,i=t(Im,o,r.o);return C(Br,Sr(r.s)+n,t(Xe,5,a*ur),i,r.s)}else return C(Br,Sr(r.s),ur,dn,r.s)}),Om=_e(function(e,r,n,a,o){e:for(;;){if(r<0)return t(Ai,!1,{C:a,o:n/me|0,s:o});var i=mn(s(zu,me,r,e)),c=e,l=r-me,u=n,v=t(L,i,a),f=o;e=c,r=l,n=u,a=v,o=f;continue e}}),Lu=$(function(e,r){if(e<=0)return Di;var n=e%me,a=s(zu,n,e-n,r),o=e-n-me;return k(Om,r,o,e,x,a)}),ir=function(e){return!e.$},B=Ps,ee=bs,j=Ss,ne=hs,Jm=function(e){return{$:2,a:e}},Ht=$(function(e,r){return e}),Tu=$(function(e,r){return{e_:r.e_,e$:e,bf:r.bf,dt:r.dt,dK:r.dK,ek:r.ek,a4:r.a4,gj:r.gj}}),_a=ks,Bi=zs,pe=gs,Fi=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},_r=function(e){return e},Um=_r,Yc=tr(function(e,r,n,a,o,i){return{dA:i,dC:r,eh:a,em:n,eq:e,er:o}}),qm=ls,tn=es,jn=os,La=$(function(e,r){return e<1?r:s(jn,e,tn(r),r)}),It=$s,Ot=function(e){return e===""},Jt=$(function(e,r){return e<1?"":s(jn,0,e,r)}),Mu=vs,Xc=_e(function(e,r,n,a,o){if(Ot(o)||t(qm,"@",o))return F;var i=t(It,":",o);if(i.b){if(i.b.b)return F;var c=i.a,l=Mu(t(La,c+1,o));if(l.$===1)return F;var u=l;return Z(Ge(Yc,e,t(Jt,c,o),u,r,n,a))}else return Z(Ge(Yc,e,o,F,r,n,a))}),Zc=E(function(e,r,n,a){if(Ot(a))return F;var o=t(It,"/",a);if(o.b){var i=o.a;return k(Xc,e,t(La,i,a),r,n,t(Jt,i,a))}else return k(Xc,e,"/",r,n,a)}),Qc=S(function(e,r,n){if(Ot(n))return F;var a=t(It,"?",n);if(a.b){var o=a.a;return C(Zc,e,Z(t(La,o+1,n)),r,t(Jt,o,n))}else return C(Zc,e,F,r,n)});$(function(e,r){if(Ot(r))return F;var n=t(It,"#",r);if(n.b){var a=n.a;return s(Qc,e,Z(t(La,a+1,r)),t(Jt,a,r))}else return s(Qc,e,F,r)});var Ym=us,Ei=function(e){},Ta=hn,Xm=Ta(0),Du=E(function(e,r,n,a){if(a.b){var o=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,m=v.b,g=n>500?s(je,e,r,ve(m)):C(Du,e,r,n+1,m);return t(e,o,t(e,c,t(e,u,t(e,f,g))))}else return t(e,o,t(e,c,t(e,u,r)))}else return t(e,o,t(e,c,r))}else return t(e,o,r)}else return r}),Ir=S(function(e,r,n){return C(Du,e,r,0,n)}),X=$(function(e,r){return s(Ir,$(function(n,a){return t(L,e(n),a)}),x,r)}),_t=Fo,Wi=$(function(e,r){return t(_t,function(n){return Ta(e(n))},r)}),Zm=S(function(e,r,n){return t(_t,function(a){return t(_t,function(o){return Ta(t(e,a,o))},n)},r)}),Qm=function(e){return s(Ir,Zm(L),Ta(x),e)},Km=Js,eg=$(function(e,r){var n=r;return Ql(t(_t,Km(e),n))}),rg=S(function(e,r,n){return t(Wi,function(a){return 0},Qm(t(X,eg(e),r)))}),ng=S(function(e,r,n){return Ta(0)}),ag=$(function(e,r){var n=r;return t(Wi,e,n)});br.Task=Is(Xm,rg,ng,ag);var tg=eu("Task"),Vi=$(function(e,r){return tg(t(Wi,e,r))}),og=Pd,ig=Zf,yt={$:1},ju=function(e){return{$:2,a:e}},Ut={$:0},nr=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),Xn=function(e){var r=e.b.q;return r.a},cg=function(e){var r=e.a,n=e.b.W,a=e.b.q,o=e.b.ae;if(o.b){var i=o.a,c=o.b;return Z(t(nr,r,{q:i,ae:c,W:t(L,a,n)}))}else return F},Au=function(e){var r=e.b;return t(nr,Ut,r)},We=$(function(e,r){if(r.$)return e;var n=r.a;return n}),lg=S(function(e,r,n){var a=n.a,o=n.b;switch(a.$){case 1:return r.ek.ds?Au(n):n;case 2:var i=a.a.c6;return(O(i+r.dt,Xn(n).e_)>0?t(te,cg,We(t(nr,yt,o))):_r)(t(nr,ju({c6:i+r.dt}),o));default:var c=o.q,l=c.a,u=c.b,v=t(Tu,l.e$,D(r,{e_:l.e_+r.dt})),f=t(e,v,u);return t(nr,Ut,{q:w(v,f),ae:x,W:t(L,o.q,o.W)})}}),Bu=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,o=n;e=a,r=o;continue e}else return r}}),ug=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,o=r.b,i=e-1,c=o,l=t(L,a,n);e=i,r=c,n=l;continue e}else return n}}),$g=$(function(e,r){return ve(s(ug,e,r,x))}),Fu=S(function(e,r,n){if(r<=0)return x;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var o=a.b,_=o.a,i=o.b,c=i.a;return p([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return p([_,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,g=m.b,c=g.a,d=g.b,f=d.a,b=d.b,h=b.a,y=b.b;return e>1e3?t(L,_,t(L,c,t(L,f,t(L,h,t($g,r-4,y))))):t(L,_,t(L,c,t(L,f,t(L,h,s(Fu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var P=a.b,_=P.a;return p([_])}}),Eu=$(function(e,r){return s(Fu,0,e,r)}),vg=$(function(e,r){var n=r.b.W,a=r.b.q,o=r.b.ae,i=le(ve(n),le(p([a]),o)),c=t(Eu,e,i),l=t(Bu,e,i);if(l.b){var u=l.a,v=l.b;return t(nr,yt,{q:u,ae:v,W:ve(c)})}else{var f=ve(c);if(f.b){var m=f.a,g=f.b;return t(nr,yt,{q:m,ae:x,W:g})}else return r}}),fg=function(e){var r=e.b;return t(nr,yt,r)},sg=function(e){var r=e.b;return t(nr,ju({c6:Xn(e).e_}),r)},dg=$(function(e,r){switch(e.$){case 1:return fg(r);case 2:return Au(r);case 3:return sg(r);default:var n=e.a;return t(vg,n,r)}}),Wu=$(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),mg=$(function(e,r){return D(r,{aB:e(r.aB)})}),Vu=function(e){return{$:3,a:e}},Ru=function(e){return{$:2,a:e}},Nu=$(function(e,r){return{$:0,a:e,b:r}}),gg=$(function(e,r){return{$:1,a:e,b:r}}),re=$(function(e,r){if(r.$)return F;var n=r.a;return Z(e(n))}),K=function(e){return e<0?-e:e},Ri=fs,pg=S(function(e,r,n){return t(We,0/0,Ri(t(e,r,n)))}),Gu=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var o=e,i=a;e=o,r=i;continue e}else return!1}),bg=Lf,hg=ns,Hu=function(e){return s(hg,L,x,e)},_g=$(function(e,r){var n=t(Gu,function(a){return a!=="0"&&a!=="."},Hu(r));return le(e&&n?"-":"",r)}),xe=Xl,Ro=Qf,Iu=ms,Ou=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Yn(n);if(a.$===1)return"01";var o=a.a;return t(Ro,"0",Ou(o))}else{var i=hr(r);return i>=48&&i<57?t(Ro,Iu(i+1),n):"0"}},No=Of,yg=Xf,qt=function(e){return t(Ro,e,"")},Ju=S(function(e,r,n){return e<=0?n:s(Ju,e>>1,le(r,r),e&1?le(n,r):n)}),ya=$(function(e,r){return s(Ju,e,r,"")}),Go=S(function(e,r,n){return le(n,t(ya,e-tn(n),qt(r)))}),Ho=rs,Uu=function(e){var r=t(zi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a;return w(n,o)}else{var n=r.a;return w(n,"0")}else return w("0","0")},wg=function(e){var r=t(zi,"e",xe(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=t(We,0,Mu(t(Ym,"+",o)?t(La,1,o):o)),c=Uu(n),l=c.a,u=c.b,v=le(l,u),f=i<0?t(We,"0",t(re,function(m){var g=m.a,d=m.b;return g+("."+d)},t(re,Wu(qt),Yn(le(t(ya,K(i),"0"),v))))):s(Go,i+1,"0",v);return le(e<0?"-":"",f)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Sg=S(function(e,r,n){if(No(n)||yg(n))return xe(n);var a=n<0,o=Uu(wg(K(n))),i=o.a,c=o.b,l=tn(i)+r,u=le(t(ya,-l+1,"0"),s(Go,l,"0",le(i,c))),v=tn(u),f=t(Xe,1,l),m=t(e,a,s(jn,f,v,u)),g=s(jn,0,f,u),d=m?Ho(t(We,"1",t(re,Ou,Yn(Ho(g))))):g,b=tn(d),h=d==="0"?d:r<=0?le(d,t(ya,K(r),"0")):O(r,tn(c))<0?s(jn,0,b-r,d)+("."+s(jn,b-r,b,d)):le(i+".",s(Go,r,"0",c));return t(_g,a,h)}),qu=Sg($(function(e,r){var n=Yn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,o=a.a;return function(i){return i>53&&e||i>=53&&!e}(hr(o))})),xg=pg(qu),Pg=S(function(e,r,n){var a=t(Mi,10,K(r-e)),o=a<0?3:a<1?2:a<2?1:0;return t(xg,o,n)}),Ni=Tf,Zn=$(function(e,r){e:for(;;){if(r.$===-2)return F;var n=r.b,a=r.c,o=r.d,i=r.e,c=t(Ni,e,n);switch(c){case 0:var l=e,u=o;e=l,r=u;continue e;case 1:return Z(a);default:var l=e,u=i;e=l,r=u;continue e}}}),Y=_e(function(e,r,n,a,o){return{$:-1,a:e,b:r,c:n,d:a,e:o}}),xr={$:-2},Gn=_e(function(e,r,n,a,o){if(o.$===-1&&!o.a){o.a;var i=o.b,c=o.c,l=o.d,u=o.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,m=a.d,g=a.e;return k(Y,0,r,n,k(Y,1,v,f,m,g),k(Y,1,i,c,l,u))}else return k(Y,e,i,c,k(Y,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,d=a.d;d.a;var b=d.b,h=d.c,y=d.d,P=d.e,g=a.e;return k(Y,0,v,f,k(Y,1,b,h,y,P),k(Y,1,r,n,g,o))}else return k(Y,e,r,n,a,o)}),Io=S(function(e,r,n){if(n.$===-2)return k(Y,0,e,r,xr,xr);var a=n.a,o=n.b,i=n.c,c=n.d,l=n.e,u=t(Ni,e,o);switch(u){case 0:return k(Gn,a,o,i,s(Io,e,r,c),l);case 1:return k(Y,a,o,r,c,l);default:return k(Gn,a,o,i,c,s(Io,e,r,l))}}),cn=S(function(e,r,n){var a=s(Io,e,r,n);if(a.$===-1&&!a.a){a.a;var o=a.b,i=a.c,c=a.d,l=a.e;return k(Y,1,o,i,c,l)}else{var u=a;return u}}),Cg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Yu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d,u=o.e,v=e.e;v.a;var f=v.b,m=v.c,g=v.d;g.a;var d=g.b,b=g.c,h=g.d,y=g.e,P=v.e;return k(Y,0,d,b,k(Y,1,n,a,k(Y,0,i,c,l,u),h),k(Y,1,f,m,y,P))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,z=e.e;z.a;var f=z.b,m=z.c,g=z.d,P=z.e;return k(Y,1,n,a,k(Y,0,i,c,l,u),k(Y,0,f,m,g,P))}else return e},Kc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d;l.a;var u=l.b,v=l.c,f=l.d,m=l.e,g=o.e,d=e.e;d.a;var b=d.b,h=d.c,y=d.d,P=d.e;return k(Y,0,i,c,k(Y,1,u,v,f,m),k(Y,1,n,a,g,k(Y,0,b,h,y,P)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,z=_.d,g=_.e,A=e.e;A.a;var b=A.b,h=A.c,y=A.d,P=A.e;return k(Y,1,n,a,k(Y,0,i,c,z,g),k(Y,0,b,h,y,P))}else return e},kg=Et(function(e,r,n,a,o,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return k(Y,n,l,u,v,k(Y,0,a,o,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Kc(r)}else break e;else return c.a,c.d,Kc(r);else break e;return r}}),it=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,o=e.d,i=o.a,c=o.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,k(Y,r,n,a,it(o),l);var u=Yu(e);if(u.$===-1){var v=u.a,f=u.b,m=u.c,g=u.d,d=u.e;return k(Gn,v,f,m,it(g),d)}else return xr}else return k(Y,r,n,a,it(o),l)}else return xr},sa=$(function(e,r){if(r.$===-2)return xr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,k(Y,n,a,o,t(sa,e,i),c);var u=Yu(r);if(u.$===-1){var v=u.a,f=u.b,m=u.c,g=u.d,d=u.e;return k(Gn,v,f,m,t(sa,e,g),d)}else return xr}else return k(Y,n,a,o,t(sa,e,i),c);else return t(zg,e,mi(kg,e,r,n,a,o,i,c))}),zg=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(he(e,a)){var l=Cg(c);if(l.$===-1){var u=l.b,v=l.c;return k(Gn,n,u,v,i,it(c))}else return xr}else return k(Gn,n,a,o,i,t(sa,e,c))}else return xr}),Lg=$(function(e,r){var n=t(sa,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,o=n.c,i=n.d,c=n.e;return k(Y,1,a,o,i,c)}else{var l=n;return l}}),Ua=S(function(e,r,n){var a=r(t(Zn,e,n));if(a.$)return t(Lg,e,n);var o=a.a;return s(cn,e,o,n)}),Tg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(Ua,r,re(function(a){if(a.$===1){var o=a.a,i=o.a,c=o.b;return t(gg,w(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(Ua,r,re(function(a){if(a.$)return a;var o=a.a,i=o.a,c=o.b;return t(Nu,w(i,c),s(Pg,i,c,n))}));case 3:var r=e.a,n=e.b;return t(Ua,r,re(function(a){return a.$===3?Vu(n):a}));default:var r=e.a,n=e.b;return t(Ua,r,re(function(a){return a.$===2?Ru(n):a}))}},Mg=function(e){return mg(Tg(e))},Dg=$(function(e,r){return t(X,Mg(e),r)}),jg=$(function(e,r){return D(r,{e$:t(Dg,e,r.e$)})}),Ag=$(function(e,r){var n=r.a,a=r.b;return t(nr,n,D(a,{q:t(Wu,jg(e),a.q)}))}),Bg=$(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),Fg=S(function(e,r,n){var a=n.a,o=n.b,i=o.q;return t(nr,a,D(o,{q:t(Bg,t(e,i.a,r),i)}))}),Eg=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return D(a,{aT:!a.aT});case 2:var o=n.a;return D(a,{J:s(lg,e,o,a.J)});case 3:var i=n.a;return D(a,{J:t(Ag,i,a.J)});case 4:var c=n.a;return D(a,{J:s(Fg,r,c,a.J)});default:var l=n.a;return D(a,{J:t(dg,l,a.J)})}}),Wg=$(function(e,r){return t(nr,Ut,{q:w(e,r(e)),ae:x,W:x})}),Vg=Us,el=Vg(x),$r=ys,wa=_s,Rg=Qs("tick",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return pe({e_:c,bf:i,dt:o,dK:a,ek:n,a4:r,gj:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return pe({eN:m,e0:f,ds:v,e9:u,fy:l,fR:c,fW:i,ey:o,eG:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",$r(wa)))},t(j,"left",ee))},t(j,"pressedKeys",$r(wa)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return pe({ds:v,fv:u,fE:l,fX:c,fY:i,eG:o,gn:a,gr:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return pe({fn:n,gl:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return pe({e3:r,e4:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne))))),Ng=function(e){return{$:4,a:e}},Gg={$:0},Hg=Nt,or=$(function(e,r){return t(au,e,Hg(r))}),V=or("className"),Ig=function(e){var r=e.b.q;return r.b},W=mr("div"),wt=or("id"),Og=td,St=Og,Jg=od,be=Jg,Ug={$:1},qg=function(e){return{$:3,a:e}},Yg=function(e){return{$:5,a:e}},rl=mr("a"),Ma=mr("button"),Oo=rn("d"),Xu=ru("http://www.w3.org/2000/svg"),Jo=Xu("path"),Uo=Xu("svg"),qo=rn("viewBox"),da=function(e){return t(Uo,p([qo("0 0 100 100"),t(be,"width","100%"),t(be,"height","100%")]),p([t(Jo,p([Oo(e)]),x)]))},nl=function(e){return t(or,"href",cd(e))},Bn={e8:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",fh:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fm:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fO:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fP:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ek:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fT:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",f2:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",gd:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",gf:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gv:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Xg=function(e){return{$:0,a:e}},Zu=nu,Qu=$(function(e,r){return t(Zu,e,Xg(r))}),Da=function(e){return t(Qu,"click",pe(e))},al=or("target"),Zg=or("title"),Yo=$(function(e,r){if(r.$===-2)return xr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;return k(Y,n,a,t(e,a,o),t(Yo,e,i),t(Yo,e,c))}),Qg=Eo,ke=Qg,Kg=function(e){return s(Ci,S(function(r,n,a){return t(L,n,a)}),x,e)},ep=$(function(e,r){return{$:3,a:e,b:r}}),rp=$(function(e,r){return{$:2,a:e,b:r}}),np=$(function(e,r){return{$:0,a:e,b:r}}),ap=$(function(e,r){return{$:1,a:e,b:r}}),kr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ku=C(kr,0/255,0/255,0/255,1),e$=Nt,tp=$(function(e,r){return t(au,e,e$(r))}),op=tp("checked"),Qe=qf,ip=S(function(e,r,n){return le(t(ya,e-tn(n),qt(r)),n)}),xt=Ff,r$=function(e){var r=function(n){return n<10?Pe(n):qt(Iu(87+n))};return e<16?r(e):le(r$(e/16|0),r(t(xt,16,e)))},cp=t(te,r$,t(ip,2,"0")),Gi=function(e){var r=e.a,n=e.b,a=e.c,o=e.d;return{aP:o,ch:a,cn:n,cZ:r}},lp=function(e){var r=Gi(e),n=r.cZ,a=r.cn,o=r.ch;return t(an,"",t(L,"#",t(X,t(te,Qe,cp),p([n*255,a*255,o*255]))))},Xo=or("htmlFor"),Fr=$(function(e,r){if(r.$)return F;var n=r.a;return e(n)}),Pt=$(function(e,r){if(r.$){var a=r.a;return Be(a)}else{var n=r.a;return e(n)}}),up=S(function(e,r,n){var a=e(r);if(a.$)return n;var o=a.a;return t(L,o,n)}),gn=$(function(e,r){return s(Ir,up(e),x,r)}),n$=E(function(e,r,n,a){return{fs:r,fC:e,fJ:n,f5:a}}),$p=Td,vp=ss,fp=$(function(e,r){if(r.$)return Be(e);var n=r.a;return ue(n)}),sp=Ld,dp=function(e){return t(sp,{eW:!1,fF:!1},e)},Qn=function(e){if(e.b){var r=e.a;return e.b,Z(r)}else return F},mp=$(function(e,r){if(r.$){var a=r.a;return Be(a)}else{var n=r.a;return ue(e(n))}}),gp=function(e){return{$:2,a:e}},pp=function(e){return{$:0,a:e}},bp=function(e){return{$:1,a:e}},mo=$(function(e,r){return hr(r)-hr(e)}),go=S(function(e,r,n){var a=hr(n);return O(hr(e),a)<1&&O(a,hr(r))<1}),hp=$(function(e,r){var n=function(o){return O(o,e)<0?ue(o):Be(bp(r))},a=s(go,"0","9",r)?ue(t(mo,"0",r)):s(go,"a","z",r)?ue(10+t(mo,"a",r)):s(go,"A","Z",r)?ue(10+t(mo,"A",r)):Be(pp(r));return t(Pt,n,a)}),a$=$(function(e,r){var n=Yn(r);if(n.$===1)return ue(0);var a=n.a,o=a.a,i=a.b;return t(Pt,function(c){return t(Pt,function(l){return ue(c+l*e)},t(a$,e,i))},t(hp,e,o))}),_p=$(function(e,r){return 2<=e&&e<=36?t(a$,e,Ho(r)):Be(gp(e))}),yp=_p(16),wp=S(function(e,r,n){return C(kr,e,r,n,1)}),Sp=E(function(e,r,n,a){return C(kr,e,r,n,a)}),Yr=Bf,xp=$(function(e,r){var n=t(Yr,10,e);return Qe(r*n)/n}),Pp=is,Cp=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Hu(n);if(a.b&&!a.b.b){var o=a.a;return vp(p([o,o]))}else return n};return t(te,Pp,t(te,function(n){return t(re,function(a){return s($p,1,a,n)},dp(e))},t(te,Fr(Qn),t(te,re(function(n){return n.f5}),t(te,re(gn(_r)),t(te,fp("Parsing hex regex failed"),Pt(function(n){var a=t(X,t(te,r,t(te,yp,mp(Vm))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var o=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return ue(C(Sp,o/255,c/255,u/255,t(xp,2,f/255)))}else break e;else{var o=a.a.a,m=a.b,c=m.a.a,g=m.b,u=g.a.a;return ue(s(wp,o/255,c/255,u/255))}else break e;return Be("Parsing ints from hex failed")})))))))}(),Ct=mr("input"),Zo=mr("label"),Qo=or("name"),t$=$(function(e,r){return s(Ir,j,r,e)}),kp=t(t$,p(["target","checked"]),ee),zp=function(e){return t(Qu,"change",t(_a,e,kp))},Lp=function(e){return w(e,!0)},Tp=function(e){return{$:1,a:e}},Mp=$(function(e,r){return t(Zu,e,Tp(r))}),Dp=t(t$,p(["target","value"]),wa),Yt=function(e){return t(Mp,"input",t(_a,Lp,t(_a,e,Dp)))},o$=or("max"),i$=or("min"),c$=function(e){return t(or,"step",e)},kt=or("type"),Xt=or("value"),tl=function(e){var r=e.cs,n=e.db,a=e.cI,o=e.cE,i=e.c4,c=e.cM;return t(W,x,p([t(Zo,p([Xo(r)]),p([t(W,p([V("relative w-full")]),p([t(W,p([V("inline-block")]),p([ke(r)])),t(W,p([V("inline-block float-right")]),p([ke(xe(n))]))]))])),t(Ct,p([kt("range"),t(be,"width","100%"),wt(r),Qo(r),i$(xe(a)),o$(xe(o)),Xt(xe(n)),c$(xe(i)),Yt(t(te,Ri,t(te,We(42),c)))]),x)]))},l$=$(function(e,r){if(r.$)return e;var n=r.a;return n}),jp=$(function(e,r){switch(r.$){case 3:var c=r.a;return t(W,x,p([t(W,p([V("mb-2")]),p([t(Zo,p([Xo(e)]),p([ke(e)]))])),t(Ct,p([kt("checkbox"),wt(e),Qo(e),zp(ep(e)),op(c)]),x)]));case 0:var n=r.a,o=n.a,i=n.b,c=r.b;return tl({cs:e,cE:i,cI:o,cM:np(e),c4:.01*(i-o),db:c});case 1:var a=r.a,o=a.a,i=a.b,c=r.b;return tl({cs:e,cE:i,cI:o,cM:t(te,Qe,ap(e)),c4:1,db:c});default:var c=r.a;return t(W,x,p([t(W,p([t(be,"margin-bottom","6px")]),p([t(Zo,p([Xo(e)]),p([ke(e)]))])),t(Ct,p([kt("color"),t(be,"width","100%"),t(be,"height","26px"),t(be,"padding","0px"),wt(e),Qo(e),Yt(function(l){return t(rp,e,t(l$,Ku,Cp(l)))}),Xt(lp(c))]),x)]))}}),Ap=function(e){return t(W,p([V("p-4 border-y-[0.5px] border-white20")]),p([t(W,p([V("text-lg pb-2")]),p([ke(e.fG)])),t(W,p([V("pl-2 pr-2")]),Kg(t(Yo,jp,e.aB)))]))},Bp=function(e){return t(W,p([V("text-xs text-white60")]),t(X,Ap,e))},Fp=function(e){return t(W,p([V("absolute left-[104px] bottom-2 text-sm text-white40")]),p([ke("clock: "+t(qu,3,Xn(e).e_))]))},Ep=function(e){e.a;var r=e.b.W;return t(re,function(n){return Qe(60/(Xn(e).e_-n))},t(re,t(te,Hm,function(n){return n.e_}),Qn(t(Bu,59,r))))},Wp=function(e){return t(W,p([V("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Ep(e);if(r.$===1)return p([ke("... Fps")]);var n=r.a;return p([ke(Pe(n)+" Fps")])}())},Vp=function(e){return{$:0,a:e}},Rp=function(e){var r=e.b.W;return sr(r)},Np=function(e){var r=e.b.W;e.b.q;var n=e.b.ae;return sr(r)+1+sr(n)},Gp=function(e){return t(Ct,p([V("absolute w-full"),kt("range"),i$(Pe(0)),o$(Pe(Np(e)-1)),Xt(Pe(Rp(e))),c$(Pe(1)),Yt(t(te,Ri,t(te,We(42),t(te,Qe,Vp))))]),x)},ol={$:1},Hp={$:3},Ip={$:2},Hi=function(e){return!e.b},il=$(function(e,r){return t(Ma,p([V("px-2 bg-black40"),V(r),Da(e)]),p([ke("REC")]))}),cl=$(function(e,r){return t(Ma,p([V("absolute left-[60px] mx-1 px-1 bg-black40"),Da(r)]),p([t(W,p([V("w-4 h-6 fill-white80")]),p([da(e)]))]))}),Op=function(e){var r=e.a,n=e.b.ae;return t(W,p([V("py-1")]),p([function(){switch(r.$){case 0:return t(il,ol,"text-red-500 font-bold");case 1:return t(il,Ip,"text-white80 font-bold");default:return t(W,x,x)}}(),function(){switch(r.$){case 0:return t(W,x,x);case 1:return Hi(n)?t(W,x,x):t(cl,Bn.fP,Hp);default:return t(cl,Bn.fO,ol)}}()]))},Jp=function(e){return t(W,p([V("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),p([Gp(e),Op(e),Wp(e),Fp(e)]))},Up=function(e){var r=e.a;return he(r,Ut)},qp=$(function(e,r){var n=Up(r.J)?t(W,x,x):t(W,p([V("absolute pointer-events-none w-8 h-8"),t(be,"left",xe(e.ek.gn+.5*e.a4.gl)+"px"),t(be,"top",xe(-e.ek.gr+.5*e.a4.fn)+"px")]),p([t(W,p([V(e.ek.fv?"fill-black80":"fill-white40")]),p([da(Bn.ek)]))]));return t(W,x,p([n]))}),Yp=$(function(e,r){var n=t(Ma,p([V(r.aT?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Da(Ug),Zg("Distraction Free Mode")]),p([da(Bn.gv)])),a=t(W,p([V("absolute w-8 bottom-12")]),p([t(rl,p([V("fill-twitterBlue40 hover:fill-twitterBlue"),nl("https://twitter.com/AzizErkalSelman"),al("_blank")]),p([da(Bn.gd)]))])),o=t(W,p([V("absolute w-8 bottom-2")]),p([t(rl,p([V("fill-githubCat40 hover:fill-githubCat"),nl("https://github.com/erkal/elm-3d-playground-exploration"),al("_blank")]),p([da(Bn.fh)]))]));return r.aT?t(W,p([V("fixed w-10 h-10 p-1")]),p([n])):t(W,x,p([t(W,p([V("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),p([n,a,o])),t(W,p([V("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),t(be,"height",xe(e.a4.fn-80)+"px")]),p([t(St,qg,Bp(Xn(r.J).e$))])),t(W,p([V("absolute bottom-0 left-10 h-20"),t(be,"width",e.a4.gl>600?"600px":xe(e.a4.gl-40)+"px")]),p([t(St,Yg,Jp(r.J))])),t(qp,e,r)]))}),Xp=S(function(e,r,n){var a=Ig(n.J),o=Xn(n.J);return t(W,p([V("bg-black40"),V("select-none"),V("antialiased"),V("font-mono"),t(be,"width",xe(o.a4.gl)+"px"),t(be,"height",xe(o.a4.fn)+"px")]),p([t(W,p([V("fixed")]),p([t(St,Ht(Gg),t(e,o,a))])),t(W,p([wt("gui")]),p([t(Yp,o,n),t(St,Ng,t(r,o,a))]))]))}),Zp=tr(function(e,r,n,a,o,i){var c=$(function(u,v){return w(C(Eg,r,i,u,v),el)}),l=function(u){var v=t(Tu,n,u.fu);return w({aT:u.fu.a4.gl<500,J:t(Wg,v,a)},el)};return og({ft:l,f6:Ht(Rg(Jm)),ge:c,gi:t(Xp,e,o)})}),yr=$(function(e,r){return{gn:e,gr:r}}),Qp=$(function(e,r){return t(re,function(n){if(n.$===3){var a=n.a;return a}else return!1},t(Zn,e,r.aB))}),Kp=$(function(e,r){return t(We,!1,Qn(t(gn,Qp(e),r)))}),e0=$(function(e,r){return t(Kp,e,r.e$)}),Kn=e0,r0=$(function(e,r){return t(re,function(n){if(n.$)return 0;var a=n.b;return a},t(Zn,e,r.aB))}),n0=$(function(e,r){return t(We,0,Qn(t(gn,r0(e),r)))}),a0=$(function(e,r){return t(n0,e,r.e$)}),Tr=a0,Ii=function(e){return e},ze=function(e){return e},zt=function(e){var r=e;return-r},t0=$(function(e,r){var n=e,a=r;return{gn:n.gr*a.dg-n.dg*a.gr,gr:n.dg*a.gn-n.gn*a.dg,dg:n.gn*a.gr-n.gr*a.gn}}),u$=function(e){var r=e;return r.de},$$=function(e){var r=e;return r.df},o0=function(e){return t(t0,u$(e),$$(e))},ea=function(e){var r=e;return r.cN},Rr=Wf,Nr=Vf,ct=S(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Rr(c),u=Nr(c),v=a.e6,f=v,m=f.gn*u,g=l*m,d=m*m,b=f.gr*u,h=l*b,y=m*b,P=b*b,_=1-2*(d+P),z=f.dg*u,A=l*z,I=2*(y-A),H=2*(y+A),G=m*z,J=2*(G+h),U=2*(G-h),R=b*z,Q=2*(R-g),ae=2*(R+g),ge=z*z,ye=1-2*(P+ge),fe=1-2*(d+ge);return{gn:ye*i.gn+I*i.gr+J*i.dg,gr:H*i.gn+fe*i.gr+Q*i.dg,dg:U*i.gn+ae*i.gr+_*i.dg}}),ja=S(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Rr(c),u=Nr(c),v=a.cN,f=v,m=i.gn-f.gn,g=i.gr-f.gr,d=i.dg-f.dg,b=a.e6,h=b,y=h.gn*u,P=l*y,_=y*y,z=h.gr*u,A=l*z,I=y*z,H=z*z,G=1-2*(_+H),J=h.dg*u,U=l*J,R=2*(I-U),Q=2*(I+U),ae=y*J,ge=2*(ae+A),ye=2*(ae-A),fe=z*J,Se=2*(fe-P),Je=2*(fe+P),Re=J*J,Jr=1-2*(H+Re),Ur=1-2*(_+Re);return{gn:f.gn+Jr*m+R*g+ge*d,gr:f.gr+Q*m+Ur*g+Se*d,dg:f.dg+ye*m+Je*g+G*d}}),ra=function(e){return e},_n=function(e){var r=e;return r.de},yn=function(e){var r=e;return r.df},wn=function(e){var r=e;return r.dh},v$=S(function(e,r,n){return ra({cN:s(ja,e,r,ea(n)),de:s(ct,e,r,_n(n)),df:s(ct,e,r,yn(n)),dh:s(ct,e,r,wn(n))})}),ll=S(function(e,r,n){return s(v$,e(n),r,n)}),Oi=function(e){var r=e;return r.e6},na=$(function(e,r){var n=e,a=r;return{gn:a.gn+n.gn,gr:a.gr+n.gr,dg:a.dg+n.dg}}),f$=$(function(e,r){return ra({cN:t(na,e,ea(r)),de:_n(r),df:yn(r),dh:wn(r)})}),i0=$(function(e,r){var n=e,a=r;return{gn:n*a.gn,gr:n*a.gr,dg:n*a.dg}}),c0=S(function(e,r,n){return t(f$,t(i0,r,e),n)}),l0=S(function(e,r,n){return s(c0,Oi(e(n)),r,n)}),Pr=$(function(e,r){return{e6:r,cN:e}}),u0=function(e){var r=e;return t(Pr,r.cN,r.de)},$0=function(e){var r=e;return t(Pr,r.cN,r.df)},v0=function(e){var r=e;return t(Pr,r.cN,r.dh)},s$=function(e){var r=ra({cN:e.aZ,de:$$(e.dB),df:o0(e.dB),dh:u$(e.dB)}),n=s(l0,v0,e.cm,s(ll,u0,zt(e.bO),s(ll,$0,e.bH,r)));return n},f0=function(e){return{$:1,a:e}},De=function(e){var r=e;return K(r)},s0=function(e){return{cY:f0(De(e.eK)),dc:e.dc}},Ze=function(e){return e},Or={gn:0,gr:0,dg:0},d$=_r,ln=function(e){return e},d0=ln({gn:1,gr:0,dg:0}),Ji=d0,m$=ln({gn:0,gr:0,dg:1}),Zt=m$,g$=d$({cN:Or,de:Zt,df:Ji}),m0=function(e){var r=e.aZ,n=e.bH,a=e.bO,o=e.eK;return s0({dc:s$({bH:Ze(n),cm:ze(1e3),bO:Ze(a),aZ:Ii(r),dB:g$}),eK:ze(o)})},g0=Gf,p0=function(e){return{$:0,a:e}},lt=function(e){var r=e;return .5*r},b0=Rf,h0=function(e){var r=e;return b0(r)},_0=function(e){var r=lt(De(e.eI)),n=h0(r);return{cY:p0(n),dc:e.dc}},y0=function(e){var r=e.aZ,n=e.bH,a=e.bO,o=e.cm;return _0({eI:Ze(2*g0(.5)),dc:s$({bH:Ze(n),cm:ze(o),bO:Ze(a),aZ:Ii(r),dB:g$})})},p$=$(function(e,r){return t(Kn,"orthographic",e)?m0({bH:t(Tr,"camera azimuth",e),bO:t(Tr,"camera elevation",e),aZ:r,eK:t(Tr,"camera distance",e)}):y0({bH:t(Tr,"camera azimuth",e),cm:t(Tr,"camera distance",e),bO:t(Tr,"camera elevation",e),aZ:r})}),Ui={$:0},w0={bT:!0,cp:"",cq:"",aJ:Ui},S0=function(e){if(e.b){var r=e.a,n=e.b;return Z(s(je,Xe,r,n))}else return F},b$=$(function(e,r){var n={dl:1,co:1+t(We,-1,S0(t(X,function(a){return a.co},r.fQ))),el:e};return D(r,{fQ:t(L,n,r.fQ)})}),h$={aR:{bK:t(yr,0,0),fS:.5},e7:0,fZ:0,eu:0,gc:x,gh:w(0,0)},_$=t(b$,p([t(yr,6,0),t(yr,6,6),t(yr,0,6)]),{cd:h$,dk:F,ao:x,ci:x,fQ:x}),x0=function(e){return{E:x,n:x,q:e}},P0=function(e){return{an:t(p$,e,{gn:0,gr:0,dg:0}),l:w0,k:x0(_$),aG:t(yr,0,0)}},ta=$(function(e,r){return w(e,Vu(r))}),C0=$(function(e,r){return w(e,Ru(r))}),k0=S(function(e,r,n){return{aB:n,fw:r,fG:e}}),Qt=xr,z0=function(e){return s(je,$(function(r,n){var a=r.a,o=r.b;return s(cn,a,o,n)}),Qt,e)},L0=S(function(e,r,n){return s(k0,e,r,z0(n))}),qa=L0,zn=S(function(e,r,n){var a=r.a,o=r.b;return w(e,t(Nu,w(a,o),n))}),Er=Ef,T0=C(kr,255/255,255/255,255/255,1),M0=p([s(qa,"View Options",!0,p([t(ta,"draw speed vector",!1),t(ta,"draw ball trail",!0),t(ta,"orthographic",!0),t(ta,"unlit",!0)])),s(qa,"Camera",!0,p([s(zn,"camera distance",w(3,60),40),s(zn,"camera azimuth",w(0,2*Er),0),s(zn,"camera elevation",w(-Er/2,Er/2),0)])),s(qa,"Physics Parameters",!0,p([t(ta,"fix time steps",!0),s(zn,"gas force",w(20,60),40),s(zn,"friction",w(0,1),.4),s(zn,"direction change speed",w(1,5),3)])),s(qa,"Color",!0,p([t(C0,"floor color",T0)]))]),y$=function(e){return{$:1,a:e}},Aa=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*o+a*i}),lr=Yf,Kt=function(e){return lr(t(Aa,e,e))},vr=$(function(e,r){return Kt(w(e.gn-r.gn,e.gr-r.gr))}),D0=$(function(e,r){var n=r.aJ;if(n.$){var a=n.a,o=t(yr,e.gn,e.gr);return D(r,{aJ:y$(function(){var i=ve(a);if(i.b){var c=i.a;return t(vr,c,o)>2?le(a,p([o])):a}else return p([o])}())})}else return r}),j0=$(function(e,r){return e.dK.ey?D(r,{l:t(D0,r.aG,r.l)}):r}),Ne=S(function(e,r,n){return{gn:e,gr:r,dg:n}}),Ba=function(e){var r=e;return r.q},A0=$(function(e,r){var n=Ba(r.k).cd;return D(r,{an:t(p$,e,s(Ne,n.aR.bK.gn,n.aR.bK.gr,0))})}),w$=$(function(e,r){var n=r;return D(n,{q:e(n.q)})}),B0=function(e){var r=function(n){return!n.dH&&t(vr,n.bK,e.cd.aR.bK)<1?D(n,{dH:!0}):n};return D(e,{ao:t(X,r,e.ao)})},S$=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(n+o,a+i)}),Cr=$(function(e,r){var n=r.a,a=r.b;return w(e*n,e*a)}),Zr=$(function(e,r){return t(Cr,e/Kt(r),r)}),F0=$(function(e,r){return t(Zr,t(Aa,e,r),e)}),E0=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(o-n,i-a)}),W0=$(function(e,r){var n=r.cd,a=t(F0,e.b$,n.gh),o=t(E0,a,n.gh),i=t(S$,o,t(Cr,e.b4.dl,t(Cr,-1,a)));return D(r,{cd:D(n,{gh:i})})}),V0=$(function(e,r){return r.b?s(Ir,L,r,e):e}),Ee=function(e){return s(Ir,V0,x,e)},Gr=function(e){return e*Er/180},eo=$(function(e,r){return w(e,r)}),qi=function(e){var r=function(){if(e.b){var n=e.a,a=e.b;return le(a,p([n]))}else return x}();return s(Gt,eo,e,r)},Fa=$(function(e,r){var n=r.a,a=r.b;return w(n*Rr(e)-a*Nr(e),n*Nr(e)+a*Rr(e))}),Ve=$(function(e,r){var n=e.a,a=e.b;return D(r,{gn:r.gn+n,gr:r.gr+a})}),Le=$(function(e,r){return w(e.gn-r.gn,e.gr-r.gr)}),R0=$(function(e,r){var n=r.a,a=r.b,o=t(Zr,e,t(Fa,-Gr(90),t(Le,a,n)));return w(t(Ve,o,n),t(Ve,o,a))}),N0=$(function(e,r){return{e1:t(X,function(n){return{bK:n,fS:e}},r),f0:t(X,R0(e),qi(r))}}),fr=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*i-a*o}),G0=$(function(e,r){var n=w(w(e.ah,e.e6),w(r.ah,r.e6)),a=n.a,o=a.a,i=a.b,c=n.b,l=c.a,u=c.b,v=t(fr,t(Le,l,o),i),f=t(fr,i,u),m=v/f,g=t(fr,t(Le,l,o),u),d=g/f;return!v&&!f?F:f&&0<=d&&0<=m?Z(t(Ve,t(Cr,d,i),o)):F}),x$=$(function(e,r){r.fS;var n=r.bK,a=t(fr,e.e6,t(Le,n,e.ah))<0?1:-1;return t(G0,{e6:t(Fa,a*Gr(90),e.e6),ah:n},e)}),dr=function(e){var r=e.a,n=e.b;return w(n.gn-r.gn,n.gr-r.gr)},P$=function(e){var r=e.a,n=e.b;return{e6:dr(w(r,n)),ah:r}},H0=$(function(e,r){var n=e.a,a=e.b,o=r.fS,i=t(x$,P$(e),r);if(i.$===1)return F;var c=i.a,l=t(vr,r.bK,c);if(O(l,o)<1){var u=t(Ve,t(Zr,-lr(o*o-l*l),dr(e)),c),v=t(Aa,t(Le,a,n),t(Le,u,n))>=0&&O(t(vr,n,u),t(vr,n,a))<1;return v?Z(u):F}else return F}),C$=Zr(1),I0=S(function(e,r,n){var a=w(e,t(Ve,r,e)),o=t(H0,a,n);return t(re,function(i){return{b$:C$(t(Le,i,n.bK)),ca:t(Le,i,e)}},o)}),O0=$(function(e,r){var n=e.a,a=r.a,o=w(w(n,dr(e)),w(a,dr(r))),i=o.a,c=i.a,l=i.b,u=o.b,v=u.a,f=u.b,m=t(fr,t(Le,v,c),l),g=t(fr,l,f),d=m/g,b=t(fr,t(Le,v,c),f),h=b/g;return!m&&!g?F:g&&0<=h&&h<=1&&0<=d&&d<=1?Z(t(Ve,t(Cr,h,l),c)):F}),k$=function(e){return C$(t(Fa,-Gr(90),dr(e)))},J0=S(function(e,r,n){var a=w(e,t(Ve,r,e)),o=t(O0,a,n);return t(re,function(i){return{b$:k$(n),ca:t(Le,i,e)}},o)}),z$=jf,ul=$(function(e,r){return{bL:e,b$:r.b$,ca:r.ca}}),U0=S(function(e,r,n){var a=t(N0,e.fS,n),o=a.f0,i=a.e1,c=t(gn,function(u){return t(re,ul(u.bK),s(I0,e.bK,r,u))},i),l=t(gn,function(u){return t(re,function(v){return t(ul,t(Ve,t(Zr,e.fS,t(Fa,Gr(90),dr(u))),t(Ve,v.ca,e.bK)),v)},s(J0,e.bK,r,u))},o);return Qn(t(z$,t(te,function(u){return u.ca},Kt),Ee(p([c,l]))))}),q0=$(function(e,r){return{bL:r.bL,b$:r.b$,b4:e,ca:r.ca}}),Y0=$(function(e,r){var n=t(Cr,e.dt,r.cd.gh),a=function(c){return t(re,q0(c),s(U0,r.cd.aR,n,c.el))},o=Qn(t(z$,t(te,function(c){return c.ca},Kt),t(gn,a,r.fQ)));if(o.$===1)return r;var i=o.a;return t(W0,i,D(r,{dk:Z(i.b4.co),ci:t(Eu,15,t(L,i.bL,r.ci))}))}),ro=$(function(e,r){return Ee(t(X,e,r))}),no=$(function(e,r){return s(Ir,$(function(n,a){return e(n)?t(L,n,a):a}),x,r)}),$l=$(function(e,r){var n=e.a,a=e.b,o=r.fS,i=t(x$,P$(e),r);if(i.$===1)return x;var c=i.a,l=t(vr,r.bK,c);if(O(l,o)<1){var u=lr(o*o-l*l),v=t(Ve,t(Zr,u,dr(e)),c),f=function(g){return t(Aa,t(Le,a,n),t(Le,g,n))>=0&&O(t(vr,n,g),t(vr,n,a))<1},m=t(Ve,t(Zr,-u,dr(e)),c);return t(no,f,he(l,o)?p([m]):p([m,v]))}else return x}),X0=$(function(e,r){var n=e.a,a=e.b;return O(t(vr,n,r.bK),r.fS)<0&&O(t(vr,a,r.bK),r.fS)>-1?t($l,w(a,n),r):t($l,w(n,a),r)}),Z0=$(function(e,r){var n=r.a,a=w(w(e.ah,e.e6),w(n,dr(r))),o=a.a,i=o.a,c=o.b,l=a.b,u=l.a,v=l.b,f=t(fr,t(Le,u,i),c),m=t(fr,c,v),g=f/m,d=t(fr,t(Le,u,i),v),b=d/m;return!f&&!m?F:m&&b>=0&&g>=0&&g<=1?Z(t(Ve,t(Cr,b,c),i)):F}),Q0=$(function(e,r){var n=e.a;r.fS;var a=r.bK,o=t(fr,dr(e),t(Le,a,n))<0?1:-1;return t(Z0,{e6:t(Fa,o*Gr(90),dr(e)),ah:a},e)}),K0=function(e){var r=e.cd,n=$(function(i,c){var l=t(Q0,i,c);if(l.$)return c;var u=l.a;return D(c,{bK:t(Ve,t(Zr,c.fS,k$(i)),t(Ve,t(Le,u,c.bK),c.bK))})}),a=t(no,function(i){return!Hi(t(X0,i,r.aR))},t(ro,t(te,function(i){return i.el},qi),e.fQ)),o=s(je,n,r.aR,a);return D(e,{cd:D(r,{aR:o})})},eb=$(function(e,r){return D(r,{cd:e(r.cd)})}),rb=$(function(e,r){return D(r,{gh:t(Cr,1-e.dt*5*t(Tr,"friction",e),r.gh)})}),Yi=S(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),nb=function(e){var r=e.a,n=e.b;return w(r*Rr(n),r*Nr(n))},ab=function(e){return(e.fW?1:0)-(e.fy?1:0)},tb=ab,ob=function(e){return(e.eG?1:0)-(e.ds?1:0)},po=ob,ib=$(function(e,r){var n=t(Tr,"gas force",e),a=nb(w(1,r.e7)),o=S$(t(Cr,e.dt*n*po(e.dK),a));return D(r,{e7:r.e7-tb(e.dK)*t(Tr,"direction change speed",e)*e.dt,eu:po(e.dK)?s(Yi,-14,14,r.eu+e.dt*1e3*po(e.dK)):t(Aa,r.gh,a),gh:o(r.gh)})}),cb=$(function(e,r){var n=r.aR;return D(r,{aR:D(n,{bK:t(Ve,t(Cr,e.dt,r.gh),r.aR.bK)})})}),lb=$(function(e,r){return D(r,{fZ:r.fZ+e.dt*r.eu})}),ub=function(e){return D(e,{gc:function(){var r=e.gc;if(r.b){var n=r.a;return t(vr,n,e.aR.bK)>1?t(L,e.aR.bK,e.gc):e.gc}else return p([e.aR.bK])}()})},$b=$(function(e,r){return ub(t(cb,e,t(lb,e,t(rb,e,t(ib,e,r)))))}),vb=$(function(e,r){return B0(K0(t(eb,$b(e),t(Y0,e,r))))}),fb=$(function(e,r){var n=t(vb,e,Ba(r.k));return D(r,{k:t(w$,Ht(n),r.k)})}),ua=function(e){return Ze(Er*(e/180))},Ya=function(e){return e},un=function(e){var r=e;return r},sb=$(function(e,r){var n=e,a=r;return a.gn*n.gn+a.gr*n.gr+a.dg*n.dg}),ie=$(function(e,r){var n=r;return e*n}),L$=function(e){var r=e;return r.cN},db=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.fI,l=c;return(a.gn-i.gn)*l.gn+(a.gr-i.gr)*l.gr+(a.dg-i.dg)*l.dg}),mb=S(function(e,r,n){var a=e,o=r,i=n;return{gn:i.gn+o*a.gn,gr:i.gr+o*a.gr,dg:i.dg+o*a.dg}}),gb=$(function(e,r){var n=Oi(r),a=e,o=a.fI,i=t(sb,o,n);if(i){var c=L$(r),l=t(db,e,c),u=t(ie,-1/i,l);return Z(s(mb,n,u,c))}else return F}),pb=$(function(e,r){return{gn:e,gr:r}}),vl=$(function(e,r){var n=e,a=r;return n*a}),bb=function(e){var r=e;return r},fl=function(e){var r=e;return bb(r.eR)},hb=function(e){var r=e;return r.aS},_b=function(e){var r=e,n=t(Xe,K(r.gn),t(Xe,K(r.gr),K(r.dg)));if(n){var a=r.dg/n,o=r.gr/n,i=r.gn/n,c=lr(i*i+o*o+a*a);return Z({gn:i/c,gr:o/c,dg:a/c})}else return F},T$=$(function(e,r){var n=r;return n/e}),Ko=function(e){var r=e;return ea(r)},M$=ln({gn:0,gr:0,dg:-1}),yb=$(function(e,r){var n=e,a=r;return a/n}),wb=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gn:v.gn*a.gn+l.gn*a.gr+i.gn*a.dg,gr:v.gr*a.gn+l.gr*a.gr+i.gr*a.dg,dg:v.dg*a.gn+l.dg*a.gr+i.dg*a.dg}}),Lt=function(e){var r=e;return{gn:-r.gn,gr:-r.gr,dg:-r.dg}},ei=function(e){var r=e;return Lt(wn(r))},Sb=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.de,l=c;return(a.gn-i.gn)*l.gn+(a.gr-i.gr)*l.gr}),Xi=S(function(e,r,n){var a=e,o=r,i=n;return{gn:a,gr:o,dg:i}}),xb=E(function(e,r,n,a){var o=e,i=r,c=n,l=a,u=o.cN,v=u,f=o.dh,m=f,g=o.df,d=g,b=o.de,h=b;return{gn:v.gn+i*h.gn+c*d.gn+l*m.gn,gr:v.gr+i*h.gr+c*d.gr+l*m.gr,dg:v.dg+i*h.dg+c*d.dg+l*m.dg}}),Pb=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.df,l=c;return(a.gn-i.gn)*l.gn+(a.gr-i.gr)*l.gr}),$e=0,Cb=S(function(e,r,n){var a=e,o=t(Pb,fl(r),n),i=t(Sb,fl(r),n),c=a.dc,l=c,u=hb(r);u.a;var v=u.b,f=a.cY;if(f.$){var b=f.a,h=t(yb,v,b),y=C(xb,l,t(vl,h,i),t(vl,h,o),$e);return t(Pr,y,ei(a.dc))}else{var m=f.a,g=zt(t(T$,m,t(ie,.5,v))),d=t(wb,l,t(We,M$,_b(s(Xi,i,o,g))));return t(Pr,Ko(a.dc),d)}}),ri=function(e){var r=e;return{gn:Rr(r),gr:Nr(r)}},kb=function(e){var r=e;return{gn:-r.gr,gr:r.gn}},zb=function(e){return e},Lb=$(function(e,r){return zb({cN:r,de:e,df:kb(e)})}),Tb=$(function(e,r){return t(Lb,ri(e),r)}),Mb=S(function(e,r,n){var a=e.a,o=e.b;return{eR:t(Tb,r,n),aS:w(De(a),De(o))}}),Fn=function(e){var r=e;return r.gn},Db=$(function(e,r){var n=e,a=r;return{gn:n,gr:a}}),En=function(e){var r=e;return r.gr},Wn=function(e){var r=e;return r.dg},jb=E(function(e,r,n,a){var o=n.gn,i=n.gr,c=function(v){return s(Ne,un(Fn(v)),un(En(v)),un(Wn(v)))},l=s(Mb,w(Ya(r.gl),Ya(r.fn)),ua(0),t(pb,0,0)),u=t(Db,Ya(o),Ya(i));return t(re,c,t(gb,a,s(Cb,e,l,u)))}),Ab=$(function(e,r){return{fI:e,cN:r}}),Bb=$(function(e,r){var n=r;return t(Ab,n.fI,t(na,e,n.cN))}),Fb=$(function(e,r){return{fI:r,cN:e}}),Eb=t(Fb,Or,Zt),Wb=E(function(e,r,n,a){return C(jb,r,n,a,t(Bb,s(Xi,ze(0),ze(0),ze(e)),Eb))}),Vb=Wb(0),Rb=$(function(e,r){return D(r,{aG:t(We,r.aG,t(re,function(n){return t(yr,n.gn,n.gr)},s(Vb,r.an,e.a4,e.ek)))})}),Nb=$(function(e,r){var n=t(Kn,"fix time steps",e)?D(e,{dt:.016}):e,a=r.l.bT?j0(n):_r;return t(A0,n,t(fb,n,t(Rb,n,a(r))))}),Gb=$(function(e,r){var n=r;return D(n,{n:t(L,n.q,n.n),q:e})}),Hb=Ts,Ib=Ls,Ob=function(e){var r=S(function(n,a,o){return{E:o,n,q:a}});return C(Ib,r,t(j,"before",$r(e)),t(j,"current",e),t(j,"after",$r(e)))},Jb=_e(function(e,r,n,a,o){return{cd:e,dk:o,ao:n,ci:a,fQ:r}}),Ub=tr(function(e,r,n,a,o,i){return{aR:e,e7:n,fZ:o,eu:a,gc:i,gh:r}}),qb=$(function(e,r){return{bK:e,fS:r}}),Yb=Bi(Rm),se=S(function(e,r,n){return t(Yb,t(j,e,r),n)}),Ea=s(se,"y",ne,s(se,"x",ne,pe(yr))),Xb=s(se,"radius",ne,s(se,"center",Ea,pe(qb))),sl=xs,Zb=s(se,"trail",$r(Ea),s(se,"rotation",ne,s(se,"rotationSpeed",ne,s(se,"directionFromXAxis",ne,s(se,"velocity",s(Bi,eo,t(sl,0,ne),t(sl,1,ne)),s(se,"circle",Xb,pe(Ub))))))),Qb=$(function(e,r){return{bK:e,dH:r}}),Kb=s(se,"isCollected",ee,s(se,"center",Ea,pe(Qb))),D$=ps,eh=ws,rh=Cs,nh=function(e){return rh(p([eh(F),t(_a,Z,e)]))},ah=S(function(e,r,n){return{dl:n,co:e,el:r}}),th=s(se,"bounciness",ne,s(se,"polygon",$r(Ea),s(se,"id",D$,pe(ah)))),oh=s(se,"ballBouncedInLastTickToPolygonWithId",nh(D$),s(se,"collisionPointsHistory",$r(Ea),s(se,"coins",$r(Kb),s(se,"polygons",$r(th),s(se,"ball",Zb,pe(Jb)))))),Xr=$(function(e,r){return s(je,Fs(e),js(),r)}),Sn=function(e){return s(je,$(function(r,n){var a=r.a,o=r.b;return s(Bs,a,o,n)}),As(),e)},ih=$(function(e,r){var n=r;return Sn(p([w("before",t(Xr,e,n.n)),w("current",e(n.q)),w("after",t(Xr,e,n.E))]))}),Mr=Nt,Wa=function(e){return Sn(p([w("x",Mr(e.gn)),w("y",Mr(e.gr))]))},ch=function(e){return Sn(p([w("center",Wa(e.bK)),w("radius",Mr(e.fS))]))},lh=function(e){return Sn(p([w("circle",ch(e.aR)),w("velocity",function(r){var n=r.a,a=r.b;return t(Xr,_r,p([Mr(n),Mr(a)]))}(e.gh)),w("directionFromXAxis",Mr(e.e7)),w("rotationSpeed",Mr(e.eu)),w("rotation",Mr(e.fZ)),w("trail",t(Xr,Wa,e.gc))]))},uh=function(e){return Sn(p([w("center",Wa(e.bK)),w("isCollected",e$(e.dH))]))},j$=Nt,$h=function(e){return Sn(p([w("id",j$(e.co)),w("polygon",t(Xr,Wa,e.el)),w("bounciness",Mr(e.dl))]))},vh=Es,fh=function(e){return Sn(p([w("ball",lh(e.cd)),w("polygons",t(Xr,$h,e.fQ)),w("coins",t(Xr,uh,e.ao)),w("collisionPointsHistory",t(Xr,Wa,e.ci)),w("ballBouncedInLastTickToPolygonWithId",t(te,re(j$),We(vh))(e.dk))]))},sh=function(e){return D(e,{cd:h$})},dh=function(e){return D(e,{ao:t(X,function(r){return D(r,{dH:!1})},e.ao)})},mh=function(e){return D(e,{ci:x})},gh=function(e){return mh(dh(sh(e)))},ph=$(function(e,r){return D(r,{cp:t(xu,2,t(ih,t(te,gh,fh),e))})}),bh=function(e){return D(e,{aJ:Ui})},hh=function(e){var r=e,n=r.E;if(n.b){var a=n.a,o=n.b;return Z({E:o,n:t(L,r.q,r.n),q:a})}else return F},_h=function(e){var r=e,n=r.n;if(n.b){var a=n.a,o=n.b;return Z({E:t(L,r.q,r.E),n:o,q:a})}else return F},yh=function(e){var r=e,n=r.E;if(n.b){var a=n.a,o=n.b;return D(r,{E:o,n:t(L,a,r.n)})}else return D(r,{E:ve(r.n),n:x})},wh=function(e){var r=e,n=r.n;if(n.b){var a=n.a,o=n.b;return D(r,{n:o,q:a})}else{var i=r.E;if(i.b){var a=i.a,o=i.b;return D(r,{E:o,q:a})}else return r}},Sh=$(function(e,r){return D(r,{cq:e})}),xh=function(e){return D(e,{aJ:y$(x)})},Ph=function(e){return D(e,{bT:!e.bT,aJ:Ui})},Ch=S(function(e,r,n){switch(r.$){case 0:return D(n,{l:Ph(n.l)});case 1:return D(n,{l:xh(n.l)});case 2:var a=r.a;return D(n,{l:bh(n.l),k:t(w$,b$(a),n.k)});case 3:return D(n,{k:t(We,n.k,_h(n.k))});case 4:return D(n,{k:t(We,n.k,hh(n.k))});case 5:return D(n,{k:t(Gb,_$,n.k)});case 6:return D(n,{k:wh(n.k)});case 7:return D(n,{k:yh(n.k)});case 8:return D(n,{l:t(ph,n.k,n.l)});case 9:return D(n,{k:t(l$,n.k,t(Hb,Ob(oh),n.l.cq))});default:var o=r.a;return D(n,{l:t(Sh,o,n.l)})}}),ao=function(e){return e},kh=function(e){var r=e;return r},zh=function(e){var r=s(Yi,1667,25e3,kh(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ao({gn:n,gr:a})},A$=function(e){return e},Lh=function(e){return{$:0,a:e}},Th=Lh,Mh={$:3},Dh=Mh,jh=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ah=jh,Bh=function(e){return{$:1,a:e}},Fh=Bh,Eh=function(e){return t(rn,"height",Pe(e))},Wh=function(e){return nd(id(e))},Vh=Wh,Rh=function(e){return{$:2,a:e}},Nh=Rh,B$=function(e){return t(an,"",e)},Gh=function(e){var r=e.a,n=e.b,a=e.c,o=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return B$(p(["rgba(",xe(c(r)),"%,",xe(c(n)),"%,",xe(c(a)),"%,",xe(i(o)),")"]))},Hh=$(function(e,r){switch(r.$){case 0:return t(am,e,r);case 1:return t(tm,e,r);case 2:return t(om,e,r);case 3:return t(im,e,r);case 4:return t(cm,e,r);default:return t(lm,e,r)}}),Ih=$(function(e,r){switch(r.$){case 0:return t(jd,e,r);case 1:return t(Ad,e,r);case 2:return t(Bd,e,r);case 3:return t(Fd,e,r);case 4:return t(Ed,e,r);case 5:return t(Wd,e,r);case 6:return t(Vd,e,r);case 7:return t(Rd,e,r);default:return Nd(e)}}),Oh=S(function(e,r,n){return s(nm,e,r,n)}),dl=function(e){var r=e;return r},aa=hm,bo=C(aa,1,1,1,1),gr=S(function(e,r,n){return t(X,function(a){return t(a,r,n)},e)}),Jh=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Uh=$(function(e,r){var n=e,a=r.gn,o=r.gr;return s(Jh,n*a/o,n,n*(1-a-o)/o)}),Va=sm,qh=function(e){var r=e.a,n=e.b,a=e.c;return s(Va,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},to=$(function(e,r){return qh(t(Uh,e,r))}),F$=$(function(e,r){return{dI:he(e.dI,r.dI),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.b8,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.b8,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.b8,b8:e.b8*r.b8}}),pr=Pm,Yh=function(e){return pr({dR:e.t,dS:e.w,dT:e.z,dU:e.K,dV:e.u,dW:e.x,dX:e.A,dY:e.L,dZ:e.v,d_:e.y,d$:e.B,d0:e.M,d1:0,d2:0,d3:0,d4:1})},ho=_e(function(e,r,n,a,o){var i=a.dI?1:-1,c=C(aa,a.b8,a.b8,a.b8,i);return Ge(o,e,c,Yh(a),a.dI,r,n)}),E$=tr(function(e,r,n,a,o,i){e:for(;;)switch(o.$){case 0:return i;case 5:var c=o.a,l=o.b,u=e,v=r,f=n,m=t(F$,c,a),g=l,d=i;e=u,r=v,n=f,a=m,o=g,i=d;continue e;case 1:var b=o.b,h=t(L,k(ho,e,r,n,a,b),i.P);return{P:h,X:i.X,f$:i.f$};case 3:var y=o.b,P=t(L,k(ho,e,r,n,a,y),i.X);return{P:i.P,X:P,f$:i.f$};case 2:var _=o.a,z=t(L,k(ho,e,r,n,a,_),i.f$);return{P:i.P,X:i.X,f$:z};default:var A=o.a;return s(je,C(E$,e,r,n,a),i,A)}}),Xh=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),W$=Xh,Zi=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Zh=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Zi,518,r,n,a)},Qh=$(function(e,r){return{$:6,a:e,b:r}}),Kh=Qh,V$=p([Zh({Y:1,Z:0,ab:!1}),C(W$,!1,!1,!1,!1),t(Kh,0,1)]),Hn=519,Qi=8,R$=15,Vn=7681,e3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ce=Dd,r3=$(function(e,r){return{$:0,a:e,b:r}}),n3=r3({dv:1,dE:0,ed:5}),Ye=vm,a3=n3(p([{en:t(Ye,-1,-1)},{en:t(Ye,1,-1)},{en:t(Ye,-1,1)},{en:t(Ye,1,1)}])),t3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"en"},uniforms:{}},o3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Ki=S(function(e,r,n){var a=e.c_,o=e.cB,i=e.dd,c=$(function(v,f){var m=v;return f(m)}),l=$(function(v,f){var m=v;return f(m)}),u=function(v){return t(te,c(v.bv),t(te,l(v.bi),t(te,l(v.bD),l(v.bE))))};return t(u,n,t(u,r,s(o3,a,o,i)))}),ec=function(e){return s(Ki,{cB:e.cB,c_:e.c_,dd:e.dd},{bi:e.bi,bv:e.bv,bD:e.bD,bE:e.bE},{bi:e.bi,bv:e.bv,bD:e.bD,bE:e.bE})},rc=function(e){return k(ce,p([ec(e),C(W$,!1,!1,!1,!1)]),t3,e3,a3,{})},i3=rc({bi:Vn,cB:0,c_:Qi,bv:Hn,dd:R$,bD:Vn,bE:Vn}),c3=516,ml=5386,Fe=7680,l3=function(e){return t(Yr,2,e+4)},N$=function(e){return rc({bi:Fe,cB:R$,c_:Qi,bv:c3,dd:l3(e),bD:ml,bE:ml})},u3=S(function(e,r,n){return Ee(p([s(gr,e,n,V$),p([N$(r),i3])]))}),$3=$(function(e,r){return Ee(t(Li,u3(e),r))}),v3=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Zi,513,r,n,a)},f3=v3({Y:1,Z:0,ab:!0}),s3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},d3=function(e){var r=e.b6,n=e.bQ,a=e.bI,o=e.bF,i=e.bM,c=e.aP,l=$(function(u,v){var f=u.a,m=u.b,g=u.c,d=v.a,b=v.b,h=v.c;return s3(f)(m)(g)(d)(b)(h)(r)(n)(a)(o)});return t(l,i,c)},m3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),gl=$(function(e,r){var n=e,a=r;return s(m3,32774,n,a)}),g3=1,pl=771,p3=770,nc=d3({bF:0,aP:t(gl,g3,pl),bI:0,bM:t(gl,p3,pl),bQ:0,b6:0}),Ln=p([f3,nc]),b3=function(e){var r=e;return r.d6},h3=function(e){var r=e;return r.d7},G$=function(e){var r=e;return r.d8},_3=function(e){var r=e;return r.d9},y3=function(e){var r=e;return r.ea},H$=function(e){var r=e;return r.eb},Me=$(function(e,r){var n=e,a=r;return a-n}),I$=function(e){return T(t(Me,_3(e),b3(e)),t(Me,y3(e),h3(e)),t(Me,H$(e),G$(e)))},w3=function(e){return e},S3=function(e){return ra({cN:w3({gn:e.K,gr:e.L,dg:e.M}),de:ln({gn:e.t,gr:e.u,dg:e.v}),df:ln({gn:e.w,gr:e.x,dg:e.y}),dh:ln({gn:e.z,gr:e.A,dg:e.B})})},_o=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gn:a.gn*v.gn+a.gr*v.gr+a.dg*v.dg,gr:a.gn*l.gn+a.gr*l.gr+a.dg*l.dg,dg:a.gn*i.gn+a.gr*i.gr+a.dg*i.dg}}),O$=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=a.gn-i.gn,l=a.gr-i.gr,u=a.dg-i.dg,v=n.dh,f=v,m=n.df,g=m,d=n.de,b=d;return{gn:c*b.gn+l*b.gr+u*b.dg,gr:c*g.gn+l*g.gr+u*g.dg,dg:c*f.gn+l*f.gr+u*f.dg}}),J$=$(function(e,r){return{cN:t(O$,e,ea(r)),de:t(_o,e,_n(r)),df:t(_o,e,yn(r)),dh:t(_o,e,wn(r))}}),ut=S(function(e,r,n){return{gn:e,gr:r,dg:n}}),Tt=function(e){var r=e;return r},de=$(function(e,r){var n=e,a=r;return t(Xe,n,a)}),$t=$(function(e,r){return O(e,r)<0?e:r}),we=$(function(e,r){var n=e,a=r;return t($t,n,a)}),x3=$(function(e,r){var n=Tt(r),a=Tt(e);return{d6:t(de,a.d6,n.d6),d7:t(de,a.d7,n.d7),d8:t(de,a.d8,n.d8),d9:t(we,a.d9,n.d9),ea:t(we,a.ea,n.ea),eb:t(we,a.eb,n.eb)}}),ar=function(e){var r=e;return r},P3=function(e){var r=e;return T(r.gn,r.gr,r.dg)},$n=$(function(e,r){var n=e,a=r;return a+n}),C3=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=lt(De(a)),c=lt(De(n)),l=lt(De(o)),u=P3(r),v=u.a,f=u.b,m=u.c;return{d6:t($n,c,v),d7:t($n,i,f),d8:t($n,l,m),d9:t(Me,c,v),ea:t(Me,i,f),eb:t(Me,l,m)}}),bl=E(function(e,r,n,a){var o=n.eY,i=2*n.fl*r,c=2*n.fk*r,l=2*n.fj*r,u=o.dg*r,v=o.gr*r,f=o.gn*r,m=ar(wn(e)),g=K(l*m.gn)+K(c*m.gr)+K(i*m.dg),d=ar(yn(e)),b=K(l*d.gn)+K(c*d.gr)+K(i*d.dg),h=ar(_n(e)),y=K(l*h.gn)+K(c*h.gr)+K(i*h.dg),P=t(C3,T(y,b,g),t(O$,e,s(ut,f,v,u)));if(a.$)return Z(P);var _=a.a;return Z(t(x3,_,P))}),ni=E(function(e,r,n,a){e:for(;;)if(a.b){var o=a.a,i=a.b;switch(o.$){case 0:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 1:var c=o.a,l=C(bl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 2:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 3:var c=o.a,l=C(bl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 4:var u=o.a,d=e,b=r,h=C(ni,e,r,n,u),y=i;e=d,r=b,n=h,a=y;continue e;default:var v=o.a,f=o.b,m=t(J$,S3(v),e),g=r*v.b8,d=e,b=r,h=C(ni,m,g,n,p([f])),y=i;e=d,r=b,n=h,a=y;continue e}}else return n}),xn=dm,Pn=mm,Cn=gm,U$=function(e){return{$:4,a:e}},k3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,o=a,i=t(L,n,r);e=o,r=i;continue e}else return r}),Ra=function(e){return U$(t(k3,e,x))},z3={dI:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,b8:1},hl=rc({bi:Vn,cB:0,c_:Qi,bv:Hn,dd:255,bD:Vn,bE:Vn}),L3=function(e){var r=e,n=t(Xe,K(r.gn),t(Xe,K(r.gr),K(r.dg)));if(n){var a=r.dg/n,o=r.gr/n,i=r.gn/n,c=lr(i*i+o*o+a*a);return c*n}else return $e},qe={bI:0,eX:!1,bQ:0,cW:0,b6:0,c8:0,gn:0,gr:0,dg:0},Ke=$(function(e,r){var n=e,a=r;return pr({dR:n.gn,dS:n.b6,dT:a.gn,dU:a.b6,dV:n.gr,dW:n.bQ,dX:a.gr,dY:a.bQ,dZ:n.dg,d_:n.bI,d$:a.dg,d0:a.bI,d1:n.c8,d2:n.cW,d3:a.c8,d4:a.cW})}),$a=w({bn:t(Ke,qe,qe),bW:t(Ke,qe,qe),bX:t(Ke,qe,qe),bY:t(Ke,qe,qe)},C(aa,0,0,0,0)),q$=514,Y$=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Zi,515,r,n,a)},X$=240,T3=p([Y$({Y:1,Z:0,ab:!0}),ec({bi:Fe,cB:X$,c_:0,bv:q$,dd:0,bD:Fe,bE:Fe}),nc]),M3=$(function(e,r){var n=e,a=r.fH,o=r.fg,i=r.eQ,c=De(a),l=c,u=De(o),v=u,f=n.cY;if(f.$){var g=f.a;return No(v)?pr({dR:2/(i*g),dS:0,dT:0,dU:0,dV:0,dW:2/g,dX:0,dY:0,dZ:0,d_:0,d$:0,d0:-1,d1:0,d2:0,d3:0,d4:1}):pr({dR:2/(i*g),dS:0,dT:0,dU:0,dV:0,dW:2/g,dX:0,dY:0,dZ:0,d_:0,d$:-2/(v-l),d0:-(v+l)/(v-l),d1:0,d2:0,d3:0,d4:1})}else{var m=f.a;return No(v)?pr({dR:1/(i*m),dS:0,dT:0,dU:0,dV:0,dW:1/m,dX:0,dY:0,dZ:0,d_:0,d$:-1,d0:-2*l,d1:0,d2:0,d3:-1,d4:0}):pr({dR:1/(i*m),dS:0,dT:0,dU:0,dV:0,dW:1/m,dX:0,dY:0,dZ:0,d_:0,d$:-(v+l)/(v-l),d0:-2*v*l/(v-l),d1:0,d2:0,d3:-1,d4:0})}}),Xa=$(function(e,r){return(1&e>>r)===1?0:1}),D3=function(e){return p([Y$({Y:1,Z:0,ab:!0}),ec({bi:Fe,cB:X$,c_:e,bv:q$,dd:0,bD:Fe,bE:Fe}),nc])},j3=S(function(e,r,n){return Ee(t(X,function(a){var o=a<<4,i=C(aa,t(Xa,a,0),t(Xa,a,1),t(Xa,a,2),t(Xa,a,3));return s(gr,e,w(r,i),D3(o))},t(sn,1,t(Yr,2,n)-1)))}),Rn=function(e){var r=e;return r},A3=Cm,Z$=ln({gn:0,gr:1,dg:0}),ac=Z$,B3={cN:Or,de:Ji,df:ac,dh:Zt},Na=function(e){var r=e;return r},F3=function(e){var r=Na(ea(e)),n=ar(wn(e)),a=ar(yn(e)),o=ar(_n(e));return pr({dR:o.gn,dS:a.gn,dT:n.gn,dU:r.gn,dV:o.gr,dW:a.gr,dX:n.gr,dY:r.gr,dZ:o.dg,d_:a.dg,d$:n.dg,d0:r.dg,d1:0,d2:0,d3:0,d4:1})},E3=$(function(e,r){var n=r;return F3(t(J$,n,e))}),W3=function(e){return t(E3,B3,e)},V3=function(e){var r=e;return r.dc},R3=function(e){var r=e;return _n(r)},N3=function(e){var r=e;return yn(r)},G3=function(e){var r=V3(e.an),n=ra({cN:Ko(r),de:R3(r),df:N3(r),dh:Lt(ei(r))}),a=Ra(e.aX),o=a,i=C(ni,n,1,F,p([o]));if(i.$===1)return x;var c=i.a,l=W3(r),u=t(ie,.99,t(de,De(e.$7),zt(G$(c)))),v=I$(c),f=v.a,m=v.b,g=v.c,d=L3(s(Xi,f,m,g)),b=t(ie,1.01,t($n,d,zt(H$(c)))),h=t(M3,e.an,{eQ:e.eQ,fg:b,fH:u}),y=A3(h).d4,P=y?ar(Lt(ei(r))):Rn(Ko(r)),_=function(){var fe=e.gb;switch(fe.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var Se=fe.a;return w(3,Se);case 4:var Se=fe.a;return w(4,Se);default:return w(5,0)}}(),z=_.a,A=_.b,I=e.fe,H=I,G=t(to,H,e.gk),J=G,U=pr({dR:0,dS:P.gn,dT:xn(J),dU:e.eB,dV:0,dW:P.gr,dX:Pn(J),dY:un(d),dZ:0,d_:P.dg,d$:Cn(J),d0:z,d1:0,d2:y,d3:0,d4:A}),R=Ge(E$,U,l,h,z3,o,{P:x,X:x,f$:x}),Q=e.fB;switch(Q.$){case 0:var ae=Q.a;return Ee(p([s(gr,R.P,w(ae,bo),Ln),s(gr,R.X,$a,Ln)]));case 1:var ae=Q.a;return Ee(p([s(gr,R.P,$a,Ln),p([hl]),s(gr,R.f$,ae.bn,V$),p([N$(0)]),s(gr,R.P,w(ae,bo),T3),s(gr,R.X,$a,Ln)]));default:var ge=Q.a,ye=Q.b;return Ee(p([s(gr,R.P,w(ye,bo),Ln),p([hl]),t($3,R.f$,ge),s(j3,R.P,ye,sr(ge)),s(gr,R.X,$a,Ln)]))}},H3=function(e){return t(rn,"width",Pe(e))},Q$=$(function(e,r){var n=p([Fh(1),Nh(0),Th(!0),C(Ah,0,0,0,0)]),a=function(){var z=e.eO;switch(z.$){case 0:return T(n,"0",1);case 1:return T(t(L,Dh,n),"1",1);default:var A=z.a;return T(n,"0",A)}}(),o=a.a,i=a.b,c=a.c,l=e.aS,u=l.a,v=l.b,f=dl(v),m=t(be,"height",Pe(f)+"px"),g=dl(u),d=g/f,b=t(ro,function(z){return G3({eQ:d,an:e.an,$7:e.$7,aX:z.aX,fe:z.fe,fB:z.fB,eB:c,gb:z.gb,gk:z.gk})},r),h=t(be,"width",Pe(g)+"px"),y=e.eS,P=y,_=Gh(P);return s(Vh,"div",p([t(be,"padding","0px"),h,m]),p([w(i,s(Oh,o,p([H3(Qe(g*c)),Eh(Qe(f*c)),h,m,t(be,"display","block"),t(be,"background-color",_)]),b))]))}),I3=function(e){return{$:2,a:e}},K$=function(e){return I3(e)},O3=function(e){return t(Q$,{eO:K$(e.bf),eS:e.eS,an:e.an,$7:e.$7,aS:e.aS},p([{aX:e.aX,fe:e.fe,fB:e.fB,gb:e.gb,gk:e.gk}]))},Mt=function(e){return e},J3=function(e){var r=e;return r},tc=function(e){var r=e;return J3(r.eR)},ev=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),U3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),rv=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),nv=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),q3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Y3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),X3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),oc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return C(X3,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return C(ev,n,r,o,1);case 3:var n=e.a,a=e.b,o=e.c;return C(U3,n,a,o,1);case 4:var n=e.a,a=e.b,o=e.c;return C(rv,n,a,o,1);case 5:var n=e.a,a=e.b,o=e.c;return C(Y3,n,a,o,1);case 6:var n=e.a,a=e.b,o=e.c;return C(nv,n,a,o,1);case 7:var n=e.a,a=e.b,o=e.c;return C(q3,n,a,o,1);case 8:return e;case 9:return e;default:return e}},ic={$:0},Z3=oe(function(e,r,n,a,o,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,f=Tt(c(u)),m=t(we,f.d9,e),g=t(de,f.d6,r),d=t(we,f.ea,n),b=t(de,f.d7,a),h=t(we,f.eb,o),y=t(de,f.d8,i),P=c,_=v;e=m,r=g,n=d,a=b,o=h,i=y,c=P,l=_;continue e}else return{d6:r,d7:a,d8:i,d9:e,ea:n,eb:o}}),Q3=S(function(e,r,n){var a=Tt(e(r));return Wt(Z3,a.d9,a.d6,a.ea,a.d7,a.eb,a.d8,e,n)}),ma=$(function(e,r){var n=e,a=r;return O(a,n)<1}),av=function(e){return t(ma,e.d6,e.d9)&&t(ma,e.d7,e.ea)&&t(ma,e.d8,e.eb)?e:{d6:t(de,e.d9,e.d6),d7:t(de,e.ea,e.d7),d8:t(de,e.eb,e.d8),d9:t(we,e.d9,e.d6),ea:t(we,e.ea,e.d7),eb:t(we,e.eb,e.d8)}},Sa=function(e){var r=e;return r},tv=function(e){var r=Sa(e),n=r.a,a=r.b,o=r.c,i=Fn(n),c=En(n),l=Wn(n),u=Fn(a),v=En(a),f=Wn(a),m=Fn(o),g=En(o),d=Wn(o);return av({d6:t(de,i,t(de,u,m)),d7:t(de,c,t(de,v,g)),d8:t(de,l,t(de,f,d)),d9:t(we,i,t(we,u,m)),ea:t(we,c,t(we,v,g)),eb:t(we,l,t(we,f,d))})},ov=pm,Ie=function(e){return ov(Na(e))},iv=function(e){var r=e;return r},oo=function(e){return ov(iv(e))},K3=$(function(e,r){var n=e,a=r;return{gn:a.gr*n.dg-a.dg*n.gr,gr:a.dg*n.gn-a.gn*n.dg,dg:a.gn*n.gr-a.gr*n.gn}}),ai=$(function(e,r){var n=e,a=r;return{gn:a.gn-n.gn,gr:a.gr-n.gr,dg:a.dg-n.dg}}),cv=function(e){return e},e1={gn:0,gr:0,dg:0},r1=$(function(e,r){var n=e,a=r,o=t(Xe,K(a.gn),t(Xe,K(a.gr),K(a.dg)));if(o){var i=a.dg/o,c=a.gr/o,l=a.gn/o,u=lr(l*l+c*c+i*i);return{gn:n*l/u,gr:n*c/u,dg:n*i/u}}else return e1}),n1=r1(cv(1)),lv=S(function(e,r,n){var a=t(ai,r,n),o=t(ai,e,r);return n1(t(K3,a,o))}),a1=function(e){var r=Sa(e),n=r.a,a=r.b,o=r.c,i=oo(s(lv,n,a,o));return T({r:i,en:Ie(n)},{r:i,en:Ie(a)},{r:i,en:Ie(o)})},t1=$(function(e,r){return{$:2,a:e,b:r}}),uv=t1({dv:3,dE:0,ed:4}),o1=function(e){if(e.b){var r=e.a,n=e.b,a=uv(t(X,a1,e)),o=s(Q3,tv,r,n);return C(ev,o,e,a,0)}else return ic},Ue=S(function(e,r,n){return T(e,r,n)}),Te=S(function(e,r,n){var a=e,o=r,i=n;return{gn:a,gr:o,dg:i}}),$v=function(){var e=ze(1),r=ze(1),n=ze(1),a=t(ie,-.5,e),o=t(ie,-.5,r),i=t(ie,-.5,n),c=s(Te,i,o,a),l=t(ie,.5,e),u=s(Te,i,o,l),v=t(ie,.5,r),f=s(Te,i,v,a),m=s(Te,i,v,l),g=t(ie,.5,n),d=s(Te,g,o,a),b=s(Te,g,v,a),h=s(Te,g,o,l),y=s(Te,g,v,l);return oc(o1(p([s(Ue,c,b,d),s(Ue,c,f,b),s(Ue,u,h,y),s(Ue,u,y,m),s(Ue,d,b,y),s(Ue,d,y,h),s(Ue,c,m,f),s(Ue,c,u,m),s(Ue,c,d,h),s(Ue,c,h,u),s(Ue,f,y,b),s(Ue,f,m,y)])))}(),Za={$:0},i1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),c1=S(function(e,r,n){var a=r.a,o=r.b,i=r.c,c=e(i),l=e(o),u=e(a),v=oo(s(lv,u,l,c)),f={r:v,en:Ie(u)},m={r:v,en:Ie(l)},g={r:v,en:Ie(c)};return t(L,f,t(L,m,t(L,g,n)))}),cc=function(e){var r=e;return r.G},l1=E(function(e,r,n,a){if(r.$===1)return F;var o=r.a;if(n.$===1)return F;var i=n.a;if(a.$===1)return F;var c=a.a;return Z(s(e,o,i,c))}),pn=4294967295>>>32-ur,xa=_f,u1=S(function(e,r,n){e:for(;;){var a=pn&r>>>e,o=t(xa,a,n);if(o.$){var v=o.a;return t(xa,pn&r,v)}else{var i=o.a,c=e-ur,l=r,u=i;e=c,r=l,n=u;continue e}}}),vv=function(e){return e>>>5<<5},jr=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d;return e<0||O(e,n)>-1?F:O(e,vv(n))>-1?Z(t(xa,pn&e,i)):Z(s(u1,a,e,o))}),lc=function(e){var r=e;return r.al},yo=$(function(e,r){return t(jr,e,lc(r))}),fv=function(e){var r=function(n){var a=n.a,o=n.b,i=n.c;return C(l1,S(function(c,l,u){return T(c,l,u)}),t(yo,a,e),t(yo,o,e),t(yo,i,e))};return t(gn,r,cc(e))},$1=S(function(e,r,n){e:for(;;){var a=t(ji,me,e),o=a.a,i=a.b;if(O(Sr(o),me)<0)return t(Ai,!0,{C:r,o:n,s:o});var c=i,l=t(L,mn(o),r),u=n+1;e=c,r=l,n=u;continue e}}),Pa=function(e){return e.b?s($1,e,x,0):Di},v1=S(function(e,r,n){return e(r(n))}),f1=$(function(e,r){return!t(Gu,t(v1,ig,e),r)}),uc=function(e){var r=e.a;return r},$c=$(function(e,r){var n=uc(e),a=function(o){var i=o.a,c=o.b,l=o.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return t(f1,a,r)?{G:r,al:e}:{G:t(no,a,r),al:e}}),s1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ga=s1({dv:1,dE:3,ed:4}),vt=$(function(e,r){var n=Rn(r),a=Rn(e);return w(T(a.gn,a.gr,a.dg),T(n.gn,n.gr,n.dg))}),_l=s(Va,0,0,0),wo=tr(function(e,r,n,a,o,i){var c=i.a,l=i.b,u=i.c,v=t(Zn,t(vt,e,r),o);if(v.$){var m={r:_l,en:Ie(r)},g={r:_l,en:Ie(e)},d=u+1,b=u;return T(t(L,T(n,b,d),t(L,T(n,d,a),c)),t(L,m,t(L,g,l)),u+2)}else{var f=v.a;return T(t(L,T(n,f,a),c),l,u)}}),d1=_e(function(e,r,n,a,o){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),m=e(l),g=e(c),d=a+2,b=a+1,h=a,y=e,P=r,_=v,z=a+3,A=Ge(wo,f,g,d,h,r,Ge(wo,m,f,b,d,r,Ge(wo,g,m,h,b,r,o)));e=y,r=P,n=_,a=z,o=A;continue e}else{var I=o,H=I.a,G=I.b;return w(H,ve(G))}}),m1=_e(function(e,r,n,a,o){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),m=e(l),g=e(c),d=n+2,b=n+1,h=n,y=s(cn,t(vt,g,f),d,s(cn,t(vt,f,m),b,s(cn,t(vt,m,g),h,o))),P=t(L,T(h,b,d),a),_=e,z=v,A=n+3,I=P,H=y;e=_,r=z,n=A,a=I,o=H;continue e}else return T(a,o,n)}),nn=S(function(e,r,n){var a=fv(n),o=s(Ir,c1(r),x,a),i=k(m1,r,a,0,x,Qt),c=i.a,l=i.b,u=i.c,v=k(d1,r,l,a,0,T(c,x,u)),f=v.a,m=v.b,g=Hi(m)?o:le(o,m);return s(i1,e,t($c,Pa(g),f),t(Ga,g,f))}),ti=function(e){return{G:t(X,function(r){return T(3*r,3*r+1,3*r+2)},t(sn,0,sr(e)-1)),al:Pa(Ee(t(X,function(r){var n=r.a,a=r.b,o=r.c;return p([n,a,o])},e)))}},sv=function(e){switch(e.$){case 0:return Za;case 1:var a=e.a,r=e.b,n=t(X,Sa,r);return s(nn,a,_r,ti(n));case 2:var a=e.a,r=e.b,n=t(X,Sa,r);return s(nn,a,_r,ti(n));case 3:var a=e.a,o=e.b;return s(nn,a,_r,o);case 4:var a=e.a,o=e.b;return s(nn,a,function(i){return i.en},o);case 5:var a=e.a,o=e.b;return s(nn,a,function(i){return i.en},o);case 6:var a=e.a,o=e.b;return s(nn,a,function(i){return i.en},o);case 7:var a=e.a,o=e.b;return s(nn,a,function(i){return i.en},o);case 8:return Za;case 9:return Za;default:return Za}},yl=sv($v),vc=function(e){var r=e;return r.aS},dv={$:0},M=dv,Ce=$(function(e,r){return{$:1,a:e,b:r}}),g1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bN"}},p1=1029,b1=function(e){return{$:5,a:e}},mv=function(e){var r=e;return b1(r)},h1=mv(p1),_1=1028,y1=mv(_1),Oe=S(function(e,r,n){return r===1?e?t(L,h1,n):t(L,y1,n):n}),gv={src:`
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
    `,attributes:{position:"en",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},So=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){return k(ce,s(Oe,l,a,m),gv,g1,n,{bN:e,b:c,c:i,d:v,e:o,f:u})}))}),fc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aC"}},pv={src:`
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
    `,attributes:{position:"en"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},zr=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){return k(ce,s(Oe,l,a,m),pv,fc,n,{aC:e,b:c,c:i,d:v,e:o,f:u})}))}),bv=$(function(e,r){return{$:3,a:e,b:r}}),w1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aC",pointRadius:"b3",sceneProperties:"e"}},hv={src:`
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
    `,attributes:{position:"en"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b3",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},S1=E(function(e,r,n,a){return t(bv,n,oe(function(o,i,c,l,u,v,f,m){return k(ce,m,hv,w1,a,{aC:e,b:c,c:i,b3:r,d:v,e:o,f:u})}))}),sc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aV",sceneProperties:"e"}},Ha=function(e){var r=e;return r},io=bm,Lr=_e(function(e,r,n,a,o){return t(Ce,n,oe(function(i,c,l,u,v,f,m,g){return k(ce,s(Oe,u,o,g),pv,sc,a,{aV:t(io,Ha(r),e),b:l,c,d:f,e:i,f:v})}))}),x1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aV",pointRadius:"b3",sceneProperties:"e"}},P1=_e(function(e,r,n,a,o){return t(bv,a,oe(function(i,c,l,u,v,f,m,g){return k(ce,g,hv,x1,o,{aV:t(io,Ha(r),e),b:l,c,b3:n,d:f,e:i,f:v})}))}),_v={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bn",lights34:"bW",lights56:"bX",lights78:"bY",materialColor:"cC",sceneProperties:"e",viewMatrix:"f"}},yv={src:`
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
    `,attributes:{normal:"r",position:"en"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qa=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){var g=f.a,d=f.b;return k(ce,s(Oe,l,a,m),yv,_v,n,{S:d,bn:g.bn,bW:g.bW,bX:g.bX,bY:g.bY,cC:e,b:c,c:i,d:v,e:o,f:u})}))}),wv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bn",lights34:"bW",lights56:"bX",lights78:"bY",materialColorTexture:"cD",normalMapTexture:"a2",sceneProperties:"e",useNormalMap:"a8",viewMatrix:"f"}},Sv={src:`
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
    `,attributes:{normal:"r",position:"en",tangent:"eD",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},C1=tr(function(e,r,n,a,o,i){return t(Ce,a,oe(function(c,l,u,v,f,m,g,d){var b=g.a,h=g.b;return k(ce,s(Oe,v,i,d),Sv,wv,o,{S:h,bn:b.bn,bW:b.bW,bX:b.bX,bY:b.bY,cD:e,b:u,c:l,a2:r,d:m,e:c,a8:n,f})}))}),xv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cg",constantBaseColor:"cj",constantMetallic:"ck",constantRoughness:"cl",enabledLights:"S",lights12:"bn",lights34:"bW",lights56:"bX",lights78:"bY",metallicTexture:"cH",normalMapTexture:"a2",roughnessTexture:"c2",sceneProperties:"e",useNormalMap:"a8",viewMatrix:"f"}},k1=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return t(Ce,u,oe(function(m,g,d,b,h,y,P,_){var z=P.a,A=P.b;return k(ce,s(Oe,b,f,_),Sv,xv,v,{cg:e,cj:r,ck:i,cl:a,S:A,bn:z.bn,bW:z.bW,bX:z.bX,bY:z.bY,cH:o,b:d,c:g,a2:c,d:y,c2:n,e:m,a8:l,f:h})}))}}}}}}}}}}},Pv={src:`
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
    `,attributes:{},uniforms:{baseColor:"cf",enabledLights:"S",lights12:"bn",lights34:"bW",lights56:"bX",lights78:"bY",metallic:"cG",roughness:"c1",sceneProperties:"e",viewMatrix:"f"}},Ka=tr(function(e,r,n,a,o,i){return t(Ce,a,oe(function(c,l,u,v,f,m,g,d){var b=g.a,h=g.b;return k(ce,s(Oe,v,i,d),yv,Pv,o,{cf:e,S:h,bn:b.bn,bW:b.bW,bX:b.bX,bY:b.bY,cG:n,b:u,c:l,d:m,c1:r,e:c,f})}))}),z1=function(e){return{$:0,a:e}},wl=$(function(e,r){return{$:1,a:e,b:r}}),ga=$(function(e,r){if(r.$){var n=r.a.F;return w(n,1)}else return r.a,w(e,0)}),L1=function(e){return C(aa,xn(e),Pn(e),Cn(e),1)},dc=C(aa,0,0,0,0),ft=$(function(e,r){if(r.$){var a=r.a.F;return w(a,dc)}else{var n=r.a;return w(e,L1(n))}}),Cv=$(function(e,r){var n=w(e,r);if(n.a.$){var o=n.a.a.F;return t(wl,w(o,dc),t(ga,o,r))}else if(n.b.$){var o=n.b.a.F;return t(wl,t(ft,o,e),t(ga,o,r))}else{var a=n.a.a;return n.b.a,z1(a)}}),T1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),et=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),M1=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),D1=function(e){return t(Ye,e,1)},oi=t(Ye,0,0),Tn=$(function(e,r){if(r.$){var a=r.a.F;return w(a,oi)}else{var n=r.a;return w(e,D1(n))}}),kv=E(function(e,r,n,a){var o=C(M1,e,r,n,a);if(o.a.$){var u=o.a.a.F;return C(et,w(u,dc),t(Tn,u,r),t(Tn,u,n),t(ga,u,a))}else if(o.b.$){var u=o.b.a.F;return C(et,t(ft,u,e),w(u,oi),t(Tn,u,n),t(ga,u,a))}else if(o.c.$){var u=o.c.a.F;return C(et,t(ft,u,e),t(Tn,u,r),w(u,oi),t(ga,u,a))}else if(o.d.$){var u=o.d.a.F;return C(et,t(ft,u,e),t(Tn,u,r),t(Tn,u,n),w(u,1))}else{var i=o.a.a,c=o.b.a,l=o.c.a;return o.d.a,s(T1,i,c,l)}}),j1={src:`
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
    `,attributes:{},uniforms:{backlight:"cc",colorTexture:"bN",sceneProperties:"e"}},xo=_e(function(e,r,n,a,o){return t(Ce,n,oe(function(i,c,l,u,v,f,m,g){return k(ce,s(Oe,u,o,g),gv,j1,a,{cc:Ha(r),bN:e,b:l,c,d:f,e:i,f:v})}))}),zv={src:`
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
    `,attributes:{normal:"r",position:"en",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},A1=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){var g=f.a,d=f.b;return k(ce,s(Oe,l,a,m),zv,wv,n,{S:d,bn:g.bn,bW:g.bW,bX:g.bX,bY:g.bY,cD:e,b:c,c:i,a2:e,d:v,e:o,a8:0,f:u})}))}),B1=di(function(e,r,n,a,o,i,c,l,u){return t(Ce,c,oe(function(v,f,m,g,d,b,h,y){var P=h.a,_=h.b;return k(ce,s(Oe,g,u,y),zv,xv,l,{cg:e,cj:r,ck:i,cl:a,S:_,bn:P.bn,bW:P.bW,bX:P.bX,bY:P.bY,cH:o,b:m,c:f,a2:e,d:b,c2:n,e:v,a8:0,f:d})}))}),Ca=S(function(e,r,n){var a=e,o=r;return n<=.5?a+n*(o-a):o+(1-n)*(a-o)}),F1=function(e){var r=e;return s(Ca,r.d9,r.d6,.5)},E1=function(e){var r=e;return s(Ca,r.ea,r.d7,.5)},W1=function(e){var r=e;return s(Ca,r.eb,r.d8,.5)},V1=function(e){return s(Te,F1(e),E1(e),W1(e))},q=function(e){var r=I$(e),n=r.a,a=r.b,o=r.c;return{eY:Na(V1(e)),fj:n/2,fk:a/2,fl:o/2}},mc=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.F;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var o=r.a,c=r.c,a=r.d;return C(So,l,q(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return C(So,l,q(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return C(So,l,q(o),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var o=r.a,c=r.c,a=r.d;return C(zr,n,q(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return C(zr,n,q(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return C(zr,n,q(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return C(zr,n,q(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return C(zr,n,q(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return C(zr,n,q(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return C(zr,n,q(o),c,a);case 8:var o=r.a,c=r.c;return C(zr,n,q(o),c,0);case 9:var o=r.a,c=r.c;return C(zr,n,q(o),c,0);default:var o=r.a,i=r.b,c=r.d;return C(S1,n,i,q(o),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.F,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var o=r.a,c=r.c,a=r.d;return k(xo,l,v,q(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return k(xo,l,v,q(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return k(xo,l,v,q(o),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var o=r.a,c=r.c,a=r.d;return k(Lr,u,v,q(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return k(Lr,u,v,q(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return k(Lr,u,v,q(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return k(Lr,u,v,q(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return k(Lr,u,v,q(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return k(Lr,u,v,q(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return k(Lr,u,v,q(o),c,a);case 8:var o=r.a,c=r.c;return k(Lr,u,v,q(o),c,0);case 9:var o=r.a,c=r.c;return k(Lr,u,v,q(o),c,0);default:var o=r.a,i=r.b,c=r.d;return k(P1,u,v,i,q(o),c)}}case 2:e.a;var f=e.b,H=e.c,m=t(Cv,f,H);if(m.$){var b=m.a,h=b.a;b.b;var y=m.b,P=y.a,_=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var o=r.a,c=r.c,d=r.d;return C(A1,h,q(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return Ge(C1,h,P,_,q(o),c,d);case 8:return M;case 9:return M;default:return M}}else{var g=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var o=r.a,c=r.c,d=r.d;return C(Qa,g,q(o),c,d);case 3:return M;case 4:var o=r.a,c=r.c,d=r.d;return C(Qa,g,q(o),c,d);case 5:return M;case 6:var o=r.a,c=r.c,d=r.d;return C(Qa,g,q(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return C(Qa,g,q(o),c,d);case 8:return M;case 9:return M;default:return M}}default:e.a;var z=e.b,A=e.c,I=e.d,H=e.e,G=C(kv,z,A,I,H);if(G.$){var Q=G.a,ae=Q.a,ge=Q.b,ye=G.b,fe=ye.a,Se=ye.b,Je=G.c,Re=Je.a,Jr=Je.b,Ur=G.d,P=Ur.a,_=Ur.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var o=r.a,c=r.c,a=r.d;return df(B1,ae,ge,fe,Se,Re,Jr,q(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return k1(ae)(ge)(fe)(Se)(Re)(Jr)(P)(_)(q(o))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var J=G.a,U=G.b,R=G.c;switch(r.$){case 0:return M;case 1:return M;case 2:var o=r.a,c=r.c,a=r.d;return Ge(Ka,J,U,R,q(o),c,a);case 3:return M;case 4:var o=r.a,c=r.c,a=r.d;return Ge(Ka,J,U,R,q(o),c,a);case 5:return M;case 6:var o=r.a,c=r.c,a=r.d;return Ge(Ka,J,U,R,q(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return Ge(Ka,J,U,R,q(o),c,a);case 8:return M;case 9:return M;default:return M}}}}),Po=function(e){var r=e;return r.gn},Co=function(e){var r=e;return r.gr},ko=function(e){var r=e;return r.dg},R1=function(e){var r=e,n=ko(r.dh),a=Co(r.dh),o=Po(r.dh),i=ko(r.df),c=Co(r.df),l=Po(r.df),u=ko(r.de),v=Co(r.de),f=Po(r.de);return f*c*n+v*i*o+u*l*a-u*c*o-v*l*n-f*i*a>0},N1=function(e){var r=Na(ea(e)),n=ar(wn(e)),a=ar(yn(e)),o=ar(_n(e));return{dI:R1(e),t:o.gn,u:o.gr,v:o.dg,w:a.gn,x:a.gr,y:a.dg,z:n.gn,A:n.gr,B:n.dg,K:r.gn,L:r.gr,M:r.dg,b8:1}},Mn=$(function(e,r){return{$:5,a:e,b:r}}),Lv=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,o=n.b,i=t(F$,a,e);return t(Mn,i,o);case 1:return t(Mn,e,n);case 3:return t(Mn,e,n);case 2:return t(Mn,e,n);default:return t(Mn,e,n)}}),Tv=$(function(e,r){return t(Lv,N1(e),r)}),co=function(e){return{$:2,a:e}},G1=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=r.eY;return{eY:{gn:n*i.gn,gr:a*i.gr,dg:o*i.dg},fj:n*r.fj,fk:a*r.fk,fl:o*r.fl}}),H1=ym,I1=_m,Sl=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,m=e.b,g=e.c,d=I1(a),b=d.gn,h=d.gr,y=d.dg,P=d.eL,_=H1({eL:P,gn:b*f,gr:h*m,dg:y*g});return Wt(r,n,_,o,i,c,l,u,v)}}}}}}}}}},ii=$(function(e,r){switch(r.$){case 0:return dv;case 5:var n=r.a,a=r.b;return t(Mn,n,t(ii,e,a));case 1:var o=r.a,i=r.b;return t(Ce,t(G1,e,o),t(Sl,e,i));case 3:return r;case 2:var i=r.a;return co(t(Sl,e,i));default:var c=r.a;return U$(t(X,ii(e),c))}}),gc=$(function(e,r){var n=r;return t(ii,e,n)}),pc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Mv=7683,Dv=7682,O1=s(Ki,{cB:0,c_:0,dd:15},{bi:Fe,bv:Hn,bD:Fe,bE:Mv},{bi:Fe,bv:Hn,bD:Fe,bE:Dv}),J1=s(Ki,{cB:0,c_:0,dd:15},{bi:Fe,bv:Hn,bD:Fe,bE:Dv},{bi:Fe,bv:Hn,bD:Fe,bE:Mv}),bc=$(function(e,r){return e?t(L,J1,r):t(L,O1,r)}),U1={src:`
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
    `,attributes:{normal:"r",position:"en"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},q1=function(e){if(e.$){var r=e.c;return Z(oe(function(n,a,o,i,c,l,u,v){return k(ce,t(bc,i,v),U1,pc,r,{b:o,c:a,d:l,e:n,b9:u,f:c})}))}else return F},Dt=function(e){var r=q1(e);if(r.$)return M;var n=r.a;return co(n)},Y1=E(function(e,r,n,a){var o=t(mc,n,$v),i=function(){var f=w(e,r);return f.a?f.b?Ra(p([o,Dt(yl)])):o:f.b?Dt(yl):M}(),c=vc(a),l=c.a,u=c.b,v=c.c;return t(Tv,tc(a),t(gc,T(l,u,v),i))}),X1=$(function(e,r){return C(Y1,!0,!0,e,r)}),ci=function(e){return{$:0,a:e}},jv=$(function(e,r){return{$:0,a:e,b:r}}),Z1=function(e){var r=Gi(e),n=r.cZ,a=r.cn,o=r.ch;return s(Va,n,a,o)},Av=function(e){return t(jv,0,ci(Z1(e)))},Q1=function(e){var r=e;return r.m},pa=function(e){var r=e;return Rr(r)},K1=$(function(e,r){var n=e.en,a=e.r;return t(L,{r:oo(a),en:Ie(n)},r)}),e_=Et(function(e,r,n,a,o,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Cn(l.en),f=Pn(l.en),m=xn(l.en),g=t($t,e,m),d=t(Xe,r,m),b=t($t,n,f),h=t(Xe,a,f),y=t($t,o,v),P=t(Xe,i,v),_=u;e=g,r=d,n=b,a=h,o=y,i=P,c=_;continue e}else return av({d6:r,d7:a,d8:i,d9:e,ea:n,eb:o})}),Bv=$(function(e,r){var n=Cn(e.en),a=Pn(e.en),o=xn(e.en);return mi(e_,o,o,a,a,n,n,r)}),r_=function(e){var r=s(_u,K1,x,lc(e));if(r.b){var n=r.a,a=r.b,o=t(Ga,r,cc(e)),i=t(Bv,n,a);return C(rv,i,e,o,0)}else return ic},xl=$(function(e,r){var n=e,a=r,o=n.df,i=o,c=n.de,l=c;return{gn:a.gn*l.gn+a.gr*i.gn,gr:a.gn*l.gr+a.gr*i.gr,dg:a.gn*l.dg+a.gr*i.dg}}),jt=function(e){var r=e;return Nr(r)},va=function(e){var r=e;return r},li=function(e){return Ze(2*Er*e)},Pl=d$({cN:Or,de:Ji,df:ac}),Fv=function(){var e=72,r=t(T$,e,li(1)),n=ze(1),a=va(m$),o=va(M$),i=ze(1),c=t(ie,.5,i),l=s(Te,$e,$e,c),u=t(ie,-.5,i),v=s(Te,$e,$e,u),f=function(d){var b=t(ie,d,r),h=va(t(xl,Pl,ri(b))),y=t(ie,pa(b),n),P=t(ie,jt(b),n),_=s(Te,y,P,c),z=s(Te,y,P,u),A=t(xt,e,d+1),I=t(ie,A,r),H=va(t(xl,Pl,ri(I))),G=t(ie,pa(I),n),J=t(ie,jt(I),n),U=s(Te,G,J,u),R=s(Te,G,J,c);return p([T({r:o,en:v},{r:o,en:U},{r:o,en:z}),T({r:h,en:z},{r:H,en:U},{r:H,en:R}),T({r:h,en:z},{r:H,en:R},{r:h,en:_}),T({r:a,en:l},{r:a,en:_},{r:a,en:R})])},m=t(X,f,t(sn,0,e-1)),g=ti(Ee(m));return oc(r_(g))}(),Cl=sv(Fv),n_=function(e){var r=e,n=K(r.dg),a=K(r.gr),o=K(r.gn);if(O(o,a)<1)if(O(o,n)<1){var i=lr(r.dg*r.dg+r.gr*r.gr);return{gn:0,gr:-r.dg/i,dg:r.gr/i}}else{var i=lr(r.gr*r.gr+r.gn*r.gn);return{gn:-r.gr/i,gr:r.gn/i,dg:0}}else if(O(a,n)<1){var i=lr(r.dg*r.dg+r.gn*r.gn);return{gn:r.dg/i,gr:0,dg:-r.gn/i}}else{var i=lr(r.gn*r.gn+r.gr*r.gr);return{gn:-r.gr/i,gr:r.gn/i,dg:0}}},a_=function(e){var r=n_(e),n=r,a=n,o=e,i=o,c={gn:i.gr*a.dg-i.dg*a.gr,gr:i.dg*a.gn-i.gn*a.dg,dg:i.gn*a.gr-i.gr*a.gn};return w(r,c)},t_=function(e){var r=Oi(e),n=a_(r),a=n.a,o=n.b;return ra({cN:L$(e),de:a,df:o,dh:r})},o_=function(e){var r=e;return r.fz},i_=function(e){var r=e;return r.fS},c_=E(function(e,r,n,a){var o=t_(Q1(a)),i=t(mc,n,Fv),c=function(){var m=w(e,r);return m.a?m.b?Ra(p([i,Dt(Cl)])):i:m.b?Dt(Cl):M}(),l=i_(a),u=l,v=o_(a),f=v;return t(Tv,o,t(gc,T(u,u,f),c))}),l_=$(function(e,r){return C(c_,!0,!0,e,r)}),kl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bA",viewMatrix:"f"}},fa=function(e){var r=Sa(e),n=r.a,a=r.b,o=r.c,i=Rn(n),c=Rn(a),l=Rn(o);return pr({dR:i.gn,dS:c.gn,dT:l.gn,dU:0,dV:i.gr,dW:c.gr,dX:l.gr,dY:0,dZ:i.dg,d_:c.dg,d$:l.dg,d0:0,d1:0,d2:0,d3:0,d4:0})},rt=uv(p([T({c7:0},{c7:1},{c7:2})])),u_=$(function(e,r){var n=tv(r),a=q(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.F,M;var o=e.b.a;return t(Ce,a,oe(function(_,z,A,I,H,G,J,U){return k(ce,s(Oe,I,0,U),kl,fc,rt,{aC:o,b:A,c:z,d:G,e:_,bA:fa(r),f:H})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return t(Ce,a,oe(function(_,z,A,I,H,G,J,U){return k(ce,s(Oe,I,0,U),kl,sc,rt,{aV:t(io,Ha(c),i),b:A,c:z,d:G,e:_,bA:fa(r),f:H})}));case 2:e.a;var l=e.b,d=e.c,u=t(Cv,l,d);if(u.$)return M;var v=u.a;return t(Ce,a,oe(function(_,z,A,I,H,G,J,U){var R=J.a,Q=J.b;return k(ce,s(Oe,I,0,U),zl,_v,rt,{S:Q,bn:R.bn,bW:R.bW,bX:R.bX,bY:R.bY,cC:v,b:A,c:z,d:G,e:_,bA:fa(r),f:H})}));default:e.a;var f=e.b,m=e.c,g=e.d,d=e.e,b=C(kv,f,m,g,d);if(b.$)return M;var h=b.a,y=b.b,P=b.c;return t(Ce,a,oe(function(_,z,A,I,H,G,J,U){var R=J.a,Q=J.b;return k(ce,s(Oe,I,0,U),zl,Pv,rt,{cf:h,S:Q,bn:R.bn,bW:R.bW,bX:R.bX,bY:R.bY,cG:P,b:A,c:z,d:G,c1:y,e:_,bA:fa(r),f:H})}))}}),$_=function(){var e=p([{a7:t(Ye,0,1)},{a7:t(Ye,1,1)},{a7:t(Ye,2,1)},{a7:t(Ye,0,-1)},{a7:t(Ye,1,-1)},{a7:t(Ye,2,-1)}]),r=p([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return t(Ga,e,r)}(),v_={src:`
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
    `,attributes:{triangleShadowVertex:"a7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",triangleVertexPositions:"bA",viewMatrix:"f"}},Ll=function(e){return co(oe(function(r,n,a,o,i,c,l,u){return k(ce,t(bc,o,u),v_,pc,$_,{b:a,c:n,d:c,e:r,b9:l,bA:fa(e),f:i})}))},f_=E(function(e,r,n,a){var o=t(u_,n,a),i=w(e,r);return i.a?i.b?Ra(p([o,Ll(a)])):o:i.b?Ll(a):M}),s_=$(function(e,r){return C(f_,!0,!0,e,r)}),hc=function(e){var r=e;return r},d_=$(function(e,r){var n=Wn(r),a=Wn(e),o=En(r),i=En(e),c=Fn(r),l=Fn(e);return{d6:t(de,l,c),d7:t(de,i,o),d8:t(de,a,n),d9:t(we,l,c),ea:t(we,i,o),eb:t(we,a,n)}}),m_=function(e){var r=hc(e),n=r.a,a=r.b;return t(d_,n,a)},Tl={src:`
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
    `,attributes:{lineSegmentVertex:"dQ"},uniforms:{lineSegmentEndPoint:"dO",lineSegmentStartPoint:"dP",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},g_=$(function(e,r){return{$:1,a:e,b:r}}),p_=g_({dv:2,dE:0,ed:1}),Ml=p_(p([w({dQ:0},{dQ:1})])),b_=$(function(e,r){var n=m_(r),a=q(n),o=hc(r),i=o.a,c=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.F,M;var l=e.b.a;return t(Ce,a,oe(function(v,f,m,g,d,b,h,y){return k(ce,y,Tl,fc,Ml,{aC:l,dO:Ie(c),dP:Ie(i),b:m,c:f,d:b,e:v,f:d})}));case 1:if(e.b.$)return M;var l=e.b.a,u=e.c;return t(Ce,a,oe(function(f,m,g,d,b,h,y,P){return k(ce,P,Tl,sc,Ml,{aV:t(io,Ha(u),l),dO:Ie(c),dP:Ie(i),b:g,c:m,d:h,e:f,f:b})}));case 2:return M;default:return M}}),h_=$(function(e,r){return t(b_,e,r)}),_c=function(e){var r=e;return r.eY},yc=function(e){var r=e;return r.fS},ui=$(function(e,r){var n=e,a=r;return n/a}),__=_e(function(e,r,n,a,o){e:for(;;){var i=a(r/n),c=t(L,i,o);if(he(r,e))return c;var l=e,u=r-1,v=n,f=a,m=c;e=l,r=u,n=v,a=f,o=m;continue e}}),Dl=$(function(e,r){return e<1?x:k(__,0,e,e,r,x)}),y_=$(function(e,r){var n=e.en,a=e.r,o=e.O,i=o,c=i.a,l=i.b;return t(L,{r:oo(a),en:Ie(n),O:t(Ye,c,l)},r)}),w_=function(e){var r=s(_u,y_,x,lc(e));if(r.b){var n=r.a,a=r.b,o=t(Ga,r,cc(e)),i=t(Bv,n,a);return C(nv,i,e,o,0)}else return ic},wc=$(function(e,r){var n=e,a=r,o=Rr(a);return{gn:o*Rr(n),gr:o*Nr(n),dg:Nr(a)}}),S_=function(){var e=ze(1),r=72,n=t(sn,0,r-1),a=t(Dl,r,t(Ca,$e,li(1))),o=Ti(r/2),i=t(sn,0,o-1),c=t(Dl,o,t(Ca,ua(90),ua(-90))),l=Pa(Ee(t(X,function(f){return t(X,function(m){return{r:va(t(wc,f,m)),en:s(Te,t(ie,pa(m)*pa(f),e),t(ie,pa(m)*jt(f),e),t(ie,jt(m),e)),O:w(t(ui,f,li(1)),t(ui,t($n,ua(90),m),ua(180)))}},c)},a))),u=$(function(f,m){return f*(o+1)+m}),v=Ee(t(X,function(f){return Ee(t(X,function(m){var g=t(u,f+1,m),d=t(u,f,m),b=t(u,f+1,m+1),h=t(u,f,m+1);return p([T(h,b,g),T(h,g,d)])},i))},n));return oc(w_(t($c,l,v)))}(),At=72,nt=2*At,x_=$(function(e,r){e:for(;;){var n=nt+1,a=t(xt,nt,2*e+3),o=t(xt,nt,2*e+2),i=2*e+1,c=2*e,l=nt,u=t(L,T(l,c,o),t(L,T(c,a,o),t(L,T(c,i,a),t(L,T(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),P_=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),C_=$(function(e,r){e:for(;;){var n=s(P_,0,2*Er,e/At),a={bG:n,b0:0,b7:1},o={bG:n,b0:1,b7:1},i=t(L,a,t(L,o,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),k_=function(){var e=t(C_,At-1,p([{bG:0,b0:0,b7:0},{bG:0,b0:1,b7:0}])),r=t(x_,At-1,x);return t(Ga,e,r)}(),z_={src:`
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
    `,attributes:{angle:"bG",offsetScale:"b0",radiusScale:"b7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},jl=function(e){return co(oe(function(r,n,a,o,i,c,l,u){return k(ce,t(bc,!0,u),z_,pc,k_,{aC:s(Va,0,0,1),b:a,c:n,d:c,e:r,b9:l,f:i})}))},L_=function(e){var r=iv(e);return{dI:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.gn,L:r.gr,M:r.dg,b8:1}},T_=$(function(e,r){return t(Lv,L_(e),r)}),M_=E(function(e,r,n,a){var o=t(mc,n,S_),i=function(){var u=w(e,r);return u.a?u.b?Ra(p([o,jl()])):o:u.b?jl():M}(),c=yc(a),l=c;return t(T_,t(ai,Or,_c(a)),t(gc,T(l,l,l),i))}),D_=$(function(e,r){return C(M_,!0,!0,e,r)}),j_=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ev=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),A_=_e(function(e,r,n,a,o){return{$:3,a:e,b:r,c:n,d:a,e:o}}),B_=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return t(jv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return s(j_,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return s(Ev,n,a,c);default:var n=e.a,a=e.b,o=e.c,i=e.d,c=e.e;return k(A_,n,a,o,i,c)}},F_=B_,Wv=function(e){switch(e.$){case 0:var o=e.a,r=e.b;return p([t(X1,o,r)]);case 1:var o=e.a,n=e.b;return p([t(s_,o,n)]);case 3:var o=e.a,a=e.b;return p([t(D_,F_(o),a)]);case 2:var o=e.a,i=e.b;return p([t(l_,o,i)]);case 4:var c=e.a,l=e.b;return p([t(h_,Av(c),l)]);default:var u=e.a;return t(ro,Wv,u)}},Vv=function(e){return t(ro,Wv,e)},E_=$(function(e,r){return O3({eO:e.eO,eS:A$(e.eT),an:e.an,$7:ze(e.$7),bf:e.bf,aS:w(Mt(Qe(e.a4.gl)),Mt(Qe(e.a4.fn))),aX:Vv(r),fe:e.fe,fB:e.fB,gb:e.gb,gk:e.gk})}),Rv=function(e){return e},W_=$(function(e,r){var n=e,a=ar(r.e6),o=a.gn,i=a.gr,c=a.dg,l=t(to,r.bS,r.aQ),u=l;return{bI:Cn(u),eX:n,bQ:Pn(u),cW:0,b6:xn(u),c8:1,gn:-o,gr:-i,dg:-c}}),V_=function(e){return t(W_,Rv(!0),{aQ:e.aQ,e6:t(wc,Ze(e.bH),Ze(e.bO)),bS:e.bS})},lo=C(kr,52/255,101/255,164/255,1),R_=C(kr,115/255,210/255,22/255,1),Sc=function(e){return{$:5,a:e}},He=function(e){return Sc(e)},xc=C(kr,204/255,0/255,0/255,1),Pc=$(function(e,r){return{$:2,a:e,b:r}}),N_=S(function(e,r,n){return{m:t(Pr,e,r),fz:De(n.fz),fS:De(n.fS)}}),Nv=S(function(e,r,n){return t(Pc,e,s(N_,Or,Z$,{fz:ze(n),fS:ze(r)}))}),zo=function(e){return s(Yi,0,1,e<=.04045?e/12.92:t(Yr,(e+.055)/1.055,2.4))},G_=function(e){var r=Gi(e),n=r.cZ,a=r.cn,o=r.ch;return s(Va,zo(n),zo(a),zo(o))},H_=function(e){return s(Ev,0,ci(G_(e)),ci(0))},vn=$(function(e,r){return t(Kn,"unlit",e)?Av(r):H_(r)}),Gv=$(function(e,r){return{$:0,a:e,b:r}}),Hv=$(function(e,r){return{$:4,a:e,b:r}}),Cc=$(function(e,r){return{$:3,a:e,b:r}}),kc=$(function(e,r){return{$:1,a:e,b:r}}),I_=S(function(e,r,n){return{gn:e,gr:r,dg:n}}),O_=$(function(e,r){return{eR:t(f$,e,tc(r)),aS:vc(r)}}),J_=$(function(e,r){var n=r;return t(Pr,t(na,e,n.cN),n.e6)}),U_=$(function(e,r){var n=r;return{m:t(J_,e,n.m),fz:n.fz,fS:n.fS}}),q_=function(e){return e},Iv=$(function(e,r){var n=hc(r),a=n.a,o=n.b;return q_(w(e(a),e(o)))}),Y_=$(function(e,r){return t(Iv,na(e),r)}),zc=$(function(e,r){return{eY:r,fS:De(e)}}),X_=$(function(e,r){return t(zc,yc(r),t(na,e,_c(r)))}),Ov=$(function(e,r){var n=r,a=n.a,o=n.b,i=n.c;return T(e(a),e(o),e(i))}),Z_=$(function(e,r){return t(Ov,na(e),r)}),uo=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=s(I_,n,a,o);switch(r.$){case 0:var f=r.a,c=r.b;return t(Gv,f,t(O_,i,c));case 1:var f=r.a,l=r.b;return t(kc,f,t(Z_,i,l));case 3:var f=r.a,u=r.b;return t(Cc,f,t(X_,i,u));case 2:var f=r.a,v=r.b;return t(Pc,f,t(U_,i,v));case 4:var f=r.a,m=r.b;return t(Hv,f,t(Y_,i,m));default:var g=r.a;return Sc(t(X,uo(T(n,a,o)),g))}}),fn=function(e){return uo(T(e,0,0))},$o=function(e){return uo(T(0,e,0))},Jv=function(e){return uo(T(0,0,e))},Q_=S(function(e,r,n){return{eR:s(v$,e,r,tc(n)),aS:vc(n)}}),K_=$(function(e,r){var n=t(ja,e,r),a=t(ct,e,r);return function(o){var i=o;return t(Pr,n(i.cN),a(i.e6))}}),e2=S(function(e,r,n){var a=n;return{m:s(K_,e,r,a.m),fz:a.fz,fS:a.fS}}),r2=S(function(e,r,n){return t(Iv,t(ja,e,r),n)}),n2=S(function(e,r,n){return t(zc,yc(n),s(ja,e,r,_c(n)))}),a2=S(function(e,r,n){return t(Ov,t(ja,e,r),n)}),Lc=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return t(Gv,l,s(Q_,e,r,a));case 1:var l=n.a,o=n.b;return t(kc,l,s(a2,e,r,o));case 3:var l=n.a,i=n.b;return t(Cc,l,s(n2,e,r,i));case 2:var l=n.a,c=n.b;return t(Pc,l,s(e2,e,r,c));case 4:var l=n.a,u=n.b;return t(Hv,l,s(r2,e,r,u));default:var v=n.a;return Sc(t(X,t(Lc,e,r),v))}}),t2=t(Pr,Or,ac),Uv=$(function(e,r){return s(Lc,t2,Ze(e),r)}),o2=t(Pr,Or,Zt),$i=$(function(e,r){return s(Lc,o2,Ze(e),r)}),i2=Nf,c2=Hf,l2=function(e){var r=e.a,n=e.b,a=e.c;return lr(t(Yr,r,2)+t(Yr,n,2)+t(Yr,a,2))},u2=function(e){var r=e.a,n=e.b,a=e.c,o=l2(T(r,n,a));return{bH:t(c2,n,r),fr:i2(a/o),fS:o}},st=E(function(e,r,n,a){var o=a.a,i=a.b,c=T(i.gn-o.gn,i.gr-o.gr,i.dg-o.dg),l=c.a,u=c.b,v=c.c,f=u2(T(l,u,v)),m=f.fS,g=f.bH,d=f.fr;return t(Jv,o.dg,t($o,o.gr,t(fn,o.gn,t($i,g,t(Uv,d-Gr(90),t(fn,m/2,t($i,Gr(90),s(Nv,t(vn,e,r),n/2,m))))))))}),$2=function(e){return He(p([C(st,e,xc,.1,w(s(Ne,0,0,0),s(Ne,10,0,0))),C(st,e,R_,.1,w(s(Ne,0,0,0),s(Ne,0,10,0))),C(st,e,lo,.1,w(s(Ne,0,0,0),s(Ne,0,0,10)))]))},v2=C(kr,78/255,154/255,6/255,1),vi=$(function(e,r){return t(Cc,e,t(zc,ze(r),Or))}),qv=E(function(e,r,n,a){var o=a.a,i=a.b;return C(st,e,r,n,w(s(Ne,o.gn,o.gr,0),s(Ne,i.gn,i.gr,0)))}),f2=C(kr,237/255,212/255,0/255,1),s2=$(function(e,r){var n=Ba(r.k).cd,a=t($i,n.e7,He(p([t(Uv,n.fZ,He(p([t(fn,-.02,t(vi,t(vn,e,xc),n.aR.fS)),t(fn,.02,t(vi,t(vn,e,f2),n.aR.fS))]))),s(Nv,t(vn,e,Ku),.2,1.1)]))),o=n.gh,i=o.a,c=o.b,l=t(Kn,"draw speed vector",e)?C(qv,e,v2,.2,w(t(yr,0,0),t(yr,.3*i,.3*c))):He(x);return t($o,n.aR.bK.gr,t(fn,n.aR.bK.gn,t(Jv,.5,He(p([a,l])))))}),dt=$(function(e,r){var n=r.a,a=r.b,o=r.c;return t(kc,e,s(Ue,s(ut,n.gn,n.gr,n.dg),s(ut,a.gn,a.gr,a.dg),s(ut,o.gn,o.gr,o.dg)))}),d2=function(e){return t(dt,t(vn,e,lo),T(s(Ne,0,0,0),s(Ne,.1,0,0),s(Ne,0,.1,0)))},m2=$(function(e,r){if(t(Kn,"draw ball trail",e)){var n=Ba(r.k).cd;return He(t(X,function(a){return t($o,a.gr,t(fn,a.gn,d2(e)))},n.gc))}else return He(x)}),g2=$(function(e,r){return t($o,r.aG.gr,t(fn,r.aG.gn,t(vi,t(vn,e,xc),.2)))}),p2=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return x}();return s(Gt,eo,e,r)},b2=$(function(e,r){var n=r.l.aJ;if(n.$===1){var a=n.a;return He(t(X,s(qv,e,lo,.2),p2(a)))}else return He(x)}),Lo=$(function(e,r){var n=e.a,a=e.b,o=e.c;return{gn:r.gn+n,gr:r.gr+a,dg:r.dg+o}}),h2=$(function(e,r){return{gn:e,gr:r}}),_2=$(function(e,r){var n=e,a=r;return a.gn*n.gr-a.gr*n.gn}),Al=$(function(e,r){var n=e,a=r;return{gn:a.gn-n.gn,gr:a.gr-n.gr}}),y2=function(e){var r=e;return r},Yv=function(e){var r=y2(e),n=r.a,a=r.b,o=r.c,i=t(Al,n,a),c=t(Al,n,o);return t(ie,.5,t(_2,c,i))},Xv=S(function(e,r,n){return T(e,r,n)}),w2=function(e){return s(je,$n,$e,e)},Zv=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=$(function(f,m){return Yv(s(Xv,r,f,m))}),l=s(Gt,c,t(L,a,i),i);return w2(l)}else{var r=e.a,n=e.b,a=n.a;return $e}else return e.a,$e;else return $e},S2=function(e){return t(ma,$e,Zv(e))?e:ve(e)},Qv=$(function(e,r){var n=e,a=r;return O(a,n)>-1}),x2=function(e){return t(Qv,$e,Zv(e))?e:ve(e)},P2=$(function(e,r){return{a$:t(X,S2,e),a3:x2(r)}}),C2=function(e){return t(P2,x,e)},Wr=function(e){var r=e;return r.gn},Vr=function(e){var r=e;return r.gr},To=$(function(e,r){return{gn:e(Wr(r)),gr:e(Vr(r))}}),bn=$(function(e,r){var n=e,a=r;return O(a,n)>0}),Bt=S(function(e,r,n){return Yv(s(Xv,e.en,r.en,n.en))}),k2=$(function(e,r){e:for(;;){var n=r.p;if(n.b){var o=n.a,i=n.b;if(t(bn,$e,s(Bt,o,r.g,e))){var a=T(o.fs,r.g.fs,e.fs),c=e,l={g:o,p:i,j:r.j,bh:t(L,a,r.bh)};e=c,r=l;continue e}else return{g:e,p:t(L,r.g,r.p),j:r.j,bh:r.bh}}else if(t(bn,$e,s(Bt,r.j,r.g,e))){var a=T(r.j.fs,r.g.fs,e.fs);return{g:e,p:x,j:r.j,bh:t(L,a,r.bh)}}else return{g:e,p:p([r.g]),j:r.j,bh:r.bh}}}),z2=$(function(e,r){e:for(;;){var n=r.p;if(n.b){var o=n.a,i=n.b;if(t(bn,$e,s(Bt,e,r.g,o))){var a=T(e.fs,r.g.fs,o.fs),c=e,l={g:o,p:i,j:r.j,bh:t(L,a,r.bh)};e=c,r=l;continue e}else return{g:e,p:t(L,r.g,r.p),j:r.j,bh:r.bh}}else if(t(bn,$e,s(Bt,e,r.g,r.j))){var a=T(e.fs,r.g.fs,r.j.fs);return{g:e,p:x,j:r.j,bh:t(L,a,r.bh)}}else return{g:e,p:p([r.g]),j:r.j,bh:r.bh}}}),L2=$(function(e,r){var n=e,a=r;return t(Ni,n,a)}),T2=$(function(e,r){var n=e,a=r;return O(a,n)<0}),ka=$(function(e,r){var n=Vr(r),a=Vr(e),o=Wr(r),i=Wr(e);return t(T2,n,a)?0:t(bn,n,a)?2:t(L2,o,i)}),Ft=function(e){return e},Kv=Af,M2=$(function(e,r){var n=S(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(e.fs,a.fs,l.fs),v=l,f=u,m=t(L,c,i);a=v,o=f,i=m;continue e}else{var c=T(e.fs,a.fs,r.j.fs);return t(L,c,i)}});return{g:e,p:x,j:r.g,bh:s(n,r.g,r.p,r.bh)}}),D2=$(function(e,r){var n=S(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(a.fs,e.fs,l.fs),v=l,f=u,m=t(L,c,i);a=v,o=f,i=m;continue e}else{var c=T(a.fs,e.fs,r.j.fs);return t(L,c,i)}});return{g:e,p:x,j:r.g,bh:s(n,r.g,r.p,r.bh)}}),j2=function(e){var r=t(Kv,$(function(u,v){return t(ka,v.en,u.en)}),e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=a.b,c=$(function(u,v){return he(u.a1,v.j.fs)?t(D2,u,v):he(v.j.a1,u.fs)?t(M2,u,v):he(u.a1,v.g.fs)?t(z2,u,v):he(v.g.a1,u.fs)?t(k2,u,v):Ft(v)}),l={g:o,p:x,j:n,bh:x};return s(je,c,l,i).bh}else return r.a,x;else return x},Ia=$(function(e,r){return t(jr,e,r.R)}),A2=$(function(e,r){var n=r;return s(cn,e,0,n)}),B2=_e(function(e,r,n,a,o){e:for(;;){var i=o.a,c=o.b,l=t(Ia,a,e);if(l.$)return Ft(w(i,x));var u=l.a,v=t(jr,u.ai,r);if(v.$)return Ft(w(i,x));var f=v.a,m=t(A2,a,i),g=u.as,d={fs:u.ai,a1:u.ap,en:f},b=t(L,d,c);if(he(g,n))return w(m,ve(b));var h=e,y=r,P=n,_=g,z=w(m,b);e=h,r=y,n=P,a=_,o=z;continue e}}),F2=Qt,at=Pf,E2=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=function(l){if(l.$){var v=l.a;return mn(t(at,e,v))}else{var u=l.a;return on(t(at,c,u))}};return C(Br,n,a,t(at,c,o),t(at,e,i))}),W2=$(function(e,r){var n=t(Zn,e,r);return!n.$}),V2=$(function(e,r){var n=r;return t(W2,e,n)}),R2=function(e){var r=t(E2,function(c){return c.en},e.al),n=$(function(c,l){var u=l,v=u.a,f=u.b;if(t(V2,c,v))return l;var m=k(B2,e,r,c,c,w(v,x)),g=m.a,d=m.b;return w(g,t(L,d,f))}),a=t(sn,0,uc(e.R)-1),o=s(je,n,w(F2,x),a),i=o.b;return w(r,i)},N2=x,kn=$(function(e,r){if(r.$)return Ft(e);var n=r.a;return n}),G2=_e(function(e,r,n,a,o){if(r.$===1)return F;var i=r.a;if(n.$===1)return F;var c=n.a;if(a.$===1)return F;var l=a.a;if(o.$===1)return F;var u=o.a;return Z(C(e,i,c,l,u))}),fi=wf,ef=gf,Nn=yf,ba=E(function(e,r,n,a){var o=pn&r>>>e;if(O(o,Sr(a))>-1){if(e===5)return t(fi,mn(n),a);var i=on(C(ba,e-ur,r,n,dn));return t(fi,i,a)}else{var c=t(xa,o,a);if(c.$){var i=on(C(ba,e-ur,r,n,ef(c)));return s(Nn,o,i,a)}else{var l=c.a,i=on(C(ba,e-ur,r,n,l));return s(Nn,o,i,a)}}}),si=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=Sr(i),l=Sr(e),u=n+(l-c);if(he(l,me)){var v=O(u>>>ur,1<<a)>0;if(v){var f=a+ur,m=C(ba,f,n,e,ef(on(o)));return C(Br,u,f,m,dn)}else return C(Br,u,a,C(ba,a,n,e,o),dn)}else return C(Br,u,a,o,e)}),Bl=$(function(e,r){var n=r.d;return t(si,t(fi,e,n),r)}),Fl=$(function(e,r){return D(r,{as:e})}),El=$(function(e,r){return D(r,{D:e})}),rf=E(function(e,r,n,a){var o=pn&r>>>e,i=t(xa,o,a);if(i.$){var u=i.a,v=s(Nn,pn&r,n,u);return s(Nn,o,mn(v),a)}else{var c=i.a,l=C(rf,e-ur,r,n,c);return s(Nn,o,on(l),a)}}),H2=S(function(e,r,n){var a=n.a,o=n.b,i=n.c,c=n.d;return e<0||O(e,a)>-1?n:O(e,vv(a))>-1?C(Br,a,o,i,s(Nn,pn&e,r,c)):C(Br,a,o,C(rf,o,e,r,i),c)}),tt=S(function(e,r,n){var a=t(jr,e,n);if(a.$)return n;var o=a.a;return s(H2,e,r(o),n)}),In=S(function(e,r,n){var a=uc(n.R);return t(kn,w(n,-1),k(G2,E(function(o,i,c,l){return w(D(n,{R:t(Bl,{ap:e,as:e,D:l.D,ai:r.fs},t(Bl,{ap:r.fs,as:r.b1,D:c.D,ai:e},s(tt,l.D,Fl(a+1),s(tt,c.D,Fl(a),s(tt,r.b1,El(a),s(tt,e,El(a+1),n.R))))))}),a)}),t(jr,e,n.al),t(jr,r.fs,n.al),t(jr,e,n.R),t(jr,r.b1,n.R)))}),On=$(function(e,r){return t(Zn,e,r.bl)}),I2=_r,Wl=$(function(e,r){return t(jr,e,r.al)}),O2=S(function(e,r,n){if(r.$===1)return F;var a=r.a;if(n.$===1)return F;var o=n.a;return Z(t(e,a,o))}),nf=S(function(e,r,n){return t(kn,n,t(Fr,function(a){return s(O2,$(function(o,i){var c=I2(w(o.en,i.en));return D(n,{bg:t(e,w(r,c),n.bg)})}),t(Wl,a.ai,n),t(Wl,a.ap,n))},t(Ia,r,n)))}),J2=$(function(e,r){var n=r;return t(no,bg(e),n)}),Tc=nf(J2),U2=$(function(e,r){return t(kn,r,t(Fr,function(n){return t(re,function(a){var o=a.a0?s(In,e,a,r).a:r;return t(Tc,n.D,o)},t(On,n.D,r))},t(Ia,e,r)))}),Jn=S(function(e,r,n){return{fs:e,a0:n,b1:r}}),q2=$(function(e,r){var n=r;return t(L,e,n)}),Mc=nf(q2),Un=S(function(e,r,n){return D(n,{bl:s(cn,e,r,n.bl)})}),Y2=$(function(e,r){return t(kn,r,t(Fr,function(n){return t(re,function(a){var o=a.a0?s(In,e,a,r).a:r;return s(Un,e,s(Jn,e,e,!1),t(Mc,e,t(Tc,n.D,o)))},t(On,n.D,r))},t(Ia,e,r)))}),X2=function(e){var r=e;return r},Z2=$(function(e,r){var n=r,a=Vr(e),o=Wr(e);return t(re,function(i){i.a;var c=i.b,l=c.a;return c.b,l},s(je,$(function(i,c){var l=X2(i.b),u=l.a,v=l.b,f=Wr(u),m=Vr(u),g=Wr(v),d=Vr(v),b=function(){if(he(m,d))return t(Me,t(de,f,g),o);var P=t(ui,t(Me,m,a),t(Me,m,d));return t(Me,t($n,t(ie,P,t(Me,f,g)),f),o)}();if(t(Qv,$e,b)){if(c.$===1)return Z(w(b,i));var h=c.a,y=h.a;return h.b,t(ma,y,b)?Z(w(b,i)):c}else return c}),F,n))}),Dc=$(function(e,r){return t(Z2,e,r.bg)}),Q2=S(function(e,r,n){return t(kn,n,t(Fr,function(a){return t(Fr,function(o){var i=o.a0?s(In,e,o,n).a:n,c=t(Tc,a.D,i);return t(Fr,function(l){return t(re,function(u){var v=u.a0?s(In,e,u,c):w(c,e),f=v.a,m=v.b;return s(Un,l,s(Jn,e,m,!0),f)},t(On,l,n))},t(Dc,r,c))},t(On,a.D,n))},t(Ia,e,n)))}),K2=S(function(e,r,n){return t(kn,n,t(Fr,function(a){return t(re,function(o){var i=o.a0?s(In,e,o,n):w(n,e),c=i.a,l=i.b;return s(Un,a,s(Jn,e,l,!1),c)},t(On,a,n))},t(Dc,r,n)))}),ey=S(function(e,r,n){return t(kn,n,t(Fr,function(a){return t(re,function(o){var i=s(In,e,o,n),c=i.a,l=i.b;return s(Un,e,s(Jn,e,e,!1),t(Mc,e,s(Un,a,s(Jn,e,l,!1),c)))},t(On,a,n))},t(Dc,r,n)))}),ry=$(function(e,r){return s(Un,e,s(Jn,e,e,!1),t(Mc,e,r))}),af=kf,tf=Cf,Vl=$(function(e,r){var n=Sr(e),a=me-Sr(r.s)-n,o=s(af,me,r.s,e);return a<0?{C:t(L,mn(o),r.C),o:r.o+1,s:s(tf,a,n,e)}:a?{C:r.C,o:r.o,s:o}:{C:t(L,mn(o),r.C),o:r.o+1,s:dn}}),Rl=$(function(e,r){r.a,r.c;var n=r.d,a=Sr(e),o=me-Sr(n)-a,i=s(af,me,n,e),c=t(si,i,r);if(o<0){var l=s(tf,o,a,e);return t(si,l,c)}else return c}),An=Sf,ny=function(e){var r=e.a,n=e.c,a=e.d,o=$(function(i,c){if(i.$)return t(L,i,c);var l=i.a;return s(An,o,c,l)});return{C:s(An,o,x,n),o:r/me|0,s:a}},ay=$(function(e,r){e.d;var n=r.a,a=r.c,o=r.d;if(O(n,me*4)<1){var i=$(function(c,l){if(c.$){var v=c.a;return t(Rl,v,l)}else{var u=c.a;return s(An,i,l,u)}});return t(Rl,o,s(An,i,e,a))}else{var i=$(function(l,u){if(l.$){var f=l.a;return t(Vl,f,u)}else{var v=l.a;return s(An,i,u,v)}});return t(Ai,!0,t(Vl,o,s(An,i,ny(e),a)))}}),ty=S(function(e,r,n){e:for(;;)if(r.b){var a=r.a,o=r.b,i=he(a,e)?n:t(L,a,n),c=a,l=o,u=i;e=c,r=l,n=u;continue e}else return n}),oy=function(e){if(e.b){var r=e.a,n=e.b,a=s(ty,r,n,x);if(a.b){var o=a.a,i=a.b;return he(o,r)?t(L,r,ve(i)):t(L,r,ve(a))}else return p([r])}else return x},Nl=$(function(e,r){var n=e,a=r;return a*n}),Gl=S(function(e,r,n){var a=Vr(n),o=Vr(r),i=Vr(e),c=Wr(n),l=Wr(r),u=Wr(e),v=t(Nl,t(Me,l,c),t(Me,i,o)),f=t(Nl,t(Me,o,a),t(Me,u,l)),m=t(Me,v,f);return t(bn,$e,m)}),Hl=S(function(e,r,n){var a=t(ka,r,e),o=t(ka,r,n);return a===2&&o===2?s(Gl,e,r,n)?0:4:!a&&!o?s(Gl,e,r,n)?1:5:a===2?3:2}),iy=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=i.a,l=i.b,u=s(je,Ht,c,l),v=E(function(g,d,b,h){e:for(;;)if(b.b){var P=b.a,_=b.b,z={aq:s(Hl,g,d,P),en:d},A=d,I=P,H=_,G=t(L,z,h);g=A,d=I,b=H,h=G;continue e}else{var y={aq:s(Hl,g,d,r),en:d};return ve(t(L,y,h))}});return C(v,u,r,t(L,a,t(L,c,l)),x)}else{var r=e.a,n=e.b,a=n.a;return t(ka,r,a)===2?p([{aq:4,en:r},{aq:5,en:a}]):p([{aq:5,en:r},{aq:4,en:a}])}else return e.a,x;else return x},cy=function(e){var r=e.a3,n=e.a$,a=t(X,function(c){return oy(c)},t(L,r,n)),o=s(je,$(function(c,l){var u=l.a,v=l.b,f=sr(c),m=t(Lu,f,function(g){return g?he(g,f-1)?{ap:u,as:u,D:u+g-1,ai:u+g}:{ap:u+g+1,as:u+g+1,D:u+g-1,ai:u+g}:{ap:u+1,as:u+1,D:u+f-1,ai:u}});return w(u+f,t(ay,v,m))}),w(0,Di),a).b,i=Ee(t(X,iy,a));return{R:o,al:i}},ly=function(e){var r=$(function(u,v){var f=u.a,m=u.b,g=m.aq;switch(g){case 0:return t(ry,f,v);case 1:return t(U2,f,v);case 3:return s(K2,f,m.en,v);case 2:return t(Y2,f,v);case 4:return s(ey,f,m.en,v);default:return s(Q2,f,m.en,v)}}),n=cy(e),a=n.al,o=n.R,i={bg:N2,R:o,bl:Qt,al:Pa(a)},c=t(Kv,$(function(u,v){var f=u.b,m=v.b;return t(ka,m.en,f.en)}),t(Li,eo,a)),l=s(je,r,i,c);return Pa(a),R2(l)},uy=function(e){var r=ly(e),n=r.a,a=r.b;return t($c,n,Ee(t(X,j2,a)))},$y=function(e){return uy(e)},vy=function(e){return t(X,function(r){var n=r.a,a=r.b,o=r.c;return T(t(To,un,n),t(To,un,a),t(To,un,o))},fv($y(C2(t(X,function(r){return t(h2,r.gn,r.gr)},e)))))},fy=$(function(e,r){var n=t(vn,e,lo),a=2,o=function(v){var f=v.gn,m=v.gr;return s(Ne,f,m,a)},i=function(v){var f=v.a,m=v.b;return He(p([t(dt,n,T(o(f),o(m),t(Lo,T(0,0,-a),o(f)))),t(dt,n,T(t(Lo,T(0,0,-a),o(f)),o(m),t(Lo,T(0,0,-a),o(m))))]))},c=function(v){return He(t(X,i,qi(v.el)))},l=function(v){return He(t(X,function(f){var m=f.a,g=f.b,d=f.c;return t(dt,n,T(o(m),o(g),o(d)))},vy(v.el)))},u=function(v){return He(p([l(v),c(v)]))};return He(t(X,u,Ba(r.k).fQ))}),of=function(e){return e},sy=function(e){return of(1.2*t(Yr,2,e))},Mo=ao({gn:.37208,gr:.37529}),dy=$(function(e,r){return{$:2,a:e,b:r}}),cf=function(e){return{$:0,a:e}},ot=function(e){var r=e;return r},my=function(e){var r=e;return r.eX},lf=cf($a.a),gy=$(function(e,r){var n=$(function(a,o){var i=o.a,c=o.b;return e(a)?w(t(L,a,i),c):w(i,t(L,a,c))});return s(Ir,n,w(x,x),r)}),py=function(e){var r=e;return pr({dR:r.gn,dS:r.b6,dT:0,dU:0,dV:r.gr,dW:r.bQ,dX:0,dY:0,dZ:r.dg,d_:r.bI,d$:0,d0:0,d1:r.c8,d2:r.cW,d3:0,d4:0})},by=oe(function(e,r,n,a,o,i,c,l){var u=t(gy,my,p([ot(e),ot(r),ot(n),ot(a)])),v=u.a,f=u.b;if(v.b){var m=le(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var g=m.a,d=m.b,b=d.a,h=d.b,y=h.a,P=h.b,_=P.a;return t(dy,t(X,py,v),{bn:t(Ke,g,b),bW:t(Ke,y,_),bX:t(Ke,o,i),bY:t(Ke,c,l)})}else return lf}else return cf({bn:t(Ke,e,r),bW:t(Ke,n,a),bX:t(Ke,o,i),bY:t(Ke,c,l)})}),hy=E(function(e,r,n,a){return Wt(by,e,r,n,a,qe,qe,qe,qe)}),_y={$:5},yy=_y,wy=ao({gn:.44757,gr:.40745}),Sy=function(e){return e},Il=function(e){return e},Do=function(e){return e},xy={$:1},Py=xy,Cy=$(function(e,r){var n=e,a=Na(r.en),o=a.gn,i=a.gr,c=a.dg,l=t(to,r.bS,r.aQ),u=l;return{bI:Cn(u),eX:n,bQ:Pn(u),cW:0,b6:xn(u),c8:2,gn:o,gr:i,dg:c}}),Ol=function(e){return t(Cy,Rv(!0),{aQ:e.aQ,bS:e.bS,en:Ii(e.en)})},jo=function(e){return e/255},Jl=S(function(e,r,n){return C(kr,jo(e),jo(r),jo(n),1)}),Ul=function(e){var r=e;return r},ky=function(e){e:for(;;){if(he(e.dF,$e)&&he(e.dG,$e))return qe;if(t(bn,De(e.dF),De(e.dG))){var r={aQ:e.aQ,dF:e.dG,dG:e.dF,eH:Lt(e.eH)};e=r;continue e}else{var n=K(Ul(e.dG)/Er),a=K(Ul(e.dF)/Er),o=ar(e.eH),i=o.gn,c=o.gr,l=o.dg,u=t(to,cv(1),e.aQ),v=u;return{bI:a*Cn(v),eX:!1,bQ:a*Pn(v),cW:n/a,b6:a*xn(v),c8:3,gn:i,gr:c,dg:l}}}},zy=function(e){return ky({aQ:e.aQ,dF:e.dF,dG:e.dG,eH:t(wc,Ze(e.bH),Ze(e.bO))})},Ly=function(e){return t(Q$,{eO:e.eO,eS:e.eS,an:e.an,$7:e.$7,aS:e.aS},p([{aX:e.aX,fe:e.fe,fB:e.fB,gb:e.gb,gk:e.gk}]))},Ty=ao({gn:.31271,gr:.32902}),My=function(e){return De(e)},Dy={$:0},jy=Dy,Ay=function(e){return Ly({eO:K$(e.bf),eS:e.eS,an:e.an,$7:e.$7,aS:e.aS,aX:e.aX,fe:My(of(80)),fB:lf,gb:jy,gk:Ty})},By=$(function(e,r){return Ay({eS:A$(e.eS),an:e.an,$7:ze(e.$7),bf:e.bf,aS:w(Mt(Qe(e.a4.gl)),Mt(Qe(e.a4.fn))),aX:Vv(r)})}),Fy=$(function(e,r){var n=V_({bH:0,aQ:zh(Sy(2e3)),bO:Gr(90),bS:Do(240)}),a=Ol({aQ:Mo,bS:Il(6e3),en:{gn:2,gr:3,dg:3}}),o=zy({bH:0,aQ:Mo,bO:Gr(90),dF:Do(30),dG:Do(30)}),i=Ol({aQ:wy,bS:Il(6e3),en:{gn:-2,gr:4,dg:3}}),c=t(Kn,"unlit",e)?By({eS:s(Jl,46,46,46),an:r.an,$7:.1,bf:e.bf,a4:e.a4}):E_({eO:Py,eT:s(Jl,46,46,46),an:r.an,$7:.1,bf:e.bf,fe:sy(6),fB:C(hy,i,a,n,o),a4:e.a4,gb:yy,gk:Mo});return c(p([$2(e),t(s2,e,r),t(m2,e,r),t(fy,e,r),t(g2,e,r),t(b2,e,r)]))}),Ey=$(function(e,r){return t(Fy,e,r)}),Wy={$:8},Dr=$(function(e,r){return t(Ma,p([V("m-1 p-2 rounded bg-black40 hover:bg-black80"),Da(e)]),p([ke(r)]))}),Vy=mr("pre"),Ry=function(e){return t(Vy,p([V("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),p([ke(e.l.cp)]))},Ny=$(function(e,r){return t(W,x,p([t(Dr,Wy,"Export Levels"),Ry(r)]))}),Gy={$:9},Hy=function(e){return{$:10,a:e}},Iy=function(e){return t(rn,"cols",Pe(e))},Oy=function(e){return t(rn,"rows",Pe(e))},Jy=mr("textarea"),Uy=function(e){return t(Jy,p([V("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),Oy(150),Iy(10),Yt(Hy),Xt(e.l.cq)]),p([ke("todo")]))},qy=$(function(e,r){return t(W,x,p([t(Dr,Gy,"Import Levels"),Uy(r)]))}),Yy={$:5},Xy={$:7},Zy={$:4},Qy={$:3},Ky={$:6},ew=function(e){var r=e;return r.n},rw=function(e){return sr(ew(e))+1},nw=mr("p"),aw=function(e){var r=e;return 1+sr(r.n)+sr(r.E)},tw=mr("span"),ow=function(e){return t(W,x,p([t(W,p([V("text-lg")]),p([ke("Level Selection")])),t(nw,x,p([t(Dr,Qy,"<"),t(tw,p([t(be,"margin","10px")]),p([ke(B$(p([Pe(rw(e.k))," / ",Pe(aw(e.k))])))])),t(Dr,Zy,">")])),t(Dr,Yy,"Add level"),t(Dr,Ky,"Remove current level"),t(Dr,Xy,"Move level one up")]))},iw=function(e){return{$:2,a:e}},cw={$:1},lw=$(function(e,r){return t(W,x,p([t(W,p([V("h-40")]),p([t(W,p([V("text-lg")]),p([ke("Polygon editor")])),function(){var n=r.l.aJ;if(n.$===1){var a=n.a;return t(W,p([V("p-2")]),p([t(W,x,p([ke("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ")])),t(W,x,p([ke("After you are finished drawing, click the button below.")])),t(Dr,iw(a),"Finish drawing polygon")]))}else return t(Dr,cw,"Start drawing a polygon")}()]))]))}),uw=$(function(e,r){return r.l.bT?t(W,p([V("fixed top-0 right-0 w-[300px] h-full"),V("bg-black20"),V("border-[0.5px] border-white20"),V("overflow-y-scroll"),V("text-xs text-white60")]),p([t(W,p([V("p-4")]),p([t(lw,e,r)])),t(W,p([V("p-4 border-[0.5px] border-white20")]),p([ow(r)])),t(W,p([V("p-4 border-[0.5px] border-white20")]),p([t(Ny,e,r)])),t(W,p([V("p-4 border-[0.5px] border-white20")]),p([t(qy,e,r)]))])):t(W,x,x)}),$w={$:0},ql=rn("fill"),Yl={dp:t(Uo,p([qo("0 0 24 24"),ql("currentColor")]),p([t(Jo,p([Oo("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),x)])),du:t(Uo,p([qo("0 0 24 24"),ql("currentColor")]),p([t(Jo,p([Oo("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),x)]))},vw=function(e){return t(W,p([V("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),p([t(Ma,p([V("w-6"),Da($w)]),p([e.l.bT?Yl.dp:Yl.du]))]))},fw=$(function(e,r){return t(W,x,p([t(uw,e,r),vw(r)]))}),sw=Ge(Zp,Ey,Nb,M0,P0,fw,Ch);const dw={Main:{init:sw(t(B,function(e){return pe({fu:e})},t(j,"inputs",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return pe({e_:c,bf:i,dt:o,dK:a,ek:n,a4:r,gj:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return pe({eN:m,e0:f,ds:v,e9:u,fy:l,fR:c,fW:i,ey:o,eG:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",$r(wa)))},t(j,"left",ee))},t(j,"pressedKeys",$r(wa)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return pe({ds:v,fv:u,fE:l,fX:c,fY:i,eG:o,gn:a,gr:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return pe({fn:n,gl:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return pe({e3:r,e4:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne)))))))(0)}},N={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},mw=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),o=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function f(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function m(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(N.keyboard.downs.push(d.code),N.keyboard.pressedKeys.push(d.code),r(d)&&(N.keyboard.control=!0),n(d)&&(N.keyboard.alt=!0),a(d)&&(N.keyboard.shift=!0),o(d)&&(N.keyboard.left=!0),i(d)&&(N.keyboard.right=!0),c(d)&&(N.keyboard.up=!0),l(d)&&(N.keyboard.down=!0))}),window.addEventListener("keyup",d=>{N.keyboard.pressedKeys=N.keyboard.pressedKeys.filter(b=>b!=d.code),r(d)&&(N.keyboard.control=!1,N.keyboard.pressedKeys=[]),n(d)&&(N.keyboard.alt=!1),a(d)&&(N.keyboard.shift=!1),o(d)&&(N.keyboard.left=!1),i(d)&&(N.keyboard.right=!1),c(d)&&(N.keyboard.up=!1),l(d)&&(N.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{N.pointer.x=-.5*N.screen.width+d.pageX,N.pointer.y=.5*N.screen.height-d.pageY,u(d)&&(N.pointer.down=!0,N.pointer.isDown=!0),v(d)&&(N.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{N.pointer.move=!0,N.pointer.x=-.5*N.screen.width+d.pageX,N.pointer.y=.5*N.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(N.pointer.up=!0,N.pointer.isDown=!1),v(d)&&(N.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(N.pointer.up=!0,N.pointer.isDown=!1),v(d)&&(N.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{N.wheel.deltaX=d.deltaX,N.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{f(N)}),window.addEventListener("focus",d=>{f(N)}),window.addEventListener("visibilitychange",d=>{f(N)}),window.addEventListener("resize",()=>{N.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(d){const b=d/1e3,h=b-N.clock;h<.009||(N.dt=h,N.clock=b,e.ports.tick.send(N),m(N)),window.requestAnimationFrame(g)}},gw=()=>{Ao("pointerdown"),Ao("wheel"),Ao("keydown")},Ao=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},pw=dw.Main.init({node:document.querySelector("#app div"),flags:{inputs:N}});gw();mw(pw);
