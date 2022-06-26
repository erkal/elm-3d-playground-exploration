const ts=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ts();function sn(e,r,n){return n.a=e,n.f=r,n}function v(e){return sn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return sn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function O(e){return sn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Be(e){return sn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function fr(e){return sn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function Ot(e){return sn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function be(e){return sn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,a,i,o,c,l,u)}}}}}}}})}function fo(e){return sn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return e(r,n,a,i,o,c,l,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function V(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Ke(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function mo(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function Oa(e,r,n,a,i,o,c,l,u){return e.a===8?e.f(r,n,a,i,o,c,l,u):e(r)(n)(a)(i)(o)(c)(l)(u)}function is(e,r,n,a,i,o,c,l,u,m){return e.a===9?e.f(r,n,a,i,o,c,l,u,m):e(r)(n)(a)(i)(o)(c)(l)(u)(m)}var os=[];function cs(e){return e.length}var ls=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),us=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),$s=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var vs=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+fs()),r});function fs(e){return"<internals>"}function $a(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function le(e,r){for(var n,a=[],i=so(e,r,0,a);i&&(n=a.pop());i=so(n.a,n.b,0,a));return i}function so(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&$a(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$<0&&(e=ku(e),r=ku(r));for(var i in e)if(!so(e[i],r[i],n+1,a))return!1;return!0}v(le);v(function(e,r){return!le(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ce(e,r)<0});v(function(e,r){return ce(e,r)<1});v(function(e,r){return ce(e,r)>0});v(function(e,r){return ce(e,r)>=0});var ms=v(function(e,r){var n=ce(e,r);return n<0?Vu:n?i0:Du}),Ja=0;function M(e,r){return{a:e,b:r}}function I(e,r,n){return{a:e,b:r,c:n}}function jr(e){return e}function Te(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(G);function G(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Rr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Rr(e.a,r);return n}var D={$:0};function Rr(e,r){return{$:1,a:e,b:r}}var ss=v(Rr);function $(e){for(var r=D,n=e.length;n--;)r=Rr(e[n],r);return r}function Jt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ds=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});O(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Be(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return $(o)});fr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,a.a,i.a,o.a));return $(c)});v(function(e,r){return $(Jt(r).sort(function(n,a){return ce(e(n),e(a))}))});v(function(e,r){return $(Jt(r).sort(function(n,a){var i=t(e,n,a);return i===Du?0:i===Vu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ps=v(Math.pow);v(function(e,r){return r%e});var gs=v(function(e,r){var n=r%e;return e===0?$a(11):n>0&&e<0||n<0&&e>0?n+e:n}),hs=Math.PI,bs=Math.cos,_s=Math.sin,ys=Math.tan;v(Math.atan2);function xs(e){return e}function ws(e){return e===1/0||e===-1/0}var Ss=Math.ceil,Cs=Math.floor,Ls=Math.round,Ps=Math.sqrt,Ul=Math.log,Ms=isNaN;function zs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ts=v(function(e,r){return e+r});function ks(e){var r=e.charCodeAt(0);return isNaN(r)?j:N(55296<=r&&r<=56319?M(jr(e[0]+e[1]),e.slice(2)):M(jr(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ds(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(jr(r[i]+r[i+1])),i+=2;continue}a[i]=e(jr(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(jr(o))&&n.push(o)}return n.join("")});function Vs(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,jr(o),r)}return r});var As=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,jr(i),r)}return r}),Fs=v(function(e,r){return r.split(e)}),Is=v(function(e,r){return r.join(e)}),Es=T(function(e,r,n){return n.slice(e,r)});function Bs(e){return $(e.trim().split(/\s+/g))}function js(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(jr(a)))return!0}return!1});var Rs=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(jr(a)))return!1}return!0}),Ns=v(function(e,r){return r.indexOf(e)>-1}),Gs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Hs=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Ol(e){return e+""}function Ws(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return j;r=10*r+o-48}return i==a?j:N(n==45?-r:r)}function Us(e){if(e.length===0||/[\sxbo]/.test(e))return j;var r=+e;return r===r?N(r):j}function Os(e){return Jt(e).join("")}function Js(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function qs(e){return jr(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Ys(e){return{$:0,a:e}}function Zs(e){return{$:1,a:e}}function po(e){return{$:2,b:e}}var Ks=po(function(e){return typeof e=="boolean"?Fe(e):Nr("a BOOL",e)}),Xs=po(function(e){return typeof e=="number"?Fe(e):Nr("a FLOAT",e)}),Qs=po(function(e){return typeof e=="string"?Fe(e):e instanceof String?Fe(e+""):Nr("a STRING",e)});function ed(e){return{$:3,b:e}}var rd=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function dn(e,r){return{$:9,f:e,g:r}}var nd=v(function(e,r){return{$:10,b:r,h:e}}),ad=v(function(e,r){return dn(e,[r])}),td=T(function(e,r,n){return dn(e,[r,n])});O(function(e,r,n,a){return dn(e,[r,n,a])});Be(function(e,r,n,a,i){return dn(e,[r,n,a,i])});fr(function(e,r,n,a,i,o){return dn(e,[r,n,a,i,o])});Ot(function(e,r,n,a,i,o,c){return dn(e,[r,n,a,i,o,c])});be(function(e,r,n,a,i,o,c,l){return dn(e,[r,n,a,i,o,c,l])});fo(function(e,r,n,a,i,o,c,l,u){return dn(e,[r,n,a,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return xr(e,n)}catch(a){return Qe(t(Fo,"This is not valid JSON! "+a.message,Qr(r)))}});var Jl=v(function(e,r){return xr(e,fa(r))});function xr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Fe(e.c):Nr("null",r);case 3:return qt(r)?ql(e.b,r,$):Nr("a LIST",r);case 4:return qt(r)?ql(e.b,r,id):Nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Nr("an OBJECT with a field named `"+n+"`",r);var a=xr(e.b,r[n]);return Ar(a)?a:Qe(t(Au,n,a.a));case 7:var i=e.e;if(!qt(r))return Nr("an ARRAY",r);if(i>=r.length)return Nr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=xr(e.b,r[i]);return Ar(a)?a:Qe(t(Fu,i,a.a));case 8:if(typeof r!="object"||r===null||qt(r))return Nr("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var a=xr(e.b,r[c]);if(!Ar(a))return Qe(t(Au,c,a.a));o=Rr(M(c,a.a),o)}return Fe(nr(o));case 9:for(var l=e.f,u=e.g,m=0;m<u.length;m++){var a=xr(u[m],r);if(!Ar(a))return a;l=l(a.a)}return Fe(l);case 10:var a=xr(e.b,r);return Ar(a)?xr(e.h(a.a),r):a;case 11:for(var s=D,d=e.g;d.b;d=d.b){var a=xr(d.a,r);if(Ar(a))return a;s=Rr(a.a,s)}return Qe(o0(nr(s)));case 1:return Qe(t(Fo,e.a,Qr(r)));case 0:return Fe(e.a)}}function ql(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=xr(e,r[o]);if(!Ar(c))return Qe(t(Fu,o,c.a));i[o]=c.a}return Fe(n(i))}function qt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function id(e){return t(y0,e.length,function(r){return e[r]})}function Nr(e,r){return Qe(t(Fo,"Expecting "+e,Qr(r)))}function va(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return va(e.b,r.b);case 6:return e.d===r.d&&va(e.b,r.b);case 7:return e.e===r.e&&va(e.b,r.b);case 9:return e.f===r.f&&Yl(e.g,r.g);case 10:return e.h===r.h&&va(e.b,r.b);case 11:return Yl(e.g,r.g)}}function Yl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!va(e[a],r[a]))return!1;return!0}var od=v(function(e,r){return JSON.stringify(fa(r),null,e)+""});function Qr(e){return e}function fa(e){return e}function cd(){return[]}function ld(){return{}}var ud=T(function(e,r,n){return n[e]=fa(r),n});function $d(e){return v(function(r,n){return n.push(fa(e(r))),n})}function En(e){return{$:0,a:e}}function vd(e){return{$:1,a:e}}function en(e){return{$:2,b:e,c:null}}var go=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function fd(e){return{$:5,b:e}}var md=0;function ho(e){var r={$:0,e:md++,f:e,g:null,h:[]};return _o(r),r}function Zl(e){return en(function(r){r(En(ho(e)))})}function Kl(e,r){e.h.push(r),_o(e)}var sd=v(function(e,r){return en(function(n){Kl(e,r),n(En(Ja))})}),bo=!1,Xl=[];function _o(e){if(Xl.push(e),!bo){for(bo=!0;e=Xl.shift();)dd(e);bo=!1}}function dd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,_o(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,a){return yo(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function yo(e,r,n,a,i,o){var c=t(Jl,e,Qr(r?r.flags:void 0));Ar(c)||$a(2);var l={},u=n(c.a),m=u.a,s=o(g,m),d=pd(l,g);function g(f,_){var y=t(a,f,m);s(m=y.a,_),ru(l,y.b,i(m))}return ru(l,u.b,i(m)),d?{ports:d}:{}}var Gr={};function pd(e,r){var n;for(var a in Gr){var i=Gr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=hd(i,r)}return n}function gd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function hd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l(u){return t(go,l,fd(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&c?P(a,n,s.i,s.j,u):b(a,n,o?s.i:s.j,u)}))}return n.h=ho(t(go,l,e.b))}var bd=v(function(e,r){return en(function(n){e.g(r),n(En(Ja))})});v(function(e,r){return t(sd,e.h,{$:0,a:r})});function Ql(e){return function(r){return{$:1,k:e,l:r}}}function _d(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var eu=[],xo=!1;function ru(e,r,n){if(eu.push({p:e,q:r,r:n}),!xo){xo=!0;for(var a;a=eu.shift();)yd(a.p,a.q,a.r);xo=!1}}function yd(e,r,n){var a={};Yt(!0,r,a,null),Yt(!1,n,a,null);for(var i in e)Kl(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Yt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=xd(e,i,a,r.l);n[i]=wd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Yt(e,c.a,n,a);return;case 3:Yt(e,r.o,n,{s:r.n,t:a});return}}function xd(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Gr[r].e:Gr[r].f;return t(o,i,a)}function wd(e,r,n){return n=n||{i:D,j:D},e?n.i=Rr(r,n.i):n.j=Rr(r,n.j),n}function Sd(e){Gr[e]&&$a(3)}v(function(e,r){return r});function Cd(e,r){return Sd(e),Gr[e]={f:Ld,u:r,a:Pd},Ql(e)}var Ld=v(function(e,r){return function(n){return e(r(n))}});function Pd(e,r){var n=D,a=Gr[e].u,i=En(null);Gr[e].b=i,Gr[e].c=T(function(c,l,u){return n=l,i});function o(c){var l=t(Jl,a,Qr(c));Ar(l)||$a(4,e,l.a);for(var u=l.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Zt,rn=typeof document!="undefined"?document:{};function wo(e,r){e.appendChild(r)}O(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(gn(e,function(){}),i),{}});function So(e){return{$:0,a:e}}var nu=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:Lo(n),e:i,f:e,b:o}})}),nn=nu(void 0),Md=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:Lo(n),e:i,f:e,b:o}})}),zd=Md(void 0);function Td(e,r,n,a){return{$:3,d:Lo(e),g:r,h:n,i:a}}var kd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return pn([e,r],function(){return e(r)})});T(function(e,r,n){return pn([e,r,n],function(){return t(e,r,n)})});var Dd=O(function(e,r,n,a){return pn([e,r,n,a],function(){return b(e,r,n,a)})});Be(function(e,r,n,a,i){return pn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});fr(function(e,r,n,a,i,o){return pn([e,r,n,a,i,o],function(){return V(e,r,n,a,i,o)})});Ot(function(e,r,n,a,i,o,c){return pn([e,r,n,a,i,o,c],function(){return Ke(e,r,n,a,i,o,c)})});be(function(e,r,n,a,i,o,c,l){return pn([e,r,n,a,i,o,c,l],function(){return mo(e,r,n,a,i,o,c,l)})});fo(function(e,r,n,a,i,o,c,l,u){return pn([e,r,n,a,i,o,c,l,u],function(){return Oa(e,r,n,a,i,o,c,l,u)})});var au=v(function(e,r){return{$:"a0",n:e,o:r}}),Vd=v(function(e,r){return{$:"a1",n:e,o:r}}),Co=v(function(e,r){return{$:"a2",n:e,o:r}}),kr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function tu(e){return e=="script"?"p":e}function Ad(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Fd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Id(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function iu(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Ed=v(function(e,r){return r.$==="a0"?t(au,r.n,Bd(e,r.o)):r});function Bd(e,r){var n=Go(r);return{$:r.$,a:n?b(x0,n<3?jd:Rd,ar(e),r.a):t(ri,e,r.a)}}var jd=v(function(e,r){return M(e(r.a),r.b)}),Rd=v(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function Lo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?ou(r,i,fa(o)):r[i]=fa(o);continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?ou(c,i,o):c[i]=o}return r}function ou(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gn(e,r){var n=e.$;if(n===5)return gn(e.k||(e.k=e.m()),r);if(n===0)return rn.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=gn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Po(c,r,e.d),c}var c=e.f?rn.createElementNS(e.f,e.c):rn.createElement(e.c);Zt&&e.c=="a"&&c.addEventListener("click",Zt(c)),Po(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)wo(c,gn(n===1?l[u]:l[u].b,r));return c}function Po(e,r,n){for(var a in n){var i=n[a];a==="a1"?Nd(e,i):a==="a0"?Wd(e,r,i):a==="a3"?Gd(e,i):a==="a4"?Hd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Nd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Gd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Hd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Wd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Ud(r,o),e.addEventListener(i,c,Mo&&{passive:Go(o)<2}),a[i]=c}}var Mo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Mo=!0}}))}catch{}function Ud(e,r){function n(a){var i=n.q,o=xr(i.a,a);if(!!Ar(o)){for(var c=Go(i),l=o.a,u=c?c<3?l.a:l.aA:l,m=c==1?l.b:c==3&&l.dH,s=(m&&a.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&a.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function Od(e,r){return e.$==r.$&&va(e.a,r.a)}function cu(e,r){var n=[];return Dr(e,r,n,0),n}function Xe(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Dr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=ep(r),o=1;else{Xe(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,m=u===l.length;m&&u--;)m=c[u]===l[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];Dr(e.k,r.k,s,0),s.length>0&&Xe(n,1,a,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var y=r.k;y.$===4;)f=!0,typeof g!="object"?g=[g,y.j]:g.push(y.j),y=y.k;if(f&&d.length!==g.length){Xe(n,0,a,r);return}(f?!Jd(d,g):d!==g)&&Xe(n,2,a,g),Dr(_,y,n,a+1);return;case 0:e.a!==r.a&&Xe(n,3,a,r.a);return;case 1:lu(e,r,n,a,qd);return;case 2:lu(e,r,n,a,Yd);return;case 3:if(e.h!==r.h){Xe(n,0,a,r);return}var w=zo(e.d,r.d);w&&Xe(n,4,a,w);var S=r.i(e.g,r.g);S&&Xe(n,5,a,S);return}}}function Jd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function lu(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Xe(n,0,a,r);return}var o=zo(e.d,r.d);o&&Xe(n,4,a,o),i(e,r,n,a)}function zo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=zo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Od(c,l)||(a=a||{},a[i]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function qd(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Xe(n,6,a,{v:l,i:c-l}):c<l&&Xe(n,7,a,{v:c,e:o});for(var u=c<l?c:l,m=0;m<u;m++){var s=i[m];Dr(s,o[m],n,++a),a+=s.b||0}}function Yd(e,r,n,a){for(var i=[],o={},c=[],l=e.e,u=r.e,m=l.length,s=u.length,d=0,g=0,f=a;d<m&&g<s;){var _=l[d],y=u[g],w=_.a,S=y.a,x=_.b,C=y.b,F=void 0,q=void 0;if(w===S){f++,Dr(x,C,i,f),f+=x.b||0,d++,g++;continue}var K=l[d+1],W=u[g+1];if(K){var Y=K.a,Z=K.b;q=S===Y}if(W){var B=W.a,ne=W.b;F=w===B}if(F&&q){f++,Dr(x,ne,i,f),qa(o,i,w,C,g,c),f+=x.b||0,f++,Ya(o,i,w,Z,f),f+=Z.b||0,d+=2,g+=2;continue}if(F){f++,qa(o,i,S,C,g,c),Dr(x,ne,i,f),f+=x.b||0,d+=1,g+=2;continue}if(q){f++,Ya(o,i,w,x,f),f+=x.b||0,f++,Dr(Z,C,i,f),f+=Z.b||0,d+=2,g+=1;continue}if(K&&Y===B){f++,Ya(o,i,w,x,f),qa(o,i,S,C,g,c),f+=x.b||0,f++,Dr(Z,ne,i,f),f+=Z.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=l[d],x=_.b;Ya(o,i,_.a,x,f),f+=x.b||0,d++}for(;g<s;){var fe=fe||[],y=u[g];qa(o,i,y.a,y.b,void 0,fe),g++}(i.length>0||c.length>0||fe)&&Xe(n,8,a,{w:i,x:c,y:fe})}var uu="_elmW6BL";function qa(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Dr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}qa(e,r,n+uu,a,i,o)}function Ya(e,r,n,a,i){var o=e[n];if(!o){var c=Xe(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Dr(a,o.z,l,i),Xe(r,9,i,{w:l,A:o});return}Ya(e,r,n+uu,a,i)}function $u(e,r,n,a){Za(e,r,n,0,0,r.b,a)}function Za(e,r,n,a,i,o,c){for(var l=n[a],u=l.r;u===i;){var m=l.$;if(m===1)$u(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Za(e,r,s,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Za(e,r,s,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return Za(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,y=e.childNodes,w=0;w<_.length;w++){i++;var S=g===1?_[w]:_[w].b,x=i+(S.b||0);if(i<=u&&u<=x&&(a=Za(y[w],S,n,a,i,x,c),!(l=n[a])||(u=l.r)>o))return a;i=x}return a}function vu(e,r,n,a){return n.length===0?e:($u(e,r,n,a),Kt(e,n))}function Kt(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Zd(i,a);i===e&&(e=o)}return e}function Zd(e,r){switch(r.$){case 0:return Kd(e,r.s,r.u);case 4:return Po(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Kt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(gn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Kt(e,n.w),e;case 8:return Xd(e,r);case 5:return r.s(e);default:$a(10)}}function Kd(e,r,n){var a=e.parentNode,i=gn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Xd(e,r){var n=r.s,a=Qd(n.y,r);e=Kt(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:gn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&wo(e,a),e}function Qd(e,r){if(!!e){for(var n=rn.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;wo(n,o.c===2?o.s:gn(o.z,r.u))}return n}}function To(e){if(e.nodeType===3)return So(e.textContent);if(e.nodeType!==1)return So("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Rr(t(kr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Rr(To(m[a]),u);return b(nn,l,r,u)}function ep(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var rp=O(function(e,r,n,a){return yo(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=a.node,u=To(l);return fu(o,function(m){var s=c(m),d=cu(u,s);l=vu(l,u,d,i),u=s})})});O(function(e,r,n,a){return yo(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=rn.title,m=rn.body,s=To(m);return fu(o,function(d){Zt=c;var g=l(d),f=nn("body")(D)(g.fU),_=cu(s,f);m=vu(m,s,_,i),s=f,Zt=0,u!==g.id&&(rn.title=u=g.id)})})});var Xt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function fu(e,r){r(e);var n=0;function a(){n=n===1?0:(Xt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Xt(a),n=2)}}v(function(e,r){return t(Wo,at,en(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Wo,at,en(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Wo,at,en(function(){history.replaceState({},"",r),e()}))});var np={addEventListener:function(){},removeEventListener:function(){}},ap=typeof window!="undefined"?window:np;T(function(e,r,n){return Zl(en(function(a){function i(o){ho(n(o))}return e.addEventListener(r,i,Mo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=xr(e,r);return Ar(n)?N(n.a):j});function mu(e,r){return en(function(n){Xt(function(){var a=document.getElementById(e);n(a?En(r(a)):vd(w0(e)))})})}function tp(e){return en(function(r){Xt(function(){r(En(e()))})})}v(function(e,r){return mu(r,function(n){return n[e](),Ja})});v(function(e,r){return tp(function(){return ap.scroll(e,r),Ja})});T(function(e,r,n){return mu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ja})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var ip=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return j}});v(function(e,r){return r.match(e)!==null});var op=T(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?N(d):j}a.push(P(Ev,u[0],u.index,i,$(s))),l=r.lastIndex}return r.lastIndex=c,$(a)});O(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var m=arguments[l];u[--l]=m?N(m):j}return n(P(Ev,c,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,$(i)});var cp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/lp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function lp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ko=new Float64Array(3),su=new Float64Array(3),du=new Float64Array(3),up=T(function(e,r,n){return new Float64Array([e,r,n])}),$p=function(e){return e[0]},vp=function(e){return e[1]},fp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var mp=function(e){return new Float64Array([e.io,e.is,e.dV])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function pu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(pu);function gu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Qt(pu(e,r,n),n)}v(gu);function hu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Qt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/hu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var sp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ka=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ka);function Do(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Do);v(function(e,r){var n,a=ko,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ka(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ka(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ka(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ka(r,a)+e[14])/n,i});var dp=O(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var pp=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},gp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/hp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function hp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var bp=new Float64Array(16),_p=new Float64Array(16),yp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},xp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function bu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}fr(bu);O(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return bu(c,l,o,i,n,a)});function _u(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}fr(_u);O(function(e,r,n,a){return _u(e,r,n,a,-1,1)});function yu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],y=e[12],w=e[13],S=e[14],x=e[15],C=r[0],F=r[1],q=r[2],K=r[3],W=r[4],Y=r[5],Z=r[6],B=r[7],ne=r[8],fe=r[9],ye=r[10],me=r[11],se=r[12],xe=r[13],de=r[14],De=r[15];return n[0]=a*C+l*F+d*q+y*K,n[1]=i*C+u*F+g*q+w*K,n[2]=o*C+m*F+f*q+S*K,n[3]=c*C+s*F+_*q+x*K,n[4]=a*W+l*Y+d*Z+y*B,n[5]=i*W+u*Y+g*Z+w*B,n[6]=o*W+m*Y+f*Z+S*B,n[7]=c*W+s*Y+_*Z+x*B,n[8]=a*ne+l*fe+d*ye+y*me,n[9]=i*ne+u*fe+g*ye+w*me,n[10]=o*ne+m*fe+f*ye+S*me,n[11]=c*ne+s*fe+_*ye+x*me,n[12]=a*se+l*xe+d*de+y*De,n[13]=i*se+u*xe+g*de+w*De,n[14]=o*se+m*xe+f*de+S*De,n[15]=c*se+s*xe+_*de+x*De,n}v(yu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],y=r[0],w=r[1],S=r[2],x=r[4],C=r[5],F=r[6],q=r[8],K=r[9],W=r[10],Y=r[12],Z=r[13],B=r[14];return n[0]=a*y+c*w+m*S,n[1]=i*y+l*w+s*S,n[2]=o*y+u*w+d*S,n[3]=0,n[4]=a*x+c*C+m*F,n[5]=i*x+l*C+s*F,n[6]=o*x+u*C+d*F,n[7]=0,n[8]=a*q+c*K+m*W,n[9]=i*q+l*K+s*W,n[10]=o*q+u*K+d*W,n[11]=0,n[12]=a*Y+c*Z+m*B+g,n[13]=i*Y+l*Z+s*B+f,n[14]=o*Y+u*Z+d*B+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Qt(r,ko);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*u,n[2]=o*a*l-i*u,n[3]=0,n[4]=a*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+a*u,n[7]=0,n[8]=a*o*l+i*u,n[9]=i*o*l-a*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/hu(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=c*s,f=l*s,_=o*c*m,y=o*l*m,w=c*l*m,S=o*o*m+u,x=_+f,C=y-g,F=_-f,q=c*c*m+u,K=w+d,W=y+g,Y=w-d,Z=l*l*m+u,B=n[0],ne=n[1],fe=n[2],ye=n[3],me=n[4],se=n[5],xe=n[6],de=n[7],De=n[8],ze=n[9],Ze=n[10],An=n[11],Ha=n[12],Zr=n[13],Kr=n[14],ua=n[15];return a[0]=B*S+me*x+De*C,a[1]=ne*S+se*x+ze*C,a[2]=fe*S+xe*x+Ze*C,a[3]=ye*S+de*x+An*C,a[4]=B*F+me*q+De*K,a[5]=ne*F+se*q+ze*K,a[6]=fe*F+xe*q+Ze*K,a[7]=ye*F+de*q+An*K,a[8]=B*W+me*Y+De*Z,a[9]=ne*W+se*Y+ze*Z,a[10]=fe*W+xe*Y+Ze*Z,a[11]=ye*W+de*Y+An*Z,a[12]=Ha,a[13]=Zr,a[14]=Kr,a[15]=ua,a});function wp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(wp);O(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Sp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(Sp);O(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],u=a[3],m=a[4],s=a[5],d=a[6],g=a[7],f=a[8],_=a[9],y=a[10],w=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=y,i[11]=w,i[12]=o*e+m*r+f*n+a[12],i[13]=c*e+s*r+_*n+a[13],i[14]=l*e+d*r+y*n+a[14],i[15]=u*e+g*r+w*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],y=r[9],w=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=y,n[10]=w,n[11]=S,n[12]=c*a+s*i+_*o+r[12],n[13]=l*a+d*i+y*o+r[13],n[14]=u*a+g*i+w*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=gu(e,r,ko),i=Qt(Do(n,a,su),su),o=Qt(Do(a,i,du),du),c=bp,l=_p;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,yu(c,l)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var xu=0;function Xa(e,r){for(;r.b;r=r.b)e(r.a)}function Vo(e){for(var r=0;e.b;e=e.b)r++;return r}var Cp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Lp=Be(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),Pp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Mp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),zp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Tp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),kp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Dp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Vp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Ap=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Fp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Ip=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ep=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Bp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},wu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Su=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},jp=function(e){e.gl.disable(e.gl.CULL_FACE)},Rp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Np=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Gp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Cu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Hp=[Ip,Ep,Bp,wu,Su,jp,Rp,Np,Gp];function Lu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Wp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Up(e,r,n,a){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,y,w,S){var x;if(i===1)for(x=0;x<_;x++)f[y++]=_===1?w[S]:w[S][x];else o.forEach(function(C){for(x=0;x<_;x++)f[y++]=_===1?w[C][S]:w[C][S][x]})}var u=Pu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(Vo(n.b)*s);Xa(function(f){l(d,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function Op(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Jp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Vo(r.b),indexBuffer:null,buffers:{}}}function Jp(e,r){var n=new Uint32Array(Vo(e)*r),a=0,i;return Xa(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function Mu(e,r){return e+"#"+r}var zu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),wu(n),Su(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=Mu(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=xu++,m||(m=Lu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=xu++,s||(s=Lu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=Wp(a,m,s);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=qp(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(d,u),_=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=Mu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Yp(l.uniformSetters,o.e);var y=n.buffers.get(o.d);for(y||(y=Op(a,o.d),n.buffers.set(o.d,y)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],_=l.activeAttributeLocations[u],y.buffers[f.name]===void 0&&(y.buffers[f.name]=Up(a,f,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,y.buffers[f.name]);var w=Pu(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,w.size,w.baseType,!1,0,0);else for(var S=w.size*4,x=S*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,w.size,w.baseType,!1,x,S*C)}for(n.toggle=!n.toggle,Xa(H_(n),o.a),u=0;u<Cu.length;u++){var F=n[Cu[u]];F.toggle!==n.toggle&&F.enabled&&(Hp[u](n),F.enabled=!1,F.toggle=n.toggle)}y.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,y.indexBuffer),a.drawElements(o.d.a.eS,y.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,y.numIndices)}}return Xa(i,e.g),r});function qp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(f,_){var y=_.name,w=e.getUniformLocation(f,y);switch(_.type){case e.INT:return function(x){o[y]!==x&&(e.uniform1i(w,x),o[y]=x)};case e.FLOAT:return function(x){o[y]!==x&&(e.uniform1f(w,x),o[y]=x)};case e.FLOAT_VEC2:return function(x){o[y]!==x&&(e.uniform2f(w,x[0],x[1]),o[y]=x)};case e.FLOAT_VEC3:return function(x){o[y]!==x&&(e.uniform3f(w,x[0],x[1],x[2]),o[y]=x)};case e.FLOAT_VEC4:return function(x){o[y]!==x&&(e.uniform4f(w,x[0],x[1],x[2],x[3]),o[y]=x)};case e.FLOAT_MAT4:return function(x){o[y]!==x&&(e.uniformMatrix4fv(w,!1,new Float32Array(x)),o[y]=x)};case e.SAMPLER_2D:var S=c++;return function(x){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(x);C||(C=x.ge(e),l.textures.set(x,C)),e.bindTexture(e.TEXTURE_2D,C),o[y]!==x&&(e.uniform1i(w,S),o[y]=x)};case e.BOOL:return function(x){o[y]!==x&&(e.uniform1i(w,x),o[y]=x)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[a[g.name]||g.name]=u(i,g)}return m}function Yp(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Zp=T(function(e,r,n){return Td(r,{g:n,f:{},h:e},a0,t0)}),Kp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Xp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Qp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),e0=v(function(e,r){e.contextAttributes.antialias=!0}),r0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),n0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function a0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Xa(function(i){return t(G_,r,i)},e.h);var n=rn.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Cp(function(){return t(zu,e,n)})):(n=rn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function t0(e,r){return r.f=e.f,zu(r)}var z=ss,ei=vs,Tu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return b(ei,e,l,m)}else{var u=c.a;return b(ei,o,l,u)}});return b(ei,o,b(ei,e,r,i),a)}),Ao=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,u=b(e,a,i,b(Ao,e,r,c)),m=o;e=l,r=u,n=m;continue e}}),ku=function(e){return b(Ao,T(function(r,n,a){return t(z,M(r,n),a)}),D,e)},Du=1,i0=2,Vu=0,Qe=function(e){return{$:1,a:e}},Fo=v(function(e,r){return{$:3,a:e,b:r}}),Au=v(function(e,r){return{$:0,a:e,b:r}}),Fu=v(function(e,r){return{$:1,a:e,b:r}}),Fe=function(e){return{$:0,a:e}},o0=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},j={$:1},c0=Rs,l0=od,k=Ol,ee=v(function(e,r){return t(Is,e,Jt(r))}),Io=v(function(e,r){return $(t(Fs,e,r))}),Iu=function(e){return t(ee,`
    `,t(Io,`
`,e))},Ve=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),Bn=function(e){return b(Ve,v(function(r,n){return n+1}),0,e)},u0=ds,$0=T(function(e,r,n){e:for(;;)if(ce(e,r)<1){var a=e,i=r-1,o=t(z,r,n);e=a,r=i,n=o;continue e}else return n}),Vr=v(function(e,r){return b($0,e,r,D)}),Eu=v(function(e,r){return b(u0,e,t(Vr,0,Bn(r)-1),r)}),Hr=Js,Bu=function(e){var r=Hr(e);return 97<=r&&r<=122},ju=function(e){var r=Hr(e);return r<=90&&65<=r},v0=function(e){return Bu(e)||ju(e)},f0=function(e){var r=Hr(e);return r<=57&&48<=r},m0=function(e){return Bu(e)||ju(e)||f0(e)},nr=function(e){return b(Ve,z,D,e)},ma=ks,s0=v(function(e,r){return`

(`+(k(e+1)+(") "+Iu(d0(r))))}),d0=function(e){return t(p0,e,D)},p0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var y=ma(n);if(y.$===1)return!1;var w=y.a,S=w.a,x=w.b;return v0(S)&&t(c0,m0,x)}(),o=i?"."+n:"['"+(n+"']"),c=a,l=t(z,o,r);e=c,r=l;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),c=a,l=t(z,m,r);e=c,r=l;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",nr(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(k(Bn(s))+" ways:"));return t(ee,`

