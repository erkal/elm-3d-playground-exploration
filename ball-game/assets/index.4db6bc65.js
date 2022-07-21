const ws=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};ws();function an(e,r,n){return n.a=e,n.f=r,n}function $(e){return an(2,e,function(r){return function(n){return e(r,n)}})}function x(e){return an(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return an(4,e,function(r){return function(n){return function(a){return function(o){return e(r,n,a,o)}}}})}function ye(e){return an(5,e,function(r){return function(n){return function(a){return function(o){return function(i){return e(r,n,a,o,i)}}}}})}function lr(e){return an(6,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return e(r,n,a,o,i,c)}}}}}})}function Gt(e){return an(7,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return e(r,n,a,o,i,c,l)}}}}}}})}function ie(e){return an(8,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,o,i,c,l,u)}}}}}}}})}function wi(e){return an(9,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,o,i,c,l,u,v)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function f(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function S(e,r,n,a,o){return e.a===4?e.f(r,n,a,o):e(r)(n)(a)(o)}function L(e,r,n,a,o,i){return e.a===5?e.f(r,n,a,o,i):e(r)(n)(a)(o)(i)}function Ge(e,r,n,a,o,i,c){return e.a===6?e.f(r,n,a,o,i,c):e(r)(n)(a)(o)(i)(c)}function xi(e,r,n,a,o,i,c,l){return e.a===7?e.f(r,n,a,o,i,c,l):e(r)(n)(a)(o)(i)(c)(l)}function Ht(e,r,n,a,o,i,c,l,u){return e.a===8?e.f(r,n,a,o,i,c,l,u):e(r)(n)(a)(o)(i)(c)(l)(u)}function xs(e,r,n,a,o,i,c,l,u,v){return e.a===9?e.f(r,n,a,o,i,c,l,u,v):e(r)(n)(a)(o)(i)(c)(l)(u)(v)}var Cs=[];function Ps(e){return[e]}function Ss(e){return e.length}var Ls=x(function(e,r,n){for(var a=new Array(e),o=0;o<e;o++)a[o]=n(r+o);return a}),ks=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),zs=$(function(e,r){return r[e]}),Ts=x(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=n[i];return o[e]=r,o}),Ms=$(function(e,r){for(var n=r.length,a=new Array(n+1),o=0;o<n;o++)a[o]=r[o];return a[n]=e,a}),Ds=x(function(e,r,n){for(var a=n.length,o=0;o<a;o++)r=t(e,n[o],r);return r}),js=x(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r}),As=$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=e(r[o]);return a});x(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=t(e,r+i,n[i]);return o});var Bs=x(function(e,r,n){return n.slice(e,r)}),Fs=x(function(e,r,n){var a=r.length,o=e-a;o>n.length&&(o=n.length);for(var i=a+o,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<o;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Vs()),r});function Vs(e){return"<internals>"}function ea(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function fe(e,r){for(var n,a=[],o=Go(e,r,0,a);o&&(n=a.pop());o=Go(n.a,n.b,0,a));return o}function Go(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ea(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$<0&&(e=nl(e),r=nl(r));for(var o in e)if(!Go(e[o],r[o],n+1,a))return!1;return!0}$(fe);var Es=$(function(e,r){return!fe(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Ws=$(function(e,r){var n=I(e,r);return n<0?Du:n?qm:Mu}),Fa=0;function w(e,r){return{a:e,b:r}}function T(e,r,n){return{a:e,b:r,c:n}}function V(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Cr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Cr(e.a,r);return n}var C={$:0};function Cr(e,r){return{$:1,a:e,b:r}}var qs=$(Cr);function g(e){for(var r=C,n=e.length;n--;)r=Cr(e[n],r);return r}function It(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Rs=x(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return g(a)});E(function(e,r,n,a){for(var o=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)o.push(f(e,r.a,n.a,a.a));return g(o)});ye(function(e,r,n,a,o){for(var i=[];r.b&&n.b&&a.b&&o.b;r=r.b,n=n.b,a=a.b,o=o.b)i.push(S(e,r.a,n.a,a.a,o.a));return g(i)});lr(function(e,r,n,a,o,i){for(var c=[];r.b&&n.b&&a.b&&o.b&&i.b;r=r.b,n=n.b,a=a.b,o=o.b,i=i.b)c.push(L(e,r.a,n.a,a.a,o.a,i.a));return g(c)});var Ns=$(function(e,r){return g(It(r).sort(function(n,a){return I(e(n),e(a))}))}),Gs=$(function(e,r){return g(It(r).sort(function(n,a){var o=t(e,n,a);return o===Mu?0:o===Du?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Hs=$(Math.pow);$(function(e,r){return r%e});var Is=$(function(e,r){var n=r%e;return e===0?ea(11):n>0&&e<0||n<0&&e>0?n+e:n}),Us=Math.PI,Js=Math.cos,Os=Math.sin,Xs=Math.tan,Ys=Math.acos,Zs=Math.atan,Qs=$(Math.atan2);function Ks(e){return e}function ef(e){return e===1/0||e===-1/0}var rf=Math.ceil,nf=Math.floor,af=Math.round,tf=Math.sqrt,Nc=Math.log,of=isNaN;function cf(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var lf=$(function(e,r){return e+r});function uf(e){var r=e.charCodeAt(0);return isNaN(r)?W:Z(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}$(function(e,r){return e+r});function $f(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;){var i=r.charCodeAt(o);if(55296<=i&&i<=56319){a[o]=e(r[o]+r[o+1]),o+=2;continue}a[o]=e(r[o]),o++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,o=0;o<a;){var i=r[o],c=r.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=r[o],o++),e(i)&&n.push(i)}return n.join("")});function vf(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var o=e.charCodeAt(a);55296<=o&&o<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}x(function(e,r,n){for(var a=n.length,o=0;o<a;){var i=n[o],c=n.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=n[o],o++),r=t(e,i,r)}return r});var sf=x(function(e,r,n){for(var a=n.length;a--;){var o=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,o=n[a]+o),r=t(e,o,r)}return r}),ff=$(function(e,r){return r.split(e)}),df=$(function(e,r){return r.join(e)}),mf=x(function(e,r,n){return n.slice(e,r)});function gf(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var pf=$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),bf=$(function(e,r){return r.indexOf(e)>-1}),hf=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var _f=$(function(e,r){var n=e.length;if(n<1)return C;for(var a=0,o=[];(a=r.indexOf(e,a))>-1;)o.push(a),a=a+n;return g(o)});function iu(e){return e+""}function yf(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,o=a;o<e.length;++o){var i=e.charCodeAt(o);if(i<48||57<i)return W;r=10*r+i-48}return o==a?W:Z(n==45?-r:r)}function wf(e){if(e.length===0||/[\sxbo]/.test(e))return W;var r=+e;return r===r?Z(r):W}function xf(e){return It(e).join("")}function Cf(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Pf(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Sf(e){return{$:0,a:e}}function Lf(e){return{$:1,a:e}}function Ut(e){return{$:2,b:e}}var kf=Ut(function(e){return typeof e!="number"?or("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?de(e):or("an INT",e)}),zf=Ut(function(e){return typeof e=="boolean"?de(e):or("a BOOL",e)}),Tf=Ut(function(e){return typeof e=="number"?de(e):or("a FLOAT",e)}),Mf=Ut(function(e){return typeof e=="string"?de(e):e instanceof String?de(e+""):or("a STRING",e)});function Df(e){return{$:3,b:e}}function jf(e){return{$:5,c:e}}var Af=$(function(e,r){return{$:6,d:e,b:r}}),Bf=$(function(e,r){return{$:7,e,b:r}});function tn(e,r){return{$:9,f:e,g:r}}var Ff=$(function(e,r){return{$:10,b:r,h:e}});function Vf(e){return{$:11,g:e}}var Ef=$(function(e,r){return tn(e,[r])}),Wf=x(function(e,r,n){return tn(e,[r,n])});E(function(e,r,n,a){return tn(e,[r,n,a])});ye(function(e,r,n,a,o){return tn(e,[r,n,a,o])});lr(function(e,r,n,a,o,i){return tn(e,[r,n,a,o,i])});Gt(function(e,r,n,a,o,i,c){return tn(e,[r,n,a,o,i,c])});ie(function(e,r,n,a,o,i,c,l){return tn(e,[r,n,a,o,i,c,l])});wi(function(e,r,n,a,o,i,c,l,u){return tn(e,[r,n,a,o,i,c,l,u])});var qf=$(function(e,r){try{var n=JSON.parse(r);return tr(e,n)}catch(a){return Fe(t(Bi,"This is not valid JSON! "+a.message,r))}}),cu=$(function(e,r){return tr(e,r)});function tr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?de(e.c):or("null",r);case 3:return Ka(r)?Gc(e.b,r,g):or("a LIST",r);case 4:return Ka(r)?Gc(e.b,r,Rf):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var v=tr(e.b,r[n]);return ur(v)?v:Fe(t(al,n,v.a));case 7:var a=e.e;if(!Ka(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=tr(e.b,r[a]);return ur(v)?v:Fe(t(ju,a,v.a));case 8:if(typeof r!="object"||r===null||Ka(r))return or("an OBJECT",r);var o=C;for(var i in r)if(r.hasOwnProperty(i)){var v=tr(e.b,r[i]);if(!ur(v))return Fe(t(al,i,v.a));o=Cr(w(i,v.a),o)}return de(ce(o));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=tr(l[u],r);if(!ur(v))return v;c=c(v.a)}return de(c);case 10:var v=tr(e.b,r);return ur(v)?tr(e.h(v.a),r):v;case 11:for(var s=C,m=e.g;m.b;m=m.b){var v=tr(m.a,r);if(ur(v))return v;s=Cr(v.a,s)}return Fe(Rm(ce(s)));case 1:return Fe(t(Bi,e.a,r));case 0:return de(e.a)}}function Gc(e,r,n){for(var a=r.length,o=new Array(a),i=0;i<a;i++){var c=tr(e,r[i]);if(!ur(c))return Fe(t(ju,i,c.a));o[i]=c.a}return de(n(o))}function Ka(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Rf(e){return t(Wu,e.length,function(r){return e[r]})}function or(e,r){return Fe(t(Bi,"Expecting "+e,r))}function En(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return En(e.b,r.b);case 6:return e.d===r.d&&En(e.b,r.b);case 7:return e.e===r.e&&En(e.b,r.b);case 9:return e.f===r.f&&Hc(e.g,r.g);case 10:return e.h===r.h&&En(e.b,r.b);case 11:return Hc(e.g,r.g)}}function Hc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!En(e[a],r[a]))return!1;return!0}var Nf=$(function(e,r){return JSON.stringify(r,null,e)+""});function Jt(e){return e}function Gf(){return[]}function Hf(){return{}}var If=x(function(e,r,n){return n[e]=r,n});function Uf(e){return $(function(r,n){return n.push(e(r)),n})}var Jf=null;function Cn(e){return{$:0,a:e}}function Of(e){return{$:1,a:e}}function Jr(e){return{$:2,b:e,c:null}}var Ho=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Xf(e){return{$:5,b:e}}var Yf=0;function Ci(e){var r={$:0,e:Yf++,f:e,g:null,h:[]};return Pi(r),r}function lu(e){return Jr(function(r){r(Cn(Ci(e)))})}function uu(e,r){e.h.push(r),Pi(e)}var Zf=$(function(e,r){return Jr(function(n){uu(e,r),n(Cn(Fa))})}),ho=!1,Ic=[];function Pi(e){if(Ic.push(e),!ho){for(ho=!0;e=Ic.shift();)Qf(e);ho=!1}}function Qf(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Pi(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Si(r,a,e.fu,e.gi,e.f9,function(){return function(){}})});function Si(e,r,n,a,o,i){var c=t(cu,e,r?r.flags:void 0);ur(c)||ea(2);var l={},u=n(c.a),v=u.a,s=i(p,v),m=Kf(l,p);function p(d,b){var h=t(a,d,v);s(v=h.a,b),Jc(l,h.b,o(v))}return Jc(l,u.b,o(v)),m?{ports:m}:{}}var _r={};function Kf(e,r){var n;for(var a in _r){var o=_r[a];o.a&&(n=n||{},n[a]=o.a(a,r)),e[a]=rd(o,r)}return n}function ed(e,r,n,a,o){return{b:e,c:r,d:n,e:a,f:o}}function rd(e,r){var n={g:r,h:void 0},a=e.c,o=e.d,i=e.e,c=e.f;function l(u){return t(Ho,l,Xf(function(v){var s=v.a;return v.$===0?f(o,n,s,u):i&&c?S(a,n,s.i,s.j,u):f(a,n,i?s.i:s.j,u)}))}return n.h=Ci(t(Ho,l,e.b))}var nd=$(function(e,r){return Jr(function(n){e.g(r),n(Cn(Fa))})});$(function(e,r){return t(Zf,e.h,{$:0,a:r})});function $u(e){return function(r){return{$:1,k:e,l:r}}}function ad(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Uc=[],_o=!1;function Jc(e,r,n){if(Uc.push({p:e,q:r,r:n}),!_o){_o=!0;for(var a;a=Uc.shift();)td(a.p,a.q,a.r);_o=!1}}function td(e,r,n){var a={};xt(!0,r,a,null),xt(!1,n,a,null);for(var o in e)uu(e[o],{$:"fx",a:a[o]||{i:C,j:C}})}function xt(e,r,n,a){switch(r.$){case 1:var o=r.k,i=od(e,o,a,r.l);n[o]=id(e,i,n[o]);return;case 2:for(var c=r.m;c.b;c=c.b)xt(e,c.a,n,a);return;case 3:xt(e,r.o,n,{s:r.n,t:a});return}}function od(e,r,n,a){function o(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?_r[r].e:_r[r].f;return t(i,o,a)}function id(e,r,n){return n=n||{i:C,j:C},e?n.i=Cr(r,n.i):n.j=Cr(r,n.j),n}function cd(e){_r[e]&&ea(3)}$(function(e,r){return r});function ld(e,r){return cd(e),_r[e]={f:ud,u:r,a:$d},$u(e)}var ud=$(function(e,r){return function(n){return e(r(n))}});function $d(e,r){var n=C,a=_r[e].u,o=Cn(null);_r[e].b=o,_r[e].c=x(function(c,l,u){return n=l,o});function i(c){var l=t(cu,a,c);ur(l)||ea(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var Ct,Vr=typeof document!="undefined"?document:{};function Li(e,r){e.appendChild(r)}E(function(e,r,n,a){var o=a.node;return o.parentNode.replaceChild(Kr(e,function(){}),o),{}});function Io(e){return{$:0,a:e}}var vu=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,o.push(c)}return i+=o.length,{$:1,c:r,d:ki(n),e:o,f:e,b:i}})}),Or=vu(void 0),vd=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,o.push(c)}return i+=o.length,{$:2,c:r,d:ki(n),e:o,f:e,b:i}})}),sd=vd(void 0);function fd(e,r,n,a){return{$:3,d:ki(e),g:r,h:n,i:a}}var dd=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function on(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return on([e,r],function(){return e(r)})});x(function(e,r,n){return on([e,r,n],function(){return t(e,r,n)})});E(function(e,r,n,a){return on([e,r,n,a],function(){return f(e,r,n,a)})});ye(function(e,r,n,a,o){return on([e,r,n,a,o],function(){return S(e,r,n,a,o)})});lr(function(e,r,n,a,o,i){return on([e,r,n,a,o,i],function(){return L(e,r,n,a,o,i)})});Gt(function(e,r,n,a,o,i,c){return on([e,r,n,a,o,i,c],function(){return Ge(e,r,n,a,o,i,c)})});ie(function(e,r,n,a,o,i,c,l){return on([e,r,n,a,o,i,c,l],function(){return xi(e,r,n,a,o,i,c,l)})});wi(function(e,r,n,a,o,i,c,l,u){return on([e,r,n,a,o,i,c,l,u],function(){return Ht(e,r,n,a,o,i,c,l,u)})});var su=$(function(e,r){return{$:"a0",n:e,o:r}}),md=$(function(e,r){return{$:"a1",n:e,o:r}}),fu=$(function(e,r){return{$:"a2",n:e,o:r}}),Tr=$(function(e,r){return{$:"a3",n:e,o:r}}),gd=x(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function pd(e){return e=="script"?"p":e}function bd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?t(su,r.n,hd(e,r.o)):r});function hd(e,r){var n=Ni(r);return{$:r.$,a:n?f(Zt,n<3?_d:yd,se(e),r.a):t(Sa,e,r.a)}}var _d=$(function(e,r){return w(e(r.a),r.b)}),yd=$(function(e,r){return{as:e(r.as),c4:r.c4,cW:r.cW}});function ki(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,o=n.n,i=n.o;if(a==="a2"){o==="className"?Oc(r,o,i):r[o]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&o==="class"?Oc(c,o,i):c[o]=i}return r}function Oc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Kr(e,r){var n=e.$;if(n===5)return Kr(e.k||(e.k=e.m()),r);if(n===0)return Vr.createTextNode(e.a);if(n===4){for(var a=e.k,o=e.j;a.$===4;)typeof o!="object"?o=[o,a.j]:o.push(a.j),a=a.k;var i={j:o,p:r},c=Kr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Uo(c,r,e.d),c}var c=e.f?Vr.createElementNS(e.f,e.c):Vr.createElement(e.c);Ct&&e.c=="a"&&c.addEventListener("click",Ct(c)),Uo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Li(c,Kr(n===1?l[u]:l[u].b,r));return c}function Uo(e,r,n){for(var a in n){var o=n[a];a==="a1"?wd(e,o):a==="a0"?Pd(e,r,o):a==="a3"?xd(e,o):a==="a4"?Cd(e,o):(a!=="value"&&a!=="checked"||e[a]!==o)&&(e[a]=o)}}function wd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function xd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Cd(e,r){for(var n in r){var a=r[n],o=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(o,n,i):e.removeAttributeNS(o,n)}}function Pd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var o in n){var i=n[o],c=a[o];if(!i){e.removeEventListener(o,c),a[o]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(o,c)}c=Sd(r,i),e.addEventListener(o,c,zi&&{passive:Ni(i)<2}),a[o]=c}}var zi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){zi=!0}}))}catch{}function Sd(e,r){function n(a){var o=n.q,i=tr(o.a,a);if(!!ur(i)){for(var c=Ni(o),l=i.a,u=c?c<3?l.a:l.as:l,v=c==1?l.b:c==3&&l.c4,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),e),m,p;m=s.j;){if(typeof m=="function")u=m(u);else for(var p=m.length;p--;)u=m[p](u);s=s.p}s(u,v)}}return n.q=r,n}function Ld(e,r){return e.$==r.$&&En(e.a,r.a)}function du(e,r){var n=[];return $r(e,r,n,0),n}function Be(e,r,n,a){var o={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(o),o}function $r(e,r,n,a){if(e!==r){var o=e.$,i=r.$;if(o!==i)if(o===1&&i===2)r=Bd(r),i=1;else{Be(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];$r(e.k,r.k,s,0),s.length>0&&Be(n,1,a,s);return;case 4:for(var m=e.j,p=r.j,d=!1,b=e.k;b.$===4;)d=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var h=r.k;h.$===4;)d=!0,typeof p!="object"?p=[p,h.j]:p.push(h.j),h=h.k;if(d&&m.length!==p.length){Be(n,0,a,r);return}(d?!kd(m,p):m!==p)&&Be(n,2,a,p),$r(b,h,n,a+1);return;case 0:e.a!==r.a&&Be(n,3,a,r.a);return;case 1:Xc(e,r,n,a,zd);return;case 2:Xc(e,r,n,a,Td);return;case 3:if(e.h!==r.h){Be(n,0,a,r);return}var y=Ti(e.d,r.d);y&&Be(n,4,a,y);var P=r.i(e.g,r.g);P&&Be(n,5,a,P);return}}}function kd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Xc(e,r,n,a,o){if(e.c!==r.c||e.f!==r.f){Be(n,0,a,r);return}var i=Ti(e.d,r.d);i&&Be(n,4,a,i),o(e,r,n,a)}function Ti(e,r,n){var a;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=Ti(e[o],r[o]||{},o);i&&(a=a||{},a[o]=i);continue}if(!(o in r)){a=a||{},a[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var c=e[o],l=r[o];c===l&&o!=="value"&&o!=="checked"||n==="a0"&&Ld(c,l)||(a=a||{},a[o]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function zd(e,r,n,a){var o=e.e,i=r.e,c=o.length,l=i.length;c>l?Be(n,6,a,{v:l,i:c-l}):c<l&&Be(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=o[v];$r(s,i[v],n,++a),a+=s.b||0}}function Td(e,r,n,a){for(var o=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,p=0,d=a;m<v&&p<s;){var b=l[m],h=u[p],y=b.a,P=h.a,_=b.b,k=h.b,A=void 0,H=void 0;if(y===P){d++,$r(_,k,o,d),d+=_.b||0,m++,p++;continue}var G=l[m+1],N=u[p+1];if(G){var U=G.a,J=G.b;H=P===U}if(N){var q=N.a,Q=N.b;A=y===q}if(A&&H){d++,$r(_,Q,o,d),va(i,o,y,k,p,c),d+=_.b||0,d++,sa(i,o,y,J,d),d+=J.b||0,m+=2,p+=2;continue}if(A){d++,va(i,o,P,k,p,c),$r(_,Q,o,d),d+=_.b||0,m+=1,p+=2;continue}if(H){d++,sa(i,o,y,_,d),d+=_.b||0,d++,$r(J,k,o,d),d+=J.b||0,m+=2,p+=1;continue}if(G&&U===q){d++,sa(i,o,y,_,d),va(i,o,P,k,p,c),d+=_.b||0,d++,$r(J,Q,o,d),d+=J.b||0,m+=2,p+=2;continue}break}for(;m<v;){d++;var b=l[m],_=b.b;sa(i,o,b.a,_,d),d+=_.b||0,m++}for(;p<s;){var ae=ae||[],h=u[p];va(i,o,h.a,h.b,void 0,ae),p++}(o.length>0||c.length>0||ae)&&Be(n,8,a,{w:o,x:c,y:ae})}var mu="_elmW6BL";function va(e,r,n,a,o,i){var c=e[n];if(!c){c={c:0,z:a,r:o,s:void 0},i.push({r:o,A:c}),e[n]=c;return}if(c.c===1){i.push({r:o,A:c}),c.c=2;var l=[];$r(c.z,a,l,c.r),c.r=o,c.s.s={w:l,A:c};return}va(e,r,n+mu,a,o,i)}function sa(e,r,n,a,o){var i=e[n];if(!i){var c=Be(r,9,o,void 0);e[n]={c:1,z:a,r:o,s:c};return}if(i.c===0){i.c=2;var l=[];$r(a,i.z,l,o),Be(r,9,o,{w:l,A:i});return}sa(e,r,n+mu,a,o)}function gu(e,r,n,a){fa(e,r,n,0,0,r.b,a)}function fa(e,r,n,a,o,i,c){for(var l=n[a],u=l.r;u===o;){var v=l.$;if(v===1)gu(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fa(e,r,s,0,o,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&fa(e,r,s,0,o,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var d=r.k;d.$===4;)d=d.k;return fa(e,d,n,a,o+1,i,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,y=0;y<b.length;y++){o++;var P=p===1?b[y]:b[y].b,_=o+(P.b||0);if(o<=u&&u<=_&&(a=fa(h[y],P,n,a,o,_,c),!(l=n[a])||(u=l.r)>i))return a;o=_}return a}function pu(e,r,n,a){return n.length===0?e:(gu(e,r,n,a),Pt(e,n))}function Pt(e,r){for(var n=0;n<r.length;n++){var a=r[n],o=a.t,i=Md(o,a);o===e&&(e=i)}return e}function Md(e,r){switch(r.$){case 0:return Dd(e,r.s,r.u);case 4:return Uo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Pt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,o=e.childNodes[a];a<n.length;a++)e.insertBefore(Kr(n[a],r.u),o);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Pt(e,i.w),e;case 8:return jd(e,r);case 5:return r.s(e);default:ea(10)}}function Dd(e,r,n){var a=e.parentNode,o=Kr(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),a&&o!==e&&a.replaceChild(o,e),o}function jd(e,r){var n=r.s,a=Ad(n.y,r);e=Pt(e,n.w);for(var o=n.x,i=0;i<o.length;i++){var c=o[i],l=c.A,u=l.c===2?l.s:Kr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Li(e,a),e}function Ad(e,r){if(!!e){for(var n=Vr.createDocumentFragment(),a=0;a<e.length;a++){var o=e[a],i=o.A;Li(n,i.c===2?i.s:Kr(i.z,r.u))}return n}}function Mi(e){if(e.nodeType===3)return Io(e.textContent);if(e.nodeType!==1)return Io("");for(var r=C,n=e.attributes,a=n.length;a--;){var o=n[a],i=o.name,c=o.value;r=Cr(t(Tr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=C,v=e.childNodes,a=v.length;a--;)u=Cr(Mi(v[a]),u);return f(Or,l,r,u)}function Bd(e){for(var r=e.e,n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Fd=E(function(e,r,n,a){return Si(r,a,e.fu,e.gi,e.f9,function(o,i){var c=e.gl,l=a.node,u=Mi(l);return bu(i,function(v){var s=c(v),m=du(u,s);l=pu(l,u,m,o),u=s})})});E(function(e,r,n,a){return Si(r,a,e.fu,e.gi,e.f9,function(o,i){var c=e.c2&&e.c2(o),l=e.gl,u=Vr.title,v=Vr.body,s=Mi(v);return bu(i,function(m){Ct=c;var p=l(m),d=Or("body")(C)(p.eX),b=du(s,d);v=pu(v,s,b,o),s=d,Ct=0,u!==p.gd&&(Vr.title=u=p.gd)})})});var St=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bu(e,r){r(e);var n=0;function a(){n=n===1?0:(St(a),r(e),1)}return function(o,i){e=o,i?(r(e),n===2&&(n=1)):(n===0&&St(a),n=2)}}$(function(e,r){return t(Ii,Gi,Jr(function(){r&&history.go(r),e()}))});$(function(e,r){return t(Ii,Gi,Jr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return t(Ii,Gi,Jr(function(){history.replaceState({},"",r),e()}))});var Vd={addEventListener:function(){},removeEventListener:function(){}},Ed=typeof window!="undefined"?window:Vd;x(function(e,r,n){return lu(Jr(function(a){function o(i){Ci(n(i))}return e.addEventListener(r,o,zi&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});$(function(e,r){var n=tr(e,r);return ur(n)?Z(n.a):W});function hu(e,r){return Jr(function(n){St(function(){var a=document.getElementById(e);n(a?Cn(r(a)):Of(tg(e)))})})}function Wd(e){return Jr(function(r){St(function(){r(Cn(e()))})})}$(function(e,r){return hu(r,function(n){return n[e](),Fa})});$(function(e,r){return Wd(function(){return Ed.scroll(e,r),Fa})});x(function(e,r,n){return hu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Fa})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var qd=$(function(e,r){var n="g";e.fI&&(n+="m"),e.eY&&(n+="i");try{return Z(new RegExp(r,n))}catch{return W}});$(function(e,r){return r.match(e)!==null});var Rd=x(function(e,r,n){for(var a=[],o=0,i=n,c=r.lastIndex,l=-1,u;o++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?Z(m):W}a.push(S(v$,u[0],u.index,o,g(s))),l=r.lastIndex}return r.lastIndex=c,g(a)});E(function(e,r,n,a){var o=0;function i(c){if(o++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Z(v):W}return n(S(v$,c,arguments[arguments.length-2],o,g(u)))}return a.replace(r,i)});x(function(e,r,n){for(var a=n,o=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;o.push(a.slice(i,l.index)),i=r.lastIndex}return o.push(a.slice(i)),r.lastIndex=c,g(o)});var Yc=0;function Pa(e,r){for(;r.b;r=r.b)e(r.a)}function Di(e){for(var r=0;e.b;e=e.b)r++;return r}var Nd=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Gd=ye(function(e,r,n,a,o){return{$:0,a:e,b:r,c:n,d:a,e:o}}),Hd=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Id=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Ud=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Jd=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Od=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Xd=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Yd=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Zd=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Qd=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Kd=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},em=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},rm=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},_u=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},yu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},nm=function(e){e.gl.disable(e.gl.CULL_FACE)},am=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},tm=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},om=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Zc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],im=[Kd,em,rm,_u,yu,nm,am,tm,om];function Qc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function cm(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function wu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function lm(e,r,n,a){for(var o=n.a.dv,i=[],c=0;c<o;c++)i.push(String.fromCharCode(97+c));function l(d,b,h,y,P){var _;if(o===1)for(_=0;_<b;_++)d[h++]=b===1?y[P]:y[P][_];else i.forEach(function(k){for(_=0;_<b;_++)d[h++]=b===1?y[k][P]:y[k][P][_]})}var u=wu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*o,m=new u.type(Di(n.b)*s);Pa(function(d){l(m,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=s},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),p}function um(e,r){if(r.a.dF>0){var n=e.createBuffer(),a=$m(r.c,r.a.dF);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dv*Di(r.b),indexBuffer:null,buffers:{}}}function $m(e,r){var n=new Uint32Array(Di(e)*r),a=0,o;return Pa(function(i){if(r===1)n[a++]=i;else for(o=0;o<r;o++)n[a++]=i[String.fromCharCode(97+o)]},e),n}function Kc(e,r){return e+"#"+r}var xu=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),_u(n),yu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function o(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Kc(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Yc++,v||(v=Qc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=Yc++,s||(s=Qc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=cm(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=vm(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var d=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(b)}c=Kc(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),sm(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=um(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[d.name]===void 0&&(h.buffers[d.name]=lm(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[d.name]);var y=wu(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var P=y.size*4,_=P*y.arraySize,k=0;k<y.arraySize;k++)a.enableVertexAttribArray(b+k),a.vertexAttribPointer(b+k,y.size,y.baseType,!1,_,P*k)}for(n.toggle=!n.toggle,Pa(K1(n),i.a),u=0;u<Zc.length;u++){var A=n[Zc[u]];A.toggle!==n.toggle&&A.enabled&&(im[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.ee,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ee,0,h.numIndices)}}return Pa(o,e.g),r});function vm(e,r,n,a){var o=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,b){var h=b.name,y=e.getUniformLocation(d,h);switch(b.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(y,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(y,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var P=c++;return function(_){e.activeTexture(e.TEXTURE0+P);var k=l.textures.get(_);k||(k=_.e4(e),l.textures.set(_,k)),e.bindTexture(e.TEXTURE_2D,k),i[h]!==_&&(e.uniform1i(y,P),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var p=e.getActiveUniform(o,m);v[a[p.name]||p.name]=u(o,p)}return v}function sm(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var fm=x(function(e,r,n){return fd(r,{g:n,f:{},h:e},_m,ym)}),dm=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),mm=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),gm=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),pm=$(function(e,r){e.contextAttributes.antialias=!0}),bm=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),hm=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function _m(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Pa(function(o){return t(Q1,r,o)},e.h);var n=Vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(o){o(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Nd(function(){return t(xu,e,n)})):(n=Vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ym(e,r){return r.f=e.f,xu(r)}var wm=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/xm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function xm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ji=new Float64Array(3),el=new Float64Array(3),rl=new Float64Array(3),Cm=x(function(e,r,n){return new Float64Array([e,r,n])}),Pm=function(e){return e[0]},Sm=function(e){return e[1]},Lm=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var km=function(e){return new Float64Array([e.gq,e.gu,e.dg])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Cu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Cu);function Pu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Lt(Cu(e,r,n),n)}$(Pu);function Su(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+a*a+o*o)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return n*n+a*a+o*o});function Lt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Su(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var zm=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),da=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(da);function Jo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Jo);$(function(e,r){var n,a=ji,o=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=da(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],o[0]=(da(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],o[1]=(da(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],o[2]=(da(r,a)+e[14])/n,o});var Tm=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Mm=function(e){return{gq:e[0],gu:e[1],dg:e[2],eN:e[3]}},Dm=function(e){return new Float64Array([e.gq,e.gu,e.dg,e.eN])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/jm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function jm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+o*o+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+o*o+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Am=new Float64Array(16),Bm=new Float64Array(16),Fm=function(e){var r=new Float64Array(16);return r[0]=e.dS,r[1]=e.dW,r[2]=e.d_,r[3]=e.d2,r[4]=e.dT,r[5]=e.dX,r[6]=e.d$,r[7]=e.d3,r[8]=e.dU,r[9]=e.dY,r[10]=e.d0,r[11]=e.d4,r[12]=e.dV,r[13]=e.dZ,r[14]=e.d1,r[15]=e.d5,r},Vm=function(e){return{dS:e[0],dW:e[1],d_:e[2],d2:e[3],dT:e[4],dX:e[5],d$:e[6],d3:e[7],dU:e[8],dY:e[9],d0:e[10],d4:e[11],dV:e[12],dZ:e[13],d1:e[14],d5:e[15]}};function Lu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2*o/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*o/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+o)/(i-o),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*o/(i-o),c[15]=0,c}lr(Lu);E(function(e,r,n,a){var o=n*Math.tan(e*Math.PI/360),i=-o,c=i*r,l=o*r;return Lu(c,l,i,o,n,a)});function ku(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-o),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+o)/(i-o),c[15]=1,c}lr(ku);E(function(e,r,n,a){return ku(e,r,n,a,-1,1)});function zu(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],p=e[9],d=e[10],b=e[11],h=e[12],y=e[13],P=e[14],_=e[15],k=r[0],A=r[1],H=r[2],G=r[3],N=r[4],U=r[5],J=r[6],q=r[7],Q=r[8],ae=r[9],_e=r[10],we=r[11],ge=r[12],Pe=r[13],Oe=r[14],Re=r[15];return n[0]=a*k+l*A+m*H+h*G,n[1]=o*k+u*A+p*H+y*G,n[2]=i*k+v*A+d*H+P*G,n[3]=c*k+s*A+b*H+_*G,n[4]=a*N+l*U+m*J+h*q,n[5]=o*N+u*U+p*J+y*q,n[6]=i*N+v*U+d*J+P*q,n[7]=c*N+s*U+b*J+_*q,n[8]=a*Q+l*ae+m*_e+h*we,n[9]=o*Q+u*ae+p*_e+y*we,n[10]=i*Q+v*ae+d*_e+P*we,n[11]=c*Q+s*ae+b*_e+_*we,n[12]=a*ge+l*Pe+m*Oe+h*Re,n[13]=o*ge+u*Pe+p*Oe+y*Re,n[14]=i*ge+v*Pe+d*Oe+P*Re,n[15]=c*ge+s*Pe+b*Oe+_*Re,n}$(zu);$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],p=e[12],d=e[13],b=e[14],h=r[0],y=r[1],P=r[2],_=r[4],k=r[5],A=r[6],H=r[8],G=r[9],N=r[10],U=r[12],J=r[13],q=r[14];return n[0]=a*h+c*y+v*P,n[1]=o*h+l*y+s*P,n[2]=i*h+u*y+m*P,n[3]=0,n[4]=a*_+c*k+v*A,n[5]=o*_+l*k+s*A,n[6]=i*_+u*k+m*A,n[7]=0,n[8]=a*H+c*G+v*N,n[9]=o*H+l*G+s*N,n[10]=i*H+u*G+m*N,n[11]=0,n[12]=a*U+c*J+v*q+p,n[13]=o*U+l*J+s*q+d,n[14]=i*U+u*J+m*q+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Lt(r,ji);var a=r[0],o=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=o*a*l+i*u,n[2]=i*a*l-o*u,n[3]=0,n[4]=a*o*l-i*u,n[5]=o*o*l+c,n[6]=o*i*l+a*u,n[7]=0,n[8]=a*i*l+o*u,n[9]=o*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});x(function(e,r,n){var a=new Float64Array(16),o=1/Su(r),i=r[0]*o,c=r[1]*o,l=r[2]*o,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,p=c*s,d=l*s,b=i*c*v,h=i*l*v,y=c*l*v,P=i*i*v+u,_=b+d,k=h-p,A=b-d,H=c*c*v+u,G=y+m,N=h+p,U=y-m,J=l*l*v+u,q=n[0],Q=n[1],ae=n[2],_e=n[3],we=n[4],ge=n[5],Pe=n[6],Oe=n[7],Re=n[8],Zr=n[9],Qr=n[10],bo=n[11],bs=n[12],hs=n[13],_s=n[14],ys=n[15];return a[0]=q*P+we*_+Re*k,a[1]=Q*P+ge*_+Zr*k,a[2]=ae*P+Pe*_+Qr*k,a[3]=_e*P+Oe*_+bo*k,a[4]=q*A+we*H+Re*G,a[5]=Q*A+ge*H+Zr*G,a[6]=ae*A+Pe*H+Qr*G,a[7]=_e*A+Oe*H+bo*G,a[8]=q*N+we*U+Re*J,a[9]=Q*N+ge*U+Zr*J,a[10]=ae*N+Pe*U+Qr*J,a[11]=_e*N+Oe*U+bo*J,a[12]=bs,a[13]=hs,a[14]=_s,a[15]=ys,a});function Em(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}x(Em);E(function(e,r,n,a){var o=new Float64Array(16);return o[0]=a[0]*e,o[1]=a[1]*e,o[2]=a[2]*e,o[3]=a[3]*e,o[4]=a[4]*r,o[5]=a[5]*r,o[6]=a[6]*r,o[7]=a[7]*r,o[8]=a[8]*n,o[9]=a[9]*n,o[10]=a[10]*n,o[11]=a[11]*n,o[12]=a[12],o[13]=a[13],o[14]=a[14],o[15]=a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Wm(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}x(Wm);E(function(e,r,n,a){var o=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],p=a[7],d=a[8],b=a[9],h=a[10],y=a[11];return o[0]=i,o[1]=c,o[2]=l,o[3]=u,o[4]=v,o[5]=s,o[6]=m,o[7]=p,o[8]=d,o[9]=b,o[10]=h,o[11]=y,o[12]=i*e+v*r+d*n+a[12],o[13]=c*e+s*r+b*n+a[13],o[14]=l*e+m*r+h*n+a[14],o[15]=u*e+p*r+y*n+a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],p=r[6],d=r[7],b=r[8],h=r[9],y=r[10],P=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=p,n[7]=d,n[8]=b,n[9]=h,n[10]=y,n[11]=P,n[12]=c*a+s*o+b*i+r[12],n[13]=l*a+m*o+h*i+r[13],n[14]=u*a+p*o+y*i+r[14],n[15]=v*a+d*o+P*i+r[15],n});x(function(e,r,n){var a=Pu(e,r,ji),o=Lt(Jo(n,a,el),el),i=Lt(Jo(a,o,rl),rl),c=Am,l=Bm;return c[0]=o[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=o[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=o[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,zu(c,l)});x(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var z=qs,et=js,Tu=x(function(e,r,n){var a=n.c,o=n.d,i=$(function(c,l){if(c.$){var v=c.a;return f(et,e,l,v)}else{var u=c.a;return f(et,i,l,u)}});return f(et,i,f(et,e,r,o),a)}),Ai=x(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,o=n.c,i=n.d,c=n.e,l=e,u=f(e,a,o,f(Ai,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),nl=function(e){return f(Ai,x(function(r,n,a){return t(z,w(r,n),a)}),C,e)},Mu=1,qm=2,Du=0,Fe=function(e){return{$:1,a:e}},Bi=$(function(e,r){return{$:3,a:e,b:r}}),al=$(function(e,r){return{$:0,a:e,b:r}}),ju=$(function(e,r){return{$:1,a:e,b:r}}),de=function(e){return{$:0,a:e}},Rm=function(e){return{$:2,a:e}},Z=function(e){return{$:0,a:e}},W={$:1},Nm=pf,Au=Nf,Ve=iu,ln=$(function(e,r){return t(df,e,It(r))}),Fi=$(function(e,r){return g(t(ff,e,r))}),Bu=function(e){return t(ln,`
    `,t(Fi,`
`,e))},Ae=x(function(e,r,n){e:for(;;)if(n.b){var a=n.a,o=n.b,i=e,c=t(e,a,r),l=o;e=i,r=c,n=l;continue e}else return r}),Pr=function(e){return f(Ae,$(function(r,n){return n+1}),0,e)},Ot=Rs,Gm=x(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,o=r-1,i=t(z,r,n);e=a,r=o,n=i;continue e}else return n}),bn=$(function(e,r){return f(Gm,e,r,C)}),Xt=$(function(e,r){return f(Ot,e,t(bn,0,Pr(r)-1),r)}),yr=Cf,Fu=function(e){var r=yr(e);return 97<=r&&r<=122},Vu=function(e){var r=yr(e);return r<=90&&65<=r},Hm=function(e){return Fu(e)||Vu(e)},Im=function(e){var r=yr(e);return r<=57&&48<=r},Um=function(e){return Fu(e)||Vu(e)||Im(e)},ce=function(e){return f(Ae,z,C,e)},ra=uf,Jm=$(function(e,r){return`

(`+(Ve(e+1)+(") "+Bu(Om(r))))}),Om=function(e){return t(Xm,e,C)},Xm=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=ra(n);if(h.$===1)return!1;var y=h.a,P=y.a,_=y.b;return Hm(P)&&t(Nm,Um,_)}(),o=a?"."+n:"['"+(n+"']"),u=c,v=t(z,o,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,v=t(z,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+t(ln,"",ce(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(Ve(Pr(s))+" ways:"));return t(ln,`

`,t(z,b,t(Xt,Jm,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ln,"",ce(r)):"!"}();default:var p=e.a,d=e.b,b=function(){return r.b?"Problem with the value at json"+(t(ln,"",ce(r))+`:

    `):`Problem with the given value:

`}();return b+(Bu(t(Au,4,d))+(`

`+p))}}),he=32,Er=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hn=Cs,Vi=rf,Ei=$(function(e,r){return Nc(r)/Nc(e)}),Ym=Ks,fr=Vi(t(Ei,2,he)),Wi=S(Er,0,fr,hn,hn),Eu=Ls,_n=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});var Zm=$(function(e,r){return r(e)}),Qm=nf,Sr=Ss,Qe=$(function(e,r){return I(e,r)>0?e:r}),$n=function(e){return{$:0,a:e}},qi=ks,Km=$(function(e,r){e:for(;;){var n=t(qi,he,e),a=n.a,o=n.b,i=t(z,$n(a),r);if(o.b){var c=o,l=i;e=c,r=l;continue e}else return ce(i)}}),eg=function(e){var r=e.a;return r},rg=$(function(e,r){e:for(;;){var n=Vi(r/he);if(n===1)return t(qi,he,e).a;var a=t(Km,e,C),o=n;e=a,r=o;continue e}}),Ri=$(function(e,r){if(r.m){var n=r.m*he,a=Qm(t(Ei,he,n-1)),o=e?ce(r.A):r.A,i=t(rg,o,r.m);return S(Er,Sr(r.p)+n,t(Qe,5,a*fr),i,r.p)}else return S(Er,Sr(r.p),fr,hn,r.p)}),ng=ye(function(e,r,n,a,o){e:for(;;){if(r<0)return t(Ri,!1,{A:a,m:n/he|0,p:o});var i=_n(f(Eu,he,r,e)),c=e,l=r-he,u=n,v=t(z,i,a),s=o;e=c,r=l,n=u,a=v,o=s;continue e}}),Wu=$(function(e,r){if(e<=0)return Wi;var n=e%he,a=f(Eu,n,e-n,r),o=e-n-he;return L(ng,r,o,e,C,a)}),ur=function(e){return!e.$},B=Ff,ee=zf,j=Af,ne=Tf,ag=function(e){return{$:2,a:e}},Yt=$(function(e,r){return e}),qu=$(function(e,r){return{e0:r.e0,e1:e,bg:r.bg,dt:r.dt,dL:r.dL,em:r.em,aL:r.aL,gm:r.gm}}),Sa=Ef,Zt=Wf,se=Sf,Ni=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},wr=function(e){return e},tg=wr,tl=lr(function(e,r,n,a,o,i){return{dB:i,dD:r,ej:a,eo:n,es:e,et:o}}),og=bf,un=$f,Wn=mf,Va=$(function(e,r){return e<1?r:f(Wn,e,un(r),r)}),Qt=_f,Kt=function(e){return e===""},eo=$(function(e,r){return e<1?"":f(Wn,0,e,r)}),Ru=yf,ol=ye(function(e,r,n,a,o){if(Kt(o)||t(og,"@",o))return W;var i=t(Qt,":",o);if(i.b){if(i.b.b)return W;var c=i.a,l=Ru(t(Va,c+1,o));if(l.$===1)return W;var u=l;return Z(Ge(tl,e,t(eo,c,o),u,r,n,a))}else return Z(Ge(tl,e,o,W,r,n,a))}),il=E(function(e,r,n,a){if(Kt(a))return W;var o=t(Qt,"/",a);if(o.b){var i=o.a;return L(ol,e,t(Va,i,a),r,n,t(eo,i,a))}else return L(ol,e,"/",r,n,a)}),cl=x(function(e,r,n){if(Kt(n))return W;var a=t(Qt,"?",n);if(a.b){var o=a.a;return S(il,e,Z(t(Va,o+1,n)),r,t(eo,o,n))}else return S(il,e,W,r,n)});$(function(e,r){if(Kt(r))return W;var n=t(Qt,"#",r);if(n.b){var a=n.a;return f(cl,e,Z(t(Va,a+1,r)),t(eo,a,r))}else return f(cl,e,W,r)});var ig=hf,Gi=function(e){},Ea=Cn,cg=Ea(0),Nu=E(function(e,r,n,a){if(a.b){var o=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,p=n>500?f(Ae,e,r,ce(m)):S(Nu,e,r,n+1,m);return t(e,o,t(e,c,t(e,u,t(e,s,p))))}else return t(e,o,t(e,c,t(e,u,r)))}else return t(e,o,t(e,c,r))}else return t(e,o,r)}else return r}),Xr=x(function(e,r,n){return S(Nu,e,r,0,n)}),Y=$(function(e,r){return f(Xr,$(function(n,a){return t(z,e(n),a)}),C,r)}),kt=Ho,Hi=$(function(e,r){return t(kt,function(n){return Ea(e(n))},r)}),lg=x(function(e,r,n){return t(kt,function(a){return t(kt,function(o){return Ea(t(e,a,o))},n)},r)}),ug=function(e){return f(Xr,lg(z),Ea(C),e)},$g=nd,vg=$(function(e,r){var n=r;return lu(t(kt,$g(e),n))}),sg=x(function(e,r,n){return t(Hi,function(a){return 0},ug(t(Y,vg(e),r)))}),fg=x(function(e,r,n){return Ea(0)}),dg=$(function(e,r){var n=r;return t(Hi,e,n)});_r.Task=ed(cg,sg,fg,dg);var mg=$u("Task"),Ii=$(function(e,r){return mg(t(Hi,e,r))}),gg=Fd,pg=cf,zt={$:1},Gu=function(e){return{$:2,a:e}},ro={$:0},ir=$(function(e,r){return{$:0,a:e,b:r}}),te=x(function(e,r,n){return r(e(n))}),na=function(e){var r=e.b.C;return r.a},bg=function(e){var r=e.a,n=e.b.W,a=e.b.C,o=e.b.ae;if(o.b){var i=o.a,c=o.b;return Z(t(ir,r,{C:i,ae:c,W:t(z,a,n)}))}else return W},Hu=function(e){var r=e.b;return t(ir,ro,r)},er=$(function(e,r){if(r.$)return e;var n=r.a;return n}),hg=x(function(e,r,n){var a=n.a,o=n.b;switch(a.$){case 1:return r.em.ds?Hu(n):n;case 2:var i=a.a.c5;return(I(i+r.dt,na(n).e0)>0?t(te,bg,er(t(ir,zt,o))):wr)(t(ir,Gu({c5:i+r.dt}),o));default:var c=o.C,l=c.a,u=c.b,v=t(qu,l.e1,V(r,{e0:l.e0+r.dt})),s=t(e,v,u);return t(ir,ro,{C:w(v,s),ae:C,W:t(z,o.C,o.W)})}}),Ui=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,o=n;e=a,r=o;continue e}else return r}}),_g=x(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,o=r.b,i=e-1,c=o,l=t(z,a,n);e=i,r=c,n=l;continue e}else return n}}),yg=$(function(e,r){return ce(f(_g,e,r,C))}),Iu=x(function(e,r,n){if(r<=0)return C;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var o=a.b,_=o.a,i=o.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return g([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,p=m.b,c=p.a,d=p.b,s=d.a,b=d.b,h=b.a,y=b.b;return e>1e3?t(z,_,t(z,c,t(z,s,t(z,h,t(yg,r-4,y))))):t(z,_,t(z,c,t(z,s,t(z,h,f(Iu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var P=a.b,_=P.a;return g([_])}}),Ji=$(function(e,r){return f(Iu,0,e,r)}),wg=$(function(e,r){var n=r.b.W,a=r.b.C,o=r.b.ae,i=ue(ce(n),ue(g([a]),o)),c=t(Ji,e,i),l=t(Ui,e,i);if(l.b){var u=l.a,v=l.b;return t(ir,zt,{C:u,ae:v,W:ce(c)})}else{var s=ce(c);if(s.b){var m=s.a,p=s.b;return t(ir,zt,{C:m,ae:C,W:p})}else return r}}),xg=function(e){var r=e.b;return t(ir,zt,r)},Cg=function(e){var r=e.b;return t(ir,Gu({c5:na(e).e0}),r)},Pg=$(function(e,r){switch(e.$){case 1:return xg(r);case 2:return Hu(r);case 3:return Cg(r);default:var n=e.a;return t(wg,n,r)}}),Uu=$(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),Sg=$(function(e,r){return V(r,{aC:e(r.aC)})}),Ju=function(e){return{$:3,a:e}},Ou=function(e){return{$:2,a:e}},Xu=$(function(e,r){return{$:0,a:e,b:r}}),Lg=$(function(e,r){return{$:1,a:e,b:r}}),re=$(function(e,r){if(r.$)return W;var n=r.a;return Z(e(n))}),K=function(e){return e<0?-e:e},Oi=wf,kg=x(function(e,r,n){return t(er,0/0,Oi(t(e,r,n)))}),Yu=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var o=e,i=a;e=o,r=i;continue e}else return!1}),zg=Es,Tg=sf,Zu=function(e){return f(Tg,z,C,e)},Mg=$(function(e,r){var n=t(Yu,function(a){return a!=="0"&&a!=="."},Zu(r));return ue(e&&n?"-":"",r)}),$e=iu,Oo=lf,Qu=Pf,Ku=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ra(n);if(a.$===1)return"01";var o=a.a;return t(Oo,"0",Ku(o))}else{var i=yr(r);return i>=48&&i<57?t(Oo,Qu(i+1),n):"0"}},Xo=ef,Dg=of,no=function(e){return t(Oo,e,"")},e$=x(function(e,r,n){return e<=0?n:f(e$,e>>1,ue(r,r),e&1?ue(n,r):n)}),La=$(function(e,r){return f(e$,e,r,"")}),Yo=x(function(e,r,n){return ue(n,t(La,e-un(n),no(r)))}),Zo=vf,r$=function(e){var r=t(Fi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a;return w(n,o)}else{var n=r.a;return w(n,"0")}else return w("0","0")},jg=function(e){var r=t(Fi,"e",$e(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=t(er,0,Ru(t(ig,"+",o)?t(Va,1,o):o)),c=r$(n),l=c.a,u=c.b,v=ue(l,u),s=i<0?t(er,"0",t(re,function(m){var p=m.a,d=m.b;return p+("."+d)},t(re,Uu(no),ra(ue(t(La,K(i),"0"),v))))):f(Yo,i+1,"0",v);return ue(e<0?"-":"",s)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},Ag=x(function(e,r,n){if(Xo(n)||Dg(n))return $e(n);var a=n<0,o=r$(jg(K(n))),i=o.a,c=o.b,l=un(i)+r,u=ue(t(La,-l+1,"0"),f(Yo,l,"0",ue(i,c))),v=un(u),s=t(Qe,1,l),m=t(e,a,f(Wn,s,v,u)),p=f(Wn,0,s,u),d=m?Zo(t(er,"1",t(re,Ku,ra(Zo(p))))):p,b=un(d),h=d==="0"?d:r<=0?ue(d,t(La,K(r),"0")):I(r,un(c))<0?f(Wn,0,b-r,d)+("."+f(Wn,b-r,b,d)):ue(i+".",f(Yo,r,"0",c));return t(Mg,a,h)}),n$=Ag($(function(e,r){var n=ra(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,o=a.a;return function(i){return i>53&&e||i>=53&&!e}(yr(o))})),Bg=kg(n$),Fg=x(function(e,r,n){var a=t(Ei,10,K(r-e)),o=a<0?3:a<1?2:a<2?1:0;return t(Bg,o,n)}),Xi=Ws,aa=$(function(e,r){e:for(;;){if(r.$===-2)return W;var n=r.b,a=r.c,o=r.d,i=r.e,c=t(Xi,e,n);switch(c){case 0:var l=e,u=o;e=l,r=u;continue e;case 1:return Z(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=ye(function(e,r,n,a,o){return{$:-1,a:e,b:r,c:n,d:a,e:o}}),Lr={$:-2},Jn=ye(function(e,r,n,a,o){if(o.$===-1&&!o.a){o.a;var i=o.b,c=o.c,l=o.d,u=o.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,p=a.e;return L(X,0,r,n,L(X,1,v,s,m,p),L(X,1,i,c,l,u))}else return L(X,e,i,c,L(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,d=a.d;d.a;var b=d.b,h=d.c,y=d.d,P=d.e,p=a.e;return L(X,0,v,s,L(X,1,b,h,y,P),L(X,1,r,n,p,o))}else return L(X,e,r,n,a,o)}),Qo=x(function(e,r,n){if(n.$===-2)return L(X,0,e,r,Lr,Lr);var a=n.a,o=n.b,i=n.c,c=n.d,l=n.e,u=t(Xi,e,o);switch(u){case 0:return L(Jn,a,o,i,f(Qo,e,r,c),l);case 1:return L(X,a,o,r,c,l);default:return L(Jn,a,o,i,c,f(Qo,e,r,l))}}),vn=x(function(e,r,n){var a=f(Qo,e,r,n);if(a.$===-1&&!a.a){a.a;var o=a.b,i=a.c,c=a.d,l=a.e;return L(X,1,o,i,c,l)}else{var u=a;return u}}),Vg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},a$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d,u=o.e,v=e.e;v.a;var s=v.b,m=v.c,p=v.d;p.a;var d=p.b,b=p.c,h=p.d,y=p.e,P=v.e;return L(X,0,d,b,L(X,1,n,a,L(X,0,i,c,l,u),h),L(X,1,s,m,y,P))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,k=e.e;k.a;var s=k.b,m=k.c,p=k.d,P=k.e;return L(X,1,n,a,L(X,0,i,c,l,u),L(X,0,s,m,p,P))}else return e},ll=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,p=o.e,d=e.e;d.a;var b=d.b,h=d.c,y=d.d,P=d.e;return L(X,0,i,c,L(X,1,u,v,s,m),L(X,1,n,a,p,L(X,0,b,h,y,P)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,k=_.d,p=_.e,A=e.e;A.a;var b=A.b,h=A.c,y=A.d,P=A.e;return L(X,1,n,a,L(X,0,i,c,k,p),L(X,0,b,h,y,P))}else return e},Eg=Gt(function(e,r,n,a,o,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return L(X,n,l,u,v,L(X,0,a,o,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,ll(r)}else break e;else return c.a,c.d,ll(r);else break e;return r}}),dt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,o=e.d,i=o.a,c=o.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,L(X,r,n,a,dt(o),l);var u=a$(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,p=u.d,d=u.e;return L(Jn,v,s,m,dt(p),d)}else return Lr}else return L(X,r,n,a,dt(o),l)}else return Lr},_a=$(function(e,r){if(r.$===-2)return Lr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,L(X,n,a,o,t(_a,e,i),c);var u=a$(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,p=u.d,d=u.e;return L(Jn,v,s,m,t(_a,e,p),d)}else return Lr}else return L(X,n,a,o,t(_a,e,i),c);else return t(Wg,e,xi(Eg,e,r,n,a,o,i,c))}),Wg=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(fe(e,a)){var l=Vg(c);if(l.$===-1){var u=l.b,v=l.c;return L(Jn,n,u,v,i,dt(c))}else return Lr}else return L(Jn,n,a,o,i,t(_a,e,c))}else return Lr}),qg=$(function(e,r){var n=t(_a,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,o=n.c,i=n.d,c=n.e;return L(X,1,a,o,i,c)}else{var l=n;return l}}),rt=x(function(e,r,n){var a=r(t(aa,e,n));if(a.$)return t(qg,e,n);var o=a.a;return f(vn,e,o,n)}),Rg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(rt,r,re(function(a){if(a.$===1){var o=a.a,i=o.a,c=o.b;return t(Lg,w(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(rt,r,re(function(a){if(a.$)return a;var o=a.a,i=o.a,c=o.b;return t(Xu,w(i,c),f(Fg,i,c,n))}));case 3:var r=e.a,n=e.b;return t(rt,r,re(function(a){return a.$===3?Ju(n):a}));default:var r=e.a,n=e.b;return t(rt,r,re(function(a){return a.$===2?Ou(n):a}))}},Ng=function(e){return Sg(Rg(e))},Gg=$(function(e,r){return t(Y,Ng(e),r)}),Hg=$(function(e,r){return V(r,{e1:t(Gg,e,r.e1)})}),Ig=$(function(e,r){var n=r.a,a=r.b;return t(ir,n,V(a,{C:t(Uu,Hg(e),a.C)}))}),Ug=$(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),Jg=x(function(e,r,n){var a=n.a,o=n.b,i=o.C;return t(ir,a,V(o,{C:t(Ug,t(e,i.a,r),i)}))}),Og=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return V(a,{aV:!a.aV});case 2:var o=n.a;return V(a,{H:f(hg,e,o,a.H)});case 3:var i=n.a;return V(a,{H:t(Ig,i,a.H)});case 4:var c=n.a;return V(a,{H:f(Jg,r,c,a.H)});default:var l=n.a;return V(a,{H:t(Pg,l,a.H)})}}),Xg=$(function(e,r){return t(ir,ro,{C:w(e,r(e)),ae:C,W:C})}),Yg=ad,ul=Yg(C),xr=Df,On=Mf,Zg=ld("tick",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return se({e0:c,bg:i,dt:o,dL:a,em:n,aL:r,gm:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(s){return t(B,function(m){return se({eP:m,e2:s,ds:v,fa:u,fz:l,fW:c,f_:i,eA:o,eI:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",xr(On)))},t(j,"left",ee))},t(j,"pressedKeys",xr(On)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return se({ds:v,fw:u,fF:l,f$:c,f0:i,eI:o,gq:a,gu:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return se({fo:n,go:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return se({e5:r,e6:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne))))),Qg=function(e){return{$:4,a:e}},Kg={$:0},t$=Jt,Je=$(function(e,r){return t(fu,e,t$(r))}),M=Je("className"),ep=function(e){var r=e.b.C;return r.b},F=Or("div"),Tt=Je("id"),rp=dd,ka=rp,np=md,oe=np,ap={$:1},tp=function(e){return{$:3,a:e}},op=function(e){return{$:5,a:e}},$l=Or("a"),rn=Or("button"),vl=function(e){return t(Je,"href",bd(e))},ip=Tr("clip-rule"),ze=Tr("d"),Ko=Tr("fill"),o$=vu("http://www.w3.org/2000/svg"),ei=o$("svg"),ri=Tr("viewBox"),cp=t(gd,"http://www.w3.org/XML/1998/namespace","xml:space"),nr=ei(g([ri("0 0 24 24"),Ko("currentColor"),t(oe,"width","100%"),t(oe,"height","100%"),cp("http://www.w3.org/2000/svg")])),lp=Tr("fill-rule"),Te=o$("path"),vr={dp:nr(g([t(Te,g([ze("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),C)])),fi:nr(g([t(Te,g([ze("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),C)])),fn:nr(g([t(Te,g([ze("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),C)])),fG:nr(g([t(Te,g([ze("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),C),t(Te,g([ze("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),C)])),fH:nr(g([t(Te,g([ze("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),C),t(Te,g([ze("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),C)])),fS:nr(g([t(Te,g([ze("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),C)])),fT:nr(g([t(Te,g([ze("M7 5V19L18 12L7 5Z")]),C)])),fU:nr(g([t(Te,g([ze("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),C)])),em:nr(g([t(Te,g([ze("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),C)])),gg:nr(g([t(Te,g([lp("evenodd"),ip("evenodd"),ze("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),C)])),gh:nr(g([t(Te,g([ze("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),C)])),gy:nr(g([t(Te,g([ze("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),C)]))},up=function(e){return{$:0,a:e}},i$=su,Yi=$(function(e,r){return t(i$,e,up(r))}),br=function(e){return t(Yi,"click",se(e))},sl=Je("target"),ma=Je("title"),ni=$(function(e,r){if(r.$===-2)return Lr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;return L(X,n,a,t(e,a,o),t(ni,e,i),t(ni,e,c))}),$p=Io,Ce=$p,vp=function(e){return f(Ai,x(function(r,n,a){return t(z,n,a)}),C,e)},sp=$(function(e,r){return{$:3,a:e,b:r}}),fp=$(function(e,r){return{$:2,a:e,b:r}}),dp=$(function(e,r){return{$:0,a:e,b:r}}),mp=$(function(e,r){return{$:1,a:e,b:r}}),Mr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),c$=S(Mr,0/255,0/255,0/255,1),l$=Jt,u$=$(function(e,r){return t(fu,e,l$(r))}),gp=u$("checked"),rr=af,pp=x(function(e,r,n){return ue(t(La,e-un(n),no(r)),n)}),za=Is,$$=function(e){var r=function(n){return n<10?Ve(n):no(Qu(87+n))};return e<16?r(e):ue($$(e/16|0),r(t(za,16,e)))},bp=t(te,$$,t(pp,2,"0")),Zi=function(e){var r=e.a,n=e.b,a=e.c,o=e.d;return{aR:o,ci:a,co:n,cY:r}},hp=function(e){var r=Zi(e),n=r.cY,a=r.co,o=r.ci;return t(ln,"",t(z,"#",t(Y,t(te,rr,bp),g([n*255,a*255,o*255]))))},ai=Je("htmlFor"),Wr=$(function(e,r){if(r.$)return W;var n=r.a;return e(n)}),Mt=$(function(e,r){if(r.$){var a=r.a;return Fe(a)}else{var n=r.a;return e(n)}}),_p=x(function(e,r,n){var a=e(r);if(a.$)return n;var o=a.a;return t(z,o,n)}),yn=$(function(e,r){return f(Xr,_p(e),C,r)}),v$=E(function(e,r,n,a){return{ft:r,fD:e,fM:n,f8:a}}),yp=Rd,wp=xf,xp=$(function(e,r){if(r.$)return Fe(e);var n=r.a;return de(n)}),Cp=qd,Pp=function(e){return t(Cp,{eY:!1,fI:!1},e)},ta=function(e){if(e.b){var r=e.a;return e.b,Z(r)}else return W},Sp=$(function(e,r){if(r.$){var a=r.a;return Fe(a)}else{var n=r.a;return de(e(n))}}),Lp=function(e){return{$:2,a:e}},kp=function(e){return{$:0,a:e}},zp=function(e){return{$:1,a:e}},yo=$(function(e,r){return yr(r)-yr(e)}),wo=x(function(e,r,n){var a=yr(n);return I(yr(e),a)<1&&I(a,yr(r))<1}),Tp=$(function(e,r){var n=function(o){return I(o,e)<0?de(o):Fe(zp(r))},a=f(wo,"0","9",r)?de(t(yo,"0",r)):f(wo,"a","z",r)?de(10+t(yo,"a",r)):f(wo,"A","Z",r)?de(10+t(yo,"A",r)):Fe(kp(r));return t(Mt,n,a)}),s$=$(function(e,r){var n=ra(r);if(n.$===1)return de(0);var a=n.a,o=a.a,i=a.b;return t(Mt,function(c){return t(Mt,function(l){return de(c+l*e)},t(s$,e,i))},t(Tp,e,o))}),Mp=$(function(e,r){return 2<=e&&e<=36?t(s$,e,Zo(r)):Fe(Lp(e))}),Dp=Mp(16),jp=x(function(e,r,n){return S(Mr,e,r,n,1)}),Ap=E(function(e,r,n,a){return S(Mr,e,r,n,a)}),en=Hs,Bp=$(function(e,r){var n=t(en,10,e);return rr(r*n)/n}),Fp=gf,Vp=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Zu(n);if(a.b&&!a.b.b){var o=a.a;return wp(g([o,o]))}else return n};return t(te,Fp,t(te,function(n){return t(re,function(a){return f(yp,1,a,n)},Pp(e))},t(te,Wr(ta),t(te,re(function(n){return n.f8}),t(te,re(yn(wr)),t(te,xp("Parsing hex regex failed"),Mt(function(n){var a=t(Y,t(te,r,t(te,Dp,Sp(Ym))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var o=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return de(S(Ap,o/255,c/255,u/255,t(Bp,2,s/255)))}else break e;else{var o=a.a.a,m=a.b,c=m.a.a,p=m.b,u=p.a.a;return de(f(jp,o/255,c/255,u/255))}else break e;return Fe("Parsing ints from hex failed")})))))))}(),Ta=Or("input"),ti=Or("label"),oi=Je("name"),f$=$(function(e,r){return f(Xr,j,r,e)}),Ep=t(f$,g(["target","checked"]),ee),Wp=function(e){return t(Yi,"change",t(Sa,e,Ep))},qp=function(e){return w(e,!0)},Rp=function(e){return{$:1,a:e}},Np=$(function(e,r){return t(i$,e,Rp(r))}),Gp=t(f$,g(["target","value"]),On),Wa=function(e){return t(Np,"input",t(Sa,qp,t(Sa,e,Gp)))},d$=Je("max"),m$=Je("min"),g$=function(e){return t(Je,"step",e)},Dt=Je("type"),qa=Je("value"),fl=function(e){var r=e.cr,n=e.db,a=e.cH,o=e.cD,i=e.c3,c=e.cL;return t(F,C,g([t(ti,g([ai(r)]),g([t(F,g([M("relative w-full")]),g([t(F,g([M("inline-block")]),g([Ce(r)])),t(F,g([M("inline-block float-right")]),g([Ce($e(n))]))]))])),t(Ta,g([Dt("range"),t(oe,"width","100%"),Tt(r),oi(r),m$($e(a)),d$($e(o)),qa($e(n)),g$($e(i)),Wa(t(te,Oi,t(te,er(42),c)))]),C)]))},p$=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Hp=$(function(e,r){switch(r.$){case 3:var c=r.a;return t(F,g([M("h-12 py-4")]),g([t(ti,g([M("block"),ai(e)]),g([t(Ta,g([M("relative bottom-[1px] align-middle mr-2"),Dt("checkbox"),Tt(e),oi(e),Wp(sp(e)),gp(c)]),C),Ce(e)]))]));case 0:var n=r.a,o=n.a,i=n.b,c=r.b;return fl({cr:e,cD:i,cH:o,cL:dp(e),c3:.01*(i-o),db:c});case 1:var a=r.a,o=a.a,i=a.b,c=r.b;return fl({cr:e,cD:i,cH:o,cL:t(te,rr,mp(e)),c3:1,db:c});default:var c=r.a;return t(F,C,g([t(F,g([t(oe,"margin-bottom","6px")]),g([t(ti,g([ai(e)]),g([Ce(e)]))])),t(Ta,g([Dt("color"),t(oe,"width","100%"),t(oe,"height","26px"),t(oe,"padding","0px"),Tt(e),oi(e),Wa(function(l){return t(fp,e,t(p$,c$,Vp(l)))}),qa(hp(c))]),C)]))}}),Ip=function(e){return t(F,g([M("p-4 border-y-[0.5px] border-white20")]),g([t(F,g([M("text-lg pb-2")]),g([Ce(e.fJ)])),t(F,g([M("pl-2 pr-2")]),vp(t(ni,Hp,e.aC)))]))},Up=function(e){return t(F,g([M("text-xs text-white60")]),t(Y,Ip,e))},Jp=function(e){return t(F,g([M("absolute left-[104px] bottom-2 text-sm text-white40")]),g([Ce("clock: "+t(n$,3,na(e).e0))]))},Op=function(e){e.a;var r=e.b.W;return t(re,function(n){return rr(60/(na(e).e0-n))},t(re,t(te,eg,function(n){return n.e0}),ta(t(Ui,59,r))))},Xp=function(e){return t(F,g([M("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Op(e);if(r.$===1)return g([Ce("... Fps")]);var n=r.a;return g([Ce(Ve(n)+" Fps")])}())},Yp=function(e){return{$:0,a:e}},Zp=function(e){var r=e.b.W;return Pr(r)},Qp=function(e){var r=e.b.W;e.b.C;var n=e.b.ae;return Pr(r)+1+Pr(n)},Kp=function(e){return t(Ta,g([M("absolute w-full"),Dt("range"),m$(Ve(0)),d$(Ve(Qp(e)-1)),qa(Ve(Zp(e))),g$(Ve(1)),Wa(t(te,Oi,t(te,er(42),t(te,rr,Yp))))]),C)},dl={$:1},ml={$:3},gl={$:2},jt=function(e){return!e.b},b$=u$("disabled"),xo=x(function(e,r,n){return t(rn,g([M("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),M(n),b$(e),br(r)]),g([Ce("REC")]))}),Co=x(function(e,r,n){return t(rn,g([M("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),b$(e),br(n)]),g([t(F,g([M("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),e0=function(e){var r=e.a,n=e.b.ae;return t(F,g([M("py-1")]),g([function(){switch(r.$){case 0:return f(xo,!1,dl,"text-red-500 font-bold");case 1:return f(xo,!1,gl,"text-white60 hover:text-white80 font-bold");default:return f(xo,!0,gl,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return f(Co,jt(n),vr.fT,ml);case 1:return f(Co,jt(n),vr.fT,ml);default:return f(Co,!1,vr.fS,dl)}}()]))},r0=function(e){return t(F,g([M("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Kp(e),e0(e),Xp(e),Jp(e)]))},n0=function(e){var r=e.a;return fe(r,ro)},a0=$(function(e,r){var n=n0(r.H)?t(F,C,C):t(F,g([M("absolute pointer-events-none w-8 h-8"),t(oe,"left",$e(e.em.gq+.5*e.aL.go)+"px"),t(oe,"top",$e(-e.em.gu+.5*e.aL.fo)+"px")]),g([t(F,g([M(e.em.fw?"text-black80":"text-black40")]),g([vr.em]))]));return t(F,C,g([n]))}),t0=$(function(e,r){var n=t(rn,g([M(r.aV?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),br(ap),ma("Distraction Free Mode")]),g([vr.gy])),a=40,o=260,i=t(F,g([M("absolute w-8 bottom-12")]),g([t($l,g([M("text-twitterBlue40 hover:text-twitterBlue"),vl("https://twitter.com/AzizErkalSelman"),sl("_blank")]),g([vr.gh]))])),c=80,l=t(F,g([M("absolute w-8 bottom-2")]),g([t($l,g([M("text-githubCat40 hover:text-githubCat"),vl("https://github.com/erkal/elm-3d-playground-exploration"),sl("_blank")]),g([vr.fi]))])),u=e.aL.go>640?T(e.aL.fo,a+o,e.aL.go-(a+o)):T(e.aL.fo-c,a,e.aL.go-a),v=u.a,s=u.b,m=u.c;return r.aV?t(F,g([M("fixed w-10 h-10 p-1")]),g([n])):t(F,C,g([t(F,g([M("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),t(oe,"width",$e(a)+"px")]),g([n,i,l])),t(F,g([M("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),t(oe,"width",$e(o)+"px"),t(oe,"height",$e(v)+"px")]),g([t(ka,tp,Up(na(r.H).e1))])),t(F,g([M("absolute bottom-0"),t(oe,"left",$e(s)+"px"),t(oe,"height",$e(c)+"px"),t(oe,"width",$e(m)+"px")]),g([t(ka,op,r0(r.H))])),t(a0,e,r)]))}),o0=x(function(e,r,n){var a=ep(n.H),o=na(n.H);return t(F,g([M("bg-black40"),M("select-none"),M("antialiased"),M("font-mono"),t(oe,"width",$e(o.aL.go)+"px"),t(oe,"height",$e(o.aL.fo)+"px")]),g([t(F,g([M("fixed")]),g([t(ka,Yt(Kg),t(e,o,a))])),t(F,g([Tt("gui")]),g([t(t0,o,n),t(ka,Qg,t(r,o,a))]))]))}),i0=lr(function(e,r,n,a,o,i){var c=$(function(u,v){return w(S(Og,r,i,u,v),ul)}),l=function(u){var v=t(qu,n,u.fv);return w({aV:u.fv.aL.go<500,H:t(Xg,v,a)},ul)};return gg({fu:l,f9:Yt(Zg(ag)),gi:c,gl:t(o0,e,o)})}),ii={$:0},qr=$(function(e,r){return{gq:e,gu:r}}),c0=$(function(e,r){return t(re,function(n){if(n.$===3){var a=n.a;return a}else return!1},t(aa,e,r.aC))}),l0=$(function(e,r){return t(er,!1,ta(t(yn,c0(e),r)))}),u0=$(function(e,r){return t(l0,e,r.e1)}),oa=u0,$0=$(function(e,r){return t(re,function(n){if(n.$)return 0;var a=n.b;return a},t(aa,e,r.aC))}),v0=$(function(e,r){return t(er,0,ta(t(yn,$0(e),r)))}),s0=$(function(e,r){return t(v0,e,r.e1)}),Ar=s0,Qi=function(e){return e},Le=function(e){return e},At=function(e){var r=e;return-r},f0=$(function(e,r){var n=e,a=r;return{gq:n.gu*a.dg-n.dg*a.gu,gu:n.dg*a.gq-n.gq*a.dg,dg:n.gq*a.gu-n.gu*a.gq}}),h$=function(e){var r=e;return r.de},_$=function(e){var r=e;return r.df},d0=function(e){return t(f0,h$(e),_$(e))},ia=function(e){var r=e;return r.cM},Hr=Js,Ir=Os,mt=x(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Hr(c),u=Ir(c),v=a.e8,s=v,m=s.gq*u,p=l*m,d=m*m,b=s.gu*u,h=l*b,y=m*b,P=b*b,_=1-2*(d+P),k=s.dg*u,A=l*k,H=2*(y-A),G=2*(y+A),N=m*k,U=2*(N+h),J=2*(N-h),q=b*k,Q=2*(q-p),ae=2*(q+p),_e=k*k,we=1-2*(P+_e),ge=1-2*(d+_e);return{gq:we*i.gq+H*i.gu+U*i.dg,gu:G*i.gq+ge*i.gu+Q*i.dg,dg:J*i.gq+ae*i.gu+_*i.dg}}),Ra=x(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Hr(c),u=Ir(c),v=a.cM,s=v,m=i.gq-s.gq,p=i.gu-s.gu,d=i.dg-s.dg,b=a.e8,h=b,y=h.gq*u,P=l*y,_=y*y,k=h.gu*u,A=l*k,H=y*k,G=k*k,N=1-2*(_+G),U=h.dg*u,J=l*U,q=2*(H-J),Q=2*(H+J),ae=y*U,_e=2*(ae+A),we=2*(ae-A),ge=k*U,Pe=2*(ge-P),Oe=2*(ge+P),Re=U*U,Zr=1-2*(G+Re),Qr=1-2*(_+Re);return{gq:s.gq+Zr*m+q*p+_e*d,gu:s.gu+Q*m+Qr*p+Pe*d,dg:s.dg+we*m+Oe*p+N*d}}),ca=function(e){return e},Pn=function(e){var r=e;return r.de},Sn=function(e){var r=e;return r.df},Ln=function(e){var r=e;return r.dh},y$=x(function(e,r,n){return ca({cM:f(Ra,e,r,ia(n)),de:f(mt,e,r,Pn(n)),df:f(mt,e,r,Sn(n)),dh:f(mt,e,r,Ln(n))})}),pl=x(function(e,r,n){return f(y$,e(n),r,n)}),Ki=function(e){var r=e;return r.e8},la=$(function(e,r){var n=e,a=r;return{gq:a.gq+n.gq,gu:a.gu+n.gu,dg:a.dg+n.dg}}),w$=$(function(e,r){return ca({cM:t(la,e,ia(r)),de:Pn(r),df:Sn(r),dh:Ln(r)})}),m0=$(function(e,r){var n=e,a=r;return{gq:n*a.gq,gu:n*a.gu,dg:n*a.dg}}),g0=x(function(e,r,n){return t(w$,t(m0,r,e),n)}),p0=x(function(e,r,n){return f(g0,Ki(e(n)),r,n)}),kr=$(function(e,r){return{e8:r,cM:e}}),b0=function(e){var r=e;return t(kr,r.cM,r.de)},h0=function(e){var r=e;return t(kr,r.cM,r.df)},_0=function(e){var r=e;return t(kr,r.cM,r.dh)},x$=function(e){var r=ca({cM:e.a$,de:_$(e.dC),df:d0(e.dC),dh:h$(e.dC)}),n=f(p0,_0,e.cn,f(pl,b0,At(e.bP),f(pl,h0,e.bI,r)));return n},y0=function(e){return{$:1,a:e}},je=function(e){var r=e;return K(r)},w0=function(e){return{cX:y0(je(e.eM)),dc:e.dc}},Ke=function(e){return e},Yr={gq:0,gu:0,dg:0},C$=wr,sn=function(e){return e},x0=sn({gq:1,gu:0,dg:0}),ec=x0,P$=sn({gq:0,gu:0,dg:1}),ao=P$,S$=C$({cM:Yr,de:ao,df:ec}),C0=function(e){var r=e.a$,n=e.bI,a=e.bP,o=e.eM;return w0({dc:x$({bI:Ke(n),cn:Le(1e3),bP:Ke(a),a$:Qi(r),dC:S$}),eM:Le(o)})},P0=Zs,S0=function(e){return{$:0,a:e}},gt=function(e){var r=e;return .5*r},L0=Xs,k0=function(e){var r=e;return L0(r)},z0=function(e){var r=gt(je(e.eK)),n=k0(r);return{cX:S0(n),dc:e.dc}},T0=function(e){var r=e.a$,n=e.bI,a=e.bP,o=e.cn;return z0({eK:Ke(2*P0(.5)),dc:x$({bI:Ke(n),cn:Le(o),bP:Ke(a),a$:Qi(r),dC:S$})})},L$=$(function(e,r){return t(oa,"orthographic",e)?C0({bI:t(Ar,"camera azimuth",e),bP:t(Ar,"camera elevation",e),a$:r,eM:t(Ar,"camera distance",e)}):T0({bI:t(Ar,"camera azimuth",e),cn:t(Ar,"camera distance",e),bP:t(Ar,"camera elevation",e),a$:r})}),M0=ye(function(e,r,n,a,o){return{ce:e,dk:o,ap:n,cj:a,fV:r}}),D0=lr(function(e,r,n,a,o,i){return{aT:e,e9:n,f1:o,ew:a,gf:i,gk:r}}),j0=$(function(e,r){return{bL:e,fX:r}}),A0=Zt(Zm),pe=x(function(e,r,n){return t(A0,t(j,e,r),n)}),Na=f(pe,"y",ne,f(pe,"x",ne,se(qr))),B0=f(pe,"radius",ne,f(pe,"center",Na,se(j0))),bl=Bf,to=$(function(e,r){return w(e,r)}),F0=f(pe,"trail",xr(Na),f(pe,"rotation",ne,f(pe,"rotationSpeed",ne,f(pe,"directionFromXAxis",ne,f(pe,"velocity",f(Zt,to,t(bl,0,ne),t(bl,1,ne)),f(pe,"circle",B0,se(D0))))))),V0=$(function(e,r){return{bL:e,dI:r}}),E0=f(pe,"isCollected",ee,f(pe,"center",Na,se(V0))),k$=kf,W0=jf,q0=Vf,R0=function(e){return q0(g([W0(W),t(Sa,Z,e)]))},N0=x(function(e,r,n){return{dl:n,cp:e,en:r}}),G0=f(pe,"bounciness",ne,f(pe,"polygon",xr(Na),f(pe,"id",k$,se(N0)))),H0=f(pe,"ballBouncedInLastTickToPolygonWithId",R0(k$),f(pe,"collisionPointsHistory",xr(Na),f(pe,"coins",xr(E0),f(pe,"polygons",xr(G0),f(pe,"ball",F0,se(M0)))))),Br=Jt,kn=function(e){return f(Ae,$(function(r,n){var a=r.a,o=r.b;return f(If,a,o,n)}),Hf(),e)},Ga=function(e){return kn(g([w("x",Br(e.gq)),w("y",Br(e.gu))]))},I0=function(e){return kn(g([w("center",Ga(e.bL)),w("radius",Br(e.fX))]))},fn=$(function(e,r){return f(Ae,Uf(e),Gf(),r)}),U0=function(e){return kn(g([w("circle",I0(e.aT)),w("velocity",function(r){var n=r.a,a=r.b;return t(fn,wr,g([Br(n),Br(a)]))}(e.gk)),w("directionFromXAxis",Br(e.e9)),w("rotationSpeed",Br(e.ew)),w("rotation",Br(e.f1)),w("trail",t(fn,Ga,e.gf))]))},J0=function(e){return kn(g([w("center",Ga(e.bL)),w("isCollected",l$(e.dI))]))},z$=Jt,O0=function(e){return kn(g([w("id",z$(e.cp)),w("polygon",t(fn,Ga,e.en)),w("bounciness",Br(e.dl))]))},X0=Jf,Y0=function(e){return kn(g([w("ball",U0(e.ce)),w("polygons",t(fn,O0,e.fV)),w("coins",t(fn,J0,e.ap)),w("collisionPointsHistory",t(fn,Ga,e.cj)),w("ballBouncedInLastTickToPolygonWithId",t(te,re(z$),er(X0))(e.dk))]))},T$=$(function(e,r){return{q:r,l:C,C:e}}),Z0=E(function(e,r,n,a){return{dw:e,eh:r,U:t(T$,n,a),c6:"",ca:""}}),Q0=function(e){if(e.b){var r=e.a,n=e.b;return Z(f(Ae,Qe,r,n))}else return W},M$=$(function(e,r){var n={dl:1,cp:1+t(er,-1,Q0(t(Y,function(a){return a.cp},r.fV))),en:e};return V(r,{fV:t(z,n,r.fV)})}),K0={aT:{bL:t(qr,0,0),fX:.5},e9:0,f1:0,ew:0,gf:C,gk:w(0,0)},eb=t(M$,g([t(qr,6,0),t(qr,6,6),t(qr,0,6)]),{ce:K0,dk:W,ap:C,cj:C,fV:C}),rb=function(e){return{ao:t(L$,e,{gq:0,gu:0,dg:0}),aE:!0,I:S(Z0,Y0,H0,{fJ:"level 1",fR:eb},C),aI:t(qr,0,0),aj:ii}},$a=$(function(e,r){return w(e,Ju(r))}),nb=$(function(e,r){return w(e,Ou(r))}),ab=x(function(e,r,n){return{aC:n,fx:r,fJ:e}}),oo=Lr,tb=function(e){return f(Ae,$(function(r,n){var a=r.a,o=r.b;return f(vn,a,o,n)}),oo,e)},ob=x(function(e,r,n){return f(ab,e,r,tb(n))}),nt=ob,An=x(function(e,r,n){var a=r.a,o=r.b;return w(e,t(Xu,w(a,o),n))}),Rr=Us,ib=S(Mr,255/255,255/255,255/255,1),cb=g([f(nt,"View Options",!0,g([t($a,"draw speed vector",!1),t($a,"draw ball trail",!0),t($a,"orthographic",!0),t($a,"unlit",!0)])),f(nt,"Camera",!0,g([f(An,"camera distance",w(3,60),40),f(An,"camera azimuth",w(0,2*Rr),0),f(An,"camera elevation",w(-Rr/2,Rr/2),0)])),f(nt,"Physics Parameters",!0,g([t($a,"fix time steps",!0),f(An,"gas force",w(20,60),40),f(An,"friction",w(0,1),.4),f(An,"direction change speed",w(1,5),3)])),f(nt,"Color",!0,g([t(nb,"floor color",ib)]))]),D$=function(e){return{$:1,a:e}},Ha=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*o+a*i}),sr=tf,io=function(e){return sr(t(Ha,e,e))},dr=$(function(e,r){return io(w(e.gq-r.gq,e.gu-r.gu))}),lb=$(function(e,r){var n=w(e.dL.eA,r.aj);if(n.a&&n.b.$===1){var a=n.b.a,o=r.aI;return V(r,{aj:D$(function(){var i=ce(a);if(i.b){var c=i.a;return t(dr,c,o)>2?ue(a,g([o])):a}else return g([o])}())})}else return r}),Ne=x(function(e,r,n){return{gq:e,gu:r,dg:n}}),rc=function(e){var r=e;return r.C},Ia=function(e){var r=e;return rc(r.U).fR},ub=$(function(e,r){var n=Ia(r.I).ce;return V(r,{ao:t(L$,e,f(Ne,n.aT.bL.gq,n.aT.bL.gu,0))})}),j$=$(function(e,r){var n=r;return V(n,{C:e(n.C)})}),zn=$(function(e,r){var n=r;return V(n,{U:e(n.U)})}),A$=function(e){return zn(j$(function(r){return V(r,{fR:e(r.fR)})}))},$b=function(e){var r=function(n){return!n.dI&&t(dr,n.bL,e.ce.aT.bL)<1?V(n,{dI:!0}):n};return V(e,{ap:t(Y,r,e.ap)})},B$=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(n+o,a+i)}),zr=$(function(e,r){var n=r.a,a=r.b;return w(e*n,e*a)}),nn=$(function(e,r){return t(zr,e/io(r),r)}),vb=$(function(e,r){return t(nn,t(Ha,e,r),e)}),sb=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return w(o-n,i-a)}),fb=$(function(e,r){var n=r.ce,a=t(vb,e.b$,n.gk),o=t(sb,a,n.gk),i=t(B$,o,t(zr,e.b4.dl,t(zr,-1,a)));return V(r,{ce:V(n,{gk:i})})}),db=$(function(e,r){return r.b?f(Xr,z,r,e):e}),We=function(e){return f(Xr,db,C,e)},Ur=function(e){return e*Rr/180},nc=function(e){var r=function(){if(e.b){var n=e.a,a=e.b;return ue(a,g([n]))}else return C}();return f(Ot,to,e,r)},Ua=$(function(e,r){var n=r.a,a=r.b;return w(n*Hr(e)-a*Ir(e),n*Ir(e)+a*Hr(e))}),qe=$(function(e,r){var n=e.a,a=e.b;return V(r,{gq:r.gq+n,gu:r.gu+a})}),ke=$(function(e,r){return w(e.gq-r.gq,e.gu-r.gu)}),mb=$(function(e,r){var n=r.a,a=r.b,o=t(nn,e,t(Ua,-Ur(90),t(ke,a,n)));return w(t(qe,o,n),t(qe,o,a))}),gb=$(function(e,r){return{e3:t(Y,function(n){return{bL:n,fX:e}},r),f4:t(Y,mb(e),nc(r))}}),mr=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*i-a*o}),pb=$(function(e,r){var n=w(w(e.ah,e.e8),w(r.ah,r.e8)),a=n.a,o=a.a,i=a.b,c=n.b,l=c.a,u=c.b,v=t(mr,t(ke,l,o),i),s=t(mr,i,u),m=v/s,p=t(mr,t(ke,l,o),u),d=p/s;return!v&&!s?W:s&&0<=d&&0<=m?Z(t(qe,t(zr,d,i),o)):W}),F$=$(function(e,r){r.fX;var n=r.bL,a=t(mr,e.e8,t(ke,n,e.ah))<0?1:-1;return t(pb,{e8:t(Ua,a*Ur(90),e.e8),ah:n},e)}),gr=function(e){var r=e.a,n=e.b;return w(n.gq-r.gq,n.gu-r.gu)},V$=function(e){var r=e.a,n=e.b;return{e8:gr(w(r,n)),ah:r}},bb=$(function(e,r){var n=e.a,a=e.b,o=r.fX,i=t(F$,V$(e),r);if(i.$===1)return W;var c=i.a,l=t(dr,r.bL,c);if(I(l,o)<1){var u=t(qe,t(nn,-sr(o*o-l*l),gr(e)),c),v=t(Ha,t(ke,a,n),t(ke,u,n))>=0&&I(t(dr,n,u),t(dr,n,a))<1;return v?Z(u):W}else return W}),E$=nn(1),hb=x(function(e,r,n){var a=w(e,t(qe,r,e)),o=t(bb,a,n);return t(re,function(i){return{b$:E$(t(ke,i,n.bL)),cb:t(ke,i,e)}},o)}),_b=$(function(e,r){var n=e.a,a=r.a,o=w(w(n,gr(e)),w(a,gr(r))),i=o.a,c=i.a,l=i.b,u=o.b,v=u.a,s=u.b,m=t(mr,t(ke,v,c),l),p=t(mr,l,s),d=m/p,b=t(mr,t(ke,v,c),s),h=b/p;return!m&&!p?W:p&&0<=h&&h<=1&&0<=d&&d<=1?Z(t(qe,t(zr,h,l),c)):W}),W$=function(e){return E$(t(Ua,-Ur(90),gr(e)))},yb=x(function(e,r,n){var a=w(e,t(qe,r,e)),o=t(_b,a,n);return t(re,function(i){return{b$:W$(n),cb:t(ke,i,e)}},o)}),q$=Ns,hl=$(function(e,r){return{bM:e,b$:r.b$,cb:r.cb}}),wb=x(function(e,r,n){var a=t(gb,e.fX,n),o=a.f4,i=a.e3,c=t(yn,function(u){return t(re,hl(u.bL),f(hb,e.bL,r,u))},i),l=t(yn,function(u){return t(re,function(v){return t(hl,t(qe,t(nn,e.fX,t(Ua,Ur(90),gr(u))),t(qe,v.cb,e.bL)),v)},f(yb,e.bL,r,u))},o);return ta(t(q$,t(te,function(u){return u.cb},io),We(g([c,l]))))}),xb=$(function(e,r){return{bM:r.bM,b$:r.b$,b4:e,cb:r.cb}}),Cb=$(function(e,r){var n=t(zr,e.dt,r.ce.gk),a=function(c){return t(re,xb(c),f(wb,r.ce.aT,n,c.en))},o=ta(t(q$,t(te,function(c){return c.cb},io),t(yn,a,r.fV)));if(o.$===1)return r;var i=o.a;return t(fb,i,V(r,{dk:Z(i.b4.cp),cj:t(Ji,15,t(z,i.bM,r.cj))}))}),co=$(function(e,r){return We(t(Y,e,r))}),lo=$(function(e,r){return f(Xr,$(function(n,a){return e(n)?t(z,n,a):a}),C,r)}),_l=$(function(e,r){var n=e.a,a=e.b,o=r.fX,i=t(F$,V$(e),r);if(i.$===1)return C;var c=i.a,l=t(dr,r.bL,c);if(I(l,o)<1){var u=sr(o*o-l*l),v=t(qe,t(nn,u,gr(e)),c),s=function(p){return t(Ha,t(ke,a,n),t(ke,p,n))>=0&&I(t(dr,n,p),t(dr,n,a))<1},m=t(qe,t(nn,-u,gr(e)),c);return t(lo,s,fe(l,o)?g([m]):g([m,v]))}else return C}),Pb=$(function(e,r){var n=e.a,a=e.b;return I(t(dr,n,r.bL),r.fX)<0&&I(t(dr,a,r.bL),r.fX)>-1?t(_l,w(a,n),r):t(_l,w(n,a),r)}),Sb=$(function(e,r){var n=r.a,a=w(w(e.ah,e.e8),w(n,gr(r))),o=a.a,i=o.a,c=o.b,l=a.b,u=l.a,v=l.b,s=t(mr,t(ke,u,i),c),m=t(mr,c,v),p=s/m,d=t(mr,t(ke,u,i),v),b=d/m;return!s&&!m?W:m&&b>=0&&p>=0&&p<=1?Z(t(qe,t(zr,b,c),i)):W}),Lb=$(function(e,r){var n=e.a;r.fX;var a=r.bL,o=t(mr,gr(e),t(ke,a,n))<0?1:-1;return t(Sb,{e8:t(Ua,o*Ur(90),gr(e)),ah:a},e)}),kb=function(e){var r=e.ce,n=$(function(i,c){var l=t(Lb,i,c);if(l.$)return c;var u=l.a;return V(c,{bL:t(qe,t(nn,c.fX,W$(i)),t(qe,t(ke,u,c.bL),c.bL))})}),a=t(lo,function(i){return!jt(t(Pb,i,r.aT))},t(co,t(te,function(i){return i.en},nc),e.fV)),o=f(Ae,n,r.aT,a);return V(e,{ce:V(r,{aT:o})})},zb=$(function(e,r){return V(r,{ce:e(r.ce)})}),Tb=$(function(e,r){return V(r,{gk:t(zr,1-e.dt*5*t(Ar,"friction",e),r.gk)})}),ac=x(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),Mb=function(e){var r=e.a,n=e.b;return w(r*Hr(n),r*Ir(n))},Db=function(e){return(e.f_?1:0)-(e.fz?1:0)},jb=Db,Ab=function(e){return(e.eI?1:0)-(e.ds?1:0)},Po=Ab,Bb=$(function(e,r){var n=t(Ar,"gas force",e),a=Mb(w(1,r.e9)),o=B$(t(zr,e.dt*n*Po(e.dL),a));return V(r,{e9:r.e9-jb(e.dL)*t(Ar,"direction change speed",e)*e.dt,ew:Po(e.dL)?f(ac,-14,14,r.ew+e.dt*1e3*Po(e.dL)):t(Ha,r.gk,a),gk:o(r.gk)})}),Fb=$(function(e,r){var n=r.aT;return V(r,{aT:V(n,{bL:t(qe,t(zr,e.dt,r.gk),r.aT.bL)})})}),Vb=$(function(e,r){return V(r,{f1:r.f1+e.dt*r.ew})}),Eb=function(e){return V(e,{gf:function(){var r=e.gf;if(r.b){var n=r.a;return t(dr,n,e.aT.bL)>1?t(z,e.aT.bL,e.gf):e.gf}else return g([e.aT.bL])}()})},Wb=$(function(e,r){return Eb(t(Fb,e,t(Vb,e,t(Tb,e,t(Bb,e,r)))))}),qb=$(function(e,r){return $b(kb(t(zb,Wb(e),t(Cb,e,r))))}),Rb=$(function(e,r){var n=t(qb,e,Ia(r.I));return V(r,{I:t(A$,Yt(n),r.I)})}),ga=function(e){return Ke(Rr*(e/180))},at=function(e){return e},dn=function(e){var r=e;return r},Nb=$(function(e,r){var n=e,a=r;return a.gq*n.gq+a.gu*n.gu+a.dg*n.dg}),le=$(function(e,r){var n=r;return e*n}),R$=function(e){var r=e;return r.cM},Gb=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.fL,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu+(a.dg-i.dg)*l.dg}),Hb=x(function(e,r,n){var a=e,o=r,i=n;return{gq:i.gq+o*a.gq,gu:i.gu+o*a.gu,dg:i.dg+o*a.dg}}),Ib=$(function(e,r){var n=Ki(r),a=e,o=a.fL,i=t(Nb,o,n);if(i){var c=R$(r),l=t(Gb,e,c),u=t(le,-1/i,l);return Z(f(Hb,n,u,c))}else return W}),Ub=$(function(e,r){return{gq:e,gu:r}}),yl=$(function(e,r){var n=e,a=r;return n*a}),Jb=function(e){var r=e;return r},wl=function(e){var r=e;return Jb(r.eT)},Ob=function(e){var r=e;return r.aU},Xb=function(e){var r=e,n=t(Qe,K(r.gq),t(Qe,K(r.gu),K(r.dg)));if(n){var a=r.dg/n,o=r.gu/n,i=r.gq/n,c=sr(i*i+o*o+a*a);return Z({gq:i/c,gu:o/c,dg:a/c})}else return W},N$=$(function(e,r){var n=r;return n/e}),ci=function(e){var r=e;return ia(r)},G$=sn({gq:0,gu:0,dg:-1}),Yb=$(function(e,r){var n=e,a=r;return a/n}),Zb=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gq:v.gq*a.gq+l.gq*a.gu+i.gq*a.dg,gu:v.gu*a.gq+l.gu*a.gu+i.gu*a.dg,dg:v.dg*a.gq+l.dg*a.gu+i.dg*a.dg}}),Bt=function(e){var r=e;return{gq:-r.gq,gu:-r.gu,dg:-r.dg}},li=function(e){var r=e;return Bt(Ln(r))},Qb=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.de,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),tc=x(function(e,r,n){var a=e,o=r,i=n;return{gq:a,gu:o,dg:i}}),Kb=E(function(e,r,n,a){var o=e,i=r,c=n,l=a,u=o.cM,v=u,s=o.dh,m=s,p=o.df,d=p,b=o.de,h=b;return{gq:v.gq+i*h.gq+c*d.gq+l*m.gq,gu:v.gu+i*h.gu+c*d.gu+l*m.gu,dg:v.dg+i*h.dg+c*d.dg+l*m.dg}}),e1=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.df,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),me=0,r1=x(function(e,r,n){var a=e,o=t(e1,wl(r),n),i=t(Qb,wl(r),n),c=a.dc,l=c,u=Ob(r);u.a;var v=u.b,s=a.cX;if(s.$){var b=s.a,h=t(Yb,v,b),y=S(Kb,l,t(yl,h,i),t(yl,h,o),me);return t(kr,y,li(a.dc))}else{var m=s.a,p=At(t(N$,m,t(le,.5,v))),d=t(Zb,l,t(er,G$,Xb(f(tc,i,o,p))));return t(kr,ci(a.dc),d)}}),ui=function(e){var r=e;return{gq:Hr(r),gu:Ir(r)}},n1=function(e){var r=e;return{gq:-r.gu,gu:r.gq}},a1=function(e){return e},t1=$(function(e,r){return a1({cM:r,de:e,df:n1(e)})}),o1=$(function(e,r){return t(t1,ui(e),r)}),i1=x(function(e,r,n){var a=e.a,o=e.b;return{eT:t(o1,r,n),aU:w(je(a),je(o))}}),Rn=function(e){var r=e;return r.gq},c1=$(function(e,r){var n=e,a=r;return{gq:n,gu:a}}),Nn=function(e){var r=e;return r.gu},Gn=function(e){var r=e;return r.dg},l1=E(function(e,r,n,a){var o=n.gq,i=n.gu,c=function(v){return f(Ne,dn(Rn(v)),dn(Nn(v)),dn(Gn(v)))},l=f(i1,w(at(r.go),at(r.fo)),ga(0),t(Ub,0,0)),u=t(c1,at(o),at(i));return t(re,c,t(Ib,a,f(r1,e,l,u)))}),u1=$(function(e,r){return{fL:e,cM:r}}),$1=$(function(e,r){var n=r;return t(u1,n.fL,t(la,e,n.cM))}),v1=$(function(e,r){return{fL:r,cM:e}}),s1=t(v1,Yr,ao),f1=E(function(e,r,n,a){return S(l1,r,n,a,t($1,f(tc,Le(0),Le(0),Le(e)),s1))}),d1=f1(0),m1=$(function(e,r){return V(r,{aI:t(er,r.aI,t(re,function(n){return t(qr,n.gq,n.gu)},f(d1,r.ao,e.aL,e.em)))})}),g1=$(function(e,r){var n=t(oa,"fix time steps",e)?V(e,{dt:.016}):e,a=r.aE?lb(n):wr;return t(ub,n,t(Rb,n,t(m1,n,a(r))))}),p1=$(function(e,r){var n=r;return V(n,{l:t(z,n.C,n.l),C:e})}),b1=$(function(e,r){var n=r;if(e.$)return n;var a=rc(n.U);return t(zn,p1(V(a,{fJ:a.fJ+" copy"})),n)}),h1=$(function(e,r){var n=r;if(e.$===4){var a=e.a;return t(zn,j$(function(o){return V(o,{fJ:a})}),n)}else return n}),_1=$(function(e,r){return{fJ:e,fR:r}}),y1=qf,w1=Lf,x1=$(function(e,r){var n=r;return V(n,{U:function(){var a=f(Zt,_1,t(j,"name",On),t(j,"page",n.eh));return t(p$,n.U,t(y1,t(B,function(o){if(o.b){var i=o.a,c=o.b;return se(t(T$,i,c))}else return w1("List of pages is empty")},xr(a)),e))}()})}),oc=function(e){var r=e;return ue(ce(r.l),ue(g([r.C]),r.q))},C1=$(function(e,r){var n=r;switch(e.$){case 6:return V(n,{c6:t(Au,2,t(fn,function(o){return kn(g([w("name",t$(o.fJ)),w("page",n.dw(o.fR))]))},oc(n.U)))});case 7:return t(x1,n.ca,n);case 8:var a=e.a;return V(n,{ca:a});default:return n}}),P1=function(e){var r=e,n=r.q;if(n.b){var a=n.a,o=n.b;return V(r,{q:o,l:t(z,a,r.l)})}else return V(r,{q:ce(r.l),l:C})},S1=$(function(e,r){var n=r;return e.$===2?t(zn,P1,n):n}),L1=function(e){var r=e,n=r.l;if(n.b){var a=n.a,o=n.b;return V(r,{q:t(z,a,r.q),l:o})}else return V(r,{q:C,l:ce(r.q)})},k1=$(function(e,r){var n=r;return e.$===3?t(zn,L1,n):n}),z1=function(e){var r=e,n=r.l;if(n.b){var a=n.a,o=n.b;return V(r,{l:o,C:a})}else{var i=r.q;if(i.b){var a=i.a,o=i.b;return V(r,{q:o,C:a})}else return r}},T1=$(function(e,r){var n=r;return e.$===1?t(zn,z1,n):n}),M1=$(function(e,r){var n=r,a=oc(n),o=t(za,Pr(a),e),i=t(Ui,o,a);if(i.b){var c=i.a,l=i.b;return{q:l,l:ce(t(Ji,o,a)),C:c}}else return n}),D1=$(function(e,r){var n=r;if(e.$===5){var a=e.a;return t(zn,M1(a),n)}else return n}),j1=$(function(e,r){return t(C1,e,t(h1,e,t(D1,e,t(k1,e,t(S1,e,t(T1,e,t(b1,e,r)))))))}),A1=x(function(e,r,n){switch(r.$){case 0:return V(n,{aE:!n.aE,aj:ii});case 1:return V(n,{aj:D$(C)});case 2:var a=r.a;return V(n,{I:t(A$,M$(a),n.I),aj:ii});default:var o=r.a;return V(n,{I:t(j1,o,n.I)})}}),uo=function(e){return e},B1=function(e){var r=e;return r},F1=function(e){var r=f(ac,1667,25e3,B1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return uo({gq:n,gu:a})},H$=function(e){return e},V1=function(e){return{$:0,a:e}},E1=V1,W1={$:3},q1=W1,R1=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),N1=R1,G1=function(e){return{$:1,a:e}},H1=G1,I1=function(e){return t(Tr,"height",Ve(e))},U1=function(e){return sd(pd(e))},J1=U1,O1=function(e){return{$:2,a:e}},X1=O1,Y1=function(e){return t(ln,"",e)},Z1=function(e){var r=e.a,n=e.b,a=e.c,o=e.d,i=function(l){return rr(l*1e3)/1e3},c=function(l){return rr(l*1e4)/100};return Y1(g(["rgba(",$e(c(r)),"%,",$e(c(n)),"%,",$e(c(a)),"%,",$e(i(o)),")"]))},Q1=$(function(e,r){switch(r.$){case 0:return t(dm,e,r);case 1:return t(mm,e,r);case 2:return t(gm,e,r);case 3:return t(pm,e,r);case 4:return t(bm,e,r);default:return t(hm,e,r)}}),K1=$(function(e,r){switch(r.$){case 0:return t(Hd,e,r);case 1:return t(Id,e,r);case 2:return t(Ud,e,r);case 3:return t(Jd,e,r);case 4:return t(Od,e,r);case 5:return t(Xd,e,r);case 6:return t(Yd,e,r);case 7:return t(Zd,e,r);default:return Qd(e)}}),eh=x(function(e,r,n){return f(fm,e,r,n)}),xl=function(e){var r=e;return r},ua=Tm,So=S(ua,1,1,1,1),pr=x(function(e,r,n){return t(Y,function(a){return t(a,r,n)},e)}),rh=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),nh=$(function(e,r){var n=e,a=r.gq,o=r.gu;return f(rh,n*a/o,n,n*(1-a-o)/o)}),Ja=Cm,ah=function(e){var r=e.a,n=e.b,a=e.c;return f(Ja,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},$o=$(function(e,r){return ah(t(nh,e,r))}),I$=$(function(e,r){return{dJ:fe(e.dJ,r.dJ),r:e.r*r.r+e.s*r.u+e.t*r.x,s:e.r*r.s+e.s*r.v+e.t*r.y,t:e.r*r.t+e.s*r.w+e.t*r.z,u:e.u*r.r+e.v*r.u+e.w*r.x,v:e.u*r.s+e.v*r.v+e.w*r.y,w:e.u*r.t+e.v*r.w+e.w*r.z,x:e.x*r.r+e.y*r.u+e.z*r.x,y:e.x*r.s+e.y*r.v+e.z*r.y,z:e.x*r.t+e.y*r.w+e.z*r.z,J:r.J+(e.J*r.r+e.K*r.u+e.L*r.x)*r.b8,K:r.K+(e.J*r.s+e.K*r.v+e.L*r.y)*r.b8,L:r.L+(e.J*r.t+e.K*r.w+e.L*r.z)*r.b8,b8:e.b8*r.b8}}),hr=Fm,th=function(e){return hr({dS:e.r,dT:e.u,dU:e.x,dV:e.J,dW:e.s,dX:e.v,dY:e.y,dZ:e.K,d_:e.t,d$:e.w,d0:e.z,d1:e.L,d2:0,d3:0,d4:0,d5:1})},Lo=ye(function(e,r,n,a,o){var i=a.dJ?1:-1,c=S(ua,a.b8,a.b8,a.b8,i);return Ge(o,e,c,th(a),a.dJ,r,n)}),U$=lr(function(e,r,n,a,o,i){e:for(;;)switch(o.$){case 0:return i;case 5:var c=o.a,l=o.b,u=e,v=r,s=n,m=t(I$,c,a),p=l,d=i;e=u,r=v,n=s,a=m,o=p,i=d;continue e;case 1:var b=o.b,h=t(z,L(Lo,e,r,n,a,b),i.O);return{O:h,X:i.X,f3:i.f3};case 3:var y=o.b,P=t(z,L(Lo,e,r,n,a,y),i.X);return{O:i.O,X:P,f3:i.f3};case 2:var _=o.a,k=t(z,L(Lo,e,r,n,a,_),i.f3);return{O:i.O,X:i.X,f3:k};default:var A=o.a;return f(Ae,S(U$,e,r,n,a),i,A)}}),oh=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),J$=oh,ic=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ih=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(ic,518,r,n,a)},ch=$(function(e,r){return{$:6,a:e,b:r}}),lh=ch,O$=g([ih({Y:1,Z:0,ab:!1}),S(J$,!1,!1,!1,!1),t(lh,0,1)]),Xn=519,cc=8,X$=15,Hn=7681,uh={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ve=Gd,$h=$(function(e,r){return{$:0,a:e,b:r}}),vh=$h({dv:1,dF:0,ee:5}),Ze=wm,sh=vh(g([{ep:t(Ze,-1,-1)},{ep:t(Ze,1,-1)},{ep:t(Ze,-1,1)},{ep:t(Ze,1,1)}])),fh={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ep"},uniforms:{}},dh=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},lc=x(function(e,r,n){var a=e.cZ,o=e.cA,i=e.dd,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return t(te,c(v.bw),t(te,l(v.bj),t(te,l(v.bE),l(v.bF))))};return t(u,n,t(u,r,f(dh,a,o,i)))}),uc=function(e){return f(lc,{cA:e.cA,cZ:e.cZ,dd:e.dd},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF})},$c=function(e){return L(ve,g([uc(e),S(J$,!1,!1,!1,!1)]),fh,uh,sh,{})},mh=$c({bj:Hn,cA:0,cZ:cc,bw:Xn,dd:X$,bE:Hn,bF:Hn}),gh=516,Cl=5386,Ee=7680,ph=function(e){return t(en,2,e+4)},Y$=function(e){return $c({bj:Ee,cA:X$,cZ:cc,bw:gh,dd:ph(e),bE:Cl,bF:Cl})},bh=x(function(e,r,n){return We(g([f(pr,e,n,O$),g([Y$(r),mh])]))}),hh=$(function(e,r){return We(t(Xt,bh(e),r))}),_h=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(ic,513,r,n,a)},yh=_h({Y:1,Z:0,ab:!0}),wh=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},xh=function(e){var r=e.b6,n=e.bR,a=e.bJ,o=e.bG,i=e.bN,c=e.aR,l=$(function(u,v){var s=u.a,m=u.b,p=u.c,d=v.a,b=v.b,h=v.c;return wh(s)(m)(p)(d)(b)(h)(r)(n)(a)(o)});return t(l,i,c)},Ch=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Pl=$(function(e,r){var n=e,a=r;return f(Ch,32774,n,a)}),Ph=1,Sl=771,Sh=770,vc=xh({bG:0,aR:t(Pl,Ph,Sl),bJ:0,bN:t(Pl,Sh,Sl),bR:0,b6:0}),Bn=g([yh,vc]),Lh=function(e){var r=e;return r.d7},kh=function(e){var r=e;return r.d8},Z$=function(e){var r=e;return r.d9},zh=function(e){var r=e;return r.ea},Th=function(e){var r=e;return r.eb},Q$=function(e){var r=e;return r.ec},De=$(function(e,r){var n=e,a=r;return a-n}),K$=function(e){return T(t(De,zh(e),Lh(e)),t(De,Th(e),kh(e)),t(De,Q$(e),Z$(e)))},Mh=function(e){return e},Dh=function(e){return ca({cM:Mh({gq:e.J,gu:e.K,dg:e.L}),de:sn({gq:e.r,gu:e.s,dg:e.t}),df:sn({gq:e.u,gu:e.v,dg:e.w}),dh:sn({gq:e.x,gu:e.y,dg:e.z})})},ko=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gq:a.gq*v.gq+a.gu*v.gu+a.dg*v.dg,gu:a.gq*l.gq+a.gu*l.gu+a.dg*l.dg,dg:a.gq*i.gq+a.gu*i.gu+a.dg*i.dg}}),ev=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=a.gq-i.gq,l=a.gu-i.gu,u=a.dg-i.dg,v=n.dh,s=v,m=n.df,p=m,d=n.de,b=d;return{gq:c*b.gq+l*b.gu+u*b.dg,gu:c*p.gq+l*p.gu+u*p.dg,dg:c*s.gq+l*s.gu+u*s.dg}}),rv=$(function(e,r){return{cM:t(ev,e,ia(r)),de:t(ko,e,Pn(r)),df:t(ko,e,Sn(r)),dh:t(ko,e,Ln(r))}}),pt=x(function(e,r,n){return{gq:e,gu:r,dg:n}}),Ft=function(e){var r=e;return r},be=$(function(e,r){var n=e,a=r;return t(Qe,n,a)}),bt=$(function(e,r){return I(e,r)<0?e:r}),xe=$(function(e,r){var n=e,a=r;return t(bt,n,a)}),jh=$(function(e,r){var n=Ft(r),a=Ft(e);return{d7:t(be,a.d7,n.d7),d8:t(be,a.d8,n.d8),d9:t(be,a.d9,n.d9),ea:t(xe,a.ea,n.ea),eb:t(xe,a.eb,n.eb),ec:t(xe,a.ec,n.ec)}}),cr=function(e){var r=e;return r},Ah=function(e){var r=e;return T(r.gq,r.gu,r.dg)},mn=$(function(e,r){var n=e,a=r;return a+n}),Bh=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=gt(je(a)),c=gt(je(n)),l=gt(je(o)),u=Ah(r),v=u.a,s=u.b,m=u.c;return{d7:t(mn,c,v),d8:t(mn,i,s),d9:t(mn,l,m),ea:t(De,c,v),eb:t(De,i,s),ec:t(De,l,m)}}),Ll=E(function(e,r,n,a){var o=n.e_,i=2*n.fm*r,c=2*n.fl*r,l=2*n.fk*r,u=o.dg*r,v=o.gu*r,s=o.gq*r,m=cr(Ln(e)),p=K(l*m.gq)+K(c*m.gu)+K(i*m.dg),d=cr(Sn(e)),b=K(l*d.gq)+K(c*d.gu)+K(i*d.dg),h=cr(Pn(e)),y=K(l*h.gq)+K(c*h.gu)+K(i*h.dg),P=t(Bh,T(y,b,p),t(ev,e,f(pt,s,v,u)));if(a.$)return Z(P);var _=a.a;return Z(t(jh,_,P))}),$i=E(function(e,r,n,a){e:for(;;)if(a.b){var o=a.a,i=a.b;switch(o.$){case 0:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 1:var c=o.a,l=S(Ll,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 2:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 3:var c=o.a,l=S(Ll,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 4:var u=o.a,d=e,b=r,h=S($i,e,r,n,u),y=i;e=d,r=b,n=h,a=y;continue e;default:var v=o.a,s=o.b,m=t(rv,Dh(v),e),p=r*v.b8,d=e,b=r,h=S($i,m,p,n,g([s])),y=i;e=d,r=b,n=h,a=y;continue e}}else return n}),Tn=Pm,Mn=Sm,Dn=Lm,nv=function(e){return{$:4,a:e}},Fh=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,o=a,i=t(z,n,r);e=o,r=i;continue e}else return r}),Oa=function(e){return nv(t(Fh,e,C))},Vh={dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:0,K:0,L:0,b8:1},kl=$c({bj:Hn,cA:0,cZ:cc,bw:Xn,dd:255,bE:Hn,bF:Hn}),Eh=function(e){var r=e,n=t(Qe,K(r.gq),t(Qe,K(r.gu),K(r.dg)));if(n){var a=r.dg/n,o=r.gu/n,i=r.gq/n,c=sr(i*i+o*o+a*a);return c*n}else return me},Ye={bJ:0,eZ:!1,bR:0,cV:0,b6:0,c8:0,gq:0,gu:0,dg:0},ar=$(function(e,r){var n=e,a=r;return hr({dS:n.gq,dT:n.b6,dU:a.gq,dV:a.b6,dW:n.gu,dX:n.bR,dY:a.gu,dZ:a.bR,d_:n.dg,d$:n.bJ,d0:a.dg,d1:a.bJ,d2:n.c8,d3:n.cV,d4:a.c8,d5:a.cV})}),pa=w({bo:t(ar,Ye,Ye),bW:t(ar,Ye,Ye),bX:t(ar,Ye,Ye),bY:t(ar,Ye,Ye)},S(ua,0,0,0,0)),av=514,tv=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(ic,515,r,n,a)},ov=240,Wh=g([tv({Y:1,Z:0,ab:!0}),uc({bj:Ee,cA:ov,cZ:0,bw:av,dd:0,bE:Ee,bF:Ee}),vc]),qh=$(function(e,r){var n=e,a=r.fK,o=r.fh,i=r.eS,c=je(a),l=c,u=je(o),v=u,s=n.cX;if(s.$){var p=s.a;return Xo(v)?hr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:0,d1:-1,d2:0,d3:0,d4:0,d5:1}):hr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:-2/(v-l),d1:-(v+l)/(v-l),d2:0,d3:0,d4:0,d5:1})}else{var m=s.a;return Xo(v)?hr({dS:1/(i*m),dT:0,dU:0,dV:0,dW:0,dX:1/m,dY:0,dZ:0,d_:0,d$:0,d0:-1,d1:-2*l,d2:0,d3:0,d4:-1,d5:0}):hr({dS:1/(i*m),dT:0,dU:0,dV:0,dW:0,dX:1/m,dY:0,dZ:0,d_:0,d$:0,d0:-(v+l)/(v-l),d1:-2*v*l/(v-l),d2:0,d3:0,d4:-1,d5:0})}}),tt=$(function(e,r){return(1&e>>r)===1?0:1}),Rh=function(e){return g([tv({Y:1,Z:0,ab:!0}),uc({bj:Ee,cA:ov,cZ:e,bw:av,dd:0,bE:Ee,bF:Ee}),vc])},Nh=x(function(e,r,n){return We(t(Y,function(a){var o=a<<4,i=S(ua,t(tt,a,0),t(tt,a,1),t(tt,a,2),t(tt,a,3));return f(pr,e,w(r,i),Rh(o))},t(bn,1,t(en,2,n)-1)))}),In=function(e){var r=e;return r},Gh=Vm,iv=sn({gq:0,gu:1,dg:0}),sc=iv,Hh={cM:Yr,de:ec,df:sc,dh:ao},Xa=function(e){var r=e;return r},Ih=function(e){var r=Xa(ia(e)),n=cr(Ln(e)),a=cr(Sn(e)),o=cr(Pn(e));return hr({dS:o.gq,dT:a.gq,dU:n.gq,dV:r.gq,dW:o.gu,dX:a.gu,dY:n.gu,dZ:r.gu,d_:o.dg,d$:a.dg,d0:n.dg,d1:r.dg,d2:0,d3:0,d4:0,d5:1})},Uh=$(function(e,r){var n=r;return Ih(t(rv,n,e))}),Jh=function(e){return t(Uh,Hh,e)},Oh=function(e){var r=e;return r.dc},Xh=function(e){var r=e;return Pn(r)},Yh=function(e){var r=e;return Sn(r)},Zh=function(e){var r=Oh(e.ao),n=ca({cM:ci(r),de:Xh(r),df:Yh(r),dh:Bt(li(r))}),a=Oa(e.aZ),o=a,i=S($i,n,1,W,g([o]));if(i.$===1)return C;var c=i.a,l=Jh(r),u=t(le,.99,t(be,je(e.$7),At(Z$(c)))),v=K$(c),s=v.a,m=v.b,p=v.c,d=Eh(f(tc,s,m,p)),b=t(le,1.01,t(mn,d,At(Q$(c)))),h=t(qh,e.ao,{eS:e.eS,fh:b,fK:u}),y=Gh(h).d5,P=y?cr(Bt(li(r))):In(ci(r)),_=function(){var ge=e.ge;switch(ge.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var Pe=ge.a;return w(3,Pe);case 4:var Pe=ge.a;return w(4,Pe);default:return w(5,0)}}(),k=_.a,A=_.b,H=e.ff,G=H,N=t($o,G,e.gn),U=N,J=hr({dS:0,dT:P.gq,dU:Tn(U),dV:e.eD,dW:0,dX:P.gu,dY:Mn(U),dZ:dn(d),d_:0,d$:P.dg,d0:Dn(U),d1:k,d2:0,d3:y,d4:0,d5:A}),q=Ge(U$,J,l,h,Vh,o,{O:C,X:C,f3:C}),Q=e.fC;switch(Q.$){case 0:var ae=Q.a;return We(g([f(pr,q.O,w(ae,So),Bn),f(pr,q.X,pa,Bn)]));case 1:var ae=Q.a;return We(g([f(pr,q.O,pa,Bn),g([kl]),f(pr,q.f3,ae.bo,O$),g([Y$(0)]),f(pr,q.O,w(ae,So),Wh),f(pr,q.X,pa,Bn)]));default:var _e=Q.a,we=Q.b;return We(g([f(pr,q.O,w(we,So),Bn),g([kl]),t(hh,q.f3,_e),f(Nh,q.O,we,Pr(_e)),f(pr,q.X,pa,Bn)]))}},Qh=function(e){return t(Tr,"width",Ve(e))},cv=$(function(e,r){var n=g([H1(1),X1(0),E1(!0),S(N1,0,0,0,0)]),a=function(){var k=e.eQ;switch(k.$){case 0:return T(n,"0",1);case 1:return T(t(z,q1,n),"1",1);default:var A=k.a;return T(n,"0",A)}}(),o=a.a,i=a.b,c=a.c,l=e.aU,u=l.a,v=l.b,s=xl(v),m=t(oe,"height",Ve(s)+"px"),p=xl(u),d=p/s,b=t(co,function(k){return Zh({eS:d,ao:e.ao,$7:e.$7,aZ:k.aZ,ff:k.ff,fC:k.fC,eD:c,ge:k.ge,gn:k.gn})},r),h=t(oe,"width",Ve(p)+"px"),y=e.eU,P=y,_=Z1(P);return f(J1,"div",g([t(oe,"padding","0px"),h,m]),g([w(i,f(eh,o,g([Qh(rr(p*c)),I1(rr(s*c)),h,m,t(oe,"display","block"),t(oe,"background-color",_)]),b))]))}),Kh=function(e){return{$:2,a:e}},lv=function(e){return Kh(e)},e3=function(e){return t(cv,{eQ:lv(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU},g([{aZ:e.aZ,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},Vt=function(e){return e},r3=function(e){var r=e;return r},fc=function(e){var r=e;return r3(r.eT)},uv=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),n3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),$v=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),vv=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),a3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),t3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),o3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),dc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return S(o3,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return S(uv,n,r,o,1);case 3:var n=e.a,a=e.b,o=e.c;return S(n3,n,a,o,1);case 4:var n=e.a,a=e.b,o=e.c;return S($v,n,a,o,1);case 5:var n=e.a,a=e.b,o=e.c;return S(t3,n,a,o,1);case 6:var n=e.a,a=e.b,o=e.c;return S(vv,n,a,o,1);case 7:var n=e.a,a=e.b,o=e.c;return S(a3,n,a,o,1);case 8:return e;case 9:return e;default:return e}},mc={$:0},i3=ie(function(e,r,n,a,o,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Ft(c(u)),m=t(xe,s.ea,e),p=t(be,s.d7,r),d=t(xe,s.eb,n),b=t(be,s.d8,a),h=t(xe,s.ec,o),y=t(be,s.d9,i),P=c,_=v;e=m,r=p,n=d,a=b,o=h,i=y,c=P,l=_;continue e}else return{d7:r,d8:a,d9:i,ea:e,eb:n,ec:o}}),c3=x(function(e,r,n){var a=Ft(e(r));return Ht(i3,a.ea,a.d7,a.eb,a.d8,a.ec,a.d9,e,n)}),ya=$(function(e,r){var n=e,a=r;return I(a,n)<1}),sv=function(e){return t(ya,e.d7,e.ea)&&t(ya,e.d8,e.eb)&&t(ya,e.d9,e.ec)?e:{d7:t(be,e.ea,e.d7),d8:t(be,e.eb,e.d8),d9:t(be,e.ec,e.d9),ea:t(xe,e.ea,e.d7),eb:t(xe,e.eb,e.d8),ec:t(xe,e.ec,e.d9)}},Ma=function(e){var r=e;return r},fv=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=Rn(n),c=Nn(n),l=Gn(n),u=Rn(a),v=Nn(a),s=Gn(a),m=Rn(o),p=Nn(o),d=Gn(o);return sv({d7:t(be,i,t(be,u,m)),d8:t(be,c,t(be,v,p)),d9:t(be,l,t(be,s,d)),ea:t(xe,i,t(xe,u,m)),eb:t(xe,c,t(xe,v,p)),ec:t(xe,l,t(xe,s,d))})},dv=km,Ie=function(e){return dv(Xa(e))},mv=function(e){var r=e;return r},vo=function(e){return dv(mv(e))},l3=$(function(e,r){var n=e,a=r;return{gq:a.gu*n.dg-a.dg*n.gu,gu:a.dg*n.gq-a.gq*n.dg,dg:a.gq*n.gu-a.gu*n.gq}}),vi=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu,dg:a.dg-n.dg}}),gv=function(e){return e},u3={gq:0,gu:0,dg:0},$3=$(function(e,r){var n=e,a=r,o=t(Qe,K(a.gq),t(Qe,K(a.gu),K(a.dg)));if(o){var i=a.dg/o,c=a.gu/o,l=a.gq/o,u=sr(l*l+c*c+i*i);return{gq:n*l/u,gu:n*c/u,dg:n*i/u}}else return u3}),v3=$3(gv(1)),pv=x(function(e,r,n){var a=t(vi,r,n),o=t(vi,e,r);return v3(t(l3,a,o))}),s3=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=vo(f(pv,n,a,o));return T({o:i,ep:Ie(n)},{o:i,ep:Ie(a)},{o:i,ep:Ie(o)})},f3=$(function(e,r){return{$:2,a:e,b:r}}),bv=f3({dv:3,dF:0,ee:4}),d3=function(e){if(e.b){var r=e.a,n=e.b,a=bv(t(Y,s3,e)),o=f(c3,fv,r,n);return S(uv,o,e,a,0)}else return mc},Xe=x(function(e,r,n){return T(e,r,n)}),Me=x(function(e,r,n){var a=e,o=r,i=n;return{gq:a,gu:o,dg:i}}),hv=function(){var e=Le(1),r=Le(1),n=Le(1),a=t(le,-.5,e),o=t(le,-.5,r),i=t(le,-.5,n),c=f(Me,i,o,a),l=t(le,.5,e),u=f(Me,i,o,l),v=t(le,.5,r),s=f(Me,i,v,a),m=f(Me,i,v,l),p=t(le,.5,n),d=f(Me,p,o,a),b=f(Me,p,v,a),h=f(Me,p,o,l),y=f(Me,p,v,l);return dc(d3(g([f(Xe,c,b,d),f(Xe,c,s,b),f(Xe,u,h,y),f(Xe,u,y,m),f(Xe,d,b,y),f(Xe,d,y,h),f(Xe,c,m,s),f(Xe,c,u,m),f(Xe,c,d,h),f(Xe,c,h,u),f(Xe,s,y,b),f(Xe,s,m,y)])))}(),ot={$:0},m3=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),g3=x(function(e,r,n){var a=r.a,o=r.b,i=r.c,c=e(i),l=e(o),u=e(a),v=vo(f(pv,u,l,c)),s={o:v,ep:Ie(u)},m={o:v,ep:Ie(l)},p={o:v,ep:Ie(c)};return t(z,s,t(z,m,t(z,p,n)))}),gc=function(e){var r=e;return r.E},p3=E(function(e,r,n,a){if(r.$===1)return W;var o=r.a;if(n.$===1)return W;var i=n.a;if(a.$===1)return W;var c=a.a;return Z(f(e,o,i,c))}),wn=4294967295>>>32-fr,Da=zs,b3=x(function(e,r,n){e:for(;;){var a=wn&r>>>e,o=t(Da,a,n);if(o.$){var v=o.a;return t(Da,wn&r,v)}else{var i=o.a,c=e-fr,l=r,u=i;e=c,r=l,n=u;continue e}}}),_v=function(e){return e>>>5<<5},Fr=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d;return e<0||I(e,n)>-1?W:I(e,_v(n))>-1?Z(t(Da,wn&e,i)):Z(f(b3,a,e,o))}),pc=function(e){var r=e;return r.am},zo=$(function(e,r){return t(Fr,e,pc(r))}),yv=function(e){var r=function(n){var a=n.a,o=n.b,i=n.c;return S(p3,x(function(c,l,u){return T(c,l,u)}),t(zo,a,e),t(zo,o,e),t(zo,i,e))};return t(yn,r,gc(e))},h3=x(function(e,r,n){e:for(;;){var a=t(qi,he,e),o=a.a,i=a.b;if(I(Sr(o),he)<0)return t(Ri,!0,{A:r,m:n,p:o});var c=i,l=t(z,_n(o),r),u=n+1;e=c,r=l,n=u;continue e}}),ja=function(e){return e.b?f(h3,e,C,0):Wi},_3=x(function(e,r,n){return e(r(n))}),y3=$(function(e,r){return!t(Yu,t(_3,pg,e),r)}),bc=function(e){var r=e.a;return r},hc=$(function(e,r){var n=bc(e),a=function(o){var i=o.a,c=o.b,l=o.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return t(y3,a,r)?{E:r,am:e}:{E:t(lo,a,r),am:e}}),w3=x(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ya=w3({dv:1,dF:3,ee:4}),ht=$(function(e,r){var n=In(r),a=In(e);return w(T(a.gq,a.gu,a.dg),T(n.gq,n.gu,n.dg))}),zl=f(Ja,0,0,0),To=lr(function(e,r,n,a,o,i){var c=i.a,l=i.b,u=i.c,v=t(aa,t(ht,e,r),o);if(v.$){var m={o:zl,ep:Ie(r)},p={o:zl,ep:Ie(e)},d=u+1,b=u;return T(t(z,T(n,b,d),t(z,T(n,d,a),c)),t(z,m,t(z,p,l)),u+2)}else{var s=v.a;return T(t(z,T(n,s,a),c),l,u)}}),x3=ye(function(e,r,n,a,o){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),p=e(c),d=a+2,b=a+1,h=a,y=e,P=r,_=v,k=a+3,A=Ge(To,s,p,d,h,r,Ge(To,m,s,b,d,r,Ge(To,p,m,h,b,r,o)));e=y,r=P,n=_,a=k,o=A;continue e}else{var H=o,G=H.a,N=H.b;return w(G,ce(N))}}),C3=ye(function(e,r,n,a,o){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),p=e(c),d=n+2,b=n+1,h=n,y=f(vn,t(ht,p,s),d,f(vn,t(ht,s,m),b,f(vn,t(ht,m,p),h,o))),P=t(z,T(h,b,d),a),_=e,k=v,A=n+3,H=P,G=y;e=_,r=k,n=A,a=H,o=G;continue e}else return T(a,o,n)}),cn=x(function(e,r,n){var a=yv(n),o=f(Xr,g3(r),C,a),i=L(C3,r,a,0,C,oo),c=i.a,l=i.b,u=i.c,v=L(x3,r,l,a,0,T(c,C,u)),s=v.a,m=v.b,p=jt(m)?o:ue(o,m);return f(m3,e,t(hc,ja(p),s),t(Ya,p,s))}),si=function(e){return{E:t(Y,function(r){return T(3*r,3*r+1,3*r+2)},t(bn,0,Pr(e)-1)),am:ja(We(t(Y,function(r){var n=r.a,a=r.b,o=r.c;return g([n,a,o])},e)))}},wv=function(e){switch(e.$){case 0:return ot;case 1:var a=e.a,r=e.b,n=t(Y,Ma,r);return f(cn,a,wr,si(n));case 2:var a=e.a,r=e.b,n=t(Y,Ma,r);return f(cn,a,wr,si(n));case 3:var a=e.a,o=e.b;return f(cn,a,wr,o);case 4:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 5:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 6:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 7:var a=e.a,o=e.b;return f(cn,a,function(i){return i.ep},o);case 8:return ot;case 9:return ot;default:return ot}},Tl=wv(hv),_c=function(e){var r=e;return r.aU},xv={$:0},D=xv,Se=$(function(e,r){return{$:1,a:e,b:r}}),P3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bO"}},S3=1029,L3=function(e){return{$:5,a:e}},Cv=function(e){var r=e;return L3(r)},k3=Cv(S3),z3=1028,T3=Cv(z3),Ue=x(function(e,r,n){return r===1?e?t(z,k3,n):t(z,T3,n):n}),Pv={src:`
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
    `,attributes:{position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Mo=E(function(e,r,n,a){return t(Se,r,ie(function(o,i,c,l,u,v,s,m){return L(ve,f(Ue,l,a,m),Pv,P3,n,{bO:e,b:c,c:i,d:v,e:o,f:u})}))}),yc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aD"}},Sv={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Dr=E(function(e,r,n,a){return t(Se,r,ie(function(o,i,c,l,u,v,s,m){return L(ve,f(Ue,l,a,m),Sv,yc,n,{aD:e,b:c,c:i,d:v,e:o,f:u})}))}),Lv=$(function(e,r){return{$:3,a:e,b:r}}),M3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aD",pointRadius:"b3",sceneProperties:"e"}},kv={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b3",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},D3=E(function(e,r,n,a){return t(Lv,n,ie(function(o,i,c,l,u,v,s,m){return L(ve,m,kv,M3,a,{aD:e,b:c,c:i,b3:r,d:v,e:o,f:u})}))}),wc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aX",sceneProperties:"e"}},Za=function(e){var r=e;return r},so=zm,jr=ye(function(e,r,n,a,o){return t(Se,n,ie(function(i,c,l,u,v,s,m,p){return L(ve,f(Ue,u,o,p),Sv,wc,a,{aX:t(so,Za(r),e),b:l,c,d:s,e:i,f:v})}))}),j3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aX",pointRadius:"b3",sceneProperties:"e"}},A3=ye(function(e,r,n,a,o){return t(Lv,a,ie(function(i,c,l,u,v,s,m,p){return L(ve,p,kv,j3,o,{aX:t(so,Za(r),e),b:l,c,b3:n,d:s,e:i,f:v})}))}),zv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",materialColor:"cB",sceneProperties:"e",viewMatrix:"f"}},Tv={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},it=E(function(e,r,n,a){return t(Se,r,ie(function(o,i,c,l,u,v,s,m){var p=s.a,d=s.b;return L(ve,f(Ue,l,a,m),Tv,zv,n,{R:d,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cB:e,b:c,c:i,d:v,e:o,f:u})}))}),Mv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",materialColorTexture:"cC",normalMapTexture:"a4",sceneProperties:"e",useNormalMap:"a9",viewMatrix:"f"}},Dv={src:`
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
    `,attributes:{normal:"o",position:"ep",tangent:"eF",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},B3=lr(function(e,r,n,a,o,i){return t(Se,a,ie(function(c,l,u,v,s,m,p,d){var b=p.a,h=p.b;return L(ve,f(Ue,v,i,d),Dv,Mv,o,{R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cC:e,b:u,c:l,a4:r,d:m,e:c,a9:n,f:s})}))}),jv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"ch",constantBaseColor:"ck",constantMetallic:"cl",constantRoughness:"cm",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallicTexture:"cG",normalMapTexture:"a4",roughnessTexture:"c1",sceneProperties:"e",useNormalMap:"a9",viewMatrix:"f"}},F3=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return t(Se,u,ie(function(m,p,d,b,h,y,P,_){var k=P.a,A=P.b;return L(ve,f(Ue,b,s,_),Dv,jv,v,{ch:e,ck:r,cl:i,cm:a,R:A,bo:k.bo,bW:k.bW,bX:k.bX,bY:k.bY,cG:o,b:d,c:p,a4:c,d:y,c1:n,e:m,a9:l,f:h})}))}}}}}}}}}}},Av={src:`
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
    `,attributes:{},uniforms:{baseColor:"cg",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallic:"cF",roughness:"c0",sceneProperties:"e",viewMatrix:"f"}},ct=lr(function(e,r,n,a,o,i){return t(Se,a,ie(function(c,l,u,v,s,m,p,d){var b=p.a,h=p.b;return L(ve,f(Ue,v,i,d),Tv,Av,o,{cg:e,R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cF:n,b:u,c:l,d:m,c0:r,e:c,f:s})}))}),V3=function(e){return{$:0,a:e}},Ml=$(function(e,r){return{$:1,a:e,b:r}}),wa=$(function(e,r){if(r.$){var n=r.a.D;return w(n,1)}else return r.a,w(e,0)}),E3=function(e){return S(ua,Tn(e),Mn(e),Dn(e),1)},xc=S(ua,0,0,0,0),_t=$(function(e,r){if(r.$){var a=r.a.D;return w(a,xc)}else{var n=r.a;return w(e,E3(n))}}),Bv=$(function(e,r){var n=w(e,r);if(n.a.$){var o=n.a.a.D;return t(Ml,w(o,xc),t(wa,o,r))}else if(n.b.$){var o=n.b.a.D;return t(Ml,t(_t,o,e),t(wa,o,r))}else{var a=n.a.a;return n.b.a,V3(a)}}),W3=x(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lt=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),q3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),R3=function(e){return t(Ze,e,1)},fi=t(Ze,0,0),Fn=$(function(e,r){if(r.$){var a=r.a.D;return w(a,fi)}else{var n=r.a;return w(e,R3(n))}}),Fv=E(function(e,r,n,a){var o=S(q3,e,r,n,a);if(o.a.$){var u=o.a.a.D;return S(lt,w(u,xc),t(Fn,u,r),t(Fn,u,n),t(wa,u,a))}else if(o.b.$){var u=o.b.a.D;return S(lt,t(_t,u,e),w(u,fi),t(Fn,u,n),t(wa,u,a))}else if(o.c.$){var u=o.c.a.D;return S(lt,t(_t,u,e),t(Fn,u,r),w(u,fi),t(wa,u,a))}else if(o.d.$){var u=o.d.a.D;return S(lt,t(_t,u,e),t(Fn,u,r),t(Fn,u,n),w(u,1))}else{var i=o.a.a,c=o.b.a,l=o.c.a;return o.d.a,f(W3,i,c,l)}}),N3={src:`
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
    `,attributes:{},uniforms:{backlight:"cd",colorTexture:"bO",sceneProperties:"e"}},Do=ye(function(e,r,n,a,o){return t(Se,n,ie(function(i,c,l,u,v,s,m,p){return L(ve,f(Ue,u,o,p),Pv,N3,a,{cd:Za(r),bO:e,b:l,c,d:s,e:i,f:v})}))}),Vv={src:`
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
    `,attributes:{normal:"o",position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},G3=E(function(e,r,n,a){return t(Se,r,ie(function(o,i,c,l,u,v,s,m){var p=s.a,d=s.b;return L(ve,f(Ue,l,a,m),Vv,Mv,n,{R:d,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cC:e,b:c,c:i,a4:e,d:v,e:o,a9:0,f:u})}))}),H3=wi(function(e,r,n,a,o,i,c,l,u){return t(Se,c,ie(function(v,s,m,p,d,b,h,y){var P=h.a,_=h.b;return L(ve,f(Ue,p,u,y),Vv,jv,l,{ch:e,ck:r,cl:i,cm:a,R:_,bo:P.bo,bW:P.bW,bX:P.bX,bY:P.bY,cG:o,b:m,c:s,a4:e,d:b,c1:n,e:v,a9:0,f:d})}))}),Aa=x(function(e,r,n){var a=e,o=r;return n<=.5?a+n*(o-a):o+(1-n)*(a-o)}),I3=function(e){var r=e;return f(Aa,r.ea,r.d7,.5)},U3=function(e){var r=e;return f(Aa,r.eb,r.d8,.5)},J3=function(e){var r=e;return f(Aa,r.ec,r.d9,.5)},O3=function(e){return f(Me,I3(e),U3(e),J3(e))},O=function(e){var r=K$(e),n=r.a,a=r.b,o=r.c;return{e_:Xa(O3(e)),fk:n/2,fl:a/2,fm:o/2}},Cc=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.D;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var o=r.a,c=r.c,a=r.d;return S(Mo,l,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return S(Mo,l,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return S(Mo,l,O(o),c,a);case 8:return D;case 9:return D;default:return D}}else{var n=e.b.a;switch(r.$){case 0:return D;case 1:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return S(Dr,n,O(o),c,a);case 8:var o=r.a,c=r.c;return S(Dr,n,O(o),c,0);case 9:var o=r.a,c=r.c;return S(Dr,n,O(o),c,0);default:var o=r.a,i=r.b,c=r.d;return S(D3,n,i,O(o),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.D,v=e.c;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var o=r.a,c=r.c,a=r.d;return L(Do,l,v,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return L(Do,l,v,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return L(Do,l,v,O(o),c,a);case 8:return D;case 9:return D;default:return D}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return D;case 1:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return L(jr,u,v,O(o),c,a);case 8:var o=r.a,c=r.c;return L(jr,u,v,O(o),c,0);case 9:var o=r.a,c=r.c;return L(jr,u,v,O(o),c,0);default:var o=r.a,i=r.b,c=r.d;return L(A3,u,v,i,O(o),c)}}case 2:e.a;var s=e.b,G=e.c,m=t(Bv,s,G);if(m.$){var b=m.a,h=b.a;b.b;var y=m.b,P=y.a,_=y.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var o=r.a,c=r.c,d=r.d;return S(G3,h,O(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return Ge(B3,h,P,_,O(o),c,d);case 8:return D;case 9:return D;default:return D}}else{var p=m.a;switch(r.$){case 0:return D;case 1:return D;case 2:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 3:return D;case 4:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 5:return D;case 6:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return S(it,p,O(o),c,d);case 8:return D;case 9:return D;default:return D}}default:e.a;var k=e.b,A=e.c,H=e.d,G=e.e,N=S(Fv,k,A,H,G);if(N.$){var Q=N.a,ae=Q.a,_e=Q.b,we=N.b,ge=we.a,Pe=we.b,Oe=N.c,Re=Oe.a,Zr=Oe.b,Qr=N.d,P=Qr.a,_=Qr.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var o=r.a,c=r.c,a=r.d;return xs(H3,ae,_e,ge,Pe,Re,Zr,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return F3(ae)(_e)(ge)(Pe)(Re)(Zr)(P)(_)(O(o))(c)(a);case 8:return D;case 9:return D;default:return D}}else{var U=N.a,J=N.b,q=N.c;switch(r.$){case 0:return D;case 1:return D;case 2:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 3:return D;case 4:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 5:return D;case 6:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 8:return D;case 9:return D;default:return D}}}}),jo=function(e){var r=e;return r.gq},Ao=function(e){var r=e;return r.gu},Bo=function(e){var r=e;return r.dg},X3=function(e){var r=e,n=Bo(r.dh),a=Ao(r.dh),o=jo(r.dh),i=Bo(r.df),c=Ao(r.df),l=jo(r.df),u=Bo(r.de),v=Ao(r.de),s=jo(r.de);return s*c*n+v*i*o+u*l*a-u*c*o-v*l*n-s*i*a>0},Y3=function(e){var r=Xa(ia(e)),n=cr(Ln(e)),a=cr(Sn(e)),o=cr(Pn(e));return{dJ:X3(e),r:o.gq,s:o.gu,t:o.dg,u:a.gq,v:a.gu,w:a.dg,x:n.gq,y:n.gu,z:n.dg,J:r.gq,K:r.gu,L:r.dg,b8:1}},Vn=$(function(e,r){return{$:5,a:e,b:r}}),Ev=$(function(e,r){var n=r;switch(n.$){case 0:return D;case 5:var a=n.a,o=n.b,i=t(I$,a,e);return t(Vn,i,o);case 1:return t(Vn,e,n);case 3:return t(Vn,e,n);case 2:return t(Vn,e,n);default:return t(Vn,e,n)}}),Wv=$(function(e,r){return t(Ev,Y3(e),r)}),fo=function(e){return{$:2,a:e}},Z3=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=r.e_;return{e_:{gq:n*i.gq,gu:a*i.gu,dg:o*i.dg},fk:n*r.fk,fl:a*r.fl,fm:o*r.fm}}),Q3=Dm,K3=Mm,Dl=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,p=e.c,d=K3(a),b=d.gq,h=d.gu,y=d.dg,P=d.eN,_=Q3({eN:P,gq:b*s,gu:h*m,dg:y*p});return Ht(r,n,_,o,i,c,l,u,v)}}}}}}}}}},di=$(function(e,r){switch(r.$){case 0:return xv;case 5:var n=r.a,a=r.b;return t(Vn,n,t(di,e,a));case 1:var o=r.a,i=r.b;return t(Se,t(Z3,e,o),t(Dl,e,i));case 3:return r;case 2:var i=r.a;return fo(t(Dl,e,i));default:var c=r.a;return nv(t(Y,di(e),c))}}),Pc=$(function(e,r){var n=r;return t(di,e,n)}),Sc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},qv=7683,Rv=7682,e2=f(lc,{cA:0,cZ:0,dd:15},{bj:Ee,bw:Xn,bE:Ee,bF:qv},{bj:Ee,bw:Xn,bE:Ee,bF:Rv}),r2=f(lc,{cA:0,cZ:0,dd:15},{bj:Ee,bw:Xn,bE:Ee,bF:Rv},{bj:Ee,bw:Xn,bE:Ee,bF:qv}),Lc=$(function(e,r){return e?t(z,r2,r):t(z,e2,r)}),n2={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},a2=function(e){if(e.$){var r=e.c;return Z(ie(function(n,a,o,i,c,l,u,v){return L(ve,t(Lc,i,v),n2,Sc,r,{b:o,c:a,d:l,e:n,b9:u,f:c})}))}else return W},Et=function(e){var r=a2(e);if(r.$)return D;var n=r.a;return fo(n)},t2=E(function(e,r,n,a){var o=t(Cc,n,hv),i=function(){var s=w(e,r);return s.a?s.b?Oa(g([o,Et(Tl)])):o:s.b?Et(Tl):D}(),c=_c(a),l=c.a,u=c.b,v=c.c;return t(Wv,fc(a),t(Pc,T(l,u,v),i))}),o2=$(function(e,r){return S(t2,!0,!0,e,r)}),mi=function(e){return{$:0,a:e}},Nv=$(function(e,r){return{$:0,a:e,b:r}}),i2=function(e){var r=Zi(e),n=r.cY,a=r.co,o=r.ci;return f(Ja,n,a,o)},Gv=function(e){return t(Nv,0,mi(i2(e)))},c2=function(e){var r=e;return r.k},xa=function(e){var r=e;return Hr(r)},l2=$(function(e,r){var n=e.ep,a=e.o;return t(z,{o:vo(a),ep:Ie(n)},r)}),u2=Gt(function(e,r,n,a,o,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Dn(l.ep),s=Mn(l.ep),m=Tn(l.ep),p=t(bt,e,m),d=t(Qe,r,m),b=t(bt,n,s),h=t(Qe,a,s),y=t(bt,o,v),P=t(Qe,i,v),_=u;e=p,r=d,n=b,a=h,o=y,i=P,c=_;continue e}else return sv({d7:r,d8:a,d9:i,ea:e,eb:n,ec:o})}),Hv=$(function(e,r){var n=Dn(e.ep),a=Mn(e.ep),o=Tn(e.ep);return xi(u2,o,o,a,a,n,n,r)}),$2=function(e){var r=f(Tu,l2,C,pc(e));if(r.b){var n=r.a,a=r.b,o=t(Ya,r,gc(e)),i=t(Hv,n,a);return S($v,i,e,o,0)}else return mc},jl=$(function(e,r){var n=e,a=r,o=n.df,i=o,c=n.de,l=c;return{gq:a.gq*l.gq+a.gu*i.gq,gu:a.gq*l.gu+a.gu*i.gu,dg:a.gq*l.dg+a.gu*i.dg}}),Wt=function(e){var r=e;return Ir(r)},ba=function(e){var r=e;return r},gi=function(e){return Ke(2*Rr*e)},Al=C$({cM:Yr,de:ec,df:sc}),Iv=function(){var e=72,r=t(N$,e,gi(1)),n=Le(1),a=ba(P$),o=ba(G$),i=Le(1),c=t(le,.5,i),l=f(Me,me,me,c),u=t(le,-.5,i),v=f(Me,me,me,u),s=function(d){var b=t(le,d,r),h=ba(t(jl,Al,ui(b))),y=t(le,xa(b),n),P=t(le,Wt(b),n),_=f(Me,y,P,c),k=f(Me,y,P,u),A=t(za,e,d+1),H=t(le,A,r),G=ba(t(jl,Al,ui(H))),N=t(le,xa(H),n),U=t(le,Wt(H),n),J=f(Me,N,U,u),q=f(Me,N,U,c);return g([T({o,ep:v},{o,ep:J},{o,ep:k}),T({o:h,ep:k},{o:G,ep:J},{o:G,ep:q}),T({o:h,ep:k},{o:G,ep:q},{o:h,ep:_}),T({o:a,ep:l},{o:a,ep:_},{o:a,ep:q})])},m=t(Y,s,t(bn,0,e-1)),p=si(We(m));return dc($2(p))}(),Bl=wv(Iv),v2=function(e){var r=e,n=K(r.dg),a=K(r.gu),o=K(r.gq);if(I(o,a)<1)if(I(o,n)<1){var i=sr(r.dg*r.dg+r.gu*r.gu);return{gq:0,gu:-r.dg/i,dg:r.gu/i}}else{var i=sr(r.gu*r.gu+r.gq*r.gq);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}else if(I(a,n)<1){var i=sr(r.dg*r.dg+r.gq*r.gq);return{gq:r.dg/i,gu:0,dg:-r.gq/i}}else{var i=sr(r.gq*r.gq+r.gu*r.gu);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}},s2=function(e){var r=v2(e),n=r,a=n,o=e,i=o,c={gq:i.gu*a.dg-i.dg*a.gu,gu:i.dg*a.gq-i.gq*a.dg,dg:i.gq*a.gu-i.gu*a.gq};return w(r,c)},f2=function(e){var r=Ki(e),n=s2(r),a=n.a,o=n.b;return ca({cM:R$(e),de:a,df:o,dh:r})},d2=function(e){var r=e;return r.fA},m2=function(e){var r=e;return r.fX},g2=E(function(e,r,n,a){var o=f2(c2(a)),i=t(Cc,n,Iv),c=function(){var m=w(e,r);return m.a?m.b?Oa(g([i,Et(Bl)])):i:m.b?Et(Bl):D}(),l=m2(a),u=l,v=d2(a),s=v;return t(Wv,o,t(Pc,T(u,u,s),c))}),p2=$(function(e,r){return S(g2,!0,!0,e,r)}),Fl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bB",viewMatrix:"f"}},Vl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bB",viewMatrix:"f"}},ha=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=In(n),c=In(a),l=In(o);return hr({dS:i.gq,dT:c.gq,dU:l.gq,dV:0,dW:i.gu,dX:c.gu,dY:l.gu,dZ:0,d_:i.dg,d$:c.dg,d0:l.dg,d1:0,d2:0,d3:0,d4:0,d5:0})},ut=bv(g([T({c7:0},{c7:1},{c7:2})])),b2=$(function(e,r){var n=fv(r),a=O(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,D;var o=e.b.a;return t(Se,a,ie(function(_,k,A,H,G,N,U,J){return L(ve,f(Ue,H,0,J),Fl,yc,ut,{aD:o,b:A,c:k,d:N,e:_,bB:ha(r),f:G})}));case 1:if(e.b.$)return e.a,D;var i=e.b.a,c=e.c;return t(Se,a,ie(function(_,k,A,H,G,N,U,J){return L(ve,f(Ue,H,0,J),Fl,wc,ut,{aX:t(so,Za(c),i),b:A,c:k,d:N,e:_,bB:ha(r),f:G})}));case 2:e.a;var l=e.b,d=e.c,u=t(Bv,l,d);if(u.$)return D;var v=u.a;return t(Se,a,ie(function(_,k,A,H,G,N,U,J){var q=U.a,Q=U.b;return L(ve,f(Ue,H,0,J),Vl,zv,ut,{R:Q,bo:q.bo,bW:q.bW,bX:q.bX,bY:q.bY,cB:v,b:A,c:k,d:N,e:_,bB:ha(r),f:G})}));default:e.a;var s=e.b,m=e.c,p=e.d,d=e.e,b=S(Fv,s,m,p,d);if(b.$)return D;var h=b.a,y=b.b,P=b.c;return t(Se,a,ie(function(_,k,A,H,G,N,U,J){var q=U.a,Q=U.b;return L(ve,f(Ue,H,0,J),Vl,Av,ut,{cg:h,R:Q,bo:q.bo,bW:q.bW,bX:q.bX,bY:q.bY,cF:P,b:A,c:k,d:N,c0:y,e:_,bB:ha(r),f:G})}))}}),h2=function(){var e=g([{a8:t(Ze,0,1)},{a8:t(Ze,1,1)},{a8:t(Ze,2,1)},{a8:t(Ze,0,-1)},{a8:t(Ze,1,-1)},{a8:t(Ze,2,-1)}]),r=g([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return t(Ya,e,r)}(),_2={src:`
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
    `,attributes:{triangleShadowVertex:"a8"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",triangleVertexPositions:"bB",viewMatrix:"f"}},El=function(e){return fo(ie(function(r,n,a,o,i,c,l,u){return L(ve,t(Lc,o,u),_2,Sc,h2,{b:a,c:n,d:c,e:r,b9:l,bB:ha(e),f:i})}))},y2=E(function(e,r,n,a){var o=t(b2,n,a),i=w(e,r);return i.a?i.b?Oa(g([o,El(a)])):o:i.b?El(a):D}),w2=$(function(e,r){return S(y2,!0,!0,e,r)}),kc=function(e){var r=e;return r},x2=$(function(e,r){var n=Gn(r),a=Gn(e),o=Nn(r),i=Nn(e),c=Rn(r),l=Rn(e);return{d7:t(be,l,c),d8:t(be,i,o),d9:t(be,a,n),ea:t(xe,l,c),eb:t(xe,i,o),ec:t(xe,a,n)}}),C2=function(e){var r=kc(e),n=r.a,a=r.b;return t(x2,n,a)},Wl={src:`
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
    `,attributes:{lineSegmentVertex:"dR"},uniforms:{lineSegmentEndPoint:"dP",lineSegmentStartPoint:"dQ",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},P2=$(function(e,r){return{$:1,a:e,b:r}}),S2=P2({dv:2,dF:0,ee:1}),ql=S2(g([w({dR:0},{dR:1})])),L2=$(function(e,r){var n=C2(r),a=O(n),o=kc(r),i=o.a,c=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,D;var l=e.b.a;return t(Se,a,ie(function(v,s,m,p,d,b,h,y){return L(ve,y,Wl,yc,ql,{aD:l,dP:Ie(c),dQ:Ie(i),b:m,c:s,d:b,e:v,f:d})}));case 1:if(e.b.$)return D;var l=e.b.a,u=e.c;return t(Se,a,ie(function(s,m,p,d,b,h,y,P){return L(ve,P,Wl,wc,ql,{aX:t(so,Za(u),l),dP:Ie(c),dQ:Ie(i),b:p,c:m,d:h,e:s,f:b})}));case 2:return D;default:return D}}),k2=$(function(e,r){return t(L2,e,r)}),zc=function(e){var r=e;return r.e_},Tc=function(e){var r=e;return r.fX},pi=$(function(e,r){var n=e,a=r;return n/a}),z2=ye(function(e,r,n,a,o){e:for(;;){var i=a(r/n),c=t(z,i,o);if(fe(r,e))return c;var l=e,u=r-1,v=n,s=a,m=c;e=l,r=u,n=v,a=s,o=m;continue e}}),Rl=$(function(e,r){return e<1?C:L(z2,0,e,e,r,C)}),T2=$(function(e,r){var n=e.ep,a=e.o,o=e.N,i=o,c=i.a,l=i.b;return t(z,{o:vo(a),ep:Ie(n),N:t(Ze,c,l)},r)}),M2=function(e){var r=f(Tu,T2,C,pc(e));if(r.b){var n=r.a,a=r.b,o=t(Ya,r,gc(e)),i=t(Hv,n,a);return S(vv,i,e,o,0)}else return mc},Mc=$(function(e,r){var n=e,a=r,o=Hr(a);return{gq:o*Hr(n),gu:o*Ir(n),dg:Ir(a)}}),D2=function(){var e=Le(1),r=72,n=t(bn,0,r-1),a=t(Rl,r,t(Aa,me,gi(1))),o=Vi(r/2),i=t(bn,0,o-1),c=t(Rl,o,t(Aa,ga(90),ga(-90))),l=ja(We(t(Y,function(s){return t(Y,function(m){return{o:ba(t(Mc,s,m)),ep:f(Me,t(le,xa(m)*xa(s),e),t(le,xa(m)*Wt(s),e),t(le,Wt(m),e)),N:w(t(pi,s,gi(1)),t(pi,t(mn,ga(90),m),ga(180)))}},c)},a))),u=$(function(s,m){return s*(o+1)+m}),v=We(t(Y,function(s){return We(t(Y,function(m){var p=t(u,s+1,m),d=t(u,s,m),b=t(u,s+1,m+1),h=t(u,s,m+1);return g([T(h,b,p),T(h,p,d)])},i))},n));return dc(M2(t(hc,l,v)))}(),qt=72,$t=2*qt,j2=$(function(e,r){e:for(;;){var n=$t+1,a=t(za,$t,2*e+3),o=t(za,$t,2*e+2),i=2*e+1,c=2*e,l=$t,u=t(z,T(l,c,o),t(z,T(c,a,o),t(z,T(c,i,a),t(z,T(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),A2=x(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),B2=$(function(e,r){e:for(;;){var n=f(A2,0,2*Rr,e/qt),a={bH:n,b0:0,b7:1},o={bH:n,b0:1,b7:1},i=t(z,a,t(z,o,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),F2=function(){var e=t(B2,qt-1,g([{bH:0,b0:0,b7:0},{bH:0,b0:1,b7:0}])),r=t(j2,qt-1,C);return t(Ya,e,r)}(),V2={src:`
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
    `,attributes:{angle:"bH",offsetScale:"b0",radiusScale:"b7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},Nl=function(e){return fo(ie(function(r,n,a,o,i,c,l,u){return L(ve,t(Lc,!0,u),V2,Sc,F2,{aD:f(Ja,0,0,1),b:a,c:n,d:c,e:r,b9:l,f:i})}))},E2=function(e){var r=mv(e);return{dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:r.gq,K:r.gu,L:r.dg,b8:1}},W2=$(function(e,r){return t(Ev,E2(e),r)}),q2=E(function(e,r,n,a){var o=t(Cc,n,D2),i=function(){var u=w(e,r);return u.a?u.b?Oa(g([o,Nl()])):o:u.b?Nl():D}(),c=Tc(a),l=c;return t(W2,t(vi,Yr,zc(a)),t(Pc,T(l,l,l),i))}),R2=$(function(e,r){return S(q2,!0,!0,e,r)}),N2=x(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Uv=x(function(e,r,n){return{$:2,a:e,b:r,c:n}}),G2=ye(function(e,r,n,a,o){return{$:3,a:e,b:r,c:n,d:a,e:o}}),H2=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return t(Nv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return f(N2,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return f(Uv,n,a,c);default:var n=e.a,a=e.b,o=e.c,i=e.d,c=e.e;return L(G2,n,a,o,i,c)}},I2=H2,Jv=function(e){switch(e.$){case 0:var o=e.a,r=e.b;return g([t(o2,o,r)]);case 1:var o=e.a,n=e.b;return g([t(w2,o,n)]);case 3:var o=e.a,a=e.b;return g([t(R2,I2(o),a)]);case 2:var o=e.a,i=e.b;return g([t(p2,o,i)]);case 4:var c=e.a,l=e.b;return g([t(k2,Gv(c),l)]);default:var u=e.a;return t(co,Jv,u)}},Ov=function(e){return t(co,Jv,e)},U2=$(function(e,r){return e3({eQ:e.eQ,eU:H$(e.eV),ao:e.ao,$7:Le(e.$7),bg:e.bg,aU:w(Vt(rr(e.aL.go)),Vt(rr(e.aL.fo))),aZ:Ov(r),ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn})}),Xv=function(e){return e},J2=$(function(e,r){var n=e,a=cr(r.e8),o=a.gq,i=a.gu,c=a.dg,l=t($o,r.bT,r.aS),u=l;return{bJ:Dn(u),eZ:n,bR:Mn(u),cV:0,b6:Tn(u),c8:1,gq:-o,gu:-i,dg:-c}}),O2=function(e){return t(J2,Xv(!0),{aS:e.aS,e8:t(Mc,Ke(e.bI),Ke(e.bP)),bT:e.bT})},mo=S(Mr,52/255,101/255,164/255,1),X2=S(Mr,115/255,210/255,22/255,1),Dc=function(e){return{$:5,a:e}},He=function(e){return Dc(e)},jc=S(Mr,204/255,0/255,0/255,1),Ac=$(function(e,r){return{$:2,a:e,b:r}}),Y2=x(function(e,r,n){return{k:t(kr,e,r),fA:je(n.fA),fX:je(n.fX)}}),Yv=x(function(e,r,n){return t(Ac,e,f(Y2,Yr,iv,{fA:Le(n),fX:Le(r)}))}),Fo=function(e){return f(ac,0,1,e<=.04045?e/12.92:t(en,(e+.055)/1.055,2.4))},Z2=function(e){var r=Zi(e),n=r.cY,a=r.co,o=r.ci;return f(Ja,Fo(n),Fo(a),Fo(o))},Q2=function(e){return f(Uv,0,mi(Z2(e)),mi(0))},gn=$(function(e,r){return t(oa,"unlit",e)?Gv(r):Q2(r)}),Zv=$(function(e,r){return{$:0,a:e,b:r}}),Qv=$(function(e,r){return{$:4,a:e,b:r}}),Bc=$(function(e,r){return{$:3,a:e,b:r}}),Fc=$(function(e,r){return{$:1,a:e,b:r}}),K2=x(function(e,r,n){return{gq:e,gu:r,dg:n}}),e_=$(function(e,r){return{eT:t(w$,e,fc(r)),aU:_c(r)}}),r_=$(function(e,r){var n=r;return t(kr,t(la,e,n.cM),n.e8)}),n_=$(function(e,r){var n=r;return{k:t(r_,e,n.k),fA:n.fA,fX:n.fX}}),a_=function(e){return e},Kv=$(function(e,r){var n=kc(r),a=n.a,o=n.b;return a_(w(e(a),e(o)))}),t_=$(function(e,r){return t(Kv,la(e),r)}),Vc=$(function(e,r){return{e_:r,fX:je(e)}}),o_=$(function(e,r){return t(Vc,Tc(r),t(la,e,zc(r)))}),es=$(function(e,r){var n=r,a=n.a,o=n.b,i=n.c;return T(e(a),e(o),e(i))}),i_=$(function(e,r){return t(es,la(e),r)}),go=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=f(K2,n,a,o);switch(r.$){case 0:var s=r.a,c=r.b;return t(Zv,s,t(e_,i,c));case 1:var s=r.a,l=r.b;return t(Fc,s,t(i_,i,l));case 3:var s=r.a,u=r.b;return t(Bc,s,t(o_,i,u));case 2:var s=r.a,v=r.b;return t(Ac,s,t(n_,i,v));case 4:var s=r.a,m=r.b;return t(Qv,s,t(t_,i,m));default:var p=r.a;return Dc(t(Y,go(T(n,a,o)),p))}}),pn=function(e){return go(T(e,0,0))},po=function(e){return go(T(0,e,0))},rs=function(e){return go(T(0,0,e))},c_=x(function(e,r,n){return{eT:f(y$,e,r,fc(n)),aU:_c(n)}}),l_=$(function(e,r){var n=t(Ra,e,r),a=t(mt,e,r);return function(o){var i=o;return t(kr,n(i.cM),a(i.e8))}}),u_=x(function(e,r,n){var a=n;return{k:f(l_,e,r,a.k),fA:a.fA,fX:a.fX}}),$_=x(function(e,r,n){return t(Kv,t(Ra,e,r),n)}),v_=x(function(e,r,n){return t(Vc,Tc(n),f(Ra,e,r,zc(n)))}),s_=x(function(e,r,n){return t(es,t(Ra,e,r),n)}),Ec=x(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return t(Zv,l,f(c_,e,r,a));case 1:var l=n.a,o=n.b;return t(Fc,l,f(s_,e,r,o));case 3:var l=n.a,i=n.b;return t(Bc,l,f(v_,e,r,i));case 2:var l=n.a,c=n.b;return t(Ac,l,f(u_,e,r,c));case 4:var l=n.a,u=n.b;return t(Qv,l,f($_,e,r,u));default:var v=n.a;return Dc(t(Y,t(Ec,e,r),v))}}),f_=t(kr,Yr,sc),ns=$(function(e,r){return f(Ec,f_,Ke(e),r)}),d_=t(kr,Yr,ao),bi=$(function(e,r){return f(Ec,d_,Ke(e),r)}),m_=Ys,g_=Qs,p_=function(e){var r=e.a,n=e.b,a=e.c;return sr(t(en,r,2)+t(en,n,2)+t(en,a,2))},b_=function(e){var r=e.a,n=e.b,a=e.c,o=p_(T(r,n,a));return{bI:t(g_,n,r),fs:m_(a/o),fX:o}},yt=E(function(e,r,n,a){var o=a.a,i=a.b,c=T(i.gq-o.gq,i.gu-o.gu,i.dg-o.dg),l=c.a,u=c.b,v=c.c,s=b_(T(l,u,v)),m=s.fX,p=s.bI,d=s.fs;return t(rs,o.dg,t(po,o.gu,t(pn,o.gq,t(bi,p,t(ns,d-Ur(90),t(pn,m/2,t(bi,Ur(90),f(Yv,t(gn,e,r),n/2,m))))))))}),h_=function(e){return He(g([S(yt,e,jc,.1,w(f(Ne,0,0,0),f(Ne,10,0,0))),S(yt,e,X2,.1,w(f(Ne,0,0,0),f(Ne,0,10,0))),S(yt,e,mo,.1,w(f(Ne,0,0,0),f(Ne,0,0,10)))]))},__=S(Mr,78/255,154/255,6/255,1),hi=$(function(e,r){return t(Bc,e,t(Vc,Le(r),Yr))}),as=E(function(e,r,n,a){var o=a.a,i=a.b;return S(yt,e,r,n,w(f(Ne,o.gq,o.gu,0),f(Ne,i.gq,i.gu,0)))}),y_=S(Mr,237/255,212/255,0/255,1),w_=$(function(e,r){var n=Ia(r.I).ce,a=t(bi,n.e9,He(g([t(ns,n.f1,He(g([t(pn,-.02,t(hi,t(gn,e,jc),n.aT.fX)),t(pn,.02,t(hi,t(gn,e,y_),n.aT.fX))]))),f(Yv,t(gn,e,c$),.2,1.1)]))),o=n.gk,i=o.a,c=o.b,l=t(oa,"draw speed vector",e)?S(as,e,__,.2,w(t(qr,0,0),t(qr,.3*i,.3*c))):He(C);return t(po,n.aT.bL.gu,t(pn,n.aT.bL.gq,t(rs,.5,He(g([a,l])))))}),wt=$(function(e,r){var n=r.a,a=r.b,o=r.c;return t(Fc,e,f(Xe,f(pt,n.gq,n.gu,n.dg),f(pt,a.gq,a.gu,a.dg),f(pt,o.gq,o.gu,o.dg)))}),x_=function(e){return t(wt,t(gn,e,mo),T(f(Ne,0,0,0),f(Ne,.1,0,0),f(Ne,0,.1,0)))},C_=$(function(e,r){if(t(oa,"draw ball trail",e)){var n=Ia(r.I).ce;return He(t(Y,function(a){return t(po,a.gu,t(pn,a.gq,x_(e)))},n.gf))}else return He(C)}),P_=$(function(e,r){return t(po,r.aI.gu,t(pn,r.aI.gq,t(hi,t(gn,e,jc),.2)))}),S_=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return C}();return f(Ot,to,e,r)},L_=$(function(e,r){var n=r.aj;if(n.$===1){var a=n.a;return He(t(Y,f(as,e,mo,.2),S_(a)))}else return He(C)}),Vo=$(function(e,r){var n=e.a,a=e.b,o=e.c;return{gq:r.gq+n,gu:r.gu+a,dg:r.dg+o}}),k_=$(function(e,r){return{gq:e,gu:r}}),z_=$(function(e,r){var n=e,a=r;return a.gq*n.gu-a.gu*n.gq}),Gl=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu}}),T_=function(e){var r=e;return r},ts=function(e){var r=T_(e),n=r.a,a=r.b,o=r.c,i=t(Gl,n,a),c=t(Gl,n,o);return t(le,.5,t(z_,c,i))},os=x(function(e,r,n){return T(e,r,n)}),M_=function(e){return f(Ae,mn,me,e)},is=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=$(function(s,m){return ts(f(os,r,s,m))}),l=f(Ot,c,t(z,a,i),i);return M_(l)}else{var r=e.a,n=e.b,a=n.a;return me}else return e.a,me;else return me},D_=function(e){return t(ya,me,is(e))?e:ce(e)},cs=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),j_=function(e){return t(cs,me,is(e))?e:ce(e)},A_=$(function(e,r){return{a1:t(Y,D_,e),a5:j_(r)}}),B_=function(e){return t(A_,C,e)},Nr=function(e){var r=e;return r.gq},Gr=function(e){var r=e;return r.gu},Eo=$(function(e,r){return{gq:e(Nr(r)),gu:e(Gr(r))}}),xn=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Rt=x(function(e,r,n){return ts(f(os,e.ep,r.ep,n.ep))}),F_=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var o=n.a,i=n.b;if(t(xn,me,f(Rt,o,r.g,e))){var a=T(o.ft,r.g.ft,e.ft),c=e,l={g:o,n:i,j:r.j,bi:t(z,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:t(z,r.g,r.n),j:r.j,bi:r.bi}}else if(t(xn,me,f(Rt,r.j,r.g,e))){var a=T(r.j.ft,r.g.ft,e.ft);return{g:e,n:C,j:r.j,bi:t(z,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),V_=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var o=n.a,i=n.b;if(t(xn,me,f(Rt,e,r.g,o))){var a=T(e.ft,r.g.ft,o.ft),c=e,l={g:o,n:i,j:r.j,bi:t(z,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:t(z,r.g,r.n),j:r.j,bi:r.bi}}else if(t(xn,me,f(Rt,e,r.g,r.j))){var a=T(e.ft,r.g.ft,r.j.ft);return{g:e,n:C,j:r.j,bi:t(z,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),E_=$(function(e,r){var n=e,a=r;return t(Xi,n,a)}),W_=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Ba=$(function(e,r){var n=Gr(r),a=Gr(e),o=Nr(r),i=Nr(e);return t(W_,n,a)?0:t(xn,n,a)?2:t(E_,o,i)}),Nt=function(e){return e},ls=Gs,q_=$(function(e,r){var n=x(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(e.ft,a.ft,l.ft),v=l,s=u,m=t(z,c,i);a=v,o=s,i=m;continue e}else{var c=T(e.ft,a.ft,r.j.ft);return t(z,c,i)}});return{g:e,n:C,j:r.g,bi:f(n,r.g,r.n,r.bi)}}),R_=$(function(e,r){var n=x(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(a.ft,e.ft,l.ft),v=l,s=u,m=t(z,c,i);a=v,o=s,i=m;continue e}else{var c=T(a.ft,e.ft,r.j.ft);return t(z,c,i)}});return{g:e,n:C,j:r.g,bi:f(n,r.g,r.n,r.bi)}}),N_=function(e){var r=t(ls,$(function(u,v){return t(Ba,v.ep,u.ep)}),e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=a.b,c=$(function(u,v){return fe(u.a3,v.j.ft)?t(R_,u,v):fe(v.j.a3,u.ft)?t(q_,u,v):fe(u.a3,v.g.ft)?t(V_,u,v):fe(v.g.a3,u.ft)?t(F_,u,v):Nt(v)}),l={g:o,n:C,j:n,bi:C};return f(Ae,c,l,i).bi}else return r.a,C;else return C},Qa=$(function(e,r){return t(Fr,e,r.Q)}),G_=$(function(e,r){var n=r;return f(vn,e,0,n)}),H_=ye(function(e,r,n,a,o){e:for(;;){var i=o.a,c=o.b,l=t(Qa,a,e);if(l.$)return Nt(w(i,C));var u=l.a,v=t(Fr,u.ai,r);if(v.$)return Nt(w(i,C));var s=v.a,m=t(G_,a,i),p=u.at,d={ft:u.ai,a3:u.aq,ep:s},b=t(z,d,c);if(fe(p,n))return w(m,ce(b));var h=e,y=r,P=n,_=p,k=w(m,b);e=h,r=y,n=P,a=_,o=k;continue e}}),I_=oo,vt=As,U_=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=function(l){if(l.$){var v=l.a;return _n(t(vt,e,v))}else{var u=l.a;return $n(t(vt,c,u))}};return S(Er,n,a,t(vt,c,o),t(vt,e,i))}),J_=$(function(e,r){var n=t(aa,e,r);return!n.$}),O_=$(function(e,r){var n=r;return t(J_,e,n)}),X_=function(e){var r=t(U_,function(c){return c.ep},e.am),n=$(function(c,l){var u=l,v=u.a,s=u.b;if(t(O_,c,v))return l;var m=L(H_,e,r,c,c,w(v,C)),p=m.a,d=m.b;return w(p,t(z,d,s))}),a=t(bn,0,bc(e.Q)-1),o=f(Ae,n,w(I_,C),a),i=o.b;return w(r,i)},Y_=C,jn=$(function(e,r){if(r.$)return Nt(e);var n=r.a;return n}),Z_=ye(function(e,r,n,a,o){if(r.$===1)return W;var i=r.a;if(n.$===1)return W;var c=n.a;if(a.$===1)return W;var l=a.a;if(o.$===1)return W;var u=o.a;return Z(S(e,i,c,l,u))}),_i=Ms,us=Ps,Un=Ts,Ca=E(function(e,r,n,a){var o=wn&r>>>e;if(I(o,Sr(a))>-1){if(e===5)return t(_i,_n(n),a);var i=$n(S(Ca,e-fr,r,n,hn));return t(_i,i,a)}else{var c=t(Da,o,a);if(c.$){var i=$n(S(Ca,e-fr,r,n,us(c)));return f(Un,o,i,a)}else{var l=c.a,i=$n(S(Ca,e-fr,r,n,l));return f(Un,o,i,a)}}}),yi=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=Sr(i),l=Sr(e),u=n+(l-c);if(fe(l,he)){var v=I(u>>>fr,1<<a)>0;if(v){var s=a+fr,m=S(Ca,s,n,e,us($n(o)));return S(Er,u,s,m,hn)}else return S(Er,u,a,S(Ca,a,n,e,o),hn)}else return S(Er,u,a,o,e)}),Hl=$(function(e,r){var n=r.d;return t(yi,t(_i,e,n),r)}),Il=$(function(e,r){return V(r,{at:e})}),Ul=$(function(e,r){return V(r,{B:e})}),$s=E(function(e,r,n,a){var o=wn&r>>>e,i=t(Da,o,a);if(i.$){var u=i.a,v=f(Un,wn&r,n,u);return f(Un,o,_n(v),a)}else{var c=i.a,l=S($s,e-fr,r,n,c);return f(Un,o,$n(l),a)}}),Q_=x(function(e,r,n){var a=n.a,o=n.b,i=n.c,c=n.d;return e<0||I(e,a)>-1?n:I(e,_v(a))>-1?S(Er,a,o,i,f(Un,wn&e,r,c)):S(Er,a,o,S($s,o,e,r,i),c)}),st=x(function(e,r,n){var a=t(Fr,e,n);if(a.$)return n;var o=a.a;return f(Q_,e,r(o),n)}),Yn=x(function(e,r,n){var a=bc(n.Q);return t(jn,w(n,-1),L(Z_,E(function(o,i,c,l){return w(V(n,{Q:t(Hl,{aq:e,at:e,B:l.B,ai:r.ft},t(Hl,{aq:r.ft,at:r.b1,B:c.B,ai:e},f(st,l.B,Il(a+1),f(st,c.B,Il(a),f(st,r.b1,Ul(a),f(st,e,Ul(a+1),n.Q))))))}),a)}),t(Fr,e,n.am),t(Fr,r.ft,n.am),t(Fr,e,n.Q),t(Fr,r.b1,n.Q)))}),Zn=$(function(e,r){return t(aa,e,r.bm)}),K_=wr,Jl=$(function(e,r){return t(Fr,e,r.am)}),ey=x(function(e,r,n){if(r.$===1)return W;var a=r.a;if(n.$===1)return W;var o=n.a;return Z(t(e,a,o))}),vs=x(function(e,r,n){return t(jn,n,t(Wr,function(a){return f(ey,$(function(o,i){var c=K_(w(o.ep,i.ep));return V(n,{bh:t(e,w(r,c),n.bh)})}),t(Jl,a.ai,n),t(Jl,a.aq,n))},t(Qa,r,n)))}),ry=$(function(e,r){var n=r;return t(lo,zg(e),n)}),Wc=vs(ry),ny=$(function(e,r){return t(jn,r,t(Wr,function(n){return t(re,function(a){var o=a.a2?f(Yn,e,a,r).a:r;return t(Wc,n.B,o)},t(Zn,n.B,r))},t(Qa,e,r)))}),Qn=x(function(e,r,n){return{ft:e,a2:n,b1:r}}),ay=$(function(e,r){var n=r;return t(z,e,n)}),qc=vs(ay),Kn=x(function(e,r,n){return V(n,{bm:f(vn,e,r,n.bm)})}),ty=$(function(e,r){return t(jn,r,t(Wr,function(n){return t(re,function(a){var o=a.a2?f(Yn,e,a,r).a:r;return f(Kn,e,f(Qn,e,e,!1),t(qc,e,t(Wc,n.B,o)))},t(Zn,n.B,r))},t(Qa,e,r)))}),oy=function(e){var r=e;return r},iy=$(function(e,r){var n=r,a=Gr(e),o=Nr(e);return t(re,function(i){i.a;var c=i.b,l=c.a;return c.b,l},f(Ae,$(function(i,c){var l=oy(i.b),u=l.a,v=l.b,s=Nr(u),m=Gr(u),p=Nr(v),d=Gr(v),b=function(){if(fe(m,d))return t(De,t(be,s,p),o);var P=t(pi,t(De,m,a),t(De,m,d));return t(De,t(mn,t(le,P,t(De,s,p)),s),o)}();if(t(cs,me,b)){if(c.$===1)return Z(w(b,i));var h=c.a,y=h.a;return h.b,t(ya,y,b)?Z(w(b,i)):c}else return c}),W,n))}),Rc=$(function(e,r){return t(iy,e,r.bh)}),cy=x(function(e,r,n){return t(jn,n,t(Wr,function(a){return t(Wr,function(o){var i=o.a2?f(Yn,e,o,n).a:n,c=t(Wc,a.B,i);return t(Wr,function(l){return t(re,function(u){var v=u.a2?f(Yn,e,u,c):w(c,e),s=v.a,m=v.b;return f(Kn,l,f(Qn,e,m,!0),s)},t(Zn,l,n))},t(Rc,r,c))},t(Zn,a.B,n))},t(Qa,e,n)))}),ly=x(function(e,r,n){return t(jn,n,t(Wr,function(a){return t(re,function(o){var i=o.a2?f(Yn,e,o,n):w(n,e),c=i.a,l=i.b;return f(Kn,a,f(Qn,e,l,!1),c)},t(Zn,a,n))},t(Rc,r,n)))}),uy=x(function(e,r,n){return t(jn,n,t(Wr,function(a){return t(re,function(o){var i=f(Yn,e,o,n),c=i.a,l=i.b;return f(Kn,e,f(Qn,e,e,!1),t(qc,e,f(Kn,a,f(Qn,e,l,!1),c)))},t(Zn,a,n))},t(Rc,r,n)))}),$y=$(function(e,r){return f(Kn,e,f(Qn,e,e,!1),t(qc,e,r))}),ss=Fs,fs=Bs,Ol=$(function(e,r){var n=Sr(e),a=he-Sr(r.p)-n,o=f(ss,he,r.p,e);return a<0?{A:t(z,_n(o),r.A),m:r.m+1,p:f(fs,a,n,e)}:a?{A:r.A,m:r.m,p:o}:{A:t(z,_n(o),r.A),m:r.m+1,p:hn}}),Xl=$(function(e,r){r.a,r.c;var n=r.d,a=Sr(e),o=he-Sr(n)-a,i=f(ss,he,n,e),c=t(yi,i,r);if(o<0){var l=f(fs,o,a,e);return t(yi,l,c)}else return c}),qn=Ds,vy=function(e){var r=e.a,n=e.c,a=e.d,o=$(function(i,c){if(i.$)return t(z,i,c);var l=i.a;return f(qn,o,c,l)});return{A:f(qn,o,C,n),m:r/he|0,p:a}},sy=$(function(e,r){e.d;var n=r.a,a=r.c,o=r.d;if(I(n,he*4)<1){var i=$(function(c,l){if(c.$){var v=c.a;return t(Xl,v,l)}else{var u=c.a;return f(qn,i,l,u)}});return t(Xl,o,f(qn,i,e,a))}else{var i=$(function(l,u){if(l.$){var s=l.a;return t(Ol,s,u)}else{var v=l.a;return f(qn,i,u,v)}});return t(Ri,!0,t(Ol,o,f(qn,i,vy(e),a)))}}),fy=x(function(e,r,n){e:for(;;)if(r.b){var a=r.a,o=r.b,i=fe(a,e)?n:t(z,a,n),c=a,l=o,u=i;e=c,r=l,n=u;continue e}else return n}),dy=function(e){if(e.b){var r=e.a,n=e.b,a=f(fy,r,n,C);if(a.b){var o=a.a,i=a.b;return fe(o,r)?t(z,r,ce(i)):t(z,r,ce(a))}else return g([r])}else return C},Yl=$(function(e,r){var n=e,a=r;return a*n}),Zl=x(function(e,r,n){var a=Gr(n),o=Gr(r),i=Gr(e),c=Nr(n),l=Nr(r),u=Nr(e),v=t(Yl,t(De,l,c),t(De,i,o)),s=t(Yl,t(De,o,a),t(De,u,l)),m=t(De,v,s);return t(xn,me,m)}),Ql=x(function(e,r,n){var a=t(Ba,r,e),o=t(Ba,r,n);return a===2&&o===2?f(Zl,e,r,n)?0:4:!a&&!o?f(Zl,e,r,n)?1:5:a===2?3:2}),my=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=i.a,l=i.b,u=f(Ae,Yt,c,l),v=E(function(p,d,b,h){e:for(;;)if(b.b){var P=b.a,_=b.b,k={ar:f(Ql,p,d,P),ep:d},A=d,H=P,G=_,N=t(z,k,h);p=A,d=H,b=G,h=N;continue e}else{var y={ar:f(Ql,p,d,r),ep:d};return ce(t(z,y,h))}});return S(v,u,r,t(z,a,t(z,c,l)),C)}else{var r=e.a,n=e.b,a=n.a;return t(Ba,r,a)===2?g([{ar:4,ep:r},{ar:5,ep:a}]):g([{ar:5,ep:r},{ar:4,ep:a}])}else return e.a,C;else return C},gy=function(e){var r=e.a5,n=e.a1,a=t(Y,function(c){return dy(c)},t(z,r,n)),o=f(Ae,$(function(c,l){var u=l.a,v=l.b,s=Pr(c),m=t(Wu,s,function(p){return p?fe(p,s-1)?{aq:u,at:u,B:u+p-1,ai:u+p}:{aq:u+p+1,at:u+p+1,B:u+p-1,ai:u+p}:{aq:u+1,at:u+1,B:u+s-1,ai:u}});return w(u+s,t(sy,v,m))}),w(0,Wi),a).b,i=We(t(Y,my,a));return{Q:o,am:i}},py=function(e){var r=$(function(u,v){var s=u.a,m=u.b,p=m.ar;switch(p){case 0:return t($y,s,v);case 1:return t(ny,s,v);case 3:return f(ly,s,m.ep,v);case 2:return t(ty,s,v);case 4:return f(uy,s,m.ep,v);default:return f(cy,s,m.ep,v)}}),n=gy(e),a=n.am,o=n.Q,i={bh:Y_,Q:o,bm:oo,am:ja(a)},c=t(ls,$(function(u,v){var s=u.b,m=v.b;return t(Ba,m.ep,s.ep)}),t(Xt,to,a)),l=f(Ae,r,i,c);return ja(a),X_(l)},by=function(e){var r=py(e),n=r.a,a=r.b;return t(hc,n,We(t(Y,N_,a)))},hy=function(e){return by(e)},_y=function(e){return t(Y,function(r){var n=r.a,a=r.b,o=r.c;return T(t(Eo,dn,n),t(Eo,dn,a),t(Eo,dn,o))},yv(hy(B_(t(Y,function(r){return t(k_,r.gq,r.gu)},e)))))},yy=$(function(e,r){var n=t(gn,e,mo),a=2,o=function(v){var s=v.gq,m=v.gu;return f(Ne,s,m,a)},i=function(v){var s=v.a,m=v.b;return He(g([t(wt,n,T(o(s),o(m),t(Vo,T(0,0,-a),o(s)))),t(wt,n,T(t(Vo,T(0,0,-a),o(s)),o(m),t(Vo,T(0,0,-a),o(m))))]))},c=function(v){return He(t(Y,i,nc(v.en)))},l=function(v){return He(t(Y,function(s){var m=s.a,p=s.b,d=s.c;return t(wt,n,T(o(m),o(p),o(d)))},_y(v.en)))},u=function(v){return He(g([l(v),c(v)]))};return He(t(Y,u,Ia(r.I).fV))}),ds=function(e){return e},wy=function(e){return ds(1.2*t(en,2,e))},Wo=uo({gq:.37208,gu:.37529}),xy=$(function(e,r){return{$:2,a:e,b:r}}),ms=function(e){return{$:0,a:e}},ft=function(e){var r=e;return r},Cy=function(e){var r=e;return r.eZ},gs=ms(pa.a),Py=$(function(e,r){var n=$(function(a,o){var i=o.a,c=o.b;return e(a)?w(t(z,a,i),c):w(i,t(z,a,c))});return f(Xr,n,w(C,C),r)}),Sy=function(e){var r=e;return hr({dS:r.gq,dT:r.b6,dU:0,dV:0,dW:r.gu,dX:r.bR,dY:0,dZ:0,d_:r.dg,d$:r.bJ,d0:0,d1:0,d2:r.c8,d3:r.cV,d4:0,d5:0})},Ly=ie(function(e,r,n,a,o,i,c,l){var u=t(Py,Cy,g([ft(e),ft(r),ft(n),ft(a)])),v=u.a,s=u.b;if(v.b){var m=ue(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var p=m.a,d=m.b,b=d.a,h=d.b,y=h.a,P=h.b,_=P.a;return t(xy,t(Y,Sy,v),{bo:t(ar,p,b),bW:t(ar,y,_),bX:t(ar,o,i),bY:t(ar,c,l)})}else return gs}else return ms({bo:t(ar,e,r),bW:t(ar,n,a),bX:t(ar,o,i),bY:t(ar,c,l)})}),ky=E(function(e,r,n,a){return Ht(Ly,e,r,n,a,Ye,Ye,Ye,Ye)}),zy={$:5},Ty=zy,My=uo({gq:.44757,gu:.40745}),Dy=function(e){return e},Kl=function(e){return e},qo=function(e){return e},jy={$:1},Ay=jy,By=$(function(e,r){var n=e,a=Xa(r.ep),o=a.gq,i=a.gu,c=a.dg,l=t($o,r.bT,r.aS),u=l;return{bJ:Dn(u),eZ:n,bR:Mn(u),cV:0,b6:Tn(u),c8:2,gq:o,gu:i,dg:c}}),eu=function(e){return t(By,Xv(!0),{aS:e.aS,bT:e.bT,ep:Qi(e.ep)})},Ro=function(e){return e/255},ru=x(function(e,r,n){return S(Mr,Ro(e),Ro(r),Ro(n),1)}),nu=function(e){var r=e;return r},Fy=function(e){e:for(;;){if(fe(e.dG,me)&&fe(e.dH,me))return Ye;if(t(xn,je(e.dG),je(e.dH))){var r={aS:e.aS,dG:e.dH,dH:e.dG,eJ:Bt(e.eJ)};e=r;continue e}else{var n=K(nu(e.dH)/Rr),a=K(nu(e.dG)/Rr),o=cr(e.eJ),i=o.gq,c=o.gu,l=o.dg,u=t($o,gv(1),e.aS),v=u;return{bJ:a*Dn(v),eZ:!1,bR:a*Mn(v),cV:n/a,b6:a*Tn(v),c8:3,gq:i,gu:c,dg:l}}}},Vy=function(e){return Fy({aS:e.aS,dG:e.dG,dH:e.dH,eJ:t(Mc,Ke(e.bI),Ke(e.bP))})},Ey=function(e){return t(cv,{eQ:e.eQ,eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU},g([{aZ:e.aZ,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},Wy=uo({gq:.31271,gu:.32902}),qy=function(e){return je(e)},Ry={$:0},Ny=Ry,Gy=function(e){return Ey({eQ:lv(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU,aZ:e.aZ,ff:qy(ds(80)),fC:gs,ge:Ny,gn:Wy})},Hy=$(function(e,r){return Gy({eU:H$(e.eU),ao:e.ao,$7:Le(e.$7),bg:e.bg,aU:w(Vt(rr(e.aL.go)),Vt(rr(e.aL.fo))),aZ:Ov(r)})}),Iy=$(function(e,r){var n=O2({bI:0,aS:F1(Dy(2e3)),bP:Ur(90),bT:qo(240)}),a=eu({aS:Wo,bT:Kl(6e3),ep:{gq:2,gu:3,dg:3}}),o=Vy({bI:0,aS:Wo,bP:Ur(90),dG:qo(30),dH:qo(30)}),i=eu({aS:My,bT:Kl(6e3),ep:{gq:-2,gu:4,dg:3}}),c=t(oa,"unlit",e)?Hy({eU:f(ru,46,46,46),ao:r.ao,$7:.1,bg:e.bg,aL:e.aL}):U2({eQ:Ay,eV:f(ru,46,46,46),ao:r.ao,$7:.1,bg:e.bg,ff:wy(6),fC:S(ky,i,a,n,o),aL:e.aL,ge:Ty,gn:Wo});return c(g([h_(e),t(w_,e,r),t(C_,e,r),t(yy,e,r),t(P_,e,r),t(L_,e,r)]))}),Uy=$(function(e,r){return t(Iy,e,r)}),Jy=function(e){return{$:3,a:e}},Oy=function(e){return{$:4,a:e}},Xy=function(e){return{$:5,a:e}},Yy={$:0},Zy={$:2},Qy={$:3},Ky={$:1},ew=function(e){return t(Je,"autocomplete",e?"on":"off")},au=function(e){var r=e;return Pr(r.l)},rw={$:6},ps=$(function(e,r){return t(rn,g([M("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),t(oe,"transition","background-color 0.3s ease"),br(e)]),g([Ce(r)]))}),nw=Or("pre"),aw=function(e){var r=e;return t(F,C,g([t(ps,rw,"Export"),t(nw,g([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),g([Ce(r.c6)]))]))},tw={$:7},ow=function(e){return{$:8,a:e}},iw=function(e){return t(Tr,"cols",Ve(e))},cw=function(e){return t(Tr,"rows",Ve(e))},lw=Or("textarea"),uw=function(e){var r=e;return t(F,C,g([t(ps,tw,"Import"),t(lw,g([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),cw(150),iw(10),Wa(ow),qa(r.ca)]),g([Ce("todo")]))]))},$w=function(e){return t(Yi,"mousedown",se(e))},vw=Je("placeholder"),sw=function(e){var r=e,n=t(F,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Qy),ma("Move Level Up")]),g([vr.fH])),a=t(F,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Zy),ma("Move Level Down")]),g([vr.fG])),o=t(F,g([M("inline-block ml-1 w-4 text-white40 hover:text-red-400"),br(Ky),ma("Delete Level")]),g([vr.gg])),i=t(rn,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Yy),ma("Duplicate Level")]),g([vr.fU])),c=$(function(l,u){return t(rn,g([M("w-full h-8 p-2 text-left text-white80 border-b border-white20"),M(fe(l,au(r.U))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),t(oe,"transition","background-color 0.3s ease"),$w(Xy(l))]),g([fe(l,au(r.U))?t(F,C,g([t(Ta,g([M("w-[100px] bg-transparent"),vw("Enter Level Name"),qa(rc(r.U).fJ),Wa(Oy),ew(!1)]),C),t(F,g([M("float-right")]),g([i,n,a,o]))])):t(F,g([M("whitespace-nowrap")]),g([Ce(u)]))]))});return t(F,g([M("w-60 text-xs")]),g([t(F,g([M("w-full h-[200px] overflow-hidden overflow-y-scroll")]),t(Xt,$(function(l,u){var v=u.fJ;return t(c,l,v)}),oc(r.U))),t(F,g([M("p-4 border-[0.5px] border-white20")]),g([aw(r)])),t(F,g([M("p-4 border-[0.5px] border-white20")]),g([uw(r)]))]))},fw=function(e){return t(F,C,g([t(F,g([M("text-lg")]),g([Ce("Pages")])),t(F,g([M("p-4")]),g([t(ka,Jy,sw(e.I))]))]))},dw=function(e){return{$:2,a:e}},mw={$:1},tu=$(function(e,r){return t(rn,g([M("m-1 p-2 rounded bg-black40 hover:bg-black80"),br(e)]),g([Ce(r)]))}),gw=$(function(e,r){return t(F,C,g([t(F,g([M("h-40")]),g([t(F,g([M("text-lg")]),g([Ce("Polygon editor")])),function(){var n=r.aj;if(n.$===1){var a=n.a;return t(F,g([M("p-2")]),g([t(F,C,g([Ce("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ")])),t(F,C,g([Ce("After you are finished drawing, click the button below.")])),t(tu,dw(a),"Finish drawing polygon")]))}else return t(tu,mw,"Start drawing a polygon")}()]))]))}),pw=$(function(e,r){return r.aE?t(F,g([M("fixed top-0 right-0 w-[300px]"),t(oe,"height",$e(e.aL.fo-80)+"px"),M("bg-black20"),M("border-[0.5px] border-white20"),M("overflow-y-scroll"),M("text-xs text-white60")]),g([t(F,g([M("p-4 border-[0.5px] border-white20")]),g([t(gw,e,r)])),t(F,g([M("p-4 border-[0.5px] border-white20")]),g([fw(r)]))])):t(F,C,C)}),bw={$:0},ou={dp:t(ei,g([ri("0 0 24 24"),Ko("currentColor")]),g([t(Te,g([ze("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),C)])),du:t(ei,g([ri("0 0 24 24"),Ko("currentColor")]),g([t(Te,g([ze("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),C)]))},hw=function(e){return t(F,g([M("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),g([t(rn,g([M("w-6"),br(bw)]),g([e.aE?ou.dp:ou.du]))]))},_w=$(function(e,r){return t(F,C,g([t(pw,e,r),hw(r)]))}),yw=Ge(i0,Uy,g1,cb,rb,_w,A1);const ww={Main:{init:yw(t(B,function(e){return se({fv:e})},t(j,"inputs",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return se({e0:c,bg:i,dt:o,dL:a,em:n,aL:r,gm:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(s){return t(B,function(m){return se({eP:m,e2:s,ds:v,fa:u,fz:l,fW:c,f_:i,eA:o,eI:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",xr(On)))},t(j,"left",ee))},t(j,"pressedKeys",xr(On)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return se({ds:v,fw:u,fF:l,f$:c,f0:i,eI:o,gq:a,gu:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return se({fo:n,go:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return se({e5:r,e6:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},xw=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),o=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function s(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function m(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),r(d)&&(R.keyboard.control=!0),n(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),o(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=d.code),r(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),o(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{s(R)}),window.addEventListener("focus",d=>{s(R)}),window.addEventListener("visibilitychange",d=>{s(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(d){const b=d/1e3,h=b-R.clock;h<.009||(R.dt=h,R.clock=b,e.ports.tick.send(R),m(R)),window.requestAnimationFrame(p)}},Cw=()=>{No("pointerdown"),No("wheel"),No("keydown")},No=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Pw=ww.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});Cw();xw(Pw);
