const vs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};vs();function dn(e,r,n){return n.a=e,n.f=r,n}function v(e){return dn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return dn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function O(e){return dn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Be(e){return dn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function nr(e){return dn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function Wt(e){return dn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function be(e){return dn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,a,i,o,c,l,u)}}}}}}}})}function go(e){return dn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return e(r,n,a,i,o,c,l,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function V(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Re(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function ho(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function qa(e,r,n,a,i,o,c,l,u){return e.a===8?e.f(r,n,a,i,o,c,l,u):e(r)(n)(a)(i)(o)(c)(l)(u)}function fs(e,r,n,a,i,o,c,l,u,m){return e.a===9?e.f(r,n,a,i,o,c,l,u,m):e(r)(n)(a)(i)(o)(c)(l)(u)(m)}var ms=[];function ss(e){return e.length}var ds=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),ps=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),gs=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var hs=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+bs()),r});function bs(e){return"<internals>"}function $a(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ue(e,r){for(var n,a=[],i=bo(e,r,0,a);i&&(n=a.pop());i=bo(n.a,n.b,0,a));return i}function bo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&$a(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=Iu(e),r=Iu(r));for(var i in e)if(!bo(e[i],r[i],n+1,a))return!1;return!0}v(ue);v(function(e,r){return!ue(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ce(e,r)<0});v(function(e,r){return ce(e,r)<1});v(function(e,r){return ce(e,r)>0});v(function(e,r){return ce(e,r)>=0});var _s=v(function(e,r){var n=ce(e,r);return n<0?Bu:n?m0:Eu}),Ya=0;function z(e,r){return{a:e,b:r}}function I(e,r,n){return{a:e,b:r,c:n}}function Br(e){return e}function ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(G);function G(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Rr(e.a,r);return n}var D={$:0};function Rr(e,r){return{$:1,a:e,b:r}}var ys=v(Rr);function $(e){for(var r=D,n=e.length;n--;)r=Rr(e[n],r);return r}function Ht(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var xs=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});O(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Be(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return $(o)});nr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,a.a,i.a,o.a));return $(c)});v(function(e,r){return $(Ht(r).sort(function(n,a){return ce(e(n),e(a))}))});v(function(e,r){return $(Ht(r).sort(function(n,a){var i=t(e,n,a);return i===Eu?0:i===Bu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ws=v(Math.pow);v(function(e,r){return r%e});var Ss=v(function(e,r){var n=r%e;return e===0?$a(11):n>0&&e<0||n<0&&e>0?n+e:n}),Cs=Math.PI,Ls=Math.cos,Ps=Math.sin,zs=Math.tan,Ms=v(Math.atan2);function Ts(e){return e}function ks(e){return e===1/0||e===-1/0}var Ds=Math.ceil,Vs=Math.floor,As=Math.round,Fs=Math.sqrt,Zl=Math.log,Is=isNaN;function Es(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Bs=v(function(e,r){return e+r});function Rs(e){var r=e.charCodeAt(0);return isNaN(r)?R:N(55296<=r&&r<=56319?z(Br(e[0]+e[1]),e.slice(2)):z(Br(e[0]),e.slice(1)))}v(function(e,r){return e+r});function js(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Br(r[i]+r[i+1])),i+=2;continue}a[i]=e(Br(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(Br(o))&&n.push(o)}return n.join("")});function Ns(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,Br(o),r)}return r});var Gs=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Br(i),r)}return r}),Ws=v(function(e,r){return r.split(e)}),Hs=v(function(e,r){return r.join(e)}),Us=T(function(e,r,n){return n.slice(e,r)});function Os(e){return $(e.trim().split(/\s+/g))}function Js(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Br(a)))return!0}return!1});var qs=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Br(a)))return!1}return!0}),Ys=v(function(e,r){return r.indexOf(e)>-1}),Zs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Ks=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Kl(e){return e+""}function Xs(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return R;r=10*r+o-48}return i==a?R:N(n==45?-r:r)}function Qs(e){if(e.length===0||/[\sxbo]/.test(e))return R;var r=+e;return r===r?N(r):R}function ed(e){return Ht(e).join("")}function rd(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function nd(e){return Br(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function ad(e){return{$:0,a:e}}function td(e){return{$:1,a:e}}function _o(e){return{$:2,b:e}}var id=_o(function(e){return typeof e=="boolean"?Ie(e):jr("a BOOL",e)}),od=_o(function(e){return typeof e=="number"?Ie(e):jr("a FLOAT",e)}),cd=_o(function(e){return typeof e=="string"?Ie(e):e instanceof String?Ie(e+""):jr("a STRING",e)});function ld(e){return{$:3,b:e}}var ud=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function pn(e,r){return{$:9,f:e,g:r}}var $d=v(function(e,r){return{$:10,b:r,h:e}}),vd=v(function(e,r){return pn(e,[r])}),fd=T(function(e,r,n){return pn(e,[r,n])});O(function(e,r,n,a){return pn(e,[r,n,a])});Be(function(e,r,n,a,i){return pn(e,[r,n,a,i])});nr(function(e,r,n,a,i,o){return pn(e,[r,n,a,i,o])});Wt(function(e,r,n,a,i,o,c){return pn(e,[r,n,a,i,o,c])});be(function(e,r,n,a,i,o,c,l){return pn(e,[r,n,a,i,o,c,l])});go(function(e,r,n,a,i,o,c,l,u){return pn(e,[r,n,a,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return br(e,n)}catch(a){return Qe(t(Ro,"This is not valid JSON! "+a.message,Xr(r)))}});var Xl=v(function(e,r){return br(e,fa(r))});function br(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ie(e.c):jr("null",r);case 3:return Ut(r)?Ql(e.b,r,$):jr("a LIST",r);case 4:return Ut(r)?Ql(e.b,r,md):jr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return jr("an OBJECT with a field named `"+n+"`",r);var a=br(e.b,r[n]);return kr(a)?a:Qe(t(Ru,n,a.a));case 7:var i=e.e;if(!Ut(r))return jr("an ARRAY",r);if(i>=r.length)return jr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=br(e.b,r[i]);return kr(a)?a:Qe(t(ju,i,a.a));case 8:if(typeof r!="object"||r===null||Ut(r))return jr("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var a=br(e.b,r[c]);if(!kr(a))return Qe(t(Ru,c,a.a));o=Rr(z(c,a.a),o)}return Ie(ar(o));case 9:for(var l=e.f,u=e.g,m=0;m<u.length;m++){var a=br(u[m],r);if(!kr(a))return a;l=l(a.a)}return Ie(l);case 10:var a=br(e.b,r);return kr(a)?br(e.h(a.a),r):a;case 11:for(var s=D,d=e.g;d.b;d=d.b){var a=br(d.a,r);if(kr(a))return a;s=Rr(a.a,s)}return Qe(s0(ar(s)));case 1:return Qe(t(Ro,e.a,Xr(r)));case 0:return Ie(e.a)}}function Ql(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=br(e,r[o]);if(!kr(c))return Qe(t(ju,o,c.a));i[o]=c.a}return Ie(n(i))}function Ut(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function md(e){return t(M0,e.length,function(r){return e[r]})}function jr(e,r){return Qe(t(Ro,"Expecting "+e,Xr(r)))}function va(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return va(e.b,r.b);case 6:return e.d===r.d&&va(e.b,r.b);case 7:return e.e===r.e&&va(e.b,r.b);case 9:return e.f===r.f&&eu(e.g,r.g);case 10:return e.h===r.h&&va(e.b,r.b);case 11:return eu(e.g,r.g)}}function eu(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!va(e[a],r[a]))return!1;return!0}var sd=v(function(e,r){return JSON.stringify(fa(r),null,e)+""});function Xr(e){return e}function fa(e){return e}function dd(){return[]}function pd(){return{}}var gd=T(function(e,r,n){return n[e]=fa(r),n});function hd(e){return v(function(r,n){return n.push(fa(e(r))),n})}function Rn(e){return{$:0,a:e}}function bd(e){return{$:1,a:e}}function Qr(e){return{$:2,b:e,c:null}}var yo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function _d(e){return{$:5,b:e}}var yd=0;function xo(e){var r={$:0,e:yd++,f:e,g:null,h:[]};return So(r),r}function ru(e){return Qr(function(r){r(Rn(xo(e)))})}function nu(e,r){e.h.push(r),So(e)}var xd=v(function(e,r){return Qr(function(n){nu(e,r),n(Rn(Ya))})}),wo=!1,au=[];function So(e){if(au.push(e),!wo){for(wo=!0;e=au.shift();)wd(e);wo=!1}}function wd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,So(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,a){return Co(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function Co(e,r,n,a,i,o){var c=t(Xl,e,Xr(r?r.flags:void 0));kr(c)||$a(2);var l={},u=n(c.a),m=u.a,s=o(g,m),d=Sd(l,g);function g(f,_){var y=t(a,f,m);s(m=y.a,_),ou(l,y.b,i(m))}return ou(l,u.b,i(m)),d?{ports:d}:{}}var Nr={};function Sd(e,r){var n;for(var a in Nr){var i=Nr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=Ld(i,r)}return n}function Cd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function Ld(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l(u){return t(yo,l,_d(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&c?P(a,n,s.i,s.j,u):b(a,n,o?s.i:s.j,u)}))}return n.h=xo(t(yo,l,e.b))}var Pd=v(function(e,r){return Qr(function(n){e.g(r),n(Rn(Ya))})});v(function(e,r){return t(xd,e.h,{$:0,a:r})});function tu(e){return function(r){return{$:1,k:e,l:r}}}function zd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var iu=[],Lo=!1;function ou(e,r,n){if(iu.push({p:e,q:r,r:n}),!Lo){Lo=!0;for(var a;a=iu.shift();)Md(a.p,a.q,a.r);Lo=!1}}function Md(e,r,n){var a={};Ot(!0,r,a,null),Ot(!1,n,a,null);for(var i in e)nu(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Ot(e,r,n,a){switch(r.$){case 1:var i=r.k,o=Td(e,i,a,r.l);n[i]=kd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Ot(e,c.a,n,a);return;case 3:Ot(e,r.o,n,{s:r.n,t:a});return}}function Td(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Nr[r].e:Nr[r].f;return t(o,i,a)}function kd(e,r,n){return n=n||{i:D,j:D},e?n.i=Rr(r,n.i):n.j=Rr(r,n.j),n}function Dd(e){Nr[e]&&$a(3)}v(function(e,r){return r});function Vd(e,r){return Dd(e),Nr[e]={f:Ad,u:r,a:Fd},tu(e)}var Ad=v(function(e,r){return function(n){return e(r(n))}});function Fd(e,r){var n=D,a=Nr[e].u,i=Rn(null);Nr[e].b=i,Nr[e].c=T(function(c,l,u){return n=l,i});function o(c){var l=t(Xl,a,Xr(c));kr(l)||$a(4,e,l.a);for(var u=l.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Jt,en=typeof document!="undefined"?document:{};function Po(e,r){e.appendChild(r)}O(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(hn(e,function(){}),i),{}});function zo(e){return{$:0,a:e}}var cu=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:To(n),e:i,f:e,b:o}})}),rn=cu(void 0),Id=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:To(n),e:i,f:e,b:o}})}),Ed=Id(void 0);function Bd(e,r,n,a){return{$:3,d:To(e),g:r,h:n,i:a}}var Rd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return gn([e,r],function(){return e(r)})});T(function(e,r,n){return gn([e,r,n],function(){return t(e,r,n)})});var jd=O(function(e,r,n,a){return gn([e,r,n,a],function(){return b(e,r,n,a)})});Be(function(e,r,n,a,i){return gn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});nr(function(e,r,n,a,i,o){return gn([e,r,n,a,i,o],function(){return V(e,r,n,a,i,o)})});Wt(function(e,r,n,a,i,o,c){return gn([e,r,n,a,i,o,c],function(){return Re(e,r,n,a,i,o,c)})});be(function(e,r,n,a,i,o,c,l){return gn([e,r,n,a,i,o,c,l],function(){return ho(e,r,n,a,i,o,c,l)})});go(function(e,r,n,a,i,o,c,l,u){return gn([e,r,n,a,i,o,c,l,u],function(){return qa(e,r,n,a,i,o,c,l,u)})});var lu=v(function(e,r){return{$:"a0",n:e,o:r}}),Nd=v(function(e,r){return{$:"a1",n:e,o:r}}),Mo=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function uu(e){return e=="script"?"p":e}function Gd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Wd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Hd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function $u(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Ud=v(function(e,r){return r.$==="a0"?t(lu,r.n,Od(e,r.o)):r});function Od(e,r){var n=Oo(r);return{$:r.$,a:n?b(T0,n<3?Jd:qd,tr(e),r.a):t(Xt,e,r.a)}}var Jd=v(function(e,r){return z(e(r.a),r.b)}),qd=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function To(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?vu(r,i,fa(o)):r[i]=fa(o);continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?vu(c,i,o):c[i]=o}return r}function vu(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hn(e,r){var n=e.$;if(n===5)return hn(e.k||(e.k=e.m()),r);if(n===0)return en.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=hn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return ko(c,r,e.d),c}var c=e.f?en.createElementNS(e.f,e.c):en.createElement(e.c);Jt&&e.c=="a"&&c.addEventListener("click",Jt(c)),ko(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Po(c,hn(n===1?l[u]:l[u].b,r));return c}function ko(e,r,n){for(var a in n){var i=n[a];a==="a1"?Yd(e,i):a==="a0"?Xd(e,r,i):a==="a3"?Zd(e,i):a==="a4"?Kd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Yd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Zd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Kd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Xd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Qd(r,o),e.addEventListener(i,c,Do&&{passive:Oo(o)<2}),a[i]=c}}var Do;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Do=!0}}))}catch{}function Qd(e,r){function n(a){var i=n.q,o=br(i.a,a);if(!!kr(o)){for(var c=Oo(i),l=o.a,u=c?c<3?l.a:l.aA:l,m=c==1?l.b:c==3&&l.dH,s=(m&&a.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&a.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function ep(e,r){return e.$==r.$&&va(e.a,r.a)}function fu(e,r){var n=[];return Tr(e,r,n,0),n}function Xe(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Tr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=lp(r),o=1;else{Xe(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,m=u===l.length;m&&u--;)m=c[u]===l[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];Tr(e.k,r.k,s,0),s.length>0&&Xe(n,1,a,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var y=r.k;y.$===4;)f=!0,typeof g!="object"?g=[g,y.j]:g.push(y.j),y=y.k;if(f&&d.length!==g.length){Xe(n,0,a,r);return}(f?!rp(d,g):d!==g)&&Xe(n,2,a,g),Tr(_,y,n,a+1);return;case 0:e.a!==r.a&&Xe(n,3,a,r.a);return;case 1:mu(e,r,n,a,np);return;case 2:mu(e,r,n,a,ap);return;case 3:if(e.h!==r.h){Xe(n,0,a,r);return}var w=Vo(e.d,r.d);w&&Xe(n,4,a,w);var S=r.i(e.g,r.g);S&&Xe(n,5,a,S);return}}}function rp(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function mu(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Xe(n,0,a,r);return}var o=Vo(e.d,r.d);o&&Xe(n,4,a,o),i(e,r,n,a)}function Vo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Vo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&ep(c,l)||(a=a||{},a[i]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function np(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Xe(n,6,a,{v:l,i:c-l}):c<l&&Xe(n,7,a,{v:c,e:o});for(var u=c<l?c:l,m=0;m<u;m++){var s=i[m];Tr(s,o[m],n,++a),a+=s.b||0}}function ap(e,r,n,a){for(var i=[],o={},c=[],l=e.e,u=r.e,m=l.length,s=u.length,d=0,g=0,f=a;d<m&&g<s;){var _=l[d],y=u[g],w=_.a,S=y.a,x=_.b,C=y.b,F=void 0,J=void 0;if(w===S){f++,Tr(x,C,i,f),f+=x.b||0,d++,g++;continue}var K=l[d+1],H=u[g+1];if(K){var Y=K.a,Z=K.b;J=S===Y}if(H){var B=H.a,ne=H.b;F=w===B}if(F&&J){f++,Tr(x,ne,i,f),Za(o,i,w,C,g,c),f+=x.b||0,f++,Ka(o,i,w,Z,f),f+=Z.b||0,d+=2,g+=2;continue}if(F){f++,Za(o,i,S,C,g,c),Tr(x,ne,i,f),f+=x.b||0,d+=1,g+=2;continue}if(J){f++,Ka(o,i,w,x,f),f+=x.b||0,f++,Tr(Z,C,i,f),f+=Z.b||0,d+=2,g+=1;continue}if(K&&Y===B){f++,Ka(o,i,w,x,f),Za(o,i,S,C,g,c),f+=x.b||0,f++,Tr(Z,ne,i,f),f+=Z.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=l[d],x=_.b;Ka(o,i,_.a,x,f),f+=x.b||0,d++}for(;g<s;){var fe=fe||[],y=u[g];Za(o,i,y.a,y.b,void 0,fe),g++}(i.length>0||c.length>0||fe)&&Xe(n,8,a,{w:i,x:c,y:fe})}var su="_elmW6BL";function Za(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Tr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Za(e,r,n+su,a,i,o)}function Ka(e,r,n,a,i){var o=e[n];if(!o){var c=Xe(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Tr(a,o.z,l,i),Xe(r,9,i,{w:l,A:o});return}Ka(e,r,n+su,a,i)}function du(e,r,n,a){Xa(e,r,n,0,0,r.b,a)}function Xa(e,r,n,a,i,o,c){for(var l=n[a],u=l.r;u===i;){var m=l.$;if(m===1)du(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Xa(e,r,s,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Xa(e,r,s,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return Xa(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,y=e.childNodes,w=0;w<_.length;w++){i++;var S=g===1?_[w]:_[w].b,x=i+(S.b||0);if(i<=u&&u<=x&&(a=Xa(y[w],S,n,a,i,x,c),!(l=n[a])||(u=l.r)>o))return a;i=x}return a}function pu(e,r,n,a){return n.length===0?e:(du(e,r,n,a),qt(e,n))}function qt(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=tp(i,a);i===e&&(e=o)}return e}function tp(e,r){switch(r.$){case 0:return ip(e,r.s,r.u);case 4:return ko(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return qt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(hn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=qt(e,n.w),e;case 8:return op(e,r);case 5:return r.s(e);default:$a(10)}}function ip(e,r,n){var a=e.parentNode,i=hn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function op(e,r){var n=r.s,a=cp(n.y,r);e=qt(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:hn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Po(e,a),e}function cp(e,r){if(!!e){for(var n=en.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;Po(n,o.c===2?o.s:hn(o.z,r.u))}return n}}function Ao(e){if(e.nodeType===3)return zo(e.textContent);if(e.nodeType!==1)return zo("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Rr(t(Mr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Rr(Ao(m[a]),u);return b(rn,l,r,u)}function lp(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var up=O(function(e,r,n,a){return Co(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=a.node,u=Ao(l);return gu(o,function(m){var s=c(m),d=fu(u,s);l=pu(l,u,d,i),u=s})})});O(function(e,r,n,a){return Co(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=en.title,m=en.body,s=Ao(m);return gu(o,function(d){Jt=c;var g=l(d),f=rn("body")(D)(g.fU),_=fu(s,f);m=pu(m,s,_,i),s=f,Jt=0,u!==g.id&&(en.title=u=g.id)})})});var Yt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function gu(e,r){r(e);var n=0;function a(){n=n===1?0:(Yt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Yt(a),n=2)}}v(function(e,r){return t(qo,it,Qr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(qo,it,Qr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(qo,it,Qr(function(){history.replaceState({},"",r),e()}))});var $p={addEventListener:function(){},removeEventListener:function(){}},vp=typeof window!="undefined"?window:$p;T(function(e,r,n){return ru(Qr(function(a){function i(o){xo(n(o))}return e.addEventListener(r,i,Do&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=br(e,r);return kr(n)?N(n.a):R});function hu(e,r){return Qr(function(n){Yt(function(){var a=document.getElementById(e);n(a?Rn(r(a)):bd(k0(e)))})})}function fp(e){return Qr(function(r){Yt(function(){r(Rn(e()))})})}v(function(e,r){return hu(r,function(n){return n[e](),Ya})});v(function(e,r){return fp(function(){return vp.scroll(e,r),Ya})});T(function(e,r,n){return hu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ya})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var mp=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return R}});v(function(e,r){return r.match(e)!==null});var sp=T(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?N(d):R}a.push(P(Gv,u[0],u.index,i,$(s))),l=r.lastIndex}return r.lastIndex=c,$(a)});O(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var m=arguments[l];u[--l]=m?N(m):R}return n(P(Gv,c,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,$(i)});var dp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/pp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function pp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Fo=new Float64Array(3),bu=new Float64Array(3),_u=new Float64Array(3),gp=T(function(e,r,n){return new Float64Array([e,r,n])}),hp=function(e){return e[0]},bp=function(e){return e[1]},_p=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var yp=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function yu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(yu);function xu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Zt(yu(e,r,n),n)}v(xu);function wu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Zt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var xp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Qa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Qa);function Io(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Io);v(function(e,r){var n,a=Fo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Qa(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Qa(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Qa(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Qa(r,a)+e[14])/n,i});var wp=O(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Sp=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},Cp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Lp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Lp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Pp=new Float64Array(16),zp=new Float64Array(16),Mp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},Tp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function Su(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}nr(Su);O(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return Su(c,l,o,i,n,a)});function Cu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}nr(Cu);O(function(e,r,n,a){return Cu(e,r,n,a,-1,1)});function Lu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],y=e[12],w=e[13],S=e[14],x=e[15],C=r[0],F=r[1],J=r[2],K=r[3],H=r[4],Y=r[5],Z=r[6],B=r[7],ne=r[8],fe=r[9],ye=r[10],me=r[11],se=r[12],we=r[13],de=r[14],Ve=r[15];return n[0]=a*C+l*F+d*J+y*K,n[1]=i*C+u*F+g*J+w*K,n[2]=o*C+m*F+f*J+S*K,n[3]=c*C+s*F+_*J+x*K,n[4]=a*H+l*Y+d*Z+y*B,n[5]=i*H+u*Y+g*Z+w*B,n[6]=o*H+m*Y+f*Z+S*B,n[7]=c*H+s*Y+_*Z+x*B,n[8]=a*ne+l*fe+d*ye+y*me,n[9]=i*ne+u*fe+g*ye+w*me,n[10]=o*ne+m*fe+f*ye+S*me,n[11]=c*ne+s*fe+_*ye+x*me,n[12]=a*se+l*we+d*de+y*Ve,n[13]=i*se+u*we+g*de+w*Ve,n[14]=o*se+m*we+f*de+S*Ve,n[15]=c*se+s*we+_*de+x*Ve,n}v(Lu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],y=r[0],w=r[1],S=r[2],x=r[4],C=r[5],F=r[6],J=r[8],K=r[9],H=r[10],Y=r[12],Z=r[13],B=r[14];return n[0]=a*y+c*w+m*S,n[1]=i*y+l*w+s*S,n[2]=o*y+u*w+d*S,n[3]=0,n[4]=a*x+c*C+m*F,n[5]=i*x+l*C+s*F,n[6]=o*x+u*C+d*F,n[7]=0,n[8]=a*J+c*K+m*H,n[9]=i*J+l*K+s*H,n[10]=o*J+u*K+d*H,n[11]=0,n[12]=a*Y+c*Z+m*B+g,n[13]=i*Y+l*Z+s*B+f,n[14]=o*Y+u*Z+d*B+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Zt(r,Fo);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*u,n[2]=o*a*l-i*u,n[3]=0,n[4]=a*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+a*u,n[7]=0,n[8]=a*o*l+i*u,n[9]=i*o*l-a*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/wu(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=c*s,f=l*s,_=o*c*m,y=o*l*m,w=c*l*m,S=o*o*m+u,x=_+f,C=y-g,F=_-f,J=c*c*m+u,K=w+d,H=y+g,Y=w-d,Z=l*l*m+u,B=n[0],ne=n[1],fe=n[2],ye=n[3],me=n[4],se=n[5],we=n[6],de=n[7],Ve=n[8],Te=n[9],Ke=n[10],In=n[11],Ua=n[12],Yr=n[13],Zr=n[14],ua=n[15];return a[0]=B*S+me*x+Ve*C,a[1]=ne*S+se*x+Te*C,a[2]=fe*S+we*x+Ke*C,a[3]=ye*S+de*x+In*C,a[4]=B*F+me*J+Ve*K,a[5]=ne*F+se*J+Te*K,a[6]=fe*F+we*J+Ke*K,a[7]=ye*F+de*J+In*K,a[8]=B*H+me*Y+Ve*Z,a[9]=ne*H+se*Y+Te*Z,a[10]=fe*H+we*Y+Ke*Z,a[11]=ye*H+de*Y+In*Z,a[12]=Ua,a[13]=Yr,a[14]=Zr,a[15]=ua,a});function kp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(kp);O(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Dp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(Dp);O(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],u=a[3],m=a[4],s=a[5],d=a[6],g=a[7],f=a[8],_=a[9],y=a[10],w=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=y,i[11]=w,i[12]=o*e+m*r+f*n+a[12],i[13]=c*e+s*r+_*n+a[13],i[14]=l*e+d*r+y*n+a[14],i[15]=u*e+g*r+w*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],y=r[9],w=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=y,n[10]=w,n[11]=S,n[12]=c*a+s*i+_*o+r[12],n[13]=l*a+d*i+y*o+r[13],n[14]=u*a+g*i+w*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=xu(e,r,Fo),i=Zt(Io(n,a,bu),bu),o=Zt(Io(a,i,_u),_u),c=Pp,l=zp;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Lu(c,l)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Pu=0;function et(e,r){for(;r.b;r=r.b)e(r.a)}function Eo(e){for(var r=0;e.b;e=e.b)r++;return r}var Vp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Ap=Be(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),Fp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Ip=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Ep=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Bp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Rp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),jp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Np=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Gp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Wp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Hp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Up=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Op=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},zu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Mu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Jp=function(e){e.gl.disable(e.gl.CULL_FACE)},qp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Yp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Zp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Tu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Kp=[Hp,Up,Op,zu,Mu,Jp,qp,Yp,Zp];function ku(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Xp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Du(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Qp(e,r,n,a){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,y,w,S){var x;if(i===1)for(x=0;x<_;x++)f[y++]=_===1?w[S]:w[S][x];else o.forEach(function(C){for(x=0;x<_;x++)f[y++]=_===1?w[C][S]:w[C][S][x]})}var u=Du(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(Eo(n.b)*s);et(function(f){l(d,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function e0(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=r0(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Eo(r.b),indexBuffer:null,buffers:{}}}function r0(e,r){var n=new Uint32Array(Eo(e)*r),a=0,i;return et(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function Vu(e,r){return e+"#"+r}var Au=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),zu(n),Mu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=Vu(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=Pu++,m||(m=ku(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=Pu++,s||(s=ku(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=Xp(a,m,s);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=n0(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(d,u),_=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=Vu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),a0(l.uniformSetters,o.e);var y=n.buffers.get(o.d);for(y||(y=e0(a,o.d),n.buffers.set(o.d,y)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],_=l.activeAttributeLocations[u],y.buffers[f.name]===void 0&&(y.buffers[f.name]=Qp(a,f,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,y.buffers[f.name]);var w=Du(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,w.size,w.baseType,!1,0,0);else for(var S=w.size*4,x=S*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,w.size,w.baseType,!1,x,S*C)}for(n.toggle=!n.toggle,et(e2(n),o.a),u=0;u<Tu.length;u++){var F=n[Tu[u]];F.toggle!==n.toggle&&F.enabled&&(Kp[u](n),F.enabled=!1,F.toggle=n.toggle)}y.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,y.indexBuffer),a.drawElements(o.d.a.eS,y.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,y.numIndices)}}return et(i,e.g),r});function n0(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(f,_){var y=_.name,w=e.getUniformLocation(f,y);switch(_.type){case e.INT:return function(x){o[y]!==x&&(e.uniform1i(w,x),o[y]=x)};case e.FLOAT:return function(x){o[y]!==x&&(e.uniform1f(w,x),o[y]=x)};case e.FLOAT_VEC2:return function(x){o[y]!==x&&(e.uniform2f(w,x[0],x[1]),o[y]=x)};case e.FLOAT_VEC3:return function(x){o[y]!==x&&(e.uniform3f(w,x[0],x[1],x[2]),o[y]=x)};case e.FLOAT_VEC4:return function(x){o[y]!==x&&(e.uniform4f(w,x[0],x[1],x[2],x[3]),o[y]=x)};case e.FLOAT_MAT4:return function(x){o[y]!==x&&(e.uniformMatrix4fv(w,!1,new Float32Array(x)),o[y]=x)};case e.SAMPLER_2D:var S=c++;return function(x){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(x);C||(C=x.ge(e),l.textures.set(x,C)),e.bindTexture(e.TEXTURE_2D,C),o[y]!==x&&(e.uniform1i(w,S),o[y]=x)};case e.BOOL:return function(x){o[y]!==x&&(e.uniform1i(w,x),o[y]=x)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[a[g.name]||g.name]=u(i,g)}return m}function a0(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var t0=T(function(e,r,n){return Bd(r,{g:n,f:{},h:e},v0,f0)}),i0=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),o0=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),c0=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),l0=v(function(e,r){e.contextAttributes.antialias=!0}),u0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),$0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function v0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};et(function(i){return t(Q_,r,i)},e.h);var n=en.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Vp(function(){return t(Au,e,n)})):(n=en.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function f0(e,r){return r.f=e.f,Au(r)}var M=ys,Kt=hs,Fu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return b(Kt,e,l,m)}else{var u=c.a;return b(Kt,o,l,u)}});return b(Kt,o,b(Kt,e,r,i),a)}),Bo=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,u=b(e,a,i,b(Bo,e,r,c)),m=o;e=l,r=u,n=m;continue e}}),Iu=function(e){return b(Bo,T(function(r,n,a){return t(M,z(r,n),a)}),D,e)},Eu=1,m0=2,Bu=0,Qe=function(e){return{$:1,a:e}},Ro=v(function(e,r){return{$:3,a:e,b:r}}),Ru=v(function(e,r){return{$:0,a:e,b:r}}),ju=v(function(e,r){return{$:1,a:e,b:r}}),Ie=function(e){return{$:0,a:e}},s0=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},R={$:1},d0=qs,p0=sd,k=Kl,ee=v(function(e,r){return t(Hs,e,Ht(r))}),jo=v(function(e,r){return $(t(Ws,e,r))}),Nu=function(e){return t(ee,`
    `,t(jo,`
`,e))},Ae=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),jn=function(e){return b(Ae,v(function(r,n){return n+1}),0,e)},g0=xs,h0=T(function(e,r,n){e:for(;;)if(ce(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),nn=v(function(e,r){return b(h0,e,r,D)}),Gu=v(function(e,r){return b(g0,e,t(nn,0,jn(r)-1),r)}),Gr=rd,Wu=function(e){var r=Gr(e);return 97<=r&&r<=122},Hu=function(e){var r=Gr(e);return r<=90&&65<=r},b0=function(e){return Wu(e)||Hu(e)},_0=function(e){var r=Gr(e);return r<=57&&48<=r},y0=function(e){return Wu(e)||Hu(e)||_0(e)},ar=function(e){return b(Ae,M,D,e)},ma=Rs,x0=v(function(e,r){return`

(`+(k(e+1)+(") "+Nu(w0(r))))}),w0=function(e){return t(S0,e,D)},S0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var y=ma(n);if(y.$===1)return!1;var w=y.a,S=w.a,x=w.b;return b0(S)&&t(d0,y0,x)}(),o=i?"."+n:"['"+(n+"']"),c=a,l=t(M,o,r);e=c,r=l;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),c=a,l=t(M,m,r);e=c,r=l;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",ar(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(k(jn(s))+" ways:"));return t(ee,`

`,t(M,_,t(Gu,x0,s)))}else{var a=s.a,c=a,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",ar(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",ar(r))+`:

    `):`Problem with the given value:

`}();return _+(Nu(t(p0,4,f))+(`

`+g))}}),mr=32,No=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Go=ms,rt=Ds,Wo=v(function(e,r){return Zl(r)/Zl(e)}),nt=Ts,at=rt(t(Wo,2,mr)),Uu=P(No,0,at,Go,Go),Ou=ds,Ju=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var qu=Vs,Ho=ss,Ye=v(function(e,r){return ce(e,r)>0?e:r}),C0=function(e){return{$:0,a:e}},Uo=ps,L0=v(function(e,r){e:for(;;){var n=t(Uo,mr,e),a=n.a,i=n.b,o=t(M,C0(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return ar(o)}}),Yu=function(e){var r=e.a;return r},P0=v(function(e,r){e:for(;;){var n=rt(r/mr);if(n===1)return t(Uo,mr,e).a;var a=t(L0,e,D),i=n;e=a,r=i;continue e}}),Zu=v(function(e,r){if(r.n){var n=r.n*mr,a=qu(t(Wo,mr,n-1)),i=e?ar(r.C):r.C,o=t(P0,i,r.n);return P(No,Ho(r.r)+n,t(Ye,5,a*at),o,r.r)}else return P(No,Ho(r.r),at,Go,r.r)}),z0=Be(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Zu,!1,{C:a,n:n/mr|0,r:i});var o=Ju(b(Ou,mr,r,e)),c=e,l=r-mr,u=n,m=t(M,o,a),s=i;e=c,r=l,n=u,a=m,i=s;continue e}}),M0=v(function(e,r){if(e<=0)return Uu;var n=e%mr,a=b(Ou,n,e-n,r),i=e-n-mr;return V(z0,r,i,e,D,a)}),kr=function(e){return!e.$},U=$d,_e=id,W=ud,je=od,Ku=v(function(e,r){return{bt:r.bt,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),Xt=vd,T0=fd,tr=ad,Oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},k0=Dr,Xu=nr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),D0=Ys,Nn=js,sa=Us,tt=v(function(e,r){return e<1?r:b(sa,e,Nn(r),r)}),Qt=Ks,ei=function(e){return e===""},ri=v(function(e,r){return e<1?"":b(sa,0,e,r)}),Qu=Xs,e$=Be(function(e,r,n,a,i){if(ei(i)||t(D0,"@",i))return R;var o=t(Qt,":",i);if(o.b){if(o.b.b)return R;var c=o.a,l=Qu(t(tt,c+1,i));if(l.$===1)return R;var u=l;return N(Re(Xu,e,t(ri,c,i),u,r,n,a))}else return N(Re(Xu,e,i,R,r,n,a))}),r$=O(function(e,r,n,a){if(ei(a))return R;var i=t(Qt,"/",a);if(i.b){var o=i.a;return V(e$,e,t(tt,o,a),r,n,t(ri,o,a))}else return V(e$,e,"/",r,n,a)}),n$=T(function(e,r,n){if(ei(n))return R;var a=t(Qt,"?",n);if(a.b){var i=a.a;return P(r$,e,N(t(tt,i+1,n)),r,t(ri,i,n))}else return P(r$,e,R,r,n)});v(function(e,r){if(ei(r))return R;var n=t(Qt,"#",r);if(n.b){var a=n.a;return b(n$,e,N(t(tt,a+1,r)),t(ri,a,r))}else return b(n$,e,R,r)});var V0=Zs,it=function(e){},ot=Rn,A0=ot(0),a$=O(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,m=l.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Ae,e,r,ar(d)):P(a$,e,r,n+1,d);return t(e,i,t(e,c,t(e,u,t(e,s,g))))}else return t(e,i,t(e,c,t(e,u,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),Ue=T(function(e,r,n){return P(a$,e,r,0,n)}),q=v(function(e,r){return b(Ue,v(function(n,a){return t(M,e(n),a)}),D,r)}),ni=yo,Jo=v(function(e,r){return t(ni,function(n){return ot(e(n))},r)}),F0=T(function(e,r,n){return t(ni,function(a){return t(ni,function(i){return ot(t(e,a,i))},n)},r)}),I0=function(e){return b(Ue,F0(M),ot(D),e)},E0=Pd,B0=v(function(e,r){var n=r;return ru(t(ni,E0(e),n))}),R0=T(function(e,r,n){return t(Jo,function(a){return 0},I0(t(q,B0(e),r)))}),j0=T(function(e,r,n){return ot(0)}),N0=v(function(e,r){var n=r;return t(Jo,e,n)});Nr.Task=Cd(A0,R0,j0,N0);var G0=tu("Task"),qo=v(function(e,r){return G0(t(Jo,e,r))}),W0=up,H0=Es,ai={$:1},t$=function(e){return{$:2,a:e}},Yo={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),Oe=T(function(e,r,n){return r(e(n))}),Gn=function(e){var r=e.b.s;return r.a},U0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return N(t(_r,r,{s:o,an:c,X:t(M,a,n)}))}else return R},Ce=v(function(e,r){if(r.$)return e;var n=r.a;return n}),O0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dI;return(ce(o+r.gp,Gn(n).bt)>0?t(Oe,U0,Ce(t(_r,ai,i))):Dr)(t(_r,t$({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,m=t(Ku,l.gb,ke(r,{bt:l.bt+r.gp})),s=t(e,m,u);return t(_r,Yo,{s:z(m,s),an:D,X:t(M,i.s,i.X)})}}),i$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),J0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(M,a,n);e=o,r=c,n=l;continue e}else return n}}),q0=v(function(e,r){return ar(b(J0,e,r,D))}),o$=T(function(e,r,n){if(r<=0)return D;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,x=i.a,o=i.b,c=o.a;return $([x,c]);case 3:if(a.b.b.b.b){var l=a.b,x=l.a,u=l.b,c=u.a,m=u.b,s=m.a;return $([x,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,x=d.a,g=d.b,c=g.a,f=g.b,s=f.a,_=f.b,y=_.a,w=_.b;return e>1e3?t(M,x,t(M,c,t(M,s,t(M,y,t(q0,r-4,w))))):t(M,x,t(M,c,t(M,s,t(M,y,b(o$,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,x=S.a;return $([x])}}),Y0=v(function(e,r){return b(o$,0,e,r)}),Z0=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=G(ar(n),G($([a]),i)),c=t(Y0,e,o),l=t(i$,e,o);if(l.b){var u=l.a,m=l.b;return t(_r,ai,{s:u,an:m,X:ar(c)})}else{var s=ar(c);if(s.b){var d=s.a,g=s.b;return t(_r,ai,{s:d,an:D,X:g})}else return r}}),K0=function(e){var r=e.b;return t(_r,ai,r)},X0=function(e){var r=e.b;return t(_r,t$({dI:Gn(e).bt}),r)},Q0=function(e){var r=e.b;return t(_r,Yo,r)},eg=v(function(e,r){switch(e.$){case 1:return K0(r);case 2:return Q0(r);case 3:return X0(r);default:var n=e.a;return t(Z0,n,r)}}),ti=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),rg=v(function(e,r){return ke(r,{aN:e(r.aN)})}),ng=function(e){return{$:3,a:e}},ag=function(e){return{$:2,a:e}},c$=v(function(e,r){return{$:0,a:e,b:r}}),tg=v(function(e,r){return{$:1,a:e,b:r}}),Fe=v(function(e,r){if(r.$)return R;var n=r.a;return N(e(n))}),le=function(e){return e<0?-e:e},l$=Qs,ig=T(function(e,r,n){return t(Ce,0/0,l$(t(e,r,n)))}),ct=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),og=Gs,u$=function(e){return b(og,M,D,e)},cg=v(function(e,r){var n=t(ct,function(a){return a!=="0"&&a!=="."},u$(r));return G(e&&n?"-":"",r)}),ae=Kl,Zo=Bs,$$=nd,v$=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ma(n);if(a.$===1)return"01";var i=a.a;return t(Zo,"0",v$(i))}else{var o=Gr(r);return o>=48&&o<57?t(Zo,$$(o+1),n):"0"}},Ko=ks,lg=Is,ii=function(e){return t(Zo,e,"")},f$=T(function(e,r,n){return e<=0?n:b(f$,e>>1,G(r,r),e&1?G(n,r):n)}),lt=v(function(e,r){return b(f$,e,r,"")}),Xo=T(function(e,r,n){return G(n,t(lt,e-Nn(n),ii(r)))}),Qo=Ns,m$=function(e){var r=t(jo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},ug=function(e){var r=t(jo,"e",ae(le(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Ce,0,Qu(t(V0,"+",i)?t(tt,1,i):i)),c=m$(n),l=c.a,u=c.b,m=G(l,u),s=o<0?t(Ce,"0",t(Fe,function(d){var g=d.a,f=d.b;return g+("."+f)},t(Fe,ti(ii),ma(G(t(lt,le(o),"0"),m))))):b(Xo,o+1,"0",m);return G(e<0?"-":"",s)}else{var n=r.a;return G(e<0?"-":"",n)}else return""},$g=T(function(e,r,n){if(Ko(n)||lg(n))return ae(n);var a=n<0,i=m$(ug(le(n))),o=i.a,c=i.b,l=Nn(o)+r,u=G(t(lt,-l+1,"0"),b(Xo,l,"0",G(o,c))),m=Nn(u),s=t(Ye,1,l),d=t(e,a,b(sa,s,m,u)),g=b(sa,0,s,u),f=d?Qo(t(Ce,"1",t(Fe,v$,ma(Qo(g))))):g,_=Nn(f),y=f==="0"?f:r<=0?G(f,t(lt,le(r),"0")):ce(r,Nn(c))<0?b(sa,0,_-r,f)+("."+b(sa,_-r,_,f)):G(o+".",b(Xo,r,"0",c));return t(cg,a,y)}),s$=$g(v(function(e,r){var n=ma(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Gr(i))})),vg=ig(s$),fg=T(function(e,r,n){var a=t(Wo,10,le(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(vg,i,n)}),d$=_s,oi=v(function(e,r){e:for(;;){if(r.$===-2)return R;var n=r.b,a=r.c,i=r.d,o=r.e,c=t(d$,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return N(a);default:var l=e,u=o;e=l,r=u;continue e}}}),te=Be(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Wr={$:-2},da=Be(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,s=a.c,d=a.d,g=a.e;return V(te,0,r,n,V(te,1,m,s,d,g),V(te,1,o,c,l,u))}else return V(te,e,o,c,V(te,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,s=a.c,f=a.d;f.a;var _=f.b,y=f.c,w=f.d,S=f.e,g=a.e;return V(te,0,m,s,V(te,1,_,y,w,S),V(te,1,r,n,g,i))}else return V(te,e,r,n,a,i)}),ec=T(function(e,r,n){if(n.$===-2)return V(te,0,e,r,Wr,Wr);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=t(d$,e,i);switch(u){case 0:return V(da,a,i,o,b(ec,e,r,c),l);case 1:return V(te,a,i,r,c,l);default:return V(da,a,i,o,c,b(ec,e,r,l))}}),pa=T(function(e,r,n){var a=b(ec,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return V(te,1,i,o,c,l)}else{var u=a;return u}}),mg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},p$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,y=g.d,w=g.e,S=m.e;return V(te,0,f,_,V(te,1,n,a,V(te,0,o,c,l,u),y),V(te,1,s,d,w,S))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,u=x.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return V(te,1,n,a,V(te,0,o,c,l,u),V(te,0,s,d,g,S))}else return e},g$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,m=l.c,s=l.d,d=l.e,g=i.e,f=e.e;f.a;var _=f.b,y=f.c,w=f.d,S=f.e;return V(te,0,o,c,V(te,1,u,m,s,d),V(te,1,n,a,g,V(te,0,_,y,w,S)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,C=x.d,g=x.e,F=e.e;F.a;var _=F.b,y=F.c,w=F.d,S=F.e;return V(te,1,n,a,V(te,0,o,c,C,g),V(te,0,_,y,w,S))}else return e},sg=Wt(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,m=o.d,s=o.e;return V(te,n,l,u,m,V(te,0,a,i,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,g$(r)}else break e;else return c.a,c.d,g$(r);else break e;return r}}),ci=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(te,r,n,a,ci(i),l);var u=p$(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return V(da,m,s,d,ci(g),f)}else return Wr}else return V(te,r,n,a,ci(i),l)}else return Wr},ut=v(function(e,r){if(r.$===-2)return Wr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(te,n,a,i,t(ut,e,o),c);var u=p$(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return V(da,m,s,d,t(ut,e,g),f)}else return Wr}else return V(te,n,a,i,t(ut,e,o),c);else return t(dg,e,ho(sg,e,r,n,a,i,o,c))}),dg=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ue(e,a)){var l=mg(c);if(l.$===-1){var u=l.b,m=l.c;return V(da,n,u,m,o,ci(c))}else return Wr}else return V(da,n,a,i,o,t(ut,e,c))}else return Wr}),pg=v(function(e,r){var n=t(ut,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return V(te,1,a,i,o,c)}else{var l=n;return l}}),li=T(function(e,r,n){var a=r(t(oi,e,n));if(a.$)return t(pg,e,n);var i=a.a;return b(pa,e,i,n)}),gg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(li,r,Fe(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(tg,z(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(li,r,Fe(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(c$,z(o,c),b(fg,o,c,n))}));case 3:var r=e.a,n=e.b;return t(li,r,Fe(function(a){return a.$===3?ng(n):a}));default:var r=e.a,n=e.b;return t(li,r,Fe(function(a){return a.$===2?ag(n):a}))}},hg=function(e){return rg(gg(e))},bg=v(function(e,r){return t(q,hg(e),r)}),_g=v(function(e,r){return ke(r,{gb:t(bg,e,r.gb)})}),yg=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,ke(a,{s:t(ti,_g(e),a.s)}))}),rc=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),xg=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,ke(i,{s:t(rc,t(e,o.a,r),o)}))}),wg=O(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ke(a,{bx:!a.bx});case 2:var i=n.a;return ke(a,{R:b(O0,e,i,a.R)});case 3:var o=n.a;return ke(a,{bp:o});case 4:var c=n.a;return ke(a,{R:t(yg,c,a.R)});case 5:var l=n.a;return ke(a,{R:b(xg,r,l,a.R)});default:var u=n.a;return ke(a,{R:t(eg,u,a.R)})}}),Sg=v(function(e,r){return t(_r,Yo,{s:z(e,r(e)),an:D,X:D})}),Cg=zd,h$=Cg(D),Lg=function(e){return{$:2,a:e}},ui=ld,ga=cd,Pg=Vd("tick",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return tr({bt:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(W,"clock",je))},t(W,"devicePixelRatio",je))},t(W,"dt",je))},t(W,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(s){return t(U,function(d){return tr({fJ:d,gd:s,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ui(ga)))},t(W,"left",_e))},t(W,"pressedKeys",ui(ga)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return tr({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",je))},t(W,"y",je))))},t(W,"screen",t(U,function(r){return t(U,function(n){return tr({gH:n,im:r})},t(W,"height",je))},t(W,"width",je))))},t(W,"wheel",t(U,function(e){return t(U,function(r){return tr({gh:r,gi:e})},t(W,"deltaX",je))},t(W,"deltaY",je))))),zg=function(e){return e.dO,Pg(Lg)},Mg=function(e){return{$:5,a:e}},Tg={$:0},$i=v(function(e,r){return e}),kg=function(e){var r=e.b.s;return r.b},Dg=function(e){return{$:1,a:e}},Vg=Dg,b$=function(e){return{$:8,a:e}},pe=b$,$t=function(e){return{$:0,a:e}},vt=T(function(e,r,n){return e(r(n))}),Ag=t(vt,$t,$i),bn=Ag,Le=function(e){return{$:1,a:e}},an=Le,_$=v(function(e,r){return{$:9,a:e,b:r}}),Wn={$:0},y$=v(function(e,r){return r.$===3?Wn:t(_$,e,r)}),nc=function(e){return t(y$,4,e)},p={fy:"a",cM:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cN:"ah",cO:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b2:"bn",fZ:"bs",b5:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bu:"cl",cc:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",cj:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cG:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},ac=Xr,yr=v(function(e,r){return t(Mo,e,ac(r))}),xr=yr("className"),sr=function(e){return Le(xr(e))},x$=v(function(e,r){return{$:2,a:e,b:r}}),Fg=v(function(e,r){return{$:1,a:e,b:r}}),Ze=function(e){return{$:0,a:e}},dr=2,Ig={$:0},Hn=Ig,Eg={$:0},Bg=p.fK+(" "+p.aw),Rg=p.fK+(" "+p.gC),jg=p.fK+(" "+p.eY),Ng=p.fK+(" "+p.eZ),Gg=p.fK+(" "+p.af),Wg=p.fK+(" "+p.hL),Hg=function(e){switch(e){case 0:return Gg;case 1:return Bg;case 2:return Wg;case 3:return Rg;case 4:return Ng;default:return jg}},w$=function(e){return{$:1,a:e}},Un={$:0},tc=function(e){return{$:1,a:e}},S$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return G(n,e);case 2:var a=r.a;return G(e,a);default:var n=r.a,a=r.b;return G(n,G(e,a))}}),C$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return G(t(q,function(o){return z(e,o)},a),r);case 2:var i=n.a;return G(r,t(q,function(o){return z(e,o)},i));default:var a=n.a,i=n.b;return G(t(q,function(o){return z(e,o)},a),G(r,t(q,function(o){return z(e,o)},i)))}}),vi=4,Ug=function(e){return{$:0,a:e}},Og=function(e){return{$:1,a:e}},$e=function(e){return e>31?Og(1<<e-32):Ug(1<<e)},L$=$e(41),P$=$e(40),z$=$e(42),M$=$e(43),ha=rn("div"),ic=Wr,T$=ic,Hr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Hr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Hr(i))}},Pe=As,De=function(e){return k(Pe(e*255))},oc=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(De(n)+("-"+(De(a)+("-"+De(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,w=f.c,S=e.d;return N("tfrm-"+(De(c)+("-"+(De(l)+("-"+(De(u)+("-"+(De(s)+("-"+(De(d)+("-"+(De(g)+("-"+(De(_)+("-"+(De(y)+("-"+(De(w)+("-"+De(S))))))))))))))))))))}},ft=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(t(ee,"-",t(q,Hr,c.hB))+("-cols-"+(t(ee,"-",t(q,Hr,c.ak))+("-space-x-"+(Hr(c.hP.a)+("-space-y-"+Hr(c.hP.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(k(l.af)+("-"+(k(l.ga)+("-"+(k(l.im)+("-"+k(l.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(q,function(s){var d=ft(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return t(Ce,"",oc(o))}},Jg=v(function(e,r){var n=r;return b(pa,e,0,n)}),qg=v(function(e,r){var n=t(oi,e,r);return!n.$}),Yg=v(function(e,r){var n=r;return t(qg,e,n)}),k$=v(function(e,r){var n=r.a,a=r.b,i=ft(e);return t(Yg,i,n)?r:z(t(Jg,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),mt=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},Zg=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),_n=v(function(e,r){return b(Ue,Zg(e),D,r)}),ba=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Pe(r*255))+(","+k(Pe(n*255))+(","+k(Pe(a*255))+(","+(ae(i)+")")))))},cc=function(e){return t(ee," ",t(_n,Dr,$([e.ej?N("inset"):R,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(ba(e.b7))])))},D$=function(e){return $([t(mt,L(p.ea)+":focus-within",t(_n,Dr,$([t(Fe,function(r){return t(re,"border-color",ba(r))},e.fW),t(Fe,function(r){return t(re,"background-color",ba(r))},e.fO),t(Fe,function(r){return t(re,"box-shadow",cc({a2:r.a2,b7:r.b7,ej:!1,eV:t(rc,nt,t(ti,nt,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))]))),t(mt,L(p.fK)+":focus .focusable, "+(L(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(p.fK)+" .focusable-thumb"))),t(_n,Dr,$([t(Fe,function(r){return t(re,"border-color",ba(r))},e.fW),t(Fe,function(r){return t(re,"background-color",ba(r))},e.fO),t(Fe,function(r){return t(re,"box-shadow",cc({a2:r.a2,b7:r.b7,ej:!1,eV:t(rc,nt,t(ti,nt,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))])))])},Ur=function(e){return rn(uu(e))},V$=v(function(e,r){return t(Mo,Wd(e),$u(r))}),lc=v(function(e,r){return{$:2,a:e,b:r}}),uc=function(e){return{$:6,a:e}},j=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),Kg=v(function(e,r){return{$:3,a:e,b:r}}),A$=$([0,1,2,3,4,5]),Xg=v(function(e,r){return r.b?b(Ue,M,r,e):e}),ir=function(e){return b(Ue,Xg,D,e)},_a=v(function(e,r){return ir(t(q,e,r))}),Qg=function(e){switch(e){case 0:return L(p.gc);case 1:return L(p.ca);case 2:return L(p.cc);case 3:return L(p.bu);case 4:return L(p.cb);default:return L(p.ax)}},fi=function(e){switch(e){case 0:return L(p.fH);case 1:return L(p.fA);case 2:return L(p.dZ);case 3:return L(p.dY);case 4:return L(p.fB);default:return L(p.fC)}},st=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,Qg(n),i),t(j,L(p.fK),$([t(A,fi(n),o)]))])};return uc(t(_a,r,A$))},F$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,L(p.c_),$([t(h,"z-index","0"),t(j,L(p.fQ),$([t(h,"z-index","-1")]))])),t(A,L(p.hG),$([t(j,L(p.Y),$([t(A,L(p.c0),$([t(h,"flex-grow","0")])),t(A,L(p.dQ),$([t(h,"align-self","auto !important")]))]))])),t(j,L(p.c$),$([t(h,"height","auto")])),t(j,L(p.c0),$([t(h,"flex-grow","100000")])),t(j,L(p.dQ),$([t(h,"width","100%")])),t(j,L(p.fv),$([t(h,"width","100%")])),t(j,L(p.dP),$([t(h,"align-self","flex-start")])),st(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(j,L(p.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),eh=function(e){var r=function(n){return $([t(j,L(p.fK),$([t(A,fi(n),e(n))]))])};return uc(t(_a,r,A$))},rh=function(){return $([0,1,2,3,4,5])}(),nh=$([t(pr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(pr,G(L(p.fK),G(L(p.hL),L(p.gN))),$([t(h,"display","block"),t(A,L(p.c0),$([t(j,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,L(p.dQ),$([t(j,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(pr,L(p.fK)+":focus",$([t(h,"outline","none")])),t(pr,L(p.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,G(L(p.fK),L(p.c0)),$([t(h,"height","100%"),t(j,L(p.c0),$([t(h,"height","100%")]))])),t(j,L(p.gP),$([t(A,L(p.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(pr,L(p.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,L(p.hL),F$),uc(function(e){return t(q,e,rh)}(function(e){switch(e){case 0:return t(A,L(p.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(j,L(p.c0),$([t(h,"height","auto")])),t(j,L(p.dQ),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,L(p.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")])),t(j,L(p.c0),$([t(h,"height","auto")]))]));case 2:return t(A,L(p.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,L(p.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,L(p.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,L(p.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(pr,L(p.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,L(p.dR),$([t(h,"flex-wrap","wrap")])),t(A,L(p.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,L(p.gf),$([t(h,"cursor","pointer")])),t(A,L(p.gg),$([t(h,"cursor","text")])),t(A,L(p.hn),$([t(h,"pointer-events","none !important")])),t(A,L(p.b5),$([t(h,"pointer-events","auto !important")])),t(A,L(p.a$),$([t(h,"opacity","0")])),t(A,L(p.aU),$([t(h,"opacity","1")])),t(A,L(G(p.gK,p.a$))+":hover",$([t(h,"opacity","0")])),t(A,L(G(p.gK,p.aU))+":hover",$([t(h,"opacity","1")])),t(A,L(G(p.gx,p.a$))+":focus",$([t(h,"opacity","0")])),t(A,L(G(p.gx,p.aU))+":focus",$([t(h,"opacity","1")])),t(A,L(G(p.cM,p.a$))+":active",$([t(h,"opacity","0")])),t(A,L(G(p.cM,p.aU))+":active",$([t(h,"opacity","1")])),t(A,L(p.fj),$([t(h,"transition",t(ee,", ",t(q,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,L(p.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,L(p.hE),$([t(h,"overflow-x","auto"),t(A,L(p.af),$([t(h,"flex-shrink","1")]))])),t(A,L(p.hF),$([t(h,"overflow-y","auto"),t(A,L(p.aw),$([t(h,"flex-shrink","1")])),t(A,L(p.hL),$([t(h,"flex-shrink","1")]))])),t(A,L(p.f7),$([t(h,"overflow","hidden")])),t(A,L(p.f8),$([t(h,"overflow-x","hidden")])),t(A,L(p.f9),$([t(h,"overflow-y","hidden")])),t(A,L(p.dP),$([t(h,"width","auto")])),t(A,L(p.b2),$([t(h,"border-width","0")])),t(A,L(p.fX),$([t(h,"border-style","dashed")])),t(A,L(p.fY),$([t(h,"border-style","dotted")])),t(A,L(p.fZ),$([t(h,"border-style","solid")])),t(A,L(p.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,L(p.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,L(p.hL),F$),t(A,L(p.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(j,L(p.fK),$([t(h,"flex-basis","0%"),t(A,L(p.fu),$([t(h,"flex-basis","auto")])),t(A,L(p.et),$([t(h,"flex-basis","auto")]))])),t(j,L(p.c0),$([t(h,"align-self","stretch !important")])),t(j,L(p.ef),$([t(h,"align-self","stretch !important")])),t(j,L(p.dQ),$([t(h,"flex-grow","100000")])),t(j,L(p.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(j,"u:first-of-type."+p.fG,$([t(h,"flex-grow","1")])),t(j,"s:first-of-type."+p.fE,$([t(h,"flex-grow","1"),t(j,L(p.fB),$([t(h,"margin-left","auto !important")]))])),t(j,"s:last-of-type."+p.fE,$([t(h,"flex-grow","1"),t(j,L(p.fB),$([t(h,"margin-right","auto !important")]))])),t(j,"s:only-of-type."+p.fE,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(j,"s:last-of-type."+(p.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(j,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([t(h,"flex-grow","0")])),st(function(e){switch(e){case 0:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return z($([t(h,"justify-content","flex-end")]),D);case 3:return z($([t(h,"justify-content","flex-start")]),D);case 4:return z($([t(h,"justify-content","center")]),D);default:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,L(p.hO),$([t(h,"justify-content","space-between")])),t(A,L(p.cj),$([t(h,"align-items","baseline")]))])),t(A,L(p.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(j,L(p.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,L(p.ee),$([t(h,"flex-basis","auto")]))])),t(j,L(p.c0),$([t(h,"flex-grow","100000")])),t(j,L(p.dQ),$([t(h,"width","100%")])),t(j,L(p.fv),$([t(h,"width","100%")])),t(j,L(p.dP),$([t(h,"align-self","flex-start")])),t(j,"u:first-of-type."+p.fD,$([t(h,"flex-grow","1")])),t(j,"s:first-of-type."+p.fF,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(j,"s:last-of-type."+p.fF,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(j,"s:only-of-type."+p.fF,$([t(h,"flex-grow","1"),t(j,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(j,"s:last-of-type."+(p.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(j,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([t(h,"flex-grow","0")])),st(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(h,"justify-content","center")]),D)}}),t(j,L(p.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,L(p.hO),$([t(h,"justify-content","space-between")]))])),t(A,L(p.gC),$([t(h,"display","-ms-grid"),t(j,".gp",$([t(j,L(p.fK),$([t(h,"width","100%")]))])),t(Kg,z("display","grid"),$([z("display","grid")])),eh(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,L(p.eY),$([t(h,"display","block"),t(j,L(p.fK+":first-child"),$([t(h,"margin","0 !important")])),t(j,L(p.fK+(fi(3)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),t(j,L(p.fK+(fi(2)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),st(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return z(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,L(p.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,L(p.gW),$([t(A,L(p.hL),$([t(h,"flex-basis","auto")]))])),t(A,L(p.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(j,L(p.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,L(p.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,L(p.c_),$([t(h,"z-index","0"),t(j,L(p.fQ),$([t(h,"z-index","-1")]))])),t(lc,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(lc,L(p.eZ),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(lc,L(p.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,L(p.fu),$([t(h,"display","inline-block")])),t(A,L(p.gP),$([t(h,"display","flex")])),t(A,L(p.fQ),$([t(h,"display","flex")])),t(A,L(p.fy),$([t(h,"display","flex")])),t(A,L(p.fR),$([t(h,"display","flex")])),t(A,L(p.hh),$([t(h,"display","flex")])),t(A,L(p.hg),$([t(h,"display","flex")])),t(j,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(j,L(p.af),$([t(h,"display","inline")])),t(j,L(p.aw),$([t(h,"display","inline-flex")])),t(j,L(p.gC),$([t(h,"display","inline-grid")])),st(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right")]));case 3:return z(D,$([t(h,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,L(p.ia),$([t(h,"font-weight","100")])),t(A,L(p.h1),$([t(h,"font-weight","200")])),t(A,L(p.h5),$([t(h,"font-weight","300")])),t(A,L(p.h7),$([t(h,"font-weight","400")])),t(A,L(p.h6),$([t(h,"font-weight","500")])),t(A,L(p.h9),$([t(h,"font-weight","600")])),t(A,L(p.fV),$([t(h,"font-weight","700")])),t(A,L(p.h0),$([t(h,"font-weight","800")])),t(A,L(p.h2),$([t(h,"font-weight","900")])),t(A,L(p.g2),$([t(h,"font-style","italic")])),t(A,L(p.hU),$([t(h,"text-decoration","line-through")])),t(A,L(p.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,G(L(p.ih),L(p.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,L(p.ib),$([t(h,"font-style","normal")])),t(A,L(p.h3),$([t(h,"text-align","justify")])),t(A,L(p.cG),$([t(h,"text-align","justify-all")])),t(A,L(p.h$),$([t(h,"text-align","center")])),t(A,L(p.h8),$([t(h,"text-align","right")])),t(A,L(p.h4),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),yn=function(e){return $([t(pr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(pr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},ah=ir($([t(q,function(e){return t(pr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(nn,0,6)),t(q,function(e){return t(pr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(nn,8,32)),t(q,function(e){return t(pr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(nn,0,24)),$([t(pr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(pr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),yn("zero"),yn("onum"),yn("liga"),yn("dlig"),yn("ordn"),yn("tnum"),yn("afrc"),yn("frac")])),th=`
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

`))),ih=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,oh=`
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
`,ch=`
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
`,lh=`
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
`,uh="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(" { flex-basis: auto !important; } "+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(L(p.b9)+(" { flex-basis: auto !important; }}"+(ih+(oh+(lh+(ch+th))))))))))))))),ya=function(e){return t(ee,"",e)},xa=v(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),wa=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return ke(o,{aE:t(M,z(c,l),o.aE)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return ke(o,{G:t(M,{b6:`
}`,G:D,aE:d,ag:"@supports ("+(m+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return ke(o,{G:t(M,t(wa,t(xa,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,y=i.b;return ke(o,{G:t(M,t(wa,t(xa,n.ag+(" > "+_),""),y),o.G)});case 2:var _=i.a,y=i.b;return ke(o,{G:t(M,t(wa,t(xa,n.ag+(" "+_),""),y),o.G)});case 4:var w=i.a,S=i.b;return ke(o,{G:t(M,t(wa,t(xa,G(n.ag,w),""),S),o.G)});default:var x=i.a;return ke(o,{G:t(M,t(wa,t(xa,n.ag,""),x),o.G)})}});return b(Ue,a,n,r)}),$h=function(e){var r=function(i){return ya(t(q,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},a=function(i){var o=i;return G(n(o),ya(t(q,a,o.G)))};return ya(t(q,a,b(Ue,v(function(i,o){var c=i.a,l=i.b;return t(M,t(wa,t(xa,c,""),l),o)}),D,e)))},I$=G(uh,$h(G(nh,ah))),xn=zo,E$=function(e){var r=e.eS;switch(r){case 0:return b(Ur,"div",D,$([b(Ur,"style",D,$([xn(I$)]))]));case 1:return xn("");default:return b(Ur,"elm-ui-static-rules",$([t(V$,"rules",ac(I$))]),D)}},vh=v(function(e,r){return Xr(b(Ae,hd(e),dd(),r))}),fh=function(e){return Xr(b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(gd,a,i,n)}),pd(),e))},mh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},sh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},dh=function(e){if(e.$===5){var r=e.a;return t(ct,sh,r.fo)}else return!1},Sa=v(function(e,r){return ce(e,r)<0?e:r}),dt=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),ze=O(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ae,dt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ae,dt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ae,dt(!1),"",a)+`
}`))])}case 0:var c=b(Ae,dt(!1),"",a);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(b(Ae,dt(!1),"",a)+`
}`))])}}),ph=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},gh=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(q,ph,r.fo)))}else return R},hh=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,w=f.c,S=e.d,x="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),F="rotate3d("+(ae(_)+(", "+(ae(y)+(", "+(ae(w)+(", "+(ae(S)+"rad)")))))));return N(x+(" "+(C+(" "+F))))}},$c=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(ze,e,n,a,i);case 13:var o=r.a,c=r.b;return P(ze,e,n,"."+o,$([t(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,u=t(Ye,0,t(Sa,1,1-l));return P(ze,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return P(ze,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,s=r.b,d=t(ee,", ",t(_n,gh,s)),g=$([t(re,"font-family",t(ee,", ",t(q,mh,s))),t(re,"font-feature-settings",d),t(re,"font-variant",t(ct,dh,s)?"small-caps":"normal")]);return P(ze,e,n,"."+o,g);case 3:var f=r.a,c=r.b,_=r.c;return P(ze,e,n,"."+f,$([t(re,c,_)]));case 4:var f=r.a,c=r.b,y=r.c;return P(ze,e,n,"."+f,$([t(re,c,ba(y))]));case 5:var w=r.a,S=r.b,x=r.c,C=k(x)+"px",F=k(S)+"px",J="."+p.af,K="."+(p.dR+J),H="."+p.dZ,Y="."+p.eZ,Z="."+p.eY,B="."+p.dY,ne=ae(x/2)+"px",fe=ae(S/2)+"px",ye="."+p.aw,f="."+w,me="."+p.fK;return ir($([P(ze,e,n,f+(J+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",F)])),P(ze,e,n,f+(K+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),P(ze,e,n,f+(ye+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(ze,e,n,f+(Z+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(ze,e,n,f+(Z+(" > "+B)),$([t(re,"margin-right",F)])),P(ze,e,n,f+(Z+(" > "+H)),$([t(re,"margin-left",F)])),P(ze,e,n,G(f,Y),$([t(re,"line-height","calc(1em + "+(k(x)+"px)"))])),P(ze,e,n,"textarea"+(me+f),$([t(re,"line-height","calc(1em + "+(k(x)+"px)")),t(re,"height","calc(100% + "+(k(x)+"px)"))])),P(ze,e,n,f+(Y+(" > "+B)),$([t(re,"margin-right",F)])),P(ze,e,n,f+(Y+(" > "+H)),$([t(re,"margin-left",F)])),P(ze,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(x/2|0))+"px")])),P(ze,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(x/2|0))+"px")]))]));case 7:var w=r.a,se=r.b,H=r.c,we=r.d,B=r.e,f="."+w;return P(ze,e,n,f,$([t(re,"padding",ae(se)+("px "+(ae(H)+("px "+(ae(we)+("px "+(ae(B)+"px")))))))]));case 6:var w=r.a,se=r.b,H=r.c,we=r.d,B=r.e,f="."+w;return P(ze,e,n,f,$([t(re,"border-width",k(se)+("px "+(k(H)+("px "+(k(we)+("px "+(k(B)+"px")))))))]));case 8:var de=r.a,Ve=T(function(He,Ja,Kr){e:for(;;)switch(Kr.$){case 0:var $s=Kr.a;return k($s)+"px";case 1:var Pr=z(He,Ja);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,"max-content";Pr.a;var En=Pr.b.a;return"minmax(max-content, "+(k(En)+"px)")}else if(Pr.b.$===1){var Bn=Pr.a.a;return Pr.b,"minmax("+(k(Bn)+"px, max-content)")}else{var Bn=Pr.a.a,En=Pr.b.a;return"minmax("+(k(Bn)+("px, "+(k(En)+"px)")))}case 2:var Yl=Kr.a,zr=z(He,Ja);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,k(Yl)+"fr";zr.a;var En=zr.b.a;return"minmax(max-content, "+(k(En)+"px)")}else if(zr.b.$===1){var Bn=zr.a.a;return zr.b,"minmax("+(k(Bn)+("px, "+(k(Yl)+"frfr)")))}else{var Bn=zr.a.a,En=zr.b.a;return"minmax("+(k(Bn)+("px, "+(k(En)+"px)")))}case 3:var vo=Kr.a,fo=Kr.b,mo=N(vo),so=Ja,po=fo;He=mo,Ja=so,Kr=po;continue e;default:var vo=Kr.a,fo=Kr.b,mo=He,so=N(vo),po=fo;He=mo,Ja=so,Kr=po;continue e}}),Te=function(He){return b(Ve,R,R,He)};Te(de.hP.a);var Ke=Te(de.hP.b),In=function(He){return"grid-template-rows: "+(He+";")}(t(ee," ",t(q,Te,de.hB))),Ua=function(He){return"-ms-grid-rows: "+(He+";")}(t(ee,Ke,t(q,Te,de.ak))),Yr=function(He){return"-ms-grid-columns: "+(He+";")}(t(ee,Ke,t(q,Te,de.ak))),Zr="grid-row-gap:"+(Te(de.hP.b)+";"),ua="grid-column-gap:"+(Te(de.hP.a)+";"),Nt=function(He){return"grid-template-columns: "+(He+";")}(t(ee," ",t(q,Te,de.ak))),f=".grid-rows-"+(t(ee,"-",t(q,Hr,de.hB))+("-cols-"+(t(ee,"-",t(q,Hr,de.ak))+("-space-x-"+(Hr(de.hP.a)+("-space-y-"+Hr(de.hP.b))))))),Oa=f+("{"+(Nt+(In+(ua+(Zr+"}"))))),uo="@supports (display:grid) {"+(Oa+"}"),$o=f+("{"+(Yr+(Ua+"}")));return $([$o,uo]);case 9:var rr=r.a,is=t(ee," ",$(["-ms-grid-row: "+(k(rr.af)+";"),"-ms-grid-row-span: "+(k(rr.gH)+";"),"-ms-grid-column: "+(k(rr.ga)+";"),"-ms-grid-column-span: "+(k(rr.im)+";")])),os=t(ee," ",$(["grid-row: "+(k(rr.af)+(" / "+(k(rr.af+rr.gH)+";"))),"grid-column: "+(k(rr.ga)+(" / "+(k(rr.ga+rr.im)+";")))])),f=".grid-pos-"+(k(rr.af)+("-"+(k(rr.ga)+("-"+(k(rr.im)+("-"+k(rr.gH))))))),Oa=f+("{"+(os+"}")),uo="@supports (display:grid) {"+(Oa+"}"),$o=f+("{"+(is+"}"));return $([$o,uo]);case 11:var f=r.a,cs=r.b,ls=function(He){return b($c,e,He,N(f))};return t(_a,ls,cs);default:var Er=r.a,_=hh(Er),f=oc(Er),Gt=z(f,_);if(!Gt.a.$&&!Gt.b.$){var w=Gt.a.a,us=Gt.b.a;return P(ze,e,n,"."+w,$([t(re,"transform",us)]))}else return D}}),bh=v(function(e,r){return fh(t(q,function(n){var a=b($c,e,n,R);return z(ft(n),t(vh,ac,a))},r))}),mi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(q,n,r))+"}"))}),B$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(mi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(mi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),_h=T(function(e,r,n){var a=r.a,i=r.b,o=ue(e,n)?e:n+(" ."+e);return t(ee," ",G(b(B$,o,p.hM,i),b(B$,o,p.gy,a)))}),yh=v(function(e,r){var n=ue(e,r)?e:r+(" ."+e);return t(ee," ",$([t(mi,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([z("line-height","1")])),t(mi,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),R$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),j$=v(function(e,r){return b(Ue,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),xh=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,Ye,r,n))}else return R},N$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,Sa,r,n))}else return R},G$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(Ce,e.gk,N$(r)),a=t(Ce,e.fP,N$(t(j$,function(m){return!ue(m,n)},r))),i=t(Ce,e.f1,xh(r)),o=1/(i-a),c=1-i,l=1/(i-n),u=1-i;return{f1:b(R$,o,i-a,c),ec:b(R$,l,i-n,u)}},W$=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ae(e.gH)),z("vertical-align",ae(e.fp)+"em"),z("font-size",ae(e.bi)+"em")]))},wh=function(e){return b(Ae,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return N(z(W$(function(c){return c.ec}(G$(o))),W$(function(c){return c.f1}(G$(o)))))}else return n;else return n}),R,e)},Sh=function(e){var r=function(o){if(o.$===4){var c=o.b;return N("@import url('"+(c+"');"))}else return R},n=function(o){o.a;var c=o.b,l=t(ee,`
`,t(_n,r,c));return l},a=t(q,Yu,e),i=function(o){var c=o.a,l=o.b,u=wh(l);if(u.$===1)return t(ee,"",t(q,yh(c),a));var m=u.a;return t(ee,"",t(q,t(_h,c,m),a))};return G(t(ee,`
`,t(q,n,e)),t(ee,`
`,t(q,i,e)))},Ch=function(e){if(e.$===1){var r=e.a,n=e.b;return N(z(r,n))}else return R},H$=v(function(e,r){var n=v(function(c,l){return{cC:G(l.cC,b($c,e,c,R)),bU:function(){var u=Ch(c);if(u.$===1)return l.bU;var m=u.a;return t(M,m,l.bU)}()}}),a=b(Ae,n,{cC:D,bU:D},r),i=a.bU,o=a.cC;return G(Sh(i),ya(o))}),U$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Ur,"div",D,$([b(Ur,"style",D,$([xn(t(H$,e,r))]))]));case 1:return b(Ur,"div",D,$([b(Ur,"style",D,$([xn(t(H$,e,r))]))]));default:return b(Ur,"elm-ui-rules",$([t(V$,"rules",t(bh,e,r))]),D)}}),O$=O(function(e,r,n,a){var i=t(U$,r,b(Ae,k$,z(T$,D$(r.gx)),n).b);return e?t(M,z("static-stylesheet",E$(r)),t(M,z("dynamic-stylesheet",i),a)):t(M,z("dynamic-stylesheet",i),a)}),J$=O(function(e,r,n,a){var i=t(U$,r,b(Ae,k$,z(T$,D$(r.gx)),n).b);return e?t(M,E$(r),t(M,i,a)):t(M,i,a)}),vc=$e(45),pt=$e(37),q$=function(e){return Ed(uu(e))},Lh=rn("p"),or=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return ue(o&a,o)}else{var i=e.a;return ue(i&n,i)}}),Y$=rn("s"),Z$=rn("u"),fc=$e(44),gt=$e(39),si=nr(function(e,r,n,a,i,o){var c=v(function(u,m){if(a.$===1){var s=a.a;return b(q$,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return P(O$,!1,g,f,s);default:var g=i.a,f=i.b;return P(O$,!0,g,f,s)}}())}else{var d=a.a;return t(function(){switch(u){case"div":return ha;case"p":return Lh;default:return Ur(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return P(J$,!1,g,f,d);default:var g=i.a,f=i.b;return P(J$,!0,g,f,d)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var u=r.a;return t(c,u,n);default:var u=r.a,m=r.b;return b(Ur,u,n,$([t(c,m,$([xr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return t(or,gt,e)&&!t(or,fc,e)?l:t(or,P$,e)?t(Z$,$([xr(t(ee," ",$([p.fK,p.hL,p.b9,p.ax,p.fG])))]),$([l])):t(or,z$,e)?t(Y$,$([xr(t(ee," ",$([p.fK,p.hL,p.b9,p.ax,p.fE])))]),$([l])):l;case 1:return t(or,pt,e)&&!t(or,vc,e)?l:t(or,M$,e)?t(Y$,$([xr(t(ee," ",$([p.fK,p.hL,p.b9,p.fF])))]),$([l])):t(or,L$,e)?t(Z$,$([xr(t(ee," ",$([p.fK,p.hL,p.b9,p.fD])))]),$([l])):l;default:return l}}),wn=function(e){return!e.b},mc=xn,Ph=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),ht=function(e){return t(ha,$([xr(Ph)]),$([mc(e)]))},zh=p.fK+(" "+(p.Y+(" "+(p.dQ+(" "+p.c0))))),K$=function(e){return t(ha,$([xr(zh)]),$([mc(e)]))},Mh=T(function(e,r,n){var a=v(function(_,y){var w=_.a,S=_.b,x=y.a,C=y.b;switch(S.$){case 0:var F=S.a;return ue(e,vi),z(t(M,z(w,F(e)),x),C);case 1:var J=S.a;return ue(e,vi),z(t(M,z(w,t(J.gL,Un,e)),x),wn(C)?J.hV:G(J.hV,C));case 2:var K=S.a;return z(t(M,z(w,ue(e,dr)?K$(K):ht(K)),x),C);default:return z(x,C)}}),i=v(function(_,y){var w=y.a,S=y.b;switch(_.$){case 0:var x=_.a;return ue(e,vi),z(t(M,x(e),w),S);case 1:var C=_.a;return ue(e,vi),z(t(M,t(C.gL,Un,e),w),wn(S)?C.hV:G(C.hV,S));case 2:var F=_.a;return z(t(M,ue(e,dr)?K$(F):ht(F),w),S);default:return z(w,S)}});if(r.$===1){var o=r.a,c=b(Ue,a,z(D,D),o),l=c.a,u=c.b,m=wn(u)?n.hV:G(n.hV,u);if(m.b){var s=m;return tc({gL:P(si,n.aR,n.aT,n.aJ,w$(b(C$,"nearby-element-pls",l,n.aM))),hV:s})}else return $t(V(si,n.aR,n.aT,n.aJ,w$(b(C$,"nearby-element-pls",l,n.aM)),Un))}else{var d=r.a,g=b(Ue,i,z(D,D),d),f=g.a,u=g.b,m=wn(u)?n.hV:G(n.hV,u);if(m.b){var s=m;return tc({gL:P(si,n.aR,n.aT,n.aJ,Ze(t(S$,f,n.aM))),hV:s})}else return $t(V(si,n.aR,n.aT,n.aJ,Ze(t(S$,f,n.aM)),Un))}}),cr=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Th=function(e){return{$:10,a:e}},di=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(di,n,o|a)}else{var i=e.a;return t(di,i|n,a)}}),X$=function(e){return{$:1,a:e}},pi=v(function(e,r){return{$:3,a:e,b:r}}),Q$=function(e){return{$:2,a:e}},kh=v(function(e,r){return t(ha,$([xr(function(){switch(e){case 0:return t(ee," ",$([p.be,p.hL,p.fy]));case 1:return t(ee," ",$([p.be,p.hL,p.fR]));case 2:return t(ee," ",$([p.be,p.hL,p.hh]));case 3:return t(ee," ",$([p.be,p.hL,p.hg]));case 4:return t(ee," ",$([p.be,p.hL,p.gP]));default:return t(ee," ",$([p.be,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return xn("");case 2:var n=r.a;return ht(n);case 0:var a=r.a;return a(dr);default:var i=r.a;return t(i.gL,Un,dr)}}()]))}),Dh=T(function(e,r,n){var a=t(kh,e,r);switch(n.$){case 0:return e===5?X$($([a])):Q$($([a]));case 1:var i=n.a;return e===5?X$(t(M,a,i)):t(pi,i,$([a]));case 2:var o=n.a;return e===5?t(pi,$([a]),o):Q$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(pi,t(M,a,i),o):t(pi,i,t(M,a,o))}}),ev=v(function(e,r){return{$:2,a:e,b:r}}),Sn=function(e){return{$:1,a:e}},On=v(function(e,r){switch(r.$){case 0:return Sn(e);case 1:var n=r.a;return t(ev,n,e);default:var a=r.a,i=r.b;return t(ev,a,i)}}),Vh=function(e){switch(e){case 0:return p.cN+(" "+p.dY);case 2:return p.cN+(" "+p.dZ);default:return p.cN+(" "+p.fB)}},Ah=function(e){switch(e){case 0:return p.cO+(" "+p.fH);case 2:return p.cO+(" "+p.fA);default:return p.cO+(" "+p.fC)}},bt=v(function(e,r){return t(Mr,Gd(e),$u(r))}),Or=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Cn=function(e){return{$:1,a:e}},Fh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Cn(I(i,0,0));case 1:var o=r.a;return Cn(I(0,o,0));case 2:var c=r.a;return Cn(I(0,0,c));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return P(Or,I(0,0,0),I(1,1,1),n,f);default:var n=r.a;return P(Or,I(0,0,0),n,I(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,c=a.c;switch(r.$){case 0:var l=r.a;return Cn(I(l,o,c));case 1:var u=r.a;return Cn(I(i,u,c));case 2:var m=r.a;return Cn(I(i,o,m));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return P(Or,a,I(1,1,1),n,f);default:var s=r.a;return P(Or,a,s,I(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,c=a.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return P(Or,I(l,o,c),d,g,f);case 1:var u=r.a;return P(Or,I(i,u,c),d,g,f);case 2:var m=r.a;return P(Or,I(i,o,m),d,g,f);case 3:var _=r.a;return P(Or,_,d,g,f);case 4:var y=r.a,w=r.b;return P(Or,a,d,y,w);default:var S=r.a;return P(Or,a,S,g,f)}}}),Ca=$e(7),rv=$e(36),nv=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(di,n|i,a|o)}),tn=t(di,0,0),sc=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return I(tn,p.ee+(" "+a),$([b(cr,a,"height",n+"px")]));case 1:return I(t(oe,rv,tn),p.c$,D);case 2:var i=e.a;return i===1?I(t(oe,pt,tn),p.c0,D):I(t(oe,pt,tn),p.ef+(" height-fill-"+k(i)),$([b(cr,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+k(o),u=b(cr,l,"min-height",k(o)+"px !important"),m=sc(c),s=m.a,d=m.b,g=m.c;return I(t(oe,vc,s),l+(" "+d),t(M,u,g));default:var f=e.a,c=e.b,l="max-height-"+k(f),u=b(cr,l,"max-height",k(f)+"px"),_=sc(c),s=_.a,d=_.b,g=_.c;return I(t(oe,vc,s),l+(" "+d),t(M,u,g))}},av=$e(38),dc=function(e){switch(e.$){case 0:var r=e.a;return I(tn,p.fu+(" width-px-"+k(r)),$([b(cr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return I(t(oe,av,tn),p.dP,D);case 2:var n=e.a;return n===1?I(t(oe,gt,tn),p.dQ,D):I(t(oe,gt,tn),p.fv+(" width-fill-"+k(n)),$([b(cr,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),c=b(cr,o,"min-width",k(a)+"px"),l=dc(i),u=l.a,m=l.b,s=l.c;return I(t(oe,fc,u),o+(" "+m),t(M,c,s));default:var d=e.a,i=e.b,o="max-width-"+k(d),c=b(cr,o,"max-width",k(d)+"px"),g=dc(i),u=g.a,m=g.b,s=g.c;return I(t(oe,fc,u),o+(" "+m),t(M,c,s))}},gi=$e(27),Ih=v(function(e,r){if(ue(e,gi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return ue(i,c)&&ue(i,o)&&ue(i,l)&&i>=0&&i<=24;default:return!1}}),La=$e(6),tv=$e(30),iv=$e(29),Eh=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var s=l.a,d=l.b;switch(s.$){case 0:var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 3:var F=s.a,J=s.b;if(t(or,F,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=J+(" "+e),f=r,_=t(oe,F,n),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 1:var K=s.a,g=e,f=r,_=n,y=a,w=i,S=t(M,K,o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 4:var F=s.a,H=s.b;if(t(or,F,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else if(t(Ih,F,H)){var g=ft(H)+(" "+e),f=r,_=t(oe,F,n),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=ft(H)+(" "+e),f=r,_=t(oe,F,n),y=a,w=t(M,H,i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 10:var F=s.a,Y=s.b,g=e,f=r,_=t(oe,F,n),y=t(Fh,a,Y),w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 7:var Z=s.a;if(t(or,La,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else switch(Z.$){case 0:var B=Z.a,g=p.fu+(" width-px-"+k(B))+(" "+e),f=r,_=t(oe,La,n),y=a,w=t(M,b(cr,"width-px-"+k(B),"width",k(B)+"px"),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 1:var g=e+(" "+p.dP),f=r,_=t(oe,av,t(oe,La,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 2:var ne=Z.a;if(ne===1){var g=e+(" "+p.dQ),f=r,_=t(oe,gt,t(oe,La,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=e+(" "+(p.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,gt,t(oe,La,n)),y=a,w=t(M,b(cr,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}default:var fe=dc(Z),ye=fe.a,me=fe.b,Zr=fe.c,g=e+(" "+me),f=r,_=t(nv,ye,t(oe,La,n)),y=a,w=G(Zr,i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 8:var se=s.a;if(t(or,Ca,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else switch(se.$){case 0:var B=se.a,we=k(B)+"px",de="height-px-"+we,g=p.ee+(" "+(de+(" "+e))),f=r,_=t(oe,Ca,n),y=a,w=t(M,b(cr,de,"height ",we),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 1:var g=p.c$+(" "+e),f=r,_=t(oe,rv,t(oe,Ca,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.c0+(" "+e),f=r,_=t(oe,pt,t(oe,Ca,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=e+(" "+(p.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,pt,t(oe,Ca,n)),y=a,w=t(M,b(cr,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}default:var Ve=sc(se),ye=Ve.a,me=Ve.b,Zr=Ve.c,g=e+(" "+me),f=r,_=t(nv,ye,t(oe,Ca,n)),y=a,w=G(Zr,i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 2:var Te=s.a;switch(Te.$){case 0:var g=e,f=t(On,"main",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 1:var g=e,f=t(On,"nav",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 2:var g=e,f=t(On,"footer",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 3:var g=e,f=t(On,"aside",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 4:var Ke=Te.a;if(Ke<=1){var g=e,f=t(On,"h1",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else if(Ke<7){var g=e,f=t(On,"h"+k(Ke),r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=e,f=t(On,"h6",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 9:var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 8:var g=e,f=r,_=n,y=a,w=i,S=t(M,t(bt,"role","button"),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 5:var In=Te.a,g=e,f=r,_=n,y=a,w=i,S=t(M,t(bt,"aria-label",In),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 6:var g=e,f=r,_=n,y=a,w=i,S=t(M,t(bt,"aria-live","polite"),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;default:var g=e,f=r,_=n,y=a,w=i,S=t(M,t(bt,"aria-live","assertive"),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 9:var Ua=s.a,Yr=s.b,Zr=function(){switch(Yr.$){case 3:return i;case 2:return Yr.a,i;case 0:return Yr.a,i;default:var Oa=Yr.a;return G(i,Oa.hV)}}(),g=e,f=r,_=n,y=a,w=Zr,S=o,x=b(Dh,Ua,Yr,c),C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 6:var ua=s.a;if(t(or,tv,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=Vh(ua)+(" "+e),f=r,_=function(Er){switch(ua){case 1:return t(oe,z$,Er);case 2:return t(oe,P$,Er);default:return Er}}(t(oe,tv,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}default:var Nt=s.a;if(t(or,iv,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=Ah(Nt)+(" "+e),f=r,_=function(Er){switch(Nt){case 1:return t(oe,M$,Er);case 2:return t(oe,L$,Er);default:return Er}}(t(oe,iv,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}}}else{var u=oc(a);if(u.$===1)return{aJ:t(M,xr(e),o),aM:c,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(M,xr(e+(" "+m)),o),aM:c,aR:n,aT:r,hV:t(M,Th(a),i)}}}),Bh={$:0},Rh=Bh,lr=O(function(e,r,n,a){return b(Mh,e,a,qa(Eh,Hg(e),r,tn,Rh,D,D,Eg,ar(n)))}),on=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),jh={fO:R,fW:R,hH:N({a2:0,b7:P(on,155/255,203/255,1,1),eV:z(0,0),bi:3})},Nh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gK;return c.$===1?ke(i,{gK:N(o)}):i;case 1:var l=a.a,u=i.gx;return u.$===1?ke(i,{gx:N(l)}):i;default:var m=a.a,s=i.eS;return s.$===1?ke(i,{eS:N(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return jh;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ue,r,{gx:R,gK:R,eS:R},e))},Gh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(dr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),dr);case 2:var i=r.a;return ht(i);default:return ht("")}}),Wh=T(function(e,r,n){var a=Nh(e),i=function(){var o=a.eS;return o===1?x$(a):Fg(a)}();return t(Gh,i,P(lr,dr,Hn,r,Ze($([n]))))}),_t=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),ov=v(function(e,r){return{$:1,a:e,b:r}}),cv=function(e){return{$:2,a:e}},Hh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),pc=function(e){return{$:3,a:e}},lv=$e(8),uv=$e(14),$v=$e(5),vv=$e(4),Pa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(a)+("-"+De(i))))))},hi=Js,gc=Os,fv=v(function(e,r){return G(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",gc(hi(n)));case 4:var n=e.a;return e.b,t(ee,"-",gc(hi(n)));default:var n=e.a.hc;return t(ee,"-",gc(hi(n)))}}())}),Uh=function(){var e=$([pc("Open Sans"),pc("Helvetica"),pc("Verdana"),Hh]);return $([t(ge,lv,b(_t,"bg-"+Pa(P(on,1,1,1,0)),"background-color",P(on,1,1,1,0))),t(ge,uv,b(_t,"fc-"+Pa(P(on,0,0,0,1)),"color",P(on,0,0,0,1))),t(ge,vv,cv(20)),t(ge,$v,t(ov,b(Ae,fv,"font-",e),e))])}(),Oh=T(function(e,r,n){var a=e.hl;return b(Wh,a,t(M,sr(t(ee," ",$([p.hA,p.fK,p.hL]))),G(Uh,r)),n)}),mv={$:3},sv=function(e){return{$:2,a:e}},hc=Rd,dv=v(function(e,r){switch(r.$){case 1:var n=r.a;return tc({gL:v(function(o,c){return t(hc,e,t(n.gL,o,c))}),hV:n.hV});case 0:var a=r.a;return $t(t(vt,hc(e),a));case 2:var i=r.a;return sv(i);default:return mv}}),bc=dv,Jh=hc,qh=function(e){return{$:0,a:e}},Se=qh,Yh=Nd,gr=Yh,pv={$:1},bi=function(e){return{$:5,a:e}},gv=bi(0),Vr=T(function(e,r,n){return P(on,e/255,r/255,n/255,1)}),hv=b(Vr,0,0,0),Zh=Mr("d"),Kh=Mr("fill"),Xh=Mr("height"),bv=cu("http://www.w3.org/2000/svg"),Qh=bv("path"),e3=bv("svg"),r3=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},n3=function(e){var r=r3(e);return"rgba("+(k(Pe(r.hu*255))+(","+k(Pe(r.gA*255))+(","+k(Pe(r.fS*255))+(","+ae(r.fI)+")"))))},a3=Mr("viewBox"),t3=Mr("width"),za=T(function(e,r,n){return t(e3,$([a3("0 0 100 100"),t3(k(e)),Xh(k(e))]),$([t(Qh,$([Zh(n),Kh(n3(r))]),D)]))}),i3={$:1},ur=i3,_v=function(e){return{$:7,a:e}},Q=_v,he=v(function(e,r){return P(lr,dr,Hn,t(M,Q(ur),t(M,pe(ur),e)),Ze($([r])))}),yv=function(e){return{$:2,a:e}},ve=yv(1),Jn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ma={c4:260,bF:54},cn=function(e){return t(ge,lv,b(_t,"bg-"+Pa(e),"background-color",e))},o3=$e(28),Ln=function(e){return t(ge,o3,b(_t,"bc-"+Pa(e),"border-color",e))},_i=1,wr=v(function(e,r){return P(lr,_i,Hn,t(M,sr(p.gc+(" "+p.bu)),t(M,pe(ur),t(M,Q(ur),e))),Ze(r))}),c3=b(Vr,83,83,83),xv=O(function(e,r,n,a){return P(on,e/255,r/255,n/255,a)}),yi=P(xv,56,56,56,.25),Ne=mv,yt=Be(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),xt=$e(2),qn=function(e){var r=e;return t(ge,xt,V(yt,"p-"+k(e),r,r,r,r))},wv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Sv=$e(3),Cv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Pn=function(e){return t(ge,Sv,b(wv,t(Cv,e,e),e,e))},l3=P(xv,0,0,0,0),u3=function(e){return{$:4,a:e}},_c=0,zn=v(function(e,r){return P(lr,_c,Hn,t(M,sr(p.bu+(" "+p.ax)),t(M,Q(ur),t(M,pe(ur),e))),Ze(r))}),$3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(x$,{gx:{fO:R,fW:R,hH:R},gK:1,eS:0},n.hV));case 2:var a=e.a;return $i(xn(a));default:return $i(xn(""))}},v3=v(function(e,r){return $3(e(r))}),f3=jd,m3=v(function(e,r){return $t(b(f3,v3,e,r))}),Mn=function(e){return t(ge,uv,b(_t,"fc-"+Pa(e),"color",e))},yc=b(Vr,195,195,195),Tn=v(function(e,r){return{$:3,a:e,b:r}}),Lv=$e(13),s3=t(Tn,Lv,p.h7),d3=$e(20),Pv=t(Tn,d3,p.hF),Yn=function(e){return t(ge,vv,cv(e))},xc=t(Tn,Lv,p.fV),wc=v(function(e,r){if(r.$===-2)return Wr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return V(te,n,a,t(e,a,i),t(wc,e,o),t(wc,e,c))}),zv=v(function(e,r){if(ue(e,r)){var n=e;return t(ge,xt,V(yt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,xt,V(yt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),kn=function(e){return sv(e)},p3=function(e){return b(Bo,T(function(r,n,a){return t(M,n,a)}),D,e)},g3=v(function(e,r){return{$:3,a:e,b:r}}),h3=v(function(e,r){return{$:2,a:e,b:r}}),b3=v(function(e,r){return{$:0,a:e,b:r}}),_3=v(function(e,r){return{$:1,a:e,b:r}}),Zn=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),y3=P(Zn,0/255,0/255,0/255,1),xi=function(e){return{$:6,a:e}},x3=xi(0),wi=function(e){return{$:2,a:e}},w3={$:6},Mv=wi(w3),Tv=T(function(e,r,n){if(r.$===1)return r.a,P(lr,_i,Sn("label"),e,Ze($([n])));var a=r.a,i=r.b,o=r.c,c=P(lr,dr,Hn,i,Ze($([o])));switch(a){case 2:return P(lr,_i,Sn("label"),t(M,sr(p.cj),e),Ze($([c,n])));case 3:return P(lr,_i,Sn("label"),t(M,sr(p.cj),e),Ze($([n,c])));case 0:return P(lr,_c,Sn("label"),t(M,sr(p.cj),e),Ze($([n,c])));default:return P(lr,_c,Sn("label"),t(M,sr(p.cj),e),Ze($([c,n])))}}),Sc=bt,ln=bi(1),kv="Enter",S3=function(e){return{$:5,a:e}},Dv=function(e){if(e.$===1){var r=e.a;return wi(S3(r))}else return Wn},Vv=function(e){return e.$===1},C3=function(e){return{$:0,a:e}},Cc=lu,L3=v(function(e,r){return t(Cc,e,C3(r))}),Av=function(e){return t(L3,"click",tr(e))},P3=td,z3=function(e){return{$:2,a:e}},M3=v(function(e,r){return t(Cc,e,z3(r))}),Fv=function(e){var r=function(a){var i=e(a);if(i.$===1)return P3("No key matched");var o=i.a;return tr(o)},n=t(U,r,t(W,"key",ga));return Le(t(M3,"keydown",t(Xt,function(a){return z(a,!0)},n)))},T3=$e(21),Kn=t(Tn,T3,p.gf),Iv=" ",Ev=function(e){return t(Mr,"tabIndex",k(e))},k3=t(vt,Le,Ev),D3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bJ,c=G($([Vv(n)?Wn:Pn(6),Le(Av(o(!i))),Mv,Fv(function(l){return ue(l,kv)||ue(l,Iv)?N(o(!i)):R}),k3(0),Kn,x3,Q(ve)]),e);return b(Tv,t(M,Le(t(Sc,"role","checkbox")),t(M,Le(t(Sc,"aria-checked",i?"true":"false")),t(M,Dv(n),c))),n,P(lr,dr,Hn,$([ln,pe(ve),Q(ur)]),Ze($([a(i)]))))}),V3=T(function(e,r,n){return G(t(lt,e-Nn(n),ii(r)),n)}),Si=Ss,Bv=function(e){var r=function(n){return n<10?k(n):ii($$(87+n))};return e<16?r(e):G(Bv(e/16|0),r(t(Si,16,e)))},A3=t(Oe,Bv,t(V3,2,"0")),Lc=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},F3=function(e){var r=Lc(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(q,t(Oe,Pe,A3),$([n*255,a*255,i*255]))))},Pc=$e(12),Rv=t(Tn,Pc,p.h$),zc=xi(1),Dn=Cs,Ci=function(e){return e*Dn/180},I3=function(e){return{$:1,a:e}},Mc=v(function(e,r){return{$:10,a:e,b:r}}),E3=$e(26),B3=function(e){return t(Mc,E3,I3(-e))},Ta=T(function(e,r,n){return P(on,e,r,n,1)}),R3=on,j3=v(function(e,r){return{$:4,a:e,b:r}}),N3=$e(24),G3=function(e){return t(Mc,N3,t(j3,I(0,0,1),e))},W3=$e(17),Xn=function(e){return t(ge,W3,b(cr,"br-"+k(e),"border-radius",k(e)+"px"))},H3=function(e){return ya($([e.ej?"box-inset":"box-",De(e.eV.a)+"px",De(e.eV.b)+"px",De(e.a2)+"px",De(e.bi)+"px",Pa(e.b7)]))},U3=$e(19),O3=function(e){var r={a2:e.a2,b7:e.b7,ej:!1,eV:e.eV,bi:e.bi};return t(ge,U3,b(cr,H3(r),"box-shadow",cc(r)))},jv=v(function(e,r){return{$:12,a:e,b:r}}),Nv=$e(0),J3=function(e){return e?t(ge,Nv,t(jv,"transparent",1)):t(ge,Nv,t(jv,"visible",0))},Tc=b(Ta,1,1,1),kc=Be(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),Li=function(e){return t(ge,gi,V(kc,"b-"+k(e),e,e,e,e))},q3=v(function(e,r){return t(ge,gi,V(kc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),wt=function(e){var r=e.b3,n=e.cI,a=e.g4,i=e.hx;return ue(n,r)&&ue(a,i)?ue(n,i)?Li(n):t(q3,a,n):t(ge,gi,V(kc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},Y3=function(e){return t(he,$([sr("focusable"),Q(Se(14)),pe(Se(14)),Mn(Tc),ln,Yn(9),Rv,Xn(3),Ln(e?b(Ta,59/255,153/255,252/255):b(Ta,211/255,211/255,211/255)),O3({a2:1,b7:e?P(R3,238/255,238/255,238/255,0):b(Ta,238/255,238/255,238/255),eV:z(0,0),bi:1}),cn(e?b(Ta,59/255,153/255,252/255):Tc),Li(e?0:1),nc(t(he,$([Ln(Tc),pe(Se(6)),Q(Se(9)),G3(Ci(-45)),zc,ln,B3(1),J3(!e),wt({b3:2,g4:2,hx:0,cI:0})]),Ne))]),Ne)},Z3=yr("htmlFor"),Dc=v(function(e,r){if(r.$)return R;var n=r.a;return e(n)}),Pi=v(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return e(n)}}),Gv=O(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),K3=sp,X3=ed,Q3=v(function(e,r){if(r.$)return Qe(e);var n=r.a;return Ie(n)}),eb=mp,rb=function(e){return t(eb,{f2:!1,hb:!1},e)},Vc=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return R},nb=v(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return Ie(e(n))}}),ab=function(e){return{$:2,a:e}},tb=function(e){return{$:0,a:e}},ib=function(e){return{$:1,a:e}},Ac=v(function(e,r){return Gr(r)-Gr(e)}),Fc=T(function(e,r,n){var a=Gr(n);return ce(Gr(e),a)<1&&ce(a,Gr(r))<1}),ob=v(function(e,r){var n=function(i){return ce(i,e)<0?Ie(i):Qe(ib(r))},a=b(Fc,"0","9",r)?Ie(t(Ac,"0",r)):b(Fc,"a","z",r)?Ie(10+t(Ac,"a",r)):b(Fc,"A","Z",r)?Ie(10+t(Ac,"A",r)):Qe(tb(r));return t(Pi,n,a)}),Wv=v(function(e,r){var n=ma(r);if(n.$===1)return Ie(0);var a=n.a,i=a.a,o=a.b;return t(Pi,function(c){return t(Pi,function(l){return Ie(c+l*e)},t(Wv,e,o))},t(ob,e,i))}),cb=v(function(e,r){return 2<=e&&e<=36?t(Wv,e,Qo(r)):Qe(ab(e))}),lb=cb(16),ub=T(function(e,r,n){return P(Zn,e,r,n,1)}),$b=O(function(e,r,n,a){return P(Zn,e,r,n,a)}),Qn=ws,vb=v(function(e,r){var n=t(Qn,10,e);return Pe(r*n)/n}),fb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=u$(n);if(a.b&&!a.b.b){var i=a.a;return X3($([i,i]))}else return n};return t(Oe,hi,t(Oe,function(n){return t(Fe,function(a){return b(K3,1,a,n)},rb(e))},t(Oe,Dc(Vc),t(Oe,Fe(function(n){return n.hW}),t(Oe,Fe(_n(Dr)),t(Oe,Q3("Parsing hex regex failed"),Pi(function(n){var a=t(q,t(Oe,r,t(Oe,lb,nb(nt))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,u=l.a.a,m=l.b,s=m.a.a;return Ie(P($b,i/255,c/255,u/255,t(vb,2,s/255)))}else break e;else{var i=a.a.a,d=a.b,c=d.a.a,g=d.b,u=g.a.a;return Ie(b(ub,i/255,c/255,u/255))}else break e;return Qe("Parsing ints from hex failed")})))))))}(),mb=yr("id"),sb=rn("input"),db=rn("label"),Hv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),pb=Hv(0),gb=yr("name"),hb=function(e){return z(e,!0)},bb=function(e){return{$:1,a:e}},_b=v(function(e,r){return t(Cc,e,bb(r))}),yb=v(function(e,r){return b(Ue,W,r,e)}),xb=t(yb,$(["target","value"]),ga),Uv=function(e){return t(_b,"input",t(Xt,hb,t(Xt,e,xb)))},wb=t(Tn,Pc,p.h4),Ov=t(Tn,Pc,p.h8),Ic=function(e){return t(y$,5,e)},Ec=function(e){return t(ge,$v,t(ov,b(Ae,fv,"ff-",e),e))},Sb=b(Vr,195,195,195),Jv=b(Vr,69,69,69),Cb=Hv(2),Lb={$:2},Bc=Lb,Pb=$e(32),zb=$e(31),qv=function(e){return b(Ue,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},Mb=v(function(e,r){return t(Ce,r,b(Ue,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return N(z(i,c))}else return R;else{var i=a.a;return N(i)}}),R,e))}),Yv=function(e){return b(Ue,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},Tb=$e(33),kb=yr("max"),Db=yr("min"),Vb=v(function(e,r){return t(ge,Sv,b(wv,t(Cv,e,r),e,r))}),Ab=function(e){return t(yr,"step",e)},Zv=yr("type"),Kv=yr("value"),ka=yv,Fb=Ud,Xv=v(function(e,r){switch(r.$){case 0:return Wn;case 2:var n=r.a;return wi(n);case 6:var a=r.a;return xi(a);case 5:var i=r.a;return bi(i);case 7:var a=r.a;return _v(a);case 8:var a=r.a;return b$(a);case 3:var a=r.a,i=r.b;return t(Tn,a,i);case 4:var o=r.a,c=r.b;return t(ge,o,c);case 9:var l=r.a,u=r.b;return t(_$,l,t(dv,e,u));case 1:var m=r.a;return Le(t(Fb,e,m));default:var s=r.a,d=r.b;return t(Mc,s,d)}}),Ib=T(function(e,r,n){return t(zn,$([Q(ve),pe(t(Ce,ve,n)),ln]),$([t(he,$([Q(ka(Pe(e*1e4)))]),Ne),t(he,t(M,ln,t(q,Xv(it),r)),Ne),t(he,$([Q(ka(Pe(le(1-e)*1e4)))]),Ne)]))}),Eb=T(function(e,r,n){return t(wr,$([pe(ve),Q(t(Ce,ve,n)),zc]),$([t(he,$([pe(ka(Pe(le(1-e)*1e4)))]),Ne),t(he,t(M,zc,t(q,Xv(it),r)),Ne),t(he,$([pe(ka(Pe(e*1e4)))]),Ne)]))}),Qv=v(function(e,r){var n=Yv(e),a=qv(e),i=function(){var S=z(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var x=S.a.a.a,C=S.b.a.a;return ce(C,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cs)/(r.cr-r.cs),c=r.ic,l=c,u=qv(l),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),s=Yv(l),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return k(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([t(re,"width",d),t(re,"height",m)]),_=t(Mb,e,z(5,5)),y=_.a,w=_.b;return b(Tv,$([Vv(r.em)?Wn:t(Vb,y,w),Mv,Q(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return ur}()),pe(function(){if(a.$===1)return ur;if(a.a.$){var S=a.a;return S}else return ur}())]),r.em,t(zn,$([Q(t(Ce,ve,n)),pe(t(Ce,Se(20),a))]),$([P(lr,dr,Sn("input"),$([Dv(r.em),t(ge,Pb,t(mt,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,Tb,t(mt,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,zb,t(mt,'input[type="range"].'+(g+"::-ms-thumb"),f)),Le(xr(g+" ui-slide-bar focusable-parent")),Le(Uv(function(S){var x=l$(S);if(x.$===1)return r.bJ(0);var C=x.a;return r.bJ(C)})),Le(Zv("range")),Le(Ab(function(){var S=r.cF;if(S.$===1)return"any";var x=S.a;return ae(x)}())),Le(Db(ae(r.cs))),Le(kb(ae(r.cr))),Le(Kv(ae(r.cJ))),i?Le(t(Sc,"orient","vertical")):Wn,Q(i?t(Ce,Se(20),a):t(Ce,ve,n)),pe(i?t(Ce,ve,n):t(Ce,Se(20),a))]),Ze(D)),t(he,t(M,Q(t(Ce,ve,n)),t(M,pe(t(Ce,Se(20),a)),G(e,$([Ic(i?b(Eb,o,t(M,sr("focusable-thumb"),l),n):b(Ib,o,t(M,sr("focusable-thumb"),l),a))])))),Ne)])))}),Bb=b(Ta,.5,.5,.5),ef=Dr,rf=function(e){var r=e.c3,n=e.cJ,a=e.cs,i=e.cr,o=e.cF,c=e.bJ;return t(he,$([Q(ve)]),t(Qv,$([Pn(2),Ic(t(he,$([Q(ve),pe(Se(16)),ln,cn(Jv),Xn(4)]),Ne))]),{em:t(Cb,D,t(zn,$([Q(ve)]),$([t(he,$([wb]),kn(r)),t(he,$([Q(ve),Ov,Ec($([Bc]))]),kn(ae(n)))]))),cr:i,cs:a,bJ:c,cF:N(o),ic:ef($([Q(Se(12)),pe(Se(12)),Xn(4),Li(0),Ln(Bb),cn(Sb)])),cJ:n}))},Rb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),jb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(D3,D,{f6:n,gM:Y3,em:t(pb,D,kn(e)),bJ:g3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return rf({c3:e,cr:o,cs:i,bJ:b3(e),cF:.001*(o-i),cJ:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return rf({c3:e,cr:o,cs:i,bJ:t(Oe,Pe,_3(e)),cF:1,cJ:n});default:var n=r.a;return t(he,$([Q(ve)]),bn(t(ha,D,$([t(ha,$([t(gr,"margin-bottom","6px")]),$([t(db,$([Z3(e)]),$([mc(e)]))])),t(sb,$([Zv("color"),t(gr,"width","100%"),t(gr,"height","26px"),t(gr,"padding","0px"),mb(e),gb(e),Uv(function(l){return t(h3,e,t(Rb,y3,fb(l)))}),Kv(F3(n))]),D)]))))}}),Rc=b(Vr,255,255,255),Nb=function(e){return t(wr,$([Q(ve),Pn(8),t(zv,0,14),wt({b3:1,g4:0,hx:0,cI:0}),Ln(yi)]),$([t(he,$([Yn(16),xc,Mn(Rc)]),kn(e.hc)),t(wr,$([Q(ve),Pn(6)]),p3(t(wc,jb,e.aN)))]))},Gb=function(e){return t(wr,$([Q(ve),pe(ve),Mn(yc),Yn(12),s3,Pv]),t(q,Nb,e))},Wb=m3(Gb),Hb=function(e){return t(wr,$([Q(ve),pe(ve)]),$([t(zn,$([Pn(14),Q(ve)]),D),t(bc,u3,Wb(Gn(e).gb))]))},Ub=function(e){return{$:6,a:e}},Ob=O(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Jb=function(e){var r=e.cI,n=e.hx,a=e.b3,i=e.g4;if(ue(r,n)&&ue(r,a)&&ue(r,i)){var o=r;return t(ge,xt,V(yt,"p-"+k(r),o,o,o,o))}else return t(ge,xt,V(yt,P(Ob,r,n,a,i),r,n,a,i))},qb=function(e){return{$:0,a:e}},Yb=function(e){return{$:1,a:e}},Zb=Yb,Kb=function(e){var r=e.b.X;return jn(r)},zi=b(Vr,255,60,0),Xb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return jn(r)+1+jn(n)},Qb=function(e){var r=z(Kb(e),Xb(e)-1),n=r.a,a=r.b;return t(he,$([Q(ve),ln]),t(Qv,$([Ic(t(zn,$([Q(ve),pe(Se(4)),ln,cn(Jv),Xn(2)]),$([t(he,$([Q(ka(n)),pe(ve),cn(zi),Xn(2)]),Ne),t(he,$([Q(ka(a-n))]),Ne)])))]),{em:Zb(""),cr:a,cs:0,bJ:t(Oe,Pe,qb),cF:N(1),ic:ef($([Q(Se(12)),pe(Se(12)),Xn(6),cn(zi)])),cJ:n}))},e1=xi(2),Mi=b(Vr,220,220,220),r1=function(e){var r=e.a,n=function(){return r.$?$([Mn(Mi)]):$([Mn(zi)])}();return t(he,G(n,$([Yn(14),e1,Ov,Ec($([Bc]))])),kn(t(s$,3,Gn(e).bt)))},n1=function(e){e.a;var r=e.b.X;return t(Fe,function(n){return Pe(60/(Gn(e).bt-n))},t(Fe,t(Oe,Yu,function(n){return n.bt}),Vc(t(i$,59,r))))},a1=function(e){var r=n1(e);if(r.$===1)return Ne;var n=r.a;return t(he,$([Yn(14),Mn(yc),Ec($([Bc]))]),kn(k(n)+" FPS"))},nf={$:1},t1={$:3},i1={$:2},o1={$:8},c1=Xr,l1=v(function(e,r){return t(Mo,e,c1(r))}),u1=l1("disabled"),$1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},v1=function(e){return t(ct,$1,e)?Wn:sr("focusable")},Ti=t(vt,Le,Av),af=v(function(e,r){var n=r.eW,a=r.em;return P(lr,dr,Hn,t(M,Q(ur),t(M,pe(ur),t(M,sr(p.cb+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),t(M,Kn,t(M,v1(e),t(M,wi(o1),t(M,Le(Ev(0)),function(){if(n.$===1)return t(M,Le(u1(!0)),e);var i=n.a;return t(M,Ti(i),t(M,Fv(function(o){return ue(o,kv)||ue(o,Iv)?N(i):R}),e))}()))))))),Ze($([a])))}),tf=v(function(e,r){return t(af,D,{em:t(he,$([Q(Se(36)),qn(3),Mn(r),Rv,Yn(12),xc,Ln(r),Li(1),Xn(4)]),kn("REC")),eW:N(e)})}),of=T(function(e,r,n){return t(af,D,{em:bn(b(za,20,n,e)),eW:N(r)})}),f1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(zn,D,$([t(he,$([Q(Se(40))]),function(){switch(r.$){case 0:return t(tf,nf,zi);case 1:return t(tf,i1,Mi);default:return Ne}}()),t(he,$([Q(Se(28))]),function(){switch(r.$){case 0:return Ne;case 1:return wn(n)?Ne:b(of,Jn.hp,t1,Mi);default:return b(of,Jn.ho,nf,Mi)}}())]))},m1=function(e){return t(wr,$([Q(ve)]),$([Qb(e),t(zn,$([Q(ve),Pn(14),t(zv,0,6),ln]),$([f1(e),a1(e),r1(e)]))]))},s1=function(e){return t(wr,$([Q(ve),Pn(14),Jb({b3:20,g4:0,hx:0,cI:0}),wt({b3:1,g4:0,hx:0,cI:0}),Ln(yi)]),$([t(he,$([Yn(16),xc,Mn(yc)]),kn("Time Travel")),t(bc,Ub,m1(e))]))},d1=v(function(e,r){return t(wr,$([Gn(r).dD.im>600?cn(c3):cn(l3),wt({b3:0,g4:0,hx:1,cI:0}),Ln(yi),Q(Se(Ma.c4)),pe(ve)]),$([function(){return e?Ne:t(wr,$([Q(ve),pe(ve),qn(14),Pn(14)]),$([s1(r),Hb(r)]))}()]))}),p1=function(e){return{$:3,a:e}},cf=bi(2),g1=b(Vr,232,78,50),h1=b(Vr,48,48,48),b1=function(e){return t(yr,"href",Hd(e))},_1=Mr("rel"),y1=yr("target"),lf=v(function(e,r){var n=r.fn,a=r.em;return P(lr,dr,Sn("a"),t(M,Le(b1(n)),t(M,Le(_1("noopener noreferrer")),t(M,Le(y1("_blank")),t(M,Q(ur),t(M,pe(ur),t(M,sr(p.cb+(" "+(p.ax+(" "+p.et)))),e)))))),Ze($([a])))}),St=yr("title"),x1=b(Vr,31,161,242),w1=function(e){var r=T(function(o,c,l){var u=ue(c,e)?Rc:h1;return t(he,$([an(St(o)),Ti(p1(c)),Kn,qn(7)]),bn(b(za,40,u,l)))}),n=t(wr,$([gv]),$([b(r,"Configurations",0,Jn.hN)])),a=t(wr,D,$([t(lf,$([an(St("Twitter")),cf,Kn,qn(7)]),{em:bn(b(za,40,x1,Jn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(lf,$([an(St("Source Code")),cf,Kn,qn(7)]),{em:bn(b(za,40,g1,Jn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(Se(Ma.bF)),qn(4),Ti(pv),wt({b3:1,g4:0,hx:0,cI:0}),Ln(yi),Kn,an(St("Activate Distraction Free Mode"))]),bn(b(za,46,Rc,Jn.fx)));return t(wr,$([Q(Se(Ma.bF)),pe(ve),Pv,cn(hv)]),$([i,n,a]))},S1=function(e){var r=t(he,$([Q(Se(Ma.bF)),gv,qn(4),Ti(pv),Kn,an(St("Deactivate Distraction Free Mode (A)"))]),bn(b(za,46,hv,Jn.fx)));return e.bx?r:t(zn,$([Q(Se(Ma.bF+Ma.c4)),pe(ve)]),$([w1(e.bp),t(d1,e.bp,e.R)]))},C1=T(function(e,r,n){var a=kg(n.R),i=Gn(n.R);return b(Oh,{hl:$([Vg({fO:R,fW:R,hH:R})])},$([Q(Se(rt(i.dD.im))),pe(Se(rt(i.dD.gH))),an(t(gr,"-webkit-font-smoothing","antialiased")),an(t(gr,"pointer-events","none")),an(t(gr,"touch-action","none")),an(t(gr,"user-select","none")),nc(t(bc,Mg,t(r,i,a))),nc(S1(n))]),bn(t(Jh,$i(Tg),t(e,i,a))))}),L1=nr(function(e,r,n,a,i,o){var c=v(function(u,m){return z(P(wg,r,o,u,m),h$)}),l=function(u){var m=t(Ku,n,u.gY);return z({bp:0,bx:!0,R:t(Sg,m,a),dO:0},h$)};return W0({gS:l,hX:zg,ii:c,ik:t(C1,e,i)})}),P1=O(function(e,r,n,a){return Re(L1,e,r,n,a,v(function(i,o){return Ne}),T(function(i,o,c){return c}))}),z1=function(e){return{}},M1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),T1=function(e){return b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(pa,a,i,n)}),ic,e)},k1=T(function(e,r,n){return b(M1,e,r,T1(n))}),D1=k1,uf=T(function(e,r,n){var a=r.a,i=r.b;return z(e,t(c$,z(a,i),n))}),V1=$([b(D1,"Parameters",!0,$([b(uf,"s",z(1,2),1.5),b(uf,"t",z(1,2),1.5)]))]),A1=v(function(e,r){return r}),F1=P(Zn,114/255,159/255,207/255,1),Da=function(e){return e},Ct=function(e){return Da(Dn*(e/180))},un=Fs,I1=v(function(e,r){var n=e,a=r,i=a.dV-n.dV,o=a.is-n.is,c=a.io-n.io,l=t(Ye,le(c),t(Ye,le(o),le(i)));if(l){var u=i/l,m=o/l,s=c/l,d=un(s*s+m*m+u*u);return N({io:s/d,is:m/d,dV:u/d})}else return R}),jc=function(e){return e},Nc=v(function(e,r){var n=e,a=r;return{io:a.is*n.dV-a.dV*n.is,is:a.dV*n.io-a.io*n.dV,dV:a.io*n.is-a.is*n.io}}),ki=function(e){var r=e,n=t(Ye,le(r.io),t(Ye,le(r.is),le(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=un(o*o+i*i+a*a);return N({io:o/c,is:i/c,dV:a/c})}else return R},Di=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),E1=v(function(e,r){var n=e,a=r;return a.io*n.io+a.is*n.is+a.dV*n.dV}),$f=v(function(e,r){var n=e,a=r;return ce(a,n)>0}),B1=v(function(e,r){var n=e,a=r;return ce(a,n)<0}),R1=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),j1=v(function(e,r){var n=e,a=r,i=a.io*n.io+a.is*n.is+a.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),N1=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Ar=0,vf={io:0,is:0,dV:0},G1=T(function(e,r,n){return t(Dc,function(a){var i=t(R1,t(j1,a,r),r);return t(Dc,function(o){var c=t(Nc,r,e),l=t(E1,n,c),u=t($f,Ar,l)?c:t(B1,Ar,l)?N1(c):vf;return t(Fe,function(m){return I(a,o,m)},ki(u))},ki(i))},ki(e))}),W1=function(e){var r=e,n=le(r.dV),a=le(r.is),i=le(r.io);if(ce(i,a)<1)if(ce(i,n)<1){var o=un(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=un(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(ce(a,n)<1){var o=un(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=un(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},Gc=function(e){var r=W1(e),n=r,a=n,i=e,o=i,c={io:o.is*a.dV-o.dV*a.is,is:o.dV*a.io-o.io*a.dV,dV:o.io*a.is-o.is*a.io};return z(r,c)},Va=function(e){var r=e;return r},Fr=function(e){return e},H1=v(function(e,r){var n=Gc(e),a=n.a,i=n.b;return Fr({dm:r,dT:a,dU:i,dW:e})}),U1=function(e){var r=t(Di,e.ba,e.d9),n=Va(e.fm),a=t(Nc,r,n),i=b(G1,r,n,a);if(i.$){var m=ki(r);if(m.$){var d=Gc(e.fm),g=d.a,f=d.b;return Fr({dm:e.d9,dT:f,dU:e.fm,dW:g})}else{var s=m.a;return t(H1,s,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return Fr({dm:e.d9,dT:u,dU:l,dW:c})}},Ir={io:0,is:0,dV:0},O1=function(e){return{$:0,a:e}},Ge=function(e){var r=e;return le(r)},Vi=function(e){var r=e;return .5*r},J1=zs,q1=function(e){var r=e;return J1(r)},Y1=function(e){var r=Vi(Ge(e.fq)),n=q1(r);return{dx:O1(n),dN:e.dN}},$n=function(e){return e},Wc=$n({io:0,is:1,dV:0}),Z1=function(e){var r=e.ba,n=e.d9,a=e.fm;return Y1({fq:Ct(40),dN:U1({d9:jc(n),ba:jc(r),fm:t(Ce,Wc,t(I1,Ir,jc(a)))})})},Ai=v(function(e,r){return{$:0,a:e,b:r}}),Hc=v(function(e,r){var n=e,a=r;return ce(a,n)>-1}),Uc=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vn=v(function(e,r){var n=e,a=r;return a-n}),K1=$n({io:-1,is:0,dV:0}),X1=$n({io:0,is:-1,dV:0}),ff=$n({io:0,is:0,dV:-1}),mf=$n({io:1,is:0,dV:0}),Oc=$n({io:0,is:0,dV:1}),Je=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),Q1=nr(function(e,r,n,a,i,o){var c=t(Hc,n,o)?Oc:ff,l=t(Hc,r,i)?Wc:X1,u=t(Hc,e,a)?mf:K1,m=I(Ge(t(vn,e,a)),Ge(t(vn,r,i)),Ge(t(vn,n,o))),s=b(Je,t(Uc,e,a),t(Uc,r,i),t(Uc,n,o)),d=Fr({dm:s,dT:u,dU:l,dW:c});return{fN:d,a4:m}}),ea=function(e){var r=e;return r.io},ra=function(e){var r=e;return r.is},na=function(e){var r=e;return r.dV},e_=v(function(e,r){return Re(Q1,ea(e),ra(e),na(e),ea(r),ra(r),na(r))}),Jc=T(function(e,r,n){return{io:e,is:r,dV:n}}),sf=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=I(n/2,a/2,i/2),c=o.a,l=o.b,u=o.c;return t(Ai,e,t(e_,b(Jc,-c,-l,-u),b(Jc,c,l,u)))}),r_=P(Zn,52/255,101/255,164/255,1),df=P(Zn,211/255,215/255,207/255,1),Fi=function(e){return{$:5,a:e}},Ii=function(e){return Fi(e)},qc=function(e){return{$:0,a:e}},pf=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),gf=T(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),Yc=function(e){return b(gf,0,1,e<=.04045?e/12.92:t(Qn,(e+.055)/1.055,2.4))},Lt=gp,n_=function(e){var r=Lc(e),n=r.hu,a=r.gA,i=r.fS;return b(Lt,Yc(n),Yc(a),Yc(i))},Ei=function(e){return b(pf,0,qc(n_(e)),qc(0))},Zc=v(function(e,r){return{$:2,a:e,b:r}}),Kc=v(function(e,r){return{$:4,a:e,b:r}}),Xc=v(function(e,r){return{$:3,a:e,b:r}}),Qc=v(function(e,r){return{$:1,a:e,b:r}}),a_=T(function(e,r,n){return{io:e,is:r,dV:n}}),t_=function(e){var r=e;return r},Bi=function(e){var r=e;return t_(r.fN)},Ri=function(e){var r=e;return r.a4},aa=function(e){var r=e;return r.dm},Pt=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dV:a.dV+n.dV}}),Vn=function(e){var r=e;return r.dT},An=function(e){var r=e;return r.dU},Fn=function(e){var r=e;return r.dW},i_=v(function(e,r){return Fr({dm:t(Pt,e,aa(r)),dT:Vn(r),dU:An(r),dW:Fn(r)})}),o_=v(function(e,r){return{fN:t(i_,e,Bi(r)),a4:Ri(r)}}),zt=v(function(e,r){return{gm:r,dm:e}}),c_=v(function(e,r){var n=r;return t(zt,t(Pt,e,n.dm),n.gm)}),l_=v(function(e,r){var n=r;return{m:t(c_,e,n.m),g5:n.g5,hs:n.hs}}),el=function(e){var r=e;return r},u_=function(e){return e},rl=v(function(e,r){var n=el(r),a=n.a,i=n.b;return u_(z(e(a),e(i)))}),$_=v(function(e,r){return t(rl,Pt(e),r)}),ji=function(e){var r=e;return r.f4},Ni=function(e){var r=e;return r.hs},nl=v(function(e,r){return{f4:r,hs:Ge(e)}}),v_=v(function(e,r){return t(nl,Ni(r),t(Pt,e,ji(r)))}),al=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return I(e(a),e(i),e(o))}),f_=v(function(e,r){return t(al,Pt(e),r)}),tl=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(a_,n,a,i);switch(r.$){case 0:var c=r.a,l=r.b;return t(Ai,c,t(o_,o,l));case 1:var c=r.a,u=r.b;return t(Qc,c,t(f_,o,u));case 3:var c=r.a,m=r.b;return t(Xc,c,t(v_,o,m));case 2:var c=r.a,s=r.b;return t(Zc,c,t(l_,o,s));case 4:var c=r.a,d=r.b;return t(Kc,c,t($_,o,d));default:var g=r.a;return Fi(t(q,tl(I(n,a,i)),g))}}),ta=function(e){return tl(I(0,e,0))},ia=Ls,Aa=Ps,Gi=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=ia(c),u=Aa(c),m=a.gm,s=m,d=s.io*u,g=l*d,f=d*d,_=s.is*u,y=l*_,w=d*_,S=_*_,x=1-2*(f+S),C=s.dV*u,F=l*C,J=2*(w-F),K=2*(w+F),H=d*C,Y=2*(H+y),Z=2*(H-y),B=_*C,ne=2*(B-g),fe=2*(B+g),ye=C*C,me=1-2*(S+ye),se=1-2*(f+ye);return{io:me*o.io+J*o.is+Y*o.dV,is:K*o.io+se*o.is+ne*o.dV,dV:Z*o.io+fe*o.is+x*o.dV}}),Mt=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=ia(c),u=Aa(c),m=a.dm,s=m,d=o.io-s.io,g=o.is-s.is,f=o.dV-s.dV,_=a.gm,y=_,w=y.io*u,S=l*w,x=w*w,C=y.is*u,F=l*C,J=w*C,K=C*C,H=1-2*(x+K),Y=y.dV*u,Z=l*Y,B=2*(J-Z),ne=2*(J+Z),fe=w*Y,ye=2*(fe+F),me=2*(fe-F),se=C*Y,we=2*(se-S),de=2*(se+S),Ve=Y*Y,Te=1-2*(K+Ve),Ke=1-2*(x+Ve);return{io:s.io+Te*d+B*g+ye*f,is:s.is+ne*d+Ke*g+we*f,dV:s.dV+me*d+de*g+H*f}}),m_=T(function(e,r,n){return Fr({dm:b(Mt,e,r,aa(n)),dT:b(Gi,e,r,Vn(n)),dU:b(Gi,e,r,An(n)),dW:b(Gi,e,r,Fn(n))})}),s_=T(function(e,r,n){return{fN:b(m_,e,r,Bi(n)),a4:Ri(n)}}),d_=v(function(e,r){var n=t(Mt,e,r),a=t(Gi,e,r);return function(i){var o=i;return t(zt,n(o.dm),a(o.gm))}}),p_=T(function(e,r,n){var a=n;return{m:b(d_,e,r,a.m),g5:a.g5,hs:a.hs}}),g_=T(function(e,r,n){return t(rl,t(Mt,e,r),n)}),h_=T(function(e,r,n){return t(nl,Ni(n),b(Mt,e,r,ji(n)))}),b_=T(function(e,r,n){return t(al,t(Mt,e,r),n)}),il=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(Ai,a,b(s_,e,r,i));case 1:var a=n.a,o=n.b;return t(Qc,a,b(b_,e,r,o));case 3:var a=n.a,c=n.b;return t(Xc,a,b(h_,e,r,c));case 2:var a=n.a,l=n.b;return t(Zc,a,b(p_,e,r,l));case 4:var a=n.a,u=n.b;return t(Kc,a,b(g_,e,r,u));default:var m=n.a;return Fi(t(q,t(il,e,r),m))}}),ol=Wc,__=t(zt,Ir,ol),Wi=v(function(e,r){return b(il,__,Da(e),r)}),xe=v(function(e,r){var n=r;return e*n}),fn=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Tt=T(function(e,r,n){var a=e,i=n;return{io:a.io+r*(i.io-a.io),is:a.is+r*(i.is-a.is),dV:a.dV+r*(i.dV-a.dV)}}),y_=T(function(e,r,n){var a=Bi(n),i=Vn(a),o=An(a),c=Fn(a),l=b(Tt,e,r,aa(a)),u=r>=0?Fr({dm:l,dT:i,dU:o,dW:c}):Fr({dm:l,dT:fn(i),dU:fn(o),dW:fn(c)}),m=Ri(n),s=m.a,d=m.b,g=m.c,f=Ge(t(xe,r,s)),_=Ge(t(xe,r,d)),y=Ge(t(xe,r,g));return{fN:u,a4:I(f,_,y)}}),cl=function(e){var r=e;return r.m},hf=function(e){var r=e;return r.gm},bf=function(e){return hf(cl(e))},_f=function(e){var r=e;return r.dm},x_=function(e){return _f(cl(e))},yf=function(e){var r=e;return r.g5},xf=function(e){var r=e;return r.hs},w_=T(function(e,r,n){var a=Ge(t(xe,r,xf(n))),i=Ge(t(xe,r,yf(n))),o=r>=0?bf(n):fn(bf(n)),c=b(Tt,e,r,x_(n));return{m:t(zt,c,o),g5:i,hs:a}}),S_=T(function(e,r,n){return t(rl,t(Tt,e,r),n)}),C_=T(function(e,r,n){return t(nl,t(xe,le(r),Ni(n)),b(Tt,e,r,ji(n)))}),L_=T(function(e,r,n){return t(al,t(Tt,e,r),n)}),oa=v(function(e,r){switch(r.$){case 0:var n=r.a,a=r.b;return t(Ai,n,b(y_,Ir,e,a));case 1:var n=r.a,i=r.b;return t(Qc,n,b(L_,Ir,e,i));case 3:var n=r.a,o=r.b;return t(Xc,n,b(C_,Ir,e,o));case 2:var n=r.a,c=r.b;return t(Zc,n,b(w_,Ir,e,c));case 4:var n=r.a,l=r.b;return t(Kc,n,b(S_,Ir,e,l));default:var u=r.a;return Fi(t(q,oa(e),u))}}),P_=function(){var e=function(n){return t(ta,-1,t(sf,n,I(10,1,10)))},r=function(n){return Ii($([e(n),t(Wi,Ci(45),e(n))]))};return Ii($([r(Ei(df)),t(ta,-.1,t(oa,1.1,r(Ei(r_)))),t(ta,-.2,t(oa,1.2,r(Ei(df))))]))}(),z_=v(function(e,r){return t(Fe,function(n){if(n.$)return 0;var a=n.b;return a},t(oi,e,r.aN))}),M_=v(function(e,r){return t(Ce,0,Vc(t(_n,z_(e),r)))}),T_=v(function(e,r){return t(M_,e,r.gb)}),wf=T_,Sf=Ms,k_=O(function(e,r,n,a){var i=I(e,r,n),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,m=l*2-u,s=function(_){var y=_<0?_+1:_>1?_-1:_;return y*6<1?m+(u-m)*y*6:y*2<1?u:y*3<2?m+(u-m)*(2/3-y)*6:m},d=s(o-1/3),g=s(o),f=s(o+1/3);return P(Zn,f,g,d,a)}),D_=T(function(e,r,n){return P(k_,e,r,n,1)}),Hi=function(e){return tl(I(e,0,0))},ll=Oc,V_=t(zt,Ir,ll),Cf=v(function(e,r){return b(il,V_,Da(e),r)}),Lf=v(function(e,r){return(r-qu(r/e)*e)/e}),A_=function(e){return 2*Dn*e},ul=O(function(e,r,n,a){return e+(r-e)*(1+ia(A_(t(Lf,n,a))))/2}),$l=nr(function(e,r,n,a,i,o){var c=function(f){return b(D_,P(ul,f/6,1,10,e.bt),.6,.6)},l=v(function(f,_){return un(t(Qn,f,2)+t(Qn,_,2))}),u=t(sf,Ei(c(o)),I(r,n,n)),m=z(t(l,a,i),t(l,r-a,i)),s=m.a,d=m.b,g=o?$([t(ta,n/2,t(Hi,-(r/2),t(oa,s/r,t(Cf,t(Sf,i,a),t(ta,n/2,t(Hi,r/2,t(Wi,P(ul,-2,2,8,e.bt),t(oa,.86,Re($l,e,r,n,a,i,o-1))))))))),t(ta,n/2,t(Hi,r/2,t(oa,d/r,t(Cf,-t(Sf,i,r-a),t(ta,n/2,t(Hi,-(r/2),t(Wi,P(ul,2,-2,8,Dn+e.bt),t(oa,.86,Re($l,e,r,n,a,i,o-1)))))))))]):D;return Ii(t(M,u,g))}),F_=v(function(e,r){return 360*t(Lf,e,r)}),I_=v(function(e,r){return $([t(Wi,t(F_,1e3,e.bt),Ii($([P_,Re($l,e,2,2,t(wf,"s",e),t(wf,"t",e),5)])))])}),E_=function(e){return e},ca=function(e){return e},B_=function(e){return ca(.01*e)},Pf=function(e){return e},R_=function(e){return e},j_=function(e){return{$:0,a:e}},N_=j_,G_={$:3},W_=G_,H_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),U_=H_,O_=function(e){return{$:1,a:e}},J_=O_,q_=function(e){return t(Mr,"height",k(e))},Y_=q$,Z_=function(e){return{$:2,a:e}},K_=Z_,X_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return Pe(l*1e3)/1e3},c=function(l){return Pe(l*1e4)/100};return ya($(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(o(i)),")"]))},Q_=v(function(e,r){switch(r.$){case 0:return t(i0,e,r);case 1:return t(o0,e,r);case 2:return t(c0,e,r);case 3:return t(l0,e,r);case 4:return t(u0,e,r);default:return t($0,e,r)}}),e2=v(function(e,r){switch(r.$){case 0:return t(Fp,e,r);case 1:return t(Ip,e,r);case 2:return t(Ep,e,r);case 3:return t(Bp,e,r);case 4:return t(Rp,e,r);case 5:return t(jp,e,r);case 6:return t(Np,e,r);case 7:return t(Gp,e,r);default:return Wp(e)}}),r2=T(function(e,r,n){return b(t0,e,r,n)}),zf=function(e){var r=e;return r},Fa=wp,vl=P(Fa,1,1,1,1),Jr=T(function(e,r,n){return t(q,function(a){return t(a,r,n)},e)}),n2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),a2=v(function(e,r){var n=e,a=r.io,i=r.is;return b(n2,n*a/i,n,n*(1-a-i)/i)}),t2=function(e){var r=e.a,n=e.b,a=e.c;return b(Lt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},fl=v(function(e,r){return t2(t(a2,e,r))}),Mf=v(function(e,r){return{ek:ue(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cD,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cD,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cD,cD:e.cD*r.cD}}),qr=Mp,i2=function(e){return qr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},ml=Be(function(e,r,n,a,i){var o=a.ek?1:-1,c=P(Fa,a.cD,a.cD,a.cD,o);return Re(i,e,c,i2(a),a.ek,r,n)}),Tf=nr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,m=r,s=n,d=t(Mf,c,a),g=l,f=o;e=u,r=m,n=s,a=d,i=g,o=f;continue e;case 1:var _=i.b,y=t(M,V(ml,e,r,n,a,_),o.P);return{P:y,_:o._,hI:o.hI};case 3:var w=i.b,S=t(M,V(ml,e,r,n,a,w),o._);return{P:o.P,_:S,hI:o.hI};case 2:var x=i.a,C=t(M,V(ml,e,r,n,a,x),o.hI);return{P:o.P,_:o._,hI:C};default:var F=i.a;return b(Ae,P(Tf,e,r,n,a),o,F)}}),o2=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),kf=o2,sl=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),c2=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(sl,518,r,n,a)},l2=v(function(e,r){return{$:6,a:e,b:r}}),u2=l2,Df=$([c2({ab:1,ac:0,ai:!1}),P(kf,!1,!1,!1,!1),t(u2,0,1)]),Ia=519,dl=8,Vf=15,Ea=7681,$2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Me=Ap,v2=v(function(e,r){return{$:0,a:e,b:r}}),f2=v2({d5:1,ei:0,eS:5}),hr=dp,m2=f2($([{cy:t(hr,-1,-1)},{cy:t(hr,1,-1)},{cy:t(hr,-1,1)},{cy:t(hr,1,1)}])),s2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cy"},uniforms:{}},d2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m,k:s}}}}}}}}}}}},pl=T(function(e,r,n){var a=e.dy,i=e.dd,o=e.dS,c=v(function(m,s){var d=m;return s(d)}),l=v(function(m,s){var d=m;return s(d)}),u=function(m){return t(Oe,c(m.bP),t(Oe,l(m.bA),t(Oe,l(m.bY),l(m.bZ))))};return t(u,n,t(u,r,b(d2,a,i,o)))}),gl=function(e){return b(pl,{dd:e.dd,dy:e.dy,dS:e.dS},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},hl=function(e){return V(Me,$([gl(e),P(kf,!1,!1,!1,!1)]),s2,$2,m2,{})},p2=hl({bA:Ea,dd:0,dy:dl,bP:Ia,dS:Vf,bY:Ea,bZ:Ea}),g2=516,Af=5386,er=7680,h2=function(e){return t(Qn,2,e+4)},Ff=function(e){return hl({bA:er,dd:Vf,dy:dl,bP:g2,dS:h2(e),bY:Af,bZ:Af})},b2=T(function(e,r,n){return ir($([b(Jr,e,n,Df),$([Ff(r),p2])]))}),_2=v(function(e,r){return ir(t(Gu,b2(e),r))}),y2=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(sl,513,r,n,a)},x2=y2({ab:1,ac:0,ai:!0}),w2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m}}}}}}}}}}},S2=function(e){var r=e.cA,n=e.cg,a=e.b1,i=e.b_,o=e.b7,c=e.fI,l=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,y=m.c;return w2(s)(d)(g)(f)(_)(y)(r)(n)(a)(i)});return t(l,o,c)},C2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),If=v(function(e,r){var n=e,a=r;return b(C2,32774,n,a)}),L2=1,Ef=771,P2=770,bl=S2({b_:0,fI:t(If,L2,Ef),b1:0,b7:t(If,P2,Ef),cg:0,cA:0}),Ba=$([x2,bl]),z2=function(e){var r=e;return r.eL},M2=function(e){var r=e;return r.eM},Bf=function(e){var r=e;return r.eN},T2=function(e){var r=e;return r.eO},k2=function(e){var r=e;return r.eP},Rf=function(e){var r=e;return r.eQ},jf=function(e){return I(t(vn,T2(e),z2(e)),t(vn,k2(e),M2(e)),t(vn,Rf(e),Bf(e)))},Nf=function(e){var r=e;return aa(r)},D2=function(e){return e},V2=function(e){return Fr({dm:D2({io:e.K,is:e.L,dV:e.M}),dT:$n({io:e.t,is:e.u,dV:e.v}),dU:$n({io:e.w,is:e.x,dV:e.y}),dW:$n({io:e.z,is:e.A,dV:e.B})})},_l=v(function(e,r){var n=e,a=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,m=u;return{io:a.io*m.io+a.is*m.is+a.dV*m.dV,is:a.io*l.io+a.is*l.is+a.dV*l.dV,dV:a.io*o.io+a.is*o.is+a.dV*o.dV}}),Gf=v(function(e,r){var n=e,a=r,i=n.dm,o=i,c=a.io-o.io,l=a.is-o.is,u=a.dV-o.dV,m=n.dW,s=m,d=n.dU,g=d,f=n.dT,_=f;return{io:c*_.io+l*_.is+u*_.dV,is:c*g.io+l*g.is+u*g.dV,dV:c*s.io+l*s.is+u*s.dV}}),Wf=v(function(e,r){return{dm:t(Gf,e,aa(r)),dT:t(_l,e,Vn(r)),dU:t(_l,e,An(r)),dW:t(_l,e,Fn(r))}}),Ui=function(e){var r=e;return r},Ee=v(function(e,r){var n=e,a=r;return t(Ye,n,a)}),We=v(function(e,r){var n=e,a=r;return t(Sa,n,a)}),A2=v(function(e,r){var n=Ui(r),a=Ui(e);return{eL:t(Ee,a.eL,n.eL),eM:t(Ee,a.eM,n.eM),eN:t(Ee,a.eN,n.eN),eO:t(We,a.eO,n.eO),eP:t(We,a.eP,n.eP),eQ:t(We,a.eQ,n.eQ)}}),Sr=function(e){var r=e;return r},F2=function(e){var r=e;return I(r.io,r.is,r.dV)},kt=v(function(e,r){var n=e,a=r;return a+n}),I2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Vi(Ge(a)),c=Vi(Ge(n)),l=Vi(Ge(i)),u=F2(r),m=u.a,s=u.b,d=u.c;return{eL:t(kt,c,m),eM:t(kt,o,s),eN:t(kt,l,d),eO:t(vn,c,m),eP:t(vn,o,s),eQ:t(vn,l,d)}}),Hf=O(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,m=i.is*r,s=i.io*r,d=Sr(Fn(e)),g=le(l*d.io)+le(c*d.is)+le(o*d.dV),f=Sr(An(e)),_=le(l*f.io)+le(c*f.is)+le(o*f.dV),y=Sr(Vn(e)),w=le(l*y.io)+le(c*y.is)+le(o*y.dV),S=t(I2,I(w,_,g),t(Gf,e,b(Jc,s,m,u)));if(a.$)return N(S);var x=a.a;return N(t(A2,x,S))}),yl=O(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 1:var s=i.a,d=P(Hf,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 2:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 3:var s=i.a,d=P(Hf,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 4:var g=i.a,c=e,l=r,u=P(yl,e,r,n,g),m=o;e=c,r=l,n=u,a=m;continue e;default:var f=i.a,_=i.b,y=t(Wf,V2(f),e),w=r*f.cD,c=e,l=r,u=P(yl,y,w,n,$([_])),m=o;e=c,r=l,n=u,a=m;continue e}}else return n}),Ra=hp,ja=bp,Na=_p,Uf=function(e){return{$:4,a:e}},E2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Dt=function(e){return Uf(t(E2,e,D))},B2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cD:1},R2=function(e){var r=e;return r},Of=hl({bA:Ea,dd:0,dy:dl,bP:Ia,dS:255,bY:Ea,bZ:Ea}),j2=function(e){var r=e,n=t(Ye,le(r.io),t(Ye,le(r.is),le(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=un(o*o+i*i+a*a);return c*n}else return Ar},$r={b1:0,f3:!1,cg:0,dv:0,cA:0,dK:0,io:0,is:0,dV:0},Cr=v(function(e,r){var n=e,a=r;return qr({eu:n.io,ev:n.cA,ew:a.io,ex:a.cA,ey:n.is,ez:n.cg,eA:a.is,eB:a.cg,eC:n.dV,eD:n.b1,eE:a.dV,eF:a.b1,eG:n.dK,eH:n.dv,eI:a.dK,eJ:a.dv})}),Vt=z({bG:t(Cr,$r,$r),cn:t(Cr,$r,$r),co:t(Cr,$r,$r),cp:t(Cr,$r,$r)},P(Fa,0,0,0,0)),Jf=function(e){var r=e;return-r},qf=514,Yf=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(sl,515,r,n,a)},Zf=240,N2=$([Yf({ab:1,ac:0,ai:!0}),gl({bA:er,dd:Zf,dy:0,bP:qf,dS:0,bY:er,bZ:er}),bl]),G2=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,c=Ge(a),l=c,u=Ge(i),m=u,s=n.dx;if(s.$){var g=s.a;return Ko(m)?qr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):qr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-l),eF:-(m+l)/(m-l),eG:0,eH:0,eI:0,eJ:1})}else{var d=s.a;return Ko(m)?qr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):qr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-(m+l)/(m-l),eF:-2*m*l/(m-l),eG:0,eH:0,eI:-1,eJ:0})}}),Oi=v(function(e,r){return(1&e>>r)==1?0:1}),W2=function(e){return $([Yf({ab:1,ac:0,ai:!0}),gl({bA:er,dd:Zf,dy:e,bP:qf,dS:0,bY:er,bZ:er}),bl])},H2=T(function(e,r,n){return ir(t(q,function(a){var i=a<<4,o=P(Fa,t(Oi,a,0),t(Oi,a,1),t(Oi,a,2),t(Oi,a,3));return b(Jr,e,z(r,o),W2(i))},t(nn,1,t(Qn,2,n)-1)))}),Ga=function(e){var r=e;return r},U2=Tp,Kf=function(e){var r=e;return fn(Fn(r))},Xf=mf,O2={dm:Ir,dT:Xf,dU:ol,dW:ll},Ji=function(e){var r=e;return r},J2=function(e){var r=Ji(aa(e)),n=Sr(Fn(e)),a=Sr(An(e)),i=Sr(Vn(e));return qr({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dV,eD:a.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},q2=v(function(e,r){var n=r;return J2(t(Wf,n,e))}),Y2=function(e){return t(q2,O2,e)},Z2=function(e){var r=e;return r.dN},K2=function(e){var r=e;return Vn(r)},X2=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),Q2=function(e){var r=e;return An(r)},ey=function(e){var r=Z2(e.f0),n=Fr({dm:Nf(r),dT:K2(r),dU:Q2(r),dW:fn(Kf(r))}),a=Dt(e.a8),i=a,o=P(yl,n,1,R,$([i]));if(o.$===1)return D;var c=o.a,l=Y2(r),u=t(xe,.99,t(Ee,Ge(e.a3),Jf(Bf(c)))),m=jf(c),s=m.a,d=m.b,g=m.c,f=j2(b(X2,s,d,g)),_=t(xe,1.01,t(kt,f,Jf(Rf(c)))),y=t(G2,e.f0,{fM:e.fM,gv:_,hd:u}),w=U2(y).eJ,S=w?Sr(fn(Kf(r))):Ga(Nf(r)),x=function(){var se=e.cH;switch(se.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var we=se.a;return z(3,we);case 4:var we=se.a;return z(4,we);default:return z(5,0)}}(),C=x.a,F=x.b,J=e.ce,K=J,H=t(fl,K,e.cL),Y=H,Z=qr({eu:0,ev:S.io,ew:Ra(Y),ex:e.ff,ey:0,ez:S.is,eA:ja(Y),eB:R2(f),eC:0,eD:S.dV,eE:Na(Y),eF:C,eG:0,eH:w,eI:0,eJ:F}),B=Re(Tf,Z,l,y,B2,i,{P:D,_:D,hI:D}),ne=e.cm;switch(ne.$){case 0:var fe=ne.a;return ir($([b(Jr,B.P,z(fe,vl),Ba),b(Jr,B._,Vt,Ba)]));case 1:var fe=ne.a;return ir($([b(Jr,B.P,Vt,Ba),$([Of]),b(Jr,B.hI,fe.bG,Df),$([Ff(0)]),b(Jr,B.P,z(fe,vl),N2),b(Jr,B._,Vt,Ba)]));default:var ye=ne.a,me=ne.b;return ir($([b(Jr,B.P,z(me,vl),Ba),$([Of]),t(_2,B.hI,ye),b(H2,B.P,me,jn(ye)),b(Jr,B._,Vt,Ba)]))}},ry=function(e){return t(Mr,"width",k(e))},ny=v(function(e,r){var n=$([J_(1),K_(0),N_(!0),P(U_,0,0,0,0)]),a=function(){var C=e.cP;switch(C.$){case 0:return I(n,"0",1);case 1:return I(t(M,W_,n),"1",1);default:var F=C.a;return I(n,"0",F)}}(),i=a.a,o=a.b,c=a.c,l=e.a4,u=l.a,m=l.b,s=zf(m),d=t(gr,"height",k(s)+"px"),g=zf(u),f=g/s,_=t(_a,function(C){return ey({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,ce:C.ce,cm:C.cm,ff:c,cH:C.cH,cL:C.cL})},r),y=t(gr,"width",k(g)+"px"),w=e.a1,S=w,x=X_(S);return b(Y_,"div",$([t(gr,"padding","0px"),y,d]),$([z(o,b(r2,i,$([ry(Pe(g*c)),q_(Pe(s*c)),y,d,t(gr,"display","block"),t(gr,"background-color",x)]),_))]))}),ay=function(e){return t(ny,{cP:e.cP,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,ce:e.ce,cm:e.cm,cH:e.cH,cL:e.cL}]))},Qf=function(e){return e},em=Qf({io:.31271,is:.32902}),ty=v(function(e,r){var n=e,a=Sr(r.gm),i=a.io,o=a.is,c=a.dV,l=t(fl,r.c1,r.cU),u=l;return{b1:Na(u),f3:n,cg:ja(u),dv:0,cA:Ra(u),dK:1,io:-i,is:-o,dV:-c}}),iy=function(e){return e},oy=function(e){return iy(1.2*t(Qn,2,e))},xl=function(e){return e},cy={$:0},ly=cy,rm=function(e){return e},nm=function(e){var r=e;return r},uy=function(e){e:for(;;){if(ue(e.gZ,Ar)&&ue(e.g_,Ar))return $r;if(t($f,Ge(e.gZ),Ge(e.g_))){var r={cU:e.cU,gZ:e.g_,g_:e.gZ,fm:fn(e.fm)};e=r;continue e}else{var n=le(nm(e.g_)/Dn),a=le(nm(e.gZ)/Dn),i=Sr(e.fm),o=i.io,c=i.is,l=i.dV,u=t(fl,rm(1),e.cU),m=u;return{b1:a*Na(m),f3:!1,cg:a*ja(m),dv:n/a,cA:a*Ra(m),dK:3,io:o,is:c,dV:l}}}},am=function(e){return uy({cU:e.cU,gZ:e.c1,g_:Ar,fm:e.fm})},$y=function(e){var r=e;return r},tm=function(e){var r=b(gf,1667,25e3,$y(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Qf({io:n,is:a})},im=function(e){return e},vy=tm(im(12e3)),fy=tm(im(5600)),my=function(e){return{$:2,a:e}},sy=function(e){return my(e)},dy=v(function(e,r){return{$:2,a:e,b:r}}),om=function(e){return{$:0,a:e}},qi=function(e){var r=e;return r},py=function(e){var r=e;return r.f3},gy=om(Vt.a),hy=v(function(e,r){var n=v(function(a,i){var o=i.a,c=i.b;return e(a)?z(t(M,a,o),c):z(o,t(M,a,c))});return b(Ue,n,z(D,D),r)}),by=function(e){var r=e;return qr({eu:r.io,ev:r.cA,ew:0,ex:0,ey:r.is,ez:r.cg,eA:0,eB:0,eC:r.dV,eD:r.b1,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},_y=be(function(e,r,n,a,i,o,c,l){var u=t(hy,py,$([qi(e),qi(r),qi(n),qi(a)])),m=u.a,s=u.b;if(m.b){var d=G(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,y=f.b,w=y.a,S=y.b,x=S.a;return t(dy,t(q,by,m),{bG:t(Cr,g,_),cn:t(Cr,w,x),co:t(Cr,i,o),cp:t(Cr,c,l)})}else return gy}else return om({bG:t(Cr,e,r),cn:t(Cr,n,a),co:t(Cr,i,o),cp:t(Cr,c,l)})}),yy=T(function(e,r,n){return qa(_y,e,r,n,$r,$r,$r,$r,$r)}),xy=function(e){var r=t(ty,R_(e.hI),{cU:fy,gm:e.hZ,c1:xl(8e4)}),n=am({cU:vy,c1:xl(2e4),fm:e.fm}),a=am({cU:em,c1:xl(15e3),fm:fn(e.fm)}),i=b(yy,r,n,a);return ay({cP:sy(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,ce:oy(15),cm:i,cH:ly,cL:em})},cm=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),wy=O(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),lm=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),um=O(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Sy=O(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Cy=O(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),Ly=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),wl=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P(Ly,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(cm,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(wy,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(lm,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(Cy,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(um,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(Sy,r,i,a,1);case 8:return e;case 9:return e;default:return e}},Sl={$:0},Py=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var u=l.a,m=l.b,s=Ui(c(u)),d=t(We,s.eO,e),g=t(Ee,s.eL,r),f=t(We,s.eP,n),_=t(Ee,s.eM,a),y=t(We,s.eQ,i),w=t(Ee,s.eN,o),S=c,x=m;e=d,r=g,n=f,a=_,i=y,o=w,c=S,l=x;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),zy=T(function(e,r,n){var a=Ui(e(r));return qa(Py,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),Cl=v(function(e,r){var n=e,a=r;return ce(a,n)<1}),$m=function(e){return t(Cl,e.eL,e.eO)&&t(Cl,e.eM,e.eP)&&t(Cl,e.eN,e.eQ)?e:{eL:t(Ee,e.eO,e.eL),eM:t(Ee,e.eP,e.eM),eN:t(Ee,e.eQ,e.eN),eO:t(We,e.eO,e.eL),eP:t(We,e.eP,e.eM),eQ:t(We,e.eQ,e.eN)}},At=function(e){var r=e;return r},vm=function(e){var r=At(e),n=r.a,a=r.b,i=r.c,o=ea(n),c=ra(n),l=na(n),u=ea(a),m=ra(a),s=na(a),d=ea(i),g=ra(i),f=na(i);return $m({eL:t(Ee,o,t(Ee,u,d)),eM:t(Ee,c,t(Ee,m,g)),eN:t(Ee,l,t(Ee,s,f)),eO:t(We,o,t(We,u,d)),eP:t(We,c,t(We,m,g)),eQ:t(We,l,t(We,s,f))})},fm=yp,vr=function(e){return fm(Ji(e))},mm=function(e){var r=e;return r},Yi=function(e){return fm(mm(e))},My=v(function(e,r){var n=e,a=r,i=t(Ye,le(a.io),t(Ye,le(a.is),le(a.dV)));if(i){var o=a.dV/i,c=a.is/i,l=a.io/i,u=un(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return vf}),Ty=My(rm(1)),sm=T(function(e,r,n){var a=t(Di,r,n),i=t(Di,e,r);return Ty(t(Nc,a,i))}),ky=function(e){var r=At(e),n=r.a,a=r.b,i=r.c,o=Yi(b(sm,n,a,i));return I({q:o,cy:vr(n)},{q:o,cy:vr(a)},{q:o,cy:vr(i)})},Dy=v(function(e,r){return{$:2,a:e,b:r}}),dm=Dy({d5:3,ei:0,eS:4}),Vy=function(e){if(e.b){var r=e.a,n=e.b,a=dm(t(q,ky,e)),i=b(zy,vm,r,n);return P(cm,i,e,a,0)}else return Sl},Lr=T(function(e,r,n){return I(e,r,n)}),pm=function(){var e=ca(1),r=ca(1),n=ca(1),a=t(xe,-.5,e),i=t(xe,-.5,r),o=t(xe,-.5,n),c=b(Je,o,i,a),l=t(xe,.5,e),u=b(Je,o,i,l),m=t(xe,.5,r),s=b(Je,o,m,a),d=b(Je,o,m,l),g=t(xe,.5,n),f=b(Je,g,i,a),_=b(Je,g,m,a),y=b(Je,g,i,l),w=b(Je,g,m,l);return wl(Vy($([b(Lr,c,_,f),b(Lr,c,s,_),b(Lr,u,y,w),b(Lr,u,w,d),b(Lr,f,_,w),b(Lr,f,w,y),b(Lr,c,d,s),b(Lr,c,u,d),b(Lr,c,f,y),b(Lr,c,y,u),b(Lr,s,w,_),b(Lr,s,d,w)])))}(),Zi={$:0},Ay=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Fy=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(a),m=Yi(b(sm,u,l,c)),s={q:m,cy:vr(u)},d={q:m,cy:vr(l)},g={q:m,cy:vr(c)};return t(M,s,t(M,d,t(M,g,n)))}),Ll=function(e){var r=e;return r.H},Iy=O(function(e,r,n,a){if(r.$===1)return R;var i=r.a;if(n.$===1)return R;var o=n.a;if(a.$===1)return R;var c=a.a;return N(b(e,i,o,c))}),Pl=4294967295>>>32-at,zl=gs,Ey=T(function(e,r,n){e:for(;;){var a=Pl&r>>>e,i=t(zl,a,n);if(i.$){var m=i.a;return t(zl,Pl&r,m)}else{var o=i.a,c=e-at,l=r,u=o;e=c,r=l,n=u;continue e}}}),By=function(e){return e>>>5<<5},Ry=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?R:ce(e,By(n))>-1?N(t(zl,Pl&e,o)):N(b(Ey,a,e,i))}),Ml=function(e){var r=e;return r.au},Tl=v(function(e,r){return t(Ry,e,Ml(r))}),jy=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(Iy,T(function(c,l,u){return I(c,l,u)}),t(Tl,a,e),t(Tl,i,e),t(Tl,o,e))};return t(_n,r,Ll(e))},Ny=T(function(e,r,n){e:for(;;){var a=t(Uo,mr,e),i=a.a,o=a.b;if(ce(Ho(i),mr)<0)return t(Zu,!0,{C:r,n,r:i});var c=o,l=t(M,Ju(i),r),u=n+1;e=c,r=l,n=u;continue e}}),kl=function(e){return e.b?b(Ny,e,D,0):Uu},Gy=v(function(e,r){return!t(ct,t(vt,H0,e),r)}),Wy=function(e){var r=e.a;return r},gm=v(function(e,r){var n=Wy(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ce(o,n)<0&&c>=0&&ce(c,n)<0&&l>=0&&ce(l,n)<0};return t(Gy,a,r)?{H:r,au:e}:{H:t(j$,a,r),au:e}}),Hy=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ft=Hy({d5:1,ei:3,eS:4}),Ki=v(function(e,r){var n=Ga(r),a=Ga(e);return z(I(a.io,a.is,a.dV),I(n.io,n.is,n.dV))}),hm=b(Lt,0,0,0),Dl=nr(function(e,r,n,a,i,o){var c=o.a,l=o.b,u=o.c,m=t(oi,t(Ki,e,r),i);if(m.$){var d={q:hm,cy:vr(r)},g={q:hm,cy:vr(e)},f=u+1,_=u;return I(t(M,I(n,_,f),t(M,I(n,f,a),c)),t(M,d,t(M,g,l)),u+2)}else{var s=m.a;return I(t(M,I(n,s,a),c),l,u)}}),Uy=Be(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,m=n.b,s=e(u),d=e(l),g=e(c),f=a+2,_=a+1,y=a,w=e,S=r,x=m,C=a+3,F=Re(Dl,s,g,f,y,r,Re(Dl,d,s,_,f,r,Re(Dl,g,d,y,_,r,i)));e=w,r=S,n=x,a=C,i=F;continue e}else{var J=i,K=J.a,H=J.b;return z(K,ar(H))}}),Oy=Be(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,m=r.b,s=e(u),d=e(l),g=e(c),f=n+2,_=n+1,y=n,w=b(pa,t(Ki,g,s),f,b(pa,t(Ki,s,d),_,b(pa,t(Ki,d,g),y,i))),S=t(M,I(y,_,f),a),x=e,C=m,F=n+3,J=S,K=w;e=x,r=C,n=F,a=J,i=K;continue e}else return I(a,i,n)}),la=T(function(e,r,n){var a=jy(n),i=b(Ue,Fy(r),D,a),o=V(Oy,r,a,0,D,ic),c=o.a,l=o.b,u=o.c,m=V(Uy,r,l,a,0,I(c,D,u)),s=m.a,d=m.b,g=wn(d)?i:G(i,d);return b(Ay,e,t(gm,kl(g),s),t(Ft,g,s))}),Vl=function(e){return{H:t(q,function(r){return I(3*r,3*r+1,3*r+2)},t(nn,0,jn(e)-1)),au:kl(ir(t(q,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},bm=function(e){switch(e.$){case 0:return Zi;case 1:var r=e.a,n=e.b,a=t(q,At,n);return b(la,r,Dr,Vl(a));case 2:var r=e.a,n=e.b,a=t(q,At,n);return b(la,r,Dr,Vl(a));case 3:var r=e.a,i=e.b;return b(la,r,Dr,i);case 4:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 5:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 6:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 7:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 8:return Zi;case 9:return Zi;default:return Zi}},_m=bm(pm),ym={$:0},E=ym,qe=v(function(e,r){return{$:1,a:e,b:r}}),Jy={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},qy=1029,Yy=function(e){return{$:5,a:e}},xm=function(e){var r=e;return Yy(r)},Zy=xm(qy),Ky=1028,Xy=xm(Ky),fr=T(function(e,r,n){return r===1?e?t(M,Zy,n):t(M,Xy,n):n}),wm={src:`
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
    `,attributes:{position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Al=O(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,s,d){return V(Me,b(fr,l,a,d),wm,Jy,n,{b8:e,c,d:o,e:m,f:i,g:u})}))}),Fl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},Sm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},mn=O(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,s,d){return V(Me,b(fr,l,a,d),Sm,Fl,n,{aO:e,c,d:o,e:m,f:i,g:u})}))}),Cm=v(function(e,r){return{$:3,a:e,b:r}}),Qy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cx",sceneProperties:"f"}},Lm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cx",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ex=O(function(e,r,n,a){return t(Cm,n,be(function(i,o,c,l,u,m,s,d){return V(Me,d,Lm,Qy,a,{aO:e,c,d:o,cx:r,e:m,f:i,g:u})}))}),Il={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},It=function(e){var r=e;return r},Xi=xp,sn=Be(function(e,r,n,a,i){return t(qe,n,be(function(o,c,l,u,m,s,d,g){return V(Me,b(fr,u,i,g),Sm,Il,a,{a6:t(Xi,It(r),e),c:l,d:c,e:s,f:o,g:m})}))}),rx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cx",sceneProperties:"f"}},nx=Be(function(e,r,n,a,i){return t(Cm,a,be(function(o,c,l,u,m,s,d,g){return V(Me,g,Lm,rx,i,{a6:t(Xi,It(r),e),c:l,d:c,cx:n,e:s,f:o,g:m})}))}),Pm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},zm={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Qi=O(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return V(Me,b(fr,l,a,d),zm,Pm,n,{U:f,bG:g.bG,cn:g.cn,co:g.co,cp:g.cp,de:e,c,d:o,e:m,f:i,g:u})}))}),Mm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Tm={src:`
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
    `,attributes:{normal:"q",position:"cy",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ax=nr(function(e,r,n,a,i,o){return t(qe,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,y=g.b;return V(Me,b(fr,m,o,f),Tm,Mm,i,{U:y,bG:_.bG,cn:_.cn,co:_.co,cp:_.cp,df:e,c:u,d:l,bg:r,e:d,f:c,bm:n,g:s})}))}),km={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cT",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},tx=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return t(qe,u,be(function(d,g,f,_,y,w,S,x){var C=S.a,F=S.b;return V(Me,b(fr,_,s,x),Tm,km,m,{cT:e,cV:r,cW:o,cX:a,U:F,bG:C.bG,cn:C.cn,co:C.co,cp:C.cp,di:i,c:f,d:g,bg:c,e:w,dC:n,f:d,bm:l,g:y})}))}}}}}}}}}}},Dm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cS",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},eo=nr(function(e,r,n,a,i,o){return t(qe,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,y=g.b;return V(Me,b(fr,m,o,f),zm,Dm,i,{cS:e,U:y,bG:_.bG,cn:_.cn,co:_.co,cp:_.cp,dh:n,c:u,d:l,e:d,dB:r,f:c,g:s})}))}),ix=function(e){return{$:0,a:e}},Vm=v(function(e,r){return{$:1,a:e,b:r}}),Et=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),ox=function(e){return P(Fa,Ra(e),ja(e),Na(e),1)},El=P(Fa,0,0,0,0),ro=v(function(e,r){if(r.$){var a=r.a.E;return z(a,El)}else{var n=r.a;return z(e,ox(n))}}),Am=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return t(Vm,z(i,El),t(Et,i,r))}else if(n.b.$){var i=n.b.a.E;return t(Vm,t(ro,i,e),t(Et,i,r))}else{var a=n.a.a;return n.b.a,ix(a)}}),cx=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),no=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),lx=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ux=function(e){return t(hr,e,1)},Bl=t(hr,0,0),Wa=v(function(e,r){if(r.$){var a=r.a.E;return z(a,Bl)}else{var n=r.a;return z(e,ux(n))}}),Fm=O(function(e,r,n,a){var i=P(lx,e,r,n,a);if(i.a.$){var u=i.a.a.E;return P(no,z(u,El),t(Wa,u,r),t(Wa,u,n),t(Et,u,a))}else if(i.b.$){var u=i.b.a.E;return P(no,t(ro,u,e),z(u,Bl),t(Wa,u,n),t(Et,u,a))}else if(i.c.$){var u=i.c.a.E;return P(no,t(ro,u,e),t(Wa,u,r),z(u,Bl),t(Et,u,a))}else if(i.d.$){var u=i.d.a.E;return P(no,t(ro,u,e),t(Wa,u,r),t(Wa,u,n),z(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(cx,o,c,l)}}),$x={src:`
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
    `,attributes:{},uniforms:{backlight:"cQ",colorTexture:"b8",sceneProperties:"f"}},Rl=Be(function(e,r,n,a,i){return t(qe,n,be(function(o,c,l,u,m,s,d,g){return V(Me,b(fr,u,i,g),wm,$x,a,{cQ:It(r),b8:e,c:l,d:c,e:s,f:o,g:m})}))}),Im={src:`
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
    `,attributes:{normal:"q",position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vx=O(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return V(Me,b(fr,l,a,d),Im,Mm,n,{U:f,bG:g.bG,cn:g.cn,co:g.co,cp:g.cp,df:e,c,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),fx=go(function(e,r,n,a,i,o,c,l,u){return t(qe,c,be(function(m,s,d,g,f,_,y,w){var S=y.a,x=y.b;return V(Me,b(fr,g,u,w),Im,km,l,{cT:e,cV:r,cW:o,cX:a,U:x,bG:S.bG,cn:S.cn,co:S.co,cp:S.cp,di:i,c:d,d:s,bg:e,e:_,dC:n,f:m,bm:0,g:f})}))}),Bt=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),mx=function(e){var r=e;return b(Bt,r.eO,r.eL,.5)},sx=function(e){var r=e;return b(Bt,r.eP,r.eM,.5)},dx=function(e){var r=e;return b(Bt,r.eQ,r.eN,.5)},px=function(e){return b(Je,mx(e),sx(e),dx(e))},ie=function(e){var r=jf(e),n=r.a,a=r.b,i=r.c;return{f4:Ji(px(e)),gD:n/2,gE:a/2,gF:i/2}},jl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return P(Al,l,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(Al,l,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(Al,l,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(mn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(mn,n,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return P(ex,n,c,ie(a),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return V(Rl,l,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(Rl,l,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(Rl,l,m,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return V(sn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return V(sn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return V(sn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return V(sn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return V(sn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(sn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(sn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return V(sn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return V(sn,u,m,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return V(nx,u,m,c,ie(a),i)}}case 2:e.a;var s=e.b,d=e.c,g=t(Am,s,d);if(g.$){var y=g.a,w=y.a;y.b;var S=g.b,x=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(vx,w,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Re(ax,w,x,C,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}else{var f=g.a;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,_=r.d;return P(Qi,f,ie(a),i,_);case 3:return E;case 4:var a=r.a,i=r.c,_=r.d;return P(Qi,f,ie(a),i,_);case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(Qi,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(Qi,f,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var F=e.b,J=e.c,K=e.d,d=e.e,H=P(Fm,F,J,K,d);if(H.$){var ne=H.a,fe=ne.a,ye=ne.b,me=H.b,se=me.a,we=me.b,de=H.c,Ve=de.a,Te=de.b,Ke=H.d,x=Ke.a,C=Ke.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return fs(fx,fe,ye,se,we,Ve,Te,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return tx(fe)(ye)(se)(we)(Ve)(Te)(x)(C)(ie(a))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=H.a,Z=H.b,B=H.c;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,o=r.d;return Re(eo,Y,Z,B,ie(a),i,o);case 3:return E;case 4:var a=r.a,i=r.c,o=r.d;return Re(eo,Y,Z,B,ie(a),i,o);case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Re(eo,Y,Z,B,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Re(eo,Y,Z,B,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}}}),Nl=function(e){var r=e;return r.io},Gl=function(e){var r=e;return r.is},Wl=function(e){var r=e;return r.dV},gx=function(e){var r=e,n=Wl(r.dW),a=Gl(r.dW),i=Nl(r.dW),o=Wl(r.dU),c=Gl(r.dU),l=Nl(r.dU),u=Wl(r.dT),m=Gl(r.dT),s=Nl(r.dT);return s*c*n+m*o*i+u*l*a-u*c*i-m*l*n-s*o*a>0},hx=function(e){var r=Ji(aa(e)),n=Sr(Fn(e)),a=Sr(An(e)),i=Sr(Vn(e));return{ek:gx(e),t:i.io,u:i.is,v:i.dV,w:a.io,x:a.is,y:a.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cD:1}},Ha=v(function(e,r){return{$:5,a:e,b:r}}),Em=v(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var a=n.a,i=n.b,o=t(Mf,a,e);return t(Ha,o,i);case 1:return t(Ha,e,n);case 3:return t(Ha,e,n);case 2:return t(Ha,e,n);default:return t(Ha,e,n)}}),Bm=v(function(e,r){return t(Em,hx(e),r)}),ao=function(e){return{$:2,a:e}},bx=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dV:i*o.dV},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),_x=Cp,yx=Sp,Rm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=yx(a),_=f.io,y=f.is,w=f.dV,S=f.ft,x=_x({ft:S,io:_*s,is:y*d,dV:w*g});return qa(r,n,x,i,o,c,l,u,m)}}}}}}}}}},Hl=v(function(e,r){switch(r.$){case 0:return ym;case 5:var n=r.a,a=r.b;return t(Ha,n,t(Hl,e,a));case 1:var i=r.a,o=r.b;return t(qe,t(bx,e,i),t(Rm,e,o));case 3:return r;case 2:var o=r.a;return ao(t(Rm,e,o));default:var c=r.a;return Uf(t(q,Hl(e),c))}}),Ul=v(function(e,r){var n=r;return t(Hl,e,n)}),Ol={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},jm=7683,Nm=7682,xx=b(pl,{dd:0,dy:0,dS:15},{bA:er,bP:Ia,bY:er,bZ:jm},{bA:er,bP:Ia,bY:er,bZ:Nm}),wx=b(pl,{dd:0,dy:0,dS:15},{bA:er,bP:Ia,bY:er,bZ:Nm},{bA:er,bP:Ia,bY:er,bZ:jm}),Jl=v(function(e,r){return e?t(M,wx,r):t(M,xx,r)}),Sx={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},Cx=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,c,l,u,m){return V(Me,t(Jl,o,m),Sx,Ol,r,{c:i,d:a,e:l,f:n,cE:u,g:c})}))}else return R},to=function(e){var r=Cx(e);if(r.$)return E;var n=r.a;return ao(n)},Lx=O(function(e,r,n,a){var i=t(jl,n,pm),o=function(){var s=z(e,r);return s.a?s.b?Dt($([i,to(_m)])):i:s.b?to(_m):E}(),c=Ri(a),l=c.a,u=c.b,m=c.c;return t(Bm,Bi(a),t(Ul,I(l,u,m),o))}),Px=v(function(e,r){return P(Lx,!0,!0,e,r)}),Gm=v(function(e,r){return{$:0,a:e,b:r}}),zx=function(e){var r=Lc(e),n=r.hu,a=r.gA,i=r.fS;return b(Lt,n,a,i)},Mx=function(e){return t(Gm,0,qc(zx(e)))},Rt=function(e){var r=e;return ia(r)},Tx=v(function(e,r){var n=r;return n/e}),Wm=function(e){var r=e;return{io:ia(r),is:Aa(r)}},kx=v(function(e,r){var n=e.cy,a=e.q;return t(M,{q:Yi(a),cy:vr(n)},r)}),Dx=Wt(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,m=Na(l.cy),s=ja(l.cy),d=Ra(l.cy),g=t(Sa,e,d),f=t(Ye,r,d),_=t(Sa,n,s),y=t(Ye,a,s),w=t(Sa,i,m),S=t(Ye,o,m),x=u;e=g,r=f,n=_,a=y,i=w,o=S,c=x;continue e}else return $m({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),Hm=v(function(e,r){var n=Na(e.cy),a=ja(e.cy),i=Ra(e.cy);return ho(Dx,i,i,a,a,n,n,r)}),Vx=function(e){var r=b(Fu,kx,D,Ml(e));if(r.b){var n=r.a,a=r.b,i=t(Ft,r,Ll(e)),o=t(Hm,n,a);return P(lm,o,e,i,0)}else return Sl},Um=v(function(e,r){var n=e,a=r,i=n.dU,o=i,c=n.dT,l=c;return{io:a.io*l.io+a.is*o.io,is:a.io*l.is+a.is*o.is,dV:a.io*l.dV+a.is*o.dV}}),io=function(e){var r=e;return Aa(r)},ql=function(e){return Da(2*Dn*e)},Ax=Dr,Om=Ax({dm:Ir,dT:Xf,dU:ol}),Jm=function(){var e=72,r=t(Tx,e,ql(1)),n=ca(1),a=Va(Oc),i=Va(ff),o=ca(1),c=t(xe,.5,o),l=b(Je,Ar,Ar,c),u=t(xe,-.5,o),m=b(Je,Ar,Ar,u),s=function(f){var _=t(xe,f,r),y=Va(t(Um,Om,Wm(_))),w=t(xe,Rt(_),n),S=t(xe,io(_),n),x=b(Je,w,S,c),C=b(Je,w,S,u),F=t(Si,e,f+1),J=t(xe,F,r),K=Va(t(Um,Om,Wm(J))),H=t(xe,Rt(J),n),Y=t(xe,io(J),n),Z=b(Je,H,Y,u),B=b(Je,H,Y,c);return $([I({q:i,cy:m},{q:i,cy:Z},{q:i,cy:C}),I({q:y,cy:C},{q:K,cy:Z},{q:K,cy:B}),I({q:y,cy:C},{q:K,cy:B},{q:y,cy:x}),I({q:a,cy:l},{q:a,cy:x},{q:a,cy:B})])},d=t(q,s,t(nn,0,e-1)),g=Vl(ir(d));return wl(Vx(g))}(),qm=bm(Jm),Fx=function(e){var r=hf(e),n=Gc(r),a=n.a,i=n.b;return Fr({dm:_f(e),dT:a,dU:i,dW:r})},Ix=O(function(e,r,n,a){var i=Fx(cl(a)),o=t(jl,n,Jm),c=function(){var d=z(e,r);return d.a?d.b?Dt($([o,to(qm)])):o:d.b?to(qm):E}(),l=xf(a),u=l,m=yf(a),s=m;return t(Bm,i,t(Ul,I(u,u,s),c))}),Ex=v(function(e,r){return P(Ix,!0,!0,e,r)}),Ym={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Zm={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},jt=function(e){var r=At(e),n=r.a,a=r.b,i=r.c,o=Ga(n),c=Ga(a),l=Ga(i);return qr({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},oo=dm($([I({dJ:0},{dJ:1},{dJ:2})])),Bx=v(function(e,r){var n=vm(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return t(qe,a,be(function(x,C,F,J,K,H,Y,Z){return V(Me,b(fr,J,0,Z),Ym,Fl,oo,{aO:i,c:F,d:C,e:H,f:x,bV:jt(r),g:K})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,c=e.c;return t(qe,a,be(function(x,C,F,J,K,H,Y,Z){return V(Me,b(fr,J,0,Z),Ym,Il,oo,{a6:t(Xi,It(c),o),c:F,d:C,e:H,f:x,bV:jt(r),g:K})}));case 2:e.a;var l=e.b,u=e.c,m=t(Am,l,u);if(m.$)return E;var s=m.a;return t(qe,a,be(function(x,C,F,J,K,H,Y,Z){var B=Y.a,ne=Y.b;return V(Me,b(fr,J,0,Z),Zm,Pm,oo,{U:ne,bG:B.bG,cn:B.cn,co:B.co,cp:B.cp,de:s,c:F,d:C,e:H,f:x,bV:jt(r),g:K})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=P(Fm,d,g,f,u);if(_.$)return E;var y=_.a,w=_.b,S=_.c;return t(qe,a,be(function(x,C,F,J,K,H,Y,Z){var B=Y.a,ne=Y.b;return V(Me,b(fr,J,0,Z),Zm,Dm,oo,{cS:y,U:ne,bG:B.bG,cn:B.cn,co:B.co,cp:B.cp,dh:S,c:F,d:C,e:H,dB:w,f:x,bV:jt(r),g:K})}))}}),Rx=function(){var e=$([{bl:t(hr,0,1)},{bl:t(hr,1,1)},{bl:t(hr,2,1)},{bl:t(hr,0,-1)},{bl:t(hr,1,-1)},{bl:t(hr,2,-1)}]),r=$([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return t(Ft,e,r)}(),jx={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",triangleVertexPositions:"bV",viewMatrix:"g"}},Km=function(e){return ao(be(function(r,n,a,i,o,c,l,u){return V(Me,t(Jl,i,u),jx,Ol,Rx,{c:a,d:n,e:c,f:r,cE:l,bV:jt(e),g:o})}))},Nx=O(function(e,r,n,a){var i=t(Bx,n,a),o=z(e,r);return o.a?o.b?Dt($([i,Km(a)])):i:o.b?Km(a):E}),Gx=v(function(e,r){return P(Nx,!0,!0,e,r)}),Wx=v(function(e,r){var n=na(r),a=na(e),i=ra(r),o=ra(e),c=ea(r),l=ea(e);return{eL:t(Ee,l,c),eM:t(Ee,o,i),eN:t(Ee,a,n),eO:t(We,l,c),eP:t(We,o,i),eQ:t(We,a,n)}}),Hx=function(e){var r=el(e),n=r.a,a=r.b;return t(Wx,n,a)},Xm={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ux=v(function(e,r){return{$:1,a:e,b:r}}),Ox=Ux({d5:2,ei:0,eS:1}),Qm=Ox($([z({es:0},{es:1})])),Jx=v(function(e,r){var n=Hx(r),a=ie(n),i=el(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var l=e.b.a;return t(qe,a,be(function(m,s,d,g,f,_,y,w){return V(Me,w,Xm,Fl,Qm,{aO:l,eq:vr(c),er:vr(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return E;var l=e.b.a,u=e.c;return t(qe,a,be(function(s,d,g,f,_,y,w,S){return V(Me,S,Xm,Il,Qm,{a6:t(Xi,It(u),l),eq:vr(c),er:vr(o),c:g,d,e:y,f:s,g:_})}));case 2:return E;default:return E}}),qx=v(function(e,r){return t(Jx,e,r)}),es=v(function(e,r){var n=e,a=r;return n/a}),Yx=Be(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(M,o,i);if(ue(r,e))return c;var l=e,u=r-1,m=n,s=a,d=c;e=l,r=u,n=m,a=s,i=d;continue e}}),rs=v(function(e,r){return e<1?D:V(Yx,0,e,e,r,D)}),Zx=v(function(e,r){var n=e.cy,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(M,{q:Yi(a),cy:vr(n),O:t(hr,c,l)},r)}),Kx=function(e){var r=b(Fu,Zx,D,Ml(e));if(r.b){var n=r.a,a=r.b,i=t(Ft,r,Ll(e)),o=t(Hm,n,a);return P(um,o,e,i,0)}else return Sl},ns=v(function(e,r){var n=e,a=r,i=ia(a);return{io:i*ia(n),is:i*Aa(n),dV:Aa(a)}}),Xx=function(){var e=ca(1),r=72,n=t(nn,0,r-1),a=t(rs,r,t(Bt,Ar,ql(1))),i=rt(r/2),o=t(nn,0,i-1),c=t(rs,i,t(Bt,Ct(90),Ct(-90))),l=kl(ir(t(q,function(s){return t(q,function(d){return{q:Va(t(ns,s,d)),cy:b(Je,t(xe,Rt(d)*Rt(s),e),t(xe,Rt(d)*io(s),e),t(xe,io(d),e)),O:z(t(es,s,ql(1)),t(es,t(kt,Ct(90),d),Ct(180)))}},c)},a))),u=v(function(s,d){return s*(i+1)+d}),m=ir(t(q,function(s){return ir(t(q,function(d){var g=t(u,s+1,d),f=t(u,s,d),_=t(u,s+1,d+1),y=t(u,s,d+1);return $([I(y,_,g),I(y,g,f)])},o))},n));return wl(Kx(t(gm,l,m)))}(),co=72,lo=2*co,Qx=v(function(e,r){e:for(;;){var n=lo+1,a=t(Si,lo,2*e+3),i=t(Si,lo,2*e+2),o=2*e+1,c=2*e,l=lo,u=t(M,I(l,c,i),t(M,I(c,a,i),t(M,I(c,o,a),t(M,I(o,n,a),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),ew=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),rw=v(function(e,r){e:for(;;){var n=b(ew,0,2*Dn,e/co),a={b$:n,cu:0,cB:1},i={b$:n,cu:1,cB:1},o=t(M,a,t(M,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),nw=function(){var e=t(rw,co-1,$([{b$:0,cu:0,cB:0},{b$:0,cu:1,cB:0}])),r=t(Qx,co-1,D);return t(Ft,e,r)}(),aw={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cu",radiusScale:"cB"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},as=function(e){return ao(be(function(r,n,a,i,o,c,l,u){return V(Me,t(Jl,!0,u),aw,Ol,nw,{aO:b(Lt,0,0,1),c:a,d:n,e:c,f:r,cE:l,g:o})}))},tw=function(e){var r=mm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cD:1}},iw=v(function(e,r){return t(Em,tw(e),r)}),ow=O(function(e,r,n,a){var i=t(jl,n,Xx),o=function(){var u=z(e,r);return u.a?u.b?Dt($([i,as()])):i:u.b?as():E}(),c=Ni(a),l=c;return t(iw,t(Di,Ir,ji(a)),t(Ul,I(l,l,l),o))}),cw=v(function(e,r){return P(ow,!0,!0,e,r)}),lw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),uw=Be(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),$w=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(Gm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(lw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(pf,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return V(uw,r,n,o,c,i)}},vw=$w,ts=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(Px,r,n)]);case 1:var r=e.a,a=e.b;return $([t(Gx,r,a)]);case 3:var r=e.a,i=e.b;return $([t(cw,vw(r),i)]);case 2:var r=e.a,o=e.b;return $([t(Ex,r,o)]);case 4:var c=e.a,l=e.b;return $([t(qx,Mx(c),l)]);default:var u=e.a;return t(_a,ts,u)}},fw=function(e){return t(_a,ts,e)},mw=v(function(e,r){return xy({a1:E_(e.fO),f0:e.f0,a3:B_(.5),cY:e.cY,a4:z(Pf(Pe(e.dD.im)),Pf(Pe(e.dD.gH))),a8:fw(r),hI:!0,hZ:t(ns,Da(e.hY),Da(e.h_)),fm:ll})}),sw=v(function(e,r){return t(mw,{fO:F1,f0:Z1({d9:{io:0,is:15,dV:18},ba:{io:0,is:4,dV:0},fm:{io:0,is:1,dV:0}}),cY:e.cY,dD:e.dD,hY:-Ci(135),h_:-Ci(45)},t(I_,e,r))}),dw=P(P1,sw,A1,V1,z1);const pw={Main:{init:dw(t(U,function(e){return tr({gY:e})},t(W,"inputs",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return tr({bt:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(W,"clock",je))},t(W,"devicePixelRatio",je))},t(W,"dt",je))},t(W,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(s){return t(U,function(d){return tr({fJ:d,gd:s,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ui(ga)))},t(W,"left",_e))},t(W,"pressedKeys",ui(ga)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return tr({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",je))},t(W,"y",je))))},t(W,"screen",t(U,function(r){return t(U,function(n){return tr({gH:n,im:r})},t(W,"height",je))},t(W,"width",je))))},t(W,"wheel",t(U,function(e){return t(U,function(r){return tr({gh:r,gi:e})},t(W,"deltaX",je))},t(W,"deltaY",je)))))))(0)}},X={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},gw=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(X.keyboard.downs.push(f.code),X.keyboard.pressedKeys.push(f.code),r(f)&&(X.keyboard.control=!0),n(f)&&(X.keyboard.alt=!0),a(f)&&(console.log("yo"),X.keyboard.shift=!0),i(f)&&(X.keyboard.left=!0),o(f)&&(X.keyboard.right=!0),c(f)&&(X.keyboard.up=!0),l(f)&&(console.log("yey"),X.keyboard.down=!0))}),window.addEventListener("keyup",f=>{X.keyboard.pressedKeys=X.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(X.keyboard.control=!1,X.keyboard.pressedKeys=[]),n(f)&&(X.keyboard.alt=!1),a(f)&&(X.keyboard.shift=!1),i(f)&&(X.keyboard.left=!1),o(f)&&(X.keyboard.right=!1),c(f)&&(X.keyboard.up=!1),l(f)&&(X.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{X.pointer.x=-.5*X.screen.width+f.pageX,X.pointer.y=.5*X.screen.height-f.pageY,u(f)&&(X.pointer.down=!0,X.pointer.isDown=!0),m(f)&&(X.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{X.pointer.move=!0,X.pointer.x=-.5*X.screen.width+f.pageX,X.pointer.y=.5*X.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(X.pointer.up=!0,X.pointer.isDown=!1),m(f)&&(X.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(X.pointer.up=!0,X.pointer.isDown=!1),m(f)&&(X.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{X.wheel.deltaX=f.deltaX,X.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(X)}),window.addEventListener("focus",f=>{s(X)}),window.addEventListener("visibilitychange",f=>{s(X)}),window.addEventListener("resize",()=>{X.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,y=_-X.clock;y<.009||(X.dt=y,X.clock=_,e.ports.tick.send(X),d(X)),window.requestAnimationFrame(g)}},hw=pw.Main.init({node:document.querySelector("#app div"),flags:{inputs:X}});gw(hw);
