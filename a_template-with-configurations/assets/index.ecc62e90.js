(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function mr(e,r,n){return n.a=e,n.f=r,n}function $(e){return mr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return mr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return mr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function Le(e){return mr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ee(e){return mr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function ft(e){return mr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ve(e){return mr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function st(e){return mr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function x(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function me(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function ri(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ea(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Cl(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var yl=[];function Ll(e){return e.length}var Sl=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),wl=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,M(n,r)}),xl=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Tl=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Pl()),r});function Pl(e){return"<internals>"}function jr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function Sr(e,r){for(var n,a=[],t=Na(e,r,0,a);t&&(n=a.pop());t=Na(n.a,n.b,0,a));return t}function Na(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&jr(5),!1;if(n>100)return a.push(M(e,r)),!0;e.$<0&&(e=bo(e),r=bo(r));for(var t in e)if(!Na(e[t],r[t],n+1,a))return!1;return!0}$(Sr);$(function(e,r){return!Sr(e,r)});function Y(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=Y(e.a,r.a))||(n=Y(e.b,r.b))?n:Y(e.c,r.c);for(;e.b&&r.b&&!(n=Y(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return Y(e,r)<0});$(function(e,r){return Y(e,r)<1});$(function(e,r){return Y(e,r)>0});$(function(e,r){return Y(e,r)>=0});var Ml=$(function(e,r){var n=Y(e,r);return n<0?Pi:n?m$:Ti}),sn=0;function M(e,r){return{a:e,b:r}}function O(e,r,n){return{a:e,b:r,c:n}}function Ye(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(oe);function oe(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=qe(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=qe(e.a,r);return n}var T={$:0};function qe(e,r){return{$:1,a:e,b:r}}var zl=$(qe);function h(e){for(var r=T,n=e.length;n--;)r=qe(e[n],r);return r}function ra(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var kl=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return h(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return h(t)});Le(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(x(e,r.a,n.a,a.a,t.a));return h(i)});Ee(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return h(c)});$(function(e,r){return h(ra(r).sort(function(n,a){return Y(e(n),e(a))}))});$(function(e,r){return h(ra(r).sort(function(n,a){var t=o(e,n,a);return t===Ti?0:t===Pi?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var Dl=$(Math.pow);$(function(e,r){return r%e});var Al=$(function(e,r){var n=r%e;return e===0?jr(11):n>0&&e<0||n<0&&e>0?n+e:n}),Bl=Math.PI,Fl=Math.cos,Rl=Math.sin,El=Math.tan,Vl=Math.atan;$(Math.atan2);function Ul(e){return e}function Nl(e){return e===1/0||e===-1/0}var jl=Math.ceil,Gl=Math.floor,Hl=Math.round,Wl=Math.sqrt,no=Math.log,Il=isNaN;function Yl(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Jl=$(function(e,r){return e+r});function Ol(e){var r=e.charCodeAt(0);return isNaN(r)?J:ne(55296<=r&&r<=56319?M(e[0]+e[1],e.slice(2)):M(e[0],e.slice(1)))}$(function(e,r){return e+r});function ql(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Zl(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Xl=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Ql=$(function(e,r){return r.split(e)}),Kl=$(function(e,r){return r.join(e)}),eu=y(function(e,r,n){return n.slice(e,r)});function ru(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var nu=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),au=$(function(e,r){return r.indexOf(e)>-1}),tu=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var ou=$(function(e,r){var n=e.length;if(n<1)return T;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return h(t)});function ni(e){return e+""}function iu(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return J;r=10*r+i-48}return t==a?J:ne(n==45?-r:r)}function cu(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?ne(r):J}function lu(e){return ra(e).join("")}function uu(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function vu(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function $u(e){return{$:0,a:e}}function mt(e){return{$:2,b:e}}var fu=mt(function(e){return typeof e=="boolean"?ie(e):Ie("a BOOL",e)}),su=mt(function(e){return typeof e=="number"?ie(e):Ie("a FLOAT",e)}),mu=mt(function(e){return typeof e=="string"?ie(e):e instanceof String?ie(e+""):Ie("a STRING",e)});function du(e){return{$:3,b:e}}var pu=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function dr(e,r){return{$:9,f:e,g:r}}var bu=$(function(e,r){return{$:10,b:r,h:e}}),gu=$(function(e,r){return dr(e,[r])}),hu=y(function(e,r,n){return dr(e,[r,n])});F(function(e,r,n,a){return dr(e,[r,n,a])});Le(function(e,r,n,a,t){return dr(e,[r,n,a,t])});Ee(function(e,r,n,a,t,i){return dr(e,[r,n,a,t,i])});ft(function(e,r,n,a,t,i,c){return dr(e,[r,n,a,t,i,c])});ve(function(e,r,n,a,t,i,c,l){return dr(e,[r,n,a,t,i,c,l])});st(function(e,r,n,a,t,i,c,l,u){return dr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Ae(e,n)}catch(a){return de(o(xt,"This is not valid JSON! "+a.message,r))}});var ai=$(function(e,r){return Ae(e,r)});function Ae(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ie(e.c):Ie("null",r);case 3:return _n(r)?ao(e.b,r,h):Ie("a LIST",r);case 4:return _n(r)?ao(e.b,r,_u):Ie("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ie("an OBJECT with a field named `"+n+"`",r);var v=Ae(e.b,r[n]);return Ue(v)?v:de(o(go,n,v.a));case 7:var a=e.e;if(!_n(r))return Ie("an ARRAY",r);if(a>=r.length)return Ie("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Ae(e.b,r[a]);return Ue(v)?v:de(o(Mi,a,v.a));case 8:if(typeof r!="object"||r===null||_n(r))return Ie("an OBJECT",r);var t=T;for(var i in r)if(r.hasOwnProperty(i)){var v=Ae(e.b,r[i]);if(!Ue(v))return de(o(go,i,v.a));t=qe(M(i,v.a),t)}return ie(Pe(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Ae(l[u],r);if(!Ue(v))return v;c=c(v.a)}return ie(c);case 10:var v=Ae(e.b,r);return Ue(v)?Ae(e.h(v.a),r):v;case 11:for(var s=T,m=e.g;m.b;m=m.b){var v=Ae(m.a,r);if(Ue(v))return v;s=qe(v.a,s)}return de(d$(Pe(s)));case 1:return de(o(xt,e.a,r));case 0:return ie(e.a)}}function ao(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ae(e,r[i]);if(!Ue(c))return de(o(Mi,i,c.a));t[i]=c.a}return ie(n(t))}function _n(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function _u(e){return o(D$,e.length,function(r){return e[r]})}function Ie(e,r){return de(o(xt,"Expecting "+e,r))}function Fr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Fr(e.b,r.b);case 6:return e.d===r.d&&Fr(e.b,r.b);case 7:return e.e===r.e&&Fr(e.b,r.b);case 9:return e.f===r.f&&to(e.g,r.g);case 10:return e.h===r.h&&Fr(e.b,r.b);case 11:return to(e.g,r.g)}}function to(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Fr(e[a],r[a]))return!1;return!0}var Cu=$(function(e,r){return JSON.stringify(r,null,e)+""});function ti(e){return e}y(function(e,r,n){return n[e]=r,n});function Tr(e){return{$:0,a:e}}function yu(e){return{$:1,a:e}}function ir(e){return{$:2,b:e,c:null}}var ja=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Lu(e){return{$:5,b:e}}var Su=0;function dt(e){var r={$:0,e:Su++,f:e,g:null,h:[]};return pt(r),r}function oi(e){return ir(function(r){r(Tr(dt(e)))})}function ii(e,r){e.h.push(r),pt(e)}var wu=$(function(e,r){return ir(function(n){ii(e,r),n(Tr(sn))})}),ma=!1,oo=[];function pt(e){if(oo.push(e),!ma){for(ma=!0;e=oo.shift();)xu(e);ma=!1}}function xu(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,pt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return bt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function bt(e,r,n,a,t,i){var c=o(ai,e,r?r.flags:void 0);Ue(c)||jr(2);var l={},u=n(c.a),v=u.a,s=i(d,v),m=Tu(l,d);function d(f,g){var b=o(a,f,v);s(v=b.a,g),co(l,b.b,t(v))}return co(l,u.b,t(v)),m?{ports:m}:{}}var Je={};function Tu(e,r){var n;for(var a in Je){var t=Je[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Mu(t,r)}return n}function Pu(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Mu(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ja,l,Lu(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?x(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=dt(o(ja,l,e.b))}var zu=$(function(e,r){return ir(function(n){e.g(r),n(Tr(sn))})});$(function(e,r){return o(wu,e.h,{$:0,a:r})});function ci(e){return function(r){return{$:1,k:e,l:r}}}function ku(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var io=[],da=!1;function co(e,r,n){if(io.push({p:e,q:r,r:n}),!da){da=!0;for(var a;a=io.shift();)Du(a.p,a.q,a.r);da=!1}}function Du(e,r,n){var a={};Rn(!0,r,a,null),Rn(!1,n,a,null);for(var t in e)ii(e[t],{$:"fx",a:a[t]||{i:T,j:T}})}function Rn(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Au(e,t,a,r.l);n[t]=Bu(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)Rn(e,c.a,n,a);return;case 3:Rn(e,r.o,n,{s:r.n,t:a});return}}function Au(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Je[r].e:Je[r].f;return o(i,t,a)}function Bu(e,r,n){return n=n||{i:T,j:T},e?n.i=qe(r,n.i):n.j=qe(r,n.j),n}function Fu(e){Je[e]&&jr(3)}$(function(e,r){return r});function Ru(e,r){return Fu(e),Je[e]={f:Eu,u:r,a:Vu},ci(e)}var Eu=$(function(e,r){return function(n){return e(r(n))}});function Vu(e,r){var n=T,a=Je[e].u,t=Tr(null);Je[e].b=t,Je[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ai,a,c);Ue(l)||jr(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var En,rr=typeof document<"u"?document:{};function gt(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild($r(e,function(){}),t),{}});function Ga(e){return{$:0,a:e}}var li=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:ht(n),e:t,f:e,b:i}})}),Pr=li(void 0),Uu=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:ht(n),e:t,f:e,b:i}})}),Nu=Uu(void 0);function ju(e,r,n,a){return{$:3,d:ht(e),g:r,h:n,i:a}}var Gu=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function pr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return pr([e,r],function(){return e(r)})});y(function(e,r,n){return pr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return pr([e,r,n,a],function(){return p(e,r,n,a)})});Le(function(e,r,n,a,t){return pr([e,r,n,a,t],function(){return x(e,r,n,a,t)})});Ee(function(e,r,n,a,t,i){return pr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});ft(function(e,r,n,a,t,i,c){return pr([e,r,n,a,t,i,c],function(){return me(e,r,n,a,t,i,c)})});ve(function(e,r,n,a,t,i,c,l){return pr([e,r,n,a,t,i,c,l],function(){return ri(e,r,n,a,t,i,c,l)})});st(function(e,r,n,a,t,i,c,l,u){return pr([e,r,n,a,t,i,c,l,u],function(){return ea(e,r,n,a,t,i,c,l,u)})});var ui=$(function(e,r){return{$:"a0",n:e,o:r}}),Hu=$(function(e,r){return{$:"a1",n:e,o:r}}),vi=$(function(e,r){return{$:"a2",n:e,o:r}}),br=$(function(e,r){return{$:"a3",n:e,o:r}}),Wu=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Iu(e){return e=="script"?"p":e}function Yu(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(ui,r.n,Ju(e,r.o)):r});function Ju(e,r){var n=kt(r);return{$:r.$,a:n?p(A$,n<3?Ou:qu,xe(e),r.a):o(jn,e,r.a)}}var Ou=$(function(e,r){return M(e(r.a),r.b)}),qu=$(function(e,r){return{al:e(r.al),cW:r.cW,cK:r.cK}});function ht(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?lo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?lo(c,t,i):c[t]=i}return r}function lo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function $r(e,r){var n=e.$;if(n===5)return $r(e.k||(e.k=e.m()),r);if(n===0)return rr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=$r(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Ha(c,r,e.d),c}var c=e.f?rr.createElementNS(e.f,e.c):rr.createElement(e.c);En&&e.c=="a"&&c.addEventListener("click",En(c)),Ha(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)gt(c,$r(n===1?l[u]:l[u].b,r));return c}function Ha(e,r,n){for(var a in n){var t=n[a];a==="a1"?Zu(e,t):a==="a0"?Ku(e,r,t):a==="a3"?Xu(e,t):a==="a4"?Qu(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Zu(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Xu(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Qu(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Ku(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=ev(r,i),e.addEventListener(t,c,_t&&{passive:kt(i)<2}),a[t]=c}}var _t;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){_t=!0}}))}catch{}function ev(e,r){function n(a){var t=n.q,i=Ae(t.a,a);if(!!Ue(i)){for(var c=kt(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cW,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cK)&&a.preventDefault(),e),m,d;m=s.j;){if(typeof m=="function")u=m(u);else for(var d=m.length;d--;)u=m[d](u);s=s.p}s(u,v)}}return n.q=r,n}function rv(e,r){return e.$==r.$&&Fr(e.a,r.a)}function $i(e,r){var n=[];return Ne(e,r,n,0),n}function fe(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ne(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=uv(r),i=1;else{fe(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Ne(e.k,r.k,s,0),s.length>0&&fe(n,1,a,s);return;case 4:for(var m=e.j,d=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof m!="object"?m=[m,g.j]:m.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;if(f&&m.length!==d.length){fe(n,0,a,r);return}(f?!nv(m,d):m!==d)&&fe(n,2,a,d),Ne(g,b,n,a+1);return;case 0:e.a!==r.a&&fe(n,3,a,r.a);return;case 1:uo(e,r,n,a,av);return;case 2:uo(e,r,n,a,tv);return;case 3:if(e.h!==r.h){fe(n,0,a,r);return}var C=Ct(e.d,r.d);C&&fe(n,4,a,C);var L=r.i(e.g,r.g);L&&fe(n,5,a,L);return}}}function nv(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function uo(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){fe(n,0,a,r);return}var i=Ct(e.d,r.d);i&&fe(n,4,a,i),t(e,r,n,a)}function Ct(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ct(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&rv(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function av(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?fe(n,6,a,{v:l,i:c-l}):c<l&&fe(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Ne(s,i[v],n,++a),a+=s.b||0}}function tv(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,m=0,d=0,f=a;m<v&&d<s;){var g=l[m],b=u[d],C=g.a,L=b.a,_=g.b,w=b.b,A=void 0,W=void 0;if(C===L){f++,Ne(_,w,t,f),f+=_.b||0,m++,d++;continue}var j=l[m+1],U=u[d+1];if(j){var G=j.a,H=j.b;W=L===G}if(U){var V=U.a,X=U.b;A=C===V}if(A&&W){f++,Ne(_,X,t,f),Jr(i,t,C,w,d,c),f+=_.b||0,f++,Or(i,t,C,H,f),f+=H.b||0,m+=2,d+=2;continue}if(A){f++,Jr(i,t,L,w,d,c),Ne(_,X,t,f),f+=_.b||0,m+=1,d+=2;continue}if(W){f++,Or(i,t,C,_,f),f+=_.b||0,f++,Ne(H,w,t,f),f+=H.b||0,m+=2,d+=1;continue}if(j&&G===V){f++,Or(i,t,C,_,f),Jr(i,t,L,w,d,c),f+=_.b||0,f++,Ne(H,X,t,f),f+=H.b||0,m+=2,d+=2;continue}break}for(;m<v;){f++;var g=l[m],_=g.b;Or(i,t,g.a,_,f),f+=_.b||0,m++}for(;d<s;){var Z=Z||[],b=u[d];Jr(i,t,b.a,b.b,void 0,Z),d++}(t.length>0||c.length>0||Z)&&fe(n,8,a,{w:t,x:c,y:Z})}var fi="_elmW6BL";function Jr(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ne(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}Jr(e,r,n+fi,a,t,i)}function Or(e,r,n,a,t){var i=e[n];if(!i){var c=fe(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ne(a,i.z,l,t),fe(r,9,t,{w:l,A:i});return}Or(e,r,n+fi,a,t)}function si(e,r,n,a){qr(e,r,n,0,0,r.b,a)}function qr(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)si(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&qr(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var m=l.s;if(m){m.A.s=e;var s=m.w;s.length>0&&qr(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var d=r.$;if(d===4){for(var f=r.k;f.$===4;)f=f.k;return qr(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,C=0;C<g.length;C++){t++;var L=d===1?g[C]:g[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=qr(b[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function mi(e,r,n,a){return n.length===0?e:(si(e,r,n,a),Vn(e,n))}function Vn(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=ov(t,a);t===e&&(e=i)}return e}function ov(e,r){switch(r.$){case 0:return iv(e,r.s,r.u);case 4:return Ha(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Vn(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore($r(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=Vn(e,i.w),e;case 8:return cv(e,r);case 5:return r.s(e);default:jr(10)}}function iv(e,r,n){var a=e.parentNode,t=$r(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function cv(e,r){var n=r.s,a=lv(n.y,r);e=Vn(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:$r(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&gt(e,a),e}function lv(e,r){if(!!e){for(var n=rr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;gt(n,i.c===2?i.s:$r(i.z,r.u))}return n}}function yt(e){if(e.nodeType===3)return Ga(e.textContent);if(e.nodeType!==1)return Ga("");for(var r=T,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=qe(o(br,i,c),r)}for(var l=e.tagName.toLowerCase(),u=T,v=e.childNodes,a=v.length;a--;)u=qe(yt(v[a]),u);return p(Pr,l,r,u)}function uv(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var vv=F(function(e,r,n,a){return bt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=yt(l);return di(i,function(v){var s=c(v),m=$i(u,s);l=mi(l,u,m,t),u=s})})});F(function(e,r,n,a){return bt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cT&&e.cT(t),l=e.fQ,u=rr.title,v=rr.body,s=yt(v);return di(i,function(m){En=c;var d=l(m),f=Pr("body")(T)(d.eu),g=$i(s,f);v=mi(v,s,g,t),s=f,En=0,u!==d.fL&&(rr.title=u=d.fL)})})});var Un=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function di(e,r){r(e);var n=0;function a(){n=n===1?0:(Un(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&Un(a),n=2)}}$(function(e,r){return o(Bt,Dt,ir(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Bt,Dt,ir(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Bt,Dt,ir(function(){history.replaceState({},"",r),e()}))});var $v={addEventListener:function(){},removeEventListener:function(){}},fv=typeof window<"u"?window:$v;y(function(e,r,n){return oi(ir(function(a){function t(i){dt(n(i))}return e.addEventListener(r,t,_t&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Ae(e,r);return Ue(n)?ne(n.a):J});function pi(e,r){return ir(function(n){Un(function(){var a=document.getElementById(e);n(a?Tr(r(a)):yu(F$(e)))})})}function sv(e){return ir(function(r){Un(function(){r(Tr(e()))})})}$(function(e,r){return pi(r,function(n){return n[e](),sn})});$(function(e,r){return sv(function(){return fv.scroll(e,r),sn})});y(function(e,r,n){return pi(e,function(a){return a.scrollLeft=r,a.scrollTop=n,sn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var mv=$(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ne(new RegExp(r,n))}catch{return J}});$(function(e,r){return r.match(e)!==null});var dv=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var m=u[v];s[--v]=m?ne(m):J}a.push(x(fc,u[0],u.index,t,h(s))),l=r.lastIndex}return r.lastIndex=c,h(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):J}return n(x(fc,c,arguments[arguments.length-2],t,h(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,h(t)});var vo=0;function cn(e,r){for(;r.b;r=r.b)e(r.a)}function Lt(e){for(var r=0;e.b;e=e.b)r++;return r}var pv=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},bv=Le(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),gv=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),hv=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),_v=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Cv=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),yv=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Lv=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Sv=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),wv=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),xv=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Tv=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Pv=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Mv=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},bi=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},gi=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},zv=function(e){e.gl.disable(e.gl.CULL_FACE)},kv=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Dv=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Av=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},$o=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Bv=[Tv,Pv,Mv,bi,gi,zv,kv,Dv,Av];function fo(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Fv(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function hi(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Rv(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,C,L){var _;if(t===1)for(_=0;_<g;_++)f[b++]=g===1?C[L]:C[L][_];else i.forEach(function(w){for(_=0;_<g;_++)f[b++]=g===1?C[w][L]:C[w][L][_]})}var u=hi(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,m=new u.type(Lt(n.b)*s);cn(function(f){l(m,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var d=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,m,e.STATIC_DRAW),d}function Ev(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Vv(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Lt(r.b),indexBuffer:null,buffers:{}}}function Vv(e,r){var n=new Uint32Array(Lt(e)*r),a=0,t;return cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function so(e,r){return e+"#"+r}var _i=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),bi(n),gi(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=so(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=vo++,v||(v=fo(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=vo++,s||(s=fo(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var m=Fv(a,v,s);l={glProgram:m,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Uv(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var d=a.getProgramParameter(m,a.ACTIVE_ATTRIBUTES);for(u=0;u<d;u++){var f=a.getActiveAttrib(m,u),g=a.getAttribLocation(m,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=so(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Nv(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Ev(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Rv(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var C=hi(a,f.type);if(C.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,w=0;w<C.arraySize;w++)a.enableVertexAttribArray(g+w),a.vertexAttribPointer(g+w,C.size,C.baseType,!1,_,L*w)}for(n.toggle=!n.toggle,cn(od(n),i.a),u=0;u<$o.length;u++){var A=n[$o[u]];A.toggle!==n.toggle&&A.enabled&&(Bv[u](n),A.enabled=!1,A.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return cn(t,e.g),r});function Uv(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,C=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};case e.FLOAT:return function(_){i[b]!==_&&(e.uniform1f(C,_),i[b]=_)};case e.FLOAT_VEC2:return function(_){i[b]!==_&&(e.uniform2f(C,_[0],_[1]),i[b]=_)};case e.FLOAT_VEC3:return function(_){i[b]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[b]=_)};case e.FLOAT_VEC4:return function(_){i[b]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[b]=_)};case e.FLOAT_MAT4:return function(_){i[b]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[b]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var w=l.textures.get(_);w||(w=_.eC(e),l.textures.set(_,w)),e.bindTexture(e.TEXTURE_2D,w),i[b]!==_&&(e.uniform1i(C,L),i[b]=_)};case e.BOOL:return function(_){i[b]!==_&&(e.uniform1i(C,_),i[b]=_)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),m=0;m<s;m++){var d=e.getActiveUniform(t,m);v[a[d.name]||d.name]=u(t,d)}return v}function Nv(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var jv=y(function(e,r,n){return ju(r,{g:n,f:{},h:e},Ov,qv)}),Gv=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Hv=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Wv=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Iv=$(function(e,r){e.contextAttributes.antialias=!0}),Yv=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Jv=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ov(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};cn(function(t){return o(td,r,t)},e.h);var n=rr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),pv(function(){return o(_i,e,n)})):(n=rr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function qv(e,r){return r.f=e.f,_i(r)}var Zv=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Xv(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Xv(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var St=new Float64Array(3),mo=new Float64Array(3),po=new Float64Array(3),Qv=y(function(e,r,n){return new Float64Array([e,r,n])}),Kv=function(e){return e[0]},e$=function(e){return e[1]},r$=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var n$=function(e){return new Float64Array([e.fU,e.fY,e.c5])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Ci(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(Ci);function yi(e,r,n){return n===void 0&&(n=new Float64Array(3)),Nn(Ci(e,r,n),n)}$(yi);function Li(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function Nn(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Li(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var a$=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Zr=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(Zr);function Wa(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(Wa);$(function(e,r){var n,a=St,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Zr(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(Zr(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(Zr(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(Zr(r,a)+e[14])/n,t});var t$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var o$=function(e){return{fU:e[0],fY:e[1],c5:e[2],em:e[3]}},i$=function(e){return new Float64Array([e.fU,e.fY,e.c5,e.em])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/c$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function c$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var l$=new Float64Array(16),u$=new Float64Array(16),v$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},$$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function Si(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ee(Si);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Si(c,l,i,t,n,a)});function wi(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ee(wi);F(function(e,r,n,a){return wi(e,r,n,a,-1,1)});function xi(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],m=e[8],d=e[9],f=e[10],g=e[11],b=e[12],C=e[13],L=e[14],_=e[15],w=r[0],A=r[1],W=r[2],j=r[3],U=r[4],G=r[5],H=r[6],V=r[7],X=r[8],Z=r[9],te=r[10],ce=r[11],ae=r[12],ue=r[13],we=r[14],ge=r[15];return n[0]=a*w+l*A+m*W+b*j,n[1]=t*w+u*A+d*W+C*j,n[2]=i*w+v*A+f*W+L*j,n[3]=c*w+s*A+g*W+_*j,n[4]=a*U+l*G+m*H+b*V,n[5]=t*U+u*G+d*H+C*V,n[6]=i*U+v*G+f*H+L*V,n[7]=c*U+s*G+g*H+_*V,n[8]=a*X+l*Z+m*te+b*ce,n[9]=t*X+u*Z+d*te+C*ce,n[10]=i*X+v*Z+f*te+L*ce,n[11]=c*X+s*Z+g*te+_*ce,n[12]=a*ae+l*ue+m*we+b*ge,n[13]=t*ae+u*ue+d*we+C*ge,n[14]=i*ae+v*ue+f*we+L*ge,n[15]=c*ae+s*ue+g*we+_*ge,n}$(xi);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],m=e[10],d=e[12],f=e[13],g=e[14],b=r[0],C=r[1],L=r[2],_=r[4],w=r[5],A=r[6],W=r[8],j=r[9],U=r[10],G=r[12],H=r[13],V=r[14];return n[0]=a*b+c*C+v*L,n[1]=t*b+l*C+s*L,n[2]=i*b+u*C+m*L,n[3]=0,n[4]=a*_+c*w+v*A,n[5]=t*_+l*w+s*A,n[6]=i*_+u*w+m*A,n[7]=0,n[8]=a*W+c*j+v*U,n[9]=t*W+l*j+s*U,n[10]=i*W+u*j+m*U,n[11]=0,n[12]=a*G+c*H+v*V+d,n[13]=t*G+l*H+s*V+f,n[14]=i*G+u*H+m*V+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=Nn(r,St);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Li(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),m=i*s,d=c*s,f=l*s,g=i*c*v,b=i*l*v,C=c*l*v,L=i*i*v+u,_=g+f,w=b-d,A=g-f,W=c*c*v+u,j=C+m,U=b+d,G=C-m,H=l*l*v+u,V=n[0],X=n[1],Z=n[2],te=n[3],ce=n[4],ae=n[5],ue=n[6],we=n[7],ge=n[8],lr=n[9],ur=n[10],sa=n[11],bl=n[12],gl=n[13],hl=n[14],_l=n[15];return a[0]=V*L+ce*_+ge*w,a[1]=X*L+ae*_+lr*w,a[2]=Z*L+ue*_+ur*w,a[3]=te*L+we*_+sa*w,a[4]=V*A+ce*W+ge*j,a[5]=X*A+ae*W+lr*j,a[6]=Z*A+ue*W+ur*j,a[7]=te*A+we*W+sa*j,a[8]=V*U+ce*G+ge*H,a[9]=X*U+ae*G+lr*H,a[10]=Z*U+ue*G+ur*H,a[11]=te*U+we*G+sa*H,a[12]=bl,a[13]=gl,a[14]=hl,a[15]=_l,a});function f$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(f$);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function s$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(s$);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],m=a[6],d=a[7],f=a[8],g=a[9],b=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=m,t[7]=d,t[8]=f,t[9]=g,t[10]=b,t[11]=C,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+m*r+b*n+a[14],t[15]=u*e+d*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],m=r[5],d=r[6],f=r[7],g=r[8],b=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=m,n[6]=d,n[7]=f,n[8]=g,n[9]=b,n[10]=C,n[11]=L,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+m*t+b*i+r[13],n[14]=u*a+d*t+C*i+r[14],n[15]=v*a+f*t+L*i+r[15],n});y(function(e,r,n){var a=yi(e,r,St),t=Nn(Wa(n,a,mo),mo),i=Nn(Wa(a,t,po),po),c=l$,l=u$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,xi(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var B=zl,Cn=Tl;y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Cn,e,l,v)}else{var u=c.a;return p(Cn,i,l,u)}});return p(Cn,i,p(Cn,e,r,t),a)});var wt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(wt,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),bo=function(e){return p(wt,y(function(r,n,a){return o(B,M(r,n),a)}),T,e)},Ti=1,m$=2,Pi=0,de=function(e){return{$:1,a:e}},xt=$(function(e,r){return{$:3,a:e,b:r}}),go=$(function(e,r){return{$:0,a:e,b:r}}),Mi=$(function(e,r){return{$:1,a:e,b:r}}),ie=function(e){return{$:0,a:e}},d$=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},J={$:1},p$=nu,b$=Cu,Te=ni,hr=$(function(e,r){return o(Kl,e,ra(r))}),Tt=$(function(e,r){return h(o(Ql,e,r))}),zi=function(e){return o(hr,`
    `,o(Tt,`
`,e))},mn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),wr=function(e){return p(mn,$(function(r,n){return n+1}),0,e)},g$=kl,h$=y(function(e,r,n){e:for(;;)if(Y(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Pt=$(function(e,r){return p(h$,e,r,T)}),ki=$(function(e,r){return p(g$,e,o(Pt,0,wr(r)-1),r)}),Oe=uu,Di=function(e){var r=Oe(e);return 97<=r&&r<=122},Ai=function(e){var r=Oe(e);return r<=90&&65<=r},_$=function(e){return Di(e)||Ai(e)},C$=function(e){var r=Oe(e);return r<=57&&48<=r},y$=function(e){return Di(e)||Ai(e)||C$(e)},Pe=function(e){return p(mn,B,T,e)},Gr=Ol,L$=$(function(e,r){return`

(`+(Te(e+1)+(") "+zi(S$(r))))}),S$=function(e){return o(w$,e,T)},w$=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Gr(n);if(b.$===1)return!1;var C=b.a,L=C.a,_=C.b;return _$(L)&&o(p$,y$,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(B,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Te(i)+"]"),u=c,v=o(B,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var m=function(){return r.b?"The Json.Decode.oneOf at json"+o(hr,"",Pe(r)):"Json.Decode.oneOf"}(),g=m+(" failed in the following "+(Te(wr(s))+" ways:"));return o(hr,`

`,o(B,g,o(ki,L$,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(hr,"",Pe(r)):"!"}();default:var d=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(hr,"",Pe(r))+`:

    `):`Problem with the given value:

`}();return g+(zi(o(b$,4,f))+(`

`+d))}}),Me=32,Ia=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Ya=yl,Bi=jl,Mt=$(function(e,r){return no(r)/no(e)}),x$=Ul,ln=Bi(o(Mt,2,Me)),Fi=x(Ia,0,ln,Ya,Ya),Ri=Sl,Ei=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Vi=Gl,Ja=Ll,xr=$(function(e,r){return Y(e,r)>0?e:r}),T$=function(e){return{$:0,a:e}},zt=wl,P$=$(function(e,r){e:for(;;){var n=o(zt,Me,e),a=n.a,t=n.b,i=o(B,T$(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Pe(i)}}),M$=function(e){var r=e.a;return r},z$=$(function(e,r){e:for(;;){var n=Bi(r/Me);if(n===1)return o(zt,Me,e).a;var a=o(P$,e,T),t=n;e=a,r=t;continue e}}),Ui=$(function(e,r){if(r.l){var n=r.l*Me,a=Vi(o(Mt,Me,n-1)),t=e?Pe(r.z):r.z,i=o(z$,t,r.l);return x(Ia,Ja(r.p)+n,o(xr,5,a*ln),i,r.p)}else return x(Ia,Ja(r.p),ln,Ya,r.p)}),k$=Le(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Ui,!1,{z:a,l:n/Me|0,p:t});var i=Ei(p(Ri,Me,r,e)),c=e,l=r-Me,u=n,v=o(B,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),D$=$(function(e,r){if(e<=0)return Fi;var n=e%Me,a=p(Ri,n,e-n,r),t=e-n-Me;return S(k$,r,t,e,T,a)}),Ue=function(e){return!e.$},z=bu,q=fu,P=pu,le=su,jn=gu,A$=hu,xe=$u,kt=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Pr("div"),B$=function(e){return{$:2,a:e}},Ni=$(function(e,r){return e}),ji=$(function(e,r){return{db:r.db,eA:e,ca:r.ca,eJ:r.eJ,e7:r.e7,fs:r.fs,cS:r.cS,fR:r.fR}}),Cr=function(e){return e},F$=Cr,ho=Ee(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),R$=au,_r=ql,Rr=eu,dn=$(function(e,r){return e<1?r:p(Rr,e,_r(r),r)}),na=ou,aa=function(e){return e===""},ta=$(function(e,r){return e<1?"":p(Rr,0,e,r)}),Gi=iu,_o=Le(function(e,r,n,a,t){if(aa(t)||o(R$,"@",t))return J;var i=o(na,":",t);if(i.b){if(i.b.b)return J;var c=i.a,l=Gi(o(dn,c+1,t));if(l.$===1)return J;var u=l;return ne(me(ho,e,o(ta,c,t),u,r,n,a))}else return ne(me(ho,e,t,J,r,n,a))}),Co=F(function(e,r,n,a){if(aa(a))return J;var t=o(na,"/",a);if(t.b){var i=t.a;return S(_o,e,o(dn,i,a),r,n,o(ta,i,a))}else return S(_o,e,"/",r,n,a)}),yo=y(function(e,r,n){if(aa(n))return J;var a=o(na,"?",n);if(a.b){var t=a.a;return x(Co,e,ne(o(dn,t+1,n)),r,o(ta,t,n))}else return x(Co,e,J,r,n)});$(function(e,r){if(aa(r))return J;var n=o(na,"#",r);if(n.b){var a=n.a;return p(yo,e,ne(o(dn,a+1,r)),o(ta,a,r))}else return p(yo,e,J,r)});var E$=tu,Dt=function(e){},pn=Tr,V$=pn(0),Hi=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,m=v.b,d=n>500?p(mn,e,r,Pe(m)):x(Hi,e,r,n+1,m);return o(e,t,o(e,c,o(e,u,o(e,s,d))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),cr=y(function(e,r,n){return x(Hi,e,r,0,n)}),be=$(function(e,r){return p(cr,$(function(n,a){return o(B,e(n),a)}),T,r)}),Gn=ja,At=$(function(e,r){return o(Gn,function(n){return pn(e(n))},r)}),U$=y(function(e,r,n){return o(Gn,function(a){return o(Gn,function(t){return pn(o(e,a,t))},n)},r)}),N$=function(e){return p(cr,U$(B),pn(T),e)},j$=zu,G$=$(function(e,r){var n=r;return oi(o(Gn,j$(e),n))}),H$=y(function(e,r,n){return o(At,function(a){return 0},N$(o(be,G$(e),r)))}),W$=y(function(e,r,n){return pn(0)}),I$=$(function(e,r){var n=r;return o(At,e,n)});Je.Task=Pu(V$,H$,W$,I$);var Y$=ci("Task"),Bt=$(function(e,r){return Y$(o(At,e,r))}),J$=vv,O$=Yl,Hn={$:1},Wi=function(e){return{$:2,a:e}},oa={$:0},Be=$(function(e,r){return{$:0,a:e,b:r}}),ee=y(function(e,r,n){return r(e(n))}),Hr=function(e){var r=e.b.B;return r.a},q$=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Be,r,{B:i,ab:c,T:o(B,a,n)}))}else return J},Ii=function(e){var r=e.b;return o(Be,oa,r)},tr=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Z$=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Ii(n):n;case 2:var i=a.a.cX;return(Y(i+r.eJ,Hr(n).db)>0?o(ee,q$,tr(o(Be,Hn,t))):Cr)(o(Be,Wi({cX:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,v=o(ji,l.eA,Ye(r,{db:l.db+r.eJ})),s=o(e,v,u);return o(Be,oa,{B:M(v,s),ab:T,T:o(B,t.B,t.T)})}}),Yi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),X$=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),Q$=$(function(e,r){return Pe(p(X$,e,r,T))}),Ji=y(function(e,r,n){if(r<=0)return T;{var a=M(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return h([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return h([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var m=a.b,_=m.a,d=m.b,c=d.a,f=d.b,s=f.a,g=f.b,b=g.a,C=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,b,o(Q$,r-4,C))))):o(B,_,o(B,c,o(B,s,o(B,b,p(Ji,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return h([_])}}),K$=$(function(e,r){return p(Ji,0,e,r)}),ef=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=oe(Pe(n),oe(h([a]),t)),c=o(K$,e,i),l=o(Yi,e,i);if(l.b){var u=l.a,v=l.b;return o(Be,Hn,{B:u,ab:v,T:Pe(c)})}else{var s=Pe(c);if(s.b){var m=s.a,d=s.b;return o(Be,Hn,{B:m,ab:T,T:d})}else return r}}),rf=function(e){var r=e.b;return o(Be,Hn,r)},nf=function(e){var r=e.b;return o(Be,Wi({cX:Hr(e).db}),r)},af=$(function(e,r){switch(e.$){case 1:return rf(r);case 2:return Ii(r);case 3:return nf(r);default:var n=e.a;return o(ef,n,r)}}),Oi=$(function(e,r){var n=r.a,a=r.b;return M(e(n),a)}),tf=$(function(e,r){return Ye(r,{av:e(r.av)})}),of=function(e){return{$:3,a:e}},qi=function(e){return{$:2,a:e}},Zi=$(function(e,r){return{$:0,a:e,b:r}}),cf=$(function(e,r){return{$:1,a:e,b:r}}),ye=$(function(e,r){if(r.$)return J;var n=r.a;return ne(e(n))}),Q=function(e){return e<0?-e:e},Ft=cu,lf=y(function(e,r,n){return o(tr,0/0,Ft(o(e,r,n)))}),Xi=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),uf=Xl,Qi=function(e){return p(uf,B,T,e)},vf=$(function(e,r){var n=o(Xi,function(a){return a!=="0"&&a!=="."},Qi(r));return oe(e&&n?"-":"",r)}),re=ni,Oa=Jl,Ki=vu,ec=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Gr(n);if(a.$===1)return"01";var t=a.a;return o(Oa,"0",ec(t))}else{var i=Oe(r);return i>=48&&i<57?o(Oa,Ki(i+1),n):"0"}},qa=Nl,$f=Il,ia=function(e){return o(Oa,e,"")},rc=y(function(e,r,n){return e<=0?n:p(rc,e>>1,oe(r,r),e&1?oe(n,r):n)}),un=$(function(e,r){return p(rc,e,r,"")}),Za=y(function(e,r,n){return oe(n,o(un,e-_r(n),ia(r)))}),Xa=Zl,nc=function(e){var r=o(Tt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return M(n,t)}else{var n=r.a;return M(n,"0")}else return M("0","0")},ff=function(e){var r=o(Tt,"e",re(Q(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(tr,0,Gi(o(E$,"+",t)?o(dn,1,t):t)),c=nc(n),l=c.a,u=c.b,v=oe(l,u),s=i<0?o(tr,"0",o(ye,function(m){var d=m.a,f=m.b;return d+("."+f)},o(ye,Oi(ia),Gr(oe(o(un,Q(i),"0"),v))))):p(Za,i+1,"0",v);return oe(e<0?"-":"",s)}else{var n=r.a;return oe(e<0?"-":"",n)}else return""},sf=y(function(e,r,n){if(qa(n)||$f(n))return re(n);var a=n<0,t=nc(ff(Q(n))),i=t.a,c=t.b,l=_r(i)+r,u=oe(o(un,-l+1,"0"),p(Za,l,"0",oe(i,c))),v=_r(u),s=o(xr,1,l),m=o(e,a,p(Rr,s,v,u)),d=p(Rr,0,s,u),f=m?Xa(o(tr,"1",o(ye,ec,Gr(Xa(d))))):d,g=_r(f),b=f==="0"?f:r<=0?oe(f,o(un,Q(r),"0")):Y(r,_r(c))<0?p(Rr,0,g-r,f)+("."+p(Rr,g-r,g,f)):oe(i+".",p(Za,r,"0",c));return o(vf,a,b)}),ac=sf($(function(e,r){var n=Gr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Oe(t))})),mf=lf(ac),df=y(function(e,r,n){var a=o(Mt,10,Q(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(mf,t,n)}),tc=Ml,ca=$(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(tc,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),R=Le(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),Ze={$:-2},Ur=Le(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,m=a.d,d=a.e;return S(R,0,r,n,S(R,1,v,s,m,d),S(R,1,i,c,l,u))}else return S(R,e,i,c,S(R,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,C=f.d,L=f.e,d=a.e;return S(R,0,v,s,S(R,1,g,b,C,L),S(R,1,r,n,d,t))}else return S(R,e,r,n,a,t)}),Qa=y(function(e,r,n){if(n.$===-2)return S(R,0,e,r,Ze,Ze);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(tc,e,t);switch(u){case 0:return S(Ur,a,t,i,p(Qa,e,r,c),l);case 1:return S(R,a,t,r,c,l);default:return S(Ur,a,t,i,c,p(Qa,e,r,l))}}),Qr=y(function(e,r,n){var a=p(Qa,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(R,1,t,i,c,l)}else{var u=a;return u}}),pf=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},oc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,m=v.c,d=v.d;d.a;var f=d.b,g=d.c,b=d.d,C=d.e,L=v.e;return S(R,0,f,g,S(R,1,n,a,S(R,0,i,c,l,u),b),S(R,1,s,m,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,w=e.e;w.a;var s=w.b,m=w.c,d=w.d,L=w.e;return S(R,1,n,a,S(R,0,i,c,l,u),S(R,0,s,m,d,L))}else return e},Lo=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,m=l.e,d=t.e,f=e.e;f.a;var g=f.b,b=f.c,C=f.d,L=f.e;return S(R,0,i,c,S(R,1,u,v,s,m),S(R,1,n,a,d,S(R,0,g,b,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,w=_.d,d=_.e,A=e.e;A.a;var g=A.b,b=A.c,C=A.d,L=A.e;return S(R,1,n,a,S(R,0,i,c,w,d),S(R,0,g,b,C,L))}else return e},bf=ft(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(R,n,l,u,v,S(R,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var m=c.d;return m.a,Lo(r)}else break e;else return c.a,c.d,Lo(r);else break e;return r}}),zn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(R,r,n,a,zn(t),l);var u=oc(e);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Ur,v,s,m,zn(d),f)}else return Ze}else return S(R,r,n,a,zn(t),l)}else return Ze},Kr=$(function(e,r){if(r.$===-2)return Ze;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Y(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(R,n,a,t,o(Kr,e,i),c);var u=oc(r);if(u.$===-1){var v=u.a,s=u.b,m=u.c,d=u.d,f=u.e;return S(Ur,v,s,m,o(Kr,e,d),f)}else return Ze}else return S(R,n,a,t,o(Kr,e,i),c);else return o(gf,e,ri(bf,e,r,n,a,t,i,c))}),gf=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(Sr(e,a)){var l=pf(c);if(l.$===-1){var u=l.b,v=l.c;return S(Ur,n,u,v,i,zn(c))}else return Ze}else return S(Ur,n,a,t,i,o(Kr,e,c))}else return Ze}),hf=$(function(e,r){var n=o(Kr,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(R,1,a,t,i,c)}else{var l=n;return l}}),yn=y(function(e,r,n){var a=r(o(ca,e,n));if(a.$)return o(hf,e,n);var t=a.a;return p(Qr,e,t,n)}),_f=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(yn,r,ye(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(cf,M(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(yn,r,ye(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Zi,M(i,c),p(df,i,c,n))}));case 3:var r=e.a,n=e.b;return o(yn,r,ye(function(a){return a.$===3?of(n):a}));default:var r=e.a,n=e.b;return o(yn,r,ye(function(a){return a.$===2?qi(n):a}))}},Cf=function(e){return tf(_f(e))},yf=$(function(e,r){return o(be,Cf(e),r)}),Lf=$(function(e,r){return Ye(r,{eA:o(yf,e,r.eA)})}),Sf=$(function(e,r){var n=r.a,a=r.b;return o(Be,n,Ye(a,{B:o(Oi,Lf(e),a.B)}))}),wf=$(function(e,r){var n=r.a,a=r.b;return M(n,e(a))}),xf=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Be,a,Ye(t,{B:o(wf,o(e,i.a,r),i)}))}),Tf=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ye(a,{aL:!a.aL});case 2:var t=n.a;return Ye(a,{G:p(Z$,e,t,a.G)});case 3:var i=n.a;return Ye(a,{G:o(Sf,i,a.G)});case 4:var c=n.a;return Ye(a,{G:p(xf,r,c,a.G)});default:var l=n.a;return Ye(a,{G:o(af,l,a.G)})}}),Pf=$(function(e,r){return o(Be,oa,{B:M(e,r(e)),ab:T,T})}),Mf=ku,So=Mf(T),Wn=du,vn=mu,zf=Ru("tick",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return xe({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(P,"clock",le))},o(P,"devicePixelRatio",le))},o(P,"dt",le))},o(P,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return xe({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",q))},o(P,"control",q))},o(P,"down",q))},o(P,"downs",Wn(vn)))},o(P,"left",q))},o(P,"pressedKeys",Wn(vn)))},o(P,"right",q))},o(P,"shift",q))},o(P,"up",q))))},o(P,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return xe({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",q))},o(P,"isDown",q))},o(P,"move",q))},o(P,"rightDown",q))},o(P,"rightUp",q))},o(P,"up",q))},o(P,"x",le))},o(P,"y",le))))},o(P,"screen",o(z,function(r){return o(z,function(n){return xe({eW:n,fS:r})},o(P,"height",le))},o(P,"width",le))))},o(P,"wheel",o(z,function(e){return o(z,function(r){return xe({eE:r,eF:e})},o(P,"deltaX",le))},o(P,"deltaY",le))))),kf=function(e){return{$:4,a:e}},Df={$:0},Af=ti,Ve=$(function(e,r){return o(vi,e,Af(r))}),N=Ve("className"),Bf=function(e){var r=e.b.B;return r.b},In=Ve("id"),Ff=Gu,Yn=Ff,Rf=Hu,K=Rf,Ef={$:1},Vf=function(e){return{$:3,a:e}},Uf=function(e){return{$:5,a:e}},wo=Pr("a"),Rt=Pr("button"),xo=function(e){return o(Ve,"href",Yu(e))},Nf=br("clip-rule"),he=br("d"),jf=br("fill"),ic=li("http://www.w3.org/2000/svg"),Gf=ic("svg"),Hf=br("viewBox"),Wf=o(Wu,"http://www.w3.org/XML/1998/namespace","xml:space"),ze=Gf(h([Hf("0 0 24 24"),jf("currentColor"),o(K,"width","100%"),o(K,"height","100%"),Wf("http://www.w3.org/2000/svg")])),If=br("fill-rule"),_e=ic("path"),yr={eD:ze(h([o(_e,h([he("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),T)])),eQ:ze(h([o(_e,h([he("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),T)])),eV:ze(h([o(_e,h([he("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),T)])),fe:ze(h([o(_e,h([he("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),T),o(_e,h([he("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),T)])),ff:ze(h([o(_e,h([he("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),T),o(_e,h([he("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),T)])),fp:ze(h([o(_e,h([he("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),T)])),fq:ze(h([o(_e,h([he("M7 5V19L18 12L7 5Z")]),T)])),fr:ze(h([o(_e,h([he("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),T)])),fs:ze(h([o(_e,h([he("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),T)])),fM:ze(h([o(_e,h([If("evenodd"),Nf("evenodd"),he("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),T)])),fN:ze(h([o(_e,h([he("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),T)])),f0:ze(h([o(_e,h([he("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),T)]))},Yf=function(e){return{$:0,a:e}},cc=ui,lc=$(function(e,r){return o(cc,e,Yf(r))}),Et=function(e){return o(lc,"click",xe(e))},To=Ve("target"),Jf=Ve("title"),Ka=$(function(e,r){if(r.$===-2)return Ze;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(R,n,a,o(e,a,t),o(Ka,e,i),o(Ka,e,c))}),Of=Ga,or=Of,qf=function(e){return p(wt,y(function(r,n,a){return o(B,n,a)}),T,e)},Zf=$(function(e,r){return{$:3,a:e,b:r}}),Xf=$(function(e,r){return{$:2,a:e,b:r}}),Qf=$(function(e,r){return{$:0,a:e,b:r}}),Kf=$(function(e,r){return{$:1,a:e,b:r}}),bn=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Vt=x(bn,0/255,0/255,0/255,1),es=ti,uc=$(function(e,r){return o(vi,e,es(r))}),rs=uc("checked"),je=Hl,ns=y(function(e,r,n){return oe(o(un,e-_r(n),ia(r)),n)}),as=Al,vc=function(e){var r=function(n){return n<10?Te(n):ia(Ki(87+n))};return e<16?r(e):oe(vc(e/16|0),r(o(as,16,e)))},ts=o(ee,vc,o(ns,2,"0")),$c=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cc:n,cM:r}},os=function(e){var r=$c(e),n=r.cM,a=r.cc,t=r.b5;return o(hr,"",o(B,"#",o(be,o(ee,je,ts),h([n*255,a*255,t*255]))))},et=Ve("htmlFor"),is=$(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),Jn=$(function(e,r){if(r.$){var a=r.a;return de(a)}else{var n=r.a;return e(n)}}),cs=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),la=$(function(e,r){return p(cr,cs(e),T,r)}),fc=F(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),ls=dv,us=lu,vs=$(function(e,r){if(r.$)return de(e);var n=r.a;return ie(n)}),$s=mv,fs=function(e){return o($s,{ew:!1,fg:!1},e)},ua=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return J},ss=$(function(e,r){if(r.$){var a=r.a;return de(a)}else{var n=r.a;return ie(e(n))}}),ms=function(e){return{$:2,a:e}},ds=function(e){return{$:0,a:e}},ps=function(e){return{$:1,a:e}},pa=$(function(e,r){return Oe(r)-Oe(e)}),ba=y(function(e,r,n){var a=Oe(n);return Y(Oe(e),a)<1&&Y(a,Oe(r))<1}),bs=$(function(e,r){var n=function(t){return Y(t,e)<0?ie(t):de(ps(r))},a=p(ba,"0","9",r)?ie(o(pa,"0",r)):p(ba,"a","z",r)?ie(10+o(pa,"a",r)):p(ba,"A","Z",r)?ie(10+o(pa,"A",r)):de(ds(r));return o(Jn,n,a)}),sc=$(function(e,r){var n=Gr(r);if(n.$===1)return ie(0);var a=n.a,t=a.a,i=a.b;return o(Jn,function(c){return o(Jn,function(l){return ie(c+l*e)},o(sc,e,i))},o(bs,e,t))}),gs=$(function(e,r){return 2<=e&&e<=36?o(sc,e,Xa(r)):de(ms(e))}),hs=gs(16),_s=y(function(e,r,n){return x(bn,e,r,n,1)}),Cs=F(function(e,r,n,a){return x(bn,e,r,n,a)}),gn=Dl,ys=$(function(e,r){var n=o(gn,10,e);return je(r*n)/n}),Ls=ru,Ss=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Qi(n);if(a.b&&!a.b.b){var t=a.a;return us(h([t,t]))}else return n};return o(ee,Ls,o(ee,function(n){return o(ye,function(a){return p(ls,1,a,n)},fs(e))},o(ee,is(ua),o(ee,ye(function(n){return n.fG}),o(ee,ye(la(Cr)),o(ee,vs("Parsing hex regex failed"),Jn(function(n){var a=o(be,o(ee,r,o(ee,hs,ss(x$))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ie(x(Cs,t/255,c/255,u/255,o(ys,2,s/255)))}else break e;else{var t=a.a.a,m=a.b,c=m.a.a,d=m.b,u=d.a.a;return ie(p(_s,t/255,c/255,u/255))}else break e;return de("Parsing ints from hex failed")})))))))}(),On=Pr("input"),rt=Pr("label"),nt=Ve("name"),mc=$(function(e,r){return p(cr,P,r,e)}),ws=o(mc,h(["target","checked"]),q),xs=function(e){return o(lc,"change",o(jn,e,ws))},Ts=function(e){return M(e,!0)},Ps=function(e){return{$:1,a:e}},Ms=$(function(e,r){return o(cc,e,Ps(r))}),zs=o(mc,h(["target","value"]),vn),Ut=function(e){return o(Ms,"input",o(jn,Ts,o(jn,e,zs)))},dc=Ve("max"),pc=Ve("min"),bc=function(e){return o(Ve,"step",e)},qn=Ve("type"),Nt=Ve("value"),Po=function(e){var r=e.cf,n=e.c0,a=e.cv,t=e.cr,i=e.cV,c=e.cz;return o(I,T,h([o(rt,h([et(r)]),h([o(I,h([N("relative w-full")]),h([o(I,h([N("inline-block")]),h([or(r)])),o(I,h([N("inline-block float-right")]),h([or(re(n))]))]))])),o(On,h([qn("range"),o(K,"width","100%"),In(r),nt(r),pc(re(a)),dc(re(t)),Nt(re(n)),bc(re(i)),Ut(o(ee,Ft,o(ee,tr(42),c)))]),T)]))},ks=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Ds=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,h([N("h-12 py-4")]),h([o(rt,h([N("block"),et(e)]),h([o(On,h([N("relative bottom-[1px] align-middle mr-2"),qn("checkbox"),In(e),nt(e),xs(Zf(e)),rs(c)]),T),or(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Po({cf:e,cr:i,cv:t,cz:Qf(e),cV:.01*(i-t),c0:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Po({cf:e,cr:i,cv:t,cz:o(ee,je,Kf(e)),cV:1,c0:c});default:var c=r.a;return o(I,T,h([o(I,h([o(K,"margin-bottom","6px")]),h([o(rt,h([et(e)]),h([or(e)]))])),o(On,h([qn("color"),o(K,"width","100%"),o(K,"height","26px"),o(K,"padding","0px"),In(e),nt(e),Ut(function(l){return o(Xf,e,o(ks,Vt,Ss(l)))}),Nt(os(c))]),T)]))}}),As=function(e){return o(I,h([N("p-4 border-y-[0.5px] border-white20")]),h([o(I,h([N("text-lg pb-2")]),h([or(e.fh)])),o(I,h([N("pl-2 pr-2")]),qf(o(Ka,Ds,e.av)))]))},Bs=function(e){return o(I,h([N("text-xs text-white60")]),o(be,As,e))},Fs=function(e){return o(I,h([N("absolute left-[104px] bottom-2 text-sm text-white40")]),h([or("clock: "+o(ac,3,Hr(e).db))]))},Rs=function(e){e.a;var r=e.b.T;return o(ye,function(n){return je(60/(Hr(e).db-n))},o(ye,o(ee,M$,function(n){return n.db}),ua(o(Yi,59,r))))},Es=function(e){return o(I,h([N("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=Rs(e);if(r.$===1)return h([or("... Fps")]);var n=r.a;return h([or(Te(n)+" Fps")])}())},Vs=function(e){return{$:0,a:e}},Us=function(e){var r=e.b.T;return wr(r)},Ns=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return wr(r)+1+wr(n)},js=function(e){return o(On,h([N("absolute w-full"),qn("range"),pc(Te(0)),dc(Te(Ns(e)-1)),Nt(Te(Us(e))),bc(Te(1)),Ut(o(ee,Ft,o(ee,tr(42),o(ee,je,Vs))))]),T)},Mo={$:1},zo={$:3},ko={$:2},at=function(e){return!e.b},gc=uc("disabled"),ga=y(function(e,r,n){return o(Rt,h([N("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),N(n),gc(e),Et(r)]),h([or("REC")]))}),ha=y(function(e,r,n){return o(Rt,h([N("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),gc(e),Et(n)]),h([o(I,h([N("w-4 h-6 text-white60 hover:text-white80")]),h([r]))]))}),Gs=function(e){var r=e.a,n=e.b.ab;return o(I,h([N("py-1")]),h([function(){switch(r.$){case 0:return p(ga,!1,Mo,"text-red-500 font-bold");case 1:return p(ga,!1,ko,"text-white60 hover:text-white80 font-bold");default:return p(ga,!0,ko,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return p(ha,at(n),yr.fq,zo);case 1:return p(ha,at(n),yr.fq,zo);default:return p(ha,!1,yr.fp,Mo)}}()]))},Hs=function(e){return o(I,h([N("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),h([js(e),Gs(e),Es(e),Fs(e)]))},Ws=function(e){var r=e.a;return Sr(r,oa)},Is=$(function(e,r){var n=Ws(r.G)?o(I,T,T):o(I,h([N("absolute pointer-events-none w-8 h-8"),o(K,"left",re(e.fs.fU+.5*e.cS.fS)+"px"),o(K,"top",re(-e.fs.fY+.5*e.cS.eW)+"px")]),h([o(I,h([N(e.fs.e4?"text-black80":"text-black40")]),h([yr.fs]))]));return o(I,T,h([n]))}),Ys=$(function(e,r){var n=o(Rt,h([N(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),Et(Ef),Jf("Distraction Free Mode")]),h([yr.f0])),a=40,t=260,i=o(I,h([N("absolute w-8 bottom-12")]),h([o(wo,h([N("text-twitterBlue40 hover:text-twitterBlue"),xo("https://twitter.com/AzizErkalSelman"),To("_blank")]),h([yr.fN]))])),c=80,l=o(I,h([N("absolute w-8 bottom-2")]),h([o(wo,h([N("text-githubCat40 hover:text-githubCat"),xo("https://github.com/erkal/elm-3d-playground-exploration"),To("_blank")]),h([yr.eQ]))])),u=e.cS.fS>640?O(e.cS.eW,a+t,e.cS.fS-(a+t)):O(e.cS.eW-c,a,e.cS.fS-a),v=u.a,s=u.b,m=u.c;return r.aL?o(I,h([N("fixed w-10 h-10 p-1")]),h([n])):o(I,T,h([o(I,h([N("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(K,"width",re(a)+"px")]),h([n,i,l])),o(I,h([N("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(K,"width",re(t)+"px"),o(K,"height",re(v)+"px")]),h([o(Yn,Vf,Bs(Hr(r.G).eA))])),o(I,h([N("absolute bottom-0"),o(K,"left",re(s)+"px"),o(K,"height",re(c)+"px"),o(K,"width",re(m)+"px")]),h([o(Yn,Uf,Hs(r.G))])),o(Is,e,r)]))}),Js=y(function(e,r,n){var a=Bf(n.G),t=Hr(n.G);return o(I,h([N("bg-black40"),N("select-none"),N("antialiased"),N("font-mono"),o(K,"width",re(t.cS.fS)+"px"),o(K,"height",re(t.cS.eW)+"px")]),h([o(I,h([N("fixed")]),h([o(Yn,Ni(Df),o(e,t,a))])),o(I,h([In("gui")]),h([o(Ys,t,n),o(Yn,kf,o(r,t,a))]))]))}),Os=Ee(function(e,r,n,a,t,i){var c=$(function(u,v){return M(x(Tf,r,i,u,v),So)}),l=function(u){var v=o(ji,n,u.e1);return M({aL:u.e1.cS.fS<500,G:o(Pf,v,a)},So)};return J$({e0:l,fH:Ni(zf(B$)),fO:c,fQ:o(Js,e,t)})}),qs=F(function(e,r,n,a){return me(Os,e,r,n,a,$(function(t,i){return o(I,T,T)}),y(function(t,i,c){return c}))}),Zs=function(e){return{}},Xs=$(function(e,r){return M(e,qi(r))}),Qs=y(function(e,r,n){return{av:n,e5:r,fh:e}}),hc=Ze,Ks=function(e){return p(mn,$(function(r,n){var a=r.a,t=r.b;return p(Qr,a,t,n)}),hc,e)},em=y(function(e,r,n){return p(Qs,e,r,Ks(n))}),_a=em,Ln=y(function(e,r,n){var a=r.a,t=r.b;return M(e,o(Zi,M(a,t),n))}),rm=F(function(e,r,n,a){var t=O(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},m=s(i-1/3),d=s(i),f=s(i+1/3);return x(bn,f,d,m,a)}),nm=y(function(e,r,n){return x(rm,e,r,n,1)}),Lr=Bl,am=h([p(_a,"Camera",!0,h([p(Ln,"camera distance",M(3,8),8),p(Ln,"camera azimuth",M(0,2*Lr),0),p(Ln,"camera elevation",M(-Lr/2,Lr/2),.5)])),p(_a,"Color",!0,h([o(Xs,"cube color",p(nm,0,.36,.5))])),p(_a,"Time",!0,h([p(Ln,"period",M(.1,5),.7)]))]),tm=$(function(e,r){return r}),om=$(function(e,r){return o(ye,function(n){if(n.$)return 0;var a=n.b;return a},o(ca,e,r.av))}),im=$(function(e,r){return o(tr,0,ua(o(la,om(e),r)))}),cm=$(function(e,r){return o(im,e,r.eA)}),kn=cm,lm=Vl,um=function(e){return e},en=function(e){return e},tt=function(e){var r=e;return-r},vm=$(function(e,r){var n=e,a=r;return{fU:n.fY*a.c5-n.c5*a.fY,fY:n.c5*a.fU-n.fU*a.c5,c5:n.fU*a.fY-n.fY*a.fU}}),_c=function(e){var r=e;return r.c3},Cc=function(e){var r=e;return r.c4},$m=function(e){return o(vm,_c(e),Cc(e))},Wr=function(e){var r=e;return r.cA},$n=Fl,Zn=Rl,Ca=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=$n(c),u=Zn(c),v=a.eH,s=v,m=s.fU*u,d=l*m,f=m*m,g=s.fY*u,b=l*g,C=m*g,L=g*g,_=1-2*(f+L),w=s.c5*u,A=l*w,W=2*(C-A),j=2*(C+A),U=m*w,G=2*(U+b),H=2*(U-b),V=g*w,X=2*(V-d),Z=2*(V+d),te=w*w,ce=1-2*(L+te),ae=1-2*(f+te);return{fU:ce*i.fU+W*i.fY+G*i.c5,fY:j*i.fU+ae*i.fY+X*i.c5,c5:H*i.fU+Z*i.fY+_*i.c5}}),fm=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=$n(c),u=Zn(c),v=a.cA,s=v,m=i.fU-s.fU,d=i.fY-s.fY,f=i.c5-s.c5,g=a.eH,b=g,C=b.fU*u,L=l*C,_=C*C,w=b.fY*u,A=l*w,W=C*w,j=w*w,U=1-2*(_+j),G=b.c5*u,H=l*G,V=2*(W-H),X=2*(W+H),Z=C*G,te=2*(Z+A),ce=2*(Z-A),ae=w*G,ue=2*(ae-L),we=2*(ae+L),ge=G*G,lr=1-2*(j+ge),ur=1-2*(_+ge);return{fU:s.fU+lr*m+V*d+te*f,fY:s.fY+X*m+ur*d+ue*f,c5:s.c5+ce*m+we*d+U*f}}),Ir=function(e){return e},Mr=function(e){var r=e;return r.c3},zr=function(e){var r=e;return r.c4},kr=function(e){var r=e;return r.c6},sm=y(function(e,r,n){return Ir({cA:p(fm,e,r,Wr(n)),c3:p(Ca,e,r,Mr(n)),c4:p(Ca,e,r,zr(n)),c6:p(Ca,e,r,kr(n))})}),Do=y(function(e,r,n){return p(sm,e(n),r,n)}),mm=function(e){var r=e;return r.eH},dm=$(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c5:a.c5+n.c5}}),pm=$(function(e,r){return Ir({cA:o(dm,e,Wr(r)),c3:Mr(r),c4:zr(r),c6:kr(r)})}),bm=$(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c5:n*a.c5}}),gm=y(function(e,r,n){return o(pm,o(bm,r,e),n)}),hm=y(function(e,r,n){return p(gm,mm(e(n)),r,n)}),jt=$(function(e,r){return{eH:r,cA:e}}),_m=function(e){var r=e;return o(jt,r.cA,r.c3)},Cm=function(e){var r=e;return o(jt,r.cA,r.c4)},ym=function(e){var r=e;return o(jt,r.cA,r.c6)},Lm=function(e){var r=Ir({cA:e.aR,c3:Cc(e.dl),c4:$m(e.dl),c6:_c(e.dl)}),n=p(hm,ym,e.cb,p(Do,_m,tt(e.bC),p(Do,Cm,e.bx,r)));return n},Sm=function(e){return{$:0,a:e}},Fe=function(e){var r=e;return Q(r)},Dn=function(e){var r=e;return .5*r},wm=El,xm=function(e){var r=e;return wm(r)},Tm=function(e){var r=Dn(Fe(e.ej)),n=xm(r);return{cL:Sm(n),c1:e.c1}},rn=function(e){return e},Gt={fU:0,fY:0,c5:0},Pm=Cr,nr=function(e){return e},yc=nr({fU:1,fY:0,c5:0}),Lc=yc,Sc=nr({fU:0,fY:0,c5:1}),Ht=Sc,Mm=Pm({cA:Gt,c3:Ht,c4:Lc}),zm=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cb;return Tm({ej:rn(2*lm(.5)),c1:Lm({bx:rn(n),cb:en(t),bC:rn(a),aR:um(r),dl:Mm})})},km=function(e){return zm({bx:o(kn,"camera azimuth",e),cb:o(kn,"camera distance",e),bC:o(kn,"camera elevation",e),aR:{fU:0,fY:0,c5:0}})},Ao=function(e){return e*Lr/180},Dm=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),Br=$(function(e,r){return{$:5,a:e,b:r}}),wc=$(function(e,r){return{dp:Sr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),xc={$:0},k=xc,Wt=$(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(wc,a,e);return o(Br,i,t);case 1:return o(Br,e,n);case 3:return o(Br,e,n);case 2:return o(Br,e,n);default:return o(Br,e,n)}}),Tc=function(e){var r=e;return r},Am=function(e){var r=Tc(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c5,bX:1}},Bm=$(function(e,r){return o(Wt,Am(e),r)}),Fm=$(function(e,r){return o(Bm,e,r)}),Rm=function(e){var r=e.a,n=e.b,a=e.c;return Fm(p(Dm,r,n,a))},Bo=function(e){return Rm(O(e,0,0))},ya=function(e){return e/255},Em=y(function(e,r,n){return x(bn,ya(e),ya(r),ya(n),1)}),Vm=function(e){return e},Um=function(e){return en(.01*e)},Fo=function(e){return e},Nm=function(e){return e},jm=function(e){return{$:0,a:e}},Gm=jm,Hm={$:3},Wm=Hm,Im=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ym=Im,Jm=$(function(e,r){return r.b?p(cr,B,r,e):e}),fr=function(e){return p(cr,Jm,T,e)},Om=$(function(e,r){return fr(o(be,e,r))}),qm=function(e){return{$:1,a:e}},Zm=qm,Xm=function(e){return o(br,"height",Te(e))},Qm=function(e){return Nu(Iu(e))},Km=Qm,ed=function(e){return{$:2,a:e}},rd=ed,nd=function(e){return o(hr,"",e)},ad=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return je(l*1e3)/1e3},c=function(l){return je(l*1e4)/100};return nd(h(["rgba(",re(c(r)),"%,",re(c(n)),"%,",re(c(a)),"%,",re(i(t)),")"]))},td=$(function(e,r){switch(r.$){case 0:return o(Gv,e,r);case 1:return o(Hv,e,r);case 2:return o(Wv,e,r);case 3:return o(Iv,e,r);case 4:return o(Yv,e,r);default:return o(Jv,e,r)}}),od=$(function(e,r){switch(r.$){case 0:return o(gv,e,r);case 1:return o(hv,e,r);case 2:return o(_v,e,r);case 3:return o(Cv,e,r);case 4:return o(yv,e,r);case 5:return o(Lv,e,r);case 6:return o(Sv,e,r);case 7:return o(wv,e,r);default:return xv(e)}}),id=y(function(e,r,n){return p(jv,e,r,n)}),Ro=function(e){var r=e;return r},Yr=t$,La=x(Yr,1,1,1,1),He=y(function(e,r,n){return o(be,function(a){return o(a,r,n)},e)}),cd=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ld=$(function(e,r){var n=e,a=r.fU,t=r.fY;return p(cd,n*a/t,n,n*(1-a-t)/t)}),It=Qv,ud=function(e){var r=e.a,n=e.b,a=e.c;return p(It,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Yt=$(function(e,r){return ud(o(ld,e,r))}),er=v$,vd=function(e){return er({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Sa=Le(function(e,r,n,a,t){var i=a.dp?1:-1,c=x(Yr,a.bX,a.bX,a.bX,i);return me(t,e,c,vd(a),a.dp,r,n)}),Pc=Ee(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,m=o(wc,c,a),d=l,f=i;e=u,r=v,n=s,a=m,t=d,i=f;continue e;case 1:var g=t.b,b=o(B,S(Sa,e,r,n,a,g),i.M);return{M:b,U:i.U,fB:i.fB};case 3:var C=t.b,L=o(B,S(Sa,e,r,n,a,C),i.U);return{M:i.M,U:L,fB:i.fB};case 2:var _=t.a,w=o(B,S(Sa,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:w};default:var A=t.a;return p(mn,x(Pc,e,r,n,a),i,A)}}),$d=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Mc=$d,Jt=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),fd=function(e){var r=e.Z,n=e.W,a=e.V;return x(Jt,518,r,n,a)},sd=$(function(e,r){return{$:6,a:e,b:r}}),md=sd,zc=h([fd({V:1,W:0,Z:!1}),x(Mc,!1,!1,!1,!1),o(md,0,1)]),Nr=519,Ot=8,kc=15,Vr=7681,dd={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Se=bv,pd=$(function(e,r){return{$:0,a:e,b:r}}),bd=pd({df:1,$7:0,dV:5}),Er=Zv,gd=bd(h([{bT:o(Er,-1,-1)},{bT:o(Er,1,-1)},{bT:o(Er,-1,1)},{bT:o(Er,1,1)}])),hd={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},_d=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},qt=y(function(e,r,n){var a=e.cN,t=e.co,i=e.c2,c=$(function(v,s){var m=v;return s(m)}),l=$(function(v,s){var m=v;return s(m)}),u=function(v){return o(ee,c(v.bl),o(ee,l(v.a8),o(ee,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(_d,a,t,i)))}),Zt=function(e){return p(qt,{co:e.co,cN:e.cN,c2:e.c2},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Xt=function(e){return S(Se,h([Zt(e),x(Mc,!1,!1,!1,!1)]),hd,dd,gd,{})},Cd=Xt({a8:Vr,co:0,cN:Ot,bl:Nr,c2:kc,bt:Vr,bu:Vr}),yd=516,Eo=5386,pe=7680,Ld=function(e){return o(gn,2,e+4)},Dc=function(e){return Xt({a8:pe,co:kc,cN:Ot,bl:yd,c2:Ld(e),bt:Eo,bu:Eo})},Sd=y(function(e,r,n){return fr(h([p(He,e,n,zc),h([Dc(r),Cd])]))}),wd=$(function(e,r){return fr(o(ki,Sd(e),r))}),xd=function(e){var r=e.Z,n=e.W,a=e.V;return x(Jt,513,r,n,a)},Td=xd({V:1,W:0,Z:!0}),Pd=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},Md=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,m=u.b,d=u.c,f=v.a,g=v.b,b=v.c;return Pd(s)(m)(d)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},zd=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vo=$(function(e,r){var n=e,a=r;return p(zd,32774,n,a)}),kd=1,Uo=771,Dd=770,Qt=Md({bv:0,aH:o(Vo,kd,Uo),by:0,bA:o(Vo,Dd,Uo),bF:0,bV:0}),Dr=h([Td,Qt]),Ad=function(e){var r=e;return r.dO},Bd=function(e){var r=e;return r.dP},Ac=function(e){var r=e;return r.dQ},Fd=function(e){var r=e;return r.dR},Rd=function(e){var r=e;return r.dS},Bc=function(e){var r=e;return r.dT},ar=$(function(e,r){var n=e,a=r;return a-n}),Fc=function(e){return O(o(ar,Fd(e),Ad(e)),o(ar,Rd(e),Bd(e)),o(ar,Bc(e),Ac(e)))},No=function(e){var r=e;return Wr(r)},Ed=function(e){return e},Vd=function(e){return Ir({cA:Ed({fU:e.H,fY:e.I,c5:e.J}),c3:nr({fU:e.q,fY:e.r,c5:e.s}),c4:nr({fU:e.t,fY:e.u,c5:e.v}),c6:nr({fU:e.w,fY:e.x,c5:e.y})})},wa=$(function(e,r){var n=e,a=r,t=n.c6,i=t,c=n.c4,l=c,u=n.c3,v=u;return{fU:a.fU*v.fU+a.fY*v.fY+a.c5*v.c5,fY:a.fU*l.fU+a.fY*l.fY+a.c5*l.c5,c5:a.fU*i.fU+a.fY*i.fY+a.c5*i.c5}}),Rc=$(function(e,r){var n=e,a=r,t=n.cA,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c5-i.c5,v=n.c6,s=v,m=n.c4,d=m,f=n.c3,g=f;return{fU:c*g.fU+l*g.fY+u*g.c5,fY:c*d.fU+l*d.fY+u*d.c5,c5:c*s.fU+l*s.fY+u*s.c5}}),Ec=$(function(e,r){return{cA:o(Rc,e,Wr(r)),c3:o(wa,e,Mr(r)),c4:o(wa,e,zr(r)),c6:o(wa,e,kr(r))}}),ot=y(function(e,r,n){return{fU:e,fY:r,c5:n}}),Xn=function(e){var r=e;return r},$e=$(function(e,r){var n=e,a=r;return o(xr,n,a)}),Ud=$(function(e,r){return Y(e,r)<0?e:r}),se=$(function(e,r){var n=e,a=r;return o(Ud,n,a)}),Nd=$(function(e,r){var n=Xn(r),a=Xn(e);return{dO:o($e,a.dO,n.dO),dP:o($e,a.dP,n.dP),dQ:o($e,a.dQ,n.dQ),dR:o(se,a.dR,n.dR),dS:o(se,a.dS,n.dS),dT:o(se,a.dT,n.dT)}}),Re=function(e){var r=e;return r},jd=function(e){var r=e;return O(r.fU,r.fY,r.c5)},An=$(function(e,r){var n=e,a=r;return a+n}),Gd=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=Dn(Fe(a)),c=Dn(Fe(n)),l=Dn(Fe(t)),u=jd(r),v=u.a,s=u.b,m=u.c;return{dO:o(An,c,v),dP:o(An,i,s),dQ:o(An,l,m),dR:o(ar,c,v),dS:o(ar,i,s),dT:o(ar,l,m)}}),jo=F(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c5*r,v=t.fY*r,s=t.fU*r,m=Re(kr(e)),d=Q(l*m.fU)+Q(c*m.fY)+Q(i*m.c5),f=Re(zr(e)),g=Q(l*f.fU)+Q(c*f.fY)+Q(i*f.c5),b=Re(Mr(e)),C=Q(l*b.fU)+Q(c*b.fY)+Q(i*b.c5),L=o(Gd,O(C,g,d),o(Rc,e,p(ot,s,v,u)));if(a.$)return ne(L);var _=a.a;return ne(o(Nd,_,L))}),it=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 1:var c=t.a,l=x(jo,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 2:var f=e,g=r,b=n,C=i;e=f,r=g,n=b,a=C;continue e;case 3:var c=t.a,l=x(jo,e,r,c,n),f=e,g=r,b=l,C=i;e=f,r=g,n=b,a=C;continue e;case 4:var u=t.a,f=e,g=r,b=x(it,e,r,n,u),C=i;e=f,r=g,n=b,a=C;continue e;default:var v=t.a,s=t.b,m=o(Ec,Vd(v),e),d=r*v.bX,f=e,g=r,b=x(it,m,d,n,h([s])),C=i;e=f,r=g,n=b,a=C;continue e}}else return n}),va=Kv,$a=e$,fa=r$,Vc=function(e){return{$:4,a:e}},Hd=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Uc=function(e){return Vc(o(Hd,e,T))},Wd={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Id=function(e){var r=e;return r},Go=Xt({a8:Vr,co:0,cN:Ot,bl:Nr,c2:255,bt:Vr,bu:Vr}),Nc=Wl,Qn=0,Yd=function(e){var r=e,n=o(xr,Q(r.fU),o(xr,Q(r.fY),Q(r.c5)));if(n){var a=r.c5/n,t=r.fY/n,i=r.fU/n,c=Nc(i*i+t*t+a*a);return c*n}else return Qn},Ce={by:0,ex:!1,bF:0,cJ:0,bV:0,cZ:0,fU:0,fY:0,c5:0},De=$(function(e,r){var n=e,a=r;return er({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c5,dG:n.by,dH:a.c5,dI:a.by,dJ:n.cZ,dK:n.cJ,dL:a.cZ,dM:a.cJ})}),Xr=M({bd:o(De,Ce,Ce),bK:o(De,Ce,Ce),bL:o(De,Ce,Ce),bM:o(De,Ce,Ce)},x(Yr,0,0,0,0)),vr=$(function(e,r){var n=r;return e*n}),jc=514,Gc=function(e){var r=e.Z,n=e.W,a=e.V;return x(Jt,515,r,n,a)},Hc=240,Jd=h([Gc({V:1,W:0,Z:!0}),Zt({a8:pe,co:Hc,cN:0,bl:jc,c2:0,bt:pe,bu:pe}),Qt]),Od=$(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=Fe(a),l=c,u=Fe(t),v=u,s=n.cL;if(s.$){var d=s.a;return qa(v)?er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):er({dx:2/(i*d),dy:0,dz:0,dA:0,dB:0,dC:2/d,dD:0,dE:0,dF:0,dG:0,dH:-2/(v-l),dI:-(v+l)/(v-l),dJ:0,dK:0,dL:0,dM:1})}else{var m=s.a;return qa(v)?er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):er({dx:1/(i*m),dy:0,dz:0,dA:0,dB:0,dC:1/m,dD:0,dE:0,dF:0,dG:0,dH:-(v+l)/(v-l),dI:-2*v*l/(v-l),dJ:0,dK:0,dL:-1,dM:0})}}),Sn=$(function(e,r){return(1&e>>r)===1?0:1}),qd=function(e){return h([Gc({V:1,W:0,Z:!0}),Zt({a8:pe,co:Hc,cN:e,bl:jc,c2:0,bt:pe,bu:pe}),Qt])},Zd=y(function(e,r,n){return fr(o(be,function(a){var t=a<<4,i=x(Yr,o(Sn,a,0),o(Sn,a,1),o(Sn,a,2),o(Sn,a,3));return p(He,e,M(r,i),qd(t))},o(Pt,1,o(gn,2,n)-1)))}),fn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c5:-r.c5}},ct=function(e){var r=e;return r},Xd=$$,Ho=function(e){var r=e;return fn(kr(r))},Wc=nr({fU:0,fY:1,c5:0}),Qd=Wc,Kd={cA:Gt,c3:Lc,c4:Qd,c6:Ht},hn=function(e){var r=e;return r},e0=function(e){var r=hn(Wr(e)),n=Re(kr(e)),a=Re(zr(e)),t=Re(Mr(e));return er({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c5,dG:a.c5,dH:n.c5,dI:r.c5,dJ:0,dK:0,dL:0,dM:1})},r0=$(function(e,r){var n=r;return e0(o(Ec,n,e))}),n0=function(e){return o(r0,Kd,e)},a0=function(e){var r=e;return r.c1},t0=function(e){var r=e;return Mr(r)},o0=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),i0=function(e){var r=e;return zr(r)},c0=function(e){var r=a0(e.ev),n=Ir({cA:No(r),c3:t0(r),c4:i0(r),c6:fn(Ho(r))}),a=Uc(e.aP),t=a,i=x(it,n,1,J,h([t]));if(i.$===1)return T;var c=i.a,l=n0(r),u=o(vr,.99,o($e,Fe(e.aJ),tt(Ac(c)))),v=Fc(c),s=v.a,m=v.b,d=v.c,f=Yd(p(o0,s,m,d)),g=o(vr,1.01,o(An,f,tt(Bc(c)))),b=o(Od,e.ev,{eq:e.eq,eP:g,fi:u}),C=Xd(b).dM,L=C?Re(fn(Ho(r))):ct(No(r)),_=function(){var ae=e.bZ;switch(ae.$){case 0:return M(0,0);case 1:return M(1,0);case 2:return M(2,0);case 3:var ue=ae.a;return M(3,ue);case 4:var ue=ae.a;return M(4,ue);default:return M(5,0)}}(),w=_.a,A=_.b,W=e.bD,j=W,U=o(Yt,j,e.b$),G=U,H=er({dx:0,dy:L.fU,dz:va(G),dA:e.ec,dB:0,dC:L.fY,dD:$a(G),dE:Id(f),dF:0,dG:L.c5,dH:fa(G),dI:w,dJ:0,dK:C,dL:0,dM:A}),V=me(Pc,H,l,b,Wd,t,{M:T,U:T,fB:T}),X=e.bJ;switch(X.$){case 0:var Z=X.a;return fr(h([p(He,V.M,M(Z,La),Dr),p(He,V.U,Xr,Dr)]));case 1:var Z=X.a;return fr(h([p(He,V.M,Xr,Dr),h([Go]),p(He,V.fB,Z.bd,zc),h([Dc(0)]),p(He,V.M,M(Z,La),Jd),p(He,V.U,Xr,Dr)]));default:var te=X.a,ce=X.b;return fr(h([p(He,V.M,M(ce,La),Dr),h([Go]),o(wd,V.fB,te),p(Zd,V.M,ce,wr(te)),p(He,V.U,Xr,Dr)]))}},l0=function(e){return o(br,"width",Te(e))},u0=$(function(e,r){var n=h([Zm(1),rd(0),Gm(!0),x(Ym,0,0,0,0)]),a=function(){var w=e.b0;switch(w.$){case 0:return O(n,"0",1);case 1:return O(o(B,Wm,n),"1",1);default:var A=w.a;return O(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Ro(v),m=o(K,"height",Te(s)+"px"),d=Ro(u),f=d/s,g=o(Om,function(w){return c0({eq:f,ev:e.ev,aJ:e.aJ,aP:w.aP,bD:w.bD,bJ:w.bJ,ec:c,bZ:w.bZ,b$:w.b$})},r),b=o(K,"width",Te(d)+"px"),C=e.aI,L=C,_=ad(L);return p(Km,"div",h([o(K,"padding","0px"),b,m]),h([M(i,p(id,t,h([l0(je(d*c)),Xm(je(s*c)),b,m,o(K,"display","block"),o(K,"background-color",_)]),g))]))}),v0=function(e){return o(u0,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},h([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Ic=function(e){return e},Wo=Ic({fU:.31271,fY:.32902}),$0=$(function(e,r){var n=e,a=Re(r.eH),t=a.fU,i=a.fY,c=a.c5,l=o(Yt,r.cd,r.b6),u=l;return{by:fa(u),ex:n,bF:$a(u),cJ:0,bV:va(u),cZ:1,fU:-t,fY:-i,c5:-c}}),f0=function(e){return e},s0=function(e){return f0(1.2*o(gn,2,e))},xa=function(e){return e},m0={$:0},d0=m0,Yc=function(e){return e},p0=$(function(e,r){var n=e,a=r;return Y(a,n)>0}),Io=function(e){var r=e;return r},b0=function(e){e:for(;;){if(Sr(e.e2,Qn)&&Sr(e.e3,Qn))return Ce;if(o(p0,Fe(e.e2),Fe(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:fn(e.ei)};e=r;continue e}else{var n=Q(Io(e.e3)/Lr),a=Q(Io(e.e2)/Lr),t=Re(e.ei),i=t.fU,c=t.fY,l=t.c5,u=o(Yt,Yc(1),e.b6),v=u;return{by:a*fa(v),ex:!1,bF:a*$a(v),cJ:n/a,bV:a*va(v),cZ:3,fU:i,fY:c,c5:l}}}},Yo=function(e){return b0({b6:e.b6,e2:e.cd,e3:Qn,ei:e.ei})},Jc=y(function(e,r,n){return Y(n,e)<0?e:Y(n,r)>0?r:n}),g0=function(e){var r=e;return r},Oc=function(e){var r=p(Jc,1667,25e3,g0(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ic({fU:n,fY:a})},qc=function(e){return e},h0=Oc(qc(12e3)),_0=Oc(qc(5600)),C0=function(e){return{$:2,a:e}},y0=function(e){return C0(e)},L0=$(function(e,r){return{$:2,a:e,b:r}}),Zc=function(e){return{$:0,a:e}},wn=function(e){var r=e;return r},S0=function(e){var r=e;return r.ex},w0=Zc(Xr.a),x0=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?M(o(B,a,i),c):M(i,o(B,a,c))});return p(cr,n,M(T,T),r)}),T0=function(e){var r=e;return er({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c5,dG:r.by,dH:0,dI:0,dJ:r.cZ,dK:r.cJ,dL:0,dM:0})},P0=ve(function(e,r,n,a,t,i,c,l){var u=o(x0,S0,h([wn(e),wn(r),wn(n),wn(a)])),v=u.a,s=u.b;if(v.b){var m=oe(v,s);if(m.b&&m.b.b&&m.b.b.b&&m.b.b.b.b&&!m.b.b.b.b.b){var d=m.a,f=m.b,g=f.a,b=f.b,C=b.a,L=b.b,_=L.a;return o(L0,o(be,T0,v),{bd:o(De,d,g),bK:o(De,C,_),bL:o(De,t,i),bM:o(De,c,l)})}else return w0}else return Zc({bd:o(De,e,r),bK:o(De,n,a),bL:o(De,t,i),bM:o(De,c,l)})}),M0=y(function(e,r,n){return ea(P0,e,r,n,Ce,Ce,Ce,Ce,Ce)}),z0=function(e){var r=o($0,Nm(e.fB),{b6:_0,eH:e.fJ,cd:xa(8e4)}),n=Yo({b6:h0,cd:xa(2e4),ei:e.ei}),a=Yo({b6:Wo,cd:xa(15e3),ei:fn(e.ei)}),t=p(M0,r,n,a);return v0({b0:y0(e.ca),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:s0(15),bJ:t,bZ:d0,b$:Wo})},k0=$(function(e,r){var n=e,a=r,t=$n(a);return{fU:t*$n(n),fY:t*Zn(n),c5:Zn(a)}}),D0=$(function(e,r){return z0({aI:Vm(e.es),ev:e.ev,aJ:Um(.5),ca:e.ca,aK:M(Fo(je(e.cS.fS)),Fo(je(e.cS.eW))),aP:r,fB:!0,fJ:o(k0,rn(e.fI),rn(e.fK)),ei:Ht})}),A0=function(e){var r=e;return r},B0=function(e){var r=e;return A0(r.er)},Xc=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),F0=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),R0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),E0=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),V0=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),U0=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),N0=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),j0=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return x(N0,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return x(Xc,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return x(F0,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return x(R0,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return x(U0,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return x(E0,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return x(V0,n,a,t,1);case 8:return e;case 9:return e;default:return e}},G0={$:0},H0=ve(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Xn(c(u)),m=o(se,s.dR,e),d=o($e,s.dO,r),f=o(se,s.dS,n),g=o($e,s.dP,a),b=o(se,s.dT,t),C=o($e,s.dQ,i),L=c,_=v;e=m,r=d,n=f,a=g,t=b,i=C,c=L,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),W0=y(function(e,r,n){var a=Xn(e(r));return ea(H0,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Ta=$(function(e,r){var n=e,a=r;return Y(a,n)<1}),I0=function(e){return o(Ta,e.dO,e.dR)&&o(Ta,e.dP,e.dS)&&o(Ta,e.dQ,e.dT)?e:{dO:o($e,e.dR,e.dO),dP:o($e,e.dS,e.dP),dQ:o($e,e.dT,e.dQ),dR:o(se,e.dR,e.dO),dS:o(se,e.dS,e.dP),dT:o(se,e.dT,e.dQ)}},Kn=function(e){var r=e;return r},nn=function(e){var r=e;return r.fU},an=function(e){var r=e;return r.fY},tn=function(e){var r=e;return r.c5},Y0=function(e){var r=Kn(e),n=r.a,a=r.b,t=r.c,i=nn(n),c=an(n),l=tn(n),u=nn(a),v=an(a),s=tn(a),m=nn(t),d=an(t),f=tn(t);return I0({dO:o($e,i,o($e,u,m)),dP:o($e,c,o($e,v,d)),dQ:o($e,l,o($e,s,f)),dR:o(se,i,o(se,u,m)),dS:o(se,c,o(se,v,d)),dT:o(se,l,o(se,s,f))})},Qc=n$,sr=function(e){return Qc(hn(e))},Kc=function(e){return Qc(Tc(e))},J0=$(function(e,r){var n=e,a=r;return{fU:a.fY*n.c5-a.c5*n.fY,fY:a.c5*n.fU-a.fU*n.c5,c5:a.fU*n.fY-a.fY*n.fU}}),Jo=$(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c5:a.c5-n.c5}}),O0={fU:0,fY:0,c5:0},q0=$(function(e,r){var n=e,a=r,t=o(xr,Q(a.fU),o(xr,Q(a.fY),Q(a.c5)));if(t){var i=a.c5/t,c=a.fY/t,l=a.fU/t,u=Nc(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c5:n*i/u}}else return O0}),Z0=q0(Yc(1)),el=y(function(e,r,n){var a=o(Jo,r,n),t=o(Jo,e,r);return Z0(o(J0,a,t))}),X0=function(e){var r=Kn(e),n=r.a,a=r.b,t=r.c,i=Kc(p(el,n,a,t));return O({o:i,bT:sr(n)},{o:i,bT:sr(a)},{o:i,bT:sr(t)})},Q0=$(function(e,r){return{$:2,a:e,b:r}}),K0=Q0({df:3,$7:0,dV:4}),ep=function(e){if(e.b){var r=e.a,n=e.b,a=K0(o(be,X0,e)),t=p(W0,Y0,r,n);return x(Xc,t,e,a,0)}else return G0},ke=y(function(e,r,n){return O(e,r,n)}),We=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c5:i}}),rl=function(){var e=en(1),r=en(1),n=en(1),a=o(vr,-.5,e),t=o(vr,-.5,r),i=o(vr,-.5,n),c=p(We,i,t,a),l=o(vr,.5,e),u=p(We,i,t,l),v=o(vr,.5,r),s=p(We,i,v,a),m=p(We,i,v,l),d=o(vr,.5,n),f=p(We,d,t,a),g=p(We,d,v,a),b=p(We,d,t,l),C=p(We,d,v,l);return j0(ep(h([p(ke,c,g,f),p(ke,c,s,g),p(ke,u,b,C),p(ke,u,C,m),p(ke,f,g,C),p(ke,f,C,b),p(ke,c,m,s),p(ke,c,u,m),p(ke,c,f,b),p(ke,c,b,u),p(ke,s,C,g),p(ke,s,m,C)])))}(),xn={$:0},rp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),np=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=Kc(p(el,u,l,c)),s={o:v,bT:sr(u)},m={o:v,bT:sr(l)},d={o:v,bT:sr(c)};return o(B,s,o(B,m,o(B,d,n)))}),ap=function(e){var r=e;return r.D},tp=F(function(e,r,n,a){if(r.$===1)return J;var t=r.a;if(n.$===1)return J;var i=n.a;if(a.$===1)return J;var c=a.a;return ne(p(e,t,i,c))}),lt=4294967295>>>32-ln,ut=xl,op=y(function(e,r,n){e:for(;;){var a=lt&r>>>e,t=o(ut,a,n);if(t.$){var v=t.a;return o(ut,lt&r,v)}else{var i=t.a,c=e-ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),ip=function(e){return e>>>5<<5},cp=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||Y(e,n)>-1?J:Y(e,ip(n))>-1?ne(o(ut,lt&e,i)):ne(p(op,a,e,t))}),lp=function(e){var r=e;return r.ah},Pa=$(function(e,r){return o(cp,e,lp(r))}),up=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return x(tp,y(function(c,l,u){return O(c,l,u)}),o(Pa,a,e),o(Pa,t,e),o(Pa,i,e))};return o(la,r,ap(e))},vp=y(function(e,r,n){e:for(;;){var a=o(zt,Me,e),t=a.a,i=a.b;if(Y(Ja(t),Me)<0)return o(Ui,!0,{z:r,l:n,p:t});var c=i,l=o(B,Ei(t),r),u=n+1;e=c,r=l,n=u;continue e}}),nl=function(e){return e.b?p(vp,e,T,0):Fi},$p=y(function(e,r,n){return e(r(n))}),fp=$(function(e,r){return!o(Xi,o($p,O$,e),r)}),sp=$(function(e,r){return p(cr,$(function(n,a){return e(n)?o(B,n,a):a}),T,r)}),mp=function(e){var r=e.a;return r},dp=$(function(e,r){var n=mp(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&Y(i,n)<0&&c>=0&&Y(c,n)<0&&l>=0&&Y(l,n)<0};return o(fp,a,r)?{D:r,ah:e}:{D:o(sp,a,r),ah:e}}),pp=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),bp=pp({df:1,$7:3,dV:4}),Bn=$(function(e,r){var n=ct(r),a=ct(e);return M(O(a.fU,a.fY,a.c5),O(n.fU,n.fY,n.c5))}),Oo=p(It,0,0,0),Ma=Ee(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(ca,o(Bn,e,r),t);if(v.$){var m={o:Oo,bT:sr(r)},d={o:Oo,bT:sr(e)},f=u+1,g=u;return O(o(B,O(n,g,f),o(B,O(n,f,a),c)),o(B,m,o(B,d,l)),u+2)}else{var s=v.a;return O(o(B,O(n,s,a),c),l,u)}}),gp=Le(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),m=e(l),d=e(c),f=a+2,g=a+1,b=a,C=e,L=r,_=v,w=a+3,A=me(Ma,s,d,f,b,r,me(Ma,m,s,g,f,r,me(Ma,d,m,b,g,r,t)));e=C,r=L,n=_,a=w,t=A;continue e}else{var W=t,j=W.a,U=W.b;return M(j,Pe(U))}}),hp=Le(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),m=e(l),d=e(c),f=n+2,g=n+1,b=n,C=p(Qr,o(Bn,d,s),f,p(Qr,o(Bn,s,m),g,p(Qr,o(Bn,m,d),b,t))),L=o(B,O(b,g,f),a),_=e,w=v,A=n+3,W=L,j=C;e=_,r=w,n=A,a=W,t=j;continue e}else return O(a,t,n)}),gr=y(function(e,r,n){var a=up(n),t=p(cr,np(r),T,a),i=S(hp,r,a,0,T,hc),c=i.a,l=i.b,u=i.c,v=S(gp,r,l,a,0,O(c,T,u)),s=v.a,m=v.b,d=at(m)?t:oe(t,m);return p(rp,e,o(dp,nl(d),s),o(bp,d,s))}),qo=function(e){return{D:o(be,function(r){return O(3*r,3*r+1,3*r+2)},o(Pt,0,wr(e)-1)),ah:nl(fr(o(be,function(r){var n=r.a,a=r.b,t=r.c;return h([n,a,t])},e)))}},_p=function(e){switch(e.$){case 0:return xn;case 1:var a=e.a,r=e.b,n=o(be,Kn,r);return p(gr,a,Cr,qo(n));case 2:var a=e.a,r=e.b,n=o(be,Kn,r);return p(gr,a,Cr,qo(n));case 3:var a=e.a,t=e.b;return p(gr,a,Cr,t);case 4:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(gr,a,function(i){return i.bT},t);case 8:return xn;case 9:return xn;default:return xn}},Zo=_p(rl),Cp=function(e){var r=e;return r.aK},Ge=$(function(e,r){return{$:1,a:e,b:r}}),yp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Lp=1029,Sp=function(e){return{$:5,a:e}},al=function(e){var r=e;return Sp(r)},wp=al(Lp),xp=1028,Tp=al(xp),Xe=y(function(e,r,n){return r===1?e?o(B,wp,n):o(B,Tp,n):n}),tl={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},za=F(function(e,r,n,a){return o(Ge,r,ve(function(t,i,c,l,u,v,s,m){return S(Se,p(Xe,l,a,m),tl,yp,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Pp={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},ol={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qe=F(function(e,r,n,a){return o(Ge,r,ve(function(t,i,c,l,u,v,s,m){return S(Se,p(Xe,l,a,m),ol,Pp,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),il=$(function(e,r){return{$:3,a:e,b:r}}),Mp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},cl={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},zp=F(function(e,r,n,a){return o(il,n,ve(function(t,i,c,l,u,v,s,m){return S(Se,m,cl,Mp,a,{aw:e,b:c,c:i,bS:r,d:v,e:t,f:u})}))}),kp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Kt=function(e){var r=e;return r},ll=a$,Ke=Le(function(e,r,n,a,t){return o(Ge,n,ve(function(i,c,l,u,v,s,m,d){return S(Se,p(Xe,u,t,d),ol,kp,a,{aN:o(ll,Kt(r),e),b:l,c,d:s,e:i,f:v})}))}),Dp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},Ap=Le(function(e,r,n,a,t){return o(il,a,ve(function(i,c,l,u,v,s,m,d){return S(Se,d,cl,Dp,t,{aN:o(ll,Kt(r),e),b:l,c,bS:n,d:s,e:i,f:v})}))}),Bp={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cp",sceneProperties:"e",viewMatrix:"f"}},ul={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Tn=F(function(e,r,n,a){return o(Ge,r,ve(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Se,p(Xe,l,a,m),ul,Bp,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cp:e,b:c,c:i,d:v,e:t,f:u})}))}),vl={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cq",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},$l={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Fp=Ee(function(e,r,n,a,t,i){return o(Ge,a,ve(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(Se,p(Xe,v,i,f),$l,vl,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cq:e,b:u,c:l,aW:r,d:m,e:c,a$:n,f:s})}))}),fl={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b7",constantMetallic:"b8",constantRoughness:"b9",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cu",normalMapTexture:"aW",roughnessTexture:"cR",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Rp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(Ge,u,ve(function(m,d,f,g,b,C,L,_){var w=L.a,A=L.b;return S(Se,p(Xe,g,s,_),$l,fl,v,{b4:e,b7:r,b8:i,b9:a,P:A,bd:w.bd,bK:w.bK,bL:w.bL,bM:w.bM,cu:t,b:f,c:d,aW:c,d:C,cR:n,e:m,a$:l,f:b})}))}}}}}}}}}}},Ep={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"ct",roughness:"cQ",sceneProperties:"e",viewMatrix:"f"}},Pn=Ee(function(e,r,n,a,t,i){return o(Ge,a,ve(function(c,l,u,v,s,m,d,f){var g=d.a,b=d.b;return S(Se,p(Xe,v,i,f),ul,Ep,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,ct:n,b:u,c:l,d:m,cQ:r,e:c,f:s})}))}),Vp=function(e){return{$:0,a:e}},Xo=$(function(e,r){return{$:1,a:e,b:r}}),on=$(function(e,r){if(r.$){var n=r.a.C;return M(n,1)}else return r.a,M(e,0)}),Up=function(e){return x(Yr,va(e),$a(e),fa(e),1)},eo=x(Yr,0,0,0,0),Fn=$(function(e,r){if(r.$){var a=r.a.C;return M(a,eo)}else{var n=r.a;return M(e,Up(n))}}),Np=$(function(e,r){var n=M(e,r);if(n.a.$){var t=n.a.a.C;return o(Xo,M(t,eo),o(on,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Xo,o(Fn,t,e),o(on,t,r))}else{var a=n.a.a;return n.b.a,Vp(a)}}),jp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Mn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Gp=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Hp=function(e){return o(Er,e,1)},vt=o(Er,0,0),Ar=$(function(e,r){if(r.$){var a=r.a.C;return M(a,vt)}else{var n=r.a;return M(e,Hp(n))}}),Wp=F(function(e,r,n,a){var t=x(Gp,e,r,n,a);if(t.a.$){var u=t.a.a.C;return x(Mn,M(u,eo),o(Ar,u,r),o(Ar,u,n),o(on,u,a))}else if(t.b.$){var u=t.b.a.C;return x(Mn,o(Fn,u,e),M(u,vt),o(Ar,u,n),o(on,u,a))}else if(t.c.$){var u=t.c.a.C;return x(Mn,o(Fn,u,e),o(Ar,u,r),M(u,vt),o(on,u,a))}else if(t.d.$){var u=t.d.a.C;return x(Mn,o(Fn,u,e),o(Ar,u,r),o(Ar,u,n),M(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(jp,i,c,l)}}),Ip={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},ka=Le(function(e,r,n,a,t){return o(Ge,n,ve(function(i,c,l,u,v,s,m,d){return S(Se,p(Xe,u,t,d),tl,Ip,a,{b1:Kt(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),sl={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Yp=F(function(e,r,n,a){return o(Ge,r,ve(function(t,i,c,l,u,v,s,m){var d=s.a,f=s.b;return S(Se,p(Xe,l,a,m),sl,vl,n,{P:f,bd:d.bd,bK:d.bK,bL:d.bL,bM:d.bM,cq:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),Jp=st(function(e,r,n,a,t,i,c,l,u){return o(Ge,c,ve(function(v,s,m,d,f,g,b,C){var L=b.a,_=b.b;return S(Se,p(Xe,d,u,C),sl,fl,l,{b4:e,b7:r,b8:i,b9:a,P:_,bd:L.bd,bK:L.bK,bL:L.bL,bM:L.bM,cu:t,b:m,c:s,aW:e,d:g,cR:n,e:v,a$:0,f})}))}),ro=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Op=function(e){var r=e;return p(ro,r.dR,r.dO,.5)},qp=function(e){var r=e;return p(ro,r.dS,r.dP,.5)},Zp=function(e){var r=e;return p(ro,r.dT,r.dQ,.5)},Xp=function(e){return p(We,Op(e),qp(e),Zp(e))},E=function(e){var r=Fc(e),n=r.a,a=r.b,t=r.c;return{ey:hn(Xp(e)),eS:n/2,eT:a/2,eU:t/2}},Qp=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return x(za,l,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(za,l,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(za,l,E(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return x(Qe,n,E(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return x(Qe,n,E(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return x(Qe,n,E(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return x(Qe,n,E(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return x(Qe,n,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return x(Qe,n,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return x(Qe,n,E(t),c,a);case 8:var t=r.a,c=r.c;return x(Qe,n,E(t),c,0);case 9:var t=r.a,c=r.c;return x(Qe,n,E(t),c,0);default:var t=r.a,i=r.b,c=r.d;return x(zp,n,i,E(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(ka,l,v,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ka,l,v,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ka,l,v,E(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,E(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,E(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,E(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,E(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,E(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Ke,u,v,E(t),c,a);case 8:var t=r.a,c=r.c;return S(Ke,u,v,E(t),c,0);case 9:var t=r.a,c=r.c;return S(Ke,u,v,E(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Ap,u,v,i,E(t),c)}}case 2:e.a;var s=e.b,j=e.c,m=o(Np,s,j);if(m.$){var g=m.a,b=g.a;g.b;var C=m.b,L=C.a,_=C.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return x(Yp,b,E(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return me(Fp,b,L,_,E(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var d=m.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return x(Tn,d,E(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return x(Tn,d,E(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return x(Tn,d,E(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return x(Tn,d,E(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var w=e.b,A=e.c,W=e.d,j=e.e,U=x(Wp,w,A,W,j);if(U.$){var X=U.a,Z=X.a,te=X.b,ce=U.b,ae=ce.a,ue=ce.b,we=U.c,ge=we.a,lr=we.b,ur=U.d,L=ur.a,_=ur.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Cl(Jp,Z,te,ae,ue,ge,lr,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Rp(Z)(te)(ae)(ue)(ge)(lr)(L)(_)(E(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var G=U.a,H=U.b,V=U.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return me(Pn,G,H,V,E(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return me(Pn,G,H,V,E(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return me(Pn,G,H,V,E(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return me(Pn,G,H,V,E(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),Da=function(e){var r=e;return r.fU},Aa=function(e){var r=e;return r.fY},Ba=function(e){var r=e;return r.c5},Kp=function(e){var r=e,n=Ba(r.c6),a=Aa(r.c6),t=Da(r.c6),i=Ba(r.c4),c=Aa(r.c4),l=Da(r.c4),u=Ba(r.c3),v=Aa(r.c3),s=Da(r.c3);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},e1=function(e){var r=hn(Wr(e)),n=Re(kr(e)),a=Re(zr(e)),t=Re(Mr(e));return{dp:Kp(e),q:t.fU,r:t.fY,s:t.c5,t:a.fU,u:a.fY,v:a.c5,w:n.fU,x:n.fY,y:n.c5,H:r.fU,I:r.fY,J:r.c5,bX:1}},r1=$(function(e,r){return o(Wt,e1(e),r)}),ml=function(e){return{$:2,a:e}},n1=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c5:t*i.c5},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),a1=i$,t1=o$,Qo=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,m=e.b,d=e.c,f=t1(a),g=f.fU,b=f.fY,C=f.c5,L=f.em,_=a1({em:L,fU:g*s,fY:b*m,c5:C*d});return ea(r,n,_,t,i,c,l,u,v)}}}}}}}}}},$t=$(function(e,r){switch(r.$){case 0:return xc;case 5:var n=r.a,a=r.b;return o(Br,n,o($t,e,a));case 1:var t=r.a,i=r.b;return o(Ge,o(n1,e,t),o(Qo,e,i));case 3:return r;case 2:var i=r.a;return ml(o(Qo,e,i));default:var c=r.a;return Vc(o(be,$t(e),c))}}),o1=$(function(e,r){var n=r;return o($t,e,n)}),i1={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},dl=7683,pl=7682,c1=p(qt,{co:0,cN:0,c2:15},{a8:pe,bl:Nr,bt:pe,bu:dl},{a8:pe,bl:Nr,bt:pe,bu:pl}),l1=p(qt,{co:0,cN:0,c2:15},{a8:pe,bl:Nr,bt:pe,bu:pl},{a8:pe,bl:Nr,bt:pe,bu:dl}),u1=$(function(e,r){return e?o(B,l1,r):o(B,c1,r)}),v1={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},$1=function(e){if(e.$){var r=e.c;return ne(ve(function(n,a,t,i,c,l,u,v){return S(Se,o(u1,i,v),v1,i1,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return J},Ko=function(e){var r=$1(e);if(r.$)return k;var n=r.a;return ml(n)},f1=F(function(e,r,n,a){var t=o(Qp,n,rl),i=function(){var s=M(e,r);return s.a?s.b?Uc(h([t,Ko(Zo)])):t:s.b?Ko(Zo):k}(),c=Cp(a),l=c.a,u=c.b,v=c.c;return o(r1,B0(a),o(o1,O(l,u,v),i))}),s1=$(function(e,r){return x(f1,!0,!0,e,r)}),Fa=$(function(e,r){var n=e,a=r;return Y(a,n)>-1}),Ra=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),m1=nr({fU:-1,fY:0,c5:0}),d1=nr({fU:0,fY:-1,c5:0}),p1=nr({fU:0,fY:0,c5:-1}),b1=Ee(function(e,r,n,a,t,i){var c=o(Fa,n,i)?Sc:p1,l=o(Fa,r,t)?Wc:d1,u=o(Fa,e,a)?yc:m1,v=O(Fe(o(ar,e,a)),Fe(o(ar,r,t)),Fe(o(ar,n,i))),s=p(We,o(Ra,e,a),o(Ra,r,t),o(Ra,n,i)),m=Ir({cA:s,c3:u,c4:l,c6:c});return{er:m,aK:v}}),g1=$(function(e,r){return me(b1,nn(e),an(e),tn(e),nn(r),an(r),tn(r))}),h1=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=O(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(s1,e,o(g1,p(ot,-c,-l,-u),p(ot,c,l,u)))}),_1=$(function(e,r){return o(ye,function(n){if(n.$===2){var a=n.a;return a}else return Vt},o(ca,e,r.av))}),C1=$(function(e,r){return o(tr,Vt,ua(o(la,_1(e),r)))}),y1=$(function(e,r){return o(C1,e,r.eA)}),L1=y1,ei=function(e){return{$:0,a:e}},S1=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ea=function(e){return p(Jc,0,1,e<=.04045?e/12.92:o(gn,(e+.055)/1.055,2.4))},w1=function(e){var r=$c(e),n=r.cM,a=r.cc,t=r.b5;return p(It,Ea(n),Ea(a),Ea(t))},x1=function(e){return p(S1,0,ei(w1(e)),ei(0))},T1=$(function(e,r){var n=hn(e),a=1-r;return{dp:r>=0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:a*n.fU,I:a*n.fY,J:a*n.c5,bX:r}}),P1=y(function(e,r,n){return o(Wt,o(T1,e,r),n)}),M1=y(function(e,r,n){return p(P1,e,r,n)}),z1=M1(Gt),k1=$(function(e,r){return(r-Vi(r/e)*e)/e}),D1=function(e){return 2*Lr*e},A1=F(function(e,r,n,a){return e+(r-e)*(1+$n(D1(o(k1,n,a))))/2}),Va=function(e){return o(z1,x(A1,1,1.1,o(kn,"period",e),e.db),o(h1,x1(o(L1,"cube color",e)),O(1,1,1)))},B1=$(function(e,r){return o(D0,{es:p(Em,46,46,46),ev:km(e),ca:e.ca,cS:e.cS,fI:-Ao(135),fK:-Ao(45)},h([Va(e),o(Bo,-2,Va(e)),o(Bo,2,Va(e))]))}),F1=x(qs,B1,tm,am,Zs);const R1={Main:{init:F1(o(z,function(e){return xe({e1:e})},o(P,"inputs",o(z,function(e){return o(z,function(r){return o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return xe({db:c,ca:i,eJ:t,e7:a,fs:n,cS:r,fR:e})},o(P,"clock",le))},o(P,"devicePixelRatio",le))},o(P,"dt",le))},o(P,"keyboard",o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return o(z,function(s){return o(z,function(m){return xe({eo:m,eB:s,de:v,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(P,"alt",q))},o(P,"control",q))},o(P,"down",q))},o(P,"downs",Wn(vn)))},o(P,"left",q))},o(P,"pressedKeys",Wn(vn)))},o(P,"right",q))},o(P,"shift",q))},o(P,"up",q))))},o(P,"pointer",o(z,function(n){return o(z,function(a){return o(z,function(t){return o(z,function(i){return o(z,function(c){return o(z,function(l){return o(z,function(u){return o(z,function(v){return xe({de:v,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(P,"down",q))},o(P,"isDown",q))},o(P,"move",q))},o(P,"rightDown",q))},o(P,"rightUp",q))},o(P,"up",q))},o(P,"x",le))},o(P,"y",le))))},o(P,"screen",o(z,function(r){return o(z,function(n){return xe({eW:n,fS:r})},o(P,"height",le))},o(P,"width",le))))},o(P,"wheel",o(z,function(e){return o(z,function(r){return xe({eE:r,eF:e})},o(P,"deltaX",le))},o(P,"deltaY",le)))))))(0)}},D={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},E1=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function m(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(D.keyboard.downs.push(f.code),D.keyboard.pressedKeys.push(f.code),r(f)&&(D.keyboard.control=!0),n(f)&&(D.keyboard.alt=!0),a(f)&&(D.keyboard.shift=!0),t(f)&&(D.keyboard.left=!0),i(f)&&(D.keyboard.right=!0),c(f)&&(D.keyboard.up=!0),l(f)&&(D.keyboard.down=!0))}),window.addEventListener("keyup",f=>{D.keyboard.pressedKeys=D.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(D.keyboard.control=!1,D.keyboard.pressedKeys=[]),n(f)&&(D.keyboard.alt=!1),a(f)&&(D.keyboard.shift=!1),t(f)&&(D.keyboard.left=!1),i(f)&&(D.keyboard.right=!1),c(f)&&(D.keyboard.up=!1),l(f)&&(D.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY,u(f)&&(D.pointer.down=!0,D.pointer.isDown=!0),v(f)&&(D.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{D.pointer.move=!0,D.pointer.x=-.5*D.screen.width+f.pageX,D.pointer.y=.5*D.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(D.pointer.up=!0,D.pointer.isDown=!1),v(f)&&(D.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{D.wheel.deltaX=f.deltaX,D.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(D)}),window.addEventListener("focus",f=>{s(D)}),window.addEventListener("visibilitychange",f=>{s(D)}),window.addEventListener("resize",()=>{D.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(d);function d(f){const g=f/1e3,b=g-D.clock;b<.009||(D.dt=b,D.clock=g,e.ports.tick.send(D),m(D)),window.requestAnimationFrame(d)}},V1=()=>{Ua("pointerdown"),Ua("wheel"),Ua("keydown")},Ua=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},U1=R1.Main.init({node:document.querySelector("#app div"),flags:{inputs:D}});V1();E1(U1);
