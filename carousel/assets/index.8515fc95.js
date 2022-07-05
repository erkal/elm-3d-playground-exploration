const Zu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Zu();function Sr(e,r,n){return n.a=e,n.f=r,n}function v(e){return Sr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return Sr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function F(e){return Sr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function be(e){return Sr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function Ie(e){return Sr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function La(e){return Sr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function K(e){return Sr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function jt(e){return Sr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Wt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function za(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Xu(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Qu=[];function Ku(e){return e.length}var ev=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),rv=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,k(n,r)}),nv=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var av=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+tv()),r});function tv(e){return"<internals>"}function Kr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function yr(e,r){for(var n,a=[],t=ut(e,r,0,a);t&&(n=a.pop());t=ut(n.a,n.b,0,a));return t}function ut(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Kr(5),!1;if(n>100)return a.push(k(e,r)),!0;e.$<0&&(e=mi(e),r=mi(r));for(var t in e)if(!ut(e[t],r[t],n+1,a))return!1;return!0}v(yr);v(function(e,r){return!yr(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return J(e,r)<0});v(function(e,r){return J(e,r)<1});v(function(e,r){return J(e,r)>0});v(function(e,r){return J(e,r)>=0});var ov=v(function(e,r){var n=J(e,r);return n<0?Ac:n?If:Dc}),Ln=0;function k(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function ce(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=tr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=tr(e.a,r);return n}var L={$:0};function tr(e,r){return{$:1,a:e,b:r}}var iv=v(tr);function _(e){for(var r=L,n=e.length;n--;)r=tr(e[n],r);return r}function ka(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var cv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});F(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});be(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});Ie(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});v(function(e,r){return _(ka(r).sort(function(n,a){return J(e(n),e(a))}))});v(function(e,r){return _(ka(r).sort(function(n,a){var t=o(e,n,a);return t===Dc?0:t===Ac?-1:1}))});var lv=v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var uv=v(Math.pow);v(function(e,r){return r%e});var vv=v(function(e,r){var n=r%e;return e===0?Kr(11):n>0&&e<0||n<0&&e>0?n+e:n}),$v=Math.PI,fv=Math.cos,sv=Math.sin,dv=Math.tan;v(Math.atan2);function mv(e){return e}function pv(e){return e===1/0||e===-1/0}var bv=Math.ceil,gv=Math.floor,hv=Math.round,_v=Math.sqrt,ri=Math.log,wv=isNaN;function yv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var xv=v(function(e,r){return e+r});function Sv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:re(55296<=r&&r<=56319?k(e[0]+e[1],e.slice(2)):k(e[0],e.slice(1)))}v(function(e,r){return e+r});function Cv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Pv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Lv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),zv=v(function(e,r){return r.split(e)}),kv=v(function(e,r){return r.join(e)}),Tv=y(function(e,r,n){return n.slice(e,r)});function Mv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Dv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Av=v(function(e,r){return r.indexOf(e)>-1}),Bv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Fv=v(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function ic(e){return e+""}function Vv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:re(n==45?-r:r)}function Rv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?re(r):Y}function Ev(e){return ka(e).join("")}function Nv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function jv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Wv(e){return{$:0,a:e}}function Gt(e){return{$:2,b:e}}var Gv=Gt(function(e){return typeof e=="boolean"?ue(e):Qe("a BOOL",e)}),Hv=Gt(function(e){return typeof e=="number"?ue(e):Qe("a FLOAT",e)}),Iv=Gt(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Qe("a STRING",e)});function Uv(e){return{$:3,b:e}}var Ov=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Cr(e,r){return{$:9,f:e,g:r}}var Jv=v(function(e,r){return{$:10,b:r,h:e}}),qv=v(function(e,r){return Cr(e,[r])}),Yv=y(function(e,r,n){return Cr(e,[r,n])});F(function(e,r,n,a){return Cr(e,[r,n,a])});be(function(e,r,n,a,t){return Cr(e,[r,n,a,t])});Ie(function(e,r,n,a,t,i){return Cr(e,[r,n,a,t,i])});La(function(e,r,n,a,t,i,c){return Cr(e,[r,n,a,t,i,c])});K(function(e,r,n,a,t,i,c,l){return Cr(e,[r,n,a,t,i,c,l])});jt(function(e,r,n,a,t,i,c,l,u){return Cr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ne(e,n)}catch(a){return ye(o(eo,"This is not valid JSON! "+a.message,r))}});var cc=v(function(e,r){return Ne(e,r)});function Ne(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Qe("null",r);case 3:return En(r)?ni(e.b,r,_):Qe("a LIST",r);case 4:return En(r)?ni(e.b,r,Zv):Qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Qe("an OBJECT with a field named `"+n+"`",r);var $=Ne(e.b,r[n]);return qe($)?$:ye(o(pi,n,$.a));case 7:var a=e.e;if(!En(r))return Qe("an ARRAY",r);if(a>=r.length)return Qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ne(e.b,r[a]);return qe($)?$:ye(o(Bc,a,$.a));case 8:if(typeof r!="object"||r===null||En(r))return Qe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var $=Ne(e.b,r[i]);if(!qe($))return ye(o(pi,i,$.a));t=tr(k(i,$.a),t)}return ue(ke(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ne(l[u],r);if(!qe($))return $;c=c($.a)}return ue(c);case 10:var $=Ne(e.b,r);return qe($)?Ne(e.h($.a),r):$;case 11:for(var s=L,d=e.g;d.b;d=d.b){var $=Ne(d.a,r);if(qe($))return $;s=tr($.a,s)}return ye(Uf(ke(s)));case 1:return ye(o(eo,e.a,r));case 0:return ue(e.a)}}function ni(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ne(e,r[i]);if(!qe(c))return ye(o(Bc,i,c.a));t[i]=c.a}return ue(n(t))}function En(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Zv(e){return o(vs,e.length,function(r){return e[r]})}function Qe(e,r){return ye(o(eo,"Expecting "+e,r))}function Gr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Gr(e.b,r.b);case 6:return e.d===r.d&&Gr(e.b,r.b);case 7:return e.e===r.e&&Gr(e.b,r.b);case 9:return e.f===r.f&&ai(e.g,r.g);case 10:return e.h===r.h&&Gr(e.b,r.b);case 11:return ai(e.g,r.g)}}function ai(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Gr(e[a],r[a]))return!1;return!0}var Xv=v(function(e,r){return JSON.stringify(r,null,e)+""});function lc(e){return e}y(function(e,r,n){return n[e]=r,n});function Dr(e){return{$:0,a:e}}function Qv(e){return{$:1,a:e}}function dr(e){return{$:2,b:e,c:null}}var vt=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Kv(e){return{$:5,b:e}}var e$=0;function Ht(e){var r={$:0,e:e$++,f:e,g:null,h:[]};return It(r),r}function uc(e){return dr(function(r){r(Dr(Ht(e)))})}function vc(e,r){e.h.push(r),It(e)}var r$=v(function(e,r){return dr(function(n){vc(e,r),n(Dr(Ln))})}),Wa=!1,ti=[];function It(e){if(ti.push(e),!Wa){for(Wa=!0;e=ti.shift();)n$(e);Wa=!1}}function n$(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,It(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}F(function(e,r,n,a){return Ut(r,a,e.ff,e.f_,e.fU,function(){return function(){}})});function Ut(e,r,n,a,t,i){var c=o(cc,e,r?r.flags:void 0);qe(c)||Kr(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=a$(l,m);function m(f,g){var b=o(a,f,$);s($=b.a,g),ii(l,b.b,t($))}return ii(l,u.b,t($)),d?{ports:d}:{}}var rr={};function a$(e,r){var n;for(var a in rr){var t=rr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=o$(t,r)}return n}function t$(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function o$(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(vt,l,Kv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Ht(o(vt,l,e.b))}var i$=v(function(e,r){return dr(function(n){e.g(r),n(Dr(Ln))})});v(function(e,r){return o(r$,e.h,{$:0,a:r})});function $c(e){return function(r){return{$:1,k:e,l:r}}}function c$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var oi=[],Ga=!1;function ii(e,r,n){if(oi.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=oi.shift();)l$(a.p,a.q,a.r);Ga=!1}}function l$(e,r,n){var a={};aa(!0,r,a,null),aa(!1,n,a,null);for(var t in e)vc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function aa(e,r,n,a){switch(r.$){case 1:var t=r.k,i=u$(e,t,a,r.l);n[t]=v$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)aa(e,c.a,n,a);return;case 3:aa(e,r.o,n,{s:r.n,t:a});return}}function u$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?rr[r].e:rr[r].f;return o(i,t,a)}function v$(e,r,n){return n=n||{i:L,j:L},e?n.i=tr(r,n.i):n.j=tr(r,n.j),n}function $$(e){rr[e]&&Kr(3)}v(function(e,r){return r});function f$(e,r){return $$(e),rr[e]={f:s$,u:r,a:d$},$c(e)}var s$=v(function(e,r){return function(n){return e(r(n))}});function d$(e,r){var n=L,a=rr[e].u,t=Dr(null);rr[e].b=t,rr[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(cc,a,c);qe(l)||Kr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var ta,ur=typeof document!="undefined"?document:{};function Ot(e,r){e.appendChild(r)}F(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(br(e,function(){}),t),{}});function $t(e){return{$:0,a:e}}var fc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Jt(n),e:t,f:e,b:i}})}),Ar=fc(void 0),m$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Jt(n),e:t,f:e,b:i}})}),p$=m$(void 0);function b$(e,r,n,a){return{$:3,d:Jt(e),g:r,h:n,i:a}}var g$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Pr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Pr([e,r],function(){return e(r)})});y(function(e,r,n){return Pr([e,r,n],function(){return o(e,r,n)})});F(function(e,r,n,a){return Pr([e,r,n,a],function(){return p(e,r,n,a)})});be(function(e,r,n,a,t){return Pr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});Ie(function(e,r,n,a,t,i){return Pr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});La(function(e,r,n,a,t,i,c){return Pr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});K(function(e,r,n,a,t,i,c,l){return Pr([e,r,n,a,t,i,c,l],function(){return Wt(e,r,n,a,t,i,c,l)})});jt(function(e,r,n,a,t,i,c,l,u){return Pr([e,r,n,a,t,i,c,l,u],function(){return za(e,r,n,a,t,i,c,l,u)})});var sc=v(function(e,r){return{$:"a0",n:e,o:r}}),h$=v(function(e,r){return{$:"a1",n:e,o:r}}),dc=v(function(e,r){return{$:"a2",n:e,o:r}}),zn=v(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function _$(e){return e=="script"?"p":e}function w$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o(sc,r.n,y$(e,r.o)):r});function y$(e,r){var n=oo(r);return{$:r.$,a:n?p($s,n<3?x$:S$,Me(e),r.a):o(la,e,r.a)}}var x$=v(function(e,r){return k(e(r.a),r.b)}),S$=v(function(e,r){return{an:e(r.an),c3:r.c3,cT:r.cT}});function Jt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ci(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ci(c,t,i):c[t]=i}return r}function ci(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function br(e,r){var n=e.$;if(n===5)return br(e.k||(e.k=e.m()),r);if(n===0)return ur.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=br(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ft(c,r,e.d),c}var c=e.f?ur.createElementNS(e.f,e.c):ur.createElement(e.c);ta&&e.c=="a"&&c.addEventListener("click",ta(c)),ft(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Ot(c,br(n===1?l[u]:l[u].b,r));return c}function ft(e,r,n){for(var a in n){var t=n[a];a==="a1"?C$(e,t):a==="a0"?z$(e,r,t):a==="a3"?P$(e,t):a==="a4"?L$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function C$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function P$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function L$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function z$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=k$(r,i),e.addEventListener(t,c,qt&&{passive:oo(i)<2}),a[t]=c}}var qt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){qt=!0}}))}catch{}function k$(e,r){function n(a){var t=n.q,i=Ne(t.a,a);if(!!qe(i)){for(var c=oo(t),l=i.a,u=c?c<3?l.a:l.an:l,$=c==1?l.b:c==3&&l.c3,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cT)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function T$(e,r){return e.$==r.$&&Gr(e.a,r.a)}function mc(e,r){var n=[];return Ye(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Ye(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=E$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Ye(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!M$(d,m):d!==m)&&_e(n,2,a,m),Ye(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:li(e,r,n,a,D$);return;case 2:li(e,r,n,a,A$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Yt(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function M$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function li(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Yt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Yt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Yt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&T$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function D$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Ye(s,i[$],n,++a),a+=s.b||0}}function A$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,h=g.b,P=b.b,A=void 0,G=void 0;if(w===x){f++,Ye(h,P,t,f),f+=h.b||0,d++,m++;continue}var N=l[d+1],E=u[m+1];if(N){var I=N.a,H=N.b;G=x===I}if(E){var R=E.a,Q=E.b;A=w===R}if(A&&G){f++,Ye(h,Q,t,f),un(i,t,w,P,m,c),f+=h.b||0,f++,vn(i,t,w,H,f),f+=H.b||0,d+=2,m+=2;continue}if(A){f++,un(i,t,x,P,m,c),Ye(h,Q,t,f),f+=h.b||0,d+=1,m+=2;continue}if(G){f++,vn(i,t,w,h,f),f+=h.b||0,f++,Ye(H,P,t,f),f+=H.b||0,d+=2,m+=1;continue}if(N&&I===R){f++,vn(i,t,w,h,f),un(i,t,x,P,m,c),f+=h.b||0,f++,Ye(H,Q,t,f),f+=H.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],h=g.b;vn(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var ae=ae||[],b=u[m];un(i,t,b.a,b.b,void 0,ae),m++}(t.length>0||c.length>0||ae)&&_e(n,8,a,{w:t,x:c,y:ae})}var pc="_elmW6BL";function un(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Ye(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}un(e,r,n+pc,a,t,i)}function vn(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Ye(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}vn(e,r,n+pc,a,t)}function bc(e,r,n,a){$n(e,r,n,0,0,r.b,a)}function $n(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)bc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&$n(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&$n(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return $n(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=$n(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function gc(e,r,n,a){return n.length===0?e:(bc(e,r,n,a),oa(e,n))}function oa(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=B$(t,a);t===e&&(e=i)}return e}function B$(e,r){switch(r.$){case 0:return F$(e,r.s,r.u);case 4:return ft(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return oa(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(br(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=oa(e,i.w),e;case 8:return V$(e,r);case 5:return r.s(e);default:Kr(10)}}function F$(e,r,n){var a=e.parentNode,t=br(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function V$(e,r){var n=r.s,a=R$(n.y,r);e=oa(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:br(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Ot(e,a),e}function R$(e,r){if(!!e){for(var n=ur.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Ot(n,i.c===2?i.s:br(i.z,r.u))}return n}}function Zt(e){if(e.nodeType===3)return $t(e.textContent);if(e.nodeType!==1)return $t("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=tr(o(zn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,$=e.childNodes,a=$.length;a--;)u=tr(Zt($[a]),u);return p(Ar,l,r,u)}function E$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var N$=F(function(e,r,n,a){return Ut(r,a,e.ff,e.f_,e.fU,function(t,i){var c=e.f1,l=a.node,u=Zt(l);return hc(i,function($){var s=c($),d=mc(u,s);l=gc(l,u,d,t),u=s})})});F(function(e,r,n,a){return Ut(r,a,e.ff,e.f_,e.fU,function(t,i){var c=e.c0&&e.c0(t),l=e.f1,u=ur.title,$=ur.body,s=Zt($);return hc(i,function(d){ta=c;var m=l(d),f=Ar("body")(L)(m.eJ),g=mc(s,f);$=gc($,s,g,t),s=f,ta=0,u!==m.fY&&(ur.title=u=m.fY)})})});var ia=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function hc(e,r){r(e);var n=0;function a(){n=n===1?0:(ia(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&ia(a),n=2)}}v(function(e,r){return o(lo,io,dr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(lo,io,dr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(lo,io,dr(function(){history.replaceState({},"",r),e()}))});var j$={addEventListener:function(){},removeEventListener:function(){}},W$=typeof window!="undefined"?window:j$;y(function(e,r,n){return uc(dr(function(a){function t(i){Ht(n(i))}return e.addEventListener(r,t,qt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ne(e,r);return qe(n)?re(n.a):Y});function _c(e,r){return dr(function(n){ia(function(){var a=document.getElementById(e);n(a?Dr(r(a)):Qv(ss(e)))})})}function G$(e){return dr(function(r){ia(function(){r(Dr(e()))})})}v(function(e,r){return _c(r,function(n){return n[e](),Ln})});v(function(e,r){return G$(function(){return W$.scroll(e,r),Ln})});y(function(e,r,n){return _c(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ln})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var H$=v(function(e,r){var n="g";e.fs&&(n+="m"),e.eL&&(n+="i");try{return re(new RegExp(r,n))}catch{return Y}});v(function(e,r){return r.match(e)!==null});var I$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?re(d):Y}a.push(C(sl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});F(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?re($):Y}return n(C(sl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var U$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/O$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function O$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Xt=new Float64Array(3),ui=new Float64Array(3),vi=new Float64Array(3),J$=y(function(e,r,n){return new Float64Array([e,r,n])}),q$=function(e){return e[0]},Y$=function(e){return e[1]},Z$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var X$=function(e){return new Float64Array([e.f5,e.f9,e.de])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function wc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(wc);function yc(e,r,n){return n===void 0&&(n=new Float64Array(3)),ca(wc(e,r,n),n)}v(yc);function xc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function ca(e,r){r===void 0&&(r=new Float64Array(3));var n=1/xc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Q$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),fn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(fn);function st(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(st);v(function(e,r){var n,a=Xt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=fn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(fn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(fn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(fn(r,a)+e[14])/n,t});var K$=F(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var ef=function(e){return{f5:e[0],f9:e[1],de:e[2],eB:e[3]}},rf=function(e){return new Float64Array([e.f5,e.f9,e.de,e.eB])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/nf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function nf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var af=new Float64Array(16),tf=new Float64Array(16),of=function(e){var r=new Float64Array(16);return r[0]=e.dK,r[1]=e.dO,r[2]=e.dS,r[3]=e.dW,r[4]=e.dL,r[5]=e.dP,r[6]=e.dT,r[7]=e.dX,r[8]=e.dM,r[9]=e.dQ,r[10]=e.dU,r[11]=e.dY,r[12]=e.dN,r[13]=e.dR,r[14]=e.dV,r[15]=e.dZ,r},cf=function(e){return{dK:e[0],dO:e[1],dS:e[2],dW:e[3],dL:e[4],dP:e[5],dT:e[6],dX:e[7],dM:e[8],dQ:e[9],dU:e[10],dY:e[11],dN:e[12],dR:e[13],dV:e[14],dZ:e[15]}};function Sc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}Ie(Sc);F(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Sc(c,l,i,t,n,a)});function Cc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}Ie(Cc);F(function(e,r,n,a){return Cc(e,r,n,a,-1,1)});function Pc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],P=r[0],A=r[1],G=r[2],N=r[3],E=r[4],I=r[5],H=r[6],R=r[7],Q=r[8],ae=r[9],Se=r[10],Ce=r[11],ge=r[12],he=r[13],Oe=r[14],Je=r[15];return n[0]=a*P+l*A+d*G+b*N,n[1]=t*P+u*A+m*G+w*N,n[2]=i*P+$*A+f*G+x*N,n[3]=c*P+s*A+g*G+h*N,n[4]=a*E+l*I+d*H+b*R,n[5]=t*E+u*I+m*H+w*R,n[6]=i*E+$*I+f*H+x*R,n[7]=c*E+s*I+g*H+h*R,n[8]=a*Q+l*ae+d*Se+b*Ce,n[9]=t*Q+u*ae+m*Se+w*Ce,n[10]=i*Q+$*ae+f*Se+x*Ce,n[11]=c*Q+s*ae+g*Se+h*Ce,n[12]=a*ge+l*he+d*Oe+b*Je,n[13]=t*ge+u*he+m*Oe+w*Je,n[14]=i*ge+$*he+f*Oe+x*Je,n[15]=c*ge+s*he+g*Oe+h*Je,n}v(Pc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],P=r[5],A=r[6],G=r[8],N=r[9],E=r[10],I=r[12],H=r[13],R=r[14];return n[0]=a*b+c*w+$*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*h+c*P+$*A,n[5]=t*h+l*P+s*A,n[6]=i*h+u*P+d*A,n[7]=0,n[8]=a*G+c*N+$*E,n[9]=t*G+l*N+s*E,n[10]=i*G+u*N+d*E,n[11]=0,n[12]=a*I+c*H+$*R+m,n[13]=t*I+l*H+s*R+f,n[14]=i*I+u*H+d*R+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ca(r,Xt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/xc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,b=i*l*$,w=c*l*$,x=i*i*$+u,h=g+f,P=b-m,A=g-f,G=c*c*$+u,N=w+d,E=b+m,I=w-d,H=l*l*$+u,R=n[0],Q=n[1],ae=n[2],Se=n[3],Ce=n[4],ge=n[5],he=n[6],Oe=n[7],Je=n[8],Rr=n[9],Er=n[10],ja=n[11],Ou=n[12],Ju=n[13],qu=n[14],Yu=n[15];return a[0]=R*x+Ce*h+Je*P,a[1]=Q*x+ge*h+Rr*P,a[2]=ae*x+he*h+Er*P,a[3]=Se*x+Oe*h+ja*P,a[4]=R*A+Ce*G+Je*N,a[5]=Q*A+ge*G+Rr*N,a[6]=ae*A+he*G+Er*N,a[7]=Se*A+Oe*G+ja*N,a[8]=R*E+Ce*I+Je*H,a[9]=Q*E+ge*I+Rr*H,a[10]=ae*E+he*I+Er*H,a[11]=Se*E+Oe*I+ja*H,a[12]=Ou,a[13]=Ju,a[14]=qu,a[15]=Yu,a});function lf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(lf);F(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function uf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(uf);F(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=yc(e,r,Xt),t=ca(st(n,a,ui),ui),i=ca(st(a,t,vi),vi),c=af,l=tf;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Pc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var $i=0;function wn(e,r){for(;r.b;r=r.b)e(r.a)}function Qt(e){for(var r=0;e.b;e=e.b)r++;return r}var vf=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},$f=be(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),ff=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),sf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),df=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),mf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),pf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),bf=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),gf=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),hf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),_f=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},wf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},yf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},xf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Lc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},zc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Sf=function(e){e.gl.disable(e.gl.CULL_FACE)},Cf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Pf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Lf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},fi=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],zf=[wf,yf,xf,Lc,zc,Sf,Cf,Pf,Lf];function si(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function kf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function kc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Tf(e,r,n,a){for(var t=n.a.dq,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(P){for(h=0;h<g;h++)f[b++]=g===1?w[P][x]:w[P][x][h]})}var u=kc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(Qt(n.b)*s);wn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Mf(e,r){if(r.a.dA>0){var n=e.createBuffer(),a=Df(r.c,r.a.dA);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dq*Qt(r.b),indexBuffer:null,buffers:{}}}function Df(e,r){var n=new Uint32Array(Qt(e)*r),a=0,t;return wn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function di(e,r){return e+"#"+r}var Tc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Lc(n),zc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=di(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=$i++,$||($=si(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=$i++,s||(s=si(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=kf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Af(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=di(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Bf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=Mf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=Tf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=kc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,P=0;P<w.arraySize;P++)a.enableVertexAttribArray(g+P),a.vertexAttribPointer(g+P,w.size,w.baseType,!1,h,x*P)}for(n.toggle=!n.toggle,wn(V0(n),i.a),u=0;u<fi.length;u++){var A=n[fi[u]];A.toggle!==n.toggle&&A.enabled&&(zf[u](n),A.enabled=!1,A.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.d6,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.d6,0,b.numIndices)}}return wn(t,e.g),r});function Af(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var P=l.textures.get(h);P||(P=h.eS(e),l.textures.set(h,P)),e.bindTexture(e.TEXTURE_2D,P),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function Bf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Ff=y(function(e,r,n){return b$(r,{g:n,f:{},h:e},Gf,Hf)}),Vf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Rf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ef=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Nf=v(function(e,r){e.contextAttributes.antialias=!0}),jf=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Wf=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Gf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};wn(function(t){return o(F0,r,t)},e.h);var n=ur.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),vf(function(){return o(Tc,e,n)})):(n=ur.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Hf(e,r){return r.f=e.f,Tc(r)}var M=iv,Nn=av,Mc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Nn,e,l,$)}else{var u=c.a;return p(Nn,i,l,u)}});return p(Nn,i,p(Nn,e,r,t),a)}),Kt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Kt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),mi=function(e){return p(Kt,y(function(r,n,a){return o(M,k(r,n),a)}),L,e)},Dc=1,If=2,Ac=0,ye=function(e){return{$:1,a:e}},eo=v(function(e,r){return{$:3,a:e,b:r}}),pi=v(function(e,r){return{$:0,a:e,b:r}}),Bc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Uf=function(e){return{$:2,a:e}},Of=lv,re=function(e){return{$:0,a:e}},Y={$:1},Jf=Dv,qf=Xv,Ae=ic,zr=v(function(e,r){return o(kv,e,ka(r))}),ro=v(function(e,r){return _(o(zv,e,r))}),Fc=function(e){return o(zr,`
    `,o(ro,`
`,e))},kn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),xr=function(e){return p(kn,v(function(r,n){return n+1}),0,e)},Yf=cv,Zf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(M,r,n);e=a,r=t,n=i;continue e}else return n}),Mr=v(function(e,r){return p(Zf,e,r,L)}),Vc=v(function(e,r){return p(Yf,e,o(Mr,0,xr(r)-1),r)}),nr=Nv,Rc=function(e){var r=nr(e);return 97<=r&&r<=122},Ec=function(e){var r=nr(e);return r<=90&&65<=r},Xf=function(e){return Rc(e)||Ec(e)},Qf=function(e){var r=nr(e);return r<=57&&48<=r},Kf=function(e){return Rc(e)||Ec(e)||Qf(e)},ke=function(e){return p(kn,M,L,e)},en=Sv,es=v(function(e,r){return`

(`+(Ae(e+1)+(") "+Fc(rs(r))))}),rs=function(e){return o(ns,e,L)},ns=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=en(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return Xf(x)&&o(Jf,Kf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(M,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,$=o(M,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(zr,"",ke(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(xr(s))+" ways:"));return o(zr,`

`,o(M,g,o(Vc,es,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(zr,"",ke(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(zr,"",ke(r))+`:

    `):`Problem with the given value:

`}();return g+(Fc(o(qf,4,f))+(`

`+m))}}),Be=32,dt=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),mt=Qu,no=bv,ao=v(function(e,r){return ri(r)/ri(e)}),as=mv,yn=no(o(ao,2,Be)),Nc=C(dt,0,yn,mt,mt),jc=ev,Wc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var ts=gv,pt=Ku,Te=v(function(e,r){return J(e,r)>0?e:r}),os=function(e){return{$:0,a:e}},to=rv,is=v(function(e,r){e:for(;;){var n=o(to,Be,e),a=n.a,t=n.b,i=o(M,os(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ke(i)}}),cs=function(e){var r=e.a;return r},ls=v(function(e,r){e:for(;;){var n=no(r/Be);if(n===1)return o(to,Be,e).a;var a=o(is,e,L),t=n;e=a,r=t;continue e}}),Gc=v(function(e,r){if(r.l){var n=r.l*Be,a=ts(o(ao,Be,n-1)),t=e?ke(r.y):r.y,i=o(ls,t,r.l);return C(dt,pt(r.o)+n,o(Te,5,a*yn),i,r.o)}else return C(dt,pt(r.o),yn,mt,r.o)}),us=be(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Gc,!1,{y:a,l:n/Be|0,o:t});var i=Wc(p(jc,Be,r,e)),c=e,l=r-Be,u=n,$=o(M,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),vs=v(function(e,r){if(e<=0)return Nc;var n=e%Be,a=p(jc,n,e-n,r),t=e-n-Be;return S(us,r,t,e,L,a)}),qe=function(e){return!e.$},D=Jv,Z=Gv,T=Ov,ve=Hv,la=qv,$s=Yv,Me=Wv,oo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},O=Ar("div"),fs=function(e){return{$:2,a:e}},Hc=v(function(e,r){return e}),Ic=v(function(e,r){return{eP:r.eP,eQ:e,ci:r.ci,dp:r.dp,fl:r.fl,bn:r.bn,b3:r.b3,f2:r.f2}}),gr=function(e){return e},ss=gr,bi=Ie(function(e,r,n,a,t,i){return{dw:i,dy:r,ea:a,ee:n,eh:e,ei:t}}),ds=Av,kr=Cv,Hr=Tv,Tn=v(function(e,r){return e<1?r:p(Hr,e,kr(r),r)}),Ta=Fv,Ma=function(e){return e===""},Da=v(function(e,r){return e<1?"":p(Hr,0,e,r)}),Uc=Vv,gi=be(function(e,r,n,a,t){if(Ma(t)||o(ds,"@",t))return Y;var i=o(Ta,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Uc(o(Tn,c+1,t));if(l.$===1)return Y;var u=l;return re(we(bi,e,o(Da,c,t),u,r,n,a))}else return re(we(bi,e,t,Y,r,n,a))}),hi=F(function(e,r,n,a){if(Ma(a))return Y;var t=o(Ta,"/",a);if(t.b){var i=t.a;return S(gi,e,o(Tn,i,a),r,n,o(Da,i,a))}else return S(gi,e,"/",r,n,a)}),_i=y(function(e,r,n){if(Ma(n))return Y;var a=o(Ta,"?",n);if(a.b){var t=a.a;return C(hi,e,re(o(Tn,t+1,n)),r,o(Da,t,n))}else return C(hi,e,Y,r,n)});v(function(e,r){if(Ma(r))return Y;var n=o(Ta,"#",r);if(n.b){var a=n.a;return p(_i,e,re(o(Tn,a+1,r)),o(Da,a,r))}else return p(_i,e,Y,r)});var ms=Bv,io=function(e){},Mn=Dr,ps=Mn(0),Oc=F(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(kn,e,r,ke(d)):C(Oc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),mr=y(function(e,r,n){return C(Oc,e,r,0,n)}),ee=v(function(e,r){return p(mr,v(function(n,a){return o(M,e(n),a)}),L,r)}),ua=vt,co=v(function(e,r){return o(ua,function(n){return Mn(e(n))},r)}),bs=y(function(e,r,n){return o(ua,function(a){return o(ua,function(t){return Mn(o(e,a,t))},n)},r)}),gs=function(e){return p(mr,bs(M),Mn(L),e)},hs=i$,_s=v(function(e,r){var n=r;return uc(o(ua,hs(e),n))}),ws=y(function(e,r,n){return o(co,function(a){return 0},gs(o(ee,_s(e),r)))}),ys=y(function(e,r,n){return Mn(0)}),xs=v(function(e,r){var n=r;return o(co,e,n)});rr.Task=t$(ps,ws,ys,xs);var Ss=$c("Task"),lo=v(function(e,r){return Ss(o(co,e,r))}),Cs=N$,Ps=yv,va={$:1},Jc=function(e){return{$:2,a:e}},Aa={$:0},We=v(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.A;return r.a},Ls=function(e){var r=e.a,n=e.b.T,a=e.b.A,t=e.b.ac;if(t.b){var i=t.a,c=t.b;return re(o(We,r,{A:i,ac:c,T:o(M,a,n)}))}else return Y},qc=function(e){var r=e.b;return o(We,Aa,r)},Fe=v(function(e,r){if(r.$)return e;var n=r.a;return n}),zs=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.bn.$7?qc(n):n;case 2:var i=a.a.c4;return(J(i+r.dp,rn(n).eP)>0?o(te,Ls,Fe(o(We,va,t))):gr)(o(We,Jc({c4:i+r.dp}),t));default:var c=t.A,l=c.a,u=c.b,$=o(Ic,l.eQ,ce(r,{eP:l.eP+r.dp})),s=o(e,$,u);return o(We,Aa,{A:k($,s),ac:L,T:o(M,t.A,t.T)})}}),Yc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ks=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(M,a,n);e=i,r=c,n=l;continue e}else return n}}),Ts=v(function(e,r){return ke(p(ks,e,r,L))}),Zc=y(function(e,r,n){if(r<=0)return L;{var a=k(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(M,h,o(M,c,o(M,s,o(M,b,o(Ts,r-4,w))))):o(M,h,o(M,c,o(M,s,o(M,b,p(Zc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),uo=v(function(e,r){return p(Zc,0,e,r)}),Ms=v(function(e,r){var n=r.b.T,a=r.b.A,t=r.b.ac,i=le(ke(n),le(_([a]),t)),c=o(uo,e,i),l=o(Yc,e,i);if(l.b){var u=l.a,$=l.b;return o(We,va,{A:u,ac:$,T:ke(c)})}else{var s=ke(c);if(s.b){var d=s.a,m=s.b;return o(We,va,{A:d,ac:L,T:m})}else return r}}),Ds=function(e){var r=e.b;return o(We,va,r)},As=function(e){var r=e.b;return o(We,Jc({c4:rn(e).eP}),r)},Bs=v(function(e,r){switch(e.$){case 1:return Ds(r);case 2:return qc(r);case 3:return As(r);default:var n=e.a;return o(Ms,n,r)}}),Xc=v(function(e,r){var n=r.a,a=r.b;return k(e(n),a)}),Fs=v(function(e,r){return ce(r,{ax:e(r.ax)})}),Vs=function(e){return{$:3,a:e}},Rs=function(e){return{$:2,a:e}},Es=v(function(e,r){return{$:0,a:e,b:r}}),Ns=v(function(e,r){return{$:1,a:e,b:r}}),pe=v(function(e,r){if(r.$)return Y;var n=r.a;return re(e(n))}),U=function(e){return e<0?-e:e},vo=Rv,js=y(function(e,r,n){return o(Fe,0/0,vo(o(e,r,n)))}),Qc=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Ws=Lv,Kc=function(e){return p(Ws,M,L,e)},Gs=v(function(e,r){var n=o(Qc,function(a){return a!=="0"&&a!=="."},Kc(r));return le(e&&n?"-":"",r)}),de=ic,bt=xv,el=jv,rl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(bt,"0",rl(t))}else{var i=nr(r);return i>=48&&i<57?o(bt,el(i+1),n):"0"}},gt=pv,Hs=wv,Ba=function(e){return o(bt,e,"")},nl=y(function(e,r,n){return e<=0?n:p(nl,e>>1,le(r,r),e&1?le(n,r):n)}),xn=v(function(e,r){return p(nl,e,r,"")}),ht=y(function(e,r,n){return le(n,o(xn,e-kr(n),Ba(r)))}),_t=Pv,al=function(e){var r=o(ro,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return k(n,t)}else{var n=r.a;return k(n,"0")}else return k("0","0")},Is=function(e){var r=o(ro,"e",de(U(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Fe,0,Uc(o(ms,"+",t)?o(Tn,1,t):t)),c=al(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(Fe,"0",o(pe,function(d){var m=d.a,f=d.b;return m+("."+f)},o(pe,Xc(Ba),en(le(o(xn,U(i),"0"),$))))):p(ht,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Us=y(function(e,r,n){if(gt(n)||Hs(n))return de(n);var a=n<0,t=al(Is(U(n))),i=t.a,c=t.b,l=kr(i)+r,u=le(o(xn,-l+1,"0"),p(ht,l,"0",le(i,c))),$=kr(u),s=o(Te,1,l),d=o(e,a,p(Hr,s,$,u)),m=p(Hr,0,s,u),f=d?_t(o(Fe,"1",o(pe,rl,en(_t(m))))):m,g=kr(f),b=f==="0"?f:r<=0?le(f,o(xn,U(r),"0")):J(r,kr(c))<0?p(Hr,0,g-r,f)+("."+p(Hr,g-r,g,f)):le(i+".",p(ht,r,"0",c));return o(Gs,a,b)}),tl=Us(v(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(nr(t))})),Os=js(tl),Js=y(function(e,r,n){var a=o(ao,10,U(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Os,t,n)}),ol=ov,il=v(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ol,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return re(a);default:var l=e,u=i;e=l,r=u;continue e}}}),W=be(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),or={$:-2},Yr=be(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(W,0,r,n,S(W,1,$,s,d,m),S(W,1,i,c,l,u))}else return S(W,e,i,c,S(W,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(W,0,$,s,S(W,1,g,b,w,x),S(W,1,r,n,m,t))}else return S(W,e,r,n,a,t)}),wt=y(function(e,r,n){if(n.$===-2)return S(W,0,e,r,or,or);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ol,e,t);switch(u){case 0:return S(Yr,a,t,i,p(wt,e,r,c),l);case 1:return S(W,a,t,r,c,l);default:return S(Yr,a,t,i,c,p(wt,e,r,l))}}),Zn=y(function(e,r,n){var a=p(wt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(W,1,t,i,c,l)}else{var u=a;return u}}),qs=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},cl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=$.e;return S(W,0,f,g,S(W,1,n,a,S(W,0,i,c,l,u),b),S(W,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,P=e.e;P.a;var s=P.b,d=P.c,m=P.d,x=P.e;return S(W,1,n,a,S(W,0,i,c,l,u),S(W,0,s,d,m,x))}else return e},wi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(W,0,i,c,S(W,1,u,$,s,d),S(W,1,n,a,m,S(W,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,P=h.d,m=h.e,A=e.e;A.a;var g=A.b,b=A.c,w=A.d,x=A.e;return S(W,1,n,a,S(W,0,i,c,P,m),S(W,0,g,b,w,x))}else return e},Ys=La(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(W,n,l,u,$,S(W,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,wi(r)}else break e;else return c.a,c.d,wi(r);else break e;return r}}),Xn=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(W,r,n,a,Xn(t),l);var u=cl(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Yr,$,s,d,Xn(m),f)}else return or}else return S(W,r,n,a,Xn(t),l)}else return or},mn=v(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(W,n,a,t,o(mn,e,i),c);var u=cl(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Yr,$,s,d,o(mn,e,m),f)}else return or}else return S(W,n,a,t,o(mn,e,i),c);else return o(Zs,e,Wt(Ys,e,r,n,a,t,i,c))}),Zs=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(yr(e,a)){var l=qs(c);if(l.$===-1){var u=l.b,$=l.c;return S(Yr,n,u,$,i,Xn(c))}else return or}else return S(Yr,n,a,t,i,o(mn,e,c))}else return or}),Xs=v(function(e,r){var n=o(mn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(W,1,a,t,i,c)}else{var l=n;return l}}),jn=y(function(e,r,n){var a=r(o(il,e,n));if(a.$)return o(Xs,e,n);var t=a.a;return p(Zn,e,t,n)}),Qs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(jn,r,pe(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ns,k(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(jn,r,pe(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Es,k(i,c),p(Js,i,c,n))}));case 3:var r=e.a,n=e.b;return o(jn,r,pe(function(a){return a.$===3?Vs(n):a}));default:var r=e.a,n=e.b;return o(jn,r,pe(function(a){return a.$===2?Rs(n):a}))}},Ks=function(e){return Fs(Qs(e))},ed=v(function(e,r){return o(ee,Ks(e),r)}),rd=v(function(e,r){return ce(r,{eQ:o(ed,e,r.eQ)})}),nd=v(function(e,r){var n=r.a,a=r.b;return o(We,n,ce(a,{A:o(Xc,rd(e),a.A)}))}),ad=v(function(e,r){var n=r.a,a=r.b;return k(n,e(a))}),td=y(function(e,r,n){var a=n.a,t=n.b,i=t.A;return o(We,a,ce(t,{A:o(ad,o(e,i.a,r),i)}))}),od=F(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return ce(a,{aO:!a.aO});case 2:var t=n.a;return ce(a,{G:p(zs,e,t,a.G)});case 3:var i=n.a;return ce(a,{G:o(nd,i,a.G)});case 4:var c=n.a;return ce(a,{G:p(td,r,c,a.G)});default:var l=n.a;return ce(a,{G:o(Bs,l,a.G)})}}),id=v(function(e,r){return o(We,Aa,{A:k(e,r(e)),ac:L,T:L})}),cd=c$,yi=cd(L),$a=Uv,Sn=Iv,ld=f$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({eP:c,ci:i,dp:t,fl:a,bn:n,b3:r,f2:e})},o(T,"clock",ve))},o(T,"devicePixelRatio",ve))},o(T,"dt",ve))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Me({eD:d,eR:s,$7:$,eY:u,fm:l,fE:c,fJ:i,fO:t,ew:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",$a(Sn)))},o(T,"left",Z))},o(T,"pressedKeys",$a(Sn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Me({$7:$,dB:u,fr:l,fK:c,fL:i,ew:t,f5:a,f9:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ve))},o(T,"y",ve))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Me({e9:n,f3:r})},o(T,"height",ve))},o(T,"width",ve))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Me({eT:r,eU:e})},o(T,"deltaX",ve))},o(T,"deltaY",ve))))),ud=function(e){return{$:4,a:e}},vd={$:0},$d=lc,Ue=v(function(e,r){return o(dc,e,$d(r))}),q=Ue("className"),fd=function(e){var r=e.b.A;return r.b},fa=Ue("id"),sd=g$,sa=sd,dd=h$,fe=dd,md={$:1},pd=function(e){return{$:3,a:e}},bd=function(e){return{$:5,a:e}},xi=Ar("a"),$o=Ar("button"),gd=zn("d"),ll=fc("http://www.w3.org/2000/svg"),hd=ll("path"),_d=ll("svg"),wd=zn("viewBox"),pn=function(e){return o(_d,_([wd("0 0 100 100"),o(fe,"width","100%"),o(fe,"height","100%")]),_([o(hd,_([gd(e)]),L)]))},Si=function(e){return o(Ue,"href",w$(e))},Or={eX:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",e3:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",e8:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fC:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fD:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",bn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fG:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fQ:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fZ:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",f$:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",gd:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},yd=function(e){return{$:0,a:e}},ul=sc,vl=v(function(e,r){return o(ul,e,yd(r))}),fo=function(e){return o(vl,"click",Me(e))},Ci=Ue("target"),xd=Ue("title"),yt=v(function(e,r){if(r.$===-2)return or;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(W,n,a,o(e,a,t),o(yt,e,i),o(yt,e,c))}),Sd=$t,sr=Sd,Cd=function(e){return p(Kt,y(function(r,n,a){return o(M,n,a)}),L,e)},Pd=v(function(e,r){return{$:3,a:e,b:r}}),Ld=v(function(e,r){return{$:2,a:e,b:r}}),zd=v(function(e,r){return{$:0,a:e,b:r}}),kd=v(function(e,r){return{$:1,a:e,b:r}}),Ze=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Td=C(Ze,0/255,0/255,0/255,1),Md=lc,Dd=v(function(e,r){return o(dc,e,Md(r))}),Ad=Dd("checked"),Ve=hv,Bd=y(function(e,r,n){return le(o(xn,e-kr(n),Ba(r)),n)}),Zr=vv,$l=function(e){var r=function(n){return n<10?Ae(n):Ba(el(87+n))};return e<16?r(e):le($l(e/16|0),r(o(Zr,16,e)))},Fd=o(te,$l,o(Bd,2,"0")),so=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aK:t,cd:a,ck:n,cV:r}},Vd=function(e){var r=so(e),n=r.cV,a=r.ck,t=r.cd;return o(zr,"",o(M,"#",o(ee,o(te,Ve,Fd),_([n*255,a*255,t*255]))))},xt=Ue("htmlFor"),St=v(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),da=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),Rd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(M,t,n)}),fl=v(function(e,r){return p(mr,Rd(e),L,r)}),sl=F(function(e,r,n,a){return{fe:r,fp:e,fx:n,fT:a}}),Ed=I$,Nd=Ev,jd=v(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Wd=H$,Gd=function(e){return o(Wd,{eL:!1,fs:!1},e)},ma=function(e){if(e.b){var r=e.a;return e.b,re(r)}else return Y},Hd=v(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Id=function(e){return{$:2,a:e}},Ud=function(e){return{$:0,a:e}},Od=function(e){return{$:1,a:e}},Ha=v(function(e,r){return nr(r)-nr(e)}),Ia=y(function(e,r,n){var a=nr(n);return J(nr(e),a)<1&&J(a,nr(r))<1}),Jd=v(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Od(r))},a=p(Ia,"0","9",r)?ue(o(Ha,"0",r)):p(Ia,"a","z",r)?ue(10+o(Ha,"a",r)):p(Ia,"A","Z",r)?ue(10+o(Ha,"A",r)):ye(Ud(r));return o(da,n,a)}),dl=v(function(e,r){var n=en(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(da,function(c){return o(da,function(l){return ue(c+l*e)},o(dl,e,i))},o(Jd,e,t))}),qd=v(function(e,r){return 2<=e&&e<=36?o(dl,e,_t(r)):ye(Id(e))}),Yd=qd(16),Zd=y(function(e,r,n){return C(Ze,e,r,n,1)}),Xd=F(function(e,r,n,a){return C(Ze,e,r,n,a)}),Dn=uv,Qd=v(function(e,r){var n=o(Dn,10,e);return Ve(r*n)/n}),Kd=Mv,em=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Kc(n);if(a.b&&!a.b.b){var t=a.a;return Nd(_([t,t]))}else return n};return o(te,Kd,o(te,function(n){return o(pe,function(a){return p(Ed,1,a,n)},Gd(e))},o(te,St(ma),o(te,pe(function(n){return n.fT}),o(te,pe(fl(gr)),o(te,jd("Parsing hex regex failed"),da(function(n){var a=o(ee,o(te,r,o(te,Yd,Hd(as))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(C(Xd,t/255,c/255,u/255,o(Qd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Zd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),pa=Ar("input"),Ct=Ar("label"),Pt=Ue("name"),ml=v(function(e,r){return p(mr,T,r,e)}),rm=o(ml,_(["target","checked"]),Z),nm=function(e){return o(vl,"change",o(la,e,rm))},am=function(e){return k(e,!0)},tm=function(e){return{$:1,a:e}},om=v(function(e,r){return o(ul,e,tm(r))}),im=o(ml,_(["target","value"]),Sn),mo=function(e){return o(om,"input",o(la,am,o(la,e,im)))},pl=Ue("max"),bl=Ue("min"),gl=function(e){return o(Ue,"step",e)},ba=Ue("type"),po=Ue("value"),Pi=function(e){var r=e.cn,n=e.c9,a=e.cD,t=e.cz,i=e.c2,c=e.cH;return o(O,L,_([o(Ct,_([xt(r)]),_([o(O,_([q("relative w-full")]),_([o(O,_([q("inline-block")]),_([sr(r)])),o(O,_([q("inline-block float-right")]),_([sr(de(n))]))]))])),o(pa,_([ba("range"),o(fe,"width","100%"),fa(r),Pt(r),bl(de(a)),pl(de(t)),po(de(n)),gl(de(i)),mo(o(te,vo,o(te,Fe(42),c)))]),L)]))},cm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),lm=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(O,L,_([o(O,_([q("mb-2")]),_([o(Ct,_([xt(e)]),_([sr(e)]))])),o(pa,_([ba("checkbox"),fa(e),Pt(e),nm(Pd(e)),Ad(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Pi({cn:e,cz:i,cD:t,cH:zd(e),c2:.01*(i-t),c9:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Pi({cn:e,cz:i,cD:t,cH:o(te,Ve,kd(e)),c2:1,c9:c});default:var c=r.a;return o(O,L,_([o(O,_([o(fe,"margin-bottom","6px")]),_([o(Ct,_([xt(e)]),_([sr(e)]))])),o(pa,_([ba("color"),o(fe,"width","100%"),o(fe,"height","26px"),o(fe,"padding","0px"),fa(e),Pt(e),mo(function(l){return o(Ld,e,o(cm,Td,em(l)))}),po(Vd(c))]),L)]))}}),um=function(e){return o(O,_([q("p-4 border-y-[0.5px] border-white20")]),_([o(O,_([q("text-lg pb-2")]),_([sr(e.ft)])),o(O,_([q("pl-2 pr-2")]),Cd(o(yt,lm,e.ax)))]))},vm=function(e){return o(O,_([q("text-xs text-white60")]),o(ee,um,e))},$m=function(e){return o(O,_([q("absolute left-[104px] bottom-2 text-sm text-white40")]),_([sr("clock: "+o(tl,3,rn(e).eP))]))},fm=function(e){e.a;var r=e.b.T;return o(pe,function(n){return Ve(60/(rn(e).eP-n))},o(pe,o(te,cs,function(n){return n.eP}),ma(o(Yc,59,r))))},sm=function(e){return o(O,_([q("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=fm(e);if(r.$===1)return _([sr("... Fps")]);var n=r.a;return _([sr(Ae(n)+" Fps")])}())},dm=function(e){return{$:0,a:e}},mm=function(e){var r=e.b.T;return xr(r)},pm=function(e){var r=e.b.T;e.b.A;var n=e.b.ac;return xr(r)+1+xr(n)},bm=function(e){return o(pa,_([q("absolute w-full"),ba("range"),bl(Ae(0)),pl(Ae(pm(e)-1)),po(Ae(mm(e))),gl(Ae(1)),mo(o(te,vo,o(te,Fe(42),o(te,Ve,dm))))]),L)},Li={$:1},gm={$:3},hm={$:2},hl=function(e){return!e.b},zi=v(function(e,r){return o($o,_([q("px-2 bg-black40"),q(r),fo(e)]),_([sr("REC")]))}),ki=v(function(e,r){return o($o,_([q("absolute left-[60px] mx-1 px-1 bg-black40"),fo(r)]),_([o(O,_([q("w-4 h-6 fill-white80")]),_([pn(e)]))]))}),_m=function(e){var r=e.a,n=e.b.ac;return o(O,_([q("py-1")]),_([function(){switch(r.$){case 0:return o(zi,Li,"text-red-500 font-bold");case 1:return o(zi,hm,"text-white80 font-bold");default:return o(O,L,L)}}(),function(){switch(r.$){case 0:return o(O,L,L);case 1:return hl(n)?o(O,L,L):o(ki,Or.fD,gm);default:return o(ki,Or.fC,Li)}}()]))},wm=function(e){return o(O,_([q("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([bm(e),_m(e),sm(e),$m(e)]))},ym=function(e){var r=e.a;return yr(r,Aa)},xm=v(function(e,r){var n=ym(r.G)?o(O,L,L):o(O,_([q("absolute pointer-events-none w-8 h-8"),o(fe,"left",de(e.bn.f5+.5*e.b3.f3)+"px"),o(fe,"top",de(-e.bn.f9+.5*e.b3.e9)+"px")]),_([o(O,_([q(e.bn.dB?"fill-black80":"fill-white40")]),_([pn(Or.bn)]))]));return o(O,L,_([n]))}),Sm=v(function(e,r){var n=o($o,_([q(r.aO?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),fo(md),xd("Distraction Free Mode")]),_([pn(Or.gd)])),a=o(O,_([q("absolute w-8 bottom-12")]),_([o(xi,_([q("fill-twitterBlue40 hover:fill-twitterBlue"),Si("https://twitter.com/AzizErkalSelman"),Ci("_blank")]),_([pn(Or.fZ)]))])),t=o(O,_([q("absolute w-8 bottom-2")]),_([o(xi,_([q("fill-githubCat40 hover:fill-githubCat"),Si("https://github.com/erkal/elm-3d-playground-exploration"),Ci("_blank")]),_([pn(Or.e3)]))]));return r.aO?o(O,_([q("fixed w-10 h-10 p-1")]),_([n])):o(O,L,_([o(O,_([q("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(O,_([q("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(fe,"height",de(e.b3.e9-80)+"px")]),_([o(sa,pd,vm(rn(r.G).eQ))])),o(O,_([q("absolute bottom-0 left-10 h-20"),o(fe,"width",e.b3.f3>600?"600px":de(e.b3.f3-40)+"px")]),_([o(sa,bd,wm(r.G))])),o(xm,e,r)]))}),Cm=y(function(e,r,n){var a=fd(n.G),t=rn(n.G);return o(O,_([q("bg-black40"),q("select-none"),q("antialiased"),q("font-mono"),o(fe,"width",de(t.b3.f3)+"px"),o(fe,"height",de(t.b3.e9)+"px")]),_([o(O,_([q("fixed")]),_([o(sa,Hc(vd),o(e,t,a))])),o(O,_([fa("gui")]),_([o(Sm,t,n),o(sa,ud,o(r,t,a))]))]))}),Pm=Ie(function(e,r,n,a,t,i){var c=v(function(u,$){return k(C(od,r,i,u,$),yi)}),l=function(u){var $=o(Ic,n,u.fg);return k({aO:u.fg.b3.f3<500,G:o(id,$,a)},yi)};return Cs({ff:l,fU:Hc(ld(fs)),f_:c,f1:o(Cm,e,t)})}),Lm=F(function(e,r,n,a){return we(Pm,e,r,n,a,v(function(t,i){return o(O,L,L)}),y(function(t,i,c){return c}))}),zm=y(function(e,r,n){return C(Lm,e,r,L,n)}),km=C(Ze,85/255,87/255,83/255,1),Tm=C(Ze,32/255,74/255,135/255,1),Mm=C(Ze,211/255,215/255,207/255,1),_l=function(e){return{$:0,a:e}},Dm=y(function(e,r,n){e:for(;;){var a=o(to,Be,e),t=a.a,i=a.b;if(J(pt(t),Be)<0)return o(Gc,!0,{y:r,l:n,o:t});var c=i,l=o(M,Wc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),Fa=function(e){return e.b?p(Dm,e,L,0):Nc},Am=v(function(e,r){return{dv:e,am:L,C:0,cY:Fa(r),aE:_l({a$:0,a2:0})}}),Bm=C(Ze,114/255,159/255,207/255,1),Fm=C(Ze,233/255,185/255,110/255,1),Vm=C(Ze,245/255,121/255,0/255,1),Rm=C(Ze,117/255,80/255,123/255,1),Em=function(e){return o(Am,Fm,_([Rm,km,Tm,Bm,Mm,Vm]))},Xr=$v,ga=function(e){return e},Ir=function(e){return ga(Xr*(e/180))},pr=_v,Nm=v(function(e,r){var n=e,a=r,t=a.de-n.de,i=a.f9-n.f9,c=a.f5-n.f5,l=o(Te,U(c),o(Te,U(i),U(t)));if(l){var u=t/l,$=i/l,s=c/l,d=pr(s*s+$*$+u*u);return re({f5:s/d,f9:$/d,de:u/d})}else return Y}),Ua=function(e){return e},bo=v(function(e,r){var n=e,a=r;return{f5:a.f9*n.de-a.de*n.f9,f9:a.de*n.f5-a.f5*n.de,de:a.f5*n.f9-a.f9*n.f5}}),bn=function(e){var r=e,n=o(Te,U(r.f5),o(Te,U(r.f9),U(r.de)));if(n){var a=r.de/n,t=r.f9/n,i=r.f5/n,c=pr(i*i+t*t+a*a);return re({f5:i/c,f9:t/c,de:a/c})}else return Y},ha=v(function(e,r){var n=e,a=r;return{f5:a.f5-n.f5,f9:a.f9-n.f9,de:a.de-n.de}}),jm=v(function(e,r){var n=e,a=r;return a.f5*n.f5+a.f9*n.f9+a.de*n.de}),wl=v(function(e,r){var n=e,a=r;return J(a,n)>0}),Wm=v(function(e,r){var n=e,a=r;return J(a,n)<0}),Gm=v(function(e,r){var n=e,a=r;return{f5:a.f5-n.f5,f9:a.f9-n.f9,de:a.de-n.de}}),Hm=v(function(e,r){var n=e,a=r,t=a.f5*n.f5+a.f9*n.f9+a.de*n.de;return{f5:n.f5*t,f9:n.f9*t,de:n.de*t}}),Im=function(e){var r=e;return{f5:-r.f5,f9:-r.f9,de:-r.de}},je=0,yl={f5:0,f9:0,de:0},Um=y(function(e,r,n){return o(St,function(a){var t=o(Gm,o(Hm,a,r),r);return o(St,function(i){var c=o(bo,r,e),l=o(jm,n,c),u=o(wl,je,l)?c:o(Wm,je,l)?Im(c):yl;return o(pe,function($){return B(a,i,$)},bn(u))},bn(t))},bn(e))}),Om=function(e){var r=e,n=U(r.de),a=U(r.f9),t=U(r.f5);if(J(t,a)<1)if(J(t,n)<1){var i=pr(r.de*r.de+r.f9*r.f9);return{f5:0,f9:-r.de/i,de:r.f9/i}}else{var i=pr(r.f9*r.f9+r.f5*r.f5);return{f5:-r.f9/i,f9:r.f5/i,de:0}}else if(J(a,n)<1){var i=pr(r.de*r.de+r.f5*r.f5);return{f5:r.de/i,f9:0,de:-r.f5/i}}else{var i=pr(r.f5*r.f5+r.f9*r.f9);return{f5:-r.f9/i,f9:r.f5/i,de:0}}},go=function(e){var r=Om(e),n=r,a=n,t=e,i=t,c={f5:i.f9*a.de-i.de*a.f9,f9:i.de*a.f5-i.f5*a.de,de:i.f5*a.f9-i.f9*a.f5};return k(r,c)},Ur=function(e){var r=e;return r},ir=function(e){return e},Jm=v(function(e,r){var n=go(e),a=n.a,t=n.b;return ir({cI:r,dc:a,dd:t,df:e})}),qm=function(e){var r=o(ha,e.aU,e.du),n=Ur(e.ex),a=o(bo,r,n),t=p(Um,r,n,a);if(t.$){var $=bn(r);if($.$){var d=go(e.ex),m=d.a,f=d.b;return ir({cI:e.du,dc:f,dd:e.ex,df:m})}else{var s=$.a;return o(Jm,s,e.du)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return ir({cI:e.du,dc:u,dd:l,df:c})}},Ke={f5:0,f9:0,de:0},Ym=function(e){return{$:0,a:e}},oe=function(e){var r=e;return U(r)},Qn=function(e){var r=e;return .5*r},Zm=dv,Xm=function(e){var r=e;return Zm(r)},Qm=function(e){var r=Qn(oe(e.ey)),n=Xm(r);return{cU:Ym(n),da:e.da}},vr=function(e){return e},ho=vr({f5:0,f9:1,de:0}),Km=function(e){var r=e.aU,n=e.du,a=e.ex;return Qm({ey:Ir(40),da:qm({du:Ua(n),aU:Ua(r),ex:o(Fe,ho,o(Nm,Ke,Ua(a)))})})},xl=Km({du:{f5:0,f9:-.2,de:1},aU:{f5:0,f9:0,de:0},ex:{f5:0,f9:1,de:0}}),ar=function(e){return e},ep=y(function(e,r,n){return{f5:e,f9:r,de:n}}),Wn=function(e){return e},Kn=function(e){var r=e;return r},rp=v(function(e,r){var n=e,a=r;return a.f5*n.f5+a.f9*n.f9+a.de*n.de}),_o=function(e){var r=e;return r.eW},X=v(function(e,r){var n=r;return e*n}),wo=function(e){var r=e;return r.cI},np=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.fv,l=c;return(a.f5-i.f5)*l.f5+(a.f9-i.f9)*l.f9+(a.de-i.de)*l.de}),ap=y(function(e,r,n){var a=e,t=r,i=n;return{f5:i.f5+t*a.f5,f9:i.f9+t*a.f9,de:i.de+t*a.de}}),tp=v(function(e,r){var n=_o(r),a=e,t=a.fv,i=o(rp,t,n);if(i){var c=wo(r),l=o(np,e,c),u=o(X,-1/i,l);return re(p(ap,n,u,c))}else return Y}),op=v(function(e,r){return{f5:e,f9:r}}),Ti=v(function(e,r){var n=e,a=r;return n*a}),ip=function(e){var r=e;return r},Mi=function(e){var r=e;return ip(r.eG)},cp=function(e){var r=e;return r.aN},Sl=v(function(e,r){var n=r;return n/e}),nn=function(e){var r=e;return r.cI},Lt=function(e){var r=e;return nn(r)},zt=function(e){var r=e;return-r},yo=vr({f5:0,f9:0,de:-1}),lp=v(function(e,r){var n=e,a=r;return a/n}),up=v(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,$=u;return{f5:$.f5*a.f5+l.f5*a.f9+i.f5*a.de,f9:$.f9*a.f5+l.f9*a.f9+i.f9*a.de,de:$.de*a.f5+l.de*a.f9+i.de*a.de}}),_a=v(function(e,r){return{eW:r,cI:e}}),$r=function(e){var r=e;return{f5:-r.f5,f9:-r.f9,de:-r.de}},Br=function(e){var r=e;return r.df},kt=function(e){var r=e;return $r(Br(r))},vp=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dc,l=c;return(a.f5-i.f5)*l.f5+(a.f9-i.f9)*l.f9}),xo=y(function(e,r,n){var a=e,t=r,i=n;return{f5:a,f9:t,de:i}}),$p=F(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cI,$=u,s=t.df,d=s,m=t.dd,f=m,g=t.dc,b=g;return{f5:$.f5+i*b.f5+c*f.f5+l*d.f5,f9:$.f9+i*b.f9+c*f.f9+l*d.f9,de:$.de+i*b.de+c*f.de+l*d.de}}),fp=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=n.dd,l=c;return(a.f5-i.f5)*l.f5+(a.f9-i.f9)*l.f9}),sp=y(function(e,r,n){var a=e,t=o(fp,Mi(r),n),i=o(vp,Mi(r),n),c=a.da,l=c,u=cp(r);u.a;var $=u.b,s=a.cU;if(s.$){var g=s.a,b=o(lp,$,g),w=C($p,l,o(Ti,b,i),o(Ti,b,t),je);return o(_a,w,kt(a.da))}else{var d=s.a,m=zt(o(Sl,d,o(X,.5,$))),f=o(up,l,o(Fe,yo,bn(p(xo,i,t,m))));return o(_a,Lt(a.da),f)}}),wa=fv,ya=sv,Tt=function(e){var r=e;return{f5:wa(r),f9:ya(r)}},dp=function(e){var r=e;return{f5:-r.f9,f9:r.f5}},mp=function(e){return e},pp=v(function(e,r){return mp({cI:r,dc:e,dd:dp(e)})}),bp=v(function(e,r){return o(pp,Tt(e),r)}),gp=y(function(e,r,n){var a=e.a,t=e.b;return{eG:o(bp,r,n),aN:k(oe(a),oe(t))}}),hr=function(e){var r=e;return r.f5},hp=v(function(e,r){var n=e,a=r;return{f5:n,f9:a}}),_r=function(e){var r=e;return r.f9},wr=function(e){var r=e;return r.de},_p=F(function(e,r,n,a){var t=n.f5,i=n.f9,c=function($){return p(ep,Kn(hr($)),Kn(_r($)),Kn(wr($)))},l=p(gp,k(Wn(r.f3),Wn(r.e9)),Ir(0),o(op,0,0)),u=o(hp,Wn(t),Wn(i));return o(pe,c,o(tp,a,p(sp,e,l,u)))}),an=v(function(e,r){var n=e,a=r;return{f5:a.f5+n.f5,f9:a.f9+n.f9,de:a.de+n.de}}),wp=v(function(e,r){return{fv:e,cI:r}}),yp=v(function(e,r){var n=r;return o(wp,n.fv,o(an,e,n.cI))}),xp=v(function(e,r){return{fv:r,cI:e}}),So=vr({f5:0,f9:0,de:1}),Co=So,Sp=o(xp,Ke,Co),Cp=F(function(e,r,n,a){return C(_p,r,n,a,o(yp,p(xo,ar(0),ar(0),ar(e)),Sp))}),Pp=Cp(0),Di=v(function(e,r){return e?r:gr}),Lp=y(function(e,r,n){var a=e.bn,t=r.ed,i=r.ej,c=n;return ce(c,{C:i-(t-a.f5)})}),Tr={V:.35,bk:6},zp=F(function(e,r,n,a){var t=a;return J(U(r-t.C),.5*Tr.V)<0?ce(t,{C:t.C+.1*(r-t.C)}):ce(t,{C:t.C+e*n})}),kp=function(e){var r=e;return ce(r,{am:L})},Tp=function(e){return{$:1,a:e}},Mp=v(function(e,r){var n=r;return ce(n,{aE:Tp({ed:e.bn.f5,ej:n.C})})}),Po=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Cl=v(function(e,r){return e*Ve(r/e)}),Dp=function(e){return p(kn,Of,0,e)},Ap=function(e){var r=e,n=Dp(o(uo,xr(r.am)-1,o(ee,function(u){return u.dn},r.am))),a=k(o(Fe,0,o(pe,function(u){return u.cS},ma(r.am))),o(Fe,0,o(pe,function(u){return u.cS},ma(ke(r.am))))),t=a.a,i=a.b,c=t-i,l=n?c/n:0;return ce(r,{aE:_l({a$:p(Po,-Tr.bk,Tr.bk,l),a2:o(Cl,Tr.V,r.C+.3*l)})})},Bp=v(function(e,r){var n=e.dp,a=e.bn,t=r;return ce(t,{am:o(uo,6,o(M,{dn:n,cS:a.f5},t.am))})}),Fp=v(function(e,r){var n=r,a=n.aE;if(a.$===1){var t=a.a;return p(Di,!e.bn.dB,Ap,p(Lp,e,t,o(Bp,e,n)))}else{var i=a.a.a2,c=a.a.a$;return C(zp,e.dp,i,c,p(Di,e.bn.dB,Mp(e),kp(n)))}}),Vp=v(function(e,r){var n=e.bn,a=o(Fe,{f5:0,f9:0,de:0},p(Pp,xl,e.b3,n)),t=a.f5,i=a.f9,c=ce(e,{bn:ce(n,{f5:t,f9:i})});return o(Fp,c,r)}),Ai=function(e){return e*Xr/180},Lo=v(function(e,r){return{$:0,a:e,b:r}}),Oa=v(function(e,r){var n=e,a=r;return J(a,n)>-1}),Ja=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),fr=v(function(e,r){var n=e,a=r;return a-n}),Rp=vr({f5:-1,f9:0,de:0}),Ep=vr({f5:0,f9:-1,de:0}),Pl=vr({f5:1,f9:0,de:0}),se=y(function(e,r,n){var a=e,t=r,i=n;return{f5:a,f9:t,de:i}}),Np=Ie(function(e,r,n,a,t,i){var c=o(Oa,n,i)?So:yo,l=o(Oa,r,t)?ho:Ep,u=o(Oa,e,a)?Pl:Rp,$=B(oe(o(fr,e,a)),oe(o(fr,r,t)),oe(o(fr,n,i))),s=p(se,o(Ja,e,a),o(Ja,r,t),o(Ja,n,i)),d=ir({cI:s,dc:u,dd:l,df:c});return{eG:d,aN:$}}),jp=v(function(e,r){return we(Np,hr(e),_r(e),wr(e),hr(r),_r(r),wr(r))}),Mt=y(function(e,r,n){return{f5:e,f9:r,de:n}}),Wp=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Lo,e,o(jp,p(Mt,-c,-l,-u),p(Mt,c,l,u)))}),Dt=function(e){return{$:0,a:e}},Ll=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),qa=function(e){return p(Po,0,1,e<=.04045?e/12.92:o(Dn,(e+.055)/1.055,2.4))},An=J$,Gp=function(e){var r=so(e),n=r.cV,a=r.ck,t=r.cd;return p(An,qa(n),qa(a),qa(t))},Hp=function(e){return p(Ll,0,Dt(Gp(e)),Dt(0))},Ip=v(function(e,r){return o(Wp,Hp(r),B(.2,.3,.3))}),At=4294967295>>>32-yn,Bt=nv,Up=y(function(e,r,n){e:for(;;){var a=At&r>>>e,t=o(Bt,a,n);if(t.$){var $=t.a;return o(Bt,At&r,$)}else{var i=t.a,c=e-yn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Op=function(e){return e>>>5<<5},zl=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?Y:J(e,Op(n))>-1?re(o(Bt,At&e,i)):re(p(Up,a,e,t))}),kl=function(e){var r=e.a;return r},Tl=function(e){var r=e;return kl(r.cY)+1},Ml=v(function(e,r){var n=r,a=o(Zr,Tl(n),e);return{di:o(Fe,n.dv,o(zl,a-1,n.cY)),fe:a,fw:n.C-o(Cl,Tr.V,n.C)}}),Jp=function(e){var r=e;return o(Zr,Tl(r),Ve(-r.C/Tr.V))},qp=function(e){var r=e;return o(Ml,Jp(r),r)},zo=function(e){return{$:5,a:e}},Yp=function(e){return zo(e)},Dl=v(function(e,r){return{$:2,a:e,b:r}}),Al=v(function(e,r){return{$:4,a:e,b:r}}),Bl=v(function(e,r){return{$:3,a:e,b:r}}),Fl=v(function(e,r){return{$:1,a:e,b:r}}),Zp=y(function(e,r,n){return{f5:e,f9:r,de:n}}),Xp=function(e){var r=e;return r},ko=function(e){var r=e;return Xp(r.eG)},To=function(e){var r=e;return r.aN},Fr=function(e){var r=e;return r.dc},Vr=function(e){var r=e;return r.dd},Qp=v(function(e,r){return ir({cI:o(an,e,nn(r)),dc:Fr(r),dd:Vr(r),df:Br(r)})}),Kp=v(function(e,r){return{eG:o(Qp,e,ko(r)),aN:To(r)}}),e0=v(function(e,r){var n=r;return o(_a,o(an,e,n.cI),n.eW)}),r0=v(function(e,r){var n=r;return{k:o(e0,e,n.k),fn:n.fn,fF:n.fF}}),Mo=function(e){var r=e;return r},n0=function(e){return e},Vl=v(function(e,r){var n=Mo(r),a=n.a,t=n.b;return n0(k(e(a),e(t)))}),a0=v(function(e,r){return o(Vl,an(e),r)}),Do=function(e){var r=e;return r.eN},Ao=function(e){var r=e;return r.fF},Rl=v(function(e,r){return{eN:r,fF:oe(e)}}),t0=v(function(e,r){return o(Rl,Ao(r),o(an,e,Do(r)))}),El=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),o0=v(function(e,r){return o(El,an(e),r)}),Bo=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Zp,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Lo,s,o(Kp,i,c));case 1:var s=r.a,l=r.b;return o(Fl,s,o(o0,i,l));case 3:var s=r.a,u=r.b;return o(Bl,s,o(t0,i,u));case 2:var s=r.a,$=r.b;return o(Dl,s,o(r0,i,$));case 4:var s=r.a,d=r.b;return o(Al,s,o(a0,i,d));default:var m=r.a;return zo(o(ee,Bo(B(n,a,t)),m))}}),i0=function(e){return Bo(B(e,0,0))},c0=function(e){return Bo(B(0,e,0))},Bn=y(function(e,r,n){var a=e,t=n;return{f5:a.f5+r*(t.f5-a.f5),f9:a.f9+r*(t.f9-a.f9),de:a.de+r*(t.de-a.de)}}),l0=y(function(e,r,n){var a=ko(n),t=Fr(a),i=Vr(a),c=Br(a),l=p(Bn,e,r,nn(a)),u=r>=0?ir({cI:l,dc:t,dd:i,df:c}):ir({cI:l,dc:$r(t),dd:$r(i),df:$r(c)}),$=To(n),s=$.a,d=$.b,m=$.c,f=oe(o(X,r,s)),g=oe(o(X,r,d)),b=oe(o(X,r,m));return{eG:u,aN:B(f,g,b)}}),Fo=function(e){var r=e;return r.k},Bi=function(e){return _o(Fo(e))},u0=function(e){return wo(Fo(e))},Nl=function(e){var r=e;return r.fn},jl=function(e){var r=e;return r.fF},v0=y(function(e,r,n){var a=oe(o(X,r,jl(n))),t=oe(o(X,r,Nl(n))),i=r>=0?Bi(n):$r(Bi(n)),c=p(Bn,e,r,u0(n));return{k:o(_a,c,i),fn:t,fF:a}}),$0=y(function(e,r,n){return o(Vl,o(Bn,e,r),n)}),f0=y(function(e,r,n){return o(Rl,o(X,U(r),Ao(n)),p(Bn,e,r,Do(n)))}),s0=y(function(e,r,n){return o(El,o(Bn,e,r),n)}),Wl=v(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Lo,c,p(l0,Ke,e,n));case 1:var c=r.a,a=r.b;return o(Fl,c,p(s0,Ke,e,a));case 3:var c=r.a,t=r.b;return o(Bl,c,p(f0,Ke,e,t));case 2:var c=r.a,i=r.b;return o(Dl,c,p(v0,Ke,e,i));case 4:var c=r.a,l=r.b;return o(Al,c,p($0,Ke,e,l));default:var u=r.a;return zo(o(ee,Wl(e),u))}}),d0=v(function(e,r){var n=qp(r),a=n.fw,t=n.fe,i=function(l){return a+(l-t)*Tr.V},c=function(l){return o(i0,i(l),o(c0,-(.1*U(i(l))),o(Wl,1-.7*U(i(l)),o(Ip,e,o(Ml,l,r).di))))};return Yp(o(ee,c,o(Mr,t-3,t+3)))}),Ya=function(e){return e/255},m0=y(function(e,r,n){return C(Ze,Ya(e),Ya(r),Ya(n),1)}),p0=function(e){return e},b0=function(e){return ar(.01*e)},Fi=function(e){return e},g0=function(e){return e},h0=function(e){return{$:0,a:e}},_0=h0,w0={$:3},y0=w0,x0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),S0=x0,C0=v(function(e,r){return r.b?p(mr,M,r,e):e}),Ge=function(e){return p(mr,C0,L,e)},Vo=v(function(e,r){return Ge(o(ee,e,r))}),P0=function(e){return{$:1,a:e}},L0=P0,z0=function(e){return o(zn,"height",Ae(e))},k0=function(e){return p$(_$(e))},T0=k0,M0=function(e){return{$:2,a:e}},D0=M0,A0=function(e){return o(zr,"",e)},B0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ve(l*1e3)/1e3},c=function(l){return Ve(l*1e4)/100};return A0(_(["rgba(",de(c(r)),"%,",de(c(n)),"%,",de(c(a)),"%,",de(i(t)),")"]))},F0=v(function(e,r){switch(r.$){case 0:return o(Vf,e,r);case 1:return o(Rf,e,r);case 2:return o(Ef,e,r);case 3:return o(Nf,e,r);case 4:return o(jf,e,r);default:return o(Wf,e,r)}}),V0=v(function(e,r){switch(r.$){case 0:return o(ff,e,r);case 1:return o(sf,e,r);case 2:return o(df,e,r);case 3:return o(mf,e,r);case 4:return o(pf,e,r);case 5:return o(bf,e,r);case 6:return o(gf,e,r);case 7:return o(hf,e,r);default:return _f(e)}}),R0=y(function(e,r,n){return p(Ff,e,r,n)}),Vi=function(e){var r=e;return r},tn=K$,Za=C(tn,1,1,1,1),Xe=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),E0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),N0=v(function(e,r){var n=e,a=r.f5,t=r.f9;return p(E0,n*a/t,n,n*(1-a-t)/t)}),j0=function(e){var r=e.a,n=e.b,a=e.c;return p(An,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ro=v(function(e,r){return j0(o(N0,e,r))}),Gl=v(function(e,r){return{dC:yr(e.dC,r.dC),p:e.p*r.p+e.q*r.s+e.r*r.v,q:e.p*r.q+e.q*r.t+e.r*r.w,r:e.p*r.r+e.q*r.u+e.r*r.x,s:e.s*r.p+e.t*r.s+e.u*r.v,t:e.s*r.q+e.t*r.t+e.u*r.w,u:e.s*r.r+e.t*r.u+e.u*r.x,v:e.v*r.p+e.w*r.s+e.x*r.v,w:e.v*r.q+e.w*r.t+e.x*r.w,x:e.v*r.r+e.w*r.u+e.x*r.x,H:r.H+(e.H*r.p+e.I*r.s+e.J*r.v)*r.b2,I:r.I+(e.H*r.q+e.I*r.t+e.J*r.w)*r.b2,J:r.J+(e.H*r.r+e.I*r.u+e.J*r.x)*r.b2,b2:e.b2*r.b2}}),er=of,W0=function(e){return er({dK:e.p,dL:e.s,dM:e.v,dN:e.H,dO:e.q,dP:e.t,dQ:e.w,dR:e.I,dS:e.r,dT:e.u,dU:e.x,dV:e.J,dW:0,dX:0,dY:0,dZ:1})},Xa=be(function(e,r,n,a,t){var i=a.dC?1:-1,c=C(tn,a.b2,a.b2,a.b2,i);return we(t,e,c,W0(a),a.dC,r,n)}),Hl=Ie(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Gl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(M,S(Xa,e,r,n,a,g),i.M);return{M:b,U:i.U,fN:i.fN};case 3:var w=t.b,x=o(M,S(Xa,e,r,n,a,w),i.U);return{M:i.M,U:x,fN:i.fN};case 2:var h=t.a,P=o(M,S(Xa,e,r,n,a,h),i.fN);return{M:i.M,U:i.U,fN:P};default:var A=t.a;return p(kn,C(Hl,e,r,n,a),i,A)}}),G0=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Il=G0,Eo=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),H0=function(e){var r=e._,n=e.X,a=e.W;return C(Eo,518,r,n,a)},I0=v(function(e,r){return{$:6,a:e,b:r}}),U0=I0,Ul=_([H0({W:1,X:0,_:!1}),C(Il,!1,!1,!1,!1),o(U0,0,1)]),Qr=519,No=8,Ol=15,Jr=7681,O0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ne=$f,J0=v(function(e,r){return{$:0,a:e,b:r}}),q0=J0({dq:1,dA:0,d6:5}),De=U$,Y0=q0(_([{b_:o(De,-1,-1)},{b_:o(De,1,-1)},{b_:o(De,-1,1)},{b_:o(De,1,1)}])),Z0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"b_"},uniforms:{}},X0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},jo=y(function(e,r,n){var a=e.cW,t=e.cw,i=e.db,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(te,c($.bs),o(te,l($.bd),o(te,l($.bA),l($.bB))))};return o(u,n,o(u,r,p(X0,a,t,i)))}),Wo=function(e){return p(jo,{cw:e.cw,cW:e.cW,db:e.db},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB},{bd:e.bd,bs:e.bs,bA:e.bA,bB:e.bB})},Go=function(e){return S(ne,_([Wo(e),C(Il,!1,!1,!1,!1)]),Z0,O0,Y0,{})},Q0=Go({bd:Jr,cw:0,cW:No,bs:Qr,db:Ol,bA:Jr,bB:Jr}),K0=516,Ri=5386,xe=7680,e3=function(e){return o(Dn,2,e+4)},Jl=function(e){return Go({bd:xe,cw:Ol,cW:No,bs:K0,db:e3(e),bA:Ri,bB:Ri})},r3=y(function(e,r,n){return Ge(_([p(Xe,e,n,Ul),_([Jl(r),Q0])]))}),n3=v(function(e,r){return Ge(o(Vc,r3(e),r))}),a3=function(e){var r=e._,n=e.X,a=e.W;return C(Eo,513,r,n,a)},t3=a3({W:1,X:0,_:!0}),o3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},i3=function(e){var r=e.b0,n=e.bM,a=e.bF,t=e.bC,i=e.bH,c=e.aK,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,b=$.c;return o3(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},c3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ei=v(function(e,r){var n=e,a=r;return p(c3,32774,n,a)}),l3=1,Ni=771,u3=770,Ho=i3({bC:0,aK:o(Ei,l3,Ni),bF:0,bH:o(Ei,u3,Ni),bM:0,b0:0}),Nr=_([t3,Ho]),v3=function(e){var r=e;return r.d$},$3=function(e){var r=e;return r.d0},ql=function(e){var r=e;return r.d1},f3=function(e){var r=e;return r.d2},s3=function(e){var r=e;return r.d3},Yl=function(e){var r=e;return r.d4},Zl=function(e){return B(o(fr,f3(e),v3(e)),o(fr,s3(e),$3(e)),o(fr,Yl(e),ql(e)))},d3=function(e){return e},m3=function(e){return ir({cI:d3({f5:e.H,f9:e.I,de:e.J}),dc:vr({f5:e.p,f9:e.q,de:e.r}),dd:vr({f5:e.s,f9:e.t,de:e.u}),df:vr({f5:e.v,f9:e.w,de:e.x})})},Qa=v(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.dd,l=c,u=n.dc,$=u;return{f5:a.f5*$.f5+a.f9*$.f9+a.de*$.de,f9:a.f5*l.f5+a.f9*l.f9+a.de*l.de,de:a.f5*i.f5+a.f9*i.f9+a.de*i.de}}),Xl=v(function(e,r){var n=e,a=r,t=n.cI,i=t,c=a.f5-i.f5,l=a.f9-i.f9,u=a.de-i.de,$=n.df,s=$,d=n.dd,m=d,f=n.dc,g=f;return{f5:c*g.f5+l*g.f9+u*g.de,f9:c*m.f5+l*m.f9+u*m.de,de:c*s.f5+l*s.f9+u*s.de}}),Ql=v(function(e,r){return{cI:o(Xl,e,nn(r)),dc:o(Qa,e,Fr(r)),dd:o(Qa,e,Vr(r)),df:o(Qa,e,Br(r))}}),xa=function(e){var r=e;return r},ie=v(function(e,r){var n=e,a=r;return o(Te,n,a)}),ea=v(function(e,r){return J(e,r)<0?e:r}),$e=v(function(e,r){var n=e,a=r;return o(ea,n,a)}),p3=v(function(e,r){var n=xa(r),a=xa(e);return{d$:o(ie,a.d$,n.d$),d0:o(ie,a.d0,n.d0),d1:o(ie,a.d1,n.d1),d2:o($e,a.d2,n.d2),d3:o($e,a.d3,n.d3),d4:o($e,a.d4,n.d4)}}),He=function(e){var r=e;return r},b3=function(e){var r=e;return B(r.f5,r.f9,r.de)},gn=v(function(e,r){var n=e,a=r;return a+n}),g3=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=Qn(oe(a)),c=Qn(oe(n)),l=Qn(oe(t)),u=b3(r),$=u.a,s=u.b,d=u.c;return{d$:o(gn,c,$),d0:o(gn,i,s),d1:o(gn,l,d),d2:o(fr,c,$),d3:o(fr,i,s),d4:o(fr,l,d)}}),ji=F(function(e,r,n,a){var t=n.eN,i=2*n.e7*r,c=2*n.e6*r,l=2*n.e5*r,u=t.de*r,$=t.f9*r,s=t.f5*r,d=He(Br(e)),m=U(l*d.f5)+U(c*d.f9)+U(i*d.de),f=He(Vr(e)),g=U(l*f.f5)+U(c*f.f9)+U(i*f.de),b=He(Fr(e)),w=U(l*b.f5)+U(c*b.f9)+U(i*b.de),x=o(g3,B(w,g,m),o(Xl,e,p(Mt,s,$,u)));if(a.$)return re(x);var h=a.a;return re(o(p3,h,x))}),Ft=F(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Ft,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var $=t.a,s=t.b,d=o(Ql,m3($),e),m=r*$.b2,f=e,g=r,b=C(Ft,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),on=q$,cn=Y$,ln=Z$,Kl=function(e){return{$:4,a:e}},h3=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(M,n,r);e=t,r=i;continue e}else return r}),Fn=function(e){return Kl(o(h3,e,L))},_3={dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:0,I:0,J:0,b2:1},Wi=Go({bd:Jr,cw:0,cW:No,bs:Qr,db:255,bA:Jr,bB:Jr}),w3=function(e){var r=e,n=o(Te,U(r.f5),o(Te,U(r.f9),U(r.de)));if(n){var a=r.de/n,t=r.f9/n,i=r.f5/n,c=pr(i*i+t*t+a*a);return c*n}else return je},Pe={bF:0,eM:!1,bM:0,cR:0,b0:0,c6:0,f5:0,f9:0,de:0},Ee=v(function(e,r){var n=e,a=r;return er({dK:n.f5,dL:n.b0,dM:a.f5,dN:a.b0,dO:n.f9,dP:n.bM,dQ:a.f9,dR:a.bM,dS:n.de,dT:n.bF,dU:a.de,dV:a.bF,dW:n.c6,dX:n.cR,dY:a.c6,dZ:a.cR})}),sn=k({bi:o(Ee,Pe,Pe),bR:o(Ee,Pe,Pe),bS:o(Ee,Pe,Pe),bT:o(Ee,Pe,Pe)},C(tn,0,0,0,0)),eu=514,ru=function(e){var r=e._,n=e.X,a=e.W;return C(Eo,515,r,n,a)},nu=240,y3=_([ru({W:1,X:0,_:!0}),Wo({bd:xe,cw:nu,cW:0,bs:eu,db:0,bA:xe,bB:xe}),Ho]),x3=v(function(e,r){var n=e,a=r.fu,t=r.e2,i=r.eF,c=oe(a),l=c,u=oe(t),$=u,s=n.cU;if(s.$){var m=s.a;return gt($)?er({dK:2/(i*m),dL:0,dM:0,dN:0,dO:0,dP:2/m,dQ:0,dR:0,dS:0,dT:0,dU:0,dV:-1,dW:0,dX:0,dY:0,dZ:1}):er({dK:2/(i*m),dL:0,dM:0,dN:0,dO:0,dP:2/m,dQ:0,dR:0,dS:0,dT:0,dU:-2/($-l),dV:-($+l)/($-l),dW:0,dX:0,dY:0,dZ:1})}else{var d=s.a;return gt($)?er({dK:1/(i*d),dL:0,dM:0,dN:0,dO:0,dP:1/d,dQ:0,dR:0,dS:0,dT:0,dU:-1,dV:-2*l,dW:0,dX:0,dY:-1,dZ:0}):er({dK:1/(i*d),dL:0,dM:0,dN:0,dO:0,dP:1/d,dQ:0,dR:0,dS:0,dT:0,dU:-($+l)/($-l),dV:-2*$*l/($-l),dW:0,dX:0,dY:-1,dZ:0})}}),Gn=v(function(e,r){return(1&e>>r)===1?0:1}),S3=function(e){return _([ru({W:1,X:0,_:!0}),Wo({bd:xe,cw:nu,cW:e,bs:eu,db:0,bA:xe,bB:xe}),Ho])},C3=y(function(e,r,n){return Ge(o(ee,function(a){var t=a<<4,i=C(tn,o(Gn,a,0),o(Gn,a,1),o(Gn,a,2),o(Gn,a,3));return p(Xe,e,k(r,i),S3(t))},o(Mr,1,o(Dn,2,n)-1)))}),qr=function(e){var r=e;return r},P3=cf,au=Pl,tu=ho,L3={cI:Ke,dc:au,dd:tu,df:Co},Va=function(e){var r=e;return r},z3=function(e){var r=Va(nn(e)),n=He(Br(e)),a=He(Vr(e)),t=He(Fr(e));return er({dK:t.f5,dL:a.f5,dM:n.f5,dN:r.f5,dO:t.f9,dP:a.f9,dQ:n.f9,dR:r.f9,dS:t.de,dT:a.de,dU:n.de,dV:r.de,dW:0,dX:0,dY:0,dZ:1})},k3=v(function(e,r){var n=r;return z3(o(Ql,n,e))}),T3=function(e){return o(k3,L3,e)},M3=function(e){var r=e;return r.da},D3=function(e){var r=e;return Fr(r)},A3=function(e){var r=e;return Vr(r)},B3=function(e){var r=M3(e.eK),n=ir({cI:Lt(r),dc:D3(r),dd:A3(r),df:$r(kt(r))}),a=Fn(e.aS),t=a,i=C(Ft,n,1,Y,_([t]));if(i.$===1)return L;var c=i.a,l=T3(r),u=o(X,.99,o(ie,oe(e.aM),zt(ql(c)))),$=Zl(c),s=$.a,d=$.b,m=$.c,f=w3(p(xo,s,d,m)),g=o(X,1.01,o(gn,f,zt(Yl(c)))),b=o(x3,e.eK,{eF:e.eF,e2:g,fu:u}),w=P3(b).dZ,x=w?He($r(kt(r))):qr(Lt(r)),h=function(){var ge=e.b5;switch(ge.$){case 0:return k(0,0);case 1:return k(1,0);case 2:return k(2,0);case 3:var he=ge.a;return k(3,he);case 4:var he=ge.a;return k(4,he);default:return k(5,0)}}(),P=h.a,A=h.b,G=e.bK,N=G,E=o(Ro,N,e.b7),I=E,H=er({dK:0,dL:x.f5,dM:on(I),dN:e.er,dO:0,dP:x.f9,dQ:cn(I),dR:Kn(f),dS:0,dT:x.de,dU:ln(I),dV:P,dW:0,dX:w,dY:0,dZ:A}),R=we(Hl,H,l,b,_3,t,{M:L,U:L,fN:L}),Q=e.bQ;switch(Q.$){case 0:var ae=Q.a;return Ge(_([p(Xe,R.M,k(ae,Za),Nr),p(Xe,R.U,sn,Nr)]));case 1:var ae=Q.a;return Ge(_([p(Xe,R.M,sn,Nr),_([Wi]),p(Xe,R.fN,ae.bi,Ul),_([Jl(0)]),p(Xe,R.M,k(ae,Za),y3),p(Xe,R.U,sn,Nr)]));default:var Se=Q.a,Ce=Q.b;return Ge(_([p(Xe,R.M,k(Ce,Za),Nr),_([Wi]),o(n3,R.fN,Se),p(C3,R.M,Ce,xr(Se)),p(Xe,R.U,sn,Nr)]))}},F3=function(e){return o(zn,"width",Ae(e))},V3=v(function(e,r){var n=_([L0(1),D0(0),_0(!0),C(S0,0,0,0,0)]),a=function(){var P=e.b8;switch(P.$){case 0:return B(n,"0",1);case 1:return B(o(M,y0,n),"1",1);default:var A=P.a;return B(n,"0",A)}}(),t=a.a,i=a.b,c=a.c,l=e.aN,u=l.a,$=l.b,s=Vi($),d=o(fe,"height",Ae(s)+"px"),m=Vi(u),f=m/s,g=o(Vo,function(P){return B3({eF:f,eK:e.eK,aM:e.aM,aS:P.aS,bK:P.bK,bQ:P.bQ,er:c,b5:P.b5,b7:P.b7})},r),b=o(fe,"width",Ae(m)+"px"),w=e.aL,x=w,h=B0(x);return p(T0,"div",_([o(fe,"padding","0px"),b,d]),_([k(i,p(R0,t,_([F3(Ve(m*c)),z0(Ve(s*c)),b,d,o(fe,"display","block"),o(fe,"background-color",h)]),g))]))}),R3=function(e){return o(V3,{b8:e.b8,aL:e.aL,eK:e.eK,aM:e.aM,aN:e.aN},_([{aS:e.aS,bK:e.bK,bQ:e.bQ,b5:e.b5,b7:e.b7}]))},ou=function(e){return e},Gi=ou({f5:.31271,f9:.32902}),E3=v(function(e,r){var n=e,a=He(r.eW),t=a.f5,i=a.f9,c=a.de,l=o(Ro,r.cl,r.ce),u=l;return{bF:ln(u),eM:n,bM:cn(u),cR:0,b0:on(u),c6:1,f5:-t,f9:-i,de:-c}}),N3=function(e){return e},j3=function(e){return N3(1.2*o(Dn,2,e))},Ka=function(e){return e},W3={$:0},G3=W3,iu=function(e){return e},Hi=function(e){var r=e;return r},H3=function(e){e:for(;;){if(yr(e.fh,je)&&yr(e.fi,je))return Pe;if(o(wl,oe(e.fh),oe(e.fi))){var r={ce:e.ce,fh:e.fi,fi:e.fh,ex:$r(e.ex)};e=r;continue e}else{var n=U(Hi(e.fi)/Xr),a=U(Hi(e.fh)/Xr),t=He(e.ex),i=t.f5,c=t.f9,l=t.de,u=o(Ro,iu(1),e.ce),$=u;return{bF:a*ln($),eM:!1,bM:a*cn($),cR:n/a,b0:a*on($),c6:3,f5:i,f9:c,de:l}}}},Ii=function(e){return H3({ce:e.ce,fh:e.cl,fi:je,ex:e.ex})},I3=function(e){var r=e;return r},cu=function(e){var r=p(Po,1667,25e3,I3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ou({f5:n,f9:a})},lu=function(e){return e},U3=cu(lu(12e3)),O3=cu(lu(5600)),J3=function(e){return{$:2,a:e}},q3=function(e){return J3(e)},Y3=v(function(e,r){return{$:2,a:e,b:r}}),uu=function(e){return{$:0,a:e}},Hn=function(e){var r=e;return r},Z3=function(e){var r=e;return r.eM},X3=uu(sn.a),Q3=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?k(o(M,a,i),c):k(i,o(M,a,c))});return p(mr,n,k(L,L),r)}),K3=function(e){var r=e;return er({dK:r.f5,dL:r.b0,dM:0,dN:0,dO:r.f9,dP:r.bM,dQ:0,dR:0,dS:r.de,dT:r.bF,dU:0,dV:0,dW:r.c6,dX:r.cR,dY:0,dZ:0})},eb=K(function(e,r,n,a,t,i,c,l){var u=o(Q3,Z3,_([Hn(e),Hn(r),Hn(n),Hn(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(Y3,o(ee,K3,$),{bi:o(Ee,m,g),bR:o(Ee,w,h),bS:o(Ee,t,i),bT:o(Ee,c,l)})}else return X3}else return uu({bi:o(Ee,e,r),bR:o(Ee,n,a),bS:o(Ee,t,i),bT:o(Ee,c,l)})}),rb=y(function(e,r,n){return za(eb,e,r,n,Pe,Pe,Pe,Pe,Pe)}),nb=function(e){var r=o(E3,g0(e.fN),{ce:O3,eW:e.fW,cl:Ka(8e4)}),n=Ii({ce:U3,cl:Ka(2e4),ex:e.ex}),a=Ii({ce:Gi,cl:Ka(15e3),ex:$r(e.ex)}),t=p(rb,r,n,a);return R3({b8:q3(e.ci),aL:e.aL,eK:e.eK,aM:e.aM,aN:e.aN,aS:e.aS,bK:j3(15),bQ:t,b5:G3,b7:Gi})},vu=F(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),ab=F(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),$u=F(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),fu=F(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),tb=F(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),ob=F(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),ib=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Io=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(ib,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(vu,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(ab,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C($u,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(ob,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(fu,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(tb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Uo={$:0},cb=K(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=xa(c(u)),d=o($e,s.d2,e),m=o(ie,s.d$,r),f=o($e,s.d3,n),g=o(ie,s.d0,a),b=o($e,s.d4,t),w=o(ie,s.d1,i),x=c,h=$;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{d$:r,d0:a,d1:i,d2:e,d3:n,d4:t}}),lb=y(function(e,r,n){var a=xa(e(r));return za(cb,a.d2,a.d$,a.d3,a.d0,a.d4,a.d1,e,n)}),et=v(function(e,r){var n=e,a=r;return J(a,n)<1}),su=function(e){return o(et,e.d$,e.d2)&&o(et,e.d0,e.d3)&&o(et,e.d1,e.d4)?e:{d$:o(ie,e.d2,e.d$),d0:o(ie,e.d3,e.d0),d1:o(ie,e.d4,e.d1),d2:o($e,e.d2,e.d$),d3:o($e,e.d3,e.d0),d4:o($e,e.d4,e.d1)}},Cn=function(e){var r=e;return r},du=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=hr(n),c=_r(n),l=wr(n),u=hr(a),$=_r(a),s=wr(a),d=hr(t),m=_r(t),f=wr(t);return su({d$:o(ie,i,o(ie,u,d)),d0:o(ie,c,o(ie,$,m)),d1:o(ie,l,o(ie,s,f)),d2:o($e,i,o($e,u,d)),d3:o($e,c,o($e,$,m)),d4:o($e,l,o($e,s,f))})},mu=X$,Le=function(e){return mu(Va(e))},pu=function(e){var r=e;return r},Ra=function(e){return mu(pu(e))},ub=v(function(e,r){var n=e,a=r,t=o(Te,U(a.f5),o(Te,U(a.f9),U(a.de)));if(t){var i=a.de/t,c=a.f9/t,l=a.f5/t,u=pr(l*l+c*c+i*i);return{f5:n*l/u,f9:n*c/u,de:n*i/u}}else return yl}),vb=ub(iu(1)),bu=y(function(e,r,n){var a=o(ha,r,n),t=o(ha,e,r);return vb(o(bo,a,t))}),$b=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=Ra(p(bu,n,a,t));return B({n:i,b_:Le(n)},{n:i,b_:Le(a)},{n:i,b_:Le(t)})},fb=v(function(e,r){return{$:2,a:e,b:r}}),gu=fb({dq:3,dA:0,d6:4}),sb=function(e){if(e.b){var r=e.a,n=e.b,a=gu(o(ee,$b,e)),t=p(lb,du,r,n);return C(vu,t,e,a,0)}else return Uo},Re=y(function(e,r,n){return B(e,r,n)}),hu=function(){var e=ar(1),r=ar(1),n=ar(1),a=o(X,-.5,e),t=o(X,-.5,r),i=o(X,-.5,n),c=p(se,i,t,a),l=o(X,.5,e),u=p(se,i,t,l),$=o(X,.5,r),s=p(se,i,$,a),d=p(se,i,$,l),m=o(X,.5,n),f=p(se,m,t,a),g=p(se,m,$,a),b=p(se,m,t,l),w=p(se,m,$,l);return Io(sb(_([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,b,w),p(Re,u,w,d),p(Re,f,g,w),p(Re,f,w,b),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,b),p(Re,c,b,u),p(Re,s,w,g),p(Re,s,d,w)])))}(),In={$:0},db=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),mb=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ra(p(bu,u,l,c)),s={n:$,b_:Le(u)},d={n:$,b_:Le(l)},m={n:$,b_:Le(c)};return o(M,s,o(M,d,o(M,m,n)))}),pb=or,Oo=function(e){var r=e;return r.D},bb=F(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return re(p(e,t,i,c))}),Jo=function(e){var r=e;return r.ai},rt=v(function(e,r){return o(zl,e,Jo(r))}),gb=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(bb,y(function(c,l,u){return B(c,l,u)}),o(rt,a,e),o(rt,t,e),o(rt,i,e))};return o(fl,r,Oo(e))},hb=y(function(e,r,n){return e(r(n))}),_b=v(function(e,r){return!o(Qc,o(hb,Ps,e),r)}),wb=v(function(e,r){return p(mr,v(function(n,a){return e(n)?o(M,n,a):a}),L,r)}),_u=v(function(e,r){var n=kl(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(_b,a,r)?{D:r,ai:e}:{D:o(wb,a,r),ai:e}}),yb=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=yb({dq:1,dA:3,d6:4}),ra=v(function(e,r){var n=qr(r),a=qr(e);return k(B(a.f5,a.f9,a.de),B(n.f5,n.f9,n.de))}),Ui=p(An,0,0,0),nt=Ie(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(il,o(ra,e,r),t);if($.$){var d={n:Ui,b_:Le(r)},m={n:Ui,b_:Le(e)},f=u+1,g=u;return B(o(M,B(n,g,f),o(M,B(n,f,a),c)),o(M,d,o(M,m,l)),u+2)}else{var s=$.a;return B(o(M,B(n,s,a),c),l,u)}}),xb=be(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=$,P=a+3,A=we(nt,s,m,f,b,r,we(nt,d,s,g,f,r,we(nt,m,d,b,g,r,t)));e=w,r=x,n=h,a=P,t=A;continue e}else{var G=t,N=G.a,E=G.b;return k(N,ke(E))}}),Sb=be(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(Zn,o(ra,m,s),f,p(Zn,o(ra,s,d),g,p(Zn,o(ra,d,m),b,t))),x=o(M,B(b,g,f),a),h=e,P=$,A=n+3,G=x,N=w;e=h,r=P,n=A,a=G,t=N;continue e}else return B(a,t,n)}),Lr=y(function(e,r,n){var a=gb(n),t=p(mr,mb(r),L,a),i=S(Sb,r,a,0,L,pb),c=i.a,l=i.b,u=i.c,$=S(xb,r,l,a,0,B(c,L,u)),s=$.a,d=$.b,m=hl(d)?t:le(t,d);return p(db,e,o(_u,Fa(m),s),o(Vn,m,s))}),Vt=function(e){return{D:o(ee,function(r){return B(3*r,3*r+1,3*r+2)},o(Mr,0,xr(e)-1)),ai:Fa(Ge(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},wu=function(e){switch(e.$){case 0:return In;case 1:var a=e.a,r=e.b,n=o(ee,Cn,r);return p(Lr,a,gr,Vt(n));case 2:var a=e.a,r=e.b,n=o(ee,Cn,r);return p(Lr,a,gr,Vt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,gr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.b_},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.b_},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.b_},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.b_},t);case 8:return In;case 9:return In;default:return In}},Oi=wu(hu),yu={$:0},z=yu,me=v(function(e,r){return{$:1,a:e,b:r}}),Cb={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bI"}},Pb=1029,Lb=function(e){return{$:5,a:e}},xu=function(e){var r=e;return Lb(r)},zb=xu(Pb),kb=1028,Tb=xu(kb),ze=y(function(e,r,n){return r===1?e?o(M,zb,n):o(M,Tb,n):n}),Su={src:`
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
    `,attributes:{position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},at=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),Su,Cb,n,{bI:e,b:c,c:i,d:$,e:t,f:u})}))}),qo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"ay"}},Cu={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},cr=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){return S(ne,p(ze,l,a,d),Cu,qo,n,{ay:e,b:c,c:i,d:$,e:t,f:u})}))}),Pu=v(function(e,r){return{$:3,a:e,b:r}}),Mb={src:`
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
    `,attributes:{},uniforms:{constantColor:"ay",pointRadius:"bZ",sceneProperties:"e"}},Lu={src:`
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
    `,attributes:{position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bZ",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Db=F(function(e,r,n,a){return o(Pu,n,K(function(t,i,c,l,u,$,s,d){return S(ne,d,Lu,Mb,a,{ay:e,b:c,c:i,bZ:r,d:$,e:t,f:u})}))}),Yo={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",sceneProperties:"e"}},Rn=function(e){var r=e;return r},Ea=Q$,lr=be(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),Cu,Yo,a,{aQ:o(Ea,Rn(r),e),b:l,c,d:s,e:i,f:$})}))}),Ab={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aQ",pointRadius:"bZ",sceneProperties:"e"}},Bb=be(function(e,r,n,a,t){return o(Pu,a,K(function(i,c,l,u,$,s,d,m){return S(ne,m,Lu,Ab,t,{aQ:o(Ea,Rn(r),e),b:l,c,bZ:n,d:s,e:i,f:$})}))}),zu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColor:"cx",sceneProperties:"e",viewMatrix:"f"}},ku={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Un=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),ku,zu,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cx:e,b:c,c:i,d:$,e:t,f:u})}))}),Tu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",materialColorTexture:"cy",normalMapTexture:"aZ",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},Mu={src:`
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
    `,attributes:{normal:"n",position:"b_",tangent:"et",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Fb=Ie(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,$,i,f),Mu,Tu,t,{P:b,bi:g.bi,bR:g.bR,bS:g.bS,bT:g.bT,cy:e,b:u,c:l,aZ:r,d,e:c,a4:n,f:s})}))}),Du={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cc",constantBaseColor:"cf",constantMetallic:"cg",constantRoughness:"ch",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallicTexture:"cC",normalMapTexture:"aZ",roughnessTexture:"c$",sceneProperties:"e",useNormalMap:"a4",viewMatrix:"f"}},Vb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(me,u,K(function(d,m,f,g,b,w,x,h){var P=x.a,A=x.b;return S(ne,p(ze,g,s,h),Mu,Du,$,{cc:e,cf:r,cg:i,ch:a,P:A,bi:P.bi,bR:P.bR,bS:P.bS,bT:P.bT,cC:t,b:f,c:m,aZ:c,d:w,c$:n,e:d,a4:l,f:b})}))}}}}}}}}}}},Au={src:`
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
    `,attributes:{},uniforms:{baseColor:"cb",enabledLights:"P",lights12:"bi",lights34:"bR",lights56:"bS",lights78:"bT",metallic:"cB",roughness:"c_",sceneProperties:"e",viewMatrix:"f"}},On=Ie(function(e,r,n,a,t,i){return o(me,a,K(function(c,l,u,$,s,d,m,f){var g=m.a,b=m.b;return S(ne,p(ze,$,i,f),ku,Au,t,{cb:e,P:b,bi:g.bi,bR:g.bR,bS:g.bS,bT:g.bT,cB:n,b:u,c:l,d,c_:r,e:c,f:s})}))}),Rb=function(e){return{$:0,a:e}},Ji=v(function(e,r){return{$:1,a:e,b:r}}),hn=v(function(e,r){if(r.$){var n=r.a.B;return k(n,1)}else return r.a,k(e,0)}),Eb=function(e){return C(tn,on(e),cn(e),ln(e),1)},Zo=C(tn,0,0,0,0),na=v(function(e,r){if(r.$){var a=r.a.B;return k(a,Zo)}else{var n=r.a;return k(e,Eb(n))}}),Bu=v(function(e,r){var n=k(e,r);if(n.a.$){var t=n.a.a.B;return o(Ji,k(t,Zo),o(hn,t,r))}else if(n.b.$){var t=n.b.a.B;return o(Ji,o(na,t,e),o(hn,t,r))}else{var a=n.a.a;return n.b.a,Rb(a)}}),Nb=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jn=F(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),jb=F(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Wb=function(e){return o(De,e,1)},Rt=o(De,0,0),jr=v(function(e,r){if(r.$){var a=r.a.B;return k(a,Rt)}else{var n=r.a;return k(e,Wb(n))}}),Fu=F(function(e,r,n,a){var t=C(jb,e,r,n,a);if(t.a.$){var u=t.a.a.B;return C(Jn,k(u,Zo),o(jr,u,r),o(jr,u,n),o(hn,u,a))}else if(t.b.$){var u=t.b.a.B;return C(Jn,o(na,u,e),k(u,Rt),o(jr,u,n),o(hn,u,a))}else if(t.c.$){var u=t.c.a.B;return C(Jn,o(na,u,e),o(jr,u,r),k(u,Rt),o(hn,u,a))}else if(t.d.$){var u=t.d.a.B;return C(Jn,o(na,u,e),o(jr,u,r),o(jr,u,n),k(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(Nb,i,c,l)}}),Gb={src:`
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
    `,attributes:{},uniforms:{backlight:"b9",colorTexture:"bI",sceneProperties:"e"}},tt=be(function(e,r,n,a,t){return o(me,n,K(function(i,c,l,u,$,s,d,m){return S(ne,p(ze,u,t,m),Su,Gb,a,{b9:Rn(r),bI:e,b:l,c,d:s,e:i,f:$})}))}),Vu={src:`
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
    `,attributes:{normal:"n",position:"b_",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Hb=F(function(e,r,n,a){return o(me,r,K(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(ne,p(ze,l,a,d),Vu,Tu,n,{P:f,bi:m.bi,bR:m.bR,bS:m.bS,bT:m.bT,cy:e,b:c,c:i,aZ:e,d:$,e:t,a4:0,f:u})}))}),Ib=jt(function(e,r,n,a,t,i,c,l,u){return o(me,c,K(function($,s,d,m,f,g,b,w){var x=b.a,h=b.b;return S(ne,p(ze,m,u,w),Vu,Du,l,{cc:e,cf:r,cg:i,ch:a,P:h,bi:x.bi,bR:x.bR,bS:x.bS,bT:x.bT,cC:t,b:d,c:s,aZ:e,d:g,c$:n,e:$,a4:0,f})}))}),Pn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),Ub=function(e){var r=e;return p(Pn,r.d2,r.d$,.5)},Ob=function(e){var r=e;return p(Pn,r.d3,r.d0,.5)},Jb=function(e){var r=e;return p(Pn,r.d4,r.d1,.5)},qb=function(e){return p(se,Ub(e),Ob(e),Jb(e))},j=function(e){var r=Zl(e),n=r.a,a=r.b,t=r.c;return{eN:Va(qb(e)),e5:n/2,e6:a/2,e7:t/2}},Xo=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.B;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return C(at,l,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(at,l,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(at,l,j(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var n=e.b.a;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return C(cr,n,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(cr,n,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(cr,n,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(cr,n,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(cr,n,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(cr,n,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(cr,n,j(t),c,a);case 8:var t=r.a,c=r.c;return C(cr,n,j(t),c,0);case 9:var t=r.a,c=r.c;return C(cr,n,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(Db,n,i,j(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.B,$=e.c;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:var t=r.a,c=r.c,a=r.d;return S(tt,l,$,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(tt,l,$,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(tt,l,$,j(t),c,a);case 8:return z;case 9:return z;default:return z}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return z;case 1:var t=r.a,c=r.c,a=r.d;return S(lr,u,$,j(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(lr,u,$,j(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(lr,u,$,j(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(lr,u,$,j(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(lr,u,$,j(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(lr,u,$,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(lr,u,$,j(t),c,a);case 8:var t=r.a,c=r.c;return S(lr,u,$,j(t),c,0);case 9:var t=r.a,c=r.c;return S(lr,u,$,j(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Bb,u,$,i,j(t),c)}}case 2:e.a;var s=e.b,N=e.c,d=o(Bu,s,N);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,h=w.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Hb,b,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(Fb,b,x,h,j(t),c,f);case 8:return z;case 9:return z;default:return z}}else{var m=d.a;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,f=r.d;return C(Un,m,j(t),c,f);case 3:return z;case 4:var t=r.a,c=r.c,f=r.d;return C(Un,m,j(t),c,f);case 5:return z;case 6:var t=r.a,c=r.c,f=r.d;return C(Un,m,j(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Un,m,j(t),c,f);case 8:return z;case 9:return z;default:return z}}default:e.a;var P=e.b,A=e.c,G=e.d,N=e.e,E=C(Fu,P,A,G,N);if(E.$){var Q=E.a,ae=Q.a,Se=Q.b,Ce=E.b,ge=Ce.a,he=Ce.b,Oe=E.c,Je=Oe.a,Rr=Oe.b,Er=E.d,x=Er.a,h=Er.b;switch(r.$){case 0:return z;case 1:return z;case 2:return z;case 3:return z;case 4:return z;case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return Xu(Ib,ae,Se,ge,he,Je,Rr,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Vb(ae)(Se)(ge)(he)(Je)(Rr)(x)(h)(j(t))(c)(a);case 8:return z;case 9:return z;default:return z}}else{var I=E.a,H=E.b,R=E.c;switch(r.$){case 0:return z;case 1:return z;case 2:var t=r.a,c=r.c,a=r.d;return we(On,I,H,R,j(t),c,a);case 3:return z;case 4:var t=r.a,c=r.c,a=r.d;return we(On,I,H,R,j(t),c,a);case 5:return z;case 6:var t=r.a,c=r.c,a=r.d;return we(On,I,H,R,j(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(On,I,H,R,j(t),c,a);case 8:return z;case 9:return z;default:return z}}}}),ot=function(e){var r=e;return r.f5},it=function(e){var r=e;return r.f9},ct=function(e){var r=e;return r.de},Yb=function(e){var r=e,n=ct(r.df),a=it(r.df),t=ot(r.df),i=ct(r.dd),c=it(r.dd),l=ot(r.dd),u=ct(r.dc),$=it(r.dc),s=ot(r.dc);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},Zb=function(e){var r=Va(nn(e)),n=He(Br(e)),a=He(Vr(e)),t=He(Fr(e));return{dC:Yb(e),p:t.f5,q:t.f9,r:t.de,s:a.f5,t:a.f9,u:a.de,v:n.f5,w:n.f9,x:n.de,H:r.f5,I:r.f9,J:r.de,b2:1}},Wr=v(function(e,r){return{$:5,a:e,b:r}}),Ru=v(function(e,r){var n=r;switch(n.$){case 0:return z;case 5:var a=n.a,t=n.b,i=o(Gl,a,e);return o(Wr,i,t);case 1:return o(Wr,e,n);case 3:return o(Wr,e,n);case 2:return o(Wr,e,n);default:return o(Wr,e,n)}}),Eu=v(function(e,r){return o(Ru,Zb(e),r)}),Na=function(e){return{$:2,a:e}},Xb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.eN;return{eN:{f5:n*i.f5,f9:a*i.f9,de:t*i.de},e5:n*r.e5,e6:a*r.e6,e7:t*r.e7}}),Qb=rf,Kb=ef,qi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=Kb(a),g=f.f5,b=f.f9,w=f.de,x=f.eB,h=Qb({eB:x,f5:g*s,f9:b*d,de:w*m});return za(r,n,h,t,i,c,l,u,$)}}}}}}}}}},Et=v(function(e,r){switch(r.$){case 0:return yu;case 5:var n=r.a,a=r.b;return o(Wr,n,o(Et,e,a));case 1:var t=r.a,i=r.b;return o(me,o(Xb,e,t),o(qi,e,i));case 3:return r;case 2:var i=r.a;return Na(o(qi,e,i));default:var c=r.a;return Kl(o(ee,Et(e),c))}}),Qo=v(function(e,r){var n=r;return o(Et,e,n)}),Ko={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Nu=7683,ju=7682,eg=p(jo,{cw:0,cW:0,db:15},{bd:xe,bs:Qr,bA:xe,bB:Nu},{bd:xe,bs:Qr,bA:xe,bB:ju}),rg=p(jo,{cw:0,cW:0,db:15},{bd:xe,bs:Qr,bA:xe,bB:ju},{bd:xe,bs:Qr,bA:xe,bB:Nu}),ei=v(function(e,r){return e?o(M,rg,r):o(M,eg,r)}),ng={src:`
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
    `,attributes:{normal:"n",position:"b_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},ag=function(e){if(e.$){var r=e.c;return re(K(function(n,a,t,i,c,l,u,$){return S(ne,o(ei,i,$),ng,Ko,r,{b:t,c:a,d:l,e:n,b4:u,f:c})}))}else return Y},Sa=function(e){var r=ag(e);if(r.$)return z;var n=r.a;return Na(n)},tg=F(function(e,r,n,a){var t=o(Xo,n,hu),i=function(){var s=k(e,r);return s.a?s.b?Fn(_([t,Sa(Oi)])):t:s.b?Sa(Oi):z}(),c=To(a),l=c.a,u=c.b,$=c.c;return o(Eu,ko(a),o(Qo,B(l,u,$),i))}),og=v(function(e,r){return C(tg,!0,!0,e,r)}),Wu=v(function(e,r){return{$:0,a:e,b:r}}),ig=function(e){var r=so(e),n=r.cV,a=r.ck,t=r.cd;return p(An,n,a,t)},cg=function(e){return o(Wu,0,Dt(ig(e)))},_n=function(e){var r=e;return wa(r)},lg=v(function(e,r){var n=e.b_,a=e.n;return o(M,{n:Ra(a),b_:Le(n)},r)}),ug=La(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=ln(l.b_),s=cn(l.b_),d=on(l.b_),m=o(ea,e,d),f=o(Te,r,d),g=o(ea,n,s),b=o(Te,a,s),w=o(ea,t,$),x=o(Te,i,$),h=u;e=m,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return su({d$:r,d0:a,d1:i,d2:e,d3:n,d4:t})}),Gu=v(function(e,r){var n=ln(e.b_),a=cn(e.b_),t=on(e.b_);return Wt(ug,t,t,a,a,n,n,r)}),vg=function(e){var r=p(Mc,lg,L,Jo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Oo(e)),i=o(Gu,n,a);return C($u,i,e,t,0)}else return Uo},Yi=v(function(e,r){var n=e,a=r,t=n.dd,i=t,c=n.dc,l=c;return{f5:a.f5*l.f5+a.f9*i.f5,f9:a.f5*l.f9+a.f9*i.f9,de:a.f5*l.de+a.f9*i.de}}),Ca=function(e){var r=e;return ya(r)},Nt=function(e){return ga(2*Xr*e)},$g=gr,Zi=$g({cI:Ke,dc:au,dd:tu}),Hu=function(){var e=72,r=o(Sl,e,Nt(1)),n=ar(1),a=Ur(So),t=Ur(yo),i=ar(1),c=o(X,.5,i),l=p(se,je,je,c),u=o(X,-.5,i),$=p(se,je,je,u),s=function(f){var g=o(X,f,r),b=Ur(o(Yi,Zi,Tt(g))),w=o(X,_n(g),n),x=o(X,Ca(g),n),h=p(se,w,x,c),P=p(se,w,x,u),A=o(Zr,e,f+1),G=o(X,A,r),N=Ur(o(Yi,Zi,Tt(G))),E=o(X,_n(G),n),I=o(X,Ca(G),n),H=p(se,E,I,u),R=p(se,E,I,c);return _([B({n:t,b_:$},{n:t,b_:H},{n:t,b_:P}),B({n:b,b_:P},{n:N,b_:H},{n:N,b_:R}),B({n:b,b_:P},{n:N,b_:R},{n:b,b_:h}),B({n:a,b_:l},{n:a,b_:h},{n:a,b_:R})])},d=o(ee,s,o(Mr,0,e-1)),m=Vt(Ge(d));return Io(vg(m))}(),Xi=wu(Hu),fg=function(e){var r=_o(e),n=go(r),a=n.a,t=n.b;return ir({cI:wo(e),dc:a,dd:t,df:r})},sg=F(function(e,r,n,a){var t=fg(Fo(a)),i=o(Xo,n,Hu),c=function(){var d=k(e,r);return d.a?d.b?Fn(_([i,Sa(Xi)])):i:d.b?Sa(Xi):z}(),l=jl(a),u=l,$=Nl(a),s=$;return o(Eu,t,o(Qo,B(u,u,s),c))}),dg=v(function(e,r){return C(sg,!0,!0,e,r)}),Qi={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},Ki={src:`
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
    `,attributes:{triangleVertex:"c5"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bx",viewMatrix:"f"}},dn=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=qr(n),c=qr(a),l=qr(t);return er({dK:i.f5,dL:c.f5,dM:l.f5,dN:0,dO:i.f9,dP:c.f9,dQ:l.f9,dR:0,dS:i.de,dT:c.de,dU:l.de,dV:0,dW:0,dX:0,dY:0,dZ:0})},qn=gu(_([B({c5:0},{c5:1},{c5:2})])),mg=v(function(e,r){var n=du(r),a=j(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,z;var t=e.b.a;return o(me,a,K(function(h,P,A,G,N,E,I,H){return S(ne,p(ze,G,0,H),Qi,qo,qn,{ay:t,b:A,c:P,d:E,e:h,bx:dn(r),f:N})}));case 1:if(e.b.$)return e.a,z;var i=e.b.a,c=e.c;return o(me,a,K(function(h,P,A,G,N,E,I,H){return S(ne,p(ze,G,0,H),Qi,Yo,qn,{aQ:o(Ea,Rn(c),i),b:A,c:P,d:E,e:h,bx:dn(r),f:N})}));case 2:e.a;var l=e.b,f=e.c,u=o(Bu,l,f);if(u.$)return z;var $=u.a;return o(me,a,K(function(h,P,A,G,N,E,I,H){var R=I.a,Q=I.b;return S(ne,p(ze,G,0,H),Ki,zu,qn,{P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cx:$,b:A,c:P,d:E,e:h,bx:dn(r),f:N})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(Fu,s,d,m,f);if(g.$)return z;var b=g.a,w=g.b,x=g.c;return o(me,a,K(function(h,P,A,G,N,E,I,H){var R=I.a,Q=I.b;return S(ne,p(ze,G,0,H),Ki,Au,qn,{cb:b,P:Q,bi:R.bi,bR:R.bR,bS:R.bS,bT:R.bT,cB:x,b:A,c:P,d:E,c_:w,e:h,bx:dn(r),f:N})}))}}),pg=function(){var e=_([{a3:o(De,0,1)},{a3:o(De,1,1)},{a3:o(De,2,1)},{a3:o(De,0,-1)},{a3:o(De,1,-1)},{a3:o(De,2,-1)}]),r=_([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Vn,e,r)}(),bg={src:`
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
    `,attributes:{triangleShadowVertex:"a3"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",triangleVertexPositions:"bx",viewMatrix:"f"}},ec=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ei,t,u),bg,Ko,pg,{b:a,c:n,d:c,e:r,b4:l,bx:dn(e),f:i})}))},gg=F(function(e,r,n,a){var t=o(mg,n,a),i=k(e,r);return i.a?i.b?Fn(_([t,ec(a)])):t:i.b?ec(a):z}),hg=v(function(e,r){return C(gg,!0,!0,e,r)}),_g=v(function(e,r){var n=wr(r),a=wr(e),t=_r(r),i=_r(e),c=hr(r),l=hr(e);return{d$:o(ie,l,c),d0:o(ie,i,t),d1:o(ie,a,n),d2:o($e,l,c),d3:o($e,i,t),d4:o($e,a,n)}}),wg=function(e){var r=Mo(e),n=r.a,a=r.b;return o(_g,n,a)},rc={src:`
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
    `,attributes:{lineSegmentVertex:"dJ"},uniforms:{lineSegmentEndPoint:"dH",lineSegmentStartPoint:"dI",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},yg=v(function(e,r){return{$:1,a:e,b:r}}),xg=yg({dq:2,dA:0,d6:1}),nc=xg(_([k({dJ:0},{dJ:1})])),Sg=v(function(e,r){var n=wg(r),a=j(n),t=Mo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.B,z;var l=e.b.a;return o(me,a,K(function($,s,d,m,f,g,b,w){return S(ne,w,rc,qo,nc,{ay:l,dH:Le(c),dI:Le(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return z;var l=e.b.a,u=e.c;return o(me,a,K(function(s,d,m,f,g,b,w,x){return S(ne,x,rc,Yo,nc,{aQ:o(Ea,Rn(u),l),dH:Le(c),dI:Le(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return z;default:return z}}),Cg=v(function(e,r){return o(Sg,e,r)}),ac=v(function(e,r){var n=e,a=r;return n/a}),Pg=be(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(M,i,t);if(yr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),tc=v(function(e,r){return e<1?L:S(Pg,0,e,e,r,L)}),Lg=v(function(e,r){var n=e.b_,a=e.n,t=e.L,i=t,c=i.a,l=i.b;return o(M,{n:Ra(a),b_:Le(n),L:o(De,c,l)},r)}),zg=function(e){var r=p(Mc,Lg,L,Jo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Oo(e)),i=o(Gu,n,a);return C(fu,i,e,t,0)}else return Uo},Iu=v(function(e,r){var n=e,a=r,t=wa(a);return{f5:t*wa(n),f9:t*ya(n),de:ya(a)}}),kg=function(){var e=ar(1),r=72,n=o(Mr,0,r-1),a=o(tc,r,o(Pn,je,Nt(1))),t=no(r/2),i=o(Mr,0,t-1),c=o(tc,t,o(Pn,Ir(90),Ir(-90))),l=Fa(Ge(o(ee,function(s){return o(ee,function(d){return{n:Ur(o(Iu,s,d)),b_:p(se,o(X,_n(d)*_n(s),e),o(X,_n(d)*Ca(s),e),o(X,Ca(d),e)),L:k(o(ac,s,Nt(1)),o(ac,o(gn,Ir(90),d),Ir(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ge(o(ee,function(s){return Ge(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([B(b,g,m),B(b,m,f)])},i))},n));return Io(zg(o(_u,l,$)))}(),Pa=72,Yn=2*Pa,Tg=v(function(e,r){e:for(;;){var n=Yn+1,a=o(Zr,Yn,2*e+3),t=o(Zr,Yn,2*e+2),i=2*e+1,c=2*e,l=Yn,u=o(M,B(l,c,t),o(M,B(c,a,t),o(M,B(c,i,a),o(M,B(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),Mg=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Dg=v(function(e,r){e:for(;;){var n=p(Mg,0,2*Xr,e/Pa),a={bD:n,bW:0,b1:1},t={bD:n,bW:1,b1:1},i=o(M,a,o(M,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),Ag=function(){var e=o(Dg,Pa-1,_([{bD:0,bW:0,b1:0},{bD:0,bW:1,b1:0}])),r=o(Tg,Pa-1,L);return o(Vn,e,r)}(),Bg={src:`
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
    `,attributes:{angle:"bD",offsetScale:"bW",radiusScale:"b1"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b4",viewMatrix:"f"}},oc=function(e){return Na(K(function(r,n,a,t,i,c,l,u){return S(ne,o(ei,!0,u),Bg,Ko,Ag,{ay:p(An,0,0,1),b:a,c:n,d:c,e:r,b4:l,f:i})}))},Fg=function(e){var r=pu(e);return{dC:!0,p:1,q:0,r:0,s:0,t:1,u:0,v:0,w:0,x:1,H:r.f5,I:r.f9,J:r.de,b2:1}},Vg=v(function(e,r){return o(Ru,Fg(e),r)}),Rg=F(function(e,r,n,a){var t=o(Xo,n,kg),i=function(){var u=k(e,r);return u.a?u.b?Fn(_([t,oc()])):t:u.b?oc():z}(),c=Ao(a),l=c;return o(Vg,o(ha,Ke,Do(a)),o(Qo,B(l,l,l),i))}),Eg=v(function(e,r){return C(Rg,!0,!0,e,r)}),Ng=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),jg=be(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),Wg=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Wu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(Ng,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Ll,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(jg,n,a,t,i,c)}},Gg=Wg,Uu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(og,t,r)]);case 1:var t=e.a,n=e.b;return _([o(hg,t,n)]);case 3:var t=e.a,a=e.b;return _([o(Eg,Gg(t),a)]);case 2:var t=e.a,i=e.b;return _([o(dg,t,i)]);case 4:var c=e.a,l=e.b;return _([o(Cg,cg(c),l)]);default:var u=e.a;return o(Vo,Uu,u)}},Hg=function(e){return o(Vo,Uu,e)},Ig=v(function(e,r){return nb({aL:p0(e.eH),eK:e.eK,aM:b0(.5),ci:e.ci,aN:k(Fi(Ve(e.b3.f3)),Fi(Ve(e.b3.e9))),aS:Hg(r),fN:!0,fW:o(Iu,ga(e.fV),ga(e.fX)),ex:Co})}),Ug=v(function(e,r){return o(Ig,{eH:p(m0,46,46,46),eK:xl,ci:e.ci,b3:e.b3,fV:-Ai(15),fX:-Ai(45)},_([o(d0,e,r)]))}),Og=p(zm,Ug,Vp,Em);const Jg={Main:{init:Og(o(D,function(e){return Me({fg:e})},o(T,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({eP:c,ci:i,dp:t,fl:a,bn:n,b3:r,f2:e})},o(T,"clock",ve))},o(T,"devicePixelRatio",ve))},o(T,"dt",ve))},o(T,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Me({eD:d,eR:s,$7:$,eY:u,fm:l,fE:c,fJ:i,fO:t,ew:a})},o(T,"alt",Z))},o(T,"control",Z))},o(T,"down",Z))},o(T,"downs",$a(Sn)))},o(T,"left",Z))},o(T,"pressedKeys",$a(Sn)))},o(T,"right",Z))},o(T,"shift",Z))},o(T,"up",Z))))},o(T,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Me({$7:$,dB:u,fr:l,fK:c,fL:i,ew:t,f5:a,f9:n})},o(T,"down",Z))},o(T,"isDown",Z))},o(T,"move",Z))},o(T,"rightDown",Z))},o(T,"rightUp",Z))},o(T,"up",Z))},o(T,"x",ve))},o(T,"y",ve))))},o(T,"screen",o(D,function(r){return o(D,function(n){return Me({e9:n,f3:r})},o(T,"height",ve))},o(T,"width",ve))))},o(T,"wheel",o(D,function(e){return o(D,function(r){return Me({eT:r,eU:e})},o(T,"deltaX",ve))},o(T,"deltaY",ve)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},qg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),$(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),$(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},Yg=()=>{lt("pointerdown"),lt("wheel"),lt("keydown")},lt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Zg=Jg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});Yg();qg(Zg);