`,t(z,_,t(Eu,s0,s)))}else{var a=s.a,c=a,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",nr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",nr(r))+`:

    `):`Problem with the given value:

`}();return _+(Iu(t(l0,4,f))+(`

`+g))}}),mr=32,Eo=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Bo=os,Qa=Ss,jo=v(function(e,r){return Ul(r)/Ul(e)}),et=xs,rt=Qa(t(jo,2,mr)),Ru=P(Eo,0,rt,Bo,Bo),Nu=ls,Gu=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Hu=Cs,Ro=cs,qe=v(function(e,r){return ce(e,r)>0?e:r}),g0=function(e){return{$:0,a:e}},No=us,h0=v(function(e,r){e:for(;;){var n=t(No,mr,e),a=n.a,i=n.b,o=t(z,g0(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return nr(o)}}),Wu=function(e){var r=e.a;return r},b0=v(function(e,r){e:for(;;){var n=Qa(r/mr);if(n===1)return t(No,mr,e).a;var a=t(h0,e,D),i=n;e=a,r=i;continue e}}),Uu=v(function(e,r){if(r.n){var n=r.n*mr,a=Hu(t(jo,mr,n-1)),i=e?nr(r.C):r.C,o=t(b0,i,r.n);return P(Eo,Ro(r.r)+n,t(qe,5,a*rt),o,r.r)}else return P(Eo,Ro(r.r),rt,Bo,r.r)}),_0=Be(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Uu,!1,{C:a,n:n/mr|0,r:i});var o=Gu(b(Nu,mr,r,e)),c=e,l=r-mr,u=n,m=t(z,o,a),s=i;e=c,r=l,n=u,a=m,i=s;continue e}}),y0=v(function(e,r){if(e<=0)return Ru;var n=e%mr,a=b(Nu,n,e-n,r),i=e-n-mr;return V(_0,r,i,e,D,a)}),Ar=function(e){return!e.$},U=nd,_e=Ks,H=rd,je=Xs,Ou=v(function(e,r){return{a4:r.a4,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),ri=ad,x0=td,ar=Ys,Go=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Fr=function(e){return e},w0=Fr,Ju=fr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),S0=Ns,jn=Ds,sa=Es,nt=v(function(e,r){return e<1?r:b(sa,e,jn(r),r)}),ni=Hs,ai=function(e){return e===""},ti=v(function(e,r){return e<1?"":b(sa,0,e,r)}),qu=Ws,Yu=Be(function(e,r,n,a,i){if(ai(i)||t(S0,"@",i))return j;var o=t(ni,":",i);if(o.b){if(o.b.b)return j;var c=o.a,l=qu(t(nt,c+1,i));if(l.$===1)return j;var u=l;return N(Ke(Ju,e,t(ti,c,i),u,r,n,a))}else return N(Ke(Ju,e,i,j,r,n,a))}),Zu=O(function(e,r,n,a){if(ai(a))return j;var i=t(ni,"/",a);if(i.b){var o=i.a;return V(Yu,e,t(nt,o,a),r,n,t(ti,o,a))}else return V(Yu,e,"/",r,n,a)}),Ku=T(function(e,r,n){if(ai(n))return j;var a=t(ni,"?",n);if(a.b){var i=a.a;return P(Zu,e,N(t(nt,i+1,n)),r,t(ti,i,n))}else return P(Zu,e,j,r,n)});v(function(e,r){if(ai(r))return j;var n=t(ni,"#",r);if(n.b){var a=n.a;return b(Ku,e,N(t(nt,a+1,r)),t(ti,a,r))}else return b(Ku,e,j,r)});var C0=Gs,at=function(e){},tt=En,L0=tt(0),Xu=O(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,m=l.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Ve,e,r,nr(d)):P(Xu,e,r,n+1,d);return t(e,i,t(e,c,t(e,u,t(e,s,g))))}else return t(e,i,t(e,c,t(e,u,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),He=T(function(e,r,n){return P(Xu,e,r,0,n)}),J=v(function(e,r){return b(He,v(function(n,a){return t(z,e(n),a)}),D,r)}),ii=go,Ho=v(function(e,r){return t(ii,function(n){return tt(e(n))},r)}),P0=T(function(e,r,n){return t(ii,function(a){return t(ii,function(i){return tt(t(e,a,i))},n)},r)}),M0=function(e){return b(He,P0(z),tt(D),e)},z0=bd,T0=v(function(e,r){var n=r;return Zl(t(ii,z0(e),n))}),k0=T(function(e,r,n){return t(Ho,function(a){return 0},M0(t(J,T0(e),r)))}),D0=T(function(e,r,n){return tt(0)}),V0=v(function(e,r){var n=r;return t(Ho,e,n)});Gr.Task=gd(L0,k0,D0,V0);var A0=Ql("Task"),Wo=v(function(e,r){return A0(t(Ho,e,r))}),F0=rp,I0=zs,oi={$:1},Qu=function(e){return{$:2,a:e}},Uo={$:0},wr=v(function(e,r){return{$:0,a:e,b:r}}),We=T(function(e,r,n){return r(e(n))}),Rn=function(e){var r=e.b.s;return r.a},E0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return N(t(wr,r,{s:o,an:c,X:t(z,a,n)}))}else return j},Se=v(function(e,r){if(r.$)return e;var n=r.a;return n}),B0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dI;return(ce(o+r.gp,Rn(n).a4)>0?t(We,E0,Se(t(wr,oi,i))):Fr)(t(wr,Qu({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,m=t(Ou,l.gb,Te(r,{a4:l.a4+r.gp})),s=t(e,m,u);return t(wr,Uo,{s:M(m,s),an:D,X:t(z,i.s,i.X)})}}),e$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),j0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(z,a,n);e=o,r=c,n=l;continue e}else return n}}),R0=v(function(e,r){return nr(b(j0,e,r,D))}),r$=T(function(e,r,n){if(r<=0)return D;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,x=i.a,o=i.b,c=o.a;return $([x,c]);case 3:if(a.b.b.b.b){var l=a.b,x=l.a,u=l.b,c=u.a,m=u.b,s=m.a;return $([x,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,x=d.a,g=d.b,c=g.a,f=g.b,s=f.a,_=f.b,y=_.a,w=_.b;return e>1e3?t(z,x,t(z,c,t(z,s,t(z,y,t(R0,r-4,w))))):t(z,x,t(z,c,t(z,s,t(z,y,b(r$,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,x=S.a;return $([x])}}),N0=v(function(e,r){return b(r$,0,e,r)}),G0=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=G(nr(n),G($([a]),i)),c=t(N0,e,o),l=t(e$,e,o);if(l.b){var u=l.a,m=l.b;return t(wr,oi,{s:u,an:m,X:nr(c)})}else{var s=nr(c);if(s.b){var d=s.a,g=s.b;return t(wr,oi,{s:d,an:D,X:g})}else return r}}),H0=function(e){var r=e.b;return t(wr,oi,r)},W0=function(e){var r=e.b;return t(wr,Qu({dI:Rn(e).a4}),r)},U0=function(e){var r=e.b;return t(wr,Uo,r)},O0=v(function(e,r){switch(e.$){case 1:return H0(r);case 2:return U0(r);case 3:return W0(r);default:var n=e.a;return t(G0,n,r)}}),ci=v(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),J0=v(function(e,r){return Te(r,{aN:e(r.aN)})}),q0=function(e){return{$:3,a:e}},Y0=function(e){return{$:2,a:e}},n$=v(function(e,r){return{$:0,a:e,b:r}}),Z0=v(function(e,r){return{$:1,a:e,b:r}}),Ae=v(function(e,r){if(r.$)return j;var n=r.a;return N(e(n))}),ue=function(e){return e<0?-e:e},a$=Us,K0=T(function(e,r,n){return t(Se,0/0,a$(t(e,r,n)))}),it=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),X0=As,t$=function(e){return b(X0,z,D,e)},Q0=v(function(e,r){var n=t(it,function(a){return a!=="0"&&a!=="."},t$(r));return G(e&&n?"-":"",r)}),ae=Ol,Oo=Ts,i$=qs,o$=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ma(n);if(a.$===1)return"01";var i=a.a;return t(Oo,"0",o$(i))}else{var o=Hr(r);return o>=48&&o<57?t(Oo,i$(o+1),n):"0"}},Jo=ws,eg=Ms,li=function(e){return t(Oo,e,"")},c$=T(function(e,r,n){return e<=0?n:b(c$,e>>1,G(r,r),e&1?G(n,r):n)}),ot=v(function(e,r){return b(c$,e,r,"")}),qo=T(function(e,r,n){return G(n,t(ot,e-jn(n),li(r)))}),Yo=Vs,l$=function(e){var r=t(Io,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return M(n,i)}else{var n=r.a;return M(n,"0")}else return M("0","0")},rg=function(e){var r=t(Io,"e",ae(ue(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Se,0,qu(t(C0,"+",i)?t(nt,1,i):i)),c=l$(n),l=c.a,u=c.b,m=G(l,u),s=o<0?t(Se,"0",t(Ae,function(d){var g=d.a,f=d.b;return g+("."+f)},t(Ae,ci(li),ma(G(t(ot,ue(o),"0"),m))))):b(qo,o+1,"0",m);return G(e<0?"-":"",s)}else{var n=r.a;return G(e<0?"-":"",n)}else return""},ng=T(function(e,r,n){if(Jo(n)||eg(n))return ae(n);var a=n<0,i=l$(rg(ue(n))),o=i.a,c=i.b,l=jn(o)+r,u=G(t(ot,-l+1,"0"),b(qo,l,"0",G(o,c))),m=jn(u),s=t(qe,1,l),d=t(e,a,b(sa,s,m,u)),g=b(sa,0,s,u),f=d?Yo(t(Se,"1",t(Ae,o$,ma(Yo(g))))):g,_=jn(f),y=f==="0"?f:r<=0?G(f,t(ot,ue(r),"0")):ce(r,jn(c))<0?b(sa,0,_-r,f)+("."+b(sa,_-r,_,f)):G(o+".",b(qo,r,"0",c));return t(Q0,a,y)}),u$=ng(v(function(e,r){var n=ma(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Hr(i))})),ag=K0(u$),tg=T(function(e,r,n){var a=t(jo,10,ue(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(ag,i,n)}),$$=ms,ui=v(function(e,r){e:for(;;){if(r.$===-2)return j;var n=r.b,a=r.c,i=r.d,o=r.e,c=t($$,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return N(a);default:var l=e,u=o;e=l,r=u;continue e}}}),te=Be(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Wr={$:-2},da=Be(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,s=a.c,d=a.d,g=a.e;return V(te,0,r,n,V(te,1,m,s,d,g),V(te,1,o,c,l,u))}else return V(te,e,o,c,V(te,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,s=a.c,f=a.d;f.a;var _=f.b,y=f.c,w=f.d,S=f.e,g=a.e;return V(te,0,m,s,V(te,1,_,y,w,S),V(te,1,r,n,g,i))}else return V(te,e,r,n,a,i)}),Zo=T(function(e,r,n){if(n.$===-2)return V(te,0,e,r,Wr,Wr);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=t($$,e,i);switch(u){case 0:return V(da,a,i,o,b(Zo,e,r,c),l);case 1:return V(te,a,i,r,c,l);default:return V(da,a,i,o,c,b(Zo,e,r,l))}}),pa=T(function(e,r,n){var a=b(Zo,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return V(te,1,i,o,c,l)}else{var u=a;return u}}),ig=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},v$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,y=g.d,w=g.e,S=m.e;return V(te,0,f,_,V(te,1,n,a,V(te,0,o,c,l,u),y),V(te,1,s,d,w,S))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,u=x.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return V(te,1,n,a,V(te,0,o,c,l,u),V(te,0,s,d,g,S))}else return e},f$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,m=l.c,s=l.d,d=l.e,g=i.e,f=e.e;f.a;var _=f.b,y=f.c,w=f.d,S=f.e;return V(te,0,o,c,V(te,1,u,m,s,d),V(te,1,n,a,g,V(te,0,_,y,w,S)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,C=x.d,g=x.e,F=e.e;F.a;var _=F.b,y=F.c,w=F.d,S=F.e;return V(te,1,n,a,V(te,0,o,c,C,g),V(te,0,_,y,w,S))}else return e},og=Ot(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,m=o.d,s=o.e;return V(te,n,l,u,m,V(te,0,a,i,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,f$(r)}else break e;else return c.a,c.d,f$(r);else break e;return r}}),$i=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(te,r,n,a,$i(i),l);var u=v$(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return V(da,m,s,d,$i(g),f)}else return Wr}else return V(te,r,n,a,$i(i),l)}else return Wr},ct=v(function(e,r){if(r.$===-2)return Wr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(te,n,a,i,t(ct,e,o),c);var u=v$(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return V(da,m,s,d,t(ct,e,g),f)}else return Wr}else return V(te,n,a,i,t(ct,e,o),c);else return t(cg,e,mo(og,e,r,n,a,i,o,c))}),cg=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(le(e,a)){var l=ig(c);if(l.$===-1){var u=l.b,m=l.c;return V(da,n,u,m,o,$i(c))}else return Wr}else return V(da,n,a,i,o,t(ct,e,c))}else return Wr}),lg=v(function(e,r){var n=t(ct,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return V(te,1,a,i,o,c)}else{var l=n;return l}}),vi=T(function(e,r,n){var a=r(t(ui,e,n));if(a.$)return t(lg,e,n);var i=a.a;return b(pa,e,i,n)}),ug=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(vi,r,Ae(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(Z0,M(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(vi,r,Ae(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(n$,M(o,c),b(tg,o,c,n))}));case 3:var r=e.a,n=e.b;return t(vi,r,Ae(function(a){return a.$===3?q0(n):a}));default:var r=e.a,n=e.b;return t(vi,r,Ae(function(a){return a.$===2?Y0(n):a}))}},$g=function(e){return J0(ug(e))},vg=v(function(e,r){return t(J,$g(e),r)}),fg=v(function(e,r){return Te(r,{gb:t(vg,e,r.gb)})}),mg=v(function(e,r){var n=r.a,a=r.b;return t(wr,n,Te(a,{s:t(ci,fg(e),a.s)}))}),Ko=v(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),sg=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(wr,a,Te(i,{s:t(Ko,t(e,o.a,r),o)}))}),dg=O(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Te(a,{bx:!a.bx});case 2:var i=n.a;return Te(a,{R:b(B0,e,i,a.R)});case 3:var o=n.a;return Te(a,{bq:o});case 4:var c=n.a;return Te(a,{R:t(mg,c,a.R)});case 5:var l=n.a;return Te(a,{R:b(sg,r,l,a.R)});default:var u=n.a;return Te(a,{R:t(O0,u,a.R)})}}),pg=v(function(e,r){return t(wr,Uo,{s:M(e,r(e)),an:D,X:D})}),gg=_d,m$=gg(D),hg=function(e){return{$:2,a:e}},fi=ed,ga=Qs,bg=Cd("tick",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return ar({a4:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(H,"clock",je))},t(H,"devicePixelRatio",je))},t(H,"dt",je))},t(H,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(s){return t(U,function(d){return ar({fJ:d,gd:s,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",fi(ga)))},t(H,"left",_e))},t(H,"pressedKeys",fi(ga)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return ar({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",je))},t(H,"y",je))))},t(H,"screen",t(U,function(r){return t(U,function(n){return ar({gH:n,im:r})},t(H,"height",je))},t(H,"width",je))))},t(H,"wheel",t(U,function(e){return t(U,function(r){return ar({gh:r,gi:e})},t(H,"deltaX",je))},t(H,"deltaY",je))))),_g=function(e){return e.dO,bg(hg)},yg=function(e){return{$:5,a:e}},xg={$:0},mi=v(function(e,r){return e}),wg=function(e){var r=e.b.s;return r.b},Sg=function(e){return{$:1,a:e}},Cg=Sg,s$=function(e){return{$:8,a:e}},pe=s$,lt=function(e){return{$:0,a:e}},ut=T(function(e,r,n){return e(r(n))}),Lg=t(ut,lt,mi),hn=Lg,Ce=function(e){return{$:1,a:e}},an=Ce,d$=v(function(e,r){return{$:9,a:e,b:r}}),Nn={$:0},p$=v(function(e,r){return r.$===3?Nn:t(d$,e,r)}),Xo=function(e){return t(p$,4,e)},p={fy:"a",cM:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cN:"ah",cO:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b2:"bn",fZ:"bs",b5:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bu:"cl",cc:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",cj:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",bf:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cG:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Qo=Qr,Sr=v(function(e,r){return t(Co,e,Qo(r))}),Cr=Sr("className"),sr=function(e){return Ce(Cr(e))},g$=v(function(e,r){return{$:2,a:e,b:r}}),Pg=v(function(e,r){return{$:1,a:e,b:r}}),Ye=function(e){return{$:0,a:e}},dr=2,Mg={$:0},Gn=Mg,zg={$:0},Tg=p.fK+(" "+p.aw),kg=p.fK+(" "+p.gC),Dg=p.fK+(" "+p.eY),Vg=p.fK+(" "+p.eZ),Ag=p.fK+(" "+p.af),Fg=p.fK+(" "+p.hL),Ig=function(e){switch(e){case 0:return Ag;case 1:return Tg;case 2:return Fg;case 3:return kg;case 4:return Vg;default:return Dg}},h$=function(e){return{$:1,a:e}},Hn={$:0},ec=function(e){return{$:1,a:e}},b$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return G(n,e);case 2:var a=r.a;return G(e,a);default:var n=r.a,a=r.b;return G(n,G(e,a))}}),_$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return G(t(J,function(o){return M(e,o)},a),r);case 2:var i=n.a;return G(r,t(J,function(o){return M(e,o)},i));default:var a=n.a,i=n.b;return G(t(J,function(o){return M(e,o)},a),G(r,t(J,function(o){return M(e,o)},i)))}}),si=4,Eg=function(e){return{$:0,a:e}},Bg=function(e){return{$:1,a:e}},$e=function(e){return e>31?Bg(1<<e-32):Eg(1<<e)},y$=$e(41),x$=$e(40),w$=$e(42),S$=$e(43),ha=nn("div"),rc=Wr,C$=rc,Ur=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Ur(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Ur(i))}},Le=Ls,ke=function(e){return k(Le(e*255))},nc=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(ke(n)+("-"+(ke(a)+("-"+ke(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,w=f.c,S=e.d;return N("tfrm-"+(ke(c)+("-"+(ke(l)+("-"+(ke(u)+("-"+(ke(s)+("-"+(ke(d)+("-"+(ke(g)+("-"+(ke(_)+("-"+(ke(y)+("-"+(ke(w)+("-"+ke(S))))))))))))))))))))}},$t=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(t(ee,"-",t(J,Ur,c.hB))+("-cols-"+(t(ee,"-",t(J,Ur,c.ak))+("-space-x-"+(Ur(c.hP.a)+("-space-y-"+Ur(c.hP.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(k(l.af)+("-"+(k(l.ga)+("-"+(k(l.im)+("-"+k(l.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(J,function(s){var d=$t(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return t(Se,"",nc(o))}},jg=v(function(e,r){var n=r;return b(pa,e,0,n)}),Rg=v(function(e,r){var n=t(ui,e,r);return!n.$}),Ng=v(function(e,r){var n=r;return t(Rg,e,n)}),L$=v(function(e,r){var n=r.a,a=r.b,i=$t(e);return t(Ng,i,n)?r:M(t(jg,i,n),t(z,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),vt=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},Gg=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(z,i,n)}),bn=v(function(e,r){return b(He,Gg(e),D,r)}),ba=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Le(r*255))+(","+k(Le(n*255))+(","+k(Le(a*255))+(","+(ae(i)+")")))))},ac=function(e){return t(ee," ",t(bn,Fr,$([e.ej?N("inset"):j,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bj)+"px"),N(ba(e.b7))])))},P$=function(e){return $([t(vt,L(p.ea)+":focus-within",t(bn,Fr,$([t(Ae,function(r){return t(re,"border-color",ba(r))},e.fW),t(Ae,function(r){return t(re,"background-color",ba(r))},e.fO),t(Ae,function(r){return t(re,"box-shadow",ac({a2:r.a2,b7:r.b7,ej:!1,eV:t(Ko,et,t(ci,et,r.eV)),bj:r.bj}))},e.hH),N(t(re,"outline","none"))]))),t(vt,L(p.fK)+":focus .focusable, "+(L(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(p.fK)+" .focusable-thumb"))),t(bn,Fr,$([t(Ae,function(r){return t(re,"border-color",ba(r))},e.fW),t(Ae,function(r){return t(re,"background-color",ba(r))},e.fO),t(Ae,function(r){return t(re,"box-shadow",ac({a2:r.a2,b7:r.b7,ej:!1,eV:t(Ko,et,t(ci,et,r.eV)),bj:r.bj}))},e.hH),N(t(re,"outline","none"))])))])},Or=function(e){return nn(tu(e))},M$=v(function(e,r){return t(Co,Fd(e),iu(r))}),tc=v(function(e,r){return{$:2,a:e,b:r}}),ic=function(e){return{$:6,a:e}},R=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),Hg=v(function(e,r){return{$:3,a:e,b:r}}),z$=$([0,1,2,3,4,5]),Wg=v(function(e,r){return r.b?b(He,z,r,e):e}),tr=function(e){return b(He,Wg,D,e)},Wn=v(function(e,r){return tr(t(J,e,r))}),Ug=function(e){switch(e){case 0:return L(p.gc);case 1:return L(p.ca);case 2:return L(p.cc);case 3:return L(p.bu);case 4:return L(p.cb);default:return L(p.ax)}},di=function(e){switch(e){case 0:return L(p.fH);case 1:return L(p.fA);case 2:return L(p.dZ);case 3:return L(p.dY);case 4:return L(p.fB);default:return L(p.fC)}},ft=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,Ug(n),i),t(R,L(p.fK),$([t(A,di(n),o)]))])};return ic(t(Wn,r,z$))},T$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,L(p.c_),$([t(h,"z-index","0"),t(R,L(p.fQ),$([t(h,"z-index","-1")]))])),t(A,L(p.hG),$([t(R,L(p.Y),$([t(A,L(p.c0),$([t(h,"flex-grow","0")])),t(A,L(p.dQ),$([t(h,"align-self","auto !important")]))]))])),t(R,L(p.c$),$([t(h,"height","auto")])),t(R,L(p.c0),$([t(h,"flex-grow","100000")])),t(R,L(p.dQ),$([t(h,"width","100%")])),t(R,L(p.fv),$([t(h,"width","100%")])),t(R,L(p.dP),$([t(h,"align-self","flex-start")])),ft(function(e){switch(e){case 0:return M($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return M($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return M($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return M($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return M($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return M($([t(R,L(p.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),Og=function(e){var r=function(n){return $([t(R,L(p.fK),$([t(A,di(n),e(n))]))])};return ic(t(Wn,r,z$))},Jg=function(){return $([0,1,2,3,4,5])}(),qg=$([t(pr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(pr,G(L(p.fK),G(L(p.hL),L(p.gN))),$([t(h,"display","block"),t(A,L(p.c0),$([t(R,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,L(p.dQ),$([t(R,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(pr,L(p.fK)+":focus",$([t(h,"outline","none")])),t(pr,L(p.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,G(L(p.fK),L(p.c0)),$([t(h,"height","100%"),t(R,L(p.c0),$([t(h,"height","100%")]))])),t(R,L(p.gP),$([t(A,L(p.bf),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(pr,L(p.bf),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,L(p.hL),T$),ic(function(e){return t(J,e,Jg)}(function(e){switch(e){case 0:return t(A,L(p.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(R,L(p.c0),$([t(h,"height","auto")])),t(R,L(p.dQ),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,L(p.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")])),t(R,L(p.c0),$([t(h,"height","auto")]))]));case 2:return t(A,L(p.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,L(p.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,L(p.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,L(p.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(pr,L(p.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,L(p.dR),$([t(h,"flex-wrap","wrap")])),t(A,L(p.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,L(p.gf),$([t(h,"cursor","pointer")])),t(A,L(p.gg),$([t(h,"cursor","text")])),t(A,L(p.hn),$([t(h,"pointer-events","none !important")])),t(A,L(p.b5),$([t(h,"pointer-events","auto !important")])),t(A,L(p.a$),$([t(h,"opacity","0")])),t(A,L(p.aU),$([t(h,"opacity","1")])),t(A,L(G(p.gK,p.a$))+":hover",$([t(h,"opacity","0")])),t(A,L(G(p.gK,p.aU))+":hover",$([t(h,"opacity","1")])),t(A,L(G(p.gx,p.a$))+":focus",$([t(h,"opacity","0")])),t(A,L(G(p.gx,p.aU))+":focus",$([t(h,"opacity","1")])),t(A,L(G(p.cM,p.a$))+":active",$([t(h,"opacity","0")])),t(A,L(G(p.cM,p.aU))+":active",$([t(h,"opacity","1")])),t(A,L(p.fj),$([t(h,"transition",t(ee,", ",t(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,L(p.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,L(p.hE),$([t(h,"overflow-x","auto"),t(A,L(p.af),$([t(h,"flex-shrink","1")]))])),t(A,L(p.hF),$([t(h,"overflow-y","auto"),t(A,L(p.aw),$([t(h,"flex-shrink","1")])),t(A,L(p.hL),$([t(h,"flex-shrink","1")]))])),t(A,L(p.f7),$([t(h,"overflow","hidden")])),t(A,L(p.f8),$([t(h,"overflow-x","hidden")])),t(A,L(p.f9),$([t(h,"overflow-y","hidden")])),t(A,L(p.dP),$([t(h,"width","auto")])),t(A,L(p.b2),$([t(h,"border-width","0")])),t(A,L(p.fX),$([t(h,"border-style","dashed")])),t(A,L(p.fY),$([t(h,"border-style","dotted")])),t(A,L(p.fZ),$([t(h,"border-style","solid")])),t(A,L(p.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,L(p.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,L(p.hL),T$),t(A,L(p.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(R,L(p.fK),$([t(h,"flex-basis","0%"),t(A,L(p.fu),$([t(h,"flex-basis","auto")])),t(A,L(p.et),$([t(h,"flex-basis","auto")]))])),t(R,L(p.c0),$([t(h,"align-self","stretch !important")])),t(R,L(p.ef),$([t(h,"align-self","stretch !important")])),t(R,L(p.dQ),$([t(h,"flex-grow","100000")])),t(R,L(p.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(R,"u:first-of-type."+p.fG,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+p.fE,$([t(h,"flex-grow","1"),t(R,L(p.fB),$([t(h,"margin-left","auto !important")]))])),t(R,"s:last-of-type."+p.fE,$([t(h,"flex-grow","1"),t(R,L(p.fB),$([t(h,"margin-right","auto !important")]))])),t(R,"s:only-of-type."+p.fE,$([t(h,"flex-grow","1"),t(R,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(p.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([t(h,"flex-grow","0")])),ft(function(e){switch(e){case 0:return M($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return M($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return M($([t(h,"justify-content","flex-end")]),D);case 3:return M($([t(h,"justify-content","flex-start")]),D);case 4:return M($([t(h,"justify-content","center")]),D);default:return M($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,L(p.hO),$([t(h,"justify-content","space-between")])),t(A,L(p.cj),$([t(h,"align-items","baseline")]))])),t(A,L(p.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(R,L(p.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,L(p.ee),$([t(h,"flex-basis","auto")]))])),t(R,L(p.c0),$([t(h,"flex-grow","100000")])),t(R,L(p.dQ),$([t(h,"width","100%")])),t(R,L(p.fv),$([t(h,"width","100%")])),t(R,L(p.dP),$([t(h,"align-self","flex-start")])),t(R,"u:first-of-type."+p.fD,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+p.fF,$([t(h,"flex-grow","1"),t(R,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(R,"s:last-of-type."+p.fF,$([t(h,"flex-grow","1"),t(R,L(p.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(R,"s:only-of-type."+p.fF,$([t(h,"flex-grow","1"),t(R,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(p.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([t(h,"flex-grow","0")])),ft(function(e){switch(e){case 0:return M($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return M($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return M($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return M($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return M($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return M($([t(h,"justify-content","center")]),D)}}),t(R,L(p.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,L(p.hO),$([t(h,"justify-content","space-between")]))])),t(A,L(p.gC),$([t(h,"display","-ms-grid"),t(R,".gp",$([t(R,L(p.fK),$([t(h,"width","100%")]))])),t(Hg,M("display","grid"),$([M("display","grid")])),Og(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,L(p.eY),$([t(h,"display","block"),t(R,L(p.fK+":first-child"),$([t(h,"margin","0 !important")])),t(R,L(p.fK+(di(3)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),t(R,L(p.fK+(di(2)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),ft(function(e){switch(e){case 0:return M(D,D);case 1:return M(D,D);case 2:return M(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return M(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return M(D,D);default:return M(D,D)}})])),t(A,L(p.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,L(p.gW),$([t(A,L(p.hL),$([t(h,"flex-basis","auto")]))])),t(A,L(p.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(R,L(p.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,L(p.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,L(p.c_),$([t(h,"z-index","0"),t(R,L(p.fQ),$([t(h,"z-index","-1")]))])),t(tc,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(tc,L(p.eZ),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(tc,L(p.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,L(p.fu),$([t(h,"display","inline-block")])),t(A,L(p.gP),$([t(h,"display","flex")])),t(A,L(p.fQ),$([t(h,"display","flex")])),t(A,L(p.fy),$([t(h,"display","flex")])),t(A,L(p.fR),$([t(h,"display","flex")])),t(A,L(p.hh),$([t(h,"display","flex")])),t(A,L(p.hg),$([t(h,"display","flex")])),t(R,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(R,L(p.af),$([t(h,"display","inline")])),t(R,L(p.aw),$([t(h,"display","inline-flex")])),t(R,L(p.gC),$([t(h,"display","inline-grid")])),ft(function(e){switch(e){case 0:return M(D,D);case 1:return M(D,D);case 2:return M(D,$([t(h,"float","right")]));case 3:return M(D,$([t(h,"float","left")]));case 4:return M(D,D);default:return M(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,L(p.ia),$([t(h,"font-weight","100")])),t(A,L(p.h1),$([t(h,"font-weight","200")])),t(A,L(p.h5),$([t(h,"font-weight","300")])),t(A,L(p.h7),$([t(h,"font-weight","400")])),t(A,L(p.h6),$([t(h,"font-weight","500")])),t(A,L(p.h9),$([t(h,"font-weight","600")])),t(A,L(p.fV),$([t(h,"font-weight","700")])),t(A,L(p.h0),$([t(h,"font-weight","800")])),t(A,L(p.h2),$([t(h,"font-weight","900")])),t(A,L(p.g2),$([t(h,"font-style","italic")])),t(A,L(p.hU),$([t(h,"text-decoration","line-through")])),t(A,L(p.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,G(L(p.ih),L(p.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,L(p.ib),$([t(h,"font-style","normal")])),t(A,L(p.h3),$([t(h,"text-align","justify")])),t(A,L(p.cG),$([t(h,"text-align","justify-all")])),t(A,L(p.h$),$([t(h,"text-align","center")])),t(A,L(p.h8),$([t(h,"text-align","right")])),t(A,L(p.h4),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),_n=function(e){return $([t(pr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(pr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},Yg=tr($([t(J,function(e){return t(pr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(Vr,0,6)),t(J,function(e){return t(pr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(Vr,8,32)),t(J,function(e){return t(pr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(Vr,0,24)),$([t(pr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(pr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),_n("zero"),_n("onum"),_n("liga"),_n("dlig"),_n("ordn"),_n("tnum"),_n("afrc"),_n("frac")])),Zg=`
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

