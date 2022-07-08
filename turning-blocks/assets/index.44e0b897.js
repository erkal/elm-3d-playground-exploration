const Xu=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};Xu();function wr(e,r,n){return n.a=e,n.f=r,n}function $(e){return wr(2,e,function(r){return function(n){return e(r,n)}})}function y(e){return wr(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function E(e){return wr(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return wr(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function We(e){return wr(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Pa(e){return wr(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ee(e){return wr(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function Wt(e){return wr(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function p(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function C(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function S(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function we(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function Xt(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function za(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Iu(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Ju=[];function Uu(e){return e.length}var Ou=y(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Yu=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,z(n,r)}),qu=$(function(e,r){return r[e]});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t});$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a});y(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r});var Zu=y(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r});$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});y(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});y(function(e,r,n){return n.slice(e,r)});y(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+Ku()),r});function Ku(e){return"<internals>"}function an(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _r(e,r){for(var n,a=[],t=pt(e,r,0,a);t&&(n=a.pop());t=pt(n.a,n.b,0,a));return t}function pt(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&an(5),!1;if(n>100)return a.push(z(e,r)),!0;e.$<0&&(e=gi(e),r=gi(r));for(var t in e)if(!pt(e[t],r[t],n+1,a))return!1;return!0}$(_r);$(function(e,r){return!_r(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var Qu=$(function(e,r){var n=J(e,r);return n<0?Rc:n?Rf:Ec}),Pn=0;function z(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function Ze(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(le);function le(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=nr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=nr(e.a,r);return n}var L={$:0};function nr(e,r){return{$:1,a:e,b:r}}var ev=$(nr);function _(e){for(var r=L,n=e.length;n--;)r=nr(e[n],r);return r}function ka(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var rv=y(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return _(a)});E(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(p(e,r.a,n.a,a.a));return _(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(C(e,r.a,n.a,a.a,t.a));return _(i)});We(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(S(e,r.a,n.a,a.a,t.a,i.a));return _(c)});$(function(e,r){return _(ka(r).sort(function(n,a){return J(e(n),e(a))}))});$(function(e,r){return _(ka(r).sort(function(n,a){var t=o(e,n,a);return t===Ec?0:t===Rc?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var nv=$(Math.pow);$(function(e,r){return r%e});var av=$(function(e,r){var n=r%e;return e===0?an(11):n>0&&e<0||n<0&&e>0?n+e:n}),tv=Math.PI,ov=Math.cos,iv=Math.sin,cv=Math.tan,lv=Math.atan;$(Math.atan2);function uv(e){return e}function vv(e){return e===1/0||e===-1/0}var $v=Math.ceil,fv=Math.floor,sv=Math.round,dv=Math.sqrt,ti=Math.log,mv=isNaN;function pv(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var bv=$(function(e,r){return e+r});function gv(e){var r=e.charCodeAt(0);return isNaN(r)?Y:ne(55296<=r&&r<=56319?z(e[0]+e[1],e.slice(2)):z(e[0],e.slice(1)))}$(function(e,r){return e+r});function hv(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function _v(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}y(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var wv=y(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),yv=$(function(e,r){return r.split(e)}),xv=$(function(e,r){return r.join(e)}),Sv=y(function(e,r,n){return n.slice(e,r)});function Tv(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Cv=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Lv=$(function(e,r){return r.indexOf(e)>-1}),Pv=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var zv=$(function(e,r){var n=e.length;if(n<1)return L;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return _(t)});function $c(e){return e+""}function kv(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return Y;r=10*r+i-48}return t==a?Y:ne(n==45?-r:r)}function Mv(e){if(e.length===0||/[\sxbo]/.test(e))return Y;var r=+e;return r===r?ne(r):Y}function Dv(e){return ka(e).join("")}function Av(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Bv(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Fv(e){return{$:0,a:e}}function It(e){return{$:2,b:e}}var Vv=It(function(e){return typeof e=="boolean"?ue(e):qe("a BOOL",e)}),Ev=It(function(e){return typeof e=="number"?ue(e):qe("a FLOAT",e)}),Rv=It(function(e){return typeof e=="string"?ue(e):e instanceof String?ue(e+""):qe("a STRING",e)});function jv(e){return{$:3,b:e}}var Nv=$(function(e,r){return{$:6,d:e,b:r}});$(function(e,r){return{$:7,e,b:r}});function yr(e,r){return{$:9,f:e,g:r}}var Gv=$(function(e,r){return{$:10,b:r,h:e}}),Hv=$(function(e,r){return yr(e,[r])}),Wv=y(function(e,r,n){return yr(e,[r,n])});E(function(e,r,n,a){return yr(e,[r,n,a])});he(function(e,r,n,a,t){return yr(e,[r,n,a,t])});We(function(e,r,n,a,t,i){return yr(e,[r,n,a,t,i])});Pa(function(e,r,n,a,t,i,c){return yr(e,[r,n,a,t,i,c])});ee(function(e,r,n,a,t,i,c,l){return yr(e,[r,n,a,t,i,c,l])});Wt(function(e,r,n,a,t,i,c,l,u){return yr(e,[r,n,a,t,i,c,l,u])});$(function(e,r){try{var n=JSON.parse(r);return Re(e,n)}catch(a){return ye(o(ao,"This is not valid JSON! "+a.message,r))}});var fc=$(function(e,r){return Re(e,r)});function Re(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?ue(e.c):qe("null",r);case 3:return Gn(r)?oi(e.b,r,_):qe("a LIST",r);case 4:return Gn(r)?oi(e.b,r,Xv):qe("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return qe("an OBJECT with a field named `"+n+"`",r);var v=Re(e.b,r[n]);return Ie(v)?v:ye(o(hi,n,v.a));case 7:var a=e.e;if(!Gn(r))return qe("an ARRAY",r);if(a>=r.length)return qe("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=Re(e.b,r[a]);return Ie(v)?v:ye(o(jc,a,v.a));case 8:if(typeof r!="object"||r===null||Gn(r))return qe("an OBJECT",r);var t=L;for(var i in r)if(r.hasOwnProperty(i)){var v=Re(e.b,r[i]);if(!Ie(v))return ye(o(hi,i,v.a));t=nr(z(i,v.a),t)}return ue(Be(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=Re(l[u],r);if(!Ie(v))return v;c=c(v.a)}return ue(c);case 10:var v=Re(e.b,r);return Ie(v)?Re(e.h(v.a),r):v;case 11:for(var s=L,d=e.g;d.b;d=d.b){var v=Re(d.a,r);if(Ie(v))return v;s=nr(v.a,s)}return ye(jf(Be(s)));case 1:return ye(o(ao,e.a,r));case 0:return ue(e.a)}}function oi(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=Re(e,r[i]);if(!Ie(c))return ye(o(jc,i,c.a));t[i]=c.a}return ue(n(t))}function Gn(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Xv(e){return o(ns,e.length,function(r){return e[r]})}function qe(e,r){return ye(o(ao,"Expecting "+e,r))}function Ur(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Ur(e.b,r.b);case 6:return e.d===r.d&&Ur(e.b,r.b);case 7:return e.e===r.e&&Ur(e.b,r.b);case 9:return e.f===r.f&&ii(e.g,r.g);case 10:return e.h===r.h&&Ur(e.b,r.b);case 11:return ii(e.g,r.g)}}function ii(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Ur(e[a],r[a]))return!1;return!0}var Iv=$(function(e,r){return JSON.stringify(r,null,e)+""});function sc(e){return e}y(function(e,r,n){return n[e]=r,n});function Rr(e){return{$:0,a:e}}function Jv(e){return{$:1,a:e}}function sr(e){return{$:2,b:e,c:null}}var bt=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function Uv(e){return{$:5,b:e}}var Ov=0;function Jt(e){var r={$:0,e:Ov++,f:e,g:null,h:[]};return Ut(r),r}function dc(e){return sr(function(r){r(Rr(Jt(e)))})}function mc(e,r){e.h.push(r),Ut(e)}var Yv=$(function(e,r){return sr(function(n){mc(e,r),n(Rr(Pn))})}),Ya=!1,ci=[];function Ut(e){if(ci.push(e),!Ya){for(Ya=!0;e=ci.shift();)qv(e);Ya=!1}}function qv(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ut(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}E(function(e,r,n,a){return Ot(r,a,e.e$,e.fL,e.fE,function(){return function(){}})});function Ot(e,r,n,a,t,i){var c=o(fc,e,r?r.flags:void 0);Ie(c)||an(2);var l={},u=n(c.a),v=u.a,s=i(m,v),d=Zv(l,m);function m(f,g){var b=o(a,f,v);s(v=b.a,g),ui(l,b.b,t(v))}return ui(l,u.b,t(v)),d?{ports:d}:{}}var er={};function Zv(e,r){var n;for(var a in er){var t=er[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=Qv(t,r)}return n}function Kv(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function Qv(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(bt,l,Uv(function(v){var s=v.a;return v.$===0?p(t,n,s,u):i&&c?C(a,n,s.i,s.j,u):p(a,n,i?s.i:s.j,u)}))}return n.h=Jt(o(bt,l,e.b))}var e$=$(function(e,r){return sr(function(n){e.g(r),n(Rr(Pn))})});$(function(e,r){return o(Yv,e.h,{$:0,a:r})});function pc(e){return function(r){return{$:1,k:e,l:r}}}function r$(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var li=[],qa=!1;function ui(e,r,n){if(li.push({p:e,q:r,r:n}),!qa){qa=!0;for(var a;a=li.shift();)n$(a.p,a.q,a.r);qa=!1}}function n$(e,r,n){var a={};la(!0,r,a,null),la(!1,n,a,null);for(var t in e)mc(e[t],{$:"fx",a:a[t]||{i:L,j:L}})}function la(e,r,n,a){switch(r.$){case 1:var t=r.k,i=a$(e,t,a,r.l);n[t]=t$(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)la(e,c.a,n,a);return;case 3:la(e,r.o,n,{s:r.n,t:a});return}}function a$(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?er[r].e:er[r].f;return o(i,t,a)}function t$(e,r,n){return n=n||{i:L,j:L},e?n.i=nr(r,n.i):n.j=nr(r,n.j),n}function o$(e){er[e]&&an(3)}$(function(e,r){return r});function i$(e,r){return o$(e),er[e]={f:c$,u:r,a:l$},pc(e)}var c$=$(function(e,r){return function(n){return e(r(n))}});function l$(e,r){var n=L,a=er[e].u,t=Rr(null);er[e].b=t,er[e].c=y(function(c,l,u){return n=l,t});function i(c){var l=o(fc,a,c);Ie(l)||an(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var ua,lr=typeof document!="undefined"?document:{};function Yt(e,r){e.appendChild(r)}E(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(gr(e,function(){}),t),{}});function gt(e){return{$:0,a:e}}var bc=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:qt(n),e:t,f:e,b:i}})}),jr=bc(void 0),u$=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:qt(n),e:t,f:e,b:i}})}),v$=u$(void 0);function $$(e,r,n,a){return{$:3,d:qt(e),g:r,h:n,i:a}}var f$=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function xr(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return xr([e,r],function(){return e(r)})});y(function(e,r,n){return xr([e,r,n],function(){return o(e,r,n)})});E(function(e,r,n,a){return xr([e,r,n,a],function(){return p(e,r,n,a)})});he(function(e,r,n,a,t){return xr([e,r,n,a,t],function(){return C(e,r,n,a,t)})});We(function(e,r,n,a,t,i){return xr([e,r,n,a,t,i],function(){return S(e,r,n,a,t,i)})});Pa(function(e,r,n,a,t,i,c){return xr([e,r,n,a,t,i,c],function(){return we(e,r,n,a,t,i,c)})});ee(function(e,r,n,a,t,i,c,l){return xr([e,r,n,a,t,i,c,l],function(){return Xt(e,r,n,a,t,i,c,l)})});Wt(function(e,r,n,a,t,i,c,l,u){return xr([e,r,n,a,t,i,c,l,u],function(){return za(e,r,n,a,t,i,c,l,u)})});var gc=$(function(e,r){return{$:"a0",n:e,o:r}}),s$=$(function(e,r){return{$:"a1",n:e,o:r}}),hc=$(function(e,r){return{$:"a2",n:e,o:r}}),zn=$(function(e,r){return{$:"a3",n:e,o:r}});y(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function d$(e){return e=="script"?"p":e}function m$(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(gc,r.n,p$(e,r.o)):r});function p$(e,r){var n=lo(r);return{$:r.$,a:n?p(as,n<3?b$:g$,Me(e),r.a):o(sa,e,r.a)}}var b$=$(function(e,r){return z(e(r.a),r.b)}),g$=$(function(e,r){return{al:e(r.al),cQ:r.cQ,cE:r.cE}});function qt(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?vi(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?vi(c,t,i):c[t]=i}return r}function vi(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function gr(e,r){var n=e.$;if(n===5)return gr(e.k||(e.k=e.m()),r);if(n===0)return lr.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=gr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return ht(c,r,e.d),c}var c=e.f?lr.createElementNS(e.f,e.c):lr.createElement(e.c);ua&&e.c=="a"&&c.addEventListener("click",ua(c)),ht(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Yt(c,gr(n===1?l[u]:l[u].b,r));return c}function ht(e,r,n){for(var a in n){var t=n[a];a==="a1"?h$(e,t):a==="a0"?y$(e,r,t):a==="a3"?_$(e,t):a==="a4"?w$(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function h$(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function _$(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function w$(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i!="undefined"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function y$(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=x$(r,i),e.addEventListener(t,c,Zt&&{passive:lo(i)<2}),a[t]=c}}var Zt;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zt=!0}}))}catch{}function x$(e,r){function n(a){var t=n.q,i=Re(t.a,a);if(!!Ie(i)){for(var c=lo(t),l=i.a,u=c?c<3?l.a:l.al:l,v=c==1?l.b:c==3&&l.cQ,s=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cE)&&a.preventDefault(),e),d,m;d=s.j;){if(typeof d=="function")u=d(u);else for(var m=d.length;m--;)u=d[m](u);s=s.p}s(u,v)}}return n.q=r,n}function S$(e,r){return e.$==r.$&&Ur(e.a,r.a)}function _c(e,r){var n=[];return Je(e,r,n,0),n}function _e(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function Je(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=D$(r),i=1;else{_e(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var s=[];Je(e.k,r.k,s,0),s.length>0&&_e(n,1,a,s);return;case 4:for(var d=e.j,m=r.j,f=!1,g=e.k;g.$===4;)f=!0,typeof d!="object"?d=[d,g.j]:d.push(g.j),g=g.k;for(var b=r.k;b.$===4;)f=!0,typeof m!="object"?m=[m,b.j]:m.push(b.j),b=b.k;if(f&&d.length!==m.length){_e(n,0,a,r);return}(f?!T$(d,m):d!==m)&&_e(n,2,a,m),Je(g,b,n,a+1);return;case 0:e.a!==r.a&&_e(n,3,a,r.a);return;case 1:$i(e,r,n,a,C$);return;case 2:$i(e,r,n,a,L$);return;case 3:if(e.h!==r.h){_e(n,0,a,r);return}var w=Kt(e.d,r.d);w&&_e(n,4,a,w);var x=r.i(e.g,r.g);x&&_e(n,5,a,x);return}}}function T$(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function $i(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){_e(n,0,a,r);return}var i=Kt(e.d,r.d);i&&_e(n,4,a,i),t(e,r,n,a)}function Kt(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Kt(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&S$(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function C$(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?_e(n,6,a,{v:l,i:c-l}):c<l&&_e(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var s=t[v];Je(s,i[v],n,++a),a+=s.b||0}}function L$(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,s=u.length,d=0,m=0,f=a;d<v&&m<s;){var g=l[d],b=u[m],w=g.a,x=b.a,h=g.b,T=b.b,k=void 0,G=void 0;if(w===x){f++,Je(h,T,t,f),f+=h.b||0,d++,m++;continue}var j=l[d+1],R=u[m+1];if(j){var N=j.a,H=j.b;G=x===N}if(R){var F=R.a,q=R.b;k=w===F}if(k&&G){f++,Je(h,q,t,f),vn(i,t,w,T,m,c),f+=h.b||0,f++,$n(i,t,w,H,f),f+=H.b||0,d+=2,m+=2;continue}if(k){f++,vn(i,t,x,T,m,c),Je(h,q,t,f),f+=h.b||0,d+=1,m+=2;continue}if(G){f++,$n(i,t,w,h,f),f+=h.b||0,f++,Je(H,T,t,f),f+=H.b||0,d+=2,m+=1;continue}if(j&&N===F){f++,$n(i,t,w,h,f),vn(i,t,x,T,m,c),f+=h.b||0,f++,Je(H,q,t,f),f+=H.b||0,d+=2,m+=2;continue}break}for(;d<v;){f++;var g=l[d],h=g.b;$n(i,t,g.a,h,f),f+=h.b||0,d++}for(;m<s;){var K=K||[],b=u[m];vn(i,t,b.a,b.b,void 0,K),m++}(t.length>0||c.length>0||K)&&_e(n,8,a,{w:t,x:c,y:K})}var wc="_elmW6BL";function vn(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];Je(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}vn(e,r,n+wc,a,t,i)}function $n(e,r,n,a,t){var i=e[n];if(!i){var c=_e(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];Je(a,i.z,l,t),_e(r,9,t,{w:l,A:i});return}$n(e,r,n+wc,a,t)}function yc(e,r,n,a){fn(e,r,n,0,0,r.b,a)}function fn(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)yc(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var s=l.s.w;s.length>0&&fn(e,r,s,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var s=d.w;s.length>0&&fn(e,r,s,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var m=r.$;if(m===4){for(var f=r.k;f.$===4;)f=f.k;return fn(e,f,n,a,t+1,i,e.elm_event_node_ref)}for(var g=r.e,b=e.childNodes,w=0;w<g.length;w++){t++;var x=m===1?g[w]:g[w].b,h=t+(x.b||0);if(t<=u&&u<=h&&(a=fn(b[w],x,n,a,t,h,c),!(l=n[a])||(u=l.r)>i))return a;t=h}return a}function xc(e,r,n,a){return n.length===0?e:(yc(e,r,n,a),va(e,n))}function va(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=P$(t,a);t===e&&(e=i)}return e}function P$(e,r){switch(r.$){case 0:return z$(e,r.s,r.u);case 4:return ht(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return va(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(gr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=va(e,i.w),e;case 8:return k$(e,r);case 5:return r.s(e);default:an(10)}}function z$(e,r,n){var a=e.parentNode,t=gr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function k$(e,r){var n=r.s,a=M$(n.y,r);e=va(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:gr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Yt(e,a),e}function M$(e,r){if(!!e){for(var n=lr.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;Yt(n,i.c===2?i.s:gr(i.z,r.u))}return n}}function Qt(e){if(e.nodeType===3)return gt(e.textContent);if(e.nodeType!==1)return gt("");for(var r=L,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=nr(o(zn,i,c),r)}for(var l=e.tagName.toLowerCase(),u=L,v=e.childNodes,a=v.length;a--;)u=nr(Qt(v[a]),u);return p(jr,l,r,u)}function D$(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var A$=E(function(e,r,n,a){return Ot(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.fO,l=a.node,u=Qt(l);return Sc(i,function(v){var s=c(v),d=_c(u,s);l=xc(l,u,d,t),u=s})})});E(function(e,r,n,a){return Ot(r,a,e.e$,e.fL,e.fE,function(t,i){var c=e.cN&&e.cN(t),l=e.fO,u=lr.title,v=lr.body,s=Qt(v);return Sc(i,function(d){ua=c;var m=l(d),f=jr("body")(L)(m.er),g=_c(s,f);v=xc(v,s,g,t),s=f,ua=0,u!==m.fI&&(lr.title=u=m.fI)})})});var $a=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Sc(e,r){r(e);var n=0;function a(){n=n===1?0:($a(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&$a(a),n=2)}}$(function(e,r){return o($o,uo,sr(function(){r&&history.go(r),e()}))});$(function(e,r){return o($o,uo,sr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o($o,uo,sr(function(){history.replaceState({},"",r),e()}))});var B$={addEventListener:function(){},removeEventListener:function(){}},F$=typeof window!="undefined"?window:B$;y(function(e,r,n){return dc(sr(function(a){function t(i){Jt(n(i))}return e.addEventListener(r,t,Zt&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=Re(e,r);return Ie(n)?ne(n.a):Y});function Tc(e,r){return sr(function(n){$a(function(){var a=document.getElementById(e);n(a?Rr(r(a)):Jv(os(e)))})})}function V$(e){return sr(function(r){$a(function(){r(Rr(e()))})})}$(function(e,r){return Tc(r,function(n){return n[e](),Pn})});$(function(e,r){return V$(function(){return F$.scroll(e,r),Pn})});y(function(e,r,n){return Tc(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Pn})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var E$=$(function(e,r){var n="g";e.fc&&(n+="m"),e.et&&(n+="i");try{return ne(new RegExp(r,n))}catch{return Y}});$(function(e,r){return r.match(e)!==null});var R$=y(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,s=new Array(v);v>0;){var d=u[v];s[--v]=d?ne(d):Y}a.push(C(gl,u[0],u.index,t,_(s))),l=r.lastIndex}return r.lastIndex=c,_(a)});E(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?ne(v):Y}return n(C(gl,c,arguments[arguments.length-2],t,_(u)))}return a.replace(r,i)});y(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,_(t)});var fi=0;function yn(e,r){for(;r.b;r=r.b)e(r.a)}function eo(e){for(var r=0;e.b;e=e.b)r++;return r}var j$=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},N$=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),G$=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),H$=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),W$=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),X$=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),I$=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),J$=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),U$=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),O$=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Y$=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},q$=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Z$=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},K$=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Cc=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Lc=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Q$=function(e){e.gl.disable(e.gl.CULL_FACE)},ef=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},rf=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},nf=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},si=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],af=[q$,Z$,K$,Cc,Lc,Q$,ef,rf,nf];function di(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function tf(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function Pc(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function of(e,r,n,a){for(var t=n.a.c8,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(f,g,b,w,x){var h;if(t===1)for(h=0;h<g;h++)f[b++]=g===1?w[x]:w[x][h];else i.forEach(function(T){for(h=0;h<g;h++)f[b++]=g===1?w[T][x]:w[T][x][h]})}var u=Pc(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,s=u.size*u.arraySize*t,d=new u.type(eo(n.b)*s);yn(function(f){l(d,u.size*u.arraySize,v,f,a[r.name]||r.name),v+=s},n.b);var m=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,m),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),m}function cf(e,r){if(r.a.dh>0){var n=e.createBuffer(),a=lf(r.c,r.a.dh);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.c8*eo(r.b),indexBuffer:null,buffers:{}}}function lf(e,r){var n=new Uint32Array(eo(e)*r),a=0,t;return yn(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function mi(e,r){return e+"#"+r}var zc=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Cc(n),Lc(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=mi(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=fi++,v||(v=di(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var s;i.c.id?s=n.shaders[i.c.id]:i.c.id=fi++,s||(s=di(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=s);var d=tf(a,v,s);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=uf(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var m=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<m;u++){var f=a.getActiveAttrib(d,u),g=a.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(g)}c=mi(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),vf(l.uniformSetters,i.e);var b=n.buffers.get(i.d);for(b||(b=cf(a,i.d),n.buffers.set(i.d,b)),u=0;u<l.activeAttributes.length;u++){f=l.activeAttributes[u],g=l.activeAttributeLocations[u],b.buffers[f.name]===void 0&&(b.buffers[f.name]=of(a,f,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,b.buffers[f.name]);var w=Pc(a,f.type);if(w.arraySize===1)a.enableVertexAttribArray(g),a.vertexAttribPointer(g,w.size,w.baseType,!1,0,0);else for(var x=w.size*4,h=x*w.arraySize,T=0;T<w.arraySize;T++)a.enableVertexAttribArray(g+T),a.vertexAttribPointer(g+T,w.size,w.baseType,!1,h,x*T)}for(n.toggle=!n.toggle,yn(v0(n),i.a),u=0;u<si.length;u++){var k=n[si[u]];k.toggle!==n.toggle&&k.enabled&&(af[u](n),k.enabled=!1,k.toggle=n.toggle)}b.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,b.indexBuffer),a.drawElements(i.d.a.dQ,b.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.dQ,0,b.numIndices)}}return yn(t,e.g),r});function uf(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(f,g){var b=g.name,w=e.getUniformLocation(f,b);switch(g.type){case e.INT:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};case e.FLOAT:return function(h){i[b]!==h&&(e.uniform1f(w,h),i[b]=h)};case e.FLOAT_VEC2:return function(h){i[b]!==h&&(e.uniform2f(w,h[0],h[1]),i[b]=h)};case e.FLOAT_VEC3:return function(h){i[b]!==h&&(e.uniform3f(w,h[0],h[1],h[2]),i[b]=h)};case e.FLOAT_VEC4:return function(h){i[b]!==h&&(e.uniform4f(w,h[0],h[1],h[2],h[3]),i[b]=h)};case e.FLOAT_MAT4:return function(h){i[b]!==h&&(e.uniformMatrix4fv(w,!1,new Float32Array(h)),i[b]=h)};case e.SAMPLER_2D:var x=c++;return function(h){e.activeTexture(e.TEXTURE0+x);var T=l.textures.get(h);T||(T=h.eA(e),l.textures.set(h,T)),e.bindTexture(e.TEXTURE_2D,T),i[b]!==h&&(e.uniform1i(w,x),i[b]=h)};case e.BOOL:return function(h){i[b]!==h&&(e.uniform1i(w,h),i[b]=h)};default:return function(){}}}for(var v={},s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var m=e.getActiveUniform(t,d);v[a[m.name]||m.name]=u(t,m)}return v}function vf(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var $f=y(function(e,r,n){return $$(r,{g:n,f:{},h:e},gf,hf)}),ff=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),sf=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),df=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),mf=$(function(e,r){e.contextAttributes.antialias=!0}),pf=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),bf=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function gf(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};yn(function(t){return o(u0,r,t)},e.h);var n=lr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),j$(function(){return o(zc,e,n)})):(n=lr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function hf(e,r){return r.f=e.f,zc(r)}var _f=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/wf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function wf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ro=new Float64Array(3),pi=new Float64Array(3),bi=new Float64Array(3),yf=y(function(e,r,n){return new Float64Array([e,r,n])}),xf=function(e){return e[0]},Sf=function(e){return e[1]},Tf=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Cf=function(e){return new Float64Array([e.fT,e.fX,e.c$])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function kc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(kc);function Mc(e,r,n){return n===void 0&&(n=new Float64Array(3)),fa(kc(e,r,n),n)}$(Mc);function Dc(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function fa(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Dc(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Lf=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),sn=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$(sn);function _t(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(_t);$(function(e,r){var n,a=ro,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=sn(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=(sn(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=(sn(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=(sn(r,a)+e[14])/n,t});var Pf=E(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var zf=function(e){return{fT:e[0],fX:e[1],c$:e[2],ei:e[3]}},kf=function(e){return new Float64Array([e.fT,e.fX,e.c$,e.ei])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/Mf(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function Mf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Df=new Float64Array(16),Af=new Float64Array(16),Bf=function(e){var r=new Float64Array(16);return r[0]=e.ds,r[1]=e.dw,r[2]=e.dA,r[3]=e.dE,r[4]=e.dt,r[5]=e.dx,r[6]=e.dB,r[7]=e.dF,r[8]=e.du,r[9]=e.dy,r[10]=e.dC,r[11]=e.dG,r[12]=e.dv,r[13]=e.dz,r[14]=e.dD,r[15]=e.dH,r},Ff=function(e){return{ds:e[0],dw:e[1],dA:e[2],dE:e[3],dt:e[4],dx:e[5],dB:e[6],dF:e[7],du:e[8],dy:e[9],dC:e[10],dG:e[11],dv:e[12],dz:e[13],dD:e[14],dH:e[15]}};function Ac(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}We(Ac);E(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return Ac(c,l,i,t,n,a)});function Bc(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}We(Bc);E(function(e,r,n,a){return Bc(e,r,n,a,-1,1)});function Fc(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],s=e[7],d=e[8],m=e[9],f=e[10],g=e[11],b=e[12],w=e[13],x=e[14],h=e[15],T=r[0],k=r[1],G=r[2],j=r[3],R=r[4],N=r[5],H=r[6],F=r[7],q=r[8],K=r[9],ie=r[10],ve=r[11],oe=r[12],me=r[13],ze=r[14],Se=r[15];return n[0]=a*T+l*k+d*G+b*j,n[1]=t*T+u*k+m*G+w*j,n[2]=i*T+v*k+f*G+x*j,n[3]=c*T+s*k+g*G+h*j,n[4]=a*R+l*N+d*H+b*F,n[5]=t*R+u*N+m*H+w*F,n[6]=i*R+v*N+f*H+x*F,n[7]=c*R+s*N+g*H+h*F,n[8]=a*q+l*K+d*ie+b*ve,n[9]=t*q+u*K+m*ie+w*ve,n[10]=i*q+v*K+f*ie+x*ve,n[11]=c*q+s*K+g*ie+h*ve,n[12]=a*oe+l*me+d*ze+b*Se,n[13]=t*oe+u*me+m*ze+w*Se,n[14]=i*oe+v*me+f*ze+x*Se,n[15]=c*oe+s*me+g*ze+h*Se,n}$(Fc);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],s=e[9],d=e[10],m=e[12],f=e[13],g=e[14],b=r[0],w=r[1],x=r[2],h=r[4],T=r[5],k=r[6],G=r[8],j=r[9],R=r[10],N=r[12],H=r[13],F=r[14];return n[0]=a*b+c*w+v*x,n[1]=t*b+l*w+s*x,n[2]=i*b+u*w+d*x,n[3]=0,n[4]=a*h+c*T+v*k,n[5]=t*h+l*T+s*k,n[6]=i*h+u*T+d*k,n[7]=0,n[8]=a*G+c*j+v*R,n[9]=t*G+l*j+s*R,n[10]=i*G+u*j+d*R,n[11]=0,n[12]=a*N+c*H+v*F+m,n[13]=t*N+l*H+s*F+f,n[14]=i*N+u*H+d*F+g,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=fa(r,ro);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});y(function(e,r,n){var a=new Float64Array(16),t=1/Dc(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,s=Math.sin(e),d=i*s,m=c*s,f=l*s,g=i*c*v,b=i*l*v,w=c*l*v,x=i*i*v+u,h=g+f,T=b-m,k=g-f,G=c*c*v+u,j=w+d,R=b+m,N=w-d,H=l*l*v+u,F=n[0],q=n[1],K=n[2],ie=n[3],ve=n[4],oe=n[5],me=n[6],ze=n[7],Se=n[8],mr=n[9],pr=n[10],Oa=n[11],Nu=n[12],Gu=n[13],Hu=n[14],Wu=n[15];return a[0]=F*x+ve*h+Se*T,a[1]=q*x+oe*h+mr*T,a[2]=K*x+me*h+pr*T,a[3]=ie*x+ze*h+Oa*T,a[4]=F*k+ve*G+Se*j,a[5]=q*k+oe*G+mr*j,a[6]=K*k+me*G+pr*j,a[7]=ie*k+ze*G+Oa*j,a[8]=F*R+ve*N+Se*H,a[9]=q*R+oe*N+mr*H,a[10]=K*R+me*N+pr*H,a[11]=ie*R+ze*N+Oa*H,a[12]=Nu,a[13]=Gu,a[14]=Hu,a[15]=Wu,a});function Vf(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}y(Vf);E(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Ef(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}y(Ef);E(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],s=a[5],d=a[6],m=a[7],f=a[8],g=a[9],b=a[10],w=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=s,t[6]=d,t[7]=m,t[8]=f,t[9]=g,t[10]=b,t[11]=w,t[12]=i*e+v*r+f*n+a[12],t[13]=c*e+s*r+g*n+a[13],t[14]=l*e+d*r+b*n+a[14],t[15]=u*e+m*r+w*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],s=r[4],d=r[5],m=r[6],f=r[7],g=r[8],b=r[9],w=r[10],x=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=s,n[5]=d,n[6]=m,n[7]=f,n[8]=g,n[9]=b,n[10]=w,n[11]=x,n[12]=c*a+s*t+g*i+r[12],n[13]=l*a+d*t+b*i+r[13],n[14]=u*a+m*t+w*i+r[14],n[15]=v*a+f*t+x*i+r[15],n});y(function(e,r,n){var a=Mc(e,r,ro),t=fa(_t(n,a,pi),pi),i=fa(_t(a,t,bi),bi),c=Df,l=Af;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,Fc(c,l)});y(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var A=ev,Hn=Zu,Vc=y(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return p(Hn,e,l,v)}else{var u=c.a;return p(Hn,i,l,u)}});return p(Hn,i,p(Hn,e,r,t),a)}),no=y(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=p(e,a,t,p(no,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),gi=function(e){return p(no,y(function(r,n,a){return o(A,z(r,n),a)}),L,e)},Ec=1,Rf=2,Rc=0,ye=function(e){return{$:1,a:e}},ao=$(function(e,r){return{$:3,a:e,b:r}}),hi=$(function(e,r){return{$:0,a:e,b:r}}),jc=$(function(e,r){return{$:1,a:e,b:r}}),ue=function(e){return{$:0,a:e}},jf=function(e){return{$:2,a:e}},ne=function(e){return{$:0,a:e}},Y={$:1},Nf=Cv,Gf=Iv,Ae=$c,Pr=$(function(e,r){return o(xv,e,ka(r))}),to=$(function(e,r){return _(o(yv,e,r))}),Nc=function(e){return o(Pr,`
    `,o(to,`
`,e))},kn=y(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Fr=function(e){return p(kn,$(function(r,n){return n+1}),0,e)},Hf=rv,Wf=y(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(A,r,n);e=a,r=t,n=i;continue e}else return n}),Vr=$(function(e,r){return p(Wf,e,r,L)}),Gc=$(function(e,r){return p(Hf,e,o(Vr,0,Fr(r)-1),r)}),rr=Av,Hc=function(e){var r=rr(e);return 97<=r&&r<=122},Wc=function(e){var r=rr(e);return r<=90&&65<=r},Xf=function(e){return Hc(e)||Wc(e)},If=function(e){var r=rr(e);return r<=57&&48<=r},Jf=function(e){return Hc(e)||Wc(e)||If(e)},Be=function(e){return p(kn,A,L,e)},tn=gv,Uf=$(function(e,r){return`

(`+(Ae(e+1)+(") "+Nc(Of(r))))}),Of=function(e){return o(Yf,e,L)},Yf=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var b=tn(n);if(b.$===1)return!1;var w=b.a,x=w.a,h=w.b;return Xf(x)&&o(Nf,Jf,h)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(A,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(Ae(i)+"]"),u=c,v=o(A,l,r);e=u,r=v;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(Pr,"",Be(r)):"Json.Decode.oneOf"}(),g=d+(" failed in the following "+(Ae(Fr(s))+" ways:"));return o(Pr,`

`,o(A,g,o(Gc,Uf,s)))}else{var c=s.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(Pr,"",Be(r)):"!"}();default:var m=e.a,f=e.b,g=function(){return r.b?"Problem with the value at json"+(o(Pr,"",Be(r))+`:

    `):`Problem with the given value:

`}();return g+(Nc(o(Gf,4,f))+(`

`+m))}}),Fe=32,wt=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),yt=Ju,oo=$v,io=$(function(e,r){return ti(r)/ti(e)}),qf=uv,xn=oo(o(io,2,Fe)),Xc=C(wt,0,xn,yt,yt),Ic=Ou,Jc=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});$(function(e,r){return r(e)});var Uc=fv,xt=Uu,Pe=$(function(e,r){return J(e,r)>0?e:r}),Zf=function(e){return{$:0,a:e}},co=Yu,Kf=$(function(e,r){e:for(;;){var n=o(co,Fe,e),a=n.a,t=n.b,i=o(A,Zf(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return Be(i)}}),Qf=function(e){var r=e.a;return r},es=$(function(e,r){e:for(;;){var n=oo(r/Fe);if(n===1)return o(co,Fe,e).a;var a=o(Kf,e,L),t=n;e=a,r=t;continue e}}),Oc=$(function(e,r){if(r.l){var n=r.l*Fe,a=Uc(o(io,Fe,n-1)),t=e?Be(r.z):r.z,i=o(es,t,r.l);return C(wt,xt(r.p)+n,o(Pe,5,a*xn),i,r.p)}else return C(wt,xt(r.p),xn,yt,r.p)}),rs=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(Oc,!1,{z:a,l:n/Fe|0,p:t});var i=Jc(p(Ic,Fe,r,e)),c=e,l=r-Fe,u=n,v=o(A,i,a),s=t;e=c,r=l,n=u,a=v,t=s;continue e}}),ns=$(function(e,r){if(e<=0)return Xc;var n=e%Fe,a=p(Ic,n,e-n,r),t=e-n-Fe;return S(rs,r,t,e,L,a)}),Ie=function(e){return!e.$},D=Gv,Z=Vv,M=Nv,$e=Ev,sa=Hv,as=Wv,Me=Fv,lo=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},I=jr("div"),ts=function(e){return{$:2,a:e}},Yc=$(function(e,r){return e}),qc=$(function(e,r){return{b1:r.b1,ey:e,b5:r.b5,eH:r.eH,e4:r.e4,fn:r.fn,cM:r.cM,fP:r.fP}}),kr=function(e){return e},os=kr,_i=We(function(e,r,n,a,t,i){return{dd:i,df:r,dU:a,dX:n,d$:e,d0:t}}),is=Lv,zr=hv,Or=Sv,Mn=$(function(e,r){return e<1?r:p(Or,e,zr(r),r)}),Ma=zv,Da=function(e){return e===""},Aa=$(function(e,r){return e<1?"":p(Or,0,e,r)}),Zc=kv,wi=he(function(e,r,n,a,t){if(Da(t)||o(is,"@",t))return Y;var i=o(Ma,":",t);if(i.b){if(i.b.b)return Y;var c=i.a,l=Zc(o(Mn,c+1,t));if(l.$===1)return Y;var u=l;return ne(we(_i,e,o(Aa,c,t),u,r,n,a))}else return ne(we(_i,e,t,Y,r,n,a))}),yi=E(function(e,r,n,a){if(Da(a))return Y;var t=o(Ma,"/",a);if(t.b){var i=t.a;return S(wi,e,o(Mn,i,a),r,n,o(Aa,i,a))}else return S(wi,e,"/",r,n,a)}),xi=y(function(e,r,n){if(Da(n))return Y;var a=o(Ma,"?",n);if(a.b){var t=a.a;return C(yi,e,ne(o(Mn,t+1,n)),r,o(Aa,t,n))}else return C(yi,e,Y,r,n)});$(function(e,r){if(Da(r))return Y;var n=o(Ma,"#",r);if(n.b){var a=n.a;return p(xi,e,ne(o(Mn,a+1,r)),o(Aa,a,r))}else return p(xi,e,Y,r)});var cs=Pv,uo=function(e){},Dn=Rr,ls=Dn(0),Kc=E(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var s=v.a,d=v.b,m=n>500?p(kn,e,r,Be(d)):C(Kc,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,s,m))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),dr=y(function(e,r,n){return C(Kc,e,r,0,n)}),re=$(function(e,r){return p(dr,$(function(n,a){return o(A,e(n),a)}),L,r)}),da=bt,vo=$(function(e,r){return o(da,function(n){return Dn(e(n))},r)}),us=y(function(e,r,n){return o(da,function(a){return o(da,function(t){return Dn(o(e,a,t))},n)},r)}),vs=function(e){return p(dr,us(A),Dn(L),e)},$s=e$,fs=$(function(e,r){var n=r;return dc(o(da,$s(e),n))}),ss=y(function(e,r,n){return o(vo,function(a){return 0},vs(o(re,fs(e),r)))}),ds=y(function(e,r,n){return Dn(0)}),ms=$(function(e,r){var n=r;return o(vo,e,n)});er.Task=Kv(ls,ss,ds,ms);var ps=pc("Task"),$o=$(function(e,r){return ps(o(vo,e,r))}),bs=A$,gs=pv,ma={$:1},Qc=function(e){return{$:2,a:e}},Ba={$:0},Ne=$(function(e,r){return{$:0,a:e,b:r}}),te=y(function(e,r,n){return r(e(n))}),on=function(e){var r=e.b.B;return r.a},hs=function(e){var r=e.a,n=e.b.T,a=e.b.B,t=e.b.ab;if(t.b){var i=t.a,c=t.b;return ne(o(Ne,r,{B:i,ab:c,T:o(A,a,n)}))}else return Y},el=function(e){var r=e.b;return o(Ne,Ba,r)},$r=$(function(e,r){if(r.$)return e;var n=r.a;return n}),_s=y(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.fn.c7?el(n):n;case 2:var i=a.a.cR;return(J(i+r.eH,on(n).b1)>0?o(te,hs,$r(o(Ne,ma,t))):kr)(o(Ne,Qc({cR:i+r.eH}),t));default:var c=t.B,l=c.a,u=c.b,v=o(qc,l.ey,Ze(r,{b1:l.b1+r.eH})),s=o(e,v,u);return o(Ne,Ba,{B:z(v,s),ab:L,T:o(A,t.B,t.T)})}}),rl=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),ws=y(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(A,a,n);e=i,r=c,n=l;continue e}else return n}}),ys=$(function(e,r){return Be(p(ws,e,r,L))}),nl=y(function(e,r,n){if(r<=0)return L;{var a=z(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,h=t.a,i=t.b,c=i.a;return _([h,c]);case 3:if(a.b.b.b.b){var l=a.b,h=l.a,u=l.b,c=u.a,v=u.b,s=v.a;return _([h,c,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,h=d.a,m=d.b,c=m.a,f=m.b,s=f.a,g=f.b,b=g.a,w=g.b;return e>1e3?o(A,h,o(A,c,o(A,s,o(A,b,o(ys,r-4,w))))):o(A,h,o(A,c,o(A,s,o(A,b,p(nl,e+1,r-4,w)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var x=a.b,h=x.a;return _([h])}}),xs=$(function(e,r){return p(nl,0,e,r)}),Ss=$(function(e,r){var n=r.b.T,a=r.b.B,t=r.b.ab,i=le(Be(n),le(_([a]),t)),c=o(xs,e,i),l=o(rl,e,i);if(l.b){var u=l.a,v=l.b;return o(Ne,ma,{B:u,ab:v,T:Be(c)})}else{var s=Be(c);if(s.b){var d=s.a,m=s.b;return o(Ne,ma,{B:d,ab:L,T:m})}else return r}}),Ts=function(e){var r=e.b;return o(Ne,ma,r)},Cs=function(e){var r=e.b;return o(Ne,Qc({cR:on(e).b1}),r)},Ls=$(function(e,r){switch(e.$){case 1:return Ts(r);case 2:return el(r);case 3:return Cs(r);default:var n=e.a;return o(Ss,n,r)}}),al=$(function(e,r){var n=r.a,a=r.b;return z(e(n),a)}),Ps=$(function(e,r){return Ze(r,{av:e(r.av)})}),zs=function(e){return{$:3,a:e}},ks=function(e){return{$:2,a:e}},tl=$(function(e,r){return{$:0,a:e,b:r}}),Ms=$(function(e,r){return{$:1,a:e,b:r}}),Te=$(function(e,r){if(r.$)return Y;var n=r.a;return ne(e(n))}),U=function(e){return e<0?-e:e},fo=Mv,Ds=y(function(e,r,n){return o($r,0/0,fo(o(e,r,n)))}),ol=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),As=wv,il=function(e){return p(As,A,L,e)},Bs=$(function(e,r){var n=o(ol,function(a){return a!=="0"&&a!=="."},il(r));return le(e&&n?"-":"",r)}),be=$c,St=bv,cl=Bv,ll=function(e){var r=e.a,n=e.b;if(r==="9"){var a=tn(n);if(a.$===1)return"01";var t=a.a;return o(St,"0",ll(t))}else{var i=rr(r);return i>=48&&i<57?o(St,cl(i+1),n):"0"}},Tt=vv,Fs=mv,Fa=function(e){return o(St,e,"")},ul=y(function(e,r,n){return e<=0?n:p(ul,e>>1,le(r,r),e&1?le(n,r):n)}),Sn=$(function(e,r){return p(ul,e,r,"")}),Ct=y(function(e,r,n){return le(n,o(Sn,e-zr(n),Fa(r)))}),Lt=_v,vl=function(e){var r=o(to,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return z(n,t)}else{var n=r.a;return z(n,"0")}else return z("0","0")},Vs=function(e){var r=o(to,"e",be(U(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o($r,0,Zc(o(cs,"+",t)?o(Mn,1,t):t)),c=vl(n),l=c.a,u=c.b,v=le(l,u),s=i<0?o($r,"0",o(Te,function(d){var m=d.a,f=d.b;return m+("."+f)},o(Te,al(Fa),tn(le(o(Sn,U(i),"0"),v))))):p(Ct,i+1,"0",v);return le(e<0?"-":"",s)}else{var n=r.a;return le(e<0?"-":"",n)}else return""},Es=y(function(e,r,n){if(Tt(n)||Fs(n))return be(n);var a=n<0,t=vl(Vs(U(n))),i=t.a,c=t.b,l=zr(i)+r,u=le(o(Sn,-l+1,"0"),p(Ct,l,"0",le(i,c))),v=zr(u),s=o(Pe,1,l),d=o(e,a,p(Or,s,v,u)),m=p(Or,0,s,u),f=d?Lt(o($r,"1",o(Te,ll,tn(Lt(m))))):m,g=zr(f),b=f==="0"?f:r<=0?le(f,o(Sn,U(r),"0")):J(r,zr(c))<0?p(Or,0,g-r,f)+("."+p(Or,g-r,g,f)):le(i+".",p(Ct,r,"0",c));return o(Bs,a,b)}),$l=Es($(function(e,r){var n=tn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(rr(t))})),Rs=Ds($l),js=y(function(e,r,n){var a=o(io,10,U(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(Rs,t,n)}),fl=Qu,so=$(function(e,r){e:for(;;){if(r.$===-2)return Y;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(fl,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return ne(a);default:var l=e,u=i;e=l,r=u;continue e}}}),X=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),ar={$:-2},Qr=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,s=a.c,d=a.d,m=a.e;return S(X,0,r,n,S(X,1,v,s,d,m),S(X,1,i,c,l,u))}else return S(X,e,i,c,S(X,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,s=a.c,f=a.d;f.a;var g=f.b,b=f.c,w=f.d,x=f.e,m=a.e;return S(X,0,v,s,S(X,1,g,b,w,x),S(X,1,r,n,m,t))}else return S(X,e,r,n,a,t)}),Pt=y(function(e,r,n){if(n.$===-2)return S(X,0,e,r,ar,ar);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(fl,e,t);switch(u){case 0:return S(Qr,a,t,i,p(Pt,e,r,c),l);case 1:return S(X,a,t,r,c,l);default:return S(Qr,a,t,i,c,p(Pt,e,r,l))}}),pn=y(function(e,r,n){var a=p(Pt,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return S(X,1,t,i,c,l)}else{var u=a;return u}}),Ns=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},sl=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var s=v.b,d=v.c,m=v.d;m.a;var f=m.b,g=m.c,b=m.d,w=m.e,x=v.e;return S(X,0,f,g,S(X,1,n,a,S(X,0,i,c,l,u),b),S(X,1,s,d,w,x))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,l=h.d,u=h.e,T=e.e;T.a;var s=T.b,d=T.c,m=T.d,x=T.e;return S(X,1,n,a,S(X,0,i,c,l,u),S(X,0,s,d,m,x))}else return e},Si=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,s=l.d,d=l.e,m=t.e,f=e.e;f.a;var g=f.b,b=f.c,w=f.d,x=f.e;return S(X,0,i,c,S(X,1,u,v,s,d),S(X,1,n,a,m,S(X,0,g,b,w,x)))}else{var r=e.a,n=e.b,a=e.c,h=e.d;h.a;var i=h.b,c=h.c,T=h.d,m=h.e,k=e.e;k.a;var g=k.b,b=k.c,w=k.d,x=k.e;return S(X,1,n,a,S(X,0,i,c,T,m),S(X,0,g,b,w,x))}else return e},Gs=Pa(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,s=i.e;return S(X,n,l,u,v,S(X,0,a,t,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Si(r)}else break e;else return c.a,c.d,Si(r);else break e;return r}}),ea=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,S(X,r,n,a,ea(t),l);var u=sl(e);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Qr,v,s,d,ea(m),f)}else return ar}else return S(X,r,n,a,ea(t),l)}else return ar},bn=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,S(X,n,a,t,o(bn,e,i),c);var u=sl(r);if(u.$===-1){var v=u.a,s=u.b,d=u.c,m=u.d,f=u.e;return S(Qr,v,s,d,o(bn,e,m),f)}else return ar}else return S(X,n,a,t,o(bn,e,i),c);else return o(Hs,e,Xt(Gs,e,r,n,a,t,i,c))}),Hs=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(_r(e,a)){var l=Ns(c);if(l.$===-1){var u=l.b,v=l.c;return S(Qr,n,u,v,i,ea(c))}else return ar}else return S(Qr,n,a,t,i,o(bn,e,c))}else return ar}),Ws=$(function(e,r){var n=o(bn,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return S(X,1,a,t,i,c)}else{var l=n;return l}}),Wn=y(function(e,r,n){var a=r(o(so,e,n));if(a.$)return o(Ws,e,n);var t=a.a;return p(pn,e,t,n)}),Xs=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Wn,r,Te(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ms,z(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Wn,r,Te(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(tl,z(i,c),p(js,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Wn,r,Te(function(a){return a.$===3?zs(n):a}));default:var r=e.a,n=e.b;return o(Wn,r,Te(function(a){return a.$===2?ks(n):a}))}},Is=function(e){return Ps(Xs(e))},Js=$(function(e,r){return o(re,Is(e),r)}),Us=$(function(e,r){return Ze(r,{ey:o(Js,e,r.ey)})}),Os=$(function(e,r){var n=r.a,a=r.b;return o(Ne,n,Ze(a,{B:o(al,Us(e),a.B)}))}),Ys=$(function(e,r){var n=r.a,a=r.b;return z(n,e(a))}),qs=y(function(e,r,n){var a=n.a,t=n.b,i=t.B;return o(Ne,a,Ze(t,{B:o(Ys,o(e,i.a,r),i)}))}),Zs=E(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Ze(a,{aL:!a.aL});case 2:var t=n.a;return Ze(a,{G:p(_s,e,t,a.G)});case 3:var i=n.a;return Ze(a,{G:o(Os,i,a.G)});case 4:var c=n.a;return Ze(a,{G:p(qs,r,c,a.G)});default:var l=n.a;return Ze(a,{G:o(Ls,l,a.G)})}}),Ks=$(function(e,r){return o(Ne,Ba,{B:z(e,r(e)),ab:L,T:L})}),Qs=r$,Ti=Qs(L),pa=jv,Tn=Rv,ed=i$("tick",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({b1:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Me({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",pa(Tn)))},o(M,"left",Z))},o(M,"pressedKeys",pa(Tn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Me({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Me({eV:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Me({eB:r,eC:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e))))),rd=function(e){return{$:4,a:e}},nd={$:0},ad=sc,Xe=$(function(e,r){return o(hc,e,ad(r))}),O=Xe("className"),td=function(e){var r=e.b.B;return r.b},ba=Xe("id"),od=f$,ga=od,id=s$,se=id,cd={$:1},ld=function(e){return{$:3,a:e}},ud=function(e){return{$:5,a:e}},Ci=jr("a"),mo=jr("button"),vd=zn("d"),dl=bc("http://www.w3.org/2000/svg"),$d=dl("path"),fd=dl("svg"),sd=zn("viewBox"),gn=function(e){return o(fd,_([sd("0 0 100 100"),o(se,"width","100%"),o(se,"height","100%")]),_([o($d,_([vd(e)]),L)]))},Li=function(e){return o(Xe,"href",m$(e))},qr={eF:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",eP:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",eU:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",fl:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",fm:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",fn:"M0.308493 76.0121L0.407318 0.129349L65.1231 39.7534L38.4184 37.6527L64.5556 84.3746L38.6298 98.8781L12.4925 52.1562L0.308493 76.0121Z",fq:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",fA:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",fK:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",fM:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",f$:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},dd=function(e){return{$:0,a:e}},ml=gc,pl=$(function(e,r){return o(ml,e,dd(r))}),po=function(e){return o(pl,"click",Me(e))},Pi=Xe("target"),md=Xe("title"),zt=$(function(e,r){if(r.$===-2)return ar;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return S(X,n,a,o(e,a,t),o(zt,e,i),o(zt,e,c))}),pd=gt,fr=pd,bd=function(e){return p(no,y(function(r,n,a){return o(A,n,a)}),L,e)},gd=$(function(e,r){return{$:3,a:e,b:r}}),hd=$(function(e,r){return{$:2,a:e,b:r}}),_d=$(function(e,r){return{$:0,a:e,b:r}}),wd=$(function(e,r){return{$:1,a:e,b:r}}),Va=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),yd=C(Va,0/255,0/255,0/255,1),xd=sc,Sd=$(function(e,r){return o(hc,e,xd(r))}),Td=Sd("checked"),Ue=sv,Cd=y(function(e,r,n){return le(o(Sn,e-zr(n),Fa(r)),n)}),ha=av,bl=function(e){var r=function(n){return n<10?Ae(n):Fa(cl(87+n))};return e<16?r(e):le(bl(e/16|0),r(o(ha,16,e)))},Ld=o(te,bl,o(Cd,2,"0")),bo=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aH:t,b0:a,b7:n,cG:r}},Pd=function(e){var r=bo(e),n=r.cG,a=r.b7,t=r.b0;return o(Pr,"",o(A,"#",o(re,o(te,Ue,Ld),_([n*255,a*255,t*255]))))},kt=Xe("htmlFor"),Mt=$(function(e,r){if(r.$)return Y;var n=r.a;return e(n)}),_a=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return e(n)}}),zd=y(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(A,t,n)}),go=$(function(e,r){return p(dr,zd(e),L,r)}),gl=E(function(e,r,n,a){return{e_:r,e9:e,fg:n,fD:a}}),kd=R$,Md=Dv,Dd=$(function(e,r){if(r.$)return ye(e);var n=r.a;return ue(n)}),Ad=E$,Bd=function(e){return o(Ad,{et:!1,fc:!1},e)},ho=function(e){if(e.b){var r=e.a;return e.b,ne(r)}else return Y},Fd=$(function(e,r){if(r.$){var a=r.a;return ye(a)}else{var n=r.a;return ue(e(n))}}),Vd=function(e){return{$:2,a:e}},Ed=function(e){return{$:0,a:e}},Rd=function(e){return{$:1,a:e}},Za=$(function(e,r){return rr(r)-rr(e)}),Ka=y(function(e,r,n){var a=rr(n);return J(rr(e),a)<1&&J(a,rr(r))<1}),jd=$(function(e,r){var n=function(t){return J(t,e)<0?ue(t):ye(Rd(r))},a=p(Ka,"0","9",r)?ue(o(Za,"0",r)):p(Ka,"a","z",r)?ue(10+o(Za,"a",r)):p(Ka,"A","Z",r)?ue(10+o(Za,"A",r)):ye(Ed(r));return o(_a,n,a)}),hl=$(function(e,r){var n=tn(r);if(n.$===1)return ue(0);var a=n.a,t=a.a,i=a.b;return o(_a,function(c){return o(_a,function(l){return ue(c+l*e)},o(hl,e,i))},o(jd,e,t))}),Nd=$(function(e,r){return 2<=e&&e<=36?o(hl,e,Lt(r)):ye(Vd(e))}),Gd=Nd(16),Hd=y(function(e,r,n){return C(Va,e,r,n,1)}),_l=E(function(e,r,n,a){return C(Va,e,r,n,a)}),cn=nv,Wd=$(function(e,r){var n=o(cn,10,e);return Ue(r*n)/n}),Xd=Tv,Id=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=il(n);if(a.b&&!a.b.b){var t=a.a;return Md(_([t,t]))}else return n};return o(te,Xd,o(te,function(n){return o(Te,function(a){return p(kd,1,a,n)},Bd(e))},o(te,Mt(ho),o(te,Te(function(n){return n.fD}),o(te,Te(go(kr)),o(te,Dd("Parsing hex regex failed"),_a(function(n){var a=o(re,o(te,r,o(te,Gd,Fd(qf))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,s=v.a.a;return ue(C(_l,t/255,c/255,u/255,o(Wd,2,s/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,m=d.b,u=m.a.a;return ue(p(Hd,t/255,c/255,u/255))}else break e;return ye("Parsing ints from hex failed")})))))))}(),wa=jr("input"),Dt=jr("label"),At=Xe("name"),wl=$(function(e,r){return p(dr,M,r,e)}),Jd=o(wl,_(["target","checked"]),Z),Ud=function(e){return o(pl,"change",o(sa,e,Jd))},Od=function(e){return z(e,!0)},Yd=function(e){return{$:1,a:e}},qd=$(function(e,r){return o(ml,e,Yd(r))}),Zd=o(wl,_(["target","value"]),Tn),_o=function(e){return o(qd,"input",o(sa,Od,o(sa,e,Zd)))},yl=Xe("max"),xl=Xe("min"),Sl=function(e){return o(Xe,"step",e)},ya=Xe("type"),wo=Xe("value"),zi=function(e){var r=e.b9,n=e.cW,a=e.cp,t=e.cl,i=e.cP,c=e.ct;return o(I,L,_([o(Dt,_([kt(r)]),_([o(I,_([O("relative w-full")]),_([o(I,_([O("inline-block")]),_([fr(r)])),o(I,_([O("inline-block float-right")]),_([fr(be(n))]))]))])),o(wa,_([ya("range"),o(se,"width","100%"),ba(r),At(r),xl(be(a)),yl(be(t)),wo(be(n)),Sl(be(i)),_o(o(te,fo,o(te,$r(42),c)))]),L)]))},Kd=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Qd=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(I,L,_([o(I,_([O("mb-2")]),_([o(Dt,_([kt(e)]),_([fr(e)]))])),o(wa,_([ya("checkbox"),ba(e),At(e),Ud(gd(e)),Td(c)]),L)]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return zi({b9:e,cl:i,cp:t,ct:_d(e),cP:.01*(i-t),cW:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return zi({b9:e,cl:i,cp:t,ct:o(te,Ue,wd(e)),cP:1,cW:c});default:var c=r.a;return o(I,L,_([o(I,_([o(se,"margin-bottom","6px")]),_([o(Dt,_([kt(e)]),_([fr(e)]))])),o(wa,_([ya("color"),o(se,"width","100%"),o(se,"height","26px"),o(se,"padding","0px"),ba(e),At(e),_o(function(l){return o(hd,e,o(Kd,yd,Id(l)))}),wo(Pd(c))]),L)]))}}),em=function(e){return o(I,_([O("p-4 border-y-[0.5px] border-white20")]),_([o(I,_([O("text-lg pb-2")]),_([fr(e.fd)])),o(I,_([O("pl-2 pr-2")]),bd(o(zt,Qd,e.av)))]))},rm=function(e){return o(I,_([O("text-xs text-white60")]),o(re,em,e))},nm=function(e){return o(I,_([O("absolute left-[104px] bottom-2 text-sm text-white40")]),_([fr("clock: "+o($l,3,on(e).b1))]))},am=function(e){e.a;var r=e.b.T;return o(Te,function(n){return Ue(60/(on(e).b1-n))},o(Te,o(te,Qf,function(n){return n.b1}),ho(o(rl,59,r))))},tm=function(e){return o(I,_([O("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=am(e);if(r.$===1)return _([fr("... Fps")]);var n=r.a;return _([fr(Ae(n)+" Fps")])}())},om=function(e){return{$:0,a:e}},im=function(e){var r=e.b.T;return Fr(r)},cm=function(e){var r=e.b.T;e.b.B;var n=e.b.ab;return Fr(r)+1+Fr(n)},lm=function(e){return o(wa,_([O("absolute w-full"),ya("range"),xl(Ae(0)),yl(Ae(cm(e)-1)),wo(Ae(im(e))),Sl(Ae(1)),_o(o(te,fo,o(te,$r(42),o(te,Ue,om))))]),L)},ki={$:1},um={$:3},vm={$:2},Tl=function(e){return!e.b},Mi=$(function(e,r){return o(mo,_([O("px-2 bg-black40"),O(r),po(e)]),_([fr("REC")]))}),Di=$(function(e,r){return o(mo,_([O("absolute left-[60px] mx-1 px-1 bg-black40"),po(r)]),_([o(I,_([O("w-4 h-6 fill-white80")]),_([gn(e)]))]))}),$m=function(e){var r=e.a,n=e.b.ab;return o(I,_([O("py-1")]),_([function(){switch(r.$){case 0:return o(Mi,ki,"text-red-500 font-bold");case 1:return o(Mi,vm,"text-white80 font-bold");default:return o(I,L,L)}}(),function(){switch(r.$){case 0:return o(I,L,L);case 1:return Tl(n)?o(I,L,L):o(Di,qr.fm,um);default:return o(Di,qr.fl,ki)}}()]))},fm=function(e){return o(I,_([O("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),_([lm(e),$m(e),tm(e),nm(e)]))},sm=function(e){var r=e.a;return _r(r,Ba)},dm=$(function(e,r){var n=sm(r.G)?o(I,L,L):o(I,_([O("absolute pointer-events-none w-8 h-8"),o(se,"left",be(e.fn.fT+.5*e.cM.fR)+"px"),o(se,"top",be(-e.fn.fX+.5*e.cM.eV)+"px")]),_([o(I,_([O(e.fn.e1?"fill-black80":"fill-white40")]),_([gn(qr.fn)]))]));return o(I,L,_([n]))}),mm=$(function(e,r){var n=o(mo,_([O(r.aL?"fill-black20 hover:fill-black80":"fill-white40 hover:fill-white80"),po(cd),md("Distraction Free Mode")]),_([gn(qr.f$)])),a=o(I,_([O("absolute w-8 bottom-12")]),_([o(Ci,_([O("fill-twitterBlue40 hover:fill-twitterBlue"),Li("https://twitter.com/AzizErkalSelman"),Pi("_blank")]),_([gn(qr.fK)]))])),t=o(I,_([O("absolute w-8 bottom-2")]),_([o(Ci,_([O("fill-githubCat40 hover:fill-githubCat"),Li("https://github.com/erkal/elm-3d-playground-exploration"),Pi("_blank")]),_([gn(qr.eP)]))]));return r.aL?o(I,_([O("fixed w-10 h-10 p-1")]),_([n])):o(I,L,_([o(I,_([O("absolute h-full w-[40px] p-1 border-r-[0.5px] border-white20 bg-black80")]),_([n,a,t])),o(I,_([O("absolute overflow-y-auto left-10 w-[260px] bg-black20 border-x-[0.5px] border-white20"),o(se,"height",be(e.cM.eV-80)+"px")]),_([o(ga,ld,rm(on(r.G).ey))])),o(I,_([O("absolute bottom-0 left-10 h-20"),o(se,"width",e.cM.fR>600?"600px":be(e.cM.fR-40)+"px")]),_([o(ga,ud,fm(r.G))])),o(dm,e,r)]))}),pm=y(function(e,r,n){var a=td(n.G),t=on(n.G);return o(I,_([O("bg-black40"),O("select-none"),O("antialiased"),O("font-mono"),o(se,"width",be(t.cM.fR)+"px"),o(se,"height",be(t.cM.eV)+"px")]),_([o(I,_([O("fixed")]),_([o(ga,Yc(nd),o(e,t,a))])),o(I,_([ba("gui")]),_([o(mm,t,n),o(ga,rd,o(r,t,a))]))]))}),bm=We(function(e,r,n,a,t,i){var c=$(function(u,v){return z(C(Zs,r,i,u,v),Ti)}),l=function(u){var v=o(qc,n,u.e0);return z({aL:u.e0.cM.fR<500,G:o(Ks,v,a)},Ti)};return bs({e$:l,fE:Yc(ed(ts)),fL:c,fO:o(pm,e,t)})}),gm=E(function(e,r,n,a){return we(bm,e,r,n,a,$(function(t,i){return o(I,L,L)}),y(function(t,i,c){return c}))}),hm=function(e){return{}},_m=y(function(e,r,n){return{av:n,e2:r,fd:e}}),Cl=ar,wm=function(e){return p(kn,$(function(r,n){var a=r.a,t=r.b;return p(pn,a,t,n)}),Cl,e)},ym=y(function(e,r,n){return p(_m,e,r,wm(n))}),Ai=ym,Xn=y(function(e,r,n){var a=r.a,t=r.b;return z(e,o(tl,z(a,t),n))}),xm=_([p(Ai,"Parameters",!0,_([p(Xn,"a",z(0,3),1)])),p(Ai,"Colors and light",!0,_([p(Xn,"lux",z(2,5),5),p(Xn,"intensity above",z(0,300),60),p(Xn,"intensity below",z(0,300),290)]))]),Sm=$(function(e,r){return r}),Tm=lv,br=dv,Cm=$(function(e,r){var n=e,a=r,t=a.c$-n.c$,i=a.fX-n.fX,c=a.fT-n.fT,l=o(Pe,U(c),o(Pe,U(i),U(t)));if(l){var u=t/l,v=i/l,s=c/l,d=br(s*s+v*v+u*u);return ne({fT:s/d,fX:v/d,c$:u/d})}else return Y}),ra=function(e){return e},yo=$(function(e,r){var n=e,a=r;return{fT:a.fX*n.c$-a.c$*n.fX,fX:a.c$*n.fT-a.fT*n.c$,c$:a.fT*n.fX-a.fX*n.fT}}),na=function(e){var r=e,n=o(Pe,U(r.fT),o(Pe,U(r.fX),U(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=br(i*i+t*t+a*a);return ne({fT:i/c,fX:t/c,c$:a/c})}else return Y},xa=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),Lm=$(function(e,r){var n=e,a=r;return a.fT*n.fT+a.fX*n.fX+a.c$*n.c$}),Ll=$(function(e,r){var n=e,a=r;return J(a,n)>0}),Pm=$(function(e,r){var n=e,a=r;return J(a,n)<0}),zm=$(function(e,r){var n=e,a=r;return{fT:a.fT-n.fT,fX:a.fX-n.fX,c$:a.c$-n.c$}}),km=$(function(e,r){var n=e,a=r,t=a.fT*n.fT+a.fX*n.fX+a.c$*n.c$;return{fT:n.fT*t,fX:n.fX*t,c$:n.c$*t}}),Mm=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},Ke=0,Pl={fT:0,fX:0,c$:0},Dm=y(function(e,r,n){return o(Mt,function(a){var t=o(zm,o(km,a,r),r);return o(Mt,function(i){var c=o(yo,r,e),l=o(Lm,n,c),u=o(Ll,Ke,l)?c:o(Pm,Ke,l)?Mm(c):Pl;return o(Te,function(v){return B(a,i,v)},na(u))},na(t))},na(e))}),Am=function(e){var r=e,n=U(r.c$),a=U(r.fX),t=U(r.fT);if(J(t,a)<1)if(J(t,n)<1){var i=br(r.c$*r.c$+r.fX*r.fX);return{fT:0,fX:-r.c$/i,c$:r.fX/i}}else{var i=br(r.fX*r.fX+r.fT*r.fT);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}else if(J(a,n)<1){var i=br(r.c$*r.c$+r.fT*r.fT);return{fT:r.c$/i,fX:0,c$:-r.fT/i}}else{var i=br(r.fT*r.fT+r.fX*r.fX);return{fT:-r.fX/i,fX:r.fT/i,c$:0}}},xo=function(e){var r=Am(e),n=r,a=n,t=e,i=t,c={fT:i.fX*a.c$-i.c$*a.fX,fX:i.c$*a.fT-i.fT*a.c$,c$:i.fT*a.fX-i.fX*a.fT};return z(r,c)},Yr=function(e){var r=e;return r},Oe=function(e){return e},Bm=$(function(e,r){var n=xo(e),a=n.a,t=n.b;return Oe({cu:r,cZ:a,c_:t,c0:e})}),Fm=function(e){var r=o(xa,e.aR,e.dc),n=Yr(e.ee),a=o(yo,r,n),t=p(Dm,r,n,a);if(t.$){var v=na(r);if(v.$){var d=xo(e.ee),m=d.a,f=d.b;return Oe({cu:e.dc,cZ:f,c_:e.ee,c0:m})}else{var s=v.a;return o(Bm,s,e.dc)}}else{var i=t.a,c=i.a,l=i.b,u=i.c;return Oe({cu:e.dc,cZ:u,c_:l,c0:c})}},je={fT:0,fX:0,c$:0},Vm=function(e){return{$:0,a:e}},de=function(e){var r=e;return U(r)},aa=function(e){var r=e;return .5*r},Em=cv,Rm=function(e){var r=e;return Em(r)},jm=function(e){var r=aa(de(e.ef)),n=Rm(r);return{cF:Vm(n),cX:e.cX}},ur=function(e){return e},So=ur({fT:0,fX:1,c$:0}),tr=function(e){return e},Nm=function(e){var r=e.aR,n=e.dc,a=e.ee;return jm({ef:tr(2*Tm(.5)),cX:Fm({dc:ra(n),aR:ra(r),ee:o($r,So,o(Cm,je,ra(a)))})})},Er=ov,Gm=$(function(e,r){return(r-Uc(r/e)*e)/e}),en=tv,Hm=function(e){return 2*en*e},zl=E(function(e,r,n,a){return e+(r-e)*(1+Er(Hm(o(Gm,n,a))))/2}),Wm=function(e){return Nm({dc:{fT:10,fX:C(zl,-20,20,20,e.b1),c$:60},aR:{fT:0,fX:0,c$:0},ee:{fT:0,fX:1,c$:0}})},To=function(e){return e},kl=y(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),Xm=function(e){var r=e;return r},Im=function(e){var r=p(kl,1667,25e3,Xm(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return To({fT:n,fX:a})},Jm=function(e){return e},Um=function(e){return{$:0,a:e}},Om=Um,Ym={$:3},qm=Ym,Zm=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Km=Zm,Qm=$(function(e,r){return r.b?p(dr,A,r,e):e}),Ge=function(e){return p(dr,Qm,L,e)},Co=$(function(e,r){return Ge(o(re,e,r))}),e0=function(e){return{$:1,a:e}},r0=e0,n0=function(e){return o(zn,"height",Ae(e))},a0=function(e){return v$(d$(e))},t0=a0,o0=function(e){return{$:2,a:e}},i0=o0,c0=function(e){return o(Pr,"",e)},l0=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Ue(l*1e3)/1e3},c=function(l){return Ue(l*1e4)/100};return c0(_(["rgba(",be(c(r)),"%,",be(c(n)),"%,",be(c(a)),"%,",be(i(t)),")"]))},u0=$(function(e,r){switch(r.$){case 0:return o(ff,e,r);case 1:return o(sf,e,r);case 2:return o(df,e,r);case 3:return o(mf,e,r);case 4:return o(pf,e,r);default:return o(bf,e,r)}}),v0=$(function(e,r){switch(r.$){case 0:return o(G$,e,r);case 1:return o(H$,e,r);case 2:return o(W$,e,r);case 3:return o(X$,e,r);case 4:return o(I$,e,r);case 5:return o(J$,e,r);case 6:return o(U$,e,r);case 7:return o(O$,e,r);default:return Y$(e)}}),$0=y(function(e,r,n){return p($f,e,r,n)}),Bi=function(e){var r=e;return r},ln=Pf,Qa=C(ln,1,1,1,1),Ye=y(function(e,r,n){return o(re,function(a){return o(a,r,n)},e)}),f0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),s0=$(function(e,r){var n=e,a=r.fT,t=r.fX;return p(f0,n*a/t,n,n*(1-a-t)/t)}),An=yf,d0=function(e){var r=e.a,n=e.b,a=e.c;return p(An,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Ea=$(function(e,r){return d0(o(s0,e,r))}),Ml=$(function(e,r){return{dk:_r(e.dk,r.dk),q:e.q*r.q+e.r*r.t+e.s*r.w,r:e.q*r.r+e.r*r.u+e.s*r.x,s:e.q*r.s+e.r*r.v+e.s*r.y,t:e.t*r.q+e.u*r.t+e.v*r.w,u:e.t*r.r+e.u*r.u+e.v*r.x,v:e.t*r.s+e.u*r.v+e.v*r.y,w:e.w*r.q+e.x*r.t+e.y*r.w,x:e.w*r.r+e.x*r.u+e.y*r.x,y:e.w*r.s+e.x*r.v+e.y*r.y,H:r.H+(e.H*r.q+e.I*r.t+e.J*r.w)*r.bV,I:r.I+(e.H*r.r+e.I*r.u+e.J*r.x)*r.bV,J:r.J+(e.H*r.s+e.I*r.v+e.J*r.y)*r.bV,bV:e.bV*r.bV}}),Qe=Bf,m0=function(e){return Qe({ds:e.q,dt:e.t,du:e.w,dv:e.H,dw:e.r,dx:e.u,dy:e.x,dz:e.I,dA:e.s,dB:e.v,dC:e.y,dD:e.J,dE:0,dF:0,dG:0,dH:1})},et=he(function(e,r,n,a,t){var i=a.dk?1:-1,c=C(ln,a.bV,a.bV,a.bV,i);return we(t,e,c,m0(a),a.dk,r,n)}),Dl=We(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,s=n,d=o(Ml,c,a),m=l,f=i;e=u,r=v,n=s,a=d,t=m,i=f;continue e;case 1:var g=t.b,b=o(A,S(et,e,r,n,a,g),i.M);return{M:b,U:i.U,fx:i.fx};case 3:var w=t.b,x=o(A,S(et,e,r,n,a,w),i.U);return{M:i.M,U:x,fx:i.fx};case 2:var h=t.a,T=o(A,S(et,e,r,n,a,h),i.fx);return{M:i.M,U:i.U,fx:T};default:var k=t.a;return p(kn,C(Dl,e,r,n,a),i,k)}}),p0=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),Al=p0,Lo=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),b0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Lo,518,r,n,a)},g0=$(function(e,r){return{$:6,a:e,b:r}}),h0=g0,Bl=_([b0({V:1,W:0,Z:!1}),C(Al,!1,!1,!1,!1),o(h0,0,1)]),rn=519,Po=8,Fl=15,Zr=7681,_0={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ae=N$,w0=$(function(e,r){return{$:0,a:e,b:r}}),y0=w0({c8:1,dh:0,dQ:5}),De=_f,x0=y0(_([{dY:o(De,-1,-1)},{dY:o(De,1,-1)},{dY:o(De,-1,1)},{dY:o(De,1,1)}])),S0={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"dY"},uniforms:{}},T0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:s}}}}}}}}}}}},zo=y(function(e,r,n){var a=e.cH,t=e.ci,i=e.cY,c=$(function(v,s){var d=v;return s(d)}),l=$(function(v,s){var d=v;return s(d)}),u=function(v){return o(te,c(v.bl),o(te,l(v.a8),o(te,l(v.bt),l(v.bu))))};return o(u,n,o(u,r,p(T0,a,t,i)))}),ko=function(e){return p(zo,{ci:e.ci,cH:e.cH,cY:e.cY},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu},{a8:e.a8,bl:e.bl,bt:e.bt,bu:e.bu})},Mo=function(e){return S(ae,_([ko(e),C(Al,!1,!1,!1,!1)]),S0,_0,x0,{})},C0=Mo({a8:Zr,ci:0,cH:Po,bl:rn,cY:Fl,bt:Zr,bu:Zr}),L0=516,Fi=5386,xe=7680,P0=function(e){return o(cn,2,e+4)},Vl=function(e){return Mo({a8:xe,ci:Fl,cH:Po,bl:L0,cY:P0(e),bt:Fi,bu:Fi})},z0=y(function(e,r,n){return Ge(_([p(Ye,e,n,Bl),_([Vl(r),C0])]))}),k0=$(function(e,r){return Ge(o(Gc,z0(e),r))}),M0=function(e){var r=e.Z,n=e.W,a=e.V;return C(Lo,513,r,n,a)},D0=M0({V:1,W:0,Z:!0}),A0=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},B0=function(e){var r=e.bT,n=e.bE,a=e.by,t=e.bv,i=e.bA,c=e.aH,l=$(function(u,v){var s=u.a,d=u.b,m=u.c,f=v.a,g=v.b,b=v.c;return A0(s)(d)(m)(f)(g)(b)(r)(n)(a)(t)});return o(l,i,c)},F0=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Vi=$(function(e,r){var n=e,a=r;return p(F0,32774,n,a)}),V0=1,Ei=771,E0=770,Do=B0({bv:0,aH:o(Vi,V0,Ei),by:0,bA:o(Vi,E0,Ei),bE:0,bT:0}),Xr=_([D0,Do]),R0=function(e){var r=e;return r.dJ},j0=function(e){var r=e;return r.dK},El=function(e){var r=e;return r.dL},N0=function(e){var r=e;return r.dM},G0=function(e){var r=e;return r.dN},Rl=function(e){var r=e;return r.dO},vr=$(function(e,r){var n=e,a=r;return a-n}),jl=function(e){return B(o(vr,N0(e),R0(e)),o(vr,G0(e),j0(e)),o(vr,Rl(e),El(e)))},Nr=function(e){var r=e;return r.cu},Ri=function(e){var r=e;return Nr(r)},H0=function(e){return e},W0=function(e){return Oe({cu:H0({fT:e.H,fX:e.I,c$:e.J}),cZ:ur({fT:e.q,fX:e.r,c$:e.s}),c_:ur({fT:e.t,fX:e.u,c$:e.v}),c0:ur({fT:e.w,fX:e.x,c$:e.y})})},rt=$(function(e,r){var n=e,a=r,t=n.c0,i=t,c=n.c_,l=c,u=n.cZ,v=u;return{fT:a.fT*v.fT+a.fX*v.fX+a.c$*v.c$,fX:a.fT*l.fT+a.fX*l.fX+a.c$*l.c$,c$:a.fT*i.fT+a.fX*i.fX+a.c$*i.c$}}),Nl=$(function(e,r){var n=e,a=r,t=n.cu,i=t,c=a.fT-i.fT,l=a.fX-i.fX,u=a.c$-i.c$,v=n.c0,s=v,d=n.c_,m=d,f=n.cZ,g=f;return{fT:c*g.fT+l*g.fX+u*g.c$,fX:c*m.fT+l*m.fX+u*m.c$,c$:c*s.fT+l*s.fX+u*s.c$}}),Sr=function(e){var r=e;return r.cZ},Tr=function(e){var r=e;return r.c_},Cr=function(e){var r=e;return r.c0},Gl=$(function(e,r){return{cu:o(Nl,e,Nr(r)),cZ:o(rt,e,Sr(r)),c_:o(rt,e,Tr(r)),c0:o(rt,e,Cr(r))}}),Bt=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),Sa=function(e){var r=e;return r},ce=$(function(e,r){var n=e,a=r;return o(Pe,n,a)}),ta=$(function(e,r){return J(e,r)<0?e:r}),fe=$(function(e,r){var n=e,a=r;return o(ta,n,a)}),X0=$(function(e,r){var n=Sa(r),a=Sa(e);return{dJ:o(ce,a.dJ,n.dJ),dK:o(ce,a.dK,n.dK),dL:o(ce,a.dL,n.dL),dM:o(fe,a.dM,n.dM),dN:o(fe,a.dN,n.dN),dO:o(fe,a.dO,n.dO)}}),He=function(e){var r=e;return r},I0=function(e){var r=e;return B(r.fT,r.fX,r.c$)},hn=$(function(e,r){var n=e,a=r;return a+n}),J0=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=aa(de(a)),c=aa(de(n)),l=aa(de(t)),u=I0(r),v=u.a,s=u.b,d=u.c;return{dJ:o(hn,c,v),dK:o(hn,i,s),dL:o(hn,l,d),dM:o(vr,c,v),dN:o(vr,i,s),dO:o(vr,l,d)}}),ji=E(function(e,r,n,a){var t=n.ev,i=2*n.eT*r,c=2*n.eS*r,l=2*n.eR*r,u=t.c$*r,v=t.fX*r,s=t.fT*r,d=He(Cr(e)),m=U(l*d.fT)+U(c*d.fX)+U(i*d.c$),f=He(Tr(e)),g=U(l*f.fT)+U(c*f.fX)+U(i*f.c$),b=He(Sr(e)),w=U(l*b.fT)+U(c*b.fX)+U(i*b.c$),x=o(J0,B(w,g,m),o(Nl,e,p(Bt,s,v,u)));if(a.$)return ne(x);var h=a.a;return ne(o(X0,h,x))}),Ft=E(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 1:var c=t.a,l=C(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 2:var f=e,g=r,b=n,w=i;e=f,r=g,n=b,a=w;continue e;case 3:var c=t.a,l=C(ji,e,r,c,n),f=e,g=r,b=l,w=i;e=f,r=g,n=b,a=w;continue e;case 4:var u=t.a,f=e,g=r,b=C(Ft,e,r,n,u),w=i;e=f,r=g,n=b,a=w;continue e;default:var v=t.a,s=t.b,d=o(Gl,W0(v),e),m=r*v.bV,f=e,g=r,b=C(Ft,d,m,n,_([s])),w=i;e=f,r=g,n=b,a=w;continue e}}else return n}),Gr=xf,Hr=Sf,Wr=Tf,Hl=function(e){return{$:4,a:e}},U0=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(A,n,r);e=t,r=i;continue e}else return r}),Bn=function(e){return Hl(o(U0,e,L))},O0={dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:0,I:0,J:0,bV:1},Y0=function(e){var r=e;return r},Ni=Mo({a8:Zr,ci:0,cH:Po,bl:rn,cY:255,bt:Zr,bu:Zr}),q0=function(e){var r=e,n=o(Pe,U(r.fT),o(Pe,U(r.fX),U(r.c$)));if(n){var a=r.c$/n,t=r.fX/n,i=r.fT/n,c=br(i*i+t*t+a*a);return c*n}else return Ke},ke={by:0,eu:!1,bE:0,cD:0,bT:0,cT:0,fT:0,fX:0,c$:0},Ee=$(function(e,r){var n=e,a=r;return Qe({ds:n.fT,dt:n.bT,du:a.fT,dv:a.bT,dw:n.fX,dx:n.bE,dy:a.fX,dz:a.bE,dA:n.c$,dB:n.by,dC:a.c$,dD:a.by,dE:n.cT,dF:n.cD,dG:a.cT,dH:a.cD})}),dn=z({bd:o(Ee,ke,ke),bJ:o(Ee,ke,ke),bK:o(Ee,ke,ke),bL:o(Ee,ke,ke)},C(ln,0,0,0,0)),Q=$(function(e,r){var n=r;return e*n}),Gi=function(e){var r=e;return-r},Wl=514,Xl=function(e){var r=e.Z,n=e.W,a=e.V;return C(Lo,515,r,n,a)},Il=240,Z0=_([Xl({V:1,W:0,Z:!0}),ko({a8:xe,ci:Il,cH:0,bl:Wl,cY:0,bt:xe,bu:xe}),Do]),K0=$(function(e,r){var n=e,a=r.fe,t=r.eO,i=r.en,c=de(a),l=c,u=de(t),v=u,s=n.cF;if(s.$){var m=s.a;return Tt(v)?Qe({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:0,dD:-1,dE:0,dF:0,dG:0,dH:1}):Qe({ds:2/(i*m),dt:0,du:0,dv:0,dw:0,dx:2/m,dy:0,dz:0,dA:0,dB:0,dC:-2/(v-l),dD:-(v+l)/(v-l),dE:0,dF:0,dG:0,dH:1})}else{var d=s.a;return Tt(v)?Qe({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-1,dD:-2*l,dE:0,dF:0,dG:-1,dH:0}):Qe({ds:1/(i*d),dt:0,du:0,dv:0,dw:0,dx:1/d,dy:0,dz:0,dA:0,dB:0,dC:-(v+l)/(v-l),dD:-2*v*l/(v-l),dE:0,dF:0,dG:-1,dH:0})}}),In=$(function(e,r){return(1&e>>r)===1?0:1}),Q0=function(e){return _([Xl({V:1,W:0,Z:!0}),ko({a8:xe,ci:Il,cH:e,bl:Wl,cY:0,bt:xe,bu:xe}),Do])},ep=y(function(e,r,n){return Ge(o(re,function(a){var t=a<<4,i=C(ln,o(In,a,0),o(In,a,1),o(In,a,2),o(In,a,3));return p(Ye,e,z(r,i),Q0(t))},o(Vr,1,o(cn,2,n)-1)))}),hr=function(e){var r=e;return{fT:-r.fT,fX:-r.fX,c$:-r.c$}},Kr=function(e){var r=e;return r},rp=Ff,Hi=function(e){var r=e;return hr(Cr(r))},Jl=ur({fT:1,fX:0,c$:0}),Ao=Jl,Bo=So,Fo=ur({fT:0,fX:0,c$:1}),Ul=Fo,np={cu:je,cZ:Ao,c_:Bo,c0:Ul},Fn=function(e){var r=e;return r},ap=function(e){var r=Fn(Nr(e)),n=He(Cr(e)),a=He(Tr(e)),t=He(Sr(e));return Qe({ds:t.fT,dt:a.fT,du:n.fT,dv:r.fT,dw:t.fX,dx:a.fX,dy:n.fX,dz:r.fX,dA:t.c$,dB:a.c$,dC:n.c$,dD:r.c$,dE:0,dF:0,dG:0,dH:1})},tp=$(function(e,r){var n=r;return ap(o(Gl,n,e))}),op=function(e){return o(tp,np,e)},ip=function(e){var r=e;return r.cX},cp=function(e){var r=e;return Sr(r)},lp=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),up=function(e){var r=e;return Tr(r)},vp=function(e){var r=ip(e.es),n=Oe({cu:Ri(r),cZ:cp(r),c_:up(r),c0:hr(Hi(r))}),a=Bn(e.aP),t=a,i=C(Ft,n,1,Y,_([t]));if(i.$===1)return L;var c=i.a,l=op(r),u=o(Q,.99,o(ce,de(e.ex),Gi(El(c)))),v=jl(c),s=v.a,d=v.b,m=v.c,f=q0(p(lp,s,d,m)),g=o(Q,1.01,o(hn,f,Gi(Rl(c)))),b=o(K0,e.es,{en:e.en,eO:g,fe:u}),w=rp(b).dH,x=w?He(hr(Hi(r))):Kr(Ri(r)),h=function(){var oe=e.fJ;switch(oe.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var me=oe.a;return z(3,me);case 4:var me=oe.a;return z(4,me);default:return z(5,0)}}(),T=h.a,k=h.b,G=e.eM,j=G,R=o(Ea,j,e.fQ),N=R,H=Qe({ds:0,dt:x.fT,du:Gr(N),dv:e.d8,dw:0,dx:x.fX,dy:Hr(N),dz:Y0(f),dA:0,dB:x.c$,dC:Wr(N),dD:T,dE:0,dF:w,dG:0,dH:k}),F=we(Dl,H,l,b,O0,t,{M:L,U:L,fx:L}),q=e.e8;switch(q.$){case 0:var K=q.a;return Ge(_([p(Ye,F.M,z(K,Qa),Xr),p(Ye,F.U,dn,Xr)]));case 1:var K=q.a;return Ge(_([p(Ye,F.M,dn,Xr),_([Ni]),p(Ye,F.fx,K.bd,Bl),_([Vl(0)]),p(Ye,F.M,z(K,Qa),Z0),p(Ye,F.U,dn,Xr)]));default:var ie=q.a,ve=q.b;return Ge(_([p(Ye,F.M,z(ve,Qa),Xr),_([Ni]),o(k0,F.fx,ie),p(ep,F.M,ve,Fr(ie)),p(Ye,F.U,dn,Xr)]))}},$p=function(e){return o(zn,"width",Ae(e))},fp=$(function(e,r){var n=_([r0(1),i0(0),Om(!0),C(Km,0,0,0,0)]),a=function(){var T=e.el;switch(T.$){case 0:return B(n,"0",1);case 1:return B(o(A,qm,n),"1",1);default:var k=T.a;return B(n,"0",k)}}(),t=a.a,i=a.b,c=a.c,l=e.aK,u=l.a,v=l.b,s=Bi(v),d=o(se,"height",Ae(s)+"px"),m=Bi(u),f=m/s,g=o(Co,function(T){return vp({en:f,es:e.es,ex:e.ex,aP:T.aP,eM:T.eM,e8:T.e8,d8:c,fJ:T.fJ,fQ:T.fQ})},r),b=o(se,"width",Ae(m)+"px"),w=e.aI,x=w,h=l0(x);return p(t0,"div",_([o(se,"padding","0px"),b,d]),_([z(i,p($0,t,_([$p(Ue(m*c)),n0(Ue(s*c)),b,d,o(se,"display","block"),o(se,"background-color",h)]),g))]))}),sp=function(e){return{$:2,a:e}},dp=function(e){return sp(e)},mp=function(e){return o(fp,{el:dp(e.b5),aI:e.aI,es:e.es,ex:e.ex,aK:e.aK},_([{aP:e.aP,eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ}]))},Wi=function(e){return e},Mr=function(e){return e},pp=function(e){var r=e;return r},Ra=function(e){var r=e;return pp(r.eo)},Ol=E(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),bp=E(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Yl=E(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),ql=E(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),gp=E(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),hp=E(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),_p=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Vo=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return C(_p,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return C(Ol,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return C(bp,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return C(Yl,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return C(hp,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return C(ql,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return C(gp,n,a,t,1);case 8:return e;case 9:return e;default:return e}},Eo={$:0},wp=ee(function(e,r,n,a,t,i,c,l){e:for(;;)if(l.b){var u=l.a,v=l.b,s=Sa(c(u)),d=o(fe,s.dM,e),m=o(ce,s.dJ,r),f=o(fe,s.dN,n),g=o(ce,s.dK,a),b=o(fe,s.dO,t),w=o(ce,s.dL,i),x=c,h=v;e=d,r=m,n=f,a=g,t=b,i=w,c=x,l=h;continue e}else return{dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t}}),yp=y(function(e,r,n){var a=Sa(e(r));return za(wp,a.dM,a.dJ,a.dN,a.dK,a.dO,a.dL,e,n)}),nt=$(function(e,r){var n=e,a=r;return J(a,n)<1}),Zl=function(e){return o(nt,e.dJ,e.dM)&&o(nt,e.dK,e.dN)&&o(nt,e.dL,e.dO)?e:{dJ:o(ce,e.dM,e.dJ),dK:o(ce,e.dN,e.dK),dL:o(ce,e.dO,e.dL),dM:o(fe,e.dM,e.dJ),dN:o(fe,e.dN,e.dK),dO:o(fe,e.dO,e.dL)}},Cn=function(e){var r=e;return r},Dr=function(e){var r=e;return r.fT},Ar=function(e){var r=e;return r.fX},Br=function(e){var r=e;return r.c$},Kl=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=Dr(n),c=Ar(n),l=Br(n),u=Dr(a),v=Ar(a),s=Br(a),d=Dr(t),m=Ar(t),f=Br(t);return Zl({dJ:o(ce,i,o(ce,u,d)),dK:o(ce,c,o(ce,v,m)),dL:o(ce,l,o(ce,s,f)),dM:o(fe,i,o(fe,u,d)),dN:o(fe,c,o(fe,v,m)),dO:o(fe,l,o(fe,s,f))})},Ql=Cf,Ce=function(e){return Ql(Fn(e))},eu=function(e){var r=e;return r},ja=function(e){return Ql(eu(e))},ru=function(e){return e},xp=$(function(e,r){var n=e,a=r,t=o(Pe,U(a.fT),o(Pe,U(a.fX),U(a.c$)));if(t){var i=a.c$/t,c=a.fX/t,l=a.fT/t,u=br(l*l+c*c+i*i);return{fT:n*l/u,fX:n*c/u,c$:n*i/u}}else return Pl}),Sp=xp(ru(1)),nu=y(function(e,r,n){var a=o(xa,r,n),t=o(xa,e,r);return Sp(o(yo,a,t))}),Tp=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=ja(p(nu,n,a,t));return B({o:i,dY:Ce(n)},{o:i,dY:Ce(a)},{o:i,dY:Ce(t)})},Cp=$(function(e,r){return{$:2,a:e,b:r}}),au=Cp({c8:3,dh:0,dQ:4}),Lp=function(e){if(e.b){var r=e.a,n=e.b,a=au(o(re,Tp,e)),t=p(yp,Kl,r,n);return C(Ol,t,e,a,0)}else return Eo},Ve=y(function(e,r,n){return B(e,r,n)}),pe=y(function(e,r,n){var a=e,t=r,i=n;return{fT:a,fX:t,c$:i}}),tu=function(){var e=Mr(1),r=Mr(1),n=Mr(1),a=o(Q,-.5,e),t=o(Q,-.5,r),i=o(Q,-.5,n),c=p(pe,i,t,a),l=o(Q,.5,e),u=p(pe,i,t,l),v=o(Q,.5,r),s=p(pe,i,v,a),d=p(pe,i,v,l),m=o(Q,.5,n),f=p(pe,m,t,a),g=p(pe,m,v,a),b=p(pe,m,t,l),w=p(pe,m,v,l);return Vo(Lp(_([p(Ve,c,g,f),p(Ve,c,s,g),p(Ve,u,b,w),p(Ve,u,w,d),p(Ve,f,g,w),p(Ve,f,w,b),p(Ve,c,d,s),p(Ve,c,u,d),p(Ve,c,f,b),p(Ve,c,b,u),p(Ve,s,w,g),p(Ve,s,d,w)])))}(),Jn={$:0},Pp=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),zp=y(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=ja(p(nu,u,l,c)),s={o:v,dY:Ce(u)},d={o:v,dY:Ce(l)},m={o:v,dY:Ce(c)};return o(A,s,o(A,d,o(A,m,n)))}),Ro=function(e){var r=e;return r.D},kp=E(function(e,r,n,a){if(r.$===1)return Y;var t=r.a;if(n.$===1)return Y;var i=n.a;if(a.$===1)return Y;var c=a.a;return ne(p(e,t,i,c))}),Vt=4294967295>>>32-xn,Et=qu,Mp=y(function(e,r,n){e:for(;;){var a=Vt&r>>>e,t=o(Et,a,n);if(t.$){var v=t.a;return o(Et,Vt&r,v)}else{var i=t.a,c=e-xn,l=r,u=i;e=c,r=l,n=u;continue e}}}),Dp=function(e){return e>>>5<<5},Ap=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?Y:J(e,Dp(n))>-1?ne(o(Et,Vt&e,i)):ne(p(Mp,a,e,t))}),jo=function(e){var r=e;return r.ah},at=$(function(e,r){return o(Ap,e,jo(r))}),Bp=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return C(kp,y(function(c,l,u){return B(c,l,u)}),o(at,a,e),o(at,t,e),o(at,i,e))};return o(go,r,Ro(e))},Fp=y(function(e,r,n){e:for(;;){var a=o(co,Fe,e),t=a.a,i=a.b;if(J(xt(t),Fe)<0)return o(Oc,!0,{z:r,l:n,p:t});var c=i,l=o(A,Jc(t),r),u=n+1;e=c,r=l,n=u;continue e}}),No=function(e){return e.b?p(Fp,e,L,0):Xc},Vp=y(function(e,r,n){return e(r(n))}),Ep=$(function(e,r){return!o(ol,o(Vp,gs,e),r)}),Rp=$(function(e,r){return p(dr,$(function(n,a){return e(n)?o(A,n,a):a}),L,r)}),jp=function(e){var r=e.a;return r},ou=$(function(e,r){var n=jp(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(Ep,a,r)?{D:r,ah:e}:{D:o(Rp,a,r),ah:e}}),Np=y(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Vn=Np({c8:1,dh:3,dQ:4}),oa=$(function(e,r){var n=Kr(r),a=Kr(e);return z(B(a.fT,a.fX,a.c$),B(n.fT,n.fX,n.c$))}),Xi=p(An,0,0,0),tt=We(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(so,o(oa,e,r),t);if(v.$){var d={o:Xi,dY:Ce(r)},m={o:Xi,dY:Ce(e)},f=u+1,g=u;return B(o(A,B(n,g,f),o(A,B(n,f,a),c)),o(A,d,o(A,m,l)),u+2)}else{var s=v.a;return B(o(A,B(n,s,a),c),l,u)}}),Gp=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,s=e(u),d=e(l),m=e(c),f=a+2,g=a+1,b=a,w=e,x=r,h=v,T=a+3,k=we(tt,s,m,f,b,r,we(tt,d,s,g,f,r,we(tt,m,d,b,g,r,t)));e=w,r=x,n=h,a=T,t=k;continue e}else{var G=t,j=G.a,R=G.b;return z(j,Be(R))}}),Hp=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,s=e(u),d=e(l),m=e(c),f=n+2,g=n+1,b=n,w=p(pn,o(oa,m,s),f,p(pn,o(oa,s,d),g,p(pn,o(oa,d,m),b,t))),x=o(A,B(b,g,f),a),h=e,T=v,k=n+3,G=x,j=w;e=h,r=T,n=k,a=G,t=j;continue e}else return B(a,t,n)}),Lr=y(function(e,r,n){var a=Bp(n),t=p(dr,zp(r),L,a),i=S(Hp,r,a,0,L,Cl),c=i.a,l=i.b,u=i.c,v=S(Gp,r,l,a,0,B(c,L,u)),s=v.a,d=v.b,m=Tl(d)?t:le(t,d);return p(Pp,e,o(ou,No(m),s),o(Vn,m,s))}),Rt=function(e){return{D:o(re,function(r){return B(3*r,3*r+1,3*r+2)},o(Vr,0,Fr(e)-1)),ah:No(Ge(o(re,function(r){var n=r.a,a=r.b,t=r.c;return _([n,a,t])},e)))}},iu=function(e){switch(e.$){case 0:return Jn;case 1:var a=e.a,r=e.b,n=o(re,Cn,r);return p(Lr,a,kr,Rt(n));case 2:var a=e.a,r=e.b,n=o(re,Cn,r);return p(Lr,a,kr,Rt(n));case 3:var a=e.a,t=e.b;return p(Lr,a,kr,t);case 4:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.dY},t);case 5:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.dY},t);case 6:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.dY},t);case 7:var a=e.a,t=e.b;return p(Lr,a,function(i){return i.dY},t);case 8:return Jn;case 9:return Jn;default:return Jn}},Ii=iu(tu),Na=function(e){var r=e;return r.aK},cu={$:0},P=cu,ge=$(function(e,r){return{$:1,a:e,b:r}}),Wp={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bB"}},Xp=1029,Ip=function(e){return{$:5,a:e}},lu=function(e){var r=e;return Ip(r)},Jp=lu(Xp),Up=1028,Op=lu(Up),Le=y(function(e,r,n){return r===1?e?o(A,Jp,n):o(A,Op,n):n}),uu={src:`
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
    `,attributes:{position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},ot=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Le,l,a,d),uu,Wp,n,{bB:e,b:c,c:i,d:v,e:t,f:u})}))}),Go={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aw"}},vu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},or=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){return S(ae,p(Le,l,a,d),vu,Go,n,{aw:e,b:c,c:i,d:v,e:t,f:u})}))}),$u=$(function(e,r){return{$:3,a:e,b:r}}),Yp={src:`
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
    `,attributes:{},uniforms:{constantColor:"aw",pointRadius:"bR",sceneProperties:"e"}},fu={src:`
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
    `,attributes:{position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"bR",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},qp=E(function(e,r,n,a){return o($u,n,ee(function(t,i,c,l,u,v,s,d){return S(ae,d,fu,Yp,a,{aw:e,b:c,c:i,bR:r,d:v,e:t,f:u})}))}),Ho={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",sceneProperties:"e"}},En=function(e){var r=e;return r},Ga=Lf,ir=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Le,u,t,m),vu,Ho,a,{aN:o(Ga,En(r),e),b:l,c,d:s,e:i,f:v})}))}),Zp={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aN",pointRadius:"bR",sceneProperties:"e"}},Kp=he(function(e,r,n,a,t){return o($u,a,ee(function(i,c,l,u,v,s,d,m){return S(ae,m,fu,Zp,t,{aN:o(Ga,En(r),e),b:l,c,bR:n,d:s,e:i,f:v})}))}),su={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColor:"cj",sceneProperties:"e",viewMatrix:"f"}},du={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Un=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Le,l,a,d),du,su,n,{P:f,bd:m.bd,bJ:m.bJ,bK:m.bK,bL:m.bL,cj:e,b:c,c:i,d:v,e:t,f:u})}))}),mu={src:`
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
    `,attributes:{},uniforms:{enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",materialColorTexture:"ck",normalMapTexture:"aW",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},pu={src:`
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
    `,attributes:{normal:"o",position:"dY",tangent:"ea",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qp=We(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Le,v,i,f),pu,mu,t,{P:b,bd:g.bd,bJ:g.bJ,bK:g.bK,bL:g.bL,ck:e,b:u,c:l,aW:r,d,e:c,a$:n,f:s})}))}),bu={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"b$",constantBaseColor:"b2",constantMetallic:"b3",constantRoughness:"b4",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallicTexture:"co",normalMapTexture:"aW",roughnessTexture:"cL",sceneProperties:"e",useNormalMap:"a$",viewMatrix:"f"}},e3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(s){return o(ge,u,ee(function(d,m,f,g,b,w,x,h){var T=x.a,k=x.b;return S(ae,p(Le,g,s,h),pu,bu,v,{b$:e,b2:r,b3:i,b4:a,P:k,bd:T.bd,bJ:T.bJ,bK:T.bK,bL:T.bL,co:t,b:f,c:m,aW:c,d:w,cL:n,e:d,a$:l,f:b})}))}}}}}}}}}}},gu={src:`
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
    `,attributes:{},uniforms:{baseColor:"b_",enabledLights:"P",lights12:"bd",lights34:"bJ",lights56:"bK",lights78:"bL",metallic:"cn",roughness:"cK",sceneProperties:"e",viewMatrix:"f"}},On=We(function(e,r,n,a,t,i){return o(ge,a,ee(function(c,l,u,v,s,d,m,f){var g=m.a,b=m.b;return S(ae,p(Le,v,i,f),du,gu,t,{b_:e,P:b,bd:g.bd,bJ:g.bJ,bK:g.bK,bL:g.bL,cn:n,b:u,c:l,d,cK:r,e:c,f:s})}))}),r3=function(e){return{$:0,a:e}},Ji=$(function(e,r){return{$:1,a:e,b:r}}),_n=$(function(e,r){if(r.$){var n=r.a.C;return z(n,1)}else return r.a,z(e,0)}),n3=function(e){return C(ln,Gr(e),Hr(e),Wr(e),1)},Wo=C(ln,0,0,0,0),ia=$(function(e,r){if(r.$){var a=r.a.C;return z(a,Wo)}else{var n=r.a;return z(e,n3(n))}}),hu=$(function(e,r){var n=z(e,r);if(n.a.$){var t=n.a.a.C;return o(Ji,z(t,Wo),o(_n,t,r))}else if(n.b.$){var t=n.b.a.C;return o(Ji,o(ia,t,e),o(_n,t,r))}else{var a=n.a.a;return n.b.a,r3(a)}}),a3=y(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Yn=E(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),t3=E(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),o3=function(e){return o(De,e,1)},jt=o(De,0,0),Ir=$(function(e,r){if(r.$){var a=r.a.C;return z(a,jt)}else{var n=r.a;return z(e,o3(n))}}),_u=E(function(e,r,n,a){var t=C(t3,e,r,n,a);if(t.a.$){var u=t.a.a.C;return C(Yn,z(u,Wo),o(Ir,u,r),o(Ir,u,n),o(_n,u,a))}else if(t.b.$){var u=t.b.a.C;return C(Yn,o(ia,u,e),z(u,jt),o(Ir,u,n),o(_n,u,a))}else if(t.c.$){var u=t.c.a.C;return C(Yn,o(ia,u,e),o(Ir,u,r),z(u,jt),o(_n,u,a))}else if(t.d.$){var u=t.d.a.C;return C(Yn,o(ia,u,e),o(Ir,u,r),o(Ir,u,n),z(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,p(a3,i,c,l)}}),i3={src:`
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
    `,attributes:{},uniforms:{backlight:"bY",colorTexture:"bB",sceneProperties:"e"}},it=he(function(e,r,n,a,t){return o(ge,n,ee(function(i,c,l,u,v,s,d,m){return S(ae,p(Le,u,t,m),uu,i3,a,{bY:En(r),bB:e,b:l,c,d:s,e:i,f:v})}))}),wu={src:`
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
    `,attributes:{normal:"o",position:"dY",uv:"L"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},c3=E(function(e,r,n,a){return o(ge,r,ee(function(t,i,c,l,u,v,s,d){var m=s.a,f=s.b;return S(ae,p(Le,l,a,d),wu,mu,n,{P:f,bd:m.bd,bJ:m.bJ,bK:m.bK,bL:m.bL,ck:e,b:c,c:i,aW:e,d:v,e:t,a$:0,f:u})}))}),l3=Wt(function(e,r,n,a,t,i,c,l,u){return o(ge,c,ee(function(v,s,d,m,f,g,b,w){var x=b.a,h=b.b;return S(ae,p(Le,m,u,w),wu,bu,l,{b$:e,b2:r,b3:i,b4:a,P:h,bd:x.bd,bJ:x.bJ,bK:x.bK,bL:x.bL,co:t,b:d,c:s,aW:e,d:g,cL:n,e:v,a$:0,f})}))}),Ln=y(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),u3=function(e){var r=e;return p(Ln,r.dM,r.dJ,.5)},v3=function(e){var r=e;return p(Ln,r.dN,r.dK,.5)},$3=function(e){var r=e;return p(Ln,r.dO,r.dL,.5)},f3=function(e){return p(pe,u3(e),v3(e),$3(e))},W=function(e){var r=jl(e),n=r.a,a=r.b,t=r.c;return{ev:Fn(f3(e)),eR:n/2,eS:a/2,eT:t/2}},Xo=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.C;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return C(ot,l,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(ot,l,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(ot,l,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var n=e.b.a;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return C(or,n,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return C(or,n,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return C(or,n,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return C(or,n,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return C(or,n,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return C(or,n,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return C(or,n,W(t),c,a);case 8:var t=r.a,c=r.c;return C(or,n,W(t),c,0);case 9:var t=r.a,c=r.c;return C(or,n,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return C(qp,n,i,W(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.C,v=e.c;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:var t=r.a,c=r.c,a=r.d;return S(it,l,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(it,l,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(it,l,v,W(t),c,a);case 8:return P;case 9:return P;default:return P}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return P;case 1:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,W(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,W(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,W(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,W(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,W(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(ir,u,v,W(t),c,a);case 8:var t=r.a,c=r.c;return S(ir,u,v,W(t),c,0);case 9:var t=r.a,c=r.c;return S(ir,u,v,W(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(Kp,u,v,i,W(t),c)}}case 2:e.a;var s=e.b,j=e.c,d=o(hu,s,j);if(d.$){var g=d.a,b=g.a;g.b;var w=d.b,x=w.a,h=w.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(c3,b,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return we(Qp,b,x,h,W(t),c,f);case 8:return P;case 9:return P;default:return P}}else{var m=d.a;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,f=r.d;return C(Un,m,W(t),c,f);case 3:return P;case 4:var t=r.a,c=r.c,f=r.d;return C(Un,m,W(t),c,f);case 5:return P;case 6:var t=r.a,c=r.c,f=r.d;return C(Un,m,W(t),c,f);case 7:var t=r.a,c=r.c,f=r.d;return C(Un,m,W(t),c,f);case 8:return P;case 9:return P;default:return P}}default:e.a;var T=e.b,k=e.c,G=e.d,j=e.e,R=C(_u,T,k,G,j);if(R.$){var q=R.a,K=q.a,ie=q.b,ve=R.b,oe=ve.a,me=ve.b,ze=R.c,Se=ze.a,mr=ze.b,pr=R.d,x=pr.a,h=pr.b;switch(r.$){case 0:return P;case 1:return P;case 2:return P;case 3:return P;case 4:return P;case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return Iu(l3,K,ie,oe,me,Se,mr,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return e3(K)(ie)(oe)(me)(Se)(mr)(x)(h)(W(t))(c)(a);case 8:return P;case 9:return P;default:return P}}else{var N=R.a,H=R.b,F=R.c;switch(r.$){case 0:return P;case 1:return P;case 2:var t=r.a,c=r.c,a=r.d;return we(On,N,H,F,W(t),c,a);case 3:return P;case 4:var t=r.a,c=r.c,a=r.d;return we(On,N,H,F,W(t),c,a);case 5:return P;case 6:var t=r.a,c=r.c,a=r.d;return we(On,N,H,F,W(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return we(On,N,H,F,W(t),c,a);case 8:return P;case 9:return P;default:return P}}}}),ct=function(e){var r=e;return r.fT},lt=function(e){var r=e;return r.fX},ut=function(e){var r=e;return r.c$},s3=function(e){var r=e,n=ut(r.c0),a=lt(r.c0),t=ct(r.c0),i=ut(r.c_),c=lt(r.c_),l=ct(r.c_),u=ut(r.cZ),v=lt(r.cZ),s=ct(r.cZ);return s*c*n+v*i*t+u*l*a-u*c*t-v*l*n-s*i*a>0},d3=function(e){var r=Fn(Nr(e)),n=He(Cr(e)),a=He(Tr(e)),t=He(Sr(e));return{dk:s3(e),q:t.fT,r:t.fX,s:t.c$,t:a.fT,u:a.fX,v:a.c$,w:n.fT,x:n.fX,y:n.c$,H:r.fT,I:r.fX,J:r.c$,bV:1}},Jr=$(function(e,r){return{$:5,a:e,b:r}}),yu=$(function(e,r){var n=r;switch(n.$){case 0:return P;case 5:var a=n.a,t=n.b,i=o(Ml,a,e);return o(Jr,i,t);case 1:return o(Jr,e,n);case 3:return o(Jr,e,n);case 2:return o(Jr,e,n);default:return o(Jr,e,n)}}),xu=$(function(e,r){return o(yu,d3(e),r)}),Ha=function(e){return{$:2,a:e}},m3=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.ev;return{ev:{fT:n*i.fT,fX:a*i.fX,c$:t*i.c$},eR:n*r.eR,eS:a*r.eS,eT:t*r.eT}}),p3=kf,b3=zf,Ui=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var s=e.a,d=e.b,m=e.c,f=b3(a),g=f.fT,b=f.fX,w=f.c$,x=f.ei,h=p3({ei:x,fT:g*s,fX:b*d,c$:w*m});return za(r,n,h,t,i,c,l,u,v)}}}}}}}}}},Nt=$(function(e,r){switch(r.$){case 0:return cu;case 5:var n=r.a,a=r.b;return o(Jr,n,o(Nt,e,a));case 1:var t=r.a,i=r.b;return o(ge,o(m3,e,t),o(Ui,e,i));case 3:return r;case 2:var i=r.a;return Ha(o(Ui,e,i));default:var c=r.a;return Hl(o(re,Nt(e),c))}}),Io=$(function(e,r){var n=r;return o(Nt,e,n)}),Jo={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Su=7683,Tu=7682,g3=p(zo,{ci:0,cH:0,cY:15},{a8:xe,bl:rn,bt:xe,bu:Su},{a8:xe,bl:rn,bt:xe,bu:Tu}),h3=p(zo,{ci:0,cH:0,cY:15},{a8:xe,bl:rn,bt:xe,bu:Tu},{a8:xe,bl:rn,bt:xe,bu:Su}),Uo=$(function(e,r){return e?o(A,h3,r):o(A,g3,r)}),_3={src:`
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
    `,attributes:{normal:"o",position:"dY"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",viewMatrix:"f"}},w3=function(e){if(e.$){var r=e.c;return ne(ee(function(n,a,t,i,c,l,u,v){return S(ae,o(Uo,i,v),_3,Jo,r,{b:t,c:a,d:l,e:n,bW:u,f:c})}))}else return Y},Ta=function(e){var r=w3(e);if(r.$)return P;var n=r.a;return Ha(n)},y3=E(function(e,r,n,a){var t=o(Xo,n,tu),i=function(){var s=z(e,r);return s.a?s.b?Bn(_([t,Ta(Ii)])):t:s.b?Ta(Ii):P}(),c=Na(a),l=c.a,u=c.b,v=c.c;return o(xu,Ra(a),o(Io,B(l,u,v),i))}),x3=$(function(e,r){return C(y3,!0,!0,e,r)}),Gt=function(e){return{$:0,a:e}},Cu=$(function(e,r){return{$:0,a:e,b:r}}),S3=function(e){var r=bo(e),n=r.cG,a=r.b7,t=r.b0;return p(An,n,a,t)},T3=function(e){return o(Cu,0,Gt(S3(e)))},Oo=function(e){var r=e;return r.k},wn=function(e){var r=e;return Er(r)},C3=$(function(e,r){var n=r;return n/e}),nn=iv,Oi=function(e){var r=e;return{fT:Er(r),fX:nn(r)}},L3=$(function(e,r){var n=e.dY,a=e.o;return o(A,{o:ja(a),dY:Ce(n)},r)}),P3=Pa(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Wr(l.dY),s=Hr(l.dY),d=Gr(l.dY),m=o(ta,e,d),f=o(Pe,r,d),g=o(ta,n,s),b=o(Pe,a,s),w=o(ta,t,v),x=o(Pe,i,v),h=u;e=m,r=f,n=g,a=b,t=w,i=x,c=h;continue e}else return Zl({dJ:r,dK:a,dL:i,dM:e,dN:n,dO:t})}),Lu=$(function(e,r){var n=Wr(e.dY),a=Hr(e.dY),t=Gr(e.dY);return Xt(P3,t,t,a,a,n,n,r)}),z3=function(e){var r=p(Vc,L3,L,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Ro(e)),i=o(Lu,n,a);return C(Yl,i,e,t,0)}else return Eo},Pu=ur({fT:0,fX:0,c$:-1}),Yi=$(function(e,r){var n=e,a=r,t=n.c_,i=t,c=n.cZ,l=c;return{fT:a.fT*l.fT+a.fX*i.fT,fX:a.fT*l.fX+a.fX*i.fX,c$:a.fT*l.c$+a.fX*i.c$}}),Ca=function(e){var r=e;return nn(r)},Ht=function(e){return tr(2*en*e)},k3=kr,qi=k3({cu:je,cZ:Ao,c_:Bo}),zu=function(){var e=72,r=o(C3,e,Ht(1)),n=Mr(1),a=Yr(Fo),t=Yr(Pu),i=Mr(1),c=o(Q,.5,i),l=p(pe,Ke,Ke,c),u=o(Q,-.5,i),v=p(pe,Ke,Ke,u),s=function(f){var g=o(Q,f,r),b=Yr(o(Yi,qi,Oi(g))),w=o(Q,wn(g),n),x=o(Q,Ca(g),n),h=p(pe,w,x,c),T=p(pe,w,x,u),k=o(ha,e,f+1),G=o(Q,k,r),j=Yr(o(Yi,qi,Oi(G))),R=o(Q,wn(G),n),N=o(Q,Ca(G),n),H=p(pe,R,N,u),F=p(pe,R,N,c);return _([B({o:t,dY:v},{o:t,dY:H},{o:t,dY:T}),B({o:b,dY:T},{o:j,dY:H},{o:j,dY:F}),B({o:b,dY:T},{o:j,dY:F},{o:b,dY:h}),B({o:a,dY:l},{o:a,dY:h},{o:a,dY:F})])},d=o(re,s,o(Vr,0,e-1)),m=Rt(Ge(d));return Vo(z3(m))}(),Zi=iu(zu),ku=function(e){var r=e;return r.eE},Mu=function(e){var r=e;return r.cu},M3=function(e){var r=ku(e),n=xo(r),a=n.a,t=n.b;return Oe({cu:Mu(e),cZ:a,c_:t,c0:r})},Du=function(e){var r=e;return r.e6},Au=function(e){var r=e;return r.fp},D3=E(function(e,r,n,a){var t=M3(Oo(a)),i=o(Xo,n,zu),c=function(){var d=z(e,r);return d.a?d.b?Bn(_([i,Ta(Zi)])):i:d.b?Ta(Zi):P}(),l=Au(a),u=l,v=Du(a),s=v;return o(xu,t,o(Io,B(u,u,s),c))}),A3=$(function(e,r){return C(D3,!0,!0,e,r)}),Ki={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},Qi={src:`
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
    `,attributes:{triangleVertex:"cS"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bq",viewMatrix:"f"}},mn=function(e){var r=Cn(e),n=r.a,a=r.b,t=r.c,i=Kr(n),c=Kr(a),l=Kr(t);return Qe({ds:i.fT,dt:c.fT,du:l.fT,dv:0,dw:i.fX,dx:c.fX,dy:l.fX,dz:0,dA:i.c$,dB:c.c$,dC:l.c$,dD:0,dE:0,dF:0,dG:0,dH:0})},qn=au(_([B({cS:0},{cS:1},{cS:2})])),B3=$(function(e,r){var n=Kl(r),a=W(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var t=e.b.a;return o(ge,a,ee(function(h,T,k,G,j,R,N,H){return S(ae,p(Le,G,0,H),Ki,Go,qn,{aw:t,b:k,c:T,d:R,e:h,bq:mn(r),f:j})}));case 1:if(e.b.$)return e.a,P;var i=e.b.a,c=e.c;return o(ge,a,ee(function(h,T,k,G,j,R,N,H){return S(ae,p(Le,G,0,H),Ki,Ho,qn,{aN:o(Ga,En(c),i),b:k,c:T,d:R,e:h,bq:mn(r),f:j})}));case 2:e.a;var l=e.b,f=e.c,u=o(hu,l,f);if(u.$)return P;var v=u.a;return o(ge,a,ee(function(h,T,k,G,j,R,N,H){var F=N.a,q=N.b;return S(ae,p(Le,G,0,H),Qi,su,qn,{P:q,bd:F.bd,bJ:F.bJ,bK:F.bK,bL:F.bL,cj:v,b:k,c:T,d:R,e:h,bq:mn(r),f:j})}));default:e.a;var s=e.b,d=e.c,m=e.d,f=e.e,g=C(_u,s,d,m,f);if(g.$)return P;var b=g.a,w=g.b,x=g.c;return o(ge,a,ee(function(h,T,k,G,j,R,N,H){var F=N.a,q=N.b;return S(ae,p(Le,G,0,H),Qi,gu,qn,{b_:b,P:q,bd:F.bd,bJ:F.bJ,bK:F.bK,bL:F.bL,cn:x,b:k,c:T,d:R,cK:w,e:h,bq:mn(r),f:j})}))}}),F3=function(){var e=_([{a_:o(De,0,1)},{a_:o(De,1,1)},{a_:o(De,2,1)},{a_:o(De,0,-1)},{a_:o(De,1,-1)},{a_:o(De,2,-1)}]),r=_([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return o(Vn,e,r)}(),V3={src:`
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
    `,attributes:{triangleShadowVertex:"a_"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",triangleVertexPositions:"bq",viewMatrix:"f"}},ec=function(e){return Ha(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Uo,t,u),V3,Jo,F3,{b:a,c:n,d:c,e:r,bW:l,bq:mn(e),f:i})}))},E3=E(function(e,r,n,a){var t=o(B3,n,a),i=z(e,r);return i.a?i.b?Bn(_([t,ec(a)])):t:i.b?ec(a):P}),R3=$(function(e,r){return C(E3,!0,!0,e,r)}),Yo=function(e){var r=e;return r},j3=$(function(e,r){var n=Br(r),a=Br(e),t=Ar(r),i=Ar(e),c=Dr(r),l=Dr(e);return{dJ:o(ce,l,c),dK:o(ce,i,t),dL:o(ce,a,n),dM:o(fe,l,c),dN:o(fe,i,t),dO:o(fe,a,n)}}),N3=function(e){var r=Yo(e),n=r.a,a=r.b;return o(j3,n,a)},rc={src:`
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
    `,attributes:{lineSegmentVertex:"dr"},uniforms:{lineSegmentEndPoint:"dp",lineSegmentStartPoint:"dq",modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},G3=$(function(e,r){return{$:1,a:e,b:r}}),H3=G3({c8:2,dh:0,dQ:1}),nc=H3(_([z({dr:0},{dr:1})])),W3=$(function(e,r){var n=N3(r),a=W(n),t=Yo(r),i=t.a,c=t.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.C,P;var l=e.b.a;return o(ge,a,ee(function(v,s,d,m,f,g,b,w){return S(ae,w,rc,Go,nc,{aw:l,dp:Ce(c),dq:Ce(i),b:d,c:s,d:g,e:v,f})}));case 1:if(e.b.$)return P;var l=e.b.a,u=e.c;return o(ge,a,ee(function(s,d,m,f,g,b,w,x){return S(ae,x,rc,Ho,nc,{aN:o(Ga,En(u),l),dp:Ce(c),dq:Ce(i),b:m,c:d,d:b,e:s,f:g})}));case 2:return P;default:return P}}),X3=$(function(e,r){return o(W3,e,r)}),Wa=function(e){var r=e;return r.ev},Xa=function(e){var r=e;return r.fp},Zn=function(e){return tr(en*(e/180))},ac=$(function(e,r){var n=e,a=r;return n/a}),I3=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(A,i,t);if(_r(r,e))return c;var l=e,u=r-1,v=n,s=a,d=c;e=l,r=u,n=v,a=s,t=d;continue e}}),tc=$(function(e,r){return e<1?L:S(I3,0,e,e,r,L)}),J3=$(function(e,r){var n=e.dY,a=e.o,t=e.L,i=t,c=i.a,l=i.b;return o(A,{o:ja(a),dY:Ce(n),L:o(De,c,l)},r)}),U3=function(e){var r=p(Vc,J3,L,jo(e));if(r.b){var n=r.a,a=r.b,t=o(Vn,r,Ro(e)),i=o(Lu,n,a);return C(ql,i,e,t,0)}else return Eo},qo=$(function(e,r){var n=e,a=r,t=Er(a);return{fT:t*Er(n),fX:t*nn(n),c$:nn(a)}}),O3=function(){var e=Mr(1),r=72,n=o(Vr,0,r-1),a=o(tc,r,o(Ln,Ke,Ht(1))),t=oo(r/2),i=o(Vr,0,t-1),c=o(tc,t,o(Ln,Zn(90),Zn(-90))),l=No(Ge(o(re,function(s){return o(re,function(d){return{o:Yr(o(qo,s,d)),dY:p(pe,o(Q,wn(d)*wn(s),e),o(Q,wn(d)*Ca(s),e),o(Q,Ca(d),e)),L:z(o(ac,s,Ht(1)),o(ac,o(hn,Zn(90),d),Zn(180)))}},c)},a))),u=$(function(s,d){return s*(t+1)+d}),v=Ge(o(re,function(s){return Ge(o(re,function(d){var m=o(u,s+1,d),f=o(u,s,d),g=o(u,s+1,d+1),b=o(u,s,d+1);return _([B(b,g,m),B(b,m,f)])},i))},n));return Vo(U3(o(ou,l,v)))}(),La=72,Kn=2*La,Y3=$(function(e,r){e:for(;;){var n=Kn+1,a=o(ha,Kn,2*e+3),t=o(ha,Kn,2*e+2),i=2*e+1,c=2*e,l=Kn,u=o(A,B(l,c,t),o(A,B(c,a,t),o(A,B(c,i,a),o(A,B(i,n,a),r))));if(e){var v=e-1,s=u;e=v,r=s;continue e}else return u}}),q3=y(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Z3=$(function(e,r){e:for(;;){var n=p(q3,0,2*en,e/La),a={bw:n,bO:0,bU:1},t={bw:n,bO:1,bU:1},i=o(A,a,o(A,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),K3=function(){var e=o(Z3,La-1,_([{bw:0,bO:0,bU:0},{bw:0,bO:1,bU:0}])),r=o(Y3,La-1,L);return o(Vn,e,r)}(),Q3={src:`
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
    `,attributes:{angle:"bw",offsetScale:"bO",radiusScale:"bU"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"bW",viewMatrix:"f"}},oc=function(e){return Ha(ee(function(r,n,a,t,i,c,l,u){return S(ae,o(Uo,!0,u),Q3,Jo,K3,{aw:p(An,0,0,1),b:a,c:n,d:c,e:r,bW:l,f:i})}))},eb=function(e){var r=eu(e);return{dk:!0,q:1,r:0,s:0,t:0,u:1,v:0,w:0,x:0,y:1,H:r.fT,I:r.fX,J:r.c$,bV:1}},rb=$(function(e,r){return o(yu,eb(e),r)}),nb=E(function(e,r,n,a){var t=o(Xo,n,O3),i=function(){var u=z(e,r);return u.a?u.b?Bn(_([t,oc()])):t:u.b?oc():P}(),c=Xa(a),l=c;return o(rb,o(xa,je,Wa(a)),o(Io,B(l,l,l),i))}),ab=$(function(e,r){return C(nb,!0,!0,e,r)}),tb=y(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Bu=y(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ob=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),ib=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(Cu,n,a);case 1:var n=e.a,a=e.b,r=e.c;return p(tb,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return p(Bu,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return S(ob,n,a,t,i,c)}},cb=ib,Fu=function(e){switch(e.$){case 0:var t=e.a,r=e.b;return _([o(x3,t,r)]);case 1:var t=e.a,n=e.b;return _([o(R3,t,n)]);case 3:var t=e.a,a=e.b;return _([o(ab,cb(t),a)]);case 2:var t=e.a,i=e.b;return _([o(A3,t,i)]);case 4:var c=e.a,l=e.b;return _([o(X3,T3(c),l)]);default:var u=e.a;return o(Co,Fu,u)}},lb=function(e){return o(Co,Fu,e)},ub=$(function(e,r){return mp({el:e.el,aI:Jm(e.ep),es:e.es,ex:Mr(e.ex),b5:e.b5,aK:z(Wi(Ue(e.cM.fR)),Wi(Ue(e.cM.eV))),aP:lb(r),eM:e.eM,e8:e.e8,fJ:e.fJ,fQ:e.fQ})}),Vu=function(e){return e},vb=$(function(e,r){var n=e,a=He(r.eE),t=a.fT,i=a.fX,c=a.c$,l=o(Ea,r.bG,r.aJ),u=l;return{by:Wr(u),eu:n,bE:Hr(u),cD:0,bT:Gr(u),cT:1,fT:-t,fX:-i,c$:-c}}),$b=function(e){return o(vb,Vu(!0),{aJ:e.aJ,eE:o(qo,tr(e.bx),tr(e.bC)),bG:e.bG})},fb=function(e){return e},sb=function(e){return fb(1.2*o(cn,2,e))},vt=To({fT:.37208,fX:.37529}),db=$(function(e,r){return{$:2,a:e,b:r}}),Eu=function(e){return{$:0,a:e}},Qn=function(e){var r=e;return r},mb=function(e){var r=e;return r.eu},pb=Eu(dn.a),bb=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?z(o(A,a,i),c):z(i,o(A,a,c))});return p(dr,n,z(L,L),r)}),gb=function(e){var r=e;return Qe({ds:r.fT,dt:r.bT,du:0,dv:0,dw:r.fX,dx:r.bE,dy:0,dz:0,dA:r.c$,dB:r.by,dC:0,dD:0,dE:r.cT,dF:r.cD,dG:0,dH:0})},hb=ee(function(e,r,n,a,t,i,c,l){var u=o(bb,mb,_([Qn(e),Qn(r),Qn(n),Qn(a)])),v=u.a,s=u.b;if(v.b){var d=le(v,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var m=d.a,f=d.b,g=f.a,b=f.b,w=b.a,x=b.b,h=x.a;return o(db,o(re,gb,v),{bd:o(Ee,m,g),bJ:o(Ee,w,h),bK:o(Ee,t,i),bL:o(Ee,c,l)})}else return pb}else return Eu({bd:o(Ee,e,r),bJ:o(Ee,n,a),bK:o(Ee,t,i),bL:o(Ee,c,l)})}),_b=E(function(e,r,n,a){return za(hb,e,r,n,a,ke,ke,ke,ke)}),wb=$(function(e,r){return o(Te,function(n){if(n.$)return 0;var a=n.b;return a},o(so,e,r.av))}),yb=$(function(e,r){return o($r,0,ho(o(go,wb(e),r)))}),xb=$(function(e,r){return o(yb,e,r.ey)}),cr=xb,Sb={$:5},Tb=Sb,Cb=To({fT:.44757,fX:.40745}),Lb=function(e){return e},ic=function(e){return e},$t=function(e){return e},Pb={$:1},zb=Pb,kb=$(function(e,r){var n=e,a=Fn(r.dY),t=a.fT,i=a.fX,c=a.c$,l=o(Ea,r.bG,r.aJ),u=l;return{by:Wr(u),eu:n,bE:Hr(u),cD:0,bT:Gr(u),cT:2,fT:t,fX:i,c$:c}}),cc=function(e){return o(kb,Vu(!0),{aJ:e.aJ,bG:e.bG,dY:ra(e.dY)})},Ia=$(function(e,r){return{$:0,a:e,b:r}}),ft=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),st=$(function(e,r){var n=e,a=r;return n+.5*(a-n)}),Mb=ur({fT:-1,fX:0,c$:0}),Db=ur({fT:0,fX:-1,c$:0}),Ab=We(function(e,r,n,a,t,i){var c=o(ft,n,i)?Fo:Pu,l=o(ft,r,t)?So:Db,u=o(ft,e,a)?Jl:Mb,v=B(de(o(vr,e,a)),de(o(vr,r,t)),de(o(vr,n,i))),s=p(pe,o(st,e,a),o(st,r,t),o(st,n,i)),d=Oe({cu:s,cZ:u,c_:l,c0:c});return{eo:d,aK:v}}),Bb=$(function(e,r){return we(Ab,Dr(e),Ar(e),Br(e),Dr(r),Ar(r),Br(r))}),Fb=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=B(n/2,a/2,t/2),c=i.a,l=i.b,u=i.c;return o(Ia,e,o(Bb,p(Bt,-c,-l,-u),p(Bt,c,l,u)))}),Ja=function(e){return{$:5,a:e}},Vb=function(e){return Ja(e)},Eb=E(function(e,r,n,a){var t=B(e,r,n),i=t.a,c=t.b,l=t.c,u=l<=.5?l*(c+1):l+c-l*c,v=l*2-u,s=function(g){var b=g<0?g+1:g>1?g-1:g;return b*6<1?v+(u-v)*b*6:b*2<1?u:b*3<2?v+(u-v)*(2/3-b)*6:v},d=s(i-1/3),m=s(i),f=s(i+1/3);return C(Va,f,m,d,a)}),Rb=y(function(e,r,n){return C(Eb,e,r,n,1)}),dt=function(e){return p(kl,0,1,e<=.04045?e/12.92:o(cn,(e+.055)/1.055,2.4))},jb=function(e){var r=bo(e),n=r.cG,a=r.b7,t=r.b0;return p(An,dt(n),dt(a),dt(t))},Nb=function(e){return p(Bu,0,Gt(jb(e)),Gt(0))},Zo=$(function(e,r){return{$:2,a:e,b:r}}),Ko=$(function(e,r){return{$:4,a:e,b:r}}),Qo=$(function(e,r){return{$:3,a:e,b:r}}),ei=$(function(e,r){return{$:1,a:e,b:r}}),Gb=y(function(e,r,n){return{fT:e,fX:r,c$:n}}),Rn=$(function(e,r){var n=e,a=r;return{fT:a.fT+n.fT,fX:a.fX+n.fX,c$:a.c$+n.c$}}),Hb=$(function(e,r){return Oe({cu:o(Rn,e,Nr(r)),cZ:Sr(r),c_:Tr(r),c0:Cr(r)})}),Wb=$(function(e,r){return{eo:o(Hb,e,Ra(r)),aK:Na(r)}}),un=$(function(e,r){return{eE:r,cu:e}}),Xb=$(function(e,r){var n=r;return o(un,o(Rn,e,n.cu),n.eE)}),Ib=$(function(e,r){var n=r;return{k:o(Xb,e,n.k),e6:n.e6,fp:n.fp}}),Jb=function(e){return e},ri=$(function(e,r){var n=Yo(r),a=n.a,t=n.b;return Jb(z(e(a),e(t)))}),Ub=$(function(e,r){return o(ri,Rn(e),r)}),ni=$(function(e,r){return{ev:r,fp:de(e)}}),Ob=$(function(e,r){return o(ni,Xa(r),o(Rn,e,Wa(r)))}),ai=$(function(e,r){var n=r,a=n.a,t=n.b,i=n.c;return B(e(a),e(t),e(i))}),Yb=$(function(e,r){return o(ai,Rn(e),r)}),Ru=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=p(Gb,n,a,t);switch(r.$){case 0:var s=r.a,c=r.b;return o(Ia,s,o(Wb,i,c));case 1:var s=r.a,l=r.b;return o(ei,s,o(Yb,i,l));case 3:var s=r.a,u=r.b;return o(Qo,s,o(Ob,i,u));case 2:var s=r.a,v=r.b;return o(Zo,s,o(Ib,i,v));case 4:var s=r.a,d=r.b;return o(Ko,s,o(Ub,i,d));default:var m=r.a;return Ja(o(re,Ru(B(n,a,t)),m))}}),lc=function(e){return Ru(B(e,0,0))},ca=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=nn(c),v=a.eE,s=v,d=s.fT*u,m=l*d,f=d*d,g=s.fX*u,b=l*g,w=d*g,x=g*g,h=1-2*(f+x),T=s.c$*u,k=l*T,G=2*(w-k),j=2*(w+k),R=d*T,N=2*(R+b),H=2*(R-b),F=g*T,q=2*(F-m),K=2*(F+m),ie=T*T,ve=1-2*(x+ie),oe=1-2*(f+ie);return{fT:ve*i.fT+G*i.fX+N*i.c$,fX:j*i.fT+oe*i.fX+q*i.c$,c$:H*i.fT+K*i.fX+h*i.c$}}),jn=y(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Er(c),u=nn(c),v=a.cu,s=v,d=i.fT-s.fT,m=i.fX-s.fX,f=i.c$-s.c$,g=a.eE,b=g,w=b.fT*u,x=l*w,h=w*w,T=b.fX*u,k=l*T,G=w*T,j=T*T,R=1-2*(h+j),N=b.c$*u,H=l*N,F=2*(G-H),q=2*(G+H),K=w*N,ie=2*(K+k),ve=2*(K-k),oe=T*N,me=2*(oe-x),ze=2*(oe+x),Se=N*N,mr=1-2*(j+Se),pr=1-2*(h+Se);return{fT:s.fT+mr*d+F*m+ie*f,fX:s.fX+q*d+pr*m+me*f,c$:s.c$+ve*d+ze*m+R*f}}),qb=y(function(e,r,n){return Oe({cu:p(jn,e,r,Nr(n)),cZ:p(ca,e,r,Sr(n)),c_:p(ca,e,r,Tr(n)),c0:p(ca,e,r,Cr(n))})}),Zb=y(function(e,r,n){return{eo:p(qb,e,r,Ra(n)),aK:Na(n)}}),Kb=$(function(e,r){var n=o(jn,e,r),a=o(ca,e,r);return function(t){var i=t;return o(un,n(i.cu),a(i.eE))}}),Qb=y(function(e,r,n){var a=n;return{k:p(Kb,e,r,a.k),e6:a.e6,fp:a.fp}}),eg=y(function(e,r,n){return o(ri,o(jn,e,r),n)}),rg=y(function(e,r,n){return o(ni,Xa(n),p(jn,e,r,Wa(n)))}),ng=y(function(e,r,n){return o(ai,o(jn,e,r),n)}),Ua=y(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return o(Ia,l,p(Zb,e,r,a));case 1:var l=n.a,t=n.b;return o(ei,l,p(ng,e,r,t));case 3:var l=n.a,i=n.b;return o(Qo,l,p(rg,e,r,i));case 2:var l=n.a,c=n.b;return o(Zo,l,p(Qb,e,r,c));case 4:var l=n.a,u=n.b;return o(Ko,l,p(eg,e,r,u));default:var v=n.a;return Ja(o(re,o(Ua,e,r),v))}}),ag=o(un,je,Ao),tg=$(function(e,r){return p(Ua,ag,tr(e),r)}),og=o(un,je,Bo),ig=$(function(e,r){return p(Ua,og,tr(e),r)}),cg=o(un,je,Ul),lg=$(function(e,r){return p(Ua,cg,tr(e),r)}),Nn=y(function(e,r,n){var a=e,t=n;return{fT:a.fT+r*(t.fT-a.fT),fX:a.fX+r*(t.fX-a.fX),c$:a.c$+r*(t.c$-a.c$)}}),ug=y(function(e,r,n){var a=Ra(n),t=Sr(a),i=Tr(a),c=Cr(a),l=p(Nn,e,r,Nr(a)),u=r>=0?Oe({cu:l,cZ:t,c_:i,c0:c}):Oe({cu:l,cZ:hr(t),c_:hr(i),c0:hr(c)}),v=Na(n),s=v.a,d=v.b,m=v.c,f=de(o(Q,r,s)),g=de(o(Q,r,d)),b=de(o(Q,r,m));return{eo:u,aK:B(f,g,b)}}),uc=function(e){return ku(Oo(e))},vg=function(e){return Mu(Oo(e))},$g=y(function(e,r,n){var a=de(o(Q,r,Au(n))),t=de(o(Q,r,Du(n))),i=r>=0?uc(n):hr(uc(n)),c=p(Nn,e,r,vg(n));return{k:o(un,c,i),e6:t,fp:a}}),fg=y(function(e,r,n){return o(ri,o(Nn,e,r),n)}),sg=y(function(e,r,n){return o(ni,o(Q,U(r),Xa(n)),p(Nn,e,r,Wa(n)))}),dg=y(function(e,r,n){return o(ai,o(Nn,e,r),n)}),ju=$(function(e,r){switch(r.$){case 0:var c=r.a,n=r.b;return o(Ia,c,p(ug,je,e,n));case 1:var c=r.a,a=r.b;return o(ei,c,p(dg,je,e,a));case 3:var c=r.a,t=r.b;return o(Qo,c,p(sg,je,e,t));case 2:var c=r.a,i=r.b;return o(Zo,c,p($g,je,e,i));case 4:var c=r.a,l=r.b;return o(Ko,c,p(fg,je,e,l));default:var u=r.a;return Ja(o(re,ju(e),u))}}),mg=function(e){var r=function(t){return .1*t},n=function(t){return C(zl,0,1,4,e.b1+r(t))},a=function(t){return o(lc,1.4*t,o(lg,n(t),o(tg,n(t),o(ig,n(t),o(lc,o(cr,"a",e)*t,o(ju,o(cr,"a",e)*t,o(Fb,Nb(p(Rb,n(t),.6,.8)),B(1,3,1))))))))};return Vb(o(re,a,o(Vr,-10,10)))},pg=$(function(e,r){return _([mg(e)])}),vc=function(e){var r=e;return r},bg=function(e){e:for(;;){if(_r(e.di,Ke)&&_r(e.dj,Ke))return ke;if(o(Ll,de(e.di),de(e.dj))){var r={aJ:e.aJ,di:e.dj,dj:e.di,ee:hr(e.ee)};e=r;continue e}else{var n=U(vc(e.dj)/en),a=U(vc(e.di)/en),t=He(e.ee),i=t.fT,c=t.fX,l=t.c$,u=o(Ea,ru(1),e.aJ),v=u;return{by:a*Wr(v),eu:!1,bE:a*Hr(v),cD:n/a,bT:a*Gr(v),cT:3,fT:i,fX:c,c$:l}}}},gg=function(e){return bg({aJ:e.aJ,di:e.di,dj:e.dj,ee:o(qo,tr(e.bx),tr(e.bC))})},hg=$(function(e,r){var n=$b({bx:o(cr,"azimuth for third light",e),aJ:Im(Lb(2e3)),bC:o(cr,"elevation for third light",e),bG:$t(o(cn,10,o(cr,"lux",e)))}),a=cc({aJ:vt,bG:ic(6e3),dY:{fT:-45,fX:-30,c$:45}}),t=gg({bx:o(cr,"azimuth for fourth light",e),aJ:vt,bC:o(cr,"elevation for fourth light",e),di:$t(o(cr,"intensity above",e)),dj:$t(o(cr,"intensity below",e))}),i=cc({aJ:Cb,bG:ic(6e3),dY:{fT:-45,fX:30,c$:45}});return o(ub,{el:zb,ep:C(_l,0,0,0,.7),es:Wm(e),ex:.1,b5:e.b5,eM:sb(6),e8:C(_b,i,a,n,t),cM:e.cM,fJ:Tb,fQ:vt},o(pg,e,r))}),_g=C(gm,hg,Sm,xm,hm);const wg={Main:{init:_g(o(D,function(e){return Me({e0:e})},o(M,"inputs",o(D,function(e){return o(D,function(r){return o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return Me({b1:c,b5:i,eH:t,e4:a,fn:n,cM:r,fP:e})},o(M,"clock",$e))},o(M,"devicePixelRatio",$e))},o(M,"dt",$e))},o(M,"keyboard",o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return o(D,function(s){return o(D,function(d){return Me({ek:d,ez:s,c7:v,eG:u,e5:l,fo:c,ft:i,fy:t,ed:a})},o(M,"alt",Z))},o(M,"control",Z))},o(M,"down",Z))},o(M,"downs",pa(Tn)))},o(M,"left",Z))},o(M,"pressedKeys",pa(Tn)))},o(M,"right",Z))},o(M,"shift",Z))},o(M,"up",Z))))},o(M,"pointer",o(D,function(n){return o(D,function(a){return o(D,function(t){return o(D,function(i){return o(D,function(c){return o(D,function(l){return o(D,function(u){return o(D,function(v){return Me({c7:v,e1:u,fb:l,fu:c,fv:i,ed:t,fT:a,fX:n})},o(M,"down",Z))},o(M,"isDown",Z))},o(M,"move",Z))},o(M,"rightDown",Z))},o(M,"rightUp",Z))},o(M,"up",Z))},o(M,"x",$e))},o(M,"y",$e))))},o(M,"screen",o(D,function(r){return o(D,function(n){return Me({eV:n,fR:r})},o(M,"height",$e))},o(M,"width",$e))))},o(M,"wheel",o(D,function(e){return o(D,function(r){return Me({eB:r,eC:e})},o(M,"deltaX",$e))},o(M,"deltaY",$e)))))))(0)}},V={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},yg=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),t=f=>f.code=="ArrowLeft",i=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",u=f=>f.button==0,v=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(V.keyboard.downs.push(f.code),V.keyboard.pressedKeys.push(f.code),r(f)&&(V.keyboard.control=!0),n(f)&&(V.keyboard.alt=!0),a(f)&&(V.keyboard.shift=!0),t(f)&&(V.keyboard.left=!0),i(f)&&(V.keyboard.right=!0),c(f)&&(V.keyboard.up=!0),l(f)&&(V.keyboard.down=!0))}),window.addEventListener("keyup",f=>{V.keyboard.pressedKeys=V.keyboard.pressedKeys.filter(g=>g!=f.code),r(f)&&(V.keyboard.control=!1,V.keyboard.pressedKeys=[]),n(f)&&(V.keyboard.alt=!1),a(f)&&(V.keyboard.shift=!1),t(f)&&(V.keyboard.left=!1),i(f)&&(V.keyboard.right=!1),c(f)&&(V.keyboard.up=!1),l(f)&&(V.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY,u(f)&&(V.pointer.down=!0,V.pointer.isDown=!0),v(f)&&(V.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{V.pointer.move=!0,V.pointer.x=-.5*V.screen.width+f.pageX,V.pointer.y=.5*V.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(V.pointer.up=!0,V.pointer.isDown=!1),v(f)&&(V.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{V.wheel.deltaX=f.deltaX,V.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(V)}),window.addEventListener("focus",f=>{s(V)}),window.addEventListener("visibilitychange",f=>{s(V)}),window.addEventListener("resize",()=>{V.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(m);function m(f){const g=f/1e3,b=g-V.clock;b<.009||(V.dt=b,V.clock=g,e.ports.tick.send(V),d(V)),window.requestAnimationFrame(m)}},xg=()=>{mt("pointerdown"),mt("wheel"),mt("keydown")},mt=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Sg=wg.Main.init({node:document.querySelector("#app div"),flags:{inputs:V}});xg();yg(Sg);
