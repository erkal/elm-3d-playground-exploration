const Qm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Qm();function zn(e,r,n){return n.a=e,n.f=r,n}function v(e){return zn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return zn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ae(e){return zn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Ye(e){return zn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function wr(e){return zn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function Li(e){return zn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function Pe(e){return zn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,t,i,o,c,l,u)}}}}}}}})}function dc(e){return zn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,t,i,o,c,l,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function z(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ar(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function pc(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function gt(e,r,n,t,i,o,c,l,u){return e.a===8?e.f(r,n,t,i,o,c,l,u):e(r)(n)(t)(i)(o)(c)(l)(u)}function es(e,r,n,t,i,o,c,l,u,f){return e.a===9?e.f(r,n,t,i,o,c,l,u,f):e(r)(n)(t)(i)(o)(c)(l)(u)(f)}var rs=[];function ns(e){return e.length}var as=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),ts=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),is=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var os=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+cs()),r});function cs(e){return"<internals>"}function ka(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function he(e,r){for(var n,t=[],i=ko(e,r,0,t);i&&(n=t.pop());i=ko(n.a,n.b,0,t));return i}function ko(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ka(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=Kl(e),r=Kl(r));for(var i in e)if(!ko(e[i],r[i],n+1,t))return!1;return!0}v(he);v(function(e,r){return!he(e,r)});function _e(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=_e(e.a,r.a))||(n=_e(e.b,r.b))?n:_e(e.c,r.c);for(;e.b&&r.b&&!(n=_e(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return _e(e,r)<0});v(function(e,r){return _e(e,r)<1});v(function(e,r){return _e(e,r)>0});v(function(e,r){return _e(e,r)>=0});var ls=v(function(e,r){var n=_e(e,r);return n<0?H$:n?Qp:N$}),ht=0;function L(e,r){return{a:e,b:r}}function G(e,r,n){return{a:e,b:r,c:n}}function Re(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Jr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Jr(e.a,r);return n}var D={$:0};function Jr(e,r){return{$:1,a:e,b:r}}var us=v(Jr);function $(e){for(var r=D,n=e.length;n--;)r=Jr(e[n],r);return r}function zi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var $s=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ae(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Ye(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(z(e,r.a,n.a,t.a,i.a));return $(o)});wr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(F(e,r.a,n.a,t.a,i.a,o.a));return $(c)});v(function(e,r){return $(zi(r).sort(function(n,t){return _e(e(n),e(t))}))});v(function(e,r){return $(zi(r).sort(function(n,t){var i=a(e,n,t);return i===N$?0:i===H$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var vs=v(Math.pow);v(function(e,r){return r%e});var fs=v(function(e,r){var n=r%e;return e===0?ka(11):n>0&&e<0||n<0&&e>0?n+e:n}),ms=Math.PI,ss=Math.cos,ds=Math.sin;v(Math.atan2);function ps(e){return e}function gs(e){return e===1/0||e===-1/0}var hs=Math.ceil,bs=Math.floor,_s=Math.round,xs=Math.sqrt,Bl=Math.log,ws=isNaN;function ys(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ss=v(function(e,r){return e+r});function Cs(e){var r=e.charCodeAt(0);return isNaN(r)?J:X(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function Ls(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function zs(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Ps=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ms=v(function(e,r){return r.split(e)}),Ts=v(function(e,r){return r.join(e)}),ks=M(function(e,r,n){return n.slice(e,r)});function Ds(e){return $(e.trim().split(/\s+/g))}function Fs(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var As=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Is=v(function(e,r){return r.indexOf(e)>-1}),Es=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Bs=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function d$(e){return e+""}function Vs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:X(n==45?-r:r)}function Rs(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?X(r):J}function Us(e){return zi(e).join("")}function js(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Ns(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Hs(e){return{$:0,a:e}}function Gs(e){return{$:1,a:e}}function gc(e){return{$:2,b:e}}var Ws=gc(function(e){return typeof e=="boolean"?Ge(e):jr("a BOOL",e)}),Os=gc(function(e){return typeof e=="number"?Ge(e):jr("a FLOAT",e)}),qs=gc(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):jr("a STRING",e)});function Js(e){return{$:3,b:e}}var Ys=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Pn(e,r){return{$:9,f:e,g:r}}var Xs=v(function(e,r){return{$:10,b:r,h:e}}),Ks=v(function(e,r){return Pn(e,[r])}),Zs=M(function(e,r,n){return Pn(e,[r,n])});ae(function(e,r,n,t){return Pn(e,[r,n,t])});Ye(function(e,r,n,t,i){return Pn(e,[r,n,t,i])});wr(function(e,r,n,t,i,o){return Pn(e,[r,n,t,i,o])});Li(function(e,r,n,t,i,o,c){return Pn(e,[r,n,t,i,o,c])});Pe(function(e,r,n,t,i,o,c,l){return Pn(e,[r,n,t,i,o,c,l])});dc(function(e,r,n,t,i,o,c,l,u){return Pn(e,[r,n,t,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Cr(e,n)}catch(t){return tr(a(Tc,"This is not valid JSON! "+t.message,r))}});var p$=v(function(e,r){return Cr(e,r)});function Cr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):jr("null",r);case 3:return Et(r)?Vl(e.b,r,$):jr("a LIST",r);case 4:return Et(r)?Vl(e.b,r,Qs):jr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return jr("an OBJECT with a field named `"+n+"`",r);var f=Cr(e.b,r[n]);return Ar(f)?f:tr(a(Zl,n,f.a));case 7:var t=e.e;if(!Et(r))return jr("an ARRAY",r);if(t>=r.length)return jr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Cr(e.b,r[t]);return Ar(f)?f:tr(a(G$,t,f.a));case 8:if(typeof r!="object"||r===null||Et(r))return jr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Cr(e.b,r[o]);if(!Ar(f))return tr(a(Zl,o,f.a));i=Jr(L(o,f.a),i)}return Ge(mr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=Cr(l[u],r);if(!Ar(f))return f;c=c(f.a)}return Ge(c);case 10:var f=Cr(e.b,r);return Ar(f)?Cr(e.h(f.a),r):f;case 11:for(var m=D,p=e.g;p.b;p=p.b){var f=Cr(p.a,r);if(Ar(f))return f;m=Jr(f.a,m)}return tr(eg(mr(m)));case 1:return tr(a(Tc,e.a,r));case 0:return Ge(e.a)}}function Vl(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Cr(e,r[o]);if(!Ar(c))return tr(a(G$,o,c.a));i[o]=c.a}return Ge(n(i))}function Et(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Qs(e){return a(dg,e.length,function(r){return e[r]})}function jr(e,r){return tr(a(Tc,"Expecting "+e,r))}function fa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return fa(e.b,r.b);case 6:return e.d===r.d&&fa(e.b,r.b);case 7:return e.e===r.e&&fa(e.b,r.b);case 9:return e.f===r.f&&Rl(e.g,r.g);case 10:return e.h===r.h&&fa(e.b,r.b);case 11:return Rl(e.g,r.g)}}function Rl(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!fa(e[t],r[t]))return!1;return!0}var ed=v(function(e,r){return JSON.stringify(r,null,e)+""});function g$(e){return e}function rd(){return[]}function nd(){return{}}var ad=M(function(e,r,n){return n[e]=r,n});function td(e){return v(function(r,n){return n.push(e(r)),n})}function Qn(e){return{$:0,a:e}}function id(e){return{$:1,a:e}}function mn(e){return{$:2,b:e,c:null}}var Do=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function od(e){return{$:5,b:e}}var cd=0;function hc(e){var r={$:0,e:cd++,f:e,g:null,h:[]};return bc(r),r}function h$(e){return mn(function(r){r(Qn(hc(e)))})}function b$(e,r){e.h.push(r),bc(e)}var ld=v(function(e,r){return mn(function(n){b$(e,r),n(Qn(ht))})}),io=!1,Ul=[];function bc(e){if(Ul.push(e),!io){for(io=!0;e=Ul.shift();)ud(e);io=!1}}function ud(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,bc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ae(function(e,r,n,t){return _c(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function _c(e,r,n,t,i,o){var c=a(p$,e,r?r.flags:void 0);Ar(c)||ka(2);var l={},u=n(c.a),f=u.a,m=o(b,f),p=$d(l,b);function b(s,x){var _=a(t,s,f);m(f=_.a,x),Nl(l,_.b,i(f))}return Nl(l,u.b,i(f)),p?{ports:p}:{}}var Or={};function $d(e,r){var n;for(var t in Or){var i=Or[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=fd(i,r)}return n}function vd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function fd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l(u){return a(Do,l,od(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&c?z(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=hc(a(Do,l,e.b))}var md=v(function(e,r){return mn(function(n){e.g(r),n(Qn(ht))})});v(function(e,r){return a(ld,e.h,{$:0,a:r})});function _$(e){return function(r){return{$:1,k:e,l:r}}}function sd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var jl=[],oo=!1;function Nl(e,r,n){if(jl.push({p:e,q:r,r:n}),!oo){oo=!0;for(var t;t=jl.shift();)dd(t.p,t.q,t.r);oo=!1}}function dd(e,r,n){var t={};ti(!0,r,t,null),ti(!1,n,t,null);for(var i in e)b$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ti(e,r,n,t){switch(r.$){case 1:var i=r.k,o=pd(e,i,t,r.l);n[i]=gd(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)ti(e,c.a,n,t);return;case 3:ti(e,r.o,n,{s:r.n,t});return}}function pd(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Or[r].e:Or[r].f;return a(o,i,t)}function gd(e,r,n){return n=n||{i:D,j:D},e?n.i=Jr(r,n.i):n.j=Jr(r,n.j),n}function hd(e){Or[e]&&ka(3)}v(function(e,r){return r});function bd(e,r){return hd(e),Or[e]={f:_d,u:r,a:xd},_$(e)}var _d=v(function(e,r){return function(n){return e(r(n))}});function xd(e,r){var n=D,t=Or[e].u,i=Qn(null);Or[e].b=i,Or[e].c=M(function(c,l,u){return n=l,i});function o(c){var l=a(p$,t,c);Ar(l)||ka(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var ii,an=typeof document!="undefined"?document:{};function xc(e,r){e.appendChild(r)}ae(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(_n(e,function(){}),i),{}});function Fo(e){return{$:0,a:e}}var x$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:yc(n),e:i,f:e,b:o}})}),sn=x$(void 0),wd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:yc(n),e:i,f:e,b:o}})}),yd=wd(void 0);function Sd(e,r,n,t){return{$:3,d:yc(e),g:r,h:n,i:t}}var Cd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Mn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Mn([e,r],function(){return e(r)})});M(function(e,r,n){return Mn([e,r,n],function(){return a(e,r,n)})});var Ld=ae(function(e,r,n,t){return Mn([e,r,n,t],function(){return h(e,r,n,t)})});Ye(function(e,r,n,t,i){return Mn([e,r,n,t,i],function(){return z(e,r,n,t,i)})});wr(function(e,r,n,t,i,o){return Mn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});Li(function(e,r,n,t,i,o,c){return Mn([e,r,n,t,i,o,c],function(){return ar(e,r,n,t,i,o,c)})});Pe(function(e,r,n,t,i,o,c,l){return Mn([e,r,n,t,i,o,c,l],function(){return pc(e,r,n,t,i,o,c,l)})});dc(function(e,r,n,t,i,o,c,l,u){return Mn([e,r,n,t,i,o,c,l,u],function(){return gt(e,r,n,t,i,o,c,l,u)})});var w$=v(function(e,r){return{$:"a0",n:e,o:r}}),zd=v(function(e,r){return{$:"a1",n:e,o:r}}),wc=v(function(e,r){return{$:"a2",n:e,o:r}}),Br=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function y$(e){return e=="script"?"p":e}function Pd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Md(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Td(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function S$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var kd=v(function(e,r){return r.$==="a0"?a(w$,r.n,Dd(e,r.o)):r});function Dd(e,r){var n=Ac(r);return{$:r.$,a:n?h(pg,n<3?Fd:Ad,lr(e),r.a):a(ui,e,r.a)}}var Fd=v(function(e,r){return L(e(r.a),r.b)}),Ad=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function yc(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Hl(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?Hl(c,i,o):c[i]=o}return r}function Hl(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function _n(e,r){var n=e.$;if(n===5)return _n(e.k||(e.k=e.m()),r);if(n===0)return an.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=_n(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Ao(c,r,e.d),c}var c=e.f?an.createElementNS(e.f,e.c):an.createElement(e.c);ii&&e.c=="a"&&c.addEventListener("click",ii(c)),Ao(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)xc(c,_n(n===1?l[u]:l[u].b,r));return c}function Ao(e,r,n){for(var t in n){var i=n[t];t==="a1"?Id(e,i):t==="a0"?Vd(e,r,i):t==="a3"?Ed(e,i):t==="a4"?Bd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Id(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Ed(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Bd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Vd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Rd(r,o),e.addEventListener(i,c,Sc&&{passive:Ac(o)<2}),t[i]=c}}var Sc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Sc=!0}}))}catch{}function Rd(e,r){function n(t){var i=n.q,o=Cr(i.a,t);if(!!Ar(o)){for(var c=Ac(i),l=o.a,u=c?c<3?l.a:l.aA:l,f=c==1?l.b:c==3&&l.dG,m=(f&&t.stopPropagation(),(c==2?l.b:c==3&&l.dv)&&t.preventDefault(),e),p,b;p=m.j;){if(typeof p=="function")u=p(u);else for(var b=p.length;b--;)u=p[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Ud(e,r){return e.$==r.$&&fa(e.a,r.a)}function C$(e,r){var n=[];return Ir(e,r,n,0),n}function nr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Ir(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Jd(r),o=1;else{nr(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Ir(e.k,r.k,m,0),m.length>0&&nr(n,1,t,m);return;case 4:for(var p=e.j,b=r.j,s=!1,x=e.k;x.$===4;)s=!0,typeof p!="object"?p=[p,x.j]:p.push(x.j),x=x.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&p.length!==b.length){nr(n,0,t,r);return}(s?!jd(p,b):p!==b)&&nr(n,2,t,b),Ir(x,_,n,t+1);return;case 0:e.a!==r.a&&nr(n,3,t,r.a);return;case 1:Gl(e,r,n,t,Nd);return;case 2:Gl(e,r,n,t,Hd);return;case 3:if(e.h!==r.h){nr(n,0,t,r);return}var S=Cc(e.d,r.d);S&&nr(n,4,t,S);var C=r.i(e.g,r.g);C&&nr(n,5,t,C);return}}}function jd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Gl(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){nr(n,0,t,r);return}var o=Cc(e.d,r.d);o&&nr(n,4,t,o),i(e,r,n,t)}function Cc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Cc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Ud(c,l)||(t=t||{},t[i]=l)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Nd(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?nr(n,6,t,{v:l,i:c-l}):c<l&&nr(n,7,t,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var m=i[f];Ir(m,o[f],n,++t),t+=m.b||0}}function Hd(e,r,n,t){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,m=u.length,p=0,b=0,s=t;p<f&&b<m;){var x=l[p],_=u[b],S=x.a,C=_.a,w=x.b,T=_.b,H=void 0,Z=void 0;if(S===C){s++,Ir(w,T,i,s),s+=w.b||0,p++,b++;continue}var ne=l[p+1],te=u[b+1];if(ne){var ie=ne.a,ee=ne.b;Z=C===ie}if(te){var q=te.a,de=te.b;H=S===q}if(H&&Z){s++,Ir(w,de,i,s),Ua(o,i,S,T,b,c),s+=w.b||0,s++,ja(o,i,S,ee,s),s+=ee.b||0,p+=2,b+=2;continue}if(H){s++,Ua(o,i,C,T,b,c),Ir(w,de,i,s),s+=w.b||0,p+=1,b+=2;continue}if(Z){s++,ja(o,i,S,w,s),s+=w.b||0,s++,Ir(ee,T,i,s),s+=ee.b||0,p+=2,b+=1;continue}if(ne&&ie===q){s++,ja(o,i,S,w,s),Ua(o,i,C,T,b,c),s+=w.b||0,s++,Ir(ee,de,i,s),s+=ee.b||0,p+=2,b+=2;continue}break}for(;p<f;){s++;var x=l[p],w=x.b;ja(o,i,x.a,w,s),s+=w.b||0,p++}for(;b<m;){var pe=pe||[],_=u[b];Ua(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||c.length>0||pe)&&nr(n,8,t,{w:i,x:c,y:pe})}var L$="_elmW6BL";function Ua(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Ir(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Ua(e,r,n+L$,t,i,o)}function ja(e,r,n,t,i){var o=e[n];if(!o){var c=nr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Ir(t,o.z,l,i),nr(r,9,i,{w:l,A:o});return}ja(e,r,n+L$,t,i)}function z$(e,r,n,t){Na(e,r,n,0,0,r.b,t)}function Na(e,r,n,t,i,o,c){for(var l=n[t],u=l.r;u===i;){var f=l.$;if(f===1)z$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&Na(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var p=l.s;if(p){p.A.s=e;var m=p.w;m.length>0&&Na(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||(u=l.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Na(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var x=r.e,_=e.childNodes,S=0;S<x.length;S++){i++;var C=b===1?x[S]:x[S].b,w=i+(C.b||0);if(i<=u&&u<=w&&(t=Na(_[S],C,n,t,i,w,c),!(l=n[t])||(u=l.r)>o))return t;i=w}return t}function P$(e,r,n,t){return n.length===0?e:(z$(e,r,n,t),oi(e,n))}function oi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Gd(i,t);i===e&&(e=o)}return e}function Gd(e,r){switch(r.$){case 0:return Wd(e,r.s,r.u);case 4:return Ao(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return oi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(_n(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=oi(e,o.w),e;case 8:return Od(e,r);case 5:return r.s(e);default:ka(10)}}function Wd(e,r,n){var t=e.parentNode,i=_n(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function Od(e,r){var n=r.s,t=qd(n.y,r);e=oi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:_n(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return t&&xc(e,t),e}function qd(e,r){if(!!e){for(var n=an.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;xc(n,o.c===2?o.s:_n(o.z,r.u))}return n}}function Lc(e){if(e.nodeType===3)return Fo(e.textContent);if(e.nodeType!==1)return Fo("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Jr(a(Br,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Jr(Lc(f[t]),u);return h(sn,l,r,u)}function Jd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Yd=ae(function(e,r,n,t){return _c(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.ik,l=t.node,u=Lc(l);return M$(o,function(f){var m=c(f),p=C$(u,m);l=P$(l,u,p,i),u=m})})});ae(function(e,r,n,t){return _c(r,t,e.gS,e.ii,e.hX,function(i,o){var c=e.dE&&e.dE(i),l=e.ik,u=an.title,f=an.body,m=Lc(f);return M$(o,function(p){ii=c;var b=l(p),s=sn("body")(D)(b.fU),x=C$(m,s);f=P$(f,m,x,i),m=s,ii=0,u!==b.id&&(an.title=u=b.id)})})});var ci=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function M$(e,r){r(e);var n=0;function t(){n=n===1?0:(ci(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&ci(t),n=2)}}v(function(e,r){return a(Ec,_t,mn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Ec,_t,mn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Ec,_t,mn(function(){history.replaceState({},"",r),e()}))});var Xd={addEventListener:function(){},removeEventListener:function(){}},Kd=typeof window!="undefined"?window:Xd;M(function(e,r,n){return h$(mn(function(t){function i(o){hc(n(o))}return e.addEventListener(r,i,Sc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Cr(e,r);return Ar(n)?X(n.a):J});function T$(e,r){return mn(function(n){ci(function(){var t=document.getElementById(e);n(t?Qn(r(t)):id(gg(e)))})})}function Zd(e){return mn(function(r){ci(function(){r(Qn(e()))})})}v(function(e,r){return T$(r,function(n){return n[e](),ht})});v(function(e,r){return Zd(function(){return Kd.scroll(e,r),ht})});M(function(e,r,n){return T$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,ht})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Qd=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return X(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var ep=M(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var p=u[f];m[--f]=p?X(p):J}t.push(z(gf,u[0],u.index,i,$(m))),l=r.lastIndex}return r.lastIndex=c,$(t)});ae(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?X(f):J}return n(z(gf,c,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,$(i)});var Wl=0;function nt(e,r){for(;r.b;r=r.b)e(r.a)}function zc(e){for(var r=0;e.b;e=e.b)r++;return r}var rp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},np=Ye(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),ap=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),tp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),ip=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),op=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),lp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),up=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),$p=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),vp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},fp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},mp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},sp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},k$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},D$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},dp=function(e){e.gl.disable(e.gl.CULL_FACE)},pp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},gp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},hp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Ol=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],bp=[fp,mp,sp,k$,D$,dp,pp,gp,hp];function ql(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function _p(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function F$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function xp(e,r,n,t){for(var i=n.a.d5,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(s,x,_,S,C){var w;if(i===1)for(w=0;w<x;w++)s[_++]=x===1?S[C]:S[C][w];else o.forEach(function(T){for(w=0;w<x;w++)s[_++]=x===1?S[T][C]:S[T][C][w]})}var u=F$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,p=new u.type(zc(n.b)*m);nt(function(s){l(p,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),b}function wp(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=yp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*zc(r.b),indexBuffer:null,buffers:{}}}function yp(e,r){var n=new Uint32Array(zc(e)*r),t=0,i;return nt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Jl(e,r){return e+"#"+r}var A$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),k$(n),D$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=Jl(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Wl++,f||(f=ql(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Wl++,m||(m=ql(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var p=_p(t,f,m);l={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Sp(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(p,u),x=t.getAttribLocation(p,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(x)}c=Jl(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),Cp(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=wp(t,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],x=l.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=xp(t,s,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=F$(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,w=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(x+T),t.vertexAttribPointer(x+T,S.size,S.baseType,!1,w,C*T)}for(n.toggle=!n.toggle,nt(t_(n),o.a),u=0;u<Ol.length;u++){var H=n[Ol[u]];H.toggle!==n.toggle&&H.enabled&&(bp[u](n),H.enabled=!1,H.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return nt(i,e.g),r});function Sp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(s,x){var _=x.name,S=e.getUniformLocation(s,_);switch(x.type){case e.INT:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};case e.FLOAT:return function(w){o[_]!==w&&(e.uniform1f(S,w),o[_]=w)};case e.FLOAT_VEC2:return function(w){o[_]!==w&&(e.uniform2f(S,w[0],w[1]),o[_]=w)};case e.FLOAT_VEC3:return function(w){o[_]!==w&&(e.uniform3f(S,w[0],w[1],w[2]),o[_]=w)};case e.FLOAT_VEC4:return function(w){o[_]!==w&&(e.uniform4f(S,w[0],w[1],w[2],w[3]),o[_]=w)};case e.FLOAT_MAT4:return function(w){o[_]!==w&&(e.uniformMatrix4fv(S,!1,new Float32Array(w)),o[_]=w)};case e.SAMPLER_2D:var C=c++;return function(w){e.activeTexture(e.TEXTURE0+C);var T=l.textures.get(w);T||(T=w.ge(e),l.textures.set(w,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==w&&(e.uniform1i(S,C),o[_]=w)};case e.BOOL:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<m;p++){var b=e.getActiveUniform(i,p);f[t[b.name]||b.name]=u(i,b)}return f}function Cp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Lp=M(function(e,r,n){return Sd(r,{g:n,f:{},h:e},Fp,Ap)}),zp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Pp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Mp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Tp=v(function(e,r){e.contextAttributes.antialias=!0}),kp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Dp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Fp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};nt(function(i){return a(a_,r,i)},e.h);var n=an.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),rp(function(){return a(A$,e,n)})):(n=an.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ap(e,r){return r.f=e.f,A$(r)}var Ip=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Ep(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Ep(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Pc=new Float64Array(3),Yl=new Float64Array(3),Xl=new Float64Array(3),Bp=M(function(e,r,n){return new Float64Array([e,r,n])}),Vp=function(e){return e[0]},Rp=function(e){return e[1]},Up=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var jp=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function I$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(I$);function E$(e,r,n){return n===void 0&&(n=new Float64Array(3)),li(I$(e,r,n),n)}v(E$);function B$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function li(e,r){r===void 0&&(r=new Float64Array(3));var n=1/B$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Np=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ha=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ha);function Io(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Io);v(function(e,r){var n,t=Pc,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ha(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ha(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ha(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ha(r,t)+e[14])/n,i});var Hp=ae(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Gp=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},Wp=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Op(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Op(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var qp=new Float64Array(16),Jp=new Float64Array(16),Yp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},Xp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function V$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}wr(V$);ae(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return V$(c,l,o,i,n,t)});function R$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}wr(R$);ae(function(e,r,n,t){return R$(e,r,n,t,-1,1)});function U$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],m=e[7],p=e[8],b=e[9],s=e[10],x=e[11],_=e[12],S=e[13],C=e[14],w=e[15],T=r[0],H=r[1],Z=r[2],ne=r[3],te=r[4],ie=r[5],ee=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],I=r[14],E=r[15];return n[0]=t*T+l*H+p*Z+_*ne,n[1]=i*T+u*H+b*Z+S*ne,n[2]=o*T+f*H+s*Z+C*ne,n[3]=c*T+m*H+x*Z+w*ne,n[4]=t*te+l*ie+p*ee+_*q,n[5]=i*te+u*ie+b*ee+S*q,n[6]=o*te+f*ie+s*ee+C*q,n[7]=c*te+m*ie+x*ee+w*q,n[8]=t*de+l*pe+p*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=c*de+m*pe+x*Me+w*Se,n[12]=t*me+l*Te+p*I+_*E,n[13]=i*me+u*Te+b*I+S*E,n[14]=o*me+f*Te+s*I+C*E,n[15]=c*me+m*Te+x*I+w*E,n}v(U$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],m=e[9],p=e[10],b=e[12],s=e[13],x=e[14],_=r[0],S=r[1],C=r[2],w=r[4],T=r[5],H=r[6],Z=r[8],ne=r[9],te=r[10],ie=r[12],ee=r[13],q=r[14];return n[0]=t*_+c*S+f*C,n[1]=i*_+l*S+m*C,n[2]=o*_+u*S+p*C,n[3]=0,n[4]=t*w+c*T+f*H,n[5]=i*w+l*T+m*H,n[6]=o*w+u*T+p*H,n[7]=0,n[8]=t*Z+c*ne+f*te,n[9]=i*Z+l*ne+m*te,n[10]=o*Z+u*ne+p*te,n[11]=0,n[12]=t*ie+c*ee+f*q+b,n[13]=i*ie+l*ee+m*q+s,n[14]=o*ie+u*ee+p*q+x,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=li(r,Pc);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*u,n[2]=o*t*l-i*u,n[3]=0,n[4]=t*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+t*u,n[7]=0,n[8]=t*o*l+i*u,n[9]=i*o*l-t*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/B$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),p=o*m,b=c*m,s=l*m,x=o*c*f,_=o*l*f,S=c*l*f,C=o*o*f+u,w=x+s,T=_-b,H=x-s,Z=c*c*f+u,ne=S+p,te=_+b,ie=S-p,ee=l*l*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],I=n[7],E=n[8],B=n[9],V=n[10],R=n[11],U=n[12],j=n[13],N=n[14],je=n[15];return t[0]=q*C+Se*w+E*T,t[1]=de*C+me*w+B*T,t[2]=pe*C+Te*w+V*T,t[3]=Me*C+I*w+R*T,t[4]=q*H+Se*Z+E*ne,t[5]=de*H+me*Z+B*ne,t[6]=pe*H+Te*Z+V*ne,t[7]=Me*H+I*Z+R*ne,t[8]=q*te+Se*ie+E*ee,t[9]=de*te+me*ie+B*ee,t[10]=pe*te+Te*ie+V*ee,t[11]=Me*te+I*ie+R*ee,t[12]=U,t[13]=j,t[14]=N,t[15]=je,t});function Kp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(Kp);ae(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Zp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(Zp);ae(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],u=t[3],f=t[4],m=t[5],p=t[6],b=t[7],s=t[8],x=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=m,i[6]=p,i[7]=b,i[8]=s,i[9]=x,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=c*e+m*r+x*n+t[13],i[14]=l*e+p*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],m=r[4],p=r[5],b=r[6],s=r[7],x=r[8],_=r[9],S=r[10],C=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=m,n[5]=p,n[6]=b,n[7]=s,n[8]=x,n[9]=_,n[10]=S,n[11]=C,n[12]=c*t+m*i+x*o+r[12],n[13]=l*t+p*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=E$(e,r,Pc),i=li(Io(n,t,Yl),Yl),o=li(Io(t,i,Xl),Xl),c=qp,l=Jp;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,U$(c,l)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var P=us,Bt=os,j$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(Bt,e,l,f)}else{var u=c.a;return h(Bt,o,l,u)}});return h(Bt,o,h(Bt,e,r,i),t)}),Mc=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,t,i,h(Mc,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),Kl=function(e){return h(Mc,M(function(r,n,t){return a(P,L(r,n),t)}),D,e)},N$=1,Qp=2,H$=0,tr=function(e){return{$:1,a:e}},Tc=v(function(e,r){return{$:3,a:e,b:r}}),Zl=v(function(e,r){return{$:0,a:e,b:r}}),G$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},eg=function(e){return{$:2,a:e}},X=function(e){return{$:0,a:e}},J={$:1},rg=As,ng=ed,k=d$,le=v(function(e,r){return a(Ts,e,zi(r))}),kc=v(function(e,r){return $(a(Ms,e,r))}),W$=function(e){return a(le,`
    `,a(kc,`
`,e))},Ue=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),Jn=function(e){return h(Ue,v(function(r,n){return n+1}),0,e)},ag=$s,tg=M(function(e,r,n){e:for(;;)if(_e(e,r)<1){var t=e,i=r-1,o=a(P,r,n);e=t,r=i,n=o;continue e}else return n}),tn=v(function(e,r){return h(tg,e,r,D)}),O$=v(function(e,r){return h(ag,e,a(tn,0,Jn(r)-1),r)}),qr=js,q$=function(e){var r=qr(e);return 97<=r&&r<=122},J$=function(e){var r=qr(e);return r<=90&&65<=r},ig=function(e){return q$(e)||J$(e)},og=function(e){var r=qr(e);return r<=57&&48<=r},cg=function(e){return q$(e)||J$(e)||og(e)},mr=function(e){return h(Ue,P,D,e)},Da=Cs,lg=v(function(e,r){return`

(`+(k(e+1)+(") "+W$(ug(r))))}),ug=function(e){return a($g,e,D)},$g=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var _=Da(n);if(_.$===1)return!1;var S=_.a,C=S.a,w=S.b;return ig(C)&&a(rg,cg,w)}(),i=t?"."+n:"['"+(n+"']"),u=c,f=a(P,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(k(o)+"]"),u=c,f=a(P,l,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+a(le,"",mr(r)):"Json.Decode.oneOf"}(),x=p+(" failed in the following "+(k(Jn(m))+" ways:"));return a(le,`

`,a(P,x,a(O$,lg,m)))}else{var c=m.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(le,"",mr(r)):"!"}();default:var b=e.a,s=e.b,x=function(){return r.b?"Problem with the value at json"+(a(le,"",mr(r))+`:

    `):`Problem with the given value:

`}();return x+(W$(a(ng,4,s))+(`

`+b))}}),_r=32,Eo=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Bo=rs,at=hs,Dc=v(function(e,r){return Bl(r)/Bl(e)}),Ga=ps,tt=at(a(Dc,2,_r)),Y$=z(Eo,0,tt,Bo,Bo),X$=as,K$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Z$=bs,Vo=ns,zr=v(function(e,r){return _e(e,r)>0?e:r}),vg=function(e){return{$:0,a:e}},Fc=ts,fg=v(function(e,r){e:for(;;){var n=a(Fc,_r,e),t=n.a,i=n.b,o=a(P,vg(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return mr(o)}}),Q$=function(e){var r=e.a;return r},mg=v(function(e,r){e:for(;;){var n=at(r/_r);if(n===1)return a(Fc,_r,e).a;var t=a(fg,e,D),i=n;e=t,r=i;continue e}}),ev=v(function(e,r){if(r.n){var n=r.n*_r,t=Z$(a(Dc,_r,n-1)),i=e?mr(r.C):r.C,o=a(mg,i,r.n);return z(Eo,Vo(r.r)+n,a(zr,5,t*tt),o,r.r)}else return z(Eo,Vo(r.r),tt,Bo,r.r)}),sg=Ye(function(e,r,n,t,i){e:for(;;){if(r<0)return a(ev,!1,{C:t,n:n/_r|0,r:i});var o=K$(h(X$,_r,r,e)),c=e,l=r-_r,u=n,f=a(P,o,t),m=i;e=c,r=l,n=u,t=f,i=m;continue e}}),dg=v(function(e,r){if(e<=0)return Y$;var n=e%_r,t=h(X$,n,e-n,r),i=e-n-_r;return F(sg,r,i,e,D,t)}),Ar=function(e){return!e.$},Q=Xs,ze=Ws,K=Ys,We=Os,rv=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),ui=Ks,pg=Zs,lr=Hs,Ac=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Er=function(e){return e},gg=Er,Ql=wr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),hg=Is,Un=Ls,ma=ks,bt=v(function(e,r){return e<1?r:h(ma,e,Un(r),r)}),Pi=Bs,Mi=function(e){return e===""},Ti=v(function(e,r){return e<1?"":h(ma,0,e,r)}),nv=Vs,eu=Ye(function(e,r,n,t,i){if(Mi(i)||a(hg,"@",i))return J;var o=a(Pi,":",i);if(o.b){if(o.b.b)return J;var c=o.a,l=nv(a(bt,c+1,i));if(l.$===1)return J;var u=l;return X(ar(Ql,e,a(Ti,c,i),u,r,n,t))}else return X(ar(Ql,e,i,J,r,n,t))}),ru=ae(function(e,r,n,t){if(Mi(t))return J;var i=a(Pi,"/",t);if(i.b){var o=i.a;return F(eu,e,a(bt,o,t),r,n,a(Ti,o,t))}else return F(eu,e,"/",r,n,t)}),nu=M(function(e,r,n){if(Mi(n))return J;var t=a(Pi,"?",n);if(t.b){var i=t.a;return z(ru,e,X(a(bt,i+1,n)),r,a(Ti,i,n))}else return z(ru,e,J,r,n)});v(function(e,r){if(Mi(r))return J;var n=a(Pi,"#",r);if(n.b){var t=n.a;return h(nu,e,X(a(bt,t+1,r)),a(Ti,t,r))}else return h(nu,e,J,r)});var bg=Es,_t=function(e){},xt=Qn,_g=xt(0),av=ae(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var m=f.a,p=f.b,b=n>500?h(Ue,e,r,mr(p)):z(av,e,r,n+1,p);return a(e,i,a(e,c,a(e,u,a(e,m,b))))}else return a(e,i,a(e,c,a(e,u,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),er=M(function(e,r,n){return z(av,e,r,0,n)}),re=v(function(e,r){return h(er,v(function(n,t){return a(P,e(n),t)}),D,r)}),$i=Do,Ic=v(function(e,r){return a($i,function(n){return xt(e(n))},r)}),xg=M(function(e,r,n){return a($i,function(t){return a($i,function(i){return xt(a(e,t,i))},n)},r)}),wg=function(e){return h(er,xg(P),xt(D),e)},yg=md,Sg=v(function(e,r){var n=r;return h$(a($i,yg(e),n))}),Cg=M(function(e,r,n){return a(Ic,function(t){return 0},wg(a(re,Sg(e),r)))}),Lg=M(function(e,r,n){return xt(0)}),zg=v(function(e,r){var n=r;return a(Ic,e,n)});Or.Task=vd(_g,Cg,Lg,zg);var Pg=_$("Task"),Ec=v(function(e,r){return Pg(a(Ic,e,r))}),Mg=Yd,Tg=ys,vi={$:1},tv=function(e){return{$:2,a:e}},Bc={$:0},Pr=v(function(e,r){return{$:0,a:e,b:r}}),Ke=M(function(e,r,n){return r(e(n))}),ea=function(e){var r=e.b.s;return r.a},kg=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return X(a(Pr,r,{s:o,an:c,X:a(P,t,n)}))}else return J},Ve=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Dg=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dH;return(_e(o+r.gp,ea(n).d1)>0?a(Ke,kg,Ve(a(Pr,vi,i))):Er)(a(Pr,tv({dH:o+r.gp}),i));default:var c=i.s,l=c.a,u=c.b,f=a(rv,l.gb,Re(r,{d1:l.d1+r.gp})),m=a(e,f,u);return a(Pr,Bc,{s:L(f,m),an:D,X:a(P,i.s,i.X)})}}),iv=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),Fg=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(P,t,n);e=o,r=c,n=l;continue e}else return n}}),Ag=v(function(e,r){return mr(h(Fg,e,r,D))}),ov=M(function(e,r,n){if(r<=0)return D;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,w=i.a,o=i.b,c=o.a;return $([w,c]);case 3:if(t.b.b.b.b){var l=t.b,w=l.a,u=l.b,c=u.a,f=u.b,m=f.a;return $([w,c,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,w=p.a,b=p.b,c=b.a,s=b.b,m=s.a,x=s.b,_=x.a,S=x.b;return e>1e3?a(P,w,a(P,c,a(P,m,a(P,_,a(Ag,r-4,S))))):a(P,w,a(P,c,a(P,m,a(P,_,h(ov,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,w=C.a;return $([w])}}),Ig=v(function(e,r){return h(ov,0,e,r)}),Eg=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Y(mr(n),Y($([t]),i)),c=a(Ig,e,o),l=a(iv,e,o);if(l.b){var u=l.a,f=l.b;return a(Pr,vi,{s:u,an:f,X:mr(c)})}else{var m=mr(c);if(m.b){var p=m.a,b=m.b;return a(Pr,vi,{s:p,an:D,X:b})}else return r}}),Bg=function(e){var r=e.b;return a(Pr,vi,r)},Vg=function(e){var r=e.b;return a(Pr,tv({dH:ea(e).d1}),r)},Rg=function(e){var r=e.b;return a(Pr,Bc,r)},Ug=v(function(e,r){switch(e.$){case 1:return Bg(r);case 2:return Rg(r);case 3:return Vg(r);default:var n=e.a;return a(Eg,n,r)}}),fi=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),jg=v(function(e,r){return Re(r,{aN:e(r.aN)})}),Ng=function(e){return{$:3,a:e}},Hg=function(e){return{$:2,a:e}},cv=v(function(e,r){return{$:0,a:e,b:r}}),Gg=v(function(e,r){return{$:1,a:e,b:r}}),Ne=v(function(e,r){if(r.$)return J;var n=r.a;return X(e(n))}),we=function(e){return e<0?-e:e},lv=Rs,Wg=M(function(e,r,n){return a(Ve,0/0,lv(a(e,r,n)))}),wt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),Og=Ps,uv=function(e){return h(Og,P,D,e)},qg=v(function(e,r){var n=a(wt,function(t){return t!=="0"&&t!=="."},uv(r));return Y(e&&n?"-":"",r)}),ve=d$,Ro=Ss,$v=Ns,vv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Da(n);if(t.$===1)return"01";var i=t.a;return a(Ro,"0",vv(i))}else{var o=qr(r);return o>=48&&o<57?a(Ro,$v(o+1),n):"0"}},Uo=gs,Jg=ws,ki=function(e){return a(Ro,e,"")},fv=M(function(e,r,n){return e<=0?n:h(fv,e>>1,Y(r,r),e&1?Y(n,r):n)}),it=v(function(e,r){return h(fv,e,r,"")}),jo=M(function(e,r,n){return Y(n,a(it,e-Un(n),ki(r)))}),No=zs,mv=function(e){var r=a(kc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Yg=function(e){var r=a(kc,"e",ve(we(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ve,0,nv(a(bg,"+",i)?a(bt,1,i):i)),c=mv(n),l=c.a,u=c.b,f=Y(l,u),m=o<0?a(Ve,"0",a(Ne,function(p){var b=p.a,s=p.b;return b+("."+s)},a(Ne,fi(ki),Da(Y(a(it,we(o),"0"),f))))):h(jo,o+1,"0",f);return Y(e<0?"-":"",m)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},Xg=M(function(e,r,n){if(Uo(n)||Jg(n))return ve(n);var t=n<0,i=mv(Yg(we(n))),o=i.a,c=i.b,l=Un(o)+r,u=Y(a(it,-l+1,"0"),h(jo,l,"0",Y(o,c))),f=Un(u),m=a(zr,1,l),p=a(e,t,h(ma,m,f,u)),b=h(ma,0,m,u),s=p?No(a(Ve,"1",a(Ne,vv,Da(No(b))))):b,x=Un(s),_=s==="0"?s:r<=0?Y(s,a(it,we(r),"0")):_e(r,Un(c))<0?h(ma,0,x-r,s)+("."+h(ma,x-r,x,s)):Y(o+".",h(jo,r,"0",c));return a(qg,t,_)}),sv=Xg(v(function(e,r){var n=Da(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(qr(i))})),Kg=Wg(sv),Zg=M(function(e,r,n){var t=a(Dc,10,we(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(Kg,i,n)}),dv=ls,Di=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(dv,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return X(t);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=Ye(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Yr={$:-2},Sa=Ye(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,p=t.d,b=t.e;return F(fe,0,r,n,F(fe,1,f,m,p,b),F(fe,1,o,c,l,u))}else return F(fe,e,o,c,F(fe,0,r,n,t,l),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var x=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return F(fe,0,f,m,F(fe,1,x,_,S,C),F(fe,1,r,n,b,i))}else return F(fe,e,r,n,t,i)}),Ho=M(function(e,r,n){if(n.$===-2)return F(fe,0,e,r,Yr,Yr);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=a(dv,e,i);switch(u){case 0:return F(Sa,t,i,o,h(Ho,e,r,c),l);case 1:return F(fe,t,i,r,c,l);default:return F(Sa,t,i,o,c,h(Ho,e,r,l))}}),ha=M(function(e,r,n){var t=h(Ho,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return F(fe,1,i,o,c,l)}else{var u=t;return u}}),Qg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},pv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var m=f.b,p=f.c,b=f.d;b.a;var s=b.b,x=b.c,_=b.d,S=b.e,C=f.e;return F(fe,0,s,x,F(fe,1,n,t,F(fe,0,o,c,l,u),_),F(fe,1,m,p,S,C))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,c=w.c,l=w.d,u=w.e,T=e.e;T.a;var m=T.b,p=T.c,b=T.d,C=T.e;return F(fe,1,n,t,F(fe,0,o,c,l,u),F(fe,0,m,p,b,C))}else return e},au=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,m=l.d,p=l.e,b=i.e,s=e.e;s.a;var x=s.b,_=s.c,S=s.d,C=s.e;return F(fe,0,o,c,F(fe,1,u,f,m,p),F(fe,1,n,t,b,F(fe,0,x,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,c=w.c,T=w.d,b=w.e,H=e.e;H.a;var x=H.b,_=H.c,S=H.d,C=H.e;return F(fe,1,n,t,F(fe,0,o,c,T,b),F(fe,0,x,_,S,C))}else return e},e0=Li(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,m=o.e;return F(fe,n,l,u,f,F(fe,0,t,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var p=c.d;return p.a,au(r)}else break e;else return c.a,c.d,au(r);else break e;return r}}),Kt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,F(fe,r,n,t,Kt(i),l);var u=pv(e);if(u.$===-1){var f=u.a,m=u.b,p=u.c,b=u.d,s=u.e;return F(Sa,f,m,p,Kt(b),s)}else return Yr}else return F(fe,r,n,t,Kt(i),l)}else return Yr},Ka=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(_e(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,F(fe,n,t,i,a(Ka,e,o),c);var u=pv(r);if(u.$===-1){var f=u.a,m=u.b,p=u.c,b=u.d,s=u.e;return F(Sa,f,m,p,a(Ka,e,b),s)}else return Yr}else return F(fe,n,t,i,a(Ka,e,o),c);else return a(r0,e,pc(e0,e,r,n,t,i,o,c))}),r0=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(he(e,t)){var l=Qg(c);if(l.$===-1){var u=l.b,f=l.c;return F(Sa,n,u,f,o,Kt(c))}else return Yr}else return F(Sa,n,t,i,o,a(Ka,e,c))}else return Yr}),n0=v(function(e,r){var n=a(Ka,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return F(fe,1,t,i,o,c)}else{var l=n;return l}}),Vt=M(function(e,r,n){var t=r(a(Di,e,n));if(t.$)return a(n0,e,n);var i=t.a;return h(ha,e,i,n)}),a0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Vt,r,Ne(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(Gg,L(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Vt,r,Ne(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(cv,L(o,c),h(Zg,o,c,n))}));case 3:var r=e.a,n=e.b;return a(Vt,r,Ne(function(t){return t.$===3?Ng(n):t}));default:var r=e.a,n=e.b;return a(Vt,r,Ne(function(t){return t.$===2?Hg(n):t}))}},t0=function(e){return jg(a0(e))},i0=v(function(e,r){return a(re,t0(e),r)}),o0=v(function(e,r){return Re(r,{gb:a(i0,e,r.gb)})}),c0=v(function(e,r){var n=r.a,t=r.b;return a(Pr,n,Re(t,{s:a(fi,o0(e),t.s)}))}),Go=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),l0=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Pr,t,Re(i,{s:a(Go,a(e,o.a,r),o)}))}),u0=ae(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Re(t,{bw:!t.bw});case 2:var i=n.a;return Re(t,{R:h(Dg,e,i,t.R)});case 3:var o=n.a;return Re(t,{bp:o});case 4:var c=n.a;return Re(t,{R:a(c0,c,t.R)});case 5:var l=n.a;return Re(t,{R:h(l0,r,l,t.R)});default:var u=n.a;return Re(t,{R:a(Ug,u,t.R)})}}),$0=v(function(e,r){return a(Pr,Bc,{s:L(e,r(e)),an:D,X:D})}),v0=sd,tu=v0(D),f0=function(e){return{$:2,a:e}},mi=Js,Ca=qs,m0=bd("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return lr({d1:c,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(p){return lr({fJ:p,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",ze))},a(K,"control",ze))},a(K,"down",ze))},a(K,"downs",mi(Ca)))},a(K,"left",ze))},a(K,"pressedKeys",mi(Ca)))},a(K,"right",ze))},a(K,"shift",ze))},a(K,"up",ze))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return lr({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",ze))},a(K,"isDown",ze))},a(K,"move",ze))},a(K,"rightDown",ze))},a(K,"rightUp",ze))},a(K,"up",ze))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return lr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return lr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We))))),s0=function(e){return e.dN,m0(f0)},d0=function(e){return{$:5,a:e}},p0={$:0},si=v(function(e,r){return e}),g0=function(e){var r=e.b.s;return r.b},h0=function(e){return{$:1,a:e}},b0=h0,gv=function(e){return{$:8,a:e}},ye=gv,ot=function(e){return{$:0,a:e}},yt=M(function(e,r,n){return e(r(n))}),_0=a(yt,ot,si),bn=_0,Ae=function(e){return{$:1,a:e}},Qr=Ae,hv=v(function(e,r){return{$:9,a:e,b:r}}),Yn={$:0},bv=v(function(e,r){return r.$===3?Yn:a(hv,e,r)}),Wo=function(e){return a(bv,4,e)},d={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},Vc=g$,kr=v(function(e,r){return a(wc,e,Vc(r))}),Lr=kr("className"),br=function(e){return Ae(Lr(e))},_v=v(function(e,r){return{$:2,a:e,b:r}}),x0=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},xr=2,w0={$:0},ra=w0,y0={$:0},S0=d.fK+(" "+d.aw),C0=d.fK+(" "+d.gC),L0=d.fK+(" "+d.eY),z0=d.fK+(" "+d.eZ),P0=d.fK+(" "+d.af),M0=d.fK+(" "+d.hL),T0=function(e){switch(e){case 0:return P0;case 1:return S0;case 2:return M0;case 3:return C0;case 4:return z0;default:return L0}},iu=function(e){return{$:1,a:e}},Rn={$:0},Oo=function(e){return{$:1,a:e}},ou=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),cu=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(re,function(o){return L(e,o)},t),r);case 2:var i=n.a;return Y(r,a(re,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return Y(a(re,function(o){return L(e,o)},t),Y(r,a(re,function(o){return L(e,o)},i)))}}),Rt=4,k0=function(e){return{$:0,a:e}},D0=function(e){return{$:1,a:e}},xe=function(e){return e>31?D0(1<<e-32):k0(1<<e)},xv=xe(41),wv=xe(40),yv=xe(42),Sv=xe(43),La=sn("div"),Rc=Yr,Cv=Rc,Gr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Gr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Gr(o))}},Ee=_s,Be=function(e){return k(Ee(e*255))},Uc=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("mv-"+(Be(n)+("-"+(Be(t)+("-"+Be(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d;return X("tfrm-"+(Be(c)+("-"+(Be(l)+("-"+(Be(u)+("-"+(Be(m)+("-"+(Be(p)+("-"+(Be(b)+("-"+(Be(x)+("-"+(Be(_)+("-"+(Be(S)+("-"+Be(C))))))))))))))))))))}},ct=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(le,"-",a(re,Gr,i.hB))+("-cols-"+(a(le,"-",a(re,Gr,i.ak))+("-space-x-"+(Gr(i.hP.a)+("-space-y-"+Gr(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(le," ",a(re,function(m){var p=ct(m);if(p==="")return"";var b=p;return b+("-"+u)},l));default:var f=e.a;return a(Ve,"",Uc(f))}},F0=v(function(e,r){var n=r;return h(ha,e,0,n)}),A0=v(function(e,r){var n=a(Di,e,r);return!n.$}),I0=v(function(e,r){var n=r;return a(A0,e,n)}),Lv=v(function(e,r){var n=r.a,t=r.b,i=ct(e);return a(I0,i,n)?r:L(a(F0,i,n),a(P,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),Za=v(function(e,r){return{$:0,a:e,b:r}}),y=function(e){return"."+e},E0=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(P,i,n)}),xn=v(function(e,r){return h(er,E0(e),D,r)}),sa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ee(r*255))+(","+k(Ee(n*255))+(","+k(Ee(t*255))+(","+(ve(i)+")")))))},qo=function(e){return a(le," ",a(xn,Er,$([e.ej?X("inset"):J,X(ve(e.eV.a)+"px"),X(ve(e.eV.b)+"px"),X(ve(e.a2)+"px"),X(ve(e.bi)+"px"),X(sa(e.b6))])))},zv=function(e){return $([a(Za,y(d.ea)+":focus-within",a(xn,Er,$([a(Ne,function(r){return a(ue,"border-color",sa(r))},e.fW),a(Ne,function(r){return a(ue,"background-color",sa(r))},e.fO),a(Ne,function(r){return a(ue,"box-shadow",qo({a2:r.a2,b6:r.b6,ej:!1,eV:a(Go,Ga,a(fi,Ga,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))]))),a(Za,y(d.fK)+":focus .focusable, "+(y(d.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(y(d.fK)+" .focusable-thumb"))),a(xn,Er,$([a(Ne,function(r){return a(ue,"border-color",sa(r))},e.fW),a(Ne,function(r){return a(ue,"background-color",sa(r))},e.fO),a(Ne,function(r){return a(ue,"box-shadow",qo({a2:r.a2,b6:r.b6,ej:!1,eV:a(Go,Ga,a(fi,Ga,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))])))])},Nr=function(e){return sn(y$(e))},Pv=v(function(e,r){return a(wc,Md(e),S$(r))}),co=v(function(e,r){return{$:2,a:e,b:r}}),jc=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),B0=v(function(e,r){return{$:3,a:e,b:r}}),Mv=$([0,1,2,3,4,5]),V0=v(function(e,r){return r.b?h(er,P,r,e):e}),sr=function(e){return h(er,V0,D,e)},Fa=v(function(e,r){return sr(a(re,e,r))}),R0=function(e){switch(e){case 0:return y(d.gc);case 1:return y(d.b9);case 2:return y(d.cb);case 3:return y(d.bt);case 4:return y(d.ca);default:return y(d.ax)}},di=function(e){switch(e){case 0:return y(d.fH);case 1:return y(d.fA);case 2:return y(d.dY);case 3:return y(d.dX);case 4:return y(d.fB);default:return y(d.fC)}},Wa=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,R0(n),i),a(O,y(d.fK),$([a(A,di(n),o)]))])};return jc(a(Fa,r,Mv))},lu=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,y(d.cZ),$([a(g,"z-index","0"),a(O,y(d.fQ),$([a(g,"z-index","-1")]))])),a(A,y(d.hG),$([a(O,y(d.Y),$([a(A,y(d.c$),$([a(g,"flex-grow","0")])),a(A,y(d.dP),$([a(g,"align-self","auto !important")]))]))])),a(O,y(d.c_),$([a(g,"height","auto")])),a(O,y(d.c$),$([a(g,"flex-grow","100000")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(O,y(d.fv),$([a(g,"width","100%")])),a(O,y(d.dO),$([a(g,"align-self","flex-start")])),Wa(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(O,y(d.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),U0=function(e){var r=function(n){return $([a(O,y(d.fK),$([a(A,di(n),e(n))]))])};return jc(a(Fa,r,Mv))},j0=function(){return $([0,1,2,3,4,5])}(),N0=$([a(pr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(pr,Y(y(d.fK),Y(y(d.hL),y(d.gN))),$([a(g,"display","block"),a(A,y(d.c$),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,y(d.dP),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(pr,y(d.fK)+":focus",$([a(g,"outline","none")])),a(pr,y(d.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,Y(y(d.fK),y(d.c$)),$([a(g,"height","100%"),a(O,y(d.c$),$([a(g,"height","100%")]))])),a(O,y(d.gP),$([a(A,y(d.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(pr,y(d.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,y(d.hL),lu),jc(function(e){return a(re,e,j0)}(function(e){switch(e){case 0:return a(A,y(d.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,y(d.c$),$([a(g,"height","auto")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,y(d.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,y(d.c$),$([a(g,"height","auto")]))]));case 2:return a(A,y(d.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,y(d.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,y(d.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,y(d.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(pr,y(d.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,y(d.dQ),$([a(g,"flex-wrap","wrap")])),a(A,y(d.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,y(d.gf),$([a(g,"cursor","pointer")])),a(A,y(d.gg),$([a(g,"cursor","text")])),a(A,y(d.hn),$([a(g,"pointer-events","none !important")])),a(A,y(d.b4),$([a(g,"pointer-events","auto !important")])),a(A,y(d.a$),$([a(g,"opacity","0")])),a(A,y(d.aU),$([a(g,"opacity","1")])),a(A,y(Y(d.gK,d.a$))+":hover",$([a(g,"opacity","0")])),a(A,y(Y(d.gK,d.aU))+":hover",$([a(g,"opacity","1")])),a(A,y(Y(d.gx,d.a$))+":focus",$([a(g,"opacity","0")])),a(A,y(Y(d.gx,d.aU))+":focus",$([a(g,"opacity","1")])),a(A,y(Y(d.cL,d.a$))+":active",$([a(g,"opacity","0")])),a(A,y(Y(d.cL,d.aU))+":active",$([a(g,"opacity","1")])),a(A,y(d.fj),$([a(g,"transition",a(le,", ",a(re,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,y(d.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,y(d.hE),$([a(g,"overflow-x","auto"),a(A,y(d.af),$([a(g,"flex-shrink","1")]))])),a(A,y(d.hF),$([a(g,"overflow-y","auto"),a(A,y(d.aw),$([a(g,"flex-shrink","1")])),a(A,y(d.hL),$([a(g,"flex-shrink","1")]))])),a(A,y(d.f7),$([a(g,"overflow","hidden")])),a(A,y(d.f8),$([a(g,"overflow-x","hidden")])),a(A,y(d.f9),$([a(g,"overflow-y","hidden")])),a(A,y(d.dO),$([a(g,"width","auto")])),a(A,y(d.b1),$([a(g,"border-width","0")])),a(A,y(d.fX),$([a(g,"border-style","dashed")])),a(A,y(d.fY),$([a(g,"border-style","dotted")])),a(A,y(d.fZ),$([a(g,"border-style","solid")])),a(A,y(d.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,y(d.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,y(d.hL),lu),a(A,y(d.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,y(d.fK),$([a(g,"flex-basis","0%"),a(A,y(d.fu),$([a(g,"flex-basis","auto")])),a(A,y(d.et),$([a(g,"flex-basis","auto")]))])),a(O,y(d.c$),$([a(g,"align-self","stretch !important")])),a(O,y(d.ef),$([a(g,"align-self","stretch !important")])),a(O,y(d.dP),$([a(g,"flex-grow","100000")])),a(O,y(d.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+d.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fG+(" ~ s."+d.fE)),$([a(g,"flex-grow","0")])),Wa(function(e){switch(e){case 0:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return L($([a(g,"justify-content","flex-end")]),D);case 3:return L($([a(g,"justify-content","flex-start")]),D);case 4:return L($([a(g,"justify-content","center")]),D);default:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,y(d.hO),$([a(g,"justify-content","space-between")])),a(A,y(d.ci),$([a(g,"align-items","baseline")]))])),a(A,y(d.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,y(d.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,y(d.ee),$([a(g,"flex-basis","auto")]))])),a(O,y(d.c$),$([a(g,"flex-grow","100000")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(O,y(d.fv),$([a(g,"width","100%")])),a(O,y(d.dO),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+d.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fD+(" ~ s."+d.fF)),$([a(g,"flex-grow","0")])),Wa(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(g,"justify-content","center")]),D)}}),a(O,y(d.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,y(d.hO),$([a(g,"justify-content","space-between")]))])),a(A,y(d.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,y(d.fK),$([a(g,"width","100%")]))])),a(B0,L("display","grid"),$([L("display","grid")])),U0(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,y(d.eY),$([a(g,"display","block"),a(O,y(d.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,y(d.fK+(di(3)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),a(O,y(d.fK+(di(2)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),Wa(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return L(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,y(d.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,y(d.gW),$([a(A,y(d.hL),$([a(g,"flex-basis","auto")]))])),a(A,y(d.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,y(d.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,y(d.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,y(d.cZ),$([a(g,"z-index","0"),a(O,y(d.fQ),$([a(g,"z-index","-1")]))])),a(co,y(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(co,y(d.eZ),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(co,y(d.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,y(d.fu),$([a(g,"display","inline-block")])),a(A,y(d.gP),$([a(g,"display","flex")])),a(A,y(d.fQ),$([a(g,"display","flex")])),a(A,y(d.fy),$([a(g,"display","flex")])),a(A,y(d.fR),$([a(g,"display","flex")])),a(A,y(d.hh),$([a(g,"display","flex")])),a(A,y(d.hg),$([a(g,"display","flex")])),a(O,y(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,y(d.af),$([a(g,"display","inline")])),a(O,y(d.aw),$([a(g,"display","inline-flex")])),a(O,y(d.gC),$([a(g,"display","inline-grid")])),Wa(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right")]));case 3:return L(D,$([a(g,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,y(d.ia),$([a(g,"font-weight","100")])),a(A,y(d.h1),$([a(g,"font-weight","200")])),a(A,y(d.h5),$([a(g,"font-weight","300")])),a(A,y(d.h7),$([a(g,"font-weight","400")])),a(A,y(d.h6),$([a(g,"font-weight","500")])),a(A,y(d.h9),$([a(g,"font-weight","600")])),a(A,y(d.fV),$([a(g,"font-weight","700")])),a(A,y(d.h0),$([a(g,"font-weight","800")])),a(A,y(d.h2),$([a(g,"font-weight","900")])),a(A,y(d.g2),$([a(g,"font-style","italic")])),a(A,y(d.hU),$([a(g,"text-decoration","line-through")])),a(A,y(d.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,Y(y(d.ih),y(d.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,y(d.ib),$([a(g,"font-style","normal")])),a(A,y(d.h3),$([a(g,"text-align","justify")])),a(A,y(d.cF),$([a(g,"text-align","justify-all")])),a(A,y(d.h$),$([a(g,"text-align","center")])),a(A,y(d.h8),$([a(g,"text-align","right")])),a(A,y(d.h4),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),dn=function(e){return $([a(pr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(pr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},H0=sr($([a(re,function(e){return a(pr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(tn,0,6)),a(re,function(e){return a(pr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(tn,8,32)),a(re,function(e){return a(pr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(tn,0,24)),$([a(pr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(pr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),dn("zero"),dn("onum"),dn("liga"),dn("dlig"),dn("ordn"),dn("tnum"),dn("afrc"),dn("frac")])),G0=`
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

`))),W0=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,O0=`
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
`,q0=`
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
`,J0=`
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
`,Y0="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(y(d.fK)+(y(d.af)+(" > "+(y(d.fK)+(" { flex-basis: auto !important; } "+(y(d.fK)+(y(d.af)+(" > "+(y(d.fK)+(y(d.b8)+(" { flex-basis: auto !important; }}"+(W0+(O0+(J0+(q0+G0))))))))))))))),ba=function(e){return a(le,"",e)},ua=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),$a=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Re(o,{aE:a(P,L(c,l),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,p=i.b;return Re(o,{G:a(P,{b5:`
}`,G:D,aE:p,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Re(o,{G:a(P,a($a,a(ua,n.ag+(" + "+b),""),s),o.G)});case 1:var x=i.a,_=i.b;return Re(o,{G:a(P,a($a,a(ua,n.ag+(" > "+x),""),_),o.G)});case 2:var x=i.a,_=i.b;return Re(o,{G:a(P,a($a,a(ua,n.ag+(" "+x),""),_),o.G)});case 4:var S=i.a,C=i.b;return Re(o,{G:a(P,a($a,a(ua,Y(n.ag,S),""),C),o.G)});default:var w=i.a;return Re(o,{G:a(P,a($a,a(ua,n.ag,""),w),o.G)})}});return h(er,t,n,r)}),X0=function(e){var r=function(i){return ba(a(re,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return Y(n(o),ba(a(re,t,o.G)))};return ba(a(re,t,h(er,v(function(i,o){var c=i.a,l=i.b;return a(P,a($a,a(ua,c,""),l),o)}),D,e)))},uu=Y(Y0,X0(Y(N0,H0))),wn=Fo,Tv=function(e){var r=e.eS;switch(r){case 0:return h(Nr,"div",D,$([h(Nr,"style",D,$([wn(uu)]))]));case 1:return wn("");default:return h(Nr,"elm-ui-static-rules",$([a(Pv,"rules",Vc(uu))]),D)}},K0=v(function(e,r){return h(Ue,td(e),rd(),r)}),Z0=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(ad,t,i,n)}),nd(),e)},Q0=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},eh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},rh=function(e){if(e.$===5){var r=e.a;return a(wt,eh,r.fo)}else return!1},_a=v(function(e,r){return _e(e,r)<0?e:r}),Ra=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Fe=ae(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(Ue,Ra(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Ue,Ra(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Ue,Ra(!1),"",t)+`
}`))])}case 0:var c=h(Ue,Ra(!1),"",t);return $([n+("-fs:focus {"+(c+`
}`)),"."+(d.fK+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(y(d.fK)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(Ue,Ra(!1),"",t)+`
}`))])}}),nh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},ah=function(e){if(e.$===5){var r=e.a;return X(a(le,", ",a(re,nh,r.fo)))}else return J},th=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d,w="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(p)+(", "+(ve(b)+")"))))),H="rotate3d("+(ve(x)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return X(w+(" "+(T+(" "+H))))}},Nc=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return z(Fe,e,n,t,i);case 13:var u=r.a,b=r.b;return z(Fe,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=a(zr,0,a(_a,1,1-o));return z(Fe,e,n,"."+u,$([a(ue,"opacity",ve(c))]));case 2:var l=r.a;return z(Fe,e,n,".font-size-"+k(l),$([a(ue,"font-size",k(l)+"px")]));case 1:var u=r.a,f=r.b,m=a(le,", ",a(xn,ah,f)),p=$([a(ue,"font-family",a(le,", ",a(re,Q0,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(wt,rh,f)?"small-caps":"normal")]);return z(Fe,e,n,"."+u,p);case 3:var se=r.a,b=r.b,Qi=r.c;return z(Fe,e,n,"."+se,$([a(ue,b,Qi)]));case 4:var se=r.a,b=r.b,s=r.c;return z(Fe,e,n,"."+se,$([a(ue,b,sa(s))]));case 5:var q=r.a,x=r.b,_=r.c,S=k(_)+"px",C=k(x)+"px",w="."+d.af,T="."+(d.dQ+w),pe="."+d.dY,H="."+d.eZ,Z="."+d.eY,Se="."+d.dX,ne=ve(_/2)+"px",te=ve(x/2)+"px",ie="."+d.aw,se="."+q,ee="."+d.fK;return sr($([z(Fe,e,n,se+(w+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-left",C)])),z(Fe,e,n,se+(T+(" > "+ee)),$([a(ue,"margin",ne+(" "+te))])),z(Fe,e,n,se+(ie+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-top",S)])),z(Fe,e,n,se+(Z+(" > "+(ee+(" + "+ee)))),$([a(ue,"margin-top",S)])),z(Fe,e,n,se+(Z+(" > "+Se)),$([a(ue,"margin-right",C)])),z(Fe,e,n,se+(Z+(" > "+pe)),$([a(ue,"margin-left",C)])),z(Fe,e,n,Y(se,H),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),z(Fe,e,n,"textarea"+(ee+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),z(Fe,e,n,se+(H+(" > "+Se)),$([a(ue,"margin-right",C)])),z(Fe,e,n,se+(H+(" > "+pe)),$([a(ue,"margin-left",C)])),z(Fe,e,n,se+(H+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),z(Fe,e,n,se+(H+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return z(Fe,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return z(Fe,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Xe,Va,Xr){e:for(;;)switch(Xr.$){case 0:var Zm=Xr.a;return k(Zm)+"px";case 1:var Dr=L(Xe,Va);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var In=Dr.b.a;return"minmax(max-content, "+(k(In)+"px)")}else if(Dr.b.$===1){var En=Dr.a.a;return Dr.b,"minmax("+(k(En)+"px, max-content)")}else{var En=Dr.a.a,In=Dr.b.a;return"minmax("+(k(En)+("px, "+(k(In)+"px)")))}case 2:var El=Xr.a,Fr=L(Xe,Va);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(El)+"fr";Fr.a;var In=Fr.b.a;return"minmax(max-content, "+(k(In)+"px)")}else if(Fr.b.$===1){var En=Fr.a.a;return Fr.b,"minmax("+(k(En)+("px, "+(k(El)+"frfr)")))}else{var En=Fr.a.a,In=Fr.b.a;return"minmax("+(k(En)+("px, "+(k(In)+"px)")))}case 3:var eo=Xr.a,ro=Xr.b,no=X(eo),ao=Va,to=ro;Xe=no,Va=ao,Xr=to;continue e;default:var eo=Xr.a,ro=Xr.b,no=Xe,ao=X(eo),to=ro;Xe=no,Va=ao,Xr=to;continue e}}),I=function(Xe){return h(Te,J,J,Xe)};I(me.hP.a);var E=I(me.hP.b),B=function(Xe){return"grid-template-rows: "+(Xe+";")}(a(le," ",a(re,I,me.hB))),V=function(Xe){return"-ms-grid-rows: "+(Xe+";")}(a(le,E,a(re,I,me.ak))),R=function(Xe){return"-ms-grid-columns: "+(Xe+";")}(a(le,E,a(re,I,me.ak))),U="grid-row-gap:"+(I(me.hP.b)+";"),j="grid-column-gap:"+(I(me.hP.a)+";"),N=function(Xe){return"grid-template-columns: "+(Xe+";")}(a(le," ",a(re,I,me.ak))),se=".grid-rows-"+(a(le,"-",a(re,Gr,me.hB))+("-cols-"+(a(le,"-",a(re,Gr,me.ak))+("-space-x-"+(Gr(me.hP.a)+("-space-y-"+Gr(me.hP.b))))))),Xi=se+("{"+(N+(B+(j+(U+"}"))))),Ki="@supports (display:grid) {"+(Xi+"}"),Zi=se+("{"+(R+(V+"}")));return $([Zi,Ki]);case 9:var je=r.a,At=a(le," ",$(["-ms-grid-row: "+(k(je.af)+";"),"-ms-grid-row-span: "+(k(je.gH)+";"),"-ms-grid-column: "+(k(je.ga)+";"),"-ms-grid-column-span: "+(k(je.im)+";")])),Yi=a(le," ",$(["grid-row: "+(k(je.af)+(" / "+(k(je.af+je.gH)+";"))),"grid-column: "+(k(je.ga)+(" / "+(k(je.ga+je.im)+";")))])),se=".grid-pos-"+(k(je.af)+("-"+(k(je.ga)+("-"+(k(je.im)+("-"+k(je.gH))))))),Xi=se+("{"+(Yi+"}")),Ki="@supports (display:grid) {"+(Xi+"}"),Zi=se+("{"+(At+"}"));return $([Zi,Ki]);case 11:var se=r.a,Ym=r.b,Xm=function(Xe){return h(Nc,e,Xe,X(se))};return a(Fa,Xm,Ym);default:var Il=r.a,Qi=th(Il),se=Uc(Il),It=L(se,Qi);if(!It.a.$&&!It.b.$){var q=It.a.a,Km=It.b.a;return z(Fe,e,n,"."+q,$([a(ue,"transform",Km)]))}else return D}}),ih=v(function(e,r){return Z0(a(re,function(n){var t=h(Nc,e,n,J);return L(ct(n),a(K0,Vc,t))},r))}),pi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(le,"",a(re,n,r))+"}"))}),$u=M(function(e,r,n){var t=n.a,i=n.b;return $([a(pi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(pi,"."+(e+("."+(r+("> ."+(d.Y+(", ."+(e+(" ."+(r+(" > ."+d.Y)))))))))),i)])}),oh=M(function(e,r,n){var t=r.a,i=r.b,o=he(e,n)?e:n+(" ."+e);return a(le," ",Y(h($u,o,d.hM,i),h($u,o,d.gy,t)))}),ch=v(function(e,r){var n=he(e,r)?e:r+(" ."+e);return a(le," ",$([a(pi,"."+(n+("."+(d.hM+(", "+("."+(n+(" ."+d.hM))))))),$([L("line-height","1")])),a(pi,"."+(n+("."+(d.hM+("> ."+(d.Y+(", ."+(n+(" ."+(d.hM+(" > ."+d.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),vu=M(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),kv=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(P,n,t):t}),D,r)}),lh=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Ue,zr,r,n))}else return J},fu=function(e){if(e.b){var r=e.a,n=e.b;return X(h(Ue,_a,r,n))}else return J},mu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Ve,e.gk,fu(r)),t=a(Ve,e.fP,fu(a(kv,function(f){return!he(f,n)},r))),i=a(Ve,e.f1,lh(r)),o=1/(i-t),c=1-i,l=1/(i-n),u=1-i;return{f1:h(vu,o,i-t,c),ec:h(vu,l,i-n,u)}},su=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ve(e.gH)),L("vertical-align",ve(e.fp)+"em"),L("font-size",ve(e.bi)+"em")]))},uh=function(e){return h(Ue,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return X(L(su(function(c){return c.ec}(mu(o))),su(function(c){return c.f1}(mu(o)))))}else return n;else return n}),J,e)},$h=function(e){var r=function(o){if(o.$===4){var c=o.b;return X("@import url('"+(c+"');"))}else return J},n=function(o){o.a;var c=o.b,l=a(le,`
`,a(xn,r,c));return l},t=a(re,Q$,e),i=function(o){var c=o.a,l=o.b,u=uh(l);if(u.$===1)return a(le,"",a(re,ch(c),t));var f=u.a;return a(le,"",a(re,a(oh,c,f),t))};return Y(a(le,`
`,a(re,n,e)),a(le,`
`,a(re,i,e)))},vh=function(e){if(e.$===1){var r=e.a,n=e.b;return X(L(r,n))}else return J},du=v(function(e,r){var n=v(function(c,l){return{cB:Y(l.cB,h(Nc,e,c,J)),bT:function(){var u=vh(c);if(u.$===1)return l.bT;var f=u.a;return a(P,f,l.bT)}()}}),t=h(Ue,n,{cB:D,bT:D},r),i=t.bT,o=t.cB;return Y($h(i),ba(o))}),Dv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Nr,"div",D,$([h(Nr,"style",D,$([wn(a(du,e,r))]))]));case 1:return h(Nr,"div",D,$([h(Nr,"style",D,$([wn(a(du,e,r))]))]));default:return h(Nr,"elm-ui-rules",$([a(Pv,"rules",a(ih,e,r))]),D)}}),pu=ae(function(e,r,n,t){var i=a(Dv,r,h(Ue,Lv,L(Cv,zv(r.gx)),n).b);return e?a(P,L("static-stylesheet",Tv(r)),a(P,L("dynamic-stylesheet",i),t)):a(P,L("dynamic-stylesheet",i),t)}),gu=ae(function(e,r,n,t){var i=a(Dv,r,h(Ue,Lv,L(Cv,zv(r.gx)),n).b);return e?a(P,Tv(r),a(P,i,t)):a(P,i,t)}),Jo=xe(45),lt=xe(37),Fv=function(e){return yd(y$(e))},fh=sn("p"),or=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return he(o&t,o)}else{var i=e.a;return he(i&n,i)}}),hu=sn("s"),bu=sn("u"),Yo=xe(44),ut=xe(39),Ut=wr(function(e,r,n,t,i,o){var c=v(function(u,f){if(t.$===1){var m=t.a;return h(Fv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return z(pu,!1,b,s,m);default:var b=i.a,s=i.b;return z(pu,!0,b,s,m)}}())}else{var p=t.a;return a(function(){switch(u){case"div":return La;case"p":return fh;default:return Nr(u)}}(),f,function(){switch(i.$){case 0:return p;case 2:var b=i.a,s=i.b;return z(gu,!1,b,s,p);default:var b=i.a,s=i.b;return z(gu,!0,b,s,p)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var u=r.a;return a(c,u,n);default:var u=r.a,f=r.b;return h(Nr,u,n,$([a(c,f,$([Lr(d.fK+(" "+d.hL))]))]))}}();switch(o){case 0:return a(or,ut,e)&&!a(or,Yo,e)?l:a(or,wv,e)?a(bu,$([Lr(a(le," ",$([d.fK,d.hL,d.b8,d.ax,d.fG])))]),$([l])):a(or,yv,e)?a(hu,$([Lr(a(le," ",$([d.fK,d.hL,d.b8,d.ax,d.fE])))]),$([l])):l;case 1:return a(or,lt,e)&&!a(or,Jo,e)?l:a(or,Sv,e)?a(hu,$([Lr(a(le," ",$([d.fK,d.hL,d.b8,d.fF])))]),$([l])):a(or,xv,e)?a(bu,$([Lr(a(le," ",$([d.fK,d.hL,d.b8,d.fD])))]),$([l])):l;default:return l}}),gn=function(e){return!e.b},Hc=wn,mh=d.fK+(" "+(d.Y+(" "+(d.dO+(" "+d.c_))))),$t=function(e){return a(La,$([Lr(mh)]),$([Hc(e)]))},sh=d.fK+(" "+(d.Y+(" "+(d.dP+(" "+d.c$))))),_u=function(e){return a(La,$([Lr(sh)]),$([Hc(e)]))},dh=M(function(e,r,n){var t=v(function(x,_){var S=x.a,C=x.b,w=_.a,T=_.b;switch(C.$){case 0:var H=C.a;return he(e,Rt),L(a(P,L(S,H(e)),w),T);case 1:var Z=C.a;return he(e,Rt),L(a(P,L(S,a(Z.gL,Rn,e)),w),gn(T)?Z.hV:Y(Z.hV,T));case 2:var ne=C.a;return L(a(P,L(S,he(e,xr)?_u(ne):$t(ne)),w),T);default:return L(w,T)}}),i=v(function(x,_){var S=_.a,C=_.b;switch(x.$){case 0:var w=x.a;return he(e,Rt),L(a(P,w(e),S),C);case 1:var T=x.a;return he(e,Rt),L(a(P,a(T.gL,Rn,e),S),gn(C)?T.hV:Y(T.hV,C));case 2:var H=x.a;return L(a(P,he(e,xr)?_u(H):$t(H),S),C);default:return L(S,C)}});if(r.$===1){var o=r.a,c=h(er,t,L(D,D),o),l=c.a,u=c.b,f=gn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Oo({gL:z(Ut,n.aR,n.aT,n.aJ,iu(h(cu,"nearby-element-pls",l,n.aM))),hV:m})}else return ot(F(Ut,n.aR,n.aT,n.aJ,iu(h(cu,"nearby-element-pls",l,n.aM)),Rn))}else{var p=r.a,b=h(er,i,L(D,D),p),s=b.a,u=b.b,f=gn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Oo({gL:z(Ut,n.aR,n.aT,n.aJ,rr(a(ou,s,n.aM))),hV:m})}else return ot(F(Ut,n.aR,n.aT,n.aJ,rr(a(ou,s,n.aM)),Rn))}}),$r=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),ph=function(e){return{$:10,a:e}},gi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(gi,n,o|t)}else{var i=e.a;return a(gi,i|n,t)}}),xu=function(e){return{$:1,a:e}},jt=v(function(e,r){return{$:3,a:e,b:r}}),wu=function(e){return{$:2,a:e}},gh=v(function(e,r){return a(La,$([Lr(function(){switch(e){case 0:return a(le," ",$([d.be,d.hL,d.fy]));case 1:return a(le," ",$([d.be,d.hL,d.fR]));case 2:return a(le," ",$([d.be,d.hL,d.hh]));case 3:return a(le," ",$([d.be,d.hL,d.hg]));case 4:return a(le," ",$([d.be,d.hL,d.gP]));default:return a(le," ",$([d.be,d.hL,d.fQ]))}}())]),$([function(){switch(r.$){case 3:return wn("");case 2:var n=r.a;return $t(n);case 0:var t=r.a;return t(xr);default:var i=r.a;return a(i.gL,Rn,xr)}}()]))}),hh=M(function(e,r,n){var t=a(gh,e,r);switch(n.$){case 0:return e===5?xu($([t])):wu($([t]));case 1:var i=n.a;return e===5?xu(a(P,t,i)):a(jt,i,$([t]));case 2:var o=n.a;return e===5?a(jt,$([t]),o):wu(a(P,t,o));default:var i=n.a,o=n.b;return e===5?a(jt,a(P,t,i),o):a(jt,i,a(P,t,o))}}),yu=v(function(e,r){return{$:2,a:e,b:r}}),hn=function(e){return{$:1,a:e}},Bn=v(function(e,r){switch(r.$){case 0:return hn(e);case 1:var n=r.a;return a(yu,n,e);default:var t=r.a,i=r.b;return a(yu,t,i)}}),bh=function(e){switch(e){case 0:return d.cM+(" "+d.dX);case 2:return d.cM+(" "+d.dY);default:return d.cM+(" "+d.fB)}},_h=function(e){switch(e){case 0:return d.cN+(" "+d.fH);case 2:return d.cN+(" "+d.fA);default:return d.cN+(" "+d.fC)}},Oa=v(function(e,r){return a(Br,Pd(e),S$(r))}),Rr=ae(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),pn=function(e){return{$:1,a:e}},xh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return pn(G(u,0,0));case 1:var f=r.a;return pn(G(0,f,0));case 2:var m=r.a;return pn(G(0,0,m));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return z(Rr,G(0,0,0),G(1,1,1),n,s);default:var n=r.a;return z(Rr,G(0,0,0),n,G(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,m=l.c;switch(r.$){case 0:var t=r.a;return pn(G(t,f,m));case 1:var i=r.a;return pn(G(u,i,m));case 2:var o=r.a;return pn(G(u,f,o));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return z(Rr,l,G(1,1,1),n,s);default:var c=r.a;return z(Rr,l,c,G(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,m=l.c,p=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return z(Rr,G(t,f,m),p,b,s);case 1:var i=r.a;return z(Rr,G(u,i,m),p,b,s);case 2:var o=r.a;return z(Rr,G(u,f,o),p,b,s);case 3:var x=r.a;return z(Rr,x,p,b,s);case 4:var _=r.a,S=r.b;return z(Rr,l,p,_,S);default:var C=r.a;return z(Rr,l,C,b,s)}}}),ia=xe(7),Av=xe(36),Su=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(gi,n|i,t|o)}),en=a(gi,0,0),Xo=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return G(en,d.ee+(" "+t),$([h($r,t,"height",n+"px")]));case 1:return G(a(ge,Av,en),d.c_,D);case 2:var i=e.a;return i===1?G(a(ge,lt,en),d.c$,D):G(a(ge,lt,en),d.ef+(" height-fill-"+k(i)),$([h($r,d.fK+("."+(d.aw+(" > "+y("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h($r,f,"min-height",k(o)+"px !important"),c=Xo(u),b=c.a,s=c.b,x=c.c;return G(a(ge,Jo,b),f+(" "+s),a(P,m,x));default:var l=e.a,u=e.b,f="max-height-"+k(l),m=h($r,f,"max-height",k(l)+"px"),p=Xo(u),b=p.a,s=p.b,x=p.c;return G(a(ge,Jo,b),f+(" "+s),a(P,m,x))}},Iv=xe(38),Ko=function(e){switch(e.$){case 0:var r=e.a;return G(en,d.fu+(" width-px-"+k(r)),$([h($r,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return G(a(ge,Iv,en),d.dO,D);case 2:var n=e.a;return n===1?G(a(ge,ut,en),d.dP,D):G(a(ge,ut,en),d.fv+(" width-fill-"+k(n)),$([h($r,d.fK+("."+(d.af+(" > "+y("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,c=e.b,l="min-width-"+k(t),u=h($r,l,"min-width",k(t)+"px"),i=Ko(c),m=i.a,p=i.b,b=i.c;return G(a(ge,Yo,m),l+(" "+p),a(P,u,b));default:var o=e.a,c=e.b,l="max-width-"+k(o),u=h($r,l,"max-width",k(o)+"px"),f=Ko(c),m=f.a,p=f.b,b=f.c;return G(a(ge,Yo,m),l+(" "+p),a(P,u,b))}},Fi=xe(27),wh=v(function(e,r){if(he(e,Fi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return he(i,c)&&he(i,o)&&he(i,l)&&i>=0&&i<=24;default:return!1}}),oa=xe(6),Cu=xe(30),Lu=xe(29),yh=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var m=l.a,p=l.b;switch(m.$){case 0:var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 3:var _=m.a,b=m.b;if(a(or,_,n)){var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else{var I=b+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}case 1:var s=m.a,I=e,E=r,B=n,V=t,R=i,U=a(P,s,o),j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 4:var _=m.a,x=m.b;if(a(or,_,n)){var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else if(a(wh,_,x)){var I=ct(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else{var I=ct(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=a(P,x,i),U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}case 10:var _=m.a,S=m.b,I=e,E=r,B=a(ge,_,n),V=a(xh,t,S),R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 7:var C=m.a;if(a(or,oa,n)){var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else switch(C.$){case 0:var w=C.a,I=d.fu+(" width-px-"+k(w))+(" "+e),E=r,B=a(ge,oa,n),V=t,R=a(P,h($r,"width-px-"+k(w),"width",k(w)+"px"),i),U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 1:var I=e+(" "+d.dO),E=r,B=a(ge,Iv,a(ge,oa,n)),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 2:var T=C.a;if(T===1){var I=e+(" "+d.dP),E=r,B=a(ge,ut,a(ge,oa,n)),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else{var I=e+(" "+(d.fv+(" width-fill-"+k(T)))),E=r,B=a(ge,ut,a(ge,oa,n)),V=t,R=a(P,h($r,d.fK+("."+(d.af+(" > "+y("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}default:var H=Ko(C),Z=H.a,ne=H.b,Te=H.c,I=e+(" "+ne),E=r,B=a(Su,Z,a(ge,oa,n)),V=t,R=Y(Te,i),U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}case 8:var te=m.a;if(a(or,ia,n)){var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else switch(te.$){case 0:var w=te.a,ie=k(w)+"px",ee="height-px-"+ie,I=d.ee+(" "+(ee+(" "+e))),E=r,B=a(ge,ia,n),V=t,R=a(P,h($r,ee,"height ",ie),i),U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 1:var I=d.c_+(" "+e),E=r,B=a(ge,Av,a(ge,ia,n)),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 2:var T=te.a;if(T===1){var I=d.c$+(" "+e),E=r,B=a(ge,lt,a(ge,ia,n)),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else{var I=e+(" "+(d.ef+(" height-fill-"+k(T)))),E=r,B=a(ge,lt,a(ge,ia,n)),V=t,R=a(P,h($r,d.fK+("."+(d.aw+(" > "+y("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}default:var q=Xo(te),Z=q.a,ne=q.b,Te=q.c,I=e+(" "+ne),E=r,B=a(Su,Z,a(ge,ia,n)),V=t,R=Y(Te,i),U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}case 2:var de=m.a;switch(de.$){case 0:var I=e,E=a(Bn,"main",r),B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 1:var I=e,E=a(Bn,"nav",r),B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 2:var I=e,E=a(Bn,"footer",r),B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 3:var I=e,E=a(Bn,"aside",r),B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 4:var pe=de.a;if(pe<=1){var I=e,E=a(Bn,"h1",r),B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else if(pe<7){var I=e,E=a(Bn,"h"+k(pe),r),B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else{var I=e,E=a(Bn,"h6",r),B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}case 9:var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 8:var I=e,E=r,B=n,V=t,R=i,U=a(P,a(Oa,"role","button"),o),j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 5:var Me=de.a,I=e,E=r,B=n,V=t,R=i,U=a(P,a(Oa,"aria-label",Me),o),j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 6:var I=e,E=r,B=n,V=t,R=i,U=a(P,a(Oa,"aria-live","polite"),o),j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;default:var I=e,E=r,B=n,V=t,R=i,U=a(P,a(Oa,"aria-live","assertive"),o),j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var Yi=me.a;return Y(i,Yi.hV)}}(),I=e,E=r,B=n,V=t,R=Te,U=o,j=h(hh,Se,me,c),N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e;case 6:var je=m.a;if(a(or,Cu,n)){var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else{var I=bh(je)+(" "+e),E=r,B=function(se){switch(je){case 1:return a(ge,yv,se);case 2:return a(ge,wv,se);default:return se}}(a(ge,Cu,n)),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}default:var At=m.a;if(a(or,Lu,n)){var I=e,E=r,B=n,V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}else{var I=_h(At)+(" "+e),E=r,B=function(se){switch(At){case 1:return a(ge,Sv,se);case 2:return a(ge,xv,se);default:return se}}(a(ge,Lu,n)),V=t,R=i,U=o,j=c,N=p;e=I,r=E,n=B,t=V,i=R,o=U,c=j,l=N;continue e}}}else{var u=Uc(t);if(u.$===1)return{aJ:a(P,Lr(e),o),aM:c,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(P,Lr(e+(" "+f)),o),aM:c,aR:n,aT:r,hV:a(P,ph(t),i)}}}),Sh={$:0},Ch=Sh,ur=ae(function(e,r,n,t){return h(dh,e,t,gt(yh,T0(e),r,en,Ch,D,D,y0,mr(n)))}),rn=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Lh={fO:J,fW:J,hH:X({a2:0,b6:z(rn,155/255,203/255,1,1),eV:L(0,0),bi:3})},zh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.gK;return c.$===1?Re(i,{gK:X(o)}):i;case 1:var l=t.a,u=i.gx;return u.$===1?Re(i,{gx:X(l)}):i;default:var f=t.a,m=i.eS;return m.$===1?Re(i,{eS:X(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return Lh;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gx:J,gK:J,eS:J},e))},Ph=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(xr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),xr);case 2:var i=r.a;return $t(i);default:return $t("")}}),Mh=M(function(e,r,n){var t=zh(e),i=function(){var o=t.eS;return o===1?_v(t):x0(t)}();return a(Ph,i,z(ur,xr,ra,r,rr($([n]))))}),vt=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Ev=v(function(e,r){return{$:1,a:e,b:r}}),Bv=function(e){return{$:2,a:e}},Th={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),lo=function(e){return{$:3,a:e}},Vv=xe(8),Rv=xe(14),Uv=xe(5),jv=xe(4),za=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Be(r)+("-"+(Be(n)+("-"+(Be(t)+("-"+Be(i))))))},Zt=Fs,uo=Ds,Nv=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(le,"-",uo(Zt(n)));case 4:var n=e.a;return e.b,a(le,"-",uo(Zt(n)));default:var n=e.a.hc;return a(le,"-",uo(Zt(n)))}}())}),kh=function(){var e=$([lo("Open Sans"),lo("Helvetica"),lo("Verdana"),Th]);return $([a(Ce,Vv,h(vt,"bg-"+za(z(rn,1,1,1,0)),"background-color",z(rn,1,1,1,0))),a(Ce,Rv,h(vt,"fc-"+za(z(rn,0,0,0,1)),"color",z(rn,0,0,0,1))),a(Ce,jv,Bv(20)),a(Ce,Uv,a(Ev,h(Ue,Nv,"font-",e),e))])}(),Dh=M(function(e,r,n){var t=e.hl;return h(Mh,t,a(P,br(a(le," ",$([d.hA,d.fK,d.hL]))),Y(kh,r)),n)}),Hv={$:3},Gv=function(e){return{$:2,a:e}},Zo=Cd,Wv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Oo({gL:v(function(o,c){return a(Zo,e,a(n.gL,o,c))}),hV:n.hV});case 0:var t=r.a;return ot(a(yt,Zo(e),t));case 2:var i=r.a;return Gv(i);default:return Hv}}),Gc=Wv,Fh=Zo,Ah=function(e){return{$:0,a:e}},De=Ah,Ih=zd,hr=Ih,Ov={$:1},Ai=function(e){return{$:5,a:e}},qv=Ai(0),Vr=M(function(e,r,n){return z(rn,e/255,r/255,n/255,1)}),Jv=h(Vr,0,0,0),Eh=Br("d"),Bh=Br("fill"),Vh=Br("height"),Yv=x$("http://www.w3.org/2000/svg"),Rh=Yv("path"),Uh=Yv("svg"),jh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Nh=function(e){var r=jh(e);return"rgba("+(k(Ee(r.hu*255))+(","+k(Ee(r.gA*255))+(","+k(Ee(r.fS*255))+(","+ve(r.fI)+")"))))},Hh=Br("viewBox"),Gh=Br("width"),da=M(function(e,r,n){return a(Uh,$([Hh("0 0 100 100"),Gh(k(e)),Vh(k(e))]),$([a(Rh,$([Eh(n),Bh(Nh(r))]),D)]))}),Wh={$:1},dr=Wh,Xv=function(e){return{$:7,a:e}},ce=Xv,Le=v(function(e,r){return z(ur,xr,ra,a(P,ce(dr),a(P,ye(dr),e)),rr($([r])))}),Kv=function(e){return{$:2,a:e}},be=Kv(1),jn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},xa={c3:260,bE:54},on=function(e){return a(Ce,Vv,h(vt,"bg-"+za(e),"background-color",e))},Oh=xe(28),yn=function(e){return a(Ce,Oh,h(vt,"bc-"+za(e),"border-color",e))},Qt=1,Mr=v(function(e,r){return z(ur,Qt,ra,a(P,br(d.gc+(" "+d.bt)),a(P,ye(dr),a(P,ce(dr),e))),rr(r))}),qh=h(Vr,83,83,83),Zv=ae(function(e,r,n,t){return z(rn,e/255,r/255,n/255,t)}),Ii=z(Zv,56,56,56,.25),qe=Hv,ft=Ye(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),mt=xe(2),Nn=function(e){var r=e;return a(Ce,mt,F(ft,"p-"+k(e),r,r,r,r))},Qv=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),ef=xe(3),rf=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Sn=function(e){return a(Ce,ef,h(Qv,a(rf,e,e),e,e))},Jh=z(Zv,0,0,0,0),Yh=function(e){return{$:4,a:e}},Qo=0,Tn=v(function(e,r){return z(ur,Qo,ra,a(P,br(d.bt+(" "+d.ax)),a(P,ce(dr),a(P,ye(dr),e))),rr(r))}),Xh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(_v,{gx:{fO:J,fW:J,hH:J},gK:1,eS:0},n.hV));case 2:var t=e.a;return si(wn(t));default:return si(wn(""))}},Kh=v(function(e,r){return Xh(e(r))}),Zh=Ld,Qh=v(function(e,r){return ot(h(Zh,Kh,e,r))}),Cn=function(e){return a(Ce,Rv,h(vt,"fc-"+za(e),"color",e))},Wc=h(Vr,195,195,195),kn=v(function(e,r){return{$:3,a:e,b:r}}),nf=xe(13),e3=a(kn,nf,d.h7),r3=xe(20),af=a(kn,r3,d.hF),na=function(e){return a(Ce,jv,Bv(e))},Oc=a(kn,nf,d.fV),ec=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return F(fe,n,t,a(e,t,i),a(ec,e,o),a(ec,e,c))}),tf=v(function(e,r){if(he(e,r)){var n=e;return a(Ce,mt,F(ft,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,mt,F(ft,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Ln=function(e){return Gv(e)},n3=function(e){return h(Mc,M(function(r,n,t){return a(P,n,t)}),D,e)},a3=v(function(e,r){return{$:3,a:e,b:r}}),t3=v(function(e,r){return{$:2,a:e,b:r}}),i3=v(function(e,r){return{$:0,a:e,b:r}}),o3=v(function(e,r){return{$:1,a:e,b:r}}),St=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),c3=z(St,0/255,0/255,0/255,1),Ei=function(e){return{$:6,a:e}},l3=Ei(0),Bi=function(e){return{$:2,a:e}},u3={$:6},of=Bi(u3),cf=M(function(e,r,n){if(r.$===1)return r.a,z(ur,Qt,hn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,c=z(ur,xr,ra,i,rr($([o])));switch(t){case 2:return z(ur,Qt,hn("label"),a(P,br(d.ci),e),rr($([c,n])));case 3:return z(ur,Qt,hn("label"),a(P,br(d.ci),e),rr($([n,c])));case 0:return z(ur,Qo,hn("label"),a(P,br(d.ci),e),rr($([n,c])));default:return z(ur,Qo,hn("label"),a(P,br(d.ci),e),rr($([c,n])))}}),rc=Oa,vn=Ai(1),lf="Enter",$3=function(e){return{$:5,a:e}},uf=function(e){if(e.$===1){var r=e.a;return Bi($3(r))}else return Yn},$f=function(e){return e.$===1},v3=function(e){return{$:0,a:e}},qc=w$,f3=v(function(e,r){return a(qc,e,v3(r))}),vf=function(e){return a(f3,"click",lr(e))},m3=Gs,s3=function(e){return{$:2,a:e}},d3=v(function(e,r){return a(qc,e,s3(r))}),ff=function(e){var r=function(t){var i=e(t);if(i.$===1)return m3("No key matched");var o=i.a;return lr(o)},n=a(Q,r,a(K,"key",Ca));return Ae(a(d3,"keydown",a(ui,function(t){return L(t,!0)},n)))},p3=xe(21),Hn=a(kn,p3,d.gf),mf=" ",sf=function(e){return a(Br,"tabIndex",k(e))},g3=a(yt,Ae,sf),h3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bI,c=Y($([$f(n)?Yn:Sn(6),Ae(vf(o(!i))),of,ff(function(l){return he(l,lf)||he(l,mf)?X(o(!i)):J}),g3(0),Hn,l3,ce(be)]),e);return h(cf,a(P,Ae(a(rc,"role","checkbox")),a(P,Ae(a(rc,"aria-checked",i?"true":"false")),a(P,uf(n),c))),n,z(ur,xr,ra,$([vn,ye(be),ce(dr)]),rr($([t(i)]))))}),b3=M(function(e,r,n){return Y(a(it,e-Un(n),ki(r)),n)}),st=fs,df=function(e){var r=function(n){return n<10?k(n):ki($v(87+n))};return e<16?r(e):Y(df(e/16|0),r(a(st,16,e)))},_3=a(Ke,df,a(b3,2,"0")),Jc=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},x3=function(e){var r=Jc(e),n=r.hu,t=r.gA,i=r.fS;return a(le,"",a(P,"#",a(re,a(Ke,Ee,_3),$([n*255,t*255,i*255]))))},Yc=xe(12),pf=a(kn,Yc,d.h$),nc=Ei(1),Xn=ms,hi=function(e){return e*Xn/180},w3=function(e){return{$:1,a:e}},Xc=v(function(e,r){return{$:10,a:e,b:r}}),y3=xe(26),S3=function(e){return a(Xc,y3,w3(-e))},pa=M(function(e,r,n){return z(rn,e,r,n,1)}),C3=rn,L3=v(function(e,r){return{$:4,a:e,b:r}}),z3=xe(24),P3=function(e){return a(Xc,z3,a(L3,G(0,0,1),e))},M3=xe(17),Gn=function(e){return a(Ce,M3,h($r,"br-"+k(e),"border-radius",k(e)+"px"))},T3=function(e){return ba($([e.ej?"box-inset":"box-",Be(e.eV.a)+"px",Be(e.eV.b)+"px",Be(e.a2)+"px",Be(e.bi)+"px",za(e.b6)]))},k3=xe(19),D3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,k3,h($r,T3(r),"box-shadow",qo(r)))},zu=v(function(e,r){return{$:12,a:e,b:r}}),Pu=xe(0),F3=function(e){return e?a(Ce,Pu,a(zu,"transparent",1)):a(Ce,Pu,a(zu,"visible",0))},$o=h(pa,1,1,1),Kc=Ye(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Vi=function(e){return a(Ce,Fi,F(Kc,"b-"+k(e),e,e,e,e))},A3=v(function(e,r){return a(Ce,Fi,F(Kc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Ct=function(e){var r=e.b2,n=e.cH,t=e.g4,i=e.hx;return he(n,r)&&he(t,i)?he(n,i)?Vi(n):a(A3,t,n):a(Ce,Fi,F(Kc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},I3=function(e){return a(Le,$([br("focusable"),ce(De(14)),ye(De(14)),Cn($o),vn,na(9),pf,Gn(3),yn(e?h(pa,59/255,153/255,252/255):h(pa,211/255,211/255,211/255)),D3({a2:1,b6:e?z(C3,238/255,238/255,238/255,0):h(pa,238/255,238/255,238/255),eV:L(0,0),bi:1}),on(e?h(pa,59/255,153/255,252/255):$o),Vi(e?0:1),Wo(a(Le,$([yn($o),ye(De(6)),ce(De(9)),P3(hi(-45)),nc,vn,S3(1),F3(!e),Ct({b2:2,g4:2,hx:0,cH:0})]),qe))]),qe)},E3=kr("htmlFor"),B3=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),bi=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return e(n)}}),gf=ae(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),V3=ep,R3=Us,U3=v(function(e,r){if(r.$)return tr(e);var n=r.a;return Ge(n)}),j3=Qd,N3=function(e){return a(j3,{f2:!1,hb:!1},e)},Zc=function(e){if(e.b){var r=e.a;return e.b,X(r)}else return J},H3=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return Ge(e(n))}}),G3=function(e){return{$:2,a:e}},W3=function(e){return{$:0,a:e}},O3=function(e){return{$:1,a:e}},vo=v(function(e,r){return qr(r)-qr(e)}),fo=M(function(e,r,n){var t=qr(n);return _e(qr(e),t)<1&&_e(t,qr(r))<1}),q3=v(function(e,r){var n=function(i){return _e(i,e)<0?Ge(i):tr(O3(r))},t=h(fo,"0","9",r)?Ge(a(vo,"0",r)):h(fo,"a","z",r)?Ge(10+a(vo,"a",r)):h(fo,"A","Z",r)?Ge(10+a(vo,"A",r)):tr(W3(r));return a(bi,n,t)}),hf=v(function(e,r){var n=Da(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(bi,function(c){return a(bi,function(l){return Ge(c+l*e)},a(hf,e,o))},a(q3,e,i))}),J3=v(function(e,r){return 2<=e&&e<=36?a(hf,e,No(r)):tr(G3(e))}),Y3=J3(16),X3=M(function(e,r,n){return z(St,e,r,n,1)}),K3=ae(function(e,r,n,t){return z(St,e,r,n,t)}),Lt=vs,Z3=v(function(e,r){var n=a(Lt,10,e);return Ee(r*n)/n}),Q3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=uv(n);if(t.b&&!t.b.b){var i=t.a;return R3($([i,i]))}else return n};return a(Ke,Zt,a(Ke,function(n){return a(Ne,function(t){return h(V3,1,t,n)},N3(e))},a(Ke,B3(Zc),a(Ke,Ne(function(n){return n.hW}),a(Ke,Ne(xn(Er)),a(Ke,U3("Parsing hex regex failed"),bi(function(n){var t=a(re,a(Ke,r,a(Ke,Y3,H3(Ga))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,m=f.a.a;return Ge(z(K3,i/255,c/255,u/255,a(Z3,2,m/255)))}else break e;else{var i=t.a.a,p=t.b,c=p.a.a,b=p.b,u=b.a.a;return Ge(h(X3,i/255,c/255,u/255))}else break e;return tr("Parsing ints from hex failed")})))))))}(),eb=kr("id"),rb=sn("input"),nb=sn("label"),bf=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ab=bf(0),tb=kr("name"),ib=function(e){return L(e,!0)},ob=function(e){return{$:1,a:e}},cb=v(function(e,r){return a(qc,e,ob(r))}),lb=v(function(e,r){return h(er,K,r,e)}),ub=a(lb,$(["target","value"]),Ca),_f=function(e){return a(cb,"input",a(ui,ib,a(ui,e,ub)))},$b=a(kn,Yc,d.h4),xf=a(kn,Yc,d.h8),Qc=function(e){return a(bv,5,e)},el=function(e){return a(Ce,Uv,a(Ev,h(Ue,Nv,"ff-",e),e))},vb=h(Vr,195,195,195),wf=h(Vr,69,69,69),fb=bf(2),mb={$:2},rl=mb,sb=xe(32),db=xe(31),Mu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},pb=v(function(e,r){return a(Ve,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return X(L(i,c))}else return J;else{var i=t.a;return X(i)}}),J,e))}),Tu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},gb=xe(33),hb=kr("max"),bb=kr("min"),_b=v(function(e,r){return a(Ce,ef,h(Qv,a(rf,e,r),e,r))}),xb=function(e){return a(kr,"step",e)},yf=kr("type"),Sf=kr("value"),Pa=Kv,wb=kd,Cf=v(function(e,r){switch(r.$){case 0:return Yn;case 2:var n=r.a;return Bi(n);case 6:var t=r.a;return Ei(t);case 5:var i=r.a;return Ai(i);case 7:var t=r.a;return Xv(t);case 8:var t=r.a;return gv(t);case 3:var t=r.a,i=r.b;return a(kn,t,i);case 4:var o=r.a,c=r.b;return a(Ce,o,c);case 9:var l=r.a,u=r.b;return a(hv,l,a(Wv,e,u));case 1:var f=r.a;return Ae(a(wb,e,f));default:var m=r.a,p=r.b;return a(Xc,m,p)}}),yb=M(function(e,r,n){return a(Tn,$([ce(be),ye(a(Ve,be,n)),vn]),$([a(Le,$([ce(Pa(Ee(e*1e4)))]),qe),a(Le,a(P,vn,a(re,Cf(_t),r)),qe),a(Le,$([ce(Pa(Ee(we(1-e)*1e4)))]),qe)]))}),Sb=M(function(e,r,n){return a(Mr,$([ye(be),ce(a(Ve,be,n)),nc]),$([a(Le,$([ye(Pa(Ee(we(1-e)*1e4)))]),qe),a(Le,a(P,nc,a(re,Cf(_t),r)),qe),a(Le,$([ye(Pa(Ee(e*1e4)))]),qe)]))}),Lf=v(function(e,r){var n=Tu(e),t=Mu(e),i=function(){var C=L(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var w=C.a.a.a,T=C.b.a.a;return _e(T,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),c=r.ic,l=c,u=Mu(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Tu(l),p=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(p+("-"+f)),s=$([a(ue,"width",p),a(ue,"height",f)]),x=a(pb,e,L(5,5)),_=x.a,S=x.b;return h(cf,$([$f(r.em)?Yn:a(_b,_,S),of,ce(function(){if(n.$===1)return be;if(n.a.$){var C=n.a;return C}else return dr}()),ye(function(){if(t.$===1)return dr;if(t.a.$){var C=t.a;return C}else return dr}())]),r.em,a(Tn,$([ce(a(Ve,be,n)),ye(a(Ve,De(20),t))]),$([z(ur,xr,hn("input"),$([uf(r.em),a(Ce,sb,a(Za,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,gb,a(Za,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,db,a(Za,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ae(Lr(b+" ui-slide-bar focusable-parent")),Ae(_f(function(C){var w=lv(C);if(w.$===1)return r.bI(0);var T=w.a;return r.bI(T)})),Ae(yf("range")),Ae(xb(function(){var C=r.cE;if(C.$===1)return"any";var w=C.a;return ve(w)}())),Ae(bb(ve(r.cr))),Ae(hb(ve(r.cq))),Ae(Sf(ve(r.cI))),i?Ae(a(rc,"orient","vertical")):Yn,ce(i?a(Ve,De(20),t):a(Ve,be,n)),ye(i?a(Ve,be,n):a(Ve,De(20),t))]),rr(D)),a(Le,a(P,ce(a(Ve,be,n)),a(P,ye(a(Ve,De(20),t)),Y(e,$([Qc(i?h(Sb,o,a(P,br("focusable-thumb"),l),n):h(yb,o,a(P,br("focusable-thumb"),l),t))])))),qe)])))}),Cb=h(pa,.5,.5,.5),zf=Er,ku=function(e){var r=e.c2,n=e.cI,t=e.cr,i=e.cq,o=e.cE,c=e.bI;return a(Le,$([ce(be)]),a(Lf,$([Sn(2),Qc(a(Le,$([ce(be),ye(De(16)),vn,on(wf),Gn(4)]),qe))]),{em:a(fb,D,a(Tn,$([ce(be)]),$([a(Le,$([$b]),Ln(r)),a(Le,$([ce(be),xf,el($([rl]))]),Ln(ve(n)))]))),cq:i,cr:t,bI:c,cE:X(o),ic:zf($([ce(De(12)),ye(De(12)),Gn(4),Vi(0),yn(Cb),on(vb)])),cI:n}))},Lb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),zb=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(h3,D,{f6:c,gM:I3,em:a(ab,D,Ln(e)),bI:a3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return ku({c2:e,cq:o,cr:i,bI:i3(e),cE:.001*(o-i),cI:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return ku({c2:e,cq:o,cr:i,bI:a(Ke,Ee,o3(e)),cE:1,cI:c});default:var c=r.a;return a(Le,$([ce(be)]),bn(a(La,D,$([a(La,$([a(hr,"margin-bottom","6px")]),$([a(nb,$([E3(e)]),$([Hc(e)]))])),a(rb,$([yf("color"),a(hr,"width","100%"),a(hr,"height","26px"),a(hr,"padding","0px"),eb(e),tb(e),_f(function(l){return a(t3,e,a(Lb,c3,Q3(l)))}),Sf(x3(c))]),D)]))))}}),ac=h(Vr,255,255,255),Pb=function(e){return a(Mr,$([ce(be),Sn(8),a(tf,0,14),Ct({b2:1,g4:0,hx:0,cH:0}),yn(Ii)]),$([a(Le,$([na(16),Oc,Cn(ac)]),Ln(e.hc)),a(Mr,$([ce(be),Sn(6)]),n3(a(ec,zb,e.aN)))]))},Mb=function(e){return a(Mr,$([ce(be),ye(be),Cn(Wc),na(12),e3,af]),a(re,Pb,e))},Tb=Qh(Mb),kb=function(e){return a(Mr,$([ce(be),ye(be)]),$([a(Tn,$([Sn(14),ce(be)]),D),a(Gc,Yh,Tb(ea(e).gb))]))},Db=function(e){return{$:6,a:e}},Fb=ae(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Ab=function(e){var r=e.cH,n=e.hx,t=e.b2,i=e.g4;if(he(r,n)&&he(r,t)&&he(r,i)){var o=r;return a(Ce,mt,F(ft,"p-"+k(r),o,o,o,o))}else return a(Ce,mt,F(ft,z(Fb,r,n,t,i),r,n,t,i))},Ib=function(e){return{$:0,a:e}},Eb=function(e){return{$:1,a:e}},Bb=Eb,Vb=function(e){var r=e.b.X;return Jn(r)},_i=h(Vr,255,60,0),Rb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Jn(r)+1+Jn(n)},Ub=function(e){var r=L(Vb(e),Rb(e)-1),n=r.a,t=r.b;return a(Le,$([ce(be),vn]),a(Lf,$([Qc(a(Tn,$([ce(be),ye(De(4)),vn,on(wf),Gn(2)]),$([a(Le,$([ce(Pa(n)),ye(be),on(_i),Gn(2)]),qe),a(Le,$([ce(Pa(t-n))]),qe)])))]),{em:Bb(""),cq:t,cr:0,bI:a(Ke,Ee,Ib),cE:X(1),ic:zf($([ce(De(12)),ye(De(12)),Gn(6),on(_i)])),cI:n}))},jb=Ei(2),ei=h(Vr,220,220,220),Nb=function(e){var r=e.a,n=function(){return r.$?$([Cn(ei)]):$([Cn(_i)])}();return a(Le,Y(n,$([na(14),jb,xf,el($([rl]))])),Ln(a(sv,3,ea(e).d1)))},Hb=function(e){e.a;var r=e.b.X;return a(Ne,function(n){return Ee(60/(ea(e).d1-n))},a(Ne,a(Ke,Q$,function(n){return n.d1}),Zc(a(iv,59,r))))},Gb=function(e){var r=Hb(e);if(r.$===1)return qe;var n=r.a;return a(Le,$([na(14),Cn(Wc),el($([rl]))]),Ln(k(n)+" FPS"))},Du={$:1},Wb={$:3},Ob={$:2},qb={$:8},Jb=g$,Yb=v(function(e,r){return a(wc,e,Jb(r))}),Xb=Yb("disabled"),Kb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Zb=function(e){return a(wt,Kb,e)?Yn:br("focusable")},xi=a(yt,Ae,vf),Pf=v(function(e,r){var n=r.eW,t=r.em;return z(ur,xr,ra,a(P,ce(dr),a(P,ye(dr),a(P,br(d.ca+(" "+(d.ax+(" "+(d.hG+(" "+d.eU)))))),a(P,Hn,a(P,Zb(e),a(P,Bi(qb),a(P,Ae(sf(0)),function(){if(n.$===1)return a(P,Ae(Xb(!0)),e);var i=n.a;return a(P,xi(i),a(P,ff(function(o){return he(o,lf)||he(o,mf)?X(i):J}),e))}()))))))),rr($([t])))}),Fu=v(function(e,r){return a(Pf,D,{em:a(Le,$([ce(De(36)),Nn(3),Cn(r),pf,na(12),Oc,yn(r),Vi(1),Gn(4)]),Ln("REC")),eW:X(e)})}),Au=M(function(e,r,n){return a(Pf,D,{em:bn(h(da,20,n,e)),eW:X(r)})}),Qb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(Tn,D,$([a(Le,$([ce(De(40))]),function(){switch(r.$){case 0:return a(Fu,Du,_i);case 1:return a(Fu,Ob,ei);default:return qe}}()),a(Le,$([ce(De(28))]),function(){switch(r.$){case 0:return qe;case 1:return gn(n)?qe:h(Au,jn.hp,Wb,ei);default:return h(Au,jn.ho,Du,ei)}}())]))},e1=function(e){return a(Mr,$([ce(be)]),$([Ub(e),a(Tn,$([ce(be),Sn(14),a(tf,0,6),vn]),$([Qb(e),Gb(e),Nb(e)]))]))},r1=function(e){return a(Mr,$([ce(be),Sn(14),Ab({b2:20,g4:0,hx:0,cH:0}),Ct({b2:1,g4:0,hx:0,cH:0}),yn(Ii)]),$([a(Le,$([na(16),Oc,Cn(Wc)]),Ln("Time Travel")),a(Gc,Db,e1(e))]))},n1=v(function(e,r){return a(Mr,$([ea(r).dC.im>600?on(qh):on(Jh),Ct({b2:0,g4:0,hx:1,cH:0}),yn(Ii),ce(De(xa.c3)),ye(be)]),$([function(){return e?qe:a(Mr,$([ce(be),ye(be),Nn(14),Sn(14)]),$([r1(r),kb(r)]))}()]))}),a1=function(e){return{$:3,a:e}},Iu=Ai(2),t1=h(Vr,232,78,50),i1=h(Vr,48,48,48),o1=function(e){return a(kr,"href",Td(e))},c1=Br("rel"),l1=kr("target"),Eu=v(function(e,r){var n=r.fn,t=r.em;return z(ur,xr,hn("a"),a(P,Ae(o1(n)),a(P,Ae(c1("noopener noreferrer")),a(P,Ae(l1("_blank")),a(P,ce(dr),a(P,ye(dr),a(P,br(d.ca+(" "+(d.ax+(" "+d.et)))),e)))))),rr($([t])))}),qa=kr("title"),u1=h(Vr,31,161,242),$1=function(e){var r=M(function(o,c,l){var u=he(c,e)?ac:i1;return a(Le,$([Qr(qa(o)),xi(a1(c)),Hn,Nn(7)]),bn(h(da,40,u,l)))}),n=a(Mr,$([qv]),$([h(r,"Configurations",0,jn.hN)])),t=a(Mr,D,$([a(Eu,$([Qr(qa("Twitter")),Iu,Hn,Nn(7)]),{em:bn(h(da,40,u1,jn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(Eu,$([Qr(qa("Source Code")),Iu,Hn,Nn(7)]),{em:bn(h(da,40,t1,jn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([ce(De(xa.bE)),Nn(4),xi(Ov),Ct({b2:1,g4:0,hx:0,cH:0}),yn(Ii),Hn,Qr(qa("Activate Distraction Free Mode"))]),bn(h(da,46,ac,jn.fx)));return a(Mr,$([ce(De(xa.bE)),ye(be),af,on(Jv)]),$([i,n,t]))},v1=function(e){var r=a(Le,$([ce(De(xa.bE)),qv,Nn(4),xi(Ov),Hn,Qr(qa("Deactivate Distraction Free Mode (A)"))]),bn(h(da,46,Jv,jn.fx)));return e.bw?r:a(Tn,$([ce(De(xa.bE+xa.c3)),ye(be)]),$([$1(e.bp),a(n1,e.bp,e.R)]))},f1=M(function(e,r,n){var t=g0(n.R),i=ea(n.R);return h(Dh,{hl:$([b0({fO:J,fW:J,hH:J})])},$([ce(De(at(i.dC.im))),ye(De(at(i.dC.gH))),Qr(a(hr,"-webkit-font-smoothing","antialiased")),Qr(a(hr,"pointer-events","none")),Qr(a(hr,"touch-action","none")),Qr(a(hr,"user-select","none")),Wo(a(Gc,d0,a(r,i,t))),Wo(v1(n))]),bn(a(Fh,si(p0),a(e,i,t))))}),m1=wr(function(e,r,n,t,i,o){var c=v(function(u,f){return L(z(u0,r,o,u,f),tu)}),l=function(u){var f=a(rv,n,u.gY);return L({bp:0,bw:!0,R:a($0,f,t),dN:0},tu)};return Mg({gS:l,hX:s0,ii:c,ik:a(f1,e,i)})}),s1=ae(function(e,r,n,t){return ar(m1,e,r,n,t,v(function(i,o){return qe}),M(function(i,o,c){return c}))}),d1=function(e){return{}},p1=M(function(e,r,n){return{aN:n,g0:r,hc:e}}),g1=function(e){return h(Ue,v(function(r,n){var t=r.a,i=r.b;return h(ha,t,i,n)}),Rc,e)},h1=M(function(e,r,n){return h(p1,e,r,g1(n))}),b1=h1,_1=M(function(e,r,n){var t=r.a,i=r.b;return L(e,a(cv,L(t,i),n))}),x1=$([h(b1,"Camera",!0,$([h(_1,"camera height",L(1.4,1.57),1.57)]))]),w1=v(function(e,r){return r}),y1=v(function(e,r){return a(Ne,function(n){if(n.$)return 0;var t=n.b;return t},a(Di,e,r.aN))}),S1=v(function(e,r){return a(Ve,0,Zc(a(xn,y1(e),r)))}),C1=v(function(e,r){return a(S1,e,r.gb)}),Bu=C1,L1=function(e){return e},cn=function(e){return e},tc=function(e){var r=e;return-r},z1=v(function(e,r){var n=e,t=r;return{io:n.is*t.dU-n.dU*t.is,is:n.dU*t.io-n.io*t.dU,dU:n.io*t.is-n.is*t.io}}),Mf=function(e){var r=e;return r.dS},Tf=function(e){var r=e;return r.dT},P1=function(e){return a(z1,Mf(e),Tf(e))},aa=function(e){var r=e;return r.dl},Kn=ss,Ma=ds,ri=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Kn(c),u=Ma(c),f=t.gm,m=f,p=m.io*u,b=l*p,s=p*p,x=m.is*u,_=l*x,S=p*x,C=x*x,w=1-2*(s+C),T=m.dU*u,H=l*T,Z=2*(S-H),ne=2*(S+H),te=p*T,ie=2*(te+_),ee=2*(te-_),q=x*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+Z*o.is+ie*o.dU,is:ne*o.io+me*o.is+de*o.dU,dU:ee*o.io+pe*o.is+w*o.dU}}),zt=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=Kn(c),u=Ma(c),f=t.dl,m=f,p=o.io-m.io,b=o.is-m.is,s=o.dU-m.dU,x=t.gm,_=x,S=_.io*u,C=l*S,w=S*S,T=_.is*u,H=l*T,Z=S*T,ne=T*T,te=1-2*(w+ne),ie=_.dU*u,ee=l*ie,q=2*(Z-ee),de=2*(Z+ee),pe=S*ie,Me=2*(pe+H),Se=2*(pe-H),me=T*ie,Te=2*(me-C),I=2*(me+C),E=ie*ie,B=1-2*(ne+E),V=1-2*(w+E);return{io:m.io+B*p+q*b+Me*s,is:m.is+de*p+V*b+Te*s,dU:m.dU+Se*p+I*b+te*s}}),fn=function(e){return e},Dn=function(e){var r=e;return r.dS},Fn=function(e){var r=e;return r.dT},An=function(e){var r=e;return r.dV},kf=M(function(e,r,n){return fn({dl:h(zt,e,r,aa(n)),dS:h(ri,e,r,Dn(n)),dT:h(ri,e,r,Fn(n)),dV:h(ri,e,r,An(n))})}),Vu=M(function(e,r,n){return h(kf,e(n),r,n)}),nl=function(e){var r=e;return r.gm},Pt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dU:t.dU+n.dU}}),Df=v(function(e,r){return fn({dl:a(Pt,e,aa(r)),dS:Dn(r),dT:Fn(r),dV:An(r)})}),M1=v(function(e,r){var n=e,t=r;return{io:n*t.io,is:n*t.is,dU:n*t.dU}}),T1=M(function(e,r,n){return a(Df,a(M1,r,e),n)}),k1=M(function(e,r,n){return h(T1,nl(e(n)),r,n)}),ta=v(function(e,r){return{gm:r,dl:e}}),D1=function(e){var r=e;return a(ta,r.dl,r.dS)},F1=function(e){var r=e;return a(ta,r.dl,r.dT)},A1=function(e){var r=e;return a(ta,r.dl,r.dV)},I1=function(e){var r=fn({dl:e.ba,dS:Tf(e.ed),dT:P1(e.ed),dV:Mf(e.ed)}),n=h(k1,A1,e.cY,h(Vu,D1,tc(e.cc),h(Vu,F1,e.b$,r)));return n},E1=function(e){return{$:1,a:e}},Je=function(e){var r=e;return we(r)},B1=function(e){return{dw:E1(Je(e.fs)),dM:e.dM}},Zn=function(e){return e},Hr={io:0,is:0,dU:0},Ff=Er,ln=function(e){return e},Af=ln({io:1,is:0,dU:0}),al=Af,tl=ln({io:0,is:0,dU:1}),il=tl,V1=Ff({dl:Hr,dS:il,dT:al}),R1=function(e){var r=e.ba,n=e.b$,t=e.cc,i=e.fs;return B1({dM:I1({b$:Zn(n),cY:cn(1e3),cc:Zn(t),ba:L1(r),ed:V1}),fs:cn(i)})},U1=function(e){return R1({b$:a(Bu,"camera height",e),cc:a(Bu,"camera height",e),ba:{io:0,is:2,dU:0},fs:2})},j1=function(e){return e},N1=function(e){return cn(.01*e)},Ru=function(e){return e},H1=function(e){return e},G1=function(e){return{$:0,a:e}},W1=G1,O1={$:3},q1=O1,J1=ae(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Y1=J1,X1=function(e){return{$:1,a:e}},K1=X1,Z1=function(e){return a(Br,"height",k(e))},Q1=Fv,e_=function(e){return{$:2,a:e}},r_=e_,n_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return Ee(l*1e3)/1e3},c=function(l){return Ee(l*1e4)/100};return ba($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(t)),"%,",ve(o(i)),")"]))},a_=v(function(e,r){switch(r.$){case 0:return a(zp,e,r);case 1:return a(Pp,e,r);case 2:return a(Mp,e,r);case 3:return a(Tp,e,r);case 4:return a(kp,e,r);default:return a(Dp,e,r)}}),t_=v(function(e,r){switch(r.$){case 0:return a(ap,e,r);case 1:return a(tp,e,r);case 2:return a(ip,e,r);case 3:return a(op,e,r);case 4:return a(cp,e,r);case 5:return a(lp,e,r);case 6:return a(up,e,r);case 7:return a($p,e,r);default:return vp(e)}}),i_=M(function(e,r,n){return h(Lp,e,r,n)}),Uu=function(e){var r=e;return r},Aa=Hp,mo=z(Aa,1,1,1,1),Ur=M(function(e,r,n){return a(re,function(t){return a(t,r,n)},e)}),o_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),c_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(o_,n*t/i,n,n*(1-t-i)/i)}),Mt=Bp,l_=function(e){var r=e.a,n=e.b,t=e.c;return h(Mt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},ol=v(function(e,r){return l_(a(c_,e,r))}),If=v(function(e,r){return{ek:he(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Wr=Yp,u_=function(e){return Wr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},so=Ye(function(e,r,n,t,i){var o=t.ek?1:-1,c=z(Aa,t.cC,t.cC,t.cC,o);return ar(i,e,c,u_(t),t.ek,r,n)}),Ef=wr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,m=n,p=a(If,c,t),b=l,s=o;e=u,r=f,n=m,t=p,i=b,o=s;continue e;case 1:var x=i.b,_=a(P,F(so,e,r,n,t,x),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(P,F(so,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var w=i.a,T=a(P,F(so,e,r,n,t,w),o.hI);return{P:o.P,_:o._,hI:T};default:var H=i.a;return h(Ue,z(Ef,e,r,n,t),o,H)}}),$_=ae(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Bf=$_,cl=ae(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),v_=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(cl,518,r,n,t)},f_=v(function(e,r){return{$:6,a:e,b:r}}),m_=f_,Vf=$([v_({ab:1,ac:0,ai:!1}),z(Bf,!1,!1,!1,!1),a(m_,0,1)]),Ta=519,ll=8,Rf=15,wa=7681,s_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ie=np,d_=v(function(e,r){return{$:0,a:e,b:r}}),p_=d_({d5:1,ei:0,eS:5}),gr=Ip,g_=p_($([{cx:a(gr,-1,-1)},{cx:a(gr,1,-1)},{cx:a(gr,-1,1)},{cx:a(gr,1,1)}])),h_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},b_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f,k:m}}}}}}}}}}}},ul=M(function(e,r,n){var t=e.dx,i=e.dc,o=e.dR,c=v(function(f,m){var p=f;return m(p)}),l=v(function(f,m){var p=f;return m(p)}),u=function(f){return a(Ke,c(f.bO),a(Ke,l(f.bz),a(Ke,l(f.bX),l(f.bY))))};return a(u,n,a(u,r,h(b_,t,i,o)))}),$l=function(e){return h(ul,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},vl=function(e){return F(Ie,$([$l(e),z(Bf,!1,!1,!1,!1)]),h_,s_,g_,{})},__=vl({bz:wa,dc:0,dx:ll,bO:Ta,dR:Rf,bX:wa,bY:wa}),x_=516,ju=5386,ir=7680,w_=function(e){return a(Lt,2,e+4)},Uf=function(e){return vl({bz:ir,dc:Rf,dx:ll,bO:x_,dR:w_(e),bX:ju,bY:ju})},y_=M(function(e,r,n){return sr($([h(Ur,e,n,Vf),$([Uf(r),__])]))}),S_=v(function(e,r){return sr(a(O$,y_(e),r))}),C_=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(cl,513,r,n,t)},L_=C_({ab:1,ac:0,ai:!0}),z_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},P_=function(e){var r=e.cz,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,c=e.fI,l=v(function(u,f){var m=u.a,p=u.b,b=u.c,s=f.a,x=f.b,_=f.c;return z_(m)(p)(b)(s)(x)(_)(r)(n)(t)(i)});return a(l,o,c)},M_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Nu=v(function(e,r){var n=e,t=r;return h(M_,32774,n,t)}),T_=1,Hu=771,k_=770,fl=P_({bZ:0,fI:a(Nu,T_,Hu),b0:0,b6:a(Nu,k_,Hu),cf:0,cz:0}),ca=$([L_,fl]),D_=function(e){var r=e;return r.eL},F_=function(e){var r=e;return r.eM},jf=function(e){var r=e;return r.eN},A_=function(e){var r=e;return r.eO},I_=function(e){var r=e;return r.eP},Nf=function(e){var r=e;return r.eQ},un=v(function(e,r){var n=e,t=r;return t-n}),Hf=function(e){return G(a(un,A_(e),D_(e)),a(un,I_(e),F_(e)),a(un,Nf(e),jf(e)))},Gu=function(e){var r=e;return aa(r)},E_=function(e){return e},B_=function(e){return fn({dl:E_({io:e.K,is:e.L,dU:e.M}),dS:ln({io:e.t,is:e.u,dU:e.v}),dT:ln({io:e.w,is:e.x,dU:e.y}),dV:ln({io:e.z,is:e.A,dU:e.B})})},po=v(function(e,r){var n=e,t=r,i=n.dV,o=i,c=n.dT,l=c,u=n.dS,f=u;return{io:t.io*f.io+t.is*f.is+t.dU*f.dU,is:t.io*l.io+t.is*l.is+t.dU*l.dU,dU:t.io*o.io+t.is*o.is+t.dU*o.dU}}),Gf=v(function(e,r){var n=e,t=r,i=n.dl,o=i,c=t.io-o.io,l=t.is-o.is,u=t.dU-o.dU,f=n.dV,m=f,p=n.dT,b=p,s=n.dS,x=s;return{io:c*x.io+l*x.is+u*x.dU,is:c*b.io+l*b.is+u*b.dU,dU:c*m.io+l*m.is+u*m.dU}}),Wf=v(function(e,r){return{dl:a(Gf,e,aa(r)),dS:a(po,e,Dn(r)),dT:a(po,e,Fn(r)),dV:a(po,e,An(r))}}),ic=M(function(e,r,n){return{io:e,is:r,dU:n}}),wi=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(zr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(_a,n,t)}),V_=v(function(e,r){var n=wi(r),t=wi(e);return{eL:a(He,t.eL,n.eL),eM:a(He,t.eM,n.eM),eN:a(He,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Tr=function(e){var r=e;return r},R_=function(e){var r=e;return G(r.io,r.is,r.dU)},go=function(e){var r=e;return .5*r},Qa=v(function(e,r){var n=e,t=r;return t+n}),U_=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=go(Je(t)),c=go(Je(n)),l=go(Je(i)),u=R_(r),f=u.a,m=u.b,p=u.c;return{eL:a(Qa,c,f),eM:a(Qa,o,m),eN:a(Qa,l,p),eO:a(un,c,f),eP:a(un,o,m),eQ:a(un,l,p)}}),Wu=ae(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,c=2*n.gE*r,l=2*n.gD*r,u=i.dU*r,f=i.is*r,m=i.io*r,p=Tr(An(e)),b=we(l*p.io)+we(c*p.is)+we(o*p.dU),s=Tr(Fn(e)),x=we(l*s.io)+we(c*s.is)+we(o*s.dU),_=Tr(Dn(e)),S=we(l*_.io)+we(c*_.is)+we(o*_.dU),C=a(U_,G(S,x,b),a(Gf,e,h(ic,m,f,u)));if(t.$)return X(C);var w=t.a;return X(a(V_,w,C))}),oc=ae(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 1:var c=i.a,l=z(Wu,e,r,c,n),s=e,x=r,_=l,S=o;e=s,r=x,n=_,t=S;continue e;case 2:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 3:var c=i.a,l=z(Wu,e,r,c,n),s=e,x=r,_=l,S=o;e=s,r=x,n=_,t=S;continue e;case 4:var u=i.a,s=e,x=r,_=z(oc,e,r,n,u),S=o;e=s,r=x,n=_,t=S;continue e;default:var f=i.a,m=i.b,p=a(Wf,B_(f),e),b=r*f.cC,s=e,x=r,_=z(oc,p,b,n,$([m])),S=o;e=s,r=x,n=_,t=S;continue e}}else return n}),Ia=Vp,Ea=Rp,Ba=Up,Of=function(e){return{$:4,a:e}},j_=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(P,n,r);e=i,r=o;continue e}else return r}),Tt=function(e){return Of(a(j_,e,D))},N_={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},H_=function(e){var r=e;return r},Ou=vl({bz:wa,dc:0,dx:ll,bO:Ta,dR:255,bX:wa,bY:wa}),ga=xs,nn=0,G_=function(e){var r=e,n=a(zr,we(r.io),a(zr,we(r.is),we(r.dU)));if(n){var t=r.dU/n,i=r.is/n,o=r.io/n,c=ga(o*o+i*i+t*t);return c*n}else return nn},cr={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},Sr=v(function(e,r){var n=e,t=r;return Wr({eu:n.io,ev:n.cz,ew:t.io,ex:t.cz,ey:n.is,ez:n.cf,eA:t.is,eB:t.cf,eC:n.dU,eD:n.b0,eE:t.dU,eF:t.b0,eG:n.dJ,eH:n.du,eI:t.dJ,eJ:t.du})}),Ja=L({bF:a(Sr,cr,cr),cm:a(Sr,cr,cr),cn:a(Sr,cr,cr),co:a(Sr,cr,cr)},z(Aa,0,0,0,0)),ke=v(function(e,r){var n=r;return e*n}),qf=514,Jf=function(e){var r=e.ai,n=e.ac,t=e.ab;return z(cl,515,r,n,t)},Yf=240,W_=$([Jf({ab:1,ac:0,ai:!0}),$l({bz:ir,dc:Yf,dx:0,bO:qf,dR:0,bX:ir,bY:ir}),fl]),O_=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,c=Je(t),l=c,u=Je(i),f=u,m=n.dw;if(m.$){var b=m.a;return Uo(f)?Wr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Wr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-l),eF:-(f+l)/(f-l),eG:0,eH:0,eI:0,eJ:1})}else{var p=m.a;return Uo(f)?Wr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*l,eG:0,eH:0,eI:-1,eJ:0}):Wr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(f+l)/(f-l),eF:-2*f*l/(f-l),eG:0,eH:0,eI:-1,eJ:0})}}),Nt=v(function(e,r){return(1&e>>r)===1?0:1}),q_=function(e){return $([Jf({ab:1,ac:0,ai:!0}),$l({bz:ir,dc:Yf,dx:e,bO:qf,dR:0,bX:ir,bY:ir}),fl])},J_=M(function(e,r,n){return sr(a(re,function(t){var i=t<<4,o=z(Aa,a(Nt,t,0),a(Nt,t,1),a(Nt,t,2),a(Nt,t,3));return h(Ur,e,L(r,o),q_(i))},a(tn,1,a(Lt,2,n)-1)))}),$n=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},ya=function(e){var r=e;return r},Y_=Xp,qu=function(e){var r=e;return $n(An(r))},Xf=ln({io:0,is:1,dU:0}),ml=Xf,X_={dl:Hr,dS:al,dT:ml,dV:il},Ri=function(e){var r=e;return r},K_=function(e){var r=Ri(aa(e)),n=Tr(An(e)),t=Tr(Fn(e)),i=Tr(Dn(e));return Wr({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dU,eD:t.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},Z_=v(function(e,r){var n=r;return K_(a(Wf,n,e))}),Q_=function(e){return a(Z_,X_,e)},e2=function(e){var r=e;return r.dM},r2=function(e){var r=e;return Dn(r)},n2=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),a2=function(e){var r=e;return Fn(r)},t2=function(e){var r=e2(e.f0),n=fn({dl:Gu(r),dS:r2(r),dT:a2(r),dV:$n(qu(r))}),t=Tt(e.a8),i=t,o=z(oc,n,1,J,$([i]));if(o.$===1)return D;var c=o.a,l=Q_(r),u=a(ke,.99,a(He,Je(e.a3),tc(jf(c)))),f=Hf(c),m=f.a,p=f.b,b=f.c,s=G_(h(n2,m,p,b)),x=a(ke,1.01,a(Qa,s,tc(Nf(c)))),_=a(O_,e.f0,{fM:e.fM,gv:x,hd:u}),S=Y_(_).eJ,C=S?Tr($n(qu(r))):ya(Gu(r)),w=function(){var me=e.cG;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var Te=me.a;return L(3,Te);case 4:var Te=me.a;return L(4,Te);default:return L(5,0)}}(),T=w.a,H=w.b,Z=e.cd,ne=Z,te=a(ol,ne,e.cK),ie=te,ee=Wr({eu:0,ev:C.io,ew:Ia(ie),ex:e.ff,ey:0,ez:C.is,eA:Ea(ie),eB:H_(s),eC:0,eD:C.dU,eE:Ba(ie),eF:T,eG:0,eH:S,eI:0,eJ:H}),q=ar(Ef,ee,l,_,N_,i,{P:D,_:D,hI:D}),de=e.cl;switch(de.$){case 0:var pe=de.a;return sr($([h(Ur,q.P,L(pe,mo),ca),h(Ur,q._,Ja,ca)]));case 1:var pe=de.a;return sr($([h(Ur,q.P,Ja,ca),$([Ou]),h(Ur,q.hI,pe.bF,Vf),$([Uf(0)]),h(Ur,q.P,L(pe,mo),W_),h(Ur,q._,Ja,ca)]));default:var Me=de.a,Se=de.b;return sr($([h(Ur,q.P,L(Se,mo),ca),$([Ou]),a(S_,q.hI,Me),h(J_,q.P,Se,Jn(Me)),h(Ur,q._,Ja,ca)]))}},i2=function(e){return a(Br,"width",k(e))},o2=v(function(e,r){var n=$([K1(1),r_(0),W1(!0),z(Y1,0,0,0,0)]),t=function(){var T=e.cO;switch(T.$){case 0:return G(n,"0",1);case 1:return G(a(P,q1,n),"1",1);default:var H=T.a;return G(n,"0",H)}}(),i=t.a,o=t.b,c=t.c,l=e.a4,u=l.a,f=l.b,m=Uu(f),p=a(hr,"height",k(m)+"px"),b=Uu(u),s=b/m,x=a(Fa,function(T){return t2({fM:s,f0:e.f0,a3:e.a3,a8:T.a8,cd:T.cd,cl:T.cl,ff:c,cG:T.cG,cK:T.cK})},r),_=a(hr,"width",k(b)+"px"),S=e.a1,C=S,w=n_(C);return h(Q1,"div",$([a(hr,"padding","0px"),_,p]),$([L(o,h(i_,i,$([i2(Ee(b*c)),Z1(Ee(m*c)),_,p,a(hr,"display","block"),a(hr,"background-color",w)]),x))]))}),c2=function(e){return a(o2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},Kf=function(e){return e},Ju=Kf({io:.31271,is:.32902}),l2=v(function(e,r){var n=e,t=Tr(r.gm),i=t.io,o=t.is,c=t.dU,l=a(ol,r.c0,r.cT),u=l;return{b0:Ba(u),f3:n,cf:Ea(u),du:0,cz:Ia(u),dJ:1,io:-i,is:-o,dU:-c}}),u2=function(e){return e},$2=function(e){return u2(1.2*a(Lt,2,e))},ho=function(e){return e},v2={$:0},f2=v2,Zf=function(e){return e},m2=v(function(e,r){var n=e,t=r;return _e(t,n)>0}),Yu=function(e){var r=e;return r},s2=function(e){e:for(;;){if(he(e.gZ,nn)&&he(e.g_,nn))return cr;if(a(m2,Je(e.gZ),Je(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:$n(e.fm)};e=r;continue e}else{var n=we(Yu(e.g_)/Xn),t=we(Yu(e.gZ)/Xn),i=Tr(e.fm),o=i.io,c=i.is,l=i.dU,u=a(ol,Zf(1),e.cT),f=u;return{b0:t*Ba(f),f3:!1,cf:t*Ea(f),du:n/t,cz:t*Ia(f),dJ:3,io:o,is:c,dU:l}}}},Xu=function(e){return s2({cT:e.cT,gZ:e.c0,g_:nn,fm:e.fm})},Qf=M(function(e,r,n){return _e(n,e)<0?e:_e(n,r)>0?r:n}),d2=function(e){var r=e;return r},em=function(e){var r=h(Qf,1667,25e3,d2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kf({io:n,is:t})},rm=function(e){return e},p2=em(rm(12e3)),g2=em(rm(5600)),h2=function(e){return{$:2,a:e}},b2=function(e){return h2(e)},_2=v(function(e,r){return{$:2,a:e,b:r}}),nm=function(e){return{$:0,a:e}},Ht=function(e){var r=e;return r},x2=function(e){var r=e;return r.f3},w2=nm(Ja.a),y2=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?L(a(P,t,o),c):L(o,a(P,t,c))});return h(er,n,L(D,D),r)}),S2=function(e){var r=e;return Wr({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},C2=Pe(function(e,r,n,t,i,o,c,l){var u=a(y2,x2,$([Ht(e),Ht(r),Ht(n),Ht(t)])),f=u.a,m=u.b;if(f.b){var p=Y(f,m);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var b=p.a,s=p.b,x=s.a,_=s.b,S=_.a,C=_.b,w=C.a;return a(_2,a(re,S2,f),{bF:a(Sr,b,x),cm:a(Sr,S,w),cn:a(Sr,i,o),co:a(Sr,c,l)})}else return w2}else return nm({bF:a(Sr,e,r),cm:a(Sr,n,t),cn:a(Sr,i,o),co:a(Sr,c,l)})}),L2=M(function(e,r,n){return gt(C2,e,r,n,cr,cr,cr,cr,cr)}),z2=function(e){var r=a(l2,H1(e.hI),{cT:g2,gm:e.hZ,c0:ho(8e4)}),n=Xu({cT:p2,c0:ho(2e4),fm:e.fm}),t=Xu({cT:Ju,c0:ho(15e3),fm:$n(e.fm)}),i=h(L2,r,n,t);return c2({cO:b2(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:$2(15),cl:i,cG:f2,cK:Ju})},P2=function(e){var r=e;return r},Ui=function(e){var r=e;return P2(r.fN)},am=ae(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),M2=ae(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),tm=ae(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),im=ae(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),T2=ae(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),k2=ae(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),D2=ae(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),sl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return z(D2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return z(am,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return z(M2,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return z(tm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return z(k2,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return z(im,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return z(T2,n,t,i,1);case 8:return e;case 9:return e;default:return e}},dl={$:0},F2=Pe(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,m=wi(c(u)),p=a(Oe,m.eO,e),b=a(He,m.eL,r),s=a(Oe,m.eP,n),x=a(He,m.eM,t),_=a(Oe,m.eQ,i),S=a(He,m.eN,o),C=c,w=f;e=p,r=b,n=s,t=x,i=_,o=S,c=C,l=w;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),A2=M(function(e,r,n){var t=wi(e(r));return gt(F2,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),bo=v(function(e,r){var n=e,t=r;return _e(t,n)<1}),om=function(e){return a(bo,e.eL,e.eO)&&a(bo,e.eM,e.eP)&&a(bo,e.eN,e.eQ)?e:{eL:a(He,e.eO,e.eL),eM:a(He,e.eP,e.eM),eN:a(He,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},dt=function(e){var r=e;return r},Wn=function(e){var r=e;return r.io},On=function(e){var r=e;return r.is},qn=function(e){var r=e;return r.dU},cm=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=Wn(n),c=On(n),l=qn(n),u=Wn(t),f=On(t),m=qn(t),p=Wn(i),b=On(i),s=qn(i);return om({eL:a(He,o,a(He,u,p)),eM:a(He,c,a(He,f,b)),eN:a(He,l,a(He,m,s)),eO:a(Oe,o,a(Oe,u,p)),eP:a(Oe,c,a(Oe,f,b)),eQ:a(Oe,l,a(Oe,m,s))})},lm=jp,vr=function(e){return lm(Ri(e))},um=function(e){var r=e;return r},ji=function(e){return lm(um(e))},I2=v(function(e,r){var n=e,t=r;return{io:t.is*n.dU-t.dU*n.is,is:t.dU*n.io-t.io*n.dU,dU:t.io*n.is-t.is*n.io}}),cc=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dU:t.dU-n.dU}}),E2={io:0,is:0,dU:0},B2=v(function(e,r){var n=e,t=r,i=a(zr,we(t.io),a(zr,we(t.is),we(t.dU)));if(i){var o=t.dU/i,c=t.is/i,l=t.io/i,u=ga(l*l+c*c+o*o);return{io:n*l/u,is:n*c/u,dU:n*o/u}}else return E2}),V2=B2(Zf(1)),$m=M(function(e,r,n){var t=a(cc,r,n),i=a(cc,e,r);return V2(a(I2,t,i))}),R2=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=ji(h($m,n,t,i));return G({q:o,cx:vr(n)},{q:o,cx:vr(t)},{q:o,cx:vr(i)})},U2=v(function(e,r){return{$:2,a:e,b:r}}),vm=U2({d5:3,ei:0,eS:4}),j2=function(e){if(e.b){var r=e.a,n=e.b,t=vm(a(re,R2,e)),i=h(A2,cm,r,n);return z(am,i,e,t,0)}else return dl},yr=M(function(e,r,n){return G(e,r,n)}),Ze=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),fm=function(){var e=cn(1),r=cn(1),n=cn(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),c=h(Ze,o,i,t),l=a(ke,.5,e),u=h(Ze,o,i,l),f=a(ke,.5,r),m=h(Ze,o,f,t),p=h(Ze,o,f,l),b=a(ke,.5,n),s=h(Ze,b,i,t),x=h(Ze,b,f,t),_=h(Ze,b,i,l),S=h(Ze,b,f,l);return sl(j2($([h(yr,c,x,s),h(yr,c,m,x),h(yr,u,_,S),h(yr,u,S,p),h(yr,s,x,S),h(yr,s,S,_),h(yr,c,p,m),h(yr,c,u,p),h(yr,c,s,_),h(yr,c,_,u),h(yr,m,S,x),h(yr,m,p,S)])))}(),Gt={$:0},N2=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),H2=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(t),f=ji(h($m,u,l,c)),m={q:f,cx:vr(u)},p={q:f,cx:vr(l)},b={q:f,cx:vr(c)};return a(P,m,a(P,p,a(P,b,n)))}),pl=function(e){var r=e;return r.H},G2=ae(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var c=t.a;return X(h(e,i,o,c))}),lc=4294967295>>>32-tt,uc=is,W2=M(function(e,r,n){e:for(;;){var t=lc&r>>>e,i=a(uc,t,n);if(i.$){var f=i.a;return a(uc,lc&r,f)}else{var o=i.a,c=e-tt,l=r,u=o;e=c,r=l,n=u;continue e}}}),O2=function(e){return e>>>5<<5},q2=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||_e(e,n)>-1?J:_e(e,O2(n))>-1?X(a(uc,lc&e,o)):X(h(W2,t,e,i))}),gl=function(e){var r=e;return r.au},_o=v(function(e,r){return a(q2,e,gl(r))}),J2=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return z(G2,M(function(c,l,u){return G(c,l,u)}),a(_o,t,e),a(_o,i,e),a(_o,o,e))};return a(xn,r,pl(e))},Y2=M(function(e,r,n){e:for(;;){var t=a(Fc,_r,e),i=t.a,o=t.b;if(_e(Vo(i),_r)<0)return a(ev,!0,{C:r,n,r:i});var c=o,l=a(P,K$(i),r),u=n+1;e=c,r=l,n=u;continue e}}),hl=function(e){return e.b?h(Y2,e,D,0):Y$},X2=v(function(e,r){return!a(wt,a(yt,Tg,e),r)}),K2=function(e){var r=e.a;return r},mm=v(function(e,r){var n=K2(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&_e(o,n)<0&&c>=0&&_e(c,n)<0&&l>=0&&_e(l,n)<0};return a(X2,t,r)?{H:r,au:e}:{H:a(kv,t,r),au:e}}),Z2=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=Z2({d5:1,ei:3,eS:4}),ni=v(function(e,r){var n=ya(r),t=ya(e);return L(G(t.io,t.is,t.dU),G(n.io,n.is,n.dU))}),Ku=h(Mt,0,0,0),xo=wr(function(e,r,n,t,i,o){var c=o.a,l=o.b,u=o.c,f=a(Di,a(ni,e,r),i);if(f.$){var p={q:Ku,cx:vr(r)},b={q:Ku,cx:vr(e)},s=u+1,x=u;return G(a(P,G(n,x,s),a(P,G(n,s,t),c)),a(P,p,a(P,b,l)),u+2)}else{var m=f.a;return G(a(P,G(n,m,t),c),l,u)}}),Q2=Ye(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,m=e(u),p=e(l),b=e(c),s=t+2,x=t+1,_=t,S=e,C=r,w=f,T=t+3,H=ar(xo,m,b,s,_,r,ar(xo,p,m,x,s,r,ar(xo,b,p,_,x,r,i)));e=S,r=C,n=w,t=T,i=H;continue e}else{var Z=i,ne=Z.a,te=Z.b;return L(ne,mr(te))}}),ex=Ye(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,m=e(u),p=e(l),b=e(c),s=n+2,x=n+1,_=n,S=h(ha,a(ni,b,m),s,h(ha,a(ni,m,p),x,h(ha,a(ni,p,b),_,i))),C=a(P,G(_,x,s),t),w=e,T=f,H=n+3,Z=C,ne=S;e=w,r=T,n=H,t=Z,i=ne;continue e}else return G(t,i,n)}),Vn=M(function(e,r,n){var t=J2(n),i=h(er,H2(r),D,t),o=F(ex,r,t,0,D,Rc),c=o.a,l=o.b,u=o.c,f=F(Q2,r,l,t,0,G(c,D,u)),m=f.a,p=f.b,b=gn(p)?i:Y(i,p);return h(N2,e,a(mm,hl(b),m),a(kt,b,m))}),$c=function(e){return{H:a(re,function(r){return G(3*r,3*r+1,3*r+2)},a(tn,0,Jn(e)-1)),au:hl(sr(a(re,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},sm=function(e){switch(e.$){case 0:return Gt;case 1:var t=e.a,r=e.b,n=a(re,dt,r);return h(Vn,t,Er,$c(n));case 2:var t=e.a,r=e.b,n=a(re,dt,r);return h(Vn,t,Er,$c(n));case 3:var t=e.a,i=e.b;return h(Vn,t,Er,i);case 4:var t=e.a,i=e.b;return h(Vn,t,function(o){return o.cx},i);case 5:var t=e.a,i=e.b;return h(Vn,t,function(o){return o.cx},i);case 6:var t=e.a,i=e.b;return h(Vn,t,function(o){return o.cx},i);case 7:var t=e.a,i=e.b;return h(Vn,t,function(o){return o.cx},i);case 8:return Gt;case 9:return Gt;default:return Gt}},Zu=sm(fm),Ni=function(e){var r=e;return r.a4},dm={$:0},W=dm,Qe=v(function(e,r){return{$:1,a:e,b:r}}),rx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},nx=1029,ax=function(e){return{$:5,a:e}},pm=function(e){var r=e;return ax(r)},tx=pm(nx),ix=1028,ox=pm(ix),fr=M(function(e,r,n){return r===1?e?a(P,tx,n):a(P,ox,n):n}),gm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},wo=ae(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,c,l,u,f,m,p){return F(Ie,h(fr,l,t,p),gm,rx,n,{b7:e,c,d:o,e:f,f:i,g:u})}))}),bl={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},hm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Kr=ae(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,c,l,u,f,m,p){return F(Ie,h(fr,l,t,p),hm,bl,n,{aO:e,c,d:o,e:f,f:i,g:u})}))}),bm=v(function(e,r){return{$:3,a:e,b:r}}),cx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},_m={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},lx=ae(function(e,r,n,t){return a(bm,n,Pe(function(i,o,c,l,u,f,m,p){return F(Ie,p,_m,cx,t,{aO:e,c,d:o,cw:r,e:f,f:i,g:u})}))}),_l={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Hi=Np,Zr=Ye(function(e,r,n,t,i){return a(Qe,n,Pe(function(o,c,l,u,f,m,p,b){return F(Ie,h(fr,u,i,b),hm,_l,t,{a6:a(Hi,Dt(r),e),c:l,d:c,e:m,f:o,g:f})}))}),ux={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},$x=Ye(function(e,r,n,t,i){return a(bm,t,Pe(function(o,c,l,u,f,m,p,b){return F(Ie,b,_m,ux,i,{a6:a(Hi,Dt(r),e),c:l,d:c,cw:n,e:m,f:o,g:f})}))}),xm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},wm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Wt=ae(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,c,l,u,f,m,p){var b=m.a,s=m.b;return F(Ie,h(fr,l,t,p),wm,xm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,dd:e,c,d:o,e:f,f:i,g:u})}))}),ym={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Sm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},vx=wr(function(e,r,n,t,i,o){return a(Qe,t,Pe(function(c,l,u,f,m,p,b,s){var x=b.a,_=b.b;return F(Ie,h(fr,f,o,s),Sm,ym,i,{U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,de:e,c:u,d:l,bg:r,e:p,f:c,bm:n,g:m})}))}),Cm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},fx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return a(Qe,u,Pe(function(p,b,s,x,_,S,C,w){var T=C.a,H=C.b;return F(Ie,h(fr,x,m,w),Sm,Cm,f,{cS:e,cU:r,cV:o,cW:t,U:H,bF:T.bF,cm:T.cm,cn:T.cn,co:T.co,dh:i,c:s,d:b,bg:c,e:S,dB:n,f:p,bm:l,g:_})}))}}}}}}}}}}},Lm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},Ot=wr(function(e,r,n,t,i,o){return a(Qe,t,Pe(function(c,l,u,f,m,p,b,s){var x=b.a,_=b.b;return F(Ie,h(fr,f,o,s),wm,Lm,i,{cR:e,U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,dg:n,c:u,d:l,e:p,dA:r,f:c,g:m})}))}),mx=function(e){return{$:0,a:e}},Qu=v(function(e,r){return{$:1,a:e,b:r}}),et=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),sx=function(e){return z(Aa,Ia(e),Ea(e),Ba(e),1)},xl=z(Aa,0,0,0,0),ai=v(function(e,r){if(r.$){var t=r.a.E;return L(t,xl)}else{var n=r.a;return L(e,sx(n))}}),zm=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(Qu,L(i,xl),a(et,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Qu,a(ai,i,e),a(et,i,r))}else{var t=n.a.a;return n.b.a,mx(t)}}),dx=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qt=ae(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),px=ae(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),gx=function(e){return a(gr,e,1)},vc=a(gr,0,0),la=v(function(e,r){if(r.$){var t=r.a.E;return L(t,vc)}else{var n=r.a;return L(e,gx(n))}}),Pm=ae(function(e,r,n,t){var i=z(px,e,r,n,t);if(i.a.$){var u=i.a.a.E;return z(qt,L(u,xl),a(la,u,r),a(la,u,n),a(et,u,t))}else if(i.b.$){var u=i.b.a.E;return z(qt,a(ai,u,e),L(u,vc),a(la,u,n),a(et,u,t))}else if(i.c.$){var u=i.c.a.E;return z(qt,a(ai,u,e),a(la,u,r),L(u,vc),a(et,u,t))}else if(i.d.$){var u=i.d.a.E;return z(qt,a(ai,u,e),a(la,u,r),a(la,u,n),L(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(dx,o,c,l)}}),hx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},yo=Ye(function(e,r,n,t,i){return a(Qe,n,Pe(function(o,c,l,u,f,m,p,b){return F(Ie,h(fr,u,i,b),gm,hx,t,{cP:Dt(r),b7:e,c:l,d:c,e:m,f:o,g:f})}))}),Mm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},bx=ae(function(e,r,n,t){return a(Qe,r,Pe(function(i,o,c,l,u,f,m,p){var b=m.a,s=m.b;return F(Ie,h(fr,l,t,p),Mm,ym,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,de:e,c,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),_x=dc(function(e,r,n,t,i,o,c,l,u){return a(Qe,c,Pe(function(f,m,p,b,s,x,_,S){var C=_.a,w=_.b;return F(Ie,h(fr,b,u,S),Mm,Cm,l,{cS:e,cU:r,cV:o,cW:t,U:w,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:p,d:m,bg:e,e:x,dB:n,f,bm:0,g:s})}))}),pt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),xx=function(e){var r=e;return h(pt,r.eO,r.eL,.5)},wx=function(e){var r=e;return h(pt,r.eP,r.eM,.5)},yx=function(e){var r=e;return h(pt,r.eQ,r.eN,.5)},Sx=function(e){return h(Ze,xx(e),wx(e),yx(e))},$e=function(e){var r=Hf(e),n=r.a,t=r.b,i=r.c;return{f4:Ri(Sx(e)),gD:n/2,gE:t/2,gF:i/2}},wl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,c=r.c,t=r.d;return z(wo,l,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return z(wo,l,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return z(wo,l,$e(i),c,t);case 8:return W;case 9:return W;default:return W}}else{var n=e.b.a;switch(r.$){case 0:return W;case 1:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return z(Kr,n,$e(i),c,t);case 8:var i=r.a,c=r.c;return z(Kr,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return z(Kr,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return z(lx,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,f=e.c;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,c=r.c,t=r.d;return F(yo,l,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return F(yo,l,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return F(yo,l,f,$e(i),c,t);case 8:return W;case 9:return W;default:return W}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return W;case 1:var i=r.a,c=r.c,t=r.d;return F(Zr,u,f,$e(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return F(Zr,u,f,$e(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return F(Zr,u,f,$e(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return F(Zr,u,f,$e(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return F(Zr,u,f,$e(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return F(Zr,u,f,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return F(Zr,u,f,$e(i),c,t);case 8:var i=r.a,c=r.c;return F(Zr,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return F(Zr,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return F($x,u,f,o,$e(i),c)}}case 2:e.a;var m=e.b,ne=e.c,p=a(zm,m,ne);if(p.$){var x=p.a,_=x.a;x.b;var S=p.b,C=S.a,w=S.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,c=r.c,s=r.d;return z(bx,_,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return ar(vx,_,C,w,$e(i),c,s);case 8:return W;case 9:return W;default:return W}}else{var b=p.a;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,c=r.c,s=r.d;return z(Wt,b,$e(i),c,s);case 3:return W;case 4:var i=r.a,c=r.c,s=r.d;return z(Wt,b,$e(i),c,s);case 5:return W;case 6:var i=r.a,c=r.c,s=r.d;return z(Wt,b,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return z(Wt,b,$e(i),c,s);case 8:return W;case 9:return W;default:return W}}default:e.a;var T=e.b,H=e.c,Z=e.d,ne=e.e,te=z(Pm,T,H,Z,ne);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,I=te.c,E=I.a,B=I.b,V=te.d,C=V.a,w=V.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,c=r.c,t=r.d;return es(_x,pe,Me,me,Te,E,B,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return fx(pe)(Me)(me)(Te)(E)(B)(C)(w)($e(i))(c)(t);case 8:return W;case 9:return W;default:return W}}else{var ie=te.a,ee=te.b,q=te.c;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,c=r.c,t=r.d;return ar(Ot,ie,ee,q,$e(i),c,t);case 3:return W;case 4:var i=r.a,c=r.c,t=r.d;return ar(Ot,ie,ee,q,$e(i),c,t);case 5:return W;case 6:var i=r.a,c=r.c,t=r.d;return ar(Ot,ie,ee,q,$e(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return ar(Ot,ie,ee,q,$e(i),c,t);case 8:return W;case 9:return W;default:return W}}}}),So=function(e){var r=e;return r.io},Co=function(e){var r=e;return r.is},Lo=function(e){var r=e;return r.dU},Cx=function(e){var r=e,n=Lo(r.dV),t=Co(r.dV),i=So(r.dV),o=Lo(r.dT),c=Co(r.dT),l=So(r.dT),u=Lo(r.dS),f=Co(r.dS),m=So(r.dS);return m*c*n+f*o*i+u*l*t-u*c*i-f*l*n-m*o*t>0},Lx=function(e){var r=Ri(aa(e)),n=Tr(An(e)),t=Tr(Fn(e)),i=Tr(Dn(e));return{ek:Cx(e),t:i.io,u:i.is,v:i.dU,w:t.io,x:t.is,y:t.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},va=v(function(e,r){return{$:5,a:e,b:r}}),Tm=v(function(e,r){var n=r;switch(n.$){case 0:return W;case 5:var t=n.a,i=n.b,o=a(If,t,e);return a(va,o,i);case 1:return a(va,e,n);case 3:return a(va,e,n);case 2:return a(va,e,n);default:return a(va,e,n)}}),km=v(function(e,r){return a(Tm,Lx(e),r)}),Gi=function(e){return{$:2,a:e}},zx=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dU:i*o.dU},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),Px=Wp,Mx=Gp,e$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var m=e.a,p=e.b,b=e.c,s=Mx(t),x=s.io,_=s.is,S=s.dU,C=s.ft,w=Px({ft:C,io:x*m,is:_*p,dU:S*b});return gt(r,n,w,i,o,c,l,u,f)}}}}}}}}}},fc=v(function(e,r){switch(r.$){case 0:return dm;case 5:var n=r.a,t=r.b;return a(va,n,a(fc,e,t));case 1:var i=r.a,o=r.b;return a(Qe,a(zx,e,i),a(e$,e,o));case 3:return r;case 2:var o=r.a;return Gi(a(e$,e,o));default:var c=r.a;return Of(a(re,fc(e),c))}}),yl=v(function(e,r){var n=r;return a(fc,e,n)}),Sl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Dm=7683,Fm=7682,Tx=h(ul,{dc:0,dx:0,dR:15},{bz:ir,bO:Ta,bX:ir,bY:Dm},{bz:ir,bO:Ta,bX:ir,bY:Fm}),kx=h(ul,{dc:0,dx:0,dR:15},{bz:ir,bO:Ta,bX:ir,bY:Fm},{bz:ir,bO:Ta,bX:ir,bY:Dm}),Cl=v(function(e,r){return e?a(P,kx,r):a(P,Tx,r)}),Dx={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Fx=function(e){if(e.$){var r=e.c;return X(Pe(function(n,t,i,o,c,l,u,f){return F(Ie,a(Cl,o,f),Dx,Sl,r,{c:i,d:t,e:l,f:n,cD:u,g:c})}))}else return J},yi=function(e){var r=Fx(e);if(r.$)return W;var n=r.a;return Gi(n)},Ax=ae(function(e,r,n,t){var i=a(wl,n,fm),o=function(){var m=L(e,r);return m.a?m.b?Tt($([i,yi(Zu)])):i:m.b?yi(Zu):W}(),c=Ni(t),l=c.a,u=c.b,f=c.c;return a(km,Ui(t),a(yl,G(l,u,f),o))}),Ix=v(function(e,r){return z(Ax,!0,!0,e,r)}),mc=function(e){return{$:0,a:e}},Am=v(function(e,r){return{$:0,a:e,b:r}}),Ex=function(e){var r=Jc(e),n=r.hu,t=r.gA,i=r.fS;return h(Mt,n,t,i)},Bx=function(e){return a(Am,0,mc(Ex(e)))},Ll=function(e){var r=e;return r.m},rt=function(e){var r=e;return Kn(r)},Vx=v(function(e,r){var n=r;return n/e}),r$=function(e){var r=e;return{io:Kn(r),is:Ma(r)}},Rx=v(function(e,r){var n=e.cx,t=e.q;return a(P,{q:ji(t),cx:vr(n)},r)}),Ux=Li(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=Ba(l.cx),m=Ea(l.cx),p=Ia(l.cx),b=a(_a,e,p),s=a(zr,r,p),x=a(_a,n,m),_=a(zr,t,m),S=a(_a,i,f),C=a(zr,o,f),w=u;e=b,r=s,n=x,t=_,i=S,o=C,c=w;continue e}else return om({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),Im=v(function(e,r){var n=Ba(e.cx),t=Ea(e.cx),i=Ia(e.cx);return pc(Ux,i,i,t,t,n,n,r)}),jx=function(e){var r=h(j$,Rx,D,gl(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,pl(e)),o=a(Im,n,t);return z(tm,o,e,i,0)}else return dl},Em=ln({io:0,is:0,dU:-1}),n$=v(function(e,r){var n=e,t=r,i=n.dT,o=i,c=n.dS,l=c;return{io:t.io*l.io+t.is*o.io,is:t.io*l.is+t.is*o.is,dU:t.io*l.dU+t.is*o.dU}}),Si=function(e){var r=e;return Ma(r)},Ya=function(e){var r=e;return r},sc=function(e){return Zn(2*Xn*e)},a$=Ff({dl:Hr,dS:al,dT:ml}),Bm=function(){var e=72,r=a(Vx,e,sc(1)),n=cn(1),t=Ya(tl),i=Ya(Em),o=cn(1),c=a(ke,.5,o),l=h(Ze,nn,nn,c),u=a(ke,-.5,o),f=h(Ze,nn,nn,u),m=function(s){var x=a(ke,s,r),_=Ya(a(n$,a$,r$(x))),S=a(ke,rt(x),n),C=a(ke,Si(x),n),w=h(Ze,S,C,c),T=h(Ze,S,C,u),H=a(st,e,s+1),Z=a(ke,H,r),ne=Ya(a(n$,a$,r$(Z))),te=a(ke,rt(Z),n),ie=a(ke,Si(Z),n),ee=h(Ze,te,ie,u),q=h(Ze,te,ie,c);return $([G({q:i,cx:f},{q:i,cx:ee},{q:i,cx:T}),G({q:_,cx:T},{q:ne,cx:ee},{q:ne,cx:q}),G({q:_,cx:T},{q:ne,cx:q},{q:_,cx:w}),G({q:t,cx:l},{q:t,cx:w},{q:t,cx:q})])},p=a(re,m,a(tn,0,e-1)),b=$c(sr(p));return sl(jx(b))}(),t$=sm(Bm),Vm=function(e){var r=e;return r.dl},Nx=function(e){var r=e,n=we(r.dU),t=we(r.is),i=we(r.io);if(_e(i,t)<1)if(_e(i,n)<1){var o=ga(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=ga(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if(_e(t,n)<1){var o=ga(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=ga(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},Hx=function(e){var r=Nx(e),n=r,t=n,i=e,o=i,c={io:o.is*t.dU-o.dU*t.is,is:o.dU*t.io-o.io*t.dU,dU:o.io*t.is-o.is*t.io};return L(r,c)},Gx=function(e){var r=nl(e),n=Hx(r),t=n.a,i=n.b;return fn({dl:Vm(e),dS:t,dT:i,dV:r})},Rm=function(e){var r=e;return r.g5},Um=function(e){var r=e;return r.hs},Wx=ae(function(e,r,n,t){var i=Gx(Ll(t)),o=a(wl,n,Bm),c=function(){var p=L(e,r);return p.a?p.b?Tt($([o,yi(t$)])):o:p.b?yi(t$):W}(),l=Um(t),u=l,f=Rm(t),m=f;return a(km,i,a(yl,G(u,u,m),c))}),Ox=v(function(e,r){return z(Wx,!0,!0,e,r)}),i$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},o$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Xa=function(e){var r=dt(e),n=r.a,t=r.b,i=r.c,o=ya(n),c=ya(t),l=ya(i);return Wr({eu:o.io,ev:c.io,ew:l.io,ex:0,ey:o.is,ez:c.is,eA:l.is,eB:0,eC:o.dU,eD:c.dU,eE:l.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},Jt=vm($([G({dI:0},{dI:1},{dI:2})])),qx=v(function(e,r){var n=cm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var i=e.b.a;return a(Qe,t,Pe(function(w,T,H,Z,ne,te,ie,ee){return F(Ie,h(fr,Z,0,ee),i$,bl,Jt,{aO:i,c:H,d:T,e:te,f:w,bU:Xa(r),g:ne})}));case 1:if(e.b.$)return e.a,W;var o=e.b.a,c=e.c;return a(Qe,t,Pe(function(w,T,H,Z,ne,te,ie,ee){return F(Ie,h(fr,Z,0,ee),i$,_l,Jt,{a6:a(Hi,Dt(c),o),c:H,d:T,e:te,f:w,bU:Xa(r),g:ne})}));case 2:e.a;var l=e.b,s=e.c,u=a(zm,l,s);if(u.$)return W;var f=u.a;return a(Qe,t,Pe(function(w,T,H,Z,ne,te,ie,ee){var q=ie.a,de=ie.b;return F(Ie,h(fr,Z,0,ee),o$,xm,Jt,{U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dd:f,c:H,d:T,e:te,f:w,bU:Xa(r),g:ne})}));default:e.a;var m=e.b,p=e.c,b=e.d,s=e.e,x=z(Pm,m,p,b,s);if(x.$)return W;var _=x.a,S=x.b,C=x.c;return a(Qe,t,Pe(function(w,T,H,Z,ne,te,ie,ee){var q=ie.a,de=ie.b;return F(Ie,h(fr,Z,0,ee),o$,Lm,Jt,{cR:_,U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dg:C,c:H,d:T,e:te,dA:S,f:w,bU:Xa(r),g:ne})}))}}),Jx=function(){var e=$([{bl:a(gr,0,1)},{bl:a(gr,1,1)},{bl:a(gr,2,1)},{bl:a(gr,0,-1)},{bl:a(gr,1,-1)},{bl:a(gr,2,-1)}]),r=$([G(0,1,2),G(3,5,4),G(3,4,1),G(3,1,0),G(4,5,2),G(4,2,1),G(5,3,0),G(5,0,2)]);return a(kt,e,r)}(),Yx={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},c$=function(e){return Gi(Pe(function(r,n,t,i,o,c,l,u){return F(Ie,a(Cl,i,u),Yx,Sl,Jx,{c:t,d:n,e:c,f:r,cD:l,bU:Xa(e),g:o})}))},Xx=ae(function(e,r,n,t){var i=a(qx,n,t),o=L(e,r);return o.a?o.b?Tt($([i,c$(t)])):i:o.b?c$(t):W}),Kx=v(function(e,r){return z(Xx,!0,!0,e,r)}),zl=function(e){var r=e;return r},Zx=v(function(e,r){var n=qn(r),t=qn(e),i=On(r),o=On(e),c=Wn(r),l=Wn(e);return{eL:a(He,l,c),eM:a(He,o,i),eN:a(He,t,n),eO:a(Oe,l,c),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),Qx=function(e){var r=zl(e),n=r.a,t=r.b;return a(Zx,n,t)},l$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},ew=v(function(e,r){return{$:1,a:e,b:r}}),rw=ew({d5:2,ei:0,eS:1}),u$=rw($([L({es:0},{es:1})])),nw=v(function(e,r){var n=Qx(r),t=$e(n),i=zl(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var l=e.b.a;return a(Qe,t,Pe(function(f,m,p,b,s,x,_,S){return F(Ie,S,l$,bl,u$,{aO:l,eq:vr(c),er:vr(o),c:p,d:m,e:x,f,g:s})}));case 1:if(e.b.$)return W;var l=e.b.a,u=e.c;return a(Qe,t,Pe(function(m,p,b,s,x,_,S,C){return F(Ie,C,l$,_l,u$,{a6:a(Hi,Dt(u),l),eq:vr(c),er:vr(o),c:b,d:p,e:_,f:m,g:x})}));case 2:return W;default:return W}}),aw=v(function(e,r){return a(nw,e,r)}),Wi=function(e){var r=e;return r.f4},Oi=function(e){var r=e;return r.hs},Yt=function(e){return Zn(Xn*(e/180))},$$=v(function(e,r){var n=e,t=r;return n/t}),tw=Ye(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(P,o,i);if(he(r,e))return c;var l=e,u=r-1,f=n,m=t,p=c;e=l,r=u,n=f,t=m,i=p;continue e}}),v$=v(function(e,r){return e<1?D:F(tw,0,e,e,r,D)}),iw=v(function(e,r){var n=e.cx,t=e.q,i=e.O,o=i,c=o.a,l=o.b;return a(P,{q:ji(t),cx:vr(n),O:a(gr,c,l)},r)}),ow=function(e){var r=h(j$,iw,D,gl(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,pl(e)),o=a(Im,n,t);return z(im,o,e,i,0)}else return dl},jm=v(function(e,r){var n=e,t=r,i=Kn(t);return{io:i*Kn(n),is:i*Ma(n),dU:Ma(t)}}),cw=function(){var e=cn(1),r=72,n=a(tn,0,r-1),t=a(v$,r,a(pt,nn,sc(1))),i=at(r/2),o=a(tn,0,i-1),c=a(v$,i,a(pt,Yt(90),Yt(-90))),l=hl(sr(a(re,function(m){return a(re,function(p){return{q:Ya(a(jm,m,p)),cx:h(Ze,a(ke,rt(p)*rt(m),e),a(ke,rt(p)*Si(m),e),a(ke,Si(p),e)),O:L(a($$,m,sc(1)),a($$,a(Qa,Yt(90),p),Yt(180)))}},c)},t))),u=v(function(m,p){return m*(i+1)+p}),f=sr(a(re,function(m){return sr(a(re,function(p){var b=a(u,m+1,p),s=a(u,m,p),x=a(u,m+1,p+1),_=a(u,m,p+1);return $([G(_,x,b),G(_,b,s)])},o))},n));return sl(ow(a(mm,l,f)))}(),Ci=72,Xt=2*Ci,lw=v(function(e,r){e:for(;;){var n=Xt+1,t=a(st,Xt,2*e+3),i=a(st,Xt,2*e+2),o=2*e+1,c=2*e,l=Xt,u=a(P,G(l,c,i),a(P,G(c,t,i),a(P,G(c,o,t),a(P,G(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),uw=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),$w=v(function(e,r){e:for(;;){var n=h(uw,0,2*Xn,e/Ci),t={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=a(P,t,a(P,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),vw=function(){var e=a($w,Ci-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=a(lw,Ci-1,D);return a(kt,e,r)}(),fw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},f$=function(e){return Gi(Pe(function(r,n,t,i,o,c,l,u){return F(Ie,a(Cl,!0,u),fw,Sl,vw,{aO:h(Mt,0,0,1),c:t,d:n,e:c,f:r,cD:l,g:o})}))},mw=function(e){var r=um(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},sw=v(function(e,r){return a(Tm,mw(e),r)}),dw=ae(function(e,r,n,t){var i=a(wl,n,cw),o=function(){var u=L(e,r);return u.a?u.b?Tt($([i,f$()])):i:u.b?f$():W}(),c=Oi(t),l=c;return a(sw,a(cc,Hr,Wi(t)),a(yl,G(l,l,l),o))}),pw=v(function(e,r){return z(dw,!0,!0,e,r)}),gw=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Nm=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),hw=Ye(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),bw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Am,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(gw,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return h(Nm,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return F(hw,n,t,i,o,c)}},_w=bw,Hm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(Ix,i,r)]);case 1:var i=e.a,n=e.b;return $([a(Kx,i,n)]);case 3:var i=e.a,t=e.b;return $([a(pw,_w(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Ox,i,o)]);case 4:var c=e.a,l=e.b;return $([a(aw,Bx(c),l)]);default:var u=e.a;return a(Fa,Hm,u)}},xw=function(e){return a(Fa,Hm,e)},ww=v(function(e,r){return z2({a1:j1(e.fO),f0:e.f0,a3:N1(.5),cX:e.cX,a4:L(Ru(Ee(e.dC.im)),Ru(Ee(e.dC.gH))),a8:xw(r),hI:!0,hZ:a(jm,Zn(e.hY),Zn(e.h_)),fm:il})}),qi=v(function(e,r){return{$:0,a:e,b:r}}),zo=v(function(e,r){var n=e,t=r;return _e(t,n)>-1}),Po=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),yw=ln({io:-1,is:0,dU:0}),Sw=ln({io:0,is:-1,dU:0}),Cw=wr(function(e,r,n,t,i,o){var c=a(zo,n,o)?tl:Em,l=a(zo,r,i)?Xf:Sw,u=a(zo,e,t)?Af:yw,f=G(Je(a(un,e,t)),Je(a(un,r,i)),Je(a(un,n,o))),m=h(Ze,a(Po,e,t),a(Po,r,i),a(Po,n,o)),p=fn({dl:m,dS:u,dT:l,dV:c});return{fN:p,a4:f}}),Lw=v(function(e,r){return ar(Cw,Wn(e),On(e),qn(e),Wn(r),On(r),qn(r))}),zw=v(function(e,r){var n=r/2;return a(qi,e,a(Lw,h(ic,-n,-n,-n),h(ic,n,n,n)))}),Ji=function(e){return{$:5,a:e}},m$=function(e){return Ji(e)},Mo=function(e){return h(Qf,0,1,e<=.04045?e/12.92:a(Lt,(e+.055)/1.055,2.4))},Pw=function(e){var r=Jc(e),n=r.hu,t=r.gA,i=r.fS;return h(Mt,Mo(n),Mo(t),Mo(i))},Mw=function(e){return h(Nm,0,mc(Pw(e)),mc(0))},Pl=v(function(e,r){return{$:2,a:e,b:r}}),Ml=v(function(e,r){return{$:4,a:e,b:r}}),Tl=v(function(e,r){return{$:3,a:e,b:r}}),kl=v(function(e,r){return{$:1,a:e,b:r}}),Tw=M(function(e,r,n){return{io:e,is:r,dU:n}}),kw=v(function(e,r){return{fN:a(Df,e,Ui(r)),a4:Ni(r)}}),Dw=v(function(e,r){var n=r;return a(ta,a(Pt,e,n.dl),n.gm)}),Fw=v(function(e,r){var n=r;return{m:a(Dw,e,n.m),g5:n.g5,hs:n.hs}}),Aw=function(e){return e},Dl=v(function(e,r){var n=zl(r),t=n.a,i=n.b;return Aw(L(e(t),e(i)))}),Iw=v(function(e,r){return a(Dl,Pt(e),r)}),Fl=v(function(e,r){return{f4:r,hs:Je(e)}}),Ew=v(function(e,r){return a(Fl,Oi(r),a(Pt,e,Wi(r)))}),Al=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return G(e(t),e(i),e(o))}),Bw=v(function(e,r){return a(Al,Pt(e),r)}),Gm=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(Tw,n,t,i);switch(r.$){case 0:var m=r.a,c=r.b;return a(qi,m,a(kw,o,c));case 1:var m=r.a,l=r.b;return a(kl,m,a(Bw,o,l));case 3:var m=r.a,u=r.b;return a(Tl,m,a(Ew,o,u));case 2:var m=r.a,f=r.b;return a(Pl,m,a(Fw,o,f));case 4:var m=r.a,p=r.b;return a(Ml,m,a(Iw,o,p));default:var b=r.a;return Ji(a(re,Gm(G(n,t,i)),b))}}),Vw=function(e){return Gm(G(0,e,0))},To=function(e){return e/255},Rw=M(function(e,r,n){return z(St,To(e),To(r),To(n),1)}),Uw=M(function(e,r,n){return{fN:h(kf,e,r,Ui(n)),a4:Ni(n)}}),jw=v(function(e,r){var n=a(zt,e,r),t=a(ri,e,r);return function(i){var o=i;return a(ta,n(o.dl),t(o.gm))}}),Nw=M(function(e,r,n){var t=n;return{m:h(jw,e,r,t.m),g5:t.g5,hs:t.hs}}),Hw=M(function(e,r,n){return a(Dl,a(zt,e,r),n)}),Gw=M(function(e,r,n){return a(Fl,Oi(n),h(zt,e,r,Wi(n)))}),Ww=M(function(e,r,n){return a(Al,a(zt,e,r),n)}),Wm=M(function(e,r,n){switch(n.$){case 0:var l=n.a,t=n.b;return a(qi,l,h(Uw,e,r,t));case 1:var l=n.a,i=n.b;return a(kl,l,h(Ww,e,r,i));case 3:var l=n.a,o=n.b;return a(Tl,l,h(Gw,e,r,o));case 2:var l=n.a,c=n.b;return a(Pl,l,h(Nw,e,r,c));case 4:var l=n.a,u=n.b;return a(Ml,l,h(Hw,e,r,u));default:var f=n.a;return Ji(a(re,a(Wm,e,r),f))}}),Ow=a(ta,Hr,ml),qw=v(function(e,r){return h(Wm,Ow,Zn(e),r)}),Ft=M(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dU:t.dU+r*(i.dU-t.dU)}}),Jw=M(function(e,r,n){var t=Ui(n),i=Dn(t),o=Fn(t),c=An(t),l=h(Ft,e,r,aa(t)),u=r>=0?fn({dl:l,dS:i,dT:o,dV:c}):fn({dl:l,dS:$n(i),dT:$n(o),dV:$n(c)}),f=Ni(n),m=f.a,p=f.b,b=f.c,s=Je(a(ke,r,m)),x=Je(a(ke,r,p)),_=Je(a(ke,r,b));return{fN:u,a4:G(s,x,_)}}),s$=function(e){return nl(Ll(e))},Yw=function(e){return Vm(Ll(e))},Xw=M(function(e,r,n){var t=Je(a(ke,r,Um(n))),i=Je(a(ke,r,Rm(n))),o=r>=0?s$(n):$n(s$(n)),c=h(Ft,e,r,Yw(n));return{m:a(ta,c,o),g5:i,hs:t}}),Kw=M(function(e,r,n){return a(Dl,a(Ft,e,r),n)}),Zw=M(function(e,r,n){return a(Fl,a(ke,we(r),Oi(n)),h(Ft,e,r,Wi(n)))}),Qw=M(function(e,r,n){return a(Al,a(Ft,e,r),n)}),Om=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return a(qi,c,h(Jw,Hr,e,n));case 1:var c=r.a,t=r.b;return a(kl,c,h(Qw,Hr,e,t));case 3:var c=r.a,i=r.b;return a(Tl,c,h(Zw,Hr,e,i));case 2:var c=r.a,o=r.b;return a(Pl,c,h(Xw,Hr,e,o));case 4:var c=r.a,l=r.b;return a(Ml,c,h(Kw,Hr,e,l));default:var u=r.a;return Ji(a(re,Om(e),u))}}),ey=v(function(e,r){return(r-Z$(r/e)*e)/e}),ry=v(function(e,r){return 360*a(ey,e,r)}),qm=z(St,255/255,255/255,255/255,1),Jm=v(function(e,r){var n=a(st,2,r)?qm:h(Rw,17,147,216),t=hi(a(ry,8,e.d1))/4,i=.707/Kn(Xn/4-t);return m$(r?$([a(zw,Mw(n),1),a(Vw,.3,a(qw,t,a(Om,i,a(Jm,e,r-1))))]):D)}),ny=function(e){return a(Jm,e,20)},ay=v(function(e,r){return a(ww,{fO:qm,f0:U1(e),cX:e.cX,dC:e.dC,hY:hi(90),h_:-hi(180)},$([ny(e)]))}),ty=z(s1,ay,w1,x1,d1);const iy={Main:{init:ty(a(Q,function(e){return lr({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return lr({d1:c,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(p){return lr({fJ:p,gd:m,d4:f,go:u,g4:l,hr:c,hx:o,hJ:i,fl:t})},a(K,"alt",ze))},a(K,"control",ze))},a(K,"down",ze))},a(K,"downs",mi(Ca)))},a(K,"left",ze))},a(K,"pressedKeys",mi(Ca)))},a(K,"right",ze))},a(K,"shift",ze))},a(K,"up",ze))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(c){return a(Q,function(l){return a(Q,function(u){return a(Q,function(f){return lr({d4:f,g$:u,ha:l,hy:c,hz:o,fl:i,io:t,is:n})},a(K,"down",ze))},a(K,"isDown",ze))},a(K,"move",ze))},a(K,"rightDown",ze))},a(K,"rightUp",ze))},a(K,"up",ze))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return lr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return lr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},oy=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function p(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),c(s)&&(oe.keyboard.up=!0),l(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(x=>x!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),c(s)&&(oe.keyboard.up=!1),l(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const x=s/1e3,_=x-oe.clock;_<.009||(oe.dt=_,oe.clock=x,e.ports.tick.send(oe),p(oe)),window.requestAnimationFrame(b)}},cy=iy.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});oy(cy);
