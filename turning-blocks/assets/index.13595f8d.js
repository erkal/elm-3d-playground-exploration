const rs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};rs();function dn(e,r,n){return n.a=e,n.f=r,n}function v(e){return dn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return dn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function U(e){return dn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Ve(e){return dn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function vr(e){return dn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return e(r,n,a,i,o,l)}}}}}})}function Ht(e){return dn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return e(r,n,a,i,o,l,c)}}}}}}})}function be(e){return dn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,a,i,o,l,c,u)}}}}}}}})}function so(e){return dn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return e(r,n,a,i,o,l,c,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function A(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Ze(e,r,n,a,i,o,l){return e.a===6?e.f(r,n,a,i,o,l):e(r)(n)(a)(i)(o)(l)}function po(e,r,n,a,i,o,l,c){return e.a===7?e.f(r,n,a,i,o,l,c):e(r)(n)(a)(i)(o)(l)(c)}function Ja(e,r,n,a,i,o,l,c,u){return e.a===8?e.f(r,n,a,i,o,l,c,u):e(r)(n)(a)(i)(o)(l)(c)(u)}function ns(e,r,n,a,i,o,l,c,u,m){return e.a===9?e.f(r,n,a,i,o,l,c,u,m):e(r)(n)(a)(i)(o)(l)(c)(u)(m)}var as=[];function ts(e){return e.length}var is=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),os=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),ls=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var cs=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,l=new Array(o),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+us()),r});function us(e){return"<internals>"}function va(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ue(e,r){for(var n,a=[],i=go(e,r,0,a);i&&(n=a.pop());i=go(n.a,n.b,0,a));return i}function go(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&va(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=ku(e),r=ku(r));for(var i in e)if(!go(e[i],r[i],n+1,a))return!1;return!0}v(ue);v(function(e,r){return!ue(e,r)});function le(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=le(e.a,r.a))||(n=le(e.b,r.b))?n:le(e.c,r.c);for(;e.b&&r.b&&!(n=le(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return le(e,r)<0});v(function(e,r){return le(e,r)<1});v(function(e,r){return le(e,r)>0});v(function(e,r){return le(e,r)>=0});var $s=v(function(e,r){var n=le(e,r);return n<0?Au:n?n0:Du}),qa=0;function L(e,r){return{a:e,b:r}}function E(e,r,n){return{a:e,b:r,c:n}}function Br(e){return e}function ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(j);function j(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Vr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Vr(e.a,r);return n}var D={$:0};function Vr(e,r){return{$:1,a:e,b:r}}var vs=v(Vr);function $(e){for(var r=D,n=e.length;n--;)r=Vr(e[n],r);return r}function Gt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fs=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});U(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Ve(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return $(o)});vr(function(e,r,n,a,i,o){for(var l=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)l.push(A(e,r.a,n.a,a.a,i.a,o.a));return $(l)});v(function(e,r){return $(Gt(r).sort(function(n,a){return le(e(n),e(a))}))});v(function(e,r){return $(Gt(r).sort(function(n,a){var i=t(e,n,a);return i===Du?0:i===Au?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ms=v(Math.pow);v(function(e,r){return r%e});var ss=v(function(e,r){var n=r%e;return e===0?va(11):n>0&&e<0||n<0&&e>0?n+e:n}),ds=Math.PI,ps=Math.cos,gs=Math.sin,hs=Math.tan;v(Math.atan2);function bs(e){return e}function _s(e){return e===1/0||e===-1/0}var ws=Math.ceil,ys=Math.floor,xs=Math.round,Ss=Math.sqrt,Wc=Math.log,Cs=isNaN;function zs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ls=v(function(e,r){return e+r});function Ps(e){var r=e.charCodeAt(0);return isNaN(r)?R:N(55296<=r&&r<=56319?L(Br(e[0]+e[1]),e.slice(2)):L(Br(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ms(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Br(r[i]+r[i+1])),i+=2;continue}a[i]=e(Br(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(Br(o))&&n.push(o)}return n.join("")});function Ts(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=t(e,Br(o),r)}return r});var ks=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Br(i),r)}return r}),Ds=v(function(e,r){return r.split(e)}),As=v(function(e,r){return r.join(e)}),Fs=T(function(e,r,n){return n.slice(e,r)});function Is(e){return $(e.trim().split(/\s+/g))}function Es(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Br(a)))return!0}return!1});var Bs=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Br(a)))return!1}return!0}),Vs=v(function(e,r){return r.indexOf(e)>-1}),Rs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Os=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Uc(e){return e+""}function Ns(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return R;r=10*r+o-48}return i==a?R:N(n==45?-r:r)}function js(e){if(e.length===0||/[\sxbo]/.test(e))return R;var r=+e;return r===r?N(r):R}function Hs(e){return Gt(e).join("")}function Gs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ws(e){return Br(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Us(e){return{$:0,a:e}}function Js(e){return{$:1,a:e}}function ho(e){return{$:2,b:e}}var qs=ho(function(e){return typeof e=="boolean"?Ee(e):Rr("a BOOL",e)}),Ys=ho(function(e){return typeof e=="number"?Ee(e):Rr("a FLOAT",e)}),Xs=ho(function(e){return typeof e=="string"?Ee(e):e instanceof String?Ee(e+""):Rr("a STRING",e)});function Zs(e){return{$:3,b:e}}var Ks=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function pn(e,r){return{$:9,f:e,g:r}}var Qs=v(function(e,r){return{$:10,b:r,h:e}}),ed=v(function(e,r){return pn(e,[r])}),rd=T(function(e,r,n){return pn(e,[r,n])});U(function(e,r,n,a){return pn(e,[r,n,a])});Ve(function(e,r,n,a,i){return pn(e,[r,n,a,i])});vr(function(e,r,n,a,i,o){return pn(e,[r,n,a,i,o])});Ht(function(e,r,n,a,i,o,l){return pn(e,[r,n,a,i,o,l])});be(function(e,r,n,a,i,o,l,c){return pn(e,[r,n,a,i,o,l,c])});so(function(e,r,n,a,i,o,l,c,u){return pn(e,[r,n,a,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return br(e,n)}catch(a){return Qe(t(Bo,"This is not valid JSON! "+a.message,Qr(r)))}});var Jc=v(function(e,r){return br(e,ma(r))});function br(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ee(e.c):Rr("null",r);case 3:return Wt(r)?qc(e.b,r,$):Rr("a LIST",r);case 4:return Wt(r)?qc(e.b,r,nd):Rr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Rr("an OBJECT with a field named `"+n+"`",r);var a=br(e.b,r[n]);return Dr(a)?a:Qe(t(Fu,n,a.a));case 7:var i=e.e;if(!Wt(r))return Rr("an ARRAY",r);if(i>=r.length)return Rr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=br(e.b,r[i]);return Dr(a)?a:Qe(t(Iu,i,a.a));case 8:if(typeof r!="object"||r===null||Wt(r))return Rr("an OBJECT",r);var o=D;for(var l in r)if(r.hasOwnProperty(l)){var a=br(e.b,r[l]);if(!Dr(a))return Qe(t(Fu,l,a.a));o=Vr(L(l,a.a),o)}return Ee(nr(o));case 9:for(var c=e.f,u=e.g,m=0;m<u.length;m++){var a=br(u[m],r);if(!Dr(a))return a;c=c(a.a)}return Ee(c);case 10:var a=br(e.b,r);return Dr(a)?br(e.h(a.a),r):a;case 11:for(var s=D,d=e.g;d.b;d=d.b){var a=br(d.a,r);if(Dr(a))return a;s=Vr(a.a,s)}return Qe(a0(nr(s)));case 1:return Qe(t(Bo,e.a,Qr(r)));case 0:return Ee(e.a)}}function qc(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var l=br(e,r[o]);if(!Dr(l))return Qe(t(Iu,o,l.a));i[o]=l.a}return Ee(n(i))}function Wt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function nd(e){return t(h0,e.length,function(r){return e[r]})}function Rr(e,r){return Qe(t(Bo,"Expecting "+e,Qr(r)))}function fa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return fa(e.b,r.b);case 6:return e.d===r.d&&fa(e.b,r.b);case 7:return e.e===r.e&&fa(e.b,r.b);case 9:return e.f===r.f&&Yc(e.g,r.g);case 10:return e.h===r.h&&fa(e.b,r.b);case 11:return Yc(e.g,r.g)}}function Yc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!fa(e[a],r[a]))return!1;return!0}var ad=v(function(e,r){return JSON.stringify(ma(r),null,e)+""});function Qr(e){return e}function ma(e){return e}function td(){return[]}function id(){return{}}var od=T(function(e,r,n){return n[e]=ma(r),n});function ld(e){return v(function(r,n){return n.push(ma(e(r))),n})}function On(e){return{$:0,a:e}}function cd(e){return{$:1,a:e}}function en(e){return{$:2,b:e,c:null}}var bo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ud(e){return{$:5,b:e}}var $d=0;function _o(e){var r={$:0,e:$d++,f:e,g:null,h:[]};return yo(r),r}function Xc(e){return en(function(r){r(On(_o(e)))})}function Zc(e,r){e.h.push(r),yo(e)}var vd=v(function(e,r){return en(function(n){Zc(e,r),n(On(qa))})}),wo=!1,Kc=[];function yo(e){if(Kc.push(e),!wo){for(wo=!0;e=Kc.shift();)fd(e);wo=!1}}function fd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,yo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,a){return xo(r,a,e.gR,e.ih,e.hV,function(){return function(){}})});function xo(e,r,n,a,i,o){var l=t(Jc,e,Qr(r?r.flags:void 0));Dr(l)||va(2);var c={},u=n(l.a),m=u.a,s=o(g,m),d=md(c,g);function g(f,_){var w=t(a,f,m);s(m=w.a,_),ru(c,w.b,i(m))}return ru(c,u.b,i(m)),d?{ports:d}:{}}var Or={};function md(e,r){var n;for(var a in Or){var i=Or[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=dd(i,r)}return n}function sd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function dd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,l=e.f;function c(u){return t(bo,c,ud(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&l?P(a,n,s.i,s.j,u):b(a,n,o?s.i:s.j,u)}))}return n.h=_o(t(bo,c,e.b))}var pd=v(function(e,r){return en(function(n){e.g(r),n(On(qa))})});v(function(e,r){return t(vd,e.h,{$:0,a:r})});function Qc(e){return function(r){return{$:1,k:e,l:r}}}function gd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var eu=[],So=!1;function ru(e,r,n){if(eu.push({p:e,q:r,r:n}),!So){So=!0;for(var a;a=eu.shift();)hd(a.p,a.q,a.r);So=!1}}function hd(e,r,n){var a={};Ut(!0,r,a,null),Ut(!1,n,a,null);for(var i in e)Zc(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Ut(e,r,n,a){switch(r.$){case 1:var i=r.k,o=bd(e,i,a,r.l);n[i]=_d(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)Ut(e,l.a,n,a);return;case 3:Ut(e,r.o,n,{s:r.n,t:a});return}}function bd(e,r,n,a){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Or[r].e:Or[r].f;return t(o,i,a)}function _d(e,r,n){return n=n||{i:D,j:D},e?n.i=Vr(r,n.i):n.j=Vr(r,n.j),n}function wd(e){Or[e]&&va(3)}v(function(e,r){return r});function yd(e,r){return wd(e),Or[e]={f:xd,u:r,a:Sd},Qc(e)}var xd=v(function(e,r){return function(n){return e(r(n))}});function Sd(e,r){var n=D,a=Or[e].u,i=On(null);Or[e].b=i,Or[e].c=T(function(l,c,u){return n=c,i});function o(l){var c=t(Jc,a,Qr(l));Dr(c)||va(4,e,c.a);for(var u=c.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Jt,rn=typeof document!="undefined"?document:{};function Co(e,r){e.appendChild(r)}U(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(hn(e,function(){}),i),{}});function zo(e){return{$:0,a:e}}var nu=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Po(n),e:i,f:e,b:o}})}),nn=nu(void 0),Cd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Po(n),e:i,f:e,b:o}})}),zd=Cd(void 0);function Ld(e,r,n,a){return{$:3,d:Po(e),g:r,h:n,i:a}}var Pd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return gn([e,r],function(){return e(r)})});T(function(e,r,n){return gn([e,r,n],function(){return t(e,r,n)})});var Md=U(function(e,r,n,a){return gn([e,r,n,a],function(){return b(e,r,n,a)})});Ve(function(e,r,n,a,i){return gn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});vr(function(e,r,n,a,i,o){return gn([e,r,n,a,i,o],function(){return A(e,r,n,a,i,o)})});Ht(function(e,r,n,a,i,o,l){return gn([e,r,n,a,i,o,l],function(){return Ze(e,r,n,a,i,o,l)})});be(function(e,r,n,a,i,o,l,c){return gn([e,r,n,a,i,o,l,c],function(){return po(e,r,n,a,i,o,l,c)})});so(function(e,r,n,a,i,o,l,c,u){return gn([e,r,n,a,i,o,l,c,u],function(){return Ja(e,r,n,a,i,o,l,c,u)})});var au=v(function(e,r){return{$:"a0",n:e,o:r}}),Td=v(function(e,r){return{$:"a1",n:e,o:r}}),Lo=v(function(e,r){return{$:"a2",n:e,o:r}}),Tr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function tu(e){return e=="script"?"p":e}function kd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Dd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Ad(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function iu(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Fd=v(function(e,r){return r.$==="a0"?t(au,r.n,Id(e,r.o)):r});function Id(e,r){var n=Go(r);return{$:r.$,a:n?b(b0,n<3?Ed:Bd,ar(e),r.a):t(Kt,e,r.a)}}var Ed=v(function(e,r){return L(e(r.a),r.b)}),Bd=v(function(e,r){return{aA:e(r.aA),dA:r.dA,dp:r.dp}});function Po(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?ou(r,i,ma(o)):r[i]=ma(o);continue}var l=r[a]||(r[a]={});a==="a3"&&i==="class"?ou(l,i,o):l[i]=o}return r}function ou(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hn(e,r){var n=e.$;if(n===5)return hn(e.k||(e.k=e.m()),r);if(n===0)return rn.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},l=hn(a,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Mo(l,r,e.d),l}var l=e.f?rn.createElementNS(e.f,e.c):rn.createElement(e.c);Jt&&e.c=="a"&&l.addEventListener("click",Jt(l)),Mo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)Co(l,hn(n===1?c[u]:c[u].b,r));return l}function Mo(e,r,n){for(var a in n){var i=n[a];a==="a1"?Vd(e,i):a==="a0"?Nd(e,r,i):a==="a3"?Rd(e,i):a==="a4"?Od(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Vd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Rd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Od(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Nd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=a[i];if(!o){e.removeEventListener(i,l),a[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=jd(r,o),e.addEventListener(i,l,To&&{passive:Go(o)<2}),a[i]=l}}var To;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){To=!0}}))}catch{}function jd(e,r){function n(a){var i=n.q,o=br(i.a,a);if(!!Dr(o)){for(var l=Go(i),c=o.a,u=l?l<3?c.a:c.aA:c,m=l==1?c.b:l==3&&c.dA,s=(m&&a.stopPropagation(),(l==2?c.b:l==3&&c.dp)&&a.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function Hd(e,r){return e.$==r.$&&fa(e.a,r.a)}function lu(e,r){var n=[];return kr(e,r,n,0),n}function Ke(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function kr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Zd(r),o=1;else{Ke(n,0,a,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,m=u===c.length;m&&u--;)m=l[u]===c[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];kr(e.k,r.k,s,0),s.length>0&&Ke(n,1,a,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var w=r.k;w.$===4;)f=!0,typeof g!="object"?g=[g,w.j]:g.push(w.j),w=w.k;if(f&&d.length!==g.length){Ke(n,0,a,r);return}(f?!Gd(d,g):d!==g)&&Ke(n,2,a,g),kr(_,w,n,a+1);return;case 0:e.a!==r.a&&Ke(n,3,a,r.a);return;case 1:cu(e,r,n,a,Wd);return;case 2:cu(e,r,n,a,Ud);return;case 3:if(e.h!==r.h){Ke(n,0,a,r);return}var x=ko(e.d,r.d);x&&Ke(n,4,a,x);var S=r.i(e.g,r.g);S&&Ke(n,5,a,S);return}}}function Gd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function cu(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ke(n,0,a,r);return}var o=ko(e.d,r.d);o&&Ke(n,4,a,o),i(e,r,n,a)}function ko(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=ko(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Hd(l,c)||(a=a||{},a[i]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Wd(e,r,n,a){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?Ke(n,6,a,{v:c,i:l-c}):l<c&&Ke(n,7,a,{v:l,e:o});for(var u=l<c?l:c,m=0;m<u;m++){var s=i[m];kr(s,o[m],n,++a),a+=s.b||0}}function Ud(e,r,n,a){for(var i=[],o={},l=[],c=e.e,u=r.e,m=c.length,s=u.length,d=0,g=0,f=a;d<m&&g<s;){var _=c[d],w=u[g],x=_.a,S=w.a,y=_.b,C=w.b,I=void 0,q=void 0;if(x===S){f++,kr(y,C,i,f),f+=y.b||0,d++,g++;continue}var Z=c[d+1],G=u[g+1];if(Z){var Y=Z.a,X=Z.b;q=S===Y}if(G){var V=G.a,ne=G.b;I=x===V}if(I&&q){f++,kr(y,ne,i,f),Ya(o,i,x,C,g,l),f+=y.b||0,f++,Xa(o,i,x,X,f),f+=X.b||0,d+=2,g+=2;continue}if(I){f++,Ya(o,i,S,C,g,l),kr(y,ne,i,f),f+=y.b||0,d+=1,g+=2;continue}if(q){f++,Xa(o,i,x,y,f),f+=y.b||0,f++,kr(X,C,i,f),f+=X.b||0,d+=2,g+=1;continue}if(Z&&Y===V){f++,Xa(o,i,x,y,f),Ya(o,i,S,C,g,l),f+=y.b||0,f++,kr(X,ne,i,f),f+=X.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=c[d],y=_.b;Xa(o,i,_.a,y,f),f+=y.b||0,d++}for(;g<s;){var fe=fe||[],w=u[g];Ya(o,i,w.a,w.b,void 0,fe),g++}(i.length>0||l.length>0||fe)&&Ke(n,8,a,{w:i,x:l,y:fe})}var uu="_elmW6BL";function Ya(e,r,n,a,i,o){var l=e[n];if(!l){l={c:0,z:a,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];kr(l.z,a,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Ya(e,r,n+uu,a,i,o)}function Xa(e,r,n,a,i){var o=e[n];if(!o){var l=Ke(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];kr(a,o.z,c,i),Ke(r,9,i,{w:c,A:o});return}Xa(e,r,n+uu,a,i)}function $u(e,r,n,a){Za(e,r,n,0,0,r.b,a)}function Za(e,r,n,a,i,o,l){for(var c=n[a],u=c.r;u===i;){var m=c.$;if(m===1)$u(e,r.k,c.s,l);else if(m===8){c.t=e,c.u=l;var s=c.s.w;s.length>0&&Za(e,r,s,0,i,o,l)}else if(m===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Za(e,r,s,0,i,o,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return Za(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,w=e.childNodes,x=0;x<_.length;x++){i++;var S=g===1?_[x]:_[x].b,y=i+(S.b||0);if(i<=u&&u<=y&&(a=Za(w[x],S,n,a,i,y,l),!(c=n[a])||(u=c.r)>o))return a;i=y}return a}function vu(e,r,n,a){return n.length===0?e:($u(e,r,n,a),qt(e,n))}function qt(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Jd(i,a);i===e&&(e=o)}return e}function Jd(e,r){switch(r.$){case 0:return qd(e,r.s,r.u);case 4:return Mo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return qt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(hn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=qt(e,n.w),e;case 8:return Yd(e,r);case 5:return r.s(e);default:va(10)}}function qd(e,r,n){var a=e.parentNode,i=hn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Yd(e,r){var n=r.s,a=Xd(n.y,r);e=qt(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:hn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&Co(e,a),e}function Xd(e,r){if(!!e){for(var n=rn.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;Co(n,o.c===2?o.s:hn(o.z,r.u))}return n}}function Do(e){if(e.nodeType===3)return zo(e.textContent);if(e.nodeType!==1)return zo("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,l=i.value;r=Vr(t(Tr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Vr(Do(m[a]),u);return b(nn,c,r,u)}function Zd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Kd=U(function(e,r,n,a){return xo(r,a,e.gR,e.ih,e.hV,function(i,o){var l=e.ij,c=a.node,u=Do(c);return fu(o,function(m){var s=l(m),d=lu(u,s);c=vu(c,u,d,i),u=s})})});U(function(e,r,n,a){return xo(r,a,e.gR,e.ih,e.hV,function(i,o){var l=e.dy&&e.dy(i),c=e.ij,u=rn.title,m=rn.body,s=Do(m);return fu(o,function(d){Jt=l;var g=c(d),f=nn("body")(D)(g.fR),_=lu(s,f);m=vu(m,s,_,i),s=f,Jt=0,u!==g.ib&&(rn.title=u=g.ib)})})});var Yt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function fu(e,r){r(e);var n=0;function a(){n=n===1?0:(Yt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Yt(a),n=2)}}v(function(e,r){return t(Uo,tt,en(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Uo,tt,en(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Uo,tt,en(function(){history.replaceState({},"",r),e()}))});var Qd={addEventListener:function(){},removeEventListener:function(){}},ep=typeof window!="undefined"?window:Qd;T(function(e,r,n){return Xc(en(function(a){function i(o){_o(n(o))}return e.addEventListener(r,i,To&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=br(e,r);return Dr(n)?N(n.a):R});function mu(e,r){return en(function(n){Yt(function(){var a=document.getElementById(e);n(a?On(r(a)):cd(_0(e)))})})}function rp(e){return en(function(r){Yt(function(){r(On(e()))})})}v(function(e,r){return mu(r,function(n){return n[e](),qa})});v(function(e,r){return rp(function(){return ep.scroll(e,r),qa})});T(function(e,r,n){return mu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,qa})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var np=v(function(e,r){var n="g";e.g9&&(n+="m"),e.f$&&(n+="i");try{return N(new RegExp(r,n))}catch{return R}});v(function(e,r){return r.match(e)!==null});var ap=T(function(e,r,n){for(var a=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?N(d):R}a.push(P(Bv,u[0],u.index,i,$(s))),c=r.lastIndex}return r.lastIndex=l,$(a)});U(function(e,r,n,a){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var m=arguments[c];u[--c]=m?N(m):R}return n(P(Bv,l,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;i.push(a.slice(o,c.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=l,$(i)});var su=0;function Ka(e,r){for(;r.b;r=r.b)e(r.a)}function Ao(e){for(var r=0;e.b;e=e.b)r++;return r}var tp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ip=Ve(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),op=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),lp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),cp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),up=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$p=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),fp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),mp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),sp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},dp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},pp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},gp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},du=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},pu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hp=function(e){e.gl.disable(e.gl.CULL_FACE)},bp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},_p=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},wp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},gu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],yp=[dp,pp,gp,du,pu,hp,bp,_p,wp];function hu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function xp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function bu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Sp(e,r,n,a){for(var i=n.a.d_,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(f,_,w,x,S){var y;if(i===1)for(y=0;y<_;y++)f[w++]=_===1?x[S]:x[S][y];else o.forEach(function(C){for(y=0;y<_;y++)f[w++]=_===1?x[C][S]:x[C][S][y]})}var u=bu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(Ao(n.b)*s);Ka(function(f){c(d,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function Cp(e,r){if(r.a.eb>0){var n=e.createBuffer(),a=zp(r.c,r.a.eb);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d_*Ao(r.b),indexBuffer:null,buffers:{}}}function zp(e,r){var n=new Uint32Array(Ao(e)*r),a=0,i;return Ka(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function _u(e,r){return e+"#"+r}var wu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),du(n),pu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=_u(o.b.id,o.c.id),c=n.programs[l]),!c){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=su++,m||(m=hu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=su++,s||(s=hu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=xp(a,m,s);c={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Lp(a,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(d,u),_=a.getAttribLocation(d,f.name);c.activeAttributes.push(f),c.activeAttributeLocations.push(_)}l=_u(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Pp(c.uniformSetters,o.e);var w=n.buffers.get(o.d);for(w||(w=Cp(a,o.d),n.buffers.set(o.d,w)),u=0;u<c.activeAttributes.length;u++){f=c.activeAttributes[u],_=c.activeAttributeLocations[u],w.buffers[f.name]===void 0&&(w.buffers[f.name]=Sp(a,f,o.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,w.buffers[f.name]);var x=bu(a,f.type);if(x.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,y=S*x.arraySize,C=0;C<x.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,x.size,x.baseType,!1,y,S*C)}for(n.toggle=!n.toggle,Ka(i_(n),o.a),u=0;u<gu.length;u++){var I=n[gu[u]];I.toggle!==n.toggle&&I.enabled&&(yp[u](n),I.enabled=!1,I.toggle=n.toggle)}w.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,w.indexBuffer),a.drawElements(o.d.a.eN,w.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eN,0,w.numIndices)}}return Ka(i,e.g),r});function Lp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(f,_){var w=_.name,x=e.getUniformLocation(f,w);switch(_.type){case e.INT:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};case e.FLOAT:return function(y){o[w]!==y&&(e.uniform1f(x,y),o[w]=y)};case e.FLOAT_VEC2:return function(y){o[w]!==y&&(e.uniform2f(x,y[0],y[1]),o[w]=y)};case e.FLOAT_VEC3:return function(y){o[w]!==y&&(e.uniform3f(x,y[0],y[1],y[2]),o[w]=y)};case e.FLOAT_VEC4:return function(y){o[w]!==y&&(e.uniform4f(x,y[0],y[1],y[2],y[3]),o[w]=y)};case e.FLOAT_MAT4:return function(y){o[w]!==y&&(e.uniformMatrix4fv(x,!1,new Float32Array(y)),o[w]=y)};case e.SAMPLER_2D:var S=l++;return function(y){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(y);C||(C=y.gc(e),c.textures.set(y,C)),e.bindTexture(e.TEXTURE_2D,C),o[w]!==y&&(e.uniform1i(x,S),o[w]=y)};case e.BOOL:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[a[g.name]||g.name]=u(i,g)}return m}function Pp(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Mp=T(function(e,r,n){return Ld(r,{g:n,f:{},h:e},Ep,Bp)}),Tp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),kp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Dp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Ap=v(function(e,r){e.contextAttributes.antialias=!0}),Fp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ip=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ep(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ka(function(i){return t(t_,r,i)},e.h);var n=rn.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),tp(function(){return t(wu,e,n)})):(n=rn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Bp(e,r){return r.f=e.f,wu(r)}var Vp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Rp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Rp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Fo=new Float64Array(3),yu=new Float64Array(3),xu=new Float64Array(3),Op=T(function(e,r,n){return new Float64Array([e,r,n])}),Np=function(e){return e[0]},jp=function(e){return e[1]},Hp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Gp=function(e){return new Float64Array([e.io,e.is,e.dO])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Su(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Su);function Cu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Xt(Su(e,r,n),n)}v(Cu);function zu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Xt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/zu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Wp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Qa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Qa);function Io(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Io);v(function(e,r){var n,a=Fo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Qa(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Qa(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Qa(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Qa(r,a)+e[14])/n,i});var Up=U(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Jp=function(e){return{io:e[0],is:e[1],dO:e[2],fp:e[3]}},qp=function(e){return new Float64Array([e.io,e.is,e.dO,e.fp])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Yp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Yp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Xp=new Float64Array(16),Zp=new Float64Array(16),Kp=function(e){var r=new Float64Array(16);return r[0]=e.ep,r[1]=e.et,r[2]=e.ex,r[3]=e.eB,r[4]=e.eq,r[5]=e.eu,r[6]=e.ey,r[7]=e.eC,r[8]=e.er,r[9]=e.ev,r[10]=e.ez,r[11]=e.eD,r[12]=e.es,r[13]=e.ew,r[14]=e.eA,r[15]=e.eE,r},Qp=function(e){return{ep:e[0],et:e[1],ex:e[2],eB:e[3],eq:e[4],eu:e[5],ey:e[6],eC:e[7],er:e[8],ev:e[9],ez:e[10],eD:e[11],es:e[12],ew:e[13],eA:e[14],eE:e[15]}};function Lu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}vr(Lu);U(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return Lu(l,c,o,i,n,a)});function Pu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(o+i)/(o-i),l[15]=1,l}vr(Pu);U(function(e,r,n,a){return Pu(e,r,n,a,-1,1)});function Mu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],w=e[12],x=e[13],S=e[14],y=e[15],C=r[0],I=r[1],q=r[2],Z=r[3],G=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],fe=r[9],we=r[10],me=r[11],se=r[12],xe=r[13],de=r[14],Ae=r[15];return n[0]=a*C+c*I+d*q+w*Z,n[1]=i*C+u*I+g*q+x*Z,n[2]=o*C+m*I+f*q+S*Z,n[3]=l*C+s*I+_*q+y*Z,n[4]=a*G+c*Y+d*X+w*V,n[5]=i*G+u*Y+g*X+x*V,n[6]=o*G+m*Y+f*X+S*V,n[7]=l*G+s*Y+_*X+y*V,n[8]=a*ne+c*fe+d*we+w*me,n[9]=i*ne+u*fe+g*we+x*me,n[10]=o*ne+m*fe+f*we+S*me,n[11]=l*ne+s*fe+_*we+y*me,n[12]=a*se+c*xe+d*de+w*Ae,n[13]=i*se+u*xe+g*de+x*Ae,n[14]=o*se+m*xe+f*de+S*Ae,n[15]=l*se+s*xe+_*de+y*Ae,n}v(Mu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],w=r[0],x=r[1],S=r[2],y=r[4],C=r[5],I=r[6],q=r[8],Z=r[9],G=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=a*w+l*x+m*S,n[1]=i*w+c*x+s*S,n[2]=o*w+u*x+d*S,n[3]=0,n[4]=a*y+l*C+m*I,n[5]=i*y+c*C+s*I,n[6]=o*y+u*C+d*I,n[7]=0,n[8]=a*q+l*Z+m*G,n[9]=i*q+c*Z+s*G,n[10]=o*q+u*Z+d*G,n[11]=0,n[12]=a*Y+l*X+m*V+g,n[13]=i*Y+c*X+s*V+f,n[14]=o*Y+u*X+d*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Xt(r,Fo);var a=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=i*a*c+o*u,n[2]=o*a*c-i*u,n[3]=0,n[4]=a*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+a*u,n[7]=0,n[8]=a*o*c+i*u,n[9]=i*o*c-a*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/zu(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=l*s,f=c*s,_=o*l*m,w=o*c*m,x=l*c*m,S=o*o*m+u,y=_+f,C=w-g,I=_-f,q=l*l*m+u,Z=x+d,G=w+g,Y=x-d,X=c*c*m+u,V=n[0],ne=n[1],fe=n[2],we=n[3],me=n[4],se=n[5],xe=n[6],de=n[7],Ae=n[8],Te=n[9],Xe=n[10],Bn=n[11],Ga=n[12],Xr=n[13],Zr=n[14],$a=n[15];return a[0]=V*S+me*y+Ae*C,a[1]=ne*S+se*y+Te*C,a[2]=fe*S+xe*y+Xe*C,a[3]=we*S+de*y+Bn*C,a[4]=V*I+me*q+Ae*Z,a[5]=ne*I+se*q+Te*Z,a[6]=fe*I+xe*q+Xe*Z,a[7]=we*I+de*q+Bn*Z,a[8]=V*G+me*Y+Ae*X,a[9]=ne*G+se*Y+Te*X,a[10]=fe*G+xe*Y+Xe*X,a[11]=we*G+de*Y+Bn*X,a[12]=Ga,a[13]=Xr,a[14]=Zr,a[15]=$a,a});function e0(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(e0);U(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function r0(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(r0);U(function(e,r,n,a){var i=new Float64Array(16),o=a[0],l=a[1],c=a[2],u=a[3],m=a[4],s=a[5],d=a[6],g=a[7],f=a[8],_=a[9],w=a[10],x=a[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=w,i[11]=x,i[12]=o*e+m*r+f*n+a[12],i[13]=l*e+s*r+_*n+a[13],i[14]=c*e+d*r+w*n+a[14],i[15]=u*e+g*r+x*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],w=r[9],x=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=w,n[10]=x,n[11]=S,n[12]=l*a+s*i+_*o+r[12],n[13]=c*a+d*i+w*o+r[13],n[14]=u*a+g*i+x*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=Cu(e,r,Fo),i=Xt(Io(n,a,yu),yu),o=Xt(Io(a,i,xu),xu),l=Xp,c=Zp;return l[0]=i[0],l[1]=o[0],l[2]=a[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=a[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,Mu(l,c)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var M=vs,Zt=cs,Tu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(l,c){if(l.$){var m=l.a;return b(Zt,e,c,m)}else{var u=l.a;return b(Zt,o,c,u)}});return b(Zt,o,b(Zt,e,r,i),a)}),Eo=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,l=n.e,c=e,u=b(e,a,i,b(Eo,e,r,l)),m=o;e=c,r=u,n=m;continue e}}),ku=function(e){return b(Eo,T(function(r,n,a){return t(M,L(r,n),a)}),D,e)},Du=1,n0=2,Au=0,Qe=function(e){return{$:1,a:e}},Bo=v(function(e,r){return{$:3,a:e,b:r}}),Fu=v(function(e,r){return{$:0,a:e,b:r}}),Iu=v(function(e,r){return{$:1,a:e,b:r}}),Ee=function(e){return{$:0,a:e}},a0=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},R={$:1},t0=Bs,i0=ad,k=Uc,ee=v(function(e,r){return t(As,e,Gt(r))}),Vo=v(function(e,r){return $(t(Ds,e,r))}),Eu=function(e){return t(ee,`
    `,t(Vo,`
`,e))},Fe=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,l=t(e,a,r),c=i;e=o,r=l,n=c;continue e}else return r}),Nn=function(e){return b(Fe,v(function(r,n){return n+1}),0,e)},o0=fs,l0=T(function(e,r,n){e:for(;;)if(le(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),Nr=v(function(e,r){return b(l0,e,r,D)}),Bu=v(function(e,r){return b(o0,e,t(Nr,0,Nn(r)-1),r)}),jr=Gs,Vu=function(e){var r=jr(e);return 97<=r&&r<=122},Ru=function(e){var r=jr(e);return r<=90&&65<=r},c0=function(e){return Vu(e)||Ru(e)},u0=function(e){var r=jr(e);return r<=57&&48<=r},$0=function(e){return Vu(e)||Ru(e)||u0(e)},nr=function(e){return b(Fe,M,D,e)},sa=Ps,v0=v(function(e,r){return`

(`+(k(e+1)+(") "+Eu(f0(r))))}),f0=function(e){return t(m0,e,D)},m0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var w=sa(n);if(w.$===1)return!1;var x=w.a,S=x.a,y=x.b;return c0(S)&&t(t0,$0,y)}(),o=i?"."+n:"['"+(n+"']"),l=a,c=t(M,o,r);e=l,r=c;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),l=a,c=t(M,m,r);e=l,r=c;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",nr(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(k(Nn(s))+" ways:"));return t(ee,`

`,t(M,_,t(Bu,v0,s)))}else{var a=s.a,l=a,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",nr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",nr(r))+`:

    `):`Problem with the given value:

`}();return _+(Eu(t(i0,4,f))+(`

`+g))}}),fr=32,Ro=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Oo=as,et=ws,No=v(function(e,r){return Wc(r)/Wc(e)}),rt=bs,nt=et(t(No,2,fr)),Ou=P(Ro,0,nt,Oo,Oo),Nu=is,ju=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Hu=ys,jo=ts,qe=v(function(e,r){return le(e,r)>0?e:r}),s0=function(e){return{$:0,a:e}},Ho=os,d0=v(function(e,r){e:for(;;){var n=t(Ho,fr,e),a=n.a,i=n.b,o=t(M,s0(a),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return nr(o)}}),Gu=function(e){var r=e.a;return r},p0=v(function(e,r){e:for(;;){var n=et(r/fr);if(n===1)return t(Ho,fr,e).a;var a=t(d0,e,D),i=n;e=a,r=i;continue e}}),Wu=v(function(e,r){if(r.n){var n=r.n*fr,a=Hu(t(No,fr,n-1)),i=e?nr(r.C):r.C,o=t(p0,i,r.n);return P(Ro,jo(r.r)+n,t(qe,5,a*nt),o,r.r)}else return P(Ro,jo(r.r),nt,Oo,r.r)}),g0=Ve(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Wu,!1,{C:a,n:n/fr|0,r:i});var o=ju(b(Nu,fr,r,e)),l=e,c=r-fr,u=n,m=t(M,o,a),s=i;e=l,r=c,n=u,a=m,i=s;continue e}}),h0=v(function(e,r){if(e<=0)return Ou;var n=e%fr,a=b(Nu,n,e-n,r),i=e-n-fr;return A(g0,r,i,e,D,a)}),Dr=function(e){return!e.$},W=Qs,_e=qs,H=Ks,Re=Ys,Uu=v(function(e,r){return{cO:r.cO,f9:e,cS:r.cS,gn:r.gn,g0:r.g0,ho:r.ho,dw:r.dw,ik:r.ik}}),Kt=ed,b0=rd,ar=Us,Go=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Ar=function(e){return e},_0=Ar,Ju=vr(function(e,r,n,a,i,o){return{d4:o,d9:r,eW:a,eZ:n,e1:e,e2:i}}),w0=Vs,jn=Ms,da=Fs,at=v(function(e,r){return e<1?r:b(da,e,jn(r),r)}),Qt=Os,ei=function(e){return e===""},ri=v(function(e,r){return e<1?"":b(da,0,e,r)}),qu=Ns,Yu=Ve(function(e,r,n,a,i){if(ei(i)||t(w0,"@",i))return R;var o=t(Qt,":",i);if(o.b){if(o.b.b)return R;var l=o.a,c=qu(t(at,l+1,i));if(c.$===1)return R;var u=c;return N(Ze(Ju,e,t(ri,l,i),u,r,n,a))}else return N(Ze(Ju,e,i,R,r,n,a))}),Xu=U(function(e,r,n,a){if(ei(a))return R;var i=t(Qt,"/",a);if(i.b){var o=i.a;return A(Yu,e,t(at,o,a),r,n,t(ri,o,a))}else return A(Yu,e,"/",r,n,a)}),Zu=T(function(e,r,n){if(ei(n))return R;var a=t(Qt,"?",n);if(a.b){var i=a.a;return P(Xu,e,N(t(at,i+1,n)),r,t(ri,i,n))}else return P(Xu,e,R,r,n)});v(function(e,r){if(ei(r))return R;var n=t(Qt,"#",r);if(n.b){var a=n.a;return b(Zu,e,N(t(at,a+1,r)),t(ri,a,r))}else return b(Zu,e,R,r)});var y0=Rs,tt=function(e){},it=On,x0=it(0),Ku=U(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,m=c.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Fe,e,r,nr(d)):P(Ku,e,r,n+1,d);return t(e,i,t(e,l,t(e,u,t(e,s,g))))}else return t(e,i,t(e,l,t(e,u,r)))}else return t(e,i,t(e,l,r))}else return t(e,i,r)}else return r}),Ge=T(function(e,r,n){return P(Ku,e,r,0,n)}),J=v(function(e,r){return b(Ge,v(function(n,a){return t(M,e(n),a)}),D,r)}),ni=bo,Wo=v(function(e,r){return t(ni,function(n){return it(e(n))},r)}),S0=T(function(e,r,n){return t(ni,function(a){return t(ni,function(i){return it(t(e,a,i))},n)},r)}),C0=function(e){return b(Ge,S0(M),it(D),e)},z0=pd,L0=v(function(e,r){var n=r;return Xc(t(ni,z0(e),n))}),P0=T(function(e,r,n){return t(Wo,function(a){return 0},C0(t(J,L0(e),r)))}),M0=T(function(e,r,n){return it(0)}),T0=v(function(e,r){var n=r;return t(Wo,e,n)});Or.Task=sd(x0,P0,M0,T0);var k0=Qc("Task"),Uo=v(function(e,r){return k0(t(Wo,e,r))}),D0=Kd,A0=zs,ai={$:1},Qu=function(e){return{$:2,a:e}},Jo={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),We=T(function(e,r,n){return r(e(n))}),Hn=function(e){var r=e.b.s;return r.a},F0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return N(t(_r,r,{s:o,an:l,X:t(M,a,n)}))}else return R},Ce=v(function(e,r){if(r.$)return e;var n=r.a;return n}),I0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dB;return(le(o+r.gn,Hn(n).cO)>0?t(We,F0,Ce(t(_r,ai,i))):Ar)(t(_r,Qu({dB:o+r.gn}),i));default:var l=i.s,c=l.a,u=l.b,m=t(Uu,c.f9,ke(r,{cO:c.cO+r.gn})),s=t(e,m,u);return t(_r,Jo,{s:L(m,s),an:D,X:t(M,i.s,i.X)})}}),e$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),E0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,l=i,c=t(M,a,n);e=o,r=l,n=c;continue e}else return n}}),B0=v(function(e,r){return nr(b(E0,e,r,D))}),r$=T(function(e,r,n){if(r<=0)return D;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,y=i.a,o=i.b,l=o.a;return $([y,l]);case 3:if(a.b.b.b.b){var c=a.b,y=c.a,u=c.b,l=u.a,m=u.b,s=m.a;return $([y,l,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,y=d.a,g=d.b,l=g.a,f=g.b,s=f.a,_=f.b,w=_.a,x=_.b;return e>1e3?t(M,y,t(M,l,t(M,s,t(M,w,t(B0,r-4,x))))):t(M,y,t(M,l,t(M,s,t(M,w,b(r$,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,y=S.a;return $([y])}}),V0=v(function(e,r){return b(r$,0,e,r)}),R0=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=j(nr(n),j($([a]),i)),l=t(V0,e,o),c=t(e$,e,o);if(c.b){var u=c.a,m=c.b;return t(_r,ai,{s:u,an:m,X:nr(l)})}else{var s=nr(l);if(s.b){var d=s.a,g=s.b;return t(_r,ai,{s:d,an:D,X:g})}else return r}}),O0=function(e){var r=e.b;return t(_r,ai,r)},N0=function(e){var r=e.b;return t(_r,Qu({dB:Hn(e).cO}),r)},j0=function(e){var r=e.b;return t(_r,Jo,r)},H0=v(function(e,r){switch(e.$){case 1:return O0(r);case 2:return j0(r);case 3:return N0(r);default:var n=e.a;return t(R0,n,r)}}),ti=v(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),G0=v(function(e,r){return ke(r,{aN:e(r.aN)})}),W0=function(e){return{$:3,a:e}},U0=function(e){return{$:2,a:e}},n$=v(function(e,r){return{$:0,a:e,b:r}}),J0=v(function(e,r){return{$:1,a:e,b:r}}),Ie=v(function(e,r){if(r.$)return R;var n=r.a;return N(e(n))}),ce=function(e){return e<0?-e:e},a$=js,q0=T(function(e,r,n){return t(Ce,0/0,a$(t(e,r,n)))}),ot=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),Y0=ks,t$=function(e){return b(Y0,M,D,e)},X0=v(function(e,r){var n=t(ot,function(a){return a!=="0"&&a!=="."},t$(r));return j(e&&n?"-":"",r)}),ae=Uc,qo=Ls,i$=Ws,o$=function(e){var r=e.a,n=e.b;if(r==="9"){var a=sa(n);if(a.$===1)return"01";var i=a.a;return t(qo,"0",o$(i))}else{var o=jr(r);return o>=48&&o<57?t(qo,i$(o+1),n):"0"}},Yo=_s,Z0=Cs,ii=function(e){return t(qo,e,"")},l$=T(function(e,r,n){return e<=0?n:b(l$,e>>1,j(r,r),e&1?j(n,r):n)}),lt=v(function(e,r){return b(l$,e,r,"")}),Xo=T(function(e,r,n){return j(n,t(lt,e-jn(n),ii(r)))}),Zo=Ts,c$=function(e){var r=t(Vo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},K0=function(e){var r=t(Vo,"e",ae(ce(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Ce,0,qu(t(y0,"+",i)?t(at,1,i):i)),l=c$(n),c=l.a,u=l.b,m=j(c,u),s=o<0?t(Ce,"0",t(Ie,function(d){var g=d.a,f=d.b;return g+("."+f)},t(Ie,ti(ii),sa(j(t(lt,ce(o),"0"),m))))):b(Xo,o+1,"0",m);return j(e<0?"-":"",s)}else{var n=r.a;return j(e<0?"-":"",n)}else return""},Q0=T(function(e,r,n){if(Yo(n)||Z0(n))return ae(n);var a=n<0,i=c$(K0(ce(n))),o=i.a,l=i.b,c=jn(o)+r,u=j(t(lt,-c+1,"0"),b(Xo,c,"0",j(o,l))),m=jn(u),s=t(qe,1,c),d=t(e,a,b(da,s,m,u)),g=b(da,0,s,u),f=d?Zo(t(Ce,"1",t(Ie,o$,sa(Zo(g))))):g,_=jn(f),w=f==="0"?f:r<=0?j(f,t(lt,ce(r),"0")):le(r,jn(l))<0?b(da,0,_-r,f)+("."+b(da,_-r,_,f)):j(o+".",b(Xo,r,"0",l));return t(X0,a,w)}),u$=Q0(v(function(e,r){var n=sa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(jr(i))})),eg=q0(u$),rg=T(function(e,r,n){var a=t(No,10,ce(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(eg,i,n)}),$$=$s,oi=v(function(e,r){e:for(;;){if(r.$===-2)return R;var n=r.b,a=r.c,i=r.d,o=r.e,l=t($$,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return N(a);default:var c=e,u=o;e=c,r=u;continue e}}}),te=Ve(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Hr={$:-2},pa=Ve(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,s=a.c,d=a.d,g=a.e;return A(te,0,r,n,A(te,1,m,s,d,g),A(te,1,o,l,c,u))}else return A(te,e,o,l,A(te,0,r,n,a,c),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,s=a.c,f=a.d;f.a;var _=f.b,w=f.c,x=f.d,S=f.e,g=a.e;return A(te,0,m,s,A(te,1,_,w,x,S),A(te,1,r,n,g,i))}else return A(te,e,r,n,a,i)}),Ko=T(function(e,r,n){if(n.$===-2)return A(te,0,e,r,Hr,Hr);var a=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=t($$,e,i);switch(u){case 0:return A(pa,a,i,o,b(Ko,e,r,l),c);case 1:return A(te,a,i,r,l,c);default:return A(pa,a,i,o,l,b(Ko,e,r,c))}}),ga=T(function(e,r,n){var a=b(Ko,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,l=a.d,c=a.e;return A(te,1,i,o,l,c)}else{var u=a;return u}}),ng=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},v$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,w=g.d,x=g.e,S=m.e;return A(te,0,f,_,A(te,1,n,a,A(te,0,o,l,c,u),w),A(te,1,s,d,x,S))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,u=y.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return A(te,1,n,a,A(te,0,o,l,c,u),A(te,0,s,d,g,S))}else return e},f$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,m=c.c,s=c.d,d=c.e,g=i.e,f=e.e;f.a;var _=f.b,w=f.c,x=f.d,S=f.e;return A(te,0,o,l,A(te,1,u,m,s,d),A(te,1,n,a,g,A(te,0,_,w,x,S)))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var o=y.b,l=y.c,C=y.d,g=y.e,I=e.e;I.a;var _=I.b,w=I.c,x=I.d,S=I.e;return A(te,1,n,a,A(te,0,o,l,C,g),A(te,0,_,w,x,S))}else return e},ag=Ht(function(e,r,n,a,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,m=o.d,s=o.e;return A(te,n,c,u,m,A(te,0,a,i,s,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var d=l.d;return d.a,f$(r)}else break e;else return l.a,l.d,f$(r);else break e;return r}}),li=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,A(te,r,n,a,li(i),c);var u=v$(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return A(pa,m,s,d,li(g),f)}else return Hr}else return A(te,r,n,a,li(i),c)}else return Hr},ct=v(function(e,r){if(r.$===-2)return Hr;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(le(e,a)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,A(te,n,a,i,t(ct,e,o),l);var u=v$(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return A(pa,m,s,d,t(ct,e,g),f)}else return Hr}else return A(te,n,a,i,t(ct,e,o),l);else return t(tg,e,po(ag,e,r,n,a,i,o,l))}),tg=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(ue(e,a)){var c=ng(l);if(c.$===-1){var u=c.b,m=c.c;return A(pa,n,u,m,o,li(l))}else return Hr}else return A(pa,n,a,i,o,t(ct,e,l))}else return Hr}),ig=v(function(e,r){var n=t(ct,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,l=n.e;return A(te,1,a,i,o,l)}else{var c=n;return c}}),ci=T(function(e,r,n){var a=r(t(oi,e,n));if(a.$)return t(ig,e,n);var i=a.a;return b(ga,e,i,n)}),og=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(ci,r,Ie(function(a){if(a.$===1){var i=a.a,o=i.a,l=i.b;return t(J0,L(o,l),n)}else return a}));case 0:var r=e.a,n=e.b;return t(ci,r,Ie(function(a){if(a.$)return a;var i=a.a,o=i.a,l=i.b;return t(n$,L(o,l),b(rg,o,l,n))}));case 3:var r=e.a,n=e.b;return t(ci,r,Ie(function(a){return a.$===3?W0(n):a}));default:var r=e.a,n=e.b;return t(ci,r,Ie(function(a){return a.$===2?U0(n):a}))}},lg=function(e){return G0(og(e))},cg=v(function(e,r){return t(J,lg(e),r)}),ug=v(function(e,r){return ke(r,{f9:t(cg,e,r.f9)})}),$g=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,ke(a,{s:t(ti,ug(e),a.s)}))}),Qo=v(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),vg=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,ke(i,{s:t(Qo,t(e,o.a,r),o)}))}),fg=U(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ke(a,{bw:!a.bw});case 2:var i=n.a;return ke(a,{R:b(I0,e,i,a.R)});case 3:var o=n.a;return ke(a,{bp:o});case 4:var l=n.a;return ke(a,{R:t($g,l,a.R)});case 5:var c=n.a;return ke(a,{R:b(vg,r,c,a.R)});default:var u=n.a;return ke(a,{R:t(H0,u,a.R)})}}),mg=v(function(e,r){return t(_r,Jo,{s:L(e,r(e)),an:D,X:D})}),sg=gd,m$=sg(D),dg=function(e){return{$:2,a:e}},ui=Zs,ha=Xs,pg=yd("tick",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return ar({cO:l,cS:o,gn:i,g0:a,ho:n,dw:r,ik:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(s){return t(W,function(d){return ar({fF:d,gb:s,dZ:m,gm:u,g1:c,hp:l,hv:o,hH:i,fh:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",ui(ha)))},t(H,"left",_e))},t(H,"pressedKeys",ui(ha)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return ar({dZ:m,gY:u,g8:c,hw:l,hx:o,fh:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return ar({gG:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return ar({gf:r,gg:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re))))),gg=function(e){return e.dH,pg(dg)},hg=function(e){return{$:5,a:e}},bg={$:0},$i=v(function(e,r){return e}),_g=function(e){var r=e.b.s;return r.b},wg=function(e){return{$:1,a:e}},yg=wg,s$=function(e){return{$:8,a:e}},pe=s$,ut=function(e){return{$:0,a:e}},$t=T(function(e,r,n){return e(r(n))}),xg=t($t,ut,$i),bn=xg,ze=function(e){return{$:1,a:e}},an=ze,d$=v(function(e,r){return{$:9,a:e,b:r}}),Gn={$:0},p$=v(function(e,r){return r.$===3?Gn:t(d$,e,r)}),el=function(e){return t(p$,4,e)},p={fu:"a",cH:"atv",fw:"ab",fx:"cx",fy:"cy",fz:"acb",fA:"accx",fB:"accy",fC:"acr",dR:"al",dS:"ar",fD:"at",cI:"ah",cJ:"av",fH:"s",fN:"bh",fO:"b",fS:"w7",fU:"bd",fV:"bdt",b1:"bn",fW:"bs",b4:"cpe",f4:"cp",f6:"cpx",f7:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",ga:"ct",gd:"cptr",ge:"ctxt",gw:"fcs",d3:"focus-within",gx:"fs",gB:"g",cU:"hbh",cV:"hc",d7:"he",cW:"hf",d8:"hfp",gJ:"hv",gM:"ic",gO:"fr",ch:"lbl",gS:"iml",gT:"imlf",gU:"imlp",gV:"implw",gW:"it",g$:"i",eo:"lnk",be:"nb",eP:"notxt",he:"ol",hf:"or",aU:"oq",hk:"oh",eT:"pg",eU:"p",hl:"ppe",hy:"ui",af:"r",hB:"sb",hC:"sbx",hD:"sby",hE:"sbt",hJ:"e",hK:"cap",hM:"sev",hS:"sk",Y:"t",hZ:"tc",h_:"w8",h$:"w2",h0:"w9",h1:"tj",cD:"tja",h2:"tl",h3:"w3",h4:"w5",h5:"w4",h6:"tr",h7:"w6",h8:"w1",h9:"tun",ff:"ts",a$:"clr",ig:"u",dI:"wc",fq:"we",dJ:"wf",fr:"wfp",dK:"wrp"},rl=Qr,wr=v(function(e,r){return t(Lo,e,rl(r))}),yr=wr("className"),mr=function(e){return ze(yr(e))},g$=v(function(e,r){return{$:2,a:e,b:r}}),Sg=v(function(e,r){return{$:1,a:e,b:r}}),Ye=function(e){return{$:0,a:e}},sr=2,Cg={$:0},Wn=Cg,zg={$:0},Lg=p.fH+(" "+p.aw),Pg=p.fH+(" "+p.gB),Mg=p.fH+(" "+p.eT),Tg=p.fH+(" "+p.eU),kg=p.fH+(" "+p.af),Dg=p.fH+(" "+p.hJ),Ag=function(e){switch(e){case 0:return kg;case 1:return Lg;case 2:return Dg;case 3:return Pg;case 4:return Tg;default:return Mg}},h$=function(e){return{$:1,a:e}},Un={$:0},nl=function(e){return{$:1,a:e}},b$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return j(n,e);case 2:var a=r.a;return j(e,a);default:var n=r.a,a=r.b;return j(n,j(e,a))}}),_$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return j(t(J,function(o){return L(e,o)},a),r);case 2:var i=n.a;return j(r,t(J,function(o){return L(e,o)},i));default:var a=n.a,i=n.b;return j(t(J,function(o){return L(e,o)},a),j(r,t(J,function(o){return L(e,o)},i)))}}),vi=4,Fg=function(e){return{$:0,a:e}},Ig=function(e){return{$:1,a:e}},$e=function(e){return e>31?Ig(1<<e-32):Fg(1<<e)},w$=$e(41),y$=$e(40),x$=$e(42),S$=$e(43),ba=nn("div"),al=Hr,C$=al,Gr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Gr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Gr(i))}},Le=xs,De=function(e){return k(Le(e*255))},tl=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(De(n)+("-"+(De(a)+("-"+De(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d;return N("tfrm-"+(De(l)+("-"+(De(c)+("-"+(De(u)+("-"+(De(s)+("-"+(De(d)+("-"+(De(g)+("-"+(De(_)+("-"+(De(w)+("-"+(De(x)+("-"+De(S))))))))))))))))))))}},vt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var l=e.a;return"grid-rows-"+(t(ee,"-",t(J,Gr,l.hz))+("-cols-"+(t(ee,"-",t(J,Gr,l.ak))+("-space-x-"+(Gr(l.hN.a)+("-space-y-"+Gr(l.hN.b)))))));case 9:var c=e.a;return"gp grid-pos-"+(k(c.af)+("-"+(k(c.f8)+("-"+(k(c.im)+("-"+k(c.gG)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(J,function(s){var d=vt(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return t(Ce,"",tl(o))}},Eg=v(function(e,r){var n=r;return b(ga,e,0,n)}),Bg=v(function(e,r){var n=t(oi,e,r);return!n.$}),Vg=v(function(e,r){var n=r;return t(Bg,e,n)}),z$=v(function(e,r){var n=r.a,a=r.b,i=vt(e);return t(Vg,i,n)?r:L(t(Eg,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ft=v(function(e,r){return{$:0,a:e,b:r}}),z=function(e){return"."+e},Rg=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),_n=v(function(e,r){return b(Ge,Rg(e),D,r)}),_a=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Le(r*255))+(","+k(Le(n*255))+(","+k(Le(a*255))+(","+(ae(i)+")")))))},il=function(e){return t(ee," ",t(_n,Ar,$([e.ec?N("inset"):R,N(ae(e.eQ.a)+"px"),N(ae(e.eQ.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(_a(e.b6))])))},L$=function(e){return $([t(ft,z(p.d3)+":focus-within",t(_n,Ar,$([t(Ie,function(r){return t(re,"border-color",_a(r))},e.fT),t(Ie,function(r){return t(re,"background-color",_a(r))},e.fL),t(Ie,function(r){return t(re,"box-shadow",il({a2:r.a2,b6:r.b6,ec:!1,eQ:t(Qo,rt,t(ti,rt,r.eQ)),bi:r.bi}))},e.hF),N(t(re,"outline","none"))]))),t(ft,z(p.fH)+":focus .focusable, "+(z(p.fH)+".focusable:focus, "+(".ui-slide-bar:focus + "+(z(p.fH)+" .focusable-thumb"))),t(_n,Ar,$([t(Ie,function(r){return t(re,"border-color",_a(r))},e.fT),t(Ie,function(r){return t(re,"background-color",_a(r))},e.fL),t(Ie,function(r){return t(re,"box-shadow",il({a2:r.a2,b6:r.b6,ec:!1,eQ:t(Qo,rt,t(ti,rt,r.eQ)),bi:r.bi}))},e.hF),N(t(re,"outline","none"))])))])},Wr=function(e){return nn(tu(e))},P$=v(function(e,r){return t(Lo,Dd(e),iu(r))}),ol=v(function(e,r){return{$:2,a:e,b:r}}),ll=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),dr=v(function(e,r){return{$:0,a:e,b:r}}),F=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),Og=v(function(e,r){return{$:3,a:e,b:r}}),M$=$([0,1,2,3,4,5]),Ng=v(function(e,r){return r.b?b(Ge,M,r,e):e}),tr=function(e){return b(Ge,Ng,D,e)},wa=v(function(e,r){return tr(t(J,e,r))}),jg=function(e){switch(e){case 0:return z(p.ga);case 1:return z(p.b9);case 2:return z(p.cb);case 3:return z(p.bt);case 4:return z(p.ca);default:return z(p.ax)}},fi=function(e){switch(e){case 0:return z(p.fD);case 1:return z(p.fw);case 2:return z(p.dS);case 3:return z(p.dR);case 4:return z(p.fx);default:return z(p.fy)}},mt=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(F,jg(n),i),t(O,z(p.fH),$([t(F,fi(n),o)]))])};return ll(t(wa,r,M$))},T$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(F,z(p.cU),$([t(h,"z-index","0"),t(O,z(p.fN),$([t(h,"z-index","-1")]))])),t(F,z(p.hE),$([t(O,z(p.Y),$([t(F,z(p.cW),$([t(h,"flex-grow","0")])),t(F,z(p.dJ),$([t(h,"align-self","auto !important")]))]))])),t(O,z(p.cV),$([t(h,"height","auto")])),t(O,z(p.cW),$([t(h,"flex-grow","100000")])),t(O,z(p.dJ),$([t(h,"width","100%")])),t(O,z(p.fr),$([t(h,"width","100%")])),t(O,z(p.dI),$([t(h,"align-self","flex-start")])),mt(function(e){switch(e){case 0:return L($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return L($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return L($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return L($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return L($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return L($([t(O,z(p.fH),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),Hg=function(e){var r=function(n){return $([t(O,z(p.fH),$([t(F,fi(n),e(n))]))])};return ll(t(wa,r,M$))},Gg=function(){return $([0,1,2,3,4,5])}(),Wg=$([t(dr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(dr,j(z(p.fH),j(z(p.hJ),z(p.gM))),$([t(h,"display","block"),t(F,z(p.cW),$([t(O,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(F,z(p.dJ),$([t(O,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(dr,z(p.fH)+":focus",$([t(h,"outline","none")])),t(dr,z(p.hy),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(F,j(z(p.fH),z(p.cW)),$([t(h,"height","100%"),t(O,z(p.cW),$([t(h,"height","100%")]))])),t(O,z(p.gO),$([t(F,z(p.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(dr,z(p.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(F,z(p.hJ),T$),ll(function(e){return t(J,e,Gg)}(function(e){switch(e){case 0:return t(F,z(p.fu),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(O,z(p.cW),$([t(h,"height","auto")])),t(O,z(p.dJ),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(O,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(F,z(p.fO),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(O,"*",$([t(h,"pointer-events","auto")])),t(O,z(p.cW),$([t(h,"height","auto")]))]));case 2:return t(F,z(p.hf),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(O,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(F,z(p.he),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(O,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(F,z(p.gO),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(O,"*",$([t(h,"pointer-events","auto")]))]));default:return t(F,z(p.fN),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(O,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(dr,z(p.fH),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(F,z(p.dK),$([t(h,"flex-wrap","wrap")])),t(F,z(p.eP),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(F,z(p.gd),$([t(h,"cursor","pointer")])),t(F,z(p.ge),$([t(h,"cursor","text")])),t(F,z(p.hl),$([t(h,"pointer-events","none !important")])),t(F,z(p.b4),$([t(h,"pointer-events","auto !important")])),t(F,z(p.a$),$([t(h,"opacity","0")])),t(F,z(p.aU),$([t(h,"opacity","1")])),t(F,z(j(p.gJ,p.a$))+":hover",$([t(h,"opacity","0")])),t(F,z(j(p.gJ,p.aU))+":hover",$([t(h,"opacity","1")])),t(F,z(j(p.gw,p.a$))+":focus",$([t(h,"opacity","0")])),t(F,z(j(p.gw,p.aU))+":focus",$([t(h,"opacity","1")])),t(F,z(j(p.cH,p.a$))+":active",$([t(h,"opacity","0")])),t(F,z(j(p.cH,p.aU))+":active",$([t(h,"opacity","1")])),t(F,z(p.ff),$([t(h,"transition",t(ee,", ",t(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(F,z(p.hB),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(F,z(p.hC),$([t(h,"overflow-x","auto"),t(F,z(p.af),$([t(h,"flex-shrink","1")]))])),t(F,z(p.hD),$([t(h,"overflow-y","auto"),t(F,z(p.aw),$([t(h,"flex-shrink","1")])),t(F,z(p.hJ),$([t(h,"flex-shrink","1")]))])),t(F,z(p.f4),$([t(h,"overflow","hidden")])),t(F,z(p.f6),$([t(h,"overflow-x","hidden")])),t(F,z(p.f7),$([t(h,"overflow-y","hidden")])),t(F,z(p.dI),$([t(h,"width","auto")])),t(F,z(p.b1),$([t(h,"border-width","0")])),t(F,z(p.fU),$([t(h,"border-style","dashed")])),t(F,z(p.fV),$([t(h,"border-style","dotted")])),t(F,z(p.fW),$([t(h,"border-style","solid")])),t(F,z(p.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(F,z(p.gW),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(F,z(p.hJ),T$),t(F,z(p.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(O,z(p.fH),$([t(h,"flex-basis","0%"),t(F,z(p.fq),$([t(h,"flex-basis","auto")])),t(F,z(p.eo),$([t(h,"flex-basis","auto")]))])),t(O,z(p.cW),$([t(h,"align-self","stretch !important")])),t(O,z(p.d8),$([t(h,"align-self","stretch !important")])),t(O,z(p.dJ),$([t(h,"flex-grow","100000")])),t(O,z(p.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(O,"u:first-of-type."+p.fC,$([t(h,"flex-grow","1")])),t(O,"s:first-of-type."+p.fA,$([t(h,"flex-grow","1"),t(O,z(p.fx),$([t(h,"margin-left","auto !important")]))])),t(O,"s:last-of-type."+p.fA,$([t(h,"flex-grow","1"),t(O,z(p.fx),$([t(h,"margin-right","auto !important")]))])),t(O,"s:only-of-type."+p.fA,$([t(h,"flex-grow","1"),t(O,z(p.fy),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(O,"s:last-of-type."+(p.fA+" ~ u"),$([t(h,"flex-grow","0")])),t(O,"u:first-of-type."+(p.fC+(" ~ s."+p.fA)),$([t(h,"flex-grow","0")])),mt(function(e){switch(e){case 0:return L($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return L($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return L($([t(h,"justify-content","flex-end")]),D);case 3:return L($([t(h,"justify-content","flex-start")]),D);case 4:return L($([t(h,"justify-content","center")]),D);default:return L($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(F,z(p.hM),$([t(h,"justify-content","space-between")])),t(F,z(p.ch),$([t(h,"align-items","baseline")]))])),t(F,z(p.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(O,z(p.fH),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(F,z(p.d7),$([t(h,"flex-basis","auto")]))])),t(O,z(p.cW),$([t(h,"flex-grow","100000")])),t(O,z(p.dJ),$([t(h,"width","100%")])),t(O,z(p.fr),$([t(h,"width","100%")])),t(O,z(p.dI),$([t(h,"align-self","flex-start")])),t(O,"u:first-of-type."+p.fz,$([t(h,"flex-grow","1")])),t(O,"s:first-of-type."+p.fB,$([t(h,"flex-grow","1"),t(O,z(p.fy),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(O,"s:last-of-type."+p.fB,$([t(h,"flex-grow","1"),t(O,z(p.fy),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(O,"s:only-of-type."+p.fB,$([t(h,"flex-grow","1"),t(O,z(p.fy),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(O,"s:last-of-type."+(p.fB+" ~ u"),$([t(h,"flex-grow","0")])),t(O,"u:first-of-type."+(p.fz+(" ~ s."+p.fB)),$([t(h,"flex-grow","0")])),mt(function(e){switch(e){case 0:return L($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return L($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return L($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return L($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return L($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return L($([t(h,"justify-content","center")]),D)}}),t(O,z(p.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(F,z(p.hM),$([t(h,"justify-content","space-between")]))])),t(F,z(p.gB),$([t(h,"display","-ms-grid"),t(O,".gp",$([t(O,z(p.fH),$([t(h,"width","100%")]))])),t(Og,L("display","grid"),$([L("display","grid")])),Hg(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(F,z(p.eT),$([t(h,"display","block"),t(O,z(p.fH+":first-child"),$([t(h,"margin","0 !important")])),t(O,z(p.fH+(fi(3)+(":first-child + ."+p.fH))),$([t(h,"margin","0 !important")])),t(O,z(p.fH+(fi(2)+(":first-child + ."+p.fH))),$([t(h,"margin","0 !important")])),mt(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([t(h,"float","right"),t(F,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return L(D,$([t(h,"float","left"),t(F,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),t(F,z(p.gS),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(F,z(p.gV),$([t(F,z(p.hJ),$([t(h,"flex-basis","auto")]))])),t(F,z(p.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(O,z(p.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(F,z(p.eU),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(F,z(p.cU),$([t(h,"z-index","0"),t(O,z(p.fN),$([t(h,"z-index","-1")]))])),t(ol,z(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(ol,z(p.eU),$([t(h,"display","inline"),t(F,"::after",$([t(h,"content","none")])),t(F,"::before",$([t(h,"content","none")]))])),t(ol,z(p.hJ),$([t(h,"display","inline"),t(h,"white-space","normal"),t(F,z(p.fq),$([t(h,"display","inline-block")])),t(F,z(p.gO),$([t(h,"display","flex")])),t(F,z(p.fN),$([t(h,"display","flex")])),t(F,z(p.fu),$([t(h,"display","flex")])),t(F,z(p.fO),$([t(h,"display","flex")])),t(F,z(p.hf),$([t(h,"display","flex")])),t(F,z(p.he),$([t(h,"display","flex")])),t(O,z(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(O,z(p.af),$([t(h,"display","inline")])),t(O,z(p.aw),$([t(h,"display","inline-flex")])),t(O,z(p.gB),$([t(h,"display","inline-grid")])),mt(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([t(h,"float","right")]));case 3:return L(D,$([t(h,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),t(F,".hidden",$([t(h,"display","none")])),t(F,z(p.h8),$([t(h,"font-weight","100")])),t(F,z(p.h$),$([t(h,"font-weight","200")])),t(F,z(p.h3),$([t(h,"font-weight","300")])),t(F,z(p.h5),$([t(h,"font-weight","400")])),t(F,z(p.h4),$([t(h,"font-weight","500")])),t(F,z(p.h7),$([t(h,"font-weight","600")])),t(F,z(p.fS),$([t(h,"font-weight","700")])),t(F,z(p.h_),$([t(h,"font-weight","800")])),t(F,z(p.h0),$([t(h,"font-weight","900")])),t(F,z(p.g$),$([t(h,"font-style","italic")])),t(F,z(p.hS),$([t(h,"text-decoration","line-through")])),t(F,z(p.ig),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(F,j(z(p.ig),z(p.hS)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(F,z(p.h9),$([t(h,"font-style","normal")])),t(F,z(p.h1),$([t(h,"text-align","justify")])),t(F,z(p.cD),$([t(h,"text-align","justify-all")])),t(F,z(p.hZ),$([t(h,"text-align","center")])),t(F,z(p.h6),$([t(h,"text-align","right")])),t(F,z(p.h2),$([t(h,"text-align","left")])),t(F,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),wn=function(e){return $([t(dr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(dr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},Ug=tr($([t(J,function(e){return t(dr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(Nr,0,6)),t(J,function(e){return t(dr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(Nr,8,32)),t(J,function(e){return t(dr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(Nr,0,24)),$([t(dr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(dr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),wn("zero"),wn("onum"),wn("liga"),wn("dlig"),wn("ordn"),wn("tnum"),wn("afrc"),wn("frac")])),Jg=`
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

`))),qg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Yg=`
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
`,Xg=`
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
`,Zg=`
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
`,Kg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(z(p.fH)+(z(p.af)+(" > "+(z(p.fH)+(" { flex-basis: auto !important; } "+(z(p.fH)+(z(p.af)+(" > "+(z(p.fH)+(z(p.b8)+(" { flex-basis: auto !important; }}"+(qg+(Yg+(Zg+(Xg+Jg))))))))))))))),ya=function(e){return t(ee,"",e)},xa=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),Sa=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return ke(o,{aE:t(M,L(l,c),o.aE)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return ke(o,{G:t(M,{b5:`
}`,G:D,aE:d,ag:"@supports ("+(m+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return ke(o,{G:t(M,t(Sa,t(xa,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,w=i.b;return ke(o,{G:t(M,t(Sa,t(xa,n.ag+(" > "+_),""),w),o.G)});case 2:var _=i.a,w=i.b;return ke(o,{G:t(M,t(Sa,t(xa,n.ag+(" "+_),""),w),o.G)});case 4:var x=i.a,S=i.b;return ke(o,{G:t(M,t(Sa,t(xa,j(n.ag,x),""),S),o.G)});default:var y=i.a;return ke(o,{G:t(M,t(Sa,t(xa,n.ag,""),y),o.G)})}});return b(Ge,a,n,r)}),Qg=function(e){var r=function(i){return ya(t(J,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},a=function(i){var o=i;return j(n(o),ya(t(J,a,o.G)))};return ya(t(J,a,b(Ge,v(function(i,o){var l=i.a,c=i.b;return t(M,t(Sa,t(xa,l,""),c),o)}),D,e)))},k$=j(Kg,Qg(j(Wg,Ug))),yn=zo,D$=function(e){var r=e.eN;switch(r){case 0:return b(Wr,"div",D,$([b(Wr,"style",D,$([yn(k$)]))]));case 1:return yn("");default:return b(Wr,"elm-ui-static-rules",$([t(P$,"rules",rl(k$))]),D)}},eh=v(function(e,r){return Qr(b(Fe,ld(e),td(),r))}),rh=function(e){return Qr(b(Fe,v(function(r,n){var a=r.a,i=r.b;return b(od,a,i,n)}),id(),e))},nh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.ha;return'"'+(r+'"')}},ah=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},th=function(e){if(e.$===5){var r=e.a;return t(ot,ah,r.fk)}else return!1},Ca=v(function(e,r){return le(e,r)<0?e:r}),st=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Pe=U(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Fe,st(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gJ;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Fe,st(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Fe,st(!1),"",a)+`
}`))])}case 0:var l=b(Fe,st(!1),"",a);return $([n+("-fs:focus {"+(l+`
}`)),"."+(p.fH+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(z(p.fH)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(b(Fe,st(!1),"",a)+`
}`))])}}),ih=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},oh=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(J,ih,r.fk)))}else return R},lh=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d,y="translate3d("+(ae(l)+("px, "+(ae(c)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),I="rotate3d("+(ae(_)+(", "+(ae(w)+(", "+(ae(x)+(", "+(ae(S)+"rad)")))))));return N(y+(" "+(C+(" "+I))))}},cl=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(Pe,e,n,a,i);case 13:var o=r.a,l=r.b;return P(Pe,e,n,"."+o,$([t(re,"box-shadow",l)]));case 12:var o=r.a,c=r.b,u=t(qe,0,t(Ca,1,1-c));return P(Pe,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return P(Pe,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,s=r.b,d=t(ee,", ",t(_n,oh,s)),g=$([t(re,"font-family",t(ee,", ",t(J,nh,s))),t(re,"font-feature-settings",d),t(re,"font-variant",t(ot,th,s)?"small-caps":"normal")]);return P(Pe,e,n,"."+o,g);case 3:var f=r.a,l=r.b,_=r.c;return P(Pe,e,n,"."+f,$([t(re,l,_)]));case 4:var f=r.a,l=r.b,w=r.c;return P(Pe,e,n,"."+f,$([t(re,l,_a(w))]));case 5:var x=r.a,S=r.b,y=r.c,C=k(y)+"px",I=k(S)+"px",q="."+p.af,Z="."+(p.dK+q),G="."+p.dS,Y="."+p.eU,X="."+p.eT,V="."+p.dR,ne=ae(y/2)+"px",fe=ae(S/2)+"px",we="."+p.aw,f="."+x,me="."+p.fH;return tr($([P(Pe,e,n,f+(q+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",I)])),P(Pe,e,n,f+(Z+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),P(Pe,e,n,f+(we+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,f+(X+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,f+(X+(" > "+V)),$([t(re,"margin-right",I)])),P(Pe,e,n,f+(X+(" > "+G)),$([t(re,"margin-left",I)])),P(Pe,e,n,j(f,Y),$([t(re,"line-height","calc(1em + "+(k(y)+"px)"))])),P(Pe,e,n,"textarea"+(me+f),$([t(re,"line-height","calc(1em + "+(k(y)+"px)")),t(re,"height","calc(100% + "+(k(y)+"px)"))])),P(Pe,e,n,f+(Y+(" > "+V)),$([t(re,"margin-right",I)])),P(Pe,e,n,f+(Y+(" > "+G)),$([t(re,"margin-left",I)])),P(Pe,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(y/2|0))+"px")])),P(Pe,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(y/2|0))+"px")]))]));case 7:var x=r.a,se=r.b,G=r.c,xe=r.d,V=r.e,f="."+x;return P(Pe,e,n,f,$([t(re,"padding",ae(se)+("px "+(ae(G)+("px "+(ae(xe)+("px "+(ae(V)+"px")))))))]));case 6:var x=r.a,se=r.b,G=r.c,xe=r.d,V=r.e,f="."+x;return P(Pe,e,n,f,$([t(re,"border-width",k(se)+("px "+(k(G)+("px "+(k(xe)+("px "+(k(V)+"px")))))))]));case 8:var de=r.a,Ae=T(function(He,Ua,Kr){e:for(;;)switch(Kr.$){case 0:var es=Kr.a;return k(es)+"px";case 1:var Pr=L(He,Ua);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,"max-content";Pr.a;var Vn=Pr.b.a;return"minmax(max-content, "+(k(Vn)+"px)")}else if(Pr.b.$===1){var Rn=Pr.a.a;return Pr.b,"minmax("+(k(Rn)+"px, max-content)")}else{var Rn=Pr.a.a,Vn=Pr.b.a;return"minmax("+(k(Rn)+("px, "+(k(Vn)+"px)")))}case 2:var Gc=Kr.a,Mr=L(He,Ua);if(Mr.a.$===1){if(Mr.b.$===1)return Mr.a,Mr.b,k(Gc)+"fr";Mr.a;var Vn=Mr.b.a;return"minmax(max-content, "+(k(Vn)+"px)")}else if(Mr.b.$===1){var Rn=Mr.a.a;return Mr.b,"minmax("+(k(Rn)+("px, "+(k(Gc)+"frfr)")))}else{var Rn=Mr.a.a,Vn=Mr.b.a;return"minmax("+(k(Rn)+("px, "+(k(Vn)+"px)")))}case 3:var uo=Kr.a,$o=Kr.b,vo=N(uo),fo=Ua,mo=$o;He=vo,Ua=fo,Kr=mo;continue e;default:var uo=Kr.a,$o=Kr.b,vo=He,fo=N(uo),mo=$o;He=vo,Ua=fo,Kr=mo;continue e}}),Te=function(He){return b(Ae,R,R,He)};Te(de.hN.a);var Xe=Te(de.hN.b),Bn=function(He){return"grid-template-rows: "+(He+";")}(t(ee," ",t(J,Te,de.hz))),Ga=function(He){return"-ms-grid-rows: "+(He+";")}(t(ee,Xe,t(J,Te,de.ak))),Xr=function(He){return"-ms-grid-columns: "+(He+";")}(t(ee,Xe,t(J,Te,de.ak))),Zr="grid-row-gap:"+(Te(de.hN.b)+";"),$a="grid-column-gap:"+(Te(de.hN.a)+";"),Nt=function(He){return"grid-template-columns: "+(He+";")}(t(ee," ",t(J,Te,de.ak))),f=".grid-rows-"+(t(ee,"-",t(J,Gr,de.hz))+("-cols-"+(t(ee,"-",t(J,Gr,de.ak))+("-space-x-"+(Gr(de.hN.a)+("-space-y-"+Gr(de.hN.b))))))),Wa=f+("{"+(Nt+(Bn+($a+(Zr+"}"))))),lo="@supports (display:grid) {"+(Wa+"}"),co=f+("{"+(Xr+(Ga+"}")));return $([co,lo]);case 9:var rr=r.a,Ym=t(ee," ",$(["-ms-grid-row: "+(k(rr.af)+";"),"-ms-grid-row-span: "+(k(rr.gG)+";"),"-ms-grid-column: "+(k(rr.f8)+";"),"-ms-grid-column-span: "+(k(rr.im)+";")])),Xm=t(ee," ",$(["grid-row: "+(k(rr.af)+(" / "+(k(rr.af+rr.gG)+";"))),"grid-column: "+(k(rr.f8)+(" / "+(k(rr.f8+rr.im)+";")))])),f=".grid-pos-"+(k(rr.af)+("-"+(k(rr.f8)+("-"+(k(rr.im)+("-"+k(rr.gG))))))),Wa=f+("{"+(Xm+"}")),lo="@supports (display:grid) {"+(Wa+"}"),co=f+("{"+(Ym+"}"));return $([co,lo]);case 11:var f=r.a,Zm=r.b,Km=function(He){return b(cl,e,He,N(f))};return t(wa,Km,Zm);default:var Er=r.a,_=lh(Er),f=tl(Er),jt=L(f,_);if(!jt.a.$&&!jt.b.$){var x=jt.a.a,Qm=jt.b.a;return P(Pe,e,n,"."+x,$([t(re,"transform",Qm)]))}else return D}}),ch=v(function(e,r){return rh(t(J,function(n){var a=b(cl,e,n,R);return L(vt(n),t(eh,rl,a))},r))}),mi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(J,n,r))+"}"))}),A$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(mi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(mi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),uh=T(function(e,r,n){var a=r.a,i=r.b,o=ue(e,n)?e:n+(" ."+e);return t(ee," ",j(b(A$,o,p.hK,i),b(A$,o,p.gx,a)))}),$h=v(function(e,r){var n=ue(e,r)?e:r+(" ."+e);return t(ee," ",$([t(mi,"."+(n+("."+(p.hK+(", "+("."+(n+(" ."+p.hK))))))),$([L("line-height","1")])),t(mi,"."+(n+("."+(p.hK+("> ."+(p.Y+(", ."+(n+(" ."+(p.hK+(" > ."+p.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),F$=T(function(e,r,n){return{gG:r/e,bi:e,fl:n}}),I$=v(function(e,r){return b(Ge,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),vh=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Fe,qe,r,n))}else return R},E$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Fe,Ca,r,n))}else return R},B$=function(e){var r=$([e.f_,e.fM,e.gi,e.g5]),n=t(Ce,e.gi,E$(r)),a=t(Ce,e.fM,E$(t(I$,function(m){return!ue(m,n)},r))),i=t(Ce,e.f_,vh(r)),o=1/(i-a),l=1-i,c=1/(i-n),u=1-i;return{f_:b(F$,o,i-a,l),d5:b(F$,c,i-n,u)}},V$=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ae(e.gG)),L("vertical-align",ae(e.fl)+"em"),L("font-size",ae(e.bi)+"em")]))},fh=function(e){return b(Fe,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fv;if(i.$===1)return n;var o=i.a;return N(L(V$(function(l){return l.d5}(B$(o))),V$(function(l){return l.f_}(B$(o)))))}else return n;else return n}),R,e)},mh=function(e){var r=function(o){if(o.$===4){var l=o.b;return N("@import url('"+(l+"');"))}else return R},n=function(o){o.a;var l=o.b,c=t(ee,`
`,t(_n,r,l));return c},a=t(J,Gu,e),i=function(o){var l=o.a,c=o.b,u=fh(c);if(u.$===1)return t(ee,"",t(J,$h(l),a));var m=u.a;return t(ee,"",t(J,t(uh,l,m),a))};return j(t(ee,`
`,t(J,n,e)),t(ee,`
`,t(J,i,e)))},sh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(L(r,n))}else return R},R$=v(function(e,r){var n=v(function(l,c){return{cz:j(c.cz,b(cl,e,l,R)),bT:function(){var u=sh(l);if(u.$===1)return c.bT;var m=u.a;return t(M,m,c.bT)}()}}),a=b(Fe,n,{cz:D,bT:D},r),i=a.bT,o=a.cz;return j(mh(i),ya(o))}),O$=v(function(e,r){var n=e.eN;switch(n){case 0:return b(Wr,"div",D,$([b(Wr,"style",D,$([yn(t(R$,e,r))]))]));case 1:return b(Wr,"div",D,$([b(Wr,"style",D,$([yn(t(R$,e,r))]))]));default:return b(Wr,"elm-ui-rules",$([t(P$,"rules",t(ch,e,r))]),D)}}),N$=U(function(e,r,n,a){var i=t(O$,r,b(Fe,z$,L(C$,L$(r.gw)),n).b);return e?t(M,L("static-stylesheet",D$(r)),t(M,L("dynamic-stylesheet",i),a)):t(M,L("dynamic-stylesheet",i),a)}),j$=U(function(e,r,n,a){var i=t(O$,r,b(Fe,z$,L(C$,L$(r.gw)),n).b);return e?t(M,D$(r),t(M,i,a)):t(M,i,a)}),ul=$e(45),dt=$e(37),H$=function(e){return zd(tu(e))},dh=nn("p"),ir=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return ue(o&a,o)}else{var i=e.a;return ue(i&n,i)}}),G$=nn("s"),W$=nn("u"),$l=$e(44),pt=$e(39),si=vr(function(e,r,n,a,i,o){var l=v(function(u,m){if(a.$===1){var s=a.a;return b(H$,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return P(N$,!1,g,f,s);default:var g=i.a,f=i.b;return P(N$,!0,g,f,s)}}())}else{var d=a.a;return t(function(){switch(u){case"div":return ba;case"p":return dh;default:return Wr(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return P(j$,!1,g,f,d);default:var g=i.a,f=i.b;return P(j$,!0,g,f,d)}}())}}),c=function(){switch(r.$){case 0:return t(l,"div",n);case 1:var u=r.a;return t(l,u,n);default:var u=r.a,m=r.b;return b(Wr,u,n,$([t(l,m,$([yr(p.fH+(" "+p.hJ))]))]))}}();switch(o){case 0:return t(ir,pt,e)&&!t(ir,$l,e)?c:t(ir,y$,e)?t(W$,$([yr(t(ee," ",$([p.fH,p.hJ,p.b8,p.ax,p.fC])))]),$([c])):t(ir,x$,e)?t(G$,$([yr(t(ee," ",$([p.fH,p.hJ,p.b8,p.ax,p.fA])))]),$([c])):c;case 1:return t(ir,dt,e)&&!t(ir,ul,e)?c:t(ir,S$,e)?t(G$,$([yr(t(ee," ",$([p.fH,p.hJ,p.b8,p.fB])))]),$([c])):t(ir,w$,e)?t(W$,$([yr(t(ee," ",$([p.fH,p.hJ,p.b8,p.fz])))]),$([c])):c;default:return c}}),xn=function(e){return!e.b},vl=yn,ph=p.fH+(" "+(p.Y+(" "+(p.dI+(" "+p.cV))))),gt=function(e){return t(ba,$([yr(ph)]),$([vl(e)]))},gh=p.fH+(" "+(p.Y+(" "+(p.dJ+(" "+p.cW))))),U$=function(e){return t(ba,$([yr(gh)]),$([vl(e)]))},hh=T(function(e,r,n){var a=v(function(_,w){var x=_.a,S=_.b,y=w.a,C=w.b;switch(S.$){case 0:var I=S.a;return ue(e,vi),L(t(M,L(x,I(e)),y),C);case 1:var q=S.a;return ue(e,vi),L(t(M,L(x,t(q.gK,Un,e)),y),xn(C)?q.hT:j(q.hT,C));case 2:var Z=S.a;return L(t(M,L(x,ue(e,sr)?U$(Z):gt(Z)),y),C);default:return L(y,C)}}),i=v(function(_,w){var x=w.a,S=w.b;switch(_.$){case 0:var y=_.a;return ue(e,vi),L(t(M,y(e),x),S);case 1:var C=_.a;return ue(e,vi),L(t(M,t(C.gK,Un,e),x),xn(S)?C.hT:j(C.hT,S));case 2:var I=_.a;return L(t(M,ue(e,sr)?U$(I):gt(I),x),S);default:return L(x,S)}});if(r.$===1){var o=r.a,l=b(Ge,a,L(D,D),o),c=l.a,u=l.b,m=xn(u)?n.hT:j(n.hT,u);if(m.b){var s=m;return nl({gK:P(si,n.aR,n.aT,n.aJ,h$(b(_$,"nearby-element-pls",c,n.aM))),hT:s})}else return ut(A(si,n.aR,n.aT,n.aJ,h$(b(_$,"nearby-element-pls",c,n.aM)),Un))}else{var d=r.a,g=b(Ge,i,L(D,D),d),f=g.a,u=g.b,m=xn(u)?n.hT:j(n.hT,u);if(m.b){var s=m;return nl({gK:P(si,n.aR,n.aT,n.aJ,Ye(t(b$,f,n.aM))),hT:s})}else return ut(A(si,n.aR,n.aT,n.aJ,Ye(t(b$,f,n.aM)),Un))}}),or=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),bh=function(e){return{$:10,a:e}},di=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(di,n,o|a)}else{var i=e.a;return t(di,i|n,a)}}),J$=function(e){return{$:1,a:e}},pi=v(function(e,r){return{$:3,a:e,b:r}}),q$=function(e){return{$:2,a:e}},_h=v(function(e,r){return t(ba,$([yr(function(){switch(e){case 0:return t(ee," ",$([p.be,p.hJ,p.fu]));case 1:return t(ee," ",$([p.be,p.hJ,p.fO]));case 2:return t(ee," ",$([p.be,p.hJ,p.hf]));case 3:return t(ee," ",$([p.be,p.hJ,p.he]));case 4:return t(ee," ",$([p.be,p.hJ,p.gO]));default:return t(ee," ",$([p.be,p.hJ,p.fN]))}}())]),$([function(){switch(r.$){case 3:return yn("");case 2:var n=r.a;return gt(n);case 0:var a=r.a;return a(sr);default:var i=r.a;return t(i.gK,Un,sr)}}()]))}),wh=T(function(e,r,n){var a=t(_h,e,r);switch(n.$){case 0:return e===5?J$($([a])):q$($([a]));case 1:var i=n.a;return e===5?J$(t(M,a,i)):t(pi,i,$([a]));case 2:var o=n.a;return e===5?t(pi,$([a]),o):q$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(pi,t(M,a,i),o):t(pi,i,t(M,a,o))}}),Y$=v(function(e,r){return{$:2,a:e,b:r}}),Sn=function(e){return{$:1,a:e}},Jn=v(function(e,r){switch(r.$){case 0:return Sn(e);case 1:var n=r.a;return t(Y$,n,e);default:var a=r.a,i=r.b;return t(Y$,a,i)}}),yh=function(e){switch(e){case 0:return p.cI+(" "+p.dR);case 2:return p.cI+(" "+p.dS);default:return p.cI+(" "+p.fx)}},xh=function(e){switch(e){case 0:return p.cJ+(" "+p.fD);case 2:return p.cJ+(" "+p.fw);default:return p.cJ+(" "+p.fy)}},ht=v(function(e,r){return t(Tr,kd(e),iu(r))}),Ur=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Cn=function(e){return{$:1,a:e}},Sh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Cn(E(i,0,0));case 1:var o=r.a;return Cn(E(0,o,0));case 2:var l=r.a;return Cn(E(0,0,l));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return P(Ur,E(0,0,0),E(1,1,1),n,f);default:var n=r.a;return P(Ur,E(0,0,0),n,E(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,l=a.c;switch(r.$){case 0:var c=r.a;return Cn(E(c,o,l));case 1:var u=r.a;return Cn(E(i,u,l));case 2:var m=r.a;return Cn(E(i,o,m));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return P(Ur,a,E(1,1,1),n,f);default:var s=r.a;return P(Ur,a,s,E(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,l=a.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var c=r.a;return P(Ur,E(c,o,l),d,g,f);case 1:var u=r.a;return P(Ur,E(i,u,l),d,g,f);case 2:var m=r.a;return P(Ur,E(i,o,m),d,g,f);case 3:var _=r.a;return P(Ur,_,d,g,f);case 4:var w=r.a,x=r.b;return P(Ur,a,d,w,x);default:var S=r.a;return P(Ur,a,S,g,f)}}}),za=$e(7),X$=$e(36),Z$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(di,n|i,a|o)}),tn=t(di,0,0),fl=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return E(tn,p.d7+(" "+a),$([b(or,a,"height",n+"px")]));case 1:return E(t(oe,X$,tn),p.cV,D);case 2:var i=e.a;return i===1?E(t(oe,dt,tn),p.cW,D):E(t(oe,dt,tn),p.d8+(" height-fill-"+k(i)),$([b(or,p.fH+("."+(p.aw+(" > "+z("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,l=e.b,c="min-height-"+k(o),u=b(or,c,"min-height",k(o)+"px !important"),m=fl(l),s=m.a,d=m.b,g=m.c;return E(t(oe,ul,s),c+(" "+d),t(M,u,g));default:var f=e.a,l=e.b,c="max-height-"+k(f),u=b(or,c,"max-height",k(f)+"px"),_=fl(l),s=_.a,d=_.b,g=_.c;return E(t(oe,ul,s),c+(" "+d),t(M,u,g))}},K$=$e(38),ml=function(e){switch(e.$){case 0:var r=e.a;return E(tn,p.fq+(" width-px-"+k(r)),$([b(or,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return E(t(oe,K$,tn),p.dI,D);case 2:var n=e.a;return n===1?E(t(oe,pt,tn),p.dJ,D):E(t(oe,pt,tn),p.fr+(" width-fill-"+k(n)),$([b(or,p.fH+("."+(p.af+(" > "+z("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),l=b(or,o,"min-width",k(a)+"px"),c=ml(i),u=c.a,m=c.b,s=c.c;return E(t(oe,$l,u),o+(" "+m),t(M,l,s));default:var d=e.a,i=e.b,o="max-width-"+k(d),l=b(or,o,"max-width",k(d)+"px"),g=ml(i),u=g.a,m=g.b,s=g.c;return E(t(oe,$l,u),o+(" "+m),t(M,l,s))}},gi=$e(27),Ch=v(function(e,r){if(ue(e,gi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return ue(i,l)&&ue(i,o)&&ue(i,c)&&i>=0&&i<=24;default:return!1}}),La=$e(6),Q$=$e(30),ev=$e(29),zh=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var s=c.a,d=c.b;switch(s.$){case 0:var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 3:var I=s.a,q=s.b;if(t(ir,I,n)){var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var g=q+(" "+e),f=r,_=t(oe,I,n),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 1:var Z=s.a,g=e,f=r,_=n,w=a,x=i,S=t(M,Z,o),y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 4:var I=s.a,G=s.b;if(t(ir,I,n)){var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else if(t(Ch,I,G)){var g=vt(G)+(" "+e),f=r,_=t(oe,I,n),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var g=vt(G)+(" "+e),f=r,_=t(oe,I,n),w=a,x=t(M,G,i),S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 10:var I=s.a,Y=s.b,g=e,f=r,_=t(oe,I,n),w=t(Sh,a,Y),x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 7:var X=s.a;if(t(ir,La,n)){var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else switch(X.$){case 0:var V=X.a,g=p.fq+(" width-px-"+k(V))+(" "+e),f=r,_=t(oe,La,n),w=a,x=t(M,b(or,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=e+(" "+p.dI),f=r,_=t(oe,K$,t(oe,La,n)),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=X.a;if(ne===1){var g=e+(" "+p.dJ),f=r,_=t(oe,pt,t(oe,La,n)),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var g=e+(" "+(p.fr+(" width-fill-"+k(ne)))),f=r,_=t(oe,pt,t(oe,La,n)),w=a,x=t(M,b(or,p.fH+("."+(p.af+(" > "+z("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}default:var fe=ml(X),we=fe.a,me=fe.b,Zr=fe.c,g=e+(" "+me),f=r,_=t(Z$,we,t(oe,La,n)),w=a,x=j(Zr,i),S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 8:var se=s.a;if(t(ir,za,n)){var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else switch(se.$){case 0:var V=se.a,xe=k(V)+"px",de="height-px-"+xe,g=p.d7+(" "+(de+(" "+e))),f=r,_=t(oe,za,n),w=a,x=t(M,b(or,de,"height ",xe),i),S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=p.cV+(" "+e),f=r,_=t(oe,X$,t(oe,za,n)),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.cW+(" "+e),f=r,_=t(oe,dt,t(oe,za,n)),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var g=e+(" "+(p.d8+(" height-fill-"+k(ne)))),f=r,_=t(oe,dt,t(oe,za,n)),w=a,x=t(M,b(or,p.fH+("."+(p.aw+(" > "+z("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}default:var Ae=fl(se),we=Ae.a,me=Ae.b,Zr=Ae.c,g=e+(" "+me),f=r,_=t(Z$,we,t(oe,za,n)),w=a,x=j(Zr,i),S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 2:var Te=s.a;switch(Te.$){case 0:var g=e,f=t(Jn,"main",r),_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=e,f=t(Jn,"nav",r),_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 2:var g=e,f=t(Jn,"footer",r),_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 3:var g=e,f=t(Jn,"aside",r),_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 4:var Xe=Te.a;if(Xe<=1){var g=e,f=t(Jn,"h1",r),_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else if(Xe<7){var g=e,f=t(Jn,"h"+k(Xe),r),_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var g=e,f=t(Jn,"h6",r),_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 9:var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 8:var g=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"role","button"),o),y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 5:var Bn=Te.a,g=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"aria-label",Bn),o),y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 6:var g=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"aria-live","polite"),o),y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;default:var g=e,f=r,_=n,w=a,x=i,S=t(M,t(ht,"aria-live","assertive"),o),y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}case 9:var Ga=s.a,Xr=s.b,Zr=function(){switch(Xr.$){case 3:return i;case 2:return Xr.a,i;case 0:return Xr.a,i;default:var Wa=Xr.a;return j(i,Wa.hT)}}(),g=e,f=r,_=n,w=a,x=Zr,S=o,y=b(wh,Ga,Xr,l),C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e;case 6:var $a=s.a;if(t(ir,Q$,n)){var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var g=yh($a)+(" "+e),f=r,_=function(Er){switch($a){case 1:return t(oe,x$,Er);case 2:return t(oe,y$,Er);default:return Er}}(t(oe,Q$,n)),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}default:var Nt=s.a;if(t(ir,ev,n)){var g=e,f=r,_=n,w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}else{var g=xh(Nt)+(" "+e),f=r,_=function(Er){switch(Nt){case 1:return t(oe,S$,Er);case 2:return t(oe,w$,Er);default:return Er}}(t(oe,ev,n)),w=a,x=i,S=o,y=l,C=d;e=g,r=f,n=_,a=w,i=x,o=S,l=y,c=C;continue e}}}else{var u=tl(a);if(u.$===1)return{aJ:t(M,yr(e),o),aM:l,aR:n,aT:r,hT:i};var m=u.a;return{aJ:t(M,yr(e+(" "+m)),o),aM:l,aR:n,aT:r,hT:t(M,bh(a),i)}}}),Lh={$:0},Ph=Lh,lr=U(function(e,r,n,a){return b(hh,e,a,Ja(zh,Ag(e),r,tn,Ph,D,D,zg,nr(n)))}),on=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mh={fL:R,fT:R,hF:N({a2:0,b6:P(on,155/255,203/255,1,1),eQ:L(0,0),bi:3})},Th=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,l=i.gJ;return l.$===1?ke(i,{gJ:N(o)}):i;case 1:var c=a.a,u=i.gw;return u.$===1?ke(i,{gw:N(c)}):i;default:var m=a.a,s=i.eN;return s.$===1?ke(i,{eN:N(m)}):i}}),n=function(a){return{gw:function(){var i=a.gw;if(i.$===1)return Mh;var o=i.a;return o}(),gJ:function(){var i=a.gJ;if(i.$===1)return 1;var o=i.a;return o}(),eN:function(){var i=a.eN;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ge,r,{gw:R,gJ:R,eN:R},e))},kh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(sr);case 1:var a=r.a.hT,n=r.a.gK;return t(n,e(a),sr);case 2:var i=r.a;return gt(i);default:return gt("")}}),Dh=T(function(e,r,n){var a=Th(e),i=function(){var o=a.eN;return o===1?g$(a):Sg(a)}();return t(kh,i,P(lr,sr,Wn,r,Ye($([n]))))}),bt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),rv=v(function(e,r){return{$:1,a:e,b:r}}),nv=function(e){return{$:2,a:e}},Ah={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),sl=function(e){return{$:3,a:e}},av=$e(8),tv=$e(14),iv=$e(5),ov=$e(4),Pa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(a)+("-"+De(i))))))},hi=Es,dl=Is,lv=v(function(e,r){return j(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",dl(hi(n)));case 4:var n=e.a;return e.b,t(ee,"-",dl(hi(n)));default:var n=e.a.ha;return t(ee,"-",dl(hi(n)))}}())}),Fh=function(){var e=$([sl("Open Sans"),sl("Helvetica"),sl("Verdana"),Ah]);return $([t(ge,av,b(bt,"bg-"+Pa(P(on,1,1,1,0)),"background-color",P(on,1,1,1,0))),t(ge,tv,b(bt,"fc-"+Pa(P(on,0,0,0,1)),"color",P(on,0,0,0,1))),t(ge,ov,nv(20)),t(ge,iv,t(rv,b(Fe,lv,"font-",e),e))])}(),Ih=T(function(e,r,n){var a=e.hj;return b(Dh,a,t(M,mr(t(ee," ",$([p.hy,p.fH,p.hJ]))),j(Fh,r)),n)}),cv={$:3},uv=function(e){return{$:2,a:e}},pl=Pd,$v=v(function(e,r){switch(r.$){case 1:var n=r.a;return nl({gK:v(function(o,l){return t(pl,e,t(n.gK,o,l))}),hT:n.hT});case 0:var a=r.a;return ut(t($t,pl(e),a));case 2:var i=r.a;return uv(i);default:return cv}}),gl=$v,Eh=pl,Bh=function(e){return{$:0,a:e}},Se=Bh,Vh=Td,pr=Vh,vv={$:1},bi=function(e){return{$:5,a:e}},fv=bi(0),Fr=T(function(e,r,n){return P(on,e/255,r/255,n/255,1)}),mv=b(Fr,0,0,0),Rh=Tr("d"),Oh=Tr("fill"),Nh=Tr("height"),sv=nu("http://www.w3.org/2000/svg"),jh=sv("path"),Hh=sv("svg"),Gh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fE:i,fP:a,gz:n,hs:r}},Wh=function(e){var r=Gh(e);return"rgba("+(k(Le(r.hs*255))+(","+k(Le(r.gz*255))+(","+k(Le(r.fP*255))+(","+ae(r.fE)+")"))))},Uh=Tr("viewBox"),Jh=Tr("width"),Ma=T(function(e,r,n){return t(Hh,$([Uh("0 0 100 100"),Jh(k(e)),Nh(k(e))]),$([t(jh,$([Rh(n),Oh(Wh(r))]),D)]))}),qh={$:1},cr=qh,dv=function(e){return{$:7,a:e}},Q=dv,he=v(function(e,r){return P(lr,sr,Wn,t(M,Q(cr),t(M,pe(cr),e)),Ye($([r])))}),pv=function(e){return{$:2,a:e}},ve=pv(1),qn={gl:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gy:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gF:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hm:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hn:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hr:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hL:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",$8:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ii:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",ft:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ta={cZ:260,bE:54},ln=function(e){return t(ge,av,b(bt,"bg-"+Pa(e),"background-color",e))},Yh=$e(28),zn=function(e){return t(ge,Yh,b(bt,"bc-"+Pa(e),"border-color",e))},_i=1,xr=v(function(e,r){return P(lr,_i,Wn,t(M,mr(p.ga+(" "+p.bt)),t(M,pe(cr),t(M,Q(cr),e))),Ye(r))}),Xh=b(Fr,83,83,83),gv=U(function(e,r,n,a){return P(on,e/255,r/255,n/255,a)}),wi=P(gv,56,56,56,.25),Oe=cv,_t=Ve(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),wt=$e(2),Yn=function(e){var r=e;return t(ge,wt,A(_t,"p-"+k(e),r,r,r,r))},hv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),bv=$e(3),_v=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Ln=function(e){return t(ge,bv,b(hv,t(_v,e,e),e,e))},Zh=P(gv,0,0,0,0),Kh=function(e){return{$:4,a:e}},hl=0,Pn=v(function(e,r){return P(lr,hl,Wn,t(M,mr(p.bt+(" "+p.ax)),t(M,Q(cr),t(M,pe(cr),e))),Ye(r))}),Qh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gK(t(g$,{gw:{fL:R,fT:R,hF:R},gJ:1,eN:0},n.hT));case 2:var a=e.a;return $i(yn(a));default:return $i(yn(""))}},e3=v(function(e,r){return Qh(e(r))}),r3=Md,n3=v(function(e,r){return ut(b(r3,e3,e,r))}),Mn=function(e){return t(ge,tv,b(bt,"fc-"+Pa(e),"color",e))},bl=b(Fr,195,195,195),Tn=v(function(e,r){return{$:3,a:e,b:r}}),wv=$e(13),a3=t(Tn,wv,p.h5),t3=$e(20),yv=t(Tn,t3,p.hD),Xn=function(e){return t(ge,ov,nv(e))},_l=t(Tn,wv,p.fS),wl=v(function(e,r){if(r.$===-2)return Hr;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;return A(te,n,a,t(e,a,i),t(wl,e,o),t(wl,e,l))}),xv=v(function(e,r){if(ue(e,r)){var n=e;return t(ge,wt,A(_t,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,wt,A(_t,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),kn=function(e){return uv(e)},i3=function(e){return b(Eo,T(function(r,n,a){return t(M,n,a)}),D,e)},o3=v(function(e,r){return{$:3,a:e,b:r}}),l3=v(function(e,r){return{$:2,a:e,b:r}}),c3=v(function(e,r){return{$:0,a:e,b:r}}),u3=v(function(e,r){return{$:1,a:e,b:r}}),yt=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$3=P(yt,0/255,0/255,0/255,1),yi=function(e){return{$:6,a:e}},v3=yi(0),xi=function(e){return{$:2,a:e}},f3={$:6},Sv=xi(f3),Cv=T(function(e,r,n){if(r.$===1)return r.a,P(lr,_i,Sn("label"),e,Ye($([n])));var a=r.a,i=r.b,o=r.c,l=P(lr,sr,Wn,i,Ye($([o])));switch(a){case 2:return P(lr,_i,Sn("label"),t(M,mr(p.ch),e),Ye($([l,n])));case 3:return P(lr,_i,Sn("label"),t(M,mr(p.ch),e),Ye($([n,l])));case 0:return P(lr,hl,Sn("label"),t(M,mr(p.ch),e),Ye($([n,l])));default:return P(lr,hl,Sn("label"),t(M,mr(p.ch),e),Ye($([l,n])))}}),yl=ht,cn=bi(1),zv="Enter",m3=function(e){return{$:5,a:e}},Lv=function(e){if(e.$===1){var r=e.a;return xi(m3(r))}else return Gn},Pv=function(e){return e.$===1},s3=function(e){return{$:0,a:e}},xl=au,d3=v(function(e,r){return t(xl,e,s3(r))}),Mv=function(e){return t(d3,"click",ar(e))},p3=Js,g3=function(e){return{$:2,a:e}},h3=v(function(e,r){return t(xl,e,g3(r))}),Tv=function(e){var r=function(a){var i=e(a);if(i.$===1)return p3("No key matched");var o=i.a;return ar(o)},n=t(W,r,t(H,"key",ha));return ze(t(h3,"keydown",t(Kt,function(a){return L(a,!0)},n)))},b3=$e(21),Zn=t(Tn,b3,p.gd),kv=" ",Dv=function(e){return t(Tr,"tabIndex",k(e))},_3=t($t,ze,Dv),w3=v(function(e,r){var n=r.eh,a=r.gL,i=r.f3,o=r.bI,l=j($([Pv(n)?Gn:Ln(6),ze(Mv(o(!i))),Sv,Tv(function(c){return ue(c,zv)||ue(c,kv)?N(o(!i)):R}),_3(0),Zn,v3,Q(ve)]),e);return b(Cv,t(M,ze(t(yl,"role","checkbox")),t(M,ze(t(yl,"aria-checked",i?"true":"false")),t(M,Lv(n),l))),n,P(lr,sr,Wn,$([cn,pe(ve),Q(cr)]),Ye($([a(i)]))))}),y3=T(function(e,r,n){return j(t(lt,e-jn(n),ii(r)),n)}),Si=ss,Av=function(e){var r=function(n){return n<10?k(n):ii(i$(87+n))};return e<16?r(e):j(Av(e/16|0),r(t(Si,16,e)))},x3=t(We,Av,t(y3,2,"0")),Sl=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fE:i,fP:a,gz:n,hs:r}},S3=function(e){var r=Sl(e),n=r.hs,a=r.gz,i=r.fP;return t(ee,"",t(M,"#",t(J,t(We,Le,x3),$([n*255,a*255,i*255]))))},Cl=$e(12),Fv=t(Tn,Cl,p.hZ),zl=yi(1),Kn=ds,C3=function(e){return e*Kn/180},z3=function(e){return{$:1,a:e}},Ll=v(function(e,r){return{$:10,a:e,b:r}}),L3=$e(26),P3=function(e){return t(Ll,L3,z3(-e))},ka=T(function(e,r,n){return P(on,e,r,n,1)}),M3=on,T3=v(function(e,r){return{$:4,a:e,b:r}}),k3=$e(24),D3=function(e){return t(Ll,k3,t(T3,E(0,0,1),e))},A3=$e(17),Qn=function(e){return t(ge,A3,b(or,"br-"+k(e),"border-radius",k(e)+"px"))},F3=function(e){return ya($([e.ec?"box-inset":"box-",De(e.eQ.a)+"px",De(e.eQ.b)+"px",De(e.a2)+"px",De(e.bi)+"px",Pa(e.b6)]))},I3=$e(19),E3=function(e){var r={a2:e.a2,b6:e.b6,ec:!1,eQ:e.eQ,bi:e.bi};return t(ge,I3,b(or,F3(r),"box-shadow",il(r)))},Iv=v(function(e,r){return{$:12,a:e,b:r}}),Ev=$e(0),B3=function(e){return e?t(ge,Ev,t(Iv,"transparent",1)):t(ge,Ev,t(Iv,"visible",0))},Pl=b(ka,1,1,1),Ml=Ve(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),Ci=function(e){return t(ge,gi,A(Ml,"b-"+k(e),e,e,e,e))},V3=v(function(e,r){return t(ge,gi,A(Ml,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),xt=function(e){var r=e.b2,n=e.cE,a=e.g1,i=e.hv;return ue(n,r)&&ue(a,i)?ue(n,i)?Ci(n):t(V3,a,n):t(ge,gi,A(Ml,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},R3=function(e){return t(he,$([mr("focusable"),Q(Se(14)),pe(Se(14)),Mn(Pl),cn,Xn(9),Fv,Qn(3),zn(e?b(ka,59/255,153/255,252/255):b(ka,211/255,211/255,211/255)),E3({a2:1,b6:e?P(M3,238/255,238/255,238/255,0):b(ka,238/255,238/255,238/255),eQ:L(0,0),bi:1}),ln(e?b(ka,59/255,153/255,252/255):Pl),Ci(e?0:1),el(t(he,$([zn(Pl),pe(Se(6)),Q(Se(9)),D3(C3(-45)),zl,cn,P3(1),B3(!e),xt({b2:2,g1:2,hv:0,cE:0})]),Oe))]),Oe)},O3=wr("htmlFor"),Tl=v(function(e,r){if(r.$)return R;var n=r.a;return e(n)}),zi=v(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return e(n)}}),Bv=U(function(e,r,n,a){return{gQ:r,g6:e,hd:n,hU:a}}),N3=ap,j3=Hs,H3=v(function(e,r){if(r.$)return Qe(e);var n=r.a;return Ee(n)}),G3=np,W3=function(e){return t(G3,{f$:!1,g9:!1},e)},kl=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return R},U3=v(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return Ee(e(n))}}),J3=function(e){return{$:2,a:e}},q3=function(e){return{$:0,a:e}},Y3=function(e){return{$:1,a:e}},Dl=v(function(e,r){return jr(r)-jr(e)}),Al=T(function(e,r,n){var a=jr(n);return le(jr(e),a)<1&&le(a,jr(r))<1}),X3=v(function(e,r){var n=function(i){return le(i,e)<0?Ee(i):Qe(Y3(r))},a=b(Al,"0","9",r)?Ee(t(Dl,"0",r)):b(Al,"a","z",r)?Ee(10+t(Dl,"a",r)):b(Al,"A","Z",r)?Ee(10+t(Dl,"A",r)):Qe(q3(r));return t(zi,n,a)}),Vv=v(function(e,r){var n=sa(r);if(n.$===1)return Ee(0);var a=n.a,i=a.a,o=a.b;return t(zi,function(l){return t(zi,function(c){return Ee(l+c*e)},t(Vv,e,o))},t(X3,e,i))}),Z3=v(function(e,r){return 2<=e&&e<=36?t(Vv,e,Zo(r)):Qe(J3(e))}),K3=Z3(16),Q3=T(function(e,r,n){return P(yt,e,r,n,1)}),eb=U(function(e,r,n,a){return P(yt,e,r,n,a)}),Da=ms,rb=v(function(e,r){var n=t(Da,10,e);return Le(r*n)/n}),nb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=t$(n);if(a.b&&!a.b.b){var i=a.a;return j3($([i,i]))}else return n};return t(We,hi,t(We,function(n){return t(Ie,function(a){return b(N3,1,a,n)},W3(e))},t(We,Tl(kl),t(We,Ie(function(n){return n.hU}),t(We,Ie(_n(Ar)),t(We,H3("Parsing hex regex failed"),zi(function(n){var a=t(J,t(We,r,t(We,K3,U3(rt))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,l=o.a.a,c=o.b,u=c.a.a,m=c.b,s=m.a.a;return Ee(P(eb,i/255,l/255,u/255,t(rb,2,s/255)))}else break e;else{var i=a.a.a,d=a.b,l=d.a.a,g=d.b,u=g.a.a;return Ee(b(Q3,i/255,l/255,u/255))}else break e;return Qe("Parsing ints from hex failed")})))))))}(),ab=wr("id"),tb=nn("input"),ib=nn("label"),Rv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ob=Rv(0),lb=wr("name"),cb=function(e){return L(e,!0)},ub=function(e){return{$:1,a:e}},$b=v(function(e,r){return t(xl,e,ub(r))}),vb=v(function(e,r){return b(Ge,H,r,e)}),fb=t(vb,$(["target","value"]),ha),Ov=function(e){return t($b,"input",t(Kt,cb,t(Kt,e,fb)))},mb=t(Tn,Cl,p.h2),Nv=t(Tn,Cl,p.h6),Fl=function(e){return t(p$,5,e)},Il=function(e){return t(ge,iv,t(rv,b(Fe,lv,"ff-",e),e))},sb=b(Fr,195,195,195),jv=b(Fr,69,69,69),db=Rv(2),pb={$:2},El=pb,gb=$e(32),hb=$e(31),Hv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},bb=v(function(e,r){return t(Ce,r,b(Ge,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return N(L(i,l))}else return R;else{var i=a.a;return N(i)}}),R,e))}),Gv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},_b=$e(33),wb=wr("max"),yb=wr("min"),xb=v(function(e,r){return t(ge,bv,b(hv,t(_v,e,r),e,r))}),Sb=function(e){return t(wr,"step",e)},Wv=wr("type"),Uv=wr("value"),Aa=pv,Cb=Fd,Jv=v(function(e,r){switch(r.$){case 0:return Gn;case 2:var n=r.a;return xi(n);case 6:var a=r.a;return yi(a);case 5:var i=r.a;return bi(i);case 7:var a=r.a;return dv(a);case 8:var a=r.a;return s$(a);case 3:var a=r.a,i=r.b;return t(Tn,a,i);case 4:var o=r.a,l=r.b;return t(ge,o,l);case 9:var c=r.a,u=r.b;return t(d$,c,t($v,e,u));case 1:var m=r.a;return ze(t(Cb,e,m));default:var s=r.a,d=r.b;return t(Ll,s,d)}}),zb=T(function(e,r,n){return t(Pn,$([Q(ve),pe(t(Ce,ve,n)),cn]),$([t(he,$([Q(Aa(Le(e*1e4)))]),Oe),t(he,t(M,cn,t(J,Jv(tt),r)),Oe),t(he,$([Q(Aa(Le(ce(1-e)*1e4)))]),Oe)]))}),Lb=T(function(e,r,n){return t(xr,$([pe(ve),Q(t(Ce,ve,n)),zl]),$([t(he,$([pe(Aa(Le(ce(1-e)*1e4)))]),Oe),t(he,t(M,zl,t(J,Jv(tt),r)),Oe),t(he,$([pe(Aa(Le(e*1e4)))]),Oe)]))}),qv=v(function(e,r){var n=Gv(e),a=Hv(e),i=function(){var S=L(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var y=S.a.a.a,C=S.b.a.a;return le(C,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cF-r.cq)/(r.cp-r.cq),l=r.ia,c=l,u=Hv(c),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),s=Gv(c),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return k(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([t(re,"width",d),t(re,"height",m)]),_=t(bb,e,L(5,5)),w=_.a,x=_.b;return b(Cv,$([Pv(r.eh)?Gn:t(xb,w,x),Sv,Q(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return cr}()),pe(function(){if(a.$===1)return cr;if(a.a.$){var S=a.a;return S}else return cr}())]),r.eh,t(Pn,$([Q(t(Ce,ve,n)),pe(t(Ce,Se(20),a))]),$([P(lr,sr,Sn("input"),$([Lv(r.eh),t(ge,gb,t(ft,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,_b,t(ft,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,hb,t(ft,'input[type="range"].'+(g+"::-ms-thumb"),f)),ze(yr(g+" ui-slide-bar focusable-parent")),ze(Ov(function(S){var y=a$(S);if(y.$===1)return r.bI(0);var C=y.a;return r.bI(C)})),ze(Wv("range")),ze(Sb(function(){var S=r.cC;if(S.$===1)return"any";var y=S.a;return ae(y)}())),ze(yb(ae(r.cq))),ze(wb(ae(r.cp))),ze(Uv(ae(r.cF))),i?ze(t(yl,"orient","vertical")):Gn,Q(i?t(Ce,Se(20),a):t(Ce,ve,n)),pe(i?t(Ce,ve,n):t(Ce,Se(20),a))]),Ye(D)),t(he,t(M,Q(t(Ce,ve,n)),t(M,pe(t(Ce,Se(20),a)),j(e,$([Fl(i?b(Lb,o,t(M,mr("focusable-thumb"),c),n):b(zb,o,t(M,mr("focusable-thumb"),c),a))])))),Oe)])))}),Pb=b(ka,.5,.5,.5),Yv=Ar,Xv=function(e){var r=e.cY,n=e.cF,a=e.cq,i=e.cp,o=e.cC,l=e.bI;return t(he,$([Q(ve)]),t(qv,$([Ln(2),Fl(t(he,$([Q(ve),pe(Se(16)),cn,ln(jv),Qn(4)]),Oe))]),{eh:t(db,D,t(Pn,$([Q(ve)]),$([t(he,$([mb]),kn(r)),t(he,$([Q(ve),Nv,Il($([El]))]),kn(ae(n)))]))),cp:i,cq:a,bI:l,cC:N(o),ia:Yv($([Q(Se(12)),pe(Se(12)),Qn(4),Ci(0),zn(Pb),ln(sb)])),cF:n}))},Mb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Tb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(w3,D,{f3:n,gL:R3,eh:t(ob,D,kn(e)),bI:o3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Xv({cY:e,cp:o,cq:i,bI:c3(e),cC:.001*(o-i),cF:n});case 1:var l=r.a,i=l.a,o=l.b,n=r.b;return Xv({cY:e,cp:o,cq:i,bI:t(We,Le,u3(e)),cC:1,cF:n});default:var n=r.a;return t(he,$([Q(ve)]),bn(t(ba,D,$([t(ba,$([t(pr,"margin-bottom","6px")]),$([t(ib,$([O3(e)]),$([vl(e)]))])),t(tb,$([Wv("color"),t(pr,"width","100%"),t(pr,"height","26px"),t(pr,"padding","0px"),ab(e),lb(e),Ov(function(c){return t(l3,e,t(Mb,$3,nb(c)))}),Uv(S3(n))]),D)]))))}}),Bl=b(Fr,255,255,255),kb=function(e){return t(xr,$([Q(ve),Ln(8),t(xv,0,14),xt({b2:1,g1:0,hv:0,cE:0}),zn(wi)]),$([t(he,$([Xn(16),_l,Mn(Bl)]),kn(e.ha)),t(xr,$([Q(ve),Ln(6)]),i3(t(wl,Tb,e.aN)))]))},Db=function(e){return t(xr,$([Q(ve),pe(ve),Mn(bl),Xn(12),a3,yv]),t(J,kb,e))},Ab=n3(Db),Fb=function(e){return t(xr,$([Q(ve),pe(ve)]),$([t(Pn,$([Ln(14),Q(ve)]),D),t(gl,Kh,Ab(Hn(e).f9))]))},Ib=function(e){return{$:6,a:e}},Eb=U(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Bb=function(e){var r=e.cE,n=e.hv,a=e.b2,i=e.g1;if(ue(r,n)&&ue(r,a)&&ue(r,i)){var o=r;return t(ge,wt,A(_t,"p-"+k(r),o,o,o,o))}else return t(ge,wt,A(_t,P(Eb,r,n,a,i),r,n,a,i))},Vb=function(e){return{$:0,a:e}},Rb=function(e){return{$:1,a:e}},Ob=Rb,Nb=function(e){var r=e.b.X;return Nn(r)},Li=b(Fr,255,60,0),jb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Nn(r)+1+Nn(n)},Hb=function(e){var r=L(Nb(e),jb(e)-1),n=r.a,a=r.b;return t(he,$([Q(ve),cn]),t(qv,$([Fl(t(Pn,$([Q(ve),pe(Se(4)),cn,ln(jv),Qn(2)]),$([t(he,$([Q(Aa(n)),pe(ve),ln(Li),Qn(2)]),Oe),t(he,$([Q(Aa(a-n))]),Oe)])))]),{eh:Ob(""),cp:a,cq:0,bI:t(We,Le,Vb),cC:N(1),ia:Yv($([Q(Se(12)),pe(Se(12)),Qn(6),ln(Li)])),cF:n}))},Gb=yi(2),Pi=b(Fr,220,220,220),Wb=function(e){var r=e.a,n=function(){return r.$?$([Mn(Pi)]):$([Mn(Li)])}();return t(he,j(n,$([Xn(14),Gb,Nv,Il($([El]))])),kn(t(u$,3,Hn(e).cO)))},Ub=function(e){e.a;var r=e.b.X;return t(Ie,function(n){return Le(60/(Hn(e).cO-n))},t(Ie,t(We,Gu,function(n){return n.cO}),kl(t(e$,59,r))))},Jb=function(e){var r=Ub(e);if(r.$===1)return Oe;var n=r.a;return t(he,$([Xn(14),Mn(bl),Il($([El]))]),kn(k(n)+" FPS"))},Zv={$:1},qb={$:3},Yb={$:2},Xb={$:8},Zb=Qr,Kb=v(function(e,r){return t(Lo,e,Zb(r))}),Qb=Kb("disabled"),e1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},r1=function(e){return t(ot,e1,e)?Gn:mr("focusable")},Mi=t($t,ze,Mv),Kv=v(function(e,r){var n=r.eR,a=r.eh;return P(lr,sr,Wn,t(M,Q(cr),t(M,pe(cr),t(M,mr(p.ca+(" "+(p.ax+(" "+(p.hE+(" "+p.eP)))))),t(M,Zn,t(M,r1(e),t(M,xi(Xb),t(M,ze(Dv(0)),function(){if(n.$===1)return t(M,ze(Qb(!0)),e);var i=n.a;return t(M,Mi(i),t(M,Tv(function(o){return ue(o,zv)||ue(o,kv)?N(i):R}),e))}()))))))),Ye($([a])))}),Qv=v(function(e,r){return t(Kv,D,{eh:t(he,$([Q(Se(36)),Yn(3),Mn(r),Fv,Xn(12),_l,zn(r),Ci(1),Qn(4)]),kn("REC")),eR:N(e)})}),ef=T(function(e,r,n){return t(Kv,D,{eh:bn(b(Ma,20,n,e)),eR:N(r)})}),n1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Pn,D,$([t(he,$([Q(Se(40))]),function(){switch(r.$){case 0:return t(Qv,Zv,Li);case 1:return t(Qv,Yb,Pi);default:return Oe}}()),t(he,$([Q(Se(28))]),function(){switch(r.$){case 0:return Oe;case 1:return xn(n)?Oe:b(ef,qn.hn,qb,Pi);default:return b(ef,qn.hm,Zv,Pi)}}())]))},a1=function(e){return t(xr,$([Q(ve)]),$([Hb(e),t(Pn,$([Q(ve),Ln(14),t(xv,0,6),cn]),$([n1(e),Jb(e),Wb(e)]))]))},t1=function(e){return t(xr,$([Q(ve),Ln(14),Bb({b2:20,g1:0,hv:0,cE:0}),xt({b2:1,g1:0,hv:0,cE:0}),zn(wi)]),$([t(he,$([Xn(16),_l,Mn(bl)]),kn("Time Travel")),t(gl,Ib,a1(e))]))},i1=v(function(e,r){return t(xr,$([Hn(r).dw.im>600?ln(Xh):ln(Zh),xt({b2:0,g1:0,hv:1,cE:0}),zn(wi),Q(Se(Ta.cZ)),pe(ve)]),$([function(){return e?Oe:t(xr,$([Q(ve),pe(ve),Yn(14),Ln(14)]),$([t1(r),Fb(r)]))}()]))}),o1=function(e){return{$:3,a:e}},rf=bi(2),l1=b(Fr,232,78,50),c1=b(Fr,48,48,48),u1=function(e){return t(wr,"href",Ad(e))},$1=Tr("rel"),v1=wr("target"),nf=v(function(e,r){var n=r.fj,a=r.eh;return P(lr,sr,Sn("a"),t(M,ze(u1(n)),t(M,ze($1("noopener noreferrer")),t(M,ze(v1("_blank")),t(M,Q(cr),t(M,pe(cr),t(M,mr(p.ca+(" "+(p.ax+(" "+p.eo)))),e)))))),Ye($([a])))}),St=wr("title"),f1=b(Fr,31,161,242),m1=function(e){var r=T(function(o,l,c){var u=ue(l,e)?Bl:c1;return t(he,$([an(St(o)),Mi(o1(l)),Zn,Yn(7)]),bn(b(Ma,40,u,c)))}),n=t(xr,$([fv]),$([b(r,"Configurations",0,qn.hL)])),a=t(xr,D,$([t(nf,$([an(St("Twitter")),rf,Zn,Yn(7)]),{eh:bn(b(Ma,40,f1,qn.$8)),fj:"https://twitter.com/AzizErkalSelman"}),t(nf,$([an(St("Source Code")),rf,Zn,Yn(7)]),{eh:bn(b(Ma,40,l1,qn.gy)),fj:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(Se(Ta.bE)),Yn(4),Mi(vv),xt({b2:1,g1:0,hv:0,cE:0}),zn(wi),Zn,an(St("Activate Distraction Free Mode"))]),bn(b(Ma,46,Bl,qn.ft)));return t(xr,$([Q(Se(Ta.bE)),pe(ve),yv,ln(mv)]),$([i,n,a]))},s1=function(e){var r=t(he,$([Q(Se(Ta.bE)),fv,Yn(4),Mi(vv),Zn,an(St("Deactivate Distraction Free Mode (A)"))]),bn(b(Ma,46,mv,qn.ft)));return e.bw?r:t(Pn,$([Q(Se(Ta.bE+Ta.cZ)),pe(ve)]),$([m1(e.bp),t(i1,e.bp,e.R)]))},d1=T(function(e,r,n){var a=_g(n.R),i=Hn(n.R);return b(Ih,{hj:$([yg({fL:R,fT:R,hF:R})])},$([Q(Se(et(i.dw.im))),pe(Se(et(i.dw.gG))),an(t(pr,"-webkit-font-smoothing","antialiased")),an(t(pr,"pointer-events","none")),an(t(pr,"touch-action","none")),an(t(pr,"user-select","none")),el(t(gl,hg,t(r,i,a))),el(s1(n))]),bn(t(Eh,$i(bg),t(e,i,a))))}),p1=vr(function(e,r,n,a,i,o){var l=v(function(u,m){return L(P(fg,r,o,u,m),m$)}),c=function(u){var m=t(Uu,n,u.gX);return L({bp:0,bw:!0,R:t(mg,m,a),dH:0},m$)};return D0({gR:c,hV:gg,ih:l,ij:t(d1,e,i)})}),g1=U(function(e,r,n,a){return Ze(p1,e,r,n,a,v(function(i,o){return Oe}),T(function(i,o,l){return l}))}),h1=function(e){return{}},b1=T(function(e,r,n){return{aN:n,gZ:r,ha:e}}),_1=function(e){return b(Fe,v(function(r,n){var a=r.a,i=r.b;return b(ga,a,i,n)}),al,e)},w1=T(function(e,r,n){return b(b1,e,r,_1(n))}),af=w1,Ti=T(function(e,r,n){var a=r.a,i=r.b;return L(e,t(n$,L(a,i),n))}),y1=$([b(af,"Parameters",!0,$([b(Ti,"a",L(0,3),1)])),b(af,"Colors and light",!0,$([b(Ti,"lux",L(2,5),5),b(Ti,"intensity above",L(0,300),60),b(Ti,"intensity below",L(0,300),290)]))]),x1=v(function(e,r){return r}),un=function(e){return e},Ct=function(e){return un(Kn*(e/180))},Dn=Ss,S1=v(function(e,r){var n=e,a=r,i=a.dO-n.dO,o=a.is-n.is,l=a.io-n.io,c=t(qe,ce(l),t(qe,ce(o),ce(i)));if(c){var u=i/c,m=o/c,s=l/c,d=Dn(s*s+m*m+u*u);return N({io:s/d,is:m/d,dO:u/d})}else return R}),ki=function(e){return e},Vl=v(function(e,r){var n=e,a=r;return{io:a.is*n.dO-a.dO*n.is,is:a.dO*n.io-a.io*n.dO,dO:a.io*n.is-a.is*n.io}}),Di=function(e){var r=e,n=t(qe,ce(r.io),t(qe,ce(r.is),ce(r.dO)));if(n){var a=r.dO/n,i=r.is/n,o=r.io/n,l=Dn(o*o+i*i+a*a);return N({io:o/l,is:i/l,dO:a/l})}else return R},Ai=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dO:a.dO-n.dO}}),C1=v(function(e,r){var n=e,a=r;return a.io*n.io+a.is*n.is+a.dO*n.dO}),tf=v(function(e,r){var n=e,a=r;return le(a,n)>0}),z1=v(function(e,r){var n=e,a=r;return le(a,n)<0}),L1=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dO:a.dO-n.dO}}),P1=v(function(e,r){var n=e,a=r,i=a.io*n.io+a.is*n.is+a.dO*n.dO;return{io:n.io*i,is:n.is*i,dO:n.dO*i}}),M1=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Jr=0,of={io:0,is:0,dO:0},T1=T(function(e,r,n){return t(Tl,function(a){var i=t(L1,t(P1,a,r),r);return t(Tl,function(o){var l=t(Vl,r,e),c=t(C1,n,l),u=t(tf,Jr,c)?l:t(z1,Jr,c)?M1(l):of;return t(Ie,function(m){return E(a,o,m)},Di(u))},Di(i))},Di(e))}),k1=function(e){var r=e,n=ce(r.dO),a=ce(r.is),i=ce(r.io);if(le(i,a)<1)if(le(i,n)<1){var o=Dn(r.dO*r.dO+r.is*r.is);return{io:0,is:-r.dO/o,dO:r.is/o}}else{var o=Dn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dO:0}}else if(le(a,n)<1){var o=Dn(r.dO*r.dO+r.io*r.io);return{io:r.dO/o,is:0,dO:-r.io/o}}else{var o=Dn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dO:0}}},Rl=function(e){var r=k1(e),n=r,a=n,i=e,o=i,l={io:o.is*a.dO-o.dO*a.is,is:o.dO*a.io-o.io*a.dO,dO:o.io*a.is-o.is*a.io};return L(r,l)},Fa=function(e){var r=e;return r},Ir=function(e){return e},D1=v(function(e,r){var n=Rl(e),a=n.a,i=n.b;return Ir({df:r,dM:a,dN:i,dP:e})}),A1=function(e){var r=t(Ai,e.ba,e.d2),n=Fa(e.fi),a=t(Vl,r,n),i=b(T1,r,n,a);if(i.$){var m=Di(r);if(m.$){var d=Rl(e.fi),g=d.a,f=d.b;return Ir({df:e.d2,dM:f,dN:e.fi,dP:g})}else{var s=m.a;return t(D1,s,e.d2)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return Ir({df:e.d2,dM:u,dN:c,dP:l})}},Sr={io:0,is:0,dO:0},F1=function(e){return{$:0,a:e}},Ne=function(e){var r=e;return ce(r)},Fi=function(e){var r=e;return .5*r},I1=hs,E1=function(e){var r=e;return I1(r)},B1=function(e){var r=Fi(Ne(e.fm)),n=E1(r);return{dq:F1(n),dG:e.dG}},$n=function(e){return e},Ol=$n({io:0,is:1,dO:0}),V1=function(e){var r=e.ba,n=e.d2,a=e.fi;return B1({fm:Ct(40),dG:A1({d2:ki(n),ba:ki(r),fi:t(Ce,Ol,t(S1,Sr,ki(a)))})})},ea=ps,R1=v(function(e,r){return(r-Hu(r/e)*e)/e}),O1=function(e){return 2*Kn*e},lf=U(function(e,r,n,a){return e+(r-e)*(1+ea(O1(t(R1,n,a))))/2}),N1=function(e){return V1({d2:{io:10,is:P(lf,-20,20,20,e.cO),dO:60},ba:{io:0,is:0,dO:0},fi:{io:0,is:1,dO:0}})},Nl=function(e){return e},cf=T(function(e,r,n){return le(n,e)<0?e:le(n,r)>0?r:n}),j1=function(e){var r=e;return r},H1=function(e){var r=b(cf,1667,25e3,j1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Nl({io:n,is:a})},G1=function(e){return e},W1=function(e){return{$:0,a:e}},U1=W1,J1={$:3},q1=J1,Y1=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),X1=Y1,Z1=function(e){return{$:1,a:e}},K1=Z1,Q1=function(e){return t(Tr,"height",k(e))},e_=H$,r_=function(e){return{$:2,a:e}},n_=r_,a_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(c){return Le(c*1e3)/1e3},l=function(c){return Le(c*1e4)/100};return ya($(["rgba(",ae(l(r)),"%,",ae(l(n)),"%,",ae(l(a)),"%,",ae(o(i)),")"]))},t_=v(function(e,r){switch(r.$){case 0:return t(Tp,e,r);case 1:return t(kp,e,r);case 2:return t(Dp,e,r);case 3:return t(Ap,e,r);case 4:return t(Fp,e,r);default:return t(Ip,e,r)}}),i_=v(function(e,r){switch(r.$){case 0:return t(op,e,r);case 1:return t(lp,e,r);case 2:return t(cp,e,r);case 3:return t(up,e,r);case 4:return t($p,e,r);case 5:return t(vp,e,r);case 6:return t(fp,e,r);case 7:return t(mp,e,r);default:return sp(e)}}),o_=T(function(e,r,n){return b(Mp,e,r,n)}),uf=function(e){var r=e;return r},Ia=Up,jl=P(Ia,1,1,1,1),qr=T(function(e,r,n){return t(J,function(a){return t(a,r,n)},e)}),l_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),c_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(l_,n*a/i,n,n*(1-a-i)/i)}),zt=Op,u_=function(e){var r=e.a,n=e.b,a=e.c;return b(zt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ii=v(function(e,r){return u_(t(c_,e,r))}),$f=v(function(e,r){return{ef:ue(e.ef,r.ef),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cA,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cA,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cA,cA:e.cA*r.cA}}),Yr=Kp,$_=function(e){return Yr({ep:e.t,eq:e.w,er:e.z,es:e.K,et:e.u,eu:e.x,ev:e.A,ew:e.L,ex:e.v,ey:e.y,ez:e.B,eA:e.M,eB:0,eC:0,eD:0,eE:1})},Hl=Ve(function(e,r,n,a,i){var o=a.ef?1:-1,l=P(Ia,a.cA,a.cA,a.cA,o);return Ze(i,e,l,$_(a),a.ef,r,n)}),vf=vr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,m=r,s=n,d=t($f,l,a),g=c,f=o;e=u,r=m,n=s,a=d,i=g,o=f;continue e;case 1:var _=i.b,w=t(M,A(Hl,e,r,n,a,_),o.P);return{P:w,_:o._,hG:o.hG};case 3:var x=i.b,S=t(M,A(Hl,e,r,n,a,x),o._);return{P:o.P,_:S,hG:o.hG};case 2:var y=i.a,C=t(M,A(Hl,e,r,n,a,y),o.hG);return{P:o.P,_:o._,hG:C};default:var I=i.a;return b(Fe,P(vf,e,r,n,a),o,I)}}),v_=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ff=v_,Gl=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),f_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Gl,518,r,n,a)},m_=v(function(e,r){return{$:6,a:e,b:r}}),s_=m_,mf=$([f_({ab:1,ac:0,ai:!1}),P(ff,!1,!1,!1,!1),t(s_,0,1)]),Ea=519,Wl=8,sf=15,Ba=7681,d_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Me=ip,p_=v(function(e,r){return{$:0,a:e,b:r}}),g_=p_({d_:1,eb:0,eN:5}),gr=Vp,h_=g_($([{e_:t(gr,-1,-1)},{e_:t(gr,1,-1)},{e_:t(gr,-1,1)},{e_:t(gr,1,1)}])),b_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e_"},uniforms:{}},__=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m,k:s}}}}}}}}}}}},Ul=T(function(e,r,n){var a=e.dr,i=e.c6,o=e.dL,l=v(function(m,s){var d=m;return s(d)}),c=v(function(m,s){var d=m;return s(d)}),u=function(m){return t(We,l(m.bO),t(We,c(m.bz),t(We,c(m.bX),c(m.bY))))};return t(u,n,t(u,r,b(__,a,i,o)))}),Jl=function(e){return b(Ul,{c6:e.c6,dr:e.dr,dL:e.dL},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},ql=function(e){return A(Me,$([Jl(e),P(ff,!1,!1,!1,!1)]),b_,d_,h_,{})},w_=ql({bz:Ba,c6:0,dr:Wl,bO:Ea,dL:sf,bX:Ba,bY:Ba}),y_=516,df=5386,er=7680,x_=function(e){return t(Da,2,e+4)},pf=function(e){return ql({bz:er,c6:sf,dr:Wl,bO:y_,dL:x_(e),bX:df,bY:df})},S_=T(function(e,r,n){return tr($([b(qr,e,n,mf),$([pf(r),w_])]))}),C_=v(function(e,r){return tr(t(Bu,S_(e),r))}),z_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Gl,513,r,n,a)},L_=z_({ab:1,ac:0,ai:!0}),P_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m}}}}}}}}}}},M_=function(e){var r=e.cx,n=e.ce,a=e.b0,i=e.bZ,o=e.b6,l=e.fE,c=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,w=m.c;return P_(s)(d)(g)(f)(_)(w)(r)(n)(a)(i)});return t(c,o,l)},T_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),gf=v(function(e,r){var n=e,a=r;return b(T_,32774,n,a)}),k_=1,hf=771,D_=770,Yl=M_({bZ:0,fE:t(gf,k_,hf),b0:0,b6:t(gf,D_,hf),ce:0,cx:0}),Va=$([L_,Yl]),A_=function(e){var r=e;return r.eG},F_=function(e){var r=e;return r.eH},bf=function(e){var r=e;return r.eI},I_=function(e){var r=e;return r.eJ},E_=function(e){var r=e;return r.eK},_f=function(e){var r=e;return r.eL},vn=v(function(e,r){var n=e,a=r;return a-n}),wf=function(e){return E(t(vn,I_(e),A_(e)),t(vn,E_(e),F_(e)),t(vn,_f(e),bf(e)))},ra=function(e){var r=e;return r.df},yf=function(e){var r=e;return ra(r)},B_=function(e){return e},V_=function(e){return Ir({df:B_({io:e.K,is:e.L,dO:e.M}),dM:$n({io:e.t,is:e.u,dO:e.v}),dN:$n({io:e.w,is:e.x,dO:e.y}),dP:$n({io:e.z,is:e.A,dO:e.B})})},Xl=v(function(e,r){var n=e,a=r,i=n.dP,o=i,l=n.dN,c=l,u=n.dM,m=u;return{io:a.io*m.io+a.is*m.is+a.dO*m.dO,is:a.io*c.io+a.is*c.is+a.dO*c.dO,dO:a.io*o.io+a.is*o.is+a.dO*o.dO}}),xf=v(function(e,r){var n=e,a=r,i=n.df,o=i,l=a.io-o.io,c=a.is-o.is,u=a.dO-o.dO,m=n.dP,s=m,d=n.dN,g=d,f=n.dM,_=f;return{io:l*_.io+c*_.is+u*_.dO,is:l*g.io+c*g.is+u*g.dO,dO:l*s.io+c*s.is+u*s.dO}}),An=function(e){var r=e;return r.dM},Fn=function(e){var r=e;return r.dN},In=function(e){var r=e;return r.dP},Sf=v(function(e,r){return{df:t(xf,e,ra(r)),dM:t(Xl,e,An(r)),dN:t(Xl,e,Fn(r)),dP:t(Xl,e,In(r))}}),Zl=T(function(e,r,n){return{io:e,is:r,dO:n}}),Ei=function(e){var r=e;return r},Be=v(function(e,r){var n=e,a=r;return t(qe,n,a)}),je=v(function(e,r){var n=e,a=r;return t(Ca,n,a)}),R_=v(function(e,r){var n=Ei(r),a=Ei(e);return{eG:t(Be,a.eG,n.eG),eH:t(Be,a.eH,n.eH),eI:t(Be,a.eI,n.eI),eJ:t(je,a.eJ,n.eJ),eK:t(je,a.eK,n.eK),eL:t(je,a.eL,n.eL)}}),Cr=function(e){var r=e;return r},O_=function(e){var r=e;return E(r.io,r.is,r.dO)},Lt=v(function(e,r){var n=e,a=r;return a+n}),N_=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Fi(Ne(a)),l=Fi(Ne(n)),c=Fi(Ne(i)),u=O_(r),m=u.a,s=u.b,d=u.c;return{eG:t(Lt,l,m),eH:t(Lt,o,s),eI:t(Lt,c,d),eJ:t(vn,l,m),eK:t(vn,o,s),eL:t(vn,c,d)}}),Cf=U(function(e,r,n,a){var i=n.f1,o=2*n.gE*r,l=2*n.gD*r,c=2*n.gC*r,u=i.dO*r,m=i.is*r,s=i.io*r,d=Cr(In(e)),g=ce(c*d.io)+ce(l*d.is)+ce(o*d.dO),f=Cr(Fn(e)),_=ce(c*f.io)+ce(l*f.is)+ce(o*f.dO),w=Cr(An(e)),x=ce(c*w.io)+ce(l*w.is)+ce(o*w.dO),S=t(N_,E(x,_,g),t(xf,e,b(Zl,s,m,u)));if(a.$)return N(S);var y=a.a;return N(t(R_,y,S))}),Kl=U(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 1:var s=i.a,d=P(Cf,e,r,s,n),l=e,c=r,u=d,m=o;e=l,r=c,n=u,a=m;continue e;case 2:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 3:var s=i.a,d=P(Cf,e,r,s,n),l=e,c=r,u=d,m=o;e=l,r=c,n=u,a=m;continue e;case 4:var g=i.a,l=e,c=r,u=P(Kl,e,r,n,g),m=o;e=l,r=c,n=u,a=m;continue e;default:var f=i.a,_=i.b,w=t(Sf,V_(f),e),x=r*f.cA,l=e,c=r,u=P(Kl,w,x,n,$([_])),m=o;e=l,r=c,n=u,a=m;continue e}}else return n}),na=Np,aa=jp,ta=Hp,zf=function(e){return{$:4,a:e}},j_=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Pt=function(e){return zf(t(j_,e,D))},H_={ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cA:1},G_=function(e){var r=e;return r},Lf=ql({bz:Ba,c6:0,dr:Wl,bO:Ea,dL:255,bX:Ba,bY:Ba}),W_=function(e){var r=e,n=t(qe,ce(r.io),t(qe,ce(r.is),ce(r.dO)));if(n){var a=r.dO/n,i=r.is/n,o=r.io/n,l=Dn(o*o+i*i+a*a);return l*n}else return Jr},hr={b0:0,f0:!1,ce:0,$7:0,cx:0,dD:0,io:0,is:0,dO:0},zr=v(function(e,r){var n=e,a=r;return Yr({ep:n.io,eq:n.cx,er:a.io,es:a.cx,et:n.is,eu:n.ce,ev:a.is,ew:a.ce,ex:n.dO,ey:n.b0,ez:a.dO,eA:a.b0,eB:n.dD,eC:n.$7,eD:a.dD,eE:a.$7})}),Mt=L({bF:t(zr,hr,hr),cl:t(zr,hr,hr),cm:t(zr,hr,hr),cn:t(zr,hr,hr)},P(Ia,0,0,0,0)),ye=v(function(e,r){var n=r;return e*n}),Pf=function(e){var r=e;return-r},Mf=514,Tf=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Gl,515,r,n,a)},kf=240,U_=$([Tf({ab:1,ac:0,ai:!0}),Jl({bz:er,c6:kf,dr:0,bO:Mf,dL:0,bX:er,bY:er}),Yl]),J_=v(function(e,r){var n=e,a=r.hb,i=r.gu,o=r.fJ,l=Ne(a),c=l,u=Ne(i),m=u,s=n.dq;if(s.$){var g=s.a;return Yo(m)?Yr({ep:2/(o*g),eq:0,er:0,es:0,et:0,eu:2/g,ev:0,ew:0,ex:0,ey:0,ez:0,eA:-1,eB:0,eC:0,eD:0,eE:1}):Yr({ep:2/(o*g),eq:0,er:0,es:0,et:0,eu:2/g,ev:0,ew:0,ex:0,ey:0,ez:-2/(m-c),eA:-(m+c)/(m-c),eB:0,eC:0,eD:0,eE:1})}else{var d=s.a;return Yo(m)?Yr({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-1,eA:-2*c,eB:0,eC:0,eD:-1,eE:0}):Yr({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-(m+c)/(m-c),eA:-2*m*c/(m-c),eB:0,eC:0,eD:-1,eE:0})}}),Bi=v(function(e,r){return(1&e>>r)==1?0:1}),q_=function(e){return $([Tf({ab:1,ac:0,ai:!0}),Jl({bz:er,c6:kf,dr:e,bO:Mf,dL:0,bX:er,bY:er}),Yl])},Y_=T(function(e,r,n){return tr(t(J,function(a){var i=a<<4,o=P(Ia,t(Bi,a,0),t(Bi,a,1),t(Bi,a,2),t(Bi,a,3));return b(qr,e,L(r,o),q_(i))},t(Nr,1,t(Da,2,n)-1)))}),En=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Ra=function(e){var r=e;return r},X_=Qp,Df=function(e){var r=e;return En(In(r))},Af=$n({io:1,is:0,dO:0}),Ql=Af,ec=Ol,rc=$n({io:0,is:0,dO:1}),Ff=rc,Z_={df:Sr,dM:Ql,dN:ec,dP:Ff},Tt=function(e){var r=e;return r},K_=function(e){var r=Tt(ra(e)),n=Cr(In(e)),a=Cr(Fn(e)),i=Cr(An(e));return Yr({ep:i.io,eq:a.io,er:n.io,es:r.io,et:i.is,eu:a.is,ev:n.is,ew:r.is,ex:i.dO,ey:a.dO,ez:n.dO,eA:r.dO,eB:0,eC:0,eD:0,eE:1})},Q_=v(function(e,r){var n=r;return K_(t(Sf,n,e))}),e2=function(e){return t(Q_,Z_,e)},r2=function(e){var r=e;return r.dG},n2=function(e){var r=e;return An(r)},a2=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dO:o}}),t2=function(e){var r=e;return Fn(r)},i2=function(e){var r=r2(e.fZ),n=Ir({df:yf(r),dM:n2(r),dN:t2(r),dP:En(Df(r))}),a=Pt(e.a8),i=a,o=P(Kl,n,1,R,$([i]));if(o.$===1)return D;var l=o.a,c=e2(r),u=t(ye,.99,t(Be,Ne(e.f5),Pf(bf(l)))),m=wf(l),s=m.a,d=m.b,g=m.c,f=W_(b(a2,s,d,g)),_=t(ye,1.01,t(Lt,f,Pf(_f(l)))),w=t(J_,e.fZ,{fJ:e.fJ,gu:_,hb:u}),x=X_(w).eE,S=x?Cr(En(Df(r))):Ra(yf(r)),y=function(){var se=e.ic;switch(se.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var xe=se.a;return L(3,xe);case 4:var xe=se.a;return L(4,xe);default:return L(5,0)}}(),C=y.a,I=y.b,q=e.gs,Z=q,G=t(Ii,Z,e.il),Y=G,X=Yr({ep:0,eq:S.io,er:na(Y),es:e.fb,et:0,eu:S.is,ev:aa(Y),ew:G_(f),ex:0,ey:S.dO,ez:ta(Y),eA:C,eB:0,eC:x,eD:0,eE:I}),V=Ze(vf,X,c,w,H_,i,{P:D,_:D,hG:D}),ne=e.g4;switch(ne.$){case 0:var fe=ne.a;return tr($([b(qr,V.P,L(fe,jl),Va),b(qr,V._,Mt,Va)]));case 1:var fe=ne.a;return tr($([b(qr,V.P,Mt,Va),$([Lf]),b(qr,V.hG,fe.bF,mf),$([pf(0)]),b(qr,V.P,L(fe,jl),U_),b(qr,V._,Mt,Va)]));default:var we=ne.a,me=ne.b;return tr($([b(qr,V.P,L(me,jl),Va),$([Lf]),t(C_,V.hG,we),b(Y_,V.P,me,Nn(we)),b(qr,V._,Mt,Va)]))}},o2=function(e){return t(Tr,"width",k(e))},l2=v(function(e,r){var n=$([K1(1),n_(0),U1(!0),P(X1,0,0,0,0)]),a=function(){var C=e.fG;switch(C.$){case 0:return E(n,"0",1);case 1:return E(t(M,q1,n),"1",1);default:var I=C.a;return E(n,"0",I)}}(),i=a.a,o=a.b,l=a.c,c=e.a4,u=c.a,m=c.b,s=uf(m),d=t(pr,"height",k(s)+"px"),g=uf(u),f=g/s,_=t(wa,function(C){return i2({fJ:f,fZ:e.fZ,f5:e.f5,a8:C.a8,gs:C.gs,g4:C.g4,fb:l,ic:C.ic,il:C.il})},r),w=t(pr,"width",k(g)+"px"),x=e.a1,S=x,y=a_(S);return b(e_,"div",$([t(pr,"padding","0px"),w,d]),$([L(o,b(o_,i,$([o2(Le(g*l)),Q1(Le(s*l)),w,d,t(pr,"display","block"),t(pr,"background-color",y)]),_))]))}),c2=function(e){return{$:2,a:e}},u2=function(e){return c2(e)},$2=function(e){return t(l2,{fG:u2(e.cS),a1:e.a1,fZ:e.fZ,f5:e.f5,a4:e.a4},$([{a8:e.a8,gs:e.gs,g4:e.g4,ic:e.ic,il:e.il}]))},If=function(e){return e},ia=function(e){return e},v2=function(e){var r=e;return r},Vi=function(e){var r=e;return v2(r.fK)},Ef=U(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),f2=U(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Bf=U(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Vf=U(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),m2=U(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),s2=U(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),d2=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),nc=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P(d2,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(Ef,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(f2,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(Bf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(s2,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(Vf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(m2,r,i,a,1);case 8:return e;case 9:return e;default:return e}},ac={$:0},p2=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var u=c.a,m=c.b,s=Ei(l(u)),d=t(je,s.eJ,e),g=t(Be,s.eG,r),f=t(je,s.eK,n),_=t(Be,s.eH,a),w=t(je,s.eL,i),x=t(Be,s.eI,o),S=l,y=m;e=d,r=g,n=f,a=_,i=w,o=x,l=S,c=y;continue e}else return{eG:r,eH:a,eI:o,eJ:e,eK:n,eL:i}}),g2=T(function(e,r,n){var a=Ei(e(r));return Ja(p2,a.eJ,a.eG,a.eK,a.eH,a.eL,a.eI,e,n)}),tc=v(function(e,r){var n=e,a=r;return le(a,n)<1}),Rf=function(e){return t(tc,e.eG,e.eJ)&&t(tc,e.eH,e.eK)&&t(tc,e.eI,e.eL)?e:{eG:t(Be,e.eJ,e.eG),eH:t(Be,e.eK,e.eH),eI:t(Be,e.eL,e.eI),eJ:t(je,e.eJ,e.eG),eK:t(je,e.eK,e.eH),eL:t(je,e.eL,e.eI)}},kt=function(e){var r=e;return r},oa=function(e){var r=e;return r.io},la=function(e){var r=e;return r.is},ca=function(e){var r=e;return r.dO},Of=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=oa(n),l=la(n),c=ca(n),u=oa(a),m=la(a),s=ca(a),d=oa(i),g=la(i),f=ca(i);return Rf({eG:t(Be,o,t(Be,u,d)),eH:t(Be,l,t(Be,m,g)),eI:t(Be,c,t(Be,s,f)),eJ:t(je,o,t(je,u,d)),eK:t(je,l,t(je,m,g)),eL:t(je,c,t(je,s,f))})},Nf=Gp,ur=function(e){return Nf(Tt(e))},jf=function(e){var r=e;return r},Ri=function(e){return Nf(jf(e))},Hf=function(e){return e},h2=v(function(e,r){var n=e,a=r,i=t(qe,ce(a.io),t(qe,ce(a.is),ce(a.dO)));if(i){var o=a.dO/i,l=a.is/i,c=a.io/i,u=Dn(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dO:n*o/u}}else return of}),b2=h2(Hf(1)),Gf=T(function(e,r,n){var a=t(Ai,r,n),i=t(Ai,e,r);return b2(t(Vl,a,i))}),_2=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=Ri(b(Gf,n,a,i));return E({q:o,e_:ur(n)},{q:o,e_:ur(a)},{q:o,e_:ur(i)})},w2=v(function(e,r){return{$:2,a:e,b:r}}),Wf=w2({d_:3,eb:0,eN:4}),y2=function(e){if(e.b){var r=e.a,n=e.b,a=Wf(t(J,_2,e)),i=b(g2,Of,r,n);return P(Ef,i,e,a,0)}else return ac},Lr=T(function(e,r,n){return E(e,r,n)}),Ue=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dO:o}}),Uf=function(){var e=ia(1),r=ia(1),n=ia(1),a=t(ye,-.5,e),i=t(ye,-.5,r),o=t(ye,-.5,n),l=b(Ue,o,i,a),c=t(ye,.5,e),u=b(Ue,o,i,c),m=t(ye,.5,r),s=b(Ue,o,m,a),d=b(Ue,o,m,c),g=t(ye,.5,n),f=b(Ue,g,i,a),_=b(Ue,g,m,a),w=b(Ue,g,i,c),x=b(Ue,g,m,c);return nc(y2($([b(Lr,l,_,f),b(Lr,l,s,_),b(Lr,u,w,x),b(Lr,u,x,d),b(Lr,f,_,x),b(Lr,f,x,w),b(Lr,l,d,s),b(Lr,l,u,d),b(Lr,l,f,w),b(Lr,l,w,u),b(Lr,s,x,_),b(Lr,s,d,x)])))}(),Oi={$:0},x2=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),S2=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(a),m=Ri(b(Gf,u,c,l)),s={q:m,e_:ur(u)},d={q:m,e_:ur(c)},g={q:m,e_:ur(l)};return t(M,s,t(M,d,t(M,g,n)))}),ic=function(e){var r=e;return r.H},C2=U(function(e,r,n,a){if(r.$===1)return R;var i=r.a;if(n.$===1)return R;var o=n.a;if(a.$===1)return R;var l=a.a;return N(b(e,i,o,l))}),oc=4294967295>>>32-nt,lc=ls,z2=T(function(e,r,n){e:for(;;){var a=oc&r>>>e,i=t(lc,a,n);if(i.$){var m=i.a;return t(lc,oc&r,m)}else{var o=i.a,l=e-nt,c=r,u=o;e=l,r=c,n=u;continue e}}}),L2=function(e){return e>>>5<<5},P2=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||le(e,n)>-1?R:le(e,L2(n))>-1?N(t(lc,oc&e,o)):N(b(z2,a,e,i))}),cc=function(e){var r=e;return r.au},uc=v(function(e,r){return t(P2,e,cc(r))}),M2=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(C2,T(function(l,c,u){return E(l,c,u)}),t(uc,a,e),t(uc,i,e),t(uc,o,e))};return t(_n,r,ic(e))},T2=T(function(e,r,n){e:for(;;){var a=t(Ho,fr,e),i=a.a,o=a.b;if(le(jo(i),fr)<0)return t(Wu,!0,{C:r,n,r:i});var l=o,c=t(M,ju(i),r),u=n+1;e=l,r=c,n=u;continue e}}),$c=function(e){return e.b?b(T2,e,D,0):Ou},k2=v(function(e,r){return!t(ot,t($t,A0,e),r)}),D2=function(e){var r=e.a;return r},Jf=v(function(e,r){var n=D2(e),a=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&le(o,n)<0&&l>=0&&le(l,n)<0&&c>=0&&le(c,n)<0};return t(k2,a,r)?{H:r,au:e}:{H:t(I$,a,r),au:e}}),A2=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Dt=A2({d_:1,eb:3,eN:4}),Ni=v(function(e,r){var n=Ra(r),a=Ra(e);return L(E(a.io,a.is,a.dO),E(n.io,n.is,n.dO))}),qf=b(zt,0,0,0),vc=vr(function(e,r,n,a,i,o){var l=o.a,c=o.b,u=o.c,m=t(oi,t(Ni,e,r),i);if(m.$){var d={q:qf,e_:ur(r)},g={q:qf,e_:ur(e)},f=u+1,_=u;return E(t(M,E(n,_,f),t(M,E(n,f,a),l)),t(M,d,t(M,g,c)),u+2)}else{var s=m.a;return E(t(M,E(n,s,a),l),c,u)}}),F2=Ve(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,m=n.b,s=e(u),d=e(c),g=e(l),f=a+2,_=a+1,w=a,x=e,S=r,y=m,C=a+3,I=Ze(vc,s,g,f,w,r,Ze(vc,d,s,_,f,r,Ze(vc,g,d,w,_,r,i)));e=x,r=S,n=y,a=C,i=I;continue e}else{var q=i,Z=q.a,G=q.b;return L(Z,nr(G))}}),I2=Ve(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,m=r.b,s=e(u),d=e(c),g=e(l),f=n+2,_=n+1,w=n,x=b(ga,t(Ni,g,s),f,b(ga,t(Ni,s,d),_,b(ga,t(Ni,d,g),w,i))),S=t(M,E(w,_,f),a),y=e,C=m,I=n+3,q=S,Z=x;e=y,r=C,n=I,a=q,i=Z;continue e}else return E(a,i,n)}),ua=T(function(e,r,n){var a=M2(n),i=b(Ge,S2(r),D,a),o=A(I2,r,a,0,D,al),l=o.a,c=o.b,u=o.c,m=A(F2,r,c,a,0,E(l,D,u)),s=m.a,d=m.b,g=xn(d)?i:j(i,d);return b(x2,e,t(Jf,$c(g),s),t(Dt,g,s))}),fc=function(e){return{H:t(J,function(r){return E(3*r,3*r+1,3*r+2)},t(Nr,0,Nn(e)-1)),au:$c(tr(t(J,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},Yf=function(e){switch(e.$){case 0:return Oi;case 1:var r=e.a,n=e.b,a=t(J,kt,n);return b(ua,r,Ar,fc(a));case 2:var r=e.a,n=e.b,a=t(J,kt,n);return b(ua,r,Ar,fc(a));case 3:var r=e.a,i=e.b;return b(ua,r,Ar,i);case 4:var r=e.a,i=e.b;return b(ua,r,function(o){return o.e_},i);case 5:var r=e.a,i=e.b;return b(ua,r,function(o){return o.e_},i);case 6:var r=e.a,i=e.b;return b(ua,r,function(o){return o.e_},i);case 7:var r=e.a,i=e.b;return b(ua,r,function(o){return o.e_},i);case 8:return Oi;case 9:return Oi;default:return Oi}},Xf=Yf(Uf),ji=function(e){var r=e;return r.a4},Zf={$:0},B=Zf,Je=v(function(e,r){return{$:1,a:e,b:r}}),E2={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},B2=1029,V2=function(e){return{$:5,a:e}},Kf=function(e){var r=e;return V2(r)},R2=Kf(B2),O2=1028,N2=Kf(O2),$r=T(function(e,r,n){return r===1?e?t(M,R2,n):t(M,N2,n):n}),Qf={src:`
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
    `,attributes:{position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},mc=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,s,d){return A(Me,b($r,c,a,d),Qf,E2,n,{b7:e,c:l,d:o,e:m,f:i,g:u})}))}),sc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},em={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},fn=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,s,d){return A(Me,b($r,c,a,d),em,sc,n,{aO:e,c:l,d:o,e:m,f:i,g:u})}))}),rm=v(function(e,r){return{$:3,a:e,b:r}}),j2={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cv",sceneProperties:"f"}},nm={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cv",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},H2=U(function(e,r,n,a){return t(rm,n,be(function(i,o,l,c,u,m,s,d){return A(Me,d,nm,j2,a,{aO:e,c:l,d:o,cv:r,e:m,f:i,g:u})}))}),dc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},At=function(e){var r=e;return r},Hi=Wp,mn=Ve(function(e,r,n,a,i){return t(Je,n,be(function(o,l,c,u,m,s,d,g){return A(Me,b($r,u,i,g),em,dc,a,{a6:t(Hi,At(r),e),c,d:l,e:s,f:o,g:m})}))}),G2={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cv",sceneProperties:"f"}},W2=Ve(function(e,r,n,a,i){return t(rm,a,be(function(o,l,c,u,m,s,d,g){return A(Me,g,nm,G2,i,{a6:t(Hi,At(r),e),c,d:l,cv:n,e:s,f:o,g:m})}))}),am={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",materialColor:"c7",sceneProperties:"f",viewMatrix:"g"}},tm={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Gi=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,s,d){var g=s.a,f=s.b;return A(Me,b($r,c,a,d),tm,am,n,{U:f,bF:g.bF,cl:g.cl,cm:g.cm,cn:g.cn,c7:e,c:l,d:o,e:m,f:i,g:u})}))}),im={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",materialColorTexture:"c8",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},om={src:`
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
    `,attributes:{normal:"q",position:"e_",tangent:"fd",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},U2=vr(function(e,r,n,a,i,o){return t(Je,a,be(function(l,c,u,m,s,d,g,f){var _=g.a,w=g.b;return A(Me,b($r,m,o,f),om,im,i,{U:w,bF:_.bF,cl:_.cl,cm:_.cm,cn:_.cn,c8:e,c:u,d:c,bg:r,e:d,f:l,bm:n,g:s})}))}),lm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cN",constantBaseColor:"cP",constantMetallic:"cQ",constantRoughness:"cR",enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",metallicTexture:"db",normalMapTexture:"bg",roughnessTexture:"dv",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},J2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(s){return t(Je,u,be(function(d,g,f,_,w,x,S,y){var C=S.a,I=S.b;return A(Me,b($r,_,s,y),om,lm,m,{cN:e,cP:r,cQ:o,cR:a,U:I,bF:C.bF,cl:C.cl,cm:C.cm,cn:C.cn,db:i,c:f,d:g,bg:l,e:x,dv:n,f:d,bm:c,g:w})}))}}}}}}}}}}},cm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cM",enabledLights:"U",lights12:"bF",lights34:"cl",lights56:"cm",lights78:"cn",metallic:"da",roughness:"du",sceneProperties:"f",viewMatrix:"g"}},Wi=vr(function(e,r,n,a,i,o){return t(Je,a,be(function(l,c,u,m,s,d,g,f){var _=g.a,w=g.b;return A(Me,b($r,m,o,f),tm,cm,i,{cM:e,U:w,bF:_.bF,cl:_.cl,cm:_.cm,cn:_.cn,da:n,c:u,d:c,e:d,du:r,f:l,g:s})}))}),q2=function(e){return{$:0,a:e}},um=v(function(e,r){return{$:1,a:e,b:r}}),Ft=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),Y2=function(e){return P(Ia,na(e),aa(e),ta(e),1)},pc=P(Ia,0,0,0,0),Ui=v(function(e,r){if(r.$){var a=r.a.E;return L(a,pc)}else{var n=r.a;return L(e,Y2(n))}}),$m=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return t(um,L(i,pc),t(Ft,i,r))}else if(n.b.$){var i=n.b.a.E;return t(um,t(Ui,i,e),t(Ft,i,r))}else{var a=n.a.a;return n.b.a,q2(a)}}),X2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ji=U(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Z2=U(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),K2=function(e){return t(gr,e,1)},gc=t(gr,0,0),Oa=v(function(e,r){if(r.$){var a=r.a.E;return L(a,gc)}else{var n=r.a;return L(e,K2(n))}}),vm=U(function(e,r,n,a){var i=P(Z2,e,r,n,a);if(i.a.$){var u=i.a.a.E;return P(Ji,L(u,pc),t(Oa,u,r),t(Oa,u,n),t(Ft,u,a))}else if(i.b.$){var u=i.b.a.E;return P(Ji,t(Ui,u,e),L(u,gc),t(Oa,u,n),t(Ft,u,a))}else if(i.c.$){var u=i.c.a.E;return P(Ji,t(Ui,u,e),t(Oa,u,r),L(u,gc),t(Ft,u,a))}else if(i.d.$){var u=i.d.a.E;return P(Ji,t(Ui,u,e),t(Oa,u,r),t(Oa,u,n),L(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,b(X2,o,l,c)}}),Q2={src:`
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
    `,attributes:{},uniforms:{backlight:"cK",colorTexture:"b7",sceneProperties:"f"}},hc=Ve(function(e,r,n,a,i){return t(Je,n,be(function(o,l,c,u,m,s,d,g){return A(Me,b($r,u,i,g),Qf,Q2,a,{cK:At(r),b7:e,c,d:l,e:s,f:o,g:m})}))}),fm={src:`
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
    `,attributes:{normal:"q",position:"e_",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ew=U(function(e,r,n,a){return t(Je,r,be(function(i,o,l,c,u,m,s,d){var g=s.a,f=s.b;return A(Me,b($r,c,a,d),fm,im,n,{U:f,bF:g.bF,cl:g.cl,cm:g.cm,cn:g.cn,c8:e,c:l,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),rw=so(function(e,r,n,a,i,o,l,c,u){return t(Je,l,be(function(m,s,d,g,f,_,w,x){var S=w.a,y=w.b;return A(Me,b($r,g,u,x),fm,lm,c,{cN:e,cP:r,cQ:o,cR:a,U:y,bF:S.bF,cl:S.cl,cm:S.cm,cn:S.cn,db:i,c:d,d:s,bg:e,e:_,dv:n,f:m,bm:0,g:f})}))}),It=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),nw=function(e){var r=e;return b(It,r.eJ,r.eG,.5)},aw=function(e){var r=e;return b(It,r.eK,r.eH,.5)},tw=function(e){var r=e;return b(It,r.eL,r.eI,.5)},iw=function(e){return b(Ue,nw(e),aw(e),tw(e))},ie=function(e){var r=wf(e),n=r.a,a=r.b,i=r.c;return{f1:Tt(iw(e)),gC:n/2,gD:a/2,gE:i/2}},bc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return P(mc,c,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(mc,c,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(mc,c,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var n=e.b.a;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return P(H2,n,l,ie(a),i)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,m=e.c;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return A(hc,c,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return A(hc,c,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return A(hc,c,m,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return A(mn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return A(mn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return A(mn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return A(mn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return A(mn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return A(mn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return A(mn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return A(mn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return A(mn,u,m,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return A(W2,u,m,l,ie(a),i)}}case 2:e.a;var s=e.b,d=e.c,g=t($m,s,d);if(g.$){var w=g.a,x=w.a;w.b;var S=g.b,y=S.a,C=S.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return P(ew,x,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Ze(U2,x,y,C,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}else{var f=g.a;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,_=r.d;return P(Gi,f,ie(a),i,_);case 3:return B;case 4:var a=r.a,i=r.c,_=r.d;return P(Gi,f,ie(a),i,_);case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return P(Gi,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(Gi,f,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}default:e.a;var I=e.b,q=e.c,Z=e.d,d=e.e,G=P(vm,I,q,Z,d);if(G.$){var ne=G.a,fe=ne.a,we=ne.b,me=G.b,se=me.a,xe=me.b,de=G.c,Ae=de.a,Te=de.b,Xe=G.d,y=Xe.a,C=Xe.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return ns(rw,fe,we,se,xe,Ae,Te,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return J2(fe)(we)(se)(xe)(Ae)(Te)(y)(C)(ie(a))(i)(o);case 8:return B;case 9:return B;default:return B}}else{var Y=G.a,X=G.b,V=G.c;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,o=r.d;return Ze(Wi,Y,X,V,ie(a),i,o);case 3:return B;case 4:var a=r.a,i=r.c,o=r.d;return Ze(Wi,Y,X,V,ie(a),i,o);case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return Ze(Wi,Y,X,V,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Ze(Wi,Y,X,V,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}}}),_c=function(e){var r=e;return r.io},wc=function(e){var r=e;return r.is},yc=function(e){var r=e;return r.dO},ow=function(e){var r=e,n=yc(r.dP),a=wc(r.dP),i=_c(r.dP),o=yc(r.dN),l=wc(r.dN),c=_c(r.dN),u=yc(r.dM),m=wc(r.dM),s=_c(r.dM);return s*l*n+m*o*i+u*c*a-u*l*i-m*c*n-s*o*a>0},lw=function(e){var r=Tt(ra(e)),n=Cr(In(e)),a=Cr(Fn(e)),i=Cr(An(e));return{ef:ow(e),t:i.io,u:i.is,v:i.dO,w:a.io,x:a.is,y:a.dO,z:n.io,A:n.is,B:n.dO,K:r.io,L:r.is,M:r.dO,cA:1}},Na=v(function(e,r){return{$:5,a:e,b:r}}),mm=v(function(e,r){var n=r;switch(n.$){case 0:return B;case 5:var a=n.a,i=n.b,o=t($f,a,e);return t(Na,o,i);case 1:return t(Na,e,n);case 3:return t(Na,e,n);case 2:return t(Na,e,n);default:return t(Na,e,n)}}),sm=v(function(e,r){return t(mm,lw(e),r)}),qi=function(e){return{$:2,a:e}},cw=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f1;return{f1:{io:n*o.io,is:a*o.is,dO:i*o.dO},gC:n*r.gC,gD:a*r.gD,gE:i*r.gE}}),uw=qp,$w=Jp,dm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=$w(a),_=f.io,w=f.is,x=f.dO,S=f.fp,y=uw({fp:S,io:_*s,is:w*d,dO:x*g});return Ja(r,n,y,i,o,l,c,u,m)}}}}}}}}}},xc=v(function(e,r){switch(r.$){case 0:return Zf;case 5:var n=r.a,a=r.b;return t(Na,n,t(xc,e,a));case 1:var i=r.a,o=r.b;return t(Je,t(cw,e,i),t(dm,e,o));case 3:return r;case 2:var o=r.a;return qi(t(dm,e,o));default:var l=r.a;return zf(t(J,xc(e),l))}}),Sc=v(function(e,r){var n=r;return t(xc,e,n)}),Cc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},pm=7683,gm=7682,vw=b(Ul,{c6:0,dr:0,dL:15},{bz:er,bO:Ea,bX:er,bY:pm},{bz:er,bO:Ea,bX:er,bY:gm}),fw=b(Ul,{c6:0,dr:0,dL:15},{bz:er,bO:Ea,bX:er,bY:gm},{bz:er,bO:Ea,bX:er,bY:pm}),zc=v(function(e,r){return e?t(M,fw,r):t(M,vw,r)}),mw={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cB",viewMatrix:"g"}},sw=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,l,c,u,m){return A(Me,t(zc,o,m),mw,Cc,r,{c:i,d:a,e:c,f:n,cB:u,g:l})}))}else return R},Yi=function(e){var r=sw(e);if(r.$)return B;var n=r.a;return qi(n)},dw=U(function(e,r,n,a){var i=t(bc,n,Uf),o=function(){var s=L(e,r);return s.a?s.b?Pt($([i,Yi(Xf)])):i:s.b?Yi(Xf):B}(),l=ji(a),c=l.a,u=l.b,m=l.c;return t(sm,Vi(a),t(Sc,E(c,u,m),o))}),pw=v(function(e,r){return P(dw,!0,!0,e,r)}),Lc=function(e){return{$:0,a:e}},hm=v(function(e,r){return{$:0,a:e,b:r}}),gw=function(e){var r=Sl(e),n=r.hs,a=r.gz,i=r.fP;return b(zt,n,a,i)},hw=function(e){return t(hm,0,Lc(gw(e)))},Pc=function(e){var r=e;return r.m},Et=function(e){var r=e;return ea(r)},bw=v(function(e,r){var n=r;return n/e}),ja=gs,bm=function(e){var r=e;return{io:ea(r),is:ja(r)}},_w=v(function(e,r){var n=e.e_,a=e.q;return t(M,{q:Ri(a),e_:ur(n)},r)}),ww=Ht(function(e,r,n,a,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,m=ta(c.e_),s=aa(c.e_),d=na(c.e_),g=t(Ca,e,d),f=t(qe,r,d),_=t(Ca,n,s),w=t(qe,a,s),x=t(Ca,i,m),S=t(qe,o,m),y=u;e=g,r=f,n=_,a=w,i=x,o=S,l=y;continue e}else return Rf({eG:r,eH:a,eI:o,eJ:e,eK:n,eL:i})}),_m=v(function(e,r){var n=ta(e.e_),a=aa(e.e_),i=na(e.e_);return po(ww,i,i,a,a,n,n,r)}),yw=function(e){var r=b(Tu,_w,D,cc(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,ic(e)),o=t(_m,n,a);return P(Bf,o,e,i,0)}else return ac},wm=$n({io:0,is:0,dO:-1}),ym=v(function(e,r){var n=e,a=r,i=n.dN,o=i,l=n.dM,c=l;return{io:a.io*c.io+a.is*o.io,is:a.io*c.is+a.is*o.is,dO:a.io*c.dO+a.is*o.dO}}),Xi=function(e){var r=e;return ja(r)},Mc=function(e){return un(2*Kn*e)},xw=Ar,xm=xw({df:Sr,dM:Ql,dN:ec}),Sm=function(){var e=72,r=t(bw,e,Mc(1)),n=ia(1),a=Fa(rc),i=Fa(wm),o=ia(1),l=t(ye,.5,o),c=b(Ue,Jr,Jr,l),u=t(ye,-.5,o),m=b(Ue,Jr,Jr,u),s=function(f){var _=t(ye,f,r),w=Fa(t(ym,xm,bm(_))),x=t(ye,Et(_),n),S=t(ye,Xi(_),n),y=b(Ue,x,S,l),C=b(Ue,x,S,u),I=t(Si,e,f+1),q=t(ye,I,r),Z=Fa(t(ym,xm,bm(q))),G=t(ye,Et(q),n),Y=t(ye,Xi(q),n),X=b(Ue,G,Y,u),V=b(Ue,G,Y,l);return $([E({q:i,e_:m},{q:i,e_:X},{q:i,e_:C}),E({q:w,e_:C},{q:Z,e_:X},{q:Z,e_:V}),E({q:w,e_:C},{q:Z,e_:V},{q:w,e_:y}),E({q:a,e_:c},{q:a,e_:y},{q:a,e_:V})])},d=t(J,s,t(Nr,0,e-1)),g=fc(tr(d));return nc(yw(g))}(),Cm=Yf(Sm),zm=function(e){var r=e;return r.gk},Lm=function(e){var r=e;return r.df},Sw=function(e){var r=zm(e),n=Rl(r),a=n.a,i=n.b;return Ir({df:Lm(e),dM:a,dN:i,dP:r})},Pm=function(e){var r=e;return r.g2},Mm=function(e){var r=e;return r.hq},Cw=U(function(e,r,n,a){var i=Sw(Pc(a)),o=t(bc,n,Sm),l=function(){var d=L(e,r);return d.a?d.b?Pt($([o,Yi(Cm)])):o:d.b?Yi(Cm):B}(),c=Mm(a),u=c,m=Pm(a),s=m;return t(sm,i,t(Sc,E(u,u,s),l))}),zw=v(function(e,r){return P(Cw,!0,!0,e,r)}),Tm={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},km={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Bt=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=Ra(n),l=Ra(a),c=Ra(i);return Yr({ep:o.io,eq:l.io,er:c.io,es:0,et:o.is,eu:l.is,ev:c.is,ew:0,ex:o.dO,ey:l.dO,ez:c.dO,eA:0,eB:0,eC:0,eD:0,eE:0})},Zi=Wf($([E({dC:0},{dC:1},{dC:2})])),Lw=v(function(e,r){var n=Of(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var i=e.b.a;return t(Je,a,be(function(y,C,I,q,Z,G,Y,X){return A(Me,b($r,q,0,X),Tm,sc,Zi,{aO:i,c:I,d:C,e:G,f:y,bU:Bt(r),g:Z})}));case 1:if(e.b.$)return e.a,B;var o=e.b.a,l=e.c;return t(Je,a,be(function(y,C,I,q,Z,G,Y,X){return A(Me,b($r,q,0,X),Tm,dc,Zi,{a6:t(Hi,At(l),o),c:I,d:C,e:G,f:y,bU:Bt(r),g:Z})}));case 2:e.a;var c=e.b,u=e.c,m=t($m,c,u);if(m.$)return B;var s=m.a;return t(Je,a,be(function(y,C,I,q,Z,G,Y,X){var V=Y.a,ne=Y.b;return A(Me,b($r,q,0,X),km,am,Zi,{U:ne,bF:V.bF,cl:V.cl,cm:V.cm,cn:V.cn,c7:s,c:I,d:C,e:G,f:y,bU:Bt(r),g:Z})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=P(vm,d,g,f,u);if(_.$)return B;var w=_.a,x=_.b,S=_.c;return t(Je,a,be(function(y,C,I,q,Z,G,Y,X){var V=Y.a,ne=Y.b;return A(Me,b($r,q,0,X),km,cm,Zi,{cM:w,U:ne,bF:V.bF,cl:V.cl,cm:V.cm,cn:V.cn,da:S,c:I,d:C,e:G,du:x,f:y,bU:Bt(r),g:Z})}))}}),Pw=function(){var e=$([{bl:t(gr,0,1)},{bl:t(gr,1,1)},{bl:t(gr,2,1)},{bl:t(gr,0,-1)},{bl:t(gr,1,-1)},{bl:t(gr,2,-1)}]),r=$([E(0,1,2),E(3,5,4),E(3,4,1),E(3,1,0),E(4,5,2),E(4,2,1),E(5,3,0),E(5,0,2)]);return t(Dt,e,r)}(),Mw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cB",triangleVertexPositions:"bU",viewMatrix:"g"}},Dm=function(e){return qi(be(function(r,n,a,i,o,l,c,u){return A(Me,t(zc,i,u),Mw,Cc,Pw,{c:a,d:n,e:l,f:r,cB:c,bU:Bt(e),g:o})}))},Tw=U(function(e,r,n,a){var i=t(Lw,n,a),o=L(e,r);return o.a?o.b?Pt($([i,Dm(a)])):i:o.b?Dm(a):B}),kw=v(function(e,r){return P(Tw,!0,!0,e,r)}),Tc=function(e){var r=e;return r},Dw=v(function(e,r){var n=ca(r),a=ca(e),i=la(r),o=la(e),l=oa(r),c=oa(e);return{eG:t(Be,c,l),eH:t(Be,o,i),eI:t(Be,a,n),eJ:t(je,c,l),eK:t(je,o,i),eL:t(je,a,n)}}),Aw=function(e){var r=Tc(e),n=r.a,a=r.b;return t(Dw,n,a)},Am={src:`
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
    `,attributes:{lineSegmentVertex:"en"},uniforms:{lineSegmentEndPoint:"el",lineSegmentStartPoint:"em",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Fw=v(function(e,r){return{$:1,a:e,b:r}}),Iw=Fw({d_:2,eb:0,eN:1}),Fm=Iw($([L({en:0},{en:1})])),Ew=v(function(e,r){var n=Aw(r),a=ie(n),i=Tc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var c=e.b.a;return t(Je,a,be(function(m,s,d,g,f,_,w,x){return A(Me,x,Am,sc,Fm,{aO:c,el:ur(l),em:ur(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return B;var c=e.b.a,u=e.c;return t(Je,a,be(function(s,d,g,f,_,w,x,S){return A(Me,S,Am,dc,Fm,{a6:t(Hi,At(u),c),el:ur(l),em:ur(o),c:g,d,e:w,f:s,g:_})}));case 2:return B;default:return B}}),Bw=v(function(e,r){return t(Ew,e,r)}),Ki=function(e){var r=e;return r.f1},Qi=function(e){var r=e;return r.hq},Im=v(function(e,r){var n=e,a=r;return n/a}),Vw=Ve(function(e,r,n,a,i){e:for(;;){var o=a(r/n),l=t(M,o,i);if(ue(r,e))return l;var c=e,u=r-1,m=n,s=a,d=l;e=c,r=u,n=m,a=s,i=d;continue e}}),Em=v(function(e,r){return e<1?D:A(Vw,0,e,e,r,D)}),Rw=v(function(e,r){var n=e.e_,a=e.q,i=e.O,o=i,l=o.a,c=o.b;return t(M,{q:Ri(a),e_:ur(n),O:t(gr,l,c)},r)}),Ow=function(e){var r=b(Tu,Rw,D,cc(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,ic(e)),o=t(_m,n,a);return P(Vf,o,e,i,0)}else return ac},kc=v(function(e,r){var n=e,a=r,i=ea(a);return{io:i*ea(n),is:i*ja(n),dO:ja(a)}}),Nw=function(){var e=ia(1),r=72,n=t(Nr,0,r-1),a=t(Em,r,t(It,Jr,Mc(1))),i=et(r/2),o=t(Nr,0,i-1),l=t(Em,i,t(It,Ct(90),Ct(-90))),c=$c(tr(t(J,function(s){return t(J,function(d){return{q:Fa(t(kc,s,d)),e_:b(Ue,t(ye,Et(d)*Et(s),e),t(ye,Et(d)*Xi(s),e),t(ye,Xi(d),e)),O:L(t(Im,s,Mc(1)),t(Im,t(Lt,Ct(90),d),Ct(180)))}},l)},a))),u=v(function(s,d){return s*(i+1)+d}),m=tr(t(J,function(s){return tr(t(J,function(d){var g=t(u,s+1,d),f=t(u,s,d),_=t(u,s+1,d+1),w=t(u,s,d+1);return $([E(w,_,g),E(w,g,f)])},o))},n));return nc(Ow(t(Jf,c,m)))}(),eo=72,ro=2*eo,jw=v(function(e,r){e:for(;;){var n=ro+1,a=t(Si,ro,2*e+3),i=t(Si,ro,2*e+2),o=2*e+1,l=2*e,c=ro,u=t(M,E(c,l,i),t(M,E(l,a,i),t(M,E(l,o,a),t(M,E(o,n,a),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),Hw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Gw=v(function(e,r){e:for(;;){var n=b(Hw,0,2*Kn,e/eo),a={b_:n,cs:0,cy:1},i={b_:n,cs:1,cy:1},o=t(M,a,t(M,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Ww=function(){var e=t(Gw,eo-1,$([{b_:0,cs:0,cy:0},{b_:0,cs:1,cy:0}])),r=t(jw,eo-1,D);return t(Dt,e,r)}(),Uw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"cs",radiusScale:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cB",viewMatrix:"g"}},Bm=function(e){return qi(be(function(r,n,a,i,o,l,c,u){return A(Me,t(zc,!0,u),Uw,Cc,Ww,{aO:b(zt,0,0,1),c:a,d:n,e:l,f:r,cB:c,g:o})}))},Jw=function(e){var r=jf(e);return{ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dO,cA:1}},qw=v(function(e,r){return t(mm,Jw(e),r)}),Yw=U(function(e,r,n,a){var i=t(bc,n,Nw),o=function(){var u=L(e,r);return u.a?u.b?Pt($([i,Bm()])):i:u.b?Bm():B}(),l=Qi(a),c=l;return t(qw,t(Ai,Sr,Ki(a)),t(Sc,E(c,c,c),o))}),Xw=v(function(e,r){return P(Yw,!0,!0,e,r)}),Zw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Vm=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Kw=Ve(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),Qw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(hm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(Zw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(Vm,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return A(Kw,r,n,o,l,i)}},ey=Qw,Rm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(pw,r,n)]);case 1:var r=e.a,a=e.b;return $([t(kw,r,a)]);case 3:var r=e.a,i=e.b;return $([t(Xw,ey(r),i)]);case 2:var r=e.a,o=e.b;return $([t(zw,r,o)]);case 4:var l=e.a,c=e.b;return $([t(Bw,hw(l),c)]);default:var u=e.a;return t(wa,Rm,u)}},ry=function(e){return t(wa,Rm,e)},ny=v(function(e,r){return $2({fG:e.fG,a1:G1(e.fL),fZ:e.fZ,f5:ia(e.f5),cS:e.cS,a4:L(If(Le(e.dw.im)),If(Le(e.dw.gG))),a8:ry(r),gs:e.gs,g4:e.g4,ic:e.ic,il:e.il})}),Om=function(e){return e},ay=v(function(e,r){var n=e,a=Cr(r.gk),i=a.io,o=a.is,l=a.dO,c=t(Ii,r.ci,r.a3),u=c;return{b0:ta(u),f0:n,ce:aa(u),$7:0,cx:na(u),dD:1,io:-i,is:-o,dO:-l}}),ty=function(e){return t(ay,Om(!0),{a3:e.a3,gk:t(kc,un(e.b$),un(e.cc)),ci:e.ci})},iy=function(e){return e},oy=function(e){return iy(1.2*t(Da,2,e))},Dc=Nl({io:.37208,is:.37529}),ly=v(function(e,r){return{$:2,a:e,b:r}}),Nm=function(e){return{$:0,a:e}},no=function(e){var r=e;return r},cy=function(e){var r=e;return r.f0},uy=Nm(Mt.a),$y=v(function(e,r){var n=v(function(a,i){var o=i.a,l=i.b;return e(a)?L(t(M,a,o),l):L(o,t(M,a,l))});return b(Ge,n,L(D,D),r)}),vy=function(e){var r=e;return Yr({ep:r.io,eq:r.cx,er:0,es:0,et:r.is,eu:r.ce,ev:0,ew:0,ex:r.dO,ey:r.b0,ez:0,eA:0,eB:r.dD,eC:r.$7,eD:0,eE:0})},fy=be(function(e,r,n,a,i,o,l,c){var u=t($y,cy,$([no(e),no(r),no(n),no(a)])),m=u.a,s=u.b;if(m.b){var d=j(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,w=f.b,x=w.a,S=w.b,y=S.a;return t(ly,t(J,vy,m),{bF:t(zr,g,_),cl:t(zr,x,y),cm:t(zr,i,o),cn:t(zr,l,c)})}else return uy}else return Nm({bF:t(zr,e,r),cl:t(zr,n,a),cm:t(zr,i,o),cn:t(zr,l,c)})}),my=U(function(e,r,n,a){return Ja(fy,e,r,n,a,hr,hr,hr,hr)}),sy=v(function(e,r){return t(Ie,function(n){if(n.$)return 0;var a=n.b;return a},t(oi,e,r.aN))}),dy=v(function(e,r){return t(Ce,0,kl(t(_n,sy(e),r)))}),py=v(function(e,r){return t(dy,e,r.f9)}),sn=py,gy=P(yt,211/255,215/255,207/255,1),hy={$:5},by=hy,_y=Nl({io:.44757,is:.40745}),wy=function(e){return e},jm=function(e){return e},Ac=function(e){return e},yy={$:1},xy=yy,Sy=v(function(e,r){var n=e,a=Tt(r.e_),i=a.io,o=a.is,l=a.dO,c=t(Ii,r.ci,r.a3),u=c;return{b0:ta(u),f0:n,ce:aa(u),$7:0,cx:na(u),dD:2,io:i,is:o,dO:l}}),Hm=function(e){return t(Sy,Om(!0),{a3:e.a3,ci:e.ci,e_:ki(e.e_)})},ao=v(function(e,r){return{$:0,a:e,b:r}}),Fc=v(function(e,r){var n=e,a=r;return le(a,n)>-1}),Ic=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Cy=$n({io:-1,is:0,dO:0}),zy=$n({io:0,is:-1,dO:0}),Ly=vr(function(e,r,n,a,i,o){var l=t(Fc,n,o)?rc:wm,c=t(Fc,r,i)?Ol:zy,u=t(Fc,e,a)?Af:Cy,m=E(Ne(t(vn,e,a)),Ne(t(vn,r,i)),Ne(t(vn,n,o))),s=b(Ue,t(Ic,e,a),t(Ic,r,i),t(Ic,n,o)),d=Ir({df:s,dM:u,dN:c,dP:l});return{fK:d,a4:m}}),Py=v(function(e,r){return Ze(Ly,oa(e),la(e),ca(e),oa(r),la(r),ca(r))}),My=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=E(n/2,a/2,i/2),l=o.a,c=o.b,u=o.c;return t(ao,e,t(Py,b(Zl,-l,-c,-u),b(Zl,l,c,u)))}),to=function(e){return{$:5,a:e}},Ty=function(e){return to(e)},ky=U(function(e,r,n,a){var i=E(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,m=c*2-u,s=function(_){var w=_<0?_+1:_>1?_-1:_;return w*6<1?m+(u-m)*w*6:w*2<1?u:w*3<2?m+(u-m)*(2/3-w)*6:m},d=s(o-1/3),g=s(o),f=s(o+1/3);return P(yt,f,g,d,a)}),Dy=T(function(e,r,n){return P(ky,e,r,n,1)}),Ec=function(e){return b(cf,0,1,e<=.04045?e/12.92:t(Da,(e+.055)/1.055,2.4))},Ay=function(e){var r=Sl(e),n=r.hs,a=r.gz,i=r.fP;return b(zt,Ec(n),Ec(a),Ec(i))},Fy=function(e){return b(Vm,0,Lc(Ay(e)),Lc(0))},Bc=v(function(e,r){return{$:2,a:e,b:r}}),Vc=v(function(e,r){return{$:4,a:e,b:r}}),Rc=v(function(e,r){return{$:3,a:e,b:r}}),Oc=v(function(e,r){return{$:1,a:e,b:r}}),Iy=T(function(e,r,n){return{io:e,is:r,dO:n}}),Vt=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dO:a.dO+n.dO}}),Ey=v(function(e,r){return Ir({df:t(Vt,e,ra(r)),dM:An(r),dN:Fn(r),dP:In(r)})}),By=v(function(e,r){return{fK:t(Ey,e,Vi(r)),a4:ji(r)}}),Ha=v(function(e,r){return{gk:r,df:e}}),Vy=v(function(e,r){var n=r;return t(Ha,t(Vt,e,n.df),n.gk)}),Ry=v(function(e,r){var n=r;return{m:t(Vy,e,n.m),g2:n.g2,hq:n.hq}}),Oy=function(e){return e},Nc=v(function(e,r){var n=Tc(r),a=n.a,i=n.b;return Oy(L(e(a),e(i)))}),Ny=v(function(e,r){return t(Nc,Vt(e),r)}),jc=v(function(e,r){return{f1:r,hq:Ne(e)}}),jy=v(function(e,r){return t(jc,Qi(r),t(Vt,e,Ki(r)))}),Hc=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return E(e(a),e(i),e(o))}),Hy=v(function(e,r){return t(Hc,Vt(e),r)}),Gm=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(Iy,n,a,i);switch(r.$){case 0:var l=r.a,c=r.b;return t(ao,l,t(By,o,c));case 1:var l=r.a,u=r.b;return t(Oc,l,t(Hy,o,u));case 3:var l=r.a,m=r.b;return t(Rc,l,t(jy,o,m));case 2:var l=r.a,s=r.b;return t(Bc,l,t(Ry,o,s));case 4:var l=r.a,d=r.b;return t(Vc,l,t(Ny,o,d));default:var g=r.a;return to(t(J,Gm(E(n,a,i)),g))}}),Wm=function(e){return Gm(E(e,0,0))},io=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=ea(l),u=ja(l),m=a.gk,s=m,d=s.io*u,g=c*d,f=d*d,_=s.is*u,w=c*_,x=d*_,S=_*_,y=1-2*(f+S),C=s.dO*u,I=c*C,q=2*(x-I),Z=2*(x+I),G=d*C,Y=2*(G+w),X=2*(G-w),V=_*C,ne=2*(V-g),fe=2*(V+g),we=C*C,me=1-2*(S+we),se=1-2*(f+we);return{io:me*o.io+q*o.is+Y*o.dO,is:Z*o.io+se*o.is+ne*o.dO,dO:X*o.io+fe*o.is+y*o.dO}}),Rt=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=ea(l),u=ja(l),m=a.df,s=m,d=o.io-s.io,g=o.is-s.is,f=o.dO-s.dO,_=a.gk,w=_,x=w.io*u,S=c*x,y=x*x,C=w.is*u,I=c*C,q=x*C,Z=C*C,G=1-2*(y+Z),Y=w.dO*u,X=c*Y,V=2*(q-X),ne=2*(q+X),fe=x*Y,we=2*(fe+I),me=2*(fe-I),se=C*Y,xe=2*(se-S),de=2*(se+S),Ae=Y*Y,Te=1-2*(Z+Ae),Xe=1-2*(y+Ae);return{io:s.io+Te*d+V*g+we*f,is:s.is+ne*d+Xe*g+xe*f,dO:s.dO+me*d+de*g+G*f}}),Gy=T(function(e,r,n){return Ir({df:b(Rt,e,r,ra(n)),dM:b(io,e,r,An(n)),dN:b(io,e,r,Fn(n)),dP:b(io,e,r,In(n))})}),Wy=T(function(e,r,n){return{fK:b(Gy,e,r,Vi(n)),a4:ji(n)}}),Uy=v(function(e,r){var n=t(Rt,e,r),a=t(io,e,r);return function(i){var o=i;return t(Ha,n(o.df),a(o.gk))}}),Jy=T(function(e,r,n){var a=n;return{m:b(Uy,e,r,a.m),g2:a.g2,hq:a.hq}}),qy=T(function(e,r,n){return t(Nc,t(Rt,e,r),n)}),Yy=T(function(e,r,n){return t(jc,Qi(n),b(Rt,e,r,Ki(n)))}),Xy=T(function(e,r,n){return t(Hc,t(Rt,e,r),n)}),oo=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(ao,a,b(Wy,e,r,i));case 1:var a=n.a,o=n.b;return t(Oc,a,b(Xy,e,r,o));case 3:var a=n.a,l=n.b;return t(Rc,a,b(Yy,e,r,l));case 2:var a=n.a,c=n.b;return t(Bc,a,b(Jy,e,r,c));case 4:var a=n.a,u=n.b;return t(Vc,a,b(qy,e,r,u));default:var m=n.a;return to(t(J,t(oo,e,r),m))}}),Zy=t(Ha,Sr,Ql),Ky=v(function(e,r){return b(oo,Zy,un(e),r)}),Qy=t(Ha,Sr,ec),ex=v(function(e,r){return b(oo,Qy,un(e),r)}),rx=t(Ha,Sr,Ff),nx=v(function(e,r){return b(oo,rx,un(e),r)}),Ot=T(function(e,r,n){var a=e,i=n;return{io:a.io+r*(i.io-a.io),is:a.is+r*(i.is-a.is),dO:a.dO+r*(i.dO-a.dO)}}),ax=T(function(e,r,n){var a=Vi(n),i=An(a),o=Fn(a),l=In(a),c=b(Ot,e,r,ra(a)),u=r>=0?Ir({df:c,dM:i,dN:o,dP:l}):Ir({df:c,dM:En(i),dN:En(o),dP:En(l)}),m=ji(n),s=m.a,d=m.b,g=m.c,f=Ne(t(ye,r,s)),_=Ne(t(ye,r,d)),w=Ne(t(ye,r,g));return{fK:u,a4:E(f,_,w)}}),Um=function(e){return zm(Pc(e))},tx=function(e){return Lm(Pc(e))},ix=T(function(e,r,n){var a=Ne(t(ye,r,Mm(n))),i=Ne(t(ye,r,Pm(n))),o=r>=0?Um(n):En(Um(n)),l=b(Ot,e,r,tx(n));return{m:t(Ha,l,o),g2:i,hq:a}}),ox=T(function(e,r,n){return t(Nc,t(Ot,e,r),n)}),lx=T(function(e,r,n){return t(jc,t(ye,ce(r),Qi(n)),b(Ot,e,r,Ki(n)))}),cx=T(function(e,r,n){return t(Hc,t(Ot,e,r),n)}),Jm=v(function(e,r){switch(r.$){case 0:var n=r.a,a=r.b;return t(ao,n,b(ax,Sr,e,a));case 1:var n=r.a,i=r.b;return t(Oc,n,b(cx,Sr,e,i));case 3:var n=r.a,o=r.b;return t(Rc,n,b(lx,Sr,e,o));case 2:var n=r.a,l=r.b;return t(Bc,n,b(ix,Sr,e,l));case 4:var n=r.a,c=r.b;return t(Vc,n,b(ox,Sr,e,c));default:var u=r.a;return to(t(J,Jm(e),u))}}),ux=function(e){var r=function(i){return .1*i},n=function(i){return P(lf,0,1,4,e.cO+r(i))},a=function(i){return t(Wm,1.4*i,t(nx,n(i),t(Ky,n(i),t(ex,n(i),t(Wm,t(sn,"a",e)*i,t(Jm,t(sn,"a",e)*i,t(My,Fy(b(Dy,n(i),.6,.8)),E(1,3,1))))))))};return Ty(t(J,a,t(Nr,-10,10)))},$x=v(function(e,r){return $([ux(e)])}),qm=function(e){var r=e;return r},vx=function(e){e:for(;;){if(ue(e.ed,Jr)&&ue(e.ee,Jr))return hr;if(t(tf,Ne(e.ed),Ne(e.ee))){var r={a3:e.a3,ed:e.ee,ee:e.ed,fi:En(e.fi)};e=r;continue e}else{var n=ce(qm(e.ee)/Kn),a=ce(qm(e.ed)/Kn),i=Cr(e.fi),o=i.io,l=i.is,c=i.dO,u=t(Ii,Hf(1),e.a3),m=u;return{b0:a*ta(m),f0:!1,ce:a*aa(m),$7:n/a,cx:a*na(m),dD:3,io:o,is:l,dO:c}}}},fx=function(e){return vx({a3:e.a3,ed:e.ed,ee:e.ee,fi:t(kc,un(e.b$),un(e.cc))})},mx=v(function(e,r){var n=ty({b$:t(sn,"azimuth for third light",e),a3:H1(wy(2e3)),cc:t(sn,"elevation for third light",e),ci:Ac(t(Da,10,t(sn,"lux",e)))}),a=Hm({a3:Dc,ci:jm(6e3),e_:{io:-45,is:-30,dO:45}}),i=fx({b$:t(sn,"azimuth for fourth light",e),a3:Dc,cc:t(sn,"elevation for fourth light",e),ed:Ac(t(sn,"intensity above",e)),ee:Ac(t(sn,"intensity below",e))}),o=Hm({a3:_y,ci:jm(6e3),e_:{io:-45,is:30,dO:45}});return t(ny,{fG:xy,fL:gy,fZ:N1(e),f5:.1,cS:e.cS,gs:oy(6),g4:P(my,o,a,n,i),dw:e.dw,ic:by,il:Dc},t($x,e,r))}),sx=P(g1,mx,x1,y1,h1);const dx={Main:{init:sx(t(W,function(e){return ar({gX:e})},t(H,"inputs",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return ar({cO:l,cS:o,gn:i,g0:a,ho:n,dw:r,ik:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(s){return t(W,function(d){return ar({fF:d,gb:s,dZ:m,gm:u,g1:c,hp:l,hv:o,hH:i,fh:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",ui(ha)))},t(H,"left",_e))},t(H,"pressedKeys",ui(ha)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return ar({dZ:m,gY:u,g8:c,hw:l,hx:o,fh:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return ar({gG:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return ar({gf:r,gg:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re)))))))(0)}},K={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},px=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",l=f=>f.code=="ArrowUp",c=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(K.keyboard.downs.push(f.code),K.keyboard.pressedKeys.push(f.code),r(f)&&(K.keyboard.control=!0),n(f)&&(K.keyboard.alt=!0),a(f)&&(console.log("yo"),K.keyboard.shift=!0),i(f)&&(K.keyboard.left=!0),o(f)&&(K.keyboard.right=!0),l(f)&&(K.keyboard.up=!0),c(f)&&(console.log("yey"),K.keyboard.down=!0))}),window.addEventListener("keyup",f=>{K.keyboard.pressedKeys=K.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(K.keyboard.control=!1,K.keyboard.pressedKeys=[]),n(f)&&(K.keyboard.alt=!1),a(f)&&(K.keyboard.shift=!1),i(f)&&(K.keyboard.left=!1),o(f)&&(K.keyboard.right=!1),l(f)&&(K.keyboard.up=!1),c(f)&&(K.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{K.pointer.x=-.5*K.screen.width+f.pageX,K.pointer.y=.5*K.screen.height-f.pageY,u(f)&&(K.pointer.down=!0,K.pointer.isDown=!0),m(f)&&(K.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{K.pointer.move=!0,K.pointer.x=-.5*K.screen.width+f.pageX,K.pointer.y=.5*K.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(K.pointer.up=!0,K.pointer.isDown=!1),m(f)&&(K.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(K.pointer.up=!0,K.pointer.isDown=!1),m(f)&&(K.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{K.wheel.deltaX=f.deltaX,K.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(K)}),window.addEventListener("focus",f=>{s(K)}),window.addEventListener("visibilitychange",f=>{s(K)}),window.addEventListener("resize",()=>{K.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,w=_-K.clock;w<.009||(K.dt=w,K.clock=_,e.ports.tick.send(K),d(K)),window.requestAnimationFrame(g)}},gx=dx.Main.init({node:document.querySelector("#app div"),flags:{inputs:K}});px(gx);
