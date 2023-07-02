(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function pr(e,r,n){return n.a=e,n.f=r,n}function $(e){return pr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return pr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function A(e){return pr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Ce(e){return pr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Fe(e){return pr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ut(e){return pr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ce(e){return pr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function vt(e){return pr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function S(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function L(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Oo(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function qn(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function sl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var ml=[];function dl(e){return e.length}var pl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),gl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),bl=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var hl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+_l()),r});function _l(e){return"<internals>"}function jr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function sr(e,r){for(var n,a=[],t=Ba(e,r,0,a);t&&(n=a.pop());t=Ba(n.a,n.b,0,a));return t}function Ba(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&jr(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$<0&&(e=vo(e),r=vo(r));for(var t in e)if(!Ba(e[t],r[t],n+1,a))return!1;return!0}$(sr);$(function(e,r){return!sr(e,r)});function N(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=N(e.a,r.a))||(n=N(e.b,r.b))?n:N(e.c,r.c);for(;e.b&&r.b&&!(n=N(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return N(e,r)<0});$(function(e,r){return N(e,r)<1});$(function(e,r){return N(e,r)>0});$(function(e,r){return N(e,r)>=0});var Cl=$(function(e,r){var n=N(e,r);return n<0?hi:n?i$:bi}),cn=0;function M(e,r){return{a:e,b:r}}function O(e,r,n){return{a:e,b:r,c:n}}function je(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ae);function ae(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Ze(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Ze(e.a,r);return n}var z={$:0};function Ze(e,r){return{$:1,a:e,b:r}}var yl=$(Ze);function b(e){for(var r=z,n=e.length;n--;)r=Ze(e[n],r);return r}function Yn(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var wl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});A(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});Ce(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(S(e,r.a,n.a,a.a,t.a));return b(i)});Fe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(L(e,r.a,n.a,a.a,t.a,i.a));return b(c)});$(function(e,r){return b(Yn(r).sort(function(n,a){return N(e(n),e(a))}))});$(function(e,r){return b(Yn(r).sort(function(n,a){var t=o(e,n,a);return t===bi?0:t===hi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Ll=$(Math.pow);$(function(e,r){return r%e});var Sl=$(function(e,r){var n=r%e;return e===0?jr(11):n>0&&e<0||n<0&&e>0?n+e:n}),zl=Math.PI,xl=Math.cos,Tl=Math.sin,Pl=Math.tan,Dl=Math.atan;$(Math.atan2);function Ml(e){return e}function kl(e){return e===1/0||e===-1/0}var Bl=Math.ceil,Al=Math.floor,Fl=Math.round,El=Math.sqrt,Zt=Math.log,Vl=isNaN;function Rl(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Nl=$(function(e,r){return e+r});function jl(e){var r=e.charCodeAt(0);return isNaN(r)?H:X(55296<=r&&r<=56319?M(e[0]+e[1],e.slice(2)):M(e[0],e.slice(1)))}$(function(e,r){return e+r});function Wl(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Gl(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Hl=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Il=$(function(e,r){return r.split(e)}),Ul=$(function(e,r){return r.join(e)}),Ol=y(function(e,r,n){return n.slice(e,r)});function Jl(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var ql=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Yl=$(function(e,r){return r.indexOf(e)>-1}),Zl=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Xl=$(function(e,r){var n=e.length;if(n<1)return z;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function Jo(e){return e+""}function Ql(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return H;r=10*r+i-48}return t==a?H:X(n==45?-r:r)}function Kl(e){if(e.length===0||/[\sxbo]/.test(e))return H;var r=+e;return r===r?X(r):H}function eu(e){return Yn(e).join("")}function ru(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function nu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function au(e){return{$:0,a:e}}function $t(e){return{$:2,b:e}}var tu=$t(function(e){return typeof e=="boolean"?te(e):Je("a BOOL",e)}),ou=$t(function(e){return typeof e=="number"?te(e):Je("a FLOAT",e)}),iu=$t(function(e){return typeof e=="string"?te(e):e instanceof String?te(e+""):Je("a STRING",e)});function cu(e){return{$:3,b:e}}var lu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function gr(e,r){return{$:9,f:e,g:r}}var uu=$(function(e,r){return{$:10,b:r,h:e}}),vu=$(function(e,r){return gr(e,[r])}),$u=y(function(e,r,n){return gr(e,[r,n])});A(function(e,r,n,a){return gr(e,[r,n,a])});Ce(function(e,r,n,a,t){return gr(e,[r,n,a,t])});Fe(function(e,r,n,a,t,i){return gr(e,[r,n,a,t,i])});ut(function(e,r,n,a,t,i,c){return gr(e,[r,n,a,t,i,c])});ce(function(e,r,n,a,t,i,c,l){return gr(e,[r,n,a,t,i,c,l])});vt(function(e,r,n,a,t,i,c,l,u){return gr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Me(e,n)}catch(a){return me(o(wt,"This is not valid JSON! "+a.message,r))}});var qo=$(function(e,r){return Me(e,r)});function Me(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?te(e.c):Je("null",r);case 3:return mn(r)?Xt(e.b,r,b):Je("a LIST",r);case 4:return mn(r)?Xt(e.b,r,fu):Je("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Je("an OBJECT with a field named `"+n+"`",r);var v=Me(e.b,r[n]);return Ne(v)?v:me(o($o,n,v.a));case 7:var a=e.e;if(!mn(r))return Je("an ARRAY",r);if(a>=r.length)return Je("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Me(e.b,r[a]);return Ne(v)?v:me(o(_i,a,v.a));case 8:if(typeof r!="object"||r===null||mn(r))return Je("an OBJECT",r);var t=z;for(var i in r)if(r.hasOwnProperty(i)){var v=Me(e.b,r[i]);if(!Ne(v))return me(o($o,i,v.a));t=Ze(M(i,v.a),t)}return te(ze(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Me(l[u],r);if(!Ne(v))return v;c=c(v.a)}return te(c);case 10:var v=Me(e.b,r);return Ne(v)?Me(e.h(v.a),r):v;case 11:for(var s=z,m=e.g;m.b;m=m.b){var v=Me(m.a,r);if(Ne(v))return v;s=Ze(v.a,s)}return me(c$(ze(s)));case 1:return me(o(wt,e.a,r));case 0:return te(e.a)}}function Xt(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Me(e,r[i]);if(!Ne(c))return me(o(_i,i,c.a));t[i]=c.a}return te(n(t))}function mn(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function fu(e){return o(L$,e.length,function(r){return e[r]})}function Je(e,r){return me(o(wt,"Expecting "+e,r))}function Mr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Mr(e.b,r.b);case 6:return e.d===r.d&&Mr(e.b,r.b);case 7:return e.e===r.e&&Mr(e.b,r.b);case 9:return e.f===r.f&&Qt(e.g,r.g);case 10:return e.h===r.h&&Mr(e.b,r.b);case 11:return Qt(e.g,r.g)}}function Qt(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Mr(e[a],r[a]))return!1;return!0}var su=$(function(e,r){return JSON.stringify(r,null,e)+""});function Yo(e){return e}y(function(e,r,n){return n[e]=r,n});function Lr(e){return{$:0,a:e}}function mu(e){return{$:1,a:e}}function ir(e){return{$:2,b:e,c:null}}var Aa=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function du(e){return{$:5,b:e}}var pu=0;function ft(e){var r={$:0,e:pu++,f:e,g:null,h:[]};return st(r),r}function Zo(e){return ir(function(r){r(Lr(ft(e)))})}function Xo(e,r){e.h.push(r),st(e)}var gu=$(function(e,r){return ir(function(n){Xo(e,r),n(Lr(cn))})}),va=!1,Kt=[];function st(e){if(Kt.push(e),!va){for(va=!0;e=Kt.shift();)bu(e);va=!1}}function bu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,st(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}A(function(e,r,n,a){return mt(r,a,e.fC,e.gt,e.gm,function(){return function(){}})});function mt(e,r,n,a,t,i){var c=o(qo,e,r?r.flags:void 0);Ne(c)||jr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=hu(l,d);function d(f,h){var g=o(a,f,v);s(v=g.a,h),ro(l,g.b,t(v))}return ro(l,u.b,t(v)),m?{ports:m}:{}}var qe={};function hu(e,r){var n;for(var a in qe){var t=qe[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Cu(t,r)}return n}function _u(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Cu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Aa,l,du(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?S(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=ft(o(Aa,l,e.b))}var yu=$(function(e,r){return ir(function(n){e.g(r),n(Lr(cn))})});$(function(e,r){return o(gu,e.h,{$:0,a:r})});function Qo(e){return function(r){return{$:1,k:e,l:r}}}function wu(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var eo=[],$a=!1;function ro(e,r,n){if(eo.push({p:e,q:r,r:n}),!$a){$a=!0;for(var a;a=eo.shift();)Lu(a.p,a.q,a.r);$a=!1}}function Lu(e,r,n){var a={};Mn(!0,r,a,null),Mn(!1,n,a,null);for(var t in e)Xo(e[t],{$:"fx",a:a[t]||{i:z,j:z}})}function Mn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Su(e,t,a,r.l);n[t]=zu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Mn(e,c.a,n,a);return;case 3:Mn(e,r.o,n,{s:r.n,t:a});return}}function Su(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?qe[r].e:qe[r].f;return o(i,t,a)}function zu(e,r,n){return n=n||{i:z,j:z},e?n.i=Ze(r,n.i):n.j=Ze(r,n.j),n}function xu(e){qe[e]&&jr(3)}$(function(e,r){return r});function Tu(e,r){return xu(e),qe[e]={f:Pu,u:r,a:Du},Qo(e)}var Pu=$(function(e,r){return function(n){return e(r(n))}});function Du(e,r){var n=z,a=qe[e].u,t=Lr(null);qe[e].b=t,qe[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(qo,a,c);Ne(l)||jr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var kn,nr=typeof document<"u"?document:{};function dt(e,r){e.appendChild(r)}A(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(vr(e,function(){}),t),{}});function Fa(e){return{$:0,a:e}}var Ko=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:pt(n),e:t,f:e,b:i}})}),Sr=Ko(void 0),Mu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:pt(n),e:t,f:e,b:i}})}),ku=Mu(void 0);function Bu(e,r,n,a){return{$:3,d:pt(e),g:r,h:n,i:a}}var Au=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function br(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return br([e,r],function(){return e(r)})});y(function(e,r,n){return br([e,r,n],function(){return o(e,r,n)})});A(function(e,r,n,a){return br([e,r,n,a],function(){return p(e,r,n,a)})});Ce(function(e,r,n,a,t){return br([e,r,n,a,t],function(){return S(e,r,n,a,t)})});Fe(function(e,r,n,a,t,i){return br([e,r,n,a,t,i],function(){return L(e,r,n,a,t,i)})});ut(function(e,r,n,a,t,i,c){return br([e,r,n,a,t,i,c],function(){return se(e,r,n,a,t,i,c)})});ce(function(e,r,n,a,t,i,c,l){return br([e,r,n,a,t,i,c,l],function(){return Oo(e,r,n,a,t,i,c,l)})});vt(function(e,r,n,a,t,i,c,l,u){return br([e,r,n,a,t,i,c,l,u],function(){return qn(e,r,n,a,t,i,c,l,u)})});var ei=$(function(e,r){return{$:"a0",n:e,o:r}}),Fu=$(function(e,r){return{$:"a1",n:e,o:r}}),ri=$(function(e,r){return{$:"a2",n:e,o:r}}),hr=$(function(e,r){return{$:"a3",n:e,o:r}}),Eu=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Vu(e){return e=="script"?"p":e}function Ru(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(ei,r.n,Nu(e,r.o)):r});function Nu(e,r){var n=xt(r);return{$:r.$,a:n?p(S$,n<3?ju:Wu,we(e),r.a):o(En,e,r.a)}}var ju=$(function(e,r){return M(e(r.a),r.b)}),Wu=$(function(e,r){return{as:e(r.as),$7:r.$7,da:r.da}});function pt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?no(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?no(c,t,i):c[t]=i}return r}function no(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function vr(e,r){var n=e.$;if(n===5)return vr(e.k||(e.k=e.m()),r);if(n===0)return nr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=vr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ea(c,r,e.d),c}var c=e.f?nr.createElementNS(e.f,e.c):nr.createElement(e.c);kn&&e.c=="a"&&c.addEventListener("click",kn(c)),Ea(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)dt(c,vr(n===1?l[u]:l[u].b,r));return c}function Ea(e,r,n){for(var a in n){var t=n[a];a==="a1"?Gu(e,t):a==="a0"?Uu(e,r,t):a==="a3"?Hu(e,t):a==="a4"?Iu(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Gu(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Hu(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Iu(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Uu(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Ou(r,i),e.addEventListener(t,c,gt&&{passive:xt(i)<2}),a[t]=c}}var gt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){gt=!0}}))}catch{}function Ou(e,r){function n(a){var t=n.q,i=Me(t.a,a);if(!!Ne(i)){for(var c=xt(t),l=i.a,u=c?c<3?l.a:l.as:l,v=c==1?l.b:c==3&&l.$7,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.da)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function Ju(e,r){return e.$==r.$&&Mr(e.a,r.a)}function ni(e,r){var n=[];return We(e,r,n,0),n}function $e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function We(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=rv(r),i=1;else{$e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];We(e.k,r.k,s,0),s.length>0&&$e(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,h=e.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;for(var g=r.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;if(f&&m.length!==d.length){$e(n,0,a,r);return}(f?!qu(m,d):m!==d)&&$e(n,2,a,d),We(h,g,n,a+1);return;case 0:e.a!==r.a&&$e(n,3,a,r.a);return;case 1:ao(e,r,n,a,Yu);return;case 2:ao(e,r,n,a,Zu);return;case 3:if(e.h!==r.h){$e(n,0,a,r);return}var C=bt(e.d,r.d);C&&$e(n,4,a,C);var w=r.i(e.g,r.g);w&&$e(n,5,a,w);return}}}function qu(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ao(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){$e(n,0,a,r);return}var i=bt(e.d,r.d);i&&$e(n,4,a,i),t(e,r,n,a)}function bt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=bt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Ju(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Yu(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?$e(n,6,a,{v:l,i:c-l}):c<l&&$e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];We(s,i[v],n,++a),a+=s.b||0}}function Zu(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var h=l[m],g=u[d],C=h.a,w=g.a,_=h.b,x=g.b,F=void 0,Y=void 0;if(C===w){f++,We(_,x,t,f),f+=_.b||0,m++,d++;continue}var U=l[m+1],I=u[d+1];if(U){var Z=U.a,J=U.b;Y=w===Z}if(I){var W=I.a,K=I.b;F=C===W}if(F&&Y){f++,We(_,K,t,f),Ir(i,t,C,x,d,c),f+=_.b||0,f++,Ur(i,t,C,J,f),f+=J.b||0,m+=2,d+=2;continue}if(F){f++,Ir(i,t,w,x,d,c),We(_,K,t,f),f+=_.b||0,m+=1,d+=2;continue}if(Y){f++,Ur(i,t,C,_,f),f+=_.b||0,f++,We(J,x,t,f),f+=J.b||0,m+=2,d+=1;continue}if(U&&Z===W){f++,Ur(i,t,C,_,f),Ir(i,t,w,x,d,c),f+=_.b||0,f++,We(J,K,t,f),f+=J.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var h=l[m],_=h.b;Ur(i,t,h.a,_,f),f+=_.b||0,m++}for(;d<s;){var ee=ee||[],g=u[d];Ir(i,t,g.a,g.b,void 0,ee),d++}(t.length>0||c.length>0||ee)&&$e(n,8,a,{w:t,x:c,y:ee})}var ai="_elmW6BL";function Ir(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];We(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Ir(e,r,n+ai,a,t,i)}function Ur(e,r,n,a,t){var i=e[n];if(!i){var c=$e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];We(a,i.z,l,t),$e(r,9,t,{w:l,A:i});return}Ur(e,r,n+ai,a,t)}function ti(e,r,n,a){Or(e,r,n,0,0,r.b,a)}function Or(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)ti(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&Or(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&Or(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return Or(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var h=r.e,g=e.childNodes,C=0;C<h.length;C++){t++;var w=d===1?h[C]:h[C].b,_=t+(w.b||0);if(t<=u&&u<=_&&(a=Or(g[C],w,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function oi(e,r,n,a){return n.length===0?e:(ti(e,r,n,a),Bn(e,n))}function Bn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=Xu(t,a);t===e&&(e=i)}return e}function Xu(e,r){switch(r.$){case 0:return Qu(e,r.s,r.u);case 4:return Ea(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Bn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(vr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Bn(e,i.w),e;case 8:return Ku(e,r);case 5:return r.s(e);default:jr(10)}}function Qu(e,r,n){var a=e.parentNode,t=vr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function Ku(e,r){var n=r.s,a=ev(n.y,r);e=Bn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:vr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&dt(e,a),e}function ev(e,r){if(!!e){for(var n=nr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;dt(n,i.c===2?i.s:vr(i.z,r.u))}return n}}function ht(e){if(e.nodeType===3)return Fa(e.textContent);if(e.nodeType!==1)return Fa("");for(var r=z,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=Ze(o(hr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=z,v=e.childNodes,a=v.length;a--;)u=Ze(ht(v[a]),u);return p(Sr,l,r,u)}function rv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var nv=A(function(e,r,n,a){return mt(r,a,e.fC,e.gt,e.gm,function(t,i){var c=e.gv,l=a.node,u=ht(l);return ii(i,function(v){var s=c(v),m=ni(u,s);l=oi(l,u,m,t),u=s})})});A(function(e,r,n,a){return mt(r,a,e.fC,e.gt,e.gm,function(t,i){var c=e.dl&&e.dl(t),l=e.gv,u=nr.title,v=nr.body,s=ht(v);return ii(i,function(m){kn=c;var d=l(m),f=Sr("body")(z)(d.e0),h=ni(s,f);v=oi(v,s,h,t),s=f,kn=0,u!==d.gq&&(nr.title=u=d.gq)})})});var An=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function ii(e,r){r(e);var n=0;function a(){n=n===1?0:(An(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&An(a),n=2)}}$(function(e,r){return o(Dt,Tt,ir(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Dt,Tt,ir(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Dt,Tt,ir(function(){history.replaceState({},"",r),e()}))});var av={addEventListener:function(){},removeEventListener:function(){}},tv=typeof window<"u"?window:av;y(function(e,r,n){return Zo(ir(function(a){function t(i){ft(n(i))}return e.addEventListener(r,t,gt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Me(e,r);return Ne(n)?X(n.a):H});function ci(e,r){return ir(function(n){An(function(){var a=document.getElementById(e);n(a?Lr(r(a)):mu(x$(e)))})})}function ov(e){return ir(function(r){An(function(){r(Lr(e()))})})}$(function(e,r){return ci(r,function(n){return n[e](),cn})});$(function(e,r){return ov(function(){return tv.scroll(e,r),cn})});y(function(e,r,n){return ci(e,function(a){return a.scrollLeft=r,a.scrollTop=n,cn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var iv=$(function(e,r){var n="g";e.fW&&(n+="m"),e.e2&&(n+="i");try{return X(new RegExp(r,n))}catch{return H}});$(function(e,r){return r.match(e)!==null});var cv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?X(m):H}a.push(S(ac,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});A(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?X(v):H}return n(S(ac,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var lv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/uv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function uv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var _t=new Float64Array(3),to=new Float64Array(3),oo=new Float64Array(3),vv=y(function(e,r,n){return new Float64Array([e,r,n])}),$v=function(e){return e[0]},fv=function(e){return e[1]},sv=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var mv=function(e){return new Float64Array([e.gz,e.gD,e.dB])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function li(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(li);function ui(e,r,n){return n===void 0&&(n=new Float64Array(3)),Fn(li(e,r,n),n)}$(ui);function vi(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Fn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/vi(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var dv=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Jr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Jr);function Va(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Va);$(function(e,r){var n,a=_t,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Jr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Jr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Jr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Jr(r,a)+e[14])/n,t});var pv=A(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var gv=function(e){return{gz:e[0],gD:e[1],dB:e[2],eT:e[3]}},bv=function(e){return new Float64Array([e.gz,e.gD,e.dB,e.eT])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/hv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function hv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var _v=new Float64Array(16),Cv=new Float64Array(16),yv=function(e){var r=new Float64Array(16);return r[0]=e.d2,r[1]=e.d6,r[2]=e.ea,r[3]=e.ee,r[4]=e.d3,r[5]=e.d7,r[6]=e.eb,r[7]=e.ef,r[8]=e.d4,r[9]=e.d8,r[10]=e.ec,r[11]=e.eg,r[12]=e.d5,r[13]=e.d9,r[14]=e.ed,r[15]=e.eh,r},wv=function(e){return{d2:e[0],d6:e[1],ea:e[2],ee:e[3],d3:e[4],d7:e[5],eb:e[6],ef:e[7],d4:e[8],d8:e[9],ec:e[10],eg:e[11],d5:e[12],d9:e[13],ed:e[14],eh:e[15]}};function $i(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Fe($i);A(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return $i(c,l,i,t,n,a)});function fi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Fe(fi);A(function(e,r,n,a){return fi(e,r,n,a,-1,1)});function si(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],h=e[11],g=e[12],C=e[13],w=e[14],_=e[15],x=r[0],F=r[1],Y=r[2],U=r[3],I=r[4],Z=r[5],J=r[6],W=r[7],K=r[8],ee=r[9],pe=r[10],ge=r[11],ue=r[12],ve=r[13],Ve=r[14],Re=r[15];return n[0]=a*x+l*F+m*Y+g*U,n[1]=t*x+u*F+d*Y+C*U,n[2]=i*x+v*F+f*Y+w*U,n[3]=c*x+s*F+h*Y+_*U,n[4]=a*I+l*Z+m*J+g*W,n[5]=t*I+u*Z+d*J+C*W,n[6]=i*I+v*Z+f*J+w*W,n[7]=c*I+s*Z+h*J+_*W,n[8]=a*K+l*ee+m*pe+g*ge,n[9]=t*K+u*ee+d*pe+C*ge,n[10]=i*K+v*ee+f*pe+w*ge,n[11]=c*K+s*ee+h*pe+_*ge,n[12]=a*ue+l*ve+m*Ve+g*Re,n[13]=t*ue+u*ve+d*Ve+C*Re,n[14]=i*ue+v*ve+f*Ve+w*Re,n[15]=c*ue+s*ve+h*Ve+_*Re,n}$(si);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],h=e[14],g=r[0],C=r[1],w=r[2],_=r[4],x=r[5],F=r[6],Y=r[8],U=r[9],I=r[10],Z=r[12],J=r[13],W=r[14];return n[0]=a*g+c*C+v*w,n[1]=t*g+l*C+s*w,n[2]=i*g+u*C+m*w,n[3]=0,n[4]=a*_+c*x+v*F,n[5]=t*_+l*x+s*F,n[6]=i*_+u*x+m*F,n[7]=0,n[8]=a*Y+c*U+v*I,n[9]=t*Y+l*U+s*I,n[10]=i*Y+u*U+m*I,n[11]=0,n[12]=a*Z+c*J+v*W+d,n[13]=t*Z+l*J+s*W+f,n[14]=i*Z+u*J+m*W+h,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Fn(r,_t);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/vi(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,h=i*c*v,g=i*l*v,C=c*l*v,w=i*i*v+u,_=h+f,x=g-d,F=h-f,Y=c*c*v+u,U=C+m,I=g+d,Z=C-m,J=l*l*v+u,W=n[0],K=n[1],ee=n[2],pe=n[3],ge=n[4],ue=n[5],ve=n[6],Ve=n[7],Re=n[8],zr=n[9],xr=n[10],ua=n[11],ul=n[12],vl=n[13],$l=n[14],fl=n[15];return a[0]=W*w+ge*_+Re*x,a[1]=K*w+ue*_+zr*x,a[2]=ee*w+ve*_+xr*x,a[3]=pe*w+Ve*_+ua*x,a[4]=W*F+ge*Y+Re*U,a[5]=K*F+ue*Y+zr*U,a[6]=ee*F+ve*Y+xr*U,a[7]=pe*F+Ve*Y+ua*U,a[8]=W*I+ge*Z+Re*J,a[9]=K*I+ue*Z+zr*J,a[10]=ee*I+ve*Z+xr*J,a[11]=pe*I+Ve*Z+ua*J,a[12]=ul,a[13]=vl,a[14]=$l,a[15]=fl,a});function Lv(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Lv);A(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Sv(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Sv);A(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],h=a[9],g=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=h,t[10]=g,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+h*n+a[13],t[14]=l*e+m*r+g*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],h=r[8],g=r[9],C=r[10],w=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=h,n[9]=g,n[10]=C,n[11]=w,n[12]=c*a+s*t+h*i+r[12],n[13]=l*a+m*t+g*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+w*i+r[15],n});y(function(e,r,n){var a=ui(e,r,_t),t=Fn(Va(n,a,to),to),i=Fn(Va(a,t,oo),oo),c=_v,l=Cv;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,si(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var io=0;function en(e,r){for(;r.b;r=r.b)e(r.a)}function Ct(e){for(var r=0;e.b;e=e.b)r++;return r}var zv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},xv=Ce(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),Tv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Pv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Dv=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Mv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),kv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Bv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Av=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Fv=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Ev=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Vv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Rv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Nv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},mi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},di=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},jv=function(e){e.gl.disable(e.gl.CULL_FACE)},Wv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Gv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Hv=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},co=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Iv=[Vv,Rv,Nv,mi,di,jv,Wv,Gv,Hv];function lo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Uv(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function pi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ov(e,r,n,a){for(var t=n.a.dM,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,h,g,C,w){var _;if(t===1)for(_=0;_<h;_++)f[g++]=h===1?C[w]:C[w][_];else i.forEach(function(x){for(_=0;_<h;_++)f[g++]=h===1?C[x][w]:C[x][w][_]})}var u=pi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Ct(n.b)*s);en(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Jv(e,r){if(r.a.dV>0){var n=e.createBuffer(),a=qv(r.c,r.a.dV);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dM*Ct(r.b),indexBuffer:null,buffers:{}}}function qv(e,r){var n=new Uint32Array(Ct(e)*r),a=0,t;return en(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function uo(e,r){return e+"#"+r}var gi=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),mi(n),di(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=uo(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=io++,v||(v=lo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=io++,s||(s=lo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Uv(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Yv(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),h=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(h)}c=uo(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Zv(l.uniformSetters,i.e);var g=n.buffers.get(i.d);for(g||(g=Jv(a,i.d),n.buffers.set(i.d,g)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],h=l.activeAttributeLocations[u],g.buffers[f.name]===void 0&&(g.buffers[f.name]=Ov(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,g.buffers[f.name]);var C=pi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(h),a.vertexAttribPointer(h,C.size,C.baseType,!1,0,0);else for(var w=C.size*4,_=w*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(h+x),a.vertexAttribPointer(h+x,C.size,C.baseType,!1,_,w*x)}for(n.toggle=!n.toggle,en($d(n),i.a),u=0;u<co.length;u++){var F=n[co[u]];F.toggle!==n.toggle&&F.enabled&&(Iv[u](n),F.enabled=!1,F.toggle=n.toggle)}g.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,g.indexBuffer),a.drawElements(i.d.a.eq,g.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.eq,0,g.numIndices)}}return en(t,e.g),r});function Yv(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,h){var g=h.name,C=e.getUniformLocation(f,g);switch(h.type){case e.INT:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};case e.FLOAT:return function(_){i[g]!==_&&(e.uniform1f(C,_),i[g]=_)};case e.FLOAT_VEC2:return function(_){i[g]!==_&&(e.uniform2f(C,_[0],_[1]),i[g]=_)};case e.FLOAT_VEC3:return function(_){i[g]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[g]=_)};case e.FLOAT_VEC4:return function(_){i[g]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[g]=_)};case e.FLOAT_MAT4:return function(_){i[g]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[g]=_)};case e.SAMPLER_2D:var w=c++;return function(_){e.activeTexture(e.TEXTURE0+w);var x=l.textures.get(_);x||(x=_.fa(e),l.textures.set(_,x)),e.bindTexture(e.TEXTURE_2D,x),i[g]!==_&&(e.uniform1i(C,w),i[g]=_)};case e.BOOL:return function(_){i[g]!==_&&(e.uniform1i(C,_),i[g]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Zv(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Xv=y(function(e,r,n){return Bu(r,{g:n,f:{},h:e},t$,o$)}),Qv=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Kv=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),e$=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),r$=$(function(e,r){e.contextAttributes.antialias=!0}),n$=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),a$=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function t$(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};en(function(t){return o(vd,r,t)},e.h);var n=nr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),zv(function(){return o(gi,e,n)})):(n=nr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function o$(e,r){return r.f=e.f,gi(r)}var B=yl,dn=hl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(dn,e,l,v)}else{var u=c.a;return p(dn,i,l,u)}});return p(dn,i,p(dn,e,r,t),a)});var yt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(yt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),vo=function(e){return p(yt,y(function(r,n,a){return o(B,M(r,n),a)}),z,e)},bi=1,i$=2,hi=0,me=function(e){return{$:1,a:e}},wt=$(function(e,r){return{$:3,a:e,b:r}}),$o=$(function(e,r){return{$:0,a:e,b:r}}),_i=$(function(e,r){return{$:1,a:e,b:r}}),te=function(e){return{$:0,a:e}},c$=function(e){return{$:2,a:e}},X=function(e){return{$:0,a:e}},H={$:1},l$=ql,u$=su,Le=Jo,Cr=$(function(e,r){return o(Ul,e,Yn(r))}),Lt=$(function(e,r){return b(o(Il,e,r))}),Ci=function(e){return o(Cr,`
    `,o(Lt,`
`,e))},Zn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),mr=function(e){return p(Zn,$(function(r,n){return n+1}),0,e)},v$=wl,$$=y(function(e,r,n){e:for(;;)if(N(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Xn=$(function(e,r){return p($$,e,r,z)}),yi=$(function(e,r){return p(v$,e,o(Xn,0,mr(r)-1),r)}),Ye=ru,wi=function(e){var r=Ye(e);return 97<=r&&r<=122},Li=function(e){var r=Ye(e);return r<=90&&65<=r},f$=function(e){return wi(e)||Li(e)},s$=function(e){var r=Ye(e);return r<=57&&48<=r},m$=function(e){return wi(e)||Li(e)||s$(e)},ze=function(e){return p(Zn,B,z,e)},Wr=jl,d$=$(function(e,r){return`

(`+(Le(e+1)+(") "+Ci(p$(r))))}),p$=function(e){return o(g$,e,z)},g$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var g=Wr(n);if(g.$===1)return!1;var C=g.a,w=C.a,_=C.b;return f$(w)&&o(l$,m$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Le(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(Cr,"",ze(r)):"Json.Decode.oneOf"}(),h=m+(" failed in the following "+(Le(mr(s))+" ways:"));return o(Cr,`

`,o(B,h,o(yi,d$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Cr,"",ze(r)):"!"}();default:var d=e.a,f=e.b,h=function(){return r.b?"Problem with the value at json"+(o(Cr,"",ze(r))+`:

    `):`Problem with the given value:

`}();return h+(Ci(o(u$,4,f))+(`

`+d))}}),xe=32,Ra=A(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Na=ml,Si=Bl,St=$(function(e,r){return Zt(r)/Zt(e)}),b$=Ml,rn=Si(o(St,2,xe)),zi=S(Ra,0,rn,Na,Na),xi=pl,Ti=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Pi=Al,ja=dl,Ge=$(function(e,r){return N(e,r)>0?e:r}),h$=function(e){return{$:0,a:e}},zt=gl,_$=$(function(e,r){e:for(;;){var n=o(zt,xe,e),a=n.a,t=n.b,i=o(B,h$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ze(i)}}),C$=function(e){var r=e.a;return r},y$=$(function(e,r){e:for(;;){var n=Si(r/xe);if(n===1)return o(zt,xe,e).a;var a=o(_$,e,z),t=n;e=a,r=t;continue e}}),Di=$(function(e,r){if(r.l){var n=r.l*xe,a=Pi(o(St,xe,n-1)),t=e?ze(r.z):r.z,i=o(y$,t,r.l);return S(Ra,ja(r.p)+n,o(Ge,5,a*rn),i,r.p)}else return S(Ra,ja(r.p),rn,Na,r.p)}),w$=Ce(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Di,!1,{z:a,l:n/xe|0,p:t});var i=Ti(p(xi,xe,r,e)),c=e,l=r-xe,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),L$=$(function(e,r){if(e<=0)return zi;var n=e%xe,a=p(xi,n,e-n,r),t=e-n-xe;return L(w$,r,t,e,z,a)}),Ne=function(e){return!e.$},P=uu,q=tu,T=lu,oe=ou,En=vu,S$=$u,we=au,xt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},G=Sr("div"),z$=function(e){return{$:2,a:e}},Mi=$(function(e,r){return e}),ki=$(function(e,r){return{cv:r.cv,e8:e,cA:r.cA,dL:r.dL,fJ:r.fJ,f7:r.f7,dk:r.dk,gw:r.gw}}),Ar=function(e){return e},x$=Ar,fo=Fe(function(e,r,n,a,t,i){return{dR:i,dT:r,eu:a,ex:n,eA:e,eB:t}}),T$=Yl,yr=Wl,kr=Ol,ln=$(function(e,r){return e<1?r:p(kr,e,yr(r),r)}),Qn=Xl,Kn=function(e){return e===""},ea=$(function(e,r){return e<1?"":p(kr,0,e,r)}),Bi=Ql,so=Ce(function(e,r,n,a,t){if(Kn(t)||o(T$,"@",t))return H;var i=o(Qn,":",t);if(i.b){if(i.b.b)return H;var c=i.a,l=Bi(o(ln,c+1,t));if(l.$===1)return H;var u=l;return X(se(fo,e,o(ea,c,t),u,r,n,a))}else return X(se(fo,e,t,H,r,n,a))}),mo=A(function(e,r,n,a){if(Kn(a))return H;var t=o(Qn,"/",a);if(t.b){var i=t.a;return L(so,e,o(ln,i,a),r,n,o(ea,i,a))}else return L(so,e,"/",r,n,a)}),po=y(function(e,r,n){if(Kn(n))return H;var a=o(Qn,"?",n);if(a.b){var t=a.a;return S(mo,e,X(o(ln,t+1,n)),r,o(ea,t,n))}else return S(mo,e,H,r,n)});$(function(e,r){if(Kn(r))return H;var n=o(Qn,"#",r);if(n.b){var a=n.a;return p(po,e,X(o(ln,a+1,r)),o(ea,a,r))}else return p(po,e,H,r)});var P$=Zl,Tt=function(e){},un=Lr,D$=un(0),Ai=A(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(Zn,e,r,ze(m)):S(Ai,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),cr=y(function(e,r,n){return S(Ai,e,r,0,n)}),ie=$(function(e,r){return p(cr,$(function(n,a){return o(B,e(n),a)}),z,r)}),Vn=Aa,Pt=$(function(e,r){return o(Vn,function(n){return un(e(n))},r)}),M$=y(function(e,r,n){return o(Vn,function(a){return o(Vn,function(t){return un(o(e,a,t))},n)},r)}),k$=function(e){return p(cr,M$(B),un(z),e)},B$=yu,A$=$(function(e,r){var n=r;return Zo(o(Vn,B$(e),n))}),F$=y(function(e,r,n){return o(Pt,function(a){return 0},k$(o(ie,A$(e),r)))}),E$=y(function(e,r,n){return un(0)}),V$=$(function(e,r){var n=r;return o(Pt,e,n)});qe.Task=_u(D$,F$,E$,V$);var R$=Qo("Task"),Dt=$(function(e,r){return R$(o(Pt,e,r))}),N$=nv,j$=Rl,Rn={$:1},Fi=function(e){return{$:2,a:e}},ra={$:0},ke=$(function(e,r){return{$:0,a:e,b:r}}),re=y(function(e,r,n){return r(e(n))}),Gr=function(e){var r=e.b.B;return r.a},W$=function(e){var r=e.a,n=e.b.X,a=e.b.B,t=e.b.ag;if(t.b){var i=t.a,c=t.b;return X(o(ke,r,{B:i,ag:c,X:o(B,a,n)}))}else return H},Ei=function(e){var r=e.b;return o(ke,ra,r)},dr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),G$=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.f7.dK?Ei(n):n;case 2:var i=a.a.dq;return(N(i+r.dL,Gr(n).cv)>0?o(re,W$,dr(o(ke,Rn,t))):Ar)(o(ke,Fi({dq:i+r.dL}),t));default:var c=t.B,l=c.a,u=c.b,v=o(ki,l.e8,je(r,{cv:l.cv+r.dL})),s=o(e,v,u);return o(ke,ra,{B:M(v,s),ag:z,X:o(B,t.B,t.X)})}}),Vi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),H$=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),I$=$(function(e,r){return ze(p(H$,e,r,z))}),Ri=y(function(e,r,n){if(r<=0)return z;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,h=f.b,g=h.a,C=h.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,g,o(I$,r-4,C))))):o(B,_,o(B,c,o(B,s,o(B,g,p(Ri,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var w=a.b,_=w.a;return b([_])}}),U$=$(function(e,r){return p(Ri,0,e,r)}),O$=$(function(e,r){var n=r.b.X,a=r.b.B,t=r.b.ag,i=ae(ze(n),ae(b([a]),t)),c=o(U$,e,i),l=o(Vi,e,i);if(l.b){var u=l.a,v=l.b;return o(ke,Rn,{B:u,ag:v,X:ze(c)})}else{var s=ze(c);if(s.b){var m=s.a,d=s.b;return o(ke,Rn,{B:m,ag:z,X:d})}else return r}}),J$=function(e){var r=e.b;return o(ke,Rn,r)},q$=function(e){var r=e.b;return o(ke,Fi({dq:Gr(e).cv}),r)},Y$=$(function(e,r){switch(e.$){case 1:return J$(r);case 2:return Ei(r);case 3:return q$(r);default:var n=e.a;return o(O$,n,r)}}),Ni=$(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),Z$=$(function(e,r){return je(r,{aD:e(r.aD)})}),X$=function(e){return{$:3,a:e}},Q$=function(e){return{$:2,a:e}},K$=$(function(e,r){return{$:0,a:e,b:r}}),ef=$(function(e,r){return{$:1,a:e,b:r}}),Se=$(function(e,r){if(r.$)return H;var n=r.a;return X(e(n))}),j=function(e){return e<0?-e:e},Mt=Kl,rf=y(function(e,r,n){return o(dr,0/0,Mt(o(e,r,n)))}),ji=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),nf=Hl,Wi=function(e){return p(nf,B,z,e)},af=$(function(e,r){var n=o(ji,function(a){return a!=="0"&&a!=="."},Wi(r));return ae(e&&n?"-":"",r)}),ne=Jo,Wa=Nl,Gi=nu,Hi=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Wr(n);if(a.$===1)return"01";var t=a.a;return o(Wa,"0",Hi(t))}else{var i=Ye(r);return i>=48&&i<57?o(Wa,Gi(i+1),n):"0"}},Ga=kl,tf=Vl,na=function(e){return o(Wa,e,"")},Ii=y(function(e,r,n){return e<=0?n:p(Ii,e>>1,ae(r,r),e&1?ae(n,r):n)}),nn=$(function(e,r){return p(Ii,e,r,"")}),Ha=y(function(e,r,n){return ae(n,o(nn,e-yr(n),na(r)))}),Ia=Gl,Ui=function(e){var r=o(Lt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return M(n,t)}else{var n=r.a;return M(n,"0")}else return M("0","0")},of=function(e){var r=o(Lt,"e",ne(j(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(dr,0,Bi(o(P$,"+",t)?o(ln,1,t):t)),c=Ui(n),l=c.a,u=c.b,v=ae(l,u),s=i<0?o(dr,"0",o(Se,function(m){var d=m.a,f=m.b;return d+("."+f)},o(Se,Ni(na),Wr(ae(o(nn,j(i),"0"),v))))):p(Ha,i+1,"0",v);return ae(e<0?"-":"",s)}else{var n=r.a;return ae(e<0?"-":"",n)}else return""},cf=y(function(e,r,n){if(Ga(n)||tf(n))return ne(n);var a=n<0,t=Ui(of(j(n))),i=t.a,c=t.b,l=yr(i)+r,u=ae(o(nn,-l+1,"0"),p(Ha,l,"0",ae(i,c))),v=yr(u),s=o(Ge,1,l),m=o(e,a,p(kr,s,v,u)),d=p(kr,0,s,u),f=m?Ia(o(dr,"1",o(Se,Hi,Wr(Ia(d))))):d,h=yr(f),g=f==="0"?f:r<=0?ae(f,o(nn,j(r),"0")):N(r,yr(c))<0?p(kr,0,h-r,f)+("."+p(kr,h-r,h,f)):ae(i+".",p(Ha,r,"0",c));return o(af,a,g)}),Oi=cf($(function(e,r){var n=Wr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ye(t))})),lf=rf(Oi),uf=y(function(e,r,n){var a=o(St,10,j(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(lf,t,n)}),Ji=Cl,qi=$(function(e,r){e:for(;;){if(r.$===-2)return H;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Ji,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return X(a);default:var l=e,u=i;e=l,r=u;continue e}}}),E=Ce(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Xe={$:-2},Er=Ce(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return L(E,0,r,n,L(E,1,v,s,m,d),L(E,1,i,c,l,u))}else return L(E,e,i,c,L(E,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var h=f.b,g=f.c,C=f.d,w=f.e,d=a.e;return L(E,0,v,s,L(E,1,h,g,C,w),L(E,1,r,n,d,t))}else return L(E,e,r,n,a,t)}),Ua=y(function(e,r,n){if(n.$===-2)return L(E,0,e,r,Xe,Xe);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Ji,e,t);switch(u){case 0:return L(Er,a,t,i,p(Ua,e,r,c),l);case 1:return L(E,a,t,r,c,l);default:return L(Er,a,t,i,c,p(Ua,e,r,l))}}),wn=y(function(e,r,n){var a=p(Ua,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return L(E,1,t,i,c,l)}else{var u=a;return u}}),vf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Yi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,h=d.c,g=d.d,C=d.e,w=v.e;return L(E,0,f,h,L(E,1,n,a,L(E,0,i,c,l,u),g),L(E,1,s,m,C,w))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,x=e.e;x.a;var s=x.b,m=x.c,d=x.d,w=x.e;return L(E,1,n,a,L(E,0,i,c,l,u),L(E,0,s,m,d,w))}else return e},go=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var h=f.b,g=f.c,C=f.d,w=f.e;return L(E,0,i,c,L(E,1,u,v,s,m),L(E,1,n,a,d,L(E,0,h,g,C,w)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,x=_.d,d=_.e,F=e.e;F.a;var h=F.b,g=F.c,C=F.d,w=F.e;return L(E,1,n,a,L(E,0,i,c,x,d),L(E,0,h,g,C,w))}else return e},$f=ut(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return L(E,n,l,u,v,L(E,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,go(r)}else break e;else return c.a,c.d,go(r);else break e;return r}}),Ln=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,L(E,r,n,a,Ln(t),l);var u=Yi(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return L(Er,v,s,m,Ln(d),f)}else return Xe}else return L(E,r,n,a,Ln(t),l)}else return Xe},Yr=$(function(e,r){if(r.$===-2)return Xe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(N(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,L(E,n,a,t,o(Yr,e,i),c);var u=Yi(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return L(Er,v,s,m,o(Yr,e,d),f)}else return Xe}else return L(E,n,a,t,o(Yr,e,i),c);else return o(ff,e,Oo($f,e,r,n,a,t,i,c))}),ff=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(sr(e,a)){var l=vf(c);if(l.$===-1){var u=l.b,v=l.c;return L(Er,n,u,v,i,Ln(c))}else return Xe}else return L(Er,n,a,t,i,o(Yr,e,c))}else return Xe}),sf=$(function(e,r){var n=o(Yr,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return L(E,1,a,t,i,c)}else{var l=n;return l}}),pn=y(function(e,r,n){var a=r(o(qi,e,n));if(a.$)return o(sf,e,n);var t=a.a;return p(wn,e,t,n)}),mf=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(pn,r,Se(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(ef,M(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(pn,r,Se(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(K$,M(i,c),p(uf,i,c,n))}));case 3:var r=e.a,n=e.b;return o(pn,r,Se(function(a){return a.$===3?X$(n):a}));default:var r=e.a,n=e.b;return o(pn,r,Se(function(a){return a.$===2?Q$(n):a}))}},df=function(e){return Z$(mf(e))},pf=$(function(e,r){return o(ie,df(e),r)}),gf=$(function(e,r){return je(r,{e8:o(pf,e,r.e8)})}),bf=$(function(e,r){var n=r.a,a=r.b;return o(ke,n,je(a,{B:o(Ni,gf(e),a.B)}))}),hf=$(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),_f=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(ke,a,je(t,{B:o(hf,o(e,i.a,r),i)}))}),Cf=A(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return je(a,{aX:!a.aX});case 2:var t=n.a;return je(a,{G:p(G$,e,t,a.G)});case 3:var i=n.a;return je(a,{G:o(bf,i,a.G)});case 4:var c=n.a;return je(a,{G:p(_f,r,c,a.G)});default:var l=n.a;return je(a,{G:o(Y$,l,a.G)})}}),yf=$(function(e,r){return o(ke,ra,{B:M(e,r(e)),ag:z,X:z})}),wf=wu,bo=wf(z),Nn=cu,an=iu,Lf=Tu("tick",o(P,function(e){return o(P,function(r){return o(P,function(n){return o(P,function(a){return o(P,function(t){return o(P,function(i){return o(P,function(c){return we({cv:c,cA:i,dL:t,fJ:a,f7:n,dk:r,gw:e})},o(T,"clock",oe))},o(T,"devicePixelRatio",oe))},o(T,"dt",oe))},o(T,"keyboard",o(P,function(a){return o(P,function(t){return o(P,function(i){return o(P,function(c){return o(P,function(l){return o(P,function(u){return o(P,function(v){return o(P,function(s){return o(P,function(m){return we({eV:m,e9:s,dK:v,fi:u,fM:l,f8:c,gc:i,gh:t,eO:a})},o(T,"alt",q))},o(T,"control",q))},o(T,"down",q))},o(T,"downs",Nn(an)))},o(T,"left",q))},o(T,"pressedKeys",Nn(an)))},o(T,"right",q))},o(T,"shift",q))},o(T,"up",q))))},o(T,"pointer",o(P,function(n){return o(P,function(a){return o(P,function(t){return o(P,function(i){return o(P,function(c){return o(P,function(l){return o(P,function(u){return o(P,function(v){return we({dK:v,fG:u,fT:l,gd:c,ge:i,eO:t,gz:a,gD:n})},o(T,"down",q))},o(T,"isDown",q))},o(T,"move",q))},o(T,"rightDown",q))},o(T,"rightUp",q))},o(T,"up",q))},o(T,"x",oe))},o(T,"y",oe))))},o(T,"screen",o(P,function(r){return o(P,function(n){return we({fv:n,gx:r})},o(T,"height",oe))},o(T,"width",oe))))},o(T,"wheel",o(P,function(e){return o(P,function(r){return we({fd:r,fe:e})},o(T,"deltaX",oe))},o(T,"deltaY",oe))))),Sf=function(e){return{$:4,a:e}},zf={$:0},xf=Yo,Ee=$(function(e,r){return o(ri,e,xf(r))}),R=Ee("className"),Tf=function(e){var r=e.b.B;return r.b},jn=Ee("id"),Pf=Au,Wn=Pf,Df=Fu,Q=Df,Mf={$:1},kf=function(e){return{$:3,a:e}},Bf=function(e){return{$:5,a:e}},ho=Sr("a"),kt=Sr("button"),_o=function(e){return o(Ee,"href",Ru(e))},Af=hr("clip-rule"),be=hr("d"),Ff=hr("fill"),Zi=Ko("http://www.w3.org/2000/svg"),Ef=Zi("svg"),Vf=hr("viewBox"),Rf=o(Eu,"http://www.w3.org/XML/1998/namespace","xml:space"),Te=Ef(b([Vf("0 0 24 24"),Ff("currentColor"),o(Q,"width","100%"),o(Q,"height","100%"),Rf("http://www.w3.org/2000/svg")])),Nf=hr("fill-rule"),he=Zi("path"),wr={fb:Te(b([o(he,b([be("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),z)])),fp:Te(b([o(he,b([be("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),z)])),fu:Te(b([o(he,b([be("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),z)])),fU:Te(b([o(he,b([be("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),z),o(he,b([be("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),z)])),fV:Te(b([o(he,b([be("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),z),o(he,b([be("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),z)])),f4:Te(b([o(he,b([be("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),z)])),f5:Te(b([o(he,b([be("M7 5V19L18 12L7 5Z")]),z)])),f6:Te(b([o(he,b([be("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),z)])),f7:Te(b([o(he,b([be("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),z)])),gr:Te(b([o(he,b([Nf("evenodd"),Af("evenodd"),be("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),z)])),gs:Te(b([o(he,b([be("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),z)])),gI:Te(b([o(he,b([be("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),z)]))},jf=function(e){return{$:0,a:e}},Xi=ei,Qi=$(function(e,r){return o(Xi,e,jf(r))}),Bt=function(e){return o(Qi,"click",we(e))},Co=Ee("target"),Wf=Ee("title"),Oa=$(function(e,r){if(r.$===-2)return Xe;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return L(E,n,a,o(e,a,t),o(Oa,e,i),o(Oa,e,c))}),Gf=Fa,or=Gf,Hf=function(e){return p(yt,y(function(r,n,a){return o(B,n,a)}),z,e)},If=$(function(e,r){return{$:3,a:e,b:r}}),Uf=$(function(e,r){return{$:2,a:e,b:r}}),Of=$(function(e,r){return{$:0,a:e,b:r}}),Jf=$(function(e,r){return{$:1,a:e,b:r}}),vn=A(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),qf=S(vn,0/255,0/255,0/255,1),Yf=Yo,Ki=$(function(e,r){return o(ri,e,Yf(r))}),Zf=Ki("checked"),He=Fl,Xf=y(function(e,r,n){return ae(o(nn,e-yr(n),na(r)),n)}),Qf=Sl,ec=function(e){var r=function(n){return n<10?Le(n):na(Gi(87+n))};return e<16?r(e):ae(ec(e/16|0),r(o(Qf,16,e)))},Kf=o(re,ec,o(Xf,2,"0")),rc=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aT:t,cs:a,cD:n,de:r}},es=function(e){var r=rc(e),n=r.de,a=r.cD,t=r.cs;return o(Cr,"",o(B,"#",o(ie,o(re,He,Kf),b([n*255,a*255,t*255]))))},Ja=Ee("htmlFor"),qa=$(function(e,r){if(r.$)return H;var n=r.a;return e(n)}),Gn=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return e(n)}}),rs=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),nc=$(function(e,r){return p(cr,rs(e),z,r)}),ac=A(function(e,r,n,a){return{fB:r,fR:e,f_:n,gl:a}}),ns=cv,as=eu,ts=$(function(e,r){if(r.$)return me(e);var n=r.a;return te(n)}),os=iv,is=function(e){return o(os,{e2:!1,fW:!1},e)},tc=function(e){if(e.b){var r=e.a;return e.b,X(r)}else return H},cs=$(function(e,r){if(r.$){var a=r.a;return me(a)}else{var n=r.a;return te(e(n))}}),ls=function(e){return{$:2,a:e}},us=function(e){return{$:0,a:e}},vs=function(e){return{$:1,a:e}},fa=$(function(e,r){return Ye(r)-Ye(e)}),sa=y(function(e,r,n){var a=Ye(n);return N(Ye(e),a)<1&&N(a,Ye(r))<1}),$s=$(function(e,r){var n=function(t){return N(t,e)<0?te(t):me(vs(r))},a=p(sa,"0","9",r)?te(o(fa,"0",r)):p(sa,"a","z",r)?te(10+o(fa,"a",r)):p(sa,"A","Z",r)?te(10+o(fa,"A",r)):me(us(r));return o(Gn,n,a)}),oc=$(function(e,r){var n=Wr(r);if(n.$===1)return te(0);var a=n.a,t=a.a,i=a.b;return o(Gn,function(c){return o(Gn,function(l){return te(c+l*e)},o(oc,e,i))},o($s,e,t))}),fs=$(function(e,r){return 2<=e&&e<=36?o(oc,e,Ia(r)):me(ls(e))}),ss=fs(16),ms=y(function(e,r,n){return S(vn,e,r,n,1)}),ds=A(function(e,r,n,a){return S(vn,e,r,n,a)}),aa=Ll,ps=$(function(e,r){var n=o(aa,10,e);return He(r*n)/n}),gs=Jl,bs=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Wi(n);if(a.b&&!a.b.b){var t=a.a;return as(b([t,t]))}else return n};return o(re,gs,o(re,function(n){return o(Se,function(a){return p(ns,1,a,n)},is(e))},o(re,qa(tc),o(re,Se(function(n){return n.gl}),o(re,Se(nc(Ar)),o(re,ts("Parsing hex regex failed"),Gn(function(n){var a=o(ie,o(re,r,o(re,ss,cs(b$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return te(S(ds,t/255,c/255,u/255,o(ps,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return te(p(ms,t/255,c/255,u/255))}else break e;return me("Parsing ints from hex failed")})))))))}(),Hn=Sr("input"),Ya=Sr("label"),Za=Ee("name"),ic=$(function(e,r){return p(cr,T,r,e)}),hs=o(ic,b(["target","checked"]),q),_s=function(e){return o(Qi,"change",o(En,e,hs))},Cs=function(e){return M(e,!0)},ys=function(e){return{$:1,a:e}},ws=$(function(e,r){return o(Xi,e,ys(r))}),Ls=o(ic,b(["target","value"]),an),At=function(e){return o(ws,"input",o(En,Cs,o(En,e,Ls)))},cc=Ee("max"),lc=Ee("min"),uc=function(e){return o(Ee,"step",e)},In=Ee("type"),Ft=Ee("value"),yo=function(e){var r=e.cG,n=e.dv,a=e.cW,t=e.cS,i=e.dn,c=e.c$;return o(G,z,b([o(Ya,b([Ja(r)]),b([o(G,b([R("relative w-full")]),b([o(G,b([R("inline-block")]),b([or(r)])),o(G,b([R("inline-block float-right")]),b([or(ne(n))]))]))])),o(Hn,b([In("range"),o(Q,"width","100%"),jn(r),Za(r),lc(ne(a)),cc(ne(t)),Ft(ne(n)),uc(ne(i)),At(o(re,Mt,o(re,dr(42),c)))]),z)]))},Ss=$(function(e,r){if(r.$)return e;var n=r.a;return n}),zs=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(G,b([R("h-12 py-4")]),b([o(Ya,b([R("block"),Ja(e)]),b([o(Hn,b([R("relative bottom-[1px] align-middle mr-2"),In("checkbox"),jn(e),Za(e),_s(If(e)),Zf(c)]),z),or(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return yo({cG:e,cS:i,cW:t,c$:Of(e),dn:.01*(i-t),dv:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return yo({cG:e,cS:i,cW:t,c$:o(re,He,Jf(e)),dn:1,dv:c});default:var c=r.a;return o(G,z,b([o(G,b([o(Q,"margin-bottom","6px")]),b([o(Ya,b([Ja(e)]),b([or(e)]))])),o(Hn,b([In("color"),o(Q,"width","100%"),o(Q,"height","26px"),o(Q,"padding","0px"),jn(e),Za(e),At(function(l){return o(Uf,e,o(Ss,qf,bs(l)))}),Ft(es(c))]),z)]))}}),xs=function(e){return o(G,b([R("p-4 border-y-[0.5px] border-white20")]),b([o(G,b([R("text-lg pb-2")]),b([or(e.fX)])),o(G,b([R("pl-2 pr-2")]),Hf(o(Oa,zs,e.aD)))]))},Ts=function(e){return o(G,b([R("text-xs text-white60")]),o(ie,xs,e))},Ps=function(e){return o(G,b([R("absolute left-[104px] bottom-2 text-sm text-white40")]),b([or("clock: "+o(Oi,3,Gr(e).cv))]))},Ds=function(e){e.a;var r=e.b.X;return o(Se,function(n){return He(60/(Gr(e).cv-n))},o(Se,o(re,C$,function(n){return n.cv}),tc(o(Vi,59,r))))},Ms=function(e){return o(G,b([R("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Ds(e);if(r.$===1)return b([or("... Fps")]);var n=r.a;return b([or(Le(n)+" Fps")])}())},ks=function(e){return{$:0,a:e}},Bs=function(e){var r=e.b.X;return mr(r)},As=function(e){var r=e.b.X;e.b.B;var n=e.b.ag;return mr(r)+1+mr(n)},Fs=function(e){return o(Hn,b([R("absolute w-full"),In("range"),lc(Le(0)),cc(Le(As(e)-1)),Ft(Le(Bs(e))),uc(Le(1)),At(o(re,Mt,o(re,dr(42),o(re,He,ks))))]),z)},wo={$:1},Lo={$:3},So={$:2},Xa=function(e){return!e.b},vc=Ki("disabled"),ma=y(function(e,r,n){return o(kt,b([R("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),R(n),vc(e),Bt(r)]),b([or("REC")]))}),da=y(function(e,r,n){return o(kt,b([R("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),vc(e),Bt(n)]),b([o(G,b([R("w-4 h-6 text-white60 hover:text-white80")]),b([r]))]))}),Es=function(e){var r=e.a,n=e.b.ag;return o(G,b([R("py-1")]),b([function(){switch(r.$){case 0:return p(ma,!1,wo,"text-red-500 font-bold");case 1:return p(ma,!1,So,"text-white60 hover:text-white80 font-bold");default:return p(ma,!0,So,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(da,Xa(n),wr.f5,Lo);case 1:return p(da,Xa(n),wr.f5,Lo);default:return p(da,!1,wr.f4,wo)}}()]))},Vs=function(e){return o(G,b([R("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([Fs(e),Es(e),Ms(e),Ps(e)]))},Rs=function(e){var r=e.a;return sr(r,ra)},Ns=$(function(e,r){var n=Rs(r.G)?o(G,z,z):o(G,b([R("absolute pointer-events-none w-8 h-8"),o(Q,"left",ne(e.f7.gz+.5*e.dk.gx)+"px"),o(Q,"top",ne(-e.f7.gD+.5*e.dk.fv)+"px")]),b([o(G,b([R(e.f7.fG?"text-black80":"text-black40")]),b([wr.f7]))]));return o(G,z,b([n]))}),js=$(function(e,r){var n=o(kt,b([R(r.aX?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Bt(Mf),Wf("Distraction Free Mode")]),b([wr.gI])),a=40,t=260,i=o(G,b([R("absolute w-8 bottom-12")]),b([o(ho,b([R("text-twitterBlue40 hover:text-twitterBlue"),_o("https://twitter.com/AzizErkalSelman"),Co("_blank")]),b([wr.gs]))])),c=80,l=o(G,b([R("absolute w-8 bottom-2")]),b([o(ho,b([R("text-githubCat40 hover:text-githubCat"),_o("https://github.com/erkal/elm-3d-playground-exploration"),Co("_blank")]),b([wr.fp]))])),u=e.dk.gx>640?O(e.dk.fv,a+t,e.dk.gx-(a+t)):O(e.dk.fv-c,a,e.dk.gx-a),v=u.a,s=u.b,m=u.c;return r.aX?o(G,b([R("fixed w-10 h-10 p-1")]),b([n])):o(G,z,b([o(G,b([R("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(Q,"width",ne(a)+"px")]),b([n,i,l])),o(G,b([R("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(Q,"width",ne(t)+"px"),o(Q,"height",ne(v)+"px")]),b([o(Wn,kf,Ts(Gr(r.G).e8))])),o(G,b([R("absolute bottom-0"),o(Q,"left",ne(s)+"px"),o(Q,"height",ne(c)+"px"),o(Q,"width",ne(m)+"px")]),b([o(Wn,Bf,Vs(r.G))])),o(Ns,e,r)]))}),Ws=y(function(e,r,n){var a=Tf(n.G),t=Gr(n.G);return o(G,b([R("bg-black40"),R("select-none"),R("antialiased"),R("font-mono"),o(Q,"width",ne(t.dk.gx)+"px"),o(Q,"height",ne(t.dk.fv)+"px")]),b([o(G,b([R("fixed")]),b([o(Wn,Mi(zf),o(e,t,a))])),o(G,b([jn("gui")]),b([o(js,t,n),o(Wn,Sf,o(r,t,a))]))]))}),Gs=Fe(function(e,r,n,a,t,i){var c=$(function(u,v){return M(S(Cf,r,i,u,v),bo)}),l=function(u){var v=o(ki,n,u.fD);return M({aX:u.fD.dk.gx<500,G:o(yf,v,a)},bo)};return N$({fC:l,gm:Mi(Lf(z$)),gt:c,gv:o(Ws,e,t)})}),Hs=A(function(e,r,n,a){return se(Gs,e,r,n,a,$(function(t,i){return o(G,z,z)}),y(function(t,i,c){return c}))}),Is=y(function(e,r,n){return S(Hs,e,r,z,n)}),$c=y(function(e,r,n){return{e4:r,dH:e,aN:n}}),tn={b5:3,cZ:300},Us=A(function(e,r,n,a){var t=O(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(h){var g=h<0?h+1:h>1?h-1:h;return g*6<1?v+(u-v)*g*6:g*2<1?u:g*3<2?v+(u-v)*(2/3-g)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return S(vn,f,d,m,a)}),fc=y(function(e,r,n){return S(Us,e,r,n,1)}),Os=function(e){var r=tn.cZ,n=tn.b5/r,a=function(t){return p(fc,t/r,.3,.5)};return o(ie,function(t){return p($c,a(t),{gz:0,gD:0},t*n)},o(Xn,0,r-1))},Qa=xl,Js=$(function(e,r){return(r-Pi(r/e)*e)/e}),Un=zl,qs=function(e){return 2*Un*e},Ys=A(function(e,r,n,a){return e+(r-e)*(1+Qa(qs(o(Js,n,a))))/2}),Zs=function(e){return p(fc,S(Ys,0,1,2,e),.3,.5)},Xs=$(function(e,r){return N(mr(r),tn.cZ)<0?o(B,p($c,Zs(e.cv),{gz:0,gD:0},.3),r):r}),sc=$(function(e,r){return N(e,r)<0?e:r}),Qs=function(e){return ie(function(r){return je(r,{aN:o(sc,tn.b5,r.aN+e.dL)})})},mc=$(function(e,r){return p(cr,$(function(n,a){return e(n)?o(B,n,a):a}),z,r)}),Ks=function(e){return mc(function(r){return!sr(r.aN,tn.b5)})},em=$(function(e,r){return o(Xs,e,o(Ks,e,o(Qs,e,r)))}),zo=function(e){return e*Un/180},rm=Dl,ur=El,nm=$(function(e,r){var n=e,a=r,t=a.dB-n.dB,i=a.gD-n.gD,c=a.gz-n.gz,l=o(Ge,j(c),o(Ge,j(i),j(t)));if(l){var u=t/l,v=i/l,s=c/l,m=ur(s*s+v*v+u*u);return X({gz:s/m,gD:v/m,dB:u/m})}else return H}),pa=function(e){return e},Et=$(function(e,r){var n=e,a=r;return{gz:a.gD*n.dB-a.dB*n.gD,gD:a.dB*n.gz-a.gz*n.dB,dB:a.gz*n.gD-a.gD*n.gz}}),Sn=function(e){var r=e,n=o(Ge,j(r.gz),o(Ge,j(r.gD),j(r.dB)));if(n){var a=r.dB/n,t=r.gD/n,i=r.gz/n,c=ur(i*i+t*t+a*a);return X({gz:i/c,gD:t/c,dB:a/c})}else return H},Ka=$(function(e,r){var n=e,a=r;return{gz:a.gz-n.gz,gD:a.gD-n.gD,dB:a.dB-n.dB}}),am=$(function(e,r){var n=e,a=r;return a.gz*n.gz+a.gD*n.gD+a.dB*n.dB}),dc=$(function(e,r){var n=e,a=r;return N(a,n)>0}),tm=$(function(e,r){var n=e,a=r;return N(a,n)<0}),om=$(function(e,r){var n=e,a=r;return{gz:a.gz-n.gz,gD:a.gD-n.gD,dB:a.dB-n.dB}}),im=$(function(e,r){var n=e,a=r,t=a.gz*n.gz+a.gD*n.gD+a.dB*n.dB;return{gz:n.gz*t,gD:n.gD*t,dB:n.dB*t}}),cm=function(e){var r=e;return{gz:-r.gz,gD:-r.gD,dB:-r.dB}},Vr=0,pc={gz:0,gD:0,dB:0},lm=y(function(e,r,n){return o(qa,function(a){var t=o(om,o(im,a,r),r);return o(qa,function(i){var c=o(Et,r,e),l=o(am,n,c),u=o(dc,Vr,l)?c:o(tm,Vr,l)?cm(c):pc;return o(Se,function(v){return O(a,i,v)},Sn(u))},Sn(t))},Sn(e))}),um=function(e){var r=e,n=j(r.dB),a=j(r.gD),t=j(r.gz);if(N(t,a)<1)if(N(t,n)<1){var i=ur(r.dB*r.dB+r.gD*r.gD);return{gz:0,gD:-r.dB/i,dB:r.gD/i}}else{var i=ur(r.gD*r.gD+r.gz*r.gz);return{gz:-r.gD/i,gD:r.gz/i,dB:0}}else if(N(a,n)<1){var i=ur(r.dB*r.dB+r.gz*r.gz);return{gz:r.dB/i,gD:0,dB:-r.gz/i}}else{var i=ur(r.gz*r.gz+r.gD*r.gD);return{gz:-r.gD/i,gD:r.gz/i,dB:0}}},gc=function(e){var r=um(e),n=r,a=n,t=e,i=t,c={gz:i.gD*a.dB-i.dB*a.gD,gD:i.dB*a.gz-i.gz*a.dB,dB:i.gz*a.gD-i.gD*a.gz};return M(r,c)},vm=function(e){var r=e;return r},Rr=function(e){return e},$m=$(function(e,r){var n=gc(e),a=n.a,t=n.b;return Rr({c0:r,dz:a,dA:t,dC:e})}),fm=function(e){var r=o(Ka,e.a1,e.dQ),n=vm(e.eP),a=o(Et,r,n),t=p(lm,r,n,a);if(t.$){var v=Sn(r);if(v.$){var m=gc(e.eP),d=m.a,f=m.b;return Rr({c0:e.dQ,dz:f,dA:e.eP,dC:d})}else{var s=v.a;return o($m,s,e.dQ)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Rr({c0:e.dQ,dz:u,dA:l,dC:c})}},bc={gz:0,gD:0,dB:0},sm=function(e){return{$:0,a:e}},Be=function(e){var r=e;return j(r)},zn=function(e){var r=e;return .5*r},mm=Pl,dm=function(e){var r=e;return mm(r)},pm=function(e){var r=zn(Be(e.eQ)),n=dm(r);return{dd:sm(n),dx:e.dx}},ar=function(e){return e},Vt=ar({gz:0,gD:1,dB:0}),et=function(e){return e},gm=function(e){var r=e.a1,n=e.dQ,a=e.eP;return pm({eQ:et(2*rm(.5)),dx:fm({dQ:pa(n),a1:pa(r),eP:o(dr,Vt,o(nm,bc,pa(a)))})})},ga=function(e){return e/255},bm=y(function(e,r,n){return S(vn,ga(e),ga(r),ga(n),1)}),hm=function(e){var r=e;return r},_m=function(e){var r=e;return hm(r.eY)},hc=A(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Cm=A(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),ym=A(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),wm=A(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Lm=A(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Sm=A(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),zm=A(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),xm=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return S(zm,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return S(hc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return S(Cm,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return S(ym,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return S(Sm,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return S(wm,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return S(Lm,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Tm={$:0},On=function(e){var r=e;return r},le=$(function(e,r){var n=e,a=r;return o(Ge,n,a)}),fe=$(function(e,r){var n=e,a=r;return o(sc,n,a)}),Pm=ce(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=On(c(u)),m=o(fe,s.em,e),d=o(le,s.ej,r),f=o(fe,s.en,n),h=o(le,s.ek,a),g=o(fe,s.eo,t),C=o(le,s.el,i),w=c,_=v;e=m,r=d,n=f,a=h,t=g,i=C,c=w,l=_;continue e}else return{ej:r,ek:a,el:i,em:e,en:n,eo:t}}),Dm=y(function(e,r,n){var a=On(e(r));return qn(Pm,a.em,a.ej,a.en,a.ek,a.eo,a.el,e,n)}),ba=$(function(e,r){var n=e,a=r;return N(a,n)<1}),Mm=function(e){return o(ba,e.ej,e.em)&&o(ba,e.ek,e.en)&&o(ba,e.el,e.eo)?e:{ej:o(le,e.em,e.ej),ek:o(le,e.en,e.ek),el:o(le,e.eo,e.el),em:o(fe,e.em,e.ej),en:o(fe,e.en,e.ek),eo:o(fe,e.eo,e.el)}},Jn=function(e){var r=e;return r},Zr=function(e){var r=e;return r.gz},Xr=function(e){var r=e;return r.gD},Qr=function(e){var r=e;return r.dB},km=function(e){var r=Jn(e),n=r.a,a=r.b,t=r.c,i=Zr(n),c=Xr(n),l=Qr(n),u=Zr(a),v=Xr(a),s=Qr(a),m=Zr(t),d=Xr(t),f=Qr(t);return Mm({ej:o(le,i,o(le,u,m)),ek:o(le,c,o(le,v,d)),el:o(le,l,o(le,s,f)),em:o(fe,i,o(fe,u,m)),en:o(fe,c,o(fe,v,d)),eo:o(fe,l,o(fe,s,f))})},_c=mv,ta=function(e){var r=e;return r},$r=function(e){return _c(ta(e))},Bm=function(e){var r=e;return r},Cc=function(e){return _c(Bm(e))},yc=function(e){return e},Am=$(function(e,r){var n=e,a=r,t=o(Ge,j(a.gz),o(Ge,j(a.gD),j(a.dB)));if(t){var i=a.dB/t,c=a.gD/t,l=a.gz/t,u=ur(l*l+c*c+i*i);return{gz:n*l/u,gD:n*c/u,dB:n*i/u}}else return pc}),Fm=Am(yc(1)),wc=y(function(e,r,n){var a=o(Ka,r,n),t=o(Ka,e,r);return Fm(o(Et,a,t))}),Em=function(e){var r=Jn(e),n=r.a,a=r.b,t=r.c,i=Cc(p(wc,n,a,t));return O({o:i,cb:$r(n)},{o:i,cb:$r(a)},{o:i,cb:$r(t)})},Vm=$(function(e,r){return{$:2,a:e,b:r}}),Rm=Vm({dM:3,dV:0,eq:4}),Nm=function(e){if(e.b){var r=e.a,n=e.b,a=Rm(o(ie,Em,e)),t=p(Dm,km,r,n);return S(hc,t,e,a,0)}else return Tm},Pe=y(function(e,r,n){return O(e,r,n)}),xn=function(e){return e},lr=$(function(e,r){var n=r;return e*n}),Ue=y(function(e,r,n){var a=e,t=r,i=n;return{gz:a,gD:t,dB:i}}),Lc=function(){var e=xn(1),r=xn(1),n=xn(1),a=o(lr,-.5,e),t=o(lr,-.5,r),i=o(lr,-.5,n),c=p(Ue,i,t,a),l=o(lr,.5,e),u=p(Ue,i,t,l),v=o(lr,.5,r),s=p(Ue,i,v,a),m=p(Ue,i,v,l),d=o(lr,.5,n),f=p(Ue,d,t,a),h=p(Ue,d,v,a),g=p(Ue,d,t,l),C=p(Ue,d,v,l);return xm(Nm(b([p(Pe,c,h,f),p(Pe,c,s,h),p(Pe,u,g,C),p(Pe,u,C,m),p(Pe,f,h,C),p(Pe,f,C,g),p(Pe,c,m,s),p(Pe,c,u,m),p(Pe,c,f,g),p(Pe,c,g,u),p(Pe,s,C,h),p(Pe,s,m,C)])))}(),gn={$:0},jm=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Wm=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Cc(p(wc,u,l,c)),s={o:v,cb:$r(u)},m={o:v,cb:$r(l)},d={o:v,cb:$r(c)};return o(B,s,o(B,m,o(B,d,n)))}),Gm=Xe,Hm=function(e){var r=e;return r.D},Im=A(function(e,r,n,a){if(r.$===1)return H;var t=r.a;if(n.$===1)return H;var i=n.a;if(a.$===1)return H;var c=a.a;return X(p(e,t,i,c))}),rt=4294967295>>>32-rn,nt=bl,Um=y(function(e,r,n){e:for(;;){var a=rt&r>>>e,t=o(nt,a,n);if(t.$){var v=t.a;return o(nt,rt&r,v)}else{var i=t.a,c=e-rn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Om=function(e){return e>>>5<<5},Jm=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||N(e,n)>-1?H:N(e,Om(n))>-1?X(o(nt,rt&e,i)):X(p(Um,a,e,t))}),qm=function(e){var r=e;return r.an},ha=$(function(e,r){return o(Jm,e,qm(r))}),Ym=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return S(Im,y(function(c,l,u){return O(c,l,u)}),o(ha,a,e),o(ha,t,e),o(ha,i,e))};return o(nc,r,Hm(e))},Zm=y(function(e,r,n){e:for(;;){var a=o(zt,xe,e),t=a.a,i=a.b;if(N(ja(t),xe)<0)return o(Di,!0,{z:r,l:n,p:t});var c=i,l=o(B,Ti(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Sc=function(e){return e.b?p(Zm,e,z,0):zi},Xm=y(function(e,r,n){return e(r(n))}),Qm=$(function(e,r){return!o(ji,o(Xm,j$,e),r)}),Km=function(e){var r=e.a;return r},ed=$(function(e,r){var n=Km(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&N(i,n)<0&&c>=0&&N(c,n)<0&&l>=0&&N(l,n)<0};return o(Qm,a,r)?{D:r,an:e}:{D:o(mc,a,r),an:e}}),rd=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),nd=rd({dM:1,dV:3,eq:4}),at=function(e){var r=e;return r},Tn=$(function(e,r){var n=at(r),a=at(e);return M(O(a.gz,a.gD,a.dB),O(n.gz,n.gD,n.dB))}),Rt=vv,xo=p(Rt,0,0,0),_a=Fe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(qi,o(Tn,e,r),t);if(v.$){var m={o:xo,cb:$r(r)},d={o:xo,cb:$r(e)},f=u+1,h=u;return O(o(B,O(n,h,f),o(B,O(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return O(o(B,O(n,s,a),c),l,u)}}),ad=Ce(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,h=a+1,g=a,C=e,w=r,_=v,x=a+3,F=se(_a,s,d,f,g,r,se(_a,m,s,h,f,r,se(_a,d,m,g,h,r,t)));e=C,r=w,n=_,a=x,t=F;continue e}else{var Y=t,U=Y.a,I=Y.b;return M(U,ze(I))}}),td=Ce(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,h=n+1,g=n,C=p(wn,o(Tn,d,s),f,p(wn,o(Tn,s,m),h,p(wn,o(Tn,m,d),g,t))),w=o(B,O(g,h,f),a),_=e,x=v,F=n+3,Y=w,U=C;e=_,r=x,n=F,a=Y,t=U;continue e}else return O(a,t,n)}),_r=y(function(e,r,n){var a=Ym(n),t=p(cr,Wm(r),z,a),i=L(td,r,a,0,z,Gm),c=i.a,l=i.b,u=i.c,v=L(ad,r,l,a,0,O(c,z,u)),s=v.a,m=v.b,d=Xa(m)?t:ae(t,m);return p(jm,e,o(ed,Sc(d),s),o(nd,d,s))}),od=$(function(e,r){return r.b?p(cr,B,r,e):e}),fr=function(e){return p(cr,od,z,e)},To=function(e){return{D:o(ie,function(r){return O(3*r,3*r+1,3*r+2)},o(Xn,0,mr(e)-1)),an:Sc(fr(o(ie,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},id=function(e){switch(e.$){case 0:return gn;case 1:var a=e.a,r=e.b,n=o(ie,Jn,r);return p(_r,a,Ar,To(n));case 2:var a=e.a,r=e.b,n=o(ie,Jn,r);return p(_r,a,Ar,To(n));case 3:var a=e.a,t=e.b;return p(_r,a,Ar,t);case 4:var a=e.a,t=e.b;return p(_r,a,function(i){return i.cb},t);case 5:var a=e.a,t=e.b;return p(_r,a,function(i){return i.cb},t);case 6:var a=e.a,t=e.b;return p(_r,a,function(i){return i.cb},t);case 7:var a=e.a,t=e.b;return p(_r,a,function(i){return i.cb},t);case 8:return gn;case 9:return gn;default:return gn}},Po=id(Lc),cd=function(e){var r=e;return r.aW},zc={$:0},D=zc,xc=function(e){return{$:4,a:e}},ld=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Nt=function(e){return xc(o(ld,e,z))},Ie=$(function(e,r){return{$:1,a:e,b:r}}),ud={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bU"}},vd=$(function(e,r){switch(r.$){case 0:return o(Qv,e,r);case 1:return o(Kv,e,r);case 2:return o(e$,e,r);case 3:return o(r$,e,r);case 4:return o(n$,e,r);default:return o(a$,e,r)}}),$d=$(function(e,r){switch(r.$){case 0:return o(Tv,e,r);case 1:return o(Pv,e,r);case 2:return o(Dv,e,r);case 3:return o(Mv,e,r);case 4:return o(kv,e,r);case 5:return o(Bv,e,r);case 6:return o(Av,e,r);case 7:return o(Fv,e,r);default:return Ev(e)}}),ye=xv,fd=1029,sd=function(e){return{$:5,a:e}},Tc=function(e){var r=e;return sd(r)},md=Tc(fd),dd=1028,pd=Tc(dd),Qe=y(function(e,r,n){return r===1?e?o(B,md,n):o(B,pd,n):n}),Pc={src:`
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
    `,attributes:{position:"cb",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ca=A(function(e,r,n,a){return o(Ie,r,ce(function(t,i,c,l,u,v,s,m){return L(ye,p(Qe,l,a,m),Pc,ud,n,{bU:e,b:c,c:i,d:v,e:t,f:u})}))}),gd={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aE"}},Dc={src:`
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
    `,attributes:{position:"cb"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ke=A(function(e,r,n,a){return o(Ie,r,ce(function(t,i,c,l,u,v,s,m){return L(ye,p(Qe,l,a,m),Dc,gd,n,{aE:e,b:c,c:i,d:v,e:t,f:u})}))}),Mc=$(function(e,r){return{$:3,a:e,b:r}}),bd={src:`
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
    `,attributes:{},uniforms:{constantColor:"aE",pointRadius:"ca",sceneProperties:"e"}},kc={src:`
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
    `,attributes:{position:"cb"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"ca",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},hd=A(function(e,r,n,a){return o(Mc,n,ce(function(t,i,c,l,u,v,s,m){return L(ye,m,kc,bd,a,{aE:e,b:c,c:i,ca:r,d:v,e:t,f:u})}))}),_d={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aZ",sceneProperties:"e"}},jt=function(e){var r=e;return r},Bc=dv,er=Ce(function(e,r,n,a,t){return o(Ie,n,ce(function(i,c,l,u,v,s,m,d){return L(ye,p(Qe,u,t,d),Dc,_d,a,{aZ:o(Bc,jt(r),e),b:l,c,d:s,e:i,f:v})}))}),Cd={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aZ",pointRadius:"ca",sceneProperties:"e"}},yd=Ce(function(e,r,n,a,t){return o(Mc,a,ce(function(i,c,l,u,v,s,m,d){return L(ye,d,kc,Cd,t,{aZ:o(Bc,jt(r),e),b:l,c,ca:n,d:s,e:i,f:v})}))}),wd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"bt",lights34:"b1",lights56:"b2",lights78:"b3",materialColor:"cQ",sceneProperties:"e",viewMatrix:"f"}},Ac={src:`
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
    `,attributes:{normal:"o",position:"cb"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},bn=A(function(e,r,n,a){return o(Ie,r,ce(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return L(ye,p(Qe,l,a,m),Ac,wd,n,{Q:f,bt:d.bt,b1:d.b1,b2:d.b2,b3:d.b3,cQ:e,b:c,c:i,d:v,e:t,f:u})}))}),Fc={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Q",lights12:"bt",lights34:"b1",lights56:"b2",lights78:"b3",materialColorTexture:"cR",normalMapTexture:"a6",sceneProperties:"e",useNormalMap:"bd",viewMatrix:"f"}},Ec={src:`
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
    `,attributes:{normal:"o",position:"cb",tangent:"eL",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Ld=Fe(function(e,r,n,a,t,i){return o(Ie,a,ce(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return L(ye,p(Qe,v,i,f),Ec,Fc,t,{Q:g,bt:h.bt,b1:h.b1,b2:h.b2,b3:h.b3,cR:e,b:u,c:l,a6:r,d:m,e:c,bd:n,f:s})}))}),Vc={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cr",constantBaseColor:"cw",constantMetallic:"cx",constantRoughness:"cy",enabledLights:"Q",lights12:"bt",lights34:"b1",lights56:"b2",lights78:"b3",metallicTexture:"cV",normalMapTexture:"a6",roughnessTexture:"dj",sceneProperties:"e",useNormalMap:"bd",viewMatrix:"f"}},Sd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Ie,u,ce(function(m,d,f,h,g,C,w,_){var x=w.a,F=w.b;return L(ye,p(Qe,h,s,_),Ec,Vc,v,{cr:e,cw:r,cx:i,cy:a,Q:F,bt:x.bt,b1:x.b1,b2:x.b2,b3:x.b3,cV:t,b:f,c:d,a6:c,d:C,dj:n,e:m,bd:l,f:g})}))}}}}}}}}}}},zd={src:`
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
    `,attributes:{},uniforms:{baseColor:"cq",enabledLights:"Q",lights12:"bt",lights34:"b1",lights56:"b2",lights78:"b3",metallic:"cU",roughness:"di",sceneProperties:"e",viewMatrix:"f"}},hn=Fe(function(e,r,n,a,t,i){return o(Ie,a,ce(function(c,l,u,v,s,m,d,f){var h=d.a,g=d.b;return L(ye,p(Qe,v,i,f),Ac,zd,t,{cq:e,Q:g,bt:h.bt,b1:h.b1,b2:h.b2,b3:h.b3,cU:n,b:u,c:l,d:m,di:r,e:c,f:s})}))}),xd=function(e){return{$:0,a:e}},Do=$(function(e,r){return{$:1,a:e,b:r}}),Kr=$(function(e,r){if(r.$){var n=r.a.C;return M(n,1)}else return r.a,M(e,0)}),oa=$v,ia=fv,ca=sv,Hr=pv,Td=function(e){return S(Hr,oa(e),ia(e),ca(e),1)},Wt=S(Hr,0,0,0,0),Pn=$(function(e,r){if(r.$){var a=r.a.C;return M(a,Wt)}else{var n=r.a;return M(e,Td(n))}}),Pd=$(function(e,r){var n=M(e,r);if(n.a.$){var t=n.a.a.C;return o(Do,M(t,Wt),o(Kr,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Do,o(Pn,t,e),o(Kr,t,r))}else{var a=n.a.a;return n.b.a,xd(a)}}),Dd=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),_n=A(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Md=A(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Br=lv,kd=function(e){return o(Br,e,1)},tt=o(Br,0,0),Tr=$(function(e,r){if(r.$){var a=r.a.C;return M(a,tt)}else{var n=r.a;return M(e,kd(n))}}),Bd=A(function(e,r,n,a){var t=S(Md,e,r,n,a);if(t.a.$){var u=t.a.a.C;return S(_n,M(u,Wt),o(Tr,u,r),o(Tr,u,n),o(Kr,u,a))}else if(t.b.$){var u=t.b.a.C;return S(_n,o(Pn,u,e),M(u,tt),o(Tr,u,n),o(Kr,u,a))}else if(t.c.$){var u=t.c.a.C;return S(_n,o(Pn,u,e),o(Tr,u,r),M(u,tt),o(Kr,u,a))}else if(t.d.$){var u=t.d.a.C;return S(_n,o(Pn,u,e),o(Tr,u,r),o(Tr,u,n),M(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Dd,i,c,l)}}),Ad={src:`
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
    `,attributes:{},uniforms:{backlight:"cn",colorTexture:"bU",sceneProperties:"e"}},ya=Ce(function(e,r,n,a,t){return o(Ie,n,ce(function(i,c,l,u,v,s,m,d){return L(ye,p(Qe,u,t,d),Pc,Ad,a,{cn:jt(r),bU:e,b:l,c,d:s,e:i,f:v})}))}),Rc={src:`
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
    `,attributes:{normal:"o",position:"cb",uv:"M"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Fd=A(function(e,r,n,a){return o(Ie,r,ce(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return L(ye,p(Qe,l,a,m),Rc,Fc,n,{Q:f,bt:d.bt,b1:d.b1,b2:d.b2,b3:d.b3,cR:e,b:c,c:i,a6:e,d:v,e:t,bd:0,f:u})}))}),Ed=vt(function(e,r,n,a,t,i,c,l,u){return o(Ie,c,ce(function(v,s,m,d,f,h,g,C){var w=g.a,_=g.b;return L(ye,p(Qe,d,u,C),Rc,Vc,l,{cr:e,cw:r,cx:i,cy:a,Q:_,bt:w.bt,b1:w.b1,b2:w.b2,b3:w.b3,cV:t,b:m,c:s,a6:e,d:h,dj:n,e:v,bd:0,f})}))}),Gt=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Vd=function(e){var r=e;return p(Gt,r.em,r.ej,.5)},Rd=function(e){var r=e;return p(Gt,r.en,r.ek,.5)},Nd=function(e){var r=e;return p(Gt,r.eo,r.el,.5)},jd=function(e){return p(Ue,Vd(e),Rd(e),Nd(e))},Wd=function(e){var r=e;return r.ej},Gd=function(e){var r=e;return r.ek},Nc=function(e){var r=e;return r.el},Hd=function(e){var r=e;return r.em},Id=function(e){var r=e;return r.en},jc=function(e){var r=e;return r.eo},tr=$(function(e,r){var n=e,a=r;return a-n}),Wc=function(e){return O(o(tr,Hd(e),Wd(e)),o(tr,Id(e),Gd(e)),o(tr,jc(e),Nc(e)))},V=function(e){var r=Wc(e),n=r.a,a=r.b,t=r.c;return{e5:ta(jd(e)),fr:n/2,fs:a/2,ft:t/2}},Ud=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var t=r.a,c=r.c,a=r.d;return S(Ca,l,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Ca,l,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Ca,l,V(t),c,a);case 8:return D;case 9:return D;default:return D}}else{var n=e.b.a;switch(r.$){case 0:return D;case 1:var t=r.a,c=r.c,a=r.d;return S(Ke,n,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(Ke,n,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(Ke,n,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(Ke,n,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(Ke,n,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Ke,n,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Ke,n,V(t),c,a);case 8:var t=r.a,c=r.c;return S(Ke,n,V(t),c,0);case 9:var t=r.a,c=r.c;return S(Ke,n,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(hd,n,i,V(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:var t=r.a,c=r.c,a=r.d;return L(ya,l,v,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(ya,l,v,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(ya,l,v,V(t),c,a);case 8:return D;case 9:return D;default:return D}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return D;case 1:var t=r.a,c=r.c,a=r.d;return L(er,u,v,V(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(er,u,v,V(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(er,u,v,V(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(er,u,v,V(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(er,u,v,V(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(er,u,v,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(er,u,v,V(t),c,a);case 8:var t=r.a,c=r.c;return L(er,u,v,V(t),c,0);case 9:var t=r.a,c=r.c;return L(er,u,v,V(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(yd,u,v,i,V(t),c)}}case 2:e.a;var s=e.b,U=e.c,m=o(Pd,s,U);if(m.$){var h=m.a,g=h.a;h.b;var C=m.b,w=C.a,_=C.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var t=r.a,c=r.c,f=r.d;return S(Fd,g,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return se(Ld,g,w,_,V(t),c,f);case 8:return D;case 9:return D;default:return D}}else{var d=m.a;switch(r.$){case 0:return D;case 1:return D;case 2:var t=r.a,c=r.c,f=r.d;return S(bn,d,V(t),c,f);case 3:return D;case 4:var t=r.a,c=r.c,f=r.d;return S(bn,d,V(t),c,f);case 5:return D;case 6:var t=r.a,c=r.c,f=r.d;return S(bn,d,V(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return S(bn,d,V(t),c,f);case 8:return D;case 9:return D;default:return D}}default:e.a;var x=e.b,F=e.c,Y=e.d,U=e.e,I=S(Bd,x,F,Y,U);if(I.$){var K=I.a,ee=K.a,pe=K.b,ge=I.b,ue=ge.a,ve=ge.b,Ve=I.c,Re=Ve.a,zr=Ve.b,xr=I.d,w=xr.a,_=xr.b;switch(r.$){case 0:return D;case 1:return D;case 2:return D;case 3:return D;case 4:return D;case 5:return D;case 6:var t=r.a,c=r.c,a=r.d;return sl(Ed,ee,pe,ue,ve,Re,zr,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Sd(ee)(pe)(ue)(ve)(Re)(zr)(w)(_)(V(t))(c)(a);case 8:return D;case 9:return D;default:return D}}else{var Z=I.a,J=I.b,W=I.c;switch(r.$){case 0:return D;case 1:return D;case 2:var t=r.a,c=r.c,a=r.d;return se(hn,Z,J,W,V(t),c,a);case 3:return D;case 4:var t=r.a,c=r.c,a=r.d;return se(hn,Z,J,W,V(t),c,a);case 5:return D;case 6:var t=r.a,c=r.c,a=r.d;return se(hn,Z,J,W,V(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return se(hn,Z,J,W,V(t),c,a);case 8:return D;case 9:return D;default:return D}}}}),wa=function(e){var r=e;return r.gz},La=function(e){var r=e;return r.gD},Sa=function(e){var r=e;return r.dB},Od=function(e){var r=e,n=Sa(r.dC),a=La(r.dC),t=wa(r.dC),i=Sa(r.dA),c=La(r.dA),l=wa(r.dA),u=Sa(r.dz),v=La(r.dz),s=wa(r.dz);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},la=function(e){var r=e;return r.c0},Ae=function(e){var r=e;return r},$n=function(e){var r=e;return r.dz},fn=function(e){var r=e;return r.dA},sn=function(e){var r=e;return r.dC},Jd=function(e){var r=ta(la(e)),n=Ae(sn(e)),a=Ae(fn(e)),t=Ae($n(e));return{dW:Od(e),q:t.gz,r:t.gD,s:t.dB,t:a.gz,u:a.gD,v:a.dB,w:n.gz,x:n.gD,y:n.dB,I:r.gz,J:r.gD,K:r.dB,cf:1}},Dr=$(function(e,r){return{$:5,a:e,b:r}}),Gc=$(function(e,r){return{dW:sr(e.dW,r.dW),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,I:r.I+(e.I*r.q+e.J*r.t+e.K*r.w)*r.cf,J:r.J+(e.I*r.r+e.J*r.u+e.K*r.x)*r.cf,K:r.K+(e.I*r.s+e.J*r.v+e.K*r.y)*r.cf,cf:e.cf*r.cf}}),qd=$(function(e,r){var n=r;switch(n.$){case 0:return D;case 5:var a=n.a,t=n.b,i=o(Gc,a,e);return o(Dr,i,t);case 1:return o(Dr,e,n);case 3:return o(Dr,e,n);case 2:return o(Dr,e,n);default:return o(Dr,e,n)}}),Yd=$(function(e,r){return o(qd,Jd(e),r)}),Hc=function(e){return{$:2,a:e}},Zd=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.e5;return{e5:{gz:n*i.gz,gD:a*i.gD,dB:t*i.dB},fr:n*r.fr,fs:a*r.fs,ft:t*r.ft}}),Xd=bv,Qd=gv,Mo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=Qd(a),h=f.gz,g=f.gD,C=f.dB,w=f.eT,_=Xd({eT:w,gz:h*s,gD:g*m,dB:C*d});return qn(r,n,_,t,i,c,l,u,v)}}}}}}}}}},ot=$(function(e,r){switch(r.$){case 0:return zc;case 5:var n=r.a,a=r.b;return o(Dr,n,o(ot,e,a));case 1:var t=r.a,i=r.b;return o(Ie,o(Zd,e,t),o(Mo,e,i));case 3:return r;case 2:var i=r.a;return Hc(o(Mo,e,i));default:var c=r.a;return xc(o(ie,ot(e),c))}}),Kd=$(function(e,r){var n=r;return o(ot,e,n)}),e0={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Nr=519,Ic=7683,Uc=7682,de=7680,r0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},Ht=y(function(e,r,n){var a=e.df,t=e.cP,i=e.dy,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(re,c(v.bE),o(re,l(v.bm),o(re,l(v.bN),l(v.bO))))};return o(u,n,o(u,r,p(r0,a,t,i)))}),n0=p(Ht,{cP:0,df:0,dy:15},{bm:de,bE:Nr,bN:de,bO:Ic},{bm:de,bE:Nr,bN:de,bO:Uc}),a0=p(Ht,{cP:0,df:0,dy:15},{bm:de,bE:Nr,bN:de,bO:Uc},{bm:de,bE:Nr,bN:de,bO:Ic}),t0=$(function(e,r){return e?o(B,a0,r):o(B,n0,r)}),o0={src:`
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
    `,attributes:{normal:"o",position:"cb"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"cg",viewMatrix:"f"}},i0=function(e){if(e.$){var r=e.c;return X(ce(function(n,a,t,i,c,l,u,v){return L(ye,o(t0,i,v),o0,e0,r,{b:t,c:a,d:l,e:n,cg:u,f:c})}))}else return H},ko=function(e){var r=i0(e);if(r.$)return D;var n=r.a;return Hc(n)},c0=A(function(e,r,n,a){var t=o(Ud,n,Lc),i=function(){var s=M(e,r);return s.a?s.b?Nt(b([t,ko(Po)])):t:s.b?ko(Po):D}(),c=cd(a),l=c.a,u=c.b,v=c.c;return o(Yd,_m(a),o(Kd,O(l,u,v),i))}),l0=$(function(e,r){return S(c0,!0,!0,e,r)}),za=$(function(e,r){var n=e,a=r;return N(a,n)>-1}),xa=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),u0=ar({gz:-1,gD:0,dB:0}),v0=ar({gz:0,gD:-1,dB:0}),$0=ar({gz:0,gD:0,dB:-1}),Oc=ar({gz:1,gD:0,dB:0}),Jc=ar({gz:0,gD:0,dB:1}),f0=Fe(function(e,r,n,a,t,i){var c=o(za,n,i)?Jc:$0,l=o(za,r,t)?Vt:v0,u=o(za,e,a)?Oc:u0,v=O(Be(o(tr,e,a)),Be(o(tr,r,t)),Be(o(tr,n,i))),s=p(Ue,o(xa,e,a),o(xa,r,t),o(xa,n,i)),m=Rr({c0:s,dz:u,dA:l,dC:c});return{eY:m,aW:v}}),s0=$(function(e,r){return se(f0,Zr(e),Xr(e),Qr(e),Zr(r),Xr(r),Qr(r))}),it=y(function(e,r,n){return{gz:e,gD:r,dB:n}}),m0=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=O(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(l0,e,o(s0,p(it,-c,-l,-u),p(it,c,l,u)))}),d0=function(e){return{$:0,a:e}},p0=$(function(e,r){return{$:0,a:e,b:r}}),g0=function(e){var r=rc(e),n=r.de,a=r.cD,t=r.cs;return p(Rt,n,a,t)},b0=function(e){return o(p0,0,d0(g0(e)))},h0=function(e){return o(m0,b0(e.dH),O(e.aN,e.aN,1/e.aN))},_0=function(e){return Nt(e)},C0=_0,y0=$(function(e,r){return C0(o(ie,h0,r))}),w0=$(function(e,r){return b([o(y0,e,r)])}),ct=Tl,L0=function(e){return e},S0=function(e){return xn(.01*e)},Bo=function(e){return e},z0=function(e){return e},x0=function(e){return{$:0,a:e}},T0=x0,P0={$:3},D0=P0,M0=A(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),k0=M0,B0=$(function(e,r){return fr(o(ie,e,r))}),A0=function(e){return{$:1,a:e}},F0=A0,E0=function(e){return o(hr,"height",Le(e))},V0=function(e){return ku(Vu(e))},R0=V0,N0=function(e){return{$:2,a:e}},j0=N0,W0=function(e){return o(Cr,"",e)},G0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return He(l*1e3)/1e3},c=function(l){return He(l*1e4)/100};return W0(b(["rgba(",ne(c(r)),"%,",ne(c(n)),"%,",ne(c(a)),"%,",ne(i(t)),")"]))},H0=y(function(e,r,n){return p(Xv,e,r,n)}),Ao=function(e){var r=e;return r},Ta=S(Hr,1,1,1,1),Oe=y(function(e,r,n){return o(ie,function(a){return o(a,r,n)},e)}),I0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),U0=$(function(e,r){var n=e,a=r.gz,t=r.gD;return p(I0,n*a/t,n,n*(1-a-t)/t)}),O0=function(e){var r=e.a,n=e.b,a=e.c;return p(Rt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},It=$(function(e,r){return O0(o(U0,e,r))}),rr=yv,J0=function(e){return rr({d2:e.q,d3:e.t,d4:e.w,d5:e.I,d6:e.r,d7:e.u,d8:e.x,d9:e.J,ea:e.s,eb:e.v,ec:e.y,ed:e.K,ee:0,ef:0,eg:0,eh:1})},Pa=Ce(function(e,r,n,a,t){var i=a.dW?1:-1,c=S(Hr,a.cf,a.cf,a.cf,i);return se(t,e,c,J0(a),a.dW,r,n)}),qc=Fe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(Gc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var h=t.b,g=o(B,L(Pa,e,r,n,a,h),i.N);return{N:g,Y:i.Y,gg:i.gg};case 3:var C=t.b,w=o(B,L(Pa,e,r,n,a,C),i.Y);return{N:i.N,Y:w,gg:i.gg};case 2:var _=t.a,x=o(B,L(Pa,e,r,n,a,_),i.gg);return{N:i.N,Y:i.Y,gg:x};default:var F=t.a;return p(Zn,S(qc,e,r,n,a),i,F)}}),q0=A(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Yc=q0,Ut=A(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Y0=function(e){var r=e.ad,n=e._,a=e.Z;return S(Ut,518,r,n,a)},Z0=$(function(e,r){return{$:6,a:e,b:r}}),X0=Z0,Zc=b([Y0({Z:1,_:0,ad:!1}),S(Yc,!1,!1,!1,!1),o(X0,0,1)]),Ot=8,Xc=15,Fr=7681,Q0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},K0=$(function(e,r){return{$:0,a:e,b:r}}),ep=K0({dM:1,dV:0,eq:5}),rp=ep(b([{cb:o(Br,-1,-1)},{cb:o(Br,1,-1)},{cb:o(Br,-1,1)},{cb:o(Br,1,1)}])),np={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cb"},uniforms:{}},Jt=function(e){return p(Ht,{cP:e.cP,df:e.df,dy:e.dy},{bm:e.bm,bE:e.bE,bN:e.bN,bO:e.bO},{bm:e.bm,bE:e.bE,bN:e.bN,bO:e.bO})},qt=function(e){return L(ye,b([Jt(e),S(Yc,!1,!1,!1,!1)]),np,Q0,rp,{})},ap=qt({bm:Fr,cP:0,df:Ot,bE:Nr,dy:Xc,bN:Fr,bO:Fr}),tp=516,Fo=5386,op=function(e){return o(aa,2,e+4)},Qc=function(e){return qt({bm:de,cP:Xc,df:Ot,bE:tp,dy:op(e),bN:Fo,bO:Fo})},ip=y(function(e,r,n){return fr(b([p(Oe,e,n,Zc),b([Qc(r),ap])]))}),cp=$(function(e,r){return fr(o(yi,ip(e),r))}),lp=function(e){var r=e.ad,n=e._,a=e.Z;return S(Ut,513,r,n,a)},up=lp({Z:1,_:0,ad:!0}),vp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},$p=function(e){var r=e.cd,n=e.bY,a=e.bS,t=e.bP,i=e.dH,c=e.aT,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,h=v.b,g=v.c;return vp(s)(m)(d)(f)(h)(g)(r)(n)(a)(t)});return o(l,i,c)},fp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Eo=$(function(e,r){var n=e,a=r;return p(fp,32774,n,a)}),sp=1,Vo=771,mp=770,Yt=$p({bP:0,aT:o(Eo,sp,Vo),bS:0,dH:o(Eo,mp,Vo),bY:0,cd:0}),Pr=b([up,Yt]),Ro=function(e){var r=e;return la(r)},dp=function(e){return e},pp=function(e){return Rr({c0:dp({gz:e.I,gD:e.J,dB:e.K}),dz:ar({gz:e.q,gD:e.r,dB:e.s}),dA:ar({gz:e.t,gD:e.u,dB:e.v}),dC:ar({gz:e.w,gD:e.x,dB:e.y})})},Da=$(function(e,r){var n=e,a=r,t=n.dC,i=t,c=n.dA,l=c,u=n.dz,v=u;return{gz:a.gz*v.gz+a.gD*v.gD+a.dB*v.dB,gD:a.gz*l.gz+a.gD*l.gD+a.dB*l.dB,dB:a.gz*i.gz+a.gD*i.gD+a.dB*i.dB}}),Kc=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=a.gz-i.gz,l=a.gD-i.gD,u=a.dB-i.dB,v=n.dC,s=v,m=n.dA,d=m,f=n.dz,h=f;return{gz:c*h.gz+l*h.gD+u*h.dB,gD:c*d.gz+l*d.gD+u*d.dB,dB:c*s.gz+l*s.gD+u*s.dB}}),el=$(function(e,r){return{c0:o(Kc,e,la(r)),dz:o(Da,e,$n(r)),dA:o(Da,e,fn(r)),dC:o(Da,e,sn(r))}}),gp=$(function(e,r){var n=On(r),a=On(e);return{ej:o(le,a.ej,n.ej),ek:o(le,a.ek,n.ek),el:o(le,a.el,n.el),em:o(fe,a.em,n.em),en:o(fe,a.en,n.en),eo:o(fe,a.eo,n.eo)}}),bp=function(e){var r=e;return O(r.gz,r.gD,r.dB)},Dn=$(function(e,r){var n=e,a=r;return a+n}),hp=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=zn(Be(a)),c=zn(Be(n)),l=zn(Be(t)),u=bp(r),v=u.a,s=u.b,m=u.c;return{ej:o(Dn,c,v),ek:o(Dn,i,s),el:o(Dn,l,m),em:o(tr,c,v),en:o(tr,i,s),eo:o(tr,l,m)}}),No=A(function(e,r,n,a){var t=n.e5,i=2*n.ft*r,c=2*n.fs*r,l=2*n.fr*r,u=t.dB*r,v=t.gD*r,s=t.gz*r,m=Ae(sn(e)),d=j(l*m.gz)+j(c*m.gD)+j(i*m.dB),f=Ae(fn(e)),h=j(l*f.gz)+j(c*f.gD)+j(i*f.dB),g=Ae($n(e)),C=j(l*g.gz)+j(c*g.gD)+j(i*g.dB),w=o(hp,O(C,h,d),o(Kc,e,p(it,s,v,u)));if(a.$)return X(w);var _=a.a;return X(o(gp,_,w))}),lt=A(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 1:var c=t.a,l=S(No,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 2:var f=e,h=r,g=n,C=i;e=f,r=h,n=g,a=C;continue e;case 3:var c=t.a,l=S(No,e,r,c,n),f=e,h=r,g=l,C=i;e=f,r=h,n=g,a=C;continue e;case 4:var u=t.a,f=e,h=r,g=S(lt,e,r,n,u),C=i;e=f,r=h,n=g,a=C;continue e;default:var v=t.a,s=t.b,m=o(el,pp(v),e),d=r*v.cf,f=e,h=r,g=S(lt,m,d,n,b([s])),C=i;e=f,r=h,n=g,a=C;continue e}}else return n}),_p={dW:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,I:0,J:0,K:0,cf:1},Cp=function(e){var r=e;return r},jo=qt({bm:Fr,cP:0,df:Ot,bE:Nr,dy:255,bN:Fr,bO:Fr}),yp=function(e){var r=e,n=o(Ge,j(r.gz),o(Ge,j(r.gD),j(r.dB)));if(n){var a=r.dB/n,t=r.gD/n,i=r.gz/n,c=ur(i*i+t*t+a*a);return c*n}else return Vr},_e={bS:0,e3:!1,bY:0,c9:0,cd:0,ds:0,gz:0,gD:0,dB:0},De=$(function(e,r){var n=e,a=r;return rr({d2:n.gz,d3:n.cd,d4:a.gz,d5:a.cd,d6:n.gD,d7:n.bY,d8:a.gD,d9:a.bY,ea:n.dB,eb:n.bS,ec:a.dB,ed:a.bS,ee:n.ds,ef:n.c9,eg:a.ds,eh:a.c9})}),qr=M({bt:o(De,_e,_e),b1:o(De,_e,_e),b2:o(De,_e,_e),b3:o(De,_e,_e)},S(Hr,0,0,0,0)),Wo=function(e){var r=e;return-r},rl=514,nl=function(e){var r=e.ad,n=e._,a=e.Z;return S(Ut,515,r,n,a)},al=240,wp=b([nl({Z:1,_:0,ad:!0}),Jt({bm:de,cP:al,df:0,bE:rl,dy:0,bN:de,bO:de}),Yt]),Lp=$(function(e,r){var n=e,a=r.fY,t=r.fo,i=r.eX,c=Be(a),l=c,u=Be(t),v=u,s=n.dd;if(s.$){var d=s.a;return Ga(v)?rr({d2:2/(i*d),d3:0,d4:0,d5:0,d6:0,d7:2/d,d8:0,d9:0,ea:0,eb:0,ec:0,ed:-1,ee:0,ef:0,eg:0,eh:1}):rr({d2:2/(i*d),d3:0,d4:0,d5:0,d6:0,d7:2/d,d8:0,d9:0,ea:0,eb:0,ec:-2/(v-l),ed:-(v+l)/(v-l),ee:0,ef:0,eg:0,eh:1})}else{var m=s.a;return Ga(v)?rr({d2:1/(i*m),d3:0,d4:0,d5:0,d6:0,d7:1/m,d8:0,d9:0,ea:0,eb:0,ec:-1,ed:-2*l,ee:0,ef:0,eg:-1,eh:0}):rr({d2:1/(i*m),d3:0,d4:0,d5:0,d6:0,d7:1/m,d8:0,d9:0,ea:0,eb:0,ec:-(v+l)/(v-l),ed:-2*v*l/(v-l),ee:0,ef:0,eg:-1,eh:0})}}),Cn=$(function(e,r){return(1&e>>r)===1?0:1}),Sp=function(e){return b([nl({Z:1,_:0,ad:!0}),Jt({bm:de,cP:al,df:e,bE:rl,dy:0,bN:de,bO:de}),Yt])},zp=y(function(e,r,n){return fr(o(ie,function(a){var t=a<<4,i=S(Hr,o(Cn,a,0),o(Cn,a,1),o(Cn,a,2),o(Cn,a,3));return p(Oe,e,M(r,i),Sp(t))},o(Xn,1,o(aa,2,n)-1)))}),on=function(e){var r=e;return{gz:-r.gz,gD:-r.gD,dB:-r.dB}},xp=wv,Go=function(e){var r=e;return on(sn(r))},Tp=Oc,Pp=Vt,tl=Jc,Dp={c0:bc,dz:Tp,dA:Pp,dC:tl},Mp=function(e){var r=ta(la(e)),n=Ae(sn(e)),a=Ae(fn(e)),t=Ae($n(e));return rr({d2:t.gz,d3:a.gz,d4:n.gz,d5:r.gz,d6:t.gD,d7:a.gD,d8:n.gD,d9:r.gD,ea:t.dB,eb:a.dB,ec:n.dB,ed:r.dB,ee:0,ef:0,eg:0,eh:1})},kp=$(function(e,r){var n=r;return Mp(o(el,n,e))}),Bp=function(e){return o(kp,Dp,e)},Ap=function(e){var r=e;return r.dx},Fp=function(e){var r=e;return $n(r)},Ep=y(function(e,r,n){var a=e,t=r,i=n;return{gz:a,gD:t,dB:i}}),Vp=function(e){var r=e;return fn(r)},Rp=function(e){var r=Ap(e.e1),n=Rr({c0:Ro(r),dz:Fp(r),dA:Vp(r),dC:on(Go(r))}),a=Nt(e.a$),t=a,i=S(lt,n,1,H,b([t]));if(i.$===1)return z;var c=i.a,l=Bp(r),u=o(lr,.99,o(le,Be(e.aV),Wo(Nc(c)))),v=Wc(c),s=v.a,m=v.b,d=v.c,f=yp(p(Ep,s,m,d)),h=o(lr,1.01,o(Dn,f,Wo(jc(c)))),g=o(Lp,e.e1,{eX:e.eX,fo:h,fY:u}),C=xp(g).eh,w=C?Ae(on(Go(r))):at(Ro(r)),_=function(){var ue=e.ci;switch(ue.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var ve=ue.a;return M(3,ve);case 4:var ve=ue.a;return M(4,ve);default:return M(5,0)}}(),x=_.a,F=_.b,Y=e.bW,U=Y,I=o(It,U,e.cl),Z=I,J=rr({d2:0,d3:w.gz,d4:oa(Z),d5:e.eJ,d6:0,d7:w.gD,d8:ia(Z),d9:Cp(f),ea:0,eb:w.dB,ec:ca(Z),ed:x,ee:0,ef:C,eg:0,eh:F}),W=se(qc,J,l,g,_p,t,{N:z,Y:z,gg:z}),K=e.b0;switch(K.$){case 0:var ee=K.a;return fr(b([p(Oe,W.N,M(ee,Ta),Pr),p(Oe,W.Y,qr,Pr)]));case 1:var ee=K.a;return fr(b([p(Oe,W.N,qr,Pr),b([jo]),p(Oe,W.gg,ee.bt,Zc),b([Qc(0)]),p(Oe,W.N,M(ee,Ta),wp),p(Oe,W.Y,qr,Pr)]));default:var pe=K.a,ge=K.b;return fr(b([p(Oe,W.N,M(ge,Ta),Pr),b([jo]),o(cp,W.gg,pe),p(zp,W.N,ge,mr(pe)),p(Oe,W.Y,qr,Pr)]))}},Np=function(e){return o(hr,"width",Le(e))},jp=$(function(e,r){var n=b([F0(1),j0(0),T0(!0),S(k0,0,0,0,0)]),a=function(){var x=e.cm;switch(x.$){case 0:return O(n,"0",1);case 1:return O(o(B,D0,n),"1",1);default:var F=x.a;return O(n,"0",F)}}(),t=a.a,i=a.b,c=a.c,l=e.aW,u=l.a,v=l.b,s=Ao(v),m=o(Q,"height",Le(s)+"px"),d=Ao(u),f=d/s,h=o(B0,function(x){return Rp({eX:f,e1:e.e1,aV:e.aV,a$:x.a$,bW:x.bW,b0:x.b0,eJ:c,ci:x.ci,cl:x.cl})},r),g=o(Q,"width",Le(d)+"px"),C=e.aU,w=C,_=G0(w);return p(R0,"div",b([o(Q,"padding","0px"),g,m]),b([M(i,p(H0,t,b([Np(He(d*c)),E0(He(s*c)),g,m,o(Q,"display","block"),o(Q,"background-color",_)]),h))]))}),Wp=function(e){return o(jp,{cm:e.cm,aU:e.aU,e1:e.e1,aV:e.aV,aW:e.aW},b([{a$:e.a$,bW:e.bW,b0:e.b0,ci:e.ci,cl:e.cl}]))},ol=function(e){return e},Ho=ol({gz:.31271,gD:.32902}),Gp=$(function(e,r){var n=e,a=Ae(r.fg),t=a.gz,i=a.gD,c=a.dB,l=o(It,r.cE,r.ct),u=l;return{bS:ca(u),e3:n,bY:ia(u),c9:0,cd:oa(u),ds:1,gz:-t,gD:-i,dB:-c}}),Hp=function(e){return e},Ip=function(e){return Hp(1.2*o(aa,2,e))},Ma=function(e){return e},Up={$:0},Op=Up,Io=function(e){var r=e;return r},Jp=function(e){e:for(;;){if(sr(e.fE,Vr)&&sr(e.fF,Vr))return _e;if(o(dc,Be(e.fE),Be(e.fF))){var r={ct:e.ct,fE:e.fF,fF:e.fE,eP:on(e.eP)};e=r;continue e}else{var n=j(Io(e.fF)/Un),a=j(Io(e.fE)/Un),t=Ae(e.eP),i=t.gz,c=t.gD,l=t.dB,u=o(It,yc(1),e.ct),v=u;return{bS:a*ca(v),e3:!1,bY:a*ia(v),c9:n/a,cd:a*oa(v),ds:3,gz:i,gD:c,dB:l}}}},Uo=function(e){return Jp({ct:e.ct,fE:e.cE,fF:Vr,eP:e.eP})},qp=y(function(e,r,n){return N(n,e)<0?e:N(n,r)>0?r:n}),Yp=function(e){var r=e;return r},il=function(e){var r=p(qp,1667,25e3,Yp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ol({gz:n,gD:a})},cl=function(e){return e},Zp=il(cl(12e3)),Xp=il(cl(5600)),Qp=function(e){return{$:2,a:e}},Kp=function(e){return Qp(e)},e1=$(function(e,r){return{$:2,a:e,b:r}}),ll=function(e){return{$:0,a:e}},yn=function(e){var r=e;return r},r1=function(e){var r=e;return r.e3},n1=ll(qr.a),a1=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?M(o(B,a,i),c):M(i,o(B,a,c))});return p(cr,n,M(z,z),r)}),t1=function(e){var r=e;return rr({d2:r.gz,d3:r.cd,d4:0,d5:0,d6:r.gD,d7:r.bY,d8:0,d9:0,ea:r.dB,eb:r.bS,ec:0,ed:0,ee:r.ds,ef:r.c9,eg:0,eh:0})},o1=ce(function(e,r,n,a,t,i,c,l){var u=o(a1,r1,b([yn(e),yn(r),yn(n),yn(a)])),v=u.a,s=u.b;if(v.b){var m=ae(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,h=f.a,g=f.b,C=g.a,w=g.b,_=w.a;return o(e1,o(ie,t1,v),{bt:o(De,d,h),b1:o(De,C,_),b2:o(De,t,i),b3:o(De,c,l)})}else return n1}else return ll({bt:o(De,e,r),b1:o(De,n,a),b2:o(De,t,i),b3:o(De,c,l)})}),i1=y(function(e,r,n){return qn(o1,e,r,n,_e,_e,_e,_e,_e)}),c1=function(e){var r=o(Gp,z0(e.gg),{ct:Xp,fg:e.go,cE:Ma(8e4)}),n=Uo({ct:Zp,cE:Ma(2e4),eP:e.eP}),a=Uo({ct:Ho,cE:Ma(15e3),eP:on(e.eP)}),t=p(i1,r,n,a);return Wp({cm:Kp(e.cA),aU:e.aU,e1:e.e1,aV:e.aV,aW:e.aW,a$:e.a$,bW:Ip(15),b0:t,ci:Op,cl:Ho})},l1=$(function(e,r){var n=e,a=r,t=Qa(a);return{gz:t*Qa(n),gD:t*ct(n),dB:ct(a)}}),u1=$(function(e,r){return c1({aU:L0(e.eZ),e1:e.e1,aV:S0(.5),cA:e.cA,aW:M(Bo(He(e.dk.gx)),Bo(He(e.dk.fv))),a$:r,gg:!0,go:o(l1,et(e.gn),et(e.gp)),eP:tl})}),v1=$(function(e,r){return o(u1,{eZ:p(bm,46,46,46),e1:gm({dQ:{gz:ct(e.cv),gD:-2,dB:4},a1:{gz:0,gD:0,dB:0},eP:{gz:0,gD:0,dB:1}}),cA:e.cA,dk:e.dk,gn:-zo(20),gp:-zo(45)},o(w0,e,r))}),$1=p(Is,v1,em,Os);const f1={Main:{init:$1(o(P,function(e){return we({fD:e})},o(T,"inputs",o(P,function(e){return o(P,function(r){return o(P,function(n){return o(P,function(a){return o(P,function(t){return o(P,function(i){return o(P,function(c){return we({cv:c,cA:i,dL:t,fJ:a,f7:n,dk:r,gw:e})},o(T,"clock",oe))},o(T,"devicePixelRatio",oe))},o(T,"dt",oe))},o(T,"keyboard",o(P,function(a){return o(P,function(t){return o(P,function(i){return o(P,function(c){return o(P,function(l){return o(P,function(u){return o(P,function(v){return o(P,function(s){return o(P,function(m){return we({eV:m,e9:s,dK:v,fi:u,fM:l,f8:c,gc:i,gh:t,eO:a})},o(T,"alt",q))},o(T,"control",q))},o(T,"down",q))},o(T,"downs",Nn(an)))},o(T,"left",q))},o(T,"pressedKeys",Nn(an)))},o(T,"right",q))},o(T,"shift",q))},o(T,"up",q))))},o(T,"pointer",o(P,function(n){return o(P,function(a){return o(P,function(t){return o(P,function(i){return o(P,function(c){return o(P,function(l){return o(P,function(u){return o(P,function(v){return we({dK:v,fG:u,fT:l,gd:c,ge:i,eO:t,gz:a,gD:n})},o(T,"down",q))},o(T,"isDown",q))},o(T,"move",q))},o(T,"rightDown",q))},o(T,"rightUp",q))},o(T,"up",q))},o(T,"x",oe))},o(T,"y",oe))))},o(T,"screen",o(P,function(r){return o(P,function(n){return we({fv:n,gx:r})},o(T,"height",oe))},o(T,"width",oe))))},o(T,"wheel",o(P,function(e){return o(P,function(r){return we({fd:r,fe:e})},o(T,"deltaX",oe))},o(T,"deltaY",oe)))))))(0)}},k={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},s1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(k.keyboard.downs.push(f.code),k.keyboard.pressedKeys.push(f.code),r(f)&&(k.keyboard.control=!0),n(f)&&(k.keyboard.alt=!0),a(f)&&(k.keyboard.shift=!0),t(f)&&(k.keyboard.left=!0),i(f)&&(k.keyboard.right=!0),c(f)&&(k.keyboard.up=!0),l(f)&&(k.keyboard.down=!0))}),window.addEventListener("keyup",f=>{k.keyboard.pressedKeys=k.keyboard.pressedKeys.filter(h=>h!=f.code),r(f)&&(k.keyboard.control=!1,k.keyboard.pressedKeys=[]),n(f)&&(k.keyboard.alt=!1),a(f)&&(k.keyboard.shift=!1),t(f)&&(k.keyboard.left=!1),i(f)&&(k.keyboard.right=!1),c(f)&&(k.keyboard.up=!1),l(f)&&(k.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{k.pointer.x=-.5*k.screen.width+f.pageX,k.pointer.y=.5*k.screen.height-f.pageY,u(f)&&(k.pointer.down=!0,k.pointer.isDown=!0),v(f)&&(k.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{k.pointer.move=!0,k.pointer.x=-.5*k.screen.width+f.pageX,k.pointer.y=.5*k.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(k.pointer.up=!0,k.pointer.isDown=!1),v(f)&&(k.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(k.pointer.up=!0,k.pointer.isDown=!1),v(f)&&(k.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{k.wheel.deltaX=f.deltaX,k.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(k)}),window.addEventListener("focus",f=>{s(k)}),window.addEventListener("visibilitychange",f=>{s(k)}),window.addEventListener("resize",()=>{k.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const h=f/1e3,g=h-k.clock;g<.009||(k.dt=g,k.clock=h,e.ports.tick.send(k),m(k)),window.requestAnimationFrame(d)}},m1=()=>{ka("pointerdown"),ka("wheel"),ka("keydown")},ka=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},d1=f1.Main.init({node:document.querySelector("#app div"),flags:{inputs:k}});m1();s1(d1);
