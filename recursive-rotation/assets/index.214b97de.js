const rs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};rs();function dn(e,r,n){return n.a=e,n.f=r,n}function v(e){return dn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return dn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function J(e){return dn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Ve(e){return dn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function vr(e){return dn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function jt(e){return dn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function be(e){return dn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,a,i,o,c,l,u)}}}}}}}})}function co(e){return dn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return e(r,n,a,i,o,c,l,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function F(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Xe(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function lo(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function Ga(e,r,n,a,i,o,c,l,u){return e.a===8?e.f(r,n,a,i,o,c,l,u):e(r)(n)(a)(i)(o)(c)(l)(u)}function ns(e,r,n,a,i,o,c,l,u,m){return e.a===9?e.f(r,n,a,i,o,c,l,u,m):e(r)(n)(a)(i)(o)(c)(l)(u)(m)}var as=[];function ts(e){return e.length}var is=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),os=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),cs=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var ls=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+us()),r});function us(e){return"<internals>"}function ca(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ce(e,r){for(var n,a=[],i=uo(e,r,0,a);i&&(n=a.pop());i=uo(n.a,n.b,0,a));return i}function uo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ca(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=Su(e),r=Su(r));for(var i in e)if(!uo(e[i],r[i],n+1,a))return!1;return!0}v(ce);v(function(e,r){return!ce(e,r)});function le(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=le(e.a,r.a))||(n=le(e.b,r.b))?n:le(e.c,r.c);for(;e.b&&r.b&&!(n=le(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return le(e,r)<0});v(function(e,r){return le(e,r)<1});v(function(e,r){return le(e,r)>0});v(function(e,r){return le(e,r)>=0});var $s=v(function(e,r){var n=le(e,r);return n<0?Lu:n?rg:Cu}),Wa=0;function z(e,r){return{a:e,b:r}}function E(e,r,n){return{a:e,b:r,c:n}}function Ir(e){return e}function Te(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(j);function j(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Er(e.a,r);return n}var D={$:0};function Er(e,r){return{$:1,a:e,b:r}}var vs=v(Er);function $(e){for(var r=D,n=e.length;n--;)r=Er(e[n],r);return r}function Nt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fs=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});J(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Ve(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return $(o)});vr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(F(e,r.a,n.a,a.a,i.a,o.a));return $(c)});v(function(e,r){return $(Nt(r).sort(function(n,a){return le(e(n),e(a))}))});v(function(e,r){return $(Nt(r).sort(function(n,a){var i=t(e,n,a);return i===Cu?0:i===Lu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ms=v(Math.pow);v(function(e,r){return r%e});var ss=v(function(e,r){var n=r%e;return e===0?ca(11):n>0&&e<0||n<0&&e>0?n+e:n}),ds=Math.PI,ps=Math.cos,gs=Math.sin;v(Math.atan2);function hs(e){return e}function bs(e){return e===1/0||e===-1/0}var _s=Math.ceil,xs=Math.floor,ws=Math.round,ys=Math.sqrt,Vl=Math.log,Ss=isNaN;function Cs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ls=v(function(e,r){return e+r});function zs(e){var r=e.charCodeAt(0);return isNaN(r)?U:N(55296<=r&&r<=56319?z(Ir(e[0]+e[1]),e.slice(2)):z(Ir(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ps(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Ir(r[i]+r[i+1])),i+=2;continue}a[i]=e(Ir(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(Ir(o))&&n.push(o)}return n.join("")});function Ms(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,Ir(o),r)}return r});var Ts=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Ir(i),r)}return r}),ks=v(function(e,r){return r.split(e)}),Ds=v(function(e,r){return r.join(e)}),Fs=T(function(e,r,n){return n.slice(e,r)});function As(e){return $(e.trim().split(/\s+/g))}function Is(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Ir(a)))return!0}return!1});var Es=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Ir(a)))return!1}return!0}),Bs=v(function(e,r){return r.indexOf(e)>-1}),Vs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Rs=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Rl(e){return e+""}function Us(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return U;r=10*r+o-48}return i==a?U:N(n==45?-r:r)}function js(e){if(e.length===0||/[\sxbo]/.test(e))return U;var r=+e;return r===r?N(r):U}function Ns(e){return Nt(e).join("")}function Hs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Gs(e){return Ir(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Ws(e){return{$:0,a:e}}function Os(e){return{$:1,a:e}}function $o(e){return{$:2,b:e}}var qs=$o(function(e){return typeof e=="boolean"?Ie(e):Br("a BOOL",e)}),Js=$o(function(e){return typeof e=="number"?Ie(e):Br("a FLOAT",e)}),Ys=$o(function(e){return typeof e=="string"?Ie(e):e instanceof String?Ie(e+""):Br("a STRING",e)});function Xs(e){return{$:3,b:e}}var Ks=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function pn(e,r){return{$:9,f:e,g:r}}var Zs=v(function(e,r){return{$:10,b:r,h:e}}),Qs=v(function(e,r){return pn(e,[r])}),ed=T(function(e,r,n){return pn(e,[r,n])});J(function(e,r,n,a){return pn(e,[r,n,a])});Ve(function(e,r,n,a,i){return pn(e,[r,n,a,i])});vr(function(e,r,n,a,i,o){return pn(e,[r,n,a,i,o])});jt(function(e,r,n,a,i,o,c){return pn(e,[r,n,a,i,o,c])});be(function(e,r,n,a,i,o,c,l){return pn(e,[r,n,a,i,o,c,l])});co(function(e,r,n,a,i,o,c,l,u){return pn(e,[r,n,a,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return hr(e,n)}catch(a){return Ze(t(To,"This is not valid JSON! "+a.message,Xr(r)))}});var Ul=v(function(e,r){return hr(e,ua(r))});function hr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ie(e.c):Br("null",r);case 3:return Ht(r)?jl(e.b,r,$):Br("a LIST",r);case 4:return Ht(r)?jl(e.b,r,rd):Br("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Br("an OBJECT with a field named `"+n+"`",r);var a=hr(e.b,r[n]);return kr(a)?a:Ze(t(zu,n,a.a));case 7:var i=e.e;if(!Ht(r))return Br("an ARRAY",r);if(i>=r.length)return Br("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=hr(e.b,r[i]);return kr(a)?a:Ze(t(Pu,i,a.a));case 8:if(typeof r!="object"||r===null||Ht(r))return Br("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var a=hr(e.b,r[c]);if(!kr(a))return Ze(t(zu,c,a.a));o=Er(z(c,a.a),o)}return Ie(rr(o));case 9:for(var l=e.f,u=e.g,m=0;m<u.length;m++){var a=hr(u[m],r);if(!kr(a))return a;l=l(a.a)}return Ie(l);case 10:var a=hr(e.b,r);return kr(a)?hr(e.h(a.a),r):a;case 11:for(var d=D,p=e.g;p.b;p=p.b){var a=hr(p.a,r);if(kr(a))return a;d=Er(a.a,d)}return Ze(ng(rr(d)));case 1:return Ze(t(To,e.a,Xr(r)));case 0:return Ie(e.a)}}function jl(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=hr(e,r[o]);if(!kr(c))return Ze(t(Pu,o,c.a));i[o]=c.a}return Ie(n(i))}function Ht(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function rd(e){return t(gg,e.length,function(r){return e[r]})}function Br(e,r){return Ze(t(To,"Expecting "+e,Xr(r)))}function la(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return la(e.b,r.b);case 6:return e.d===r.d&&la(e.b,r.b);case 7:return e.e===r.e&&la(e.b,r.b);case 9:return e.f===r.f&&Nl(e.g,r.g);case 10:return e.h===r.h&&la(e.b,r.b);case 11:return Nl(e.g,r.g)}}function Nl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!la(e[a],r[a]))return!1;return!0}var nd=v(function(e,r){return JSON.stringify(ua(r),null,e)+""});function Xr(e){return e}function ua(e){return e}function ad(){return[]}function td(){return{}}var id=T(function(e,r,n){return n[e]=ua(r),n});function od(e){return v(function(r,n){return n.push(ua(e(r))),n})}function Vn(e){return{$:0,a:e}}function cd(e){return{$:1,a:e}}function Kr(e){return{$:2,b:e,c:null}}var vo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ld(e){return{$:5,b:e}}var ud=0;function fo(e){var r={$:0,e:ud++,f:e,g:null,h:[]};return so(r),r}function Hl(e){return Kr(function(r){r(Vn(fo(e)))})}function Gl(e,r){e.h.push(r),so(e)}var $d=v(function(e,r){return Kr(function(n){Gl(e,r),n(Vn(Wa))})}),mo=!1,Wl=[];function so(e){if(Wl.push(e),!mo){for(mo=!0;e=Wl.shift();)vd(e);mo=!1}}function vd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,so(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}J(function(e,r,n,a){return po(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function po(e,r,n,a,i,o){var c=t(Ul,e,Xr(r?r.flags:void 0));kr(c)||ca(2);var l={},u=n(c.a),m=u.a,d=o(g,m),p=fd(l,g);function g(f,_){var w=t(a,f,m);d(m=w.a,_),Jl(l,w.b,i(m))}return Jl(l,u.b,i(m)),p?{ports:p}:{}}var Vr={};function fd(e,r){var n;for(var a in Vr){var i=Vr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=sd(i,r)}return n}function md(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function sd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l(u){return t(vo,l,ld(function(m){var d=m.a;return m.$===0?b(i,n,d,u):o&&c?P(a,n,d.i,d.j,u):b(a,n,o?d.i:d.j,u)}))}return n.h=fo(t(vo,l,e.b))}var dd=v(function(e,r){return Kr(function(n){e.g(r),n(Vn(Wa))})});v(function(e,r){return t($d,e.h,{$:0,a:r})});function Ol(e){return function(r){return{$:1,k:e,l:r}}}function pd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ql=[],go=!1;function Jl(e,r,n){if(ql.push({p:e,q:r,r:n}),!go){go=!0;for(var a;a=ql.shift();)gd(a.p,a.q,a.r);go=!1}}function gd(e,r,n){var a={};Gt(!0,r,a,null),Gt(!1,n,a,null);for(var i in e)Gl(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Gt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=hd(e,i,a,r.l);n[i]=bd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Gt(e,c.a,n,a);return;case 3:Gt(e,r.o,n,{s:r.n,t:a});return}}function hd(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Vr[r].e:Vr[r].f;return t(o,i,a)}function bd(e,r,n){return n=n||{i:D,j:D},e?n.i=Er(r,n.i):n.j=Er(r,n.j),n}function _d(e){Vr[e]&&ca(3)}v(function(e,r){return r});function xd(e,r){return _d(e),Vr[e]={f:wd,u:r,a:yd},Ol(e)}var wd=v(function(e,r){return function(n){return e(r(n))}});function yd(e,r){var n=D,a=Vr[e].u,i=Vn(null);Vr[e].b=i,Vr[e].c=T(function(c,l,u){return n=l,i});function o(c){var l=t(Ul,a,Xr(c));kr(l)||ca(4,e,l.a);for(var u=l.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Wt,Zr=typeof document!="undefined"?document:{};function ho(e,r){e.appendChild(r)}J(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(hn(e,function(){}),i),{}});function bo(e){return{$:0,a:e}}var Yl=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:xo(n),e:i,f:e,b:o}})}),Qr=Yl(void 0),Sd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:xo(n),e:i,f:e,b:o}})}),Cd=Sd(void 0);function Ld(e,r,n,a){return{$:3,d:xo(e),g:r,h:n,i:a}}var zd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return gn([e,r],function(){return e(r)})});T(function(e,r,n){return gn([e,r,n],function(){return t(e,r,n)})});var Pd=J(function(e,r,n,a){return gn([e,r,n,a],function(){return b(e,r,n,a)})});Ve(function(e,r,n,a,i){return gn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});vr(function(e,r,n,a,i,o){return gn([e,r,n,a,i,o],function(){return F(e,r,n,a,i,o)})});jt(function(e,r,n,a,i,o,c){return gn([e,r,n,a,i,o,c],function(){return Xe(e,r,n,a,i,o,c)})});be(function(e,r,n,a,i,o,c,l){return gn([e,r,n,a,i,o,c,l],function(){return lo(e,r,n,a,i,o,c,l)})});co(function(e,r,n,a,i,o,c,l,u){return gn([e,r,n,a,i,o,c,l,u],function(){return Ga(e,r,n,a,i,o,c,l,u)})});var Xl=v(function(e,r){return{$:"a0",n:e,o:r}}),Md=v(function(e,r){return{$:"a1",n:e,o:r}}),_o=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Kl(e){return e=="script"?"p":e}function Td(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function kd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Dd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Zl(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Fd=v(function(e,r){return r.$==="a0"?t(Xl,r.n,Ad(e,r.o)):r});function Ad(e,r){var n=Bo(r);return{$:r.$,a:n?b(hg,n<3?Id:Ed,nr(e),r.a):t(Xt,e,r.a)}}var Id=v(function(e,r){return z(e(r.a),r.b)}),Ed=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function xo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Ql(r,i,ua(o)):r[i]=ua(o);continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?Ql(c,i,o):c[i]=o}return r}function Ql(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hn(e,r){var n=e.$;if(n===5)return hn(e.k||(e.k=e.m()),r);if(n===0)return Zr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=hn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return wo(c,r,e.d),c}var c=e.f?Zr.createElementNS(e.f,e.c):Zr.createElement(e.c);Wt&&e.c=="a"&&c.addEventListener("click",Wt(c)),wo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)ho(c,hn(n===1?l[u]:l[u].b,r));return c}function wo(e,r,n){for(var a in n){var i=n[a];a==="a1"?Bd(e,i):a==="a0"?Ud(e,r,i):a==="a3"?Vd(e,i):a==="a4"?Rd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Bd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Vd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Rd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Ud(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=jd(r,o),e.addEventListener(i,c,yo&&{passive:Bo(o)<2}),a[i]=c}}var yo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yo=!0}}))}catch{}function jd(e,r){function n(a){var i=n.q,o=hr(i.a,a);if(!!kr(o)){for(var c=Bo(i),l=o.a,u=c?c<3?l.a:l.aA:l,m=c==1?l.b:c==3&&l.dG,d=(m&&a.stopPropagation(),(c==2?l.b:c==3&&l.dv)&&a.preventDefault(),e),p,g;p=d.j;){if(typeof p=="function")u=p(u);else for(var g=p.length;g--;)u=p[g](u);d=d.p}d(u,m)}}return n.q=r,n}function Nd(e,r){return e.$==r.$&&la(e.a,r.a)}function eu(e,r){var n=[];return Tr(e,r,n,0),n}function Ke(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Tr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Xd(r),o=1;else{Ke(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,m=u===l.length;m&&u--;)m=c[u]===l[u];if(m){r.k=e.k;return}r.k=r.m();var d=[];Tr(e.k,r.k,d,0),d.length>0&&Ke(n,1,a,d);return;case 4:for(var p=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var w=r.k;w.$===4;)f=!0,typeof g!="object"?g=[g,w.j]:g.push(w.j),w=w.k;if(f&&p.length!==g.length){Ke(n,0,a,r);return}(f?!Hd(p,g):p!==g)&&Ke(n,2,a,g),Tr(_,w,n,a+1);return;case 0:e.a!==r.a&&Ke(n,3,a,r.a);return;case 1:ru(e,r,n,a,Gd);return;case 2:ru(e,r,n,a,Wd);return;case 3:if(e.h!==r.h){Ke(n,0,a,r);return}var y=So(e.d,r.d);y&&Ke(n,4,a,y);var S=r.i(e.g,r.g);S&&Ke(n,5,a,S);return}}}function Hd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ru(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ke(n,0,a,r);return}var o=So(e.d,r.d);o&&Ke(n,4,a,o),i(e,r,n,a)}function So(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=So(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Nd(c,l)||(a=a||{},a[i]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Gd(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Ke(n,6,a,{v:l,i:c-l}):c<l&&Ke(n,7,a,{v:c,e:o});for(var u=c<l?c:l,m=0;m<u;m++){var d=i[m];Tr(d,o[m],n,++a),a+=d.b||0}}function Wd(e,r,n,a){for(var i=[],o={},c=[],l=e.e,u=r.e,m=l.length,d=u.length,p=0,g=0,f=a;p<m&&g<d;){var _=l[p],w=u[g],y=_.a,S=w.a,x=_.b,C=w.b,I=void 0,O=void 0;if(y===S){f++,Tr(x,C,i,f),f+=x.b||0,p++,g++;continue}var K=l[p+1],G=u[g+1];if(K){var Y=K.a,X=K.b;O=S===Y}if(G){var V=G.a,ne=G.b;I=y===V}if(I&&O){f++,Tr(x,ne,i,f),Oa(o,i,y,C,g,c),f+=x.b||0,f++,qa(o,i,y,X,f),f+=X.b||0,p+=2,g+=2;continue}if(I){f++,Oa(o,i,S,C,g,c),Tr(x,ne,i,f),f+=x.b||0,p+=1,g+=2;continue}if(O){f++,qa(o,i,y,x,f),f+=x.b||0,f++,Tr(X,C,i,f),f+=X.b||0,p+=2,g+=1;continue}if(K&&Y===V){f++,qa(o,i,y,x,f),Oa(o,i,S,C,g,c),f+=x.b||0,f++,Tr(X,ne,i,f),f+=X.b||0,p+=2,g+=2;continue}break}for(;p<m;){f++;var _=l[p],x=_.b;qa(o,i,_.a,x,f),f+=x.b||0,p++}for(;g<d;){var ve=ve||[],w=u[g];Oa(o,i,w.a,w.b,void 0,ve),g++}(i.length>0||c.length>0||ve)&&Ke(n,8,a,{w:i,x:c,y:ve})}var nu="_elmW6BL";function Oa(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Tr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Oa(e,r,n+nu,a,i,o)}function qa(e,r,n,a,i){var o=e[n];if(!o){var c=Ke(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Tr(a,o.z,l,i),Ke(r,9,i,{w:l,A:o});return}qa(e,r,n+nu,a,i)}function au(e,r,n,a){Ja(e,r,n,0,0,r.b,a)}function Ja(e,r,n,a,i,o,c){for(var l=n[a],u=l.r;u===i;){var m=l.$;if(m===1)au(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var d=l.s.w;d.length>0&&Ja(e,r,d,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var p=l.s;if(p){p.A.s=e;var d=p.w;d.length>0&&Ja(e,r,d,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return Ja(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,w=e.childNodes,y=0;y<_.length;y++){i++;var S=g===1?_[y]:_[y].b,x=i+(S.b||0);if(i<=u&&u<=x&&(a=Ja(w[y],S,n,a,i,x,c),!(l=n[a])||(u=l.r)>o))return a;i=x}return a}function tu(e,r,n,a){return n.length===0?e:(au(e,r,n,a),Ot(e,n))}function Ot(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Od(i,a);i===e&&(e=o)}return e}function Od(e,r){switch(r.$){case 0:return qd(e,r.s,r.u);case 4:return wo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ot(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(hn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Ot(e,n.w),e;case 8:return Jd(e,r);case 5:return r.s(e);default:ca(10)}}function qd(e,r,n){var a=e.parentNode,i=hn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Jd(e,r){var n=r.s,a=Yd(n.y,r);e=Ot(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:hn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&ho(e,a),e}function Yd(e,r){if(!!e){for(var n=Zr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;ho(n,o.c===2?o.s:hn(o.z,r.u))}return n}}function Co(e){if(e.nodeType===3)return bo(e.textContent);if(e.nodeType!==1)return bo("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Er(t(Mr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Er(Co(m[a]),u);return b(Qr,l,r,u)}function Xd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Kd=J(function(e,r,n,a){return po(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=a.node,u=Co(l);return iu(o,function(m){var d=c(m),p=eu(u,d);l=tu(l,u,p,i),u=d})})});J(function(e,r,n,a){return po(r,a,e.gS,e.ii,e.hX,function(i,o){var c=e.dE&&e.dE(i),l=e.ik,u=Zr.title,m=Zr.body,d=Co(m);return iu(o,function(p){Wt=c;var g=l(p),f=Qr("body")(D)(g.fU),_=eu(d,f);m=tu(m,d,_,i),d=f,Wt=0,u!==g.id&&(Zr.title=u=g.id)})})});var qt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function iu(e,r){r(e);var n=0;function a(){n=n===1?0:(qt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&qt(a),n=2)}}v(function(e,r){return t(Ro,rt,Kr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Ro,rt,Kr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Ro,rt,Kr(function(){history.replaceState({},"",r),e()}))});var Zd={addEventListener:function(){},removeEventListener:function(){}},Qd=typeof window!="undefined"?window:Zd;T(function(e,r,n){return Hl(Kr(function(a){function i(o){fo(n(o))}return e.addEventListener(r,i,yo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=hr(e,r);return kr(n)?N(n.a):U});function ou(e,r){return Kr(function(n){qt(function(){var a=document.getElementById(e);n(a?Vn(r(a)):cd(bg(e)))})})}function ep(e){return Kr(function(r){qt(function(){r(Vn(e()))})})}v(function(e,r){return ou(r,function(n){return n[e](),Wa})});v(function(e,r){return ep(function(){return Qd.scroll(e,r),Wa})});T(function(e,r,n){return ou(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Wa})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var rp=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return U}});v(function(e,r){return r.match(e)!==null});var np=T(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var m=u.length-1,d=new Array(m);m>0;){var p=u[m];d[--m]=p?N(p):U}a.push(P(Tv,u[0],u.index,i,$(d))),l=r.lastIndex}return r.lastIndex=c,$(a)});J(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var m=arguments[l];u[--l]=m?N(m):U}return n(P(Tv,c,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,$(i)});var cu=0;function Ya(e,r){for(;r.b;r=r.b)e(r.a)}function Lo(e){for(var r=0;e.b;e=e.b)r++;return r}var ap=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},tp=Ve(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),ip=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),op=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),cp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),lp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),up=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$p=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),vp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),fp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),mp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},sp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},dp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},pp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},lu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},uu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},gp=function(e){e.gl.disable(e.gl.CULL_FACE)},hp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},bp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},_p=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},$u=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],xp=[sp,dp,pp,lu,uu,gp,hp,bp,_p];function vu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function wp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function fu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function yp(e,r,n,a){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,w,y,S){var x;if(i===1)for(x=0;x<_;x++)f[w++]=_===1?y[S]:y[S][x];else o.forEach(function(C){for(x=0;x<_;x++)f[w++]=_===1?y[C][S]:y[C][S][x]})}var u=fu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,d=u.size*u.arraySize*i,p=new u.type(Lo(n.b)*d);Ya(function(f){l(p,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=d},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function Sp(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Cp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Lo(r.b),indexBuffer:null,buffers:{}}}function Cp(e,r){var n=new Uint32Array(Lo(e)*r),a=0,i;return Ya(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function mu(e,r){return e+"#"+r}var su=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),lu(n),uu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=mu(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=cu++,m||(m=vu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var d;o.c.id?d=n.shaders[o.c.id]:o.c.id=cu++,d||(d=vu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=d);var p=wp(a,m,d);l={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Lp(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(p,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(p,u),_=a.getAttribLocation(p,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=mu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),zp(l.uniformSetters,o.e);var w=n.buffers.get(o.d);for(w||(w=Sp(a,o.d),n.buffers.set(o.d,w)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],_=l.activeAttributeLocations[u],w.buffers[f.name]===void 0&&(w.buffers[f.name]=yp(a,f,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,w.buffers[f.name]);var y=fu(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,x=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,x,S*C)}for(n.toggle=!n.toggle,Ya(o_(n),o.a),u=0;u<$u.length;u++){var I=n[$u[u]];I.toggle!==n.toggle&&I.enabled&&(xp[u](n),I.enabled=!1,I.toggle=n.toggle)}w.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,w.indexBuffer),a.drawElements(o.d.a.eS,w.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,w.numIndices)}}return Ya(i,e.g),r});function Lp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(f,_){var w=_.name,y=e.getUniformLocation(f,w);switch(_.type){case e.INT:return function(x){o[w]!==x&&(e.uniform1i(y,x),o[w]=x)};case e.FLOAT:return function(x){o[w]!==x&&(e.uniform1f(y,x),o[w]=x)};case e.FLOAT_VEC2:return function(x){o[w]!==x&&(e.uniform2f(y,x[0],x[1]),o[w]=x)};case e.FLOAT_VEC3:return function(x){o[w]!==x&&(e.uniform3f(y,x[0],x[1],x[2]),o[w]=x)};case e.FLOAT_VEC4:return function(x){o[w]!==x&&(e.uniform4f(y,x[0],x[1],x[2],x[3]),o[w]=x)};case e.FLOAT_MAT4:return function(x){o[w]!==x&&(e.uniformMatrix4fv(y,!1,new Float32Array(x)),o[w]=x)};case e.SAMPLER_2D:var S=c++;return function(x){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(x);C||(C=x.ge(e),l.textures.set(x,C)),e.bindTexture(e.TEXTURE_2D,C),o[w]!==x&&(e.uniform1i(y,S),o[w]=x)};case e.BOOL:return function(x){o[w]!==x&&(e.uniform1i(y,x),o[w]=x)};default:return function(){}}}for(var m={},d=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<d;p++){var g=e.getActiveUniform(i,p);m[a[g.name]||g.name]=u(i,g)}return m}function zp(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Pp=T(function(e,r,n){return Ld(r,{g:n,f:{},h:e},Ip,Ep)}),Mp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Tp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),kp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Dp=v(function(e,r){e.contextAttributes.antialias=!0}),Fp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ap=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ip(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ya(function(i){return t(i_,r,i)},e.h);var n=Zr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),ap(function(){return t(su,e,n)})):(n=Zr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ep(e,r){return r.f=e.f,su(r)}var Bp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Vp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Vp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var zo=new Float64Array(3),du=new Float64Array(3),pu=new Float64Array(3),Rp=T(function(e,r,n){return new Float64Array([e,r,n])}),Up=function(e){return e[0]},jp=function(e){return e[1]},Np=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Hp=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function gu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(gu);function hu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Jt(gu(e,r,n),n)}v(hu);function bu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Jt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/bu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Gp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Xa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Xa);function Po(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Po);v(function(e,r){var n,a=zo,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Xa(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Xa(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Xa(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Xa(r,a)+e[14])/n,i});var Wp=J(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Op=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},qp=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Jp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Jp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Yp=new Float64Array(16),Xp=new Float64Array(16),Kp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},Zp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function _u(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}vr(_u);J(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return _u(c,l,o,i,n,a)});function xu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}vr(xu);J(function(e,r,n,a){return xu(e,r,n,a,-1,1)});function wu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],m=e[6],d=e[7],p=e[8],g=e[9],f=e[10],_=e[11],w=e[12],y=e[13],S=e[14],x=e[15],C=r[0],I=r[1],O=r[2],K=r[3],G=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],ve=r[9],xe=r[10],fe=r[11],me=r[12],ye=r[13],se=r[14],Fe=r[15];return n[0]=a*C+l*I+p*O+w*K,n[1]=i*C+u*I+g*O+y*K,n[2]=o*C+m*I+f*O+S*K,n[3]=c*C+d*I+_*O+x*K,n[4]=a*G+l*Y+p*X+w*V,n[5]=i*G+u*Y+g*X+y*V,n[6]=o*G+m*Y+f*X+S*V,n[7]=c*G+d*Y+_*X+x*V,n[8]=a*ne+l*ve+p*xe+w*fe,n[9]=i*ne+u*ve+g*xe+y*fe,n[10]=o*ne+m*ve+f*xe+S*fe,n[11]=c*ne+d*ve+_*xe+x*fe,n[12]=a*me+l*ye+p*se+w*Fe,n[13]=i*me+u*ye+g*se+y*Fe,n[14]=o*me+m*ye+f*se+S*Fe,n[15]=c*me+d*ye+_*se+x*Fe,n}v(wu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],m=e[8],d=e[9],p=e[10],g=e[12],f=e[13],_=e[14],w=r[0],y=r[1],S=r[2],x=r[4],C=r[5],I=r[6],O=r[8],K=r[9],G=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=a*w+c*y+m*S,n[1]=i*w+l*y+d*S,n[2]=o*w+u*y+p*S,n[3]=0,n[4]=a*x+c*C+m*I,n[5]=i*x+l*C+d*I,n[6]=o*x+u*C+p*I,n[7]=0,n[8]=a*O+c*K+m*G,n[9]=i*O+l*K+d*G,n[10]=o*O+u*K+p*G,n[11]=0,n[12]=a*Y+c*X+m*V+g,n[13]=i*Y+l*X+d*V+f,n[14]=o*Y+u*X+p*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Jt(r,zo);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*u,n[2]=o*a*l-i*u,n[3]=0,n[4]=a*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+a*u,n[7]=0,n[8]=a*o*l+i*u,n[9]=i*o*l-a*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/bu(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),m=1-u,d=Math.sin(e),p=o*d,g=c*d,f=l*d,_=o*c*m,w=o*l*m,y=c*l*m,S=o*o*m+u,x=_+f,C=w-g,I=_-f,O=c*c*m+u,K=y+p,G=w+g,Y=y-p,X=l*l*m+u,V=n[0],ne=n[1],ve=n[2],xe=n[3],fe=n[4],me=n[5],ye=n[6],se=n[7],Fe=n[8],Me=n[9],Ye=n[10],In=n[11],ja=n[12],qr=n[13],Jr=n[14],oa=n[15];return a[0]=V*S+fe*x+Fe*C,a[1]=ne*S+me*x+Me*C,a[2]=ve*S+ye*x+Ye*C,a[3]=xe*S+se*x+In*C,a[4]=V*I+fe*O+Fe*K,a[5]=ne*I+me*O+Me*K,a[6]=ve*I+ye*O+Ye*K,a[7]=xe*I+se*O+In*K,a[8]=V*G+fe*Y+Fe*X,a[9]=ne*G+me*Y+Me*X,a[10]=ve*G+ye*Y+Ye*X,a[11]=xe*G+se*Y+In*X,a[12]=ja,a[13]=qr,a[14]=Jr,a[15]=oa,a});function Qp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(Qp);J(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function eg(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(eg);J(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],u=a[3],m=a[4],d=a[5],p=a[6],g=a[7],f=a[8],_=a[9],w=a[10],y=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=m,i[5]=d,i[6]=p,i[7]=g,i[8]=f,i[9]=_,i[10]=w,i[11]=y,i[12]=o*e+m*r+f*n+a[12],i[13]=c*e+d*r+_*n+a[13],i[14]=l*e+p*r+w*n+a[14],i[15]=u*e+g*r+y*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],m=r[3],d=r[4],p=r[5],g=r[6],f=r[7],_=r[8],w=r[9],y=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=m,n[4]=d,n[5]=p,n[6]=g,n[7]=f,n[8]=_,n[9]=w,n[10]=y,n[11]=S,n[12]=c*a+d*i+_*o+r[12],n[13]=l*a+p*i+w*o+r[13],n[14]=u*a+g*i+y*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=hu(e,r,zo),i=Jt(Po(n,a,du),du),o=Jt(Po(a,i,pu),pu),c=Yp,l=Xp;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,wu(c,l)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var M=vs,Yt=ls,yu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return b(Yt,e,l,m)}else{var u=c.a;return b(Yt,o,l,u)}});return b(Yt,o,b(Yt,e,r,i),a)}),Mo=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,u=b(e,a,i,b(Mo,e,r,c)),m=o;e=l,r=u,n=m;continue e}}),Su=function(e){return b(Mo,T(function(r,n,a){return t(M,z(r,n),a)}),D,e)},Cu=1,rg=2,Lu=0,Ze=function(e){return{$:1,a:e}},To=v(function(e,r){return{$:3,a:e,b:r}}),zu=v(function(e,r){return{$:0,a:e,b:r}}),Pu=v(function(e,r){return{$:1,a:e,b:r}}),Ie=function(e){return{$:0,a:e}},ng=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},U={$:1},ag=Es,tg=nd,k=Rl,ee=v(function(e,r){return t(Ds,e,Nt(r))}),ko=v(function(e,r){return $(t(ks,e,r))}),Mu=function(e){return t(ee,`
    `,t(ko,`
`,e))},Ae=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),Rn=function(e){return b(Ae,v(function(r,n){return n+1}),0,e)},ig=fs,og=T(function(e,r,n){e:for(;;)if(le(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),en=v(function(e,r){return b(og,e,r,D)}),Tu=v(function(e,r){return b(ig,e,t(en,0,Rn(r)-1),r)}),Rr=Hs,ku=function(e){var r=Rr(e);return 97<=r&&r<=122},Du=function(e){var r=Rr(e);return r<=90&&65<=r},cg=function(e){return ku(e)||Du(e)},lg=function(e){var r=Rr(e);return r<=57&&48<=r},ug=function(e){return ku(e)||Du(e)||lg(e)},rr=function(e){return b(Ae,M,D,e)},$a=zs,$g=v(function(e,r){return`

(`+(k(e+1)+(") "+Mu(vg(r))))}),vg=function(e){return t(fg,e,D)},fg=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var w=$a(n);if(w.$===1)return!1;var y=w.a,S=y.a,x=y.b;return cg(S)&&t(ag,ug,x)}(),o=i?"."+n:"['"+(n+"']"),c=a,l=t(M,o,r);e=c,r=l;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),c=a,l=t(M,m,r);e=c,r=l;continue e;case 2:var d=e.a;if(d.b)if(d.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",rr(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(k(Rn(d))+" ways:"));return t(ee,`

`,t(M,_,t(Tu,$g,d)))}else{var a=d.a,c=a,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",rr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",rr(r))+`:

    `):`Problem with the given value:

`}();return _+(Mu(t(tg,4,f))+(`

`+g))}}),fr=32,Do=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Fo=as,Ka=_s,Ao=v(function(e,r){return Vl(r)/Vl(e)}),Za=hs,Qa=Ka(t(Ao,2,fr)),Fu=P(Do,0,Qa,Fo,Fo),Au=is,Iu=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Eu=xs,Io=ts,br=v(function(e,r){return le(e,r)>0?e:r}),mg=function(e){return{$:0,a:e}},Eo=os,sg=v(function(e,r){e:for(;;){var n=t(Eo,fr,e),a=n.a,i=n.b,o=t(M,mg(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return rr(o)}}),Bu=function(e){var r=e.a;return r},dg=v(function(e,r){e:for(;;){var n=Ka(r/fr);if(n===1)return t(Eo,fr,e).a;var a=t(sg,e,D),i=n;e=a,r=i;continue e}}),Vu=v(function(e,r){if(r.n){var n=r.n*fr,a=Eu(t(Ao,fr,n-1)),i=e?rr(r.C):r.C,o=t(dg,i,r.n);return P(Do,Io(r.r)+n,t(br,5,a*Qa),o,r.r)}else return P(Do,Io(r.r),Qa,Fo,r.r)}),pg=Ve(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Vu,!1,{C:a,n:n/fr|0,r:i});var o=Iu(b(Au,fr,r,e)),c=e,l=r-fr,u=n,m=t(M,o,a),d=i;e=c,r=l,n=u,a=m,i=d;continue e}}),gg=v(function(e,r){if(e<=0)return Fu;var n=e%fr,a=b(Au,n,e-n,r),i=e-n-fr;return F(pg,r,i,e,D,a)}),kr=function(e){return!e.$},W=Zs,_e=qs,H=Ks,Re=Js,Ru=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),Xt=Qs,hg=ed,nr=Ws,Bo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},bg=Dr,Uu=vr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),_g=Bs,Un=Ps,va=Fs,et=v(function(e,r){return e<1?r:b(va,e,Un(r),r)}),Kt=Rs,Zt=function(e){return e===""},Qt=v(function(e,r){return e<1?"":b(va,0,e,r)}),ju=Us,Nu=Ve(function(e,r,n,a,i){if(Zt(i)||t(_g,"@",i))return U;var o=t(Kt,":",i);if(o.b){if(o.b.b)return U;var c=o.a,l=ju(t(et,c+1,i));if(l.$===1)return U;var u=l;return N(Xe(Uu,e,t(Qt,c,i),u,r,n,a))}else return N(Xe(Uu,e,i,U,r,n,a))}),Hu=J(function(e,r,n,a){if(Zt(a))return U;var i=t(Kt,"/",a);if(i.b){var o=i.a;return F(Nu,e,t(et,o,a),r,n,t(Qt,o,a))}else return F(Nu,e,"/",r,n,a)}),Gu=T(function(e,r,n){if(Zt(n))return U;var a=t(Kt,"?",n);if(a.b){var i=a.a;return P(Hu,e,N(t(et,i+1,n)),r,t(Qt,i,n))}else return P(Hu,e,U,r,n)});v(function(e,r){if(Zt(r))return U;var n=t(Kt,"#",r);if(n.b){var a=n.a;return b(Gu,e,N(t(et,a+1,r)),t(Qt,a,r))}else return b(Gu,e,U,r)});var xg=Vs,rt=function(e){},nt=Vn,wg=nt(0),Wu=J(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,m=l.b;if(m.b){var d=m.a,p=m.b,g=n>500?b(Ae,e,r,rr(p)):P(Wu,e,r,n+1,p);return t(e,i,t(e,c,t(e,u,t(e,d,g))))}else return t(e,i,t(e,c,t(e,u,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),Ge=T(function(e,r,n){return P(Wu,e,r,0,n)}),q=v(function(e,r){return b(Ge,v(function(n,a){return t(M,e(n),a)}),D,r)}),ei=vo,Vo=v(function(e,r){return t(ei,function(n){return nt(e(n))},r)}),yg=T(function(e,r,n){return t(ei,function(a){return t(ei,function(i){return nt(t(e,a,i))},n)},r)}),Sg=function(e){return b(Ge,yg(M),nt(D),e)},Cg=dd,Lg=v(function(e,r){var n=r;return Hl(t(ei,Cg(e),n))}),zg=T(function(e,r,n){return t(Vo,function(a){return 0},Sg(t(q,Lg(e),r)))}),Pg=T(function(e,r,n){return nt(0)}),Mg=v(function(e,r){var n=r;return t(Vo,e,n)});Vr.Task=md(wg,zg,Pg,Mg);var Tg=Ol("Task"),Ro=v(function(e,r){return Tg(t(Vo,e,r))}),kg=Kd,Dg=Cs,ri={$:1},Ou=function(e){return{$:2,a:e}},Uo={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),We=T(function(e,r,n){return r(e(n))}),jn=function(e){var r=e.b.s;return r.a},Fg=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return N(t(_r,r,{s:o,an:c,X:t(M,a,n)}))}else return U},ke=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ag=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dH;return(le(o+r.gp,jn(n).d1)>0?t(We,Fg,ke(t(_r,ri,i))):Dr)(t(_r,Ou({dH:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,m=t(Ru,l.gb,Te(r,{d1:l.d1+r.gp})),d=t(e,m,u);return t(_r,Uo,{s:z(m,d),an:D,X:t(M,i.s,i.X)})}}),qu=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),Ig=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(M,a,n);e=o,r=c,n=l;continue e}else return n}}),Eg=v(function(e,r){return rr(b(Ig,e,r,D))}),Ju=T(function(e,r,n){if(r<=0)return D;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,x=i.a,o=i.b,c=o.a;return $([x,c]);case 3:if(a.b.b.b.b){var l=a.b,x=l.a,u=l.b,c=u.a,m=u.b,d=m.a;return $([x,c,d])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var p=a.b,x=p.a,g=p.b,c=g.a,f=g.b,d=f.a,_=f.b,w=_.a,y=_.b;return e>1e3?t(M,x,t(M,c,t(M,d,t(M,w,t(Eg,r-4,y))))):t(M,x,t(M,c,t(M,d,t(M,w,b(Ju,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,x=S.a;return $([x])}}),Bg=v(function(e,r){return b(Ju,0,e,r)}),Vg=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=j(rr(n),j($([a]),i)),c=t(Bg,e,o),l=t(qu,e,o);if(l.b){var u=l.a,m=l.b;return t(_r,ri,{s:u,an:m,X:rr(c)})}else{var d=rr(c);if(d.b){var p=d.a,g=d.b;return t(_r,ri,{s:p,an:D,X:g})}else return r}}),Rg=function(e){var r=e.b;return t(_r,ri,r)},Ug=function(e){var r=e.b;return t(_r,Ou({dH:jn(e).d1}),r)},jg=function(e){var r=e.b;return t(_r,Uo,r)},Ng=v(function(e,r){switch(e.$){case 1:return Rg(r);case 2:return jg(r);case 3:return Ug(r);default:var n=e.a;return t(Vg,n,r)}}),ni=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Hg=v(function(e,r){return Te(r,{aN:e(r.aN)})}),Gg=function(e){return{$:3,a:e}},Wg=function(e){return{$:2,a:e}},Yu=v(function(e,r){return{$:0,a:e,b:r}}),Og=v(function(e,r){return{$:1,a:e,b:r}}),Ee=v(function(e,r){if(r.$)return U;var n=r.a;return N(e(n))}),de=function(e){return e<0?-e:e},Xu=js,qg=T(function(e,r,n){return t(ke,0/0,Xu(t(e,r,n)))}),at=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),Jg=Ts,Ku=function(e){return b(Jg,M,D,e)},Yg=v(function(e,r){var n=t(at,function(a){return a!=="0"&&a!=="."},Ku(r));return j(e&&n?"-":"",r)}),ae=Rl,jo=Ls,Zu=Gs,Qu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=$a(n);if(a.$===1)return"01";var i=a.a;return t(jo,"0",Qu(i))}else{var o=Rr(r);return o>=48&&o<57?t(jo,Zu(o+1),n):"0"}},No=bs,Xg=Ss,ai=function(e){return t(jo,e,"")},e$=T(function(e,r,n){return e<=0?n:b(e$,e>>1,j(r,r),e&1?j(n,r):n)}),tt=v(function(e,r){return b(e$,e,r,"")}),Ho=T(function(e,r,n){return j(n,t(tt,e-Un(n),ai(r)))}),Go=Ms,r$=function(e){var r=t(ko,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Kg=function(e){var r=t(ko,"e",ae(de(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(ke,0,ju(t(xg,"+",i)?t(et,1,i):i)),c=r$(n),l=c.a,u=c.b,m=j(l,u),d=o<0?t(ke,"0",t(Ee,function(p){var g=p.a,f=p.b;return g+("."+f)},t(Ee,ni(ai),$a(j(t(tt,de(o),"0"),m))))):b(Ho,o+1,"0",m);return j(e<0?"-":"",d)}else{var n=r.a;return j(e<0?"-":"",n)}else return""},Zg=T(function(e,r,n){if(No(n)||Xg(n))return ae(n);var a=n<0,i=r$(Kg(de(n))),o=i.a,c=i.b,l=Un(o)+r,u=j(t(tt,-l+1,"0"),b(Ho,l,"0",j(o,c))),m=Un(u),d=t(br,1,l),p=t(e,a,b(va,d,m,u)),g=b(va,0,d,u),f=p?Go(t(ke,"1",t(Ee,Qu,$a(Go(g))))):g,_=Un(f),w=f==="0"?f:r<=0?j(f,t(tt,de(r),"0")):le(r,Un(c))<0?b(va,0,_-r,f)+("."+b(va,_-r,_,f)):j(o+".",b(Ho,r,"0",c));return t(Yg,a,w)}),n$=Zg(v(function(e,r){var n=$a(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(Rr(i))})),Qg=qg(n$),e0=T(function(e,r,n){var a=t(Ao,10,de(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(Qg,i,n)}),a$=$s,ti=v(function(e,r){e:for(;;){if(r.$===-2)return U;var n=r.b,a=r.c,i=r.d,o=r.e,c=t(a$,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return N(a);default:var l=e,u=o;e=l,r=u;continue e}}}),te=Ve(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Ur={$:-2},fa=Ve(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,d=a.c,p=a.d,g=a.e;return F(te,0,r,n,F(te,1,m,d,p,g),F(te,1,o,c,l,u))}else return F(te,e,o,c,F(te,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,d=a.c,f=a.d;f.a;var _=f.b,w=f.c,y=f.d,S=f.e,g=a.e;return F(te,0,m,d,F(te,1,_,w,y,S),F(te,1,r,n,g,i))}else return F(te,e,r,n,a,i)}),Wo=T(function(e,r,n){if(n.$===-2)return F(te,0,e,r,Ur,Ur);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=t(a$,e,i);switch(u){case 0:return F(fa,a,i,o,b(Wo,e,r,c),l);case 1:return F(te,a,i,r,c,l);default:return F(fa,a,i,o,c,b(Wo,e,r,l))}}),ma=T(function(e,r,n){var a=b(Wo,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return F(te,1,i,o,c,l)}else{var u=a;return u}}),r0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},t$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,m=e.e;m.a;var d=m.b,p=m.c,g=m.d;g.a;var f=g.b,_=g.c,w=g.d,y=g.e,S=m.e;return F(te,0,f,_,F(te,1,n,a,F(te,0,o,c,l,u),w),F(te,1,d,p,y,S))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,u=x.e,C=e.e;C.a;var d=C.b,p=C.c,g=C.d,S=C.e;return F(te,1,n,a,F(te,0,o,c,l,u),F(te,0,d,p,g,S))}else return e},i$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,m=l.c,d=l.d,p=l.e,g=i.e,f=e.e;f.a;var _=f.b,w=f.c,y=f.d,S=f.e;return F(te,0,o,c,F(te,1,u,m,d,p),F(te,1,n,a,g,F(te,0,_,w,y,S)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,C=x.d,g=x.e,I=e.e;I.a;var _=I.b,w=I.c,y=I.d,S=I.e;return F(te,1,n,a,F(te,0,o,c,C,g),F(te,0,_,w,y,S))}else return e},n0=jt(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,m=o.d,d=o.e;return F(te,n,l,u,m,F(te,0,a,i,d,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var p=c.d;return p.a,i$(r)}else break e;else return c.a,c.d,i$(r);else break e;return r}}),ii=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,F(te,r,n,a,ii(i),l);var u=t$(e);if(u.$===-1){var m=u.a,d=u.b,p=u.c,g=u.d,f=u.e;return F(fa,m,d,p,ii(g),f)}else return Ur}else return F(te,r,n,a,ii(i),l)}else return Ur},it=v(function(e,r){if(r.$===-2)return Ur;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(le(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,F(te,n,a,i,t(it,e,o),c);var u=t$(r);if(u.$===-1){var m=u.a,d=u.b,p=u.c,g=u.d,f=u.e;return F(fa,m,d,p,t(it,e,g),f)}else return Ur}else return F(te,n,a,i,t(it,e,o),c);else return t(a0,e,lo(n0,e,r,n,a,i,o,c))}),a0=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,a)){var l=r0(c);if(l.$===-1){var u=l.b,m=l.c;return F(fa,n,u,m,o,ii(c))}else return Ur}else return F(fa,n,a,i,o,t(it,e,c))}else return Ur}),t0=v(function(e,r){var n=t(it,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return F(te,1,a,i,o,c)}else{var l=n;return l}}),oi=T(function(e,r,n){var a=r(t(ti,e,n));if(a.$)return t(t0,e,n);var i=a.a;return b(ma,e,i,n)}),i0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(oi,r,Ee(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(Og,z(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(oi,r,Ee(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(Yu,z(o,c),b(e0,o,c,n))}));case 3:var r=e.a,n=e.b;return t(oi,r,Ee(function(a){return a.$===3?Gg(n):a}));default:var r=e.a,n=e.b;return t(oi,r,Ee(function(a){return a.$===2?Wg(n):a}))}},o0=function(e){return Hg(i0(e))},c0=v(function(e,r){return t(q,o0(e),r)}),l0=v(function(e,r){return Te(r,{gb:t(c0,e,r.gb)})}),u0=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,Te(a,{s:t(ni,l0(e),a.s)}))}),Oo=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),$0=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,Te(i,{s:t(Oo,t(e,o.a,r),o)}))}),v0=J(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Te(a,{bw:!a.bw});case 2:var i=n.a;return Te(a,{R:b(Ag,e,i,a.R)});case 3:var o=n.a;return Te(a,{bp:o});case 4:var c=n.a;return Te(a,{R:t(u0,c,a.R)});case 5:var l=n.a;return Te(a,{R:b($0,r,l,a.R)});default:var u=n.a;return Te(a,{R:t(Ng,u,a.R)})}}),f0=v(function(e,r){return t(_r,Uo,{s:z(e,r(e)),an:D,X:D})}),m0=pd,o$=m0(D),s0=function(e){return{$:2,a:e}},ci=Xs,sa=Ys,d0=xd("tick",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(c){return nr({d1:c,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(c){return t(W,function(l){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(p){return nr({fJ:p,gd:d,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",ci(sa)))},t(H,"left",_e))},t(H,"pressedKeys",ci(sa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(c){return t(W,function(l){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re))))),p0=function(e){return e.dN,d0(s0)},g0=function(e){return{$:5,a:e}},h0={$:0},li=v(function(e,r){return e}),b0=function(e){var r=e.b.s;return r.b},_0=function(e){return{$:1,a:e}},x0=_0,c$=function(e){return{$:8,a:e}},pe=c$,ot=function(e){return{$:0,a:e}},ct=T(function(e,r,n){return e(r(n))}),w0=t(ct,ot,li),bn=w0,Ce=function(e){return{$:1,a:e}},rn=Ce,l$=v(function(e,r){return{$:9,a:e,b:r}}),Nn={$:0},u$=v(function(e,r){return r.$===3?Nn:t(l$,e,r)}),qo=function(e){return t(u$,4,e)},s={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},Jo=Xr,xr=v(function(e,r){return t(_o,e,Jo(r))}),wr=xr("className"),mr=function(e){return Ce(wr(e))},$$=v(function(e,r){return{$:2,a:e,b:r}}),y0=v(function(e,r){return{$:1,a:e,b:r}}),Je=function(e){return{$:0,a:e}},sr=2,S0={$:0},Hn=S0,C0={$:0},L0=s.fK+(" "+s.aw),z0=s.fK+(" "+s.gC),P0=s.fK+(" "+s.eY),M0=s.fK+(" "+s.eZ),T0=s.fK+(" "+s.af),k0=s.fK+(" "+s.hL),D0=function(e){switch(e){case 0:return T0;case 1:return L0;case 2:return k0;case 3:return z0;case 4:return M0;default:return P0}},v$=function(e){return{$:1,a:e}},Gn={$:0},Yo=function(e){return{$:1,a:e}},f$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return j(n,e);case 2:var a=r.a;return j(e,a);default:var n=r.a,a=r.b;return j(n,j(e,a))}}),m$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return j(t(q,function(o){return z(e,o)},a),r);case 2:var i=n.a;return j(r,t(q,function(o){return z(e,o)},i));default:var a=n.a,i=n.b;return j(t(q,function(o){return z(e,o)},a),j(r,t(q,function(o){return z(e,o)},i)))}}),ui=4,F0=function(e){return{$:0,a:e}},A0=function(e){return{$:1,a:e}},ue=function(e){return e>31?A0(1<<e-32):F0(1<<e)},s$=ue(41),d$=ue(40),p$=ue(42),g$=ue(43),da=Qr("div"),Xo=Ur,h$=Xo,jr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+jr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+jr(i))}},Le=ws,De=function(e){return k(Le(e*255))},Ko=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("mv-"+(De(n)+("-"+(De(a)+("-"+De(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,d=m.a,p=m.b,g=m.c,f=e.c,_=f.a,w=f.b,y=f.c,S=e.d;return N("tfrm-"+(De(c)+("-"+(De(l)+("-"+(De(u)+("-"+(De(d)+("-"+(De(p)+("-"+(De(g)+("-"+(De(_)+("-"+(De(w)+("-"+(De(y)+("-"+De(S))))))))))))))))))))}},lt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(t(ee,"-",t(q,jr,c.hB))+("-cols-"+(t(ee,"-",t(q,jr,c.ak))+("-space-x-"+(jr(c.hP.a)+("-space-y-"+jr(c.hP.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(k(l.af)+("-"+(k(l.ga)+("-"+(k(l.im)+("-"+k(l.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(q,function(d){var p=lt(d);if(p==="")return"";var g=p;return g+("-"+r)},m));default:var o=e.a;return t(ke,"",Ko(o))}},I0=v(function(e,r){var n=r;return b(ma,e,0,n)}),E0=v(function(e,r){var n=t(ti,e,r);return!n.$}),B0=v(function(e,r){var n=r;return t(E0,e,n)}),b$=v(function(e,r){var n=r.a,a=r.b,i=lt(e);return t(B0,i,n)?r:z(t(I0,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ut=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},V0=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),_n=v(function(e,r){return b(Ge,V0(e),D,r)}),pa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Le(r*255))+(","+k(Le(n*255))+(","+k(Le(a*255))+(","+(ae(i)+")")))))},Zo=function(e){return t(ee," ",t(_n,Dr,$([e.ej?N("inset"):U,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(pa(e.b6))])))},_$=function(e){return $([t(ut,L(s.ea)+":focus-within",t(_n,Dr,$([t(Ee,function(r){return t(re,"border-color",pa(r))},e.fW),t(Ee,function(r){return t(re,"background-color",pa(r))},e.fO),t(Ee,function(r){return t(re,"box-shadow",Zo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Oo,Za,t(ni,Za,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))]))),t(ut,L(s.fK)+":focus .focusable, "+(L(s.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(s.fK)+" .focusable-thumb"))),t(_n,Dr,$([t(Ee,function(r){return t(re,"border-color",pa(r))},e.fW),t(Ee,function(r){return t(re,"background-color",pa(r))},e.fO),t(Ee,function(r){return t(re,"box-shadow",Zo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Oo,Za,t(ni,Za,r.eV)),bi:r.bi}))},e.hH),N(t(re,"outline","none"))])))])},Nr=function(e){return Qr(Kl(e))},x$=v(function(e,r){return t(_o,kd(e),Zl(r))}),Qo=v(function(e,r){return{$:2,a:e,b:r}}),ec=function(e){return{$:6,a:e}},R=v(function(e,r){return{$:1,a:e,b:r}}),dr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),R0=v(function(e,r){return{$:3,a:e,b:r}}),w$=$([0,1,2,3,4,5]),U0=v(function(e,r){return r.b?b(Ge,M,r,e):e}),ar=function(e){return b(Ge,U0,D,e)},ga=v(function(e,r){return ar(t(q,e,r))}),j0=function(e){switch(e){case 0:return L(s.gc);case 1:return L(s.b9);case 2:return L(s.cb);case 3:return L(s.bt);case 4:return L(s.ca);default:return L(s.ax)}},$i=function(e){switch(e){case 0:return L(s.fH);case 1:return L(s.fA);case 2:return L(s.dY);case 3:return L(s.dX);case 4:return L(s.fB);default:return L(s.fC)}},$t=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,j0(n),i),t(R,L(s.fK),$([t(A,$i(n),o)]))])};return ec(t(ga,r,w$))},y$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,L(s.cZ),$([t(h,"z-index","0"),t(R,L(s.fQ),$([t(h,"z-index","-1")]))])),t(A,L(s.hG),$([t(R,L(s.Y),$([t(A,L(s.c$),$([t(h,"flex-grow","0")])),t(A,L(s.dP),$([t(h,"align-self","auto !important")]))]))])),t(R,L(s.c_),$([t(h,"height","auto")])),t(R,L(s.c$),$([t(h,"flex-grow","100000")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(R,L(s.fv),$([t(h,"width","100%")])),t(R,L(s.dO),$([t(h,"align-self","flex-start")])),$t(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(R,L(s.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),N0=function(e){var r=function(n){return $([t(R,L(s.fK),$([t(A,$i(n),e(n))]))])};return ec(t(ga,r,w$))},H0=function(){return $([0,1,2,3,4,5])}(),G0=$([t(dr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(dr,j(L(s.fK),j(L(s.hL),L(s.gN))),$([t(h,"display","block"),t(A,L(s.c$),$([t(R,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,L(s.dP),$([t(R,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(dr,L(s.fK)+":focus",$([t(h,"outline","none")])),t(dr,L(s.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,j(L(s.fK),L(s.c$)),$([t(h,"height","100%"),t(R,L(s.c$),$([t(h,"height","100%")]))])),t(R,L(s.gP),$([t(A,L(s.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(dr,L(s.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,L(s.hL),y$),ec(function(e){return t(q,e,H0)}(function(e){switch(e){case 0:return t(A,L(s.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(R,L(s.c$),$([t(h,"height","auto")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,L(s.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")])),t(R,L(s.c$),$([t(h,"height","auto")]))]));case 2:return t(A,L(s.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,L(s.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,L(s.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,L(s.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(R,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(dr,L(s.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,L(s.dQ),$([t(h,"flex-wrap","wrap")])),t(A,L(s.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,L(s.gf),$([t(h,"cursor","pointer")])),t(A,L(s.gg),$([t(h,"cursor","text")])),t(A,L(s.hn),$([t(h,"pointer-events","none !important")])),t(A,L(s.b4),$([t(h,"pointer-events","auto !important")])),t(A,L(s.a$),$([t(h,"opacity","0")])),t(A,L(s.aU),$([t(h,"opacity","1")])),t(A,L(j(s.gK,s.a$))+":hover",$([t(h,"opacity","0")])),t(A,L(j(s.gK,s.aU))+":hover",$([t(h,"opacity","1")])),t(A,L(j(s.gx,s.a$))+":focus",$([t(h,"opacity","0")])),t(A,L(j(s.gx,s.aU))+":focus",$([t(h,"opacity","1")])),t(A,L(j(s.cL,s.a$))+":active",$([t(h,"opacity","0")])),t(A,L(j(s.cL,s.aU))+":active",$([t(h,"opacity","1")])),t(A,L(s.fj),$([t(h,"transition",t(ee,", ",t(q,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,L(s.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,L(s.hE),$([t(h,"overflow-x","auto"),t(A,L(s.af),$([t(h,"flex-shrink","1")]))])),t(A,L(s.hF),$([t(h,"overflow-y","auto"),t(A,L(s.aw),$([t(h,"flex-shrink","1")])),t(A,L(s.hL),$([t(h,"flex-shrink","1")]))])),t(A,L(s.f7),$([t(h,"overflow","hidden")])),t(A,L(s.f8),$([t(h,"overflow-x","hidden")])),t(A,L(s.f9),$([t(h,"overflow-y","hidden")])),t(A,L(s.dO),$([t(h,"width","auto")])),t(A,L(s.b1),$([t(h,"border-width","0")])),t(A,L(s.fX),$([t(h,"border-style","dashed")])),t(A,L(s.fY),$([t(h,"border-style","dotted")])),t(A,L(s.fZ),$([t(h,"border-style","solid")])),t(A,L(s.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,L(s.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,L(s.hL),y$),t(A,L(s.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(R,L(s.fK),$([t(h,"flex-basis","0%"),t(A,L(s.fu),$([t(h,"flex-basis","auto")])),t(A,L(s.et),$([t(h,"flex-basis","auto")]))])),t(R,L(s.c$),$([t(h,"align-self","stretch !important")])),t(R,L(s.ef),$([t(h,"align-self","stretch !important")])),t(R,L(s.dP),$([t(h,"flex-grow","100000")])),t(R,L(s.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(R,"u:first-of-type."+s.fG,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fB),$([t(h,"margin-left","auto !important")]))])),t(R,"s:last-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fB),$([t(h,"margin-right","auto !important")]))])),t(R,"s:only-of-type."+s.fE,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fG+(" ~ s."+s.fE)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return z($([t(h,"justify-content","flex-end")]),D);case 3:return z($([t(h,"justify-content","flex-start")]),D);case 4:return z($([t(h,"justify-content","center")]),D);default:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,L(s.hO),$([t(h,"justify-content","space-between")])),t(A,L(s.ci),$([t(h,"align-items","baseline")]))])),t(A,L(s.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(R,L(s.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,L(s.ee),$([t(h,"flex-basis","auto")]))])),t(R,L(s.c$),$([t(h,"flex-grow","100000")])),t(R,L(s.dP),$([t(h,"width","100%")])),t(R,L(s.fv),$([t(h,"width","100%")])),t(R,L(s.dO),$([t(h,"align-self","flex-start")])),t(R,"u:first-of-type."+s.fD,$([t(h,"flex-grow","1")])),t(R,"s:first-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(R,"s:last-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(R,"s:only-of-type."+s.fF,$([t(h,"flex-grow","1"),t(R,L(s.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(R,"s:last-of-type."+(s.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(R,"u:first-of-type."+(s.fD+(" ~ s."+s.fF)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return z($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return z($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return z($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return z($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return z($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return z($([t(h,"justify-content","center")]),D)}}),t(R,L(s.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,L(s.hO),$([t(h,"justify-content","space-between")]))])),t(A,L(s.gC),$([t(h,"display","-ms-grid"),t(R,".gp",$([t(R,L(s.fK),$([t(h,"width","100%")]))])),t(R0,z("display","grid"),$([z("display","grid")])),N0(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,L(s.eY),$([t(h,"display","block"),t(R,L(s.fK+":first-child"),$([t(h,"margin","0 !important")])),t(R,L(s.fK+($i(3)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),t(R,L(s.fK+($i(2)+(":first-child + ."+s.fK))),$([t(h,"margin","0 !important")])),$t(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return z(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,L(s.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,L(s.gW),$([t(A,L(s.hL),$([t(h,"flex-basis","auto")]))])),t(A,L(s.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(R,L(s.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,L(s.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,L(s.cZ),$([t(h,"z-index","0"),t(R,L(s.fQ),$([t(h,"z-index","-1")]))])),t(Qo,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(Qo,L(s.eZ),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(Qo,L(s.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,L(s.fu),$([t(h,"display","inline-block")])),t(A,L(s.gP),$([t(h,"display","flex")])),t(A,L(s.fQ),$([t(h,"display","flex")])),t(A,L(s.fy),$([t(h,"display","flex")])),t(A,L(s.fR),$([t(h,"display","flex")])),t(A,L(s.hh),$([t(h,"display","flex")])),t(A,L(s.hg),$([t(h,"display","flex")])),t(R,L(s.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(R,L(s.af),$([t(h,"display","inline")])),t(R,L(s.aw),$([t(h,"display","inline-flex")])),t(R,L(s.gC),$([t(h,"display","inline-grid")])),$t(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([t(h,"float","right")]));case 3:return z(D,$([t(h,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,L(s.ia),$([t(h,"font-weight","100")])),t(A,L(s.h1),$([t(h,"font-weight","200")])),t(A,L(s.h5),$([t(h,"font-weight","300")])),t(A,L(s.h7),$([t(h,"font-weight","400")])),t(A,L(s.h6),$([t(h,"font-weight","500")])),t(A,L(s.h9),$([t(h,"font-weight","600")])),t(A,L(s.fV),$([t(h,"font-weight","700")])),t(A,L(s.h0),$([t(h,"font-weight","800")])),t(A,L(s.h2),$([t(h,"font-weight","900")])),t(A,L(s.g2),$([t(h,"font-style","italic")])),t(A,L(s.hU),$([t(h,"text-decoration","line-through")])),t(A,L(s.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,j(L(s.ih),L(s.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,L(s.ib),$([t(h,"font-style","normal")])),t(A,L(s.h3),$([t(h,"text-align","justify")])),t(A,L(s.cF),$([t(h,"text-align","justify-all")])),t(A,L(s.h$),$([t(h,"text-align","center")])),t(A,L(s.h8),$([t(h,"text-align","right")])),t(A,L(s.h4),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),xn=function(e){return $([t(dr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(dr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},W0=ar($([t(q,function(e){return t(dr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(en,0,6)),t(q,function(e){return t(dr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(en,8,32)),t(q,function(e){return t(dr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(en,0,24)),$([t(dr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(dr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),xn("zero"),xn("onum"),xn("liga"),xn("dlig"),xn("ordn"),xn("tnum"),xn("afrc"),xn("frac")])),O0=`
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

`))),q0=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,J0=`
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
`,Y0=`
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
`,X0=`
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
`,K0="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(" { flex-basis: auto !important; } "+(L(s.fK)+(L(s.af)+(" > "+(L(s.fK)+(L(s.b8)+(" { flex-basis: auto !important; }}"+(q0+(J0+(X0+(Y0+O0))))))))))))))),ha=function(e){return t(ee,"",e)},ba=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),_a=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Te(o,{aE:t(M,z(c,l),o.aE)});case 3:var u=i.a,m=u.a,d=u.b,p=i.b;return Te(o,{G:t(M,{b5:`
}`,G:D,aE:p,ag:"@supports ("+(m+(":"+(d+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return Te(o,{G:t(M,t(_a,t(ba,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,w=i.b;return Te(o,{G:t(M,t(_a,t(ba,n.ag+(" > "+_),""),w),o.G)});case 2:var _=i.a,w=i.b;return Te(o,{G:t(M,t(_a,t(ba,n.ag+(" "+_),""),w),o.G)});case 4:var y=i.a,S=i.b;return Te(o,{G:t(M,t(_a,t(ba,j(n.ag,y),""),S),o.G)});default:var x=i.a;return Te(o,{G:t(M,t(_a,t(ba,n.ag,""),x),o.G)})}});return b(Ge,a,n,r)}),Z0=function(e){var r=function(i){return ha(t(q,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},a=function(i){var o=i;return j(n(o),ha(t(q,a,o.G)))};return ha(t(q,a,b(Ge,v(function(i,o){var c=i.a,l=i.b;return t(M,t(_a,t(ba,c,""),l),o)}),D,e)))},S$=j(K0,Z0(j(G0,W0))),wn=bo,C$=function(e){var r=e.eS;switch(r){case 0:return b(Nr,"div",D,$([b(Nr,"style",D,$([wn(S$)]))]));case 1:return wn("");default:return b(Nr,"elm-ui-static-rules",$([t(x$,"rules",Jo(S$))]),D)}},Q0=v(function(e,r){return Xr(b(Ae,od(e),ad(),r))}),eh=function(e){return Xr(b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(id,a,i,n)}),td(),e))},rh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},nh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},ah=function(e){if(e.$===5){var r=e.a;return t(at,nh,r.fo)}else return!1},xa=v(function(e,r){return le(e,r)<0?e:r}),vt=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),ze=J(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ae,vt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ae,vt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ae,vt(!1),"",a)+`
}`))])}case 0:var c=b(Ae,vt(!1),"",a);return $([n+("-fs:focus {"+(c+`
}`)),"."+(s.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(s.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(b(Ae,vt(!1),"",a)+`
}`))])}}),th=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},ih=function(e){if(e.$===5){var r=e.a;return N(t(ee,", ",t(q,th,r.fo)))}else return U},oh=function(e){switch(e.$){case 0:return U;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,d=m.a,p=m.b,g=m.c,f=e.c,_=f.a,w=f.b,y=f.c,S=e.d,x="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(d)+(", "+(ae(p)+(", "+(ae(g)+")"))))),I="rotate3d("+(ae(_)+(", "+(ae(w)+(", "+(ae(y)+(", "+(ae(S)+"rad)")))))));return N(x+(" "+(C+(" "+I))))}},rc=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(ze,e,n,a,i);case 13:var o=r.a,c=r.b;return P(ze,e,n,"."+o,$([t(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,u=t(br,0,t(xa,1,1-l));return P(ze,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return P(ze,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,d=r.b,p=t(ee,", ",t(_n,ih,d)),g=$([t(re,"font-family",t(ee,", ",t(q,rh,d))),t(re,"font-feature-settings",p),t(re,"font-variant",t(at,ah,d)?"small-caps":"normal")]);return P(ze,e,n,"."+o,g);case 3:var f=r.a,c=r.b,_=r.c;return P(ze,e,n,"."+f,$([t(re,c,_)]));case 4:var f=r.a,c=r.b,w=r.c;return P(ze,e,n,"."+f,$([t(re,c,pa(w))]));case 5:var y=r.a,S=r.b,x=r.c,C=k(x)+"px",I=k(S)+"px",O="."+s.af,K="."+(s.dQ+O),G="."+s.dY,Y="."+s.eZ,X="."+s.eY,V="."+s.dX,ne=ae(x/2)+"px",ve=ae(S/2)+"px",xe="."+s.aw,f="."+y,fe="."+s.fK;return ar($([P(ze,e,n,f+(O+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-left",I)])),P(ze,e,n,f+(K+(" > "+fe)),$([t(re,"margin",ne+(" "+ve))])),P(ze,e,n,f+(xe+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-top",C)])),P(ze,e,n,f+(X+(" > "+(fe+(" + "+fe)))),$([t(re,"margin-top",C)])),P(ze,e,n,f+(X+(" > "+V)),$([t(re,"margin-right",I)])),P(ze,e,n,f+(X+(" > "+G)),$([t(re,"margin-left",I)])),P(ze,e,n,j(f,Y),$([t(re,"line-height","calc(1em + "+(k(x)+"px)"))])),P(ze,e,n,"textarea"+(fe+f),$([t(re,"line-height","calc(1em + "+(k(x)+"px)")),t(re,"height","calc(100% + "+(k(x)+"px)"))])),P(ze,e,n,f+(Y+(" > "+V)),$([t(re,"margin-right",I)])),P(ze,e,n,f+(Y+(" > "+G)),$([t(re,"margin-left",I)])),P(ze,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(x/2|0))+"px")])),P(ze,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(x/2|0))+"px")]))]));case 7:var y=r.a,me=r.b,G=r.c,ye=r.d,V=r.e,f="."+y;return P(ze,e,n,f,$([t(re,"padding",ae(me)+("px "+(ae(G)+("px "+(ae(ye)+("px "+(ae(V)+"px")))))))]));case 6:var y=r.a,me=r.b,G=r.c,ye=r.d,V=r.e,f="."+y;return P(ze,e,n,f,$([t(re,"border-width",k(me)+("px "+(k(G)+("px "+(k(ye)+("px "+(k(V)+"px")))))))]));case 8:var se=r.a,Fe=T(function(He,Ha,Yr){e:for(;;)switch(Yr.$){case 0:var es=Yr.a;return k(es)+"px";case 1:var zr=z(He,Ha);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,"max-content";zr.a;var En=zr.b.a;return"minmax(max-content, "+(k(En)+"px)")}else if(zr.b.$===1){var Bn=zr.a.a;return zr.b,"minmax("+(k(Bn)+"px, max-content)")}else{var Bn=zr.a.a,En=zr.b.a;return"minmax("+(k(Bn)+("px, "+(k(En)+"px)")))}case 2:var Bl=Yr.a,Pr=z(He,Ha);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,k(Bl)+"fr";Pr.a;var En=Pr.b.a;return"minmax(max-content, "+(k(En)+"px)")}else if(Pr.b.$===1){var Bn=Pr.a.a;return Pr.b,"minmax("+(k(Bn)+("px, "+(k(Bl)+"frfr)")))}else{var Bn=Pr.a.a,En=Pr.b.a;return"minmax("+(k(Bn)+("px, "+(k(En)+"px)")))}case 3:var no=Yr.a,ao=Yr.b,to=N(no),io=Ha,oo=ao;He=to,Ha=io,Yr=oo;continue e;default:var no=Yr.a,ao=Yr.b,to=He,io=N(no),oo=ao;He=to,Ha=io,Yr=oo;continue e}}),Me=function(He){return b(Fe,U,U,He)};Me(se.hP.a);var Ye=Me(se.hP.b),In=function(He){return"grid-template-rows: "+(He+";")}(t(ee," ",t(q,Me,se.hB))),ja=function(He){return"-ms-grid-rows: "+(He+";")}(t(ee,Ye,t(q,Me,se.ak))),qr=function(He){return"-ms-grid-columns: "+(He+";")}(t(ee,Ye,t(q,Me,se.ak))),Jr="grid-row-gap:"+(Me(se.hP.b)+";"),oa="grid-column-gap:"+(Me(se.hP.a)+";"),Rt=function(He){return"grid-template-columns: "+(He+";")}(t(ee," ",t(q,Me,se.ak))),f=".grid-rows-"+(t(ee,"-",t(q,jr,se.hB))+("-cols-"+(t(ee,"-",t(q,jr,se.ak))+("-space-x-"+(jr(se.hP.a)+("-space-y-"+jr(se.hP.b))))))),Na=f+("{"+(Rt+(In+(oa+(Jr+"}"))))),eo="@supports (display:grid) {"+(Na+"}"),ro=f+("{"+(qr+(ja+"}")));return $([ro,eo]);case 9:var er=r.a,Ym=t(ee," ",$(["-ms-grid-row: "+(k(er.af)+";"),"-ms-grid-row-span: "+(k(er.gH)+";"),"-ms-grid-column: "+(k(er.ga)+";"),"-ms-grid-column-span: "+(k(er.im)+";")])),Xm=t(ee," ",$(["grid-row: "+(k(er.af)+(" / "+(k(er.af+er.gH)+";"))),"grid-column: "+(k(er.ga)+(" / "+(k(er.ga+er.im)+";")))])),f=".grid-pos-"+(k(er.af)+("-"+(k(er.ga)+("-"+(k(er.im)+("-"+k(er.gH))))))),Na=f+("{"+(Xm+"}")),eo="@supports (display:grid) {"+(Na+"}"),ro=f+("{"+(Ym+"}"));return $([ro,eo]);case 11:var f=r.a,Km=r.b,Zm=function(He){return b(rc,e,He,N(f))};return t(ga,Zm,Km);default:var Ar=r.a,_=oh(Ar),f=Ko(Ar),Ut=z(f,_);if(!Ut.a.$&&!Ut.b.$){var y=Ut.a.a,Qm=Ut.b.a;return P(ze,e,n,"."+y,$([t(re,"transform",Qm)]))}else return D}}),ch=v(function(e,r){return eh(t(q,function(n){var a=b(rc,e,n,U);return z(lt(n),t(Q0,Jo,a))},r))}),vi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(q,n,r))+"}"))}),L$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(vi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(vi,"."+(e+("."+(r+("> ."+(s.Y+(", ."+(e+(" ."+(r+(" > ."+s.Y)))))))))),i)])}),lh=T(function(e,r,n){var a=r.a,i=r.b,o=ce(e,n)?e:n+(" ."+e);return t(ee," ",j(b(L$,o,s.hM,i),b(L$,o,s.gy,a)))}),uh=v(function(e,r){var n=ce(e,r)?e:r+(" ."+e);return t(ee," ",$([t(vi,"."+(n+("."+(s.hM+(", "+("."+(n+(" ."+s.hM))))))),$([z("line-height","1")])),t(vi,"."+(n+("."+(s.hM+("> ."+(s.Y+(", ."+(n+(" ."+(s.hM+(" > ."+s.Y)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),z$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),P$=v(function(e,r){return b(Ge,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),$h=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,br,r,n))}else return U},M$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ae,xa,r,n))}else return U},T$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(ke,e.gk,M$(r)),a=t(ke,e.fP,M$(t(P$,function(m){return!ce(m,n)},r))),i=t(ke,e.f1,$h(r)),o=1/(i-a),c=1-i,l=1/(i-n),u=1-i;return{f1:b(z$,o,i-a,c),ec:b(z$,l,i-n,u)}},k$=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ae(e.gH)),z("vertical-align",ae(e.fp)+"em"),z("font-size",ae(e.bi)+"em")]))},vh=function(e){return b(Ae,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return N(z(k$(function(c){return c.ec}(T$(o))),k$(function(c){return c.f1}(T$(o)))))}else return n;else return n}),U,e)},fh=function(e){var r=function(o){if(o.$===4){var c=o.b;return N("@import url('"+(c+"');"))}else return U},n=function(o){o.a;var c=o.b,l=t(ee,`
`,t(_n,r,c));return l},a=t(q,Bu,e),i=function(o){var c=o.a,l=o.b,u=vh(l);if(u.$===1)return t(ee,"",t(q,uh(c),a));var m=u.a;return t(ee,"",t(q,t(lh,c,m),a))};return j(t(ee,`
`,t(q,n,e)),t(ee,`
`,t(q,i,e)))},mh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(z(r,n))}else return U},D$=v(function(e,r){var n=v(function(c,l){return{cB:j(l.cB,b(rc,e,c,U)),bT:function(){var u=mh(c);if(u.$===1)return l.bT;var m=u.a;return t(M,m,l.bT)}()}}),a=b(Ae,n,{cB:D,bT:D},r),i=a.bT,o=a.cB;return j(fh(i),ha(o))}),F$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Nr,"div",D,$([b(Nr,"style",D,$([wn(t(D$,e,r))]))]));case 1:return b(Nr,"div",D,$([b(Nr,"style",D,$([wn(t(D$,e,r))]))]));default:return b(Nr,"elm-ui-rules",$([t(x$,"rules",t(ch,e,r))]),D)}}),A$=J(function(e,r,n,a){var i=t(F$,r,b(Ae,b$,z(h$,_$(r.gx)),n).b);return e?t(M,z("static-stylesheet",C$(r)),t(M,z("dynamic-stylesheet",i),a)):t(M,z("dynamic-stylesheet",i),a)}),I$=J(function(e,r,n,a){var i=t(F$,r,b(Ae,b$,z(h$,_$(r.gx)),n).b);return e?t(M,C$(r),t(M,i,a)):t(M,i,a)}),nc=ue(45),ft=ue(37),E$=function(e){return Cd(Kl(e))},sh=Qr("p"),tr=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return ce(o&a,o)}else{var i=e.a;return ce(i&n,i)}}),B$=Qr("s"),V$=Qr("u"),ac=ue(44),mt=ue(39),fi=vr(function(e,r,n,a,i,o){var c=v(function(u,m){if(a.$===1){var d=a.a;return b(E$,u,m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return P(A$,!1,g,f,d);default:var g=i.a,f=i.b;return P(A$,!0,g,f,d)}}())}else{var p=a.a;return t(function(){switch(u){case"div":return da;case"p":return sh;default:return Nr(u)}}(),m,function(){switch(i.$){case 0:return p;case 2:var g=i.a,f=i.b;return P(I$,!1,g,f,p);default:var g=i.a,f=i.b;return P(I$,!0,g,f,p)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var u=r.a;return t(c,u,n);default:var u=r.a,m=r.b;return b(Nr,u,n,$([t(c,m,$([wr(s.fK+(" "+s.hL))]))]))}}();switch(o){case 0:return t(tr,mt,e)&&!t(tr,ac,e)?l:t(tr,d$,e)?t(V$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.ax,s.fG])))]),$([l])):t(tr,p$,e)?t(B$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.ax,s.fE])))]),$([l])):l;case 1:return t(tr,ft,e)&&!t(tr,nc,e)?l:t(tr,g$,e)?t(B$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.fF])))]),$([l])):t(tr,s$,e)?t(V$,$([wr(t(ee," ",$([s.fK,s.hL,s.b8,s.fD])))]),$([l])):l;default:return l}}),yn=function(e){return!e.b},tc=wn,dh=s.fK+(" "+(s.Y+(" "+(s.dO+(" "+s.c_))))),st=function(e){return t(da,$([wr(dh)]),$([tc(e)]))},ph=s.fK+(" "+(s.Y+(" "+(s.dP+(" "+s.c$))))),R$=function(e){return t(da,$([wr(ph)]),$([tc(e)]))},gh=T(function(e,r,n){var a=v(function(_,w){var y=_.a,S=_.b,x=w.a,C=w.b;switch(S.$){case 0:var I=S.a;return ce(e,ui),z(t(M,z(y,I(e)),x),C);case 1:var O=S.a;return ce(e,ui),z(t(M,z(y,t(O.gL,Gn,e)),x),yn(C)?O.hV:j(O.hV,C));case 2:var K=S.a;return z(t(M,z(y,ce(e,sr)?R$(K):st(K)),x),C);default:return z(x,C)}}),i=v(function(_,w){var y=w.a,S=w.b;switch(_.$){case 0:var x=_.a;return ce(e,ui),z(t(M,x(e),y),S);case 1:var C=_.a;return ce(e,ui),z(t(M,t(C.gL,Gn,e),y),yn(S)?C.hV:j(C.hV,S));case 2:var I=_.a;return z(t(M,ce(e,sr)?R$(I):st(I),y),S);default:return z(y,S)}});if(r.$===1){var o=r.a,c=b(Ge,a,z(D,D),o),l=c.a,u=c.b,m=yn(u)?n.hV:j(n.hV,u);if(m.b){var d=m;return Yo({gL:P(fi,n.aR,n.aT,n.aJ,v$(b(m$,"nearby-element-pls",l,n.aM))),hV:d})}else return ot(F(fi,n.aR,n.aT,n.aJ,v$(b(m$,"nearby-element-pls",l,n.aM)),Gn))}else{var p=r.a,g=b(Ge,i,z(D,D),p),f=g.a,u=g.b,m=yn(u)?n.hV:j(n.hV,u);if(m.b){var d=m;return Yo({gL:P(fi,n.aR,n.aT,n.aJ,Je(t(f$,f,n.aM))),hV:d})}else return ot(F(fi,n.aR,n.aT,n.aJ,Je(t(f$,f,n.aM)),Gn))}}),ir=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),hh=function(e){return{$:10,a:e}},mi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(mi,n,o|a)}else{var i=e.a;return t(mi,i|n,a)}}),U$=function(e){return{$:1,a:e}},si=v(function(e,r){return{$:3,a:e,b:r}}),j$=function(e){return{$:2,a:e}},bh=v(function(e,r){return t(da,$([wr(function(){switch(e){case 0:return t(ee," ",$([s.be,s.hL,s.fy]));case 1:return t(ee," ",$([s.be,s.hL,s.fR]));case 2:return t(ee," ",$([s.be,s.hL,s.hh]));case 3:return t(ee," ",$([s.be,s.hL,s.hg]));case 4:return t(ee," ",$([s.be,s.hL,s.gP]));default:return t(ee," ",$([s.be,s.hL,s.fQ]))}}())]),$([function(){switch(r.$){case 3:return wn("");case 2:var n=r.a;return st(n);case 0:var a=r.a;return a(sr);default:var i=r.a;return t(i.gL,Gn,sr)}}()]))}),_h=T(function(e,r,n){var a=t(bh,e,r);switch(n.$){case 0:return e===5?U$($([a])):j$($([a]));case 1:var i=n.a;return e===5?U$(t(M,a,i)):t(si,i,$([a]));case 2:var o=n.a;return e===5?t(si,$([a]),o):j$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(si,t(M,a,i),o):t(si,i,t(M,a,o))}}),N$=v(function(e,r){return{$:2,a:e,b:r}}),Sn=function(e){return{$:1,a:e}},Wn=v(function(e,r){switch(r.$){case 0:return Sn(e);case 1:var n=r.a;return t(N$,n,e);default:var a=r.a,i=r.b;return t(N$,a,i)}}),xh=function(e){switch(e){case 0:return s.cM+(" "+s.dX);case 2:return s.cM+(" "+s.dY);default:return s.cM+(" "+s.fB)}},wh=function(e){switch(e){case 0:return s.cN+(" "+s.fH);case 2:return s.cN+(" "+s.fA);default:return s.cN+(" "+s.fC)}},dt=v(function(e,r){return t(Mr,Td(e),Zl(r))}),Hr=J(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Cn=function(e){return{$:1,a:e}},yh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Cn(E(i,0,0));case 1:var o=r.a;return Cn(E(0,o,0));case 2:var c=r.a;return Cn(E(0,0,c));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return P(Hr,E(0,0,0),E(1,1,1),n,f);default:var n=r.a;return P(Hr,E(0,0,0),n,E(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,c=a.c;switch(r.$){case 0:var l=r.a;return Cn(E(l,o,c));case 1:var u=r.a;return Cn(E(i,u,c));case 2:var m=r.a;return Cn(E(i,o,m));case 3:var n=r.a;return Cn(n);case 4:var n=r.a,f=r.b;return P(Hr,a,E(1,1,1),n,f);default:var d=r.a;return P(Hr,a,d,E(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,c=a.c,p=e.b,g=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return P(Hr,E(l,o,c),p,g,f);case 1:var u=r.a;return P(Hr,E(i,u,c),p,g,f);case 2:var m=r.a;return P(Hr,E(i,o,m),p,g,f);case 3:var _=r.a;return P(Hr,_,p,g,f);case 4:var w=r.a,y=r.b;return P(Hr,a,p,w,y);default:var S=r.a;return P(Hr,a,S,g,f)}}}),wa=ue(7),H$=ue(36),G$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(mi,n|i,a|o)}),nn=t(mi,0,0),ic=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return E(nn,s.ee+(" "+a),$([b(ir,a,"height",n+"px")]));case 1:return E(t(oe,H$,nn),s.c_,D);case 2:var i=e.a;return i===1?E(t(oe,ft,nn),s.c$,D):E(t(oe,ft,nn),s.ef+(" height-fill-"+k(i)),$([b(ir,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+k(o),u=b(ir,l,"min-height",k(o)+"px !important"),m=ic(c),d=m.a,p=m.b,g=m.c;return E(t(oe,nc,d),l+(" "+p),t(M,u,g));default:var f=e.a,c=e.b,l="max-height-"+k(f),u=b(ir,l,"max-height",k(f)+"px"),_=ic(c),d=_.a,p=_.b,g=_.c;return E(t(oe,nc,d),l+(" "+p),t(M,u,g))}},W$=ue(38),oc=function(e){switch(e.$){case 0:var r=e.a;return E(nn,s.fu+(" width-px-"+k(r)),$([b(ir,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return E(t(oe,W$,nn),s.dO,D);case 2:var n=e.a;return n===1?E(t(oe,mt,nn),s.dP,D):E(t(oe,mt,nn),s.fv+(" width-fill-"+k(n)),$([b(ir,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),c=b(ir,o,"min-width",k(a)+"px"),l=oc(i),u=l.a,m=l.b,d=l.c;return E(t(oe,ac,u),o+(" "+m),t(M,c,d));default:var p=e.a,i=e.b,o="max-width-"+k(p),c=b(ir,o,"max-width",k(p)+"px"),g=oc(i),u=g.a,m=g.b,d=g.c;return E(t(oe,ac,u),o+(" "+m),t(M,c,d))}},di=ue(27),Sh=v(function(e,r){if(ce(e,di))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return ce(i,c)&&ce(i,o)&&ce(i,l)&&i>=0&&i<=24;default:return!1}}),ya=ue(6),O$=ue(30),q$=ue(29),Ch=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var d=l.a,p=l.b;switch(d.$){case 0:var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 3:var I=d.a,O=d.b;if(t(tr,I,n)){var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var g=O+(" "+e),f=r,_=t(oe,I,n),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 1:var K=d.a,g=e,f=r,_=n,w=a,y=i,S=t(M,K,o),x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 4:var I=d.a,G=d.b;if(t(tr,I,n)){var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else if(t(Sh,I,G)){var g=lt(G)+(" "+e),f=r,_=t(oe,I,n),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var g=lt(G)+(" "+e),f=r,_=t(oe,I,n),w=a,y=t(M,G,i),S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 10:var I=d.a,Y=d.b,g=e,f=r,_=t(oe,I,n),w=t(yh,a,Y),y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 7:var X=d.a;if(t(tr,ya,n)){var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else switch(X.$){case 0:var V=X.a,g=s.fu+(" width-px-"+k(V))+(" "+e),f=r,_=t(oe,ya,n),w=a,y=t(M,b(ir,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 1:var g=e+(" "+s.dO),f=r,_=t(oe,W$,t(oe,ya,n)),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 2:var ne=X.a;if(ne===1){var g=e+(" "+s.dP),f=r,_=t(oe,mt,t(oe,ya,n)),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var g=e+(" "+(s.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,mt,t(oe,ya,n)),w=a,y=t(M,b(ir,s.fK+("."+(s.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}default:var ve=oc(X),xe=ve.a,fe=ve.b,Jr=ve.c,g=e+(" "+fe),f=r,_=t(G$,xe,t(oe,ya,n)),w=a,y=j(Jr,i),S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 8:var me=d.a;if(t(tr,wa,n)){var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else switch(me.$){case 0:var V=me.a,ye=k(V)+"px",se="height-px-"+ye,g=s.ee+(" "+(se+(" "+e))),f=r,_=t(oe,wa,n),w=a,y=t(M,b(ir,se,"height ",ye),i),S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 1:var g=s.c_+(" "+e),f=r,_=t(oe,H$,t(oe,wa,n)),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 2:var ne=me.a;if(ne===1){var g=s.c$+(" "+e),f=r,_=t(oe,ft,t(oe,wa,n)),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var g=e+(" "+(s.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,ft,t(oe,wa,n)),w=a,y=t(M,b(ir,s.fK+("."+(s.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}default:var Fe=ic(me),xe=Fe.a,fe=Fe.b,Jr=Fe.c,g=e+(" "+fe),f=r,_=t(G$,xe,t(oe,wa,n)),w=a,y=j(Jr,i),S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 2:var Me=d.a;switch(Me.$){case 0:var g=e,f=t(Wn,"main",r),_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 1:var g=e,f=t(Wn,"nav",r),_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 2:var g=e,f=t(Wn,"footer",r),_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 3:var g=e,f=t(Wn,"aside",r),_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 4:var Ye=Me.a;if(Ye<=1){var g=e,f=t(Wn,"h1",r),_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else if(Ye<7){var g=e,f=t(Wn,"h"+k(Ye),r),_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var g=e,f=t(Wn,"h6",r),_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 9:var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 8:var g=e,f=r,_=n,w=a,y=i,S=t(M,t(dt,"role","button"),o),x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 5:var In=Me.a,g=e,f=r,_=n,w=a,y=i,S=t(M,t(dt,"aria-label",In),o),x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 6:var g=e,f=r,_=n,w=a,y=i,S=t(M,t(dt,"aria-live","polite"),o),x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;default:var g=e,f=r,_=n,w=a,y=i,S=t(M,t(dt,"aria-live","assertive"),o),x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}case 9:var ja=d.a,qr=d.b,Jr=function(){switch(qr.$){case 3:return i;case 2:return qr.a,i;case 0:return qr.a,i;default:var Na=qr.a;return j(i,Na.hV)}}(),g=e,f=r,_=n,w=a,y=Jr,S=o,x=b(_h,ja,qr,c),C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e;case 6:var oa=d.a;if(t(tr,O$,n)){var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var g=xh(oa)+(" "+e),f=r,_=function(Ar){switch(oa){case 1:return t(oe,p$,Ar);case 2:return t(oe,d$,Ar);default:return Ar}}(t(oe,O$,n)),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}default:var Rt=d.a;if(t(tr,q$,n)){var g=e,f=r,_=n,w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}else{var g=wh(Rt)+(" "+e),f=r,_=function(Ar){switch(Rt){case 1:return t(oe,g$,Ar);case 2:return t(oe,s$,Ar);default:return Ar}}(t(oe,q$,n)),w=a,y=i,S=o,x=c,C=p;e=g,r=f,n=_,a=w,i=y,o=S,c=x,l=C;continue e}}}else{var u=Ko(a);if(u.$===1)return{aJ:t(M,wr(e),o),aM:c,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(M,wr(e+(" "+m)),o),aM:c,aR:n,aT:r,hV:t(M,hh(a),i)}}}),Lh={$:0},zh=Lh,or=J(function(e,r,n,a){return b(gh,e,a,Ga(Ch,D0(e),r,nn,zh,D,D,C0,rr(n)))}),an=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ph={fO:U,fW:U,hH:N({a2:0,b6:P(an,155/255,203/255,1,1),eV:z(0,0),bi:3})},Mh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gK;return c.$===1?Te(i,{gK:N(o)}):i;case 1:var l=a.a,u=i.gx;return u.$===1?Te(i,{gx:N(l)}):i;default:var m=a.a,d=i.eS;return d.$===1?Te(i,{eS:N(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return Ph;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ge,r,{gx:U,gK:U,eS:U},e))},Th=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(sr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),sr);case 2:var i=r.a;return st(i);default:return st("")}}),kh=T(function(e,r,n){var a=Mh(e),i=function(){var o=a.eS;return o===1?$$(a):y0(a)}();return t(Th,i,P(or,sr,Hn,r,Je($([n]))))}),pt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),J$=v(function(e,r){return{$:1,a:e,b:r}}),Y$=function(e){return{$:2,a:e}},Dh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),cc=function(e){return{$:3,a:e}},X$=ue(8),K$=ue(14),Z$=ue(5),Q$=ue(4),Sa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(a)+("-"+De(i))))))},pi=Is,lc=As,ev=v(function(e,r){return j(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",lc(pi(n)));case 4:var n=e.a;return e.b,t(ee,"-",lc(pi(n)));default:var n=e.a.hc;return t(ee,"-",lc(pi(n)))}}())}),Fh=function(){var e=$([cc("Open Sans"),cc("Helvetica"),cc("Verdana"),Dh]);return $([t(ge,X$,b(pt,"bg-"+Sa(P(an,1,1,1,0)),"background-color",P(an,1,1,1,0))),t(ge,K$,b(pt,"fc-"+Sa(P(an,0,0,0,1)),"color",P(an,0,0,0,1))),t(ge,Q$,Y$(20)),t(ge,Z$,t(J$,b(Ae,ev,"font-",e),e))])}(),Ah=T(function(e,r,n){var a=e.hl;return b(kh,a,t(M,mr(t(ee," ",$([s.hA,s.fK,s.hL]))),j(Fh,r)),n)}),rv={$:3},nv=function(e){return{$:2,a:e}},uc=zd,av=v(function(e,r){switch(r.$){case 1:var n=r.a;return Yo({gL:v(function(o,c){return t(uc,e,t(n.gL,o,c))}),hV:n.hV});case 0:var a=r.a;return ot(t(ct,uc(e),a));case 2:var i=r.a;return nv(i);default:return rv}}),$c=av,Ih=uc,Eh=function(e){return{$:0,a:e}},Se=Eh,Bh=Md,pr=Bh,tv={$:1},gi=function(e){return{$:5,a:e}},iv=gi(0),Fr=T(function(e,r,n){return P(an,e/255,r/255,n/255,1)}),ov=b(Fr,0,0,0),Vh=Mr("d"),Rh=Mr("fill"),Uh=Mr("height"),cv=Yl("http://www.w3.org/2000/svg"),jh=cv("path"),Nh=cv("svg"),Hh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},Gh=function(e){var r=Hh(e);return"rgba("+(k(Le(r.hu*255))+(","+k(Le(r.gA*255))+(","+k(Le(r.fS*255))+(","+ae(r.fI)+")"))))},Wh=Mr("viewBox"),Oh=Mr("width"),Ca=T(function(e,r,n){return t(Nh,$([Wh("0 0 100 100"),Oh(k(e)),Uh(k(e))]),$([t(jh,$([Vh(n),Rh(Gh(r))]),D)]))}),qh={$:1},cr=qh,lv=function(e){return{$:7,a:e}},Q=lv,he=v(function(e,r){return P(or,sr,Hn,t(M,Q(cr),t(M,pe(cr),e)),Je($([r])))}),uv=function(e){return{$:2,a:e}},$e=uv(1),On={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},La={c3:260,bE:54},tn=function(e){return t(ge,X$,b(pt,"bg-"+Sa(e),"background-color",e))},Jh=ue(28),Ln=function(e){return t(ge,Jh,b(pt,"bc-"+Sa(e),"border-color",e))},hi=1,yr=v(function(e,r){return P(or,hi,Hn,t(M,mr(s.gc+(" "+s.bt)),t(M,pe(cr),t(M,Q(cr),e))),Je(r))}),Yh=b(Fr,83,83,83),$v=J(function(e,r,n,a){return P(an,e/255,r/255,n/255,a)}),bi=P($v,56,56,56,.25),Ue=rv,gt=Ve(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),ht=ue(2),qn=function(e){var r=e;return t(ge,ht,F(gt,"p-"+k(e),r,r,r,r))},vv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),fv=ue(3),mv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),zn=function(e){return t(ge,fv,b(vv,t(mv,e,e),e,e))},Xh=P($v,0,0,0,0),Kh=function(e){return{$:4,a:e}},vc=0,Pn=v(function(e,r){return P(or,vc,Hn,t(M,mr(s.bt+(" "+s.ax)),t(M,Q(cr),t(M,pe(cr),e))),Je(r))}),Zh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t($$,{gx:{fO:U,fW:U,hH:U},gK:1,eS:0},n.hV));case 2:var a=e.a;return li(wn(a));default:return li(wn(""))}},Qh=v(function(e,r){return Zh(e(r))}),e3=Pd,r3=v(function(e,r){return ot(b(e3,Qh,e,r))}),Mn=function(e){return t(ge,K$,b(pt,"fc-"+Sa(e),"color",e))},fc=b(Fr,195,195,195),Tn=v(function(e,r){return{$:3,a:e,b:r}}),sv=ue(13),n3=t(Tn,sv,s.h7),a3=ue(20),dv=t(Tn,a3,s.hF),Jn=function(e){return t(ge,Q$,Y$(e))},mc=t(Tn,sv,s.fV),sc=v(function(e,r){if(r.$===-2)return Ur;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return F(te,n,a,t(e,a,i),t(sc,e,o),t(sc,e,c))}),pv=v(function(e,r){if(ce(e,r)){var n=e;return t(ge,ht,F(gt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,ht,F(gt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),kn=function(e){return nv(e)},t3=function(e){return b(Mo,T(function(r,n,a){return t(M,n,a)}),D,e)},i3=v(function(e,r){return{$:3,a:e,b:r}}),o3=v(function(e,r){return{$:2,a:e,b:r}}),c3=v(function(e,r){return{$:0,a:e,b:r}}),l3=v(function(e,r){return{$:1,a:e,b:r}}),bt=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),u3=P(bt,0/255,0/255,0/255,1),_i=function(e){return{$:6,a:e}},$3=_i(0),xi=function(e){return{$:2,a:e}},v3={$:6},gv=xi(v3),hv=T(function(e,r,n){if(r.$===1)return r.a,P(or,hi,Sn("label"),e,Je($([n])));var a=r.a,i=r.b,o=r.c,c=P(or,sr,Hn,i,Je($([o])));switch(a){case 2:return P(or,hi,Sn("label"),t(M,mr(s.ci),e),Je($([c,n])));case 3:return P(or,hi,Sn("label"),t(M,mr(s.ci),e),Je($([n,c])));case 0:return P(or,vc,Sn("label"),t(M,mr(s.ci),e),Je($([n,c])));default:return P(or,vc,Sn("label"),t(M,mr(s.ci),e),Je($([c,n])))}}),dc=dt,on=gi(1),bv="Enter",f3=function(e){return{$:5,a:e}},_v=function(e){if(e.$===1){var r=e.a;return xi(f3(r))}else return Nn},xv=function(e){return e.$===1},m3=function(e){return{$:0,a:e}},pc=Xl,s3=v(function(e,r){return t(pc,e,m3(r))}),wv=function(e){return t(s3,"click",nr(e))},d3=Os,p3=function(e){return{$:2,a:e}},g3=v(function(e,r){return t(pc,e,p3(r))}),yv=function(e){var r=function(a){var i=e(a);if(i.$===1)return d3("No key matched");var o=i.a;return nr(o)},n=t(W,r,t(H,"key",sa));return Ce(t(g3,"keydown",t(Xt,function(a){return z(a,!0)},n)))},h3=ue(21),Yn=t(Tn,h3,s.gf),Sv=" ",Cv=function(e){return t(Mr,"tabIndex",k(e))},b3=t(ct,Ce,Cv),_3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bI,c=j($([xv(n)?Nn:zn(6),Ce(wv(o(!i))),gv,yv(function(l){return ce(l,bv)||ce(l,Sv)?N(o(!i)):U}),b3(0),Yn,$3,Q($e)]),e);return b(hv,t(M,Ce(t(dc,"role","checkbox")),t(M,Ce(t(dc,"aria-checked",i?"true":"false")),t(M,_v(n),c))),n,P(or,sr,Hn,$([on,pe($e),Q(cr)]),Je($([a(i)]))))}),x3=T(function(e,r,n){return j(t(tt,e-Un(n),ai(r)),n)}),_t=ss,Lv=function(e){var r=function(n){return n<10?k(n):ai(Zu(87+n))};return e<16?r(e):j(Lv(e/16|0),r(t(_t,16,e)))},w3=t(We,Lv,t(x3,2,"0")),gc=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},y3=function(e){var r=gc(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(q,t(We,Le,w3),$([n*255,a*255,i*255]))))},hc=ue(12),zv=t(Tn,hc,s.h$),bc=_i(1),Xn=ds,wi=function(e){return e*Xn/180},S3=function(e){return{$:1,a:e}},_c=v(function(e,r){return{$:10,a:e,b:r}}),C3=ue(26),L3=function(e){return t(_c,C3,S3(-e))},za=T(function(e,r,n){return P(an,e,r,n,1)}),z3=an,P3=v(function(e,r){return{$:4,a:e,b:r}}),M3=ue(24),T3=function(e){return t(_c,M3,t(P3,E(0,0,1),e))},k3=ue(17),Kn=function(e){return t(ge,k3,b(ir,"br-"+k(e),"border-radius",k(e)+"px"))},D3=function(e){return ha($([e.ej?"box-inset":"box-",De(e.eV.a)+"px",De(e.eV.b)+"px",De(e.a2)+"px",De(e.bi)+"px",Sa(e.b6)]))},F3=ue(19),A3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return t(ge,F3,b(ir,D3(r),"box-shadow",Zo(r)))},Pv=v(function(e,r){return{$:12,a:e,b:r}}),Mv=ue(0),I3=function(e){return e?t(ge,Mv,t(Pv,"transparent",1)):t(ge,Mv,t(Pv,"visible",0))},xc=b(za,1,1,1),wc=Ve(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),yi=function(e){return t(ge,di,F(wc,"b-"+k(e),e,e,e,e))},E3=v(function(e,r){return t(ge,di,F(wc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),xt=function(e){var r=e.b2,n=e.cH,a=e.g4,i=e.hx;return ce(n,r)&&ce(a,i)?ce(n,i)?yi(n):t(E3,a,n):t(ge,di,F(wc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},B3=function(e){return t(he,$([mr("focusable"),Q(Se(14)),pe(Se(14)),Mn(xc),on,Jn(9),zv,Kn(3),Ln(e?b(za,59/255,153/255,252/255):b(za,211/255,211/255,211/255)),A3({a2:1,b6:e?P(z3,238/255,238/255,238/255,0):b(za,238/255,238/255,238/255),eV:z(0,0),bi:1}),tn(e?b(za,59/255,153/255,252/255):xc),yi(e?0:1),qo(t(he,$([Ln(xc),pe(Se(6)),Q(Se(9)),T3(wi(-45)),bc,on,L3(1),I3(!e),xt({b2:2,g4:2,hx:0,cH:0})]),Ue))]),Ue)},V3=xr("htmlFor"),R3=v(function(e,r){if(r.$)return U;var n=r.a;return e(n)}),Si=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return e(n)}}),Tv=J(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),U3=np,j3=Ns,N3=v(function(e,r){if(r.$)return Ze(e);var n=r.a;return Ie(n)}),H3=rp,G3=function(e){return t(H3,{f2:!1,hb:!1},e)},yc=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return U},W3=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return Ie(e(n))}}),O3=function(e){return{$:2,a:e}},q3=function(e){return{$:0,a:e}},J3=function(e){return{$:1,a:e}},Sc=v(function(e,r){return Rr(r)-Rr(e)}),Cc=T(function(e,r,n){var a=Rr(n);return le(Rr(e),a)<1&&le(a,Rr(r))<1}),Y3=v(function(e,r){var n=function(i){return le(i,e)<0?Ie(i):Ze(J3(r))},a=b(Cc,"0","9",r)?Ie(t(Sc,"0",r)):b(Cc,"a","z",r)?Ie(10+t(Sc,"a",r)):b(Cc,"A","Z",r)?Ie(10+t(Sc,"A",r)):Ze(q3(r));return t(Si,n,a)}),kv=v(function(e,r){var n=$a(r);if(n.$===1)return Ie(0);var a=n.a,i=a.a,o=a.b;return t(Si,function(c){return t(Si,function(l){return Ie(c+l*e)},t(kv,e,o))},t(Y3,e,i))}),X3=v(function(e,r){return 2<=e&&e<=36?t(kv,e,Go(r)):Ze(O3(e))}),K3=X3(16),Z3=T(function(e,r,n){return P(bt,e,r,n,1)}),Q3=J(function(e,r,n,a){return P(bt,e,r,n,a)}),wt=ms,eb=v(function(e,r){var n=t(wt,10,e);return Le(r*n)/n}),rb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ku(n);if(a.b&&!a.b.b){var i=a.a;return j3($([i,i]))}else return n};return t(We,pi,t(We,function(n){return t(Ee,function(a){return b(U3,1,a,n)},G3(e))},t(We,R3(yc),t(We,Ee(function(n){return n.hW}),t(We,Ee(_n(Dr)),t(We,N3("Parsing hex regex failed"),Si(function(n){var a=t(q,t(We,r,t(We,K3,W3(Za))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,u=l.a.a,m=l.b,d=m.a.a;return Ie(P(Q3,i/255,c/255,u/255,t(eb,2,d/255)))}else break e;else{var i=a.a.a,p=a.b,c=p.a.a,g=p.b,u=g.a.a;return Ie(b(Z3,i/255,c/255,u/255))}else break e;return Ze("Parsing ints from hex failed")})))))))}(),nb=xr("id"),ab=Qr("input"),tb=Qr("label"),Dv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ib=Dv(0),ob=xr("name"),cb=function(e){return z(e,!0)},lb=function(e){return{$:1,a:e}},ub=v(function(e,r){return t(pc,e,lb(r))}),$b=v(function(e,r){return b(Ge,H,r,e)}),vb=t($b,$(["target","value"]),sa),Fv=function(e){return t(ub,"input",t(Xt,cb,t(Xt,e,vb)))},fb=t(Tn,hc,s.h4),Av=t(Tn,hc,s.h8),Lc=function(e){return t(u$,5,e)},zc=function(e){return t(ge,Z$,t(J$,b(Ae,ev,"ff-",e),e))},mb=b(Fr,195,195,195),Iv=b(Fr,69,69,69),sb=Dv(2),db={$:2},Pc=db,pb=ue(32),gb=ue(31),Ev=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return U;else{var a=n.a;return N(a)}}),U,e)},hb=v(function(e,r){return t(ke,r,b(Ge,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return N(z(i,c))}else return U;else{var i=a.a;return N(i)}}),U,e))}),Bv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return U;else{var a=n.a;return N(a)}}),U,e)},bb=ue(33),_b=xr("max"),xb=xr("min"),wb=v(function(e,r){return t(ge,fv,b(vv,t(mv,e,r),e,r))}),yb=function(e){return t(xr,"step",e)},Vv=xr("type"),Rv=xr("value"),Pa=uv,Sb=Fd,Uv=v(function(e,r){switch(r.$){case 0:return Nn;case 2:var n=r.a;return xi(n);case 6:var a=r.a;return _i(a);case 5:var i=r.a;return gi(i);case 7:var a=r.a;return lv(a);case 8:var a=r.a;return c$(a);case 3:var a=r.a,i=r.b;return t(Tn,a,i);case 4:var o=r.a,c=r.b;return t(ge,o,c);case 9:var l=r.a,u=r.b;return t(l$,l,t(av,e,u));case 1:var m=r.a;return Ce(t(Sb,e,m));default:var d=r.a,p=r.b;return t(_c,d,p)}}),Cb=T(function(e,r,n){return t(Pn,$([Q($e),pe(t(ke,$e,n)),on]),$([t(he,$([Q(Pa(Le(e*1e4)))]),Ue),t(he,t(M,on,t(q,Uv(rt),r)),Ue),t(he,$([Q(Pa(Le(de(1-e)*1e4)))]),Ue)]))}),Lb=T(function(e,r,n){return t(yr,$([pe($e),Q(t(ke,$e,n)),bc]),$([t(he,$([pe(Pa(Le(de(1-e)*1e4)))]),Ue),t(he,t(M,bc,t(q,Uv(rt),r)),Ue),t(he,$([pe(Pa(Le(e*1e4)))]),Ue)]))}),jv=v(function(e,r){var n=Bv(e),a=Ev(e),i=function(){var S=z(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var x=S.a.a.a,C=S.b.a.a;return le(C,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),c=r.ic,l=c,u=Ev(l),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),d=Bv(l),p=function(){if(d.$===1)return"20px";if(d.a.$)return"100%";var S=d.a.a;return k(S)+"px"}(),g="thmb-"+(p+("-"+m)),f=$([t(re,"width",p),t(re,"height",m)]),_=t(hb,e,z(5,5)),w=_.a,y=_.b;return b(hv,$([xv(r.em)?Nn:t(wb,w,y),gv,Q(function(){if(n.$===1)return $e;if(n.a.$){var S=n.a;return S}else return cr}()),pe(function(){if(a.$===1)return cr;if(a.a.$){var S=a.a;return S}else return cr}())]),r.em,t(Pn,$([Q(t(ke,$e,n)),pe(t(ke,Se(20),a))]),$([P(or,sr,Sn("input"),$([_v(r.em),t(ge,pb,t(ut,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,bb,t(ut,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,gb,t(ut,'input[type="range"].'+(g+"::-ms-thumb"),f)),Ce(wr(g+" ui-slide-bar focusable-parent")),Ce(Fv(function(S){var x=Xu(S);if(x.$===1)return r.bI(0);var C=x.a;return r.bI(C)})),Ce(Vv("range")),Ce(yb(function(){var S=r.cE;if(S.$===1)return"any";var x=S.a;return ae(x)}())),Ce(xb(ae(r.cr))),Ce(_b(ae(r.cq))),Ce(Rv(ae(r.cI))),i?Ce(t(dc,"orient","vertical")):Nn,Q(i?t(ke,Se(20),a):t(ke,$e,n)),pe(i?t(ke,$e,n):t(ke,Se(20),a))]),Je(D)),t(he,t(M,Q(t(ke,$e,n)),t(M,pe(t(ke,Se(20),a)),j(e,$([Lc(i?b(Lb,o,t(M,mr("focusable-thumb"),l),n):b(Cb,o,t(M,mr("focusable-thumb"),l),a))])))),Ue)])))}),zb=b(za,.5,.5,.5),Nv=Dr,Hv=function(e){var r=e.c2,n=e.cI,a=e.cr,i=e.cq,o=e.cE,c=e.bI;return t(he,$([Q($e)]),t(jv,$([zn(2),Lc(t(he,$([Q($e),pe(Se(16)),on,tn(Iv),Kn(4)]),Ue))]),{em:t(sb,D,t(Pn,$([Q($e)]),$([t(he,$([fb]),kn(r)),t(he,$([Q($e),Av,zc($([Pc]))]),kn(ae(n)))]))),cq:i,cr:a,bI:c,cE:N(o),ic:Nv($([Q(Se(12)),pe(Se(12)),Kn(4),yi(0),Ln(zb),tn(mb)])),cI:n}))},Pb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Mb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(_3,D,{f6:n,gM:B3,em:t(ib,D,kn(e)),bI:i3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Hv({c2:e,cq:o,cr:i,bI:c3(e),cE:.001*(o-i),cI:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return Hv({c2:e,cq:o,cr:i,bI:t(We,Le,l3(e)),cE:1,cI:n});default:var n=r.a;return t(he,$([Q($e)]),bn(t(da,D,$([t(da,$([t(pr,"margin-bottom","6px")]),$([t(tb,$([V3(e)]),$([tc(e)]))])),t(ab,$([Vv("color"),t(pr,"width","100%"),t(pr,"height","26px"),t(pr,"padding","0px"),nb(e),ob(e),Fv(function(l){return t(o3,e,t(Pb,u3,rb(l)))}),Rv(y3(n))]),D)]))))}}),Mc=b(Fr,255,255,255),Tb=function(e){return t(yr,$([Q($e),zn(8),t(pv,0,14),xt({b2:1,g4:0,hx:0,cH:0}),Ln(bi)]),$([t(he,$([Jn(16),mc,Mn(Mc)]),kn(e.hc)),t(yr,$([Q($e),zn(6)]),t3(t(sc,Mb,e.aN)))]))},kb=function(e){return t(yr,$([Q($e),pe($e),Mn(fc),Jn(12),n3,dv]),t(q,Tb,e))},Db=r3(kb),Fb=function(e){return t(yr,$([Q($e),pe($e)]),$([t(Pn,$([zn(14),Q($e)]),D),t($c,Kh,Db(jn(e).gb))]))},Ab=function(e){return{$:6,a:e}},Ib=J(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Eb=function(e){var r=e.cH,n=e.hx,a=e.b2,i=e.g4;if(ce(r,n)&&ce(r,a)&&ce(r,i)){var o=r;return t(ge,ht,F(gt,"p-"+k(r),o,o,o,o))}else return t(ge,ht,F(gt,P(Ib,r,n,a,i),r,n,a,i))},Bb=function(e){return{$:0,a:e}},Vb=function(e){return{$:1,a:e}},Rb=Vb,Ub=function(e){var r=e.b.X;return Rn(r)},Ci=b(Fr,255,60,0),jb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Rn(r)+1+Rn(n)},Nb=function(e){var r=z(Ub(e),jb(e)-1),n=r.a,a=r.b;return t(he,$([Q($e),on]),t(jv,$([Lc(t(Pn,$([Q($e),pe(Se(4)),on,tn(Iv),Kn(2)]),$([t(he,$([Q(Pa(n)),pe($e),tn(Ci),Kn(2)]),Ue),t(he,$([Q(Pa(a-n))]),Ue)])))]),{em:Rb(""),cq:a,cr:0,bI:t(We,Le,Bb),cE:N(1),ic:Nv($([Q(Se(12)),pe(Se(12)),Kn(6),tn(Ci)])),cI:n}))},Hb=_i(2),Li=b(Fr,220,220,220),Gb=function(e){var r=e.a,n=function(){return r.$?$([Mn(Li)]):$([Mn(Ci)])}();return t(he,j(n,$([Jn(14),Hb,Av,zc($([Pc]))])),kn(t(n$,3,jn(e).d1)))},Wb=function(e){e.a;var r=e.b.X;return t(Ee,function(n){return Le(60/(jn(e).d1-n))},t(Ee,t(We,Bu,function(n){return n.d1}),yc(t(qu,59,r))))},Ob=function(e){var r=Wb(e);if(r.$===1)return Ue;var n=r.a;return t(he,$([Jn(14),Mn(fc),zc($([Pc]))]),kn(k(n)+" FPS"))},Gv={$:1},qb={$:3},Jb={$:2},Yb={$:8},Xb=Xr,Kb=v(function(e,r){return t(_o,e,Xb(r))}),Zb=Kb("disabled"),Qb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},e1=function(e){return t(at,Qb,e)?Nn:mr("focusable")},zi=t(ct,Ce,wv),Wv=v(function(e,r){var n=r.eW,a=r.em;return P(or,sr,Hn,t(M,Q(cr),t(M,pe(cr),t(M,mr(s.ca+(" "+(s.ax+(" "+(s.hG+(" "+s.eU)))))),t(M,Yn,t(M,e1(e),t(M,xi(Yb),t(M,Ce(Cv(0)),function(){if(n.$===1)return t(M,Ce(Zb(!0)),e);var i=n.a;return t(M,zi(i),t(M,yv(function(o){return ce(o,bv)||ce(o,Sv)?N(i):U}),e))}()))))))),Je($([a])))}),Ov=v(function(e,r){return t(Wv,D,{em:t(he,$([Q(Se(36)),qn(3),Mn(r),zv,Jn(12),mc,Ln(r),yi(1),Kn(4)]),kn("REC")),eW:N(e)})}),qv=T(function(e,r,n){return t(Wv,D,{em:bn(b(Ca,20,n,e)),eW:N(r)})}),r1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Pn,D,$([t(he,$([Q(Se(40))]),function(){switch(r.$){case 0:return t(Ov,Gv,Ci);case 1:return t(Ov,Jb,Li);default:return Ue}}()),t(he,$([Q(Se(28))]),function(){switch(r.$){case 0:return Ue;case 1:return yn(n)?Ue:b(qv,On.hp,qb,Li);default:return b(qv,On.ho,Gv,Li)}}())]))},n1=function(e){return t(yr,$([Q($e)]),$([Nb(e),t(Pn,$([Q($e),zn(14),t(pv,0,6),on]),$([r1(e),Ob(e),Gb(e)]))]))},a1=function(e){return t(yr,$([Q($e),zn(14),Eb({b2:20,g4:0,hx:0,cH:0}),xt({b2:1,g4:0,hx:0,cH:0}),Ln(bi)]),$([t(he,$([Jn(16),mc,Mn(fc)]),kn("Time Travel")),t($c,Ab,n1(e))]))},t1=v(function(e,r){return t(yr,$([jn(r).dC.im>600?tn(Yh):tn(Xh),xt({b2:0,g4:0,hx:1,cH:0}),Ln(bi),Q(Se(La.c3)),pe($e)]),$([function(){return e?Ue:t(yr,$([Q($e),pe($e),qn(14),zn(14)]),$([a1(r),Fb(r)]))}()]))}),i1=function(e){return{$:3,a:e}},Jv=gi(2),o1=b(Fr,232,78,50),c1=b(Fr,48,48,48),l1=function(e){return t(xr,"href",Dd(e))},u1=Mr("rel"),$1=xr("target"),Yv=v(function(e,r){var n=r.fn,a=r.em;return P(or,sr,Sn("a"),t(M,Ce(l1(n)),t(M,Ce(u1("noopener noreferrer")),t(M,Ce($1("_blank")),t(M,Q(cr),t(M,pe(cr),t(M,mr(s.ca+(" "+(s.ax+(" "+s.et)))),e)))))),Je($([a])))}),yt=xr("title"),v1=b(Fr,31,161,242),f1=function(e){var r=T(function(o,c,l){var u=ce(c,e)?Mc:c1;return t(he,$([rn(yt(o)),zi(i1(c)),Yn,qn(7)]),bn(b(Ca,40,u,l)))}),n=t(yr,$([iv]),$([b(r,"Configurations",0,On.hN)])),a=t(yr,D,$([t(Yv,$([rn(yt("Twitter")),Jv,Yn,qn(7)]),{em:bn(b(Ca,40,v1,On.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(Yv,$([rn(yt("Source Code")),Jv,Yn,qn(7)]),{em:bn(b(Ca,40,o1,On.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(Se(La.bE)),qn(4),zi(tv),xt({b2:1,g4:0,hx:0,cH:0}),Ln(bi),Yn,rn(yt("Activate Distraction Free Mode"))]),bn(b(Ca,46,Mc,On.fx)));return t(yr,$([Q(Se(La.bE)),pe($e),dv,tn(ov)]),$([i,n,a]))},m1=function(e){var r=t(he,$([Q(Se(La.bE)),iv,qn(4),zi(tv),Yn,rn(yt("Deactivate Distraction Free Mode (A)"))]),bn(b(Ca,46,ov,On.fx)));return e.bw?r:t(Pn,$([Q(Se(La.bE+La.c3)),pe($e)]),$([f1(e.bp),t(t1,e.bp,e.R)]))},s1=T(function(e,r,n){var a=b0(n.R),i=jn(n.R);return b(Ah,{hl:$([x0({fO:U,fW:U,hH:U})])},$([Q(Se(Ka(i.dC.im))),pe(Se(Ka(i.dC.gH))),rn(t(pr,"-webkit-font-smoothing","antialiased")),rn(t(pr,"pointer-events","none")),rn(t(pr,"touch-action","none")),rn(t(pr,"user-select","none")),qo(t($c,g0,t(r,i,a))),qo(m1(n))]),bn(t(Ih,li(h0),t(e,i,a))))}),d1=vr(function(e,r,n,a,i,o){var c=v(function(u,m){return z(P(v0,r,o,u,m),o$)}),l=function(u){var m=t(Ru,n,u.gY);return z({bp:0,bw:!0,R:t(f0,m,a),dN:0},o$)};return kg({gS:l,hX:p0,ii:c,ik:t(s1,e,i)})}),p1=J(function(e,r,n,a){return Xe(d1,e,r,n,a,v(function(i,o){return Ue}),T(function(i,o,c){return c}))}),g1=function(e){return{}},h1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),b1=function(e){return b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(ma,a,i,n)}),Xo,e)},_1=T(function(e,r,n){return b(h1,e,r,b1(n))}),x1=_1,w1=T(function(e,r,n){var a=r.a,i=r.b;return z(e,t(Yu,z(a,i),n))}),y1=$([b(x1,"Camera",!0,$([b(w1,"camera height",z(1.4,1.57),1.57)]))]),S1=v(function(e,r){return r}),C1=v(function(e,r){return t(Ee,function(n){if(n.$)return 0;var a=n.b;return a},t(ti,e,r.aN))}),L1=v(function(e,r){return t(ke,0,yc(t(_n,C1(e),r)))}),z1=v(function(e,r){return t(L1,e,r.gb)}),Xv=z1,P1=function(e){return e},cn=function(e){return e},Tc=function(e){var r=e;return-r},M1=v(function(e,r){var n=e,a=r;return{io:n.is*a.dU-n.dU*a.is,is:n.dU*a.io-n.io*a.dU,dU:n.io*a.is-n.is*a.io}}),Kv=function(e){var r=e;return r.dS},Zv=function(e){var r=e;return r.dT},T1=function(e){return t(M1,Kv(e),Zv(e))},Zn=function(e){var r=e;return r.dl},Qn=ps,Ma=gs,Pi=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Qn(c),u=Ma(c),m=a.gm,d=m,p=d.io*u,g=l*p,f=p*p,_=d.is*u,w=l*_,y=p*_,S=_*_,x=1-2*(f+S),C=d.dU*u,I=l*C,O=2*(y-I),K=2*(y+I),G=p*C,Y=2*(G+w),X=2*(G-w),V=_*C,ne=2*(V-g),ve=2*(V+g),xe=C*C,fe=1-2*(S+xe),me=1-2*(f+xe);return{io:fe*o.io+O*o.is+Y*o.dU,is:K*o.io+me*o.is+ne*o.dU,dU:X*o.io+ve*o.is+x*o.dU}}),St=T(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Qn(c),u=Ma(c),m=a.dl,d=m,p=o.io-d.io,g=o.is-d.is,f=o.dU-d.dU,_=a.gm,w=_,y=w.io*u,S=l*y,x=y*y,C=w.is*u,I=l*C,O=y*C,K=C*C,G=1-2*(x+K),Y=w.dU*u,X=l*Y,V=2*(O-X),ne=2*(O+X),ve=y*Y,xe=2*(ve+I),fe=2*(ve-I),me=C*Y,ye=2*(me-S),se=2*(me+S),Fe=Y*Y,Me=1-2*(K+Fe),Ye=1-2*(x+Fe);return{io:d.io+Me*p+V*g+xe*f,is:d.is+ne*p+Ye*g+ye*f,dU:d.dU+fe*p+se*g+G*f}}),ln=function(e){return e},Dn=function(e){var r=e;return r.dS},Fn=function(e){var r=e;return r.dT},An=function(e){var r=e;return r.dV},Qv=T(function(e,r,n){return ln({dl:b(St,e,r,Zn(n)),dS:b(Pi,e,r,Dn(n)),dT:b(Pi,e,r,Fn(n)),dV:b(Pi,e,r,An(n))})}),ef=T(function(e,r,n){return b(Qv,e(n),r,n)}),kc=function(e){var r=e;return r.gm},Ct=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dU:a.dU+n.dU}}),rf=v(function(e,r){return ln({dl:t(Ct,e,Zn(r)),dS:Dn(r),dT:Fn(r),dV:An(r)})}),k1=v(function(e,r){var n=e,a=r;return{io:n*a.io,is:n*a.is,dU:n*a.dU}}),D1=T(function(e,r,n){return t(rf,t(k1,r,e),n)}),F1=T(function(e,r,n){return b(D1,kc(e(n)),r,n)}),ea=v(function(e,r){return{gm:r,dl:e}}),A1=function(e){var r=e;return t(ea,r.dl,r.dS)},I1=function(e){var r=e;return t(ea,r.dl,r.dT)},E1=function(e){var r=e;return t(ea,r.dl,r.dV)},B1=function(e){var r=ln({dl:e.ba,dS:Zv(e.ed),dT:T1(e.ed),dV:Kv(e.ed)}),n=b(F1,E1,e.cY,b(ef,A1,Tc(e.cc),b(ef,I1,e.b$,r)));return n},V1=function(e){return{$:1,a:e}},je=function(e){var r=e;return de(r)},R1=function(e){return{dw:V1(je(e.fs)),dM:e.dM}},ra=function(e){return e},Gr={io:0,is:0,dU:0},nf=Dr,un=function(e){return e},af=un({io:1,is:0,dU:0}),Dc=af,Fc=un({io:0,is:0,dU:1}),Ac=Fc,U1=nf({dl:Gr,dS:Ac,dT:Dc}),j1=function(e){var r=e.ba,n=e.b$,a=e.cc,i=e.fs;return R1({dM:B1({b$:ra(n),cY:cn(1e3),cc:ra(a),ba:P1(r),ed:U1}),fs:cn(i)})},N1=function(e){return j1({b$:t(Xv,"camera height",e),cc:t(Xv,"camera height",e),ba:{io:0,is:2,dU:0},fs:2})},H1=function(e){return e},G1=function(e){return cn(.01*e)},tf=function(e){return e},W1=function(e){return e},O1=function(e){return{$:0,a:e}},q1=O1,J1={$:3},Y1=J1,X1=J(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),K1=X1,Z1=function(e){return{$:1,a:e}},Q1=Z1,e_=function(e){return t(Mr,"height",k(e))},r_=E$,n_=function(e){return{$:2,a:e}},a_=n_,t_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return Le(l*1e3)/1e3},c=function(l){return Le(l*1e4)/100};return ha($(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(o(i)),")"]))},i_=v(function(e,r){switch(r.$){case 0:return t(Mp,e,r);case 1:return t(Tp,e,r);case 2:return t(kp,e,r);case 3:return t(Dp,e,r);case 4:return t(Fp,e,r);default:return t(Ap,e,r)}}),o_=v(function(e,r){switch(r.$){case 0:return t(ip,e,r);case 1:return t(op,e,r);case 2:return t(cp,e,r);case 3:return t(lp,e,r);case 4:return t(up,e,r);case 5:return t($p,e,r);case 6:return t(vp,e,r);case 7:return t(fp,e,r);default:return mp(e)}}),c_=T(function(e,r,n){return b(Pp,e,r,n)}),of=function(e){var r=e;return r},Ta=Wp,Ic=P(Ta,1,1,1,1),Wr=T(function(e,r,n){return t(q,function(a){return t(a,r,n)},e)}),l_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),u_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(l_,n*a/i,n,n*(1-a-i)/i)}),Lt=Rp,$_=function(e){var r=e.a,n=e.b,a=e.c;return b(Lt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ec=v(function(e,r){return $_(t(u_,e,r))}),cf=v(function(e,r){return{ek:ce(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Or=Kp,v_=function(e){return Or({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Bc=Ve(function(e,r,n,a,i){var o=a.ek?1:-1,c=P(Ta,a.cC,a.cC,a.cC,o);return Xe(i,e,c,v_(a),a.ek,r,n)}),lf=vr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,m=r,d=n,p=t(cf,c,a),g=l,f=o;e=u,r=m,n=d,a=p,i=g,o=f;continue e;case 1:var _=i.b,w=t(M,F(Bc,e,r,n,a,_),o.P);return{P:w,_:o._,hI:o.hI};case 3:var y=i.b,S=t(M,F(Bc,e,r,n,a,y),o._);return{P:o.P,_:S,hI:o.hI};case 2:var x=i.a,C=t(M,F(Bc,e,r,n,a,x),o.hI);return{P:o.P,_:o._,hI:C};default:var I=i.a;return b(Ae,P(lf,e,r,n,a),o,I)}}),f_=J(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),uf=f_,Vc=J(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),m_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Vc,518,r,n,a)},s_=v(function(e,r){return{$:6,a:e,b:r}}),d_=s_,$f=$([m_({ab:1,ac:0,ai:!1}),P(uf,!1,!1,!1,!1),t(d_,0,1)]),ka=519,Rc=8,vf=15,Da=7681,p_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Pe=tp,g_=v(function(e,r){return{$:0,a:e,b:r}}),h_=g_({d5:1,ei:0,eS:5}),gr=Bp,b_=h_($([{cx:t(gr,-1,-1)},{cx:t(gr,1,-1)},{cx:t(gr,-1,1)},{cx:t(gr,1,1)}])),__={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},x_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(d){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m,k:d}}}}}}}}}}}},Uc=T(function(e,r,n){var a=e.dx,i=e.dc,o=e.dR,c=v(function(m,d){var p=m;return d(p)}),l=v(function(m,d){var p=m;return d(p)}),u=function(m){return t(We,c(m.bO),t(We,l(m.bz),t(We,l(m.bX),l(m.bY))))};return t(u,n,t(u,r,b(x_,a,i,o)))}),jc=function(e){return b(Uc,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},Nc=function(e){return F(Pe,$([jc(e),P(uf,!1,!1,!1,!1)]),__,p_,b_,{})},w_=Nc({bz:Da,dc:0,dx:Rc,bO:ka,dR:vf,bX:Da,bY:Da}),y_=516,ff=5386,Qe=7680,S_=function(e){return t(wt,2,e+4)},mf=function(e){return Nc({bz:Qe,dc:vf,dx:Rc,bO:y_,dR:S_(e),bX:ff,bY:ff})},C_=T(function(e,r,n){return ar($([b(Wr,e,n,$f),$([mf(r),w_])]))}),L_=v(function(e,r){return ar(t(Tu,C_(e),r))}),z_=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Vc,513,r,n,a)},P_=z_({ab:1,ac:0,ai:!0}),M_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m}}}}}}}}}}},T_=function(e){var r=e.cz,n=e.cf,a=e.b0,i=e.bZ,o=e.b6,c=e.fI,l=v(function(u,m){var d=u.a,p=u.b,g=u.c,f=m.a,_=m.b,w=m.c;return M_(d)(p)(g)(f)(_)(w)(r)(n)(a)(i)});return t(l,o,c)},k_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),sf=v(function(e,r){var n=e,a=r;return b(k_,32774,n,a)}),D_=1,df=771,F_=770,Hc=T_({bZ:0,fI:t(sf,D_,df),b0:0,b6:t(sf,F_,df),cf:0,cz:0}),Fa=$([P_,Hc]),A_=function(e){var r=e;return r.eL},I_=function(e){var r=e;return r.eM},pf=function(e){var r=e;return r.eN},E_=function(e){var r=e;return r.eO},B_=function(e){var r=e;return r.eP},gf=function(e){var r=e;return r.eQ},$n=v(function(e,r){var n=e,a=r;return a-n}),hf=function(e){return E(t($n,E_(e),A_(e)),t($n,B_(e),I_(e)),t($n,gf(e),pf(e)))},bf=function(e){var r=e;return Zn(r)},V_=function(e){return e},R_=function(e){return ln({dl:V_({io:e.K,is:e.L,dU:e.M}),dS:un({io:e.t,is:e.u,dU:e.v}),dT:un({io:e.w,is:e.x,dU:e.y}),dV:un({io:e.z,is:e.A,dU:e.B})})},Gc=v(function(e,r){var n=e,a=r,i=n.dV,o=i,c=n.dT,l=c,u=n.dS,m=u;return{io:a.io*m.io+a.is*m.is+a.dU*m.dU,is:a.io*l.io+a.is*l.is+a.dU*l.dU,dU:a.io*o.io+a.is*o.is+a.dU*o.dU}}),_f=v(function(e,r){var n=e,a=r,i=n.dl,o=i,c=a.io-o.io,l=a.is-o.is,u=a.dU-o.dU,m=n.dV,d=m,p=n.dT,g=p,f=n.dS,_=f;return{io:c*_.io+l*_.is+u*_.dU,is:c*g.io+l*g.is+u*g.dU,dU:c*d.io+l*d.is+u*d.dU}}),xf=v(function(e,r){return{dl:t(_f,e,Zn(r)),dS:t(Gc,e,Dn(r)),dT:t(Gc,e,Fn(r)),dV:t(Gc,e,An(r))}}),Wc=T(function(e,r,n){return{io:e,is:r,dU:n}}),Mi=function(e){var r=e;return r},Be=v(function(e,r){var n=e,a=r;return t(br,n,a)}),Ne=v(function(e,r){var n=e,a=r;return t(xa,n,a)}),U_=v(function(e,r){var n=Mi(r),a=Mi(e);return{eL:t(Be,a.eL,n.eL),eM:t(Be,a.eM,n.eM),eN:t(Be,a.eN,n.eN),eO:t(Ne,a.eO,n.eO),eP:t(Ne,a.eP,n.eP),eQ:t(Ne,a.eQ,n.eQ)}}),Sr=function(e){var r=e;return r},j_=function(e){var r=e;return E(r.io,r.is,r.dU)},Oc=function(e){var r=e;return .5*r},zt=v(function(e,r){var n=e,a=r;return a+n}),N_=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Oc(je(a)),c=Oc(je(n)),l=Oc(je(i)),u=j_(r),m=u.a,d=u.b,p=u.c;return{eL:t(zt,c,m),eM:t(zt,o,d),eN:t(zt,l,p),eO:t($n,c,m),eP:t($n,o,d),eQ:t($n,l,p)}}),wf=J(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dU*r,m=i.is*r,d=i.io*r,p=Sr(An(e)),g=de(l*p.io)+de(c*p.is)+de(o*p.dU),f=Sr(Fn(e)),_=de(l*f.io)+de(c*f.is)+de(o*f.dU),w=Sr(Dn(e)),y=de(l*w.io)+de(c*w.is)+de(o*w.dU),S=t(N_,E(y,_,g),t(_f,e,b(Wc,d,m,u)));if(a.$)return N(S);var x=a.a;return N(t(U_,x,S))}),qc=J(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 1:var d=i.a,p=P(wf,e,r,d,n),c=e,l=r,u=p,m=o;e=c,r=l,n=u,a=m;continue e;case 2:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 3:var d=i.a,p=P(wf,e,r,d,n),c=e,l=r,u=p,m=o;e=c,r=l,n=u,a=m;continue e;case 4:var g=i.a,c=e,l=r,u=P(qc,e,r,n,g),m=o;e=c,r=l,n=u,a=m;continue e;default:var f=i.a,_=i.b,w=t(xf,R_(f),e),y=r*f.cC,c=e,l=r,u=P(qc,w,y,n,$([_])),m=o;e=c,r=l,n=u,a=m;continue e}}else return n}),Aa=Up,Ia=jp,Ea=Np,yf=function(e){return{$:4,a:e}},H_=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Pt=function(e){return yf(t(H_,e,D))},G_={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},W_=function(e){var r=e;return r},Sf=Nc({bz:Da,dc:0,dx:Rc,bO:ka,dR:255,bX:Da,bY:Da}),Ba=ys,vn=0,O_=function(e){var r=e,n=t(br,de(r.io),t(br,de(r.is),de(r.dU)));if(n){var a=r.dU/n,i=r.is/n,o=r.io/n,c=Ba(o*o+i*i+a*a);return c*n}else return vn},lr={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},Cr=v(function(e,r){var n=e,a=r;return Or({eu:n.io,ev:n.cz,ew:a.io,ex:a.cz,ey:n.is,ez:n.cf,eA:a.is,eB:a.cf,eC:n.dU,eD:n.b0,eE:a.dU,eF:a.b0,eG:n.dJ,eH:n.du,eI:a.dJ,eJ:a.du})}),Mt=z({bF:t(Cr,lr,lr),cm:t(Cr,lr,lr),cn:t(Cr,lr,lr),co:t(Cr,lr,lr)},P(Ta,0,0,0,0)),we=v(function(e,r){var n=r;return e*n}),Cf=514,Lf=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(Vc,515,r,n,a)},zf=240,q_=$([Lf({ab:1,ac:0,ai:!0}),jc({bz:Qe,dc:zf,dx:0,bO:Cf,dR:0,bX:Qe,bY:Qe}),Hc]),J_=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,c=je(a),l=c,u=je(i),m=u,d=n.dw;if(d.$){var g=d.a;return No(m)?Or({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Or({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-l),eF:-(m+l)/(m-l),eG:0,eH:0,eI:0,eJ:1})}else{var p=d.a;return No(m)?Or({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Or({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(m+l)/(m-l),eF:-2*m*l/(m-l),eG:0,eH:0,eI:-1,eJ:0})}}),Ti=v(function(e,r){return(1&e>>r)==1?0:1}),Y_=function(e){return $([Lf({ab:1,ac:0,ai:!0}),jc({bz:Qe,dc:zf,dx:e,bO:Cf,dR:0,bX:Qe,bY:Qe}),Hc])},X_=T(function(e,r,n){return ar(t(q,function(a){var i=a<<4,o=P(Ta,t(Ti,a,0),t(Ti,a,1),t(Ti,a,2),t(Ti,a,3));return b(Wr,e,z(r,o),Y_(i))},t(en,1,t(wt,2,n)-1)))}),fn=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},Va=function(e){var r=e;return r},K_=Zp,Pf=function(e){var r=e;return fn(An(r))},Mf=un({io:0,is:1,dU:0}),Jc=Mf,Z_={dl:Gr,dS:Dc,dT:Jc,dV:Ac},ki=function(e){var r=e;return r},Q_=function(e){var r=ki(Zn(e)),n=Sr(An(e)),a=Sr(Fn(e)),i=Sr(Dn(e));return Or({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dU,eD:a.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},e2=v(function(e,r){var n=r;return Q_(t(xf,n,e))}),r2=function(e){return t(e2,Z_,e)},n2=function(e){var r=e;return r.dM},a2=function(e){var r=e;return Dn(r)},t2=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),i2=function(e){var r=e;return Fn(r)},o2=function(e){var r=n2(e.f0),n=ln({dl:bf(r),dS:a2(r),dT:i2(r),dV:fn(Pf(r))}),a=Pt(e.a8),i=a,o=P(qc,n,1,U,$([i]));if(o.$===1)return D;var c=o.a,l=r2(r),u=t(we,.99,t(Be,je(e.a3),Tc(pf(c)))),m=hf(c),d=m.a,p=m.b,g=m.c,f=O_(b(t2,d,p,g)),_=t(we,1.01,t(zt,f,Tc(gf(c)))),w=t(J_,e.f0,{fM:e.fM,gv:_,hd:u}),y=K_(w).eJ,S=y?Sr(fn(Pf(r))):Va(bf(r)),x=function(){var me=e.cG;switch(me.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var ye=me.a;return z(3,ye);case 4:var ye=me.a;return z(4,ye);default:return z(5,0)}}(),C=x.a,I=x.b,O=e.cd,K=O,G=t(Ec,K,e.cK),Y=G,X=Or({eu:0,ev:S.io,ew:Aa(Y),ex:e.ff,ey:0,ez:S.is,eA:Ia(Y),eB:W_(f),eC:0,eD:S.dU,eE:Ea(Y),eF:C,eG:0,eH:y,eI:0,eJ:I}),V=Xe(lf,X,l,w,G_,i,{P:D,_:D,hI:D}),ne=e.cl;switch(ne.$){case 0:var ve=ne.a;return ar($([b(Wr,V.P,z(ve,Ic),Fa),b(Wr,V._,Mt,Fa)]));case 1:var ve=ne.a;return ar($([b(Wr,V.P,Mt,Fa),$([Sf]),b(Wr,V.hI,ve.bF,$f),$([mf(0)]),b(Wr,V.P,z(ve,Ic),q_),b(Wr,V._,Mt,Fa)]));default:var xe=ne.a,fe=ne.b;return ar($([b(Wr,V.P,z(fe,Ic),Fa),$([Sf]),t(L_,V.hI,xe),b(X_,V.P,fe,Rn(xe)),b(Wr,V._,Mt,Fa)]))}},c2=function(e){return t(Mr,"width",k(e))},l2=v(function(e,r){var n=$([Q1(1),a_(0),q1(!0),P(K1,0,0,0,0)]),a=function(){var C=e.cO;switch(C.$){case 0:return E(n,"0",1);case 1:return E(t(M,Y1,n),"1",1);default:var I=C.a;return E(n,"0",I)}}(),i=a.a,o=a.b,c=a.c,l=e.a4,u=l.a,m=l.b,d=of(m),p=t(pr,"height",k(d)+"px"),g=of(u),f=g/d,_=t(ga,function(C){return o2({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,cd:C.cd,cl:C.cl,ff:c,cG:C.cG,cK:C.cK})},r),w=t(pr,"width",k(g)+"px"),y=e.a1,S=y,x=t_(S);return b(r_,"div",$([t(pr,"padding","0px"),w,p]),$([z(o,b(c_,i,$([c2(Le(g*c)),e_(Le(d*c)),w,p,t(pr,"display","block"),t(pr,"background-color",x)]),_))]))}),u2=function(e){return t(l2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},Tf=function(e){return e},kf=Tf({io:.31271,is:.32902}),$2=v(function(e,r){var n=e,a=Sr(r.gm),i=a.io,o=a.is,c=a.dU,l=t(Ec,r.c0,r.cT),u=l;return{b0:Ea(u),f3:n,cf:Ia(u),du:0,cz:Aa(u),dJ:1,io:-i,is:-o,dU:-c}}),v2=function(e){return e},f2=function(e){return v2(1.2*t(wt,2,e))},Yc=function(e){return e},m2={$:0},s2=m2,Df=function(e){return e},d2=v(function(e,r){var n=e,a=r;return le(a,n)>0}),Ff=function(e){var r=e;return r},p2=function(e){e:for(;;){if(ce(e.gZ,vn)&&ce(e.g_,vn))return lr;if(t(d2,je(e.gZ),je(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:fn(e.fm)};e=r;continue e}else{var n=de(Ff(e.g_)/Xn),a=de(Ff(e.gZ)/Xn),i=Sr(e.fm),o=i.io,c=i.is,l=i.dU,u=t(Ec,Df(1),e.cT),m=u;return{b0:a*Ea(m),f3:!1,cf:a*Ia(m),du:n/a,cz:a*Aa(m),dJ:3,io:o,is:c,dU:l}}}},Af=function(e){return p2({cT:e.cT,gZ:e.c0,g_:vn,fm:e.fm})},If=T(function(e,r,n){return le(n,e)<0?e:le(n,r)>0?r:n}),g2=function(e){var r=e;return r},Ef=function(e){var r=b(If,1667,25e3,g2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Tf({io:n,is:a})},Bf=function(e){return e},h2=Ef(Bf(12e3)),b2=Ef(Bf(5600)),_2=function(e){return{$:2,a:e}},x2=function(e){return _2(e)},w2=v(function(e,r){return{$:2,a:e,b:r}}),Vf=function(e){return{$:0,a:e}},Di=function(e){var r=e;return r},y2=function(e){var r=e;return r.f3},S2=Vf(Mt.a),C2=v(function(e,r){var n=v(function(a,i){var o=i.a,c=i.b;return e(a)?z(t(M,a,o),c):z(o,t(M,a,c))});return b(Ge,n,z(D,D),r)}),L2=function(e){var r=e;return Or({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},z2=be(function(e,r,n,a,i,o,c,l){var u=t(C2,y2,$([Di(e),Di(r),Di(n),Di(a)])),m=u.a,d=u.b;if(m.b){var p=j(m,d);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,f=p.b,_=f.a,w=f.b,y=w.a,S=w.b,x=S.a;return t(w2,t(q,L2,m),{bF:t(Cr,g,_),cm:t(Cr,y,x),cn:t(Cr,i,o),co:t(Cr,c,l)})}else return S2}else return Vf({bF:t(Cr,e,r),cm:t(Cr,n,a),cn:t(Cr,i,o),co:t(Cr,c,l)})}),P2=T(function(e,r,n){return Ga(z2,e,r,n,lr,lr,lr,lr,lr)}),M2=function(e){var r=t($2,W1(e.hI),{cT:b2,gm:e.hZ,c0:Yc(8e4)}),n=Af({cT:h2,c0:Yc(2e4),fm:e.fm}),a=Af({cT:kf,c0:Yc(15e3),fm:fn(e.fm)}),i=b(P2,r,n,a);return u2({cO:x2(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:f2(15),cl:i,cG:s2,cK:kf})},T2=function(e){var r=e;return r},Fi=function(e){var r=e;return T2(r.fN)},Rf=J(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),k2=J(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Uf=J(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),jf=J(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),D2=J(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),F2=J(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),A2=J(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Xc=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P(A2,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(Rf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(k2,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(Uf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(F2,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(jf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(D2,r,i,a,1);case 8:return e;case 9:return e;default:return e}},Kc={$:0},I2=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var u=l.a,m=l.b,d=Mi(c(u)),p=t(Ne,d.eO,e),g=t(Be,d.eL,r),f=t(Ne,d.eP,n),_=t(Be,d.eM,a),w=t(Ne,d.eQ,i),y=t(Be,d.eN,o),S=c,x=m;e=p,r=g,n=f,a=_,i=w,o=y,c=S,l=x;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),E2=T(function(e,r,n){var a=Mi(e(r));return Ga(I2,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),Zc=v(function(e,r){var n=e,a=r;return le(a,n)<1}),Nf=function(e){return t(Zc,e.eL,e.eO)&&t(Zc,e.eM,e.eP)&&t(Zc,e.eN,e.eQ)?e:{eL:t(Be,e.eO,e.eL),eM:t(Be,e.eP,e.eM),eN:t(Be,e.eQ,e.eN),eO:t(Ne,e.eO,e.eL),eP:t(Ne,e.eP,e.eM),eQ:t(Ne,e.eQ,e.eN)}},Tt=function(e){var r=e;return r},na=function(e){var r=e;return r.io},aa=function(e){var r=e;return r.is},ta=function(e){var r=e;return r.dU},Hf=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=na(n),c=aa(n),l=ta(n),u=na(a),m=aa(a),d=ta(a),p=na(i),g=aa(i),f=ta(i);return Nf({eL:t(Be,o,t(Be,u,p)),eM:t(Be,c,t(Be,m,g)),eN:t(Be,l,t(Be,d,f)),eO:t(Ne,o,t(Ne,u,p)),eP:t(Ne,c,t(Ne,m,g)),eQ:t(Ne,l,t(Ne,d,f))})},Gf=Hp,ur=function(e){return Gf(ki(e))},Wf=function(e){var r=e;return r},Ai=function(e){return Gf(Wf(e))},B2=v(function(e,r){var n=e,a=r;return{io:a.is*n.dU-a.dU*n.is,is:a.dU*n.io-a.io*n.dU,dU:a.io*n.is-a.is*n.io}}),Qc=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dU:a.dU-n.dU}}),V2={io:0,is:0,dU:0},R2=v(function(e,r){var n=e,a=r,i=t(br,de(a.io),t(br,de(a.is),de(a.dU)));if(i){var o=a.dU/i,c=a.is/i,l=a.io/i,u=Ba(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dU:n*o/u}}else return V2}),U2=R2(Df(1)),Of=T(function(e,r,n){var a=t(Qc,r,n),i=t(Qc,e,r);return U2(t(B2,a,i))}),j2=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=Ai(b(Of,n,a,i));return E({q:o,cx:ur(n)},{q:o,cx:ur(a)},{q:o,cx:ur(i)})},N2=v(function(e,r){return{$:2,a:e,b:r}}),qf=N2({d5:3,ei:0,eS:4}),H2=function(e){if(e.b){var r=e.a,n=e.b,a=qf(t(q,j2,e)),i=b(E2,Hf,r,n);return P(Rf,i,e,a,0)}else return Kc},Lr=T(function(e,r,n){return E(e,r,n)}),Oe=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),Jf=function(){var e=cn(1),r=cn(1),n=cn(1),a=t(we,-.5,e),i=t(we,-.5,r),o=t(we,-.5,n),c=b(Oe,o,i,a),l=t(we,.5,e),u=b(Oe,o,i,l),m=t(we,.5,r),d=b(Oe,o,m,a),p=b(Oe,o,m,l),g=t(we,.5,n),f=b(Oe,g,i,a),_=b(Oe,g,m,a),w=b(Oe,g,i,l),y=b(Oe,g,m,l);return Xc(H2($([b(Lr,c,_,f),b(Lr,c,d,_),b(Lr,u,w,y),b(Lr,u,y,p),b(Lr,f,_,y),b(Lr,f,y,w),b(Lr,c,p,d),b(Lr,c,u,p),b(Lr,c,f,w),b(Lr,c,w,u),b(Lr,d,y,_),b(Lr,d,p,y)])))}(),Ii={$:0},G2=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),W2=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(a),m=Ai(b(Of,u,l,c)),d={q:m,cx:ur(u)},p={q:m,cx:ur(l)},g={q:m,cx:ur(c)};return t(M,d,t(M,p,t(M,g,n)))}),el=function(e){var r=e;return r.H},O2=J(function(e,r,n,a){if(r.$===1)return U;var i=r.a;if(n.$===1)return U;var o=n.a;if(a.$===1)return U;var c=a.a;return N(b(e,i,o,c))}),rl=4294967295>>>32-Qa,nl=cs,q2=T(function(e,r,n){e:for(;;){var a=rl&r>>>e,i=t(nl,a,n);if(i.$){var m=i.a;return t(nl,rl&r,m)}else{var o=i.a,c=e-Qa,l=r,u=o;e=c,r=l,n=u;continue e}}}),J2=function(e){return e>>>5<<5},Y2=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||le(e,n)>-1?U:le(e,J2(n))>-1?N(t(nl,rl&e,o)):N(b(q2,a,e,i))}),al=function(e){var r=e;return r.au},tl=v(function(e,r){return t(Y2,e,al(r))}),X2=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(O2,T(function(c,l,u){return E(c,l,u)}),t(tl,a,e),t(tl,i,e),t(tl,o,e))};return t(_n,r,el(e))},K2=T(function(e,r,n){e:for(;;){var a=t(Eo,fr,e),i=a.a,o=a.b;if(le(Io(i),fr)<0)return t(Vu,!0,{C:r,n,r:i});var c=o,l=t(M,Iu(i),r),u=n+1;e=c,r=l,n=u;continue e}}),il=function(e){return e.b?b(K2,e,D,0):Fu},Z2=v(function(e,r){return!t(at,t(ct,Dg,e),r)}),Q2=function(e){var r=e.a;return r},Yf=v(function(e,r){var n=Q2(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&le(o,n)<0&&c>=0&&le(c,n)<0&&l>=0&&le(l,n)<0};return t(Z2,a,r)?{H:r,au:e}:{H:t(P$,a,r),au:e}}),ex=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=ex({d5:1,ei:3,eS:4}),Ei=v(function(e,r){var n=Va(r),a=Va(e);return z(E(a.io,a.is,a.dU),E(n.io,n.is,n.dU))}),Xf=b(Lt,0,0,0),ol=vr(function(e,r,n,a,i,o){var c=o.a,l=o.b,u=o.c,m=t(ti,t(Ei,e,r),i);if(m.$){var p={q:Xf,cx:ur(r)},g={q:Xf,cx:ur(e)},f=u+1,_=u;return E(t(M,E(n,_,f),t(M,E(n,f,a),c)),t(M,p,t(M,g,l)),u+2)}else{var d=m.a;return E(t(M,E(n,d,a),c),l,u)}}),rx=Ve(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,m=n.b,d=e(u),p=e(l),g=e(c),f=a+2,_=a+1,w=a,y=e,S=r,x=m,C=a+3,I=Xe(ol,d,g,f,w,r,Xe(ol,p,d,_,f,r,Xe(ol,g,p,w,_,r,i)));e=y,r=S,n=x,a=C,i=I;continue e}else{var O=i,K=O.a,G=O.b;return z(K,rr(G))}}),nx=Ve(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,m=r.b,d=e(u),p=e(l),g=e(c),f=n+2,_=n+1,w=n,y=b(ma,t(Ei,g,d),f,b(ma,t(Ei,d,p),_,b(ma,t(Ei,p,g),w,i))),S=t(M,E(w,_,f),a),x=e,C=m,I=n+3,O=S,K=y;e=x,r=C,n=I,a=O,i=K;continue e}else return E(a,i,n)}),ia=T(function(e,r,n){var a=X2(n),i=b(Ge,W2(r),D,a),o=F(nx,r,a,0,D,Xo),c=o.a,l=o.b,u=o.c,m=F(rx,r,l,a,0,E(c,D,u)),d=m.a,p=m.b,g=yn(p)?i:j(i,p);return b(G2,e,t(Yf,il(g),d),t(kt,g,d))}),cl=function(e){return{H:t(q,function(r){return E(3*r,3*r+1,3*r+2)},t(en,0,Rn(e)-1)),au:il(ar(t(q,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},Kf=function(e){switch(e.$){case 0:return Ii;case 1:var r=e.a,n=e.b,a=t(q,Tt,n);return b(ia,r,Dr,cl(a));case 2:var r=e.a,n=e.b,a=t(q,Tt,n);return b(ia,r,Dr,cl(a));case 3:var r=e.a,i=e.b;return b(ia,r,Dr,i);case 4:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cx},i);case 5:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cx},i);case 6:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cx},i);case 7:var r=e.a,i=e.b;return b(ia,r,function(o){return o.cx},i);case 8:return Ii;case 9:return Ii;default:return Ii}},Zf=Kf(Jf),Bi=function(e){var r=e;return r.a4},Qf={$:0},B=Qf,qe=v(function(e,r){return{$:1,a:e,b:r}}),ax={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},tx=1029,ix=function(e){return{$:5,a:e}},em=function(e){var r=e;return ix(r)},ox=em(tx),cx=1028,lx=em(cx),$r=T(function(e,r,n){return r===1?e?t(M,ox,n):t(M,lx,n):n}),rm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ll=J(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,d,p){return F(Pe,b($r,l,a,p),rm,ax,n,{b7:e,c,d:o,e:m,f:i,g:u})}))}),ul={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},nm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},mn=J(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,d,p){return F(Pe,b($r,l,a,p),nm,ul,n,{aO:e,c,d:o,e:m,f:i,g:u})}))}),am=v(function(e,r){return{$:3,a:e,b:r}}),ux={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},tm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},$x=J(function(e,r,n,a){return t(am,n,be(function(i,o,c,l,u,m,d,p){return F(Pe,p,tm,ux,a,{aO:e,c,d:o,cw:r,e:m,f:i,g:u})}))}),$l={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Vi=Gp,sn=Ve(function(e,r,n,a,i){return t(qe,n,be(function(o,c,l,u,m,d,p,g){return F(Pe,b($r,u,i,g),nm,$l,a,{a6:t(Vi,Dt(r),e),c:l,d:c,e:d,f:o,g:m})}))}),vx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},fx=Ve(function(e,r,n,a,i){return t(am,a,be(function(o,c,l,u,m,d,p,g){return F(Pe,g,tm,vx,i,{a6:t(Vi,Dt(r),e),c:l,d:c,cw:n,e:d,f:o,g:m})}))}),im={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},om={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ri=J(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,d,p){var g=d.a,f=d.b;return F(Pe,b($r,l,a,p),om,im,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,dd:e,c,d:o,e:m,f:i,g:u})}))}),cm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},lm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},mx=vr(function(e,r,n,a,i,o){return t(qe,a,be(function(c,l,u,m,d,p,g,f){var _=g.a,w=g.b;return F(Pe,b($r,m,o,f),lm,cm,i,{U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,de:e,c:u,d:l,bg:r,e:p,f:c,bm:n,g:d})}))}),um={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},sx=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(d){return t(qe,u,be(function(p,g,f,_,w,y,S,x){var C=S.a,I=S.b;return F(Pe,b($r,_,d,x),lm,um,m,{cS:e,cU:r,cV:o,cW:a,U:I,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:f,d:g,bg:c,e:y,dB:n,f:p,bm:l,g:w})}))}}}}}}}}}}},$m={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},Ui=vr(function(e,r,n,a,i,o){return t(qe,a,be(function(c,l,u,m,d,p,g,f){var _=g.a,w=g.b;return F(Pe,b($r,m,o,f),om,$m,i,{cR:e,U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,dg:n,c:u,d:l,e:p,dA:r,f:c,g:d})}))}),dx=function(e){return{$:0,a:e}},vm=v(function(e,r){return{$:1,a:e,b:r}}),Ft=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),px=function(e){return P(Ta,Aa(e),Ia(e),Ea(e),1)},vl=P(Ta,0,0,0,0),ji=v(function(e,r){if(r.$){var a=r.a.E;return z(a,vl)}else{var n=r.a;return z(e,px(n))}}),fm=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return t(vm,z(i,vl),t(Ft,i,r))}else if(n.b.$){var i=n.b.a.E;return t(vm,t(ji,i,e),t(Ft,i,r))}else{var a=n.a.a;return n.b.a,dx(a)}}),gx=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ni=J(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),hx=J(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bx=function(e){return t(gr,e,1)},fl=t(gr,0,0),Ra=v(function(e,r){if(r.$){var a=r.a.E;return z(a,fl)}else{var n=r.a;return z(e,bx(n))}}),mm=J(function(e,r,n,a){var i=P(hx,e,r,n,a);if(i.a.$){var u=i.a.a.E;return P(Ni,z(u,vl),t(Ra,u,r),t(Ra,u,n),t(Ft,u,a))}else if(i.b.$){var u=i.b.a.E;return P(Ni,t(ji,u,e),z(u,fl),t(Ra,u,n),t(Ft,u,a))}else if(i.c.$){var u=i.c.a.E;return P(Ni,t(ji,u,e),t(Ra,u,r),z(u,fl),t(Ft,u,a))}else if(i.d.$){var u=i.d.a.E;return P(Ni,t(ji,u,e),t(Ra,u,r),t(Ra,u,n),z(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(gx,o,c,l)}}),_x={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},ml=Ve(function(e,r,n,a,i){return t(qe,n,be(function(o,c,l,u,m,d,p,g){return F(Pe,b($r,u,i,g),rm,_x,a,{cP:Dt(r),b7:e,c:l,d:c,e:d,f:o,g:m})}))}),sm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},xx=J(function(e,r,n,a){return t(qe,r,be(function(i,o,c,l,u,m,d,p){var g=d.a,f=d.b;return F(Pe,b($r,l,a,p),sm,cm,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,de:e,c,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),wx=co(function(e,r,n,a,i,o,c,l,u){return t(qe,c,be(function(m,d,p,g,f,_,w,y){var S=w.a,x=w.b;return F(Pe,b($r,g,u,y),sm,um,l,{cS:e,cU:r,cV:o,cW:a,U:x,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,dh:i,c:p,d,bg:e,e:_,dB:n,f:m,bm:0,g:f})}))}),At=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),yx=function(e){var r=e;return b(At,r.eO,r.eL,.5)},Sx=function(e){var r=e;return b(At,r.eP,r.eM,.5)},Cx=function(e){var r=e;return b(At,r.eQ,r.eN,.5)},Lx=function(e){return b(Oe,yx(e),Sx(e),Cx(e))},ie=function(e){var r=hf(e),n=r.a,a=r.b,i=r.c;return{f4:ki(Lx(e)),gD:n/2,gE:a/2,gF:i/2}},sl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return P(ll,l,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(ll,l,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(ll,l,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var n=e.b.a;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(mn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(mn,n,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return P($x,n,c,ie(a),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,m=e.c;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return F(ml,l,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(ml,l,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(ml,l,m,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return F(sn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return F(sn,u,m,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return F(fx,u,m,c,ie(a),i)}}case 2:e.a;var d=e.b,p=e.c,g=t(fm,d,p);if(g.$){var w=g.a,y=w.a;w.b;var S=g.b,x=S.a,C=S.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return P(xx,y,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Xe(mx,y,x,C,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}else{var f=g.a;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,_=r.d;return P(Ri,f,ie(a),i,_);case 3:return B;case 4:var a=r.a,i=r.c,_=r.d;return P(Ri,f,ie(a),i,_);case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return P(Ri,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(Ri,f,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}default:e.a;var I=e.b,O=e.c,K=e.d,p=e.e,G=P(mm,I,O,K,p);if(G.$){var ne=G.a,ve=ne.a,xe=ne.b,fe=G.b,me=fe.a,ye=fe.b,se=G.c,Fe=se.a,Me=se.b,Ye=G.d,x=Ye.a,C=Ye.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return ns(wx,ve,xe,me,ye,Fe,Me,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return sx(ve)(xe)(me)(ye)(Fe)(Me)(x)(C)(ie(a))(i)(o);case 8:return B;case 9:return B;default:return B}}else{var Y=G.a,X=G.b,V=G.c;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 3:return B;case 4:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Xe(Ui,Y,X,V,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}}}),dl=function(e){var r=e;return r.io},pl=function(e){var r=e;return r.is},gl=function(e){var r=e;return r.dU},zx=function(e){var r=e,n=gl(r.dV),a=pl(r.dV),i=dl(r.dV),o=gl(r.dT),c=pl(r.dT),l=dl(r.dT),u=gl(r.dS),m=pl(r.dS),d=dl(r.dS);return d*c*n+m*o*i+u*l*a-u*c*i-m*l*n-d*o*a>0},Px=function(e){var r=ki(Zn(e)),n=Sr(An(e)),a=Sr(Fn(e)),i=Sr(Dn(e));return{ek:zx(e),t:i.io,u:i.is,v:i.dU,w:a.io,x:a.is,y:a.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},Ua=v(function(e,r){return{$:5,a:e,b:r}}),dm=v(function(e,r){var n=r;switch(n.$){case 0:return B;case 5:var a=n.a,i=n.b,o=t(cf,a,e);return t(Ua,o,i);case 1:return t(Ua,e,n);case 3:return t(Ua,e,n);case 2:return t(Ua,e,n);default:return t(Ua,e,n)}}),pm=v(function(e,r){return t(dm,Px(e),r)}),Hi=function(e){return{$:2,a:e}},Mx=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dU:i*o.dU},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),Tx=qp,kx=Op,gm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){var d=e.a,p=e.b,g=e.c,f=kx(a),_=f.io,w=f.is,y=f.dU,S=f.ft,x=Tx({ft:S,io:_*d,is:w*p,dU:y*g});return Ga(r,n,x,i,o,c,l,u,m)}}}}}}}}}},hl=v(function(e,r){switch(r.$){case 0:return Qf;case 5:var n=r.a,a=r.b;return t(Ua,n,t(hl,e,a));case 1:var i=r.a,o=r.b;return t(qe,t(Mx,e,i),t(gm,e,o));case 3:return r;case 2:var o=r.a;return Hi(t(gm,e,o));default:var c=r.a;return yf(t(q,hl(e),c))}}),bl=v(function(e,r){var n=r;return t(hl,e,n)}),_l={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},hm=7683,bm=7682,Dx=b(Uc,{dc:0,dx:0,dR:15},{bz:Qe,bO:ka,bX:Qe,bY:hm},{bz:Qe,bO:ka,bX:Qe,bY:bm}),Fx=b(Uc,{dc:0,dx:0,dR:15},{bz:Qe,bO:ka,bX:Qe,bY:bm},{bz:Qe,bO:ka,bX:Qe,bY:hm}),xl=v(function(e,r){return e?t(M,Fx,r):t(M,Dx,r)}),Ax={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Ix=function(e){if(e.$){var r=e.c;return N(be(function(n,a,i,o,c,l,u,m){return F(Pe,t(xl,o,m),Ax,_l,r,{c:i,d:a,e:l,f:n,cD:u,g:c})}))}else return U},Gi=function(e){var r=Ix(e);if(r.$)return B;var n=r.a;return Hi(n)},Ex=J(function(e,r,n,a){var i=t(sl,n,Jf),o=function(){var d=z(e,r);return d.a?d.b?Pt($([i,Gi(Zf)])):i:d.b?Gi(Zf):B}(),c=Bi(a),l=c.a,u=c.b,m=c.c;return t(pm,Fi(a),t(bl,E(l,u,m),o))}),Bx=v(function(e,r){return P(Ex,!0,!0,e,r)}),wl=function(e){return{$:0,a:e}},_m=v(function(e,r){return{$:0,a:e,b:r}}),Vx=function(e){var r=gc(e),n=r.hu,a=r.gA,i=r.fS;return b(Lt,n,a,i)},Rx=function(e){return t(_m,0,wl(Vx(e)))},yl=function(e){var r=e;return r.m},It=function(e){var r=e;return Qn(r)},Ux=v(function(e,r){var n=r;return n/e}),xm=function(e){var r=e;return{io:Qn(r),is:Ma(r)}},jx=v(function(e,r){var n=e.cx,a=e.q;return t(M,{q:Ai(a),cx:ur(n)},r)}),Nx=jt(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,m=Ea(l.cx),d=Ia(l.cx),p=Aa(l.cx),g=t(xa,e,p),f=t(br,r,p),_=t(xa,n,d),w=t(br,a,d),y=t(xa,i,m),S=t(br,o,m),x=u;e=g,r=f,n=_,a=w,i=y,o=S,c=x;continue e}else return Nf({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),wm=v(function(e,r){var n=Ea(e.cx),a=Ia(e.cx),i=Aa(e.cx);return lo(Nx,i,i,a,a,n,n,r)}),Hx=function(e){var r=b(yu,jx,D,al(e));if(r.b){var n=r.a,a=r.b,i=t(kt,r,el(e)),o=t(wm,n,a);return P(Uf,o,e,i,0)}else return Kc},ym=un({io:0,is:0,dU:-1}),Sm=v(function(e,r){var n=e,a=r,i=n.dT,o=i,c=n.dS,l=c;return{io:a.io*l.io+a.is*o.io,is:a.io*l.is+a.is*o.is,dU:a.io*l.dU+a.is*o.dU}}),Wi=function(e){var r=e;return Ma(r)},Et=function(e){var r=e;return r},Sl=function(e){return ra(2*Xn*e)},Cm=nf({dl:Gr,dS:Dc,dT:Jc}),Lm=function(){var e=72,r=t(Ux,e,Sl(1)),n=cn(1),a=Et(Fc),i=Et(ym),o=cn(1),c=t(we,.5,o),l=b(Oe,vn,vn,c),u=t(we,-.5,o),m=b(Oe,vn,vn,u),d=function(f){var _=t(we,f,r),w=Et(t(Sm,Cm,xm(_))),y=t(we,It(_),n),S=t(we,Wi(_),n),x=b(Oe,y,S,c),C=b(Oe,y,S,u),I=t(_t,e,f+1),O=t(we,I,r),K=Et(t(Sm,Cm,xm(O))),G=t(we,It(O),n),Y=t(we,Wi(O),n),X=b(Oe,G,Y,u),V=b(Oe,G,Y,c);return $([E({q:i,cx:m},{q:i,cx:X},{q:i,cx:C}),E({q:w,cx:C},{q:K,cx:X},{q:K,cx:V}),E({q:w,cx:C},{q:K,cx:V},{q:w,cx:x}),E({q:a,cx:l},{q:a,cx:x},{q:a,cx:V})])},p=t(q,d,t(en,0,e-1)),g=cl(ar(p));return Xc(Hx(g))}(),zm=Kf(Lm),Pm=function(e){var r=e;return r.dl},Gx=function(e){var r=e,n=de(r.dU),a=de(r.is),i=de(r.io);if(le(i,a)<1)if(le(i,n)<1){var o=Ba(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=Ba(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if(le(a,n)<1){var o=Ba(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=Ba(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},Wx=function(e){var r=Gx(e),n=r,a=n,i=e,o=i,c={io:o.is*a.dU-o.dU*a.is,is:o.dU*a.io-o.io*a.dU,dU:o.io*a.is-o.is*a.io};return z(r,c)},Ox=function(e){var r=kc(e),n=Wx(r),a=n.a,i=n.b;return ln({dl:Pm(e),dS:a,dT:i,dV:r})},Mm=function(e){var r=e;return r.g5},Tm=function(e){var r=e;return r.hs},qx=J(function(e,r,n,a){var i=Ox(yl(a)),o=t(sl,n,Lm),c=function(){var p=z(e,r);return p.a?p.b?Pt($([o,Gi(zm)])):o:p.b?Gi(zm):B}(),l=Tm(a),u=l,m=Mm(a),d=m;return t(pm,i,t(bl,E(u,u,d),c))}),Jx=v(function(e,r){return P(qx,!0,!0,e,r)}),km={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Dm={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Bt=function(e){var r=Tt(e),n=r.a,a=r.b,i=r.c,o=Va(n),c=Va(a),l=Va(i);return Or({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dU,eD:c.dU,eE:l.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},Oi=qf($([E({dI:0},{dI:1},{dI:2})])),Yx=v(function(e,r){var n=Hf(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var i=e.b.a;return t(qe,a,be(function(x,C,I,O,K,G,Y,X){return F(Pe,b($r,O,0,X),km,ul,Oi,{aO:i,c:I,d:C,e:G,f:x,bU:Bt(r),g:K})}));case 1:if(e.b.$)return e.a,B;var o=e.b.a,c=e.c;return t(qe,a,be(function(x,C,I,O,K,G,Y,X){return F(Pe,b($r,O,0,X),km,$l,Oi,{a6:t(Vi,Dt(c),o),c:I,d:C,e:G,f:x,bU:Bt(r),g:K})}));case 2:e.a;var l=e.b,u=e.c,m=t(fm,l,u);if(m.$)return B;var d=m.a;return t(qe,a,be(function(x,C,I,O,K,G,Y,X){var V=Y.a,ne=Y.b;return F(Pe,b($r,O,0,X),Dm,im,Oi,{U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dd:d,c:I,d:C,e:G,f:x,bU:Bt(r),g:K})}));default:e.a;var p=e.b,g=e.c,f=e.d,u=e.e,_=P(mm,p,g,f,u);if(_.$)return B;var w=_.a,y=_.b,S=_.c;return t(qe,a,be(function(x,C,I,O,K,G,Y,X){var V=Y.a,ne=Y.b;return F(Pe,b($r,O,0,X),Dm,$m,Oi,{cR:w,U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dg:S,c:I,d:C,e:G,dA:y,f:x,bU:Bt(r),g:K})}))}}),Xx=function(){var e=$([{bl:t(gr,0,1)},{bl:t(gr,1,1)},{bl:t(gr,2,1)},{bl:t(gr,0,-1)},{bl:t(gr,1,-1)},{bl:t(gr,2,-1)}]),r=$([E(0,1,2),E(3,5,4),E(3,4,1),E(3,1,0),E(4,5,2),E(4,2,1),E(5,3,0),E(5,0,2)]);return t(kt,e,r)}(),Kx={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},Fm=function(e){return Hi(be(function(r,n,a,i,o,c,l,u){return F(Pe,t(xl,i,u),Kx,_l,Xx,{c:a,d:n,e:c,f:r,cD:l,bU:Bt(e),g:o})}))},Zx=J(function(e,r,n,a){var i=t(Yx,n,a),o=z(e,r);return o.a?o.b?Pt($([i,Fm(a)])):i:o.b?Fm(a):B}),Qx=v(function(e,r){return P(Zx,!0,!0,e,r)}),Cl=function(e){var r=e;return r},ew=v(function(e,r){var n=ta(r),a=ta(e),i=aa(r),o=aa(e),c=na(r),l=na(e);return{eL:t(Be,l,c),eM:t(Be,o,i),eN:t(Be,a,n),eO:t(Ne,l,c),eP:t(Ne,o,i),eQ:t(Ne,a,n)}}),rw=function(e){var r=Cl(e),n=r.a,a=r.b;return t(ew,n,a)},Am={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},nw=v(function(e,r){return{$:1,a:e,b:r}}),aw=nw({d5:2,ei:0,eS:1}),Im=aw($([z({es:0},{es:1})])),tw=v(function(e,r){var n=rw(r),a=ie(n),i=Cl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var l=e.b.a;return t(qe,a,be(function(m,d,p,g,f,_,w,y){return F(Pe,y,Am,ul,Im,{aO:l,eq:ur(c),er:ur(o),c:p,d,e:_,f:m,g:f})}));case 1:if(e.b.$)return B;var l=e.b.a,u=e.c;return t(qe,a,be(function(d,p,g,f,_,w,y,S){return F(Pe,S,Am,$l,Im,{a6:t(Vi,Dt(u),l),eq:ur(c),er:ur(o),c:g,d:p,e:w,f:d,g:_})}));case 2:return B;default:return B}}),iw=v(function(e,r){return t(tw,e,r)}),qi=function(e){var r=e;return r.f4},Ji=function(e){var r=e;return r.hs},Yi=function(e){return ra(Xn*(e/180))},Em=v(function(e,r){var n=e,a=r;return n/a}),ow=Ve(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(M,o,i);if(ce(r,e))return c;var l=e,u=r-1,m=n,d=a,p=c;e=l,r=u,n=m,a=d,i=p;continue e}}),Bm=v(function(e,r){return e<1?D:F(ow,0,e,e,r,D)}),cw=v(function(e,r){var n=e.cx,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(M,{q:Ai(a),cx:ur(n),O:t(gr,c,l)},r)}),lw=function(e){var r=b(yu,cw,D,al(e));if(r.b){var n=r.a,a=r.b,i=t(kt,r,el(e)),o=t(wm,n,a);return P(jf,o,e,i,0)}else return Kc},Vm=v(function(e,r){var n=e,a=r,i=Qn(a);return{io:i*Qn(n),is:i*Ma(n),dU:Ma(a)}}),uw=function(){var e=cn(1),r=72,n=t(en,0,r-1),a=t(Bm,r,t(At,vn,Sl(1))),i=Ka(r/2),o=t(en,0,i-1),c=t(Bm,i,t(At,Yi(90),Yi(-90))),l=il(ar(t(q,function(d){return t(q,function(p){return{q:Et(t(Vm,d,p)),cx:b(Oe,t(we,It(p)*It(d),e),t(we,It(p)*Wi(d),e),t(we,Wi(p),e)),O:z(t(Em,d,Sl(1)),t(Em,t(zt,Yi(90),p),Yi(180)))}},c)},a))),u=v(function(d,p){return d*(i+1)+p}),m=ar(t(q,function(d){return ar(t(q,function(p){var g=t(u,d+1,p),f=t(u,d,p),_=t(u,d+1,p+1),w=t(u,d,p+1);return $([E(w,_,g),E(w,g,f)])},o))},n));return Xc(lw(t(Yf,l,m)))}(),Xi=72,Ki=2*Xi,$w=v(function(e,r){e:for(;;){var n=Ki+1,a=t(_t,Ki,2*e+3),i=t(_t,Ki,2*e+2),o=2*e+1,c=2*e,l=Ki,u=t(M,E(l,c,i),t(M,E(c,a,i),t(M,E(c,o,a),t(M,E(o,n,a),r))));if(e){var m=e-1,d=u;e=m,r=d;continue e}else return u}}),vw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),fw=v(function(e,r){e:for(;;){var n=b(vw,0,2*Xn,e/Xi),a={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=t(M,a,t(M,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),mw=function(){var e=t(fw,Xi-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=t($w,Xi-1,D);return t(kt,e,r)}(),sw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Rm=function(e){return Hi(be(function(r,n,a,i,o,c,l,u){return F(Pe,t(xl,!0,u),sw,_l,mw,{aO:b(Lt,0,0,1),c:a,d:n,e:c,f:r,cD:l,g:o})}))},dw=function(e){var r=Wf(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},pw=v(function(e,r){return t(dm,dw(e),r)}),gw=J(function(e,r,n,a){var i=t(sl,n,uw),o=function(){var u=z(e,r);return u.a?u.b?Pt($([i,Rm()])):i:u.b?Rm():B}(),c=Ji(a),l=c;return t(pw,t(Qc,Gr,qi(a)),t(bl,E(l,l,l),o))}),hw=v(function(e,r){return P(gw,!0,!0,e,r)}),bw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Um=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),_w=Ve(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),xw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(_m,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(bw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(Um,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return F(_w,r,n,o,c,i)}},ww=xw,jm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(Bx,r,n)]);case 1:var r=e.a,a=e.b;return $([t(Qx,r,a)]);case 3:var r=e.a,i=e.b;return $([t(hw,ww(r),i)]);case 2:var r=e.a,o=e.b;return $([t(Jx,r,o)]);case 4:var c=e.a,l=e.b;return $([t(iw,Rx(c),l)]);default:var u=e.a;return t(ga,jm,u)}},yw=function(e){return t(ga,jm,e)},Sw=v(function(e,r){return M2({a1:H1(e.fO),f0:e.f0,a3:G1(.5),cX:e.cX,a4:z(tf(Le(e.dC.im)),tf(Le(e.dC.gH))),a8:yw(r),hI:!0,hZ:t(Vm,ra(e.hY),ra(e.h_)),fm:Ac})}),Zi=v(function(e,r){return{$:0,a:e,b:r}}),Ll=v(function(e,r){var n=e,a=r;return le(a,n)>-1}),zl=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Cw=un({io:-1,is:0,dU:0}),Lw=un({io:0,is:-1,dU:0}),zw=vr(function(e,r,n,a,i,o){var c=t(Ll,n,o)?Fc:ym,l=t(Ll,r,i)?Mf:Lw,u=t(Ll,e,a)?af:Cw,m=E(je(t($n,e,a)),je(t($n,r,i)),je(t($n,n,o))),d=b(Oe,t(zl,e,a),t(zl,r,i),t(zl,n,o)),p=ln({dl:d,dS:u,dT:l,dV:c});return{fN:p,a4:m}}),Pw=v(function(e,r){return Xe(zw,na(e),aa(e),ta(e),na(r),aa(r),ta(r))}),Mw=v(function(e,r){var n=r/2;return t(Zi,e,t(Pw,b(Wc,-n,-n,-n),b(Wc,n,n,n)))}),Qi=function(e){return{$:5,a:e}},Nm=function(e){return Qi(e)},Pl=function(e){return b(If,0,1,e<=.04045?e/12.92:t(wt,(e+.055)/1.055,2.4))},Tw=function(e){var r=gc(e),n=r.hu,a=r.gA,i=r.fS;return b(Lt,Pl(n),Pl(a),Pl(i))},kw=function(e){return b(Um,0,wl(Tw(e)),wl(0))},Ml=v(function(e,r){return{$:2,a:e,b:r}}),Tl=v(function(e,r){return{$:4,a:e,b:r}}),kl=v(function(e,r){return{$:3,a:e,b:r}}),Dl=v(function(e,r){return{$:1,a:e,b:r}}),Dw=T(function(e,r,n){return{io:e,is:r,dU:n}}),Fw=v(function(e,r){return{fN:t(rf,e,Fi(r)),a4:Bi(r)}}),Aw=v(function(e,r){var n=r;return t(ea,t(Ct,e,n.dl),n.gm)}),Iw=v(function(e,r){var n=r;return{m:t(Aw,e,n.m),g5:n.g5,hs:n.hs}}),Ew=function(e){return e},Fl=v(function(e,r){var n=Cl(r),a=n.a,i=n.b;return Ew(z(e(a),e(i)))}),Bw=v(function(e,r){return t(Fl,Ct(e),r)}),Al=v(function(e,r){return{f4:r,hs:je(e)}}),Vw=v(function(e,r){return t(Al,Ji(r),t(Ct,e,qi(r)))}),Il=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return E(e(a),e(i),e(o))}),Rw=v(function(e,r){return t(Il,Ct(e),r)}),Hm=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(Dw,n,a,i);switch(r.$){case 0:var c=r.a,l=r.b;return t(Zi,c,t(Fw,o,l));case 1:var c=r.a,u=r.b;return t(Dl,c,t(Rw,o,u));case 3:var c=r.a,m=r.b;return t(kl,c,t(Vw,o,m));case 2:var c=r.a,d=r.b;return t(Ml,c,t(Iw,o,d));case 4:var c=r.a,p=r.b;return t(Tl,c,t(Bw,o,p));default:var g=r.a;return Qi(t(q,Hm(E(n,a,i)),g))}}),Uw=function(e){return Hm(E(0,e,0))},El=function(e){return e/255},jw=T(function(e,r,n){return P(bt,El(e),El(r),El(n),1)}),Nw=T(function(e,r,n){return{fN:b(Qv,e,r,Fi(n)),a4:Bi(n)}}),Hw=v(function(e,r){var n=t(St,e,r),a=t(Pi,e,r);return function(i){var o=i;return t(ea,n(o.dl),a(o.gm))}}),Gw=T(function(e,r,n){var a=n;return{m:b(Hw,e,r,a.m),g5:a.g5,hs:a.hs}}),Ww=T(function(e,r,n){return t(Fl,t(St,e,r),n)}),Ow=T(function(e,r,n){return t(Al,Ji(n),b(St,e,r,qi(n)))}),qw=T(function(e,r,n){return t(Il,t(St,e,r),n)}),Gm=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(Zi,a,b(Nw,e,r,i));case 1:var a=n.a,o=n.b;return t(Dl,a,b(qw,e,r,o));case 3:var a=n.a,c=n.b;return t(kl,a,b(Ow,e,r,c));case 2:var a=n.a,l=n.b;return t(Ml,a,b(Gw,e,r,l));case 4:var a=n.a,u=n.b;return t(Tl,a,b(Ww,e,r,u));default:var m=n.a;return Qi(t(q,t(Gm,e,r),m))}}),Jw=t(ea,Gr,Jc),Yw=v(function(e,r){return b(Gm,Jw,ra(e),r)}),Vt=T(function(e,r,n){var a=e,i=n;return{io:a.io+r*(i.io-a.io),is:a.is+r*(i.is-a.is),dU:a.dU+r*(i.dU-a.dU)}}),Xw=T(function(e,r,n){var a=Fi(n),i=Dn(a),o=Fn(a),c=An(a),l=b(Vt,e,r,Zn(a)),u=r>=0?ln({dl:l,dS:i,dT:o,dV:c}):ln({dl:l,dS:fn(i),dT:fn(o),dV:fn(c)}),m=Bi(n),d=m.a,p=m.b,g=m.c,f=je(t(we,r,d)),_=je(t(we,r,p)),w=je(t(we,r,g));return{fN:u,a4:E(f,_,w)}}),Wm=function(e){return kc(yl(e))},Kw=function(e){return Pm(yl(e))},Zw=T(function(e,r,n){var a=je(t(we,r,Tm(n))),i=je(t(we,r,Mm(n))),o=r>=0?Wm(n):fn(Wm(n)),c=b(Vt,e,r,Kw(n));return{m:t(ea,c,o),g5:i,hs:a}}),Qw=T(function(e,r,n){return t(Fl,t(Vt,e,r),n)}),ey=T(function(e,r,n){return t(Al,t(we,de(r),Ji(n)),b(Vt,e,r,qi(n)))}),ry=T(function(e,r,n){return t(Il,t(Vt,e,r),n)}),Om=v(function(e,r){switch(r.$){case 0:var n=r.a,a=r.b;return t(Zi,n,b(Xw,Gr,e,a));case 1:var n=r.a,i=r.b;return t(Dl,n,b(ry,Gr,e,i));case 3:var n=r.a,o=r.b;return t(kl,n,b(ey,Gr,e,o));case 2:var n=r.a,c=r.b;return t(Ml,n,b(Zw,Gr,e,c));case 4:var n=r.a,l=r.b;return t(Tl,n,b(Qw,Gr,e,l));default:var u=r.a;return Qi(t(q,Om(e),u))}}),ny=v(function(e,r){return(r-Eu(r/e)*e)/e}),ay=v(function(e,r){return 360*t(ny,e,r)}),qm=P(bt,255/255,255/255,255/255,1),Jm=v(function(e,r){var n=t(_t,2,r)?qm:b(jw,17,147,216),a=wi(t(ay,8,e.d1))/4,i=.707/Qn(Xn/4-a);return Nm(r?$([t(Mw,kw(n),1),t(Uw,.3,t(Yw,a,t(Om,i,t(Jm,e,r-1))))]):D)}),ty=function(e){return t(Jm,e,20)},iy=v(function(e,r){return t(Sw,{fO:qm,f0:N1(e),cX:e.cX,dC:e.dC,hY:wi(90),h_:-wi(180)},$([ty(e)]))}),oy=P(p1,iy,S1,y1,g1);const cy={Main:{init:oy(t(W,function(e){return nr({gY:e})},t(H,"inputs",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(c){return nr({d1:c,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(c){return t(W,function(l){return t(W,function(u){return t(W,function(m){return t(W,function(d){return t(W,function(p){return nr({fJ:p,gd:d,d4:m,go:u,g4:l,hr:c,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",ci(sa)))},t(H,"left",_e))},t(H,"pressedKeys",ci(sa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(c){return t(W,function(l){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:l,hy:c,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re)))))))(0)}},Z={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ly=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function d(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function p(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Z.keyboard.downs.push(f.code),Z.keyboard.pressedKeys.push(f.code),r(f)&&(Z.keyboard.control=!0),n(f)&&(Z.keyboard.alt=!0),a(f)&&(console.log("yo"),Z.keyboard.shift=!0),i(f)&&(Z.keyboard.left=!0),o(f)&&(Z.keyboard.right=!0),c(f)&&(Z.keyboard.up=!0),l(f)&&(console.log("yey"),Z.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Z.keyboard.pressedKeys=Z.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Z.keyboard.control=!1,Z.keyboard.pressedKeys=[]),n(f)&&(Z.keyboard.alt=!1),a(f)&&(Z.keyboard.shift=!1),i(f)&&(Z.keyboard.left=!1),o(f)&&(Z.keyboard.right=!1),c(f)&&(Z.keyboard.up=!1),l(f)&&(Z.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY,u(f)&&(Z.pointer.down=!0,Z.pointer.isDown=!0),m(f)&&(Z.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Z.pointer.move=!0,Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Z.wheel.deltaX=f.deltaX,Z.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{d(Z)}),window.addEventListener("focus",f=>{d(Z)}),window.addEventListener("visibilitychange",f=>{d(Z)}),window.addEventListener("resize",()=>{Z.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,w=_-Z.clock;w<.009||(Z.dt=w,Z.clock=_,e.ports.tick.send(Z),p(Z)),window.requestAnimationFrame(g)}},uy=cy.Main.init({node:document.querySelector("#app div"),flags:{inputs:Z}});ly(uy);
