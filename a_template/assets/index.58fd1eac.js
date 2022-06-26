const es=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};es();function sn(e,r,n){return n.a=e,n.f=r,n}function f(e){return sn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return sn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function J(e){return sn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Be(e){return sn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function fr(e){return sn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function jt(e){return sn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function be(e){return sn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,a,i,o,c,l,u)}}}}}}}})}function ao(e){return sn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return e(r,n,a,i,o,c,l,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function V(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Ke(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function to(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function Wa(e,r,n,a,i,o,c,l,u){return e.a===8?e.f(r,n,a,i,o,c,l,u):e(r)(n)(a)(i)(o)(c)(l)(u)}function rs(e,r,n,a,i,o,c,l,u,m){return e.a===9?e.f(r,n,a,i,o,c,l,u,m):e(r)(n)(a)(i)(o)(c)(l)(u)(m)}var ns=[];function as(e){return e.length}var ts=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),is=f(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),os=f(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});f(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var cs=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});f(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});f(function(e,r){return r});f(function(e,r){return console.log(e+": "+ls()),r});function ls(e){return"<internals>"}function ca(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ue(e,r){for(var n,a=[],i=io(e,r,0,a);i&&(n=a.pop());i=io(n.a,n.b,0,a));return i}function io(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ca(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=xu(e),r=xu(r));for(var i in e)if(!io(e[i],r[i],n+1,a))return!1;return!0}f(ue);f(function(e,r){return!ue(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}f(function(e,r){return ce(e,r)<0});f(function(e,r){return ce(e,r)<1});f(function(e,r){return ce(e,r)>0});f(function(e,r){return ce(e,r)>=0});var us=f(function(e,r){var n=ce(e,r);return n<0?Su:n?r0:wu}),Ua=0;function z(e,r){return{a:e,b:r}}function F(e,r,n){return{a:e,b:r,c:n}}function Er(e){return e}function Te(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}f(G);function G(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Br(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Br(e.a,r);return n}var D={$:0};function Br(e,r){return{$:1,a:e,b:r}}var $s=f(Br);function $(e){for(var r=D,n=e.length;n--;)r=Br(e[n],r);return r}function Nt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var vs=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});J(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Be(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return $(o)});fr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(V(e,r.a,n.a,a.a,i.a,o.a));return $(c)});f(function(e,r){return $(Nt(r).sort(function(n,a){return ce(e(n),e(a))}))});f(function(e,r){return $(Nt(r).sort(function(n,a){var i=t(e,n,a);return i===wu?0:i===Su?-1:1}))});f(function(e,r){return e+r});f(function(e,r){return e-r});f(function(e,r){return e*r});f(function(e,r){return e/r});f(function(e,r){return e/r|0});var fs=f(Math.pow);f(function(e,r){return r%e});var ms=f(function(e,r){var n=r%e;return e===0?ca(11):n>0&&e<0||n<0&&e>0?n+e:n}),ss=Math.PI,ds=Math.cos,ps=Math.sin,gs=Math.tan;f(Math.atan2);function hs(e){return e}function bs(e){return e===1/0||e===-1/0}var _s=Math.ceil,ys=Math.floor,xs=Math.round,ws=Math.sqrt,Fl=Math.log,Ss=isNaN;function Cs(e){return!e}f(function(e,r){return e&&r});f(function(e,r){return e||r});f(function(e,r){return e!==r});var Ls=f(function(e,r){return e+r});function Ps(e){var r=e.charCodeAt(0);return isNaN(r)?R:N(55296<=r&&r<=56319?z(Er(e[0]+e[1]),e.slice(2)):z(Er(e[0]),e.slice(1)))}f(function(e,r){return e+r});function zs(e){return e.length}f(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Er(r[i]+r[i+1])),i+=2;continue}a[i]=e(Er(r[i])),i++}return a.join("")});f(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(Er(o))&&n.push(o)}return n.join("")});function Ms(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,Er(o),r)}return r});var Ts=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Er(i),r)}return r}),ks=f(function(e,r){return r.split(e)}),Ds=f(function(e,r){return r.join(e)}),Vs=T(function(e,r,n){return n.slice(e,r)});function As(e){return $(e.trim().split(/\s+/g))}function Is(e){return e.toLowerCase()}f(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Er(a)))return!0}return!1});var Fs=f(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Er(a)))return!1}return!0}),Es=f(function(e,r){return r.indexOf(e)>-1}),Bs=f(function(e,r){return r.indexOf(e)===0});f(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Rs=f(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function El(e){return e+""}function js(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return R;r=10*r+o-48}return i==a?R:N(n==45?-r:r)}function Ns(e){if(e.length===0||/[\sxbo]/.test(e))return R;var r=+e;return r===r?N(r):R}function Gs(e){return Nt(e).join("")}function Hs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ws(e){return Er(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Us(e){return{$:0,a:e}}function Os(e){return{$:1,a:e}}function oo(e){return{$:2,b:e}}var Js=oo(function(e){return typeof e=="boolean"?Ae(e):Rr("a BOOL",e)}),qs=oo(function(e){return typeof e=="number"?Ae(e):Rr("a FLOAT",e)}),Ys=oo(function(e){return typeof e=="string"?Ae(e):e instanceof String?Ae(e+""):Rr("a STRING",e)});function Zs(e){return{$:3,b:e}}var Ks=f(function(e,r){return{$:6,d:e,b:r}});f(function(e,r){return{$:7,e,b:r}});function dn(e,r){return{$:9,f:e,g:r}}var Xs=f(function(e,r){return{$:10,b:r,h:e}}),Qs=f(function(e,r){return dn(e,[r])}),ed=T(function(e,r,n){return dn(e,[r,n])});J(function(e,r,n,a){return dn(e,[r,n,a])});Be(function(e,r,n,a,i){return dn(e,[r,n,a,i])});fr(function(e,r,n,a,i,o){return dn(e,[r,n,a,i,o])});jt(function(e,r,n,a,i,o,c){return dn(e,[r,n,a,i,o,c])});be(function(e,r,n,a,i,o,c,l){return dn(e,[r,n,a,i,o,c,l])});ao(function(e,r,n,a,i,o,c,l,u){return dn(e,[r,n,a,i,o,c,l,u])});f(function(e,r){try{var n=JSON.parse(r);return _r(e,n)}catch(a){return Qe(t(Lo,"This is not valid JSON! "+a.message,Xr(r)))}});var Bl=f(function(e,r){return _r(e,ua(r))});function _r(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ae(e.c):Rr("null",r);case 3:return Gt(r)?Rl(e.b,r,$):Rr("a LIST",r);case 4:return Gt(r)?Rl(e.b,r,rd):Rr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Rr("an OBJECT with a field named `"+n+"`",r);var a=_r(e.b,r[n]);return Dr(a)?a:Qe(t(Cu,n,a.a));case 7:var i=e.e;if(!Gt(r))return Rr("an ARRAY",r);if(i>=r.length)return Rr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=_r(e.b,r[i]);return Dr(a)?a:Qe(t(Lu,i,a.a));case 8:if(typeof r!="object"||r===null||Gt(r))return Rr("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var a=_r(e.b,r[c]);if(!Dr(a))return Qe(t(Cu,c,a.a));o=Br(z(c,a.a),o)}return Ae(nr(o));case 9:for(var l=e.f,u=e.g,m=0;m<u.length;m++){var a=_r(u[m],r);if(!Dr(a))return a;l=l(a.a)}return Ae(l);case 10:var a=_r(e.b,r);return Dr(a)?_r(e.h(a.a),r):a;case 11:for(var d=D,p=e.g;p.b;p=p.b){var a=_r(p.a,r);if(Dr(a))return a;d=Br(a.a,d)}return Qe(n0(nr(d)));case 1:return Qe(t(Lo,e.a,Xr(r)));case 0:return Ae(e.a)}}function Rl(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=_r(e,r[o]);if(!Dr(c))return Qe(t(Lu,o,c.a));i[o]=c.a}return Ae(n(i))}function Gt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function rd(e){return t(g0,e.length,function(r){return e[r]})}function Rr(e,r){return Qe(t(Lo,"Expecting "+e,Xr(r)))}function la(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return la(e.b,r.b);case 6:return e.d===r.d&&la(e.b,r.b);case 7:return e.e===r.e&&la(e.b,r.b);case 9:return e.f===r.f&&jl(e.g,r.g);case 10:return e.h===r.h&&la(e.b,r.b);case 11:return jl(e.g,r.g)}}function jl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!la(e[a],r[a]))return!1;return!0}var nd=f(function(e,r){return JSON.stringify(ua(r),null,e)+""});function Xr(e){return e}function ua(e){return e}function ad(){return[]}function td(){return{}}var id=T(function(e,r,n){return n[e]=ua(r),n});function od(e){return f(function(r,n){return n.push(ua(e(r))),n})}function In(e){return{$:0,a:e}}function cd(e){return{$:1,a:e}}function Qr(e){return{$:2,b:e,c:null}}var co=f(function(e,r){return{$:3,b:e,d:r}});f(function(e,r){return{$:4,b:e,d:r}});function ld(e){return{$:5,b:e}}var ud=0;function lo(e){var r={$:0,e:ud++,f:e,g:null,h:[]};return $o(r),r}function Nl(e){return Qr(function(r){r(In(lo(e)))})}function Gl(e,r){e.h.push(r),$o(e)}var $d=f(function(e,r){return Qr(function(n){Gl(e,r),n(In(Ua))})}),uo=!1,Hl=[];function $o(e){if(Hl.push(e),!uo){for(uo=!0;e=Hl.shift();)vd(e);uo=!1}}function vd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,$o(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}J(function(e,r,n,a){return vo(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function vo(e,r,n,a,i,o){var c=t(Bl,e,Xr(r?r.flags:void 0));Dr(c)||ca(2);var l={},u=n(c.a),m=u.a,d=o(g,m),p=fd(l,g);function g(v,_){var x=t(a,v,m);d(m=x.a,_),Ol(l,x.b,i(m))}return Ol(l,u.b,i(m)),p?{ports:p}:{}}var jr={};function fd(e,r){var n;for(var a in jr){var i=jr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=sd(i,r)}return n}function md(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function sd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l(u){return t(co,l,ld(function(m){var d=m.a;return m.$===0?b(i,n,d,u):o&&c?P(a,n,d.i,d.j,u):b(a,n,o?d.i:d.j,u)}))}return n.h=lo(t(co,l,e.b))}var dd=f(function(e,r){return Qr(function(n){e.g(r),n(In(Ua))})});f(function(e,r){return t($d,e.h,{$:0,a:r})});function Wl(e){return function(r){return{$:1,k:e,l:r}}}function pd(e){return{$:2,m:e}}f(function(e,r){return{$:3,n:e,o:r}});var Ul=[],fo=!1;function Ol(e,r,n){if(Ul.push({p:e,q:r,r:n}),!fo){fo=!0;for(var a;a=Ul.shift();)gd(a.p,a.q,a.r);fo=!1}}function gd(e,r,n){var a={};Ht(!0,r,a,null),Ht(!1,n,a,null);for(var i in e)Gl(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Ht(e,r,n,a){switch(r.$){case 1:var i=r.k,o=hd(e,i,a,r.l);n[i]=bd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Ht(e,c.a,n,a);return;case 3:Ht(e,r.o,n,{s:r.n,t:a});return}}function hd(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?jr[r].e:jr[r].f;return t(o,i,a)}function bd(e,r,n){return n=n||{i:D,j:D},e?n.i=Br(r,n.i):n.j=Br(r,n.j),n}function _d(e){jr[e]&&ca(3)}f(function(e,r){return r});function yd(e,r){return _d(e),jr[e]={f:xd,u:r,a:wd},Wl(e)}var xd=f(function(e,r){return function(n){return e(r(n))}});function wd(e,r){var n=D,a=jr[e].u,i=In(null);jr[e].b=i,jr[e].c=T(function(c,l,u){return n=l,i});function o(c){var l=t(Bl,a,Xr(c));Dr(l)||ca(4,e,l.a);for(var u=l.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Wt,en=typeof document!="undefined"?document:{};function mo(e,r){e.appendChild(r)}J(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(gn(e,function(){}),i),{}});function so(e){return{$:0,a:e}}var Jl=f(function(e,r){return f(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:go(n),e:i,f:e,b:o}})}),rn=Jl(void 0),Sd=f(function(e,r){return f(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:go(n),e:i,f:e,b:o}})}),Cd=Sd(void 0);function Ld(e,r,n,a){return{$:3,d:go(e),g:r,h:n,i:a}}var Pd=f(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pn(e,r){return{$:5,l:e,m:r,k:void 0}}f(function(e,r){return pn([e,r],function(){return e(r)})});T(function(e,r,n){return pn([e,r,n],function(){return t(e,r,n)})});var zd=J(function(e,r,n,a){return pn([e,r,n,a],function(){return b(e,r,n,a)})});Be(function(e,r,n,a,i){return pn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});fr(function(e,r,n,a,i,o){return pn([e,r,n,a,i,o],function(){return V(e,r,n,a,i,o)})});jt(function(e,r,n,a,i,o,c){return pn([e,r,n,a,i,o,c],function(){return Ke(e,r,n,a,i,o,c)})});be(function(e,r,n,a,i,o,c,l){return pn([e,r,n,a,i,o,c,l],function(){return to(e,r,n,a,i,o,c,l)})});ao(function(e,r,n,a,i,o,c,l,u){return pn([e,r,n,a,i,o,c,l,u],function(){return Wa(e,r,n,a,i,o,c,l,u)})});var ql=f(function(e,r){return{$:"a0",n:e,o:r}}),Md=f(function(e,r){return{$:"a1",n:e,o:r}}),po=f(function(e,r){return{$:"a2",n:e,o:r}}),Tr=f(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Yl(e){return e=="script"?"p":e}function Td(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function kd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Dd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Zl(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Vd=f(function(e,r){return r.$==="a0"?t(ql,r.n,Ad(e,r.o)):r});function Ad(e,r){var n=Vo(r);return{$:r.$,a:n?b(h0,n<3?Id:Fd,ar(e),r.a):t(Yt,e,r.a)}}var Id=f(function(e,r){return z(e(r.a),r.b)}),Fd=f(function(e,r){return{aA:e(r.aA),dH:r.dH,dw:r.dw}});function go(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Kl(r,i,ua(o)):r[i]=ua(o);continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?Kl(c,i,o):c[i]=o}return r}function Kl(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gn(e,r){var n=e.$;if(n===5)return gn(e.k||(e.k=e.m()),r);if(n===0)return en.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=gn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return ho(c,r,e.d),c}var c=e.f?en.createElementNS(e.f,e.c):en.createElement(e.c);Wt&&e.c=="a"&&c.addEventListener("click",Wt(c)),ho(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)mo(c,gn(n===1?l[u]:l[u].b,r));return c}function ho(e,r,n){for(var a in n){var i=n[a];a==="a1"?Ed(e,i):a==="a0"?jd(e,r,i):a==="a3"?Bd(e,i):a==="a4"?Rd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Ed(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Bd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Rd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function jd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Nd(r,o),e.addEventListener(i,c,bo&&{passive:Vo(o)<2}),a[i]=c}}var bo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){bo=!0}}))}catch{}function Nd(e,r){function n(a){var i=n.q,o=_r(i.a,a);if(!!Dr(o)){for(var c=Vo(i),l=o.a,u=c?c<3?l.a:l.aA:l,m=c==1?l.b:c==3&&l.dH,d=(m&&a.stopPropagation(),(c==2?l.b:c==3&&l.dw)&&a.preventDefault(),e),p,g;p=d.j;){if(typeof p=="function")u=p(u);else for(var g=p.length;g--;)u=p[g](u);d=d.p}d(u,m)}}return n.q=r,n}function Gd(e,r){return e.$==r.$&&la(e.a,r.a)}function Xl(e,r){var n=[];return kr(e,r,n,0),n}function Xe(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function kr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Zd(r),o=1;else{Xe(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,m=u===l.length;m&&u--;)m=c[u]===l[u];if(m){r.k=e.k;return}r.k=r.m();var d=[];kr(e.k,r.k,d,0),d.length>0&&Xe(n,1,a,d);return;case 4:for(var p=e.j,g=r.j,v=!1,_=e.k;_.$===4;)v=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var x=r.k;x.$===4;)v=!0,typeof g!="object"?g=[g,x.j]:g.push(x.j),x=x.k;if(v&&p.length!==g.length){Xe(n,0,a,r);return}(v?!Hd(p,g):p!==g)&&Xe(n,2,a,g),kr(_,x,n,a+1);return;case 0:e.a!==r.a&&Xe(n,3,a,r.a);return;case 1:Ql(e,r,n,a,Wd);return;case 2:Ql(e,r,n,a,Ud);return;case 3:if(e.h!==r.h){Xe(n,0,a,r);return}var w=_o(e.d,r.d);w&&Xe(n,4,a,w);var S=r.i(e.g,r.g);S&&Xe(n,5,a,S);return}}}function Hd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ql(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Xe(n,0,a,r);return}var o=_o(e.d,r.d);o&&Xe(n,4,a,o),i(e,r,n,a)}function _o(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=_o(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Gd(c,l)||(a=a||{},a[i]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Wd(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Xe(n,6,a,{v:l,i:c-l}):c<l&&Xe(n,7,a,{v:c,e:o});for(var u=c<l?c:l,m=0;m<u;m++){var d=i[m];kr(d,o[m],n,++a),a+=d.b||0}}function Ud(e,r,n,a){for(var i=[],o={},c=[],l=e.e,u=r.e,m=l.length,d=u.length,p=0,g=0,v=a;p<m&&g<d;){var _=l[p],x=u[g],w=_.a,S=x.a,y=_.b,C=x.b,I=void 0,O=void 0;if(w===S){v++,kr(y,C,i,v),v+=y.b||0,p++,g++;continue}var K=l[p+1],W=u[g+1];if(K){var Y=K.a,Z=K.b;O=S===Y}if(W){var B=W.a,ne=W.b;I=w===B}if(I&&O){v++,kr(y,ne,i,v),Oa(o,i,w,C,g,c),v+=y.b||0,v++,Ja(o,i,w,Z,v),v+=Z.b||0,p+=2,g+=2;continue}if(I){v++,Oa(o,i,S,C,g,c),kr(y,ne,i,v),v+=y.b||0,p+=1,g+=2;continue}if(O){v++,Ja(o,i,w,y,v),v+=y.b||0,v++,kr(Z,C,i,v),v+=Z.b||0,p+=2,g+=1;continue}if(K&&Y===B){v++,Ja(o,i,w,y,v),Oa(o,i,S,C,g,c),v+=y.b||0,v++,kr(Z,ne,i,v),v+=Z.b||0,p+=2,g+=2;continue}break}for(;p<m;){v++;var _=l[p],y=_.b;Ja(o,i,_.a,y,v),v+=y.b||0,p++}for(;g<d;){var fe=fe||[],x=u[g];Oa(o,i,x.a,x.b,void 0,fe),g++}(i.length>0||c.length>0||fe)&&Xe(n,8,a,{w:i,x:c,y:fe})}var eu="_elmW6BL";function Oa(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];kr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Oa(e,r,n+eu,a,i,o)}function Ja(e,r,n,a,i){var o=e[n];if(!o){var c=Xe(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];kr(a,o.z,l,i),Xe(r,9,i,{w:l,A:o});return}Ja(e,r,n+eu,a,i)}function ru(e,r,n,a){qa(e,r,n,0,0,r.b,a)}function qa(e,r,n,a,i,o,c){for(var l=n[a],u=l.r;u===i;){var m=l.$;if(m===1)ru(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var d=l.s.w;d.length>0&&qa(e,r,d,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var p=l.s;if(p){p.A.s=e;var d=p.w;d.length>0&&qa(e,r,d,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>o)return a}var g=r.$;if(g===4){for(var v=r.k;v.$===4;)v=v.k;return qa(e,v,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,x=e.childNodes,w=0;w<_.length;w++){i++;var S=g===1?_[w]:_[w].b,y=i+(S.b||0);if(i<=u&&u<=y&&(a=qa(x[w],S,n,a,i,y,c),!(l=n[a])||(u=l.r)>o))return a;i=y}return a}function nu(e,r,n,a){return n.length===0?e:(ru(e,r,n,a),Ut(e,n))}function Ut(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Od(i,a);i===e&&(e=o)}return e}function Od(e,r){switch(r.$){case 0:return Jd(e,r.s,r.u);case 4:return ho(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ut(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(gn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Ut(e,n.w),e;case 8:return qd(e,r);case 5:return r.s(e);default:ca(10)}}function Jd(e,r,n){var a=e.parentNode,i=gn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function qd(e,r){var n=r.s,a=Yd(n.y,r);e=Ut(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:gn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&mo(e,a),e}function Yd(e,r){if(!!e){for(var n=en.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;mo(n,o.c===2?o.s:gn(o.z,r.u))}return n}}function yo(e){if(e.nodeType===3)return so(e.textContent);if(e.nodeType!==1)return so("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Br(t(Tr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Br(yo(m[a]),u);return b(rn,l,r,u)}function Zd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Kd=J(function(e,r,n,a){return vo(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=a.node,u=yo(l);return au(o,function(m){var d=c(m),p=Xl(u,d);l=nu(l,u,p,i),u=d})})});J(function(e,r,n,a){return vo(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.dF&&e.dF(i),l=e.ik,u=en.title,m=en.body,d=yo(m);return au(o,function(p){Wt=c;var g=l(p),v=rn("body")(D)(g.fU),_=Xl(d,v);m=nu(m,d,_,i),d=v,Wt=0,u!==g.id&&(en.title=u=g.id)})})});var Ot=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function au(e,r){r(e);var n=0;function a(){n=n===1?0:(Ot(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Ot(a),n=2)}}f(function(e,r){return t(Io,rt,Qr(function(){r&&history.go(r),e()}))});f(function(e,r){return t(Io,rt,Qr(function(){history.pushState({},"",r),e()}))});f(function(e,r){return t(Io,rt,Qr(function(){history.replaceState({},"",r),e()}))});var Xd={addEventListener:function(){},removeEventListener:function(){}},Qd=typeof window!="undefined"?window:Xd;T(function(e,r,n){return Nl(Qr(function(a){function i(o){lo(n(o))}return e.addEventListener(r,i,bo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});f(function(e,r){var n=_r(e,r);return Dr(n)?N(n.a):R});function tu(e,r){return Qr(function(n){Ot(function(){var a=document.getElementById(e);n(a?In(r(a)):cd(b0(e)))})})}function ep(e){return Qr(function(r){Ot(function(){r(In(e()))})})}f(function(e,r){return tu(r,function(n){return n[e](),Ua})});f(function(e,r){return ep(function(){return Qd.scroll(e,r),Ua})});T(function(e,r,n){return tu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ua})});f(function(e,r){return e&r});f(function(e,r){return e|r});f(function(e,r){return e^r});f(function(e,r){return r<<e});f(function(e,r){return r>>e});f(function(e,r){return r>>>e});var rp=f(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return R}});f(function(e,r){return r.match(e)!==null});var np=T(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var m=u.length-1,d=new Array(m);m>0;){var p=u[m];d[--m]=p?N(p):R}a.push(P(zv,u[0],u.index,i,$(d))),l=r.lastIndex}return r.lastIndex=c,$(a)});J(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var m=arguments[l];u[--l]=m?N(m):R}return n(P(zv,c,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,$(i)});var ap=f(function(e,r){return new Float64Array([e,r])});f(function(e,r){return new Float64Array([e,r[1]])});f(function(e,r){return new Float64Array([r[0],e])});f(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});f(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});f(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/tp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function tp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}f(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});f(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});f(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});f(function(e,r){return e[0]*r[0]+e[1]*r[1]});var xo=new Float64Array(3),iu=new Float64Array(3),ou=new Float64Array(3),ip=T(function(e,r,n){return new Float64Array([e,r,n])}),op=function(e){return e[0]},cp=function(e){return e[1]},lp=function(e){return e[2]};f(function(e,r){return new Float64Array([e,r[1],r[2]])});f(function(e,r){return new Float64Array([r[0],e,r[2]])});f(function(e,r){return new Float64Array([r[0],r[1],e])});var up=function(e){return new Float64Array([e.io,e.is,e.dV])};f(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function cu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}f(cu);function lu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Jt(cu(e,r,n),n)}f(lu);function uu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}f(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});f(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Jt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/uu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var $p=f(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ya=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};f(Ya);function wo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}f(wo);f(function(e,r){var n,a=xo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ya(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ya(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ya(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ya(r,a)+e[14])/n,i});var vp=J(function(e,r,n,a){return new Float64Array([e,r,n,a])});f(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});f(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});f(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});f(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var fp=function(e){return{io:e[0],is:e[1],dV:e[2],ft:e[3]}},mp=function(e){return new Float64Array([e.io,e.is,e.dV,e.ft])};f(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});f(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});f(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/sp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function sp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}f(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});f(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});f(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});f(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var dp=new Float64Array(16),pp=new Float64Array(16),gp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},hp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function $u(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}fr($u);J(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return $u(c,l,o,i,n,a)});function vu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}fr(vu);J(function(e,r,n,a){return vu(e,r,n,a,-1,1)});function fu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],m=e[6],d=e[7],p=e[8],g=e[9],v=e[10],_=e[11],x=e[12],w=e[13],S=e[14],y=e[15],C=r[0],I=r[1],O=r[2],K=r[3],W=r[4],Y=r[5],Z=r[6],B=r[7],ne=r[8],fe=r[9],ye=r[10],me=r[11],se=r[12],we=r[13],de=r[14],Ve=r[15];return n[0]=a*C+l*I+p*O+x*K,n[1]=i*C+u*I+g*O+w*K,n[2]=o*C+m*I+v*O+S*K,n[3]=c*C+d*I+_*O+y*K,n[4]=a*W+l*Y+p*Z+x*B,n[5]=i*W+u*Y+g*Z+w*B,n[6]=o*W+m*Y+v*Z+S*B,n[7]=c*W+d*Y+_*Z+y*B,n[8]=a*ne+l*fe+p*ye+x*me,n[9]=i*ne+u*fe+g*ye+w*me,n[10]=o*ne+m*fe+v*ye+S*me,n[11]=c*ne+d*fe+_*ye+y*me,n[12]=a*se+l*we+p*de+x*Ve,n[13]=i*se+u*we+g*de+w*Ve,n[14]=o*se+m*we+v*de+S*Ve,n[15]=c*se+d*we+_*de+y*Ve,n}f(fu);f(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],m=e[8],d=e[9],p=e[10],g=e[12],v=e[13],_=e[14],x=r[0],w=r[1],S=r[2],y=r[4],C=r[5],I=r[6],O=r[8],K=r[9],W=r[10],Y=r[12],Z=r[13],B=r[14];return n[0]=a*x+c*w+m*S,n[1]=i*x+l*w+d*S,n[2]=o*x+u*w+p*S,n[3]=0,n[4]=a*y+c*C+m*I,n[5]=i*y+l*C+d*I,n[6]=o*y+u*C+p*I,n[7]=0,n[8]=a*O+c*K+m*W,n[9]=i*O+l*K+d*W,n[10]=o*O+u*K+p*W,n[11]=0,n[12]=a*Y+c*Z+m*B+g,n[13]=i*Y+l*Z+d*B+v,n[14]=o*Y+u*Z+p*B+_,n[15]=1,n});f(function(e,r){var n=new Float64Array(16);r=Jt(r,xo);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*u,n[2]=o*a*l-i*u,n[3]=0,n[4]=a*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+a*u,n[7]=0,n[8]=a*o*l+i*u,n[9]=i*o*l-a*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/uu(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),m=1-u,d=Math.sin(e),p=o*d,g=c*d,v=l*d,_=o*c*m,x=o*l*m,w=c*l*m,S=o*o*m+u,y=_+v,C=x-g,I=_-v,O=c*c*m+u,K=w+p,W=x+g,Y=w-p,Z=l*l*m+u,B=n[0],ne=n[1],fe=n[2],ye=n[3],me=n[4],se=n[5],we=n[6],de=n[7],Ve=n[8],Me=n[9],Ze=n[10],Dn=n[11],Na=n[12],Yr=n[13],Zr=n[14],oa=n[15];return a[0]=B*S+me*y+Ve*C,a[1]=ne*S+se*y+Me*C,a[2]=fe*S+we*y+Ze*C,a[3]=ye*S+de*y+Dn*C,a[4]=B*I+me*O+Ve*K,a[5]=ne*I+se*O+Me*K,a[6]=fe*I+we*O+Ze*K,a[7]=ye*I+de*O+Dn*K,a[8]=B*W+me*Y+Ve*Z,a[9]=ne*W+se*Y+Me*Z,a[10]=fe*W+we*Y+Ze*Z,a[11]=ye*W+de*Y+Dn*Z,a[12]=Na,a[13]=Yr,a[14]=Zr,a[15]=oa,a});function bp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(bp);J(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});f(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function _p(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(_p);J(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],u=a[3],m=a[4],d=a[5],p=a[6],g=a[7],v=a[8],_=a[9],x=a[10],w=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=m,i[5]=d,i[6]=p,i[7]=g,i[8]=v,i[9]=_,i[10]=x,i[11]=w,i[12]=o*e+m*r+v*n+a[12],i[13]=c*e+d*r+_*n+a[13],i[14]=l*e+p*r+x*n+a[14],i[15]=u*e+g*r+w*n+a[15],i});f(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],m=r[3],d=r[4],p=r[5],g=r[6],v=r[7],_=r[8],x=r[9],w=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=m,n[4]=d,n[5]=p,n[6]=g,n[7]=v,n[8]=_,n[9]=x,n[10]=w,n[11]=S,n[12]=c*a+d*i+_*o+r[12],n[13]=l*a+p*i+x*o+r[13],n[14]=u*a+g*i+w*o+r[14],n[15]=m*a+v*i+S*o+r[15],n});T(function(e,r,n){var a=lu(e,r,xo),i=Jt(wo(n,a,iu),iu),o=Jt(wo(a,i,ou),ou),c=dp,l=pp;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,fu(c,l)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var mu=0;function Za(e,r){for(;r.b;r=r.b)e(r.a)}function So(e){for(var r=0;e.b;e=e.b)r++;return r}var yp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},xp=Be(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),wp=f(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Sp=f(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Cp=f(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Lp=f(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Pp=f(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),zp=f(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Mp=f(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Tp=f(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),kp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Dp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Vp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Ap=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},su=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},du=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ip=function(e){e.gl.disable(e.gl.CULL_FACE)},Fp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Ep=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Bp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},pu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Rp=[Dp,Vp,Ap,su,du,Ip,Fp,Ep,Bp];function gu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function jp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function hu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Np(e,r,n,a){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(v,_,x,w,S){var y;if(i===1)for(y=0;y<_;y++)v[x++]=_===1?w[S]:w[S][y];else o.forEach(function(C){for(y=0;y<_;y++)v[x++]=_===1?w[C][S]:w[C][S][y]})}var u=hu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,d=u.size*u.arraySize*i,p=new u.type(So(n.b)*d);Za(function(v){l(p,u.size*u.arraySize,m,v,a[r.name]||r.name),m+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function Gp(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Hp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*So(r.b),indexBuffer:null,buffers:{}}}function Hp(e,r){var n=new Uint32Array(So(e)*r),a=0,i;return Za(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function bu(e,r){return e+"#"+r}var _u=f(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),su(n),du(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=bu(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=mu++,m||(m=gu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var d;o.c.id?d=n.shaders[o.c.id]:o.c.id=mu++,d||(d=gu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=d);var p=jp(a,m,d);l={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Wp(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var v=a.getActiveAttrib(p,u),_=a.getAttribLocation(p,v.name);l.activeAttributes.push(v),l.activeAttributeLocations.push(_)}c=bu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Up(l.uniformSetters,o.e);var x=n.buffers.get(o.d);for(x||(x=Gp(a,o.d),n.buffers.set(o.d,x)),u=0;u<l.activeAttributes.length;u++){v=l.activeAttributes[u],_=l.activeAttributeLocations[u],x.buffers[v.name]===void 0&&(x.buffers[v.name]=Np(a,v,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,x.buffers[v.name]);var w=hu(a,v.type);if(w.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,w.size,w.baseType,!1,0,0);else for(var S=w.size*4,y=S*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,w.size,w.baseType,!1,y,S*C)}for(n.toggle=!n.toggle,Za(E_(n),o.a),u=0;u<pu.length;u++){var I=n[pu[u]];I.toggle!==n.toggle&&I.enabled&&(Rp[u](n),I.enabled=!1,I.toggle=n.toggle)}x.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,x.indexBuffer),a.drawElements(o.d.a.eS,x.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,x.numIndices)}}return Za(i,e.g),r});function Wp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(v,_){var x=_.name,w=e.getUniformLocation(v,x);switch(_.type){case e.INT:return function(y){o[x]!==y&&(e.uniform1i(w,y),o[x]=y)};case e.FLOAT:return function(y){o[x]!==y&&(e.uniform1f(w,y),o[x]=y)};case e.FLOAT_VEC2:return function(y){o[x]!==y&&(e.uniform2f(w,y[0],y[1]),o[x]=y)};case e.FLOAT_VEC3:return function(y){o[x]!==y&&(e.uniform3f(w,y[0],y[1],y[2]),o[x]=y)};case e.FLOAT_VEC4:return function(y){o[x]!==y&&(e.uniform4f(w,y[0],y[1],y[2],y[3]),o[x]=y)};case e.FLOAT_MAT4:return function(y){o[x]!==y&&(e.uniformMatrix4fv(w,!1,new Float32Array(y)),o[x]=y)};case e.SAMPLER_2D:var S=c++;return function(y){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(y);C||(C=y.ge(e),l.textures.set(y,C)),e.bindTexture(e.TEXTURE_2D,C),o[x]!==y&&(e.uniform1i(w,S),o[x]=y)};case e.BOOL:return function(y){o[x]!==y&&(e.uniform1i(w,y),o[x]=y)};default:return function(){}}}for(var m={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var g=e.getActiveUniform(i,p);m[a[g.name]||g.name]=u(i,g)}return m}function Up(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Op=T(function(e,r,n){return Ld(r,{g:n,f:{},h:e},Qp,e0)}),Jp=f(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),qp=f(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Yp=f(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Zp=f(function(e,r){e.contextAttributes.antialias=!0}),Kp=f(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Xp=f(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Qp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Za(function(i){return t(F_,r,i)},e.h);var n=en.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),yp(function(){return t(_u,e,n)})):(n=en.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function e0(e,r){return r.f=e.f,_u(r)}var M=$s,qt=cs,yu=T(function(e,r,n){var a=n.c,i=n.d,o=f(function(c,l){if(c.$){var m=c.a;return b(qt,e,l,m)}else{var u=c.a;return b(qt,o,l,u)}});return b(qt,o,b(qt,e,r,i),a)}),Co=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,u=b(e,a,i,b(Co,e,r,c)),m=o;e=l,r=u,n=m;continue e}}),xu=function(e){return b(Co,T(function(r,n,a){return t(M,z(r,n),a)}),D,e)},wu=1,r0=2,Su=0,Qe=function(e){return{$:1,a:e}},Lo=f(function(e,r){return{$:3,a:e,b:r}}),Cu=f(function(e,r){return{$:0,a:e,b:r}}),Lu=f(function(e,r){return{$:1,a:e,b:r}}),Ae=function(e){return{$:0,a:e}},n0=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},R={$:1},a0=Fs,t0=nd,k=El,ee=f(function(e,r){return t(Ds,e,Nt(r))}),Po=f(function(e,r){return $(t(ks,e,r))}),Pu=function(e){return t(ee,`
    `,t(Po,`
`,e))},Ie=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),Fn=function(e){return b(Ie,f(function(r,n){return n+1}),0,e)},i0=vs,o0=T(function(e,r,n){e:for(;;)if(ce(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),nn=f(function(e,r){return b(o0,e,r,D)}),zu=f(function(e,r){return b(i0,e,t(nn,0,Fn(r)-1),r)}),Nr=Hs,Mu=function(e){var r=Nr(e);return 97<=r&&r<=122},Tu=function(e){var r=Nr(e);return r<=90&&65<=r},c0=function(e){return Mu(e)||Tu(e)},l0=function(e){var r=Nr(e);return r<=57&&48<=r},u0=function(e){return Mu(e)||Tu(e)||l0(e)},nr=function(e){return b(Ie,M,D,e)},$a=Ps,$0=f(function(e,r){return`

(`+(k(e+1)+(") "+Pu(v0(r))))}),v0=function(e){return t(f0,e,D)},f0=f(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var x=$a(n);if(x.$===1)return!1;var w=x.a,S=w.a,y=w.b;return c0(S)&&t(a0,u0,y)}(),o=i?"."+n:"['"+(n+"']"),c=a,l=t(M,o,r);e=c,r=l;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),c=a,l=t(M,m,r);e=c,r=l;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",nr(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(k(Fn(d))+" ways:"));return t(ee,`

`,t(M,_,t(zu,$0,d)))}else{var a=d.a,c=a,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",nr(r)):"!"}();default:var g=e.a,v=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",nr(r))+`:

    `):`Problem with the given value:

`}();return _+(Pu(t(t0,4,v))+(`

`+g))}}),mr=32,zo=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mo=ns,Ka=_s,To=f(function(e,r){return Fl(r)/Fl(e)}),Xa=hs,Qa=Ka(t(To,2,mr)),ku=P(zo,0,Qa,Mo,Mo),Du=ts,Vu=function(e){return{$:1,a:e}};f(function(e,r){return e(r)});f(function(e,r){return r(e)});var Au=ys,ko=as,qe=f(function(e,r){return ce(e,r)>0?e:r}),m0=function(e){return{$:0,a:e}},Do=is,s0=f(function(e,r){e:for(;;){var n=t(Do,mr,e),a=n.a,i=n.b,o=t(M,m0(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return nr(o)}}),Iu=function(e){var r=e.a;return r},d0=f(function(e,r){e:for(;;){var n=Ka(r/mr);if(n===1)return t(Do,mr,e).a;var a=t(s0,e,D),i=n;e=a,r=i;continue e}}),Fu=f(function(e,r){if(r.n){var n=r.n*mr,a=Au(t(To,mr,n-1)),i=e?nr(r.C):r.C,o=t(d0,i,r.n);return P(zo,ko(r.r)+n,t(qe,5,a*Qa),o,r.r)}else return P(zo,ko(r.r),Qa,Mo,r.r)}),p0=Be(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Fu,!1,{C:a,n:n/mr|0,r:i});var o=Vu(b(Du,mr,r,e)),c=e,l=r-mr,u=n,m=t(M,o,a),d=i;e=c,r=l,n=u,a=m,i=d;continue e}}),g0=f(function(e,r){if(e<=0)return ku;var n=e%mr,a=b(Du,n,e-n,r),i=e-n-mr;return V(p0,r,i,e,D,a)}),Dr=function(e){return!e.$},U=Xs,_e=Js,H=Ks,Re=qs,Eu=f(function(e,r){return{bt:r.bt,gb:e,cY:r.cY,gp:r.gp,g3:r.g3,hq:r.hq,dD:r.dD,il:r.il}}),Yt=Qs,h0=ed,ar=Us,Vo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Vr=function(e){return e},b0=Vr,Bu=fr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),_0=Es,En=zs,va=Vs,et=f(function(e,r){return e<1?r:b(va,e,En(r),r)}),Zt=Rs,Kt=function(e){return e===""},Xt=f(function(e,r){return e<1?"":b(va,0,e,r)}),Ru=js,ju=Be(function(e,r,n,a,i){if(Kt(i)||t(_0,"@",i))return R;var o=t(Zt,":",i);if(o.b){if(o.b.b)return R;var c=o.a,l=Ru(t(et,c+1,i));if(l.$===1)return R;var u=l;return N(Ke(Bu,e,t(Xt,c,i),u,r,n,a))}else return N(Ke(Bu,e,i,R,r,n,a))}),Nu=J(function(e,r,n,a){if(Kt(a))return R;var i=t(Zt,"/",a);if(i.b){var o=i.a;return V(ju,e,t(et,o,a),r,n,t(Xt,o,a))}else return V(ju,e,"/",r,n,a)}),Gu=T(function(e,r,n){if(Kt(n))return R;var a=t(Zt,"?",n);if(a.b){var i=a.a;return P(Nu,e,N(t(et,i+1,n)),r,t(Xt,i,n))}else return P(Nu,e,R,r,n)});f(function(e,r){if(Kt(r))return R;var n=t(Zt,"#",r);if(n.b){var a=n.a;return b(Gu,e,N(t(et,a+1,r)),t(Xt,a,r))}else return b(Gu,e,R,r)});var y0=Bs,rt=function(e){},nt=In,x0=nt(0),Hu=J(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,m=l.b;if(m.b){var d=m.a,p=m.b,g=n>500?b(Ie,e,r,nr(p)):P(Hu,e,r,n+1,p);return t(e,i,t(e,c,t(e,u,t(e,d,g))))}else return t(e,i,t(e,c,t(e,u,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),We=T(function(e,r,n){return P(Hu,e,r,0,n)}),q=f(function(e,r){return b(We,f(function(n,a){return t(M,e(n),a)}),D,r)}),Qt=co,Ao=f(function(e,r){return t(Qt,function(n){return nt(e(n))},r)}),w0=T(function(e,r,n){return t(Qt,function(a){return t(Qt,function(i){return nt(t(e,a,i))},n)},r)}),S0=function(e){return b(We,w0(M),nt(D),e)},C0=dd,L0=f(function(e,r){var n=r;return Nl(t(Qt,C0(e),n))}),P0=T(function(e,r,n){return t(Ao,function(a){return 0},S0(t(q,L0(e),r)))}),z0=T(function(e,r,n){return nt(0)}),M0=f(function(e,r){var n=r;return t(Ao,e,n)});jr.Task=md(x0,P0,z0,M0);var T0=Wl("Task"),Io=f(function(e,r){return T0(t(Ao,e,r))}),k0=Kd,D0=Cs,ei={$:1},Wu=function(e){return{$:2,a:e}},Fo={$:0},yr=f(function(e,r){return{$:0,a:e,b:r}}),Ue=T(function(e,r,n){return r(e(n))}),Bn=function(e){var r=e.b.s;return r.a},V0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return N(t(yr,r,{s:o,an:c,X:t(M,a,n)}))}else return R},ke=f(function(e,r){if(r.$)return e;var n=r.a;return n}),A0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dI;return(ce(o+r.gp,Bn(n).bt)>0?t(Ue,V0,ke(t(yr,ei,i))):Vr)(t(yr,Wu({dI:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,m=t(Eu,l.gb,Te(r,{bt:l.bt+r.gp})),d=t(e,m,u);return t(yr,Fo,{s:z(m,d),an:D,X:t(M,i.s,i.X)})}}),Uu=f(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),I0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(M,a,n);e=o,r=c,n=l;continue e}else return n}}),F0=f(function(e,r){return nr(b(I0,e,r,D))}),Ou=T(function(e,r,n){if(r<=0)return D;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,y=i.a,o=i.b,c=o.a;return $([y,c]);case 3:if(a.b.b.b.b){var l=a.b,y=l.a,u=l.b,c=u.a,m=u.b,d=m.a;return $([y,c,d])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,y=p.a,g=p.b,c=g.a,v=g.b,d=v.a,_=v.b,x=_.a,w=_.b;return e>1e3?t(M,y,t(M,c,t(M,d,t(M,x,t(F0,r-4,w))))):t(M,y,t(M,c,t(M,d,t(M,x,b(Ou,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,y=S.a;return $([y])}}),E0=f(function(e,r){return b(Ou,0,e,r)}),B0=f(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=G(nr(n),G($([a]),i)),c=t(E0,e,o),l=t(Uu,e,o);if(l.b){var u=l.a,m=l.b;return t(yr,ei,{s:u,an:m,X:nr(c)})}else{var d=nr(c);if(d.b){var p=d.a,g=d.b;return t(yr,ei,{s:p,an:D,X:g})}else return r}}),R0=function(e){var r=e.b;return t(yr,ei,r)},j0=function(e){var r=e.b;return t(yr,Wu({dI:Bn(e).bt}),r)},N0=function(e){var r=e.b;return t(yr,Fo,r)},G0=f(function(e,r){switch(e.$){case 1:return R0(r);case 2:return N0(r);case 3:return j0(r);default:var n=e.a;return t(B0,n,r)}}),ri=f(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),H0=f(function(e,r){return Te(r,{aN:e(r.aN)})}),W0=function(e){return{$:3,a:e}},U0=function(e){return{$:2,a:e}},O0=f(function(e,r){return{$:0,a:e,b:r}}),J0=f(function(e,r){return{$:1,a:e,b:r}}),Fe=f(function(e,r){if(r.$)return R;var n=r.a;return N(e(n))}),le=function(e){return e<0?-e:e},Ju=Ns,q0=T(function(e,r,n){return t(ke,0/0,Ju(t(e,r,n)))}),at=f(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),Y0=Ts,qu=function(e){return b(Y0,M,D,e)},Z0=f(function(e,r){var n=t(at,function(a){return a!=="0"&&a!=="."},qu(r));return G(e&&n?"-":"",r)}),ae=El,Eo=Ls,Yu=Ws,Zu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=$a(n);if(a.$===1)return"01";var i=a.a;return t(Eo,"0",Zu(i))}else{var o=Nr(r);return o>=48&&o<57?t(Eo,Yu(o+1),n):"0"}},Bo=bs,K0=Ss,ni=function(e){return t(Eo,e,"")},Ku=T(function(e,r,n){return e<=0?n:b(Ku,e>>1,G(r,r),e&1?G(n,r):n)}),tt=f(function(e,r){return b(Ku,e,r,"")}),Ro=T(function(e,r,n){return G(n,t(tt,e-En(n),ni(r)))}),jo=Ms,Xu=function(e){var r=t(Po,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},X0=function(e){var r=t(Po,"e",ae(le(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(ke,0,Ru(t(y0,"+",i)?t(et,1,i):i)),c=Xu(n),l=c.a,u=c.b,m=G(l,u),d=o<0?t(ke,"0",t(Fe,function(p){var g=p.a,v=p.b;return g+("."+v)},t(Fe,ri(ni),$a(G(t(tt,le(o),"0"),m))))):b(Ro,o+1,"0",m);return G(e<0?"-":"",d)}else{var n=r.a;return G(e<0?"-":"",n)}else return""},Q0=T(function(e,r,n){if(Bo(n)||K0(n))return ae(n);var a=n<0,i=Xu(X0(le(n))),o=i.a,c=i.b,l=En(o)+r,u=G(t(tt,-l+1,"0"),b(Ro,l,"0",G(o,c))),m=En(u),d=t(qe,1,l),p=t(e,a,b(va,d,m,u)),g=b(va,0,d,u),v=p?jo(t(ke,"1",t(Fe,Zu,$a(jo(g))))):g,_=En(v),x=v==="0"?v:r<=0?G(v,t(tt,le(r),"0")):ce(r,En(c))<0?b(va,0,_-r,v)+("."+b(va,_-r,_,v)):G(o+".",b(Ro,r,"0",c));return t(Z0,a,x)}),Qu=Q0(f(function(e,r){var n=$a(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Nr(i))})),eg=q0(Qu),rg=T(function(e,r,n){var a=t(To,10,le(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(eg,i,n)}),e$=us,No=f(function(e,r){e:for(;;){if(r.$===-2)return R;var n=r.b,a=r.c,i=r.d,o=r.e,c=t(e$,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return N(a);default:var l=e,u=o;e=l,r=u;continue e}}}),te=Be(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Gr={$:-2},fa=Be(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,d=a.c,p=a.d,g=a.e;return V(te,0,r,n,V(te,1,m,d,p,g),V(te,1,o,c,l,u))}else return V(te,e,o,c,V(te,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,d=a.c,v=a.d;v.a;var _=v.b,x=v.c,w=v.d,S=v.e,g=a.e;return V(te,0,m,d,V(te,1,_,x,w,S),V(te,1,r,n,g,i))}else return V(te,e,r,n,a,i)}),Go=T(function(e,r,n){if(n.$===-2)return V(te,0,e,r,Gr,Gr);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=t(e$,e,i);switch(u){case 0:return V(fa,a,i,o,b(Go,e,r,c),l);case 1:return V(te,a,i,r,c,l);default:return V(fa,a,i,o,c,b(Go,e,r,l))}}),it=T(function(e,r,n){var a=b(Go,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return V(te,1,i,o,c,l)}else{var u=a;return u}}),ng=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},r$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,m=e.e;m.a;var d=m.b,p=m.c,g=m.d;g.a;var v=g.b,_=g.c,x=g.d,w=g.e,S=m.e;return V(te,0,v,_,V(te,1,n,a,V(te,0,o,c,l,u),x),V(te,1,d,p,w,S))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var o=y.b,c=y.c,l=y.d,u=y.e,C=e.e;C.a;var d=C.b,p=C.c,g=C.d,S=C.e;return V(te,1,n,a,V(te,0,o,c,l,u),V(te,0,d,p,g,S))}else return e},n$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,m=l.c,d=l.d,p=l.e,g=i.e,v=e.e;v.a;var _=v.b,x=v.c,w=v.d,S=v.e;return V(te,0,o,c,V(te,1,u,m,d,p),V(te,1,n,a,g,V(te,0,_,x,w,S)))}else{var r=e.a,n=e.b,a=e.c,y=e.d;y.a;var o=y.b,c=y.c,C=y.d,g=y.e,I=e.e;I.a;var _=I.b,x=I.c,w=I.d,S=I.e;return V(te,1,n,a,V(te,0,o,c,C,g),V(te,0,_,x,w,S))}else return e},ag=jt(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,m=o.d,d=o.e;return V(te,n,l,u,m,V(te,0,a,i,d,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var p=c.d;return p.a,n$(r)}else break e;else return c.a,c.d,n$(r);else break e;return r}}),ai=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,V(te,r,n,a,ai(i),l);var u=r$(e);if(u.$===-1){var m=u.a,d=u.b,p=u.c,g=u.d,v=u.e;return V(fa,m,d,p,ai(g),v)}else return Gr}else return V(te,r,n,a,ai(i),l)}else return Gr},ot=f(function(e,r){if(r.$===-2)return Gr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,V(te,n,a,i,t(ot,e,o),c);var u=r$(r);if(u.$===-1){var m=u.a,d=u.b,p=u.c,g=u.d,v=u.e;return V(fa,m,d,p,t(ot,e,g),v)}else return Gr}else return V(te,n,a,i,t(ot,e,o),c);else return t(tg,e,to(ag,e,r,n,a,i,o,c))}),tg=f(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ue(e,a)){var l=ng(c);if(l.$===-1){var u=l.b,m=l.c;return V(fa,n,u,m,o,ai(c))}else return Gr}else return V(fa,n,a,i,o,t(ot,e,c))}else return Gr}),ig=f(function(e,r){var n=t(ot,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return V(te,1,a,i,o,c)}else{var l=n;return l}}),ti=T(function(e,r,n){var a=r(t(No,e,n));if(a.$)return t(ig,e,n);var i=a.a;return b(it,e,i,n)}),og=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(ti,r,Fe(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(J0,z(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(ti,r,Fe(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(O0,z(o,c),b(rg,o,c,n))}));case 3:var r=e.a,n=e.b;return t(ti,r,Fe(function(a){return a.$===3?W0(n):a}));default:var r=e.a,n=e.b;return t(ti,r,Fe(function(a){return a.$===2?U0(n):a}))}},cg=function(e){return H0(og(e))},lg=f(function(e,r){return t(q,cg(e),r)}),ug=f(function(e,r){return Te(r,{gb:t(lg,e,r.gb)})}),$g=f(function(e,r){var n=r.a,a=r.b;return t(yr,n,Te(a,{s:t(ri,ug(e),a.s)}))}),Ho=f(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),vg=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(yr,a,Te(i,{s:t(Ho,t(e,o.a,r),o)}))}),fg=J(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Te(a,{bx:!a.bx});case 2:var i=n.a;return Te(a,{R:b(A0,e,i,a.R)});case 3:var o=n.a;return Te(a,{bp:o});case 4:var c=n.a;return Te(a,{R:t($g,c,a.R)});case 5:var l=n.a;return Te(a,{R:b(vg,r,l,a.R)});default:var u=n.a;return Te(a,{R:t(G0,u,a.R)})}}),mg=f(function(e,r){return t(yr,Fo,{s:z(e,r(e)),an:D,X:D})}),sg=pd,a$=sg(D),dg=function(e){return{$:2,a:e}},ii=Zs,ma=Ys,pg=yd("tick",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return ar({bt:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(d){return t(U,function(p){return ar({fJ:p,gd:d,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",ii(ma)))},t(H,"left",_e))},t(H,"pressedKeys",ii(ma)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return ar({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(U,function(r){return t(U,function(n){return ar({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(U,function(e){return t(U,function(r){return ar({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re))))),gg=function(e){return e.dO,pg(dg)},hg=function(e){return{$:5,a:e}},bg={$:0},oi=f(function(e,r){return e}),_g=function(e){var r=e.b.s;return r.b},yg=function(e){return{$:1,a:e}},xg=yg,t$=function(e){return{$:8,a:e}},pe=t$,ct=function(e){return{$:0,a:e}},lt=T(function(e,r,n){return e(r(n))}),wg=t(lt,ct,oi),hn=wg,Ce=function(e){return{$:1,a:e}},an=Ce,i$=f(function(e,r){return{$:9,a:e,b:r}}),Rn={$:0},o$=f(function(e,r){return r.$===3?Rn:t(i$,e,r)}),Wo=function(e){return t(o$,4,e)},s={fy:"a",cM:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dY:"al",dZ:"ar",fH:"at",cN:"ah",cO:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b2:"bn",fZ:"bs",b5:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b9:"ctr",ca:"cb",cb:"ccx",ax:"ccy",bu:"cl",cc:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",c_:"hbh",c$:"hc",ee:"he",c0:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",cj:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cG:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dP:"wc",fu:"we",dQ:"wf",fv:"wfp",dR:"wrp"},Uo=Xr,xr=f(function(e,r){return t(po,e,Uo(r))}),wr=xr("className"),sr=function(e){return Ce(wr(e))},c$=f(function(e,r){return{$:2,a:e,b:r}}),Sg=f(function(e,r){return{$:1,a:e,b:r}}),Ye=function(e){return{$:0,a:e}},dr=2,Cg={$:0},jn=Cg,Lg={$:0},Pg=s.fK+(" "+s.aw),zg=s.fK+(" "+s.gC),Mg=s.fK+(" "+s.eY),Tg=s.fK+(" "+s.eZ),kg=s.fK+(" "+s.af),Dg=s.fK+(" "+s.hL),Vg=function(e){switch(e){case 0:return kg;case 1:return Pg;case 2:return Dg;case 3:return zg;case 4:return Tg;default:return Mg}},l$=function(e){return{$:1,a:e}},Nn={$:0},Oo=function(e){return{$:1,a:e}},u$=f(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return G(n,e);case 2:var a=r.a;return G(e,a);default:var n=r.a,a=r.b;return G(n,G(e,a))}}),$$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return G(t(q,function(o){return z(e,o)},a),r);case 2:var i=n.a;return G(r,t(q,function(o){return z(e,o)},i));default:var a=n.a,i=n.b;return G(t(q,function(o){return z(e,o)},a),G(r,t(q,function(o){return z(e,o)},i)))}}),ci=4,Ag=function(e){return{$:0,a:e}},Ig=function(e){return{$:1,a:e}},$e=function(e){return e>31?Ig(1<<e-32):Ag(1<<e)},v$=$e(41),f$=$e(40),m$=$e(42),s$=$e(43),sa=rn("div"),d$=Gr,p$=d$,Hr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Hr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Hr(i))}},Le=xs,De=function(e){return k(Le(e*255))},Jo=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(De(n)+("-"+(De(a)+("-"+De(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,d=m.a,p=m.b,g=m.c,v=e.c,_=v.a,x=v.b,w=v.c,S=e.d;return N("tfrm-"+(De(c)+("-"+(De(l)+("-"+(De(u)+("-"+(De(d)+("-"+(De(p)+("-"+(De(g)+("-"+(De(_)+("-"+(De(x)+("-"+(De(w)+("-"+De(S))))))))))))))))))))}},ut=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(t(ee,"-",t(q,Hr,c.hB))+("-cols-"+(t(ee,"-",t(q,Hr,c.ak))+("-space-x-"+(Hr(c.hP.a)+("-space-y-"+Hr(c.hP.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(k(l.af)+("-"+(k(l.ga)+("-"+(k(l.im)+("-"+k(l.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(q,function(d){var p=ut(d);if(p==="")return"";var g=p;return g+("-"+r)},m));default:var o=e.a;return t(ke,"",Jo(o))}},Fg=f(function(e,r){var n=r;return b(it,e,0,n)}),Eg=f(function(e,r){var n=t(No,e,r);return!n.$}),Bg=f(function(e,r){var n=r;return t(Eg,e,n)}),g$=f(function(e,r){var n=r.a,a=r.b,i=ut(e);return t(Bg,i,n)?r:z(t(Fg,i,n),t(M,e,a))}),re=f(function(e,r){return{$:0,a:e,b:r}}),$t=f(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},Rg=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),Gn=f(function(e,r){return b(We,Rg(e),D,r)}),da=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Le(r*255))+(","+k(Le(n*255))+(","+k(Le(a*255))+(","+(ae(i)+")")))))},qo=function(e){return t(ee," ",t(Gn,Vr,$([e.ej?N("inset"):R,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(da(e.b7))])))},h$=function(e){return $([t($t,L(s.ea)+":focus-within",t(Gn,Vr,$([t(Fe,function(r){return t(re,"border-color",da(r))},e.fW),t(Fe,function(r){return t(re,"background-color",da(r))},e.fO),t(Fe,function(r){return t(re,"box-shadow",qo({a2:r.a2,b7:r.b7,ej:!1,eV:t(Ho,Xa,t(ri,Xa,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))]))),t($t,L(s.fK)+":focus .focusable, "+(L(s.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(s.fK)+" .focusable-thumb"))),t(Gn,Vr,$([t(Fe,function(r){return t(re,"border-color",da(r))},e.fW),t(Fe,function(r){return t(re,"background-color",da(r))},e.fO),t(Fe,function(r){return t(re,"box-shadow",qo({a2:r.a2,b7:r.b7,ej:!1,eV:t(Ho,Xa,t(ri,Xa,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))])))])},Wr=function(e){return rn(Yl(e))},b$=f(function(e,r){return t(po,kd(e),Zl(r))}),Yo=f(function(e,r){return{$:2,a:e,b:r}}),Zo=function(e){return{$:6,a:e}},j=f(function(e,r){return{$:1,a:e,b:r}}),pr=f(function(e,r){return{$:0,a:e,b:r}}),A=f(function(e,r){return{$:4,a:e,b:r}}),h=f(function(e,r){return{$:0,a:e,b:r}}),jg=f(function(e,r){return{$:3,a:e,b:r}}),_$=$([0,1,2,3,4,5]),Ng=f(function(e,r){return r.b?b(We,M,r,e):e}),tr=function(e){return b(We,Ng,D,e)},pa=f(function(e,r){return tr(t(q,e,r))}),Gg=function(e){switch(e){case 0:return L(s.gc);case 1:return L(s.ca);case 2:return L(s.cc);case 3:return L(s.bu);case 4:return L(s.cb);default:return L(s.ax)}},li=function(e){switch(e){case 0:return L(s.fH);case 1:return L(s.fA);case 2:return L(s.dZ);case 3:return L(s.dY);case 4:return L(s.fB);default:return L(s.fC)}},vt=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,Gg(n),i),t(j,L(s.fK),$([t(A,li(n),o)]))])};return Zo(t(pa,r,_$))},y$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,L(s.c_),$([t(h,"z-index","0"),t(j,L(s.fQ),$([t(h,"z-index","-1")]))])),t(A,L(s.hG),$([t(j,L(s.Y),$([t(A,L(s.c0),$([t(h,"flex-grow","0")])),t(A,L(s.dQ),$([t(h,"align-self","auto !important")]))]))])),t(j,L(s.c$),$([t(h,"height","auto")])),t(j,L(s.c0),$([t(h,"flex-grow","100000")])),t(j,L(s.dQ),$([t(h,"width","100%")])),t(j,L(s.fv),$([t(h,"width","100%")])),t(j,L(s.dP),$([t(h,"align-self","flex-start")])),vt(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(j,L(s.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),Hg=function(e){var r=function(n){return $([t(j,L(s.fK),$([t(A,li(n),e(n))]))])};return Zo(t(pa,r,_$))},Wg=function(){return $([0,1,2,3,4,5])}(),Ug=$([t(pr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(pr,G(L(s.fK),G(L(s.hL),L(s.gN))),$([t(h,"display","block"),t(A,L(s.c0),$([t(j,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,L(s.dQ),$([t(j,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(pr,L(s.fK)+":focus",$([t(h,"outline","none")])),t(pr,L(s.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,G(L(s.fK),L(s.c0)),$([t(h,"height","100%"),t(j,L(s.c0),$([t(h,"height","100%")]))])),t(j,L(s.gP),$([t(A,L(s.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(pr,L(s.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,L(s.hL),y$),Zo(function(e){return t(q,e,Wg)}(function(e){switch(e){case 0:return t(A,L(s.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(j,L(s.c0),$([t(h,"height","auto")])),t(j,L(s.dQ),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,L(s.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")])),t(j,L(s.c0),$([t(h,"height","auto")]))]));case 2:return t(A,L(s.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,L(s.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,L(s.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,L(s.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(j,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(pr,L(s.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,L(s.dR),$([t(h,"flex-wrap","wrap")])),t(A,L(s.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,L(s.gf),$([t(h,"cursor","pointer")])),t(A,L(s.gg),$([t(h,"cursor","text")])),t(A,L(s.hn),$([t(h,"pointer-events","none !important")])),t(A,L(s.b5),$([t(h,"pointer-events","auto !important")])),t(A,L(s.a$),$([t(h,"opacity","0")])),t(A,L(s.aU),$([t(h,"opacity","1")])),t(A,L(G(s.gK,s.a$))+":hover",$([t(h,"opacity","0")])),t(A,L(G(s.gK,s.aU))+":hover",$([t(h,"opacity","1")])),t(A,L(G(s.gx,s.a$))+":focus",$([t(h,"opacity","0")])),t(A,L(G(s.gx,s.aU))+":focus",$([t(h,"opacity","1")])),t(A,L(G(s.cM,s.a$))+":active",$([t(h,"opacity","0")])),t(A,L(G(s.cM,s.aU))+":active",$([t(h,"opacity","1")])),t(A,L(s.fj),$([t(h,"transition",t(ee,", ",t(q,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,L(s.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,L(s.hE),$([t(h,"overflow-x","auto"),t(A,L(s.af),$([t(h,"flex-shrink","1")]))])),t(A,L(s.hF),$([t(h,"overflow-y","auto"),t(A,L(s.aw),$([t(h,"flex-shrink","1")])),t(A,L(s.hL),$([t(h,"flex-shrink","1")]))])),t(A,L(s.f7),$([t(h,"overflow","hidden")])),t(A,L(s.f8),$([t(h,"overflow-x","hidden")])),t(A,L(s.f9),$([t(h,"overflow-y","hidden")])),t(A,L(s.dP),$([t(h,"width","auto")])),t(A,L(s.b2),$([t(h,"border-width","0")])),t(A,L(s.fX),$([t(h,"border-style","dashed")])),t(A,L(s.fY),$([t(h,"border-style","dotted")])),t(A,L(s.fZ),$([t(h,"border-style","solid")])),t(A,L(s.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,L(s.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,L(s.hL),y$),t(A,L(s.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(j,L(s.fK),$([t(h,"flex-basis","0%"),t(A,L(s.fu),$([t(h,"flex-basis","auto")])),t(A,L(s.et),$([t(h,"flex-basis","auto")]))])),t(j,L(s.c0),$([t(h,"align-self","stretch !important")])),t(j,L(s.ef),$([t(h,"align-self","stretch !important")])),t(j,L(s.dQ),$([t(h,"flex-grow","100000")])),t(j,L(s.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(j,"u:first-of-type."+s.fG,$([t(h,"flex-grow","1")])),t(j,"s:first-of-type."+s.fE,$([t(h,"flex-grow","1"),t(j,L(s.fB),$([t(h,"margin-left","auto !important")]))])),t(j,"s:last-of-type."+s.fE,$([t(h,"flex-grow","1"),t(j,L(s.fB),$([t(h,"margin-right","auto !important")]))])),t(j,"s:only-of-type."+s.fE,$([t(h,"flex-grow","1"),t(j,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(j,"s:last-of-type."+(s.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(j,"u:first-of-type."+(s.fG+(" ~ s."+s.fE)),$([t(h,"flex-grow","0")])),vt(function(e){switch(e){case 0:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return z($([t(h,"justify-content","flex-end")]),D);case 3:return z($([t(h,"justify-content","flex-start")]),D);case 4:return z($([t(h,"justify-content","center")]),D);default:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,L(s.hO),$([t(h,"justify-content","space-between")])),t(A,L(s.cj),$([t(h,"align-items","baseline")]))])),t(A,L(s.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(j,L(s.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,L(s.ee),$([t(h,"flex-basis","auto")]))])),t(j,L(s.c0),$([t(h,"flex-grow","100000")])),t(j,L(s.dQ),$([t(h,"width","100%")])),t(j,L(s.fv),$([t(h,"width","100%")])),t(j,L(s.dP),$([t(h,"align-self","flex-start")])),t(j,"u:first-of-type."+s.fD,$([t(h,"flex-grow","1")])),t(j,"s:first-of-type."+s.fF,$([t(h,"flex-grow","1"),t(j,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(j,"s:last-of-type."+s.fF,$([t(h,"flex-grow","1"),t(j,L(s.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(j,"s:only-of-type."+s.fF,$([t(h,"flex-grow","1"),t(j,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(j,"s:last-of-type."+(s.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(j,"u:first-of-type."+(s.fD+(" ~ s."+s.fF)),$([t(h,"flex-grow","0")])),vt(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(h,"justify-content","center")]),D)}}),t(j,L(s.b9),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,L(s.hO),$([t(h,"justify-content","space-between")]))])),t(A,L(s.gC),$([t(h,"display","-ms-grid"),t(j,".gp",$([t(j,L(s.fK),$([t(h,"width","100%")]))])),t(jg,z("display","grid"),$([z("display","grid")])),Hg(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,L(s.eY),$([t(h,"display","block"),t(j,L(s.fK+":first-child"),$([t(h,"margin","0 !important")])),t(j,L(s.fK+(li(3)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),t(j,L(s.fK+(li(2)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),vt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return z(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,L(s.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,L(s.gW),$([t(A,L(s.hL),$([t(h,"flex-basis","auto")]))])),t(A,L(s.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(j,L(s.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,L(s.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,L(s.c_),$([t(h,"z-index","0"),t(j,L(s.fQ),$([t(h,"z-index","-1")]))])),t(Yo,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(Yo,L(s.eZ),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(Yo,L(s.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,L(s.fu),$([t(h,"display","inline-block")])),t(A,L(s.gP),$([t(h,"display","flex")])),t(A,L(s.fQ),$([t(h,"display","flex")])),t(A,L(s.fy),$([t(h,"display","flex")])),t(A,L(s.fR),$([t(h,"display","flex")])),t(A,L(s.hh),$([t(h,"display","flex")])),t(A,L(s.hg),$([t(h,"display","flex")])),t(j,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(j,L(s.af),$([t(h,"display","inline")])),t(j,L(s.aw),$([t(h,"display","inline-flex")])),t(j,L(s.gC),$([t(h,"display","inline-grid")])),vt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right")]));case 3:return z(D,$([t(h,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,L(s.ia),$([t(h,"font-weight","100")])),t(A,L(s.h1),$([t(h,"font-weight","200")])),t(A,L(s.h5),$([t(h,"font-weight","300")])),t(A,L(s.h7),$([t(h,"font-weight","400")])),t(A,L(s.h6),$([t(h,"font-weight","500")])),t(A,L(s.h9),$([t(h,"font-weight","600")])),t(A,L(s.fV),$([t(h,"font-weight","700")])),t(A,L(s.h0),$([t(h,"font-weight","800")])),t(A,L(s.h2),$([t(h,"font-weight","900")])),t(A,L(s.g2),$([t(h,"font-style","italic")])),t(A,L(s.hU),$([t(h,"text-decoration","line-through")])),t(A,L(s.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,G(L(s.ih),L(s.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,L(s.ib),$([t(h,"font-style","normal")])),t(A,L(s.h3),$([t(h,"text-align","justify")])),t(A,L(s.cG),$([t(h,"text-align","justify-all")])),t(A,L(s.h$),$([t(h,"text-align","center")])),t(A,L(s.h8),$([t(h,"text-align","right")])),t(A,L(s.h4),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),bn=function(e){return $([t(pr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(pr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},Og=tr($([t(q,function(e){return t(pr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(nn,0,6)),t(q,function(e){return t(pr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(nn,8,32)),t(q,function(e){return t(pr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(nn,0,24)),$([t(pr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(pr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),bn("zero"),bn("onum"),bn("liga"),bn("dlig"),bn("ordn"),bn("tnum"),bn("afrc"),bn("frac")])),Jg=`
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
`,Zg=`
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
`,Kg=`
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
`,Xg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(" { flex-basis: auto !important; } "+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(L(s.b9)+(" { flex-basis: auto !important; }}"+(qg+(Yg+(Kg+(Zg+Jg))))))))))))))),ga=function(e){return t(ee,"",e)},ha=f(function(e,r){return{b6:r,G:D,aE:D,ag:e}}),ba=f(function(e,r){var n=e,a=f(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Te(o,{aE:t(M,z(c,l),o.aE)});case 3:var u=i.a,m=u.a,d=u.b,p=i.b;return Te(o,{G:t(M,{b6:`
}`,G:D,aE:p,ag:"@supports ("+(m+(":"+(d+(") {"+n.ag))))},o.G)});case 5:var g=i.a,v=i.b;return Te(o,{G:t(M,t(ba,t(ha,n.ag+(" + "+g),""),v),o.G)});case 1:var _=i.a,x=i.b;return Te(o,{G:t(M,t(ba,t(ha,n.ag+(" > "+_),""),x),o.G)});case 2:var _=i.a,x=i.b;return Te(o,{G:t(M,t(ba,t(ha,n.ag+(" "+_),""),x),o.G)});case 4:var w=i.a,S=i.b;return Te(o,{G:t(M,t(ba,t(ha,G(n.ag,w),""),S),o.G)});default:var y=i.a;return Te(o,{G:t(M,t(ba,t(ha,n.ag,""),y),o.G)})}});return b(We,a,n,r)}),Qg=function(e){var r=function(i){return ga(t(q,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b6+"}"))):""},a=function(i){var o=i;return G(n(o),ga(t(q,a,o.G)))};return ga(t(q,a,b(We,f(function(i,o){var c=i.a,l=i.b;return t(M,t(ba,t(ha,c,""),l),o)}),D,e)))},x$=G(Xg,Qg(G(Ug,Og))),_n=so,w$=function(e){var r=e.eS;switch(r){case 0:return b(Wr,"div",D,$([b(Wr,"style",D,$([_n(x$)]))]));case 1:return _n("");default:return b(Wr,"elm-ui-static-rules",$([t(b$,"rules",Uo(x$))]),D)}},eh=f(function(e,r){return Xr(b(Ie,od(e),ad(),r))}),rh=function(e){return Xr(b(Ie,f(function(r,n){var a=r.a,i=r.b;return b(id,a,i,n)}),td(),e))},nh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},ah=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},th=function(e){if(e.$===5){var r=e.a;return t(at,ah,r.fo)}else return!1},_a=f(function(e,r){return ce(e,r)<0?e:r}),ft=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Pe=J(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ie,ft(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ie,ft(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ie,ft(!1),"",a)+`
}`))])}case 0:var c=b(Ie,ft(!1),"",a);return $([n+("-fs:focus {"+(c+`
}`)),"."+(s.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(s.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(b(Ie,ft(!1),"",a)+`
}`))])}}),ih=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},oh=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(q,ih,r.fo)))}else return R},ch=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,d=m.a,p=m.b,g=m.c,v=e.c,_=v.a,x=v.b,w=v.c,S=e.d,y="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(d)+(", "+(ae(p)+(", "+(ae(g)+")"))))),I="rotate3d("+(ae(_)+(", "+(ae(x)+(", "+(ae(w)+(", "+(ae(S)+"rad)")))))));return N(y+(" "+(C+(" "+I))))}},Ko=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(Pe,e,n,a,i);case 13:var o=r.a,c=r.b;return P(Pe,e,n,"."+o,$([t(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,u=t(qe,0,t(_a,1,1-l));return P(Pe,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return P(Pe,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,d=r.b,p=t(ee,", ",t(Gn,oh,d)),g=$([t(re,"font-family",t(ee,", ",t(q,nh,d))),t(re,"font-feature-settings",p),t(re,"font-variant",t(at,th,d)?"small-caps":"normal")]);return P(Pe,e,n,"."+o,g);case 3:var v=r.a,c=r.b,_=r.c;return P(Pe,e,n,"."+v,$([t(re,c,_)]));case 4:var v=r.a,c=r.b,x=r.c;return P(Pe,e,n,"."+v,$([t(re,c,da(x))]));case 5:var w=r.a,S=r.b,y=r.c,C=k(y)+"px",I=k(S)+"px",O="."+s.af,K="."+(s.dR+O),W="."+s.dZ,Y="."+s.eZ,Z="."+s.eY,B="."+s.dY,ne=ae(y/2)+"px",fe=ae(S/2)+"px",ye="."+s.aw,v="."+w,me="."+s.fK;return tr($([P(Pe,e,n,v+(O+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",I)])),P(Pe,e,n,v+(K+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),P(Pe,e,n,v+(ye+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,v+(Z+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,v+(Z+(" > "+B)),$([t(re,"margin-right",I)])),P(Pe,e,n,v+(Z+(" > "+W)),$([t(re,"margin-left",I)])),P(Pe,e,n,G(v,Y),$([t(re,"line-height","calc(1em + "+(k(y)+"px)"))])),P(Pe,e,n,"textarea"+(me+v),$([t(re,"line-height","calc(1em + "+(k(y)+"px)")),t(re,"height","calc(100% + "+(k(y)+"px)"))])),P(Pe,e,n,v+(Y+(" > "+B)),$([t(re,"margin-right",I)])),P(Pe,e,n,v+(Y+(" > "+W)),$([t(re,"margin-left",I)])),P(Pe,e,n,v+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(y/2|0))+"px")])),P(Pe,e,n,v+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(y/2|0))+"px")]))]));case 7:var w=r.a,se=r.b,W=r.c,we=r.d,B=r.e,v="."+w;return P(Pe,e,n,v,$([t(re,"padding",ae(se)+("px "+(ae(W)+("px "+(ae(we)+("px "+(ae(B)+"px")))))))]));case 6:var w=r.a,se=r.b,W=r.c,we=r.d,B=r.e,v="."+w;return P(Pe,e,n,v,$([t(re,"border-width",k(se)+("px "+(k(W)+("px "+(k(we)+("px "+(k(B)+"px")))))))]));case 8:var de=r.a,Ve=T(function(He,Ha,Kr){e:for(;;)switch(Kr.$){case 0:var Qm=Kr.a;return k(Qm)+"px";case 1:var zr=z(He,Ha);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,"max-content";zr.a;var Vn=zr.b.a;return"minmax(max-content, "+(k(Vn)+"px)")}else if(zr.b.$===1){var An=zr.a.a;return zr.b,"minmax("+(k(An)+"px, max-content)")}else{var An=zr.a.a,Vn=zr.b.a;return"minmax("+(k(An)+("px, "+(k(Vn)+"px)")))}case 2:var Il=Kr.a,Mr=z(He,Ha);if(Mr.a.$===1){if(Mr.b.$===1)return Mr.a,Mr.b,k(Il)+"fr";Mr.a;var Vn=Mr.b.a;return"minmax(max-content, "+(k(Vn)+"px)")}else if(Mr.b.$===1){var An=Mr.a.a;return Mr.b,"minmax("+(k(An)+("px, "+(k(Il)+"frfr)")))}else{var An=Mr.a.a,Vn=Mr.b.a;return"minmax("+(k(An)+("px, "+(k(Vn)+"px)")))}case 3:var Xi=Kr.a,Qi=Kr.b,eo=N(Xi),ro=Ha,no=Qi;He=eo,Ha=ro,Kr=no;continue e;default:var Xi=Kr.a,Qi=Kr.b,eo=He,ro=N(Xi),no=Qi;He=eo,Ha=ro,Kr=no;continue e}}),Me=function(He){return b(Ve,R,R,He)};Me(de.hP.a);var Ze=Me(de.hP.b),Dn=function(He){return"grid-template-rows: "+(He+";")}(t(ee," ",t(q,Me,de.hB))),Na=function(He){return"-ms-grid-rows: "+(He+";")}(t(ee,Ze,t(q,Me,de.ak))),Yr=function(He){return"-ms-grid-columns: "+(He+";")}(t(ee,Ze,t(q,Me,de.ak))),Zr="grid-row-gap:"+(Me(de.hP.b)+";"),oa="grid-column-gap:"+(Me(de.hP.a)+";"),Bt=function(He){return"grid-template-columns: "+(He+";")}(t(ee," ",t(q,Me,de.ak))),v=".grid-rows-"+(t(ee,"-",t(q,Hr,de.hB))+("-cols-"+(t(ee,"-",t(q,Hr,de.ak))+("-space-x-"+(Hr(de.hP.a)+("-space-y-"+Hr(de.hP.b))))))),Ga=v+("{"+(Bt+(Dn+(oa+(Zr+"}"))))),Zi="@supports (display:grid) {"+(Ga+"}"),Ki=v+("{"+(Yr+(Na+"}")));return $([Ki,Zi]);case 9:var rr=r.a,qm=t(ee," ",$(["-ms-grid-row: "+(k(rr.af)+";"),"-ms-grid-row-span: "+(k(rr.gH)+";"),"-ms-grid-column: "+(k(rr.ga)+";"),"-ms-grid-column-span: "+(k(rr.im)+";")])),Ym=t(ee," ",$(["grid-row: "+(k(rr.af)+(" / "+(k(rr.af+rr.gH)+";"))),"grid-column: "+(k(rr.ga)+(" / "+(k(rr.ga+rr.im)+";")))])),v=".grid-pos-"+(k(rr.af)+("-"+(k(rr.ga)+("-"+(k(rr.im)+("-"+k(rr.gH))))))),Ga=v+("{"+(Ym+"}")),Zi="@supports (display:grid) {"+(Ga+"}"),Ki=v+("{"+(qm+"}"));return $([Ki,Zi]);case 11:var v=r.a,Zm=r.b,Km=function(He){return b(Ko,e,He,N(v))};return t(pa,Km,Zm);default:var Fr=r.a,_=ch(Fr),v=Jo(Fr),Rt=z(v,_);if(!Rt.a.$&&!Rt.b.$){var w=Rt.a.a,Xm=Rt.b.a;return P(Pe,e,n,"."+w,$([t(re,"transform",Xm)]))}else return D}}),lh=f(function(e,r){return rh(t(q,function(n){var a=b(Ko,e,n,R);return z(ut(n),t(eh,Uo,a))},r))}),ui=f(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(q,n,r))+"}"))}),S$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(ui,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(ui,"."+(e+("."+(r+("> ."+(s.Y+(", ."+(e+(" ."+(r+(" > ."+s.Y)))))))))),i)])}),uh=T(function(e,r,n){var a=r.a,i=r.b,o=ue(e,n)?e:n+(" ."+e);return t(ee," ",G(b(S$,o,s.hM,i),b(S$,o,s.gy,a)))}),$h=f(function(e,r){var n=ue(e,r)?e:r+(" ."+e);return t(ee," ",$([t(ui,"."+(n+("."+(s.hM+(", "+("."+(n+(" ."+s.hM))))))),$([z("line-height","1")])),t(ui,"."+(n+("."+(s.hM+("> ."+(s.Y+(", ."+(n+(" ."+(s.hM+(" > ."+s.Y)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),C$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),L$=f(function(e,r){return b(We,f(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),vh=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ie,qe,r,n))}else return R},P$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ie,_a,r,n))}else return R},z$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(ke,e.gk,P$(r)),a=t(ke,e.fP,P$(t(L$,function(m){return!ue(m,n)},r))),i=t(ke,e.f1,vh(r)),o=1/(i-a),c=1-i,l=1/(i-n),u=1-i;return{f1:b(C$,o,i-a,c),ec:b(C$,l,i-n,u)}},M$=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ae(e.gH)),z("vertical-align",ae(e.fp)+"em"),z("font-size",ae(e.bi)+"em")]))},fh=function(e){return b(Ie,f(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return N(z(M$(function(c){return c.ec}(z$(o))),M$(function(c){return c.f1}(z$(o)))))}else return n;else return n}),R,e)},mh=function(e){var r=function(o){if(o.$===4){var c=o.b;return N("@import url('"+(c+"');"))}else return R},n=function(o){o.a;var c=o.b,l=t(ee,`
`,t(Gn,r,c));return l},a=t(q,Iu,e),i=function(o){var c=o.a,l=o.b,u=fh(l);if(u.$===1)return t(ee,"",t(q,$h(c),a));var m=u.a;return t(ee,"",t(q,t(uh,c,m),a))};return G(t(ee,`
`,t(q,n,e)),t(ee,`
`,t(q,i,e)))},sh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(z(r,n))}else return R},T$=f(function(e,r){var n=f(function(c,l){return{cC:G(l.cC,b(Ko,e,c,R)),bU:function(){var u=sh(c);if(u.$===1)return l.bU;var m=u.a;return t(M,m,l.bU)}()}}),a=b(Ie,n,{cC:D,bU:D},r),i=a.bU,o=a.cC;return G(mh(i),ga(o))}),k$=f(function(e,r){var n=e.eS;switch(n){case 0:return b(Wr,"div",D,$([b(Wr,"style",D,$([_n(t(T$,e,r))]))]));case 1:return b(Wr,"div",D,$([b(Wr,"style",D,$([_n(t(T$,e,r))]))]));default:return b(Wr,"elm-ui-rules",$([t(b$,"rules",t(lh,e,r))]),D)}}),D$=J(function(e,r,n,a){var i=t(k$,r,b(Ie,g$,z(p$,h$(r.gx)),n).b);return e?t(M,z("static-stylesheet",w$(r)),t(M,z("dynamic-stylesheet",i),a)):t(M,z("dynamic-stylesheet",i),a)}),V$=J(function(e,r,n,a){var i=t(k$,r,b(Ie,g$,z(p$,h$(r.gx)),n).b);return e?t(M,w$(r),t(M,i,a)):t(M,i,a)}),Xo=$e(45),mt=$e(37),A$=function(e){return Cd(Yl(e))},dh=rn("p"),ir=f(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return ue(o&a,o)}else{var i=e.a;return ue(i&n,i)}}),I$=rn("s"),F$=rn("u"),Qo=$e(44),st=$e(39),$i=fr(function(e,r,n,a,i,o){var c=f(function(u,m){if(a.$===1){var d=a.a;return b(A$,u,m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,v=i.b;return P(D$,!1,g,v,d);default:var g=i.a,v=i.b;return P(D$,!0,g,v,d)}}())}else{var p=a.a;return t(function(){switch(u){case"div":return sa;case"p":return dh;default:return Wr(u)}}(),m,function(){switch(i.$){case 0:return p;case 2:var g=i.a,v=i.b;return P(V$,!1,g,v,p);default:var g=i.a,v=i.b;return P(V$,!0,g,v,p)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var u=r.a;return t(c,u,n);default:var u=r.a,m=r.b;return b(Wr,u,n,$([t(c,m,$([wr(s.fK+(" "+s.hL))]))]))}}();switch(o){case 0:return t(ir,st,e)&&!t(ir,Qo,e)?l:t(ir,f$,e)?t(F$,$([wr(t(ee," ",$([s.fK,s.hL,s.b9,s.ax,s.fG])))]),$([l])):t(ir,m$,e)?t(I$,$([wr(t(ee," ",$([s.fK,s.hL,s.b9,s.ax,s.fE])))]),$([l])):l;case 1:return t(ir,mt,e)&&!t(ir,Xo,e)?l:t(ir,s$,e)?t(I$,$([wr(t(ee," ",$([s.fK,s.hL,s.b9,s.fF])))]),$([l])):t(ir,v$,e)?t(F$,$([wr(t(ee," ",$([s.fK,s.hL,s.b9,s.fD])))]),$([l])):l;default:return l}}),yn=function(e){return!e.b},ec=_n,ph=s.fK+(" "+(s.Y+(" "+(s.dP+(" "+s.c$))))),dt=function(e){return t(sa,$([wr(ph)]),$([ec(e)]))},gh=s.fK+(" "+(s.Y+(" "+(s.dQ+(" "+s.c0))))),E$=function(e){return t(sa,$([wr(gh)]),$([ec(e)]))},hh=T(function(e,r,n){var a=f(function(_,x){var w=_.a,S=_.b,y=x.a,C=x.b;switch(S.$){case 0:var I=S.a;return ue(e,ci),z(t(M,z(w,I(e)),y),C);case 1:var O=S.a;return ue(e,ci),z(t(M,z(w,t(O.gL,Nn,e)),y),yn(C)?O.hV:G(O.hV,C));case 2:var K=S.a;return z(t(M,z(w,ue(e,dr)?E$(K):dt(K)),y),C);default:return z(y,C)}}),i=f(function(_,x){var w=x.a,S=x.b;switch(_.$){case 0:var y=_.a;return ue(e,ci),z(t(M,y(e),w),S);case 1:var C=_.a;return ue(e,ci),z(t(M,t(C.gL,Nn,e),w),yn(S)?C.hV:G(C.hV,S));case 2:var I=_.a;return z(t(M,ue(e,dr)?E$(I):dt(I),w),S);default:return z(w,S)}});if(r.$===1){var o=r.a,c=b(We,a,z(D,D),o),l=c.a,u=c.b,m=yn(u)?n.hV:G(n.hV,u);if(m.b){var d=m;return Oo({gL:P($i,n.aR,n.aT,n.aJ,l$(b($$,"nearby-element-pls",l,n.aM))),hV:d})}else return ct(V($i,n.aR,n.aT,n.aJ,l$(b($$,"nearby-element-pls",l,n.aM)),Nn))}else{var p=r.a,g=b(We,i,z(D,D),p),v=g.a,u=g.b,m=yn(u)?n.hV:G(n.hV,u);if(m.b){var d=m;return Oo({gL:P($i,n.aR,n.aT,n.aJ,Ye(t(u$,v,n.aM))),hV:d})}else return ct(V($i,n.aR,n.aT,n.aJ,Ye(t(u$,v,n.aM)),Nn))}}),or=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),bh=function(e){return{$:10,a:e}},vi=f(function(e,r){return{$:0,a:e,b:r}}),oe=f(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(vi,n,o|a)}else{var i=e.a;return t(vi,i|n,a)}}),B$=function(e){return{$:1,a:e}},fi=f(function(e,r){return{$:3,a:e,b:r}}),R$=function(e){return{$:2,a:e}},_h=f(function(e,r){return t(sa,$([wr(function(){switch(e){case 0:return t(ee," ",$([s.be,s.hL,s.fy]));case 1:return t(ee," ",$([s.be,s.hL,s.fR]));case 2:return t(ee," ",$([s.be,s.hL,s.hh]));case 3:return t(ee," ",$([s.be,s.hL,s.hg]));case 4:return t(ee," ",$([s.be,s.hL,s.gP]));default:return t(ee," ",$([s.be,s.hL,s.fQ]))}}())]),$([function(){switch(r.$){case 3:return _n("");case 2:var n=r.a;return dt(n);case 0:var a=r.a;return a(dr);default:var i=r.a;return t(i.gL,Nn,dr)}}()]))}),yh=T(function(e,r,n){var a=t(_h,e,r);switch(n.$){case 0:return e===5?B$($([a])):R$($([a]));case 1:var i=n.a;return e===5?B$(t(M,a,i)):t(fi,i,$([a]));case 2:var o=n.a;return e===5?t(fi,$([a]),o):R$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(fi,t(M,a,i),o):t(fi,i,t(M,a,o))}}),j$=f(function(e,r){return{$:2,a:e,b:r}}),xn=function(e){return{$:1,a:e}},Hn=f(function(e,r){switch(r.$){case 0:return xn(e);case 1:var n=r.a;return t(j$,n,e);default:var a=r.a,i=r.b;return t(j$,a,i)}}),xh=function(e){switch(e){case 0:return s.cN+(" "+s.dY);case 2:return s.cN+(" "+s.dZ);default:return s.cN+(" "+s.fB)}},wh=function(e){switch(e){case 0:return s.cO+(" "+s.fH);case 2:return s.cO+(" "+s.fA);default:return s.cO+(" "+s.fC)}},pt=f(function(e,r){return t(Tr,Td(e),Zl(r))}),Ur=J(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),wn=function(e){return{$:1,a:e}},Sh=f(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return wn(F(i,0,0));case 1:var o=r.a;return wn(F(0,o,0));case 2:var c=r.a;return wn(F(0,0,c));case 3:var n=r.a;return wn(n);case 4:var n=r.a,v=r.b;return P(Ur,F(0,0,0),F(1,1,1),n,v);default:var n=r.a;return P(Ur,F(0,0,0),n,F(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,c=a.c;switch(r.$){case 0:var l=r.a;return wn(F(l,o,c));case 1:var u=r.a;return wn(F(i,u,c));case 2:var m=r.a;return wn(F(i,o,m));case 3:var n=r.a;return wn(n);case 4:var n=r.a,v=r.b;return P(Ur,a,F(1,1,1),n,v);default:var d=r.a;return P(Ur,a,d,F(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,c=a.c,p=e.b,g=e.c,v=e.d;switch(r.$){case 0:var l=r.a;return P(Ur,F(l,o,c),p,g,v);case 1:var u=r.a;return P(Ur,F(i,u,c),p,g,v);case 2:var m=r.a;return P(Ur,F(i,o,m),p,g,v);case 3:var _=r.a;return P(Ur,_,p,g,v);case 4:var x=r.a,w=r.b;return P(Ur,a,p,x,w);default:var S=r.a;return P(Ur,a,S,g,v)}}}),ya=$e(7),N$=$e(36),G$=f(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(vi,n|i,a|o)}),tn=t(vi,0,0),rc=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return F(tn,s.ee+(" "+a),$([b(or,a,"height",n+"px")]));case 1:return F(t(oe,N$,tn),s.c$,D);case 2:var i=e.a;return i===1?F(t(oe,mt,tn),s.c0,D):F(t(oe,mt,tn),s.ef+(" height-fill-"+k(i)),$([b(or,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+k(o),u=b(or,l,"min-height",k(o)+"px !important"),m=rc(c),d=m.a,p=m.b,g=m.c;return F(t(oe,Xo,d),l+(" "+p),t(M,u,g));default:var v=e.a,c=e.b,l="max-height-"+k(v),u=b(or,l,"max-height",k(v)+"px"),_=rc(c),d=_.a,p=_.b,g=_.c;return F(t(oe,Xo,d),l+(" "+p),t(M,u,g))}},H$=$e(38),nc=function(e){switch(e.$){case 0:var r=e.a;return F(tn,s.fu+(" width-px-"+k(r)),$([b(or,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return F(t(oe,H$,tn),s.dP,D);case 2:var n=e.a;return n===1?F(t(oe,st,tn),s.dQ,D):F(t(oe,st,tn),s.fv+(" width-fill-"+k(n)),$([b(or,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),c=b(or,o,"min-width",k(a)+"px"),l=nc(i),u=l.a,m=l.b,d=l.c;return F(t(oe,Qo,u),o+(" "+m),t(M,c,d));default:var p=e.a,i=e.b,o="max-width-"+k(p),c=b(or,o,"max-width",k(p)+"px"),g=nc(i),u=g.a,m=g.b,d=g.c;return F(t(oe,Qo,u),o+(" "+m),t(M,c,d))}},mi=$e(27),Ch=f(function(e,r){if(ue(e,mi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return ue(i,c)&&ue(i,o)&&ue(i,l)&&i>=0&&i<=24;default:return!1}}),xa=$e(6),W$=$e(30),U$=$e(29),Lh=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var d=l.a,p=l.b;switch(d.$){case 0:var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 3:var I=d.a,O=d.b;if(t(ir,I,n)){var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else{var g=O+(" "+e),v=r,_=t(oe,I,n),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}case 1:var K=d.a,g=e,v=r,_=n,x=a,w=i,S=t(M,K,o),y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 4:var I=d.a,W=d.b;if(t(ir,I,n)){var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else if(t(Ch,I,W)){var g=ut(W)+(" "+e),v=r,_=t(oe,I,n),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else{var g=ut(W)+(" "+e),v=r,_=t(oe,I,n),x=a,w=t(M,W,i),S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}case 10:var I=d.a,Y=d.b,g=e,v=r,_=t(oe,I,n),x=t(Sh,a,Y),w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 7:var Z=d.a;if(t(ir,xa,n)){var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else switch(Z.$){case 0:var B=Z.a,g=s.fu+(" width-px-"+k(B))+(" "+e),v=r,_=t(oe,xa,n),x=a,w=t(M,b(or,"width-px-"+k(B),"width",k(B)+"px"),i),S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 1:var g=e+(" "+s.dP),v=r,_=t(oe,H$,t(oe,xa,n)),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 2:var ne=Z.a;if(ne===1){var g=e+(" "+s.dQ),v=r,_=t(oe,st,t(oe,xa,n)),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else{var g=e+(" "+(s.fv+(" width-fill-"+k(ne)))),v=r,_=t(oe,st,t(oe,xa,n)),x=a,w=t(M,b(or,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}default:var fe=nc(Z),ye=fe.a,me=fe.b,Zr=fe.c,g=e+(" "+me),v=r,_=t(G$,ye,t(oe,xa,n)),x=a,w=G(Zr,i),S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}case 8:var se=d.a;if(t(ir,ya,n)){var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else switch(se.$){case 0:var B=se.a,we=k(B)+"px",de="height-px-"+we,g=s.ee+(" "+(de+(" "+e))),v=r,_=t(oe,ya,n),x=a,w=t(M,b(or,de,"height ",we),i),S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 1:var g=s.c$+(" "+e),v=r,_=t(oe,N$,t(oe,ya,n)),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 2:var ne=se.a;if(ne===1){var g=s.c0+(" "+e),v=r,_=t(oe,mt,t(oe,ya,n)),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else{var g=e+(" "+(s.ef+(" height-fill-"+k(ne)))),v=r,_=t(oe,mt,t(oe,ya,n)),x=a,w=t(M,b(or,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}default:var Ve=rc(se),ye=Ve.a,me=Ve.b,Zr=Ve.c,g=e+(" "+me),v=r,_=t(G$,ye,t(oe,ya,n)),x=a,w=G(Zr,i),S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}case 2:var Me=d.a;switch(Me.$){case 0:var g=e,v=t(Hn,"main",r),_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 1:var g=e,v=t(Hn,"nav",r),_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 2:var g=e,v=t(Hn,"footer",r),_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 3:var g=e,v=t(Hn,"aside",r),_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 4:var Ze=Me.a;if(Ze<=1){var g=e,v=t(Hn,"h1",r),_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else if(Ze<7){var g=e,v=t(Hn,"h"+k(Ze),r),_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else{var g=e,v=t(Hn,"h6",r),_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}case 9:var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 8:var g=e,v=r,_=n,x=a,w=i,S=t(M,t(pt,"role","button"),o),y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 5:var Dn=Me.a,g=e,v=r,_=n,x=a,w=i,S=t(M,t(pt,"aria-label",Dn),o),y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 6:var g=e,v=r,_=n,x=a,w=i,S=t(M,t(pt,"aria-live","polite"),o),y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;default:var g=e,v=r,_=n,x=a,w=i,S=t(M,t(pt,"aria-live","assertive"),o),y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}case 9:var Na=d.a,Yr=d.b,Zr=function(){switch(Yr.$){case 3:return i;case 2:return Yr.a,i;case 0:return Yr.a,i;default:var Ga=Yr.a;return G(i,Ga.hV)}}(),g=e,v=r,_=n,x=a,w=Zr,S=o,y=b(yh,Na,Yr,c),C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e;case 6:var oa=d.a;if(t(ir,W$,n)){var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else{var g=xh(oa)+(" "+e),v=r,_=function(Fr){switch(oa){case 1:return t(oe,m$,Fr);case 2:return t(oe,f$,Fr);default:return Fr}}(t(oe,W$,n)),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}default:var Bt=d.a;if(t(ir,U$,n)){var g=e,v=r,_=n,x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}else{var g=wh(Bt)+(" "+e),v=r,_=function(Fr){switch(Bt){case 1:return t(oe,s$,Fr);case 2:return t(oe,v$,Fr);default:return Fr}}(t(oe,U$,n)),x=a,w=i,S=o,y=c,C=p;e=g,r=v,n=_,a=x,i=w,o=S,c=y,l=C;continue e}}}else{var u=Jo(a);if(u.$===1)return{aJ:t(M,wr(e),o),aM:c,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(M,wr(e+(" "+m)),o),aM:c,aR:n,aT:r,hV:t(M,bh(a),i)}}}),Ph={$:0},zh=Ph,cr=J(function(e,r,n,a){return b(hh,e,a,Wa(Lh,Vg(e),r,tn,zh,D,D,Lg,nr(n)))}),on=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Mh={fO:R,fW:R,hH:N({a2:0,b7:P(on,155/255,203/255,1,1),eV:z(0,0),bi:3})},Th=function(e){var r=f(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gK;return c.$===1?Te(i,{gK:N(o)}):i;case 1:var l=a.a,u=i.gx;return u.$===1?Te(i,{gx:N(l)}):i;default:var m=a.a,d=i.eS;return d.$===1?Te(i,{eS:N(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return Mh;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(We,r,{gx:R,gK:R,eS:R},e))},kh=f(function(e,r){switch(r.$){case 0:var n=r.a;return n(dr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),dr);case 2:var i=r.a;return dt(i);default:return dt("")}}),Dh=T(function(e,r,n){var a=Th(e),i=function(){var o=a.eS;return o===1?c$(a):Sg(a)}();return t(kh,i,P(cr,dr,jn,r,Ye($([n]))))}),gt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),O$=f(function(e,r){return{$:1,a:e,b:r}}),J$=function(e){return{$:2,a:e}},Vh={$:1},ge=f(function(e,r){return{$:4,a:e,b:r}}),ac=function(e){return{$:3,a:e}},q$=$e(8),Y$=$e(14),Z$=$e(5),K$=$e(4),wa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(a)+("-"+De(i))))))},si=Is,tc=As,X$=f(function(e,r){return G(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",tc(si(n)));case 4:var n=e.a;return e.b,t(ee,"-",tc(si(n)));default:var n=e.a.hc;return t(ee,"-",tc(si(n)))}}())}),Ah=function(){var e=$([ac("Open Sans"),ac("Helvetica"),ac("Verdana"),Vh]);return $([t(ge,q$,b(gt,"bg-"+wa(P(on,1,1,1,0)),"background-color",P(on,1,1,1,0))),t(ge,Y$,b(gt,"fc-"+wa(P(on,0,0,0,1)),"color",P(on,0,0,0,1))),t(ge,K$,J$(20)),t(ge,Z$,t(O$,b(Ie,X$,"font-",e),e))])}(),Ih=T(function(e,r,n){var a=e.hl;return b(Dh,a,t(M,sr(t(ee," ",$([s.hA,s.fK,s.hL]))),G(Ah,r)),n)}),Q$={$:3},ev=function(e){return{$:2,a:e}},ic=Pd,rv=f(function(e,r){switch(r.$){case 1:var n=r.a;return Oo({gL:f(function(o,c){return t(ic,e,t(n.gL,o,c))}),hV:n.hV});case 0:var a=r.a;return ct(t(lt,ic(e),a));case 2:var i=r.a;return ev(i);default:return Q$}}),oc=rv,Fh=ic,Eh=function(e){return{$:0,a:e}},Se=Eh,Bh=Md,gr=Bh,nv={$:1},di=function(e){return{$:5,a:e}},av=di(0),Ar=T(function(e,r,n){return P(on,e/255,r/255,n/255,1)}),tv=b(Ar,0,0,0),Rh=Tr("d"),jh=Tr("fill"),Nh=Tr("height"),iv=Jl("http://www.w3.org/2000/svg"),Gh=iv("path"),Hh=iv("svg"),Wh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},Uh=function(e){var r=Wh(e);return"rgba("+(k(Le(r.hu*255))+(","+k(Le(r.gA*255))+(","+k(Le(r.fS*255))+(","+ae(r.fI)+")"))))},Oh=Tr("viewBox"),Jh=Tr("width"),Sa=T(function(e,r,n){return t(Hh,$([Oh("0 0 100 100"),Jh(k(e)),Nh(k(e))]),$([t(Gh,$([Rh(n),jh(Uh(r))]),D)]))}),qh={$:1},lr=qh,ov=function(e){return{$:7,a:e}},Q=ov,he=f(function(e,r){return P(cr,dr,jn,t(M,Q(lr),t(M,pe(lr),e)),Ye($([r])))}),cv=function(e){return{$:2,a:e}},ve=cv(1),Wn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ca={c4:260,bF:54},cn=function(e){return t(ge,q$,b(gt,"bg-"+wa(e),"background-color",e))},Yh=$e(28),Sn=function(e){return t(ge,Yh,b(gt,"bc-"+wa(e),"border-color",e))},pi=1,Sr=f(function(e,r){return P(cr,pi,jn,t(M,sr(s.gc+(" "+s.bu)),t(M,pe(lr),t(M,Q(lr),e))),Ye(r))}),Zh=b(Ar,83,83,83),lv=J(function(e,r,n,a){return P(on,e/255,r/255,n/255,a)}),gi=P(lv,56,56,56,.25),je=Q$,ht=Be(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),bt=$e(2),Un=function(e){var r=e;return t(ge,bt,V(ht,"p-"+k(e),r,r,r,r))},uv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),$v=$e(3),vv=f(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Cn=function(e){return t(ge,$v,b(uv,t(vv,e,e),e,e))},Kh=P(lv,0,0,0,0),Xh=function(e){return{$:4,a:e}},cc=0,Ln=f(function(e,r){return P(cr,cc,jn,t(M,sr(s.bu+(" "+s.ax)),t(M,Q(lr),t(M,pe(lr),e))),Ye(r))}),Qh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(c$,{gx:{fO:R,fW:R,hH:R},gK:1,eS:0},n.hV));case 2:var a=e.a;return oi(_n(a));default:return oi(_n(""))}},e3=f(function(e,r){return Qh(e(r))}),r3=zd,n3=f(function(e,r){return ct(b(r3,e3,e,r))}),Pn=function(e){return t(ge,Y$,b(gt,"fc-"+wa(e),"color",e))},lc=b(Ar,195,195,195),zn=f(function(e,r){return{$:3,a:e,b:r}}),fv=$e(13),a3=t(zn,fv,s.h7),t3=$e(20),mv=t(zn,t3,s.hF),On=function(e){return t(ge,K$,J$(e))},uc=t(zn,fv,s.fV),$c=f(function(e,r){if(r.$===-2)return Gr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return V(te,n,a,t(e,a,i),t($c,e,o),t($c,e,c))}),sv=f(function(e,r){if(ue(e,r)){var n=e;return t(ge,bt,V(ht,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,bt,V(ht,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),Mn=function(e){return ev(e)},i3=function(e){return b(Co,T(function(r,n,a){return t(M,n,a)}),D,e)},o3=f(function(e,r){return{$:3,a:e,b:r}}),c3=f(function(e,r){return{$:2,a:e,b:r}}),l3=f(function(e,r){return{$:0,a:e,b:r}}),u3=f(function(e,r){return{$:1,a:e,b:r}}),Jn=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),$3=P(Jn,0/255,0/255,0/255,1),hi=function(e){return{$:6,a:e}},v3=hi(0),bi=function(e){return{$:2,a:e}},f3={$:6},dv=bi(f3),pv=T(function(e,r,n){if(r.$===1)return r.a,P(cr,pi,xn("label"),e,Ye($([n])));var a=r.a,i=r.b,o=r.c,c=P(cr,dr,jn,i,Ye($([o])));switch(a){case 2:return P(cr,pi,xn("label"),t(M,sr(s.cj),e),Ye($([c,n])));case 3:return P(cr,pi,xn("label"),t(M,sr(s.cj),e),Ye($([n,c])));case 0:return P(cr,cc,xn("label"),t(M,sr(s.cj),e),Ye($([n,c])));default:return P(cr,cc,xn("label"),t(M,sr(s.cj),e),Ye($([c,n])))}}),vc=pt,ln=di(1),gv="Enter",m3=function(e){return{$:5,a:e}},hv=function(e){if(e.$===1){var r=e.a;return bi(m3(r))}else return Rn},bv=function(e){return e.$===1},s3=function(e){return{$:0,a:e}},fc=ql,d3=f(function(e,r){return t(fc,e,s3(r))}),_v=function(e){return t(d3,"click",ar(e))},p3=Os,g3=function(e){return{$:2,a:e}},h3=f(function(e,r){return t(fc,e,g3(r))}),yv=function(e){var r=function(a){var i=e(a);if(i.$===1)return p3("No key matched");var o=i.a;return ar(o)},n=t(U,r,t(H,"key",ma));return Ce(t(h3,"keydown",t(Yt,function(a){return z(a,!0)},n)))},b3=$e(21),qn=t(zn,b3,s.gf),xv=" ",wv=function(e){return t(Tr,"tabIndex",k(e))},_3=t(lt,Ce,wv),y3=f(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bJ,c=G($([bv(n)?Rn:Cn(6),Ce(_v(o(!i))),dv,yv(function(l){return ue(l,gv)||ue(l,xv)?N(o(!i)):R}),_3(0),qn,v3,Q(ve)]),e);return b(pv,t(M,Ce(t(vc,"role","checkbox")),t(M,Ce(t(vc,"aria-checked",i?"true":"false")),t(M,hv(n),c))),n,P(cr,dr,jn,$([ln,pe(ve),Q(lr)]),Ye($([a(i)]))))}),x3=T(function(e,r,n){return G(t(tt,e-En(n),ni(r)),n)}),_i=ms,Sv=function(e){var r=function(n){return n<10?k(n):ni(Yu(87+n))};return e<16?r(e):G(Sv(e/16|0),r(t(_i,16,e)))},w3=t(Ue,Sv,t(x3,2,"0")),mc=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},S3=function(e){var r=mc(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(q,t(Ue,Le,w3),$([n*255,a*255,i*255]))))},sc=$e(12),Cv=t(zn,sc,s.h$),dc=hi(1),Yn=ss,pc=function(e){return e*Yn/180},C3=function(e){return{$:1,a:e}},gc=f(function(e,r){return{$:10,a:e,b:r}}),L3=$e(26),P3=function(e){return t(gc,L3,C3(-e))},La=T(function(e,r,n){return P(on,e,r,n,1)}),z3=on,M3=f(function(e,r){return{$:4,a:e,b:r}}),T3=$e(24),k3=function(e){return t(gc,T3,t(M3,F(0,0,1),e))},D3=$e(17),Zn=function(e){return t(ge,D3,b(or,"br-"+k(e),"border-radius",k(e)+"px"))},V3=function(e){return ga($([e.ej?"box-inset":"box-",De(e.eV.a)+"px",De(e.eV.b)+"px",De(e.a2)+"px",De(e.bi)+"px",wa(e.b7)]))},A3=$e(19),I3=function(e){var r={a2:e.a2,b7:e.b7,ej:!1,eV:e.eV,bi:e.bi};return t(ge,A3,b(or,V3(r),"box-shadow",qo(r)))},Lv=f(function(e,r){return{$:12,a:e,b:r}}),Pv=$e(0),F3=function(e){return e?t(ge,Pv,t(Lv,"transparent",1)):t(ge,Pv,t(Lv,"visible",0))},hc=b(La,1,1,1),bc=Be(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),yi=function(e){return t(ge,mi,V(bc,"b-"+k(e),e,e,e,e))},E3=f(function(e,r){return t(ge,mi,V(bc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),_t=function(e){var r=e.b3,n=e.cI,a=e.g4,i=e.hx;return ue(n,r)&&ue(a,i)?ue(n,i)?yi(n):t(E3,a,n):t(ge,mi,V(bc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},B3=function(e){return t(he,$([sr("focusable"),Q(Se(14)),pe(Se(14)),Pn(hc),ln,On(9),Cv,Zn(3),Sn(e?b(La,59/255,153/255,252/255):b(La,211/255,211/255,211/255)),I3({a2:1,b7:e?P(z3,238/255,238/255,238/255,0):b(La,238/255,238/255,238/255),eV:z(0,0),bi:1}),cn(e?b(La,59/255,153/255,252/255):hc),yi(e?0:1),Wo(t(he,$([Sn(hc),pe(Se(6)),Q(Se(9)),k3(pc(-45)),dc,ln,P3(1),F3(!e),_t({b3:2,g4:2,hx:0,cI:0})]),je))]),je)},R3=xr("htmlFor"),_c=f(function(e,r){if(r.$)return R;var n=r.a;return e(n)}),xi=f(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return e(n)}}),zv=J(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),j3=np,N3=Gs,G3=f(function(e,r){if(r.$)return Qe(e);var n=r.a;return Ae(n)}),H3=rp,W3=function(e){return t(H3,{f2:!1,hb:!1},e)},Mv=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return R},U3=f(function(e,r){if(r.$){var a=r.a;return Qe(a)}else{var n=r.a;return Ae(e(n))}}),O3=function(e){return{$:2,a:e}},J3=function(e){return{$:0,a:e}},q3=function(e){return{$:1,a:e}},yc=f(function(e,r){return Nr(r)-Nr(e)}),xc=T(function(e,r,n){var a=Nr(n);return ce(Nr(e),a)<1&&ce(a,Nr(r))<1}),Y3=f(function(e,r){var n=function(i){return ce(i,e)<0?Ae(i):Qe(q3(r))},a=b(xc,"0","9",r)?Ae(t(yc,"0",r)):b(xc,"a","z",r)?Ae(10+t(yc,"a",r)):b(xc,"A","Z",r)?Ae(10+t(yc,"A",r)):Qe(J3(r));return t(xi,n,a)}),Tv=f(function(e,r){var n=$a(r);if(n.$===1)return Ae(0);var a=n.a,i=a.a,o=a.b;return t(xi,function(c){return t(xi,function(l){return Ae(c+l*e)},t(Tv,e,o))},t(Y3,e,i))}),Z3=f(function(e,r){return 2<=e&&e<=36?t(Tv,e,jo(r)):Qe(O3(e))}),K3=Z3(16),X3=T(function(e,r,n){return P(Jn,e,r,n,1)}),Q3=J(function(e,r,n,a){return P(Jn,e,r,n,a)}),yt=fs,eb=f(function(e,r){var n=t(yt,10,e);return Le(r*n)/n}),rb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=qu(n);if(a.b&&!a.b.b){var i=a.a;return N3($([i,i]))}else return n};return t(Ue,si,t(Ue,function(n){return t(Fe,function(a){return b(j3,1,a,n)},W3(e))},t(Ue,_c(Mv),t(Ue,Fe(function(n){return n.hW}),t(Ue,Fe(Gn(Vr)),t(Ue,G3("Parsing hex regex failed"),xi(function(n){var a=t(q,t(Ue,r,t(Ue,K3,U3(Xa))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,u=l.a.a,m=l.b,d=m.a.a;return Ae(P(Q3,i/255,c/255,u/255,t(eb,2,d/255)))}else break e;else{var i=a.a.a,p=a.b,c=p.a.a,g=p.b,u=g.a.a;return Ae(b(X3,i/255,c/255,u/255))}else break e;return Qe("Parsing ints from hex failed")})))))))}(),nb=xr("id"),ab=rn("input"),tb=rn("label"),kv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ib=kv(0),ob=xr("name"),cb=function(e){return z(e,!0)},lb=function(e){return{$:1,a:e}},ub=f(function(e,r){return t(fc,e,lb(r))}),$b=f(function(e,r){return b(We,H,r,e)}),vb=t($b,$(["target","value"]),ma),Dv=function(e){return t(ub,"input",t(Yt,cb,t(Yt,e,vb)))},fb=t(zn,sc,s.h4),Vv=t(zn,sc,s.h8),wc=function(e){return t(o$,5,e)},Sc=function(e){return t(ge,Z$,t(O$,b(Ie,X$,"ff-",e),e))},mb=b(Ar,195,195,195),Av=b(Ar,69,69,69),sb=kv(2),db={$:2},Cc=db,pb=$e(32),gb=$e(31),Iv=function(e){return b(We,f(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},hb=f(function(e,r){return t(ke,r,b(We,f(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return N(z(i,c))}else return R;else{var i=a.a;return N(i)}}),R,e))}),Fv=function(e){return b(We,f(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return R;else{var a=n.a;return N(a)}}),R,e)},bb=$e(33),_b=xr("max"),yb=xr("min"),xb=f(function(e,r){return t(ge,$v,b(uv,t(vv,e,r),e,r))}),wb=function(e){return t(xr,"step",e)},Ev=xr("type"),Bv=xr("value"),Pa=cv,Sb=Vd,Rv=f(function(e,r){switch(r.$){case 0:return Rn;case 2:var n=r.a;return bi(n);case 6:var a=r.a;return hi(a);case 5:var i=r.a;return di(i);case 7:var a=r.a;return ov(a);case 8:var a=r.a;return t$(a);case 3:var a=r.a,i=r.b;return t(zn,a,i);case 4:var o=r.a,c=r.b;return t(ge,o,c);case 9:var l=r.a,u=r.b;return t(i$,l,t(rv,e,u));case 1:var m=r.a;return Ce(t(Sb,e,m));default:var d=r.a,p=r.b;return t(gc,d,p)}}),Cb=T(function(e,r,n){return t(Ln,$([Q(ve),pe(t(ke,ve,n)),ln]),$([t(he,$([Q(Pa(Le(e*1e4)))]),je),t(he,t(M,ln,t(q,Rv(rt),r)),je),t(he,$([Q(Pa(Le(le(1-e)*1e4)))]),je)]))}),Lb=T(function(e,r,n){return t(Sr,$([pe(ve),Q(t(ke,ve,n)),dc]),$([t(he,$([pe(Pa(Le(le(1-e)*1e4)))]),je),t(he,t(M,dc,t(q,Rv(rt),r)),je),t(he,$([pe(Pa(Le(e*1e4)))]),je)]))}),jv=f(function(e,r){var n=Fv(e),a=Iv(e),i=function(){var S=z(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var y=S.a.a.a,C=S.b.a.a;return ce(C,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cs)/(r.cr-r.cs),c=r.ic,l=c,u=Iv(l),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),d=Fv(l),p=function(){if(d.$===1)return"20px";if(d.a.$)return"100%";var S=d.a.a;return k(S)+"px"}(),g="thmb-"+(p+("-"+m)),v=$([t(re,"width",p),t(re,"height",m)]),_=t(hb,e,z(5,5)),x=_.a,w=_.b;return b(pv,$([bv(r.em)?Rn:t(xb,x,w),dv,Q(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.em,t(Ln,$([Q(t(ke,ve,n)),pe(t(ke,Se(20),a))]),$([P(cr,dr,xn("input"),$([hv(r.em),t(ge,pb,t($t,'input[type="range"].'+(g+"::-moz-range-thumb"),v)),t(ge,bb,t($t,'input[type="range"].'+(g+"::-webkit-slider-thumb"),v)),t(ge,gb,t($t,'input[type="range"].'+(g+"::-ms-thumb"),v)),Ce(wr(g+" ui-slide-bar focusable-parent")),Ce(Dv(function(S){var y=Ju(S);if(y.$===1)return r.bJ(0);var C=y.a;return r.bJ(C)})),Ce(Ev("range")),Ce(wb(function(){var S=r.cF;if(S.$===1)return"any";var y=S.a;return ae(y)}())),Ce(yb(ae(r.cs))),Ce(_b(ae(r.cr))),Ce(Bv(ae(r.cJ))),i?Ce(t(vc,"orient","vertical")):Rn,Q(i?t(ke,Se(20),a):t(ke,ve,n)),pe(i?t(ke,ve,n):t(ke,Se(20),a))]),Ye(D)),t(he,t(M,Q(t(ke,ve,n)),t(M,pe(t(ke,Se(20),a)),G(e,$([wc(i?b(Lb,o,t(M,sr("focusable-thumb"),l),n):b(Cb,o,t(M,sr("focusable-thumb"),l),a))])))),je)])))}),Pb=b(La,.5,.5,.5),Nv=Vr,Gv=function(e){var r=e.c3,n=e.cJ,a=e.cs,i=e.cr,o=e.cF,c=e.bJ;return t(he,$([Q(ve)]),t(jv,$([Cn(2),wc(t(he,$([Q(ve),pe(Se(16)),ln,cn(Av),Zn(4)]),je))]),{em:t(sb,D,t(Ln,$([Q(ve)]),$([t(he,$([fb]),Mn(r)),t(he,$([Q(ve),Vv,Sc($([Cc]))]),Mn(ae(n)))]))),cr:i,cs:a,bJ:c,cF:N(o),ic:Nv($([Q(Se(12)),pe(Se(12)),Zn(4),yi(0),Sn(Pb),cn(mb)])),cJ:n}))},zb=f(function(e,r){if(r.$)return e;var n=r.a;return n}),Mb=f(function(e,r){switch(r.$){case 3:var n=r.a;return t(y3,D,{f6:n,gM:B3,em:t(ib,D,Mn(e)),bJ:o3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Gv({c3:e,cr:o,cs:i,bJ:l3(e),cF:.001*(o-i),cJ:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return Gv({c3:e,cr:o,cs:i,bJ:t(Ue,Le,u3(e)),cF:1,cJ:n});default:var n=r.a;return t(he,$([Q(ve)]),hn(t(sa,D,$([t(sa,$([t(gr,"margin-bottom","6px")]),$([t(tb,$([R3(e)]),$([ec(e)]))])),t(ab,$([Ev("color"),t(gr,"width","100%"),t(gr,"height","26px"),t(gr,"padding","0px"),nb(e),ob(e),Dv(function(l){return t(c3,e,t(zb,$3,rb(l)))}),Bv(S3(n))]),D)]))))}}),Lc=b(Ar,255,255,255),Tb=function(e){return t(Sr,$([Q(ve),Cn(8),t(sv,0,14),_t({b3:1,g4:0,hx:0,cI:0}),Sn(gi)]),$([t(he,$([On(16),uc,Pn(Lc)]),Mn(e.hc)),t(Sr,$([Q(ve),Cn(6)]),i3(t($c,Mb,e.aN)))]))},kb=function(e){return t(Sr,$([Q(ve),pe(ve),Pn(lc),On(12),a3,mv]),t(q,Tb,e))},Db=n3(kb),Vb=function(e){return t(Sr,$([Q(ve),pe(ve)]),$([t(Ln,$([Cn(14),Q(ve)]),D),t(oc,Xh,Db(Bn(e).gb))]))},Ab=function(e){return{$:6,a:e}},Ib=J(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Fb=function(e){var r=e.cI,n=e.hx,a=e.b3,i=e.g4;if(ue(r,n)&&ue(r,a)&&ue(r,i)){var o=r;return t(ge,bt,V(ht,"p-"+k(r),o,o,o,o))}else return t(ge,bt,V(ht,P(Ib,r,n,a,i),r,n,a,i))},Eb=function(e){return{$:0,a:e}},Bb=function(e){return{$:1,a:e}},Rb=Bb,jb=function(e){var r=e.b.X;return Fn(r)},wi=b(Ar,255,60,0),Nb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Fn(r)+1+Fn(n)},Gb=function(e){var r=z(jb(e),Nb(e)-1),n=r.a,a=r.b;return t(he,$([Q(ve),ln]),t(jv,$([wc(t(Ln,$([Q(ve),pe(Se(4)),ln,cn(Av),Zn(2)]),$([t(he,$([Q(Pa(n)),pe(ve),cn(wi),Zn(2)]),je),t(he,$([Q(Pa(a-n))]),je)])))]),{em:Rb(""),cr:a,cs:0,bJ:t(Ue,Le,Eb),cF:N(1),ic:Nv($([Q(Se(12)),pe(Se(12)),Zn(6),cn(wi)])),cJ:n}))},Hb=hi(2),Si=b(Ar,220,220,220),Wb=function(e){var r=e.a,n=function(){return r.$?$([Pn(Si)]):$([Pn(wi)])}();return t(he,G(n,$([On(14),Hb,Vv,Sc($([Cc]))])),Mn(t(Qu,3,Bn(e).bt)))},Ub=function(e){e.a;var r=e.b.X;return t(Fe,function(n){return Le(60/(Bn(e).bt-n))},t(Fe,t(Ue,Iu,function(n){return n.bt}),Mv(t(Uu,59,r))))},Ob=function(e){var r=Ub(e);if(r.$===1)return je;var n=r.a;return t(he,$([On(14),Pn(lc),Sc($([Cc]))]),Mn(k(n)+" FPS"))},Hv={$:1},Jb={$:3},qb={$:2},Yb={$:8},Zb=Xr,Kb=f(function(e,r){return t(po,e,Zb(r))}),Xb=Kb("disabled"),Qb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},e1=function(e){return t(at,Qb,e)?Rn:sr("focusable")},Ci=t(lt,Ce,_v),Wv=f(function(e,r){var n=r.eW,a=r.em;return P(cr,dr,jn,t(M,Q(lr),t(M,pe(lr),t(M,sr(s.cb+(" "+(s.ax+(" "+(s.hG+(" "+s.eU)))))),t(M,qn,t(M,e1(e),t(M,bi(Yb),t(M,Ce(wv(0)),function(){if(n.$===1)return t(M,Ce(Xb(!0)),e);var i=n.a;return t(M,Ci(i),t(M,yv(function(o){return ue(o,gv)||ue(o,xv)?N(i):R}),e))}()))))))),Ye($([a])))}),Uv=f(function(e,r){return t(Wv,D,{em:t(he,$([Q(Se(36)),Un(3),Pn(r),Cv,On(12),uc,Sn(r),yi(1),Zn(4)]),Mn("REC")),eW:N(e)})}),Ov=T(function(e,r,n){return t(Wv,D,{em:hn(b(Sa,20,n,e)),eW:N(r)})}),r1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Ln,D,$([t(he,$([Q(Se(40))]),function(){switch(r.$){case 0:return t(Uv,Hv,wi);case 1:return t(Uv,qb,Si);default:return je}}()),t(he,$([Q(Se(28))]),function(){switch(r.$){case 0:return je;case 1:return yn(n)?je:b(Ov,Wn.hp,Jb,Si);default:return b(Ov,Wn.ho,Hv,Si)}}())]))},n1=function(e){return t(Sr,$([Q(ve)]),$([Gb(e),t(Ln,$([Q(ve),Cn(14),t(sv,0,6),ln]),$([r1(e),Ob(e),Wb(e)]))]))},a1=function(e){return t(Sr,$([Q(ve),Cn(14),Fb({b3:20,g4:0,hx:0,cI:0}),_t({b3:1,g4:0,hx:0,cI:0}),Sn(gi)]),$([t(he,$([On(16),uc,Pn(lc)]),Mn("Time Travel")),t(oc,Ab,n1(e))]))},t1=f(function(e,r){return t(Sr,$([Bn(r).dD.im>600?cn(Zh):cn(Kh),_t({b3:0,g4:0,hx:1,cI:0}),Sn(gi),Q(Se(Ca.c4)),pe(ve)]),$([function(){return e?je:t(Sr,$([Q(ve),pe(ve),Un(14),Cn(14)]),$([a1(r),Vb(r)]))}()]))}),i1=function(e){return{$:3,a:e}},Jv=di(2),o1=b(Ar,232,78,50),c1=b(Ar,48,48,48),l1=function(e){return t(xr,"href",Dd(e))},u1=Tr("rel"),$1=xr("target"),qv=f(function(e,r){var n=r.fn,a=r.em;return P(cr,dr,xn("a"),t(M,Ce(l1(n)),t(M,Ce(u1("noopener noreferrer")),t(M,Ce($1("_blank")),t(M,Q(lr),t(M,pe(lr),t(M,sr(s.cb+(" "+(s.ax+(" "+s.et)))),e)))))),Ye($([a])))}),xt=xr("title"),v1=b(Ar,31,161,242),f1=function(e){var r=T(function(o,c,l){var u=ue(c,e)?Lc:c1;return t(he,$([an(xt(o)),Ci(i1(c)),qn,Un(7)]),hn(b(Sa,40,u,l)))}),n=t(Sr,$([av]),$([b(r,"Configurations",0,Wn.hN)])),a=t(Sr,D,$([t(qv,$([an(xt("Twitter")),Jv,qn,Un(7)]),{em:hn(b(Sa,40,v1,Wn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(qv,$([an(xt("Source Code")),Jv,qn,Un(7)]),{em:hn(b(Sa,40,o1,Wn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(Se(Ca.bF)),Un(4),Ci(nv),_t({b3:1,g4:0,hx:0,cI:0}),Sn(gi),qn,an(xt("Activate Distraction Free Mode"))]),hn(b(Sa,46,Lc,Wn.fx)));return t(Sr,$([Q(Se(Ca.bF)),pe(ve),mv,cn(tv)]),$([i,n,a]))},m1=function(e){var r=t(he,$([Q(Se(Ca.bF)),av,Un(4),Ci(nv),qn,an(xt("Deactivate Distraction Free Mode (A)"))]),hn(b(Sa,46,tv,Wn.fx)));return e.bx?r:t(Ln,$([Q(Se(Ca.bF+Ca.c4)),pe(ve)]),$([f1(e.bp),t(t1,e.bp,e.R)]))},s1=T(function(e,r,n){var a=_g(n.R),i=Bn(n.R);return b(Ih,{hl:$([xg({fO:R,fW:R,hH:R})])},$([Q(Se(Ka(i.dD.im))),pe(Se(Ka(i.dD.gH))),an(t(gr,"-webkit-font-smoothing","antialiased")),an(t(gr,"pointer-events","none")),an(t(gr,"touch-action","none")),an(t(gr,"user-select","none")),Wo(t(oc,hg,t(r,i,a))),Wo(m1(n))]),hn(t(Fh,oi(bg),t(e,i,a))))}),d1=fr(function(e,r,n,a,i,o){var c=f(function(u,m){return z(P(fg,r,o,u,m),a$)}),l=function(u){var m=t(Eu,n,u.gY);return z({bp:0,bx:!0,R:t(mg,m,a),dO:0},a$)};return k0({gS:l,hX:gg,ii:c,ik:t(s1,e,i)})}),p1=J(function(e,r,n,a){return Ke(d1,e,r,n,a,f(function(i,o){return je}),T(function(i,o,c){return c}))}),g1=T(function(e,r,n){return P(p1,e,r,D,n)}),h1=function(e){return{}},b1=f(function(e,r){return r}),Kn=function(e){return e},wt=function(e){return Kn(Yn*(e/180))},Tn=ws,_1=f(function(e,r){var n=e,a=r,i=a.dV-n.dV,o=a.is-n.is,c=a.io-n.io,l=t(qe,le(c),t(qe,le(o),le(i)));if(l){var u=i/l,m=o/l,d=c/l,p=Tn(d*d+m*m+u*u);return N({io:d/p,is:m/p,dV:u/p})}else return R}),Pc=function(e){return e},zc=f(function(e,r){var n=e,a=r;return{io:a.is*n.dV-a.dV*n.is,is:a.dV*n.io-a.io*n.dV,dV:a.io*n.is-a.is*n.io}}),Li=function(e){var r=e,n=t(qe,le(r.io),t(qe,le(r.is),le(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=Tn(o*o+i*i+a*a);return N({io:o/c,is:i/c,dV:a/c})}else return R},Pi=f(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),y1=f(function(e,r){var n=e,a=r;return a.io*n.io+a.is*n.is+a.dV*n.dV}),Yv=f(function(e,r){var n=e,a=r;return ce(a,n)>0}),x1=f(function(e,r){var n=e,a=r;return ce(a,n)<0}),w1=f(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dV:a.dV-n.dV}}),S1=f(function(e,r){var n=e,a=r,i=a.io*n.io+a.is*n.is+a.dV*n.dV;return{io:n.io*i,is:n.is*i,dV:n.dV*i}}),C1=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Ir=0,Zv={io:0,is:0,dV:0},L1=T(function(e,r,n){return t(_c,function(a){var i=t(w1,t(S1,a,r),r);return t(_c,function(o){var c=t(zc,r,e),l=t(y1,n,c),u=t(Yv,Ir,l)?c:t(x1,Ir,l)?C1(c):Zv;return t(Fe,function(m){return F(a,o,m)},Li(u))},Li(i))},Li(e))}),P1=function(e){var r=e,n=le(r.dV),a=le(r.is),i=le(r.io);if(ce(i,a)<1)if(ce(i,n)<1){var o=Tn(r.dV*r.dV+r.is*r.is);return{io:0,is:-r.dV/o,dV:r.is/o}}else{var o=Tn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dV:0}}else if(ce(a,n)<1){var o=Tn(r.dV*r.dV+r.io*r.io);return{io:r.dV/o,is:0,dV:-r.io/o}}else{var o=Tn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dV:0}}},Mc=function(e){var r=P1(e),n=r,a=n,i=e,o=i,c={io:o.is*a.dV-o.dV*a.is,is:o.dV*a.io-o.io*a.dV,dV:o.io*a.is-o.is*a.io};return z(r,c)},za=function(e){var r=e;return r},Or=function(e){return e},z1=f(function(e,r){var n=Mc(e),a=n.a,i=n.b;return Or({dm:r,dT:a,dU:i,dW:e})}),M1=function(e){var r=t(Pi,e.ba,e.d9),n=za(e.fm),a=t(zc,r,n),i=b(L1,r,n,a);if(i.$){var m=Li(r);if(m.$){var p=Mc(e.fm),g=p.a,v=p.b;return Or({dm:e.d9,dT:v,dU:e.fm,dW:g})}else{var d=m.a;return t(z1,d,e.d9)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return Or({dm:e.d9,dT:u,dU:l,dW:c})}},hr={io:0,is:0,dV:0},T1=function(e){return{$:0,a:e}},Ne=function(e){var r=e;return le(r)},zi=function(e){var r=e;return .5*r},k1=gs,D1=function(e){var r=e;return k1(r)},V1=function(e){var r=zi(Ne(e.fq)),n=D1(r);return{dx:T1(n),dN:e.dN}},un=function(e){return e},Tc=un({io:0,is:1,dV:0}),A1=function(e){var r=e.ba,n=e.d9,a=e.fm;return V1({fq:wt(40),dN:M1({d9:Pc(n),ba:Pc(r),fm:t(ke,Tc,t(_1,hr,Pc(a)))})})},kc=function(e){return e/255},I1=T(function(e,r,n){return P(Jn,kc(e),kc(r),kc(n),1)}),Kv=P(Jn,52/255,101/255,164/255,1),F1=P(Jn,115/255,210/255,22/255,1),Dc=function(e){return{$:5,a:e}},E1=function(e){return Dc(e)},Vc=f(function(e,r){return{$:4,a:e,b:r}}),Xv=function(e){return e},B1=f(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dV:a.dV+n.dV}}),R1=f(function(e,r){return Xv(z(e,t(B1,r,e)))}),Qv=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),j1=f(function(e,r){var n=r.a,a=r.b,i=r.c;return b(Qv,e(n),e(a),e(i))}),kn=function(e){return e},Ac=f(function(e,r){return t(Vc,e,t(R1,hr,t(j1,kn,r)))}),N1=P(Jn,204/255,0/255,0/255,1),G1=E1($([t(Ac,N1,F(100,0,0)),t(Ac,F1,F(0,100,0)),t(Ac,Kv,F(0,0,100))])),Ic=f(function(e,r){return{$:0,a:e,b:r}}),Fc=f(function(e,r){var n=e,a=r;return ce(a,n)>-1}),Ec=f(function(e,r){var n=e,a=r;return n+.5*(a-n)}),$n=f(function(e,r){var n=e,a=r;return a-n}),H1=un({io:-1,is:0,dV:0}),W1=un({io:0,is:-1,dV:0}),ef=un({io:0,is:0,dV:-1}),rf=un({io:1,is:0,dV:0}),Bc=un({io:0,is:0,dV:1}),Oe=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dV:o}}),U1=fr(function(e,r,n,a,i,o){var c=t(Fc,n,o)?Bc:ef,l=t(Fc,r,i)?Tc:W1,u=t(Fc,e,a)?rf:H1,m=F(Ne(t($n,e,a)),Ne(t($n,r,i)),Ne(t($n,n,o))),d=b(Oe,t(Ec,e,a),t(Ec,r,i),t(Ec,n,o)),p=Or({dm:d,dT:u,dU:l,dW:c});return{fN:p,a4:m}}),Xn=function(e){var r=e;return r.io},Qn=function(e){var r=e;return r.is},ea=function(e){var r=e;return r.dV},O1=f(function(e,r){return Ke(U1,Xn(e),Qn(e),ea(e),Xn(r),Qn(r),ea(r))}),Rc=T(function(e,r,n){return{io:e,is:r,dV:n}}),J1=f(function(e,r){var n=r.a,a=r.b,i=r.c,o=F(n/2,a/2,i/2),c=o.a,l=o.b,u=o.c;return t(Ic,e,t(O1,b(Rc,-c,-l,-u),b(Rc,c,l,u)))}),jc=function(e){return{$:0,a:e}},nf=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),af=T(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),Nc=function(e){return b(af,0,1,e<=.04045?e/12.92:t(yt,(e+.055)/1.055,2.4))},St=ip,q1=function(e){var r=mc(e),n=r.hu,a=r.gA,i=r.fS;return b(St,Nc(n),Nc(a),Nc(i))},Y1=function(e){return b(nf,0,jc(q1(e)),jc(0))},tf=f(function(e,r){return{$:2,a:e,b:r}}),of=f(function(e,r){return{$:3,a:e,b:r}}),cf=f(function(e,r){return{$:1,a:e,b:r}}),Z1=function(e){var r=e;return r},Gc=function(e){var r=e;return Z1(r.fN)},Hc=function(e){var r=e;return r.a4},Ma=function(e){var r=e;return r.dm},ra=ds,Ta=ps,Mi=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=ra(c),u=Ta(c),m=a.gm,d=m,p=d.io*u,g=l*p,v=p*p,_=d.is*u,x=l*_,w=p*_,S=_*_,y=1-2*(v+S),C=d.dV*u,I=l*C,O=2*(w-I),K=2*(w+I),W=p*C,Y=2*(W+x),Z=2*(W-x),B=_*C,ne=2*(B-g),fe=2*(B+g),ye=C*C,me=1-2*(S+ye),se=1-2*(v+ye);return{io:me*o.io+O*o.is+Y*o.dV,is:K*o.io+se*o.is+ne*o.dV,dV:Z*o.io+fe*o.is+y*o.dV}}),Ct=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=ra(c),u=Ta(c),m=a.dm,d=m,p=o.io-d.io,g=o.is-d.is,v=o.dV-d.dV,_=a.gm,x=_,w=x.io*u,S=l*w,y=w*w,C=x.is*u,I=l*C,O=w*C,K=C*C,W=1-2*(y+K),Y=x.dV*u,Z=l*Y,B=2*(O-Z),ne=2*(O+Z),fe=w*Y,ye=2*(fe+I),me=2*(fe-I),se=C*Y,we=2*(se-S),de=2*(se+S),Ve=Y*Y,Me=1-2*(K+Ve),Ze=1-2*(y+Ve);return{io:d.io+Me*p+B*g+ye*v,is:d.is+ne*p+Ze*g+we*v,dV:d.dV+me*p+de*g+W*v}}),na=function(e){var r=e;return r.dT},aa=function(e){var r=e;return r.dU},ta=function(e){var r=e;return r.dW},K1=T(function(e,r,n){return Or({dm:b(Ct,e,r,Ma(n)),dT:b(Mi,e,r,na(n)),dU:b(Mi,e,r,aa(n)),dW:b(Mi,e,r,ta(n))})}),X1=T(function(e,r,n){return{fN:b(K1,e,r,Gc(n)),a4:Hc(n)}}),Lt=f(function(e,r){return{gm:r,dm:e}}),Q1=f(function(e,r){var n=t(Ct,e,r),a=t(Mi,e,r);return function(i){var o=i;return t(Lt,n(o.dm),a(o.gm))}}),e_=T(function(e,r,n){var a=n;return{m:b(Q1,e,r,a.m),g5:a.g5,hs:a.hs}}),Wc=function(e){var r=e;return r},lf=f(function(e,r){var n=Wc(r),a=n.a,i=n.b;return Xv(z(e(a),e(i)))}),r_=T(function(e,r,n){return t(lf,t(Ct,e,r),n)}),Uc=function(e){var r=e;return r.f4},Oc=function(e){var r=e;return r.hs},uf=f(function(e,r){return{f4:r,hs:Ne(e)}}),n_=T(function(e,r,n){return t(uf,Oc(n),b(Ct,e,r,Uc(n)))}),$f=f(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return F(e(a),e(i),e(o))}),a_=T(function(e,r,n){return t($f,t(Ct,e,r),n)}),Ti=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(Ic,a,b(X1,e,r,i));case 1:var a=n.a,o=n.b;return t(cf,a,b(a_,e,r,o));case 3:var a=n.a,c=n.b;return t(of,a,b(n_,e,r,c));case 2:var a=n.a,l=n.b;return t(tf,a,b(e_,e,r,l));case 4:var a=n.a,u=n.b;return t(Vc,a,b(r_,e,r,u));default:var m=n.a;return Dc(t(q,t(Ti,e,r),m))}}),Jc=rf,t_=t(Lt,hr,Jc),i_=f(function(e,r){return b(Ti,t_,Kn(e),r)}),qc=Tc,o_=t(Lt,hr,qc),c_=f(function(e,r){return b(Ti,o_,Kn(e),r)}),Yc=Bc,l_=t(Lt,hr,Yc),u_=f(function(e,r){return b(Ti,l_,Kn(e),r)}),xe=f(function(e,r){var n=r;return e*n}),vn=function(e){var r=e;return{io:-r.io,is:-r.is,dV:-r.dV}},Pt=T(function(e,r,n){var a=e,i=n;return{io:a.io+r*(i.io-a.io),is:a.is+r*(i.is-a.is),dV:a.dV+r*(i.dV-a.dV)}}),$_=T(function(e,r,n){var a=Gc(n),i=na(a),o=aa(a),c=ta(a),l=b(Pt,e,r,Ma(a)),u=r>=0?Or({dm:l,dT:i,dU:o,dW:c}):Or({dm:l,dT:vn(i),dU:vn(o),dW:vn(c)}),m=Hc(n),d=m.a,p=m.b,g=m.c,v=Ne(t(xe,r,d)),_=Ne(t(xe,r,p)),x=Ne(t(xe,r,g));return{fN:u,a4:F(v,_,x)}}),Zc=function(e){var r=e;return r.m},vf=function(e){var r=e;return r.gm},ff=function(e){return vf(Zc(e))},mf=function(e){var r=e;return r.dm},v_=function(e){return mf(Zc(e))},sf=function(e){var r=e;return r.g5},df=function(e){var r=e;return r.hs},f_=T(function(e,r,n){var a=Ne(t(xe,r,df(n))),i=Ne(t(xe,r,sf(n))),o=r>=0?ff(n):vn(ff(n)),c=b(Pt,e,r,v_(n));return{m:t(Lt,c,o),g5:i,hs:a}}),m_=T(function(e,r,n){return t(lf,t(Pt,e,r),n)}),s_=T(function(e,r,n){return t(uf,t(xe,le(r),Oc(n)),b(Pt,e,r,Uc(n)))}),d_=T(function(e,r,n){return t($f,t(Pt,e,r),n)}),pf=f(function(e,r){switch(r.$){case 0:var n=r.a,a=r.b;return t(Ic,n,b($_,hr,e,a));case 1:var n=r.a,i=r.b;return t(cf,n,b(d_,hr,e,i));case 3:var n=r.a,o=r.b;return t(of,n,b(s_,hr,e,o));case 2:var n=r.a,c=r.b;return t(tf,n,b(f_,hr,e,c));case 4:var n=r.a,l=r.b;return t(Vc,n,b(m_,hr,e,l));default:var u=r.a;return Dc(t(q,pf(e),u))}}),p_=f(function(e,r){return(r-Au(r/e)*e)/e}),g_=function(e){return 2*Yn*e},ki=J(function(e,r,n,a){return e+(r-e)*(1+ra(g_(t(p_,n,a))))/2}),h_=function(e){return t(u_,P(ki,1,10,30,e.bt),t(c_,P(ki,1,10,30,e.bt),t(i_,P(ki,1,10,30,e.bt),t(pf,P(ki,1,2,14,e.bt),t(J1,Y1(Kv),F(1,1,1))))))},b_=f(function(e,r){return $([G1,h_(e)])}),__=function(e){return e},y_=function(e){return kn(.01*e)},gf=function(e){return e},x_=function(e){return e},w_=function(e){return{$:0,a:e}},S_=w_,C_={$:3},L_=C_,P_=J(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),z_=P_,M_=function(e){return{$:1,a:e}},T_=M_,k_=function(e){return t(Tr,"height",k(e))},D_=A$,V_=function(e){return{$:2,a:e}},A_=V_,I_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return Le(l*1e3)/1e3},c=function(l){return Le(l*1e4)/100};return ga($(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(o(i)),")"]))},F_=f(function(e,r){switch(r.$){case 0:return t(Jp,e,r);case 1:return t(qp,e,r);case 2:return t(Yp,e,r);case 3:return t(Zp,e,r);case 4:return t(Kp,e,r);default:return t(Xp,e,r)}}),E_=f(function(e,r){switch(r.$){case 0:return t(wp,e,r);case 1:return t(Sp,e,r);case 2:return t(Cp,e,r);case 3:return t(Lp,e,r);case 4:return t(Pp,e,r);case 5:return t(zp,e,r);case 6:return t(Mp,e,r);case 7:return t(Tp,e,r);default:return kp(e)}}),B_=T(function(e,r,n){return b(Op,e,r,n)}),hf=function(e){var r=e;return r},ka=vp,Kc=P(ka,1,1,1,1),Jr=T(function(e,r,n){return t(q,function(a){return t(a,r,n)},e)}),R_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),j_=f(function(e,r){var n=e,a=r.io,i=r.is;return b(R_,n*a/i,n,n*(1-a-i)/i)}),N_=function(e){var r=e.a,n=e.b,a=e.c;return b(St,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Xc=f(function(e,r){return N_(t(j_,e,r))}),bf=f(function(e,r){return{ek:ue(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cD,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cD,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cD,cD:e.cD*r.cD}}),qr=gp,G_=function(e){return qr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Qc=Be(function(e,r,n,a,i){var o=a.ek?1:-1,c=P(ka,a.cD,a.cD,a.cD,o);return Ke(i,e,c,G_(a),a.ek,r,n)}),_f=fr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,m=r,d=n,p=t(bf,c,a),g=l,v=o;e=u,r=m,n=d,a=p,i=g,o=v;continue e;case 1:var _=i.b,x=t(M,V(Qc,e,r,n,a,_),o.P);return{P:x,_:o._,hI:o.hI};case 3:var w=i.b,S=t(M,V(Qc,e,r,n,a,w),o._);return{P:o.P,_:S,hI:o.hI};case 2:var y=i.a,C=t(M,V(Qc,e,r,n,a,y),o.hI);return{P:o.P,_:o._,hI:C};default:var I=i.a;return b(Ie,P(_f,e,r,n,a),o,I)}}),H_=J(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),yf=H_,el=J(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),W_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(el,518,r,n,a)},U_=f(function(e,r){return{$:6,a:e,b:r}}),O_=U_,xf=$([W_({ab:1,ac:0,ai:!1}),P(yf,!1,!1,!1,!1),t(O_,0,1)]),Da=519,rl=8,wf=15,Va=7681,J_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ze=xp,q_=f(function(e,r){return{$:0,a:e,b:r}}),Y_=q_({d5:1,ei:0,eS:5}),br=ap,Z_=Y_($([{cy:t(br,-1,-1)},{cy:t(br,1,-1)},{cy:t(br,-1,1)},{cy:t(br,1,1)}])),K_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cy"},uniforms:{}},X_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(d){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m,k:d}}}}}}}}}}}},nl=T(function(e,r,n){var a=e.dy,i=e.dd,o=e.dS,c=f(function(m,d){var p=m;return d(p)}),l=f(function(m,d){var p=m;return d(p)}),u=function(m){return t(Ue,c(m.bP),t(Ue,l(m.bA),t(Ue,l(m.bY),l(m.bZ))))};return t(u,n,t(u,r,b(X_,a,i,o)))}),al=function(e){return b(nl,{dd:e.dd,dy:e.dy,dS:e.dS},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},tl=function(e){return V(ze,$([al(e),P(yf,!1,!1,!1,!1)]),K_,J_,Z_,{})},Q_=tl({bA:Va,dd:0,dy:rl,bP:Da,dS:wf,bY:Va,bZ:Va}),e2=516,Sf=5386,er=7680,r2=function(e){return t(yt,2,e+4)},Cf=function(e){return tl({bA:er,dd:wf,dy:rl,bP:e2,dS:r2(e),bY:Sf,bZ:Sf})},n2=T(function(e,r,n){return tr($([b(Jr,e,n,xf),$([Cf(r),Q_])]))}),a2=f(function(e,r){return tr(t(zu,n2(e),r))}),t2=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(el,513,r,n,a)},i2=t2({ab:1,ac:0,ai:!0}),o2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m}}}}}}}}}}},c2=function(e){var r=e.cA,n=e.cg,a=e.b1,i=e.b_,o=e.b7,c=e.fI,l=f(function(u,m){var d=u.a,p=u.b,g=u.c,v=m.a,_=m.b,x=m.c;return o2(d)(p)(g)(v)(_)(x)(r)(n)(a)(i)});return t(l,o,c)},l2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Lf=f(function(e,r){var n=e,a=r;return b(l2,32774,n,a)}),u2=1,Pf=771,$2=770,il=c2({b_:0,fI:t(Lf,u2,Pf),b1:0,b7:t(Lf,$2,Pf),cg:0,cA:0}),Aa=$([i2,il]),v2=function(e){var r=e;return r.eL},f2=function(e){var r=e;return r.eM},zf=function(e){var r=e;return r.eN},m2=function(e){var r=e;return r.eO},s2=function(e){var r=e;return r.eP},Mf=function(e){var r=e;return r.eQ},Tf=function(e){return F(t($n,m2(e),v2(e)),t($n,s2(e),f2(e)),t($n,Mf(e),zf(e)))},kf=function(e){var r=e;return Ma(r)},d2=function(e){return e},p2=function(e){return Or({dm:d2({io:e.K,is:e.L,dV:e.M}),dT:un({io:e.t,is:e.u,dV:e.v}),dU:un({io:e.w,is:e.x,dV:e.y}),dW:un({io:e.z,is:e.A,dV:e.B})})},ol=f(function(e,r){var n=e,a=r,i=n.dW,o=i,c=n.dU,l=c,u=n.dT,m=u;return{io:a.io*m.io+a.is*m.is+a.dV*m.dV,is:a.io*l.io+a.is*l.is+a.dV*l.dV,dV:a.io*o.io+a.is*o.is+a.dV*o.dV}}),Df=f(function(e,r){var n=e,a=r,i=n.dm,o=i,c=a.io-o.io,l=a.is-o.is,u=a.dV-o.dV,m=n.dW,d=m,p=n.dU,g=p,v=n.dT,_=v;return{io:c*_.io+l*_.is+u*_.dV,is:c*g.io+l*g.is+u*g.dV,dV:c*d.io+l*d.is+u*d.dV}}),Vf=f(function(e,r){return{dm:t(Df,e,Ma(r)),dT:t(ol,e,na(r)),dU:t(ol,e,aa(r)),dW:t(ol,e,ta(r))}}),Di=function(e){var r=e;return r},Ee=f(function(e,r){var n=e,a=r;return t(qe,n,a)}),Ge=f(function(e,r){var n=e,a=r;return t(_a,n,a)}),g2=f(function(e,r){var n=Di(r),a=Di(e);return{eL:t(Ee,a.eL,n.eL),eM:t(Ee,a.eM,n.eM),eN:t(Ee,a.eN,n.eN),eO:t(Ge,a.eO,n.eO),eP:t(Ge,a.eP,n.eP),eQ:t(Ge,a.eQ,n.eQ)}}),Cr=function(e){var r=e;return r},h2=function(e){var r=e;return F(r.io,r.is,r.dV)},zt=f(function(e,r){var n=e,a=r;return a+n}),b2=f(function(e,r){var n=e.a,a=e.b,i=e.c,o=zi(Ne(a)),c=zi(Ne(n)),l=zi(Ne(i)),u=h2(r),m=u.a,d=u.b,p=u.c;return{eL:t(zt,c,m),eM:t(zt,o,d),eN:t(zt,l,p),eO:t($n,c,m),eP:t($n,o,d),eQ:t($n,l,p)}}),Af=J(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dV*r,m=i.is*r,d=i.io*r,p=Cr(ta(e)),g=le(l*p.io)+le(c*p.is)+le(o*p.dV),v=Cr(aa(e)),_=le(l*v.io)+le(c*v.is)+le(o*v.dV),x=Cr(na(e)),w=le(l*x.io)+le(c*x.is)+le(o*x.dV),S=t(b2,F(w,_,g),t(Df,e,b(Rc,d,m,u)));if(a.$)return N(S);var y=a.a;return N(t(g2,y,S))}),cl=J(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 1:var d=i.a,p=P(Af,e,r,d,n),c=e,l=r,u=p,m=o;e=c,r=l,n=u,a=m;continue e;case 2:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 3:var d=i.a,p=P(Af,e,r,d,n),c=e,l=r,u=p,m=o;e=c,r=l,n=u,a=m;continue e;case 4:var g=i.a,c=e,l=r,u=P(cl,e,r,n,g),m=o;e=c,r=l,n=u,a=m;continue e;default:var v=i.a,_=i.b,x=t(Vf,p2(v),e),w=r*v.cD,c=e,l=r,u=P(cl,x,w,n,$([_])),m=o;e=c,r=l,n=u,a=m;continue e}}else return n}),Ia=op,Fa=cp,Ea=lp,If=function(e){return{$:4,a:e}},_2=f(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Mt=function(e){return If(t(_2,e,D))},y2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cD:1},x2=function(e){var r=e;return r},Ff=tl({bA:Va,dd:0,dy:rl,bP:Da,dS:255,bY:Va,bZ:Va}),w2=function(e){var r=e,n=t(qe,le(r.io),t(qe,le(r.is),le(r.dV)));if(n){var a=r.dV/n,i=r.is/n,o=r.io/n,c=Tn(o*o+i*i+a*a);return c*n}else return Ir},ur={b1:0,f3:!1,cg:0,dv:0,cA:0,dK:0,io:0,is:0,dV:0},Lr=f(function(e,r){var n=e,a=r;return qr({eu:n.io,ev:n.cA,ew:a.io,ex:a.cA,ey:n.is,ez:n.cg,eA:a.is,eB:a.cg,eC:n.dV,eD:n.b1,eE:a.dV,eF:a.b1,eG:n.dK,eH:n.dv,eI:a.dK,eJ:a.dv})}),Tt=z({bG:t(Lr,ur,ur),cn:t(Lr,ur,ur),co:t(Lr,ur,ur),cp:t(Lr,ur,ur)},P(ka,0,0,0,0)),Ef=function(e){var r=e;return-r},Bf=514,Rf=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(el,515,r,n,a)},jf=240,S2=$([Rf({ab:1,ac:0,ai:!0}),al({bA:er,dd:jf,dy:0,bP:Bf,dS:0,bY:er,bZ:er}),il]),C2=f(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,c=Ne(a),l=c,u=Ne(i),m=u,d=n.dx;if(d.$){var g=d.a;return Bo(m)?qr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):qr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-l),eF:-(m+l)/(m-l),eG:0,eH:0,eI:0,eJ:1})}else{var p=d.a;return Bo(m)?qr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):qr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(m+l)/(m-l),eF:-2*m*l/(m-l),eG:0,eH:0,eI:-1,eJ:0})}}),Vi=f(function(e,r){return(1&e>>r)==1?0:1}),L2=function(e){return $([Rf({ab:1,ac:0,ai:!0}),al({bA:er,dd:jf,dy:e,bP:Bf,dS:0,bY:er,bZ:er}),il])},P2=T(function(e,r,n){return tr(t(q,function(a){var i=a<<4,o=P(ka,t(Vi,a,0),t(Vi,a,1),t(Vi,a,2),t(Vi,a,3));return b(Jr,e,z(r,o),L2(i))},t(nn,1,t(yt,2,n)-1)))}),Ba=function(e){var r=e;return r},z2=hp,Nf=function(e){var r=e;return vn(ta(r))},M2={dm:hr,dT:Jc,dU:qc,dW:Yc},Ai=function(e){var r=e;return r},T2=function(e){var r=Ai(Ma(e)),n=Cr(ta(e)),a=Cr(aa(e)),i=Cr(na(e));return qr({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dV,eD:a.dV,eE:n.dV,eF:r.dV,eG:0,eH:0,eI:0,eJ:1})},k2=f(function(e,r){var n=r;return T2(t(Vf,n,e))}),D2=function(e){return t(k2,M2,e)},V2=function(e){var r=e;return r.dN},A2=function(e){var r=e;return na(r)},I2=function(e){var r=e;return aa(r)},F2=function(e){var r=V2(e.f0),n=Or({dm:kf(r),dT:A2(r),dU:I2(r),dW:vn(Nf(r))}),a=Mt(e.a8),i=a,o=P(cl,n,1,R,$([i]));if(o.$===1)return D;var c=o.a,l=D2(r),u=t(xe,.99,t(Ee,Ne(e.a3),Ef(zf(c)))),m=Tf(c),d=m.a,p=m.b,g=m.c,v=w2(b(Qv,d,p,g)),_=t(xe,1.01,t(zt,v,Ef(Mf(c)))),x=t(C2,e.f0,{fM:e.fM,gv:_,hd:u}),w=z2(x).eJ,S=w?Cr(vn(Nf(r))):Ba(kf(r)),y=function(){var se=e.cH;switch(se.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var we=se.a;return z(3,we);case 4:var we=se.a;return z(4,we);default:return z(5,0)}}(),C=y.a,I=y.b,O=e.ce,K=O,W=t(Xc,K,e.cL),Y=W,Z=qr({eu:0,ev:S.io,ew:Ia(Y),ex:e.ff,ey:0,ez:S.is,eA:Fa(Y),eB:x2(v),eC:0,eD:S.dV,eE:Ea(Y),eF:C,eG:0,eH:w,eI:0,eJ:I}),B=Ke(_f,Z,l,x,y2,i,{P:D,_:D,hI:D}),ne=e.cm;switch(ne.$){case 0:var fe=ne.a;return tr($([b(Jr,B.P,z(fe,Kc),Aa),b(Jr,B._,Tt,Aa)]));case 1:var fe=ne.a;return tr($([b(Jr,B.P,Tt,Aa),$([Ff]),b(Jr,B.hI,fe.bG,xf),$([Cf(0)]),b(Jr,B.P,z(fe,Kc),S2),b(Jr,B._,Tt,Aa)]));default:var ye=ne.a,me=ne.b;return tr($([b(Jr,B.P,z(me,Kc),Aa),$([Ff]),t(a2,B.hI,ye),b(P2,B.P,me,Fn(ye)),b(Jr,B._,Tt,Aa)]))}},E2=function(e){return t(Tr,"width",k(e))},B2=f(function(e,r){var n=$([T_(1),A_(0),S_(!0),P(z_,0,0,0,0)]),a=function(){var C=e.cP;switch(C.$){case 0:return F(n,"0",1);case 1:return F(t(M,L_,n),"1",1);default:var I=C.a;return F(n,"0",I)}}(),i=a.a,o=a.b,c=a.c,l=e.a4,u=l.a,m=l.b,d=hf(m),p=t(gr,"height",k(d)+"px"),g=hf(u),v=g/d,_=t(pa,function(C){return F2({fM:v,f0:e.f0,a3:e.a3,a8:C.a8,ce:C.ce,cm:C.cm,ff:c,cH:C.cH,cL:C.cL})},r),x=t(gr,"width",k(g)+"px"),w=e.a1,S=w,y=I_(S);return b(D_,"div",$([t(gr,"padding","0px"),x,p]),$([z(o,b(B_,i,$([E2(Le(g*c)),k_(Le(d*c)),x,p,t(gr,"display","block"),t(gr,"background-color",y)]),_))]))}),R2=function(e){return t(B2,{cP:e.cP,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,ce:e.ce,cm:e.cm,cH:e.cH,cL:e.cL}]))},Gf=function(e){return e},Hf=Gf({io:.31271,is:.32902}),j2=f(function(e,r){var n=e,a=Cr(r.gm),i=a.io,o=a.is,c=a.dV,l=t(Xc,r.c1,r.cU),u=l;return{b1:Ea(u),f3:n,cg:Fa(u),dv:0,cA:Ia(u),dK:1,io:-i,is:-o,dV:-c}}),N2=function(e){return e},G2=function(e){return N2(1.2*t(yt,2,e))},ll=function(e){return e},H2={$:0},W2=H2,Wf=function(e){return e},Uf=function(e){var r=e;return r},U2=function(e){e:for(;;){if(ue(e.gZ,Ir)&&ue(e.g_,Ir))return ur;if(t(Yv,Ne(e.gZ),Ne(e.g_))){var r={cU:e.cU,gZ:e.g_,g_:e.gZ,fm:vn(e.fm)};e=r;continue e}else{var n=le(Uf(e.g_)/Yn),a=le(Uf(e.gZ)/Yn),i=Cr(e.fm),o=i.io,c=i.is,l=i.dV,u=t(Xc,Wf(1),e.cU),m=u;return{b1:a*Ea(m),f3:!1,cg:a*Fa(m),dv:n/a,cA:a*Ia(m),dK:3,io:o,is:c,dV:l}}}},Of=function(e){return U2({cU:e.cU,gZ:e.c1,g_:Ir,fm:e.fm})},O2=function(e){var r=e;return r},Jf=function(e){var r=b(af,1667,25e3,O2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Gf({io:n,is:a})},qf=function(e){return e},J2=Jf(qf(12e3)),q2=Jf(qf(5600)),Y2=function(e){return{$:2,a:e}},Z2=function(e){return Y2(e)},K2=f(function(e,r){return{$:2,a:e,b:r}}),Yf=function(e){return{$:0,a:e}},Ii=function(e){var r=e;return r},X2=function(e){var r=e;return r.f3},Q2=Yf(Tt.a),ey=f(function(e,r){var n=f(function(a,i){var o=i.a,c=i.b;return e(a)?z(t(M,a,o),c):z(o,t(M,a,c))});return b(We,n,z(D,D),r)}),ry=function(e){var r=e;return qr({eu:r.io,ev:r.cA,ew:0,ex:0,ey:r.is,ez:r.cg,eA:0,eB:0,eC:r.dV,eD:r.b1,eE:0,eF:0,eG:r.dK,eH:r.dv,eI:0,eJ:0})},ny=be(function(e,r,n,a,i,o,c,l){var u=t(ey,X2,$([Ii(e),Ii(r),Ii(n),Ii(a)])),m=u.a,d=u.b;if(m.b){var p=G(m,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,v=p.b,_=v.a,x=v.b,w=x.a,S=x.b,y=S.a;return t(K2,t(q,ry,m),{bG:t(Lr,g,_),cn:t(Lr,w,y),co:t(Lr,i,o),cp:t(Lr,c,l)})}else return Q2}else return Yf({bG:t(Lr,e,r),cn:t(Lr,n,a),co:t(Lr,i,o),cp:t(Lr,c,l)})}),ay=T(function(e,r,n){return Wa(ny,e,r,n,ur,ur,ur,ur,ur)}),ty=function(e){var r=t(j2,x_(e.hI),{cU:q2,gm:e.hZ,c1:ll(8e4)}),n=Of({cU:J2,c1:ll(2e4),fm:e.fm}),a=Of({cU:Hf,c1:ll(15e3),fm:vn(e.fm)}),i=b(ay,r,n,a);return R2({cP:Z2(e.cY),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,ce:G2(15),cm:i,cH:W2,cL:Hf})},Zf=J(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),iy=J(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Kf=J(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Xf=J(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),oy=J(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),cy=J(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),ly=J(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ul=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P(ly,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(Zf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(iy,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(Kf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(cy,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(Xf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(oy,r,i,a,1);case 8:return e;case 9:return e;default:return e}},$l={$:0},uy=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var u=l.a,m=l.b,d=Di(c(u)),p=t(Ge,d.eO,e),g=t(Ee,d.eL,r),v=t(Ge,d.eP,n),_=t(Ee,d.eM,a),x=t(Ge,d.eQ,i),w=t(Ee,d.eN,o),S=c,y=m;e=p,r=g,n=v,a=_,i=x,o=w,c=S,l=y;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),$y=T(function(e,r,n){var a=Di(e(r));return Wa(uy,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),vl=f(function(e,r){var n=e,a=r;return ce(a,n)<1}),Qf=function(e){return t(vl,e.eL,e.eO)&&t(vl,e.eM,e.eP)&&t(vl,e.eN,e.eQ)?e:{eL:t(Ee,e.eO,e.eL),eM:t(Ee,e.eP,e.eM),eN:t(Ee,e.eQ,e.eN),eO:t(Ge,e.eO,e.eL),eP:t(Ge,e.eP,e.eM),eQ:t(Ge,e.eQ,e.eN)}},kt=function(e){var r=e;return r},em=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=Xn(n),c=Qn(n),l=ea(n),u=Xn(a),m=Qn(a),d=ea(a),p=Xn(i),g=Qn(i),v=ea(i);return Qf({eL:t(Ee,o,t(Ee,u,p)),eM:t(Ee,c,t(Ee,m,g)),eN:t(Ee,l,t(Ee,d,v)),eO:t(Ge,o,t(Ge,u,p)),eP:t(Ge,c,t(Ge,m,g)),eQ:t(Ge,l,t(Ge,d,v))})},rm=up,$r=function(e){return rm(Ai(e))},nm=function(e){var r=e;return r},Fi=function(e){return rm(nm(e))},vy=f(function(e,r){var n=e,a=r,i=t(qe,le(a.io),t(qe,le(a.is),le(a.dV)));if(i){var o=a.dV/i,c=a.is/i,l=a.io/i,u=Tn(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dV:n*o/u}}else return Zv}),fy=vy(Wf(1)),am=T(function(e,r,n){var a=t(Pi,r,n),i=t(Pi,e,r);return fy(t(zc,a,i))}),my=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=Fi(b(am,n,a,i));return F({q:o,cy:$r(n)},{q:o,cy:$r(a)},{q:o,cy:$r(i)})},sy=f(function(e,r){return{$:2,a:e,b:r}}),tm=sy({d5:3,ei:0,eS:4}),dy=function(e){if(e.b){var r=e.a,n=e.b,a=tm(t(q,my,e)),i=b($y,em,r,n);return P(Zf,i,e,a,0)}else return $l},Pr=T(function(e,r,n){return F(e,r,n)}),im=function(){var e=kn(1),r=kn(1),n=kn(1),a=t(xe,-.5,e),i=t(xe,-.5,r),o=t(xe,-.5,n),c=b(Oe,o,i,a),l=t(xe,.5,e),u=b(Oe,o,i,l),m=t(xe,.5,r),d=b(Oe,o,m,a),p=b(Oe,o,m,l),g=t(xe,.5,n),v=b(Oe,g,i,a),_=b(Oe,g,m,a),x=b(Oe,g,i,l),w=b(Oe,g,m,l);return ul(dy($([b(Pr,c,_,v),b(Pr,c,d,_),b(Pr,u,x,w),b(Pr,u,w,p),b(Pr,v,_,w),b(Pr,v,w,x),b(Pr,c,p,d),b(Pr,c,u,p),b(Pr,c,v,x),b(Pr,c,x,u),b(Pr,d,w,_),b(Pr,d,p,w)])))}(),Ei={$:0},py=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),gy=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(a),m=Fi(b(am,u,l,c)),d={q:m,cy:$r(u)},p={q:m,cy:$r(l)},g={q:m,cy:$r(c)};return t(M,d,t(M,p,t(M,g,n)))}),fl=function(e){var r=e;return r.H},hy=J(function(e,r,n,a){if(r.$===1)return R;var i=r.a;if(n.$===1)return R;var o=n.a;if(a.$===1)return R;var c=a.a;return N(b(e,i,o,c))}),ml=4294967295>>>32-Qa,sl=os,by=T(function(e,r,n){e:for(;;){var a=ml&r>>>e,i=t(sl,a,n);if(i.$){var m=i.a;return t(sl,ml&r,m)}else{var o=i.a,c=e-Qa,l=r,u=o;e=c,r=l,n=u;continue e}}}),_y=function(e){return e>>>5<<5},yy=f(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?R:ce(e,_y(n))>-1?N(t(sl,ml&e,o)):N(b(by,a,e,i))}),dl=function(e){var r=e;return r.au},pl=f(function(e,r){return t(yy,e,dl(r))}),xy=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(hy,T(function(c,l,u){return F(c,l,u)}),t(pl,a,e),t(pl,i,e),t(pl,o,e))};return t(Gn,r,fl(e))},wy=T(function(e,r,n){e:for(;;){var a=t(Do,mr,e),i=a.a,o=a.b;if(ce(ko(i),mr)<0)return t(Fu,!0,{C:r,n,r:i});var c=o,l=t(M,Vu(i),r),u=n+1;e=c,r=l,n=u;continue e}}),gl=function(e){return e.b?b(wy,e,D,0):ku},Sy=f(function(e,r){return!t(at,t(lt,D0,e),r)}),Cy=function(e){var r=e.a;return r},om=f(function(e,r){var n=Cy(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ce(o,n)<0&&c>=0&&ce(c,n)<0&&l>=0&&ce(l,n)<0};return t(Sy,a,r)?{H:r,au:e}:{H:t(L$,a,r),au:e}}),Ly=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Dt=Ly({d5:1,ei:3,eS:4}),Bi=f(function(e,r){var n=Ba(r),a=Ba(e);return z(F(a.io,a.is,a.dV),F(n.io,n.is,n.dV))}),cm=b(St,0,0,0),hl=fr(function(e,r,n,a,i,o){var c=o.a,l=o.b,u=o.c,m=t(No,t(Bi,e,r),i);if(m.$){var p={q:cm,cy:$r(r)},g={q:cm,cy:$r(e)},v=u+1,_=u;return F(t(M,F(n,_,v),t(M,F(n,v,a),c)),t(M,p,t(M,g,l)),u+2)}else{var d=m.a;return F(t(M,F(n,d,a),c),l,u)}}),Py=Be(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,m=n.b,d=e(u),p=e(l),g=e(c),v=a+2,_=a+1,x=a,w=e,S=r,y=m,C=a+3,I=Ke(hl,d,g,v,x,r,Ke(hl,p,d,_,v,r,Ke(hl,g,p,x,_,r,i)));e=w,r=S,n=y,a=C,i=I;continue e}else{var O=i,K=O.a,W=O.b;return z(K,nr(W))}}),zy=Be(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,m=r.b,d=e(u),p=e(l),g=e(c),v=n+2,_=n+1,x=n,w=b(it,t(Bi,g,d),v,b(it,t(Bi,d,p),_,b(it,t(Bi,p,g),x,i))),S=t(M,F(x,_,v),a),y=e,C=m,I=n+3,O=S,K=w;e=y,r=C,n=I,a=O,i=K;continue e}else return F(a,i,n)}),ia=T(function(e,r,n){var a=xy(n),i=b(We,gy(r),D,a),o=V(zy,r,a,0,D,d$),c=o.a,l=o.b,u=o.c,m=V(Py,r,l,a,0,F(c,D,u)),d=m.a,p=m.b,g=yn(p)?i:G(i,p);return b(py,e,t(om,gl(g),d),t(Dt,g,d))}),bl=function(e){return{H:t(q,function(r){return F(3*r,3*r+1,3*r+2)},t(nn,0,Fn(e)-1)),au:gl(tr(t(q,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},lm=function(e){switch(e.$){case 0:return Ei;case 1:var r=e.a,n=e.b,a=t(q,kt,n);return b(ia,r,Vr,bl(a));case 2:var r=e.a,n=e.b,a=t(q,kt,n);return b(ia,r,Vr,bl(a));case 3:var r=e.a,i=e.b;return b(ia,r,Vr,i);case 4:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cy},i);case 5:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cy},i);case 6:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cy},i);case 7:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cy},i);case 8:return Ei;case 9:return Ei;default:return Ei}},um=lm(im),$m={$:0},E=$m,Je=f(function(e,r){return{$:1,a:e,b:r}}),My={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},Ty=1029,ky=function(e){return{$:5,a:e}},vm=function(e){var r=e;return ky(r)},Dy=vm(Ty),Vy=1028,Ay=vm(Vy),vr=T(function(e,r,n){return r===1?e?t(M,Dy,n):t(M,Ay,n):n}),fm={src:`
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
    `,attributes:{position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},_l=J(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,d,p){return V(ze,b(vr,l,a,p),fm,My,n,{b8:e,c,d:o,e:m,f:i,g:u})}))}),yl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},mm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},fn=J(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,d,p){return V(ze,b(vr,l,a,p),mm,yl,n,{aO:e,c,d:o,e:m,f:i,g:u})}))}),sm=f(function(e,r){return{$:3,a:e,b:r}}),Iy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cx",sceneProperties:"f"}},dm={src:`
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
    `,attributes:{position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cx",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Fy=J(function(e,r,n,a){return t(sm,n,be(function(i,o,c,l,u,m,d,p){return V(ze,p,dm,Iy,a,{aO:e,c,d:o,cx:r,e:m,f:i,g:u})}))}),xl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Vt=function(e){var r=e;return r},Ri=$p,mn=Be(function(e,r,n,a,i){return t(Je,n,be(function(o,c,l,u,m,d,p,g){return V(ze,b(vr,u,i,g),mm,xl,a,{a6:t(Ri,Vt(r),e),c:l,d:c,e:d,f:o,g:m})}))}),Ey={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cx",sceneProperties:"f"}},By=Be(function(e,r,n,a,i){return t(sm,a,be(function(o,c,l,u,m,d,p,g){return V(ze,g,dm,Ey,i,{a6:t(Ri,Vt(r),e),c:l,d:c,cx:n,e:d,f:o,g:m})}))}),pm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColor:"de",sceneProperties:"f",viewMatrix:"g"}},gm={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ji=J(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,d,p){var g=d.a,v=d.b;return V(ze,b(vr,l,a,p),gm,pm,n,{U:v,bG:g.bG,cn:g.cn,co:g.co,cp:g.cp,de:e,c,d:o,e:m,f:i,g:u})}))}),hm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",materialColorTexture:"df",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},bm={src:`
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
    `,attributes:{normal:"q",position:"cy",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ry=fr(function(e,r,n,a,i,o){return t(Je,a,be(function(c,l,u,m,d,p,g,v){var _=g.a,x=g.b;return V(ze,b(vr,m,o,v),bm,hm,i,{U:x,bG:_.bG,cn:_.cn,co:_.co,cp:_.cp,df:e,c:u,d:l,bg:r,e:p,f:c,bm:n,g:d})}))}),_m={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cT",constantBaseColor:"cV",constantMetallic:"cW",constantRoughness:"cX",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallicTexture:"di",normalMapTexture:"bg",roughnessTexture:"dC",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},jy=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(d){return t(Je,u,be(function(p,g,v,_,x,w,S,y){var C=S.a,I=S.b;return V(ze,b(vr,_,d,y),bm,_m,m,{cT:e,cV:r,cW:o,cX:a,U:I,bG:C.bG,cn:C.cn,co:C.co,cp:C.cp,di:i,c:v,d:g,bg:c,e:w,dC:n,f:p,bm:l,g:x})}))}}}}}}}}}}},ym={src:`
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
    `,attributes:{},uniforms:{baseColor:"cS",enabledLights:"U",lights12:"bG",lights34:"cn",lights56:"co",lights78:"cp",metallic:"dh",roughness:"dB",sceneProperties:"f",viewMatrix:"g"}},Ni=fr(function(e,r,n,a,i,o){return t(Je,a,be(function(c,l,u,m,d,p,g,v){var _=g.a,x=g.b;return V(ze,b(vr,m,o,v),gm,ym,i,{cS:e,U:x,bG:_.bG,cn:_.cn,co:_.co,cp:_.cp,dh:n,c:u,d:l,e:p,dB:r,f:c,g:d})}))}),Ny=function(e){return{$:0,a:e}},xm=f(function(e,r){return{$:1,a:e,b:r}}),At=f(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),Gy=function(e){return P(ka,Ia(e),Fa(e),Ea(e),1)},wl=P(ka,0,0,0,0),Gi=f(function(e,r){if(r.$){var a=r.a.E;return z(a,wl)}else{var n=r.a;return z(e,Gy(n))}}),wm=f(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return t(xm,z(i,wl),t(At,i,r))}else if(n.b.$){var i=n.b.a.E;return t(xm,t(Gi,i,e),t(At,i,r))}else{var a=n.a.a;return n.b.a,Ny(a)}}),Hy=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Hi=J(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Wy=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Uy=function(e){return t(br,e,1)},Sl=t(br,0,0),Ra=f(function(e,r){if(r.$){var a=r.a.E;return z(a,Sl)}else{var n=r.a;return z(e,Uy(n))}}),Sm=J(function(e,r,n,a){var i=P(Wy,e,r,n,a);if(i.a.$){var u=i.a.a.E;return P(Hi,z(u,wl),t(Ra,u,r),t(Ra,u,n),t(At,u,a))}else if(i.b.$){var u=i.b.a.E;return P(Hi,t(Gi,u,e),z(u,Sl),t(Ra,u,n),t(At,u,a))}else if(i.c.$){var u=i.c.a.E;return P(Hi,t(Gi,u,e),t(Ra,u,r),z(u,Sl),t(At,u,a))}else if(i.d.$){var u=i.d.a.E;return P(Hi,t(Gi,u,e),t(Ra,u,r),t(Ra,u,n),z(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(Hy,o,c,l)}}),Oy={src:`
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
    `,attributes:{},uniforms:{backlight:"cQ",colorTexture:"b8",sceneProperties:"f"}},Cl=Be(function(e,r,n,a,i){return t(Je,n,be(function(o,c,l,u,m,d,p,g){return V(ze,b(vr,u,i,g),fm,Oy,a,{cQ:Vt(r),b8:e,c:l,d:c,e:d,f:o,g:m})}))}),Cm={src:`
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
    `,attributes:{normal:"q",position:"cy",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Jy=J(function(e,r,n,a){return t(Je,r,be(function(i,o,c,l,u,m,d,p){var g=d.a,v=d.b;return V(ze,b(vr,l,a,p),Cm,hm,n,{U:v,bG:g.bG,cn:g.cn,co:g.co,cp:g.cp,df:e,c,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),qy=ao(function(e,r,n,a,i,o,c,l,u){return t(Je,c,be(function(m,d,p,g,v,_,x,w){var S=x.a,y=x.b;return V(ze,b(vr,g,u,w),Cm,_m,l,{cT:e,cV:r,cW:o,cX:a,U:y,bG:S.bG,cn:S.cn,co:S.co,cp:S.cp,di:i,c:p,d,bg:e,e:_,dC:n,f:m,bm:0,g:v})}))}),It=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),Yy=function(e){var r=e;return b(It,r.eO,r.eL,.5)},Zy=function(e){var r=e;return b(It,r.eP,r.eM,.5)},Ky=function(e){var r=e;return b(It,r.eQ,r.eN,.5)},Xy=function(e){return b(Oe,Yy(e),Zy(e),Ky(e))},ie=function(e){var r=Tf(e),n=r.a,a=r.b,i=r.c;return{f4:Ai(Xy(e)),gD:n/2,gE:a/2,gF:i/2}},Ll=f(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return P(_l,l,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(_l,l,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(_l,l,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(fn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(fn,n,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return P(Fy,n,c,ie(a),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var a=r.a,i=r.c,o=r.d;return V(Cl,l,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(Cl,l,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(Cl,l,m,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return V(mn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return V(mn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return V(mn,u,m,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return V(By,u,m,c,ie(a),i)}}case 2:e.a;var d=e.b,p=e.c,g=t(wm,d,p);if(g.$){var x=g.a,w=x.a;x.b;var S=g.b,y=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(Jy,w,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Ke(Ry,w,y,C,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}else{var v=g.a;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,_=r.d;return P(ji,v,ie(a),i,_);case 3:return E;case 4:var a=r.a,i=r.c,_=r.d;return P(ji,v,ie(a),i,_);case 5:return E;case 6:var a=r.a,i=r.c,_=r.d;return P(ji,v,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(ji,v,ie(a),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var I=e.b,O=e.c,K=e.d,p=e.e,W=P(Sm,I,O,K,p);if(W.$){var ne=W.a,fe=ne.a,ye=ne.b,me=W.b,se=me.a,we=me.b,de=W.c,Ve=de.a,Me=de.b,Ze=W.d,y=Ze.a,C=Ze.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return rs(qy,fe,ye,se,we,Ve,Me,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return jy(fe)(ye)(se)(we)(Ve)(Me)(y)(C)(ie(a))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=W.a,Z=W.b,B=W.c;switch(r.$){case 0:return E;case 1:return E;case 2:var a=r.a,i=r.c,o=r.d;return Ke(Ni,Y,Z,B,ie(a),i,o);case 3:return E;case 4:var a=r.a,i=r.c,o=r.d;return Ke(Ni,Y,Z,B,ie(a),i,o);case 5:return E;case 6:var a=r.a,i=r.c,o=r.d;return Ke(Ni,Y,Z,B,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Ke(Ni,Y,Z,B,ie(a),i,o);case 8:return E;case 9:return E;default:return E}}}}),Pl=function(e){var r=e;return r.io},zl=function(e){var r=e;return r.is},Ml=function(e){var r=e;return r.dV},Qy=function(e){var r=e,n=Ml(r.dW),a=zl(r.dW),i=Pl(r.dW),o=Ml(r.dU),c=zl(r.dU),l=Pl(r.dU),u=Ml(r.dT),m=zl(r.dT),d=Pl(r.dT);return d*c*n+m*o*i+u*l*a-u*c*i-m*l*n-d*o*a>0},ex=function(e){var r=Ai(Ma(e)),n=Cr(ta(e)),a=Cr(aa(e)),i=Cr(na(e));return{ek:Qy(e),t:i.io,u:i.is,v:i.dV,w:a.io,x:a.is,y:a.dV,z:n.io,A:n.is,B:n.dV,K:r.io,L:r.is,M:r.dV,cD:1}},ja=f(function(e,r){return{$:5,a:e,b:r}}),Lm=f(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var a=n.a,i=n.b,o=t(bf,a,e);return t(ja,o,i);case 1:return t(ja,e,n);case 3:return t(ja,e,n);case 2:return t(ja,e,n);default:return t(ja,e,n)}}),Pm=f(function(e,r){return t(Lm,ex(e),r)}),Wi=function(e){return{$:2,a:e}},rx=f(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dV:i*o.dV},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),nx=mp,ax=fp,zm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){var d=e.a,p=e.b,g=e.c,v=ax(a),_=v.io,x=v.is,w=v.dV,S=v.ft,y=nx({ft:S,io:_*d,is:x*p,dV:w*g});return Wa(r,n,y,i,o,c,l,u,m)}}}}}}}}}},Tl=f(function(e,r){switch(r.$){case 0:return $m;case 5:var n=r.a,a=r.b;return t(ja,n,t(Tl,e,a));case 1:var i=r.a,o=r.b;return t(Je,t(rx,e,i),t(zm,e,o));case 3:return r;case 2:var o=r.a;return Wi(t(zm,e,o));default:var c=r.a;return If(t(q,Tl(e),c))}}),kl=f(function(e,r){var n=r;return t(Tl,e,n)}),Dl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Mm=7683,Tm=7682,tx=b(nl,{dd:0,dy:0,dS:15},{bA:er,bP:Da,bY:er,bZ:Mm},{bA:er,bP:Da,bY:er,bZ:Tm}),ix=b(nl,{dd:0,dy:0,dS:15},{bA:er,bP:Da,bY:er,bZ:Tm},{bA:er,bP:Da,bY:er,bZ:Mm}),Vl=f(function(e,r){return e?t(M,ix,r):t(M,tx,r)}),ox={src:`
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
    `,attributes:{normal:"q",position:"cy"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},cx=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,c,l,u,m){return V(ze,t(Vl,o,m),ox,Dl,r,{c:i,d:a,e:l,f:n,cE:u,g:c})}))}else return R},Ui=function(e){var r=cx(e);if(r.$)return E;var n=r.a;return Wi(n)},lx=J(function(e,r,n,a){var i=t(Ll,n,im),o=function(){var d=z(e,r);return d.a?d.b?Mt($([i,Ui(um)])):i:d.b?Ui(um):E}(),c=Hc(a),l=c.a,u=c.b,m=c.c;return t(Pm,Gc(a),t(kl,F(l,u,m),o))}),ux=f(function(e,r){return P(lx,!0,!0,e,r)}),km=f(function(e,r){return{$:0,a:e,b:r}}),$x=function(e){var r=mc(e),n=r.hu,a=r.gA,i=r.fS;return b(St,n,a,i)},vx=function(e){return t(km,0,jc($x(e)))},Ft=function(e){var r=e;return ra(r)},fx=f(function(e,r){var n=r;return n/e}),Dm=function(e){var r=e;return{io:ra(r),is:Ta(r)}},mx=f(function(e,r){var n=e.cy,a=e.q;return t(M,{q:Fi(a),cy:$r(n)},r)}),sx=jt(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,m=Ea(l.cy),d=Fa(l.cy),p=Ia(l.cy),g=t(_a,e,p),v=t(qe,r,p),_=t(_a,n,d),x=t(qe,a,d),w=t(_a,i,m),S=t(qe,o,m),y=u;e=g,r=v,n=_,a=x,i=w,o=S,c=y;continue e}else return Qf({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),Vm=f(function(e,r){var n=Ea(e.cy),a=Fa(e.cy),i=Ia(e.cy);return to(sx,i,i,a,a,n,n,r)}),dx=function(e){var r=b(yu,mx,D,dl(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,fl(e)),o=t(Vm,n,a);return P(Kf,o,e,i,0)}else return $l},Am=f(function(e,r){var n=e,a=r,i=n.dU,o=i,c=n.dT,l=c;return{io:a.io*l.io+a.is*o.io,is:a.io*l.is+a.is*o.is,dV:a.io*l.dV+a.is*o.dV}}),Oi=function(e){var r=e;return Ta(r)},Al=function(e){return Kn(2*Yn*e)},px=Vr,Im=px({dm:hr,dT:Jc,dU:qc}),Fm=function(){var e=72,r=t(fx,e,Al(1)),n=kn(1),a=za(Bc),i=za(ef),o=kn(1),c=t(xe,.5,o),l=b(Oe,Ir,Ir,c),u=t(xe,-.5,o),m=b(Oe,Ir,Ir,u),d=function(v){var _=t(xe,v,r),x=za(t(Am,Im,Dm(_))),w=t(xe,Ft(_),n),S=t(xe,Oi(_),n),y=b(Oe,w,S,c),C=b(Oe,w,S,u),I=t(_i,e,v+1),O=t(xe,I,r),K=za(t(Am,Im,Dm(O))),W=t(xe,Ft(O),n),Y=t(xe,Oi(O),n),Z=b(Oe,W,Y,u),B=b(Oe,W,Y,c);return $([F({q:i,cy:m},{q:i,cy:Z},{q:i,cy:C}),F({q:x,cy:C},{q:K,cy:Z},{q:K,cy:B}),F({q:x,cy:C},{q:K,cy:B},{q:x,cy:y}),F({q:a,cy:l},{q:a,cy:y},{q:a,cy:B})])},p=t(q,d,t(nn,0,e-1)),g=bl(tr(p));return ul(dx(g))}(),Em=lm(Fm),gx=function(e){var r=vf(e),n=Mc(r),a=n.a,i=n.b;return Or({dm:mf(e),dT:a,dU:i,dW:r})},hx=J(function(e,r,n,a){var i=gx(Zc(a)),o=t(Ll,n,Fm),c=function(){var p=z(e,r);return p.a?p.b?Mt($([o,Ui(Em)])):o:p.b?Ui(Em):E}(),l=df(a),u=l,m=sf(a),d=m;return t(Pm,i,t(kl,F(u,u,d),c))}),bx=f(function(e,r){return P(hx,!0,!0,e,r)}),Bm={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Rm={src:`
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
    `,attributes:{triangleVertex:"dJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Et=function(e){var r=kt(e),n=r.a,a=r.b,i=r.c,o=Ba(n),c=Ba(a),l=Ba(i);return qr({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dV,eD:c.dV,eE:l.dV,eF:0,eG:0,eH:0,eI:0,eJ:0})},Ji=tm($([F({dJ:0},{dJ:1},{dJ:2})])),_x=f(function(e,r){var n=em(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return t(Je,a,be(function(y,C,I,O,K,W,Y,Z){return V(ze,b(vr,O,0,Z),Bm,yl,Ji,{aO:i,c:I,d:C,e:W,f:y,bV:Et(r),g:K})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,c=e.c;return t(Je,a,be(function(y,C,I,O,K,W,Y,Z){return V(ze,b(vr,O,0,Z),Bm,xl,Ji,{a6:t(Ri,Vt(c),o),c:I,d:C,e:W,f:y,bV:Et(r),g:K})}));case 2:e.a;var l=e.b,u=e.c,m=t(wm,l,u);if(m.$)return E;var d=m.a;return t(Je,a,be(function(y,C,I,O,K,W,Y,Z){var B=Y.a,ne=Y.b;return V(ze,b(vr,O,0,Z),Rm,pm,Ji,{U:ne,bG:B.bG,cn:B.cn,co:B.co,cp:B.cp,de:d,c:I,d:C,e:W,f:y,bV:Et(r),g:K})}));default:e.a;var p=e.b,g=e.c,v=e.d,u=e.e,_=P(Sm,p,g,v,u);if(_.$)return E;var x=_.a,w=_.b,S=_.c;return t(Je,a,be(function(y,C,I,O,K,W,Y,Z){var B=Y.a,ne=Y.b;return V(ze,b(vr,O,0,Z),Rm,ym,Ji,{cS:x,U:ne,bG:B.bG,cn:B.cn,co:B.co,cp:B.cp,dh:S,c:I,d:C,e:W,dB:w,f:y,bV:Et(r),g:K})}))}}),yx=function(){var e=$([{bl:t(br,0,1)},{bl:t(br,1,1)},{bl:t(br,2,1)},{bl:t(br,0,-1)},{bl:t(br,1,-1)},{bl:t(br,2,-1)}]),r=$([F(0,1,2),F(3,5,4),F(3,4,1),F(3,1,0),F(4,5,2),F(4,2,1),F(5,3,0),F(5,0,2)]);return t(Dt,e,r)}(),xx={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",triangleVertexPositions:"bV",viewMatrix:"g"}},jm=function(e){return Wi(be(function(r,n,a,i,o,c,l,u){return V(ze,t(Vl,i,u),xx,Dl,yx,{c:a,d:n,e:c,f:r,cE:l,bV:Et(e),g:o})}))},wx=J(function(e,r,n,a){var i=t(_x,n,a),o=z(e,r);return o.a?o.b?Mt($([i,jm(a)])):i:o.b?jm(a):E}),Sx=f(function(e,r){return P(wx,!0,!0,e,r)}),Cx=f(function(e,r){var n=ea(r),a=ea(e),i=Qn(r),o=Qn(e),c=Xn(r),l=Xn(e);return{eL:t(Ee,l,c),eM:t(Ee,o,i),eN:t(Ee,a,n),eO:t(Ge,l,c),eP:t(Ge,o,i),eQ:t(Ge,a,n)}}),Lx=function(e){var r=Wc(e),n=r.a,a=r.b;return t(Cx,n,a)},Nm={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Px=f(function(e,r){return{$:1,a:e,b:r}}),zx=Px({d5:2,ei:0,eS:1}),Gm=zx($([z({es:0},{es:1})])),Mx=f(function(e,r){var n=Lx(r),a=ie(n),i=Wc(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var l=e.b.a;return t(Je,a,be(function(m,d,p,g,v,_,x,w){return V(ze,w,Nm,yl,Gm,{aO:l,eq:$r(c),er:$r(o),c:p,d,e:_,f:m,g:v})}));case 1:if(e.b.$)return E;var l=e.b.a,u=e.c;return t(Je,a,be(function(d,p,g,v,_,x,w,S){return V(ze,S,Nm,xl,Gm,{a6:t(Ri,Vt(u),l),eq:$r(c),er:$r(o),c:g,d:p,e:x,f:d,g:_})}));case 2:return E;default:return E}}),Tx=f(function(e,r){return t(Mx,e,r)}),Hm=f(function(e,r){var n=e,a=r;return n/a}),kx=Be(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(M,o,i);if(ue(r,e))return c;var l=e,u=r-1,m=n,d=a,p=c;e=l,r=u,n=m,a=d,i=p;continue e}}),Wm=f(function(e,r){return e<1?D:V(kx,0,e,e,r,D)}),Dx=f(function(e,r){var n=e.cy,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(M,{q:Fi(a),cy:$r(n),O:t(br,c,l)},r)}),Vx=function(e){var r=b(yu,Dx,D,dl(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,fl(e)),o=t(Vm,n,a);return P(Xf,o,e,i,0)}else return $l},Um=f(function(e,r){var n=e,a=r,i=ra(a);return{io:i*ra(n),is:i*Ta(n),dV:Ta(a)}}),Ax=function(){var e=kn(1),r=72,n=t(nn,0,r-1),a=t(Wm,r,t(It,Ir,Al(1))),i=Ka(r/2),o=t(nn,0,i-1),c=t(Wm,i,t(It,wt(90),wt(-90))),l=gl(tr(t(q,function(d){return t(q,function(p){return{q:za(t(Um,d,p)),cy:b(Oe,t(xe,Ft(p)*Ft(d),e),t(xe,Ft(p)*Oi(d),e),t(xe,Oi(p),e)),O:z(t(Hm,d,Al(1)),t(Hm,t(zt,wt(90),p),wt(180)))}},c)},a))),u=f(function(d,p){return d*(i+1)+p}),m=tr(t(q,function(d){return tr(t(q,function(p){var g=t(u,d+1,p),v=t(u,d,p),_=t(u,d+1,p+1),x=t(u,d,p+1);return $([F(x,_,g),F(x,g,v)])},o))},n));return ul(Vx(t(om,l,m)))}(),qi=72,Yi=2*qi,Ix=f(function(e,r){e:for(;;){var n=Yi+1,a=t(_i,Yi,2*e+3),i=t(_i,Yi,2*e+2),o=2*e+1,c=2*e,l=Yi,u=t(M,F(l,c,i),t(M,F(c,a,i),t(M,F(c,o,a),t(M,F(o,n,a),r))));if(e){var m=e-1,d=u;e=m,r=d;continue e}else return u}}),Fx=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Ex=f(function(e,r){e:for(;;){var n=b(Fx,0,2*Yn,e/qi),a={b$:n,cu:0,cB:1},i={b$:n,cu:1,cB:1},o=t(M,a,t(M,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Bx=function(){var e=t(Ex,qi-1,$([{b$:0,cu:0,cB:0},{b$:0,cu:1,cB:0}])),r=t(Ix,qi-1,D);return t(Dt,e,r)}(),Rx={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cu",radiusScale:"cB"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cE",viewMatrix:"g"}},Om=function(e){return Wi(be(function(r,n,a,i,o,c,l,u){return V(ze,t(Vl,!0,u),Rx,Dl,Bx,{aO:b(St,0,0,1),c:a,d:n,e:c,f:r,cE:l,g:o})}))},jx=function(e){var r=nm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dV,cD:1}},Nx=f(function(e,r){return t(Lm,jx(e),r)}),Gx=J(function(e,r,n,a){var i=t(Ll,n,Ax),o=function(){var u=z(e,r);return u.a?u.b?Mt($([i,Om()])):i:u.b?Om():E}(),c=Oc(a),l=c;return t(Nx,t(Pi,hr,Uc(a)),t(kl,F(l,l,l),o))}),Hx=f(function(e,r){return P(Gx,!0,!0,e,r)}),Wx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ux=Be(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),Ox=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(km,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(Wx,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(nf,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return V(Ux,r,n,o,c,i)}},Jx=Ox,Jm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(ux,r,n)]);case 1:var r=e.a,a=e.b;return $([t(Sx,r,a)]);case 3:var r=e.a,i=e.b;return $([t(Hx,Jx(r),i)]);case 2:var r=e.a,o=e.b;return $([t(bx,r,o)]);case 4:var c=e.a,l=e.b;return $([t(Tx,vx(c),l)]);default:var u=e.a;return t(pa,Jm,u)}},qx=function(e){return t(pa,Jm,e)},Yx=f(function(e,r){return ty({a1:__(e.fO),f0:e.f0,a3:y_(.5),cY:e.cY,a4:z(gf(Le(e.dD.im)),gf(Le(e.dD.gH))),a8:qx(r),hI:!0,hZ:t(Um,Kn(e.hY),Kn(e.h_)),fm:Yc})}),Zx=f(function(e,r){return t(Yx,{fO:b(I1,46,46,46),f0:A1({d9:{io:0,is:4,dV:8},ba:{io:0,is:0,dV:0},fm:{io:0,is:1,dV:0}}),cY:e.cY,dD:e.dD,hY:-pc(135),h_:-pc(45)},t(b_,e,r))}),Kx=b(g1,Zx,b1,h1);const Xx={Main:{init:Kx(t(U,function(e){return ar({gY:e})},t(H,"inputs",t(U,function(e){return t(U,function(r){return t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return ar({bt:c,cY:o,gp:i,g3:a,hq:n,dD:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return t(U,function(d){return t(U,function(p){return ar({fJ:p,gd:d,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",ii(ma)))},t(H,"left",_e))},t(H,"pressedKeys",ii(ma)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(U,function(n){return t(U,function(a){return t(U,function(i){return t(U,function(o){return t(U,function(c){return t(U,function(l){return t(U,function(u){return t(U,function(m){return ar({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(U,function(r){return t(U,function(n){return ar({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(U,function(e){return t(U,function(r){return ar({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re)))))))(0)}},X={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Qx=e=>{const r=v=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(v.code),n=v=>["AltLeft","AltRight"].includes(v.code),a=v=>["ShiftLeft","ShiftRight"].includes(v.code),i=v=>v.code=="ArrowLeft",o=v=>v.code=="ArrowRight",c=v=>v.code=="ArrowUp",l=v=>v.code=="ArrowDown",u=v=>v.button==0,m=v=>v.button==2;function d(v){v.keyboard.pressedKeys=[],v.keyboard.control=!1,v.keyboard.alt=!1,v.keyboard.shift=!1,v.keyboard.left=!1,v.keyboard.right=!1,v.keyboard.up=!1,v.keyboard.down=!1,v.pointer.isDown=!1}function p(v){v.keyboard.downs=[],v.pointer.down=!1,v.pointer.move=!1,v.pointer.up=!1,v.pointer.rightDown=!1,v.pointer.rightUp=!1,v.wheel.deltaX=0,v.wheel.deltaY=0}window.addEventListener("keydown",v=>{v.repeat||(X.keyboard.downs.push(v.code),X.keyboard.pressedKeys.push(v.code),r(v)&&(X.keyboard.control=!0),n(v)&&(X.keyboard.alt=!0),a(v)&&(console.log("yo"),X.keyboard.shift=!0),i(v)&&(X.keyboard.left=!0),o(v)&&(X.keyboard.right=!0),c(v)&&(X.keyboard.up=!0),l(v)&&(console.log("yey"),X.keyboard.down=!0))}),window.addEventListener("keyup",v=>{X.keyboard.pressedKeys=X.keyboard.pressedKeys.filter(_=>_!=v.code),r(v)&&(X.keyboard.control=!1,X.keyboard.pressedKeys=[]),n(v)&&(X.keyboard.alt=!1),a(v)&&(X.keyboard.shift=!1),i(v)&&(X.keyboard.left=!1),o(v)&&(X.keyboard.right=!1),c(v)&&(X.keyboard.up=!1),l(v)&&(X.keyboard.down=!1)}),window.addEventListener("pointerdown",v=>{X.pointer.x=-.5*X.screen.width+v.pageX,X.pointer.y=.5*X.screen.height-v.pageY,u(v)&&(X.pointer.down=!0,X.pointer.isDown=!0),m(v)&&(X.pointer.rightDown=!0)}),window.addEventListener("pointermove",v=>{X.pointer.move=!0,X.pointer.x=-.5*X.screen.width+v.pageX,X.pointer.y=.5*X.screen.height-v.pageY}),window.addEventListener("pointerup",v=>{u(v)&&(X.pointer.up=!0,X.pointer.isDown=!1),m(v)&&(X.pointer.rightUp=!0)}),window.addEventListener("pointercancel",v=>{u(v)&&(X.pointer.up=!0,X.pointer.isDown=!1),m(v)&&(X.pointer.rightUp=!0)}),window.addEventListener("wheel",v=>{X.wheel.deltaX=v.deltaX,X.wheel.deltaY=v.deltaY}),window.addEventListener("blur",v=>{d(X)}),window.addEventListener("focus",v=>{d(X)}),window.addEventListener("visibilitychange",v=>{d(X)}),window.addEventListener("resize",()=>{X.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(v){const _=v/1e3,x=_-X.clock;x<.009||(X.dt=x,X.clock=_,e.ports.tick.send(X),p(X)),window.requestAnimationFrame(g)}},ew=Xx.Main.init({node:document.querySelector("#app div"),flags:{inputs:X}});Qx(ew);
