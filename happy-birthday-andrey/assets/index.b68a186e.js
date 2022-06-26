const as=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};as();function dn(e,r,n){return n.a=e,n.f=r,n}function v(e){return dn(2,e,function(r){return function(n){return e(r,n)}})}function k(e){return dn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function H(e){return dn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Be(e){return dn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function vr(e){return dn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function Nt(e){return dn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function be(e){return dn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,a,i,o,c,l,u)}}}}}}}})}function uo(e){return dn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return e(r,n,a,i,o,c,l,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function P(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function R(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Xe(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function $o(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function Ua(e,r,n,a,i,o,c,l,u){return e.a===8?e.f(r,n,a,i,o,c,l,u):e(r)(n)(a)(i)(o)(c)(l)(u)}function ts(e,r,n,a,i,o,c,l,u,m){return e.a===9?e.f(r,n,a,i,o,c,l,u,m):e(r)(n)(a)(i)(o)(c)(l)(u)(m)}var is=[];function os(e){return e.length}var cs=k(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),ls=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,L(n,r)}),us=v(function(e,r){return r[e]});k(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});k(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var $s=k(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});k(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});k(function(e,r,n){return n.slice(e,r)});k(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+vs()),r});function vs(e){return"<internals>"}function ua(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function le(e,r){for(var n,a=[],i=vo(e,r,0,a);i&&(n=a.pop());i=vo(n.a,n.b,0,a));return i}function vo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ua(5),!1;if(n>100)return a.push(L(e,r)),!0;e.$<0&&(e=Ru(e),r=Ru(r));for(var i in e)if(!vo(e[i],r[i],n+1,a))return!1;return!0}v(le);v(function(e,r){return!le(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ce(e,r)<0});v(function(e,r){return ce(e,r)<1});v(function(e,r){return ce(e,r)>0});v(function(e,r){return ce(e,r)>=0});var fs=v(function(e,r){var n=ce(e,r);return n<0?Fu:n?og:Au}),Oa=0;function L(e,r){return{a:e,b:r}}function I(e,r,n){return{a:e,b:r,c:n}}function Ir(e){return e}function Ce(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(G);function G(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Er(e.a,r);return n}var D={$:0};function Er(e,r){return{$:1,a:e,b:r}}var ms=v(Er);function $(e){for(var r=D,n=e.length;n--;)r=Er(e[n],r);return r}function Gt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ss=k(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});H(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Be(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(P(e,r.a,n.a,a.a,i.a));return $(o)});vr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(R(e,r.a,n.a,a.a,i.a,o.a));return $(c)});v(function(e,r){return $(Gt(r).sort(function(n,a){return ce(e(n),e(a))}))});v(function(e,r){return $(Gt(r).sort(function(n,a){var i=t(e,n,a);return i===Au?0:i===Fu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ds=v(Math.pow);v(function(e,r){return r%e});var ps=v(function(e,r){var n=r%e;return e===0?ua(11):n>0&&e<0||n<0&&e>0?n+e:n}),gs=Math.PI,hs=Math.cos,bs=Math.sin,_s=Math.tan;v(Math.atan2);function ys(e){return e}function ws(e){return e===1/0||e===-1/0}var xs=Math.ceil,Ss=Math.floor,Cs=Math.round,Ls=Math.sqrt,ql=Math.log,Ms=isNaN;function Ps(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var zs=v(function(e,r){return e+r});function ks(e){var r=e.charCodeAt(0);return isNaN(r)?E:j(55296<=r&&r<=56319?L(Ir(e[0]+e[1]),e.slice(2)):L(Ir(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ts(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Ir(r[i]+r[i+1])),i+=2;continue}a[i]=e(Ir(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(Ir(o))&&n.push(o)}return n.join("")});function Ds(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}k(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,Ir(o),r)}return r});var Rs=k(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Ir(i),r)}return r}),As=v(function(e,r){return r.split(e)}),Fs=v(function(e,r){return r.join(e)}),Is=k(function(e,r,n){return n.slice(e,r)});function Es(e){return $(e.trim().split(/\s+/g))}function Bs(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Ir(a)))return!0}return!1});var Vs=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Ir(a)))return!1}return!0}),js=v(function(e,r){return r.indexOf(e)>-1}),Ns=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Gs=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Jl(e){return e+""}function Hs(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return E;r=10*r+o-48}return i==a?E:j(n==45?-r:r)}function Ws(e){if(e.length===0||/[\sxbo]/.test(e))return E;var r=+e;return r===r?j(r):E}function Us(e){return Gt(e).join("")}function Os(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function qs(e){return Ir(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Js(e){return{$:0,a:e}}function Ys(e){return{$:1,a:e}}function fo(e){return{$:2,b:e}}var Xs=fo(function(e){return typeof e=="boolean"?Ie(e):Br("a BOOL",e)}),Qs=fo(function(e){return typeof e=="number"?Ie(e):Br("a FLOAT",e)}),Zs=fo(function(e){return typeof e=="string"?Ie(e):e instanceof String?Ie(e+""):Br("a STRING",e)});function Ks(e){return{$:3,b:e}}var ed=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function pn(e,r){return{$:9,f:e,g:r}}var rd=v(function(e,r){return{$:10,b:r,h:e}}),nd=v(function(e,r){return pn(e,[r])}),ad=k(function(e,r,n){return pn(e,[r,n])});H(function(e,r,n,a){return pn(e,[r,n,a])});Be(function(e,r,n,a,i){return pn(e,[r,n,a,i])});vr(function(e,r,n,a,i,o){return pn(e,[r,n,a,i,o])});Nt(function(e,r,n,a,i,o,c){return pn(e,[r,n,a,i,o,c])});be(function(e,r,n,a,i,o,c,l){return pn(e,[r,n,a,i,o,c,l])});uo(function(e,r,n,a,i,o,c,l,u){return pn(e,[r,n,a,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return br(e,n)}catch(a){return Ze(t(To,"This is not valid JSON! "+a.message,Qr(r)))}});var Yl=v(function(e,r){return br(e,va(r))});function br(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ie(e.c):Br("null",r);case 3:return Ht(r)?Xl(e.b,r,$):Br("a LIST",r);case 4:return Ht(r)?Xl(e.b,r,td):Br("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Br("an OBJECT with a field named `"+n+"`",r);var a=br(e.b,r[n]);return Tr(a)?a:Ze(t(Iu,n,a.a));case 7:var i=e.e;if(!Ht(r))return Br("an ARRAY",r);if(i>=r.length)return Br("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=br(e.b,r[i]);return Tr(a)?a:Ze(t(Eu,i,a.a));case 8:if(typeof r!="object"||r===null||Ht(r))return Br("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var a=br(e.b,r[c]);if(!Tr(a))return Ze(t(Iu,c,a.a));o=Er(L(c,a.a),o)}return Ie(nr(o));case 9:for(var l=e.f,u=e.g,m=0;m<u.length;m++){var a=br(u[m],r);if(!Tr(a))return a;l=l(a.a)}return Ie(l);case 10:var a=br(e.b,r);return Tr(a)?br(e.h(a.a),r):a;case 11:for(var s=D,d=e.g;d.b;d=d.b){var a=br(d.a,r);if(Tr(a))return a;s=Er(a.a,s)}return Ze(cg(nr(s)));case 1:return Ze(t(To,e.a,Qr(r)));case 0:return Ie(e.a)}}function Xl(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=br(e,r[o]);if(!Tr(c))return Ze(t(Eu,o,c.a));i[o]=c.a}return Ie(n(i))}function Ht(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function td(e){return t(wg,e.length,function(r){return e[r]})}function Br(e,r){return Ze(t(To,"Expecting "+e,Qr(r)))}function $a(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return $a(e.b,r.b);case 6:return e.d===r.d&&$a(e.b,r.b);case 7:return e.e===r.e&&$a(e.b,r.b);case 9:return e.f===r.f&&Ql(e.g,r.g);case 10:return e.h===r.h&&$a(e.b,r.b);case 11:return Ql(e.g,r.g)}}function Ql(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!$a(e[a],r[a]))return!1;return!0}var id=v(function(e,r){return JSON.stringify(va(r),null,e)+""});function Qr(e){return e}function va(e){return e}function od(){return[]}function cd(){return{}}var ld=k(function(e,r,n){return n[e]=va(r),n});function ud(e){return v(function(r,n){return n.push(va(e(r))),n})}function Vn(e){return{$:0,a:e}}function $d(e){return{$:1,a:e}}function Zr(e){return{$:2,b:e,c:null}}var mo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function vd(e){return{$:5,b:e}}var fd=0;function so(e){var r={$:0,e:fd++,f:e,g:null,h:[]};return go(r),r}function Zl(e){return Zr(function(r){r(Vn(so(e)))})}function Kl(e,r){e.h.push(r),go(e)}var md=v(function(e,r){return Zr(function(n){Kl(e,r),n(Vn(Oa))})}),po=!1,eu=[];function go(e){if(eu.push(e),!po){for(po=!0;e=eu.shift();)sd(e);po=!1}}function sd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,go(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}H(function(e,r,n,a){return ho(r,a,e.gW,e.ii,e.hW,function(){return function(){}})});function ho(e,r,n,a,i,o){var c=t(Yl,e,Qr(r?r.flags:void 0));Tr(c)||ua(2);var l={},u=n(c.a),m=u.a,s=o(g,m),d=dd(l,g);function g(f,_){var y=t(a,f,m);s(m=y.a,_),au(l,y.b,i(m))}return au(l,u.b,i(m)),d?{ports:d}:{}}var Vr={};function dd(e,r){var n;for(var a in Vr){var i=Vr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=gd(i,r)}return n}function pd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function gd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l(u){return t(mo,l,vd(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&c?P(a,n,s.i,s.j,u):b(a,n,o?s.i:s.j,u)}))}return n.h=so(t(mo,l,e.b))}var hd=v(function(e,r){return Zr(function(n){e.g(r),n(Vn(Oa))})});v(function(e,r){return t(md,e.h,{$:0,a:r})});function ru(e){return function(r){return{$:1,k:e,l:r}}}function bd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var nu=[],bo=!1;function au(e,r,n){if(nu.push({p:e,q:r,r:n}),!bo){bo=!0;for(var a;a=nu.shift();)_d(a.p,a.q,a.r);bo=!1}}function _d(e,r,n){var a={};Wt(!0,r,a,null),Wt(!1,n,a,null);for(var i in e)Kl(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Wt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=yd(e,i,a,r.l);n[i]=wd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Wt(e,c.a,n,a);return;case 3:Wt(e,r.o,n,{s:r.n,t:a});return}}function yd(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Vr[r].e:Vr[r].f;return t(o,i,a)}function wd(e,r,n){return n=n||{i:D,j:D},e?n.i=Er(r,n.i):n.j=Er(r,n.j),n}function xd(e){Vr[e]&&ua(3)}v(function(e,r){return r});function Sd(e,r){return xd(e),Vr[e]={f:Cd,u:r,a:Ld},ru(e)}var Cd=v(function(e,r){return function(n){return e(r(n))}});function Ld(e,r){var n=D,a=Vr[e].u,i=Vn(null);Vr[e].b=i,Vr[e].c=k(function(c,l,u){return n=l,i});function o(c){var l=t(Yl,a,Qr(c));Tr(l)||ua(4,e,l.a);for(var u=l.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Ut,Kr=typeof document!="undefined"?document:{};function _o(e,r){e.appendChild(r)}H(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(hn(e,function(){}),i),{}});function yo(e){return{$:0,a:e}}var tu=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:xo(n),e:i,f:e,b:o}})}),en=tu(void 0),Md=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:xo(n),e:i,f:e,b:o}})}),Pd=Md(void 0);function zd(e,r,n,a){return{$:3,d:xo(e),g:r,h:n,i:a}}var kd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return gn([e,r],function(){return e(r)})});k(function(e,r,n){return gn([e,r,n],function(){return t(e,r,n)})});var Td=H(function(e,r,n,a){return gn([e,r,n,a],function(){return b(e,r,n,a)})});Be(function(e,r,n,a,i){return gn([e,r,n,a,i],function(){return P(e,r,n,a,i)})});vr(function(e,r,n,a,i,o){return gn([e,r,n,a,i,o],function(){return R(e,r,n,a,i,o)})});Nt(function(e,r,n,a,i,o,c){return gn([e,r,n,a,i,o,c],function(){return Xe(e,r,n,a,i,o,c)})});be(function(e,r,n,a,i,o,c,l){return gn([e,r,n,a,i,o,c,l],function(){return $o(e,r,n,a,i,o,c,l)})});uo(function(e,r,n,a,i,o,c,l,u){return gn([e,r,n,a,i,o,c,l,u],function(){return Ua(e,r,n,a,i,o,c,l,u)})});var iu=v(function(e,r){return{$:"a0",n:e,o:r}}),Dd=v(function(e,r){return{$:"a1",n:e,o:r}}),wo=v(function(e,r){return{$:"a2",n:e,o:r}}),zr=v(function(e,r){return{$:"a3",n:e,o:r}});k(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function ou(e){return e=="script"?"p":e}function Rd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Ad(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Fd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function cu(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Id=v(function(e,r){return r.$==="a0"?t(iu,r.n,Ed(e,r.o)):r});function Ed(e,r){var n=Bo(r);return{$:r.$,a:n?b(xg,n<3?Bd:Vd,ar(e),r.a):t(Qt,e,r.a)}}var Bd=v(function(e,r){return L(e(r.a),r.b)}),Vd=v(function(e,r){return{aA:e(r.aA),dD:r.dD,dt:r.dt}});function xo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?lu(r,i,va(o)):r[i]=va(o);continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?lu(c,i,o):c[i]=o}return r}function lu(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hn(e,r){var n=e.$;if(n===5)return hn(e.k||(e.k=e.m()),r);if(n===0)return Kr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=hn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return So(c,r,e.d),c}var c=e.f?Kr.createElementNS(e.f,e.c):Kr.createElement(e.c);Ut&&e.c=="a"&&c.addEventListener("click",Ut(c)),So(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)_o(c,hn(n===1?l[u]:l[u].b,r));return c}function So(e,r,n){for(var a in n){var i=n[a];a==="a1"?jd(e,i):a==="a0"?Hd(e,r,i):a==="a3"?Nd(e,i):a==="a4"?Gd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function jd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Nd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Gd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Hd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Wd(r,o),e.addEventListener(i,c,Co&&{passive:Bo(o)<2}),a[i]=c}}var Co;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Co=!0}}))}catch{}function Wd(e,r){function n(a){var i=n.q,o=br(i.a,a);if(!!Tr(o)){for(var c=Bo(i),l=o.a,u=c?c<3?l.a:l.aA:l,m=c==1?l.b:c==3&&l.dD,s=(m&&a.stopPropagation(),(c==2?l.b:c==3&&l.dt)&&a.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function Ud(e,r){return e.$==r.$&&$a(e.a,r.a)}function uu(e,r){var n=[];return kr(e,r,n,0),n}function Qe(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function kr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Kd(r),o=1;else{Qe(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,m=u===l.length;m&&u--;)m=c[u]===l[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];kr(e.k,r.k,s,0),s.length>0&&Qe(n,1,a,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var y=r.k;y.$===4;)f=!0,typeof g!="object"?g=[g,y.j]:g.push(y.j),y=y.k;if(f&&d.length!==g.length){Qe(n,0,a,r);return}(f?!Od(d,g):d!==g)&&Qe(n,2,a,g),kr(_,y,n,a+1);return;case 0:e.a!==r.a&&Qe(n,3,a,r.a);return;case 1:$u(e,r,n,a,qd);return;case 2:$u(e,r,n,a,Jd);return;case 3:if(e.h!==r.h){Qe(n,0,a,r);return}var x=Lo(e.d,r.d);x&&Qe(n,4,a,x);var S=r.i(e.g,r.g);S&&Qe(n,5,a,S);return}}}function Od(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function $u(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Qe(n,0,a,r);return}var o=Lo(e.d,r.d);o&&Qe(n,4,a,o),i(e,r,n,a)}function Lo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Lo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Ud(c,l)||(a=a||{},a[i]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function qd(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Qe(n,6,a,{v:l,i:c-l}):c<l&&Qe(n,7,a,{v:c,e:o});for(var u=c<l?c:l,m=0;m<u;m++){var s=i[m];kr(s,o[m],n,++a),a+=s.b||0}}function Jd(e,r,n,a){for(var i=[],o={},c=[],l=e.e,u=r.e,m=l.length,s=u.length,d=0,g=0,f=a;d<m&&g<s;){var _=l[d],y=u[g],x=_.a,S=y.a,w=_.b,C=y.b,F=void 0,q=void 0;if(x===S){f++,kr(w,C,i,f),f+=w.b||0,d++,g++;continue}var Q=l[d+1],U=u[g+1];if(Q){var Y=Q.a,X=Q.b;q=S===Y}if(U){var V=U.a,ne=U.b;F=x===V}if(F&&q){f++,kr(w,ne,i,f),qa(o,i,x,C,g,c),f+=w.b||0,f++,Ja(o,i,x,X,f),f+=X.b||0,d+=2,g+=2;continue}if(F){f++,qa(o,i,S,C,g,c),kr(w,ne,i,f),f+=w.b||0,d+=1,g+=2;continue}if(q){f++,Ja(o,i,x,w,f),f+=w.b||0,f++,kr(X,C,i,f),f+=X.b||0,d+=2,g+=1;continue}if(Q&&Y===V){f++,Ja(o,i,x,w,f),qa(o,i,S,C,g,c),f+=w.b||0,f++,kr(X,ne,i,f),f+=X.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=l[d],w=_.b;Ja(o,i,_.a,w,f),f+=w.b||0,d++}for(;g<s;){var fe=fe||[],y=u[g];qa(o,i,y.a,y.b,void 0,fe),g++}(i.length>0||c.length>0||fe)&&Qe(n,8,a,{w:i,x:c,y:fe})}var vu="_elmW6BL";function qa(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];kr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}qa(e,r,n+vu,a,i,o)}function Ja(e,r,n,a,i){var o=e[n];if(!o){var c=Qe(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];kr(a,o.z,l,i),Qe(r,9,i,{w:l,A:o});return}Ja(e,r,n+vu,a,i)}function fu(e,r,n,a){Ya(e,r,n,0,0,r.b,a)}function Ya(e,r,n,a,i,o,c){for(var l=n[a],u=l.r;u===i;){var m=l.$;if(m===1)fu(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Ya(e,r,s,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Ya(e,r,s,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return Ya(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,y=e.childNodes,x=0;x<_.length;x++){i++;var S=g===1?_[x]:_[x].b,w=i+(S.b||0);if(i<=u&&u<=w&&(a=Ya(y[x],S,n,a,i,w,c),!(l=n[a])||(u=l.r)>o))return a;i=w}return a}function mu(e,r,n,a){return n.length===0?e:(fu(e,r,n,a),Ot(e,n))}function Ot(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=Yd(i,a);i===e&&(e=o)}return e}function Yd(e,r){switch(r.$){case 0:return Xd(e,r.s,r.u);case 4:return So(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ot(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(hn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Ot(e,n.w),e;case 8:return Qd(e,r);case 5:return r.s(e);default:ua(10)}}function Xd(e,r,n){var a=e.parentNode,i=hn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Qd(e,r){var n=r.s,a=Zd(n.y,r);e=Ot(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:hn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&_o(e,a),e}function Zd(e,r){if(!!e){for(var n=Kr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;_o(n,o.c===2?o.s:hn(o.z,r.u))}return n}}function Mo(e){if(e.nodeType===3)return yo(e.textContent);if(e.nodeType!==1)return yo("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Er(t(zr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Er(Mo(m[a]),u);return b(en,l,r,u)}function Kd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var ep=H(function(e,r,n,a){return ho(r,a,e.gW,e.ii,e.hW,function(i,o){var c=e.ik,l=a.node,u=Mo(l);return su(o,function(m){var s=c(m),d=uu(u,s);l=mu(l,u,d,i),u=s})})});H(function(e,r,n,a){return ho(r,a,e.gW,e.ii,e.hW,function(i,o){var c=e.dB&&e.dB(i),l=e.ik,u=Kr.title,m=Kr.body,s=Mo(m);return su(o,function(d){Ut=c;var g=l(d),f=en("body")(D)(g.fW),_=uu(s,f);m=mu(m,s,_,i),s=f,Ut=0,u!==g.ic&&(Kr.title=u=g.ic)})})});var qt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function su(e,r){r(e);var n=0;function a(){n=n===1?0:(qt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&qt(a),n=2)}}v(function(e,r){return t(jo,nt,Zr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(jo,nt,Zr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(jo,nt,Zr(function(){history.replaceState({},"",r),e()}))});var rp={addEventListener:function(){},removeEventListener:function(){}},np=typeof window!="undefined"?window:rp;k(function(e,r,n){return Zl(Zr(function(a){function i(o){so(n(o))}return e.addEventListener(r,i,Co&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=br(e,r);return Tr(n)?j(n.a):E});function du(e,r){return Zr(function(n){qt(function(){var a=document.getElementById(e);n(a?Vn(r(a)):$d(Sg(e)))})})}function ap(e){return Zr(function(r){qt(function(){r(Vn(e()))})})}v(function(e,r){return du(r,function(n){return n[e](),Oa})});v(function(e,r){return ap(function(){return np.scroll(e,r),Oa})});k(function(e,r,n){return du(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Oa})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var tp=v(function(e,r){var n="g";e.hc&&(n+="m"),e.f4&&(n+="i");try{return j(new RegExp(r,n))}catch{return E}});v(function(e,r){return r.match(e)!==null});var ip=k(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?j(d):E}a.push(P(jv,u[0],u.index,i,$(s))),l=r.lastIndex}return r.lastIndex=c,$(a)});H(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var m=arguments[l];u[--l]=m?j(m):E}return n(P(jv,c,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});k(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,$(i)});var op=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/cp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function cp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Po=new Float64Array(3),pu=new Float64Array(3),gu=new Float64Array(3),lp=k(function(e,r,n){return new Float64Array([e,r,n])}),up=function(e){return e[0]},$p=function(e){return e[1]},vp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var fp=function(e){return new Float64Array([e.ip,e.it,e.dR])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function hu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(hu);function bu(e,r,n){return n===void 0&&(n=new Float64Array(3)),Jt(hu(e,r,n),n)}v(bu);function _u(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Jt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/_u(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var mp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Xa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Xa);function zo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(zo);v(function(e,r){var n,a=Po,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Xa(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Xa(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Xa(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Xa(r,a)+e[14])/n,i});var sp=H(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var dp=function(e){return{ip:e[0],it:e[1],dR:e[2],fu:e[3]}},pp=function(e){return new Float64Array([e.ip,e.it,e.dR,e.fu])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/gp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function gp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var hp=new Float64Array(16),bp=new Float64Array(16),_p=function(e){var r=new Float64Array(16);return r[0]=e.et,r[1]=e.ex,r[2]=e.eB,r[3]=e.eF,r[4]=e.eu,r[5]=e.ey,r[6]=e.eC,r[7]=e.eG,r[8]=e.ev,r[9]=e.ez,r[10]=e.eD,r[11]=e.eH,r[12]=e.ew,r[13]=e.eA,r[14]=e.eE,r[15]=e.eI,r},yp=function(e){return{et:e[0],ex:e[1],eB:e[2],eF:e[3],eu:e[4],ey:e[5],eC:e[6],eG:e[7],ev:e[8],ez:e[9],eD:e[10],eH:e[11],ew:e[12],eA:e[13],eE:e[14],eI:e[15]}};function yu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}vr(yu);H(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return yu(c,l,o,i,n,a)});function wu(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}vr(wu);H(function(e,r,n,a){return wu(e,r,n,a,-1,1)});function xu(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],y=e[12],x=e[13],S=e[14],w=e[15],C=r[0],F=r[1],q=r[2],Q=r[3],U=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],fe=r[9],we=r[10],me=r[11],se=r[12],xe=r[13],de=r[14],Re=r[15];return n[0]=a*C+l*F+d*q+y*Q,n[1]=i*C+u*F+g*q+x*Q,n[2]=o*C+m*F+f*q+S*Q,n[3]=c*C+s*F+_*q+w*Q,n[4]=a*U+l*Y+d*X+y*V,n[5]=i*U+u*Y+g*X+x*V,n[6]=o*U+m*Y+f*X+S*V,n[7]=c*U+s*Y+_*X+w*V,n[8]=a*ne+l*fe+d*we+y*me,n[9]=i*ne+u*fe+g*we+x*me,n[10]=o*ne+m*fe+f*we+S*me,n[11]=c*ne+s*fe+_*we+w*me,n[12]=a*se+l*xe+d*de+y*Re,n[13]=i*se+u*xe+g*de+x*Re,n[14]=o*se+m*xe+f*de+S*Re,n[15]=c*se+s*xe+_*de+w*Re,n}v(xu);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],y=r[0],x=r[1],S=r[2],w=r[4],C=r[5],F=r[6],q=r[8],Q=r[9],U=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=a*y+c*x+m*S,n[1]=i*y+l*x+s*S,n[2]=o*y+u*x+d*S,n[3]=0,n[4]=a*w+c*C+m*F,n[5]=i*w+l*C+s*F,n[6]=o*w+u*C+d*F,n[7]=0,n[8]=a*q+c*Q+m*U,n[9]=i*q+l*Q+s*U,n[10]=o*q+u*Q+d*U,n[11]=0,n[12]=a*Y+c*X+m*V+g,n[13]=i*Y+l*X+s*V+f,n[14]=o*Y+u*X+d*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Jt(r,Po);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*u,n[2]=o*a*l-i*u,n[3]=0,n[4]=a*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+a*u,n[7]=0,n[8]=a*o*l+i*u,n[9]=i*o*l-a*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});k(function(e,r,n){var a=new Float64Array(16),i=1/_u(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=c*s,f=l*s,_=o*c*m,y=o*l*m,x=c*l*m,S=o*o*m+u,w=_+f,C=y-g,F=_-f,q=c*c*m+u,Q=x+d,U=y+g,Y=x-d,X=l*l*m+u,V=n[0],ne=n[1],fe=n[2],we=n[3],me=n[4],se=n[5],xe=n[6],de=n[7],Re=n[8],ke=n[9],Ye=n[10],In=n[11],Ga=n[12],Jr=n[13],Yr=n[14],la=n[15];return a[0]=V*S+me*w+Re*C,a[1]=ne*S+se*w+ke*C,a[2]=fe*S+xe*w+Ye*C,a[3]=we*S+de*w+In*C,a[4]=V*F+me*q+Re*Q,a[5]=ne*F+se*q+ke*Q,a[6]=fe*F+xe*q+Ye*Q,a[7]=we*F+de*q+In*Q,a[8]=V*U+me*Y+Re*X,a[9]=ne*U+se*Y+ke*X,a[10]=fe*U+xe*Y+Ye*X,a[11]=we*U+de*Y+In*X,a[12]=Ga,a[13]=Jr,a[14]=Yr,a[15]=la,a});function wp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}k(wp);H(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function xp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}k(xp);H(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],u=a[3],m=a[4],s=a[5],d=a[6],g=a[7],f=a[8],_=a[9],y=a[10],x=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=y,i[11]=x,i[12]=o*e+m*r+f*n+a[12],i[13]=c*e+s*r+_*n+a[13],i[14]=l*e+d*r+y*n+a[14],i[15]=u*e+g*r+x*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],y=r[9],x=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=y,n[10]=x,n[11]=S,n[12]=c*a+s*i+_*o+r[12],n[13]=l*a+d*i+y*o+r[13],n[14]=u*a+g*i+x*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});k(function(e,r,n){var a=bu(e,r,Po),i=Jt(zo(n,a,pu),pu),o=Jt(zo(a,i,gu),gu),c=hp,l=bp;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,xu(c,l)});k(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var Su=0;function Qa(e,r){for(;r.b;r=r.b)e(r.a)}function ko(e){for(var r=0;e.b;e=e.b)r++;return r}var Sp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Cp=Be(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),Lp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Mp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Pp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),zp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),kp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Tp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Dp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Rp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Ap=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Fp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ip=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Ep=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Bp=function(e){e.gl.disable(e.gl.CULL_FACE)},Vp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},jp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Np=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Mu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Gp=[Fp,Ip,Ep,Cu,Lu,Bp,Vp,jp,Np];function Pu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Hp(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function zu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Wp(e,r,n,a){for(var i=n.a.d1,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,y,x,S){var w;if(i===1)for(w=0;w<_;w++)f[y++]=_===1?x[S]:x[S][w];else o.forEach(function(C){for(w=0;w<_;w++)f[y++]=_===1?x[C][S]:x[C][S][w]})}var u=zu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(ko(n.b)*s);Qa(function(f){l(d,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function Up(e,r){if(r.a.ee>0){var n=e.createBuffer(),a=Op(r.c,r.a.ee);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d1*ko(r.b),indexBuffer:null,buffers:{}}}function Op(e,r){var n=new Uint32Array(ko(e)*r),a=0,i;return Qa(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function ku(e,r){return e+"#"+r}var Tu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cu(n),Lu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=ku(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=Su++,m||(m=Pu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=Su++,s||(s=Pu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=Hp(a,m,s);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=qp(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(d,u),_=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=ku(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Jp(l.uniformSetters,o.e);var y=n.buffers.get(o.d);for(y||(y=Up(a,o.d),n.buffers.set(o.d,y)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],_=l.activeAttributeLocations[u],y.buffers[f.name]===void 0&&(y.buffers[f.name]=Wp(a,f,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,y.buffers[f.name]);var x=zu(a,f.type);if(x.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,w=S*x.arraySize,C=0;C<x.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,x.size,x.baseType,!1,w,S*C)}for(n.toggle=!n.toggle,Qa(m2(n),o.a),u=0;u<Mu.length;u++){var F=n[Mu[u]];F.toggle!==n.toggle&&F.enabled&&(Gp[u](n),F.enabled=!1,F.toggle=n.toggle)}y.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,y.indexBuffer),a.drawElements(o.d.a.eR,y.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eR,0,y.numIndices)}}return Qa(i,e.g),r});function qp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(f,_){var y=_.name,x=e.getUniformLocation(f,y);switch(_.type){case e.INT:return function(w){o[y]!==w&&(e.uniform1i(x,w),o[y]=w)};case e.FLOAT:return function(w){o[y]!==w&&(e.uniform1f(x,w),o[y]=w)};case e.FLOAT_VEC2:return function(w){o[y]!==w&&(e.uniform2f(x,w[0],w[1]),o[y]=w)};case e.FLOAT_VEC3:return function(w){o[y]!==w&&(e.uniform3f(x,w[0],w[1],w[2]),o[y]=w)};case e.FLOAT_VEC4:return function(w){o[y]!==w&&(e.uniform4f(x,w[0],w[1],w[2],w[3]),o[y]=w)};case e.FLOAT_MAT4:return function(w){o[y]!==w&&(e.uniformMatrix4fv(x,!1,new Float32Array(w)),o[y]=w)};case e.SAMPLER_2D:var S=c++;return function(w){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(w);C||(C=w.gh(e),l.textures.set(w,C)),e.bindTexture(e.TEXTURE_2D,C),o[y]!==w&&(e.uniform1i(x,S),o[y]=w)};case e.BOOL:return function(w){o[y]!==w&&(e.uniform1i(x,w),o[y]=w)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[a[g.name]||g.name]=u(i,g)}return m}function Jp(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Yp=k(function(e,r,n){return zd(r,{g:n,f:{},h:e},ng,ag)}),Xp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Qp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Zp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Kp=v(function(e,r){e.contextAttributes.antialias=!0}),eg=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),rg=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function ng(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Qa(function(i){return t(f2,r,i)},e.h);var n=Kr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Sp(function(){return t(Tu,e,n)})):(n=Kr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function ag(e,r){return r.f=e.f,Tu(r)}var z=ms,Yt=$s,Du=k(function(e,r,n){var a=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return b(Yt,e,l,m)}else{var u=c.a;return b(Yt,o,l,u)}});return b(Yt,o,b(Yt,e,r,i),a)}),Xt=k(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,u=b(e,a,i,b(Xt,e,r,c)),m=o;e=l,r=u,n=m;continue e}}),Ru=function(e){return b(Xt,k(function(r,n,a){return t(z,L(r,n),a)}),D,e)},tg=function(e){return b(Xt,k(function(r,n,a){return t(z,r,a)}),D,e)},ig=function(e){var r=e;return tg(r)},Au=1,og=2,Fu=0,Ze=function(e){return{$:1,a:e}},To=v(function(e,r){return{$:3,a:e,b:r}}),Iu=v(function(e,r){return{$:0,a:e,b:r}}),Eu=v(function(e,r){return{$:1,a:e,b:r}}),Ie=function(e){return{$:0,a:e}},cg=function(e){return{$:2,a:e}},j=function(e){return{$:0,a:e}},E={$:1},lg=Vs,ug=id,T=Jl,ee=v(function(e,r){return t(Fs,e,Gt(r))}),Do=v(function(e,r){return $(t(As,e,r))}),Bu=function(e){return t(ee,`
    `,t(Do,`
`,e))},Ae=k(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),jn=function(e){return b(Ae,v(function(r,n){return n+1}),0,e)},$g=ss,vg=k(function(e,r,n){e:for(;;)if(ce(e,r)<1){var a=e,i=r-1,o=t(z,r,n);e=a,r=i,n=o;continue e}else return n}),rn=v(function(e,r){return b(vg,e,r,D)}),Vu=v(function(e,r){return b($g,e,t(rn,0,jn(r)-1),r)}),jr=Os,ju=function(e){var r=jr(e);return 97<=r&&r<=122},Nu=function(e){var r=jr(e);return r<=90&&65<=r},fg=function(e){return ju(e)||Nu(e)},mg=function(e){var r=jr(e);return r<=57&&48<=r},sg=function(e){return ju(e)||Nu(e)||mg(e)},nr=function(e){return b(Ae,z,D,e)},fa=ks,dg=v(function(e,r){return`

(`+(T(e+1)+(") "+Bu(pg(r))))}),pg=function(e){return t(gg,e,D)},gg=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var y=fa(n);if(y.$===1)return!1;var x=y.a,S=x.a,w=x.b;return fg(S)&&t(lg,sg,w)}(),o=i?"."+n:"['"+(n+"']"),c=a,l=t(z,o,r);e=c,r=l;continue e;case 1:var u=e.a,a=e.b,m="["+(T(u)+"]"),c=a,l=t(z,m,r);e=c,r=l;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",nr(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(T(jn(s))+" ways:"));return t(ee,`

`,t(z,_,t(Vu,dg,s)))}else{var a=s.a,c=a,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",nr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",nr(r))+`:

    `):`Problem with the given value:

`}();return _+(Bu(t(ug,4,f))+(`

`+g))}}),fr=32,Ro=H(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ao=is,Za=xs,Fo=v(function(e,r){return ql(r)/ql(e)}),Ka=ys,et=Za(t(Fo,2,fr)),Gu=P(Ro,0,et,Ao,Ao),Hu=cs,Wu=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Uu=Ss,Io=os,qe=v(function(e,r){return ce(e,r)>0?e:r}),hg=function(e){return{$:0,a:e}},Eo=ls,bg=v(function(e,r){e:for(;;){var n=t(Eo,fr,e),a=n.a,i=n.b,o=t(z,hg(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return nr(o)}}),Ou=function(e){var r=e.a;return r},_g=v(function(e,r){e:for(;;){var n=Za(r/fr);if(n===1)return t(Eo,fr,e).a;var a=t(bg,e,D),i=n;e=a,r=i;continue e}}),qu=v(function(e,r){if(r.n){var n=r.n*fr,a=Uu(t(Fo,fr,n-1)),i=e?nr(r.C):r.C,o=t(_g,i,r.n);return P(Ro,Io(r.r)+n,t(qe,5,a*et),o,r.r)}else return P(Ro,Io(r.r),et,Ao,r.r)}),yg=Be(function(e,r,n,a,i){e:for(;;){if(r<0)return t(qu,!1,{C:a,n:n/fr|0,r:i});var o=Wu(b(Hu,fr,r,e)),c=e,l=r-fr,u=n,m=t(z,o,a),s=i;e=c,r=l,n=u,a=m,i=s;continue e}}),wg=v(function(e,r){if(e<=0)return Gu;var n=e%fr,a=b(Hu,n,e-n,r),i=e-n-fr;return R(yg,r,i,e,D,a)}),Tr=function(e){return!e.$},O=rd,_e=Xs,W=ed,Ve=Qs,Ju=v(function(e,r){return{b8:r.b8,ge:e,cV:r.cV,gs:r.gs,ek:r.ek,bL:r.bL,bN:r.bN,il:r.il}}),Qt=nd,xg=ad,ar=Js,Bo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},Sg=Dr,Yu=vr(function(e,r,n,a,i,o){return{d7:o,ec:r,e_:a,e1:n,e5:e,e6:i}}),Cg=js,Nn=Ts,ma=Is,rt=v(function(e,r){return e<1?r:b(ma,e,Nn(r),r)}),Zt=Gs,Kt=function(e){return e===""},ei=v(function(e,r){return e<1?"":b(ma,0,e,r)}),Xu=Hs,Qu=Be(function(e,r,n,a,i){if(Kt(i)||t(Cg,"@",i))return E;var o=t(Zt,":",i);if(o.b){if(o.b.b)return E;var c=o.a,l=Xu(t(rt,c+1,i));if(l.$===1)return E;var u=l;return j(Xe(Yu,e,t(ei,c,i),u,r,n,a))}else return j(Xe(Yu,e,i,E,r,n,a))}),Zu=H(function(e,r,n,a){if(Kt(a))return E;var i=t(Zt,"/",a);if(i.b){var o=i.a;return R(Qu,e,t(rt,o,a),r,n,t(ei,o,a))}else return R(Qu,e,"/",r,n,a)}),Ku=k(function(e,r,n){if(Kt(n))return E;var a=t(Zt,"?",n);if(a.b){var i=a.a;return P(Zu,e,j(t(rt,i+1,n)),r,t(ei,i,n))}else return P(Zu,e,E,r,n)});v(function(e,r){if(Kt(r))return E;var n=t(Zt,"#",r);if(n.b){var a=n.a;return b(Ku,e,j(t(rt,a+1,r)),t(ei,a,r))}else return b(Ku,e,E,r)});var Lg=Ns,nt=function(e){},at=Vn,Mg=at(0),e$=H(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,m=l.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Ae,e,r,nr(d)):P(e$,e,r,n+1,d);return t(e,i,t(e,c,t(e,u,t(e,s,g))))}else return t(e,i,t(e,c,t(e,u,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),He=k(function(e,r,n){return P(e$,e,r,0,n)}),J=v(function(e,r){return b(He,v(function(n,a){return t(z,e(n),a)}),D,r)}),ri=mo,Vo=v(function(e,r){return t(ri,function(n){return at(e(n))},r)}),Pg=k(function(e,r,n){return t(ri,function(a){return t(ri,function(i){return at(t(e,a,i))},n)},r)}),zg=function(e){return b(He,Pg(z),at(D),e)},kg=hd,Tg=v(function(e,r){var n=r;return Zl(t(ri,kg(e),n))}),Dg=k(function(e,r,n){return t(Vo,function(a){return 0},zg(t(J,Tg(e),r)))}),Rg=k(function(e,r,n){return at(0)}),Ag=v(function(e,r){var n=r;return t(Vo,e,n)});Vr.Task=pd(Mg,Dg,Rg,Ag);var Fg=ru("Task"),jo=v(function(e,r){return Fg(t(Vo,e,r))}),Ig=ep,Eg=Ps,ni={$:1},r$=function(e){return{$:2,a:e}},No={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),We=k(function(e,r,n){return r(e(n))}),Gn=function(e){var r=e.b.s;return r.a},Bg=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return j(t(_r,r,{s:o,an:c,X:t(z,a,n)}))}else return E},Le=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Vg=k(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dE;return(ce(o+r.gs,Gn(n).b8)>0?t(We,Bg,Le(t(_r,ni,i))):Dr)(t(_r,r$({dE:o+r.gs}),i));default:var c=i.s,l=c.a,u=c.b,m=t(Ju,l.ge,Ce(r,{b8:l.b8+r.gs})),s=t(e,m,u);return t(_r,No,{s:L(m,s),an:D,X:t(z,i.s,i.X)})}}),n$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),jg=k(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(z,a,n);e=o,r=c,n=l;continue e}else return n}}),Ng=v(function(e,r){return nr(b(jg,e,r,D))}),a$=k(function(e,r,n){if(r<=0)return D;{var a=L(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,o=i.b,c=o.a;return $([w,c]);case 3:if(a.b.b.b.b){var l=a.b,w=l.a,u=l.b,c=u.a,m=u.b,s=m.a;return $([w,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,w=d.a,g=d.b,c=g.a,f=g.b,s=f.a,_=f.b,y=_.a,x=_.b;return e>1e3?t(z,w,t(z,c,t(z,s,t(z,y,t(Ng,r-4,x))))):t(z,w,t(z,c,t(z,s,t(z,y,b(a$,e+1,r-4,x)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return $([w])}}),Gg=v(function(e,r){return b(a$,0,e,r)}),Hg=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=G(nr(n),G($([a]),i)),c=t(Gg,e,o),l=t(n$,e,o);if(l.b){var u=l.a,m=l.b;return t(_r,ni,{s:u,an:m,X:nr(c)})}else{var s=nr(c);if(s.b){var d=s.a,g=s.b;return t(_r,ni,{s:d,an:D,X:g})}else return r}}),Wg=function(e){var r=e.b;return t(_r,ni,r)},Ug=function(e){var r=e.b;return t(_r,r$({dE:Gn(e).b8}),r)},Og=function(e){var r=e.b;return t(_r,No,r)},qg=v(function(e,r){switch(e.$){case 1:return Wg(r);case 2:return Og(r);case 3:return Ug(r);default:var n=e.a;return t(Hg,n,r)}}),ai=v(function(e,r){var n=r.a,a=r.b;return L(e(n),a)}),Jg=v(function(e,r){return Ce(r,{aN:e(r.aN)})}),Yg=function(e){return{$:3,a:e}},Xg=function(e){return{$:2,a:e}},Qg=v(function(e,r){return{$:0,a:e,b:r}}),Zg=v(function(e,r){return{$:1,a:e,b:r}}),Fe=v(function(e,r){if(r.$)return E;var n=r.a;return j(e(n))}),ue=function(e){return e<0?-e:e},t$=Ws,Kg=k(function(e,r,n){return t(Le,0/0,t$(t(e,r,n)))}),tt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),e0=Rs,i$=function(e){return b(e0,z,D,e)},r0=v(function(e,r){var n=t(tt,function(a){return a!=="0"&&a!=="."},i$(r));return G(e&&n?"-":"",r)}),ae=Jl,Go=zs,o$=qs,c$=function(e){var r=e.a,n=e.b;if(r==="9"){var a=fa(n);if(a.$===1)return"01";var i=a.a;return t(Go,"0",c$(i))}else{var o=jr(r);return o>=48&&o<57?t(Go,o$(o+1),n):"0"}},Ho=ws,n0=Ms,ti=function(e){return t(Go,e,"")},l$=k(function(e,r,n){return e<=0?n:b(l$,e>>1,G(r,r),e&1?G(n,r):n)}),it=v(function(e,r){return b(l$,e,r,"")}),Wo=k(function(e,r,n){return G(n,t(it,e-Nn(n),ti(r)))}),Uo=Ds,u$=function(e){var r=t(Do,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},a0=function(e){var r=t(Do,"e",ae(ue(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Le,0,Xu(t(Lg,"+",i)?t(rt,1,i):i)),c=u$(n),l=c.a,u=c.b,m=G(l,u),s=o<0?t(Le,"0",t(Fe,function(d){var g=d.a,f=d.b;return g+("."+f)},t(Fe,ai(ti),fa(G(t(it,ue(o),"0"),m))))):b(Wo,o+1,"0",m);return G(e<0?"-":"",s)}else{var n=r.a;return G(e<0?"-":"",n)}else return""},t0=k(function(e,r,n){if(Ho(n)||n0(n))return ae(n);var a=n<0,i=u$(a0(ue(n))),o=i.a,c=i.b,l=Nn(o)+r,u=G(t(it,-l+1,"0"),b(Wo,l,"0",G(o,c))),m=Nn(u),s=t(qe,1,l),d=t(e,a,b(ma,s,m,u)),g=b(ma,0,s,u),f=d?Uo(t(Le,"1",t(Fe,c$,fa(Uo(g))))):g,_=Nn(f),y=f==="0"?f:r<=0?G(f,t(it,ue(r),"0")):ce(r,Nn(c))<0?b(ma,0,_-r,f)+("."+b(ma,_-r,_,f)):G(o+".",b(Wo,r,"0",c));return t(r0,a,y)}),$$=t0(v(function(e,r){var n=fa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(jr(i))})),i0=Kg($$),o0=k(function(e,r,n){var a=t(Fo,10,ue(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(i0,i,n)}),v$=fs,Oo=v(function(e,r){e:for(;;){if(r.$===-2)return E;var n=r.b,a=r.c,i=r.d,o=r.e,c=t(v$,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return j(a);default:var l=e,u=o;e=l,r=u;continue e}}}),te=Be(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Nr={$:-2},sa=Be(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,s=a.c,d=a.d,g=a.e;return R(te,0,r,n,R(te,1,m,s,d,g),R(te,1,o,c,l,u))}else return R(te,e,o,c,R(te,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,s=a.c,f=a.d;f.a;var _=f.b,y=f.c,x=f.d,S=f.e,g=a.e;return R(te,0,m,s,R(te,1,_,y,x,S),R(te,1,r,n,g,i))}else return R(te,e,r,n,a,i)}),qo=k(function(e,r,n){if(n.$===-2)return R(te,0,e,r,Nr,Nr);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=t(v$,e,i);switch(u){case 0:return R(sa,a,i,o,b(qo,e,r,c),l);case 1:return R(te,a,i,r,c,l);default:return R(sa,a,i,o,c,b(qo,e,r,l))}}),ot=k(function(e,r,n){var a=b(qo,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return R(te,1,i,o,c,l)}else{var u=a;return u}}),c0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},f$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,y=g.d,x=g.e,S=m.e;return R(te,0,f,_,R(te,1,n,a,R(te,0,o,c,l,u),y),R(te,1,s,d,x,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,c=w.c,l=w.d,u=w.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return R(te,1,n,a,R(te,0,o,c,l,u),R(te,0,s,d,g,S))}else return e},m$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,m=l.c,s=l.d,d=l.e,g=i.e,f=e.e;f.a;var _=f.b,y=f.c,x=f.d,S=f.e;return R(te,0,o,c,R(te,1,u,m,s,d),R(te,1,n,a,g,R(te,0,_,y,x,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,c=w.c,C=w.d,g=w.e,F=e.e;F.a;var _=F.b,y=F.c,x=F.d,S=F.e;return R(te,1,n,a,R(te,0,o,c,C,g),R(te,0,_,y,x,S))}else return e},l0=Nt(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,m=o.d,s=o.e;return R(te,n,l,u,m,R(te,0,a,i,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,m$(r)}else break e;else return c.a,c.d,m$(r);else break e;return r}}),ii=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,R(te,r,n,a,ii(i),l);var u=f$(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return R(sa,m,s,d,ii(g),f)}else return Nr}else return R(te,r,n,a,ii(i),l)}else return Nr},ct=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,R(te,n,a,i,t(ct,e,o),c);var u=f$(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return R(sa,m,s,d,t(ct,e,g),f)}else return Nr}else return R(te,n,a,i,t(ct,e,o),c);else return t(u0,e,$o(l0,e,r,n,a,i,o,c))}),u0=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(le(e,a)){var l=c0(c);if(l.$===-1){var u=l.b,m=l.c;return R(sa,n,u,m,o,ii(c))}else return Nr}else return R(sa,n,a,i,o,t(ct,e,c))}else return Nr}),s$=v(function(e,r){var n=t(ct,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return R(te,1,a,i,o,c)}else{var l=n;return l}}),oi=k(function(e,r,n){var a=r(t(Oo,e,n));if(a.$)return t(s$,e,n);var i=a.a;return b(ot,e,i,n)}),$0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(oi,r,Fe(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(Zg,L(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(oi,r,Fe(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(Qg,L(o,c),b(o0,o,c,n))}));case 3:var r=e.a,n=e.b;return t(oi,r,Fe(function(a){return a.$===3?Yg(n):a}));default:var r=e.a,n=e.b;return t(oi,r,Fe(function(a){return a.$===2?Xg(n):a}))}},v0=function(e){return Jg($0(e))},f0=v(function(e,r){return t(J,v0(e),r)}),m0=v(function(e,r){return Ce(r,{ge:t(f0,e,r.ge)})}),s0=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,Ce(a,{s:t(ai,m0(e),a.s)}))}),Jo=v(function(e,r){var n=r.a,a=r.b;return L(n,e(a))}),d0=k(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,Ce(i,{s:t(Jo,t(e,o.a,r),o)}))}),p0=H(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ce(a,{bx:!a.bx});case 2:var i=n.a;return Ce(a,{R:b(Vg,e,i,a.R)});case 3:var o=n.a;return Ce(a,{bq:o});case 4:var c=n.a;return Ce(a,{R:t(s0,c,a.R)});case 5:var l=n.a;return Ce(a,{R:b(d0,r,l,a.R)});default:var u=n.a;return Ce(a,{R:t(qg,u,a.R)})}}),g0=v(function(e,r){return t(_r,No,{s:L(e,r(e)),an:D,X:D})}),h0=bd,d$=h0(D),b0=function(e){return{$:2,a:e}},ci=Ks,da=Zs,_0=Sd("tick",t(O,function(e){return t(O,function(r){return t(O,function(n){return t(O,function(a){return t(O,function(i){return t(O,function(o){return t(O,function(c){return ar({b8:c,cV:o,gs:i,ek:a,bL:n,bN:r,il:e})},t(W,"clock",Ve))},t(W,"devicePixelRatio",Ve))},t(W,"dt",Ve))},t(W,"keyboard",t(O,function(a){return t(O,function(i){return t(O,function(o){return t(O,function(c){return t(O,function(l){return t(O,function(u){return t(O,function(m){return t(O,function(s){return t(O,function(d){return ar({fK:d,gg:s,d0:m,gr:u,g4:l,hr:c,hx:o,fc:i,fm:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ci(da)))},t(W,"left",_e))},t(W,"pressedKeys",ci(da)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(O,function(n){return t(O,function(a){return t(O,function(i){return t(O,function(o){return t(O,function(c){return t(O,function(l){return t(O,function(u){return t(O,function(m){return ar({d0:m,c_:u,hb:l,hy:c,hz:o,fm:i,ip:a,it:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",Ve))},t(W,"y",Ve))))},t(W,"screen",t(O,function(r){return t(O,function(n){return ar({gL:n,$9:r})},t(W,"height",Ve))},t(W,"width",Ve))))},t(W,"wheel",t(O,function(e){return t(O,function(r){return ar({gk:r,gl:e})},t(W,"deltaX",Ve))},t(W,"deltaY",Ve))))),y0=function(e){return e.dK,_0(b0)},w0=function(e){return{$:5,a:e}},x0={$:0},li=v(function(e,r){return e}),S0=function(e){var r=e.b.s;return r.b},C0=function(e){return{$:1,a:e}},L0=C0,p$=function(e){return{$:8,a:e}},pe=p$,lt=function(e){return{$:0,a:e}},ut=k(function(e,r,n){return e(r(n))}),M0=t(ut,lt,li),bn=M0,Me=function(e){return{$:1,a:e}},nn=Me,g$=v(function(e,r){return{$:9,a:e,b:r}}),Hn={$:0},h$=v(function(e,r){return r.$===3?Hn:t(g$,e,r)}),Yo=function(e){return t(h$,4,e)},p={fz:"a",cL:"atv",fB:"ab",fC:"cx",fD:"cy",fE:"acb",fF:"accx",fG:"accy",fH:"acr",dU:"al",dV:"ar",fI:"at",cM:"ah",cN:"av",fM:"s",fS:"bh",fT:"b",fX:"w7",fZ:"bd",f_:"bdt",b4:"bn",f$:"bs",b7:"cpe",f9:"cp",gb:"cpx",gc:"cpy",aw:"c",cc:"ctr",cd:"cb",ce:"ccx",ax:"ccy",bu:"cl",cf:"cr",gf:"ct",gi:"cptr",gj:"ctxt",gB:"fcs",d6:"focus-within",gC:"fs",gG:"g",cX:"hbh",cY:"hc",ea:"he",cZ:"hf",eb:"hfp",gO:"hv",gR:"ic",gT:"fr",cl:"lbl",gX:"iml",gY:"imlf",gZ:"imlp",g_:"implw",g$:"it",g3:"i",es:"lnk",bf:"nb",eT:"notxt",hh:"ol",hi:"or",aV:"oq",hn:"oh",eX:"pg",eY:"p",ho:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hK:"e",hL:"cap",hN:"sev",hT:"sk",Y:"t",h_:"tc",h$:"w8",h0:"w2",h1:"w9",h2:"tj",cH:"tja",h3:"tl",h4:"w3",h5:"w5",h6:"w4",h7:"tr",h8:"w6",h9:"w1",ia:"tun",fk:"ts",a0:"clr",ih:"u",dL:"wc",fv:"we",dM:"wf",fw:"wfp",dN:"wrp"},Xo=Qr,yr=v(function(e,r){return t(wo,e,Xo(r))}),wr=yr("className"),mr=function(e){return Me(wr(e))},b$=v(function(e,r){return{$:2,a:e,b:r}}),P0=v(function(e,r){return{$:1,a:e,b:r}}),Je=function(e){return{$:0,a:e}},sr=2,z0={$:0},Wn=z0,k0={$:0},T0=p.fM+(" "+p.aw),D0=p.fM+(" "+p.gG),R0=p.fM+(" "+p.eX),A0=p.fM+(" "+p.eY),F0=p.fM+(" "+p.af),I0=p.fM+(" "+p.hK),E0=function(e){switch(e){case 0:return F0;case 1:return T0;case 2:return I0;case 3:return D0;case 4:return A0;default:return R0}},_$=function(e){return{$:1,a:e}},Un={$:0},Qo=function(e){return{$:1,a:e}},y$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return G(n,e);case 2:var a=r.a;return G(e,a);default:var n=r.a,a=r.b;return G(n,G(e,a))}}),w$=k(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return G(t(J,function(o){return L(e,o)},a),r);case 2:var i=n.a;return G(r,t(J,function(o){return L(e,o)},i));default:var a=n.a,i=n.b;return G(t(J,function(o){return L(e,o)},a),G(r,t(J,function(o){return L(e,o)},i)))}}),ui=4,B0=function(e){return{$:0,a:e}},V0=function(e){return{$:1,a:e}},$e=function(e){return e>31?V0(1<<e-32):B0(1<<e)},x$=$e(41),S$=$e(40),C$=$e(42),L$=$e(43),pa=en("div"),M$=Nr,Zo=M$,Gr=function(e){switch(e.$){case 0:var r=e.a;return T(r)+"px";case 1:return"auto";case 2:var n=e.a;return T(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(T(a)+Gr(i));default:var o=e.a,i=e.b;return"max"+(T(o)+Gr(i))}},ye=Cs,Te=function(e){return T(ye(e*255))},Ko=function(e){switch(e.$){case 0:return E;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return j("mv-"+(Te(n)+("-"+(Te(a)+("-"+Te(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,x=f.c,S=e.d;return j("tfrm-"+(Te(c)+("-"+(Te(l)+("-"+(Te(u)+("-"+(Te(s)+("-"+(Te(d)+("-"+(Te(g)+("-"+(Te(_)+("-"+(Te(y)+("-"+(Te(x)+("-"+Te(S))))))))))))))))))))}},$t=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+T(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(t(ee,"-",t(J,Gr,c.hB))+("-cols-"+(t(ee,"-",t(J,Gr,c.ak))+("-space-x-"+(Gr(c.hO.a)+("-space-y-"+Gr(c.hO.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(T(l.af)+("-"+(T(l.gd)+("-"+(T(l.$9)+("-"+T(l.gL)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(J,function(s){var d=$t(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return t(Le,"",Ko(o))}},ec=v(function(e,r){var n=r;return b(ot,e,0,n)}),j0=v(function(e,r){var n=t(Oo,e,r);return!n.$}),N0=v(function(e,r){var n=r;return t(j0,e,n)}),P$=v(function(e,r){var n=r.a,a=r.b,i=$t(e);return t(N0,i,n)?r:L(t(ec,i,n),t(z,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),vt=v(function(e,r){return{$:0,a:e,b:r}}),M=function(e){return"."+e},G0=k(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(z,i,n)}),On=v(function(e,r){return b(He,G0(e),D,r)}),ga=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(T(ye(r*255))+(","+T(ye(n*255))+(","+T(ye(a*255))+(","+(ae(i)+")")))))},rc=function(e){return t(ee," ",t(On,Dr,$([e.ef?j("inset"):E,j(ae(e.eU.a)+"px"),j(ae(e.eU.b)+"px"),j(ae(e.a3)+"px"),j(ae(e.bj)+"px"),j(ga(e.ca))])))},z$=function(e){return $([t(vt,M(p.d6)+":focus-within",t(On,Dr,$([t(Fe,function(r){return t(re,"border-color",ga(r))},e.fY),t(Fe,function(r){return t(re,"background-color",ga(r))},e.fQ),t(Fe,function(r){return t(re,"box-shadow",rc({a3:r.a3,ca:r.ca,ef:!1,eU:t(Jo,Ka,t(ai,Ka,r.eU)),bj:r.bj}))},e.hH),j(t(re,"outline","none"))]))),t(vt,M(p.fM)+":focus .focusable, "+(M(p.fM)+".focusable:focus, "+(".ui-slide-bar:focus + "+(M(p.fM)+" .focusable-thumb"))),t(On,Dr,$([t(Fe,function(r){return t(re,"border-color",ga(r))},e.fY),t(Fe,function(r){return t(re,"background-color",ga(r))},e.fQ),t(Fe,function(r){return t(re,"box-shadow",rc({a3:r.a3,ca:r.ca,ef:!1,eU:t(Jo,Ka,t(ai,Ka,r.eU)),bj:r.bj}))},e.hH),j(t(re,"outline","none"))])))])},Hr=function(e){return en(ou(e))},k$=v(function(e,r){return t(wo,Ad(e),cu(r))}),nc=v(function(e,r){return{$:2,a:e,b:r}}),ac=function(e){return{$:6,a:e}},N=v(function(e,r){return{$:1,a:e,b:r}}),dr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),H0=v(function(e,r){return{$:3,a:e,b:r}}),T$=$([0,1,2,3,4,5]),W0=v(function(e,r){return r.b?b(He,z,r,e):e}),tr=function(e){return b(He,W0,D,e)},ha=v(function(e,r){return tr(t(J,e,r))}),U0=function(e){switch(e){case 0:return M(p.gf);case 1:return M(p.cd);case 2:return M(p.cf);case 3:return M(p.bu);case 4:return M(p.ce);default:return M(p.ax)}},$i=function(e){switch(e){case 0:return M(p.fI);case 1:return M(p.fB);case 2:return M(p.dV);case 3:return M(p.dU);case 4:return M(p.fC);default:return M(p.fD)}},ft=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,U0(n),i),t(N,M(p.fM),$([t(A,$i(n),o)]))])};return ac(t(ha,r,T$))},D$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(A,M(p.cX),$([t(h,"z-index","0"),t(N,M(p.fS),$([t(h,"z-index","-1")]))])),t(A,M(p.hG),$([t(N,M(p.Y),$([t(A,M(p.cZ),$([t(h,"flex-grow","0")])),t(A,M(p.dM),$([t(h,"align-self","auto !important")]))]))])),t(N,M(p.cY),$([t(h,"height","auto")])),t(N,M(p.cZ),$([t(h,"flex-grow","100000")])),t(N,M(p.dM),$([t(h,"width","100%")])),t(N,M(p.fw),$([t(h,"width","100%")])),t(N,M(p.dL),$([t(h,"align-self","flex-start")])),ft(function(e){switch(e){case 0:return L($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return L($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return L($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return L($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return L($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return L($([t(N,M(p.fM),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),O0=function(e){var r=function(n){return $([t(N,M(p.fM),$([t(A,$i(n),e(n))]))])};return ac(t(ha,r,T$))},q0=function(){return $([0,1,2,3,4,5])}(),J0=$([t(dr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(dr,G(M(p.fM),G(M(p.hK),M(p.gR))),$([t(h,"display","block"),t(A,M(p.cZ),$([t(N,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(A,M(p.dM),$([t(N,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(dr,M(p.fM)+":focus",$([t(h,"outline","none")])),t(dr,M(p.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(A,G(M(p.fM),M(p.cZ)),$([t(h,"height","100%"),t(N,M(p.cZ),$([t(h,"height","100%")]))])),t(N,M(p.gT),$([t(A,M(p.bf),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(dr,M(p.bf),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(A,M(p.hK),D$),ac(function(e){return t(J,e,q0)}(function(e){switch(e){case 0:return t(A,M(p.fz),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(N,M(p.cZ),$([t(h,"height","auto")])),t(N,M(p.dM),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(N,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(A,M(p.fT),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(N,"*",$([t(h,"pointer-events","auto")])),t(N,M(p.cZ),$([t(h,"height","auto")]))]));case 2:return t(A,M(p.hi),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(N,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(A,M(p.hh),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(N,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(A,M(p.gT),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(N,"*",$([t(h,"pointer-events","auto")]))]));default:return t(A,M(p.fS),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(N,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(dr,M(p.fM),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(A,M(p.dN),$([t(h,"flex-wrap","wrap")])),t(A,M(p.eT),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(A,M(p.gi),$([t(h,"cursor","pointer")])),t(A,M(p.gj),$([t(h,"cursor","text")])),t(A,M(p.ho),$([t(h,"pointer-events","none !important")])),t(A,M(p.b7),$([t(h,"pointer-events","auto !important")])),t(A,M(p.a0),$([t(h,"opacity","0")])),t(A,M(p.aV),$([t(h,"opacity","1")])),t(A,M(G(p.gO,p.a0))+":hover",$([t(h,"opacity","0")])),t(A,M(G(p.gO,p.aV))+":hover",$([t(h,"opacity","1")])),t(A,M(G(p.gB,p.a0))+":focus",$([t(h,"opacity","0")])),t(A,M(G(p.gB,p.aV))+":focus",$([t(h,"opacity","1")])),t(A,M(G(p.cL,p.a0))+":active",$([t(h,"opacity","0")])),t(A,M(G(p.cL,p.aV))+":active",$([t(h,"opacity","1")])),t(A,M(p.fk),$([t(h,"transition",t(ee,", ",t(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,M(p.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(A,M(p.hE),$([t(h,"overflow-x","auto"),t(A,M(p.af),$([t(h,"flex-shrink","1")]))])),t(A,M(p.hF),$([t(h,"overflow-y","auto"),t(A,M(p.aw),$([t(h,"flex-shrink","1")])),t(A,M(p.hK),$([t(h,"flex-shrink","1")]))])),t(A,M(p.f9),$([t(h,"overflow","hidden")])),t(A,M(p.gb),$([t(h,"overflow-x","hidden")])),t(A,M(p.gc),$([t(h,"overflow-y","hidden")])),t(A,M(p.dL),$([t(h,"width","auto")])),t(A,M(p.b4),$([t(h,"border-width","0")])),t(A,M(p.fZ),$([t(h,"border-style","dashed")])),t(A,M(p.f_),$([t(h,"border-style","dotted")])),t(A,M(p.f$),$([t(h,"border-style","solid")])),t(A,M(p.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(A,M(p.g$),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(A,M(p.hK),D$),t(A,M(p.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(N,M(p.fM),$([t(h,"flex-basis","0%"),t(A,M(p.fv),$([t(h,"flex-basis","auto")])),t(A,M(p.es),$([t(h,"flex-basis","auto")]))])),t(N,M(p.cZ),$([t(h,"align-self","stretch !important")])),t(N,M(p.eb),$([t(h,"align-self","stretch !important")])),t(N,M(p.dM),$([t(h,"flex-grow","100000")])),t(N,M(p.cc),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(N,"u:first-of-type."+p.fH,$([t(h,"flex-grow","1")])),t(N,"s:first-of-type."+p.fF,$([t(h,"flex-grow","1"),t(N,M(p.fC),$([t(h,"margin-left","auto !important")]))])),t(N,"s:last-of-type."+p.fF,$([t(h,"flex-grow","1"),t(N,M(p.fC),$([t(h,"margin-right","auto !important")]))])),t(N,"s:only-of-type."+p.fF,$([t(h,"flex-grow","1"),t(N,M(p.fD),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(N,"s:last-of-type."+(p.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(N,"u:first-of-type."+(p.fH+(" ~ s."+p.fF)),$([t(h,"flex-grow","0")])),ft(function(e){switch(e){case 0:return L($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return L($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return L($([t(h,"justify-content","flex-end")]),D);case 3:return L($([t(h,"justify-content","flex-start")]),D);case 4:return L($([t(h,"justify-content","center")]),D);default:return L($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(A,M(p.hN),$([t(h,"justify-content","space-between")])),t(A,M(p.cl),$([t(h,"align-items","baseline")]))])),t(A,M(p.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(N,M(p.fM),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(A,M(p.ea),$([t(h,"flex-basis","auto")]))])),t(N,M(p.cZ),$([t(h,"flex-grow","100000")])),t(N,M(p.dM),$([t(h,"width","100%")])),t(N,M(p.fw),$([t(h,"width","100%")])),t(N,M(p.dL),$([t(h,"align-self","flex-start")])),t(N,"u:first-of-type."+p.fE,$([t(h,"flex-grow","1")])),t(N,"s:first-of-type."+p.fG,$([t(h,"flex-grow","1"),t(N,M(p.fD),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(N,"s:last-of-type."+p.fG,$([t(h,"flex-grow","1"),t(N,M(p.fD),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(N,"s:only-of-type."+p.fG,$([t(h,"flex-grow","1"),t(N,M(p.fD),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(N,"s:last-of-type."+(p.fG+" ~ u"),$([t(h,"flex-grow","0")])),t(N,"u:first-of-type."+(p.fE+(" ~ s."+p.fG)),$([t(h,"flex-grow","0")])),ft(function(e){switch(e){case 0:return L($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return L($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return L($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return L($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return L($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return L($([t(h,"justify-content","center")]),D)}}),t(N,M(p.cc),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(A,M(p.hN),$([t(h,"justify-content","space-between")]))])),t(A,M(p.gG),$([t(h,"display","-ms-grid"),t(N,".gp",$([t(N,M(p.fM),$([t(h,"width","100%")]))])),t(H0,L("display","grid"),$([L("display","grid")])),O0(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(A,M(p.eX),$([t(h,"display","block"),t(N,M(p.fM+":first-child"),$([t(h,"margin","0 !important")])),t(N,M(p.fM+($i(3)+(":first-child + ."+p.fM))),$([t(h,"margin","0 !important")])),t(N,M(p.fM+($i(2)+(":first-child + ."+p.fM))),$([t(h,"margin","0 !important")])),ft(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([t(h,"float","right"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return L(D,$([t(h,"float","left"),t(A,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),t(A,M(p.gX),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(A,M(p.g_),$([t(A,M(p.hK),$([t(h,"flex-basis","auto")]))])),t(A,M(p.gZ),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(N,M(p.gY),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(A,M(p.eY),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(A,M(p.cX),$([t(h,"z-index","0"),t(N,M(p.fS),$([t(h,"z-index","-1")]))])),t(nc,M(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(nc,M(p.eY),$([t(h,"display","inline"),t(A,"::after",$([t(h,"content","none")])),t(A,"::before",$([t(h,"content","none")]))])),t(nc,M(p.hK),$([t(h,"display","inline"),t(h,"white-space","normal"),t(A,M(p.fv),$([t(h,"display","inline-block")])),t(A,M(p.gT),$([t(h,"display","flex")])),t(A,M(p.fS),$([t(h,"display","flex")])),t(A,M(p.fz),$([t(h,"display","flex")])),t(A,M(p.fT),$([t(h,"display","flex")])),t(A,M(p.hi),$([t(h,"display","flex")])),t(A,M(p.hh),$([t(h,"display","flex")])),t(N,M(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(N,M(p.af),$([t(h,"display","inline")])),t(N,M(p.aw),$([t(h,"display","inline-flex")])),t(N,M(p.gG),$([t(h,"display","inline-grid")])),ft(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([t(h,"float","right")]));case 3:return L(D,$([t(h,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),t(A,".hidden",$([t(h,"display","none")])),t(A,M(p.h9),$([t(h,"font-weight","100")])),t(A,M(p.h0),$([t(h,"font-weight","200")])),t(A,M(p.h4),$([t(h,"font-weight","300")])),t(A,M(p.h6),$([t(h,"font-weight","400")])),t(A,M(p.h5),$([t(h,"font-weight","500")])),t(A,M(p.h8),$([t(h,"font-weight","600")])),t(A,M(p.fX),$([t(h,"font-weight","700")])),t(A,M(p.h$),$([t(h,"font-weight","800")])),t(A,M(p.h1),$([t(h,"font-weight","900")])),t(A,M(p.g3),$([t(h,"font-style","italic")])),t(A,M(p.hT),$([t(h,"text-decoration","line-through")])),t(A,M(p.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,G(M(p.ih),M(p.hT)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(A,M(p.ia),$([t(h,"font-style","normal")])),t(A,M(p.h2),$([t(h,"text-align","justify")])),t(A,M(p.cH),$([t(h,"text-align","justify-all")])),t(A,M(p.h_),$([t(h,"text-align","center")])),t(A,M(p.h7),$([t(h,"text-align","right")])),t(A,M(p.h3),$([t(h,"text-align","left")])),t(A,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),_n=function(e){return $([t(dr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(dr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},Y0=tr($([t(J,function(e){return t(dr,".border-"+T(e),$([t(h,"border-width",T(e)+"px")]))},t(rn,0,6)),t(J,function(e){return t(dr,".font-size-"+T(e),$([t(h,"font-size",T(e)+"px")]))},t(rn,8,32)),t(J,function(e){return t(dr,".p-"+T(e),$([t(h,"padding",T(e)+"px")]))},t(rn,0,24)),$([t(dr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(dr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),_n("zero"),_n("onum"),_n("liga"),_n("dlig"),_n("ordn"),_n("tnum"),_n("afrc"),_n("frac")])),X0=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fM+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fM+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Q0=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Z0=`
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
`,K0=`
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
`,rh="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(M(p.fM)+(M(p.af)+(" > "+(M(p.fM)+(" { flex-basis: auto !important; } "+(M(p.fM)+(M(p.af)+(" > "+(M(p.fM)+(M(p.cc)+(" { flex-basis: auto !important; }}"+(Q0+(Z0+(eh+(K0+X0))))))))))))))),ba=function(e){return t(ee,"",e)},_a=v(function(e,r){return{b9:r,G:D,aE:D,ag:e}}),ya=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Ce(o,{aE:t(z,L(c,l),o.aE)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return Ce(o,{G:t(z,{b9:`
}`,G:D,aE:d,ag:"@supports ("+(m+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return Ce(o,{G:t(z,t(ya,t(_a,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,y=i.b;return Ce(o,{G:t(z,t(ya,t(_a,n.ag+(" > "+_),""),y),o.G)});case 2:var _=i.a,y=i.b;return Ce(o,{G:t(z,t(ya,t(_a,n.ag+(" "+_),""),y),o.G)});case 4:var x=i.a,S=i.b;return Ce(o,{G:t(z,t(ya,t(_a,G(n.ag,x),""),S),o.G)});default:var w=i.a;return Ce(o,{G:t(z,t(ya,t(_a,n.ag,""),w),o.G)})}});return b(He,a,n,r)}),nh=function(e){var r=function(i){return ba(t(J,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b9+"}"))):""},a=function(i){var o=i;return G(n(o),ba(t(J,a,o.G)))};return ba(t(J,a,b(He,v(function(i,o){var c=i.a,l=i.b;return t(z,t(ya,t(_a,c,""),l),o)}),D,e)))},R$=G(rh,nh(G(J0,Y0))),yn=yo,A$=function(e){var r=e.eR;switch(r){case 0:return b(Hr,"div",D,$([b(Hr,"style",D,$([yn(R$)]))]));case 1:return yn("");default:return b(Hr,"elm-ui-static-rules",$([t(k$,"rules",Xo(R$))]),D)}},ah=v(function(e,r){return Qr(b(Ae,ud(e),od(),r))}),th=function(e){return Qr(b(Ae,v(function(r,n){var a=r.a,i=r.b;return b(ld,a,i,n)}),cd(),e))},ih=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hd;return'"'+(r+'"')}},oh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},ch=function(e){if(e.$===5){var r=e.a;return t(tt,oh,r.fp)}else return!1},wa=v(function(e,r){return ce(e,r)<0?e:r}),mt=k(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Pe=H(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ae,mt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gO;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ae,mt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ae,mt(!1),"",a)+`
}`))])}case 0:var c=b(Ae,mt(!1),"",a);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fM+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(M(p.fM)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(b(Ae,mt(!1),"",a)+`
}`))])}}),lh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+T(n)))}},uh=function(e){if(e.$===5){var r=e.a;return j(t(ee,", ",t(J,lh,r.fp)))}else return E},$h=function(e){switch(e.$){case 0:return E;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return j("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,x=f.c,S=e.d,w="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),F="rotate3d("+(ae(_)+(", "+(ae(y)+(", "+(ae(x)+(", "+(ae(S)+"rad)")))))));return j(w+(" "+(C+(" "+F))))}},tc=k(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return P(Pe,e,n,a,i);case 13:var o=r.a,c=r.b;return P(Pe,e,n,"."+o,$([t(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,u=t(qe,0,t(wa,1,1-l));return P(Pe,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return P(Pe,e,n,".font-size-"+T(m),$([t(re,"font-size",T(m)+"px")]));case 1:var o=r.a,s=r.b,d=t(ee,", ",t(On,uh,s)),g=$([t(re,"font-family",t(ee,", ",t(J,ih,s))),t(re,"font-feature-settings",d),t(re,"font-variant",t(tt,ch,s)?"small-caps":"normal")]);return P(Pe,e,n,"."+o,g);case 3:var f=r.a,c=r.b,_=r.c;return P(Pe,e,n,"."+f,$([t(re,c,_)]));case 4:var f=r.a,c=r.b,y=r.c;return P(Pe,e,n,"."+f,$([t(re,c,ga(y))]));case 5:var x=r.a,S=r.b,w=r.c,C=T(w)+"px",F=T(S)+"px",q="."+p.af,Q="."+(p.dN+q),U="."+p.dV,Y="."+p.eY,X="."+p.eX,V="."+p.dU,ne=ae(w/2)+"px",fe=ae(S/2)+"px",we="."+p.aw,f="."+x,me="."+p.fM;return tr($([P(Pe,e,n,f+(q+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",F)])),P(Pe,e,n,f+(Q+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),P(Pe,e,n,f+(we+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,f+(X+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),P(Pe,e,n,f+(X+(" > "+V)),$([t(re,"margin-right",F)])),P(Pe,e,n,f+(X+(" > "+U)),$([t(re,"margin-left",F)])),P(Pe,e,n,G(f,Y),$([t(re,"line-height","calc(1em + "+(T(w)+"px)"))])),P(Pe,e,n,"textarea"+(me+f),$([t(re,"line-height","calc(1em + "+(T(w)+"px)")),t(re,"height","calc(100% + "+(T(w)+"px)"))])),P(Pe,e,n,f+(Y+(" > "+V)),$([t(re,"margin-right",F)])),P(Pe,e,n,f+(Y+(" > "+U)),$([t(re,"margin-left",F)])),P(Pe,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",T(-1*(w/2|0))+"px")])),P(Pe,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",T(-1*(w/2|0))+"px")]))]));case 7:var x=r.a,se=r.b,U=r.c,xe=r.d,V=r.e,f="."+x;return P(Pe,e,n,f,$([t(re,"padding",ae(se)+("px "+(ae(U)+("px "+(ae(xe)+("px "+(ae(V)+"px")))))))]));case 6:var x=r.a,se=r.b,U=r.c,xe=r.d,V=r.e,f="."+x;return P(Pe,e,n,f,$([t(re,"border-width",T(se)+("px "+(T(U)+("px "+(T(xe)+("px "+(T(V)+"px")))))))]));case 8:var de=r.a,Re=k(function(Ge,Wa,Xr){e:for(;;)switch(Xr.$){case 0:var ns=Xr.a;return T(ns)+"px";case 1:var Mr=L(Ge,Wa);if(Mr.a.$===1){if(Mr.b.$===1)return Mr.a,Mr.b,"max-content";Mr.a;var En=Mr.b.a;return"minmax(max-content, "+(T(En)+"px)")}else if(Mr.b.$===1){var Bn=Mr.a.a;return Mr.b,"minmax("+(T(Bn)+"px, max-content)")}else{var Bn=Mr.a.a,En=Mr.b.a;return"minmax("+(T(Bn)+("px, "+(T(En)+"px)")))}case 2:var Ol=Xr.a,Pr=L(Ge,Wa);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,T(Ol)+"fr";Pr.a;var En=Pr.b.a;return"minmax(max-content, "+(T(En)+"px)")}else if(Pr.b.$===1){var Bn=Pr.a.a;return Pr.b,"minmax("+(T(Bn)+("px, "+(T(Ol)+"frfr)")))}else{var Bn=Pr.a.a,En=Pr.b.a;return"minmax("+(T(Bn)+("px, "+(T(En)+"px)")))}case 3:var to=Xr.a,io=Xr.b,oo=j(to),co=Wa,lo=io;Ge=oo,Wa=co,Xr=lo;continue e;default:var to=Xr.a,io=Xr.b,oo=Ge,co=j(to),lo=io;Ge=oo,Wa=co,Xr=lo;continue e}}),ke=function(Ge){return b(Re,E,E,Ge)};ke(de.hO.a);var Ye=ke(de.hO.b),In=function(Ge){return"grid-template-rows: "+(Ge+";")}(t(ee," ",t(J,ke,de.hB))),Ga=function(Ge){return"-ms-grid-rows: "+(Ge+";")}(t(ee,Ye,t(J,ke,de.ak))),Jr=function(Ge){return"-ms-grid-columns: "+(Ge+";")}(t(ee,Ye,t(J,ke,de.ak))),Yr="grid-row-gap:"+(ke(de.hO.b)+";"),la="grid-column-gap:"+(ke(de.hO.a)+";"),Vt=function(Ge){return"grid-template-columns: "+(Ge+";")}(t(ee," ",t(J,ke,de.ak))),f=".grid-rows-"+(t(ee,"-",t(J,Gr,de.hB))+("-cols-"+(t(ee,"-",t(J,Gr,de.ak))+("-space-x-"+(Gr(de.hO.a)+("-space-y-"+Gr(de.hO.b))))))),Ha=f+("{"+(Vt+(In+(la+(Yr+"}"))))),no="@supports (display:grid) {"+(Ha+"}"),ao=f+("{"+(Jr+(Ga+"}")));return $([ao,no]);case 9:var rr=r.a,Qm=t(ee," ",$(["-ms-grid-row: "+(T(rr.af)+";"),"-ms-grid-row-span: "+(T(rr.gL)+";"),"-ms-grid-column: "+(T(rr.gd)+";"),"-ms-grid-column-span: "+(T(rr.$9)+";")])),Zm=t(ee," ",$(["grid-row: "+(T(rr.af)+(" / "+(T(rr.af+rr.gL)+";"))),"grid-column: "+(T(rr.gd)+(" / "+(T(rr.gd+rr.$9)+";")))])),f=".grid-pos-"+(T(rr.af)+("-"+(T(rr.gd)+("-"+(T(rr.$9)+("-"+T(rr.gL))))))),Ha=f+("{"+(Zm+"}")),no="@supports (display:grid) {"+(Ha+"}"),ao=f+("{"+(Qm+"}"));return $([ao,no]);case 11:var f=r.a,Km=r.b,es=function(Ge){return b(tc,e,Ge,j(f))};return t(ha,es,Km);default:var Fr=r.a,_=$h(Fr),f=Ko(Fr),jt=L(f,_);if(!jt.a.$&&!jt.b.$){var x=jt.a.a,rs=jt.b.a;return P(Pe,e,n,"."+x,$([t(re,"transform",rs)]))}else return D}}),vh=v(function(e,r){return th(t(J,function(n){var a=b(tc,e,n,E);return L($t(n),t(ah,Xo,a))},r))}),vi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(J,n,r))+"}"))}),F$=k(function(e,r,n){var a=n.a,i=n.b;return $([t(vi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(vi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),fh=k(function(e,r,n){var a=r.a,i=r.b,o=le(e,n)?e:n+(" ."+e);return t(ee," ",G(b(F$,o,p.hL,i),b(F$,o,p.gC,a)))}),mh=v(function(e,r){var n=le(e,r)?e:r+(" ."+e);return t(ee," ",$([t(vi,"."+(n+("."+(p.hL+(", "+("."+(n+(" ."+p.hL))))))),$([L("line-height","1")])),t(vi,"."+(n+("."+(p.hL+("> ."+(p.Y+(", ."+(n+(" ."+(p.hL+(" > ."+p.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),I$=k(function(e,r,n){return{gL:r/e,bj:e,fq:n}}),E$=v(function(e,r){return b(He,v(function(n,a){return e(n)?t(z,n,a):a}),D,r)}),sh=function(e){if(e.b){var r=e.a,n=e.b;return j(b(Ae,qe,r,n))}else return E},B$=function(e){if(e.b){var r=e.a,n=e.b;return j(b(Ae,wa,r,n))}else return E},V$=function(e){var r=$([e.f3,e.fR,e.gn,e.g8]),n=t(Le,e.gn,B$(r)),a=t(Le,e.fR,B$(t(E$,function(m){return!le(m,n)},r))),i=t(Le,e.f3,sh(r)),o=1/(i-a),c=1-i,l=1/(i-n),u=1-i;return{f3:b(I$,o,i-a,c),d8:b(I$,l,i-n,u)}},j$=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ae(e.gL)),L("vertical-align",ae(e.fq)+"em"),L("font-size",ae(e.bj)+"em")]))},dh=function(e){return b(Ae,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fA;if(i.$===1)return n;var o=i.a;return j(L(j$(function(c){return c.d8}(V$(o))),j$(function(c){return c.f3}(V$(o)))))}else return n;else return n}),E,e)},ph=function(e){var r=function(o){if(o.$===4){var c=o.b;return j("@import url('"+(c+"');"))}else return E},n=function(o){o.a;var c=o.b,l=t(ee,`
`,t(On,r,c));return l},a=t(J,Ou,e),i=function(o){var c=o.a,l=o.b,u=dh(l);if(u.$===1)return t(ee,"",t(J,mh(c),a));var m=u.a;return t(ee,"",t(J,t(fh,c,m),a))};return G(t(ee,`
`,t(J,n,e)),t(ee,`
`,t(J,i,e)))},gh=function(e){if(e.$===1){var r=e.a,n=e.b;return j(L(r,n))}else return E},N$=v(function(e,r){var n=v(function(c,l){return{cD:G(l.cD,b(tc,e,c,E)),bW:function(){var u=gh(c);if(u.$===1)return l.bW;var m=u.a;return t(z,m,l.bW)}()}}),a=b(Ae,n,{cD:D,bW:D},r),i=a.bW,o=a.cD;return G(ph(i),ba(o))}),G$=v(function(e,r){var n=e.eR;switch(n){case 0:return b(Hr,"div",D,$([b(Hr,"style",D,$([yn(t(N$,e,r))]))]));case 1:return b(Hr,"div",D,$([b(Hr,"style",D,$([yn(t(N$,e,r))]))]));default:return b(Hr,"elm-ui-rules",$([t(k$,"rules",t(vh,e,r))]),D)}}),H$=H(function(e,r,n,a){var i=t(G$,r,b(Ae,P$,L(Zo,z$(r.gB)),n).b);return e?t(z,L("static-stylesheet",A$(r)),t(z,L("dynamic-stylesheet",i),a)):t(z,L("dynamic-stylesheet",i),a)}),W$=H(function(e,r,n,a){var i=t(G$,r,b(Ae,P$,L(Zo,z$(r.gB)),n).b);return e?t(z,A$(r),t(z,i,a)):t(z,i,a)}),ic=$e(45),st=$e(37),U$=function(e){return Pd(ou(e))},hh=en("p"),ir=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return le(o&a,o)}else{var i=e.a;return le(i&n,i)}}),O$=en("s"),q$=en("u"),oc=$e(44),dt=$e(39),fi=vr(function(e,r,n,a,i,o){var c=v(function(u,m){if(a.$===1){var s=a.a;return b(U$,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return P(H$,!1,g,f,s);default:var g=i.a,f=i.b;return P(H$,!0,g,f,s)}}())}else{var d=a.a;return t(function(){switch(u){case"div":return pa;case"p":return hh;default:return Hr(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return P(W$,!1,g,f,d);default:var g=i.a,f=i.b;return P(W$,!0,g,f,d)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var u=r.a;return t(c,u,n);default:var u=r.a,m=r.b;return b(Hr,u,n,$([t(c,m,$([wr(p.fM+(" "+p.hK))]))]))}}();switch(o){case 0:return t(ir,dt,e)&&!t(ir,oc,e)?l:t(ir,S$,e)?t(q$,$([wr(t(ee," ",$([p.fM,p.hK,p.cc,p.ax,p.fH])))]),$([l])):t(ir,C$,e)?t(O$,$([wr(t(ee," ",$([p.fM,p.hK,p.cc,p.ax,p.fF])))]),$([l])):l;case 1:return t(ir,st,e)&&!t(ir,ic,e)?l:t(ir,L$,e)?t(O$,$([wr(t(ee," ",$([p.fM,p.hK,p.cc,p.fG])))]),$([l])):t(ir,x$,e)?t(q$,$([wr(t(ee," ",$([p.fM,p.hK,p.cc,p.fE])))]),$([l])):l;default:return l}}),wn=function(e){return!e.b},cc=yn,bh=p.fM+(" "+(p.Y+(" "+(p.dL+(" "+p.cY))))),pt=function(e){return t(pa,$([wr(bh)]),$([cc(e)]))},_h=p.fM+(" "+(p.Y+(" "+(p.dM+(" "+p.cZ))))),J$=function(e){return t(pa,$([wr(_h)]),$([cc(e)]))},yh=k(function(e,r,n){var a=v(function(_,y){var x=_.a,S=_.b,w=y.a,C=y.b;switch(S.$){case 0:var F=S.a;return le(e,ui),L(t(z,L(x,F(e)),w),C);case 1:var q=S.a;return le(e,ui),L(t(z,L(x,t(q.gP,Un,e)),w),wn(C)?q.hU:G(q.hU,C));case 2:var Q=S.a;return L(t(z,L(x,le(e,sr)?J$(Q):pt(Q)),w),C);default:return L(w,C)}}),i=v(function(_,y){var x=y.a,S=y.b;switch(_.$){case 0:var w=_.a;return le(e,ui),L(t(z,w(e),x),S);case 1:var C=_.a;return le(e,ui),L(t(z,t(C.gP,Un,e),x),wn(S)?C.hU:G(C.hU,S));case 2:var F=_.a;return L(t(z,le(e,sr)?J$(F):pt(F),x),S);default:return L(x,S)}});if(r.$===1){var o=r.a,c=b(He,a,L(D,D),o),l=c.a,u=c.b,m=wn(u)?n.hU:G(n.hU,u);if(m.b){var s=m;return Qo({gP:P(fi,n.aS,n.aU,n.aJ,_$(b(w$,"nearby-element-pls",l,n.aM))),hU:s})}else return lt(R(fi,n.aS,n.aU,n.aJ,_$(b(w$,"nearby-element-pls",l,n.aM)),Un))}else{var d=r.a,g=b(He,i,L(D,D),d),f=g.a,u=g.b,m=wn(u)?n.hU:G(n.hU,u);if(m.b){var s=m;return Qo({gP:P(fi,n.aS,n.aU,n.aJ,Je(t(y$,f,n.aM))),hU:s})}else return lt(R(fi,n.aS,n.aU,n.aJ,Je(t(y$,f,n.aM)),Un))}}),or=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),wh=function(e){return{$:10,a:e}},mi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(mi,n,o|a)}else{var i=e.a;return t(mi,i|n,a)}}),Y$=function(e){return{$:1,a:e}},si=v(function(e,r){return{$:3,a:e,b:r}}),X$=function(e){return{$:2,a:e}},xh=v(function(e,r){return t(pa,$([wr(function(){switch(e){case 0:return t(ee," ",$([p.bf,p.hK,p.fz]));case 1:return t(ee," ",$([p.bf,p.hK,p.fT]));case 2:return t(ee," ",$([p.bf,p.hK,p.hi]));case 3:return t(ee," ",$([p.bf,p.hK,p.hh]));case 4:return t(ee," ",$([p.bf,p.hK,p.gT]));default:return t(ee," ",$([p.bf,p.hK,p.fS]))}}())]),$([function(){switch(r.$){case 3:return yn("");case 2:var n=r.a;return pt(n);case 0:var a=r.a;return a(sr);default:var i=r.a;return t(i.gP,Un,sr)}}()]))}),Sh=k(function(e,r,n){var a=t(xh,e,r);switch(n.$){case 0:return e===5?Y$($([a])):X$($([a]));case 1:var i=n.a;return e===5?Y$(t(z,a,i)):t(si,i,$([a]));case 2:var o=n.a;return e===5?t(si,$([a]),o):X$(t(z,a,o));default:var i=n.a,o=n.b;return e===5?t(si,t(z,a,i),o):t(si,i,t(z,a,o))}}),Q$=v(function(e,r){return{$:2,a:e,b:r}}),xn=function(e){return{$:1,a:e}},qn=v(function(e,r){switch(r.$){case 0:return xn(e);case 1:var n=r.a;return t(Q$,n,e);default:var a=r.a,i=r.b;return t(Q$,a,i)}}),Ch=function(e){switch(e){case 0:return p.cM+(" "+p.dU);case 2:return p.cM+(" "+p.dV);default:return p.cM+(" "+p.fC)}},Lh=function(e){switch(e){case 0:return p.cN+(" "+p.fI);case 2:return p.cN+(" "+p.fB);default:return p.cN+(" "+p.fD)}},gt=v(function(e,r){return t(zr,Rd(e),cu(r))}),Wr=H(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Sn=function(e){return{$:1,a:e}},Mh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Sn(I(i,0,0));case 1:var o=r.a;return Sn(I(0,o,0));case 2:var c=r.a;return Sn(I(0,0,c));case 3:var n=r.a;return Sn(n);case 4:var n=r.a,f=r.b;return P(Wr,I(0,0,0),I(1,1,1),n,f);default:var n=r.a;return P(Wr,I(0,0,0),n,I(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,c=a.c;switch(r.$){case 0:var l=r.a;return Sn(I(l,o,c));case 1:var u=r.a;return Sn(I(i,u,c));case 2:var m=r.a;return Sn(I(i,o,m));case 3:var n=r.a;return Sn(n);case 4:var n=r.a,f=r.b;return P(Wr,a,I(1,1,1),n,f);default:var s=r.a;return P(Wr,a,s,I(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,c=a.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return P(Wr,I(l,o,c),d,g,f);case 1:var u=r.a;return P(Wr,I(i,u,c),d,g,f);case 2:var m=r.a;return P(Wr,I(i,o,m),d,g,f);case 3:var _=r.a;return P(Wr,_,d,g,f);case 4:var y=r.a,x=r.b;return P(Wr,a,d,y,x);default:var S=r.a;return P(Wr,a,S,g,f)}}}),xa=$e(7),Z$=$e(36),K$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(mi,n|i,a|o)}),an=t(mi,0,0),lc=function(e){switch(e.$){case 0:var r=e.a,n=T(r),a="height-px-"+n;return I(an,p.ea+(" "+a),$([b(or,a,"height",n+"px")]));case 1:return I(t(oe,Z$,an),p.cY,D);case 2:var i=e.a;return i===1?I(t(oe,st,an),p.cZ,D):I(t(oe,st,an),p.eb+(" height-fill-"+T(i)),$([b(or,p.fM+("."+(p.aw+(" > "+M("height-fill-"+T(i))))),"flex-grow",T(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+T(o),u=b(or,l,"min-height",T(o)+"px !important"),m=lc(c),s=m.a,d=m.b,g=m.c;return I(t(oe,ic,s),l+(" "+d),t(z,u,g));default:var f=e.a,c=e.b,l="max-height-"+T(f),u=b(or,l,"max-height",T(f)+"px"),_=lc(c),s=_.a,d=_.b,g=_.c;return I(t(oe,ic,s),l+(" "+d),t(z,u,g))}},ev=$e(38),uc=function(e){switch(e.$){case 0:var r=e.a;return I(an,p.fv+(" width-px-"+T(r)),$([b(or,"width-px-"+T(r),"width",T(r)+"px")]));case 1:return I(t(oe,ev,an),p.dL,D);case 2:var n=e.a;return n===1?I(t(oe,dt,an),p.dM,D):I(t(oe,dt,an),p.fw+(" width-fill-"+T(n)),$([b(or,p.fM+("."+(p.af+(" > "+M("width-fill-"+T(n))))),"flex-grow",T(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+T(a),c=b(or,o,"min-width",T(a)+"px"),l=uc(i),u=l.a,m=l.b,s=l.c;return I(t(oe,oc,u),o+(" "+m),t(z,c,s));default:var d=e.a,i=e.b,o="max-width-"+T(d),c=b(or,o,"max-width",T(d)+"px"),g=uc(i),u=g.a,m=g.b,s=g.c;return I(t(oe,oc,u),o+(" "+m),t(z,c,s))}},di=$e(27),Ph=v(function(e,r){if(le(e,di))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return le(i,c)&&le(i,o)&&le(i,l)&&i>=0&&i<=24;default:return!1}}),Sa=$e(6),rv=$e(30),nv=$e(29),zh=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var s=l.a,d=l.b;switch(s.$){case 0:var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 3:var F=s.a,q=s.b;if(t(ir,F,n)){var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else{var g=q+(" "+e),f=r,_=t(oe,F,n),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}case 1:var Q=s.a,g=e,f=r,_=n,y=a,x=i,S=t(z,Q,o),w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 4:var F=s.a,U=s.b;if(t(ir,F,n)){var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else if(t(Ph,F,U)){var g=$t(U)+(" "+e),f=r,_=t(oe,F,n),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else{var g=$t(U)+(" "+e),f=r,_=t(oe,F,n),y=a,x=t(z,U,i),S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}case 10:var F=s.a,Y=s.b,g=e,f=r,_=t(oe,F,n),y=t(Mh,a,Y),x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 7:var X=s.a;if(t(ir,Sa,n)){var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else switch(X.$){case 0:var V=X.a,g=p.fv+(" width-px-"+T(V))+(" "+e),f=r,_=t(oe,Sa,n),y=a,x=t(z,b(or,"width-px-"+T(V),"width",T(V)+"px"),i),S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 1:var g=e+(" "+p.dL),f=r,_=t(oe,ev,t(oe,Sa,n)),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 2:var ne=X.a;if(ne===1){var g=e+(" "+p.dM),f=r,_=t(oe,dt,t(oe,Sa,n)),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else{var g=e+(" "+(p.fw+(" width-fill-"+T(ne)))),f=r,_=t(oe,dt,t(oe,Sa,n)),y=a,x=t(z,b(or,p.fM+("."+(p.af+(" > "+M("width-fill-"+T(ne))))),"flex-grow",T(ne*1e5)),i),S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}default:var fe=uc(X),we=fe.a,me=fe.b,Yr=fe.c,g=e+(" "+me),f=r,_=t(K$,we,t(oe,Sa,n)),y=a,x=G(Yr,i),S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}case 8:var se=s.a;if(t(ir,xa,n)){var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else switch(se.$){case 0:var V=se.a,xe=T(V)+"px",de="height-px-"+xe,g=p.ea+(" "+(de+(" "+e))),f=r,_=t(oe,xa,n),y=a,x=t(z,b(or,de,"height ",xe),i),S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 1:var g=p.cY+(" "+e),f=r,_=t(oe,Z$,t(oe,xa,n)),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.cZ+(" "+e),f=r,_=t(oe,st,t(oe,xa,n)),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else{var g=e+(" "+(p.eb+(" height-fill-"+T(ne)))),f=r,_=t(oe,st,t(oe,xa,n)),y=a,x=t(z,b(or,p.fM+("."+(p.aw+(" > "+M("height-fill-"+T(ne))))),"flex-grow",T(ne*1e5)),i),S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}default:var Re=lc(se),we=Re.a,me=Re.b,Yr=Re.c,g=e+(" "+me),f=r,_=t(K$,we,t(oe,xa,n)),y=a,x=G(Yr,i),S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}case 2:var ke=s.a;switch(ke.$){case 0:var g=e,f=t(qn,"main",r),_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 1:var g=e,f=t(qn,"nav",r),_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 2:var g=e,f=t(qn,"footer",r),_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 3:var g=e,f=t(qn,"aside",r),_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 4:var Ye=ke.a;if(Ye<=1){var g=e,f=t(qn,"h1",r),_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else if(Ye<7){var g=e,f=t(qn,"h"+T(Ye),r),_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else{var g=e,f=t(qn,"h6",r),_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}case 9:var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 8:var g=e,f=r,_=n,y=a,x=i,S=t(z,t(gt,"role","button"),o),w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 5:var In=ke.a,g=e,f=r,_=n,y=a,x=i,S=t(z,t(gt,"aria-label",In),o),w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 6:var g=e,f=r,_=n,y=a,x=i,S=t(z,t(gt,"aria-live","polite"),o),w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;default:var g=e,f=r,_=n,y=a,x=i,S=t(z,t(gt,"aria-live","assertive"),o),w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}case 9:var Ga=s.a,Jr=s.b,Yr=function(){switch(Jr.$){case 3:return i;case 2:return Jr.a,i;case 0:return Jr.a,i;default:var Ha=Jr.a;return G(i,Ha.hU)}}(),g=e,f=r,_=n,y=a,x=Yr,S=o,w=b(Sh,Ga,Jr,c),C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e;case 6:var la=s.a;if(t(ir,rv,n)){var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else{var g=Ch(la)+(" "+e),f=r,_=function(Fr){switch(la){case 1:return t(oe,C$,Fr);case 2:return t(oe,S$,Fr);default:return Fr}}(t(oe,rv,n)),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}default:var Vt=s.a;if(t(ir,nv,n)){var g=e,f=r,_=n,y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}else{var g=Lh(Vt)+(" "+e),f=r,_=function(Fr){switch(Vt){case 1:return t(oe,L$,Fr);case 2:return t(oe,x$,Fr);default:return Fr}}(t(oe,nv,n)),y=a,x=i,S=o,w=c,C=d;e=g,r=f,n=_,a=y,i=x,o=S,c=w,l=C;continue e}}}else{var u=Ko(a);if(u.$===1)return{aJ:t(z,wr(e),o),aM:c,aS:n,aU:r,hU:i};var m=u.a;return{aJ:t(z,wr(e+(" "+m)),o),aM:c,aS:n,aU:r,hU:t(z,wh(a),i)}}}),kh={$:0},Th=kh,cr=H(function(e,r,n,a){return b(yh,e,a,Ua(zh,E0(e),r,an,Th,D,D,k0,nr(n)))}),tn=H(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Dh={fQ:E,fY:E,hH:j({a3:0,ca:P(tn,155/255,203/255,1,1),eU:L(0,0),bj:3})},Rh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gO;return c.$===1?Ce(i,{gO:j(o)}):i;case 1:var l=a.a,u=i.gB;return u.$===1?Ce(i,{gB:j(l)}):i;default:var m=a.a,s=i.eR;return s.$===1?Ce(i,{eR:j(m)}):i}}),n=function(a){return{gB:function(){var i=a.gB;if(i.$===1)return Dh;var o=i.a;return o}(),gO:function(){var i=a.gO;if(i.$===1)return 1;var o=i.a;return o}(),eR:function(){var i=a.eR;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(He,r,{gB:E,gO:E,eR:E},e))},Ah=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(sr);case 1:var a=r.a.hU,n=r.a.gP;return t(n,e(a),sr);case 2:var i=r.a;return pt(i);default:return pt("")}}),Fh=k(function(e,r,n){var a=Rh(e),i=function(){var o=a.eR;return o===1?b$(a):P0(a)}();return t(Ah,i,P(cr,sr,Wn,r,Je($([n]))))}),ht=k(function(e,r,n){return{$:4,a:e,b:r,c:n}}),av=v(function(e,r){return{$:1,a:e,b:r}}),tv=function(e){return{$:2,a:e}},Ih={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),$c=function(e){return{$:3,a:e}},iv=$e(8),ov=$e(14),cv=$e(5),lv=$e(4),Ca=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return Te(r)+("-"+(Te(n)+("-"+(Te(a)+("-"+Te(i))))))},pi=Bs,vc=Es,uv=v(function(e,r){return G(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",vc(pi(n)));case 4:var n=e.a;return e.b,t(ee,"-",vc(pi(n)));default:var n=e.a.hd;return t(ee,"-",vc(pi(n)))}}())}),Eh=function(){var e=$([$c("Open Sans"),$c("Helvetica"),$c("Verdana"),Ih]);return $([t(ge,iv,b(ht,"bg-"+Ca(P(tn,1,1,1,0)),"background-color",P(tn,1,1,1,0))),t(ge,ov,b(ht,"fc-"+Ca(P(tn,0,0,0,1)),"color",P(tn,0,0,0,1))),t(ge,lv,tv(20)),t(ge,cv,t(av,b(Ae,uv,"font-",e),e))])}(),Bh=k(function(e,r,n){var a=e.hm;return b(Fh,a,t(z,mr(t(ee," ",$([p.hA,p.fM,p.hK]))),G(Eh,r)),n)}),$v={$:3},vv=function(e){return{$:2,a:e}},fc=kd,fv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Qo({gP:v(function(o,c){return t(fc,e,t(n.gP,o,c))}),hU:n.hU});case 0:var a=r.a;return lt(t(ut,fc(e),a));case 2:var i=r.a;return vv(i);default:return $v}}),mc=fv,Vh=fc,jh=function(e){return{$:0,a:e}},Se=jh,Nh=Dd,pr=Nh,mv={$:1},gi=function(e){return{$:5,a:e}},sv=gi(0),Rr=k(function(e,r,n){return P(tn,e/255,r/255,n/255,1)}),dv=b(Rr,0,0,0),Gh=zr("d"),Hh=zr("fill"),Wh=zr("height"),pv=tu("http://www.w3.org/2000/svg"),Uh=pv("path"),Oh=pv("svg"),qh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fJ:i,fU:a,gE:n,hu:r}},Jh=function(e){var r=qh(e);return"rgba("+(T(ye(r.hu*255))+(","+T(ye(r.gE*255))+(","+T(ye(r.fU*255))+(","+ae(r.fJ)+")"))))},Yh=zr("viewBox"),Xh=zr("width"),La=k(function(e,r,n){return t(Oh,$([Yh("0 0 100 100"),Xh(T(e)),Wh(T(e))]),$([t(Uh,$([Gh(n),Hh(Jh(r))]),D)]))}),Qh={$:1},lr=Qh,gv=function(e){return{$:7,a:e}},K=gv,he=v(function(e,r){return P(cr,sr,Wn,t(z,K(lr),t(z,pe(lr),e)),Je($([r])))}),hv=function(e){return{$:2,a:e}},ve=hv(1),Jn={gq:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gD:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gK:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hp:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hq:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hM:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fy:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ma={c1:260,bF:54},on=function(e){return t(ge,iv,b(ht,"bg-"+Ca(e),"background-color",e))},Zh=$e(28),Cn=function(e){return t(ge,Zh,b(ht,"bc-"+Ca(e),"border-color",e))},hi=1,xr=v(function(e,r){return P(cr,hi,Wn,t(z,mr(p.gf+(" "+p.bu)),t(z,pe(lr),t(z,K(lr),e))),Je(r))}),Kh=b(Rr,83,83,83),bv=H(function(e,r,n,a){return P(tn,e/255,r/255,n/255,a)}),bi=P(bv,56,56,56,.25),je=$v,bt=Be(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),_t=$e(2),Yn=function(e){var r=e;return t(ge,_t,R(bt,"p-"+T(e),r,r,r,r))},_v=k(function(e,r,n){return{$:5,a:e,b:r,c:n}}),yv=$e(3),wv=v(function(e,r){return"spacing-"+(T(e)+("-"+T(r)))}),Ln=function(e){return t(ge,yv,b(_v,t(wv,e,e),e,e))},e3=P(bv,0,0,0,0),r3=function(e){return{$:4,a:e}},sc=0,Mn=v(function(e,r){return P(cr,sc,Wn,t(z,mr(p.bu+(" "+p.ax)),t(z,K(lr),t(z,pe(lr),e))),Je(r))}),n3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gP(t(b$,{gB:{fQ:E,fY:E,hH:E},gO:1,eR:0},n.hU));case 2:var a=e.a;return li(yn(a));default:return li(yn(""))}},a3=v(function(e,r){return n3(e(r))}),t3=Td,i3=v(function(e,r){return lt(b(t3,a3,e,r))}),Pn=function(e){return t(ge,ov,b(ht,"fc-"+Ca(e),"color",e))},dc=b(Rr,195,195,195),zn=v(function(e,r){return{$:3,a:e,b:r}}),xv=$e(13),o3=t(zn,xv,p.h6),c3=$e(20),Sv=t(zn,c3,p.hF),Xn=function(e){return t(ge,lv,tv(e))},pc=t(zn,xv,p.fX),gc=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return R(te,n,a,t(e,a,i),t(gc,e,o),t(gc,e,c))}),Cv=v(function(e,r){if(le(e,r)){var n=e;return t(ge,_t,R(bt,"p-"+T(e),n,n,n,n))}else{var a=r,i=e;return t(ge,_t,R(bt,"p-"+(T(e)+("-"+T(r))),a,i,a,i))}}),kn=function(e){return vv(e)},l3=function(e){return b(Xt,k(function(r,n,a){return t(z,n,a)}),D,e)},u3=v(function(e,r){return{$:3,a:e,b:r}}),$3=v(function(e,r){return{$:2,a:e,b:r}}),v3=v(function(e,r){return{$:0,a:e,b:r}}),f3=v(function(e,r){return{$:1,a:e,b:r}}),_i=H(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Lv=P(_i,0/255,0/255,0/255,1),yi=function(e){return{$:6,a:e}},m3=yi(0),wi=function(e){return{$:2,a:e}},s3={$:6},Mv=wi(s3),Pv=k(function(e,r,n){if(r.$===1)return r.a,P(cr,hi,xn("label"),e,Je($([n])));var a=r.a,i=r.b,o=r.c,c=P(cr,sr,Wn,i,Je($([o])));switch(a){case 2:return P(cr,hi,xn("label"),t(z,mr(p.cl),e),Je($([c,n])));case 3:return P(cr,hi,xn("label"),t(z,mr(p.cl),e),Je($([n,c])));case 0:return P(cr,sc,xn("label"),t(z,mr(p.cl),e),Je($([n,c])));default:return P(cr,sc,xn("label"),t(z,mr(p.cl),e),Je($([c,n])))}}),hc=gt,cn=gi(1),zv="Enter",d3=function(e){return{$:5,a:e}},kv=function(e){if(e.$===1){var r=e.a;return wi(d3(r))}else return Hn},Tv=function(e){return e.$===1},p3=function(e){return{$:0,a:e}},bc=iu,g3=v(function(e,r){return t(bc,e,p3(r))}),Dv=function(e){return t(g3,"click",ar(e))},h3=Ys,b3=function(e){return{$:2,a:e}},_3=v(function(e,r){return t(bc,e,b3(r))}),Rv=function(e){var r=function(a){var i=e(a);if(i.$===1)return h3("No key matched");var o=i.a;return ar(o)},n=t(O,r,t(W,"key",da));return Me(t(_3,"keydown",t(Qt,function(a){return L(a,!0)},n)))},y3=$e(21),Qn=t(zn,y3,p.gi),Av=" ",Fv=function(e){return t(zr,"tabIndex",T(e))},w3=t(ut,Me,Fv),x3=v(function(e,r){var n=r.el,a=r.gQ,i=r.f8,o=r.bJ,c=G($([Tv(n)?Hn:Ln(6),Me(Dv(o(!i))),Mv,Rv(function(l){return le(l,zv)||le(l,Av)?j(o(!i)):E}),w3(0),Qn,m3,K(ve)]),e);return b(Pv,t(z,Me(t(hc,"role","checkbox")),t(z,Me(t(hc,"aria-checked",i?"true":"false")),t(z,kv(n),c))),n,P(cr,sr,Wn,$([cn,pe(ve),K(lr)]),Je($([a(i)]))))}),S3=k(function(e,r,n){return G(t(it,e-Nn(n),ti(r)),n)}),xi=ps,Iv=function(e){var r=function(n){return n<10?T(n):ti(o$(87+n))};return e<16?r(e):G(Iv(e/16|0),r(t(xi,16,e)))},C3=t(We,Iv,t(S3,2,"0")),_c=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fJ:i,fU:a,gE:n,hu:r}},L3=function(e){var r=_c(e),n=r.hu,a=r.gE,i=r.fU;return t(ee,"",t(z,"#",t(J,t(We,ye,C3),$([n*255,a*255,i*255]))))},yc=$e(12),Ev=t(zn,yc,p.h_),wc=yi(1),ln=gs,yt=function(e){return e*ln/180},M3=function(e){return{$:1,a:e}},xc=v(function(e,r){return{$:10,a:e,b:r}}),P3=$e(26),z3=function(e){return t(xc,P3,M3(-e))},Pa=k(function(e,r,n){return P(tn,e,r,n,1)}),k3=tn,T3=v(function(e,r){return{$:4,a:e,b:r}}),D3=$e(24),R3=function(e){return t(xc,D3,t(T3,I(0,0,1),e))},A3=$e(17),Zn=function(e){return t(ge,A3,b(or,"br-"+T(e),"border-radius",T(e)+"px"))},F3=function(e){return ba($([e.ef?"box-inset":"box-",Te(e.eU.a)+"px",Te(e.eU.b)+"px",Te(e.a3)+"px",Te(e.bj)+"px",Ca(e.ca)]))},I3=$e(19),E3=function(e){var r={a3:e.a3,ca:e.ca,ef:!1,eU:e.eU,bj:e.bj};return t(ge,I3,b(or,F3(r),"box-shadow",rc(r)))},Bv=v(function(e,r){return{$:12,a:e,b:r}}),Vv=$e(0),B3=function(e){return e?t(ge,Vv,t(Bv,"transparent",1)):t(ge,Vv,t(Bv,"visible",0))},Sc=b(Pa,1,1,1),Cc=Be(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),Si=function(e){return t(ge,di,R(Cc,"b-"+T(e),e,e,e,e))},V3=v(function(e,r){return t(ge,di,R(Cc,"b-"+(T(e)+("-"+T(r))),r,e,r,e))}),wt=function(e){var r=e.b5,n=e.cI,a=e.g4,i=e.hx;return le(n,r)&&le(a,i)?le(n,i)?Si(n):t(V3,a,n):t(ge,di,R(Cc,"b-"+(T(n)+("-"+(T(i)+("-"+(T(r)+("-"+T(a))))))),n,i,r,a))},j3=function(e){return t(he,$([mr("focusable"),K(Se(14)),pe(Se(14)),Pn(Sc),cn,Xn(9),Ev,Zn(3),Cn(e?b(Pa,59/255,153/255,252/255):b(Pa,211/255,211/255,211/255)),E3({a3:1,ca:e?P(k3,238/255,238/255,238/255,0):b(Pa,238/255,238/255,238/255),eU:L(0,0),bj:1}),on(e?b(Pa,59/255,153/255,252/255):Sc),Si(e?0:1),Yo(t(he,$([Cn(Sc),pe(Se(6)),K(Se(9)),R3(yt(-45)),wc,cn,z3(1),B3(!e),wt({b5:2,g4:2,hx:0,cI:0})]),je))]),je)},N3=yr("htmlFor"),Lc=v(function(e,r){if(r.$)return E;var n=r.a;return e(n)}),Ci=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return e(n)}}),jv=H(function(e,r,n,a){return{gV:r,g9:e,hg:n,hV:a}}),G3=ip,H3=Us,W3=v(function(e,r){if(r.$)return Ze(e);var n=r.a;return Ie(n)}),U3=tp,O3=function(e){return t(U3,{f4:!1,hc:!1},e)},Nv=function(e){if(e.b){var r=e.a;return e.b,j(r)}else return E},q3=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return Ie(e(n))}}),J3=function(e){return{$:2,a:e}},Y3=function(e){return{$:0,a:e}},X3=function(e){return{$:1,a:e}},Mc=v(function(e,r){return jr(r)-jr(e)}),Pc=k(function(e,r,n){var a=jr(n);return ce(jr(e),a)<1&&ce(a,jr(r))<1}),Q3=v(function(e,r){var n=function(i){return ce(i,e)<0?Ie(i):Ze(X3(r))},a=b(Pc,"0","9",r)?Ie(t(Mc,"0",r)):b(Pc,"a","z",r)?Ie(10+t(Mc,"a",r)):b(Pc,"A","Z",r)?Ie(10+t(Mc,"A",r)):Ze(Y3(r));return t(Ci,n,a)}),Gv=v(function(e,r){var n=fa(r);if(n.$===1)return Ie(0);var a=n.a,i=a.a,o=a.b;return t(Ci,function(c){return t(Ci,function(l){return Ie(c+l*e)},t(Gv,e,o))},t(Q3,e,i))}),Z3=v(function(e,r){return 2<=e&&e<=36?t(Gv,e,Uo(r)):Ze(J3(e))}),K3=Z3(16),eb=k(function(e,r,n){return P(_i,e,r,n,1)}),rb=H(function(e,r,n,a){return P(_i,e,r,n,a)}),xt=ds,nb=v(function(e,r){var n=t(xt,10,e);return ye(r*n)/n}),ab=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=i$(n);if(a.b&&!a.b.b){var i=a.a;return H3($([i,i]))}else return n};return t(We,pi,t(We,function(n){return t(Fe,function(a){return b(G3,1,a,n)},O3(e))},t(We,Lc(Nv),t(We,Fe(function(n){return n.hV}),t(We,Fe(On(Dr)),t(We,W3("Parsing hex regex failed"),Ci(function(n){var a=t(J,t(We,r,t(We,K3,q3(Ka))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,u=l.a.a,m=l.b,s=m.a.a;return Ie(P(rb,i/255,c/255,u/255,t(nb,2,s/255)))}else break e;else{var i=a.a.a,d=a.b,c=d.a.a,g=d.b,u=g.a.a;return Ie(b(eb,i/255,c/255,u/255))}else break e;return Ze("Parsing ints from hex failed")})))))))}(),tb=yr("id"),ib=en("input"),ob=en("label"),Hv=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),cb=Hv(0),lb=yr("name"),ub=function(e){return L(e,!0)},$b=function(e){return{$:1,a:e}},vb=v(function(e,r){return t(bc,e,$b(r))}),fb=v(function(e,r){return b(He,W,r,e)}),mb=t(fb,$(["target","value"]),da),Wv=function(e){return t(vb,"input",t(Qt,ub,t(Qt,e,mb)))},sb=t(zn,yc,p.h3),Uv=t(zn,yc,p.h7),zc=function(e){return t(h$,5,e)},kc=function(e){return t(ge,cv,t(av,b(Ae,uv,"ff-",e),e))},db=b(Rr,195,195,195),Ov=b(Rr,69,69,69),pb=Hv(2),gb={$:2},Tc=gb,hb=$e(32),bb=$e(31),qv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return j(i)}else return E;else{var a=n.a;return j(a)}}),E,e)},_b=v(function(e,r){return t(Le,r,b(He,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return j(L(i,c))}else return E;else{var i=a.a;return j(i)}}),E,e))}),Jv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return j(i)}else return E;else{var a=n.a;return j(a)}}),E,e)},yb=$e(33),wb=yr("max"),xb=yr("min"),Sb=v(function(e,r){return t(ge,yv,b(_v,t(wv,e,r),e,r))}),Cb=function(e){return t(yr,"step",e)},Yv=yr("type"),Xv=yr("value"),za=hv,Lb=Id,Qv=v(function(e,r){switch(r.$){case 0:return Hn;case 2:var n=r.a;return wi(n);case 6:var a=r.a;return yi(a);case 5:var i=r.a;return gi(i);case 7:var a=r.a;return gv(a);case 8:var a=r.a;return p$(a);case 3:var a=r.a,i=r.b;return t(zn,a,i);case 4:var o=r.a,c=r.b;return t(ge,o,c);case 9:var l=r.a,u=r.b;return t(g$,l,t(fv,e,u));case 1:var m=r.a;return Me(t(Lb,e,m));default:var s=r.a,d=r.b;return t(xc,s,d)}}),Mb=k(function(e,r,n){return t(Mn,$([K(ve),pe(t(Le,ve,n)),cn]),$([t(he,$([K(za(ye(e*1e4)))]),je),t(he,t(z,cn,t(J,Qv(nt),r)),je),t(he,$([K(za(ye(ue(1-e)*1e4)))]),je)]))}),Pb=k(function(e,r,n){return t(xr,$([pe(ve),K(t(Le,ve,n)),wc]),$([t(he,$([pe(za(ye(ue(1-e)*1e4)))]),je),t(he,t(z,wc,t(J,Qv(nt),r)),je),t(he,$([pe(za(ye(e*1e4)))]),je)]))}),Zv=v(function(e,r){var n=Jv(e),a=qv(e),i=function(){var S=L(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var w=S.a.a.a,C=S.b.a.a;return ce(C,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cu)/(r.ct-r.cu),c=r.ib,l=c,u=qv(l),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return T(S)+"px"}(),s=Jv(l),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return T(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([t(re,"width",d),t(re,"height",m)]),_=t(_b,e,L(5,5)),y=_.a,x=_.b;return b(Pv,$([Tv(r.el)?Hn:t(Sb,y,x),Mv,K(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.el,t(Mn,$([K(t(Le,ve,n)),pe(t(Le,Se(20),a))]),$([P(cr,sr,xn("input"),$([kv(r.el),t(ge,hb,t(vt,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,yb,t(vt,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,bb,t(vt,'input[type="range"].'+(g+"::-ms-thumb"),f)),Me(wr(g+" ui-slide-bar focusable-parent")),Me(Wv(function(S){var w=t$(S);if(w.$===1)return r.bJ(0);var C=w.a;return r.bJ(C)})),Me(Yv("range")),Me(Cb(function(){var S=r.cG;if(S.$===1)return"any";var w=S.a;return ae(w)}())),Me(xb(ae(r.cu))),Me(wb(ae(r.ct))),Me(Xv(ae(r.cJ))),i?Me(t(hc,"orient","vertical")):Hn,K(i?t(Le,Se(20),a):t(Le,ve,n)),pe(i?t(Le,ve,n):t(Le,Se(20),a))]),Je(D)),t(he,t(z,K(t(Le,ve,n)),t(z,pe(t(Le,Se(20),a)),G(e,$([zc(i?b(Pb,o,t(z,mr("focusable-thumb"),l),n):b(Mb,o,t(z,mr("focusable-thumb"),l),a))])))),je)])))}),zb=b(Pa,.5,.5,.5),Kv=Dr,ef=function(e){var r=e.c0,n=e.cJ,a=e.cu,i=e.ct,o=e.cG,c=e.bJ;return t(he,$([K(ve)]),t(Zv,$([Ln(2),zc(t(he,$([K(ve),pe(Se(16)),cn,on(Ov),Zn(4)]),je))]),{el:t(pb,D,t(Mn,$([K(ve)]),$([t(he,$([sb]),kn(r)),t(he,$([K(ve),Uv,kc($([Tc]))]),kn(ae(n)))]))),ct:i,cu:a,bJ:c,cG:j(o),ib:Kv($([K(Se(12)),pe(Se(12)),Zn(4),Si(0),Cn(zb),on(db)])),cJ:n}))},kb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Tb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(x3,D,{f8:n,gQ:j3,el:t(cb,D,kn(e)),bJ:u3(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return ef({c0:e,ct:o,cu:i,bJ:v3(e),cG:.001*(o-i),cJ:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return ef({c0:e,ct:o,cu:i,bJ:t(We,ye,f3(e)),cG:1,cJ:n});default:var n=r.a;return t(he,$([K(ve)]),bn(t(pa,D,$([t(pa,$([t(pr,"margin-bottom","6px")]),$([t(ob,$([N3(e)]),$([cc(e)]))])),t(ib,$([Yv("color"),t(pr,"width","100%"),t(pr,"height","26px"),t(pr,"padding","0px"),tb(e),lb(e),Wv(function(l){return t($3,e,t(kb,Lv,ab(l)))}),Xv(L3(n))]),D)]))))}}),Dc=b(Rr,255,255,255),Db=function(e){return t(xr,$([K(ve),Ln(8),t(Cv,0,14),wt({b5:1,g4:0,hx:0,cI:0}),Cn(bi)]),$([t(he,$([Xn(16),pc,Pn(Dc)]),kn(e.hd)),t(xr,$([K(ve),Ln(6)]),l3(t(gc,Tb,e.aN)))]))},Rb=function(e){return t(xr,$([K(ve),pe(ve),Pn(dc),Xn(12),o3,Sv]),t(J,Db,e))},Ab=i3(Rb),Fb=function(e){return t(xr,$([K(ve),pe(ve)]),$([t(Mn,$([Ln(14),K(ve)]),D),t(mc,r3,Ab(Gn(e).ge))]))},Ib=function(e){return{$:6,a:e}},Eb=H(function(e,r,n,a){return"pad-"+(T(e)+("-"+(T(r)+("-"+(T(n)+("-"+T(a)))))))}),Bb=function(e){var r=e.cI,n=e.hx,a=e.b5,i=e.g4;if(le(r,n)&&le(r,a)&&le(r,i)){var o=r;return t(ge,_t,R(bt,"p-"+T(r),o,o,o,o))}else return t(ge,_t,R(bt,P(Eb,r,n,a,i),r,n,a,i))},Vb=function(e){return{$:0,a:e}},jb=function(e){return{$:1,a:e}},Nb=jb,Gb=function(e){var r=e.b.X;return jn(r)},Li=b(Rr,255,60,0),Hb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return jn(r)+1+jn(n)},Wb=function(e){var r=L(Gb(e),Hb(e)-1),n=r.a,a=r.b;return t(he,$([K(ve),cn]),t(Zv,$([zc(t(Mn,$([K(ve),pe(Se(4)),cn,on(Ov),Zn(2)]),$([t(he,$([K(za(n)),pe(ve),on(Li),Zn(2)]),je),t(he,$([K(za(a-n))]),je)])))]),{el:Nb(""),ct:a,cu:0,bJ:t(We,ye,Vb),cG:j(1),ib:Kv($([K(Se(12)),pe(Se(12)),Zn(6),on(Li)])),cJ:n}))},Ub=yi(2),Mi=b(Rr,220,220,220),Ob=function(e){var r=e.a,n=function(){return r.$?$([Pn(Mi)]):$([Pn(Li)])}();return t(he,G(n,$([Xn(14),Ub,Uv,kc($([Tc]))])),kn(t($$,3,Gn(e).b8)))},qb=function(e){e.a;var r=e.b.X;return t(Fe,function(n){return ye(60/(Gn(e).b8-n))},t(Fe,t(We,Ou,function(n){return n.b8}),Nv(t(n$,59,r))))},Jb=function(e){var r=qb(e);if(r.$===1)return je;var n=r.a;return t(he,$([Xn(14),Pn(dc),kc($([Tc]))]),kn(T(n)+" FPS"))},rf={$:1},Yb={$:3},Xb={$:2},Qb={$:8},Zb=Qr,Kb=v(function(e,r){return t(wo,e,Zb(r))}),e1=Kb("disabled"),r1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},n1=function(e){return t(tt,r1,e)?Hn:mr("focusable")},Pi=t(ut,Me,Dv),nf=v(function(e,r){var n=r.eV,a=r.el;return P(cr,sr,Wn,t(z,K(lr),t(z,pe(lr),t(z,mr(p.ce+(" "+(p.ax+(" "+(p.hG+(" "+p.eT)))))),t(z,Qn,t(z,n1(e),t(z,wi(Qb),t(z,Me(Fv(0)),function(){if(n.$===1)return t(z,Me(e1(!0)),e);var i=n.a;return t(z,Pi(i),t(z,Rv(function(o){return le(o,zv)||le(o,Av)?j(i):E}),e))}()))))))),Je($([a])))}),af=v(function(e,r){return t(nf,D,{el:t(he,$([K(Se(36)),Yn(3),Pn(r),Ev,Xn(12),pc,Cn(r),Si(1),Zn(4)]),kn("REC")),eV:j(e)})}),tf=k(function(e,r,n){return t(nf,D,{el:bn(b(La,20,n,e)),eV:j(r)})}),a1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Mn,D,$([t(he,$([K(Se(40))]),function(){switch(r.$){case 0:return t(af,rf,Li);case 1:return t(af,Xb,Mi);default:return je}}()),t(he,$([K(Se(28))]),function(){switch(r.$){case 0:return je;case 1:return wn(n)?je:b(tf,Jn.hq,Yb,Mi);default:return b(tf,Jn.hp,rf,Mi)}}())]))},t1=function(e){return t(xr,$([K(ve)]),$([Wb(e),t(Mn,$([K(ve),Ln(14),t(Cv,0,6),cn]),$([a1(e),Jb(e),Ob(e)]))]))},i1=function(e){return t(xr,$([K(ve),Ln(14),Bb({b5:20,g4:0,hx:0,cI:0}),wt({b5:1,g4:0,hx:0,cI:0}),Cn(bi)]),$([t(he,$([Xn(16),pc,Pn(dc)]),kn("Time Travel")),t(mc,Ib,t1(e))]))},o1=v(function(e,r){return t(xr,$([Gn(r).bN.$9>600?on(Kh):on(e3),wt({b5:0,g4:0,hx:1,cI:0}),Cn(bi),K(Se(Ma.c1)),pe(ve)]),$([function(){return e?je:t(xr,$([K(ve),pe(ve),Yn(14),Ln(14)]),$([i1(r),Fb(r)]))}()]))}),c1=function(e){return{$:3,a:e}},of=gi(2),l1=b(Rr,232,78,50),u1=b(Rr,48,48,48),$1=function(e){return t(yr,"href",Fd(e))},v1=zr("rel"),f1=yr("target"),cf=v(function(e,r){var n=r.fo,a=r.el;return P(cr,sr,xn("a"),t(z,Me($1(n)),t(z,Me(v1("noopener noreferrer")),t(z,Me(f1("_blank")),t(z,K(lr),t(z,pe(lr),t(z,mr(p.ce+(" "+(p.ax+(" "+p.es)))),e)))))),Je($([a])))}),St=yr("title"),m1=b(Rr,31,161,242),s1=function(e){var r=k(function(o,c,l){var u=le(c,e)?Dc:u1;return t(he,$([nn(St(o)),Pi(c1(c)),Qn,Yn(7)]),bn(b(La,40,u,l)))}),n=t(xr,$([sv]),$([b(r,"Configurations",0,Jn.hM)])),a=t(xr,D,$([t(cf,$([nn(St("Twitter")),of,Qn,Yn(7)]),{el:bn(b(La,40,m1,Jn.ig)),fo:"https://twitter.com/AzizErkalSelman"}),t(cf,$([nn(St("Source Code")),of,Qn,Yn(7)]),{el:bn(b(La,40,l1,Jn.gD)),fo:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([K(Se(Ma.bF)),Yn(4),Pi(mv),wt({b5:1,g4:0,hx:0,cI:0}),Cn(bi),Qn,nn(St("Activate Distraction Free Mode"))]),bn(b(La,46,Dc,Jn.fy)));return t(xr,$([K(Se(Ma.bF)),pe(ve),Sv,on(dv)]),$([i,n,a]))},d1=function(e){var r=t(he,$([K(Se(Ma.bF)),sv,Yn(4),Pi(mv),Qn,nn(St("Deactivate Distraction Free Mode (A)"))]),bn(b(La,46,dv,Jn.fy)));return e.bx?r:t(Mn,$([K(Se(Ma.bF+Ma.c1)),pe(ve)]),$([s1(e.bq),t(o1,e.bq,e.R)]))},p1=k(function(e,r,n){var a=S0(n.R),i=Gn(n.R);return b(Bh,{hm:$([L0({fQ:E,fY:E,hH:E})])},$([K(Se(Za(i.bN.$9))),pe(Se(Za(i.bN.gL))),nn(t(pr,"-webkit-font-smoothing","antialiased")),nn(t(pr,"pointer-events","none")),nn(t(pr,"touch-action","none")),nn(t(pr,"user-select","none")),Yo(t(mc,w0,t(r,i,a))),Yo(d1(n))]),bn(t(Vh,li(x0),t(e,i,a))))}),g1=vr(function(e,r,n,a,i,o){var c=v(function(u,m){return L(P(p0,r,o,u,m),d$)}),l=function(u){var m=t(Ju,n,u.g0);return L({bq:0,bx:!0,R:t(g0,m,a),dK:0},d$)};return Ig({gW:l,hW:y0,ii:c,ik:t(p1,e,i)})}),h1=H(function(e,r,n,a){return Xe(g1,e,r,n,a,v(function(i,o){return je}),k(function(i,o,c){return c}))}),b1=function(e){return b(Ae,ec,Zo,e)},_1=b1($([L(-3,-3),L(-3,1),L(-3,2),L(-3,3),L(-2,-2),L(-2,0),L(-2,3),L(-2,4),L(-1,-5),L(-1,-4),L(-1,-3),L(-1,-2),L(-1,0),L(-1,3),L(-1,4),L(0,-4),L(0,-3),L(0,-2),L(0,-1),L(0,0),L(0,1),L(0,2),L(0,3),L(0,4),L(1,-5),L(1,-4),L(1,-3),L(1,-2),L(1,0),L(1,3),L(1,4),L(2,-2),L(2,0),L(2,3),L(2,4),L(3,-3),L(3,1),L(3,2),L(3,3)])),y1=function(e){return{aP:_1}},un=function(e){return e},ka=function(e){return un(ln*(e/180))},Tn=Ls,w1=v(function(e,r){var n=e,a=r,i=a.dR-n.dR,o=a.it-n.it,c=a.ip-n.ip,l=t(qe,ue(c),t(qe,ue(o),ue(i)));if(l){var u=i/l,m=o/l,s=c/l,d=Tn(s*s+m*m+u*u);return j({ip:s/d,it:m/d,dR:u/d})}else return E}),zi=function(e){return e},Rc=v(function(e,r){var n=e,a=r;return{ip:a.it*n.dR-a.dR*n.it,it:a.dR*n.ip-a.ip*n.dR,dR:a.ip*n.it-a.it*n.ip}}),Ct=function(e){var r=e,n=t(qe,ue(r.ip),t(qe,ue(r.it),ue(r.dR)));if(n){var a=r.dR/n,i=r.it/n,o=r.ip/n,c=Tn(o*o+i*i+a*a);return j({ip:o/c,it:i/c,dR:a/c})}else return E},ki=v(function(e,r){var n=e,a=r;return{ip:a.ip-n.ip,it:a.it-n.it,dR:a.dR-n.dR}}),x1=v(function(e,r){var n=e,a=r;return a.ip*n.ip+a.it*n.it+a.dR*n.dR}),lf=v(function(e,r){var n=e,a=r;return ce(a,n)>0}),S1=v(function(e,r){var n=e,a=r;return ce(a,n)<0}),C1=v(function(e,r){var n=e,a=r;return{ip:a.ip-n.ip,it:a.it-n.it,dR:a.dR-n.dR}}),L1=v(function(e,r){var n=e,a=r,i=a.ip*n.ip+a.it*n.it+a.dR*n.dR;return{ip:n.ip*i,it:n.it*i,dR:n.dR*i}}),M1=function(e){var r=e;return{ip:-r.ip,it:-r.it,dR:-r.dR}},Ar=0,uf={ip:0,it:0,dR:0},P1=k(function(e,r,n){return t(Lc,function(a){var i=t(C1,t(L1,a,r),r);return t(Lc,function(o){var c=t(Rc,r,e),l=t(x1,n,c),u=t(lf,Ar,l)?c:t(S1,Ar,l)?M1(c):uf;return t(Fe,function(m){return I(a,o,m)},Ct(u))},Ct(i))},Ct(e))}),z1=function(e){var r=e,n=ue(r.dR),a=ue(r.it),i=ue(r.ip);if(ce(i,a)<1)if(ce(i,n)<1){var o=Tn(r.dR*r.dR+r.it*r.it);return{ip:0,it:-r.dR/o,dR:r.it/o}}else{var o=Tn(r.it*r.it+r.ip*r.ip);return{ip:-r.it/o,it:r.ip/o,dR:0}}else if(ce(a,n)<1){var o=Tn(r.dR*r.dR+r.ip*r.ip);return{ip:r.dR/o,it:0,dR:-r.ip/o}}else{var o=Tn(r.ip*r.ip+r.it*r.it);return{ip:-r.it/o,it:r.ip/o,dR:0}}},Ac=function(e){var r=z1(e),n=r,a=n,i=e,o=i,c={ip:o.it*a.dR-o.dR*a.it,it:o.dR*a.ip-o.ip*a.dR,dR:o.ip*a.it-o.it*a.ip};return L(r,c)},Ta=function(e){var r=e;return r},$n=function(e){return e},k1=v(function(e,r){var n=Ac(e),a=n.a,i=n.b;return $n({dj:r,dP:a,dQ:i,dS:e})}),T1=function(e){var r=t(ki,e.bb,e.d5),n=Ta(e.fn),a=t(Rc,r,n),i=b(P1,r,n,a);if(i.$){var m=Ct(r);if(m.$){var d=Ac(e.fn),g=d.a,f=d.b;return $n({dj:e.d5,dP:f,dQ:e.fn,dS:g})}else{var s=m.a;return t(k1,s,e.d5)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return $n({dj:e.d5,dP:u,dQ:l,dS:c})}},Dn={ip:0,it:0,dR:0},D1=function(e){return{$:0,a:e}},Ke=function(e){var r=e;return ue(r)},Ti=function(e){var r=e;return .5*r},R1=_s,A1=function(e){var r=e;return R1(r)},F1=function(e){var r=Ti(Ke(e.fr)),n=A1(r);return{du:D1(n),dJ:e.dJ}},vn=function(e){return e},Fc=vn({ip:0,it:1,dR:0}),I1=function(e){var r=e.bb,n=e.d5,a=e.fn;return F1({fr:ka(40),dJ:T1({d5:zi(n),bb:zi(r),fn:t(Le,Fc,t(w1,Dn,zi(a)))})})},Kn=hs,E1=v(function(e,r){return(r-Uu(r/e)*e)/e}),B1=function(e){return 2*ln*e},Ic=H(function(e,r,n,a){return e+(r-e)*(1+Kn(B1(t(E1,n,a))))/2}),Ec=function(e){return I1({d5:{ip:1+P(Ic,-5,5,7,e.b8),it:1,dR:20},bb:{ip:0,it:0,dR:0},fn:{ip:0,it:1,dR:0}})},Ur=function(e){return e},V1=k(function(e,r,n){return{ip:e,it:r,dR:n}}),Di=function(e){return e},Ri=function(e){var r=e;return r},j1=v(function(e,r){var n=e,a=r;return a.ip*n.ip+a.it*n.it+a.dR*n.dR}),$f=function(e){var r=e;return r.gp},De=v(function(e,r){var n=r;return e*n}),vf=function(e){var r=e;return r.dj},N1=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=n.hf,l=c;return(a.ip-o.ip)*l.ip+(a.it-o.it)*l.it+(a.dR-o.dR)*l.dR}),G1=k(function(e,r,n){var a=e,i=r,o=n;return{ip:o.ip+i*a.ip,it:o.it+i*a.it,dR:o.dR+i*a.dR}}),H1=v(function(e,r){var n=$f(r),a=e,i=a.hf,o=t(j1,i,n);if(o){var c=vf(r),l=t(N1,e,c),u=t(De,-1/o,l);return j(b(G1,n,u,c))}else return E}),W1=v(function(e,r){return{ip:e,it:r}}),ff=v(function(e,r){var n=e,a=r;return n*a}),U1=function(e){var r=e;return r},mf=function(e){var r=e;return U1(r.fP)},O1=function(e){var r=e;return r.a5},sf=v(function(e,r){var n=r;return n/e}),Da=function(e){var r=e;return r.dj},Bc=function(e){var r=e;return Da(r)},Vc=function(e){var r=e;return-r},jc=vn({ip:0,it:0,dR:-1}),q1=v(function(e,r){var n=e,a=r;return a/n}),J1=v(function(e,r){var n=e,a=r,i=n.dS,o=i,c=n.dQ,l=c,u=n.dP,m=u;return{ip:m.ip*a.ip+l.ip*a.it+o.ip*a.dR,it:m.it*a.ip+l.it*a.it+o.it*a.dR,dR:m.dR*a.ip+l.dR*a.it+o.dR*a.dR}}),ea=v(function(e,r){return{gp:r,dj:e}}),Ai=function(e){var r=e;return{ip:-r.ip,it:-r.it,dR:-r.dR}},ra=function(e){var r=e;return r.dS},Nc=function(e){var r=e;return Ai(ra(r))},Y1=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=n.dP,l=c;return(a.ip-o.ip)*l.ip+(a.it-o.it)*l.it}),Gc=k(function(e,r,n){var a=e,i=r,o=n;return{ip:a,it:i,dR:o}}),X1=H(function(e,r,n,a){var i=e,o=r,c=n,l=a,u=i.dj,m=u,s=i.dS,d=s,g=i.dQ,f=g,_=i.dP,y=_;return{ip:m.ip+o*y.ip+c*f.ip+l*d.ip,it:m.it+o*y.it+c*f.it+l*d.it,dR:m.dR+o*y.dR+c*f.dR+l*d.dR}}),Q1=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=n.dQ,l=c;return(a.ip-o.ip)*l.ip+(a.it-o.it)*l.it}),Z1=k(function(e,r,n){var a=e,i=t(Q1,mf(r),n),o=t(Y1,mf(r),n),c=a.dJ,l=c,u=O1(r);u.a;var m=u.b,s=a.du;if(s.$){var _=s.a,y=t(q1,m,_),x=P(X1,l,t(ff,y,o),t(ff,y,i),Ar);return t(ea,x,Nc(a.dJ))}else{var d=s.a,g=Vc(t(sf,d,t(De,.5,m))),f=t(J1,l,t(Le,jc,Ct(b(Gc,o,i,g))));return t(ea,Bc(a.dJ),f)}}),Ra=bs,Hc=function(e){var r=e;return{ip:Kn(r),it:Ra(r)}},K1=function(e){var r=e;return{ip:-r.it,it:r.ip}},e_=function(e){return e},r_=v(function(e,r){return e_({dj:r,dP:e,dQ:K1(e)})}),n_=v(function(e,r){return t(r_,Hc(e),r)}),a_=k(function(e,r,n){var a=e.a,i=e.b;return{fP:t(n_,r,n),a5:L(Ke(a),Ke(i))}}),Rn=function(e){var r=e;return r.ip},t_=v(function(e,r){var n=e,a=r;return{ip:n,it:a}}),An=function(e){var r=e;return r.it},Fn=function(e){var r=e;return r.dR},i_=H(function(e,r,n,a){var i=n.ip,o=n.it,c=function(m){return b(V1,Ri(Rn(m)),Ri(An(m)),Ri(Fn(m)))},l=b(a_,L(Di(r.$9),Di(r.gL)),ka(0),t(W1,0,0)),u=t(t_,Di(i),Di(o));return t(Fe,c,t(H1,a,b(Z1,e,l,u)))}),Aa=v(function(e,r){var n=e,a=r;return{ip:a.ip+n.ip,it:a.it+n.it,dR:a.dR+n.dR}}),o_=v(function(e,r){return{hf:e,dj:r}}),c_=v(function(e,r){var n=r;return t(o_,n.hf,t(Aa,e,n.dj))}),l_=v(function(e,r){return{hf:r,dj:e}}),Wc=vn({ip:0,it:0,dR:1}),Uc=Wc,u_=t(l_,Dn,Uc),$_=H(function(e,r,n,a){return P(i_,r,n,a,t(c_,b(Gc,Ur(0),Ur(0),Ur(e)),u_))}),df=$_(0),v_=v(function(e,r){var n=b(df,Ec(e),e.bN,e.bL);if(n.$)return r;var a=n.a;return Ce(r,{aP:t(ec,L(ye(a.ip),ye(a.it)),r.aP)})}),f_=v(function(e,r){var n=r;return t(s$,e,n)}),m_=v(function(e,r){var n=b(df,Ec(e),e.bN,e.bL);if(n.$)return r;var a=n.a;return Ce(r,{aP:t(f_,L(ye(a.ip),ye(a.it)),r.aP)})}),s_=v(function(e,r){return e.ek.fc&&e.bL.c_?t(m_,e,r):e.bL.c_?t(v_,e,r):r}),Oc=function(e){return e},pf=k(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),d_=function(e){var r=e;return r},p_=function(e){var r=b(pf,1667,25e3,d_(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Oc({ip:n,it:a})},qc=v(function(e,r){return{$:0,a:e,b:r}}),Jc=v(function(e,r){var n=e,a=r;return ce(a,n)>-1}),Yc=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),fn=v(function(e,r){var n=e,a=r;return a-n}),g_=vn({ip:-1,it:0,dR:0}),h_=vn({ip:0,it:-1,dR:0}),gf=vn({ip:1,it:0,dR:0}),Ue=k(function(e,r,n){var a=e,i=r,o=n;return{ip:a,it:i,dR:o}}),b_=vr(function(e,r,n,a,i,o){var c=t(Jc,n,o)?Wc:jc,l=t(Jc,r,i)?Fc:h_,u=t(Jc,e,a)?gf:g_,m=I(Ke(t(fn,e,a)),Ke(t(fn,r,i)),Ke(t(fn,n,o))),s=b(Ue,t(Yc,e,a),t(Yc,r,i),t(Yc,n,o)),d=$n({dj:s,dP:u,dQ:l,dS:c});return{fP:d,a5:m}}),__=v(function(e,r){return Xe(b_,Rn(e),An(e),Fn(e),Rn(r),An(r),Fn(r))}),Xc=k(function(e,r,n){return{ip:e,it:r,dR:n}}),y_=v(function(e,r){var n=r/2;return t(qc,e,t(__,b(Xc,-n,-n,-n),b(Xc,n,n,n)))}),Qc=function(e){return{$:5,a:e}},w_=function(e){return Qc(e)},Zc=function(e){return{$:0,a:e}},hf=k(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Kc=function(e){return b(pf,0,1,e<=.04045?e/12.92:t(xt,(e+.055)/1.055,2.4))},Lt=lp,x_=function(e){var r=_c(e),n=r.hu,a=r.gE,i=r.fU;return b(Lt,Kc(n),Kc(a),Kc(i))},S_=function(e){return b(hf,0,Zc(x_(e)),Zc(0))},bf=v(function(e,r){return{$:2,a:e,b:r}}),_f=v(function(e,r){return{$:4,a:e,b:r}}),yf=v(function(e,r){return{$:3,a:e,b:r}}),wf=v(function(e,r){return{$:1,a:e,b:r}}),C_=k(function(e,r,n){return{ip:e,it:r,dR:n}}),L_=function(e){var r=e;return r},el=function(e){var r=e;return L_(r.fP)},rl=function(e){var r=e;return r.a5},na=function(e){var r=e;return r.dP},aa=function(e){var r=e;return r.dQ},M_=v(function(e,r){return $n({dj:t(Aa,e,Da(r)),dP:na(r),dQ:aa(r),dS:ra(r)})}),P_=v(function(e,r){return{fP:t(M_,e,el(r)),a5:rl(r)}}),z_=v(function(e,r){var n=r;return t(ea,t(Aa,e,n.dj),n.gp)}),k_=v(function(e,r){var n=r;return{m:t(z_,e,n.m),g5:n.g5,hs:n.hs}}),nl=function(e){var r=e;return r},T_=function(e){return e},xf=v(function(e,r){var n=nl(r),a=n.a,i=n.b;return T_(L(e(a),e(i)))}),D_=v(function(e,r){return t(xf,Aa(e),r)}),al=function(e){var r=e;return r.f6},tl=function(e){var r=e;return r.hs},Sf=v(function(e,r){return{f6:r,hs:Ke(e)}}),R_=v(function(e,r){return t(Sf,tl(r),t(Aa,e,al(r)))}),Cf=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return I(e(a),e(i),e(o))}),A_=v(function(e,r){return t(Cf,Aa(e),r)}),Fi=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(C_,n,a,i);switch(r.$){case 0:var c=r.a,l=r.b;return t(qc,c,t(P_,o,l));case 1:var c=r.a,u=r.b;return t(wf,c,t(A_,o,u));case 3:var c=r.a,m=r.b;return t(yf,c,t(R_,o,m));case 2:var c=r.a,s=r.b;return t(bf,c,t(k_,o,s));case 4:var c=r.a,d=r.b;return t(_f,c,t(D_,o,d));default:var g=r.a;return Qc(t(J,Fi(I(n,a,i)),g))}}),F_=function(e){return Fi(I(e,0,0))},Lf=function(e){return Fi(I(0,e,0))},I_=function(e){return Fi(I(0,0,e))},Ii=k(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Kn(c),u=Ra(c),m=a.gp,s=m,d=s.ip*u,g=l*d,f=d*d,_=s.it*u,y=l*_,x=d*_,S=_*_,w=1-2*(f+S),C=s.dR*u,F=l*C,q=2*(x-F),Q=2*(x+F),U=d*C,Y=2*(U+y),X=2*(U-y),V=_*C,ne=2*(V-g),fe=2*(V+g),we=C*C,me=1-2*(S+we),se=1-2*(f+we);return{ip:me*o.ip+q*o.it+Y*o.dR,it:Q*o.ip+se*o.it+ne*o.dR,dR:X*o.ip+fe*o.it+w*o.dR}}),Mt=k(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Kn(c),u=Ra(c),m=a.dj,s=m,d=o.ip-s.ip,g=o.it-s.it,f=o.dR-s.dR,_=a.gp,y=_,x=y.ip*u,S=l*x,w=x*x,C=y.it*u,F=l*C,q=x*C,Q=C*C,U=1-2*(w+Q),Y=y.dR*u,X=l*Y,V=2*(q-X),ne=2*(q+X),fe=x*Y,we=2*(fe+F),me=2*(fe-F),se=C*Y,xe=2*(se-S),de=2*(se+S),Re=Y*Y,ke=1-2*(Q+Re),Ye=1-2*(w+Re);return{ip:s.ip+ke*d+V*g+we*f,it:s.it+ne*d+Ye*g+xe*f,dR:s.dR+me*d+de*g+U*f}}),E_=k(function(e,r,n){return $n({dj:b(Mt,e,r,Da(n)),dP:b(Ii,e,r,na(n)),dQ:b(Ii,e,r,aa(n)),dS:b(Ii,e,r,ra(n))})}),B_=k(function(e,r,n){return{fP:b(E_,e,r,el(n)),a5:rl(n)}}),V_=v(function(e,r){var n=t(Mt,e,r),a=t(Ii,e,r);return function(i){var o=i;return t(ea,n(o.dj),a(o.gp))}}),j_=k(function(e,r,n){var a=n;return{m:b(V_,e,r,a.m),g5:a.g5,hs:a.hs}}),N_=k(function(e,r,n){return t(xf,t(Mt,e,r),n)}),G_=k(function(e,r,n){return t(Sf,tl(n),b(Mt,e,r,al(n)))}),H_=k(function(e,r,n){return t(Cf,t(Mt,e,r),n)}),Ei=k(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(qc,a,b(B_,e,r,i));case 1:var a=n.a,o=n.b;return t(wf,a,b(H_,e,r,o));case 3:var a=n.a,c=n.b;return t(yf,a,b(G_,e,r,c));case 2:var a=n.a,l=n.b;return t(bf,a,b(j_,e,r,l));case 4:var a=n.a,u=n.b;return t(_f,a,b(N_,e,r,u));default:var m=n.a;return Qc(t(J,t(Ei,e,r),m))}}),il=gf,W_=t(ea,Dn,il),U_=v(function(e,r){return b(Ei,W_,un(e),r)}),ol=Fc,O_=t(ea,Dn,ol),q_=v(function(e,r){return b(Ei,O_,un(e),r)}),J_=t(ea,Dn,Uc),Y_=v(function(e,r){return b(Ei,J_,un(e),r)}),X_=P(_i,237/255,212/255,0/255,1),Q_=v(function(e,r){var n=function(a){var i=a.a,o=a.b,c=(i+o)*.1,l=P(Ic,-ln,ln,14,e.b8+c);return t(I_,-.5,t(Lf,o,t(F_,i,t(Y_,l,t(U_,l,t(q_,l,t(y_,S_(X_),1)))))))};return t(Lf,P(Ic,-.5,.5,7,e.b8),w_(t(J,n,ig(r.aP))))}),Z_=function(e){return e},K_=function(e){return{$:0,a:e}},e2=K_,r2={$:3},n2=r2,a2=H(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),t2=a2,i2=function(e){return{$:1,a:e}},o2=i2,c2=function(e){return t(zr,"height",T(e))},l2=U$,u2=function(e){return{$:2,a:e}},$2=u2,v2=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return ye(l*1e3)/1e3},c=function(l){return ye(l*1e4)/100};return ba($(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(a)),"%,",ae(o(i)),")"]))},f2=v(function(e,r){switch(r.$){case 0:return t(Xp,e,r);case 1:return t(Qp,e,r);case 2:return t(Zp,e,r);case 3:return t(Kp,e,r);case 4:return t(eg,e,r);default:return t(rg,e,r)}}),m2=v(function(e,r){switch(r.$){case 0:return t(Lp,e,r);case 1:return t(Mp,e,r);case 2:return t(Pp,e,r);case 3:return t(zp,e,r);case 4:return t(kp,e,r);case 5:return t(Tp,e,r);case 6:return t(Dp,e,r);case 7:return t(Rp,e,r);default:return Ap(e)}}),s2=k(function(e,r,n){return b(Yp,e,r,n)}),Mf=function(e){var r=e;return r},Fa=sp,cl=P(Fa,1,1,1,1),Or=k(function(e,r,n){return t(J,function(a){return t(a,r,n)},e)}),d2=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),p2=v(function(e,r){var n=e,a=r.ip,i=r.it;return b(d2,n*a/i,n,n*(1-a-i)/i)}),g2=function(e){var r=e.a,n=e.b,a=e.c;return b(Lt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Bi=v(function(e,r){return g2(t(p2,e,r))}),Pf=v(function(e,r){return{ei:le(e.ei,r.ei),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cE,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cE,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cE,cE:e.cE*r.cE}}),qr=_p,h2=function(e){return qr({et:e.t,eu:e.w,ev:e.z,ew:e.K,ex:e.u,ey:e.x,ez:e.A,eA:e.L,eB:e.v,eC:e.y,eD:e.B,eE:e.M,eF:0,eG:0,eH:0,eI:1})},ll=Be(function(e,r,n,a,i){var o=a.ei?1:-1,c=P(Fa,a.cE,a.cE,a.cE,o);return Xe(i,e,c,h2(a),a.ei,r,n)}),zf=vr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,m=r,s=n,d=t(Pf,c,a),g=l,f=o;e=u,r=m,n=s,a=d,i=g,o=f;continue e;case 1:var _=i.b,y=t(z,R(ll,e,r,n,a,_),o.P);return{P:y,_:o._,hI:o.hI};case 3:var x=i.b,S=t(z,R(ll,e,r,n,a,x),o._);return{P:o.P,_:S,hI:o.hI};case 2:var w=i.a,C=t(z,R(ll,e,r,n,a,w),o.hI);return{P:o.P,_:o._,hI:C};default:var F=i.a;return b(Ae,P(zf,e,r,n,a),o,F)}}),b2=H(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),kf=b2,ul=H(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),_2=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(ul,518,r,n,a)},y2=v(function(e,r){return{$:6,a:e,b:r}}),w2=y2,Tf=$([_2({ab:1,ac:0,ai:!1}),P(kf,!1,!1,!1,!1),t(w2,0,1)]),Ia=519,$l=8,Df=15,Ea=7681,x2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ze=Cp,S2=v(function(e,r){return{$:0,a:e,b:r}}),C2=S2({d1:1,ee:0,eR:5}),gr=op,L2=C2($([{e2:t(gr,-1,-1)},{e2:t(gr,1,-1)},{e2:t(gr,-1,1)},{e2:t(gr,1,1)}])),M2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e2"},uniforms:{}},P2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m,k:s}}}}}}}}}}}},vl=k(function(e,r,n){var a=e.dv,i=e.da,o=e.dO,c=v(function(m,s){var d=m;return s(d)}),l=v(function(m,s){var d=m;return s(d)}),u=function(m){return t(We,c(m.bR),t(We,l(m.bA),t(We,l(m.b_),l(m.b$))))};return t(u,n,t(u,r,b(P2,a,i,o)))}),fl=function(e){return b(vl,{da:e.da,dv:e.dv,dO:e.dO},{bA:e.bA,bR:e.bR,b_:e.b_,b$:e.b$},{bA:e.bA,bR:e.bR,b_:e.b_,b$:e.b$})},ml=function(e){return R(ze,$([fl(e),P(kf,!1,!1,!1,!1)]),M2,x2,L2,{})},z2=ml({bA:Ea,da:0,dv:$l,bR:Ia,dO:Df,b_:Ea,b$:Ea}),k2=516,Rf=5386,er=7680,T2=function(e){return t(xt,2,e+4)},Af=function(e){return ml({bA:er,da:Df,dv:$l,bR:k2,dO:T2(e),b_:Rf,b$:Rf})},D2=k(function(e,r,n){return tr($([b(Or,e,n,Tf),$([Af(r),z2])]))}),R2=v(function(e,r){return tr(t(Vu,D2(e),r))}),A2=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(ul,513,r,n,a)},F2=A2({ab:1,ac:0,ai:!0}),I2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:m}}}}}}}}}}},E2=function(e){var r=e.cB,n=e.ci,a=e.b3,i=e.b0,o=e.ca,c=e.fJ,l=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,y=m.c;return I2(s)(d)(g)(f)(_)(y)(r)(n)(a)(i)});return t(l,o,c)},B2=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ff=v(function(e,r){var n=e,a=r;return b(B2,32774,n,a)}),V2=1,If=771,j2=770,sl=E2({b0:0,fJ:t(Ff,V2,If),b3:0,ca:t(Ff,j2,If),ci:0,cB:0}),Ba=$([F2,sl]),N2=function(e){var r=e;return r.eK},G2=function(e){var r=e;return r.eL},Ef=function(e){var r=e;return r.eM},H2=function(e){var r=e;return r.eN},W2=function(e){var r=e;return r.eO},Bf=function(e){var r=e;return r.eP},Vf=function(e){return I(t(fn,H2(e),N2(e)),t(fn,W2(e),G2(e)),t(fn,Bf(e),Ef(e)))},U2=function(e){return e},O2=function(e){return $n({dj:U2({ip:e.K,it:e.L,dR:e.M}),dP:vn({ip:e.t,it:e.u,dR:e.v}),dQ:vn({ip:e.w,it:e.x,dR:e.y}),dS:vn({ip:e.z,it:e.A,dR:e.B})})},dl=v(function(e,r){var n=e,a=r,i=n.dS,o=i,c=n.dQ,l=c,u=n.dP,m=u;return{ip:a.ip*m.ip+a.it*m.it+a.dR*m.dR,it:a.ip*l.ip+a.it*l.it+a.dR*l.dR,dR:a.ip*o.ip+a.it*o.it+a.dR*o.dR}}),jf=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=a.ip-o.ip,l=a.it-o.it,u=a.dR-o.dR,m=n.dS,s=m,d=n.dQ,g=d,f=n.dP,_=f;return{ip:c*_.ip+l*_.it+u*_.dR,it:c*g.ip+l*g.it+u*g.dR,dR:c*s.ip+l*s.it+u*s.dR}}),Nf=v(function(e,r){return{dj:t(jf,e,Da(r)),dP:t(dl,e,na(r)),dQ:t(dl,e,aa(r)),dS:t(dl,e,ra(r))}}),Vi=function(e){var r=e;return r},Ee=v(function(e,r){var n=e,a=r;return t(qe,n,a)}),Ne=v(function(e,r){var n=e,a=r;return t(wa,n,a)}),q2=v(function(e,r){var n=Vi(r),a=Vi(e);return{eK:t(Ee,a.eK,n.eK),eL:t(Ee,a.eL,n.eL),eM:t(Ee,a.eM,n.eM),eN:t(Ne,a.eN,n.eN),eO:t(Ne,a.eO,n.eO),eP:t(Ne,a.eP,n.eP)}}),Sr=function(e){var r=e;return r},J2=function(e){var r=e;return I(r.ip,r.it,r.dR)},Pt=v(function(e,r){var n=e,a=r;return a+n}),Y2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Ti(Ke(a)),c=Ti(Ke(n)),l=Ti(Ke(i)),u=J2(r),m=u.a,s=u.b,d=u.c;return{eK:t(Pt,c,m),eL:t(Pt,o,s),eM:t(Pt,l,d),eN:t(fn,c,m),eO:t(fn,o,s),eP:t(fn,l,d)}}),Gf=H(function(e,r,n,a){var i=n.f6,o=2*n.gJ*r,c=2*n.gI*r,l=2*n.gH*r,u=i.dR*r,m=i.it*r,s=i.ip*r,d=Sr(ra(e)),g=ue(l*d.ip)+ue(c*d.it)+ue(o*d.dR),f=Sr(aa(e)),_=ue(l*f.ip)+ue(c*f.it)+ue(o*f.dR),y=Sr(na(e)),x=ue(l*y.ip)+ue(c*y.it)+ue(o*y.dR),S=t(Y2,I(x,_,g),t(jf,e,b(Xc,s,m,u)));if(a.$)return j(S);var w=a.a;return j(t(q2,w,S))}),pl=H(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 1:var s=i.a,d=P(Gf,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 2:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,a=m;continue e;case 3:var s=i.a,d=P(Gf,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,a=m;continue e;case 4:var g=i.a,c=e,l=r,u=P(pl,e,r,n,g),m=o;e=c,r=l,n=u,a=m;continue e;default:var f=i.a,_=i.b,y=t(Nf,O2(f),e),x=r*f.cE,c=e,l=r,u=P(pl,y,x,n,$([_])),m=o;e=c,r=l,n=u,a=m;continue e}}else return n}),ta=up,ia=$p,oa=vp,Hf=function(e){return{$:4,a:e}},X2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(z,n,r);e=i,r=o;continue e}else return r}),zt=function(e){return Hf(t(X2,e,D))},Q2={ei:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cE:1},Wf=ml({bA:Ea,da:0,dv:$l,bR:Ia,dO:255,b_:Ea,b$:Ea}),Z2=function(e){var r=e,n=t(qe,ue(r.ip),t(qe,ue(r.it),ue(r.dR)));if(n){var a=r.dR/n,i=r.it/n,o=r.ip/n,c=Tn(o*o+i*i+a*a);return c*n}else return Ar},hr={b3:0,f5:!1,ci:0,ds:0,cB:0,dG:0,ip:0,it:0,dR:0},Cr=v(function(e,r){var n=e,a=r;return qr({et:n.ip,eu:n.cB,ev:a.ip,ew:a.cB,ex:n.it,ey:n.ci,ez:a.it,eA:a.ci,eB:n.dR,eC:n.b3,eD:a.dR,eE:a.b3,eF:n.dG,eG:n.ds,eH:a.dG,eI:a.ds})}),kt=L({bG:t(Cr,hr,hr),cp:t(Cr,hr,hr),cq:t(Cr,hr,hr),cr:t(Cr,hr,hr)},P(Fa,0,0,0,0)),Uf=514,Of=function(e){var r=e.ai,n=e.ac,a=e.ab;return P(ul,515,r,n,a)},qf=240,K2=$([Of({ab:1,ac:0,ai:!0}),fl({bA:er,da:qf,dv:0,bR:Uf,dO:0,b_:er,b$:er}),sl]),ey=v(function(e,r){var n=e,a=r.he,i=r.gz,o=r.fO,c=Ke(a),l=c,u=Ke(i),m=u,s=n.du;if(s.$){var g=s.a;return Ho(m)?qr({et:2/(o*g),eu:0,ev:0,ew:0,ex:0,ey:2/g,ez:0,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:0,eG:0,eH:0,eI:1}):qr({et:2/(o*g),eu:0,ev:0,ew:0,ex:0,ey:2/g,ez:0,eA:0,eB:0,eC:0,eD:-2/(m-l),eE:-(m+l)/(m-l),eF:0,eG:0,eH:0,eI:1})}else{var d=s.a;return Ho(m)?qr({et:1/(o*d),eu:0,ev:0,ew:0,ex:0,ey:1/d,ez:0,eA:0,eB:0,eC:0,eD:-1,eE:-2*l,eF:0,eG:0,eH:-1,eI:0}):qr({et:1/(o*d),eu:0,ev:0,ew:0,ex:0,ey:1/d,ez:0,eA:0,eB:0,eC:0,eD:-(m+l)/(m-l),eE:-2*m*l/(m-l),eF:0,eG:0,eH:-1,eI:0})}}),ji=v(function(e,r){return(1&e>>r)==1?0:1}),ry=function(e){return $([Of({ab:1,ac:0,ai:!0}),fl({bA:er,da:qf,dv:e,bR:Uf,dO:0,b_:er,b$:er}),sl])},ny=k(function(e,r,n){return tr(t(J,function(a){var i=a<<4,o=P(Fa,t(ji,a,0),t(ji,a,1),t(ji,a,2),t(ji,a,3));return b(Or,e,L(r,o),ry(i))},t(rn,1,t(xt,2,n)-1)))}),Va=function(e){var r=e;return r},ay=yp,ty={dj:Dn,dP:il,dQ:ol,dS:Uc},Tt=function(e){var r=e;return r},iy=function(e){var r=Tt(Da(e)),n=Sr(ra(e)),a=Sr(aa(e)),i=Sr(na(e));return qr({et:i.ip,eu:a.ip,ev:n.ip,ew:r.ip,ex:i.it,ey:a.it,ez:n.it,eA:r.it,eB:i.dR,eC:a.dR,eD:n.dR,eE:r.dR,eF:0,eG:0,eH:0,eI:1})},oy=v(function(e,r){var n=r;return iy(t(Nf,n,e))}),cy=function(e){return t(oy,ty,e)},ly=function(e){var r=e;return r.dJ},uy=function(e){var r=e;return na(r)},$y=function(e){var r=e;return aa(r)},vy=function(e){var r=ly(e.f2),n=$n({dj:Bc(r),dP:uy(r),dQ:$y(r),dS:Ai(Nc(r))}),a=zt(e.a9),i=a,o=P(pl,n,1,E,$([i]));if(o.$===1)return D;var c=o.a,l=cy(r),u=t(De,.99,t(Ee,Ke(e.ga),Vc(Ef(c)))),m=Vf(c),s=m.a,d=m.b,g=m.c,f=Z2(b(Gc,s,d,g)),_=t(De,1.01,t(Pt,f,Vc(Bf(c)))),y=t(ey,e.f2,{fO:e.fO,gz:_,he:u}),x=ay(y).eI,S=x?Sr(Ai(Nc(r))):Va(Bc(r)),w=function(){var se=e.id;switch(se.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var xe=se.a;return L(3,xe);case 4:var xe=se.a;return L(4,xe);default:return L(5,0)}}(),C=w.a,F=w.b,q=e.gx,Q=q,U=t(Bi,Q,e.im),Y=U,X=qr({et:0,eu:S.ip,ev:ta(Y),ew:e.fg,ex:0,ey:S.it,ez:ia(Y),eA:Ri(f),eB:0,eC:S.dR,eD:oa(Y),eE:C,eF:0,eG:x,eH:0,eI:F}),V=Xe(zf,X,l,y,Q2,i,{P:D,_:D,hI:D}),ne=e.g7;switch(ne.$){case 0:var fe=ne.a;return tr($([b(Or,V.P,L(fe,cl),Ba),b(Or,V._,kt,Ba)]));case 1:var fe=ne.a;return tr($([b(Or,V.P,kt,Ba),$([Wf]),b(Or,V.hI,fe.bG,Tf),$([Af(0)]),b(Or,V.P,L(fe,cl),K2),b(Or,V._,kt,Ba)]));default:var we=ne.a,me=ne.b;return tr($([b(Or,V.P,L(me,cl),Ba),$([Wf]),t(R2,V.hI,we),b(ny,V.P,me,jn(we)),b(Or,V._,kt,Ba)]))}},fy=function(e){return t(zr,"width",T(e))},my=v(function(e,r){var n=$([o2(1),$2(0),e2(!0),P(t2,0,0,0,0)]),a=function(){var C=e.fL;switch(C.$){case 0:return I(n,"0",1);case 1:return I(t(z,n2,n),"1",1);default:var F=C.a;return I(n,"0",F)}}(),i=a.a,o=a.b,c=a.c,l=e.a5,u=l.a,m=l.b,s=Mf(m),d=t(pr,"height",T(s)+"px"),g=Mf(u),f=g/s,_=t(ha,function(C){return vy({fO:f,f2:e.f2,ga:e.ga,a9:C.a9,gx:C.gx,g7:C.g7,fg:c,id:C.id,im:C.im})},r),y=t(pr,"width",T(g)+"px"),x=e.a2,S=x,w=v2(S);return b(l2,"div",$([t(pr,"padding","0px"),y,d]),$([L(o,b(s2,i,$([fy(ye(g*c)),c2(ye(s*c)),y,d,t(pr,"display","block"),t(pr,"background-color",w)]),_))]))}),sy=function(e){return{$:2,a:e}},dy=function(e){return sy(e)},py=function(e){return t(my,{fL:dy(e.cV),a2:e.a2,f2:e.f2,ga:e.ga,a5:e.a5},$([{a9:e.a9,gx:e.gx,g7:e.g7,id:e.id,im:e.im}]))},Jf=function(e){return e},Yf=H(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),gy=H(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Xf=H(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Qf=H(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),hy=H(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),by=H(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),_y=H(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),gl=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return P(_y,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return P(Yf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return P(gy,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return P(Xf,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return P(by,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return P(Qf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return P(hy,r,i,a,1);case 8:return e;case 9:return e;default:return e}},hl={$:0},yy=be(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var u=l.a,m=l.b,s=Vi(c(u)),d=t(Ne,s.eN,e),g=t(Ee,s.eK,r),f=t(Ne,s.eO,n),_=t(Ee,s.eL,a),y=t(Ne,s.eP,i),x=t(Ee,s.eM,o),S=c,w=m;e=d,r=g,n=f,a=_,i=y,o=x,c=S,l=w;continue e}else return{eK:r,eL:a,eM:o,eN:e,eO:n,eP:i}}),wy=k(function(e,r,n){var a=Vi(e(r));return Ua(yy,a.eN,a.eK,a.eO,a.eL,a.eP,a.eM,e,n)}),bl=v(function(e,r){var n=e,a=r;return ce(a,n)<1}),Zf=function(e){return t(bl,e.eK,e.eN)&&t(bl,e.eL,e.eO)&&t(bl,e.eM,e.eP)?e:{eK:t(Ee,e.eN,e.eK),eL:t(Ee,e.eO,e.eL),eM:t(Ee,e.eP,e.eM),eN:t(Ne,e.eN,e.eK),eO:t(Ne,e.eO,e.eL),eP:t(Ne,e.eP,e.eM)}},Dt=function(e){var r=e;return r},Kf=function(e){var r=Dt(e),n=r.a,a=r.b,i=r.c,o=Rn(n),c=An(n),l=Fn(n),u=Rn(a),m=An(a),s=Fn(a),d=Rn(i),g=An(i),f=Fn(i);return Zf({eK:t(Ee,o,t(Ee,u,d)),eL:t(Ee,c,t(Ee,m,g)),eM:t(Ee,l,t(Ee,s,f)),eN:t(Ne,o,t(Ne,u,d)),eO:t(Ne,c,t(Ne,m,g)),eP:t(Ne,l,t(Ne,s,f))})},em=fp,ur=function(e){return em(Tt(e))},rm=function(e){var r=e;return r},Ni=function(e){return em(rm(e))},nm=function(e){return e},xy=v(function(e,r){var n=e,a=r,i=t(qe,ue(a.ip),t(qe,ue(a.it),ue(a.dR)));if(i){var o=a.dR/i,c=a.it/i,l=a.ip/i,u=Tn(l*l+c*c+o*o);return{ip:n*l/u,it:n*c/u,dR:n*o/u}}else return uf}),Sy=xy(nm(1)),am=k(function(e,r,n){var a=t(ki,r,n),i=t(ki,e,r);return Sy(t(Rc,a,i))}),Cy=function(e){var r=Dt(e),n=r.a,a=r.b,i=r.c,o=Ni(b(am,n,a,i));return I({q:o,e2:ur(n)},{q:o,e2:ur(a)},{q:o,e2:ur(i)})},Ly=v(function(e,r){return{$:2,a:e,b:r}}),tm=Ly({d1:3,ee:0,eR:4}),My=function(e){if(e.b){var r=e.a,n=e.b,a=tm(t(J,Cy,e)),i=b(wy,Kf,r,n);return P(Yf,i,e,a,0)}else return hl},Lr=k(function(e,r,n){return I(e,r,n)}),im=function(){var e=Ur(1),r=Ur(1),n=Ur(1),a=t(De,-.5,e),i=t(De,-.5,r),o=t(De,-.5,n),c=b(Ue,o,i,a),l=t(De,.5,e),u=b(Ue,o,i,l),m=t(De,.5,r),s=b(Ue,o,m,a),d=b(Ue,o,m,l),g=t(De,.5,n),f=b(Ue,g,i,a),_=b(Ue,g,m,a),y=b(Ue,g,i,l),x=b(Ue,g,m,l);return gl(My($([b(Lr,c,_,f),b(Lr,c,s,_),b(Lr,u,y,x),b(Lr,u,x,d),b(Lr,f,_,x),b(Lr,f,x,y),b(Lr,c,d,s),b(Lr,c,u,d),b(Lr,c,f,y),b(Lr,c,y,u),b(Lr,s,x,_),b(Lr,s,d,x)])))}(),Gi={$:0},Py=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zy=k(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(a),m=Ni(b(am,u,l,c)),s={q:m,e2:ur(u)},d={q:m,e2:ur(l)},g={q:m,e2:ur(c)};return t(z,s,t(z,d,t(z,g,n)))}),_l=function(e){var r=e;return r.H},ky=H(function(e,r,n,a){if(r.$===1)return E;var i=r.a;if(n.$===1)return E;var o=n.a;if(a.$===1)return E;var c=a.a;return j(b(e,i,o,c))}),yl=4294967295>>>32-et,wl=us,Ty=k(function(e,r,n){e:for(;;){var a=yl&r>>>e,i=t(wl,a,n);if(i.$){var m=i.a;return t(wl,yl&r,m)}else{var o=i.a,c=e-et,l=r,u=o;e=c,r=l,n=u;continue e}}}),Dy=function(e){return e>>>5<<5},Ry=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?E:ce(e,Dy(n))>-1?j(t(wl,yl&e,o)):j(b(Ty,a,e,i))}),xl=function(e){var r=e;return r.au},Sl=v(function(e,r){return t(Ry,e,xl(r))}),Ay=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return P(ky,k(function(c,l,u){return I(c,l,u)}),t(Sl,a,e),t(Sl,i,e),t(Sl,o,e))};return t(On,r,_l(e))},Fy=k(function(e,r,n){e:for(;;){var a=t(Eo,fr,e),i=a.a,o=a.b;if(ce(Io(i),fr)<0)return t(qu,!0,{C:r,n,r:i});var c=o,l=t(z,Wu(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Cl=function(e){return e.b?b(Fy,e,D,0):Gu},Iy=v(function(e,r){return!t(tt,t(ut,Eg,e),r)}),Ey=function(e){var r=e.a;return r},om=v(function(e,r){var n=Ey(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ce(o,n)<0&&c>=0&&ce(c,n)<0&&l>=0&&ce(l,n)<0};return t(Iy,a,r)?{H:r,au:e}:{H:t(E$,a,r),au:e}}),By=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rt=By({d1:1,ee:3,eR:4}),Hi=v(function(e,r){var n=Va(r),a=Va(e);return L(I(a.ip,a.it,a.dR),I(n.ip,n.it,n.dR))}),cm=b(Lt,0,0,0),Ll=vr(function(e,r,n,a,i,o){var c=o.a,l=o.b,u=o.c,m=t(Oo,t(Hi,e,r),i);if(m.$){var d={q:cm,e2:ur(r)},g={q:cm,e2:ur(e)},f=u+1,_=u;return I(t(z,I(n,_,f),t(z,I(n,f,a),c)),t(z,d,t(z,g,l)),u+2)}else{var s=m.a;return I(t(z,I(n,s,a),c),l,u)}}),Vy=Be(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,m=n.b,s=e(u),d=e(l),g=e(c),f=a+2,_=a+1,y=a,x=e,S=r,w=m,C=a+3,F=Xe(Ll,s,g,f,y,r,Xe(Ll,d,s,_,f,r,Xe(Ll,g,d,y,_,r,i)));e=x,r=S,n=w,a=C,i=F;continue e}else{var q=i,Q=q.a,U=q.b;return L(Q,nr(U))}}),jy=Be(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,m=r.b,s=e(u),d=e(l),g=e(c),f=n+2,_=n+1,y=n,x=b(ot,t(Hi,g,s),f,b(ot,t(Hi,s,d),_,b(ot,t(Hi,d,g),y,i))),S=t(z,I(y,_,f),a),w=e,C=m,F=n+3,q=S,Q=x;e=w,r=C,n=F,a=q,i=Q;continue e}else return I(a,i,n)}),ca=k(function(e,r,n){var a=Ay(n),i=b(He,zy(r),D,a),o=R(jy,r,a,0,D,M$),c=o.a,l=o.b,u=o.c,m=R(Vy,r,l,a,0,I(c,D,u)),s=m.a,d=m.b,g=wn(d)?i:G(i,d);return b(Py,e,t(om,Cl(g),s),t(Rt,g,s))}),Ml=function(e){return{H:t(J,function(r){return I(3*r,3*r+1,3*r+2)},t(rn,0,jn(e)-1)),au:Cl(tr(t(J,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},lm=function(e){switch(e.$){case 0:return Gi;case 1:var r=e.a,n=e.b,a=t(J,Dt,n);return b(ca,r,Dr,Ml(a));case 2:var r=e.a,n=e.b,a=t(J,Dt,n);return b(ca,r,Dr,Ml(a));case 3:var r=e.a,i=e.b;return b(ca,r,Dr,i);case 4:var r=e.a,i=e.b;return b(ca,r,function(o){return o.e2},i);case 5:var r=e.a,i=e.b;return b(ca,r,function(o){return o.e2},i);case 6:var r=e.a,i=e.b;return b(ca,r,function(o){return o.e2},i);case 7:var r=e.a,i=e.b;return b(ca,r,function(o){return o.e2},i);case 8:return Gi;case 9:return Gi;default:return Gi}},um=lm(im),$m={$:0},B=$m,Oe=v(function(e,r){return{$:1,a:e,b:r}}),Ny={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"cb"}},Gy=1029,Hy=function(e){return{$:5,a:e}},vm=function(e){var r=e;return Hy(r)},Wy=vm(Gy),Uy=1028,Oy=vm(Uy),$r=k(function(e,r,n){return r===1?e?t(z,Wy,n):t(z,Oy,n):n}),fm={src:`
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
    `,attributes:{position:"e2",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Pl=H(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){return R(ze,b($r,l,a,d),fm,Ny,n,{cb:e,c,d:o,e:m,f:i,g:u})}))}),zl={src:`
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
    `,attributes:{position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},mn=H(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){return R(ze,b($r,l,a,d),mm,zl,n,{aO:e,c,d:o,e:m,f:i,g:u})}))}),sm=v(function(e,r){return{$:3,a:e,b:r}}),qy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cz",sceneProperties:"f"}},dm={src:`
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
    `,attributes:{position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cz",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Jy=H(function(e,r,n,a){return t(sm,n,be(function(i,o,c,l,u,m,s,d){return R(ze,d,dm,qy,a,{aO:e,c,d:o,cz:r,e:m,f:i,g:u})}))}),kl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",sceneProperties:"f"}},At=function(e){var r=e;return r},Wi=mp,sn=Be(function(e,r,n,a,i){return t(Oe,n,be(function(o,c,l,u,m,s,d,g){return R(ze,b($r,u,i,g),mm,kl,a,{a7:t(Wi,At(r),e),c:l,d:c,e:s,f:o,g:m})}))}),Yy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",pointRadius:"cz",sceneProperties:"f"}},Xy=Be(function(e,r,n,a,i){return t(sm,a,be(function(o,c,l,u,m,s,d,g){return R(ze,g,dm,Yy,i,{a7:t(Wi,At(r),e),c:l,d:c,cz:n,e:s,f:o,g:m})}))}),pm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",materialColor:"db",sceneProperties:"f",viewMatrix:"g"}},gm={src:`
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
    `,attributes:{normal:"q",position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ui=H(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return R(ze,b($r,l,a,d),gm,pm,n,{U:f,bG:g.bG,cp:g.cp,cq:g.cq,cr:g.cr,db:e,c,d:o,e:m,f:i,g:u})}))}),hm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",materialColorTexture:"dc",normalMapTexture:"bh",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},bm={src:`
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
    `,attributes:{normal:"q",position:"e2",tangent:"fi",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Qy=vr(function(e,r,n,a,i,o){return t(Oe,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,y=g.b;return R(ze,b($r,m,o,f),bm,hm,i,{U:y,bG:_.bG,cp:_.cp,cq:_.cq,cr:_.cr,dc:e,c:u,d:l,bh:r,e:d,f:c,bn:n,g:s})}))}),_m={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cR",constantBaseColor:"cS",constantMetallic:"cT",constantRoughness:"cU",enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",metallicTexture:"df",normalMapTexture:"bh",roughnessTexture:"dz",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},Zy=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return t(Oe,u,be(function(d,g,f,_,y,x,S,w){var C=S.a,F=S.b;return R(ze,b($r,_,s,w),bm,_m,m,{cR:e,cS:r,cT:o,cU:a,U:F,bG:C.bG,cp:C.cp,cq:C.cq,cr:C.cr,df:i,c:f,d:g,bh:c,e:x,dz:n,f:d,bn:l,g:y})}))}}}}}}}}}}},ym={src:`
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
    `,attributes:{},uniforms:{baseColor:"cQ",enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",metallic:"de",roughness:"dy",sceneProperties:"f",viewMatrix:"g"}},Oi=vr(function(e,r,n,a,i,o){return t(Oe,a,be(function(c,l,u,m,s,d,g,f){var _=g.a,y=g.b;return R(ze,b($r,m,o,f),gm,ym,i,{cQ:e,U:y,bG:_.bG,cp:_.cp,cq:_.cq,cr:_.cr,de:n,c:u,d:l,e:d,dy:r,f:c,g:s})}))}),Ky=function(e){return{$:0,a:e}},wm=v(function(e,r){return{$:1,a:e,b:r}}),Ft=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),ew=function(e){return P(Fa,ta(e),ia(e),oa(e),1)},Tl=P(Fa,0,0,0,0),qi=v(function(e,r){if(r.$){var a=r.a.E;return L(a,Tl)}else{var n=r.a;return L(e,ew(n))}}),xm=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return t(wm,L(i,Tl),t(Ft,i,r))}else if(n.b.$){var i=n.b.a.E;return t(wm,t(qi,i,e),t(Ft,i,r))}else{var a=n.a.a;return n.b.a,Ky(a)}}),rw=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ji=H(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),nw=H(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),aw=function(e){return t(gr,e,1)},Dl=t(gr,0,0),ja=v(function(e,r){if(r.$){var a=r.a.E;return L(a,Dl)}else{var n=r.a;return L(e,aw(n))}}),Sm=H(function(e,r,n,a){var i=P(nw,e,r,n,a);if(i.a.$){var u=i.a.a.E;return P(Ji,L(u,Tl),t(ja,u,r),t(ja,u,n),t(Ft,u,a))}else if(i.b.$){var u=i.b.a.E;return P(Ji,t(qi,u,e),L(u,Dl),t(ja,u,n),t(Ft,u,a))}else if(i.c.$){var u=i.c.a.E;return P(Ji,t(qi,u,e),t(ja,u,r),L(u,Dl),t(Ft,u,a))}else if(i.d.$){var u=i.d.a.E;return P(Ji,t(qi,u,e),t(ja,u,r),t(ja,u,n),L(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(rw,o,c,l)}}),tw={src:`
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
    `,attributes:{},uniforms:{backlight:"cO",colorTexture:"cb",sceneProperties:"f"}},Rl=Be(function(e,r,n,a,i){return t(Oe,n,be(function(o,c,l,u,m,s,d,g){return R(ze,b($r,u,i,g),fm,tw,a,{cO:At(r),cb:e,c:l,d:c,e:s,f:o,g:m})}))}),Cm={src:`
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
    `,attributes:{normal:"q",position:"e2",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},iw=H(function(e,r,n,a){return t(Oe,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return R(ze,b($r,l,a,d),Cm,hm,n,{U:f,bG:g.bG,cp:g.cp,cq:g.cq,cr:g.cr,dc:e,c,d:o,bh:e,e:m,f:i,bn:0,g:u})}))}),ow=uo(function(e,r,n,a,i,o,c,l,u){return t(Oe,c,be(function(m,s,d,g,f,_,y,x){var S=y.a,w=y.b;return R(ze,b($r,g,u,x),Cm,_m,l,{cR:e,cS:r,cT:o,cU:a,U:w,bG:S.bG,cp:S.cp,cq:S.cq,cr:S.cr,df:i,c:d,d:s,bh:e,e:_,dz:n,f:m,bn:0,g:f})}))}),It=k(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),cw=function(e){var r=e;return b(It,r.eN,r.eK,.5)},lw=function(e){var r=e;return b(It,r.eO,r.eL,.5)},uw=function(e){var r=e;return b(It,r.eP,r.eM,.5)},$w=function(e){return b(Ue,cw(e),lw(e),uw(e))},ie=function(e){var r=Vf(e),n=r.a,a=r.b,i=r.c;return{f6:Tt($w(e)),gH:n/2,gI:a/2,gJ:i/2}},Al=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return P(Pl,l,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(Pl,l,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(Pl,l,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var n=e.b.a;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return P(mn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return P(mn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return P(mn,n,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return P(Jy,n,c,ie(a),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,m=e.c;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return R(Rl,l,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return R(Rl,l,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return R(Rl,l,m,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return R(sn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return R(sn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return R(sn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return R(sn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return R(sn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return R(sn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return R(sn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return R(sn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return R(sn,u,m,ie(a),i,0);default:var a=r.a,c=r.b,i=r.d;return R(Xy,u,m,c,ie(a),i)}}case 2:e.a;var s=e.b,d=e.c,g=t(xm,s,d);if(g.$){var y=g.a,x=y.a;y.b;var S=g.b,w=S.a,C=S.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return P(iw,x,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Xe(Qy,x,w,C,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}else{var f=g.a;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,_=r.d;return P(Ui,f,ie(a),i,_);case 3:return B;case 4:var a=r.a,i=r.c,_=r.d;return P(Ui,f,ie(a),i,_);case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return P(Ui,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return P(Ui,f,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}default:e.a;var F=e.b,q=e.c,Q=e.d,d=e.e,U=P(Sm,F,q,Q,d);if(U.$){var ne=U.a,fe=ne.a,we=ne.b,me=U.b,se=me.a,xe=me.b,de=U.c,Re=de.a,ke=de.b,Ye=U.d,w=Ye.a,C=Ye.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return ts(ow,fe,we,se,xe,Re,ke,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Zy(fe)(we)(se)(xe)(Re)(ke)(w)(C)(ie(a))(i)(o);case 8:return B;case 9:return B;default:return B}}else{var Y=U.a,X=U.b,V=U.c;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 3:return B;case 4:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Xe(Oi,Y,X,V,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}}}),Fl=function(e){var r=e;return r.ip},Il=function(e){var r=e;return r.it},El=function(e){var r=e;return r.dR},vw=function(e){var r=e,n=El(r.dS),a=Il(r.dS),i=Fl(r.dS),o=El(r.dQ),c=Il(r.dQ),l=Fl(r.dQ),u=El(r.dP),m=Il(r.dP),s=Fl(r.dP);return s*c*n+m*o*i+u*l*a-u*c*i-m*l*n-s*o*a>0},fw=function(e){var r=Tt(Da(e)),n=Sr(ra(e)),a=Sr(aa(e)),i=Sr(na(e));return{ei:vw(e),t:i.ip,u:i.it,v:i.dR,w:a.ip,x:a.it,y:a.dR,z:n.ip,A:n.it,B:n.dR,K:r.ip,L:r.it,M:r.dR,cE:1}},Na=v(function(e,r){return{$:5,a:e,b:r}}),Lm=v(function(e,r){var n=r;switch(n.$){case 0:return B;case 5:var a=n.a,i=n.b,o=t(Pf,a,e);return t(Na,o,i);case 1:return t(Na,e,n);case 3:return t(Na,e,n);case 2:return t(Na,e,n);default:return t(Na,e,n)}}),Mm=v(function(e,r){return t(Lm,fw(e),r)}),Yi=function(e){return{$:2,a:e}},mw=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f6;return{f6:{ip:n*o.ip,it:a*o.it,dR:i*o.dR},gH:n*r.gH,gI:a*r.gI,gJ:i*r.gJ}}),sw=pp,dw=dp,Pm=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=dw(a),_=f.ip,y=f.it,x=f.dR,S=f.fu,w=sw({fu:S,ip:_*s,it:y*d,dR:x*g});return Ua(r,n,w,i,o,c,l,u,m)}}}}}}}}}},Bl=v(function(e,r){switch(r.$){case 0:return $m;case 5:var n=r.a,a=r.b;return t(Na,n,t(Bl,e,a));case 1:var i=r.a,o=r.b;return t(Oe,t(mw,e,i),t(Pm,e,o));case 3:return r;case 2:var o=r.a;return Yi(t(Pm,e,o));default:var c=r.a;return Hf(t(J,Bl(e),c))}}),Vl=v(function(e,r){var n=r;return t(Bl,e,n)}),jl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},zm=7683,km=7682,pw=b(vl,{da:0,dv:0,dO:15},{bA:er,bR:Ia,b_:er,b$:zm},{bA:er,bR:Ia,b_:er,b$:km}),gw=b(vl,{da:0,dv:0,dO:15},{bA:er,bR:Ia,b_:er,b$:km},{bA:er,bR:Ia,b_:er,b$:zm}),Nl=v(function(e,r){return e?t(z,gw,r):t(z,pw,r)}),hw={src:`
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
    `,attributes:{normal:"q",position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cF",viewMatrix:"g"}},bw=function(e){if(e.$){var r=e.c;return j(be(function(n,a,i,o,c,l,u,m){return R(ze,t(Nl,o,m),hw,jl,r,{c:i,d:a,e:l,f:n,cF:u,g:c})}))}else return E},Xi=function(e){var r=bw(e);if(r.$)return B;var n=r.a;return Yi(n)},_w=H(function(e,r,n,a){var i=t(Al,n,im),o=function(){var s=L(e,r);return s.a?s.b?zt($([i,Xi(um)])):i:s.b?Xi(um):B}(),c=rl(a),l=c.a,u=c.b,m=c.c;return t(Mm,el(a),t(Vl,I(l,u,m),o))}),yw=v(function(e,r){return P(_w,!0,!0,e,r)}),Tm=v(function(e,r){return{$:0,a:e,b:r}}),ww=function(e){var r=_c(e),n=r.hu,a=r.gE,i=r.fU;return b(Lt,n,a,i)},xw=function(e){return t(Tm,0,Zc(ww(e)))},Sw=function(e){var r=e;return r.m},Et=function(e){var r=e;return Kn(r)},Cw=v(function(e,r){var n=e.e2,a=e.q;return t(z,{q:Ni(a),e2:ur(n)},r)}),Lw=Nt(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,m=oa(l.e2),s=ia(l.e2),d=ta(l.e2),g=t(wa,e,d),f=t(qe,r,d),_=t(wa,n,s),y=t(qe,a,s),x=t(wa,i,m),S=t(qe,o,m),w=u;e=g,r=f,n=_,a=y,i=x,o=S,c=w;continue e}else return Zf({eK:r,eL:a,eM:o,eN:e,eO:n,eP:i})}),Dm=v(function(e,r){var n=oa(e.e2),a=ia(e.e2),i=ta(e.e2);return $o(Lw,i,i,a,a,n,n,r)}),Mw=function(e){var r=b(Du,Cw,D,xl(e));if(r.b){var n=r.a,a=r.b,i=t(Rt,r,_l(e)),o=t(Dm,n,a);return P(Xf,o,e,i,0)}else return hl},Rm=v(function(e,r){var n=e,a=r,i=n.dQ,o=i,c=n.dP,l=c;return{ip:a.ip*l.ip+a.it*o.ip,it:a.ip*l.it+a.it*o.it,dR:a.ip*l.dR+a.it*o.dR}}),Qi=function(e){var r=e;return Ra(r)},Gl=function(e){return un(2*ln*e)},Pw=Dr,Am=Pw({dj:Dn,dP:il,dQ:ol}),Fm=function(){var e=72,r=t(sf,e,Gl(1)),n=Ur(1),a=Ta(Wc),i=Ta(jc),o=Ur(1),c=t(De,.5,o),l=b(Ue,Ar,Ar,c),u=t(De,-.5,o),m=b(Ue,Ar,Ar,u),s=function(f){var _=t(De,f,r),y=Ta(t(Rm,Am,Hc(_))),x=t(De,Et(_),n),S=t(De,Qi(_),n),w=b(Ue,x,S,c),C=b(Ue,x,S,u),F=t(xi,e,f+1),q=t(De,F,r),Q=Ta(t(Rm,Am,Hc(q))),U=t(De,Et(q),n),Y=t(De,Qi(q),n),X=b(Ue,U,Y,u),V=b(Ue,U,Y,c);return $([I({q:i,e2:m},{q:i,e2:X},{q:i,e2:C}),I({q:y,e2:C},{q:Q,e2:X},{q:Q,e2:V}),I({q:y,e2:C},{q:Q,e2:V},{q:y,e2:w}),I({q:a,e2:l},{q:a,e2:w},{q:a,e2:V})])},d=t(J,s,t(rn,0,e-1)),g=Ml(tr(d));return gl(Mw(g))}(),Im=lm(Fm),zw=function(e){var r=$f(e),n=Ac(r),a=n.a,i=n.b;return $n({dj:vf(e),dP:a,dQ:i,dS:r})},kw=function(e){var r=e;return r.g5},Tw=function(e){var r=e;return r.hs},Dw=H(function(e,r,n,a){var i=zw(Sw(a)),o=t(Al,n,Fm),c=function(){var d=L(e,r);return d.a?d.b?zt($([o,Xi(Im)])):o:d.b?Xi(Im):B}(),l=Tw(a),u=l,m=kw(a),s=m;return t(Mm,i,t(Vl,I(u,u,s),c))}),Rw=v(function(e,r){return P(Dw,!0,!0,e,r)}),Em={src:`
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
    `,attributes:{triangleVertex:"dF"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bX",viewMatrix:"g"}},Bm={src:`
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
    `,attributes:{triangleVertex:"dF"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bX",viewMatrix:"g"}},Bt=function(e){var r=Dt(e),n=r.a,a=r.b,i=r.c,o=Va(n),c=Va(a),l=Va(i);return qr({et:o.ip,eu:c.ip,ev:l.ip,ew:0,ex:o.it,ey:c.it,ez:l.it,eA:0,eB:o.dR,eC:c.dR,eD:l.dR,eE:0,eF:0,eG:0,eH:0,eI:0})},Zi=tm($([I({dF:0},{dF:1},{dF:2})])),Aw=v(function(e,r){var n=Kf(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var i=e.b.a;return t(Oe,a,be(function(w,C,F,q,Q,U,Y,X){return R(ze,b($r,q,0,X),Em,zl,Zi,{aO:i,c:F,d:C,e:U,f:w,bX:Bt(r),g:Q})}));case 1:if(e.b.$)return e.a,B;var o=e.b.a,c=e.c;return t(Oe,a,be(function(w,C,F,q,Q,U,Y,X){return R(ze,b($r,q,0,X),Em,kl,Zi,{a7:t(Wi,At(c),o),c:F,d:C,e:U,f:w,bX:Bt(r),g:Q})}));case 2:e.a;var l=e.b,u=e.c,m=t(xm,l,u);if(m.$)return B;var s=m.a;return t(Oe,a,be(function(w,C,F,q,Q,U,Y,X){var V=Y.a,ne=Y.b;return R(ze,b($r,q,0,X),Bm,pm,Zi,{U:ne,bG:V.bG,cp:V.cp,cq:V.cq,cr:V.cr,db:s,c:F,d:C,e:U,f:w,bX:Bt(r),g:Q})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=P(Sm,d,g,f,u);if(_.$)return B;var y=_.a,x=_.b,S=_.c;return t(Oe,a,be(function(w,C,F,q,Q,U,Y,X){var V=Y.a,ne=Y.b;return R(ze,b($r,q,0,X),Bm,ym,Zi,{cQ:y,U:ne,bG:V.bG,cp:V.cp,cq:V.cq,cr:V.cr,de:S,c:F,d:C,e:U,dy:x,f:w,bX:Bt(r),g:Q})}))}}),Fw=function(){var e=$([{bm:t(gr,0,1)},{bm:t(gr,1,1)},{bm:t(gr,2,1)},{bm:t(gr,0,-1)},{bm:t(gr,1,-1)},{bm:t(gr,2,-1)}]),r=$([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return t(Rt,e,r)}(),Iw={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cF",triangleVertexPositions:"bX",viewMatrix:"g"}},Vm=function(e){return Yi(be(function(r,n,a,i,o,c,l,u){return R(ze,t(Nl,i,u),Iw,jl,Fw,{c:a,d:n,e:c,f:r,cF:l,bX:Bt(e),g:o})}))},Ew=H(function(e,r,n,a){var i=t(Aw,n,a),o=L(e,r);return o.a?o.b?zt($([i,Vm(a)])):i:o.b?Vm(a):B}),Bw=v(function(e,r){return P(Ew,!0,!0,e,r)}),Vw=v(function(e,r){var n=Fn(r),a=Fn(e),i=An(r),o=An(e),c=Rn(r),l=Rn(e);return{eK:t(Ee,l,c),eL:t(Ee,o,i),eM:t(Ee,a,n),eN:t(Ne,l,c),eO:t(Ne,o,i),eP:t(Ne,a,n)}}),jw=function(e){var r=nl(e),n=r.a,a=r.b;return t(Vw,n,a)},jm={src:`
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
    `,attributes:{lineSegmentVertex:"er"},uniforms:{lineSegmentEndPoint:"ep",lineSegmentStartPoint:"eq",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Nw=v(function(e,r){return{$:1,a:e,b:r}}),Gw=Nw({d1:2,ee:0,eR:1}),Nm=Gw($([L({er:0},{er:1})])),Hw=v(function(e,r){var n=jw(r),a=ie(n),i=nl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var l=e.b.a;return t(Oe,a,be(function(m,s,d,g,f,_,y,x){return R(ze,x,jm,zl,Nm,{aO:l,ep:ur(c),eq:ur(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return B;var l=e.b.a,u=e.c;return t(Oe,a,be(function(s,d,g,f,_,y,x,S){return R(ze,S,jm,kl,Nm,{a7:t(Wi,At(u),l),ep:ur(c),eq:ur(o),c:g,d,e:y,f:s,g:_})}));case 2:return B;default:return B}}),Ww=v(function(e,r){return t(Hw,e,r)}),Gm=v(function(e,r){var n=e,a=r;return n/a}),Uw=Be(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(z,o,i);if(le(r,e))return c;var l=e,u=r-1,m=n,s=a,d=c;e=l,r=u,n=m,a=s,i=d;continue e}}),Hm=v(function(e,r){return e<1?D:R(Uw,0,e,e,r,D)}),Ow=v(function(e,r){var n=e.e2,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(z,{q:Ni(a),e2:ur(n),O:t(gr,c,l)},r)}),qw=function(e){var r=b(Du,Ow,D,xl(e));if(r.b){var n=r.a,a=r.b,i=t(Rt,r,_l(e)),o=t(Dm,n,a);return P(Qf,o,e,i,0)}else return hl},Hl=v(function(e,r){var n=e,a=r,i=Kn(a);return{ip:i*Kn(n),it:i*Ra(n),dR:Ra(a)}}),Jw=function(){var e=Ur(1),r=72,n=t(rn,0,r-1),a=t(Hm,r,t(It,Ar,Gl(1))),i=Za(r/2),o=t(rn,0,i-1),c=t(Hm,i,t(It,ka(90),ka(-90))),l=Cl(tr(t(J,function(s){return t(J,function(d){return{q:Ta(t(Hl,s,d)),e2:b(Ue,t(De,Et(d)*Et(s),e),t(De,Et(d)*Qi(s),e),t(De,Qi(d),e)),O:L(t(Gm,s,Gl(1)),t(Gm,t(Pt,ka(90),d),ka(180)))}},c)},a))),u=v(function(s,d){return s*(i+1)+d}),m=tr(t(J,function(s){return tr(t(J,function(d){var g=t(u,s+1,d),f=t(u,s,d),_=t(u,s+1,d+1),y=t(u,s,d+1);return $([I(y,_,g),I(y,g,f)])},o))},n));return gl(qw(t(om,l,m)))}(),Ki=72,eo=2*Ki,Yw=v(function(e,r){e:for(;;){var n=eo+1,a=t(xi,eo,2*e+3),i=t(xi,eo,2*e+2),o=2*e+1,c=2*e,l=eo,u=t(z,I(l,c,i),t(z,I(c,a,i),t(z,I(c,o,a),t(z,I(o,n,a),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),Xw=k(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Qw=v(function(e,r){e:for(;;){var n=b(Xw,0,2*ln,e/Ki),a={b1:n,cw:0,cC:1},i={b1:n,cw:1,cC:1},o=t(z,a,t(z,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Zw=function(){var e=t(Qw,Ki-1,$([{b1:0,cw:0,cC:0},{b1:0,cw:1,cC:0}])),r=t(Yw,Ki-1,D);return t(Rt,e,r)}(),Kw={src:`
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
    `,attributes:{angle:"b1",offsetScale:"cw",radiusScale:"cC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cF",viewMatrix:"g"}},Wm=function(e){return Yi(be(function(r,n,a,i,o,c,l,u){return R(ze,t(Nl,!0,u),Kw,jl,Zw,{aO:b(Lt,0,0,1),c:a,d:n,e:c,f:r,cF:l,g:o})}))},ex=function(e){var r=rm(e);return{ei:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.ip,L:r.it,M:r.dR,cE:1}},rx=v(function(e,r){return t(Lm,ex(e),r)}),nx=H(function(e,r,n,a){var i=t(Al,n,Jw),o=function(){var u=L(e,r);return u.a?u.b?zt($([i,Wm()])):i:u.b?Wm():B}(),c=tl(a),l=c;return t(rx,t(ki,Dn,al(a)),t(Vl,I(l,l,l),o))}),ax=v(function(e,r){return P(nx,!0,!0,e,r)}),tx=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ix=Be(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),ox=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(Tm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(tx,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(hf,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return R(ix,r,n,o,c,i)}},cx=ox,Um=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(yw,r,n)]);case 1:var r=e.a,a=e.b;return $([t(Bw,r,a)]);case 3:var r=e.a,i=e.b;return $([t(ax,cx(r),i)]);case 2:var r=e.a,o=e.b;return $([t(Rw,r,o)]);case 4:var c=e.a,l=e.b;return $([t(Ww,xw(c),l)]);default:var u=e.a;return t(ha,Um,u)}},lx=function(e){return t(ha,Um,e)},ux=v(function(e,r){return py({fL:e.fL,a2:Z_(e.fQ),f2:e.f2,ga:Ur(e.ga),cV:e.cV,a5:L(Jf(ye(e.bN.$9)),Jf(ye(e.bN.gL))),a9:lx(r),gx:e.gx,g7:e.g7,id:e.id,im:e.im})}),Om=function(e){return e},$x=v(function(e,r){var n=e,a=Sr(r.gp),i=a.ip,o=a.it,c=a.dR,l=t(Bi,r.cm,r.a4),u=l;return{b3:oa(u),f5:n,ci:ia(u),ds:0,cB:ta(u),dG:1,ip:-i,it:-o,dR:-c}}),vx=function(e){return t($x,Om(!0),{a4:e.a4,gp:t(Hl,un(e.b2),un(e.cg)),cm:e.cm})},fx=function(e){return e},mx=function(e){return fx(1.2*t(xt,2,e))},Wl=Oc({ip:.37208,it:.37529}),sx=v(function(e,r){return{$:2,a:e,b:r}}),qm=function(e){return{$:0,a:e}},ro=function(e){var r=e;return r},dx=function(e){var r=e;return r.f5},px=qm(kt.a),gx=v(function(e,r){var n=v(function(a,i){var o=i.a,c=i.b;return e(a)?L(t(z,a,o),c):L(o,t(z,a,c))});return b(He,n,L(D,D),r)}),hx=function(e){var r=e;return qr({et:r.ip,eu:r.cB,ev:0,ew:0,ex:r.it,ey:r.ci,ez:0,eA:0,eB:r.dR,eC:r.b3,eD:0,eE:0,eF:r.dG,eG:r.ds,eH:0,eI:0})},bx=be(function(e,r,n,a,i,o,c,l){var u=t(gx,dx,$([ro(e),ro(r),ro(n),ro(a)])),m=u.a,s=u.b;if(m.b){var d=G(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,y=f.b,x=y.a,S=y.b,w=S.a;return t(sx,t(J,hx,m),{bG:t(Cr,g,_),cp:t(Cr,x,w),cq:t(Cr,i,o),cr:t(Cr,c,l)})}else return px}else return qm({bG:t(Cr,e,r),cp:t(Cr,n,a),cq:t(Cr,i,o),cr:t(Cr,c,l)})}),_x=H(function(e,r,n,a){return Ua(bx,e,r,n,a,hr,hr,hr,hr)}),yx={$:5},wx=yx,xx=Oc({ip:.44757,it:.40745}),Sx=function(e){return e},Jm=function(e){return e},Ul=function(e){return e},Cx={$:1},Lx=Cx,Mx=v(function(e,r){var n=e,a=Tt(r.e2),i=a.ip,o=a.it,c=a.dR,l=t(Bi,r.cm,r.a4),u=l;return{b3:oa(u),f5:n,ci:ia(u),ds:0,cB:ta(u),dG:2,ip:i,it:o,dR:c}}),Ym=function(e){return t(Mx,Om(!0),{a4:e.a4,cm:e.cm,e2:zi(e.e2)})},Xm=function(e){var r=e;return r},Px=function(e){e:for(;;){if(le(e.eg,Ar)&&le(e.eh,Ar))return hr;if(t(lf,Ke(e.eg),Ke(e.eh))){var r={a4:e.a4,eg:e.eh,eh:e.eg,fn:Ai(e.fn)};e=r;continue e}else{var n=ue(Xm(e.eh)/ln),a=ue(Xm(e.eg)/ln),i=Sr(e.fn),o=i.ip,c=i.it,l=i.dR,u=t(Bi,nm(1),e.a4),m=u;return{b3:a*oa(m),f5:!1,ci:a*ia(m),ds:n/a,cB:a*ta(m),dG:3,ip:o,it:c,dR:l}}}},zx=function(e){return Px({a4:e.a4,eg:e.eg,eh:e.eh,fn:t(Hl,un(e.b2),un(e.cg))})},kx=v(function(e,r){var n=vx({b2:yt(-90),a4:p_(Sx(2e3)),cg:yt(-45),cm:Ul(100)}),a=Ym({a4:Wl,cm:Jm(6e3),e2:{ip:2,it:3,dR:3}}),i=zx({b2:yt(0),a4:Wl,cg:yt(-45),eg:Ul(20),eh:Ul(10)}),o=Ym({a4:xx,cm:Jm(6e3),e2:{ip:-2,it:4,dR:3}});return t(ux,{fL:Lx,fQ:Lv,f2:Ec(e),ga:.1,cV:e.cV,gx:mx(6),g7:P(_x,o,a,n,i),bN:e.bN,id:wx,im:Wl},$([t(Q_,e,r)]))}),Tx=P(h1,kx,s_,D,y1);const Dx={Main:{init:Tx(t(O,function(e){return ar({g0:e})},t(W,"inputs",t(O,function(e){return t(O,function(r){return t(O,function(n){return t(O,function(a){return t(O,function(i){return t(O,function(o){return t(O,function(c){return ar({b8:c,cV:o,gs:i,ek:a,bL:n,bN:r,il:e})},t(W,"clock",Ve))},t(W,"devicePixelRatio",Ve))},t(W,"dt",Ve))},t(W,"keyboard",t(O,function(a){return t(O,function(i){return t(O,function(o){return t(O,function(c){return t(O,function(l){return t(O,function(u){return t(O,function(m){return t(O,function(s){return t(O,function(d){return ar({fK:d,gg:s,d0:m,gr:u,g4:l,hr:c,hx:o,fc:i,fm:a})},t(W,"alt",_e))},t(W,"control",_e))},t(W,"down",_e))},t(W,"downs",ci(da)))},t(W,"left",_e))},t(W,"pressedKeys",ci(da)))},t(W,"right",_e))},t(W,"shift",_e))},t(W,"up",_e))))},t(W,"pointer",t(O,function(n){return t(O,function(a){return t(O,function(i){return t(O,function(o){return t(O,function(c){return t(O,function(l){return t(O,function(u){return t(O,function(m){return ar({d0:m,c_:u,hb:l,hy:c,hz:o,fm:i,ip:a,it:n})},t(W,"down",_e))},t(W,"isDown",_e))},t(W,"move",_e))},t(W,"rightDown",_e))},t(W,"rightUp",_e))},t(W,"up",_e))},t(W,"x",Ve))},t(W,"y",Ve))))},t(W,"screen",t(O,function(r){return t(O,function(n){return ar({gL:n,$9:r})},t(W,"height",Ve))},t(W,"width",Ve))))},t(W,"wheel",t(O,function(e){return t(O,function(r){return ar({gk:r,gl:e})},t(W,"deltaX",Ve))},t(W,"deltaY",Ve)))))))(0)}},Z={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Rx=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Z.keyboard.downs.push(f.code),Z.keyboard.pressedKeys.push(f.code),r(f)&&(Z.keyboard.control=!0),n(f)&&(Z.keyboard.alt=!0),a(f)&&(console.log("yo"),Z.keyboard.shift=!0),i(f)&&(Z.keyboard.left=!0),o(f)&&(Z.keyboard.right=!0),c(f)&&(Z.keyboard.up=!0),l(f)&&(console.log("yey"),Z.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Z.keyboard.pressedKeys=Z.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Z.keyboard.control=!1,Z.keyboard.pressedKeys=[]),n(f)&&(Z.keyboard.alt=!1),a(f)&&(Z.keyboard.shift=!1),i(f)&&(Z.keyboard.left=!1),o(f)&&(Z.keyboard.right=!1),c(f)&&(Z.keyboard.up=!1),l(f)&&(Z.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY,u(f)&&(Z.pointer.down=!0,Z.pointer.isDown=!0),m(f)&&(Z.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Z.pointer.move=!0,Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Z.wheel.deltaX=f.deltaX,Z.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(Z)}),window.addEventListener("focus",f=>{s(Z)}),window.addEventListener("visibilitychange",f=>{s(Z)}),window.addEventListener("resize",()=>{Z.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,y=_-Z.clock;y<.009||(Z.dt=y,Z.clock=_,e.ports.tick.send(Z),d(Z)),window.requestAnimationFrame(g)}},Ax=Dx.Main.init({node:document.querySelector("#app div"),flags:{inputs:Z}});Rx(Ax);
