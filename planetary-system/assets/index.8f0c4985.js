const Gu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Gu();function wr(e,r,n){return n.a=e,n.f=r,n}function v(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function qe(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function za(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function Q(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Rt(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return e(r,n,a,t,i,c,l,u,$)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function L(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function Le(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Et(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function ka(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Hu(e,r,n,a,t,i,c,l,u,$){return e.a===9?e.f(r,n,a,t,i,c,l,u,$):e(r)(n)(a)(t)(i)(c)(l)(u)($)}var Yu=[];function Iu(e){return e.length}var Ou=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Ju=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),qu=v(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});v(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Zu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Xu()),r});function Xu(e){return"<internals>"}function Qr(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function gr(e,r){for(var n,a=[],t=lt(e,r,0,a);t&&(n=a.pop());t=lt(n.a,n.b,0,a));return t}function lt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Qr(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=ui(e),r=ui(r));for(var t in e)if(!lt(e[t],r[t],n+1,a))return!1;return!0}v(gr);v(function(e,r){return!gr(e,r)});function O(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=O(e.a,r.a))||(n=O(e.b,r.b))?n:O(e.c,r.c);for(;e.b&&r.b&&!(n=O(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return O(e,r)<0});v(function(e,r){return O(e,r)<1});v(function(e,r){return O(e,r)>0});v(function(e,r){return O(e,r)>=0});var Ku=v(function(e,r){var n=O(e,r);return n<0?Mc:n?Ef:Tc}),Dn=0;function z(e,r){return{a:e,b:r}}function V(e,r,n){return{a:e,b:r,c:n}}function Ke(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=ar(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=ar(e.a,r);return n}var P={$:0};function ar(e,r){return{$:1,a:e,b:r}}var Qu=v(ar);function b(e){for(var r=P,n=e.length;n--;)r=ar(e[n],r);return r}function Ta(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var ev=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return b(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return b(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(L(e,r.a,n.a,a.a,t.a));return b(i)});qe(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return b(c)});v(function(e,r){return b(Ta(r).sort(function(n,a){return O(e(n),e(a))}))});v(function(e,r){return b(Ta(r).sort(function(n,a){var t=o(e,n,a);return t===Tc?0:t===Mc?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var rv=v(Math.pow);v(function(e,r){return r%e});var nv=v(function(e,r){var n=r%e;return e===0?Qr(11):n>0&&e<0||n<0&&e>0?n+e:n}),av=Math.PI,tv=Math.cos,ov=Math.sin,iv=Math.tan,cv=Math.atan;v(Math.atan2);function lv(e){return e}function uv(e){return e===1/0||e===-1/0}var vv=Math.ceil,$v=Math.floor,fv=Math.round,sv=Math.sqrt,qo=Math.log,dv=isNaN;function mv(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var pv=v(function(e,r){return e+r});function bv(e){var r=e.charCodeAt(0);return isNaN(r)?q:ae(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}v(function(e,r){return e+r});function hv(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function gv(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var _v=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),wv=v(function(e,r){return r.split(e)}),yv=v(function(e,r){return r.join(e)}),xv=y(function(e,r,n){return n.slice(e,r)});function Sv(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=v(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=v(function(e,r){return r.indexOf(e)>-1}),Pv=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=v(function(e,r){var n=e.length;if(n<1)return P;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return b(t)});function tc(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return q;r=10*r+i-48}return t==a?q:ae(n==45?-r:r)}function Tv(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?ae(r):q}function Mv(e){return Ta(e).join("")}function Dv(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Av(e){return{$:0,a:e}}function Ut(e){return{$:2,b:e}}var Fv=Ut(function(e){return typeof e=="boolean"?ue(e):Xe("a BOOL",e)}),Vv=Ut(function(e){return typeof e=="number"?ue(e):Xe("a FLOAT",e)}),Rv=Ut(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):Xe("a STRING",e)});function Ev(e){return{$:3,b:e}}var Uv=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var jv=v(function(e,r){return{$:10,b:r,h:e}}),Nv=v(function(e,r){return yr(e,[r])}),Wv=y(function(e,r,n){return yr(e,[r,n])});E(function(e,r,n,a){return yr(e,[r,n,a])});he(function(e,r,n,a,t){return yr(e,[r,n,a,t])});qe(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});za(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});Q(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});Rt(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Ue(e,n)}catch(a){return _e(o(Xt,"This is not valid JSON! "+a.message,r))}});var oc=v(function(e,r){return Ue(e,r)});function Ue(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):Xe("null",r);case 3:return Wn(r)?Zo(e.b,r,b):Xe("a LIST",r);case 4:return Wn(r)?Zo(e.b,r,Gv):Xe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Xe("an OBJECT with a field named `"+n+"`",r);var $=Ue(e.b,r[n]);return Ie($)?$:_e(o(vi,n,$.a));case 7:var a=e.e;if(!Wn(r))return Xe("an ARRAY",r);if(a>=r.length)return Xe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var $=Ue(e.b,r[a]);return Ie($)?$:_e(o(Dc,a,$.a));case 8:if(typeof r!="object"||r===null||Wn(r))return Xe("an OBJECT",r);var t=P;for(var i in r)if(r.hasOwnProperty(i)){var $=Ue(e.b,r[i]);if(!Ie($))return _e(o(vi,i,$.a));t=ar(z(i,$.a),t)}return ue(Ae(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var $=Ue(l[u],r);if(!Ie($))return $;c=c($.a)}return ue(c);case 10:var $=Ue(e.b,r);return Ie($)?Ue(e.h($.a),r):$;case 11:for(var s=P,d=e.g;d.b;d=d.b){var $=Ue(d.a,r);if(Ie($))return $;s=ar($.a,s)}return _e(Uf(Ae(s)));case 1:return _e(o(Xt,e.a,r));case 0:return ue(e.a)}}function Zo(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Ue(e,r[i]);if(!Ie(c))return _e(o(Dc,i,c.a));t[i]=c.a}return ue(n(t))}function Wn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Gv(e){return o(ns,e.length,function(r){return e[r]})}function Xe(e,r){return _e(o(Xt,"Expecting "+e,r))}function jr(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return jr(e.b,r.b);case 6:return e.d===r.d&&jr(e.b,r.b);case 7:return e.e===r.e&&jr(e.b,r.b);case 9:return e.f===r.f&&Xo(e.g,r.g);case 10:return e.h===r.h&&jr(e.b,r.b);case 11:return Xo(e.g,r.g)}}function Xo(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!jr(e[a],r[a]))return!1;return!0}var Hv=v(function(e,r){return JSON.stringify(r,null,e)+""});function ic(e){return e}y(function(e,r,n){return n[e]=r,n});function Dr(e){return{$:0,a:e}}function Yv(e){return{$:1,a:e}}function fr(e){return{$:2,b:e,c:null}}var ut=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Iv(e){return{$:5,b:e}}var Ov=0;function jt(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return Nt(r),r}function cc(e){return fr(function(r){r(Dr(jt(e)))})}function lc(e,r){e.h.push(r),Nt(e)}var Jv=v(function(e,r){return fr(function(n){lc(e,r),n(Dr(Dn))})}),Wa=!1,Ko=[];function Nt(e){if(Ko.push(e),!Wa){for(Wa=!0;e=Ko.shift();)qv(e);Wa=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Nt(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Wt(r,a,e.e0,e.fO,e.fH,function(){return function(){}})});function Wt(e,r,n,a,t,i){var c=o(oc,e,r?r.flags:void 0);Ie(c)||Qr(2);var l={},u=n(c.a),$=u.a,s=i(m,$),d=Zv(l,m);function m(f,g){var h=o(a,f,$);s($=h.a,g),ei(l,h.b,t($))}return ei(l,u.b,t($)),d?{ports:d}:{}}var er={};function Zv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Kv(t,r)}return n}function Xv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Kv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(ut,l,Iv(function($){var s=$.a;return $.$===0?p(t,n,s,u):i&&c?L(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=jt(o(ut,l,e.b))}var Qv=v(function(e,r){return fr(function(n){e.g(r),n(Dr(Dn))})});v(function(e,r){return o(Jv,e.h,{$:0,a:r})});function uc(e){return function(r){return{$:1,k:e,l:r}}}function e$(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Qo=[],Ga=!1;function ei(e,r,n){if(Qo.push({p:e,q:r,r:n}),!Ga){Ga=!0;for(var a;a=Qo.shift();)r$(a.p,a.q,a.r);Ga=!1}}function r$(e,r,n){var a={};ua(!0,r,a,null),ua(!1,n,a,null);for(var t in e)lc(e[t],{$:"fx",a:a[t]||{i:P,j:P}})}function ua(e,r,n,a){switch(r.$){case 1:var t=r.k,i=n$(e,t,a,r.l);n[t]=a$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)ua(e,c.a,n,a);return;case 3:ua(e,r.o,n,{s:r.n,t:a});return}}function n$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function a$(e,r,n){return n=n||{i:P,j:P},e?n.i=ar(r,n.i):n.j=ar(r,n.j),n}function t$(e){er[e]&&Qr(3)}v(function(e,r){return r});function o$(e,r){return t$(e),er[e]={f:i$,u:r,a:c$},uc(e)}var i$=v(function(e,r){return function(n){return e(r(n))}});function c$(e,r){var n=P,a=er[e].u,t=Dr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(oc,a,c);Ie(l)||Qr(4,e,l.a);for(var u=l.a,$=n;$.b;$=$.b)r($.a(u))}return{send:i}}var va,lr=typeof document!="undefined"?document:{};function Gt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(hr(e,function(){}),t),{}});function vt(e){return{$:0,a:e}}var vc=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:Ht(n),e:t,f:e,b:i}})}),Br=vc(void 0),l$=v(function(e,r){return v(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:Ht(n),e:t,f:e,b:i}})}),u$=l$(void 0);function v$(e,r,n,a){return{$:3,d:Ht(e),g:r,h:n,i:a}}var $$=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return xr([e,r],function(){return e(r)})});y(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return L(e,r,n,a,t)})});qe(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});za(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return Le(e,r,n,a,t,i,c)})});Q(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Et(e,r,n,a,t,i,c,l)})});Rt(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return ka(e,r,n,a,t,i,c,l,u)})});var $c=v(function(e,r){return{$:"a0",n:e,o:r}}),f$=v(function(e,r){return{$:"a1",n:e,o:r}}),fc=v(function(e,r){return{$:"a2",n:e,o:r}}),Sr=v(function(e,r){return{$:"a3",n:e,o:r}}),s$=y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}v(function(e,r){return r.$==="a0"?o($c,r.n,p$(e,r.o)):r});function p$(e,r){var n=no(r);return{$:r.$,a:n?p(as,n<3?b$:h$,Te(e),r.a):o(da,e,r.a)}}var b$=v(function(e,r){return z(e(r.a),r.b)}),h$=v(function(e,r){return{al:e(r.al),cX:r.cX,cL:r.cL}});function Ht(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?ri(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?ri(c,t,i):c[t]=i}return r}function ri(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hr(e,r){var n=e.$;if(n===5)return hr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=hr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return $t(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);va&&e.c=="a"&&c.addEventListener("click",va(c)),$t(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Gt(c,hr(n===1?l[u]:l[u].b,r));return c}function $t(e,r,n){for(var a in n){var t=n[a];a==="a1"?g$(e,t):a==="a0"?y$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function g$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,Yt&&{passive:no(i)<2}),a[t]=c}}var Yt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Yt=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=Ue(t.a,a);if(!!Ie(i)){for(var c=no(t),l=i.a,u=c?c<3?l.a:l.al:l,$=c==1?l.b:c==3&&l.cX,s=($&&a.stopPropagation(),(c==2?l.b:c==3&&l.cL)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,$)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&jr(e.a,r.a)}function sc(e,r){var n=[];return Oe(e,r,n,0),n}function ge(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Oe(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{ge(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,$=u===l.length;$&&u--;)$=c[u]===l[u];if($){r.k=e.k;return}r.k=r.m();var s=[];Oe(e.k,r.k,s,0),s.length>0&&ge(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var h=r.k;h.$===4;)f=!0,typeof m!="object"?m=[m,h.j]:m.push(h.j),h=h.k;if(f&&d.length!==m.length){ge(n,0,a,r);return}(f?!C$(d,m):d!==m)&&ge(n,2,a,m),Oe(g,h,n,a+1);return;case 0:e.a!==r.a&&ge(n,3,a,r.a);return;case 1:ni(e,r,n,a,L$);return;case 2:ni(e,r,n,a,P$);return;case 3:if(e.h!==r.h){ge(n,0,a,r);return}var w=It(e.d,r.d);w&&ge(n,4,a,w);var x=r.i(e.g,r.g);x&&ge(n,5,a,x);return}}}function C$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function ni(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ge(n,0,a,r);return}var i=It(e.d,r.d);i&&ge(n,4,a,i),t(e,r,n,a)}function It(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=It(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function L$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ge(n,6,a,{v:l,i:c-l}):c<l&&ge(n,7,a,{v:c,e:i});for(var u=c<l?c:l,$=0;$<u;$++){var s=t[$];Oe(s,i[$],n,++a),a+=s.b||0}}function P$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,$=l.length,s=u.length,d=0,m=0,f=a;d<$&&m<s;){var g=l[d],h=u[m],w=g.a,x=h.a,_=g.b,C=h.b,T=void 0,N=void 0;if(w===x){f++,Oe(_,C,t,f),f+=_.b||0,d++,m++;continue}var U=l[d+1],R=u[m+1];if(U){var j=U.a,W=U.b;N=x===j}if(R){var A=R.a,J=R.b;T=w===A}if(T&&N){f++,Oe(_,J,t,f),vn(i,t,w,C,m,c),f+=_.b||0,f++,$n(i,t,w,W,f),f+=W.b||0,d+=2,m+=2;continue}if(T){f++,vn(i,t,x,C,m,c),Oe(_,J,t,f),f+=_.b||0,d+=1,m+=2;continue}if(N){f++,$n(i,t,w,_,f),f+=_.b||0,f++,Oe(W,C,t,f),f+=W.b||0,d+=2,m+=1;continue}if(U&&j===A){f++,$n(i,t,w,_,f),vn(i,t,x,C,m,c),f+=_.b||0,f++,Oe(W,J,t,f),f+=W.b||0,d+=2,m+=2;continue}break}for(;d<$;){f++;var g=l[d],_=g.b;$n(i,t,g.a,_,f),f+=_.b||0,d++}for(;m<s;){var X=X||[],h=u[m];vn(i,t,h.a,h.b,void 0,X),m++}(t.length>0||c.length>0||X)&&ge(n,8,a,{w:t,x:c,y:X})}var dc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Oe(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+dc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=ge(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Oe(a,i.z,l,t),ge(r,9,t,{w:l,A:i});return}$n(e,r,n+dc,a,t)}function mc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var $=l.$;if($===1)mc(e,r.k,l.s,c);else if($===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if($===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,h=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,_=t+(x.b||0);if(t<=u&&u<=_&&(a=fn(h[w],x,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function pc(e,r,n,a){return n.length===0?e:(mc(e,r,n,a),$a(e,n))}function $a(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=z$(t,a);t===e&&(e=i)}return e}function z$(e,r){switch(r.$){case 0:return k$(e,r.s,r.u);case 4:return $t(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return $a(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(hr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=$a(e,i.w),e;case 8:return T$(e,r);case 5:return r.s(e);default:Qr(10)}}function k$(e,r,n){var a=e.parentNode,t=hr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function T$(e,r){var n=r.s,a=M$(n.y,r);e=$a(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:hr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Gt(e,a),e}function M$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Gt(n,i.c===2?i.s:hr(i.z,r.u))}return n}}function Ot(e){if(e.nodeType===3)return vt(e.textContent);if(e.nodeType!==1)return vt("");for(var r=P,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=ar(o(Sr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=P,$=e.childNodes,a=$.length;a--;)u=ar(Ot($[a]),u);return p(Br,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var B$=E(function(e,r,n,a){return Wt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.fQ,l=a.node,u=Ot(l);return bc(i,function($){var s=c($),d=sc(u,s);l=pc(l,u,d,t),u=s})})});E(function(e,r,n,a){return Wt(r,a,e.e0,e.fO,e.fH,function(t,i){var c=e.cU&&e.cU(t),l=e.fQ,u=lr.title,$=lr.body,s=Ot($);return bc(i,function(d){va=c;var m=l(d),f=Br("body")(P)(m.eu),g=sc(s,f);$=pc($,s,g,t),s=f,va=0,u!==m.fL&&(lr.title=u=m.fL)})})});var fa=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function bc(e,r){r(e);var n=0;function a(){n=n===1?0:(fa(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&fa(a),n=2)}}v(function(e,r){return o(oo,ao,fr(function(){r&&history.go(r),e()}))});v(function(e,r){return o(oo,ao,fr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return o(oo,ao,fr(function(){history.replaceState({},"",r),e()}))});var A$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window!="undefined"?window:A$;y(function(e,r,n){return cc(fr(function(a){function t(i){jt(n(i))}return e.addEventListener(r,t,Yt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});v(function(e,r){var n=Ue(e,r);return Ie(n)?ae(n.a):q});function hc(e,r){return fr(function(n){fa(function(){var a=document.getElementById(e);n(a?Dr(r(a)):Yv(os(e)))})})}function V$(e){return fr(function(r){fa(function(){r(Dr(e()))})})}v(function(e,r){return hc(r,function(n){return n[e](),Dn})});v(function(e,r){return V$(function(){return F$.scroll(e,r),Dn})});y(function(e,r,n){return hc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Dn})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var R$=v(function(e,r){var n="g";e.fg&&(n+="m"),e.ew&&(n+="i");try{return ae(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var E$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var $=u.length-1,s=new Array($);$>0;){var d=u[$];s[--$]=d?ae(d):q}a.push(L($l,u[0],u.index,t,b(s))),l=r.lastIndex}return r.lastIndex=c,b(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var $=arguments[l];u[--l]=$?ae($):q}return n(L($l,c,arguments[arguments.length-2],t,b(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,b(t)});var U$=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/j$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function j$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Jt=new Float64Array(3),ai=new Float64Array(3),ti=new Float64Array(3),N$=y(function(e,r,n){return new Float64Array([e,r,n])}),W$=function(e){return e[0]},G$=function(e){return e[1]},H$=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Y$=function(e){return new Float64Array([e.fU,e.fY,e.c6])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function gc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(gc);function _c(e,r,n){return n===void 0&&(n=new Float64Array(3)),sa(gc(e,r,n),n)}v(_c);function wc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function sa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/wc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var I$=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(sn);function ft(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(ft);v(function(e,r){var n,a=Jt,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var O$=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var J$=function(e){return{fU:e[0],fY:e[1],c6:e[2],em:e[3]}},q$=function(e){return new Float64Array([e.fU,e.fY,e.c6,e.em])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Z$(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Z$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var X$=new Float64Array(16),K$=new Float64Array(16),Q$=function(e){var r=new Float64Array(16);return r[0]=e.dx,r[1]=e.dB,r[2]=e.dF,r[3]=e.dJ,r[4]=e.dy,r[5]=e.dC,r[6]=e.dG,r[7]=e.dK,r[8]=e.dz,r[9]=e.dD,r[10]=e.dH,r[11]=e.dL,r[12]=e.dA,r[13]=e.dE,r[14]=e.dI,r[15]=e.dM,r},ef=function(e){return{dx:e[0],dB:e[1],dF:e[2],dJ:e[3],dy:e[4],dC:e[5],dG:e[6],dK:e[7],dz:e[8],dD:e[9],dH:e[10],dL:e[11],dA:e[12],dE:e[13],dI:e[14],dM:e[15]}};function yc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}qe(yc);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return yc(c,l,i,t,n,a)});function xc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}qe(xc);E(function(e,r,n,a){return xc(e,r,n,a,-1,1)});function Sc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],$=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],h=e[12],w=e[13],x=e[14],_=e[15],C=r[0],T=r[1],N=r[2],U=r[3],R=r[4],j=r[5],W=r[6],A=r[7],J=r[8],X=r[9],oe=r[10],ve=r[11],te=r[12],de=r[13],ke=r[14],ye=r[15];return n[0]=a*C+l*T+d*N+h*U,n[1]=t*C+u*T+m*N+w*U,n[2]=i*C+$*T+f*N+x*U,n[3]=c*C+s*T+g*N+_*U,n[4]=a*R+l*j+d*W+h*A,n[5]=t*R+u*j+m*W+w*A,n[6]=i*R+$*j+f*W+x*A,n[7]=c*R+s*j+g*W+_*A,n[8]=a*J+l*X+d*oe+h*ve,n[9]=t*J+u*X+m*oe+w*ve,n[10]=i*J+$*X+f*oe+x*ve,n[11]=c*J+s*X+g*oe+_*ve,n[12]=a*te+l*de+d*ke+h*ye,n[13]=t*te+u*de+m*ke+w*ye,n[14]=i*te+$*de+f*ke+x*ye,n[15]=c*te+s*de+g*ke+_*ye,n}v(Sc);v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],$=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],h=r[0],w=r[1],x=r[2],_=r[4],C=r[5],T=r[6],N=r[8],U=r[9],R=r[10],j=r[12],W=r[13],A=r[14];return n[0]=a*h+c*w+$*x,n[1]=t*h+l*w+s*x,n[2]=i*h+u*w+d*x,n[3]=0,n[4]=a*_+c*C+$*T,n[5]=t*_+l*C+s*T,n[6]=i*_+u*C+d*T,n[7]=0,n[8]=a*N+c*U+$*R,n[9]=t*N+l*U+s*R,n[10]=i*N+u*U+d*R,n[11]=0,n[12]=a*j+c*W+$*A+m,n[13]=t*j+l*W+s*A+f,n[14]=i*j+u*W+d*A+g,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=sa(r,Jt);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/wc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),$=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*$,h=i*l*$,w=c*l*$,x=i*i*$+u,_=g+f,C=h-m,T=g-f,N=c*c*$+u,U=w+d,R=h+m,j=w-d,W=l*l*$+u,A=n[0],J=n[1],X=n[2],oe=n[3],ve=n[4],te=n[5],de=n[6],ke=n[7],ye=n[8],pr=n[9],br=n[10],Na=n[11],Uu=n[12],ju=n[13],Nu=n[14],Wu=n[15];return a[0]=A*x+ve*_+ye*C,a[1]=J*x+te*_+pr*C,a[2]=X*x+de*_+br*C,a[3]=oe*x+ke*_+Na*C,a[4]=A*T+ve*N+ye*U,a[5]=J*T+te*N+pr*U,a[6]=X*T+de*N+br*U,a[7]=oe*T+ke*N+Na*U,a[8]=A*R+ve*j+ye*W,a[9]=J*R+te*j+pr*W,a[10]=X*R+de*j+br*W,a[11]=oe*R+ke*j+Na*W,a[12]=Uu,a[13]=ju,a[14]=Nu,a[15]=Wu,a});function rf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(rf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function nf(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(nf);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],$=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],h=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=$,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=h,t[11]=w,t[12]=i*e+$*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+h*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});v(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],$=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],h=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=$,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=h,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+h*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=$*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=_c(e,r,Jt),t=sa(ft(n,a,ai),ai),i=sa(ft(a,t,ti),ti),c=X$,l=K$;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Sc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var oi=0;function Cn(e,r){for(;r.b;r=r.b)e(r.a)}function qt(e){for(var r=0;e.b;e=e.b)r++;return r}var af=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},tf=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),of=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),cf=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),lf=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),uf=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),vf=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),$f=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),ff=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),sf=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),df=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},mf=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},pf=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},bf=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},hf=function(e){e.gl.disable(e.gl.CULL_FACE)},gf=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},_f=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},wf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},ii=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],yf=[mf,pf,bf,Cc,Lc,hf,gf,_f,wf];function ci(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function xf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Sf(e,r,n,a){for(var t=n.a.df,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,h,w,x){var _;if(t===1)for(_=0;_<g;_++)f[h++]=g===1?w[x]:w[x][_];else i.forEach(function(C){for(_=0;_<g;_++)f[h++]=g===1?w[C][x]:w[C][x][_]})}var u=Pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var $=0,s=u.size*u.arraySize*t,d=new u.type(qt(n.b)*s);Cn(function(f){l(d,u.size*u.arraySize,$,f,a[r.name]||r.name),$+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function Cf(e,r){if(r.a.$7>0){var n=e.createBuffer(),a=Lf(r.c,r.a.$7);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.df*qt(r.b),indexBuffer:null,buffers:{}}}function Lf(e,r){var n=new Uint32Array(qt(e)*r),a=0,t;return Cn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function li(e,r){return e+"#"+r}var zc=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cc(n),Lc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=li(i.b.id,i.c.id),l=n.programs[c]),!l){var $;i.b.id?$=n.shaders[i.b.id]:i.b.id=oi++,$||($=ci(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=$);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=oi++,s||(s=ci(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=xf(a,$,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Pf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=li(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),zf(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=Cf(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],h.buffers[f.name]===void 0&&(h.buffers[f.name]=Sf(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[f.name]);var w=Pc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,_=x*w.arraySize,C=0;C<w.arraySize;C++)a.enableVertexAttribArray(g+C),a.vertexAttribPointer(g+C,w.size,w.baseType,!1,_,x*C)}for(n.toggle=!n.toggle,Cn(O0(n),i.a),u=0;u<ii.length;u++){var T=n[ii[u]];T.toggle!==n.toggle&&T.enabled&&(yf[u](n),T.enabled=!1,T.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.dV,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dV,0,h.numIndices)}}return Cn(t,e.g),r});function Pf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var h=g.name,w=e.getUniformLocation(f,h);switch(g.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(w,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(w,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(w,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(w,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(w,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(w,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var x=c++;return function(_){e.activeTexture(e.TEXTURE0+x);var C=l.textures.get(_);C||(C=_.eC(e),l.textures.set(_,C)),e.bindTexture(e.TEXTURE_2D,C),i[h]!==_&&(e.uniform1i(w,x),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(w,_),i[h]=_)};default:return function(){}}}for(var $={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);$[a[m.name]||m.name]=u(t,m)}return $}function zf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var kf=y(function(e,r,n){return v$(r,{g:n,f:{},h:e},Vf,Rf)}),Tf=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Mf=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Df=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Bf=v(function(e,r){e.contextAttributes.antialias=!0}),Af=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Ff=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Vf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Cn(function(t){return o(I0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),af(function(){return o(zc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Rf(e,r){return r.f=e.f,zc(r)}var B=Qu,Gn=Zu,kc=y(function(e,r,n){var a=n.c,t=n.d,i=v(function(c,l){if(c.$){var $=c.a;return p(Gn,e,l,$)}else{var u=c.a;return p(Gn,i,l,u)}});return p(Gn,i,p(Gn,e,r,t),a)}),Zt=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(Zt,e,r,c)),$=i;e=l,r=u,n=$;continue e}}),ui=function(e){return p(Zt,y(function(r,n,a){return o(B,z(r,n),a)}),P,e)},Tc=1,Ef=2,Mc=0,_e=function(e){return{$:1,a:e}},Xt=v(function(e,r){return{$:3,a:e,b:r}}),vi=v(function(e,r){return{$:0,a:e,b:r}}),Dc=v(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},Uf=function(e){return{$:2,a:e}},ae=function(e){return{$:0,a:e}},q={$:1},jf=Cv,Nf=Hv,De=tc,Pr=v(function(e,r){return o(yv,e,Ta(r))}),Kt=v(function(e,r){return b(o(wv,e,r))}),Bc=function(e){return o(Pr,`
    `,o(Kt,`
`,e))},Bn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Mr=function(e){return p(Bn,v(function(r,n){return n+1}),0,e)},Wf=ev,Gf=y(function(e,r,n){e:for(;;)if(O(e,r)<1){var a=e,t=r-1,i=o(B,r,n);e=a,r=t,n=i;continue e}else return n}),Jr=v(function(e,r){return p(Gf,e,r,P)}),Ac=v(function(e,r){return p(Wf,e,o(Jr,0,Mr(r)-1),r)}),rr=Dv,Fc=function(e){var r=rr(e);return 97<=r&&r<=122},Vc=function(e){var r=rr(e);return r<=90&&65<=r},Hf=function(e){return Fc(e)||Vc(e)},Yf=function(e){var r=rr(e);return r<=57&&48<=r},If=function(e){return Fc(e)||Vc(e)||Yf(e)},Ae=function(e){return p(Bn,B,P,e)},en=bv,Of=v(function(e,r){return`

(`+(De(e+1)+(") "+Bc(Jf(r))))}),Jf=function(e){return o(qf,e,P)},qf=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=en(n);if(h.$===1)return!1;var w=h.a,x=w.a,_=w.b;return Hf(x)&&o(jf,If,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,$=o(B,t,r);e=u,r=$;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,$=o(B,l,r);e=u,r=$;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Ae(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(De(Mr(s))+" ways:"));return o(Pr,`

`,o(B,g,o(Ac,Of,s)))}else{var c=s.a,u=c,$=r;e=u,r=$;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Ae(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Ae(r))+`:

    `):`Problem with the given value:

`}();return g+(Bc(o(Nf,4,f))+(`

`+m))}}),Fe=32,st=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),dt=Yu,Qt=vv,eo=v(function(e,r){return qo(r)/qo(e)}),Zf=lv,Ln=Qt(o(eo,2,Fe)),Rc=L(st,0,Ln,dt,dt),Ec=Ou,Uc=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var jc=$v,mt=Iu,nr=v(function(e,r){return O(e,r)>0?e:r}),Xf=function(e){return{$:0,a:e}},ro=Ju,Kf=v(function(e,r){e:for(;;){var n=o(ro,Fe,e),a=n.a,t=n.b,i=o(B,Xf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Ae(i)}}),Qf=function(e){var r=e.a;return r},es=v(function(e,r){e:for(;;){var n=Qt(r/Fe);if(n===1)return o(ro,Fe,e).a;var a=o(Kf,e,P),t=n;e=a,r=t;continue e}}),Nc=v(function(e,r){if(r.l){var n=r.l*Fe,a=jc(o(eo,Fe,n-1)),t=e?Ae(r.z):r.z,i=o(es,t,r.l);return L(st,mt(r.p)+n,o(nr,5,a*Ln),i,r.p)}else return L(st,mt(r.p),Ln,dt,r.p)}),rs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Nc,!1,{z:a,l:n/Fe|0,p:t});var i=Uc(p(Ec,Fe,r,e)),c=e,l=r-Fe,u=n,$=o(B,i,a),s=t;e=c,r=l,n=u,a=$,t=s;continue e}}),ns=v(function(e,r){if(e<=0)return Rc;var n=e%Fe,a=p(Ec,n,e-n,r),t=e-n-Fe;return S(rs,r,t,e,P,a)}),Ie=function(e){return!e.$},D=jv,Z=Fv,M=Uv,$e=Vv,da=Nv,as=Wv,Te=Av,no=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=Br("div"),ts=function(e){return{$:2,a:e}},Wc=v(function(e,r){return e}),Gc=v(function(e,r){return{b7:r.b7,eA:e,cb:r.cb,eJ:r.eJ,e7:r.e7,fs:r.fs,cT:r.cT,fR:r.fR}}),kr=function(e){return e},os=kr,$i=qe(function(e,r,n,a,t,i){return{dk:i,dm:r,dZ:a,d0:n,d3:e,d4:t}}),is=Lv,zr=hv,Nr=xv,An=v(function(e,r){return e<1?r:p(Nr,e,zr(r),r)}),Ma=zv,Da=function(e){return e===""},Ba=v(function(e,r){return e<1?"":p(Nr,0,e,r)}),Hc=kv,fi=he(function(e,r,n,a,t){if(Da(t)||o(is,"@",t))return q;var i=o(Ma,":",t);if(i.b){if(i.b.b)return q;var c=i.a,l=Hc(o(An,c+1,t));if(l.$===1)return q;var u=l;return ae(Le($i,e,o(Ba,c,t),u,r,n,a))}else return ae(Le($i,e,t,q,r,n,a))}),si=E(function(e,r,n,a){if(Da(a))return q;var t=o(Ma,"/",a);if(t.b){var i=t.a;return S(fi,e,o(An,i,a),r,n,o(Ba,i,a))}else return S(fi,e,"/",r,n,a)}),di=y(function(e,r,n){if(Da(n))return q;var a=o(Ma,"?",n);if(a.b){var t=a.a;return L(si,e,ae(o(An,t+1,n)),r,o(Ba,t,n))}else return L(si,e,q,r,n)});v(function(e,r){if(Da(r))return q;var n=o(Ma,"#",r);if(n.b){var a=n.a;return p(di,e,ae(o(An,a+1,r)),o(Ba,a,r))}else return p(di,e,q,r)});var cs=Pv,ao=function(e){},Fn=Dr,ls=Fn(0),Yc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,$=l.b;if($.b){var s=$.a,d=$.b,m=n>500?p(Bn,e,r,Ae(d)):L(Yc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),sr=y(function(e,r,n){return L(Yc,e,r,0,n)}),ee=v(function(e,r){return p(sr,v(function(n,a){return o(B,e(n),a)}),P,r)}),ma=ut,to=v(function(e,r){return o(ma,function(n){return Fn(e(n))},r)}),us=y(function(e,r,n){return o(ma,function(a){return o(ma,function(t){return Fn(o(e,a,t))},n)},r)}),vs=function(e){return p(sr,us(B),Fn(P),e)},$s=Qv,fs=v(function(e,r){var n=r;return cc(o(ma,$s(e),n))}),ss=y(function(e,r,n){return o(to,function(a){return 0},vs(o(ee,fs(e),r)))}),ds=y(function(e,r,n){return Fn(0)}),ms=v(function(e,r){var n=r;return o(to,e,n)});er.Task=Xv(ls,ss,ds,ms);var ps=uc("Task"),oo=v(function(e,r){return ps(o(to,e,r))}),bs=B$,hs=mv,pa={$:1},Ic=function(e){return{$:2,a:e}},Aa={$:0},je=v(function(e,r){return{$:0,a:e,b:r}}),ne=y(function(e,r,n){return r(e(n))}),rn=function(e){var r=e.b.B;return r.a},gs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ae(o(je,r,{B:i,ab:c,T:o(B,a,n)}))}else return q},Oc=function(e){var r=e.b;return o(je,Aa,r)},_r=v(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fs.de?Oc(n):n;case 2:var i=a.a.cY;return(O(i+r.eJ,rn(n).b7)>0?o(ne,gs,_r(o(je,pa,t))):kr)(o(je,Ic({cY:i+r.eJ}),t));default:var c=t.B,l=c.a,u=c.b,$=o(Gc,l.eA,Ke(r,{b7:l.b7+r.eJ})),s=o(e,$,u);return o(je,Aa,{B:z($,s),ab:P,T:o(B,t.B,t.T)})}}),Jc=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(B,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=v(function(e,r){return Ae(p(ws,e,r,P))}),qc=y(function(e,r,n){if(r<=0)return P;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return b([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,$=u.b,s=$.a;return b([_,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,h=g.a,w=g.b;return e>1e3?o(B,_,o(B,c,o(B,s,o(B,h,o(ys,r-4,w))))):o(B,_,o(B,c,o(B,s,o(B,h,p(qc,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,_=x.a;return b([_])}}),xs=v(function(e,r){return p(qc,0,e,r)}),Ss=v(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Ae(n),le(b([a]),t)),c=o(xs,e,i),l=o(Jc,e,i);if(l.b){var u=l.a,$=l.b;return o(je,pa,{B:u,ab:$,T:Ae(c)})}else{var s=Ae(c);if(s.b){var d=s.a,m=s.b;return o(je,pa,{B:d,ab:P,T:m})}else return r}}),Cs=function(e){var r=e.b;return o(je,pa,r)},Ls=function(e){var r=e.b;return o(je,Ic({cY:rn(e).b7}),r)},Ps=v(function(e,r){switch(e.$){case 1:return Cs(r);case 2:return Oc(r);case 3:return Ls(r);default:var n=e.a;return o(Ss,n,r)}}),Zc=v(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),zs=v(function(e,r){return Ke(r,{av:e(r.av)})}),ks=function(e){return{$:3,a:e}},Ts=function(e){return{$:2,a:e}},Xc=v(function(e,r){return{$:0,a:e,b:r}}),Ms=v(function(e,r){return{$:1,a:e,b:r}}),Be=v(function(e,r){if(r.$)return q;var n=r.a;return ae(e(n))}),K=function(e){return e<0?-e:e},io=Tv,Ds=y(function(e,r,n){return o(_r,0/0,io(o(e,r,n)))}),Kc=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Bs=_v,Qc=function(e){return p(Bs,B,P,e)},As=v(function(e,r){var n=o(Kc,function(a){return a!=="0"&&a!=="."},Qc(r));return le(e&&n?"-":"",r)}),me=tc,pt=pv,el=Bv,rl=function(e){var r=e.a,n=e.b;if(r==="9"){var a=en(n);if(a.$===1)return"01";var t=a.a;return o(pt,"0",rl(t))}else{var i=rr(r);return i>=48&&i<57?o(pt,el(i+1),n):"0"}},bt=uv,Fs=dv,Fa=function(e){return o(pt,e,"")},nl=y(function(e,r,n){return e<=0?n:p(nl,e>>1,le(r,r),e&1?le(n,r):n)}),Pn=v(function(e,r){return p(nl,e,r,"")}),ht=y(function(e,r,n){return le(n,o(Pn,e-zr(n),Fa(r)))}),gt=gv,al=function(e){var r=o(Kt,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Vs=function(e){var r=o(Kt,"e",me(K(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(_r,0,Hc(o(cs,"+",t)?o(An,1,t):t)),c=al(n),l=c.a,u=c.b,$=le(l,u),s=i<0?o(_r,"0",o(Be,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Be,Zc(Fa),en(le(o(Pn,K(i),"0"),$))))):p(ht,i+1,"0",$);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Rs=y(function(e,r,n){if(bt(n)||Fs(n))return me(n);var a=n<0,t=al(Vs(K(n))),i=t.a,c=t.b,l=zr(i)+r,u=le(o(Pn,-l+1,"0"),p(ht,l,"0",le(i,c))),$=zr(u),s=o(nr,1,l),d=o(e,a,p(Nr,s,$,u)),m=p(Nr,0,s,u),f=d?gt(o(_r,"1",o(Be,rl,en(gt(m))))):m,g=zr(f),h=f==="0"?f:r<=0?le(f,o(Pn,K(r),"0")):O(r,zr(c))<0?p(Nr,0,g-r,f)+("."+p(Nr,g-r,g,f)):le(i+".",p(ht,r,"0",c));return o(As,a,h)}),tl=Rs(v(function(e,r){var n=en(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Es=Ds(tl),Us=y(function(e,r,n){var a=o(eo,10,K(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Es,t,n)}),ol=Ku,co=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(ol,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ae(a);default:var l=e,u=i;e=l,r=u;continue e}}}),H=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),tr={$:-2},qr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var $=a.b,s=a.c,d=a.d,m=a.e;return S(H,0,r,n,S(H,1,$,s,d,m),S(H,1,i,c,l,u))}else return S(H,e,i,c,S(H,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var $=a.b,s=a.c,f=a.d;f.a;var g=f.b,h=f.c,w=f.d,x=f.e,m=a.e;return S(H,0,$,s,S(H,1,g,h,w,x),S(H,1,r,n,m,t))}else return S(H,e,r,n,a,t)}),_t=y(function(e,r,n){if(n.$===-2)return S(H,0,e,r,tr,tr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(ol,e,t);switch(u){case 0:return S(qr,a,t,i,p(_t,e,r,c),l);case 1:return S(H,a,t,r,c,l);default:return S(qr,a,t,i,c,p(_t,e,r,l))}}),bn=y(function(e,r,n){var a=p(_t,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(H,1,t,i,c,l)}else{var u=a;return u}}),js=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},il=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,$=e.e;$.a;var s=$.b,d=$.c,m=$.d;m.a;var f=m.b,g=m.c,h=m.d,w=m.e,x=$.e;return S(H,0,f,g,S(H,1,n,a,S(H,0,i,c,l,u),h),S(H,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,C=e.e;C.a;var s=C.b,d=C.c,m=C.d,x=C.e;return S(H,1,n,a,S(H,0,i,c,l,u),S(H,0,s,d,m,x))}else return e},mi=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,$=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,h=f.c,w=f.d,x=f.e;return S(H,0,i,c,S(H,1,u,$,s,d),S(H,1,n,a,m,S(H,0,g,h,w,x)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,C=_.d,m=_.e,T=e.e;T.a;var g=T.b,h=T.c,w=T.d,x=T.e;return S(H,1,n,a,S(H,0,i,c,C,m),S(H,0,g,h,w,x))}else return e},Ns=za(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,$=i.d,s=i.e;return S(H,n,l,u,$,S(H,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,mi(r)}else break e;else return c.a,c.d,mi(r);else break e;return r}}),ra=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(H,r,n,a,ra(t),l);var u=il(e);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,$,s,d,ra(m),f)}else return tr}else return S(H,r,n,a,ra(t),l)}else return tr},hn=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(O(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(H,n,a,t,o(hn,e,i),c);var u=il(r);if(u.$===-1){var $=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(qr,$,s,d,o(hn,e,m),f)}else return tr}else return S(H,n,a,t,o(hn,e,i),c);else return o(Ws,e,Et(Ns,e,r,n,a,t,i,c))}),Ws=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(gr(e,a)){var l=js(c);if(l.$===-1){var u=l.b,$=l.c;return S(qr,n,u,$,i,ra(c))}else return tr}else return S(qr,n,a,t,i,o(hn,e,c))}else return tr}),Gs=v(function(e,r){var n=o(hn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(H,1,a,t,i,c)}else{var l=n;return l}}),Hn=y(function(e,r,n){var a=r(o(co,e,n));if(a.$)return o(Gs,e,n);var t=a.a;return p(bn,e,t,n)}),Hs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ms,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(Xc,z(i,c),p(Us,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===3?ks(n):a}));default:var r=e.a,n=e.b;return o(Hn,r,Be(function(a){return a.$===2?Ts(n):a}))}},Ys=function(e){return zs(Hs(e))},Is=v(function(e,r){return o(ee,Ys(e),r)}),Os=v(function(e,r){return Ke(r,{eA:o(Is,e,r.eA)})}),Js=v(function(e,r){var n=r.a,a=r.b;return o(je,n,Ke(a,{B:o(Zc,Os(e),a.B)}))}),qs=v(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),Zs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(je,a,Ke(t,{B:o(qs,o(e,i.a,r),i)}))}),Xs=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ke(a,{aL:!a.aL});case 2:var t=n.a;return Ke(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return Ke(a,{G:o(Js,i,a.G)});case 4:var c=n.a;return Ke(a,{G:p(Zs,r,c,a.G)});default:var l=n.a;return Ke(a,{G:o(Ps,l,a.G)})}}),Ks=v(function(e,r){return o(je,Aa,{B:z(e,r(e)),ab:P,T:P})}),Qs=e$,pi=Qs(P),ba=Ev,zn=Rv,ed=o$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Te({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Te({eo:d,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ba(zn)))},o(M,"left",Z))},o(M,"pressedKeys",ba(zn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Te({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Te({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Te({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),rd=function(e){return{$:4,a:e}},nd={$:0},ad=ic,Ye=v(function(e,r){return o(fc,e,ad(r))}),Y=Ye("className"),td=function(e){var r=e.b.B;return r.b},ha=Ye("id"),od=$$,ga=od,id=f$,se=id,cd={$:1},ld=function(e){return{$:3,a:e}},ud=function(e){return{$:5,a:e}},bi=Br("a"),lo=Br("button"),hi=function(e){return o(Ye,"href",m$(e))},vd=Sr("clip-rule"),xe=Sr("d"),$d=Sr("fill"),cl=vc("http://www.w3.org/2000/svg"),fd=cl("svg"),sd=Sr("viewBox"),dd=o(s$,"http://www.w3.org/XML/1998/namespace","xml:space"),Ve=fd(b([sd("0 0 24 24"),$d("currentColor"),o(se,"width","100%"),o(se,"height","100%"),dd("http://www.w3.org/2000/svg")])),md=Sr("fill-rule"),Se=cl("path"),Hr={eD:Ve(b([o(Se,b([xe("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),P)])),eQ:Ve(b([o(Se,b([xe("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),P)])),eV:Ve(b([o(Se,b([xe("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),P)])),fe:Ve(b([o(Se,b([xe("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),P),o(Se,b([xe("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),P)])),ff:Ve(b([o(Se,b([xe("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),P),o(Se,b([xe("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),P)])),fp:Ve(b([o(Se,b([xe("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),P)])),fq:Ve(b([o(Se,b([xe("M7 5V19L18 12L7 5Z")]),P)])),fr:Ve(b([o(Se,b([xe("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),P)])),fs:Ve(b([o(Se,b([xe("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),P)])),fM:Ve(b([o(Se,b([md("evenodd"),vd("evenodd"),xe("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),P)])),fN:Ve(b([o(Se,b([xe("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),P)])),f0:Ve(b([o(Se,b([xe("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),P)]))},pd=function(e){return{$:0,a:e}},ll=$c,ul=v(function(e,r){return o(ll,e,pd(r))}),uo=function(e){return o(ul,"click",Te(e))},gi=Ye("target"),bd=Ye("title"),wt=v(function(e,r){if(r.$===-2)return tr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(H,n,a,o(e,a,t),o(wt,e,i),o(wt,e,c))}),hd=vt,$r=hd,gd=function(e){return p(Zt,y(function(r,n,a){return o(B,n,a)}),P,e)},_d=v(function(e,r){return{$:3,a:e,b:r}}),wd=v(function(e,r){return{$:2,a:e,b:r}}),yd=v(function(e,r){return{$:0,a:e,b:r}}),xd=v(function(e,r){return{$:1,a:e,b:r}}),dr=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Sd=L(dr,0/255,0/255,0/255,1),Cd=ic,Ld=v(function(e,r){return o(fc,e,Cd(r))}),Pd=Ld("checked"),Je=fv,zd=y(function(e,r,n){return le(o(Pn,e-zr(n),Fa(r)),n)}),_a=nv,vl=function(e){var r=function(n){return n<10?De(n):Fa(el(87+n))};return e<16?r(e):le(vl(e/16|0),r(o(_a,16,e)))},kd=o(ne,vl,o(zd,2,"0")),vo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b5:a,cd:n,cN:r}},Td=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return o(Pr,"",o(B,"#",o(ee,o(ne,Je,kd),b([n*255,a*255,t*255]))))},yt=Ye("htmlFor"),Md=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),wa=v(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return e(n)}}),Dd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(B,t,n)}),$o=v(function(e,r){return p(sr,Dd(e),P,r)}),$l=E(function(e,r,n,a){return{e$:r,fb:e,fk:n,fG:a}}),Bd=E$,Ad=Mv,Fd=v(function(e,r){if(r.$)return _e(e);var n=r.a;return ue(n)}),Vd=R$,Rd=function(e){return o(Vd,{ew:!1,fg:!1},e)},fo=function(e){if(e.b){var r=e.a;return e.b,ae(r)}else return q},Ed=v(function(e,r){if(r.$){var a=r.a;return _e(a)}else{var n=r.a;return ue(e(n))}}),Ud=function(e){return{$:2,a:e}},jd=function(e){return{$:0,a:e}},Nd=function(e){return{$:1,a:e}},Ha=v(function(e,r){return rr(r)-rr(e)}),Ya=y(function(e,r,n){var a=rr(n);return O(rr(e),a)<1&&O(a,rr(r))<1}),Wd=v(function(e,r){var n=function(t){return O(t,e)<0?ue(t):_e(Nd(r))},a=p(Ya,"0","9",r)?ue(o(Ha,"0",r)):p(Ya,"a","z",r)?ue(10+o(Ha,"a",r)):p(Ya,"A","Z",r)?ue(10+o(Ha,"A",r)):_e(jd(r));return o(wa,n,a)}),fl=v(function(e,r){var n=en(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(wa,function(c){return o(wa,function(l){return ue(c+l*e)},o(fl,e,i))},o(Wd,e,t))}),Gd=v(function(e,r){return 2<=e&&e<=36?o(fl,e,gt(r)):_e(Ud(e))}),Hd=Gd(16),Yd=y(function(e,r,n){return L(dr,e,r,n,1)}),Id=E(function(e,r,n,a){return L(dr,e,r,n,a)}),Vn=rv,Od=v(function(e,r){var n=o(Vn,10,e);return Je(r*n)/n}),Jd=Sv,qd=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Qc(n);if(a.b&&!a.b.b){var t=a.a;return Ad(b([t,t]))}else return n};return o(ne,Jd,o(ne,function(n){return o(Be,function(a){return p(Bd,1,a,n)},Rd(e))},o(ne,Md(fo),o(ne,Be(function(n){return n.fG}),o(ne,Be($o(kr)),o(ne,Fd("Parsing hex regex failed"),wa(function(n){var a=o(ee,o(ne,r,o(ne,Hd,Ed(Zf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,$=l.b,s=$.a.a;return ue(L(Id,t/255,c/255,u/255,o(Od,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Yd,t/255,c/255,u/255))}else break e;return _e("Parsing ints from hex failed")})))))))}(),ya=Br("input"),xt=Br("label"),St=Ye("name"),sl=v(function(e,r){return p(sr,M,r,e)}),Zd=o(sl,b(["target","checked"]),Z),Xd=function(e){return o(ul,"change",o(da,e,Zd))},Kd=function(e){return z(e,!0)},Qd=function(e){return{$:1,a:e}},em=v(function(e,r){return o(ll,e,Qd(r))}),rm=o(sl,b(["target","value"]),zn),so=function(e){return o(em,"input",o(da,Kd,o(da,e,rm)))},dl=Ye("max"),ml=Ye("min"),pl=function(e){return o(Ye,"step",e)},xa=Ye("type"),mo=Ye("value"),_i=function(e){var r=e.cg,n=e.c1,a=e.cw,t=e.cs,i=e.cW,c=e.cA;return o(I,P,b([o(xt,b([yt(r)]),b([o(I,b([Y("relative w-full")]),b([o(I,b([Y("inline-block")]),b([$r(r)])),o(I,b([Y("inline-block float-right")]),b([$r(me(n))]))]))])),o(ya,b([xa("range"),o(se,"width","100%"),ha(r),St(r),ml(me(a)),dl(me(t)),mo(me(n)),pl(me(i)),so(o(ne,io,o(ne,_r(42),c)))]),P)]))},nm=v(function(e,r){if(r.$)return e;var n=r.a;return n}),am=v(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,b([Y("h-12 py-4")]),b([o(xt,b([Y("block"),yt(e)]),b([o(ya,b([Y("relative bottom-[1px] align-middle mr-2"),xa("checkbox"),ha(e),St(e),Xd(_d(e)),Pd(c)]),P),$r(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:yd(e),cW:.01*(i-t),c1:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return _i({cg:e,cs:i,cw:t,cA:o(ne,Je,xd(e)),cW:1,c1:c});default:var c=r.a;return o(I,P,b([o(I,b([o(se,"margin-bottom","6px")]),b([o(xt,b([yt(e)]),b([$r(e)]))])),o(ya,b([xa("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ha(e),St(e),so(function(l){return o(wd,e,o(nm,Sd,qd(l)))}),mo(Td(c))]),P)]))}}),tm=function(e){return o(I,b([Y("p-4 border-y-[0.5px] border-white20")]),b([o(I,b([Y("text-lg pb-2")]),b([$r(e.fh)])),o(I,b([Y("pl-2 pr-2")]),gd(o(wt,am,e.av)))]))},om=function(e){return o(I,b([Y("text-xs text-white60")]),o(ee,tm,e))},im=function(e){return o(I,b([Y("absolute left-[104px] bottom-2 text-sm text-white40")]),b([$r("clock: "+o(tl,3,rn(e).b7))]))},cm=function(e){e.a;var r=e.b.T;return o(Be,function(n){return Je(60/(rn(e).b7-n))},o(Be,o(ne,Qf,function(n){return n.b7}),fo(o(Jc,59,r))))},lm=function(e){return o(I,b([Y("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=cm(e);if(r.$===1)return b([$r("... Fps")]);var n=r.a;return b([$r(De(n)+" Fps")])}())},um=function(e){return{$:0,a:e}},vm=function(e){var r=e.b.T;return Mr(r)},$m=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Mr(r)+1+Mr(n)},fm=function(e){return o(ya,b([Y("absolute w-full"),xa("range"),ml(De(0)),dl(De($m(e)-1)),mo(De(vm(e))),pl(De(1)),so(o(ne,io,o(ne,_r(42),o(ne,Je,um))))]),P)},wi={$:1},sm={$:3},dm={$:2},bl=function(e){return!e.b},yi=v(function(e,r){return o(lo,b([Y("px-2 bg-black60 hover:bg-black80 active:bg-black"),Y(r),uo(e)]),b([$r("REC")]))}),xi=v(function(e,r){return o(lo,b([Y("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black"),uo(r)]),b([o(I,b([Y("w-4 h-6 text-white60 hover:text-white80")]),b([e]))]))}),mm=function(e){var r=e.a,n=e.b.ab;return o(I,b([Y("py-1")]),b([function(){switch(r.$){case 0:return o(yi,wi,"text-red-500 font-bold");case 1:return o(yi,dm,"text-white60 hover:text-white80 font-bold");default:return o(I,P,P)}}(),function(){switch(r.$){case 0:return o(I,P,P);case 1:return bl(n)?o(I,P,P):o(xi,Hr.fq,sm);default:return o(xi,Hr.fp,wi)}}()]))},pm=function(e){return o(I,b([Y("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),b([fm(e),mm(e),lm(e),im(e)]))},bm=function(e){var r=e.a;return gr(r,Aa)},hm=v(function(e,r){var n=bm(r.G)?o(I,P,P):o(I,b([Y("absolute pointer-events-none w-8 h-8"),o(se,"left",me(e.fs.fU+.5*e.cT.fS)+"px"),o(se,"top",me(-e.fs.fY+.5*e.cT.eW)+"px")]),b([o(I,b([Y(e.fs.e4?"text-black80":"text-black40")]),b([Hr.fs]))]));return o(I,P,b([n]))}),gm=v(function(e,r){var n=o(lo,b([Y(r.aL?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),uo(cd),bd("Distraction Free Mode")]),b([Hr.f0])),a=o(I,b([Y("absolute w-8 bottom-12")]),b([o(bi,b([Y("text-twitterBlue40 hover:text-twitterBlue"),hi("https://twitter.com/AzizErkalSelman"),gi("_blank")]),b([Hr.fN]))])),t=o(I,b([Y("absolute w-8 bottom-2")]),b([o(bi,b([Y("text-githubCat40 hover:text-githubCat"),hi("https://github.com/erkal/elm-3d-playground-exploration"),gi("_blank")]),b([Hr.eQ]))]));return r.aL?o(I,b([Y("fixed w-10 h-10 p-1")]),b([n])):o(I,P,b([o(I,b([Y("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),b([n,a,t])),o(I,b([Y("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",me(e.cT.eW-80)+"px")]),b([o(ga,ld,om(rn(r.G).eA))])),o(I,b([Y("absolute bottom-0 left-10 h-20"),o(se,"width",e.cT.fS>600?"600px":me(e.cT.fS-40)+"px")]),b([o(ga,ud,pm(r.G))])),o(hm,e,r)]))}),_m=y(function(e,r,n){var a=td(n.G),t=rn(n.G);return o(I,b([Y("bg-black40"),Y("select-none"),Y("antialiased"),Y("font-mono"),o(se,"width",me(t.cT.fS)+"px"),o(se,"height",me(t.cT.eW)+"px")]),b([o(I,b([Y("fixed")]),b([o(ga,Wc(nd),o(e,t,a))])),o(I,b([ha("gui")]),b([o(gm,t,n),o(ga,rd,o(r,t,a))]))]))}),wm=qe(function(e,r,n,a,t,i){var c=v(function(u,$){return z(L(Xs,r,i,u,$),pi)}),l=function(u){var $=o(Gc,n,u.e1);return z({aL:u.e1.cT.fS<500,G:o(Ks,$,a)},pi)};return bs({e0:l,fH:Wc(ed(ts)),fO:c,fQ:o(_m,e,t)})}),ym=E(function(e,r,n,a){return Le(wm,e,r,n,a,v(function(t,i){return o(I,P,P)}),y(function(t,i,c){return c}))}),xm=function(e){return{}},Sm=y(function(e,r,n){return{av:n,e5:r,fh:e}}),hl=tr,Cm=function(e){return p(Bn,v(function(r,n){var a=r.a,t=r.b;return p(bn,a,t,n)}),hl,e)},Lm=y(function(e,r,n){return p(Sm,e,r,Cm(n))}),Si=Lm,Yn=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(Xc,z(a,t),n))}),ur=av,Pm=b([p(Si,"Camera",!0,b([p(Yn,"camera distance",z(3,8),4),p(Yn,"camera azimuth",z(0,2*ur),0),p(Yn,"camera elevation",z(-ur/2,ur/2),.5)])),p(Si,"Parameters",!0,b([p(Yn,"sun size",z(.1,.5),.3)]))]),zm=v(function(e,r){return r}),Ct=L(dr,52/255,101/255,164/255,1),km=L(dr,115/255,210/255,22/255,1),po=function(e){return{$:5,a:e}},gl=function(e){return po(e)},bo=v(function(e,r){return{$:4,a:e,b:r}}),_l=function(e){return e},nn=v(function(e,r){var n=e,a=r;return{fU:a.fU+n.fU,fY:a.fY+n.fY,c6:a.c6+n.c6}}),Tm=v(function(e,r){return _l(z(e,o(nn,r,e)))}),wl=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),Mm=v(function(e,r){var n=r.a,a=r.b,t=r.c;return p(wl,e(n),e(a),e(t))}),Ne=function(e){return e},mr={fU:0,fY:0,c6:0},Ia=v(function(e,r){return o(bo,e,o(Tm,mr,o(Mm,Ne,r)))}),Dm=L(dr,204/255,0/255,0/255,1),Bm=gl(b([o(Ia,Dm,V(100,0,0)),o(Ia,km,V(0,100,0)),o(Ia,Ct,V(0,0,100))])),Am=v(function(e,r){return o(Be,function(n){if(n.$)return 0;var a=n.b;return a},o(co,e,r.av))}),Fm=v(function(e,r){return o(_r,0,fo(o($o,Am(e),r)))}),Vm=v(function(e,r){return o(Fm,e,r.eA)}),na=Vm,Rm=cv,Em=function(e){return e},Lt=function(e){var r=e;return-r},Um=v(function(e,r){var n=e,a=r;return{fU:n.fY*a.c6-n.c6*a.fY,fY:n.c6*a.fU-n.fU*a.c6,c6:n.fU*a.fY-n.fY*a.fU}}),yl=function(e){var r=e;return r.c4},xl=function(e){var r=e;return r.c5},jm=function(e){return o(Um,yl(e),xl(e))},an=function(e){var r=e;return r.cB},Zr=tv,Xr=ov,aa=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=Xr(c),$=a.eH,s=$,d=s.fU*u,m=l*d,f=d*d,g=s.fY*u,h=l*g,w=d*g,x=g*g,_=1-2*(f+x),C=s.c6*u,T=l*C,N=2*(w-T),U=2*(w+T),R=d*C,j=2*(R+h),W=2*(R-h),A=g*C,J=2*(A-m),X=2*(A+m),oe=C*C,ve=1-2*(x+oe),te=1-2*(f+oe);return{fU:ve*i.fU+N*i.fY+j*i.c6,fY:U*i.fU+te*i.fY+J*i.c6,c6:W*i.fU+X*i.fY+_*i.c6}}),Rn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Zr(c),u=Xr(c),$=a.cB,s=$,d=i.fU-s.fU,m=i.fY-s.fY,f=i.c6-s.c6,g=a.eH,h=g,w=h.fU*u,x=l*w,_=w*w,C=h.fY*u,T=l*C,N=w*C,U=C*C,R=1-2*(_+U),j=h.c6*u,W=l*j,A=2*(N-W),J=2*(N+W),X=w*j,oe=2*(X+T),ve=2*(X-T),te=C*j,de=2*(te-x),ke=2*(te+x),ye=j*j,pr=1-2*(U+ye),br=1-2*(_+ye);return{fU:s.fU+pr*d+A*m+oe*f,fY:s.fY+J*d+br*m+de*f,c6:s.c6+ve*d+ke*m+R*f}}),tn=function(e){return e},Ar=function(e){var r=e;return r.c4},Fr=function(e){var r=e;return r.c5},Vr=function(e){var r=e;return r.c7},Sl=y(function(e,r,n){return tn({cB:p(Rn,e,r,an(n)),c4:p(aa,e,r,Ar(n)),c5:p(aa,e,r,Fr(n)),c7:p(aa,e,r,Vr(n))})}),Ci=y(function(e,r,n){return p(Sl,e(n),r,n)}),Cl=function(e){var r=e;return r.eH},Ll=v(function(e,r){return tn({cB:o(nn,e,an(r)),c4:Ar(r),c5:Fr(r),c7:Vr(r)})}),Nm=v(function(e,r){var n=e,a=r;return{fU:n*a.fU,fY:n*a.fY,c6:n*a.c6}}),Wm=y(function(e,r,n){return o(Ll,o(Nm,r,e),n)}),Gm=y(function(e,r,n){return p(Wm,Cl(e(n)),r,n)}),Cr=v(function(e,r){return{eH:r,cB:e}}),Hm=function(e){var r=e;return o(Cr,r.cB,r.c4)},Ym=function(e){var r=e;return o(Cr,r.cB,r.c5)},Im=function(e){var r=e;return o(Cr,r.cB,r.c7)},Om=function(e){var r=tn({cB:e.aR,c4:xl(e.dl),c5:jm(e.dl),c7:yl(e.dl)}),n=p(Gm,Im,e.cc,p(Ci,Hm,Lt(e.bC),p(Ci,Ym,e.bx,r)));return n},Jm=function(e){return{$:0,a:e}},We=function(e){var r=e;return K(r)},ta=function(e){var r=e;return .5*r},qm=iv,Zm=function(e){var r=e;return qm(r)},Xm=function(e){var r=ta(We(e.ej)),n=Zm(r);return{cM:Jm(n),c2:e.c2}},vr=function(e){return e},Pl=kr,Tr=function(e){return e},Km=Tr({fU:1,fY:0,c6:0}),ho=Km,zl=Tr({fU:0,fY:0,c6:1}),Va=zl,Qm=Pl({cB:mr,c4:Va,c5:ho}),e0=function(e){var r=e.aR,n=e.bx,a=e.bC,t=e.cc;return Xm({ej:vr(2*Rm(.5)),c2:Om({bx:vr(n),cc:Ne(t),bC:vr(a),aR:Em(r),dl:Qm})})},r0=function(e){return e0({bx:o(na,"camera azimuth",e),cc:o(na,"camera distance",e),bC:o(na,"camera elevation",e),aR:{fU:0,fY:0,c6:0}})},Wr=function(e){return e*ur/180},go=v(function(e,r){return{$:2,a:e,b:r}}),n0=y(function(e,r,n){return{k:o(Cr,e,r),e9:We(n.e9),fu:We(n.fu)}}),kl=Tr({fU:0,fY:1,c6:0}),a0=y(function(e,r,n){return o(go,e,p(n0,mr,kl,{e9:Ne(n),fu:Ne(r)}))}),Pt=function(e){return{$:0,a:e}},Tl=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Ml=y(function(e,r,n){return O(n,e)<0?e:O(n,r)>0?r:n}),Oa=function(e){return p(Ml,0,1,e<=.04045?e/12.92:o(Vn,(e+.055)/1.055,2.4))},En=N$,t0=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(En,Oa(n),Oa(a),Oa(t))},oa=function(e){return p(Tl,0,Pt(t0(e)),Pt(0))},Dl=v(function(e,r){return{$:0,a:e,b:r}}),_o=v(function(e,r){return{$:3,a:e,b:r}}),Bl=v(function(e,r){return{$:1,a:e,b:r}}),o0=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),i0=function(e){var r=e;return r},wo=function(e){var r=e;return i0(r.er)},yo=function(e){var r=e;return r.aK},c0=v(function(e,r){return{er:o(Ll,e,wo(r)),aK:yo(r)}}),l0=v(function(e,r){var n=r;return o(Cr,o(nn,e,n.cB),n.eH)}),u0=v(function(e,r){var n=r;return{k:o(l0,e,n.k),e9:n.e9,fu:n.fu}}),xo=function(e){var r=e;return r},Al=v(function(e,r){var n=xo(r),a=n.a,t=n.b;return _l(z(e(a),e(t)))}),v0=v(function(e,r){return o(Al,nn(e),r)}),So=function(e){var r=e;return r.ey},Co=function(e){var r=e;return r.fu},Lo=v(function(e,r){return{ey:r,fu:We(e)}}),$0=v(function(e,r){return o(Lo,Co(r),o(nn,e,So(r)))}),Fl=v(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return V(e(a),e(t),e(i))}),f0=v(function(e,r){return o(Fl,nn(e),r)}),Vl=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(o0,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Dl,s,o(c0,i,c));case 1:var s=r.a,l=r.b;return o(Bl,s,o(f0,i,l));case 3:var s=r.a,u=r.b;return o(_o,s,o($0,i,u));case 2:var s=r.a,$=r.b;return o(go,s,o(u0,i,$));case 4:var s=r.a,d=r.b;return o(bo,s,o(v0,i,d));default:var m=r.a;return po(o(ee,Vl(V(n,a,t)),m))}}),Li=function(e){return Vl(V(e,0,0))},s0=y(function(e,r,n){return{er:p(Sl,e,r,wo(n)),aK:yo(n)}}),d0=v(function(e,r){var n=o(Rn,e,r),a=o(aa,e,r);return function(t){var i=t;return o(Cr,n(i.cB),a(i.eH))}}),m0=y(function(e,r,n){var a=n;return{k:p(d0,e,r,a.k),e9:a.e9,fu:a.fu}}),p0=y(function(e,r,n){return o(Al,o(Rn,e,r),n)}),b0=y(function(e,r,n){return o(Lo,Co(n),p(Rn,e,r,So(n)))}),h0=y(function(e,r,n){return o(Fl,o(Rn,e,r),n)}),Po=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Dl,l,p(s0,e,r,a));case 1:var l=n.a,t=n.b;return o(Bl,l,p(h0,e,r,t));case 3:var l=n.a,i=n.b;return o(_o,l,p(b0,e,r,i));case 2:var l=n.a,c=n.b;return o(go,l,p(m0,e,r,c));case 4:var l=n.a,u=n.b;return o(bo,l,p(p0,e,r,u));default:var $=n.a;return po(o(ee,o(Po,e,r),$))}}),zo=kl,g0=o(Cr,mr,zo),Pi=v(function(e,r){return p(Po,g0,vr(e),r)}),_0=o(Cr,mr,Va),zi=v(function(e,r){return p(Po,_0,vr(e),r)}),zt=v(function(e,r){return o(_o,e,o(Lo,Ne(r),mr))}),w0=v(function(e,r){return(r-jc(r/e)*e)/e}),ki=v(function(e,r){return 360*o(w0,e,r)}),y0=L(dr,255/255,255/255,255/255,1),x0=function(e){var r=o(zi,Wr(20),p(a0,oa(Ct),.2,.05)),n=o(zi,Wr(20),o(Pi,Wr(o(ki,3,e.b7)),o(Li,.2,o(zt,oa(y0),.04)))),a=o(zt,oa(Ct),.1);return o(Pi,Wr(o(ki,10,e.b7)),o(Li,1,gl(b([a,n,r]))))},Ja=function(e){return e/255},S0=y(function(e,r,n){return L(dr,Ja(e),Ja(r),Ja(n),1)}),C0=L(dr,245/255,121/255,0/255,1),L0=function(e){return o(zt,oa(C0),o(na,"sun size",e))},P0=function(e){return e},z0=function(e){return Ne(.01*e)},Ti=function(e){return e},k0=function(e){return e},T0=function(e){return{$:0,a:e}},M0=T0,D0={$:3},B0=D0,A0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),F0=A0,V0=v(function(e,r){return r.b?p(sr,B,r,e):e}),Ge=function(e){return p(sr,V0,P,e)},ko=v(function(e,r){return Ge(o(ee,e,r))}),R0=function(e){return{$:1,a:e}},E0=R0,U0=function(e){return o(Sr,"height",De(e))},j0=function(e){return u$(d$(e))},N0=j0,W0=function(e){return{$:2,a:e}},G0=W0,H0=function(e){return o(Pr,"",e)},Y0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Je(l*1e3)/1e3},c=function(l){return Je(l*1e4)/100};return H0(b(["rgba(",me(c(r)),"%,",me(c(n)),"%,",me(c(a)),"%,",me(i(t)),")"]))},I0=v(function(e,r){switch(r.$){case 0:return o(Tf,e,r);case 1:return o(Mf,e,r);case 2:return o(Df,e,r);case 3:return o(Bf,e,r);case 4:return o(Af,e,r);default:return o(Ff,e,r)}}),O0=v(function(e,r){switch(r.$){case 0:return o(of,e,r);case 1:return o(cf,e,r);case 2:return o(lf,e,r);case 3:return o(uf,e,r);case 4:return o(vf,e,r);case 5:return o($f,e,r);case 6:return o(ff,e,r);case 7:return o(sf,e,r);default:return df(e)}}),J0=y(function(e,r,n){return p(kf,e,r,n)}),Mi=function(e){var r=e;return r},on=O$,qa=L(on,1,1,1,1),Ze=y(function(e,r,n){return o(ee,function(a){return o(a,r,n)},e)}),q0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Z0=v(function(e,r){var n=e,a=r.fU,t=r.fY;return p(q0,n*a/t,n,n*(1-a-t)/t)}),X0=function(e){var r=e.a,n=e.b,a=e.c;return p(En,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},To=v(function(e,r){return X0(o(Z0,e,r))}),Rl=v(function(e,r){return{dp:gr(e.dp,r.dp),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bX,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bX,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bX,bX:e.bX*r.bX}}),Qe=Q$,K0=function(e){return Qe({dx:e.q,dy:e.t,dz:e.w,dA:e.H,dB:e.r,dC:e.u,dD:e.x,dE:e.I,dF:e.s,dG:e.v,dH:e.y,dI:e.J,dJ:0,dK:0,dL:0,dM:1})},Za=he(function(e,r,n,a,t){var i=a.dp?1:-1,c=L(on,a.bX,a.bX,a.bX,i);return Le(t,e,c,K0(a),a.dp,r,n)}),El=qe(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,$=r,s=n,d=o(Rl,c,a),m=l,f=i;e=u,r=$,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,h=o(B,S(Za,e,r,n,a,g),i.M);return{M:h,U:i.U,fB:i.fB};case 3:var w=t.b,x=o(B,S(Za,e,r,n,a,w),i.U);return{M:i.M,U:x,fB:i.fB};case 2:var _=t.a,C=o(B,S(Za,e,r,n,a,_),i.fB);return{M:i.M,U:i.U,fB:C};default:var T=t.a;return p(Bn,L(El,e,r,n,a),i,T)}}),Q0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Ul=Q0,Mo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ep=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,518,r,n,a)},rp=v(function(e,r){return{$:6,a:e,b:r}}),np=rp,jl=b([ep({V:1,W:0,Z:!1}),L(Ul,!1,!1,!1,!1),o(np,0,1)]),Kr=519,Do=8,Nl=15,Yr=7681,ap={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},re=tf,tp=v(function(e,r){return{$:0,a:e,b:r}}),op=tp({df:1,$7:0,dV:5}),Me=U$,ip=op(b([{bT:o(Me,-1,-1)},{bT:o(Me,1,-1)},{bT:o(Me,-1,1)},{bT:o(Me,1,1)}])),cp={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},lp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$,k:s}}}}}}}}}}}},Bo=y(function(e,r,n){var a=e.cO,t=e.cp,i=e.c3,c=v(function($,s){var d=$;return s(d)}),l=v(function($,s){var d=$;return s(d)}),u=function($){return o(ne,c($.bl),o(ne,l($.a8),o(ne,l($.bt),l($.bu))))};return o(u,n,o(u,r,p(lp,a,t,i)))}),Ao=function(e){return p(Bo,{cp:e.cp,cO:e.cO,c3:e.c3},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Fo=function(e){return S(re,b([Ao(e),L(Ul,!1,!1,!1,!1)]),cp,ap,ip,{})},up=Fo({a8:Yr,cp:0,cO:Do,bl:Kr,c3:Nl,bt:Yr,bu:Yr}),vp=516,Di=5386,we=7680,$p=function(e){return o(Vn,2,e+4)},Wl=function(e){return Fo({a8:we,cp:Nl,cO:Do,bl:vp,c3:$p(e),bt:Di,bu:Di})},fp=y(function(e,r,n){return Ge(b([p(Ze,e,n,jl),b([Wl(r),up])]))}),sp=v(function(e,r){return Ge(o(Ac,fp(e),r))}),dp=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,513,r,n,a)},mp=dp({V:1,W:0,Z:!0}),pp=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:$}}}}}}}}}}},bp=function(e){var r=e.bV,n=e.bF,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=v(function(u,$){var s=u.a,d=u.b,m=u.c,f=$.a,g=$.b,h=$.c;return pp(s)(d)(m)(f)(g)(h)(r)(n)(a)(t)});return o(l,i,c)},hp=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Bi=v(function(e,r){var n=e,a=r;return p(hp,32774,n,a)}),gp=1,Ai=771,_p=770,Vo=bp({bv:0,aH:o(Bi,gp,Ai),by:0,bA:o(Bi,_p,Ai),bF:0,bV:0}),Rr=b([mp,Vo]),wp=function(e){var r=e;return r.dO},yp=function(e){var r=e;return r.dP},Gl=function(e){var r=e;return r.dQ},xp=function(e){var r=e;return r.dR},Sp=function(e){var r=e;return r.dS},Hl=function(e){var r=e;return r.dT},Ir=v(function(e,r){var n=e,a=r;return a-n}),Yl=function(e){return V(o(Ir,xp(e),wp(e)),o(Ir,Sp(e),yp(e)),o(Ir,Hl(e),Gl(e)))},Fi=function(e){var r=e;return an(r)},Cp=function(e){return e},Lp=function(e){return tn({cB:Cp({fU:e.H,fY:e.I,c6:e.J}),c4:Tr({fU:e.q,fY:e.r,c6:e.s}),c5:Tr({fU:e.t,fY:e.u,c6:e.v}),c7:Tr({fU:e.w,fY:e.x,c6:e.y})})},Xa=v(function(e,r){var n=e,a=r,t=n.c7,i=t,c=n.c5,l=c,u=n.c4,$=u;return{fU:a.fU*$.fU+a.fY*$.fY+a.c6*$.c6,fY:a.fU*l.fU+a.fY*l.fY+a.c6*l.c6,c6:a.fU*i.fU+a.fY*i.fY+a.c6*i.c6}}),Il=v(function(e,r){var n=e,a=r,t=n.cB,i=t,c=a.fU-i.fU,l=a.fY-i.fY,u=a.c6-i.c6,$=n.c7,s=$,d=n.c5,m=d,f=n.c4,g=f;return{fU:c*g.fU+l*g.fY+u*g.c6,fY:c*m.fU+l*m.fY+u*m.c6,c6:c*s.fU+l*s.fY+u*s.c6}}),Ol=v(function(e,r){return{cB:o(Il,e,an(r)),c4:o(Xa,e,Ar(r)),c5:o(Xa,e,Fr(r)),c7:o(Xa,e,Vr(r))}}),Pp=y(function(e,r,n){return{fU:e,fY:r,c6:n}}),Sa=function(e){var r=e;return r},ce=v(function(e,r){var n=e,a=r;return o(nr,n,a)}),ia=v(function(e,r){return O(e,r)<0?e:r}),fe=v(function(e,r){var n=e,a=r;return o(ia,n,a)}),zp=v(function(e,r){var n=Sa(r),a=Sa(e);return{dO:o(ce,a.dO,n.dO),dP:o(ce,a.dP,n.dP),dQ:o(ce,a.dQ,n.dQ),dR:o(fe,a.dR,n.dR),dS:o(fe,a.dS,n.dS),dT:o(fe,a.dT,n.dT)}}),He=function(e){var r=e;return r},kp=function(e){var r=e;return V(r.fU,r.fY,r.c6)},gn=v(function(e,r){var n=e,a=r;return a+n}),Tp=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=ta(We(a)),c=ta(We(n)),l=ta(We(t)),u=kp(r),$=u.a,s=u.b,d=u.c;return{dO:o(gn,c,$),dP:o(gn,i,s),dQ:o(gn,l,d),dR:o(Ir,c,$),dS:o(Ir,i,s),dT:o(Ir,l,d)}}),Vi=E(function(e,r,n,a){var t=n.ey,i=2*n.eU*r,c=2*n.eT*r,l=2*n.eS*r,u=t.c6*r,$=t.fY*r,s=t.fU*r,d=He(Vr(e)),m=K(l*d.fU)+K(c*d.fY)+K(i*d.c6),f=He(Fr(e)),g=K(l*f.fU)+K(c*f.fY)+K(i*f.c6),h=He(Ar(e)),w=K(l*h.fU)+K(c*h.fY)+K(i*h.c6),x=o(Tp,V(w,g,m),o(Il,e,p(Pp,s,$,u)));if(a.$)return ae(x);var _=a.a;return ae(o(zp,_,x))}),kt=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,h=n,w=i;e=f,r=g,n=h,a=w;continue e;case 1:var c=t.a,l=L(Vi,e,r,c,n),f=e,g=r,h=l,w=i;e=f,r=g,n=h,a=w;continue e;case 2:var f=e,g=r,h=n,w=i;e=f,r=g,n=h,a=w;continue e;case 3:var c=t.a,l=L(Vi,e,r,c,n),f=e,g=r,h=l,w=i;e=f,r=g,n=h,a=w;continue e;case 4:var u=t.a,f=e,g=r,h=L(kt,e,r,n,u),w=i;e=f,r=g,n=h,a=w;continue e;default:var $=t.a,s=t.b,d=o(Ol,Lp($),e),m=r*$.bX,f=e,g=r,h=L(kt,d,m,n,b([s])),w=i;e=f,r=g,n=h,a=w;continue e}}else return n}),cn=W$,ln=G$,un=H$,Jl=function(e){return{$:4,a:e}},Mp=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(B,n,r);e=t,r=i;continue e}else return r}),Un=function(e){return Jl(o(Mp,e,P))},Dp={dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bX:1},Bp=function(e){var r=e;return r},Ri=Fo({a8:Yr,cp:0,cO:Do,bl:Kr,c3:255,bt:Yr,bu:Yr}),Gr=sv,cr=0,Ap=function(e){var r=e,n=o(nr,K(r.fU),o(nr,K(r.fY),K(r.c6)));if(n){var a=r.c6/n,t=r.fY/n,i=r.fU/n,c=Gr(i*i+t*t+a*a);return c*n}else return cr},Ce={by:0,ex:!1,bF:0,cK:0,bV:0,c_:0,fU:0,fY:0,c6:0},Ee=v(function(e,r){var n=e,a=r;return Qe({dx:n.fU,dy:n.bV,dz:a.fU,dA:a.bV,dB:n.fY,dC:n.bF,dD:a.fY,dE:a.bF,dF:n.c6,dG:n.by,dH:a.c6,dI:a.by,dJ:n.c_,dK:n.cK,dL:a.c_,dM:a.cK})}),dn=z({bd:o(Ee,Ce,Ce),bK:o(Ee,Ce,Ce),bL:o(Ee,Ce,Ce),bM:o(Ee,Ce,Ce)},L(on,0,0,0,0)),ie=v(function(e,r){var n=r;return e*n}),ql=514,Zl=function(e){var r=e.Z,n=e.W,a=e.V;return L(Mo,515,r,n,a)},Xl=240,Fp=b([Zl({V:1,W:0,Z:!0}),Ao({a8:we,cp:Xl,cO:0,bl:ql,c3:0,bt:we,bu:we}),Vo]),Vp=v(function(e,r){var n=e,a=r.fi,t=r.eP,i=r.eq,c=We(a),l=c,u=We(t),$=u,s=n.cM;if(s.$){var m=s.a;return bt($)?Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:0,dI:-1,dJ:0,dK:0,dL:0,dM:1}):Qe({dx:2/(i*m),dy:0,dz:0,dA:0,dB:0,dC:2/m,dD:0,dE:0,dF:0,dG:0,dH:-2/($-l),dI:-($+l)/($-l),dJ:0,dK:0,dL:0,dM:1})}else{var d=s.a;return bt($)?Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-1,dI:-2*l,dJ:0,dK:0,dL:-1,dM:0}):Qe({dx:1/(i*d),dy:0,dz:0,dA:0,dB:0,dC:1/d,dD:0,dE:0,dF:0,dG:0,dH:-($+l)/($-l),dI:-2*$*l/($-l),dJ:0,dK:0,dL:-1,dM:0})}}),In=v(function(e,r){return(1&e>>r)===1?0:1}),Rp=function(e){return b([Zl({V:1,W:0,Z:!0}),Ao({a8:we,cp:Xl,cO:e,bl:ql,c3:0,bt:we,bu:we}),Vo])},Ep=y(function(e,r,n){return Ge(o(ee,function(a){var t=a<<4,i=L(on,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(Ze,e,z(r,i),Rp(t))},o(Jr,1,o(Vn,2,n)-1)))}),kn=function(e){var r=e;return{fU:-r.fU,fY:-r.fY,c6:-r.c6}},Or=function(e){var r=e;return r},Up=ef,Ei=function(e){var r=e;return kn(Vr(r))},jp={cB:mr,c4:ho,c5:zo,c7:Va},Ra=function(e){var r=e;return r},Np=function(e){var r=Ra(an(e)),n=He(Vr(e)),a=He(Fr(e)),t=He(Ar(e));return Qe({dx:t.fU,dy:a.fU,dz:n.fU,dA:r.fU,dB:t.fY,dC:a.fY,dD:n.fY,dE:r.fY,dF:t.c6,dG:a.c6,dH:n.c6,dI:r.c6,dJ:0,dK:0,dL:0,dM:1})},Wp=v(function(e,r){var n=r;return Np(o(Ol,n,e))}),Gp=function(e){return o(Wp,jp,e)},Hp=function(e){var r=e;return r.c2},Yp=function(e){var r=e;return Ar(r)},Ip=function(e){var r=e;return Fr(r)},Op=function(e){var r=Hp(e.ev),n=tn({cB:Fi(r),c4:Yp(r),c5:Ip(r),c7:kn(Ei(r))}),a=Un(e.aP),t=a,i=L(kt,n,1,q,b([t]));if(i.$===1)return P;var c=i.a,l=Gp(r),u=o(ie,.99,o(ce,We(e.aJ),Lt(Gl(c)))),$=Yl(c),s=$.a,d=$.b,m=$.c,f=Ap(p(wl,s,d,m)),g=o(ie,1.01,o(gn,f,Lt(Hl(c)))),h=o(Vp,e.ev,{eq:e.eq,eP:g,fi:u}),w=Up(h).dM,x=w?He(kn(Ei(r))):Or(Fi(r)),_=function(){var te=e.bZ;switch(te.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var de=te.a;return z(3,de);case 4:var de=te.a;return z(4,de);default:return z(5,0)}}(),C=_.a,T=_.b,N=e.bD,U=N,R=o(To,U,e.b$),j=R,W=Qe({dx:0,dy:x.fU,dz:cn(j),dA:e.ec,dB:0,dC:x.fY,dD:ln(j),dE:Bp(f),dF:0,dG:x.c6,dH:un(j),dI:C,dJ:0,dK:w,dL:0,dM:T}),A=Le(El,W,l,h,Dp,t,{M:P,U:P,fB:P}),J=e.bJ;switch(J.$){case 0:var X=J.a;return Ge(b([p(Ze,A.M,z(X,qa),Rr),p(Ze,A.U,dn,Rr)]));case 1:var X=J.a;return Ge(b([p(Ze,A.M,dn,Rr),b([Ri]),p(Ze,A.fB,X.bd,jl),b([Wl(0)]),p(Ze,A.M,z(X,qa),Fp),p(Ze,A.U,dn,Rr)]));default:var oe=J.a,ve=J.b;return Ge(b([p(Ze,A.M,z(ve,qa),Rr),b([Ri]),o(sp,A.fB,oe),p(Ep,A.M,ve,Mr(oe)),p(Ze,A.U,dn,Rr)]))}},Jp=function(e){return o(Sr,"width",De(e))},qp=v(function(e,r){var n=b([E0(1),G0(0),M0(!0),L(F0,0,0,0,0)]),a=function(){var C=e.b0;switch(C.$){case 0:return V(n,"0",1);case 1:return V(o(B,B0,n),"1",1);default:var T=C.a;return V(n,"0",T)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,$=l.b,s=Mi($),d=o(se,"height",De(s)+"px"),m=Mi(u),f=m/s,g=o(ko,function(C){return Op({eq:f,ev:e.ev,aJ:e.aJ,aP:C.aP,bD:C.bD,bJ:C.bJ,ec:c,bZ:C.bZ,b$:C.b$})},r),h=o(se,"width",De(m)+"px"),w=e.aI,x=w,_=Y0(x);return p(N0,"div",b([o(se,"padding","0px"),h,d]),b([z(i,p(J0,t,b([Jp(Je(m*c)),U0(Je(s*c)),h,d,o(se,"display","block"),o(se,"background-color",_)]),g))]))}),Zp=function(e){return o(qp,{b0:e.b0,aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK},b([{aP:e.aP,bD:e.bD,bJ:e.bJ,bZ:e.bZ,b$:e.b$}]))},Kl=function(e){return e},Ui=Kl({fU:.31271,fY:.32902}),Xp=v(function(e,r){var n=e,a=He(r.eH),t=a.fU,i=a.fY,c=a.c6,l=o(To,r.ce,r.b6),u=l;return{by:un(u),ex:n,bF:ln(u),cK:0,bV:cn(u),c_:1,fU:-t,fY:-i,c6:-c}}),Kp=function(e){return e},Qp=function(e){return Kp(1.2*o(Vn,2,e))},Ka=function(e){return e},e1={$:0},r1=e1,Ql=function(e){return e},n1=v(function(e,r){var n=e,a=r;return O(a,n)>0}),ji=function(e){var r=e;return r},a1=function(e){e:for(;;){if(gr(e.e2,cr)&&gr(e.e3,cr))return Ce;if(o(n1,We(e.e2),We(e.e3))){var r={b6:e.b6,e2:e.e3,e3:e.e2,ei:kn(e.ei)};e=r;continue e}else{var n=K(ji(e.e3)/ur),a=K(ji(e.e2)/ur),t=He(e.ei),i=t.fU,c=t.fY,l=t.c6,u=o(To,Ql(1),e.b6),$=u;return{by:a*un($),ex:!1,bF:a*ln($),cK:n/a,bV:a*cn($),c_:3,fU:i,fY:c,c6:l}}}},Ni=function(e){return a1({b6:e.b6,e2:e.ce,e3:cr,ei:e.ei})},t1=function(e){var r=e;return r},eu=function(e){var r=p(Ml,1667,25e3,t1(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Kl({fU:n,fY:a})},ru=function(e){return e},o1=eu(ru(12e3)),i1=eu(ru(5600)),c1=function(e){return{$:2,a:e}},l1=function(e){return c1(e)},u1=v(function(e,r){return{$:2,a:e,b:r}}),nu=function(e){return{$:0,a:e}},On=function(e){var r=e;return r},v1=function(e){var r=e;return r.ex},$1=nu(dn.a),f1=v(function(e,r){var n=v(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(B,a,i),c):z(i,o(B,a,c))});return p(sr,n,z(P,P),r)}),s1=function(e){var r=e;return Qe({dx:r.fU,dy:r.bV,dz:0,dA:0,dB:r.fY,dC:r.bF,dD:0,dE:0,dF:r.c6,dG:r.by,dH:0,dI:0,dJ:r.c_,dK:r.cK,dL:0,dM:0})},d1=Q(function(e,r,n,a,t,i,c,l){var u=o(f1,v1,b([On(e),On(r),On(n),On(a)])),$=u.a,s=u.b;if($.b){var d=le($,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,h=f.b,w=h.a,x=h.b,_=x.a;return o(u1,o(ee,s1,$),{bd:o(Ee,m,g),bK:o(Ee,w,_),bL:o(Ee,t,i),bM:o(Ee,c,l)})}else return $1}else return nu({bd:o(Ee,e,r),bK:o(Ee,n,a),bL:o(Ee,t,i),bM:o(Ee,c,l)})}),m1=y(function(e,r,n){return ka(d1,e,r,n,Ce,Ce,Ce,Ce,Ce)}),p1=function(e){var r=o(Xp,k0(e.fB),{b6:i1,eH:e.fJ,ce:Ka(8e4)}),n=Ni({b6:o1,ce:Ka(2e4),ei:e.ei}),a=Ni({b6:Ui,ce:Ka(15e3),ei:kn(e.ei)}),t=p(m1,r,n,a);return Zp({b0:l1(e.cb),aI:e.aI,ev:e.ev,aJ:e.aJ,aK:e.aK,aP:e.aP,bD:Qp(15),bJ:t,bZ:r1,b$:Ui})},au=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),b1=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),tu=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ou=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),h1=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),g1=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),_1=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ro=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return L(_1,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return L(au,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return L(b1,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return L(tu,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return L(g1,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return L(ou,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return L(h1,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Eo={$:0},w1=Q(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,$=l.b,s=Sa(c(u)),d=o(fe,s.dR,e),m=o(ce,s.dO,r),f=o(fe,s.dS,n),g=o(ce,s.dP,a),h=o(fe,s.dT,t),w=o(ce,s.dQ,i),x=c,_=$;e=d,r=m,n=f,a=g,t=h,i=w,c=x,l=_;continue e}else return{dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t}}),y1=y(function(e,r,n){var a=Sa(e(r));return ka(w1,a.dR,a.dO,a.dS,a.dP,a.dT,a.dQ,e,n)}),Qa=v(function(e,r){var n=e,a=r;return O(a,n)<1}),iu=function(e){return o(Qa,e.dO,e.dR)&&o(Qa,e.dP,e.dS)&&o(Qa,e.dQ,e.dT)?e:{dO:o(ce,e.dR,e.dO),dP:o(ce,e.dS,e.dP),dQ:o(ce,e.dT,e.dQ),dR:o(fe,e.dR,e.dO),dS:o(fe,e.dS,e.dP),dT:o(fe,e.dT,e.dQ)}},Tn=function(e){var r=e;return r},_n=function(e){var r=e;return r.fU},wn=function(e){var r=e;return r.fY},yn=function(e){var r=e;return r.c6},cu=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=_n(n),c=wn(n),l=yn(n),u=_n(a),$=wn(a),s=yn(a),d=_n(t),m=wn(t),f=yn(t);return iu({dO:o(ce,i,o(ce,u,d)),dP:o(ce,c,o(ce,$,m)),dQ:o(ce,l,o(ce,s,f)),dR:o(fe,i,o(fe,u,d)),dS:o(fe,c,o(fe,$,m)),dT:o(fe,l,o(fe,s,f))})},lu=Y$,Pe=function(e){return lu(Ra(e))},uu=function(e){var r=e;return r},Ea=function(e){return lu(uu(e))},x1=v(function(e,r){var n=e,a=r;return{fU:a.fY*n.c6-a.c6*n.fY,fY:a.c6*n.fU-a.fU*n.c6,c6:a.fU*n.fY-a.fY*n.fU}}),Tt=v(function(e,r){var n=e,a=r;return{fU:a.fU-n.fU,fY:a.fY-n.fY,c6:a.c6-n.c6}}),S1={fU:0,fY:0,c6:0},C1=v(function(e,r){var n=e,a=r,t=o(nr,K(a.fU),o(nr,K(a.fY),K(a.c6)));if(t){var i=a.c6/t,c=a.fY/t,l=a.fU/t,u=Gr(l*l+c*c+i*i);return{fU:n*l/u,fY:n*c/u,c6:n*i/u}}else return S1}),L1=C1(Ql(1)),vu=y(function(e,r,n){var a=o(Tt,r,n),t=o(Tt,e,r);return L1(o(x1,a,t))}),P1=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Ea(p(vu,n,a,t));return V({o:i,bT:Pe(n)},{o:i,bT:Pe(a)},{o:i,bT:Pe(t)})},z1=v(function(e,r){return{$:2,a:e,b:r}}),$u=z1({df:3,$7:0,dV:4}),k1=function(e){if(e.b){var r=e.a,n=e.b,a=$u(o(ee,P1,e)),t=p(y1,cu,r,n);return L(au,t,e,a,0)}else return Eo},Re=y(function(e,r,n){return V(e,r,n)}),be=y(function(e,r,n){var a=e,t=r,i=n;return{fU:a,fY:t,c6:i}}),fu=function(){var e=Ne(1),r=Ne(1),n=Ne(1),a=o(ie,-.5,e),t=o(ie,-.5,r),i=o(ie,-.5,n),c=p(be,i,t,a),l=o(ie,.5,e),u=p(be,i,t,l),$=o(ie,.5,r),s=p(be,i,$,a),d=p(be,i,$,l),m=o(ie,.5,n),f=p(be,m,t,a),g=p(be,m,$,a),h=p(be,m,t,l),w=p(be,m,$,l);return Ro(k1(b([p(Re,c,g,f),p(Re,c,s,g),p(Re,u,h,w),p(Re,u,w,d),p(Re,f,g,w),p(Re,f,w,h),p(Re,c,d,s),p(Re,c,u,d),p(Re,c,f,h),p(Re,c,h,u),p(Re,s,w,g),p(Re,s,d,w)])))}(),Jn={$:0},T1=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),M1=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),$=Ea(p(vu,u,l,c)),s={o:$,bT:Pe(u)},d={o:$,bT:Pe(l)},m={o:$,bT:Pe(c)};return o(B,s,o(B,d,o(B,m,n)))}),Uo=function(e){var r=e;return r.D},D1=E(function(e,r,n,a){if(r.$===1)return q;var t=r.a;if(n.$===1)return q;var i=n.a;if(a.$===1)return q;var c=a.a;return ae(p(e,t,i,c))}),Mt=4294967295>>>32-Ln,Dt=qu,B1=y(function(e,r,n){e:for(;;){var a=Mt&r>>>e,t=o(Dt,a,n);if(t.$){var $=t.a;return o(Dt,Mt&r,$)}else{var i=t.a,c=e-Ln,l=r,u=i;e=c,r=l,n=u;continue e}}}),A1=function(e){return e>>>5<<5},F1=v(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||O(e,n)>-1?q:O(e,A1(n))>-1?ae(o(Dt,Mt&e,i)):ae(p(B1,a,e,t))}),jo=function(e){var r=e;return r.ah},et=v(function(e,r){return o(F1,e,jo(r))}),V1=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return L(D1,y(function(c,l,u){return V(c,l,u)}),o(et,a,e),o(et,t,e),o(et,i,e))};return o($o,r,Uo(e))},R1=y(function(e,r,n){e:for(;;){var a=o(ro,Fe,e),t=a.a,i=a.b;if(O(mt(t),Fe)<0)return o(Nc,!0,{z:r,l:n,p:t});var c=i,l=o(B,Uc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),No=function(e){return e.b?p(R1,e,P,0):Rc},E1=y(function(e,r,n){return e(r(n))}),U1=v(function(e,r){return!o(Kc,o(E1,hs,e),r)}),j1=v(function(e,r){return p(sr,v(function(n,a){return e(n)?o(B,n,a):a}),P,r)}),N1=function(e){var r=e.a;return r},su=v(function(e,r){var n=N1(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&O(i,n)<0&&c>=0&&O(c,n)<0&&l>=0&&O(l,n)<0};return o(U1,a,r)?{D:r,ah:e}:{D:o(j1,a,r),ah:e}}),W1=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jn=W1({df:1,$7:3,dV:4}),ca=v(function(e,r){var n=Or(r),a=Or(e);return z(V(a.fU,a.fY,a.c6),V(n.fU,n.fY,n.c6))}),Wi=p(En,0,0,0),rt=qe(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,$=o(co,o(ca,e,r),t);if($.$){var d={o:Wi,bT:Pe(r)},m={o:Wi,bT:Pe(e)},f=u+1,g=u;return V(o(B,V(n,g,f),o(B,V(n,f,a),c)),o(B,d,o(B,m,l)),u+2)}else{var s=$.a;return V(o(B,V(n,s,a),c),l,u)}}),G1=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,$=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,h=a,w=e,x=r,_=$,C=a+3,T=Le(rt,s,m,f,h,r,Le(rt,d,s,g,f,r,Le(rt,m,d,h,g,r,t)));e=w,r=x,n=_,a=C,t=T;continue e}else{var N=t,U=N.a,R=N.b;return z(U,Ae(R))}}),H1=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,$=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,h=n,w=p(bn,o(ca,m,s),f,p(bn,o(ca,s,d),g,p(bn,o(ca,d,m),h,t))),x=o(B,V(h,g,f),a),_=e,C=$,T=n+3,N=x,U=w;e=_,r=C,n=T,a=N,t=U;continue e}else return V(a,t,n)}),Lr=y(function(e,r,n){var a=V1(n),t=p(sr,M1(r),P,a),i=S(H1,r,a,0,P,hl),c=i.a,l=i.b,u=i.c,$=S(G1,r,l,a,0,V(c,P,u)),s=$.a,d=$.b,m=bl(d)?t:le(t,d);return p(T1,e,o(su,No(m),s),o(jn,m,s))}),Bt=function(e){return{D:o(ee,function(r){return V(3*r,3*r+1,3*r+2)},o(Jr,0,Mr(e)-1)),ah:No(Ge(o(ee,function(r){var n=r.a,a=r.b,t=r.c;return b([n,a,t])},e)))}},du=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(Lr,a,kr,Bt(n));case 2:var a=e.a,r=e.b,n=o(ee,Tn,r);return p(Lr,a,kr,Bt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,kr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.bT},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Gi=du(fu),mu={$:0},k=mu,pe=v(function(e,r){return{$:1,a:e,b:r}}),Y1={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},I1=1029,O1=function(e){return{$:5,a:e}},pu=function(e){var r=e;return O1(r)},J1=pu(I1),q1=1028,Z1=pu(q1),ze=y(function(e,r,n){return r===1?e?o(B,J1,n):o(B,Z1,n):n}),bu={src:`
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
    `,attributes:{position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},nt=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){return S(re,p(ze,l,a,d),bu,Y1,n,{bB:e,b:c,c:i,d:$,e:t,f:u})}))}),Wo={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},hu={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){return S(re,p(ze,l,a,d),hu,Wo,n,{aw:e,b:c,c:i,d:$,e:t,f:u})}))}),gu=v(function(e,r){return{$:3,a:e,b:r}}),X1={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bS",sceneProperties:"e"}},_u={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bS",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},K1=E(function(e,r,n,a){return o(gu,n,Q(function(t,i,c,l,u,$,s,d){return S(re,d,_u,X1,a,{aw:e,b:c,c:i,bS:r,d:$,e:t,f:u})}))}),Go={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},Nn=function(e){var r=e;return r},Ua=I$,ir=he(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,$,s,d,m){return S(re,p(ze,u,t,m),hu,Go,a,{aN:o(Ua,Nn(r),e),b:l,c,d:s,e:i,f:$})}))}),Q1={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bS",sceneProperties:"e"}},eb=he(function(e,r,n,a,t){return o(gu,a,Q(function(i,c,l,u,$,s,d,m){return S(re,m,_u,Q1,t,{aN:o(Ua,Nn(r),e),b:l,c,bS:n,d:s,e:i,f:$})}))}),wu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColor:"cq",sceneProperties:"e",viewMatrix:"f"}},yu={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qn=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(re,p(ze,l,a,d),yu,wu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cq:e,b:c,c:i,d:$,e:t,f:u})}))}),xu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",materialColorTexture:"cr",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},Su={src:`
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
    `,attributes:{normal:"o",position:"bT",tangent:"ee",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},rb=qe(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,h=m.b;return S(re,p(ze,$,i,f),Su,xu,t,{P:h,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cr:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),Cu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b4",constantBaseColor:"b8",constantMetallic:"b9",constantRoughness:"ca",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallicTexture:"cv",normalMapTexture:"aW",roughnessTexture:"cS",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},nb=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){return function(s){return o(pe,u,Q(function(d,m,f,g,h,w,x,_){var C=x.a,T=x.b;return S(re,p(ze,g,s,_),Su,Cu,$,{b4:e,b8:r,b9:i,ca:a,P:T,bd:C.bd,bK:C.bK,bL:C.bL,bM:C.bM,cv:t,b:f,c:m,aW:c,d:w,cS:n,e:d,a$:l,f:h})}))}}}}}}}}}}},Lu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b3",enabledLights:"P",lights12:"bd",lights34:"bK",lights56:"bL",lights78:"bM",metallic:"cu",roughness:"cR",sceneProperties:"e",viewMatrix:"f"}},Zn=qe(function(e,r,n,a,t,i){return o(pe,a,Q(function(c,l,u,$,s,d,m,f){var g=m.a,h=m.b;return S(re,p(ze,$,i,f),yu,Lu,t,{b3:e,P:h,bd:g.bd,bK:g.bK,bL:g.bL,bM:g.bM,cu:n,b:u,c:l,d,cR:r,e:c,f:s})}))}),ab=function(e){return{$:0,a:e}},Hi=v(function(e,r){return{$:1,a:e,b:r}}),xn=v(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),tb=function(e){return L(on,cn(e),ln(e),un(e),1)},Ho=L(on,0,0,0,0),la=v(function(e,r){if(r.$){var a=r.a.C;return z(a,Ho)}else{var n=r.a;return z(e,tb(n))}}),Pu=v(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Hi,z(t,Ho),o(xn,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Hi,o(la,t,e),o(xn,t,r))}else{var a=n.a.a;return n.b.a,ab(a)}}),ob=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ib=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),cb=function(e){return o(Me,e,1)},At=o(Me,0,0),Er=v(function(e,r){if(r.$){var a=r.a.C;return z(a,At)}else{var n=r.a;return z(e,cb(n))}}),zu=E(function(e,r,n,a){var t=L(ib,e,r,n,a);if(t.a.$){var u=t.a.a.C;return L(Xn,z(u,Ho),o(Er,u,r),o(Er,u,n),o(xn,u,a))}else if(t.b.$){var u=t.b.a.C;return L(Xn,o(la,u,e),z(u,At),o(Er,u,n),o(xn,u,a))}else if(t.c.$){var u=t.c.a.C;return L(Xn,o(la,u,e),o(Er,u,r),z(u,At),o(xn,u,a))}else if(t.d.$){var u=t.d.a.C;return L(Xn,o(la,u,e),o(Er,u,r),o(Er,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(ob,i,c,l)}}),lb={src:`
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
    `,attributes:{},uniforms:{backlight:"b1",colorTexture:"bB",sceneProperties:"e"}},at=he(function(e,r,n,a,t){return o(pe,n,Q(function(i,c,l,u,$,s,d,m){return S(re,p(ze,u,t,m),bu,lb,a,{b1:Nn(r),bB:e,b:l,c,d:s,e:i,f:$})}))}),ku={src:`
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
    `,attributes:{normal:"o",position:"bT",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ub=E(function(e,r,n,a){return o(pe,r,Q(function(t,i,c,l,u,$,s,d){var m=s.a,f=s.b;return S(re,p(ze,l,a,d),ku,xu,n,{P:f,bd:m.bd,bK:m.bK,bL:m.bL,bM:m.bM,cr:e,b:c,c:i,aW:e,d:$,e:t,a$:0,f:u})}))}),vb=Rt(function(e,r,n,a,t,i,c,l,u){return o(pe,c,Q(function($,s,d,m,f,g,h,w){var x=h.a,_=h.b;return S(re,p(ze,m,u,w),ku,Cu,l,{b4:e,b8:r,b9:i,ca:a,P:_,bd:x.bd,bK:x.bK,bL:x.bL,bM:x.bM,cv:t,b:d,c:s,aW:e,d:g,cS:n,e:$,a$:0,f})}))}),Mn=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),$b=function(e){var r=e;return p(Mn,r.dR,r.dO,.5)},fb=function(e){var r=e;return p(Mn,r.dS,r.dP,.5)},sb=function(e){var r=e;return p(Mn,r.dT,r.dQ,.5)},db=function(e){return p(be,$b(e),fb(e),sb(e))},G=function(e){var r=Yl(e),n=r.a,a=r.b,t=r.c;return{ey:Ra(db(e)),eS:n/2,eT:a/2,eU:t/2}},Yo=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return L(nt,l,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(nt,l,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(nt,l,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var n=e.b.a;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return L(or,n,G(t),c,a);case 8:var t=r.a,c=r.c;return L(or,n,G(t),c,0);case 9:var t=r.a,c=r.c;return L(or,n,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return L(K1,n,i,G(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,$=e.c;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:var t=r.a,c=r.c,a=r.d;return S(at,l,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(at,l,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(at,l,$,G(t),c,a);case 8:return k;case 9:return k;default:return k}}else{var u=e.b.a,$=e.c;switch(r.$){case 0:return k;case 1:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ir,u,$,G(t),c,a);case 8:var t=r.a,c=r.c;return S(ir,u,$,G(t),c,0);case 9:var t=r.a,c=r.c;return S(ir,u,$,G(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(eb,u,$,i,G(t),c)}}case 2:e.a;var s=e.b,U=e.c,d=o(Pu,s,U);if(d.$){var g=d.a,h=g.a;g.b;var w=d.b,x=w.a,_=w.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(ub,h,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return Le(rb,h,x,_,G(t),c,f);case 8:return k;case 9:return k;default:return k}}else{var m=d.a;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 3:return k;case 4:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 5:return k;case 6:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return L(qn,m,G(t),c,f);case 8:return k;case 9:return k;default:return k}}default:e.a;var C=e.b,T=e.c,N=e.d,U=e.e,R=L(zu,C,T,N,U);if(R.$){var J=R.a,X=J.a,oe=J.b,ve=R.b,te=ve.a,de=ve.b,ke=R.c,ye=ke.a,pr=ke.b,br=R.d,x=br.a,_=br.b;switch(r.$){case 0:return k;case 1:return k;case 2:return k;case 3:return k;case 4:return k;case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Hu(vb,X,oe,te,de,ye,pr,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return nb(X)(oe)(te)(de)(ye)(pr)(x)(_)(G(t))(c)(a);case 8:return k;case 9:return k;default:return k}}else{var j=R.a,W=R.b,A=R.c;switch(r.$){case 0:return k;case 1:return k;case 2:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 3:return k;case 4:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 5:return k;case 6:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return Le(Zn,j,W,A,G(t),c,a);case 8:return k;case 9:return k;default:return k}}}}),tt=function(e){var r=e;return r.fU},ot=function(e){var r=e;return r.fY},it=function(e){var r=e;return r.c6},mb=function(e){var r=e,n=it(r.c7),a=ot(r.c7),t=tt(r.c7),i=it(r.c5),c=ot(r.c5),l=tt(r.c5),u=it(r.c4),$=ot(r.c4),s=tt(r.c4);return s*c*n+$*i*t+u*l*a-u*c*t-$*l*n-s*i*a>0},pb=function(e){var r=Ra(an(e)),n=He(Vr(e)),a=He(Fr(e)),t=He(Ar(e));return{dp:mb(e),q:t.fU,r:t.fY,s:t.c6,t:a.fU,u:a.fY,v:a.c6,w:n.fU,x:n.fY,y:n.c6,H:r.fU,I:r.fY,J:r.c6,bX:1}},Ur=v(function(e,r){return{$:5,a:e,b:r}}),Tu=v(function(e,r){var n=r;switch(n.$){case 0:return k;case 5:var a=n.a,t=n.b,i=o(Rl,a,e);return o(Ur,i,t);case 1:return o(Ur,e,n);case 3:return o(Ur,e,n);case 2:return o(Ur,e,n);default:return o(Ur,e,n)}}),Mu=v(function(e,r){return o(Tu,pb(e),r)}),ja=function(e){return{$:2,a:e}},bb=v(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ey;return{ey:{fU:n*i.fU,fY:a*i.fY,c6:t*i.c6},eS:n*r.eS,eT:a*r.eT,eU:t*r.eU}}),hb=q$,gb=J$,Yi=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function($){var s=e.a,d=e.b,m=e.c,f=gb(a),g=f.fU,h=f.fY,w=f.c6,x=f.em,_=hb({em:x,fU:g*s,fY:h*d,c6:w*m});return ka(r,n,_,t,i,c,l,u,$)}}}}}}}}}},Ft=v(function(e,r){switch(r.$){case 0:return mu;case 5:var n=r.a,a=r.b;return o(Ur,n,o(Ft,e,a));case 1:var t=r.a,i=r.b;return o(pe,o(bb,e,t),o(Yi,e,i));case 3:return r;case 2:var i=r.a;return ja(o(Yi,e,i));default:var c=r.a;return Jl(o(ee,Ft(e),c))}}),Io=v(function(e,r){var n=r;return o(Ft,e,n)}),Oo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Du=7683,Bu=7682,_b=p(Bo,{cp:0,cO:0,c3:15},{a8:we,bl:Kr,bt:we,bu:Du},{a8:we,bl:Kr,bt:we,bu:Bu}),wb=p(Bo,{cp:0,cO:0,c3:15},{a8:we,bl:Kr,bt:we,bu:Bu},{a8:we,bl:Kr,bt:we,bu:Du}),Jo=v(function(e,r){return e?o(B,wb,r):o(B,_b,r)}),yb={src:`
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
    `,attributes:{normal:"o",position:"bT"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},xb=function(e){if(e.$){var r=e.c;return ae(Q(function(n,a,t,i,c,l,u,$){return S(re,o(Jo,i,$),yb,Oo,r,{b:t,c:a,d:l,e:n,bY:u,f:c})}))}else return q},Ca=function(e){var r=xb(e);if(r.$)return k;var n=r.a;return ja(n)},Sb=E(function(e,r,n,a){var t=o(Yo,n,fu),i=function(){var s=z(e,r);return s.a?s.b?Un(b([t,Ca(Gi)])):t:s.b?Ca(Gi):k}(),c=yo(a),l=c.a,u=c.b,$=c.c;return o(Mu,wo(a),o(Io,V(l,u,$),i))}),Cb=v(function(e,r){return L(Sb,!0,!0,e,r)}),Au=v(function(e,r){return{$:0,a:e,b:r}}),Lb=function(e){var r=vo(e),n=r.cN,a=r.cd,t=r.b5;return p(En,n,a,t)},Pb=function(e){return o(Au,0,Pt(Lb(e)))},zb=function(e){var r=e;return r.k},Sn=function(e){var r=e;return Zr(r)},kb=v(function(e,r){var n=r;return n/e}),Ii=function(e){var r=e;return{fU:Zr(r),fY:Xr(r)}},Tb=v(function(e,r){var n=e.bT,a=e.o;return o(B,{o:Ea(a),bT:Pe(n)},r)}),Mb=za(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,$=un(l.bT),s=ln(l.bT),d=cn(l.bT),m=o(ia,e,d),f=o(nr,r,d),g=o(ia,n,s),h=o(nr,a,s),w=o(ia,t,$),x=o(nr,i,$),_=u;e=m,r=f,n=g,a=h,t=w,i=x,c=_;continue e}else return iu({dO:r,dP:a,dQ:i,dR:e,dS:n,dT:t})}),Fu=v(function(e,r){var n=un(e.bT),a=ln(e.bT),t=cn(e.bT);return Et(Mb,t,t,a,a,n,n,r)}),Db=function(e){var r=p(kc,Tb,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Uo(e)),i=o(Fu,n,a);return L(tu,i,e,t,0)}else return Eo},Bb=Tr({fU:0,fY:0,c6:-1}),Oi=v(function(e,r){var n=e,a=r,t=n.c5,i=t,c=n.c4,l=c;return{fU:a.fU*l.fU+a.fY*i.fU,fY:a.fU*l.fY+a.fY*i.fY,c6:a.fU*l.c6+a.fY*i.c6}}),La=function(e){var r=e;return Xr(r)},mn=function(e){var r=e;return r},Vt=function(e){return vr(2*ur*e)},Ji=Pl({cB:mr,c4:ho,c5:zo}),Vu=function(){var e=72,r=o(kb,e,Vt(1)),n=Ne(1),a=mn(zl),t=mn(Bb),i=Ne(1),c=o(ie,.5,i),l=p(be,cr,cr,c),u=o(ie,-.5,i),$=p(be,cr,cr,u),s=function(f){var g=o(ie,f,r),h=mn(o(Oi,Ji,Ii(g))),w=o(ie,Sn(g),n),x=o(ie,La(g),n),_=p(be,w,x,c),C=p(be,w,x,u),T=o(_a,e,f+1),N=o(ie,T,r),U=mn(o(Oi,Ji,Ii(N))),R=o(ie,Sn(N),n),j=o(ie,La(N),n),W=p(be,R,j,u),A=p(be,R,j,c);return b([V({o:t,bT:$},{o:t,bT:W},{o:t,bT:C}),V({o:h,bT:C},{o:U,bT:W},{o:U,bT:A}),V({o:h,bT:C},{o:U,bT:A},{o:h,bT:_}),V({o:a,bT:l},{o:a,bT:_},{o:a,bT:A})])},d=o(ee,s,o(Jr,0,e-1)),m=Bt(Ge(d));return Ro(Db(m))}(),qi=du(Vu),Ab=function(e){var r=e;return r.cB},Fb=function(e){var r=e,n=K(r.c6),a=K(r.fY),t=K(r.fU);if(O(t,a)<1)if(O(t,n)<1){var i=Gr(r.c6*r.c6+r.fY*r.fY);return{fU:0,fY:-r.c6/i,c6:r.fY/i}}else{var i=Gr(r.fY*r.fY+r.fU*r.fU);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}else if(O(a,n)<1){var i=Gr(r.c6*r.c6+r.fU*r.fU);return{fU:r.c6/i,fY:0,c6:-r.fU/i}}else{var i=Gr(r.fU*r.fU+r.fY*r.fY);return{fU:-r.fY/i,fY:r.fU/i,c6:0}}},Vb=function(e){var r=Fb(e),n=r,a=n,t=e,i=t,c={fU:i.fY*a.c6-i.c6*a.fY,fY:i.c6*a.fU-i.fU*a.c6,c6:i.fU*a.fY-i.fY*a.fU};return z(r,c)},Rb=function(e){var r=Cl(e),n=Vb(r),a=n.a,t=n.b;return tn({cB:Ab(e),c4:a,c5:t,c7:r})},Eb=function(e){var r=e;return r.e9},Ub=function(e){var r=e;return r.fu},jb=E(function(e,r,n,a){var t=Rb(zb(a)),i=o(Yo,n,Vu),c=function(){var d=z(e,r);return d.a?d.b?Un(b([i,Ca(qi)])):i:d.b?Ca(qi):k}(),l=Ub(a),u=l,$=Eb(a),s=$;return o(Mu,t,o(Io,V(u,u,s),c))}),Nb=v(function(e,r){return L(jb,!0,!0,e,r)}),Zi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Xi={src:`
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
    `,attributes:{triangleVertex:"cZ"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},pn=function(e){var r=Tn(e),n=r.a,a=r.b,t=r.c,i=Or(n),c=Or(a),l=Or(t);return Qe({dx:i.fU,dy:c.fU,dz:l.fU,dA:0,dB:i.fY,dC:c.fY,dD:l.fY,dE:0,dF:i.c6,dG:c.c6,dH:l.c6,dI:0,dJ:0,dK:0,dL:0,dM:0})},Kn=$u(b([V({cZ:0},{cZ:1},{cZ:2})])),Wb=v(function(e,r){var n=cu(r),a=G(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var t=e.b.a;return o(pe,a,Q(function(_,C,T,N,U,R,j,W){return S(re,p(ze,N,0,W),Zi,Wo,Kn,{aw:t,b:T,c:C,d:R,e:_,bq:pn(r),f:U})}));case 1:if(e.b.$)return e.a,k;var i=e.b.a,c=e.c;return o(pe,a,Q(function(_,C,T,N,U,R,j,W){return S(re,p(ze,N,0,W),Zi,Go,Kn,{aN:o(Ua,Nn(c),i),b:T,c:C,d:R,e:_,bq:pn(r),f:U})}));case 2:e.a;var l=e.b,f=e.c,u=o(Pu,l,f);if(u.$)return k;var $=u.a;return o(pe,a,Q(function(_,C,T,N,U,R,j,W){var A=j.a,J=j.b;return S(re,p(ze,N,0,W),Xi,wu,Kn,{P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cq:$,b:T,c:C,d:R,e:_,bq:pn(r),f:U})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=L(zu,s,d,m,f);if(g.$)return k;var h=g.a,w=g.b,x=g.c;return o(pe,a,Q(function(_,C,T,N,U,R,j,W){var A=j.a,J=j.b;return S(re,p(ze,N,0,W),Xi,Lu,Kn,{b3:h,P:J,bd:A.bd,bK:A.bK,bL:A.bL,bM:A.bM,cu:x,b:T,c:C,d:R,cR:w,e:_,bq:pn(r),f:U})}))}}),Gb=function(){var e=b([{a_:o(Me,0,1)},{a_:o(Me,1,1)},{a_:o(Me,2,1)},{a_:o(Me,0,-1)},{a_:o(Me,1,-1)},{a_:o(Me,2,-1)}]),r=b([V(0,1,2),V(3,5,4),V(3,4,1),V(3,1,0),V(4,5,2),V(4,2,1),V(5,3,0),V(5,0,2)]);return o(jn,e,r)}(),Hb={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",triangleVertexPositions:"bq",viewMatrix:"f"}},Ki=function(e){return ja(Q(function(r,n,a,t,i,c,l,u){return S(re,o(Jo,t,u),Hb,Oo,Gb,{b:a,c:n,d:c,e:r,bY:l,bq:pn(e),f:i})}))},Yb=E(function(e,r,n,a){var t=o(Wb,n,a),i=z(e,r);return i.a?i.b?Un(b([t,Ki(a)])):t:i.b?Ki(a):k}),Ib=v(function(e,r){return L(Yb,!0,!0,e,r)}),Ob=v(function(e,r){var n=yn(r),a=yn(e),t=wn(r),i=wn(e),c=_n(r),l=_n(e);return{dO:o(ce,l,c),dP:o(ce,i,t),dQ:o(ce,a,n),dR:o(fe,l,c),dS:o(fe,i,t),dT:o(fe,a,n)}}),Jb=function(e){var r=xo(e),n=r.a,a=r.b;return o(Ob,n,a)},Qi={src:`
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
    `,attributes:{lineSegmentVertex:"dw"},uniforms:{lineSegmentEndPoint:"du",lineSegmentStartPoint:"dv",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qb=v(function(e,r){return{$:1,a:e,b:r}}),Zb=qb({df:2,$7:0,dV:1}),ec=Zb(b([z({dw:0},{dw:1})])),Xb=v(function(e,r){var n=Jb(r),a=G(n),t=xo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,k;var l=e.b.a;return o(pe,a,Q(function($,s,d,m,f,g,h,w){return S(re,w,Qi,Wo,ec,{aw:l,du:Pe(c),dv:Pe(i),b:d,c:s,d:g,e:$,f})}));case 1:if(e.b.$)return k;var l=e.b.a,u=e.c;return o(pe,a,Q(function(s,d,m,f,g,h,w,x){return S(re,x,Qi,Go,ec,{aN:o(Ua,Nn(u),l),du:Pe(c),dv:Pe(i),b:m,c:d,d:h,e:s,f:g})}));case 2:return k;default:return k}}),Kb=v(function(e,r){return o(Xb,e,r)}),Qn=function(e){return vr(ur*(e/180))},rc=v(function(e,r){var n=e,a=r;return n/a}),Qb=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(B,i,t);if(gr(r,e))return c;var l=e,u=r-1,$=n,s=a,d=c;e=l,r=u,n=$,a=s,t=d;continue e}}),nc=v(function(e,r){return e<1?P:S(Qb,0,e,e,r,P)}),e3=v(function(e,r){var n=e.bT,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(B,{o:Ea(a),bT:Pe(n),L:o(Me,c,l)},r)}),r3=function(e){var r=p(kc,e3,P,jo(e));if(r.b){var n=r.a,a=r.b,t=o(jn,r,Uo(e)),i=o(Fu,n,a);return L(ou,i,e,t,0)}else return Eo},Ru=v(function(e,r){var n=e,a=r,t=Zr(a);return{fU:t*Zr(n),fY:t*Xr(n),c6:Xr(a)}}),n3=function(){var e=Ne(1),r=72,n=o(Jr,0,r-1),a=o(nc,r,o(Mn,cr,Vt(1))),t=Qt(r/2),i=o(Jr,0,t-1),c=o(nc,t,o(Mn,Qn(90),Qn(-90))),l=No(Ge(o(ee,function(s){return o(ee,function(d){return{o:mn(o(Ru,s,d)),bT:p(be,o(ie,Sn(d)*Sn(s),e),o(ie,Sn(d)*La(s),e),o(ie,La(d),e)),L:z(o(rc,s,Vt(1)),o(rc,o(gn,Qn(90),d),Qn(180)))}},c)},a))),u=v(function(s,d){return s*(t+1)+d}),$=Ge(o(ee,function(s){return Ge(o(ee,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),h=o(u,s,d+1);return b([V(h,g,m),V(h,m,f)])},i))},n));return Ro(r3(o(su,l,$)))}(),Pa=72,ea=2*Pa,a3=v(function(e,r){e:for(;;){var n=ea+1,a=o(_a,ea,2*e+3),t=o(_a,ea,2*e+2),i=2*e+1,c=2*e,l=ea,u=o(B,V(l,c,t),o(B,V(c,a,t),o(B,V(c,i,a),o(B,V(i,n,a),r))));if(e){var $=e-1,s=u;e=$,r=s;continue e}else return u}}),t3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),o3=v(function(e,r){e:for(;;){var n=p(t3,0,2*ur,e/Pa),a={bw:n,bP:0,bW:1},t={bw:n,bP:1,bW:1},i=o(B,a,o(B,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),i3=function(){var e=o(o3,Pa-1,b([{bw:0,bP:0,bW:0},{bw:0,bP:1,bW:0}])),r=o(a3,Pa-1,P);return o(jn,e,r)}(),c3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bP",radiusScale:"bW"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bY",viewMatrix:"f"}},ac=function(e){return ja(Q(function(r,n,a,t,i,c,l,u){return S(re,o(Jo,!0,u),c3,Oo,i3,{aw:p(En,0,0,1),b:a,c:n,d:c,e:r,bY:l,f:i})}))},l3=function(e){var r=uu(e);return{dp:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fU,I:r.fY,J:r.c6,bX:1}},u3=v(function(e,r){return o(Tu,l3(e),r)}),v3=E(function(e,r,n,a){var t=o(Yo,n,n3),i=function(){var u=z(e,r);return u.a?u.b?Un(b([t,ac()])):t:u.b?ac():k}(),c=Co(a),l=c;return o(u3,o(Tt,mr,So(a)),o(Io,V(l,l,l),i))}),$3=v(function(e,r){return L(v3,!0,!0,e,r)}),f3=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),s3=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),d3=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Au,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(f3,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Tl,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(s3,n,a,t,i,c)}},m3=d3,Eu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return b([o(Cb,t,r)]);case 1:var t=e.a,n=e.b;return b([o(Ib,t,n)]);case 3:var t=e.a,a=e.b;return b([o($3,m3(t),a)]);case 2:var t=e.a,i=e.b;return b([o(Nb,t,i)]);case 4:var c=e.a,l=e.b;return b([o(Kb,Pb(c),l)]);default:var u=e.a;return o(ko,Eu,u)}},p3=function(e){return o(ko,Eu,e)},b3=v(function(e,r){return p1({aI:P0(e.es),ev:e.ev,aJ:z0(.5),cb:e.cb,aK:z(Ti(Je(e.cT.fS)),Ti(Je(e.cT.eW))),aP:p3(r),fB:!0,fJ:o(Ru,vr(e.fI),vr(e.fK)),ei:Va})}),h3=v(function(e,r){return o(b3,{es:p(S0,46,46,46),ev:r0(e),cb:e.cb,cT:e.cT,fI:-Wr(135),fK:-Wr(45)},b([L0(e),x0(e),Bm]))}),g3=L(ym,h3,zm,Pm,xm);const _3={Main:{init:g3(o(D,function(e){return Te({e1:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Te({b7:c,cb:i,eJ:t,e7:a,fs:n,cT:r,fR:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return o(D,function(s){return o(D,function(d){return Te({eo:d,eB:s,de:$,eI:u,e8:l,ft:c,fx:i,fC:t,eh:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",ba(zn)))},o(M,"left",Z))},o(M,"pressedKeys",ba(zn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function($){return Te({de:$,e4:u,fd:l,fy:c,fz:i,eh:t,fU:a,fY:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Te({eW:n,fS:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Te({eE:r,eF:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},F={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},w3=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,$=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(F.keyboard.downs.push(f.code),F.keyboard.pressedKeys.push(f.code),r(f)&&(F.keyboard.control=!0),n(f)&&(F.keyboard.alt=!0),a(f)&&(F.keyboard.shift=!0),t(f)&&(F.keyboard.left=!0),i(f)&&(F.keyboard.right=!0),c(f)&&(F.keyboard.up=!0),l(f)&&(F.keyboard.down=!0))}),window.addEventListener("keyup",f=>{F.keyboard.pressedKeys=F.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(F.keyboard.control=!1,F.keyboard.pressedKeys=[]),n(f)&&(F.keyboard.alt=!1),a(f)&&(F.keyboard.shift=!1),t(f)&&(F.keyboard.left=!1),i(f)&&(F.keyboard.right=!1),c(f)&&(F.keyboard.up=!1),l(f)&&(F.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY,u(f)&&(F.pointer.down=!0,F.pointer.isDown=!0),$(f)&&(F.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{F.pointer.move=!0,F.pointer.x=-.5*F.screen.width+f.pageX,F.pointer.y=.5*F.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(F.pointer.up=!0,F.pointer.isDown=!1),$(f)&&(F.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{F.wheel.deltaX=f.deltaX,F.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(F)}),window.addEventListener("focus",f=>{s(F)}),window.addEventListener("visibilitychange",f=>{s(F)}),window.addEventListener("resize",()=>{F.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,h=g-F.clock;h<.009||(F.dt=h,F.clock=g,e.ports.tick.send(F),d(F)),window.requestAnimationFrame(m)}},y3=()=>{ct("pointerdown"),ct("wheel"),ct("keydown")},ct=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},x3=_3.Main.init({node:document.querySelector("#app div"),flags:{inputs:F}});y3();w3(x3);
