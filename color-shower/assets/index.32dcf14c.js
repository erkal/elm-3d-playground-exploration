const rs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};rs();function sn(e,r,n){return n.a=e,n.f=r,n}function v(e){return sn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return sn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function O(e){return sn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Ve(e){return sn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function gr(e){return sn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return e(r,n,a,i,o,l)}}}}}})}function Wt(e){return sn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return e(r,n,a,i,o,l,c)}}}}}}})}function be(e){return sn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,a,i,o,l,c,u)}}}}}}}})}function mo(e){return sn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return e(r,n,a,i,o,l,c,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function F(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function er(e,r,n,a,i,o,l){return e.a===6?e.f(r,n,a,i,o,l):e(r)(n)(a)(i)(o)(l)}function so(e,r,n,a,i,o,l,c){return e.a===7?e.f(r,n,a,i,o,l,c):e(r)(n)(a)(i)(o)(l)(c)}function Ga(e,r,n,a,i,o,l,c,u){return e.a===8?e.f(r,n,a,i,o,l,c,u):e(r)(n)(a)(i)(o)(l)(c)(u)}function ns(e,r,n,a,i,o,l,c,u,m){return e.a===9?e.f(r,n,a,i,o,l,c,u,m):e(r)(n)(a)(i)(o)(l)(c)(u)(m)}var as=[];function ts(e){return e.length}var is=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),os=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),ls=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var cs=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,l=new Array(o),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+us()),r});function us(e){return"<internals>"}function aa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function le(e,r){for(var n,a=[],i=po(e,r,0,a);i&&(n=a.pop());i=po(n.a,n.b,0,a));return i}function po(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&aa(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=Pu(e),r=Pu(r));for(var i in e)if(!po(e[i],r[i],n+1,a))return!1;return!0}v(le);v(function(e,r){return!le(e,r)});function $e(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=$e(e.a,r.a))||(n=$e(e.b,r.b))?n:$e(e.c,r.c);for(;e.b&&r.b&&!(n=$e(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return $e(e,r)<0});v(function(e,r){return $e(e,r)<1});v(function(e,r){return $e(e,r)>0});v(function(e,r){return $e(e,r)>=0});var $s=v(function(e,r){var n=$e(e,r);return n<0?Mu:n?ng:zu}),Wa=0;function P(e,r){return{a:e,b:r}}function E(e,r,n){return{a:e,b:r,c:n}}function Er(e){return e}function ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(U);function U(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Br(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Br(e.a,r);return n}var D={$:0};function Br(e,r){return{$:1,a:e,b:r}}var vs=v(Br);function $(e){for(var r=D,n=e.length;n--;)r=Br(e[n],r);return r}function Ot(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fs=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});O(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Ve(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(z(e,r.a,n.a,a.a,i.a));return $(o)});gr(function(e,r,n,a,i,o){for(var l=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,a.a,i.a,o.a));return $(l)});v(function(e,r){return $(Ot(r).sort(function(n,a){return $e(e(n),e(a))}))});v(function(e,r){return $(Ot(r).sort(function(n,a){var i=t(e,n,a);return i===zu?0:i===Mu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ms=v(Math.pow);v(function(e,r){return r%e});var ss=v(function(e,r){var n=r%e;return e===0?aa(11):n>0&&e<0||n<0&&e>0?n+e:n}),ds=Math.PI,ps=Math.cos,gs=Math.sin,hs=Math.tan;v(Math.atan2);function bs(e){return e}function _s(e){return e===1/0||e===-1/0}var xs=Math.ceil,ws=Math.floor,ys=Math.round,Ss=Math.sqrt,Uc=Math.log,Cs=isNaN;function Ls(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ps=v(function(e,r){return e+r});function zs(e){var r=e.charCodeAt(0);return isNaN(r)?j:N(55296<=r&&r<=56319?P(Er(e[0]+e[1]),e.slice(2)):P(Er(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ms(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Er(r[i]+r[i+1])),i+=2;continue}a[i]=e(Er(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(Er(o))&&n.push(o)}return n.join("")});function Ts(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=t(e,Er(o),r)}return r});var ks=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Er(i),r)}return r}),Ds=v(function(e,r){return r.split(e)}),Fs=v(function(e,r){return r.join(e)}),As=T(function(e,r,n){return n.slice(e,r)});function Is(e){return $(e.trim().split(/\s+/g))}function Es(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Er(a)))return!0}return!1});var Bs=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Er(a)))return!1}return!0}),Vs=v(function(e,r){return r.indexOf(e)>-1}),Rs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var js=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Nc(e){return e+""}function Us(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return j;r=10*r+o-48}return i==a?j:N(n==45?-r:r)}function Ns(e){if(e.length===0||/[\sxbo]/.test(e))return j;var r=+e;return r===r?N(r):j}function Hs(e){return Ot(e).join("")}function Gs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ws(e){return Er(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Os(e){return{$:0,a:e}}function qs(e){return{$:1,a:e}}function go(e){return{$:2,b:e}}var Js=go(function(e){return typeof e=="boolean"?Ee(e):Vr("a BOOL",e)}),Ys=go(function(e){return typeof e=="number"?Ee(e):Vr("a FLOAT",e)}),Xs=go(function(e){return typeof e=="string"?Ee(e):e instanceof String?Ee(e+""):Vr("a STRING",e)});function Ks(e){return{$:3,b:e}}var Zs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function dn(e,r){return{$:9,f:e,g:r}}var Qs=v(function(e,r){return{$:10,b:r,h:e}}),ed=v(function(e,r){return dn(e,[r])}),rd=T(function(e,r,n){return dn(e,[r,n])});O(function(e,r,n,a){return dn(e,[r,n,a])});Ve(function(e,r,n,a,i){return dn(e,[r,n,a,i])});gr(function(e,r,n,a,i,o){return dn(e,[r,n,a,i,o])});Wt(function(e,r,n,a,i,o,l){return dn(e,[r,n,a,i,o,l])});be(function(e,r,n,a,i,o,l,c){return dn(e,[r,n,a,i,o,l,c])});mo(function(e,r,n,a,i,o,l,c,u){return dn(e,[r,n,a,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return hr(e,n)}catch(a){return Xe(t(Eo,"This is not valid JSON! "+a.message,Qr(r)))}});var Hc=v(function(e,r){return hr(e,ia(r))});function hr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ee(e.c):Vr("null",r);case 3:return qt(r)?Gc(e.b,r,$):Vr("a LIST",r);case 4:return qt(r)?Gc(e.b,r,nd):Vr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Vr("an OBJECT with a field named `"+n+"`",r);var a=hr(e.b,r[n]);return kr(a)?a:Xe(t(Tu,n,a.a));case 7:var i=e.e;if(!qt(r))return Vr("an ARRAY",r);if(i>=r.length)return Vr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=hr(e.b,r[i]);return kr(a)?a:Xe(t(ku,i,a.a));case 8:if(typeof r!="object"||r===null||qt(r))return Vr("an OBJECT",r);var o=D;for(var l in r)if(r.hasOwnProperty(l)){var a=hr(e.b,r[l]);if(!kr(a))return Xe(t(Tu,l,a.a));o=Br(P(l,a.a),o)}return Ee(rr(o));case 9:for(var c=e.f,u=e.g,m=0;m<u.length;m++){var a=hr(u[m],r);if(!kr(a))return a;c=c(a.a)}return Ee(c);case 10:var a=hr(e.b,r);return kr(a)?hr(e.h(a.a),r):a;case 11:for(var d=D,g=e.g;g.b;g=g.b){var a=hr(g.a,r);if(kr(a))return a;d=Br(a.a,d)}return Xe(ag(rr(d)));case 1:return Xe(t(Eo,e.a,Qr(r)));case 0:return Ee(e.a)}}function Gc(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var l=hr(e,r[o]);if(!kr(l))return Xe(t(ku,o,l.a));i[o]=l.a}return Ee(n(i))}function qt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function nd(e){return t(hg,e.length,function(r){return e[r]})}function Vr(e,r){return Xe(t(Eo,"Expecting "+e,Qr(r)))}function ta(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ta(e.b,r.b);case 6:return e.d===r.d&&ta(e.b,r.b);case 7:return e.e===r.e&&ta(e.b,r.b);case 9:return e.f===r.f&&Wc(e.g,r.g);case 10:return e.h===r.h&&ta(e.b,r.b);case 11:return Wc(e.g,r.g)}}function Wc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!ta(e[a],r[a]))return!1;return!0}var ad=v(function(e,r){return JSON.stringify(ia(r),null,e)+""});function Qr(e){return e}function ia(e){return e}function td(){return[]}function id(){return{}}var od=T(function(e,r,n){return n[e]=ia(r),n});function ld(e){return v(function(r,n){return n.push(ia(e(r))),n})}function Bn(e){return{$:0,a:e}}function cd(e){return{$:1,a:e}}function en(e){return{$:2,b:e,c:null}}var ho=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ud(e){return{$:5,b:e}}var $d=0;function bo(e){var r={$:0,e:$d++,f:e,g:null,h:[]};return xo(r),r}function Oc(e){return en(function(r){r(Bn(bo(e)))})}function qc(e,r){e.h.push(r),xo(e)}var vd=v(function(e,r){return en(function(n){qc(e,r),n(Bn(Wa))})}),_o=!1,Jc=[];function xo(e){if(Jc.push(e),!_o){for(_o=!0;e=Jc.shift();)fd(e);_o=!1}}function fd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,xo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,a){return wo(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function wo(e,r,n,a,i,o){var l=t(Hc,e,Qr(r?r.flags:void 0));kr(l)||aa(2);var c={},u=n(l.a),m=u.a,d=o(p,m),g=md(c,p);function p(f,_){var x=t(a,f,m);d(m=x.a,_),Kc(c,x.b,i(m))}return Kc(c,u.b,i(m)),g?{ports:g}:{}}var Rr={};function md(e,r){var n;for(var a in Rr){var i=Rr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=dd(i,r)}return n}function sd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function dd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,l=e.f;function c(u){return t(ho,c,ud(function(m){var d=m.a;return m.$===0?b(i,n,d,u):o&&l?z(a,n,d.i,d.j,u):b(a,n,o?d.i:d.j,u)}))}return n.h=bo(t(ho,c,e.b))}var pd=v(function(e,r){return en(function(n){e.g(r),n(Bn(Wa))})});v(function(e,r){return t(vd,e.h,{$:0,a:r})});function Yc(e){return function(r){return{$:1,k:e,l:r}}}function gd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Xc=[],yo=!1;function Kc(e,r,n){if(Xc.push({p:e,q:r,r:n}),!yo){yo=!0;for(var a;a=Xc.shift();)hd(a.p,a.q,a.r);yo=!1}}function hd(e,r,n){var a={};Jt(!0,r,a,null),Jt(!1,n,a,null);for(var i in e)qc(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Jt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=bd(e,i,a,r.l);n[i]=_d(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)Jt(e,l.a,n,a);return;case 3:Jt(e,r.o,n,{s:r.n,t:a});return}}function bd(e,r,n,a){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Rr[r].e:Rr[r].f;return t(o,i,a)}function _d(e,r,n){return n=n||{i:D,j:D},e?n.i=Br(r,n.i):n.j=Br(r,n.j),n}function xd(e){Rr[e]&&aa(3)}v(function(e,r){return r});function wd(e,r){return xd(e),Rr[e]={f:yd,u:r,a:Sd},Yc(e)}var yd=v(function(e,r){return function(n){return e(r(n))}});function Sd(e,r){var n=D,a=Rr[e].u,i=Bn(null);Rr[e].b=i,Rr[e].c=T(function(l,c,u){return n=c,i});function o(l){var c=t(Hc,a,Qr(l));kr(c)||aa(4,e,c.a);for(var u=c.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Yt,rn=typeof document!="undefined"?document:{};function So(e,r){e.appendChild(r)}O(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(gn(e,function(){}),i),{}});function Co(e){return{$:0,a:e}}var Zc=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Po(n),e:i,f:e,b:o}})}),nn=Zc(void 0),Cd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Po(n),e:i,f:e,b:o}})}),Ld=Cd(void 0);function Pd(e,r,n,a){return{$:3,d:Po(e),g:r,h:n,i:a}}var zd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return pn([e,r],function(){return e(r)})});T(function(e,r,n){return pn([e,r,n],function(){return t(e,r,n)})});var Md=O(function(e,r,n,a){return pn([e,r,n,a],function(){return b(e,r,n,a)})});Ve(function(e,r,n,a,i){return pn([e,r,n,a,i],function(){return z(e,r,n,a,i)})});gr(function(e,r,n,a,i,o){return pn([e,r,n,a,i,o],function(){return F(e,r,n,a,i,o)})});Wt(function(e,r,n,a,i,o,l){return pn([e,r,n,a,i,o,l],function(){return er(e,r,n,a,i,o,l)})});be(function(e,r,n,a,i,o,l,c){return pn([e,r,n,a,i,o,l,c],function(){return so(e,r,n,a,i,o,l,c)})});mo(function(e,r,n,a,i,o,l,c,u){return pn([e,r,n,a,i,o,l,c,u],function(){return Ga(e,r,n,a,i,o,l,c,u)})});var Qc=v(function(e,r){return{$:"a0",n:e,o:r}}),Td=v(function(e,r){return{$:"a1",n:e,o:r}}),Lo=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function eu(e){return e=="script"?"p":e}function kd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Dd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Fd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function ru(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Ad=v(function(e,r){return r.$==="a0"?t(Qc,r.n,Id(e,r.o)):r});function Id(e,r){var n=Ho(r);return{$:r.$,a:n?b(bg,n<3?Ed:Bd,nr(e),r.a):t(ei,e,r.a)}}var Ed=v(function(e,r){return P(e(r.a),r.b)}),Bd=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function Po(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?nu(r,i,ia(o)):r[i]=ia(o);continue}var l=r[a]||(r[a]={});a==="a3"&&i==="class"?nu(l,i,o):l[i]=o}return r}function nu(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gn(e,r){var n=e.$;if(n===5)return gn(e.k||(e.k=e.m()),r);if(n===0)return rn.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},l=gn(a,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return zo(l,r,e.d),l}var l=e.f?rn.createElementNS(e.f,e.c):rn.createElement(e.c);Yt&&e.c=="a"&&l.addEventListener("click",Yt(l)),zo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)So(l,gn(n===1?c[u]:c[u].b,r));return l}function zo(e,r,n){for(var a in n){var i=n[a];a==="a1"?Vd(e,i):a==="a0"?Ud(e,r,i):a==="a3"?Rd(e,i):a==="a4"?jd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Vd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Rd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function jd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Ud(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=a[i];if(!o){e.removeEventListener(i,l),a[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Nd(r,o),e.addEventListener(i,l,Mo&&{passive:Ho(o)<2}),a[i]=l}}var Mo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Mo=!0}}))}catch{}function Nd(e,r){function n(a){var i=n.q,o=hr(i.a,a);if(!!kr(o)){for(var l=Ho(i),c=o.a,u=l?l<3?c.a:c.aA:c,m=l==1?c.b:l==3&&c.dG,d=(m&&a.stopPropagation(),(l==2?c.b:l==3&&c.dv)&&a.preventDefault(),e),g,p;g=d.j;){if(typeof g=="function")u=g(u);else for(var p=g.length;p--;)u=g[p](u);d=d.p}d(u,m)}}return n.q=r,n}function Hd(e,r){return e.$==r.$&&ta(e.a,r.a)}function au(e,r){var n=[];return Tr(e,r,n,0),n}function Ye(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Tr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Kd(r),o=1;else{Ye(n,0,a,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,m=u===c.length;m&&u--;)m=l[u]===c[u];if(m){r.k=e.k;return}r.k=r.m();var d=[];Tr(e.k,r.k,d,0),d.length>0&&Ye(n,1,a,d);return;case 4:for(var g=e.j,p=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof g!="object"?g=[g,_.j]:g.push(_.j),_=_.k;for(var x=r.k;x.$===4;)f=!0,typeof p!="object"?p=[p,x.j]:p.push(x.j),x=x.k;if(f&&g.length!==p.length){Ye(n,0,a,r);return}(f?!Gd(g,p):g!==p)&&Ye(n,2,a,p),Tr(_,x,n,a+1);return;case 0:e.a!==r.a&&Ye(n,3,a,r.a);return;case 1:tu(e,r,n,a,Wd);return;case 2:tu(e,r,n,a,Od);return;case 3:if(e.h!==r.h){Ye(n,0,a,r);return}var y=To(e.d,r.d);y&&Ye(n,4,a,y);var S=r.i(e.g,r.g);S&&Ye(n,5,a,S);return}}}function Gd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function tu(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ye(n,0,a,r);return}var o=To(e.d,r.d);o&&Ye(n,4,a,o),i(e,r,n,a)}function To(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=To(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Hd(l,c)||(a=a||{},a[i]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Wd(e,r,n,a){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?Ye(n,6,a,{v:c,i:l-c}):l<c&&Ye(n,7,a,{v:l,e:o});for(var u=l<c?l:c,m=0;m<u;m++){var d=i[m];Tr(d,o[m],n,++a),a+=d.b||0}}function Od(e,r,n,a){for(var i=[],o={},l=[],c=e.e,u=r.e,m=c.length,d=u.length,g=0,p=0,f=a;g<m&&p<d;){var _=c[g],x=u[p],y=_.a,S=x.a,w=_.b,C=x.b,I=void 0,J=void 0;if(y===S){f++,Tr(w,C,i,f),f+=w.b||0,g++,p++;continue}var K=c[g+1],G=u[p+1];if(K){var Y=K.a,X=K.b;J=S===Y}if(G){var V=G.a,ne=G.b;I=y===V}if(I&&J){f++,Tr(w,ne,i,f),Oa(o,i,y,C,p,l),f+=w.b||0,f++,qa(o,i,y,X,f),f+=X.b||0,g+=2,p+=2;continue}if(I){f++,Oa(o,i,S,C,p,l),Tr(w,ne,i,f),f+=w.b||0,g+=1,p+=2;continue}if(J){f++,qa(o,i,y,w,f),f+=w.b||0,f++,Tr(X,C,i,f),f+=X.b||0,g+=2,p+=1;continue}if(K&&Y===V){f++,qa(o,i,y,w,f),Oa(o,i,S,C,p,l),f+=w.b||0,f++,Tr(X,ne,i,f),f+=X.b||0,g+=2,p+=2;continue}break}for(;g<m;){f++;var _=c[g],w=_.b;qa(o,i,_.a,w,f),f+=w.b||0,g++}for(;p<d;){var ve=ve||[],x=u[p];Oa(o,i,x.a,x.b,void 0,ve),p++}(i.length>0||l.length>0||ve)&&Ye(n,8,a,{w:i,x:l,y:ve})}var iu="_elmW6BL";function Oa(e,r,n,a,i,o){var l=e[n];if(!l){l={c:0,z:a,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Tr(l.z,a,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Oa(e,r,n+iu,a,i,o)}function qa(e,r,n,a,i){var o=e[n];if(!o){var l=Ye(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Tr(a,o.z,c,i),Ye(r,9,i,{w:c,A:o});return}qa(e,r,n+iu,a,i)}function ou(e,r,n,a){Ja(e,r,n,0,0,r.b,a)}function Ja(e,r,n,a,i,o,l){for(var c=n[a],u=c.r;u===i;){var m=c.$;if(m===1)ou(e,r.k,c.s,l);else if(m===8){c.t=e,c.u=l;var d=c.s.w;d.length>0&&Ja(e,r,d,0,i,o,l)}else if(m===9){c.t=e,c.u=l;var g=c.s;if(g){g.A.s=e;var d=g.w;d.length>0&&Ja(e,r,d,0,i,o,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>o)return a}var p=r.$;if(p===4){for(var f=r.k;f.$===4;)f=f.k;return Ja(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,x=e.childNodes,y=0;y<_.length;y++){i++;var S=p===1?_[y]:_[y].b,w=i+(S.b||0);if(i<=u&&u<=w&&(a=Ja(x[y],S,n,a,i,w,l),!(c=n[a])||(u=c.r)>o))return a;i=w}return a}function lu(e,r,n,a){return n.length===0?e:(ou(e,r,n,a),Xt(e,n))}function Xt(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=qd(i,a);i===e&&(e=o)}return e}function qd(e,r){switch(r.$){case 0:return Jd(e,r.s,r.u);case 4:return zo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Xt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(gn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=Xt(e,n.w),e;case 8:return Yd(e,r);case 5:return r.s(e);default:aa(10)}}function Jd(e,r,n){var a=e.parentNode,i=gn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Yd(e,r){var n=r.s,a=Xd(n.y,r);e=Xt(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:gn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&So(e,a),e}function Xd(e,r){if(!!e){for(var n=rn.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;So(n,o.c===2?o.s:gn(o.z,r.u))}return n}}function ko(e){if(e.nodeType===3)return Co(e.textContent);if(e.nodeType!==1)return Co("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,l=i.value;r=Br(t(Mr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Br(ko(m[a]),u);return b(nn,c,r,u)}function Kd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Zd=O(function(e,r,n,a){return wo(r,a,e.gS,e.ii,e.hX,function(i,o){var l=e.ik,c=a.node,u=ko(c);return cu(o,function(m){var d=l(m),g=au(u,d);c=lu(c,u,g,i),u=d})})});O(function(e,r,n,a){return wo(r,a,e.gS,e.ii,e.hX,function(i,o){var l=e.dE&&e.dE(i),c=e.ik,u=rn.title,m=rn.body,d=ko(m);return cu(o,function(g){Yt=l;var p=c(g),f=nn("body")(D)(p.fU),_=au(d,f);m=lu(m,d,_,i),d=f,Yt=0,u!==p.id&&(rn.title=u=p.id)})})});var Kt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function cu(e,r){r(e);var n=0;function a(){n=n===1?0:(Kt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Kt(a),n=2)}}v(function(e,r){return t(Wo,rt,en(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Wo,rt,en(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Wo,rt,en(function(){history.replaceState({},"",r),e()}))});var Qd={addEventListener:function(){},removeEventListener:function(){}},ep=typeof window!="undefined"?window:Qd;T(function(e,r,n){return Oc(en(function(a){function i(o){bo(n(o))}return e.addEventListener(r,i,Mo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=hr(e,r);return kr(n)?N(n.a):j});function uu(e,r){return en(function(n){Kt(function(){var a=document.getElementById(e);n(a?Bn(r(a)):cd(_g(e)))})})}function rp(e){return en(function(r){Kt(function(){r(Bn(e()))})})}v(function(e,r){return uu(r,function(n){return n[e](),Wa})});v(function(e,r){return rp(function(){return ep.scroll(e,r),Wa})});T(function(e,r,n){return uu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Wa})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var np=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return j}});v(function(e,r){return r.match(e)!==null});var ap=T(function(e,r,n){for(var a=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var m=u.length-1,d=new Array(m);m>0;){var g=u[m];d[--m]=g?N(g):j}a.push(z(Iv,u[0],u.index,i,$(d))),c=r.lastIndex}return r.lastIndex=l,$(a)});O(function(e,r,n,a){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var m=arguments[c];u[--c]=m?N(m):j}return n(z(Iv,l,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;i.push(a.slice(o,c.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=l,$(i)});var tp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/ip(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function ip(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Do=new Float64Array(3),$u=new Float64Array(3),vu=new Float64Array(3),op=T(function(e,r,n){return new Float64Array([e,r,n])}),lp=function(e){return e[0]},cp=function(e){return e[1]},up=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var $p=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function fu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(fu);function mu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Zt(fu(e,r,n),n)}v(mu);function su(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Zt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/su(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var vp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ya=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ya);function Fo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Fo);v(function(e,r){var n,a=Do,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ya(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ya(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ya(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ya(r,a)+e[14])/n,i});var fp=O(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var mp=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},sp=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/dp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function dp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var pp=new Float64Array(16),gp=new Float64Array(16),hp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},bp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function du(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}gr(du);O(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return du(l,c,o,i,n,a)});function pu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(o+i)/(o-i),l[15]=1,l}gr(pu);O(function(e,r,n,a){return pu(e,r,n,a,-1,1)});function gu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],m=e[6],d=e[7],g=e[8],p=e[9],f=e[10],_=e[11],x=e[12],y=e[13],S=e[14],w=e[15],C=r[0],I=r[1],J=r[2],K=r[3],G=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],ve=r[9],xe=r[10],fe=r[11],me=r[12],ye=r[13],se=r[14],Ae=r[15];return n[0]=a*C+c*I+g*J+x*K,n[1]=i*C+u*I+p*J+y*K,n[2]=o*C+m*I+f*J+S*K,n[3]=l*C+d*I+_*J+w*K,n[4]=a*G+c*Y+g*X+x*V,n[5]=i*G+u*Y+p*X+y*V,n[6]=o*G+m*Y+f*X+S*V,n[7]=l*G+d*Y+_*X+w*V,n[8]=a*ne+c*ve+g*xe+x*fe,n[9]=i*ne+u*ve+p*xe+y*fe,n[10]=o*ne+m*ve+f*xe+S*fe,n[11]=l*ne+d*ve+_*xe+w*fe,n[12]=a*me+c*ye+g*se+x*Ae,n[13]=i*me+u*ye+p*se+y*Ae,n[14]=o*me+m*ye+f*se+S*Ae,n[15]=l*me+d*ye+_*se+w*Ae,n}v(gu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],m=e[8],d=e[9],g=e[10],p=e[12],f=e[13],_=e[14],x=r[0],y=r[1],S=r[2],w=r[4],C=r[5],I=r[6],J=r[8],K=r[9],G=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=a*x+l*y+m*S,n[1]=i*x+c*y+d*S,n[2]=o*x+u*y+g*S,n[3]=0,n[4]=a*w+l*C+m*I,n[5]=i*w+c*C+d*I,n[6]=o*w+u*C+g*I,n[7]=0,n[8]=a*J+l*K+m*G,n[9]=i*J+c*K+d*G,n[10]=o*J+u*K+g*G,n[11]=0,n[12]=a*Y+l*X+m*V+p,n[13]=i*Y+c*X+d*V+f,n[14]=o*Y+u*X+g*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Zt(r,Do);var a=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=i*a*c+o*u,n[2]=o*a*c-i*u,n[3]=0,n[4]=a*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+a*u,n[7]=0,n[8]=a*o*c+i*u,n[9]=i*o*c-a*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/su(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),m=1-u,d=Math.sin(e),g=o*d,p=l*d,f=c*d,_=o*l*m,x=o*c*m,y=l*c*m,S=o*o*m+u,w=_+f,C=x-p,I=_-f,J=l*l*m+u,K=y+g,G=x+p,Y=y-g,X=c*c*m+u,V=n[0],ne=n[1],ve=n[2],xe=n[3],fe=n[4],me=n[5],ye=n[6],se=n[7],Ae=n[8],Te=n[9],Je=n[10],An=n[11],Ua=n[12],Xr=n[13],Kr=n[14],na=n[15];return a[0]=V*S+fe*w+Ae*C,a[1]=ne*S+me*w+Te*C,a[2]=ve*S+ye*w+Je*C,a[3]=xe*S+se*w+An*C,a[4]=V*I+fe*J+Ae*K,a[5]=ne*I+me*J+Te*K,a[6]=ve*I+ye*J+Je*K,a[7]=xe*I+se*J+An*K,a[8]=V*G+fe*Y+Ae*X,a[9]=ne*G+me*Y+Te*X,a[10]=ve*G+ye*Y+Je*X,a[11]=xe*G+se*Y+An*X,a[12]=Ua,a[13]=Xr,a[14]=Kr,a[15]=na,a});function _p(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(_p);O(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function xp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(xp);O(function(e,r,n,a){var i=new Float64Array(16),o=a[0],l=a[1],c=a[2],u=a[3],m=a[4],d=a[5],g=a[6],p=a[7],f=a[8],_=a[9],x=a[10],y=a[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=m,i[5]=d,i[6]=g,i[7]=p,i[8]=f,i[9]=_,i[10]=x,i[11]=y,i[12]=o*e+m*r+f*n+a[12],i[13]=l*e+d*r+_*n+a[13],i[14]=c*e+g*r+x*n+a[14],i[15]=u*e+p*r+y*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],m=r[3],d=r[4],g=r[5],p=r[6],f=r[7],_=r[8],x=r[9],y=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=m,n[4]=d,n[5]=g,n[6]=p,n[7]=f,n[8]=_,n[9]=x,n[10]=y,n[11]=S,n[12]=l*a+d*i+_*o+r[12],n[13]=c*a+g*i+x*o+r[13],n[14]=u*a+p*i+y*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=mu(e,r,Do),i=Zt(Fo(n,a,$u),$u),o=Zt(Fo(a,i,vu),vu),l=pp,c=gp;return l[0]=i[0],l[1]=o[0],l[2]=a[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=a[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,gu(l,c)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var hu=0;function Xa(e,r){for(;r.b;r=r.b)e(r.a)}function Ao(e){for(var r=0;e.b;e=e.b)r++;return r}var wp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},yp=Ve(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),Sp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Cp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Lp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Pp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),zp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Mp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Tp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),kp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Dp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Fp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ap=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Ip=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},bu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},_u=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ep=function(e){e.gl.disable(e.gl.CULL_FACE)},Bp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Vp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Rp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},xu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],jp=[Fp,Ap,Ip,bu,_u,Ep,Bp,Vp,Rp];function wu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Up(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function yu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Np(e,r,n,a){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(f,_,x,y,S){var w;if(i===1)for(w=0;w<_;w++)f[x++]=_===1?y[S]:y[S][w];else o.forEach(function(C){for(w=0;w<_;w++)f[x++]=_===1?y[C][S]:y[C][S][w]})}var u=yu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,d=u.size*u.arraySize*i,g=new u.type(Ao(n.b)*d);Xa(function(f){c(g,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=d},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,g,e.STATIC_DRAW),p}function Hp(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Gp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Ao(r.b),indexBuffer:null,buffers:{}}}function Gp(e,r){var n=new Uint32Array(Ao(e)*r),a=0,i;return Xa(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function Su(e,r){return e+"#"+r}var Cu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),bu(n),_u(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=Su(o.b.id,o.c.id),c=n.programs[l]),!c){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=hu++,m||(m=wu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var d;o.c.id?d=n.shaders[o.c.id]:o.c.id=hu++,d||(d=wu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=d);var g=Up(a,m,d);c={glProgram:g,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Wp(a,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var p=a.getProgramParameter(g,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var f=a.getActiveAttrib(g,u),_=a.getAttribLocation(g,f.name);c.activeAttributes.push(f),c.activeAttributeLocations.push(_)}l=Su(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Op(c.uniformSetters,o.e);var x=n.buffers.get(o.d);for(x||(x=Hp(a,o.d),n.buffers.set(o.d,x)),u=0;u<c.activeAttributes.length;u++){f=c.activeAttributes[u],_=c.activeAttributeLocations[u],x.buffers[f.name]===void 0&&(x.buffers[f.name]=Np(a,f,o.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,x.buffers[f.name]);var y=yu(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,w,S*C)}for(n.toggle=!n.toggle,Xa(q_(n),o.a),u=0;u<xu.length;u++){var I=n[xu[u]];I.toggle!==n.toggle&&I.enabled&&(jp[u](n),I.enabled=!1,I.toggle=n.toggle)}x.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,x.indexBuffer),a.drawElements(o.d.a.eS,x.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,x.numIndices)}}return Xa(i,e.g),r});function Wp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(f,_){var x=_.name,y=e.getUniformLocation(f,x);switch(_.type){case e.INT:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};case e.FLOAT:return function(w){o[x]!==w&&(e.uniform1f(y,w),o[x]=w)};case e.FLOAT_VEC2:return function(w){o[x]!==w&&(e.uniform2f(y,w[0],w[1]),o[x]=w)};case e.FLOAT_VEC3:return function(w){o[x]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),o[x]=w)};case e.FLOAT_VEC4:return function(w){o[x]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),o[x]=w)};case e.FLOAT_MAT4:return function(w){o[x]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),o[x]=w)};case e.SAMPLER_2D:var S=l++;return function(w){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(w);C||(C=w.ge(e),c.textures.set(w,C)),e.bindTexture(e.TEXTURE_2D,C),o[x]!==w&&(e.uniform1i(y,S),o[x]=w)};case e.BOOL:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};default:return function(){}}}for(var m={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),g=0;g<d;g++){var p=e.getActiveUniform(i,g);m[a[p.name]||p.name]=u(i,p)}return m}function Op(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var qp=T(function(e,r,n){return Pd(r,{g:n,f:{},h:e},eg,rg)}),Jp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Yp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Xp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Kp=v(function(e,r){e.contextAttributes.antialias=!0}),Zp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Qp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function eg(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Xa(function(i){return t(O_,r,i)},e.h);var n=rn.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),wp(function(){return t(Cu,e,n)})):(n=rn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function rg(e,r){return r.f=e.f,Cu(r)}var M=vs,Qt=cs,Lu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(l,c){if(l.$){var m=l.a;return b(Qt,e,c,m)}else{var u=l.a;return b(Qt,o,c,u)}});return b(Qt,o,b(Qt,e,r,i),a)}),Io=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,l=n.e,c=e,u=b(e,a,i,b(Io,e,r,l)),m=o;e=c,r=u,n=m;continue e}}),Pu=function(e){return b(Io,T(function(r,n,a){return t(M,P(r,n),a)}),D,e)},zu=1,ng=2,Mu=0,Xe=function(e){return{$:1,a:e}},Eo=v(function(e,r){return{$:3,a:e,b:r}}),Tu=v(function(e,r){return{$:0,a:e,b:r}}),ku=v(function(e,r){return{$:1,a:e,b:r}}),Ee=function(e){return{$:0,a:e}},ag=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},j={$:1},tg=Bs,ig=ad,k=Nc,ee=v(function(e,r){return t(Fs,e,Ot(r))}),Bo=v(function(e,r){return $(t(Ds,e,r))}),Du=function(e){return t(ee,`
    `,t(Bo,`
`,e))},Ie=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,l=t(e,a,r),c=i;e=o,r=l,n=c;continue e}else return r}),Vn=function(e){return b(Ie,v(function(r,n){return n+1}),0,e)},og=fs,lg=T(function(e,r,n){e:for(;;)if($e(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),jr=v(function(e,r){return b(lg,e,r,D)}),Fu=v(function(e,r){return b(og,e,t(jr,0,Vn(r)-1),r)}),Ur=Gs,Au=function(e){var r=Ur(e);return 97<=r&&r<=122},Iu=function(e){var r=Ur(e);return r<=90&&65<=r},cg=function(e){return Au(e)||Iu(e)},ug=function(e){var r=Ur(e);return r<=57&&48<=r},$g=function(e){return Au(e)||Iu(e)||ug(e)},rr=function(e){return b(Ie,M,D,e)},oa=zs,vg=v(function(e,r){return`

(`+(k(e+1)+(") "+Du(fg(r))))}),fg=function(e){return t(mg,e,D)},mg=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var x=oa(n);if(x.$===1)return!1;var y=x.a,S=y.a,w=y.b;return cg(S)&&t(tg,$g,w)}(),o=i?"."+n:"['"+(n+"']"),l=a,c=t(M,o,r);e=l,r=c;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),l=a,c=t(M,m,r);e=l,r=c;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var g=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",rr(r)):"Json.Decode.oneOf"}(),_=g+(" failed in the following "+(k(Vn(d))+" ways:"));return t(ee,`

`,t(M,_,t(Fu,vg,d)))}else{var a=d.a,l=a,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",rr(r)):"!"}();default:var p=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",rr(r))+`:

    `):`Problem with the given value:

`}();return _+(Du(t(ig,4,f))+(`

`+p))}}),vr=32,Vo=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ro=as,Ka=xs,jo=v(function(e,r){return Uc(r)/Uc(e)}),Za=bs,Qa=Ka(t(jo,2,vr)),Eu=z(Vo,0,Qa,Ro,Ro),Bu=is,Vu=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Ru=ws,Uo=ts,br=v(function(e,r){return $e(e,r)>0?e:r}),sg=function(e){return{$:0,a:e}},No=os,dg=v(function(e,r){e:for(;;){var n=t(No,vr,e),a=n.a,i=n.b,o=t(M,sg(a),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return rr(o)}}),ju=function(e){var r=e.a;return r},pg=v(function(e,r){e:for(;;){var n=Ka(r/vr);if(n===1)return t(No,vr,e).a;var a=t(dg,e,D),i=n;e=a,r=i;continue e}}),Uu=v(function(e,r){if(r.n){var n=r.n*vr,a=Ru(t(jo,vr,n-1)),i=e?rr(r.C):r.C,o=t(pg,i,r.n);return z(Vo,Uo(r.r)+n,t(br,5,a*Qa),o,r.r)}else return z(Vo,Uo(r.r),Qa,Ro,r.r)}),gg=Ve(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Uu,!1,{C:a,n:n/vr|0,r:i});var o=Vu(b(Bu,vr,r,e)),l=e,c=r-vr,u=n,m=t(M,o,a),d=i;e=l,r=c,n=u,a=m,i=d;continue e}}),hg=v(function(e,r){if(e<=0)return Eu;var n=e%vr,a=b(Bu,n,e-n,r),i=e-n-vr;return F(gg,r,i,e,D,a)}),kr=function(e){return!e.$},W=Qs,_e=Js,H=Zs,Re=Ys,Nu=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),ei=ed,bg=rd,nr=Os,Ho=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},_g=Dr,Hu=gr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),xg=Vs,Rn=Ms,la=As,et=v(function(e,r){return e<1?r:b(la,e,Rn(r),r)}),ri=js,ni=function(e){return e===""},ai=v(function(e,r){return e<1?"":b(la,0,e,r)}),Gu=Us,Wu=Ve(function(e,r,n,a,i){if(ni(i)||t(xg,"@",i))return j;var o=t(ri,":",i);if(o.b){if(o.b.b)return j;var l=o.a,c=Gu(t(et,l+1,i));if(c.$===1)return j;var u=c;return N(er(Hu,e,t(ai,l,i),u,r,n,a))}else return N(er(Hu,e,i,j,r,n,a))}),Ou=O(function(e,r,n,a){if(ni(a))return j;var i=t(ri,"/",a);if(i.b){var o=i.a;return F(Wu,e,t(et,o,a),r,n,t(ai,o,a))}else return F(Wu,e,"/",r,n,a)}),qu=T(function(e,r,n){if(ni(n))return j;var a=t(ri,"?",n);if(a.b){var i=a.a;return z(Ou,e,N(t(et,i+1,n)),r,t(ai,i,n))}else return z(Ou,e,j,r,n)});v(function(e,r){if(ni(r))return j;var n=t(ri,"#",r);if(n.b){var a=n.a;return b(qu,e,N(t(et,a+1,r)),t(ai,a,r))}else return b(qu,e,j,r)});var wg=Rs,rt=function(e){},nt=Bn,yg=nt(0),Ju=O(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,m=c.b;if(m.b){var d=m.a,g=m.b,p=n>500?b(Ie,e,r,rr(g)):z(Ju,e,r,n+1,g);return t(e,i,t(e,l,t(e,u,t(e,d,p))))}else return t(e,i,t(e,l,t(e,u,r)))}else return t(e,i,t(e,l,r))}else return t(e,i,r)}else return r}),He=T(function(e,r,n){return z(Ju,e,r,0,n)}),q=v(function(e,r){return b(He,v(function(n,a){return t(M,e(n),a)}),D,r)}),ti=ho,Go=v(function(e,r){return t(ti,function(n){return nt(e(n))},r)}),Sg=T(function(e,r,n){return t(ti,function(a){return t(ti,function(i){return nt(t(e,a,i))},n)},r)}),Cg=function(e){return b(He,Sg(M),nt(D),e)},Lg=pd,Pg=v(function(e,r){var n=r;return Oc(t(ti,Lg(e),n))}),zg=T(function(e,r,n){return t(Go,function(a){return 0},Cg(t(q,Pg(e),r)))}),Mg=T(function(e,r,n){return nt(0)}),Tg=v(function(e,r){var n=r;return t(Go,e,n)});Rr.Task=sd(yg,zg,Mg,Tg);var kg=Yc("Task"),Wo=v(function(e,r){return kg(t(Go,e,r))}),Dg=Zd,Fg=Ls,ii={$:1},Yu=function(e){return{$:2,a:e}},Oo={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),Ge=T(function(e,r,n){return r(e(n))}),jn=function(e){var r=e.b.s;return r.a},Ag=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return N(t(_r,r,{s:o,an:l,X:t(M,a,n)}))}else return j},Ce=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ig=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dH;return($e(o+r.gp,jn(n).d1)>0?t(Ge,Ag,Ce(t(_r,ii,i))):Dr)(t(_r,Yu({dH:o+r.gp}),i));default:var l=i.s,c=l.a,u=l.b,m=t(Nu,c.gb,ke(r,{d1:c.d1+r.gp})),d=t(e,m,u);return t(_r,Oo,{s:P(m,d),an:D,X:t(M,i.s,i.X)})}}),Xu=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),Eg=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,l=i,c=t(M,a,n);e=o,r=l,n=c;continue e}else return n}}),Bg=v(function(e,r){return rr(b(Eg,e,r,D))}),Ku=T(function(e,r,n){if(r<=0)return D;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,o=i.b,l=o.a;return $([w,l]);case 3:if(a.b.b.b.b){var c=a.b,w=c.a,u=c.b,l=u.a,m=u.b,d=m.a;return $([w,l,d])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var g=a.b,w=g.a,p=g.b,l=p.a,f=p.b,d=f.a,_=f.b,x=_.a,y=_.b;return e>1e3?t(M,w,t(M,l,t(M,d,t(M,x,t(Bg,r-4,y))))):t(M,w,t(M,l,t(M,d,t(M,x,b(Ku,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return $([w])}}),Vg=v(function(e,r){return b(Ku,0,e,r)}),Rg=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=U(rr(n),U($([a]),i)),l=t(Vg,e,o),c=t(Xu,e,o);if(c.b){var u=c.a,m=c.b;return t(_r,ii,{s:u,an:m,X:rr(l)})}else{var d=rr(l);if(d.b){var g=d.a,p=d.b;return t(_r,ii,{s:g,an:D,X:p})}else return r}}),jg=function(e){var r=e.b;return t(_r,ii,r)},Ug=function(e){var r=e.b;return t(_r,Yu({dH:jn(e).d1}),r)},Ng=function(e){var r=e.b;return t(_r,Oo,r)},Hg=v(function(e,r){switch(e.$){case 1:return jg(r);case 2:return Ng(r);case 3:return Ug(r);default:var n=e.a;return t(Rg,n,r)}}),oi=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Gg=v(function(e,r){return ke(r,{aN:e(r.aN)})}),Wg=function(e){return{$:3,a:e}},Zu=function(e){return{$:2,a:e}},Qu=v(function(e,r){return{$:0,a:e,b:r}}),e$=v(function(e,r){return{$:1,a:e,b:r}}),De=v(function(e,r){if(r.$)return j;var n=r.a;return N(e(n))}),de=function(e){return e<0?-e:e},r$=Ns,Og=T(function(e,r,n){return t(Ce,0/0,r$(t(e,r,n)))}),at=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),qg=ks,n$=function(e){return b(qg,M,D,e)},Jg=v(function(e,r){var n=t(at,function(a){return a!=="0"&&a!=="."},n$(r));return U(e&&n?"-":"",r)}),ae=Nc,qo=Ps,a$=Ws,t$=function(e){var r=e.a,n=e.b;if(r==="9"){var a=oa(n);if(a.$===1)return"01";var i=a.a;return t(qo,"0",t$(i))}else{var o=Ur(r);return o>=48&&o<57?t(qo,a$(o+1),n):"0"}},Jo=_s,Yg=Cs,li=function(e){return t(qo,e,"")},i$=T(function(e,r,n){return e<=0?n:b(i$,e>>1,U(r,r),e&1?U(n,r):n)}),tt=v(function(e,r){return b(i$,e,r,"")}),Yo=T(function(e,r,n){return U(n,t(tt,e-Rn(n),li(r)))}),Xo=Ts,o$=function(e){var r=t(Bo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Xg=function(e){var r=t(Bo,"e",ae(de(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Ce,0,Gu(t(wg,"+",i)?t(et,1,i):i)),l=o$(n),c=l.a,u=l.b,m=U(c,u),d=o<0?t(Ce,"0",t(De,function(g){var p=g.a,f=g.b;return p+("."+f)},t(De,oi(li),oa(U(t(tt,de(o),"0"),m))))):b(Yo,o+1,"0",m);return U(e<0?"-":"",d)}else{var n=r.a;return U(e<0?"-":"",n)}else return""},Kg=T(function(e,r,n){if(Jo(n)||Yg(n))return ae(n);var a=n<0,i=o$(Xg(de(n))),o=i.a,l=i.b,c=Rn(o)+r,u=U(t(tt,-c+1,"0"),b(Yo,c,"0",U(o,l))),m=Rn(u),d=t(br,1,c),g=t(e,a,b(la,d,m,u)),p=b(la,0,d,u),f=g?Xo(t(Ce,"1",t(De,t$,oa(Xo(p))))):p,_=Rn(f),x=f==="0"?f:r<=0?U(f,t(tt,de(r),"0")):$e(r,Rn(l))<0?b(la,0,_-r,f)+("."+b(la,_-r,_,f)):U(o+".",b(Yo,r,"0",l));return t(Jg,a,x)}),l$=Kg(v(function(e,r){var n=oa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Ur(i))})),Zg=Og(l$),Qg=T(function(e,r,n){var a=t(jo,10,de(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(Zg,i,n)}),c$=$s,ca=v(function(e,r){e:for(;;){if(r.$===-2)return j;var n=r.b,a=r.c,i=r.d,o=r.e,l=t(c$,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return N(a);default:var c=e,u=o;e=c,r=u;continue e}}}),te=Ve(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Nr={$:-2},ua=Ve(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,d=a.c,g=a.d,p=a.e;return F(te,0,r,n,F(te,1,m,d,g,p),F(te,1,o,l,c,u))}else return F(te,e,o,l,F(te,0,r,n,a,c),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,d=a.c,f=a.d;f.a;var _=f.b,x=f.c,y=f.d,S=f.e,p=a.e;return F(te,0,m,d,F(te,1,_,x,y,S),F(te,1,r,n,p,i))}else return F(te,e,r,n,a,i)}),Ko=T(function(e,r,n){if(n.$===-2)return F(te,0,e,r,Nr,Nr);var a=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=t(c$,e,i);switch(u){case 0:return F(ua,a,i,o,b(Ko,e,r,l),c);case 1:return F(te,a,i,r,l,c);default:return F(ua,a,i,o,l,b(Ko,e,r,c))}}),$a=T(function(e,r,n){var a=b(Ko,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,l=a.d,c=a.e;return F(te,1,i,o,l,c)}else{var u=a;return u}}),e0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},u$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,m=e.e;m.a;var d=m.b,g=m.c,p=m.d;p.a;var f=p.b,_=p.c,x=p.d,y=p.e,S=m.e;return F(te,0,f,_,F(te,1,n,a,F(te,0,o,l,c,u),x),F(te,1,d,g,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,l=w.c,c=w.d,u=w.e,C=e.e;C.a;var d=C.b,g=C.c,p=C.d,S=C.e;return F(te,1,n,a,F(te,0,o,l,c,u),F(te,0,d,g,p,S))}else return e},$$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,m=c.c,d=c.d,g=c.e,p=i.e,f=e.e;f.a;var _=f.b,x=f.c,y=f.d,S=f.e;return F(te,0,o,l,F(te,1,u,m,d,g),F(te,1,n,a,p,F(te,0,_,x,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,l=w.c,C=w.d,p=w.e,I=e.e;I.a;var _=I.b,x=I.c,y=I.d,S=I.e;return F(te,1,n,a,F(te,0,o,l,C,p),F(te,0,_,x,y,S))}else return e},r0=Wt(function(e,r,n,a,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,m=o.d,d=o.e;return F(te,n,c,u,m,F(te,0,a,i,d,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var g=l.d;return g.a,$$(r)}else break e;else return l.a,l.d,$$(r);else break e;return r}}),ci=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(te,r,n,a,ci(i),c);var u=u$(e);if(u.$===-1){var m=u.a,d=u.b,g=u.c,p=u.d,f=u.e;return F(ua,m,d,g,ci(p),f)}else return Nr}else return F(te,r,n,a,ci(i),c)}else return Nr},it=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if($e(e,a)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(te,n,a,i,t(it,e,o),l);var u=u$(r);if(u.$===-1){var m=u.a,d=u.b,g=u.c,p=u.d,f=u.e;return F(ua,m,d,g,t(it,e,p),f)}else return Nr}else return F(te,n,a,i,t(it,e,o),l);else return t(n0,e,so(r0,e,r,n,a,i,o,l))}),n0=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(le(e,a)){var c=e0(l);if(c.$===-1){var u=c.b,m=c.c;return F(ua,n,u,m,o,ci(l))}else return Nr}else return F(ua,n,a,i,o,t(it,e,l))}else return Nr}),a0=v(function(e,r){var n=t(it,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,l=n.e;return F(te,1,a,i,o,l)}else{var c=n;return c}}),ui=T(function(e,r,n){var a=r(t(ca,e,n));if(a.$)return t(a0,e,n);var i=a.a;return b($a,e,i,n)}),t0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(ui,r,De(function(a){if(a.$===1){var i=a.a,o=i.a,l=i.b;return t(e$,P(o,l),n)}else return a}));case 0:var r=e.a,n=e.b;return t(ui,r,De(function(a){if(a.$)return a;var i=a.a,o=i.a,l=i.b;return t(Qu,P(o,l),b(Qg,o,l,n))}));case 3:var r=e.a,n=e.b;return t(ui,r,De(function(a){return a.$===3?Wg(n):a}));default:var r=e.a,n=e.b;return t(ui,r,De(function(a){return a.$===2?Zu(n):a}))}},i0=function(e){return Gg(t0(e))},o0=v(function(e,r){return t(q,i0(e),r)}),l0=v(function(e,r){return ke(r,{gb:t(o0,e,r.gb)})}),c0=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,ke(a,{s:t(oi,l0(e),a.s)}))}),Zo=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),u0=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,ke(i,{s:t(Zo,t(e,o.a,r),o)}))}),$0=O(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ke(a,{bw:!a.bw});case 2:var i=n.a;return ke(a,{R:b(Ig,e,i,a.R)});case 3:var o=n.a;return ke(a,{bp:o});case 4:var l=n.a;return ke(a,{R:t(c0,l,a.R)});case 5:var c=n.a;return ke(a,{R:b(u0,r,c,a.R)});default:var u=n.a;return ke(a,{R:t(Hg,u,a.R)})}}),v0=v(function(e,r){return t(_r,Oo,{s:P(e,r(e)),an:D,X:D})}),f0=gd,v$=f0(D),m0=function(e){return{$:2,a:e}},$i=Ks,va=Xs,s0=wd("tick",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({d1:l,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(g){return nr({fJ:g,gd:d,d4:m,go:u,g4:c,hr:l,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",$i(va)))},t(H,"left",_e))},t(H,"pressedKeys",$i(va)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:c,hy:l,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re))))),d0=function(e){return e.dN,s0(m0)},p0=function(e){return{$:5,a:e}},g0={$:0},vi=v(function(e,r){return e}),h0=function(e){var r=e.b.s;return r.b},b0=function(e){return{$:1,a:e}},_0=b0,f$=function(e){return{$:8,a:e}},pe=f$,ot=function(e){return{$:0,a:e}},lt=T(function(e,r,n){return e(r(n))}),x0=t(lt,ot,vi),hn=x0,Le=function(e){return{$:1,a:e}},an=Le,m$=v(function(e,r){return{$:9,a:e,b:r}}),Un={$:0},s$=v(function(e,r){return r.$===3?Un:t(m$,e,r)}),Qo=function(e){return t(s$,4,e)},s={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},el=Qr,xr=v(function(e,r){return t(Lo,e,el(r))}),wr=xr("className"),fr=function(e){return Le(wr(e))},d$=v(function(e,r){return{$:2,a:e,b:r}}),w0=v(function(e,r){return{$:1,a:e,b:r}}),Oe=function(e){return{$:0,a:e}},mr=2,y0={$:0},Nn=y0,S0={$:0},C0=s.fK+(" "+s.aw),L0=s.fK+(" "+s.gC),P0=s.fK+(" "+s.eY),z0=s.fK+(" "+s.eZ),M0=s.fK+(" "+s.af),T0=s.fK+(" "+s.hL),k0=function(e){switch(e){case 0:return M0;case 1:return C0;case 2:return T0;case 3:return L0;case 4:return z0;default:return P0}},p$=function(e){return{$:1,a:e}},Hn={$:0},rl=function(e){return{$:1,a:e}},g$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return U(n,e);case 2:var a=r.a;return U(e,a);default:var n=r.a,a=r.b;return U(n,U(e,a))}}),h$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return U(t(q,function(o){return P(e,o)},a),r);case 2:var i=n.a;return U(r,t(q,function(o){return P(e,o)},i));default:var a=n.a,i=n.b;return U(t(q,function(o){return P(e,o)},a),U(r,t(q,function(o){return P(e,o)},i)))}}),fi=4,D0=function(e){return{$:0,a:e}},F0=function(e){return{$:1,a:e}},ce=function(e){return e>31?F0(1<<e-32):D0(1<<e)},b$=ce(41),_$=ce(40),x$=ce(42),w$=ce(43),fa=nn("div"),nl=Nr,y$=nl,Hr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Hr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Hr(i))}},Pe=ys,Fe=function(e){return k(Pe(e*255))},al=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(Fe(n)+("-"+(Fe(a)+("-"+Fe(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,d=m.a,g=m.b,p=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d;return N("tfrm-"+(Fe(l)+("-"+(Fe(c)+("-"+(Fe(u)+("-"+(Fe(d)+("-"+(Fe(g)+("-"+(Fe(p)+("-"+(Fe(_)+("-"+(Fe(x)+("-"+(Fe(y)+("-"+Fe(S))))))))))))))))))))}},ct=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var l=e.a;return"grid-rows-"+(t(ee,"-",t(q,Hr,l.hB))+("-cols-"+(t(ee,"-",t(q,Hr,l.ak))+("-space-x-"+(Hr(l.hP.a)+("-space-y-"+Hr(l.hP.b)))))));case 9:var c=e.a;return"gp grid-pos-"+(k(c.af)+("-"+(k(c.ga)+("-"+(k(c.im)+("-"+k(c.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(q,function(d){var g=ct(d);if(g==="")return"";var p=g;return p+("-"+r)},m));default:var o=e.a;return t(Ce,"",al(o))}},A0=v(function(e,r){var n=r;return b($a,e,0,n)}),I0=v(function(e,r){var n=t(ca,e,r);return!n.$}),E0=v(function(e,r){var n=r;return t(I0,e,n)}),S$=v(function(e,r){var n=r.a,a=r.b,i=ct(e);return t(E0,i,n)?r:P(t(A0,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ut=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},B0=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),Gr=v(function(e,r){return b(He,B0(e),D,r)}),ma=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Pe(r*255))+(","+k(Pe(n*255))+(","+k(Pe(a*255))+(","+(ae(i)+")")))))},tl=function(e){return t(ee," ",t(Gr,Dr,$([e.ej?N("inset"):j,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(ma(e.b6))])))},C$=function(e){return $([t(ut,L(s.ea)+":focus-within",t(Gr,Dr,$([t(De,function(r){return t(re,"border-color",ma(r))},e.fW),t(De,function(r){return t(re,"background-color",ma(r))},e.fO),t(De,function(r){return t(re,"box-shadow",tl({a2:r.a2,b6:r.b6,ej:!1,eV:t(Zo,Za,t(oi,Za,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))]))),t(ut,L(s.fK)+":focus .focusable, "+(L(s.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(s.fK)+" .focusable-thumb"))),t(Gr,Dr,$([t(De,function(r){return t(re,"border-color",ma(r))},e.fW),t(De,function(r){return t(re,"background-color",ma(r))},e.fO),t(De,function(r){return t(re,"box-shadow",tl({a2:r.a2,b6:r.b6,ej:!1,eV:t(Zo,Za,t(oi,Za,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))])))])},Wr=function(e){return nn(eu(e))},L$=v(function(e,r){return t(Lo,Dd(e),ru(r))}),il=v(function(e,r){return{$:2,a:e,b:r}}),ol=function(e){return{$:6,a:e}},R=v(function(e,r){return{$:1,a:e,b:r}}),sr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),V0=v(function(e,r){return{$:3,a:e,b:r}}),P$=$([0,1,2,3,4,5]),R0=v(function(e,r){return r.b?b(He,M,r,e):e}),ar=function(e){return b(He,R0,D,e)},sa=v(function(e,r){return ar(t(q,e,r))}),j0=function(e){switch(e){case 0:return L(s.gc);case 1:return L(s.b9);case 2:return L(s.cb);case 3:return L(s.bt);case 4:return L(s.ca);default:return L(s.ax)}},mi=function(e){switch(e){case 0:return L(s.fH);case 1:return L(s.fA);case 2:return L(s.dY);case 3:return L(s.dX);case 4:return L(s.fB);default:return L(s.fC)}},$t=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,j0(n),i),t(R,L(s.fK),$([t(A,mi(n),o)]))])};return ol(t(sa,r,P$))},z$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,L(s.cZ),$([t(h,"z-index","0"),t(R,L(s.fQ),$([t(h,"z-index","-1")]))])),t(A,L(s.hG),$([t(R,L(s.Y),$([t(A,L(s.c$),$([t(h,"flex-grow","0")])),t(A,L(s.dP),$([t(h,"align-self","auto !important")]))]))])),t(R,L(s.c_),$([t(h,"height","auto")])),t(R,L(s.c$),$([t(h,"flex-grow","100000")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(R,L(s.fv),$([t(h,"width","100%")])),t(R,L(s.dO),$([t(h,"align-self","flex-start")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(R,L(s.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),U0=function(e){var r=function(n){return $([t(R,L(s.fK),$([t(A,mi(n),e(n))]))])};return ol(t(sa,r,P$))},N0=function(){return $([0,1,2,3,4,5])}(),H0=$([t(sr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(sr,U(L(s.fK),U(L(s.hL),L(s.gN))),$([t(h,"display","block"),t(A,L(s.c$),$([t(R,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,L(s.dP),$([t(R,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(sr,L(s.fK)+":focus",$([t(h,"outline","none")])),t(sr,L(s.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,U(L(s.fK),L(s.c$)),$([t(h,"height","100%"),t(R,L(s.c$),$([t(h,"height","100%")]))])),t(R,L(s.gP),$([t(A,L(s.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(sr,L(s.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,L(s.hL),z$),ol(function(e){return t(q,e,N0)}(function(e){switch(e){case 0:return t(A,L(s.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(R,L(s.c$),$([t(h,"height","auto")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,L(s.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")])),t(R,L(s.c$),$([t(h,"height","auto")]))]));case 2:return t(A,L(s.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,L(s.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,L(s.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,L(s.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(sr,L(s.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,L(s.dQ),$([t(h,"flex-wrap","wrap")])),t(A,L(s.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,L(s.gf),$([t(h,"cursor","pointer")])),t(A,L(s.gg),$([t(h,"cursor","text")])),t(A,L(s.hn),$([t(h,"pointer-events","none !important")])),t(A,L(s.b4),$([t(h,"pointer-events","auto !important")])),t(A,L(s.a$),$([t(h,"opacity","0")])),t(A,L(s.aU),$([t(h,"opacity","1")])),t(A,L(U(s.gK,s.a$))+":hover",$([t(h,"opacity","0")])),t(A,L(U(s.gK,s.aU))+":hover",$([t(h,"opacity","1")])),t(A,L(U(s.gx,s.a$))+":focus",$([t(h,"opacity","0")])),t(A,L(U(s.gx,s.aU))+":focus",$([t(h,"opacity","1")])),t(A,L(U(s.cL,s.a$))+":active",$([t(h,"opacity","0")])),t(A,L(U(s.cL,s.aU))+":active",$([t(h,"opacity","1")])),t(A,L(s.fj),$([t(h,"transition",t(ee,", ",t(q,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,L(s.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,L(s.hE),$([t(h,"overflow-x","auto"),t(A,L(s.af),$([t(h,"flex-shrink","1")]))])),t(A,L(s.hF),$([t(h,"overflow-y","auto"),t(A,L(s.aw),$([t(h,"flex-shrink","1")])),t(A,L(s.hL),$([t(h,"flex-shrink","1")]))])),t(A,L(s.f7),$([t(h,"overflow","hidden")])),t(A,L(s.f8),$([t(h,"overflow-x","hidden")])),t(A,L(s.f9),$([t(h,"overflow-y","hidden")])),t(A,L(s.dO),$([t(h,"width","auto")])),t(A,L(s.b1),$([t(h,"border-width","0")])),t(A,L(s.fX),$([t(h,"border-style","dashed")])),t(A,L(s.fY),$([t(h,"border-style","dotted")])),t(A,L(s.fZ),$([t(h,"border-style","solid")])),t(A,L(s.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,L(s.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,L(s.hL),z$),t(A,L(s.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(R,L(s.fK),$([t(h,"flex-basis","0%"),t(A,L(s.fu),$([t(h,"flex-basis","auto")])),t(A,L(s.et),$([t(h,"flex-basis","auto")]))])),t(R,L(s.c$),$([t(h,"align-self","stretch !important")])),t(R,L(s.ef),$([t(h,"align-self","stretch !important")])),t(R,L(s.dP),$([t(h,"flex-grow","100000")])),t(R,L(s.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(R,"u:first-of-type."+s.fG,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fB),$([t(h,"margin-left","auto !important")]))])),t(R,"s:last-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fB),$([t(h,"margin-right","auto !important")]))])),t(R,"s:only-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fG+(" ~ s."+s.fE)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return P($([t(h,"justify-content","flex-end")]),D);case 3:return P($([t(h,"justify-content","flex-start")]),D);case 4:return P($([t(h,"justify-content","center")]),D);default:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,L(s.hO),$([t(h,"justify-content","space-between")])),t(A,L(s.ci),$([t(h,"align-items","baseline")]))])),t(A,L(s.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(R,L(s.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,L(s.ee),$([t(h,"flex-basis","auto")]))])),t(R,L(s.c$),$([t(h,"flex-grow","100000")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(R,L(s.fv),$([t(h,"width","100%")])),t(R,L(s.dO),$([t(h,"align-self","flex-start")])),t(R,"u:first-of-type."+s.fD,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(R,"s:last-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(R,"s:only-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fD+(" ~ s."+s.fF)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(h,"justify-content","center")]),D)}}),t(R,L(s.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,L(s.hO),$([t(h,"justify-content","space-between")]))])),t(A,L(s.gC),$([t(h,"display","-ms-grid"),t(R,".gp",$([t(R,L(s.fK),$([t(h,"width","100%")]))])),t(V0,P("display","grid"),$([P("display","grid")])),U0(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,L(s.eY),$([t(h,"display","block"),t(R,L(s.fK+":first-child"),$([t(h,"margin","0 !important")])),t(R,L(s.fK+(mi(3)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),t(R,L(s.fK+(mi(2)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return P(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return P(D,D);default:return P(D,D)}})])),t(A,L(s.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,L(s.gW),$([t(A,L(s.hL),$([t(h,"flex-basis","auto")]))])),t(A,L(s.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(R,L(s.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,L(s.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,L(s.cZ),$([t(h,"z-index","0"),t(R,L(s.fQ),$([t(h,"z-index","-1")]))])),t(il,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(il,L(s.eZ),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(il,L(s.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,L(s.fu),$([t(h,"display","inline-block")])),t(A,L(s.gP),$([t(h,"display","flex")])),t(A,L(s.fQ),$([t(h,"display","flex")])),t(A,L(s.fy),$([t(h,"display","flex")])),t(A,L(s.fR),$([t(h,"display","flex")])),t(A,L(s.hh),$([t(h,"display","flex")])),t(A,L(s.hg),$([t(h,"display","flex")])),t(R,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(R,L(s.af),$([t(h,"display","inline")])),t(R,L(s.aw),$([t(h,"display","inline-flex")])),t(R,L(s.gC),$([t(h,"display","inline-grid")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right")]));case 3:return P(D,$([t(h,"float","left")]));case 4:return P(D,D);default:return P(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,L(s.ia),$([t(h,"font-weight","100")])),t(A,L(s.h1),$([t(h,"font-weight","200")])),t(A,L(s.h5),$([t(h,"font-weight","300")])),t(A,L(s.h7),$([t(h,"font-weight","400")])),t(A,L(s.h6),$([t(h,"font-weight","500")])),t(A,L(s.h9),$([t(h,"font-weight","600")])),t(A,L(s.fV),$([t(h,"font-weight","700")])),t(A,L(s.h0),$([t(h,"font-weight","800")])),t(A,L(s.h2),$([t(h,"font-weight","900")])),t(A,L(s.g2),$([t(h,"font-style","italic")])),t(A,L(s.hU),$([t(h,"text-decoration","line-through")])),t(A,L(s.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,U(L(s.ih),L(s.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,L(s.ib),$([t(h,"font-style","normal")])),t(A,L(s.h3),$([t(h,"text-align","justify")])),t(A,L(s.cF),$([t(h,"text-align","justify-all")])),t(A,L(s.h$),$([t(h,"text-align","center")])),t(A,L(s.h8),$([t(h,"text-align","right")])),t(A,L(s.h4),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),bn=function(e){return $([t(sr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(sr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},G0=ar($([t(q,function(e){return t(sr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(jr,0,6)),t(q,function(e){return t(sr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(jr,8,32)),t(q,function(e){return t(sr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(jr,0,24)),$([t(sr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(sr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),bn("zero"),bn("onum"),bn("liga"),bn("dlig"),bn("ordn"),bn("tnum"),bn("afrc"),bn("frac")])),W0=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(s.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(s.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),O0=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,q0=`
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
`,J0=`
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
`,Y0=`
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
`,X0="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(" { flex-basis: auto !important; } "+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(L(s.b8)+(" { flex-basis: auto !important; }}"+(O0+(q0+(Y0+(J0+W0))))))))))))))),da=function(e){return t(ee,"",e)},pa=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),ga=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return ke(o,{aE:t(M,P(l,c),o.aE)});case 3:var u=i.a,m=u.a,d=u.b,g=i.b;return ke(o,{G:t(M,{b5:`
}`,G:D,aE:g,ag:"@supports ("+(m+(":"+(d+(") {"+n.ag))))},o.G)});case 5:var p=i.a,f=i.b;return ke(o,{G:t(M,t(ga,t(pa,n.ag+(" + "+p),""),f),o.G)});case 1:var _=i.a,x=i.b;return ke(o,{G:t(M,t(ga,t(pa,n.ag+(" > "+_),""),x),o.G)});case 2:var _=i.a,x=i.b;return ke(o,{G:t(M,t(ga,t(pa,n.ag+(" "+_),""),x),o.G)});case 4:var y=i.a,S=i.b;return ke(o,{G:t(M,t(ga,t(pa,U(n.ag,y),""),S),o.G)});default:var w=i.a;return ke(o,{G:t(M,t(ga,t(pa,n.ag,""),w),o.G)})}});return b(He,a,n,r)}),K0=function(e){var r=function(i){return da(t(q,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},a=function(i){var o=i;return U(n(o),da(t(q,a,o.G)))};return da(t(q,a,b(He,v(function(i,o){var l=i.a,c=i.b;return t(M,t(ga,t(pa,l,""),c),o)}),D,e)))},M$=U(X0,K0(U(H0,G0))),_n=Co,T$=function(e){var r=e.eS;switch(r){case 0:return b(Wr,"div",D,$([b(Wr,"style",D,$([_n(M$)]))]));case 1:return _n("");default:return b(Wr,"elm-ui-static-rules",$([t(L$,"rules",el(M$))]),D)}},Z0=v(function(e,r){return Qr(b(Ie,ld(e),td(),r))}),Q0=function(e){return Qr(b(Ie,v(function(r,n){var a=r.a,i=r.b;return b(od,a,i,n)}),id(),e))},eh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},rh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},nh=function(e){if(e.$===5){var r=e.a;return t(at,rh,r.fo)}else return!1},ha=v(function(e,r){return $e(e,r)<0?e:r}),vt=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),ze=O(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ie,vt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ie,vt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ie,vt(!1),"",a)+`
}`))])}case 0:var l=b(Ie,vt(!1),"",a);return $([n+("-fs:focus {"+(l+`
}`)),"."+(s.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(L(s.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(b(Ie,vt(!1),"",a)+`
}`))])}}),ah=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},th=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(q,ah,r.fo)))}else return j},ih=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,d=m.a,g=m.b,p=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d,w="translate3d("+(ae(l)+("px, "+(ae(c)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(d)+(", "+(ae(g)+(", "+(ae(p)+")"))))),I="rotate3d("+(ae(_)+(", "+(ae(x)+(", "+(ae(y)+(", "+(ae(S)+"rad)")))))));return N(w+(" "+(C+(" "+I))))}},ll=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return z(ze,e,n,a,i);case 13:var o=r.a,l=r.b;return z(ze,e,n,"."+o,$([t(re,"box-shadow",l)]));case 12:var o=r.a,c=r.b,u=t(br,0,t(ha,1,1-c));return z(ze,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return z(ze,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,d=r.b,g=t(ee,", ",t(Gr,th,d)),p=$([t(re,"font-family",t(ee,", ",t(q,eh,d))),t(re,"font-feature-settings",g),t(re,"font-variant",t(at,nh,d)?"small-caps":"normal")]);return z(ze,e,n,"."+o,p);case 3:var f=r.a,l=r.b,_=r.c;return z(ze,e,n,"."+f,$([t(re,l,_)]));case 4:var f=r.a,l=r.b,x=r.c;return z(ze,e,n,"."+f,$([t(re,l,ma(x))]));case 5:var y=r.a,S=r.b,w=r.c,C=k(w)+"px",I=k(S)+"px",J="."+s.af,K="."+(s.dQ+J),G="."+s.dY,Y="."+s.eZ,X="."+s.eY,V="."+s.dX,ne=ae(w/2)+"px",ve=ae(S/2)+"px",xe="."+s.aw,f="."+y,fe="."+s.fK;return ar($([z(ze,e,n,f+(J+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-left",I)])),z(ze,e,n,f+(K+(" > "+fe)),$([t(re,"margin",ne+(" "+ve))])),z(ze,e,n,f+(xe+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-top",C)])),z(ze,e,n,f+(X+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-top",C)])),z(ze,e,n,f+(X+(" > "+V)),$([t(re,"margin-right",I)])),z(ze,e,n,f+(X+(" > "+G)),$([t(re,"margin-left",I)])),z(ze,e,n,U(f,Y),$([t(re,"line-height","calc(1em + "+(k(w)+"px)"))])),z(ze,e,n,"textarea"+(fe+f),$([t(re,"line-height","calc(1em + "+(k(w)+"px)")),t(re,"height","calc(100% + "+(k(w)+"px)"))])),z(ze,e,n,f+(Y+(" > "+V)),$([t(re,"margin-right",I)])),z(ze,e,n,f+(Y+(" > "+G)),$([t(re,"margin-left",I)])),z(ze,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(w/2|0))+"px")])),z(ze,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(w/2|0))+"px")]))]));case 7:var y=r.a,me=r.b,G=r.c,ye=r.d,V=r.e,f="."+y;return z(ze,e,n,f,$([t(re,"padding",ae(me)+("px "+(ae(G)+("px "+(ae(ye)+("px "+(ae(V)+"px")))))))]));case 6:var y=r.a,me=r.b,G=r.c,ye=r.d,V=r.e,f="."+y;return z(ze,e,n,f,$([t(re,"border-width",k(me)+("px "+(k(G)+("px "+(k(ye)+("px "+(k(V)+"px")))))))]));case 8:var se=r.a,Ae=T(function(Ne,Ha,Zr){e:for(;;)switch(Zr.$){case 0:var es=Zr.a;return k(es)+"px";case 1:var Pr=P(Ne,Ha);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,"max-content";Pr.a;var In=Pr.b.a;return"minmax(max-content, "+(k(In)+"px)")}else if(Pr.b.$===1){var En=Pr.a.a;return Pr.b,"minmax("+(k(En)+"px, max-content)")}else{var En=Pr.a.a,In=Pr.b.a;return"minmax("+(k(En)+("px, "+(k(In)+"px)")))}case 2:var jc=Zr.a,zr=P(Ne,Ha);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,k(jc)+"fr";zr.a;var In=zr.b.a;return"minmax(max-content, "+(k(In)+"px)")}else if(zr.b.$===1){var En=zr.a.a;return zr.b,"minmax("+(k(En)+("px, "+(k(jc)+"frfr)")))}else{var En=zr.a.a,In=zr.b.a;return"minmax("+(k(En)+("px, "+(k(In)+"px)")))}case 3:var co=Zr.a,uo=Zr.b,$o=N(co),vo=Ha,fo=uo;Ne=$o,Ha=vo,Zr=fo;continue e;default:var co=Zr.a,uo=Zr.b,$o=Ne,vo=N(co),fo=uo;Ne=$o,Ha=vo,Zr=fo;continue e}}),Te=function(Ne){return b(Ae,j,j,Ne)};Te(se.hP.a);var Je=Te(se.hP.b),An=function(Ne){return"grid-template-rows: "+(Ne+";")}(t(ee," ",t(q,Te,se.hB))),Ua=function(Ne){return"-ms-grid-rows: "+(Ne+";")}(t(ee,Je,t(q,Te,se.ak))),Xr=function(Ne){return"-ms-grid-columns: "+(Ne+";")}(t(ee,Je,t(q,Te,se.ak))),Kr="grid-row-gap:"+(Te(se.hP.b)+";"),na="grid-column-gap:"+(Te(se.hP.a)+";"),Ht=function(Ne){return"grid-template-columns: "+(Ne+";")}(t(ee," ",t(q,Te,se.ak))),f=".grid-rows-"+(t(ee,"-",t(q,Hr,se.hB))+("-cols-"+(t(ee,"-",t(q,Hr,se.ak))+("-space-x-"+(Hr(se.hP.a)+("-space-y-"+Hr(se.hP.b))))))),Na=f+("{"+(Ht+(An+(na+(Kr+"}"))))),oo="@supports (display:grid) {"+(Na+"}"),lo=f+("{"+(Xr+(Ua+"}")));return $([lo,oo]);case 9:var Qe=r.a,Ym=t(ee," ",$(["-ms-grid-row: "+(k(Qe.af)+";"),"-ms-grid-row-span: "+(k(Qe.gH)+";"),"-ms-grid-column: "+(k(Qe.ga)+";"),"-ms-grid-column-span: "+(k(Qe.im)+";")])),Xm=t(ee," ",$(["grid-row: "+(k(Qe.af)+(" / "+(k(Qe.af+Qe.gH)+";"))),"grid-column: "+(k(Qe.ga)+(" / "+(k(Qe.ga+Qe.im)+";")))])),f=".grid-pos-"+(k(Qe.af)+("-"+(k(Qe.ga)+("-"+(k(Qe.im)+("-"+k(Qe.gH))))))),Na=f+("{"+(Xm+"}")),oo="@supports (display:grid) {"+(Na+"}"),lo=f+("{"+(Ym+"}"));return $([lo,oo]);case 11:var f=r.a,Km=r.b,Zm=function(Ne){return b(ll,e,Ne,N(f))};return t(sa,Zm,Km);default:var Ir=r.a,_=ih(Ir),f=al(Ir),Gt=P(f,_);if(!Gt.a.$&&!Gt.b.$){var y=Gt.a.a,Qm=Gt.b.a;return z(ze,e,n,"."+y,$([t(re,"transform",Qm)]))}else return D}}),oh=v(function(e,r){return Q0(t(q,function(n){var a=b(ll,e,n,j);return P(ct(n),t(Z0,el,a))},r))}),si=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(q,n,r))+"}"))}),k$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(si,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(si,"."+(e+("."+(r+("> ."+(s.Y+(", ."+(e+(" ."+(r+(" > ."+s.Y)))))))))),i)])}),lh=T(function(e,r,n){var a=r.a,i=r.b,o=le(e,n)?e:n+(" ."+e);return t(ee," ",U(b(k$,o,s.hM,i),b(k$,o,s.gy,a)))}),ch=v(function(e,r){var n=le(e,r)?e:r+(" ."+e);return t(ee," ",$([t(si,"."+(n+("."+(s.hM+(", "+("."+(n+(" ."+s.hM))))))),$([P("line-height","1")])),t(si,"."+(n+("."+(s.hM+("> ."+(s.Y+(", ."+(n+(" ."+(s.hM+(" > ."+s.Y)))))))))),$([P("vertical-align","0"),P("line-height","1")]))]))}),D$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),F$=v(function(e,r){return b(He,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),uh=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ie,br,r,n))}else return j},A$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ie,ha,r,n))}else return j},I$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(Ce,e.gk,A$(r)),a=t(Ce,e.fP,A$(t(F$,function(m){return!le(m,n)},r))),i=t(Ce,e.f1,uh(r)),o=1/(i-a),l=1-i,c=1/(i-n),u=1-i;return{f1:b(D$,o,i-a,l),ec:b(D$,c,i-n,u)}},E$=function(e){return P($([P("display","block")]),$([P("display","inline-block"),P("line-height",ae(e.gH)),P("vertical-align",ae(e.fp)+"em"),P("font-size",ae(e.bi)+"em")]))},$h=function(e){return b(Ie,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return N(P(E$(function(l){return l.ec}(I$(o))),E$(function(l){return l.f1}(I$(o)))))}else return n;else return n}),j,e)},vh=function(e){var r=function(o){if(o.$===4){var l=o.b;return N("@import url('"+(l+"');"))}else return j},n=function(o){o.a;var l=o.b,c=t(ee,`
`,t(Gr,r,l));return c},a=t(q,ju,e),i=function(o){var l=o.a,c=o.b,u=$h(c);if(u.$===1)return t(ee,"",t(q,ch(l),a));var m=u.a;return t(ee,"",t(q,t(lh,l,m),a))};return U(t(ee,`
`,t(q,n,e)),t(ee,`
`,t(q,i,e)))},fh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(P(r,n))}else return j},B$=v(function(e,r){var n=v(function(l,c){return{cB:U(c.cB,b(ll,e,l,j)),bT:function(){var u=fh(l);if(u.$===1)return c.bT;var m=u.a;return t(M,m,c.bT)}()}}),a=b(Ie,n,{cB:D,bT:D},r),i=a.bT,o=a.cB;return U(vh(i),da(o))}),V$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Wr,"div",D,$([b(Wr,"style",D,$([_n(t(B$,e,r))]))]));case 1:return b(Wr,"div",D,$([b(Wr,"style",D,$([_n(t(B$,e,r))]))]));default:return b(Wr,"elm-ui-rules",$([t(L$,"rules",t(oh,e,r))]),D)}}),R$=O(function(e,r,n,a){var i=t(V$,r,b(Ie,S$,P(y$,C$(r.gx)),n).b);return e?t(M,P("static-stylesheet",T$(r)),t(M,P("dynamic-stylesheet",i),a)):t(M,P("dynamic-stylesheet",i),a)}),j$=O(function(e,r,n,a){var i=t(V$,r,b(Ie,S$,P(y$,C$(r.gx)),n).b);return e?t(M,T$(r),t(M,i,a)):t(M,i,a)}),cl=ce(45),ft=ce(37),U$=function(e){return Ld(eu(e))},mh=nn("p"),tr=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return le(o&a,o)}else{var i=e.a;return le(i&n,i)}}),N$=nn("s"),H$=nn("u"),ul=ce(44),mt=ce(39),di=gr(function(e,r,n,a,i,o){var l=v(function(u,m){if(a.$===1){var d=a.a;return b(U$,u,m,function(){switch(i.$){case 0:return d;case 2:var p=i.a,f=i.b;return z(R$,!1,p,f,d);default:var p=i.a,f=i.b;return z(R$,!0,p,f,d)}}())}else{var g=a.a;return t(function(){switch(u){case"div":return fa;case"p":return mh;default:return Wr(u)}}(),m,function(){switch(i.$){case 0:return g;case 2:var p=i.a,f=i.b;return z(j$,!1,p,f,g);default:var p=i.a,f=i.b;return z(j$,!0,p,f,g)}}())}}),c=function(){switch(r.$){case 0:return t(l,"div",n);case 1:var u=r.a;return t(l,u,n);default:var u=r.a,m=r.b;return b(Wr,u,n,$([t(l,m,$([wr(s.fK+(" "+s.hL))]))]))}}();switch(o){case 0:return t(tr,mt,e)&&!t(tr,ul,e)?c:t(tr,_$,e)?t(H$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.ax,s.fG])))]),$([c])):t(tr,x$,e)?t(N$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.ax,s.fE])))]),$([c])):c;case 1:return t(tr,ft,e)&&!t(tr,cl,e)?c:t(tr,w$,e)?t(N$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.fF])))]),$([c])):t(tr,b$,e)?t(H$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.fD])))]),$([c])):c;default:return c}}),xn=function(e){return!e.b},$l=_n,sh=s.fK+(" "+(s.Y+(" "+(s.dO+(" "+s.c_))))),st=function(e){return t(fa,$([wr(sh)]),$([$l(e)]))},dh=s.fK+(" "+(s.Y+(" "+(s.dP+(" "+s.c$))))),G$=function(e){return t(fa,$([wr(dh)]),$([$l(e)]))},ph=T(function(e,r,n){var a=v(function(_,x){var y=_.a,S=_.b,w=x.a,C=x.b;switch(S.$){case 0:var I=S.a;return le(e,fi),P(t(M,P(y,I(e)),w),C);case 1:var J=S.a;return le(e,fi),P(t(M,P(y,t(J.gL,Hn,e)),w),xn(C)?J.hV:U(J.hV,C));case 2:var K=S.a;return P(t(M,P(y,le(e,mr)?G$(K):st(K)),w),C);default:return P(w,C)}}),i=v(function(_,x){var y=x.a,S=x.b;switch(_.$){case 0:var w=_.a;return le(e,fi),P(t(M,w(e),y),S);case 1:var C=_.a;return le(e,fi),P(t(M,t(C.gL,Hn,e),y),xn(S)?C.hV:U(C.hV,S));case 2:var I=_.a;return P(t(M,le(e,mr)?G$(I):st(I),y),S);default:return P(y,S)}});if(r.$===1){var o=r.a,l=b(He,a,P(D,D),o),c=l.a,u=l.b,m=xn(u)?n.hV:U(n.hV,u);if(m.b){var d=m;return rl({gL:z(di,n.aR,n.aT,n.aJ,p$(b(h$,"nearby-element-pls",c,n.aM))),hV:d})}else return ot(F(di,n.aR,n.aT,n.aJ,p$(b(h$,"nearby-element-pls",c,n.aM)),Hn))}else{var g=r.a,p=b(He,i,P(D,D),g),f=p.a,u=p.b,m=xn(u)?n.hV:U(n.hV,u);if(m.b){var d=m;return rl({gL:z(di,n.aR,n.aT,n.aJ,Oe(t(g$,f,n.aM))),hV:d})}else return ot(F(di,n.aR,n.aT,n.aJ,Oe(t(g$,f,n.aM)),Hn))}}),ir=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),gh=function(e){return{$:10,a:e}},pi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(pi,n,o|a)}else{var i=e.a;return t(pi,i|n,a)}}),W$=function(e){return{$:1,a:e}},gi=v(function(e,r){return{$:3,a:e,b:r}}),O$=function(e){return{$:2,a:e}},hh=v(function(e,r){return t(fa,$([wr(function(){switch(e){case 0:return t(ee," ",$([s.be,s.hL,s.fy]));case 1:return t(ee," ",$([s.be,s.hL,s.fR]));case 2:return t(ee," ",$([s.be,s.hL,s.hh]));case 3:return t(ee," ",$([s.be,s.hL,s.hg]));case 4:return t(ee," ",$([s.be,s.hL,s.gP]));default:return t(ee," ",$([s.be,s.hL,s.fQ]))}}())]),$([function(){switch(r.$){case 3:return _n("");case 2:var n=r.a;return st(n);case 0:var a=r.a;return a(mr);default:var i=r.a;return t(i.gL,Hn,mr)}}()]))}),bh=T(function(e,r,n){var a=t(hh,e,r);switch(n.$){case 0:return e===5?W$($([a])):O$($([a]));case 1:var i=n.a;return e===5?W$(t(M,a,i)):t(gi,i,$([a]));case 2:var o=n.a;return e===5?t(gi,$([a]),o):O$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(gi,t(M,a,i),o):t(gi,i,t(M,a,o))}}),q$=v(function(e,r){return{$:2,a:e,b:r}}),wn=function(e){return{$:1,a:e}},Gn=v(function(e,r){switch(r.$){case 0:return wn(e);case 1:var n=r.a;return t(q$,n,e);default:var a=r.a,i=r.b;return t(q$,a,i)}}),_h=function(e){switch(e){case 0:return s.cM+(" "+s.dX);case 2:return s.cM+(" "+s.dY);default:return s.cM+(" "+s.fB)}},xh=function(e){switch(e){case 0:return s.cN+(" "+s.fH);case 2:return s.cN+(" "+s.fA);default:return s.cN+(" "+s.fC)}},dt=v(function(e,r){return t(Mr,kd(e),ru(r))}),Or=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),yn=function(e){return{$:1,a:e}},wh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return yn(E(i,0,0));case 1:var o=r.a;return yn(E(0,o,0));case 2:var l=r.a;return yn(E(0,0,l));case 3:var n=r.a;return yn(n);case 4:var n=r.a,f=r.b;return z(Or,E(0,0,0),E(1,1,1),n,f);default:var n=r.a;return z(Or,E(0,0,0),n,E(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,l=a.c;switch(r.$){case 0:var c=r.a;return yn(E(c,o,l));case 1:var u=r.a;return yn(E(i,u,l));case 2:var m=r.a;return yn(E(i,o,m));case 3:var n=r.a;return yn(n);case 4:var n=r.a,f=r.b;return z(Or,a,E(1,1,1),n,f);default:var d=r.a;return z(Or,a,d,E(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,l=a.c,g=e.b,p=e.c,f=e.d;switch(r.$){case 0:var c=r.a;return z(Or,E(c,o,l),g,p,f);case 1:var u=r.a;return z(Or,E(i,u,l),g,p,f);case 2:var m=r.a;return z(Or,E(i,o,m),g,p,f);case 3:var _=r.a;return z(Or,_,g,p,f);case 4:var x=r.a,y=r.b;return z(Or,a,g,x,y);default:var S=r.a;return z(Or,a,S,p,f)}}}),ba=ce(7),J$=ce(36),Y$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(pi,n|i,a|o)}),tn=t(pi,0,0),vl=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return E(tn,s.ee+(" "+a),$([b(ir,a,"height",n+"px")]));case 1:return E(t(oe,J$,tn),s.c_,D);case 2:var i=e.a;return i===1?E(t(oe,ft,tn),s.c$,D):E(t(oe,ft,tn),s.ef+(" height-fill-"+k(i)),$([b(ir,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,l=e.b,c="min-height-"+k(o),u=b(ir,c,"min-height",k(o)+"px !important"),m=vl(l),d=m.a,g=m.b,p=m.c;return E(t(oe,cl,d),c+(" "+g),t(M,u,p));default:var f=e.a,l=e.b,c="max-height-"+k(f),u=b(ir,c,"max-height",k(f)+"px"),_=vl(l),d=_.a,g=_.b,p=_.c;return E(t(oe,cl,d),c+(" "+g),t(M,u,p))}},X$=ce(38),fl=function(e){switch(e.$){case 0:var r=e.a;return E(tn,s.fu+(" width-px-"+k(r)),$([b(ir,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return E(t(oe,X$,tn),s.dO,D);case 2:var n=e.a;return n===1?E(t(oe,mt,tn),s.dP,D):E(t(oe,mt,tn),s.fv+(" width-fill-"+k(n)),$([b(ir,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),l=b(ir,o,"min-width",k(a)+"px"),c=fl(i),u=c.a,m=c.b,d=c.c;return E(t(oe,ul,u),o+(" "+m),t(M,l,d));default:var g=e.a,i=e.b,o="max-width-"+k(g),l=b(ir,o,"max-width",k(g)+"px"),p=fl(i),u=p.a,m=p.b,d=p.c;return E(t(oe,ul,u),o+(" "+m),t(M,l,d))}},hi=ce(27),yh=v(function(e,r){if(le(e,hi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return le(i,l)&&le(i,o)&&le(i,c)&&i>=0&&i<=24;default:return!1}}),_a=ce(6),K$=ce(30),Z$=ce(29),Sh=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var d=c.a,g=c.b;switch(d.$){case 0:var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 3:var I=d.a,J=d.b;if(t(tr,I,n)){var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var p=J+(" "+e),f=r,_=t(oe,I,n),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 1:var K=d.a,p=e,f=r,_=n,x=a,y=i,S=t(M,K,o),w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 4:var I=d.a,G=d.b;if(t(tr,I,n)){var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else if(t(yh,I,G)){var p=ct(G)+(" "+e),f=r,_=t(oe,I,n),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var p=ct(G)+(" "+e),f=r,_=t(oe,I,n),x=a,y=t(M,G,i),S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 10:var I=d.a,Y=d.b,p=e,f=r,_=t(oe,I,n),x=t(wh,a,Y),y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 7:var X=d.a;if(t(tr,_a,n)){var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else switch(X.$){case 0:var V=X.a,p=s.fu+(" width-px-"+k(V))+(" "+e),f=r,_=t(oe,_a,n),x=a,y=t(M,b(ir,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var p=e+(" "+s.dO),f=r,_=t(oe,X$,t(oe,_a,n)),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var ne=X.a;if(ne===1){var p=e+(" "+s.dP),f=r,_=t(oe,mt,t(oe,_a,n)),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var p=e+(" "+(s.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,mt,t(oe,_a,n)),x=a,y=t(M,b(ir,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var ve=fl(X),xe=ve.a,fe=ve.b,Kr=ve.c,p=e+(" "+fe),f=r,_=t(Y$,xe,t(oe,_a,n)),x=a,y=U(Kr,i),S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 8:var me=d.a;if(t(tr,ba,n)){var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else switch(me.$){case 0:var V=me.a,ye=k(V)+"px",se="height-px-"+ye,p=s.ee+(" "+(se+(" "+e))),f=r,_=t(oe,ba,n),x=a,y=t(M,b(ir,se,"height ",ye),i),S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var p=s.c_+(" "+e),f=r,_=t(oe,J$,t(oe,ba,n)),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var ne=me.a;if(ne===1){var p=s.c$+(" "+e),f=r,_=t(oe,ft,t(oe,ba,n)),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var p=e+(" "+(s.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,ft,t(oe,ba,n)),x=a,y=t(M,b(ir,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var Ae=vl(me),xe=Ae.a,fe=Ae.b,Kr=Ae.c,p=e+(" "+fe),f=r,_=t(Y$,xe,t(oe,ba,n)),x=a,y=U(Kr,i),S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 2:var Te=d.a;switch(Te.$){case 0:var p=e,f=t(Gn,"main",r),_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var p=e,f=t(Gn,"nav",r),_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var p=e,f=t(Gn,"footer",r),_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 3:var p=e,f=t(Gn,"aside",r),_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 4:var Je=Te.a;if(Je<=1){var p=e,f=t(Gn,"h1",r),_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else if(Je<7){var p=e,f=t(Gn,"h"+k(Je),r),_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var p=e,f=t(Gn,"h6",r),_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 9:var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 8:var p=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"role","button"),o),w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 5:var An=Te.a,p=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-label",An),o),w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 6:var p=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","polite"),o),w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;default:var p=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","assertive"),o),w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 9:var Ua=d.a,Xr=d.b,Kr=function(){switch(Xr.$){case 3:return i;case 2:return Xr.a,i;case 0:return Xr.a,i;default:var Na=Xr.a;return U(i,Na.hV)}}(),p=e,f=r,_=n,x=a,y=Kr,S=o,w=b(bh,Ua,Xr,l),C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 6:var na=d.a;if(t(tr,K$,n)){var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var p=_h(na)+(" "+e),f=r,_=function(Ir){switch(na){case 1:return t(oe,x$,Ir);case 2:return t(oe,_$,Ir);default:return Ir}}(t(oe,K$,n)),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var Ht=d.a;if(t(tr,Z$,n)){var p=e,f=r,_=n,x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var p=xh(Ht)+(" "+e),f=r,_=function(Ir){switch(Ht){case 1:return t(oe,w$,Ir);case 2:return t(oe,b$,Ir);default:return Ir}}(t(oe,Z$,n)),x=a,y=i,S=o,w=l,C=g;e=p,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}}}else{var u=al(a);if(u.$===1)return{aJ:t(M,wr(e),o),aM:l,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(M,wr(e+(" "+m)),o),aM:l,aR:n,aT:r,hV:t(M,gh(a),i)}}}),Ch={$:0},Lh=Ch,or=O(function(e,r,n,a){return b(ph,e,a,Ga(Sh,k0(e),r,tn,Lh,D,D,S0,rr(n)))}),on=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ph={fO:j,fW:j,hH:N({a2:0,b6:z(on,155/255,203/255,1,1),eV:P(0,0),bi:3})},zh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,l=i.gK;return l.$===1?ke(i,{gK:N(o)}):i;case 1:var c=a.a,u=i.gx;return u.$===1?ke(i,{gx:N(c)}):i;default:var m=a.a,d=i.eS;return d.$===1?ke(i,{eS:N(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return Ph;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(He,r,{gx:j,gK:j,eS:j},e))},Mh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(mr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),mr);case 2:var i=r.a;return st(i);default:return st("")}}),Th=T(function(e,r,n){var a=zh(e),i=function(){var o=a.eS;return o===1?d$(a):w0(a)}();return t(Mh,i,z(or,mr,Nn,r,Oe($([n]))))}),pt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Q$=v(function(e,r){return{$:1,a:e,b:r}}),ev=function(e){return{$:2,a:e}},kh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),ml=function(e){return{$:3,a:e}},rv=ce(8),nv=ce(14),av=ce(5),tv=ce(4),xa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return Fe(r)+("-"+(Fe(n)+("-"+(Fe(a)+("-"+Fe(i))))))},bi=Es,sl=Is,iv=v(function(e,r){return U(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",sl(bi(n)));case 4:var n=e.a;return e.b,t(ee,"-",sl(bi(n)));default:var n=e.a.hc;return t(ee,"-",sl(bi(n)))}}())}),Dh=function(){var e=$([ml("Open Sans"),ml("Helvetica"),ml("Verdana"),kh]);return $([t(ge,rv,b(pt,"bg-"+xa(z(on,1,1,1,0)),"background-color",z(on,1,1,1,0))),t(ge,nv,b(pt,"fc-"+xa(z(on,0,0,0,1)),"color",z(on,0,0,0,1))),t(ge,tv,ev(20)),t(ge,av,t(Q$,b(Ie,iv,"font-",e),e))])}(),Fh=T(function(e,r,n){var a=e.hl;return b(Th,a,t(M,fr(t(ee," ",$([s.hA,s.fK,s.hL]))),U(Dh,r)),n)}),ov={$:3},lv=function(e){return{$:2,a:e}},dl=zd,cv=v(function(e,r){switch(r.$){case 1:var n=r.a;return rl({gL:v(function(o,l){return t(dl,e,t(n.gL,o,l))}),hV:n.hV});case 0:var a=r.a;return ot(t(lt,dl(e),a));case 2:var i=r.a;return lv(i);default:return ov}}),pl=cv,Ah=dl,Ih=function(e){return{$:0,a:e}},Se=Ih,Eh=Td,dr=Eh,uv={$:1},_i=function(e){return{$:5,a:e}},$v=_i(0),Fr=T(function(e,r,n){return z(on,e/255,r/255,n/255,1)}),vv=b(Fr,0,0,0),Bh=Mr("d"),Vh=Mr("fill"),Rh=Mr("height"),fv=Zc("http://www.w3.org/2000/svg"),jh=fv("path"),Uh=fv("svg"),Nh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},Hh=function(e){var r=Nh(e);return"rgba("+(k(Pe(r.hu*255))+(","+k(Pe(r.gA*255))+(","+k(Pe(r.fS*255))+(","+ae(r.fI)+")"))))},Gh=Mr("viewBox"),Wh=Mr("width"),wa=T(function(e,r,n){return t(Uh,$([Gh("0 0 100 100"),Wh(k(e)),Rh(k(e))]),$([t(jh,$([Bh(n),Vh(Hh(r))]),D)]))}),Oh={$:1},lr=Oh,mv=function(e){return{$:7,a:e}},Q=mv,he=v(function(e,r){return z(or,mr,Nn,t(M,Q(lr),t(M,pe(lr),e)),Oe($([r])))}),sv=function(e){return{$:2,a:e}},ue=sv(1),Wn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ya={c3:260,bE:54},ln=function(e){return t(ge,rv,b(pt,"bg-"+xa(e),"background-color",e))},qh=ce(28),Sn=function(e){return t(ge,qh,b(pt,"bc-"+xa(e),"border-color",e))},xi=1,yr=v(function(e,r){return z(or,xi,Nn,t(M,fr(s.gc+(" "+s.bt)),t(M,pe(lr),t(M,Q(lr),e))),Oe(r))}),Jh=b(Fr,83,83,83),dv=O(function(e,r,n,a){return z(on,e/255,r/255,n/255,a)}),wi=z(dv,56,56,56,.25),je=ov,gt=Ve(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),ht=ce(2),On=function(e){var r=e;return t(ge,ht,F(gt,"p-"+k(e),r,r,r,r))},pv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),gv=ce(3),hv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Cn=function(e){return t(ge,gv,b(pv,t(hv,e,e),e,e))},Yh=z(dv,0,0,0,0),Xh=function(e){return{$:4,a:e}},gl=0,Ln=v(function(e,r){return z(or,gl,Nn,t(M,fr(s.bt+(" "+s.ax)),t(M,Q(lr),t(M,pe(lr),e))),Oe(r))}),Kh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(d$,{gx:{fO:j,fW:j,hH:j},gK:1,eS:0},n.hV));case 2:var a=e.a;return vi(_n(a));default:return vi(_n(""))}},Zh=v(function(e,r){return Kh(e(r))}),Qh=Md,e3=v(function(e,r){return ot(b(Qh,Zh,e,r))}),Pn=function(e){return t(ge,nv,b(pt,"fc-"+xa(e),"color",e))},hl=b(Fr,195,195,195),zn=v(function(e,r){return{$:3,a:e,b:r}}),bv=ce(13),r3=t(zn,bv,s.h7),n3=ce(20),_v=t(zn,n3,s.hF),qn=function(e){return t(ge,tv,ev(e))},bl=t(zn,bv,s.fV),_l=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;return F(te,n,a,t(e,a,i),t(_l,e,o),t(_l,e,l))}),xv=v(function(e,r){if(le(e,r)){var n=e;return t(ge,ht,F(gt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,ht,F(gt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),Mn=function(e){return lv(e)},a3=function(e){return b(Io,T(function(r,n,a){return t(M,n,a)}),D,e)},t3=v(function(e,r){return{$:3,a:e,b:r}}),i3=v(function(e,r){return{$:2,a:e,b:r}}),o3=v(function(e,r){return{$:0,a:e,b:r}}),l3=v(function(e,r){return{$:1,a:e,b:r}}),yi=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),xl=z(yi,0/255,0/255,0/255,1),Si=function(e){return{$:6,a:e}},c3=Si(0),Ci=function(e){return{$:2,a:e}},u3={$:6},wv=Ci(u3),yv=T(function(e,r,n){if(r.$===1)return r.a,z(or,xi,wn("label"),e,Oe($([n])));var a=r.a,i=r.b,o=r.c,l=z(or,mr,Nn,i,Oe($([o])));switch(a){case 2:return z(or,xi,wn("label"),t(M,fr(s.ci),e),Oe($([l,n])));case 3:return z(or,xi,wn("label"),t(M,fr(s.ci),e),Oe($([n,l])));case 0:return z(or,gl,wn("label"),t(M,fr(s.ci),e),Oe($([n,l])));default:return z(or,gl,wn("label"),t(M,fr(s.ci),e),Oe($([l,n])))}}),wl=dt,cn=_i(1),Sv="Enter",$3=function(e){return{$:5,a:e}},Cv=function(e){if(e.$===1){var r=e.a;return Ci($3(r))}else return Un},Lv=function(e){return e.$===1},v3=function(e){return{$:0,a:e}},yl=Qc,f3=v(function(e,r){return t(yl,e,v3(r))}),Pv=function(e){return t(f3,"click",nr(e))},m3=qs,s3=function(e){return{$:2,a:e}},d3=v(function(e,r){return t(yl,e,s3(r))}),zv=function(e){var r=function(a){var i=e(a);if(i.$===1)return m3("No key matched");var o=i.a;return nr(o)},n=t(W,r,t(H,"key",va));return Le(t(d3,"keydown",t(ei,function(a){return P(a,!0)},n)))},p3=ce(21),Jn=t(zn,p3,s.gf),Mv=" ",Tv=function(e){return t(Mr,"tabIndex",k(e))},g3=t(lt,Le,Tv),h3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bI,l=U($([Lv(n)?Un:Cn(6),Le(Pv(o(!i))),wv,zv(function(c){return le(c,Sv)||le(c,Mv)?N(o(!i)):j}),g3(0),Jn,c3,Q(ue)]),e);return b(yv,t(M,Le(t(wl,"role","checkbox")),t(M,Le(t(wl,"aria-checked",i?"true":"false")),t(M,Cv(n),l))),n,z(or,mr,Nn,$([cn,pe(ue),Q(lr)]),Oe($([a(i)]))))}),b3=T(function(e,r,n){return U(t(tt,e-Rn(n),li(r)),n)}),Li=ss,kv=function(e){var r=function(n){return n<10?k(n):li(a$(87+n))};return e<16?r(e):U(kv(e/16|0),r(t(Li,16,e)))},_3=t(Ge,kv,t(b3,2,"0")),Sl=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},x3=function(e){var r=Sl(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(q,t(Ge,Pe,_3),$([n*255,a*255,i*255]))))},Cl=ce(12),Dv=t(zn,Cl,s.h$),Ll=Si(1),qr=ds,bt=function(e){return e*qr/180},w3=function(e){return{$:1,a:e}},Pl=v(function(e,r){return{$:10,a:e,b:r}}),y3=ce(26),S3=function(e){return t(Pl,y3,w3(-e))},Sa=T(function(e,r,n){return z(on,e,r,n,1)}),C3=on,L3=v(function(e,r){return{$:4,a:e,b:r}}),P3=ce(24),z3=function(e){return t(Pl,P3,t(L3,E(0,0,1),e))},M3=ce(17),Yn=function(e){return t(ge,M3,b(ir,"br-"+k(e),"border-radius",k(e)+"px"))},T3=function(e){return da($([e.ej?"box-inset":"box-",Fe(e.eV.a)+"px",Fe(e.eV.b)+"px",Fe(e.a2)+"px",Fe(e.bi)+"px",xa(e.b6)]))},k3=ce(19),D3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return t(ge,k3,b(ir,T3(r),"box-shadow",tl(r)))},Fv=v(function(e,r){return{$:12,a:e,b:r}}),Av=ce(0),F3=function(e){return e?t(ge,Av,t(Fv,"transparent",1)):t(ge,Av,t(Fv,"visible",0))},zl=b(Sa,1,1,1),Ml=Ve(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),Pi=function(e){return t(ge,hi,F(Ml,"b-"+k(e),e,e,e,e))},A3=v(function(e,r){return t(ge,hi,F(Ml,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),_t=function(e){var r=e.b2,n=e.cH,a=e.g4,i=e.hx;return le(n,r)&&le(a,i)?le(n,i)?Pi(n):t(A3,a,n):t(ge,hi,F(Ml,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},I3=function(e){return t(he,$([fr("focusable"),Q(Se(14)),pe(Se(14)),Pn(zl),cn,qn(9),Dv,Yn(3),Sn(e?b(Sa,59/255,153/255,252/255):b(Sa,211/255,211/255,211/255)),D3({a2:1,b6:e?z(C3,238/255,238/255,238/255,0):b(Sa,238/255,238/255,238/255),eV:P(0,0),bi:1}),ln(e?b(Sa,59/255,153/255,252/255):zl),Pi(e?0:1),Qo(t(he,$([Sn(zl),pe(Se(6)),Q(Se(9)),z3(bt(-45)),Ll,cn,S3(1),F3(!e),_t({b2:2,g4:2,hx:0,cH:0})]),je))]),je)},E3=xr("htmlFor"),B3=v(function(e,r){if(r.$)return j;var n=r.a;return e(n)}),zi=v(function(e,r){if(r.$){var a=r.a;return Xe(a)}else{var n=r.a;return e(n)}}),Iv=O(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),V3=ap,R3=Hs,j3=v(function(e,r){if(r.$)return Xe(e);var n=r.a;return Ee(n)}),U3=np,N3=function(e){return t(U3,{f2:!1,hb:!1},e)},xt=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return j},H3=v(function(e,r){if(r.$){var a=r.a;return Xe(a)}else{var n=r.a;return Ee(e(n))}}),G3=function(e){return{$:2,a:e}},W3=function(e){return{$:0,a:e}},O3=function(e){return{$:1,a:e}},Tl=v(function(e,r){return Ur(r)-Ur(e)}),kl=T(function(e,r,n){var a=Ur(n);return $e(Ur(e),a)<1&&$e(a,Ur(r))<1}),q3=v(function(e,r){var n=function(i){return $e(i,e)<0?Ee(i):Xe(O3(r))},a=b(kl,"0","9",r)?Ee(t(Tl,"0",r)):b(kl,"a","z",r)?Ee(10+t(Tl,"a",r)):b(kl,"A","Z",r)?Ee(10+t(Tl,"A",r)):Xe(W3(r));return t(zi,n,a)}),Ev=v(function(e,r){var n=oa(r);if(n.$===1)return Ee(0);var a=n.a,i=a.a,o=a.b;return t(zi,function(l){return t(zi,function(c){return Ee(l+c*e)},t(Ev,e,o))},t(q3,e,i))}),J3=v(function(e,r){return 2<=e&&e<=36?t(Ev,e,Xo(r)):Xe(G3(e))}),Y3=J3(16),X3=T(function(e,r,n){return z(yi,e,r,n,1)}),K3=O(function(e,r,n,a){return z(yi,e,r,n,a)}),wt=ms,Z3=v(function(e,r){var n=t(wt,10,e);return Pe(r*n)/n}),Q3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=n$(n);if(a.b&&!a.b.b){var i=a.a;return R3($([i,i]))}else return n};return t(Ge,bi,t(Ge,function(n){return t(De,function(a){return b(V3,1,a,n)},N3(e))},t(Ge,B3(xt),t(Ge,De(function(n){return n.hW}),t(Ge,De(Gr(Dr)),t(Ge,j3("Parsing hex regex failed"),zi(function(n){var a=t(q,t(Ge,r,t(Ge,Y3,H3(Za))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,l=o.a.a,c=o.b,u=c.a.a,m=c.b,d=m.a.a;return Ee(z(K3,i/255,l/255,u/255,t(Z3,2,d/255)))}else break e;else{var i=a.a.a,g=a.b,l=g.a.a,p=g.b,u=p.a.a;return Ee(b(X3,i/255,l/255,u/255))}else break e;return Xe("Parsing ints from hex failed")})))))))}(),eb=xr("id"),rb=nn("input"),nb=nn("label"),Bv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ab=Bv(0),tb=xr("name"),ib=function(e){return P(e,!0)},ob=function(e){return{$:1,a:e}},lb=v(function(e,r){return t(yl,e,ob(r))}),cb=v(function(e,r){return b(He,H,r,e)}),ub=t(cb,$(["target","value"]),va),Vv=function(e){return t(lb,"input",t(ei,ib,t(ei,e,ub)))},$b=t(zn,Cl,s.h4),Rv=t(zn,Cl,s.h8),Dl=function(e){return t(s$,5,e)},Fl=function(e){return t(ge,av,t(Q$,b(Ie,iv,"ff-",e),e))},vb=b(Fr,195,195,195),jv=b(Fr,69,69,69),fb=Bv(2),mb={$:2},Al=mb,sb=ce(32),db=ce(31),Uv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return j;else{var a=n.a;return N(a)}}),j,e)},pb=v(function(e,r){return t(Ce,r,b(He,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return N(P(i,l))}else return j;else{var i=a.a;return N(i)}}),j,e))}),Nv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return j;else{var a=n.a;return N(a)}}),j,e)},gb=ce(33),hb=xr("max"),bb=xr("min"),_b=v(function(e,r){return t(ge,gv,b(pv,t(hv,e,r),e,r))}),xb=function(e){return t(xr,"step",e)},Hv=xr("type"),Gv=xr("value"),Ca=sv,wb=Ad,Wv=v(function(e,r){switch(r.$){case 0:return Un;case 2:var n=r.a;return Ci(n);case 6:var a=r.a;return Si(a);case 5:var i=r.a;return _i(i);case 7:var a=r.a;return mv(a);case 8:var a=r.a;return f$(a);case 3:var a=r.a,i=r.b;return t(zn,a,i);case 4:var o=r.a,l=r.b;return t(ge,o,l);case 9:var c=r.a,u=r.b;return t(m$,c,t(cv,e,u));case 1:var m=r.a;return Le(t(wb,e,m));default:var d=r.a,g=r.b;return t(Pl,d,g)}}),yb=T(function(e,r,n){return t(Ln,$([Q(ue),pe(t(Ce,ue,n)),cn]),$([t(he,$([Q(Ca(Pe(e*1e4)))]),je),t(he,t(M,cn,t(q,Wv(rt),r)),je),t(he,$([Q(Ca(Pe(de(1-e)*1e4)))]),je)]))}),Sb=T(function(e,r,n){return t(yr,$([pe(ue),Q(t(Ce,ue,n)),Ll]),$([t(he,$([pe(Ca(Pe(de(1-e)*1e4)))]),je),t(he,t(M,Ll,t(q,Wv(rt),r)),je),t(he,$([pe(Ca(Pe(e*1e4)))]),je)]))}),Ov=v(function(e,r){var n=Nv(e),a=Uv(e),i=function(){var S=P(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var w=S.a.a.a,C=S.b.a.a;return $e(C,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),l=r.ic,c=l,u=Uv(c),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),d=Nv(c),g=function(){if(d.$===1)return"20px";if(d.a.$)return"100%";var S=d.a.a;return k(S)+"px"}(),p="thmb-"+(g+("-"+m)),f=$([t(re,"width",g),t(re,"height",m)]),_=t(pb,e,P(5,5)),x=_.a,y=_.b;return b(yv,$([Lv(r.em)?Un:t(_b,x,y),wv,Q(function(){if(n.$===1)return ue;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.em,t(Ln,$([Q(t(Ce,ue,n)),pe(t(Ce,Se(20),a))]),$([z(or,mr,wn("input"),$([Cv(r.em),t(ge,sb,t(ut,'input[type="range"].'+(p+"::-moz-range-thumb"),f)),t(ge,gb,t(ut,'input[type="range"].'+(p+"::-webkit-slider-thumb"),f)),t(ge,db,t(ut,'input[type="range"].'+(p+"::-ms-thumb"),f)),Le(wr(p+" ui-slide-bar focusable-parent")),Le(Vv(function(S){var w=r$(S);if(w.$===1)return r.bI(0);var C=w.a;return r.bI(C)})),Le(Hv("range")),Le(xb(function(){var S=r.cE;if(S.$===1)return"any";var w=S.a;return ae(w)}())),Le(bb(ae(r.cr))),Le(hb(ae(r.cq))),Le(Gv(ae(r.cI))),i?Le(t(wl,"orient","vertical")):Un,Q(i?t(Ce,Se(20),a):t(Ce,ue,n)),pe(i?t(Ce,ue,n):t(Ce,Se(20),a))]),Oe(D)),t(he,t(M,Q(t(Ce,ue,n)),t(M,pe(t(Ce,Se(20),a)),U(e,$([Dl(i?b(Sb,o,t(M,fr("focusable-thumb"),c),n):b(yb,o,t(M,fr("focusable-thumb"),c),a))])))),je)])))}),Cb=b(Sa,.5,.5,.5),qv=Dr,Jv=function(e){var r=e.c2,n=e.cI,a=e.cr,i=e.cq,o=e.cE,l=e.bI;return t(he,$([Q(ue)]),t(Ov,$([Cn(2),Dl(t(he,$([Q(ue),pe(Se(16)),cn,ln(jv),Yn(4)]),je))]),{em:t(fb,D,t(Ln,$([Q(ue)]),$([t(he,$([$b]),Mn(r)),t(he,$([Q(ue),Rv,Fl($([Al]))]),Mn(ae(n)))]))),cq:i,cr:a,bI:l,cE:N(o),ic:qv($([Q(Se(12)),pe(Se(12)),Yn(4),Pi(0),Sn(Cb),ln(vb)])),cI:n}))},Lb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Pb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(h3,D,{f6:n,gM:I3,em:t(ab,D,Mn(e)),bI:t3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Jv({c2:e,cq:o,cr:i,bI:o3(e),cE:.001*(o-i),cI:n});case 1:var l=r.a,i=l.a,o=l.b,n=r.b;return Jv({c2:e,cq:o,cr:i,bI:t(Ge,Pe,l3(e)),cE:1,cI:n});default:var n=r.a;return t(he,$([Q(ue)]),hn(t(fa,D,$([t(fa,$([t(dr,"margin-bottom","6px")]),$([t(nb,$([E3(e)]),$([$l(e)]))])),t(rb,$([Hv("color"),t(dr,"width","100%"),t(dr,"height","26px"),t(dr,"padding","0px"),eb(e),tb(e),Vv(function(c){return t(i3,e,t(Lb,xl,Q3(c)))}),Gv(x3(n))]),D)]))))}}),Il=b(Fr,255,255,255),zb=function(e){return t(yr,$([Q(ue),Cn(8),t(xv,0,14),_t({b2:1,g4:0,hx:0,cH:0}),Sn(wi)]),$([t(he,$([qn(16),bl,Pn(Il)]),Mn(e.hc)),t(yr,$([Q(ue),Cn(6)]),a3(t(_l,Pb,e.aN)))]))},Mb=function(e){return t(yr,$([Q(ue),pe(ue),Pn(hl),qn(12),r3,_v]),t(q,zb,e))},Tb=e3(Mb),kb=function(e){return t(yr,$([Q(ue),pe(ue)]),$([t(Ln,$([Cn(14),Q(ue)]),D),t(pl,Xh,Tb(jn(e).gb))]))},Db=function(e){return{$:6,a:e}},Fb=O(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Ab=function(e){var r=e.cH,n=e.hx,a=e.b2,i=e.g4;if(le(r,n)&&le(r,a)&&le(r,i)){var o=r;return t(ge,ht,F(gt,"p-"+k(r),o,o,o,o))}else return t(ge,ht,F(gt,z(Fb,r,n,a,i),r,n,a,i))},Ib=function(e){return{$:0,a:e}},Eb=function(e){return{$:1,a:e}},Bb=Eb,Vb=function(e){var r=e.b.X;return Vn(r)},Mi=b(Fr,255,60,0),Rb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Vn(r)+1+Vn(n)},jb=function(e){var r=P(Vb(e),Rb(e)-1),n=r.a,a=r.b;return t(he,$([Q(ue),cn]),t(Ov,$([Dl(t(Ln,$([Q(ue),pe(Se(4)),cn,ln(jv),Yn(2)]),$([t(he,$([Q(Ca(n)),pe(ue),ln(Mi),Yn(2)]),je),t(he,$([Q(Ca(a-n))]),je)])))]),{em:Bb(""),cq:a,cr:0,bI:t(Ge,Pe,Ib),cE:N(1),ic:qv($([Q(Se(12)),pe(Se(12)),Yn(6),ln(Mi)])),cI:n}))},Ub=Si(2),Ti=b(Fr,220,220,220),Nb=function(e){var r=e.a,n=function(){return r.$?$([Pn(Ti)]):$([Pn(Mi)])}();return t(he,U(n,$([qn(14),Ub,Rv,Fl($([Al]))])),Mn(t(l$,3,jn(e).d1)))},Hb=function(e){e.a;var r=e.b.X;return t(De,function(n){return Pe(60/(jn(e).d1-n))},t(De,t(Ge,ju,function(n){return n.d1}),xt(t(Xu,59,r))))},Gb=function(e){var r=Hb(e);if(r.$===1)return je;var n=r.a;return t(he,$([qn(14),Pn(hl),Fl($([Al]))]),Mn(k(n)+" FPS"))},Yv={$:1},Wb={$:3},Ob={$:2},qb={$:8},Jb=Qr,Yb=v(function(e,r){return t(Lo,e,Jb(r))}),Xb=Yb("disabled"),Kb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Zb=function(e){return t(at,Kb,e)?Un:fr("focusable")},ki=t(lt,Le,Pv),Xv=v(function(e,r){var n=r.eW,a=r.em;return z(or,mr,Nn,t(M,Q(lr),t(M,pe(lr),t(M,fr(s.ca+(" "+(s.ax+(" "+(s.hG+(" "+s.eU)))))),t(M,Jn,t(M,Zb(e),t(M,Ci(qb),t(M,Le(Tv(0)),function(){if(n.$===1)return t(M,Le(Xb(!0)),e);var i=n.a;return t(M,ki(i),t(M,zv(function(o){return le(o,Sv)||le(o,Mv)?N(i):j}),e))}()))))))),Oe($([a])))}),Kv=v(function(e,r){return t(Xv,D,{em:t(he,$([Q(Se(36)),On(3),Pn(r),Dv,qn(12),bl,Sn(r),Pi(1),Yn(4)]),Mn("REC")),eW:N(e)})}),Zv=T(function(e,r,n){return t(Xv,D,{em:hn(b(wa,20,n,e)),eW:N(r)})}),Qb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Ln,D,$([t(he,$([Q(Se(40))]),function(){switch(r.$){case 0:return t(Kv,Yv,Mi);case 1:return t(Kv,Ob,Ti);default:return je}}()),t(he,$([Q(Se(28))]),function(){switch(r.$){case 0:return je;case 1:return xn(n)?je:b(Zv,Wn.hp,Wb,Ti);default:return b(Zv,Wn.ho,Yv,Ti)}}())]))},e1=function(e){return t(yr,$([Q(ue)]),$([jb(e),t(Ln,$([Q(ue),Cn(14),t(xv,0,6),cn]),$([Qb(e),Gb(e),Nb(e)]))]))},r1=function(e){return t(yr,$([Q(ue),Cn(14),Ab({b2:20,g4:0,hx:0,cH:0}),_t({b2:1,g4:0,hx:0,cH:0}),Sn(wi)]),$([t(he,$([qn(16),bl,Pn(hl)]),Mn("Time Travel")),t(pl,Db,e1(e))]))},n1=v(function(e,r){return t(yr,$([jn(r).dC.im>600?ln(Jh):ln(Yh),_t({b2:0,g4:0,hx:1,cH:0}),Sn(wi),Q(Se(ya.c3)),pe(ue)]),$([function(){return e?je:t(yr,$([Q(ue),pe(ue),On(14),Cn(14)]),$([r1(r),kb(r)]))}()]))}),a1=function(e){return{$:3,a:e}},Qv=_i(2),t1=b(Fr,232,78,50),i1=b(Fr,48,48,48),o1=function(e){return t(xr,"href",Fd(e))},l1=Mr("rel"),c1=xr("target"),ef=v(function(e,r){var n=r.fn,a=r.em;return z(or,mr,wn("a"),t(M,Le(o1(n)),t(M,Le(l1("noopener noreferrer")),t(M,Le(c1("_blank")),t(M,Q(lr),t(M,pe(lr),t(M,fr(s.ca+(" "+(s.ax+(" "+s.et)))),e)))))),Oe($([a])))}),yt=xr("title"),u1=b(Fr,31,161,242),$1=function(e){var r=T(function(o,l,c){var u=le(l,e)?Il:i1;return t(he,$([an(yt(o)),ki(a1(l)),Jn,On(7)]),hn(b(wa,40,u,c)))}),n=t(yr,$([$v]),$([b(r,"Configurations",0,Wn.hN)])),a=t(yr,D,$([t(ef,$([an(yt("Twitter")),Qv,Jn,On(7)]),{em:hn(b(wa,40,u1,Wn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(ef,$([an(yt("Source Code")),Qv,Jn,On(7)]),{em:hn(b(wa,40,t1,Wn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(Se(ya.bE)),On(4),ki(uv),_t({b2:1,g4:0,hx:0,cH:0}),Sn(wi),Jn,an(yt("Activate Distraction Free Mode"))]),hn(b(wa,46,Il,Wn.fx)));return t(yr,$([Q(Se(ya.bE)),pe(ue),_v,ln(vv)]),$([i,n,a]))},v1=function(e){var r=t(he,$([Q(Se(ya.bE)),$v,On(4),ki(uv),Jn,an(yt("Deactivate Distraction Free Mode (A)"))]),hn(b(wa,46,vv,Wn.fx)));return e.bw?r:t(Ln,$([Q(Se(ya.bE+ya.c3)),pe(ue)]),$([$1(e.bp),t(n1,e.bp,e.R)]))},f1=T(function(e,r,n){var a=h0(n.R),i=jn(n.R);return b(Fh,{hl:$([_0({fO:j,fW:j,hH:j})])},$([Q(Se(Ka(i.dC.im))),pe(Se(Ka(i.dC.gH))),an(t(dr,"-webkit-font-smoothing","antialiased")),an(t(dr,"pointer-events","none")),an(t(dr,"touch-action","none")),an(t(dr,"user-select","none")),Qo(t(pl,p0,t(r,i,a))),Qo(v1(n))]),hn(t(Ah,vi(g0),t(e,i,a))))}),m1=gr(function(e,r,n,a,i,o){var l=v(function(u,m){return P(z($0,r,o,u,m),v$)}),c=function(u){var m=t(Nu,n,u.gY);return P({bp:0,bw:!0,R:t(v0,m,a),dN:0},v$)};return Dg({gS:c,hX:d0,ii:l,ik:t(f1,e,i)})}),s1=O(function(e,r,n,a){return er(m1,e,r,n,a,v(function(i,o){return je}),T(function(i,o,l){return l}))}),d1=function(e){return{}},p1=v(function(e,r){return P(e,Zu(r))}),g1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),h1=function(e){return b(Ie,v(function(r,n){var a=r.a,i=r.b;return b($a,a,i,n)}),nl,e)},b1=T(function(e,r,n){return b(g1,e,r,h1(n))}),El=b1,La=T(function(e,r,n){var a=r.a,i=r.b;return P(e,t(Qu,P(a,i),n))}),_1=O(function(e,r,n,a){var i=E(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,m=c*2-u,d=function(_){var x=_<0?_+1:_>1?_-1:_;return x*6<1?m+(u-m)*x*6:x*2<1?u:x*3<2?m+(u-m)*(2/3-x)*6:m},g=d(o-1/3),p=d(o),f=d(o+1/3);return z(yi,f,p,g,a)}),rf=T(function(e,r,n){return z(_1,e,r,n,1)}),x1=T(function(e,r,n){var a=r.a,i=r.b;return P(e,t(e$,P(a,i),n))}),w1=$([b(El,"Camera",!0,$([b(La,"camera distance",P(3,60),50),b(La,"camera azimuth",P(0,2*qr),0),b(La,"camera elevation",P(-qr/2,qr/2),.5)])),b(El,"Parameters",!0,$([b(La,"delay per index",P(0,1),.15),b(x1,"number of spheres",P(10,100),50)])),b(El,"Colors and light",!0,$([b(La,"saturation",P(0,1),.5),b(La,"lighting",P(0,1),.7),t(p1,"background color",b(rf,.85,.32,.45))]))]),y1=v(function(e,r){return r}),S1=v(function(e,r){return t(De,function(n){if(n.$)return 0;var a=n.b;return a},t(ca,e,r.aN))}),C1=v(function(e,r){return t(Ce,0,xt(t(Gr,S1(e),r)))}),L1=v(function(e,r){return t(C1,e,r.gb)}),Pa=L1,Xn=function(e){return e},St=function(e){return Xn(qr*(e/180))},P1=function(e){return e},un=function(e){return e},Bl=function(e){var r=e;return-r},z1=v(function(e,r){var n=e,a=r;return{io:n.is*a.dU-n.dU*a.is,is:n.dU*a.io-n.io*a.dU,dU:n.io*a.is-n.is*a.io}}),nf=function(e){var r=e;return r.dS},af=function(e){var r=e;return r.dT},M1=function(e){return t(z1,nf(e),af(e))},Kn=function(e){var r=e;return r.dl},Zn=ps,za=gs,Di=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=Zn(l),u=za(l),m=a.gm,d=m,g=d.io*u,p=c*g,f=g*g,_=d.is*u,x=c*_,y=g*_,S=_*_,w=1-2*(f+S),C=d.dU*u,I=c*C,J=2*(y-I),K=2*(y+I),G=g*C,Y=2*(G+x),X=2*(G-x),V=_*C,ne=2*(V-p),ve=2*(V+p),xe=C*C,fe=1-2*(S+xe),me=1-2*(f+xe);return{io:fe*o.io+J*o.is+Y*o.dU,is:K*o.io+me*o.is+ne*o.dU,dU:X*o.io+ve*o.is+w*o.dU}}),Ct=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=Zn(l),u=za(l),m=a.dl,d=m,g=o.io-d.io,p=o.is-d.is,f=o.dU-d.dU,_=a.gm,x=_,y=x.io*u,S=c*y,w=y*y,C=x.is*u,I=c*C,J=y*C,K=C*C,G=1-2*(w+K),Y=x.dU*u,X=c*Y,V=2*(J-X),ne=2*(J+X),ve=y*Y,xe=2*(ve+I),fe=2*(ve-I),me=C*Y,ye=2*(me-S),se=2*(me+S),Ae=Y*Y,Te=1-2*(K+Ae),Je=1-2*(w+Ae);return{io:d.io+Te*g+V*p+xe*f,is:d.is+ne*g+Je*p+ye*f,dU:d.dU+fe*g+se*p+G*f}}),Tn=function(e){return e},kn=function(e){var r=e;return r.dS},Dn=function(e){var r=e;return r.dT},Fn=function(e){var r=e;return r.dV},tf=T(function(e,r,n){return Tn({dl:b(Ct,e,r,Kn(n)),dS:b(Di,e,r,kn(n)),dT:b(Di,e,r,Dn(n)),dV:b(Di,e,r,Fn(n))})}),of=T(function(e,r,n){return b(tf,e(n),r,n)}),Vl=function(e){var r=e;return r.gm},Lt=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dU:a.dU+n.dU}}),lf=v(function(e,r){return Tn({dl:t(Lt,e,Kn(r)),dS:kn(r),dT:Dn(r),dV:Fn(r)})}),T1=v(function(e,r){var n=e,a=r;return{io:n*a.io,is:n*a.is,dU:n*a.dU}}),k1=T(function(e,r,n){return t(lf,t(T1,r,e),n)}),D1=T(function(e,r,n){return b(k1,Vl(e(n)),r,n)}),Qn=v(function(e,r){return{gm:r,dl:e}}),F1=function(e){var r=e;return t(Qn,r.dl,r.dS)},A1=function(e){var r=e;return t(Qn,r.dl,r.dT)},I1=function(e){var r=e;return t(Qn,r.dl,r.dV)},E1=function(e){var r=Tn({dl:e.ba,dS:af(e.ed),dT:M1(e.ed),dV:nf(e.ed)}),n=b(D1,I1,e.cY,b(of,F1,Bl(e.cc),b(of,A1,e.b$,r)));return n},B1=function(e){return{$:0,a:e}},Ke=function(e){var r=e;return de(r)},Fi=function(e){var r=e;return .5*r},V1=hs,R1=function(e){var r=e;return V1(r)},j1=function(e){var r=Fi(Ke(e.fq)),n=R1(r);return{dw:B1(n),dM:e.dM}},Ar={io:0,is:0,dU:0},cf=Dr,ea=function(e){return e},U1=ea({io:1,is:0,dU:0}),Rl=U1,uf=ea({io:0,is:0,dU:1}),jl=uf,N1=cf({dl:Ar,dS:jl,dT:Rl}),H1=function(e){var r=e.ba,n=e.b$,a=e.cc,i=e.cY;return j1({fq:St(40),dM:E1({b$:Xn(n),cY:un(i),cc:Xn(a),ba:P1(r),ed:N1})})},G1=function(e){return H1({b$:t(Pa,"camera azimuth",e),cY:t(Pa,"camera distance",e),cc:t(Pa,"camera elevation",e),ba:{io:0,is:0,dU:0}})},W1=v(function(e,r){return t(De,function(n){if(n.$===2){var a=n.a;return a}else return xl},t(ca,e,r.aN))}),O1=v(function(e,r){return t(Ce,xl,xt(t(Gr,W1(e),r)))}),q1=v(function(e,r){return t(O1,e,r.gb)}),J1=q1,Ul=v(function(e,r){return{$:0,a:e,b:r}}),Nl=v(function(e,r){return{$:2,a:e,b:r}}),Ai=function(e){return{$:5,a:e}},Hl=v(function(e,r){return{$:4,a:e,b:r}}),Ii=v(function(e,r){return{$:3,a:e,b:r}}),Gl=v(function(e,r){return{$:1,a:e,b:r}}),Y1=function(e){var r=e;return r},Ei=function(e){var r=e;return Y1(r.fN)},Bi=function(e){var r=e;return r.a4},X1=T(function(e,r,n){return{fN:b(tf,e,r,Ei(n)),a4:Bi(n)}}),K1=v(function(e,r){var n=t(Ct,e,r),a=t(Di,e,r);return function(i){var o=i;return t(Qn,n(o.dl),a(o.gm))}}),Z1=T(function(e,r,n){var a=n;return{m:b(K1,e,r,a.m),g5:a.g5,hs:a.hs}}),Wl=function(e){var r=e;return r},Q1=function(e){return e},Ol=v(function(e,r){var n=Wl(r),a=n.a,i=n.b;return Q1(P(e(a),e(i)))}),e_=T(function(e,r,n){return t(Ol,t(Ct,e,r),n)}),Vi=function(e){var r=e;return r.f4},Ri=function(e){var r=e;return r.hs},ji=v(function(e,r){return{f4:r,hs:Ke(e)}}),r_=T(function(e,r,n){return t(ji,Ri(n),b(Ct,e,r,Vi(n)))}),ql=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return E(e(a),e(i),e(o))}),n_=T(function(e,r,n){return t(ql,t(Ct,e,r),n)}),$f=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(Ul,a,b(X1,e,r,i));case 1:var a=n.a,o=n.b;return t(Gl,a,b(n_,e,r,o));case 3:var a=n.a,l=n.b;return t(Ii,a,b(r_,e,r,l));case 2:var a=n.a,c=n.b;return t(Nl,a,b(Z1,e,r,c));case 4:var a=n.a,u=n.b;return t(Hl,a,b(e_,e,r,u));default:var m=n.a;return Ai(t(q,t($f,e,r),m))}}),a_=ea({io:0,is:1,dU:0}),Jl=a_,t_=t(Qn,Ar,Jl),Yl=v(function(e,r){return b($f,t_,Xn(e),r)}),i_=v(function(e,r){return t(De,function(n){if(n.$===1){var a=n.b;return a}else return 0},t(ca,e,r.aN))}),o_=v(function(e,r){return t(Ce,0,xt(t(Gr,i_(e),r)))}),l_=v(function(e,r){return t(o_,e,r.gb)}),vf=l_,c_=function(e){return Ai(e)},Xl=function(e){return{$:0,a:e}},ff=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),mf=T(function(e,r,n){return $e(n,e)<0?e:$e(n,r)>0?r:n}),Kl=function(e){return b(mf,0,1,e<=.04045?e/12.92:t(wt,(e+.055)/1.055,2.4))},Pt=op,u_=function(e){var r=Sl(e),n=r.hu,a=r.gA,i=r.fS;return b(Pt,Kl(n),Kl(a),Kl(i))},$_=function(e){return b(ff,0,Xl(u_(e)),Xl(0))},v_=T(function(e,r,n){return{io:e,is:r,dU:n}}),f_=v(function(e,r){return{fN:t(lf,e,Ei(r)),a4:Bi(r)}}),m_=v(function(e,r){var n=r;return t(Qn,t(Lt,e,n.dl),n.gm)}),s_=v(function(e,r){var n=r;return{m:t(m_,e,n.m),g5:n.g5,hs:n.hs}}),d_=v(function(e,r){return t(Ol,Lt(e),r)}),p_=v(function(e,r){return t(ji,Ri(r),t(Lt,e,Vi(r)))}),g_=v(function(e,r){return t(ql,Lt(e),r)}),Zl=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(v_,n,a,i);switch(r.$){case 0:var l=r.a,c=r.b;return t(Ul,l,t(f_,o,c));case 1:var l=r.a,u=r.b;return t(Gl,l,t(g_,o,u));case 3:var l=r.a,m=r.b;return t(Ii,l,t(p_,o,m));case 2:var l=r.a,d=r.b;return t(Nl,l,t(s_,o,d));case 4:var l=r.a,g=r.b;return t(Hl,l,t(d_,o,g));default:var p=r.a;return Ai(t(q,Zl(E(n,a,i)),p))}}),h_=function(e){return Zl(E(e,0,0))},b_=function(e){return Zl(E(0,e,0))},we=v(function(e,r){var n=r;return e*n}),$n=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},zt=T(function(e,r,n){var a=e,i=n;return{io:a.io+r*(i.io-a.io),is:a.is+r*(i.is-a.is),dU:a.dU+r*(i.dU-a.dU)}}),__=T(function(e,r,n){var a=Ei(n),i=kn(a),o=Dn(a),l=Fn(a),c=b(zt,e,r,Kn(a)),u=r>=0?Tn({dl:c,dS:i,dT:o,dV:l}):Tn({dl:c,dS:$n(i),dT:$n(o),dV:$n(l)}),m=Bi(n),d=m.a,g=m.b,p=m.c,f=Ke(t(we,r,d)),_=Ke(t(we,r,g)),x=Ke(t(we,r,p));return{fN:u,a4:E(f,_,x)}}),Ql=function(e){var r=e;return r.m},sf=function(e){return Vl(Ql(e))},df=function(e){var r=e;return r.dl},x_=function(e){return df(Ql(e))},pf=function(e){var r=e;return r.g5},gf=function(e){var r=e;return r.hs},w_=T(function(e,r,n){var a=Ke(t(we,r,gf(n))),i=Ke(t(we,r,pf(n))),o=r>=0?sf(n):$n(sf(n)),l=b(zt,e,r,x_(n));return{m:t(Qn,l,o),g5:i,hs:a}}),y_=T(function(e,r,n){return t(Ol,t(zt,e,r),n)}),S_=T(function(e,r,n){return t(ji,t(we,de(r),Ri(n)),b(zt,e,r,Vi(n)))}),C_=T(function(e,r,n){return t(ql,t(zt,e,r),n)}),hf=v(function(e,r){switch(r.$){case 0:var n=r.a,a=r.b;return t(Ul,n,b(__,Ar,e,a));case 1:var n=r.a,i=r.b;return t(Gl,n,b(C_,Ar,e,i));case 3:var n=r.a,o=r.b;return t(Ii,n,b(S_,Ar,e,o));case 2:var n=r.a,l=r.b;return t(Nl,n,b(w_,Ar,e,l));case 4:var n=r.a,c=r.b;return t(Hl,n,b(y_,Ar,e,c));default:var u=r.a;return Ai(t(q,hf(e),u))}}),L_=v(function(e,r){return t(Ii,e,t(ji,un(r),Ar))}),P_=v(function(e,r){return(r-Ru(r/e)*e)/e}),z_=function(e){return 2*qr*e},Ui=O(function(e,r,n,a){return e+(r-e)*(1+Zn(z_(t(P_,n,a))))/2}),M_=v(function(e,r){var n=e.d1+r*t(Pa,"delay per index",e),a=t(Pa,"saturation",e),i=t(vf,"number of spheres",e),o=30/i,l=t(Pa,"lighting",e),c=z(Ui,0,1,7,n);return t(b_,o*1.1*r,t(Yl,z(Ui,0,10,20,n),t(h_,z(Ui,3,4,1,n),t(hf,z(Ui,1,4,4,n),t(L_,$_(b(rf,c,a,l)),o)))))}),ec=function(e){var r=t(vf,"number of spheres",e);return c_(t(q,M_(e),t(jr,-(r/2|0),r/2|0)))},T_=function(e){return e},k_=function(e){return un(.01*e)},bf=function(e){return e},D_=function(e){return e},F_=function(e){return{$:0,a:e}},A_=F_,I_={$:3},E_=I_,B_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),V_=B_,R_=function(e){return{$:1,a:e}},j_=R_,U_=function(e){return t(Mr,"height",k(e))},N_=U$,H_=function(e){return{$:2,a:e}},G_=H_,W_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(c){return Pe(c*1e3)/1e3},l=function(c){return Pe(c*1e4)/100};return da($(["rgba(",ae(l(r)),"%,",ae(l(n)),"%,",ae(l(a)),"%,",ae(o(i)),")"]))},O_=v(function(e,r){switch(r.$){case 0:return t(Jp,e,r);case 1:return t(Yp,e,r);case 2:return t(Xp,e,r);case 3:return t(Kp,e,r);case 4:return t(Zp,e,r);default:return t(Qp,e,r)}}),q_=v(function(e,r){switch(r.$){case 0:return t(Sp,e,r);case 1:return t(Cp,e,r);case 2:return t(Lp,e,r);case 3:return t(Pp,e,r);case 4:return t(zp,e,r);case 5:return t(Mp,e,r);case 6:return t(Tp,e,r);case 7:return t(kp,e,r);default:return Dp(e)}}),J_=T(function(e,r,n){return b(qp,e,r,n)}),_f=function(e){var r=e;return r},Ma=fp,rc=z(Ma,1,1,1,1),Jr=T(function(e,r,n){return t(q,function(a){return t(a,r,n)},e)}),Y_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),X_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(Y_,n*a/i,n,n*(1-a-i)/i)}),K_=function(e){var r=e.a,n=e.b,a=e.c;return b(Pt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},nc=v(function(e,r){return K_(t(X_,e,r))}),xf=v(function(e,r){return{ek:le(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Yr=hp,Z_=function(e){return Yr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},ac=Ve(function(e,r,n,a,i){var o=a.ek?1:-1,l=z(Ma,a.cC,a.cC,a.cC,o);return er(i,e,l,Z_(a),a.ek,r,n)}),wf=gr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,m=r,d=n,g=t(xf,l,a),p=c,f=o;e=u,r=m,n=d,a=g,i=p,o=f;continue e;case 1:var _=i.b,x=t(M,F(ac,e,r,n,a,_),o.P);return{P:x,_:o._,hI:o.hI};case 3:var y=i.b,S=t(M,F(ac,e,r,n,a,y),o._);return{P:o.P,_:S,hI:o.hI};case 2:var w=i.a,C=t(M,F(ac,e,r,n,a,w),o.hI);return{P:o.P,_:o._,hI:C};default:var I=i.a;return b(Ie,z(wf,e,r,n,a),o,I)}}),Q_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),yf=Q_,tc=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),e2=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(tc,518,r,n,a)},r2=v(function(e,r){return{$:6,a:e,b:r}}),n2=r2,Sf=$([e2({ab:1,ac:0,ai:!1}),z(yf,!1,!1,!1,!1),t(n2,0,1)]),Ta=519,ic=8,Cf=15,ka=7681,a2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Me=yp,t2=v(function(e,r){return{$:0,a:e,b:r}}),i2=t2({d5:1,ei:0,eS:5}),pr=tp,o2=i2($([{cx:t(pr,-1,-1)},{cx:t(pr,1,-1)},{cx:t(pr,-1,1)},{cx:t(pr,1,1)}])),l2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},c2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(d){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m,k:d}}}}}}}}}}}},oc=T(function(e,r,n){var a=e.dx,i=e.dc,o=e.dR,l=v(function(m,d){var g=m;return d(g)}),c=v(function(m,d){var g=m;return d(g)}),u=function(m){return t(Ge,l(m.bO),t(Ge,c(m.bz),t(Ge,c(m.bX),c(m.bY))))};return t(u,n,t(u,r,b(c2,a,i,o)))}),lc=function(e){return b(oc,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},cc=function(e){return F(Me,$([lc(e),z(yf,!1,!1,!1,!1)]),l2,a2,o2,{})},u2=cc({bz:ka,dc:0,dx:ic,bO:Ta,dR:Cf,bX:ka,bY:ka}),$2=516,Lf=5386,Ze=7680,v2=function(e){return t(wt,2,e+4)},Pf=function(e){return cc({bz:Ze,dc:Cf,dx:ic,bO:$2,dR:v2(e),bX:Lf,bY:Lf})},f2=T(function(e,r,n){return ar($([b(Jr,e,n,Sf),$([Pf(r),u2])]))}),m2=v(function(e,r){return ar(t(Fu,f2(e),r))}),s2=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(tc,513,r,n,a)},d2=s2({ab:1,ac:0,ai:!0}),p2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m}}}}}}}}}}},g2=function(e){var r=e.cz,n=e.cf,a=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function(u,m){var d=u.a,g=u.b,p=u.c,f=m.a,_=m.b,x=m.c;return p2(d)(g)(p)(f)(_)(x)(r)(n)(a)(i)});return t(c,o,l)},h2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zf=v(function(e,r){var n=e,a=r;return b(h2,32774,n,a)}),b2=1,Mf=771,_2=770,uc=g2({bZ:0,fI:t(zf,b2,Mf),b0:0,b6:t(zf,_2,Mf),cf:0,cz:0}),Da=$([d2,uc]),x2=function(e){var r=e;return r.eL},w2=function(e){var r=e;return r.eM},Tf=function(e){var r=e;return r.eN},y2=function(e){var r=e;return r.eO},S2=function(e){var r=e;return r.eP},kf=function(e){var r=e;return r.eQ},Fa=v(function(e,r){var n=e,a=r;return a-n}),Df=function(e){return E(t(Fa,y2(e),x2(e)),t(Fa,S2(e),w2(e)),t(Fa,kf(e),Tf(e)))},Ff=function(e){var r=e;return Kn(r)},C2=function(e){return e},L2=function(e){return Tn({dl:C2({io:e.K,is:e.L,dU:e.M}),dS:ea({io:e.t,is:e.u,dU:e.v}),dT:ea({io:e.w,is:e.x,dU:e.y}),dV:ea({io:e.z,is:e.A,dU:e.B})})},$c=v(function(e,r){var n=e,a=r,i=n.dV,o=i,l=n.dT,c=l,u=n.dS,m=u;return{io:a.io*m.io+a.is*m.is+a.dU*m.dU,is:a.io*c.io+a.is*c.is+a.dU*c.dU,dU:a.io*o.io+a.is*o.is+a.dU*o.dU}}),Af=v(function(e,r){var n=e,a=r,i=n.dl,o=i,l=a.io-o.io,c=a.is-o.is,u=a.dU-o.dU,m=n.dV,d=m,g=n.dT,p=g,f=n.dS,_=f;return{io:l*_.io+c*_.is+u*_.dU,is:l*p.io+c*p.is+u*p.dU,dU:l*d.io+c*d.is+u*d.dU}}),If=v(function(e,r){return{dl:t(Af,e,Kn(r)),dS:t($c,e,kn(r)),dT:t($c,e,Dn(r)),dV:t($c,e,Fn(r))}}),P2=T(function(e,r,n){return{io:e,is:r,dU:n}}),Ni=function(e){var r=e;return r},Be=v(function(e,r){var n=e,a=r;return t(br,n,a)}),Ue=v(function(e,r){var n=e,a=r;return t(ha,n,a)}),z2=v(function(e,r){var n=Ni(r),a=Ni(e);return{eL:t(Be,a.eL,n.eL),eM:t(Be,a.eM,n.eM),eN:t(Be,a.eN,n.eN),eO:t(Ue,a.eO,n.eO),eP:t(Ue,a.eP,n.eP),eQ:t(Ue,a.eQ,n.eQ)}}),Sr=function(e){var r=e;return r},M2=function(e){var r=e;return E(r.io,r.is,r.dU)},Mt=v(function(e,r){var n=e,a=r;return a+n}),T2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Fi(Ke(a)),l=Fi(Ke(n)),c=Fi(Ke(i)),u=M2(r),m=u.a,d=u.b,g=u.c;return{eL:t(Mt,l,m),eM:t(Mt,o,d),eN:t(Mt,c,g),eO:t(Fa,l,m),eP:t(Fa,o,d),eQ:t(Fa,c,g)}}),Ef=O(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,l=2*n.gE*r,c=2*n.gD*r,u=i.dU*r,m=i.is*r,d=i.io*r,g=Sr(Fn(e)),p=de(c*g.io)+de(l*g.is)+de(o*g.dU),f=Sr(Dn(e)),_=de(c*f.io)+de(l*f.is)+de(o*f.dU),x=Sr(kn(e)),y=de(c*x.io)+de(l*x.is)+de(o*x.dU),S=t(T2,E(y,_,p),t(Af,e,b(P2,d,m,u)));if(a.$)return N(S);var w=a.a;return N(t(z2,w,S))}),vc=O(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 1:var d=i.a,g=z(Ef,e,r,d,n),l=e,c=r,u=g,m=o;e=l,r=c,n=u,a=m;continue e;case 2:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 3:var d=i.a,g=z(Ef,e,r,d,n),l=e,c=r,u=g,m=o;e=l,r=c,n=u,a=m;continue e;case 4:var p=i.a,l=e,c=r,u=z(vc,e,r,n,p),m=o;e=l,r=c,n=u,a=m;continue e;default:var f=i.a,_=i.b,x=t(If,L2(f),e),y=r*f.cC,l=e,c=r,u=z(vc,x,y,n,$([_])),m=o;e=l,r=c,n=u,a=m;continue e}}else return n}),Aa=lp,Ia=cp,Ea=up,Bf=function(e){return{$:4,a:e}},k2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Tt=function(e){return Bf(t(k2,e,D))},D2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},F2=function(e){var r=e;return r},Vf=cc({bz:ka,dc:0,dx:ic,bO:Ta,dR:255,bX:ka,bY:ka}),Ba=Ss,vn=0,A2=function(e){var r=e,n=t(br,de(r.io),t(br,de(r.is),de(r.dU)));if(n){var a=r.dU/n,i=r.is/n,o=r.io/n,l=Ba(o*o+i*i+a*a);return l*n}else return vn},cr={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},Cr=v(function(e,r){var n=e,a=r;return Yr({eu:n.io,ev:n.cz,ew:a.io,ex:a.cz,ey:n.is,ez:n.cf,eA:a.is,eB:a.cf,eC:n.dU,eD:n.b0,eE:a.dU,eF:a.b0,eG:n.dJ,eH:n.du,eI:a.dJ,eJ:a.du})}),kt=P({bF:t(Cr,cr,cr),cm:t(Cr,cr,cr),cn:t(Cr,cr,cr),co:t(Cr,cr,cr)},z(Ma,0,0,0,0)),Rf=514,jf=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(tc,515,r,n,a)},Uf=240,I2=$([jf({ab:1,ac:0,ai:!0}),lc({bz:Ze,dc:Uf,dx:0,bO:Rf,dR:0,bX:Ze,bY:Ze}),uc]),E2=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,l=Ke(a),c=l,u=Ke(i),m=u,d=n.dw;if(d.$){var p=d.a;return Jo(m)?Yr({eu:2/(o*p),ev:0,ew:0,ex:0,ey:0,ez:2/p,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Yr({eu:2/(o*p),ev:0,ew:0,ex:0,ey:0,ez:2/p,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-c),eF:-(m+c)/(m-c),eG:0,eH:0,eI:0,eJ:1})}else{var g=d.a;return Jo(m)?Yr({eu:1/(o*g),ev:0,ew:0,ex:0,ey:0,ez:1/g,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):Yr({eu:1/(o*g),ev:0,ew:0,ex:0,ey:0,ez:1/g,eA:0,eB:0,eC:0,eD:0,eE:-(m+c)/(m-c),eF:-2*m*c/(m-c),eG:0,eH:0,eI:-1,eJ:0})}}),Hi=v(function(e,r){return(1&e>>r)==1?0:1}),B2=function(e){return $([jf({ab:1,ac:0,ai:!0}),lc({bz:Ze,dc:Uf,dx:e,bO:Rf,dR:0,bX:Ze,bY:Ze}),uc])},V2=T(function(e,r,n){return ar(t(q,function(a){var i=a<<4,o=z(Ma,t(Hi,a,0),t(Hi,a,1),t(Hi,a,2),t(Hi,a,3));return b(Jr,e,P(r,o),B2(i))},t(jr,1,t(wt,2,n)-1)))}),Va=function(e){var r=e;return r},R2=bp,Nf=function(e){var r=e;return $n(Fn(r))},j2={dl:Ar,dS:Rl,dT:Jl,dV:jl},Gi=function(e){var r=e;return r},U2=function(e){var r=Gi(Kn(e)),n=Sr(Fn(e)),a=Sr(Dn(e)),i=Sr(kn(e));return Yr({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dU,eD:a.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},N2=v(function(e,r){var n=r;return U2(t(If,n,e))}),H2=function(e){return t(N2,j2,e)},G2=function(e){var r=e;return r.dM},W2=function(e){var r=e;return kn(r)},O2=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),q2=function(e){var r=e;return Dn(r)},J2=function(e){var r=G2(e.f0),n=Tn({dl:Ff(r),dS:W2(r),dT:q2(r),dV:$n(Nf(r))}),a=Tt(e.a8),i=a,o=z(vc,n,1,j,$([i]));if(o.$===1)return D;var l=o.a,c=H2(r),u=t(we,.99,t(Be,Ke(e.a3),Bl(Tf(l)))),m=Df(l),d=m.a,g=m.b,p=m.c,f=A2(b(O2,d,g,p)),_=t(we,1.01,t(Mt,f,Bl(kf(l)))),x=t(E2,e.f0,{fM:e.fM,gv:_,hd:u}),y=R2(x).eJ,S=y?Sr($n(Nf(r))):Va(Ff(r)),w=function(){var me=e.cG;switch(me.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var ye=me.a;return P(3,ye);case 4:var ye=me.a;return P(4,ye);default:return P(5,0)}}(),C=w.a,I=w.b,J=e.cd,K=J,G=t(nc,K,e.cK),Y=G,X=Yr({eu:0,ev:S.io,ew:Aa(Y),ex:e.ff,ey:0,ez:S.is,eA:Ia(Y),eB:F2(f),eC:0,eD:S.dU,eE:Ea(Y),eF:C,eG:0,eH:y,eI:0,eJ:I}),V=er(wf,X,c,x,D2,i,{P:D,_:D,hI:D}),ne=e.cl;switch(ne.$){case 0:var ve=ne.a;return ar($([b(Jr,V.P,P(ve,rc),Da),b(Jr,V._,kt,Da)]));case 1:var ve=ne.a;return ar($([b(Jr,V.P,kt,Da),$([Vf]),b(Jr,V.hI,ve.bF,Sf),$([Pf(0)]),b(Jr,V.P,P(ve,rc),I2),b(Jr,V._,kt,Da)]));default:var xe=ne.a,fe=ne.b;return ar($([b(Jr,V.P,P(fe,rc),Da),$([Vf]),t(m2,V.hI,xe),b(V2,V.P,fe,Vn(xe)),b(Jr,V._,kt,Da)]))}},Y2=function(e){return t(Mr,"width",k(e))},X2=v(function(e,r){var n=$([j_(1),G_(0),A_(!0),z(V_,0,0,0,0)]),a=function(){var C=e.cO;switch(C.$){case 0:return E(n,"0",1);case 1:return E(t(M,E_,n),"1",1);default:var I=C.a;return E(n,"0",I)}}(),i=a.a,o=a.b,l=a.c,c=e.a4,u=c.a,m=c.b,d=_f(m),g=t(dr,"height",k(d)+"px"),p=_f(u),f=p/d,_=t(sa,function(C){return J2({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,cd:C.cd,cl:C.cl,ff:l,cG:C.cG,cK:C.cK})},r),x=t(dr,"width",k(p)+"px"),y=e.a1,S=y,w=W_(S);return b(N_,"div",$([t(dr,"padding","0px"),x,g]),$([P(o,b(J_,i,$([Y2(Pe(p*l)),U_(Pe(d*l)),x,g,t(dr,"display","block"),t(dr,"background-color",w)]),_))]))}),K2=function(e){return t(X2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},Hf=function(e){return e},Gf=Hf({io:.31271,is:.32902}),Z2=v(function(e,r){var n=e,a=Sr(r.gm),i=a.io,o=a.is,l=a.dU,c=t(nc,r.c0,r.cT),u=c;return{b0:Ea(u),f3:n,cf:Ia(u),du:0,cz:Aa(u),dJ:1,io:-i,is:-o,dU:-l}}),Q2=function(e){return e},ex=function(e){return Q2(1.2*t(wt,2,e))},fc=function(e){return e},rx={$:0},nx=rx,Wf=function(e){return e},ax=v(function(e,r){var n=e,a=r;return $e(a,n)>0}),Of=function(e){var r=e;return r},tx=function(e){e:for(;;){if(le(e.gZ,vn)&&le(e.g_,vn))return cr;if(t(ax,Ke(e.gZ),Ke(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:$n(e.fm)};e=r;continue e}else{var n=de(Of(e.g_)/qr),a=de(Of(e.gZ)/qr),i=Sr(e.fm),o=i.io,l=i.is,c=i.dU,u=t(nc,Wf(1),e.cT),m=u;return{b0:a*Ea(m),f3:!1,cf:a*Ia(m),du:n/a,cz:a*Aa(m),dJ:3,io:o,is:l,dU:c}}}},qf=function(e){return tx({cT:e.cT,gZ:e.c0,g_:vn,fm:e.fm})},ix=function(e){var r=e;return r},Jf=function(e){var r=b(mf,1667,25e3,ix(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Hf({io:n,is:a})},Yf=function(e){return e},ox=Jf(Yf(12e3)),lx=Jf(Yf(5600)),cx=function(e){return{$:2,a:e}},ux=function(e){return cx(e)},$x=v(function(e,r){return{$:2,a:e,b:r}}),Xf=function(e){return{$:0,a:e}},Wi=function(e){var r=e;return r},vx=function(e){var r=e;return r.f3},fx=Xf(kt.a),mx=v(function(e,r){var n=v(function(a,i){var o=i.a,l=i.b;return e(a)?P(t(M,a,o),l):P(o,t(M,a,l))});return b(He,n,P(D,D),r)}),sx=function(e){var r=e;return Yr({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},dx=be(function(e,r,n,a,i,o,l,c){var u=t(mx,vx,$([Wi(e),Wi(r),Wi(n),Wi(a)])),m=u.a,d=u.b;if(m.b){var g=U(m,d);if(g.b&&g.b.b&&g.b.b.b&&g.b.b.b.b&&!g.b.b.b.b.b){var p=g.a,f=g.b,_=f.a,x=f.b,y=x.a,S=x.b,w=S.a;return t($x,t(q,sx,m),{bF:t(Cr,p,_),cm:t(Cr,y,w),cn:t(Cr,i,o),co:t(Cr,l,c)})}else return fx}else return Xf({bF:t(Cr,e,r),cm:t(Cr,n,a),cn:t(Cr,i,o),co:t(Cr,l,c)})}),px=T(function(e,r,n){return Ga(dx,e,r,n,cr,cr,cr,cr,cr)}),gx=function(e){var r=t(Z2,D_(e.hI),{cT:lx,gm:e.hZ,c0:fc(8e4)}),n=qf({cT:ox,c0:fc(2e4),fm:e.fm}),a=qf({cT:Gf,c0:fc(15e3),fm:$n(e.fm)}),i=b(px,r,n,a);return K2({cO:ux(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:ex(15),cl:i,cG:nx,cK:Gf})},Kf=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),hx=O(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Zf=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Qf=O(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),bx=O(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),_x=O(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),xx=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),mc=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return z(xx,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return z(Kf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return z(hx,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return z(Zf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return z(_x,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return z(Qf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return z(bx,r,i,a,1);case 8:return e;case 9:return e;default:return e}},sc={$:0},wx=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var u=c.a,m=c.b,d=Ni(l(u)),g=t(Ue,d.eO,e),p=t(Be,d.eL,r),f=t(Ue,d.eP,n),_=t(Be,d.eM,a),x=t(Ue,d.eQ,i),y=t(Be,d.eN,o),S=l,w=m;e=g,r=p,n=f,a=_,i=x,o=y,l=S,c=w;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),yx=T(function(e,r,n){var a=Ni(e(r));return Ga(wx,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),dc=v(function(e,r){var n=e,a=r;return $e(a,n)<1}),em=function(e){return t(dc,e.eL,e.eO)&&t(dc,e.eM,e.eP)&&t(dc,e.eN,e.eQ)?e:{eL:t(Be,e.eO,e.eL),eM:t(Be,e.eP,e.eM),eN:t(Be,e.eQ,e.eN),eO:t(Ue,e.eO,e.eL),eP:t(Ue,e.eP,e.eM),eQ:t(Ue,e.eQ,e.eN)}},Dt=function(e){var r=e;return r},Ft=function(e){var r=e;return r.io},At=function(e){var r=e;return r.is},It=function(e){var r=e;return r.dU},rm=function(e){var r=Dt(e),n=r.a,a=r.b,i=r.c,o=Ft(n),l=At(n),c=It(n),u=Ft(a),m=At(a),d=It(a),g=Ft(i),p=At(i),f=It(i);return em({eL:t(Be,o,t(Be,u,g)),eM:t(Be,l,t(Be,m,p)),eN:t(Be,c,t(Be,d,f)),eO:t(Ue,o,t(Ue,u,g)),eP:t(Ue,l,t(Ue,m,p)),eQ:t(Ue,c,t(Ue,d,f))})},nm=$p,ur=function(e){return nm(Gi(e))},am=function(e){var r=e;return r},Oi=function(e){return nm(am(e))},Sx=v(function(e,r){var n=e,a=r;return{io:a.is*n.dU-a.dU*n.is,is:a.dU*n.io-a.io*n.dU,dU:a.io*n.is-a.is*n.io}}),pc=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dU:a.dU-n.dU}}),Cx={io:0,is:0,dU:0},Lx=v(function(e,r){var n=e,a=r,i=t(br,de(a.io),t(br,de(a.is),de(a.dU)));if(i){var o=a.dU/i,l=a.is/i,c=a.io/i,u=Ba(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dU:n*o/u}}else return Cx}),Px=Lx(Wf(1)),tm=T(function(e,r,n){var a=t(pc,r,n),i=t(pc,e,r);return Px(t(Sx,a,i))}),zx=function(e){var r=Dt(e),n=r.a,a=r.b,i=r.c,o=Oi(b(tm,n,a,i));return E({q:o,cx:ur(n)},{q:o,cx:ur(a)},{q:o,cx:ur(i)})},Mx=v(function(e,r){return{$:2,a:e,b:r}}),im=Mx({d5:3,ei:0,eS:4}),Tx=function(e){if(e.b){var r=e.a,n=e.b,a=im(t(q,zx,e)),i=b(yx,rm,r,n);return z(Kf,i,e,a,0)}else return sc},Lr=T(function(e,r,n){return E(e,r,n)}),qe=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),om=function(){var e=un(1),r=un(1),n=un(1),a=t(we,-.5,e),i=t(we,-.5,r),o=t(we,-.5,n),l=b(qe,o,i,a),c=t(we,.5,e),u=b(qe,o,i,c),m=t(we,.5,r),d=b(qe,o,m,a),g=b(qe,o,m,c),p=t(we,.5,n),f=b(qe,p,i,a),_=b(qe,p,m,a),x=b(qe,p,i,c),y=b(qe,p,m,c);return mc(Tx($([b(Lr,l,_,f),b(Lr,l,d,_),b(Lr,u,x,y),b(Lr,u,y,g),b(Lr,f,_,y),b(Lr,f,y,x),b(Lr,l,g,d),b(Lr,l,u,g),b(Lr,l,f,x),b(Lr,l,x,u),b(Lr,d,y,_),b(Lr,d,g,y)])))}(),qi={$:0},kx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Dx=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(a),m=Oi(b(tm,u,c,l)),d={q:m,cx:ur(u)},g={q:m,cx:ur(c)},p={q:m,cx:ur(l)};return t(M,d,t(M,g,t(M,p,n)))}),gc=function(e){var r=e;return r.H},Fx=O(function(e,r,n,a){if(r.$===1)return j;var i=r.a;if(n.$===1)return j;var o=n.a;if(a.$===1)return j;var l=a.a;return N(b(e,i,o,l))}),hc=4294967295>>>32-Qa,bc=ls,Ax=T(function(e,r,n){e:for(;;){var a=hc&r>>>e,i=t(bc,a,n);if(i.$){var m=i.a;return t(bc,hc&r,m)}else{var o=i.a,l=e-Qa,c=r,u=o;e=l,r=c,n=u;continue e}}}),Ix=function(e){return e>>>5<<5},Ex=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||$e(e,n)>-1?j:$e(e,Ix(n))>-1?N(t(bc,hc&e,o)):N(b(Ax,a,e,i))}),_c=function(e){var r=e;return r.au},xc=v(function(e,r){return t(Ex,e,_c(r))}),Bx=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return z(Fx,T(function(l,c,u){return E(l,c,u)}),t(xc,a,e),t(xc,i,e),t(xc,o,e))};return t(Gr,r,gc(e))},Vx=T(function(e,r,n){e:for(;;){var a=t(No,vr,e),i=a.a,o=a.b;if($e(Uo(i),vr)<0)return t(Uu,!0,{C:r,n,r:i});var l=o,c=t(M,Vu(i),r),u=n+1;e=l,r=c,n=u;continue e}}),wc=function(e){return e.b?b(Vx,e,D,0):Eu},Rx=v(function(e,r){return!t(at,t(lt,Fg,e),r)}),jx=function(e){var r=e.a;return r},lm=v(function(e,r){var n=jx(e),a=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&$e(o,n)<0&&l>=0&&$e(l,n)<0&&c>=0&&$e(c,n)<0};return t(Rx,a,r)?{H:r,au:e}:{H:t(F$,a,r),au:e}}),Ux=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Et=Ux({d5:1,ei:3,eS:4}),Ji=v(function(e,r){var n=Va(r),a=Va(e);return P(E(a.io,a.is,a.dU),E(n.io,n.is,n.dU))}),cm=b(Pt,0,0,0),yc=gr(function(e,r,n,a,i,o){var l=o.a,c=o.b,u=o.c,m=t(ca,t(Ji,e,r),i);if(m.$){var g={q:cm,cx:ur(r)},p={q:cm,cx:ur(e)},f=u+1,_=u;return E(t(M,E(n,_,f),t(M,E(n,f,a),l)),t(M,g,t(M,p,c)),u+2)}else{var d=m.a;return E(t(M,E(n,d,a),l),c,u)}}),Nx=Ve(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,m=n.b,d=e(u),g=e(c),p=e(l),f=a+2,_=a+1,x=a,y=e,S=r,w=m,C=a+3,I=er(yc,d,p,f,x,r,er(yc,g,d,_,f,r,er(yc,p,g,x,_,r,i)));e=y,r=S,n=w,a=C,i=I;continue e}else{var J=i,K=J.a,G=J.b;return P(K,rr(G))}}),Hx=Ve(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,m=r.b,d=e(u),g=e(c),p=e(l),f=n+2,_=n+1,x=n,y=b($a,t(Ji,p,d),f,b($a,t(Ji,d,g),_,b($a,t(Ji,g,p),x,i))),S=t(M,E(x,_,f),a),w=e,C=m,I=n+3,J=S,K=y;e=w,r=C,n=I,a=J,i=K;continue e}else return E(a,i,n)}),ra=T(function(e,r,n){var a=Bx(n),i=b(He,Dx(r),D,a),o=F(Hx,r,a,0,D,nl),l=o.a,c=o.b,u=o.c,m=F(Nx,r,c,a,0,E(l,D,u)),d=m.a,g=m.b,p=xn(g)?i:U(i,g);return b(kx,e,t(lm,wc(p),d),t(Et,p,d))}),Sc=function(e){return{H:t(q,function(r){return E(3*r,3*r+1,3*r+2)},t(jr,0,Vn(e)-1)),au:wc(ar(t(q,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},um=function(e){switch(e.$){case 0:return qi;case 1:var r=e.a,n=e.b,a=t(q,Dt,n);return b(ra,r,Dr,Sc(a));case 2:var r=e.a,n=e.b,a=t(q,Dt,n);return b(ra,r,Dr,Sc(a));case 3:var r=e.a,i=e.b;return b(ra,r,Dr,i);case 4:var r=e.a,i=e.b;return b(ra,r,function(o){return o.cx},i);case 5:var r=e.a,i=e.b;return b(ra,r,function(o){return o.cx},i);case 6:var r=e.a,i=e.b;return b(ra,r,function(o){return o.cx},i);case 7:var r=e.a,i=e.b;return b(ra,r,function(o){return o.cx},i);case 8:return qi;case 9:return qi;default:return qi}},$m=um(om),vm={$:0},B=vm,We=v(function(e,r){return{$:1,a:e,b:r}}),Gx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},Wx=1029,Ox=function(e){return{$:5,a:e}},fm=function(e){var r=e;return Ox(r)},qx=fm(Wx),Jx=1028,Yx=fm(Jx),$r=T(function(e,r,n){return r===1?e?t(M,qx,n):t(M,Yx,n):n}),mm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Cc=O(function(e,r,n,a){return t(We,r,be(function(i,o,l,c,u,m,d,g){return F(Me,b($r,c,a,g),mm,Gx,n,{b7:e,c:l,d:o,e:m,f:i,g:u})}))}),Lc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},sm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},fn=O(function(e,r,n,a){return t(We,r,be(function(i,o,l,c,u,m,d,g){return F(Me,b($r,c,a,g),sm,Lc,n,{aO:e,c:l,d:o,e:m,f:i,g:u})}))}),dm=v(function(e,r){return{$:3,a:e,b:r}}),Xx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},pm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Kx=O(function(e,r,n,a){return t(dm,n,be(function(i,o,l,c,u,m,d,g){return F(Me,g,pm,Xx,a,{aO:e,c:l,d:o,cw:r,e:m,f:i,g:u})}))}),Pc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Bt=function(e){var r=e;return r},Yi=vp,mn=Ve(function(e,r,n,a,i){return t(We,n,be(function(o,l,c,u,m,d,g,p){return F(Me,b($r,u,i,p),sm,Pc,a,{a6:t(Yi,Bt(r),e),c,d:l,e:d,f:o,g:m})}))}),Zx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Qx=Ve(function(e,r,n,a,i){return t(dm,a,be(function(o,l,c,u,m,d,g,p){return F(Me,p,pm,Zx,i,{a6:t(Yi,Bt(r),e),c,d:l,cw:n,e:d,f:o,g:m})}))}),gm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},hm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Xi=O(function(e,r,n,a){return t(We,r,be(function(i,o,l,c,u,m,d,g){var p=d.a,f=d.b;return F(Me,b($r,c,a,g),hm,gm,n,{U:f,bF:p.bF,cm:p.cm,cn:p.cn,co:p.co,dd:e,c:l,d:o,e:m,f:i,g:u})}))}),bm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},_m={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ew=gr(function(e,r,n,a,i,o){return t(We,a,be(function(l,c,u,m,d,g,p,f){var _=p.a,x=p.b;return F(Me,b($r,m,o,f),_m,bm,i,{U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,de:e,c:u,d:c,bg:r,e:g,f:l,bm:n,g:d})}))}),xm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},rw=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(d){return t(We,u,be(function(g,p,f,_,x,y,S,w){var C=S.a,I=S.b;return F(Me,b($r,_,d,w),_m,xm,m,{cS:e,cU:r,cV:o,cW:a,U:I,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:f,d:p,bg:l,e:y,dB:n,f:g,bm:c,g:x})}))}}}}}}}}}}},wm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},Ki=gr(function(e,r,n,a,i,o){return t(We,a,be(function(l,c,u,m,d,g,p,f){var _=p.a,x=p.b;return F(Me,b($r,m,o,f),hm,wm,i,{cR:e,U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,dg:n,c:u,d:c,e:g,dA:r,f:l,g:d})}))}),nw=function(e){return{$:0,a:e}},ym=v(function(e,r){return{$:1,a:e,b:r}}),Vt=v(function(e,r){if(r.$){var n=r.a.E;return P(n,1)}else return r.a,P(e,0)}),aw=function(e){return z(Ma,Aa(e),Ia(e),Ea(e),1)},zc=z(Ma,0,0,0,0),Zi=v(function(e,r){if(r.$){var a=r.a.E;return P(a,zc)}else{var n=r.a;return P(e,aw(n))}}),Sm=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.E;return t(ym,P(i,zc),t(Vt,i,r))}else if(n.b.$){var i=n.b.a.E;return t(ym,t(Zi,i,e),t(Vt,i,r))}else{var a=n.a.a;return n.b.a,nw(a)}}),tw=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qi=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),iw=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ow=function(e){return t(pr,e,1)},Mc=t(pr,0,0),Ra=v(function(e,r){if(r.$){var a=r.a.E;return P(a,Mc)}else{var n=r.a;return P(e,ow(n))}}),Cm=O(function(e,r,n,a){var i=z(iw,e,r,n,a);if(i.a.$){var u=i.a.a.E;return z(Qi,P(u,zc),t(Ra,u,r),t(Ra,u,n),t(Vt,u,a))}else if(i.b.$){var u=i.b.a.E;return z(Qi,t(Zi,u,e),P(u,Mc),t(Ra,u,n),t(Vt,u,a))}else if(i.c.$){var u=i.c.a.E;return z(Qi,t(Zi,u,e),t(Ra,u,r),P(u,Mc),t(Vt,u,a))}else if(i.d.$){var u=i.d.a.E;return z(Qi,t(Zi,u,e),t(Ra,u,r),t(Ra,u,n),P(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,b(tw,o,l,c)}}),lw={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},Tc=Ve(function(e,r,n,a,i){return t(We,n,be(function(o,l,c,u,m,d,g,p){return F(Me,b($r,u,i,p),mm,lw,a,{cP:Bt(r),b7:e,c,d:l,e:d,f:o,g:m})}))}),Lm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},cw=O(function(e,r,n,a){return t(We,r,be(function(i,o,l,c,u,m,d,g){var p=d.a,f=d.b;return F(Me,b($r,c,a,g),Lm,bm,n,{U:f,bF:p.bF,cm:p.cm,cn:p.cn,co:p.co,de:e,c:l,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),uw=mo(function(e,r,n,a,i,o,l,c,u){return t(We,l,be(function(m,d,g,p,f,_,x,y){var S=x.a,w=x.b;return F(Me,b($r,p,u,y),Lm,xm,c,{cS:e,cU:r,cV:o,cW:a,U:w,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,dh:i,c:g,d,bg:e,e:_,dB:n,f:m,bm:0,g:f})}))}),Rt=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),$w=function(e){var r=e;return b(Rt,r.eO,r.eL,.5)},vw=function(e){var r=e;return b(Rt,r.eP,r.eM,.5)},fw=function(e){var r=e;return b(Rt,r.eQ,r.eN,.5)},mw=function(e){return b(qe,$w(e),vw(e),fw(e))},ie=function(e){var r=Df(e),n=r.a,a=r.b,i=r.c;return{f4:Gi(mw(e)),gD:n/2,gE:a/2,gF:i/2}},kc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return z(Cc,c,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(Cc,c,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(Cc,c,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var n=e.b.a;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return z(fn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return z(fn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return z(fn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return z(fn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return z(fn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(fn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(fn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return z(fn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return z(fn,n,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return z(Kx,n,l,ie(a),i)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,m=e.c;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return F(Tc,c,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(Tc,c,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(Tc,c,m,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(mn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return F(mn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return F(mn,u,m,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return F(Qx,u,m,l,ie(a),i)}}case 2:e.a;var d=e.b,g=e.c,p=t(Sm,d,g);if(p.$){var x=p.a,y=x.a;x.b;var S=p.b,w=S.a,C=S.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return z(cw,y,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return er(ew,y,w,C,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}else{var f=p.a;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,_=r.d;return z(Xi,f,ie(a),i,_);case 3:return B;case 4:var a=r.a,i=r.c,_=r.d;return z(Xi,f,ie(a),i,_);case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return z(Xi,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return z(Xi,f,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}default:e.a;var I=e.b,J=e.c,K=e.d,g=e.e,G=z(Cm,I,J,K,g);if(G.$){var ne=G.a,ve=ne.a,xe=ne.b,fe=G.b,me=fe.a,ye=fe.b,se=G.c,Ae=se.a,Te=se.b,Je=G.d,w=Je.a,C=Je.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return ns(uw,ve,xe,me,ye,Ae,Te,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return rw(ve)(xe)(me)(ye)(Ae)(Te)(w)(C)(ie(a))(i)(o);case 8:return B;case 9:return B;default:return B}}else{var Y=G.a,X=G.b,V=G.c;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,o=r.d;return er(Ki,Y,X,V,ie(a),i,o);case 3:return B;case 4:var a=r.a,i=r.c,o=r.d;return er(Ki,Y,X,V,ie(a),i,o);case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return er(Ki,Y,X,V,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return er(Ki,Y,X,V,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}}}),Dc=function(e){var r=e;return r.io},Fc=function(e){var r=e;return r.is},Ac=function(e){var r=e;return r.dU},sw=function(e){var r=e,n=Ac(r.dV),a=Fc(r.dV),i=Dc(r.dV),o=Ac(r.dT),l=Fc(r.dT),c=Dc(r.dT),u=Ac(r.dS),m=Fc(r.dS),d=Dc(r.dS);return d*l*n+m*o*i+u*c*a-u*l*i-m*c*n-d*o*a>0},dw=function(e){var r=Gi(Kn(e)),n=Sr(Fn(e)),a=Sr(Dn(e)),i=Sr(kn(e));return{ek:sw(e),t:i.io,u:i.is,v:i.dU,w:a.io,x:a.is,y:a.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},ja=v(function(e,r){return{$:5,a:e,b:r}}),Pm=v(function(e,r){var n=r;switch(n.$){case 0:return B;case 5:var a=n.a,i=n.b,o=t(xf,a,e);return t(ja,o,i);case 1:return t(ja,e,n);case 3:return t(ja,e,n);case 2:return t(ja,e,n);default:return t(ja,e,n)}}),zm=v(function(e,r){return t(Pm,dw(e),r)}),eo=function(e){return{$:2,a:e}},pw=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dU:i*o.dU},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),gw=sp,hw=mp,Mm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){var d=e.a,g=e.b,p=e.c,f=hw(a),_=f.io,x=f.is,y=f.dU,S=f.ft,w=gw({ft:S,io:_*d,is:x*g,dU:y*p});return Ga(r,n,w,i,o,l,c,u,m)}}}}}}}}}},Ic=v(function(e,r){switch(r.$){case 0:return vm;case 5:var n=r.a,a=r.b;return t(ja,n,t(Ic,e,a));case 1:var i=r.a,o=r.b;return t(We,t(pw,e,i),t(Mm,e,o));case 3:return r;case 2:var o=r.a;return eo(t(Mm,e,o));default:var l=r.a;return Bf(t(q,Ic(e),l))}}),Ec=v(function(e,r){var n=r;return t(Ic,e,n)}),Bc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Tm=7683,km=7682,bw=b(oc,{dc:0,dx:0,dR:15},{bz:Ze,bO:Ta,bX:Ze,bY:Tm},{bz:Ze,bO:Ta,bX:Ze,bY:km}),_w=b(oc,{dc:0,dx:0,dR:15},{bz:Ze,bO:Ta,bX:Ze,bY:km},{bz:Ze,bO:Ta,bX:Ze,bY:Tm}),Vc=v(function(e,r){return e?t(M,_w,r):t(M,bw,r)}),xw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},ww=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,l,c,u,m){return F(Me,t(Vc,o,m),xw,Bc,r,{c:i,d:a,e:c,f:n,cD:u,g:l})}))}else return j},ro=function(e){var r=ww(e);if(r.$)return B;var n=r.a;return eo(n)},yw=O(function(e,r,n,a){var i=t(kc,n,om),o=function(){var d=P(e,r);return d.a?d.b?Tt($([i,ro($m)])):i:d.b?ro($m):B}(),l=Bi(a),c=l.a,u=l.b,m=l.c;return t(zm,Ei(a),t(Ec,E(c,u,m),o))}),Sw=v(function(e,r){return z(yw,!0,!0,e,r)}),Dm=v(function(e,r){return{$:0,a:e,b:r}}),Cw=function(e){var r=Sl(e),n=r.hu,a=r.gA,i=r.fS;return b(Pt,n,a,i)},Lw=function(e){return t(Dm,0,Xl(Cw(e)))},jt=function(e){var r=e;return Zn(r)},Pw=v(function(e,r){var n=r;return n/e}),Fm=function(e){var r=e;return{io:Zn(r),is:za(r)}},zw=v(function(e,r){var n=e.cx,a=e.q;return t(M,{q:Oi(a),cx:ur(n)},r)}),Mw=Wt(function(e,r,n,a,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,m=Ea(c.cx),d=Ia(c.cx),g=Aa(c.cx),p=t(ha,e,g),f=t(br,r,g),_=t(ha,n,d),x=t(br,a,d),y=t(ha,i,m),S=t(br,o,m),w=u;e=p,r=f,n=_,a=x,i=y,o=S,l=w;continue e}else return em({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),Am=v(function(e,r){var n=Ea(e.cx),a=Ia(e.cx),i=Aa(e.cx);return so(Mw,i,i,a,a,n,n,r)}),Tw=function(e){var r=b(Lu,zw,D,_c(e));if(r.b){var n=r.a,a=r.b,i=t(Et,r,gc(e)),o=t(Am,n,a);return z(Zf,o,e,i,0)}else return sc},kw=ea({io:0,is:0,dU:-1}),Im=v(function(e,r){var n=e,a=r,i=n.dT,o=i,l=n.dS,c=l;return{io:a.io*c.io+a.is*o.io,is:a.io*c.is+a.is*o.is,dU:a.io*c.dU+a.is*o.dU}}),no=function(e){var r=e;return za(r)},Ut=function(e){var r=e;return r},Rc=function(e){return Xn(2*qr*e)},Em=cf({dl:Ar,dS:Rl,dT:Jl}),Bm=function(){var e=72,r=t(Pw,e,Rc(1)),n=un(1),a=Ut(uf),i=Ut(kw),o=un(1),l=t(we,.5,o),c=b(qe,vn,vn,l),u=t(we,-.5,o),m=b(qe,vn,vn,u),d=function(f){var _=t(we,f,r),x=Ut(t(Im,Em,Fm(_))),y=t(we,jt(_),n),S=t(we,no(_),n),w=b(qe,y,S,l),C=b(qe,y,S,u),I=t(Li,e,f+1),J=t(we,I,r),K=Ut(t(Im,Em,Fm(J))),G=t(we,jt(J),n),Y=t(we,no(J),n),X=b(qe,G,Y,u),V=b(qe,G,Y,l);return $([E({q:i,cx:m},{q:i,cx:X},{q:i,cx:C}),E({q:x,cx:C},{q:K,cx:X},{q:K,cx:V}),E({q:x,cx:C},{q:K,cx:V},{q:x,cx:w}),E({q:a,cx:c},{q:a,cx:w},{q:a,cx:V})])},g=t(q,d,t(jr,0,e-1)),p=Sc(ar(g));return mc(Tw(p))}(),Vm=um(Bm),Dw=function(e){var r=e,n=de(r.dU),a=de(r.is),i=de(r.io);if($e(i,a)<1)if($e(i,n)<1){var o=Ba(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=Ba(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if($e(a,n)<1){var o=Ba(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=Ba(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},Fw=function(e){var r=Dw(e),n=r,a=n,i=e,o=i,l={io:o.is*a.dU-o.dU*a.is,is:o.dU*a.io-o.io*a.dU,dU:o.io*a.is-o.is*a.io};return P(r,l)},Aw=function(e){var r=Vl(e),n=Fw(r),a=n.a,i=n.b;return Tn({dl:df(e),dS:a,dT:i,dV:r})},Iw=O(function(e,r,n,a){var i=Aw(Ql(a)),o=t(kc,n,Bm),l=function(){var g=P(e,r);return g.a?g.b?Tt($([o,ro(Vm)])):o:g.b?ro(Vm):B}(),c=gf(a),u=c,m=pf(a),d=m;return t(zm,i,t(Ec,E(u,u,d),l))}),Ew=v(function(e,r){return z(Iw,!0,!0,e,r)}),Rm={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},jm={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Nt=function(e){var r=Dt(e),n=r.a,a=r.b,i=r.c,o=Va(n),l=Va(a),c=Va(i);return Yr({eu:o.io,ev:l.io,ew:c.io,ex:0,ey:o.is,ez:l.is,eA:c.is,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},ao=im($([E({dI:0},{dI:1},{dI:2})])),Bw=v(function(e,r){var n=rm(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var i=e.b.a;return t(We,a,be(function(w,C,I,J,K,G,Y,X){return F(Me,b($r,J,0,X),Rm,Lc,ao,{aO:i,c:I,d:C,e:G,f:w,bU:Nt(r),g:K})}));case 1:if(e.b.$)return e.a,B;var o=e.b.a,l=e.c;return t(We,a,be(function(w,C,I,J,K,G,Y,X){return F(Me,b($r,J,0,X),Rm,Pc,ao,{a6:t(Yi,Bt(l),o),c:I,d:C,e:G,f:w,bU:Nt(r),g:K})}));case 2:e.a;var c=e.b,u=e.c,m=t(Sm,c,u);if(m.$)return B;var d=m.a;return t(We,a,be(function(w,C,I,J,K,G,Y,X){var V=Y.a,ne=Y.b;return F(Me,b($r,J,0,X),jm,gm,ao,{U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dd:d,c:I,d:C,e:G,f:w,bU:Nt(r),g:K})}));default:e.a;var g=e.b,p=e.c,f=e.d,u=e.e,_=z(Cm,g,p,f,u);if(_.$)return B;var x=_.a,y=_.b,S=_.c;return t(We,a,be(function(w,C,I,J,K,G,Y,X){var V=Y.a,ne=Y.b;return F(Me,b($r,J,0,X),jm,wm,ao,{cR:x,U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dg:S,c:I,d:C,e:G,dA:y,f:w,bU:Nt(r),g:K})}))}}),Vw=function(){var e=$([{bl:t(pr,0,1)},{bl:t(pr,1,1)},{bl:t(pr,2,1)},{bl:t(pr,0,-1)},{bl:t(pr,1,-1)},{bl:t(pr,2,-1)}]),r=$([E(0,1,2),E(3,5,4),E(3,4,1),E(3,1,0),E(4,5,2),E(4,2,1),E(5,3,0),E(5,0,2)]);return t(Et,e,r)}(),Rw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},Um=function(e){return eo(be(function(r,n,a,i,o,l,c,u){return F(Me,t(Vc,i,u),Rw,Bc,Vw,{c:a,d:n,e:l,f:r,cD:c,bU:Nt(e),g:o})}))},jw=O(function(e,r,n,a){var i=t(Bw,n,a),o=P(e,r);return o.a?o.b?Tt($([i,Um(a)])):i:o.b?Um(a):B}),Uw=v(function(e,r){return z(jw,!0,!0,e,r)}),Nw=v(function(e,r){var n=It(r),a=It(e),i=At(r),o=At(e),l=Ft(r),c=Ft(e);return{eL:t(Be,c,l),eM:t(Be,o,i),eN:t(Be,a,n),eO:t(Ue,c,l),eP:t(Ue,o,i),eQ:t(Ue,a,n)}}),Hw=function(e){var r=Wl(e),n=r.a,a=r.b;return t(Nw,n,a)},Nm={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Gw=v(function(e,r){return{$:1,a:e,b:r}}),Ww=Gw({d5:2,ei:0,eS:1}),Hm=Ww($([P({es:0},{es:1})])),Ow=v(function(e,r){var n=Hw(r),a=ie(n),i=Wl(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var c=e.b.a;return t(We,a,be(function(m,d,g,p,f,_,x,y){return F(Me,y,Nm,Lc,Hm,{aO:c,eq:ur(l),er:ur(o),c:g,d,e:_,f:m,g:f})}));case 1:if(e.b.$)return B;var c=e.b.a,u=e.c;return t(We,a,be(function(d,g,p,f,_,x,y,S){return F(Me,S,Nm,Pc,Hm,{a6:t(Yi,Bt(u),c),eq:ur(l),er:ur(o),c:p,d:g,e:x,f:d,g:_})}));case 2:return B;default:return B}}),qw=v(function(e,r){return t(Ow,e,r)}),Gm=v(function(e,r){var n=e,a=r;return n/a}),Jw=Ve(function(e,r,n,a,i){e:for(;;){var o=a(r/n),l=t(M,o,i);if(le(r,e))return l;var c=e,u=r-1,m=n,d=a,g=l;e=c,r=u,n=m,a=d,i=g;continue e}}),Wm=v(function(e,r){return e<1?D:F(Jw,0,e,e,r,D)}),Yw=v(function(e,r){var n=e.cx,a=e.q,i=e.O,o=i,l=o.a,c=o.b;return t(M,{q:Oi(a),cx:ur(n),O:t(pr,l,c)},r)}),Xw=function(e){var r=b(Lu,Yw,D,_c(e));if(r.b){var n=r.a,a=r.b,i=t(Et,r,gc(e)),o=t(Am,n,a);return z(Qf,o,e,i,0)}else return sc},Om=v(function(e,r){var n=e,a=r,i=Zn(a);return{io:i*Zn(n),is:i*za(n),dU:za(a)}}),Kw=function(){var e=un(1),r=72,n=t(jr,0,r-1),a=t(Wm,r,t(Rt,vn,Rc(1))),i=Ka(r/2),o=t(jr,0,i-1),l=t(Wm,i,t(Rt,St(90),St(-90))),c=wc(ar(t(q,function(d){return t(q,function(g){return{q:Ut(t(Om,d,g)),cx:b(qe,t(we,jt(g)*jt(d),e),t(we,jt(g)*no(d),e),t(we,no(g),e)),O:P(t(Gm,d,Rc(1)),t(Gm,t(Mt,St(90),g),St(180)))}},l)},a))),u=v(function(d,g){return d*(i+1)+g}),m=ar(t(q,function(d){return ar(t(q,function(g){var p=t(u,d+1,g),f=t(u,d,g),_=t(u,d+1,g+1),x=t(u,d,g+1);return $([E(x,_,p),E(x,p,f)])},o))},n));return mc(Xw(t(lm,c,m)))}(),to=72,io=2*to,Zw=v(function(e,r){e:for(;;){var n=io+1,a=t(Li,io,2*e+3),i=t(Li,io,2*e+2),o=2*e+1,l=2*e,c=io,u=t(M,E(c,l,i),t(M,E(l,a,i),t(M,E(l,o,a),t(M,E(o,n,a),r))));if(e){var m=e-1,d=u;e=m,r=d;continue e}else return u}}),Qw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),ey=v(function(e,r){e:for(;;){var n=b(Qw,0,2*qr,e/to),a={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=t(M,a,t(M,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),ry=function(){var e=t(ey,to-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=t(Zw,to-1,D);return t(Et,e,r)}(),ny={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},qm=function(e){return eo(be(function(r,n,a,i,o,l,c,u){return F(Me,t(Vc,!0,u),ny,Bc,ry,{aO:b(Pt,0,0,1),c:a,d:n,e:l,f:r,cD:c,g:o})}))},ay=function(e){var r=am(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},ty=v(function(e,r){return t(Pm,ay(e),r)}),iy=O(function(e,r,n,a){var i=t(kc,n,Kw),o=function(){var u=P(e,r);return u.a?u.b?Tt($([i,qm()])):i:u.b?qm():B}(),l=Ri(a),c=l;return t(ty,t(pc,Ar,Vi(a)),t(Ec,E(c,c,c),o))}),oy=v(function(e,r){return z(iy,!0,!0,e,r)}),ly=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),cy=Ve(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),uy=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(Dm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(ly,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(ff,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return F(cy,r,n,o,l,i)}},$y=uy,Jm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(Sw,r,n)]);case 1:var r=e.a,a=e.b;return $([t(Uw,r,a)]);case 3:var r=e.a,i=e.b;return $([t(oy,$y(r),i)]);case 2:var r=e.a,o=e.b;return $([t(Ew,r,o)]);case 4:var l=e.a,c=e.b;return $([t(qw,Lw(l),c)]);default:var u=e.a;return t(sa,Jm,u)}},vy=function(e){return t(sa,Jm,e)},fy=v(function(e,r){return gx({a1:T_(e.fO),f0:e.f0,a3:k_(.5),cX:e.cX,a4:P(bf(Pe(e.dC.im)),bf(Pe(e.dC.gH))),a8:vy(r),hI:!0,hZ:t(Om,Xn(e.hY),Xn(e.h_)),fm:jl})}),my=v(function(e,r){return t(fy,{fO:t(J1,"background color",e),f0:G1(e),cX:e.cX,dC:e.dC,hY:-bt(135),h_:-bt(45)},$([ec(e),t(Yl,bt(120),ec(e)),t(Yl,bt(240),ec(e))]))}),sy=z(s1,my,y1,w1,d1);const dy={Main:{init:sy(t(W,function(e){return nr({gY:e})},t(H,"inputs",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({d1:l,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(g){return nr({fJ:g,gd:d,d4:m,go:u,g4:c,hr:l,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",$i(va)))},t(H,"left",_e))},t(H,"pressedKeys",$i(va)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:c,hy:l,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re)))))))(0)}},Z={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},py=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",l=f=>f.code=="ArrowUp",c=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function d(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function g(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Z.keyboard.downs.push(f.code),Z.keyboard.pressedKeys.push(f.code),r(f)&&(Z.keyboard.control=!0),n(f)&&(Z.keyboard.alt=!0),a(f)&&(console.log("yo"),Z.keyboard.shift=!0),i(f)&&(Z.keyboard.left=!0),o(f)&&(Z.keyboard.right=!0),l(f)&&(Z.keyboard.up=!0),c(f)&&(console.log("yey"),Z.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Z.keyboard.pressedKeys=Z.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Z.keyboard.control=!1,Z.keyboard.pressedKeys=[]),n(f)&&(Z.keyboard.alt=!1),a(f)&&(Z.keyboard.shift=!1),i(f)&&(Z.keyboard.left=!1),o(f)&&(Z.keyboard.right=!1),l(f)&&(Z.keyboard.up=!1),c(f)&&(Z.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY,u(f)&&(Z.pointer.down=!0,Z.pointer.isDown=!0),m(f)&&(Z.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Z.pointer.move=!0,Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Z.wheel.deltaX=f.deltaX,Z.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{d(Z)}),window.addEventListener("focus",f=>{d(Z)}),window.addEventListener("visibilitychange",f=>{d(Z)}),window.addEventListener("resize",()=>{Z.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(f){const _=f/1e3,x=_-Z.clock;x<.009||(Z.dt=x,Z.clock=_,e.ports.tick.send(Z),g(Z)),window.requestAnimationFrame(p)}},gy=dy.Main.init({node:document.querySelector("#app div"),flags:{inputs:Z}});py(gy);
