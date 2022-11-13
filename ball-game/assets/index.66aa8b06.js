(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function an(e,r,n){return n.a=e,n.f=r,n}function $(e){return an(2,e,function(r){return function(n){return e(r,n)}})}function P(e){return an(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return an(4,e,function(r){return function(n){return function(a){return function(o){return e(r,n,a,o)}}}})}function ye(e){return an(5,e,function(r){return function(n){return function(a){return function(o){return function(i){return e(r,n,a,o,i)}}}}})}function lr(e){return an(6,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return e(r,n,a,o,i,c)}}}}}})}function Gt(e){return an(7,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return e(r,n,a,o,i,c,l)}}}}}}})}function ie(e){return an(8,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,o,i,c,l,u)}}}}}}}})}function Ci(e){return an(9,e,function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,o,i,c,l,u,v)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function s(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,o){return e.a===4?e.f(r,n,a,o):e(r)(n)(a)(o)}function x(e,r,n,a,o,i){return e.a===5?e.f(r,n,a,o,i):e(r)(n)(a)(o)(i)}function Ge(e,r,n,a,o,i,c){return e.a===6?e.f(r,n,a,o,i,c):e(r)(n)(a)(o)(i)(c)}function Pi(e,r,n,a,o,i,c,l){return e.a===7?e.f(r,n,a,o,i,c,l):e(r)(n)(a)(o)(i)(c)(l)}function Ht(e,r,n,a,o,i,c,l,u){return e.a===8?e.f(r,n,a,o,i,c,l,u):e(r)(n)(a)(o)(i)(c)(l)(u)}function Pf(e,r,n,a,o,i,c,l,u,v){return e.a===9?e.f(r,n,a,o,i,c,l,u,v):e(r)(n)(a)(o)(i)(c)(l)(u)(v)}var wf=[];function Sf(e){return[e]}function Lf(e){return e.length}var xf=P(function(e,r,n){for(var a=new Array(e),o=0;o<e;o++)a[o]=n(r+o);return a}),zf=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,C(n,r)}),kf=$(function(e,r){return r[e]}),Tf=P(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=n[i];return o[e]=r,o}),Mf=$(function(e,r){for(var n=r.length,a=new Array(n+1),o=0;o<n;o++)a[o]=r[o];return a[n]=e,a}),Df=P(function(e,r,n){for(var a=n.length,o=0;o<a;o++)r=t(e,n[o],r);return r}),jf=P(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r}),Af=$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=e(r[o]);return a});P(function(e,r,n){for(var a=n.length,o=new Array(a),i=0;i<a;i++)o[i]=t(e,r+i,n[i]);return o});var Bf=P(function(e,r,n){return n.slice(e,r)}),Ff=P(function(e,r,n){var a=r.length,o=e-a;o>n.length&&(o=n.length);for(var i=a+o,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<o;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Vf()),r});function Vf(e){return"<internals>"}function ea(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function se(e,r){for(var n,a=[],o=Go(e,r,0,a);o&&(n=a.pop());o=Go(n.a,n.b,0,a));return o}function Go(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ea(5),!1;if(n>100)return a.push(C(e,r)),!0;e.$<0&&(e=nl(e),r=nl(r));for(var o in e)if(!Go(e[o],r[o],n+1,a))return!1;return!0}$(se);var Ef=$(function(e,r){return!se(e,r)});function I(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=I(e.a,r.a))||(n=I(e.b,r.b))?n:I(e.c,r.c);for(;e.b&&r.b&&!(n=I(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return I(e,r)<0});$(function(e,r){return I(e,r)<1});$(function(e,r){return I(e,r)>0});$(function(e,r){return I(e,r)>=0});var Wf=$(function(e,r){var n=I(e,r);return n<0?Du:n?Wm:Mu}),Fa=0;function C(e,r){return{a:e,b:r}}function T(e,r,n){return{a:e,b:r,c:n}}function V(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ue);function ue(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=wr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=wr(e.a,r);return n}var w={$:0};function wr(e,r){return{$:1,a:e,b:r}}var qf=$(wr);function g(e){for(var r=w,n=e.length;n--;)r=wr(e[n],r);return r}function It(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Rf=P(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return g(a)});E(function(e,r,n,a){for(var o=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)o.push(s(e,r.a,n.a,a.a));return g(o)});ye(function(e,r,n,a,o){for(var i=[];r.b&&n.b&&a.b&&o.b;r=r.b,n=n.b,a=a.b,o=o.b)i.push(L(e,r.a,n.a,a.a,o.a));return g(i)});lr(function(e,r,n,a,o,i){for(var c=[];r.b&&n.b&&a.b&&o.b&&i.b;r=r.b,n=n.b,a=a.b,o=o.b,i=i.b)c.push(x(e,r.a,n.a,a.a,o.a,i.a));return g(c)});var Nf=$(function(e,r){return g(It(r).sort(function(n,a){return I(e(n),e(a))}))}),Gf=$(function(e,r){return g(It(r).sort(function(n,a){var o=t(e,n,a);return o===Mu?0:o===Du?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Hf=$(Math.pow);$(function(e,r){return r%e});var If=$(function(e,r){var n=r%e;return e===0?ea(11):n>0&&e<0||n<0&&e>0?n+e:n}),Uf=Math.PI,Jf=Math.cos,Of=Math.sin,Xf=Math.tan,Yf=Math.acos,Zf=Math.atan,Qf=$(Math.atan2);function Kf(e){return e}function es(e){return e===1/0||e===-1/0}var rs=Math.ceil,ns=Math.floor,as=Math.round,ts=Math.sqrt,Nc=Math.log,os=isNaN;function is(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var cs=$(function(e,r){return e+r});function ls(e){var r=e.charCodeAt(0);return isNaN(r)?W:Z(55296<=r&&r<=56319?C(e[0]+e[1],e.slice(2)):C(e[0],e.slice(1)))}$(function(e,r){return e+r});function us(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),o=0;o<n;){var i=r.charCodeAt(o);if(55296<=i&&i<=56319){a[o]=e(r[o]+r[o+1]),o+=2;continue}a[o]=e(r[o]),o++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,o=0;o<a;){var i=r[o],c=r.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=r[o],o++),e(i)&&n.push(i)}return n.join("")});function $s(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var o=e.charCodeAt(a);55296<=o&&o<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}P(function(e,r,n){for(var a=n.length,o=0;o<a;){var i=n[o],c=n.charCodeAt(o);o++,55296<=c&&c<=56319&&(i+=n[o],o++),r=t(e,i,r)}return r});var vs=P(function(e,r,n){for(var a=n.length;a--;){var o=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,o=n[a]+o),r=t(e,o,r)}return r}),fs=$(function(e,r){return r.split(e)}),ss=$(function(e,r){return r.join(e)}),ds=P(function(e,r,n){return n.slice(e,r)});function ms(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var gs=$(function(e,r){for(var n=r.length;n--;){var a=r[n],o=r.charCodeAt(n);if(56320<=o&&o<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),ps=$(function(e,r){return r.indexOf(e)>-1}),bs=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var hs=$(function(e,r){var n=e.length;if(n<1)return w;for(var a=0,o=[];(a=r.indexOf(e,a))>-1;)o.push(a),a=a+n;return g(o)});function iu(e){return e+""}function _s(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,o=a;o<e.length;++o){var i=e.charCodeAt(o);if(i<48||57<i)return W;r=10*r+i-48}return o==a?W:Z(n==45?-r:r)}function ys(e){if(e.length===0||/[\sxbo]/.test(e))return W;var r=+e;return r===r?Z(r):W}function Cs(e){return It(e).join("")}function Ps(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function ws(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Ss(e){return{$:0,a:e}}function Ls(e){return{$:1,a:e}}function Ut(e){return{$:2,b:e}}var xs=Ut(function(e){return typeof e!="number"?or("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?de(e):or("an INT",e)}),zs=Ut(function(e){return typeof e=="boolean"?de(e):or("a BOOL",e)}),ks=Ut(function(e){return typeof e=="number"?de(e):or("a FLOAT",e)}),Ts=Ut(function(e){return typeof e=="string"?de(e):e instanceof String?de(e+""):or("a STRING",e)});function Ms(e){return{$:3,b:e}}function Ds(e){return{$:5,c:e}}var js=$(function(e,r){return{$:6,d:e,b:r}}),As=$(function(e,r){return{$:7,e,b:r}});function tn(e,r){return{$:9,f:e,g:r}}var Bs=$(function(e,r){return{$:10,b:r,h:e}});function Fs(e){return{$:11,g:e}}var Vs=$(function(e,r){return tn(e,[r])}),Es=P(function(e,r,n){return tn(e,[r,n])});E(function(e,r,n,a){return tn(e,[r,n,a])});ye(function(e,r,n,a,o){return tn(e,[r,n,a,o])});lr(function(e,r,n,a,o,i){return tn(e,[r,n,a,o,i])});Gt(function(e,r,n,a,o,i,c){return tn(e,[r,n,a,o,i,c])});ie(function(e,r,n,a,o,i,c,l){return tn(e,[r,n,a,o,i,c,l])});Ci(function(e,r,n,a,o,i,c,l,u){return tn(e,[r,n,a,o,i,c,l,u])});var Ws=$(function(e,r){try{var n=JSON.parse(r);return tr(e,n)}catch(a){return Fe(t(Bi,"This is not valid JSON! "+a.message,r))}}),cu=$(function(e,r){return tr(e,r)});function tr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?de(e.c):or("null",r);case 3:return Ka(r)?Gc(e.b,r,g):or("a LIST",r);case 4:return Ka(r)?Gc(e.b,r,qs):or("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return or("an OBJECT with a field named `"+n+"`",r);var v=tr(e.b,r[n]);return ur(v)?v:Fe(t(al,n,v.a));case 7:var a=e.e;if(!Ka(r))return or("an ARRAY",r);if(a>=r.length)return or("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=tr(e.b,r[a]);return ur(v)?v:Fe(t(ju,a,v.a));case 8:if(typeof r!="object"||r===null||Ka(r))return or("an OBJECT",r);var o=w;for(var i in r)if(r.hasOwnProperty(i)){var v=tr(e.b,r[i]);if(!ur(v))return Fe(t(al,i,v.a));o=wr(C(i,v.a),o)}return de(ce(o));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=tr(l[u],r);if(!ur(v))return v;c=c(v.a)}return de(c);case 10:var v=tr(e.b,r);return ur(v)?tr(e.h(v.a),r):v;case 11:for(var f=w,m=e.g;m.b;m=m.b){var v=tr(m.a,r);if(ur(v))return v;f=wr(v.a,f)}return Fe(qm(ce(f)));case 1:return Fe(t(Bi,e.a,r));case 0:return de(e.a)}}function Gc(e,r,n){for(var a=r.length,o=new Array(a),i=0;i<a;i++){var c=tr(e,r[i]);if(!ur(c))return Fe(t(ju,i,c.a));o[i]=c.a}return de(n(o))}function Ka(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function qs(e){return t(Wu,e.length,function(r){return e[r]})}function or(e,r){return Fe(t(Bi,"Expecting "+e,r))}function En(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return En(e.b,r.b);case 6:return e.d===r.d&&En(e.b,r.b);case 7:return e.e===r.e&&En(e.b,r.b);case 9:return e.f===r.f&&Hc(e.g,r.g);case 10:return e.h===r.h&&En(e.b,r.b);case 11:return Hc(e.g,r.g)}}function Hc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!En(e[a],r[a]))return!1;return!0}var Rs=$(function(e,r){return JSON.stringify(r,null,e)+""});function Jt(e){return e}function Ns(){return[]}function Gs(){return{}}var Hs=P(function(e,r,n){return n[e]=r,n});function Is(e){return $(function(r,n){return n.push(e(r)),n})}var Us=null;function wn(e){return{$:0,a:e}}function Js(e){return{$:1,a:e}}function Jr(e){return{$:2,b:e,c:null}}var Ho=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Os(e){return{$:5,b:e}}var Xs=0;function wi(e){var r={$:0,e:Xs++,f:e,g:null,h:[]};return Si(r),r}function lu(e){return Jr(function(r){r(wn(wi(e)))})}function uu(e,r){e.h.push(r),Si(e)}var Ys=$(function(e,r){return Jr(function(n){uu(e,r),n(wn(Fa))})}),ho=!1,Ic=[];function Si(e){if(Ic.push(e),!ho){for(ho=!0;e=Ic.shift();)Zs(e);ho=!1}}function Zs(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Si(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Li(r,a,e.fu,e.gi,e.f9,function(){return function(){}})});function Li(e,r,n,a,o,i){var c=t(cu,e,r?r.flags:void 0);ur(c)||ea(2);var l={},u=n(c.a),v=u.a,f=i(p,v),m=Qs(l,p);function p(d,b){var h=t(a,d,v);f(v=h.a,b),Jc(l,h.b,o(v))}return Jc(l,u.b,o(v)),m?{ports:m}:{}}var _r={};function Qs(e,r){var n;for(var a in _r){var o=_r[a];o.a&&(n=n||{},n[a]=o.a(a,r)),e[a]=ed(o,r)}return n}function Ks(e,r,n,a,o){return{b:e,c:r,d:n,e:a,f:o}}function ed(e,r){var n={g:r,h:void 0},a=e.c,o=e.d,i=e.e,c=e.f;function l(u){return t(Ho,l,Os(function(v){var f=v.a;return v.$===0?s(o,n,f,u):i&&c?L(a,n,f.i,f.j,u):s(a,n,i?f.i:f.j,u)}))}return n.h=wi(t(Ho,l,e.b))}var rd=$(function(e,r){return Jr(function(n){e.g(r),n(wn(Fa))})});$(function(e,r){return t(Ys,e.h,{$:0,a:r})});function $u(e){return function(r){return{$:1,k:e,l:r}}}function nd(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Uc=[],_o=!1;function Jc(e,r,n){if(Uc.push({p:e,q:r,r:n}),!_o){_o=!0;for(var a;a=Uc.shift();)ad(a.p,a.q,a.r);_o=!1}}function ad(e,r,n){var a={};Pt(!0,r,a,null),Pt(!1,n,a,null);for(var o in e)uu(e[o],{$:"fx",a:a[o]||{i:w,j:w}})}function Pt(e,r,n,a){switch(r.$){case 1:var o=r.k,i=td(e,o,a,r.l);n[o]=od(e,i,n[o]);return;case 2:for(var c=r.m;c.b;c=c.b)Pt(e,c.a,n,a);return;case 3:Pt(e,r.o,n,{s:r.n,t:a});return}}function td(e,r,n,a){function o(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?_r[r].e:_r[r].f;return t(i,o,a)}function od(e,r,n){return n=n||{i:w,j:w},e?n.i=wr(r,n.i):n.j=wr(r,n.j),n}function id(e){_r[e]&&ea(3)}$(function(e,r){return r});function cd(e,r){return id(e),_r[e]={f:ld,u:r,a:ud},$u(e)}var ld=$(function(e,r){return function(n){return e(r(n))}});function ud(e,r){var n=w,a=_r[e].u,o=wn(null);_r[e].b=o,_r[e].c=P(function(c,l,u){return n=l,o});function i(c){var l=t(cu,a,c);ur(l)||ea(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var wt,Vr=typeof document<"u"?document:{};function xi(e,r){e.appendChild(r)}E(function(e,r,n,a){var o=a.node;return o.parentNode.replaceChild(Kr(e,function(){}),o),{}});function Io(e){return{$:0,a:e}}var vu=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,o.push(c)}return i+=o.length,{$:1,c:r,d:zi(n),e:o,f:e,b:i}})}),Or=vu(void 0),$d=$(function(e,r){return $(function(n,a){for(var o=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,o.push(c)}return i+=o.length,{$:2,c:r,d:zi(n),e:o,f:e,b:i}})}),vd=$d(void 0);function fd(e,r,n,a){return{$:3,d:zi(e),g:r,h:n,i:a}}var sd=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function on(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return on([e,r],function(){return e(r)})});P(function(e,r,n){return on([e,r,n],function(){return t(e,r,n)})});E(function(e,r,n,a){return on([e,r,n,a],function(){return s(e,r,n,a)})});ye(function(e,r,n,a,o){return on([e,r,n,a,o],function(){return L(e,r,n,a,o)})});lr(function(e,r,n,a,o,i){return on([e,r,n,a,o,i],function(){return x(e,r,n,a,o,i)})});Gt(function(e,r,n,a,o,i,c){return on([e,r,n,a,o,i,c],function(){return Ge(e,r,n,a,o,i,c)})});ie(function(e,r,n,a,o,i,c,l){return on([e,r,n,a,o,i,c,l],function(){return Pi(e,r,n,a,o,i,c,l)})});Ci(function(e,r,n,a,o,i,c,l,u){return on([e,r,n,a,o,i,c,l,u],function(){return Ht(e,r,n,a,o,i,c,l,u)})});var fu=$(function(e,r){return{$:"a0",n:e,o:r}}),dd=$(function(e,r){return{$:"a1",n:e,o:r}}),su=$(function(e,r){return{$:"a2",n:e,o:r}}),Tr=$(function(e,r){return{$:"a3",n:e,o:r}}),md=P(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function gd(e){return e=="script"?"p":e}function pd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?t(fu,r.n,bd(e,r.o)):r});function bd(e,r){var n=Ni(r);return{$:r.$,a:n?s(Zt,n<3?hd:_d,fe(e),r.a):t(La,e,r.a)}}var hd=$(function(e,r){return C(e(r.a),r.b)}),_d=$(function(e,r){return{as:e(r.as),c4:r.c4,cW:r.cW}});function zi(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,o=n.n,i=n.o;if(a==="a2"){o==="className"?Oc(r,o,i):r[o]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&o==="class"?Oc(c,o,i):c[o]=i}return r}function Oc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Kr(e,r){var n=e.$;if(n===5)return Kr(e.k||(e.k=e.m()),r);if(n===0)return Vr.createTextNode(e.a);if(n===4){for(var a=e.k,o=e.j;a.$===4;)typeof o!="object"?o=[o,a.j]:o.push(a.j),a=a.k;var i={j:o,p:r},c=Kr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Uo(c,r,e.d),c}var c=e.f?Vr.createElementNS(e.f,e.c):Vr.createElement(e.c);wt&&e.c=="a"&&c.addEventListener("click",wt(c)),Uo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)xi(c,Kr(n===1?l[u]:l[u].b,r));return c}function Uo(e,r,n){for(var a in n){var o=n[a];a==="a1"?yd(e,o):a==="a0"?wd(e,r,o):a==="a3"?Cd(e,o):a==="a4"?Pd(e,o):(a!=="value"&&a!=="checked"||e[a]!==o)&&(e[a]=o)}}function yd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Cd(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Pd(e,r){for(var n in r){var a=r[n],o=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(o,n,i):e.removeAttributeNS(o,n)}}function wd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var o in n){var i=n[o],c=a[o];if(!i){e.removeEventListener(o,c),a[o]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(o,c)}c=Sd(r,i),e.addEventListener(o,c,ki&&{passive:Ni(i)<2}),a[o]=c}}var ki;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){ki=!0}}))}catch{}function Sd(e,r){function n(a){var o=n.q,i=tr(o.a,a);if(!!ur(i)){for(var c=Ni(o),l=i.a,u=c?c<3?l.a:l.as:l,v=c==1?l.b:c==3&&l.c4,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),e),m,p;m=f.j;){if(typeof m=="function")u=m(u);else for(var p=m.length;p--;)u=m[p](u);f=f.p}f(u,v)}}return n.q=r,n}function Ld(e,r){return e.$==r.$&&En(e.a,r.a)}function du(e,r){var n=[];return $r(e,r,n,0),n}function Be(e,r,n,a){var o={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(o),o}function $r(e,r,n,a){if(e!==r){var o=e.$,i=r.$;if(o!==i)if(o===1&&i===2)r=Ad(r),i=1;else{Be(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];$r(e.k,r.k,f,0),f.length>0&&Be(n,1,a,f);return;case 4:for(var m=e.j,p=r.j,d=!1,b=e.k;b.$===4;)d=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;for(var h=r.k;h.$===4;)d=!0,typeof p!="object"?p=[p,h.j]:p.push(h.j),h=h.k;if(d&&m.length!==p.length){Be(n,0,a,r);return}(d?!xd(m,p):m!==p)&&Be(n,2,a,p),$r(b,h,n,a+1);return;case 0:e.a!==r.a&&Be(n,3,a,r.a);return;case 1:Xc(e,r,n,a,zd);return;case 2:Xc(e,r,n,a,kd);return;case 3:if(e.h!==r.h){Be(n,0,a,r);return}var y=Ti(e.d,r.d);y&&Be(n,4,a,y);var S=r.i(e.g,r.g);S&&Be(n,5,a,S);return}}}function xd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Xc(e,r,n,a,o){if(e.c!==r.c||e.f!==r.f){Be(n,0,a,r);return}var i=Ti(e.d,r.d);i&&Be(n,4,a,i),o(e,r,n,a)}function Ti(e,r,n){var a;for(var o in e){if(o==="a1"||o==="a0"||o==="a3"||o==="a4"){var i=Ti(e[o],r[o]||{},o);i&&(a=a||{},a[o]=i);continue}if(!(o in r)){a=a||{},a[o]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[o].f,o:void 0}:typeof e[o]=="string"?"":null;continue}var c=e[o],l=r[o];c===l&&o!=="value"&&o!=="checked"||n==="a0"&&Ld(c,l)||(a=a||{},a[o]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function zd(e,r,n,a){var o=e.e,i=r.e,c=o.length,l=i.length;c>l?Be(n,6,a,{v:l,i:c-l}):c<l&&Be(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=o[v];$r(f,i[v],n,++a),a+=f.b||0}}function kd(e,r,n,a){for(var o=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,m=0,p=0,d=a;m<v&&p<f;){var b=l[m],h=u[p],y=b.a,S=h.a,_=b.b,z=h.b,A=void 0,H=void 0;if(y===S){d++,$r(_,z,o,d),d+=_.b||0,m++,p++;continue}var G=l[m+1],N=u[p+1];if(G){var U=G.a,J=G.b;H=S===U}if(N){var q=N.a,Q=N.b;A=y===q}if(A&&H){d++,$r(_,Q,o,d),va(i,o,y,z,p,c),d+=_.b||0,d++,fa(i,o,y,J,d),d+=J.b||0,m+=2,p+=2;continue}if(A){d++,va(i,o,S,z,p,c),$r(_,Q,o,d),d+=_.b||0,m+=1,p+=2;continue}if(H){d++,fa(i,o,y,_,d),d+=_.b||0,d++,$r(J,z,o,d),d+=J.b||0,m+=2,p+=1;continue}if(G&&U===q){d++,fa(i,o,y,_,d),va(i,o,S,z,p,c),d+=_.b||0,d++,$r(J,Q,o,d),d+=J.b||0,m+=2,p+=2;continue}break}for(;m<v;){d++;var b=l[m],_=b.b;fa(i,o,b.a,_,d),d+=_.b||0,m++}for(;p<f;){var ae=ae||[],h=u[p];va(i,o,h.a,h.b,void 0,ae),p++}(o.length>0||c.length>0||ae)&&Be(n,8,a,{w:o,x:c,y:ae})}var mu="_elmW6BL";function va(e,r,n,a,o,i){var c=e[n];if(!c){c={c:0,z:a,r:o,s:void 0},i.push({r:o,A:c}),e[n]=c;return}if(c.c===1){i.push({r:o,A:c}),c.c=2;var l=[];$r(c.z,a,l,c.r),c.r=o,c.s.s={w:l,A:c};return}va(e,r,n+mu,a,o,i)}function fa(e,r,n,a,o){var i=e[n];if(!i){var c=Be(r,9,o,void 0);e[n]={c:1,z:a,r:o,s:c};return}if(i.c===0){i.c=2;var l=[];$r(a,i.z,l,o),Be(r,9,o,{w:l,A:i});return}fa(e,r,n+mu,a,o)}function gu(e,r,n,a){sa(e,r,n,0,0,r.b,a)}function sa(e,r,n,a,o,i,c){for(var l=n[a],u=l.r;u===o;){var v=l.$;if(v===1)gu(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&sa(e,r,f,0,o,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var f=m.w;f.length>0&&sa(e,r,f,0,o,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var d=r.k;d.$===4;)d=d.k;return sa(e,d,n,a,o+1,i,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,y=0;y<b.length;y++){o++;var S=p===1?b[y]:b[y].b,_=o+(S.b||0);if(o<=u&&u<=_&&(a=sa(h[y],S,n,a,o,_,c),!(l=n[a])||(u=l.r)>i))return a;o=_}return a}function pu(e,r,n,a){return n.length===0?e:(gu(e,r,n,a),St(e,n))}function St(e,r){for(var n=0;n<r.length;n++){var a=r[n],o=a.t,i=Td(o,a);o===e&&(e=i)}return e}function Td(e,r){switch(r.$){case 0:return Md(e,r.s,r.u);case 4:return Uo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return St(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,o=e.childNodes[a];a<n.length;a++)e.insertBefore(Kr(n[a],r.u),o);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=St(e,i.w),e;case 8:return Dd(e,r);case 5:return r.s(e);default:ea(10)}}function Md(e,r,n){var a=e.parentNode,o=Kr(r,n);return o.elm_event_node_ref||(o.elm_event_node_ref=e.elm_event_node_ref),a&&o!==e&&a.replaceChild(o,e),o}function Dd(e,r){var n=r.s,a=jd(n.y,r);e=St(e,n.w);for(var o=n.x,i=0;i<o.length;i++){var c=o[i],l=c.A,u=l.c===2?l.s:Kr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&xi(e,a),e}function jd(e,r){if(!!e){for(var n=Vr.createDocumentFragment(),a=0;a<e.length;a++){var o=e[a],i=o.A;xi(n,i.c===2?i.s:Kr(i.z,r.u))}return n}}function Mi(e){if(e.nodeType===3)return Io(e.textContent);if(e.nodeType!==1)return Io("");for(var r=w,n=e.attributes,a=n.length;a--;){var o=n[a],i=o.name,c=o.value;r=wr(t(Tr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=w,v=e.childNodes,a=v.length;a--;)u=wr(Mi(v[a]),u);return s(Or,l,r,u)}function Ad(e){for(var r=e.e,n=r.length,a=new Array(n),o=0;o<n;o++)a[o]=r[o].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Bd=E(function(e,r,n,a){return Li(r,a,e.fu,e.gi,e.f9,function(o,i){var c=e.gl,l=a.node,u=Mi(l);return bu(i,function(v){var f=c(v),m=du(u,f);l=pu(l,u,m,o),u=f})})});E(function(e,r,n,a){return Li(r,a,e.fu,e.gi,e.f9,function(o,i){var c=e.c2&&e.c2(o),l=e.gl,u=Vr.title,v=Vr.body,f=Mi(v);return bu(i,function(m){wt=c;var p=l(m),d=Or("body")(w)(p.eX),b=du(f,d);v=pu(v,f,b,o),f=d,wt=0,u!==p.gd&&(Vr.title=u=p.gd)})})});var Lt=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bu(e,r){r(e);var n=0;function a(){n=n===1?0:(Lt(a),r(e),1)}return function(o,i){e=o,i?(r(e),n===2&&(n=1)):(n===0&&Lt(a),n=2)}}$(function(e,r){return t(Ii,Gi,Jr(function(){r&&history.go(r),e()}))});$(function(e,r){return t(Ii,Gi,Jr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return t(Ii,Gi,Jr(function(){history.replaceState({},"",r),e()}))});var Fd={addEventListener:function(){},removeEventListener:function(){}},Vd=typeof window<"u"?window:Fd;P(function(e,r,n){return lu(Jr(function(a){function o(i){wi(n(i))}return e.addEventListener(r,o,ki&&{passive:!0}),function(){e.removeEventListener(r,o)}}))});$(function(e,r){var n=tr(e,r);return ur(n)?Z(n.a):W});function hu(e,r){return Jr(function(n){Lt(function(){var a=document.getElementById(e);n(a?wn(r(a)):Js(ag(e)))})})}function Ed(e){return Jr(function(r){Lt(function(){r(wn(e()))})})}$(function(e,r){return hu(r,function(n){return n[e](),Fa})});$(function(e,r){return Ed(function(){return Vd.scroll(e,r),Fa})});P(function(e,r,n){return hu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Fa})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var Wd=$(function(e,r){var n="g";e.fI&&(n+="m"),e.eY&&(n+="i");try{return Z(new RegExp(r,n))}catch{return W}});$(function(e,r){return r.match(e)!==null});var qd=P(function(e,r,n){for(var a=[],o=0,i=n,c=r.lastIndex,l=-1,u;o++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var m=u[v];f[--v]=m?Z(m):W}a.push(L(v$,u[0],u.index,o,g(f))),l=r.lastIndex}return r.lastIndex=c,g(a)});E(function(e,r,n,a){var o=0;function i(c){if(o++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Z(v):W}return n(L(v$,c,arguments[arguments.length-2],o,g(u)))}return a.replace(r,i)});P(function(e,r,n){for(var a=n,o=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;o.push(a.slice(i,l.index)),i=r.lastIndex}return o.push(a.slice(i)),r.lastIndex=c,g(o)});var Yc=0;function Sa(e,r){for(;r.b;r=r.b)e(r.a)}function Di(e){for(var r=0;e.b;e=e.b)r++;return r}var Rd=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Nd=ye(function(e,r,n,a,o){return{$:0,a:e,b:r,c:n,d:a,e:o}}),Gd=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Hd=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Id=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Ud=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Jd=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Od=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Xd=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Yd=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Zd=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Qd=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Kd=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},em=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},_u=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},yu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},rm=function(e){e.gl.disable(e.gl.CULL_FACE)},nm=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},am=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},tm=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Zc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],om=[Qd,Kd,em,_u,yu,rm,nm,am,tm];function Qc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function im(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Cu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function cm(e,r,n,a){for(var o=n.a.dv,i=[],c=0;c<o;c++)i.push(String.fromCharCode(97+c));function l(d,b,h,y,S){var _;if(o===1)for(_=0;_<b;_++)d[h++]=b===1?y[S]:y[S][_];else i.forEach(function(z){for(_=0;_<b;_++)d[h++]=b===1?y[z][S]:y[z][S][_]})}var u=Cu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*o,m=new u.type(Di(n.b)*f);Sa(function(d){l(m,u.size*u.arraySize,v,d,a[r.name]||r.name),v+=f},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),p}function lm(e,r){if(r.a.dF>0){var n=e.createBuffer(),a=um(r.c,r.a.dF);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dv*Di(r.b),indexBuffer:null,buffers:{}}}function um(e,r){var n=new Uint32Array(Di(e)*r),a=0,o;return Sa(function(i){if(r===1)n[a++]=i;else for(o=0;o<r;o++)n[a++]=i[String.fromCharCode(97+o)]},e),n}function Kc(e,r){return e+"#"+r}var Pu=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),_u(n),yu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function o(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Kc(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Yc++,v||(v=Qc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=Yc++,f||(f=Qc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var m=im(a,v,f);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=$m(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var d=a.getActiveAttrib(m,u),b=a.getAttribLocation(m,d.name);l.activeAttributes.push(d),l.activeAttributeLocations.push(b)}c=Kc(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),vm(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=lm(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){d=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[d.name]===void 0&&(h.buffers[d.name]=cm(a,d,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[d.name]);var y=Cu(a,d.type);if(y.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,_=S*y.arraySize,z=0;z<y.arraySize;z++)a.enableVertexAttribArray(b+z),a.vertexAttribPointer(b+z,y.size,y.baseType,!1,_,S*z)}for(n.toggle=!n.toggle,Sa(Q3(n),i.a),u=0;u<Zc.length;u++){var A=n[Zc[u]];A.toggle!==n.toggle&&A.enabled&&(om[u](n),A.enabled=!1,A.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.ee,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ee,0,h.numIndices)}}return Sa(o,e.g),r});function $m(e,r,n,a){var o=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(d,b){var h=b.name,y=e.getUniformLocation(d,h);switch(b.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(y,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(y,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(y,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(y,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(y,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var S=c++;return function(_){e.activeTexture(e.TEXTURE0+S);var z=l.textures.get(_);z||(z=_.e4(e),l.textures.set(_,z)),e.bindTexture(e.TEXTURE_2D,z),i[h]!==_&&(e.uniform1i(y,S),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(y,_),i[h]=_)};default:return function(){}}}for(var v={},f=e.getProgramParameter(o,e.ACTIVE_UNIFORMS),m=0;m<f;m++){var p=e.getActiveUniform(o,m);v[a[p.name]||p.name]=u(o,p)}return v}function vm(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var fm=P(function(e,r,n){return fd(r,{g:n,f:{},h:e},hm,_m)}),sm=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),dm=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),mm=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),gm=$(function(e,r){e.contextAttributes.antialias=!0}),pm=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),bm=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function hm(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Sa(function(o){return t(Z3,r,o)},e.h);var n=Vr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(o){o(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Rd(function(){return t(Pu,e,n)})):(n=Vr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function _m(e,r){return r.f=e.f,Pu(r)}var ym=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Cm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Cm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ji=new Float64Array(3),el=new Float64Array(3),rl=new Float64Array(3),Pm=P(function(e,r,n){return new Float64Array([e,r,n])}),wm=function(e){return e[0]},Sm=function(e){return e[1]},Lm=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var xm=function(e){return new Float64Array([e.gq,e.gu,e.dg])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function wu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(wu);function Su(e,r,n){return n===void 0&&(n=new Float64Array(3)),xt(wu(e,r,n),n)}$(Su);function Lu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return Math.sqrt(n*n+a*a+o*o)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2];return n*n+a*a+o*o});function xt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Lu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var zm=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),da=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(da);function Jo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Jo);$(function(e,r){var n,a=ji,o=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=da(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],o[0]=(da(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],o[1]=(da(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],o[2]=(da(r,a)+e[14])/n,o});var km=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Tm=function(e){return{gq:e[0],gu:e[1],dg:e[2],eN:e[3]}},Mm=function(e){return new Float64Array([e.gq,e.gu,e.dg,e.eN])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Dm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Dm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+o*o+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],o=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+o*o+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var jm=new Float64Array(16),Am=new Float64Array(16),Bm=function(e){var r=new Float64Array(16);return r[0]=e.dS,r[1]=e.dW,r[2]=e.d_,r[3]=e.d2,r[4]=e.dT,r[5]=e.dX,r[6]=e.d$,r[7]=e.d3,r[8]=e.dU,r[9]=e.dY,r[10]=e.d0,r[11]=e.d4,r[12]=e.dV,r[13]=e.dZ,r[14]=e.d1,r[15]=e.d5,r},Fm=function(e){return{dS:e[0],dW:e[1],d_:e[2],d2:e[3],dT:e[4],dX:e[5],d$:e[6],d3:e[7],dU:e[8],dY:e[9],d0:e[10],d4:e[11],dV:e[12],dZ:e[13],d1:e[14],d5:e[15]}};function xu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2*o/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*o/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+o)/(i-o),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*o/(i-o),c[15]=0,c}lr(xu);E(function(e,r,n,a){var o=n*Math.tan(e*Math.PI/360),i=-o,c=i*r,l=o*r;return xu(c,l,i,o,n,a)});function zu(e,r,n,a,o,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-o),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+o)/(i-o),c[15]=1,c}lr(zu);E(function(e,r,n,a){return zu(e,r,n,a,-1,1)});function ku(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],m=e[8],p=e[9],d=e[10],b=e[11],h=e[12],y=e[13],S=e[14],_=e[15],z=r[0],A=r[1],H=r[2],G=r[3],N=r[4],U=r[5],J=r[6],q=r[7],Q=r[8],ae=r[9],_e=r[10],Ce=r[11],ge=r[12],Se=r[13],Oe=r[14],Re=r[15];return n[0]=a*z+l*A+m*H+h*G,n[1]=o*z+u*A+p*H+y*G,n[2]=i*z+v*A+d*H+S*G,n[3]=c*z+f*A+b*H+_*G,n[4]=a*N+l*U+m*J+h*q,n[5]=o*N+u*U+p*J+y*q,n[6]=i*N+v*U+d*J+S*q,n[7]=c*N+f*U+b*J+_*q,n[8]=a*Q+l*ae+m*_e+h*Ce,n[9]=o*Q+u*ae+p*_e+y*Ce,n[10]=i*Q+v*ae+d*_e+S*Ce,n[11]=c*Q+f*ae+b*_e+_*Ce,n[12]=a*ge+l*Se+m*Oe+h*Re,n[13]=o*ge+u*Se+p*Oe+y*Re,n[14]=i*ge+v*Se+d*Oe+S*Re,n[15]=c*ge+f*Se+b*Oe+_*Re,n}$(ku);$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],m=e[10],p=e[12],d=e[13],b=e[14],h=r[0],y=r[1],S=r[2],_=r[4],z=r[5],A=r[6],H=r[8],G=r[9],N=r[10],U=r[12],J=r[13],q=r[14];return n[0]=a*h+c*y+v*S,n[1]=o*h+l*y+f*S,n[2]=i*h+u*y+m*S,n[3]=0,n[4]=a*_+c*z+v*A,n[5]=o*_+l*z+f*A,n[6]=i*_+u*z+m*A,n[7]=0,n[8]=a*H+c*G+v*N,n[9]=o*H+l*G+f*N,n[10]=i*H+u*G+m*N,n[11]=0,n[12]=a*U+c*J+v*q+p,n[13]=o*U+l*J+f*q+d,n[14]=i*U+u*J+m*q+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=xt(r,ji);var a=r[0],o=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=o*a*l+i*u,n[2]=i*a*l-o*u,n[3]=0,n[4]=a*o*l-i*u,n[5]=o*o*l+c,n[6]=o*i*l+a*u,n[7]=0,n[8]=a*i*l+o*u,n[9]=o*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});P(function(e,r,n){var a=new Float64Array(16),o=1/Lu(r),i=r[0]*o,c=r[1]*o,l=r[2]*o,u=Math.cos(e),v=1-u,f=Math.sin(e),m=i*f,p=c*f,d=l*f,b=i*c*v,h=i*l*v,y=c*l*v,S=i*i*v+u,_=b+d,z=h-p,A=b-d,H=c*c*v+u,G=y+m,N=h+p,U=y-m,J=l*l*v+u,q=n[0],Q=n[1],ae=n[2],_e=n[3],Ce=n[4],ge=n[5],Se=n[6],Oe=n[7],Re=n[8],Zr=n[9],Qr=n[10],bo=n[11],hf=n[12],_f=n[13],yf=n[14],Cf=n[15];return a[0]=q*S+Ce*_+Re*z,a[1]=Q*S+ge*_+Zr*z,a[2]=ae*S+Se*_+Qr*z,a[3]=_e*S+Oe*_+bo*z,a[4]=q*A+Ce*H+Re*G,a[5]=Q*A+ge*H+Zr*G,a[6]=ae*A+Se*H+Qr*G,a[7]=_e*A+Oe*H+bo*G,a[8]=q*N+Ce*U+Re*J,a[9]=Q*N+ge*U+Zr*J,a[10]=ae*N+Se*U+Qr*J,a[11]=_e*N+Oe*U+bo*J,a[12]=hf,a[13]=_f,a[14]=yf,a[15]=Cf,a});function Vm(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}P(Vm);E(function(e,r,n,a){var o=new Float64Array(16);return o[0]=a[0]*e,o[1]=a[1]*e,o[2]=a[2]*e,o[3]=a[3]*e,o[4]=a[4]*r,o[5]=a[5]*r,o[6]=a[6]*r,o[7]=a[7]*r,o[8]=a[8]*n,o[9]=a[9]*n,o[10]=a[10]*n,o[11]=a[11]*n,o[12]=a[12],o[13]=a[13],o[14]=a[14],o[15]=a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*o,n[5]=r[5]*o,n[6]=r[6]*o,n[7]=r[7]*o,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Em(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}P(Em);E(function(e,r,n,a){var o=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],m=a[6],p=a[7],d=a[8],b=a[9],h=a[10],y=a[11];return o[0]=i,o[1]=c,o[2]=l,o[3]=u,o[4]=v,o[5]=f,o[6]=m,o[7]=p,o[8]=d,o[9]=b,o[10]=h,o[11]=y,o[12]=i*e+v*r+d*n+a[12],o[13]=c*e+f*r+b*n+a[13],o[14]=l*e+m*r+h*n+a[14],o[15]=u*e+p*r+y*n+a[15],o});$(function(e,r){var n=new Float64Array(16),a=e[0],o=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],m=r[5],p=r[6],d=r[7],b=r[8],h=r[9],y=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=m,n[6]=p,n[7]=d,n[8]=b,n[9]=h,n[10]=y,n[11]=S,n[12]=c*a+f*o+b*i+r[12],n[13]=l*a+m*o+h*i+r[13],n[14]=u*a+p*o+y*i+r[14],n[15]=v*a+d*o+S*i+r[15],n});P(function(e,r,n){var a=Su(e,r,ji),o=xt(Jo(n,a,el),el),i=xt(Jo(a,o,rl),rl),c=jm,l=Am;return c[0]=o[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=o[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=o[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,ku(c,l)});P(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var k=qf,et=jf,Tu=P(function(e,r,n){var a=n.c,o=n.d,i=$(function(c,l){if(c.$){var v=c.a;return s(et,e,l,v)}else{var u=c.a;return s(et,i,l,u)}});return s(et,i,s(et,e,r,o),a)}),Ai=P(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,o=n.c,i=n.d,c=n.e,l=e,u=s(e,a,o,s(Ai,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),nl=function(e){return s(Ai,P(function(r,n,a){return t(k,C(r,n),a)}),w,e)},Mu=1,Wm=2,Du=0,Fe=function(e){return{$:1,a:e}},Bi=$(function(e,r){return{$:3,a:e,b:r}}),al=$(function(e,r){return{$:0,a:e,b:r}}),ju=$(function(e,r){return{$:1,a:e,b:r}}),de=function(e){return{$:0,a:e}},qm=function(e){return{$:2,a:e}},Z=function(e){return{$:0,a:e}},W={$:1},Rm=gs,Au=Rs,Ve=iu,ln=$(function(e,r){return t(ss,e,It(r))}),Fi=$(function(e,r){return g(t(fs,e,r))}),Bu=function(e){return t(ln,`
    `,t(Fi,`
`,e))},Ae=P(function(e,r,n){e:for(;;)if(n.b){var a=n.a,o=n.b,i=e,c=t(e,a,r),l=o;e=i,r=c,n=l;continue e}else return r}),Sr=function(e){return s(Ae,$(function(r,n){return n+1}),0,e)},Ot=Rf,Nm=P(function(e,r,n){e:for(;;)if(I(e,r)<1){var a=e,o=r-1,i=t(k,r,n);e=a,r=o,n=i;continue e}else return n}),bn=$(function(e,r){return s(Nm,e,r,w)}),Xt=$(function(e,r){return s(Ot,e,t(bn,0,Sr(r)-1),r)}),yr=Ps,Fu=function(e){var r=yr(e);return 97<=r&&r<=122},Vu=function(e){var r=yr(e);return r<=90&&65<=r},Gm=function(e){return Fu(e)||Vu(e)},Hm=function(e){var r=yr(e);return r<=57&&48<=r},Im=function(e){return Fu(e)||Vu(e)||Hm(e)},ce=function(e){return s(Ae,k,w,e)},ra=ls,Um=$(function(e,r){return`

(`+(Ve(e+1)+(") "+Bu(Jm(r))))}),Jm=function(e){return t(Om,e,w)},Om=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=ra(n);if(h.$===1)return!1;var y=h.a,S=y.a,_=y.b;return Gm(S)&&t(Rm,Im,_)}(),o=a?"."+n:"['"+(n+"']"),u=c,v=t(k,o,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ve(i)+"]"),u=c,v=t(k,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+t(ln,"",ce(r)):"Json.Decode.oneOf"}(),b=m+(" failed in the following "+(Ve(Sr(f))+" ways:"));return t(ln,`

`,t(k,b,t(Xt,Um,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ln,"",ce(r)):"!"}();default:var p=e.a,d=e.b,b=function(){return r.b?"Problem with the value at json"+(t(ln,"",ce(r))+`:

    `):`Problem with the given value:

`}();return b+(Bu(t(Au,4,d))+(`

`+p))}}),he=32,Er=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),hn=wf,Vi=rs,Ei=$(function(e,r){return Nc(r)/Nc(e)}),Xm=Kf,sr=Vi(t(Ei,2,he)),Wi=L(Er,0,sr,hn,hn),Eu=xf,_n=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});var Ym=$(function(e,r){return r(e)}),Zm=ns,Lr=Lf,Qe=$(function(e,r){return I(e,r)>0?e:r}),$n=function(e){return{$:0,a:e}},qi=zf,Qm=$(function(e,r){e:for(;;){var n=t(qi,he,e),a=n.a,o=n.b,i=t(k,$n(a),r);if(o.b){var c=o,l=i;e=c,r=l;continue e}else return ce(i)}}),Km=function(e){var r=e.a;return r},eg=$(function(e,r){e:for(;;){var n=Vi(r/he);if(n===1)return t(qi,he,e).a;var a=t(Qm,e,w),o=n;e=a,r=o;continue e}}),Ri=$(function(e,r){if(r.m){var n=r.m*he,a=Zm(t(Ei,he,n-1)),o=e?ce(r.A):r.A,i=t(eg,o,r.m);return L(Er,Lr(r.p)+n,t(Qe,5,a*sr),i,r.p)}else return L(Er,Lr(r.p),sr,hn,r.p)}),rg=ye(function(e,r,n,a,o){e:for(;;){if(r<0)return t(Ri,!1,{A:a,m:n/he|0,p:o});var i=_n(s(Eu,he,r,e)),c=e,l=r-he,u=n,v=t(k,i,a),f=o;e=c,r=l,n=u,a=v,o=f;continue e}}),Wu=$(function(e,r){if(e<=0)return Wi;var n=e%he,a=s(Eu,n,e-n,r),o=e-n-he;return x(rg,r,o,e,w,a)}),ur=function(e){return!e.$},B=Bs,ee=zs,j=js,ne=ks,ng=function(e){return{$:2,a:e}},Yt=$(function(e,r){return e}),qu=$(function(e,r){return{e0:r.e0,e1:e,bg:r.bg,dt:r.dt,dL:r.dL,em:r.em,aL:r.aL,gm:r.gm}}),La=Vs,Zt=Es,fe=Ss,Ni=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Cr=function(e){return e},ag=Cr,tl=lr(function(e,r,n,a,o,i){return{dB:i,dD:r,ej:a,eo:n,es:e,et:o}}),tg=ps,un=us,Wn=ds,Va=$(function(e,r){return e<1?r:s(Wn,e,un(r),r)}),Qt=hs,Kt=function(e){return e===""},eo=$(function(e,r){return e<1?"":s(Wn,0,e,r)}),Ru=_s,ol=ye(function(e,r,n,a,o){if(Kt(o)||t(tg,"@",o))return W;var i=t(Qt,":",o);if(i.b){if(i.b.b)return W;var c=i.a,l=Ru(t(Va,c+1,o));if(l.$===1)return W;var u=l;return Z(Ge(tl,e,t(eo,c,o),u,r,n,a))}else return Z(Ge(tl,e,o,W,r,n,a))}),il=E(function(e,r,n,a){if(Kt(a))return W;var o=t(Qt,"/",a);if(o.b){var i=o.a;return x(ol,e,t(Va,i,a),r,n,t(eo,i,a))}else return x(ol,e,"/",r,n,a)}),cl=P(function(e,r,n){if(Kt(n))return W;var a=t(Qt,"?",n);if(a.b){var o=a.a;return L(il,e,Z(t(Va,o+1,n)),r,t(eo,o,n))}else return L(il,e,W,r,n)});$(function(e,r){if(Kt(r))return W;var n=t(Qt,"#",r);if(n.b){var a=n.a;return s(cl,e,Z(t(Va,a+1,r)),t(eo,a,r))}else return s(cl,e,W,r)});var og=bs,Gi=function(e){},Ea=wn,ig=Ea(0),Nu=E(function(e,r,n,a){if(a.b){var o=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,m=v.b,p=n>500?s(Ae,e,r,ce(m)):L(Nu,e,r,n+1,m);return t(e,o,t(e,c,t(e,u,t(e,f,p))))}else return t(e,o,t(e,c,t(e,u,r)))}else return t(e,o,t(e,c,r))}else return t(e,o,r)}else return r}),Xr=P(function(e,r,n){return L(Nu,e,r,0,n)}),Y=$(function(e,r){return s(Xr,$(function(n,a){return t(k,e(n),a)}),w,r)}),zt=Ho,Hi=$(function(e,r){return t(zt,function(n){return Ea(e(n))},r)}),cg=P(function(e,r,n){return t(zt,function(a){return t(zt,function(o){return Ea(t(e,a,o))},n)},r)}),lg=function(e){return s(Xr,cg(k),Ea(w),e)},ug=rd,$g=$(function(e,r){var n=r;return lu(t(zt,ug(e),n))}),vg=P(function(e,r,n){return t(Hi,function(a){return 0},lg(t(Y,$g(e),r)))}),fg=P(function(e,r,n){return Ea(0)}),sg=$(function(e,r){var n=r;return t(Hi,e,n)});_r.Task=Ks(ig,vg,fg,sg);var dg=$u("Task"),Ii=$(function(e,r){return dg(t(Hi,e,r))}),mg=Bd,gg=is,kt={$:1},Gu=function(e){return{$:2,a:e}},ro={$:0},ir=$(function(e,r){return{$:0,a:e,b:r}}),te=P(function(e,r,n){return r(e(n))}),na=function(e){var r=e.b.C;return r.a},pg=function(e){var r=e.a,n=e.b.W,a=e.b.C,o=e.b.ae;if(o.b){var i=o.a,c=o.b;return Z(t(ir,r,{C:i,ae:c,W:t(k,a,n)}))}else return W},Hu=function(e){var r=e.b;return t(ir,ro,r)},er=$(function(e,r){if(r.$)return e;var n=r.a;return n}),bg=P(function(e,r,n){var a=n.a,o=n.b;switch(a.$){case 1:return r.em.ds?Hu(n):n;case 2:var i=a.a.c5;return(I(i+r.dt,na(n).e0)>0?t(te,pg,er(t(ir,kt,o))):Cr)(t(ir,Gu({c5:i+r.dt}),o));default:var c=o.C,l=c.a,u=c.b,v=t(qu,l.e1,V(r,{e0:l.e0+r.dt})),f=t(e,v,u);return t(ir,ro,{C:C(v,f),ae:w,W:t(k,o.C,o.W)})}}),Ui=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,o=n;e=a,r=o;continue e}else return r}}),hg=P(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,o=r.b,i=e-1,c=o,l=t(k,a,n);e=i,r=c,n=l;continue e}else return n}}),_g=$(function(e,r){return ce(s(hg,e,r,w))}),Iu=P(function(e,r,n){if(r<=0)return w;{var a=C(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var o=a.b,_=o.a,i=o.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return g([_,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,p=m.b,c=p.a,d=p.b,f=d.a,b=d.b,h=b.a,y=b.b;return e>1e3?t(k,_,t(k,c,t(k,f,t(k,h,t(_g,r-4,y))))):t(k,_,t(k,c,t(k,f,t(k,h,s(Iu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,_=S.a;return g([_])}}),Ji=$(function(e,r){return s(Iu,0,e,r)}),yg=$(function(e,r){var n=r.b.W,a=r.b.C,o=r.b.ae,i=ue(ce(n),ue(g([a]),o)),c=t(Ji,e,i),l=t(Ui,e,i);if(l.b){var u=l.a,v=l.b;return t(ir,kt,{C:u,ae:v,W:ce(c)})}else{var f=ce(c);if(f.b){var m=f.a,p=f.b;return t(ir,kt,{C:m,ae:w,W:p})}else return r}}),Cg=function(e){var r=e.b;return t(ir,kt,r)},Pg=function(e){var r=e.b;return t(ir,Gu({c5:na(e).e0}),r)},wg=$(function(e,r){switch(e.$){case 1:return Cg(r);case 2:return Hu(r);case 3:return Pg(r);default:var n=e.a;return t(yg,n,r)}}),Uu=$(function(e,r){var n=r.a,a=r.b;return C(e(n),a)}),Sg=$(function(e,r){return V(r,{aC:e(r.aC)})}),Ju=function(e){return{$:3,a:e}},Ou=function(e){return{$:2,a:e}},Xu=$(function(e,r){return{$:0,a:e,b:r}}),Lg=$(function(e,r){return{$:1,a:e,b:r}}),re=$(function(e,r){if(r.$)return W;var n=r.a;return Z(e(n))}),K=function(e){return e<0?-e:e},Oi=ys,xg=P(function(e,r,n){return t(er,0/0,Oi(t(e,r,n)))}),Yu=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var o=e,i=a;e=o,r=i;continue e}else return!1}),zg=Ef,kg=vs,Zu=function(e){return s(kg,k,w,e)},Tg=$(function(e,r){var n=t(Yu,function(a){return a!=="0"&&a!=="."},Zu(r));return ue(e&&n?"-":"",r)}),$e=iu,Oo=cs,Qu=ws,Ku=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ra(n);if(a.$===1)return"01";var o=a.a;return t(Oo,"0",Ku(o))}else{var i=yr(r);return i>=48&&i<57?t(Oo,Qu(i+1),n):"0"}},Xo=es,Mg=os,no=function(e){return t(Oo,e,"")},e$=P(function(e,r,n){return e<=0?n:s(e$,e>>1,ue(r,r),e&1?ue(n,r):n)}),xa=$(function(e,r){return s(e$,e,r,"")}),Yo=P(function(e,r,n){return ue(n,t(xa,e-un(n),no(r)))}),Zo=$s,r$=function(e){var r=t(Fi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a;return C(n,o)}else{var n=r.a;return C(n,"0")}else return C("0","0")},Dg=function(e){var r=t(Fi,"e",$e(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=t(er,0,Ru(t(og,"+",o)?t(Va,1,o):o)),c=r$(n),l=c.a,u=c.b,v=ue(l,u),f=i<0?t(er,"0",t(re,function(m){var p=m.a,d=m.b;return p+("."+d)},t(re,Uu(no),ra(ue(t(xa,K(i),"0"),v))))):s(Yo,i+1,"0",v);return ue(e<0?"-":"",f)}else{var n=r.a;return ue(e<0?"-":"",n)}else return""},jg=P(function(e,r,n){if(Xo(n)||Mg(n))return $e(n);var a=n<0,o=r$(Dg(K(n))),i=o.a,c=o.b,l=un(i)+r,u=ue(t(xa,-l+1,"0"),s(Yo,l,"0",ue(i,c))),v=un(u),f=t(Qe,1,l),m=t(e,a,s(Wn,f,v,u)),p=s(Wn,0,f,u),d=m?Zo(t(er,"1",t(re,Ku,ra(Zo(p))))):p,b=un(d),h=d==="0"?d:r<=0?ue(d,t(xa,K(r),"0")):I(r,un(c))<0?s(Wn,0,b-r,d)+("."+s(Wn,b-r,b,d)):ue(i+".",s(Yo,r,"0",c));return t(Tg,a,h)}),n$=jg($(function(e,r){var n=ra(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,o=a.a;return function(i){return i>53&&e||i>=53&&!e}(yr(o))})),Ag=xg(n$),Bg=P(function(e,r,n){var a=t(Ei,10,K(r-e)),o=a<0?3:a<1?2:a<2?1:0;return t(Ag,o,n)}),Xi=Wf,aa=$(function(e,r){e:for(;;){if(r.$===-2)return W;var n=r.b,a=r.c,o=r.d,i=r.e,c=t(Xi,e,n);switch(c){case 0:var l=e,u=o;e=l,r=u;continue e;case 1:return Z(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=ye(function(e,r,n,a,o){return{$:-1,a:e,b:r,c:n,d:a,e:o}}),xr={$:-2},Jn=ye(function(e,r,n,a,o){if(o.$===-1&&!o.a){o.a;var i=o.b,c=o.c,l=o.d,u=o.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,m=a.d,p=a.e;return x(X,0,r,n,x(X,1,v,f,m,p),x(X,1,i,c,l,u))}else return x(X,e,i,c,x(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,d=a.d;d.a;var b=d.b,h=d.c,y=d.d,S=d.e,p=a.e;return x(X,0,v,f,x(X,1,b,h,y,S),x(X,1,r,n,p,o))}else return x(X,e,r,n,a,o)}),Qo=P(function(e,r,n){if(n.$===-2)return x(X,0,e,r,xr,xr);var a=n.a,o=n.b,i=n.c,c=n.d,l=n.e,u=t(Xi,e,o);switch(u){case 0:return x(Jn,a,o,i,s(Qo,e,r,c),l);case 1:return x(X,a,o,r,c,l);default:return x(Jn,a,o,i,c,s(Qo,e,r,l))}}),vn=P(function(e,r,n){var a=s(Qo,e,r,n);if(a.$===-1&&!a.a){a.a;var o=a.b,i=a.c,c=a.d,l=a.e;return x(X,1,o,i,c,l)}else{var u=a;return u}}),Fg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},a$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d,u=o.e,v=e.e;v.a;var f=v.b,m=v.c,p=v.d;p.a;var d=p.b,b=p.c,h=p.d,y=p.e,S=v.e;return x(X,0,d,b,x(X,1,n,a,x(X,0,i,c,l,u),h),x(X,1,f,m,y,S))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,z=e.e;z.a;var f=z.b,m=z.c,p=z.d,S=z.e;return x(X,1,n,a,x(X,0,i,c,l,u),x(X,0,f,m,p,S))}else return e},ll=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,o=e.d;o.a;var i=o.b,c=o.c,l=o.d;l.a;var u=l.b,v=l.c,f=l.d,m=l.e,p=o.e,d=e.e;d.a;var b=d.b,h=d.c,y=d.d,S=d.e;return x(X,0,i,c,x(X,1,u,v,f,m),x(X,1,n,a,p,x(X,0,b,h,y,S)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,z=_.d,p=_.e,A=e.e;A.a;var b=A.b,h=A.c,y=A.d,S=A.e;return x(X,1,n,a,x(X,0,i,c,z,p),x(X,0,b,h,y,S))}else return e},Vg=Gt(function(e,r,n,a,o,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return x(X,n,l,u,v,x(X,0,a,o,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,ll(r)}else break e;else return c.a,c.d,ll(r);else break e;return r}}),dt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,o=e.d,i=o.a,c=o.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,x(X,r,n,a,dt(o),l);var u=a$(e);if(u.$===-1){var v=u.a,f=u.b,m=u.c,p=u.d,d=u.e;return x(Jn,v,f,m,dt(p),d)}else return xr}else return x(X,r,n,a,dt(o),l)}else return xr},_a=$(function(e,r){if(r.$===-2)return xr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(I(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,x(X,n,a,o,t(_a,e,i),c);var u=a$(r);if(u.$===-1){var v=u.a,f=u.b,m=u.c,p=u.d,d=u.e;return x(Jn,v,f,m,t(_a,e,p),d)}else return xr}else return x(X,n,a,o,t(_a,e,i),c);else return t(Eg,e,Pi(Vg,e,r,n,a,o,i,c))}),Eg=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;if(se(e,a)){var l=Fg(c);if(l.$===-1){var u=l.b,v=l.c;return x(Jn,n,u,v,i,dt(c))}else return xr}else return x(Jn,n,a,o,i,t(_a,e,c))}else return xr}),Wg=$(function(e,r){var n=t(_a,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,o=n.c,i=n.d,c=n.e;return x(X,1,a,o,i,c)}else{var l=n;return l}}),rt=P(function(e,r,n){var a=r(t(aa,e,n));if(a.$)return t(Wg,e,n);var o=a.a;return s(vn,e,o,n)}),qg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(rt,r,re(function(a){if(a.$===1){var o=a.a,i=o.a,c=o.b;return t(Lg,C(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(rt,r,re(function(a){if(a.$)return a;var o=a.a,i=o.a,c=o.b;return t(Xu,C(i,c),s(Bg,i,c,n))}));case 3:var r=e.a,n=e.b;return t(rt,r,re(function(a){return a.$===3?Ju(n):a}));default:var r=e.a,n=e.b;return t(rt,r,re(function(a){return a.$===2?Ou(n):a}))}},Rg=function(e){return Sg(qg(e))},Ng=$(function(e,r){return t(Y,Rg(e),r)}),Gg=$(function(e,r){return V(r,{e1:t(Ng,e,r.e1)})}),Hg=$(function(e,r){var n=r.a,a=r.b;return t(ir,n,V(a,{C:t(Uu,Gg(e),a.C)}))}),Ig=$(function(e,r){var n=r.a,a=r.b;return C(n,e(a))}),Ug=P(function(e,r,n){var a=n.a,o=n.b,i=o.C;return t(ir,a,V(o,{C:t(Ig,t(e,i.a,r),i)}))}),Jg=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return V(a,{aV:!a.aV});case 2:var o=n.a;return V(a,{H:s(bg,e,o,a.H)});case 3:var i=n.a;return V(a,{H:t(Hg,i,a.H)});case 4:var c=n.a;return V(a,{H:s(Ug,r,c,a.H)});default:var l=n.a;return V(a,{H:t(wg,l,a.H)})}}),Og=$(function(e,r){return t(ir,ro,{C:C(e,r(e)),ae:w,W:w})}),Xg=nd,ul=Xg(w),Pr=Ms,On=Ts,Yg=cd("tick",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return fe({e0:c,bg:i,dt:o,dL:a,em:n,aL:r,gm:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return fe({eP:m,e2:f,ds:v,fa:u,fz:l,fW:c,f_:i,eA:o,eI:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",Pr(On)))},t(j,"left",ee))},t(j,"pressedKeys",Pr(On)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return fe({ds:v,fw:u,fF:l,f$:c,f0:i,eI:o,gq:a,gu:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return fe({fo:n,go:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return fe({e5:r,e6:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne))))),Zg=function(e){return{$:4,a:e}},Qg={$:0},t$=Jt,Je=$(function(e,r){return t(su,e,t$(r))}),M=Je("className"),Kg=function(e){var r=e.b.C;return r.b},F=Or("div"),Tt=Je("id"),ep=sd,za=ep,rp=dd,oe=rp,np={$:1},ap=function(e){return{$:3,a:e}},tp=function(e){return{$:5,a:e}},$l=Or("a"),rn=Or("button"),vl=function(e){return t(Je,"href",pd(e))},op=Tr("clip-rule"),ke=Tr("d"),Ko=Tr("fill"),o$=vu("http://www.w3.org/2000/svg"),ei=o$("svg"),ri=Tr("viewBox"),ip=t(md,"http://www.w3.org/XML/1998/namespace","xml:space"),nr=ei(g([ri("0 0 24 24"),Ko("currentColor"),t(oe,"width","100%"),t(oe,"height","100%"),ip("http://www.w3.org/2000/svg")])),cp=Tr("fill-rule"),Te=o$("path"),vr={dp:nr(g([t(Te,g([ke("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),w)])),fi:nr(g([t(Te,g([ke("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),w)])),fn:nr(g([t(Te,g([ke("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),w)])),fG:nr(g([t(Te,g([ke("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),w),t(Te,g([ke("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),w)])),fH:nr(g([t(Te,g([ke("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),w),t(Te,g([ke("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),w)])),fS:nr(g([t(Te,g([ke("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),w)])),fT:nr(g([t(Te,g([ke("M7 5V19L18 12L7 5Z")]),w)])),fU:nr(g([t(Te,g([ke("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),w)])),em:nr(g([t(Te,g([ke("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),w)])),gg:nr(g([t(Te,g([cp("evenodd"),op("evenodd"),ke("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),w)])),gh:nr(g([t(Te,g([ke("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),w)])),gy:nr(g([t(Te,g([ke("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),w)]))},lp=function(e){return{$:0,a:e}},i$=fu,Yi=$(function(e,r){return t(i$,e,lp(r))}),br=function(e){return t(Yi,"click",fe(e))},fl=Je("target"),ma=Je("title"),ni=$(function(e,r){if(r.$===-2)return xr;var n=r.a,a=r.b,o=r.c,i=r.d,c=r.e;return x(X,n,a,t(e,a,o),t(ni,e,i),t(ni,e,c))}),up=Io,we=up,$p=function(e){return s(Ai,P(function(r,n,a){return t(k,n,a)}),w,e)},vp=$(function(e,r){return{$:3,a:e,b:r}}),fp=$(function(e,r){return{$:2,a:e,b:r}}),sp=$(function(e,r){return{$:0,a:e,b:r}}),dp=$(function(e,r){return{$:1,a:e,b:r}}),Mr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),c$=L(Mr,0/255,0/255,0/255,1),l$=Jt,u$=$(function(e,r){return t(su,e,l$(r))}),mp=u$("checked"),rr=as,gp=P(function(e,r,n){return ue(t(xa,e-un(n),no(r)),n)}),ka=If,$$=function(e){var r=function(n){return n<10?Ve(n):no(Qu(87+n))};return e<16?r(e):ue($$(e/16|0),r(t(ka,16,e)))},pp=t(te,$$,t(gp,2,"0")),Zi=function(e){var r=e.a,n=e.b,a=e.c,o=e.d;return{aR:o,ci:a,co:n,cY:r}},bp=function(e){var r=Zi(e),n=r.cY,a=r.co,o=r.ci;return t(ln,"",t(k,"#",t(Y,t(te,rr,pp),g([n*255,a*255,o*255]))))},ai=Je("htmlFor"),Wr=$(function(e,r){if(r.$)return W;var n=r.a;return e(n)}),Mt=$(function(e,r){if(r.$){var a=r.a;return Fe(a)}else{var n=r.a;return e(n)}}),hp=P(function(e,r,n){var a=e(r);if(a.$)return n;var o=a.a;return t(k,o,n)}),yn=$(function(e,r){return s(Xr,hp(e),w,r)}),v$=E(function(e,r,n,a){return{ft:r,fD:e,fM:n,f8:a}}),_p=qd,yp=Cs,Cp=$(function(e,r){if(r.$)return Fe(e);var n=r.a;return de(n)}),Pp=Wd,wp=function(e){return t(Pp,{eY:!1,fI:!1},e)},ta=function(e){if(e.b){var r=e.a;return e.b,Z(r)}else return W},Sp=$(function(e,r){if(r.$){var a=r.a;return Fe(a)}else{var n=r.a;return de(e(n))}}),Lp=function(e){return{$:2,a:e}},xp=function(e){return{$:0,a:e}},zp=function(e){return{$:1,a:e}},yo=$(function(e,r){return yr(r)-yr(e)}),Co=P(function(e,r,n){var a=yr(n);return I(yr(e),a)<1&&I(a,yr(r))<1}),kp=$(function(e,r){var n=function(o){return I(o,e)<0?de(o):Fe(zp(r))},a=s(Co,"0","9",r)?de(t(yo,"0",r)):s(Co,"a","z",r)?de(10+t(yo,"a",r)):s(Co,"A","Z",r)?de(10+t(yo,"A",r)):Fe(xp(r));return t(Mt,n,a)}),f$=$(function(e,r){var n=ra(r);if(n.$===1)return de(0);var a=n.a,o=a.a,i=a.b;return t(Mt,function(c){return t(Mt,function(l){return de(c+l*e)},t(f$,e,i))},t(kp,e,o))}),Tp=$(function(e,r){return 2<=e&&e<=36?t(f$,e,Zo(r)):Fe(Lp(e))}),Mp=Tp(16),Dp=P(function(e,r,n){return L(Mr,e,r,n,1)}),jp=E(function(e,r,n,a){return L(Mr,e,r,n,a)}),en=Hf,Ap=$(function(e,r){var n=t(en,10,e);return rr(r*n)/n}),Bp=ms,Fp=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Zu(n);if(a.b&&!a.b.b){var o=a.a;return yp(g([o,o]))}else return n};return t(te,Bp,t(te,function(n){return t(re,function(a){return s(_p,1,a,n)},wp(e))},t(te,Wr(ta),t(te,re(function(n){return n.f8}),t(te,re(yn(Cr)),t(te,Cp("Parsing hex regex failed"),Mt(function(n){var a=t(Y,t(te,r,t(te,Mp,Sp(Xm))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var o=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return de(L(jp,o/255,c/255,u/255,t(Ap,2,f/255)))}else break e;else{var o=a.a.a,m=a.b,c=m.a.a,p=m.b,u=p.a.a;return de(s(Dp,o/255,c/255,u/255))}else break e;return Fe("Parsing ints from hex failed")})))))))}(),Ta=Or("input"),ti=Or("label"),oi=Je("name"),s$=$(function(e,r){return s(Xr,j,r,e)}),Vp=t(s$,g(["target","checked"]),ee),Ep=function(e){return t(Yi,"change",t(La,e,Vp))},Wp=function(e){return C(e,!0)},qp=function(e){return{$:1,a:e}},Rp=$(function(e,r){return t(i$,e,qp(r))}),Np=t(s$,g(["target","value"]),On),Wa=function(e){return t(Rp,"input",t(La,Wp,t(La,e,Np)))},d$=Je("max"),m$=Je("min"),g$=function(e){return t(Je,"step",e)},Dt=Je("type"),qa=Je("value"),sl=function(e){var r=e.cr,n=e.db,a=e.cH,o=e.cD,i=e.c3,c=e.cL;return t(F,w,g([t(ti,g([ai(r)]),g([t(F,g([M("relative w-full")]),g([t(F,g([M("inline-block")]),g([we(r)])),t(F,g([M("inline-block float-right")]),g([we($e(n))]))]))])),t(Ta,g([Dt("range"),t(oe,"width","100%"),Tt(r),oi(r),m$($e(a)),d$($e(o)),qa($e(n)),g$($e(i)),Wa(t(te,Oi,t(te,er(42),c)))]),w)]))},p$=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Gp=$(function(e,r){switch(r.$){case 3:var c=r.a;return t(F,g([M("h-12 py-4")]),g([t(ti,g([M("block"),ai(e)]),g([t(Ta,g([M("relative bottom-[1px] align-middle mr-2"),Dt("checkbox"),Tt(e),oi(e),Ep(vp(e)),mp(c)]),w),we(e)]))]));case 0:var n=r.a,o=n.a,i=n.b,c=r.b;return sl({cr:e,cD:i,cH:o,cL:sp(e),c3:.01*(i-o),db:c});case 1:var a=r.a,o=a.a,i=a.b,c=r.b;return sl({cr:e,cD:i,cH:o,cL:t(te,rr,dp(e)),c3:1,db:c});default:var c=r.a;return t(F,w,g([t(F,g([t(oe,"margin-bottom","6px")]),g([t(ti,g([ai(e)]),g([we(e)]))])),t(Ta,g([Dt("color"),t(oe,"width","100%"),t(oe,"height","26px"),t(oe,"padding","0px"),Tt(e),oi(e),Wa(function(l){return t(fp,e,t(p$,c$,Fp(l)))}),qa(bp(c))]),w)]))}}),Hp=function(e){return t(F,g([M("p-4 border-y-[0.5px] border-white20")]),g([t(F,g([M("text-lg pb-2")]),g([we(e.fJ)])),t(F,g([M("pl-2 pr-2")]),$p(t(ni,Gp,e.aC)))]))},Ip=function(e){return t(F,g([M("text-xs text-white60")]),t(Y,Hp,e))},Up=function(e){return t(F,g([M("absolute left-[104px] bottom-2 text-sm text-white40")]),g([we("clock: "+t(n$,3,na(e).e0))]))},Jp=function(e){e.a;var r=e.b.W;return t(re,function(n){return rr(60/(na(e).e0-n))},t(re,t(te,Km,function(n){return n.e0}),ta(t(Ui,59,r))))},Op=function(e){return t(F,g([M("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Jp(e);if(r.$===1)return g([we("... Fps")]);var n=r.a;return g([we(Ve(n)+" Fps")])}())},Xp=function(e){return{$:0,a:e}},Yp=function(e){var r=e.b.W;return Sr(r)},Zp=function(e){var r=e.b.W;e.b.C;var n=e.b.ae;return Sr(r)+1+Sr(n)},Qp=function(e){return t(Ta,g([M("absolute w-full"),Dt("range"),m$(Ve(0)),d$(Ve(Zp(e)-1)),qa(Ve(Yp(e))),g$(Ve(1)),Wa(t(te,Oi,t(te,er(42),t(te,rr,Xp))))]),w)},dl={$:1},ml={$:3},gl={$:2},jt=function(e){return!e.b},b$=u$("disabled"),Po=P(function(e,r,n){return t(rn,g([M("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),M(n),b$(e),br(r)]),g([we("REC")]))}),wo=P(function(e,r,n){return t(rn,g([M("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),b$(e),br(n)]),g([t(F,g([M("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Kp=function(e){var r=e.a,n=e.b.ae;return t(F,g([M("py-1")]),g([function(){switch(r.$){case 0:return s(Po,!1,dl,"text-red-500 font-bold");case 1:return s(Po,!1,gl,"text-white60 hover:text-white80 font-bold");default:return s(Po,!0,gl,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return s(wo,jt(n),vr.fT,ml);case 1:return s(wo,jt(n),vr.fT,ml);default:return s(wo,!1,vr.fS,dl)}}()]))},e0=function(e){return t(F,g([M("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Qp(e),Kp(e),Op(e),Up(e)]))},r0=function(e){var r=e.a;return se(r,ro)},n0=$(function(e,r){var n=r0(r.H)?t(F,w,w):t(F,g([M("absolute pointer-events-none w-8 h-8"),t(oe,"left",$e(e.em.gq+.5*e.aL.go)+"px"),t(oe,"top",$e(-e.em.gu+.5*e.aL.fo)+"px")]),g([t(F,g([M(e.em.fw?"text-black80":"text-black40")]),g([vr.em]))]));return t(F,w,g([n]))}),a0=$(function(e,r){var n=t(rn,g([M(r.aV?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),br(np),ma("Distraction Free Mode")]),g([vr.gy])),a=40,o=260,i=t(F,g([M("absolute w-8 bottom-12")]),g([t($l,g([M("text-twitterBlue40 hover:text-twitterBlue"),vl("https://twitter.com/AzizErkalSelman"),fl("_blank")]),g([vr.gh]))])),c=80,l=t(F,g([M("absolute w-8 bottom-2")]),g([t($l,g([M("text-githubCat40 hover:text-githubCat"),vl("https://github.com/erkal/elm-3d-playground-exploration"),fl("_blank")]),g([vr.fi]))])),u=e.aL.go>640?T(e.aL.fo,a+o,e.aL.go-(a+o)):T(e.aL.fo-c,a,e.aL.go-a),v=u.a,f=u.b,m=u.c;return r.aV?t(F,g([M("fixed w-10 h-10 p-1")]),g([n])):t(F,w,g([t(F,g([M("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),t(oe,"width",$e(a)+"px")]),g([n,i,l])),t(F,g([M("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),t(oe,"width",$e(o)+"px"),t(oe,"height",$e(v)+"px")]),g([t(za,ap,Ip(na(r.H).e1))])),t(F,g([M("absolute bottom-0"),t(oe,"left",$e(f)+"px"),t(oe,"height",$e(c)+"px"),t(oe,"width",$e(m)+"px")]),g([t(za,tp,e0(r.H))])),t(n0,e,r)]))}),t0=P(function(e,r,n){var a=Kg(n.H),o=na(n.H);return t(F,g([M("bg-black40"),M("select-none"),M("antialiased"),M("font-mono"),t(oe,"width",$e(o.aL.go)+"px"),t(oe,"height",$e(o.aL.fo)+"px")]),g([t(F,g([M("fixed")]),g([t(za,Yt(Qg),t(e,o,a))])),t(F,g([Tt("gui")]),g([t(a0,o,n),t(za,Zg,t(r,o,a))]))]))}),o0=lr(function(e,r,n,a,o,i){var c=$(function(u,v){return C(L(Jg,r,i,u,v),ul)}),l=function(u){var v=t(qu,n,u.fv);return C({aV:u.fv.aL.go<500,H:t(Og,v,a)},ul)};return mg({fu:l,f9:Yt(Yg(ng)),gi:c,gl:t(t0,e,o)})}),ii={$:0},qr=$(function(e,r){return{gq:e,gu:r}}),i0=$(function(e,r){return t(re,function(n){if(n.$===3){var a=n.a;return a}else return!1},t(aa,e,r.aC))}),c0=$(function(e,r){return t(er,!1,ta(t(yn,i0(e),r)))}),l0=$(function(e,r){return t(c0,e,r.e1)}),oa=l0,u0=$(function(e,r){return t(re,function(n){if(n.$)return 0;var a=n.b;return a},t(aa,e,r.aC))}),$0=$(function(e,r){return t(er,0,ta(t(yn,u0(e),r)))}),v0=$(function(e,r){return t($0,e,r.e1)}),Ar=v0,Qi=function(e){return e},xe=function(e){return e},At=function(e){var r=e;return-r},f0=$(function(e,r){var n=e,a=r;return{gq:n.gu*a.dg-n.dg*a.gu,gu:n.dg*a.gq-n.gq*a.dg,dg:n.gq*a.gu-n.gu*a.gq}}),h$=function(e){var r=e;return r.de},_$=function(e){var r=e;return r.df},s0=function(e){return t(f0,h$(e),_$(e))},ia=function(e){var r=e;return r.cM},Hr=Jf,Ir=Of,mt=P(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Hr(c),u=Ir(c),v=a.e8,f=v,m=f.gq*u,p=l*m,d=m*m,b=f.gu*u,h=l*b,y=m*b,S=b*b,_=1-2*(d+S),z=f.dg*u,A=l*z,H=2*(y-A),G=2*(y+A),N=m*z,U=2*(N+h),J=2*(N-h),q=b*z,Q=2*(q-p),ae=2*(q+p),_e=z*z,Ce=1-2*(S+_e),ge=1-2*(d+_e);return{gq:Ce*i.gq+H*i.gu+U*i.dg,gu:G*i.gq+ge*i.gu+Q*i.dg,dg:J*i.gq+ae*i.gu+_*i.dg}}),Ra=P(function(e,r,n){var a=e,o=r,i=n,c=.5*o,l=Hr(c),u=Ir(c),v=a.cM,f=v,m=i.gq-f.gq,p=i.gu-f.gu,d=i.dg-f.dg,b=a.e8,h=b,y=h.gq*u,S=l*y,_=y*y,z=h.gu*u,A=l*z,H=y*z,G=z*z,N=1-2*(_+G),U=h.dg*u,J=l*U,q=2*(H-J),Q=2*(H+J),ae=y*U,_e=2*(ae+A),Ce=2*(ae-A),ge=z*U,Se=2*(ge-S),Oe=2*(ge+S),Re=U*U,Zr=1-2*(G+Re),Qr=1-2*(_+Re);return{gq:f.gq+Zr*m+q*p+_e*d,gu:f.gu+Q*m+Qr*p+Se*d,dg:f.dg+Ce*m+Oe*p+N*d}}),ca=function(e){return e},Sn=function(e){var r=e;return r.de},Ln=function(e){var r=e;return r.df},xn=function(e){var r=e;return r.dh},y$=P(function(e,r,n){return ca({cM:s(Ra,e,r,ia(n)),de:s(mt,e,r,Sn(n)),df:s(mt,e,r,Ln(n)),dh:s(mt,e,r,xn(n))})}),pl=P(function(e,r,n){return s(y$,e(n),r,n)}),Ki=function(e){var r=e;return r.e8},la=$(function(e,r){var n=e,a=r;return{gq:a.gq+n.gq,gu:a.gu+n.gu,dg:a.dg+n.dg}}),C$=$(function(e,r){return ca({cM:t(la,e,ia(r)),de:Sn(r),df:Ln(r),dh:xn(r)})}),d0=$(function(e,r){var n=e,a=r;return{gq:n*a.gq,gu:n*a.gu,dg:n*a.dg}}),m0=P(function(e,r,n){return t(C$,t(d0,r,e),n)}),g0=P(function(e,r,n){return s(m0,Ki(e(n)),r,n)}),zr=$(function(e,r){return{e8:r,cM:e}}),p0=function(e){var r=e;return t(zr,r.cM,r.de)},b0=function(e){var r=e;return t(zr,r.cM,r.df)},h0=function(e){var r=e;return t(zr,r.cM,r.dh)},P$=function(e){var r=ca({cM:e.a$,de:_$(e.dC),df:s0(e.dC),dh:h$(e.dC)}),n=s(g0,h0,e.cn,s(pl,p0,At(e.bP),s(pl,b0,e.bI,r)));return n},_0=function(e){return{$:1,a:e}},je=function(e){var r=e;return K(r)},y0=function(e){return{cX:_0(je(e.eM)),dc:e.dc}},Ke=function(e){return e},Yr={gq:0,gu:0,dg:0},w$=Cr,fn=function(e){return e},C0=fn({gq:1,gu:0,dg:0}),ec=C0,S$=fn({gq:0,gu:0,dg:1}),ao=S$,L$=w$({cM:Yr,de:ao,df:ec}),P0=function(e){var r=e.a$,n=e.bI,a=e.bP,o=e.eM;return y0({dc:P$({bI:Ke(n),cn:xe(1e3),bP:Ke(a),a$:Qi(r),dC:L$}),eM:xe(o)})},w0=Zf,S0=function(e){return{$:0,a:e}},gt=function(e){var r=e;return .5*r},L0=Xf,x0=function(e){var r=e;return L0(r)},z0=function(e){var r=gt(je(e.eK)),n=x0(r);return{cX:S0(n),dc:e.dc}},k0=function(e){var r=e.a$,n=e.bI,a=e.bP,o=e.cn;return z0({eK:Ke(2*w0(.5)),dc:P$({bI:Ke(n),cn:xe(o),bP:Ke(a),a$:Qi(r),dC:L$})})},x$=$(function(e,r){return t(oa,"orthographic",e)?P0({bI:t(Ar,"camera azimuth",e),bP:t(Ar,"camera elevation",e),a$:r,eM:t(Ar,"camera distance",e)}):k0({bI:t(Ar,"camera azimuth",e),cn:t(Ar,"camera distance",e),bP:t(Ar,"camera elevation",e),a$:r})}),T0=ye(function(e,r,n,a,o){return{ce:e,dk:o,ap:n,cj:a,fV:r}}),M0=lr(function(e,r,n,a,o,i){return{aT:e,e9:n,f1:o,ew:a,gf:i,gk:r}}),D0=$(function(e,r){return{bL:e,fX:r}}),j0=Zt(Ym),pe=P(function(e,r,n){return t(j0,t(j,e,r),n)}),Na=s(pe,"y",ne,s(pe,"x",ne,fe(qr))),A0=s(pe,"radius",ne,s(pe,"center",Na,fe(D0))),bl=As,to=$(function(e,r){return C(e,r)}),B0=s(pe,"trail",Pr(Na),s(pe,"rotation",ne,s(pe,"rotationSpeed",ne,s(pe,"directionFromXAxis",ne,s(pe,"velocity",s(Zt,to,t(bl,0,ne),t(bl,1,ne)),s(pe,"circle",A0,fe(M0))))))),F0=$(function(e,r){return{bL:e,dI:r}}),V0=s(pe,"isCollected",ee,s(pe,"center",Na,fe(F0))),z$=xs,E0=Ds,W0=Fs,q0=function(e){return W0(g([E0(W),t(La,Z,e)]))},R0=P(function(e,r,n){return{dl:n,cp:e,en:r}}),N0=s(pe,"bounciness",ne,s(pe,"polygon",Pr(Na),s(pe,"id",z$,fe(R0)))),G0=s(pe,"ballBouncedInLastTickToPolygonWithId",q0(z$),s(pe,"collisionPointsHistory",Pr(Na),s(pe,"coins",Pr(V0),s(pe,"polygons",Pr(N0),s(pe,"ball",B0,fe(T0)))))),Br=Jt,zn=function(e){return s(Ae,$(function(r,n){var a=r.a,o=r.b;return s(Hs,a,o,n)}),Gs(),e)},Ga=function(e){return zn(g([C("x",Br(e.gq)),C("y",Br(e.gu))]))},H0=function(e){return zn(g([C("center",Ga(e.bL)),C("radius",Br(e.fX))]))},sn=$(function(e,r){return s(Ae,Is(e),Ns(),r)}),I0=function(e){return zn(g([C("circle",H0(e.aT)),C("velocity",function(r){var n=r.a,a=r.b;return t(sn,Cr,g([Br(n),Br(a)]))}(e.gk)),C("directionFromXAxis",Br(e.e9)),C("rotationSpeed",Br(e.ew)),C("rotation",Br(e.f1)),C("trail",t(sn,Ga,e.gf))]))},U0=function(e){return zn(g([C("center",Ga(e.bL)),C("isCollected",l$(e.dI))]))},k$=Jt,J0=function(e){return zn(g([C("id",k$(e.cp)),C("polygon",t(sn,Ga,e.en)),C("bounciness",Br(e.dl))]))},O0=Us,X0=function(e){return zn(g([C("ball",I0(e.ce)),C("polygons",t(sn,J0,e.fV)),C("coins",t(sn,U0,e.ap)),C("collisionPointsHistory",t(sn,Ga,e.cj)),C("ballBouncedInLastTickToPolygonWithId",t(te,re(k$),er(O0))(e.dk))]))},T$=$(function(e,r){return{q:r,l:w,C:e}}),Y0=E(function(e,r,n,a){return{dw:e,eh:r,U:t(T$,n,a),c6:"",ca:""}}),Z0=function(e){if(e.b){var r=e.a,n=e.b;return Z(s(Ae,Qe,r,n))}else return W},M$=$(function(e,r){var n={dl:1,cp:1+t(er,-1,Z0(t(Y,function(a){return a.cp},r.fV))),en:e};return V(r,{fV:t(k,n,r.fV)})}),Q0={aT:{bL:t(qr,0,0),fX:.5},e9:0,f1:0,ew:0,gf:w,gk:C(0,0)},K0=t(M$,g([t(qr,6,0),t(qr,6,6),t(qr,0,6)]),{ce:Q0,dk:W,ap:w,cj:w,fV:w}),e1=function(e){return{ao:t(x$,e,{gq:0,gu:0,dg:0}),aE:!0,I:L(Y0,X0,G0,{fJ:"level 1",fR:K0},w),aI:t(qr,0,0),aj:ii}},$a=$(function(e,r){return C(e,Ju(r))}),r1=$(function(e,r){return C(e,Ou(r))}),n1=P(function(e,r,n){return{aC:n,fx:r,fJ:e}}),oo=xr,a1=function(e){return s(Ae,$(function(r,n){var a=r.a,o=r.b;return s(vn,a,o,n)}),oo,e)},t1=P(function(e,r,n){return s(n1,e,r,a1(n))}),nt=t1,An=P(function(e,r,n){var a=r.a,o=r.b;return C(e,t(Xu,C(a,o),n))}),Rr=Uf,o1=L(Mr,255/255,255/255,255/255,1),i1=g([s(nt,"View Options",!0,g([t($a,"draw speed vector",!1),t($a,"draw ball trail",!0),t($a,"orthographic",!0),t($a,"unlit",!0)])),s(nt,"Camera",!0,g([s(An,"camera distance",C(3,60),40),s(An,"camera azimuth",C(0,2*Rr),0),s(An,"camera elevation",C(-Rr/2,Rr/2),0)])),s(nt,"Physics Parameters",!0,g([t($a,"fix time steps",!0),s(An,"gas force",C(20,60),40),s(An,"friction",C(0,1),.4),s(An,"direction change speed",C(1,5),3)])),s(nt,"Color",!0,g([t(r1,"floor color",o1)]))]),D$=function(e){return{$:1,a:e}},Ha=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*o+a*i}),fr=ts,io=function(e){return fr(t(Ha,e,e))},dr=$(function(e,r){return io(C(e.gq-r.gq,e.gu-r.gu))}),c1=$(function(e,r){var n=C(e.dL.eA,r.aj);if(n.a&&n.b.$===1){var a=n.b.a,o=r.aI;return V(r,{aj:D$(function(){var i=ce(a);if(i.b){var c=i.a;return t(dr,c,o)>2?ue(a,g([o])):a}else return g([o])}())})}else return r}),Ne=P(function(e,r,n){return{gq:e,gu:r,dg:n}}),rc=function(e){var r=e;return r.C},Ia=function(e){var r=e;return rc(r.U).fR},l1=$(function(e,r){var n=Ia(r.I).ce;return V(r,{ao:t(x$,e,s(Ne,n.aT.bL.gq,n.aT.bL.gu,0))})}),j$=$(function(e,r){var n=r;return V(n,{C:e(n.C)})}),kn=$(function(e,r){var n=r;return V(n,{U:e(n.U)})}),A$=function(e){return kn(j$(function(r){return V(r,{fR:e(r.fR)})}))},u1=function(e){var r=function(n){return!n.dI&&t(dr,n.bL,e.ce.aT.bL)<1?V(n,{dI:!0}):n};return V(e,{ap:t(Y,r,e.ap)})},B$=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return C(n+o,a+i)}),kr=$(function(e,r){var n=r.a,a=r.b;return C(e*n,e*a)}),nn=$(function(e,r){return t(kr,e/io(r),r)}),$1=$(function(e,r){return t(nn,t(Ha,e,r),e)}),v1=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return C(o-n,i-a)}),f1=$(function(e,r){var n=r.ce,a=t($1,e.b$,n.gk),o=t(v1,a,n.gk),i=t(B$,o,t(kr,e.b4.dl,t(kr,-1,a)));return V(r,{ce:V(n,{gk:i})})}),s1=$(function(e,r){return r.b?s(Xr,k,r,e):e}),We=function(e){return s(Xr,s1,w,e)},Ur=function(e){return e*Rr/180},nc=function(e){var r=function(){if(e.b){var n=e.a,a=e.b;return ue(a,g([n]))}else return w}();return s(Ot,to,e,r)},Ua=$(function(e,r){var n=r.a,a=r.b;return C(n*Hr(e)-a*Ir(e),n*Ir(e)+a*Hr(e))}),qe=$(function(e,r){var n=e.a,a=e.b;return V(r,{gq:r.gq+n,gu:r.gu+a})}),ze=$(function(e,r){return C(e.gq-r.gq,e.gu-r.gu)}),d1=$(function(e,r){var n=r.a,a=r.b,o=t(nn,e,t(Ua,-Ur(90),t(ze,a,n)));return C(t(qe,o,n),t(qe,o,a))}),m1=$(function(e,r){return{e3:t(Y,function(n){return{bL:n,fX:e}},r),f4:t(Y,d1(e),nc(r))}}),mr=$(function(e,r){var n=e.a,a=e.b,o=r.a,i=r.b;return n*i-a*o}),g1=$(function(e,r){var n=C(C(e.ah,e.e8),C(r.ah,r.e8)),a=n.a,o=a.a,i=a.b,c=n.b,l=c.a,u=c.b,v=t(mr,t(ze,l,o),i),f=t(mr,i,u),m=v/f,p=t(mr,t(ze,l,o),u),d=p/f;return!v&&!f?W:f&&0<=d&&0<=m?Z(t(qe,t(kr,d,i),o)):W}),F$=$(function(e,r){r.fX;var n=r.bL,a=t(mr,e.e8,t(ze,n,e.ah))<0?1:-1;return t(g1,{e8:t(Ua,a*Ur(90),e.e8),ah:n},e)}),gr=function(e){var r=e.a,n=e.b;return C(n.gq-r.gq,n.gu-r.gu)},V$=function(e){var r=e.a,n=e.b;return{e8:gr(C(r,n)),ah:r}},p1=$(function(e,r){var n=e.a,a=e.b,o=r.fX,i=t(F$,V$(e),r);if(i.$===1)return W;var c=i.a,l=t(dr,r.bL,c);if(I(l,o)<1){var u=t(qe,t(nn,-fr(o*o-l*l),gr(e)),c),v=t(Ha,t(ze,a,n),t(ze,u,n))>=0&&I(t(dr,n,u),t(dr,n,a))<1;return v?Z(u):W}else return W}),E$=nn(1),b1=P(function(e,r,n){var a=C(e,t(qe,r,e)),o=t(p1,a,n);return t(re,function(i){return{b$:E$(t(ze,i,n.bL)),cb:t(ze,i,e)}},o)}),h1=$(function(e,r){var n=e.a,a=r.a,o=C(C(n,gr(e)),C(a,gr(r))),i=o.a,c=i.a,l=i.b,u=o.b,v=u.a,f=u.b,m=t(mr,t(ze,v,c),l),p=t(mr,l,f),d=m/p,b=t(mr,t(ze,v,c),f),h=b/p;return!m&&!p?W:p&&0<=h&&h<=1&&0<=d&&d<=1?Z(t(qe,t(kr,h,l),c)):W}),W$=function(e){return E$(t(Ua,-Ur(90),gr(e)))},_1=P(function(e,r,n){var a=C(e,t(qe,r,e)),o=t(h1,a,n);return t(re,function(i){return{b$:W$(n),cb:t(ze,i,e)}},o)}),q$=Nf,hl=$(function(e,r){return{bM:e,b$:r.b$,cb:r.cb}}),y1=P(function(e,r,n){var a=t(m1,e.fX,n),o=a.f4,i=a.e3,c=t(yn,function(u){return t(re,hl(u.bL),s(b1,e.bL,r,u))},i),l=t(yn,function(u){return t(re,function(v){return t(hl,t(qe,t(nn,e.fX,t(Ua,Ur(90),gr(u))),t(qe,v.cb,e.bL)),v)},s(_1,e.bL,r,u))},o);return ta(t(q$,t(te,function(u){return u.cb},io),We(g([c,l]))))}),C1=$(function(e,r){return{bM:r.bM,b$:r.b$,b4:e,cb:r.cb}}),P1=$(function(e,r){var n=t(kr,e.dt,r.ce.gk),a=function(c){return t(re,C1(c),s(y1,r.ce.aT,n,c.en))},o=ta(t(q$,t(te,function(c){return c.cb},io),t(yn,a,r.fV)));if(o.$===1)return r;var i=o.a;return t(f1,i,V(r,{dk:Z(i.b4.cp),cj:t(Ji,15,t(k,i.bM,r.cj))}))}),co=$(function(e,r){return We(t(Y,e,r))}),lo=$(function(e,r){return s(Xr,$(function(n,a){return e(n)?t(k,n,a):a}),w,r)}),_l=$(function(e,r){var n=e.a,a=e.b,o=r.fX,i=t(F$,V$(e),r);if(i.$===1)return w;var c=i.a,l=t(dr,r.bL,c);if(I(l,o)<1){var u=fr(o*o-l*l),v=t(qe,t(nn,u,gr(e)),c),f=function(p){return t(Ha,t(ze,a,n),t(ze,p,n))>=0&&I(t(dr,n,p),t(dr,n,a))<1},m=t(qe,t(nn,-u,gr(e)),c);return t(lo,f,se(l,o)?g([m]):g([m,v]))}else return w}),w1=$(function(e,r){var n=e.a,a=e.b;return I(t(dr,n,r.bL),r.fX)<0&&I(t(dr,a,r.bL),r.fX)>-1?t(_l,C(a,n),r):t(_l,C(n,a),r)}),S1=$(function(e,r){var n=r.a,a=C(C(e.ah,e.e8),C(n,gr(r))),o=a.a,i=o.a,c=o.b,l=a.b,u=l.a,v=l.b,f=t(mr,t(ze,u,i),c),m=t(mr,c,v),p=f/m,d=t(mr,t(ze,u,i),v),b=d/m;return!f&&!m?W:m&&b>=0&&p>=0&&p<=1?Z(t(qe,t(kr,b,c),i)):W}),L1=$(function(e,r){var n=e.a;r.fX;var a=r.bL,o=t(mr,gr(e),t(ze,a,n))<0?1:-1;return t(S1,{e8:t(Ua,o*Ur(90),gr(e)),ah:a},e)}),x1=function(e){var r=e.ce,n=$(function(i,c){var l=t(L1,i,c);if(l.$)return c;var u=l.a;return V(c,{bL:t(qe,t(nn,c.fX,W$(i)),t(qe,t(ze,u,c.bL),c.bL))})}),a=t(lo,function(i){return!jt(t(w1,i,r.aT))},t(co,t(te,function(i){return i.en},nc),e.fV)),o=s(Ae,n,r.aT,a);return V(e,{ce:V(r,{aT:o})})},z1=$(function(e,r){return V(r,{ce:e(r.ce)})}),k1=$(function(e,r){return V(r,{gk:t(kr,1-e.dt*5*t(Ar,"friction",e),r.gk)})}),ac=P(function(e,r,n){return I(n,e)<0?e:I(n,r)>0?r:n}),T1=function(e){var r=e.a,n=e.b;return C(r*Hr(n),r*Ir(n))},M1=function(e){return(e.f_?1:0)-(e.fz?1:0)},D1=M1,j1=function(e){return(e.eI?1:0)-(e.ds?1:0)},So=j1,A1=$(function(e,r){var n=t(Ar,"gas force",e),a=T1(C(1,r.e9)),o=B$(t(kr,e.dt*n*So(e.dL),a));return V(r,{e9:r.e9-D1(e.dL)*t(Ar,"direction change speed",e)*e.dt,ew:So(e.dL)?s(ac,-14,14,r.ew+e.dt*1e3*So(e.dL)):t(Ha,r.gk,a),gk:o(r.gk)})}),B1=$(function(e,r){var n=r.aT;return V(r,{aT:V(n,{bL:t(qe,t(kr,e.dt,r.gk),r.aT.bL)})})}),F1=$(function(e,r){return V(r,{f1:r.f1+e.dt*r.ew})}),V1=function(e){return V(e,{gf:function(){var r=e.gf;if(r.b){var n=r.a;return t(dr,n,e.aT.bL)>1?t(k,e.aT.bL,e.gf):e.gf}else return g([e.aT.bL])}()})},E1=$(function(e,r){return V1(t(B1,e,t(F1,e,t(k1,e,t(A1,e,r)))))}),W1=$(function(e,r){return u1(x1(t(z1,E1(e),t(P1,e,r))))}),q1=$(function(e,r){var n=t(W1,e,Ia(r.I));return V(r,{I:t(A$,Yt(n),r.I)})}),ga=function(e){return Ke(Rr*(e/180))},at=function(e){return e},dn=function(e){var r=e;return r},R1=$(function(e,r){var n=e,a=r;return a.gq*n.gq+a.gu*n.gu+a.dg*n.dg}),le=$(function(e,r){var n=r;return e*n}),R$=function(e){var r=e;return r.cM},N1=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.fL,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu+(a.dg-i.dg)*l.dg}),G1=P(function(e,r,n){var a=e,o=r,i=n;return{gq:i.gq+o*a.gq,gu:i.gu+o*a.gu,dg:i.dg+o*a.dg}}),H1=$(function(e,r){var n=Ki(r),a=e,o=a.fL,i=t(R1,o,n);if(i){var c=R$(r),l=t(N1,e,c),u=t(le,-1/i,l);return Z(s(G1,n,u,c))}else return W}),I1=$(function(e,r){return{gq:e,gu:r}}),yl=$(function(e,r){var n=e,a=r;return n*a}),U1=function(e){var r=e;return r},Cl=function(e){var r=e;return U1(r.eT)},J1=function(e){var r=e;return r.aU},O1=function(e){var r=e,n=t(Qe,K(r.gq),t(Qe,K(r.gu),K(r.dg)));if(n){var a=r.dg/n,o=r.gu/n,i=r.gq/n,c=fr(i*i+o*o+a*a);return Z({gq:i/c,gu:o/c,dg:a/c})}else return W},N$=$(function(e,r){var n=r;return n/e}),ci=function(e){var r=e;return ia(r)},G$=fn({gq:0,gu:0,dg:-1}),X1=$(function(e,r){var n=e,a=r;return a/n}),Y1=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gq:v.gq*a.gq+l.gq*a.gu+i.gq*a.dg,gu:v.gu*a.gq+l.gu*a.gu+i.gu*a.dg,dg:v.dg*a.gq+l.dg*a.gu+i.dg*a.dg}}),Bt=function(e){var r=e;return{gq:-r.gq,gu:-r.gu,dg:-r.dg}},li=function(e){var r=e;return Bt(xn(r))},Z1=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.de,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),tc=P(function(e,r,n){var a=e,o=r,i=n;return{gq:a,gu:o,dg:i}}),Q1=E(function(e,r,n,a){var o=e,i=r,c=n,l=a,u=o.cM,v=u,f=o.dh,m=f,p=o.df,d=p,b=o.de,h=b;return{gq:v.gq+i*h.gq+c*d.gq+l*m.gq,gu:v.gu+i*h.gu+c*d.gu+l*m.gu,dg:v.dg+i*h.dg+c*d.dg+l*m.dg}}),K1=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=n.df,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),me=0,e3=P(function(e,r,n){var a=e,o=t(K1,Cl(r),n),i=t(Z1,Cl(r),n),c=a.dc,l=c,u=J1(r);u.a;var v=u.b,f=a.cX;if(f.$){var b=f.a,h=t(X1,v,b),y=L(Q1,l,t(yl,h,i),t(yl,h,o),me);return t(zr,y,li(a.dc))}else{var m=f.a,p=At(t(N$,m,t(le,.5,v))),d=t(Y1,l,t(er,G$,O1(s(tc,i,o,p))));return t(zr,ci(a.dc),d)}}),ui=function(e){var r=e;return{gq:Hr(r),gu:Ir(r)}},r3=function(e){var r=e;return{gq:-r.gu,gu:r.gq}},n3=function(e){return e},a3=$(function(e,r){return n3({cM:r,de:e,df:r3(e)})}),t3=$(function(e,r){return t(a3,ui(e),r)}),o3=P(function(e,r,n){var a=e.a,o=e.b;return{eT:t(t3,r,n),aU:C(je(a),je(o))}}),Rn=function(e){var r=e;return r.gq},i3=$(function(e,r){var n=e,a=r;return{gq:n,gu:a}}),Nn=function(e){var r=e;return r.gu},Gn=function(e){var r=e;return r.dg},c3=E(function(e,r,n,a){var o=n.gq,i=n.gu,c=function(v){return s(Ne,dn(Rn(v)),dn(Nn(v)),dn(Gn(v)))},l=s(o3,C(at(r.go),at(r.fo)),ga(0),t(I1,0,0)),u=t(i3,at(o),at(i));return t(re,c,t(H1,a,s(e3,e,l,u)))}),l3=$(function(e,r){return{fL:e,cM:r}}),u3=$(function(e,r){var n=r;return t(l3,n.fL,t(la,e,n.cM))}),$3=$(function(e,r){return{fL:r,cM:e}}),v3=t($3,Yr,ao),f3=E(function(e,r,n,a){return L(c3,r,n,a,t(u3,s(tc,xe(0),xe(0),xe(e)),v3))}),s3=f3(0),d3=$(function(e,r){return V(r,{aI:t(er,r.aI,t(re,function(n){return t(qr,n.gq,n.gu)},s(s3,r.ao,e.aL,e.em)))})}),m3=$(function(e,r){var n=t(oa,"fix time steps",e)?V(e,{dt:.016}):e,a=r.aE?c1(n):Cr;return t(l1,n,t(q1,n,t(d3,n,a(r))))}),g3=$(function(e,r){var n=r;return V(n,{l:t(k,n.C,n.l),C:e})}),p3=$(function(e,r){var n=r;if(e.$)return n;var a=rc(n.U);return t(kn,g3(V(a,{fJ:a.fJ+" copy"})),n)}),b3=$(function(e,r){var n=r;if(e.$===4){var a=e.a;return t(kn,j$(function(o){return V(o,{fJ:a})}),n)}else return n}),h3=$(function(e,r){return{fJ:e,fR:r}}),_3=Ws,y3=Ls,C3=$(function(e,r){var n=r;return V(n,{U:function(){var a=s(Zt,h3,t(j,"name",On),t(j,"page",n.eh));return t(p$,n.U,t(_3,t(B,function(o){if(o.b){var i=o.a,c=o.b;return fe(t(T$,i,c))}else return y3("List of pages is empty")},Pr(a)),e))}()})}),oc=function(e){var r=e;return ue(ce(r.l),ue(g([r.C]),r.q))},P3=$(function(e,r){var n=r;switch(e.$){case 6:return V(n,{c6:t(Au,2,t(sn,function(o){return zn(g([C("name",t$(o.fJ)),C("page",n.dw(o.fR))]))},oc(n.U)))});case 7:return t(C3,n.ca,n);case 8:var a=e.a;return V(n,{ca:a});default:return n}}),w3=function(e){var r=e,n=r.q;if(n.b){var a=n.a,o=n.b;return V(r,{q:o,l:t(k,a,r.l)})}else return V(r,{q:ce(r.l),l:w})},S3=$(function(e,r){var n=r;return e.$===2?t(kn,w3,n):n}),L3=function(e){var r=e,n=r.l;if(n.b){var a=n.a,o=n.b;return V(r,{q:t(k,a,r.q),l:o})}else return V(r,{q:w,l:ce(r.q)})},x3=$(function(e,r){var n=r;return e.$===3?t(kn,L3,n):n}),z3=function(e){var r=e,n=r.l;if(n.b){var a=n.a,o=n.b;return V(r,{l:o,C:a})}else{var i=r.q;if(i.b){var a=i.a,o=i.b;return V(r,{q:o,C:a})}else return r}},k3=$(function(e,r){var n=r;return e.$===1?t(kn,z3,n):n}),T3=$(function(e,r){var n=r,a=oc(n),o=t(ka,Sr(a),e),i=t(Ui,o,a);if(i.b){var c=i.a,l=i.b;return{q:l,l:ce(t(Ji,o,a)),C:c}}else return n}),M3=$(function(e,r){var n=r;if(e.$===5){var a=e.a;return t(kn,T3(a),n)}else return n}),D3=$(function(e,r){return t(P3,e,t(b3,e,t(M3,e,t(x3,e,t(S3,e,t(k3,e,t(p3,e,r)))))))}),j3=P(function(e,r,n){switch(r.$){case 0:return V(n,{aE:!n.aE,aj:ii});case 1:return V(n,{aj:D$(w)});case 2:var a=r.a;return V(n,{I:t(A$,M$(a),n.I),aj:ii});default:var o=r.a;return V(n,{I:t(D3,o,n.I)})}}),uo=function(e){return e},A3=function(e){var r=e;return r},B3=function(e){var r=s(ac,1667,25e3,A3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return uo({gq:n,gu:a})},H$=function(e){return e},F3=function(e){return{$:0,a:e}},V3=F3,E3={$:3},W3=E3,q3=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),R3=q3,N3=function(e){return{$:1,a:e}},G3=N3,H3=function(e){return t(Tr,"height",Ve(e))},I3=function(e){return vd(gd(e))},U3=I3,J3=function(e){return{$:2,a:e}},O3=J3,X3=function(e){return t(ln,"",e)},Y3=function(e){var r=e.a,n=e.b,a=e.c,o=e.d,i=function(l){return rr(l*1e3)/1e3},c=function(l){return rr(l*1e4)/100};return X3(g(["rgba(",$e(c(r)),"%,",$e(c(n)),"%,",$e(c(a)),"%,",$e(i(o)),")"]))},Z3=$(function(e,r){switch(r.$){case 0:return t(sm,e,r);case 1:return t(dm,e,r);case 2:return t(mm,e,r);case 3:return t(gm,e,r);case 4:return t(pm,e,r);default:return t(bm,e,r)}}),Q3=$(function(e,r){switch(r.$){case 0:return t(Gd,e,r);case 1:return t(Hd,e,r);case 2:return t(Id,e,r);case 3:return t(Ud,e,r);case 4:return t(Jd,e,r);case 5:return t(Od,e,r);case 6:return t(Xd,e,r);case 7:return t(Yd,e,r);default:return Zd(e)}}),K3=P(function(e,r,n){return s(fm,e,r,n)}),Pl=function(e){var r=e;return r},ua=km,Lo=L(ua,1,1,1,1),pr=P(function(e,r,n){return t(Y,function(a){return t(a,r,n)},e)}),eb=P(function(e,r,n){return{$:0,a:e,b:r,c:n}}),rb=$(function(e,r){var n=e,a=r.gq,o=r.gu;return s(eb,n*a/o,n,n*(1-a-o)/o)}),Ja=Pm,nb=function(e){var r=e.a,n=e.b,a=e.c;return s(Ja,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},$o=$(function(e,r){return nb(t(rb,e,r))}),I$=$(function(e,r){return{dJ:se(e.dJ,r.dJ),r:e.r*r.r+e.s*r.u+e.t*r.x,s:e.r*r.s+e.s*r.v+e.t*r.y,t:e.r*r.t+e.s*r.w+e.t*r.z,u:e.u*r.r+e.v*r.u+e.w*r.x,v:e.u*r.s+e.v*r.v+e.w*r.y,w:e.u*r.t+e.v*r.w+e.w*r.z,x:e.x*r.r+e.y*r.u+e.z*r.x,y:e.x*r.s+e.y*r.v+e.z*r.y,z:e.x*r.t+e.y*r.w+e.z*r.z,J:r.J+(e.J*r.r+e.K*r.u+e.L*r.x)*r.b8,K:r.K+(e.J*r.s+e.K*r.v+e.L*r.y)*r.b8,L:r.L+(e.J*r.t+e.K*r.w+e.L*r.z)*r.b8,b8:e.b8*r.b8}}),hr=Bm,ab=function(e){return hr({dS:e.r,dT:e.u,dU:e.x,dV:e.J,dW:e.s,dX:e.v,dY:e.y,dZ:e.K,d_:e.t,d$:e.w,d0:e.z,d1:e.L,d2:0,d3:0,d4:0,d5:1})},xo=ye(function(e,r,n,a,o){var i=a.dJ?1:-1,c=L(ua,a.b8,a.b8,a.b8,i);return Ge(o,e,c,ab(a),a.dJ,r,n)}),U$=lr(function(e,r,n,a,o,i){e:for(;;)switch(o.$){case 0:return i;case 5:var c=o.a,l=o.b,u=e,v=r,f=n,m=t(I$,c,a),p=l,d=i;e=u,r=v,n=f,a=m,o=p,i=d;continue e;case 1:var b=o.b,h=t(k,x(xo,e,r,n,a,b),i.O);return{O:h,X:i.X,f3:i.f3};case 3:var y=o.b,S=t(k,x(xo,e,r,n,a,y),i.X);return{O:i.O,X:S,f3:i.f3};case 2:var _=o.a,z=t(k,x(xo,e,r,n,a,_),i.f3);return{O:i.O,X:i.X,f3:z};default:var A=o.a;return s(Ae,L(U$,e,r,n,a),i,A)}}),tb=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),J$=tb,ic=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ob=function(e){var r=e.ab,n=e.Z,a=e.Y;return L(ic,518,r,n,a)},ib=$(function(e,r){return{$:6,a:e,b:r}}),cb=ib,O$=g([ob({Y:1,Z:0,ab:!1}),L(J$,!1,!1,!1,!1),t(cb,0,1)]),Xn=519,cc=8,X$=15,Hn=7681,lb={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ve=Nd,ub=$(function(e,r){return{$:0,a:e,b:r}}),$b=ub({dv:1,dF:0,ee:5}),Ze=ym,vb=$b(g([{ep:t(Ze,-1,-1)},{ep:t(Ze,1,-1)},{ep:t(Ze,-1,1)},{ep:t(Ze,1,1)}])),fb={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ep"},uniforms:{}},sb=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},lc=P(function(e,r,n){var a=e.cZ,o=e.cA,i=e.dd,c=$(function(v,f){var m=v;return f(m)}),l=$(function(v,f){var m=v;return f(m)}),u=function(v){return t(te,c(v.bw),t(te,l(v.bj),t(te,l(v.bE),l(v.bF))))};return t(u,n,t(u,r,s(sb,a,o,i)))}),uc=function(e){return s(lc,{cA:e.cA,cZ:e.cZ,dd:e.dd},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF})},$c=function(e){return x(ve,g([uc(e),L(J$,!1,!1,!1,!1)]),fb,lb,vb,{})},db=$c({bj:Hn,cA:0,cZ:cc,bw:Xn,dd:X$,bE:Hn,bF:Hn}),mb=516,wl=5386,Ee=7680,gb=function(e){return t(en,2,e+4)},Y$=function(e){return $c({bj:Ee,cA:X$,cZ:cc,bw:mb,dd:gb(e),bE:wl,bF:wl})},pb=P(function(e,r,n){return We(g([s(pr,e,n,O$),g([Y$(r),db])]))}),bb=$(function(e,r){return We(t(Xt,pb(e),r))}),hb=function(e){var r=e.ab,n=e.Z,a=e.Y;return L(ic,513,r,n,a)},_b=hb({Y:1,Z:0,ab:!0}),yb=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:o,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Cb=function(e){var r=e.b6,n=e.bR,a=e.bJ,o=e.bG,i=e.bN,c=e.aR,l=$(function(u,v){var f=u.a,m=u.b,p=u.c,d=v.a,b=v.b,h=v.c;return yb(f)(m)(p)(d)(b)(h)(r)(n)(a)(o)});return t(l,i,c)},Pb=P(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Sl=$(function(e,r){var n=e,a=r;return s(Pb,32774,n,a)}),wb=1,Ll=771,Sb=770,vc=Cb({bG:0,aR:t(Sl,wb,Ll),bJ:0,bN:t(Sl,Sb,Ll),bR:0,b6:0}),Bn=g([_b,vc]),Lb=function(e){var r=e;return r.d7},xb=function(e){var r=e;return r.d8},Z$=function(e){var r=e;return r.d9},zb=function(e){var r=e;return r.ea},kb=function(e){var r=e;return r.eb},Q$=function(e){var r=e;return r.ec},De=$(function(e,r){var n=e,a=r;return a-n}),K$=function(e){return T(t(De,zb(e),Lb(e)),t(De,kb(e),xb(e)),t(De,Q$(e),Z$(e)))},Tb=function(e){return e},Mb=function(e){return ca({cM:Tb({gq:e.J,gu:e.K,dg:e.L}),de:fn({gq:e.r,gu:e.s,dg:e.t}),df:fn({gq:e.u,gu:e.v,dg:e.w}),dh:fn({gq:e.x,gu:e.y,dg:e.z})})},zo=$(function(e,r){var n=e,a=r,o=n.dh,i=o,c=n.df,l=c,u=n.de,v=u;return{gq:a.gq*v.gq+a.gu*v.gu+a.dg*v.dg,gu:a.gq*l.gq+a.gu*l.gu+a.dg*l.dg,dg:a.gq*i.gq+a.gu*i.gu+a.dg*i.dg}}),ev=$(function(e,r){var n=e,a=r,o=n.cM,i=o,c=a.gq-i.gq,l=a.gu-i.gu,u=a.dg-i.dg,v=n.dh,f=v,m=n.df,p=m,d=n.de,b=d;return{gq:c*b.gq+l*b.gu+u*b.dg,gu:c*p.gq+l*p.gu+u*p.dg,dg:c*f.gq+l*f.gu+u*f.dg}}),rv=$(function(e,r){return{cM:t(ev,e,ia(r)),de:t(zo,e,Sn(r)),df:t(zo,e,Ln(r)),dh:t(zo,e,xn(r))}}),pt=P(function(e,r,n){return{gq:e,gu:r,dg:n}}),Ft=function(e){var r=e;return r},be=$(function(e,r){var n=e,a=r;return t(Qe,n,a)}),bt=$(function(e,r){return I(e,r)<0?e:r}),Pe=$(function(e,r){var n=e,a=r;return t(bt,n,a)}),Db=$(function(e,r){var n=Ft(r),a=Ft(e);return{d7:t(be,a.d7,n.d7),d8:t(be,a.d8,n.d8),d9:t(be,a.d9,n.d9),ea:t(Pe,a.ea,n.ea),eb:t(Pe,a.eb,n.eb),ec:t(Pe,a.ec,n.ec)}}),cr=function(e){var r=e;return r},jb=function(e){var r=e;return T(r.gq,r.gu,r.dg)},mn=$(function(e,r){var n=e,a=r;return a+n}),Ab=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=gt(je(a)),c=gt(je(n)),l=gt(je(o)),u=jb(r),v=u.a,f=u.b,m=u.c;return{d7:t(mn,c,v),d8:t(mn,i,f),d9:t(mn,l,m),ea:t(De,c,v),eb:t(De,i,f),ec:t(De,l,m)}}),xl=E(function(e,r,n,a){var o=n.e_,i=2*n.fm*r,c=2*n.fl*r,l=2*n.fk*r,u=o.dg*r,v=o.gu*r,f=o.gq*r,m=cr(xn(e)),p=K(l*m.gq)+K(c*m.gu)+K(i*m.dg),d=cr(Ln(e)),b=K(l*d.gq)+K(c*d.gu)+K(i*d.dg),h=cr(Sn(e)),y=K(l*h.gq)+K(c*h.gu)+K(i*h.dg),S=t(Ab,T(y,b,p),t(ev,e,s(pt,f,v,u)));if(a.$)return Z(S);var _=a.a;return Z(t(Db,_,S))}),$i=E(function(e,r,n,a){e:for(;;)if(a.b){var o=a.a,i=a.b;switch(o.$){case 0:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 1:var c=o.a,l=L(xl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 2:var d=e,b=r,h=n,y=i;e=d,r=b,n=h,a=y;continue e;case 3:var c=o.a,l=L(xl,e,r,c,n),d=e,b=r,h=l,y=i;e=d,r=b,n=h,a=y;continue e;case 4:var u=o.a,d=e,b=r,h=L($i,e,r,n,u),y=i;e=d,r=b,n=h,a=y;continue e;default:var v=o.a,f=o.b,m=t(rv,Mb(v),e),p=r*v.b8,d=e,b=r,h=L($i,m,p,n,g([f])),y=i;e=d,r=b,n=h,a=y;continue e}}else return n}),Tn=wm,Mn=Sm,Dn=Lm,nv=function(e){return{$:4,a:e}},Bb=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,o=a,i=t(k,n,r);e=o,r=i;continue e}else return r}),Oa=function(e){return nv(t(Bb,e,w))},Fb={dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:0,K:0,L:0,b8:1},zl=$c({bj:Hn,cA:0,cZ:cc,bw:Xn,dd:255,bE:Hn,bF:Hn}),Vb=function(e){var r=e,n=t(Qe,K(r.gq),t(Qe,K(r.gu),K(r.dg)));if(n){var a=r.dg/n,o=r.gu/n,i=r.gq/n,c=fr(i*i+o*o+a*a);return c*n}else return me},Ye={bJ:0,eZ:!1,bR:0,cV:0,b6:0,c8:0,gq:0,gu:0,dg:0},ar=$(function(e,r){var n=e,a=r;return hr({dS:n.gq,dT:n.b6,dU:a.gq,dV:a.b6,dW:n.gu,dX:n.bR,dY:a.gu,dZ:a.bR,d_:n.dg,d$:n.bJ,d0:a.dg,d1:a.bJ,d2:n.c8,d3:n.cV,d4:a.c8,d5:a.cV})}),pa=C({bo:t(ar,Ye,Ye),bW:t(ar,Ye,Ye),bX:t(ar,Ye,Ye),bY:t(ar,Ye,Ye)},L(ua,0,0,0,0)),av=514,tv=function(e){var r=e.ab,n=e.Z,a=e.Y;return L(ic,515,r,n,a)},ov=240,Eb=g([tv({Y:1,Z:0,ab:!0}),uc({bj:Ee,cA:ov,cZ:0,bw:av,dd:0,bE:Ee,bF:Ee}),vc]),Wb=$(function(e,r){var n=e,a=r.fK,o=r.fh,i=r.eS,c=je(a),l=c,u=je(o),v=u,f=n.cX;if(f.$){var p=f.a;return Xo(v)?hr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:0,d1:-1,d2:0,d3:0,d4:0,d5:1}):hr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:-2/(v-l),d1:-(v+l)/(v-l),d2:0,d3:0,d4:0,d5:1})}else{var m=f.a;return Xo(v)?hr({dS:1/(i*m),dT:0,dU:0,dV:0,dW:0,dX:1/m,dY:0,dZ:0,d_:0,d$:0,d0:-1,d1:-2*l,d2:0,d3:0,d4:-1,d5:0}):hr({dS:1/(i*m),dT:0,dU:0,dV:0,dW:0,dX:1/m,dY:0,dZ:0,d_:0,d$:0,d0:-(v+l)/(v-l),d1:-2*v*l/(v-l),d2:0,d3:0,d4:-1,d5:0})}}),tt=$(function(e,r){return(1&e>>r)===1?0:1}),qb=function(e){return g([tv({Y:1,Z:0,ab:!0}),uc({bj:Ee,cA:ov,cZ:e,bw:av,dd:0,bE:Ee,bF:Ee}),vc])},Rb=P(function(e,r,n){return We(t(Y,function(a){var o=a<<4,i=L(ua,t(tt,a,0),t(tt,a,1),t(tt,a,2),t(tt,a,3));return s(pr,e,C(r,i),qb(o))},t(bn,1,t(en,2,n)-1)))}),In=function(e){var r=e;return r},Nb=Fm,iv=fn({gq:0,gu:1,dg:0}),fc=iv,Gb={cM:Yr,de:ec,df:fc,dh:ao},Xa=function(e){var r=e;return r},Hb=function(e){var r=Xa(ia(e)),n=cr(xn(e)),a=cr(Ln(e)),o=cr(Sn(e));return hr({dS:o.gq,dT:a.gq,dU:n.gq,dV:r.gq,dW:o.gu,dX:a.gu,dY:n.gu,dZ:r.gu,d_:o.dg,d$:a.dg,d0:n.dg,d1:r.dg,d2:0,d3:0,d4:0,d5:1})},Ib=$(function(e,r){var n=r;return Hb(t(rv,n,e))}),Ub=function(e){return t(Ib,Gb,e)},Jb=function(e){var r=e;return r.dc},Ob=function(e){var r=e;return Sn(r)},Xb=function(e){var r=e;return Ln(r)},Yb=function(e){var r=Jb(e.ao),n=ca({cM:ci(r),de:Ob(r),df:Xb(r),dh:Bt(li(r))}),a=Oa(e.aZ),o=a,i=L($i,n,1,W,g([o]));if(i.$===1)return w;var c=i.a,l=Ub(r),u=t(le,.99,t(be,je(e.$7),At(Z$(c)))),v=K$(c),f=v.a,m=v.b,p=v.c,d=Vb(s(tc,f,m,p)),b=t(le,1.01,t(mn,d,At(Q$(c)))),h=t(Wb,e.ao,{eS:e.eS,fh:b,fK:u}),y=Nb(h).d5,S=y?cr(Bt(li(r))):In(ci(r)),_=function(){var ge=e.ge;switch(ge.$){case 0:return C(0,0);case 1:return C(1,0);case 2:return C(2,0);case 3:var Se=ge.a;return C(3,Se);case 4:var Se=ge.a;return C(4,Se);default:return C(5,0)}}(),z=_.a,A=_.b,H=e.ff,G=H,N=t($o,G,e.gn),U=N,J=hr({dS:0,dT:S.gq,dU:Tn(U),dV:e.eD,dW:0,dX:S.gu,dY:Mn(U),dZ:dn(d),d_:0,d$:S.dg,d0:Dn(U),d1:z,d2:0,d3:y,d4:0,d5:A}),q=Ge(U$,J,l,h,Fb,o,{O:w,X:w,f3:w}),Q=e.fC;switch(Q.$){case 0:var ae=Q.a;return We(g([s(pr,q.O,C(ae,Lo),Bn),s(pr,q.X,pa,Bn)]));case 1:var ae=Q.a;return We(g([s(pr,q.O,pa,Bn),g([zl]),s(pr,q.f3,ae.bo,O$),g([Y$(0)]),s(pr,q.O,C(ae,Lo),Eb),s(pr,q.X,pa,Bn)]));default:var _e=Q.a,Ce=Q.b;return We(g([s(pr,q.O,C(Ce,Lo),Bn),g([zl]),t(bb,q.f3,_e),s(Rb,q.O,Ce,Sr(_e)),s(pr,q.X,pa,Bn)]))}},Zb=function(e){return t(Tr,"width",Ve(e))},cv=$(function(e,r){var n=g([G3(1),O3(0),V3(!0),L(R3,0,0,0,0)]),a=function(){var z=e.eQ;switch(z.$){case 0:return T(n,"0",1);case 1:return T(t(k,W3,n),"1",1);default:var A=z.a;return T(n,"0",A)}}(),o=a.a,i=a.b,c=a.c,l=e.aU,u=l.a,v=l.b,f=Pl(v),m=t(oe,"height",Ve(f)+"px"),p=Pl(u),d=p/f,b=t(co,function(z){return Yb({eS:d,ao:e.ao,$7:e.$7,aZ:z.aZ,ff:z.ff,fC:z.fC,eD:c,ge:z.ge,gn:z.gn})},r),h=t(oe,"width",Ve(p)+"px"),y=e.eU,S=y,_=Y3(S);return s(U3,"div",g([t(oe,"padding","0px"),h,m]),g([C(i,s(K3,o,g([Zb(rr(p*c)),H3(rr(f*c)),h,m,t(oe,"display","block"),t(oe,"background-color",_)]),b))]))}),Qb=function(e){return{$:2,a:e}},lv=function(e){return Qb(e)},Kb=function(e){return t(cv,{eQ:lv(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU},g([{aZ:e.aZ,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},Vt=function(e){return e},eh=function(e){var r=e;return r},sc=function(e){var r=e;return eh(r.eT)},uv=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),rh=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),$v=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),vv=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),nh=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),ah=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),th=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),dc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,o=e.c;return L(th,n,r,o,1);case 2:var n=e.a,r=e.b,o=e.c;return L(uv,n,r,o,1);case 3:var n=e.a,a=e.b,o=e.c;return L(rh,n,a,o,1);case 4:var n=e.a,a=e.b,o=e.c;return L($v,n,a,o,1);case 5:var n=e.a,a=e.b,o=e.c;return L(ah,n,a,o,1);case 6:var n=e.a,a=e.b,o=e.c;return L(vv,n,a,o,1);case 7:var n=e.a,a=e.b,o=e.c;return L(nh,n,a,o,1);case 8:return e;case 9:return e;default:return e}},mc={$:0},oh=ie(function(e,r,n,a,o,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,f=Ft(c(u)),m=t(Pe,f.ea,e),p=t(be,f.d7,r),d=t(Pe,f.eb,n),b=t(be,f.d8,a),h=t(Pe,f.ec,o),y=t(be,f.d9,i),S=c,_=v;e=m,r=p,n=d,a=b,o=h,i=y,c=S,l=_;continue e}else return{d7:r,d8:a,d9:i,ea:e,eb:n,ec:o}}),ih=P(function(e,r,n){var a=Ft(e(r));return Ht(oh,a.ea,a.d7,a.eb,a.d8,a.ec,a.d9,e,n)}),ya=$(function(e,r){var n=e,a=r;return I(a,n)<1}),fv=function(e){return t(ya,e.d7,e.ea)&&t(ya,e.d8,e.eb)&&t(ya,e.d9,e.ec)?e:{d7:t(be,e.ea,e.d7),d8:t(be,e.eb,e.d8),d9:t(be,e.ec,e.d9),ea:t(Pe,e.ea,e.d7),eb:t(Pe,e.eb,e.d8),ec:t(Pe,e.ec,e.d9)}},Ma=function(e){var r=e;return r},sv=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=Rn(n),c=Nn(n),l=Gn(n),u=Rn(a),v=Nn(a),f=Gn(a),m=Rn(o),p=Nn(o),d=Gn(o);return fv({d7:t(be,i,t(be,u,m)),d8:t(be,c,t(be,v,p)),d9:t(be,l,t(be,f,d)),ea:t(Pe,i,t(Pe,u,m)),eb:t(Pe,c,t(Pe,v,p)),ec:t(Pe,l,t(Pe,f,d))})},dv=xm,Ie=function(e){return dv(Xa(e))},mv=function(e){var r=e;return r},vo=function(e){return dv(mv(e))},ch=$(function(e,r){var n=e,a=r;return{gq:a.gu*n.dg-a.dg*n.gu,gu:a.dg*n.gq-a.gq*n.dg,dg:a.gq*n.gu-a.gu*n.gq}}),vi=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu,dg:a.dg-n.dg}}),gv=function(e){return e},lh={gq:0,gu:0,dg:0},uh=$(function(e,r){var n=e,a=r,o=t(Qe,K(a.gq),t(Qe,K(a.gu),K(a.dg)));if(o){var i=a.dg/o,c=a.gu/o,l=a.gq/o,u=fr(l*l+c*c+i*i);return{gq:n*l/u,gu:n*c/u,dg:n*i/u}}else return lh}),$h=uh(gv(1)),pv=P(function(e,r,n){var a=t(vi,r,n),o=t(vi,e,r);return $h(t(ch,a,o))}),vh=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=vo(s(pv,n,a,o));return T({o:i,ep:Ie(n)},{o:i,ep:Ie(a)},{o:i,ep:Ie(o)})},fh=$(function(e,r){return{$:2,a:e,b:r}}),bv=fh({dv:3,dF:0,ee:4}),sh=function(e){if(e.b){var r=e.a,n=e.b,a=bv(t(Y,vh,e)),o=s(ih,sv,r,n);return L(uv,o,e,a,0)}else return mc},Xe=P(function(e,r,n){return T(e,r,n)}),Me=P(function(e,r,n){var a=e,o=r,i=n;return{gq:a,gu:o,dg:i}}),hv=function(){var e=xe(1),r=xe(1),n=xe(1),a=t(le,-.5,e),o=t(le,-.5,r),i=t(le,-.5,n),c=s(Me,i,o,a),l=t(le,.5,e),u=s(Me,i,o,l),v=t(le,.5,r),f=s(Me,i,v,a),m=s(Me,i,v,l),p=t(le,.5,n),d=s(Me,p,o,a),b=s(Me,p,v,a),h=s(Me,p,o,l),y=s(Me,p,v,l);return dc(sh(g([s(Xe,c,b,d),s(Xe,c,f,b),s(Xe,u,h,y),s(Xe,u,y,m),s(Xe,d,b,y),s(Xe,d,y,h),s(Xe,c,m,f),s(Xe,c,u,m),s(Xe,c,d,h),s(Xe,c,h,u),s(Xe,f,y,b),s(Xe,f,m,y)])))}(),ot={$:0},dh=P(function(e,r,n){return{$:1,a:e,b:r,c:n}}),mh=P(function(e,r,n){var a=r.a,o=r.b,i=r.c,c=e(i),l=e(o),u=e(a),v=vo(s(pv,u,l,c)),f={o:v,ep:Ie(u)},m={o:v,ep:Ie(l)},p={o:v,ep:Ie(c)};return t(k,f,t(k,m,t(k,p,n)))}),gc=function(e){var r=e;return r.E},gh=E(function(e,r,n,a){if(r.$===1)return W;var o=r.a;if(n.$===1)return W;var i=n.a;if(a.$===1)return W;var c=a.a;return Z(s(e,o,i,c))}),Cn=4294967295>>>32-sr,Da=kf,ph=P(function(e,r,n){e:for(;;){var a=Cn&r>>>e,o=t(Da,a,n);if(o.$){var v=o.a;return t(Da,Cn&r,v)}else{var i=o.a,c=e-sr,l=r,u=i;e=c,r=l,n=u;continue e}}}),_v=function(e){return e>>>5<<5},Fr=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d;return e<0||I(e,n)>-1?W:I(e,_v(n))>-1?Z(t(Da,Cn&e,i)):Z(s(ph,a,e,o))}),pc=function(e){var r=e;return r.am},ko=$(function(e,r){return t(Fr,e,pc(r))}),yv=function(e){var r=function(n){var a=n.a,o=n.b,i=n.c;return L(gh,P(function(c,l,u){return T(c,l,u)}),t(ko,a,e),t(ko,o,e),t(ko,i,e))};return t(yn,r,gc(e))},bh=P(function(e,r,n){e:for(;;){var a=t(qi,he,e),o=a.a,i=a.b;if(I(Lr(o),he)<0)return t(Ri,!0,{A:r,m:n,p:o});var c=i,l=t(k,_n(o),r),u=n+1;e=c,r=l,n=u;continue e}}),ja=function(e){return e.b?s(bh,e,w,0):Wi},hh=P(function(e,r,n){return e(r(n))}),_h=$(function(e,r){return!t(Yu,t(hh,gg,e),r)}),bc=function(e){var r=e.a;return r},hc=$(function(e,r){var n=bc(e),a=function(o){var i=o.a,c=o.b,l=o.c;return i>=0&&I(i,n)<0&&c>=0&&I(c,n)<0&&l>=0&&I(l,n)<0};return t(_h,a,r)?{E:r,am:e}:{E:t(lo,a,r),am:e}}),yh=P(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ya=yh({dv:1,dF:3,ee:4}),ht=$(function(e,r){var n=In(r),a=In(e);return C(T(a.gq,a.gu,a.dg),T(n.gq,n.gu,n.dg))}),kl=s(Ja,0,0,0),To=lr(function(e,r,n,a,o,i){var c=i.a,l=i.b,u=i.c,v=t(aa,t(ht,e,r),o);if(v.$){var m={o:kl,ep:Ie(r)},p={o:kl,ep:Ie(e)},d=u+1,b=u;return T(t(k,T(n,b,d),t(k,T(n,d,a),c)),t(k,m,t(k,p,l)),u+2)}else{var f=v.a;return T(t(k,T(n,f,a),c),l,u)}}),Ch=ye(function(e,r,n,a,o){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),m=e(l),p=e(c),d=a+2,b=a+1,h=a,y=e,S=r,_=v,z=a+3,A=Ge(To,f,p,d,h,r,Ge(To,m,f,b,d,r,Ge(To,p,m,h,b,r,o)));e=y,r=S,n=_,a=z,o=A;continue e}else{var H=o,G=H.a,N=H.b;return C(G,ce(N))}}),Ph=ye(function(e,r,n,a,o){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),m=e(l),p=e(c),d=n+2,b=n+1,h=n,y=s(vn,t(ht,p,f),d,s(vn,t(ht,f,m),b,s(vn,t(ht,m,p),h,o))),S=t(k,T(h,b,d),a),_=e,z=v,A=n+3,H=S,G=y;e=_,r=z,n=A,a=H,o=G;continue e}else return T(a,o,n)}),cn=P(function(e,r,n){var a=yv(n),o=s(Xr,mh(r),w,a),i=x(Ph,r,a,0,w,oo),c=i.a,l=i.b,u=i.c,v=x(Ch,r,l,a,0,T(c,w,u)),f=v.a,m=v.b,p=jt(m)?o:ue(o,m);return s(dh,e,t(hc,ja(p),f),t(Ya,p,f))}),fi=function(e){return{E:t(Y,function(r){return T(3*r,3*r+1,3*r+2)},t(bn,0,Sr(e)-1)),am:ja(We(t(Y,function(r){var n=r.a,a=r.b,o=r.c;return g([n,a,o])},e)))}},Cv=function(e){switch(e.$){case 0:return ot;case 1:var a=e.a,r=e.b,n=t(Y,Ma,r);return s(cn,a,Cr,fi(n));case 2:var a=e.a,r=e.b,n=t(Y,Ma,r);return s(cn,a,Cr,fi(n));case 3:var a=e.a,o=e.b;return s(cn,a,Cr,o);case 4:var a=e.a,o=e.b;return s(cn,a,function(i){return i.ep},o);case 5:var a=e.a,o=e.b;return s(cn,a,function(i){return i.ep},o);case 6:var a=e.a,o=e.b;return s(cn,a,function(i){return i.ep},o);case 7:var a=e.a,o=e.b;return s(cn,a,function(i){return i.ep},o);case 8:return ot;case 9:return ot;default:return ot}},Tl=Cv(hv),_c=function(e){var r=e;return r.aU},Pv={$:0},D=Pv,Le=$(function(e,r){return{$:1,a:e,b:r}}),wh={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bO"}},Sh=1029,Lh=function(e){return{$:5,a:e}},wv=function(e){var r=e;return Lh(r)},xh=wv(Sh),zh=1028,kh=wv(zh),Ue=P(function(e,r,n){return r===1?e?t(k,xh,n):t(k,kh,n):n}),Sv={src:`
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
    `,attributes:{position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Mo=E(function(e,r,n,a){return t(Le,r,ie(function(o,i,c,l,u,v,f,m){return x(ve,s(Ue,l,a,m),Sv,wh,n,{bO:e,b:c,c:i,d:v,e:o,f:u})}))}),yc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aD"}},Lv={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Dr=E(function(e,r,n,a){return t(Le,r,ie(function(o,i,c,l,u,v,f,m){return x(ve,s(Ue,l,a,m),Lv,yc,n,{aD:e,b:c,c:i,d:v,e:o,f:u})}))}),xv=$(function(e,r){return{$:3,a:e,b:r}}),Th={src:`
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
    `,attributes:{},uniforms:{constantColor:"aD",pointRadius:"b3",sceneProperties:"e"}},zv={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b3",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Mh=E(function(e,r,n,a){return t(xv,n,ie(function(o,i,c,l,u,v,f,m){return x(ve,m,zv,Th,a,{aD:e,b:c,c:i,b3:r,d:v,e:o,f:u})}))}),Cc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aX",sceneProperties:"e"}},Za=function(e){var r=e;return r},fo=zm,jr=ye(function(e,r,n,a,o){return t(Le,n,ie(function(i,c,l,u,v,f,m,p){return x(ve,s(Ue,u,o,p),Lv,Cc,a,{aX:t(fo,Za(r),e),b:l,c,d:f,e:i,f:v})}))}),Dh={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aX",pointRadius:"b3",sceneProperties:"e"}},jh=ye(function(e,r,n,a,o){return t(xv,a,ie(function(i,c,l,u,v,f,m,p){return x(ve,p,zv,Dh,o,{aX:t(fo,Za(r),e),b:l,c,b3:n,d:f,e:i,f:v})}))}),kv={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},it=E(function(e,r,n,a){return t(Le,r,ie(function(o,i,c,l,u,v,f,m){var p=f.a,d=f.b;return x(ve,s(Ue,l,a,m),Tv,kv,n,{R:d,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cB:e,b:c,c:i,d:v,e:o,f:u})}))}),Mv={src:`
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
    `,attributes:{normal:"o",position:"ep",tangent:"eF",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ah=lr(function(e,r,n,a,o,i){return t(Le,a,ie(function(c,l,u,v,f,m,p,d){var b=p.a,h=p.b;return x(ve,s(Ue,v,i,d),Dv,Mv,o,{R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cC:e,b:u,c:l,a4:r,d:m,e:c,a9:n,f})}))}),jv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"ch",constantBaseColor:"ck",constantMetallic:"cl",constantRoughness:"cm",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallicTexture:"cG",normalMapTexture:"a4",roughnessTexture:"c1",sceneProperties:"e",useNormalMap:"a9",viewMatrix:"f"}},Bh=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return t(Le,u,ie(function(m,p,d,b,h,y,S,_){var z=S.a,A=S.b;return x(ve,s(Ue,b,f,_),Dv,jv,v,{ch:e,ck:r,cl:i,cm:a,R:A,bo:z.bo,bW:z.bW,bX:z.bX,bY:z.bY,cG:o,b:d,c:p,a4:c,d:y,c1:n,e:m,a9:l,f:h})}))}}}}}}}}}}},Av={src:`
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
    `,attributes:{},uniforms:{baseColor:"cg",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallic:"cF",roughness:"c0",sceneProperties:"e",viewMatrix:"f"}},ct=lr(function(e,r,n,a,o,i){return t(Le,a,ie(function(c,l,u,v,f,m,p,d){var b=p.a,h=p.b;return x(ve,s(Ue,v,i,d),Tv,Av,o,{cg:e,R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cF:n,b:u,c:l,d:m,c0:r,e:c,f})}))}),Fh=function(e){return{$:0,a:e}},Ml=$(function(e,r){return{$:1,a:e,b:r}}),Ca=$(function(e,r){if(r.$){var n=r.a.D;return C(n,1)}else return r.a,C(e,0)}),Vh=function(e){return L(ua,Tn(e),Mn(e),Dn(e),1)},Pc=L(ua,0,0,0,0),_t=$(function(e,r){if(r.$){var a=r.a.D;return C(a,Pc)}else{var n=r.a;return C(e,Vh(n))}}),Bv=$(function(e,r){var n=C(e,r);if(n.a.$){var o=n.a.a.D;return t(Ml,C(o,Pc),t(Ca,o,r))}else if(n.b.$){var o=n.b.a.D;return t(Ml,t(_t,o,e),t(Ca,o,r))}else{var a=n.a.a;return n.b.a,Fh(a)}}),Eh=P(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lt=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Wh=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),qh=function(e){return t(Ze,e,1)},si=t(Ze,0,0),Fn=$(function(e,r){if(r.$){var a=r.a.D;return C(a,si)}else{var n=r.a;return C(e,qh(n))}}),Fv=E(function(e,r,n,a){var o=L(Wh,e,r,n,a);if(o.a.$){var u=o.a.a.D;return L(lt,C(u,Pc),t(Fn,u,r),t(Fn,u,n),t(Ca,u,a))}else if(o.b.$){var u=o.b.a.D;return L(lt,t(_t,u,e),C(u,si),t(Fn,u,n),t(Ca,u,a))}else if(o.c.$){var u=o.c.a.D;return L(lt,t(_t,u,e),t(Fn,u,r),C(u,si),t(Ca,u,a))}else if(o.d.$){var u=o.d.a.D;return L(lt,t(_t,u,e),t(Fn,u,r),t(Fn,u,n),C(u,1))}else{var i=o.a.a,c=o.b.a,l=o.c.a;return o.d.a,s(Eh,i,c,l)}}),Rh={src:`
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
    `,attributes:{},uniforms:{backlight:"cd",colorTexture:"bO",sceneProperties:"e"}},Do=ye(function(e,r,n,a,o){return t(Le,n,ie(function(i,c,l,u,v,f,m,p){return x(ve,s(Ue,u,o,p),Sv,Rh,a,{cd:Za(r),bO:e,b:l,c,d:f,e:i,f:v})}))}),Vv={src:`
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
    `,attributes:{normal:"o",position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Nh=E(function(e,r,n,a){return t(Le,r,ie(function(o,i,c,l,u,v,f,m){var p=f.a,d=f.b;return x(ve,s(Ue,l,a,m),Vv,Mv,n,{R:d,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cC:e,b:c,c:i,a4:e,d:v,e:o,a9:0,f:u})}))}),Gh=Ci(function(e,r,n,a,o,i,c,l,u){return t(Le,c,ie(function(v,f,m,p,d,b,h,y){var S=h.a,_=h.b;return x(ve,s(Ue,p,u,y),Vv,jv,l,{ch:e,ck:r,cl:i,cm:a,R:_,bo:S.bo,bW:S.bW,bX:S.bX,bY:S.bY,cG:o,b:m,c:f,a4:e,d:b,c1:n,e:v,a9:0,f:d})}))}),Aa=P(function(e,r,n){var a=e,o=r;return n<=.5?a+n*(o-a):o+(1-n)*(a-o)}),Hh=function(e){var r=e;return s(Aa,r.ea,r.d7,.5)},Ih=function(e){var r=e;return s(Aa,r.eb,r.d8,.5)},Uh=function(e){var r=e;return s(Aa,r.ec,r.d9,.5)},Jh=function(e){return s(Me,Hh(e),Ih(e),Uh(e))},O=function(e){var r=K$(e),n=r.a,a=r.b,o=r.c;return{e_:Xa(Jh(e)),fk:n/2,fl:a/2,fm:o/2}},wc=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.D;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var o=r.a,c=r.c,a=r.d;return L(Mo,l,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return L(Mo,l,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return L(Mo,l,O(o),c,a);case 8:return D;case 9:return D;default:return D}}else{var n=e.b.a;switch(r.$){case 0:return D;case 1:var o=r.a,c=r.c,a=r.d;return L(Dr,n,O(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return L(Dr,n,O(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return L(Dr,n,O(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return L(Dr,n,O(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return L(Dr,n,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return L(Dr,n,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return L(Dr,n,O(o),c,a);case 8:var o=r.a,c=r.c;return L(Dr,n,O(o),c,0);case 9:var o=r.a,c=r.c;return L(Dr,n,O(o),c,0);default:var o=r.a,i=r.b,c=r.d;return L(Mh,n,i,O(o),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.D,v=e.c;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var o=r.a,c=r.c,a=r.d;return x(Do,l,v,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return x(Do,l,v,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return x(Do,l,v,O(o),c,a);case 8:return D;case 9:return D;default:return D}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return D;case 1:var o=r.a,c=r.c,a=r.d;return x(jr,u,v,O(o),c,a);case 2:var o=r.a,c=r.c,a=r.d;return x(jr,u,v,O(o),c,a);case 3:var o=r.a,c=r.c,a=r.d;return x(jr,u,v,O(o),c,a);case 4:var o=r.a,c=r.c,a=r.d;return x(jr,u,v,O(o),c,a);case 5:var o=r.a,c=r.c,a=r.d;return x(jr,u,v,O(o),c,a);case 6:var o=r.a,c=r.c,a=r.d;return x(jr,u,v,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return x(jr,u,v,O(o),c,a);case 8:var o=r.a,c=r.c;return x(jr,u,v,O(o),c,0);case 9:var o=r.a,c=r.c;return x(jr,u,v,O(o),c,0);default:var o=r.a,i=r.b,c=r.d;return x(jh,u,v,i,O(o),c)}}case 2:e.a;var f=e.b,G=e.c,m=t(Bv,f,G);if(m.$){var b=m.a,h=b.a;b.b;var y=m.b,S=y.a,_=y.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var o=r.a,c=r.c,d=r.d;return L(Nh,h,O(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return Ge(Ah,h,S,_,O(o),c,d);case 8:return D;case 9:return D;default:return D}}else{var p=m.a;switch(r.$){case 0:return D;case 1:return D;case 2:var o=r.a,c=r.c,d=r.d;return L(it,p,O(o),c,d);case 3:return D;case 4:var o=r.a,c=r.c,d=r.d;return L(it,p,O(o),c,d);case 5:return D;case 6:var o=r.a,c=r.c,d=r.d;return L(it,p,O(o),c,d);case 7:var o=r.a,c=r.c,d=r.d;return L(it,p,O(o),c,d);case 8:return D;case 9:return D;default:return D}}default:e.a;var z=e.b,A=e.c,H=e.d,G=e.e,N=L(Fv,z,A,H,G);if(N.$){var Q=N.a,ae=Q.a,_e=Q.b,Ce=N.b,ge=Ce.a,Se=Ce.b,Oe=N.c,Re=Oe.a,Zr=Oe.b,Qr=N.d,S=Qr.a,_=Qr.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var o=r.a,c=r.c,a=r.d;return Pf(Gh,ae,_e,ge,Se,Re,Zr,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return Bh(ae)(_e)(ge)(Se)(Re)(Zr)(S)(_)(O(o))(c)(a);case 8:return D;case 9:return D;default:return D}}else{var U=N.a,J=N.b,q=N.c;switch(r.$){case 0:return D;case 1:return D;case 2:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 3:return D;case 4:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 5:return D;case 6:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 7:var o=r.a,c=r.c,a=r.d;return Ge(ct,U,J,q,O(o),c,a);case 8:return D;case 9:return D;default:return D}}}}),jo=function(e){var r=e;return r.gq},Ao=function(e){var r=e;return r.gu},Bo=function(e){var r=e;return r.dg},Oh=function(e){var r=e,n=Bo(r.dh),a=Ao(r.dh),o=jo(r.dh),i=Bo(r.df),c=Ao(r.df),l=jo(r.df),u=Bo(r.de),v=Ao(r.de),f=jo(r.de);return f*c*n+v*i*o+u*l*a-u*c*o-v*l*n-f*i*a>0},Xh=function(e){var r=Xa(ia(e)),n=cr(xn(e)),a=cr(Ln(e)),o=cr(Sn(e));return{dJ:Oh(e),r:o.gq,s:o.gu,t:o.dg,u:a.gq,v:a.gu,w:a.dg,x:n.gq,y:n.gu,z:n.dg,J:r.gq,K:r.gu,L:r.dg,b8:1}},Vn=$(function(e,r){return{$:5,a:e,b:r}}),Ev=$(function(e,r){var n=r;switch(n.$){case 0:return D;case 5:var a=n.a,o=n.b,i=t(I$,a,e);return t(Vn,i,o);case 1:return t(Vn,e,n);case 3:return t(Vn,e,n);case 2:return t(Vn,e,n);default:return t(Vn,e,n)}}),Wv=$(function(e,r){return t(Ev,Xh(e),r)}),so=function(e){return{$:2,a:e}},Yh=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=r.e_;return{e_:{gq:n*i.gq,gu:a*i.gu,dg:o*i.dg},fk:n*r.fk,fl:a*r.fl,fm:o*r.fm}}),Zh=Mm,Qh=Tm,Dl=function(e){return function(r){return function(n){return function(a){return function(o){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,m=e.b,p=e.c,d=Qh(a),b=d.gq,h=d.gu,y=d.dg,S=d.eN,_=Zh({eN:S,gq:b*f,gu:h*m,dg:y*p});return Ht(r,n,_,o,i,c,l,u,v)}}}}}}}}}},di=$(function(e,r){switch(r.$){case 0:return Pv;case 5:var n=r.a,a=r.b;return t(Vn,n,t(di,e,a));case 1:var o=r.a,i=r.b;return t(Le,t(Yh,e,o),t(Dl,e,i));case 3:return r;case 2:var i=r.a;return so(t(Dl,e,i));default:var c=r.a;return nv(t(Y,di(e),c))}}),Sc=$(function(e,r){var n=r;return t(di,e,n)}),Lc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},qv=7683,Rv=7682,Kh=s(lc,{cA:0,cZ:0,dd:15},{bj:Ee,bw:Xn,bE:Ee,bF:qv},{bj:Ee,bw:Xn,bE:Ee,bF:Rv}),e2=s(lc,{cA:0,cZ:0,dd:15},{bj:Ee,bw:Xn,bE:Ee,bF:Rv},{bj:Ee,bw:Xn,bE:Ee,bF:qv}),xc=$(function(e,r){return e?t(k,e2,r):t(k,Kh,r)}),r2={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},n2=function(e){if(e.$){var r=e.c;return Z(ie(function(n,a,o,i,c,l,u,v){return x(ve,t(xc,i,v),r2,Lc,r,{b:o,c:a,d:l,e:n,b9:u,f:c})}))}else return W},Et=function(e){var r=n2(e);if(r.$)return D;var n=r.a;return so(n)},a2=E(function(e,r,n,a){var o=t(wc,n,hv),i=function(){var f=C(e,r);return f.a?f.b?Oa(g([o,Et(Tl)])):o:f.b?Et(Tl):D}(),c=_c(a),l=c.a,u=c.b,v=c.c;return t(Wv,sc(a),t(Sc,T(l,u,v),i))}),t2=$(function(e,r){return L(a2,!0,!0,e,r)}),mi=function(e){return{$:0,a:e}},Nv=$(function(e,r){return{$:0,a:e,b:r}}),o2=function(e){var r=Zi(e),n=r.cY,a=r.co,o=r.ci;return s(Ja,n,a,o)},Gv=function(e){return t(Nv,0,mi(o2(e)))},i2=function(e){var r=e;return r.k},Pa=function(e){var r=e;return Hr(r)},c2=$(function(e,r){var n=e.ep,a=e.o;return t(k,{o:vo(a),ep:Ie(n)},r)}),l2=Gt(function(e,r,n,a,o,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Dn(l.ep),f=Mn(l.ep),m=Tn(l.ep),p=t(bt,e,m),d=t(Qe,r,m),b=t(bt,n,f),h=t(Qe,a,f),y=t(bt,o,v),S=t(Qe,i,v),_=u;e=p,r=d,n=b,a=h,o=y,i=S,c=_;continue e}else return fv({d7:r,d8:a,d9:i,ea:e,eb:n,ec:o})}),Hv=$(function(e,r){var n=Dn(e.ep),a=Mn(e.ep),o=Tn(e.ep);return Pi(l2,o,o,a,a,n,n,r)}),u2=function(e){var r=s(Tu,c2,w,pc(e));if(r.b){var n=r.a,a=r.b,o=t(Ya,r,gc(e)),i=t(Hv,n,a);return L($v,i,e,o,0)}else return mc},jl=$(function(e,r){var n=e,a=r,o=n.df,i=o,c=n.de,l=c;return{gq:a.gq*l.gq+a.gu*i.gq,gu:a.gq*l.gu+a.gu*i.gu,dg:a.gq*l.dg+a.gu*i.dg}}),Wt=function(e){var r=e;return Ir(r)},ba=function(e){var r=e;return r},gi=function(e){return Ke(2*Rr*e)},Al=w$({cM:Yr,de:ec,df:fc}),Iv=function(){var e=72,r=t(N$,e,gi(1)),n=xe(1),a=ba(S$),o=ba(G$),i=xe(1),c=t(le,.5,i),l=s(Me,me,me,c),u=t(le,-.5,i),v=s(Me,me,me,u),f=function(d){var b=t(le,d,r),h=ba(t(jl,Al,ui(b))),y=t(le,Pa(b),n),S=t(le,Wt(b),n),_=s(Me,y,S,c),z=s(Me,y,S,u),A=t(ka,e,d+1),H=t(le,A,r),G=ba(t(jl,Al,ui(H))),N=t(le,Pa(H),n),U=t(le,Wt(H),n),J=s(Me,N,U,u),q=s(Me,N,U,c);return g([T({o,ep:v},{o,ep:J},{o,ep:z}),T({o:h,ep:z},{o:G,ep:J},{o:G,ep:q}),T({o:h,ep:z},{o:G,ep:q},{o:h,ep:_}),T({o:a,ep:l},{o:a,ep:_},{o:a,ep:q})])},m=t(Y,f,t(bn,0,e-1)),p=fi(We(m));return dc(u2(p))}(),Bl=Cv(Iv),$2=function(e){var r=e,n=K(r.dg),a=K(r.gu),o=K(r.gq);if(I(o,a)<1)if(I(o,n)<1){var i=fr(r.dg*r.dg+r.gu*r.gu);return{gq:0,gu:-r.dg/i,dg:r.gu/i}}else{var i=fr(r.gu*r.gu+r.gq*r.gq);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}else if(I(a,n)<1){var i=fr(r.dg*r.dg+r.gq*r.gq);return{gq:r.dg/i,gu:0,dg:-r.gq/i}}else{var i=fr(r.gq*r.gq+r.gu*r.gu);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}},v2=function(e){var r=$2(e),n=r,a=n,o=e,i=o,c={gq:i.gu*a.dg-i.dg*a.gu,gu:i.dg*a.gq-i.gq*a.dg,dg:i.gq*a.gu-i.gu*a.gq};return C(r,c)},f2=function(e){var r=Ki(e),n=v2(r),a=n.a,o=n.b;return ca({cM:R$(e),de:a,df:o,dh:r})},s2=function(e){var r=e;return r.fA},d2=function(e){var r=e;return r.fX},m2=E(function(e,r,n,a){var o=f2(i2(a)),i=t(wc,n,Iv),c=function(){var m=C(e,r);return m.a?m.b?Oa(g([i,Et(Bl)])):i:m.b?Et(Bl):D}(),l=d2(a),u=l,v=s2(a),f=v;return t(Wv,o,t(Sc,T(u,u,f),c))}),g2=$(function(e,r){return L(m2,!0,!0,e,r)}),Fl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bB",viewMatrix:"f"}},ha=function(e){var r=Ma(e),n=r.a,a=r.b,o=r.c,i=In(n),c=In(a),l=In(o);return hr({dS:i.gq,dT:c.gq,dU:l.gq,dV:0,dW:i.gu,dX:c.gu,dY:l.gu,dZ:0,d_:i.dg,d$:c.dg,d0:l.dg,d1:0,d2:0,d3:0,d4:0,d5:0})},ut=bv(g([T({c7:0},{c7:1},{c7:2})])),p2=$(function(e,r){var n=sv(r),a=O(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,D;var o=e.b.a;return t(Le,a,ie(function(_,z,A,H,G,N,U,J){return x(ve,s(Ue,H,0,J),Fl,yc,ut,{aD:o,b:A,c:z,d:N,e:_,bB:ha(r),f:G})}));case 1:if(e.b.$)return e.a,D;var i=e.b.a,c=e.c;return t(Le,a,ie(function(_,z,A,H,G,N,U,J){return x(ve,s(Ue,H,0,J),Fl,Cc,ut,{aX:t(fo,Za(c),i),b:A,c:z,d:N,e:_,bB:ha(r),f:G})}));case 2:e.a;var l=e.b,d=e.c,u=t(Bv,l,d);if(u.$)return D;var v=u.a;return t(Le,a,ie(function(_,z,A,H,G,N,U,J){var q=U.a,Q=U.b;return x(ve,s(Ue,H,0,J),Vl,kv,ut,{R:Q,bo:q.bo,bW:q.bW,bX:q.bX,bY:q.bY,cB:v,b:A,c:z,d:N,e:_,bB:ha(r),f:G})}));default:e.a;var f=e.b,m=e.c,p=e.d,d=e.e,b=L(Fv,f,m,p,d);if(b.$)return D;var h=b.a,y=b.b,S=b.c;return t(Le,a,ie(function(_,z,A,H,G,N,U,J){var q=U.a,Q=U.b;return x(ve,s(Ue,H,0,J),Vl,Av,ut,{cg:h,R:Q,bo:q.bo,bW:q.bW,bX:q.bX,bY:q.bY,cF:S,b:A,c:z,d:N,c0:y,e:_,bB:ha(r),f:G})}))}}),b2=function(){var e=g([{a8:t(Ze,0,1)},{a8:t(Ze,1,1)},{a8:t(Ze,2,1)},{a8:t(Ze,0,-1)},{a8:t(Ze,1,-1)},{a8:t(Ze,2,-1)}]),r=g([T(0,1,2),T(3,5,4),T(3,4,1),T(3,1,0),T(4,5,2),T(4,2,1),T(5,3,0),T(5,0,2)]);return t(Ya,e,r)}(),h2={src:`
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
    `,attributes:{triangleShadowVertex:"a8"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",triangleVertexPositions:"bB",viewMatrix:"f"}},El=function(e){return so(ie(function(r,n,a,o,i,c,l,u){return x(ve,t(xc,o,u),h2,Lc,b2,{b:a,c:n,d:c,e:r,b9:l,bB:ha(e),f:i})}))},_2=E(function(e,r,n,a){var o=t(p2,n,a),i=C(e,r);return i.a?i.b?Oa(g([o,El(a)])):o:i.b?El(a):D}),y2=$(function(e,r){return L(_2,!0,!0,e,r)}),zc=function(e){var r=e;return r},C2=$(function(e,r){var n=Gn(r),a=Gn(e),o=Nn(r),i=Nn(e),c=Rn(r),l=Rn(e);return{d7:t(be,l,c),d8:t(be,i,o),d9:t(be,a,n),ea:t(Pe,l,c),eb:t(Pe,i,o),ec:t(Pe,a,n)}}),P2=function(e){var r=zc(e),n=r.a,a=r.b;return t(C2,n,a)},Wl={src:`
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
    `,attributes:{lineSegmentVertex:"dR"},uniforms:{lineSegmentEndPoint:"dP",lineSegmentStartPoint:"dQ",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},w2=$(function(e,r){return{$:1,a:e,b:r}}),S2=w2({dv:2,dF:0,ee:1}),ql=S2(g([C({dR:0},{dR:1})])),L2=$(function(e,r){var n=P2(r),a=O(n),o=zc(r),i=o.a,c=o.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,D;var l=e.b.a;return t(Le,a,ie(function(v,f,m,p,d,b,h,y){return x(ve,y,Wl,yc,ql,{aD:l,dP:Ie(c),dQ:Ie(i),b:m,c:f,d:b,e:v,f:d})}));case 1:if(e.b.$)return D;var l=e.b.a,u=e.c;return t(Le,a,ie(function(f,m,p,d,b,h,y,S){return x(ve,S,Wl,Cc,ql,{aX:t(fo,Za(u),l),dP:Ie(c),dQ:Ie(i),b:p,c:m,d:h,e:f,f:b})}));case 2:return D;default:return D}}),x2=$(function(e,r){return t(L2,e,r)}),kc=function(e){var r=e;return r.e_},Tc=function(e){var r=e;return r.fX},pi=$(function(e,r){var n=e,a=r;return n/a}),z2=ye(function(e,r,n,a,o){e:for(;;){var i=a(r/n),c=t(k,i,o);if(se(r,e))return c;var l=e,u=r-1,v=n,f=a,m=c;e=l,r=u,n=v,a=f,o=m;continue e}}),Rl=$(function(e,r){return e<1?w:x(z2,0,e,e,r,w)}),k2=$(function(e,r){var n=e.ep,a=e.o,o=e.N,i=o,c=i.a,l=i.b;return t(k,{o:vo(a),ep:Ie(n),N:t(Ze,c,l)},r)}),T2=function(e){var r=s(Tu,k2,w,pc(e));if(r.b){var n=r.a,a=r.b,o=t(Ya,r,gc(e)),i=t(Hv,n,a);return L(vv,i,e,o,0)}else return mc},Mc=$(function(e,r){var n=e,a=r,o=Hr(a);return{gq:o*Hr(n),gu:o*Ir(n),dg:Ir(a)}}),M2=function(){var e=xe(1),r=72,n=t(bn,0,r-1),a=t(Rl,r,t(Aa,me,gi(1))),o=Vi(r/2),i=t(bn,0,o-1),c=t(Rl,o,t(Aa,ga(90),ga(-90))),l=ja(We(t(Y,function(f){return t(Y,function(m){return{o:ba(t(Mc,f,m)),ep:s(Me,t(le,Pa(m)*Pa(f),e),t(le,Pa(m)*Wt(f),e),t(le,Wt(m),e)),N:C(t(pi,f,gi(1)),t(pi,t(mn,ga(90),m),ga(180)))}},c)},a))),u=$(function(f,m){return f*(o+1)+m}),v=We(t(Y,function(f){return We(t(Y,function(m){var p=t(u,f+1,m),d=t(u,f,m),b=t(u,f+1,m+1),h=t(u,f,m+1);return g([T(h,b,p),T(h,p,d)])},i))},n));return dc(T2(t(hc,l,v)))}(),qt=72,$t=2*qt,D2=$(function(e,r){e:for(;;){var n=$t+1,a=t(ka,$t,2*e+3),o=t(ka,$t,2*e+2),i=2*e+1,c=2*e,l=$t,u=t(k,T(l,c,o),t(k,T(c,a,o),t(k,T(c,i,a),t(k,T(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),j2=P(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),A2=$(function(e,r){e:for(;;){var n=s(j2,0,2*Rr,e/qt),a={bH:n,b0:0,b7:1},o={bH:n,b0:1,b7:1},i=t(k,a,t(k,o,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),B2=function(){var e=t(A2,qt-1,g([{bH:0,b0:0,b7:0},{bH:0,b0:1,b7:0}])),r=t(D2,qt-1,w);return t(Ya,e,r)}(),F2={src:`
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
    `,attributes:{angle:"bH",offsetScale:"b0",radiusScale:"b7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},Nl=function(e){return so(ie(function(r,n,a,o,i,c,l,u){return x(ve,t(xc,!0,u),F2,Lc,B2,{aD:s(Ja,0,0,1),b:a,c:n,d:c,e:r,b9:l,f:i})}))},V2=function(e){var r=mv(e);return{dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:r.gq,K:r.gu,L:r.dg,b8:1}},E2=$(function(e,r){return t(Ev,V2(e),r)}),W2=E(function(e,r,n,a){var o=t(wc,n,M2),i=function(){var u=C(e,r);return u.a?u.b?Oa(g([o,Nl()])):o:u.b?Nl():D}(),c=Tc(a),l=c;return t(E2,t(vi,Yr,kc(a)),t(Sc,T(l,l,l),i))}),q2=$(function(e,r){return L(W2,!0,!0,e,r)}),R2=P(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Uv=P(function(e,r,n){return{$:2,a:e,b:r,c:n}}),N2=ye(function(e,r,n,a,o){return{$:3,a:e,b:r,c:n,d:a,e:o}}),G2=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return t(Nv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return s(R2,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return s(Uv,n,a,c);default:var n=e.a,a=e.b,o=e.c,i=e.d,c=e.e;return x(N2,n,a,o,i,c)}},H2=G2,Jv=function(e){switch(e.$){case 0:var o=e.a,r=e.b;return g([t(t2,o,r)]);case 1:var o=e.a,n=e.b;return g([t(y2,o,n)]);case 3:var o=e.a,a=e.b;return g([t(q2,H2(o),a)]);case 2:var o=e.a,i=e.b;return g([t(g2,o,i)]);case 4:var c=e.a,l=e.b;return g([t(x2,Gv(c),l)]);default:var u=e.a;return t(co,Jv,u)}},Ov=function(e){return t(co,Jv,e)},I2=$(function(e,r){return Kb({eQ:e.eQ,eU:H$(e.eV),ao:e.ao,$7:xe(e.$7),bg:e.bg,aU:C(Vt(rr(e.aL.go)),Vt(rr(e.aL.fo))),aZ:Ov(r),ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn})}),Xv=function(e){return e},U2=$(function(e,r){var n=e,a=cr(r.e8),o=a.gq,i=a.gu,c=a.dg,l=t($o,r.bT,r.aS),u=l;return{bJ:Dn(u),eZ:n,bR:Mn(u),cV:0,b6:Tn(u),c8:1,gq:-o,gu:-i,dg:-c}}),J2=function(e){return t(U2,Xv(!0),{aS:e.aS,e8:t(Mc,Ke(e.bI),Ke(e.bP)),bT:e.bT})},mo=L(Mr,52/255,101/255,164/255,1),O2=L(Mr,115/255,210/255,22/255,1),Dc=function(e){return{$:5,a:e}},He=function(e){return Dc(e)},jc=L(Mr,204/255,0/255,0/255,1),Ac=$(function(e,r){return{$:2,a:e,b:r}}),X2=P(function(e,r,n){return{k:t(zr,e,r),fA:je(n.fA),fX:je(n.fX)}}),Yv=P(function(e,r,n){return t(Ac,e,s(X2,Yr,iv,{fA:xe(n),fX:xe(r)}))}),Fo=function(e){return s(ac,0,1,e<=.04045?e/12.92:t(en,(e+.055)/1.055,2.4))},Y2=function(e){var r=Zi(e),n=r.cY,a=r.co,o=r.ci;return s(Ja,Fo(n),Fo(a),Fo(o))},Z2=function(e){return s(Uv,0,mi(Y2(e)),mi(0))},gn=$(function(e,r){return t(oa,"unlit",e)?Gv(r):Z2(r)}),Zv=$(function(e,r){return{$:0,a:e,b:r}}),Qv=$(function(e,r){return{$:4,a:e,b:r}}),Bc=$(function(e,r){return{$:3,a:e,b:r}}),Fc=$(function(e,r){return{$:1,a:e,b:r}}),Q2=P(function(e,r,n){return{gq:e,gu:r,dg:n}}),K2=$(function(e,r){return{eT:t(C$,e,sc(r)),aU:_c(r)}}),e_=$(function(e,r){var n=r;return t(zr,t(la,e,n.cM),n.e8)}),r_=$(function(e,r){var n=r;return{k:t(e_,e,n.k),fA:n.fA,fX:n.fX}}),n_=function(e){return e},Kv=$(function(e,r){var n=zc(r),a=n.a,o=n.b;return n_(C(e(a),e(o)))}),a_=$(function(e,r){return t(Kv,la(e),r)}),Vc=$(function(e,r){return{e_:r,fX:je(e)}}),t_=$(function(e,r){return t(Vc,Tc(r),t(la,e,kc(r)))}),ef=$(function(e,r){var n=r,a=n.a,o=n.b,i=n.c;return T(e(a),e(o),e(i))}),o_=$(function(e,r){return t(ef,la(e),r)}),go=$(function(e,r){var n=e.a,a=e.b,o=e.c,i=s(Q2,n,a,o);switch(r.$){case 0:var f=r.a,c=r.b;return t(Zv,f,t(K2,i,c));case 1:var f=r.a,l=r.b;return t(Fc,f,t(o_,i,l));case 3:var f=r.a,u=r.b;return t(Bc,f,t(t_,i,u));case 2:var f=r.a,v=r.b;return t(Ac,f,t(r_,i,v));case 4:var f=r.a,m=r.b;return t(Qv,f,t(a_,i,m));default:var p=r.a;return Dc(t(Y,go(T(n,a,o)),p))}}),pn=function(e){return go(T(e,0,0))},po=function(e){return go(T(0,e,0))},rf=function(e){return go(T(0,0,e))},i_=P(function(e,r,n){return{eT:s(y$,e,r,sc(n)),aU:_c(n)}}),c_=$(function(e,r){var n=t(Ra,e,r),a=t(mt,e,r);return function(o){var i=o;return t(zr,n(i.cM),a(i.e8))}}),l_=P(function(e,r,n){var a=n;return{k:s(c_,e,r,a.k),fA:a.fA,fX:a.fX}}),u_=P(function(e,r,n){return t(Kv,t(Ra,e,r),n)}),$_=P(function(e,r,n){return t(Vc,Tc(n),s(Ra,e,r,kc(n)))}),v_=P(function(e,r,n){return t(ef,t(Ra,e,r),n)}),Ec=P(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return t(Zv,l,s(i_,e,r,a));case 1:var l=n.a,o=n.b;return t(Fc,l,s(v_,e,r,o));case 3:var l=n.a,i=n.b;return t(Bc,l,s($_,e,r,i));case 2:var l=n.a,c=n.b;return t(Ac,l,s(l_,e,r,c));case 4:var l=n.a,u=n.b;return t(Qv,l,s(u_,e,r,u));default:var v=n.a;return Dc(t(Y,t(Ec,e,r),v))}}),f_=t(zr,Yr,fc),nf=$(function(e,r){return s(Ec,f_,Ke(e),r)}),s_=t(zr,Yr,ao),bi=$(function(e,r){return s(Ec,s_,Ke(e),r)}),d_=Yf,m_=Qf,g_=function(e){var r=e.a,n=e.b,a=e.c;return fr(t(en,r,2)+t(en,n,2)+t(en,a,2))},p_=function(e){var r=e.a,n=e.b,a=e.c,o=g_(T(r,n,a));return{bI:t(m_,n,r),fs:d_(a/o),fX:o}},yt=E(function(e,r,n,a){var o=a.a,i=a.b,c=T(i.gq-o.gq,i.gu-o.gu,i.dg-o.dg),l=c.a,u=c.b,v=c.c,f=p_(T(l,u,v)),m=f.fX,p=f.bI,d=f.fs;return t(rf,o.dg,t(po,o.gu,t(pn,o.gq,t(bi,p,t(nf,d-Ur(90),t(pn,m/2,t(bi,Ur(90),s(Yv,t(gn,e,r),n/2,m))))))))}),b_=function(e){return He(g([L(yt,e,jc,.1,C(s(Ne,0,0,0),s(Ne,10,0,0))),L(yt,e,O2,.1,C(s(Ne,0,0,0),s(Ne,0,10,0))),L(yt,e,mo,.1,C(s(Ne,0,0,0),s(Ne,0,0,10)))]))},h_=L(Mr,78/255,154/255,6/255,1),hi=$(function(e,r){return t(Bc,e,t(Vc,xe(r),Yr))}),af=E(function(e,r,n,a){var o=a.a,i=a.b;return L(yt,e,r,n,C(s(Ne,o.gq,o.gu,0),s(Ne,i.gq,i.gu,0)))}),__=L(Mr,237/255,212/255,0/255,1),y_=$(function(e,r){var n=Ia(r.I).ce,a=t(bi,n.e9,He(g([t(nf,n.f1,He(g([t(pn,-.02,t(hi,t(gn,e,jc),n.aT.fX)),t(pn,.02,t(hi,t(gn,e,__),n.aT.fX))]))),s(Yv,t(gn,e,c$),.2,1.1)]))),o=n.gk,i=o.a,c=o.b,l=t(oa,"draw speed vector",e)?L(af,e,h_,.2,C(t(qr,0,0),t(qr,.3*i,.3*c))):He(w);return t(po,n.aT.bL.gu,t(pn,n.aT.bL.gq,t(rf,.5,He(g([a,l])))))}),Ct=$(function(e,r){var n=r.a,a=r.b,o=r.c;return t(Fc,e,s(Xe,s(pt,n.gq,n.gu,n.dg),s(pt,a.gq,a.gu,a.dg),s(pt,o.gq,o.gu,o.dg)))}),C_=function(e){return t(Ct,t(gn,e,mo),T(s(Ne,0,0,0),s(Ne,.1,0,0),s(Ne,0,.1,0)))},P_=$(function(e,r){if(t(oa,"draw ball trail",e)){var n=Ia(r.I).ce;return He(t(Y,function(a){return t(po,a.gu,t(pn,a.gq,C_(e)))},n.gf))}else return He(w)}),w_=$(function(e,r){return t(po,r.aI.gu,t(pn,r.aI.gq,t(hi,t(gn,e,jc),.2)))}),S_=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return w}();return s(Ot,to,e,r)},L_=$(function(e,r){var n=r.aj;if(n.$===1){var a=n.a;return He(t(Y,s(af,e,mo,.2),S_(a)))}else return He(w)}),Vo=$(function(e,r){var n=e.a,a=e.b,o=e.c;return{gq:r.gq+n,gu:r.gu+a,dg:r.dg+o}}),x_=$(function(e,r){return{gq:e,gu:r}}),z_=$(function(e,r){var n=e,a=r;return a.gq*n.gu-a.gu*n.gq}),Gl=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu}}),k_=function(e){var r=e;return r},tf=function(e){var r=k_(e),n=r.a,a=r.b,o=r.c,i=t(Gl,n,a),c=t(Gl,n,o);return t(le,.5,t(z_,c,i))},of=P(function(e,r,n){return T(e,r,n)}),T_=function(e){return s(Ae,mn,me,e)},cf=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=$(function(f,m){return tf(s(of,r,f,m))}),l=s(Ot,c,t(k,a,i),i);return T_(l)}else{var r=e.a,n=e.b,a=n.a;return me}else return e.a,me;else return me},M_=function(e){return t(ya,me,cf(e))?e:ce(e)},lf=$(function(e,r){var n=e,a=r;return I(a,n)>-1}),D_=function(e){return t(lf,me,cf(e))?e:ce(e)},j_=$(function(e,r){return{a1:t(Y,M_,e),a5:D_(r)}}),A_=function(e){return t(j_,w,e)},Nr=function(e){var r=e;return r.gq},Gr=function(e){var r=e;return r.gu},Eo=$(function(e,r){return{gq:e(Nr(r)),gu:e(Gr(r))}}),Pn=$(function(e,r){var n=e,a=r;return I(a,n)>0}),Rt=P(function(e,r,n){return tf(s(of,e.ep,r.ep,n.ep))}),B_=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var o=n.a,i=n.b;if(t(Pn,me,s(Rt,o,r.g,e))){var a=T(o.ft,r.g.ft,e.ft),c=e,l={g:o,n:i,j:r.j,bi:t(k,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:t(k,r.g,r.n),j:r.j,bi:r.bi}}else if(t(Pn,me,s(Rt,r.j,r.g,e))){var a=T(r.j.ft,r.g.ft,e.ft);return{g:e,n:w,j:r.j,bi:t(k,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),F_=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var o=n.a,i=n.b;if(t(Pn,me,s(Rt,e,r.g,o))){var a=T(e.ft,r.g.ft,o.ft),c=e,l={g:o,n:i,j:r.j,bi:t(k,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:t(k,r.g,r.n),j:r.j,bi:r.bi}}else if(t(Pn,me,s(Rt,e,r.g,r.j))){var a=T(e.ft,r.g.ft,r.j.ft);return{g:e,n:w,j:r.j,bi:t(k,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),V_=$(function(e,r){var n=e,a=r;return t(Xi,n,a)}),E_=$(function(e,r){var n=e,a=r;return I(a,n)<0}),Ba=$(function(e,r){var n=Gr(r),a=Gr(e),o=Nr(r),i=Nr(e);return t(E_,n,a)?0:t(Pn,n,a)?2:t(V_,o,i)}),Nt=function(e){return e},uf=Gf,W_=$(function(e,r){var n=P(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(e.ft,a.ft,l.ft),v=l,f=u,m=t(k,c,i);a=v,o=f,i=m;continue e}else{var c=T(e.ft,a.ft,r.j.ft);return t(k,c,i)}});return{g:e,n:w,j:r.g,bi:s(n,r.g,r.n,r.bi)}}),q_=$(function(e,r){var n=P(function(a,o,i){e:for(;;)if(o.b){var l=o.a,u=o.b,c=T(a.ft,e.ft,l.ft),v=l,f=u,m=t(k,c,i);a=v,o=f,i=m;continue e}else{var c=T(a.ft,e.ft,r.j.ft);return t(k,c,i)}});return{g:e,n:w,j:r.g,bi:s(n,r.g,r.n,r.bi)}}),R_=function(e){var r=t(uf,$(function(u,v){return t(Ba,v.ep,u.ep)}),e);if(r.b)if(r.b.b){var n=r.a,a=r.b,o=a.a,i=a.b,c=$(function(u,v){return se(u.a3,v.j.ft)?t(q_,u,v):se(v.j.a3,u.ft)?t(W_,u,v):se(u.a3,v.g.ft)?t(F_,u,v):se(v.g.a3,u.ft)?t(B_,u,v):Nt(v)}),l={g:o,n:w,j:n,bi:w};return s(Ae,c,l,i).bi}else return r.a,w;else return w},Qa=$(function(e,r){return t(Fr,e,r.Q)}),N_=$(function(e,r){var n=r;return s(vn,e,0,n)}),G_=ye(function(e,r,n,a,o){e:for(;;){var i=o.a,c=o.b,l=t(Qa,a,e);if(l.$)return Nt(C(i,w));var u=l.a,v=t(Fr,u.ai,r);if(v.$)return Nt(C(i,w));var f=v.a,m=t(N_,a,i),p=u.at,d={ft:u.ai,a3:u.aq,ep:f},b=t(k,d,c);if(se(p,n))return C(m,ce(b));var h=e,y=r,S=n,_=p,z=C(m,b);e=h,r=y,n=S,a=_,o=z;continue e}}),H_=oo,vt=Af,I_=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=function(l){if(l.$){var v=l.a;return _n(t(vt,e,v))}else{var u=l.a;return $n(t(vt,c,u))}};return L(Er,n,a,t(vt,c,o),t(vt,e,i))}),U_=$(function(e,r){var n=t(aa,e,r);return!n.$}),J_=$(function(e,r){var n=r;return t(U_,e,n)}),O_=function(e){var r=t(I_,function(c){return c.ep},e.am),n=$(function(c,l){var u=l,v=u.a,f=u.b;if(t(J_,c,v))return l;var m=x(G_,e,r,c,c,C(v,w)),p=m.a,d=m.b;return C(p,t(k,d,f))}),a=t(bn,0,bc(e.Q)-1),o=s(Ae,n,C(H_,w),a),i=o.b;return C(r,i)},X_=w,jn=$(function(e,r){if(r.$)return Nt(e);var n=r.a;return n}),Y_=ye(function(e,r,n,a,o){if(r.$===1)return W;var i=r.a;if(n.$===1)return W;var c=n.a;if(a.$===1)return W;var l=a.a;if(o.$===1)return W;var u=o.a;return Z(L(e,i,c,l,u))}),_i=Mf,$f=Sf,Un=Tf,wa=E(function(e,r,n,a){var o=Cn&r>>>e;if(I(o,Lr(a))>-1){if(e===5)return t(_i,_n(n),a);var i=$n(L(wa,e-sr,r,n,hn));return t(_i,i,a)}else{var c=t(Da,o,a);if(c.$){var i=$n(L(wa,e-sr,r,n,$f(c)));return s(Un,o,i,a)}else{var l=c.a,i=$n(L(wa,e-sr,r,n,l));return s(Un,o,i,a)}}}),yi=$(function(e,r){var n=r.a,a=r.b,o=r.c,i=r.d,c=Lr(i),l=Lr(e),u=n+(l-c);if(se(l,he)){var v=I(u>>>sr,1<<a)>0;if(v){var f=a+sr,m=L(wa,f,n,e,$f($n(o)));return L(Er,u,f,m,hn)}else return L(Er,u,a,L(wa,a,n,e,o),hn)}else return L(Er,u,a,o,e)}),Hl=$(function(e,r){var n=r.d;return t(yi,t(_i,e,n),r)}),Il=$(function(e,r){return V(r,{at:e})}),Ul=$(function(e,r){return V(r,{B:e})}),vf=E(function(e,r,n,a){var o=Cn&r>>>e,i=t(Da,o,a);if(i.$){var u=i.a,v=s(Un,Cn&r,n,u);return s(Un,o,_n(v),a)}else{var c=i.a,l=L(vf,e-sr,r,n,c);return s(Un,o,$n(l),a)}}),Z_=P(function(e,r,n){var a=n.a,o=n.b,i=n.c,c=n.d;return e<0||I(e,a)>-1?n:I(e,_v(a))>-1?L(Er,a,o,i,s(Un,Cn&e,r,c)):L(Er,a,o,L(vf,o,e,r,i),c)}),ft=P(function(e,r,n){var a=t(Fr,e,n);if(a.$)return n;var o=a.a;return s(Z_,e,r(o),n)}),Yn=P(function(e,r,n){var a=bc(n.Q);return t(jn,C(n,-1),x(Y_,E(function(o,i,c,l){return C(V(n,{Q:t(Hl,{aq:e,at:e,B:l.B,ai:r.ft},t(Hl,{aq:r.ft,at:r.b1,B:c.B,ai:e},s(ft,l.B,Il(a+1),s(ft,c.B,Il(a),s(ft,r.b1,Ul(a),s(ft,e,Ul(a+1),n.Q))))))}),a)}),t(Fr,e,n.am),t(Fr,r.ft,n.am),t(Fr,e,n.Q),t(Fr,r.b1,n.Q)))}),Zn=$(function(e,r){return t(aa,e,r.bm)}),Q_=Cr,Jl=$(function(e,r){return t(Fr,e,r.am)}),K_=P(function(e,r,n){if(r.$===1)return W;var a=r.a;if(n.$===1)return W;var o=n.a;return Z(t(e,a,o))}),ff=P(function(e,r,n){return t(jn,n,t(Wr,function(a){return s(K_,$(function(o,i){var c=Q_(C(o.ep,i.ep));return V(n,{bh:t(e,C(r,c),n.bh)})}),t(Jl,a.ai,n),t(Jl,a.aq,n))},t(Qa,r,n)))}),ey=$(function(e,r){var n=r;return t(lo,zg(e),n)}),Wc=ff(ey),ry=$(function(e,r){return t(jn,r,t(Wr,function(n){return t(re,function(a){var o=a.a2?s(Yn,e,a,r).a:r;return t(Wc,n.B,o)},t(Zn,n.B,r))},t(Qa,e,r)))}),Qn=P(function(e,r,n){return{ft:e,a2:n,b1:r}}),ny=$(function(e,r){var n=r;return t(k,e,n)}),qc=ff(ny),Kn=P(function(e,r,n){return V(n,{bm:s(vn,e,r,n.bm)})}),ay=$(function(e,r){return t(jn,r,t(Wr,function(n){return t(re,function(a){var o=a.a2?s(Yn,e,a,r).a:r;return s(Kn,e,s(Qn,e,e,!1),t(qc,e,t(Wc,n.B,o)))},t(Zn,n.B,r))},t(Qa,e,r)))}),ty=function(e){var r=e;return r},oy=$(function(e,r){var n=r,a=Gr(e),o=Nr(e);return t(re,function(i){i.a;var c=i.b,l=c.a;return c.b,l},s(Ae,$(function(i,c){var l=ty(i.b),u=l.a,v=l.b,f=Nr(u),m=Gr(u),p=Nr(v),d=Gr(v),b=function(){if(se(m,d))return t(De,t(be,f,p),o);var S=t(pi,t(De,m,a),t(De,m,d));return t(De,t(mn,t(le,S,t(De,f,p)),f),o)}();if(t(lf,me,b)){if(c.$===1)return Z(C(b,i));var h=c.a,y=h.a;return h.b,t(ya,y,b)?Z(C(b,i)):c}else return c}),W,n))}),Rc=$(function(e,r){return t(oy,e,r.bh)}),iy=P(function(e,r,n){return t(jn,n,t(Wr,function(a){return t(Wr,function(o){var i=o.a2?s(Yn,e,o,n).a:n,c=t(Wc,a.B,i);return t(Wr,function(l){return t(re,function(u){var v=u.a2?s(Yn,e,u,c):C(c,e),f=v.a,m=v.b;return s(Kn,l,s(Qn,e,m,!0),f)},t(Zn,l,n))},t(Rc,r,c))},t(Zn,a.B,n))},t(Qa,e,n)))}),cy=P(function(e,r,n){return t(jn,n,t(Wr,function(a){return t(re,function(o){var i=o.a2?s(Yn,e,o,n):C(n,e),c=i.a,l=i.b;return s(Kn,a,s(Qn,e,l,!1),c)},t(Zn,a,n))},t(Rc,r,n)))}),ly=P(function(e,r,n){return t(jn,n,t(Wr,function(a){return t(re,function(o){var i=s(Yn,e,o,n),c=i.a,l=i.b;return s(Kn,e,s(Qn,e,e,!1),t(qc,e,s(Kn,a,s(Qn,e,l,!1),c)))},t(Zn,a,n))},t(Rc,r,n)))}),uy=$(function(e,r){return s(Kn,e,s(Qn,e,e,!1),t(qc,e,r))}),sf=Ff,df=Bf,Ol=$(function(e,r){var n=Lr(e),a=he-Lr(r.p)-n,o=s(sf,he,r.p,e);return a<0?{A:t(k,_n(o),r.A),m:r.m+1,p:s(df,a,n,e)}:a?{A:r.A,m:r.m,p:o}:{A:t(k,_n(o),r.A),m:r.m+1,p:hn}}),Xl=$(function(e,r){r.a,r.c;var n=r.d,a=Lr(e),o=he-Lr(n)-a,i=s(sf,he,n,e),c=t(yi,i,r);if(o<0){var l=s(df,o,a,e);return t(yi,l,c)}else return c}),qn=Df,$y=function(e){var r=e.a,n=e.c,a=e.d,o=$(function(i,c){if(i.$)return t(k,i,c);var l=i.a;return s(qn,o,c,l)});return{A:s(qn,o,w,n),m:r/he|0,p:a}},vy=$(function(e,r){e.d;var n=r.a,a=r.c,o=r.d;if(I(n,he*4)<1){var i=$(function(c,l){if(c.$){var v=c.a;return t(Xl,v,l)}else{var u=c.a;return s(qn,i,l,u)}});return t(Xl,o,s(qn,i,e,a))}else{var i=$(function(l,u){if(l.$){var f=l.a;return t(Ol,f,u)}else{var v=l.a;return s(qn,i,u,v)}});return t(Ri,!0,t(Ol,o,s(qn,i,$y(e),a)))}}),fy=P(function(e,r,n){e:for(;;)if(r.b){var a=r.a,o=r.b,i=se(a,e)?n:t(k,a,n),c=a,l=o,u=i;e=c,r=l,n=u;continue e}else return n}),sy=function(e){if(e.b){var r=e.a,n=e.b,a=s(fy,r,n,w);if(a.b){var o=a.a,i=a.b;return se(o,r)?t(k,r,ce(i)):t(k,r,ce(a))}else return g([r])}else return w},Yl=$(function(e,r){var n=e,a=r;return a*n}),Zl=P(function(e,r,n){var a=Gr(n),o=Gr(r),i=Gr(e),c=Nr(n),l=Nr(r),u=Nr(e),v=t(Yl,t(De,l,c),t(De,i,o)),f=t(Yl,t(De,o,a),t(De,u,l)),m=t(De,v,f);return t(Pn,me,m)}),Ql=P(function(e,r,n){var a=t(Ba,r,e),o=t(Ba,r,n);return a===2&&o===2?s(Zl,e,r,n)?0:4:!a&&!o?s(Zl,e,r,n)?1:5:a===2?3:2}),dy=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,o=e.b,a=o.a,i=o.b,c=i.a,l=i.b,u=s(Ae,Yt,c,l),v=E(function(p,d,b,h){e:for(;;)if(b.b){var S=b.a,_=b.b,z={ar:s(Ql,p,d,S),ep:d},A=d,H=S,G=_,N=t(k,z,h);p=A,d=H,b=G,h=N;continue e}else{var y={ar:s(Ql,p,d,r),ep:d};return ce(t(k,y,h))}});return L(v,u,r,t(k,a,t(k,c,l)),w)}else{var r=e.a,n=e.b,a=n.a;return t(Ba,r,a)===2?g([{ar:4,ep:r},{ar:5,ep:a}]):g([{ar:5,ep:r},{ar:4,ep:a}])}else return e.a,w;else return w},my=function(e){var r=e.a5,n=e.a1,a=t(Y,function(c){return sy(c)},t(k,r,n)),o=s(Ae,$(function(c,l){var u=l.a,v=l.b,f=Sr(c),m=t(Wu,f,function(p){return p?se(p,f-1)?{aq:u,at:u,B:u+p-1,ai:u+p}:{aq:u+p+1,at:u+p+1,B:u+p-1,ai:u+p}:{aq:u+1,at:u+1,B:u+f-1,ai:u}});return C(u+f,t(vy,v,m))}),C(0,Wi),a).b,i=We(t(Y,dy,a));return{Q:o,am:i}},gy=function(e){var r=$(function(u,v){var f=u.a,m=u.b,p=m.ar;switch(p){case 0:return t(uy,f,v);case 1:return t(ry,f,v);case 3:return s(cy,f,m.ep,v);case 2:return t(ay,f,v);case 4:return s(ly,f,m.ep,v);default:return s(iy,f,m.ep,v)}}),n=my(e),a=n.am,o=n.Q,i={bh:X_,Q:o,bm:oo,am:ja(a)},c=t(uf,$(function(u,v){var f=u.b,m=v.b;return t(Ba,m.ep,f.ep)}),t(Xt,to,a)),l=s(Ae,r,i,c);return ja(a),O_(l)},py=function(e){var r=gy(e),n=r.a,a=r.b;return t(hc,n,We(t(Y,R_,a)))},by=function(e){return py(e)},hy=function(e){return t(Y,function(r){var n=r.a,a=r.b,o=r.c;return T(t(Eo,dn,n),t(Eo,dn,a),t(Eo,dn,o))},yv(by(A_(t(Y,function(r){return t(x_,r.gq,r.gu)},e)))))},_y=$(function(e,r){var n=t(gn,e,mo),a=2,o=function(v){var f=v.gq,m=v.gu;return s(Ne,f,m,a)},i=function(v){var f=v.a,m=v.b;return He(g([t(Ct,n,T(o(f),o(m),t(Vo,T(0,0,-a),o(f)))),t(Ct,n,T(t(Vo,T(0,0,-a),o(f)),o(m),t(Vo,T(0,0,-a),o(m))))]))},c=function(v){return He(t(Y,i,nc(v.en)))},l=function(v){return He(t(Y,function(f){var m=f.a,p=f.b,d=f.c;return t(Ct,n,T(o(m),o(p),o(d)))},hy(v.en)))},u=function(v){return He(g([l(v),c(v)]))};return He(t(Y,u,Ia(r.I).fV))}),mf=function(e){return e},yy=function(e){return mf(1.2*t(en,2,e))},Wo=uo({gq:.37208,gu:.37529}),Cy=$(function(e,r){return{$:2,a:e,b:r}}),gf=function(e){return{$:0,a:e}},st=function(e){var r=e;return r},Py=function(e){var r=e;return r.eZ},pf=gf(pa.a),wy=$(function(e,r){var n=$(function(a,o){var i=o.a,c=o.b;return e(a)?C(t(k,a,i),c):C(i,t(k,a,c))});return s(Xr,n,C(w,w),r)}),Sy=function(e){var r=e;return hr({dS:r.gq,dT:r.b6,dU:0,dV:0,dW:r.gu,dX:r.bR,dY:0,dZ:0,d_:r.dg,d$:r.bJ,d0:0,d1:0,d2:r.c8,d3:r.cV,d4:0,d5:0})},Ly=ie(function(e,r,n,a,o,i,c,l){var u=t(wy,Py,g([st(e),st(r),st(n),st(a)])),v=u.a,f=u.b;if(v.b){var m=ue(v,f);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var p=m.a,d=m.b,b=d.a,h=d.b,y=h.a,S=h.b,_=S.a;return t(Cy,t(Y,Sy,v),{bo:t(ar,p,b),bW:t(ar,y,_),bX:t(ar,o,i),bY:t(ar,c,l)})}else return pf}else return gf({bo:t(ar,e,r),bW:t(ar,n,a),bX:t(ar,o,i),bY:t(ar,c,l)})}),xy=E(function(e,r,n,a){return Ht(Ly,e,r,n,a,Ye,Ye,Ye,Ye)}),zy={$:5},ky=zy,Ty=uo({gq:.44757,gu:.40745}),My=function(e){return e},Kl=function(e){return e},qo=function(e){return e},Dy={$:1},jy=Dy,Ay=$(function(e,r){var n=e,a=Xa(r.ep),o=a.gq,i=a.gu,c=a.dg,l=t($o,r.bT,r.aS),u=l;return{bJ:Dn(u),eZ:n,bR:Mn(u),cV:0,b6:Tn(u),c8:2,gq:o,gu:i,dg:c}}),eu=function(e){return t(Ay,Xv(!0),{aS:e.aS,bT:e.bT,ep:Qi(e.ep)})},Ro=function(e){return e/255},ru=P(function(e,r,n){return L(Mr,Ro(e),Ro(r),Ro(n),1)}),nu=function(e){var r=e;return r},By=function(e){e:for(;;){if(se(e.dG,me)&&se(e.dH,me))return Ye;if(t(Pn,je(e.dG),je(e.dH))){var r={aS:e.aS,dG:e.dH,dH:e.dG,eJ:Bt(e.eJ)};e=r;continue e}else{var n=K(nu(e.dH)/Rr),a=K(nu(e.dG)/Rr),o=cr(e.eJ),i=o.gq,c=o.gu,l=o.dg,u=t($o,gv(1),e.aS),v=u;return{bJ:a*Dn(v),eZ:!1,bR:a*Mn(v),cV:n/a,b6:a*Tn(v),c8:3,gq:i,gu:c,dg:l}}}},Fy=function(e){return By({aS:e.aS,dG:e.dG,dH:e.dH,eJ:t(Mc,Ke(e.bI),Ke(e.bP))})},Vy=function(e){return t(cv,{eQ:e.eQ,eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU},g([{aZ:e.aZ,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},Ey=uo({gq:.31271,gu:.32902}),Wy=function(e){return je(e)},qy={$:0},Ry=qy,Ny=function(e){return Vy({eQ:lv(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU,aZ:e.aZ,ff:Wy(mf(80)),fC:pf,ge:Ry,gn:Ey})},Gy=$(function(e,r){return Ny({eU:H$(e.eU),ao:e.ao,$7:xe(e.$7),bg:e.bg,aU:C(Vt(rr(e.aL.go)),Vt(rr(e.aL.fo))),aZ:Ov(r)})}),Hy=$(function(e,r){var n=J2({bI:0,aS:B3(My(2e3)),bP:Ur(90),bT:qo(240)}),a=eu({aS:Wo,bT:Kl(6e3),ep:{gq:2,gu:3,dg:3}}),o=Fy({bI:0,aS:Wo,bP:Ur(90),dG:qo(30),dH:qo(30)}),i=eu({aS:Ty,bT:Kl(6e3),ep:{gq:-2,gu:4,dg:3}}),c=t(oa,"unlit",e)?Gy({eU:s(ru,46,46,46),ao:r.ao,$7:.1,bg:e.bg,aL:e.aL}):I2({eQ:jy,eV:s(ru,46,46,46),ao:r.ao,$7:.1,bg:e.bg,ff:yy(6),fC:L(xy,i,a,n,o),aL:e.aL,ge:ky,gn:Wo});return c(g([b_(e),t(y_,e,r),t(P_,e,r),t(_y,e,r),t(w_,e,r),t(L_,e,r)]))}),Iy=$(function(e,r){return t(Hy,e,r)}),Uy=function(e){return{$:3,a:e}},Jy=function(e){return{$:4,a:e}},Oy=function(e){return{$:5,a:e}},Xy={$:0},Yy={$:2},Zy={$:3},Qy={$:1},Ky=function(e){return t(Je,"autocomplete",e?"on":"off")},au=function(e){var r=e;return Sr(r.l)},e4={$:6},bf=$(function(e,r){return t(rn,g([M("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),t(oe,"transition","background-color 0.3s ease"),br(e)]),g([we(r)]))}),r4=Or("pre"),n4=function(e){var r=e;return t(F,w,g([t(bf,e4,"Export"),t(r4,g([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),g([we(r.c6)]))]))},a4={$:7},t4=function(e){return{$:8,a:e}},o4=function(e){return t(Tr,"cols",Ve(e))},i4=function(e){return t(Tr,"rows",Ve(e))},c4=Or("textarea"),l4=function(e){var r=e;return t(F,w,g([t(bf,a4,"Import"),t(c4,g([M("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),i4(150),o4(10),Wa(t4),qa(r.ca)]),g([we("todo")]))]))},u4=function(e){return t(Yi,"mousedown",fe(e))},$4=Je("placeholder"),v4=function(e){var r=e,n=t(F,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Zy),ma("Move Level Up")]),g([vr.fH])),a=t(F,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Yy),ma("Move Level Down")]),g([vr.fG])),o=t(F,g([M("inline-block ml-1 w-4 text-white40 hover:text-red-400"),br(Qy),ma("Delete Level")]),g([vr.gg])),i=t(rn,g([M("inline-block ml-1 w-4 text-white40 hover:text-white80"),br(Xy),ma("Duplicate Level")]),g([vr.fU])),c=$(function(l,u){return t(rn,g([M("w-full h-8 p-2 text-left text-white80 border-b border-white20"),M(se(l,au(r.U))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),t(oe,"transition","background-color 0.3s ease"),u4(Oy(l))]),g([se(l,au(r.U))?t(F,w,g([t(Ta,g([M("w-[100px] bg-transparent"),$4("Enter Level Name"),qa(rc(r.U).fJ),Wa(Jy),Ky(!1)]),w),t(F,g([M("float-right")]),g([i,n,a,o]))])):t(F,g([M("whitespace-nowrap")]),g([we(u)]))]))});return t(F,g([M("w-60 text-xs")]),g([t(F,g([M("w-full h-[200px] overflow-hidden overflow-y-scroll")]),t(Xt,$(function(l,u){var v=u.fJ;return t(c,l,v)}),oc(r.U))),t(F,g([M("p-4 border-[0.5px] border-white20")]),g([n4(r)])),t(F,g([M("p-4 border-[0.5px] border-white20")]),g([l4(r)]))]))},f4=function(e){return t(F,w,g([t(F,g([M("text-lg")]),g([we("Pages")])),t(F,g([M("p-4")]),g([t(za,Uy,v4(e.I))]))]))},s4=function(e){return{$:2,a:e}},d4={$:1},tu=$(function(e,r){return t(rn,g([M("m-1 p-2 rounded bg-black40 hover:bg-black80"),br(e)]),g([we(r)]))}),m4=$(function(e,r){return t(F,w,g([t(F,g([M("h-40")]),g([t(F,g([M("text-lg")]),g([we("Polygon editor")])),function(){var n=r.aj;if(n.$===1){var a=n.a;return t(F,g([M("p-2")]),g([t(F,w,g([we("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ")])),t(F,w,g([we("After you are finished drawing, click the button below.")])),t(tu,s4(a),"Finish drawing polygon")]))}else return t(tu,d4,"Start drawing a polygon")}()]))]))}),g4=$(function(e,r){return r.aE?t(F,g([M("fixed top-0 right-0 w-[300px]"),t(oe,"height",$e(e.aL.fo-80)+"px"),M("bg-black20"),M("border-[0.5px] border-white20"),M("overflow-y-scroll"),M("text-xs text-white60")]),g([t(F,g([M("p-4 border-[0.5px] border-white20")]),g([t(m4,e,r)])),t(F,g([M("p-4 border-[0.5px] border-white20")]),g([f4(r)]))])):t(F,w,w)}),p4={$:0},ou={dp:t(ei,g([ri("0 0 24 24"),Ko("currentColor")]),g([t(Te,g([ke("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),w)])),du:t(ei,g([ri("0 0 24 24"),Ko("currentColor")]),g([t(Te,g([ke("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),w)]))},b4=function(e){return t(F,g([M("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),g([t(rn,g([M("w-6"),br(p4)]),g([e.aE?ou.dp:ou.du]))]))},h4=$(function(e,r){return t(F,w,g([t(g4,e,r),b4(r)]))}),_4=Ge(o0,Iy,m3,i1,e1,h4,j3);const y4={Main:{init:_4(t(B,function(e){return fe({fv:e})},t(j,"inputs",t(B,function(e){return t(B,function(r){return t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return fe({e0:c,bg:i,dt:o,dL:a,em:n,aL:r,gm:e})},t(j,"clock",ne))},t(j,"devicePixelRatio",ne))},t(j,"dt",ne))},t(j,"keyboard",t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return t(B,function(f){return t(B,function(m){return fe({eP:m,e2:f,ds:v,fa:u,fz:l,fW:c,f_:i,eA:o,eI:a})},t(j,"alt",ee))},t(j,"control",ee))},t(j,"down",ee))},t(j,"downs",Pr(On)))},t(j,"left",ee))},t(j,"pressedKeys",Pr(On)))},t(j,"right",ee))},t(j,"shift",ee))},t(j,"up",ee))))},t(j,"pointer",t(B,function(n){return t(B,function(a){return t(B,function(o){return t(B,function(i){return t(B,function(c){return t(B,function(l){return t(B,function(u){return t(B,function(v){return fe({ds:v,fw:u,fF:l,f$:c,f0:i,eI:o,gq:a,gu:n})},t(j,"down",ee))},t(j,"isDown",ee))},t(j,"move",ee))},t(j,"rightDown",ee))},t(j,"rightUp",ee))},t(j,"up",ee))},t(j,"x",ne))},t(j,"y",ne))))},t(j,"screen",t(B,function(r){return t(B,function(n){return fe({fo:n,go:r})},t(j,"height",ne))},t(j,"width",ne))))},t(j,"wheel",t(B,function(e){return t(B,function(r){return fe({e5:r,e6:e})},t(j,"deltaX",ne))},t(j,"deltaY",ne)))))))(0)}},R={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},C4=e=>{const r=d=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(d.code),n=d=>["AltLeft","AltRight"].includes(d.code),a=d=>["ShiftLeft","ShiftRight"].includes(d.code),o=d=>d.code=="ArrowLeft",i=d=>d.code=="ArrowRight",c=d=>d.code=="ArrowUp",l=d=>d.code=="ArrowDown",u=d=>d.button==0,v=d=>d.button==2;function f(d){d.keyboard.pressedKeys=[],d.keyboard.control=!1,d.keyboard.alt=!1,d.keyboard.shift=!1,d.keyboard.left=!1,d.keyboard.right=!1,d.keyboard.up=!1,d.keyboard.down=!1,d.pointer.isDown=!1}function m(d){d.keyboard.downs=[],d.pointer.down=!1,d.pointer.move=!1,d.pointer.up=!1,d.pointer.rightDown=!1,d.pointer.rightUp=!1,d.wheel.deltaX=0,d.wheel.deltaY=0}window.addEventListener("keydown",d=>{d.repeat||(R.keyboard.downs.push(d.code),R.keyboard.pressedKeys.push(d.code),r(d)&&(R.keyboard.control=!0),n(d)&&(R.keyboard.alt=!0),a(d)&&(R.keyboard.shift=!0),o(d)&&(R.keyboard.left=!0),i(d)&&(R.keyboard.right=!0),c(d)&&(R.keyboard.up=!0),l(d)&&(R.keyboard.down=!0))}),window.addEventListener("keyup",d=>{R.keyboard.pressedKeys=R.keyboard.pressedKeys.filter(b=>b!=d.code),r(d)&&(R.keyboard.control=!1,R.keyboard.pressedKeys=[]),n(d)&&(R.keyboard.alt=!1),a(d)&&(R.keyboard.shift=!1),o(d)&&(R.keyboard.left=!1),i(d)&&(R.keyboard.right=!1),c(d)&&(R.keyboard.up=!1),l(d)&&(R.keyboard.down=!1)}),window.addEventListener("pointerdown",d=>{R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY,u(d)&&(R.pointer.down=!0,R.pointer.isDown=!0),v(d)&&(R.pointer.rightDown=!0)}),window.addEventListener("pointermove",d=>{R.pointer.move=!0,R.pointer.x=-.5*R.screen.width+d.pageX,R.pointer.y=.5*R.screen.height-d.pageY}),window.addEventListener("pointerup",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("pointercancel",d=>{u(d)&&(R.pointer.up=!0,R.pointer.isDown=!1),v(d)&&(R.pointer.rightUp=!0)}),window.addEventListener("wheel",d=>{R.wheel.deltaX=d.deltaX,R.wheel.deltaY=d.deltaY}),window.addEventListener("blur",d=>{f(R)}),window.addEventListener("focus",d=>{f(R)}),window.addEventListener("visibilitychange",d=>{f(R)}),window.addEventListener("resize",()=>{R.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(d){const b=d/1e3,h=b-R.clock;h<.009||(R.dt=h,R.clock=b,e.ports.tick.send(R),m(R)),window.requestAnimationFrame(p)}},P4=()=>{No("pointerdown"),No("wheel"),No("keydown")},No=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},w4=y4.Main.init({node:document.querySelector("#app div"),flags:{inputs:R}});P4();C4(w4);
