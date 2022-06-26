const ds=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ds();function yn(e,r,n){return n.a=e,n.f=r,n}function v(e){return yn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return yn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function q(e){return yn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Re(e){return yn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function mr(e){return yn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function Zt(e){return yn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function be(e){return yn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return e(r,n,t,i,o,l,c,$)}}}}}}}})}function xo(e){return yn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(m){return e(r,n,t,i,o,l,c,$,m)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function Ze(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function So(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function Qa(e,r,n,t,i,o,l,c,$){return e.a===8?e.f(r,n,t,i,o,l,c,$):e(r)(n)(t)(i)(o)(l)(c)($)}function ps(e,r,n,t,i,o,l,c,$,m){return e.a===9?e.f(r,n,t,i,o,l,c,$,m):e(r)(n)(t)(i)(o)(l)(c)($)(m)}var gs=[];function hs(e){return e.length}var bs=T(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),_s=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),ws=v(function(e,r){return r[e]});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});T(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var ys=T(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+xs()),r});function xs(e){return"<internals>"}function ma(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function le(e,r){for(var n,t=[],i=Co(e,r,0,t);i&&(n=t.pop());i=Co(n.a,n.b,0,t));return i}function Co(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ma(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=Fu(e),r=Fu(r));for(var i in e)if(!Co(e[i],r[i],n+1,t))return!1;return!0}v(le);v(function(e,r){return!le(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ce(e,r)<0});v(function(e,r){return ce(e,r)<1});v(function(e,r){return ce(e,r)>0});v(function(e,r){return ce(e,r)>=0});var Ss=v(function(e,r){var n=ce(e,r);return n<0?Bu:n?p0:Iu}),Ka=0;function L(e,r){return{a:e,b:r}}function D(e,r,n){return{a:e,b:r,c:n}}function Rr(e){return e}function De(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(U);function U(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=jr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=jr(e.a,r);return n}var A={$:0};function jr(e,r){return{$:1,a:e,b:r}}var Cs=v(jr);function u(e){for(var r=A,n=e.length;n--;)r=jr(e[n],r);return r}function Qt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var zs=T(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)});q(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(b(e,r.a,n.a,t.a));return u(i)});Re(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return u(o)});mr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,t.a,i.a,o.a));return u(l)});v(function(e,r){return u(Qt(r).sort(function(n,t){return ce(e(n),e(t))}))});v(function(e,r){return u(Qt(r).sort(function(n,t){var i=a(e,n,t);return i===Iu?0:i===Bu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Ls=v(Math.pow);v(function(e,r){return r%e});var Ps=v(function(e,r){var n=r%e;return e===0?ma(11):n>0&&e<0||n<0&&e>0?n+e:n}),Ms=Math.PI,Ts=Math.cos,ks=Math.sin,Ds=Math.tan;v(Math.atan2);function As(e){return e}function Fs(e){return e===1/0||e===-1/0}var Is=Math.ceil,Bs=Math.floor,Es=Math.round,Vs=Math.sqrt,Jc=Math.log,Rs=isNaN;function js(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Us=v(function(e,r){return e+r});function Ns(e){var r=e.charCodeAt(0);return isNaN(r)?j:N(55296<=r&&r<=56319?L(Rr(e[0]+e[1]),e.slice(2)):L(Rr(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Ws(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(Rr(r[i]+r[i+1])),i+=2;continue}t[i]=e(Rr(r[i])),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(Rr(o))&&n.push(o)}return n.join("")});function Hs(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}T(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,Rr(o),r)}return r});var Gs=T(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,Rr(i),r)}return r}),Os=v(function(e,r){return r.split(e)}),qs=v(function(e,r){return r.join(e)}),Js=T(function(e,r,n){return n.slice(e,r)});function Ys(e){return u(e.trim().split(/\s+/g))}function Xs(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(Rr(t)))return!0}return!1});var Zs=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(Rr(t)))return!1}return!0}),Qs=v(function(e,r){return r.indexOf(e)>-1}),Ks=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var ed=v(function(e,r){var n=e.length;if(n<1)return A;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return u(i)});function Yc(e){return e+""}function rd(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return j;r=10*r+o-48}return i==t?j:N(n==45?-r:r)}function nd(e){if(e.length===0||/[\sxbo]/.test(e))return j;var r=+e;return r===r?N(r):j}function ad(e){return Qt(e).join("")}function td(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function id(e){return Rr(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function od(e){return{$:0,a:e}}function ld(e){return{$:1,a:e}}function zo(e){return{$:2,b:e}}var cd=zo(function(e){return typeof e=="boolean"?Be(e):Ur("a BOOL",e)}),ud=zo(function(e){return typeof e=="number"?Be(e):Ur("a FLOAT",e)}),$d=zo(function(e){return typeof e=="string"?Be(e):e instanceof String?Be(e+""):Ur("a STRING",e)});function vd(e){return{$:3,b:e}}var fd=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function xn(e,r){return{$:9,f:e,g:r}}var md=v(function(e,r){return{$:10,b:r,h:e}}),sd=v(function(e,r){return xn(e,[r])}),dd=T(function(e,r,n){return xn(e,[r,n])});q(function(e,r,n,t){return xn(e,[r,n,t])});Re(function(e,r,n,t,i){return xn(e,[r,n,t,i])});mr(function(e,r,n,t,i,o){return xn(e,[r,n,t,i,o])});Zt(function(e,r,n,t,i,o,l){return xn(e,[r,n,t,i,o,l])});be(function(e,r,n,t,i,o,l,c){return xn(e,[r,n,t,i,o,l,c])});xo(function(e,r,n,t,i,o,l,c,$){return xn(e,[r,n,t,i,o,l,c,$])});v(function(e,r){try{var n=JSON.parse(r);return _r(e,n)}catch(t){return Ke(a(Go,"This is not valid JSON! "+t.message,rn(r)))}});var Xc=v(function(e,r){return _r(e,da(r))});function _r(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Be(e.c):Ur("null",r);case 3:return Kt(r)?Zc(e.b,r,u):Ur("a LIST",r);case 4:return Kt(r)?Zc(e.b,r,pd):Ur("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Ur("an OBJECT with a field named `"+n+"`",r);var t=_r(e.b,r[n]);return Fr(t)?t:Ke(a(Eu,n,t.a));case 7:var i=e.e;if(!Kt(r))return Ur("an ARRAY",r);if(i>=r.length)return Ur("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var t=_r(e.b,r[i]);return Fr(t)?t:Ke(a(Vu,i,t.a));case 8:if(typeof r!="object"||r===null||Kt(r))return Ur("an OBJECT",r);var o=A;for(var l in r)if(r.hasOwnProperty(l)){var t=_r(e.b,r[l]);if(!Fr(t))return Ke(a(Eu,l,t.a));o=jr(L(l,t.a),o)}return Be(nr(o));case 9:for(var c=e.f,$=e.g,m=0;m<$.length;m++){var t=_r($[m],r);if(!Fr(t))return t;c=c(t.a)}return Be(c);case 10:var t=_r(e.b,r);return Fr(t)?_r(e.h(t.a),r):t;case 11:for(var s=A,p=e.g;p.b;p=p.b){var t=_r(p.a,r);if(Fr(t))return t;s=jr(t.a,s)}return Ke(g0(nr(s)));case 1:return Ke(a(Go,e.a,rn(r)));case 0:return Be(e.a)}}function Zc(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=_r(e,r[o]);if(!Fr(l))return Ke(a(Vu,o,l.a));i[o]=l.a}return Be(n(i))}function Kt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function pd(e){return a(D0,e.length,function(r){return e[r]})}function Ur(e,r){return Ke(a(Go,"Expecting "+e,rn(r)))}function sa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return sa(e.b,r.b);case 6:return e.d===r.d&&sa(e.b,r.b);case 7:return e.e===r.e&&sa(e.b,r.b);case 9:return e.f===r.f&&Qc(e.g,r.g);case 10:return e.h===r.h&&sa(e.b,r.b);case 11:return Qc(e.g,r.g)}}function Qc(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!sa(e[t],r[t]))return!1;return!0}var gd=v(function(e,r){return JSON.stringify(da(r),null,e)+""});function rn(e){return e}function da(e){return e}function hd(){return[]}function bd(){return{}}var _d=T(function(e,r,n){return n[e]=da(r),n});function wd(e){return v(function(r,n){return n.push(da(e(r))),n})}function On(e){return{$:0,a:e}}function yd(e){return{$:1,a:e}}function nn(e){return{$:2,b:e,c:null}}var Lo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function xd(e){return{$:5,b:e}}var Sd=0;function Po(e){var r={$:0,e:Sd++,f:e,g:null,h:[]};return To(r),r}function Kc(e){return nn(function(r){r(On(Po(e)))})}function eu(e,r){e.h.push(r),To(e)}var Cd=v(function(e,r){return nn(function(n){eu(e,r),n(On(Ka))})}),Mo=!1,ru=[];function To(e){if(ru.push(e),!Mo){for(Mo=!0;e=ru.shift();)zd(e);Mo=!1}}function zd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,To(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}q(function(e,r,n,t){return ko(r,t,e.gT,e.im,e.h$,function(){return function(){}})});function ko(e,r,n,t,i,o){var l=a(Xc,e,rn(r?r.flags:void 0));Fr(l)||ma(2);var c={},$=n(l.a),m=$.a,s=o(g,m),p=Ld(c,g);function g(f,_){var w=a(t,f,m);s(m=w.a,_),tu(c,w.b,i(m))}return tu(c,$.b,i(m)),p?{ports:p}:{}}var Nr={};function Ld(e,r){var n;for(var t in Nr){var i=Nr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Md(i,r)}return n}function Pd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Md(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c($){return a(Lo,c,xd(function(m){var s=m.a;return m.$===0?b(i,n,s,$):o&&l?P(t,n,s.i,s.j,$):b(t,n,o?s.i:s.j,$)}))}return n.h=Po(a(Lo,c,e.b))}var Td=v(function(e,r){return nn(function(n){e.g(r),n(On(Ka))})});v(function(e,r){return a(Cd,e.h,{$:0,a:r})});function nu(e){return function(r){return{$:1,k:e,l:r}}}function kd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var au=[],Do=!1;function tu(e,r,n){if(au.push({p:e,q:r,r:n}),!Do){Do=!0;for(var t;t=au.shift();)Dd(t.p,t.q,t.r);Do=!1}}function Dd(e,r,n){var t={};ei(!0,r,t,null),ei(!1,n,t,null);for(var i in e)eu(e[i],{$:"fx",a:t[i]||{i:A,j:A}})}function ei(e,r,n,t){switch(r.$){case 1:var i=r.k,o=Ad(e,i,t,r.l);n[i]=Fd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)ei(e,l.a,n,t);return;case 3:ei(e,r.o,n,{s:r.n,t});return}}function Ad(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Nr[r].e:Nr[r].f;return a(o,i,t)}function Fd(e,r,n){return n=n||{i:A,j:A},e?n.i=jr(r,n.i):n.j=jr(r,n.j),n}function Id(e){Nr[e]&&ma(3)}v(function(e,r){return r});function Bd(e,r){return Id(e),Nr[e]={f:Ed,u:r,a:Vd},nu(e)}var Ed=v(function(e,r){return function(n){return e(r(n))}});function Vd(e,r){var n=A,t=Nr[e].u,i=On(null);Nr[e].b=i,Nr[e].c=T(function(l,c,$){return n=c,i});function o(l){var c=a(Xc,t,rn(l));Fr(c)||ma(4,e,c.a);for(var $=c.a,m=n;m.b;m=m.b)r(m.a($))}return{send:o}}var ri,an=typeof document!="undefined"?document:{};function Ao(e,r){e.appendChild(r)}q(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(Cn(e,function(){}),i),{}});function Fo(e){return{$:0,a:e}}var iu=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Bo(n),e:i,f:e,b:o}})}),Wr=iu(void 0),Rd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Bo(n),e:i,f:e,b:o}})}),jd=Rd(void 0);function Ud(e,r,n,t){return{$:3,d:Bo(e),g:r,h:n,i:t}}var Nd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Sn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Sn([e,r],function(){return e(r)})});T(function(e,r,n){return Sn([e,r,n],function(){return a(e,r,n)})});var Wd=q(function(e,r,n,t){return Sn([e,r,n,t],function(){return b(e,r,n,t)})});Re(function(e,r,n,t,i){return Sn([e,r,n,t,i],function(){return P(e,r,n,t,i)})});mr(function(e,r,n,t,i,o){return Sn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});Zt(function(e,r,n,t,i,o,l){return Sn([e,r,n,t,i,o,l],function(){return Ze(e,r,n,t,i,o,l)})});be(function(e,r,n,t,i,o,l,c){return Sn([e,r,n,t,i,o,l,c],function(){return So(e,r,n,t,i,o,l,c)})});xo(function(e,r,n,t,i,o,l,c,$){return Sn([e,r,n,t,i,o,l,c,$],function(){return Qa(e,r,n,t,i,o,l,c,$)})});var ou=v(function(e,r){return{$:"a0",n:e,o:r}}),Hd=v(function(e,r){return{$:"a1",n:e,o:r}}),Io=v(function(e,r){return{$:"a2",n:e,o:r}}),Dr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function lu(e){return e=="script"?"p":e}function Gd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Od(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function qd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function cu(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Jd=v(function(e,r){return r.$==="a0"?a(ou,r.n,Yd(e,r.o)):r});function Yd(e,r){var n=Ko(r);return{$:r.$,a:n?b(A0,n<3?Xd:Zd,ar(e),r.a):a(oi,e,r.a)}}var Xd=v(function(e,r){return L(e(r.a),r.b)}),Zd=v(function(e,r){return{aA:e(r.aA),dF:r.dF,du:r.du}});function Bo(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?uu(r,i,da(o)):r[i]=da(o);continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?uu(l,i,o):l[i]=o}return r}function uu(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Cn(e,r){var n=e.$;if(n===5)return Cn(e.k||(e.k=e.m()),r);if(n===0)return an.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=Cn(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Eo(l,r,e.d),l}var l=e.f?an.createElementNS(e.f,e.c):an.createElement(e.c);ri&&e.c=="a"&&l.addEventListener("click",ri(l)),Eo(l,r,e.d);for(var c=e.e,$=0;$<c.length;$++)Ao(l,Cn(n===1?c[$]:c[$].b,r));return l}function Eo(e,r,n){for(var t in n){var i=n[t];t==="a1"?Qd(e,i):t==="a0"?rp(e,r,i):t==="a3"?Kd(e,i):t==="a4"?ep(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Qd(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Kd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function ep(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function rp(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=np(r,o),e.addEventListener(i,l,Vo&&{passive:Ko(o)<2}),t[i]=l}}var Vo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Vo=!0}}))}catch{}function np(e,r){function n(t){var i=n.q,o=_r(i.a,t);if(!!Fr(o)){for(var l=Ko(i),c=o.a,$=l?l<3?c.a:c.aA:c,m=l==1?c.b:l==3&&c.dF,s=(m&&t.stopPropagation(),(l==2?c.b:l==3&&c.du)&&t.preventDefault(),e),p,g;p=s.j;){if(typeof p=="function")$=p($);else for(var g=p.length;g--;)$=p[g]($);s=s.p}s($,m)}}return n.q=r,n}function ap(e,r){return e.$==r.$&&sa(e.a,r.a)}function $u(e,r){var n=[];return Ar(e,r,n,0),n}function Qe(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Ar(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=vp(r),o=1;else{Qe(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,$=l.length,m=$===c.length;m&&$--;)m=l[$]===c[$];if(m){r.k=e.k;return}r.k=r.m();var s=[];Ar(e.k,r.k,s,0),s.length>0&&Qe(n,1,t,s);return;case 4:for(var p=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof p!="object"?p=[p,_.j]:p.push(_.j),_=_.k;for(var w=r.k;w.$===4;)f=!0,typeof g!="object"?g=[g,w.j]:g.push(w.j),w=w.k;if(f&&p.length!==g.length){Qe(n,0,t,r);return}(f?!tp(p,g):p!==g)&&Qe(n,2,t,g),Ar(_,w,n,t+1);return;case 0:e.a!==r.a&&Qe(n,3,t,r.a);return;case 1:vu(e,r,n,t,ip);return;case 2:vu(e,r,n,t,op);return;case 3:if(e.h!==r.h){Qe(n,0,t,r);return}var x=Ro(e.d,r.d);x&&Qe(n,4,t,x);var S=r.i(e.g,r.g);S&&Qe(n,5,t,S);return}}}function tp(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function vu(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){Qe(n,0,t,r);return}var o=Ro(e.d,r.d);o&&Qe(n,4,t,o),i(e,r,n,t)}function Ro(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Ro(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&ap(l,c)||(t=t||{},t[i]=c)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function ip(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?Qe(n,6,t,{v:c,i:l-c}):l<c&&Qe(n,7,t,{v:l,e:o});for(var $=l<c?l:c,m=0;m<$;m++){var s=i[m];Ar(s,o[m],n,++t),t+=s.b||0}}function op(e,r,n,t){for(var i=[],o={},l=[],c=e.e,$=r.e,m=c.length,s=$.length,p=0,g=0,f=t;p<m&&g<s;){var _=c[p],w=$[g],x=_.a,S=w.a,y=_.b,C=w.b,B=void 0,J=void 0;if(x===S){f++,Ar(y,C,i,f),f+=y.b||0,p++,g++;continue}var Z=c[p+1],H=$[g+1];if(Z){var Y=Z.a,X=Z.b;J=S===Y}if(H){var V=H.a,ne=H.b;B=x===V}if(B&&J){f++,Ar(y,ne,i,f),et(o,i,x,C,g,l),f+=y.b||0,f++,rt(o,i,x,X,f),f+=X.b||0,p+=2,g+=2;continue}if(B){f++,et(o,i,S,C,g,l),Ar(y,ne,i,f),f+=y.b||0,p+=1,g+=2;continue}if(J){f++,rt(o,i,x,y,f),f+=y.b||0,f++,Ar(X,C,i,f),f+=X.b||0,p+=2,g+=1;continue}if(Z&&Y===V){f++,rt(o,i,x,y,f),et(o,i,S,C,g,l),f+=y.b||0,f++,Ar(X,ne,i,f),f+=X.b||0,p+=2,g+=2;continue}break}for(;p<m;){f++;var _=c[p],y=_.b;rt(o,i,_.a,y,f),f+=y.b||0,p++}for(;g<s;){var ve=ve||[],w=$[g];et(o,i,w.a,w.b,void 0,ve),g++}(i.length>0||l.length>0||ve)&&Qe(n,8,t,{w:i,x:l,y:ve})}var fu="_elmW6BL";function et(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Ar(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}et(e,r,n+fu,t,i,o)}function rt(e,r,n,t,i){var o=e[n];if(!o){var l=Qe(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Ar(t,o.z,c,i),Qe(r,9,i,{w:c,A:o});return}rt(e,r,n+fu,t,i)}function mu(e,r,n,t){nt(e,r,n,0,0,r.b,t)}function nt(e,r,n,t,i,o,l){for(var c=n[t],$=c.r;$===i;){var m=c.$;if(m===1)mu(e,r.k,c.s,l);else if(m===8){c.t=e,c.u=l;var s=c.s.w;s.length>0&&nt(e,r,s,0,i,o,l)}else if(m===9){c.t=e,c.u=l;var p=c.s;if(p){p.A.s=e;var s=p.w;s.length>0&&nt(e,r,s,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||($=c.r)>o)return t}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return nt(e,f,n,t,i+1,o,e.elm_event_node_ref)}for(var _=r.e,w=e.childNodes,x=0;x<_.length;x++){i++;var S=g===1?_[x]:_[x].b,y=i+(S.b||0);if(i<=$&&$<=y&&(t=nt(w[x],S,n,t,i,y,l),!(c=n[t])||($=c.r)>o))return t;i=y}return t}function su(e,r,n,t){return n.length===0?e:(mu(e,r,n,t),ni(e,n))}function ni(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=lp(i,t);i===e&&(e=o)}return e}function lp(e,r){switch(r.$){case 0:return cp(e,r.s,r.u);case 4:return Eo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ni(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,t=n.e,i=n.v,o=e.childNodes[i];i<t.length;i++)e.insertBefore(Cn(t[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=ni(e,n.w),e;case 8:return up(e,r);case 5:return r.s(e);default:ma(10)}}function cp(e,r,n){var t=e.parentNode,i=Cn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function up(e,r){var n=r.s,t=$p(n.y,r);e=ni(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,$=c.c===2?c.s:Cn(c.z,r.u);e.insertBefore($,e.childNodes[l.r])}return t&&Ao(e,t),e}function $p(e,r){if(!!e){for(var n=an.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Ao(n,o.c===2?o.s:Cn(o.z,r.u))}return n}}function jo(e){if(e.nodeType===3)return Fo(e.textContent);if(e.nodeType!==1)return Fo("");for(var r=A,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=jr(a(Dr,o,l),r)}for(var c=e.tagName.toLowerCase(),$=A,m=e.childNodes,t=m.length;t--;)$=jr(jo(m[t]),$);return b(Wr,c,r,$)}function vp(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var fp=q(function(e,r,n,t){return ko(r,t,e.gT,e.im,e.h$,function(i,o){var l=e.io,c=t.node,$=jo(c);return du(o,function(m){var s=l(m),p=$u($,s);c=su(c,$,p,i),$=s})})});q(function(e,r,n,t){return ko(r,t,e.gT,e.im,e.h$,function(i,o){var l=e.dD&&e.dD(i),c=e.io,$=an.title,m=an.body,s=jo(m);return du(o,function(p){ri=l;var g=c(p),f=Wr("body")(A)(g.fU),_=$u(s,f);m=su(m,s,_,i),s=f,ri=0,$!==g.ih&&(an.title=$=g.ih)})})});var ai=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function du(e,r){r(e);var n=0;function t(){n=n===1?0:(ai(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&ai(t),n=2)}}v(function(e,r){return a(rl,ut,nn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(rl,ut,nn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(rl,ut,nn(function(){history.replaceState({},"",r),e()}))});var mp={addEventListener:function(){},removeEventListener:function(){}},sp=typeof window!="undefined"?window:mp;T(function(e,r,n){return Kc(nn(function(t){function i(o){Po(n(o))}return e.addEventListener(r,i,Vo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=_r(e,r);return Fr(n)?N(n.a):j});function pu(e,r){return nn(function(n){ai(function(){var t=document.getElementById(e);n(t?On(r(t)):yd(F0(e)))})})}function dp(e){return nn(function(r){ai(function(){r(On(e()))})})}v(function(e,r){return pu(r,function(n){return n[e](),Ka})});v(function(e,r){return dp(function(){return sp.scroll(e,r),Ka})});T(function(e,r,n){return pu(e,function(t){return t.scrollLeft=r,t.scrollTop=n,Ka})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var pp=v(function(e,r){var n="g";e.hc&&(n+="m"),e.f2&&(n+="i");try{return N(new RegExp(r,n))}catch{return j}});v(function(e,r){return r.match(e)!==null});var gp=T(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,$;i++<e&&($=r.exec(o))&&c!=r.lastIndex;){for(var m=$.length-1,s=new Array(m);m>0;){var p=$[m];s[--m]=p?N(p):j}t.push(P(Nv,$[0],$.index,i,u(s))),c=r.lastIndex}return r.lastIndex=l,u(t)});q(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,$=new Array(c);c>0;){var m=arguments[c];$[--c]=m?N(m):j}return n(P(Nv,l,arguments[arguments.length-2],i,u($)))}return t.replace(r,o)});T(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,u(i)});var hp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/bp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function bp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Uo=new Float64Array(3),gu=new Float64Array(3),hu=new Float64Array(3),_p=T(function(e,r,n){return new Float64Array([e,r,n])}),wp=function(e){return e[0]},yp=function(e){return e[1]},xp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Sp=function(e){return new Float64Array([e.is,e.iw,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function bu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(bu);function _u(e,r,n){return n===void 0&&(n=new Float64Array(3)),ti(bu(e,r,n),n)}v(_u);function wu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function ti(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Cp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),at=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(at);function No(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(No);v(function(e,r){var n,t=Uo,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=at(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(at(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(at(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(at(r,t)+e[14])/n,i});var zp=q(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Lp=function(e){return{is:e[0],iw:e[1],dU:e[2],ft:e[3]}},Pp=function(e){return new Float64Array([e.is,e.iw,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Mp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Mp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Tp=new Float64Array(16),kp=new Float64Array(16),Dp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},Ap=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function yu(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}mr(yu);q(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return yu(l,c,o,i,n,t)});function xu(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}mr(xu);q(function(e,r,n,t){return xu(e,r,n,t,-1,1)});function Su(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],$=e[5],m=e[6],s=e[7],p=e[8],g=e[9],f=e[10],_=e[11],w=e[12],x=e[13],S=e[14],y=e[15],C=r[0],B=r[1],J=r[2],Z=r[3],H=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],ve=r[9],we=r[10],fe=r[11],me=r[12],xe=r[13],se=r[14],Fe=r[15];return n[0]=t*C+c*B+p*J+w*Z,n[1]=i*C+$*B+g*J+x*Z,n[2]=o*C+m*B+f*J+S*Z,n[3]=l*C+s*B+_*J+y*Z,n[4]=t*H+c*Y+p*X+w*V,n[5]=i*H+$*Y+g*X+x*V,n[6]=o*H+m*Y+f*X+S*V,n[7]=l*H+s*Y+_*X+y*V,n[8]=t*ne+c*ve+p*we+w*fe,n[9]=i*ne+$*ve+g*we+x*fe,n[10]=o*ne+m*ve+f*we+S*fe,n[11]=l*ne+s*ve+_*we+y*fe,n[12]=t*me+c*xe+p*se+w*Fe,n[13]=i*me+$*xe+g*se+x*Fe,n[14]=o*me+m*xe+f*se+S*Fe,n[15]=l*me+s*xe+_*se+y*Fe,n}v(Su);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],$=e[6],m=e[8],s=e[9],p=e[10],g=e[12],f=e[13],_=e[14],w=r[0],x=r[1],S=r[2],y=r[4],C=r[5],B=r[6],J=r[8],Z=r[9],H=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=t*w+l*x+m*S,n[1]=i*w+c*x+s*S,n[2]=o*w+$*x+p*S,n[3]=0,n[4]=t*y+l*C+m*B,n[5]=i*y+c*C+s*B,n[6]=o*y+$*C+p*B,n[7]=0,n[8]=t*J+l*Z+m*H,n[9]=i*J+c*Z+s*H,n[10]=o*J+$*Z+p*H,n[11]=0,n[12]=t*Y+l*X+m*V+g,n[13]=i*Y+c*X+s*V+f,n[14]=o*Y+$*X+p*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ti(r,Uo);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,$=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*$,n[2]=o*t*c-i*$,n[3]=0,n[4]=t*i*c-o*$,n[5]=i*i*c+l,n[6]=i*o*c+t*$,n[7]=0,n[8]=t*o*c+i*$,n[9]=i*o*c-t*$,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var t=new Float64Array(16),i=1/wu(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,$=Math.cos(e),m=1-$,s=Math.sin(e),p=o*s,g=l*s,f=c*s,_=o*l*m,w=o*c*m,x=l*c*m,S=o*o*m+$,y=_+f,C=w-g,B=_-f,J=l*l*m+$,Z=x+p,H=w+g,Y=x-p,X=c*c*m+$,V=n[0],ne=n[1],ve=n[2],we=n[3],fe=n[4],me=n[5],xe=n[6],se=n[7],Fe=n[8],ke=n[9],Xe=n[10],Wn=n[11],Ya=n[12],Qr=n[13],Kr=n[14],fa=n[15];return t[0]=V*S+fe*y+Fe*C,t[1]=ne*S+me*y+ke*C,t[2]=ve*S+xe*y+Xe*C,t[3]=we*S+se*y+Wn*C,t[4]=V*B+fe*J+Fe*Z,t[5]=ne*B+me*J+ke*Z,t[6]=ve*B+xe*J+Xe*Z,t[7]=we*B+se*J+Wn*Z,t[8]=V*H+fe*Y+Fe*X,t[9]=ne*H+me*Y+ke*X,t[10]=ve*H+xe*Y+Xe*X,t[11]=we*H+se*Y+Wn*X,t[12]=Ya,t[13]=Qr,t[14]=Kr,t[15]=fa,t});function Fp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}T(Fp);q(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ip(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}T(Ip);q(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],$=t[3],m=t[4],s=t[5],p=t[6],g=t[7],f=t[8],_=t[9],w=t[10],x=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=$,i[4]=m,i[5]=s,i[6]=p,i[7]=g,i[8]=f,i[9]=_,i[10]=w,i[11]=x,i[12]=o*e+m*r+f*n+t[12],i[13]=l*e+s*r+_*n+t[13],i[14]=c*e+p*r+w*n+t[14],i[15]=$*e+g*r+x*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],$=r[2],m=r[3],s=r[4],p=r[5],g=r[6],f=r[7],_=r[8],w=r[9],x=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=$,n[3]=m,n[4]=s,n[5]=p,n[6]=g,n[7]=f,n[8]=_,n[9]=w,n[10]=x,n[11]=S,n[12]=l*t+s*i+_*o+r[12],n[13]=c*t+p*i+w*o+r[13],n[14]=$*t+g*i+x*o+r[14],n[15]=m*t+f*i+S*o+r[15],n});T(function(e,r,n){var t=_u(e,r,Uo),i=ti(No(n,t,gu),gu),o=ti(No(t,i,hu),hu),l=Tp,c=kp;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,Su(l,c)});T(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var Cu=0;function tt(e,r){for(;r.b;r=r.b)e(r.a)}function Wo(e){for(var r=0;e.b;e=e.b)r++;return r}var Bp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Ep=Re(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Vp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Rp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),jp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Up=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Np=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Wp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Hp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Gp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Op=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},qp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Jp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Yp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},zu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Xp=function(e){e.gl.disable(e.gl.CULL_FACE)},Zp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Qp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Kp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Pu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],e0=[qp,Jp,Yp,zu,Lu,Xp,Zp,Qp,Kp];function Mu(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function r0(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Tu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function n0(e,r,n,t){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(f,_,w,x,S){var y;if(i===1)for(y=0;y<_;y++)f[w++]=_===1?x[S]:x[S][y];else o.forEach(function(C){for(y=0;y<_;y++)f[w++]=_===1?x[C][S]:x[C][S][y]})}var $=Tu(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var m=0,s=$.size*$.arraySize*i,p=new $.type(Wo(n.b)*s);tt(function(f){c(p,$.size*$.arraySize,m,f,t[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),g}function a0(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=t0(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Wo(r.b),indexBuffer:null,buffers:{}}}function t0(e,r){var n=new Uint32Array(Wo(e)*r),t=0,i;return tt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function ku(e,r){return e+"#"+r}var Du=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),zu(n),Lu(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,$;if(o.b.id&&o.c.id&&(l=ku(o.b.id,o.c.id),c=n.programs[l]),!c){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=Cu++,m||(m=Mu(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=Cu++,s||(s=Mu(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var p=r0(t,m,s);c={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=i0(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var g=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var f=t.getActiveAttrib(p,$),_=t.getAttribLocation(p,f.name);c.activeAttributes.push(f),c.activeAttributeLocations.push(_)}l=ku(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),o0(c.uniformSetters,o.e);var w=n.buffers.get(o.d);for(w||(w=a0(t,o.d),n.buffers.set(o.d,w)),$=0;$<c.activeAttributes.length;$++){f=c.activeAttributes[$],_=c.activeAttributeLocations[$],w.buffers[f.name]===void 0&&(w.buffers[f.name]=n0(t,f,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,w.buffers[f.name]);var x=Tu(t,f.type);if(x.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,y=S*x.arraySize,C=0;C<x.arraySize;C++)t.enableVertexAttribArray(_+C),t.vertexAttribPointer(_+C,x.size,x.baseType,!1,y,S*C)}for(n.toggle=!n.toggle,tt(f2(n),o.a),$=0;$<Pu.length;$++){var B=n[Pu[$]];B.toggle!==n.toggle&&B.enabled&&(e0[$](n),B.enabled=!1,B.toggle=n.toggle)}w.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,w.indexBuffer),t.drawElements(o.d.a.eS,w.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,w.numIndices)}}return tt(i,e.g),r});function i0(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function $(f,_){var w=_.name,x=e.getUniformLocation(f,w);switch(_.type){case e.INT:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};case e.FLOAT:return function(y){o[w]!==y&&(e.uniform1f(x,y),o[w]=y)};case e.FLOAT_VEC2:return function(y){o[w]!==y&&(e.uniform2f(x,y[0],y[1]),o[w]=y)};case e.FLOAT_VEC3:return function(y){o[w]!==y&&(e.uniform3f(x,y[0],y[1],y[2]),o[w]=y)};case e.FLOAT_VEC4:return function(y){o[w]!==y&&(e.uniform4f(x,y[0],y[1],y[2],y[3]),o[w]=y)};case e.FLOAT_MAT4:return function(y){o[w]!==y&&(e.uniformMatrix4fv(x,!1,new Float32Array(y)),o[w]=y)};case e.SAMPLER_2D:var S=l++;return function(y){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(y);C||(C=y.ge(e),c.textures.set(y,C)),e.bindTexture(e.TEXTURE_2D,C),o[w]!==y&&(e.uniform1i(x,S),o[w]=y)};case e.BOOL:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<s;p++){var g=e.getActiveUniform(i,p);m[t[g.name]||g.name]=$(i,g)}return m}function o0(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var l0=T(function(e,r,n){return Ud(r,{g:n,f:{},h:e},s0,d0)}),c0=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),u0=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),$0=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),v0=v(function(e,r){e.contextAttributes.antialias=!0}),f0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),m0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function s0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};tt(function(i){return a(v2,r,i)},e.h);var n=an.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),Bp(function(){return a(Du,e,n)})):(n=an.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function d0(e,r){return r.f=e.f,Du(r)}var M=Cs,ii=ys,Au=T(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var m=l.a;return b(ii,e,c,m)}else{var $=l.a;return b(ii,o,c,$)}});return b(ii,o,b(ii,e,r,i),t)}),Ho=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,$=b(e,t,i,b(Ho,e,r,l)),m=o;e=c,r=$,n=m;continue e}}),Fu=function(e){return b(Ho,T(function(r,n,t){return a(M,L(r,n),t)}),A,e)},Iu=1,p0=2,Bu=0,Ke=function(e){return{$:1,a:e}},Go=v(function(e,r){return{$:3,a:e,b:r}}),Eu=v(function(e,r){return{$:0,a:e,b:r}}),Vu=v(function(e,r){return{$:1,a:e,b:r}}),Be=function(e){return{$:0,a:e}},g0=function(e){return{$:2,a:e}},N=function(e){return{$:0,a:e}},j={$:1},h0=Zs,b0=gd,k=Yc,ee=v(function(e,r){return a(qs,e,Qt(r))}),Oo=v(function(e,r){return u(a(Os,e,r))}),Ru=function(e){return a(ee,`
    `,a(Oo,`
`,e))},Ie=T(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),qn=function(e){return b(Ie,v(function(r,n){return n+1}),0,e)},_0=zs,w0=T(function(e,r,n){e:for(;;)if(ce(e,r)<1){var t=e,i=r-1,o=a(M,r,n);e=t,r=i,n=o;continue e}else return n}),Hr=v(function(e,r){return b(w0,e,r,A)}),qo=v(function(e,r){return b(_0,e,a(Hr,0,qn(r)-1),r)}),Gr=td,ju=function(e){var r=Gr(e);return 97<=r&&r<=122},Uu=function(e){var r=Gr(e);return r<=90&&65<=r},y0=function(e){return ju(e)||Uu(e)},x0=function(e){var r=Gr(e);return r<=57&&48<=r},S0=function(e){return ju(e)||Uu(e)||x0(e)},nr=function(e){return b(Ie,M,A,e)},pa=Ns,C0=v(function(e,r){return`

(`+(k(e+1)+(") "+Ru(z0(r))))}),z0=function(e){return a(L0,e,A)},L0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,t=e.b,i=function(){var w=pa(n);if(w.$===1)return!1;var x=w.a,S=x.a,y=x.b;return y0(S)&&a(h0,S0,y)}(),o=i?"."+n:"['"+(n+"']"),l=t,c=a(M,o,r);e=l,r=c;continue e;case 1:var $=e.a,t=e.b,m="["+(k($)+"]"),l=t,c=a(M,m,r);e=l,r=c;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+a(ee,"",nr(r)):"Json.Decode.oneOf"}(),_=p+(" failed in the following "+(k(qn(s))+" ways:"));return a(ee,`

`,a(M,_,a(qo,C0,s)))}else{var t=s.a,l=t,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ee,"",nr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(a(ee,"",nr(r))+`:

    `):`Problem with the given value:

`}();return _+(Ru(a(b0,4,f))+(`

`+g))}}),sr=32,Jo=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Yo=gs,it=Is,Xo=v(function(e,r){return Jc(r)/Jc(e)}),ot=As,lt=it(a(Xo,2,sr)),Nu=P(Jo,0,lt,Yo,Yo),Wu=bs,Hu=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Gu=Bs,Zo=hs,wr=v(function(e,r){return ce(e,r)>0?e:r}),P0=function(e){return{$:0,a:e}},Qo=_s,M0=v(function(e,r){e:for(;;){var n=a(Qo,sr,e),t=n.a,i=n.b,o=a(M,P0(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return nr(o)}}),Ou=function(e){var r=e.a;return r},T0=v(function(e,r){e:for(;;){var n=it(r/sr);if(n===1)return a(Qo,sr,e).a;var t=a(M0,e,A),i=n;e=t,r=i;continue e}}),qu=v(function(e,r){if(r.n){var n=r.n*sr,t=Gu(a(Xo,sr,n-1)),i=e?nr(r.C):r.C,o=a(T0,i,r.n);return P(Jo,Zo(r.r)+n,a(wr,5,t*lt),o,r.r)}else return P(Jo,Zo(r.r),lt,Yo,r.r)}),k0=Re(function(e,r,n,t,i){e:for(;;){if(r<0)return a(qu,!1,{C:t,n:n/sr|0,r:i});var o=Hu(b(Wu,sr,r,e)),l=e,c=r-sr,$=n,m=a(M,o,t),s=i;e=l,r=c,n=$,t=m,i=s;continue e}}),D0=v(function(e,r){if(e<=0)return Nu;var n=e%sr,t=b(Wu,n,e-n,r),i=e-n-sr;return F(k0,r,i,e,A,t)}),Fr=function(e){return!e.$},G=md,_e=cd,W=fd,je=ud,Ju=v(function(e,r){return{d1:r.d1,gb:e,cW:r.cW,gq:r.gq,g4:r.g4,hs:r.hs,dB:r.dB,ip:r.ip}}),oi=sd,A0=dd,ar=od,Ko=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Ir=function(e){return e},F0=Ir,Yu=mr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),I0=Qs,Jn=Ws,ga=Js,ct=v(function(e,r){return e<1?r:b(ga,e,Jn(r),r)}),li=ed,ci=function(e){return e===""},ui=v(function(e,r){return e<1?"":b(ga,0,e,r)}),Xu=rd,Zu=Re(function(e,r,n,t,i){if(ci(i)||a(I0,"@",i))return j;var o=a(li,":",i);if(o.b){if(o.b.b)return j;var l=o.a,c=Xu(a(ct,l+1,i));if(c.$===1)return j;var $=c;return N(Ze(Yu,e,a(ui,l,i),$,r,n,t))}else return N(Ze(Yu,e,i,j,r,n,t))}),Qu=q(function(e,r,n,t){if(ci(t))return j;var i=a(li,"/",t);if(i.b){var o=i.a;return F(Zu,e,a(ct,o,t),r,n,a(ui,o,t))}else return F(Zu,e,"/",r,n,t)}),Ku=T(function(e,r,n){if(ci(n))return j;var t=a(li,"?",n);if(t.b){var i=t.a;return P(Qu,e,N(a(ct,i+1,n)),r,a(ui,i,n))}else return P(Qu,e,j,r,n)});v(function(e,r){if(ci(r))return j;var n=a(li,"#",r);if(n.b){var t=n.a;return b(Ku,e,N(a(ct,t+1,r)),a(ui,t,r))}else return b(Ku,e,j,r)});var B0=Ks,ut=function(e){},$t=On,E0=$t(0),e$=q(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var $=c.a,m=c.b;if(m.b){var s=m.a,p=m.b,g=n>500?b(Ie,e,r,nr(p)):P(e$,e,r,n+1,p);return a(e,i,a(e,l,a(e,$,a(e,s,g))))}else return a(e,i,a(e,l,a(e,$,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),Ge=T(function(e,r,n){return P(e$,e,r,0,n)}),O=v(function(e,r){return b(Ge,v(function(n,t){return a(M,e(n),t)}),A,r)}),$i=Lo,el=v(function(e,r){return a($i,function(n){return $t(e(n))},r)}),V0=T(function(e,r,n){return a($i,function(t){return a($i,function(i){return $t(a(e,t,i))},n)},r)}),R0=function(e){return b(Ge,V0(M),$t(A),e)},j0=Td,U0=v(function(e,r){var n=r;return Kc(a($i,j0(e),n))}),N0=T(function(e,r,n){return a(el,function(t){return 0},R0(a(O,U0(e),r)))}),W0=T(function(e,r,n){return $t(0)}),H0=v(function(e,r){var n=r;return a(el,e,n)});Nr.Task=Pd(E0,N0,W0,H0);var G0=nu("Task"),rl=v(function(e,r){return G0(a(el,e,r))}),O0=fp,q0=js,vi={$:1},r$=function(e){return{$:2,a:e}},nl={$:0},yr=v(function(e,r){return{$:0,a:e,b:r}}),Oe=T(function(e,r,n){return r(e(n))}),Yn=function(e){var r=e.b.s;return r.a},J0=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return N(a(yr,r,{s:o,an:l,X:a(M,t,n)}))}else return j},Ce=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Y0=T(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dG;return(ce(o+r.gq,Yn(n).d1)>0?a(Oe,J0,Ce(a(yr,vi,i))):Ir)(a(yr,r$({dG:o+r.gq}),i));default:var l=i.s,c=l.a,$=l.b,m=a(Ju,c.gb,De(r,{d1:c.d1+r.gq})),s=a(e,m,$);return a(yr,nl,{s:L(m,s),an:A,X:a(M,i.s,i.X)})}}),n$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),X0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(M,t,n);e=o,r=l,n=c;continue e}else return n}}),Z0=v(function(e,r){return nr(b(X0,e,r,A))}),a$=T(function(e,r,n){if(r<=0)return A;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,l=o.a;return u([y,l]);case 3:if(t.b.b.b.b){var c=t.b,y=c.a,$=c.b,l=$.a,m=$.b,s=m.a;return u([y,l,s])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,y=p.a,g=p.b,l=g.a,f=g.b,s=f.a,_=f.b,w=_.a,x=_.b;return e>1e3?a(M,y,a(M,l,a(M,s,a(M,w,a(Z0,r-4,x))))):a(M,y,a(M,l,a(M,s,a(M,w,b(a$,e+1,r-4,x)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var S=t.b,y=S.a;return u([y])}}),Q0=v(function(e,r){return b(a$,0,e,r)}),K0=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=U(nr(n),U(u([t]),i)),l=a(Q0,e,o),c=a(n$,e,o);if(c.b){var $=c.a,m=c.b;return a(yr,vi,{s:$,an:m,X:nr(l)})}else{var s=nr(l);if(s.b){var p=s.a,g=s.b;return a(yr,vi,{s:p,an:A,X:g})}else return r}}),eg=function(e){var r=e.b;return a(yr,vi,r)},rg=function(e){var r=e.b;return a(yr,r$({dG:Yn(e).d1}),r)},ng=function(e){var r=e.b;return a(yr,nl,r)},ag=v(function(e,r){switch(e.$){case 1:return eg(r);case 2:return ng(r);case 3:return rg(r);default:var n=e.a;return a(K0,n,r)}}),fi=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),tg=v(function(e,r){return De(r,{aN:e(r.aN)})}),ig=function(e){return{$:3,a:e}},t$=function(e){return{$:2,a:e}},i$=v(function(e,r){return{$:0,a:e,b:r}}),og=v(function(e,r){return{$:1,a:e,b:r}}),Ee=v(function(e,r){if(r.$)return j;var n=r.a;return N(e(n))}),de=function(e){return e<0?-e:e},o$=nd,lg=T(function(e,r,n){return a(Ce,0/0,o$(a(e,r,n)))}),vt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),cg=Gs,l$=function(e){return b(cg,M,A,e)},ug=v(function(e,r){var n=a(vt,function(t){return t!=="0"&&t!=="."},l$(r));return U(e&&n?"-":"",r)}),ae=Yc,al=Us,c$=id,u$=function(e){var r=e.a,n=e.b;if(r==="9"){var t=pa(n);if(t.$===1)return"01";var i=t.a;return a(al,"0",u$(i))}else{var o=Gr(r);return o>=48&&o<57?a(al,c$(o+1),n):"0"}},tl=Fs,$g=Rs,mi=function(e){return a(al,e,"")},$$=T(function(e,r,n){return e<=0?n:b($$,e>>1,U(r,r),e&1?U(n,r):n)}),ft=v(function(e,r){return b($$,e,r,"")}),il=T(function(e,r,n){return U(n,a(ft,e-Jn(n),mi(r)))}),ol=Hs,v$=function(e){var r=a(Oo,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},vg=function(e){var r=a(Oo,"e",ae(de(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ce,0,Xu(a(B0,"+",i)?a(ct,1,i):i)),l=v$(n),c=l.a,$=l.b,m=U(c,$),s=o<0?a(Ce,"0",a(Ee,function(p){var g=p.a,f=p.b;return g+("."+f)},a(Ee,fi(mi),pa(U(a(ft,de(o),"0"),m))))):b(il,o+1,"0",m);return U(e<0?"-":"",s)}else{var n=r.a;return U(e<0?"-":"",n)}else return""},fg=T(function(e,r,n){if(tl(n)||$g(n))return ae(n);var t=n<0,i=v$(vg(de(n))),o=i.a,l=i.b,c=Jn(o)+r,$=U(a(ft,-c+1,"0"),b(il,c,"0",U(o,l))),m=Jn($),s=a(wr,1,c),p=a(e,t,b(ga,s,m,$)),g=b(ga,0,s,$),f=p?ol(a(Ce,"1",a(Ee,u$,pa(ol(g))))):g,_=Jn(f),w=f==="0"?f:r<=0?U(f,a(ft,de(r),"0")):ce(r,Jn(l))<0?b(ga,0,_-r,f)+("."+b(ga,_-r,_,f)):U(o+".",b(il,r,"0",l));return a(ug,t,w)}),f$=fg(v(function(e,r){var n=pa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Gr(i))})),mg=lg(f$),sg=T(function(e,r,n){var t=a(Xo,10,de(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(mg,i,n)}),m$=Ss,si=v(function(e,r){e:for(;;){if(r.$===-2)return j;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(m$,e,n);switch(l){case 0:var c=e,$=i;e=c,r=$;continue e;case 1:return N(t);default:var c=e,$=o;e=c,r=$;continue e}}}),te=Re(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Or={$:-2},ha=Re(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,$=i.e;if(t.$===-1&&!t.a){t.a;var m=t.b,s=t.c,p=t.d,g=t.e;return F(te,0,r,n,F(te,1,m,s,p,g),F(te,1,o,l,c,$))}else return F(te,e,o,l,F(te,0,r,n,t,c),$)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var m=t.b,s=t.c,f=t.d;f.a;var _=f.b,w=f.c,x=f.d,S=f.e,g=t.e;return F(te,0,m,s,F(te,1,_,w,x,S),F(te,1,r,n,g,i))}else return F(te,e,r,n,t,i)}),ll=T(function(e,r,n){if(n.$===-2)return F(te,0,e,r,Or,Or);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,$=a(m$,e,i);switch($){case 0:return F(ha,t,i,o,b(ll,e,r,l),c);case 1:return F(te,t,i,r,l,c);default:return F(ha,t,i,o,l,b(ll,e,r,c))}}),ba=T(function(e,r,n){var t=b(ll,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return F(te,1,i,o,l,c)}else{var $=t;return $}}),dg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},s$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,$=i.e,m=e.e;m.a;var s=m.b,p=m.c,g=m.d;g.a;var f=g.b,_=g.c,w=g.d,x=g.e,S=m.e;return F(te,0,f,_,F(te,1,n,t,F(te,0,o,l,c,$),w),F(te,1,s,p,x,S))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,$=y.e,C=e.e;C.a;var s=C.b,p=C.c,g=C.d,S=C.e;return F(te,1,n,t,F(te,0,o,l,c,$),F(te,0,s,p,g,S))}else return e},d$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var $=c.b,m=c.c,s=c.d,p=c.e,g=i.e,f=e.e;f.a;var _=f.b,w=f.c,x=f.d,S=f.e;return F(te,0,o,l,F(te,1,$,m,s,p),F(te,1,n,t,g,F(te,0,_,w,x,S)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,C=y.d,g=y.e,B=e.e;B.a;var _=B.b,w=B.c,x=B.d,S=B.e;return F(te,1,n,t,F(te,0,o,l,C,g),F(te,0,_,w,x,S))}else return e},pg=Zt(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,$=o.c,m=o.d,s=o.e;return F(te,n,c,$,m,F(te,0,t,i,s,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var p=l.d;return p.a,d$(r)}else break e;else return l.a,l.d,d$(r);else break e;return r}}),di=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(te,r,n,t,di(i),c);var $=s$(e);if($.$===-1){var m=$.a,s=$.b,p=$.c,g=$.d,f=$.e;return F(ha,m,s,p,di(g),f)}else return Or}else return F(te,r,n,t,di(i),c)}else return Or},mt=v(function(e,r){if(r.$===-2)return Or;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(ce(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(te,n,t,i,a(mt,e,o),l);var $=s$(r);if($.$===-1){var m=$.a,s=$.b,p=$.c,g=$.d,f=$.e;return F(ha,m,s,p,a(mt,e,g),f)}else return Or}else return F(te,n,t,i,a(mt,e,o),l);else return a(gg,e,So(pg,e,r,n,t,i,o,l))}),gg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(le(e,t)){var c=dg(l);if(c.$===-1){var $=c.b,m=c.c;return F(ha,n,$,m,o,di(l))}else return Or}else return F(ha,n,t,i,o,a(mt,e,l))}else return Or}),hg=v(function(e,r){var n=a(mt,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return F(te,1,t,i,o,l)}else{var c=n;return c}}),pi=T(function(e,r,n){var t=r(a(si,e,n));if(t.$)return a(hg,e,n);var i=t.a;return b(ba,e,i,n)}),bg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(pi,r,Ee(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(og,L(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(pi,r,Ee(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(i$,L(o,l),b(sg,o,l,n))}));case 3:var r=e.a,n=e.b;return a(pi,r,Ee(function(t){return t.$===3?ig(n):t}));default:var r=e.a,n=e.b;return a(pi,r,Ee(function(t){return t.$===2?t$(n):t}))}},_g=function(e){return tg(bg(e))},wg=v(function(e,r){return a(O,_g(e),r)}),yg=v(function(e,r){return De(r,{gb:a(wg,e,r.gb)})}),xg=v(function(e,r){var n=r.a,t=r.b;return a(yr,n,De(t,{s:a(fi,yg(e),t.s)}))}),cl=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),Sg=T(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(yr,t,De(i,{s:a(cl,a(e,o.a,r),o)}))}),Cg=q(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return De(t,{bw:!t.bw});case 2:var i=n.a;return De(t,{R:b(Y0,e,i,t.R)});case 3:var o=n.a;return De(t,{bp:o});case 4:var l=n.a;return De(t,{R:a(xg,l,t.R)});case 5:var c=n.a;return De(t,{R:b(Sg,r,c,t.R)});default:var $=n.a;return De(t,{R:a(ag,$,t.R)})}}),zg=v(function(e,r){return a(yr,nl,{s:L(e,r(e)),an:A,X:A})}),Lg=kd,p$=Lg(A),Pg=function(e){return{$:2,a:e}},gi=vd,_a=$d,Mg=Bd("tick",a(G,function(e){return a(G,function(r){return a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(l){return ar({d1:l,cW:o,gq:i,g4:t,hs:n,dB:r,ip:e})},a(W,"clock",je))},a(W,"devicePixelRatio",je))},a(W,"dt",je))},a(W,"keyboard",a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(l){return a(G,function(c){return a(G,function($){return a(G,function(m){return a(G,function(s){return a(G,function(p){return ar({fJ:p,gd:s,d4:m,gp:$,g5:c,hu:l,hA:o,hN:i,fl:t})},a(W,"alt",_e))},a(W,"control",_e))},a(W,"down",_e))},a(W,"downs",gi(_a)))},a(W,"left",_e))},a(W,"pressedKeys",gi(_a)))},a(W,"right",_e))},a(W,"shift",_e))},a(W,"up",_e))))},a(W,"pointer",a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(l){return a(G,function(c){return a(G,function($){return a(G,function(m){return ar({d4:m,g0:$,hb:c,hB:l,hC:o,fl:i,is:t,iw:n})},a(W,"down",_e))},a(W,"isDown",_e))},a(W,"move",_e))},a(W,"rightDown",_e))},a(W,"rightUp",_e))},a(W,"up",_e))},a(W,"x",je))},a(W,"y",je))))},a(W,"screen",a(G,function(r){return a(G,function(n){return ar({gI:n,iq:r})},a(W,"height",je))},a(W,"width",je))))},a(W,"wheel",a(G,function(e){return a(G,function(r){return ar({gi:r,gj:e})},a(W,"deltaX",je))},a(W,"deltaY",je))))),Tg=function(e){return e.dM,Mg(Pg)},kg=function(e){return{$:5,a:e}},Dg={$:0},hi=v(function(e,r){return e}),Ag=function(e){var r=e.b.s;return r.b},Fg=function(e){return{$:1,a:e}},Ig=Fg,g$=function(e){return{$:8,a:e}},pe=g$,st=function(e){return{$:0,a:e}},dt=T(function(e,r,n){return e(r(n))}),Bg=a(dt,st,hi),zn=Bg,ze=function(e){return{$:1,a:e}},tn=ze,h$=v(function(e,r){return{$:9,a:e,b:r}}),Xn={$:0},b$=v(function(e,r){return r.$===3?Xn:a(h$,e,r)}),ul=function(e){return a(b$,4,e)},d={fy:"a",cK:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cL:"ah",cM:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gg:"cptr",gh:"ctxt",gy:"fcs",ea:"focus-within",gz:"fs",gD:"g",cY:"hbh",cZ:"hc",ee:"he",c_:"hf",ef:"hfp",gL:"hv",gO:"ic",gQ:"fr",ci:"lbl",gU:"iml",gV:"imlf",gW:"imlp",gX:"implw",gY:"it",g3:"i",et:"lnk",be:"nb",eU:"notxt",hh:"ol",hi:"or",aU:"oq",hn:"oh",eY:"pg",eZ:"p",ho:"ppe",hD:"ui",af:"r",hH:"sb",hI:"sbx",hJ:"sby",hK:"sbt",hP:"e",hQ:"cap",hS:"sev",hY:"sk",Y:"t",h3:"tc",h4:"w8",h5:"w2",h6:"w9",h7:"tj",cE:"tja",h8:"tl",h9:"w3",ia:"w5",ib:"w4",ic:"tr",id:"w6",ie:"w1",$8:"tun",fj:"ts",a$:"clr",il:"u",dN:"wc",fu:"we",dO:"wf",fv:"wfp",dQ:"wrp"},$l=rn,xr=v(function(e,r){return a(Io,e,$l(r))}),Sr=xr("className"),dr=function(e){return ze(Sr(e))},_$=v(function(e,r){return{$:2,a:e,b:r}}),Eg=v(function(e,r){return{$:1,a:e,b:r}}),Ye=function(e){return{$:0,a:e}},pr=2,Vg={$:0},Zn=Vg,Rg={$:0},jg=d.fK+(" "+d.aw),Ug=d.fK+(" "+d.gD),Ng=d.fK+(" "+d.eY),Wg=d.fK+(" "+d.eZ),Hg=d.fK+(" "+d.af),Gg=d.fK+(" "+d.hP),Og=function(e){switch(e){case 0:return Hg;case 1:return jg;case 2:return Gg;case 3:return Ug;case 4:return Wg;default:return Ng}},w$=function(e){return{$:1,a:e}},Qn={$:0},vl=function(e){return{$:1,a:e}},y$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return U(n,e);case 2:var t=r.a;return U(e,t);default:var n=r.a,t=r.b;return U(n,U(e,t))}}),x$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return U(a(O,function(o){return L(e,o)},t),r);case 2:var i=n.a;return U(r,a(O,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return U(a(O,function(o){return L(e,o)},t),U(r,a(O,function(o){return L(e,o)},i)))}}),bi=4,qg=function(e){return{$:0,a:e}},Jg=function(e){return{$:1,a:e}},ue=function(e){return e>31?Jg(1<<e-32):qg(1<<e)},S$=ue(41),C$=ue(40),z$=ue(42),L$=ue(43),tr=Wr("div"),fl=Or,P$=fl,qr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,i=e.b;return"min"+(k(t)+qr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+qr(i))}},Le=Es,Ae=function(e){return k(Le(e*255))},ml=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return N("mv-"+(Ae(n)+("-"+(Ae(t)+("-"+Ae(i))))));default:var o=e.a,l=o.a,c=o.b,$=o.c,m=e.b,s=m.a,p=m.b,g=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d;return N("tfrm-"+(Ae(l)+("-"+(Ae(c)+("-"+(Ae($)+("-"+(Ae(s)+("-"+(Ae(p)+("-"+(Ae(g)+("-"+(Ae(_)+("-"+(Ae(w)+("-"+(Ae(x)+("-"+Ae(S))))))))))))))))))))}},pt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var t=e.a;return"font-size-"+k(t);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var l=e.a;return"grid-rows-"+(a(ee,"-",a(O,qr,l.hF))+("-cols-"+(a(ee,"-",a(O,qr,l.ak))+("-space-x-"+(qr(l.hT.a)+("-space-y-"+qr(l.hT.b)))))));case 9:var c=e.a;return"gp grid-pos-"+(k(c.af)+("-"+(k(c.ga)+("-"+(k(c.iq)+("-"+k(c.gI)))))));case 11:var $=e.a,m=e.b,r=function(){switch($){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ee," ",a(O,function(s){var p=pt(s);if(p==="")return"";var g=p;return g+("-"+r)},m));default:var o=e.a;return a(Ce,"",ml(o))}},Yg=v(function(e,r){var n=r;return b(ba,e,0,n)}),Xg=v(function(e,r){var n=a(si,e,r);return!n.$}),Zg=v(function(e,r){var n=r;return a(Xg,e,n)}),M$=v(function(e,r){var n=r.a,t=r.b,i=pt(e);return a(Zg,i,n)?r:L(a(Yg,i,n),a(M,e,t))}),re=v(function(e,r){return{$:0,a:e,b:r}}),gt=v(function(e,r){return{$:0,a:e,b:r}}),z=function(e){return"."+e},Qg=T(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(M,i,n)}),Ln=v(function(e,r){return b(Ge,Qg(e),A,r)}),wa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Le(r*255))+(","+k(Le(n*255))+(","+k(Le(t*255))+(","+(ae(i)+")")))))},sl=function(e){return a(ee," ",a(Ln,Ir,u([e.ej?N("inset"):j,N(ae(e.eV.a)+"px"),N(ae(e.eV.b)+"px"),N(ae(e.a2)+"px"),N(ae(e.bi)+"px"),N(wa(e.b6))])))},T$=function(e){return u([a(gt,z(d.ea)+":focus-within",a(Ln,Ir,u([a(Ee,function(r){return a(re,"border-color",wa(r))},e.fW),a(Ee,function(r){return a(re,"background-color",wa(r))},e.fO),a(Ee,function(r){return a(re,"box-shadow",sl({a2:r.a2,b6:r.b6,ej:!1,eV:a(cl,ot,a(fi,ot,r.eV)),bi:r.bi}))},e.hL),N(a(re,"outline","none"))]))),a(gt,z(d.fK)+":focus .focusable, "+(z(d.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(z(d.fK)+" .focusable-thumb"))),a(Ln,Ir,u([a(Ee,function(r){return a(re,"border-color",wa(r))},e.fW),a(Ee,function(r){return a(re,"background-color",wa(r))},e.fO),a(Ee,function(r){return a(re,"box-shadow",sl({a2:r.a2,b6:r.b6,ej:!1,eV:a(cl,ot,a(fi,ot,r.eV)),bi:r.bi}))},e.hL),N(a(re,"outline","none"))])))])},Jr=function(e){return Wr(lu(e))},k$=v(function(e,r){return a(Io,Od(e),cu(r))}),dl=v(function(e,r){return{$:2,a:e,b:r}}),pl=function(e){return{$:6,a:e}},R=v(function(e,r){return{$:1,a:e,b:r}}),gr=v(function(e,r){return{$:0,a:e,b:r}}),I=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),Kg=v(function(e,r){return{$:3,a:e,b:r}}),D$=u([0,1,2,3,4,5]),eh=v(function(e,r){return r.b?b(Ge,M,r,e):e}),ir=function(e){return b(Ge,eh,A,e)},ya=v(function(e,r){return ir(a(O,e,r))}),rh=function(e){switch(e){case 0:return z(d.gc);case 1:return z(d.b9);case 2:return z(d.cb);case 3:return z(d.bt);case 4:return z(d.ca);default:return z(d.ax)}},_i=function(e){switch(e){case 0:return z(d.fH);case 1:return z(d.fA);case 2:return z(d.dY);case 3:return z(d.dX);case 4:return z(d.fB);default:return z(d.fC)}},ht=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return u([a(I,rh(n),i),a(R,z(d.fK),u([a(I,_i(n),o)]))])};return pl(a(ya,r,D$))},A$=u([a(h,"display","flex"),a(h,"flex-direction","column"),a(h,"white-space","pre"),a(I,z(d.cY),u([a(h,"z-index","0"),a(R,z(d.fQ),u([a(h,"z-index","-1")]))])),a(I,z(d.hK),u([a(R,z(d.Y),u([a(I,z(d.c_),u([a(h,"flex-grow","0")])),a(I,z(d.dO),u([a(h,"align-self","auto !important")]))]))])),a(R,z(d.cZ),u([a(h,"height","auto")])),a(R,z(d.c_),u([a(h,"flex-grow","100000")])),a(R,z(d.dO),u([a(h,"width","100%")])),a(R,z(d.fv),u([a(h,"width","100%")])),a(R,z(d.dN),u([a(h,"align-self","flex-start")])),ht(function(e){switch(e){case 0:return L(u([a(h,"justify-content","flex-start")]),u([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]));case 1:return L(u([a(h,"justify-content","flex-end")]),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]));case 2:return L(u([a(h,"align-items","flex-end")]),u([a(h,"align-self","flex-end")]));case 3:return L(u([a(h,"align-items","flex-start")]),u([a(h,"align-self","flex-start")]));case 4:return L(u([a(h,"align-items","center")]),u([a(h,"align-self","center")]));default:return L(u([a(R,z(d.fK),u([a(h,"margin-top","auto"),a(h,"margin-bottom","auto")]))]),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))}})]),nh=function(e){var r=function(n){return u([a(R,z(d.fK),u([a(I,_i(n),e(n))]))])};return pl(a(ya,r,D$))},ah=function(){return u([0,1,2,3,4,5])}(),th=u([a(gr,"html,body",u([a(h,"height","100%"),a(h,"padding","0"),a(h,"margin","0")])),a(gr,U(z(d.fK),U(z(d.hP),z(d.gO))),u([a(h,"display","block"),a(I,z(d.c_),u([a(R,"img",u([a(h,"max-height","100%"),a(h,"object-fit","cover")]))])),a(I,z(d.dO),u([a(R,"img",u([a(h,"max-width","100%"),a(h,"object-fit","cover")]))]))])),a(gr,z(d.fK)+":focus",u([a(h,"outline","none")])),a(gr,z(d.hD),u([a(h,"width","100%"),a(h,"height","auto"),a(h,"min-height","100%"),a(h,"z-index","0"),a(I,U(z(d.fK),z(d.c_)),u([a(h,"height","100%"),a(R,z(d.c_),u([a(h,"height","100%")]))])),a(R,z(d.gQ),u([a(I,z(d.be),u([a(h,"position","fixed"),a(h,"z-index","20")]))]))])),a(gr,z(d.be),u([a(h,"position","relative"),a(h,"border","none"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(I,z(d.hP),A$),pl(function(e){return a(O,e,ah)}(function(e){switch(e){case 0:return a(I,z(d.fy),u([a(h,"position","absolute"),a(h,"bottom","100%"),a(h,"left","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(R,z(d.c_),u([a(h,"height","auto")])),a(R,z(d.dO),u([a(h,"width","100%")])),a(h,"pointer-events","none"),a(R,"*",u([a(h,"pointer-events","auto")]))]));case 1:return a(I,z(d.fR),u([a(h,"position","absolute"),a(h,"bottom","0"),a(h,"left","0"),a(h,"height","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(R,"*",u([a(h,"pointer-events","auto")])),a(R,z(d.c_),u([a(h,"height","auto")]))]));case 2:return a(I,z(d.hi),u([a(h,"position","absolute"),a(h,"left","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(R,"*",u([a(h,"pointer-events","auto")]))]));case 3:return a(I,z(d.hh),u([a(h,"position","absolute"),a(h,"right","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(R,"*",u([a(h,"pointer-events","auto")]))]));case 4:return a(I,z(d.gQ),u([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(R,"*",u([a(h,"pointer-events","auto")]))]));default:return a(I,z(d.fQ),u([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"z-index","0"),a(h,"pointer-events","none"),a(R,"*",u([a(h,"pointer-events","auto")]))]))}}))])),a(gr,z(d.fK),u([a(h,"position","relative"),a(h,"border","none"),a(h,"flex-shrink","0"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(h,"resize","none"),a(h,"font-feature-settings","inherit"),a(h,"box-sizing","border-box"),a(h,"margin","0"),a(h,"padding","0"),a(h,"border-width","0"),a(h,"border-style","solid"),a(h,"font-size","inherit"),a(h,"color","inherit"),a(h,"font-family","inherit"),a(h,"line-height","1"),a(h,"font-weight","inherit"),a(h,"text-decoration","none"),a(h,"font-style","inherit"),a(I,z(d.dQ),u([a(h,"flex-wrap","wrap")])),a(I,z(d.eU),u([a(h,"-moz-user-select","none"),a(h,"-webkit-user-select","none"),a(h,"-ms-user-select","none"),a(h,"user-select","none")])),a(I,z(d.gg),u([a(h,"cursor","pointer")])),a(I,z(d.gh),u([a(h,"cursor","text")])),a(I,z(d.ho),u([a(h,"pointer-events","none !important")])),a(I,z(d.b4),u([a(h,"pointer-events","auto !important")])),a(I,z(d.a$),u([a(h,"opacity","0")])),a(I,z(d.aU),u([a(h,"opacity","1")])),a(I,z(U(d.gL,d.a$))+":hover",u([a(h,"opacity","0")])),a(I,z(U(d.gL,d.aU))+":hover",u([a(h,"opacity","1")])),a(I,z(U(d.gy,d.a$))+":focus",u([a(h,"opacity","0")])),a(I,z(U(d.gy,d.aU))+":focus",u([a(h,"opacity","1")])),a(I,z(U(d.cK,d.a$))+":active",u([a(h,"opacity","0")])),a(I,z(U(d.cK,d.aU))+":active",u([a(h,"opacity","1")])),a(I,z(d.fj),u([a(h,"transition",a(ee,", ",a(O,function(e){return e+" 160ms"},u(["transform","opacity","filter","background-color","color","font-size"]))))])),a(I,z(d.hH),u([a(h,"overflow","auto"),a(h,"flex-shrink","1")])),a(I,z(d.hI),u([a(h,"overflow-x","auto"),a(I,z(d.af),u([a(h,"flex-shrink","1")]))])),a(I,z(d.hJ),u([a(h,"overflow-y","auto"),a(I,z(d.aw),u([a(h,"flex-shrink","1")])),a(I,z(d.hP),u([a(h,"flex-shrink","1")]))])),a(I,z(d.f7),u([a(h,"overflow","hidden")])),a(I,z(d.f8),u([a(h,"overflow-x","hidden")])),a(I,z(d.f9),u([a(h,"overflow-y","hidden")])),a(I,z(d.dN),u([a(h,"width","auto")])),a(I,z(d.b1),u([a(h,"border-width","0")])),a(I,z(d.fX),u([a(h,"border-style","dashed")])),a(I,z(d.fY),u([a(h,"border-style","dotted")])),a(I,z(d.fZ),u([a(h,"border-style","solid")])),a(I,z(d.Y),u([a(h,"white-space","pre"),a(h,"display","inline-block")])),a(I,z(d.gY),u([a(h,"line-height","1.05"),a(h,"background","transparent"),a(h,"text-align","inherit")])),a(I,z(d.hP),A$),a(I,z(d.af),u([a(h,"display","flex"),a(h,"flex-direction","row"),a(R,z(d.fK),u([a(h,"flex-basis","0%"),a(I,z(d.fu),u([a(h,"flex-basis","auto")])),a(I,z(d.et),u([a(h,"flex-basis","auto")]))])),a(R,z(d.c_),u([a(h,"align-self","stretch !important")])),a(R,z(d.ef),u([a(h,"align-self","stretch !important")])),a(R,z(d.dO),u([a(h,"flex-grow","100000")])),a(R,z(d.b8),u([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"align-self","stretch")])),a(R,"u:first-of-type."+d.fG,u([a(h,"flex-grow","1")])),a(R,"s:first-of-type."+d.fE,u([a(h,"flex-grow","1"),a(R,z(d.fB),u([a(h,"margin-left","auto !important")]))])),a(R,"s:last-of-type."+d.fE,u([a(h,"flex-grow","1"),a(R,z(d.fB),u([a(h,"margin-right","auto !important")]))])),a(R,"s:only-of-type."+d.fE,u([a(h,"flex-grow","1"),a(R,z(d.fC),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(R,"s:last-of-type."+(d.fE+" ~ u"),u([a(h,"flex-grow","0")])),a(R,"u:first-of-type."+(d.fG+(" ~ s."+d.fE)),u([a(h,"flex-grow","0")])),ht(function(e){switch(e){case 0:return L(u([a(h,"align-items","flex-start")]),u([a(h,"align-self","flex-start")]));case 1:return L(u([a(h,"align-items","flex-end")]),u([a(h,"align-self","flex-end")]));case 2:return L(u([a(h,"justify-content","flex-end")]),A);case 3:return L(u([a(h,"justify-content","flex-start")]),A);case 4:return L(u([a(h,"justify-content","center")]),A);default:return L(u([a(h,"align-items","center")]),u([a(h,"align-self","center")]))}}),a(I,z(d.hS),u([a(h,"justify-content","space-between")])),a(I,z(d.ci),u([a(h,"align-items","baseline")]))])),a(I,z(d.aw),u([a(h,"display","flex"),a(h,"flex-direction","column"),a(R,z(d.fK),u([a(h,"flex-basis","0px"),a(h,"min-height","min-content"),a(I,z(d.ee),u([a(h,"flex-basis","auto")]))])),a(R,z(d.c_),u([a(h,"flex-grow","100000")])),a(R,z(d.dO),u([a(h,"width","100%")])),a(R,z(d.fv),u([a(h,"width","100%")])),a(R,z(d.dN),u([a(h,"align-self","flex-start")])),a(R,"u:first-of-type."+d.fD,u([a(h,"flex-grow","1")])),a(R,"s:first-of-type."+d.fF,u([a(h,"flex-grow","1"),a(R,z(d.fC),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]))])),a(R,"s:last-of-type."+d.fF,u([a(h,"flex-grow","1"),a(R,z(d.fC),u([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]))])),a(R,"s:only-of-type."+d.fF,u([a(h,"flex-grow","1"),a(R,z(d.fC),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(R,"s:last-of-type."+(d.fF+" ~ u"),u([a(h,"flex-grow","0")])),a(R,"u:first-of-type."+(d.fD+(" ~ s."+d.fF)),u([a(h,"flex-grow","0")])),ht(function(e){switch(e){case 0:return L(u([a(h,"justify-content","flex-start")]),u([a(h,"margin-bottom","auto")]));case 1:return L(u([a(h,"justify-content","flex-end")]),u([a(h,"margin-top","auto")]));case 2:return L(u([a(h,"align-items","flex-end")]),u([a(h,"align-self","flex-end")]));case 3:return L(u([a(h,"align-items","flex-start")]),u([a(h,"align-self","flex-start")]));case 4:return L(u([a(h,"align-items","center")]),u([a(h,"align-self","center")]));default:return L(u([a(h,"justify-content","center")]),A)}}),a(R,z(d.b8),u([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"width","100%"),a(h,"align-self","stretch !important")])),a(I,z(d.hS),u([a(h,"justify-content","space-between")]))])),a(I,z(d.gD),u([a(h,"display","-ms-grid"),a(R,".gp",u([a(R,z(d.fK),u([a(h,"width","100%")]))])),a(Kg,L("display","grid"),u([L("display","grid")])),nh(function(e){switch(e){case 0:return u([a(h,"justify-content","flex-start")]);case 1:return u([a(h,"justify-content","flex-end")]);case 2:return u([a(h,"align-items","flex-end")]);case 3:return u([a(h,"align-items","flex-start")]);case 4:return u([a(h,"align-items","center")]);default:return u([a(h,"justify-content","center")])}})])),a(I,z(d.eY),u([a(h,"display","block"),a(R,z(d.fK+":first-child"),u([a(h,"margin","0 !important")])),a(R,z(d.fK+(_i(3)+(":first-child + ."+d.fK))),u([a(h,"margin","0 !important")])),a(R,z(d.fK+(_i(2)+(":first-child + ."+d.fK))),u([a(h,"margin","0 !important")])),ht(function(e){switch(e){case 0:return L(A,A);case 1:return L(A,A);case 2:return L(A,u([a(h,"float","right"),a(I,"::after",u([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 3:return L(A,u([a(h,"float","left"),a(I,"::after",u([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 4:return L(A,A);default:return L(A,A)}})])),a(I,z(d.gU),u([a(h,"white-space","pre-wrap !important"),a(h,"height","100%"),a(h,"width","100%"),a(h,"background-color","transparent")])),a(I,z(d.gX),u([a(I,z(d.hP),u([a(h,"flex-basis","auto")]))])),a(I,z(d.gW),u([a(h,"white-space","pre-wrap !important"),a(h,"cursor","text"),a(R,z(d.gV),u([a(h,"white-space","pre-wrap !important"),a(h,"color","transparent")]))])),a(I,z(d.eZ),u([a(h,"display","block"),a(h,"white-space","normal"),a(h,"overflow-wrap","break-word"),a(I,z(d.cY),u([a(h,"z-index","0"),a(R,z(d.fQ),u([a(h,"z-index","-1")]))])),a(dl,z(d.Y),u([a(h,"display","inline"),a(h,"white-space","normal")])),a(dl,z(d.eZ),u([a(h,"display","inline"),a(I,"::after",u([a(h,"content","none")])),a(I,"::before",u([a(h,"content","none")]))])),a(dl,z(d.hP),u([a(h,"display","inline"),a(h,"white-space","normal"),a(I,z(d.fu),u([a(h,"display","inline-block")])),a(I,z(d.gQ),u([a(h,"display","flex")])),a(I,z(d.fQ),u([a(h,"display","flex")])),a(I,z(d.fy),u([a(h,"display","flex")])),a(I,z(d.fR),u([a(h,"display","flex")])),a(I,z(d.hi),u([a(h,"display","flex")])),a(I,z(d.hh),u([a(h,"display","flex")])),a(R,z(d.Y),u([a(h,"display","inline"),a(h,"white-space","normal")]))])),a(R,z(d.af),u([a(h,"display","inline")])),a(R,z(d.aw),u([a(h,"display","inline-flex")])),a(R,z(d.gD),u([a(h,"display","inline-grid")])),ht(function(e){switch(e){case 0:return L(A,A);case 1:return L(A,A);case 2:return L(A,u([a(h,"float","right")]));case 3:return L(A,u([a(h,"float","left")]));case 4:return L(A,A);default:return L(A,A)}})])),a(I,".hidden",u([a(h,"display","none")])),a(I,z(d.ie),u([a(h,"font-weight","100")])),a(I,z(d.h5),u([a(h,"font-weight","200")])),a(I,z(d.h9),u([a(h,"font-weight","300")])),a(I,z(d.ib),u([a(h,"font-weight","400")])),a(I,z(d.ia),u([a(h,"font-weight","500")])),a(I,z(d.id),u([a(h,"font-weight","600")])),a(I,z(d.fV),u([a(h,"font-weight","700")])),a(I,z(d.h4),u([a(h,"font-weight","800")])),a(I,z(d.h6),u([a(h,"font-weight","900")])),a(I,z(d.g3),u([a(h,"font-style","italic")])),a(I,z(d.hY),u([a(h,"text-decoration","line-through")])),a(I,z(d.il),u([a(h,"text-decoration","underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(I,U(z(d.il),z(d.hY)),u([a(h,"text-decoration","line-through underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(I,z(d.$8),u([a(h,"font-style","normal")])),a(I,z(d.h7),u([a(h,"text-align","justify")])),a(I,z(d.cE),u([a(h,"text-align","justify-all")])),a(I,z(d.h3),u([a(h,"text-align","center")])),a(I,z(d.ic),u([a(h,"text-align","right")])),a(I,z(d.h8),u([a(h,"text-align","left")])),a(I,".modal",u([a(h,"position","fixed"),a(h,"left","0"),a(h,"top","0"),a(h,"width","100%"),a(h,"height","100%"),a(h,"pointer-events","none")]))]))]),Pn=function(e){return u([a(gr,".v-"+e,u([a(h,"font-feature-settings",'"'+(e+'"'))])),a(gr,".v-"+(e+"-off"),u([a(h,"font-feature-settings",'"'+(e+'" 0'))]))])},ih=ir(u([a(O,function(e){return a(gr,".border-"+k(e),u([a(h,"border-width",k(e)+"px")]))},a(Hr,0,6)),a(O,function(e){return a(gr,".font-size-"+k(e),u([a(h,"font-size",k(e)+"px")]))},a(Hr,8,32)),a(O,function(e){return a(gr,".p-"+k(e),u([a(h,"padding",k(e)+"px")]))},a(Hr,0,24)),u([a(gr,".v-smcp",u([a(h,"font-variant","small-caps")])),a(gr,".v-smcp-off",u([a(h,"font-variant","normal")]))]),Pn("zero"),Pn("onum"),Pn("liga"),Pn("dlig"),Pn("ordn"),Pn("tnum"),Pn("afrc"),Pn("frac")])),oh=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(d.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(d.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),lh=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,ch=`
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
`,uh=`
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
`,$h=`
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
`,vh="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(z(d.fK)+(z(d.af)+(" > "+(z(d.fK)+(" { flex-basis: auto !important; } "+(z(d.fK)+(z(d.af)+(" > "+(z(d.fK)+(z(d.b8)+(" { flex-basis: auto !important; }}"+(lh+(ch+($h+(uh+oh))))))))))))))),xa=function(e){return a(ee,"",e)},Sa=v(function(e,r){return{b5:r,G:A,aE:A,ag:e}}),Ca=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return De(o,{aE:a(M,L(l,c),o.aE)});case 3:var $=i.a,m=$.a,s=$.b,p=i.b;return De(o,{G:a(M,{b5:`
}`,G:A,aE:p,ag:"@supports ("+(m+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return De(o,{G:a(M,a(Ca,a(Sa,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,w=i.b;return De(o,{G:a(M,a(Ca,a(Sa,n.ag+(" > "+_),""),w),o.G)});case 2:var _=i.a,w=i.b;return De(o,{G:a(M,a(Ca,a(Sa,n.ag+(" "+_),""),w),o.G)});case 4:var x=i.a,S=i.b;return De(o,{G:a(M,a(Ca,a(Sa,U(n.ag,x),""),S),o.G)});default:var y=i.a;return De(o,{G:a(M,a(Ca,a(Sa,n.ag,""),y),o.G)})}});return b(Ge,t,n,r)}),fh=function(e){var r=function(i){return xa(a(O,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return U(n(o),xa(a(O,t,o.G)))};return xa(a(O,t,b(Ge,v(function(i,o){var l=i.a,c=i.b;return a(M,a(Ca,a(Sa,l,""),c),o)}),A,e)))},F$=U(vh,fh(U(th,ih))),Mn=Fo,I$=function(e){var r=e.eS;switch(r){case 0:return b(Jr,"div",A,u([b(Jr,"style",A,u([Mn(F$)]))]));case 1:return Mn("");default:return b(Jr,"elm-ui-static-rules",u([a(k$,"rules",$l(F$))]),A)}},mh=v(function(e,r){return rn(b(Ie,wd(e),hd(),r))}),sh=function(e){return rn(b(Ie,v(function(r,n){var t=r.a,i=r.b;return b(_d,t,i,n)}),bd(),e))},dh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hd;return'"'+(r+'"')}},ph=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},gh=function(e){if(e.$===5){var r=e.a;return a(vt,ph,r.fo)}else return!1},za=v(function(e,r){return ce(e,r)<0?e:r}),bt=T(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Pe=q(function(e,r,n,t){if(r.$===1)return u([n+("{"+(b(Ie,bt(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gL;switch(o){case 0:return A;case 2:return u([n+("-hv {"+(b(Ie,bt(!0),"",t)+`
}`))]);default:return u([n+("-hv:hover {"+(b(Ie,bt(!1),"",t)+`
}`))])}case 0:var l=b(Ie,bt(!1),"",t);return u([n+("-fs:focus {"+(l+`
}`)),"."+(d.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(z(d.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return u([n+("-act:active {"+(b(Ie,bt(!1),"",t)+`
}`))])}}),hh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},bh=function(e){if(e.$===5){var r=e.a;return N(a(ee,", ",a(O,hh,r.fo)))}else return j},_h=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return N("translate3d("+(ae(n)+("px, "+(ae(t)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,$=o.c,m=e.b,s=m.a,p=m.b,g=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d,y="translate3d("+(ae(l)+("px, "+(ae(c)+("px, "+(ae($)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(p)+(", "+(ae(g)+")"))))),B="rotate3d("+(ae(_)+(", "+(ae(w)+(", "+(ae(x)+(", "+(ae(S)+"rad)")))))));return N(y+(" "+(C+(" "+B))))}},gl=T(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(Pe,e,n,t,i);case 13:var o=r.a,l=r.b;return P(Pe,e,n,"."+o,u([a(re,"box-shadow",l)]));case 12:var o=r.a,c=r.b,$=a(wr,0,a(za,1,1-c));return P(Pe,e,n,"."+o,u([a(re,"opacity",ae($))]));case 2:var m=r.a;return P(Pe,e,n,".font-size-"+k(m),u([a(re,"font-size",k(m)+"px")]));case 1:var o=r.a,s=r.b,p=a(ee,", ",a(Ln,bh,s)),g=u([a(re,"font-family",a(ee,", ",a(O,dh,s))),a(re,"font-feature-settings",p),a(re,"font-variant",a(vt,gh,s)?"small-caps":"normal")]);return P(Pe,e,n,"."+o,g);case 3:var f=r.a,l=r.b,_=r.c;return P(Pe,e,n,"."+f,u([a(re,l,_)]));case 4:var f=r.a,l=r.b,w=r.c;return P(Pe,e,n,"."+f,u([a(re,l,wa(w))]));case 5:var x=r.a,S=r.b,y=r.c,C=k(y)+"px",B=k(S)+"px",J="."+d.af,Z="."+(d.dQ+J),H="."+d.dY,Y="."+d.eZ,X="."+d.eY,V="."+d.dX,ne=ae(y/2)+"px",ve=ae(S/2)+"px",we="."+d.aw,f="."+x,fe="."+d.fK;return ir(u([P(Pe,e,n,f+(J+(" > "+(fe+(" + "+fe)))),u([a(re,"margin-left",B)])),P(Pe,e,n,f+(Z+(" > "+fe)),u([a(re,"margin",ne+(" "+ve))])),P(Pe,e,n,f+(we+(" > "+(fe+(" + "+fe)))),u([a(re,"margin-top",C)])),P(Pe,e,n,f+(X+(" > "+(fe+(" + "+fe)))),u([a(re,"margin-top",C)])),P(Pe,e,n,f+(X+(" > "+V)),u([a(re,"margin-right",B)])),P(Pe,e,n,f+(X+(" > "+H)),u([a(re,"margin-left",B)])),P(Pe,e,n,U(f,Y),u([a(re,"line-height","calc(1em + "+(k(y)+"px)"))])),P(Pe,e,n,"textarea"+(fe+f),u([a(re,"line-height","calc(1em + "+(k(y)+"px)")),a(re,"height","calc(100% + "+(k(y)+"px)"))])),P(Pe,e,n,f+(Y+(" > "+V)),u([a(re,"margin-right",B)])),P(Pe,e,n,f+(Y+(" > "+H)),u([a(re,"margin-left",B)])),P(Pe,e,n,f+(Y+"::after"),u([a(re,"content","''"),a(re,"display","block"),a(re,"height","0"),a(re,"width","0"),a(re,"margin-top",k(-1*(y/2|0))+"px")])),P(Pe,e,n,f+(Y+"::before"),u([a(re,"content","''"),a(re,"display","block"),a(re,"height","0"),a(re,"width","0"),a(re,"margin-bottom",k(-1*(y/2|0))+"px")]))]));case 7:var x=r.a,me=r.b,H=r.c,xe=r.d,V=r.e,f="."+x;return P(Pe,e,n,f,u([a(re,"padding",ae(me)+("px "+(ae(H)+("px "+(ae(xe)+("px "+(ae(V)+"px")))))))]));case 6:var x=r.a,me=r.b,H=r.c,xe=r.d,V=r.e,f="."+x;return P(Pe,e,n,f,u([a(re,"border-width",k(me)+("px "+(k(H)+("px "+(k(xe)+("px "+(k(V)+"px")))))))]));case 8:var se=r.a,Fe=T(function(He,Za,en){e:for(;;)switch(en.$){case 0:var ss=en.a;return k(ss)+"px";case 1:var Tr=L(He,Za);if(Tr.a.$===1){if(Tr.b.$===1)return Tr.a,Tr.b,"max-content";Tr.a;var Hn=Tr.b.a;return"minmax(max-content, "+(k(Hn)+"px)")}else if(Tr.b.$===1){var Gn=Tr.a.a;return Tr.b,"minmax("+(k(Gn)+"px, max-content)")}else{var Gn=Tr.a.a,Hn=Tr.b.a;return"minmax("+(k(Gn)+("px, "+(k(Hn)+"px)")))}case 2:var qc=en.a,kr=L(He,Za);if(kr.a.$===1){if(kr.b.$===1)return kr.a,kr.b,k(qc)+"fr";kr.a;var Hn=kr.b.a;return"minmax(max-content, "+(k(Hn)+"px)")}else if(kr.b.$===1){var Gn=kr.a.a;return kr.b,"minmax("+(k(Gn)+("px, "+(k(qc)+"frfr)")))}else{var Gn=kr.a.a,Hn=kr.b.a;return"minmax("+(k(Gn)+("px, "+(k(Hn)+"px)")))}case 3:var ho=en.a,bo=en.b,_o=N(ho),wo=Za,yo=bo;He=_o,Za=wo,en=yo;continue e;default:var ho=en.a,bo=en.b,_o=He,wo=N(ho),yo=bo;He=_o,Za=wo,en=yo;continue e}}),ke=function(He){return b(Fe,j,j,He)};ke(se.hT.a);var Xe=ke(se.hT.b),Wn=function(He){return"grid-template-rows: "+(He+";")}(a(ee," ",a(O,ke,se.hF))),Ya=function(He){return"-ms-grid-rows: "+(He+";")}(a(ee,Xe,a(O,ke,se.ak))),Qr=function(He){return"-ms-grid-columns: "+(He+";")}(a(ee,Xe,a(O,ke,se.ak))),Kr="grid-row-gap:"+(ke(se.hT.b)+";"),fa="grid-column-gap:"+(ke(se.hT.a)+";"),Yt=function(He){return"grid-template-columns: "+(He+";")}(a(ee," ",a(O,ke,se.ak))),f=".grid-rows-"+(a(ee,"-",a(O,qr,se.hF))+("-cols-"+(a(ee,"-",a(O,qr,se.ak))+("-space-x-"+(qr(se.hT.a)+("-space-y-"+qr(se.hT.b))))))),Xa=f+("{"+(Yt+(Wn+(fa+(Kr+"}"))))),po="@supports (display:grid) {"+(Xa+"}"),go=f+("{"+(Qr+(Ya+"}")));return u([go,po]);case 9:var rr=r.a,us=a(ee," ",u(["-ms-grid-row: "+(k(rr.af)+";"),"-ms-grid-row-span: "+(k(rr.gI)+";"),"-ms-grid-column: "+(k(rr.ga)+";"),"-ms-grid-column-span: "+(k(rr.iq)+";")])),$s=a(ee," ",u(["grid-row: "+(k(rr.af)+(" / "+(k(rr.af+rr.gI)+";"))),"grid-column: "+(k(rr.ga)+(" / "+(k(rr.ga+rr.iq)+";")))])),f=".grid-pos-"+(k(rr.af)+("-"+(k(rr.ga)+("-"+(k(rr.iq)+("-"+k(rr.gI))))))),Xa=f+("{"+($s+"}")),po="@supports (display:grid) {"+(Xa+"}"),go=f+("{"+(us+"}"));return u([go,po]);case 11:var f=r.a,vs=r.b,fs=function(He){return b(gl,e,He,N(f))};return a(ya,fs,vs);default:var Vr=r.a,_=_h(Vr),f=ml(Vr),Xt=L(f,_);if(!Xt.a.$&&!Xt.b.$){var x=Xt.a.a,ms=Xt.b.a;return P(Pe,e,n,"."+x,u([a(re,"transform",ms)]))}else return A}}),wh=v(function(e,r){return sh(a(O,function(n){var t=b(gl,e,n,j);return L(pt(n),a(mh,$l,t))},r))}),wi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ee,"",a(O,n,r))+"}"))}),B$=T(function(e,r,n){var t=n.a,i=n.b;return u([a(wi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(wi,"."+(e+("."+(r+("> ."+(d.Y+(", ."+(e+(" ."+(r+(" > ."+d.Y)))))))))),i)])}),yh=T(function(e,r,n){var t=r.a,i=r.b,o=le(e,n)?e:n+(" ."+e);return a(ee," ",U(b(B$,o,d.hQ,i),b(B$,o,d.gz,t)))}),xh=v(function(e,r){var n=le(e,r)?e:r+(" ."+e);return a(ee," ",u([a(wi,"."+(n+("."+(d.hQ+(", "+("."+(n+(" ."+d.hQ))))))),u([L("line-height","1")])),a(wi,"."+(n+("."+(d.hQ+("> ."+(d.Y+(", ."+(n+(" ."+(d.hQ+(" > ."+d.Y)))))))))),u([L("vertical-align","0"),L("line-height","1")]))]))}),E$=T(function(e,r,n){return{gI:r/e,bi:e,fp:n}}),V$=v(function(e,r){return b(Ge,v(function(n,t){return e(n)?a(M,n,t):t}),A,r)}),Sh=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ie,wr,r,n))}else return j},R$=function(e){if(e.b){var r=e.a,n=e.b;return N(b(Ie,za,r,n))}else return j},j$=function(e){var r=u([e.f1,e.fP,e.gl,e.g8]),n=a(Ce,e.gl,R$(r)),t=a(Ce,e.fP,R$(a(V$,function(m){return!le(m,n)},r))),i=a(Ce,e.f1,Sh(r)),o=1/(i-t),l=1-i,c=1/(i-n),$=1-i;return{f1:b(E$,o,i-t,l),ec:b(E$,c,i-n,$)}},U$=function(e){return L(u([L("display","block")]),u([L("display","inline-block"),L("line-height",ae(e.gI)),L("vertical-align",ae(e.fp)+"em"),L("font-size",ae(e.bi)+"em")]))},Ch=function(e){return b(Ie,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return N(L(U$(function(l){return l.ec}(j$(o))),U$(function(l){return l.f1}(j$(o)))))}else return n;else return n}),j,e)},zh=function(e){var r=function(o){if(o.$===4){var l=o.b;return N("@import url('"+(l+"');"))}else return j},n=function(o){o.a;var l=o.b,c=a(ee,`
`,a(Ln,r,l));return c},t=a(O,Ou,e),i=function(o){var l=o.a,c=o.b,$=Ch(c);if($.$===1)return a(ee,"",a(O,xh(l),t));var m=$.a;return a(ee,"",a(O,a(yh,l,m),t))};return U(a(ee,`
`,a(O,n,e)),a(ee,`
`,a(O,i,e)))},Lh=function(e){if(e.$===1){var r=e.a,n=e.b;return N(L(r,n))}else return j},N$=v(function(e,r){var n=v(function(l,c){return{cA:U(c.cA,b(gl,e,l,j)),bT:function(){var $=Lh(l);if($.$===1)return c.bT;var m=$.a;return a(M,m,c.bT)}()}}),t=b(Ie,n,{cA:A,bT:A},r),i=t.bT,o=t.cA;return U(zh(i),xa(o))}),W$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Jr,"div",A,u([b(Jr,"style",A,u([Mn(a(N$,e,r))]))]));case 1:return b(Jr,"div",A,u([b(Jr,"style",A,u([Mn(a(N$,e,r))]))]));default:return b(Jr,"elm-ui-rules",u([a(k$,"rules",a(wh,e,r))]),A)}}),H$=q(function(e,r,n,t){var i=a(W$,r,b(Ie,M$,L(P$,T$(r.gy)),n).b);return e?a(M,L("static-stylesheet",I$(r)),a(M,L("dynamic-stylesheet",i),t)):a(M,L("dynamic-stylesheet",i),t)}),G$=q(function(e,r,n,t){var i=a(W$,r,b(Ie,M$,L(P$,T$(r.gy)),n).b);return e?a(M,I$(r),a(M,i,t)):a(M,i,t)}),hl=ue(45),_t=ue(37),O$=function(e){return jd(lu(e))},q$=Wr("p"),or=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return le(o&t,o)}else{var i=e.a;return le(i&n,i)}}),J$=Wr("s"),Y$=Wr("u"),bl=ue(44),wt=ue(39),yi=mr(function(e,r,n,t,i,o){var l=v(function($,m){if(t.$===1){var s=t.a;return b(O$,$,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return P(H$,!1,g,f,s);default:var g=i.a,f=i.b;return P(H$,!0,g,f,s)}}())}else{var p=t.a;return a(function(){switch($){case"div":return tr;case"p":return q$;default:return Jr($)}}(),m,function(){switch(i.$){case 0:return p;case 2:var g=i.a,f=i.b;return P(G$,!1,g,f,p);default:var g=i.a,f=i.b;return P(G$,!0,g,f,p)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var $=r.a;return a(l,$,n);default:var $=r.a,m=r.b;return b(Jr,$,n,u([a(l,m,u([Sr(d.fK+(" "+d.hP))]))]))}}();switch(o){case 0:return a(or,wt,e)&&!a(or,bl,e)?c:a(or,C$,e)?a(Y$,u([Sr(a(ee," ",u([d.fK,d.hP,d.b8,d.ax,d.fG])))]),u([c])):a(or,z$,e)?a(J$,u([Sr(a(ee," ",u([d.fK,d.hP,d.b8,d.ax,d.fE])))]),u([c])):c;case 1:return a(or,_t,e)&&!a(or,hl,e)?c:a(or,L$,e)?a(J$,u([Sr(a(ee," ",u([d.fK,d.hP,d.b8,d.fF])))]),u([c])):a(or,S$,e)?a(Y$,u([Sr(a(ee," ",u([d.fK,d.hP,d.b8,d.fD])))]),u([c])):c;default:return c}}),Tn=function(e){return!e.b},on=Mn,Ph=d.fK+(" "+(d.Y+(" "+(d.dN+(" "+d.cZ))))),yt=function(e){return a(tr,u([Sr(Ph)]),u([on(e)]))},Mh=d.fK+(" "+(d.Y+(" "+(d.dO+(" "+d.c_))))),X$=function(e){return a(tr,u([Sr(Mh)]),u([on(e)]))},Th=T(function(e,r,n){var t=v(function(_,w){var x=_.a,S=_.b,y=w.a,C=w.b;switch(S.$){case 0:var B=S.a;return le(e,bi),L(a(M,L(x,B(e)),y),C);case 1:var J=S.a;return le(e,bi),L(a(M,L(x,a(J.gM,Qn,e)),y),Tn(C)?J.hZ:U(J.hZ,C));case 2:var Z=S.a;return L(a(M,L(x,le(e,pr)?X$(Z):yt(Z)),y),C);default:return L(y,C)}}),i=v(function(_,w){var x=w.a,S=w.b;switch(_.$){case 0:var y=_.a;return le(e,bi),L(a(M,y(e),x),S);case 1:var C=_.a;return le(e,bi),L(a(M,a(C.gM,Qn,e),x),Tn(S)?C.hZ:U(C.hZ,S));case 2:var B=_.a;return L(a(M,le(e,pr)?X$(B):yt(B),x),S);default:return L(x,S)}});if(r.$===1){var o=r.a,l=b(Ge,t,L(A,A),o),c=l.a,$=l.b,m=Tn($)?n.hZ:U(n.hZ,$);if(m.b){var s=m;return vl({gM:P(yi,n.aR,n.aT,n.aJ,w$(b(x$,"nearby-element-pls",c,n.aM))),hZ:s})}else return st(F(yi,n.aR,n.aT,n.aJ,w$(b(x$,"nearby-element-pls",c,n.aM)),Qn))}else{var p=r.a,g=b(Ge,i,L(A,A),p),f=g.a,$=g.b,m=Tn($)?n.hZ:U(n.hZ,$);if(m.b){var s=m;return vl({gM:P(yi,n.aR,n.aT,n.aJ,Ye(a(y$,f,n.aM))),hZ:s})}else return st(F(yi,n.aR,n.aT,n.aJ,Ye(a(y$,f,n.aM)),Qn))}}),lr=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kh=function(e){return{$:10,a:e}},xi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(xi,n,o|t)}else{var i=e.a;return a(xi,i|n,t)}}),Z$=function(e){return{$:1,a:e}},Si=v(function(e,r){return{$:3,a:e,b:r}}),Q$=function(e){return{$:2,a:e}},Dh=v(function(e,r){return a(tr,u([Sr(function(){switch(e){case 0:return a(ee," ",u([d.be,d.hP,d.fy]));case 1:return a(ee," ",u([d.be,d.hP,d.fR]));case 2:return a(ee," ",u([d.be,d.hP,d.hi]));case 3:return a(ee," ",u([d.be,d.hP,d.hh]));case 4:return a(ee," ",u([d.be,d.hP,d.gQ]));default:return a(ee," ",u([d.be,d.hP,d.fQ]))}}())]),u([function(){switch(r.$){case 3:return Mn("");case 2:var n=r.a;return yt(n);case 0:var t=r.a;return t(pr);default:var i=r.a;return a(i.gM,Qn,pr)}}()]))}),Ah=T(function(e,r,n){var t=a(Dh,e,r);switch(n.$){case 0:return e===5?Z$(u([t])):Q$(u([t]));case 1:var i=n.a;return e===5?Z$(a(M,t,i)):a(Si,i,u([t]));case 2:var o=n.a;return e===5?a(Si,u([t]),o):Q$(a(M,t,o));default:var i=n.a,o=n.b;return e===5?a(Si,a(M,t,i),o):a(Si,i,a(M,t,o))}}),K$=v(function(e,r){return{$:2,a:e,b:r}}),kn=function(e){return{$:1,a:e}},Kn=v(function(e,r){switch(r.$){case 0:return kn(e);case 1:var n=r.a;return a(K$,n,e);default:var t=r.a,i=r.b;return a(K$,t,i)}}),Fh=function(e){switch(e){case 0:return d.cL+(" "+d.dX);case 2:return d.cL+(" "+d.dY);default:return d.cL+(" "+d.fB)}},Ih=function(e){switch(e){case 0:return d.cM+(" "+d.fH);case 2:return d.cM+(" "+d.fA);default:return d.cM+(" "+d.fC)}},xt=v(function(e,r){return a(Dr,Gd(e),cu(r))}),Yr=q(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),Dn=function(e){return{$:1,a:e}},Bh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Dn(D(i,0,0));case 1:var o=r.a;return Dn(D(0,o,0));case 2:var l=r.a;return Dn(D(0,0,l));case 3:var n=r.a;return Dn(n);case 4:var n=r.a,f=r.b;return P(Yr,D(0,0,0),D(1,1,1),n,f);default:var n=r.a;return P(Yr,D(0,0,0),n,D(0,0,1),0)}case 1:var t=e.a,i=t.a,o=t.b,l=t.c;switch(r.$){case 0:var c=r.a;return Dn(D(c,o,l));case 1:var $=r.a;return Dn(D(i,$,l));case 2:var m=r.a;return Dn(D(i,o,m));case 3:var n=r.a;return Dn(n);case 4:var n=r.a,f=r.b;return P(Yr,t,D(1,1,1),n,f);default:var s=r.a;return P(Yr,t,s,D(0,0,1),0)}default:var t=e.a,i=t.a,o=t.b,l=t.c,p=e.b,g=e.c,f=e.d;switch(r.$){case 0:var c=r.a;return P(Yr,D(c,o,l),p,g,f);case 1:var $=r.a;return P(Yr,D(i,$,l),p,g,f);case 2:var m=r.a;return P(Yr,D(i,o,m),p,g,f);case 3:var _=r.a;return P(Yr,_,p,g,f);case 4:var w=r.a,x=r.b;return P(Yr,t,p,w,x);default:var S=r.a;return P(Yr,t,S,g,f)}}}),La=ue(7),ev=ue(36),rv=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(xi,n|i,t|o)}),ln=a(xi,0,0),_l=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return D(ln,d.ee+(" "+t),u([b(lr,t,"height",n+"px")]));case 1:return D(a(oe,ev,ln),d.cZ,A);case 2:var i=e.a;return i===1?D(a(oe,_t,ln),d.c_,A):D(a(oe,_t,ln),d.ef+(" height-fill-"+k(i)),u([b(lr,d.fK+("."+(d.aw+(" > "+z("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,l=e.b,c="min-height-"+k(o),$=b(lr,c,"min-height",k(o)+"px !important"),m=_l(l),s=m.a,p=m.b,g=m.c;return D(a(oe,hl,s),c+(" "+p),a(M,$,g));default:var f=e.a,l=e.b,c="max-height-"+k(f),$=b(lr,c,"max-height",k(f)+"px"),_=_l(l),s=_.a,p=_.b,g=_.c;return D(a(oe,hl,s),c+(" "+p),a(M,$,g))}},nv=ue(38),wl=function(e){switch(e.$){case 0:var r=e.a;return D(ln,d.fu+(" width-px-"+k(r)),u([b(lr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return D(a(oe,nv,ln),d.dN,A);case 2:var n=e.a;return n===1?D(a(oe,wt,ln),d.dO,A):D(a(oe,wt,ln),d.fv+(" width-fill-"+k(n)),u([b(lr,d.fK+("."+(d.af+(" > "+z("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,i=e.b,o="min-width-"+k(t),l=b(lr,o,"min-width",k(t)+"px"),c=wl(i),$=c.a,m=c.b,s=c.c;return D(a(oe,bl,$),o+(" "+m),a(M,l,s));default:var p=e.a,i=e.b,o="max-width-"+k(p),l=b(lr,o,"max-width",k(p)+"px"),g=wl(i),$=g.a,m=g.b,s=g.c;return D(a(oe,bl,$),o+(" "+m),a(M,l,s))}},Ci=ue(27),Eh=v(function(e,r){if(le(e,Ci))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return le(i,l)&&le(i,o)&&le(i,c)&&i>=0&&i<=24;default:return!1}}),Pa=ue(6),av=ue(30),tv=ue(29),Vh=be(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var s=c.a,p=c.b;switch(s.$){case 0:var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 3:var B=s.a,J=s.b;if(a(or,B,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=J+(" "+e),f=r,_=a(oe,B,n),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 1:var Z=s.a,g=e,f=r,_=n,w=t,x=i,S=a(M,Z,o),y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 4:var B=s.a,H=s.b;if(a(or,B,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else if(a(Eh,B,H)){var g=pt(H)+(" "+e),f=r,_=a(oe,B,n),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=pt(H)+(" "+e),f=r,_=a(oe,B,n),w=t,x=a(M,H,i),S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 10:var B=s.a,Y=s.b,g=e,f=r,_=a(oe,B,n),w=a(Bh,t,Y),x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 7:var X=s.a;if(a(or,Pa,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else switch(X.$){case 0:var V=X.a,g=d.fu+(" width-px-"+k(V))+(" "+e),f=r,_=a(oe,Pa,n),w=t,x=a(M,b(lr,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=e+(" "+d.dN),f=r,_=a(oe,nv,a(oe,Pa,n)),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=X.a;if(ne===1){var g=e+(" "+d.dO),f=r,_=a(oe,wt,a(oe,Pa,n)),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=e+(" "+(d.fv+(" width-fill-"+k(ne)))),f=r,_=a(oe,wt,a(oe,Pa,n)),w=t,x=a(M,b(lr,d.fK+("."+(d.af+(" > "+z("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}default:var ve=wl(X),we=ve.a,fe=ve.b,Kr=ve.c,g=e+(" "+fe),f=r,_=a(rv,we,a(oe,Pa,n)),w=t,x=U(Kr,i),S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 8:var me=s.a;if(a(or,La,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else switch(me.$){case 0:var V=me.a,xe=k(V)+"px",se="height-px-"+xe,g=d.ee+(" "+(se+(" "+e))),f=r,_=a(oe,La,n),w=t,x=a(M,b(lr,se,"height ",xe),i),S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=d.cZ+(" "+e),f=r,_=a(oe,ev,a(oe,La,n)),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=me.a;if(ne===1){var g=d.c_+(" "+e),f=r,_=a(oe,_t,a(oe,La,n)),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=e+(" "+(d.ef+(" height-fill-"+k(ne)))),f=r,_=a(oe,_t,a(oe,La,n)),w=t,x=a(M,b(lr,d.fK+("."+(d.aw+(" > "+z("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}default:var Fe=_l(me),we=Fe.a,fe=Fe.b,Kr=Fe.c,g=e+(" "+fe),f=r,_=a(rv,we,a(oe,La,n)),w=t,x=U(Kr,i),S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 2:var ke=s.a;switch(ke.$){case 0:var g=e,f=a(Kn,"main",r),_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=e,f=a(Kn,"nav",r),_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 2:var g=e,f=a(Kn,"footer",r),_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 3:var g=e,f=a(Kn,"aside",r),_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 4:var Xe=ke.a;if(Xe<=1){var g=e,f=a(Kn,"h1",r),_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else if(Xe<7){var g=e,f=a(Kn,"h"+k(Xe),r),_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=e,f=a(Kn,"h6",r),_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 9:var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 8:var g=e,f=r,_=n,w=t,x=i,S=a(M,a(xt,"role","button"),o),y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 5:var Wn=ke.a,g=e,f=r,_=n,w=t,x=i,S=a(M,a(xt,"aria-label",Wn),o),y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 6:var g=e,f=r,_=n,w=t,x=i,S=a(M,a(xt,"aria-live","polite"),o),y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;default:var g=e,f=r,_=n,w=t,x=i,S=a(M,a(xt,"aria-live","assertive"),o),y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 9:var Ya=s.a,Qr=s.b,Kr=function(){switch(Qr.$){case 3:return i;case 2:return Qr.a,i;case 0:return Qr.a,i;default:var Xa=Qr.a;return U(i,Xa.hZ)}}(),g=e,f=r,_=n,w=t,x=Kr,S=o,y=b(Ah,Ya,Qr,l),C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 6:var fa=s.a;if(a(or,av,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=Fh(fa)+(" "+e),f=r,_=function(Vr){switch(fa){case 1:return a(oe,z$,Vr);case 2:return a(oe,C$,Vr);default:return Vr}}(a(oe,av,n)),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}default:var Yt=s.a;if(a(or,tv,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=Ih(Yt)+(" "+e),f=r,_=function(Vr){switch(Yt){case 1:return a(oe,L$,Vr);case 2:return a(oe,S$,Vr);default:return Vr}}(a(oe,tv,n)),w=t,x=i,S=o,y=l,C=p;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}}}else{var $=ml(t);if($.$===1)return{aJ:a(M,Sr(e),o),aM:l,aR:n,aT:r,hZ:i};var m=$.a;return{aJ:a(M,Sr(e+(" "+m)),o),aM:l,aR:n,aT:r,hZ:a(M,kh(t),i)}}}),Rh={$:0},jh=Rh,cr=q(function(e,r,n,t){return b(Th,e,t,Qa(Vh,Og(e),r,ln,jh,A,A,Rg,nr(n)))}),cn=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Uh={fO:j,fW:j,hL:N({a2:0,b6:P(cn,155/255,203/255,1,1),eV:L(0,0),bi:3})},Nh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gL;return l.$===1?De(i,{gL:N(o)}):i;case 1:var c=t.a,$=i.gy;return $.$===1?De(i,{gy:N(c)}):i;default:var m=t.a,s=i.eS;return s.$===1?De(i,{eS:N(m)}):i}}),n=function(t){return{gy:function(){var i=t.gy;if(i.$===1)return Uh;var o=i.a;return o}(),gL:function(){var i=t.gL;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ge,r,{gy:j,gL:j,eS:j},e))},Wh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(pr);case 1:var t=r.a.hZ,n=r.a.gM;return a(n,e(t),pr);case 2:var i=r.a;return yt(i);default:return yt("")}}),Hh=T(function(e,r,n){var t=Nh(e),i=function(){var o=t.eS;return o===1?_$(t):Eg(t)}();return a(Wh,i,P(cr,pr,Zn,r,Ye(u([n]))))}),St=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),iv=v(function(e,r){return{$:1,a:e,b:r}}),ov=function(e){return{$:2,a:e}},Gh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),yl=function(e){return{$:3,a:e}},lv=ue(8),cv=ue(14),uv=ue(5),$v=ue(4),Ma=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ae(r)+("-"+(Ae(n)+("-"+(Ae(t)+("-"+Ae(i))))))},zi=Xs,xl=Ys,vv=v(function(e,r){return U(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ee,"-",xl(zi(n)));case 4:var n=e.a;return e.b,a(ee,"-",xl(zi(n)));default:var n=e.a.hd;return a(ee,"-",xl(zi(n)))}}())}),Oh=function(){var e=u([yl("Open Sans"),yl("Helvetica"),yl("Verdana"),Gh]);return u([a(ge,lv,b(St,"bg-"+Ma(P(cn,1,1,1,0)),"background-color",P(cn,1,1,1,0))),a(ge,cv,b(St,"fc-"+Ma(P(cn,0,0,0,1)),"color",P(cn,0,0,0,1))),a(ge,$v,ov(20)),a(ge,uv,a(iv,b(Ie,vv,"font-",e),e))])}(),qh=T(function(e,r,n){var t=e.hm;return b(Hh,t,a(M,dr(a(ee," ",u([d.hD,d.fK,d.hP]))),U(Oh,r)),n)}),fv={$:3},mv=function(e){return{$:2,a:e}},Sl=Nd,sv=v(function(e,r){switch(r.$){case 1:var n=r.a;return vl({gM:v(function(o,l){return a(Sl,e,a(n.gM,o,l))}),hZ:n.hZ});case 0:var t=r.a;return st(a(dt,Sl(e),t));case 2:var i=r.a;return mv(i);default:return fv}}),Cl=sv,Jh=Sl,Yh=function(e){return{$:0,a:e}},Se=Yh,Xh=Hd,Me=Xh,dv={$:1},Li=function(e){return{$:5,a:e}},pv=Li(0),Br=T(function(e,r,n){return P(cn,e/255,r/255,n/255,1)}),gv=b(Br,0,0,0),Zh=Dr("d"),Qh=Dr("fill"),Kh=Dr("height"),hv=iu("http://www.w3.org/2000/svg"),e3=hv("path"),r3=hv("svg"),n3=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gB:n,hx:r}},a3=function(e){var r=n3(e);return"rgba("+(k(Le(r.hx*255))+(","+k(Le(r.gB*255))+(","+k(Le(r.fS*255))+(","+ae(r.fI)+")"))))},t3=Dr("viewBox"),i3=Dr("width"),Ta=T(function(e,r,n){return a(r3,u([t3("0 0 100 100"),i3(k(e)),Kh(k(e))]),u([a(e3,u([Zh(n),Qh(a3(r))]),A)]))}),o3={$:1},ur=o3,bv=function(e){return{$:7,a:e}},K=bv,he=v(function(e,r){return P(cr,pr,Zn,a(M,K(ur),a(M,pe(ur),e)),Ye(u([r])))}),_v=function(e){return{$:2,a:e}},$e=_v(1),ea={go:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gA:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gH:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hp:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hr:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hw:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hR:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ik:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",$9:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ka={c2:260,bE:54},un=function(e){return a(ge,lv,b(St,"bg-"+Ma(e),"background-color",e))},l3=ue(28),An=function(e){return a(ge,l3,b(St,"bc-"+Ma(e),"border-color",e))},Pi=1,Cr=v(function(e,r){return P(cr,Pi,Zn,a(M,dr(d.gc+(" "+d.bt)),a(M,pe(ur),a(M,K(ur),e))),Ye(r))}),c3=b(Br,83,83,83),wv=q(function(e,r,n,t){return P(cn,e/255,r/255,n/255,t)}),Mi=P(wv,56,56,56,.25),Ue=fv,Ct=Re(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),zt=ue(2),ra=function(e){var r=e;return a(ge,zt,F(Ct,"p-"+k(e),r,r,r,r))},yv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),xv=ue(3),Sv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Fn=function(e){return a(ge,xv,b(yv,a(Sv,e,e),e,e))},u3=P(wv,0,0,0,0),$3=function(e){return{$:4,a:e}},zl=0,In=v(function(e,r){return P(cr,zl,Zn,a(M,dr(d.bt+(" "+d.ax)),a(M,K(ur),a(M,pe(ur),e))),Ye(r))}),v3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gM(a(_$,{gy:{fO:j,fW:j,hL:j},gL:1,eS:0},n.hZ));case 2:var t=e.a;return hi(Mn(t));default:return hi(Mn(""))}},f3=v(function(e,r){return v3(e(r))}),m3=Wd,s3=v(function(e,r){return st(b(m3,f3,e,r))}),Bn=function(e){return a(ge,cv,b(St,"fc-"+Ma(e),"color",e))},Ll=b(Br,195,195,195),En=v(function(e,r){return{$:3,a:e,b:r}}),Cv=ue(13),d3=a(En,Cv,d.ib),p3=ue(20),zv=a(En,p3,d.hJ),na=function(e){return a(ge,$v,ov(e))},Pl=a(En,Cv,d.fV),Ml=v(function(e,r){if(r.$===-2)return Or;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return F(te,n,t,a(e,t,i),a(Ml,e,o),a(Ml,e,l))}),Lv=v(function(e,r){if(le(e,r)){var n=e;return a(ge,zt,F(Ct,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(ge,zt,F(Ct,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Vn=function(e){return mv(e)},g3=function(e){return b(Ho,T(function(r,n,t){return a(M,n,t)}),A,e)},h3=v(function(e,r){return{$:3,a:e,b:r}}),b3=v(function(e,r){return{$:2,a:e,b:r}}),_3=v(function(e,r){return{$:0,a:e,b:r}}),w3=v(function(e,r){return{$:1,a:e,b:r}}),Da=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Pv=P(Da,0/255,0/255,0/255,1),Ti=function(e){return{$:6,a:e}},y3=Ti(0),ki=function(e){return{$:2,a:e}},x3={$:6},Mv=ki(x3),Tv=T(function(e,r,n){if(r.$===1)return r.a,P(cr,Pi,kn("label"),e,Ye(u([n])));var t=r.a,i=r.b,o=r.c,l=P(cr,pr,Zn,i,Ye(u([o])));switch(t){case 2:return P(cr,Pi,kn("label"),a(M,dr(d.ci),e),Ye(u([l,n])));case 3:return P(cr,Pi,kn("label"),a(M,dr(d.ci),e),Ye(u([n,l])));case 0:return P(cr,zl,kn("label"),a(M,dr(d.ci),e),Ye(u([n,l])));default:return P(cr,zl,kn("label"),a(M,dr(d.ci),e),Ye(u([l,n])))}}),Tl=xt,$n=Li(1),kv="Enter",S3=function(e){return{$:5,a:e}},Dv=function(e){if(e.$===1){var r=e.a;return ki(S3(r))}else return Xn},Av=function(e){return e.$===1},C3=function(e){return{$:0,a:e}},kl=ou,z3=v(function(e,r){return a(kl,e,C3(r))}),Fv=function(e){return a(z3,"click",ar(e))},L3=ld,P3=function(e){return{$:2,a:e}},M3=v(function(e,r){return a(kl,e,P3(r))}),Iv=function(e){var r=function(t){var i=e(t);if(i.$===1)return L3("No key matched");var o=i.a;return ar(o)},n=a(G,r,a(W,"key",_a));return ze(a(M3,"keydown",a(oi,function(t){return L(t,!0)},n)))},T3=ue(21),aa=a(En,T3,d.gg),Bv=" ",Ev=function(e){return a(Dr,"tabIndex",k(e))},k3=a(dt,ze,Ev),D3=v(function(e,r){var n=r.em,t=r.gN,i=r.f6,o=r.bI,l=U(u([Av(n)?Xn:Fn(6),ze(Fv(o(!i))),Mv,Iv(function(c){return le(c,kv)||le(c,Bv)?N(o(!i)):j}),k3(0),aa,y3,K($e)]),e);return b(Tv,a(M,ze(a(Tl,"role","checkbox")),a(M,ze(a(Tl,"aria-checked",i?"true":"false")),a(M,Dv(n),l))),n,P(cr,pr,Zn,u([$n,pe($e),K(ur)]),Ye(u([t(i)]))))}),A3=T(function(e,r,n){return U(a(ft,e-Jn(n),mi(r)),n)}),Lt=Ps,Vv=function(e){var r=function(n){return n<10?k(n):mi(c$(87+n))};return e<16?r(e):U(Vv(e/16|0),r(a(Lt,16,e)))},F3=a(Oe,Vv,a(A3,2,"0")),Dl=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gB:n,hx:r}},I3=function(e){var r=Dl(e),n=r.hx,t=r.gB,i=r.fS;return a(ee,"",a(M,"#",a(O,a(Oe,Le,F3),u([n*255,t*255,i*255]))))},Al=ue(12),Rv=a(En,Al,d.h3),Fl=Ti(1),hr=Ms,vn=function(e){return e*hr/180},B3=function(e){return{$:1,a:e}},Il=v(function(e,r){return{$:10,a:e,b:r}}),E3=ue(26),V3=function(e){return a(Il,E3,B3(-e))},Aa=T(function(e,r,n){return P(cn,e,r,n,1)}),R3=cn,j3=v(function(e,r){return{$:4,a:e,b:r}}),U3=ue(24),N3=function(e){return a(Il,U3,a(j3,D(0,0,1),e))},W3=ue(17),ta=function(e){return a(ge,W3,b(lr,"br-"+k(e),"border-radius",k(e)+"px"))},H3=function(e){return xa(u([e.ej?"box-inset":"box-",Ae(e.eV.a)+"px",Ae(e.eV.b)+"px",Ae(e.a2)+"px",Ae(e.bi)+"px",Ma(e.b6)]))},G3=ue(19),O3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(ge,G3,b(lr,H3(r),"box-shadow",sl(r)))},jv=v(function(e,r){return{$:12,a:e,b:r}}),Uv=ue(0),q3=function(e){return e?a(ge,Uv,a(jv,"transparent",1)):a(ge,Uv,a(jv,"visible",0))},Bl=b(Aa,1,1,1),El=Re(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Di=function(e){return a(ge,Ci,F(El,"b-"+k(e),e,e,e,e))},J3=v(function(e,r){return a(ge,Ci,F(El,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Pt=function(e){var r=e.b2,n=e.cG,t=e.g5,i=e.hA;return le(n,r)&&le(t,i)?le(n,i)?Di(n):a(J3,t,n):a(ge,Ci,F(El,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},Y3=function(e){return a(he,u([dr("focusable"),K(Se(14)),pe(Se(14)),Bn(Bl),$n,na(9),Rv,ta(3),An(e?b(Aa,59/255,153/255,252/255):b(Aa,211/255,211/255,211/255)),O3({a2:1,b6:e?P(R3,238/255,238/255,238/255,0):b(Aa,238/255,238/255,238/255),eV:L(0,0),bi:1}),un(e?b(Aa,59/255,153/255,252/255):Bl),Di(e?0:1),ul(a(he,u([An(Bl),pe(Se(6)),K(Se(9)),N3(vn(-45)),Fl,$n,V3(1),q3(!e),Pt({b2:2,g5:2,hA:0,cG:0})]),Ue))]),Ue)},X3=xr("htmlFor"),Z3=v(function(e,r){if(r.$)return j;var n=r.a;return e(n)}),Ai=v(function(e,r){if(r.$){var t=r.a;return Ke(t)}else{var n=r.a;return e(n)}}),Nv=q(function(e,r,n,t){return{gS:r,g9:e,hg:n,h_:t}}),Q3=gp,K3=ad,eb=v(function(e,r){if(r.$)return Ke(e);var n=r.a;return Be(n)}),rb=pp,nb=function(e){return a(rb,{f2:!1,hc:!1},e)},Vl=function(e){if(e.b){var r=e.a;return e.b,N(r)}else return j},ab=v(function(e,r){if(r.$){var t=r.a;return Ke(t)}else{var n=r.a;return Be(e(n))}}),tb=function(e){return{$:2,a:e}},ib=function(e){return{$:0,a:e}},ob=function(e){return{$:1,a:e}},Rl=v(function(e,r){return Gr(r)-Gr(e)}),jl=T(function(e,r,n){var t=Gr(n);return ce(Gr(e),t)<1&&ce(t,Gr(r))<1}),lb=v(function(e,r){var n=function(i){return ce(i,e)<0?Be(i):Ke(ob(r))},t=b(jl,"0","9",r)?Be(a(Rl,"0",r)):b(jl,"a","z",r)?Be(10+a(Rl,"a",r)):b(jl,"A","Z",r)?Be(10+a(Rl,"A",r)):Ke(ib(r));return a(Ai,n,t)}),Wv=v(function(e,r){var n=pa(r);if(n.$===1)return Be(0);var t=n.a,i=t.a,o=t.b;return a(Ai,function(l){return a(Ai,function(c){return Be(l+c*e)},a(Wv,e,o))},a(lb,e,i))}),cb=v(function(e,r){return 2<=e&&e<=36?a(Wv,e,ol(r)):Ke(tb(e))}),ub=cb(16),$b=T(function(e,r,n){return P(Da,e,r,n,1)}),vb=q(function(e,r,n,t){return P(Da,e,r,n,t)}),Mt=Ls,fb=v(function(e,r){var n=a(Mt,10,e);return Le(r*n)/n}),mb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=l$(n);if(t.b&&!t.b.b){var i=t.a;return K3(u([i,i]))}else return n};return a(Oe,zi,a(Oe,function(n){return a(Ee,function(t){return b(Q3,1,t,n)},nb(e))},a(Oe,Z3(Vl),a(Oe,Ee(function(n){return n.h_}),a(Oe,Ee(Ln(Ir)),a(Oe,eb("Parsing hex regex failed"),Ai(function(n){var t=a(O,a(Oe,r,a(Oe,ub,ab(ot))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,$=c.a.a,m=c.b,s=m.a.a;return Be(P(vb,i/255,l/255,$/255,a(fb,2,s/255)))}else break e;else{var i=t.a.a,p=t.b,l=p.a.a,g=p.b,$=g.a.a;return Be(b($b,i/255,l/255,$/255))}else break e;return Ke("Parsing ints from hex failed")})))))))}(),sb=xr("id"),db=Wr("input"),pb=Wr("label"),Hv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),gb=Hv(0),hb=xr("name"),bb=function(e){return L(e,!0)},_b=function(e){return{$:1,a:e}},wb=v(function(e,r){return a(kl,e,_b(r))}),yb=v(function(e,r){return b(Ge,W,r,e)}),xb=a(yb,u(["target","value"]),_a),Gv=function(e){return a(wb,"input",a(oi,bb,a(oi,e,xb)))},Sb=a(En,Al,d.h8),Ov=a(En,Al,d.ic),Ul=function(e){return a(b$,5,e)},Nl=function(e){return a(ge,uv,a(iv,b(Ie,vv,"ff-",e),e))},Cb=b(Br,195,195,195),qv=b(Br,69,69,69),zb=Hv(2),Lb={$:2},Wl=Lb,Pb=ue(32),Mb=ue(31),Jv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return N(i)}else return j;else{var t=n.a;return N(t)}}),j,e)},Tb=v(function(e,r){return a(Ce,r,b(Ge,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return N(L(i,l))}else return j;else{var i=t.a;return N(i)}}),j,e))}),Yv=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return N(i)}else return j;else{var t=n.a;return N(t)}}),j,e)},kb=ue(33),Db=xr("max"),Ab=xr("min"),Fb=v(function(e,r){return a(ge,xv,b(yv,a(Sv,e,r),e,r))}),Ib=function(e){return a(xr,"step",e)},Xv=xr("type"),Zv=xr("value"),Fa=_v,Bb=Jd,Qv=v(function(e,r){switch(r.$){case 0:return Xn;case 2:var n=r.a;return ki(n);case 6:var t=r.a;return Ti(t);case 5:var i=r.a;return Li(i);case 7:var t=r.a;return bv(t);case 8:var t=r.a;return g$(t);case 3:var t=r.a,i=r.b;return a(En,t,i);case 4:var o=r.a,l=r.b;return a(ge,o,l);case 9:var c=r.a,$=r.b;return a(h$,c,a(sv,e,$));case 1:var m=r.a;return ze(a(Bb,e,m));default:var s=r.a,p=r.b;return a(Il,s,p)}}),Eb=T(function(e,r,n){return a(In,u([K($e),pe(a(Ce,$e,n)),$n]),u([a(he,u([K(Fa(Le(e*1e4)))]),Ue),a(he,a(M,$n,a(O,Qv(ut),r)),Ue),a(he,u([K(Fa(Le(de(1-e)*1e4)))]),Ue)]))}),Vb=T(function(e,r,n){return a(Cr,u([pe($e),K(a(Ce,$e,n)),Fl]),u([a(he,u([pe(Fa(Le(de(1-e)*1e4)))]),Ue),a(he,a(M,Fl,a(O,Qv(ut),r)),Ue),a(he,u([pe(Fa(Le(e*1e4)))]),Ue)]))}),Kv=v(function(e,r){var n=Yv(e),t=Jv(e),i=function(){var S=L(n,t);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var y=S.a.a.a,C=S.b.a.a;return ce(C,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cH-r.cr)/(r.cq-r.cr),l=r.ig,c=l,$=Jv(c),m=function(){if($.$===1)return"20px";if($.a.$)return"100%";var S=$.a.a;return k(S)+"px"}(),s=Yv(c),p=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return k(S)+"px"}(),g="thmb-"+(p+("-"+m)),f=u([a(re,"width",p),a(re,"height",m)]),_=a(Tb,e,L(5,5)),w=_.a,x=_.b;return b(Tv,u([Av(r.em)?Xn:a(Fb,w,x),Mv,K(function(){if(n.$===1)return $e;if(n.a.$){var S=n.a;return S}else return ur}()),pe(function(){if(t.$===1)return ur;if(t.a.$){var S=t.a;return S}else return ur}())]),r.em,a(In,u([K(a(Ce,$e,n)),pe(a(Ce,Se(20),t))]),u([P(cr,pr,kn("input"),u([Dv(r.em),a(ge,Pb,a(gt,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),a(ge,kb,a(gt,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),a(ge,Mb,a(gt,'input[type="range"].'+(g+"::-ms-thumb"),f)),ze(Sr(g+" ui-slide-bar focusable-parent")),ze(Gv(function(S){var y=o$(S);if(y.$===1)return r.bI(0);var C=y.a;return r.bI(C)})),ze(Xv("range")),ze(Ib(function(){var S=r.cD;if(S.$===1)return"any";var y=S.a;return ae(y)}())),ze(Ab(ae(r.cr))),ze(Db(ae(r.cq))),ze(Zv(ae(r.cH))),i?ze(a(Tl,"orient","vertical")):Xn,K(i?a(Ce,Se(20),t):a(Ce,$e,n)),pe(i?a(Ce,$e,n):a(Ce,Se(20),t))]),Ye(A)),a(he,a(M,K(a(Ce,$e,n)),a(M,pe(a(Ce,Se(20),t)),U(e,u([Ul(i?b(Vb,o,a(M,dr("focusable-thumb"),c),n):b(Eb,o,a(M,dr("focusable-thumb"),c),t))])))),Ue)])))}),Rb=b(Aa,.5,.5,.5),ef=Ir,rf=function(e){var r=e.c1,n=e.cH,t=e.cr,i=e.cq,o=e.cD,l=e.bI;return a(he,u([K($e)]),a(Kv,u([Fn(2),Ul(a(he,u([K($e),pe(Se(16)),$n,un(qv),ta(4)]),Ue))]),{em:a(zb,A,a(In,u([K($e)]),u([a(he,u([Sb]),Vn(r)),a(he,u([K($e),Ov,Nl(u([Wl]))]),Vn(ae(n)))]))),cq:i,cr:t,bI:l,cD:N(o),ig:ef(u([K(Se(12)),pe(Se(12)),ta(4),Di(0),An(Rb),un(Cb)])),cH:n}))},jb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Ub=v(function(e,r){switch(r.$){case 3:var n=r.a;return a(D3,A,{f6:n,gN:Y3,em:a(gb,A,Vn(e)),bI:h3(e)});case 0:var t=r.a,i=t.a,o=t.b,n=r.b;return rf({c1:e,cq:o,cr:i,bI:_3(e),cD:.001*(o-i),cH:n});case 1:var l=r.a,i=l.a,o=l.b,n=r.b;return rf({c1:e,cq:o,cr:i,bI:a(Oe,Le,w3(e)),cD:1,cH:n});default:var n=r.a;return a(he,u([K($e)]),zn(a(tr,A,u([a(tr,u([a(Me,"margin-bottom","6px")]),u([a(pb,u([X3(e)]),u([on(e)]))])),a(db,u([Xv("color"),a(Me,"width","100%"),a(Me,"height","26px"),a(Me,"padding","0px"),sb(e),hb(e),Gv(function(c){return a(b3,e,a(jb,Pv,mb(c)))}),Zv(I3(n))]),A)]))))}}),Hl=b(Br,255,255,255),Nb=function(e){return a(Cr,u([K($e),Fn(8),a(Lv,0,14),Pt({b2:1,g5:0,hA:0,cG:0}),An(Mi)]),u([a(he,u([na(16),Pl,Bn(Hl)]),Vn(e.hd)),a(Cr,u([K($e),Fn(6)]),g3(a(Ml,Ub,e.aN)))]))},Wb=function(e){return a(Cr,u([K($e),pe($e),Bn(Ll),na(12),d3,zv]),a(O,Nb,e))},Hb=s3(Wb),Gb=function(e){return a(Cr,u([K($e),pe($e)]),u([a(In,u([Fn(14),K($e)]),A),a(Cl,$3,Hb(Yn(e).gb))]))},Ob=function(e){return{$:6,a:e}},qb=q(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Jb=function(e){var r=e.cG,n=e.hA,t=e.b2,i=e.g5;if(le(r,n)&&le(r,t)&&le(r,i)){var o=r;return a(ge,zt,F(Ct,"p-"+k(r),o,o,o,o))}else return a(ge,zt,F(Ct,P(qb,r,n,t,i),r,n,t,i))},Yb=function(e){return{$:0,a:e}},Xb=function(e){return{$:1,a:e}},Zb=Xb,Qb=function(e){var r=e.b.X;return qn(r)},Fi=b(Br,255,60,0),Kb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return qn(r)+1+qn(n)},e1=function(e){var r=L(Qb(e),Kb(e)-1),n=r.a,t=r.b;return a(he,u([K($e),$n]),a(Kv,u([Ul(a(In,u([K($e),pe(Se(4)),$n,un(qv),ta(2)]),u([a(he,u([K(Fa(n)),pe($e),un(Fi),ta(2)]),Ue),a(he,u([K(Fa(t-n))]),Ue)])))]),{em:Zb(""),cq:t,cr:0,bI:a(Oe,Le,Yb),cD:N(1),ig:ef(u([K(Se(12)),pe(Se(12)),ta(6),un(Fi)])),cH:n}))},r1=Ti(2),Ii=b(Br,220,220,220),n1=function(e){var r=e.a,n=function(){return r.$?u([Bn(Ii)]):u([Bn(Fi)])}();return a(he,U(n,u([na(14),r1,Ov,Nl(u([Wl]))])),Vn(a(f$,3,Yn(e).d1)))},a1=function(e){e.a;var r=e.b.X;return a(Ee,function(n){return Le(60/(Yn(e).d1-n))},a(Ee,a(Oe,Ou,function(n){return n.d1}),Vl(a(n$,59,r))))},t1=function(e){var r=a1(e);if(r.$===1)return Ue;var n=r.a;return a(he,u([na(14),Bn(Ll),Nl(u([Wl]))]),Vn(k(n)+" FPS"))},nf={$:1},i1={$:3},o1={$:2},l1={$:8},c1=rn,u1=v(function(e,r){return a(Io,e,c1(r))}),$1=u1("disabled"),v1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},f1=function(e){return a(vt,v1,e)?Xn:dr("focusable")},Bi=a(dt,ze,Fv),af=v(function(e,r){var n=r.eW,t=r.em;return P(cr,pr,Zn,a(M,K(ur),a(M,pe(ur),a(M,dr(d.ca+(" "+(d.ax+(" "+(d.hK+(" "+d.eU)))))),a(M,aa,a(M,f1(e),a(M,ki(l1),a(M,ze(Ev(0)),function(){if(n.$===1)return a(M,ze($1(!0)),e);var i=n.a;return a(M,Bi(i),a(M,Iv(function(o){return le(o,kv)||le(o,Bv)?N(i):j}),e))}()))))))),Ye(u([t])))}),tf=v(function(e,r){return a(af,A,{em:a(he,u([K(Se(36)),ra(3),Bn(r),Rv,na(12),Pl,An(r),Di(1),ta(4)]),Vn("REC")),eW:N(e)})}),of=T(function(e,r,n){return a(af,A,{em:zn(b(Ta,20,n,e)),eW:N(r)})}),m1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(In,A,u([a(he,u([K(Se(40))]),function(){switch(r.$){case 0:return a(tf,nf,Fi);case 1:return a(tf,o1,Ii);default:return Ue}}()),a(he,u([K(Se(28))]),function(){switch(r.$){case 0:return Ue;case 1:return Tn(n)?Ue:b(of,ea.hr,i1,Ii);default:return b(of,ea.hp,nf,Ii)}}())]))},s1=function(e){return a(Cr,u([K($e)]),u([e1(e),a(In,u([K($e),Fn(14),a(Lv,0,6),$n]),u([m1(e),t1(e),n1(e)]))]))},d1=function(e){return a(Cr,u([K($e),Fn(14),Jb({b2:20,g5:0,hA:0,cG:0}),Pt({b2:1,g5:0,hA:0,cG:0}),An(Mi)]),u([a(he,u([na(16),Pl,Bn(Ll)]),Vn("Time Travel")),a(Cl,Ob,s1(e))]))},p1=v(function(e,r){return a(Cr,u([Yn(r).dB.iq>600?un(c3):un(u3),Pt({b2:0,g5:0,hA:1,cG:0}),An(Mi),K(Se(ka.c2)),pe($e)]),u([function(){return e?Ue:a(Cr,u([K($e),pe($e),ra(14),Fn(14)]),u([d1(r),Gb(r)]))}()]))}),g1=function(e){return{$:3,a:e}},lf=Li(2),h1=b(Br,232,78,50),b1=b(Br,48,48,48),_1=function(e){return a(xr,"href",qd(e))},w1=Dr("rel"),y1=xr("target"),cf=v(function(e,r){var n=r.fn,t=r.em;return P(cr,pr,kn("a"),a(M,ze(_1(n)),a(M,ze(w1("noopener noreferrer")),a(M,ze(y1("_blank")),a(M,K(ur),a(M,pe(ur),a(M,dr(d.ca+(" "+(d.ax+(" "+d.et)))),e)))))),Ye(u([t])))}),Tt=xr("title"),x1=b(Br,31,161,242),S1=function(e){var r=T(function(o,l,c){var $=le(l,e)?Hl:b1;return a(he,u([tn(Tt(o)),Bi(g1(l)),aa,ra(7)]),zn(b(Ta,40,$,c)))}),n=a(Cr,u([pv]),u([b(r,"Configurations",0,ea.hR)])),t=a(Cr,A,u([a(cf,u([tn(Tt("Twitter")),lf,aa,ra(7)]),{em:zn(b(Ta,40,x1,ea.ik)),fn:"https://twitter.com/AzizErkalSelman"}),a(cf,u([tn(Tt("Source Code")),lf,aa,ra(7)]),{em:zn(b(Ta,40,h1,ea.gA)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(he,u([K(Se(ka.bE)),ra(4),Bi(dv),Pt({b2:1,g5:0,hA:0,cG:0}),An(Mi),aa,tn(Tt("Activate Distraction Free Mode"))]),zn(b(Ta,46,Hl,ea.fx)));return a(Cr,u([K(Se(ka.bE)),pe($e),zv,un(gv)]),u([i,n,t]))},C1=function(e){var r=a(he,u([K(Se(ka.bE)),pv,ra(4),Bi(dv),aa,tn(Tt("Deactivate Distraction Free Mode (A)"))]),zn(b(Ta,46,gv,ea.fx)));return e.bw?r:a(In,u([K(Se(ka.bE+ka.c2)),pe($e)]),u([S1(e.bp),a(p1,e.bp,e.R)]))},z1=T(function(e,r,n){var t=Ag(n.R),i=Yn(n.R);return b(qh,{hm:u([Ig({fO:j,fW:j,hL:j})])},u([K(Se(it(i.dB.iq))),pe(Se(it(i.dB.gI))),tn(a(Me,"-webkit-font-smoothing","antialiased")),tn(a(Me,"pointer-events","none")),tn(a(Me,"touch-action","none")),tn(a(Me,"user-select","none")),ul(a(Cl,kg,a(r,i,t))),ul(C1(n))]),zn(a(Jh,hi(Dg),a(e,i,t))))}),L1=mr(function(e,r,n,t,i,o){var l=v(function($,m){return L(P(Cg,r,o,$,m),p$)}),c=function($){var m=a(Ju,n,$.gZ);return L({bp:0,bw:!0,R:a(zg,m,t),dM:0},p$)};return O0({gT:c,h$:Tg,im:l,io:a(z1,e,i)})}),P1=q(function(e,r,n,t){return Ze(L1,e,r,n,t,v(function(i,o){return Ue}),T(function(i,o,l){return l}))}),ia=T(function(e,r,n){return{gf:n,ht:e,hE:r}}),M1={hq:u([b(ia,D(-3,3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,1,0)])),b(ia,D(0,3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,1,0),D(0,2,0)])),b(ia,D(3,3,0),D(0,0,0),u([D(0,0,0),D(1,1,0),D(0,1,0),D(0,2,0)])),b(ia,D(-3,-1,0),D(0,0,0),u([D(0,0,0),D(0,1,0),D(1,1,0),D(1,2,0)])),b(ia,D(3,0,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,0,1),D(0,1,1)])),b(ia,D(-2,-3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,0,1),D(1,1,0)])),b(ia,D(2,-3,0),D(0,0,0),u([D(0,0,0),D(1,0,0),D(0,0,1),D(0,1,0)]))])},T1=function(e){return{dP:M1}},k1=v(function(e,r){return L(e,t$(r))}),D1=T(function(e,r,n){return{aN:n,g1:r,hd:e}}),A1=function(e){return b(Ie,v(function(r,n){var t=r.a,i=r.b;return b(ba,t,i,n)}),fl,e)},F1=T(function(e,r,n){return b(D1,e,r,A1(n))}),Gl=F1,fn=T(function(e,r,n){var t=r.a,i=r.b;return L(e,a(i$,L(t,i),n))}),I1=u([b(Gl,"Camera",!0,u([b(fn,"camera distance",L(3,60),20),b(fn,"camera azimuth",L(0,2*hr),.6),b(fn,"camera elevation",L(-hr/2,hr/2),.4)])),b(Gl,"Parameters",!0,u([b(fn,"cube scale",L(.1,1),.95),b(fn,"edge width",L(.001,.5),.1)])),b(Gl,"Colors and light",!0,u([b(fn,"sunlight azimuth",L(0,2*hr),5.5),b(fn,"sunlight elevation",L(-hr/2,hr/2),-1),b(fn,"saturation",L(0,1),.6),b(fn,"lightning",L(0,1),.8),a(k1,"edge color",Pv)]))]),B1=v(function(e,r){return r}),E1=Wr("h2"),V1=v(function(e,r){return a(tr,u([a(Me,"min-width","320px"),a(Me,"max-width","500px"),a(Me,"margin","0 auto")]),u([a(E1,u([a(Me,"margin","10px"),a(Me,"text-align","center")]),u([on("The Soma Cube")])),a(q$,u([a(Me,"margin","10px 20px 10px 20px")]),u([a(tr,u([a(Me,"color","red")]),u([on("The following control are not implemented yet")])),a(tr,A,u([on("Space Key to chose the next piece")])),a(tr,A,u([on("Arrow keys to rotate the cube")])),a(tr,A,u([on("WASDQE to move the cube")])),a(tr,A,u([on("Shift + Arrow Keys to rotate the camera")]))]))]))}),R1=v(function(e,r){return a(Ee,function(n){if(n.$)return 0;var t=n.b;return t},a(si,e,r.aN))}),j1=v(function(e,r){return a(Ce,0,Vl(a(Ln,R1(e),r)))}),U1=v(function(e,r){return a(j1,e,r.gb)}),Er=U1,mn=function(e){return e},kt=function(e){return mn(hr*(e/180))},N1=function(e){return e},Rn=function(e){return e},Ol=function(e){var r=e;return-r},W1=v(function(e,r){var n=e,t=r;return{is:n.iw*t.dU-n.dU*t.iw,iw:n.dU*t.is-n.is*t.dU,dU:n.is*t.iw-n.iw*t.is}}),uf=function(e){var r=e;return r.dS},$f=function(e){var r=e;return r.dT},H1=function(e){return a(W1,uf(e),$f(e))},oa=function(e){var r=e;return r.dk},la=Ts,Ia=ks,Ei=T(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=la(l),$=Ia(l),m=t.gn,s=m,p=s.is*$,g=c*p,f=p*p,_=s.iw*$,w=c*_,x=p*_,S=_*_,y=1-2*(f+S),C=s.dU*$,B=c*C,J=2*(x-B),Z=2*(x+B),H=p*C,Y=2*(H+w),X=2*(H-w),V=_*C,ne=2*(V-g),ve=2*(V+g),we=C*C,fe=1-2*(S+we),me=1-2*(f+we);return{is:fe*o.is+J*o.iw+Y*o.dU,iw:Z*o.is+me*o.iw+ne*o.dU,dU:X*o.is+ve*o.iw+y*o.dU}}),Dt=T(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=la(l),$=Ia(l),m=t.dk,s=m,p=o.is-s.is,g=o.iw-s.iw,f=o.dU-s.dU,_=t.gn,w=_,x=w.is*$,S=c*x,y=x*x,C=w.iw*$,B=c*C,J=x*C,Z=C*C,H=1-2*(y+Z),Y=w.dU*$,X=c*Y,V=2*(J-X),ne=2*(J+X),ve=x*Y,we=2*(ve+B),fe=2*(ve-B),me=C*Y,xe=2*(me-S),se=2*(me+S),Fe=Y*Y,ke=1-2*(Z+Fe),Xe=1-2*(y+Fe);return{is:s.is+ke*p+V*g+we*f,iw:s.iw+ne*p+Xe*g+xe*f,dU:s.dU+fe*p+se*g+H*f}}),sn=function(e){return e},jn=function(e){var r=e;return r.dS},Un=function(e){var r=e;return r.dT},Nn=function(e){var r=e;return r.dV},vf=T(function(e,r,n){return sn({dk:b(Dt,e,r,oa(n)),dS:b(Ei,e,r,jn(n)),dT:b(Ei,e,r,Un(n)),dV:b(Ei,e,r,Nn(n))})}),ff=T(function(e,r,n){return b(vf,e(n),r,n)}),ql=function(e){var r=e;return r.gn},At=v(function(e,r){var n=e,t=r;return{is:t.is+n.is,iw:t.iw+n.iw,dU:t.dU+n.dU}}),mf=v(function(e,r){return sn({dk:a(At,e,oa(r)),dS:jn(r),dT:Un(r),dV:Nn(r)})}),G1=v(function(e,r){var n=e,t=r;return{is:n*t.is,iw:n*t.iw,dU:n*t.dU}}),O1=T(function(e,r,n){return a(mf,a(G1,r,e),n)}),q1=T(function(e,r,n){return b(O1,ql(e(n)),r,n)}),dn=v(function(e,r){return{gn:r,dk:e}}),J1=function(e){var r=e;return a(dn,r.dk,r.dS)},Y1=function(e){var r=e;return a(dn,r.dk,r.dT)},X1=function(e){var r=e;return a(dn,r.dk,r.dV)},Z1=function(e){var r=sn({dk:e.ba,dS:$f(e.ed),dT:H1(e.ed),dV:uf(e.ed)}),n=b(q1,X1,e.cX,b(ff,J1,Ol(e.cc),b(ff,Y1,e.b$,r)));return n},Q1=function(e){return{$:0,a:e}},Ne=function(e){var r=e;return de(r)},Vi=function(e){var r=e;return .5*r},K1=Ds,e_=function(e){var r=e;return K1(r)},r_=function(e){var r=Vi(Ne(e.fq)),n=e_(r);return{dv:Q1(n),dL:e.dL}},zr={is:0,iw:0,dU:0},sf=Ir,pn=function(e){return e},df=pn({is:1,iw:0,dU:0}),Ri=df,Jl=pn({is:0,iw:0,dU:1}),ji=Jl,n_=sf({dk:zr,dS:ji,dT:Ri}),a_=function(e){var r=e.ba,n=e.b$,t=e.cc,i=e.cX;return r_({fq:kt(40),dL:Z1({b$:mn(n),cX:Rn(i),cc:mn(t),ba:N1(r),ed:n_})})},t_=function(e){return a_({b$:a(Er,"camera azimuth",e),cX:a(Er,"camera distance",e),cc:a(Er,"camera elevation",e),ba:{is:.5,iw:1,dU:0}})},Ft=v(function(e,r){return{$:0,a:e,b:r}}),Yl=v(function(e,r){var n=e,t=r;return ce(t,n)>-1}),Xl=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),gn=v(function(e,r){var n=e,t=r;return t-n}),i_=pn({is:-1,iw:0,dU:0}),o_=pn({is:0,iw:-1,dU:0}),pf=pn({is:0,iw:0,dU:-1}),gf=pn({is:0,iw:1,dU:0}),qe=T(function(e,r,n){var t=e,i=r,o=n;return{is:t,iw:i,dU:o}}),l_=mr(function(e,r,n,t,i,o){var l=a(Yl,n,o)?Jl:pf,c=a(Yl,r,i)?gf:o_,$=a(Yl,e,t)?df:i_,m=D(Ne(a(gn,e,t)),Ne(a(gn,r,i)),Ne(a(gn,n,o))),s=b(qe,a(Xl,e,t),a(Xl,r,i),a(Xl,n,o)),p=sn({dk:s,dS:$,dT:c,dV:l});return{fN:p,a4:m}}),ca=function(e){var r=e;return r.is},ua=function(e){var r=e;return r.iw},$a=function(e){var r=e;return r.dU},hf=v(function(e,r){return Ze(l_,ca(e),ua(e),$a(e),ca(r),ua(r),$a(r))}),It=T(function(e,r,n){return{is:e,iw:r,dU:n}}),c_=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=D(n/2,t/2,i/2),l=o.a,c=o.b,$=o.c;return a(Ft,e,a(hf,b(It,-l,-c,-$),b(It,l,c,$)))}),Ui=function(e){return{$:5,a:e}},Ni=function(e){return Ui(e)},u_=q(function(e,r,n,t){var i=D(e,r,n),o=i.a,l=i.b,c=i.c,$=c<=.5?c*(l+1):c+l-c*l,m=c*2-$,s=function(_){var w=_<0?_+1:_>1?_-1:_;return w*6<1?m+($-m)*w*6:w*2<1?$:w*3<2?m+($-m)*(2/3-w)*6:m},p=s(o-1/3),g=s(o),f=s(o+1/3);return P(Da,f,g,p,t)}),bf=T(function(e,r,n){return P(u_,e,r,n,1)}),Zl=function(e){return{$:0,a:e}},_f=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),wf=T(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),Ql=function(e){return b(wf,0,1,e<=.04045?e/12.92:a(Mt,(e+.055)/1.055,2.4))},Bt=_p,$_=function(e){var r=Dl(e),n=r.hx,t=r.gB,i=r.fS;return b(Bt,Ql(n),Ql(t),Ql(i))},yf=function(e){return b(_f,0,Zl($_(e)),Zl(0))},Kl=v(function(e,r){return{$:2,a:e,b:r}}),ec=v(function(e,r){return{$:4,a:e,b:r}}),rc=v(function(e,r){return{$:3,a:e,b:r}}),nc=v(function(e,r){return{$:1,a:e,b:r}}),v_=T(function(e,r,n){return{is:e,iw:r,dU:n}}),f_=function(e){var r=e;return r},Wi=function(e){var r=e;return f_(r.fN)},Hi=function(e){var r=e;return r.a4},m_=v(function(e,r){return{fN:a(mf,e,Wi(r)),a4:Hi(r)}}),s_=v(function(e,r){var n=r;return a(dn,a(At,e,n.dk),n.gn)}),d_=v(function(e,r){var n=r;return{m:a(s_,e,n.m),g6:n.g6,hv:n.hv}}),ac=function(e){var r=e;return r},p_=function(e){return e},tc=v(function(e,r){var n=ac(r),t=n.a,i=n.b;return p_(L(e(t),e(i)))}),g_=v(function(e,r){return a(tc,At(e),r)}),Gi=function(e){var r=e;return r.f4},Oi=function(e){var r=e;return r.hv},ic=v(function(e,r){return{f4:r,hv:Ne(e)}}),h_=v(function(e,r){return a(ic,Oi(r),a(At,e,Gi(r)))}),oc=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return D(e(t),e(i),e(o))}),b_=v(function(e,r){return a(oc,At(e),r)}),qi=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=b(v_,n,t,i);switch(r.$){case 0:var l=r.a,c=r.b;return a(Ft,l,a(m_,o,c));case 1:var l=r.a,$=r.b;return a(nc,l,a(b_,o,$));case 3:var l=r.a,m=r.b;return a(rc,l,a(h_,o,m));case 2:var l=r.a,s=r.b;return a(Kl,l,a(d_,o,s));case 4:var l=r.a,p=r.b;return a(ec,l,a(g_,o,p));default:var g=r.a;return Ui(a(O,qi(D(n,t,i)),g))}}),Ba=function(e){return qi(D(e,0,0))},Ea=function(e){return qi(D(0,0,e))},__=T(function(e,r,n){return{fN:b(vf,e,r,Wi(n)),a4:Hi(n)}}),w_=v(function(e,r){var n=a(Dt,e,r),t=a(Ei,e,r);return function(i){var o=i;return a(dn,n(o.dk),t(o.gn))}}),y_=T(function(e,r,n){var t=n;return{m:b(w_,e,r,t.m),g6:t.g6,hv:t.hv}}),x_=T(function(e,r,n){return a(tc,a(Dt,e,r),n)}),S_=T(function(e,r,n){return a(ic,Oi(n),b(Dt,e,r,Gi(n)))}),C_=T(function(e,r,n){return a(oc,a(Dt,e,r),n)}),Ji=T(function(e,r,n){switch(n.$){case 0:var t=n.a,i=n.b;return a(Ft,t,b(__,e,r,i));case 1:var t=n.a,o=n.b;return a(nc,t,b(C_,e,r,o));case 3:var t=n.a,l=n.b;return a(rc,t,b(S_,e,r,l));case 2:var t=n.a,c=n.b;return a(Kl,t,b(y_,e,r,c));case 4:var t=n.a,$=n.b;return a(ec,t,b(x_,e,r,$));default:var m=n.a;return Ui(a(O,a(Ji,e,r),m))}}),z_=a(dn,zr,Ri),xf=v(function(e,r){return b(Ji,z_,mn(e),r)}),lc=gf,L_=a(dn,zr,lc),Yi=v(function(e,r){return b(Ji,L_,mn(e),r)}),P_=a(dn,zr,ji),Sf=v(function(e,r){return b(Ji,P_,mn(e),r)}),M_=v(function(e,r){return(r-Gu(r/e)*e)/e}),T_=function(e){return 2*hr*e},k_=q(function(e,r,n,t){return e+(r-e)*(1+la(T_(a(M_,n,t))))/2}),D_=function(e){var r=a(Er,"edge width",e),n=b(bf,P(k_,0,1,7,e.d1),a(Er,"saturation",e),a(Er,"lightning",e)),t=a(c_,yf(n),D(r,3+r,r)),i=Ni(u([a(Ba,1.5,a(Ea,1.5,t)),a(Yi,vn(90),a(Ba,1.5,a(Ea,1.5,t))),a(Yi,vn(180),a(Ba,1.5,a(Ea,1.5,t))),a(Yi,vn(270),a(Ba,1.5,a(Ea,1.5,t)))]));return Ni(u([i,a(xf,vn(90),i),a(Sf,vn(90),i)]))},A_=v(function(e,r){var n=r/2;return a(Ft,e,a(hf,b(It,-n,-n,-n),b(It,n,n,n)))}),Cf=function(e){return qi(D(0,e,0))},ye=v(function(e,r){var n=r;return e*n}),hn=function(e){var r=e;return{is:-r.is,iw:-r.iw,dU:-r.dU}},Et=T(function(e,r,n){var t=e,i=n;return{is:t.is+r*(i.is-t.is),iw:t.iw+r*(i.iw-t.iw),dU:t.dU+r*(i.dU-t.dU)}}),F_=T(function(e,r,n){var t=Wi(n),i=jn(t),o=Un(t),l=Nn(t),c=b(Et,e,r,oa(t)),$=r>=0?sn({dk:c,dS:i,dT:o,dV:l}):sn({dk:c,dS:hn(i),dT:hn(o),dV:hn(l)}),m=Hi(n),s=m.a,p=m.b,g=m.c,f=Ne(a(ye,r,s)),_=Ne(a(ye,r,p)),w=Ne(a(ye,r,g));return{fN:$,a4:D(f,_,w)}}),cc=function(e){var r=e;return r.m},zf=function(e){return ql(cc(e))},Lf=function(e){var r=e;return r.dk},I_=function(e){return Lf(cc(e))},Pf=function(e){var r=e;return r.g6},Mf=function(e){var r=e;return r.hv},B_=T(function(e,r,n){var t=Ne(a(ye,r,Mf(n))),i=Ne(a(ye,r,Pf(n))),o=r>=0?zf(n):hn(zf(n)),l=b(Et,e,r,I_(n));return{m:a(dn,l,o),g6:i,hv:t}}),E_=T(function(e,r,n){return a(tc,a(Et,e,r),n)}),V_=T(function(e,r,n){return a(ic,a(ye,de(r),Oi(n)),b(Et,e,r,Gi(n)))}),R_=T(function(e,r,n){return a(oc,a(Et,e,r),n)}),Tf=v(function(e,r){switch(r.$){case 0:var n=r.a,t=r.b;return a(Ft,n,b(F_,zr,e,t));case 1:var n=r.a,i=r.b;return a(nc,n,b(R_,zr,e,i));case 3:var n=r.a,o=r.b;return a(rc,n,b(V_,zr,e,o));case 2:var n=r.a,l=r.b;return a(Kl,n,b(B_,zr,e,l));case 4:var n=r.a,c=r.b;return a(ec,n,b(E_,zr,e,c));default:var $=r.a;return Ui(a(O,Tf(e),$))}}),j_=T(function(e,r,n){var t=n.a,i=n.b,o=n.c;return a(Ea,o,a(Cf,i,a(Ba,t,a(Tf,a(Er,"cube scale",e),a(A_,yf(r),1)))))}),U_=T(function(e,r,n){var t=n.hE,i=t.a,o=t.b,l=t.c,c=n.ht,$=c.a,m=c.b,s=c.c;return a(Ea,s,a(Cf,m,a(Ba,$,a(Sf,l*vn(90),a(Yi,o*vn(90),a(xf,i*vn(90),Ni(a(O,a(j_,e,r),n.gf))))))))}),uc=4294967295>>>32-lt,$c=ws,N_=T(function(e,r,n){e:for(;;){var t=uc&r>>>e,i=a($c,t,n);if(i.$){var m=i.a;return a($c,uc&r,m)}else{var o=i.a,l=e-lt,c=r,$=o;e=l,r=c,n=$;continue e}}}),W_=function(e){return e>>>5<<5},kf=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?j:ce(e,W_(n))>-1?N(a($c,uc&e,o)):N(b(N_,t,e,i))}),H_=P(Da,211/255,215/255,207/255,1),Df=function(e){var r=e.a;return r},G_=v(function(e,r){return a(Ce,H_,a(kf,a(Lt,Df(r),e),r))}),O_=T(function(e,r,n){e:for(;;){var t=a(Qo,sr,e),i=t.a,o=t.b;if(ce(Zo(i),sr)<0)return a(qu,!0,{C:r,n,r:i});var l=o,c=a(M,Hu(i),r),$=n+1;e=l,r=c,n=$;continue e}}),Xi=function(e){return e.b?b(O_,e,A,0):Nu},q_=function(e){var r=8,n=function(t){return b(bf,t/r,a(Er,"saturation",e),a(Er,"lightning",e))};return Xi(a(O,n,a(Hr,0,r)))},J_=v(function(e,r){var n=function(t){return a(U_,e,a(G_,t,q_(e)))};return Ni(a(qo,n,r.dP.hq))}),Y_=function(e){return e},X_=function(e){return Rn(.01*e)},Af=function(e){return e},Z_=function(e){return e},Q_=function(e){return{$:0,a:e}},K_=Q_,e2={$:3},r2=e2,n2=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),a2=n2,t2=function(e){return{$:1,a:e}},i2=t2,o2=function(e){return a(Dr,"height",k(e))},l2=O$,c2=function(e){return{$:2,a:e}},u2=c2,$2=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Le(c*1e3)/1e3},l=function(c){return Le(c*1e4)/100};return xa(u(["rgba(",ae(l(r)),"%,",ae(l(n)),"%,",ae(l(t)),"%,",ae(o(i)),")"]))},v2=v(function(e,r){switch(r.$){case 0:return a(c0,e,r);case 1:return a(u0,e,r);case 2:return a($0,e,r);case 3:return a(v0,e,r);case 4:return a(f0,e,r);default:return a(m0,e,r)}}),f2=v(function(e,r){switch(r.$){case 0:return a(Vp,e,r);case 1:return a(Rp,e,r);case 2:return a(jp,e,r);case 3:return a(Up,e,r);case 4:return a(Np,e,r);case 5:return a(Wp,e,r);case 6:return a(Hp,e,r);case 7:return a(Gp,e,r);default:return Op(e)}}),m2=T(function(e,r,n){return b(l0,e,r,n)}),Ff=function(e){var r=e;return r},Va=zp,vc=P(Va,1,1,1,1),Xr=T(function(e,r,n){return a(O,function(t){return a(t,r,n)},e)}),s2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),d2=v(function(e,r){var n=e,t=r.is,i=r.iw;return b(s2,n*t/i,n,n*(1-t-i)/i)}),p2=function(e){var r=e.a,n=e.b,t=e.c;return b(Bt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},fc=v(function(e,r){return p2(a(d2,e,r))}),If=v(function(e,r){return{ek:le(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cB,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cB,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cB,cB:e.cB*r.cB}}),Zr=Dp,g2=function(e){return Zr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},mc=Re(function(e,r,n,t,i){var o=t.ek?1:-1,l=P(Va,t.cB,t.cB,t.cB,o);return Ze(i,e,l,g2(t),t.ek,r,n)}),Bf=mr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,$=e,m=r,s=n,p=a(If,l,t),g=c,f=o;e=$,r=m,n=s,t=p,i=g,o=f;continue e;case 1:var _=i.b,w=a(M,F(mc,e,r,n,t,_),o.P);return{P:w,_:o._,hM:o.hM};case 3:var x=i.b,S=a(M,F(mc,e,r,n,t,x),o._);return{P:o.P,_:S,hM:o.hM};case 2:var y=i.a,C=a(M,F(mc,e,r,n,t,y),o.hM);return{P:o.P,_:o._,hM:C};default:var B=i.a;return b(Ie,P(Bf,e,r,n,t),o,B)}}),h2=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Ef=h2,sc=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),b2=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(sc,518,r,n,t)},_2=v(function(e,r){return{$:6,a:e,b:r}}),w2=_2,Vf=u([b2({ab:1,ac:0,ai:!1}),P(Ef,!1,!1,!1,!1),a(w2,0,1)]),Ra=519,dc=8,Rf=15,ja=7681,y2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Te=Ep,x2=v(function(e,r){return{$:0,a:e,b:r}}),S2=x2({d5:1,ei:0,eS:5}),br=hp,C2=S2(u([{ht:a(br,-1,-1)},{ht:a(br,1,-1)},{ht:a(br,-1,1)},{ht:a(br,1,1)}])),z2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ht"},uniforms:{}},L2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:$,j:m,k:s}}}}}}}}}}}},pc=T(function(e,r,n){var t=e.dw,i=e.db,o=e.dR,l=v(function(m,s){var p=m;return s(p)}),c=v(function(m,s){var p=m;return s(p)}),$=function(m){return a(Oe,l(m.bO),a(Oe,c(m.bz),a(Oe,c(m.bX),c(m.bY))))};return a($,n,a($,r,b(L2,t,i,o)))}),gc=function(e){return b(pc,{db:e.db,dw:e.dw,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},hc=function(e){return F(Te,u([gc(e),P(Ef,!1,!1,!1,!1)]),z2,y2,C2,{})},P2=hc({bz:ja,db:0,dw:dc,bO:Ra,dR:Rf,bX:ja,bY:ja}),M2=516,jf=5386,er=7680,T2=function(e){return a(Mt,2,e+4)},Uf=function(e){return hc({bz:er,db:Rf,dw:dc,bO:M2,dR:T2(e),bX:jf,bY:jf})},k2=T(function(e,r,n){return ir(u([b(Xr,e,n,Vf),u([Uf(r),P2])]))}),D2=v(function(e,r){return ir(a(qo,k2(e),r))}),A2=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(sc,513,r,n,t)},F2=A2({ab:1,ac:0,ai:!0}),I2=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(m){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:$,j:m}}}}}}}}}}},B2=function(e){var r=e.cy,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function($,m){var s=$.a,p=$.b,g=$.c,f=m.a,_=m.b,w=m.c;return I2(s)(p)(g)(f)(_)(w)(r)(n)(t)(i)});return a(c,o,l)},E2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Nf=v(function(e,r){var n=e,t=r;return b(E2,32774,n,t)}),V2=1,Wf=771,R2=770,bc=B2({bZ:0,fI:a(Nf,V2,Wf),b0:0,b6:a(Nf,R2,Wf),cf:0,cy:0}),Ua=u([F2,bc]),j2=function(e){var r=e;return r.eL},U2=function(e){var r=e;return r.eM},Hf=function(e){var r=e;return r.eN},N2=function(e){var r=e;return r.eO},W2=function(e){var r=e;return r.eP},Gf=function(e){var r=e;return r.eQ},Of=function(e){return D(a(gn,N2(e),j2(e)),a(gn,W2(e),U2(e)),a(gn,Gf(e),Hf(e)))},qf=function(e){var r=e;return oa(r)},H2=function(e){return e},G2=function(e){return sn({dk:H2({is:e.K,iw:e.L,dU:e.M}),dS:pn({is:e.t,iw:e.u,dU:e.v}),dT:pn({is:e.w,iw:e.x,dU:e.y}),dV:pn({is:e.z,iw:e.A,dU:e.B})})},_c=v(function(e,r){var n=e,t=r,i=n.dV,o=i,l=n.dT,c=l,$=n.dS,m=$;return{is:t.is*m.is+t.iw*m.iw+t.dU*m.dU,iw:t.is*c.is+t.iw*c.iw+t.dU*c.dU,dU:t.is*o.is+t.iw*o.iw+t.dU*o.dU}}),Jf=v(function(e,r){var n=e,t=r,i=n.dk,o=i,l=t.is-o.is,c=t.iw-o.iw,$=t.dU-o.dU,m=n.dV,s=m,p=n.dT,g=p,f=n.dS,_=f;return{is:l*_.is+c*_.iw+$*_.dU,iw:l*g.is+c*g.iw+$*g.dU,dU:l*s.is+c*s.iw+$*s.dU}}),Yf=v(function(e,r){return{dk:a(Jf,e,oa(r)),dS:a(_c,e,jn(r)),dT:a(_c,e,Un(r)),dV:a(_c,e,Nn(r))}}),Zi=function(e){var r=e;return r},Ve=v(function(e,r){var n=e,t=r;return a(wr,n,t)}),We=v(function(e,r){var n=e,t=r;return a(za,n,t)}),O2=v(function(e,r){var n=Zi(r),t=Zi(e);return{eL:a(Ve,t.eL,n.eL),eM:a(Ve,t.eM,n.eM),eN:a(Ve,t.eN,n.eN),eO:a(We,t.eO,n.eO),eP:a(We,t.eP,n.eP),eQ:a(We,t.eQ,n.eQ)}}),Lr=function(e){var r=e;return r},q2=function(e){var r=e;return D(r.is,r.iw,r.dU)},Vt=v(function(e,r){var n=e,t=r;return t+n}),J2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=Vi(Ne(t)),l=Vi(Ne(n)),c=Vi(Ne(i)),$=q2(r),m=$.a,s=$.b,p=$.c;return{eL:a(Vt,l,m),eM:a(Vt,o,s),eN:a(Vt,c,p),eO:a(gn,l,m),eP:a(gn,o,s),eQ:a(gn,c,p)}}),Xf=q(function(e,r,n,t){var i=n.f4,o=2*n.gG*r,l=2*n.gF*r,c=2*n.gE*r,$=i.dU*r,m=i.iw*r,s=i.is*r,p=Lr(Nn(e)),g=de(c*p.is)+de(l*p.iw)+de(o*p.dU),f=Lr(Un(e)),_=de(c*f.is)+de(l*f.iw)+de(o*f.dU),w=Lr(jn(e)),x=de(c*w.is)+de(l*w.iw)+de(o*w.dU),S=a(J2,D(x,_,g),a(Jf,e,b(It,s,m,$)));if(t.$)return N(S);var y=t.a;return N(a(O2,y,S))}),wc=q(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var l=e,c=r,$=n,m=o;e=l,r=c,n=$,t=m;continue e;case 1:var s=i.a,p=P(Xf,e,r,s,n),l=e,c=r,$=p,m=o;e=l,r=c,n=$,t=m;continue e;case 2:var l=e,c=r,$=n,m=o;e=l,r=c,n=$,t=m;continue e;case 3:var s=i.a,p=P(Xf,e,r,s,n),l=e,c=r,$=p,m=o;e=l,r=c,n=$,t=m;continue e;case 4:var g=i.a,l=e,c=r,$=P(wc,e,r,n,g),m=o;e=l,r=c,n=$,t=m;continue e;default:var f=i.a,_=i.b,w=a(Yf,G2(f),e),x=r*f.cB,l=e,c=r,$=P(wc,w,x,n,u([_])),m=o;e=l,r=c,n=$,t=m;continue e}}else return n}),Na=wp,Wa=yp,Ha=xp,Zf=function(e){return{$:4,a:e}},Y2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(M,n,r);e=i,r=o;continue e}else return r}),Rt=function(e){return Zf(a(Y2,e,A))},X2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cB:1},Z2=function(e){var r=e;return r},Qf=hc({bz:ja,db:0,dw:dc,bO:Ra,dR:255,bX:ja,bY:ja}),Ga=Vs,bn=0,Q2=function(e){var r=e,n=a(wr,de(r.is),a(wr,de(r.iw),de(r.dU)));if(n){var t=r.dU/n,i=r.iw/n,o=r.is/n,l=Ga(o*o+i*i+t*t);return l*n}else return bn},$r={b0:0,f3:!1,cf:0,dt:0,cy:0,dI:0,is:0,iw:0,dU:0},Pr=v(function(e,r){var n=e,t=r;return Zr({eu:n.is,ev:n.cy,ew:t.is,ex:t.cy,ey:n.iw,ez:n.cf,eA:t.iw,eB:t.cf,eC:n.dU,eD:n.b0,eE:t.dU,eF:t.b0,eG:n.dI,eH:n.dt,eI:t.dI,eJ:t.dt})}),jt=L({bF:a(Pr,$r,$r),cm:a(Pr,$r,$r),cn:a(Pr,$r,$r),co:a(Pr,$r,$r)},P(Va,0,0,0,0)),Kf=514,em=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(sc,515,r,n,t)},rm=240,K2=u([em({ab:1,ac:0,ai:!0}),gc({bz:er,db:rm,dw:0,bO:Kf,dR:0,bX:er,bY:er}),bc]),ew=v(function(e,r){var n=e,t=r.he,i=r.gw,o=r.fM,l=Ne(t),c=l,$=Ne(i),m=$,s=n.dv;if(s.$){var g=s.a;return tl(m)?Zr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Zr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-c),eF:-(m+c)/(m-c),eG:0,eH:0,eI:0,eJ:1})}else{var p=s.a;return tl(m)?Zr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):Zr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(m+c)/(m-c),eF:-2*m*c/(m-c),eG:0,eH:0,eI:-1,eJ:0})}}),Qi=v(function(e,r){return(1&e>>r)==1?0:1}),rw=function(e){return u([em({ab:1,ac:0,ai:!0}),gc({bz:er,db:rm,dw:e,bO:Kf,dR:0,bX:er,bY:er}),bc])},nw=T(function(e,r,n){return ir(a(O,function(t){var i=t<<4,o=P(Va,a(Qi,t,0),a(Qi,t,1),a(Qi,t,2),a(Qi,t,3));return b(Xr,e,L(r,o),rw(i))},a(Hr,1,a(Mt,2,n)-1)))}),Oa=function(e){var r=e;return r},aw=Ap,nm=function(e){var r=e;return hn(Nn(r))},tw={dk:zr,dS:Ri,dT:lc,dV:ji},Ki=function(e){var r=e;return r},iw=function(e){var r=Ki(oa(e)),n=Lr(Nn(e)),t=Lr(Un(e)),i=Lr(jn(e));return Zr({eu:i.is,ev:t.is,ew:n.is,ex:r.is,ey:i.iw,ez:t.iw,eA:n.iw,eB:r.iw,eC:i.dU,eD:t.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},ow=v(function(e,r){var n=r;return iw(a(Yf,n,e))}),lw=function(e){return a(ow,tw,e)},cw=function(e){var r=e;return r.dL},uw=function(e){var r=e;return jn(r)},$w=T(function(e,r,n){var t=e,i=r,o=n;return{is:t,iw:i,dU:o}}),vw=function(e){var r=e;return Un(r)},fw=function(e){var r=cw(e.f0),n=sn({dk:qf(r),dS:uw(r),dT:vw(r),dV:hn(nm(r))}),t=Rt(e.a8),i=t,o=P(wc,n,1,j,u([i]));if(o.$===1)return A;var l=o.a,c=lw(r),$=a(ye,.99,a(Ve,Ne(e.a3),Ol(Hf(l)))),m=Of(l),s=m.a,p=m.b,g=m.c,f=Q2(b($w,s,p,g)),_=a(ye,1.01,a(Vt,f,Ol(Gf(l)))),w=a(ew,e.f0,{fM:e.fM,gw:_,he:$}),x=aw(w).eJ,S=x?Lr(hn(nm(r))):Oa(qf(r)),y=function(){var me=e.cF;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var xe=me.a;return L(3,xe);case 4:var xe=me.a;return L(4,xe);default:return L(5,0)}}(),C=y.a,B=y.b,J=e.cd,Z=J,H=a(fc,Z,e.cJ),Y=H,X=Zr({eu:0,ev:S.is,ew:Na(Y),ex:e.ff,ey:0,ez:S.iw,eA:Wa(Y),eB:Z2(f),eC:0,eD:S.dU,eE:Ha(Y),eF:C,eG:0,eH:x,eI:0,eJ:B}),V=Ze(Bf,X,c,w,X2,i,{P:A,_:A,hM:A}),ne=e.cl;switch(ne.$){case 0:var ve=ne.a;return ir(u([b(Xr,V.P,L(ve,vc),Ua),b(Xr,V._,jt,Ua)]));case 1:var ve=ne.a;return ir(u([b(Xr,V.P,jt,Ua),u([Qf]),b(Xr,V.hM,ve.bF,Vf),u([Uf(0)]),b(Xr,V.P,L(ve,vc),K2),b(Xr,V._,jt,Ua)]));default:var we=ne.a,fe=ne.b;return ir(u([b(Xr,V.P,L(fe,vc),Ua),u([Qf]),a(D2,V.hM,we),b(nw,V.P,fe,qn(we)),b(Xr,V._,jt,Ua)]))}},mw=function(e){return a(Dr,"width",k(e))},sw=v(function(e,r){var n=u([i2(1),u2(0),K_(!0),P(a2,0,0,0,0)]),t=function(){var C=e.cN;switch(C.$){case 0:return D(n,"0",1);case 1:return D(a(M,r2,n),"1",1);default:var B=C.a;return D(n,"0",B)}}(),i=t.a,o=t.b,l=t.c,c=e.a4,$=c.a,m=c.b,s=Ff(m),p=a(Me,"height",k(s)+"px"),g=Ff($),f=g/s,_=a(ya,function(C){return fw({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,cd:C.cd,cl:C.cl,ff:l,cF:C.cF,cJ:C.cJ})},r),w=a(Me,"width",k(g)+"px"),x=e.a1,S=x,y=$2(S);return b(l2,"div",u([a(Me,"padding","0px"),w,p]),u([L(o,b(m2,i,u([mw(Le(g*l)),o2(Le(s*l)),w,p,a(Me,"display","block"),a(Me,"background-color",y)]),_))]))}),dw=function(e){return a(sw,{cN:e.cN,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},u([{a8:e.a8,cd:e.cd,cl:e.cl,cF:e.cF,cJ:e.cJ}]))},am=function(e){return e},tm=am({is:.31271,iw:.32902}),pw=v(function(e,r){var n=e,t=Lr(r.gn),i=t.is,o=t.iw,l=t.dU,c=a(fc,r.c$,r.cS),$=c;return{b0:Ha($),f3:n,cf:Wa($),dt:0,cy:Na($),dI:1,is:-i,iw:-o,dU:-l}}),gw=function(e){return e},hw=function(e){return gw(1.2*a(Mt,2,e))},yc=function(e){return e},bw={$:0},_w=bw,im=function(e){return e},ww=v(function(e,r){var n=e,t=r;return ce(t,n)>0}),om=function(e){var r=e;return r},yw=function(e){e:for(;;){if(le(e.g_,bn)&&le(e.g$,bn))return $r;if(a(ww,Ne(e.g_),Ne(e.g$))){var r={cS:e.cS,g_:e.g$,g$:e.g_,fm:hn(e.fm)};e=r;continue e}else{var n=de(om(e.g$)/hr),t=de(om(e.g_)/hr),i=Lr(e.fm),o=i.is,l=i.iw,c=i.dU,$=a(fc,im(1),e.cS),m=$;return{b0:t*Ha(m),f3:!1,cf:t*Wa(m),dt:n/t,cy:t*Na(m),dI:3,is:o,iw:l,dU:c}}}},lm=function(e){return yw({cS:e.cS,g_:e.c$,g$:bn,fm:e.fm})},xw=function(e){var r=e;return r},cm=function(e){var r=b(wf,1667,25e3,xw(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return am({is:n,iw:t})},um=function(e){return e},Sw=cm(um(12e3)),Cw=cm(um(5600)),zw=function(e){return{$:2,a:e}},Lw=function(e){return zw(e)},Pw=v(function(e,r){return{$:2,a:e,b:r}}),$m=function(e){return{$:0,a:e}},eo=function(e){var r=e;return r},Mw=function(e){var r=e;return r.f3},Tw=$m(jt.a),kw=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?L(a(M,t,o),l):L(o,a(M,t,l))});return b(Ge,n,L(A,A),r)}),Dw=function(e){var r=e;return Zr({eu:r.is,ev:r.cy,ew:0,ex:0,ey:r.iw,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dI,eH:r.dt,eI:0,eJ:0})},Aw=be(function(e,r,n,t,i,o,l,c){var $=a(kw,Mw,u([eo(e),eo(r),eo(n),eo(t)])),m=$.a,s=$.b;if(m.b){var p=U(m,s);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var g=p.a,f=p.b,_=f.a,w=f.b,x=w.a,S=w.b,y=S.a;return a(Pw,a(O,Dw,m),{bF:a(Pr,g,_),cm:a(Pr,x,y),cn:a(Pr,i,o),co:a(Pr,l,c)})}else return Tw}else return $m({bF:a(Pr,e,r),cm:a(Pr,n,t),cn:a(Pr,i,o),co:a(Pr,l,c)})}),Fw=T(function(e,r,n){return Qa(Aw,e,r,n,$r,$r,$r,$r,$r)}),Iw=function(e){var r=a(pw,Z_(e.hM),{cS:Cw,gn:e.h1,c$:yc(8e4)}),n=lm({cS:Sw,c$:yc(2e4),fm:e.fm}),t=lm({cS:tm,c$:yc(15e3),fm:hn(e.fm)}),i=b(Fw,r,n,t);return dw({cN:Lw(e.cW),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:hw(15),cl:i,cF:_w,cJ:tm})},vm=q(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),Bw=q(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),fm=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),mm=q(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),Ew=q(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),Vw=q(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),Rw=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),xc=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,t=e.c;return P(Rw,r,n,t,1);case 2:var r=e.a,n=e.b,t=e.c;return P(vm,r,n,t,1);case 3:var r=e.a,i=e.b,t=e.c;return P(Bw,r,i,t,1);case 4:var r=e.a,i=e.b,t=e.c;return P(fm,r,i,t,1);case 5:var r=e.a,i=e.b,t=e.c;return P(Vw,r,i,t,1);case 6:var r=e.a,i=e.b,t=e.c;return P(mm,r,i,t,1);case 7:var r=e.a,i=e.b,t=e.c;return P(Ew,r,i,t,1);case 8:return e;case 9:return e;default:return e}},Sc={$:0},jw=be(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var $=c.a,m=c.b,s=Zi(l($)),p=a(We,s.eO,e),g=a(Ve,s.eL,r),f=a(We,s.eP,n),_=a(Ve,s.eM,t),w=a(We,s.eQ,i),x=a(Ve,s.eN,o),S=l,y=m;e=p,r=g,n=f,t=_,i=w,o=x,l=S,c=y;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),Uw=T(function(e,r,n){var t=Zi(e(r));return Qa(jw,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),Cc=v(function(e,r){var n=e,t=r;return ce(t,n)<1}),sm=function(e){return a(Cc,e.eL,e.eO)&&a(Cc,e.eM,e.eP)&&a(Cc,e.eN,e.eQ)?e:{eL:a(Ve,e.eO,e.eL),eM:a(Ve,e.eP,e.eM),eN:a(Ve,e.eQ,e.eN),eO:a(We,e.eO,e.eL),eP:a(We,e.eP,e.eM),eQ:a(We,e.eQ,e.eN)}},Ut=function(e){var r=e;return r},dm=function(e){var r=Ut(e),n=r.a,t=r.b,i=r.c,o=ca(n),l=ua(n),c=$a(n),$=ca(t),m=ua(t),s=$a(t),p=ca(i),g=ua(i),f=$a(i);return sm({eL:a(Ve,o,a(Ve,$,p)),eM:a(Ve,l,a(Ve,m,g)),eN:a(Ve,c,a(Ve,s,f)),eO:a(We,o,a(We,$,p)),eP:a(We,l,a(We,m,g)),eQ:a(We,c,a(We,s,f))})},pm=Sp,vr=function(e){return pm(Ki(e))},gm=function(e){var r=e;return r},ro=function(e){return pm(gm(e))},Nw=v(function(e,r){var n=e,t=r;return{is:t.iw*n.dU-t.dU*n.iw,iw:t.dU*n.is-t.is*n.dU,dU:t.is*n.iw-t.iw*n.is}}),zc=v(function(e,r){var n=e,t=r;return{is:t.is-n.is,iw:t.iw-n.iw,dU:t.dU-n.dU}}),Ww={is:0,iw:0,dU:0},Hw=v(function(e,r){var n=e,t=r,i=a(wr,de(t.is),a(wr,de(t.iw),de(t.dU)));if(i){var o=t.dU/i,l=t.iw/i,c=t.is/i,$=Ga(c*c+l*l+o*o);return{is:n*c/$,iw:n*l/$,dU:n*o/$}}else return Ww}),Gw=Hw(im(1)),hm=T(function(e,r,n){var t=a(zc,r,n),i=a(zc,e,r);return Gw(a(Nw,t,i))}),Ow=function(e){var r=Ut(e),n=r.a,t=r.b,i=r.c,o=ro(b(hm,n,t,i));return D({q:o,ht:vr(n)},{q:o,ht:vr(t)},{q:o,ht:vr(i)})},qw=v(function(e,r){return{$:2,a:e,b:r}}),bm=qw({d5:3,ei:0,eS:4}),Jw=function(e){if(e.b){var r=e.a,n=e.b,t=bm(a(O,Ow,e)),i=b(Uw,dm,r,n);return P(vm,i,e,t,0)}else return Sc},Mr=T(function(e,r,n){return D(e,r,n)}),_m=function(){var e=Rn(1),r=Rn(1),n=Rn(1),t=a(ye,-.5,e),i=a(ye,-.5,r),o=a(ye,-.5,n),l=b(qe,o,i,t),c=a(ye,.5,e),$=b(qe,o,i,c),m=a(ye,.5,r),s=b(qe,o,m,t),p=b(qe,o,m,c),g=a(ye,.5,n),f=b(qe,g,i,t),_=b(qe,g,m,t),w=b(qe,g,i,c),x=b(qe,g,m,c);return xc(Jw(u([b(Mr,l,_,f),b(Mr,l,s,_),b(Mr,$,w,x),b(Mr,$,x,p),b(Mr,f,_,x),b(Mr,f,x,w),b(Mr,l,p,s),b(Mr,l,$,p),b(Mr,l,f,w),b(Mr,l,w,$),b(Mr,s,x,_),b(Mr,s,p,x)])))}(),no={$:0},Yw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Xw=T(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),$=e(t),m=ro(b(hm,$,c,l)),s={q:m,ht:vr($)},p={q:m,ht:vr(c)},g={q:m,ht:vr(l)};return a(M,s,a(M,p,a(M,g,n)))}),Lc=function(e){var r=e;return r.H},Zw=q(function(e,r,n,t){if(r.$===1)return j;var i=r.a;if(n.$===1)return j;var o=n.a;if(t.$===1)return j;var l=t.a;return N(b(e,i,o,l))}),Pc=function(e){var r=e;return r.au},Mc=v(function(e,r){return a(kf,e,Pc(r))}),Qw=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(Zw,T(function(l,c,$){return D(l,c,$)}),a(Mc,t,e),a(Mc,i,e),a(Mc,o,e))};return a(Ln,r,Lc(e))},Kw=v(function(e,r){return!a(vt,a(dt,q0,e),r)}),wm=v(function(e,r){var n=Df(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&ce(o,n)<0&&l>=0&&ce(l,n)<0&&c>=0&&ce(c,n)<0};return a(Kw,t,r)?{H:r,au:e}:{H:a(V$,t,r),au:e}}),ey=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Nt=ey({d5:1,ei:3,eS:4}),ao=v(function(e,r){var n=Oa(r),t=Oa(e);return L(D(t.is,t.iw,t.dU),D(n.is,n.iw,n.dU))}),ym=b(Bt,0,0,0),Tc=mr(function(e,r,n,t,i,o){var l=o.a,c=o.b,$=o.c,m=a(si,a(ao,e,r),i);if(m.$){var p={q:ym,ht:vr(r)},g={q:ym,ht:vr(e)},f=$+1,_=$;return D(a(M,D(n,_,f),a(M,D(n,f,t),l)),a(M,p,a(M,g,c)),$+2)}else{var s=m.a;return D(a(M,D(n,s,t),l),c,$)}}),ry=Re(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,$=o.c,m=n.b,s=e($),p=e(c),g=e(l),f=t+2,_=t+1,w=t,x=e,S=r,y=m,C=t+3,B=Ze(Tc,s,g,f,w,r,Ze(Tc,p,s,_,f,r,Ze(Tc,g,p,w,_,r,i)));e=x,r=S,n=y,t=C,i=B;continue e}else{var J=i,Z=J.a,H=J.b;return L(Z,nr(H))}}),ny=Re(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,$=o.c,m=r.b,s=e($),p=e(c),g=e(l),f=n+2,_=n+1,w=n,x=b(ba,a(ao,g,s),f,b(ba,a(ao,s,p),_,b(ba,a(ao,p,g),w,i))),S=a(M,D(w,_,f),t),y=e,C=m,B=n+3,J=S,Z=x;e=y,r=C,n=B,t=J,i=Z;continue e}else return D(t,i,n)}),va=T(function(e,r,n){var t=Qw(n),i=b(Ge,Xw(r),A,t),o=F(ny,r,t,0,A,fl),l=o.a,c=o.b,$=o.c,m=F(ry,r,c,t,0,D(l,A,$)),s=m.a,p=m.b,g=Tn(p)?i:U(i,p);return b(Yw,e,a(wm,Xi(g),s),a(Nt,g,s))}),kc=function(e){return{H:a(O,function(r){return D(3*r,3*r+1,3*r+2)},a(Hr,0,qn(e)-1)),au:Xi(ir(a(O,function(r){var n=r.a,t=r.b,i=r.c;return u([n,t,i])},e)))}},xm=function(e){switch(e.$){case 0:return no;case 1:var r=e.a,n=e.b,t=a(O,Ut,n);return b(va,r,Ir,kc(t));case 2:var r=e.a,n=e.b,t=a(O,Ut,n);return b(va,r,Ir,kc(t));case 3:var r=e.a,i=e.b;return b(va,r,Ir,i);case 4:var r=e.a,i=e.b;return b(va,r,function(o){return o.ht},i);case 5:var r=e.a,i=e.b;return b(va,r,function(o){return o.ht},i);case 6:var r=e.a,i=e.b;return b(va,r,function(o){return o.ht},i);case 7:var r=e.a,i=e.b;return b(va,r,function(o){return o.ht},i);case 8:return no;case 9:return no;default:return no}},Sm=xm(_m),Cm={$:0},E=Cm,Je=v(function(e,r){return{$:1,a:e,b:r}}),ay={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},ty=1029,iy=function(e){return{$:5,a:e}},zm=function(e){var r=e;return iy(r)},oy=zm(ty),ly=1028,cy=zm(ly),fr=T(function(e,r,n){return r===1?e?a(M,oy,n):a(M,cy,n):n}),Lm={src:`
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
    `,attributes:{position:"ht",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Dc=q(function(e,r,n,t){return a(Je,r,be(function(i,o,l,c,$,m,s,p){return F(Te,b(fr,c,t,p),Lm,ay,n,{b7:e,c:l,d:o,e:m,f:i,g:$})}))}),Ac={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},Pm={src:`
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
    `,attributes:{position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},_n=q(function(e,r,n,t){return a(Je,r,be(function(i,o,l,c,$,m,s,p){return F(Te,b(fr,c,t,p),Pm,Ac,n,{aO:e,c:l,d:o,e:m,f:i,g:$})}))}),Mm=v(function(e,r){return{$:3,a:e,b:r}}),uy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Tm={src:`
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
    `,attributes:{position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},$y=q(function(e,r,n,t){return a(Mm,n,be(function(i,o,l,c,$,m,s,p){return F(Te,p,Tm,uy,t,{aO:e,c:l,d:o,cw:r,e:m,f:i,g:$})}))}),Fc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Wt=function(e){var r=e;return r},to=Cp,wn=Re(function(e,r,n,t,i){return a(Je,n,be(function(o,l,c,$,m,s,p,g){return F(Te,b(fr,$,i,g),Pm,Fc,t,{a6:a(to,Wt(r),e),c,d:l,e:s,f:o,g:m})}))}),vy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},fy=Re(function(e,r,n,t,i){return a(Mm,t,be(function(o,l,c,$,m,s,p,g){return F(Te,g,Tm,vy,i,{a6:a(to,Wt(r),e),c,d:l,cw:n,e:s,f:o,g:m})}))}),km={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dc",sceneProperties:"f",viewMatrix:"g"}},Dm={src:`
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
    `,attributes:{normal:"q",position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},io=q(function(e,r,n,t){return a(Je,r,be(function(i,o,l,c,$,m,s,p){var g=s.a,f=s.b;return F(Te,b(fr,c,t,p),Dm,km,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,dc:e,c:l,d:o,e:m,f:i,g:$})}))}),Am={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"dd",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Fm={src:`
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
    `,attributes:{normal:"q",position:"ht",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},my=mr(function(e,r,n,t,i,o){return a(Je,t,be(function(l,c,$,m,s,p,g,f){var _=g.a,w=g.b;return F(Te,b(fr,m,o,f),Fm,Am,i,{U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,dd:e,c:$,d:c,bg:r,e:p,f:l,bm:n,g:s})}))}),Im={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cR",constantBaseColor:"cT",constantMetallic:"cU",constantRoughness:"cV",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dg",normalMapTexture:"bg",roughnessTexture:"dA",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},sy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(m){return function(s){return a(Je,$,be(function(p,g,f,_,w,x,S,y){var C=S.a,B=S.b;return F(Te,b(fr,_,s,y),Fm,Im,m,{cR:e,cT:r,cU:o,cV:t,U:B,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dg:i,c:f,d:g,bg:l,e:x,dA:n,f:p,bm:c,g:w})}))}}}}}}}}}}},Bm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cQ",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"df",roughness:"dz",sceneProperties:"f",viewMatrix:"g"}},oo=mr(function(e,r,n,t,i,o){return a(Je,t,be(function(l,c,$,m,s,p,g,f){var _=g.a,w=g.b;return F(Te,b(fr,m,o,f),Dm,Bm,i,{cQ:e,U:w,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,df:n,c:$,d:c,e:p,dz:r,f:l,g:s})}))}),dy=function(e){return{$:0,a:e}},Em=v(function(e,r){return{$:1,a:e,b:r}}),Ht=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),py=function(e){return P(Va,Na(e),Wa(e),Ha(e),1)},Ic=P(Va,0,0,0,0),lo=v(function(e,r){if(r.$){var t=r.a.E;return L(t,Ic)}else{var n=r.a;return L(e,py(n))}}),Vm=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(Em,L(i,Ic),a(Ht,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Em,a(lo,i,e),a(Ht,i,r))}else{var t=n.a.a;return n.b.a,dy(t)}}),gy=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),co=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),hy=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),by=function(e){return a(br,e,1)},Bc=a(br,0,0),qa=v(function(e,r){if(r.$){var t=r.a.E;return L(t,Bc)}else{var n=r.a;return L(e,by(n))}}),Rm=q(function(e,r,n,t){var i=P(hy,e,r,n,t);if(i.a.$){var $=i.a.a.E;return P(co,L($,Ic),a(qa,$,r),a(qa,$,n),a(Ht,$,t))}else if(i.b.$){var $=i.b.a.E;return P(co,a(lo,$,e),L($,Bc),a(qa,$,n),a(Ht,$,t))}else if(i.c.$){var $=i.c.a.E;return P(co,a(lo,$,e),a(qa,$,r),L($,Bc),a(Ht,$,t))}else if(i.d.$){var $=i.d.a.E;return P(co,a(lo,$,e),a(qa,$,r),a(qa,$,n),L($,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,b(gy,o,l,c)}}),_y={src:`
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
    `,attributes:{},uniforms:{backlight:"cO",colorTexture:"b7",sceneProperties:"f"}},Ec=Re(function(e,r,n,t,i){return a(Je,n,be(function(o,l,c,$,m,s,p,g){return F(Te,b(fr,$,i,g),Lm,_y,t,{cO:Wt(r),b7:e,c,d:l,e:s,f:o,g:m})}))}),jm={src:`
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
    `,attributes:{normal:"q",position:"ht",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},wy=q(function(e,r,n,t){return a(Je,r,be(function(i,o,l,c,$,m,s,p){var g=s.a,f=s.b;return F(Te,b(fr,c,t,p),jm,Am,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,dd:e,c:l,d:o,bg:e,e:m,f:i,bm:0,g:$})}))}),yy=xo(function(e,r,n,t,i,o,l,c,$){return a(Je,l,be(function(m,s,p,g,f,_,w,x){var S=w.a,y=w.b;return F(Te,b(fr,g,$,x),jm,Im,c,{cR:e,cT:r,cU:o,cV:t,U:y,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,dg:i,c:p,d:s,bg:e,e:_,dA:n,f:m,bm:0,g:f})}))}),Gt=T(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),xy=function(e){var r=e;return b(Gt,r.eO,r.eL,.5)},Sy=function(e){var r=e;return b(Gt,r.eP,r.eM,.5)},Cy=function(e){var r=e;return b(Gt,r.eQ,r.eN,.5)},zy=function(e){return b(qe,xy(e),Sy(e),Cy(e))},ie=function(e){var r=Of(e),n=r.a,t=r.b,i=r.c;return{f4:Ki(zy(e)),gE:n/2,gF:t/2,gG:i/2}},Vc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var t=r.a,i=r.c,o=r.d;return P(Dc,c,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return P(Dc,c,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return P(Dc,c,ie(t),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var t=r.a,i=r.c,o=r.d;return P(_n,n,ie(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return P(_n,n,ie(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return P(_n,n,ie(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return P(_n,n,ie(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return P(_n,n,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return P(_n,n,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return P(_n,n,ie(t),i,o);case 8:var t=r.a,i=r.c;return P(_n,n,ie(t),i,0);case 9:var t=r.a,i=r.c;return P(_n,n,ie(t),i,0);default:var t=r.a,l=r.b,i=r.d;return P($y,n,l,ie(t),i)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var t=r.a,i=r.c,o=r.d;return F(Ec,c,m,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return F(Ec,c,m,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return F(Ec,c,m,ie(t),i,o);case 8:return E;case 9:return E;default:return E}}else{var $=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var t=r.a,i=r.c,o=r.d;return F(wn,$,m,ie(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return F(wn,$,m,ie(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return F(wn,$,m,ie(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return F(wn,$,m,ie(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return F(wn,$,m,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return F(wn,$,m,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return F(wn,$,m,ie(t),i,o);case 8:var t=r.a,i=r.c;return F(wn,$,m,ie(t),i,0);case 9:var t=r.a,i=r.c;return F(wn,$,m,ie(t),i,0);default:var t=r.a,l=r.b,i=r.d;return F(fy,$,m,l,ie(t),i)}}case 2:e.a;var s=e.b,p=e.c,g=a(Vm,s,p);if(g.$){var w=g.a,x=w.a;w.b;var S=g.b,y=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var t=r.a,i=r.c,_=r.d;return P(wy,x,ie(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return Ze(my,x,y,C,ie(t),i,_);case 8:return E;case 9:return E;default:return E}}else{var f=g.a;switch(r.$){case 0:return E;case 1:return E;case 2:var t=r.a,i=r.c,_=r.d;return P(io,f,ie(t),i,_);case 3:return E;case 4:var t=r.a,i=r.c,_=r.d;return P(io,f,ie(t),i,_);case 5:return E;case 6:var t=r.a,i=r.c,_=r.d;return P(io,f,ie(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return P(io,f,ie(t),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var B=e.b,J=e.c,Z=e.d,p=e.e,H=P(Rm,B,J,Z,p);if(H.$){var ne=H.a,ve=ne.a,we=ne.b,fe=H.b,me=fe.a,xe=fe.b,se=H.c,Fe=se.a,ke=se.b,Xe=H.d,y=Xe.a,C=Xe.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var t=r.a,i=r.c,o=r.d;return ps(yy,ve,we,me,xe,Fe,ke,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return sy(ve)(we)(me)(xe)(Fe)(ke)(y)(C)(ie(t))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=H.a,X=H.b,V=H.c;switch(r.$){case 0:return E;case 1:return E;case 2:var t=r.a,i=r.c,o=r.d;return Ze(oo,Y,X,V,ie(t),i,o);case 3:return E;case 4:var t=r.a,i=r.c,o=r.d;return Ze(oo,Y,X,V,ie(t),i,o);case 5:return E;case 6:var t=r.a,i=r.c,o=r.d;return Ze(oo,Y,X,V,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return Ze(oo,Y,X,V,ie(t),i,o);case 8:return E;case 9:return E;default:return E}}}}),Rc=function(e){var r=e;return r.is},jc=function(e){var r=e;return r.iw},Uc=function(e){var r=e;return r.dU},Ly=function(e){var r=e,n=Uc(r.dV),t=jc(r.dV),i=Rc(r.dV),o=Uc(r.dT),l=jc(r.dT),c=Rc(r.dT),$=Uc(r.dS),m=jc(r.dS),s=Rc(r.dS);return s*l*n+m*o*i+$*c*t-$*l*i-m*c*n-s*o*t>0},Py=function(e){var r=Ki(oa(e)),n=Lr(Nn(e)),t=Lr(Un(e)),i=Lr(jn(e));return{ek:Ly(e),t:i.is,u:i.iw,v:i.dU,w:t.is,x:t.iw,y:t.dU,z:n.is,A:n.iw,B:n.dU,K:r.is,L:r.iw,M:r.dU,cB:1}},Ja=v(function(e,r){return{$:5,a:e,b:r}}),Um=v(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var t=n.a,i=n.b,o=a(If,t,e);return a(Ja,o,i);case 1:return a(Ja,e,n);case 3:return a(Ja,e,n);case 2:return a(Ja,e,n);default:return a(Ja,e,n)}}),Nm=v(function(e,r){return a(Um,Py(e),r)}),uo=function(e){return{$:2,a:e}},My=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{is:n*o.is,iw:t*o.iw,dU:i*o.dU},gE:n*r.gE,gF:t*r.gF,gG:i*r.gG}}),Ty=Pp,ky=Lp,Wm=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function($){return function(m){var s=e.a,p=e.b,g=e.c,f=ky(t),_=f.is,w=f.iw,x=f.dU,S=f.ft,y=Ty({ft:S,is:_*s,iw:w*p,dU:x*g});return Qa(r,n,y,i,o,l,c,$,m)}}}}}}}}}},Nc=v(function(e,r){switch(r.$){case 0:return Cm;case 5:var n=r.a,t=r.b;return a(Ja,n,a(Nc,e,t));case 1:var i=r.a,o=r.b;return a(Je,a(My,e,i),a(Wm,e,o));case 3:return r;case 2:var o=r.a;return uo(a(Wm,e,o));default:var l=r.a;return Zf(a(O,Nc(e),l))}}),Wc=v(function(e,r){var n=r;return a(Nc,e,n)}),Hc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Hm=7683,Gm=7682,Dy=b(pc,{db:0,dw:0,dR:15},{bz:er,bO:Ra,bX:er,bY:Hm},{bz:er,bO:Ra,bX:er,bY:Gm}),Ay=b(pc,{db:0,dw:0,dR:15},{bz:er,bO:Ra,bX:er,bY:Gm},{bz:er,bO:Ra,bX:er,bY:Hm}),Gc=v(function(e,r){return e?a(M,Ay,r):a(M,Dy,r)}),Fy={src:`
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
    `,attributes:{normal:"q",position:"ht"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},Iy=function(e){if(e.$){var r=e.c;return N(be(function(n,t,i,o,l,c,$,m){return F(Te,a(Gc,o,m),Fy,Hc,r,{c:i,d:t,e:c,f:n,cC:$,g:l})}))}else return j},$o=function(e){var r=Iy(e);if(r.$)return E;var n=r.a;return uo(n)},By=q(function(e,r,n,t){var i=a(Vc,n,_m),o=function(){var s=L(e,r);return s.a?s.b?Rt(u([i,$o(Sm)])):i:s.b?$o(Sm):E}(),l=Hi(t),c=l.a,$=l.b,m=l.c;return a(Nm,Wi(t),a(Wc,D(c,$,m),o))}),Ey=v(function(e,r){return P(By,!0,!0,e,r)}),Om=v(function(e,r){return{$:0,a:e,b:r}}),Vy=function(e){var r=Dl(e),n=r.hx,t=r.gB,i=r.fS;return b(Bt,n,t,i)},Ry=function(e){return a(Om,0,Zl(Vy(e)))},Ot=function(e){var r=e;return la(r)},jy=v(function(e,r){var n=r;return n/e}),qm=function(e){var r=e;return{is:la(r),iw:Ia(r)}},Uy=v(function(e,r){var n=e.ht,t=e.q;return a(M,{q:ro(t),ht:vr(n)},r)}),Ny=Zt(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,$=l.b,m=Ha(c.ht),s=Wa(c.ht),p=Na(c.ht),g=a(za,e,p),f=a(wr,r,p),_=a(za,n,s),w=a(wr,t,s),x=a(za,i,m),S=a(wr,o,m),y=$;e=g,r=f,n=_,t=w,i=x,o=S,l=y;continue e}else return sm({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),Jm=v(function(e,r){var n=Ha(e.ht),t=Wa(e.ht),i=Na(e.ht);return So(Ny,i,i,t,t,n,n,r)}),Wy=function(e){var r=b(Au,Uy,A,Pc(e));if(r.b){var n=r.a,t=r.b,i=a(Nt,r,Lc(e)),o=a(Jm,n,t);return P(fm,o,e,i,0)}else return Sc},Ym=v(function(e,r){var n=e,t=r,i=n.dT,o=i,l=n.dS,c=l;return{is:t.is*c.is+t.iw*o.is,iw:t.is*c.iw+t.iw*o.iw,dU:t.is*c.dU+t.iw*o.dU}}),vo=function(e){var r=e;return Ia(r)},qt=function(e){var r=e;return r},Oc=function(e){return mn(2*hr*e)},Xm=sf({dk:zr,dS:Ri,dT:lc}),Zm=function(){var e=72,r=a(jy,e,Oc(1)),n=Rn(1),t=qt(Jl),i=qt(pf),o=Rn(1),l=a(ye,.5,o),c=b(qe,bn,bn,l),$=a(ye,-.5,o),m=b(qe,bn,bn,$),s=function(f){var _=a(ye,f,r),w=qt(a(Ym,Xm,qm(_))),x=a(ye,Ot(_),n),S=a(ye,vo(_),n),y=b(qe,x,S,l),C=b(qe,x,S,$),B=a(Lt,e,f+1),J=a(ye,B,r),Z=qt(a(Ym,Xm,qm(J))),H=a(ye,Ot(J),n),Y=a(ye,vo(J),n),X=b(qe,H,Y,$),V=b(qe,H,Y,l);return u([D({q:i,ht:m},{q:i,ht:X},{q:i,ht:C}),D({q:w,ht:C},{q:Z,ht:X},{q:Z,ht:V}),D({q:w,ht:C},{q:Z,ht:V},{q:w,ht:y}),D({q:t,ht:c},{q:t,ht:y},{q:t,ht:V})])},p=a(O,s,a(Hr,0,e-1)),g=kc(ir(p));return xc(Wy(g))}(),Qm=xm(Zm),Hy=function(e){var r=e,n=de(r.dU),t=de(r.iw),i=de(r.is);if(ce(i,t)<1)if(ce(i,n)<1){var o=Ga(r.dU*r.dU+r.iw*r.iw);return{is:0,iw:-r.dU/o,dU:r.iw/o}}else{var o=Ga(r.iw*r.iw+r.is*r.is);return{is:-r.iw/o,iw:r.is/o,dU:0}}else if(ce(t,n)<1){var o=Ga(r.dU*r.dU+r.is*r.is);return{is:r.dU/o,iw:0,dU:-r.is/o}}else{var o=Ga(r.is*r.is+r.iw*r.iw);return{is:-r.iw/o,iw:r.is/o,dU:0}}},Gy=function(e){var r=Hy(e),n=r,t=n,i=e,o=i,l={is:o.iw*t.dU-o.dU*t.iw,iw:o.dU*t.is-o.is*t.dU,dU:o.is*t.iw-o.iw*t.is};return L(r,l)},Oy=function(e){var r=ql(e),n=Gy(r),t=n.a,i=n.b;return sn({dk:Lf(e),dS:t,dT:i,dV:r})},qy=q(function(e,r,n,t){var i=Oy(cc(t)),o=a(Vc,n,Zm),l=function(){var p=L(e,r);return p.a?p.b?Rt(u([o,$o(Qm)])):o:p.b?$o(Qm):E}(),c=Mf(t),$=c,m=Pf(t),s=m;return a(Nm,i,a(Wc,D($,$,s),l))}),Jy=v(function(e,r){return P(qy,!0,!0,e,r)}),Km={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},es={src:`
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
    `,attributes:{triangleVertex:"dH"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Jt=function(e){var r=Ut(e),n=r.a,t=r.b,i=r.c,o=Oa(n),l=Oa(t),c=Oa(i);return Zr({eu:o.is,ev:l.is,ew:c.is,ex:0,ey:o.iw,ez:l.iw,eA:c.iw,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},fo=bm(u([D({dH:0},{dH:1},{dH:2})])),Yy=v(function(e,r){var n=dm(r),t=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return a(Je,t,be(function(y,C,B,J,Z,H,Y,X){return F(Te,b(fr,J,0,X),Km,Ac,fo,{aO:i,c:B,d:C,e:H,f:y,bU:Jt(r),g:Z})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,l=e.c;return a(Je,t,be(function(y,C,B,J,Z,H,Y,X){return F(Te,b(fr,J,0,X),Km,Fc,fo,{a6:a(to,Wt(l),o),c:B,d:C,e:H,f:y,bU:Jt(r),g:Z})}));case 2:e.a;var c=e.b,$=e.c,m=a(Vm,c,$);if(m.$)return E;var s=m.a;return a(Je,t,be(function(y,C,B,J,Z,H,Y,X){var V=Y.a,ne=Y.b;return F(Te,b(fr,J,0,X),es,km,fo,{U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dc:s,c:B,d:C,e:H,f:y,bU:Jt(r),g:Z})}));default:e.a;var p=e.b,g=e.c,f=e.d,$=e.e,_=P(Rm,p,g,f,$);if(_.$)return E;var w=_.a,x=_.b,S=_.c;return a(Je,t,be(function(y,C,B,J,Z,H,Y,X){var V=Y.a,ne=Y.b;return F(Te,b(fr,J,0,X),es,Bm,fo,{cQ:w,U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,df:S,c:B,d:C,e:H,dz:x,f:y,bU:Jt(r),g:Z})}))}}),Xy=function(){var e=u([{bl:a(br,0,1)},{bl:a(br,1,1)},{bl:a(br,2,1)},{bl:a(br,0,-1)},{bl:a(br,1,-1)},{bl:a(br,2,-1)}]),r=u([D(0,1,2),D(3,5,4),D(3,4,1),D(3,1,0),D(4,5,2),D(4,2,1),D(5,3,0),D(5,0,2)]);return a(Nt,e,r)}(),Zy={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",triangleVertexPositions:"bU",viewMatrix:"g"}},rs=function(e){return uo(be(function(r,n,t,i,o,l,c,$){return F(Te,a(Gc,i,$),Zy,Hc,Xy,{c:t,d:n,e:l,f:r,cC:c,bU:Jt(e),g:o})}))},Qy=q(function(e,r,n,t){var i=a(Yy,n,t),o=L(e,r);return o.a?o.b?Rt(u([i,rs(t)])):i:o.b?rs(t):E}),Ky=v(function(e,r){return P(Qy,!0,!0,e,r)}),ex=v(function(e,r){var n=$a(r),t=$a(e),i=ua(r),o=ua(e),l=ca(r),c=ca(e);return{eL:a(Ve,c,l),eM:a(Ve,o,i),eN:a(Ve,t,n),eO:a(We,c,l),eP:a(We,o,i),eQ:a(We,t,n)}}),rx=function(e){var r=ac(e),n=r.a,t=r.b;return a(ex,n,t)},ns={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},nx=v(function(e,r){return{$:1,a:e,b:r}}),ax=nx({d5:2,ei:0,eS:1}),as=ax(u([L({es:0},{es:1})])),tx=v(function(e,r){var n=rx(r),t=ie(n),i=ac(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var c=e.b.a;return a(Je,t,be(function(m,s,p,g,f,_,w,x){return F(Te,x,ns,Ac,as,{aO:c,eq:vr(l),er:vr(o),c:p,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return E;var c=e.b.a,$=e.c;return a(Je,t,be(function(s,p,g,f,_,w,x,S){return F(Te,S,ns,Fc,as,{a6:a(to,Wt($),c),eq:vr(l),er:vr(o),c:g,d:p,e:w,f:s,g:_})}));case 2:return E;default:return E}}),ix=v(function(e,r){return a(tx,e,r)}),ts=v(function(e,r){var n=e,t=r;return n/t}),ox=Re(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(M,o,i);if(le(r,e))return l;var c=e,$=r-1,m=n,s=t,p=l;e=c,r=$,n=m,t=s,i=p;continue e}}),is=v(function(e,r){return e<1?A:F(ox,0,e,e,r,A)}),lx=v(function(e,r){var n=e.ht,t=e.q,i=e.O,o=i,l=o.a,c=o.b;return a(M,{q:ro(t),ht:vr(n),O:a(br,l,c)},r)}),cx=function(e){var r=b(Au,lx,A,Pc(e));if(r.b){var n=r.a,t=r.b,i=a(Nt,r,Lc(e)),o=a(Jm,n,t);return P(mm,o,e,i,0)}else return Sc},os=v(function(e,r){var n=e,t=r,i=la(t);return{is:i*la(n),iw:i*Ia(n),dU:Ia(t)}}),ux=function(){var e=Rn(1),r=72,n=a(Hr,0,r-1),t=a(is,r,a(Gt,bn,Oc(1))),i=it(r/2),o=a(Hr,0,i-1),l=a(is,i,a(Gt,kt(90),kt(-90))),c=Xi(ir(a(O,function(s){return a(O,function(p){return{q:qt(a(os,s,p)),ht:b(qe,a(ye,Ot(p)*Ot(s),e),a(ye,Ot(p)*vo(s),e),a(ye,vo(p),e)),O:L(a(ts,s,Oc(1)),a(ts,a(Vt,kt(90),p),kt(180)))}},l)},t))),$=v(function(s,p){return s*(i+1)+p}),m=ir(a(O,function(s){return ir(a(O,function(p){var g=a($,s+1,p),f=a($,s,p),_=a($,s+1,p+1),w=a($,s,p+1);return u([D(w,_,g),D(w,g,f)])},o))},n));return xc(cx(a(wm,c,m)))}(),mo=72,so=2*mo,$x=v(function(e,r){e:for(;;){var n=so+1,t=a(Lt,so,2*e+3),i=a(Lt,so,2*e+2),o=2*e+1,l=2*e,c=so,$=a(M,D(c,l,i),a(M,D(l,t,i),a(M,D(l,o,t),a(M,D(o,n,t),r))));if(e){var m=e-1,s=$;e=m,r=s;continue e}else return $}}),vx=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),fx=v(function(e,r){e:for(;;){var n=b(vx,0,2*hr,e/mo),t={b_:n,ct:0,cz:1},i={b_:n,ct:1,cz:1},o=a(M,t,a(M,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),mx=function(){var e=a(fx,mo-1,u([{b_:0,ct:0,cz:0},{b_:0,ct:1,cz:0}])),r=a($x,mo-1,A);return a(Nt,e,r)}(),sx={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},ls=function(e){return uo(be(function(r,n,t,i,o,l,c,$){return F(Te,a(Gc,!0,$),sx,Hc,mx,{aO:b(Bt,0,0,1),c:t,d:n,e:l,f:r,cC:c,g:o})}))},dx=function(e){var r=gm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.is,L:r.iw,M:r.dU,cB:1}},px=v(function(e,r){return a(Um,dx(e),r)}),gx=q(function(e,r,n,t){var i=a(Vc,n,ux),o=function(){var $=L(e,r);return $.a?$.b?Rt(u([i,ls()])):i:$.b?ls():E}(),l=Oi(t),c=l;return a(px,a(zc,zr,Gi(t)),a(Wc,D(c,c,c),o))}),hx=v(function(e,r){return P(gx,!0,!0,e,r)}),bx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),_x=Re(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),wx=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return a(Om,r,n);case 1:var r=e.a,n=e.b,t=e.c;return b(bx,r,n,t);case 2:var r=e.a,n=e.b,i=e.c;return b(_f,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return F(_x,r,n,o,l,i)}},yx=wx,cs=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return u([a(Ey,r,n)]);case 1:var r=e.a,t=e.b;return u([a(Ky,r,t)]);case 3:var r=e.a,i=e.b;return u([a(hx,yx(r),i)]);case 2:var r=e.a,o=e.b;return u([a(Jy,r,o)]);case 4:var l=e.a,c=e.b;return u([a(ix,Ry(l),c)]);default:var $=e.a;return a(ya,cs,$)}},xx=function(e){return a(ya,cs,e)},Sx=v(function(e,r){return Iw({a1:Y_(e.fO),f0:e.f0,a3:X_(.5),cW:e.cW,a4:L(Af(Le(e.dB.iq)),Af(Le(e.dB.gI))),a8:xx(r),hM:!0,h1:a(os,mn(e.h0),mn(e.h2)),fm:ji})}),Cx=P(Da,255/255,255/255,255/255,1),zx=v(function(e,r){return a(Sx,{fO:Cx,f0:t_(e),cW:e.cW,dB:e.dB,h0:a(Er,"sunlight azimuth",e),h2:a(Er,"sunlight elevation",e)},u([a(J_,e,r),D_(e)]))}),Lx=v(function(e,r){return a(tr,A,u([a(tr,u([a(Me,"position","absolute"),a(Me,"width","100%")]),u([a(V1,e,r)])),a(zx,e,r)]))}),Px=P(P1,Lx,B1,I1,T1);const Mx={Main:{init:Px(a(G,function(e){return ar({gZ:e})},a(W,"inputs",a(G,function(e){return a(G,function(r){return a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(l){return ar({d1:l,cW:o,gq:i,g4:t,hs:n,dB:r,ip:e})},a(W,"clock",je))},a(W,"devicePixelRatio",je))},a(W,"dt",je))},a(W,"keyboard",a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(l){return a(G,function(c){return a(G,function($){return a(G,function(m){return a(G,function(s){return a(G,function(p){return ar({fJ:p,gd:s,d4:m,gp:$,g5:c,hu:l,hA:o,hN:i,fl:t})},a(W,"alt",_e))},a(W,"control",_e))},a(W,"down",_e))},a(W,"downs",gi(_a)))},a(W,"left",_e))},a(W,"pressedKeys",gi(_a)))},a(W,"right",_e))},a(W,"shift",_e))},a(W,"up",_e))))},a(W,"pointer",a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(l){return a(G,function(c){return a(G,function($){return a(G,function(m){return ar({d4:m,g0:$,hb:c,hB:l,hC:o,fl:i,is:t,iw:n})},a(W,"down",_e))},a(W,"isDown",_e))},a(W,"move",_e))},a(W,"rightDown",_e))},a(W,"rightUp",_e))},a(W,"up",_e))},a(W,"x",je))},a(W,"y",je))))},a(W,"screen",a(G,function(r){return a(G,function(n){return ar({gI:n,iq:r})},a(W,"height",je))},a(W,"width",je))))},a(W,"wheel",a(G,function(e){return a(G,function(r){return ar({gi:r,gj:e})},a(W,"deltaX",je))},a(W,"deltaY",je)))))))(0)}},Q={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Tx=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),t=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",l=f=>f.code=="ArrowUp",c=f=>f.code=="ArrowDown",$=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function p(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Q.keyboard.downs.push(f.code),Q.keyboard.pressedKeys.push(f.code),r(f)&&(Q.keyboard.control=!0),n(f)&&(Q.keyboard.alt=!0),t(f)&&(console.log("yo"),Q.keyboard.shift=!0),i(f)&&(Q.keyboard.left=!0),o(f)&&(Q.keyboard.right=!0),l(f)&&(Q.keyboard.up=!0),c(f)&&(console.log("yey"),Q.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Q.keyboard.pressedKeys=Q.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Q.keyboard.control=!1,Q.keyboard.pressedKeys=[]),n(f)&&(Q.keyboard.alt=!1),t(f)&&(Q.keyboard.shift=!1),i(f)&&(Q.keyboard.left=!1),o(f)&&(Q.keyboard.right=!1),l(f)&&(Q.keyboard.up=!1),c(f)&&(Q.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Q.pointer.x=-.5*Q.screen.width+f.pageX,Q.pointer.y=.5*Q.screen.height-f.pageY,$(f)&&(Q.pointer.down=!0,Q.pointer.isDown=!0),m(f)&&(Q.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Q.pointer.move=!0,Q.pointer.x=-.5*Q.screen.width+f.pageX,Q.pointer.y=.5*Q.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{$(f)&&(Q.pointer.up=!0,Q.pointer.isDown=!1),m(f)&&(Q.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{$(f)&&(Q.pointer.up=!0,Q.pointer.isDown=!1),m(f)&&(Q.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Q.wheel.deltaX=f.deltaX,Q.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(Q)}),window.addEventListener("focus",f=>{s(Q)}),window.addEventListener("visibilitychange",f=>{s(Q)}),window.addEventListener("resize",()=>{Q.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,w=_-Q.clock;w<.009||(Q.dt=w,Q.clock=_,e.ports.tick.send(Q),p(Q)),window.requestAnimationFrame(g)}},kx=Mx.Main.init({node:document.querySelector("#app div"),flags:{inputs:Q}});Tx(kx);
