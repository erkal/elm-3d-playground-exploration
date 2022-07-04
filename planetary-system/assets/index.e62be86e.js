const Gu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Gu();function gr(e,r,n){return n.a=e,n.f=r,n}function v(e){return gr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return gr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return gr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function be(e){return gr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ue(e){return gr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ca(e){return gr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return gr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Ft(e){return gr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Se(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Vt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function La(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Wu(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Hu=[];function Iu(e){return e.length}var Xu=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Uu=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),Ou=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Ju=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+qu()),r});function qu(e){return"<internals>"}function qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function mr(e,r){for(var n,a=[],t=it(e,r,0,a);t&&(n=a.pop());t=it(n.a,n.b,0,a));return t}function it(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&qr(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=ci(e),r=ci(r));for(var t in e)if(!it(e[t],r[t],n+1,a))return!1;return!0}v(mr);v(function(e,r){return!mr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return O(e,r)<0});v(function(e,r){return O(e,r)<1});v(function(e,r){return O(e,r)>0});v(function(e,r){return O(e,r)>=0});var Yu=v(function(e,r){var n=O(e,r);return n<0?zc:n?Af:Pc}),kn=0;function P(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function qe(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=er(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=er(e.a,r);return n}var L={$:0};function er(e,r){return{$:1,a:e,b:r}}var Zu=v(er);function _(e){for(var r=L,n=e.length;n--;)r=er(e[n],r);return r}function Pa(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ku=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});be(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});Ue(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});v(function(e,r){return _(Pa(r).sort(function(n,a){return O(e(n),e(a))}))});v(function(e,r){return _(Pa(r).sort(function(n,a){var t=o(e,n,a);return t===Pc?0:t===zc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Qu=v(Math.pow);v(function(e,r){return r%e});var ev=v(function(e,r){var n=r%e;return e===0?qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),rv=Math.PI,nv=Math.cos,av=Math.sin,tv=Math.tan;v(Math.atan2);function ov(e){return e}function iv(e){return e===1/0||e===-1/0}var cv=Math.ceil,lv=Math.floor,uv=Math.round,vv=Math.sqrt,Oo=Math.log,$v=isNaN;function fv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var sv=v(function(e,r){return e+r});function dv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ae(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function mv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function pv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var bv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),gv=v(function(e,r){return r.split(e)}),hv=v(function(e,r){return r.join(e)}),_v=y(function(e,r,n){return n.slice(e,r)});function wv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var yv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),xv=v(function(e,r){return r.indexOf(e)>-1}),Sv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Tv=v(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function nc(e){return e+""}function Cv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ae(n==45?-r:r)}function Lv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ae(r):q}function Pv(e){return Pa(e).join("")}function zv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function kv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Mv(e){return{$:0,a:e}}function Rt(e){return{$:2,b:e}}var Dv=Rt(function(e){return typeof e=="boolean"?ue(e):Je("a BOOL",e)}),Bv=Rt(function(e){return typeof e=="number"?ue(e):Je("a FLOAT",e)}),Av=Rt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Je("a STRING",e)});function Fv(e){return{$:3,b:e}}var Vv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function hr(e,r){return{$:9,f:e,g:r}}var Rv=v(function(e,r){return{$:10,b:r,h:e}}),Ev=v(function(e,r){return hr(e,[r])}),jv=y(function(e,r,n){return hr(e,[r,n])});E(function(e,r,n,a){return hr(e,[r,n,a])});be(function(e,r,n,a,t){return hr(e,[r,n,a,t])});Ue(function(e,r,n,a,t,i){return hr(e,[r,n,a,t,i])});Ca(function(e,r,n,a,t,i,c){return hr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return hr(e,[r,n,a,t,i,c,l])});Ft(function(e,r,n,a,t,i,c,l,u){return hr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ve(e,n)}catch(a){return he(o(qt,"This is not valid JSON! "+a.message,r))}});var ac=v(function(e,r){return Ve(e,r)});function Ve(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Je("null",r);case 3:return Gn(r)?Jo(e.b,r,_):Je("a LIST",r);case 4:return Gn(r)?Jo(e.b,r,Nv):Je("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Je("an OBJECT with a field named `"+n+"`",r);var $=Ve(e.b,r[n]);return He($)?$:he(o(li,n,$.a));case 7:var a=e.e;if(!Gn(r))return Je("an ARRAY",r);if(a>=r.length)return Je("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ve(e.b,r[a]);return He($)?$:he(o(kc,a,$.a));case 8:if(typeof r!="object"||r===null||Gn(r))return Je("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var $=Ve(e.b,r[i]);if(!He($))return he(o(li,i,$.a));t=er(P(i,$.a),t)}return ue(De(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ve(l[u],r);if(!He($))return $;c=c($.a)}return ue(c);case 10:var $=Ve(e.b,r);return He($)?Ve(e.h($.a),r):$;case 11:for(var s=L,d=e.g;d.b;d=d.b){var $=Ve(d.a,r);if(He($))return $;s=er($.a,s)}return he(Ff(De(s)));case 1:return he(o(qt,e.a,r));case 0:return ue(e.a)}}function Jo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ve(e,r[i]);if(!He(c))return he(o(kc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Nv(e){return o(Kf,e.length,function(r){return e[r]})}function Je(e,r){return he(o(qt,"Expecting "+e,r))}function Vr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Vr(e.b,r.b);case 6:return e.d===r.d&&Vr(e.b,r.b);case 7:return e.e===r.e&&Vr(e.b,r.b);case 9:return e.f===r.f&&qo(e.g,r.g);case 10:return e.h===r.h&&Vr(e.b,r.b);case 11:return qo(e.g,r.g)}}function qo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Vr(e[a],r[a]))return!1;return!0}var Gv=v(function(e,r){return JSON.stringify(r,null,e)+""});function tc(e){return e}y(function(e,r,n){return n[e]=r,n});function Pr(e){return{$:0,a:e}}function Wv(e){return{$:1,a:e}}function lr(e){return{$:2,b:e,c:null}}var ct=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Hv(e){return{$:5,b:e}}var Iv=0;function Et(e){var r={$:0,e:Iv++,f:e,g:null,h:[]};return jt(r),r}function oc(e){return lr(function(r){r(Pr(Et(e)))})}function ic(e,r){e.h.push(r),jt(e)}var Xv=v(function(e,r){return lr(function(n){ic(e,r),n(Pr(kn))})}),Na=!1,Yo=[];function jt(e){if(Yo.push(e),!Na){for(Na=!0;e=Yo.shift();)Uv(e);Na=!1}}function Uv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,jt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Nt(r,a,e.e0,e.fM,e.fG,function(){return function(){}})});function Nt(e,r,n,a,t,i){var c=o(ac,e,r?r.flags:void 0);He(c)||qr(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=Ov(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),Ko(l,b.b,t($))}return Ko(l,u.b,t($)),d?{ports:d}:{}}var Ze={};function Ov(e,r){var n;for(var a in Ze){var t=Ze[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=qv(t,r)}return n}function Jv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ct,l,Hv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Et(o(ct,l,e.b))}var Yv=v(function(e,r){return lr(function(n){e.g(r),n(Pr(kn))})});v(function(e,r){return o(Xv,e.h,{$:0,a:r})});function cc(e){return function(r){return{$:1,k:e,l:r}}}function Zv(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Zo=[],Ga=!1;function Ko(e,r,n){if(Zo.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=Zo.shift();)Kv(a.p,a.q,a.r);Ga=!1}}function Kv(e,r,n){var a={};ca(!0,r,a,null),ca(!1,n,a,null);for(var t in e)ic(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function ca(e,r,n,a){switch(r.$){case 1:var t=r.k,i=Qv(e,t,a,r.l);n[t]=e$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ca(e,c.a,n,a);return;case 3:ca(e,r.o,n,{s:r.n,t:a});return}}function Qv(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?Ze[r].e:Ze[r].f;return o(i,t,a)}function e$(e,r,n){return n=n||{i:L,j:L},e?n.i=er(r,n.i):n.j=er(r,n.j),n}function r$(e){Ze[e]&&qr(3)}v(function(e,r){return r});function n$(e,r){return r$(e),Ze[e]={f:a$,u:r,a:t$},cc(e)}var a$=v(function(e,r){return function(n){return e(r(n))}});function t$(e,r){var n=L,a=Ze[e].u,t=Pr(null);Ze[e].b=t,Ze[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(ac,a,c);He(l)||qr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var la,or=typeof document!="undefined"?document:{};function Gt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(dr(e,function(){}),t),{}});function lt(e){return{$:0,a:e}}var lc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Wt(n),e:t,f:e,b:i}})}),zr=lc(void 0),o$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Wt(n),e:t,f:e,b:i}})}),i$=o$(void 0);function c$(e,r,n,a){return{$:3,d:Wt(e),g:r,h:n,i:a}}var l$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function _r(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return _r([e,r],function(){return e(r)})});y(function(e,r,n){return _r([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return _r([e,r,n,a],function(){return p(e,r,n,a)})});be(function(e,r,n,a,t){return _r([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ue(function(e,r,n,a,t,i){return _r([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Ca(function(e,r,n,a,t,i,c){return _r([e,r,n,a,t,i,c],function(){return Se(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return _r([e,r,n,a,t,i,c,l],function(){return Vt(e,r,n,a,t,i,c,l)})});Ft(function(e,r,n,a,t,i,c,l,u){return _r([e,r,n,a,t,i,c,l,u],function(){return La(e,r,n,a,t,i,c,l,u)})});var uc=v(function(e,r){return{$:"a0",n:e,o:r}}),u$=v(function(e,r){return{$:"a1",n:e,o:r}}),vc=v(function(e,r){return{$:"a2",n:e,o:r}}),Mn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function v$(e){return e=="script"?"p":e}function $$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(uc,r.n,f$(e,r.o)):r});function f$(e,r){var n=eo(r);return{$:r.$,a:n?p(Qf,n<3?s$:d$,Pe(e),r.a):o(fa,e,r.a)}}var s$=v(function(e,r){return P(e(r.a),r.b)}),d$=v(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Wt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?Qo(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?Qo(c,t,i):c[t]=i}return r}function Qo(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function dr(e,r){var n=e.$;if(n===5)return dr(e.k||(e.k=e.m()),r);if(n===0)return or.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=dr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ut(c,r,e.d),c}var c=e.f?or.createElementNS(e.f,e.c):or.createElement(e.c);la&&e.c=="a"&&c.addEventListener("click",la(c)),ut(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Gt(c,dr(n===1?l[u]:l[u].b,r));return c}function ut(e,r,n){for(var a in n){var t=n[a];a==="a1"?m$(e,t):a==="a0"?g$(e,r,t):a==="a3"?p$(e,t):a==="a4"?b$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function m$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function p$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function b$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function g$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=h$(r,i),e.addEventListener(t,c,Ht&&{passive:eo(i)<2}),a[t]=c}}var Ht;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Ht=!0}}))}catch{}function h$(e,r){function n(a){var t=n.q,i=Ve(t.a,a);if(!!He(i)){for(var c=eo(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cX,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function _$(e,r){return e.$==r.$&&Vr(e.a,r.a)}function $c(e,r){var n=[];return Ie(e,r,n,0),n}function ge(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ie(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=P$(r),i=1;else{ge(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ie(e.k,r.k,s,0),s.length>0&&ge(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){ge(n,0,a,r);return}(f?!w$(d,m):d!==m)&&ge(n,2,a,m),Ie(g,b,n,a+1);return;case 0:e.a!==r.a&&ge(n,3,a,r.a);return;case 1:ei(e,r,n,a,y$);return;case 2:ei(e,r,n,a,x$);return;case 3:if(e.h!==r.h){ge(n,0,a,r);return}var w=It(e.d,r.d);w&&ge(n,4,a,w);var x=r.i(e.g,r.g);x&&ge(n,5,a,x);return}}}function w$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ei(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ge(n,0,a,r);return}var i=It(e.d,r.d);i&&ge(n,4,a,i),t(e,r,n,a)}function It(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=It(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&_$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function y$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ge(n,6,a,{v:l,i:c-l}):c<l&&ge(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ie(s,i[$],n,++a),a+=s.b||0}}function x$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,h=g.b,T=b.b,k=void 0,G=void 0;if(w===x){f++,Ie(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,W=j.b;G=x===N}if(R){var A=R.a,J=R.b;k=w===A}if(k&&G){f++,Ie(h,J,t,f),on(i,t,w,T,m,c),f+=h.b||0,f++,cn(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(k){f++,on(i,t,x,T,m,c),Ie(h,J,t,f),f+=h.b||0,d+=1,m+=2;continue}if(G){f++,cn(i,t,w,h,f),f+=h.b||0,f++,Ie(W,T,t,f),f+=W.b||0,d+=2,m+=1;continue}if(j&&N===A){f++,cn(i,t,w,h,f),on(i,t,x,T,m,c),f+=h.b||0,f++,Ie(W,J,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],h=g.b;cn(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var Z=Z||[],b=u[m];on(i,t,b.a,b.b,void 0,Z),m++}(t.length>0||c.length>0||Z)&&ge(n,8,a,{w:t,x:c,y:Z})}var fc="_elmW6BL";function on(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ie(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}on(e,r,n+fc,a,t,i)}function cn(e,r,n,a,t){var i=e[n];if(!i){var c=ge(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ie(a,i.z,l,t),ge(r,9,t,{w:l,A:i});return}cn(e,r,n+fc,a,t)}function sc(e,r,n,a){ln(e,r,n,0,0,r.b,a)}function ln(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)sc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&ln(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&ln(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return ln(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=ln(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function dc(e,r,n,a){return n.length===0?e:(sc(e,r,n,a),ua(e,n))}function ua(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=S$(t,a);t===e&&(e=i)}return e}function S$(e,r){switch(r.$){case 0:return T$(e,r.s,r.u);case 4:return ut(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ua(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(dr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ua(e,i.w),e;case 8:return C$(e,r);case 5:return r.s(e);default:qr(10)}}function T$(e,r,n){var a=e.parentNode,t=dr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function C$(e,r){var n=r.s,a=L$(n.y,r);e=ua(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:dr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Gt(e,a),e}function L$(e,r){if(!!e){for(var n=or.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Gt(n,i.c===2?i.s:dr(i.z,r.u))}return n}}function Xt(e){if(e.nodeType===3)return lt(e.textContent);if(e.nodeType!==1)return lt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=er(o(Mn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,$=e.childNodes,a=$.length;a--;)u=er(Xt($[a]),u);return p(zr,l,r,u)}function P$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var z$=E(function(e,r,n,a){return Nt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.fP,l=a.node,u=Xt(l);return mc(i,function($){var s=c($),d=$c(u,s);l=dc(l,u,d,t),u=s})})});E(function(e,r,n,a){return Nt(r,a,e.e0,e.fM,e.fG,function(t,i){var c=e.cU&&e.cU(t),l=e.fP,u=or.title,$=or.body,s=Xt($);return mc(i,function(d){la=c;var m=l(d),f=zr("body")(L)(m.eu),g=$c(s,f);$=dc($,s,g,t),s=f,la=0,u!==m.fK&&(or.title=u=m.fK)})})});var va=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function mc(e,r){r(e);var n=0;function a(){n=n===1?0:(va(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&va(a),n=2)}}v(function(e,r){return o(ao,ro,lr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(ao,ro,lr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(ao,ro,lr(function(){history.replaceState({},"",r),e()}))});var k$={addEventListener:function(){},removeEventListener:function(){}},M$=typeof window!="undefined"?window:k$;y(function(e,r,n){return oc(lr(function(a){function t(i){Et(n(i))}return e.addEventListener(r,t,Ht&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ve(e,r);return He(n)?ae(n.a):q});function pc(e,r){return lr(function(n){va(function(){var a=document.getElementById(e);n(a?Pr(r(a)):Wv(rs(e)))})})}function D$(e){return lr(function(r){va(function(){r(Pr(e()))})})}v(function(e,r){return pc(r,function(n){return n[e](),kn})});v(function(e,r){return D$(function(){return M$.scroll(e,r),kn})});y(function(e,r,n){return pc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,kn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var B$=v(function(e,r){var n="g";e.fe&&(n+="m"),e.ew&&(n+="i");try{return ae(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var A$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?ae(d):q}a.push(C(ul,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?ae($):q}return n(C(ul,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var F$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/V$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function V$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ut=new Float64Array(3),ri=new Float64Array(3),ni=new Float64Array(3),R$=y(function(e,r,n){return new Float64Array([e,r,n])}),E$=function(e){return e[0]},j$=function(e){return e[1]},N$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var G$=function(e){return new Float64Array([e.fT,e.fX,e.c6])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function bc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(bc);function gc(e,r,n){return n===void 0&&(n=new Float64Array(3)),$a(bc(e,r,n),n)}v(gc);function hc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function $a(e,r){r===void 0&&(r=new Float64Array(3));var n=1/hc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var W$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),un=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(un);function vt(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(vt);v(function(e,r){var n,a=Ut,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=un(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(un(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(un(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(un(r,a)+e[14])/n,t});var H$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var I$=function(e){return{fT:e[0],fX:e[1],c6:e[2],em:e[3]}},X$=function(e){return new Float64Array([e.fT,e.fX,e.c6,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/U$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function U$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var O$=new Float64Array(16),J$=new Float64Array(16),q$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},Y$=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function _c(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ue(_c);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return _c(c,l,i,t,n,a)});function wc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ue(wc);E(function(e,r,n,a){return wc(e,r,n,a,-1,1)});function yc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],T=r[0],k=r[1],G=r[2],j=r[3],R=r[4],N=r[5],W=r[6],A=r[7],J=r[8],Z=r[9],oe=r[10],ve=r[11],te=r[12],se=r[13],Le=r[14],ye=r[15];return n[0]=a*T+l*k+d*G+b*j,n[1]=t*T+u*k+m*G+w*j,n[2]=i*T+$*k+f*G+x*j,n[3]=c*T+s*k+g*G+h*j,n[4]=a*R+l*N+d*W+b*A,n[5]=t*R+u*N+m*W+w*A,n[6]=i*R+$*N+f*W+x*A,n[7]=c*R+s*N+g*W+h*A,n[8]=a*J+l*Z+d*oe+b*ve,n[9]=t*J+u*Z+m*oe+w*ve,n[10]=i*J+$*Z+f*oe+x*ve,n[11]=c*J+s*Z+g*oe+h*ve,n[12]=a*te+l*se+d*Le+b*ye,n[13]=t*te+u*se+m*Le+w*ye,n[14]=i*te+$*se+f*Le+x*ye,n[15]=c*te+s*se+g*Le+h*ye,n}v(yc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],T=r[5],k=r[6],G=r[8],j=r[9],R=r[10],N=r[12],W=r[13],A=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*h+c*T+$*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+d*k,n[7]=0,n[8]=a*G+c*j+$*R,n[9]=t*G+l*j+s*R,n[10]=i*G+u*j+d*R,n[11]=0,n[12]=a*N+c*W+$*A+m,n[13]=t*N+l*W+s*A+f,n[14]=i*N+u*W+d*A+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=$a(r,Ut);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/hc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,h=g+f,T=b-m,k=g-f,G=c*c*$+u,j=w+d,R=b+m,N=w-d,W=l*l*$+u,A=n[0],J=n[1],Z=n[2],oe=n[3],ve=n[4],te=n[5],se=n[6],Le=n[7],ye=n[8],fr=n[9],sr=n[10],ja=n[11],Ru=n[12],Eu=n[13],ju=n[14],Nu=n[15];return a[0]=A*x+ve*h+ye*T,a[1]=J*x+te*h+fr*T,a[2]=Z*x+se*h+sr*T,a[3]=oe*x+Le*h+ja*T,a[4]=A*k+ve*G+ye*j,a[5]=J*k+te*G+fr*j,a[6]=Z*k+se*G+sr*j,a[7]=oe*k+Le*G+ja*j,a[8]=A*R+ve*N+ye*W,a[9]=J*R+te*N+fr*W,a[10]=Z*R+se*N+sr*W,a[11]=oe*R+Le*N+ja*W,a[12]=Ru,a[13]=Eu,a[14]=ju,a[15]=Nu,a});function Z$(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Z$);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function K$(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(K$);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=gc(e,r,Ut),t=$a(vt(n,a,ri),ri),i=$a(vt(a,t,ni),ni),c=O$,l=J$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,yc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var ai=0;function xn(e,r){for(;r.b;r=r.b)e(r.a)}function Ot(e){for(var r=0;e.b;e=e.b)r++;return r}var Q$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ef=be(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),rf=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),nf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),af=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),tf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),of=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),lf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),uf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),vf=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},$f=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},ff=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},sf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},xc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Sc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},df=function(e){e.gl.disable(e.gl.CULL_FACE)},mf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},pf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},bf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ti=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],gf=[$f,ff,sf,xc,Sc,df,mf,pf,bf];function oi(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function hf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Tc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function _f(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][x]:w[T][x][h]})}var u=Tc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(Ot(n.b)*s);xn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function wf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=yf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*Ot(r.b),indexBuffer:null,buffers:{}}}function yf(e,r){var n=new Uint32Array(Ot(e)*r),a=0,t;return xn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function ii(e,r){return e+"#"+r}var Cc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),xc(n),Sc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=ii(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=ai++,$||($=oi(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=ai++,s||(s=oi(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=hf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=xf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=ii(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Sf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=wf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=_f(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Tc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,xn(N0(n),i.a),u=0;u<ti.length;u++){var k=n[ti[u]];k.toggle!==n.toggle&&k.enabled&&(gf[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dV,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,b.numIndices)}}return xn(t,e.g),r});function xf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eC(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Sf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Tf=y(function(e,r,n){return c$(r,{g:n,f:{},h:e},Df,Bf)}),Cf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Lf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Pf=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),zf=v(function(e,r){e.contextAttributes.antialias=!0}),kf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Mf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Df(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};xn(function(t){return o(j0,r,t)},e.h);var n=or.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),Q$(function(){return o(Cc,e,n)})):(n=or.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Bf(e,r){return r.f=e.f,Cc(r)}var B=Zu,Wn=Ju,Lc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Wn,e,l,$)}else{var u=c.a;return p(Wn,i,l,u)}});return p(Wn,i,p(Wn,e,r,t),a)}),Jt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Jt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),ci=function(e){return p(Jt,y(function(r,n,a){return o(B,P(r,n),a)}),L,e)},Pc=1,Af=2,zc=0,he=function(e){return{$:1,a:e}},qt=v(function(e,r){return{$:3,a:e,b:r}}),li=v(function(e,r){return{$:0,a:e,b:r}}),kc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Ff=function(e){return{$:2,a:e}},ae=function(e){return{$:0,a:e}},q={$:1},Vf=yv,Rf=Gv,ke=nc,xr=v(function(e,r){return o(hv,e,Pa(r))}),Yt=v(function(e,r){return _(o(gv,e,r))}),Mc=function(e){return o(xr,`
    `,o(Yt,`
`,e))},Dn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Lr=function(e){return p(Dn,v(function(r,n){return n+1}),0,e)},Ef=Ku,jf=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Ir=v(function(e,r){return p(jf,e,r,L)}),Dc=v(function(e,r){return p(Ef,e,o(Ir,0,Lr(r)-1),r)}),Ke=zv,Bc=function(e){var r=Ke(e);return 97<=r&&r<=122},Ac=function(e){var r=Ke(e);return r<=90&&65<=r},Nf=function(e){return Bc(e)||Ac(e)},Gf=function(e){var r=Ke(e);return r<=57&&48<=r},Wf=function(e){return Bc(e)||Ac(e)||Gf(e)},De=function(e){return p(Dn,B,L,e)},Yr=dv,Hf=v(function(e,r){return`

(`+(ke(e+1)+(") "+Mc(If(r))))}),If=function(e){return o(Xf,e,L)},Xf=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=Yr(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return Nf(x)&&o(Vf,Wf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(B,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(ke(i)+"]"),u=c,$=o(B,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(xr,"",De(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(ke(Lr(s))+" ways:"));return o(xr,`

`,o(B,g,o(Dc,Hf,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(xr,"",De(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(xr,"",De(r))+`:

    `):`Problem with the given value:

`}();return g+(Mc(o(Rf,4,f))+(`

`+m))}}),Be=32,$t=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ft=Hu,Zt=cv,Kt=v(function(e,r){return Oo(r)/Oo(e)}),Uf=ov,Sn=Zt(o(Kt,2,Be)),Fc=C($t,0,Sn,ft,ft),Vc=Xu,Rc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Ec=lv,st=Iu,Qe=v(function(e,r){return O(e,r)>0?e:r}),Of=function(e){return{$:0,a:e}},Qt=Uu,Jf=v(function(e,r){e:for(;;){var n=o(Qt,Be,e),a=n.a,t=n.b,i=o(B,Of(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return De(i)}}),qf=function(e){var r=e.a;return r},Yf=v(function(e,r){e:for(;;){var n=Zt(r/Be);if(n===1)return o(Qt,Be,e).a;var a=o(Jf,e,L),t=n;e=a,r=t;continue e}}),jc=v(function(e,r){if(r.l){var n=r.l*Be,a=Ec(o(Kt,Be,n-1)),t=e?De(r.z):r.z,i=o(Yf,t,r.l);return C($t,st(r.p)+n,o(Qe,5,a*Sn),i,r.p)}else return C($t,st(r.p),Sn,ft,r.p)}),Zf=be(function(e,r,n,a,t){e:for(;;){if(r<0)return o(jc,!1,{z:a,l:n/Be|0,p:t});var i=Rc(p(Vc,Be,r,e)),c=e,l=r-Be,u=n,$=o(B,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),Kf=v(function(e,r){if(e<=0)return Fc;var n=e%Be,a=p(Vc,n,e-n,r),t=e-n-Be;return S(Zf,r,t,e,L,a)}),He=function(e){return!e.$},D=Rv,Y=Dv,M=Vv,$e=Bv,fa=Ev,Qf=jv,Pe=Mv,eo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},X=zr("div"),es=function(e){return{$:2,a:e}},Nc=v(function(e,r){return e}),Gc=v(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fp:r.fp,cT:r.cT,fQ:r.fQ}}),Tr=function(e){return e},rs=Tr,ui=Ue(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),ns=xv,Sr=mv,Rr=_v,Bn=v(function(e,r){return e<1?r:p(Rr,e,Sr(r),r)}),za=Tv,ka=function(e){return e===""},Ma=v(function(e,r){return e<1?"":p(Rr,0,e,r)}),Wc=Cv,vi=be(function(e,r,n,a,t){if(ka(t)||o(ns,"@",t))return q;var i=o(za,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Wc(o(Bn,c+1,t));if(l.$===1)return q;var u=l;return ae(Se(ui,e,o(Ma,c,t),u,r,n,a))}else return ae(Se(ui,e,t,q,r,n,a))}),$i=E(function(e,r,n,a){if(ka(a))return q;var t=o(za,"/",a);if(t.b){var i=t.a;return S(vi,e,o(Bn,i,a),r,n,o(Ma,i,a))}else return S(vi,e,"/",r,n,a)}),fi=y(function(e,r,n){if(ka(n))return q;var a=o(za,"?",n);if(a.b){var t=a.a;return C($i,e,ae(o(Bn,t+1,n)),r,o(Ma,t,n))}else return C($i,e,q,r,n)});v(function(e,r){if(ka(r))return q;var n=o(za,"#",r);if(n.b){var a=n.a;return p(fi,e,ae(o(Bn,a+1,r)),o(Ma,a,r))}else return p(fi,e,q,r)});var as=Sv,ro=function(e){},An=Pr,ts=An(0),Hc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(Dn,e,r,De(d)):C(Hc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),ur=y(function(e,r,n){return C(Hc,e,r,0,n)}),ee=v(function(e,r){return p(ur,v(function(n,a){return o(B,e(n),a)}),L,r)}),sa=ct,no=v(function(e,r){return o(sa,function(n){return An(e(n))},r)}),os=y(function(e,r,n){return o(sa,function(a){return o(sa,function(t){return An(o(e,a,t))},n)},r)}),is=function(e){return p(ur,os(B),An(L),e)},cs=Yv,ls=v(function(e,r){var n=r;return oc(o(sa,cs(e),n))}),us=y(function(e,r,n){return o(no,function(a){return 0},is(o(ee,ls(e),r)))}),vs=y(function(e,r,n){return An(0)}),$s=v(function(e,r){var n=r;return o(no,e,n)});Ze.Task=Jv(ts,us,vs,$s);var fs=cc("Task"),ao=v(function(e,r){return fs(o(no,e,r))}),ss=z$,ds=fv,da={$:1},Ic=function(e){return{$:2,a:e}},Da={$:0},Re=v(function(e,r){return{$:0,a:e,b:r}}),ne=y(function(e,r,n){return r(e(n))}),Zr=function(e){var r=e.b.B;return r.a},ms=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ae(o(Re,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Xc=function(e){var r=e.b;return o(Re,Da,r)},pr=v(function(e,r){if(r.$)return e;var n=r.a;return n}),ps=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fp.de?Xc(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,Zr(n).b7)>0?o(ne,ms,pr(o(Re,da,t))):Tr)(o(Re,Ic({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Gc,l.eA,qe(r,{b7:l.b7+r.eJ})),s=o(e,$,u);return o(Re,Da,{B:P($,s),ab:L,T:o(B,t.B,t.T)})}}),Uc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),bs=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),gs=v(function(e,r){return De(p(bs,e,r,L))}),Oc=y(function(e,r,n){if(r<=0)return L;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(B,h,o(B,c,o(B,s,o(B,b,o(gs,r-4,w))))):o(B,h,o(B,c,o(B,s,o(B,b,p(Oc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),hs=v(function(e,r){return p(Oc,0,e,r)}),_s=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(De(n),le(_([a]),t)),c=o(hs,e,i),l=o(Uc,e,i);if(l.b){var u=l.a,$=l.b;return o(Re,da,{B:u,ab:$,T:De(c)})}else{var s=De(c);if(s.b){var d=s.a,m=s.b;return o(Re,da,{B:d,ab:L,T:m})}else return r}}),ws=function(e){var r=e.b;return o(Re,da,r)},ys=function(e){var r=e.b;return o(Re,Ic({cY:Zr(e).b7}),r)},xs=v(function(e,r){switch(e.$){case 1:return ws(r);case 2:return Xc(r);case 3:return ys(r);default:var n=e.a;return o(_s,n,r)}}),Jc=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),Ss=v(function(e,r){return qe(r,{av:e(r.av)})}),Ts=function(e){return{$:3,a:e}},Cs=function(e){return{$:2,a:e}},qc=v(function(e,r){return{$:0,a:e,b:r}}),Ls=v(function(e,r){return{$:1,a:e,b:r}}),Me=v(function(e,r){if(r.$)return q;var n=r.a;return ae(e(n))}),K=function(e){return e<0?-e:e},to=Lv,Ps=y(function(e,r,n){return o(pr,0/0,to(o(e,r,n)))}),Yc=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),zs=bv,Zc=function(e){return p(zs,B,L,e)},ks=v(function(e,r){var n=o(Yc,function(a){return a!=="0"&&a!=="."},Zc(r));return le(e&&n?"-":"",r)}),_e=nc,dt=sv,Kc=kv,Qc=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Yr(n);if(a.$===1)return"01";var t=a.a;return o(dt,"0",Qc(t))}else{var i=Ke(r);return i>=48&&i<57?o(dt,Kc(i+1),n):"0"}},mt=iv,Ms=$v,Ba=function(e){return o(dt,e,"")},el=y(function(e,r,n){return e<=0?n:p(el,e>>1,le(r,r),e&1?le(n,r):n)}),Tn=v(function(e,r){return p(el,e,r,"")}),pt=y(function(e,r,n){return le(n,o(Tn,e-Sr(n),Ba(r)))}),bt=pv,rl=function(e){var r=o(Yt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return P(n,t)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Ds=function(e){var r=o(Yt,"e",_e(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(pr,0,Wc(o(as,"+",t)?o(Bn,1,t):t)),c=rl(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(pr,"0",o(Me,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Me,Jc(Ba),Yr(le(o(Tn,K(i),"0"),$))))):p(pt,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Bs=y(function(e,r,n){if(mt(n)||Ms(n))return _e(n);var a=n<0,t=rl(Ds(K(n))),i=t.a,c=t.b,l=Sr(i)+r,u=le(o(Tn,-l+1,"0"),p(pt,l,"0",le(i,c))),$=Sr(u),s=o(Qe,1,l),d=o(e,a,p(Rr,s,$,u)),m=p(Rr,0,s,u),f=d?bt(o(pr,"1",o(Me,Qc,Yr(bt(m))))):m,g=Sr(f),b=f==="0"?f:r<=0?le(f,o(Tn,K(r),"0")):O(r,Sr(c))<0?p(Rr,0,g-r,f)+("."+p(Rr,g-r,g,f)):le(i+".",p(pt,r,"0",c));return o(ks,a,b)}),nl=Bs(v(function(e,r){var n=Yr(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(Ke(t))})),As=Ps(nl),Fs=y(function(e,r,n){var a=o(Kt,10,K(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(As,t,n)}),al=Yu,oo=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(al,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ae(a);default:var l=e,u=i;e=l,r=u;continue e}}}),I=be(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),rr={$:-2},Xr=be(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(I,0,r,n,S(I,1,$,s,d,m),S(I,1,i,c,l,u))}else return S(I,e,i,c,S(I,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(I,0,$,s,S(I,1,g,b,w,x),S(I,1,r,n,m,t))}else return S(I,e,r,n,a,t)}),gt=y(function(e,r,n){if(n.$===-2)return S(I,0,e,r,rr,rr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(al,e,t);switch(u){case 0:return S(Xr,a,t,i,p(gt,e,r,c),l);case 1:return S(I,a,t,r,c,l);default:return S(Xr,a,t,i,c,p(gt,e,r,l))}}),dn=y(function(e,r,n){var a=p(gt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(I,1,t,i,c,l)}else{var u=a;return u}}),Vs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},tl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(I,0,f,g,S(I,1,n,a,S(I,0,i,c,l,u),b),S(I,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(I,1,n,a,S(I,0,i,c,l,u),S(I,0,s,d,m,x))}else return e},si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(I,0,i,c,S(I,1,u,$,s,d),S(I,1,n,a,m,S(I,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(I,1,n,a,S(I,0,i,c,T,m),S(I,0,g,b,w,x))}else return e},Rs=Ca(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(I,n,l,u,$,S(I,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,si(r)}else break e;else return c.a,c.d,si(r);else break e;return r}}),Qn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(I,r,n,a,Qn(t),l);var u=tl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,$,s,d,Qn(m),f)}else return rr}else return S(I,r,n,a,Qn(t),l)}else return rr},mn=v(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(I,n,a,t,o(mn,e,i),c);var u=tl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Xr,$,s,d,o(mn,e,m),f)}else return rr}else return S(I,n,a,t,o(mn,e,i),c);else return o(Es,e,Vt(Rs,e,r,n,a,t,i,c))}),Es=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(mr(e,a)){var l=Vs(c);if(l.$===-1){var u=l.b,$=l.c;return S(Xr,n,u,$,i,Qn(c))}else return rr}else return S(Xr,n,a,t,i,o(mn,e,c))}else return rr}),js=v(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(I,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(oo,e,n));if(a.$)return o(js,e,n);var t=a.a;return p(dn,e,t,n)}),Ns=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Me(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ls,P(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Me(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(qc,P(i,c),p(Fs,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Me(function(a){return a.$===3?Ts(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Me(function(a){return a.$===2?Cs(n):a}))}},Gs=function(e){return Ss(Ns(e))},Ws=v(function(e,r){return o(ee,Gs(e),r)}),Hs=v(function(e,r){return qe(r,{eA:o(Ws,e,r.eA)})}),Is=v(function(e,r){var n=r.a,a=r.b;return o(Re,n,qe(a,{B:o(Jc,Hs(e),a.B)}))}),Xs=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),Us=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Re,a,qe(t,{B:o(Xs,o(e,i.a,r),i)}))}),Os=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return qe(a,{aL:!a.aL});case 2:var t=n.a;return qe(a,{G:p(ps,e,t,a.G)});case 3:var i=n.a;return qe(a,{G:o(Is,i,a.G)});case 4:var c=n.a;return qe(a,{G:p(Us,r,c,a.G)});default:var l=n.a;return qe(a,{G:o(xs,l,a.G)})}}),Js=v(function(e,r){return o(Re,Da,{B:P(e,r(e)),ab:L,T:L})}),qs=Zv,di=qs(L),ma=Fv,Cn=Av,Ys=n$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Pe({b7:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Pe({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",ma(Cn)))},o(M,"left",Y))},o(M,"pressedKeys",ma(Cn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Pe({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Pe({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Pe({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),Zs=function(e){return{$:4,a:e}},Ks={$:0},Qs=tc,We=v(function(e,r){return o(vc,e,Qs(r))}),U=We("className"),ed=function(e){var r=e.b.B;return r.b},pa=We("id"),rd=l$,ba=rd,nd=u$,pe=nd,ad={$:1},td=function(e){return{$:3,a:e}},od=function(e){return{$:5,a:e}},mi=zr("a"),io=zr("button"),id=Mn("d"),ol=lc("http://www.w3.org/2000/svg"),cd=ol("path"),ld=ol("svg"),ud=Mn("viewBox"),pn=function(e){return o(ld,_([ud("0 0 100 100"),o(pe,"width","100%"),o(pe,"height","100%")]),_([o(cd,_([id(e)]),L)]))},pi=function(e){return o(We,"href",$$(e))},Nr={eH:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eV:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fn:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fo:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fp:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fs:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fC:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fL:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fN:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},vd=function(e){return{$:0,a:e}},il=uc,cl=v(function(e,r){return o(il,e,vd(r))}),co=function(e){return o(cl,"click",Pe(e))},bi=We("target"),$d=We("title"),ht=v(function(e,r){if(r.$===-2)return rr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(I,n,a,o(e,a,t),o(ht,e,i),o(ht,e,c))}),fd=lt,cr=fd,sd=function(e){return p(Jt,y(function(r,n,a){return o(B,n,a)}),L,e)},dd=v(function(e,r){return{$:3,a:e,b:r}}),md=v(function(e,r){return{$:2,a:e,b:r}}),pd=v(function(e,r){return{$:0,a:e,b:r}}),bd=v(function(e,r){return{$:1,a:e,b:r}}),vr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),gd=C(vr,0/255,0/255,0/255,1),hd=tc,_d=v(function(e,r){return o(vc,e,hd(r))}),wd=_d("checked"),Xe=uv,yd=y(function(e,r,n){return le(o(Tn,e-Sr(n),Ba(r)),n)}),ga=ev,ll=function(e){var r=function(n){return n<10?ke(n):Ba(Kc(87+n))};return e<16?r(e):le(ll(e/16|0),r(o(ga,16,e)))},xd=o(ne,ll,o(yd,2,"0")),lo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},Sd=function(e){var r=lo(e),n=r.cN,a=r.cd,t=r.b5;return o(xr,"",o(B,"#",o(ee,o(ne,Xe,xd),_([n*255,a*255,t*255]))))},_t=We("htmlFor"),Td=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),ha=v(function(e,r){if(r.$){var a=r.a;return he(a)}else{var n=r.a;return e(n)}}),Cd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),uo=v(function(e,r){return p(ur,Cd(e),L,r)}),ul=E(function(e,r,n,a){return{e$:r,fb:e,fi:n,fF:a}}),Ld=A$,Pd=Pv,zd=v(function(e,r){if(r.$)return he(e);var n=r.a;return ue(n)}),kd=B$,Md=function(e){return o(kd,{ew:!1,fe:!1},e)},vo=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return q},Dd=v(function(e,r){if(r.$){var a=r.a;return he(a)}else{var n=r.a;return ue(e(n))}}),Bd=function(e){return{$:2,a:e}},Ad=function(e){return{$:0,a:e}},Fd=function(e){return{$:1,a:e}},Wa=v(function(e,r){return Ke(r)-Ke(e)}),Ha=y(function(e,r,n){var a=Ke(n);return O(Ke(e),a)<1&&O(a,Ke(r))<1}),Vd=v(function(e,r){var n=function(t){return O(t,e)<0?ue(t):he(Fd(r))},a=p(Ha,"0","9",r)?ue(o(Wa,"0",r)):p(Ha,"a","z",r)?ue(10+o(Wa,"a",r)):p(Ha,"A","Z",r)?ue(10+o(Wa,"A",r)):he(Ad(r));return o(ha,n,a)}),vl=v(function(e,r){var n=Yr(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(ha,function(c){return o(ha,function(l){return ue(c+l*e)},o(vl,e,i))},o(Vd,e,t))}),Rd=v(function(e,r){return 2<=e&&e<=36?o(vl,e,bt(r)):he(Bd(e))}),Ed=Rd(16),jd=y(function(e,r,n){return C(vr,e,r,n,1)}),Nd=E(function(e,r,n,a){return C(vr,e,r,n,a)}),Fn=Qu,Gd=v(function(e,r){var n=o(Fn,10,e);return Xe(r*n)/n}),Wd=wv,Hd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Zc(n);if(a.b&&!a.b.b){var t=a.a;return Pd(_([t,t]))}else return n};return o(ne,Wd,o(ne,function(n){return o(Me,function(a){return p(Ld,1,a,n)},Md(e))},o(ne,Td(vo),o(ne,Me(function(n){return n.fF}),o(ne,Me(uo(Tr)),o(ne,zd("Parsing hex regex failed"),ha(function(n){var a=o(ee,o(ne,r,o(ne,Ed,Dd(Uf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(C(Nd,t/255,c/255,u/255,o(Gd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(jd,t/255,c/255,u/255))}else break e;return he("Parsing ints from hex failed")})))))))}(),_a=zr("input"),wt=zr("label"),yt=We("name"),$l=v(function(e,r){return p(ur,M,r,e)}),Id=o($l,_(["target","checked"]),Y),Xd=function(e){return o(cl,"change",o(fa,e,Id))},Ud=function(e){return P(e,!0)},Od=function(e){return{$:1,a:e}},Jd=v(function(e,r){return o(il,e,Od(r))}),qd=o($l,_(["target","value"]),Cn),$o=function(e){return o(Jd,"input",o(fa,Ud,o(fa,e,qd)))},fl=We("max"),sl=We("min"),dl=function(e){return o(We,"step",e)},wa=We("type"),fo=We("value"),gi=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(X,L,_([o(wt,_([_t(r)]),_([o(X,_([U("relative w-full")]),_([o(X,_([U("inline-block")]),_([cr(r)])),o(X,_([U("inline-block float-right")]),_([cr(_e(n))]))]))])),o(_a,_([wa("range"),o(pe,"width","100%"),pa(r),yt(r),sl(_e(a)),fl(_e(t)),fo(_e(n)),dl(_e(i)),$o(o(ne,to,o(ne,pr(42),c)))]),L)]))},Yd=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Zd=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(X,L,_([o(X,_([U("mb-2")]),_([o(wt,_([_t(e)]),_([cr(e)]))])),o(_a,_([wa("checkbox"),pa(e),yt(e),Xd(dd(e)),wd(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return gi({cg:e,cs:i,cw:t,cA:pd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return gi({cg:e,cs:i,cw:t,cA:o(ne,Xe,bd(e)),cW:1,c1:c});default:var c=r.a;return o(X,L,_([o(X,_([o(pe,"margin-bottom","6px")]),_([o(wt,_([_t(e)]),_([cr(e)]))])),o(_a,_([wa("color"),o(pe,"width","100%"),o(pe,"height","26px"),o(pe,"padding","0px"),pa(e),yt(e),$o(function(l){return o(md,e,o(Yd,gd,Hd(l)))}),fo(Sd(c))]),L)]))}}),Kd=function(e){return o(X,_([U("p-4 border-y-[0.5px] border-white20")]),_([o(X,_([U("text-lg pb-2")]),_([cr(e.ff)])),o(X,_([U("pl-2 pr-2")]),sd(o(ht,Zd,e.av)))]))},Qd=function(e){return o(X,_([U("text-xs text-white60")]),o(ee,Kd,e))},em=function(e){return o(X,_([U("absolute left-[104px] bottom-2 text-sm text-white40")]),_([cr("clock: "+o(nl,3,Zr(e).b7))]))},rm=function(e){e.a;var r=e.b.T;return o(Me,function(n){return Xe(60/(Zr(e).b7-n))},o(Me,o(ne,qf,function(n){return n.b7}),vo(o(Uc,59,r))))},nm=function(e){return o(X,_([U("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=rm(e);if(r.$===1)return _([cr("... Fps")]);var n=r.a;return _([cr(ke(n)+" Fps")])}())},am=function(e){return{$:0,a:e}},tm=function(e){var r=e.b.T;return Lr(r)},om=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Lr(r)+1+Lr(n)},im=function(e){return o(_a,_([U("absolute w-full"),wa("range"),sl(ke(0)),fl(ke(om(e)-1)),fo(ke(tm(e))),dl(ke(1)),$o(o(ne,to,o(ne,pr(42),o(ne,Xe,am))))]),L)},hi={$:1},cm={$:3},lm={$:2},ml=function(e){return!e.b},_i=v(function(e,r){return o(io,_([U("px-2 bg-black40"),U(r),co(e)]),_([cr("REC")]))}),wi=v(function(e,r){return o(io,_([U("absolute left-[60px] mx-1 px-1 bg-black40"),co(r)]),_([o(X,_([U("w-4 h-6 fill-white80")]),_([pn(e)]))]))}),um=function(e){var r=e.a,n=e.b.ab;return o(X,_([U("py-1")]),_([function(){switch(r.$){case 0:return o(_i,hi,"text-red-500 font-bold");case 1:return o(_i,lm,"text-white80 font-bold");default:return o(X,L,L)}}(),function(){switch(r.$){case 0:return o(X,L,L);case 1:return ml(n)?o(X,L,L):o(wi,Nr.fo,cm);default:return o(wi,Nr.fn,hi)}}()]))},vm=function(e){return o(X,_([U("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([im(e),um(e),nm(e),em(e)]))},$m=function(e){var r=e.a;return mr(r,Da)},fm=v(function(e,r){var n=$m(r.G)?o(X,L,L):o(X,_([U("absolute pointer-events-none w-8 h-8"),o(pe,"left",_e(e.fp.fT+.5*e.cT.fR)+"px"),o(pe,"top",_e(-e.fp.fX+.5*e.cT.eW)+"px")]),_([o(X,_([U(e.fp.e4?"fill-black80":"fill-white40")]),_([pn(Nr.fp)]))]));return o(X,L,_([n]))}),sm=v(function(e,r){var n=o(io,_([U(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),co(ad),$d("Distraction Free Mode")]),_([pn(Nr.f$)])),a=o(X,_([U("absolute w-8 bottom-12")]),_([o(mi,_([U("fill-twitterBlue40 hover:fill-twitterBlue"),pi("https://twitter.com/AzizErkalSelman"),bi("_blank")]),_([pn(Nr.fL)]))])),t=o(X,_([U("absolute w-8 bottom-2")]),_([o(mi,_([U("fill-githubCat40 hover:fill-githubCat"),pi("https://github.com/erkal/elm-3d-playground-exploration"),bi("_blank")]),_([pn(Nr.eQ)]))]));return r.aL?o(X,_([U("fixed w-10 h-10 p-1")]),_([n])):o(X,L,_([o(X,_([U("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(X,_([U("absolute overflow-y-auto left-10 h-full w-[260px] bg-black20 border-x-[0.5px] border-white20")]),_([o(ba,td,Qd(Zr(r.G).eA))])),o(X,_([U("absolute bottom-0 left-[300px] w-[600px] h-20")]),_([o(ba,od,vm(r.G))])),o(fm,e,r)]))}),dm=y(function(e,r,n){var a=ed(n.G),t=Zr(n.G);return o(X,_([U("bg-black40"),U("select-none"),U("antialiased"),U("font-mono"),o(pe,"width",_e(t.cT.fR)+"px"),o(pe,"height",_e(t.cT.eW)+"px")]),_([o(X,_([U("fixed")]),_([o(ba,Nc(Ks),o(e,t,a))])),o(X,_([pa("gui")]),_([o(sm,t,n),o(ba,Zs,o(r,t,a))]))]))}),mm=Ue(function(e,r,n,a,t,i){var c=v(function(u,$){return P(C(Os,r,i,u,$),di)}),l=function(u){var $=o(Gc,n,u.e1);return P({aL:u.e1.cT.fR<500,G:o(Js,$,a)},di)};return ss({e0:l,fG:Nc(Ys(es)),fM:c,fP:o(dm,e,t)})}),pm=E(function(e,r,n,a){return Se(mm,e,r,n,a,v(function(t,i){return o(X,L,L)}),y(function(t,i,c){return c}))}),bm=function(e){return{}},gm=y(function(e,r,n){return{av:n,e5:r,ff:e}}),pl=rr,hm=function(e){return p(Dn,v(function(r,n){var a=r.a,t=r.b;return p(dn,a,t,n)}),pl,e)},_m=y(function(e,r,n){return p(gm,e,r,hm(n))}),yi=_m,In=y(function(e,r,n){var a=r.a,t=r.b;return P(e,o(qc,P(a,t),n))}),ir=rv,wm=_([p(yi,"Camera",!0,_([p(In,"camera distance",P(3,8),4),p(In,"camera azimuth",P(0,2*ir),0),p(In,"camera elevation",P(-ir/2,ir/2),.5)])),p(yi,"Parameters",!0,_([p(In,"sun size",P(.1,.5),.3)]))]),ym=v(function(e,r){return r}),xt=C(vr,52/255,101/255,164/255,1),xm=C(vr,115/255,210/255,22/255,1),so=function(e){return{$:5,a:e}},bl=function(e){return so(e)},mo=v(function(e,r){return{$:4,a:e,b:r}}),gl=function(e){return e},Kr=v(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c6:a.c6+n.c6}}),Sm=v(function(e,r){return gl(P(e,o(Kr,r,e)))}),hl=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),Tm=v(function(e,r){var n=r.a,a=r.b,t=r.c;return p(hl,e(n),e(a),e(t))}),Ee=function(e){return e},$r={fT:0,fX:0,c6:0},Ia=v(function(e,r){return o(mo,e,o(Sm,$r,o(Tm,Ee,r)))}),Cm=C(vr,204/255,0/255,0/255,1),Lm=bl(_([o(Ia,Cm,V(100,0,0)),o(Ia,xm,V(0,100,0)),o(Ia,xt,V(0,0,100))])),Pm=v(function(e,r){return o(Me,function(n){if(n.$)return 0;var a=n.b;return a},o(oo,e,r.av))}),zm=v(function(e,r){return o(pr,0,vo(o(uo,Pm(e),r)))}),km=v(function(e,r){return o(zm,e,r.eA)}),ea=km,br=function(e){return e},vn=function(e){return br(ir*(e/180))},Mm=function(e){return e},St=function(e){var r=e;return-r},Dm=v(function(e,r){var n=e,a=r;return{fT:n.fX*a.c6-n.c6*a.fX,fX:n.c6*a.fT-n.fT*a.c6,c6:n.fT*a.fX-n.fX*a.fT}}),_l=function(e){var r=e;return r.c4},wl=function(e){var r=e;return r.c5},Bm=function(e){return o(Dm,_l(e),wl(e))},Qr=function(e){var r=e;return r.cB},Ur=nv,Or=av,ra=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=Or(c),$=a.eG,s=$,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,h=1-2*(f+x),T=s.c6*u,k=l*T,G=2*(w-k),j=2*(w+k),R=d*T,N=2*(R+b),W=2*(R-b),A=g*T,J=2*(A-m),Z=2*(A+m),oe=T*T,ve=1-2*(x+oe),te=1-2*(f+oe);return{fT:ve*i.fT+G*i.fX+N*i.c6,fX:j*i.fT+te*i.fX+J*i.c6,c6:W*i.fT+Z*i.fX+h*i.c6}}),Vn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Ur(c),u=Or(c),$=a.cB,s=$,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c6-s.c6,g=a.eG,b=g,w=b.fT*u,x=l*w,h=w*w,T=b.fX*u,k=l*T,G=w*T,j=T*T,R=1-2*(h+j),N=b.c6*u,W=l*N,A=2*(G-W),J=2*(G+W),Z=w*N,oe=2*(Z+k),ve=2*(Z-k),te=T*N,se=2*(te-x),Le=2*(te+x),ye=N*N,fr=1-2*(j+ye),sr=1-2*(h+ye);return{fT:s.fT+fr*d+A*m+oe*f,fX:s.fX+J*d+sr*m+se*f,c6:s.c6+ve*d+Le*m+R*f}}),en=function(e){return e},kr=function(e){var r=e;return r.c4},Mr=function(e){var r=e;return r.c5},Dr=function(e){var r=e;return r.c7},yl=y(function(e,r,n){return en({cB:p(Vn,e,r,Qr(n)),c4:p(ra,e,r,kr(n)),c5:p(ra,e,r,Mr(n)),c7:p(ra,e,r,Dr(n))})}),xi=y(function(e,r,n){return p(yl,e(n),r,n)}),xl=function(e){var r=e;return r.eG},Sl=v(function(e,r){return en({cB:o(Kr,e,Qr(r)),c4:kr(r),c5:Mr(r),c7:Dr(r)})}),Am=v(function(e,r){var n=e,a=r;return{fT:n*a.fT,fX:n*a.fX,c6:n*a.c6}}),Fm=y(function(e,r,n){return o(Sl,o(Am,r,e),n)}),Vm=y(function(e,r,n){return p(Fm,xl(e(n)),r,n)}),wr=v(function(e,r){return{eG:r,cB:e}}),Rm=function(e){var r=e;return o(wr,r.cB,r.c4)},Em=function(e){var r=e;return o(wr,r.cB,r.c5)},jm=function(e){var r=e;return o(wr,r.cB,r.c7)},Nm=function(e){var r=en({cB:e.aR,c4:wl(e.dl),c5:Bm(e.dl),c7:_l(e.dl)}),n=p(Vm,jm,e.cc,p(xi,Rm,St(e.bC),p(xi,Em,e.bx,r)));return n},Gm=function(e){return{$:0,a:e}},je=function(e){var r=e;return K(r)},na=function(e){var r=e;return .5*r},Wm=tv,Hm=function(e){var r=e;return Wm(r)},Im=function(e){var r=na(je(e.ej)),n=Hm(r);return{cM:Gm(n),c2:e.c2}},Tl=Tr,Cr=function(e){return e},Xm=Cr({fT:1,fX:0,c6:0}),po=Xm,Cl=Cr({fT:0,fX:0,c6:1}),Aa=Cl,Um=Tl({cB:$r,c4:Aa,c5:po}),Om=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cc;return Im({ej:vn(40),c2:Nm({bx:br(n),cc:Ee(t),bC:br(a),aR:Mm(r),dl:Um})})},Jm=function(e){return Om({bx:o(ea,"camera azimuth",e),cc:o(ea,"camera distance",e),bC:o(ea,"camera elevation",e),aR:{fT:0,fX:0,c6:0}})},Er=function(e){return e*ir/180},bo=v(function(e,r){return{$:2,a:e,b:r}}),qm=y(function(e,r,n){return{k:o(wr,e,r),e9:je(n.e9),fr:je(n.fr)}}),Ll=Cr({fT:0,fX:1,c6:0}),Ym=y(function(e,r,n){return o(bo,e,p(qm,$r,Ll,{e9:Ee(n),fr:Ee(r)}))}),Tt=function(e){return{$:0,a:e}},Pl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),zl=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),Xa=function(e){return p(zl,0,1,e<=.04045?e/12.92:o(Fn,(e+.055)/1.055,2.4))},Rn=R$,Zm=function(e){var r=lo(e),n=r.cN,a=r.cd,t=r.b5;return p(Rn,Xa(n),Xa(a),Xa(t))},aa=function(e){return p(Pl,0,Tt(Zm(e)),Tt(0))},kl=v(function(e,r){return{$:0,a:e,b:r}}),go=v(function(e,r){return{$:3,a:e,b:r}}),Ml=v(function(e,r){return{$:1,a:e,b:r}}),Km=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),Qm=function(e){var r=e;return r},ho=function(e){var r=e;return Qm(r.er)},_o=function(e){var r=e;return r.aK},e0=v(function(e,r){return{er:o(Sl,e,ho(r)),aK:_o(r)}}),r0=v(function(e,r){var n=r;return o(wr,o(Kr,e,n.cB),n.eG)}),n0=v(function(e,r){var n=r;return{k:o(r0,e,n.k),e9:n.e9,fr:n.fr}}),wo=function(e){var r=e;return r},Dl=v(function(e,r){var n=wo(r),a=n.a,t=n.b;return gl(P(e(a),e(t)))}),a0=v(function(e,r){return o(Dl,Kr(e),r)}),yo=function(e){var r=e;return r.ey},xo=function(e){var r=e;return r.fr},So=v(function(e,r){return{ey:r,fr:je(e)}}),t0=v(function(e,r){return o(So,xo(r),o(Kr,e,yo(r)))}),Bl=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),o0=v(function(e,r){return o(Bl,Kr(e),r)}),Al=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Km,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(kl,s,o(e0,i,c));case 1:var s=r.a,l=r.b;return o(Ml,s,o(o0,i,l));case 3:var s=r.a,u=r.b;return o(go,s,o(t0,i,u));case 2:var s=r.a,$=r.b;return o(bo,s,o(n0,i,$));case 4:var s=r.a,d=r.b;return o(mo,s,o(a0,i,d));default:var m=r.a;return so(o(ee,Al(V(n,a,t)),m))}}),Si=function(e){return Al(V(e,0,0))},i0=y(function(e,r,n){return{er:p(yl,e,r,ho(n)),aK:_o(n)}}),c0=v(function(e,r){var n=o(Vn,e,r),a=o(ra,e,r);return function(t){var i=t;return o(wr,n(i.cB),a(i.eG))}}),l0=y(function(e,r,n){var a=n;return{k:p(c0,e,r,a.k),e9:a.e9,fr:a.fr}}),u0=y(function(e,r,n){return o(Dl,o(Vn,e,r),n)}),v0=y(function(e,r,n){return o(So,xo(n),p(Vn,e,r,yo(n)))}),$0=y(function(e,r,n){return o(Bl,o(Vn,e,r),n)}),To=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(kl,l,p(i0,e,r,a));case 1:var l=n.a,t=n.b;return o(Ml,l,p($0,e,r,t));case 3:var l=n.a,i=n.b;return o(go,l,p(v0,e,r,i));case 2:var l=n.a,c=n.b;return o(bo,l,p(l0,e,r,c));case 4:var l=n.a,u=n.b;return o(mo,l,p(u0,e,r,u));default:var $=n.a;return so(o(ee,o(To,e,r),$))}}),Co=Ll,f0=o(wr,$r,Co),Ti=v(function(e,r){return p(To,f0,br(e),r)}),s0=o(wr,$r,Aa),Ci=v(function(e,r){return p(To,s0,br(e),r)}),Ct=v(function(e,r){return o(go,e,o(So,Ee(r),$r))}),d0=v(function(e,r){return(r-Ec(r/e)*e)/e}),Li=v(function(e,r){return 360*o(d0,e,r)}),m0=C(vr,255/255,255/255,255/255,1),p0=function(e){var r=o(Ci,Er(20),p(Ym,aa(xt),.2,.05)),n=o(Ci,Er(20),o(Ti,Er(o(Li,3,e.b7)),o(Si,.2,o(Ct,aa(m0),.04)))),a=o(Ct,aa(xt),.1);return o(Ti,Er(o(Li,10,e.b7)),o(Si,1,bl(_([a,n,r]))))},Ua=function(e){return e/255},b0=y(function(e,r,n){return C(vr,Ua(e),Ua(r),Ua(n),1)}),g0=C(vr,245/255,121/255,0/255,1),h0=function(e){return o(Ct,aa(g0),o(ea,"sun size",e))},_0=function(e){return e},w0=function(e){return Ee(.01*e)},Pi=function(e){return e},y0=function(e){return e},x0=function(e){return{$:0,a:e}},S0=x0,T0={$:3},C0=T0,L0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),P0=L0,z0=v(function(e,r){return r.b?p(ur,B,r,e):e}),Ne=function(e){return p(ur,z0,L,e)},Lo=v(function(e,r){return Ne(o(ee,e,r))}),k0=function(e){return{$:1,a:e}},M0=k0,D0=function(e){return o(Mn,"height",ke(e))},B0=function(e){return i$(v$(e))},A0=B0,F0=function(e){return{$:2,a:e}},V0=F0,R0=function(e){return o(xr,"",e)},E0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Xe(l*1e3)/1e3},c=function(l){return Xe(l*1e4)/100};return R0(_(["rgba(",_e(c(r)),"%,",_e(c(n)),"%,",_e(c(a)),"%,",_e(i(t)),")"]))},j0=v(function(e,r){switch(r.$){case 0:return o(Cf,e,r);case 1:return o(Lf,e,r);case 2:return o(Pf,e,r);case 3:return o(zf,e,r);case 4:return o(kf,e,r);default:return o(Mf,e,r)}}),N0=v(function(e,r){switch(r.$){case 0:return o(rf,e,r);case 1:return o(nf,e,r);case 2:return o(af,e,r);case 3:return o(tf,e,r);case 4:return o(of,e,r);case 5:return o(cf,e,r);case 6:return o(lf,e,r);case 7:return o(uf,e,r);default:return vf(e)}}),G0=y(function(e,r,n){return p(Tf,e,r,n)}),zi=function(e){var r=e;return r},rn=H$,Oa=C(rn,1,1,1,1),Oe=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),W0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),H0=v(function(e,r){var n=e,a=r.fT,t=r.fX;return p(W0,n*a/t,n,n*(1-a-t)/t)}),I0=function(e){var r=e.a,n=e.b,a=e.c;return p(Rn,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Po=v(function(e,r){return I0(o(H0,e,r))}),Fl=v(function(e,r){return{dp:mr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Ye=q$,X0=function(e){return Ye({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Ja=be(function(e,r,n,a,t){var i=a.dp?1:-1,c=C(rn,a.bX,a.bX,a.bX,i);return Se(t,e,c,X0(a),a.dp,r,n)}),Vl=Ue(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Fl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(B,S(Ja,e,r,n,a,g),i.M);return{M:b,U:i.U,fz:i.fz};case 3:var w=t.b,x=o(B,S(Ja,e,r,n,a,w),i.U);return{M:i.M,U:x,fz:i.fz};case 2:var h=t.a,T=o(B,S(Ja,e,r,n,a,h),i.fz);return{M:i.M,U:i.U,fz:T};default:var k=t.a;return p(Dn,C(Vl,e,r,n,a),i,k)}}),U0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Rl=U0,zo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),O0=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,518,r,n,a)},J0=v(function(e,r){return{$:6,a:e,b:r}}),q0=J0,El=_([O0({V:1,W:0,Z:!1}),C(Rl,!1,!1,!1,!1),o(q0,0,1)]),Jr=519,ko=8,jl=15,Gr=7681,Y0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},re=ef,Z0=v(function(e,r){return{$:0,a:e,b:r}}),K0=Z0({df:1,$7:0,dV:5}),ze=F$,Q0=K0(_([{bT:o(ze,-1,-1)},{bT:o(ze,1,-1)},{bT:o(ze,-1,1)},{bT:o(ze,1,1)}])),ep={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},rp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Mo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(ne,c($.bl),o(ne,l($.a8),o(ne,l($.bt),l($.bu))))};return o(u,n,o(u,r,p(rp,a,t,i)))}),Do=function(e){return p(Mo,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Bo=function(e){return S(re,_([Do(e),C(Rl,!1,!1,!1,!1)]),ep,Y0,Q0,{})},np=Bo({a8:Gr,cp:0,cO:ko,bl:Jr,c3:jl,bt:Gr,bu:Gr}),ap=516,ki=5386,we=7680,tp=function(e){return o(Fn,2,e+4)},Nl=function(e){return Bo({a8:we,cp:jl,cO:ko,bl:ap,c3:tp(e),bt:ki,bu:ki})},op=y(function(e,r,n){return Ne(_([p(Oe,e,n,El),_([Nl(r),np])]))}),ip=v(function(e,r){return Ne(o(Dc,op(e),r))}),cp=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,513,r,n,a)},lp=cp({V:1,W:0,Z:!0}),up=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},vp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return up(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},$p=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Mi=v(function(e,r){var n=e,a=r;return p($p,32774,n,a)}),fp=1,Di=771,sp=770,Ao=vp({bv:0,aH:o(Mi,fp,Di),by:0,bA:o(Mi,sp,Di),bF:0,bV:0}),Br=_([lp,Ao]),dp=function(e){var r=e;return r.dO},mp=function(e){var r=e;return r.dP},Gl=function(e){var r=e;return r.dQ},pp=function(e){var r=e;return r.dR},bp=function(e){var r=e;return r.dS},Wl=function(e){var r=e;return r.dT},Wr=v(function(e,r){var n=e,a=r;return a-n}),Hl=function(e){return V(o(Wr,pp(e),dp(e)),o(Wr,bp(e),mp(e)),o(Wr,Wl(e),Gl(e)))},Bi=function(e){var r=e;return Qr(r)},gp=function(e){return e},hp=function(e){return en({cB:gp({fT:e.H,fX:e.I,c6:e.J}),c4:Cr({fT:e.q,fX:e.r,c6:e.s}),c5:Cr({fT:e.t,fX:e.u,c6:e.v}),c7:Cr({fT:e.w,fX:e.x,c6:e.y})})},qa=v(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,$=u;return{fT:a.fT*$.fT+a.fX*$.fX+a.c6*$.c6,fX:a.fT*l.fT+a.fX*l.fX+a.c6*l.c6,c6:a.fT*i.fT+a.fX*i.fX+a.c6*i.c6}}),Il=v(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c6-i.c6,$=n.c7,s=$,d=n.c5,m=d,f=n.c4,g=f;return{fT:c*g.fT+l*g.fX+u*g.c6,fX:c*m.fT+l*m.fX+u*m.c6,c6:c*s.fT+l*s.fX+u*s.c6}}),Xl=v(function(e,r){return{cB:o(Il,e,Qr(r)),c4:o(qa,e,kr(r)),c5:o(qa,e,Mr(r)),c7:o(qa,e,Dr(r))}}),_p=y(function(e,r,n){return{fT:e,fX:r,c6:n}}),ya=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(Qe,n,a)}),ta=v(function(e,r){return O(e,r)<0?e:r}),fe=v(function(e,r){var n=e,a=r;return o(ta,n,a)}),wp=v(function(e,r){var n=ya(r),a=ya(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),Ge=function(e){var r=e;return r},yp=function(e){var r=e;return V(r.fT,r.fX,r.c6)},bn=v(function(e,r){var n=e,a=r;return a+n}),xp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=na(je(a)),c=na(je(n)),l=na(je(t)),u=yp(r),$=u.a,s=u.b,d=u.c;return{dO:o(bn,c,$),dP:o(bn,i,s),dQ:o(bn,l,d),dR:o(Wr,c,$),dS:o(Wr,i,s),dT:o(Wr,l,d)}}),Ai=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,$=t.fX*r,s=t.fT*r,d=Ge(Dr(e)),m=K(l*d.fT)+K(c*d.fX)+K(i*d.c6),f=Ge(Mr(e)),g=K(l*f.fT)+K(c*f.fX)+K(i*f.c6),b=Ge(kr(e)),w=K(l*b.fT)+K(c*b.fX)+K(i*b.c6),x=o(xp,V(w,g,m),o(Il,e,p(_p,s,$,u)));if(a.$)return ae(x);var h=a.a;return ae(o(wp,h,x))}),Lt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(Ai,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(Ai,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Lt,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(Xl,hp($),e),m=r*$.bX,f=e,g=r,b=C(Lt,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),nn=E$,an=j$,tn=N$,Ul=function(e){return{$:4,a:e}},Sp=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),En=function(e){return Ul(o(Sp,e,L))},Tp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Cp=function(e){var r=e;return r},Fi=Bo({a8:Gr,cp:0,cO:ko,bl:Jr,c3:255,bt:Gr,bu:Gr}),jr=vv,tr=0,Lp=function(e){var r=e,n=o(Qe,K(r.fT),o(Qe,K(r.fX),K(r.c6)));if(n){var a=r.c6/n,t=r.fX/n,i=r.fT/n,c=jr(i*i+t*t+a*a);return c*n}else return tr},xe={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fT:0,fX:0,c6:0},Fe=v(function(e,r){var n=e,a=r;return Ye({dx:n.fT,dy:n.bV,dz:a.fT,dA:a.bV,dB:n.fX,dC:n.bF,dD:a.fX,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),$n=P({bd:o(Fe,xe,xe),bK:o(Fe,xe,xe),bL:o(Fe,xe,xe),bM:o(Fe,xe,xe)},C(rn,0,0,0,0)),ie=v(function(e,r){var n=r;return e*n}),Ol=514,Jl=function(e){var r=e.Z,n=e.W,a=e.V;return C(zo,515,r,n,a)},ql=240,Pp=_([Jl({V:1,W:0,Z:!0}),Do({a8:we,cp:ql,cO:0,bl:Ol,c3:0,bt:we,bu:we}),Ao]),zp=v(function(e,r){var n=e,a=r.fg,t=r.eP,i=r.eq,c=je(a),l=c,u=je(t),$=u,s=n.cM;if(s.$){var m=s.a;return mt($)?Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Ye({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return mt($)?Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Ye({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),Xn=v(function(e,r){return(1&e>>r)===1?0:1}),kp=function(e){return _([Jl({V:1,W:0,Z:!0}),Do({a8:we,cp:ql,cO:e,bl:Ol,c3:0,bt:we,bu:we}),Ao])},Mp=y(function(e,r,n){return Ne(o(ee,function(a){var t=a<<4,i=C(rn,o(Xn,a,0),o(Xn,a,1),o(Xn,a,2),o(Xn,a,3));return p(Oe,e,P(r,i),kp(t))},o(Ir,1,o(Fn,2,n)-1)))}),Ln=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c6:-r.c6}},Hr=function(e){var r=e;return r},Dp=Y$,Vi=function(e){var r=e;return Ln(Dr(r))},Bp={cB:$r,c4:po,c5:Co,c7:Aa},Fa=function(e){var r=e;return r},Ap=function(e){var r=Fa(Qr(e)),n=Ge(Dr(e)),a=Ge(Mr(e)),t=Ge(kr(e));return Ye({dx:t.fT,dy:a.fT,dz:n.fT,dA:r.fT,dB:t.fX,dC:a.fX,dD:n.fX,dE:r.fX,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Fp=v(function(e,r){var n=r;return Ap(o(Xl,n,e))}),Vp=function(e){return o(Fp,Bp,e)},Rp=function(e){var r=e;return r.c2},Ep=function(e){var r=e;return kr(r)},jp=function(e){var r=e;return Mr(r)},Np=function(e){var r=Rp(e.ev),n=en({cB:Bi(r),c4:Ep(r),c5:jp(r),c7:Ln(Vi(r))}),a=En(e.aP),t=a,i=C(Lt,n,1,q,_([t]));if(i.$===1)return L;var c=i.a,l=Vp(r),u=o(ie,.99,o(ce,je(e.aJ),St(Gl(c)))),$=Hl(c),s=$.a,d=$.b,m=$.c,f=Lp(p(hl,s,d,m)),g=o(ie,1.01,o(bn,f,St(Wl(c)))),b=o(zp,e.ev,{eq:e.eq,eP:g,fg:u}),w=Dp(b).dM,x=w?Ge(Ln(Vi(r))):Hr(Bi(r)),h=function(){var te=e.bZ;switch(te.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var se=te.a;return P(3,se);case 4:var se=te.a;return P(4,se);default:return P(5,0)}}(),T=h.a,k=h.b,G=e.bD,j=G,R=o(Po,j,e.b$),N=R,W=Ye({dx:0,dy:x.fT,dz:nn(N),dA:e.ec,dB:0,dC:x.fX,dD:an(N),dE:Cp(f),dF:0,dG:x.c6,dH:tn(N),dI:T,dJ:0,dK:w,dL:0,dM:k}),A=Se(Vl,W,l,b,Tp,t,{M:L,U:L,fz:L}),J=e.bJ;switch(J.$){case 0:var Z=J.a;return Ne(_([p(Oe,A.M,P(Z,Oa),Br),p(Oe,A.U,$n,Br)]));case 1:var Z=J.a;return Ne(_([p(Oe,A.M,$n,Br),_([Fi]),p(Oe,A.fz,Z.bd,El),_([Nl(0)]),p(Oe,A.M,P(Z,Oa),Pp),p(Oe,A.U,$n,Br)]));default:var oe=J.a,ve=J.b;return Ne(_([p(Oe,A.M,P(ve,Oa),Br),_([Fi]),o(ip,A.fz,oe),p(Mp,A.M,ve,Lr(oe)),p(Oe,A.U,$n,Br)]))}},Gp=function(e){return o(Mn,"width",ke(e))},Wp=v(function(e,r){var n=_([M0(1),V0(0),S0(!0),C(P0,0,0,0,0)]),a=function(){var T=e.b0;switch(T.$){case 0:return V(n,"0",1);case 1:return V(o(B,C0,n),"1",1);default:var k=T.a;return V(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=zi($),d=o(pe,"height",ke(s)+"px"),m=zi(u),f=m/s,g=o(Lo,function(T){return Np({eq:f,ev:e.ev,aJ:e.aJ,aP:T.aP,bD:T.bD,bJ:T.bJ,ec:c,bZ:T.bZ,b$:T.b$})},r),b=o(pe,"width",ke(m)+"px"),w=e.aI,x=w,h=E0(x);return p(A0,"div",_([o(pe,"padding","0px"),b,d]),_([P(i,p(G0,t,_([Gp(Xe(m*c)),D0(Xe(s*c)),b,d,o(pe,"display","block"),o(pe,"background-color",h)]),g))]))}),Hp=function(e){return o(Wp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},_([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Yl=function(e){return e},Ri=Yl({fT:.31271,fX:.32902}),Ip=v(function(e,r){var n=e,a=Ge(r.eG),t=a.fT,i=a.fX,c=a.c6,l=o(Po,r.ce,r.b6),u=l;return{by:tn(u),ex:n,bF:an(u),cK:0,bV:nn(u),c_:1,fT:-t,fX:-i,c6:-c}}),Xp=function(e){return e},Up=function(e){return Xp(1.2*o(Fn,2,e))},Ya=function(e){return e},Op={$:0},Jp=Op,Zl=function(e){return e},qp=v(function(e,r){var n=e,a=r;return O(a,n)>0}),Ei=function(e){var r=e;return r},Yp=function(e){e:for(;;){if(mr(e.e2,tr)&&mr(e.e3,tr))return xe;if(o(qp,je(e.e2),je(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:Ln(e.ei)};e=r;continue e}else{var n=K(Ei(e.e3)/ir),a=K(Ei(e.e2)/ir),t=Ge(e.ei),i=t.fT,c=t.fX,l=t.c6,u=o(Po,Zl(1),e.b6),$=u;return{by:a*tn($),ex:!1,bF:a*an($),cK:n/a,bV:a*nn($),c_:3,fT:i,fX:c,c6:l}}}},ji=function(e){return Yp({b6:e.b6,e2:e.ce,e3:tr,ei:e.ei})},Zp=function(e){var r=e;return r},Kl=function(e){var r=p(zl,1667,25e3,Zp(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Yl({fT:n,fX:a})},Ql=function(e){return e},Kp=Kl(Ql(12e3)),Qp=Kl(Ql(5600)),e3=function(e){return{$:2,a:e}},r3=function(e){return e3(e)},n3=v(function(e,r){return{$:2,a:e,b:r}}),eu=function(e){return{$:0,a:e}},Un=function(e){var r=e;return r},a3=function(e){var r=e;return r.ex},t3=eu($n.a),o3=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?P(o(B,a,i),c):P(i,o(B,a,c))});return p(ur,n,P(L,L),r)}),i3=function(e){var r=e;return Ye({dx:r.fT,dy:r.bV,dz:0,dA:0,dB:r.fX,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},c3=Q(function(e,r,n,a,t,i,c,l){var u=o(o3,a3,_([Un(e),Un(r),Un(n),Un(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(n3,o(ee,i3,$),{bd:o(Fe,m,g),bK:o(Fe,w,h),bL:o(Fe,t,i),bM:o(Fe,c,l)})}else return t3}else return eu({bd:o(Fe,e,r),bK:o(Fe,n,a),bL:o(Fe,t,i),bM:o(Fe,c,l)})}),l3=y(function(e,r,n){return La(c3,e,r,n,xe,xe,xe,xe,xe)}),u3=function(e){var r=o(Ip,y0(e.fz),{b6:Qp,eG:e.fI,ce:Ya(8e4)}),n=ji({b6:Kp,ce:Ya(2e4),ei:e.ei}),a=ji({b6:Ri,ce:Ya(15e3),ei:Ln(e.ei)}),t=p(l3,r,n,a);return Hp({b0:r3(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Up(15),bJ:t,bZ:Jp,b$:Ri})},ru=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),v3=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),nu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),au=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),$3=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),f3=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),s3=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Fo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(s3,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(ru,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(v3,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(nu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(f3,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(au,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C($3,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Vo={$:0},d3=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=ya(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),b=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,h=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),m3=y(function(e,r,n){var a=ya(e(r));return La(d3,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Za=v(function(e,r){var n=e,a=r;return O(a,n)<1}),tu=function(e){return o(Za,e.dO,e.dR)&&o(Za,e.dP,e.dS)&&o(Za,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Pn=function(e){var r=e;return r},gn=function(e){var r=e;return r.fT},hn=function(e){var r=e;return r.fX},_n=function(e){var r=e;return r.c6},ou=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=gn(n),c=hn(n),l=_n(n),u=gn(a),$=hn(a),s=_n(a),d=gn(t),m=hn(t),f=_n(t);return tu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,$,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,$,m)),dT:o(fe,l,o(fe,s,f))})},iu=G$,Te=function(e){return iu(Fa(e))},cu=function(e){var r=e;return r},Va=function(e){return iu(cu(e))},p3=v(function(e,r){var n=e,a=r;return{fT:a.fX*n.c6-a.c6*n.fX,fX:a.c6*n.fT-a.fT*n.c6,c6:a.fT*n.fX-a.fX*n.fT}}),Pt=v(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c6:a.c6-n.c6}}),b3={fT:0,fX:0,c6:0},g3=v(function(e,r){var n=e,a=r,t=o(Qe,K(a.fT),o(Qe,K(a.fX),K(a.c6)));if(t){var i=a.c6/t,c=a.fX/t,l=a.fT/t,u=jr(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c6:n*i/u}}else return b3}),h3=g3(Zl(1)),lu=y(function(e,r,n){var a=o(Pt,r,n),t=o(Pt,e,r);return h3(o(p3,a,t))}),_3=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Va(p(lu,n,a,t));return V({o:i,bT:Te(n)},{o:i,bT:Te(a)},{o:i,bT:Te(t)})},w3=v(function(e,r){return{$:2,a:e,b:r}}),uu=w3({df:3,$7:0,dV:4}),y3=function(e){if(e.b){var r=e.a,n=e.b,a=uu(o(ee,_3,e)),t=p(m3,ou,r,n);return C(ru,t,e,a,0)}else return Vo},Ae=y(function(e,r,n){return V(e,r,n)}),me=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c6:i}}),vu=function(){var e=Ee(1),r=Ee(1),n=Ee(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(me,i,t,a),l=o(ie,.5,e),u=p(me,i,t,l),$=o(ie,.5,r),s=p(me,i,$,a),d=p(me,i,$,l),m=o(ie,.5,n),f=p(me,m,t,a),g=p(me,m,$,a),b=p(me,m,t,l),w=p(me,m,$,l);return Fo(y3(_([p(Ae,c,g,f),p(Ae,c,s,g),p(Ae,u,b,w),p(Ae,u,w,d),p(Ae,f,g,w),p(Ae,f,w,b),p(Ae,c,d,s),p(Ae,c,u,d),p(Ae,c,f,b),p(Ae,c,b,u),p(Ae,s,w,g),p(Ae,s,d,w)])))}(),On={$:0},x3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),S3=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Va(p(lu,u,l,c)),s={o:$,bT:Te(u)},d={o:$,bT:Te(l)},m={o:$,bT:Te(c)};return o(B,s,o(B,d,o(B,m,n)))}),Ro=function(e){var r=e;return r.D},T3=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ae(p(e,t,i,c))}),zt=4294967295>>>32-Sn,kt=Ou,C3=y(function(e,r,n){e:for(;;){var a=zt&r>>>e,t=o(kt,a,n);if(t.$){var $=t.a;return o(kt,zt&r,$)}else{var i=t.a,c=e-Sn,l=r,u=i;e=c,r=l,n=u;continue e}}}),L3=function(e){return e>>>5<<5},P3=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,L3(n))>-1?ae(o(kt,zt&e,i)):ae(p(C3,a,e,t))}),Eo=function(e){var r=e;return r.ah},Ka=v(function(e,r){return o(P3,e,Eo(r))}),z3=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(T3,y(function(c,l,u){return V(c,l,u)}),o(Ka,a,e),o(Ka,t,e),o(Ka,i,e))};return o(uo,r,Ro(e))},k3=y(function(e,r,n){e:for(;;){var a=o(Qt,Be,e),t=a.a,i=a.b;if(O(st(t),Be)<0)return o(jc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Rc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),jo=function(e){return e.b?p(k3,e,L,0):Fc},M3=y(function(e,r,n){return e(r(n))}),D3=v(function(e,r){return!o(Yc,o(M3,ds,e),r)}),B3=v(function(e,r){return p(ur,v(function(n,a){return e(n)?o(B,n,a):a}),L,r)}),A3=function(e){var r=e.a;return r},$u=v(function(e,r){var n=A3(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(D3,a,r)?{D:r,ah:e}:{D:o(B3,a,r),ah:e}}),F3=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=F3({df:1,$7:3,dV:4}),oa=v(function(e,r){var n=Hr(r),a=Hr(e);return P(V(a.fT,a.fX,a.c6),V(n.fT,n.fX,n.c6))}),Ni=p(Rn,0,0,0),Qa=Ue(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(oo,o(oa,e,r),t);if($.$){var d={o:Ni,bT:Te(r)},m={o:Ni,bT:Te(e)},f=u+1,g=u;return V(o(B,V(n,g,f),o(B,V(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=$.a;return V(o(B,V(n,s,a),c),l,u)}}),V3=be(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=$,T=a+3,k=Se(Qa,s,m,f,b,r,Se(Qa,d,s,g,f,r,Se(Qa,m,d,b,g,r,t)));e=w,r=x,n=h,a=T,t=k;continue e}else{var G=t,j=G.a,R=G.b;return P(j,De(R))}}),R3=be(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(dn,o(oa,m,s),f,p(dn,o(oa,s,d),g,p(dn,o(oa,d,m),b,t))),x=o(B,V(b,g,f),a),h=e,T=$,k=n+3,G=x,j=w;e=h,r=T,n=k,a=G,t=j;continue e}else return V(a,t,n)}),yr=y(function(e,r,n){var a=z3(n),t=p(ur,S3(r),L,a),i=S(R3,r,a,0,L,pl),c=i.a,l=i.b,u=i.c,$=S(V3,r,l,a,0,V(c,L,u)),s=$.a,d=$.b,m=ml(d)?t:le(t,d);return p(x3,e,o($u,jo(m),s),o(jn,m,s))}),Mt=function(e){return{D:o(ee,function(r){return V(3*r,3*r+1,3*r+2)},o(Ir,0,Lr(e)-1)),ah:jo(Ne(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},fu=function(e){switch(e.$){case 0:return On;case 1:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(yr,a,Tr,Mt(n));case 2:var a=e.a,r=e.b,n=o(ee,Pn,r);return p(yr,a,Tr,Mt(n));case 3:var a=e.a,t=e.b;return p(yr,a,Tr,t);case 4:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(yr,a,function(i){return i.bT},t);case 8:return On;case 9:return On;default:return On}},Gi=fu(vu),su={$:0},z=su,de=v(function(e,r){return{$:1,a:e,b:r}}),E3={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},j3=1029,N3=function(e){return{$:5,a:e}},du=function(e){var r=e;return N3(r)},G3=du(j3),W3=1028,H3=du(W3),Ce=y(function(e,r,n){return r===1?e?o(B,G3,n):o(B,H3,n):n}),mu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},et=E(function(e,r,n,a){return o(de,r,Q(function(t,i,c,l,u,$,s,d){return S(re,p(Ce,l,a,d),mu,E3,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),No={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},pu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nr=E(function(e,r,n,a){return o(de,r,Q(function(t,i,c,l,u,$,s,d){return S(re,p(Ce,l,a,d),pu,No,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),bu=v(function(e,r){return{$:3,a:e,b:r}}),I3={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},gu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},X3=E(function(e,r,n,a){return o(bu,n,Q(function(t,i,c,l,u,$,s,d){return S(re,d,gu,I3,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),Go={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ra=W$,ar=be(function(e,r,n,a,t){return o(de,n,Q(function(i,c,l,u,$,s,d,m){return S(re,p(Ce,u,t,m),pu,Go,a,{aN:o(Ra,Nn(r),e),b:l,c,d:s,e:i,f:$})}))}),U3={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},O3=be(function(e,r,n,a,t){return o(bu,a,Q(function(i,c,l,u,$,s,d,m){return S(re,m,gu,U3,t,{aN:o(Ra,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),hu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},_u={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Jn=E(function(e,r,n,a){return o(de,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(re,p(Ce,l,a,d),_u,hu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,d:$,e:t,f:u})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},J3=Ue(function(e,r,n,a,t,i){return o(de,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(re,p(Ce,$,i,f),yu,wu,t,{P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),xu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},q3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(de,u,Q(function(d,m,f,g,b,w,x,h){var T=x.a,k=x.b;return S(re,p(Ce,g,s,h),yu,xu,$,{b4:e,b8:r,b9:i,ca:a,P:k,bd:T.bd,bK:T.bK,bL:T.bL,bM:T.bM,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:b})}))}}}}}}}}}}},Su={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},qn=Ue(function(e,r,n,a,t,i){return o(de,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(re,p(Ce,$,i,f),_u,Su,t,{b3:e,P:b,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),Y3=function(e){return{$:0,a:e}},Wi=v(function(e,r){return{$:1,a:e,b:r}}),wn=v(function(e,r){if(r.$){var n=r.a.C;return P(n,1)}else return r.a,P(e,0)}),Z3=function(e){return C(rn,nn(e),an(e),tn(e),1)},Wo=C(rn,0,0,0,0),ia=v(function(e,r){if(r.$){var a=r.a.C;return P(a,Wo)}else{var n=r.a;return P(e,Z3(n))}}),Tu=v(function(e,r){var n=P(e,r);if(n.a.$){var t=n.a.a.C;return o(Wi,P(t,Wo),o(wn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Wi,o(ia,t,e),o(wn,t,r))}else{var a=n.a.a;return n.b.a,Y3(a)}}),K3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Q3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),eb=function(e){return o(ze,e,1)},Dt=o(ze,0,0),Ar=v(function(e,r){if(r.$){var a=r.a.C;return P(a,Dt)}else{var n=r.a;return P(e,eb(n))}}),Cu=E(function(e,r,n,a){var t=C(Q3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Yn,P(u,Wo),o(Ar,u,r),o(Ar,u,n),o(wn,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Yn,o(ia,u,e),P(u,Dt),o(Ar,u,n),o(wn,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Yn,o(ia,u,e),o(Ar,u,r),P(u,Dt),o(wn,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Yn,o(ia,u,e),o(Ar,u,r),o(Ar,u,n),P(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(K3,i,c,l)}}),rb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},rt=be(function(e,r,n,a,t){return o(de,n,Q(function(i,c,l,u,$,s,d,m){return S(re,p(Ce,u,t,m),mu,rb,a,{b1:Nn(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),Lu={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nb=E(function(e,r,n,a){return o(de,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(re,p(Ce,l,a,d),Lu,wu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cr:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),ab=Ft(function(e,r,n,a,t,i,c,l,u){return o(de,c,Q(function($,s,d,m,f,g,b,w){var x=b.a,h=b.b;return S(re,p(Ce,m,u,w),Lu,xu,l,{b4:e,b8:r,b9:i,ca:a,P:h,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cv:t,b:d,c:s,aW:e,d:g,cS:n,e:$,a$:0,f})}))}),zn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),tb=function(e){var r=e;return p(zn,r.dR,r.dO,.5)},ob=function(e){var r=e;return p(zn,r.dS,r.dP,.5)},ib=function(e){var r=e;return p(zn,r.dT,r.dQ,.5)},cb=function(e){return p(me,tb(e),ob(e),ib(e))},H=function(e){var r=Hl(e),n=r.a,a=r.b,t=r.c;return{ey:Fa(cb(e)),eS:n/2,eT:a/2,eU:t/2}},Ho=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(et,l,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(et,l,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(et,l,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(nr,n,H(t),c,a);case 8:var t=r.a,c=r.c;return C(nr,n,H(t),c,0);case 9:var t=r.a,c=r.c;return C(nr,n,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(X3,n,i,H(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(rt,l,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(rt,l,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(rt,l,$,H(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(ar,u,$,H(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ar,u,$,H(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ar,u,$,H(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ar,u,$,H(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ar,u,$,H(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ar,u,$,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ar,u,$,H(t),c,a);case 8:var t=r.a,c=r.c;return S(ar,u,$,H(t),c,0);case 9:var t=r.a,c=r.c;return S(ar,u,$,H(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(O3,u,$,i,H(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(Tu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,h=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(nb,b,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Se(J3,b,x,h,H(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Jn,m,H(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var T=e.b,k=e.c,G=e.d,j=e.e,R=C(Cu,T,k,G,j);if(R.$){var J=R.a,Z=J.a,oe=J.b,ve=R.b,te=ve.a,se=ve.b,Le=R.c,ye=Le.a,fr=Le.b,sr=R.d,x=sr.a,h=sr.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Wu(ab,Z,oe,te,se,ye,fr,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return q3(Z)(oe)(te)(se)(ye)(fr)(x)(h)(H(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var N=R.a,W=R.b,A=R.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return Se(qn,N,W,A,H(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return Se(qn,N,W,A,H(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Se(qn,N,W,A,H(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Se(qn,N,W,A,H(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),nt=function(e){var r=e;return r.fT},at=function(e){var r=e;return r.fX},tt=function(e){var r=e;return r.c6},lb=function(e){var r=e,n=tt(r.c7),a=at(r.c7),t=nt(r.c7),i=tt(r.c5),c=at(r.c5),l=nt(r.c5),u=tt(r.c4),$=at(r.c4),s=nt(r.c4);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},ub=function(e){var r=Fa(Qr(e)),n=Ge(Dr(e)),a=Ge(Mr(e)),t=Ge(kr(e));return{dp:lb(e),q:t.fT,r:t.fX,s:t.c6,t:a.fT,u:a.fX,v:a.c6,w:n.fT,x:n.fX,y:n.c6,H:r.fT,I:r.fX,J:r.c6,bX:1}},Fr=v(function(e,r){return{$:5,a:e,b:r}}),Pu=v(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Fl,a,e);return o(Fr,i,t);case 1:return o(Fr,e,n);case 3:return o(Fr,e,n);case 2:return o(Fr,e,n);default:return o(Fr,e,n)}}),zu=v(function(e,r){return o(Pu,ub(e),r)}),Ea=function(e){return{$:2,a:e}},vb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fT:n*i.fT,fX:a*i.fX,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),$b=X$,fb=I$,Hi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=fb(a),g=f.fT,b=f.fX,w=f.c6,x=f.em,h=$b({em:x,fT:g*s,fX:b*d,c6:w*m});return La(r,n,h,t,i,c,l,u,$)}}}}}}}}}},Bt=v(function(e,r){switch(r.$){case 0:return su;case 5:var n=r.a,a=r.b;return o(Fr,n,o(Bt,e,a));case 1:var t=r.a,i=r.b;return o(de,o(vb,e,t),o(Hi,e,i));case 3:return r;case 2:var i=r.a;return Ea(o(Hi,e,i));default:var c=r.a;return Ul(o(ee,Bt(e),c))}}),Io=v(function(e,r){var n=r;return o(Bt,e,n)}),Xo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},ku=7683,Mu=7682,sb=p(Mo,{cp:0,cO:0,c3:15},{a8:we,bl:Jr,bt:we,bu:ku},{a8:we,bl:Jr,bt:we,bu:Mu}),db=p(Mo,{cp:0,cO:0,c3:15},{a8:we,bl:Jr,bt:we,bu:Mu},{a8:we,bl:Jr,bt:we,bu:ku}),Uo=v(function(e,r){return e?o(B,db,r):o(B,sb,r)}),mb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},pb=function(e){if(e.$){var r=e.c;return ae(Q(function(n,a,t,i,c,l,u,$){return S(re,o(Uo,i,$),mb,Xo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},xa=function(e){var r=pb(e);if(r.$)return z;var n=r.a;return Ea(n)},bb=E(function(e,r,n,a){var t=o(Ho,n,vu),i=function(){var s=P(e,r);return s.a?s.b?En(_([t,xa(Gi)])):t:s.b?xa(Gi):z}(),c=_o(a),l=c.a,u=c.b,$=c.c;return o(zu,ho(a),o(Io,V(l,u,$),i))}),gb=v(function(e,r){return C(bb,!0,!0,e,r)}),Du=v(function(e,r){return{$:0,a:e,b:r}}),hb=function(e){var r=lo(e),n=r.cN,a=r.cd,t=r.b5;return p(Rn,n,a,t)},_b=function(e){return o(Du,0,Tt(hb(e)))},wb=function(e){var r=e;return r.k},yn=function(e){var r=e;return Ur(r)},yb=v(function(e,r){var n=r;return n/e}),Ii=function(e){var r=e;return{fT:Ur(r),fX:Or(r)}},xb=v(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Va(a),bT:Te(n)},r)}),Sb=Ca(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=tn(l.bT),s=an(l.bT),d=nn(l.bT),m=o(ta,e,d),f=o(Qe,r,d),g=o(ta,n,s),b=o(Qe,a,s),w=o(ta,t,$),x=o(Qe,i,$),h=u;e=m,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return tu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Bu=v(function(e,r){var n=tn(e.bT),a=an(e.bT),t=nn(e.bT);return Vt(Sb,t,t,a,a,n,n,r)}),Tb=function(e){var r=p(Lc,xb,L,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Ro(e)),i=o(Bu,n,a);return C(nu,i,e,t,0)}else return Vo},Cb=Cr({fT:0,fX:0,c6:-1}),Xi=v(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c6:a.fT*l.c6+a.fX*i.c6}}),Sa=function(e){var r=e;return Or(r)},fn=function(e){var r=e;return r},At=function(e){return br(2*ir*e)},Ui=Tl({cB:$r,c4:po,c5:Co}),Au=function(){var e=72,r=o(yb,e,At(1)),n=Ee(1),a=fn(Cl),t=fn(Cb),i=Ee(1),c=o(ie,.5,i),l=p(me,tr,tr,c),u=o(ie,-.5,i),$=p(me,tr,tr,u),s=function(f){var g=o(ie,f,r),b=fn(o(Xi,Ui,Ii(g))),w=o(ie,yn(g),n),x=o(ie,Sa(g),n),h=p(me,w,x,c),T=p(me,w,x,u),k=o(ga,e,f+1),G=o(ie,k,r),j=fn(o(Xi,Ui,Ii(G))),R=o(ie,yn(G),n),N=o(ie,Sa(G),n),W=p(me,R,N,u),A=p(me,R,N,c);return _([V({o:t,bT:$},{o:t,bT:W},{o:t,bT:T}),V({o:b,bT:T},{o:j,bT:W},{o:j,bT:A}),V({o:b,bT:T},{o:j,bT:A},{o:b,bT:h}),V({o:a,bT:l},{o:a,bT:h},{o:a,bT:A})])},d=o(ee,s,o(Ir,0,e-1)),m=Mt(Ne(d));return Fo(Tb(m))}(),Oi=fu(Au),Lb=function(e){var r=e;return r.cB},Pb=function(e){var r=e,n=K(r.c6),a=K(r.fX),t=K(r.fT);if(O(t,a)<1)if(O(t,n)<1){var i=jr(r.c6*r.c6+r.fX*r.fX);return{fT:0,fX:-r.c6/i,c6:r.fX/i}}else{var i=jr(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}else if(O(a,n)<1){var i=jr(r.c6*r.c6+r.fT*r.fT);return{fT:r.c6/i,fX:0,c6:-r.fT/i}}else{var i=jr(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c6:0}}},zb=function(e){var r=Pb(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c6-i.c6*a.fX,fX:i.c6*a.fT-i.fT*a.c6,c6:i.fT*a.fX-i.fX*a.fT};return P(r,c)},kb=function(e){var r=xl(e),n=zb(r),a=n.a,t=n.b;return en({cB:Lb(e),c4:a,c5:t,c7:r})},Mb=function(e){var r=e;return r.e9},Db=function(e){var r=e;return r.fr},Bb=E(function(e,r,n,a){var t=kb(wb(a)),i=o(Ho,n,Au),c=function(){var d=P(e,r);return d.a?d.b?En(_([i,xa(Oi)])):i:d.b?xa(Oi):z}(),l=Db(a),u=l,$=Mb(a),s=$;return o(zu,t,o(Io,V(u,u,s),c))}),Ab=v(function(e,r){return C(Bb,!0,!0,e,r)}),Ji={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},qi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},sn=function(e){var r=Pn(e),n=r.a,a=r.b,t=r.c,i=Hr(n),c=Hr(a),l=Hr(t);return Ye({dx:i.fT,dy:c.fT,dz:l.fT,dA:0,dB:i.fX,dC:c.fX,dD:l.fX,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Zn=uu(_([V({cZ:0},{cZ:1},{cZ:2})])),Fb=v(function(e,r){var n=ou(r),a=H(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var t=e.b.a;return o(de,a,Q(function(h,T,k,G,j,R,N,W){return S(re,p(Ce,G,0,W),Ji,No,Zn,{aw:t,b:k,c:T,d:R,e:h,bq:sn(r),f:j})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(de,a,Q(function(h,T,k,G,j,R,N,W){return S(re,p(Ce,G,0,W),Ji,Go,Zn,{aN:o(Ra,Nn(c),i),b:k,c:T,d:R,e:h,bq:sn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(Tu,l,f);if(u.$)return z;var $=u.a;return o(de,a,Q(function(h,T,k,G,j,R,N,W){var A=N.a,J=N.b;return S(re,p(Ce,G,0,W),qi,hu,Zn,{P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cq:$,b:k,c:T,d:R,e:h,bq:sn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Cu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(de,a,Q(function(h,T,k,G,j,R,N,W){var A=N.a,J=N.b;return S(re,p(Ce,G,0,W),qi,Su,Zn,{b3:b,P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cu:x,b:k,c:T,d:R,cR:w,e:h,bq:sn(r),f:j})}))}}),Vb=function(){var e=_([{a_:o(ze,0,1)},{a_:o(ze,1,1)},{a_:o(ze,2,1)},{a_:o(ze,0,-1)},{a_:o(ze,1,-1)},{a_:o(ze,2,-1)}]),r=_([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(jn,e,r)}(),Rb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Yi=function(e){return Ea(Q(function(r,n,a,t,i,c,l,u){return S(re,o(Uo,t,u),Rb,Xo,Vb,{b:a,c:n,d:c,e:r,bY:l,bq:sn(e),f:i})}))},Eb=E(function(e,r,n,a){var t=o(Fb,n,a),i=P(e,r);return i.a?i.b?En(_([t,Yi(a)])):t:i.b?Yi(a):z}),jb=v(function(e,r){return C(Eb,!0,!0,e,r)}),Nb=v(function(e,r){var n=_n(r),a=_n(e),t=hn(r),i=hn(e),c=gn(r),l=gn(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Gb=function(e){var r=wo(e),n=r.a,a=r.b;return o(Nb,n,a)},Zi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Wb=v(function(e,r){return{$:1,a:e,b:r}}),Hb=Wb({df:2,$7:0,dV:1}),Ki=Hb(_([P({dw:0},{dw:1})])),Ib=v(function(e,r){var n=Gb(r),a=H(n),t=wo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,z;var l=e.b.a;return o(de,a,Q(function($,s,d,m,f,g,b,w){return S(re,w,Zi,No,Ki,{aw:l,du:Te(c),dv:Te(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(de,a,Q(function(s,d,m,f,g,b,w,x){return S(re,x,Zi,Go,Ki,{aN:o(Ra,Nn(u),l),du:Te(c),dv:Te(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Xb=v(function(e,r){return o(Ib,e,r)}),Qi=v(function(e,r){var n=e,a=r;return n/a}),Ub=be(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(mr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),ec=v(function(e,r){return e<1?L:S(Ub,0,e,e,r,L)}),Ob=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Va(a),bT:Te(n),L:o(ze,c,l)},r)}),Jb=function(e){var r=p(Lc,Ob,L,Eo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Ro(e)),i=o(Bu,n,a);return C(au,i,e,t,0)}else return Vo},Fu=v(function(e,r){var n=e,a=r,t=Ur(a);return{fT:t*Ur(n),fX:t*Or(n),c6:Or(a)}}),qb=function(){var e=Ee(1),r=72,n=o(Ir,0,r-1),a=o(ec,r,o(zn,tr,At(1))),t=Zt(r/2),i=o(Ir,0,t-1),c=o(ec,t,o(zn,vn(90),vn(-90))),l=jo(Ne(o(ee,function(s){return o(ee,function(d){return{o:fn(o(Fu,s,d)),bT:p(me,o(ie,yn(d)*yn(s),e),o(ie,yn(d)*Sa(s),e),o(ie,Sa(d),e)),L:P(o(Qi,s,At(1)),o(Qi,o(bn,vn(90),d),vn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ne(o(ee,function(s){return Ne(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([V(b,g,m),V(b,m,f)])},i))},n));return Fo(Jb(o($u,l,$)))}(),Ta=72,Kn=2*Ta,Yb=v(function(e,r){e:for(;;){var n=Kn+1,a=o(ga,Kn,2*e+3),t=o(ga,Kn,2*e+2),i=2*e+1,c=2*e,l=Kn,u=o(B,V(l,c,t),o(B,V(c,a,t),o(B,V(c,i,a),o(B,V(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),Zb=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Kb=v(function(e,r){e:for(;;){var n=p(Zb,0,2*ir,e/Ta),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Qb=function(){var e=o(Kb,Ta-1,_([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(Yb,Ta-1,L);return o(jn,e,r)}(),eg={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},rc=function(e){return Ea(Q(function(r,n,a,t,i,c,l,u){return S(re,o(Uo,!0,u),eg,Xo,Qb,{aw:p(Rn,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},rg=function(e){var r=cu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c6,bX:1}},ng=v(function(e,r){return o(Pu,rg(e),r)}),ag=E(function(e,r,n,a){var t=o(Ho,n,qb),i=function(){var u=P(e,r);return u.a?u.b?En(_([t,rc()])):t:u.b?rc():z}(),c=xo(a),l=c;return o(ng,o(Pt,$r,yo(a)),o(Io,V(l,l,l),i))}),tg=v(function(e,r){return C(ag,!0,!0,e,r)}),og=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ig=be(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),cg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Du,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(og,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Pl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ig,n,a,t,i,c)}},lg=cg,Vu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(gb,t,r)]);case 1:var t=e.a,n=e.b;return _([o(jb,t,n)]);case 3:var t=e.a,a=e.b;return _([o(tg,lg(t),a)]);case 2:var t=e.a,i=e.b;return _([o(Ab,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Xb,_b(c),l)]);default:var u=e.a;return o(Lo,Vu,u)}},ug=function(e){return o(Lo,Vu,e)},vg=v(function(e,r){return u3({aI:_0(e.es),ev:e.ev,aJ:w0(.5),cb:e.cb,aK:P(Pi(Xe(e.cT.fR)),Pi(Xe(e.cT.eW))),aP:ug(r),fz:!0,fI:o(Fu,br(e.fH),br(e.fJ)),ei:Aa})}),$g=v(function(e,r){return o(vg,{es:p(b0,46,46,46),ev:Jm(e),cb:e.cb,cT:e.cT,fH:-Er(135),fJ:-Er(45)},_([h0(e),p0(e),Lm]))}),fg=C(pm,$g,ym,wm,bm);const sg={Main:{init:fg(o(D,function(e){return Pe({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Pe({b7:c,cb:i,eJ:t,e7:a,fp:n,cT:r,fQ:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Pe({eo:d,eB:s,de:$,eI:u,e8:l,fq:c,fv:i,fA:t,eh:a})},o(M,"alt",Y))},o(M,"control",Y))},o(M,"down",Y))},o(M,"downs",ma(Cn)))},o(M,"left",Y))},o(M,"pressedKeys",ma(Cn)))},o(M,"right",Y))},o(M,"shift",Y))},o(M,"up",Y))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Pe({de:$,e4:u,fd:l,fw:c,fx:i,eh:t,fT:a,fX:n})},o(M,"down",Y))},o(M,"isDown",Y))},o(M,"move",Y))},o(M,"rightDown",Y))},o(M,"rightUp",Y))},o(M,"up",Y))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Pe({eW:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Pe({eD:r,eE:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},dg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),$(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-F.clock;b<.009||(F.dt=b,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},mg=()=>{ot("pointerdown"),ot("wheel"),ot("keydown")},ot=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},pg=sg.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});mg();dg(pg);
