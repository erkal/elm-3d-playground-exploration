const xs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};xs();function _n(e,r,n){return n.a=e,n.f=r,n}function v(e){return _n(2,e,function(r){return function(n){return e(r,n)}})}function k(e){return _n(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function O(e){return _n(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Be(e){return _n(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function dr(e){return _n(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function qt(e){return _n(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function be(e){return _n(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function So(e){return _n(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return e(r,n,t,i,o,c,l,u,m)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function Ye(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function Co(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function Ka(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function ys(e,r,n,t,i,o,c,l,u,m){return e.a===9?e.f(r,n,t,i,o,c,l,u,m):e(r)(n)(t)(i)(o)(c)(l)(u)(m)}var ws=[];function Ss(e){return e.length}var Cs=k(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),zs=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,z(n,r)}),Ls=v(function(e,r){return r[e]});k(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});k(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var Ps=k(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});k(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});k(function(e,r,n){return n.slice(e,r)});k(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Ms()),r});function Ms(e){return"<internals>"}function fa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function oe(e,r){for(var n,t=[],i=zo(e,r,0,t);i&&(n=t.pop());i=zo(n.a,n.b,0,t));return i}function zo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&fa(5),!1;if(n>100)return t.push(z(e,r)),!0;e.$<0&&(e=Zu(e),r=Zu(r));for(var i in e)if(!zo(e[i],r[i],n+1,t))return!1;return!0}v(oe);v(function(e,r){return!oe(e,r)});function ce(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ce(e.a,r.a))||(n=ce(e.b,r.b))?n:ce(e.c,r.c);for(;e.b&&r.b&&!(n=ce(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ce(e,r)<0});v(function(e,r){return ce(e,r)<1});v(function(e,r){return ce(e,r)>0});v(function(e,r){return ce(e,r)>=0});var ks=v(function(e,r){var n=ce(e,r);return n<0?Gu:n?y0:Hu}),et=0;function z(e,r){return{a:e,b:r}}function I(e,r,n){return{a:e,b:r,c:n}}function jr(e){return e}function Ce(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(W);function W(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Nr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Nr(e.a,r);return n}var D={$:0};function Nr(e,r){return{$:1,a:e,b:r}}var Ts=v(Nr);function $(e){for(var r=D,n=e.length;n--;)r=Nr(e[n],r);return r}function Yt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ds=k(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});O(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(b(e,r.a,n.a,t.a));return $(i)});Be(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return $(o)});dr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(F(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(Yt(r).sort(function(n,t){return ce(e(n),e(t))}))});v(function(e,r){return $(Yt(r).sort(function(n,t){var i=a(e,n,t);return i===Hu?0:i===Gu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Fs=v(Math.pow);v(function(e,r){return r%e});var As=v(function(e,r){var n=r%e;return e===0?fa(11):n>0&&e<0||n<0&&e>0?n+e:n}),Is=Math.PI,Es=Math.cos,Bs=Math.sin,Rs=Math.tan;v(Math.atan2);function Vs(e){return e}function js(e){return e===1/0||e===-1/0}var Ns=Math.ceil,Ws=Math.floor,Zs=Math.round,Hs=Math.sqrt,au=Math.log,Gs=isNaN;function Os(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Us=v(function(e,r){return e+r});function Js(e){var r=e.charCodeAt(0);return isNaN(r)?B:j(55296<=r&&r<=56319?z(jr(e[0]+e[1]),e.slice(2)):z(jr(e[0]),e.slice(1)))}v(function(e,r){return e+r});function qs(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(jr(r[i]+r[i+1])),i+=2;continue}t[i]=e(jr(r[i])),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(jr(o))&&n.push(o)}return n.join("")});function Ys(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}k(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,jr(o),r)}return r});var Xs=k(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,jr(i),r)}return r}),Qs=v(function(e,r){return r.split(e)}),Ks=v(function(e,r){return r.join(e)}),ed=k(function(e,r,n){return n.slice(e,r)});function rd(e){return $(e.trim().split(/\s+/g))}function nd(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(jr(t)))return!0}return!1});var ad=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(jr(t)))return!1}return!0}),td=v(function(e,r){return r.indexOf(e)>-1}),id=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var od=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function tu(e){return e+""}function cd(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return B;r=10*r+o-48}return i==t?B:j(n==45?-r:r)}function ld(e){if(e.length===0||/[\sxbo]/.test(e))return B;var r=+e;return r===r?j(r):B}function ud(e){return Yt(e).join("")}function $d(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function vd(e){return jr(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function fd(e){return{$:0,a:e}}function md(e){return{$:1,a:e}}function Lo(e){return{$:2,b:e}}var sd=Lo(function(e){return typeof e=="boolean"?Re(e):Wr("a BOOL",e)}),dd=Lo(function(e){return typeof e=="number"?Re(e):Wr("a FLOAT",e)}),pd=Lo(function(e){return typeof e=="string"?Re(e):e instanceof String?Re(e+""):Wr("a STRING",e)});function gd(e){return{$:3,b:e}}var hd=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function xn(e,r){return{$:9,f:e,g:r}}var bd=v(function(e,r){return{$:10,b:r,h:e}}),_d=v(function(e,r){return xn(e,[r])}),xd=k(function(e,r,n){return xn(e,[r,n])});O(function(e,r,n,t){return xn(e,[r,n,t])});Be(function(e,r,n,t,i){return xn(e,[r,n,t,i])});dr(function(e,r,n,t,i,o){return xn(e,[r,n,t,i,o])});qt(function(e,r,n,t,i,o,c){return xn(e,[r,n,t,i,o,c])});be(function(e,r,n,t,i,o,c,l){return xn(e,[r,n,t,i,o,c,l])});So(function(e,r,n,t,i,o,c,l,u){return xn(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return yr(e,n)}catch(t){return Qe(a(Oo,"This is not valid JSON! "+t.message,on(r)))}});var iu=v(function(e,r){return yr(e,sa(r))});function yr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Re(e.c):Wr("null",r);case 3:return Xt(r)?ou(e.b,r,$):Wr("a LIST",r);case 4:return Xt(r)?ou(e.b,r,yd):Wr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Wr("an OBJECT with a field named `"+n+"`",r);var t=yr(e.b,r[n]);return Ar(t)?t:Qe(a(Ou,n,t.a));case 7:var i=e.e;if(!Xt(r))return Wr("an ARRAY",r);if(i>=r.length)return Wr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var t=yr(e.b,r[i]);return Ar(t)?t:Qe(a(Uu,i,t.a));case 8:if(typeof r!="object"||r===null||Xt(r))return Wr("an OBJECT",r);var o=D;for(var c in r)if(r.hasOwnProperty(c)){var t=yr(e.b,r[c]);if(!Ar(t))return Qe(a(Ou,c,t.a));o=Nr(z(c,t.a),o)}return Re(nr(o));case 9:for(var l=e.f,u=e.g,m=0;m<u.length;m++){var t=yr(u[m],r);if(!Ar(t))return t;l=l(t.a)}return Re(l);case 10:var t=yr(e.b,r);return Ar(t)?yr(e.h(t.a),r):t;case 11:for(var s=D,d=e.g;d.b;d=d.b){var t=yr(d.a,r);if(Ar(t))return t;s=Nr(t.a,s)}return Qe(w0(nr(s)));case 1:return Qe(a(Oo,e.a,on(r)));case 0:return Re(e.a)}}function ou(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=yr(e,r[o]);if(!Ar(c))return Qe(a(Uu,o,c.a));i[o]=c.a}return Re(n(i))}function Xt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function yd(e){return a(V0,e.length,function(r){return e[r]})}function Wr(e,r){return Qe(a(Oo,"Expecting "+e,on(r)))}function ma(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ma(e.b,r.b);case 6:return e.d===r.d&&ma(e.b,r.b);case 7:return e.e===r.e&&ma(e.b,r.b);case 9:return e.f===r.f&&cu(e.g,r.g);case 10:return e.h===r.h&&ma(e.b,r.b);case 11:return cu(e.g,r.g)}}function cu(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!ma(e[t],r[t]))return!1;return!0}var wd=v(function(e,r){return JSON.stringify(sa(r),null,e)+""});function on(e){return e}function sa(e){return e}function Sd(){return[]}function Cd(){return{}}var zd=k(function(e,r,n){return n[e]=sa(r),n});function Ld(e){return v(function(r,n){return n.push(sa(e(r))),n})}function Hn(e){return{$:0,a:e}}function Pd(e){return{$:1,a:e}}function cn(e){return{$:2,b:e,c:null}}var Po=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Md(e){return{$:5,b:e}}var kd=0;function Mo(e){var r={$:0,e:kd++,f:e,g:null,h:[]};return To(r),r}function lu(e){return cn(function(r){r(Hn(Mo(e)))})}function uu(e,r){e.h.push(r),To(e)}var Td=v(function(e,r){return cn(function(n){uu(e,r),n(Hn(et))})}),ko=!1,$u=[];function To(e){if($u.push(e),!ko){for(ko=!0;e=$u.shift();)Dd(e);ko=!1}}function Dd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,To(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,t){return Do(r,t,e.gZ,e.$9,e.h0,function(){return function(){}})});function Do(e,r,n,t,i,o){var c=a(iu,e,on(r?r.flags:void 0));Ar(c)||fa(2);var l={},u=n(c.a),m=u.a,s=o(g,m),d=Fd(l,g);function g(f,_){var x=a(t,f,m);s(m=x.a,_),mu(l,x.b,i(m))}return mu(l,u.b,i(m)),d?{ports:d}:{}}var Zr={};function Fd(e,r){var n;for(var t in Zr){var i=Zr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Id(i,r)}return n}function Ad(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Id(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(Po,l,Md(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&c?P(t,n,s.i,s.j,u):b(t,n,o?s.i:s.j,u)}))}return n.h=Mo(a(Po,l,e.b))}var Ed=v(function(e,r){return cn(function(n){e.g(r),n(Hn(et))})});v(function(e,r){return a(Td,e.h,{$:0,a:r})});function vu(e){return function(r){return{$:1,k:e,l:r}}}function Bd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var fu=[],Fo=!1;function mu(e,r,n){if(fu.push({p:e,q:r,r:n}),!Fo){Fo=!0;for(var t;t=fu.shift();)Rd(t.p,t.q,t.r);Fo=!1}}function Rd(e,r,n){var t={};Qt(!0,r,t,null),Qt(!1,n,t,null);for(var i in e)uu(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function Qt(e,r,n,t){switch(r.$){case 1:var i=r.k,o=Vd(e,i,t,r.l);n[i]=jd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Qt(e,c.a,n,t);return;case 3:Qt(e,r.o,n,{s:r.n,t});return}}function Vd(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Zr[r].e:Zr[r].f;return a(o,i,t)}function jd(e,r,n){return n=n||{i:D,j:D},e?n.i=Nr(r,n.i):n.j=Nr(r,n.j),n}function Nd(e){Zr[e]&&fa(3)}v(function(e,r){return r});function Wd(e,r){return Nd(e),Zr[e]={f:Zd,u:r,a:Hd},vu(e)}var Zd=v(function(e,r){return function(n){return e(r(n))}});function Hd(e,r){var n=D,t=Zr[e].u,i=Hn(null);Zr[e].b=i,Zr[e].c=k(function(c,l,u){return n=l,i});function o(c){var l=a(iu,t,on(c));Ar(l)||fa(4,e,l.a);for(var u=l.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Kt,ln=typeof document!="undefined"?document:{};function Ao(e,r){e.appendChild(r)}O(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(wn(e,function(){}),i),{}});function Io(e){return{$:0,a:e}}var su=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:Bo(n),e:i,f:e,b:o}})}),Hr=su(void 0),Gd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:Bo(n),e:i,f:e,b:o}})}),Od=Gd(void 0);function Ud(e,r,n,t){return{$:3,d:Bo(e),g:r,h:n,i:t}}var Jd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function yn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return yn([e,r],function(){return e(r)})});k(function(e,r,n){return yn([e,r,n],function(){return a(e,r,n)})});var qd=O(function(e,r,n,t){return yn([e,r,n,t],function(){return b(e,r,n,t)})});Be(function(e,r,n,t,i){return yn([e,r,n,t,i],function(){return P(e,r,n,t,i)})});dr(function(e,r,n,t,i,o){return yn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});qt(function(e,r,n,t,i,o,c){return yn([e,r,n,t,i,o,c],function(){return Ye(e,r,n,t,i,o,c)})});be(function(e,r,n,t,i,o,c,l){return yn([e,r,n,t,i,o,c,l],function(){return Co(e,r,n,t,i,o,c,l)})});So(function(e,r,n,t,i,o,c,l,u){return yn([e,r,n,t,i,o,c,l,u],function(){return Ka(e,r,n,t,i,o,c,l,u)})});var du=v(function(e,r){return{$:"a0",n:e,o:r}}),Yd=v(function(e,r){return{$:"a1",n:e,o:r}}),Eo=v(function(e,r){return{$:"a2",n:e,o:r}}),Dr=v(function(e,r){return{$:"a3",n:e,o:r}});k(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function pu(e){return e=="script"?"p":e}function Xd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Qd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Kd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function gu(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var ep=v(function(e,r){return r.$==="a0"?a(du,r.n,rp(e,r.o)):r});function rp(e,r){var n=Ko(r);return{$:r.$,a:n?b(j0,n<3?np:ap,tr(e),r.a):a(ti,e,r.a)}}var np=v(function(e,r){return z(e(r.a),r.b)}),ap=v(function(e,r){return{az:e(r.az),dL:r.dL,dA:r.dA}});function Bo(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?hu(r,i,sa(o)):r[i]=sa(o);continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?hu(c,i,o):c[i]=o}return r}function hu(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function wn(e,r){var n=e.$;if(n===5)return wn(e.k||(e.k=e.m()),r);if(n===0)return ln.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=wn(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Ro(c,r,e.d),c}var c=e.f?ln.createElementNS(e.f,e.c):ln.createElement(e.c);Kt&&e.c=="a"&&c.addEventListener("click",Kt(c)),Ro(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ao(c,wn(n===1?l[u]:l[u].b,r));return c}function Ro(e,r,n){for(var t in n){var i=n[t];t==="a1"?tp(e,i):t==="a0"?cp(e,r,i):t==="a3"?ip(e,i):t==="a4"?op(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function tp(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function ip(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function op(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function cp(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=lp(r,o),e.addEventListener(i,c,Vo&&{passive:Ko(o)<2}),t[i]=c}}var Vo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Vo=!0}}))}catch{}function lp(e,r){function n(t){var i=n.q,o=yr(i.a,t);if(!!Ar(o)){for(var c=Ko(i),l=o.a,u=c?c<3?l.a:l.az:l,m=c==1?l.b:c==3&&l.dL,s=(m&&t.stopPropagation(),(c==2?l.b:c==3&&l.dA)&&t.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function up(e,r){return e.$==r.$&&ma(e.a,r.a)}function bu(e,r){var n=[];return Fr(e,r,n,0),n}function Xe(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Fr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=gp(r),o=1;else{Xe(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,m=u===l.length;m&&u--;)m=c[u]===l[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];Fr(e.k,r.k,s,0),s.length>0&&Xe(n,1,t,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var x=r.k;x.$===4;)f=!0,typeof g!="object"?g=[g,x.j]:g.push(x.j),x=x.k;if(f&&d.length!==g.length){Xe(n,0,t,r);return}(f?!$p(d,g):d!==g)&&Xe(n,2,t,g),Fr(_,x,n,t+1);return;case 0:e.a!==r.a&&Xe(n,3,t,r.a);return;case 1:_u(e,r,n,t,vp);return;case 2:_u(e,r,n,t,fp);return;case 3:if(e.h!==r.h){Xe(n,0,t,r);return}var w=jo(e.d,r.d);w&&Xe(n,4,t,w);var S=r.i(e.g,r.g);S&&Xe(n,5,t,S);return}}}function $p(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function _u(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){Xe(n,0,t,r);return}var o=jo(e.d,r.d);o&&Xe(n,4,t,o),i(e,r,n,t)}function jo(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=jo(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&up(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function vp(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?Xe(n,6,t,{v:l,i:c-l}):c<l&&Xe(n,7,t,{v:c,e:o});for(var u=c<l?c:l,m=0;m<u;m++){var s=i[m];Fr(s,o[m],n,++t),t+=s.b||0}}function fp(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,m=l.length,s=u.length,d=0,g=0,f=t;d<m&&g<s;){var _=l[d],x=u[g],w=_.a,S=x.a,y=_.b,C=x.b,E=void 0,U=void 0;if(w===S){f++,Fr(y,C,i,f),f+=y.b||0,d++,g++;continue}var X=l[d+1],H=u[g+1];if(X){var q=X.a,Y=X.b;U=S===q}if(H){var V=H.a,ne=H.b;E=w===V}if(E&&U){f++,Fr(y,ne,i,f),rt(o,i,w,C,g,c),f+=y.b||0,f++,nt(o,i,w,Y,f),f+=Y.b||0,d+=2,g+=2;continue}if(E){f++,rt(o,i,S,C,g,c),Fr(y,ne,i,f),f+=y.b||0,d+=1,g+=2;continue}if(U){f++,nt(o,i,w,y,f),f+=y.b||0,f++,Fr(Y,C,i,f),f+=Y.b||0,d+=2,g+=1;continue}if(X&&q===V){f++,nt(o,i,w,y,f),rt(o,i,S,C,g,c),f+=y.b||0,f++,Fr(Y,ne,i,f),f+=Y.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=l[d],y=_.b;nt(o,i,_.a,y,f),f+=y.b||0,d++}for(;g<s;){var ve=ve||[],x=u[g];rt(o,i,x.a,x.b,void 0,ve),g++}(i.length>0||c.length>0||ve)&&Xe(n,8,t,{w:i,x:c,y:ve})}var xu="_elmW6BL";function rt(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Fr(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}rt(e,r,n+xu,t,i,o)}function nt(e,r,n,t,i){var o=e[n];if(!o){var c=Xe(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Fr(t,o.z,l,i),Xe(r,9,i,{w:l,A:o});return}nt(e,r,n+xu,t,i)}function yu(e,r,n,t){at(e,r,n,0,0,r.b,t)}function at(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var m=l.$;if(m===1)yu(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&at(e,r,s,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&at(e,r,s,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return at(e,f,n,t,i+1,o,e.elm_event_node_ref)}for(var _=r.e,x=e.childNodes,w=0;w<_.length;w++){i++;var S=g===1?_[w]:_[w].b,y=i+(S.b||0);if(i<=u&&u<=y&&(t=at(x[w],S,n,t,i,y,c),!(l=n[t])||(u=l.r)>o))return t;i=y}return t}function wu(e,r,n,t){return n.length===0?e:(yu(e,r,n,t),ei(e,n))}function ei(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=mp(i,t);i===e&&(e=o)}return e}function mp(e,r){switch(r.$){case 0:return sp(e,r.s,r.u);case 4:return Ro(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ei(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,t=n.e,i=n.v,o=e.childNodes[i];i<t.length;i++)e.insertBefore(wn(t[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ei(e,n.w),e;case 8:return dp(e,r);case 5:return r.s(e);default:fa(10)}}function sp(e,r,n){var t=e.parentNode,i=wn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function dp(e,r){var n=r.s,t=pp(n.y,r);e=ei(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:wn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&Ao(e,t),e}function pp(e,r){if(!!e){for(var n=ln.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Ao(n,o.c===2?o.s:wn(o.z,r.u))}return n}}function No(e){if(e.nodeType===3)return Io(e.textContent);if(e.nodeType!==1)return Io("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Nr(a(Dr,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,m=e.childNodes,t=m.length;t--;)u=Nr(No(m[t]),u);return b(Hr,l,r,u)}function gp(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var hp=O(function(e,r,n,t){return Do(r,t,e.gZ,e.$9,e.h0,function(i,o){var c=e.ip,l=t.node,u=No(l);return Su(o,function(m){var s=c(m),d=bu(u,s);l=wu(l,u,d,i),u=s})})});O(function(e,r,n,t){return Do(r,t,e.gZ,e.$9,e.h0,function(i,o){var c=e.dI&&e.dI(i),l=e.ip,u=ln.title,m=ln.body,s=No(m);return Su(o,function(d){Kt=c;var g=l(d),f=Hr("body")(D)(g.f$),_=bu(s,f);m=wu(m,s,_,i),s=f,Kt=0,u!==g.ii&&(ln.title=u=g.ii)})})});var ri=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Su(e,r){r(e);var n=0;function t(){n=n===1?0:(ri(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&ri(t),n=2)}}v(function(e,r){return a(rc,$t,cn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(rc,$t,cn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(rc,$t,cn(function(){history.replaceState({},"",r),e()}))});var bp={addEventListener:function(){},removeEventListener:function(){}},_p=typeof window!="undefined"?window:bp;k(function(e,r,n){return lu(cn(function(t){function i(o){Mo(n(o))}return e.addEventListener(r,i,Vo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=yr(e,r);return Ar(n)?j(n.a):B});function Cu(e,r){return cn(function(n){ri(function(){var t=document.getElementById(e);n(t?Hn(r(t)):Pd(N0(e)))})})}function xp(e){return cn(function(r){ri(function(){r(Hn(e()))})})}v(function(e,r){return Cu(r,function(n){return n[e](),et})});v(function(e,r){return xp(function(){return _p.scroll(e,r),et})});k(function(e,r,n){return Cu(e,function(t){return t.scrollLeft=r,t.scrollTop=n,et})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var yp=v(function(e,r){var n="g";e.hh&&(n+="m"),e.f9&&(n+="i");try{return j(new RegExp(r,n))}catch{return B}});v(function(e,r){return r.match(e)!==null});var wp=k(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?j(d):B}t.push(P(Jv,u[0],u.index,i,$(s))),l=r.lastIndex}return r.lastIndex=c,$(t)});O(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var m=arguments[l];u[--l]=m?j(m):B}return n(P(Jv,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});k(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var Sp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Cp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Cp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Wo=new Float64Array(3),zu=new Float64Array(3),Lu=new Float64Array(3),zp=k(function(e,r,n){return new Float64Array([e,r,n])}),Lp=function(e){return e[0]},Pp=function(e){return e[1]},Mp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var kp=function(e){return new Float64Array([e.it,e.ix,e.dZ])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Pu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Pu);function Mu(e,r,n){return n===void 0&&(n=new Float64Array(3)),ni(Pu(e,r,n),n)}v(Mu);function ku(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function ni(e,r){r===void 0&&(r=new Float64Array(3));var n=1/ku(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Tp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),tt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(tt);function Zo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Zo);v(function(e,r){var n,t=Wo,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=tt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(tt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(tt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(tt(r,t)+e[14])/n,i});var Dp=O(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Fp=function(e){return{it:e[0],ix:e[1],dZ:e[2],fA:e[3]}},Ap=function(e){return new Float64Array([e.it,e.ix,e.dZ,e.fA])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Ip(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Ip(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Ep=new Float64Array(16),Bp=new Float64Array(16),Rp=function(e){var r=new Float64Array(16);return r[0]=e.ez,r[1]=e.eD,r[2]=e.eH,r[3]=e.eL,r[4]=e.eA,r[5]=e.eE,r[6]=e.eI,r[7]=e.eM,r[8]=e.eB,r[9]=e.eF,r[10]=e.eJ,r[11]=e.eN,r[12]=e.eC,r[13]=e.eG,r[14]=e.eK,r[15]=e.eO,r},Vp=function(e){return{ez:e[0],eD:e[1],eH:e[2],eL:e[3],eA:e[4],eE:e[5],eI:e[6],eM:e[7],eB:e[8],eF:e[9],eJ:e[10],eN:e[11],eC:e[12],eG:e[13],eK:e[14],eO:e[15]}};function Tu(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}dr(Tu);O(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return Tu(c,l,o,i,n,t)});function Du(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}dr(Du);O(function(e,r,n,t){return Du(e,r,n,t,-1,1)});function Fu(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],x=e[12],w=e[13],S=e[14],y=e[15],C=r[0],E=r[1],U=r[2],X=r[3],H=r[4],q=r[5],Y=r[6],V=r[7],ne=r[8],ve=r[9],xe=r[10],fe=r[11],se=r[12],ye=r[13],de=r[14],Ie=r[15];return n[0]=t*C+l*E+d*U+x*X,n[1]=i*C+u*E+g*U+w*X,n[2]=o*C+m*E+f*U+S*X,n[3]=c*C+s*E+_*U+y*X,n[4]=t*H+l*q+d*Y+x*V,n[5]=i*H+u*q+g*Y+w*V,n[6]=o*H+m*q+f*Y+S*V,n[7]=c*H+s*q+_*Y+y*V,n[8]=t*ne+l*ve+d*xe+x*fe,n[9]=i*ne+u*ve+g*xe+w*fe,n[10]=o*ne+m*ve+f*xe+S*fe,n[11]=c*ne+s*ve+_*xe+y*fe,n[12]=t*se+l*ye+d*de+x*Ie,n[13]=i*se+u*ye+g*de+w*Ie,n[14]=o*se+m*ye+f*de+S*Ie,n[15]=c*se+s*ye+_*de+y*Ie,n}v(Fu);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],x=r[0],w=r[1],S=r[2],y=r[4],C=r[5],E=r[6],U=r[8],X=r[9],H=r[10],q=r[12],Y=r[13],V=r[14];return n[0]=t*x+c*w+m*S,n[1]=i*x+l*w+s*S,n[2]=o*x+u*w+d*S,n[3]=0,n[4]=t*y+c*C+m*E,n[5]=i*y+l*C+s*E,n[6]=o*y+u*C+d*E,n[7]=0,n[8]=t*U+c*X+m*H,n[9]=i*U+l*X+s*H,n[10]=o*U+u*X+d*H,n[11]=0,n[12]=t*q+c*Y+m*V+g,n[13]=i*q+l*Y+s*V+f,n[14]=o*q+u*Y+d*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ni(r,Wo);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});k(function(e,r,n){var t=new Float64Array(16),i=1/ku(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=c*s,f=l*s,_=o*c*m,x=o*l*m,w=c*l*m,S=o*o*m+u,y=_+f,C=x-g,E=_-f,U=c*c*m+u,X=w+d,H=x+g,q=w-d,Y=l*l*m+u,V=n[0],ne=n[1],ve=n[2],xe=n[3],fe=n[4],se=n[5],ye=n[6],de=n[7],Ie=n[8],ke=n[9],qe=n[10],Nn=n[11],Ya=n[12],nn=n[13],an=n[14],va=n[15];return t[0]=V*S+fe*y+Ie*C,t[1]=ne*S+se*y+ke*C,t[2]=ve*S+ye*y+qe*C,t[3]=xe*S+de*y+Nn*C,t[4]=V*E+fe*U+Ie*X,t[5]=ne*E+se*U+ke*X,t[6]=ve*E+ye*U+qe*X,t[7]=xe*E+de*U+Nn*X,t[8]=V*H+fe*q+Ie*Y,t[9]=ne*H+se*q+ke*Y,t[10]=ve*H+ye*q+qe*Y,t[11]=xe*H+de*q+Nn*Y,t[12]=Ya,t[13]=nn,t[14]=an,t[15]=va,t});function jp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}k(jp);O(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Np(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}k(Np);O(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],m=t[4],s=t[5],d=t[6],g=t[7],f=t[8],_=t[9],x=t[10],w=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=x,i[11]=w,i[12]=o*e+m*r+f*n+t[12],i[13]=c*e+s*r+_*n+t[13],i[14]=l*e+d*r+x*n+t[14],i[15]=u*e+g*r+w*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],x=r[9],w=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=x,n[10]=w,n[11]=S,n[12]=c*t+s*i+_*o+r[12],n[13]=l*t+d*i+x*o+r[13],n[14]=u*t+g*i+w*o+r[14],n[15]=m*t+f*i+S*o+r[15],n});k(function(e,r,n){var t=Mu(e,r,Wo),i=ni(Zo(n,t,zu),zu),o=ni(Zo(t,i,Lu),Lu),c=Ep,l=Bp;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Fu(c,l)});k(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var Au=0;function it(e,r){for(;r.b;r=r.b)e(r.a)}function Ho(e){for(var r=0;e.b;e=e.b)r++;return r}var Wp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Zp=Be(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Hp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Gp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Op=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Up=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Jp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),qp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Yp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Xp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Qp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Kp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},e0=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},r0=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Iu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Eu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},n0=function(e){e.gl.disable(e.gl.CULL_FACE)},a0=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},t0=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},i0=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Bu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],o0=[Kp,e0,r0,Iu,Eu,n0,a0,t0,i0];function Ru(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function c0(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Vu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function l0(e,r,n,t){for(var i=n.a.d9,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,x,w,S){var y;if(i===1)for(y=0;y<_;y++)f[x++]=_===1?w[S]:w[S][y];else o.forEach(function(C){for(y=0;y<_;y++)f[x++]=_===1?w[C][S]:w[C][S][y]})}var u=Vu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(Ho(n.b)*s);it(function(f){l(d,u.size*u.arraySize,m,f,t[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function u0(e,r){if(r.a.em>0){var n=e.createBuffer(),t=$0(r.c,r.a.em);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d9*Ho(r.b),indexBuffer:null,buffers:{}}}function $0(e,r){var n=new Uint32Array(Ho(e)*r),t=0,i;return it(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function ju(e,r){return e+"#"+r}var Nu=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Iu(n),Eu(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=ju(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=Au++,m||(m=Ru(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=Au++,s||(s=Ru(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=c0(t,m,s);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=v0(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=t.getActiveAttrib(d,u),_=t.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=ju(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),f0(l.uniformSetters,o.e);var x=n.buffers.get(o.d);for(x||(x=u0(t,o.d),n.buffers.set(o.d,x)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],_=l.activeAttributeLocations[u],x.buffers[f.name]===void 0&&(x.buffers[f.name]=l0(t,f,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,x.buffers[f.name]);var w=Vu(t,f.type);if(w.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,w.size,w.baseType,!1,0,0);else for(var S=w.size*4,y=S*w.arraySize,C=0;C<w.arraySize;C++)t.enableVertexAttribArray(_+C),t.vertexAttribPointer(_+C,w.size,w.baseType,!1,y,S*C)}for(n.toggle=!n.toggle,it(O2(n),o.a),u=0;u<Bu.length;u++){var E=n[Bu[u]];E.toggle!==n.toggle&&E.enabled&&(o0[u](n),E.enabled=!1,E.toggle=n.toggle)}x.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,x.indexBuffer),t.drawElements(o.d.a.eX,x.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eX,0,x.numIndices)}}return it(i,e.g),r});function v0(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(f,_){var x=_.name,w=e.getUniformLocation(f,x);switch(_.type){case e.INT:return function(y){o[x]!==y&&(e.uniform1i(w,y),o[x]=y)};case e.FLOAT:return function(y){o[x]!==y&&(e.uniform1f(w,y),o[x]=y)};case e.FLOAT_VEC2:return function(y){o[x]!==y&&(e.uniform2f(w,y[0],y[1]),o[x]=y)};case e.FLOAT_VEC3:return function(y){o[x]!==y&&(e.uniform3f(w,y[0],y[1],y[2]),o[x]=y)};case e.FLOAT_VEC4:return function(y){o[x]!==y&&(e.uniform4f(w,y[0],y[1],y[2],y[3]),o[x]=y)};case e.FLOAT_MAT4:return function(y){o[x]!==y&&(e.uniformMatrix4fv(w,!1,new Float32Array(y)),o[x]=y)};case e.SAMPLER_2D:var S=c++;return function(y){e.activeTexture(e.TEXTURE0+S);var C=l.textures.get(y);C||(C=y.gl(e),l.textures.set(y,C)),e.bindTexture(e.TEXTURE_2D,C),o[x]!==y&&(e.uniform1i(w,S),o[x]=y)};case e.BOOL:return function(y){o[x]!==y&&(e.uniform1i(w,y),o[x]=y)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[t[g.name]||g.name]=u(i,g)}return m}function f0(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var m0=k(function(e,r,n){return Ud(r,{g:n,f:{},h:e},_0,x0)}),s0=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),d0=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),p0=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),g0=v(function(e,r){e.contextAttributes.antialias=!0}),h0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),b0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function _0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};it(function(i){return a(G2,r,i)},e.h);var n=ln.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),Wp(function(){return a(Nu,e,n)})):(n=ln.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function x0(e,r){return r.f=e.f,Nu(r)}var M=Ts,ai=Ps,Wu=k(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return b(ai,e,l,m)}else{var u=c.a;return b(ai,o,l,u)}});return b(ai,o,b(ai,e,r,i),t)}),Go=k(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=b(e,t,i,b(Go,e,r,c)),m=o;e=l,r=u,n=m;continue e}}),Zu=function(e){return b(Go,k(function(r,n,t){return a(M,z(r,n),t)}),D,e)},Hu=1,y0=2,Gu=0,Qe=function(e){return{$:1,a:e}},Oo=v(function(e,r){return{$:3,a:e,b:r}}),Ou=v(function(e,r){return{$:0,a:e,b:r}}),Uu=v(function(e,r){return{$:1,a:e,b:r}}),Re=function(e){return{$:0,a:e}},w0=function(e){return{$:2,a:e}},j=function(e){return{$:0,a:e}},B={$:1},S0=ad,C0=wd,T=tu,ee=v(function(e,r){return a(Ks,e,Yt(r))}),Uo=v(function(e,r){return $(a(Qs,e,r))}),Ju=function(e){return a(ee,`
    `,a(Uo,`
`,e))},Ee=k(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),Gn=function(e){return b(Ee,v(function(r,n){return n+1}),0,e)},z0=Ds,L0=k(function(e,r,n){e:for(;;)if(ce(e,r)<1){var t=e,i=r-1,o=a(M,r,n);e=t,r=i,n=o;continue e}else return n}),un=v(function(e,r){return b(L0,e,r,D)}),qu=v(function(e,r){return b(z0,e,a(un,0,Gn(r)-1),r)}),Gr=$d,Yu=function(e){var r=Gr(e);return 97<=r&&r<=122},Xu=function(e){var r=Gr(e);return r<=90&&65<=r},P0=function(e){return Yu(e)||Xu(e)},M0=function(e){var r=Gr(e);return r<=57&&48<=r},k0=function(e){return Yu(e)||Xu(e)||M0(e)},nr=function(e){return b(Ee,M,D,e)},da=Js,T0=v(function(e,r){return`

(`+(T(e+1)+(") "+Ju(D0(r))))}),D0=function(e){return a(F0,e,D)},F0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,t=e.b,i=function(){var x=da(n);if(x.$===1)return!1;var w=x.a,S=w.a,y=w.b;return P0(S)&&a(S0,k0,y)}(),o=i?"."+n:"['"+(n+"']"),c=t,l=a(M,o,r);e=c,r=l;continue e;case 1:var u=e.a,t=e.b,m="["+(T(u)+"]"),c=t,l=a(M,m,r);e=c,r=l;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(ee,"",nr(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(T(Gn(s))+" ways:"));return a(ee,`

`,a(M,_,a(qu,T0,s)))}else{var t=s.a,c=t,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ee,"",nr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(a(ee,"",nr(r))+`:

    `):`Problem with the given value:

`}();return _+(Ju(a(C0,4,f))+(`

`+g))}}),pr=32,Jo=O(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),qo=ws,ot=Ns,Yo=v(function(e,r){return au(r)/au(e)}),ct=Vs,lt=ot(a(Yo,2,pr)),Qu=P(Jo,0,lt,qo,qo),Ku=Cs,e$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var A0=Ws,Xo=Ss,ar=v(function(e,r){return ce(e,r)>0?e:r}),I0=function(e){return{$:0,a:e}},Qo=zs,E0=v(function(e,r){e:for(;;){var n=a(Qo,pr,e),t=n.a,i=n.b,o=a(M,I0(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return nr(o)}}),r$=function(e){var r=e.a;return r},B0=v(function(e,r){e:for(;;){var n=ot(r/pr);if(n===1)return a(Qo,pr,e).a;var t=a(E0,e,D),i=n;e=t,r=i;continue e}}),n$=v(function(e,r){if(r.n){var n=r.n*pr,t=A0(a(Yo,pr,n-1)),i=e?nr(r.B):r.B,o=a(B0,i,r.n);return P(Jo,Xo(r.q)+n,a(ar,5,t*lt),o,r.q)}else return P(Jo,Xo(r.q),lt,qo,r.q)}),R0=Be(function(e,r,n,t,i){e:for(;;){if(r<0)return a(n$,!1,{B:t,n:n/pr|0,q:i});var o=e$(b(Ku,pr,r,e)),c=e,l=r-pr,u=n,m=a(M,o,t),s=i;e=c,r=l,n=u,t=m,i=s;continue e}}),V0=v(function(e,r){if(e<=0)return Qu;var n=e%pr,t=b(Ku,n,e-n,r),i=e-n-pr;return F(R0,r,i,e,D,t)}),Ar=function(e){return!e.$},G=bd,_e=sd,Z=hd,je=dd,a$=v(function(e,r){return{b6:r.b6,gi:e,c_:r.c_,gw:r.gw,g9:r.g9,dz:r.dz,cF:r.cF,iq:r.iq}}),ti=_d,j0=xd,tr=fd,Ko=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},ir=function(e){return e},N0=ir,t$=dr(function(e,r,n,t,i,o){return{ef:o,ek:r,e4:t,e7:n,fa:e,fb:i}}),W0=td,On=qs,pa=ed,ut=v(function(e,r){return e<1?r:b(pa,e,On(r),r)}),ii=od,oi=function(e){return e===""},ci=v(function(e,r){return e<1?"":b(pa,0,e,r)}),i$=cd,o$=Be(function(e,r,n,t,i){if(oi(i)||a(W0,"@",i))return B;var o=a(ii,":",i);if(o.b){if(o.b.b)return B;var c=o.a,l=i$(a(ut,c+1,i));if(l.$===1)return B;var u=l;return j(Ye(t$,e,a(ci,c,i),u,r,n,t))}else return j(Ye(t$,e,i,B,r,n,t))}),c$=O(function(e,r,n,t){if(oi(t))return B;var i=a(ii,"/",t);if(i.b){var o=i.a;return F(o$,e,a(ut,o,t),r,n,a(ci,o,t))}else return F(o$,e,"/",r,n,t)}),l$=k(function(e,r,n){if(oi(n))return B;var t=a(ii,"?",n);if(t.b){var i=t.a;return P(c$,e,j(a(ut,i+1,n)),r,a(ci,i,n))}else return P(c$,e,B,r,n)});v(function(e,r){if(oi(r))return B;var n=a(ii,"#",r);if(n.b){var t=n.a;return b(l$,e,j(a(ut,t+1,r)),a(ci,t,r))}else return b(l$,e,B,r)});var Z0=id,$t=function(e){},vt=Hn,H0=vt(0),u$=O(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,m=l.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Ee,e,r,nr(d)):P(u$,e,r,n+1,d);return a(e,i,a(e,c,a(e,u,a(e,s,g))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),Ge=k(function(e,r,n){return P(u$,e,r,0,n)}),J=v(function(e,r){return b(Ge,v(function(n,t){return a(M,e(n),t)}),D,r)}),li=Po,ec=v(function(e,r){return a(li,function(n){return vt(e(n))},r)}),G0=k(function(e,r,n){return a(li,function(t){return a(li,function(i){return vt(a(e,t,i))},n)},r)}),O0=function(e){return b(Ge,G0(M),vt(D),e)},U0=Ed,J0=v(function(e,r){var n=r;return lu(a(li,U0(e),n))}),q0=k(function(e,r,n){return a(ec,function(t){return 0},O0(a(J,J0(e),r)))}),Y0=k(function(e,r,n){return vt(0)}),X0=v(function(e,r){var n=r;return a(ec,e,n)});Zr.Task=Ad(H0,q0,Y0,X0);var Q0=vu("Task"),rc=v(function(e,r){return Q0(a(ec,e,r))}),K0=hp,eg=Os,ui={$:1},$$=function(e){return{$:2,a:e}},nc={$:0},wr=v(function(e,r){return{$:0,a:e,b:r}}),Te=k(function(e,r,n){return r(e(n))}),Un=function(e){var r=e.b.r;return r.a},rg=function(e){var r=e.a,n=e.b.W,t=e.b.r,i=e.b.am;if(i.b){var o=i.a,c=i.b;return j(a(wr,r,{r:o,am:c,W:a(M,t,n)}))}else return B},ze=v(function(e,r){if(r.$)return e;var n=r.a;return n}),ng=k(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dM;return(ce(o+r.gw,Un(n).b6)>0?a(Te,rg,ze(a(wr,ui,i))):ir)(a(wr,$$({dM:o+r.gw}),i));default:var c=i.r,l=c.a,u=c.b,m=a(a$,l.gi,Ce(r,{b6:l.b6+r.gw})),s=a(e,m,u);return a(wr,nc,{r:z(m,s),am:D,W:a(M,i.r,i.W)})}}),v$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),ag=k(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(M,t,n);e=o,r=c,n=l;continue e}else return n}}),tg=v(function(e,r){return nr(b(ag,e,r,D))}),f$=k(function(e,r,n){if(r<=0)return D;{var t=z(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,c=o.a;return $([y,c]);case 3:if(t.b.b.b.b){var l=t.b,y=l.a,u=l.b,c=u.a,m=u.b,s=m.a;return $([y,c,s])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,y=d.a,g=d.b,c=g.a,f=g.b,s=f.a,_=f.b,x=_.a,w=_.b;return e>1e3?a(M,y,a(M,c,a(M,s,a(M,x,a(tg,r-4,w))))):a(M,y,a(M,c,a(M,s,a(M,x,b(f$,e+1,r-4,w)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var S=t.b,y=S.a;return $([y])}}),ig=v(function(e,r){return b(f$,0,e,r)}),og=v(function(e,r){var n=r.b.W,t=r.b.r,i=r.b.am,o=W(nr(n),W($([t]),i)),c=a(ig,e,o),l=a(v$,e,o);if(l.b){var u=l.a,m=l.b;return a(wr,ui,{r:u,am:m,W:nr(c)})}else{var s=nr(c);if(s.b){var d=s.a,g=s.b;return a(wr,ui,{r:d,am:D,W:g})}else return r}}),cg=function(e){var r=e.b;return a(wr,ui,r)},lg=function(e){var r=e.b;return a(wr,$$({dM:Un(e).b6}),r)},ug=function(e){var r=e.b;return a(wr,nc,r)},$g=v(function(e,r){switch(e.$){case 1:return cg(r);case 2:return ug(r);case 3:return lg(r);default:var n=e.a;return a(og,n,r)}}),$i=v(function(e,r){var n=r.a,t=r.b;return z(e(n),t)}),vg=v(function(e,r){return Ce(r,{aM:e(r.aM)})}),fg=function(e){return{$:3,a:e}},m$=function(e){return{$:2,a:e}},s$=v(function(e,r){return{$:0,a:e,b:r}}),mg=v(function(e,r){return{$:1,a:e,b:r}}),De=v(function(e,r){if(r.$)return B;var n=r.a;return j(e(n))}),me=function(e){return e<0?-e:e},d$=ld,sg=k(function(e,r,n){return a(ze,0/0,d$(a(e,r,n)))}),ga=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),dg=Xs,p$=function(e){return b(dg,M,D,e)},pg=v(function(e,r){var n=a(ga,function(t){return t!=="0"&&t!=="."},p$(r));return W(e&&n?"-":"",r)}),ae=tu,ac=Us,g$=vd,h$=function(e){var r=e.a,n=e.b;if(r==="9"){var t=da(n);if(t.$===1)return"01";var i=t.a;return a(ac,"0",h$(i))}else{var o=Gr(r);return o>=48&&o<57?a(ac,g$(o+1),n):"0"}},tc=js,gg=Gs,vi=function(e){return a(ac,e,"")},b$=k(function(e,r,n){return e<=0?n:b(b$,e>>1,W(r,r),e&1?W(n,r):n)}),ft=v(function(e,r){return b(b$,e,r,"")}),ic=k(function(e,r,n){return W(n,a(ft,e-On(n),vi(r)))}),oc=Ys,_$=function(e){var r=a(Uo,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},hg=function(e){var r=a(Uo,"e",ae(me(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(ze,0,i$(a(Z0,"+",i)?a(ut,1,i):i)),c=_$(n),l=c.a,u=c.b,m=W(l,u),s=o<0?a(ze,"0",a(De,function(d){var g=d.a,f=d.b;return g+("."+f)},a(De,$i(vi),da(W(a(ft,me(o),"0"),m))))):b(ic,o+1,"0",m);return W(e<0?"-":"",s)}else{var n=r.a;return W(e<0?"-":"",n)}else return""},bg=k(function(e,r,n){if(tc(n)||gg(n))return ae(n);var t=n<0,i=_$(hg(me(n))),o=i.a,c=i.b,l=On(o)+r,u=W(a(ft,-l+1,"0"),b(ic,l,"0",W(o,c))),m=On(u),s=a(ar,1,l),d=a(e,t,b(pa,s,m,u)),g=b(pa,0,s,u),f=d?oc(a(ze,"1",a(De,h$,da(oc(g))))):g,_=On(f),x=f==="0"?f:r<=0?W(f,a(ft,me(r),"0")):ce(r,On(c))<0?b(pa,0,_-r,f)+("."+b(pa,_-r,_,f)):W(o+".",b(ic,r,"0",c));return a(pg,t,x)}),x$=bg(v(function(e,r){var n=da(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Gr(i))})),_g=sg(x$),xg=k(function(e,r,n){var t=a(Yo,10,me(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(_g,i,n)}),y$=ks,mt=v(function(e,r){e:for(;;){if(r.$===-2)return B;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(y$,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return j(t);default:var l=e,u=o;e=l,r=u;continue e}}}),te=Be(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Or={$:-2},ha=Be(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var m=t.b,s=t.c,d=t.d,g=t.e;return F(te,0,r,n,F(te,1,m,s,d,g),F(te,1,o,c,l,u))}else return F(te,e,o,c,F(te,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var m=t.b,s=t.c,f=t.d;f.a;var _=f.b,x=f.c,w=f.d,S=f.e,g=t.e;return F(te,0,m,s,F(te,1,_,x,w,S),F(te,1,r,n,g,i))}else return F(te,e,r,n,t,i)}),cc=k(function(e,r,n){if(n.$===-2)return F(te,0,e,r,Or,Or);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a(y$,e,i);switch(u){case 0:return F(ha,t,i,o,b(cc,e,r,c),l);case 1:return F(te,t,i,r,c,l);default:return F(ha,t,i,o,c,b(cc,e,r,l))}}),ba=k(function(e,r,n){var t=b(cc,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return F(te,1,i,o,c,l)}else{var u=t;return u}}),yg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},w$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,x=g.d,w=g.e,S=m.e;return F(te,0,f,_,F(te,1,n,t,F(te,0,o,c,l,u),x),F(te,1,s,d,w,S))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,c=y.c,l=y.d,u=y.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return F(te,1,n,t,F(te,0,o,c,l,u),F(te,0,s,d,g,S))}else return e},S$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,m=l.c,s=l.d,d=l.e,g=i.e,f=e.e;f.a;var _=f.b,x=f.c,w=f.d,S=f.e;return F(te,0,o,c,F(te,1,u,m,s,d),F(te,1,n,t,g,F(te,0,_,x,w,S)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,c=y.c,C=y.d,g=y.e,E=e.e;E.a;var _=E.b,x=E.c,w=E.d,S=E.e;return F(te,1,n,t,F(te,0,o,c,C,g),F(te,0,_,x,w,S))}else return e},wg=qt(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,m=o.d,s=o.e;return F(te,n,l,u,m,F(te,0,t,i,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,S$(r)}else break e;else return c.a,c.d,S$(r);else break e;return r}}),fi=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,F(te,r,n,t,fi(i),l);var u=w$(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return F(ha,m,s,d,fi(g),f)}else return Or}else return F(te,r,n,t,fi(i),l)}else return Or},st=v(function(e,r){if(r.$===-2)return Or;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(ce(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,F(te,n,t,i,a(st,e,o),c);var u=w$(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return F(ha,m,s,d,a(st,e,g),f)}else return Or}else return F(te,n,t,i,a(st,e,o),c);else return a(Sg,e,Co(wg,e,r,n,t,i,o,c))}),Sg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(oe(e,t)){var l=yg(c);if(l.$===-1){var u=l.b,m=l.c;return F(ha,n,u,m,o,fi(c))}else return Or}else return F(ha,n,t,i,o,a(st,e,c))}else return Or}),Cg=v(function(e,r){var n=a(st,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return F(te,1,t,i,o,c)}else{var l=n;return l}}),mi=k(function(e,r,n){var t=r(a(mt,e,n));if(t.$)return a(Cg,e,n);var i=t.a;return b(ba,e,i,n)}),zg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(mi,r,De(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(mg,z(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(mi,r,De(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(s$,z(o,c),b(xg,o,c,n))}));case 3:var r=e.a,n=e.b;return a(mi,r,De(function(t){return t.$===3?fg(n):t}));default:var r=e.a,n=e.b;return a(mi,r,De(function(t){return t.$===2?m$(n):t}))}},Lg=function(e){return vg(zg(e))},Pg=v(function(e,r){return a(J,Lg(e),r)}),Mg=v(function(e,r){return Ce(r,{gi:a(Pg,e,r.gi)})}),kg=v(function(e,r){var n=r.a,t=r.b;return a(wr,n,Ce(t,{r:a($i,Mg(e),t.r)}))}),lc=v(function(e,r){var n=r.a,t=r.b;return z(n,e(t))}),Tg=k(function(e,r,n){var t=n.a,i=n.b,o=i.r;return a(wr,t,Ce(i,{r:a(lc,a(e,o.a,r),o)}))}),Dg=O(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Ce(t,{bw:!t.bw});case 2:var i=n.a;return Ce(t,{Q:b(ng,e,i,t.Q)});case 3:var o=n.a;return Ce(t,{bp:o});case 4:var c=n.a;return Ce(t,{Q:a(kg,c,t.Q)});case 5:var l=n.a;return Ce(t,{Q:b(Tg,r,l,t.Q)});default:var u=n.a;return Ce(t,{Q:a($g,u,t.Q)})}}),Fg=v(function(e,r){return a(wr,nc,{r:z(e,r(e)),am:D,W:D})}),Ag=Bd,C$=Ag(D),Ig=function(e){return{$:2,a:e}},si=gd,_a=pd,Eg=Wd("tick",a(G,function(e){return a(G,function(r){return a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(c){return tr({b6:c,c_:o,gw:i,g9:t,dz:n,cF:r,iq:e})},a(Z,"clock",je))},a(Z,"devicePixelRatio",je))},a(Z,"dt",je))},a(Z,"keyboard",a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(c){return a(G,function(l){return a(G,function(u){return a(G,function(m){return a(G,function(s){return a(G,function(d){return tr({fQ:d,gk:s,d8:m,gv:u,ha:l,hw:c,hC:o,hO:i,fs:t})},a(Z,"alt",_e))},a(Z,"control",_e))},a(Z,"down",_e))},a(Z,"downs",si(_a)))},a(Z,"left",_e))},a(Z,"pressedKeys",si(_a)))},a(Z,"right",_e))},a(Z,"shift",_e))},a(Z,"up",_e))))},a(Z,"pointer",a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(c){return a(G,function(l){return a(G,function(u){return a(G,function(m){return tr({d8:m,eo:u,hg:l,hD:c,hE:o,fs:i,it:t,ix:n})},a(Z,"down",_e))},a(Z,"isDown",_e))},a(Z,"move",_e))},a(Z,"rightDown",_e))},a(Z,"rightUp",_e))},a(Z,"up",_e))},a(Z,"x",je))},a(Z,"y",je))))},a(Z,"screen",a(G,function(r){return a(G,function(n){return tr({gO:n,ir:r})},a(Z,"height",je))},a(Z,"width",je))))},a(Z,"wheel",a(G,function(e){return a(G,function(r){return tr({go:r,gp:e})},a(Z,"deltaX",je))},a(Z,"deltaY",je))))),Bg=function(e){return e.dS,Eg(Ig)},Rg=function(e){return{$:5,a:e}},Vg={$:0},di=v(function(e,r){return e}),jg=function(e){var r=e.b.r;return r.b},Ng=function(e){return{$:1,a:e}},Wg=Ng,z$=function(e){return{$:8,a:e}},pe=z$,dt=function(e){return{$:0,a:e}},pt=k(function(e,r,n){return e(r(n))}),Zg=a(pt,dt,di),Sn=Zg,Le=function(e){return{$:1,a:e}},$n=Le,L$=v(function(e,r){return{$:9,a:e,b:r}}),Jn={$:0},P$=v(function(e,r){return r.$===3?Jn:a(L$,e,r)}),uc=function(e){return a(P$,4,e)},p={fF:"a",cO:"atv",fH:"ab",fI:"cx",fJ:"cy",fK:"acb",fL:"accx",fM:"accy",fN:"acr",d0:"al",d1:"ar",fO:"at",cP:"ah",cQ:"av",fR:"s",fX:"bh",fY:"b",f0:"w7",f2:"bd",f3:"bdt",b2:"bn",f4:"bs",b5:"cpe",ge:"cp",gf:"cpx",gg:"cpy",av:"c",ca:"ctr",cb:"cb",cc:"ccx",aw:"ccy",bt:"cl",cd:"cr",gj:"ct",gm:"cptr",gn:"ctxt",gE:"fcs",ee:"focus-within",gF:"fs",gJ:"g",c0:"hbh",c1:"hc",ei:"he",c2:"hf",ej:"hfp",gR:"hv",gU:"ic",gW:"fr",ck:"lbl",g_:"iml",g$:"imlf",g0:"imlp",g1:"implw",g2:"it",g8:"i",ey:"lnk",be:"nb",eZ:"notxt",hm:"ol",hn:"or",aT:"oq",hs:"oh",e1:"pg",e2:"p",ht:"ppe",hF:"ui",ae:"r",hI:"sb",hJ:"sbx",hK:"sby",hL:"sbt",hQ:"e",hR:"cap",hT:"sev",hZ:"sk",X:"t",h4:"tc",h5:"w8",h6:"w2",h7:"w9",h8:"tj",cI:"tja",h9:"tl",ia:"w3",ib:"w5",ic:"w4",id:"tr",ie:"w6",$8:"w1",ig:"tun",fq:"ts",a$:"clr",im:"u",dT:"wc",fB:"we",dU:"wf",fC:"wfp",dV:"wrp"},$c=on,Sr=v(function(e,r){return a(Eo,e,$c(r))}),Cr=Sr("className"),gr=function(e){return Le(Cr(e))},M$=v(function(e,r){return{$:2,a:e,b:r}}),Hg=v(function(e,r){return{$:1,a:e,b:r}}),Je=function(e){return{$:0,a:e}},hr=2,Gg={$:0},qn=Gg,Og={$:0},Ug=p.fR+(" "+p.av),Jg=p.fR+(" "+p.gJ),qg=p.fR+(" "+p.e1),Yg=p.fR+(" "+p.e2),Xg=p.fR+(" "+p.ae),Qg=p.fR+(" "+p.hQ),Kg=function(e){switch(e){case 0:return Xg;case 1:return Ug;case 2:return Qg;case 3:return Jg;case 4:return Yg;default:return qg}},k$=function(e){return{$:1,a:e}},Yn={$:0},vc=function(e){return{$:1,a:e}},T$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return W(n,e);case 2:var t=r.a;return W(e,t);default:var n=r.a,t=r.b;return W(n,W(e,t))}}),D$=k(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return W(a(J,function(o){return z(e,o)},t),r);case 2:var i=n.a;return W(r,a(J,function(o){return z(e,o)},i));default:var t=n.a,i=n.b;return W(a(J,function(o){return z(e,o)},t),W(r,a(J,function(o){return z(e,o)},i)))}}),pi=4,eh=function(e){return{$:0,a:e}},rh=function(e){return{$:1,a:e}},ue=function(e){return e>31?rh(1<<e-32):eh(1<<e)},F$=ue(41),A$=ue(40),I$=ue(42),E$=ue(43),Cn=Hr("div"),fc=Or,B$=fc,Ur=function(e){switch(e.$){case 0:var r=e.a;return T(r)+"px";case 1:return"auto";case 2:var n=e.a;return T(n)+"fr";case 3:var t=e.a,i=e.b;return"min"+(T(t)+Ur(i));default:var o=e.a,i=e.b;return"max"+(T(o)+Ur(i))}},we=Zs,Fe=function(e){return T(we(e*255))},mc=function(e){switch(e.$){case 0:return B;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return j("mv-"+(Fe(n)+("-"+(Fe(t)+("-"+Fe(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,x=f.b,w=f.c,S=e.d;return j("tfrm-"+(Fe(c)+("-"+(Fe(l)+("-"+(Fe(u)+("-"+(Fe(s)+("-"+(Fe(d)+("-"+(Fe(g)+("-"+(Fe(_)+("-"+(Fe(x)+("-"+(Fe(w)+("-"+Fe(S))))))))))))))))))))}},gt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var t=e.a;return"font-size-"+T(t);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(a(ee,"-",a(J,Ur,c.hG))+("-cols-"+(a(ee,"-",a(J,Ur,c.aj))+("-space-x-"+(Ur(c.hU.a)+("-space-y-"+Ur(c.hU.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(T(l.ae)+("-"+(T(l.gh)+("-"+(T(l.ir)+("-"+T(l.gO)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ee," ",a(J,function(s){var d=gt(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return a(ze,"",mc(o))}},nh=v(function(e,r){var n=r;return b(ba,e,0,n)}),ah=v(function(e,r){var n=a(mt,e,r);return!n.$}),th=v(function(e,r){var n=r;return a(ah,e,n)}),R$=v(function(e,r){var n=r.a,t=r.b,i=gt(e);return a(th,i,n)?r:z(a(nh,i,n),a(M,e,t))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ht=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},ih=k(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(M,i,n)}),Jr=v(function(e,r){return b(Ge,ih(e),D,r)}),xa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(T(we(r*255))+(","+T(we(n*255))+(","+T(we(t*255))+(","+(ae(i)+")")))))},sc=function(e){return a(ee," ",a(Jr,ir,$([e.en?j("inset"):B,j(ae(e.e_.a)+"px"),j(ae(e.e_.b)+"px"),j(ae(e.a2)+"px"),j(ae(e.bi)+"px"),j(xa(e.b8))])))},V$=function(e){return $([a(ht,L(p.ee)+":focus-within",a(Jr,ir,$([a(De,function(r){return a(re,"border-color",xa(r))},e.f1),a(De,function(r){return a(re,"background-color",xa(r))},e.fV),a(De,function(r){return a(re,"box-shadow",sc({a2:r.a2,b8:r.b8,en:!1,e_:a(lc,ct,a($i,ct,r.e_)),bi:r.bi}))},e.hM),j(a(re,"outline","none"))]))),a(ht,L(p.fR)+":focus .focusable, "+(L(p.fR)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(p.fR)+" .focusable-thumb"))),a(Jr,ir,$([a(De,function(r){return a(re,"border-color",xa(r))},e.f1),a(De,function(r){return a(re,"background-color",xa(r))},e.fV),a(De,function(r){return a(re,"box-shadow",sc({a2:r.a2,b8:r.b8,en:!1,e_:a(lc,ct,a($i,ct,r.e_)),bi:r.bi}))},e.hM),j(a(re,"outline","none"))])))])},qr=function(e){return Hr(pu(e))},j$=v(function(e,r){return a(Eo,Qd(e),gu(r))}),dc=v(function(e,r){return{$:2,a:e,b:r}}),pc=function(e){return{$:6,a:e}},N=v(function(e,r){return{$:1,a:e,b:r}}),br=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),oh=v(function(e,r){return{$:3,a:e,b:r}}),N$=$([0,1,2,3,4,5]),ch=v(function(e,r){return r.b?b(Ge,M,r,e):e}),or=function(e){return b(Ge,ch,D,e)},ya=v(function(e,r){return or(a(J,e,r))}),lh=function(e){switch(e){case 0:return L(p.gj);case 1:return L(p.cb);case 2:return L(p.cd);case 3:return L(p.bt);case 4:return L(p.cc);default:return L(p.aw)}},gi=function(e){switch(e){case 0:return L(p.fO);case 1:return L(p.fH);case 2:return L(p.d1);case 3:return L(p.d0);case 4:return L(p.fI);default:return L(p.fJ)}},bt=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,lh(n),i),a(N,L(p.fR),$([a(A,gi(n),o)]))])};return pc(a(ya,r,N$))},W$=$([a(h,"display","flex"),a(h,"flex-direction","column"),a(h,"white-space","pre"),a(A,L(p.c0),$([a(h,"z-index","0"),a(N,L(p.fX),$([a(h,"z-index","-1")]))])),a(A,L(p.hL),$([a(N,L(p.X),$([a(A,L(p.c2),$([a(h,"flex-grow","0")])),a(A,L(p.dU),$([a(h,"align-self","auto !important")]))]))])),a(N,L(p.c1),$([a(h,"height","auto")])),a(N,L(p.c2),$([a(h,"flex-grow","100000")])),a(N,L(p.dU),$([a(h,"width","100%")])),a(N,L(p.fC),$([a(h,"width","100%")])),a(N,L(p.dT),$([a(h,"align-self","flex-start")])),bt(function(e){switch(e){case 0:return z($([a(h,"justify-content","flex-start")]),$([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]));case 1:return z($([a(h,"justify-content","flex-end")]),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]));case 2:return z($([a(h,"align-items","flex-end")]),$([a(h,"align-self","flex-end")]));case 3:return z($([a(h,"align-items","flex-start")]),$([a(h,"align-self","flex-start")]));case 4:return z($([a(h,"align-items","center")]),$([a(h,"align-self","center")]));default:return z($([a(N,L(p.fR),$([a(h,"margin-top","auto"),a(h,"margin-bottom","auto")]))]),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))}})]),uh=function(e){var r=function(n){return $([a(N,L(p.fR),$([a(A,gi(n),e(n))]))])};return pc(a(ya,r,N$))},$h=function(){return $([0,1,2,3,4,5])}(),vh=$([a(br,"html,body",$([a(h,"height","100%"),a(h,"padding","0"),a(h,"margin","0")])),a(br,W(L(p.fR),W(L(p.hQ),L(p.gU))),$([a(h,"display","block"),a(A,L(p.c2),$([a(N,"img",$([a(h,"max-height","100%"),a(h,"object-fit","cover")]))])),a(A,L(p.dU),$([a(N,"img",$([a(h,"max-width","100%"),a(h,"object-fit","cover")]))]))])),a(br,L(p.fR)+":focus",$([a(h,"outline","none")])),a(br,L(p.hF),$([a(h,"width","100%"),a(h,"height","auto"),a(h,"min-height","100%"),a(h,"z-index","0"),a(A,W(L(p.fR),L(p.c2)),$([a(h,"height","100%"),a(N,L(p.c2),$([a(h,"height","100%")]))])),a(N,L(p.gW),$([a(A,L(p.be),$([a(h,"position","fixed"),a(h,"z-index","20")]))]))])),a(br,L(p.be),$([a(h,"position","relative"),a(h,"border","none"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(A,L(p.hQ),W$),pc(function(e){return a(J,e,$h)}(function(e){switch(e){case 0:return a(A,L(p.fF),$([a(h,"position","absolute"),a(h,"bottom","100%"),a(h,"left","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(N,L(p.c2),$([a(h,"height","auto")])),a(N,L(p.dU),$([a(h,"width","100%")])),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));case 1:return a(A,L(p.fY),$([a(h,"position","absolute"),a(h,"bottom","0"),a(h,"left","0"),a(h,"height","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")])),a(N,L(p.c2),$([a(h,"height","auto")]))]));case 2:return a(A,L(p.hn),$([a(h,"position","absolute"),a(h,"left","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));case 3:return a(A,L(p.hm),$([a(h,"position","absolute"),a(h,"right","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));case 4:return a(A,L(p.gW),$([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));default:return a(A,L(p.fX),$([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"z-index","0"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]))}}))])),a(br,L(p.fR),$([a(h,"position","relative"),a(h,"border","none"),a(h,"flex-shrink","0"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(h,"resize","none"),a(h,"font-feature-settings","inherit"),a(h,"box-sizing","border-box"),a(h,"margin","0"),a(h,"padding","0"),a(h,"border-width","0"),a(h,"border-style","solid"),a(h,"font-size","inherit"),a(h,"color","inherit"),a(h,"font-family","inherit"),a(h,"line-height","1"),a(h,"font-weight","inherit"),a(h,"text-decoration","none"),a(h,"font-style","inherit"),a(A,L(p.dV),$([a(h,"flex-wrap","wrap")])),a(A,L(p.eZ),$([a(h,"-moz-user-select","none"),a(h,"-webkit-user-select","none"),a(h,"-ms-user-select","none"),a(h,"user-select","none")])),a(A,L(p.gm),$([a(h,"cursor","pointer")])),a(A,L(p.gn),$([a(h,"cursor","text")])),a(A,L(p.ht),$([a(h,"pointer-events","none !important")])),a(A,L(p.b5),$([a(h,"pointer-events","auto !important")])),a(A,L(p.a$),$([a(h,"opacity","0")])),a(A,L(p.aT),$([a(h,"opacity","1")])),a(A,L(W(p.gR,p.a$))+":hover",$([a(h,"opacity","0")])),a(A,L(W(p.gR,p.aT))+":hover",$([a(h,"opacity","1")])),a(A,L(W(p.gE,p.a$))+":focus",$([a(h,"opacity","0")])),a(A,L(W(p.gE,p.aT))+":focus",$([a(h,"opacity","1")])),a(A,L(W(p.cO,p.a$))+":active",$([a(h,"opacity","0")])),a(A,L(W(p.cO,p.aT))+":active",$([a(h,"opacity","1")])),a(A,L(p.fq),$([a(h,"transition",a(ee,", ",a(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,L(p.hI),$([a(h,"overflow","auto"),a(h,"flex-shrink","1")])),a(A,L(p.hJ),$([a(h,"overflow-x","auto"),a(A,L(p.ae),$([a(h,"flex-shrink","1")]))])),a(A,L(p.hK),$([a(h,"overflow-y","auto"),a(A,L(p.av),$([a(h,"flex-shrink","1")])),a(A,L(p.hQ),$([a(h,"flex-shrink","1")]))])),a(A,L(p.ge),$([a(h,"overflow","hidden")])),a(A,L(p.gf),$([a(h,"overflow-x","hidden")])),a(A,L(p.gg),$([a(h,"overflow-y","hidden")])),a(A,L(p.dT),$([a(h,"width","auto")])),a(A,L(p.b2),$([a(h,"border-width","0")])),a(A,L(p.f2),$([a(h,"border-style","dashed")])),a(A,L(p.f3),$([a(h,"border-style","dotted")])),a(A,L(p.f4),$([a(h,"border-style","solid")])),a(A,L(p.X),$([a(h,"white-space","pre"),a(h,"display","inline-block")])),a(A,L(p.g2),$([a(h,"line-height","1.05"),a(h,"background","transparent"),a(h,"text-align","inherit")])),a(A,L(p.hQ),W$),a(A,L(p.ae),$([a(h,"display","flex"),a(h,"flex-direction","row"),a(N,L(p.fR),$([a(h,"flex-basis","0%"),a(A,L(p.fB),$([a(h,"flex-basis","auto")])),a(A,L(p.ey),$([a(h,"flex-basis","auto")]))])),a(N,L(p.c2),$([a(h,"align-self","stretch !important")])),a(N,L(p.ej),$([a(h,"align-self","stretch !important")])),a(N,L(p.dU),$([a(h,"flex-grow","100000")])),a(N,L(p.ca),$([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"align-self","stretch")])),a(N,"u:first-of-type."+p.fN,$([a(h,"flex-grow","1")])),a(N,"s:first-of-type."+p.fL,$([a(h,"flex-grow","1"),a(N,L(p.fI),$([a(h,"margin-left","auto !important")]))])),a(N,"s:last-of-type."+p.fL,$([a(h,"flex-grow","1"),a(N,L(p.fI),$([a(h,"margin-right","auto !important")]))])),a(N,"s:only-of-type."+p.fL,$([a(h,"flex-grow","1"),a(N,L(p.fJ),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(N,"s:last-of-type."+(p.fL+" ~ u"),$([a(h,"flex-grow","0")])),a(N,"u:first-of-type."+(p.fN+(" ~ s."+p.fL)),$([a(h,"flex-grow","0")])),bt(function(e){switch(e){case 0:return z($([a(h,"align-items","flex-start")]),$([a(h,"align-self","flex-start")]));case 1:return z($([a(h,"align-items","flex-end")]),$([a(h,"align-self","flex-end")]));case 2:return z($([a(h,"justify-content","flex-end")]),D);case 3:return z($([a(h,"justify-content","flex-start")]),D);case 4:return z($([a(h,"justify-content","center")]),D);default:return z($([a(h,"align-items","center")]),$([a(h,"align-self","center")]))}}),a(A,L(p.hT),$([a(h,"justify-content","space-between")])),a(A,L(p.ck),$([a(h,"align-items","baseline")]))])),a(A,L(p.av),$([a(h,"display","flex"),a(h,"flex-direction","column"),a(N,L(p.fR),$([a(h,"flex-basis","0px"),a(h,"min-height","min-content"),a(A,L(p.ei),$([a(h,"flex-basis","auto")]))])),a(N,L(p.c2),$([a(h,"flex-grow","100000")])),a(N,L(p.dU),$([a(h,"width","100%")])),a(N,L(p.fC),$([a(h,"width","100%")])),a(N,L(p.dT),$([a(h,"align-self","flex-start")])),a(N,"u:first-of-type."+p.fK,$([a(h,"flex-grow","1")])),a(N,"s:first-of-type."+p.fM,$([a(h,"flex-grow","1"),a(N,L(p.fJ),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]))])),a(N,"s:last-of-type."+p.fM,$([a(h,"flex-grow","1"),a(N,L(p.fJ),$([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]))])),a(N,"s:only-of-type."+p.fM,$([a(h,"flex-grow","1"),a(N,L(p.fJ),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(N,"s:last-of-type."+(p.fM+" ~ u"),$([a(h,"flex-grow","0")])),a(N,"u:first-of-type."+(p.fK+(" ~ s."+p.fM)),$([a(h,"flex-grow","0")])),bt(function(e){switch(e){case 0:return z($([a(h,"justify-content","flex-start")]),$([a(h,"margin-bottom","auto")]));case 1:return z($([a(h,"justify-content","flex-end")]),$([a(h,"margin-top","auto")]));case 2:return z($([a(h,"align-items","flex-end")]),$([a(h,"align-self","flex-end")]));case 3:return z($([a(h,"align-items","flex-start")]),$([a(h,"align-self","flex-start")]));case 4:return z($([a(h,"align-items","center")]),$([a(h,"align-self","center")]));default:return z($([a(h,"justify-content","center")]),D)}}),a(N,L(p.ca),$([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"width","100%"),a(h,"align-self","stretch !important")])),a(A,L(p.hT),$([a(h,"justify-content","space-between")]))])),a(A,L(p.gJ),$([a(h,"display","-ms-grid"),a(N,".gp",$([a(N,L(p.fR),$([a(h,"width","100%")]))])),a(oh,z("display","grid"),$([z("display","grid")])),uh(function(e){switch(e){case 0:return $([a(h,"justify-content","flex-start")]);case 1:return $([a(h,"justify-content","flex-end")]);case 2:return $([a(h,"align-items","flex-end")]);case 3:return $([a(h,"align-items","flex-start")]);case 4:return $([a(h,"align-items","center")]);default:return $([a(h,"justify-content","center")])}})])),a(A,L(p.e1),$([a(h,"display","block"),a(N,L(p.fR+":first-child"),$([a(h,"margin","0 !important")])),a(N,L(p.fR+(gi(3)+(":first-child + ."+p.fR))),$([a(h,"margin","0 !important")])),a(N,L(p.fR+(gi(2)+(":first-child + ."+p.fR))),$([a(h,"margin","0 !important")])),bt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(h,"float","right"),a(A,"::after",$([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 3:return z(D,$([a(h,"float","left"),a(A,"::after",$([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),a(A,L(p.g_),$([a(h,"white-space","pre-wrap !important"),a(h,"height","100%"),a(h,"width","100%"),a(h,"background-color","transparent")])),a(A,L(p.g1),$([a(A,L(p.hQ),$([a(h,"flex-basis","auto")]))])),a(A,L(p.g0),$([a(h,"white-space","pre-wrap !important"),a(h,"cursor","text"),a(N,L(p.g$),$([a(h,"white-space","pre-wrap !important"),a(h,"color","transparent")]))])),a(A,L(p.e2),$([a(h,"display","block"),a(h,"white-space","normal"),a(h,"overflow-wrap","break-word"),a(A,L(p.c0),$([a(h,"z-index","0"),a(N,L(p.fX),$([a(h,"z-index","-1")]))])),a(dc,L(p.X),$([a(h,"display","inline"),a(h,"white-space","normal")])),a(dc,L(p.e2),$([a(h,"display","inline"),a(A,"::after",$([a(h,"content","none")])),a(A,"::before",$([a(h,"content","none")]))])),a(dc,L(p.hQ),$([a(h,"display","inline"),a(h,"white-space","normal"),a(A,L(p.fB),$([a(h,"display","inline-block")])),a(A,L(p.gW),$([a(h,"display","flex")])),a(A,L(p.fX),$([a(h,"display","flex")])),a(A,L(p.fF),$([a(h,"display","flex")])),a(A,L(p.fY),$([a(h,"display","flex")])),a(A,L(p.hn),$([a(h,"display","flex")])),a(A,L(p.hm),$([a(h,"display","flex")])),a(N,L(p.X),$([a(h,"display","inline"),a(h,"white-space","normal")]))])),a(N,L(p.ae),$([a(h,"display","inline")])),a(N,L(p.av),$([a(h,"display","inline-flex")])),a(N,L(p.gJ),$([a(h,"display","inline-grid")])),bt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(h,"float","right")]));case 3:return z(D,$([a(h,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),a(A,".hidden",$([a(h,"display","none")])),a(A,L(p.$8),$([a(h,"font-weight","100")])),a(A,L(p.h6),$([a(h,"font-weight","200")])),a(A,L(p.ia),$([a(h,"font-weight","300")])),a(A,L(p.ic),$([a(h,"font-weight","400")])),a(A,L(p.ib),$([a(h,"font-weight","500")])),a(A,L(p.ie),$([a(h,"font-weight","600")])),a(A,L(p.f0),$([a(h,"font-weight","700")])),a(A,L(p.h5),$([a(h,"font-weight","800")])),a(A,L(p.h7),$([a(h,"font-weight","900")])),a(A,L(p.g8),$([a(h,"font-style","italic")])),a(A,L(p.hZ),$([a(h,"text-decoration","line-through")])),a(A,L(p.im),$([a(h,"text-decoration","underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(A,W(L(p.im),L(p.hZ)),$([a(h,"text-decoration","line-through underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(A,L(p.ig),$([a(h,"font-style","normal")])),a(A,L(p.h8),$([a(h,"text-align","justify")])),a(A,L(p.cI),$([a(h,"text-align","justify-all")])),a(A,L(p.h4),$([a(h,"text-align","center")])),a(A,L(p.id),$([a(h,"text-align","right")])),a(A,L(p.h9),$([a(h,"text-align","left")])),a(A,".modal",$([a(h,"position","fixed"),a(h,"left","0"),a(h,"top","0"),a(h,"width","100%"),a(h,"height","100%"),a(h,"pointer-events","none")]))]))]),zn=function(e){return $([a(br,".v-"+e,$([a(h,"font-feature-settings",'"'+(e+'"'))])),a(br,".v-"+(e+"-off"),$([a(h,"font-feature-settings",'"'+(e+'" 0'))]))])},fh=or($([a(J,function(e){return a(br,".border-"+T(e),$([a(h,"border-width",T(e)+"px")]))},a(un,0,6)),a(J,function(e){return a(br,".font-size-"+T(e),$([a(h,"font-size",T(e)+"px")]))},a(un,8,32)),a(J,function(e){return a(br,".p-"+T(e),$([a(h,"padding",T(e)+"px")]))},a(un,0,24)),$([a(br,".v-smcp",$([a(h,"font-variant","small-caps")])),a(br,".v-smcp-off",$([a(h,"font-variant","normal")]))]),zn("zero"),zn("onum"),zn("liga"),zn("dlig"),zn("ordn"),zn("tnum"),zn("afrc"),zn("frac")])),mh=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fR+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fR+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),sh=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,dh=`
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
`,ph=`
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
`,gh=`
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
`,hh="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(p.fR)+(L(p.ae)+(" > "+(L(p.fR)+(" { flex-basis: auto !important; } "+(L(p.fR)+(L(p.ae)+(" > "+(L(p.fR)+(L(p.ca)+(" { flex-basis: auto !important; }}"+(sh+(dh+(gh+(ph+mh))))))))))))))),wa=function(e){return a(ee,"",e)},Sa=v(function(e,r){return{b7:r,F:D,aD:D,af:e}}),Ca=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Ce(o,{aD:a(M,z(c,l),o.aD)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return Ce(o,{F:a(M,{b7:`
}`,F:D,aD:d,af:"@supports ("+(m+(":"+(s+(") {"+n.af))))},o.F)});case 5:var g=i.a,f=i.b;return Ce(o,{F:a(M,a(Ca,a(Sa,n.af+(" + "+g),""),f),o.F)});case 1:var _=i.a,x=i.b;return Ce(o,{F:a(M,a(Ca,a(Sa,n.af+(" > "+_),""),x),o.F)});case 2:var _=i.a,x=i.b;return Ce(o,{F:a(M,a(Ca,a(Sa,n.af+(" "+_),""),x),o.F)});case 4:var w=i.a,S=i.b;return Ce(o,{F:a(M,a(Ca,a(Sa,W(n.af,w),""),S),o.F)});default:var y=i.a;return Ce(o,{F:a(M,a(Ca,a(Sa,n.af,""),y),o.F)})}});return b(Ge,t,n,r)}),bh=function(e){var r=function(i){return wa(a(J,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aD;return o.b?i.af+("{"+(r(i.aD)+(i.b7+"}"))):""},t=function(i){var o=i;return W(n(o),wa(a(J,t,o.F)))};return wa(a(J,t,b(Ge,v(function(i,o){var c=i.a,l=i.b;return a(M,a(Ca,a(Sa,c,""),l),o)}),D,e)))},Z$=W(hh,bh(W(vh,fh))),Ln=Io,H$=function(e){var r=e.eX;switch(r){case 0:return b(qr,"div",D,$([b(qr,"style",D,$([Ln(Z$)]))]));case 1:return Ln("");default:return b(qr,"elm-ui-static-rules",$([a(j$,"rules",$c(Z$))]),D)}},_h=v(function(e,r){return on(b(Ee,Ld(e),Sd(),r))}),xh=function(e){return on(b(Ee,v(function(r,n){var t=r.a,i=r.b;return b(zd,t,i,n)}),Cd(),e))},yh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hi;return'"'+(r+'"')}},wh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},Sh=function(e){if(e.$===5){var r=e.a;return a(ga,wh,r.fv)}else return!1},Xn=v(function(e,r){return ce(e,r)<0?e:r}),_t=k(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Pe=O(function(e,r,n,t){if(r.$===1)return $([n+("{"+(b(Ee,_t(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gR;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ee,_t(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ee,_t(!1),"",t)+`
}`))])}case 0:var c=b(Ee,_t(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fR+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(p.fR)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(b(Ee,_t(!1),"",t)+`
}`))])}}),Ch=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+T(n)))}},zh=function(e){if(e.$===5){var r=e.a;return j(a(ee,", ",a(J,Ch,r.fv)))}else return B},Lh=function(e){switch(e.$){case 0:return B;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return j("translate3d("+(ae(n)+("px, "+(ae(t)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,x=f.b,w=f.c,S=e.d,y="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),E="rotate3d("+(ae(_)+(", "+(ae(x)+(", "+(ae(w)+(", "+(ae(S)+"rad)")))))));return j(y+(" "+(C+(" "+E))))}},gc=k(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(Pe,e,n,t,i);case 13:var o=r.a,c=r.b;return P(Pe,e,n,"."+o,$([a(re,"box-shadow",c)]));case 12:var o=r.a,l=r.b,u=a(ar,0,a(Xn,1,1-l));return P(Pe,e,n,"."+o,$([a(re,"opacity",ae(u))]));case 2:var m=r.a;return P(Pe,e,n,".font-size-"+T(m),$([a(re,"font-size",T(m)+"px")]));case 1:var o=r.a,s=r.b,d=a(ee,", ",a(Jr,zh,s)),g=$([a(re,"font-family",a(ee,", ",a(J,yh,s))),a(re,"font-feature-settings",d),a(re,"font-variant",a(ga,Sh,s)?"small-caps":"normal")]);return P(Pe,e,n,"."+o,g);case 3:var f=r.a,c=r.b,_=r.c;return P(Pe,e,n,"."+f,$([a(re,c,_)]));case 4:var f=r.a,c=r.b,x=r.c;return P(Pe,e,n,"."+f,$([a(re,c,xa(x))]));case 5:var w=r.a,S=r.b,y=r.c,C=T(y)+"px",E=T(S)+"px",U="."+p.ae,X="."+(p.dV+U),H="."+p.d1,q="."+p.e2,Y="."+p.e1,V="."+p.d0,ne=ae(y/2)+"px",ve=ae(S/2)+"px",xe="."+p.av,f="."+w,fe="."+p.fR;return or($([P(Pe,e,n,f+(U+(" > "+(fe+(" + "+fe)))),$([a(re,"margin-left",E)])),P(Pe,e,n,f+(X+(" > "+fe)),$([a(re,"margin",ne+(" "+ve))])),P(Pe,e,n,f+(xe+(" > "+(fe+(" + "+fe)))),$([a(re,"margin-top",C)])),P(Pe,e,n,f+(Y+(" > "+(fe+(" + "+fe)))),$([a(re,"margin-top",C)])),P(Pe,e,n,f+(Y+(" > "+V)),$([a(re,"margin-right",E)])),P(Pe,e,n,f+(Y+(" > "+H)),$([a(re,"margin-left",E)])),P(Pe,e,n,W(f,q),$([a(re,"line-height","calc(1em + "+(T(y)+"px)"))])),P(Pe,e,n,"textarea"+(fe+f),$([a(re,"line-height","calc(1em + "+(T(y)+"px)")),a(re,"height","calc(100% + "+(T(y)+"px)"))])),P(Pe,e,n,f+(q+(" > "+V)),$([a(re,"margin-right",E)])),P(Pe,e,n,f+(q+(" > "+H)),$([a(re,"margin-left",E)])),P(Pe,e,n,f+(q+"::after"),$([a(re,"content","''"),a(re,"display","block"),a(re,"height","0"),a(re,"width","0"),a(re,"margin-top",T(-1*(y/2|0))+"px")])),P(Pe,e,n,f+(q+"::before"),$([a(re,"content","''"),a(re,"display","block"),a(re,"height","0"),a(re,"width","0"),a(re,"margin-bottom",T(-1*(y/2|0))+"px")]))]));case 7:var w=r.a,se=r.b,H=r.c,ye=r.d,V=r.e,f="."+w;return P(Pe,e,n,f,$([a(re,"padding",ae(se)+("px "+(ae(H)+("px "+(ae(ye)+("px "+(ae(V)+"px")))))))]));case 6:var w=r.a,se=r.b,H=r.c,ye=r.d,V=r.e,f="."+w;return P(Pe,e,n,f,$([a(re,"border-width",T(se)+("px "+(T(H)+("px "+(T(ye)+("px "+(T(V)+"px")))))))]));case 8:var de=r.a,Ie=k(function(He,Qa,tn){e:for(;;)switch(tn.$){case 0:var _s=tn.a;return T(_s)+"px";case 1:var kr=z(He,Qa);if(kr.a.$===1){if(kr.b.$===1)return kr.a,kr.b,"max-content";kr.a;var Wn=kr.b.a;return"minmax(max-content, "+(T(Wn)+"px)")}else if(kr.b.$===1){var Zn=kr.a.a;return kr.b,"minmax("+(T(Zn)+"px, max-content)")}else{var Zn=kr.a.a,Wn=kr.b.a;return"minmax("+(T(Zn)+("px, "+(T(Wn)+"px)")))}case 2:var nu=tn.a,Tr=z(He,Qa);if(Tr.a.$===1){if(Tr.b.$===1)return Tr.a,Tr.b,T(nu)+"fr";Tr.a;var Wn=Tr.b.a;return"minmax(max-content, "+(T(Wn)+"px)")}else if(Tr.b.$===1){var Zn=Tr.a.a;return Tr.b,"minmax("+(T(Zn)+("px, "+(T(nu)+"frfr)")))}else{var Zn=Tr.a.a,Wn=Tr.b.a;return"minmax("+(T(Zn)+("px, "+(T(Wn)+"px)")))}case 3:var bo=tn.a,_o=tn.b,xo=j(bo),yo=Qa,wo=_o;He=xo,Qa=yo,tn=wo;continue e;default:var bo=tn.a,_o=tn.b,xo=He,yo=j(bo),wo=_o;He=xo,Qa=yo,tn=wo;continue e}}),ke=function(He){return b(Ie,B,B,He)};ke(de.hU.a);var qe=ke(de.hU.b),Nn=function(He){return"grid-template-rows: "+(He+";")}(a(ee," ",a(J,ke,de.hG))),Ya=function(He){return"-ms-grid-rows: "+(He+";")}(a(ee,qe,a(J,ke,de.aj))),nn=function(He){return"-ms-grid-columns: "+(He+";")}(a(ee,qe,a(J,ke,de.aj))),an="grid-row-gap:"+(ke(de.hU.b)+";"),va="grid-column-gap:"+(ke(de.hU.a)+";"),Ut=function(He){return"grid-template-columns: "+(He+";")}(a(ee," ",a(J,ke,de.aj))),f=".grid-rows-"+(a(ee,"-",a(J,Ur,de.hG))+("-cols-"+(a(ee,"-",a(J,Ur,de.aj))+("-space-x-"+(Ur(de.hU.a)+("-space-y-"+Ur(de.hU.b))))))),Xa=f+("{"+(Ut+(Nn+(va+(an+"}"))))),go="@supports (display:grid) {"+(Xa+"}"),ho=f+("{"+(nn+(Ya+"}")));return $([ho,go]);case 9:var rr=r.a,ds=a(ee," ",$(["-ms-grid-row: "+(T(rr.ae)+";"),"-ms-grid-row-span: "+(T(rr.gO)+";"),"-ms-grid-column: "+(T(rr.gh)+";"),"-ms-grid-column-span: "+(T(rr.ir)+";")])),ps=a(ee," ",$(["grid-row: "+(T(rr.ae)+(" / "+(T(rr.ae+rr.gO)+";"))),"grid-column: "+(T(rr.gh)+(" / "+(T(rr.gh+rr.ir)+";")))])),f=".grid-pos-"+(T(rr.ae)+("-"+(T(rr.gh)+("-"+(T(rr.ir)+("-"+T(rr.gO))))))),Xa=f+("{"+(ps+"}")),go="@supports (display:grid) {"+(Xa+"}"),ho=f+("{"+(ds+"}"));return $([ho,go]);case 11:var f=r.a,gs=r.b,hs=function(He){return b(gc,e,He,j(f))};return a(ya,hs,gs);default:var Vr=r.a,_=Lh(Vr),f=mc(Vr),Jt=z(f,_);if(!Jt.a.$&&!Jt.b.$){var w=Jt.a.a,bs=Jt.b.a;return P(Pe,e,n,"."+w,$([a(re,"transform",bs)]))}else return D}}),Ph=v(function(e,r){return xh(a(J,function(n){var t=b(gc,e,n,B);return z(gt(n),a(_h,$c,t))},r))}),hi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ee,"",a(J,n,r))+"}"))}),G$=k(function(e,r,n){var t=n.a,i=n.b;return $([a(hi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(hi,"."+(e+("."+(r+("> ."+(p.X+(", ."+(e+(" ."+(r+(" > ."+p.X)))))))))),i)])}),Mh=k(function(e,r,n){var t=r.a,i=r.b,o=oe(e,n)?e:n+(" ."+e);return a(ee," ",W(b(G$,o,p.hR,i),b(G$,o,p.gF,t)))}),kh=v(function(e,r){var n=oe(e,r)?e:r+(" ."+e);return a(ee," ",$([a(hi,"."+(n+("."+(p.hR+(", "+("."+(n+(" ."+p.hR))))))),$([z("line-height","1")])),a(hi,"."+(n+("."+(p.hR+("> ."+(p.X+(", ."+(n+(" ."+(p.hR+(" > ."+p.X)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),O$=k(function(e,r,n){return{gO:r/e,bi:e,fw:n}}),bi=v(function(e,r){return b(Ge,v(function(n,t){return e(n)?a(M,n,t):t}),D,r)}),Th=function(e){if(e.b){var r=e.a,n=e.b;return j(b(Ee,ar,r,n))}else return B},U$=function(e){if(e.b){var r=e.a,n=e.b;return j(b(Ee,Xn,r,n))}else return B},J$=function(e){var r=$([e.f8,e.fW,e.gr,e.hd]),n=a(ze,e.gr,U$(r)),t=a(ze,e.fW,U$(a(bi,function(m){return!oe(m,n)},r))),i=a(ze,e.f8,Th(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f8:b(O$,o,i-t,c),eg:b(O$,l,i-n,u)}},q$=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ae(e.gO)),z("vertical-align",ae(e.fw)+"em"),z("font-size",ae(e.bi)+"em")]))},Dh=function(e){return b(Ee,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fG;if(i.$===1)return n;var o=i.a;return j(z(q$(function(c){return c.eg}(J$(o))),q$(function(c){return c.f8}(J$(o)))))}else return n;else return n}),B,e)},Fh=function(e){var r=function(o){if(o.$===4){var c=o.b;return j("@import url('"+(c+"');"))}else return B},n=function(o){o.a;var c=o.b,l=a(ee,`
`,a(Jr,r,c));return l},t=a(J,r$,e),i=function(o){var c=o.a,l=o.b,u=Dh(l);if(u.$===1)return a(ee,"",a(J,kh(c),t));var m=u.a;return a(ee,"",a(J,a(Mh,c,m),t))};return W(a(ee,`
`,a(J,n,e)),a(ee,`
`,a(J,i,e)))},Ah=function(e){if(e.$===1){var r=e.a,n=e.b;return j(z(r,n))}else return B},Y$=v(function(e,r){var n=v(function(c,l){return{cD:W(l.cD,b(gc,e,c,B)),bT:function(){var u=Ah(c);if(u.$===1)return l.bT;var m=u.a;return a(M,m,l.bT)}()}}),t=b(Ee,n,{cD:D,bT:D},r),i=t.bT,o=t.cD;return W(Fh(i),wa(o))}),X$=v(function(e,r){var n=e.eX;switch(n){case 0:return b(qr,"div",D,$([b(qr,"style",D,$([Ln(a(Y$,e,r))]))]));case 1:return b(qr,"div",D,$([b(qr,"style",D,$([Ln(a(Y$,e,r))]))]));default:return b(qr,"elm-ui-rules",$([a(j$,"rules",a(Ph,e,r))]),D)}}),Q$=O(function(e,r,n,t){var i=a(X$,r,b(Ee,R$,z(B$,V$(r.gE)),n).b);return e?a(M,z("static-stylesheet",H$(r)),a(M,z("dynamic-stylesheet",i),t)):a(M,z("dynamic-stylesheet",i),t)}),K$=O(function(e,r,n,t){var i=a(X$,r,b(Ee,R$,z(B$,V$(r.gE)),n).b);return e?a(M,H$(r),a(M,i,t)):a(M,i,t)}),hc=ue(45),xt=ue(37),ev=function(e){return Od(pu(e))},bc=Hr("p"),cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return oe(o&t,o)}else{var i=e.a;return oe(i&n,i)}}),rv=Hr("s"),nv=Hr("u"),_c=ue(44),yt=ue(39),_i=dr(function(e,r,n,t,i,o){var c=v(function(u,m){if(t.$===1){var s=t.a;return b(ev,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return P(Q$,!1,g,f,s);default:var g=i.a,f=i.b;return P(Q$,!0,g,f,s)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return Cn;case"p":return bc;default:return qr(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return P(K$,!1,g,f,d);default:var g=i.a,f=i.b;return P(K$,!0,g,f,d)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,m=r.b;return b(qr,u,n,$([a(c,m,$([Cr(p.fR+(" "+p.hQ))]))]))}}();switch(o){case 0:return a(cr,yt,e)&&!a(cr,_c,e)?l:a(cr,A$,e)?a(nv,$([Cr(a(ee," ",$([p.fR,p.hQ,p.ca,p.aw,p.fN])))]),$([l])):a(cr,I$,e)?a(rv,$([Cr(a(ee," ",$([p.fR,p.hQ,p.ca,p.aw,p.fL])))]),$([l])):l;case 1:return a(cr,xt,e)&&!a(cr,hc,e)?l:a(cr,E$,e)?a(rv,$([Cr(a(ee," ",$([p.fR,p.hQ,p.ca,p.fM])))]),$([l])):a(cr,F$,e)?a(nv,$([Cr(a(ee," ",$([p.fR,p.hQ,p.ca,p.fK])))]),$([l])):l;default:return l}}),Pn=function(e){return!e.b},za=Ln,Ih=p.fR+(" "+(p.X+(" "+(p.dT+(" "+p.c1))))),wt=function(e){return a(Cn,$([Cr(Ih)]),$([za(e)]))},Eh=p.fR+(" "+(p.X+(" "+(p.dU+(" "+p.c2))))),av=function(e){return a(Cn,$([Cr(Eh)]),$([za(e)]))},Bh=k(function(e,r,n){var t=v(function(_,x){var w=_.a,S=_.b,y=x.a,C=x.b;switch(S.$){case 0:var E=S.a;return oe(e,pi),z(a(M,z(w,E(e)),y),C);case 1:var U=S.a;return oe(e,pi),z(a(M,z(w,a(U.gS,Yn,e)),y),Pn(C)?U.h_:W(U.h_,C));case 2:var X=S.a;return z(a(M,z(w,oe(e,hr)?av(X):wt(X)),y),C);default:return z(y,C)}}),i=v(function(_,x){var w=x.a,S=x.b;switch(_.$){case 0:var y=_.a;return oe(e,pi),z(a(M,y(e),w),S);case 1:var C=_.a;return oe(e,pi),z(a(M,a(C.gS,Yn,e),w),Pn(S)?C.h_:W(C.h_,S));case 2:var E=_.a;return z(a(M,oe(e,hr)?av(E):wt(E),w),S);default:return z(w,S)}});if(r.$===1){var o=r.a,c=b(Ge,t,z(D,D),o),l=c.a,u=c.b,m=Pn(u)?n.h_:W(n.h_,u);if(m.b){var s=m;return vc({gS:P(_i,n.aQ,n.aS,n.aI,k$(b(D$,"nearby-element-pls",l,n.aL))),h_:s})}else return dt(F(_i,n.aQ,n.aS,n.aI,k$(b(D$,"nearby-element-pls",l,n.aL)),Yn))}else{var d=r.a,g=b(Ge,i,z(D,D),d),f=g.a,u=g.b,m=Pn(u)?n.h_:W(n.h_,u);if(m.b){var s=m;return vc({gS:P(_i,n.aQ,n.aS,n.aI,Je(a(T$,f,n.aL))),h_:s})}else return dt(F(_i,n.aQ,n.aS,n.aI,Je(a(T$,f,n.aL)),Yn))}}),lr=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Rh=function(e){return{$:10,a:e}},xi=v(function(e,r){return{$:0,a:e,b:r}}),le=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(xi,n,o|t)}else{var i=e.a;return a(xi,i|n,t)}}),tv=function(e){return{$:1,a:e}},yi=v(function(e,r){return{$:3,a:e,b:r}}),iv=function(e){return{$:2,a:e}},Vh=v(function(e,r){return a(Cn,$([Cr(function(){switch(e){case 0:return a(ee," ",$([p.be,p.hQ,p.fF]));case 1:return a(ee," ",$([p.be,p.hQ,p.fY]));case 2:return a(ee," ",$([p.be,p.hQ,p.hn]));case 3:return a(ee," ",$([p.be,p.hQ,p.hm]));case 4:return a(ee," ",$([p.be,p.hQ,p.gW]));default:return a(ee," ",$([p.be,p.hQ,p.fX]))}}())]),$([function(){switch(r.$){case 3:return Ln("");case 2:var n=r.a;return wt(n);case 0:var t=r.a;return t(hr);default:var i=r.a;return a(i.gS,Yn,hr)}}()]))}),jh=k(function(e,r,n){var t=a(Vh,e,r);switch(n.$){case 0:return e===5?tv($([t])):iv($([t]));case 1:var i=n.a;return e===5?tv(a(M,t,i)):a(yi,i,$([t]));case 2:var o=n.a;return e===5?a(yi,$([t]),o):iv(a(M,t,o));default:var i=n.a,o=n.b;return e===5?a(yi,a(M,t,i),o):a(yi,i,a(M,t,o))}}),ov=v(function(e,r){return{$:2,a:e,b:r}}),Mn=function(e){return{$:1,a:e}},Qn=v(function(e,r){switch(r.$){case 0:return Mn(e);case 1:var n=r.a;return a(ov,n,e);default:var t=r.a,i=r.b;return a(ov,t,i)}}),Nh=function(e){switch(e){case 0:return p.cP+(" "+p.d0);case 2:return p.cP+(" "+p.d1);default:return p.cP+(" "+p.fI)}},Wh=function(e){switch(e){case 0:return p.cQ+(" "+p.fO);case 2:return p.cQ+(" "+p.fH);default:return p.cQ+(" "+p.fJ)}},St=v(function(e,r){return a(Dr,Xd(e),gu(r))}),Yr=O(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),kn=function(e){return{$:1,a:e}},Zh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return kn(I(i,0,0));case 1:var o=r.a;return kn(I(0,o,0));case 2:var c=r.a;return kn(I(0,0,c));case 3:var n=r.a;return kn(n);case 4:var n=r.a,f=r.b;return P(Yr,I(0,0,0),I(1,1,1),n,f);default:var n=r.a;return P(Yr,I(0,0,0),n,I(0,0,1),0)}case 1:var t=e.a,i=t.a,o=t.b,c=t.c;switch(r.$){case 0:var l=r.a;return kn(I(l,o,c));case 1:var u=r.a;return kn(I(i,u,c));case 2:var m=r.a;return kn(I(i,o,m));case 3:var n=r.a;return kn(n);case 4:var n=r.a,f=r.b;return P(Yr,t,I(1,1,1),n,f);default:var s=r.a;return P(Yr,t,s,I(0,0,1),0)}default:var t=e.a,i=t.a,o=t.b,c=t.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return P(Yr,I(l,o,c),d,g,f);case 1:var u=r.a;return P(Yr,I(i,u,c),d,g,f);case 2:var m=r.a;return P(Yr,I(i,o,m),d,g,f);case 3:var _=r.a;return P(Yr,_,d,g,f);case 4:var x=r.a,w=r.b;return P(Yr,t,d,x,w);default:var S=r.a;return P(Yr,t,S,g,f)}}}),La=ue(7),cv=ue(36),lv=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(xi,n|i,t|o)}),vn=a(xi,0,0),xc=function(e){switch(e.$){case 0:var r=e.a,n=T(r),t="height-px-"+n;return I(vn,p.ei+(" "+t),$([b(lr,t,"height",n+"px")]));case 1:return I(a(le,cv,vn),p.c1,D);case 2:var i=e.a;return i===1?I(a(le,xt,vn),p.c2,D):I(a(le,xt,vn),p.ej+(" height-fill-"+T(i)),$([b(lr,p.fR+("."+(p.av+(" > "+L("height-fill-"+T(i))))),"flex-grow",T(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+T(o),u=b(lr,l,"min-height",T(o)+"px !important"),m=xc(c),s=m.a,d=m.b,g=m.c;return I(a(le,hc,s),l+(" "+d),a(M,u,g));default:var f=e.a,c=e.b,l="max-height-"+T(f),u=b(lr,l,"max-height",T(f)+"px"),_=xc(c),s=_.a,d=_.b,g=_.c;return I(a(le,hc,s),l+(" "+d),a(M,u,g))}},uv=ue(38),yc=function(e){switch(e.$){case 0:var r=e.a;return I(vn,p.fB+(" width-px-"+T(r)),$([b(lr,"width-px-"+T(r),"width",T(r)+"px")]));case 1:return I(a(le,uv,vn),p.dT,D);case 2:var n=e.a;return n===1?I(a(le,yt,vn),p.dU,D):I(a(le,yt,vn),p.fC+(" width-fill-"+T(n)),$([b(lr,p.fR+("."+(p.ae+(" > "+L("width-fill-"+T(n))))),"flex-grow",T(n*1e5))]));case 3:var t=e.a,i=e.b,o="min-width-"+T(t),c=b(lr,o,"min-width",T(t)+"px"),l=yc(i),u=l.a,m=l.b,s=l.c;return I(a(le,_c,u),o+(" "+m),a(M,c,s));default:var d=e.a,i=e.b,o="max-width-"+T(d),c=b(lr,o,"max-width",T(d)+"px"),g=yc(i),u=g.a,m=g.b,s=g.c;return I(a(le,_c,u),o+(" "+m),a(M,c,s))}},wi=ue(27),Hh=v(function(e,r){if(oe(e,wi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return oe(i,c)&&oe(i,o)&&oe(i,l)&&i>=0&&i<=24;default:return!1}}),Pa=ue(6),$v=ue(30),vv=ue(29),Gh=be(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var s=l.a,d=l.b;switch(s.$){case 0:var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 3:var E=s.a,U=s.b;if(a(cr,E,n)){var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else{var g=U+(" "+e),f=r,_=a(le,E,n),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}case 1:var X=s.a,g=e,f=r,_=n,x=t,w=i,S=a(M,X,o),y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 4:var E=s.a,H=s.b;if(a(cr,E,n)){var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else if(a(Hh,E,H)){var g=gt(H)+(" "+e),f=r,_=a(le,E,n),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else{var g=gt(H)+(" "+e),f=r,_=a(le,E,n),x=t,w=a(M,H,i),S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}case 10:var E=s.a,q=s.b,g=e,f=r,_=a(le,E,n),x=a(Zh,t,q),w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 7:var Y=s.a;if(a(cr,Pa,n)){var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else switch(Y.$){case 0:var V=Y.a,g=p.fB+(" width-px-"+T(V))+(" "+e),f=r,_=a(le,Pa,n),x=t,w=a(M,b(lr,"width-px-"+T(V),"width",T(V)+"px"),i),S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 1:var g=e+(" "+p.dT),f=r,_=a(le,uv,a(le,Pa,n)),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 2:var ne=Y.a;if(ne===1){var g=e+(" "+p.dU),f=r,_=a(le,yt,a(le,Pa,n)),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else{var g=e+(" "+(p.fC+(" width-fill-"+T(ne)))),f=r,_=a(le,yt,a(le,Pa,n)),x=t,w=a(M,b(lr,p.fR+("."+(p.ae+(" > "+L("width-fill-"+T(ne))))),"flex-grow",T(ne*1e5)),i),S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}default:var ve=yc(Y),xe=ve.a,fe=ve.b,an=ve.c,g=e+(" "+fe),f=r,_=a(lv,xe,a(le,Pa,n)),x=t,w=W(an,i),S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}case 8:var se=s.a;if(a(cr,La,n)){var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else switch(se.$){case 0:var V=se.a,ye=T(V)+"px",de="height-px-"+ye,g=p.ei+(" "+(de+(" "+e))),f=r,_=a(le,La,n),x=t,w=a(M,b(lr,de,"height ",ye),i),S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 1:var g=p.c1+(" "+e),f=r,_=a(le,cv,a(le,La,n)),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.c2+(" "+e),f=r,_=a(le,xt,a(le,La,n)),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else{var g=e+(" "+(p.ej+(" height-fill-"+T(ne)))),f=r,_=a(le,xt,a(le,La,n)),x=t,w=a(M,b(lr,p.fR+("."+(p.av+(" > "+L("height-fill-"+T(ne))))),"flex-grow",T(ne*1e5)),i),S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}default:var Ie=xc(se),xe=Ie.a,fe=Ie.b,an=Ie.c,g=e+(" "+fe),f=r,_=a(lv,xe,a(le,La,n)),x=t,w=W(an,i),S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}case 2:var ke=s.a;switch(ke.$){case 0:var g=e,f=a(Qn,"main",r),_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 1:var g=e,f=a(Qn,"nav",r),_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 2:var g=e,f=a(Qn,"footer",r),_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 3:var g=e,f=a(Qn,"aside",r),_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 4:var qe=ke.a;if(qe<=1){var g=e,f=a(Qn,"h1",r),_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else if(qe<7){var g=e,f=a(Qn,"h"+T(qe),r),_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else{var g=e,f=a(Qn,"h6",r),_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}case 9:var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 8:var g=e,f=r,_=n,x=t,w=i,S=a(M,a(St,"role","button"),o),y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 5:var Nn=ke.a,g=e,f=r,_=n,x=t,w=i,S=a(M,a(St,"aria-label",Nn),o),y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 6:var g=e,f=r,_=n,x=t,w=i,S=a(M,a(St,"aria-live","polite"),o),y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;default:var g=e,f=r,_=n,x=t,w=i,S=a(M,a(St,"aria-live","assertive"),o),y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}case 9:var Ya=s.a,nn=s.b,an=function(){switch(nn.$){case 3:return i;case 2:return nn.a,i;case 0:return nn.a,i;default:var Xa=nn.a;return W(i,Xa.h_)}}(),g=e,f=r,_=n,x=t,w=an,S=o,y=b(jh,Ya,nn,c),C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e;case 6:var va=s.a;if(a(cr,$v,n)){var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else{var g=Nh(va)+(" "+e),f=r,_=function(Vr){switch(va){case 1:return a(le,I$,Vr);case 2:return a(le,A$,Vr);default:return Vr}}(a(le,$v,n)),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}default:var Ut=s.a;if(a(cr,vv,n)){var g=e,f=r,_=n,x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}else{var g=Wh(Ut)+(" "+e),f=r,_=function(Vr){switch(Ut){case 1:return a(le,E$,Vr);case 2:return a(le,F$,Vr);default:return Vr}}(a(le,vv,n)),x=t,w=i,S=o,y=c,C=d;e=g,r=f,n=_,t=x,i=w,o=S,c=y,l=C;continue e}}}else{var u=mc(t);if(u.$===1)return{aI:a(M,Cr(e),o),aL:c,aQ:n,aS:r,h_:i};var m=u.a;return{aI:a(M,Cr(e+(" "+m)),o),aL:c,aQ:n,aS:r,h_:a(M,Rh(t),i)}}}),Oh={$:0},Uh=Oh,ur=O(function(e,r,n,t){return b(Bh,e,t,Ka(Gh,Kg(e),r,vn,Uh,D,D,Og,nr(n)))}),fn=O(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Jh={fV:B,f1:B,hM:j({a2:0,b8:P(fn,155/255,203/255,1,1),e_:z(0,0),bi:3})},qh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gR;return c.$===1?Ce(i,{gR:j(o)}):i;case 1:var l=t.a,u=i.gE;return u.$===1?Ce(i,{gE:j(l)}):i;default:var m=t.a,s=i.eX;return s.$===1?Ce(i,{eX:j(m)}):i}}),n=function(t){return{gE:function(){var i=t.gE;if(i.$===1)return Jh;var o=i.a;return o}(),gR:function(){var i=t.gR;if(i.$===1)return 1;var o=i.a;return o}(),eX:function(){var i=t.eX;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ge,r,{gE:B,gR:B,eX:B},e))},Yh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(hr);case 1:var t=r.a.h_,n=r.a.gS;return a(n,e(t),hr);case 2:var i=r.a;return wt(i);default:return wt("")}}),Xh=k(function(e,r,n){var t=qh(e),i=function(){var o=t.eX;return o===1?M$(t):Hg(t)}();return a(Yh,i,P(ur,hr,qn,r,Je($([n]))))}),Ct=k(function(e,r,n){return{$:4,a:e,b:r,c:n}}),fv=v(function(e,r){return{$:1,a:e,b:r}}),mv=function(e){return{$:2,a:e}},Qh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),wc=function(e){return{$:3,a:e}},sv=ue(8),dv=ue(14),pv=ue(5),gv=ue(4),Ma=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Fe(r)+("-"+(Fe(n)+("-"+(Fe(t)+("-"+Fe(i))))))},Si=nd,Sc=rd,hv=v(function(e,r){return W(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ee,"-",Sc(Si(n)));case 4:var n=e.a;return e.b,a(ee,"-",Sc(Si(n)));default:var n=e.a.hi;return a(ee,"-",Sc(Si(n)))}}())}),Kh=function(){var e=$([wc("Open Sans"),wc("Helvetica"),wc("Verdana"),Qh]);return $([a(ge,sv,b(Ct,"bg-"+Ma(P(fn,1,1,1,0)),"background-color",P(fn,1,1,1,0))),a(ge,dv,b(Ct,"fc-"+Ma(P(fn,0,0,0,1)),"color",P(fn,0,0,0,1))),a(ge,gv,mv(20)),a(ge,pv,a(fv,b(Ee,hv,"font-",e),e))])}(),e3=k(function(e,r,n){var t=e.hr;return b(Xh,t,a(M,gr(a(ee," ",$([p.hF,p.fR,p.hQ]))),W(Kh,r)),n)}),bv={$:3},_v=function(e){return{$:2,a:e}},Cc=Jd,xv=v(function(e,r){switch(r.$){case 1:var n=r.a;return vc({gS:v(function(o,c){return a(Cc,e,a(n.gS,o,c))}),h_:n.h_});case 0:var t=r.a;return dt(a(pt,Cc(e),t));case 2:var i=r.a;return _v(i);default:return bv}}),zc=xv,r3=Cc,n3=function(e){return{$:0,a:e}},Se=n3,a3=Yd,Ne=a3,yv={$:1},Ci=function(e){return{$:5,a:e}},wv=Ci(0),Ir=k(function(e,r,n){return P(fn,e/255,r/255,n/255,1)}),Sv=b(Ir,0,0,0),t3=Dr("d"),i3=Dr("fill"),o3=Dr("height"),Cv=su("http://www.w3.org/2000/svg"),c3=Cv("path"),l3=Cv("svg"),u3=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fP:i,fZ:t,gH:n,hz:r}},$3=function(e){var r=u3(e);return"rgba("+(T(we(r.hz*255))+(","+T(we(r.gH*255))+(","+T(we(r.fZ*255))+(","+ae(r.fP)+")"))))},v3=Dr("viewBox"),f3=Dr("width"),ka=k(function(e,r,n){return a(l3,$([v3("0 0 100 100"),f3(T(e)),o3(T(e))]),$([a(c3,$([t3(n),i3($3(r))]),D)]))}),m3={$:1},$r=m3,zv=function(e){return{$:7,a:e}},K=zv,he=v(function(e,r){return P(ur,hr,qn,a(M,K($r),a(M,pe($r),e)),Je($([r])))}),Lv=function(e){return{$:2,a:e}},$e=Lv(1),Kn={gu:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gG:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gN:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hu:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hv:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hy:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hS:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",il:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",io:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fE:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ta={c6:260,bE:54},mn=function(e){return a(ge,sv,b(Ct,"bg-"+Ma(e),"background-color",e))},s3=ue(28),Tn=function(e){return a(ge,s3,b(Ct,"bc-"+Ma(e),"border-color",e))},zi=1,zr=v(function(e,r){return P(ur,zi,qn,a(M,gr(p.gj+(" "+p.bt)),a(M,pe($r),a(M,K($r),e))),Je(r))}),d3=b(Ir,83,83,83),Pv=O(function(e,r,n,t){return P(fn,e/255,r/255,n/255,t)}),Li=P(Pv,56,56,56,.25),We=bv,zt=Be(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),Lt=ue(2),ea=function(e){var r=e;return a(ge,Lt,F(zt,"p-"+T(e),r,r,r,r))},Mv=k(function(e,r,n){return{$:5,a:e,b:r,c:n}}),kv=ue(3),Tv=v(function(e,r){return"spacing-"+(T(e)+("-"+T(r)))}),Dn=function(e){return a(ge,kv,b(Mv,a(Tv,e,e),e,e))},p3=P(Pv,0,0,0,0),g3=function(e){return{$:4,a:e}},Lc=0,Fn=v(function(e,r){return P(ur,Lc,qn,a(M,gr(p.bt+(" "+p.aw)),a(M,K($r),a(M,pe($r),e))),Je(r))}),h3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gS(a(M$,{gE:{fV:B,f1:B,hM:B},gR:1,eX:0},n.h_));case 2:var t=e.a;return di(Ln(t));default:return di(Ln(""))}},b3=v(function(e,r){return h3(e(r))}),_3=qd,x3=v(function(e,r){return dt(b(_3,b3,e,r))}),An=function(e){return a(ge,dv,b(Ct,"fc-"+Ma(e),"color",e))},Pc=b(Ir,195,195,195),In=v(function(e,r){return{$:3,a:e,b:r}}),Dv=ue(13),y3=a(In,Dv,p.ic),w3=ue(20),Fv=a(In,w3,p.hK),ra=function(e){return a(ge,gv,mv(e))},Mc=a(In,Dv,p.f0),kc=v(function(e,r){if(r.$===-2)return Or;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return F(te,n,t,a(e,t,i),a(kc,e,o),a(kc,e,c))}),Av=v(function(e,r){if(oe(e,r)){var n=e;return a(ge,Lt,F(zt,"p-"+T(e),n,n,n,n))}else{var t=r,i=e;return a(ge,Lt,F(zt,"p-"+(T(e)+("-"+T(r))),t,i,t,i))}}),En=function(e){return _v(e)},S3=function(e){return b(Go,k(function(r,n,t){return a(M,n,t)}),D,e)},C3=v(function(e,r){return{$:3,a:e,b:r}}),z3=v(function(e,r){return{$:2,a:e,b:r}}),L3=v(function(e,r){return{$:0,a:e,b:r}}),P3=v(function(e,r){return{$:1,a:e,b:r}}),Pi=O(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Tc=P(Pi,0/255,0/255,0/255,1),Mi=function(e){return{$:6,a:e}},M3=Mi(0),ki=function(e){return{$:2,a:e}},k3={$:6},Iv=ki(k3),Ev=k(function(e,r,n){if(r.$===1)return r.a,P(ur,zi,Mn("label"),e,Je($([n])));var t=r.a,i=r.b,o=r.c,c=P(ur,hr,qn,i,Je($([o])));switch(t){case 2:return P(ur,zi,Mn("label"),a(M,gr(p.ck),e),Je($([c,n])));case 3:return P(ur,zi,Mn("label"),a(M,gr(p.ck),e),Je($([n,c])));case 0:return P(ur,Lc,Mn("label"),a(M,gr(p.ck),e),Je($([n,c])));default:return P(ur,Lc,Mn("label"),a(M,gr(p.ck),e),Je($([c,n])))}}),Dc=St,sn=Ci(1),Bv="Enter",T3=function(e){return{$:5,a:e}},Rv=function(e){if(e.$===1){var r=e.a;return ki(T3(r))}else return Jn},Vv=function(e){return e.$===1},D3=function(e){return{$:0,a:e}},Fc=du,F3=v(function(e,r){return a(Fc,e,D3(r))}),jv=function(e){return a(F3,"click",tr(e))},A3=md,I3=function(e){return{$:2,a:e}},E3=v(function(e,r){return a(Fc,e,I3(r))}),Nv=function(e){var r=function(t){var i=e(t);if(i.$===1)return A3("No key matched");var o=i.a;return tr(o)},n=a(G,r,a(Z,"key",_a));return Le(a(E3,"keydown",a(ti,function(t){return z(t,!0)},n)))},B3=ue(21),na=a(In,B3,p.gm),Wv=" ",Zv=function(e){return a(Dr,"tabIndex",T(e))},R3=a(pt,Le,Zv),V3=v(function(e,r){var n=r.er,t=r.gT,i=r.gd,o=r.bI,c=W($([Vv(n)?Jn:Dn(6),Le(jv(o(!i))),Iv,Nv(function(l){return oe(l,Bv)||oe(l,Wv)?j(o(!i)):B}),R3(0),na,M3,K($e)]),e);return b(Ev,a(M,Le(a(Dc,"role","checkbox")),a(M,Le(a(Dc,"aria-checked",i?"true":"false")),a(M,Rv(n),c))),n,P(ur,hr,qn,$([sn,pe($e),K($r)]),Je($([t(i)]))))}),j3=k(function(e,r,n){return W(a(ft,e-On(n),vi(r)),n)}),Ti=As,Hv=function(e){var r=function(n){return n<10?T(n):vi(g$(87+n))};return e<16?r(e):W(Hv(e/16|0),r(a(Ti,16,e)))},N3=a(Te,Hv,a(j3,2,"0")),Ac=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fP:i,fZ:t,gH:n,hz:r}},W3=function(e){var r=Ac(e),n=r.hz,t=r.gH,i=r.fZ;return a(ee,"",a(M,"#",a(J,a(Te,we,N3),$([n*255,t*255,i*255]))))},Ic=ue(12),Gv=a(In,Ic,p.h4),Ec=Mi(1),_r=Is,Er=function(e){return e*_r/180},Z3=function(e){return{$:1,a:e}},Bc=v(function(e,r){return{$:10,a:e,b:r}}),H3=ue(26),G3=function(e){return a(Bc,H3,Z3(-e))},Da=k(function(e,r,n){return P(fn,e,r,n,1)}),O3=fn,U3=v(function(e,r){return{$:4,a:e,b:r}}),J3=ue(24),q3=function(e){return a(Bc,J3,a(U3,I(0,0,1),e))},Y3=ue(17),aa=function(e){return a(ge,Y3,b(lr,"br-"+T(e),"border-radius",T(e)+"px"))},X3=function(e){return wa($([e.en?"box-inset":"box-",Fe(e.e_.a)+"px",Fe(e.e_.b)+"px",Fe(e.a2)+"px",Fe(e.bi)+"px",Ma(e.b8)]))},Q3=ue(19),K3=function(e){var r={a2:e.a2,b8:e.b8,en:!1,e_:e.e_,bi:e.bi};return a(ge,Q3,b(lr,X3(r),"box-shadow",sc(r)))},Ov=v(function(e,r){return{$:12,a:e,b:r}}),Uv=ue(0),eb=function(e){return e?a(ge,Uv,a(Ov,"transparent",1)):a(ge,Uv,a(Ov,"visible",0))},Rc=b(Da,1,1,1),Vc=Be(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Di=function(e){return a(ge,wi,F(Vc,"b-"+T(e),e,e,e,e))},rb=v(function(e,r){return a(ge,wi,F(Vc,"b-"+(T(e)+("-"+T(r))),r,e,r,e))}),Pt=function(e){var r=e.b3,n=e.cK,t=e.ha,i=e.hC;return oe(n,r)&&oe(t,i)?oe(n,i)?Di(n):a(rb,t,n):a(ge,wi,F(Vc,"b-"+(T(n)+("-"+(T(i)+("-"+(T(r)+("-"+T(t))))))),n,i,r,t))},nb=function(e){return a(he,$([gr("focusable"),K(Se(14)),pe(Se(14)),An(Rc),sn,ra(9),Gv,aa(3),Tn(e?b(Da,59/255,153/255,252/255):b(Da,211/255,211/255,211/255)),K3({a2:1,b8:e?P(O3,238/255,238/255,238/255,0):b(Da,238/255,238/255,238/255),e_:z(0,0),bi:1}),mn(e?b(Da,59/255,153/255,252/255):Rc),Di(e?0:1),uc(a(he,$([Tn(Rc),pe(Se(6)),K(Se(9)),q3(Er(-45)),Ec,sn,G3(1),eb(!e),Pt({b3:2,ha:2,hC:0,cK:0})]),We))]),We)},ab=Sr("htmlFor"),tb=v(function(e,r){if(r.$)return B;var n=r.a;return e(n)}),Fi=v(function(e,r){if(r.$){var t=r.a;return Qe(t)}else{var n=r.a;return e(n)}}),Jv=O(function(e,r,n,t){return{gY:r,he:e,hl:n,h$:t}}),ib=wp,ob=ud,cb=v(function(e,r){if(r.$)return Qe(e);var n=r.a;return Re(n)}),lb=yp,ub=function(e){return a(lb,{f9:!1,hh:!1},e)},Fa=function(e){if(e.b){var r=e.a;return e.b,j(r)}else return B},$b=v(function(e,r){if(r.$){var t=r.a;return Qe(t)}else{var n=r.a;return Re(e(n))}}),vb=function(e){return{$:2,a:e}},fb=function(e){return{$:0,a:e}},mb=function(e){return{$:1,a:e}},jc=v(function(e,r){return Gr(r)-Gr(e)}),Nc=k(function(e,r,n){var t=Gr(n);return ce(Gr(e),t)<1&&ce(t,Gr(r))<1}),sb=v(function(e,r){var n=function(i){return ce(i,e)<0?Re(i):Qe(mb(r))},t=b(Nc,"0","9",r)?Re(a(jc,"0",r)):b(Nc,"a","z",r)?Re(10+a(jc,"a",r)):b(Nc,"A","Z",r)?Re(10+a(jc,"A",r)):Qe(fb(r));return a(Fi,n,t)}),qv=v(function(e,r){var n=da(r);if(n.$===1)return Re(0);var t=n.a,i=t.a,o=t.b;return a(Fi,function(c){return a(Fi,function(l){return Re(c+l*e)},a(qv,e,o))},a(sb,e,i))}),db=v(function(e,r){return 2<=e&&e<=36?a(qv,e,oc(r)):Qe(vb(e))}),pb=db(16),gb=k(function(e,r,n){return P(Pi,e,r,n,1)}),hb=O(function(e,r,n,t){return P(Pi,e,r,n,t)}),Mt=Fs,bb=v(function(e,r){var n=a(Mt,10,e);return we(r*n)/n}),_b=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=p$(n);if(t.b&&!t.b.b){var i=t.a;return ob($([i,i]))}else return n};return a(Te,Si,a(Te,function(n){return a(De,function(t){return b(ib,1,t,n)},ub(e))},a(Te,tb(Fa),a(Te,De(function(n){return n.h$}),a(Te,De(Jr(ir)),a(Te,cb("Parsing hex regex failed"),Fi(function(n){var t=a(J,a(Te,r,a(Te,pb,$b(ct))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,m=l.b,s=m.a.a;return Re(P(hb,i/255,c/255,u/255,a(bb,2,s/255)))}else break e;else{var i=t.a.a,d=t.b,c=d.a.a,g=d.b,u=g.a.a;return Re(b(gb,i/255,c/255,u/255))}else break e;return Qe("Parsing ints from hex failed")})))))))}(),xb=Sr("id"),yb=Hr("input"),wb=Hr("label"),Yv=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Sb=Yv(0),Cb=Sr("name"),zb=function(e){return z(e,!0)},Lb=function(e){return{$:1,a:e}},Pb=v(function(e,r){return a(Fc,e,Lb(r))}),Mb=v(function(e,r){return b(Ge,Z,r,e)}),kb=a(Mb,$(["target","value"]),_a),Xv=function(e){return a(Pb,"input",a(ti,zb,a(ti,e,kb)))},Tb=a(In,Ic,p.h9),Qv=a(In,Ic,p.id),Wc=function(e){return a(P$,5,e)},Zc=function(e){return a(ge,pv,a(fv,b(Ee,hv,"ff-",e),e))},Db=b(Ir,195,195,195),Kv=b(Ir,69,69,69),Fb=Yv(2),Ab={$:2},Hc=Ab,Ib=ue(32),Eb=ue(31),ef=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return j(i)}else return B;else{var t=n.a;return j(t)}}),B,e)},Bb=v(function(e,r){return a(ze,r,b(Ge,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return j(z(i,c))}else return B;else{var i=t.a;return j(i)}}),B,e))}),rf=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return j(i)}else return B;else{var t=n.a;return j(t)}}),B,e)},Rb=ue(33),Vb=Sr("max"),jb=Sr("min"),Nb=v(function(e,r){return a(ge,kv,b(Mv,a(Tv,e,r),e,r))}),Wb=function(e){return a(Sr,"step",e)},nf=Sr("type"),af=Sr("value"),Aa=Lv,Zb=ep,tf=v(function(e,r){switch(r.$){case 0:return Jn;case 2:var n=r.a;return ki(n);case 6:var t=r.a;return Mi(t);case 5:var i=r.a;return Ci(i);case 7:var t=r.a;return zv(t);case 8:var t=r.a;return z$(t);case 3:var t=r.a,i=r.b;return a(In,t,i);case 4:var o=r.a,c=r.b;return a(ge,o,c);case 9:var l=r.a,u=r.b;return a(L$,l,a(xv,e,u));case 1:var m=r.a;return Le(a(Zb,e,m));default:var s=r.a,d=r.b;return a(Bc,s,d)}}),Hb=k(function(e,r,n){return a(Fn,$([K($e),pe(a(ze,$e,n)),sn]),$([a(he,$([K(Aa(we(e*1e4)))]),We),a(he,a(M,sn,a(J,tf($t),r)),We),a(he,$([K(Aa(we(me(1-e)*1e4)))]),We)]))}),Gb=k(function(e,r,n){return a(zr,$([pe($e),K(a(ze,$e,n)),Ec]),$([a(he,$([pe(Aa(we(me(1-e)*1e4)))]),We),a(he,a(M,Ec,a(J,tf($t),r)),We),a(he,$([pe(Aa(we(e*1e4)))]),We)]))}),of=v(function(e,r){var n=rf(e),t=ef(e),i=function(){var S=z(n,t);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var y=S.a.a.a,C=S.b.a.a;return ce(C,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cL-r.ct)/(r.cs-r.ct),c=r.ih,l=c,u=ef(l),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return T(S)+"px"}(),s=rf(l),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return T(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([a(re,"width",d),a(re,"height",m)]),_=a(Bb,e,z(5,5)),x=_.a,w=_.b;return b(Ev,$([Vv(r.er)?Jn:a(Nb,x,w),Iv,K(function(){if(n.$===1)return $e;if(n.a.$){var S=n.a;return S}else return $r}()),pe(function(){if(t.$===1)return $r;if(t.a.$){var S=t.a;return S}else return $r}())]),r.er,a(Fn,$([K(a(ze,$e,n)),pe(a(ze,Se(20),t))]),$([P(ur,hr,Mn("input"),$([Rv(r.er),a(ge,Ib,a(ht,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),a(ge,Rb,a(ht,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),a(ge,Eb,a(ht,'input[type="range"].'+(g+"::-ms-thumb"),f)),Le(Cr(g+" ui-slide-bar focusable-parent")),Le(Xv(function(S){var y=d$(S);if(y.$===1)return r.bI(0);var C=y.a;return r.bI(C)})),Le(nf("range")),Le(Wb(function(){var S=r.cH;if(S.$===1)return"any";var y=S.a;return ae(y)}())),Le(jb(ae(r.ct))),Le(Vb(ae(r.cs))),Le(af(ae(r.cL))),i?Le(a(Dc,"orient","vertical")):Jn,K(i?a(ze,Se(20),t):a(ze,$e,n)),pe(i?a(ze,$e,n):a(ze,Se(20),t))]),Je(D)),a(he,a(M,K(a(ze,$e,n)),a(M,pe(a(ze,Se(20),t)),W(e,$([Wc(i?b(Gb,o,a(M,gr("focusable-thumb"),l),n):b(Hb,o,a(M,gr("focusable-thumb"),l),t))])))),We)])))}),Ob=b(Da,.5,.5,.5),cf=ir,lf=function(e){var r=e.c5,n=e.cL,t=e.ct,i=e.cs,o=e.cH,c=e.bI;return a(he,$([K($e)]),a(of,$([Dn(2),Wc(a(he,$([K($e),pe(Se(16)),sn,mn(Kv),aa(4)]),We))]),{er:a(Fb,D,a(Fn,$([K($e)]),$([a(he,$([Tb]),En(r)),a(he,$([K($e),Qv,Zc($([Hc]))]),En(ae(n)))]))),cs:i,ct:t,bI:c,cH:j(o),ih:cf($([K(Se(12)),pe(Se(12)),aa(4),Di(0),Tn(Ob),mn(Db)])),cL:n}))},Ub=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Jb=v(function(e,r){switch(r.$){case 3:var n=r.a;return a(V3,D,{gd:n,gT:nb,er:a(Sb,D,En(e)),bI:C3(e)});case 0:var t=r.a,i=t.a,o=t.b,n=r.b;return lf({c5:e,cs:o,ct:i,bI:L3(e),cH:.001*(o-i),cL:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return lf({c5:e,cs:o,ct:i,bI:a(Te,we,P3(e)),cH:1,cL:n});default:var n=r.a;return a(he,$([K($e)]),Sn(a(Cn,D,$([a(Cn,$([a(Ne,"margin-bottom","6px")]),$([a(wb,$([ab(e)]),$([za(e)]))])),a(yb,$([nf("color"),a(Ne,"width","100%"),a(Ne,"height","26px"),a(Ne,"padding","0px"),xb(e),Cb(e),Xv(function(l){return a(z3,e,a(Ub,Tc,_b(l)))}),af(W3(n))]),D)]))))}}),Gc=b(Ir,255,255,255),qb=function(e){return a(zr,$([K($e),Dn(8),a(Av,0,14),Pt({b3:1,ha:0,hC:0,cK:0}),Tn(Li)]),$([a(he,$([ra(16),Mc,An(Gc)]),En(e.hi)),a(zr,$([K($e),Dn(6)]),S3(a(kc,Jb,e.aM)))]))},Yb=function(e){return a(zr,$([K($e),pe($e),An(Pc),ra(12),y3,Fv]),a(J,qb,e))},Xb=x3(Yb),Qb=function(e){return a(zr,$([K($e),pe($e)]),$([a(Fn,$([Dn(14),K($e)]),D),a(zc,g3,Xb(Un(e).gi))]))},Kb=function(e){return{$:6,a:e}},e1=O(function(e,r,n,t){return"pad-"+(T(e)+("-"+(T(r)+("-"+(T(n)+("-"+T(t)))))))}),r1=function(e){var r=e.cK,n=e.hC,t=e.b3,i=e.ha;if(oe(r,n)&&oe(r,t)&&oe(r,i)){var o=r;return a(ge,Lt,F(zt,"p-"+T(r),o,o,o,o))}else return a(ge,Lt,F(zt,P(e1,r,n,t,i),r,n,t,i))},n1=function(e){return{$:0,a:e}},a1=function(e){return{$:1,a:e}},t1=a1,i1=function(e){var r=e.b.W;return Gn(r)},Ai=b(Ir,255,60,0),o1=function(e){var r=e.b.W;e.b.r;var n=e.b.am;return Gn(r)+1+Gn(n)},c1=function(e){var r=z(i1(e),o1(e)-1),n=r.a,t=r.b;return a(he,$([K($e),sn]),a(of,$([Wc(a(Fn,$([K($e),pe(Se(4)),sn,mn(Kv),aa(2)]),$([a(he,$([K(Aa(n)),pe($e),mn(Ai),aa(2)]),We),a(he,$([K(Aa(t-n))]),We)])))]),{er:t1(""),cs:t,ct:0,bI:a(Te,we,n1),cH:j(1),ih:cf($([K(Se(12)),pe(Se(12)),aa(6),mn(Ai)])),cL:n}))},l1=Mi(2),Ii=b(Ir,220,220,220),u1=function(e){var r=e.a,n=function(){return r.$?$([An(Ii)]):$([An(Ai)])}();return a(he,W(n,$([ra(14),l1,Qv,Zc($([Hc]))])),En(a(x$,3,Un(e).b6)))},$1=function(e){e.a;var r=e.b.W;return a(De,function(n){return we(60/(Un(e).b6-n))},a(De,a(Te,r$,function(n){return n.b6}),Fa(a(v$,59,r))))},v1=function(e){var r=$1(e);if(r.$===1)return We;var n=r.a;return a(he,$([ra(14),An(Pc),Zc($([Hc]))]),En(T(n)+" FPS"))},uf={$:1},f1={$:3},m1={$:2},s1={$:8},d1=on,p1=v(function(e,r){return a(Eo,e,d1(r))}),g1=p1("disabled"),h1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},b1=function(e){return a(ga,h1,e)?Jn:gr("focusable")},Ei=a(pt,Le,jv),$f=v(function(e,r){var n=r.e$,t=r.er;return P(ur,hr,qn,a(M,K($r),a(M,pe($r),a(M,gr(p.cc+(" "+(p.aw+(" "+(p.hL+(" "+p.eZ)))))),a(M,na,a(M,b1(e),a(M,ki(s1),a(M,Le(Zv(0)),function(){if(n.$===1)return a(M,Le(g1(!0)),e);var i=n.a;return a(M,Ei(i),a(M,Nv(function(o){return oe(o,Bv)||oe(o,Wv)?j(i):B}),e))}()))))))),Je($([t])))}),vf=v(function(e,r){return a($f,D,{er:a(he,$([K(Se(36)),ea(3),An(r),Gv,ra(12),Mc,Tn(r),Di(1),aa(4)]),En("REC")),e$:j(e)})}),ff=k(function(e,r,n){return a($f,D,{er:Sn(b(ka,20,n,e)),e$:j(r)})}),_1=function(e){var r=e.a;e.b.W,e.b.r;var n=e.b.am;return a(Fn,D,$([a(he,$([K(Se(40))]),function(){switch(r.$){case 0:return a(vf,uf,Ai);case 1:return a(vf,m1,Ii);default:return We}}()),a(he,$([K(Se(28))]),function(){switch(r.$){case 0:return We;case 1:return Pn(n)?We:b(ff,Kn.hv,f1,Ii);default:return b(ff,Kn.hu,uf,Ii)}}())]))},x1=function(e){return a(zr,$([K($e)]),$([c1(e),a(Fn,$([K($e),Dn(14),a(Av,0,6),sn]),$([_1(e),v1(e),u1(e)]))]))},y1=function(e){return a(zr,$([K($e),Dn(14),r1({b3:20,ha:0,hC:0,cK:0}),Pt({b3:1,ha:0,hC:0,cK:0}),Tn(Li)]),$([a(he,$([ra(16),Mc,An(Pc)]),En("Time Travel")),a(zc,Kb,x1(e))]))},w1=v(function(e,r){return a(zr,$([Un(r).cF.ir>600?mn(d3):mn(p3),Pt({b3:0,ha:0,hC:1,cK:0}),Tn(Li),K(Se(Ta.c6)),pe($e)]),$([function(){return e?We:a(zr,$([K($e),pe($e),ea(14),Dn(14)]),$([y1(r),Qb(r)]))}()]))}),S1=function(e){return{$:3,a:e}},mf=Ci(2),C1=b(Ir,232,78,50),z1=b(Ir,48,48,48),L1=function(e){return a(Sr,"href",Kd(e))},P1=Dr("rel"),M1=Sr("target"),sf=v(function(e,r){var n=r.fu,t=r.er;return P(ur,hr,Mn("a"),a(M,Le(L1(n)),a(M,Le(P1("noopener noreferrer")),a(M,Le(M1("_blank")),a(M,K($r),a(M,pe($r),a(M,gr(p.cc+(" "+(p.aw+(" "+p.ey)))),e)))))),Je($([t])))}),kt=Sr("title"),k1=b(Ir,31,161,242),T1=function(e){var r=k(function(o,c,l){var u=oe(c,e)?Gc:z1;return a(he,$([$n(kt(o)),Ei(S1(c)),na,ea(7)]),Sn(b(ka,40,u,l)))}),n=a(zr,$([wv]),$([b(r,"Configurations",0,Kn.hS)])),t=a(zr,D,$([a(sf,$([$n(kt("Twitter")),mf,na,ea(7)]),{er:Sn(b(ka,40,k1,Kn.il)),fu:"https://twitter.com/AzizErkalSelman"}),a(sf,$([$n(kt("Source Code")),mf,na,ea(7)]),{er:Sn(b(ka,40,C1,Kn.gG)),fu:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(he,$([K(Se(Ta.bE)),ea(4),Ei(yv),Pt({b3:1,ha:0,hC:0,cK:0}),Tn(Li),na,$n(kt("Activate Distraction Free Mode"))]),Sn(b(ka,46,Gc,Kn.fE)));return a(zr,$([K(Se(Ta.bE)),pe($e),Fv,mn(Sv)]),$([i,n,t]))},D1=function(e){var r=a(he,$([K(Se(Ta.bE)),wv,ea(4),Ei(yv),na,$n(kt("Deactivate Distraction Free Mode (A)"))]),Sn(b(ka,46,Sv,Kn.fE)));return e.bw?r:a(Fn,$([K(Se(Ta.bE+Ta.c6)),pe($e)]),$([T1(e.bp),a(w1,e.bp,e.Q)]))},F1=k(function(e,r,n){var t=jg(n.Q),i=Un(n.Q);return b(e3,{hr:$([Wg({fV:B,f1:B,hM:B})])},$([K(Se(ot(i.cF.ir))),pe(Se(ot(i.cF.gO))),$n(a(Ne,"-webkit-font-smoothing","antialiased")),$n(a(Ne,"pointer-events","none")),$n(a(Ne,"touch-action","none")),$n(a(Ne,"user-select","none")),uc(a(zc,Rg,a(r,i,t))),uc(D1(n))]),Sn(a(r3,di(Vg),a(e,i,t))))}),A1=dr(function(e,r,n,t,i,o){var c=v(function(u,m){return z(P(Dg,r,o,u,m),C$)}),l=function(u){var m=a(a$,n,u.g3);return z({bp:0,bw:!0,Q:a(Fg,m,t),dS:0},C$)};return K0({gZ:l,h0:Bg,$9:c,ip:a(F1,e,i)})}),I1=O(function(e,r,n,t){return Ye(A1,e,r,n,t,v(function(i,o){return We}),k(function(i,o,c){return c}))}),df={$:0},dn=v(function(e,r){return{$:0,a:e,b:r}}),vr=v(function(e,r){return{$:0,a:e,b:r}}),E1=$([a(dn,z(-1,1),a(vr,2,0)),a(dn,z(-1,0),a(vr,2,0)),a(dn,z(-1,-1),a(vr,2,0)),a(dn,z(0,-1),a(vr,2,0)),a(dn,z(0,1),a(vr,2,0)),a(dn,z(1,1),a(vr,2,0)),a(dn,z(1,0),a(vr,2,0)),a(dn,z(1,-1),a(vr,2,0))]),B1=function(e){return{aW:df,bX:E1}},Bi=v(function(e,r){return z(e,m$(r))}),R1=k(function(e,r,n){return{aM:n,g6:r,hi:e}}),V1=function(e){return b(Ee,v(function(r,n){var t=r.a,i=r.b;return b(ba,t,i,n)}),fc,e)},j1=k(function(e,r,n){return b(R1,e,r,V1(n))}),Oc=j1,ta=k(function(e,r,n){var t=r.a,i=r.b;return z(e,a(s$,z(t,i),n))}),Uc=function(e){return e/255},Ri=k(function(e,r,n){return P(Pi,Uc(e),Uc(r),Uc(n),1)}),N1=$([b(Oc,"Camera",!0,$([b(ta,"camera distance",z(3,20),10),b(ta,"camera azimuth",z(-_r,_r),0),b(ta,"camera elevation",z(-_r/2,_r/2),0)])),b(Oc,"Parameters",!0,$([b(ta,"cubes side length",z(.5,1),.9),b(ta,"duration of rolling animation",z(.1,1),.25)])),b(Oc,"Colors and light",!0,$([a(Bi,"color 1",b(Ri,244,88,67)),a(Bi,"color 2",b(Ri,47,41,43)),a(Bi,"board color",b(Ri,223,224,226)),a(Bi,"background color",b(Ri,165,166,169)),b(ta,"sunlight azimuth",z(-_r,_r),2),b(ta,"sunlight elevation",z(-_r,0),-2)]))]),W1=v(function(e,r){return a(De,function(n){if(n.$)return 0;var t=n.b;return t},a(mt,e,r.aM))}),Z1=v(function(e,r){return a(ze,0,Fa(a(Jr,W1(e),r)))}),H1=v(function(e,r){return a(Z1,e,r.gi)}),pn=H1,Xr=function(e){return e},Ia=function(e){return Xr(_r*(e/180))},pf=function(e){return e},Br=function(e){return e},Vi=function(e){var r=e;return-r},G1=v(function(e,r){var n=e,t=r;return{it:n.ix*t.dZ-n.dZ*t.ix,ix:n.dZ*t.it-n.it*t.dZ,dZ:n.it*t.ix-n.ix*t.it}}),gf=function(e){var r=e;return r.dX},hf=function(e){var r=e;return r.dY},O1=function(e){return a(G1,gf(e),hf(e))},Ea=function(e){var r=e;return r.dp},Ba=Es,Ra=Bs,ji=k(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Ba(c),u=Ra(c),m=t.gt,s=m,d=s.it*u,g=l*d,f=d*d,_=s.ix*u,x=l*_,w=d*_,S=_*_,y=1-2*(f+S),C=s.dZ*u,E=l*C,U=2*(w-E),X=2*(w+E),H=d*C,q=2*(H+x),Y=2*(H-x),V=_*C,ne=2*(V-g),ve=2*(V+g),xe=C*C,fe=1-2*(S+xe),se=1-2*(f+xe);return{it:fe*o.it+U*o.ix+q*o.dZ,ix:X*o.it+se*o.ix+ne*o.dZ,dZ:Y*o.it+ve*o.ix+y*o.dZ}}),Tt=k(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Ba(c),u=Ra(c),m=t.dp,s=m,d=o.it-s.it,g=o.ix-s.ix,f=o.dZ-s.dZ,_=t.gt,x=_,w=x.it*u,S=l*w,y=w*w,C=x.ix*u,E=l*C,U=w*C,X=C*C,H=1-2*(y+X),q=x.dZ*u,Y=l*q,V=2*(U-Y),ne=2*(U+Y),ve=w*q,xe=2*(ve+E),fe=2*(ve-E),se=C*q,ye=2*(se-S),de=2*(se+S),Ie=q*q,ke=1-2*(X+Ie),qe=1-2*(y+Ie);return{it:s.it+ke*d+V*g+xe*f,ix:s.ix+ne*d+qe*g+ye*f,dZ:s.dZ+fe*d+de*g+H*f}}),ia=function(e){return e},oa=function(e){var r=e;return r.dX},ca=function(e){var r=e;return r.dY},la=function(e){var r=e;return r.d_},bf=k(function(e,r,n){return ia({dp:b(Tt,e,r,Ea(n)),dX:b(ji,e,r,oa(n)),dY:b(ji,e,r,ca(n)),d_:b(ji,e,r,la(n))})}),_f=k(function(e,r,n){return b(bf,e(n),r,n)}),Jc=function(e){var r=e;return r.gt},Va=v(function(e,r){var n=e,t=r;return{it:t.it+n.it,ix:t.ix+n.ix,dZ:t.dZ+n.dZ}}),xf=v(function(e,r){return ia({dp:a(Va,e,Ea(r)),dX:oa(r),dY:ca(r),d_:la(r)})}),U1=v(function(e,r){var n=e,t=r;return{it:n*t.it,ix:n*t.ix,dZ:n*t.dZ}}),J1=k(function(e,r,n){return a(xf,a(U1,r,e),n)}),q1=k(function(e,r,n){return b(J1,Jc(e(n)),r,n)}),Rr=v(function(e,r){return{gt:r,dp:e}}),Y1=function(e){var r=e;return a(Rr,r.dp,r.dX)},X1=function(e){var r=e;return a(Rr,r.dp,r.dY)},Q1=function(e){var r=e;return a(Rr,r.dp,r.d_)},K1=function(e){var r=ia({dp:e.ba,dX:hf(e.eh),dY:O1(e.eh),d_:gf(e.eh)}),n=b(q1,Q1,e.c$,b(_f,Y1,Vi(e.ce),b(_f,X1,e.b0,r)));return n},e_=function(e){return{$:0,a:e}},Ke=function(e){var r=e;return me(r)},Ni=function(e){var r=e;return .5*r},r_=Rs,n_=function(e){var r=e;return r_(r)},a_=function(e){var r=Ni(Ke(e.fx)),n=n_(r);return{dB:e_(n),dR:e.dR}},Bn={it:0,ix:0,dZ:0},yf=ir,Qr=function(e){return e},wf=Qr({it:1,ix:0,dZ:0}),Wi=wf,qc=Qr({it:0,ix:0,dZ:1}),Dt=qc,t_=yf({dp:Bn,dX:Dt,dY:Wi}),i_=function(e){var r=e.ba,n=e.b0,t=e.ce,i=e.c$;return a_({fx:Ia(40),dR:K1({b0:Xr(n),c$:Br(i),ce:Xr(t),ba:pf(r),eh:t_})})},Sf=function(e){return i_({b0:a(pn,"camera azimuth",e),c$:a(pn,"camera distance",e),ce:a(pn,"camera elevation",e),ba:{it:0,ix:0,dZ:0}})},o_={$:0},c_={$:1},l_=v(function(e,r){return{$:2,a:e,b:r}}),u_=function(e){return ga(function(r){var n=r.a;return oe(e,n)})},$_=function(e){var r=e.a,n=e.b;return ce(r,-1)>-1&&r<=1&&ce(n,-1)>-1&&n<=1},v_=v(function(e,r){var n=r.a,t=r.b;switch(e){case 0:return z(n,t+1);case 1:return z(n,t-1);case 2:return z(n-1,t);default:return z(n+1,t)}}),Cf=function(e){return e?0:1},Zi=function(e){var r=e.a,n=e.b;switch(r){case 0:return a(vr,r,n);case 1:return a(vr,2,n);default:return a(vr,1,Cf(n))}},Hi=function(e){var r=e.a,n=e.b;switch(r){case 0:return a(vr,2,Cf(n));case 1:return a(vr,r,n);default:return a(vr,0,n)}},f_=function(e){switch(e){case 0:return a(Te,Zi,a(Te,Zi,Zi));case 1:return Zi;case 2:return a(Te,Hi,a(Te,Hi,Hi));default:return Hi}},m_=v(function(e,r){var n=r.a,t=r.b;return a(dn,a(v_,e,n),a(f_,e,t))}),s_=v(function(e,r){var n=e.a,t=Fa(a(Jr,function(l){var u=a(m_,l,e),m=u.a;return a(u_,m,r)||!$_(m)?B:j(z(u,l))},$([0,1,2,3])));if(t.$===1)return c_;var i=t.a,o=i.a,c=i.b;return a(l_,c,a(M,o,a(bi,function(l){var u=l.a;return!oe(u,n)},r)))}),d_=v(function(e,r){var n=function(o){var c=o.a;return oe(c,e)},t=Fa(a(bi,n,r));if(t.$===1)return o_;var i=t.a;return a(s_,i,r)}),p_=function(e){return{$:1,a:e}},g_=Be(function(e,r,n,t,i){var o=i.aW;return o.$?i:Ce(i,{aW:p_({dl:t,fe:n,fk:r,dK:e.b6})})}),h_=k(function(e,r,n){var t=e.it,i=e.ix,o=z(we(t),we(i)),c=a(d_,o,n.bX);switch(c.$){case 0:return n;case 1:return n;default:var l=c.a,u=c.b;return F(g_,r,o,l,u,n)}}),b_=k(function(e,r,n){return{it:e,ix:r,dZ:n}}),Gi=function(e){return e},Oi=function(e){var r=e;return r},__=v(function(e,r){var n=e,t=r;return t.it*n.it+t.ix*n.ix+t.dZ*n.dZ}),Ae=v(function(e,r){var n=r;return e*n}),zf=function(e){var r=e;return r.dp},x_=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=n.hk,l=c;return(t.it-o.it)*l.it+(t.ix-o.ix)*l.ix+(t.dZ-o.dZ)*l.dZ}),y_=k(function(e,r,n){var t=e,i=r,o=n;return{it:o.it+i*t.it,ix:o.ix+i*t.ix,dZ:o.dZ+i*t.dZ}}),w_=v(function(e,r){var n=Jc(r),t=e,i=t.hk,o=a(__,i,n);if(o){var c=zf(r),l=a(x_,e,c),u=a(Ae,-1/o,l);return j(b(y_,n,u,c))}else return B}),S_=v(function(e,r){return{it:e,ix:r}}),Lf=v(function(e,r){var n=e,t=r;return n*t}),C_=function(e){var r=e;return r},Pf=function(e){var r=e;return C_(r.fU)},z_=function(e){var r=e;return r.a4},ua=Hs,L_=function(e){var r=e,n=a(ar,me(r.it),a(ar,me(r.ix),me(r.dZ)));if(n){var t=r.dZ/n,i=r.ix/n,o=r.it/n,c=ua(o*o+i*i+t*t);return j({it:o/c,ix:i/c,dZ:t/c})}else return B},Mf=v(function(e,r){var n=r;return n/e}),Yc=function(e){var r=e;return Ea(r)},Xc=Qr({it:0,ix:0,dZ:-1}),P_=v(function(e,r){var n=e,t=r;return t/n}),M_=v(function(e,r){var n=e,t=r,i=n.d_,o=i,c=n.dY,l=c,u=n.dX,m=u;return{it:m.it*t.it+l.it*t.ix+o.it*t.dZ,ix:m.ix*t.it+l.ix*t.ix+o.ix*t.dZ,dZ:m.dZ*t.it+l.dZ*t.ix+o.dZ*t.dZ}}),Ft=function(e){var r=e;return{it:-r.it,ix:-r.ix,dZ:-r.dZ}},Qc=function(e){var r=e;return Ft(la(r))},k_=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=n.dX,l=c;return(t.it-o.it)*l.it+(t.ix-o.ix)*l.ix}),Kc=k(function(e,r,n){var t=e,i=r,o=n;return{it:t,ix:i,dZ:o}}),T_=O(function(e,r,n,t){var i=e,o=r,c=n,l=t,u=i.dp,m=u,s=i.d_,d=s,g=i.dY,f=g,_=i.dX,x=_;return{it:m.it+o*x.it+c*f.it+l*d.it,ix:m.ix+o*x.ix+c*f.ix+l*d.ix,dZ:m.dZ+o*x.dZ+c*f.dZ+l*d.dZ}}),D_=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=n.dY,l=c;return(t.it-o.it)*l.it+(t.ix-o.ix)*l.ix}),Kr=0,F_=k(function(e,r,n){var t=e,i=a(D_,Pf(r),n),o=a(k_,Pf(r),n),c=t.dR,l=c,u=z_(r);u.a;var m=u.b,s=t.dB;if(s.$){var _=s.a,x=a(P_,m,_),w=P(T_,l,a(Lf,x,o),a(Lf,x,i),Kr);return a(Rr,w,Qc(t.dR))}else{var d=s.a,g=Vi(a(Mf,d,a(Ae,.5,m))),f=a(M_,l,a(ze,Xc,L_(b(Kc,o,i,g))));return a(Rr,Yc(t.dR),f)}}),el=function(e){var r=e;return{it:Ba(r),ix:Ra(r)}},A_=function(e){var r=e;return{it:-r.ix,ix:r.it}},I_=function(e){return e},E_=v(function(e,r){return I_({dp:r,dX:e,dY:A_(e)})}),B_=v(function(e,r){return a(E_,el(e),r)}),R_=k(function(e,r,n){var t=e.a,i=e.b;return{fU:a(B_,r,n),a4:z(Ke(t),Ke(i))}}),Rn=function(e){var r=e;return r.it},V_=v(function(e,r){var n=e,t=r;return{it:n,ix:t}}),Vn=function(e){var r=e;return r.ix},jn=function(e){var r=e;return r.dZ},j_=O(function(e,r,n,t){var i=n.it,o=n.ix,c=function(m){return b(b_,Oi(Rn(m)),Oi(Vn(m)),Oi(jn(m)))},l=b(R_,z(Gi(r.ir),Gi(r.gO)),Ia(0),a(S_,0,0)),u=a(V_,Gi(i),Gi(o));return a(De,c,a(w_,t,b(F_,e,l,u)))}),N_=v(function(e,r){return{hk:e,dp:r}}),W_=v(function(e,r){var n=r;return a(N_,n.hk,a(Va,e,n.dp))}),Z_=v(function(e,r){return{hk:r,dp:e}}),H_=a(Z_,Bn,Dt),G_=O(function(e,r,n,t){return P(j_,r,n,t,a(W_,b(Kc,Br(0),Br(0),Br(e)),H_))}),O_=v(function(e,r){if(e.dz.eo){var n=P(G_,a(pn,"cubes side length",e),Sf(e),e.cF,e.dz);if(n.$===1)return r;var t=n.a;return b(h_,t,e,r)}else return r}),U_=v(function(e,r){var n=r.aW;if(n.$){var t=n.a.dK,i=n.a.dl;return ce(e.b6-t,a(pn,"duration of rolling animation",e))>0?Ce(r,{aW:df,bX:i}):r}else return r}),J_=v(function(e,r){return a(U_,e,a(O_,e,r))}),q_=Hr("br"),Y_=a(Cn,$([a(Ne,"position","absolute"),a(Ne,"width","100%"),a(Ne,"font-size","20px"),a(Ne,"text-align","center")]),$([a(bc,D,$([za("Eight Rolling Cubes Puzzle"),a(q_,D,D),za("by John Harris")])),a(bc,D,$([za("Can you make all the red faces look down with the center cell vacant?")]))])),rl=v(function(e,r){return{$:0,a:e,b:r}}),nl=v(function(e,r){var n=e,t=r;return ce(t,n)>-1}),al=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),gn=v(function(e,r){var n=e,t=r;return t-n}),X_=Qr({it:-1,ix:0,dZ:0}),Q_=Qr({it:0,ix:-1,dZ:0}),kf=Qr({it:0,ix:1,dZ:0}),Oe=k(function(e,r,n){var t=e,i=r,o=n;return{it:t,ix:i,dZ:o}}),K_=dr(function(e,r,n,t,i,o){var c=a(nl,n,o)?qc:Xc,l=a(nl,r,i)?kf:Q_,u=a(nl,e,t)?wf:X_,m=I(Ke(a(gn,e,t)),Ke(a(gn,r,i)),Ke(a(gn,n,o))),s=b(Oe,a(al,e,t),a(al,r,i),a(al,n,o)),d=ia({dp:s,dX:u,dY:l,d_:c});return{fU:d,a4:m}}),e2=v(function(e,r){return Ye(K_,Rn(e),Vn(e),jn(e),Rn(r),Vn(r),jn(r))}),tl=k(function(e,r,n){return{it:e,ix:r,dZ:n}}),Ui=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=I(n/2,t/2,i/2),c=o.a,l=o.b,u=o.c;return a(rl,e,a(e2,b(tl,-c,-l,-u),b(tl,c,l,u)))}),r2=v(function(e,r){return a(De,function(n){if(n.$===2){var t=n.a;return t}else return Tc},a(mt,e,r.aM))}),n2=v(function(e,r){return a(ze,Tc,Fa(a(Jr,r2(e),r)))}),a2=v(function(e,r){return a(n2,e,r.gi)}),Ji=a2,il=function(e){return{$:5,a:e}},ol=function(e){return il(e)},cl=function(e){return{$:0,a:e}},Tf=k(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Df=k(function(e,r,n){return ce(n,e)<0?e:ce(n,r)>0?r:n}),ll=function(e){return b(Df,0,1,e<=.04045?e/12.92:a(Mt,(e+.055)/1.055,2.4))},At=zp,t2=function(e){var r=Ac(e),n=r.hz,t=r.gH,i=r.fZ;return b(At,ll(n),ll(t),ll(i))},qi=function(e){return b(Tf,0,cl(t2(e)),cl(0))},Ff=v(function(e,r){return{$:2,a:e,b:r}}),Af=v(function(e,r){return{$:4,a:e,b:r}}),If=v(function(e,r){return{$:3,a:e,b:r}}),Ef=v(function(e,r){return{$:1,a:e,b:r}}),i2=k(function(e,r,n){return{it:e,ix:r,dZ:n}}),o2=function(e){var r=e;return r},ul=function(e){var r=e;return o2(r.fU)},$l=function(e){var r=e;return r.a4},c2=v(function(e,r){return{fU:a(xf,e,ul(r)),a4:$l(r)}}),l2=v(function(e,r){var n=r;return a(Rr,a(Va,e,n.dp),n.gt)}),u2=v(function(e,r){var n=r;return{m:a(l2,e,n.m),hb:n.hb,hx:n.hx}}),vl=function(e){var r=e;return r},$2=function(e){return e},Bf=v(function(e,r){var n=vl(r),t=n.a,i=n.b;return $2(z(e(t),e(i)))}),v2=v(function(e,r){return a(Bf,Va(e),r)}),fl=function(e){var r=e;return r.gb},ml=function(e){var r=e;return r.hx},Rf=v(function(e,r){return{gb:r,hx:Ke(e)}}),f2=v(function(e,r){return a(Rf,ml(r),a(Va,e,fl(r)))}),Vf=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return I(e(t),e(i),e(o))}),m2=v(function(e,r){return a(Vf,Va(e),r)}),Yi=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=b(i2,n,t,i);switch(r.$){case 0:var c=r.a,l=r.b;return a(rl,c,a(c2,o,l));case 1:var c=r.a,u=r.b;return a(Ef,c,a(m2,o,u));case 3:var c=r.a,m=r.b;return a(If,c,a(f2,o,m));case 2:var c=r.a,s=r.b;return a(Ff,c,a(u2,o,s));case 4:var c=r.a,d=r.b;return a(Af,c,a(v2,o,d));default:var g=r.a;return il(a(J,Yi(I(n,t,i)),g))}}),jf=function(e){return Yi(I(e,0,0))},Xi=function(e){return Yi(I(0,0,e))},s2=k(function(e,r,n){return{fU:b(bf,e,r,ul(n)),a4:$l(n)}}),d2=v(function(e,r){var n=a(Tt,e,r),t=a(ji,e,r);return function(i){var o=i;return a(Rr,n(o.dp),t(o.gt))}}),p2=k(function(e,r,n){var t=n;return{m:b(d2,e,r,t.m),hb:t.hb,hx:t.hx}}),g2=k(function(e,r,n){return a(Bf,a(Tt,e,r),n)}),h2=k(function(e,r,n){return a(Rf,ml(n),b(Tt,e,r,fl(n)))}),b2=k(function(e,r,n){return a(Vf,a(Tt,e,r),n)}),It=k(function(e,r,n){switch(n.$){case 0:var t=n.a,i=n.b;return a(rl,t,b(s2,e,r,i));case 1:var t=n.a,o=n.b;return a(Ef,t,b(b2,e,r,o));case 3:var t=n.a,c=n.b;return a(If,t,b(h2,e,r,c));case 2:var t=n.a,l=n.b;return a(Ff,t,b(p2,e,r,l));case 4:var t=n.a,u=n.b;return a(Af,t,b(g2,e,r,u));default:var m=n.a;return il(a(J,a(It,e,r),m))}}),_2=a(Rr,Bn,Dt),sl=v(function(e,r){return b(It,_2,Xr(e),r)}),x2=function(e){var r=a(Ji,"board color",e),n=a(jf,-1.55,a(Ui,qi(r),I(.1,3.2,.2))),t=a(Xi,-.5,a(Ui,qi(r),I(3,3,1)));return ol($([n,a(sl,Er(90),n),a(sl,Er(180),n),a(sl,Er(270),n),t]))},y2=function(e){return Yi(I(0,e,0))},w2=v(function(e,r){var n=e.a,t=e.b,i=t.a,o=t.b,c=t.c;return a(It,a(Rr,pf(n),Qr({it:i,ix:o,dZ:c})),Xr(r))}),S2=k(function(e,r,n){var t=r.aW;if(t.$){var i=t.a.dK,o=t.a.fk,c=t.a.fe;if(t.a.dl,oe(o,n)){var l=a(pn,"duration of rolling animation",e),u=(e.b6-i)/l,m=u,s=a(Xn,Er(90),m*Er(90)),d=function(){switch(c){case 0:return z({it:.5,ix:.5,dZ:-.5},I(-1,0,0));case 1:return z({it:-.5,ix:-.5,dZ:-.5},I(1,0,0));case 2:return z({it:-.5,ix:.5,dZ:-.5},I(0,-1,0));default:return z({it:.5,ix:-.5,dZ:-.5},I(0,1,0))}}();return a(w2,d,s)}else return ir}else return ir}),C2=a(Rr,Bn,Wi),dl=v(function(e,r){return b(It,C2,Xr(e),r)}),pl=kf,z2=a(Rr,Bn,pl),Nf=v(function(e,r){return b(It,z2,Xr(e),r)}),L2=k(function(e,r,n){var t=n.a,i=t.a,o=t.b,c=n.b,l=a(pn,"cubes side length",e),u=function(){if(c.b)switch(c.a){case 2:return c.a,c.b,dl(Er(180));case 1:return c.a,c.b,dl(Er(90));default:return c.a,c.b,Nf(-Er(90))}else switch(c.a){case 2:return c.a,c.b,ir;case 1:return c.a,c.b,dl(-Er(90));default:return c.a,c.b,Nf(Er(90))}}(),m=a(Ji,"color 2",e),s=a(Ji,"color 1",e),d=a(Xi,l/4,a(Ui,qi(s),I(l,l,l/2))),g=a(Xi,-(l/4),a(Ui,qi(m),I(l,l,l/2)));return a(y2,o,a(jf,i,a(Xi,l/2,P(S2,e,r,z(i,o),u(ol($([d,g])))))))}),P2=v(function(e,r){return ol(a(J,a(L2,e,r),r.bX))}),M2=function(e){return e},k2=function(e){return Br(.01*e)},Wf=function(e){return e},T2=function(e){return e},D2=function(e){return{$:0,a:e}},F2=D2,A2={$:3},I2=A2,E2=O(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),B2=E2,R2=function(e){return{$:1,a:e}},V2=R2,j2=function(e){return a(Dr,"height",T(e))},N2=ev,W2=function(e){return{$:2,a:e}},Z2=W2,H2=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return we(l*1e3)/1e3},c=function(l){return we(l*1e4)/100};return wa($(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(t)),"%,",ae(o(i)),")"]))},G2=v(function(e,r){switch(r.$){case 0:return a(s0,e,r);case 1:return a(d0,e,r);case 2:return a(p0,e,r);case 3:return a(g0,e,r);case 4:return a(h0,e,r);default:return a(b0,e,r)}}),O2=v(function(e,r){switch(r.$){case 0:return a(Hp,e,r);case 1:return a(Gp,e,r);case 2:return a(Op,e,r);case 3:return a(Up,e,r);case 4:return a(Jp,e,r);case 5:return a(qp,e,r);case 6:return a(Yp,e,r);case 7:return a(Xp,e,r);default:return Qp(e)}}),U2=k(function(e,r,n){return b(m0,e,r,n)}),Zf=function(e){var r=e;return r},ja=Dp,gl=P(ja,1,1,1,1),en=k(function(e,r,n){return a(J,function(t){return a(t,r,n)},e)}),J2=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),q2=v(function(e,r){var n=e,t=r.it,i=r.ix;return b(J2,n*t/i,n,n*(1-t-i)/i)}),Y2=function(e){var r=e.a,n=e.b,t=e.c;return b(At,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},hl=v(function(e,r){return Y2(a(q2,e,r))}),Hf=v(function(e,r){return{ep:oe(e.ep,r.ep),s:e.s*r.s+e.t*r.v+e.u*r.y,t:e.s*r.t+e.t*r.w+e.u*r.z,u:e.s*r.u+e.t*r.x+e.u*r.A,v:e.v*r.s+e.w*r.v+e.x*r.y,w:e.v*r.t+e.w*r.w+e.x*r.z,x:e.v*r.u+e.w*r.x+e.x*r.A,y:e.y*r.s+e.z*r.v+e.A*r.y,z:e.y*r.t+e.z*r.w+e.A*r.z,A:e.y*r.u+e.z*r.x+e.A*r.A,J:r.J+(e.J*r.s+e.K*r.v+e.L*r.y)*r.cE,K:r.K+(e.J*r.t+e.K*r.w+e.L*r.z)*r.cE,L:r.L+(e.J*r.u+e.K*r.x+e.L*r.A)*r.cE,cE:e.cE*r.cE}}),rn=Rp,X2=function(e){return rn({ez:e.s,eA:e.v,eB:e.y,eC:e.J,eD:e.t,eE:e.w,eF:e.z,eG:e.K,eH:e.u,eI:e.x,eJ:e.A,eK:e.L,eL:0,eM:0,eN:0,eO:1})},bl=Be(function(e,r,n,t,i){var o=t.ep?1:-1,c=P(ja,t.cE,t.cE,t.cE,o);return Ye(i,e,c,X2(t),t.ep,r,n)}),Gf=dr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,m=r,s=n,d=a(Hf,c,t),g=l,f=o;e=u,r=m,n=s,t=d,i=g,o=f;continue e;case 1:var _=i.b,x=a(M,F(bl,e,r,n,t,_),o.O);return{O:x,Z:o.Z,hN:o.hN};case 3:var w=i.b,S=a(M,F(bl,e,r,n,t,w),o.Z);return{O:o.O,Z:S,hN:o.hN};case 2:var y=i.a,C=a(M,F(bl,e,r,n,t,y),o.hN);return{O:o.O,Z:o.Z,hN:C};default:var E=i.a;return b(Ee,P(Gf,e,r,n,t),o,E)}}),Q2=O(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Of=Q2,_l=O(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),K2=function(e){var r=e.ah,n=e.ab,t=e.aa;return P(_l,518,r,n,t)},ex=v(function(e,r){return{$:6,a:e,b:r}}),rx=ex,Uf=$([K2({aa:1,ab:0,ah:!1}),P(Of,!1,!1,!1,!1),a(rx,0,1)]),Na=519,xl=8,Jf=15,Wa=7681,nx={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Me=Zp,ax=v(function(e,r){return{$:0,a:e,b:r}}),tx=ax({d9:1,em:0,eX:5}),xr=Sp,ix=tx($([{cz:a(xr,-1,-1)},{cz:a(xr,1,-1)},{cz:a(xr,-1,1)},{cz:a(xr,1,1)}])),ox={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cz"},uniforms:{}},cx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:m,k:s}}}}}}}}}}}},yl=k(function(e,r,n){var t=e.dC,i=e.df,o=e.dW,c=v(function(m,s){var d=m;return s(d)}),l=v(function(m,s){var d=m;return s(d)}),u=function(m){return a(Te,c(m.bO),a(Te,l(m.bz),a(Te,l(m.bY),l(m.bZ))))};return a(u,n,a(u,r,b(cx,t,i,o)))}),wl=function(e){return b(yl,{df:e.df,dC:e.dC,dW:e.dW},{bz:e.bz,bO:e.bO,bY:e.bY,bZ:e.bZ},{bz:e.bz,bO:e.bO,bY:e.bY,bZ:e.bZ})},Sl=function(e){return F(Me,$([wl(e),P(Of,!1,!1,!1,!1)]),ox,nx,ix,{})},lx=Sl({bz:Wa,df:0,dC:xl,bO:Na,dW:Jf,bY:Wa,bZ:Wa}),ux=516,qf=5386,er=7680,$x=function(e){return a(Mt,2,e+4)},Yf=function(e){return Sl({bz:er,df:Jf,dC:xl,bO:ux,dW:$x(e),bY:qf,bZ:qf})},vx=k(function(e,r,n){return or($([b(en,e,n,Uf),$([Yf(r),lx])]))}),fx=v(function(e,r){return or(a(qu,vx(e),r))}),mx=function(e){var r=e.ah,n=e.ab,t=e.aa;return P(_l,513,r,n,t)},sx=mx({aa:1,ab:0,ah:!0}),dx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:m}}}}}}}}}}},px=function(e){var r=e.cB,n=e.ch,t=e.b1,i=e.b_,o=e.b8,c=e.fP,l=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,x=m.c;return dx(s)(d)(g)(f)(_)(x)(r)(n)(t)(i)});return a(l,o,c)},gx=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xf=v(function(e,r){var n=e,t=r;return b(gx,32774,n,t)}),hx=1,Qf=771,bx=770,Cl=px({b_:0,fP:a(Xf,hx,Qf),b1:0,b8:a(Xf,bx,Qf),ch:0,cB:0}),Za=$([sx,Cl]),_x=function(e){var r=e;return r.eQ},xx=function(e){var r=e;return r.eR},Kf=function(e){var r=e;return r.eS},yx=function(e){var r=e;return r.eT},wx=function(e){var r=e;return r.eU},em=function(e){var r=e;return r.eV},rm=function(e){return I(a(gn,yx(e),_x(e)),a(gn,wx(e),xx(e)),a(gn,em(e),Kf(e)))},Sx=function(e){return e},Cx=function(e){return ia({dp:Sx({it:e.J,ix:e.K,dZ:e.L}),dX:Qr({it:e.s,ix:e.t,dZ:e.u}),dY:Qr({it:e.v,ix:e.w,dZ:e.x}),d_:Qr({it:e.y,ix:e.z,dZ:e.A})})},zl=v(function(e,r){var n=e,t=r,i=n.d_,o=i,c=n.dY,l=c,u=n.dX,m=u;return{it:t.it*m.it+t.ix*m.ix+t.dZ*m.dZ,ix:t.it*l.it+t.ix*l.ix+t.dZ*l.dZ,dZ:t.it*o.it+t.ix*o.ix+t.dZ*o.dZ}}),nm=v(function(e,r){var n=e,t=r,i=n.dp,o=i,c=t.it-o.it,l=t.ix-o.ix,u=t.dZ-o.dZ,m=n.d_,s=m,d=n.dY,g=d,f=n.dX,_=f;return{it:c*_.it+l*_.ix+u*_.dZ,ix:c*g.it+l*g.ix+u*g.dZ,dZ:c*s.it+l*s.ix+u*s.dZ}}),am=v(function(e,r){return{dp:a(nm,e,Ea(r)),dX:a(zl,e,oa(r)),dY:a(zl,e,ca(r)),d_:a(zl,e,la(r))}}),Qi=function(e){var r=e;return r},Ve=v(function(e,r){var n=e,t=r;return a(ar,n,t)}),Ze=v(function(e,r){var n=e,t=r;return a(Xn,n,t)}),zx=v(function(e,r){var n=Qi(r),t=Qi(e);return{eQ:a(Ve,t.eQ,n.eQ),eR:a(Ve,t.eR,n.eR),eS:a(Ve,t.eS,n.eS),eT:a(Ze,t.eT,n.eT),eU:a(Ze,t.eU,n.eU),eV:a(Ze,t.eV,n.eV)}}),Lr=function(e){var r=e;return r},Lx=function(e){var r=e;return I(r.it,r.ix,r.dZ)},Et=v(function(e,r){var n=e,t=r;return t+n}),Px=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=Ni(Ke(t)),c=Ni(Ke(n)),l=Ni(Ke(i)),u=Lx(r),m=u.a,s=u.b,d=u.c;return{eQ:a(Et,c,m),eR:a(Et,o,s),eS:a(Et,l,d),eT:a(gn,c,m),eU:a(gn,o,s),eV:a(gn,l,d)}}),tm=O(function(e,r,n,t){var i=n.gb,o=2*n.gM*r,c=2*n.gL*r,l=2*n.gK*r,u=i.dZ*r,m=i.ix*r,s=i.it*r,d=Lr(la(e)),g=me(l*d.it)+me(c*d.ix)+me(o*d.dZ),f=Lr(ca(e)),_=me(l*f.it)+me(c*f.ix)+me(o*f.dZ),x=Lr(oa(e)),w=me(l*x.it)+me(c*x.ix)+me(o*x.dZ),S=a(Px,I(w,_,g),a(nm,e,b(tl,s,m,u)));if(t.$)return j(S);var y=t.a;return j(a(zx,y,S))}),Ll=O(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,t=m;continue e;case 1:var s=i.a,d=P(tm,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,t=m;continue e;case 2:var c=e,l=r,u=n,m=o;e=c,r=l,n=u,t=m;continue e;case 3:var s=i.a,d=P(tm,e,r,s,n),c=e,l=r,u=d,m=o;e=c,r=l,n=u,t=m;continue e;case 4:var g=i.a,c=e,l=r,u=P(Ll,e,r,n,g),m=o;e=c,r=l,n=u,t=m;continue e;default:var f=i.a,_=i.b,x=a(am,Cx(f),e),w=r*f.cE,c=e,l=r,u=P(Ll,x,w,n,$([_])),m=o;e=c,r=l,n=u,t=m;continue e}}else return n}),Ha=Lp,Ga=Pp,Oa=Mp,im=function(e){return{$:4,a:e}},Mx=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(M,n,r);e=i,r=o;continue e}else return r}),Bt=function(e){return im(a(Mx,e,D))},kx={ep:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:0,K:0,L:0,cE:1},om=Sl({bz:Wa,df:0,dC:xl,bO:Na,dW:255,bY:Wa,bZ:Wa}),Tx=function(e){var r=e,n=a(ar,me(r.it),a(ar,me(r.ix),me(r.dZ)));if(n){var t=r.dZ/n,i=r.ix/n,o=r.it/n,c=ua(o*o+i*i+t*t);return c*n}else return Kr},fr={b1:0,ga:!1,ch:0,dy:0,cB:0,dO:0,it:0,ix:0,dZ:0},Pr=v(function(e,r){var n=e,t=r;return rn({ez:n.it,eA:n.cB,eB:t.it,eC:t.cB,eD:n.ix,eE:n.ch,eF:t.ix,eG:t.ch,eH:n.dZ,eI:n.b1,eJ:t.dZ,eK:t.b1,eL:n.dO,eM:n.dy,eN:t.dO,eO:t.dy})}),Rt=z({bF:a(Pr,fr,fr),co:a(Pr,fr,fr),cp:a(Pr,fr,fr),cq:a(Pr,fr,fr)},P(ja,0,0,0,0)),cm=514,lm=function(e){var r=e.ah,n=e.ab,t=e.aa;return P(_l,515,r,n,t)},um=240,Dx=$([lm({aa:1,ab:0,ah:!0}),wl({bz:er,df:um,dC:0,bO:cm,dW:0,bY:er,bZ:er}),Cl]),Fx=v(function(e,r){var n=e,t=r.hj,i=r.gC,o=r.fT,c=Ke(t),l=c,u=Ke(i),m=u,s=n.dB;if(s.$){var g=s.a;return tc(m)?rn({ez:2/(o*g),eA:0,eB:0,eC:0,eD:0,eE:2/g,eF:0,eG:0,eH:0,eI:0,eJ:0,eK:-1,eL:0,eM:0,eN:0,eO:1}):rn({ez:2/(o*g),eA:0,eB:0,eC:0,eD:0,eE:2/g,eF:0,eG:0,eH:0,eI:0,eJ:-2/(m-l),eK:-(m+l)/(m-l),eL:0,eM:0,eN:0,eO:1})}else{var d=s.a;return tc(m)?rn({ez:1/(o*d),eA:0,eB:0,eC:0,eD:0,eE:1/d,eF:0,eG:0,eH:0,eI:0,eJ:-1,eK:-2*l,eL:0,eM:0,eN:-1,eO:0}):rn({ez:1/(o*d),eA:0,eB:0,eC:0,eD:0,eE:1/d,eF:0,eG:0,eH:0,eI:0,eJ:-(m+l)/(m-l),eK:-2*m*l/(m-l),eL:0,eM:0,eN:-1,eO:0})}}),Ki=v(function(e,r){return(1&e>>r)==1?0:1}),Ax=function(e){return $([lm({aa:1,ab:0,ah:!0}),wl({bz:er,df:um,dC:e,bO:cm,dW:0,bY:er,bZ:er}),Cl])},Ix=k(function(e,r,n){return or(a(J,function(t){var i=t<<4,o=P(ja,a(Ki,t,0),a(Ki,t,1),a(Ki,t,2),a(Ki,t,3));return b(en,e,z(r,o),Ax(i))},a(un,1,a(Mt,2,n)-1)))}),Ua=function(e){var r=e;return r},Ex=Vp,Bx={dp:Bn,dX:Wi,dY:pl,d_:Dt},eo=function(e){var r=e;return r},Rx=function(e){var r=eo(Ea(e)),n=Lr(la(e)),t=Lr(ca(e)),i=Lr(oa(e));return rn({ez:i.it,eA:t.it,eB:n.it,eC:r.it,eD:i.ix,eE:t.ix,eF:n.ix,eG:r.ix,eH:i.dZ,eI:t.dZ,eJ:n.dZ,eK:r.dZ,eL:0,eM:0,eN:0,eO:1})},Vx=v(function(e,r){var n=r;return Rx(a(am,n,e))}),jx=function(e){return a(Vx,Bx,e)},Nx=function(e){var r=e;return r.dR},Wx=function(e){var r=e;return oa(r)},Zx=function(e){var r=e;return ca(r)},Hx=function(e){var r=Nx(e.f7),n=ia({dp:Yc(r),dX:Wx(r),dY:Zx(r),d_:Ft(Qc(r))}),t=Bt(e.a8),i=t,o=P(Ll,n,1,B,$([i]));if(o.$===1)return D;var c=o.a,l=jx(r),u=a(Ae,.99,a(Ve,Ke(e.a3),Vi(Kf(c)))),m=rm(c),s=m.a,d=m.b,g=m.c,f=Tx(b(Kc,s,d,g)),_=a(Ae,1.01,a(Et,f,Vi(em(c)))),x=a(Fx,e.f7,{fT:e.fT,gC:_,hj:u}),w=Ex(x).eO,S=w?Lr(Ft(Qc(r))):Ua(Yc(r)),y=function(){var se=e.cJ;switch(se.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var ye=se.a;return z(3,ye);case 4:var ye=se.a;return z(4,ye);default:return z(5,0)}}(),C=y.a,E=y.b,U=e.cf,X=U,H=a(hl,X,e.cN),q=H,Y=rn({ez:0,eA:S.it,eB:Ha(q),eC:e.fm,eD:0,eE:S.ix,eF:Ga(q),eG:Oi(f),eH:0,eI:S.dZ,eJ:Oa(q),eK:C,eL:0,eM:w,eN:0,eO:E}),V=Ye(Gf,Y,l,x,kx,i,{O:D,Z:D,hN:D}),ne=e.cn;switch(ne.$){case 0:var ve=ne.a;return or($([b(en,V.O,z(ve,gl),Za),b(en,V.Z,Rt,Za)]));case 1:var ve=ne.a;return or($([b(en,V.O,Rt,Za),$([om]),b(en,V.hN,ve.bF,Uf),$([Yf(0)]),b(en,V.O,z(ve,gl),Dx),b(en,V.Z,Rt,Za)]));default:var xe=ne.a,fe=ne.b;return or($([b(en,V.O,z(fe,gl),Za),$([om]),a(fx,V.hN,xe),b(Ix,V.O,fe,Gn(xe)),b(en,V.Z,Rt,Za)]))}},Gx=function(e){return a(Dr,"width",T(e))},Ox=v(function(e,r){var n=$([V2(1),Z2(0),F2(!0),P(B2,0,0,0,0)]),t=function(){var C=e.cR;switch(C.$){case 0:return I(n,"0",1);case 1:return I(a(M,I2,n),"1",1);default:var E=C.a;return I(n,"0",E)}}(),i=t.a,o=t.b,c=t.c,l=e.a4,u=l.a,m=l.b,s=Zf(m),d=a(Ne,"height",T(s)+"px"),g=Zf(u),f=g/s,_=a(ya,function(C){return Hx({fT:f,f7:e.f7,a3:e.a3,a8:C.a8,cf:C.cf,cn:C.cn,fm:c,cJ:C.cJ,cN:C.cN})},r),x=a(Ne,"width",T(g)+"px"),w=e.a1,S=w,y=H2(S);return b(N2,"div",$([a(Ne,"padding","0px"),x,d]),$([z(o,b(U2,i,$([Gx(we(g*c)),j2(we(s*c)),x,d,a(Ne,"display","block"),a(Ne,"background-color",y)]),_))]))}),Ux=function(e){return a(Ox,{cR:e.cR,a1:e.a1,f7:e.f7,a3:e.a3,a4:e.a4},$([{a8:e.a8,cf:e.cf,cn:e.cn,cJ:e.cJ,cN:e.cN}]))},$m=function(e){return e},vm=$m({it:.31271,ix:.32902}),Jx=v(function(e,r){var n=e,t=Lr(r.gt),i=t.it,o=t.ix,c=t.dZ,l=a(hl,r.c3,r.cW),u=l;return{b1:Oa(u),ga:n,ch:Ga(u),dy:0,cB:Ha(u),dO:1,it:-i,ix:-o,dZ:-c}}),qx=function(e){return e},Yx=function(e){return qx(1.2*a(Mt,2,e))},Pl=function(e){return e},Xx={$:0},Qx=Xx,fm=function(e){return e},Kx=v(function(e,r){var n=e,t=r;return ce(t,n)>0}),mm=function(e){var r=e;return r},ey=function(e){e:for(;;){if(oe(e.g4,Kr)&&oe(e.g5,Kr))return fr;if(a(Kx,Ke(e.g4),Ke(e.g5))){var r={cW:e.cW,g4:e.g5,g5:e.g4,ft:Ft(e.ft)};e=r;continue e}else{var n=me(mm(e.g5)/_r),t=me(mm(e.g4)/_r),i=Lr(e.ft),o=i.it,c=i.ix,l=i.dZ,u=a(hl,fm(1),e.cW),m=u;return{b1:t*Oa(m),ga:!1,ch:t*Ga(m),dy:n/t,cB:t*Ha(m),dO:3,it:o,ix:c,dZ:l}}}},sm=function(e){return ey({cW:e.cW,g4:e.c3,g5:Kr,ft:e.ft})},ry=function(e){var r=e;return r},dm=function(e){var r=b(Df,1667,25e3,ry(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return $m({it:n,ix:t})},pm=function(e){return e},ny=dm(pm(12e3)),ay=dm(pm(5600)),ty=function(e){return{$:2,a:e}},iy=function(e){return ty(e)},oy=v(function(e,r){return{$:2,a:e,b:r}}),gm=function(e){return{$:0,a:e}},ro=function(e){var r=e;return r},cy=function(e){var r=e;return r.ga},ly=gm(Rt.a),uy=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?z(a(M,t,o),c):z(o,a(M,t,c))});return b(Ge,n,z(D,D),r)}),$y=function(e){var r=e;return rn({ez:r.it,eA:r.cB,eB:0,eC:0,eD:r.ix,eE:r.ch,eF:0,eG:0,eH:r.dZ,eI:r.b1,eJ:0,eK:0,eL:r.dO,eM:r.dy,eN:0,eO:0})},vy=be(function(e,r,n,t,i,o,c,l){var u=a(uy,cy,$([ro(e),ro(r),ro(n),ro(t)])),m=u.a,s=u.b;if(m.b){var d=W(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,x=f.b,w=x.a,S=x.b,y=S.a;return a(oy,a(J,$y,m),{bF:a(Pr,g,_),co:a(Pr,w,y),cp:a(Pr,i,o),cq:a(Pr,c,l)})}else return ly}else return gm({bF:a(Pr,e,r),co:a(Pr,n,t),cp:a(Pr,i,o),cq:a(Pr,c,l)})}),fy=k(function(e,r,n){return Ka(vy,e,r,n,fr,fr,fr,fr,fr)}),my=function(e){var r=a(Jx,T2(e.hN),{cW:ay,gt:e.h2,c3:Pl(8e4)}),n=sm({cW:ny,c3:Pl(2e4),ft:e.ft}),t=sm({cW:vm,c3:Pl(15e3),ft:Ft(e.ft)}),i=b(fy,r,n,t);return Ux({cR:iy(e.c_),a1:e.a1,f7:e.f7,a3:e.a3,a4:e.a4,a8:e.a8,cf:Yx(15),cn:i,cJ:Qx,cN:vm})},hm=O(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),sy=O(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),bm=O(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),_m=O(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),dy=O(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),py=O(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),gy=O(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Ml=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,t=e.c;return P(gy,r,n,t,1);case 2:var r=e.a,n=e.b,t=e.c;return P(hm,r,n,t,1);case 3:var r=e.a,i=e.b,t=e.c;return P(sy,r,i,t,1);case 4:var r=e.a,i=e.b,t=e.c;return P(bm,r,i,t,1);case 5:var r=e.a,i=e.b,t=e.c;return P(py,r,i,t,1);case 6:var r=e.a,i=e.b,t=e.c;return P(_m,r,i,t,1);case 7:var r=e.a,i=e.b,t=e.c;return P(dy,r,i,t,1);case 8:return e;case 9:return e;default:return e}},kl={$:0},hy=be(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,m=l.b,s=Qi(c(u)),d=a(Ze,s.eT,e),g=a(Ve,s.eQ,r),f=a(Ze,s.eU,n),_=a(Ve,s.eR,t),x=a(Ze,s.eV,i),w=a(Ve,s.eS,o),S=c,y=m;e=d,r=g,n=f,t=_,i=x,o=w,c=S,l=y;continue e}else return{eQ:r,eR:t,eS:o,eT:e,eU:n,eV:i}}),by=k(function(e,r,n){var t=Qi(e(r));return Ka(hy,t.eT,t.eQ,t.eU,t.eR,t.eV,t.eS,e,n)}),Tl=v(function(e,r){var n=e,t=r;return ce(t,n)<1}),xm=function(e){return a(Tl,e.eQ,e.eT)&&a(Tl,e.eR,e.eU)&&a(Tl,e.eS,e.eV)?e:{eQ:a(Ve,e.eT,e.eQ),eR:a(Ve,e.eU,e.eR),eS:a(Ve,e.eV,e.eS),eT:a(Ze,e.eT,e.eQ),eU:a(Ze,e.eU,e.eR),eV:a(Ze,e.eV,e.eS)}},Vt=function(e){var r=e;return r},ym=function(e){var r=Vt(e),n=r.a,t=r.b,i=r.c,o=Rn(n),c=Vn(n),l=jn(n),u=Rn(t),m=Vn(t),s=jn(t),d=Rn(i),g=Vn(i),f=jn(i);return xm({eQ:a(Ve,o,a(Ve,u,d)),eR:a(Ve,c,a(Ve,m,g)),eS:a(Ve,l,a(Ve,s,f)),eT:a(Ze,o,a(Ze,u,d)),eU:a(Ze,c,a(Ze,m,g)),eV:a(Ze,l,a(Ze,s,f))})},wm=kp,mr=function(e){return wm(eo(e))},Sm=function(e){var r=e;return r},no=function(e){return wm(Sm(e))},_y=v(function(e,r){var n=e,t=r;return{it:t.ix*n.dZ-t.dZ*n.ix,ix:t.dZ*n.it-t.it*n.dZ,dZ:t.it*n.ix-t.ix*n.it}}),Dl=v(function(e,r){var n=e,t=r;return{it:t.it-n.it,ix:t.ix-n.ix,dZ:t.dZ-n.dZ}}),xy={it:0,ix:0,dZ:0},yy=v(function(e,r){var n=e,t=r,i=a(ar,me(t.it),a(ar,me(t.ix),me(t.dZ)));if(i){var o=t.dZ/i,c=t.ix/i,l=t.it/i,u=ua(l*l+c*c+o*o);return{it:n*l/u,ix:n*c/u,dZ:n*o/u}}else return xy}),wy=yy(fm(1)),Cm=k(function(e,r,n){var t=a(Dl,r,n),i=a(Dl,e,r);return wy(a(_y,t,i))}),Sy=function(e){var r=Vt(e),n=r.a,t=r.b,i=r.c,o=no(b(Cm,n,t,i));return I({p:o,cz:mr(n)},{p:o,cz:mr(t)},{p:o,cz:mr(i)})},Cy=v(function(e,r){return{$:2,a:e,b:r}}),zm=Cy({d9:3,em:0,eX:4}),zy=function(e){if(e.b){var r=e.a,n=e.b,t=zm(a(J,Sy,e)),i=b(by,ym,r,n);return P(hm,i,e,t,0)}else return kl},Mr=k(function(e,r,n){return I(e,r,n)}),Lm=function(){var e=Br(1),r=Br(1),n=Br(1),t=a(Ae,-.5,e),i=a(Ae,-.5,r),o=a(Ae,-.5,n),c=b(Oe,o,i,t),l=a(Ae,.5,e),u=b(Oe,o,i,l),m=a(Ae,.5,r),s=b(Oe,o,m,t),d=b(Oe,o,m,l),g=a(Ae,.5,n),f=b(Oe,g,i,t),_=b(Oe,g,m,t),x=b(Oe,g,i,l),w=b(Oe,g,m,l);return Ml(zy($([b(Mr,c,_,f),b(Mr,c,s,_),b(Mr,u,x,w),b(Mr,u,w,d),b(Mr,f,_,w),b(Mr,f,w,x),b(Mr,c,d,s),b(Mr,c,u,d),b(Mr,c,f,x),b(Mr,c,x,u),b(Mr,s,w,_),b(Mr,s,d,w)])))}(),ao={$:0},Ly=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Py=k(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),m=no(b(Cm,u,l,c)),s={p:m,cz:mr(u)},d={p:m,cz:mr(l)},g={p:m,cz:mr(c)};return a(M,s,a(M,d,a(M,g,n)))}),Fl=function(e){var r=e;return r.G},My=O(function(e,r,n,t){if(r.$===1)return B;var i=r.a;if(n.$===1)return B;var o=n.a;if(t.$===1)return B;var c=t.a;return j(b(e,i,o,c))}),Al=4294967295>>>32-lt,Il=Ls,ky=k(function(e,r,n){e:for(;;){var t=Al&r>>>e,i=a(Il,t,n);if(i.$){var m=i.a;return a(Il,Al&r,m)}else{var o=i.a,c=e-lt,l=r,u=o;e=c,r=l,n=u;continue e}}}),Ty=function(e){return e>>>5<<5},Dy=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||ce(e,n)>-1?B:ce(e,Ty(n))>-1?j(a(Il,Al&e,o)):j(b(ky,t,e,i))}),El=function(e){var r=e;return r.at},Bl=v(function(e,r){return a(Dy,e,El(r))}),Fy=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(My,k(function(c,l,u){return I(c,l,u)}),a(Bl,t,e),a(Bl,i,e),a(Bl,o,e))};return a(Jr,r,Fl(e))},Ay=k(function(e,r,n){e:for(;;){var t=a(Qo,pr,e),i=t.a,o=t.b;if(ce(Xo(i),pr)<0)return a(n$,!0,{B:r,n,q:i});var c=o,l=a(M,e$(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Rl=function(e){return e.b?b(Ay,e,D,0):Qu},Iy=v(function(e,r){return!a(ga,a(pt,eg,e),r)}),Ey=function(e){var r=e.a;return r},Pm=v(function(e,r){var n=Ey(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ce(o,n)<0&&c>=0&&ce(c,n)<0&&l>=0&&ce(l,n)<0};return a(Iy,t,r)?{G:r,at:e}:{G:a(bi,t,r),at:e}}),By=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jt=By({d9:1,em:3,eX:4}),to=v(function(e,r){var n=Ua(r),t=Ua(e);return z(I(t.it,t.ix,t.dZ),I(n.it,n.ix,n.dZ))}),Mm=b(At,0,0,0),Vl=dr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,m=a(mt,a(to,e,r),i);if(m.$){var d={p:Mm,cz:mr(r)},g={p:Mm,cz:mr(e)},f=u+1,_=u;return I(a(M,I(n,_,f),a(M,I(n,f,t),c)),a(M,d,a(M,g,l)),u+2)}else{var s=m.a;return I(a(M,I(n,s,t),c),l,u)}}),Ry=Be(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,m=n.b,s=e(u),d=e(l),g=e(c),f=t+2,_=t+1,x=t,w=e,S=r,y=m,C=t+3,E=Ye(Vl,s,g,f,x,r,Ye(Vl,d,s,_,f,r,Ye(Vl,g,d,x,_,r,i)));e=w,r=S,n=y,t=C,i=E;continue e}else{var U=i,X=U.a,H=U.b;return z(X,nr(H))}}),Vy=Be(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,m=r.b,s=e(u),d=e(l),g=e(c),f=n+2,_=n+1,x=n,w=b(ba,a(to,g,s),f,b(ba,a(to,s,d),_,b(ba,a(to,d,g),x,i))),S=a(M,I(x,_,f),t),y=e,C=m,E=n+3,U=S,X=w;e=y,r=C,n=E,t=U,i=X;continue e}else return I(t,i,n)}),$a=k(function(e,r,n){var t=Fy(n),i=b(Ge,Py(r),D,t),o=F(Vy,r,t,0,D,fc),c=o.a,l=o.b,u=o.c,m=F(Ry,r,l,t,0,I(c,D,u)),s=m.a,d=m.b,g=Pn(d)?i:W(i,d);return b(Ly,e,a(Pm,Rl(g),s),a(jt,g,s))}),jl=function(e){return{G:a(J,function(r){return I(3*r,3*r+1,3*r+2)},a(un,0,Gn(e)-1)),at:Rl(or(a(J,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},km=function(e){switch(e.$){case 0:return ao;case 1:var r=e.a,n=e.b,t=a(J,Vt,n);return b($a,r,ir,jl(t));case 2:var r=e.a,n=e.b,t=a(J,Vt,n);return b($a,r,ir,jl(t));case 3:var r=e.a,i=e.b;return b($a,r,ir,i);case 4:var r=e.a,i=e.b;return b($a,r,function(o){return o.cz},i);case 5:var r=e.a,i=e.b;return b($a,r,function(o){return o.cz},i);case 6:var r=e.a,i=e.b;return b($a,r,function(o){return o.cz},i);case 7:var r=e.a,i=e.b;return b($a,r,function(o){return o.cz},i);case 8:return ao;case 9:return ao;default:return ao}},Tm=km(Lm),Dm={$:0},R=Dm,Ue=v(function(e,r){return{$:1,a:e,b:r}}),jy={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b9"}},Ny=1029,Wy=function(e){return{$:5,a:e}},Fm=function(e){var r=e;return Wy(r)},Zy=Fm(Ny),Hy=1028,Gy=Fm(Hy),sr=k(function(e,r,n){return r===1?e?a(M,Zy,n):a(M,Gy,n):n}),Am={src:`
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
    `,attributes:{position:"cz",uv:"N"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Nl=O(function(e,r,n,t){return a(Ue,r,be(function(i,o,c,l,u,m,s,d){return F(Me,b(sr,l,t,d),Am,jy,n,{b9:e,c,d:o,e:m,f:i,g:u})}))}),Wl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aN"}},Im={src:`
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
    `,attributes:{position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},hn=O(function(e,r,n,t){return a(Ue,r,be(function(i,o,c,l,u,m,s,d){return F(Me,b(sr,l,t,d),Im,Wl,n,{aN:e,c,d:o,e:m,f:i,g:u})}))}),Em=v(function(e,r){return{$:3,a:e,b:r}}),Oy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aN",pointRadius:"cy",sceneProperties:"f"}},Bm={src:`
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
    `,attributes:{position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cy",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Uy=O(function(e,r,n,t){return a(Em,n,be(function(i,o,c,l,u,m,s,d){return F(Me,d,Bm,Oy,t,{aN:e,c,d:o,cy:r,e:m,f:i,g:u})}))}),Zl={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Nt=function(e){var r=e;return r},io=Tp,bn=Be(function(e,r,n,t,i){return a(Ue,n,be(function(o,c,l,u,m,s,d,g){return F(Me,b(sr,u,i,g),Im,Zl,t,{a6:a(io,Nt(r),e),c:l,d:c,e:s,f:o,g:m})}))}),Jy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cy",sceneProperties:"f"}},qy=Be(function(e,r,n,t,i){return a(Em,t,be(function(o,c,l,u,m,s,d,g){return F(Me,g,Bm,Jy,i,{a6:a(io,Nt(r),e),c:l,d:c,cy:n,e:s,f:o,g:m})}))}),Rm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",materialColor:"dg",sceneProperties:"f",viewMatrix:"g"}},Vm={src:`
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
    `,attributes:{normal:"p",position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},oo=O(function(e,r,n,t){return a(Ue,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return F(Me,b(sr,l,t,d),Vm,Rm,n,{T:f,bF:g.bF,co:g.co,cp:g.cp,cq:g.cq,dg:e,c,d:o,e:m,f:i,g:u})}))}),jm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",materialColorTexture:"dh",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Nm={src:`
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
    `,attributes:{normal:"p",position:"cz",tangent:"fo",uv:"N"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Yy=dr(function(e,r,n,t,i,o){return a(Ue,t,be(function(c,l,u,m,s,d,g,f){var _=g.a,x=g.b;return F(Me,b(sr,m,o,f),Nm,jm,i,{T:x,bF:_.bF,co:_.co,cp:_.cp,cq:_.cq,dh:e,c:u,d:l,bg:r,e:d,f:c,bm:n,g:s})}))}),Wm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cV",constantBaseColor:"cX",constantMetallic:"cY",constantRoughness:"cZ",enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",metallicTexture:"dk",normalMapTexture:"bg",roughnessTexture:"dG",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Xy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){return function(s){return a(Ue,u,be(function(d,g,f,_,x,w,S,y){var C=S.a,E=S.b;return F(Me,b(sr,_,s,y),Nm,Wm,m,{cV:e,cX:r,cY:o,cZ:t,T:E,bF:C.bF,co:C.co,cp:C.cp,cq:C.cq,dk:i,c:f,d:g,bg:c,e:w,dG:n,f:d,bm:l,g:x})}))}}}}}}}}}}},Zm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cU",enabledLights:"T",lights12:"bF",lights34:"co",lights56:"cp",lights78:"cq",metallic:"dj",roughness:"dF",sceneProperties:"f",viewMatrix:"g"}},co=dr(function(e,r,n,t,i,o){return a(Ue,t,be(function(c,l,u,m,s,d,g,f){var _=g.a,x=g.b;return F(Me,b(sr,m,o,f),Vm,Zm,i,{cU:e,T:x,bF:_.bF,co:_.co,cp:_.cp,cq:_.cq,dj:n,c:u,d:l,e:d,dF:r,f:c,g:s})}))}),Qy=function(e){return{$:0,a:e}},Hm=v(function(e,r){return{$:1,a:e,b:r}}),Wt=v(function(e,r){if(r.$){var n=r.a.D;return z(n,1)}else return r.a,z(e,0)}),Ky=function(e){return P(ja,Ha(e),Ga(e),Oa(e),1)},Hl=P(ja,0,0,0,0),lo=v(function(e,r){if(r.$){var t=r.a.D;return z(t,Hl)}else{var n=r.a;return z(e,Ky(n))}}),Gm=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.D;return a(Hm,z(i,Hl),a(Wt,i,r))}else if(n.b.$){var i=n.b.a.D;return a(Hm,a(lo,i,e),a(Wt,i,r))}else{var t=n.a.a;return n.b.a,Qy(t)}}),ew=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),uo=O(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),rw=O(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),nw=function(e){return a(xr,e,1)},Gl=a(xr,0,0),Ja=v(function(e,r){if(r.$){var t=r.a.D;return z(t,Gl)}else{var n=r.a;return z(e,nw(n))}}),Om=O(function(e,r,n,t){var i=P(rw,e,r,n,t);if(i.a.$){var u=i.a.a.D;return P(uo,z(u,Hl),a(Ja,u,r),a(Ja,u,n),a(Wt,u,t))}else if(i.b.$){var u=i.b.a.D;return P(uo,a(lo,u,e),z(u,Gl),a(Ja,u,n),a(Wt,u,t))}else if(i.c.$){var u=i.c.a.D;return P(uo,a(lo,u,e),a(Ja,u,r),z(u,Gl),a(Wt,u,t))}else if(i.d.$){var u=i.d.a.D;return P(uo,a(lo,u,e),a(Ja,u,r),a(Ja,u,n),z(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,b(ew,o,c,l)}}),aw={src:`
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
    `,attributes:{},uniforms:{backlight:"cS",colorTexture:"b9",sceneProperties:"f"}},Ol=Be(function(e,r,n,t,i){return a(Ue,n,be(function(o,c,l,u,m,s,d,g){return F(Me,b(sr,u,i,g),Am,aw,t,{cS:Nt(r),b9:e,c:l,d:c,e:s,f:o,g:m})}))}),Um={src:`
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
    `,attributes:{normal:"p",position:"cz",uv:"N"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},tw=O(function(e,r,n,t){return a(Ue,r,be(function(i,o,c,l,u,m,s,d){var g=s.a,f=s.b;return F(Me,b(sr,l,t,d),Um,jm,n,{T:f,bF:g.bF,co:g.co,cp:g.cp,cq:g.cq,dh:e,c,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),iw=So(function(e,r,n,t,i,o,c,l,u){return a(Ue,c,be(function(m,s,d,g,f,_,x,w){var S=x.a,y=x.b;return F(Me,b(sr,g,u,w),Um,Wm,l,{cV:e,cX:r,cY:o,cZ:t,T:y,bF:S.bF,co:S.co,cp:S.cp,cq:S.cq,dk:i,c:d,d:s,bg:e,e:_,dG:n,f:m,bm:0,g:f})}))}),Zt=k(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),ow=function(e){var r=e;return b(Zt,r.eT,r.eQ,.5)},cw=function(e){var r=e;return b(Zt,r.eU,r.eR,.5)},lw=function(e){var r=e;return b(Zt,r.eV,r.eS,.5)},uw=function(e){return b(Oe,ow(e),cw(e),lw(e))},ie=function(e){var r=rm(e),n=r.a,t=r.b,i=r.c;return{gb:eo(uw(e)),gK:n/2,gL:t/2,gM:i/2}},Ul=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.D;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:var t=r.a,i=r.c,o=r.d;return P(Nl,l,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return P(Nl,l,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return P(Nl,l,ie(t),i,o);case 8:return R;case 9:return R;default:return R}}else{var n=e.b.a;switch(r.$){case 0:return R;case 1:var t=r.a,i=r.c,o=r.d;return P(hn,n,ie(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return P(hn,n,ie(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return P(hn,n,ie(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return P(hn,n,ie(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return P(hn,n,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return P(hn,n,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return P(hn,n,ie(t),i,o);case 8:var t=r.a,i=r.c;return P(hn,n,ie(t),i,0);case 9:var t=r.a,i=r.c;return P(hn,n,ie(t),i,0);default:var t=r.a,c=r.b,i=r.d;return P(Uy,n,c,ie(t),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.D,m=e.c;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:var t=r.a,i=r.c,o=r.d;return F(Ol,l,m,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return F(Ol,l,m,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return F(Ol,l,m,ie(t),i,o);case 8:return R;case 9:return R;default:return R}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return R;case 1:var t=r.a,i=r.c,o=r.d;return F(bn,u,m,ie(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return F(bn,u,m,ie(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return F(bn,u,m,ie(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return F(bn,u,m,ie(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return F(bn,u,m,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return F(bn,u,m,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return F(bn,u,m,ie(t),i,o);case 8:var t=r.a,i=r.c;return F(bn,u,m,ie(t),i,0);case 9:var t=r.a,i=r.c;return F(bn,u,m,ie(t),i,0);default:var t=r.a,c=r.b,i=r.d;return F(qy,u,m,c,ie(t),i)}}case 2:e.a;var s=e.b,d=e.c,g=a(Gm,s,d);if(g.$){var x=g.a,w=x.a;x.b;var S=g.b,y=S.a,C=S.b;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:return R;case 6:var t=r.a,i=r.c,_=r.d;return P(tw,w,ie(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return Ye(Yy,w,y,C,ie(t),i,_);case 8:return R;case 9:return R;default:return R}}else{var f=g.a;switch(r.$){case 0:return R;case 1:return R;case 2:var t=r.a,i=r.c,_=r.d;return P(oo,f,ie(t),i,_);case 3:return R;case 4:var t=r.a,i=r.c,_=r.d;return P(oo,f,ie(t),i,_);case 5:return R;case 6:var t=r.a,i=r.c,_=r.d;return P(oo,f,ie(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return P(oo,f,ie(t),i,_);case 8:return R;case 9:return R;default:return R}}default:e.a;var E=e.b,U=e.c,X=e.d,d=e.e,H=P(Om,E,U,X,d);if(H.$){var ne=H.a,ve=ne.a,xe=ne.b,fe=H.b,se=fe.a,ye=fe.b,de=H.c,Ie=de.a,ke=de.b,qe=H.d,y=qe.a,C=qe.b;switch(r.$){case 0:return R;case 1:return R;case 2:return R;case 3:return R;case 4:return R;case 5:return R;case 6:var t=r.a,i=r.c,o=r.d;return ys(iw,ve,xe,se,ye,Ie,ke,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return Xy(ve)(xe)(se)(ye)(Ie)(ke)(y)(C)(ie(t))(i)(o);case 8:return R;case 9:return R;default:return R}}else{var q=H.a,Y=H.b,V=H.c;switch(r.$){case 0:return R;case 1:return R;case 2:var t=r.a,i=r.c,o=r.d;return Ye(co,q,Y,V,ie(t),i,o);case 3:return R;case 4:var t=r.a,i=r.c,o=r.d;return Ye(co,q,Y,V,ie(t),i,o);case 5:return R;case 6:var t=r.a,i=r.c,o=r.d;return Ye(co,q,Y,V,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return Ye(co,q,Y,V,ie(t),i,o);case 8:return R;case 9:return R;default:return R}}}}),Jl=function(e){var r=e;return r.it},ql=function(e){var r=e;return r.ix},Yl=function(e){var r=e;return r.dZ},$w=function(e){var r=e,n=Yl(r.d_),t=ql(r.d_),i=Jl(r.d_),o=Yl(r.dY),c=ql(r.dY),l=Jl(r.dY),u=Yl(r.dX),m=ql(r.dX),s=Jl(r.dX);return s*c*n+m*o*i+u*l*t-u*c*i-m*l*n-s*o*t>0},vw=function(e){var r=eo(Ea(e)),n=Lr(la(e)),t=Lr(ca(e)),i=Lr(oa(e));return{ep:$w(e),s:i.it,t:i.ix,u:i.dZ,v:t.it,w:t.ix,x:t.dZ,y:n.it,z:n.ix,A:n.dZ,J:r.it,K:r.ix,L:r.dZ,cE:1}},qa=v(function(e,r){return{$:5,a:e,b:r}}),Jm=v(function(e,r){var n=r;switch(n.$){case 0:return R;case 5:var t=n.a,i=n.b,o=a(Hf,t,e);return a(qa,o,i);case 1:return a(qa,e,n);case 3:return a(qa,e,n);case 2:return a(qa,e,n);default:return a(qa,e,n)}}),qm=v(function(e,r){return a(Jm,vw(e),r)}),$o=function(e){return{$:2,a:e}},fw=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.gb;return{gb:{it:n*o.it,ix:t*o.ix,dZ:i*o.dZ},gK:n*r.gK,gL:t*r.gL,gM:i*r.gM}}),mw=Ap,sw=Fp,Ym=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=sw(t),_=f.it,x=f.ix,w=f.dZ,S=f.fA,y=mw({fA:S,it:_*s,ix:x*d,dZ:w*g});return Ka(r,n,y,i,o,c,l,u,m)}}}}}}}}}},Xl=v(function(e,r){switch(r.$){case 0:return Dm;case 5:var n=r.a,t=r.b;return a(qa,n,a(Xl,e,t));case 1:var i=r.a,o=r.b;return a(Ue,a(fw,e,i),a(Ym,e,o));case 3:return r;case 2:var o=r.a;return $o(a(Ym,e,o));default:var c=r.a;return im(a(J,Xl(e),c))}}),Ql=v(function(e,r){var n=r;return a(Xl,e,n)}),Kl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Xm=7683,Qm=7682,dw=b(yl,{df:0,dC:0,dW:15},{bz:er,bO:Na,bY:er,bZ:Xm},{bz:er,bO:Na,bY:er,bZ:Qm}),pw=b(yl,{df:0,dC:0,dW:15},{bz:er,bO:Na,bY:er,bZ:Qm},{bz:er,bO:Na,bY:er,bZ:Xm}),eu=v(function(e,r){return e?a(M,pw,r):a(M,dw,r)}),gw={src:`
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
    `,attributes:{normal:"p",position:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cG",viewMatrix:"g"}},hw=function(e){if(e.$){var r=e.c;return j(be(function(n,t,i,o,c,l,u,m){return F(Me,a(eu,o,m),gw,Kl,r,{c:i,d:t,e:l,f:n,cG:u,g:c})}))}else return B},vo=function(e){var r=hw(e);if(r.$)return R;var n=r.a;return $o(n)},bw=O(function(e,r,n,t){var i=a(Ul,n,Lm),o=function(){var s=z(e,r);return s.a?s.b?Bt($([i,vo(Tm)])):i:s.b?vo(Tm):R}(),c=$l(t),l=c.a,u=c.b,m=c.c;return a(qm,ul(t),a(Ql,I(l,u,m),o))}),_w=v(function(e,r){return P(bw,!0,!0,e,r)}),Km=v(function(e,r){return{$:0,a:e,b:r}}),xw=function(e){var r=Ac(e),n=r.hz,t=r.gH,i=r.fZ;return b(At,n,t,i)},yw=function(e){return a(Km,0,cl(xw(e)))},ww=function(e){var r=e;return r.m},Ht=function(e){var r=e;return Ba(r)},Sw=v(function(e,r){var n=e.cz,t=e.p;return a(M,{p:no(t),cz:mr(n)},r)}),Cw=qt(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,m=Oa(l.cz),s=Ga(l.cz),d=Ha(l.cz),g=a(Xn,e,d),f=a(ar,r,d),_=a(Xn,n,s),x=a(ar,t,s),w=a(Xn,i,m),S=a(ar,o,m),y=u;e=g,r=f,n=_,t=x,i=w,o=S,c=y;continue e}else return xm({eQ:r,eR:t,eS:o,eT:e,eU:n,eV:i})}),es=v(function(e,r){var n=Oa(e.cz),t=Ga(e.cz),i=Ha(e.cz);return Co(Cw,i,i,t,t,n,n,r)}),zw=function(e){var r=b(Wu,Sw,D,El(e));if(r.b){var n=r.a,t=r.b,i=a(jt,r,Fl(e)),o=a(es,n,t);return P(bm,o,e,i,0)}else return kl},rs=v(function(e,r){var n=e,t=r,i=n.dY,o=i,c=n.dX,l=c;return{it:t.it*l.it+t.ix*o.it,ix:t.it*l.ix+t.ix*o.ix,dZ:t.it*l.dZ+t.ix*o.dZ}}),fo=function(e){var r=e;return Ra(r)},Gt=function(e){var r=e;return r},ru=function(e){return Xr(2*_r*e)},ns=yf({dp:Bn,dX:Wi,dY:pl}),as=function(){var e=72,r=a(Mf,e,ru(1)),n=Br(1),t=Gt(qc),i=Gt(Xc),o=Br(1),c=a(Ae,.5,o),l=b(Oe,Kr,Kr,c),u=a(Ae,-.5,o),m=b(Oe,Kr,Kr,u),s=function(f){var _=a(Ae,f,r),x=Gt(a(rs,ns,el(_))),w=a(Ae,Ht(_),n),S=a(Ae,fo(_),n),y=b(Oe,w,S,c),C=b(Oe,w,S,u),E=a(Ti,e,f+1),U=a(Ae,E,r),X=Gt(a(rs,ns,el(U))),H=a(Ae,Ht(U),n),q=a(Ae,fo(U),n),Y=b(Oe,H,q,u),V=b(Oe,H,q,c);return $([I({p:i,cz:m},{p:i,cz:Y},{p:i,cz:C}),I({p:x,cz:C},{p:X,cz:Y},{p:X,cz:V}),I({p:x,cz:C},{p:X,cz:V},{p:x,cz:y}),I({p:t,cz:l},{p:t,cz:y},{p:t,cz:V})])},d=a(J,s,a(un,0,e-1)),g=jl(or(d));return Ml(zw(g))}(),ts=km(as),Lw=function(e){var r=e,n=me(r.dZ),t=me(r.ix),i=me(r.it);if(ce(i,t)<1)if(ce(i,n)<1){var o=ua(r.dZ*r.dZ+r.ix*r.ix);return{it:0,ix:-r.dZ/o,dZ:r.ix/o}}else{var o=ua(r.ix*r.ix+r.it*r.it);return{it:-r.ix/o,ix:r.it/o,dZ:0}}else if(ce(t,n)<1){var o=ua(r.dZ*r.dZ+r.it*r.it);return{it:r.dZ/o,ix:0,dZ:-r.it/o}}else{var o=ua(r.it*r.it+r.ix*r.ix);return{it:-r.ix/o,ix:r.it/o,dZ:0}}},Pw=function(e){var r=Lw(e),n=r,t=n,i=e,o=i,c={it:o.ix*t.dZ-o.dZ*t.ix,ix:o.dZ*t.it-o.it*t.dZ,dZ:o.it*t.ix-o.ix*t.it};return z(r,c)},Mw=function(e){var r=Jc(e),n=Pw(r),t=n.a,i=n.b;return ia({dp:zf(e),dX:t,dY:i,d_:r})},kw=function(e){var r=e;return r.hb},Tw=function(e){var r=e;return r.hx},Dw=O(function(e,r,n,t){var i=Mw(ww(t)),o=a(Ul,n,as),c=function(){var d=z(e,r);return d.a?d.b?Bt($([o,vo(ts)])):o:d.b?vo(ts):R}(),l=Tw(t),u=l,m=kw(t),s=m;return a(qm,i,a(Ql,I(u,u,s),c))}),Fw=v(function(e,r){return P(Dw,!0,!0,e,r)}),is={src:`
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
    `,attributes:{triangleVertex:"dN"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},os={src:`
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
    `,attributes:{triangleVertex:"dN"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Ot=function(e){var r=Vt(e),n=r.a,t=r.b,i=r.c,o=Ua(n),c=Ua(t),l=Ua(i);return rn({ez:o.it,eA:c.it,eB:l.it,eC:0,eD:o.ix,eE:c.ix,eF:l.ix,eG:0,eH:o.dZ,eI:c.dZ,eJ:l.dZ,eK:0,eL:0,eM:0,eN:0,eO:0})},mo=zm($([I({dN:0},{dN:1},{dN:2})])),Aw=v(function(e,r){var n=ym(r),t=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,R;var i=e.b.a;return a(Ue,t,be(function(y,C,E,U,X,H,q,Y){return F(Me,b(sr,U,0,Y),is,Wl,mo,{aN:i,c:E,d:C,e:H,f:y,bU:Ot(r),g:X})}));case 1:if(e.b.$)return e.a,R;var o=e.b.a,c=e.c;return a(Ue,t,be(function(y,C,E,U,X,H,q,Y){return F(Me,b(sr,U,0,Y),is,Zl,mo,{a6:a(io,Nt(c),o),c:E,d:C,e:H,f:y,bU:Ot(r),g:X})}));case 2:e.a;var l=e.b,u=e.c,m=a(Gm,l,u);if(m.$)return R;var s=m.a;return a(Ue,t,be(function(y,C,E,U,X,H,q,Y){var V=q.a,ne=q.b;return F(Me,b(sr,U,0,Y),os,Rm,mo,{T:ne,bF:V.bF,co:V.co,cp:V.cp,cq:V.cq,dg:s,c:E,d:C,e:H,f:y,bU:Ot(r),g:X})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=P(Om,d,g,f,u);if(_.$)return R;var x=_.a,w=_.b,S=_.c;return a(Ue,t,be(function(y,C,E,U,X,H,q,Y){var V=q.a,ne=q.b;return F(Me,b(sr,U,0,Y),os,Zm,mo,{cU:x,T:ne,bF:V.bF,co:V.co,cp:V.cp,cq:V.cq,dj:S,c:E,d:C,e:H,dF:w,f:y,bU:Ot(r),g:X})}))}}),Iw=function(){var e=$([{bl:a(xr,0,1)},{bl:a(xr,1,1)},{bl:a(xr,2,1)},{bl:a(xr,0,-1)},{bl:a(xr,1,-1)},{bl:a(xr,2,-1)}]),r=$([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return a(jt,e,r)}(),Ew={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cG",triangleVertexPositions:"bU",viewMatrix:"g"}},cs=function(e){return $o(be(function(r,n,t,i,o,c,l,u){return F(Me,a(eu,i,u),Ew,Kl,Iw,{c:t,d:n,e:c,f:r,cG:l,bU:Ot(e),g:o})}))},Bw=O(function(e,r,n,t){var i=a(Aw,n,t),o=z(e,r);return o.a?o.b?Bt($([i,cs(t)])):i:o.b?cs(t):R}),Rw=v(function(e,r){return P(Bw,!0,!0,e,r)}),Vw=v(function(e,r){var n=jn(r),t=jn(e),i=Vn(r),o=Vn(e),c=Rn(r),l=Rn(e);return{eQ:a(Ve,l,c),eR:a(Ve,o,i),eS:a(Ve,t,n),eT:a(Ze,l,c),eU:a(Ze,o,i),eV:a(Ze,t,n)}}),jw=function(e){var r=vl(e),n=r.a,t=r.b;return a(Vw,n,t)},ls={src:`
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
    `,attributes:{lineSegmentVertex:"ex"},uniforms:{lineSegmentEndPoint:"ev",lineSegmentStartPoint:"ew",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Nw=v(function(e,r){return{$:1,a:e,b:r}}),Ww=Nw({d9:2,em:0,eX:1}),us=Ww($([z({ex:0},{ex:1})])),Zw=v(function(e,r){var n=jw(r),t=ie(n),i=vl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,R;var l=e.b.a;return a(Ue,t,be(function(m,s,d,g,f,_,x,w){return F(Me,w,ls,Wl,us,{aN:l,ev:mr(c),ew:mr(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return R;var l=e.b.a,u=e.c;return a(Ue,t,be(function(s,d,g,f,_,x,w,S){return F(Me,S,ls,Zl,us,{a6:a(io,Nt(u),l),ev:mr(c),ew:mr(o),c:g,d,e:x,f:s,g:_})}));case 2:return R;default:return R}}),Hw=v(function(e,r){return a(Zw,e,r)}),$s=v(function(e,r){var n=e,t=r;return n/t}),Gw=Be(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(M,o,i);if(oe(r,e))return c;var l=e,u=r-1,m=n,s=t,d=c;e=l,r=u,n=m,t=s,i=d;continue e}}),vs=v(function(e,r){return e<1?D:F(Gw,0,e,e,r,D)}),Ow=v(function(e,r){var n=e.cz,t=e.p,i=e.N,o=i,c=o.a,l=o.b;return a(M,{p:no(t),cz:mr(n),N:a(xr,c,l)},r)}),Uw=function(e){var r=b(Wu,Ow,D,El(e));if(r.b){var n=r.a,t=r.b,i=a(jt,r,Fl(e)),o=a(es,n,t);return P(_m,o,e,i,0)}else return kl},fs=v(function(e,r){var n=e,t=r,i=Ba(t);return{it:i*Ba(n),ix:i*Ra(n),dZ:Ra(t)}}),Jw=function(){var e=Br(1),r=72,n=a(un,0,r-1),t=a(vs,r,a(Zt,Kr,ru(1))),i=ot(r/2),o=a(un,0,i-1),c=a(vs,i,a(Zt,Ia(90),Ia(-90))),l=Rl(or(a(J,function(s){return a(J,function(d){return{p:Gt(a(fs,s,d)),cz:b(Oe,a(Ae,Ht(d)*Ht(s),e),a(Ae,Ht(d)*fo(s),e),a(Ae,fo(d),e)),N:z(a($s,s,ru(1)),a($s,a(Et,Ia(90),d),Ia(180)))}},c)},t))),u=v(function(s,d){return s*(i+1)+d}),m=or(a(J,function(s){return or(a(J,function(d){var g=a(u,s+1,d),f=a(u,s,d),_=a(u,s+1,d+1),x=a(u,s,d+1);return $([I(x,_,g),I(x,g,f)])},o))},n));return Ml(Uw(a(Pm,l,m)))}(),so=72,po=2*so,qw=v(function(e,r){e:for(;;){var n=po+1,t=a(Ti,po,2*e+3),i=a(Ti,po,2*e+2),o=2*e+1,c=2*e,l=po,u=a(M,I(l,c,i),a(M,I(c,t,i),a(M,I(c,o,t),a(M,I(o,n,t),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),Yw=k(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Xw=v(function(e,r){e:for(;;){var n=b(Yw,0,2*_r,e/so),t={b$:n,cv:0,cC:1},i={b$:n,cv:1,cC:1},o=a(M,t,a(M,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Qw=function(){var e=a(Xw,so-1,$([{b$:0,cv:0,cC:0},{b$:0,cv:1,cC:0}])),r=a(qw,so-1,D);return a(jt,e,r)}(),Kw={src:`
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
    `,attributes:{angle:"b$",offsetScale:"cv",radiusScale:"cC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cG",viewMatrix:"g"}},ms=function(e){return $o(be(function(r,n,t,i,o,c,l,u){return F(Me,a(eu,!0,u),Kw,Kl,Qw,{aN:b(At,0,0,1),c:t,d:n,e:c,f:r,cG:l,g:o})}))},eS=function(e){var r=Sm(e);return{ep:!0,s:1,t:0,u:0,v:0,w:1,x:0,y:0,z:0,A:1,J:r.it,K:r.ix,L:r.dZ,cE:1}},rS=v(function(e,r){return a(Jm,eS(e),r)}),nS=O(function(e,r,n,t){var i=a(Ul,n,Jw),o=function(){var u=z(e,r);return u.a?u.b?Bt($([i,ms()])):i:u.b?ms():R}(),c=ml(t),l=c;return a(rS,a(Dl,Bn,fl(t)),a(Ql,I(l,l,l),o))}),aS=v(function(e,r){return P(nS,!0,!0,e,r)}),tS=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),iS=Be(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),oS=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return a(Km,r,n);case 1:var r=e.a,n=e.b,t=e.c;return b(tS,r,n,t);case 2:var r=e.a,n=e.b,i=e.c;return b(Tf,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return F(iS,r,n,o,c,i)}},cS=oS,ss=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([a(_w,r,n)]);case 1:var r=e.a,t=e.b;return $([a(Rw,r,t)]);case 3:var r=e.a,i=e.b;return $([a(aS,cS(r),i)]);case 2:var r=e.a,o=e.b;return $([a(Fw,r,o)]);case 4:var c=e.a,l=e.b;return $([a(Hw,yw(c),l)]);default:var u=e.a;return a(ya,ss,u)}},lS=function(e){return a(ya,ss,e)},uS=v(function(e,r){return my({a1:M2(e.fV),f7:e.f7,a3:k2(.5),c_:e.c_,a4:z(Wf(we(e.cF.ir)),Wf(we(e.cF.gO))),a8:lS(r),hN:!0,h2:a(fs,Xr(e.h1),Xr(e.h3)),ft:Dt})}),$S=v(function(e,r){return a(uS,{fV:a(Ji,"background color",e),f7:Sf(e),c_:e.c_,cF:e.cF,h1:a(pn,"sunlight azimuth",e),h3:a(pn,"sunlight elevation",e)},$([x2(e),a(P2,e,r)]))}),vS=v(function(e,r){return a(Cn,$([a(Ne,"width","100%")]),$([Y_,a($S,e,r)]))}),fS=P(I1,vS,J_,N1,B1);const mS={Main:{init:fS(a(G,function(e){return tr({g3:e})},a(Z,"inputs",a(G,function(e){return a(G,function(r){return a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(c){return tr({b6:c,c_:o,gw:i,g9:t,dz:n,cF:r,iq:e})},a(Z,"clock",je))},a(Z,"devicePixelRatio",je))},a(Z,"dt",je))},a(Z,"keyboard",a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(c){return a(G,function(l){return a(G,function(u){return a(G,function(m){return a(G,function(s){return a(G,function(d){return tr({fQ:d,gk:s,d8:m,gv:u,ha:l,hw:c,hC:o,hO:i,fs:t})},a(Z,"alt",_e))},a(Z,"control",_e))},a(Z,"down",_e))},a(Z,"downs",si(_a)))},a(Z,"left",_e))},a(Z,"pressedKeys",si(_a)))},a(Z,"right",_e))},a(Z,"shift",_e))},a(Z,"up",_e))))},a(Z,"pointer",a(G,function(n){return a(G,function(t){return a(G,function(i){return a(G,function(o){return a(G,function(c){return a(G,function(l){return a(G,function(u){return a(G,function(m){return tr({d8:m,eo:u,hg:l,hD:c,hE:o,fs:i,it:t,ix:n})},a(Z,"down",_e))},a(Z,"isDown",_e))},a(Z,"move",_e))},a(Z,"rightDown",_e))},a(Z,"rightUp",_e))},a(Z,"up",_e))},a(Z,"x",je))},a(Z,"y",je))))},a(Z,"screen",a(G,function(r){return a(G,function(n){return tr({gO:n,ir:r})},a(Z,"height",je))},a(Z,"width",je))))},a(Z,"wheel",a(G,function(e){return a(G,function(r){return tr({go:r,gp:e})},a(Z,"deltaX",je))},a(Z,"deltaY",je)))))))(0)}},Q={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},sS=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),t=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Q.keyboard.downs.push(f.code),Q.keyboard.pressedKeys.push(f.code),r(f)&&(Q.keyboard.control=!0),n(f)&&(Q.keyboard.alt=!0),t(f)&&(console.log("yo"),Q.keyboard.shift=!0),i(f)&&(Q.keyboard.left=!0),o(f)&&(Q.keyboard.right=!0),c(f)&&(Q.keyboard.up=!0),l(f)&&(console.log("yey"),Q.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Q.keyboard.pressedKeys=Q.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Q.keyboard.control=!1,Q.keyboard.pressedKeys=[]),n(f)&&(Q.keyboard.alt=!1),t(f)&&(Q.keyboard.shift=!1),i(f)&&(Q.keyboard.left=!1),o(f)&&(Q.keyboard.right=!1),c(f)&&(Q.keyboard.up=!1),l(f)&&(Q.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Q.pointer.x=-.5*Q.screen.width+f.pageX,Q.pointer.y=.5*Q.screen.height-f.pageY,u(f)&&(Q.pointer.down=!0,Q.pointer.isDown=!0),m(f)&&(Q.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Q.pointer.move=!0,Q.pointer.x=-.5*Q.screen.width+f.pageX,Q.pointer.y=.5*Q.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(Q.pointer.up=!0,Q.pointer.isDown=!1),m(f)&&(Q.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(Q.pointer.up=!0,Q.pointer.isDown=!1),m(f)&&(Q.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Q.wheel.deltaX=f.deltaX,Q.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(Q)}),window.addEventListener("focus",f=>{s(Q)}),window.addEventListener("visibilitychange",f=>{s(Q)}),window.addEventListener("resize",()=>{Q.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,x=_-Q.clock;x<.009||(Q.dt=x,Q.clock=_,e.ports.tick.send(Q),d(Q)),window.requestAnimationFrame(g)}},dS=mS.Main.init({node:document.querySelector("#app div"),flags:{inputs:Q}});sS(dS);