`))),Kg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Xg=`
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
`,Qg=`
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
`,eh=`
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
`,rh="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(" { flex-basis: auto !important; } "+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(L(p.b9)+(" { flex-basis: auto !important; }}"+(Kg+(Xg+(eh+(Qg+Zg))))))))))))))),_a=function(e){return t(ee,"",e)},ya=v(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),xa=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Te(o,{aE:t(z,M(c,l),o.aE)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return Te(o,{G:t(z,{b6:`
}`,G:D,aE:d,ag:"@supports ("+(m+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return Te(o,{G:t(z,t(xa,t(ya,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,y=i.b;return Te(o,{G:t(z,t(xa,t(ya,n.ag+(" > "+_),""),y),o.G)});case 2:var _=i.a,y=i.b;return Te(o,{G:t(z,t(xa,t(ya,n.ag+(" "+_),""),y),o.G)});case 4:var w=i.a,S=i.b;return Te(o,{G:t(z,t(xa,t(ya,G(n.ag,w),""),S),o.G)});default:var x=i.a;return Te(o,{G:t(z,t(xa,t(ya,n.ag,""),x),o.G)})}});return b(He,a,n,r)}),nh=function(e){var r=function(i){return _a(t(J,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},a=function(i){var o=i;return G(n(o),_a(t(J,a,o.G)))};return _a(t(J,a,b(He,v(function(i,o){var c=i.a,l=i.b;return t(z,t(xa,t(ya,c,""),l),o)}),D,e)))},k$=G(rh,nh(G(qg,Yg))),yn=So,D$=function(e){var r=e.eS;switch(r){case 0:return b(Or,"div",D,$([b(Or,"style",D,$([yn(k$)]))]));case 1:return yn("");default:return b(Or,"elm-ui-static-rules",$([t(M$,"rules",Qo(k$))]),D)}},ah=v(function(e,r){return Qr(b(Ve,$d(e),cd(),r))}),th=function(e){return Qr(b(Ve,v(function(r,n){var a=r.a,i=r.b;return b(ud,a,i,n)}),ld(),e))},ih=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},oh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},ch=function(e){if(e.$===5){var r=e.a;return t(it,oh,r.fo)}else return!1},wa=v(function(e,r){return ce(e,r)<0?e:r}),mt=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Pe=O(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ve,mt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ve,mt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ve,mt(!1),"",a)+`
}`))])}case 0:var c=b(Ve,mt(!1),"",a);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(b(Ve,mt(!1),"",a)+`
}`))])}}),lh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},uh=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(J,lh,r.fo)))}else return j},$h=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,w=f.c,S=e.d,x="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),F="rotate3d("+(ae(_)+(", "+(ae(y)+(", "+(ae(w)+(", "+(ae(S)+"rad)")))))));return N(x+(" "+(C+(" "+F))))}},oc=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(Pe,e,n,a,i);case 13:var o=r.a,c=r.b;return P(Pe,e,n,"."+o,$([t(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,u=t(qe,0,t(wa,1,1-l));return P(Pe,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return P(Pe,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,s=r.b,d=t(ee,", ",t(bn,uh,s)),g=$([t(re,"font-family",t(ee,", ",t(J,ih,s))),t(re,"font-feature-settings",d),t(re,"font-variant",t(it,ch,s)?"small-caps":"normal")]);return P(Pe,e,n,"."+o,g);case 3:var f=r.a,c=r.b,_=r.c;return P(Pe,e,n,"."+f,$([t(re,c,_)]));case 4:var f=r.a,c=r.b,y=r.c;return P(Pe,e,n,"."+f,$([t(re,c,ba(y))]));case 5:var w=r.a,S=r.b,x=r.c,C=k(x)+"px",F=k(S)+"px",q="."+p.af,K="."+(p.dR+q),W="."+p.dZ,Y="."+p.eZ,Z="."+p.eY,B="."+p.dY,ne=ae(x/2)+"px",fe=ae(S/2)+"px",ye="."+p.aw,f="."+w,me="."+p.fK;return tr($([P(Pe,e,n,f+(q+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",F)])),P(Pe,e,n,f+(K+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),P(Pe,e,n,f+(ye+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,f+(Z+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,f+(Z+(" > "+B)),$([t(re,"margin-right",F)])),P(Pe,e,n,f+(Z+(" > "+W)),$([t(re,"margin-left",F)])),P(Pe,e,n,G(f,Y),$([t(re,"line-height","calc(1em + "+(k(x)+"px)"))])),P(Pe,e,n,"textarea"+(me+f),$([t(re,"line-height","calc(1em + "+(k(x)+"px)")),t(re,"height","calc(100% + "+(k(x)+"px)"))])),P(Pe,e,n,f+(Y+(" > "+B)),$([t(re,"margin-right",F)])),P(Pe,e,n,f+(Y+(" > "+W)),$([t(re,"margin-left",F)])),P(Pe,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(x/2|0))+"px")])),P(Pe,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(x/2|0))+"px")]))]));case 7:var w=r.a,se=r.b,W=r.c,xe=r.d,B=r.e,f="."+w;return P(Pe,e,n,f,$([t(re,"padding",ae(se)+("px "+(ae(W)+("px "+(ae(xe)+("px "+(ae(B)+"px")))))))]));case 6:var w=r.a,se=r.b,W=r.c,xe=r.d,B=r.e,f="."+w;return P(Pe,e,n,f,$([t(re,"border-width",k(se)+("px "+(k(W)+("px "+(k(xe)+("px "+(k(B)+"px")))))))]));case 8:var de=r.a,De=T(function(Ge,Ua,Xr){e:for(;;)switch(Xr.$){case 0:var as=Xr.a;return k(as)+"px";case 1:var zr=M(Ge,Ua);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,"max-content";zr.a;var Fn=zr.b.a;return"minmax(max-content, "+(k(Fn)+"px)")}else if(zr.b.$===1){var In=zr.a.a;return zr.b,"minmax("+(k(In)+"px, max-content)")}else{var In=zr.a.a,Fn=zr.b.a;return"minmax("+(k(In)+("px, "+(k(Fn)+"px)")))}case 2:var Wl=Xr.a,Tr=M(Ge,Ua);if(Tr.a.$===1){if(Tr.b.$===1)return Tr.a,Tr.b,k(Wl)+"fr";Tr.a;var Fn=Tr.b.a;return"minmax(max-content, "+(k(Fn)+"px)")}else if(Tr.b.$===1){var In=Tr.a.a;return Tr.b,"minmax("+(k(In)+("px, "+(k(Wl)+"frfr)")))}else{var In=Tr.a.a,Fn=Tr.b.a;return"minmax("+(k(In)+("px, "+(k(Fn)+"px)")))}case 3:var co=Xr.a,lo=Xr.b,uo=N(co),$o=Ua,vo=lo;Ge=uo,Ua=$o,Xr=vo;continue e;default:var co=Xr.a,lo=Xr.b,uo=Ge,$o=N(co),vo=lo;Ge=uo,Ua=$o,Xr=vo;continue e}}),ze=function(Ge){return b(De,j,j,Ge)};ze(de.hP.a);var Ze=ze(de.hP.b),An=function(Ge){return"grid-template-rows: "+(Ge+";")}(t(ee," ",t(J,ze,de.hB))),Ha=function(Ge){return"-ms-grid-rows: "+(Ge+";")}(t(ee,Ze,t(J,ze,de.ak))),Zr=function(Ge){return"-ms-grid-columns: "+(Ge+";")}(t(ee,Ze,t(J,ze,de.ak))),Kr="grid-row-gap:"+(ze(de.hP.b)+";"),ua="grid-column-gap:"+(ze(de.hP.a)+";"),Wt=function(Ge){return"grid-template-columns: "+(Ge+";")}(t(ee," ",t(J,ze,de.ak))),f=".grid-rows-"+(t(ee,"-",t(J,Ur,de.hB))+("-cols-"+(t(ee,"-",t(J,Ur,de.ak))+("-space-x-"+(Ur(de.hP.a)+("-space-y-"+Ur(de.hP.b))))))),Wa=f+("{"+(Wt+(An+(ua+(Kr+"}"))))),io="@supports (display:grid) {"+(Wa+"}"),oo=f+("{"+(Zr+(Ha+"}")));return $([oo,io]);case 9:var rr=r.a,Xm=t(ee," ",$(["-ms-grid-row: "+(k(rr.af)+";"),"-ms-grid-row-span: "+(k(rr.gH)+";"),"-ms-grid-column: "+(k(rr.ga)+";"),"-ms-grid-column-span: "+(k(rr.im)+";")])),Qm=t(ee," ",$(["grid-row: "+(k(rr.af)+(" / "+(k(rr.af+rr.gH)+";"))),"grid-column: "+(k(rr.ga)+(" / "+(k(rr.ga+rr.im)+";")))])),f=".grid-pos-"+(k(rr.af)+("-"+(k(rr.ga)+("-"+(k(rr.im)+("-"+k(rr.gH))))))),Wa=f+("{"+(Qm+"}")),io="@supports (display:grid) {"+(Wa+"}"),oo=f+("{"+(Xm+"}"));return $([oo,io]);case 11:var f=r.a,es=r.b,rs=function(Ge){return b(oc,e,Ge,N(f))};return t(Wn,rs,es);default:var Br=r.a,_=$h(Br),f=nc(Br),Ut=M(f,_);if(!Ut.a.$&&!Ut.b.$){var w=Ut.a.a,ns=Ut.b.a;return P(Pe,e,n,"."+w,$([t(re,"transform",ns)]))}else return D}}),vh=v(function(e,r){return th(t(J,function(n){var a=b(oc,e,n,j);return M($t(n),t(ah,Qo,a))},r))}),pi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(J,n,r))+"}"))}),V$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(pi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(pi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),fh=T(function(e,r,n){var a=r.a,i=r.b,o=le(e,n)?e:n+(" ."+e);return t(ee," ",G(b(V$,o,p.hM,i),b(V$,o,p.gy,a)))}),mh=v(function(e,r){var n=le(e,r)?e:r+(" ."+e);return t(ee," ",$([t(pi,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([M("line-height","1")])),t(pi,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([M("vertical-align","0"),M("line-height","1")]))]))}),A$=T(function(e,r,n){return{gH:r/e,bj:e,fp:n}}),F$=v(function(e,r){return b(He,v(function(n,a){return e(n)?t(z,n,a):a}),D,r)}),sh=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ve,qe,r,n))}else return j},I$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ve,wa,r,n))}else return j},E$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(Se,e.gk,I$(r)),a=t(Se,e.fP,I$(t(F$,function(m){return!le(m,n)},r))),i=t(Se,e.f1,sh(r)),o=1/(i-a),c=1-i,l=1/(i-n),u=1-i;return{f1:b(A$,o,i-a,c),ec:b(A$,l,i-n,u)}},B$=function(e){return M($([M("display","block")]),$([M("display","inline-block"),M("line-height",ae(e.gH)),M("vertical-align",ae(e.fp)+"em"),M("font-size",ae(e.bj)+"em")]))},dh=function(e){return b(Ve,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return N(M(B$(function(c){return c.ec}(E$(o))),B$(function(c){return c.f1}(E$(o)))))}else return n;else return n}),j,e)},ph=function(e){var r=function(o){if(o.$===4){var c=o.b;return N("@import url('"+(c+"');"))}else return j},n=function(o){o.a;var c=o.b,l=t(ee,`
`,t(bn,r,c));return l},a=t(J,Wu,e),i=function(o){var c=o.a,l=o.b,u=dh(l);if(u.$===1)return t(ee,"",t(J,mh(c),a));var m=u.a;return t(ee,"",t(J,t(fh,c,m),a))};return G(t(ee,`
`,t(J,n,e)),t(ee,`
`,t(J,i,e)))},gh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(M(r,n))}else return j},j$=v(function(e,r){var n=v(function(c,l){return{cC:G(l.cC,b(oc,e,c,j)),bU:function(){var u=gh(c);if(u.$===1)return l.bU;var m=u.a;return t(z,m,l.bU)}()}}),a=b(Ve,n,{cC:D,bU:D},r),i=a.bU,o=a.cC;return G(ph(i),_a(o))}),R$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Or,"div",D,$([b(Or,"style",D,$([yn(t(j$,e,r))]))]));case 1:return b(Or,"div",D,$([b(Or,"style",D,$([yn(t(j$,e,r))]))]));default:return b(Or,"elm-ui-rules",$([t(M$,"rules",t(vh,e,r))]),D)}}),N$=O(function(e,r,n,a){var i=t(R$,r,b(Ve,L$,M(C$,P$(r.gx)),n).b);return e?t(z,M("static-stylesheet",D$(r)),t(z,M("dynamic-stylesheet",i),a)):t(z,M("dynamic-stylesheet",i),a)}),G$=O(function(e,r,n,a){var i=t(R$,r,b(Ve,L$,M(C$,P$(r.gx)),n).b);return e?t(z,D$(r),t(z,i,a)):t(z,i,a)}),cc=$e(45),st=$e(37),H$=function(e){return zd(tu(e))},hh=nn("p"),ir=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return le(o&a,o)}else{var i=e.a;return le(i&n,i)}}),W$=nn("s"),U$=nn("u"),lc=$e(44),dt=$e(39),gi=fr(function(e,r,n,a,i,o){var c=v(function(u,m){if(a.$===1){var s=a.a;return b(H$,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return P(N$,!1,g,f,s);default:var g=i.a,f=i.b;return P(N$,!0,g,f,s)}}())}else{var d=a.a;return t(function(){switch(u){case"div":return ha;case"p":return hh;default:return Or(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return P(G$,!1,g,f,d);default:var g=i.a,f=i.b;return P(G$,!0,g,f,d)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var u=r.a;return t(c,u,n);default:var u=r.a,m=r.b;return b(Or,u,n,$([t(c,m,$([Cr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return t(ir,dt,e)&&!t(ir,lc,e)?l:t(ir,x$,e)?t(U$,$([Cr(t(ee," ",$([p.fK,p.hL,p.b9,p.ax,p.fG])))]),$([l])):t(ir,w$,e)?t(W$,$([Cr(t(ee," ",$([p.fK,p.hL,p.b9,p.ax,p.fE])))]),$([l])):l;case 1:return t(ir,st,e)&&!t(ir,cc,e)?l:t(ir,S$,e)?t(W$,$([Cr(t(ee," ",$([p.fK,p.hL,p.b9,p.fF])))]),$([l])):t(ir,y$,e)?t(U$,$([Cr(t(ee," ",$([p.fK,p.hL,p.b9,p.fD])))]),$([l])):l;default:return l}}),xn=function(e){return!e.b},uc=yn,bh=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),pt=function(e){return t(ha,$([Cr(bh)]),$([uc(e)]))},_h=p.fK+(" "+(p.Y+(" "+(p.dQ+(" "+p.c0))))),O$=function(e){return t(ha,$([Cr(_h)]),$([uc(e)]))},yh=T(function(e,r,n){var a=v(function(_,y){var w=_.a,S=_.b,x=y.a,C=y.b;switch(S.$){case 0:var F=S.a;return le(e,si),M(t(z,M(w,F(e)),x),C);case 1:var q=S.a;return le(e,si),M(t(z,M(w,t(q.gL,Hn,e)),x),xn(C)?q.hV:G(q.hV,C));case 2:var K=S.a;return M(t(z,M(w,le(e,dr)?O$(K):pt(K)),x),C);default:return M(x,C)}}),i=v(function(_,y){var w=y.a,S=y.b;switch(_.$){case 0:var x=_.a;return le(e,si),M(t(z,x(e),w),S);case 1:var C=_.a;return le(e,si),M(t(z,t(C.gL,Hn,e),w),xn(S)?C.hV:G(C.hV,S));case 2:var F=_.a;return M(t(z,le(e,dr)?O$(F):pt(F),w),S);default:return M(w,S)}});if(r.$===1){var o=r.a,c=b(He,a,M(D,D),o),l=c.a,u=c.b,m=xn(u)?n.hV:G(n.hV,u);if(m.b){var s=m;return ec({gL:P(gi,n.aR,n.aT,n.aJ,h$(b(_$,"nearby-element-pls",l,n.aM))),hV:s})}else return lt(V(gi,n.aR,n.aT,n.aJ,h$(b(_$,"nearby-element-pls",l,n.aM)),Hn))}else{var d=r.a,g=b(He,i,M(D,D),d),f=g.a,u=g.b,m=xn(u)?n.hV:G(n.hV,u);if(m.b){var s=m;return ec({gL:P(gi,n.aR,n.aT,n.aJ,Ye(t(b$,f,n.aM))),hV:s})}else return lt(V(gi,n.aR,n.aT,n.aJ,Ye(t(b$,f,n.aM)),Hn))}}),or=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),xh=function(e){return{$:10,a:e}},hi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(hi,n,o|a)}else{var i=e.a;return t(hi,i|n,a)}}),J$=function(e){return{$:1,a:e}},bi=v(function(e,r){return{$:3,a:e,b:r}}),q$=function(e){return{$:2,a:e}},wh=v(function(e,r){return t(ha,$([Cr(function(){switch(e){case 0:return t(ee," ",$([p.bf,p.hL,p.fy]));case 1:return t(ee," ",$([p.bf,p.hL,p.fR]));case 2:return t(ee," ",$([p.bf,p.hL,p.hh]));case 3:return t(ee," ",$([p.bf,p.hL,p.hg]));case 4:return t(ee," ",$([p.bf,p.hL,p.gP]));default:return t(ee," ",$([p.bf,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return yn("");case 2:var n=r.a;return pt(n);case 0:var a=r.a;return a(dr);default:var i=r.a;return t(i.gL,Hn,dr)}}()]))}),Sh=T(function(e,r,n){var a=t(wh,e,r);switch(n.$){case 0:return e===5?J$($([a])):q$($([a]));case 1:var i=n.a;return e===5?J$(t(z,a,i)):t(bi,i,$([a]));case 2:var o=n.a;return e===5?t(bi,$([a]),o):q$(t(z,a,o));default:var i=n.a,o=n.b;return e===5?t(bi,t(z,a,i),o):t(bi,i,t(z,a,o))}}),Y$=v(function(e,r){return{$:2,a:e,b:r}}),wn=function(e){return{$:1,a:e}},Un=v(function(e,r){switch(r.$){case 0:return wn(e);case 1:var n=r.a;return t(Y$,n,e);default:var a=r.a,i=r.b;return t(Y$,a,i)}}),Ch=function(e){switch(e){case 0:return p.cN+(" "+p.dY);case 2:return p.cN+(" "+p.dZ);default:return p.cN+(" "+p.fB)}},Lh=function(e){switch(e){case 0:return p.cO+(" "+p.fH);case 2:return p.cO+(" "+p.fA);default:return p.cO+(" "+p.fC)}},gt=v(function(e,r){return t(kr,Ad(e),iu(r))}),Jr=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Sn=function(e){return{$:1,a:e}},Ph=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Sn(I(i,0,0));case 1:var o=r.a;return Sn(I(0,o,0));case 2:var c=r.a;return Sn(I(0,0,c));case 3:var n=r.a;return Sn(n);case 4:var n=r.a,f=r.b;return P(Jr,I(0,0,0),I(1,1,1),n,f);default:var n=r.a;return P(Jr,I(0,0,0),n,I(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,c=a.c;switch(r.$){case 0:var l=r.a;return Sn(I(l,o,c));case 1:var u=r.a;return Sn(I(i,u,c));case 2:var m=r.a;return Sn(I(i,o,m));case 3:var n=r.a;return Sn(n);case 4:var n=r.a,f=r.b;return P(Jr,a,I(1,1,1),n,f);default:var s=r.a;return P(Jr,a,s,I(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,c=a.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return P(Jr,I(l,o,c),d,g,f);case 1:var u=r.a;return P(Jr,I(i,u,c),d,g,f);case 2:var m=r.a;return P(Jr,I(i,o,m),d,g,f);case 3:var _=r.a;return P(Jr,_,d,g,f);case 4:var y=r.a,w=r.b;return P(Jr,a,d,y,w);default:var S=r.a;return P(Jr,a,S,g,f)}}}),Sa=$e(7),Z$=$e(36),K$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(hi,n|i,a|o)}),tn=t(hi,0,0),$c=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return I(tn,p.ee+(" "+a),$([b(or,a,"height",n+"px")]));case 1:return I(t(oe,Z$,tn),p.c$,D);case 2:var i=e.a;return i===1?I(t(oe,st,tn),p.c0,D):I(t(oe,st,tn),p.ef+(" height-fill-"+k(i)),$([b(or,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+k(o),u=b(or,l,"min-height",k(o)+"px !important"),m=$c(c),s=m.a,d=m.b,g=m.c;return I(t(oe,cc,s),l+(" "+d),t(z,u,g));default:var f=e.a,c=e.b,l="max-height-"+k(f),u=b(or,l,"max-height",k(f)+"px"),_=$c(c),s=_.a,d=_.b,g=_.c;return I(t(oe,cc,s),l+(" "+d),t(z,u,g))}},X$=$e(38),vc=function(e){switch(e.$){case 0:var r=e.a;return I(tn,p.fu+(" width-px-"+k(r)),$([b(or,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return I(t(oe,X$,tn),p.dP,D);case 2:var n=e.a;return n===1?I(t(oe,dt,tn),p.dQ,D):I(t(oe,dt,tn),p.fv+(" width-fill-"+k(n)),$([b(or,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),c=b(or,o,"min-width",k(a)+"px"),l=vc(i),u=l.a,m=l.b,s=l.c;return I(t(oe,lc,u),o+(" "+m),t(z,c,s));default:var d=e.a,i=e.b,o="max-width-"+k(d),c=b(or,o,"max-width",k(d)+"px"),g=vc(i),u=g.a,m=g.b,s=g.c;return I(t(oe,lc,u),o+(" "+m),t(z,c,s))}},_i=$e(27),Mh=v(function(e,r){if(le(e,_i))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return le(i,c)&&le(i,o)&&le(i,l)&&i>=0&&i<=24;default:return!1}}),Ca=$e(6),Q$=$e(30),ev=$e(29),zh=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var s=l.a,d=l.b;switch(s.$){case 0:var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 3:var F=s.a,q=s.b;if(t(ir,F,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=q+(" "+e),f=r,_=t(oe,F,n),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 1:var K=s.a,g=e,f=r,_=n,y=a,w=i,S=t(z,K,o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 4:var F=s.a,W=s.b;if(t(ir,F,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else if(t(Mh,F,W)){var g=$t(W)+(" "+e),f=r,_=t(oe,F,n),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=$t(W)+(" "+e),f=r,_=t(oe,F,n),y=a,w=t(z,W,i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 10:var F=s.a,Y=s.b,g=e,f=r,_=t(oe,F,n),y=t(Ph,a,Y),w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 7:var Z=s.a;if(t(ir,Ca,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else switch(Z.$){case 0:var B=Z.a,g=p.fu+(" width-px-"+k(B))+(" "+e),f=r,_=t(oe,Ca,n),y=a,w=t(z,b(or,"width-px-"+k(B),"width",k(B)+"px"),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 1:var g=e+(" "+p.dP),f=r,_=t(oe,X$,t(oe,Ca,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 2:var ne=Z.a;if(ne===1){var g=e+(" "+p.dQ),f=r,_=t(oe,dt,t(oe,Ca,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=e+(" "+(p.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,dt,t(oe,Ca,n)),y=a,w=t(z,b(or,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}default:var fe=vc(Z),ye=fe.a,me=fe.b,Kr=fe.c,g=e+(" "+me),f=r,_=t(K$,ye,t(oe,Ca,n)),y=a,w=G(Kr,i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 8:var se=s.a;if(t(ir,Sa,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else switch(se.$){case 0:var B=se.a,xe=k(B)+"px",de="height-px-"+xe,g=p.ee+(" "+(de+(" "+e))),f=r,_=t(oe,Sa,n),y=a,w=t(z,b(or,de,"height ",xe),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 1:var g=p.c$+(" "+e),f=r,_=t(oe,Z$,t(oe,Sa,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.c0+(" "+e),f=r,_=t(oe,st,t(oe,Sa,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=e+(" "+(p.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,st,t(oe,Sa,n)),y=a,w=t(z,b(or,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}default:var De=$c(se),ye=De.a,me=De.b,Kr=De.c,g=e+(" "+me),f=r,_=t(K$,ye,t(oe,Sa,n)),y=a,w=G(Kr,i),S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 2:var ze=s.a;switch(ze.$){case 0:var g=e,f=t(Un,"main",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 1:var g=e,f=t(Un,"nav",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 2:var g=e,f=t(Un,"footer",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 3:var g=e,f=t(Un,"aside",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 4:var Ze=ze.a;if(Ze<=1){var g=e,f=t(Un,"h1",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else if(Ze<7){var g=e,f=t(Un,"h"+k(Ze),r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=e,f=t(Un,"h6",r),_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 9:var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 8:var g=e,f=r,_=n,y=a,w=i,S=t(z,t(gt,"role","button"),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 5:var An=ze.a,g=e,f=r,_=n,y=a,w=i,S=t(z,t(gt,"aria-label",An),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 6:var g=e,f=r,_=n,y=a,w=i,S=t(z,t(gt,"aria-live","polite"),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;default:var g=e,f=r,_=n,y=a,w=i,S=t(z,t(gt,"aria-live","assertive"),o),x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}case 9:var Ha=s.a,Zr=s.b,Kr=function(){switch(Zr.$){case 3:return i;case 2:return Zr.a,i;case 0:return Zr.a,i;default:var Wa=Zr.a;return G(i,Wa.hV)}}(),g=e,f=r,_=n,y=a,w=Kr,S=o,x=b(Sh,Ha,Zr,c),C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e;case 6:var ua=s.a;if(t(ir,Q$,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=Ch(ua)+(" "+e),f=r,_=function(Br){switch(ua){case 1:return t(oe,w$,Br);case 2:return t(oe,x$,Br);default:return Br}}(t(oe,Q$,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}default:var Wt=s.a;if(t(ir,ev,n)){var g=e,f=r,_=n,y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}else{var g=Lh(Wt)+(" "+e),f=r,_=function(Br){switch(Wt){case 1:return t(oe,S$,Br);case 2:return t(oe,y$,Br);default:return Br}}(t(oe,ev,n)),y=a,w=i,S=o,x=c,C=d;e=g,r=f,n=_,a=y,i=w,o=S,c=x,l=C;continue e}}}else{var u=nc(a);if(u.$===1)return{aJ:t(z,Cr(e),o),aM:c,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(z,Cr(e+(" "+m)),o),aM:c,aR:n,aT:r,hV:t(z,xh(a),i)}}}),Th={$:0},kh=Th,cr=O(function(e,r,n,a){return b(yh,e,a,Oa(zh,Ig(e),r,tn,kh,D,D,zg,nr(n)))}),on=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Dh={fO:j,fW:j,hH:N({a2:0,b7:P(on,155/255,203/255,1,1),eV:M(0,0),bj:3})},Vh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gK;return c.$===1?Te(i,{gK:N(o)}):i;case 1:var l=a.a,u=i.gx;return u.$===1?Te(i,{gx:N(l)}):i;default:var m=a.a,s=i.eS;return s.$===1?Te(i,{eS:N(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return Dh;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(He,r,{gx:j,gK:j,eS:j},e))},Ah=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(dr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),dr);case 2:var i=r.a;return pt(i);default:return pt("")}}),Fh=T(function(e,r,n){var a=Vh(e),i=function(){var o=a.eS;return o===1?g$(a):Pg(a)}();return t(Ah,i,P(cr,dr,Gn,r,Ye($([n]))))}),ht=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),rv=v(function(e,r){return{$:1,a:e,b:r}}),nv=function(e){return{$:2,a:e}},Ih={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),fc=function(e){return{$:3,a:e}},av=$e(8),tv=$e(14),iv=$e(5),ov=$e(4),La=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return ke(r)+("-"+(ke(n)+("-"+(ke(a)+("-"+ke(i))))))},yi=js,mc=Bs,cv=v(function(e,r){return G(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",mc(yi(n)));case 4:var n=e.a;return e.b,t(ee,"-",mc(yi(n)));default:var n=e.a.hc;return t(ee,"-",mc(yi(n)))}}())}),Eh=function(){var e=$([fc("Open Sans"),fc("Helvetica"),fc("Verdana"),Ih]);return $([t(ge,av,b(ht,"bg-"+La(P(on,1,1,1,0)),"background-color",P(on,1,1,1,0))),t(ge,tv,b(ht,"fc-"+La(P(on,0,0,0,1)),"color",P(on,0,0,0,1))),t(ge,ov,nv(20)),t(ge,iv,t(rv,b(Ve,cv,"font-",e),e))])}(),Bh=T(function(e,r,n){var a=e.hl;return b(Fh,a,t(z,sr(t(ee," ",$([p.hA,p.fK,p.hL]))),G(Eh,r)),n)}),lv={$:3},uv=function(e){return{$:2,a:e}},sc=kd,$v=v(function(e,r){switch(r.$){case 1:var n=r.a;return ec({gL:v(function(o,c){return t(sc,e,t(n.gL,o,c))}),hV:n.hV});case 0:var a=r.a;return lt(t(ut,sc(e),a));case 2:var i=r.a;return uv(i);default:return lv}}),dc=$v,jh=sc,Rh=function(e){return{$:0,a:e}},we=Rh,Nh=Vd,gr=Nh,vv={$:1},xi=function(e){return{$:5,a:e}},fv=xi(0),Ir=T(function(e,r,n){return P(on,e/255,r/255,n/255,1)}),mv=b(Ir,0,0,0),Gh=kr("d"),Hh=kr("fill"),Wh=kr("height"),sv=nu("http://www.w3.org/2000/svg"),Uh=sv("path"),Oh=sv("svg"),Jh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},qh=function(e){var r=Jh(e);return"rgba("+(k(Le(r.hu*255))+(","+k(Le(r.gA*255))+(","+k(Le(r.fS*255))+(","+ae(r.fI)+")"))))},Yh=kr("viewBox"),Zh=kr("width"),Pa=T(function(e,r,n){return t(Oh,$([Yh("0 0 100 100"),Zh(k(e)),Wh(k(e))]),$([t(Uh,$([Gh(n),Hh(qh(r))]),D)]))}),Kh={$:1},lr=Kh,dv=function(e){return{$:7,a:e}},Q=dv,he=v(function(e,r){return P(cr,dr,Gn,t(z,Q(lr),t(z,pe(lr),e)),Ye($([r])))}),pv=function(e){return{$:2,a:e}},ve=pv(1),On={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ma={c4:260,bF:54},cn=function(e){return t(ge,av,b(ht,"bg-"+La(e),"background-color",e))},Xh=$e(28),Cn=function(e){return t(ge,Xh,b(ht,"bc-"+La(e),"border-color",e))},wi=1,Lr=v(function(e,r){return P(cr,wi,Gn,t(z,sr(p.gc+(" "+p.bu)),t(z,pe(lr),t(z,Q(lr),e))),Ye(r))}),Qh=b(Ir,83,83,83),gv=O(function(e,r,n,a){return P(on,e/255,r/255,n/255,a)}),Si=P(gv,56,56,56,.25),Re=lv,bt=Be(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),_t=$e(2),Jn=function(e){var r=e;return t(ge,_t,V(bt,"p-"+k(e),r,r,r,r))},hv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),bv=$e(3),_v=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Ln=function(e){return t(ge,bv,b(hv,t(_v,e,e),e,e))},e3=P(gv,0,0,0,0),r3=function(e){return{$:4,a:e}},pc=0,Pn=v(function(e,r){return P(cr,pc,Gn,t(z,sr(p.bu+(" "+p.ax)),t(z,Q(lr),t(z,pe(lr),e))),Ye(r))}),n3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(g$,{gx:{fO:j,fW:j,hH:j},gK:1,eS:0},n.hV));case 2:var a=e.a;return mi(yn(a));default:return mi(yn(""))}},a3=v(function(e,r){return n3(e(r))}),t3=Dd,i3=v(function(e,r){return lt(b(t3,a3,e,r))}),Mn=function(e){return t(ge,tv,b(ht,"fc-"+La(e),"color",e))},gc=b(Ir,195,195,195),zn=v(function(e,r){return{$:3,a:e,b:r}}),yv=$e(13),o3=t(zn,yv,p.h7),c3=$e(20),xv=t(zn,c3,p.hF),qn=function(e){return t(ge,ov,nv(e))},hc=t(zn,yv,p.fV),bc=v(function(e,r){if(r.$===-2)return Wr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return V(te,n,a,t(e,a,i),t(bc,e,o),t(bc,e,c))}),wv=v(function(e,r){if(le(e,r)){var n=e;return t(ge,_t,V(bt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,_t,V(bt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),Tn=function(e){return uv(e)},l3=function(e){return b(Ao,T(function(r,n,a){return t(z,n,a)}),D,e)},u3=v(function(e,r){return{$:3,a:e,b:r}}),$3=v(function(e,r){return{$:2,a:e,b:r}}),v3=v(function(e,r){return{$:0,a:e,b:r}}),f3=v(function(e,r){return{$:1,a:e,b:r}}),yt=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),m3=P(yt,0/255,0/255,0/255,1),Ci=function(e){return{$:6,a:e}},s3=Ci(0),Li=function(e){return{$:2,a:e}},d3={$:6},Sv=Li(d3),Cv=T(function(e,r,n){if(r.$===1)return r.a,P(cr,wi,wn("label"),e,Ye($([n])));var a=r.a,i=r.b,o=r.c,c=P(cr,dr,Gn,i,Ye($([o])));switch(a){case 2:return P(cr,wi,wn("label"),t(z,sr(p.cj),e),Ye($([c,n])));case 3:return P(cr,wi,wn("label"),t(z,sr(p.cj),e),Ye($([n,c])));case 0:return P(cr,pc,wn("label"),t(z,sr(p.cj),e),Ye($([n,c])));default:return P(cr,pc,wn("label"),t(z,sr(p.cj),e),Ye($([c,n])))}}),_c=gt,ln=xi(1),Lv="Enter",p3=function(e){return{$:5,a:e}},Pv=function(e){if(e.$===1){var r=e.a;return Li(p3(r))}else return Nn},Mv=function(e){return e.$===1},g3=function(e){return{$:0,a:e}},yc=au,h3=v(function(e,r){return t(yc,e,g3(r))}),zv=function(e){return t(h3,"click",ar(e))},b3=Zs,_3=function(e){return{$:2,a:e}},y3=v(function(e,r){return t(yc,e,_3(r))}),Tv=function(e){var r=function(a){var i=e(a);if(i.$===1)return b3("No key matched");var o=i.a;return ar(o)},n=t(U,r,t(H,"key",ga));return Ce(t(y3,"keydown",t(ri,function(a){return M(a,!0)},n)))},x3=$e(21),Yn=t(zn,x3,p.gf),kv=" ",Dv=function(e){return t(kr,"tabIndex",k(e))},w3=t(ut,Ce,Dv),S3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bJ,c=G($([Mv(n)?Nn:Ln(6),Ce(zv(o(!i))),Sv,Tv(function(l){return le(l,Lv)||le(l,kv)?N(o(!i)):j}),w3(0),Yn,s3,Q(ve)]),e);return b(Cv,t(z,Ce(t(_c,"role","checkbox")),t(z,Ce(t(_c,"aria-checked",i?"true":"false")),t(z,Pv(n),c))),n,P(cr,dr,Gn,$([ln,pe(ve),Q(lr)]),Ye($([a(i)]))))}),C3=T(function(e,r,n){return G(t(ot,e-jn(n),li(r)),n)}),Pi=gs,Vv=function(e){var r=function(n){return n<10?k(n):li(i$(87+n))};return e<16?r(e):G(Vv(e/16|0),r(t(Pi,16,e)))},L3=t(We,Vv,t(C3,2,"0")),xc=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},P3=function(e){var r=xc(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(z,"#",t(J,t(We,Le,L3),$([n*255,a*255,i*255]))))},wc=$e(12),Av=t(zn,wc,p.h$),Sc=Ci(1),kn=hs,hr=function(e){return e*kn/180},M3=function(e){return{$:1,a:e}},Cc=v(function(e,r){return{$:10,a:e,b:r}}),z3=$e(26),T3=function(e){return t(Cc,z3,M3(-e))},za=T(function(e,r,n){return P(on,e,r,n,1)}),k3=on,D3=v(function(e,r){return{$:4,a:e,b:r}}),V3=$e(24),A3=function(e){return t(Cc,V3,t(D3,I(0,0,1),e))},F3=$e(17),Zn=function(e){return t(ge,F3,b(or,"br-"+k(e),"border-radius",k(e)+"px"))},I3=function(e){return _a($([e.ej?"box-inset":"box-",ke(e.eV.a)+"px",ke(e.eV.b)+"px",ke(e.a2)+"px",ke(e.bj)+"px",La(e.b7)]))},E3=$e(19),B3=function(e){var r={a2:e.a2,b7:e.b7,ej:!1,eV:e.eV,bj:e.bj};return t(ge,E3,b(or,I3(r),"box-shadow",ac(r)))},Fv=v(function(e,r){return{$:12,a:e,b:r}}),Iv=$e(0),j3=function(e){return e?t(ge,Iv,t(Fv,"transparent",1)):t(ge,Iv,t(Fv,"visible",0))},Lc=b(za,1,1,1),Pc=Be(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),Mi=function(e){return t(ge,_i,V(Pc,"b-"+k(e),e,e,e,e))},R3=v(function(e,r){return t(ge,_i,V(Pc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),xt=function(e){var r=e.b3,n=e.cI,a=e.g4,i=e.hx;return le(n,r)&&le(a,i)?le(n,i)?Mi(n):t(R3,a,n):t(ge,_i,V(Pc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},N3=function(e){return t(he,$([sr("focusable"),Q(we(14)),pe(we(14)),Mn(Lc),ln,qn(9),Av,Zn(3),Cn(e?b(za,59/255,153/255,252/255):b(za,211/255,211/255,211/255)),B3({a2:1,b7:e?P(k3,238/255,238/255,238/255,0):b(za,238/255,238/255,238/255),eV:M(0,0),bj:1}),cn(e?b(za,59/255,153/255,252/255):Lc),Mi(e?0:1),Xo(t(he,$([Cn(Lc),pe(we(6)),Q(we(9)),A3(hr(-45)),Sc,ln,T3(1),j3(!e),xt({b3:2,g4:2,hx:0,cI:0})]),Re))]),Re)},G3=Sr("htmlFor"),Mc=v(function(e,r){if(r.$)return j;var n=r.a;return e(n)}),zi=v(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return e(n)}}),Ev=O(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),H3=op,W3=Os,U3=v(function(e,r){if(r.$)return Qe(e);var n=r.a;return Fe(n)}),O3=ip,J3=function(e){return t(O3,{f2:!1,hb:!1},e)},zc=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return j},q3=v(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return Fe(e(n))}}),Y3=function(e){return{$:2,a:e}},Z3=function(e){return{$:0,a:e}},K3=function(e){return{$:1,a:e}},Tc=v(function(e,r){return Hr(r)-Hr(e)}),kc=T(function(e,r,n){var a=Hr(n);return ce(Hr(e),a)<1&&ce(a,Hr(r))<1}),X3=v(function(e,r){var n=function(i){return ce(i,e)<0?Fe(i):Qe(K3(r))},a=b(kc,"0","9",r)?Fe(t(Tc,"0",r)):b(kc,"a","z",r)?Fe(10+t(Tc,"a",r)):b(kc,"A","Z",r)?Fe(10+t(Tc,"A",r)):Qe(Z3(r));return t(zi,n,a)}),Bv=v(function(e,r){var n=ma(r);if(n.$===1)return Fe(0);var a=n.a,i=a.a,o=a.b;return t(zi,function(c){return t(zi,function(l){return Fe(c+l*e)},t(Bv,e,o))},t(X3,e,i))}),Q3=v(function(e,r){return 2<=e&&e<=36?t(Bv,e,Yo(r)):Qe(Y3(e))}),eb=Q3(16),rb=T(function(e,r,n){return P(yt,e,r,n,1)}),nb=O(function(e,r,n,a){return P(yt,e,r,n,a)}),wt=ps,ab=v(function(e,r){var n=t(wt,10,e);return Le(r*n)/n}),tb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=t$(n);if(a.b&&!a.b.b){var i=a.a;return W3($([i,i]))}else return n};return t(We,yi,t(We,function(n){return t(Ae,function(a){return b(H3,1,a,n)},J3(e))},t(We,Mc(zc),t(We,Ae(function(n){return n.hW}),t(We,Ae(bn(Fr)),t(We,U3("Parsing hex regex failed"),zi(function(n){var a=t(J,t(We,r,t(We,eb,q3(et))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,u=l.a.a,m=l.b,s=m.a.a;return Fe(P(nb,i/255,c/255,u/255,t(ab,2,s/255)))}else break e;else{var i=a.a.a,d=a.b,c=d.a.a,g=d.b,u=g.a.a;return Fe(b(rb,i/255,c/255,u/255))}else break e;return Qe("Parsing ints from hex failed")})))))))}(),ib=Sr("id"),ob=nn("input"),cb=nn("label"),jv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lb=jv(0),ub=Sr("name"),$b=function(e){return M(e,!0)},vb=function(e){return{$:1,a:e}},fb=v(function(e,r){return t(yc,e,vb(r))}),mb=v(function(e,r){return b(He,H,r,e)}),sb=t(mb,$(["target","value"]),ga),Rv=function(e){return t(fb,"input",t(ri,$b,t(ri,e,sb)))},db=t(zn,wc,p.h4),Nv=t(zn,wc,p.h8),Dc=function(e){return t(p$,5,e)},Vc=function(e){return t(ge,iv,t(rv,b(Ve,cv,"ff-",e),e))},pb=b(Ir,195,195,195),Gv=b(Ir,69,69,69),gb=jv(2),hb={$:2},Ac=hb,bb=$e(32),_b=$e(31),Hv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return j;else{var a=n.a;return N(a)}}),j,e)},yb=v(function(e,r){return t(Se,r,b(He,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return N(M(i,c))}else return j;else{var i=a.a;return N(i)}}),j,e))}),Wv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return j;else{var a=n.a;return N(a)}}),j,e)},xb=$e(33),wb=Sr("max"),Sb=Sr("min"),Cb=v(function(e,r){return t(ge,bv,b(hv,t(_v,e,r),e,r))}),Lb=function(e){return t(Sr,"step",e)},Uv=Sr("type"),Ov=Sr("value"),Ta=pv,Pb=Ed,Jv=v(function(e,r){switch(r.$){case 0:return Nn;case 2:var n=r.a;return Li(n);case 6:var a=r.a;return Ci(a);case 5:var i=r.a;return xi(i);case 7:var a=r.a;return dv(a);case 8:var a=r.a;return s$(a);case 3:var a=r.a,i=r.b;return t(zn,a,i);case 4:var o=r.a,c=r.b;return t(ge,o,c);case 9:var l=r.a,u=r.b;return t(d$,l,t($v,e,u));case 1:var m=r.a;return Ce(t(Pb,e,m));default:var s=r.a,d=r.b;return t(Cc,s,d)}}),Mb=T(function(e,r,n){return t(Pn,$([Q(ve),pe(t(Se,ve,n)),ln]),$([t(he,$([Q(Ta(Le(e*1e4)))]),Re),t(he,t(z,ln,t(J,Jv(at),r)),Re),t(he,$([Q(Ta(Le(ue(1-e)*1e4)))]),Re)]))}),zb=T(function(e,r,n){return t(Lr,$([pe(ve),Q(t(Se,ve,n)),Sc]),$([t(he,$([pe(Ta(Le(ue(1-e)*1e4)))]),Re),t(he,t(z,Sc,t(J,Jv(at),r)),Re),t(he,$([pe(Ta(Le(e*1e4)))]),Re)]))}),qv=v(function(e,r){var n=Wv(e),a=Hv(e),i=function(){var S=M(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var x=S.a.a.a,C=S.b.a.a;return ce(C,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cs)/(r.cr-r.cs),c=r.ic,l=c,u=Hv(l),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),s=Wv(l),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return k(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([t(re,"width",d),t(re,"height",m)]),_=t(yb,e,M(5,5)),y=_.a,w=_.b;return b(Cv,$([Mv(r.em)?Nn:t(Cb,y,w),Sv,Q(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.em,t(Pn,$([Q(t(Se,ve,n)),pe(t(Se,we(20),a))]),$([P(cr,dr,wn("input"),$([Pv(r.em),t(ge,bb,t(vt,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,xb,t(vt,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,_b,t(vt,'input[type="range"].'+(g+"::-ms-thumb"),f)),Ce(Cr(g+" ui-slide-bar focusable-parent")),Ce(Rv(function(S){var x=a$(S);if(x.$===1)return r.bJ(0);var C=x.a;return r.bJ(C)})),Ce(Uv("range")),Ce(Lb(function(){var S=r.cF;if(S.$===1)return"any";var x=S.a;return ae(x)}())),Ce(Sb(ae(r.cs))),Ce(wb(ae(r.cr))),Ce(Ov(ae(r.cJ))),i?Ce(t(_c,"orient","vertical")):Nn,Q(i?t(Se,we(20),a):t(Se,ve,n)),pe(i?t(Se,ve,n):t(Se,we(20),a))]),Ye(D)),t(he,t(z,Q(t(Se,ve,n)),t(z,pe(t(Se,we(20),a)),G(e,$([Dc(i?b(zb,o,t(z,sr("focusable-thumb"),l),n):b(Mb,o,t(z,sr("focusable-thumb"),l),a))])))),Re)])))}),Tb=b(za,.5,.5,.5),Yv=Fr,Zv=function(e){var r=e.c3,n=e.cJ,a=e.cs,i=e.cr,o=e.cF,c=e.bJ;return t(he,$([Q(ve)]),t(qv,$([Ln(2),Dc(t(he,$([Q(ve),pe(we(16)),ln,cn(Gv),Zn(4)]),Re))]),{em:t(gb,D,t(Pn,$([Q(ve)]),$([t(he,$([db]),Tn(r)),t(he,$([Q(ve),Nv,Vc($([Ac]))]),Tn(ae(n)))]))),cr:i,cs:a,bJ:c,cF:N(o),ic:Yv($([Q(we(12)),pe(we(12)),Zn(4),Mi(0),Cn(Tb),cn(pb)])),cJ:n}))},kb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Db=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(S3,D,{f6:n,gM:N3,em:t(lb,D,Tn(e)),bJ:u3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Zv({c3:e,cr:o,cs:i,bJ:v3(e),cF:.001*(o-i),cJ:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return Zv({c3:e,cr:o,cs:i,bJ:t(We,Le,f3(e)),cF:1,cJ:n});default:var n=r.a;return t(he,$([Q(ve)]),hn(t(ha,D,$([t(ha,$([t(gr,"margin-bottom","6px")]),$([t(cb,$([G3(e)]),$([uc(e)]))])),t(ob,$([Uv("color"),t(gr,"width","100%"),t(gr,"height","26px"),t(gr,"padding","0px"),ib(e),ub(e),Rv(function(l){return t($3,e,t(kb,m3,tb(l)))}),Ov(P3(n))]),D)]))))}}),Fc=b(Ir,255,255,255),Vb=function(e){return t(Lr,$([Q(ve),Ln(8),t(wv,0,14),xt({b3:1,g4:0,hx:0,cI:0}),Cn(Si)]),$([t(he,$([qn(16),hc,Mn(Fc)]),Tn(e.hc)),t(Lr,$([Q(ve),Ln(6)]),l3(t(bc,Db,e.aN)))]))},Ab=function(e){return t(Lr,$([Q(ve),pe(ve),Mn(gc),qn(12),o3,xv]),t(J,Vb,e))},Fb=i3(Ab),Ib=function(e){return t(Lr,$([Q(ve),pe(ve)]),$([t(Pn,$([Ln(14),Q(ve)]),D),t(dc,r3,Fb(Rn(e).gb))]))},Eb=function(e){return{$:6,a:e}},Bb=O(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),jb=function(e){var r=e.cI,n=e.hx,a=e.b3,i=e.g4;if(le(r,n)&&le(r,a)&&le(r,i)){var o=r;return t(ge,_t,V(bt,"p-"+k(r),o,o,o,o))}else return t(ge,_t,V(bt,P(Bb,r,n,a,i),r,n,a,i))},Rb=function(e){return{$:0,a:e}},Nb=function(e){return{$:1,a:e}},Gb=Nb,Hb=function(e){var r=e.b.X;return Bn(r)},Ti=b(Ir,255,60,0),Wb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Bn(r)+1+Bn(n)},Ub=function(e){var r=M(Hb(e),Wb(e)-1),n=r.a,a=r.b;return t(he,$([Q(ve),ln]),t(qv,$([Dc(t(Pn,$([Q(ve),pe(we(4)),ln,cn(Gv),Zn(2)]),$([t(he,$([Q(Ta(n)),pe(ve),cn(Ti),Zn(2)]),Re),t(he,$([Q(Ta(a-n))]),Re)])))]),{em:Gb(""),cr:a,cs:0,bJ:t(We,Le,Rb),cF:N(1),ic:Yv($([Q(we(12)),pe(we(12)),Zn(6),cn(Ti)])),cJ:n}))},Ob=Ci(2),ki=b(Ir,220,220,220),Jb=function(e){var r=e.a,n=function(){return r.$?$([Mn(ki)]):$([Mn(Ti)])}();return t(he,G(n,$([qn(14),Ob,Nv,Vc($([Ac]))])),Tn(t(u$,3,Rn(e).a4)))},qb=function(e){e.a;var r=e.b.X;return t(Ae,function(n){return Le(60/(Rn(e).a4-n))},t(Ae,t(We,Wu,function(n){return n.a4}),zc(t(e$,59,r))))},Yb=function(e){var r=qb(e);if(r.$===1)return Re;var n=r.a;return t(he,$([qn(14),Mn(gc),Vc($([Ac]))]),Tn(k(n)+" FPS"))},Kv={$:1},Zb={$:3},Kb={$:2},Xb={$:8},Qb=Qr,e1=v(function(e,r){return t(Co,e,Qb(r))}),r1=e1("disabled"),n1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},a1=function(e){return t(it,n1,e)?Nn:sr("focusable")},Di=t(ut,Ce,zv),Xv=v(function(e,r){var n=r.eW,a=r.em;return P(cr,dr,Gn,t(z,Q(lr),t(z,pe(lr),t(z,sr(p.cb+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),t(z,Yn,t(z,a1(e),t(z,Li(Xb),t(z,Ce(Dv(0)),function(){if(n.$===1)return t(z,Ce(r1(!0)),e);var i=n.a;return t(z,Di(i),t(z,Tv(function(o){return le(o,Lv)||le(o,kv)?N(i):j}),e))}()))))))),Ye($([a])))}),Qv=v(function(e,r){return t(Xv,D,{em:t(he,$([Q(we(36)),Jn(3),Mn(r),Av,qn(12),hc,Cn(r),Mi(1),Zn(4)]),Tn("REC")),eW:N(e)})}),ef=T(function(e,r,n){return t(Xv,D,{em:hn(b(Pa,20,n,e)),eW:N(r)})}),t1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Pn,D,$([t(he,$([Q(we(40))]),function(){switch(r.$){case 0:return t(Qv,Kv,Ti);case 1:return t(Qv,Kb,ki);default:return Re}}()),t(he,$([Q(we(28))]),function(){switch(r.$){case 0:return Re;case 1:return xn(n)?Re:b(ef,On.hp,Zb,ki);default:return b(ef,On.ho,Kv,ki)}}())]))},i1=function(e){return t(Lr,$([Q(ve)]),$([Ub(e),t(Pn,$([Q(ve),Ln(14),t(wv,0,6),ln]),$([t1(e),Yb(e),Jb(e)]))]))},o1=function(e){return t(Lr,$([Q(ve),Ln(14),jb({b3:20,g4:0,hx:0,cI:0}),xt({b3:1,g4:0,hx:0,cI:0}),Cn(Si)]),$([t(he,$([qn(16),hc,Mn(gc)]),Tn("Time Travel")),t(dc,Eb,i1(e))]))},c1=v(function(e,r){return t(Lr,$([Rn(r).dD.im>600?cn(Qh):cn(e3),xt({b3:0,g4:0,hx:1,cI:0}),Cn(Si),Q(we(Ma.c4)),pe(ve)]),$([function(){return e?Re:t(Lr,$([Q(ve),pe(ve),Jn(14),Ln(14)]),$([o1(r),Ib(r)]))}()]))}),l1=function(e){return{$:3,a:e}},rf=xi(2),u1=b(Ir,232,78,50),$1=b(Ir,48,48,48),v1=function(e){return t(Sr,"href",Id(e))},f1=kr("rel"),m1=Sr("target"),nf=v(function(e,r){var n=r.fn,a=r.em;return P(cr,dr,wn("a"),t(z,Ce(v1(n)),t(z,Ce(f1("noopener noreferrer")),t(z,Ce(m1("_blank")),t(z,Q(lr),t(z,pe(lr),t(z,sr(p.cb+(" "+(p.ax+(" "+p.et)))),e)))))),Ye($([a])))}),St=Sr("title"),s1=b(Ir,31,161,242),d1=function(e){var r=T(function(o,c,l){var u=le(c,e)?Fc:$1;return t(he,$([an(St(o)),Di(l1(c)),Yn,Jn(7)]),hn(b(Pa,40,u,l)))}),n=t(Lr,$([fv]),$([b(r,"Configurations",0,On.hN)])),a=t(Lr,D,$([t(nf,$([an(St("Twitter")),rf,Yn,Jn(7)]),{em:hn(b(Pa,40,s1,On.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(nf,$([an(St("Source Code")),rf,Yn,Jn(7)]),{em:hn(b(Pa,40,u1,On.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(we(Ma.bF)),Jn(4),Di(vv),xt({b3:1,g4:0,hx:0,cI:0}),Cn(Si),Yn,an(St("Activate Distraction Free Mode"))]),hn(b(Pa,46,Fc,On.fx)));return t(Lr,$([Q(we(Ma.bF)),pe(ve),xv,cn(mv)]),$([i,n,a]))},p1=function(e){var r=t(he,$([Q(we(Ma.bF)),fv,Jn(4),Di(vv),Yn,an(St("Deactivate Distraction Free Mode (A)"))]),hn(b(Pa,46,mv,On.fx)));return e.bx?r:t(Pn,$([Q(we(Ma.bF+Ma.c4)),pe(ve)]),$([d1(e.bq),t(c1,e.bq,e.R)]))},g1=T(function(e,r,n){var a=wg(n.R),i=Rn(n.R);return b(Bh,{hl:$([Cg({fO:j,fW:j,hH:j})])},$([Q(we(Qa(i.dD.im))),pe(we(Qa(i.dD.gH))),an(t(gr,"-webkit-font-smoothing","antialiased")),an(t(gr,"pointer-events","none")),an(t(gr,"touch-action","none")),an(t(gr,"user-select","none")),Xo(t(dc,yg,t(r,i,a))),Xo(p1(n))]),hn(t(jh,mi(xg),t(e,i,a))))}),h1=fr(function(e,r,n,a,i,o){var c=v(function(u,m){return M(P(dg,r,o,u,m),m$)}),l=function(u){var m=t(Ou,n,u.gY);return M({bq:0,bx:!0,R:t(pg,m,a),dO:0},m$)};return F0({gS:l,hX:_g,ii:c,ik:t(g1,e,i)})}),b1=O(function(e,r,n,a){return Ke(h1,e,r,n,a,v(function(i,o){return Re}),T(function(i,o,c){return c}))}),_1=function(e){return{}},y1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),x1=function(e){return b(Ve,v(function(r,n){var a=r.a,i=r.b;return b(pa,a,i,n)}),rc,e)},w1=T(function(e,r,n){return b(y1,e,r,x1(n))}),S1=w1,Ic=T(function(e,r,n){var a=r.a,i=r.b;return M(e,t(n$,M(a,i),n))}),C1=$([b(S1,"Camera",!0,$([b(Ic,"camera x",M(-40,40),0),b(Ic,"camera y",M(-40,40),0),b(Ic,"camera z",M(-40,40),16)]))]),L1=v(function(e,r){return r}),P1=function(e){var r=function(n){return t(J,function(a){return M(n,a)},e)};return Wn(r)},Ec=function(e){return{$:5,a:e}},Vi=function(e){return Ec(e)},Ai=v(function(e,r){return{$:0,a:e,b:r}}),af=v(function(e,r){return{$:2,a:e,b:r}}),tf=v(function(e,r){return{$:4,a:e,b:r}}),of=v(function(e,r){return{$:3,a:e,b:r}}),Bc=v(function(e,r){return{$:1,a:e,b:r}}),M1=T(function(e,r,n){return{io:e,is:r,dV:n}}),z1=function(e){var r=e;return r},jc=function(e){var r=e;return z1(r.fN)},Rc=function(e){var r=e;return r.a5},ka=function(e){var r=e;return r.dm},Ct=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dV:a.dV+n.dV}}),un=function(e){return e},Kn=function(e){var r=e;return r.dT},Xn=function(e){var r=e;return r.dU},Qn=function(e){var r=e;return r.dW},T1=v(function(e,r){return un({dm:t(Ct,e,ka(r)),dT:Kn(r),dU:Xn(r),dW:Qn(r)})}),k1=v(function(e,r){return{fN:t(T1,e,jc(r)),a5:Rc(r)}}),Lt=v(function(e,r){return{gm:r,dm:e}}),D1=v(function(e,r){var n=r;return t(Lt,t(Ct,e,n.dm),n.gm)}),V1=v(function(e,r){var n=r;return{m:t(D1,e,n.m),g5:n.g5,hs:n.hs}}),Nc=function(e){var r=e;return r},A1=function(e){return e},cf=v(function(e,r){var n=Nc(r),a=n.a,i=n.b;return A1(M(e(a),e(i)))}),F1=v(function(e,r){return t(cf,Ct(e),r)}),Gc=function(e){var r=e;return r.f4},Hc=function(e){var r=e;return r.hs},br=function(e){var r=e;return ue(r)},lf=v(function(e,r){return{f4:r,hs:br(e)}}),I1=v(function(e,r){return t(lf,Hc(r),t(Ct,e,Gc(r)))}),uf=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return I(e(a),e(i),e(o))}),E1=v(function(e,r){return t(uf,Ct(e),r)}),Fi=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(M1,n,a,i);switch(r.$){case 0:var c=r.a,l=r.b;return t(Ai,c,t(k1,o,l));case 1:var c=r.a,u=r.b;return t(Bc,c,t(E1,o,u));case 3:var c=r.a,m=r.b;return t(of,c,t(I1,o,m));case 2:var c=r.a,s=r.b;return t(af,c,t(V1,o,s));case 4:var c=r.a,d=r.b;return t(tf,c,t(F1,o,d));default:var g=r.a;return Ec(t(J,Fi(I(n,a,i)),g))}}),Wc=function(e){return Fi(I(e,0,0))},ea=function(e){return Fi(I(0,e,0))},Pt=function(e){return Fi(I(0,0,e))},ra=function(e){return e},Dn=bs,na=_s,Ii=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Dn(c),u=na(c),m=a.gm,s=m,d=s.io*u,g=l*d,f=d*d,_=s.is*u,y=l*_,w=d*_,S=_*_,x=1-2*(f+S),C=s.dV*u,F=l*C,q=2*(w-F),K=2*(w+F),W=d*C,Y=2*(W+y),Z=2*(W-y),B=_*C,ne=2*(B-g),fe=2*(B+g),ye=C*C,me=1-2*(S+ye),se=1-2*(f+ye);return{io:me*o.io+q*o.is+Y*o.dV,is:K*o.io+se*o.is+ne*o.dV,dV:Z*o.io+fe*o.is+x*o.dV}}),Mt=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Dn(c),u=na(c),m=a.dm,s=m,d=o.io-s.io,g=o.is-s.is,f=o.dV-s.dV,_=a.gm,y=_,w=y.io*u,S=l*w,x=w*w,C=y.is*u,F=l*C,q=w*C,K=C*C,W=1-2*(x+K),Y=y.dV*u,Z=l*Y,B=2*(q-Z),ne=2*(q+Z),fe=w*Y,ye=2*(fe+F),me=2*(fe-F),se=C*Y,xe=2*(se-S),de=2*(se+S),De=Y*Y,ze=1-2*(K+De),Ze=1-2*(x+De);return{io:s.io+ze*d+B*g+ye*f,is:s.is+ne*d+Ze*g+xe*f,dV:s.dV+me*d+de*g+W*f}}),B1=T(function(e,r,n){return un({dm:b(Mt,e,r,ka(n)),dT:b(Ii,e,r,Kn(n)),dU:b(Ii,e,r,Xn(n)),dW:b(Ii,e,r,Qn(n))})}),j1=T(function(e,r,n){return{fN:b(B1,e,r,jc(n)),a5:Rc(n)}}),R1=v(function(e,r){var n=t(Mt,e,r),a=t(Ii,e,r);return function(i){var o=i;return t(Lt,n(o.dm),a(o.gm))}}),N1=T(function(e,r,n){var a=n;return{m:b(R1,e,r,a.m),g5:a.g5,hs:a.hs}}),G1=T(function(e,r,n){return t(cf,t(Mt,e,r),n)}),H1=T(function(e,r,n){return t(lf,Hc(n),b(Mt,e,r,Gc(n)))}),W1=T(function(e,r,n){return t(uf,t(Mt,e,r),n)}),Ei=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(Ai,a,b(j1,e,r,i));case 1:var a=n.a,o=n.b;return t(Bc,a,b(W1,e,r,o));case 3:var a=n.a,c=n.b;return t(of,a,b(H1,e,r,c));case 2:var a=n.a,l=n.b;return t(af,a,b(N1,e,r,l));case 4:var a=n.a,u=n.b;return t(tf,a,b(G1,e,r,u));default:var m=n.a;return Ec(t(J,t(Ei,e,r),m))}}),aa={io:0,is:0,dV:0},$n=function(e){return e},$f=$n({io:1,is:0,dV:0}),Uc=$f,U1=t(Lt,aa,Uc),vf=v(function(e,r){return b(Ei,U1,ra(e),r)}),Oc=$n({io:0,is:1,dV:0}),Jc=Oc,O1=t(Lt,aa,Jc),J1=v(function(e,r){return b(Ei,O1,ra(e),r)}),qc=$n({io:0,is:0,dV:1}),Yc=qc,q1=t(Lt,aa,Yc),zt=v(function(e,r){return b(Ei,q1,ra(e),r)}),Ue=Ps,Zc=v(function(e,r){var n=e,a=r;return ce(a,n)>-1}),Kc=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),vn=v(function(e,r){var n=e,a=r;return a-n}),Y1=$n({io:-1,is:0,dV:0}),Z1=$n({io:0,is:-1,dV:0}),ff=$n({io:0,is:0,dV:-1}),Oe=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),K1=fr(function(e,r,n,a,i,o){var c=t(Zc,n,o)?qc:ff,l=t(Zc,r,i)?Oc:Z1,u=t(Zc,e,a)?$f:Y1,m=I(br(t(vn,e,a)),br(t(vn,r,i)),br(t(vn,n,o))),s=b(Oe,t(Kc,e,a),t(Kc,r,i),t(Kc,n,o)),d=un({dm:s,dT:u,dU:l,dW:c});return{fN:d,a5:m}}),ta=function(e){var r=e;return r.io},ia=function(e){var r=e;return r.is},oa=function(e){var r=e;return r.dV},mf=v(function(e,r){return Ke(K1,ta(e),ia(e),oa(e),ta(r),ia(r),oa(r))}),Vn=T(function(e,r,n){return{io:e,is:r,dV:n}}),X1=v(function(e,r){var n=r/2;return t(Ai,e,t(mf,b(Vn,-n,-n,-n),b(Vn,n,n,n)))}),Q1=O(function(e,r,n,a){var i=I(e,r,n),o=i.a,c=i.b,l=i.c,u=l<=.5?l*(c+1):l+c-l*c,m=l*2-u,s=function(_){var y=_<0?_+1:_>1?_-1:_;return y*6<1?m+(u-m)*y*6:y*2<1?u:y*3<2?m+(u-m)*(2/3-y)*6:m},d=s(o-1/3),g=s(o),f=s(o+1/3);return P(yt,f,g,d,a)}),e_=T(function(e,r,n){return P(Q1,e,r,n,1)}),Xc=function(e){return{$:0,a:e}},sf=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),df=T(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),Qc=function(e){return b(df,0,1,e<=.04045?e/12.92:t(wt,(e+.055)/1.055,2.4))},Tt=up,r_=function(e){var r=xc(e),n=r.hu,a=r.gA,i=r.fS;return b(Tt,Qc(n),Qc(a),Qc(i))},pf=function(e){return b(sf,0,Xc(r_(e)),Xc(0))},n_=v(function(e,r){return(r-Hu(r/e)*e)/e}),a_=function(e){return 2*kn*e},kt=O(function(e,r,n,a){return e+(r-e)*(1+Dn(a_(t(n_,n,a))))/2}),el=function(e){return pf(b(e_,P(kt,0,1,7,e.a4),.8,.8))},rl=function(e){return t(X1,el(e),1)},gf=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=I(n/2,a/2,i/2),c=o.a,l=o.b,u=o.c;return t(Ai,e,t(mf,b(Vn,-c,-l,-u),b(Vn,c,l,u)))}),_r=T(function(e,r,n){return I(e,r,n)}),t_=v(function(e,r){var n=r.a,a=r.b,i=r.c;return t(Bc,e,b(_r,b(Vn,n.io,n.is,n.dV),b(Vn,a.io,a.is,a.dV),b(Vn,i.io,i.is,i.dV)))}),i_=function(e){var r=t(ea,-(Ue(3)/6),t(Wc,-.5,t(zt,-hr(30),t(t_,el(e),I({io:0,is:0,dV:0},{io:Dn(hr(30)),is:na(hr(30)),dV:0},{io:0,is:1,dV:0}))))),n=t(ea,-(Ue(3)/6),t(gf,el(e),I(1,1e-8,1)));return Vi($([t(Pt,-.5,r),t(Pt,.5,r),n,t(zt,hr(120),n),t(zt,hr(240),n)]))},o_=v(function(e,r){var n=r.a,a=r.b,i=v(function(d,g){return t(ea,(1+Ue(3))/2,t(zt,d,t(ea,-((1+Ue(3))/2),g)))}),o=kn,c=20,l=function(d){return t(vf,P(kt,0,o,c,e.a4),d)},u=t(i,hr(240),l(rl(e))),m=t(Wc,(3+Ue(3))/2,t(ea,(1+Ue(3))/2,l(rl(e)))),s=l(Vi($([t(zt,hr(90),t(ea,1/2+Ue(3)/6,i_(e))),rl(e)])));return t(Pt,P(kt,-1,1,7,e.a4),t(ea,a*(1+Ue(3)),t(Wc,n*(3+Ue(3)),t(J1,P(kt,0,o,c,e.a4),t(vf,P(kt,0,o,c,e.a4),Vi($([s,t(i,hr(60),s),t(i,hr(120),s),t(i,-hr(60),s),m,u])))))))}),c_=function(e){return Vi(t(J,o_(e),t(P1,t(Vr,-1,1),t(Vr,-1,1))))},l_=v(function(e,r){return t(Ae,function(n){if(n.$)return 0;var a=n.b;return a},t(ui,e,r.aN))}),u_=v(function(e,r){return t(Se,0,zc(t(bn,l_(e),r)))}),$_=v(function(e,r){return t(u_,e,r.gb)}),nl=$_,Dt=function(e){return ra(kn*(e/180))},v_=v(function(e,r){var n=e,a=r,i=a.dV-n.dV,o=a.is-n.is,c=a.io-n.io,l=t(qe,ue(c),t(qe,ue(o),ue(i)));if(l){var u=i/l,m=o/l,s=c/l,d=Ue(s*s+m*m+u*u);return N({io:s/d,is:m/d,dV:u/d})}else return j}),al=function(e){return e},tl=v(function(e,r){var n=e,a=r;return{io:a.is*n.dV-a.dV*n.is,is:a.dV*n.io-a.io*n.dV,dV:a.io*n.is-a.is*n.io}}),Bi=function(e){var r=e,n=t(qe,ue(r.io),t(qe,ue(r.is),ue(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=Ue(o*o+i*i+a*a);return N({io:o/c,is:i/c,dV:a/c})}else return j},ji=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),f_=v(function(e,r){var n=e,a=r;return a.io*n.io+a.is*n.is+a.dV*n.dV}),hf=v(function(e,r){var n=e,a=r;return ce(a,n)>0}),m_=v(function(e,r){var n=e,a=r;return ce(a,n)<0}),s_=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),d_=v(function(e,r){var n=e,a=r,i=a.io*n.io+a.is*n.is+a.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),p_=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Er=0,bf={io:0,is:0,dV:0},g_=T(function(e,r,n){return t(Mc,function(a){var i=t(s_,t(d_,a,r),r);return t(Mc,function(o){var c=t(tl,r,e),l=t(f_,n,c),u=t(hf,Er,l)?c:t(m_,Er,l)?p_(c):bf;return t(Ae,function(m){return I(a,o,m)},Bi(u))},Bi(i))},Bi(e))}),h_=function(e){var r=e,n=ue(r.dV),a=ue(r.is),i=ue(r.io);if(ce(i,a)<1)if(ce(i,n)<1){var o=Ue(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=Ue(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(ce(a,n)<1){var o=Ue(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=Ue(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},il=function(e){var r=h_(e),n=r,a=n,i=e,o=i,c={io:o.is*a.dV-o.dV*a.is,is:o.dV*a.io-o.io*a.dV,dV:o.io*a.is-o.is*a.io};return M(r,c)},Da=function(e){var r=e;return r},b_=v(function(e,r){var n=il(e),a=n.a,i=n.b;return un({dm:r,dT:a,dU:i,dW:e})}),__=function(e){var r=t(ji,e.bb,e.d9),n=Da(e.fm),a=t(tl,r,n),i=b(g_,r,n,a);if(i.$){var m=Bi(r);if(m.$){var d=il(e.fm),g=d.a,f=d.b;return un({dm:e.d9,dT:f,dU:e.fm,dW:g})}else{var s=m.a;return t(b_,s,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return un({dm:e.d9,dT:u,dU:l,dW:c})}},y_=function(e){return{$:0,a:e}},Ri=function(e){var r=e;return .5*r},x_=ys,w_=function(e){var r=e;return x_(r)},S_=function(e){var r=Ri(br(e.fq)),n=w_(r);return{dx:y_(n),dN:e.dN}},C_=function(e){var r=e.bb,n=e.d9,a=e.fm;return S_({fq:Dt(40),dN:__({d9:al(n),bb:al(r),fm:t(Se,Oc,t(v_,aa,al(a)))})})},L_=function(e){return e},ca=function(e){return e},P_=function(e){return ca(.01*e)},_f=function(e){return e},M_=function(e){return e},z_=function(e){return{$:0,a:e}},T_=z_,k_={$:3},D_=k_,V_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),A_=V_,F_=function(e){return{$:1,a:e}},I_=F_,E_=function(e){return t(kr,"height",k(e))},B_=H$,j_=function(e){return{$:2,a:e}},R_=j_,N_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return Le(l*1e3)/1e3},c=function(l){return Le(l*1e4)/100};return _a($(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(o(i)),")"]))},G_=v(function(e,r){switch(r.$){case 0:return t(Kp,e,r);case 1:return t(Xp,e,r);case 2:return t(Qp,e,r);case 3:return t(e0,e,r);case 4:return t(r0,e,r);default:return t(n0,e,r)}}),H_=v(function(e,r){switch(r.$){case 0:return t(Pp,e,r);case 1:return t(Mp,e,r);case 2:return t(zp,e,r);case 3:return t(Tp,e,r);case 4:return t(kp,e,r);case 5:return t(Dp,e,r);case 6:return t(Vp,e,r);case 7:return t(Ap,e,r);default:return Fp(e)}}),W_=T(function(e,r,n){return b(Zp,e,r,n)}),yf=function(e){var r=e;return r},Va=dp,ol=P(Va,1,1,1,1),qr=T(function(e,r,n){return t(J,function(a){return t(a,r,n)},e)}),U_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),O_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(U_,n*a/i,n,n*(1-a-i)/i)}),J_=function(e){var r=e.a,n=e.b,a=e.c;return b(Tt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},cl=v(function(e,r){return J_(t(O_,e,r))}),xf=v(function(e,r){return{ek:le(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cD,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cD,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cD,cD:e.cD*r.cD}}),Yr=yp,q_=function(e){return Yr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},ll=Be(function(e,r,n,a,i){var o=a.ek?1:-1,c=P(Va,a.cD,a.cD,a.cD,o);return Ke(i,e,c,q_(a),a.ek,r,n)}),wf=fr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,m=r,s=n,d=t(xf,c,a),g=l,f=o;e=u,r=m,n=s,a=d,i=g,o=f;continue e;case 1:var _=i.b,y=t(z,V(ll,e,r,n,a,_),o.P);return{P:y,_:o._,hI:o.hI};case 3:var w=i.b,S=t(z,V(ll,e,r,n,a,w),o._);return{P:o.P,_:S,hI:o.hI};case 2:var x=i.a,C=t(z,V(ll,e,r,n,a,x),o.hI);return{P:o.P,_:o._,hI:C};default:var F=i.a;return b(Ve,P(wf,e,r,n,a),o,F)}}),Y_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Sf=Y_,ul=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Z_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(ul,518,r,n,a)},K_=v(function(e,r){return{$:6,a:e,b:r}}),X_=K_,Cf=$([Z_({ab:1,ac:0,ai:!1}),P(Sf,!1,!1,!1,!1),t(X_,0,1)]),Aa=519,$l=8,Lf=15,Fa=7681,Q_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Me=Lp,e2=v(function(e,r){return{$:0,a:e,b:r}}),r2=e2({d5:1,ei:0,eS:5}),yr=cp,n2=r2($([{cy:t(yr,-1,-1)},{cy:t(yr,1,-1)},{cy:t(yr,-1,1)},{cy:t(yr,1,1)}])),a2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cy"},uniforms:{}},t2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m,k:s}}}}}}}}}}}},vl=T(function(e,r,n){var a=e.dy,i=e.dd,o=e.dS,c=v(function(m,s){var d=m;return s(d)}),l=v(function(m,s){var d=m;return s(d)}),u=function(m){return t(We,c(m.bP),t(We,l(m.bA),t(We,l(m.bY),l(m.bZ))))};return t(u,n,t(u,r,b(t2,a,i,o)))}),fl=function(e){return b(vl,{dd:e.dd,dy:e.dy,dS:e.dS},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},ml=function(e){return V(Me,$([fl(e),P(Sf,!1,!1,!1,!1)]),a2,Q_,n2,{})},i2=ml({bA:Fa,dd:0,dy:$l,bP:Aa,dS:Lf,bY:Fa,bZ:Fa}),o2=516,Pf=5386,er=7680,c2=function(e){return t(wt,2,e+4)},Mf=function(e){return ml({bA:er,dd:Lf,dy:$l,bP:o2,dS:c2(e),bY:Pf,bZ:Pf})},l2=T(function(e,r,n){return tr($([b(qr,e,n,Cf),$([Mf(r),i2])]))}),u2=v(function(e,r){return tr(t(Eu,l2(e),r))}),$2=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(ul,513,r,n,a)},v2=$2({ab:1,ac:0,ai:!0}),f2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m}}}}}}}}}}},m2=function(e){var r=e.cA,n=e.cg,a=e.b1,i=e.b_,o=e.b7,c=e.fI,l=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,y=m.c;return f2(s)(d)(g)(f)(_)(y)(r)(n)(a)(i)});return t(l,o,c)},s2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),zf=v(function(e,r){var n=e,a=r;return b(s2,32774,n,a)}),d2=1,Tf=771,p2=770,sl=m2({b_:0,fI:t(zf,d2,Tf),b1:0,b7:t(zf,p2,Tf),cg:0,cA:0}),Ia=$([v2,sl]),g2=function(e){var r=e;return r.eL},h2=function(e){var r=e;return r.eM},kf=function(e){var r=e;return r.eN},b2=function(e){var r=e;return r.eO},_2=function(e){var r=e;return r.eP},Df=function(e){var r=e;return r.eQ},Vf=function(e){return I(t(vn,b2(e),g2(e)),t(vn,_2(e),h2(e)),t(vn,Df(e),kf(e)))},Af=function(e){var r=e;return ka(r)},y2=function(e){return e},x2=function(e){return un({dm:y2({io:e.K,is:e.L,dV:e.M}),dT:$n({io:e.t,is:e.u,dV:e.v}),dU:$n({io:e.w,is:e.x,dV:e.y}),dW:$n({io:e.z,is:e.A,dV:e.B})})},dl=v(function(e,r){var n=e,a=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,m=u;return{io:a.io*m.io+a.is*m.is+a.dV*m.dV,is:a.io*l.io+a.is*l.is+a.dV*l.dV,dV:a.io*o.io+a.is*o.is+a.dV*o.dV}}),Ff=v(function(e,r){var n=e,a=r,i=n.dm,o=i,c=a.io-o.io,l=a.is-o.is,u=a.dV-o.dV,m=n.dW,s=m,d=n.dU,g=d,f=n.dT,_=f;return{io:c*_.io+l*_.is+u*_.dV,is:c*g.io+l*g.is+u*g.dV,dV:c*s.io+l*s.is+u*s.dV}}),If=v(function(e,r){return{dm:t(Ff,e,ka(r)),dT:t(dl,e,Kn(r)),dU:t(dl,e,Xn(r)),dW:t(dl,e,Qn(r))}}),Ni=function(e){var r=e;return r},Ie=v(function(e,r){var n=e,a=r;return t(qe,n,a)}),Ne=v(function(e,r){var n=e,a=r;return t(wa,n,a)}),w2=v(function(e,r){var n=Ni(r),a=Ni(e);return{eL:t(Ie,a.eL,n.eL),eM:t(Ie,a.eM,n.eM),eN:t(Ie,a.eN,n.eN),eO:t(Ne,a.eO,n.eO),eP:t(Ne,a.eP,n.eP),eQ:t(Ne,a.eQ,n.eQ)}}),Pr=function(e){var r=e;return r},S2=function(e){var r=e;return I(r.io,r.is,r.dV)},Vt=v(function(e,r){var n=e,a=r;return a+n}),C2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Ri(br(a)),c=Ri(br(n)),l=Ri(br(i)),u=S2(r),m=u.a,s=u.b,d=u.c;return{eL:t(Vt,c,m),eM:t(Vt,o,s),eN:t(Vt,l,d),eO:t(vn,c,m),eP:t(vn,o,s),eQ:t(vn,l,d)}}),Ef=O(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,m=i.is*r,s=i.io*r,d=Pr(Qn(e)),g=ue(l*d.io)+ue(c*d.is)+ue(o*d.dV),f=Pr(Xn(e)),_=ue(l*f.io)+ue(c*f.is)+ue(o*f.dV),y=Pr(Kn(e)),w=ue(l*y.io)+ue(c*y.is)+ue(o*y.dV),S=t(C2,I(w,_,g),t(Ff,e,b(Vn,s,m,u)));if(a.$)return N(S);var x=a.a;return N(t(w2,x,S))}),pl=O(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 1:var s=i.a,d=P(Ef,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 2:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 3:var s=i.a,d=P(Ef,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 4:var g=i.a,c=e,l=r,u=P(pl,e,r,n,g),m=o;e=c,r=l,n=u,a=m;continue e;default:var f=i.a,_=i.b,y=t(If,x2(f),e),w=r*f.cD,c=e,l=r,u=P(pl,y,w,n,$([_])),m=o;e=c,r=l,n=u,a=m;continue e}}else return n}),Ea=$p,Ba=vp,ja=fp,Bf=function(e){return{$:4,a:e}},L2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(z,n,r);e=i,r=o;continue e}else return r}),At=function(e){return Bf(t(L2,e,D))},P2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cD:1},M2=function(e){var r=e;return r},jf=ml({bA:Fa,dd:0,dy:$l,bP:Aa,dS:255,bY:Fa,bZ:Fa}),z2=function(e){var r=e,n=t(qe,ue(r.io),t(qe,ue(r.is),ue(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=Ue(o*o+i*i+a*a);return c*n}else return Er},ur={b1:0,f3:!1,cg:0,dv:0,cA:0,dK:0,io:0,is:0,dV:0},Mr=v(function(e,r){var n=e,a=r;return Yr({eu:n.io,ev:n.cA,ew:a.io,ex:a.cA,ey:n.is,ez:n.cg,eA:a.is,eB:a.cg,eC:n.dV,eD:n.b1,eE:a.dV,eF:a.b1,eG:n.dK,eH:n.dv,eI:a.dK,eJ:a.dv})}),Ft=M({bG:t(Mr,ur,ur),cn:t(Mr,ur,ur),co:t(Mr,ur,ur),cp:t(Mr,ur,ur)},P(Va,0,0,0,0)),Ee=v(function(e,r){var n=r;return e*n}),Rf=function(e){var r=e;return-r},Nf=514,Gf=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(ul,515,r,n,a)},Hf=240,T2=$([Gf({ab:1,ac:0,ai:!0}),fl({bA:er,dd:Hf,dy:0,bP:Nf,dS:0,bY:er,bZ:er}),sl]),k2=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,c=br(a),l=c,u=br(i),m=u,s=n.dx;if(s.$){var g=s.a;return Jo(m)?Yr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Yr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-l),eF:-(m+l)/(m-l),eG:0,eH:0,eI:0,eJ:1})}else{var d=s.a;return Jo(m)?Yr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Yr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-(m+l)/(m-l),eF:-2*m*l/(m-l),eG:0,eH:0,eI:-1,eJ:0})}}),Gi=v(function(e,r){return(1&e>>r)==1?0:1}),D2=function(e){return $([Gf({ab:1,ac:0,ai:!0}),fl({bA:er,dd:Hf,dy:e,bP:Nf,dS:0,bY:er,bZ:er}),sl])},V2=T(function(e,r,n){return tr(t(J,function(a){var i=a<<4,o=P(Va,t(Gi,a,0),t(Gi,a,1),t(Gi,a,2),t(Gi,a,3));return b(qr,e,M(r,o),D2(i))},t(Vr,1,t(wt,2,n)-1)))}),It=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Ra=function(e){var r=e;return r},A2=xp,Wf=function(e){var r=e;return It(Qn(r))},F2={dm:aa,dT:Uc,dU:Jc,dW:Yc},Hi=function(e){var r=e;return r},I2=function(e){var r=Hi(ka(e)),n=Pr(Qn(e)),a=Pr(Xn(e)),i=Pr(Kn(e));return Yr({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dV,eD:a.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},E2=v(function(e,r){var n=r;return I2(t(If,n,e))}),B2=function(e){return t(E2,F2,e)},j2=function(e){var r=e;return r.dN},R2=function(e){var r=e;return Kn(r)},N2=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),G2=function(e){var r=e;return Xn(r)},H2=function(e){var r=j2(e.f0),n=un({dm:Af(r),dT:R2(r),dU:G2(r),dW:It(Wf(r))}),a=At(e.a9),i=a,o=P(pl,n,1,j,$([i]));if(o.$===1)return D;var c=o.a,l=B2(r),u=t(Ee,.99,t(Ie,br(e.a3),Rf(kf(c)))),m=Vf(c),s=m.a,d=m.b,g=m.c,f=z2(b(N2,s,d,g)),_=t(Ee,1.01,t(Vt,f,Rf(Df(c)))),y=t(k2,e.f0,{fM:e.fM,gv:_,hd:u}),w=A2(y).eJ,S=w?Pr(It(Wf(r))):Ra(Af(r)),x=function(){var se=e.cH;switch(se.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var xe=se.a;return M(3,xe);case 4:var xe=se.a;return M(4,xe);default:return M(5,0)}}(),C=x.a,F=x.b,q=e.ce,K=q,W=t(cl,K,e.cL),Y=W,Z=Yr({eu:0,ev:S.io,ew:Ea(Y),ex:e.ff,ey:0,ez:S.is,eA:Ba(Y),eB:M2(f),eC:0,eD:S.dV,eE:ja(Y),eF:C,eG:0,eH:w,eI:0,eJ:F}),B=Ke(wf,Z,l,y,P2,i,{P:D,_:D,hI:D}),ne=e.cm;switch(ne.$){case 0:var fe=ne.a;return tr($([b(qr,B.P,M(fe,ol),Ia),b(qr,B._,Ft,Ia)]));case 1:var fe=ne.a;return tr($([b(qr,B.P,Ft,Ia),$([jf]),b(qr,B.hI,fe.bG,Cf),$([Mf(0)]),b(qr,B.P,M(fe,ol),T2),b(qr,B._,Ft,Ia)]));default:var ye=ne.a,me=ne.b;return tr($([b(qr,B.P,M(me,ol),Ia),$([jf]),t(u2,B.hI,ye),b(V2,B.P,me,Bn(ye)),b(qr,B._,Ft,Ia)]))}},W2=function(e){return t(kr,"width",k(e))},U2=v(function(e,r){var n=$([I_(1),R_(0),T_(!0),P(A_,0,0,0,0)]),a=function(){var C=e.cP;switch(C.$){case 0:return I(n,"0",1);case 1:return I(t(z,D_,n),"1",1);default:var F=C.a;return I(n,"0",F)}}(),i=a.a,o=a.b,c=a.c,l=e.a5,u=l.a,m=l.b,s=yf(m),d=t(gr,"height",k(s)+"px"),g=yf(u),f=g/s,_=t(Wn,function(C){return H2({fM:f,f0:e.f0,a3:e.a3,a9:C.a9,ce:C.ce,cm:C.cm,ff:c,cH:C.cH,cL:C.cL})},r),y=t(gr,"width",k(g)+"px"),w=e.a1,S=w,x=N_(S);return b(B_,"div",$([t(gr,"padding","0px"),y,d]),$([M(o,b(W_,i,$([W2(Le(g*c)),E_(Le(s*c)),y,d,t(gr,"display","block"),t(gr,"background-color",x)]),_))]))}),O2=function(e){return t(U2,{cP:e.cP,a1:e.a1,f0:e.f0,a3:e.a3,a5:e.a5},$([{a9:e.a9,ce:e.ce,cm:e.cm,cH:e.cH,cL:e.cL}]))},Uf=function(e){return e},Of=Uf({io:.31271,is:.32902}),J2=v(function(e,r){var n=e,a=Pr(r.gm),i=a.io,o=a.is,c=a.dV,l=t(cl,r.c1,r.cU),u=l;return{b1:ja(u),f3:n,cg:Ba(u),dv:0,cA:Ea(u),dK:1,io:-i,is:-o,dV:-c}}),q2=function(e){return e},Y2=function(e){return q2(1.2*t(wt,2,e))},gl=function(e){return e},Z2={$:0},K2=Z2,Jf=function(e){return e},qf=function(e){var r=e;return r},X2=function(e){e:for(;;){if(le(e.gZ,Er)&&le(e.g_,Er))return ur;if(t(hf,br(e.gZ),br(e.g_))){var r={cU:e.cU,gZ:e.g_,g_:e.gZ,fm:It(e.fm)};e=r;continue e}else{var n=ue(qf(e.g_)/kn),a=ue(qf(e.gZ)/kn),i=Pr(e.fm),o=i.io,c=i.is,l=i.dV,u=t(cl,Jf(1),e.cU),m=u;return{b1:a*ja(m),f3:!1,cg:a*Ba(m),dv:n/a,cA:a*Ea(m),dK:3,io:o,is:c,dV:l}}}},Yf=function(e){return X2({cU:e.cU,gZ:e.c1,g_:Er,fm:e.fm})},Q2=function(e){var r=e;return r},Zf=function(e){var r=b(df,1667,25e3,Q2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Uf({io:n,is:a})},Kf=function(e){return e},ey=Zf(Kf(12e3)),ry=Zf(Kf(5600)),ny=function(e){return{$:2,a:e}},ay=function(e){return ny(e)},ty=v(function(e,r){return{$:2,a:e,b:r}}),Xf=function(e){return{$:0,a:e}},Wi=function(e){var r=e;return r},iy=function(e){var r=e;return r.f3},oy=Xf(Ft.a),cy=v(function(e,r){var n=v(function(a,i){var o=i.a,c=i.b;return e(a)?M(t(z,a,o),c):M(o,t(z,a,c))});return b(He,n,M(D,D),r)}),ly=function(e){var r=e;return Yr({eu:r.io,ev:r.cA,ew:0,ex:0,ey:r.is,ez:r.cg,eA:0,eB:0,eC:r.dV,eD:r.b1,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},uy=be(function(e,r,n,a,i,o,c,l){var u=t(cy,iy,$([Wi(e),Wi(r),Wi(n),Wi(a)])),m=u.a,s=u.b;if(m.b){var d=G(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,y=f.b,w=y.a,S=y.b,x=S.a;return t(ty,t(J,ly,m),{bG:t(Mr,g,_),cn:t(Mr,w,x),co:t(Mr,i,o),cp:t(Mr,c,l)})}else return oy}else return Xf({bG:t(Mr,e,r),cn:t(Mr,n,a),co:t(Mr,i,o),cp:t(Mr,c,l)})}),$y=T(function(e,r,n){return Oa(uy,e,r,n,ur,ur,ur,ur,ur)}),vy=function(e){var r=t(J2,M_(e.hI),{cU:ry,gm:e.hZ,c1:gl(8e4)}),n=Yf({cU:ey,c1:gl(2e4),fm:e.fm}),a=Yf({cU:Of,c1:gl(15e3),fm:It(e.fm)}),i=b($y,r,n,a);return O2({cP:ay(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a5:e.a5,a9:e.a9,ce:Y2(15),cm:i,cH:K2,cL:Of})},Qf=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),fy=O(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),em=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),rm=O(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),my=O(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),sy=O(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),dy=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),hl=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P(dy,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(Qf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(fy,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(em,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(sy,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(rm,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(my,r,i,a,1);case 8:return e;case 9:return e;default:return e}},bl={$:0},py=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var u=l.a,m=l.b,s=Ni(c(u)),d=t(Ne,s.eO,e),g=t(Ie,s.eL,r),f=t(Ne,s.eP,n),_=t(Ie,s.eM,a),y=t(Ne,s.eQ,i),w=t(Ie,s.eN,o),S=c,x=m;e=d,r=g,n=f,a=_,i=y,o=w,c=S,l=x;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),gy=T(function(e,r,n){var a=Ni(e(r));return Oa(py,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),_l=v(function(e,r){var n=e,a=r;return ce(a,n)<1}),nm=function(e){return t(_l,e.eL,e.eO)&&t(_l,e.eM,e.eP)&&t(_l,e.eN,e.eQ)?e:{eL:t(Ie,e.eO,e.eL),eM:t(Ie,e.eP,e.eM),eN:t(Ie,e.eQ,e.eN),eO:t(Ne,e.eO,e.eL),eP:t(Ne,e.eP,e.eM),eQ:t(Ne,e.eQ,e.eN)}},Et=function(e){var r=e;return r},am=function(e){var r=Et(e),n=r.a,a=r.b,i=r.c,o=ta(n),c=ia(n),l=oa(n),u=ta(a),m=ia(a),s=oa(a),d=ta(i),g=ia(i),f=oa(i);return nm({eL:t(Ie,o,t(Ie,u,d)),eM:t(Ie,c,t(Ie,m,g)),eN:t(Ie,l,t(Ie,s,f)),eO:t(Ne,o,t(Ne,u,d)),eP:t(Ne,c,t(Ne,m,g)),eQ:t(Ne,l,t(Ne,s,f))})},tm=mp,$r=function(e){return tm(Hi(e))},im=function(e){var r=e;return r},Ui=function(e){return tm(im(e))},hy=v(function(e,r){var n=e,a=r,i=t(qe,ue(a.io),t(qe,ue(a.is),ue(a.dV)));if(i){var o=a.dV/i,c=a.is/i,l=a.io/i,u=Ue(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return bf}),by=hy(Jf(1)),om=T(function(e,r,n){var a=t(ji,r,n),i=t(ji,e,r);return by(t(tl,a,i))}),_y=function(e){var r=Et(e),n=r.a,a=r.b,i=r.c,o=Ui(b(om,n,a,i));return I({q:o,cy:$r(n)},{q:o,cy:$r(a)},{q:o,cy:$r(i)})},yy=v(function(e,r){return{$:2,a:e,b:r}}),cm=yy({d5:3,ei:0,eS:4}),xy=function(e){if(e.b){var r=e.a,n=e.b,a=cm(t(J,_y,e)),i=b(gy,am,r,n);return P(Qf,i,e,a,0)}else return bl},lm=function(){var e=ca(1),r=ca(1),n=ca(1),a=t(Ee,-.5,e),i=t(Ee,-.5,r),o=t(Ee,-.5,n),c=b(Oe,o,i,a),l=t(Ee,.5,e),u=b(Oe,o,i,l),m=t(Ee,.5,r),s=b(Oe,o,m,a),d=b(Oe,o,m,l),g=t(Ee,.5,n),f=b(Oe,g,i,a),_=b(Oe,g,m,a),y=b(Oe,g,i,l),w=b(Oe,g,m,l);return hl(xy($([b(_r,c,_,f),b(_r,c,s,_),b(_r,u,y,w),b(_r,u,w,d),b(_r,f,_,w),b(_r,f,w,y),b(_r,c,d,s),b(_r,c,u,d),b(_r,c,f,y),b(_r,c,y,u),b(_r,s,w,_),b(_r,s,d,w)])))}(),Oi={$:0},wy=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Sy=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(a),m=Ui(b(om,u,l,c)),s={q:m,cy:$r(u)},d={q:m,cy:$r(l)},g={q:m,cy:$r(c)};return t(z,s,t(z,d,t(z,g,n)))}),yl=function(e){var r=e;return r.H},Cy=O(function(e,r,n,a){if(r.$===1)return j;var i=r.a;if(n.$===1)return j;var o=n.a;if(a.$===1)return j;var c=a.a;return N(b(e,i,o,c))}),xl=4294967295>>>32-rt,wl=$s,Ly=T(function(e,r,n){e:for(;;){var a=xl&r>>>e,i=t(wl,a,n);if(i.$){var m=i.a;return t(wl,xl&r,m)}else{var o=i.a,c=e-rt,l=r,u=o;e=c,r=l,n=u;continue e}}}),Py=function(e){return e>>>5<<5},My=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?j:ce(e,Py(n))>-1?N(t(wl,xl&e,o)):N(b(Ly,a,e,i))}),Sl=function(e){var r=e;return r.au},Cl=v(function(e,r){return t(My,e,Sl(r))}),zy=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(Cy,T(function(c,l,u){return I(c,l,u)}),t(Cl,a,e),t(Cl,i,e),t(Cl,o,e))};return t(bn,r,yl(e))},Ty=T(function(e,r,n){e:for(;;){var a=t(No,mr,e),i=a.a,o=a.b;if(ce(Ro(i),mr)<0)return t(Uu,!0,{C:r,n,r:i});var c=o,l=t(z,Gu(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Ll=function(e){return e.b?b(Ty,e,D,0):Ru},ky=v(function(e,r){return!t(it,t(ut,I0,e),r)}),Dy=function(e){var r=e.a;return r},um=v(function(e,r){var n=Dy(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ce(o,n)<0&&c>=0&&ce(c,n)<0&&l>=0&&ce(l,n)<0};return t(ky,a,r)?{H:r,au:e}:{H:t(F$,a,r),au:e}}),Vy=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Bt=Vy({d5:1,ei:3,eS:4}),Ji=v(function(e,r){var n=Ra(r),a=Ra(e);return M(I(a.io,a.is,a.dV),I(n.io,n.is,n.dV))}),$m=b(Tt,0,0,0),Pl=fr(function(e,r,n,a,i,o){var c=o.a,l=o.b,u=o.c,m=t(ui,t(Ji,e,r),i);if(m.$){var d={q:$m,cy:$r(r)},g={q:$m,cy:$r(e)},f=u+1,_=u;return I(t(z,I(n,_,f),t(z,I(n,f,a),c)),t(z,d,t(z,g,l)),u+2)}else{var s=m.a;return I(t(z,I(n,s,a),c),l,u)}}),Ay=Be(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,m=n.b,s=e(u),d=e(l),g=e(c),f=a+2,_=a+1,y=a,w=e,S=r,x=m,C=a+3,F=Ke(Pl,s,g,f,y,r,Ke(Pl,d,s,_,f,r,Ke(Pl,g,d,y,_,r,i)));e=w,r=S,n=x,a=C,i=F;continue e}else{var q=i,K=q.a,W=q.b;return M(K,nr(W))}}),Fy=Be(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,m=r.b,s=e(u),d=e(l),g=e(c),f=n+2,_=n+1,y=n,w=b(pa,t(Ji,g,s),f,b(pa,t(Ji,s,d),_,b(pa,t(Ji,d,g),y,i))),S=t(z,I(y,_,f),a),x=e,C=m,F=n+3,q=S,K=w;e=x,r=C,n=F,a=q,i=K;continue e}else return I(a,i,n)}),la=T(function(e,r,n){var a=zy(n),i=b(He,Sy(r),D,a),o=V(Fy,r,a,0,D,rc),c=o.a,l=o.b,u=o.c,m=V(Ay,r,l,a,0,I(c,D,u)),s=m.a,d=m.b,g=xn(d)?i:G(i,d);return b(wy,e,t(um,Ll(g),s),t(Bt,g,s))}),Ml=function(e){return{H:t(J,function(r){return I(3*r,3*r+1,3*r+2)},t(Vr,0,Bn(e)-1)),au:Ll(tr(t(J,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},vm=function(e){switch(e.$){case 0:return Oi;case 1:var r=e.a,n=e.b,a=t(J,Et,n);return b(la,r,Fr,Ml(a));case 2:var r=e.a,n=e.b,a=t(J,Et,n);return b(la,r,Fr,Ml(a));case 3:var r=e.a,i=e.b;return b(la,r,Fr,i);case 4:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 5:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 6:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 7:var r=e.a,i=e.b;return b(la,r,function(o){return o.cy},i);case 8:return Oi;case 9:return Oi;default:return Oi}},fm=vm(lm),mm={$:0},E=mm,Je=v(function(e,r){return{$:1,a:e,b:r}}),Iy={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},Ey=1029,By=function(e){return{$:5,a:e}},sm=function(e){var r=e;return By(r)},jy=sm(Ey),Ry=1028,Ny=sm(Ry),vr=T(function(e,r,n){return r===1?e?t(z,jy,n):t(z,Ny,n):n}),dm={src:`
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
    `,attributes:{position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},zl=O(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,s,d){return V(Me,b(vr,l,a,d),dm,Iy,n,{b8:e,c,d:o,e:m,f:i,g:u})}))}),Tl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},pm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},fn=O(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,s,d){return V(Me,b(vr,l,a,d),pm,Tl,n,{aO:e,c,d:o,e:m,f:i,g:u})}))}),gm=v(function(e,r){return{$:3,a:e,b:r}}),Gy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cx",sceneProperties:"f"}},hm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cx",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Hy=O(function(e,r,n,a){return t(gm,n,be(function(i,o,c,l,u,m,s,d){return V(Me,d,hm,Gy,a,{aO:e,c,d:o,cx:r,e:m,f:i,g:u})}))}),kl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",sceneProperties:"f"}},jt=function(e){var r=e;return r},qi=sp,mn=Be(function(e,r,n,a,i){return t(Je,n,be(function(o,c,l,u,m,s,d,g){return V(Me,b(vr,u,i,g),pm,kl,a,{a7:t(qi,jt(r),e),c:l,d:c,e:s,f:o,g:m})}))}),Wy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",pointRadius:"cx",sceneProperties:"f"}},Uy=Be(function(e,r,n,a,i){return t(gm,a,be(function(o,c,l,u,m,s,d,g){return V(Me,g,hm,Wy,i,{a7:t(qi,jt(r),e),c:l,d:c,cx:n,e:s,f:o,g:m})}))}),bm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},_m={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Yi=O(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return V(Me,b(vr,l,a,d),_m,bm,n,{U:f,bG:g.bG,cn:g.cn,co:g.co,cp:g.cp,de:e,c,d:o,e:m,f:i,g:u})}))}),ym={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColorTexture:"df",normalMapTexture:"bh",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},xm={src:`
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
    `,attributes:{normal:"q",position:"cy",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Oy=fr(function(e,r,n,a,i,o){return t(Je,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,y=g.b;return V(Me,b(vr,m,o,f),xm,ym,i,{U:y,bG:_.bG,cn:_.cn,co:_.co,cp:_.cp,df:e,c:u,d:l,bh:r,e:d,f:c,bn:n,g:s})}))}),wm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cT",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallicTexture:"di",normalMapTexture:"bh",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},Jy=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return t(Je,u,be(function(d,g,f,_,y,w,S,x){var C=S.a,F=S.b;return V(Me,b(vr,_,s,x),xm,wm,m,{cT:e,cV:r,cW:o,cX:a,U:F,bG:C.bG,cn:C.cn,co:C.co,cp:C.cp,di:i,c:f,d:g,bh:c,e:w,dC:n,f:d,bn:l,g:y})}))}}}}}}}}}}},Sm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cS",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},Zi=fr(function(e,r,n,a,i,o){return t(Je,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,y=g.b;return V(Me,b(vr,m,o,f),_m,Sm,i,{cS:e,U:y,bG:_.bG,cn:_.cn,co:_.co,cp:_.cp,dh:n,c:u,d:l,e:d,dB:r,f:c,g:s})}))}),qy=function(e){return{$:0,a:e}},Cm=v(function(e,r){return{$:1,a:e,b:r}}),Rt=v(function(e,r){if(r.$){var n=r.a.E;return M(n,1)}else return r.a,M(e,0)}),Yy=function(e){return P(Va,Ea(e),Ba(e),ja(e),1)},Dl=P(Va,0,0,0,0),Ki=v(function(e,r){if(r.$){var a=r.a.E;return M(a,Dl)}else{var n=r.a;return M(e,Yy(n))}}),Lm=v(function(e,r){var n=M(e,r);if(n.a.$){var i=n.a.a.E;return t(Cm,M(i,Dl),t(Rt,i,r))}else if(n.b.$){var i=n.b.a.E;return t(Cm,t(Ki,i,e),t(Rt,i,r))}else{var a=n.a.a;return n.b.a,qy(a)}}),Zy=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xi=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ky=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Xy=function(e){return t(yr,e,1)},Vl=t(yr,0,0),Na=v(function(e,r){if(r.$){var a=r.a.E;return M(a,Vl)}else{var n=r.a;return M(e,Xy(n))}}),Pm=O(function(e,r,n,a){var i=P(Ky,e,r,n,a);if(i.a.$){var u=i.a.a.E;return P(Xi,M(u,Dl),t(Na,u,r),t(Na,u,n),t(Rt,u,a))}else if(i.b.$){var u=i.b.a.E;return P(Xi,t(Ki,u,e),M(u,Vl),t(Na,u,n),t(Rt,u,a))}else if(i.c.$){var u=i.c.a.E;return P(Xi,t(Ki,u,e),t(Na,u,r),M(u,Vl),t(Rt,u,a))}else if(i.d.$){var u=i.d.a.E;return P(Xi,t(Ki,u,e),t(Na,u,r),t(Na,u,n),M(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(Zy,o,c,l)}}),Qy={src:`
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
    `,attributes:{},uniforms:{backlight:"cQ",colorTexture:"b8",sceneProperties:"f"}},Al=Be(function(e,r,n,a,i){return t(Je,n,be(function(o,c,l,u,m,s,d,g){return V(Me,b(vr,u,i,g),dm,Qy,a,{cQ:jt(r),b8:e,c:l,d:c,e:s,f:o,g:m})}))}),Mm={src:`
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
    `,attributes:{normal:"q",position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ex=O(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return V(Me,b(vr,l,a,d),Mm,ym,n,{U:f,bG:g.bG,cn:g.cn,co:g.co,cp:g.cp,df:e,c,d:o,bh:e,e:m,f:i,bn:0,g:u})}))}),rx=fo(function(e,r,n,a,i,o,c,l,u){return t(Je,c,be(function(m,s,d,g,f,_,y,w){var S=y.a,x=y.b;return V(Me,b(vr,g,u,w),Mm,wm,l,{cT:e,cV:r,cW:o,cX:a,U:x,bG:S.bG,cn:S.cn,co:S.co,cp:S.cp,di:i,c:d,d:s,bh:e,e:_,dC:n,f:m,bn:0,g:f})}))}),Nt=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),nx=function(e){var r=e;return b(Nt,r.eO,r.eL,.5)},ax=function(e){var r=e;return b(Nt,r.eP,r.eM,.5)},tx=function(e){var r=e;return b(Nt,r.eQ,r.eN,.5)},ix=function(e){return b(Oe,nx(e),ax(e),tx(e))},ie=function(e){var r=Vf(e),n=r.a,a=r.b,i=r.c;return{f4:Hi(ix(e)),gD:n/2,gE:a/2,gF:i/2}},Fl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return P(zl,l,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(zl,l,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(zl,l,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return P(Hy,n,c,ie(a),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return V(Al,l,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(Al,l,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(Al,l,m,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return V(mn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return V(mn,u,m,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return V(Uy,u,m,c,ie(a),i)}}case 2:e.a;var s=e.b,d=e.c,g=t(Lm,s,d);if(g.$){var y=g.a,w=y.a;y.b;var S=g.b,x=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(ex,w,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Ke(Oy,w,x,C,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}else{var f=g.a;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,_=r.d;return P(Yi,f,ie(a),i,_);case 3:return E;case 4:var a=r.a,i=r.c,_=r.d;return P(Yi,f,ie(a),i,_);case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(Yi,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(Yi,f,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var F=e.b,q=e.c,K=e.d,d=e.e,W=P(Pm,F,q,K,d);if(W.$){var ne=W.a,fe=ne.a,ye=ne.b,me=W.b,se=me.a,xe=me.b,de=W.c,De=de.a,ze=de.b,Ze=W.d,x=Ze.a,C=Ze.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return is(rx,fe,ye,se,xe,De,ze,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Jy(fe)(ye)(se)(xe)(De)(ze)(x)(C)(ie(a))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=W.a,Z=W.b,B=W.c;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,o=r.d;return Ke(Zi,Y,Z,B,ie(a),i,o);case 3:return E;case 4:var a=r.a,i=r.c,o=r.d;return Ke(Zi,Y,Z,B,ie(a),i,o);case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Ke(Zi,Y,Z,B,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Ke(Zi,Y,Z,B,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}}}),Il=function(e){var r=e;return r.io},El=function(e){var r=e;return r.is},Bl=function(e){var r=e;return r.dV},ox=function(e){var r=e,n=Bl(r.dW),a=El(r.dW),i=Il(r.dW),o=Bl(r.dU),c=El(r.dU),l=Il(r.dU),u=Bl(r.dT),m=El(r.dT),s=Il(r.dT);return s*c*n+m*o*i+u*l*a-u*c*i-m*l*n-s*o*a>0},cx=function(e){var r=Hi(ka(e)),n=Pr(Qn(e)),a=Pr(Xn(e)),i=Pr(Kn(e));return{ek:ox(e),t:i.io,u:i.is,v:i.dV,w:a.io,x:a.is,y:a.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cD:1}},Ga=v(function(e,r){return{$:5,a:e,b:r}}),zm=v(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var a=n.a,i=n.b,o=t(xf,a,e);return t(Ga,o,i);case 1:return t(Ga,e,n);case 3:return t(Ga,e,n);case 2:return t(Ga,e,n);default:return t(Ga,e,n)}}),Tm=v(function(e,r){return t(zm,cx(e),r)}),Qi=function(e){return{$:2,a:e}},lx=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dV:i*o.dV},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),ux=gp,$x=pp,km=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=$x(a),_=f.io,y=f.is,w=f.dV,S=f.ft,x=ux({ft:S,io:_*s,is:y*d,dV:w*g});return Oa(r,n,x,i,o,c,l,u,m)}}}}}}}}}},jl=v(function(e,r){switch(r.$){case 0:return mm;case 5:var n=r.a,a=r.b;return t(Ga,n,t(jl,e,a));case 1:var i=r.a,o=r.b;return t(Je,t(lx,e,i),t(km,e,o));case 3:return r;case 2:var o=r.a;return Qi(t(km,e,o));default:var c=r.a;return Bf(t(J,jl(e),c))}}),Rl=v(function(e,r){var n=r;return t(jl,e,n)}),Nl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Dm=7683,Vm=7682,vx=b(vl,{dd:0,dy:0,dS:15},{bA:er,bP:Aa,bY:er,bZ:Dm},{bA:er,bP:Aa,bY:er,bZ:Vm}),fx=b(vl,{dd:0,dy:0,dS:15},{bA:er,bP:Aa,bY:er,bZ:Vm},{bA:er,bP:Aa,bY:er,bZ:Dm}),Gl=v(function(e,r){return e?t(z,fx,r):t(z,vx,r)}),mx={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},sx=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,c,l,u,m){return V(Me,t(Gl,o,m),mx,Nl,r,{c:i,d:a,e:l,f:n,cE:u,g:c})}))}else return j},eo=function(e){var r=sx(e);if(r.$)return E;var n=r.a;return Qi(n)},dx=O(function(e,r,n,a){var i=t(Fl,n,lm),o=function(){var s=M(e,r);return s.a?s.b?At($([i,eo(fm)])):i:s.b?eo(fm):E}(),c=Rc(a),l=c.a,u=c.b,m=c.c;return t(Tm,jc(a),t(Rl,I(l,u,m),o))}),px=v(function(e,r){return P(dx,!0,!0,e,r)}),Am=v(function(e,r){return{$:0,a:e,b:r}}),gx=function(e){var r=xc(e),n=r.hu,a=r.gA,i=r.fS;return b(Tt,n,a,i)},hx=function(e){return t(Am,0,Xc(gx(e)))},bx=function(e){var r=e;return r.m},Gt=function(e){var r=e;return Dn(r)},_x=v(function(e,r){var n=r;return n/e}),Fm=function(e){var r=e;return{io:Dn(r),is:na(r)}},yx=v(function(e,r){var n=e.cy,a=e.q;return t(z,{q:Ui(a),cy:$r(n)},r)}),xx=Ot(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,m=ja(l.cy),s=Ba(l.cy),d=Ea(l.cy),g=t(wa,e,d),f=t(qe,r,d),_=t(wa,n,s),y=t(qe,a,s),w=t(wa,i,m),S=t(qe,o,m),x=u;e=g,r=f,n=_,a=y,i=w,o=S,c=x;continue e}else return nm({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),Im=v(function(e,r){var n=ja(e.cy),a=Ba(e.cy),i=Ea(e.cy);return mo(xx,i,i,a,a,n,n,r)}),wx=function(e){var r=b(Tu,yx,D,Sl(e));if(r.b){var n=r.a,a=r.b,i=t(Bt,r,yl(e)),o=t(Im,n,a);return P(em,o,e,i,0)}else return bl},Em=v(function(e,r){var n=e,a=r,i=n.dU,o=i,c=n.dT,l=c;return{io:a.io*l.io+a.is*o.io,is:a.io*l.is+a.is*o.is,dV:a.io*l.dV+a.is*o.dV}}),ro=function(e){var r=e;return na(r)},Hl=function(e){return ra(2*kn*e)},Sx=Fr,Bm=Sx({dm:aa,dT:Uc,dU:Jc}),jm=function(){var e=72,r=t(_x,e,Hl(1)),n=ca(1),a=Da(qc),i=Da(ff),o=ca(1),c=t(Ee,.5,o),l=b(Oe,Er,Er,c),u=t(Ee,-.5,o),m=b(Oe,Er,Er,u),s=function(f){var _=t(Ee,f,r),y=Da(t(Em,Bm,Fm(_))),w=t(Ee,Gt(_),n),S=t(Ee,ro(_),n),x=b(Oe,w,S,c),C=b(Oe,w,S,u),F=t(Pi,e,f+1),q=t(Ee,F,r),K=Da(t(Em,Bm,Fm(q))),W=t(Ee,Gt(q),n),Y=t(Ee,ro(q),n),Z=b(Oe,W,Y,u),B=b(Oe,W,Y,c);return $([I({q:i,cy:m},{q:i,cy:Z},{q:i,cy:C}),I({q:y,cy:C},{q:K,cy:Z},{q:K,cy:B}),I({q:y,cy:C},{q:K,cy:B},{q:y,cy:x}),I({q:a,cy:l},{q:a,cy:x},{q:a,cy:B})])},d=t(J,s,t(Vr,0,e-1)),g=Ml(tr(d));return hl(wx(g))}(),Rm=vm(jm),Cx=function(e){var r=e;return r.gm},Lx=function(e){var r=e;return r.dm},Px=function(e){var r=Cx(e),n=il(r),a=n.a,i=n.b;return un({dm:Lx(e),dT:a,dU:i,dW:r})},Mx=function(e){var r=e;return r.g5},zx=function(e){var r=e;return r.hs},Tx=O(function(e,r,n,a){var i=Px(bx(a)),o=t(Fl,n,jm),c=function(){var d=M(e,r);return d.a?d.b?At($([o,eo(Rm)])):o:d.b?eo(Rm):E}(),l=zx(a),u=l,m=Mx(a),s=m;return t(Tm,i,t(Rl,I(u,u,s),c))}),kx=v(function(e,r){return P(Tx,!0,!0,e,r)}),Nm={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Gm={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Ht=function(e){var r=Et(e),n=r.a,a=r.b,i=r.c,o=Ra(n),c=Ra(a),l=Ra(i);return Yr({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},no=cm($([I({dJ:0},{dJ:1},{dJ:2})])),Dx=v(function(e,r){var n=am(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return t(Je,a,be(function(x,C,F,q,K,W,Y,Z){return V(Me,b(vr,q,0,Z),Nm,Tl,no,{aO:i,c:F,d:C,e:W,f:x,bV:Ht(r),g:K})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,c=e.c;return t(Je,a,be(function(x,C,F,q,K,W,Y,Z){return V(Me,b(vr,q,0,Z),Nm,kl,no,{a7:t(qi,jt(c),o),c:F,d:C,e:W,f:x,bV:Ht(r),g:K})}));case 2:e.a;var l=e.b,u=e.c,m=t(Lm,l,u);if(m.$)return E;var s=m.a;return t(Je,a,be(function(x,C,F,q,K,W,Y,Z){var B=Y.a,ne=Y.b;return V(Me,b(vr,q,0,Z),Gm,bm,no,{U:ne,bG:B.bG,cn:B.cn,co:B.co,cp:B.cp,de:s,c:F,d:C,e:W,f:x,bV:Ht(r),g:K})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=P(Pm,d,g,f,u);if(_.$)return E;var y=_.a,w=_.b,S=_.c;return t(Je,a,be(function(x,C,F,q,K,W,Y,Z){var B=Y.a,ne=Y.b;return V(Me,b(vr,q,0,Z),Gm,Sm,no,{cS:y,U:ne,bG:B.bG,cn:B.cn,co:B.co,cp:B.cp,dh:S,c:F,d:C,e:W,dB:w,f:x,bV:Ht(r),g:K})}))}}),Vx=function(){var e=$([{bm:t(yr,0,1)},{bm:t(yr,1,1)},{bm:t(yr,2,1)},{bm:t(yr,0,-1)},{bm:t(yr,1,-1)},{bm:t(yr,2,-1)}]),r=$([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return t(Bt,e,r)}(),Ax={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",triangleVertexPositions:"bV",viewMatrix:"g"}},Hm=function(e){return Qi(be(function(r,n,a,i,o,c,l,u){return V(Me,t(Gl,i,u),Ax,Nl,Vx,{c:a,d:n,e:c,f:r,cE:l,bV:Ht(e),g:o})}))},Fx=O(function(e,r,n,a){var i=t(Dx,n,a),o=M(e,r);return o.a?o.b?At($([i,Hm(a)])):i:o.b?Hm(a):E}),Ix=v(function(e,r){return P(Fx,!0,!0,e,r)}),Ex=v(function(e,r){var n=oa(r),a=oa(e),i=ia(r),o=ia(e),c=ta(r),l=ta(e);return{eL:t(Ie,l,c),eM:t(Ie,o,i),eN:t(Ie,a,n),eO:t(Ne,l,c),eP:t(Ne,o,i),eQ:t(Ne,a,n)}}),Bx=function(e){var r=Nc(e),n=r.a,a=r.b;return t(Ex,n,a)},Wm={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},jx=v(function(e,r){return{$:1,a:e,b:r}}),Rx=jx({d5:2,ei:0,eS:1}),Um=Rx($([M({es:0},{es:1})])),Nx=v(function(e,r){var n=Bx(r),a=ie(n),i=Nc(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var l=e.b.a;return t(Je,a,be(function(m,s,d,g,f,_,y,w){return V(Me,w,Wm,Tl,Um,{aO:l,eq:$r(c),er:$r(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return E;var l=e.b.a,u=e.c;return t(Je,a,be(function(s,d,g,f,_,y,w,S){return V(Me,S,Wm,kl,Um,{a7:t(qi,jt(u),l),eq:$r(c),er:$r(o),c:g,d,e:y,f:s,g:_})}));case 2:return E;default:return E}}),Gx=v(function(e,r){return t(Nx,e,r)}),Om=v(function(e,r){var n=e,a=r;return n/a}),Hx=Be(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(z,o,i);if(le(r,e))return c;var l=e,u=r-1,m=n,s=a,d=c;e=l,r=u,n=m,a=s,i=d;continue e}}),Jm=v(function(e,r){return e<1?D:V(Hx,0,e,e,r,D)}),Wx=v(function(e,r){var n=e.cy,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(z,{q:Ui(a),cy:$r(n),O:t(yr,c,l)},r)}),Ux=function(e){var r=b(Tu,Wx,D,Sl(e));if(r.b){var n=r.a,a=r.b,i=t(Bt,r,yl(e)),o=t(Im,n,a);return P(rm,o,e,i,0)}else return bl},qm=v(function(e,r){var n=e,a=r,i=Dn(a);return{io:i*Dn(n),is:i*na(n),dV:na(a)}}),Ox=function(){var e=ca(1),r=72,n=t(Vr,0,r-1),a=t(Jm,r,t(Nt,Er,Hl(1))),i=Qa(r/2),o=t(Vr,0,i-1),c=t(Jm,i,t(Nt,Dt(90),Dt(-90))),l=Ll(tr(t(J,function(s){return t(J,function(d){return{q:Da(t(qm,s,d)),cy:b(Oe,t(Ee,Gt(d)*Gt(s),e),t(Ee,Gt(d)*ro(s),e),t(Ee,ro(d),e)),O:M(t(Om,s,Hl(1)),t(Om,t(Vt,Dt(90),d),Dt(180)))}},c)},a))),u=v(function(s,d){return s*(i+1)+d}),m=tr(t(J,function(s){return tr(t(J,function(d){var g=t(u,s+1,d),f=t(u,s,d),_=t(u,s+1,d+1),y=t(u,s,d+1);return $([I(y,_,g),I(y,g,f)])},o))},n));return hl(Ux(t(um,l,m)))}(),ao=72,to=2*ao,Jx=v(function(e,r){e:for(;;){var n=to+1,a=t(Pi,to,2*e+3),i=t(Pi,to,2*e+2),o=2*e+1,c=2*e,l=to,u=t(z,I(l,c,i),t(z,I(c,a,i),t(z,I(c,o,a),t(z,I(o,n,a),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),qx=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Yx=v(function(e,r){e:for(;;){var n=b(qx,0,2*kn,e/ao),a={b$:n,cu:0,cB:1},i={b$:n,cu:1,cB:1},o=t(z,a,t(z,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Zx=function(){var e=t(Yx,ao-1,$([{b$:0,cu:0,cB:0},{b$:0,cu:1,cB:0}])),r=t(Jx,ao-1,D);return t(Bt,e,r)}(),Kx={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cu",radiusScale:"cB"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},Ym=function(e){return Qi(be(function(r,n,a,i,o,c,l,u){return V(Me,t(Gl,!0,u),Kx,Nl,Zx,{aO:b(Tt,0,0,1),c:a,d:n,e:c,f:r,cE:l,g:o})}))},Xx=function(e){var r=im(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cD:1}},Qx=v(function(e,r){return t(zm,Xx(e),r)}),ew=O(function(e,r,n,a){var i=t(Fl,n,Ox),o=function(){var u=M(e,r);return u.a?u.b?At($([i,Ym()])):i:u.b?Ym():E}(),c=Hc(a),l=c;return t(Qx,t(ji,aa,Gc(a)),t(Rl,I(l,l,l),o))}),rw=v(function(e,r){return P(ew,!0,!0,e,r)}),nw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),aw=Be(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),tw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(Am,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(nw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(sf,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return V(aw,r,n,o,c,i)}},iw=tw,Zm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(px,r,n)]);case 1:var r=e.a,a=e.b;return $([t(Ix,r,a)]);case 3:var r=e.a,i=e.b;return $([t(rw,iw(r),i)]);case 2:var r=e.a,o=e.b;return $([t(kx,r,o)]);case 4:var c=e.a,l=e.b;return $([t(Gx,hx(c),l)]);default:var u=e.a;return t(Wn,Zm,u)}},ow=function(e){return t(Wn,Zm,e)},cw=v(function(e,r){return vy({a1:L_(e.fO),f0:e.f0,a3:P_(.5),cY:e.cY,a5:M(_f(Le(e.dD.im)),_f(Le(e.dD.gH))),a9:ow(r),hI:!0,hZ:t(qm,ra(e.hY),ra(e.h_)),fm:Yc})}),Km=P(yt,255/255,255/255,255/255,1),lw=v(function(e,r){return t(cw,{fO:Km,f0:C_({d9:{io:t(nl,"camera x",e),is:t(nl,"camera y",e),dV:t(nl,"camera z",e)},bb:{io:0,is:0,dV:0},fm:{io:0,is:1,dV:0}}),cY:e.cY,dD:e.dD,hY:-hr(135),h_:-hr(45)},$([t(Pt,-4,t(gf,pf(Km),I(40,40,1))),t(Pt,-.5,c_(e))]))}),uw=P(b1,lw,L1,C1,_1);const $w={Main:{init:uw(t(U,function(e){return ar({gY:e})},t(H,"inputs",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return ar({a4:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(H,"clock",je))},t(H,"devicePixelRatio",je))},t(H,"dt",je))},t(H,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(s){return t(U,function(d){return ar({fJ:d,gd:s,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",fi(ga)))},t(H,"left",_e))},t(H,"pressedKeys",fi(ga)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return ar({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",je))},t(H,"y",je))))},t(H,"screen",t(U,function(r){return t(U,function(n){return ar({gH:n,im:r})},t(H,"height",je))},t(H,"width",je))))},t(H,"wheel",t(U,function(e){return t(U,function(r){return ar({gh:r,gi:e})},t(H,"deltaX",je))},t(H,"deltaY",je)))))))(0)}},X={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},vw=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(X.keyboard.downs.push(f.code),X.keyboard.pressedKeys.push(f.code),r(f)&&(X.keyboard.control=!0),n(f)&&(X.keyboard.alt=!0),a(f)&&(console.log("yo"),X.keyboard.shift=!0),i(f)&&(X.keyboard.left=!0),o(f)&&(X.keyboard.right=!0),c(f)&&(X.keyboard.up=!0),l(f)&&(console.log("yey"),X.keyboard.down=!0))}),window.addEventListener("keyup",f=>{X.keyboard.pressedKeys=X.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(X.keyboard.control=!1,X.keyboard.pressedKeys=[]),n(f)&&(X.keyboard.alt=!1),a(f)&&(X.keyboard.shift=!1),i(f)&&(X.keyboard.left=!1),o(f)&&(X.keyboard.right=!1),c(f)&&(X.keyboard.up=!1),l(f)&&(X.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{X.pointer.x=-.5*X.screen.width+f.pageX,X.pointer.y=.5*X.screen.height-f.pageY,u(f)&&(X.pointer.down=!0,X.pointer.isDown=!0),m(f)&&(X.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{X.pointer.move=!0,X.pointer.x=-.5*X.screen.width+f.pageX,X.pointer.y=.5*X.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(X.pointer.up=!0,X.pointer.isDown=!1),m(f)&&(X.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(X.pointer.up=!0,X.pointer.isDown=!1),m(f)&&(X.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{X.wheel.deltaX=f.deltaX,X.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(X)}),window.addEventListener("focus",f=>{s(X)}),window.addEventListener("visibilitychange",f=>{s(X)}),window.addEventListener("resize",()=>{X.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,y=_-X.clock;y<.009||(X.dt=y,X.clock=_,e.ports.tick.send(X),d(X)),window.requestAnimationFrame(g)}},fw=$w.Main.init({node:document.querySelector("#app div"),flags:{inputs:X}});vw(fw);
