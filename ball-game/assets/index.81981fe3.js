const uf=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};uf();function Zr(e,r,n){return n.a=e,n.f=r,n}function $(e){return Zr(2,e,function(r){return function(n){return e(r,n)}})}function S(e){return Zr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return Zr(4,e,function(r){return function(n){return function(a){return function(o){return e(r,n,a,o)}}}})}function he(e){return Zr(5,e,function(r){return function(n){return function(a){return function(o){return function(i){return e(r,n,a,o,i)}}}}})}function tr(e){return Zr(6,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return e(r,n,a,o,i,c)}}}}}})}function Vt(e){return Zr(7,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return e(r,n,a,o,i,c,l)}}}}}}})}function oe(e){return Zr(8,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,o,i,c,l,u)}}}}}}}})}function $i(e){return Zr(9,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,o,i,c,l,u,v)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function s(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,o){return e.a===4?e.f(r,n,a,o):e(r)(n)(a)(o)}function z(e,r,n,a,o,i){return e.a===5?e.f(r,n,a,o,i):e(r)(n)(a)(o)(i)}function Ge(e,r,n,a,o,i,c){return e.a===6?e.f(r,n,a,o,i,c):e(r)(n)(a)(o)(i)(c)}function vi(e,r,n,a,o,i,c,l){return e.a===7?e.f(r,n,a,o,i,c,l):e(r)(n)(a)(o)(i)(c)(l)}function Wt(e,r,n,a,o,i,c,l,u){return e.a===8?e.f(r,n,a,o,i,c,l,u):e(r)(n)(a)(o)(i)(c)(l)(u)}function $f(e,r,n,a,o,i,c,l,u,v){return e.a===9?e.f(r,n,a,o,i,c,l,u,v):e(r)(n)(a)(o)(i)(c)(l)(u)(v)}var vf=[];function ff(e){return[e]}function sf(e){return e.length}var df=S(function(e,r,n){for(var a=new Array(e),o=0;o<e;o++)a[o]=n(r+o);return a}),mf=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),pf=$(function(e,r){return r[e]}),gf=S(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=n[i];return o[e]=r,o}),bf=$(function(e,r){for(var n=r.length,a=new Array(n+1),o=0;o<n;o++)a[o]=r[o];return a[n]=e,a}),hf=S(function(e,r,n){for(var a=n.length,o=0;o<a;o++)r=t(e,n[o],r);return r}),_f=S(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r}),yf=$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=e(r[o]);return a});S(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=t(e,r+i,n[i]);return o});var wf=S(function(e,r,n){return n.slice(e,r)}),Sf=S(function(e,r,n){var a=r.length,o=e-a;o>n.length&&(o=n.length);for(var i=a+o,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<o;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Pf()),r});function Pf(e){return"<internals>"}function Xn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function be(e,r){for(var n,a=[],o=Vo(e,r,0,a);o&&(n=a.pop());o=Vo(n.a,n.b,0,a));return o}function Vo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Xn(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$<0&&(e=Hc(e),r=Hc(r));for(var o in e)if(!Vo(e[o],r[o],n+1,a))return!1;return!0}$(be);var xf=$(function(e,r){return!be(e,r)});function q(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=q(e.a,r.a))||(n=q(e.b,r.b))?n:q(e.c,r.c);for(;e.b&&r.b&&!(n=q(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return q(e,r)<0});$(function(e,r){return q(e,r)<1});$(function(e,r){return q(e,r)>0});$(function(e,r){return q(e,r)>=0});var Cf=$(function(e,r){var n=q(e,r);return n<0?pu:n?Pm:mu}),Ma=0;function w(e,r){return{a:e,b:r}}function T(e,r,n){return{a:e,b:r,c:n}}function D(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=wr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=wr(e.a,r);return n}var P={$:0};function wr(e,r){return{$:1,a:e,b:r}}var zf=$(wr);function g(e){for(var r=P,n=e.length;n--;)r=wr(e[n],r);return r}function Rt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var kf=S(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return g(a)});E(function(e,r,n,a){for(var o=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)o.push(s(e,r.a,n.a,a.a));return g(o)});he(function(e,r,n,a,o){for(var i=[];r.b&&n.b&&a.b&&o.b;r=r.b,n=n.b,a=a.b,o=o.b)i.push(C(e,r.a,n.a,a.a,o.a));return g(i)});tr(function(e,r,n,a,o,i){for(var c=[];r.b&&n.b&&a.b&&o.b&&i.b;r=r.b,n=n.b,a=a.b,o=o.b,i=i.b)c.push(z(e,r.a,n.a,a.a,o.a,i.a));return g(c)});var Lf=$(function(e,r){return g(Rt(r).sort(function(n,a){return q(e(n),e(a))}))}),Tf=$(function(e,r){return g(Rt(r).sort(function(n,a){var o=t(e,n,a);return o===mu?0:o===pu?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Mf=$(Math.pow);$(function(e,r){return r%e});var Df=$(function(e,r){var n=r%e;return e===0?Xn(11):n>0&&e<0||n<0&&e>0?n+e:n}),jf=Math.PI,Af=Math.cos,Bf=Math.sin,Ff=Math.tan,Ef=Math.acos,Vf=$(Math.atan2);function Wf(e){return e}function Rf(e){return e===1/0||e===-1/0}var Nf=Math.ceil,Gf=Math.floor,Hf=Math.round,If=Math.sqrt,Lc=Math.log,qf=isNaN;function Of(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Jf=$(function(e,r){return e+r});function Uf(e){var r=e.charCodeAt(0);return isNaN(r)?F:Y(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}$(function(e,r){return e+r});function Xf(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;){var i=r.charCodeAt(o);if(55296<=i&&i<=56319){a[o]=e(r[o]+r[o+1]),o+=2;continue}a[o]=e(r[o]),o++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,o=0;o<a;){var i=r[o],c=r.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=r[o],o++),e(i)&&n.push(i)}return n.join("")});function Qf(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var o=e.charCodeAt(a);55296<=o&&o<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}S(function(e,r,n){for(var a=n.length,o=0;o<a;){var i=n[o],c=n.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=n[o],o++),r=t(e,i,r)}return r});var Yf=S(function(e,r,n){for(var a=n.length;a--;){var o=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,o=n[a]+o),r=t(e,o,r)}return r}),Zf=$(function(e,r){return r.split(e)}),Kf=$(function(e,r){return r.join(e)}),es=S(function(e,r,n){return n.slice(e,r)});function rs(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var ns=$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),as=$(function(e,r){return r.indexOf(e)>-1}),ts=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var os=$(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,o=[];(a=r.indexOf(e,a))>-1;)o.push(a),a=a+n;return g(o)});function Il(e){return e+""}function is(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,o=a;o<e.length;++o){var i=e.charCodeAt(o);if(i<48||57<i)return F;r=10*r+i-48}return o==a?F:Y(n==45?-r:r)}function cs(e){if(e.length===0||/[\sxbo]/.test(e))return F;var r=+e;return r===r?Y(r):F}function ls(e){return Rt(e).join("")}function us(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function $s(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function vs(e){return{$:0,a:e}}function Nt(e){return{$:2,b:e}}var fs=Nt(function(e){return typeof e!="number"?er("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?ue(e):er("an INT",e)}),ss=Nt(function(e){return typeof e=="boolean"?ue(e):er("a BOOL",e)}),ds=Nt(function(e){return typeof e=="number"?ue(e):er("a FLOAT",e)}),ms=Nt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):er("a STRING",e)});function ps(e){return{$:3,b:e}}function gs(e){return{$:5,c:e}}var bs=$(function(e,r){return{$:6,d:e,b:r}}),hs=$(function(e,r){return{$:7,e,b:r}});function Kr(e,r){return{$:9,f:e,g:r}}var _s=$(function(e,r){return{$:10,b:r,h:e}});function ys(e){return{$:11,g:e}}var ws=$(function(e,r){return Kr(e,[r])}),Ss=S(function(e,r,n){return Kr(e,[r,n])}),Ps=E(function(e,r,n,a){return Kr(e,[r,n,a])});he(function(e,r,n,a,o){return Kr(e,[r,n,a,o])});tr(function(e,r,n,a,o,i){return Kr(e,[r,n,a,o,i])});Vt(function(e,r,n,a,o,i,c){return Kr(e,[r,n,a,o,i,c])});oe(function(e,r,n,a,o,i,c,l){return Kr(e,[r,n,a,o,i,c,l])});$i(function(e,r,n,a,o,i,c,l,u){return Kr(e,[r,n,a,o,i,c,l,u])});var xs=$(function(e,r){try{var n=JSON.parse(r);return Ke(e,n)}catch(a){return Ae(t(Si,"This is not valid JSON! "+a.message,r))}}),ql=$(function(e,r){return Ke(e,r)});function Ke(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):er("null",r);case 3:return Oa(r)?Tc(e.b,r,g):er("a LIST",r);case 4:return Oa(r)?Tc(e.b,r,Cs):er("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return er("an OBJECT with a field named `"+n+"`",r);var v=Ke(e.b,r[n]);return ir(v)?v:Ae(t(Ic,n,v.a));case 7:var a=e.e;if(!Oa(r))return er("an ARRAY",r);if(a>=r.length)return er("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ke(e.b,r[a]);return ir(v)?v:Ae(t(gu,a,v.a));case 8:if(typeof r!="object"||r===null||Oa(r))return er("an OBJECT",r);var o=P;for(var i in r)if(r.hasOwnProperty(i)){var v=Ke(e.b,r[i]);if(!ir(v))return Ae(t(Ic,i,v.a));o=wr(w(i,v.a),o)}return ue(ve(o));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ke(l[u],r);if(!ir(v))return v;c=c(v.a)}return ue(c);case 10:var v=Ke(e.b,r);return ir(v)?Ke(e.h(v.a),r):v;case 11:for(var f=P,m=e.g;m.b;m=m.b){var v=Ke(m.a,r);if(ir(v))return v;f=wr(v.a,f)}return Ae(xm(ve(f)));case 1:return Ae(t(Si,e.a,r));case 0:return ue(e.a)}}function Tc(e,r,n){for(var a=r.length,o=new Array(a),i=0;i<a;i++){var c=Ke(e,r[i]);if(!ir(c))return Ae(t(gu,i,c.a));o[i]=c.a}return ue(n(o))}function Oa(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Cs(e){return t(Su,e.length,function(r){return e[r]})}function er(e,r){return Ae(t(Si,"Expecting "+e,r))}function Dn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Dn(e.b,r.b);case 6:return e.d===r.d&&Dn(e.b,r.b);case 7:return e.e===r.e&&Dn(e.b,r.b);case 9:return e.f===r.f&&Mc(e.g,r.g);case 10:return e.h===r.h&&Dn(e.b,r.b);case 11:return Mc(e.g,r.g)}}function Mc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Dn(e[a],r[a]))return!1;return!0}var zs=$(function(e,r){return JSON.stringify(r,null,e)+""});function Gt(e){return e}function ks(){return[]}function Ls(){return{}}var Ts=S(function(e,r,n){return n[e]=r,n});function Ms(e){return $(function(r,n){return n.push(e(r)),n})}var Ds=null;function bn(e){return{$:0,a:e}}function js(e){return{$:1,a:e}}function Hr(e){return{$:2,b:e,c:null}}var Wo=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function As(e){return{$:5,b:e}}var Bs=0;function fi(e){var r={$:0,e:Bs++,f:e,g:null,h:[]};return si(r),r}function Ol(e){return Hr(function(r){r(bn(fi(e)))})}function Jl(e,r){e.h.push(r),si(e)}var Fs=$(function(e,r){return Hr(function(n){Jl(e,r),n(bn(Ma))})}),po=!1,Dc=[];function si(e){if(Dc.push(e),!po){for(po=!0;e=Dc.shift();)Es(e);po=!1}}function Es(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,si(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return di(r,a,e.fr,e.gc,e.f4,function(){return function(){}})});function di(e,r,n,a,o,i){var c=t(ql,e,r?r.flags:void 0);ir(c)||Xn(2);var l={},u=n(c.a),v=u.a,f=i(p,v),m=Vs(l,p);function p(d,b){var h=t(a,d,v);f(v=h.a,b),Ac(l,h.b,o(v))}return Ac(l,u.b,o(v)),m?{ports:m}:{}}var br={};function Vs(e,r){var n;for(var a in br){var o=br[a];o.a&&(n=n||{},n[a]=o.a(a,r)),e[a]=Rs(o,r)}return n}function Ws(e,r,n,a,o){return{b:e,c:r,d:n,e:a,f:o}}function Rs(e,r){var n={g:r,h:void 0},a=e.c,o=e.d,i=e.e,c=e.f;function l(u){return t(Wo,l,As(function(v){var f=v.a;return v.$===0?s(o,n,f,u):i&&c?C(a,n,f.i,f.j,u):s(a,n,i?f.i:f.j,u)}))}return n.h=fi(t(Wo,l,e.b))}var Ns=$(function(e,r){return Hr(function(n){e.g(r),n(bn(Ma))})});$(function(e,r){return t(Fs,e.h,{$:0,a:r})});function Ul(e){return function(r){return{$:1,k:e,l:r}}}function Gs(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var jc=[],go=!1;function Ac(e,r,n){if(jc.push({p:e,q:r,r:n}),!go){go=!0;for(var a;a=jc.shift();)Hs(a.p,a.q,a.r);go=!1}}function Hs(e,r,n){var a={};pt(!0,r,a,null),pt(!1,n,a,null);for(var o in e)Jl(e[o],{$:"fx",a:a[o]||{i:P,j:P}})}function pt(e,r,n,a){switch(r.$){case 1:var o=r.k,i=Is(e,o,a,r.l);n[o]=qs(e,i,n[o]);return;case 2:for(var c=r.m;c.b;c=c.b)pt(e,c.a,n,a);return;case 3:pt(e,r.o,n,{s:r.n,t:a});return}}function Is(e,r,n,a){function o(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?br[r].e:br[r].f;return t(i,o,a)}function qs(e,r,n){return n=n||{i:P,j:P},e?n.i=wr(r,n.i):n.j=wr(r,n.j),n}function Os(e){br[e]&&Xn(3)}$(function(e,r){return r});function Js(e,r){return Os(e),br[e]={f:Us,u:r,a:Xs},Ul(e)}var Us=$(function(e,r){return function(n){return e(r(n))}});function Xs(e,r){var n=P,a=br[e].u,o=bn(null);br[e].b=o,br[e].c=S(function(c,l,u){return n=l,o});function i(c){var l=t(ql,a,c);ir(l)||Xn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var gt,Ar=typeof document!="undefined"?document:{};function mi(e,r){e.appendChild(r)}E(function(e,r,n,a){var o=a.node;return o.parentNode.replaceChild(Ur(e,function(){}),o),{}});function Ro(e){return{$:0,a:e}}var Xl=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,o.push(c)}return i+=o.length,{$:1,c:r,d:pi(n),e:o,f:e,b:i}})}),mr=Xl(void 0),Qs=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,o.push(c)}return i+=o.length,{$:2,c:r,d:pi(n),e:o,f:e,b:i}})}),Ys=Qs(void 0);function Zs(e,r,n,a){return{$:3,d:pi(e),g:r,h:n,i:a}}var Ks=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function en(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return en([e,r],function(){return e(r)})});S(function(e,r,n){return en([e,r,n],function(){return t(e,r,n)})});E(function(e,r,n,a){return en([e,r,n,a],function(){return s(e,r,n,a)})});he(function(e,r,n,a,o){return en([e,r,n,a,o],function(){return C(e,r,n,a,o)})});tr(function(e,r,n,a,o,i){return en([e,r,n,a,o,i],function(){return z(e,r,n,a,o,i)})});Vt(function(e,r,n,a,o,i,c){return en([e,r,n,a,o,i,c],function(){return Ge(e,r,n,a,o,i,c)})});oe(function(e,r,n,a,o,i,c,l){return en([e,r,n,a,o,i,c,l],function(){return vi(e,r,n,a,o,i,c,l)})});$i(function(e,r,n,a,o,i,c,l,u){return en([e,r,n,a,o,i,c,l,u],function(){return Wt(e,r,n,a,o,i,c,l,u)})});var Ql=$(function(e,r){return{$:"a0",n:e,o:r}}),ed=$(function(e,r){return{$:"a1",n:e,o:r}}),Yl=$(function(e,r){return{$:"a2",n:e,o:r}}),hn=$(function(e,r){return{$:"a3",n:e,o:r}});S(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function rd(e){return e=="script"?"p":e}function nd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?t(Ql,r.n,ad(e,r.o)):r});function ad(e,r){var n=Di(r);return{$:r.$,a:n?s(Mi,n<3?td:od,ge(e),r.a):t(_a,e,r.a)}}var td=$(function(e,r){return w(e(r.a),r.b)}),od=$(function(e,r){return{ar:e(r.ar),c5:r.c5,cX:r.cX}});function pi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,o=n.n,i=n.o;if(a==="a2"){o==="className"?Bc(r,o,i):r[o]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&o==="class"?Bc(c,o,i):c[o]=i}return r}function Bc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Ur(e,r){var n=e.$;if(n===5)return Ur(e.k||(e.k=e.m()),r);if(n===0)return Ar.createTextNode(e.a);if(n===4){for(var a=e.k,o=e.j;a.$===4;)typeof o!="object"?o=[o,a.j]:o.push(a.j),a=a.k;var i={j:o,p:r},c=Ur(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return No(c,r,e.d),c}var c=e.f?Ar.createElementNS(e.f,e.c):Ar.createElement(e.c);gt&&e.c=="a"&&c.addEventListener("click",gt(c)),No(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)mi(c,Ur(n===1?l[u]:l[u].b,r));return c}function No(e,r,n){for(var a in n){var o=n[a];a==="a1"?id(e,o):a==="a0"?ud(e,r,o):a==="a3"?cd(e,o):a==="a4"?ld(e,o):(a!=="value"&&a!=="checked"||e[a]!==o)&&(e[a]=o)}}function id(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function cd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function ld(e,r){for(var n in r){var a=r[n],o=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(o,n,i):e.removeAttributeNS(o,n)}}function ud(e,r,n){var a=e.elmFs||(e.elmFs={});for(var o in n){var i=n[o],c=a[o];if(!i){e.removeEventListener(o,c),a[o]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(o,c)}c=$d(r,i),e.addEventListener(o,c,gi&&{passive:Di(i)<2}),a[o]=c}}var gi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){gi=!0}}))}catch{}function $d(e,r){function n(a){var o=n.q,i=Ke(o.a,a);if(!!ir(i)){for(var c=Di(o),l=i.a,u=c?c<3?l.a:l.ar:l,v=c==1?l.b:c==3&&l.c5,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cX)&&a.preventDefault(),e),m,p;m=f.j;){if(typeof m=="function")u=m(u);else for(var p=m.length;p--;)u=m[p](u);f=f.p}f(u,v)}}return n.q=r,n}function vd(e,r){return e.$==r.$&&Dn(e.a,r.a)}function Zl(e,r){var n=[];return cr(e,r,n,0),n}function je(e,r,n,a){var o={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(o),o}function cr(e,r,n,a){if(e!==r){var o=e.$,i=r.$;if(o!==i)if(o===1&&i===2)r=hd(r),i=1;else{je(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];cr(e.k,r.k,f,0),f.length>0&&je(n,1,a,f);return;case 4:for(var m=e.j,p=r.j,d=!1,b=e.k;b.$===4;)d=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var h=r.k;h.$===4;)d=!0,typeof p!="object"?p=[p,h.j]:p.push(h.j),h=h.k;if(d&&m.length!==p.length){je(n,0,a,r);return}(d?!fd(m,p):m!==p)&&je(n,2,a,p),cr(b,h,n,a+1);return;case 0:e.a!==r.a&&je(n,3,a,r.a);return;case 1:Fc(e,r,n,a,sd);return;case 2:Fc(e,r,n,a,dd);return;case 3:if(e.h!==r.h){je(n,0,a,r);return}var y=bi(e.d,r.d);y&&je(n,4,a,y);var x=r.i(e.g,r.g);x&&je(n,5,a,x);return}}}function fd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Fc(e,r,n,a,o){if(e.c!==r.c||e.f!==r.f){je(n,0,a,r);return}var i=bi(e.d,r.d);i&&je(n,4,a,i),o(e,r,n,a)}function bi(e,r,n){var a;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=bi(e[o],r[o]||{},o);i&&(a=a||{},a[o]=i);continue}if(!(o in r)){a=a||{},a[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var c=e[o],l=r[o];c===l&&o!=="value"&&o!=="checked"||n==="a0"&&vd(c,l)||(a=a||{},a[o]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function sd(e,r,n,a){var o=e.e,i=r.e,c=o.length,l=i.length;c>l?je(n,6,a,{v:l,i:c-l}):c<l&&je(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=o[v];cr(f,i[v],n,++a),a+=f.b||0}}function dd(e,r,n,a){for(var o=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,m=0,p=0,d=a;m<v&&p<f;){var b=l[m],h=u[p],y=b.a,x=h.a,_=b.b,k=h.b,A=void 0,I=void 0;if(y===x){d++,cr(_,k,o,d),d+=_.b||0,m++,p++;continue}var H=l[m+1],G=u[p+1];if(H){var O=H.a,J=H.b;I=x===O}if(G){var R=G.a,Z=G.b;A=y===R}if(A&&I){d++,cr(_,Z,o,d),ia(i,o,y,k,p,c),d+=_.b||0,d++,ca(i,o,y,J,d),d+=J.b||0,m+=2,p+=2;continue}if(A){d++,ia(i,o,x,k,p,c),cr(_,Z,o,d),d+=_.b||0,m+=1,p+=2;continue}if(I){d++,ca(i,o,y,_,d),d+=_.b||0,d++,cr(J,k,o,d),d+=J.b||0,m+=2,p+=1;continue}if(H&&O===R){d++,ca(i,o,y,_,d),ia(i,o,x,k,p,c),d+=_.b||0,d++,cr(J,Z,o,d),d+=J.b||0,m+=2,p+=2;continue}break}for(;m<v;){d++;var b=l[m],_=b.b;ca(i,o,b.a,_,d),d+=_.b||0,m++}for(;p<f;){var ae=ae||[],h=u[p];ia(i,o,h.a,h.b,void 0,ae),p++}(o.length>0||c.length>0||ae)&&je(n,8,a,{w:o,x:c,y:ae})}var Kl="_elmW6BL";function ia(e,r,n,a,o,i){var c=e[n];if(!c){c={c:0,z:a,r:o,s:void 0},i.push({r:o,A:c}),e[n]=c;return}if(c.c===1){i.push({r:o,A:c}),c.c=2;var l=[];cr(c.z,a,l,c.r),c.r=o,c.s.s={w:l,A:c};return}ia(e,r,n+Kl,a,o,i)}function ca(e,r,n,a,o){var i=e[n];if(!i){var c=je(r,9,o,void 0);e[n]={c:1,z:a,r:o,s:c};return}if(i.c===0){i.c=2;var l=[];cr(a,i.z,l,o),je(r,9,o,{w:l,A:i});return}ca(e,r,n+Kl,a,o)}function eu(e,r,n,a){la(e,r,n,0,0,r.b,a)}function la(e,r,n,a,o,i,c){for(var l=n[a],u=l.r;u===o;){var v=l.$;if(v===1)eu(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&la(e,r,f,0,o,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var f=m.w;f.length>0&&la(e,r,f,0,o,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var d=r.k;d.$===4;)d=d.k;return la(e,d,n,a,o+1,i,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,y=0;y<b.length;y++){o++;var x=p===1?b[y]:b[y].b,_=o+(x.b||0);if(o<=u&&u<=_&&(a=la(h[y],x,n,a,o,_,c),!(l=n[a])||(u=l.r)>i))return a;o=_}return a}function ru(e,r,n,a){return n.length===0?e:(eu(e,r,n,a),bt(e,n))}function bt(e,r){for(var n=0;n<r.length;n++){var a=r[n],o=a.t,i=md(o,a);o===e&&(e=i)}return e}function md(e,r){switch(r.$){case 0:return pd(e,r.s,r.u);case 4:return No(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return bt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,o=e.childNodes[a];a<n.length;a++)e.insertBefore(Ur(n[a],r.u),o);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=bt(e,i.w),e;case 8:return gd(e,r);case 5:return r.s(e);default:Xn(10)}}function pd(e,r,n){var a=e.parentNode,o=Ur(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),a&&o!==e&&a.replaceChild(o,e),o}function gd(e,r){var n=r.s,a=bd(n.y,r);e=bt(e,n.w);for(var o=n.x,i=0;i<o.length;i++){var c=o[i],l=c.A,u=l.c===2?l.s:Ur(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&mi(e,a),e}function bd(e,r){if(!!e){for(var n=Ar.createDocumentFragment(),a=0;a<e.length;a++){var o=e[a],i=o.A;mi(n,i.c===2?i.s:Ur(i.z,r.u))}return n}}function hi(e){if(e.nodeType===3)return Ro(e.textContent);if(e.nodeType!==1)return Ro("");for(var r=P,n=e.attributes,a=n.length;a--;){var o=n[a],i=o.name,c=o.value;r=wr(t(hn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,v=e.childNodes,a=v.length;a--;)u=wr(hi(v[a]),u);return s(mr,l,r,u)}function hd(e){for(var r=e.e,n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var _d=E(function(e,r,n,a){return di(r,a,e.fr,e.gc,e.f4,function(o,i){var c=e.gg,l=a.node,u=hi(l);return nu(i,function(v){var f=c(v),m=Zl(u,f);l=ru(l,u,m,o),u=f})})});E(function(e,r,n,a){return di(r,a,e.fr,e.gc,e.f4,function(o,i){var c=e.c3&&e.c3(o),l=e.gg,u=Ar.title,v=Ar.body,f=hi(v);return nu(i,function(m){gt=c;var p=l(m),d=mr("body")(P)(p.eT),b=Zl(f,d);v=ru(v,f,b,o),f=d,gt=0,u!==p.f8&&(Ar.title=u=p.f8)})})});var ht=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function nu(e,r){r(e);var n=0;function a(){n=n===1?0:(ht(a),r(e),1)}return function(o,i){e=o,i?(r(e),n===2&&(n=1)):(n===0&&ht(a),n=2)}}$(function(e,r){return t(Bi,ji,Hr(function(){r&&history.go(r),e()}))});$(function(e,r){return t(Bi,ji,Hr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return t(Bi,ji,Hr(function(){history.replaceState({},"",r),e()}))});var yd={addEventListener:function(){},removeEventListener:function(){}},wd=typeof window!="undefined"?window:yd;S(function(e,r,n){return Ol(Hr(function(a){function o(i){fi(n(i))}return e.addEventListener(r,o,gi&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});$(function(e,r){var n=Ke(e,r);return ir(n)?Y(n.a):F});function au(e,r){return Hr(function(n){ht(function(){var a=document.getElementById(e);n(a?bn(r(a)):js(Gm(e)))})})}function Sd(e){return Hr(function(r){ht(function(){r(bn(e()))})})}$(function(e,r){return au(r,function(n){return n[e](),Ma})});$(function(e,r){return Sd(function(){return wd.scroll(e,r),Ma})});S(function(e,r,n){return au(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ma})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Pd=$(function(e,r){var n="g";e.fD&&(n+="m"),e.eU&&(n+="i");try{return Y(new RegExp(r,n))}catch{return F}});$(function(e,r){return r.match(e)!==null});var xd=S(function(e,r,n){for(var a=[],o=0,i=n,c=r.lastIndex,l=-1,u;o++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?Y(m):F}a.push(C(Yu,u[0],u.index,o,g(f))),l=r.lastIndex}return r.lastIndex=c,g(a)});E(function(e,r,n,a){var o=0;function i(c){if(o++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Y(v):F}return n(C(Yu,c,arguments[arguments.length-2],o,g(u)))}return a.replace(r,i)});S(function(e,r,n){for(var a=n,o=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;o.push(a.slice(i,l.index)),i=r.lastIndex}return o.push(a.slice(i)),r.lastIndex=c,g(o)});var Ec=0;function ha(e,r){for(;r.b;r=r.b)e(r.a)}function _i(e){for(var r=0;e.b;e=e.b)r++;return r}var Cd=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},zd=he(function(e,r,n,a,o){return{$:0,a:e,b:r,c:n,d:a,e:o}}),kd=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Ld=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Td=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Md=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Dd=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),jd=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Ad=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Bd=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Fd=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Ed=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Vd=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Wd=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},tu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},ou=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Rd=function(e){e.gl.disable(e.gl.CULL_FACE)},Nd=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Gd=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Hd=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Vc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Id=[Ed,Vd,Wd,tu,ou,Rd,Nd,Gd,Hd];function Wc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function qd(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function iu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Od(e,r,n,a){for(var o=n.a.dt,i=[],c=0;c<o;c++)i.push(String.fromCharCode(97+c));function l(d,b,h,y,x){var _;if(o===1)for(_=0;_<b;_++)d[h++]=b===1?y[x]:y[x][_];else i.forEach(function(k){for(_=0;_<b;_++)d[h++]=b===1?y[k][x]:y[k][x][_]})}var u=iu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*o,m=new u.type(_i(n.b)*f);ha(function(d){l(m,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=f},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),p}function Jd(e,r){if(r.a.dC>0){var n=e.createBuffer(),a=Ud(r.c,r.a.dC);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dt*_i(r.b),indexBuffer:null,buffers:{}}}function Ud(e,r){var n=new Uint32Array(_i(e)*r),a=0,o;return ha(function(i){if(r===1)n[a++]=i;else for(o=0;o<r;o++)n[a++]=i[String.fromCharCode(97+o)]},e),n}function Rc(e,r){return e+"#"+r}var cu=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),tu(n),ou(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function o(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Rc(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Ec++,v||(v=Wc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=Ec++,f||(f=Wc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var m=qd(a,v,f);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Xd(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var d=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(b)}c=Rc(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Qd(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=Jd(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[d.name]===void 0&&(h.buffers[d.name]=Od(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[d.name]);var y=iu(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var x=y.size*4,_=x*y.arraySize,k=0;k<y.arraySize;k++)a.enableVertexAttribArray(b+k),a.vertexAttribPointer(b+k,y.size,y.baseType,!1,_,x*k)}for(n.toggle=!n.toggle,ha(Rh(n),i.a),u=0;u<Vc.length;u++){var A=n[Vc[u]];A.toggle!==n.toggle&&A.enabled&&(Id[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.eb,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.eb,0,h.numIndices)}}return ha(o,e.g),r});function Xd(e,r,n,a){var o=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,b){var h=b.name,y=e.getUniformLocation(d,h);switch(b.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(y,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(y,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var k=l.textures.get(_);k||(k=_.e0(e),l.textures.set(_,k)),e.bindTexture(e.TEXTURE_2D,k),i[h]!==_&&(e.uniform1i(y,x),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};default:return function(){}}}for(var v={},f=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var p=e.getActiveUniform(o,m);v[a[p.name]||p.name]=u(o,p)}return v}function Qd(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Yd=S(function(e,r,n){return Zs(r,{g:n,f:{},h:e},tm,om)}),Zd=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Kd=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),em=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),rm=$(function(e,r){e.contextAttributes.antialias=!0}),nm=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),am=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function tm(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ha(function(o){return t(Wh,r,o)},e.h);var n=Ar.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(o){o(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Cd(function(){return t(cu,e,n)})):(n=Ar.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function om(e,r){return r.f=e.f,cu(r)}var im=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/cm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function cm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var yi=new Float64Array(3),Nc=new Float64Array(3),Gc=new Float64Array(3),lm=S(function(e,r,n){return new Float64Array([e,r,n])}),um=function(e){return e[0]},$m=function(e){return e[1]},vm=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var fm=function(e){return new Float64Array([e.gl,e.gp,e.dg])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function lu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(lu);function uu(e,r,n){return n===void 0&&(n=new Float64Array(3)),_t(lu(e,r,n),n)}$(uu);function $u(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+a*a+o*o)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return n*n+a*a+o*o});function _t(e,r){r===void 0&&(r=new Float64Array(3));var n=1/$u(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var sm=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),ua=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(ua);function Go(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Go);$(function(e,r){var n,a=yi,o=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=ua(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],o[0]=(ua(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],o[1]=(ua(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],o[2]=(ua(r,a)+e[14])/n,o});var dm=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var mm=function(e){return{gl:e[0],gp:e[1],dg:e[2],eJ:e[3]}},pm=function(e){return new Float64Array([e.gl,e.gp,e.dg,e.eJ])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/gm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function gm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+o*o+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+o*o+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var bm=new Float64Array(16),hm=new Float64Array(16),_m=function(e){var r=new Float64Array(16);return r[0]=e.dP,r[1]=e.dT,r[2]=e.dX,r[3]=e.d$,r[4]=e.dQ,r[5]=e.dU,r[6]=e.dY,r[7]=e.d0,r[8]=e.dR,r[9]=e.dV,r[10]=e.dZ,r[11]=e.d1,r[12]=e.dS,r[13]=e.dW,r[14]=e.d_,r[15]=e.d2,r},ym=function(e){return{dP:e[0],dT:e[1],dX:e[2],d$:e[3],dQ:e[4],dU:e[5],dY:e[6],d0:e[7],dR:e[8],dV:e[9],dZ:e[10],d1:e[11],dS:e[12],dW:e[13],d_:e[14],d2:e[15]}};function vu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2*o/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*o/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+o)/(i-o),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*o/(i-o),c[15]=0,c}tr(vu);E(function(e,r,n,a){var o=n*Math.tan(e*Math.PI/360),i=-o,c=i*r,l=o*r;return vu(c,l,i,o,n,a)});function fu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-o),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+o)/(i-o),c[15]=1,c}tr(fu);E(function(e,r,n,a){return fu(e,r,n,a,-1,1)});function su(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],m=e[8],p=e[9],d=e[10],b=e[11],h=e[12],y=e[13],x=e[14],_=e[15],k=r[0],A=r[1],I=r[2],H=r[3],G=r[4],O=r[5],J=r[6],R=r[7],Z=r[8],ae=r[9],pe=r[10],_e=r[11],fe=r[12],Se=r[13],Oe=r[14],Re=r[15];return n[0]=a*k+l*A+m*I+h*H,n[1]=o*k+u*A+p*I+y*H,n[2]=i*k+v*A+d*I+x*H,n[3]=c*k+f*A+b*I+_*H,n[4]=a*G+l*O+m*J+h*R,n[5]=o*G+u*O+p*J+y*R,n[6]=i*G+v*O+d*J+x*R,n[7]=c*G+f*O+b*J+_*R,n[8]=a*Z+l*ae+m*pe+h*_e,n[9]=o*Z+u*ae+p*pe+y*_e,n[10]=i*Z+v*ae+d*pe+x*_e,n[11]=c*Z+f*ae+b*pe+_*_e,n[12]=a*fe+l*Se+m*Oe+h*Re,n[13]=o*fe+u*Se+p*Oe+y*Re,n[14]=i*fe+v*Se+d*Oe+x*Re,n[15]=c*fe+f*Se+b*Oe+_*Re,n}$(su);$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],m=e[10],p=e[12],d=e[13],b=e[14],h=r[0],y=r[1],x=r[2],_=r[4],k=r[5],A=r[6],I=r[8],H=r[9],G=r[10],O=r[12],J=r[13],R=r[14];return n[0]=a*h+c*y+v*x,n[1]=o*h+l*y+f*x,n[2]=i*h+u*y+m*x,n[3]=0,n[4]=a*_+c*k+v*A,n[5]=o*_+l*k+f*A,n[6]=i*_+u*k+m*A,n[7]=0,n[8]=a*I+c*H+v*G,n[9]=o*I+l*H+f*G,n[10]=i*I+u*H+m*G,n[11]=0,n[12]=a*O+c*J+v*R+p,n[13]=o*O+l*J+f*R+d,n[14]=i*O+u*J+m*R+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=_t(r,yi);var a=r[0],o=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=o*a*l+i*u,n[2]=i*a*l-o*u,n[3]=0,n[4]=a*o*l-i*u,n[5]=o*o*l+c,n[6]=o*i*l+a*u,n[7]=0,n[8]=a*i*l+o*u,n[9]=o*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});S(function(e,r,n){var a=new Float64Array(16),o=1/$u(r),i=r[0]*o,c=r[1]*o,l=r[2]*o,u=Math.cos(e),v=1-u,f=Math.sin(e),m=i*f,p=c*f,d=l*f,b=i*c*v,h=i*l*v,y=c*l*v,x=i*i*v+u,_=b+d,k=h-p,A=b-d,I=c*c*v+u,H=y+m,G=h+p,O=y-m,J=l*l*v+u,R=n[0],Z=n[1],ae=n[2],pe=n[3],_e=n[4],fe=n[5],Se=n[6],Oe=n[7],Re=n[8],Or=n[9],Jr=n[10],mo=n[11],tf=n[12],of=n[13],cf=n[14],lf=n[15];return a[0]=R*x+_e*_+Re*k,a[1]=Z*x+fe*_+Or*k,a[2]=ae*x+Se*_+Jr*k,a[3]=pe*x+Oe*_+mo*k,a[4]=R*A+_e*I+Re*H,a[5]=Z*A+fe*I+Or*H,a[6]=ae*A+Se*I+Jr*H,a[7]=pe*A+Oe*I+mo*H,a[8]=R*G+_e*O+Re*J,a[9]=Z*G+fe*O+Or*J,a[10]=ae*G+Se*O+Jr*J,a[11]=pe*G+Oe*O+mo*J,a[12]=tf,a[13]=of,a[14]=cf,a[15]=lf,a});function wm(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}S(wm);E(function(e,r,n,a){var o=new Float64Array(16);return o[0]=a[0]*e,o[1]=a[1]*e,o[2]=a[2]*e,o[3]=a[3]*e,o[4]=a[4]*r,o[5]=a[5]*r,o[6]=a[6]*r,o[7]=a[7]*r,o[8]=a[8]*n,o[9]=a[9]*n,o[10]=a[10]*n,o[11]=a[11]*n,o[12]=a[12],o[13]=a[13],o[14]=a[14],o[15]=a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Sm(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}S(Sm);E(function(e,r,n,a){var o=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],m=a[6],p=a[7],d=a[8],b=a[9],h=a[10],y=a[11];return o[0]=i,o[1]=c,o[2]=l,o[3]=u,o[4]=v,o[5]=f,o[6]=m,o[7]=p,o[8]=d,o[9]=b,o[10]=h,o[11]=y,o[12]=i*e+v*r+d*n+a[12],o[13]=c*e+f*r+b*n+a[13],o[14]=l*e+m*r+h*n+a[14],o[15]=u*e+p*r+y*n+a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],m=r[5],p=r[6],d=r[7],b=r[8],h=r[9],y=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=p,n[7]=d,n[8]=b,n[9]=h,n[10]=y,n[11]=x,n[12]=c*a+f*o+b*i+r[12],n[13]=l*a+m*o+h*i+r[13],n[14]=u*a+p*o+y*i+r[14],n[15]=v*a+d*o+x*i+r[15],n});S(function(e,r,n){var a=uu(e,r,yi),o=_t(Go(n,a,Nc),Nc),i=_t(Go(a,o,Gc),Gc),c=bm,l=hm;return c[0]=o[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=o[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=o[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,su(c,l)});S(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var L=zf,Ja=_f,du=S(function(e,r,n){var a=n.c,o=n.d,i=$(function(c,l){if(c.$){var v=c.a;return s(Ja,e,l,v)}else{var u=c.a;return s(Ja,i,l,u)}});return s(Ja,i,s(Ja,e,r,o),a)}),wi=S(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,o=n.c,i=n.d,c=n.e,l=e,u=s(e,a,o,s(wi,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Hc=function(e){return s(wi,S(function(r,n,a){return t(L,w(r,n),a)}),P,e)},mu=1,Pm=2,pu=0,Ae=function(e){return{$:1,a:e}},Si=$(function(e,r){return{$:3,a:e,b:r}}),Ic=$(function(e,r){return{$:0,a:e,b:r}}),gu=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},xm=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},F={$:1},Cm=ns,bu=zs,xe=Il,nn=$(function(e,r){return t(Kf,e,Rt(r))}),Pi=$(function(e,r){return g(t(Zf,e,r))}),hu=function(e){return t(nn,`
    `,t(Pi,`
`,e))},De=S(function(e,r,n){e:for(;;)if(n.b){var a=n.a,o=n.b,i=e,c=t(e,a,r),l=o;e=i,r=c,n=l;continue e}else return r}),sr=function(e){return s(De,$(function(r,n){return n+1}),0,e)},Ht=kf,zm=S(function(e,r,n){e:for(;;)if(q(e,r)<1){var a=e,o=r-1,i=t(L,r,n);e=a,r=o,n=i;continue e}else return n}),fn=$(function(e,r){return s(zm,e,r,P)}),xi=$(function(e,r){return s(Ht,e,t(fn,0,sr(r)-1),r)}),hr=us,_u=function(e){var r=hr(e);return 97<=r&&r<=122},yu=function(e){var r=hr(e);return r<=90&&65<=r},km=function(e){return _u(e)||yu(e)},Lm=function(e){var r=hr(e);return r<=57&&48<=r},Tm=function(e){return _u(e)||yu(e)||Lm(e)},ve=function(e){return s(De,L,P,e)},Qn=Uf,Mm=$(function(e,r){return`

(`+(xe(e+1)+(") "+hu(Dm(r))))}),Dm=function(e){return t(jm,e,P)},jm=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=Qn(n);if(h.$===1)return!1;var y=h.a,x=y.a,_=y.b;return km(x)&&t(Cm,Tm,_)}(),o=a?"."+n:"['"+(n+"']"),u=c,v=t(L,o,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(xe(i)+"]"),u=c,v=t(L,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+t(nn,"",ve(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(xe(sr(f))+" ways:"));return t(nn,`

`,t(L,b,t(xi,Mm,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(nn,"",ve(r)):"!"}();default:var p=e.a,d=e.b,b=function(){return r.b?"Problem with the value at json"+(t(nn,"",ve(r))+`:

    `):`Problem with the given value:

`}();return b+(hu(t(bu,4,d))+(`

`+p))}}),me=32,Br=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),sn=vf,Ci=Nf,zi=$(function(e,r){return Lc(r)/Lc(e)}),Am=Wf,ur=Ci(t(zi,2,me)),ki=C(Br,0,ur,sn,sn),wu=df,dn=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});var Bm=$(function(e,r){return r(e)}),Fm=Gf,Sr=sf,Qe=$(function(e,r){return q(e,r)>0?e:r}),tn=function(e){return{$:0,a:e}},Li=mf,Em=$(function(e,r){e:for(;;){var n=t(Li,me,e),a=n.a,o=n.b,i=t(L,tn(a),r);if(o.b){var c=o,l=i;e=c,r=l;continue e}else return ve(i)}}),Vm=function(e){var r=e.a;return r},Wm=$(function(e,r){e:for(;;){var n=Ci(r/me);if(n===1)return t(Li,me,e).a;var a=t(Em,e,P),o=n;e=a,r=o;continue e}}),Ti=$(function(e,r){if(r.o){var n=r.o*me,a=Fm(t(zi,me,n-1)),o=e?ve(r.C):r.C,i=t(Wm,o,r.o);return C(Br,Sr(r.s)+n,t(Qe,5,a*ur),i,r.s)}else return C(Br,Sr(r.s),ur,sn,r.s)}),Rm=he(function(e,r,n,a,o){e:for(;;){if(r<0)return t(Ti,!1,{C:a,o:n/me|0,s:o});var i=dn(s(wu,me,r,e)),c=e,l=r-me,u=n,v=t(L,i,a),f=o;e=c,r=l,n=u,a=v,o=f;continue e}}),Su=$(function(e,r){if(e<=0)return ki;var n=e%me,a=s(wu,n,e-n,r),o=e-n-me;return z(Rm,r,o,e,P,a)}),ir=function(e){return!e.$},B=_s,ee=ss,j=bs,ne=ds,Nm=function(e){return{$:2,a:e}},It=$(function(e,r){return e}),Pu=$(function(e,r){return{eY:r.eY,eZ:e,bf:r.bf,ds:r.ds,dI:r.dI,ei:r.ei,a4:r.a4,gh:r.gh}}),_a=ws,Mi=Ss,ge=vs,Di=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},_r=function(e){return e},Gm=_r,qc=tr(function(e,r,n,a,o,i){return{dy:i,dA:r,ef:a,ek:n,eo:e,ep:o}}),Hm=as,an=Xf,jn=es,Da=$(function(e,r){return e<1?r:s(jn,e,an(r),r)}),qt=os,Ot=function(e){return e===""},Jt=$(function(e,r){return e<1?"":s(jn,0,e,r)}),xu=is,Oc=he(function(e,r,n,a,o){if(Ot(o)||t(Hm,"@",o))return F;var i=t(qt,":",o);if(i.b){if(i.b.b)return F;var c=i.a,l=xu(t(Da,c+1,o));if(l.$===1)return F;var u=l;return Y(Ge(qc,e,t(Jt,c,o),u,r,n,a))}else return Y(Ge(qc,e,o,F,r,n,a))}),Jc=E(function(e,r,n,a){if(Ot(a))return F;var o=t(qt,"/",a);if(o.b){var i=o.a;return z(Oc,e,t(Da,i,a),r,n,t(Jt,i,a))}else return z(Oc,e,"/",r,n,a)}),Uc=S(function(e,r,n){if(Ot(n))return F;var a=t(qt,"?",n);if(a.b){var o=a.a;return C(Jc,e,Y(t(Da,o+1,n)),r,t(Jt,o,n))}else return C(Jc,e,F,r,n)});$(function(e,r){if(Ot(r))return F;var n=t(qt,"#",r);if(n.b){var a=n.a;return s(Uc,e,Y(t(Da,a+1,r)),t(Jt,a,r))}else return s(Uc,e,F,r)});var Im=ts,ji=function(e){},ja=bn,qm=ja(0),Cu=E(function(e,r,n,a){if(a.b){var o=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,m=v.b,p=n>500?s(De,e,r,ve(m)):C(Cu,e,r,n+1,m);return t(e,o,t(e,c,t(e,u,t(e,f,p))))}else return t(e,o,t(e,c,t(e,u,r)))}else return t(e,o,t(e,c,r))}else return t(e,o,r)}else return r}),Ir=S(function(e,r,n){return C(Cu,e,r,0,n)}),Q=$(function(e,r){return s(Ir,$(function(n,a){return t(L,e(n),a)}),P,r)}),yt=Wo,Ai=$(function(e,r){return t(yt,function(n){return ja(e(n))},r)}),Om=S(function(e,r,n){return t(yt,function(a){return t(yt,function(o){return ja(t(e,a,o))},n)},r)}),Jm=function(e){return s(Ir,Om(L),ja(P),e)},Um=Ns,Xm=$(function(e,r){var n=r;return Ol(t(yt,Um(e),n))}),Qm=S(function(e,r,n){return t(Ai,function(a){return 0},Jm(t(Q,Xm(e),r)))}),Ym=S(function(e,r,n){return ja(0)}),Zm=$(function(e,r){var n=r;return t(Ai,e,n)});br.Task=Ws(qm,Qm,Ym,Zm);var Km=Ul("Task"),Bi=$(function(e,r){return Km(t(Ai,e,r))}),ep=_d,rp=Of,wt={$:1},zu=function(e){return{$:2,a:e}},Ut={$:0},rr=$(function(e,r){return{$:0,a:e,b:r}}),te=S(function(e,r,n){return r(e(n))}),Yn=function(e){var r=e.b.q;return r.a},np=function(e){var r=e.a,n=e.b.W,a=e.b.q,o=e.b.ae;if(o.b){var i=o.a,c=o.b;return Y(t(rr,r,{q:i,ae:c,W:t(L,a,n)}))}else return F},ku=function(e){var r=e.b;return t(rr,Ut,r)},Ve=$(function(e,r){if(r.$)return e;var n=r.a;return n}),ap=S(function(e,r,n){var a=n.a,o=n.b;switch(a.$){case 1:return r.ei.dr?ku(n):n;case 2:var i=a.a.c6;return(q(i+r.ds,Yn(n).eY)>0?t(te,np,Ve(t(rr,wt,o))):_r)(t(rr,zu({c6:i+r.ds}),o));default:var c=o.q,l=c.a,u=c.b,v=t(Pu,l.eZ,D(r,{eY:l.eY+r.ds})),f=t(e,v,u);return t(rr,Ut,{q:w(v,f),ae:P,W:t(L,o.q,o.W)})}}),Lu=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,o=n;e=a,r=o;continue e}else return r}}),tp=S(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,o=r.b,i=e-1,c=o,l=t(L,a,n);e=i,r=c,n=l;continue e}else return n}}),op=$(function(e,r){return ve(s(tp,e,r,P))}),Tu=S(function(e,r,n){if(r<=0)return P;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var o=a.b,_=o.a,i=o.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return g([_,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,p=m.b,c=p.a,d=p.b,f=d.a,b=d.b,h=b.a,y=b.b;return e>1e3?t(L,_,t(L,c,t(L,f,t(L,h,t(op,r-4,y))))):t(L,_,t(L,c,t(L,f,t(L,h,s(Tu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return g([_])}}),Mu=$(function(e,r){return s(Tu,0,e,r)}),ip=$(function(e,r){var n=r.b.W,a=r.b.q,o=r.b.ae,i=le(ve(n),le(g([a]),o)),c=t(Mu,e,i),l=t(Lu,e,i);if(l.b){var u=l.a,v=l.b;return t(rr,wt,{q:u,ae:v,W:ve(c)})}else{var f=ve(c);if(f.b){var m=f.a,p=f.b;return t(rr,wt,{q:m,ae:P,W:p})}else return r}}),cp=function(e){var r=e.b;return t(rr,wt,r)},lp=function(e){var r=e.b;return t(rr,zu({c6:Yn(e).eY}),r)},up=$(function(e,r){switch(e.$){case 1:return cp(r);case 2:return ku(r);case 3:return lp(r);default:var n=e.a;return t(ip,n,r)}}),Du=$(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),$p=$(function(e,r){return D(r,{aB:e(r.aB)})}),ju=function(e){return{$:3,a:e}},Au=function(e){return{$:2,a:e}},Bu=$(function(e,r){return{$:0,a:e,b:r}}),vp=$(function(e,r){return{$:1,a:e,b:r}}),re=$(function(e,r){if(r.$)return F;var n=r.a;return Y(e(n))}),K=function(e){return e<0?-e:e},Fi=cs,fp=S(function(e,r,n){return t(Ve,0/0,Fi(t(e,r,n)))}),Fu=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var o=e,i=a;e=o,r=i;continue e}else return!1}),sp=xf,dp=Yf,Eu=function(e){return s(dp,L,P,e)},mp=$(function(e,r){var n=t(Fu,function(a){return a!=="0"&&a!=="."},Eu(r));return le(e&&n?"-":"",r)}),Be=Il,Ho=Jf,Vu=$s,Wu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Qn(n);if(a.$===1)return"01";var o=a.a;return t(Ho,"0",Wu(o))}else{var i=hr(r);return i>=48&&i<57?t(Ho,Vu(i+1),n):"0"}},Io=Rf,pp=qf,Xt=function(e){return t(Ho,e,"")},Ru=S(function(e,r,n){return e<=0?n:s(Ru,e>>1,le(r,r),e&1?le(n,r):n)}),ya=$(function(e,r){return s(Ru,e,r,"")}),qo=S(function(e,r,n){return le(n,t(ya,e-an(n),Xt(r)))}),Oo=Qf,Nu=function(e){var r=t(Pi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a;return w(n,o)}else{var n=r.a;return w(n,"0")}else return w("0","0")},gp=function(e){var r=t(Pi,"e",Be(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=t(Ve,0,xu(t(Im,"+",o)?t(Da,1,o):o)),c=Nu(n),l=c.a,u=c.b,v=le(l,u),f=i<0?t(Ve,"0",t(re,function(m){var p=m.a,d=m.b;return p+("."+d)},t(re,Du(Xt),Qn(le(t(ya,K(i),"0"),v))))):s(qo,i+1,"0",v);return le(e<0?"-":"",f)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},bp=S(function(e,r,n){if(Io(n)||pp(n))return Be(n);var a=n<0,o=Nu(gp(K(n))),i=o.a,c=o.b,l=an(i)+r,u=le(t(ya,-l+1,"0"),s(qo,l,"0",le(i,c))),v=an(u),f=t(Qe,1,l),m=t(e,a,s(jn,f,v,u)),p=s(jn,0,f,u),d=m?Oo(t(Ve,"1",t(re,Wu,Qn(Oo(p))))):p,b=an(d),h=d==="0"?d:r<=0?le(d,t(ya,K(r),"0")):q(r,an(c))<0?s(jn,0,b-r,d)+("."+s(jn,b-r,b,d)):le(i+".",s(qo,r,"0",c));return t(mp,a,h)}),Gu=bp($(function(e,r){var n=Qn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,o=a.a;return function(i){return i>53&&e||i>=53&&!e}(hr(o))})),hp=fp(Gu),_p=S(function(e,r,n){var a=t(zi,10,K(r-e)),o=a<0?3:a<1?2:a<2?1:0;return t(hp,o,n)}),Ei=Cf,Zn=$(function(e,r){e:for(;;){if(r.$===-2)return F;var n=r.b,a=r.c,o=r.d,i=r.e,c=t(Ei,e,n);switch(c){case 0:var l=e,u=o;e=l,r=u;continue e;case 1:return Y(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,o){return{$:-1,a:e,b:r,c:n,d:a,e:o}}),Pr={$:-2},Hn=he(function(e,r,n,a,o){if(o.$===-1&&!o.a){o.a;var i=o.b,c=o.c,l=o.d,u=o.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,m=a.d,p=a.e;return z(X,0,r,n,z(X,1,v,f,m,p),z(X,1,i,c,l,u))}else return z(X,e,i,c,z(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,d=a.d;d.a;var b=d.b,h=d.c,y=d.d,x=d.e,p=a.e;return z(X,0,v,f,z(X,1,b,h,y,x),z(X,1,r,n,p,o))}else return z(X,e,r,n,a,o)}),Jo=S(function(e,r,n){if(n.$===-2)return z(X,0,e,r,Pr,Pr);var a=n.a,o=n.b,i=n.c,c=n.d,l=n.e,u=t(Ei,e,o);switch(u){case 0:return z(Hn,a,o,i,s(Jo,e,r,c),l);case 1:return z(X,a,o,r,c,l);default:return z(Hn,a,o,i,c,s(Jo,e,r,l))}}),on=S(function(e,r,n){var a=s(Jo,e,r,n);if(a.$===-1&&!a.a){a.a;var o=a.b,i=a.c,c=a.d,l=a.e;return z(X,1,o,i,c,l)}else{var u=a;return u}}),yp=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Hu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d,u=o.e,v=e.e;v.a;var f=v.b,m=v.c,p=v.d;p.a;var d=p.b,b=p.c,h=p.d,y=p.e,x=v.e;return z(X,0,d,b,z(X,1,n,a,z(X,0,i,c,l,u),h),z(X,1,f,m,y,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,k=e.e;k.a;var f=k.b,m=k.c,p=k.d,x=k.e;return z(X,1,n,a,z(X,0,i,c,l,u),z(X,0,f,m,p,x))}else return e},Xc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d;l.a;var u=l.b,v=l.c,f=l.d,m=l.e,p=o.e,d=e.e;d.a;var b=d.b,h=d.c,y=d.d,x=d.e;return z(X,0,i,c,z(X,1,u,v,f,m),z(X,1,n,a,p,z(X,0,b,h,y,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,k=_.d,p=_.e,A=e.e;A.a;var b=A.b,h=A.c,y=A.d,x=A.e;return z(X,1,n,a,z(X,0,i,c,k,p),z(X,0,b,h,y,x))}else return e},wp=Vt(function(e,r,n,a,o,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return z(X,n,l,u,v,z(X,0,a,o,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Xc(r)}else break e;else return c.a,c.d,Xc(r);else break e;return r}}),ct=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,o=e.d,i=o.a,c=o.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,z(X,r,n,a,ct(o),l);var u=Hu(e);if(u.$===-1){var v=u.a,f=u.b,m=u.c,p=u.d,d=u.e;return z(Hn,v,f,m,ct(p),d)}else return Pr}else return z(X,r,n,a,ct(o),l)}else return Pr},sa=$(function(e,r){if(r.$===-2)return Pr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(q(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,z(X,n,a,o,t(sa,e,i),c);var u=Hu(r);if(u.$===-1){var v=u.a,f=u.b,m=u.c,p=u.d,d=u.e;return z(Hn,v,f,m,t(sa,e,p),d)}else return Pr}else return z(X,n,a,o,t(sa,e,i),c);else return t(Sp,e,vi(wp,e,r,n,a,o,i,c))}),Sp=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(be(e,a)){var l=yp(c);if(l.$===-1){var u=l.b,v=l.c;return z(Hn,n,u,v,i,ct(c))}else return Pr}else return z(Hn,n,a,o,i,t(sa,e,c))}else return Pr}),Pp=$(function(e,r){var n=t(sa,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,o=n.c,i=n.d,c=n.e;return z(X,1,a,o,i,c)}else{var l=n;return l}}),Ua=S(function(e,r,n){var a=r(t(Zn,e,n));if(a.$)return t(Pp,e,n);var o=a.a;return s(on,e,o,n)}),xp=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(Ua,r,re(function(a){if(a.$===1){var o=a.a,i=o.a,c=o.b;return t(vp,w(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(Ua,r,re(function(a){if(a.$)return a;var o=a.a,i=o.a,c=o.b;return t(Bu,w(i,c),s(_p,i,c,n))}));case 3:var r=e.a,n=e.b;return t(Ua,r,re(function(a){return a.$===3?ju(n):a}));default:var r=e.a,n=e.b;return t(Ua,r,re(function(a){return a.$===2?Au(n):a}))}},Cp=function(e){return $p(xp(e))},zp=$(function(e,r){return t(Q,Cp(e),r)}),kp=$(function(e,r){return D(r,{eZ:t(zp,e,r.eZ)})}),Lp=$(function(e,r){var n=r.a,a=r.b;return t(rr,n,D(a,{q:t(Du,kp(e),a.q)}))}),Tp=$(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),Mp=S(function(e,r,n){var a=n.a,o=n.b,i=o.q;return t(rr,a,D(o,{q:t(Tp,t(e,i.a,r),i)}))}),Dp=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return D(a,{aT:!a.aT});case 2:var o=n.a;return D(a,{J:s(ap,e,o,a.J)});case 3:var i=n.a;return D(a,{J:t(Lp,i,a.J)});case 4:var c=n.a;return D(a,{J:s(Mp,r,c,a.J)});default:var l=n.a;return D(a,{J:t(up,l,a.J)})}}),jp=$(function(e,r){return t(rr,Ut,{q:w(e,r(e)),ae:P,W:P})}),Ap=Gs,Qc=Ap(P),$r=ps,wa=ms,Bp=Js("tick",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return ge({eY:c,bf:i,ds:o,dI:a,ei:n,a4:r,gh:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return ge({eL:m,e_:f,dr:v,e7:u,fw:l,fP:c,fU:i,ew:o,eE:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",$r(wa)))},t(j,"left",ee))},t(j,"pressedKeys",$r(wa)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return ge({dr:v,ft:u,fC:l,fV:c,fW:i,eE:o,gl:a,gp:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return ge({fl:n,gj:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return ge({e1:r,e2:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne))))),Fp=function(e){return{$:4,a:e}},Ep={$:0},Vp=Gt,or=$(function(e,r){return t(Yl,e,Vp(r))}),W=or("className"),Wp=function(e){var r=e.b.q;return r.b},V=mr("div"),Sa=or("id"),Rp=Ks,St=Rp,Np=ed,Pe=Np,Gp={$:1},Hp=function(e){return{$:3,a:e}},Ip=function(e){return{$:5,a:e}},Yc=mr("a"),Qt=mr("button"),qp=hn("d"),Iu=Xl("http://www.w3.org/2000/svg"),Op=Iu("path"),Jp=Iu("svg"),Up=hn("viewBox"),da=function(e){return t(Jp,g([Up("0 0 100 100"),t(Pe,"width","100%"),t(Pe,"height","100%")]),g([t(Op,g([qp(e)]),P)]))},Zc=function(e){return t(or,"href",nd(e))},Fn={e6:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",ff:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",fk:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fM:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fN:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ei:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fR:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",f0:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",gb:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",gd:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gt:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Xp=function(e){return{$:0,a:e}},qu=Ql,Ou=$(function(e,r){return t(qu,e,Xp(r))}),Yt=function(e){return t(Ou,"click",ge(e))},Kc=or("target"),Qp=or("title"),Uo=$(function(e,r){if(r.$===-2)return Pr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;return z(X,n,a,t(e,a,o),t(Uo,e,i),t(Uo,e,c))}),Yp=Ro,we=Yp,Zp=function(e){return s(wi,S(function(r,n,a){return t(L,n,a)}),P,e)},Kp=$(function(e,r){return{$:3,a:e,b:r}}),eg=$(function(e,r){return{$:2,a:e,b:r}}),rg=$(function(e,r){return{$:0,a:e,b:r}}),ng=$(function(e,r){return{$:1,a:e,b:r}}),zr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ju=C(zr,0/255,0/255,0/255,1),Uu=Gt,ag=$(function(e,r){return t(Yl,e,Uu(r))}),Xu=ag("checked"),Ye=Hf,tg=S(function(e,r,n){return le(t(ya,e-an(n),Xt(r)),n)}),Pt=Df,Qu=function(e){var r=function(n){return n<10?xe(n):Xt(Vu(87+n))};return e<16?r(e):le(Qu(e/16|0),r(t(Pt,16,e)))},og=t(te,Qu,t(tg,2,"0")),Vi=function(e){var r=e.a,n=e.b,a=e.c,o=e.d;return{aP:o,cg:a,cm:n,cZ:r}},ig=function(e){var r=Vi(e),n=r.cZ,a=r.cm,o=r.cg;return t(nn,"",t(L,"#",t(Q,t(te,Ye,og),g([n*255,a*255,o*255]))))},xt=or("htmlFor"),Fr=$(function(e,r){if(r.$)return F;var n=r.a;return e(n)}),Ct=$(function(e,r){if(r.$){var a=r.a;return Ae(a)}else{var n=r.a;return e(n)}}),cg=S(function(e,r,n){var a=e(r);if(a.$)return n;var o=a.a;return t(L,o,n)}),mn=$(function(e,r){return s(Ir,cg(e),P,r)}),Yu=E(function(e,r,n,a){return{fq:r,fA:e,fH:n,f3:a}}),lg=xd,ug=ls,$g=$(function(e,r){if(r.$)return Ae(e);var n=r.a;return ue(n)}),vg=Pd,fg=function(e){return t(vg,{eU:!1,fD:!1},e)},Kn=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return F},sg=$(function(e,r){if(r.$){var a=r.a;return Ae(a)}else{var n=r.a;return ue(e(n))}}),dg=function(e){return{$:2,a:e}},mg=function(e){return{$:0,a:e}},pg=function(e){return{$:1,a:e}},bo=$(function(e,r){return hr(r)-hr(e)}),ho=S(function(e,r,n){var a=hr(n);return q(hr(e),a)<1&&q(a,hr(r))<1}),gg=$(function(e,r){var n=function(o){return q(o,e)<0?ue(o):Ae(pg(r))},a=s(ho,"0","9",r)?ue(t(bo,"0",r)):s(ho,"a","z",r)?ue(10+t(bo,"a",r)):s(ho,"A","Z",r)?ue(10+t(bo,"A",r)):Ae(mg(r));return t(Ct,n,a)}),Zu=$(function(e,r){var n=Qn(r);if(n.$===1)return ue(0);var a=n.a,o=a.a,i=a.b;return t(Ct,function(c){return t(Ct,function(l){return ue(c+l*e)},t(Zu,e,i))},t(gg,e,o))}),bg=$(function(e,r){return 2<=e&&e<=36?t(Zu,e,Oo(r)):Ae(dg(e))}),hg=bg(16),_g=S(function(e,r,n){return C(zr,e,r,n,1)}),yg=E(function(e,r,n,a){return C(zr,e,r,n,a)}),Xr=Mf,wg=$(function(e,r){var n=t(Xr,10,e);return Ye(r*n)/n}),Sg=rs,Pg=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Eu(n);if(a.b&&!a.b.b){var o=a.a;return ug(g([o,o]))}else return n};return t(te,Sg,t(te,function(n){return t(re,function(a){return s(lg,1,a,n)},fg(e))},t(te,Fr(Kn),t(te,re(function(n){return n.f3}),t(te,re(mn(_r)),t(te,$g("Parsing hex regex failed"),Ct(function(n){var a=t(Q,t(te,r,t(te,hg,sg(Am))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var o=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return ue(C(yg,o/255,c/255,u/255,t(wg,2,f/255)))}else break e;else{var o=a.a.a,m=a.b,c=m.a.a,p=m.b,u=p.a.a;return ue(s(_g,o/255,c/255,u/255))}else break e;return Ae("Parsing ints from hex failed")})))))))}(),Pa=mr("input"),zt=mr("label"),kt=or("name"),Ku=$(function(e,r){return s(Ir,j,r,e)}),xg=t(Ku,g(["target","checked"]),ee),e$=function(e){return t(Ou,"change",t(_a,e,xg))},Cg=function(e){return w(e,!0)},zg=function(e){return{$:1,a:e}},kg=$(function(e,r){return t(qu,e,zg(r))}),Lg=t(Ku,g(["target","value"]),wa),Zt=function(e){return t(kg,"input",t(_a,Cg,t(_a,e,Lg)))},r$=or("max"),n$=or("min"),a$=function(e){return t(or,"step",e)},xa=or("type"),Kt=or("value"),el=function(e){var r=e.cs,n=e.db,a=e.cI,o=e.cE,i=e.c4,c=e.cM;return t(V,P,g([t(zt,g([xt(r)]),g([t(V,g([W("relative w-full")]),g([t(V,g([W("inline-block")]),g([we(r)])),t(V,g([W("inline-block float-right")]),g([we(Be(n))]))]))])),t(Pa,g([xa("range"),t(Pe,"width","100%"),Sa(r),kt(r),n$(Be(a)),r$(Be(o)),Kt(Be(n)),a$(Be(i)),Zt(t(te,Fi,t(te,Ve(42),c)))]),P)]))},t$=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Tg=$(function(e,r){switch(r.$){case 3:var c=r.a;return t(V,P,g([t(V,g([W("mb-2")]),g([t(zt,g([xt(e)]),g([we(e)]))])),t(Pa,g([xa("checkbox"),Sa(e),kt(e),e$(Kp(e)),Xu(c)]),P)]));case 0:var n=r.a,o=n.a,i=n.b,c=r.b;return el({cs:e,cE:i,cI:o,cM:rg(e),c4:.01*(i-o),db:c});case 1:var a=r.a,o=a.a,i=a.b,c=r.b;return el({cs:e,cE:i,cI:o,cM:t(te,Ye,ng(e)),c4:1,db:c});default:var c=r.a;return t(V,P,g([t(V,g([t(Pe,"margin-bottom","6px")]),g([t(zt,g([xt(e)]),g([we(e)]))])),t(Pa,g([xa("color"),t(Pe,"width","100%"),t(Pe,"height","26px"),t(Pe,"padding","0px"),Sa(e),kt(e),Zt(function(l){return t(eg,e,t(t$,Ju,Pg(l)))}),Kt(ig(c))]),P)]))}}),Mg=function(e){return t(V,g([W("p-4 border-y-[0.5px] border-white20")]),g([t(V,g([W("text-lg pb-2")]),g([we(e.fE)])),t(V,g([W("pl-2 pr-2")]),Zp(t(Uo,Tg,e.aB)))]))},Dg=function(e){return t(V,g([W("text-xs text-white60")]),t(Q,Mg,e))},jg=function(e){return t(V,g([W("absolute left-[104px] bottom-2 text-sm text-white40")]),g([we("clock: "+t(Gu,3,Yn(e).eY))]))},Ag=function(e){e.a;var r=e.b.W;return t(re,function(n){return Ye(60/(Yn(e).eY-n))},t(re,t(te,Vm,function(n){return n.eY}),Kn(t(Lu,59,r))))},Bg=function(e){return t(V,g([W("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Ag(e);if(r.$===1)return g([we("... Fps")]);var n=r.a;return g([we(xe(n)+" Fps")])}())},Fg=function(e){return{$:0,a:e}},Eg=function(e){var r=e.b.W;return sr(r)},Vg=function(e){var r=e.b.W;e.b.q;var n=e.b.ae;return sr(r)+1+sr(n)},Wg=function(e){return t(Pa,g([W("absolute w-full"),xa("range"),n$(xe(0)),r$(xe(Vg(e)-1)),Kt(xe(Eg(e))),a$(xe(1)),Zt(t(te,Fi,t(te,Ve(42),t(te,Ye,Fg))))]),P)},rl={$:1},Rg={$:3},Ng={$:2},Wi=function(e){return!e.b},nl=$(function(e,r){return t(Qt,g([W("px-2 bg-black40"),W(r),Yt(e)]),g([we("REC")]))}),al=$(function(e,r){return t(Qt,g([W("absolute left-[60px] mx-1 px-1 bg-black40"),Yt(r)]),g([t(V,g([W("w-4 h-6 fill-white80")]),g([da(e)]))]))}),Gg=function(e){var r=e.a,n=e.b.ae;return t(V,g([W("py-1")]),g([function(){switch(r.$){case 0:return t(nl,rl,"text-red-500 font-bold");case 1:return t(nl,Ng,"text-white80 font-bold");default:return t(V,P,P)}}(),function(){switch(r.$){case 0:return t(V,P,P);case 1:return Wi(n)?t(V,P,P):t(al,Fn.fN,Rg);default:return t(al,Fn.fM,rl)}}()]))},Hg=function(e){return t(V,g([W("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Wg(e),Gg(e),Bg(e),jg(e)]))},Ig=function(e){var r=e.a;return be(r,Ut)},qg=$(function(e,r){var n=Ig(r.J)?t(V,P,P):t(V,g([W("absolute pointer-events-none w-8 h-8"),t(Pe,"left",Be(e.ei.gl+.5*e.a4.gj)+"px"),t(Pe,"top",Be(-e.ei.gp+.5*e.a4.fl)+"px")]),g([t(V,g([W(e.ei.ft?"fill-black80":"fill-white40")]),g([da(Fn.ei)]))]));return t(V,P,g([n]))}),Og=$(function(e,r){var n=t(Qt,g([W(r.aT?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),Yt(Gp),Qp("Distraction Free Mode")]),g([da(Fn.gt)])),a=t(V,g([W("absolute w-8 bottom-12")]),g([t(Yc,g([W("fill-twitterBlue40 hover:fill-twitterBlue"),Zc("https://twitter.com/AzizErkalSelman"),Kc("_blank")]),g([da(Fn.gb)]))])),o=t(V,g([W("absolute w-8 bottom-2")]),g([t(Yc,g([W("fill-githubCat40 hover:fill-githubCat"),Zc("https://github.com/erkal/elm-3d-playground-exploration"),Kc("_blank")]),g([da(Fn.ff)]))]));return r.aT?t(V,g([W("fixed w-10 h-10 p-1")]),g([n])):t(V,P,g([t(V,g([W("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),g([n,a,o])),t(V,g([W("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),g([t(St,Hp,Dg(Yn(r.J).eZ))])),t(V,g([W("absolute bottom-0 left-[300px] w-[600px] h-20")]),g([t(St,Ip,Hg(r.J))])),t(qg,e,r)]))}),Jg=S(function(e,r,n){var a=Wp(n.J),o=Yn(n.J);return t(V,g([W("bg-black40"),W("select-none"),W("antialiased"),W("font-mono"),t(Pe,"width",Be(o.a4.gj)+"px"),t(Pe,"height",Be(o.a4.fl)+"px")]),g([t(V,g([W("fixed")]),g([t(St,It(Ep),t(e,o,a))])),t(V,g([Sa("gui")]),g([t(Og,o,n),t(St,Fp,t(r,o,a))]))]))}),Ug=tr(function(e,r,n,a,o,i){var c=$(function(u,v){return w(C(Dp,r,i,u,v),Qc)}),l=function(u){var v=t(Pu,n,u.fs);return w({aT:u.fs.a4.gj<500,J:t(jp,v,a)},Qc)};return ep({fr:l,f4:It(Bp(Nm)),gc:c,gg:t(Jg,e,o)})}),yr=$(function(e,r){return{gl:e,gp:r}}),Xg=$(function(e,r){return t(re,function(n){if(n.$===3){var a=n.a;return a}else return!1},t(Zn,e,r.aB))}),Qg=$(function(e,r){return t(Ve,!1,Kn(t(mn,Xg(e),r)))}),Yg=$(function(e,r){return t(Qg,e,r.eZ)}),ea=Yg,Zg=$(function(e,r){return t(re,function(n){if(n.$)return 0;var a=n.b;return a},t(Zn,e,r.aB))}),Kg=$(function(e,r){return t(Ve,0,Kn(t(mn,Zg(e),r)))}),e0=$(function(e,r){return t(Kg,e,r.eZ)}),Tr=e0,Ri=function(e){return e},ze=function(e){return e},Lt=function(e){var r=e;return-r},r0=$(function(e,r){var n=e,a=r;return{gl:n.gp*a.dg-n.dg*a.gp,gp:n.dg*a.gl-n.gl*a.dg,dg:n.gl*a.gp-n.gp*a.gl}}),o$=function(e){var r=e;return r.de},i$=function(e){var r=e;return r.df},n0=function(e){return t(r0,o$(e),i$(e))},ra=function(e){var r=e;return r.cN},Rr=Af,Nr=Bf,lt=S(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Rr(c),u=Nr(c),v=a.e4,f=v,m=f.gl*u,p=l*m,d=m*m,b=f.gp*u,h=l*b,y=m*b,x=b*b,_=1-2*(d+x),k=f.dg*u,A=l*k,I=2*(y-A),H=2*(y+A),G=m*k,O=2*(G+h),J=2*(G-h),R=b*k,Z=2*(R-p),ae=2*(R+p),pe=k*k,_e=1-2*(x+pe),fe=1-2*(d+pe);return{gl:_e*i.gl+I*i.gp+O*i.dg,gp:H*i.gl+fe*i.gp+Z*i.dg,dg:J*i.gl+ae*i.gp+_*i.dg}}),Aa=S(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Rr(c),u=Nr(c),v=a.cN,f=v,m=i.gl-f.gl,p=i.gp-f.gp,d=i.dg-f.dg,b=a.e4,h=b,y=h.gl*u,x=l*y,_=y*y,k=h.gp*u,A=l*k,I=y*k,H=k*k,G=1-2*(_+H),O=h.dg*u,J=l*O,R=2*(I-J),Z=2*(I+J),ae=y*O,pe=2*(ae+A),_e=2*(ae-A),fe=k*O,Se=2*(fe-x),Oe=2*(fe+x),Re=O*O,Or=1-2*(H+Re),Jr=1-2*(_+Re);return{gl:f.gl+Or*m+R*p+pe*d,gp:f.gp+Z*m+Jr*p+Se*d,dg:f.dg+_e*m+Oe*p+G*d}}),na=function(e){return e},_n=function(e){var r=e;return r.de},yn=function(e){var r=e;return r.df},wn=function(e){var r=e;return r.dh},c$=S(function(e,r,n){return na({cN:s(Aa,e,r,ra(n)),de:s(lt,e,r,_n(n)),df:s(lt,e,r,yn(n)),dh:s(lt,e,r,wn(n))})}),tl=S(function(e,r,n){return s(c$,e(n),r,n)}),Ni=function(e){var r=e;return r.e4},aa=$(function(e,r){var n=e,a=r;return{gl:a.gl+n.gl,gp:a.gp+n.gp,dg:a.dg+n.dg}}),l$=$(function(e,r){return na({cN:t(aa,e,ra(r)),de:_n(r),df:yn(r),dh:wn(r)})}),a0=$(function(e,r){var n=e,a=r;return{gl:n*a.gl,gp:n*a.gp,dg:n*a.dg}}),t0=S(function(e,r,n){return t(l$,t(a0,r,e),n)}),o0=S(function(e,r,n){return s(t0,Ni(e(n)),r,n)}),xr=$(function(e,r){return{e4:r,cN:e}}),i0=function(e){var r=e;return t(xr,r.cN,r.de)},c0=function(e){var r=e;return t(xr,r.cN,r.df)},l0=function(e){var r=e;return t(xr,r.cN,r.dh)},u$=function(e){var r=na({cN:e.aZ,de:i$(e.dz),df:n0(e.dz),dh:o$(e.dz)}),n=s(o0,l0,e.cl,s(tl,i0,Lt(e.bO),s(tl,c0,e.bH,r)));return n},u0=function(e){return{$:1,a:e}},Me=function(e){var r=e;return K(r)},$0=function(e){return{cY:u0(Me(e.eI)),dc:e.dc}},ar=function(e){return e},qr={gl:0,gp:0,dg:0},$$=_r,cn=function(e){return e},v0=cn({gl:1,gp:0,dg:0}),Gi=v0,v$=cn({gl:0,gp:0,dg:1}),eo=v$,f$=$$({cN:qr,de:eo,df:Gi}),f0=function(e){var r=e.aZ,n=e.bH,a=e.bO,o=e.eI;return $0({dc:u$({bH:ar(n),cl:ze(1e3),bO:ar(a),aZ:Ri(r),dz:f$}),eI:ze(o)})},Er=jf,An=function(e){return ar(Er*(e/180))},s0=function(e){return{$:0,a:e}},ut=function(e){var r=e;return .5*r},d0=Ff,m0=function(e){var r=e;return d0(r)},p0=function(e){var r=ut(Me(e.eG)),n=m0(r);return{cY:s0(n),dc:e.dc}},g0=function(e){var r=e.aZ,n=e.bH,a=e.bO,o=e.cl;return p0({eG:An(40),dc:u$({bH:ar(n),cl:ze(o),bO:ar(a),aZ:Ri(r),dz:f$})})},s$=$(function(e,r){return t(ea,"orthographic",e)?f0({bH:t(Tr,"camera azimuth",e),bO:t(Tr,"camera elevation",e),aZ:r,eI:t(Tr,"camera distance",e)}):g0({bH:t(Tr,"camera azimuth",e),cl:t(Tr,"camera distance",e),bO:t(Tr,"camera elevation",e),aZ:r})}),Hi={$:0},b0={co:!0,cp:"",cq:"",aJ:Hi},h0=function(e){if(e.b){var r=e.a,n=e.b;return Y(s(De,Qe,r,n))}else return F},d$=$(function(e,r){var n={dl:1,cn:1+t(Ve,-1,h0(t(Q,function(a){return a.cn},r.fO))),ej:e};return D(r,{fO:t(L,n,r.fO)})}),m$={aR:{bK:t(yr,0,0),fQ:.5},e5:0,fX:0,es:0,ga:P,gf:w(0,0)},p$=t(d$,g([t(yr,6,0),t(yr,6,6),t(yr,0,6)]),{cc:m$,dk:F,ao:P,ch:P,fO:P}),_0=function(e){return{E:P,n:P,q:e}},y0=function(e){return{an:t(s$,e,{gl:0,gp:0,dg:0}),l:b0,k:_0(p$),aG:t(yr,0,0)}},oa=$(function(e,r){return w(e,ju(r))}),w0=$(function(e,r){return w(e,Au(r))}),S0=S(function(e,r,n){return{aB:n,fu:r,fE:e}}),ro=Pr,P0=function(e){return s(De,$(function(r,n){var a=r.a,o=r.b;return s(on,a,o,n)}),ro,e)},x0=S(function(e,r,n){return s(S0,e,r,P0(n))}),Xa=x0,kn=S(function(e,r,n){var a=r.a,o=r.b;return w(e,t(Bu,w(a,o),n))}),C0=C(zr,255/255,255/255,255/255,1),z0=g([s(Xa,"View Options",!0,g([t(oa,"draw speed vector",!1),t(oa,"draw ball trail",!0),t(oa,"orthographic",!0),t(oa,"unlit",!0)])),s(Xa,"Camera",!0,g([s(kn,"camera distance",w(3,60),40),s(kn,"camera azimuth",w(0,2*Er),0),s(kn,"camera elevation",w(-Er/2,Er/2),0)])),s(Xa,"Physics Parameters",!0,g([t(oa,"fix time steps",!0),s(kn,"gas force",w(20,60),40),s(kn,"friction",w(0,1),.4),s(kn,"direction change speed",w(1,5),3)])),s(Xa,"Color",!0,g([t(w0,"floor color",C0)]))]),g$=function(e){return{$:1,a:e}},Ba=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*o+a*i}),lr=If,no=function(e){return lr(t(Ba,e,e))},vr=$(function(e,r){return no(w(e.gl-r.gl,e.gp-r.gp))}),k0=$(function(e,r){var n=r.aJ;if(n.$){var a=n.a,o=t(yr,e.gl,e.gp);return D(r,{aJ:g$(function(){var i=ve(a);if(i.b){var c=i.a;return t(vr,c,o)>2?le(a,g([o])):a}else return g([o])}())})}else return r}),L0=$(function(e,r){return e.dI.ew?D(r,{l:t(k0,r.aG,r.l)}):r}),Ne=S(function(e,r,n){return{gl:e,gp:r,dg:n}}),Fa=function(e){var r=e;return r.q},T0=$(function(e,r){var n=Fa(r.k).cc;return D(r,{an:t(s$,e,s(Ne,n.aR.bK.gl,n.aR.bK.gp,0))})}),b$=$(function(e,r){var n=r;return D(n,{q:e(n.q)})}),M0=function(e){var r=function(n){return!n.dF&&t(vr,n.bK,e.cc.aR.bK)<1?D(n,{dF:!0}):n};return D(e,{ao:t(Q,r,e.ao)})},h$=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(n+o,a+i)}),Cr=$(function(e,r){var n=r.a,a=r.b;return w(e*n,e*a)}),Yr=$(function(e,r){return t(Cr,e/no(r),r)}),D0=$(function(e,r){return t(Yr,t(Ba,e,r),e)}),j0=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(o-n,i-a)}),A0=$(function(e,r){var n=r.cc,a=t(D0,e.b_,n.gf),o=t(j0,a,n.gf),i=t(h$,o,t(Cr,e.b3.dl,t(Cr,-1,a)));return D(r,{cc:D(n,{gf:i})})}),B0=$(function(e,r){return r.b?s(Ir,L,r,e):e}),Ee=function(e){return s(Ir,B0,P,e)},Gr=function(e){return e*Er/180},ao=$(function(e,r){return w(e,r)}),Ii=function(e){var r=function(){if(e.b){var n=e.a,a=e.b;return le(a,g([n]))}else return P}();return s(Ht,ao,e,r)},Ea=$(function(e,r){var n=r.a,a=r.b;return w(n*Rr(e)-a*Nr(e),n*Nr(e)+a*Rr(e))}),We=$(function(e,r){var n=e.a,a=e.b;return D(r,{gl:r.gl+n,gp:r.gp+a})}),ke=$(function(e,r){return w(e.gl-r.gl,e.gp-r.gp)}),F0=$(function(e,r){var n=r.a,a=r.b,o=t(Yr,e,t(Ea,-Gr(90),t(ke,a,n)));return w(t(We,o,n),t(We,o,a))}),E0=$(function(e,r){return{e$:t(Q,function(n){return{bK:n,fQ:e}},r),f_:t(Q,F0(e),Ii(r))}}),fr=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*i-a*o}),V0=$(function(e,r){var n=w(w(e.ah,e.e4),w(r.ah,r.e4)),a=n.a,o=a.a,i=a.b,c=n.b,l=c.a,u=c.b,v=t(fr,t(ke,l,o),i),f=t(fr,i,u),m=v/f,p=t(fr,t(ke,l,o),u),d=p/f;return!v&&!f?F:f&&0<=d&&0<=m?Y(t(We,t(Cr,d,i),o)):F}),_$=$(function(e,r){r.fQ;var n=r.bK,a=t(fr,e.e4,t(ke,n,e.ah))<0?1:-1;return t(V0,{e4:t(Ea,a*Gr(90),e.e4),ah:n},e)}),dr=function(e){var r=e.a,n=e.b;return w(n.gl-r.gl,n.gp-r.gp)},y$=function(e){var r=e.a,n=e.b;return{e4:dr(w(r,n)),ah:r}},W0=$(function(e,r){var n=e.a,a=e.b,o=r.fQ,i=t(_$,y$(e),r);if(i.$===1)return F;var c=i.a,l=t(vr,r.bK,c);if(q(l,o)<1){var u=t(We,t(Yr,-lr(o*o-l*l),dr(e)),c),v=t(Ba,t(ke,a,n),t(ke,u,n))>=0&&q(t(vr,n,u),t(vr,n,a))<1;return v?Y(u):F}else return F}),w$=Yr(1),R0=S(function(e,r,n){var a=w(e,t(We,r,e)),o=t(W0,a,n);return t(re,function(i){return{b_:w$(t(ke,i,n.bK)),b9:t(ke,i,e)}},o)}),N0=$(function(e,r){var n=e.a,a=r.a,o=w(w(n,dr(e)),w(a,dr(r))),i=o.a,c=i.a,l=i.b,u=o.b,v=u.a,f=u.b,m=t(fr,t(ke,v,c),l),p=t(fr,l,f),d=m/p,b=t(fr,t(ke,v,c),f),h=b/p;return!m&&!p?F:p&&0<=h&&h<=1&&0<=d&&d<=1?Y(t(We,t(Cr,h,l),c)):F}),S$=function(e){return w$(t(Ea,-Gr(90),dr(e)))},G0=S(function(e,r,n){var a=w(e,t(We,r,e)),o=t(N0,a,n);return t(re,function(i){return{b_:S$(n),b9:t(ke,i,e)}},o)}),P$=Lf,ol=$(function(e,r){return{bL:e,b_:r.b_,b9:r.b9}}),H0=S(function(e,r,n){var a=t(E0,e.fQ,n),o=a.f_,i=a.e$,c=t(mn,function(u){return t(re,ol(u.bK),s(R0,e.bK,r,u))},i),l=t(mn,function(u){return t(re,function(v){return t(ol,t(We,t(Yr,e.fQ,t(Ea,Gr(90),dr(u))),t(We,v.b9,e.bK)),v)},s(G0,e.bK,r,u))},o);return Kn(t(P$,t(te,function(u){return u.b9},no),Ee(g([c,l]))))}),I0=$(function(e,r){return{bL:r.bL,b_:r.b_,b3:e,b9:r.b9}}),q0=$(function(e,r){var n=t(Cr,e.ds,r.cc.gf),a=function(c){return t(re,I0(c),s(H0,r.cc.aR,n,c.ej))},o=Kn(t(P$,t(te,function(c){return c.b9},no),t(mn,a,r.fO)));if(o.$===1)return r;var i=o.a;return t(A0,i,D(r,{dk:Y(i.b3.cn),ch:t(Mu,15,t(L,i.bL,r.ch))}))}),to=$(function(e,r){return Ee(t(Q,e,r))}),oo=$(function(e,r){return s(Ir,$(function(n,a){return e(n)?t(L,n,a):a}),P,r)}),il=$(function(e,r){var n=e.a,a=e.b,o=r.fQ,i=t(_$,y$(e),r);if(i.$===1)return P;var c=i.a,l=t(vr,r.bK,c);if(q(l,o)<1){var u=lr(o*o-l*l),v=t(We,t(Yr,u,dr(e)),c),f=function(p){return t(Ba,t(ke,a,n),t(ke,p,n))>=0&&q(t(vr,n,p),t(vr,n,a))<1},m=t(We,t(Yr,-u,dr(e)),c);return t(oo,f,be(l,o)?g([m]):g([m,v]))}else return P}),O0=$(function(e,r){var n=e.a,a=e.b;return q(t(vr,n,r.bK),r.fQ)<0&&q(t(vr,a,r.bK),r.fQ)>-1?t(il,w(a,n),r):t(il,w(n,a),r)}),J0=$(function(e,r){var n=r.a,a=w(w(e.ah,e.e4),w(n,dr(r))),o=a.a,i=o.a,c=o.b,l=a.b,u=l.a,v=l.b,f=t(fr,t(ke,u,i),c),m=t(fr,c,v),p=f/m,d=t(fr,t(ke,u,i),v),b=d/m;return!f&&!m?F:m&&b>=0&&p>=0&&p<=1?Y(t(We,t(Cr,b,c),i)):F}),U0=$(function(e,r){var n=e.a;r.fQ;var a=r.bK,o=t(fr,dr(e),t(ke,a,n))<0?1:-1;return t(J0,{e4:t(Ea,o*Gr(90),dr(e)),ah:a},e)}),X0=function(e){var r=e.cc,n=$(function(i,c){var l=t(U0,i,c);if(l.$)return c;var u=l.a;return D(c,{bK:t(We,t(Yr,c.fQ,S$(i)),t(We,t(ke,u,c.bK),c.bK))})}),a=t(oo,function(i){return!Wi(t(O0,i,r.aR))},t(to,t(te,function(i){return i.ej},Ii),e.fO)),o=s(De,n,r.aR,a);return D(e,{cc:D(r,{aR:o})})},Q0=$(function(e,r){return D(r,{cc:e(r.cc)})}),Y0=$(function(e,r){return D(r,{gf:t(Cr,1-e.ds*5*t(Tr,"friction",e),r.gf)})}),qi=S(function(e,r,n){return q(n,e)<0?e:q(n,r)>0?r:n}),Z0=function(e){var r=e.a,n=e.b;return w(r*Rr(n),r*Nr(n))},K0=function(e){return(e.fU?1:0)-(e.fw?1:0)},eb=K0,rb=function(e){return(e.eE?1:0)-(e.dr?1:0)},_o=rb,nb=$(function(e,r){var n=t(Tr,"gas force",e),a=Z0(w(1,r.e5)),o=h$(t(Cr,e.ds*n*_o(e.dI),a));return D(r,{e5:r.e5-eb(e.dI)*t(Tr,"direction change speed",e)*e.ds,es:_o(e.dI)?s(qi,-14,14,r.es+e.ds*1e3*_o(e.dI)):t(Ba,r.gf,a),gf:o(r.gf)})}),ab=$(function(e,r){var n=r.aR;return D(r,{aR:D(n,{bK:t(We,t(Cr,e.ds,r.gf),r.aR.bK)})})}),tb=$(function(e,r){return D(r,{fX:r.fX+e.ds*r.es})}),ob=function(e){return D(e,{ga:function(){var r=e.ga;if(r.b){var n=r.a;return t(vr,n,e.aR.bK)>1?t(L,e.aR.bK,e.ga):e.ga}else return g([e.aR.bK])}()})},ib=$(function(e,r){return ob(t(ab,e,t(tb,e,t(Y0,e,t(nb,e,r)))))}),cb=$(function(e,r){return M0(X0(t(Q0,ib(e),t(q0,e,r))))}),lb=$(function(e,r){var n=t(cb,e,Fa(r.k));return D(r,{k:t(b$,It(n),r.k)})}),Qa=function(e){return e},ln=function(e){var r=e;return r},ub=$(function(e,r){var n=e,a=r;return a.gl*n.gl+a.gp*n.gp+a.dg*n.dg}),ie=$(function(e,r){var n=r;return e*n}),x$=function(e){var r=e;return r.cN},$b=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.fG,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp+(a.dg-i.dg)*l.dg}),vb=S(function(e,r,n){var a=e,o=r,i=n;return{gl:i.gl+o*a.gl,gp:i.gp+o*a.gp,dg:i.dg+o*a.dg}}),fb=$(function(e,r){var n=Ni(r),a=e,o=a.fG,i=t(ub,o,n);if(i){var c=x$(r),l=t($b,e,c),u=t(ie,-1/i,l);return Y(s(vb,n,u,c))}else return F}),sb=$(function(e,r){return{gl:e,gp:r}}),cl=$(function(e,r){var n=e,a=r;return n*a}),db=function(e){var r=e;return r},ll=function(e){var r=e;return db(r.eP)},mb=function(e){var r=e;return r.aS},pb=function(e){var r=e,n=t(Qe,K(r.gl),t(Qe,K(r.gp),K(r.dg)));if(n){var a=r.dg/n,o=r.gp/n,i=r.gl/n,c=lr(i*i+o*o+a*a);return Y({gl:i/c,gp:o/c,dg:a/c})}else return F},C$=$(function(e,r){var n=r;return n/e}),Xo=function(e){var r=e;return ra(r)},z$=cn({gl:0,gp:0,dg:-1}),gb=$(function(e,r){var n=e,a=r;return a/n}),bb=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gl:v.gl*a.gl+l.gl*a.gp+i.gl*a.dg,gp:v.gp*a.gl+l.gp*a.gp+i.gp*a.dg,dg:v.dg*a.gl+l.dg*a.gp+i.dg*a.dg}}),Tt=function(e){var r=e;return{gl:-r.gl,gp:-r.gp,dg:-r.dg}},Qo=function(e){var r=e;return Tt(wn(r))},hb=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.de,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),Oi=S(function(e,r,n){var a=e,o=r,i=n;return{gl:a,gp:o,dg:i}}),_b=E(function(e,r,n,a){var o=e,i=r,c=n,l=a,u=o.cN,v=u,f=o.dh,m=f,p=o.df,d=p,b=o.de,h=b;return{gl:v.gl+i*h.gl+c*d.gl+l*m.gl,gp:v.gp+i*h.gp+c*d.gp+l*m.gp,dg:v.dg+i*h.dg+c*d.dg+l*m.dg}}),yb=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=n.df,l=c;return(a.gl-i.gl)*l.gl+(a.gp-i.gp)*l.gp}),$e=0,wb=S(function(e,r,n){var a=e,o=t(yb,ll(r),n),i=t(hb,ll(r),n),c=a.dc,l=c,u=mb(r);u.a;var v=u.b,f=a.cY;if(f.$){var b=f.a,h=t(gb,v,b),y=C(_b,l,t(cl,h,i),t(cl,h,o),$e);return t(xr,y,Qo(a.dc))}else{var m=f.a,p=Lt(t(C$,m,t(ie,.5,v))),d=t(bb,l,t(Ve,z$,pb(s(Oi,i,o,p))));return t(xr,Xo(a.dc),d)}}),Yo=function(e){var r=e;return{gl:Rr(r),gp:Nr(r)}},Sb=function(e){var r=e;return{gl:-r.gp,gp:r.gl}},Pb=function(e){return e},xb=$(function(e,r){return Pb({cN:r,de:e,df:Sb(e)})}),Cb=$(function(e,r){return t(xb,Yo(e),r)}),zb=S(function(e,r,n){var a=e.a,o=e.b;return{eP:t(Cb,r,n),aS:w(Me(a),Me(o))}}),En=function(e){var r=e;return r.gl},kb=$(function(e,r){var n=e,a=r;return{gl:n,gp:a}}),Vn=function(e){var r=e;return r.gp},Wn=function(e){var r=e;return r.dg},Lb=E(function(e,r,n,a){var o=n.gl,i=n.gp,c=function(v){return s(Ne,ln(En(v)),ln(Vn(v)),ln(Wn(v)))},l=s(zb,w(Qa(r.gj),Qa(r.fl)),An(0),t(sb,0,0)),u=t(kb,Qa(o),Qa(i));return t(re,c,t(fb,a,s(wb,e,l,u)))}),Tb=$(function(e,r){return{fG:e,cN:r}}),Mb=$(function(e,r){var n=r;return t(Tb,n.fG,t(aa,e,n.cN))}),Db=$(function(e,r){return{fG:r,cN:e}}),jb=t(Db,qr,eo),Ab=E(function(e,r,n,a){return C(Lb,r,n,a,t(Mb,s(Oi,ze(0),ze(0),ze(e)),jb))}),Bb=Ab(0),Fb=$(function(e,r){return D(r,{aG:t(Ve,r.aG,t(re,function(n){return t(yr,n.gl,n.gp)},s(Bb,r.an,e.a4,e.ei)))})}),Eb=$(function(e,r){var n=t(ea,"fix time steps",e)?D(e,{ds:.016}):e,a=r.l.co?L0(n):_r;return t(T0,n,t(lb,n,t(Fb,n,a(r))))}),Vb=$(function(e,r){var n=r;return D(n,{n:t(L,n.q,n.n),q:e})}),Wb=xs,Rb=Ps,Nb=function(e){var r=S(function(n,a,o){return{E:o,n,q:a}});return C(Rb,r,t(j,"before",$r(e)),t(j,"current",e),t(j,"after",$r(e)))},Gb=he(function(e,r,n,a,o){return{cc:e,dk:o,ao:n,ch:a,fO:r}}),Hb=tr(function(e,r,n,a,o,i){return{aR:e,e5:n,fX:o,es:a,ga:i,gf:r}}),Ib=$(function(e,r){return{bK:e,fQ:r}}),qb=Mi(Bm),se=S(function(e,r,n){return t(qb,t(j,e,r),n)}),Va=s(se,"y",ne,s(se,"x",ne,ge(yr))),Ob=s(se,"radius",ne,s(se,"center",Va,ge(Ib))),ul=hs,Jb=s(se,"trail",$r(Va),s(se,"rotation",ne,s(se,"rotationSpeed",ne,s(se,"directionFromXAxis",ne,s(se,"velocity",s(Mi,ao,t(ul,0,ne),t(ul,1,ne)),s(se,"circle",Ob,ge(Hb))))))),Ub=$(function(e,r){return{bK:e,dF:r}}),Xb=s(se,"isCollected",ee,s(se,"center",Va,ge(Ub))),k$=fs,Qb=gs,Yb=ys,Zb=function(e){return Yb(g([Qb(F),t(_a,Y,e)]))},Kb=S(function(e,r,n){return{dl:n,cn:e,ej:r}}),eh=s(se,"bounciness",ne,s(se,"polygon",$r(Va),s(se,"id",k$,ge(Kb)))),rh=s(se,"ballBouncedInLastTickToPolygonWithId",Zb(k$),s(se,"collisionPointsHistory",$r(Va),s(se,"coins",$r(Xb),s(se,"polygons",$r(eh),s(se,"ball",Jb,ge(Gb)))))),Qr=$(function(e,r){return s(De,Ms(e),ks(),r)}),Sn=function(e){return s(De,$(function(r,n){var a=r.a,o=r.b;return s(Ts,a,o,n)}),Ls(),e)},nh=$(function(e,r){var n=r;return Sn(g([w("before",t(Qr,e,n.n)),w("current",e(n.q)),w("after",t(Qr,e,n.E))]))}),Mr=Gt,Wa=function(e){return Sn(g([w("x",Mr(e.gl)),w("y",Mr(e.gp))]))},ah=function(e){return Sn(g([w("center",Wa(e.bK)),w("radius",Mr(e.fQ))]))},th=function(e){return Sn(g([w("circle",ah(e.aR)),w("velocity",function(r){var n=r.a,a=r.b;return t(Qr,_r,g([Mr(n),Mr(a)]))}(e.gf)),w("directionFromXAxis",Mr(e.e5)),w("rotationSpeed",Mr(e.es)),w("rotation",Mr(e.fX)),w("trail",t(Qr,Wa,e.ga))]))},oh=function(e){return Sn(g([w("center",Wa(e.bK)),w("isCollected",Uu(e.dF))]))},L$=Gt,ih=function(e){return Sn(g([w("id",L$(e.cn)),w("polygon",t(Qr,Wa,e.ej)),w("bounciness",Mr(e.dl))]))},ch=Ds,lh=function(e){return Sn(g([w("ball",th(e.cc)),w("polygons",t(Qr,ih,e.fO)),w("coins",t(Qr,oh,e.ao)),w("collisionPointsHistory",t(Qr,Wa,e.ch)),w("ballBouncedInLastTickToPolygonWithId",t(te,re(L$),Ve(ch))(e.dk))]))},uh=function(e){return D(e,{cc:m$})},$h=function(e){return D(e,{ao:t(Q,function(r){return D(r,{dF:!1})},e.ao)})},vh=function(e){return D(e,{ch:P})},fh=function(e){return vh($h(uh(e)))},sh=$(function(e,r){return D(r,{cp:t(bu,2,t(nh,t(te,fh,lh),e))})}),dh=function(e){return D(e,{aJ:Hi})},mh=function(e){var r=e,n=r.E;if(n.b){var a=n.a,o=n.b;return Y({E:o,n:t(L,r.q,r.n),q:a})}else return F},ph=function(e){var r=e,n=r.n;if(n.b){var a=n.a,o=n.b;return Y({E:t(L,r.q,r.E),n:o,q:a})}else return F},gh=function(e){var r=e,n=r.E;if(n.b){var a=n.a,o=n.b;return D(r,{E:o,n:t(L,a,r.n)})}else return D(r,{E:ve(r.n),n:P})},bh=function(e){var r=e,n=r.n;if(n.b){var a=n.a,o=n.b;return D(r,{n:o,q:a})}else{var i=r.E;if(i.b){var a=i.a,o=i.b;return D(r,{E:o,q:a})}else return r}},hh=$(function(e,r){return D(r,{cq:e})}),_h=function(e){return D(e,{aJ:g$(P)})},yh=$(function(e,r){return D(r,{co:e,aJ:Hi})}),wh=S(function(e,r,n){switch(r.$){case 0:var a=r.a;return D(n,{l:t(yh,a,n.l)});case 1:return D(n,{l:_h(n.l)});case 2:var o=r.a;return D(n,{l:dh(n.l),k:t(b$,d$(o),n.k)});case 3:return D(n,{k:t(Ve,n.k,ph(n.k))});case 4:return D(n,{k:t(Ve,n.k,mh(n.k))});case 5:return D(n,{k:t(Vb,p$,n.k)});case 6:return D(n,{k:bh(n.k)});case 7:return D(n,{k:gh(n.k)});case 8:return D(n,{l:t(sh,n.k,n.l)});case 9:return D(n,{k:t(t$,n.k,t(Wb,Nb(rh),n.l.cq))});default:var i=r.a;return D(n,{l:t(hh,i,n.l)})}}),io=function(e){return e},Sh=function(e){var r=e;return r},Ph=function(e){var r=s(qi,1667,25e3,Sh(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return io({gl:n,gp:a})},T$=function(e){return e},xh=function(e){return{$:0,a:e}},Ch=xh,zh={$:3},kh=zh,Lh=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Th=Lh,Mh=function(e){return{$:1,a:e}},Dh=Mh,jh=function(e){return t(hn,"height",xe(e))},Ah=function(e){return Ys(rd(e))},Bh=Ah,Fh=function(e){return{$:2,a:e}},Eh=Fh,M$=function(e){return t(nn,"",e)},Vh=function(e){var r=e.a,n=e.b,a=e.c,o=e.d,i=function(l){return Ye(l*1e3)/1e3},c=function(l){return Ye(l*1e4)/100};return M$(g(["rgba(",Be(c(r)),"%,",Be(c(n)),"%,",Be(c(a)),"%,",Be(i(o)),")"]))},Wh=$(function(e,r){switch(r.$){case 0:return t(Zd,e,r);case 1:return t(Kd,e,r);case 2:return t(em,e,r);case 3:return t(rm,e,r);case 4:return t(nm,e,r);default:return t(am,e,r)}}),Rh=$(function(e,r){switch(r.$){case 0:return t(kd,e,r);case 1:return t(Ld,e,r);case 2:return t(Td,e,r);case 3:return t(Md,e,r);case 4:return t(Dd,e,r);case 5:return t(jd,e,r);case 6:return t(Ad,e,r);case 7:return t(Bd,e,r);default:return Fd(e)}}),Nh=S(function(e,r,n){return s(Yd,e,r,n)}),$l=function(e){var r=e;return r},ta=dm,yo=C(ta,1,1,1,1),pr=S(function(e,r,n){return t(Q,function(a){return t(a,r,n)},e)}),Gh=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Hh=$(function(e,r){var n=e,a=r.gl,o=r.gp;return s(Gh,n*a/o,n,n*(1-a-o)/o)}),Ra=lm,Ih=function(e){var r=e.a,n=e.b,a=e.c;return s(Ra,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},co=$(function(e,r){return Ih(t(Hh,e,r))}),D$=$(function(e,r){return{dG:be(e.dG,r.dG),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.b7,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.b7,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.b7,b7:e.b7*r.b7}}),gr=_m,qh=function(e){return gr({dP:e.t,dQ:e.w,dR:e.z,dS:e.K,dT:e.u,dU:e.x,dV:e.A,dW:e.L,dX:e.v,dY:e.y,dZ:e.B,d_:e.M,d$:0,d0:0,d1:0,d2:1})},wo=he(function(e,r,n,a,o){var i=a.dG?1:-1,c=C(ta,a.b7,a.b7,a.b7,i);return Ge(o,e,c,qh(a),a.dG,r,n)}),j$=tr(function(e,r,n,a,o,i){e:for(;;)switch(o.$){case 0:return i;case 5:var c=o.a,l=o.b,u=e,v=r,f=n,m=t(D$,c,a),p=l,d=i;e=u,r=v,n=f,a=m,o=p,i=d;continue e;case 1:var b=o.b,h=t(L,z(wo,e,r,n,a,b),i.P);return{P:h,X:i.X,fZ:i.fZ};case 3:var y=o.b,x=t(L,z(wo,e,r,n,a,y),i.X);return{P:i.P,X:x,fZ:i.fZ};case 2:var _=o.a,k=t(L,z(wo,e,r,n,a,_),i.fZ);return{P:i.P,X:i.X,fZ:k};default:var A=o.a;return s(De,C(j$,e,r,n,a),i,A)}}),Oh=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),A$=Oh,Ji=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Jh=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Ji,518,r,n,a)},Uh=$(function(e,r){return{$:6,a:e,b:r}}),Xh=Uh,B$=g([Jh({Y:1,Z:0,ab:!1}),C(A$,!1,!1,!1,!1),t(Xh,0,1)]),In=519,Ui=8,F$=15,Rn=7681,Qh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ce=zd,Yh=$(function(e,r){return{$:0,a:e,b:r}}),Zh=Yh({dt:1,dC:0,eb:5}),Xe=im,Kh=Zh(g([{el:t(Xe,-1,-1)},{el:t(Xe,1,-1)},{el:t(Xe,-1,1)},{el:t(Xe,1,1)}])),e3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"el"},uniforms:{}},r3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},Xi=S(function(e,r,n){var a=e.c_,o=e.cB,i=e.dd,c=$(function(v,f){var m=v;return f(m)}),l=$(function(v,f){var m=v;return f(m)}),u=function(v){return t(te,c(v.bv),t(te,l(v.bi),t(te,l(v.bD),l(v.bE))))};return t(u,n,t(u,r,s(r3,a,o,i)))}),Qi=function(e){return s(Xi,{cB:e.cB,c_:e.c_,dd:e.dd},{bi:e.bi,bv:e.bv,bD:e.bD,bE:e.bE},{bi:e.bi,bv:e.bv,bD:e.bD,bE:e.bE})},Yi=function(e){return z(ce,g([Qi(e),C(A$,!1,!1,!1,!1)]),e3,Qh,Kh,{})},n3=Yi({bi:Rn,cB:0,c_:Ui,bv:In,dd:F$,bD:Rn,bE:Rn}),a3=516,vl=5386,Fe=7680,t3=function(e){return t(Xr,2,e+4)},E$=function(e){return Yi({bi:Fe,cB:F$,c_:Ui,bv:a3,dd:t3(e),bD:vl,bE:vl})},o3=S(function(e,r,n){return Ee(g([s(pr,e,n,B$),g([E$(r),n3])]))}),i3=$(function(e,r){return Ee(t(xi,o3(e),r))}),c3=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Ji,513,r,n,a)},l3=c3({Y:1,Z:0,ab:!0}),u3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},$3=function(e){var r=e.b5,n=e.bQ,a=e.bI,o=e.bF,i=e.bM,c=e.aP,l=$(function(u,v){var f=u.a,m=u.b,p=u.c,d=v.a,b=v.b,h=v.c;return u3(f)(m)(p)(d)(b)(h)(r)(n)(a)(o)});return t(l,i,c)},v3=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),fl=$(function(e,r){var n=e,a=r;return s(v3,32774,n,a)}),f3=1,sl=771,s3=770,Zi=$3({bF:0,aP:t(fl,f3,sl),bI:0,bM:t(fl,s3,sl),bQ:0,b5:0}),Ln=g([l3,Zi]),d3=function(e){var r=e;return r.d4},m3=function(e){var r=e;return r.d5},V$=function(e){var r=e;return r.d6},p3=function(e){var r=e;return r.d7},g3=function(e){var r=e;return r.d8},W$=function(e){var r=e;return r.d9},Te=$(function(e,r){var n=e,a=r;return a-n}),R$=function(e){return T(t(Te,p3(e),d3(e)),t(Te,g3(e),m3(e)),t(Te,W$(e),V$(e)))},b3=function(e){return e},h3=function(e){return na({cN:b3({gl:e.K,gp:e.L,dg:e.M}),de:cn({gl:e.t,gp:e.u,dg:e.v}),df:cn({gl:e.w,gp:e.x,dg:e.y}),dh:cn({gl:e.z,gp:e.A,dg:e.B})})},So=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gl:a.gl*v.gl+a.gp*v.gp+a.dg*v.dg,gp:a.gl*l.gl+a.gp*l.gp+a.dg*l.dg,dg:a.gl*i.gl+a.gp*i.gp+a.dg*i.dg}}),N$=$(function(e,r){var n=e,a=r,o=n.cN,i=o,c=a.gl-i.gl,l=a.gp-i.gp,u=a.dg-i.dg,v=n.dh,f=v,m=n.df,p=m,d=n.de,b=d;return{gl:c*b.gl+l*b.gp+u*b.dg,gp:c*p.gl+l*p.gp+u*p.dg,dg:c*f.gl+l*f.gp+u*f.dg}}),G$=$(function(e,r){return{cN:t(N$,e,ra(r)),de:t(So,e,_n(r)),df:t(So,e,yn(r)),dh:t(So,e,wn(r))}}),$t=S(function(e,r,n){return{gl:e,gp:r,dg:n}}),Mt=function(e){var r=e;return r},de=$(function(e,r){var n=e,a=r;return t(Qe,n,a)}),vt=$(function(e,r){return q(e,r)<0?e:r}),ye=$(function(e,r){var n=e,a=r;return t(vt,n,a)}),_3=$(function(e,r){var n=Mt(r),a=Mt(e);return{d4:t(de,a.d4,n.d4),d5:t(de,a.d5,n.d5),d6:t(de,a.d6,n.d6),d7:t(ye,a.d7,n.d7),d8:t(ye,a.d8,n.d8),d9:t(ye,a.d9,n.d9)}}),nr=function(e){var r=e;return r},y3=function(e){var r=e;return T(r.gl,r.gp,r.dg)},un=$(function(e,r){var n=e,a=r;return a+n}),w3=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=ut(Me(a)),c=ut(Me(n)),l=ut(Me(o)),u=y3(r),v=u.a,f=u.b,m=u.c;return{d4:t(un,c,v),d5:t(un,i,f),d6:t(un,l,m),d7:t(Te,c,v),d8:t(Te,i,f),d9:t(Te,l,m)}}),dl=E(function(e,r,n,a){var o=n.eW,i=2*n.fj*r,c=2*n.fi*r,l=2*n.fh*r,u=o.dg*r,v=o.gp*r,f=o.gl*r,m=nr(wn(e)),p=K(l*m.gl)+K(c*m.gp)+K(i*m.dg),d=nr(yn(e)),b=K(l*d.gl)+K(c*d.gp)+K(i*d.dg),h=nr(_n(e)),y=K(l*h.gl)+K(c*h.gp)+K(i*h.dg),x=t(w3,T(y,b,p),t(N$,e,s($t,f,v,u)));if(a.$)return Y(x);var _=a.a;return Y(t(_3,_,x))}),Zo=E(function(e,r,n,a){e:for(;;)if(a.b){var o=a.a,i=a.b;switch(o.$){case 0:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 1:var c=o.a,l=C(dl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 2:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 3:var c=o.a,l=C(dl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 4:var u=o.a,d=e,b=r,h=C(Zo,e,r,n,u),y=i;e=d,r=b,n=h,a=y;continue e;default:var v=o.a,f=o.b,m=t(G$,h3(v),e),p=r*v.b7,d=e,b=r,h=C(Zo,m,p,n,g([f])),y=i;e=d,r=b,n=h,a=y;continue e}}else return n}),Pn=um,xn=$m,Cn=vm,H$=function(e){return{$:4,a:e}},S3=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,o=a,i=t(L,n,r);e=o,r=i;continue e}else return r}),Na=function(e){return H$(t(S3,e,P))},P3={dG:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,b7:1},ml=Yi({bi:Rn,cB:0,c_:Ui,bv:In,dd:255,bD:Rn,bE:Rn}),x3=function(e){var r=e,n=t(Qe,K(r.gl),t(Qe,K(r.gp),K(r.dg)));if(n){var a=r.dg/n,o=r.gp/n,i=r.gl/n,c=lr(i*i+o*o+a*a);return c*n}else return $e},Ue={bI:0,eV:!1,bQ:0,cW:0,b5:0,c8:0,gl:0,gp:0,dg:0},Ze=$(function(e,r){var n=e,a=r;return gr({dP:n.gl,dQ:n.b5,dR:a.gl,dS:a.b5,dT:n.gp,dU:n.bQ,dV:a.gp,dW:a.bQ,dX:n.dg,dY:n.bI,dZ:a.dg,d_:a.bI,d$:n.c8,d0:n.cW,d1:a.c8,d2:a.cW})}),$a=w({bn:t(Ze,Ue,Ue),bV:t(Ze,Ue,Ue),bW:t(Ze,Ue,Ue),bX:t(Ze,Ue,Ue)},C(ta,0,0,0,0)),I$=514,q$=function(e){var r=e.ab,n=e.Z,a=e.Y;return C(Ji,515,r,n,a)},O$=240,C3=g([q$({Y:1,Z:0,ab:!0}),Qi({bi:Fe,cB:O$,c_:0,bv:I$,dd:0,bD:Fe,bE:Fe}),Zi]),z3=$(function(e,r){var n=e,a=r.fF,o=r.fe,i=r.eO,c=Me(a),l=c,u=Me(o),v=u,f=n.cY;if(f.$){var p=f.a;return Io(v)?gr({dP:2/(i*p),dQ:0,dR:0,dS:0,dT:0,dU:2/p,dV:0,dW:0,dX:0,dY:0,dZ:0,d_:-1,d$:0,d0:0,d1:0,d2:1}):gr({dP:2/(i*p),dQ:0,dR:0,dS:0,dT:0,dU:2/p,dV:0,dW:0,dX:0,dY:0,dZ:-2/(v-l),d_:-(v+l)/(v-l),d$:0,d0:0,d1:0,d2:1})}else{var m=f.a;return Io(v)?gr({dP:1/(i*m),dQ:0,dR:0,dS:0,dT:0,dU:1/m,dV:0,dW:0,dX:0,dY:0,dZ:-1,d_:-2*l,d$:0,d0:0,d1:-1,d2:0}):gr({dP:1/(i*m),dQ:0,dR:0,dS:0,dT:0,dU:1/m,dV:0,dW:0,dX:0,dY:0,dZ:-(v+l)/(v-l),d_:-2*v*l/(v-l),d$:0,d0:0,d1:-1,d2:0})}}),Ya=$(function(e,r){return(1&e>>r)===1?0:1}),k3=function(e){return g([q$({Y:1,Z:0,ab:!0}),Qi({bi:Fe,cB:O$,c_:e,bv:I$,dd:0,bD:Fe,bE:Fe}),Zi])},L3=S(function(e,r,n){return Ee(t(Q,function(a){var o=a<<4,i=C(ta,t(Ya,a,0),t(Ya,a,1),t(Ya,a,2),t(Ya,a,3));return s(pr,e,w(r,i),k3(o))},t(fn,1,t(Xr,2,n)-1)))}),Nn=function(e){var r=e;return r},T3=ym,J$=cn({gl:0,gp:1,dg:0}),Ki=J$,M3={cN:qr,de:Gi,df:Ki,dh:eo},Ga=function(e){var r=e;return r},D3=function(e){var r=Ga(ra(e)),n=nr(wn(e)),a=nr(yn(e)),o=nr(_n(e));return gr({dP:o.gl,dQ:a.gl,dR:n.gl,dS:r.gl,dT:o.gp,dU:a.gp,dV:n.gp,dW:r.gp,dX:o.dg,dY:a.dg,dZ:n.dg,d_:r.dg,d$:0,d0:0,d1:0,d2:1})},j3=$(function(e,r){var n=r;return D3(t(G$,n,e))}),A3=function(e){return t(j3,M3,e)},B3=function(e){var r=e;return r.dc},F3=function(e){var r=e;return _n(r)},E3=function(e){var r=e;return yn(r)},V3=function(e){var r=B3(e.an),n=na({cN:Xo(r),de:F3(r),df:E3(r),dh:Tt(Qo(r))}),a=Na(e.aX),o=a,i=C(Zo,n,1,F,g([o]));if(i.$===1)return P;var c=i.a,l=A3(r),u=t(ie,.99,t(de,Me(e.$7),Lt(V$(c)))),v=R$(c),f=v.a,m=v.b,p=v.c,d=x3(s(Oi,f,m,p)),b=t(ie,1.01,t(un,d,Lt(W$(c)))),h=t(z3,e.an,{eO:e.eO,fe:b,fF:u}),y=T3(h).d2,x=y?nr(Tt(Qo(r))):Nn(Xo(r)),_=function(){var fe=e.f9;switch(fe.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var Se=fe.a;return w(3,Se);case 4:var Se=fe.a;return w(4,Se);default:return w(5,0)}}(),k=_.a,A=_.b,I=e.fc,H=I,G=t(co,H,e.gi),O=G,J=gr({dP:0,dQ:x.gl,dR:Pn(O),dS:e.ez,dT:0,dU:x.gp,dV:xn(O),dW:ln(d),dX:0,dY:x.dg,dZ:Cn(O),d_:k,d$:0,d0:y,d1:0,d2:A}),R=Ge(j$,J,l,h,P3,o,{P,X:P,fZ:P}),Z=e.fz;switch(Z.$){case 0:var ae=Z.a;return Ee(g([s(pr,R.P,w(ae,yo),Ln),s(pr,R.X,$a,Ln)]));case 1:var ae=Z.a;return Ee(g([s(pr,R.P,$a,Ln),g([ml]),s(pr,R.fZ,ae.bn,B$),g([E$(0)]),s(pr,R.P,w(ae,yo),C3),s(pr,R.X,$a,Ln)]));default:var pe=Z.a,_e=Z.b;return Ee(g([s(pr,R.P,w(_e,yo),Ln),g([ml]),t(i3,R.fZ,pe),s(L3,R.P,_e,sr(pe)),s(pr,R.X,$a,Ln)]))}},W3=function(e){return t(hn,"width",xe(e))},U$=$(function(e,r){var n=g([Dh(1),Eh(0),Ch(!0),C(Th,0,0,0,0)]),a=function(){var k=e.eM;switch(k.$){case 0:return T(n,"0",1);case 1:return T(t(L,kh,n),"1",1);default:var A=k.a;return T(n,"0",A)}}(),o=a.a,i=a.b,c=a.c,l=e.aS,u=l.a,v=l.b,f=$l(v),m=t(Pe,"height",xe(f)+"px"),p=$l(u),d=p/f,b=t(to,function(k){return V3({eO:d,an:e.an,$7:e.$7,aX:k.aX,fc:k.fc,fz:k.fz,ez:c,f9:k.f9,gi:k.gi})},r),h=t(Pe,"width",xe(p)+"px"),y=e.eQ,x=y,_=Vh(x);return s(Bh,"div",g([t(Pe,"padding","0px"),h,m]),g([w(i,s(Nh,o,g([W3(Ye(p*c)),jh(Ye(f*c)),h,m,t(Pe,"display","block"),t(Pe,"background-color",_)]),b))]))}),R3=function(e){return{$:2,a:e}},X$=function(e){return R3(e)},N3=function(e){return t(U$,{eM:X$(e.bf),eQ:e.eQ,an:e.an,$7:e.$7,aS:e.aS},g([{aX:e.aX,fc:e.fc,fz:e.fz,f9:e.f9,gi:e.gi}]))},Dt=function(e){return e},G3=function(e){var r=e;return r},ec=function(e){var r=e;return G3(r.eP)},Q$=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),H3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Y$=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Z$=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),I3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),q3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),O3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),rc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return C(O3,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return C(Q$,n,r,o,1);case 3:var n=e.a,a=e.b,o=e.c;return C(H3,n,a,o,1);case 4:var n=e.a,a=e.b,o=e.c;return C(Y$,n,a,o,1);case 5:var n=e.a,a=e.b,o=e.c;return C(q3,n,a,o,1);case 6:var n=e.a,a=e.b,o=e.c;return C(Z$,n,a,o,1);case 7:var n=e.a,a=e.b,o=e.c;return C(I3,n,a,o,1);case 8:return e;case 9:return e;default:return e}},nc={$:0},J3=oe(function(e,r,n,a,o,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,f=Mt(c(u)),m=t(ye,f.d7,e),p=t(de,f.d4,r),d=t(ye,f.d8,n),b=t(de,f.d5,a),h=t(ye,f.d9,o),y=t(de,f.d6,i),x=c,_=v;e=m,r=p,n=d,a=b,o=h,i=y,c=x,l=_;continue e}else return{d4:r,d5:a,d6:i,d7:e,d8:n,d9:o}}),U3=S(function(e,r,n){var a=Mt(e(r));return Wt(J3,a.d7,a.d4,a.d8,a.d5,a.d9,a.d6,e,n)}),ma=$(function(e,r){var n=e,a=r;return q(a,n)<1}),K$=function(e){return t(ma,e.d4,e.d7)&&t(ma,e.d5,e.d8)&&t(ma,e.d6,e.d9)?e:{d4:t(de,e.d7,e.d4),d5:t(de,e.d8,e.d5),d6:t(de,e.d9,e.d6),d7:t(ye,e.d7,e.d4),d8:t(ye,e.d8,e.d5),d9:t(ye,e.d9,e.d6)}},Ca=function(e){var r=e;return r},ev=function(e){var r=Ca(e),n=r.a,a=r.b,o=r.c,i=En(n),c=Vn(n),l=Wn(n),u=En(a),v=Vn(a),f=Wn(a),m=En(o),p=Vn(o),d=Wn(o);return K$({d4:t(de,i,t(de,u,m)),d5:t(de,c,t(de,v,p)),d6:t(de,l,t(de,f,d)),d7:t(ye,i,t(ye,u,m)),d8:t(ye,c,t(ye,v,p)),d9:t(ye,l,t(ye,f,d))})},rv=fm,Ie=function(e){return rv(Ga(e))},nv=function(e){var r=e;return r},lo=function(e){return rv(nv(e))},X3=$(function(e,r){var n=e,a=r;return{gl:a.gp*n.dg-a.dg*n.gp,gp:a.dg*n.gl-a.gl*n.dg,dg:a.gl*n.gp-a.gp*n.gl}}),Ko=$(function(e,r){var n=e,a=r;return{gl:a.gl-n.gl,gp:a.gp-n.gp,dg:a.dg-n.dg}}),av=function(e){return e},Q3={gl:0,gp:0,dg:0},Y3=$(function(e,r){var n=e,a=r,o=t(Qe,K(a.gl),t(Qe,K(a.gp),K(a.dg)));if(o){var i=a.dg/o,c=a.gp/o,l=a.gl/o,u=lr(l*l+c*c+i*i);return{gl:n*l/u,gp:n*c/u,dg:n*i/u}}else return Q3}),Z3=Y3(av(1)),tv=S(function(e,r,n){var a=t(Ko,r,n),o=t(Ko,e,r);return Z3(t(X3,a,o))}),K3=function(e){var r=Ca(e),n=r.a,a=r.b,o=r.c,i=lo(s(tv,n,a,o));return T({r:i,el:Ie(n)},{r:i,el:Ie(a)},{r:i,el:Ie(o)})},e1=$(function(e,r){return{$:2,a:e,b:r}}),ov=e1({dt:3,dC:0,eb:4}),r1=function(e){if(e.b){var r=e.a,n=e.b,a=ov(t(Q,K3,e)),o=s(U3,ev,r,n);return C(Q$,o,e,a,0)}else return nc},Je=S(function(e,r,n){return T(e,r,n)}),Le=S(function(e,r,n){var a=e,o=r,i=n;return{gl:a,gp:o,dg:i}}),iv=function(){var e=ze(1),r=ze(1),n=ze(1),a=t(ie,-.5,e),o=t(ie,-.5,r),i=t(ie,-.5,n),c=s(Le,i,o,a),l=t(ie,.5,e),u=s(Le,i,o,l),v=t(ie,.5,r),f=s(Le,i,v,a),m=s(Le,i,v,l),p=t(ie,.5,n),d=s(Le,p,o,a),b=s(Le,p,v,a),h=s(Le,p,o,l),y=s(Le,p,v,l);return rc(r1(g([s(Je,c,b,d),s(Je,c,f,b),s(Je,u,h,y),s(Je,u,y,m),s(Je,d,b,y),s(Je,d,y,h),s(Je,c,m,f),s(Je,c,u,m),s(Je,c,d,h),s(Je,c,h,u),s(Je,f,y,b),s(Je,f,m,y)])))}(),Za={$:0},n1=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),a1=S(function(e,r,n){var a=r.a,o=r.b,i=r.c,c=e(i),l=e(o),u=e(a),v=lo(s(tv,u,l,c)),f={r:v,el:Ie(u)},m={r:v,el:Ie(l)},p={r:v,el:Ie(c)};return t(L,f,t(L,m,t(L,p,n)))}),ac=function(e){var r=e;return r.G},t1=E(function(e,r,n,a){if(r.$===1)return F;var o=r.a;if(n.$===1)return F;var i=n.a;if(a.$===1)return F;var c=a.a;return Y(s(e,o,i,c))}),pn=4294967295>>>32-ur,za=pf,o1=S(function(e,r,n){e:for(;;){var a=pn&r>>>e,o=t(za,a,n);if(o.$){var v=o.a;return t(za,pn&r,v)}else{var i=o.a,c=e-ur,l=r,u=i;e=c,r=l,n=u;continue e}}}),cv=function(e){return e>>>5<<5},jr=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d;return e<0||q(e,n)>-1?F:q(e,cv(n))>-1?Y(t(za,pn&e,i)):Y(s(o1,a,e,o))}),tc=function(e){var r=e;return r.al},Po=$(function(e,r){return t(jr,e,tc(r))}),lv=function(e){var r=function(n){var a=n.a,o=n.b,i=n.c;return C(t1,S(function(c,l,u){return T(c,l,u)}),t(Po,a,e),t(Po,o,e),t(Po,i,e))};return t(mn,r,ac(e))},i1=S(function(e,r,n){e:for(;;){var a=t(Li,me,e),o=a.a,i=a.b;if(q(Sr(o),me)<0)return t(Ti,!0,{C:r,o:n,s:o});var c=i,l=t(L,dn(o),r),u=n+1;e=c,r=l,n=u;continue e}}),ka=function(e){return e.b?s(i1,e,P,0):ki},c1=S(function(e,r,n){return e(r(n))}),l1=$(function(e,r){return!t(Fu,t(c1,rp,e),r)}),oc=function(e){var r=e.a;return r},ic=$(function(e,r){var n=oc(e),a=function(o){var i=o.a,c=o.b,l=o.c;return i>=0&&q(i,n)<0&&c>=0&&q(c,n)<0&&l>=0&&q(l,n)<0};return t(l1,a,r)?{G:r,al:e}:{G:t(oo,a,r),al:e}}),u1=S(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ha=u1({dt:1,dC:3,eb:4}),ft=$(function(e,r){var n=Nn(r),a=Nn(e);return w(T(a.gl,a.gp,a.dg),T(n.gl,n.gp,n.dg))}),pl=s(Ra,0,0,0),xo=tr(function(e,r,n,a,o,i){var c=i.a,l=i.b,u=i.c,v=t(Zn,t(ft,e,r),o);if(v.$){var m={r:pl,el:Ie(r)},p={r:pl,el:Ie(e)},d=u+1,b=u;return T(t(L,T(n,b,d),t(L,T(n,d,a),c)),t(L,m,t(L,p,l)),u+2)}else{var f=v.a;return T(t(L,T(n,f,a),c),l,u)}}),$1=he(function(e,r,n,a,o){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),m=e(l),p=e(c),d=a+2,b=a+1,h=a,y=e,x=r,_=v,k=a+3,A=Ge(xo,f,p,d,h,r,Ge(xo,m,f,b,d,r,Ge(xo,p,m,h,b,r,o)));e=y,r=x,n=_,a=k,o=A;continue e}else{var I=o,H=I.a,G=I.b;return w(H,ve(G))}}),v1=he(function(e,r,n,a,o){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),m=e(l),p=e(c),d=n+2,b=n+1,h=n,y=s(on,t(ft,p,f),d,s(on,t(ft,f,m),b,s(on,t(ft,m,p),h,o))),x=t(L,T(h,b,d),a),_=e,k=v,A=n+3,I=x,H=y;e=_,r=k,n=A,a=I,o=H;continue e}else return T(a,o,n)}),rn=S(function(e,r,n){var a=lv(n),o=s(Ir,a1(r),P,a),i=z(v1,r,a,0,P,ro),c=i.a,l=i.b,u=i.c,v=z($1,r,l,a,0,T(c,P,u)),f=v.a,m=v.b,p=Wi(m)?o:le(o,m);return s(n1,e,t(ic,ka(p),f),t(Ha,p,f))}),ei=function(e){return{G:t(Q,function(r){return T(3*r,3*r+1,3*r+2)},t(fn,0,sr(e)-1)),al:ka(Ee(t(Q,function(r){var n=r.a,a=r.b,o=r.c;return g([n,a,o])},e)))}},uv=function(e){switch(e.$){case 0:return Za;case 1:var a=e.a,r=e.b,n=t(Q,Ca,r);return s(rn,a,_r,ei(n));case 2:var a=e.a,r=e.b,n=t(Q,Ca,r);return s(rn,a,_r,ei(n));case 3:var a=e.a,o=e.b;return s(rn,a,_r,o);case 4:var a=e.a,o=e.b;return s(rn,a,function(i){return i.el},o);case 5:var a=e.a,o=e.b;return s(rn,a,function(i){return i.el},o);case 6:var a=e.a,o=e.b;return s(rn,a,function(i){return i.el},o);case 7:var a=e.a,o=e.b;return s(rn,a,function(i){return i.el},o);case 8:return Za;case 9:return Za;default:return Za}},gl=uv(iv),cc=function(e){var r=e;return r.aS},$v={$:0},M=$v,Ce=$(function(e,r){return{$:1,a:e,b:r}}),f1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bN"}},s1=1029,d1=function(e){return{$:5,a:e}},vv=function(e){var r=e;return d1(r)},m1=vv(s1),p1=1028,g1=vv(p1),qe=S(function(e,r,n){return r===1?e?t(L,m1,n):t(L,g1,n):n}),fv={src:`
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
    `,attributes:{position:"el",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Co=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){return z(ce,s(qe,l,a,m),fv,f1,n,{bN:e,b:c,c:i,d:v,e:o,f:u})}))}),lc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aC"}},sv={src:`
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
    `,attributes:{position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},kr=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){return z(ce,s(qe,l,a,m),sv,lc,n,{aC:e,b:c,c:i,d:v,e:o,f:u})}))}),dv=$(function(e,r){return{$:3,a:e,b:r}}),b1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aC",pointRadius:"b2",sceneProperties:"e"}},mv={src:`
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
    `,attributes:{position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b2",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},h1=E(function(e,r,n,a){return t(dv,n,oe(function(o,i,c,l,u,v,f,m){return z(ce,m,mv,b1,a,{aC:e,b:c,c:i,b2:r,d:v,e:o,f:u})}))}),uc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aV",sceneProperties:"e"}},Ia=function(e){var r=e;return r},uo=sm,Lr=he(function(e,r,n,a,o){return t(Ce,n,oe(function(i,c,l,u,v,f,m,p){return z(ce,s(qe,u,o,p),sv,uc,a,{aV:t(uo,Ia(r),e),b:l,c,d:f,e:i,f:v})}))}),_1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aV",pointRadius:"b2",sceneProperties:"e"}},y1=he(function(e,r,n,a,o){return t(dv,a,oe(function(i,c,l,u,v,f,m,p){return z(ce,p,mv,_1,o,{aV:t(uo,Ia(r),e),b:l,c,b2:n,d:f,e:i,f:v})}))}),pv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",materialColor:"cC",sceneProperties:"e",viewMatrix:"f"}},gv={src:`
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
    `,attributes:{normal:"r",position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ka=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){var p=f.a,d=f.b;return z(ce,s(qe,l,a,m),gv,pv,n,{S:d,bn:p.bn,bV:p.bV,bW:p.bW,bX:p.bX,cC:e,b:c,c:i,d:v,e:o,f:u})}))}),bv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",materialColorTexture:"cD",normalMapTexture:"a2",sceneProperties:"e",useNormalMap:"a8",viewMatrix:"f"}},hv={src:`
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
    `,attributes:{normal:"r",position:"el",tangent:"eB",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},w1=tr(function(e,r,n,a,o,i){return t(Ce,a,oe(function(c,l,u,v,f,m,p,d){var b=p.a,h=p.b;return z(ce,s(qe,v,i,d),hv,bv,o,{S:h,bn:b.bn,bV:b.bV,bW:b.bW,bX:b.bX,cD:e,b:u,c:l,a2:r,d:m,e:c,a8:n,f})}))}),_v={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cf",constantBaseColor:"ci",constantMetallic:"cj",constantRoughness:"ck",enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",metallicTexture:"cH",normalMapTexture:"a2",roughnessTexture:"c2",sceneProperties:"e",useNormalMap:"a8",viewMatrix:"f"}},S1=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return t(Ce,u,oe(function(m,p,d,b,h,y,x,_){var k=x.a,A=x.b;return z(ce,s(qe,b,f,_),hv,_v,v,{cf:e,ci:r,cj:i,ck:a,S:A,bn:k.bn,bV:k.bV,bW:k.bW,bX:k.bX,cH:o,b:d,c:p,a2:c,d:y,c2:n,e:m,a8:l,f:h})}))}}}}}}}}}}},yv={src:`
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
    `,attributes:{},uniforms:{baseColor:"ce",enabledLights:"S",lights12:"bn",lights34:"bV",lights56:"bW",lights78:"bX",metallic:"cG",roughness:"c1",sceneProperties:"e",viewMatrix:"f"}},et=tr(function(e,r,n,a,o,i){return t(Ce,a,oe(function(c,l,u,v,f,m,p,d){var b=p.a,h=p.b;return z(ce,s(qe,v,i,d),gv,yv,o,{ce:e,S:h,bn:b.bn,bV:b.bV,bW:b.bW,bX:b.bX,cG:n,b:u,c:l,d:m,c1:r,e:c,f})}))}),P1=function(e){return{$:0,a:e}},bl=$(function(e,r){return{$:1,a:e,b:r}}),pa=$(function(e,r){if(r.$){var n=r.a.F;return w(n,1)}else return r.a,w(e,0)}),x1=function(e){return C(ta,Pn(e),xn(e),Cn(e),1)},$c=C(ta,0,0,0,0),st=$(function(e,r){if(r.$){var a=r.a.F;return w(a,$c)}else{var n=r.a;return w(e,x1(n))}}),wv=$(function(e,r){var n=w(e,r);if(n.a.$){var o=n.a.a.F;return t(bl,w(o,$c),t(pa,o,r))}else if(n.b.$){var o=n.b.a.F;return t(bl,t(st,o,e),t(pa,o,r))}else{var a=n.a.a;return n.b.a,P1(a)}}),C1=S(function(e,r,n){return{$:0,a:e,b:r,c:n}}),rt=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),z1=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),k1=function(e){return t(Xe,e,1)},ri=t(Xe,0,0),Tn=$(function(e,r){if(r.$){var a=r.a.F;return w(a,ri)}else{var n=r.a;return w(e,k1(n))}}),Sv=E(function(e,r,n,a){var o=C(z1,e,r,n,a);if(o.a.$){var u=o.a.a.F;return C(rt,w(u,$c),t(Tn,u,r),t(Tn,u,n),t(pa,u,a))}else if(o.b.$){var u=o.b.a.F;return C(rt,t(st,u,e),w(u,ri),t(Tn,u,n),t(pa,u,a))}else if(o.c.$){var u=o.c.a.F;return C(rt,t(st,u,e),t(Tn,u,r),w(u,ri),t(pa,u,a))}else if(o.d.$){var u=o.d.a.F;return C(rt,t(st,u,e),t(Tn,u,r),t(Tn,u,n),w(u,1))}else{var i=o.a.a,c=o.b.a,l=o.c.a;return o.d.a,s(C1,i,c,l)}}),L1={src:`
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
    `,attributes:{},uniforms:{backlight:"cb",colorTexture:"bN",sceneProperties:"e"}},zo=he(function(e,r,n,a,o){return t(Ce,n,oe(function(i,c,l,u,v,f,m,p){return z(ce,s(qe,u,o,p),fv,L1,a,{cb:Ia(r),bN:e,b:l,c,d:f,e:i,f:v})}))}),Pv={src:`
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
    `,attributes:{normal:"r",position:"el",uv:"O"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},T1=E(function(e,r,n,a){return t(Ce,r,oe(function(o,i,c,l,u,v,f,m){var p=f.a,d=f.b;return z(ce,s(qe,l,a,m),Pv,bv,n,{S:d,bn:p.bn,bV:p.bV,bW:p.bW,bX:p.bX,cD:e,b:c,c:i,a2:e,d:v,e:o,a8:0,f:u})}))}),M1=$i(function(e,r,n,a,o,i,c,l,u){return t(Ce,c,oe(function(v,f,m,p,d,b,h,y){var x=h.a,_=h.b;return z(ce,s(qe,p,u,y),Pv,_v,l,{cf:e,ci:r,cj:i,ck:a,S:_,bn:x.bn,bV:x.bV,bW:x.bW,bX:x.bX,cH:o,b:m,c:f,a2:e,d:b,c2:n,e:v,a8:0,f:d})}))}),La=S(function(e,r,n){var a=e,o=r;return n<=.5?a+n*(o-a):o+(1-n)*(a-o)}),D1=function(e){var r=e;return s(La,r.d7,r.d4,.5)},j1=function(e){var r=e;return s(La,r.d8,r.d5,.5)},A1=function(e){var r=e;return s(La,r.d9,r.d6,.5)},B1=function(e){return s(Le,D1(e),j1(e),A1(e))},U=function(e){var r=R$(e),n=r.a,a=r.b,o=r.c;return{eW:Ga(B1(e)),fh:n/2,fi:a/2,fj:o/2}},vc=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.F;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var o=r.a,c=r.c,a=r.d;return C(Co,l,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return C(Co,l,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return C(Co,l,U(o),c,a);case 8:return M;case 9:return M;default:return M}}else{var n=e.b.a;switch(r.$){case 0:return M;case 1:var o=r.a,c=r.c,a=r.d;return C(kr,n,U(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return C(kr,n,U(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return C(kr,n,U(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return C(kr,n,U(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return C(kr,n,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return C(kr,n,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return C(kr,n,U(o),c,a);case 8:var o=r.a,c=r.c;return C(kr,n,U(o),c,0);case 9:var o=r.a,c=r.c;return C(kr,n,U(o),c,0);default:var o=r.a,i=r.b,c=r.d;return C(h1,n,i,U(o),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.F,v=e.c;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:var o=r.a,c=r.c,a=r.d;return z(zo,l,v,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return z(zo,l,v,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return z(zo,l,v,U(o),c,a);case 8:return M;case 9:return M;default:return M}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return M;case 1:var o=r.a,c=r.c,a=r.d;return z(Lr,u,v,U(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return z(Lr,u,v,U(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return z(Lr,u,v,U(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return z(Lr,u,v,U(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return z(Lr,u,v,U(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return z(Lr,u,v,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return z(Lr,u,v,U(o),c,a);case 8:var o=r.a,c=r.c;return z(Lr,u,v,U(o),c,0);case 9:var o=r.a,c=r.c;return z(Lr,u,v,U(o),c,0);default:var o=r.a,i=r.b,c=r.d;return z(y1,u,v,i,U(o),c)}}case 2:e.a;var f=e.b,H=e.c,m=t(wv,f,H);if(m.$){var b=m.a,h=b.a;b.b;var y=m.b,x=y.a,_=y.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var o=r.a,c=r.c,d=r.d;return C(T1,h,U(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return Ge(w1,h,x,_,U(o),c,d);case 8:return M;case 9:return M;default:return M}}else{var p=m.a;switch(r.$){case 0:return M;case 1:return M;case 2:var o=r.a,c=r.c,d=r.d;return C(Ka,p,U(o),c,d);case 3:return M;case 4:var o=r.a,c=r.c,d=r.d;return C(Ka,p,U(o),c,d);case 5:return M;case 6:var o=r.a,c=r.c,d=r.d;return C(Ka,p,U(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return C(Ka,p,U(o),c,d);case 8:return M;case 9:return M;default:return M}}default:e.a;var k=e.b,A=e.c,I=e.d,H=e.e,G=C(Sv,k,A,I,H);if(G.$){var Z=G.a,ae=Z.a,pe=Z.b,_e=G.b,fe=_e.a,Se=_e.b,Oe=G.c,Re=Oe.a,Or=Oe.b,Jr=G.d,x=Jr.a,_=Jr.b;switch(r.$){case 0:return M;case 1:return M;case 2:return M;case 3:return M;case 4:return M;case 5:return M;case 6:var o=r.a,c=r.c,a=r.d;return $f(M1,ae,pe,fe,Se,Re,Or,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return S1(ae)(pe)(fe)(Se)(Re)(Or)(x)(_)(U(o))(c)(a);case 8:return M;case 9:return M;default:return M}}else{var O=G.a,J=G.b,R=G.c;switch(r.$){case 0:return M;case 1:return M;case 2:var o=r.a,c=r.c,a=r.d;return Ge(et,O,J,R,U(o),c,a);case 3:return M;case 4:var o=r.a,c=r.c,a=r.d;return Ge(et,O,J,R,U(o),c,a);case 5:return M;case 6:var o=r.a,c=r.c,a=r.d;return Ge(et,O,J,R,U(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return Ge(et,O,J,R,U(o),c,a);case 8:return M;case 9:return M;default:return M}}}}),ko=function(e){var r=e;return r.gl},Lo=function(e){var r=e;return r.gp},To=function(e){var r=e;return r.dg},F1=function(e){var r=e,n=To(r.dh),a=Lo(r.dh),o=ko(r.dh),i=To(r.df),c=Lo(r.df),l=ko(r.df),u=To(r.de),v=Lo(r.de),f=ko(r.de);return f*c*n+v*i*o+u*l*a-u*c*o-v*l*n-f*i*a>0},E1=function(e){var r=Ga(ra(e)),n=nr(wn(e)),a=nr(yn(e)),o=nr(_n(e));return{dG:F1(e),t:o.gl,u:o.gp,v:o.dg,w:a.gl,x:a.gp,y:a.dg,z:n.gl,A:n.gp,B:n.dg,K:r.gl,L:r.gp,M:r.dg,b7:1}},Mn=$(function(e,r){return{$:5,a:e,b:r}}),xv=$(function(e,r){var n=r;switch(n.$){case 0:return M;case 5:var a=n.a,o=n.b,i=t(D$,a,e);return t(Mn,i,o);case 1:return t(Mn,e,n);case 3:return t(Mn,e,n);case 2:return t(Mn,e,n);default:return t(Mn,e,n)}}),Cv=$(function(e,r){return t(xv,E1(e),r)}),$o=function(e){return{$:2,a:e}},V1=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=r.eW;return{eW:{gl:n*i.gl,gp:a*i.gp,dg:o*i.dg},fh:n*r.fh,fi:a*r.fi,fj:o*r.fj}}),W1=pm,R1=mm,hl=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,m=e.b,p=e.c,d=R1(a),b=d.gl,h=d.gp,y=d.dg,x=d.eJ,_=W1({eJ:x,gl:b*f,gp:h*m,dg:y*p});return Wt(r,n,_,o,i,c,l,u,v)}}}}}}}}}},ni=$(function(e,r){switch(r.$){case 0:return $v;case 5:var n=r.a,a=r.b;return t(Mn,n,t(ni,e,a));case 1:var o=r.a,i=r.b;return t(Ce,t(V1,e,o),t(hl,e,i));case 3:return r;case 2:var i=r.a;return $o(t(hl,e,i));default:var c=r.a;return H$(t(Q,ni(e),c))}}),fc=$(function(e,r){var n=r;return t(ni,e,n)}),sc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},zv=7683,kv=7682,N1=s(Xi,{cB:0,c_:0,dd:15},{bi:Fe,bv:In,bD:Fe,bE:zv},{bi:Fe,bv:In,bD:Fe,bE:kv}),G1=s(Xi,{cB:0,c_:0,dd:15},{bi:Fe,bv:In,bD:Fe,bE:kv},{bi:Fe,bv:In,bD:Fe,bE:zv}),dc=$(function(e,r){return e?t(L,G1,r):t(L,N1,r)}),H1={src:`
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
    `,attributes:{normal:"r",position:"el"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b8",viewMatrix:"f"}},I1=function(e){if(e.$){var r=e.c;return Y(oe(function(n,a,o,i,c,l,u,v){return z(ce,t(dc,i,v),H1,sc,r,{b:o,c:a,d:l,e:n,b8:u,f:c})}))}else return F},jt=function(e){var r=I1(e);if(r.$)return M;var n=r.a;return $o(n)},q1=E(function(e,r,n,a){var o=t(vc,n,iv),i=function(){var f=w(e,r);return f.a?f.b?Na(g([o,jt(gl)])):o:f.b?jt(gl):M}(),c=cc(a),l=c.a,u=c.b,v=c.c;return t(Cv,ec(a),t(fc,T(l,u,v),i))}),O1=$(function(e,r){return C(q1,!0,!0,e,r)}),ai=function(e){return{$:0,a:e}},Lv=$(function(e,r){return{$:0,a:e,b:r}}),J1=function(e){var r=Vi(e),n=r.cZ,a=r.cm,o=r.cg;return s(Ra,n,a,o)},Tv=function(e){return t(Lv,0,ai(J1(e)))},U1=function(e){var r=e;return r.m},ga=function(e){var r=e;return Rr(r)},X1=$(function(e,r){var n=e.el,a=e.r;return t(L,{r:lo(a),el:Ie(n)},r)}),Q1=Vt(function(e,r,n,a,o,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Cn(l.el),f=xn(l.el),m=Pn(l.el),p=t(vt,e,m),d=t(Qe,r,m),b=t(vt,n,f),h=t(Qe,a,f),y=t(vt,o,v),x=t(Qe,i,v),_=u;e=p,r=d,n=b,a=h,o=y,i=x,c=_;continue e}else return K$({d4:r,d5:a,d6:i,d7:e,d8:n,d9:o})}),Mv=$(function(e,r){var n=Cn(e.el),a=xn(e.el),o=Pn(e.el);return vi(Q1,o,o,a,a,n,n,r)}),Y1=function(e){var r=s(du,X1,P,tc(e));if(r.b){var n=r.a,a=r.b,o=t(Ha,r,ac(e)),i=t(Mv,n,a);return C(Y$,i,e,o,0)}else return nc},_l=$(function(e,r){var n=e,a=r,o=n.df,i=o,c=n.de,l=c;return{gl:a.gl*l.gl+a.gp*i.gl,gp:a.gl*l.gp+a.gp*i.gp,dg:a.gl*l.dg+a.gp*i.dg}}),At=function(e){var r=e;return Nr(r)},va=function(e){var r=e;return r},ti=function(e){return ar(2*Er*e)},yl=$$({cN:qr,de:Gi,df:Ki}),Dv=function(){var e=72,r=t(C$,e,ti(1)),n=ze(1),a=va(v$),o=va(z$),i=ze(1),c=t(ie,.5,i),l=s(Le,$e,$e,c),u=t(ie,-.5,i),v=s(Le,$e,$e,u),f=function(d){var b=t(ie,d,r),h=va(t(_l,yl,Yo(b))),y=t(ie,ga(b),n),x=t(ie,At(b),n),_=s(Le,y,x,c),k=s(Le,y,x,u),A=t(Pt,e,d+1),I=t(ie,A,r),H=va(t(_l,yl,Yo(I))),G=t(ie,ga(I),n),O=t(ie,At(I),n),J=s(Le,G,O,u),R=s(Le,G,O,c);return g([T({r:o,el:v},{r:o,el:J},{r:o,el:k}),T({r:h,el:k},{r:H,el:J},{r:H,el:R}),T({r:h,el:k},{r:H,el:R},{r:h,el:_}),T({r:a,el:l},{r:a,el:_},{r:a,el:R})])},m=t(Q,f,t(fn,0,e-1)),p=ei(Ee(m));return rc(Y1(p))}(),wl=uv(Dv),Z1=function(e){var r=e,n=K(r.dg),a=K(r.gp),o=K(r.gl);if(q(o,a)<1)if(q(o,n)<1){var i=lr(r.dg*r.dg+r.gp*r.gp);return{gl:0,gp:-r.dg/i,dg:r.gp/i}}else{var i=lr(r.gp*r.gp+r.gl*r.gl);return{gl:-r.gp/i,gp:r.gl/i,dg:0}}else if(q(a,n)<1){var i=lr(r.dg*r.dg+r.gl*r.gl);return{gl:r.dg/i,gp:0,dg:-r.gl/i}}else{var i=lr(r.gl*r.gl+r.gp*r.gp);return{gl:-r.gp/i,gp:r.gl/i,dg:0}}},K1=function(e){var r=Z1(e),n=r,a=n,o=e,i=o,c={gl:i.gp*a.dg-i.dg*a.gp,gp:i.dg*a.gl-i.gl*a.dg,dg:i.gl*a.gp-i.gp*a.gl};return w(r,c)},e_=function(e){var r=Ni(e),n=K1(r),a=n.a,o=n.b;return na({cN:x$(e),de:a,df:o,dh:r})},r_=function(e){var r=e;return r.fx},n_=function(e){var r=e;return r.fQ},a_=E(function(e,r,n,a){var o=e_(U1(a)),i=t(vc,n,Dv),c=function(){var m=w(e,r);return m.a?m.b?Na(g([i,jt(wl)])):i:m.b?jt(wl):M}(),l=n_(a),u=l,v=r_(a),f=v;return t(Cv,o,t(fc,T(u,u,f),c))}),t_=$(function(e,r){return C(a_,!0,!0,e,r)}),Sl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bA",viewMatrix:"f"}},Pl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bA",viewMatrix:"f"}},fa=function(e){var r=Ca(e),n=r.a,a=r.b,o=r.c,i=Nn(n),c=Nn(a),l=Nn(o);return gr({dP:i.gl,dQ:c.gl,dR:l.gl,dS:0,dT:i.gp,dU:c.gp,dV:l.gp,dW:0,dX:i.dg,dY:c.dg,dZ:l.dg,d_:0,d$:0,d0:0,d1:0,d2:0})},nt=ov(g([T({c7:0},{c7:1},{c7:2})])),o_=$(function(e,r){var n=ev(r),a=U(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.F,M;var o=e.b.a;return t(Ce,a,oe(function(_,k,A,I,H,G,O,J){return z(ce,s(qe,I,0,J),Sl,lc,nt,{aC:o,b:A,c:k,d:G,e:_,bA:fa(r),f:H})}));case 1:if(e.b.$)return e.a,M;var i=e.b.a,c=e.c;return t(Ce,a,oe(function(_,k,A,I,H,G,O,J){return z(ce,s(qe,I,0,J),Sl,uc,nt,{aV:t(uo,Ia(c),i),b:A,c:k,d:G,e:_,bA:fa(r),f:H})}));case 2:e.a;var l=e.b,d=e.c,u=t(wv,l,d);if(u.$)return M;var v=u.a;return t(Ce,a,oe(function(_,k,A,I,H,G,O,J){var R=O.a,Z=O.b;return z(ce,s(qe,I,0,J),Pl,pv,nt,{S:Z,bn:R.bn,bV:R.bV,bW:R.bW,bX:R.bX,cC:v,b:A,c:k,d:G,e:_,bA:fa(r),f:H})}));default:e.a;var f=e.b,m=e.c,p=e.d,d=e.e,b=C(Sv,f,m,p,d);if(b.$)return M;var h=b.a,y=b.b,x=b.c;return t(Ce,a,oe(function(_,k,A,I,H,G,O,J){var R=O.a,Z=O.b;return z(ce,s(qe,I,0,J),Pl,yv,nt,{ce:h,S:Z,bn:R.bn,bV:R.bV,bW:R.bW,bX:R.bX,cG:x,b:A,c:k,d:G,c1:y,e:_,bA:fa(r),f:H})}))}}),i_=function(){var e=g([{a7:t(Xe,0,1)},{a7:t(Xe,1,1)},{a7:t(Xe,2,1)},{a7:t(Xe,0,-1)},{a7:t(Xe,1,-1)},{a7:t(Xe,2,-1)}]),r=g([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return t(Ha,e,r)}(),c_={src:`
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
    `,attributes:{triangleShadowVertex:"a7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b8",triangleVertexPositions:"bA",viewMatrix:"f"}},xl=function(e){return $o(oe(function(r,n,a,o,i,c,l,u){return z(ce,t(dc,o,u),c_,sc,i_,{b:a,c:n,d:c,e:r,b8:l,bA:fa(e),f:i})}))},l_=E(function(e,r,n,a){var o=t(o_,n,a),i=w(e,r);return i.a?i.b?Na(g([o,xl(a)])):o:i.b?xl(a):M}),u_=$(function(e,r){return C(l_,!0,!0,e,r)}),mc=function(e){var r=e;return r},$_=$(function(e,r){var n=Wn(r),a=Wn(e),o=Vn(r),i=Vn(e),c=En(r),l=En(e);return{d4:t(de,l,c),d5:t(de,i,o),d6:t(de,a,n),d7:t(ye,l,c),d8:t(ye,i,o),d9:t(ye,a,n)}}),v_=function(e){var r=mc(e),n=r.a,a=r.b;return t($_,n,a)},Cl={src:`
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
    `,attributes:{lineSegmentVertex:"dO"},uniforms:{lineSegmentEndPoint:"dM",lineSegmentStartPoint:"dN",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},f_=$(function(e,r){return{$:1,a:e,b:r}}),s_=f_({dt:2,dC:0,eb:1}),zl=s_(g([w({dO:0},{dO:1})])),d_=$(function(e,r){var n=v_(r),a=U(n),o=mc(r),i=o.a,c=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.F,M;var l=e.b.a;return t(Ce,a,oe(function(v,f,m,p,d,b,h,y){return z(ce,y,Cl,lc,zl,{aC:l,dM:Ie(c),dN:Ie(i),b:m,c:f,d:b,e:v,f:d})}));case 1:if(e.b.$)return M;var l=e.b.a,u=e.c;return t(Ce,a,oe(function(f,m,p,d,b,h,y,x){return z(ce,x,Cl,uc,zl,{aV:t(uo,Ia(u),l),dM:Ie(c),dN:Ie(i),b:p,c:m,d:h,e:f,f:b})}));case 2:return M;default:return M}}),m_=$(function(e,r){return t(d_,e,r)}),pc=function(e){var r=e;return r.eW},gc=function(e){var r=e;return r.fQ},oi=$(function(e,r){var n=e,a=r;return n/a}),p_=he(function(e,r,n,a,o){e:for(;;){var i=a(r/n),c=t(L,i,o);if(be(r,e))return c;var l=e,u=r-1,v=n,f=a,m=c;e=l,r=u,n=v,a=f,o=m;continue e}}),kl=$(function(e,r){return e<1?P:z(p_,0,e,e,r,P)}),g_=$(function(e,r){var n=e.el,a=e.r,o=e.O,i=o,c=i.a,l=i.b;return t(L,{r:lo(a),el:Ie(n),O:t(Xe,c,l)},r)}),b_=function(e){var r=s(du,g_,P,tc(e));if(r.b){var n=r.a,a=r.b,o=t(Ha,r,ac(e)),i=t(Mv,n,a);return C(Z$,i,e,o,0)}else return nc},bc=$(function(e,r){var n=e,a=r,o=Rr(a);return{gl:o*Rr(n),gp:o*Nr(n),dg:Nr(a)}}),h_=function(){var e=ze(1),r=72,n=t(fn,0,r-1),a=t(kl,r,t(La,$e,ti(1))),o=Ci(r/2),i=t(fn,0,o-1),c=t(kl,o,t(La,An(90),An(-90))),l=ka(Ee(t(Q,function(f){return t(Q,function(m){return{r:va(t(bc,f,m)),el:s(Le,t(ie,ga(m)*ga(f),e),t(ie,ga(m)*At(f),e),t(ie,At(m),e)),O:w(t(oi,f,ti(1)),t(oi,t(un,An(90),m),An(180)))}},c)},a))),u=$(function(f,m){return f*(o+1)+m}),v=Ee(t(Q,function(f){return Ee(t(Q,function(m){var p=t(u,f+1,m),d=t(u,f,m),b=t(u,f+1,m+1),h=t(u,f,m+1);return g([T(h,b,p),T(h,p,d)])},i))},n));return rc(b_(t(ic,l,v)))}(),Bt=72,at=2*Bt,__=$(function(e,r){e:for(;;){var n=at+1,a=t(Pt,at,2*e+3),o=t(Pt,at,2*e+2),i=2*e+1,c=2*e,l=at,u=t(L,T(l,c,o),t(L,T(c,a,o),t(L,T(c,i,a),t(L,T(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),y_=S(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),w_=$(function(e,r){e:for(;;){var n=s(y_,0,2*Er,e/Bt),a={bG:n,b$:0,b6:1},o={bG:n,b$:1,b6:1},i=t(L,a,t(L,o,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),S_=function(){var e=t(w_,Bt-1,g([{bG:0,b$:0,b6:0},{bG:0,b$:1,b6:0}])),r=t(__,Bt-1,P);return t(Ha,e,r)}(),P_={src:`
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
    `,attributes:{angle:"bG",offsetScale:"b$",radiusScale:"b6"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b8",viewMatrix:"f"}},Ll=function(e){return $o(oe(function(r,n,a,o,i,c,l,u){return z(ce,t(dc,!0,u),P_,sc,S_,{aC:s(Ra,0,0,1),b:a,c:n,d:c,e:r,b8:l,f:i})}))},x_=function(e){var r=nv(e);return{dG:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.gl,L:r.gp,M:r.dg,b7:1}},C_=$(function(e,r){return t(xv,x_(e),r)}),z_=E(function(e,r,n,a){var o=t(vc,n,h_),i=function(){var u=w(e,r);return u.a?u.b?Na(g([o,Ll()])):o:u.b?Ll():M}(),c=gc(a),l=c;return t(C_,t(Ko,qr,pc(a)),t(fc,T(l,l,l),i))}),k_=$(function(e,r){return C(z_,!0,!0,e,r)}),L_=S(function(e,r,n){return{$:1,a:e,b:r,c:n}}),jv=S(function(e,r,n){return{$:2,a:e,b:r,c:n}}),T_=he(function(e,r,n,a,o){return{$:3,a:e,b:r,c:n,d:a,e:o}}),M_=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return t(Lv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return s(L_,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return s(jv,n,a,c);default:var n=e.a,a=e.b,o=e.c,i=e.d,c=e.e;return z(T_,n,a,o,i,c)}},D_=M_,Av=function(e){switch(e.$){case 0:var o=e.a,r=e.b;return g([t(O1,o,r)]);case 1:var o=e.a,n=e.b;return g([t(u_,o,n)]);case 3:var o=e.a,a=e.b;return g([t(k_,D_(o),a)]);case 2:var o=e.a,i=e.b;return g([t(t_,o,i)]);case 4:var c=e.a,l=e.b;return g([t(m_,Tv(c),l)]);default:var u=e.a;return t(to,Av,u)}},Bv=function(e){return t(to,Av,e)},j_=$(function(e,r){return N3({eM:e.eM,eQ:T$(e.eR),an:e.an,$7:ze(e.$7),bf:e.bf,aS:w(Dt(Ye(e.a4.gj)),Dt(Ye(e.a4.fl))),aX:Bv(r),fc:e.fc,fz:e.fz,f9:e.f9,gi:e.gi})}),Fv=function(e){return e},A_=$(function(e,r){var n=e,a=nr(r.e4),o=a.gl,i=a.gp,c=a.dg,l=t(co,r.bS,r.aQ),u=l;return{bI:Cn(u),eV:n,bQ:xn(u),cW:0,b5:Pn(u),c8:1,gl:-o,gp:-i,dg:-c}}),B_=function(e){return t(A_,Fv(!0),{aQ:e.aQ,e4:t(bc,ar(e.bH),ar(e.bO)),bS:e.bS})},vo=C(zr,52/255,101/255,164/255,1),F_=C(zr,115/255,210/255,22/255,1),hc=function(e){return{$:5,a:e}},He=function(e){return hc(e)},_c=C(zr,204/255,0/255,0/255,1),yc=$(function(e,r){return{$:2,a:e,b:r}}),E_=S(function(e,r,n){return{m:t(xr,e,r),fx:Me(n.fx),fQ:Me(n.fQ)}}),Ev=S(function(e,r,n){return t(yc,e,s(E_,qr,J$,{fx:ze(n),fQ:ze(r)}))}),Mo=function(e){return s(qi,0,1,e<=.04045?e/12.92:t(Xr,(e+.055)/1.055,2.4))},V_=function(e){var r=Vi(e),n=r.cZ,a=r.cm,o=r.cg;return s(Ra,Mo(n),Mo(a),Mo(o))},W_=function(e){return s(jv,0,ai(V_(e)),ai(0))},$n=$(function(e,r){return t(ea,"unlit",e)?Tv(r):W_(r)}),Vv=$(function(e,r){return{$:0,a:e,b:r}}),Wv=$(function(e,r){return{$:4,a:e,b:r}}),wc=$(function(e,r){return{$:3,a:e,b:r}}),Sc=$(function(e,r){return{$:1,a:e,b:r}}),R_=S(function(e,r,n){return{gl:e,gp:r,dg:n}}),N_=$(function(e,r){return{eP:t(l$,e,ec(r)),aS:cc(r)}}),G_=$(function(e,r){var n=r;return t(xr,t(aa,e,n.cN),n.e4)}),H_=$(function(e,r){var n=r;return{m:t(G_,e,n.m),fx:n.fx,fQ:n.fQ}}),I_=function(e){return e},Rv=$(function(e,r){var n=mc(r),a=n.a,o=n.b;return I_(w(e(a),e(o)))}),q_=$(function(e,r){return t(Rv,aa(e),r)}),Pc=$(function(e,r){return{eW:r,fQ:Me(e)}}),O_=$(function(e,r){return t(Pc,gc(r),t(aa,e,pc(r)))}),Nv=$(function(e,r){var n=r,a=n.a,o=n.b,i=n.c;return T(e(a),e(o),e(i))}),J_=$(function(e,r){return t(Nv,aa(e),r)}),fo=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=s(R_,n,a,o);switch(r.$){case 0:var f=r.a,c=r.b;return t(Vv,f,t(N_,i,c));case 1:var f=r.a,l=r.b;return t(Sc,f,t(J_,i,l));case 3:var f=r.a,u=r.b;return t(wc,f,t(O_,i,u));case 2:var f=r.a,v=r.b;return t(yc,f,t(H_,i,v));case 4:var f=r.a,m=r.b;return t(Wv,f,t(q_,i,m));default:var p=r.a;return hc(t(Q,fo(T(n,a,o)),p))}}),vn=function(e){return fo(T(e,0,0))},so=function(e){return fo(T(0,e,0))},Gv=function(e){return fo(T(0,0,e))},U_=S(function(e,r,n){return{eP:s(c$,e,r,ec(n)),aS:cc(n)}}),X_=$(function(e,r){var n=t(Aa,e,r),a=t(lt,e,r);return function(o){var i=o;return t(xr,n(i.cN),a(i.e4))}}),Q_=S(function(e,r,n){var a=n;return{m:s(X_,e,r,a.m),fx:a.fx,fQ:a.fQ}}),Y_=S(function(e,r,n){return t(Rv,t(Aa,e,r),n)}),Z_=S(function(e,r,n){return t(Pc,gc(n),s(Aa,e,r,pc(n)))}),K_=S(function(e,r,n){return t(Nv,t(Aa,e,r),n)}),xc=S(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return t(Vv,l,s(U_,e,r,a));case 1:var l=n.a,o=n.b;return t(Sc,l,s(K_,e,r,o));case 3:var l=n.a,i=n.b;return t(wc,l,s(Z_,e,r,i));case 2:var l=n.a,c=n.b;return t(yc,l,s(Q_,e,r,c));case 4:var l=n.a,u=n.b;return t(Wv,l,s(Y_,e,r,u));default:var v=n.a;return hc(t(Q,t(xc,e,r),v))}}),e2=t(xr,qr,Ki),Hv=$(function(e,r){return s(xc,e2,ar(e),r)}),r2=t(xr,qr,eo),ii=$(function(e,r){return s(xc,r2,ar(e),r)}),n2=Ef,a2=Vf,t2=function(e){var r=e.a,n=e.b,a=e.c;return lr(t(Xr,r,2)+t(Xr,n,2)+t(Xr,a,2))},o2=function(e){var r=e.a,n=e.b,a=e.c,o=t2(T(r,n,a));return{bH:t(a2,n,r),fp:n2(a/o),fQ:o}},dt=E(function(e,r,n,a){var o=a.a,i=a.b,c=T(i.gl-o.gl,i.gp-o.gp,i.dg-o.dg),l=c.a,u=c.b,v=c.c,f=o2(T(l,u,v)),m=f.fQ,p=f.bH,d=f.fp;return t(Gv,o.dg,t(so,o.gp,t(vn,o.gl,t(ii,p,t(Hv,d-Gr(90),t(vn,m/2,t(ii,Gr(90),s(Ev,t($n,e,r),n/2,m))))))))}),i2=function(e){return He(g([C(dt,e,_c,.1,w(s(Ne,0,0,0),s(Ne,10,0,0))),C(dt,e,F_,.1,w(s(Ne,0,0,0),s(Ne,0,10,0))),C(dt,e,vo,.1,w(s(Ne,0,0,0),s(Ne,0,0,10)))]))},c2=C(zr,78/255,154/255,6/255,1),ci=$(function(e,r){return t(wc,e,t(Pc,ze(r),qr))}),Iv=E(function(e,r,n,a){var o=a.a,i=a.b;return C(dt,e,r,n,w(s(Ne,o.gl,o.gp,0),s(Ne,i.gl,i.gp,0)))}),l2=C(zr,237/255,212/255,0/255,1),u2=$(function(e,r){var n=Fa(r.k).cc,a=t(ii,n.e5,He(g([t(Hv,n.fX,He(g([t(vn,-.02,t(ci,t($n,e,_c),n.aR.fQ)),t(vn,.02,t(ci,t($n,e,l2),n.aR.fQ))]))),s(Ev,t($n,e,Ju),.2,1.1)]))),o=n.gf,i=o.a,c=o.b,l=t(ea,"draw speed vector",e)?C(Iv,e,c2,.2,w(t(yr,0,0),t(yr,.3*i,.3*c))):He(P);return t(so,n.aR.bK.gp,t(vn,n.aR.bK.gl,t(Gv,.5,He(g([a,l])))))}),mt=$(function(e,r){var n=r.a,a=r.b,o=r.c;return t(Sc,e,s(Je,s($t,n.gl,n.gp,n.dg),s($t,a.gl,a.gp,a.dg),s($t,o.gl,o.gp,o.dg)))}),$2=function(e){return t(mt,t($n,e,vo),T(s(Ne,0,0,0),s(Ne,.1,0,0),s(Ne,0,.1,0)))},v2=$(function(e,r){if(t(ea,"draw ball trail",e)){var n=Fa(r.k).cc;return He(t(Q,function(a){return t(so,a.gp,t(vn,a.gl,$2(e)))},n.ga))}else return He(P)}),f2=$(function(e,r){return t(so,r.aG.gp,t(vn,r.aG.gl,t(ci,t($n,e,_c),.2)))}),s2=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return P}();return s(Ht,ao,e,r)},d2=$(function(e,r){var n=r.l.aJ;if(n.$===1){var a=n.a;return He(t(Q,s(Iv,e,vo,.2),s2(a)))}else return He(P)}),Do=$(function(e,r){var n=e.a,a=e.b,o=e.c;return{gl:r.gl+n,gp:r.gp+a,dg:r.dg+o}}),m2=$(function(e,r){return{gl:e,gp:r}}),p2=$(function(e,r){var n=e,a=r;return a.gl*n.gp-a.gp*n.gl}),Tl=$(function(e,r){var n=e,a=r;return{gl:a.gl-n.gl,gp:a.gp-n.gp}}),g2=function(e){var r=e;return r},qv=function(e){var r=g2(e),n=r.a,a=r.b,o=r.c,i=t(Tl,n,a),c=t(Tl,n,o);return t(ie,.5,t(p2,c,i))},Ov=S(function(e,r,n){return T(e,r,n)}),b2=function(e){return s(De,un,$e,e)},Jv=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=$(function(f,m){return qv(s(Ov,r,f,m))}),l=s(Ht,c,t(L,a,i),i);return b2(l)}else{var r=e.a,n=e.b,a=n.a;return $e}else return e.a,$e;else return $e},h2=function(e){return t(ma,$e,Jv(e))?e:ve(e)},Uv=$(function(e,r){var n=e,a=r;return q(a,n)>-1}),_2=function(e){return t(Uv,$e,Jv(e))?e:ve(e)},y2=$(function(e,r){return{a$:t(Q,h2,e),a3:_2(r)}}),w2=function(e){return t(y2,P,e)},Vr=function(e){var r=e;return r.gl},Wr=function(e){var r=e;return r.gp},jo=$(function(e,r){return{gl:e(Vr(r)),gp:e(Wr(r))}}),gn=$(function(e,r){var n=e,a=r;return q(a,n)>0}),Ft=S(function(e,r,n){return qv(s(Ov,e.el,r.el,n.el))}),S2=$(function(e,r){e:for(;;){var n=r.p;if(n.b){var o=n.a,i=n.b;if(t(gn,$e,s(Ft,o,r.g,e))){var a=T(o.fq,r.g.fq,e.fq),c=e,l={g:o,p:i,j:r.j,bh:t(L,a,r.bh)};e=c,r=l;continue e}else return{g:e,p:t(L,r.g,r.p),j:r.j,bh:r.bh}}else if(t(gn,$e,s(Ft,r.j,r.g,e))){var a=T(r.j.fq,r.g.fq,e.fq);return{g:e,p:P,j:r.j,bh:t(L,a,r.bh)}}else return{g:e,p:g([r.g]),j:r.j,bh:r.bh}}}),P2=$(function(e,r){e:for(;;){var n=r.p;if(n.b){var o=n.a,i=n.b;if(t(gn,$e,s(Ft,e,r.g,o))){var a=T(e.fq,r.g.fq,o.fq),c=e,l={g:o,p:i,j:r.j,bh:t(L,a,r.bh)};e=c,r=l;continue e}else return{g:e,p:t(L,r.g,r.p),j:r.j,bh:r.bh}}else if(t(gn,$e,s(Ft,e,r.g,r.j))){var a=T(e.fq,r.g.fq,r.j.fq);return{g:e,p:P,j:r.j,bh:t(L,a,r.bh)}}else return{g:e,p:g([r.g]),j:r.j,bh:r.bh}}}),x2=$(function(e,r){var n=e,a=r;return t(Ei,n,a)}),C2=$(function(e,r){var n=e,a=r;return q(a,n)<0}),Ta=$(function(e,r){var n=Wr(r),a=Wr(e),o=Vr(r),i=Vr(e);return t(C2,n,a)?0:t(gn,n,a)?2:t(x2,o,i)}),Et=function(e){return e},Xv=Tf,z2=$(function(e,r){var n=S(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(e.fq,a.fq,l.fq),v=l,f=u,m=t(L,c,i);a=v,o=f,i=m;continue e}else{var c=T(e.fq,a.fq,r.j.fq);return t(L,c,i)}});return{g:e,p:P,j:r.g,bh:s(n,r.g,r.p,r.bh)}}),k2=$(function(e,r){var n=S(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(a.fq,e.fq,l.fq),v=l,f=u,m=t(L,c,i);a=v,o=f,i=m;continue e}else{var c=T(a.fq,e.fq,r.j.fq);return t(L,c,i)}});return{g:e,p:P,j:r.g,bh:s(n,r.g,r.p,r.bh)}}),L2=function(e){var r=t(Xv,$(function(u,v){return t(Ta,v.el,u.el)}),e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=a.b,c=$(function(u,v){return be(u.a1,v.j.fq)?t(k2,u,v):be(v.j.a1,u.fq)?t(z2,u,v):be(u.a1,v.g.fq)?t(P2,u,v):be(v.g.a1,u.fq)?t(S2,u,v):Et(v)}),l={g:o,p:P,j:n,bh:P};return s(De,c,l,i).bh}else return r.a,P;else return P},qa=$(function(e,r){return t(jr,e,r.R)}),T2=$(function(e,r){var n=r;return s(on,e,0,n)}),M2=he(function(e,r,n,a,o){e:for(;;){var i=o.a,c=o.b,l=t(qa,a,e);if(l.$)return Et(w(i,P));var u=l.a,v=t(jr,u.ai,r);if(v.$)return Et(w(i,P));var f=v.a,m=t(T2,a,i),p=u.as,d={fq:u.ai,a1:u.ap,el:f},b=t(L,d,c);if(be(p,n))return w(m,ve(b));var h=e,y=r,x=n,_=p,k=w(m,b);e=h,r=y,n=x,a=_,o=k;continue e}}),D2=ro,tt=yf,j2=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=function(l){if(l.$){var v=l.a;return dn(t(tt,e,v))}else{var u=l.a;return tn(t(tt,c,u))}};return C(Br,n,a,t(tt,c,o),t(tt,e,i))}),A2=$(function(e,r){var n=t(Zn,e,r);return!n.$}),B2=$(function(e,r){var n=r;return t(A2,e,n)}),F2=function(e){var r=t(j2,function(c){return c.el},e.al),n=$(function(c,l){var u=l,v=u.a,f=u.b;if(t(B2,c,v))return l;var m=z(M2,e,r,c,c,w(v,P)),p=m.a,d=m.b;return w(p,t(L,d,f))}),a=t(fn,0,oc(e.R)-1),o=s(De,n,w(D2,P),a),i=o.b;return w(r,i)},E2=P,zn=$(function(e,r){if(r.$)return Et(e);var n=r.a;return n}),V2=he(function(e,r,n,a,o){if(r.$===1)return F;var i=r.a;if(n.$===1)return F;var c=n.a;if(a.$===1)return F;var l=a.a;if(o.$===1)return F;var u=o.a;return Y(C(e,i,c,l,u))}),li=bf,Qv=ff,Gn=gf,ba=E(function(e,r,n,a){var o=pn&r>>>e;if(q(o,Sr(a))>-1){if(e===5)return t(li,dn(n),a);var i=tn(C(ba,e-ur,r,n,sn));return t(li,i,a)}else{var c=t(za,o,a);if(c.$){var i=tn(C(ba,e-ur,r,n,Qv(c)));return s(Gn,o,i,a)}else{var l=c.a,i=tn(C(ba,e-ur,r,n,l));return s(Gn,o,i,a)}}}),ui=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=Sr(i),l=Sr(e),u=n+(l-c);if(be(l,me)){var v=q(u>>>ur,1<<a)>0;if(v){var f=a+ur,m=C(ba,f,n,e,Qv(tn(o)));return C(Br,u,f,m,sn)}else return C(Br,u,a,C(ba,a,n,e,o),sn)}else return C(Br,u,a,o,e)}),Ml=$(function(e,r){var n=r.d;return t(ui,t(li,e,n),r)}),Dl=$(function(e,r){return D(r,{as:e})}),jl=$(function(e,r){return D(r,{D:e})}),Yv=E(function(e,r,n,a){var o=pn&r>>>e,i=t(za,o,a);if(i.$){var u=i.a,v=s(Gn,pn&r,n,u);return s(Gn,o,dn(v),a)}else{var c=i.a,l=C(Yv,e-ur,r,n,c);return s(Gn,o,tn(l),a)}}),W2=S(function(e,r,n){var a=n.a,o=n.b,i=n.c,c=n.d;return e<0||q(e,a)>-1?n:q(e,cv(a))>-1?C(Br,a,o,i,s(Gn,pn&e,r,c)):C(Br,a,o,C(Yv,o,e,r,i),c)}),ot=S(function(e,r,n){var a=t(jr,e,n);if(a.$)return n;var o=a.a;return s(W2,e,r(o),n)}),qn=S(function(e,r,n){var a=oc(n.R);return t(zn,w(n,-1),z(V2,E(function(o,i,c,l){return w(D(n,{R:t(Ml,{ap:e,as:e,D:l.D,ai:r.fq},t(Ml,{ap:r.fq,as:r.b0,D:c.D,ai:e},s(ot,l.D,Dl(a+1),s(ot,c.D,Dl(a),s(ot,r.b0,jl(a),s(ot,e,jl(a+1),n.R))))))}),a)}),t(jr,e,n.al),t(jr,r.fq,n.al),t(jr,e,n.R),t(jr,r.b0,n.R)))}),On=$(function(e,r){return t(Zn,e,r.bl)}),R2=_r,Al=$(function(e,r){return t(jr,e,r.al)}),N2=S(function(e,r,n){if(r.$===1)return F;var a=r.a;if(n.$===1)return F;var o=n.a;return Y(t(e,a,o))}),Zv=S(function(e,r,n){return t(zn,n,t(Fr,function(a){return s(N2,$(function(o,i){var c=R2(w(o.el,i.el));return D(n,{bg:t(e,w(r,c),n.bg)})}),t(Al,a.ai,n),t(Al,a.ap,n))},t(qa,r,n)))}),G2=$(function(e,r){var n=r;return t(oo,sp(e),n)}),Cc=Zv(G2),H2=$(function(e,r){return t(zn,r,t(Fr,function(n){return t(re,function(a){var o=a.a0?s(qn,e,a,r).a:r;return t(Cc,n.D,o)},t(On,n.D,r))},t(qa,e,r)))}),Jn=S(function(e,r,n){return{fq:e,a0:n,b0:r}}),I2=$(function(e,r){var n=r;return t(L,e,n)}),zc=Zv(I2),Un=S(function(e,r,n){return D(n,{bl:s(on,e,r,n.bl)})}),q2=$(function(e,r){return t(zn,r,t(Fr,function(n){return t(re,function(a){var o=a.a0?s(qn,e,a,r).a:r;return s(Un,e,s(Jn,e,e,!1),t(zc,e,t(Cc,n.D,o)))},t(On,n.D,r))},t(qa,e,r)))}),O2=function(e){var r=e;return r},J2=$(function(e,r){var n=r,a=Wr(e),o=Vr(e);return t(re,function(i){i.a;var c=i.b,l=c.a;return c.b,l},s(De,$(function(i,c){var l=O2(i.b),u=l.a,v=l.b,f=Vr(u),m=Wr(u),p=Vr(v),d=Wr(v),b=function(){if(be(m,d))return t(Te,t(de,f,p),o);var x=t(oi,t(Te,m,a),t(Te,m,d));return t(Te,t(un,t(ie,x,t(Te,f,p)),f),o)}();if(t(Uv,$e,b)){if(c.$===1)return Y(w(b,i));var h=c.a,y=h.a;return h.b,t(ma,y,b)?Y(w(b,i)):c}else return c}),F,n))}),kc=$(function(e,r){return t(J2,e,r.bg)}),U2=S(function(e,r,n){return t(zn,n,t(Fr,function(a){return t(Fr,function(o){var i=o.a0?s(qn,e,o,n).a:n,c=t(Cc,a.D,i);return t(Fr,function(l){return t(re,function(u){var v=u.a0?s(qn,e,u,c):w(c,e),f=v.a,m=v.b;return s(Un,l,s(Jn,e,m,!0),f)},t(On,l,n))},t(kc,r,c))},t(On,a.D,n))},t(qa,e,n)))}),X2=S(function(e,r,n){return t(zn,n,t(Fr,function(a){return t(re,function(o){var i=o.a0?s(qn,e,o,n):w(n,e),c=i.a,l=i.b;return s(Un,a,s(Jn,e,l,!1),c)},t(On,a,n))},t(kc,r,n)))}),Q2=S(function(e,r,n){return t(zn,n,t(Fr,function(a){return t(re,function(o){var i=s(qn,e,o,n),c=i.a,l=i.b;return s(Un,e,s(Jn,e,e,!1),t(zc,e,s(Un,a,s(Jn,e,l,!1),c)))},t(On,a,n))},t(kc,r,n)))}),Y2=$(function(e,r){return s(Un,e,s(Jn,e,e,!1),t(zc,e,r))}),Kv=Sf,ef=wf,Bl=$(function(e,r){var n=Sr(e),a=me-Sr(r.s)-n,o=s(Kv,me,r.s,e);return a<0?{C:t(L,dn(o),r.C),o:r.o+1,s:s(ef,a,n,e)}:a?{C:r.C,o:r.o,s:o}:{C:t(L,dn(o),r.C),o:r.o+1,s:sn}}),Fl=$(function(e,r){r.a,r.c;var n=r.d,a=Sr(e),o=me-Sr(n)-a,i=s(Kv,me,n,e),c=t(ui,i,r);if(o<0){var l=s(ef,o,a,e);return t(ui,l,c)}else return c}),Bn=hf,Z2=function(e){var r=e.a,n=e.c,a=e.d,o=$(function(i,c){if(i.$)return t(L,i,c);var l=i.a;return s(Bn,o,c,l)});return{C:s(Bn,o,P,n),o:r/me|0,s:a}},K2=$(function(e,r){e.d;var n=r.a,a=r.c,o=r.d;if(q(n,me*4)<1){var i=$(function(c,l){if(c.$){var v=c.a;return t(Fl,v,l)}else{var u=c.a;return s(Bn,i,l,u)}});return t(Fl,o,s(Bn,i,e,a))}else{var i=$(function(l,u){if(l.$){var f=l.a;return t(Bl,f,u)}else{var v=l.a;return s(Bn,i,u,v)}});return t(Ti,!0,t(Bl,o,s(Bn,i,Z2(e),a)))}}),ey=S(function(e,r,n){e:for(;;)if(r.b){var a=r.a,o=r.b,i=be(a,e)?n:t(L,a,n),c=a,l=o,u=i;e=c,r=l,n=u;continue e}else return n}),ry=function(e){if(e.b){var r=e.a,n=e.b,a=s(ey,r,n,P);if(a.b){var o=a.a,i=a.b;return be(o,r)?t(L,r,ve(i)):t(L,r,ve(a))}else return g([r])}else return P},El=$(function(e,r){var n=e,a=r;return a*n}),Vl=S(function(e,r,n){var a=Wr(n),o=Wr(r),i=Wr(e),c=Vr(n),l=Vr(r),u=Vr(e),v=t(El,t(Te,l,c),t(Te,i,o)),f=t(El,t(Te,o,a),t(Te,u,l)),m=t(Te,v,f);return t(gn,$e,m)}),Wl=S(function(e,r,n){var a=t(Ta,r,e),o=t(Ta,r,n);return a===2&&o===2?s(Vl,e,r,n)?0:4:!a&&!o?s(Vl,e,r,n)?1:5:a===2?3:2}),ny=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=i.a,l=i.b,u=s(De,It,c,l),v=E(function(p,d,b,h){e:for(;;)if(b.b){var x=b.a,_=b.b,k={aq:s(Wl,p,d,x),el:d},A=d,I=x,H=_,G=t(L,k,h);p=A,d=I,b=H,h=G;continue e}else{var y={aq:s(Wl,p,d,r),el:d};return ve(t(L,y,h))}});return C(v,u,r,t(L,a,t(L,c,l)),P)}else{var r=e.a,n=e.b,a=n.a;return t(Ta,r,a)===2?g([{aq:4,el:r},{aq:5,el:a}]):g([{aq:5,el:r},{aq:4,el:a}])}else return e.a,P;else return P},ay=function(e){var r=e.a3,n=e.a$,a=t(Q,function(c){return ry(c)},t(L,r,n)),o=s(De,$(function(c,l){var u=l.a,v=l.b,f=sr(c),m=t(Su,f,function(p){return p?be(p,f-1)?{ap:u,as:u,D:u+p-1,ai:u+p}:{ap:u+p+1,as:u+p+1,D:u+p-1,ai:u+p}:{ap:u+1,as:u+1,D:u+f-1,ai:u}});return w(u+f,t(K2,v,m))}),w(0,ki),a).b,i=Ee(t(Q,ny,a));return{R:o,al:i}},ty=function(e){var r=$(function(u,v){var f=u.a,m=u.b,p=m.aq;switch(p){case 0:return t(Y2,f,v);case 1:return t(H2,f,v);case 3:return s(X2,f,m.el,v);case 2:return t(q2,f,v);case 4:return s(Q2,f,m.el,v);default:return s(U2,f,m.el,v)}}),n=ay(e),a=n.al,o=n.R,i={bg:E2,R:o,bl:ro,al:ka(a)},c=t(Xv,$(function(u,v){var f=u.b,m=v.b;return t(Ta,m.el,f.el)}),t(xi,ao,a)),l=s(De,r,i,c);return ka(a),F2(l)},oy=function(e){var r=ty(e),n=r.a,a=r.b;return t(ic,n,Ee(t(Q,L2,a)))},iy=function(e){return oy(e)},cy=function(e){return t(Q,function(r){var n=r.a,a=r.b,o=r.c;return T(t(jo,ln,n),t(jo,ln,a),t(jo,ln,o))},lv(iy(w2(t(Q,function(r){return t(m2,r.gl,r.gp)},e)))))},ly=$(function(e,r){var n=t($n,e,vo),a=2,o=function(v){var f=v.gl,m=v.gp;return s(Ne,f,m,a)},i=function(v){var f=v.a,m=v.b;return He(g([t(mt,n,T(o(f),o(m),t(Do,T(0,0,-a),o(f)))),t(mt,n,T(t(Do,T(0,0,-a),o(f)),o(m),t(Do,T(0,0,-a),o(m))))]))},c=function(v){return He(t(Q,i,Ii(v.ej)))},l=function(v){return He(t(Q,function(f){var m=f.a,p=f.b,d=f.c;return t(mt,n,T(o(m),o(p),o(d)))},cy(v.ej)))},u=function(v){return He(g([l(v),c(v)]))};return He(t(Q,u,Fa(r.k).fO))}),rf=function(e){return e},uy=function(e){return rf(1.2*t(Xr,2,e))},Ao=io({gl:.37208,gp:.37529}),$y=$(function(e,r){return{$:2,a:e,b:r}}),nf=function(e){return{$:0,a:e}},it=function(e){var r=e;return r},vy=function(e){var r=e;return r.eV},af=nf($a.a),fy=$(function(e,r){var n=$(function(a,o){var i=o.a,c=o.b;return e(a)?w(t(L,a,i),c):w(i,t(L,a,c))});return s(Ir,n,w(P,P),r)}),sy=function(e){var r=e;return gr({dP:r.gl,dQ:r.b5,dR:0,dS:0,dT:r.gp,dU:r.bQ,dV:0,dW:0,dX:r.dg,dY:r.bI,dZ:0,d_:0,d$:r.c8,d0:r.cW,d1:0,d2:0})},dy=oe(function(e,r,n,a,o,i,c,l){var u=t(fy,vy,g([it(e),it(r),it(n),it(a)])),v=u.a,f=u.b;if(v.b){var m=le(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var p=m.a,d=m.b,b=d.a,h=d.b,y=h.a,x=h.b,_=x.a;return t($y,t(Q,sy,v),{bn:t(Ze,p,b),bV:t(Ze,y,_),bW:t(Ze,o,i),bX:t(Ze,c,l)})}else return af}else return nf({bn:t(Ze,e,r),bV:t(Ze,n,a),bW:t(Ze,o,i),bX:t(Ze,c,l)})}),my=E(function(e,r,n,a){return Wt(dy,e,r,n,a,Ue,Ue,Ue,Ue)}),py={$:5},gy=py,by=io({gl:.44757,gp:.40745}),hy=function(e){return e},Rl=function(e){return e},Bo=function(e){return e},_y={$:1},yy=_y,wy=$(function(e,r){var n=e,a=Ga(r.el),o=a.gl,i=a.gp,c=a.dg,l=t(co,r.bS,r.aQ),u=l;return{bI:Cn(u),eV:n,bQ:xn(u),cW:0,b5:Pn(u),c8:2,gl:o,gp:i,dg:c}}),Nl=function(e){return t(wy,Fv(!0),{aQ:e.aQ,bS:e.bS,el:Ri(e.el)})},Fo=function(e){return e/255},Gl=S(function(e,r,n){return C(zr,Fo(e),Fo(r),Fo(n),1)}),Hl=function(e){var r=e;return r},Sy=function(e){e:for(;;){if(be(e.dD,$e)&&be(e.dE,$e))return Ue;if(t(gn,Me(e.dD),Me(e.dE))){var r={aQ:e.aQ,dD:e.dE,dE:e.dD,eF:Tt(e.eF)};e=r;continue e}else{var n=K(Hl(e.dE)/Er),a=K(Hl(e.dD)/Er),o=nr(e.eF),i=o.gl,c=o.gp,l=o.dg,u=t(co,av(1),e.aQ),v=u;return{bI:a*Cn(v),eV:!1,bQ:a*xn(v),cW:n/a,b5:a*Pn(v),c8:3,gl:i,gp:c,dg:l}}}},Py=function(e){return Sy({aQ:e.aQ,dD:e.dD,dE:e.dE,eF:t(bc,ar(e.bH),ar(e.bO))})},xy=function(e){return t(U$,{eM:e.eM,eQ:e.eQ,an:e.an,$7:e.$7,aS:e.aS},g([{aX:e.aX,fc:e.fc,fz:e.fz,f9:e.f9,gi:e.gi}]))},Cy=io({gl:.31271,gp:.32902}),zy=function(e){return Me(e)},ky={$:0},Ly=ky,Ty=function(e){return xy({eM:X$(e.bf),eQ:e.eQ,an:e.an,$7:e.$7,aS:e.aS,aX:e.aX,fc:zy(rf(80)),fz:af,f9:Ly,gi:Cy})},My=$(function(e,r){return Ty({eQ:T$(e.eQ),an:e.an,$7:ze(e.$7),bf:e.bf,aS:w(Dt(Ye(e.a4.gj)),Dt(Ye(e.a4.fl))),aX:Bv(r)})}),Dy=$(function(e,r){var n=B_({bH:0,aQ:Ph(hy(2e3)),bO:Gr(90),bS:Bo(240)}),a=Nl({aQ:Ao,bS:Rl(6e3),el:{gl:2,gp:3,dg:3}}),o=Py({bH:0,aQ:Ao,bO:Gr(90),dD:Bo(30),dE:Bo(30)}),i=Nl({aQ:by,bS:Rl(6e3),el:{gl:-2,gp:4,dg:3}}),c=t(ea,"unlit",e)?My({eQ:s(Gl,46,46,46),an:r.an,$7:.1,bf:e.bf,a4:e.a4}):j_({eM:yy,eR:s(Gl,46,46,46),an:r.an,$7:.1,bf:e.bf,fc:uy(6),fz:C(my,i,a,n,o),a4:e.a4,f9:gy,gi:Ao});return c(g([i2(e),t(u2,e,r),t(v2,e,r),t(ly,e,r),t(f2,e,r),t(d2,e,r)]))}),jy=$(function(e,r){return t(Dy,e,r)}),Ay=function(e){return{$:0,a:e}},By={$:8},Dr=$(function(e,r){return t(Qt,g([W("m-1 p-2 rounded bg-black40 hover:bg-black80"),Yt(e)]),g([we(r)]))}),Fy=mr("pre"),Ey=function(e){return t(Fy,g([W("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text")]),g([we(e.l.cp)]))},Vy=$(function(e,r){return t(V,P,g([t(Dr,By,"Export Levels"),Ey(r)]))}),Wy={$:9},Ry=function(e){return{$:10,a:e}},Ny=function(e){return t(hn,"cols",xe(e))},Gy=function(e){return t(hn,"rows",xe(e))},Hy=mr("textarea"),Iy=function(e){return t(Hy,g([W("w-60 m-2 p-2 h-28 overflow-y-scroll bg-black40 select-text"),Gy(150),Ny(10),Zt(Ry),Kt(e.l.cq)]),g([we("todo")]))},qy=$(function(e,r){return t(V,P,g([t(Dr,Wy,"Import Levels"),Iy(r)]))}),Oy={$:5},Jy={$:7},Uy={$:4},Xy={$:3},Qy={$:6},Yy=function(e){var r=e;return r.n},Zy=function(e){return sr(Yy(e))+1},Ky=mr("p"),ew=function(e){var r=e;return 1+sr(r.n)+sr(r.E)},rw=mr("span"),nw=function(e){return t(V,P,g([t(V,g([W("text-lg")]),g([we("Level Selection")])),t(Ky,P,g([t(Dr,Xy,"<"),t(rw,g([t(Pe,"margin","10px")]),g([we(M$(g([xe(Zy(e.k))," / ",xe(ew(e.k))])))])),t(Dr,Uy,">")])),t(Dr,Oy,"Add level"),t(Dr,Qy,"Remove current level"),t(Dr,Jy,"Move level one up")]))},aw=function(e){return{$:2,a:e}},tw={$:1},ow=$(function(e,r){return t(V,P,g([t(V,g([W("h-40")]),g([t(V,g([W("text-lg")]),g([we("Polygon editor")])),function(){var n=r.l.aJ;if(n.$===1){var a=n.a;return t(V,g([W("p-2")]),g([t(V,P,g([we("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ")])),t(V,P,g([we("After you are finished drawing, click the button below.")])),t(Dr,aw(a),"Finish drawing polygon")]))}else return t(Dr,tw,"Start drawing a polygon")}()]))]))}),iw=$(function(e,r){return r.l.co?t(V,P,g([t(V,g([W("p-4")]),g([t(ow,e,r)])),t(V,g([W("p-4 border-[0.5px] border-white20")]),g([nw(r)])),t(V,g([W("p-4 border-[0.5px] border-white20")]),g([t(Vy,e,r)])),t(V,g([W("p-4 border-[0.5px] border-white20")]),g([t(qy,e,r)]))])):t(V,P,P)}),cw=S(function(e,r,n){return t(V,P,g([t(Pa,g([W("align-bottom"),xa("checkbox"),Sa(n),kt(n),e$(e),Xu(r)]),P),t(zt,g([W("pl-2 font-bold"),xt(n)]),g([we(n)]))]))}),lw=$(function(e,r){return t(V,g([W("fixed w-[300px] h-full top-0 right-0"),W("bg-black20"),W("border-[0.5px] border-white20"),W("overflow-y-scroll"),W("text-xs text-white60")]),g([t(V,g([W("m-4")]),g([s(cw,Ay,r.l.co,"Editor")])),t(iw,e,r)]))}),uw=Ge(Ug,jy,Eb,z0,y0,lw,wh);const $w={Main:{init:uw(t(B,function(e){return ge({fs:e})},t(j,"inputs",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return ge({eY:c,bf:i,ds:o,dI:a,ei:n,a4:r,gh:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return ge({eL:m,e_:f,dr:v,e7:u,fw:l,fP:c,fU:i,ew:o,eE:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",$r(wa)))},t(j,"left",ee))},t(j,"pressedKeys",$r(wa)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return ge({dr:v,ft:u,fC:l,fV:c,fW:i,eE:o,gl:a,gp:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return ge({fl:n,gj:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return ge({e1:r,e2:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne)))))))(0)}},N={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},vw=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),o=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function f(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function m(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(N.keyboard.downs.push(d.code),N.keyboard.pressedKeys.push(d.code),r(d)&&(N.keyboard.control=!0),n(d)&&(N.keyboard.alt=!0),a(d)&&(N.keyboard.shift=!0),o(d)&&(N.keyboard.left=!0),i(d)&&(N.keyboard.right=!0),c(d)&&(N.keyboard.up=!0),l(d)&&(N.keyboard.down=!0))}),window.addEventListener("keyup",d=>{N.keyboard.pressedKeys=N.keyboard.pressedKeys.filter(b=>b!=d.code),r(d)&&(N.keyboard.control=!1,N.keyboard.pressedKeys=[]),n(d)&&(N.keyboard.alt=!1),a(d)&&(N.keyboard.shift=!1),o(d)&&(N.keyboard.left=!1),i(d)&&(N.keyboard.right=!1),c(d)&&(N.keyboard.up=!1),l(d)&&(N.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{N.pointer.x=-.5*N.screen.width+d.pageX,N.pointer.y=.5*N.screen.height-d.pageY,u(d)&&(N.pointer.down=!0,N.pointer.isDown=!0),v(d)&&(N.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{N.pointer.move=!0,N.pointer.x=-.5*N.screen.width+d.pageX,N.pointer.y=.5*N.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(N.pointer.up=!0,N.pointer.isDown=!1),v(d)&&(N.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(N.pointer.up=!0,N.pointer.isDown=!1),v(d)&&(N.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{N.wheel.deltaX=d.deltaX,N.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{f(N)}),window.addEventListener("focus",d=>{f(N)}),window.addEventListener("visibilitychange",d=>{f(N)}),window.addEventListener("resize",()=>{N.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(d){const b=d/1e3,h=b-N.clock;h<.009||(N.dt=h,N.clock=b,e.ports.tick.send(N),m(N)),window.requestAnimationFrame(p)}},fw=()=>{Eo("pointerdown"),Eo("wheel"),Eo("keydown")},Eo=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},sw=$w.Main.init({node:document.querySelector("#app div"),flags:{inputs:N}});fw();vw(sw);
