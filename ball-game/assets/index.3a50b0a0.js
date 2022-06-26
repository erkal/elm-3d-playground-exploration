const Fp=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Fp();function ma(e,r,n){return n.a=e,n.f=r,n}function v(e){return ma(2,e,function(r){return function(n){return e(r,n)}})}function L(e){return ma(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function X(e){return ma(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function qe(e){return ma(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Rr(e){return ma(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function Qo(e){return ma(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function($){return e(r,n,t,i,o,c,$)}}}}}}})}function Ee(e){return ma(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function($){return function(l){return e(r,n,t,i,o,c,$,l)}}}}}}}})}function U$(e){return ma(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function($){return function(l){return function(f){return e(r,n,t,i,o,c,$,l,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function m(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function W(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function zr(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function q$(e,r,n,t,i,o,c,$){return e.a===7?e.f(r,n,t,i,o,c,$):e(r)(n)(t)(i)(o)(c)($)}function wi(e,r,n,t,i,o,c,$,l){return e.a===8?e.f(r,n,t,i,o,c,$,l):e(r)(n)(t)(i)(o)(c)($)(l)}function Ip(e,r,n,t,i,o,c,$,l,f){return e.a===9?e.f(r,n,t,i,o,c,$,l,f):e(r)(n)(t)(i)(o)(c)($)(l)(f)}var Ep=[];function jp(e){return[e]}function Bp(e){return e.length}var Vp=L(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Rp=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,_(n,r)}),Np=v(function(e,r){return r[e]}),Gp=L(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i}),Hp=v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t}),Jp=L(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r}),Op=L(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r}),Up=v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});L(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});var qp=L(function(e,r,n){return n.slice(e,r)}),Yp=L(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),$=0;$<t;$++)c[$]=r[$];for(var $=0;$<i;$++)c[$+t]=n[$];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Xp()),r});function Xp(e){return"<internals>"}function Tt(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ue(e,r){for(var n,t=[],i=o$(e,r,0,t);i&&(n=t.pop());i=o$(n.a,n.b,0,t));return i}function o$(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Tt(5),!1;if(n>100)return t.push(_(e,r)),!0;e.$<0&&(e=qu(e),r=qu(r));for(var i in e)if(!o$(e[i],r[i],n+1,t))return!1;return!0}v(ue);var Qp=v(function(e,r){return!ue(e,r)});function ve(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ve(e.a,r.a))||(n=ve(e.b,r.b))?n:ve(e.c,r.c);for(;e.b&&r.b&&!(n=ve(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ve(e,r)<0});v(function(e,r){return ve(e,r)<1});v(function(e,r){return ve(e,r)>0});v(function(e,r){return ve(e,r)>=0});var Zp=v(function(e,r){var n=ve(e,r);return n<0?Uf:n?rb:Of}),xi=0;function _(e,r){return{a:e,b:r}}function E(e,r,n){return{a:e,b:r,c:n}}function F(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Cn(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Cn(e.a,r);return n}var M={$:0};function Cn(e,r){return{$:1,a:e,b:r}}var Kp=v(Cn);function u(e){for(var r=M,n=e.length;n--;)r=Cn(e[n],r);return r}function Zo(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var eg=L(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)});X(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(m(e,r.a,n.a,t.a));return u(i)});qe(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return u(o)});Rr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(W(e,r.a,n.a,t.a,i.a,o.a));return u(c)});var rg=v(function(e,r){return u(Zo(r).sort(function(n,t){return ve(e(n),e(t))}))}),ng=v(function(e,r){return u(Zo(r).sort(function(n,t){var i=a(e,n,t);return i===Of?0:i===Uf?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ag=v(Math.pow);v(function(e,r){return r%e});var tg=v(function(e,r){var n=r%e;return e===0?Tt(11):n>0&&e<0||n<0&&e>0?n+e:n}),ig=Math.PI,og=Math.cos,cg=Math.sin,$g=Math.tan,lg=Math.acos,ug=v(Math.atan2);function vg(e){return e}function fg(e){return e===1/0||e===-1/0}var mg=Math.ceil,sg=Math.floor,dg=Math.round,pg=Math.sqrt,Au=Math.log,gg=isNaN;function hg(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var bg=v(function(e,r){return e+r});function _g(e){var r=e.charCodeAt(0);return isNaN(r)?B:H(55296<=r&&r<=56319?_(e[0]+e[1],e.slice(2)):_(e[0],e.slice(1)))}v(function(e,r){return e+r});function yg(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Sg(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}L(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var wg=L(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),xg=v(function(e,r){return r.split(e)}),Pg=v(function(e,r){return r.join(e)}),Cg=L(function(e,r,n){return n.slice(e,r)});function kg(e){return u(e.trim().split(/\s+/g))}function zg(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Mg=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Lg=v(function(e,r){return r.indexOf(e)>-1}),Tg=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Dg=v(function(e,r){var n=e.length;if(n<1)return M;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return u(i)});function _f(e){return e+""}function Wg(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return B;r=10*r+o-48}return i==t?B:H(n==45?-r:r)}function Ag(e){if(e.length===0||/[\sxbo]/.test(e))return B;var r=+e;return r===r?H(r):B}function Fg(e){return Zo(e).join("")}function Ig(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Eg(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function jg(e){return{$:0,a:e}}function Bg(e){return{$:1,a:e}}function Ko(e){return{$:2,b:e}}var Vg=Ko(function(e){return typeof e!="number"?Hr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Oe(e):Hr("an INT",e)}),Rg=Ko(function(e){return typeof e=="boolean"?Oe(e):Hr("a BOOL",e)}),Ng=Ko(function(e){return typeof e=="number"?Oe(e):Hr("a FLOAT",e)}),Gg=Ko(function(e){return typeof e=="string"?Oe(e):e instanceof String?Oe(e+""):Hr("a STRING",e)});function Hg(e){return{$:3,b:e}}function Jg(e){return{$:5,c:e}}var Og=v(function(e,r){return{$:6,d:e,b:r}}),Ug=v(function(e,r){return{$:7,e,b:r}});function sa(e,r){return{$:9,f:e,g:r}}var qg=v(function(e,r){return{$:10,b:r,h:e}});function Yg(e){return{$:11,g:e}}var Xg=v(function(e,r){return sa(e,[r])}),Qg=L(function(e,r,n){return sa(e,[r,n])}),Zg=X(function(e,r,n,t){return sa(e,[r,n,t])});qe(function(e,r,n,t,i){return sa(e,[r,n,t,i])});Rr(function(e,r,n,t,i,o){return sa(e,[r,n,t,i,o])});Qo(function(e,r,n,t,i,o,c){return sa(e,[r,n,t,i,o,c])});Ee(function(e,r,n,t,i,o,c,$){return sa(e,[r,n,t,i,o,c,$])});U$(function(e,r,n,t,i,o,c,$,l){return sa(e,[r,n,t,i,o,c,$,l])});var Kg=v(function(e,r){try{var n=JSON.parse(r);return Gr(e,n)}catch(t){return _r(a(cl,"This is not valid JSON! "+t.message,r))}}),yf=v(function(e,r){return Gr(e,r)});function Gr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Oe(e.c):Hr("null",r);case 3:return Xi(r)?Fu(e.b,r,u):Hr("a LIST",r);case 4:return Xi(r)?Fu(e.b,r,eh):Hr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Hr("an OBJECT with a field named `"+n+"`",r);var f=Gr(e.b,r[n]);return Kr(f)?f:_r(a(Yu,n,f.a));case 7:var t=e.e;if(!Xi(r))return Hr("an ARRAY",r);if(t>=r.length)return Hr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Gr(e.b,r[t]);return Kr(f)?f:_r(a(qf,t,f.a));case 8:if(typeof r!="object"||r===null||Xi(r))return Hr("an OBJECT",r);var i=M;for(var o in r)if(r.hasOwnProperty(o)){var f=Gr(e.b,r[o]);if(!Kr(f))return _r(a(Yu,o,f.a));i=Cn(_(o,f.a),i)}return Oe(Le(i));case 9:for(var c=e.f,$=e.g,l=0;l<$.length;l++){var f=Gr($[l],r);if(!Kr(f))return f;c=c(f.a)}return Oe(c);case 10:var f=Gr(e.b,r);return Kr(f)?Gr(e.h(f.a),r):f;case 11:for(var s=M,d=e.g;d.b;d=d.b){var f=Gr(d.a,r);if(Kr(f))return f;s=Cn(f.a,s)}return _r(nb(Le(s)));case 1:return _r(a(cl,e.a,r));case 0:return Oe(e.a)}}function Fu(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Gr(e,r[o]);if(!Kr(c))return _r(a(qf,o,c.a));i[o]=c.a}return Oe(n(i))}function Xi(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function eh(e){return a(rm,e.length,function(r){return e[r]})}function Hr(e,r){return _r(a(cl,"Expecting "+e,r))}function at(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return at(e.b,r.b);case 6:return e.d===r.d&&at(e.b,r.b);case 7:return e.e===r.e&&at(e.b,r.b);case 9:return e.f===r.f&&Iu(e.g,r.g);case 10:return e.h===r.h&&at(e.b,r.b);case 11:return Iu(e.g,r.g)}}function Iu(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!at(e[t],r[t]))return!1;return!0}var rh=v(function(e,r){return JSON.stringify(r,null,e)+""});function ec(e){return e}function nh(){return[]}function ah(){return{}}var th=L(function(e,r,n){return n[e]=r,n});function ih(e){return v(function(r,n){return n.push(e(r)),n})}var oh=null;function Ba(e){return{$:0,a:e}}function ch(e){return{$:1,a:e}}function na(e){return{$:2,b:e,c:null}}var c$=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function $h(e){return{$:5,b:e}}var lh=0;function Y$(e){var r={$:0,e:lh++,f:e,g:null,h:[]};return X$(r),r}function Sf(e){return na(function(r){r(Ba(Y$(e)))})}function wf(e,r){e.h.push(r),X$(e)}var uh=v(function(e,r){return na(function(n){wf(e,r),n(Ba(xi))})}),Ic=!1,Eu=[];function X$(e){if(Eu.push(e),!Ic){for(Ic=!0;e=Eu.shift();)vh(e);Ic=!1}}function vh(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,X$(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}X(function(e,r,n,t){return Q$(r,t,e.he,e.iK,e.ik,function(){return function(){}})});function Q$(e,r,n,t,i,o){var c=a(yf,e,r?r.flags:void 0);Kr(c)||Tt(2);var $={},l=n(c.a),f=l.a,s=o(b,f),d=fh($,b);function b(p,w){var y=a(t,p,f);s(f=y.a,w),Bu($,y.b,i(f))}return Bu($,l.b,i(f)),d?{ports:d}:{}}var Sn={};function fh(e,r){var n;for(var t in Sn){var i=Sn[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=sh(i,r)}return n}function mh(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function sh(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function $(l){return a(c$,$,$h(function(f){var s=f.a;return f.$===0?m(i,n,s,l):o&&c?P(t,n,s.i,s.j,l):m(t,n,o?s.i:s.j,l)}))}return n.h=Y$(a(c$,$,e.b))}var dh=v(function(e,r){return na(function(n){e.g(r),n(Ba(xi))})});v(function(e,r){return a(uh,e.h,{$:0,a:r})});function xf(e){return function(r){return{$:1,k:e,l:r}}}function ph(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var ju=[],Ec=!1;function Bu(e,r,n){if(ju.push({p:e,q:r,r:n}),!Ec){Ec=!0;for(var t;t=ju.shift();)gh(t.p,t.q,t.r);Ec=!1}}function gh(e,r,n){var t={};Po(!0,r,t,null),Po(!1,n,t,null);for(var i in e)wf(e[i],{$:"fx",a:t[i]||{i:M,j:M}})}function Po(e,r,n,t){switch(r.$){case 1:var i=r.k,o=hh(e,i,t,r.l);n[i]=bh(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Po(e,c.a,n,t);return;case 3:Po(e,r.o,n,{s:r.n,t});return}}function hh(e,r,n,t){function i(c){for(var $=n;$;$=$.t)c=$.s(c);return c}var o=e?Sn[r].e:Sn[r].f;return a(o,i,t)}function bh(e,r,n){return n=n||{i:M,j:M},e?n.i=Cn(r,n.i):n.j=Cn(r,n.j),n}function _h(e){Sn[e]&&Tt(3)}v(function(e,r){return r});function yh(e,r){return _h(e),Sn[e]={f:Sh,u:r,a:wh},xf(e)}var Sh=v(function(e,r){return function(n){return e(r(n))}});function wh(e,r){var n=M,t=Sn[e].u,i=Ba(null);Sn[e].b=i,Sn[e].c=L(function(c,$,l){return n=$,i});function o(c){var $=a(yf,t,c);Kr($)||Tt(4,e,$.a);for(var l=$.a,f=n;f.b;f=f.b)r(f.a(l))}return{send:o}}var Co,Jn=typeof document!="undefined"?document:{};function Z$(e,r){e.appendChild(r)}X(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild($a(e,function(){}),i),{}});function $$(e){return{$:0,a:e}}var Pf=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:el(n),e:i,f:e,b:o}})}),Wn=Pf(void 0),xh=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:el(n),e:i,f:e,b:o}})}),Ph=xh(void 0);function Ch(e,r,n,t){return{$:3,d:el(e),g:r,h:n,i:t}}var kh=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function da(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return da([e,r],function(){return e(r)})});L(function(e,r,n){return da([e,r,n],function(){return a(e,r,n)})});var zh=X(function(e,r,n,t){return da([e,r,n,t],function(){return m(e,r,n,t)})});qe(function(e,r,n,t,i){return da([e,r,n,t,i],function(){return P(e,r,n,t,i)})});Rr(function(e,r,n,t,i,o){return da([e,r,n,t,i,o],function(){return W(e,r,n,t,i,o)})});Qo(function(e,r,n,t,i,o,c){return da([e,r,n,t,i,o,c],function(){return zr(e,r,n,t,i,o,c)})});Ee(function(e,r,n,t,i,o,c,$){return da([e,r,n,t,i,o,c,$],function(){return q$(e,r,n,t,i,o,c,$)})});U$(function(e,r,n,t,i,o,c,$,l){return da([e,r,n,t,i,o,c,$,l],function(){return wi(e,r,n,t,i,o,c,$,l)})});var Cf=v(function(e,r){return{$:"a0",n:e,o:r}}),Mh=v(function(e,r){return{$:"a1",n:e,o:r}}),K$=v(function(e,r){return{$:"a2",n:e,o:r}}),fn=v(function(e,r){return{$:"a3",n:e,o:r}});L(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function kf(e){return e=="script"?"p":e}function Lh(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Th(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Dh(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function zf(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Wh=v(function(e,r){return r.$==="a0"?a(Cf,r.n,Ah(e,r.o)):r});function Ah(e,r){var n=dl(r);return{$:r.$,a:n?m(sl,n<3?Fh:Ih,Ye(e),r.a):a(li,e,r.a)}}var Fh=v(function(e,r){return _(e(r.a),r.b)}),Ih=v(function(e,r){return{aE:e(r.aE),dP:r.dP,dG:r.dG}});function el(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Vu(r,i,o):r[i]=o;continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?Vu(c,i,o):c[i]=o}return r}function Vu(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function $a(e,r){var n=e.$;if(n===5)return $a(e.k||(e.k=e.m()),r);if(n===0)return Jn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=$a(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return l$(c,r,e.d),c}var c=e.f?Jn.createElementNS(e.f,e.c):Jn.createElement(e.c);Co&&e.c=="a"&&c.addEventListener("click",Co(c)),l$(c,r,e.d);for(var $=e.e,l=0;l<$.length;l++)Z$(c,$a(n===1?$[l]:$[l].b,r));return c}function l$(e,r,n){for(var t in n){var i=n[t];t==="a1"?Eh(e,i):t==="a0"?Vh(e,r,i):t==="a3"?jh(e,i):t==="a4"?Bh(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Eh(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function jh(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Bh(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Vh(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var $=c.q;if($.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Rh(r,o),e.addEventListener(i,c,rl&&{passive:dl(o)<2}),t[i]=c}}var rl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){rl=!0}}))}catch{}function Rh(e,r){function n(t){var i=n.q,o=Gr(i.a,t);if(!!Kr(o)){for(var c=dl(i),$=o.a,l=c?c<3?$.a:$.aE:$,f=c==1?$.b:c==3&&$.dP,s=(f&&t.stopPropagation(),(c==2?$.b:c==3&&$.dG)&&t.preventDefault(),e),d,b;d=s.j;){if(typeof d=="function")l=d(l);else for(var b=d.length;b--;)l=d[b](l);s=s.p}s(l,f)}}return n.q=r,n}function Nh(e,r){return e.$==r.$&&at(e.a,r.a)}function Mf(e,r){var n=[];return en(e,r,n,0),n}function br(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function en(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Xh(r),o=1;else{br(n,0,t,r);return}switch(o){case 5:for(var c=e.l,$=r.l,l=c.length,f=l===$.length;f&&l--;)f=c[l]===$[l];if(f){r.k=e.k;return}r.k=r.m();var s=[];en(e.k,r.k,s,0),s.length>0&&br(n,1,t,s);return;case 4:for(var d=e.j,b=r.j,p=!1,w=e.k;w.$===4;)p=!0,typeof d!="object"?d=[d,w.j]:d.push(w.j),w=w.k;for(var y=r.k;y.$===4;)p=!0,typeof b!="object"?b=[b,y.j]:b.push(y.j),y=y.k;if(p&&d.length!==b.length){br(n,0,t,r);return}(p?!Gh(d,b):d!==b)&&br(n,2,t,b),en(w,y,n,t+1);return;case 0:e.a!==r.a&&br(n,3,t,r.a);return;case 1:Ru(e,r,n,t,Hh);return;case 2:Ru(e,r,n,t,Jh);return;case 3:if(e.h!==r.h){br(n,0,t,r);return}var C=nl(e.d,r.d);C&&br(n,4,t,C);var z=r.i(e.g,r.g);z&&br(n,5,t,z);return}}}function Gh(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Ru(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){br(n,0,t,r);return}var o=nl(e.d,r.d);o&&br(n,4,t,o),i(e,r,n,t)}function nl(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=nl(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],$=r[i];c===$&&i!=="value"&&i!=="checked"||n==="a0"&&Nh(c,$)||(t=t||{},t[i]=$)}for(var l in r)l in e||(t=t||{},t[l]=r[l]);return t}function Hh(e,r,n,t){var i=e.e,o=r.e,c=i.length,$=o.length;c>$?br(n,6,t,{v:$,i:c-$}):c<$&&br(n,7,t,{v:c,e:o});for(var l=c<$?c:$,f=0;f<l;f++){var s=i[f];en(s,o[f],n,++t),t+=s.b||0}}function Jh(e,r,n,t){for(var i=[],o={},c=[],$=e.e,l=r.e,f=$.length,s=l.length,d=0,b=0,p=t;d<f&&b<s;){var w=$[d],y=l[b],C=w.a,z=y.a,x=w.b,T=y.b,G=void 0,ne=void 0;if(C===z){p++,en(x,T,i,p),p+=x.b||0,d++,b++;continue}var te=$[d+1],ie=l[b+1];if(te){var $e=te.a,oe=te.b;ne=z===$e}if(ie){var ee=ie.a,be=ie.b;G=C===ee}if(G&&ne){p++,en(x,be,i,p),Gt(o,i,C,T,b,c),p+=x.b||0,p++,Ht(o,i,C,oe,p),p+=oe.b||0,d+=2,b+=2;continue}if(G){p++,Gt(o,i,z,T,b,c),en(x,be,i,p),p+=x.b||0,d+=1,b+=2;continue}if(ne){p++,Ht(o,i,C,x,p),p+=x.b||0,p++,en(oe,T,i,p),p+=oe.b||0,d+=2,b+=1;continue}if(te&&$e===ee){p++,Ht(o,i,C,x,p),Gt(o,i,z,T,b,c),p+=x.b||0,p++,en(oe,be,i,p),p+=oe.b||0,d+=2,b+=2;continue}break}for(;d<f;){p++;var w=$[d],x=w.b;Ht(o,i,w.a,x,p),p+=x.b||0,d++}for(;b<s;){var _e=_e||[],y=l[b];Gt(o,i,y.a,y.b,void 0,_e),b++}(i.length>0||c.length>0||_e)&&br(n,8,t,{w:i,x:c,y:_e})}var Lf="_elmW6BL";function Gt(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var $=[];en(c.z,t,$,c.r),c.r=i,c.s.s={w:$,A:c};return}Gt(e,r,n+Lf,t,i,o)}function Ht(e,r,n,t,i){var o=e[n];if(!o){var c=br(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var $=[];en(t,o.z,$,i),br(r,9,i,{w:$,A:o});return}Ht(e,r,n+Lf,t,i)}function Tf(e,r,n,t){Jt(e,r,n,0,0,r.b,t)}function Jt(e,r,n,t,i,o,c){for(var $=n[t],l=$.r;l===i;){var f=$.$;if(f===1)Tf(e,r.k,$.s,c);else if(f===8){$.t=e,$.u=c;var s=$.s.w;s.length>0&&Jt(e,r,s,0,i,o,c)}else if(f===9){$.t=e,$.u=c;var d=$.s;if(d){d.A.s=e;var s=d.w;s.length>0&&Jt(e,r,s,0,i,o,c)}}else $.t=e,$.u=c;if(t++,!($=n[t])||(l=$.r)>o)return t}var b=r.$;if(b===4){for(var p=r.k;p.$===4;)p=p.k;return Jt(e,p,n,t,i+1,o,e.elm_event_node_ref)}for(var w=r.e,y=e.childNodes,C=0;C<w.length;C++){i++;var z=b===1?w[C]:w[C].b,x=i+(z.b||0);if(i<=l&&l<=x&&(t=Jt(y[C],z,n,t,i,x,c),!($=n[t])||(l=$.r)>o))return t;i=x}return t}function Df(e,r,n,t){return n.length===0?e:(Tf(e,r,n,t),ko(e,n))}function ko(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Oh(i,t);i===e&&(e=o)}return e}function Oh(e,r){switch(r.$){case 0:return Uh(e,r.s,r.u);case 4:return l$(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ko(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore($a(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ko(e,o.w),e;case 8:return qh(e,r);case 5:return r.s(e);default:Tt(10)}}function Uh(e,r,n){var t=e.parentNode,i=$a(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function qh(e,r){var n=r.s,t=Yh(n.y,r);e=ko(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],$=c.A,l=$.c===2?$.s:$a($.z,r.u);e.insertBefore(l,e.childNodes[c.r])}return t&&Z$(e,t),e}function Yh(e,r){if(!!e){for(var n=Jn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Z$(n,o.c===2?o.s:$a(o.z,r.u))}return n}}function al(e){if(e.nodeType===3)return $$(e.textContent);if(e.nodeType!==1)return $$("");for(var r=M,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=Cn(a(fn,o,c),r)}for(var $=e.tagName.toLowerCase(),l=M,f=e.childNodes,t=f.length;t--;)l=Cn(al(f[t]),l);return m(Wn,$,r,l)}function Xh(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Qh=X(function(e,r,n,t){return Q$(r,t,e.he,e.iK,e.ik,function(i,o){var c=e.iN,$=t.node,l=al($);return Wf(o,function(f){var s=c(f),d=Mf(l,s);$=Df($,l,d,i),l=s})})});X(function(e,r,n,t){return Q$(r,t,e.he,e.iK,e.ik,function(i,o){var c=e.dO&&e.dO(i),$=e.iN,l=Jn.title,f=Jn.body,s=al(f);return Wf(o,function(d){Co=c;var b=$(d),p=Wn("body")(M)(b.ge),w=Mf(s,p);f=Df(f,s,w,i),s=p,Co=0,l!==b.iD&&(Jn.title=l=b.iD)})})});var zo=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Wf(e,r){r(e);var n=0;function t(){n=n===1?0:(zo(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&zo(t),n=2)}}v(function(e,r){return a(gl,Ci,na(function(){r&&history.go(r),e()}))});v(function(e,r){return a(gl,Ci,na(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(gl,Ci,na(function(){history.replaceState({},"",r),e()}))});var Zh={addEventListener:function(){},removeEventListener:function(){}},Kh=typeof window!="undefined"?window:Zh;L(function(e,r,n){return Sf(na(function(t){function i(o){Y$(n(o))}return e.addEventListener(r,i,rl&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Gr(e,r);return Kr(n)?H(n.a):B});function Af(e,r){return na(function(n){zo(function(){var t=document.getElementById(e);n(t?Ba(r(t)):ch(db(e)))})})}function e0(e){return na(function(r){zo(function(){r(Ba(e()))})})}v(function(e,r){return Af(r,function(n){return n[e](),xi})});v(function(e,r){return e0(function(){return Kh.scroll(e,r),xi})});L(function(e,r,n){return Af(e,function(t){return t.scrollLeft=r,t.scrollTop=n,xi})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var r0=v(function(e,r){var n="g";e.hx&&(n+="m"),e.gn&&(n+="i");try{return H(new RegExp(r,n))}catch{return B}});v(function(e,r){return r.match(e)!==null});var n0=L(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,$=-1,l;i++<e&&(l=r.exec(o))&&$!=r.lastIndex;){for(var f=l.length-1,s=new Array(f);f>0;){var d=l[f];s[--f]=d?H(d):B}t.push(P(hs,l[0],l.index,i,u(s))),$=r.lastIndex}return r.lastIndex=c,u(t)});X(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var $=arguments.length-3,l=new Array($);$>0;){var f=arguments[$];l[--$]=f?H(f):B}return n(P(hs,c,arguments[arguments.length-2],i,u(l)))}return t.replace(r,o)});L(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var $=r.exec(t);if(!$)break;i.push(t.slice(o,$.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,u(i)});var Nu=0;function ci(e,r){for(;r.b;r=r.b)e(r.a)}function tl(e){for(var r=0;e.b;e=e.b)r++;return r}var a0=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},t0=qe(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),i0=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),o0=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),c0=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),$0=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),l0=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),u0=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),v0=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),f0=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),m0=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},s0=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},d0=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},p0=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ff=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},If=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},g0=function(e){e.gl.disable(e.gl.CULL_FACE)},h0=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},b0=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},_0=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Gu=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],y0=[s0,d0,p0,Ff,If,g0,h0,b0,_0];function Hu(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function S0(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Ef(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function w0(e,r,n,t){for(var i=n.a.eh,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function $(p,w,y,C,z){var x;if(i===1)for(x=0;x<w;x++)p[y++]=w===1?C[z]:C[z][x];else o.forEach(function(T){for(x=0;x<w;x++)p[y++]=w===1?C[T][z]:C[T][z][x]})}var l=Ef(e,r.type);if(l===void 0)throw new Error("No info available for: "+r.type);var f=0,s=l.size*l.arraySize*i,d=new l.type(tl(n.b)*s);ci(function(p){$(d,l.size*l.arraySize,f,p,t[r.name]||r.name),f+=s},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function x0(e,r){if(r.a.eu>0){var n=e.createBuffer(),t=P0(r.c,r.a.eu);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.eh*tl(r.b),indexBuffer:null,buffers:{}}}function P0(e,r){var n=new Uint32Array(tl(e)*r),t=0,i;return ci(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Ju(e,r){return e+"#"+r}var jf=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Ff(n),If(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,$,l;if(o.b.id&&o.c.id&&(c=Ju(o.b.id,o.c.id),$=n.programs[c]),!$){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Nu++,f||(f=Hu(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=Nu++,s||(s=Hu(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=S0(t,f,s);$={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},$.uniformSetters=C0(t,e,$,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(l=0;l<b;l++){var p=t.getActiveAttrib(d,l),w=t.getAttribLocation(d,p.name);$.activeAttributes.push(p),$.activeAttributeLocations.push(w)}c=Ju(o.b.id,o.c.id),n.programs[c]=$}n.lastProgId!==c&&(t.useProgram($.glProgram),n.lastProgId=c),k0($.uniformSetters,o.e);var y=n.buffers.get(o.d);for(y||(y=x0(t,o.d),n.buffers.set(o.d,y)),l=0;l<$.activeAttributes.length;l++){p=$.activeAttributes[l],w=$.activeAttributeLocations[l],y.buffers[p.name]===void 0&&(y.buffers[p.name]=w0(t,p,o.d,$.attributes)),t.bindBuffer(t.ARRAY_BUFFER,y.buffers[p.name]);var C=Ef(t,p.type);if(C.arraySize===1)t.enableVertexAttribArray(w),t.vertexAttribPointer(w,C.size,C.baseType,!1,0,0);else for(var z=C.size*4,x=z*C.arraySize,T=0;T<C.arraySize;T++)t.enableVertexAttribArray(w+T),t.vertexAttribPointer(w+T,C.size,C.baseType,!1,x,z*T)}for(n.toggle=!n.toggle,ci(Tw(n),o.a),l=0;l<Gu.length;l++){var G=n[Gu[l]];G.toggle!==n.toggle&&G.enabled&&(y0[l](n),G.enabled=!1,G.toggle=n.toggle)}y.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,y.indexBuffer),t.drawElements(o.d.a.e5,y.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.e5,0,y.numIndices)}}return ci(i,e.g),r});function C0(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,$=r.f;function l(p,w){var y=w.name,C=e.getUniformLocation(p,y);switch(w.type){case e.INT:return function(x){o[y]!==x&&(e.uniform1i(C,x),o[y]=x)};case e.FLOAT:return function(x){o[y]!==x&&(e.uniform1f(C,x),o[y]=x)};case e.FLOAT_VEC2:return function(x){o[y]!==x&&(e.uniform2f(C,x[0],x[1]),o[y]=x)};case e.FLOAT_VEC3:return function(x){o[y]!==x&&(e.uniform3f(C,x[0],x[1],x[2]),o[y]=x)};case e.FLOAT_VEC4:return function(x){o[y]!==x&&(e.uniform4f(C,x[0],x[1],x[2],x[3]),o[y]=x)};case e.FLOAT_MAT4:return function(x){o[y]!==x&&(e.uniformMatrix4fv(C,!1,new Float32Array(x)),o[y]=x)};case e.SAMPLER_2D:var z=c++;return function(x){e.activeTexture(e.TEXTURE0+z);var T=$.textures.get(x);T||(T=x.gB(e),$.textures.set(x,T)),e.bindTexture(e.TEXTURE_2D,T),o[y]!==x&&(e.uniform1i(C,z),o[y]=x)};case e.BOOL:return function(x){o[y]!==x&&(e.uniform1i(C,x),o[y]=x)};default:return function(){}}}for(var f={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=l(i,b)}return f}function k0(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var z0=L(function(e,r,n){return Ch(r,{g:n,f:{},h:e},F0,I0)}),M0=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),L0=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),T0=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),D0=v(function(e,r){e.contextAttributes.antialias=!0}),W0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),A0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function F0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ci(function(i){return a(Lw,r,i)},e.h);var n=Jn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),a0(function(){return a(jf,e,n)})):(n=Jn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function I0(e,r){return r.f=e.f,jf(r)}var E0=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/j0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function j0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var il=new Float64Array(3),Ou=new Float64Array(3),Uu=new Float64Array(3),B0=L(function(e,r,n){return new Float64Array([e,r,n])}),V0=function(e){return e[0]},R0=function(e){return e[1]},N0=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var G0=function(e){return new Float64Array([e.iS,e.iW,e.d1])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function Bf(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(Bf);function Vf(e,r,n){return n===void 0&&(n=new Float64Array(3)),Mo(Bf(e,r,n),n)}v(Vf);function Rf(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function Mo(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Rf(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var H0=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ot=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ot);function u$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(u$);v(function(e,r){var n,t=il,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ot(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ot(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ot(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ot(r,t)+e[14])/n,i});var J0=X(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var O0=function(e){return{iS:e[0],iW:e[1],d1:e[2],fN:e[3]}},U0=function(e){return new Float64Array([e.iS,e.iW,e.d1,e.fN])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/q0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function q0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Y0=new Float64Array(16),X0=new Float64Array(16),Q0=function(e){var r=new Float64Array(16);return r[0]=e.eJ,r[1]=e.eN,r[2]=e.eR,r[3]=e.eV,r[4]=e.eK,r[5]=e.eO,r[6]=e.eS,r[7]=e.eW,r[8]=e.eL,r[9]=e.eP,r[10]=e.eT,r[11]=e.eX,r[12]=e.eM,r[13]=e.eQ,r[14]=e.eU,r[15]=e.eY,r},Z0=function(e){return{eJ:e[0],eN:e[1],eR:e[2],eV:e[3],eK:e[4],eO:e[5],eS:e[6],eW:e[7],eL:e[8],eP:e[9],eT:e[10],eX:e[11],eM:e[12],eQ:e[13],eU:e[14],eY:e[15]}};function Nf(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}Rr(Nf);X(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,$=i*r;return Nf(c,$,o,i,n,t)});function Gf(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}Rr(Gf);X(function(e,r,n,t){return Gf(e,r,n,t,-1,1)});function Hf(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],$=e[4],l=e[5],f=e[6],s=e[7],d=e[8],b=e[9],p=e[10],w=e[11],y=e[12],C=e[13],z=e[14],x=e[15],T=r[0],G=r[1],ne=r[2],te=r[3],ie=r[4],$e=r[5],oe=r[6],ee=r[7],be=r[8],_e=r[9],je=r[10],De=r[11],ge=r[12],Be=r[13],I=r[14],j=r[15];return n[0]=t*T+$*G+d*ne+y*te,n[1]=i*T+l*G+b*ne+C*te,n[2]=o*T+f*G+p*ne+z*te,n[3]=c*T+s*G+w*ne+x*te,n[4]=t*ie+$*$e+d*oe+y*ee,n[5]=i*ie+l*$e+b*oe+C*ee,n[6]=o*ie+f*$e+p*oe+z*ee,n[7]=c*ie+s*$e+w*oe+x*ee,n[8]=t*be+$*_e+d*je+y*De,n[9]=i*be+l*_e+b*je+C*De,n[10]=o*be+f*_e+p*je+z*De,n[11]=c*be+s*_e+w*je+x*De,n[12]=t*ge+$*Be+d*I+y*j,n[13]=i*ge+l*Be+b*I+C*j,n[14]=o*ge+f*Be+p*I+z*j,n[15]=c*ge+s*Be+w*I+x*j,n}v(Hf);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],$=e[5],l=e[6],f=e[8],s=e[9],d=e[10],b=e[12],p=e[13],w=e[14],y=r[0],C=r[1],z=r[2],x=r[4],T=r[5],G=r[6],ne=r[8],te=r[9],ie=r[10],$e=r[12],oe=r[13],ee=r[14];return n[0]=t*y+c*C+f*z,n[1]=i*y+$*C+s*z,n[2]=o*y+l*C+d*z,n[3]=0,n[4]=t*x+c*T+f*G,n[5]=i*x+$*T+s*G,n[6]=o*x+l*T+d*G,n[7]=0,n[8]=t*ne+c*te+f*ie,n[9]=i*ne+$*te+s*ie,n[10]=o*ne+l*te+d*ie,n[11]=0,n[12]=t*$e+c*oe+f*ee+b,n[13]=i*$e+$*oe+s*ee+p,n[14]=o*$e+l*oe+d*ee+w,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Mo(r,il);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),$=1-c,l=Math.sin(e);return n[0]=t*t*$+c,n[1]=i*t*$+o*l,n[2]=o*t*$-i*l,n[3]=0,n[4]=t*i*$-o*l,n[5]=i*i*$+c,n[6]=i*o*$+t*l,n[7]=0,n[8]=t*o*$+i*l,n[9]=i*o*$-t*l,n[10]=o*o*$+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});L(function(e,r,n){var t=new Float64Array(16),i=1/Rf(r),o=r[0]*i,c=r[1]*i,$=r[2]*i,l=Math.cos(e),f=1-l,s=Math.sin(e),d=o*s,b=c*s,p=$*s,w=o*c*f,y=o*$*f,C=c*$*f,z=o*o*f+l,x=w+p,T=y-b,G=w-p,ne=c*c*f+l,te=C+d,ie=y+b,$e=C-d,oe=$*$*f+l,ee=n[0],be=n[1],_e=n[2],je=n[3],De=n[4],ge=n[5],Be=n[6],I=n[7],j=n[8],V=n[9],R=n[10],N=n[11],J=n[12],O=n[13],U=n[14],nr=n[15];return t[0]=ee*z+De*x+j*T,t[1]=be*z+ge*x+V*T,t[2]=_e*z+Be*x+R*T,t[3]=je*z+I*x+N*T,t[4]=ee*G+De*ne+j*te,t[5]=be*G+ge*ne+V*te,t[6]=_e*G+Be*ne+R*te,t[7]=je*G+I*ne+N*te,t[8]=ee*ie+De*$e+j*oe,t[9]=be*ie+ge*$e+V*oe,t[10]=_e*ie+Be*$e+R*oe,t[11]=je*ie+I*$e+N*oe,t[12]=J,t[13]=O,t[14]=U,t[15]=nr,t});function K0(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}L(K0);X(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function eb(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}L(eb);X(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],$=t[2],l=t[3],f=t[4],s=t[5],d=t[6],b=t[7],p=t[8],w=t[9],y=t[10],C=t[11];return i[0]=o,i[1]=c,i[2]=$,i[3]=l,i[4]=f,i[5]=s,i[6]=d,i[7]=b,i[8]=p,i[9]=w,i[10]=y,i[11]=C,i[12]=o*e+f*r+p*n+t[12],i[13]=c*e+s*r+w*n+t[13],i[14]=$*e+d*r+y*n+t[14],i[15]=l*e+b*r+C*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],$=r[1],l=r[2],f=r[3],s=r[4],d=r[5],b=r[6],p=r[7],w=r[8],y=r[9],C=r[10],z=r[11];return n[0]=c,n[1]=$,n[2]=l,n[3]=f,n[4]=s,n[5]=d,n[6]=b,n[7]=p,n[8]=w,n[9]=y,n[10]=C,n[11]=z,n[12]=c*t+s*i+w*o+r[12],n[13]=$*t+d*i+y*o+r[13],n[14]=l*t+b*i+C*o+r[14],n[15]=f*t+p*i+z*o+r[15],n});L(function(e,r,n){var t=Vf(e,r,il),i=Mo(u$(n,t,Ou),Ou),o=Mo(u$(t,i,Uu),Uu),c=Y0,$=X0;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,$[0]=1,$[1]=0,$[2]=0,$[3]=0,$[4]=0,$[5]=1,$[6]=0,$[7]=0,$[8]=0,$[9]=0,$[10]=1,$[11]=0,$[12]=-e[0],$[13]=-e[1],$[14]=-e[2],$[15]=1,Hf(c,$)});L(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var S=Kp,Qi=Op,Jf=L(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,$){if(c.$){var f=c.a;return m(Qi,e,$,f)}else{var l=c.a;return m(Qi,o,$,l)}});return m(Qi,o,m(Qi,e,r,i),t)}),ol=L(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,$=e,l=m(e,t,i,m(ol,e,r,c)),f=o;e=$,r=l,n=f;continue e}}),qu=function(e){return m(ol,L(function(r,n,t){return a(S,_(r,n),t)}),M,e)},Of=1,rb=2,Uf=0,_r=function(e){return{$:1,a:e}},cl=v(function(e,r){return{$:3,a:e,b:r}}),Yu=v(function(e,r){return{$:0,a:e,b:r}}),qf=v(function(e,r){return{$:1,a:e,b:r}}),Oe=function(e){return{$:0,a:e}},nb=function(e){return{$:2,a:e}},H=function(e){return{$:0,a:e}},B={$:1},ab=Mg,Yf=rh,D=_f,fe=v(function(e,r){return a(Pg,e,Zo(r))}),$l=v(function(e,r){return u(a(xg,e,r))}),Xf=function(e){return a(fe,`
    `,a($l,`
`,e))},Me=L(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),$=i;e=o,r=c,n=$;continue e}else return r}),un=function(e){return m(Me,v(function(r,n){return n+1}),0,e)},rc=eg,tb=L(function(e,r,n){e:for(;;)if(ve(e,r)<1){var t=e,i=r-1,o=a(S,r,n);e=t,r=i,n=o;continue e}else return n}),wn=v(function(e,r){return m(tb,e,r,M)}),ll=v(function(e,r){return m(rc,e,a(wn,0,un(r)-1),r)}),xn=Ig,Qf=function(e){var r=xn(e);return 97<=r&&r<=122},Zf=function(e){var r=xn(e);return r<=90&&65<=r},ib=function(e){return Qf(e)||Zf(e)},ob=function(e){var r=xn(e);return r<=57&&48<=r},cb=function(e){return Qf(e)||Zf(e)||ob(e)},Le=function(e){return m(Me,S,M,e)},Dt=_g,$b=v(function(e,r){return`

(`+(D(e+1)+(") "+Xf(lb(r))))}),lb=function(e){return a(ub,e,M)},ub=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,t=function(){var y=Dt(n);if(y.$===1)return!1;var C=y.a,z=C.a,x=C.b;return ib(z)&&a(ab,cb,x)}(),i=t?"."+n:"['"+(n+"']"),l=c,f=a(S,i,r);e=l,r=f;continue e;case 1:var o=e.a,c=e.b,$="["+(D(o)+"]"),l=c,f=a(S,$,r);e=l,r=f;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(fe,"",Le(r)):"Json.Decode.oneOf"}(),w=d+(" failed in the following "+(D(un(s))+" ways:"));return a(fe,`

`,a(S,w,a(ll,$b,s)))}else{var c=s.a,l=c,f=r;e=l,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(fe,"",Le(r)):"!"}();default:var b=e.a,p=e.b,w=function(){return r.b?"Problem with the value at json"+(a(fe,"",Le(r))+`:

    `):`Problem with the given value:

`}();return w+(Xf(a(Yf,4,p))+(`

`+b))}}),er=32,On=X(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Aa=Ep,$i=mg,ul=v(function(e,r){return Au(r)/Au(e)}),Ut=vg,tn=$i(a(ul,2,er)),vl=P(On,0,tn,Aa,Aa),Kf=Vp,Fa=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});var vb=v(function(e,r){return r(e)}),tt=sg,kn=Bp,tr=v(function(e,r){return ve(e,r)>0?e:r}),Ca=function(e){return{$:0,a:e}},fl=Rp,fb=v(function(e,r){e:for(;;){var n=a(fl,er,e),t=n.a,i=n.b,o=a(S,Ca(t),r);if(i.b){var c=i,$=o;e=c,r=$;continue e}else return Le(o)}}),em=function(e){var r=e.a;return r},mb=v(function(e,r){e:for(;;){var n=$i(r/er);if(n===1)return a(fl,er,e).a;var t=a(fb,e,M),i=n;e=t,r=i;continue e}}),ml=v(function(e,r){if(r.q){var n=r.q*er,t=tt(a(ul,er,n-1)),i=e?Le(r.E):r.E,o=a(mb,i,r.q);return P(On,kn(r.u)+n,a(tr,5,t*tn),o,r.u)}else return P(On,kn(r.u),tn,Aa,r.u)}),sb=qe(function(e,r,n,t,i){e:for(;;){if(r<0)return a(ml,!1,{E:t,q:n/er|0,u:i});var o=Fa(m(Kf,er,r,e)),c=e,$=r-er,l=n,f=a(S,o,t),s=i;e=c,r=$,n=l,t=f,i=s;continue e}}),rm=v(function(e,r){if(e<=0)return vl;var n=e%er,t=m(Kf,n,e-n,r),i=e-n-er;return W(sb,r,i,e,M,t)}),Kr=function(e){return!e.$},ae=qg,We=Rg,K=Og,Ae=Ng,nm=v(function(e,r){return{gv:r.gv,gx:e,bD:r.bD,eg:r.eg,eB:r.eB,fh:r.fh,bo:r.bo,iO:r.iO}}),li=Xg,sl=Qg,Ye=jg,dl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Sr=function(e){return e},db=Sr,Xu=Rr(function(e,r,n,t,i,o){return{en:o,es:r,fe:t,fj:n,fn:e,fo:i}}),pb=Lg,wa=yg,it=Cg,Pi=v(function(e,r){return e<1?r:m(it,e,wa(r),r)}),nc=Dg,ac=function(e){return e===""},tc=v(function(e,r){return e<1?"":m(it,0,e,r)}),am=Wg,Qu=qe(function(e,r,n,t,i){if(ac(i)||a(pb,"@",i))return B;var o=a(nc,":",i);if(o.b){if(o.b.b)return B;var c=o.a,$=am(a(Pi,c+1,i));if($.$===1)return B;var l=$;return H(zr(Xu,e,a(tc,c,i),l,r,n,t))}else return H(zr(Xu,e,i,B,r,n,t))}),Zu=X(function(e,r,n,t){if(ac(t))return B;var i=a(nc,"/",t);if(i.b){var o=i.a;return W(Qu,e,a(Pi,o,t),r,n,a(tc,o,t))}else return W(Qu,e,"/",r,n,t)}),Ku=L(function(e,r,n){if(ac(n))return B;var t=a(nc,"?",n);if(t.b){var i=t.a;return P(Zu,e,H(a(Pi,i+1,n)),r,a(tc,i,n))}else return P(Zu,e,B,r,n)});v(function(e,r){if(ac(r))return B;var n=a(nc,"#",r);if(n.b){var t=n.a;return m(Ku,e,H(a(Pi,t+1,r)),a(tc,t,r))}else return m(Ku,e,B,r)});var gb=Tg,Ci=function(e){},ki=Ba,hb=ki(0),tm=X(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,$=o.b;if($.b){var l=$.a,f=$.b;if(f.b){var s=f.a,d=f.b,b=n>500?m(Me,e,r,Le(d)):P(tm,e,r,n+1,d);return a(e,i,a(e,c,a(e,l,a(e,s,b))))}else return a(e,i,a(e,c,a(e,l,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),cr=L(function(e,r,n){return P(tm,e,r,0,n)}),q=v(function(e,r){return m(cr,v(function(n,t){return a(S,e(n),t)}),M,r)}),Lo=c$,pl=v(function(e,r){return a(Lo,function(n){return ki(e(n))},r)}),bb=L(function(e,r,n){return a(Lo,function(t){return a(Lo,function(i){return ki(a(e,t,i))},n)},r)}),_b=function(e){return m(cr,bb(S),ki(M),e)},yb=dh,Sb=v(function(e,r){var n=r;return Sf(a(Lo,yb(e),n))}),wb=L(function(e,r,n){return a(pl,function(t){return 0},_b(a(q,Sb(e),r)))}),xb=L(function(e,r,n){return ki(0)}),Pb=v(function(e,r){var n=r;return a(pl,e,n)});Sn.Task=mh(hb,wb,xb,Pb);var Cb=xf("Task"),gl=v(function(e,r){return Cb(a(pl,e,r))}),kb=Qh,zb=hg,To={$:1},im=function(e){return{$:2,a:e}},hl={$:0},Or=v(function(e,r){return{$:0,a:e,b:r}}),Ge=L(function(e,r,n){return r(e(n))}),Va=function(e){var r=e.b.s;return r.a},Mb=function(e){var r=e.a,n=e.b._,t=e.b.s,i=e.b.ap;if(i.b){var o=i.a,c=i.b;return H(a(Or,r,{s:o,ap:c,_:a(S,t,n)}))}else return B},Ce=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Lb=L(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dQ;return(ve(o+r.eg,Va(n).gv)>0?a(Ge,Mb,Ce(a(Or,To,i))):Sr)(a(Or,im({dQ:o+r.eg}),i));default:var c=i.s,$=c.a,l=c.b,f=a(nm,$.gx,F(r,{gv:$.gv+r.eg})),s=a(e,f,l);return a(Or,hl,{s:_(f,s),ap:M,_:a(S,i.s,i._)})}}),om=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),Tb=L(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,$=a(S,t,n);e=o,r=c,n=$;continue e}else return n}}),Db=v(function(e,r){return Le(m(Tb,e,r,M))}),cm=L(function(e,r,n){if(r<=0)return M;{var t=_(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,x=i.a,o=i.b,c=o.a;return u([x,c]);case 3:if(t.b.b.b.b){var $=t.b,x=$.a,l=$.b,c=l.a,f=l.b,s=f.a;return u([x,c,s])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,x=d.a,b=d.b,c=b.a,p=b.b,s=p.a,w=p.b,y=w.a,C=w.b;return e>1e3?a(S,x,a(S,c,a(S,s,a(S,y,a(Db,r-4,C))))):a(S,x,a(S,c,a(S,s,a(S,y,m(cm,e+1,r-4,C)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var z=t.b,x=z.a;return u([x])}}),$m=v(function(e,r){return m(cm,0,e,r)}),Wb=v(function(e,r){var n=r.b._,t=r.b.s,i=r.b.ap,o=Y(Le(n),Y(u([t]),i)),c=a($m,e,o),$=a(om,e,o);if($.b){var l=$.a,f=$.b;return a(Or,To,{s:l,ap:f,_:Le(c)})}else{var s=Le(c);if(s.b){var d=s.a,b=s.b;return a(Or,To,{s:d,ap:M,_:b})}else return r}}),Ab=function(e){var r=e.b;return a(Or,To,r)},Fb=function(e){var r=e.b;return a(Or,im({dQ:Va(e).gv}),r)},Ib=function(e){var r=e.b;return a(Or,hl,r)},Eb=v(function(e,r){switch(e.$){case 1:return Ab(r);case 2:return Ib(r);case 3:return Fb(r);default:var n=e.a;return a(Wb,n,r)}}),Do=v(function(e,r){var n=r.a,t=r.b;return _(e(n),t)}),jb=v(function(e,r){return F(r,{aR:e(r.aR)})}),lm=function(e){return{$:3,a:e}},um=function(e){return{$:2,a:e}},vm=v(function(e,r){return{$:0,a:e,b:r}}),Bb=v(function(e,r){return{$:1,a:e,b:r}}),Se=v(function(e,r){if(r.$)return B;var n=r.a;return H(e(n))}),Pe=function(e){return e<0?-e:e},fm=Ag,Vb=L(function(e,r,n){return a(Ce,0/0,fm(a(e,r,n)))}),Ia=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),Rb=Qp,Nb=wg,mm=function(e){return m(Nb,S,M,e)},Gb=v(function(e,r){var n=a(Ia,function(t){return t!=="0"&&t!=="."},mm(r));return Y(e&&n?"-":"",r)}),se=_f,v$=bg,sm=Eg,dm=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Dt(n);if(t.$===1)return"01";var i=t.a;return a(v$,"0",dm(i))}else{var o=xn(r);return o>=48&&o<57?a(v$,sm(o+1),n):"0"}},f$=fg,Hb=gg,ic=function(e){return a(v$,e,"")},pm=L(function(e,r,n){return e<=0?n:m(pm,e>>1,Y(r,r),e&1?Y(n,r):n)}),ui=v(function(e,r){return m(pm,e,r,"")}),m$=L(function(e,r,n){return Y(n,a(ui,e-wa(n),ic(r)))}),s$=Sg,gm=function(e){var r=a($l,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return _(n,i)}else{var n=r.a;return _(n,"0")}else return _("0","0")},Jb=function(e){var r=a($l,"e",se(Pe(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ce,0,am(a(gb,"+",i)?a(Pi,1,i):i)),c=gm(n),$=c.a,l=c.b,f=Y($,l),s=o<0?a(Ce,"0",a(Se,function(d){var b=d.a,p=d.b;return b+("."+p)},a(Se,Do(ic),Dt(Y(a(ui,Pe(o),"0"),f))))):m(m$,o+1,"0",f);return Y(e<0?"-":"",s)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},Ob=L(function(e,r,n){if(f$(n)||Hb(n))return se(n);var t=n<0,i=gm(Jb(Pe(n))),o=i.a,c=i.b,$=wa(o)+r,l=Y(a(ui,-$+1,"0"),m(m$,$,"0",Y(o,c))),f=wa(l),s=a(tr,1,$),d=a(e,t,m(it,s,f,l)),b=m(it,0,s,l),p=d?s$(a(Ce,"1",a(Se,dm,Dt(s$(b))))):b,w=wa(p),y=p==="0"?p:r<=0?Y(p,a(ui,Pe(r),"0")):ve(r,wa(c))<0?m(it,0,w-r,p)+("."+m(it,w-r,w,p)):Y(o+".",m(m$,r,"0",c));return a(Gb,t,y)}),hm=Ob(v(function(e,r){var n=Dt(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(xn(i))})),Ub=Vb(hm),qb=L(function(e,r,n){var t=a(ul,10,Pe(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(Ub,i,n)}),bl=Zp,Wt=v(function(e,r){e:for(;;){if(r.$===-2)return B;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(bl,e,n);switch(c){case 0:var $=e,l=i;e=$,r=l;continue e;case 1:return H(t);default:var $=e,l=o;e=$,r=l;continue e}}}),pe=qe(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),zn={$:-2},ht=qe(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,$=i.d,l=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,s=t.c,d=t.d,b=t.e;return W(pe,0,r,n,W(pe,1,f,s,d,b),W(pe,1,o,c,$,l))}else return W(pe,e,o,c,W(pe,0,r,n,t,$),l)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,s=t.c,p=t.d;p.a;var w=p.b,y=p.c,C=p.d,z=p.e,b=t.e;return W(pe,0,f,s,W(pe,1,w,y,C,z),W(pe,1,r,n,b,i))}else return W(pe,e,r,n,t,i)}),d$=L(function(e,r,n){if(n.$===-2)return W(pe,0,e,r,zn,zn);var t=n.a,i=n.b,o=n.c,c=n.d,$=n.e,l=a(bl,e,i);switch(l){case 0:return W(ht,t,i,o,m(d$,e,r,c),$);case 1:return W(pe,t,i,r,c,$);default:return W(ht,t,i,o,c,m(d$,e,r,$))}}),ka=L(function(e,r,n){var t=m(d$,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,$=t.e;return W(pe,1,i,o,c,$)}else{var l=t;return l}}),Yb=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},bm=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,$=i.d,l=i.e,f=e.e;f.a;var s=f.b,d=f.c,b=f.d;b.a;var p=b.b,w=b.c,y=b.d,C=b.e,z=f.e;return W(pe,0,p,w,W(pe,1,n,t,W(pe,0,o,c,$,l),y),W(pe,1,s,d,C,z))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,$=x.d,l=x.e,T=e.e;T.a;var s=T.b,d=T.c,b=T.d,z=T.e;return W(pe,1,n,t,W(pe,0,o,c,$,l),W(pe,0,s,d,b,z))}else return e},ev=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,$=i.d;$.a;var l=$.b,f=$.c,s=$.d,d=$.e,b=i.e,p=e.e;p.a;var w=p.b,y=p.c,C=p.d,z=p.e;return W(pe,0,o,c,W(pe,1,l,f,s,d),W(pe,1,n,t,b,W(pe,0,w,y,C,z)))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,T=x.d,b=x.e,G=e.e;G.a;var w=G.b,y=G.c,C=G.d,z=G.e;return W(pe,1,n,t,W(pe,0,o,c,T,b),W(pe,0,w,y,C,z))}else return e},Xb=Qo(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var $=o.b,l=o.c,f=o.d,s=o.e;return W(pe,n,$,l,f,W(pe,0,t,i,s,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,ev(r)}else break e;else return c.a,c.d,ev(r);else break e;return r}}),mo=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,$=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,W(pe,r,n,t,mo(i),$);var l=bm(e);if(l.$===-1){var f=l.a,s=l.b,d=l.c,b=l.d,p=l.e;return W(ht,f,s,d,mo(b),p)}else return zn}else return W(pe,r,n,t,mo(i),$)}else return zn},ei=v(function(e,r){if(r.$===-2)return zn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(ve(e,t)<0)if(o.$===-1&&o.a===1){o.a;var $=o.d;if($.$===-1&&!$.a)return $.a,W(pe,n,t,i,a(ei,e,o),c);var l=bm(r);if(l.$===-1){var f=l.a,s=l.b,d=l.c,b=l.d,p=l.e;return W(ht,f,s,d,a(ei,e,b),p)}else return zn}else return W(pe,n,t,i,a(ei,e,o),c);else return a(Qb,e,q$(Xb,e,r,n,t,i,o,c))}),Qb=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(ue(e,t)){var $=Yb(c);if($.$===-1){var l=$.b,f=$.c;return W(ht,n,l,f,o,mo(c))}else return zn}else return W(ht,n,t,i,o,a(ei,e,c))}else return zn}),Zb=v(function(e,r){var n=a(ei,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return W(pe,1,t,i,o,c)}else{var $=n;return $}}),Zi=L(function(e,r,n){var t=r(a(Wt,e,n));if(t.$)return a(Zb,e,n);var i=t.a;return m(ka,e,i,n)}),Kb=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Zi,r,Se(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(Bb,_(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Zi,r,Se(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(vm,_(o,c),m(qb,o,c,n))}));case 3:var r=e.a,n=e.b;return a(Zi,r,Se(function(t){return t.$===3?lm(n):t}));default:var r=e.a,n=e.b;return a(Zi,r,Se(function(t){return t.$===2?um(n):t}))}},e3=function(e){return jb(Kb(e))},r3=v(function(e,r){return a(q,e3(e),r)}),n3=v(function(e,r){return F(r,{gx:a(r3,e,r.gx)})}),a3=v(function(e,r){var n=r.a,t=r.b;return a(Or,n,F(t,{s:a(Do,n3(e),t.s)}))}),p$=v(function(e,r){var n=r.a,t=r.b;return _(n,e(t))}),t3=L(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Or,t,F(i,{s:a(p$,a(e,o.a,r),o)}))}),i3=X(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return F(t,{bE:!t.bE});case 2:var i=n.a;return F(t,{U:m(Lb,e,i,t.U)});case 3:var o=n.a;return F(t,{bw:o});case 4:var c=n.a;return F(t,{U:a(a3,c,t.U)});case 5:var $=n.a;return F(t,{U:m(t3,r,$,t.U)});default:var l=n.a;return F(t,{U:a(Eb,l,t.U)})}}),o3=v(function(e,r){return a(Or,hl,{s:_(e,r(e)),ap:M,_:M})}),c3=ph,rv=c3(M),$3=function(e){return{$:2,a:e}},on=Hg,bt=Gg,l3=yh("tick",a(ae,function(e){return a(ae,function(r){return a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return Ye({gv:c,bD:o,eg:i,eB:t,fh:n,bo:r,iO:e})},a(K,"clock",Ae))},a(K,"devicePixelRatio",Ae))},a(K,"dt",Ae))},a(K,"keyboard",a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function($){return a(ae,function(l){return a(ae,function(f){return a(ae,function(s){return a(ae,function(d){return Ye({f1:d,gz:s,ef:f,gM:l,hp:$,hP:c,hV:o,fv:i,fF:t})},a(K,"alt",We))},a(K,"control",We))},a(K,"down",We))},a(K,"downs",on(bt)))},a(K,"left",We))},a(K,"pressedKeys",on(bt)))},a(K,"right",We))},a(K,"shift",We))},a(K,"up",We))))},a(K,"pointer",a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function($){return a(ae,function(l){return a(ae,function(f){return Ye({ef:f,hl:l,hw:$,hW:c,hX:o,fF:i,iS:t,iW:n})},a(K,"down",We))},a(K,"isDown",We))},a(K,"move",We))},a(K,"rightDown",We))},a(K,"rightUp",We))},a(K,"up",We))},a(K,"x",Ae))},a(K,"y",Ae))))},a(K,"screen",a(ae,function(r){return a(ae,function(n){return Ye({g3:n,iQ:r})},a(K,"height",Ae))},a(K,"width",Ae))))},a(K,"wheel",a(ae,function(e){return a(ae,function(r){return Ye({gE:r,gF:e})},a(K,"deltaX",Ae))},a(K,"deltaY",Ae))))),u3=function(e){return e.dW,l3($3)},v3=function(e){return{$:5,a:e}},f3={$:0},_t=v(function(e,r){return e}),m3=function(e){var r=e.b.s;return r.b},s3=function(e){return{$:1,a:e}},d3=s3,_m=function(e){return{$:8,a:e}},we=_m,vi=function(e){return{$:0,a:e}},pa=L(function(e,r,n){return e(r(n))}),ym=a(pa,vi,_t),oa=ym,ze=function(e){return{$:1,a:e}},Br=ze,Sm=v(function(e,r){return{$:9,a:e,b:r}}),Jr={$:0},wm=v(function(e,r){return r.$===3?Jr:a(Sm,e,r)}),Wo=function(e){return a(wm,4,e)},g={fS:"a",cT:"atv",fU:"ab",fV:"cx",fW:"cy",fX:"acb",fY:"accx",fZ:"accy",f_:"acr",d4:"al",d5:"ar",f$:"at",cU:"ah",cV:"av",f3:"s",ga:"bh",gb:"b",gf:"w7",gh:"bd",gi:"bdt",b8:"bn",gj:"bs",cb:"cpe",gs:"cp",gt:"cpx",gu:"cpy",aA:"c",ch:"ctr",ci:"cb",cj:"ccx",aB:"ccy",bA:"cl",ck:"cr",gy:"ct",gC:"cptr",gD:"ctxt",gV:"fcs",em:"focus-within",gW:"fs",g_:"g",c4:"hbh",c5:"hc",eq:"he",c6:"hf",er:"hfp",g6:"hv",g9:"ic",hb:"fr",cq:"lbl",hf:"iml",hg:"imlf",hh:"imlp",hi:"implw",hj:"it",ho:"i",eI:"lnk",bk:"nb",e7:"notxt",hC:"ol",hE:"or",aZ:"oq",hJ:"oh",fb:"pg",fc:"p",hK:"ppe",hY:"ui",ah:"r",h0:"sb",h1:"sbx",h2:"sby",h3:"sbt",h8:"e",h9:"cap",ib:"sev",ih:"sk",io:"t",ip:"tc",iq:"w8",ir:"w2",is:"w9",it:"tj",cO:"tja",iu:"tl",iv:"w3",iw:"w5",ix:"w4",iy:"tr",iz:"w6",iA:"w1",iB:"tun",fD:"ts",a5:"clr",iJ:"u",dX:"wc",fO:"we",dY:"wf",fP:"wfp",dZ:"wrp"},_l=ec,Xr=v(function(e,r){return a(K$,e,_l(r))}),jr=Xr("className"),Xe=function(e){return ze(jr(e))},xm=v(function(e,r){return{$:2,a:e,b:r}}),p3=v(function(e,r){return{$:1,a:e,b:r}}),He=function(e){return{$:0,a:e}},pr=2,g3={$:0},Ur=g3,h3={$:0},b3=g.f3+(" "+g.aA),_3=g.f3+(" "+g.g_),y3=g.f3+(" "+g.fb),S3=g.f3+(" "+g.fc),w3=g.f3+(" "+g.ah),x3=g.f3+(" "+g.h8),P3=function(e){switch(e){case 0:return w3;case 1:return b3;case 2:return x3;case 3:return _3;case 4:return S3;default:return y3}},nv=function(e){return{$:1,a:e}},Sa={$:0},g$=function(e){return{$:1,a:e}},av=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),tv=L(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(q,function(o){return _(e,o)},t),r);case 2:var i=n.a;return Y(r,a(q,function(o){return _(e,o)},i));default:var t=n.a,i=n.b;return Y(a(q,function(o){return _(e,o)},t),Y(r,a(q,function(o){return _(e,o)},i)))}}),ot=4,C3=function(e){return{$:0,a:e}},k3=function(e){return{$:1,a:e}},xe=function(e){return e>31?k3(1<<e-32):C3(1<<e)},Pm=xe(41),Cm=xe(40),km=xe(42),zm=xe(43),yt=Wn("div"),oc=zn,yl=oc,_n=function(e){switch(e.$){case 0:var r=e.a;return D(r)+"px";case 1:return"auto";case 2:var n=e.a;return D(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(D(t)+_n(o));default:var i=e.a,o=e.b;return"max"+(D(i)+_n(o))}},Ve=dg,Ie=function(e){return D(Ve(e*255))},Sl=function(e){switch(e.$){case 0:return B;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return H("mv-"+(Ie(n)+("-"+(Ie(t)+("-"+Ie(i))))));default:var o=e.a,c=o.a,$=o.b,l=o.c,f=e.b,s=f.a,d=f.b,b=f.c,p=e.c,w=p.a,y=p.b,C=p.c,z=e.d;return H("tfrm-"+(Ie(c)+("-"+(Ie($)+("-"+(Ie(l)+("-"+(Ie(s)+("-"+(Ie(d)+("-"+(Ie(b)+("-"+(Ie(w)+("-"+(Ie(y)+("-"+(Ie(C)+("-"+Ie(z))))))))))))))))))))}},fi=function(e){switch(e.$){case 13:var l=e.a;return l;case 12:var l=e.a;return e.b,l;case 0:var n=e.a;return n;case 1:var l=e.a;return l;case 2:var r=e.a;return"font-size-"+D(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(fe,"-",a(q,_n,i.h_))+("-cols-"+(a(fe,"-",a(q,_n,i.am))+("-space-x-"+(_n(i.ic.a)+("-space-y-"+_n(i.ic.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(D(o.ah)+("-"+(D(o.gw)+("-"+(D(o.iQ)+("-"+D(o.g3)))))));case 11:var c=e.a,$=e.b,l=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(fe," ",a(q,function(s){var d=fi(s);if(d==="")return"";var b=d;return b+("-"+l)},$));default:var f=e.a;return a(Ce,"",Sl(f))}},Mm=v(function(e,r){var n=r;return m(ka,e,0,n)}),z3=v(function(e,r){var n=a(Wt,e,r);return!n.$}),Lm=v(function(e,r){var n=r;return a(z3,e,n)}),Tm=v(function(e,r){var n=r.a,t=r.b,i=fi(e);return a(Lm,i,n)?r:_(a(Mm,i,n),a(S,e,t))}),me=v(function(e,r){return{$:0,a:e,b:r}}),ri=v(function(e,r){return{$:0,a:e,b:r}}),k=function(e){return"."+e},M3=L(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(S,i,n)}),Wr=v(function(e,r){return m(cr,M3(e),M,r)}),ct=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(D(Ve(r*255))+(","+D(Ve(n*255))+(","+D(Ve(t*255))+(","+(se(i)+")")))))},h$=function(e){return a(fe," ",a(Wr,Sr,u([e.ev?H("inset"):B,H(se(e.e8.a)+"px"),H(se(e.e8.b)+"px"),H(se(e.a7)+"px"),H(se(e.bp)+"px"),H(ct(e.cf))])))},Dm=function(e){return u([a(ri,k(g.em)+":focus-within",a(Wr,Sr,u([a(Se,function(r){return a(me,"border-color",ct(r))},e.gg),a(Se,function(r){return a(me,"background-color",ct(r))},e.f8),a(Se,function(r){return a(me,"box-shadow",h$({a7:r.a7,cf:r.cf,ev:!1,e8:a(p$,Ut,a(Do,Ut,r.e8)),bp:r.bp}))},e.h4),H(a(me,"outline","none"))]))),a(ri,k(g.f3)+":focus .focusable, "+(k(g.f3)+".focusable:focus, "+(".ui-slide-bar:focus + "+(k(g.f3)+" .focusable-thumb"))),a(Wr,Sr,u([a(Se,function(r){return a(me,"border-color",ct(r))},e.gg),a(Se,function(r){return a(me,"background-color",ct(r))},e.f8),a(Se,function(r){return a(me,"box-shadow",h$({a7:r.a7,cf:r.cf,ev:!1,e8:a(p$,Ut,a(Do,Ut,r.e8)),bp:r.bp}))},e.h4),H(a(me,"outline","none"))])))])},hn=function(e){return Wn(kf(e))},Wm=v(function(e,r){return a(K$,Th(e),zf(r))}),jc=v(function(e,r){return{$:2,a:e,b:r}}),wl=function(e){return{$:6,a:e}},Z=v(function(e,r){return{$:1,a:e,b:r}}),Ir=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),L3=v(function(e,r){return{$:3,a:e,b:r}}),Am=u([0,1,2,3,4,5]),T3=v(function(e,r){return r.b?m(cr,S,r,e):e}),or=function(e){return m(cr,T3,M,e)},Ra=v(function(e,r){return or(a(q,e,r))}),D3=function(e){switch(e){case 0:return k(g.gy);case 1:return k(g.ci);case 2:return k(g.ck);case 3:return k(g.bA);case 4:return k(g.cj);default:return k(g.aB)}},Ao=function(e){switch(e){case 0:return k(g.f$);case 1:return k(g.fU);case 2:return k(g.d5);case 3:return k(g.d4);case 4:return k(g.fV);default:return k(g.fW)}},qt=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return u([a(A,D3(n),i),a(Z,k(g.f3),u([a(A,Ao(n),o)]))])};return wl(a(Ra,r,Am))},iv=u([a(h,"display","flex"),a(h,"flex-direction","column"),a(h,"white-space","pre"),a(A,k(g.c4),u([a(h,"z-index","0"),a(Z,k(g.ga),u([a(h,"z-index","-1")]))])),a(A,k(g.h3),u([a(Z,k(g.io),u([a(A,k(g.c6),u([a(h,"flex-grow","0")])),a(A,k(g.dY),u([a(h,"align-self","auto !important")]))]))])),a(Z,k(g.c5),u([a(h,"height","auto")])),a(Z,k(g.c6),u([a(h,"flex-grow","100000")])),a(Z,k(g.dY),u([a(h,"width","100%")])),a(Z,k(g.fP),u([a(h,"width","100%")])),a(Z,k(g.dX),u([a(h,"align-self","flex-start")])),qt(function(e){switch(e){case 0:return _(u([a(h,"justify-content","flex-start")]),u([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]));case 1:return _(u([a(h,"justify-content","flex-end")]),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]));case 2:return _(u([a(h,"align-items","flex-end")]),u([a(h,"align-self","flex-end")]));case 3:return _(u([a(h,"align-items","flex-start")]),u([a(h,"align-self","flex-start")]));case 4:return _(u([a(h,"align-items","center")]),u([a(h,"align-self","center")]));default:return _(u([a(Z,k(g.f3),u([a(h,"margin-top","auto"),a(h,"margin-bottom","auto")]))]),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))}})]),W3=function(e){var r=function(n){return u([a(Z,k(g.f3),u([a(A,Ao(n),e(n))]))])};return wl(a(Ra,r,Am))},A3=function(){return u([0,1,2,3,4,5])}(),F3=u([a(Ir,"html,body",u([a(h,"height","100%"),a(h,"padding","0"),a(h,"margin","0")])),a(Ir,Y(k(g.f3),Y(k(g.h8),k(g.g9))),u([a(h,"display","block"),a(A,k(g.c6),u([a(Z,"img",u([a(h,"max-height","100%"),a(h,"object-fit","cover")]))])),a(A,k(g.dY),u([a(Z,"img",u([a(h,"max-width","100%"),a(h,"object-fit","cover")]))]))])),a(Ir,k(g.f3)+":focus",u([a(h,"outline","none")])),a(Ir,k(g.hY),u([a(h,"width","100%"),a(h,"height","auto"),a(h,"min-height","100%"),a(h,"z-index","0"),a(A,Y(k(g.f3),k(g.c6)),u([a(h,"height","100%"),a(Z,k(g.c6),u([a(h,"height","100%")]))])),a(Z,k(g.hb),u([a(A,k(g.bk),u([a(h,"position","fixed"),a(h,"z-index","20")]))]))])),a(Ir,k(g.bk),u([a(h,"position","relative"),a(h,"border","none"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(A,k(g.h8),iv),wl(function(e){return a(q,e,A3)}(function(e){switch(e){case 0:return a(A,k(g.fS),u([a(h,"position","absolute"),a(h,"bottom","100%"),a(h,"left","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(Z,k(g.c6),u([a(h,"height","auto")])),a(Z,k(g.dY),u([a(h,"width","100%")])),a(h,"pointer-events","none"),a(Z,"*",u([a(h,"pointer-events","auto")]))]));case 1:return a(A,k(g.gb),u([a(h,"position","absolute"),a(h,"bottom","0"),a(h,"left","0"),a(h,"height","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(Z,"*",u([a(h,"pointer-events","auto")])),a(Z,k(g.c6),u([a(h,"height","auto")]))]));case 2:return a(A,k(g.hE),u([a(h,"position","absolute"),a(h,"left","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(Z,"*",u([a(h,"pointer-events","auto")]))]));case 3:return a(A,k(g.hC),u([a(h,"position","absolute"),a(h,"right","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(Z,"*",u([a(h,"pointer-events","auto")]))]));case 4:return a(A,k(g.hb),u([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(Z,"*",u([a(h,"pointer-events","auto")]))]));default:return a(A,k(g.ga),u([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"z-index","0"),a(h,"pointer-events","none"),a(Z,"*",u([a(h,"pointer-events","auto")]))]))}}))])),a(Ir,k(g.f3),u([a(h,"position","relative"),a(h,"border","none"),a(h,"flex-shrink","0"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(h,"resize","none"),a(h,"font-feature-settings","inherit"),a(h,"box-sizing","border-box"),a(h,"margin","0"),a(h,"padding","0"),a(h,"border-width","0"),a(h,"border-style","solid"),a(h,"font-size","inherit"),a(h,"color","inherit"),a(h,"font-family","inherit"),a(h,"line-height","1"),a(h,"font-weight","inherit"),a(h,"text-decoration","none"),a(h,"font-style","inherit"),a(A,k(g.dZ),u([a(h,"flex-wrap","wrap")])),a(A,k(g.e7),u([a(h,"-moz-user-select","none"),a(h,"-webkit-user-select","none"),a(h,"-ms-user-select","none"),a(h,"user-select","none")])),a(A,k(g.gC),u([a(h,"cursor","pointer")])),a(A,k(g.gD),u([a(h,"cursor","text")])),a(A,k(g.hK),u([a(h,"pointer-events","none !important")])),a(A,k(g.cb),u([a(h,"pointer-events","auto !important")])),a(A,k(g.a5),u([a(h,"opacity","0")])),a(A,k(g.aZ),u([a(h,"opacity","1")])),a(A,k(Y(g.g6,g.a5))+":hover",u([a(h,"opacity","0")])),a(A,k(Y(g.g6,g.aZ))+":hover",u([a(h,"opacity","1")])),a(A,k(Y(g.gV,g.a5))+":focus",u([a(h,"opacity","0")])),a(A,k(Y(g.gV,g.aZ))+":focus",u([a(h,"opacity","1")])),a(A,k(Y(g.cT,g.a5))+":active",u([a(h,"opacity","0")])),a(A,k(Y(g.cT,g.aZ))+":active",u([a(h,"opacity","1")])),a(A,k(g.fD),u([a(h,"transition",a(fe,", ",a(q,function(e){return e+" 160ms"},u(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,k(g.h0),u([a(h,"overflow","auto"),a(h,"flex-shrink","1")])),a(A,k(g.h1),u([a(h,"overflow-x","auto"),a(A,k(g.ah),u([a(h,"flex-shrink","1")]))])),a(A,k(g.h2),u([a(h,"overflow-y","auto"),a(A,k(g.aA),u([a(h,"flex-shrink","1")])),a(A,k(g.h8),u([a(h,"flex-shrink","1")]))])),a(A,k(g.gs),u([a(h,"overflow","hidden")])),a(A,k(g.gt),u([a(h,"overflow-x","hidden")])),a(A,k(g.gu),u([a(h,"overflow-y","hidden")])),a(A,k(g.dX),u([a(h,"width","auto")])),a(A,k(g.b8),u([a(h,"border-width","0")])),a(A,k(g.gh),u([a(h,"border-style","dashed")])),a(A,k(g.gi),u([a(h,"border-style","dotted")])),a(A,k(g.gj),u([a(h,"border-style","solid")])),a(A,k(g.io),u([a(h,"white-space","pre"),a(h,"display","inline-block")])),a(A,k(g.hj),u([a(h,"line-height","1.05"),a(h,"background","transparent"),a(h,"text-align","inherit")])),a(A,k(g.h8),iv),a(A,k(g.ah),u([a(h,"display","flex"),a(h,"flex-direction","row"),a(Z,k(g.f3),u([a(h,"flex-basis","0%"),a(A,k(g.fO),u([a(h,"flex-basis","auto")])),a(A,k(g.eI),u([a(h,"flex-basis","auto")]))])),a(Z,k(g.c6),u([a(h,"align-self","stretch !important")])),a(Z,k(g.er),u([a(h,"align-self","stretch !important")])),a(Z,k(g.dY),u([a(h,"flex-grow","100000")])),a(Z,k(g.ch),u([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"align-self","stretch")])),a(Z,"u:first-of-type."+g.f_,u([a(h,"flex-grow","1")])),a(Z,"s:first-of-type."+g.fY,u([a(h,"flex-grow","1"),a(Z,k(g.fV),u([a(h,"margin-left","auto !important")]))])),a(Z,"s:last-of-type."+g.fY,u([a(h,"flex-grow","1"),a(Z,k(g.fV),u([a(h,"margin-right","auto !important")]))])),a(Z,"s:only-of-type."+g.fY,u([a(h,"flex-grow","1"),a(Z,k(g.fW),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(Z,"s:last-of-type."+(g.fY+" ~ u"),u([a(h,"flex-grow","0")])),a(Z,"u:first-of-type."+(g.f_+(" ~ s."+g.fY)),u([a(h,"flex-grow","0")])),qt(function(e){switch(e){case 0:return _(u([a(h,"align-items","flex-start")]),u([a(h,"align-self","flex-start")]));case 1:return _(u([a(h,"align-items","flex-end")]),u([a(h,"align-self","flex-end")]));case 2:return _(u([a(h,"justify-content","flex-end")]),M);case 3:return _(u([a(h,"justify-content","flex-start")]),M);case 4:return _(u([a(h,"justify-content","center")]),M);default:return _(u([a(h,"align-items","center")]),u([a(h,"align-self","center")]))}}),a(A,k(g.ib),u([a(h,"justify-content","space-between")])),a(A,k(g.cq),u([a(h,"align-items","baseline")]))])),a(A,k(g.aA),u([a(h,"display","flex"),a(h,"flex-direction","column"),a(Z,k(g.f3),u([a(h,"flex-basis","0px"),a(h,"min-height","min-content"),a(A,k(g.eq),u([a(h,"flex-basis","auto")]))])),a(Z,k(g.c6),u([a(h,"flex-grow","100000")])),a(Z,k(g.dY),u([a(h,"width","100%")])),a(Z,k(g.fP),u([a(h,"width","100%")])),a(Z,k(g.dX),u([a(h,"align-self","flex-start")])),a(Z,"u:first-of-type."+g.fX,u([a(h,"flex-grow","1")])),a(Z,"s:first-of-type."+g.fZ,u([a(h,"flex-grow","1"),a(Z,k(g.fW),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]))])),a(Z,"s:last-of-type."+g.fZ,u([a(h,"flex-grow","1"),a(Z,k(g.fW),u([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]))])),a(Z,"s:only-of-type."+g.fZ,u([a(h,"flex-grow","1"),a(Z,k(g.fW),u([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(Z,"s:last-of-type."+(g.fZ+" ~ u"),u([a(h,"flex-grow","0")])),a(Z,"u:first-of-type."+(g.fX+(" ~ s."+g.fZ)),u([a(h,"flex-grow","0")])),qt(function(e){switch(e){case 0:return _(u([a(h,"justify-content","flex-start")]),u([a(h,"margin-bottom","auto")]));case 1:return _(u([a(h,"justify-content","flex-end")]),u([a(h,"margin-top","auto")]));case 2:return _(u([a(h,"align-items","flex-end")]),u([a(h,"align-self","flex-end")]));case 3:return _(u([a(h,"align-items","flex-start")]),u([a(h,"align-self","flex-start")]));case 4:return _(u([a(h,"align-items","center")]),u([a(h,"align-self","center")]));default:return _(u([a(h,"justify-content","center")]),M)}}),a(Z,k(g.ch),u([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"width","100%"),a(h,"align-self","stretch !important")])),a(A,k(g.ib),u([a(h,"justify-content","space-between")]))])),a(A,k(g.g_),u([a(h,"display","-ms-grid"),a(Z,".gp",u([a(Z,k(g.f3),u([a(h,"width","100%")]))])),a(L3,_("display","grid"),u([_("display","grid")])),W3(function(e){switch(e){case 0:return u([a(h,"justify-content","flex-start")]);case 1:return u([a(h,"justify-content","flex-end")]);case 2:return u([a(h,"align-items","flex-end")]);case 3:return u([a(h,"align-items","flex-start")]);case 4:return u([a(h,"align-items","center")]);default:return u([a(h,"justify-content","center")])}})])),a(A,k(g.fb),u([a(h,"display","block"),a(Z,k(g.f3+":first-child"),u([a(h,"margin","0 !important")])),a(Z,k(g.f3+(Ao(3)+(":first-child + ."+g.f3))),u([a(h,"margin","0 !important")])),a(Z,k(g.f3+(Ao(2)+(":first-child + ."+g.f3))),u([a(h,"margin","0 !important")])),qt(function(e){switch(e){case 0:return _(M,M);case 1:return _(M,M);case 2:return _(M,u([a(h,"float","right"),a(A,"::after",u([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 3:return _(M,u([a(h,"float","left"),a(A,"::after",u([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 4:return _(M,M);default:return _(M,M)}})])),a(A,k(g.hf),u([a(h,"white-space","pre-wrap !important"),a(h,"height","100%"),a(h,"width","100%"),a(h,"background-color","transparent")])),a(A,k(g.hi),u([a(A,k(g.h8),u([a(h,"flex-basis","auto")]))])),a(A,k(g.hh),u([a(h,"white-space","pre-wrap !important"),a(h,"cursor","text"),a(Z,k(g.hg),u([a(h,"white-space","pre-wrap !important"),a(h,"color","transparent")]))])),a(A,k(g.fc),u([a(h,"display","block"),a(h,"white-space","normal"),a(h,"overflow-wrap","break-word"),a(A,k(g.c4),u([a(h,"z-index","0"),a(Z,k(g.ga),u([a(h,"z-index","-1")]))])),a(jc,k(g.io),u([a(h,"display","inline"),a(h,"white-space","normal")])),a(jc,k(g.fc),u([a(h,"display","inline"),a(A,"::after",u([a(h,"content","none")])),a(A,"::before",u([a(h,"content","none")]))])),a(jc,k(g.h8),u([a(h,"display","inline"),a(h,"white-space","normal"),a(A,k(g.fO),u([a(h,"display","inline-block")])),a(A,k(g.hb),u([a(h,"display","flex")])),a(A,k(g.ga),u([a(h,"display","flex")])),a(A,k(g.fS),u([a(h,"display","flex")])),a(A,k(g.gb),u([a(h,"display","flex")])),a(A,k(g.hE),u([a(h,"display","flex")])),a(A,k(g.hC),u([a(h,"display","flex")])),a(Z,k(g.io),u([a(h,"display","inline"),a(h,"white-space","normal")]))])),a(Z,k(g.ah),u([a(h,"display","inline")])),a(Z,k(g.aA),u([a(h,"display","inline-flex")])),a(Z,k(g.g_),u([a(h,"display","inline-grid")])),qt(function(e){switch(e){case 0:return _(M,M);case 1:return _(M,M);case 2:return _(M,u([a(h,"float","right")]));case 3:return _(M,u([a(h,"float","left")]));case 4:return _(M,M);default:return _(M,M)}})])),a(A,".hidden",u([a(h,"display","none")])),a(A,k(g.iA),u([a(h,"font-weight","100")])),a(A,k(g.ir),u([a(h,"font-weight","200")])),a(A,k(g.iv),u([a(h,"font-weight","300")])),a(A,k(g.ix),u([a(h,"font-weight","400")])),a(A,k(g.iw),u([a(h,"font-weight","500")])),a(A,k(g.iz),u([a(h,"font-weight","600")])),a(A,k(g.gf),u([a(h,"font-weight","700")])),a(A,k(g.iq),u([a(h,"font-weight","800")])),a(A,k(g.is),u([a(h,"font-weight","900")])),a(A,k(g.ho),u([a(h,"font-style","italic")])),a(A,k(g.ih),u([a(h,"text-decoration","line-through")])),a(A,k(g.iJ),u([a(h,"text-decoration","underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(A,Y(k(g.iJ),k(g.ih)),u([a(h,"text-decoration","line-through underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(A,k(g.iB),u([a(h,"font-style","normal")])),a(A,k(g.it),u([a(h,"text-align","justify")])),a(A,k(g.cO),u([a(h,"text-align","justify-all")])),a(A,k(g.ip),u([a(h,"text-align","center")])),a(A,k(g.iy),u([a(h,"text-align","right")])),a(A,k(g.iu),u([a(h,"text-align","left")])),a(A,".modal",u([a(h,"position","fixed"),a(h,"left","0"),a(h,"top","0"),a(h,"width","100%"),a(h,"height","100%"),a(h,"pointer-events","none")]))]))]),ta=function(e){return u([a(Ir,".v-"+e,u([a(h,"font-feature-settings",'"'+(e+'"'))])),a(Ir,".v-"+(e+"-off"),u([a(h,"font-feature-settings",'"'+(e+'" 0'))]))])},I3=or(u([a(q,function(e){return a(Ir,".border-"+D(e),u([a(h,"border-width",D(e)+"px")]))},a(wn,0,6)),a(q,function(e){return a(Ir,".font-size-"+D(e),u([a(h,"font-size",D(e)+"px")]))},a(wn,8,32)),a(q,function(e){return a(Ir,".p-"+D(e),u([a(h,"padding",D(e)+"px")]))},a(wn,0,24)),u([a(Ir,".v-smcp",u([a(h,"font-variant","small-caps")])),a(Ir,".v-smcp-off",u([a(h,"font-variant","normal")]))]),ta("zero"),ta("onum"),ta("liga"),ta("dlig"),ta("ordn"),ta("tnum"),ta("afrc"),ta("frac")])),E3=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(g.f3+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(g.f3+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),j3=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,B3=`
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
`,V3=`
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
`,R3=`
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
`,N3="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(k(g.f3)+(k(g.ah)+(" > "+(k(g.f3)+(" { flex-basis: auto !important; } "+(k(g.f3)+(k(g.ah)+(" > "+(k(g.f3)+(k(g.ch)+(" { flex-basis: auto !important; }}"+(j3+(B3+(R3+(V3+E3))))))))))))))),za=function(e){return a(fe,"",e)},et=v(function(e,r){return{cd:r,J:M,aI:M,ai:e}}),rt=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,$=i.b;return F(o,{aI:a(S,_(c,$),o.aI)});case 3:var l=i.a,f=l.a,s=l.b,d=i.b;return F(o,{J:a(S,{cd:`
}`,J:M,aI:d,ai:"@supports ("+(f+(":"+(s+(") {"+n.ai))))},o.J)});case 5:var b=i.a,p=i.b;return F(o,{J:a(S,a(rt,a(et,n.ai+(" + "+b),""),p),o.J)});case 1:var w=i.a,y=i.b;return F(o,{J:a(S,a(rt,a(et,n.ai+(" > "+w),""),y),o.J)});case 2:var w=i.a,y=i.b;return F(o,{J:a(S,a(rt,a(et,n.ai+(" "+w),""),y),o.J)});case 4:var C=i.a,z=i.b;return F(o,{J:a(S,a(rt,a(et,Y(n.ai,C),""),z),o.J)});default:var x=i.a;return F(o,{J:a(S,a(rt,a(et,n.ai,""),x),o.J)})}});return m(cr,t,n,r)}),G3=function(e){var r=function(i){return za(a(q,function(o){var c=o.a,$=o.b;return c+(":"+($+";"))},i))},n=function(i){var o=i.aI;return o.b?i.ai+("{"+(r(i.aI)+(i.cd+"}"))):""},t=function(i){var o=i;return Y(n(o),za(a(q,t,o.J)))};return za(a(q,t,m(cr,v(function(i,o){var c=i.a,$=i.b;return a(S,a(rt,a(et,c,""),$),o)}),M,e)))},ov=Y(N3,G3(Y(F3,I3))),ua=$$,Fm=function(e){var r=e.e5;switch(r){case 0:return m(hn,"div",M,u([m(hn,"style",M,u([ua(ov)]))]));case 1:return ua("");default:return m(hn,"elm-ui-static-rules",u([a(Wm,"rules",_l(ov))]),M)}},Un=v(function(e,r){return m(Me,ih(e),nh(),r)}),ga=function(e){return m(Me,v(function(r,n){var t=r.a,i=r.b;return m(th,t,i,n)}),ah(),e)},H3=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hy;return'"'+(r+'"')}},J3=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},O3=function(e){if(e.$===5){var r=e.a;return a(Ia,J3,r.fI)}else return!1},rn=v(function(e,r){return ve(e,r)<0?e:r}),Rt=L(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ne=X(function(e,r,n,t){if(r.$===1)return u([n+("{"+(m(Me,Rt(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.g6;switch(o){case 0:return M;case 2:return u([n+("-hv {"+(m(Me,Rt(!0),"",t)+`
}`))]);default:return u([n+("-hv:hover {"+(m(Me,Rt(!1),"",t)+`
}`))])}case 0:var c=m(Me,Rt(!1),"",t);return u([n+("-fs:focus {"+(c+`
}`)),"."+(g.f3+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(k(g.f3)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return u([n+("-act:active {"+(m(Me,Rt(!1),"",t)+`
}`))])}}),U3=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+D(n)))}},q3=function(e){if(e.$===5){var r=e.a;return H(a(fe,", ",a(q,U3,r.fI)))}else return B},Y3=function(e){switch(e.$){case 0:return B;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return H("translate3d("+(se(n)+("px, "+(se(t)+("px, "+(se(i)+"px)"))))));default:var o=e.a,c=o.a,$=o.b,l=o.c,f=e.b,s=f.a,d=f.b,b=f.c,p=e.c,w=p.a,y=p.b,C=p.c,z=e.d,x="translate3d("+(se(c)+("px, "+(se($)+("px, "+(se(l)+"px)"))))),T="scale3d("+(se(s)+(", "+(se(d)+(", "+(se(b)+")"))))),G="rotate3d("+(se(w)+(", "+(se(y)+(", "+(se(C)+(", "+(se(z)+"rad)")))))));return H(x+(" "+(T+(" "+G))))}},xl=L(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(Ne,e,n,t,i);case 13:var l=r.a,b=r.b;return P(Ne,e,n,"."+l,u([a(me,"box-shadow",b)]));case 12:var l=r.a,o=r.b,c=a(tr,0,a(rn,1,1-o));return P(Ne,e,n,"."+l,u([a(me,"opacity",se(c))]));case 2:var $=r.a;return P(Ne,e,n,".font-size-"+D($),u([a(me,"font-size",D($)+"px")]));case 1:var l=r.a,f=r.b,s=a(fe,", ",a(Wr,q3,f)),d=u([a(me,"font-family",a(fe,", ",a(q,H3,f))),a(me,"font-feature-settings",s),a(me,"font-variant",a(Ia,O3,f)?"small-caps":"normal")]);return P(Ne,e,n,"."+l,d);case 3:var he=r.a,b=r.b,Lc=r.c;return P(Ne,e,n,"."+he,u([a(me,b,Lc)]));case 4:var he=r.a,b=r.b,p=r.c;return P(Ne,e,n,"."+he,u([a(me,b,ct(p))]));case 5:var ee=r.a,w=r.b,y=r.c,C=D(y)+"px",z=D(w)+"px",x="."+g.ah,T="."+(g.dZ+x),_e="."+g.d5,G="."+g.fc,ne="."+g.fb,De="."+g.d4,te=se(y/2)+"px",ie=se(w/2)+"px",$e="."+g.aA,he="."+ee,oe="."+g.f3;return or(u([P(Ne,e,n,he+(x+(" > "+(oe+(" + "+oe)))),u([a(me,"margin-left",z)])),P(Ne,e,n,he+(T+(" > "+oe)),u([a(me,"margin",te+(" "+ie))])),P(Ne,e,n,he+($e+(" > "+(oe+(" + "+oe)))),u([a(me,"margin-top",C)])),P(Ne,e,n,he+(ne+(" > "+(oe+(" + "+oe)))),u([a(me,"margin-top",C)])),P(Ne,e,n,he+(ne+(" > "+De)),u([a(me,"margin-right",z)])),P(Ne,e,n,he+(ne+(" > "+_e)),u([a(me,"margin-left",z)])),P(Ne,e,n,Y(he,G),u([a(me,"line-height","calc(1em + "+(D(y)+"px)"))])),P(Ne,e,n,"textarea"+(oe+he),u([a(me,"line-height","calc(1em + "+(D(y)+"px)")),a(me,"height","calc(100% + "+(D(y)+"px)"))])),P(Ne,e,n,he+(G+(" > "+De)),u([a(me,"margin-right",z)])),P(Ne,e,n,he+(G+(" > "+_e)),u([a(me,"margin-left",z)])),P(Ne,e,n,he+(G+"::after"),u([a(me,"content","''"),a(me,"display","block"),a(me,"height","0"),a(me,"width","0"),a(me,"margin-top",D(-1*(y/2|0))+"px")])),P(Ne,e,n,he+(G+"::before"),u([a(me,"content","''"),a(me,"display","block"),a(me,"height","0"),a(me,"width","0"),a(me,"margin-bottom",D(-1*(y/2|0))+"px")]))]));case 7:var ee=r.a,be=r.b,_e=r.c,je=r.d,De=r.e,he="."+ee;return P(Ne,e,n,he,u([a(me,"padding",se(be)+("px "+(se(_e)+("px "+(se(je)+("px "+(se(De)+"px")))))))]));case 6:var ee=r.a,be=r.b,_e=r.c,je=r.d,De=r.e,he="."+ee;return P(Ne,e,n,he,u([a(me,"border-width",D(be)+("px "+(D(_e)+("px "+(D(je)+("px "+(D(De)+"px")))))))]));case 8:var ge=r.a,Be=L(function(lr,Vt,In){e:for(;;)switch(In.$){case 0:var Ap=In.a;return D(Ap)+"px";case 1:var Qr=_(lr,Vt);if(Qr.a.$===1){if(Qr.b.$===1)return Qr.a,Qr.b,"max-content";Qr.a;var ha=Qr.b.a;return"minmax(max-content, "+(D(ha)+"px)")}else if(Qr.b.$===1){var ba=Qr.a.a;return Qr.b,"minmax("+(D(ba)+"px, max-content)")}else{var ba=Qr.a.a,ha=Qr.b.a;return"minmax("+(D(ba)+("px, "+(D(ha)+"px)")))}case 2:var Wu=In.a,Zr=_(lr,Vt);if(Zr.a.$===1){if(Zr.b.$===1)return Zr.a,Zr.b,D(Wu)+"fr";Zr.a;var ha=Zr.b.a;return"minmax(max-content, "+(D(ha)+"px)")}else if(Zr.b.$===1){var ba=Zr.a.a;return Zr.b,"minmax("+(D(ba)+("px, "+(D(Wu)+"frfr)")))}else{var ba=Zr.a.a,ha=Zr.b.a;return"minmax("+(D(ba)+("px, "+(D(ha)+"px)")))}case 3:var Tc=In.a,Dc=In.b,Wc=H(Tc),Ac=Vt,Fc=Dc;lr=Wc,Vt=Ac,In=Fc;continue e;default:var Tc=In.a,Dc=In.b,Wc=lr,Ac=H(Tc),Fc=Dc;lr=Wc,Vt=Ac,In=Fc;continue e}}),I=function(lr){return m(Be,B,B,lr)};I(ge.ic.a);var j=I(ge.ic.b),V=function(lr){return"grid-template-rows: "+(lr+";")}(a(fe," ",a(q,I,ge.h_))),R=function(lr){return"-ms-grid-rows: "+(lr+";")}(a(fe,j,a(q,I,ge.am))),N=function(lr){return"-ms-grid-columns: "+(lr+";")}(a(fe,j,a(q,I,ge.am))),J="grid-row-gap:"+(I(ge.ic.b)+";"),O="grid-column-gap:"+(I(ge.ic.a)+";"),U=function(lr){return"grid-template-columns: "+(lr+";")}(a(fe," ",a(q,I,ge.am))),he=".grid-rows-"+(a(fe,"-",a(q,_n,ge.h_))+("-cols-"+(a(fe,"-",a(q,_n,ge.am))+("-space-x-"+(_n(ge.ic.a)+("-space-y-"+_n(ge.ic.b))))))),kc=he+("{"+(U+(V+(O+(J+"}"))))),zc="@supports (display:grid) {"+(kc+"}"),Mc=he+("{"+(N+(R+"}")));return u([Mc,zc]);case 9:var nr=r.a,qi=a(fe," ",u(["-ms-grid-row: "+(D(nr.ah)+";"),"-ms-grid-row-span: "+(D(nr.g3)+";"),"-ms-grid-column: "+(D(nr.gw)+";"),"-ms-grid-column-span: "+(D(nr.iQ)+";")])),Cc=a(fe," ",u(["grid-row: "+(D(nr.ah)+(" / "+(D(nr.ah+nr.g3)+";"))),"grid-column: "+(D(nr.gw)+(" / "+(D(nr.gw+nr.iQ)+";")))])),he=".grid-pos-"+(D(nr.ah)+("-"+(D(nr.gw)+("-"+(D(nr.iQ)+("-"+D(nr.g3))))))),kc=he+("{"+(Cc+"}")),zc="@supports (display:grid) {"+(kc+"}"),Mc=he+("{"+(qi+"}"));return u([Mc,zc]);case 11:var he=r.a,Tp=r.b,Dp=function(lr){return m(xl,e,lr,H(he))};return a(Ra,Dp,Tp);default:var Du=r.a,Lc=Y3(Du),he=Sl(Du),Yi=_(he,Lc);if(!Yi.a.$&&!Yi.b.$){var ee=Yi.a.a,Wp=Yi.b.a;return P(Ne,e,n,"."+ee,u([a(me,"transform",Wp)]))}else return M}}),X3=v(function(e,r){return ga(a(q,function(n){var t=m(xl,e,n,B);return _(fi(n),a(Un,_l,t))},r))}),Fo=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(fe,"",a(q,n,r))+"}"))}),cv=L(function(e,r,n){var t=n.a,i=n.b;return u([a(Fo,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Fo,"."+(e+("."+(r+("> ."+(g.io+(", ."+(e+(" ."+(r+(" > ."+g.io)))))))))),i)])}),Q3=L(function(e,r,n){var t=r.a,i=r.b,o=ue(e,n)?e:n+(" ."+e);return a(fe," ",Y(m(cv,o,g.h9,i),m(cv,o,g.gW,t)))}),Z3=v(function(e,r){var n=ue(e,r)?e:r+(" ."+e);return a(fe," ",u([a(Fo,"."+(n+("."+(g.h9+(", "+("."+(n+(" ."+g.h9))))))),u([_("line-height","1")])),a(Fo,"."+(n+("."+(g.h9+("> ."+(g.io+(", ."+(n+(" ."+(g.h9+(" > ."+g.io)))))))))),u([_("vertical-align","0"),_("line-height","1")]))]))}),$v=L(function(e,r,n){return{g3:r/e,bp:e,fJ:n}}),zi=v(function(e,r){return m(cr,v(function(n,t){return e(n)?a(S,n,t):t}),M,r)}),Im=function(e){if(e.b){var r=e.a,n=e.b;return H(m(Me,tr,r,n))}else return B},lv=function(e){if(e.b){var r=e.a,n=e.b;return H(m(Me,rn,r,n))}else return B},uv=function(e){var r=u([e.gm,e.f9,e.gH,e.ht]),n=a(Ce,e.gH,lv(r)),t=a(Ce,e.f9,lv(a(zi,function(f){return!ue(f,n)},r))),i=a(Ce,e.gm,Im(r)),o=1/(i-t),c=1-i,$=1/(i-n),l=1-i;return{gm:m($v,o,i-t,c),eo:m($v,$,i-n,l)}},vv=function(e){return _(u([_("display","block")]),u([_("display","inline-block"),_("line-height",se(e.g3)),_("vertical-align",se(e.fJ)+"em"),_("font-size",se(e.bp)+"em")]))},K3=function(e){return m(Me,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fT;if(i.$===1)return n;var o=i.a;return H(_(vv(function(c){return c.eo}(uv(o))),vv(function(c){return c.gm}(uv(o)))))}else return n;else return n}),B,e)},e1=function(e){var r=function(o){if(o.$===4){var c=o.b;return H("@import url('"+(c+"');"))}else return B},n=function(o){o.a;var c=o.b,$=a(fe,`
`,a(Wr,r,c));return $},t=a(q,em,e),i=function(o){var c=o.a,$=o.b,l=K3($);if(l.$===1)return a(fe,"",a(q,Z3(c),t));var f=l.a;return a(fe,"",a(q,a(Q3,c,f),t))};return Y(a(fe,`
`,a(q,n,e)),a(fe,`
`,a(q,i,e)))},r1=function(e){if(e.$===1){var r=e.a,n=e.b;return H(_(r,n))}else return B},fv=v(function(e,r){var n=v(function(c,$){return{cK:Y($.cK,m(xl,e,c,B)),b_:function(){var l=r1(c);if(l.$===1)return $.b_;var f=l.a;return a(S,f,$.b_)}()}}),t=m(Me,n,{cK:M,b_:M},r),i=t.b_,o=t.cK;return Y(e1(i),za(o))}),Em=v(function(e,r){var n=e.e5;switch(n){case 0:return m(hn,"div",M,u([m(hn,"style",M,u([ua(a(fv,e,r))]))]));case 1:return m(hn,"div",M,u([m(hn,"style",M,u([ua(a(fv,e,r))]))]));default:return m(hn,"elm-ui-rules",u([a(Wm,"rules",a(X3,e,r))]),M)}}),mv=X(function(e,r,n,t){var i=a(Em,r,m(Me,Tm,_(yl,Dm(r.gV)),n).b);return e?a(S,_("static-stylesheet",Fm(r)),a(S,_("dynamic-stylesheet",i),t)):a(S,_("dynamic-stylesheet",i),t)}),sv=X(function(e,r,n,t){var i=a(Em,r,m(Me,Tm,_(yl,Dm(r.gV)),n).b);return e?a(S,Fm(r),a(S,i,t)):a(S,i,t)}),b$=xe(45),mi=xe(37),jm=function(e){return Ph(kf(e))},n1=Wn("p"),Cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return ue(o&t,o)}else{var i=e.a;return ue(i&n,i)}}),dv=Wn("s"),pv=Wn("u"),_$=xe(44),si=xe(39),Ki=Rr(function(e,r,n,t,i,o){var c=v(function(l,f){if(t.$===1){var s=t.a;return m(jm,l,f,function(){switch(i.$){case 0:return s;case 2:var b=i.a,p=i.b;return P(mv,!1,b,p,s);default:var b=i.a,p=i.b;return P(mv,!0,b,p,s)}}())}else{var d=t.a;return a(function(){switch(l){case"div":return yt;case"p":return n1;default:return hn(l)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,p=i.b;return P(sv,!1,b,p,d);default:var b=i.a,p=i.b;return P(sv,!0,b,p,d)}}())}}),$=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var l=r.a;return a(c,l,n);default:var l=r.a,f=r.b;return m(hn,l,n,u([a(c,f,u([jr(g.f3+(" "+g.h8))]))]))}}();switch(o){case 0:return a(Cr,si,e)&&!a(Cr,_$,e)?$:a(Cr,Cm,e)?a(pv,u([jr(a(fe," ",u([g.f3,g.h8,g.ch,g.aB,g.f_])))]),u([$])):a(Cr,km,e)?a(dv,u([jr(a(fe," ",u([g.f3,g.h8,g.ch,g.aB,g.fY])))]),u([$])):$;case 1:return a(Cr,mi,e)&&!a(Cr,b$,e)?$:a(Cr,zm,e)?a(dv,u([jr(a(fe," ",u([g.f3,g.h8,g.ch,g.fZ])))]),u([$])):a(Cr,Pm,e)?a(pv,u([jr(a(fe," ",u([g.f3,g.h8,g.ch,g.fX])))]),u([$])):$;default:return $}}),Bn=function(e){return!e.b},cc=ua,a1=g.f3+(" "+(g.io+(" "+(g.dX+(" "+g.c5))))),di=function(e){return a(yt,u([jr(a1)]),u([cc(e)]))},t1=g.f3+(" "+(g.io+(" "+(g.dY+(" "+g.c6))))),gv=function(e){return a(yt,u([jr(t1)]),u([cc(e)]))},i1=L(function(e,r,n){var t=v(function(w,y){var C=w.a,z=w.b,x=y.a,T=y.b;switch(z.$){case 0:var G=z.a;return ue(e,ot),_(a(S,_(C,G(e)),x),T);case 1:var ne=z.a;return ue(e,ot),_(a(S,_(C,a(ne.g7,Sa,e)),x),Bn(T)?ne.ii:Y(ne.ii,T));case 2:var te=z.a;return _(a(S,_(C,ue(e,pr)?gv(te):di(te)),x),T);default:return _(x,T)}}),i=v(function(w,y){var C=y.a,z=y.b;switch(w.$){case 0:var x=w.a;return ue(e,ot),_(a(S,x(e),C),z);case 1:var T=w.a;return ue(e,ot),_(a(S,a(T.g7,Sa,e),C),Bn(z)?T.ii:Y(T.ii,z));case 2:var G=w.a;return _(a(S,ue(e,pr)?gv(G):di(G),C),z);default:return _(C,z)}});if(r.$===1){var o=r.a,c=m(cr,t,_(M,M),o),$=c.a,l=c.b,f=Bn(l)?n.ii:Y(n.ii,l);if(f.b){var s=f;return g$({g7:P(Ki,n.aV,n.aY,n.aN,nv(m(tv,"nearby-element-pls",$,n.aQ))),ii:s})}else return vi(W(Ki,n.aV,n.aY,n.aN,nv(m(tv,"nearby-element-pls",$,n.aQ)),Sa))}else{var d=r.a,b=m(cr,i,_(M,M),d),p=b.a,l=b.b,f=Bn(l)?n.ii:Y(n.ii,l);if(f.b){var s=f;return g$({g7:P(Ki,n.aV,n.aY,n.aN,He(a(av,p,n.aQ))),ii:s})}else return vi(W(Ki,n.aV,n.aY,n.aN,He(a(av,p,n.aQ)),Sa))}}),Lr=L(function(e,r,n){return{$:3,a:e,b:r,c:n}}),o1=function(e){return{$:10,a:e}},Io=v(function(e,r){return{$:0,a:e,b:r}}),ye=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(Io,n,o|t)}else{var i=e.a;return a(Io,i|n,t)}}),hv=function(e){return{$:1,a:e}},eo=v(function(e,r){return{$:3,a:e,b:r}}),bv=function(e){return{$:2,a:e}},c1=v(function(e,r){return a(yt,u([jr(function(){switch(e){case 0:return a(fe," ",u([g.bk,g.h8,g.fS]));case 1:return a(fe," ",u([g.bk,g.h8,g.gb]));case 2:return a(fe," ",u([g.bk,g.h8,g.hE]));case 3:return a(fe," ",u([g.bk,g.h8,g.hC]));case 4:return a(fe," ",u([g.bk,g.h8,g.hb]));default:return a(fe," ",u([g.bk,g.h8,g.ga]))}}())]),u([function(){switch(r.$){case 3:return ua("");case 2:var n=r.a;return di(n);case 0:var t=r.a;return t(pr);default:var i=r.a;return a(i.g7,Sa,pr)}}()]))}),$1=L(function(e,r,n){var t=a(c1,e,r);switch(n.$){case 0:return e===5?hv(u([t])):bv(u([t]));case 1:var i=n.a;return e===5?hv(a(S,t,i)):a(eo,i,u([t]));case 2:var o=n.a;return e===5?a(eo,u([t]),o):bv(a(S,t,o));default:var i=n.a,o=n.b;return e===5?a(eo,a(S,t,i),o):a(eo,i,a(S,t,o))}}),_v=v(function(e,r){return{$:2,a:e,b:r}}),bn=function(e){return{$:1,a:e}},_a=v(function(e,r){switch(r.$){case 0:return bn(e);case 1:var n=r.a;return a(_v,n,e);default:var t=r.a,i=r.b;return a(_v,t,i)}}),l1=function(e){switch(e){case 0:return g.cU+(" "+g.d4);case 2:return g.cU+(" "+g.d5);default:return g.cU+(" "+g.fV)}},u1=function(e){switch(e){case 0:return g.cV+(" "+g.f$);case 2:return g.cV+(" "+g.fU);default:return g.cV+(" "+g.fW)}},Yt=v(function(e,r){return a(fn,Lh(e),zf(r))}),pn=X(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),ia=function(e){return{$:1,a:e}},v1=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var l=r.a;return ia(E(l,0,0));case 1:var f=r.a;return ia(E(0,f,0));case 2:var s=r.a;return ia(E(0,0,s));case 3:var n=r.a;return ia(n);case 4:var n=r.a,p=r.b;return P(pn,E(0,0,0),E(1,1,1),n,p);default:var n=r.a;return P(pn,E(0,0,0),n,E(0,0,1),0)}case 1:var $=e.a,l=$.a,f=$.b,s=$.c;switch(r.$){case 0:var t=r.a;return ia(E(t,f,s));case 1:var i=r.a;return ia(E(l,i,s));case 2:var o=r.a;return ia(E(l,f,o));case 3:var n=r.a;return ia(n);case 4:var n=r.a,p=r.b;return P(pn,$,E(1,1,1),n,p);default:var c=r.a;return P(pn,$,c,E(0,0,1),0)}default:var $=e.a,l=$.a,f=$.b,s=$.c,d=e.b,b=e.c,p=e.d;switch(r.$){case 0:var t=r.a;return P(pn,E(t,f,s),d,b,p);case 1:var i=r.a;return P(pn,E(l,i,s),d,b,p);case 2:var o=r.a;return P(pn,E(l,f,o),d,b,p);case 3:var w=r.a;return P(pn,w,d,b,p);case 4:var y=r.a,C=r.b;return P(pn,$,d,y,C);default:var z=r.a;return P(pn,$,z,b,p)}}}),Ya=xe(7),Bm=xe(36),yv=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(Io,n|i,t|o)}),Nn=a(Io,0,0),y$=function(e){switch(e.$){case 0:var r=e.a,n=D(r),t="height-px-"+n;return E(Nn,g.eq+(" "+t),u([m(Lr,t,"height",n+"px")]));case 1:return E(a(ye,Bm,Nn),g.c5,M);case 2:var i=e.a;return i===1?E(a(ye,mi,Nn),g.c6,M):E(a(ye,mi,Nn),g.er+(" height-fill-"+D(i)),u([m(Lr,g.f3+("."+(g.aA+(" > "+k("height-fill-"+D(i))))),"flex-grow",D(i*1e5))]));case 3:var o=e.a,l=e.b,f="min-height-"+D(o),s=m(Lr,f,"min-height",D(o)+"px !important"),c=y$(l),b=c.a,p=c.b,w=c.c;return E(a(ye,b$,b),f+(" "+p),a(S,s,w));default:var $=e.a,l=e.b,f="max-height-"+D($),s=m(Lr,f,"max-height",D($)+"px"),d=y$(l),b=d.a,p=d.b,w=d.c;return E(a(ye,b$,b),f+(" "+p),a(S,s,w))}},Vm=xe(38),S$=function(e){switch(e.$){case 0:var r=e.a;return E(Nn,g.fO+(" width-px-"+D(r)),u([m(Lr,"width-px-"+D(r),"width",D(r)+"px")]));case 1:return E(a(ye,Vm,Nn),g.dX,M);case 2:var n=e.a;return n===1?E(a(ye,si,Nn),g.dY,M):E(a(ye,si,Nn),g.fP+(" width-fill-"+D(n)),u([m(Lr,g.f3+("."+(g.ah+(" > "+k("width-fill-"+D(n))))),"flex-grow",D(n*1e5))]));case 3:var t=e.a,c=e.b,$="min-width-"+D(t),l=m(Lr,$,"min-width",D(t)+"px"),i=S$(c),s=i.a,d=i.b,b=i.c;return E(a(ye,_$,s),$+(" "+d),a(S,l,b));default:var o=e.a,c=e.b,$="max-width-"+D(o),l=m(Lr,$,"max-width",D(o)+"px"),f=S$(c),s=f.a,d=f.b,b=f.c;return E(a(ye,_$,s),$+(" "+d),a(S,l,b))}},$c=xe(27),f1=v(function(e,r){if(ue(e,$c))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,$=r.e;return ue(i,c)&&ue(i,o)&&ue(i,$)&&i>=0&&i<=24;default:return!1}}),Xa=xe(6),Sv=xe(30),wv=xe(29),m1=Ee(function(e,r,n,t,i,o,c,$){e:for(;;)if($.b){var s=$.a,d=$.b;switch(s.$){case 0:var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 3:var y=s.a,b=s.b;if(a(Cr,y,n)){var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else{var I=b+(" "+e),j=r,V=a(ye,y,n),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}case 1:var p=s.a,I=e,j=r,V=n,R=t,N=i,J=a(S,p,o),O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 4:var y=s.a,w=s.b;if(a(Cr,y,n)){var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else if(a(f1,y,w)){var I=fi(w)+(" "+e),j=r,V=a(ye,y,n),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else{var I=fi(w)+(" "+e),j=r,V=a(ye,y,n),R=t,N=a(S,w,i),J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}case 10:var y=s.a,C=s.b,I=e,j=r,V=a(ye,y,n),R=a(v1,t,C),N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 7:var z=s.a;if(a(Cr,Xa,n)){var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else switch(z.$){case 0:var x=z.a,I=g.fO+(" width-px-"+D(x))+(" "+e),j=r,V=a(ye,Xa,n),R=t,N=a(S,m(Lr,"width-px-"+D(x),"width",D(x)+"px"),i),J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 1:var I=e+(" "+g.dX),j=r,V=a(ye,Vm,a(ye,Xa,n)),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 2:var T=z.a;if(T===1){var I=e+(" "+g.dY),j=r,V=a(ye,si,a(ye,Xa,n)),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else{var I=e+(" "+(g.fP+(" width-fill-"+D(T)))),j=r,V=a(ye,si,a(ye,Xa,n)),R=t,N=a(S,m(Lr,g.f3+("."+(g.ah+(" > "+k("width-fill-"+D(T))))),"flex-grow",D(T*1e5)),i),J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}default:var G=S$(z),ne=G.a,te=G.b,Be=G.c,I=e+(" "+te),j=r,V=a(yv,ne,a(ye,Xa,n)),R=t,N=Y(Be,i),J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}case 8:var ie=s.a;if(a(Cr,Ya,n)){var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else switch(ie.$){case 0:var x=ie.a,$e=D(x)+"px",oe="height-px-"+$e,I=g.eq+(" "+(oe+(" "+e))),j=r,V=a(ye,Ya,n),R=t,N=a(S,m(Lr,oe,"height ",$e),i),J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 1:var I=g.c5+(" "+e),j=r,V=a(ye,Bm,a(ye,Ya,n)),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 2:var T=ie.a;if(T===1){var I=g.c6+(" "+e),j=r,V=a(ye,mi,a(ye,Ya,n)),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else{var I=e+(" "+(g.er+(" height-fill-"+D(T)))),j=r,V=a(ye,mi,a(ye,Ya,n)),R=t,N=a(S,m(Lr,g.f3+("."+(g.aA+(" > "+k("height-fill-"+D(T))))),"flex-grow",D(T*1e5)),i),J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}default:var ee=y$(ie),ne=ee.a,te=ee.b,Be=ee.c,I=e+(" "+te),j=r,V=a(yv,ne,a(ye,Ya,n)),R=t,N=Y(Be,i),J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}case 2:var be=s.a;switch(be.$){case 0:var I=e,j=a(_a,"main",r),V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 1:var I=e,j=a(_a,"nav",r),V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 2:var I=e,j=a(_a,"footer",r),V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 3:var I=e,j=a(_a,"aside",r),V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 4:var _e=be.a;if(_e<=1){var I=e,j=a(_a,"h1",r),V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else if(_e<7){var I=e,j=a(_a,"h"+D(_e),r),V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else{var I=e,j=a(_a,"h6",r),V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}case 9:var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 8:var I=e,j=r,V=n,R=t,N=i,J=a(S,a(Yt,"role","button"),o),O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 5:var je=be.a,I=e,j=r,V=n,R=t,N=i,J=a(S,a(Yt,"aria-label",je),o),O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 6:var I=e,j=r,V=n,R=t,N=i,J=a(S,a(Yt,"aria-live","polite"),o),O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;default:var I=e,j=r,V=n,R=t,N=i,J=a(S,a(Yt,"aria-live","assertive"),o),O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}case 9:var De=s.a,ge=s.b,Be=function(){switch(ge.$){case 3:return i;case 2:return ge.a,i;case 0:return ge.a,i;default:var Cc=ge.a;return Y(i,Cc.ii)}}(),I=e,j=r,V=n,R=t,N=Be,J=o,O=m($1,De,ge,c),U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e;case 6:var nr=s.a;if(a(Cr,Sv,n)){var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else{var I=l1(nr)+(" "+e),j=r,V=function(he){switch(nr){case 1:return a(ye,km,he);case 2:return a(ye,Cm,he);default:return he}}(a(ye,Sv,n)),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}default:var qi=s.a;if(a(Cr,wv,n)){var I=e,j=r,V=n,R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}else{var I=u1(qi)+(" "+e),j=r,V=function(he){switch(qi){case 1:return a(ye,zm,he);case 2:return a(ye,Pm,he);default:return he}}(a(ye,wv,n)),R=t,N=i,J=o,O=c,U=d;e=I,r=j,n=V,t=R,i=N,o=J,c=O,$=U;continue e}}}else{var l=Sl(t);if(l.$===1)return{aN:a(S,jr(e),o),aQ:c,aV:n,aY:r,ii:i};var f=l.a;return{aN:a(S,jr(e+(" "+f)),o),aQ:c,aV:n,aY:r,ii:a(S,o1(t),i)}}}),s1={$:0},d1=s1,Qe=X(function(e,r,n,t){return m(i1,e,t,wi(m1,P3(e),r,Nn,d1,M,M,h3,Le(n)))}),Gn=X(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),p1={f8:B,gg:B,h4:H({a7:0,cf:P(Gn,155/255,203/255,1,1),e8:_(0,0),bp:3})},g1=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.g6;return c.$===1?F(i,{g6:H(o)}):i;case 1:var $=t.a,l=i.gV;return l.$===1?F(i,{gV:H($)}):i;default:var f=t.a,s=i.e5;return s.$===1?F(i,{e5:H(f)}):i}}),n=function(t){return{gV:function(){var i=t.gV;if(i.$===1)return p1;var o=i.a;return o}(),g6:function(){var i=t.g6;if(i.$===1)return 1;var o=i.a;return o}(),e5:function(){var i=t.e5;if(i.$===1)return 0;var o=i.a;return o}()}};return n(m(cr,r,{gV:B,g6:B,e5:B},e))},h1=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(pr);case 1:var n=r.a.ii,t=r.a.g7;return a(t,e(n),pr);case 2:var i=r.a;return di(i);default:return di("")}}),b1=L(function(e,r,n){var t=g1(e),i=function(){var o=t.e5;return o===1?xm(t):p3(t)}();return a(h1,i,P(Qe,pr,Ur,r,He(u([n]))))}),pi=L(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Rm=v(function(e,r){return{$:1,a:e,b:r}}),Nm=function(e){return{$:2,a:e}},_1={$:1},Te=v(function(e,r){return{$:4,a:e,b:r}}),Bc=function(e){return{$:3,a:e}},Gm=xe(8),Hm=xe(14),Jm=xe(5),Om=xe(4),St=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ie(r)+("-"+(Ie(n)+("-"+(Ie(t)+("-"+Ie(i))))))},so=zg,Vc=kg,Um=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(fe,"-",Vc(so(n)));case 4:var n=e.a;return e.b,a(fe,"-",Vc(so(n)));default:var n=e.a.hy;return a(fe,"-",Vc(so(n)))}}())}),y1=function(){var e=u([Bc("Open Sans"),Bc("Helvetica"),Bc("Verdana"),_1]);return u([a(Te,Gm,m(pi,"bg-"+St(P(Gn,1,1,1,0)),"background-color",P(Gn,1,1,1,0))),a(Te,Hm,m(pi,"fc-"+St(P(Gn,0,0,0,1)),"color",P(Gn,0,0,0,1))),a(Te,Om,Nm(20)),a(Te,Jm,a(Rm,m(Me,Um,"font-",e),e))])}(),S1=L(function(e,r,n){var t=e.hI;return m(b1,t,a(S,Xe(a(fe," ",u([g.hY,g.f3,g.h8]))),Y(y1,r)),n)}),qm={$:3},Ym=function(e){return{$:2,a:e}},w$=kh,Xm=v(function(e,r){switch(r.$){case 1:var n=r.a;return g$({g7:v(function(o,c){return a(w$,e,a(n.g7,o,c))}),ii:n.ii});case 0:var t=r.a;return vi(a(pa,w$(e),t));case 2:var i=r.a;return Ym(i);default:return qm}}),Pl=Xm,w1=w$,x1=function(e){return{$:0,a:e}},Fe=x1,P1=Mh,ar=P1,Qm={$:1},lc=function(e){return{$:5,a:e}},Cl=lc(0),mn=L(function(e,r,n){return P(Gn,e/255,r/255,n/255,1)}),At=m(mn,0,0,0),C1=fn("d"),k1=fn("fill"),z1=fn("height"),Zm=Pf("http://www.w3.org/2000/svg"),M1=Zm("path"),L1=Zm("svg"),T1=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{f0:i,gc:t,gY:n,hS:r}},D1=function(e){var r=T1(e);return"rgba("+(D(Ve(r.hS*255))+(","+D(Ve(r.gY*255))+(","+D(Ve(r.gc*255))+(","+se(r.f0)+")"))))},W1=fn("viewBox"),A1=fn("width"),$t=L(function(e,r,n){return a(L1,u([W1("0 0 100 100"),A1(D(e)),z1(D(e))]),u([a(M1,u([C1(n),k1(D1(r))]),M)]))}),F1={$:1},wr=F1,Km=function(e){return{$:7,a:e}},re=Km,ke=v(function(e,r){return P(Qe,pr,Ur,a(S,re(wr),a(S,we(wr),e)),He(u([r])))}),es=function(e){return{$:2,a:e}},ce=es(1),xa={gL:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gX:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",g2:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hL:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hN:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hR:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",ia:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",iI:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",iL:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fR:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},vt={de:260,bM:54},xr=function(e){return a(Te,Gm,m(pi,"bg-"+St(e),"background-color",e))},I1=xe(28),Mn=function(e){return a(Te,I1,m(pi,"bc-"+St(e),"border-color",e))},po=1,rr=v(function(e,r){return P(Qe,po,Ur,a(S,Xe(g.gy+(" "+g.bA)),a(S,we(wr),a(S,re(wr),e))),He(r))}),E1=m(mn,83,83,83),rs=X(function(e,r,n,t){return P(Gn,e/255,r/255,n/255,t)}),uc=P(rs,56,56,56,.25),vr=qm,wt=qe(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),xt=xe(2),nn=function(e){var r=e;return a(Te,xt,W(wt,"p-"+D(e),r,r,r,r))},ns=L(function(e,r,n){return{$:5,a:e,b:r,c:n}}),as=xe(3),ts=v(function(e,r){return"spacing-"+(D(e)+("-"+D(r)))}),$r=function(e){return a(Te,as,m(ns,a(ts,e,e),e,e))},j1=P(rs,0,0,0,0),B1=function(e){return{$:4,a:e}},x$=0,An=v(function(e,r){return P(Qe,x$,Ur,a(S,Xe(g.bA+(" "+g.aB)),a(S,re(wr),a(S,we(wr),e))),He(r))}),V1=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.g7(a(xm,{gV:{f8:B,gg:B,h4:B},g6:1,e5:0},n.ii));case 2:var t=e.a;return _t(ua(t));default:return _t(ua(""))}},R1=v(function(e,r){return V1(e(r))}),N1=zh,G1=v(function(e,r){return vi(m(N1,R1,e,r))}),Vr=function(e){return a(Te,Hm,m(pi,"fc-"+St(e),"color",e))},vc=m(mn,195,195,195),sn=v(function(e,r){return{$:3,a:e,b:r}}),kl=xe(13),H1=a(sn,kl,g.ix),is=xe(20),Mi=a(sn,is,g.h2),dn=function(e){return a(Te,Om,Nm(e))},zl=a(sn,kl,g.gf),P$=v(function(e,r){if(r.$===-2)return zn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return W(pe,n,t,a(e,t,i),a(P$,e,o),a(P$,e,c))}),Li=v(function(e,r){if(ue(e,r)){var n=e;return a(Te,xt,W(wt,"p-"+D(e),n,n,n,n))}else{var t=r,i=e;return a(Te,xt,W(wt,"p-"+(D(e)+("-"+D(r))),t,i,t,i))}}),hr=function(e){return Ym(e)},J1=function(e){return m(ol,L(function(r,n,t){return a(S,n,t)}),M,e)},O1=v(function(e,r){return{$:3,a:e,b:r}}),U1=v(function(e,r){return{$:2,a:e,b:r}}),q1=v(function(e,r){return{$:0,a:e,b:r}}),Y1=v(function(e,r){return{$:1,a:e,b:r}}),Fn=X(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),os=P(Fn,0/255,0/255,0/255,1),fc=function(e){return{$:6,a:e}},X1=fc(0),Ti=function(e){return{$:2,a:e}},Q1={$:6},Ml=Ti(Q1),Ll=L(function(e,r,n){if(r.$===1)return r.a,P(Qe,po,bn("label"),e,He(u([n])));var t=r.a,i=r.b,o=r.c,c=P(Qe,pr,Ur,i,He(u([o])));switch(t){case 2:return P(Qe,po,bn("label"),a(S,Xe(g.cq),e),He(u([c,n])));case 3:return P(Qe,po,bn("label"),a(S,Xe(g.cq),e),He(u([n,c])));case 0:return P(Qe,x$,bn("label"),a(S,Xe(g.cq),e),He(u([n,c])));default:return P(Qe,x$,bn("label"),a(S,Xe(g.cq),e),He(u([c,n])))}}),Eo=Yt,Kn=lc(1),cs="Enter",Z1=function(e){return{$:5,a:e}},Tl=function(e){if(e.$===1){var r=e.a;return Ti(Z1(r))}else return Jr},Dl=function(e){return e.$===1},K1=function(e){return{$:0,a:e}},Wl=Cf,e_=v(function(e,r){return a(Wl,e,K1(r))}),$s=function(e){return a(e_,"click",Ye(e))},r_=Bg,n_=function(e){return{$:2,a:e}},a_=v(function(e,r){return a(Wl,e,n_(r))}),ls=function(e){var r=function(t){var i=e(t);if(i.$===1)return r_("No key matched");var o=i.a;return Ye(o)},n=a(ae,r,a(K,"key",bt));return ze(a(a_,"keydown",a(li,function(t){return _(t,!0)},n)))},us=xe(21),Pa=a(sn,us,g.gC),vs=" ",fs=function(e){return a(fn,"tabIndex",D(e))},t_=a(pa,ze,fs),ms=v(function(e,r){var n=r.dc,t=r.g8,i=r.gr,o=r.e9,c=Y(u([Dl(n)?Jr:$r(6),ze($s(o(!i))),Ml,ls(function($){return ue($,cs)||ue($,vs)?H(o(!i)):B}),t_(0),Pa,X1,re(ce)]),e);return m(Ll,a(S,ze(a(Eo,"role","checkbox")),a(S,ze(a(Eo,"aria-checked",i?"true":"false")),a(S,Tl(n),c))),n,P(Qe,pr,Ur,u([Kn,we(ce),re(wr)]),He(u([t(i)]))))}),i_=L(function(e,r,n){return Y(a(ui,e-wa(n),ic(r)),n)}),jo=tg,ss=function(e){var r=function(n){return n<10?D(n):ic(sm(87+n))};return e<16?r(e):Y(ss(e/16|0),r(a(jo,16,e)))},o_=a(Ge,ss,a(i_,2,"0")),Al=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{f0:i,gc:t,gY:n,hS:r}},c_=function(e){var r=Al(e),n=r.hS,t=r.gY,i=r.gc;return a(fe,"",a(S,"#",a(q,a(Ge,Ve,o_),u([n*255,t*255,i*255]))))},Fl=xe(12),ds=a(sn,Fl,g.ip),C$=fc(1),qn=ig,Ln=function(e){return e*qn/180},$_=function(e){return{$:1,a:e}},Il=v(function(e,r){return{$:10,a:e,b:r}}),l_=xe(26),ps=function(e){return a(Il,l_,$_(-e))},ca=L(function(e,r,n){return P(Gn,e,r,n,1)}),k$=Gn,u_=v(function(e,r){return{$:4,a:e,b:r}}),v_=xe(24),f_=function(e){return a(Il,v_,a(u_,E(0,0,1),e))},m_=xe(17),cn=function(e){return a(Te,m_,m(Lr,"br-"+D(e),"border-radius",D(e)+"px"))},s_=function(e){return za(u([e.ev?"box-inset":"box-",Ie(e.e8.a)+"px",Ie(e.e8.b)+"px",Ie(e.a7)+"px",Ie(e.bp)+"px",St(e.cf)]))},d_=xe(19),p_=function(e){var r={a7:e.a7,cf:e.cf,ev:!1,e8:e.e8,bp:e.bp};return a(Te,d_,m(Lr,s_(r),"box-shadow",h$(r)))},z$=v(function(e,r){return{$:12,a:e,b:r}}),M$=xe(0),g_=function(e){return e?a(Te,M$,a(z$,"transparent",1)):a(Te,M$,a(z$,"visible",0))},go=m(ca,1,1,1),El=qe(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Di=function(e){return a(Te,$c,W(El,"b-"+D(e),e,e,e,e))},h_=v(function(e,r){return a(Te,$c,W(El,"b-"+(D(e)+("-"+D(r))),r,e,r,e))}),Wi=function(e){var r=e.b9,n=e.cP,t=e.hp,i=e.hV;return ue(n,r)&&ue(t,i)?ue(n,i)?Di(n):a(h_,t,n):a(Te,$c,W(El,"b-"+(D(n)+("-"+(D(i)+("-"+(D(r)+("-"+D(t))))))),n,i,r,t))},gs=function(e){return a(ke,u([Xe("focusable"),re(Fe(14)),we(Fe(14)),Vr(go),Kn,dn(9),ds,cn(3),Mn(e?m(ca,59/255,153/255,252/255):m(ca,211/255,211/255,211/255)),p_({a7:1,cf:e?P(k$,238/255,238/255,238/255,0):m(ca,238/255,238/255,238/255),e8:_(0,0),bp:1}),xr(e?m(ca,59/255,153/255,252/255):go),Di(e?0:1),Wo(a(ke,u([Mn(go),we(Fe(6)),re(Fe(9)),f_(Ln(-45)),C$,Kn,ps(1),g_(!e),Wi({b9:2,hp:2,hV:0,cP:0})]),vr))]),vr)},b_=Xr("htmlFor"),Yn=v(function(e,r){if(r.$)return B;var n=r.a;return e(n)}),Bo=v(function(e,r){if(r.$){var t=r.a;return _r(t)}else{var n=r.a;return e(n)}}),hs=X(function(e,r,n,t){return{hd:r,hu:e,hB:n,ij:t}}),__=n0,y_=Fg,S_=v(function(e,r){if(r.$)return _r(e);var n=r.a;return Oe(n)}),w_=r0,x_=function(e){return a(w_,{gn:!1,hx:!1},e)},va=function(e){if(e.b){var r=e.a;return e.b,H(r)}else return B},P_=v(function(e,r){if(r.$){var t=r.a;return _r(t)}else{var n=r.a;return Oe(e(n))}}),C_=function(e){return{$:2,a:e}},k_=function(e){return{$:0,a:e}},z_=function(e){return{$:1,a:e}},Rc=v(function(e,r){return xn(r)-xn(e)}),Nc=L(function(e,r,n){var t=xn(n);return ve(xn(e),t)<1&&ve(t,xn(r))<1}),M_=v(function(e,r){var n=function(i){return ve(i,e)<0?Oe(i):_r(z_(r))},t=m(Nc,"0","9",r)?Oe(a(Rc,"0",r)):m(Nc,"a","z",r)?Oe(10+a(Rc,"a",r)):m(Nc,"A","Z",r)?Oe(10+a(Rc,"A",r)):_r(k_(r));return a(Bo,n,t)}),bs=v(function(e,r){var n=Dt(r);if(n.$===1)return Oe(0);var t=n.a,i=t.a,o=t.b;return a(Bo,function(c){return a(Bo,function($){return Oe(c+$*e)},a(bs,e,o))},a(M_,e,i))}),L_=v(function(e,r){return 2<=e&&e<=36?a(bs,e,s$(r)):_r(C_(e))}),T_=L_(16),D_=L(function(e,r,n){return P(Fn,e,r,n,1)}),W_=X(function(e,r,n,t){return P(Fn,e,r,n,t)}),la=ag,A_=v(function(e,r){var n=a(la,10,e);return Ve(r*n)/n}),F_=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=mm(n);if(t.b&&!t.b.b){var i=t.a;return y_(u([i,i]))}else return n};return a(Ge,so,a(Ge,function(n){return a(Se,function(t){return m(__,1,t,n)},x_(e))},a(Ge,Yn(va),a(Ge,Se(function(n){return n.ij}),a(Ge,Se(Wr(Sr)),a(Ge,S_("Parsing hex regex failed"),Bo(function(n){var t=a(q,a(Ge,r,a(Ge,T_,P_(Ut))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,$=o.b,l=$.a.a,f=$.b,s=f.a.a;return Oe(P(W_,i/255,c/255,l/255,a(A_,2,s/255)))}else break e;else{var i=t.a.a,d=t.b,c=d.a.a,b=d.b,l=b.a.a;return Oe(m(D_,i/255,c/255,l/255))}else break e;return _r("Parsing ints from hex failed")})))))))}(),I_=Xr("id"),E_=Wn("input"),j_=Wn("label"),jl=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),B_=jl(0),V_=Xr("name"),R_=function(e){return _(e,!0)},N_=function(e){return{$:1,a:e}},G_=v(function(e,r){return a(Wl,e,N_(r))}),H_=v(function(e,r){return m(cr,K,r,e)}),J_=a(H_,u(["target","value"]),bt),Bl=function(e){return a(G_,"input",a(li,R_,a(li,e,J_)))},O_=a(sn,Fl,g.iu),_s=a(sn,Fl,g.iy),mc=function(e){return a(wm,5,e)},Ai=function(e){return a(Te,Jm,a(Rm,m(Me,Um,"ff-",e),e))},U_=m(mn,195,195,195),ys=m(mn,69,69,69),q_=jl(2),Y_={$:2},Fi=Y_,X_=xe(32),Q_=xe(31),xv=function(e){return m(cr,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return H(i)}else return B;else{var t=n.a;return H(t)}}),B,e)},Z_=v(function(e,r){return a(Ce,r,m(cr,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return H(_(i,c))}else return B;else{var i=t.a;return H(i)}}),B,e))}),Pv=function(e){return m(cr,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return H(i)}else return B;else{var t=n.a;return H(t)}}),B,e)},K_=xe(33),e2=Xr("max"),r2=Xr("min"),n2=v(function(e,r){return a(Te,as,m(ns,a(ts,e,r),e,r))}),a2=function(e){return a(Xr,"step",e)},Vl=Xr("type"),Rl=Xr("value"),Pt=es,t2=Wh,Ss=v(function(e,r){switch(r.$){case 0:return Jr;case 2:var n=r.a;return Ti(n);case 6:var t=r.a;return fc(t);case 5:var i=r.a;return lc(i);case 7:var t=r.a;return Km(t);case 8:var t=r.a;return _m(t);case 3:var t=r.a,i=r.b;return a(sn,t,i);case 4:var o=r.a,c=r.b;return a(Te,o,c);case 9:var $=r.a,l=r.b;return a(Sm,$,a(Xm,e,l));case 1:var f=r.a;return ze(a(t2,e,f));default:var s=r.a,d=r.b;return a(Il,s,d)}}),i2=L(function(e,r,n){return a(An,u([re(ce),we(a(Ce,ce,n)),Kn]),u([a(ke,u([re(Pt(Ve(e*1e4)))]),vr),a(ke,a(S,Kn,a(q,Ss(Ci),r)),vr),a(ke,u([re(Pt(Ve(Pe(1-e)*1e4)))]),vr)]))}),o2=L(function(e,r,n){return a(rr,u([we(ce),re(a(Ce,ce,n)),C$]),u([a(ke,u([we(Pt(Ve(Pe(1-e)*1e4)))]),vr),a(ke,a(S,C$,a(q,Ss(Ci),r)),vr),a(ke,u([we(Pt(Ve(e*1e4)))]),vr)]))}),ws=v(function(e,r){var n=Pv(e),t=xv(e),i=function(){var z=_(n,t);e:for(;;)if(z.a.$===1){if(z.b.$===1)return z.a,z.b,!1;break e}else if(!z.a.a.$&&!z.b.$)switch(z.b.a.$){case 0:var x=z.a.a.a,T=z.b.a.a;return ve(T,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cR-r.cz)/(r.cy-r.cz),c=r.iC,$=c,l=xv($),f=function(){if(l.$===1)return"20px";if(l.a.$)return"100%";var z=l.a.a;return D(z)+"px"}(),s=Pv($),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var z=s.a.a;return D(z)+"px"}(),b="thmb-"+(d+("-"+f)),p=u([a(me,"width",d),a(me,"height",f)]),w=a(Z_,e,_(5,5)),y=w.a,C=w.b;return m(Ll,u([Dl(r.dc)?Jr:a(n2,y,C),Ml,re(function(){if(n.$===1)return ce;if(n.a.$){var z=n.a;return z}else return wr}()),we(function(){if(t.$===1)return wr;if(t.a.$){var z=t.a;return z}else return wr}())]),r.dc,a(An,u([re(a(Ce,ce,n)),we(a(Ce,Fe(20),t))]),u([P(Qe,pr,bn("input"),u([Tl(r.dc),a(Te,X_,a(ri,'input[type="range"].'+(b+"::-moz-range-thumb"),p)),a(Te,K_,a(ri,'input[type="range"].'+(b+"::-webkit-slider-thumb"),p)),a(Te,Q_,a(ri,'input[type="range"].'+(b+"::-ms-thumb"),p)),ze(jr(b+" ui-slide-bar focusable-parent")),ze(Bl(function(z){var x=fm(z);if(x.$===1)return r.e9(0);var T=x.a;return r.e9(T)})),ze(Vl("range")),ze(a2(function(){var z=r.cN;if(z.$===1)return"any";var x=z.a;return se(x)}())),ze(r2(se(r.cz))),ze(e2(se(r.cy))),ze(Rl(se(r.cR))),i?ze(a(Eo,"orient","vertical")):Jr,re(i?a(Ce,Fe(20),t):a(Ce,ce,n)),we(i?a(Ce,ce,n):a(Ce,Fe(20),t))]),He(M)),a(ke,a(S,re(a(Ce,ce,n)),a(S,we(a(Ce,Fe(20),t)),Y(e,u([mc(i?m(o2,o,a(S,Xe("focusable-thumb"),$),n):m(i2,o,a(S,Xe("focusable-thumb"),$),t))])))),vr)])))}),c2=m(ca,.5,.5,.5),xs=Sr,Cv=function(e){var r=e.dd,n=e.cR,t=e.cz,i=e.cy,o=e.cN,c=e.e9;return a(ke,u([re(ce)]),a(ws,u([$r(2),mc(a(ke,u([re(ce),we(Fe(16)),Kn,xr(ys),cn(4)]),vr))]),{dc:a(q_,M,a(An,u([re(ce)]),u([a(ke,u([O_]),hr(r)),a(ke,u([re(ce),_s,Ai(u([Fi]))]),hr(se(n)))]))),cy:i,cz:t,e9:c,cN:H(o),iC:xs(u([re(Fe(12)),we(Fe(12)),cn(4),Di(0),Mn(c2),xr(U_)])),cR:n}))},Ps=v(function(e,r){if(r.$)return e;var n=r.a;return n}),$2=v(function(e,r){switch(r.$){case 3:var c=r.a;return a(ms,M,{gr:c,g8:gs,dc:a(B_,M,hr(e)),e9:O1(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return Cv({dd:e,cy:o,cz:i,e9:q1(e),cN:.001*(o-i),cR:c});case 1:var t=r.a,i=t.a,o=t.b,c=r.b;return Cv({dd:e,cy:o,cz:i,e9:a(Ge,Ve,Y1(e)),cN:1,cR:c});default:var c=r.a;return a(ke,u([re(ce)]),oa(a(yt,M,u([a(yt,u([a(ar,"margin-bottom","6px")]),u([a(j_,u([b_(e)]),u([cc(e)]))])),a(E_,u([Vl("color"),a(ar,"width","100%"),a(ar,"height","26px"),a(ar,"padding","0px"),I_(e),V_(e),Bl(function($){return a(U1,e,a(Ps,os,F_($)))}),Rl(c_(c))]),M)]))))}}),Vo=m(mn,255,255,255),l2=function(e){return a(rr,u([re(ce),$r(8),a(Li,0,14),Wi({b9:1,hp:0,hV:0,cP:0}),Mn(uc)]),u([a(ke,u([dn(16),zl,Vr(Vo)]),hr(e.hy)),a(rr,u([re(ce),$r(6)]),J1(a(P$,$2,e.aR)))]))},u2=function(e){return a(rr,u([re(ce),we(ce),Vr(vc),dn(12),H1,Mi]),a(q,l2,e))},v2=G1(u2),f2=function(e){return a(rr,u([re(ce),we(ce)]),u([a(An,u([$r(14),re(ce)]),M),a(Pl,B1,v2(Va(e).gx))]))},m2=function(e){return{$:6,a:e}},s2=X(function(e,r,n,t){return"pad-"+(D(e)+("-"+(D(r)+("-"+(D(n)+("-"+D(t)))))))}),Cs=function(e){var r=e.cP,n=e.hV,t=e.b9,i=e.hp;if(ue(r,n)&&ue(r,t)&&ue(r,i)){var o=r;return a(Te,xt,W(wt,"p-"+D(r),o,o,o,o))}else return a(Te,xt,W(wt,P(s2,r,n,t,i),r,n,t,i))},d2=function(e){return{$:0,a:e}},p2=function(e){return{$:1,a:e}},ks=p2,g2=function(e){var r=e.b._;return un(r)},gi=m(mn,255,60,0),h2=function(e){var r=e.b._;e.b.s;var n=e.b.ap;return un(r)+1+un(n)},b2=function(e){var r=_(g2(e),h2(e)-1),n=r.a,t=r.b;return a(ke,u([re(ce),Kn]),a(ws,u([mc(a(An,u([re(ce),we(Fe(4)),Kn,xr(ys),cn(2)]),u([a(ke,u([re(Pt(n)),we(ce),xr(gi),cn(2)]),vr),a(ke,u([re(Pt(t-n))]),vr)])))]),{dc:ks(""),cy:t,cz:0,e9:a(Ge,Ve,d2),cN:H(1),iC:xs(u([re(Fe(12)),we(Fe(12)),cn(6),xr(gi)])),cR:n}))},zs=fc(2),ni=m(mn,220,220,220),_2=function(e){var r=e.a,n=function(){return r.$?u([Vr(ni)]):u([Vr(gi)])}();return a(ke,Y(n,u([dn(14),zs,_s,Ai(u([Fi]))])),hr(a(hm,3,Va(e).gv)))},y2=function(e){e.a;var r=e.b._;return a(Se,function(n){return Ve(60/(Va(e).gv-n))},a(Se,a(Ge,em,function(n){return n.gv}),va(a(om,59,r))))},S2=function(e){var r=y2(e);if(r.$===1)return vr;var n=r.a;return a(ke,u([dn(14),Vr(vc),Ai(u([Fi]))]),hr(D(n)+" FPS"))},kv={$:1},w2={$:3},x2={$:2},P2={$:8},Ms=ec,Ls=v(function(e,r){return a(K$,e,Ms(r))}),C2=Ls("disabled"),L$=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},k2=function(e){return a(Ia,L$,e)?Jr:Xe("focusable")},Ro=a(pa,ze,$s),Nl=v(function(e,r){var n=r.hD,t=r.dc;return P(Qe,pr,Ur,a(S,re(wr),a(S,we(wr),a(S,Xe(g.cj+(" "+(g.aB+(" "+(g.h3+(" "+g.e7)))))),a(S,Pa,a(S,k2(e),a(S,Ti(P2),a(S,ze(fs(0)),function(){if(n.$===1)return a(S,ze(C2(!0)),e);var i=n.a;return a(S,Ro(i),a(S,ls(function(o){return ue(o,cs)||ue(o,vs)?H(i):B}),e))}()))))))),He(u([t])))}),zv=v(function(e,r){return a(Nl,M,{dc:a(ke,u([re(Fe(36)),nn(3),Vr(r),ds,dn(12),zl,Mn(r),Di(1),cn(4)]),hr("REC")),hD:H(e)})}),Mv=L(function(e,r,n){return a(Nl,M,{dc:oa(m($t,20,n,e)),hD:H(r)})}),z2=function(e){var r=e.a;e.b._,e.b.s;var n=e.b.ap;return a(An,M,u([a(ke,u([re(Fe(40))]),function(){switch(r.$){case 0:return a(zv,kv,gi);case 1:return a(zv,x2,ni);default:return vr}}()),a(ke,u([re(Fe(28))]),function(){switch(r.$){case 0:return vr;case 1:return Bn(n)?vr:m(Mv,xa.hN,w2,ni);default:return m(Mv,xa.hL,kv,ni)}}())]))},M2=function(e){return a(rr,u([re(ce)]),u([b2(e),a(An,u([re(ce),$r(14),a(Li,0,6),Kn]),u([z2(e),S2(e),_2(e)]))]))},L2=function(e){return a(rr,u([re(ce),$r(14),Cs({b9:20,hp:0,hV:0,cP:0}),Wi({b9:1,hp:0,hV:0,cP:0}),Mn(uc)]),u([a(ke,u([dn(16),zl,Vr(vc)]),hr("Time Travel")),a(Pl,m2,M2(e))]))},T2=v(function(e,r){return a(rr,u([Va(r).bo.iQ>600?xr(E1):xr(j1),Wi({b9:0,hp:0,hV:1,cP:0}),Mn(uc),re(Fe(vt.de)),we(ce)]),u([function(){return e?vr:a(rr,u([re(ce),we(ce),nn(14),$r(14)]),u([L2(r),f2(r)]))}()]))}),D2=function(e){return{$:3,a:e}},T$=lc(2),W2=m(mn,232,78,50),A2=m(mn,48,48,48),F2=function(e){return a(Xr,"href",Dh(e))},I2=fn("rel"),E2=Xr("target"),Lv=v(function(e,r){var n=r.fH,t=r.dc;return P(Qe,pr,bn("a"),a(S,ze(F2(n)),a(S,ze(I2("noopener noreferrer")),a(S,ze(E2("_blank")),a(S,re(wr),a(S,we(wr),a(S,Xe(g.cj+(" "+(g.aB+(" "+g.eI)))),e)))))),He(u([t])))}),Xt=Xr("title"),j2=m(mn,31,161,242),B2=function(e){var r=L(function(o,c,$){var l=ue(c,e)?Vo:A2;return a(ke,u([Br(Xt(o)),Ro(D2(c)),Pa,nn(7)]),oa(m($t,40,l,$)))}),n=a(rr,u([Cl]),u([m(r,"Configurations",0,xa.ia)])),t=a(rr,M,u([a(Lv,u([Br(Xt("Twitter")),T$,Pa,nn(7)]),{dc:oa(m($t,40,j2,xa.iI)),fH:"https://twitter.com/AzizErkalSelman"}),a(Lv,u([Br(Xt("Source Code")),T$,Pa,nn(7)]),{dc:oa(m($t,40,W2,xa.gX)),fH:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(ke,u([re(Fe(vt.bM)),nn(4),Ro(Qm),Wi({b9:1,hp:0,hV:0,cP:0}),Mn(uc),Pa,Br(Xt("Activate Distraction Free Mode"))]),oa(m($t,46,Vo,xa.fR)));return a(rr,u([re(Fe(vt.bM)),we(ce),Mi,xr(At)]),u([i,n,t]))},V2=function(e){var r=a(ke,u([re(Fe(vt.bM)),Cl,nn(4),Ro(Qm),Pa,Br(Xt("Deactivate Distraction Free Mode (A)"))]),oa(m($t,46,At,xa.fR)));return e.bE?r:a(An,u([re(Fe(vt.bM+vt.de)),we(ce)]),u([B2(e.bw),a(T2,e.bw,e.U)]))},R2=L(function(e,r,n){var t=m3(n.U),i=Va(n.U);return m(S1,{hI:u([d3({f8:B,gg:B,h4:B})])},u([re(Fe($i(i.bo.iQ))),we(Fe($i(i.bo.g3))),Br(a(ar,"-webkit-font-smoothing","antialiased")),Br(a(ar,"pointer-events","none")),Br(a(ar,"touch-action","none")),Br(a(ar,"user-select","none")),Wo(a(Pl,v3,a(r,i,t))),Wo(V2(n))]),oa(a(w1,_t(f3),a(e,i,t))))}),N2=Rr(function(e,r,n,t,i,o){var c=v(function(l,f){return _(P(i3,r,o,l,f),rv)}),$=function(l){var f=a(nm,n,l.hk);return _({bw:0,bE:!0,U:a(o3,f,t),dW:0},rv)};return kb({he:$,ik:u3,iK:c,iN:a(R2,e,i)})}),Pn=v(function(e,r){return{iS:e,iW:r}}),G2=v(function(e,r){return a(Se,function(n){if(n.$===3){var t=n.a;return t}else return!1},a(Wt,e,r.aR))}),H2=v(function(e,r){return a(Ce,!1,va(a(Wr,G2(e),r)))}),J2=v(function(e,r){return a(H2,e,r.gx)}),Ft=J2,O2=v(function(e,r){return a(Se,function(n){if(n.$)return 0;var t=n.b;return t},a(Wt,e,r.aR))}),U2=v(function(e,r){return a(Ce,0,va(a(Wr,O2(e),r)))}),q2=v(function(e,r){return a(U2,e,r.gx)}),Vn=q2,Gl=function(e){return e},fr=function(e){return e},No=function(e){var r=e;return-r},Y2=v(function(e,r){var n=e,t=r;return{iS:n.iW*t.d1-n.d1*t.iW,iW:n.d1*t.iS-n.iS*t.d1,d1:n.iS*t.iW-n.iW*t.iS}}),Ts=function(e){var r=e;return r.d$},Ds=function(e){var r=e;return r.d0},X2=function(e){return a(Y2,Ts(e),Ds(e))},It=function(e){var r=e;return r.dw},ea=og,ra=cg,ho=L(function(e,r,n){var t=e,i=r,o=n,c=.5*i,$=ea(c),l=ra(c),f=t.gJ,s=f,d=s.iS*l,b=$*d,p=d*d,w=s.iW*l,y=$*w,C=d*w,z=w*w,x=1-2*(p+z),T=s.d1*l,G=$*T,ne=2*(C-G),te=2*(C+G),ie=d*T,$e=2*(ie+y),oe=2*(ie-y),ee=w*T,be=2*(ee-b),_e=2*(ee+b),je=T*T,De=1-2*(z+je),ge=1-2*(p+je);return{iS:De*o.iS+ne*o.iW+$e*o.d1,iW:te*o.iS+ge*o.iW+be*o.d1,d1:oe*o.iS+_e*o.iW+x*o.d1}}),Ii=L(function(e,r,n){var t=e,i=r,o=n,c=.5*i,$=ea(c),l=ra(c),f=t.dw,s=f,d=o.iS-s.iS,b=o.iW-s.iW,p=o.d1-s.d1,w=t.gJ,y=w,C=y.iS*l,z=$*C,x=C*C,T=y.iW*l,G=$*T,ne=C*T,te=T*T,ie=1-2*(x+te),$e=y.d1*l,oe=$*$e,ee=2*(ne-oe),be=2*(ne+oe),_e=C*$e,je=2*(_e+G),De=2*(_e-G),ge=T*$e,Be=2*(ge-z),I=2*(ge+z),j=$e*$e,V=1-2*(te+j),R=1-2*(x+j);return{iS:s.iS+V*d+ee*b+je*p,iW:s.iW+be*d+R*b+Be*p,d1:s.d1+De*d+I*b+ie*p}}),Et=function(e){return e},Na=function(e){var r=e;return r.d$},Ga=function(e){var r=e;return r.d0},Ha=function(e){var r=e;return r.d2},Ws=L(function(e,r,n){return Et({dw:m(Ii,e,r,It(n)),d$:m(ho,e,r,Na(n)),d0:m(ho,e,r,Ga(n)),d2:m(ho,e,r,Ha(n))})}),Tv=L(function(e,r,n){return m(Ws,e(n),r,n)}),Hl=function(e){var r=e;return r.gJ},jt=v(function(e,r){var n=e,t=r;return{iS:t.iS+n.iS,iW:t.iW+n.iW,d1:t.d1+n.d1}}),As=v(function(e,r){return Et({dw:a(jt,e,It(r)),d$:Na(r),d0:Ga(r),d2:Ha(r)})}),Q2=v(function(e,r){var n=e,t=r;return{iS:n*t.iS,iW:n*t.iW,d1:n*t.d1}}),Z2=L(function(e,r,n){return a(As,a(Q2,r,e),n)}),K2=L(function(e,r,n){return m(Z2,Hl(e(n)),r,n)}),Tn=v(function(e,r){return{gJ:r,dw:e}}),ey=function(e){var r=e;return a(Tn,r.dw,r.d$)},ry=function(e){var r=e;return a(Tn,r.dw,r.d0)},ny=function(e){var r=e;return a(Tn,r.dw,r.d2)},Fs=function(e){var r=Et({dw:e.bg,d$:Ds(e.ep),d0:X2(e.ep),d2:Ts(e.ep)}),n=m(K2,ny,e.c3,m(Tv,ey,No(e.cl),m(Tv,ry,e.b6,r)));return n},ay=function(e){return{$:1,a:e}},gr=function(e){var r=e;return Pe(r)},ty=function(e){return{dH:ay(gr(e.fM)),dV:e.dV}},Yr=function(e){return e},aa={iS:0,iW:0,d1:0},Is=Sr,Ma=function(e){return e},iy=Ma({iS:1,iW:0,d1:0}),Jl=iy,Es=Ma({iS:0,iW:0,d1:1}),sc=Es,js=Is({dw:aa,d$:sc,d0:Jl}),oy=function(e){var r=e.bg,n=e.b6,t=e.cl,i=e.fM;return ty({dV:Fs({b6:Yr(n),c3:fr(1e3),cl:Yr(t),bg:Gl(r),ep:js}),fM:fr(i)})},lt=function(e){return Yr(qn*(e/180))},cy=function(e){return{$:0,a:e}},bo=function(e){var r=e;return .5*r},$y=$g,ly=function(e){var r=e;return $y(r)},uy=function(e){var r=bo(gr(e.fK)),n=ly(r);return{dH:cy(n),dV:e.dV}},vy=function(e){var r=e.bg,n=e.b6,t=e.cl,i=e.c3;return uy({fK:lt(40),dV:Fs({b6:Yr(n),c3:fr(i),cl:Yr(t),bg:Gl(r),ep:js})})},Bs=v(function(e,r){return a(Ft,"orthographic",e)?oy({b6:a(Vn,"camera azimuth",e),cl:a(Vn,"camera elevation",e),bg:r,fM:a(Vn,"camera distance",e)}):vy({b6:a(Vn,"camera azimuth",e),c3:a(Vn,"camera distance",e),cl:a(Vn,"camera elevation",e),bg:r})}),Ol={$:0},fy={c8:!0,c9:"",da:"",a0:Ol},Vs=v(function(e,r){var n={d8:1,c7:1+a(Ce,-1,Im(a(q,function(t){return t.c7},r.hO))),fi:e};return F(r,{hO:a(S,n,r.hO)})}),Rs={a9:{cc:a(Pn,0,0),hQ:.5},gK:0,hZ:0,fr:0,iH:M,iM:_(0,0)},Ns=a(Vs,u([a(Pn,6,0),a(Pn,6,6),a(Pn,0,6)]),{cX:Rs,d7:B,az:M,c$:M,hO:M}),my=function(e){return{G:M,p:M,s:e}},sy=function(e){return{ay:a(Bs,e,{iS:0,iW:0,d1:0}),m:fy,l:my(Ns),aX:a(Pn,0,0)}},Nt=v(function(e,r){return _(e,lm(r))}),dy=v(function(e,r){return _(e,um(r))}),py=L(function(e,r,n){return{aR:n,hm:r,hy:e}}),gy=function(e){return m(Me,v(function(r,n){var t=r.a,i=r.b;return m(ka,t,i,n)}),oc,e)},hy=L(function(e,r,n){return m(py,e,r,gy(n))}),ro=hy,Qa=L(function(e,r,n){var t=r.a,i=r.b;return _(e,a(vm,_(t,i),n))}),by=P(Fn,255/255,255/255,255/255,1),_y=u([m(ro,"View Options",!0,u([a(Nt,"draw speed vector",!1),a(Nt,"draw ball trail",!0),a(Nt,"orthographic",!0),a(Nt,"unlit",!0)])),m(ro,"Camera",!0,u([m(Qa,"camera distance",_(3,60),40),m(Qa,"camera azimuth",_(0,2*qn),0),m(Qa,"camera elevation",_(-qn/2,qn/2),0)])),m(ro,"Physics Parameters",!0,u([a(Nt,"fix time steps",!0),m(Qa,"gas force",_(20,60),40),m(Qa,"friction",_(0,1),.4),m(Qa,"direction change speed",_(1,5),3)])),m(ro,"Color",!0,u([a(dy,"floor color",by)]))]),Gs=function(e){return{$:1,a:e}},Ei=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return n*i+t*o}),an=pg,dc=function(e){return an(a(Ei,e,e))},$n=v(function(e,r){return dc(_(e.iS-r.iS,e.iW-r.iW))}),yy=v(function(e,r){var n=r.a0;if(n.$){var t=n.a,i=a(Pn,e.iS,e.iW);return F(r,{a0:Gs(function(){var o=Le(t);if(o.b){var c=o.a;return a($n,c,i)>2?Y(t,u([i])):t}else return u([i])}())})}else return r}),Sy=v(function(e,r){return e.eB.fv?F(r,{m:a(yy,r.aX,r.m)}):r}),kr=L(function(e,r,n){return{iS:e,iW:r,d1:n}}),ji=function(e){var r=e;return r.s},wy=v(function(e,r){var n=ji(r.l).cX;return F(r,{ay:a(Bs,e,m(kr,n.a9.cc.iS,n.a9.cc.iW,0))})}),Hs=v(function(e,r){var n=r;return F(n,{s:e(n.s)})}),xy=function(e){var r=function(n){return!n.ey&&a($n,n.cc,e.cX.a9.cc)<1?F(n,{ey:!0}):n};return F(e,{az:a(q,r,e.az)})},Js=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return _(n+i,t+o)}),Dn=v(function(e,r){var n=r.a,t=r.b;return _(e*n,e*t)}),fa=v(function(e,r){return a(Dn,e/dc(r),r)}),Py=v(function(e,r){return a(fa,a(Ei,e,r),e)}),Cy=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return _(i-n,o-t)}),ky=v(function(e,r){var n=r.cX,t=a(Py,e.cB,n.iM),i=a(Cy,t,n.iM),o=a(Js,i,a(Dn,e.cG.d8,a(Dn,-1,t)));return F(r,{cX:F(n,{iM:o})})}),pc=v(function(e,r){return _(e,r)}),Ul=function(e){var r=function(){if(e.b){var n=e.a,t=e.b;return Y(t,u([n]))}else return M}();return m(rc,pc,e,r)},Bi=v(function(e,r){var n=r.a,t=r.b;return _(n*ea(e)-t*ra(e),n*ra(e)+t*ea(e))}),Pr=v(function(e,r){var n=e.a,t=e.b;return F(r,{iS:r.iS+n,iW:r.iW+t})}),mr=v(function(e,r){return _(e.iS-r.iS,e.iW-r.iW)}),zy=v(function(e,r){var n=r.a,t=r.b,i=a(fa,e,a(Bi,-Ln(90),a(mr,t,n)));return _(a(Pr,i,n),a(Pr,i,t))}),My=v(function(e,r){return{gA:a(q,function(n){return{cc:n,hQ:e}},r),h6:a(q,zy(e),Ul(r))}}),ln=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return n*o-t*i}),Ly=v(function(e,r){var n=_(_(e.as,e.gJ),_(r.as,r.gJ)),t=n.a,i=t.a,o=t.b,c=n.b,$=c.a,l=c.b,f=a(ln,a(mr,$,i),o),s=a(ln,o,l),d=f/s,b=a(ln,a(mr,$,i),l),p=b/s;return!f&&!s?B:s&&0<=p&&0<=d?H(a(Pr,a(Dn,p,o),i)):B}),Os=v(function(e,r){r.hQ;var n=r.cc,t=a(ln,e.gJ,a(mr,n,e.as))<0?1:-1;return a(Ly,{gJ:a(Bi,t*Ln(90),e.gJ),as:n},e)}),vn=function(e){var r=e.a,n=e.b;return _(n.iS-r.iS,n.iW-r.iW)},Us=function(e){var r=e.a,n=e.b;return{gJ:vn(_(r,n)),as:r}},Ty=v(function(e,r){var n=e.a,t=e.b,i=r.hQ,o=a(Os,Us(e),r);if(o.$===1)return B;var c=o.a,$=a($n,r.cc,c);if(ve($,i)<1){var l=a(Pr,a(fa,-an(i*i-$*$),vn(e)),c),f=a(Ei,a(mr,t,n),a(mr,l,n))>=0&&ve(a($n,n,l),a($n,n,t))<1;return f?H(l):B}else return B}),qs=fa(1),Dy=L(function(e,r,n){var t=_(e,a(Pr,r,e)),i=a(Ty,t,n);return a(Se,function(o){return{cB:qs(a(mr,o,n.cc)),cQ:a(mr,o,e)}},i)}),Wy=v(function(e,r){var n=e.a,t=r.a,i=_(_(n,vn(e)),_(t,vn(r))),o=i.a,c=o.a,$=o.b,l=i.b,f=l.a,s=l.b,d=a(ln,a(mr,f,c),$),b=a(ln,$,s),p=d/b,w=a(ln,a(mr,f,c),s),y=w/b;return!d&&!b?B:b&&0<=y&&y<=1&&0<=p&&p<=1?H(a(Pr,a(Dn,y,$),c)):B}),Ys=function(e){return qs(a(Bi,-Ln(90),vn(e)))},Ay=L(function(e,r,n){var t=_(e,a(Pr,r,e)),i=a(Wy,t,n);return a(Se,function(o){return{cB:Ys(n),cQ:a(mr,o,e)}},i)}),Xs=rg,Dv=v(function(e,r){return{ce:e,cB:r.cB,cQ:r.cQ}}),Fy=L(function(e,r,n){var t=a(My,e.hQ,n),i=t.h6,o=t.gA,c=a(Wr,function(l){return a(Se,Dv(l.cc),m(Dy,e.cc,r,l))},o),$=a(Wr,function(l){return a(Se,function(f){return a(Dv,a(Pr,a(fa,e.hQ,a(Bi,Ln(90),vn(l))),a(Pr,f.cQ,e.cc)),f)},m(Ay,e.cc,r,l))},i);return va(a(Xs,a(Ge,function(l){return l.cQ},dc),or(u([c,$]))))}),Iy=v(function(e,r){return{ce:r.ce,cB:r.cB,cG:e,cQ:r.cQ}}),Ey=v(function(e,r){var n=a(Dn,e.eg,r.cX.iM),t=function(c){return a(Se,Iy(c),m(Fy,r.cX.a9,n,c.fi))},i=va(a(Xs,a(Ge,function(c){return c.cQ},dc),a(Wr,t,r.hO)));if(i.$===1)return r;var o=i.a;return a(ky,o,F(r,{d7:H(o.cG.c7),c$:a($m,15,a(S,o.ce,r.c$))}))}),Wv=v(function(e,r){var n=e.a,t=e.b,i=r.hQ,o=a(Os,Us(e),r);if(o.$===1)return M;var c=o.a,$=a($n,r.cc,c);if(ve($,i)<1){var l=an(i*i-$*$),f=a(Pr,a(fa,l,vn(e)),c),s=function(b){return a(Ei,a(mr,t,n),a(mr,b,n))>=0&&ve(a($n,n,b),a($n,n,t))<1},d=a(Pr,a(fa,-l,vn(e)),c);return a(zi,s,ue($,i)?u([d]):u([d,f]))}else return M}),jy=v(function(e,r){var n=e.a,t=e.b;return ve(a($n,n,r.cc),r.hQ)<0&&ve(a($n,t,r.cc),r.hQ)>-1?a(Wv,_(t,n),r):a(Wv,_(n,t),r)}),By=v(function(e,r){var n=r.a,t=_(_(e.as,e.gJ),_(n,vn(r))),i=t.a,o=i.a,c=i.b,$=t.b,l=$.a,f=$.b,s=a(ln,a(mr,l,o),c),d=a(ln,c,f),b=s/d,p=a(ln,a(mr,l,o),f),w=p/d;return!s&&!d?B:d&&w>=0&&b>=0&&b<=1?H(a(Pr,a(Dn,w,c),o)):B}),Vy=v(function(e,r){var n=e.a;r.hQ;var t=r.cc,i=a(ln,vn(e),a(mr,t,n))<0?1:-1;return a(By,{gJ:a(Bi,i*Ln(90),vn(e)),as:t},e)}),Ry=function(e){var r=e.cX,n=v(function(o,c){var $=a(Vy,o,c);if($.$)return c;var l=$.a;return F(c,{cc:a(Pr,a(fa,c.hQ,Ys(o)),a(Pr,a(mr,l,c.cc),c.cc))})}),t=a(zi,function(o){return!Bn(a(jy,o,r.a9))},a(Ra,a(Ge,function(o){return o.fi},Ul),e.hO)),i=m(Me,n,r.a9,t);return F(e,{cX:F(r,{a9:i})})},Ny=v(function(e,r){return F(r,{cX:e(r.cX)})}),Gy=v(function(e,r){return F(r,{iM:a(Dn,1-e.eg*5*a(Vn,"friction",e),r.iM)})}),ql=L(function(e,r,n){return ve(n,e)<0?e:ve(n,r)>0?r:n}),Hy=function(e){var r=e.a,n=e.b;return _(r*ea(n),r*ra(n))},Jy=function(e){return(e.hV?1:0)-(e.hp?1:0)},Oy=Jy,Uy=function(e){return(e.fF?1:0)-(e.ef?1:0)},Gc=Uy,qy=v(function(e,r){var n=a(Vn,"gas force",e),t=Hy(_(1,r.gK)),i=Js(a(Dn,e.eg*n*Gc(e.eB),t));return F(r,{gK:r.gK-Oy(e.eB)*a(Vn,"direction change speed",e)*e.eg,fr:Gc(e.eB)?m(ql,-14,14,r.fr+e.eg*1e3*Gc(e.eB)):a(Ei,r.iM,t),iM:i(r.iM)})}),Yy=v(function(e,r){var n=r.a9;return F(r,{a9:F(n,{cc:a(Pr,a(Dn,e.eg,r.iM),r.a9.cc)})})}),Xy=v(function(e,r){return F(r,{hZ:r.hZ+e.eg*r.fr})}),Qy=function(e){return F(e,{iH:function(){var r=e.iH;if(r.b){var n=r.a;return a($n,n,e.a9.cc)>1?a(S,e.a9.cc,e.iH):e.iH}else return u([e.a9.cc])}()})},Zy=v(function(e,r){return Qy(a(Yy,e,a(Xy,e,a(Gy,e,a(qy,e,r)))))}),Ky=v(function(e,r){return xy(Ry(a(Ny,Zy(e),a(Ey,e,r))))}),eS=v(function(e,r){var n=a(Ky,e,ji(r.l));return F(r,{l:a(Hs,_t(n),r.l)})}),no=function(e){return e},La=function(e){var r=e;return r},rS=v(function(e,r){var n=e,t=r;return t.iS*n.iS+t.iW*n.iW+t.d1*n.d1}),Re=v(function(e,r){var n=r;return e*n}),Qs=function(e){var r=e;return r.dw},nS=v(function(e,r){var n=e,t=r,i=n.dw,o=i,c=n.hA,$=c;return(t.iS-o.iS)*$.iS+(t.iW-o.iW)*$.iW+(t.d1-o.d1)*$.d1}),aS=L(function(e,r,n){var t=e,i=r,o=n;return{iS:o.iS+i*t.iS,iW:o.iW+i*t.iW,d1:o.d1+i*t.d1}}),tS=v(function(e,r){var n=Hl(r),t=e,i=t.hA,o=a(rS,i,n);if(o){var c=Qs(r),$=a(nS,e,c),l=a(Re,-1/o,$);return H(m(aS,n,l,c))}else return B}),iS=v(function(e,r){return{iS:e,iW:r}}),Av=v(function(e,r){var n=e,t=r;return n*t}),oS=function(e){var r=e;return r},Fv=function(e){var r=e;return oS(r.f6)},cS=function(e){var r=e;return r.ba},$S=function(e){var r=e,n=a(tr,Pe(r.iS),a(tr,Pe(r.iW),Pe(r.d1)));if(n){var t=r.d1/n,i=r.iW/n,o=r.iS/n,c=an(o*o+i*i+t*t);return H({iS:o/c,iW:i/c,d1:t/c})}else return B},Zs=v(function(e,r){var n=r;return n/e}),D$=function(e){var r=e;return It(r)},Ks=Ma({iS:0,iW:0,d1:-1}),lS=v(function(e,r){var n=e,t=r;return t/n}),uS=v(function(e,r){var n=e,t=r,i=n.d2,o=i,c=n.d0,$=c,l=n.d$,f=l;return{iS:f.iS*t.iS+$.iS*t.iW+o.iS*t.d1,iW:f.iW*t.iS+$.iW*t.iW+o.iW*t.d1,d1:f.d1*t.iS+$.d1*t.iW+o.d1*t.d1}}),Go=function(e){var r=e;return{iS:-r.iS,iW:-r.iW,d1:-r.d1}},W$=function(e){var r=e;return Go(Ha(r))},vS=v(function(e,r){var n=e,t=r,i=n.dw,o=i,c=n.d$,$=c;return(t.iS-o.iS)*$.iS+(t.iW-o.iW)*$.iW}),Yl=L(function(e,r,n){var t=e,i=r,o=n;return{iS:t,iW:i,d1:o}}),fS=X(function(e,r,n,t){var i=e,o=r,c=n,$=t,l=i.dw,f=l,s=i.d2,d=s,b=i.d0,p=b,w=i.d$,y=w;return{iS:f.iS+o*y.iS+c*p.iS+$*d.iS,iW:f.iW+o*y.iW+c*p.iW+$*d.iW,d1:f.d1+o*y.d1+c*p.d1+$*d.d1}}),mS=v(function(e,r){var n=e,t=r,i=n.dw,o=i,c=n.d0,$=c;return(t.iS-o.iS)*$.iS+(t.iW-o.iW)*$.iW}),Ue=0,sS=L(function(e,r,n){var t=e,i=a(mS,Fv(r),n),o=a(vS,Fv(r),n),c=t.dV,$=c,l=cS(r);l.a;var f=l.b,s=t.dH;if(s.$){var w=s.a,y=a(lS,f,w),C=P(fS,$,a(Av,y,o),a(Av,y,i),Ue);return a(Tn,C,W$(t.dV))}else{var d=s.a,b=No(a(Zs,d,a(Re,.5,f))),p=a(uS,$,a(Ce,Ks,$S(m(Yl,o,i,b))));return a(Tn,D$(t.dV),p)}}),A$=function(e){var r=e;return{iS:ea(r),iW:ra(r)}},dS=function(e){var r=e;return{iS:-r.iW,iW:r.iS}},pS=function(e){return e},gS=v(function(e,r){return pS({dw:r,d$:e,d0:dS(e)})}),hS=v(function(e,r){return a(gS,A$(e),r)}),bS=L(function(e,r,n){var t=e.a,i=e.b;return{f6:a(hS,r,n),ba:_(gr(t),gr(i))}}),ft=function(e){var r=e;return r.iS},_S=v(function(e,r){var n=e,t=r;return{iS:n,iW:t}}),mt=function(e){var r=e;return r.iW},st=function(e){var r=e;return r.d1},yS=X(function(e,r,n,t){var i=n.iS,o=n.iW,c=function(f){return m(kr,La(ft(f)),La(mt(f)),La(st(f)))},$=m(bS,_(no(r.iQ),no(r.g3)),lt(0),a(iS,0,0)),l=a(_S,no(i),no(o));return a(Se,c,a(tS,t,m(sS,e,$,l)))}),SS=v(function(e,r){return{hA:e,dw:r}}),wS=v(function(e,r){var n=r;return a(SS,n.hA,a(jt,e,n.dw))}),xS=v(function(e,r){return{hA:r,dw:e}}),PS=a(xS,aa,sc),CS=X(function(e,r,n,t){return P(yS,r,n,t,a(wS,m(Yl,fr(0),fr(0),fr(e)),PS))}),kS=CS(0),zS=v(function(e,r){return F(r,{aX:a(Ce,r.aX,a(Se,function(n){return a(Pn,n.iS,n.iW)},m(kS,r.ay,e.bo,e.fh)))})}),MS=v(function(e,r){var n=a(Ft,"fix time steps",e)?F(e,{eg:.016}):e,t=r.m.c8?Sy(n):Sr;return a(wy,n,a(eS,n,a(zS,n,t(r))))}),LS=v(function(e,r){var n=r;return F(n,{p:a(S,n.s,n.p),s:e})}),TS=Kg,DS=Zg,WS=function(e){var r=L(function(n,t,i){return{G:i,p:n,s:t}});return P(DS,r,a(K,"before",on(e)),a(K,"current",e),a(K,"after",on(e)))},AS=qe(function(e,r,n,t,i){return{cX:e,d7:i,az:n,c$:t,hO:r}}),FS=Rr(function(e,r,n,t,i,o){return{a9:e,gK:n,hZ:i,fr:t,iH:o,iM:r}}),IS=v(function(e,r){return{cc:e,hQ:r}}),ES=sl(vb),Ze=L(function(e,r,n){return a(ES,a(K,e,r),n)}),Vi=m(Ze,"y",Ae,m(Ze,"x",Ae,Ye(Pn))),jS=m(Ze,"radius",Ae,m(Ze,"center",Vi,Ye(IS))),Iv=Ug,BS=m(Ze,"trail",on(Vi),m(Ze,"rotation",Ae,m(Ze,"rotationSpeed",Ae,m(Ze,"directionFromXAxis",Ae,m(Ze,"velocity",m(sl,pc,a(Iv,0,Ae),a(Iv,1,Ae)),m(Ze,"circle",jS,Ye(FS))))))),VS=v(function(e,r){return{cc:e,ey:r}}),RS=m(Ze,"isCollected",We,m(Ze,"center",Vi,Ye(VS))),ed=Vg,NS=Jg,GS=Yg,HS=function(e){return GS(u([NS(B),a(li,H,e)]))},JS=L(function(e,r,n){return{d8:n,c7:e,fi:r}}),OS=m(Ze,"bounciness",Ae,m(Ze,"polygon",on(Vi),m(Ze,"id",ed,Ye(JS)))),US=m(Ze,"ballBouncedInLastTickToPolygonWithId",HS(ed),m(Ze,"collisionPointsHistory",on(Vi),m(Ze,"coins",on(RS),m(Ze,"polygons",on(OS),m(Ze,"ball",BS,Ye(AS)))))),qS=v(function(e,r){var n=r;return ga(u([_("before",a(Un,e,n.p)),_("current",e(n.s)),_("after",a(Un,e,n.G))]))}),Rn=ec,Ri=function(e){return ga(u([_("x",Rn(e.iS)),_("y",Rn(e.iW))]))},YS=function(e){return ga(u([_("center",Ri(e.cc)),_("radius",Rn(e.hQ))]))},XS=function(e){return ga(u([_("circle",YS(e.a9)),_("velocity",function(r){var n=r.a,t=r.b;return a(Un,Sr,u([Rn(n),Rn(t)]))}(e.iM)),_("directionFromXAxis",Rn(e.gK)),_("rotationSpeed",Rn(e.fr)),_("rotation",Rn(e.hZ)),_("trail",a(Un,Ri,e.iH))]))},QS=function(e){return ga(u([_("center",Ri(e.cc)),_("isCollected",Ms(e.ey))]))},rd=ec,ZS=function(e){return ga(u([_("id",rd(e.c7)),_("polygon",a(Un,Ri,e.fi)),_("bounciness",Rn(e.d8))]))},KS=oh,ew=function(e){return ga(u([_("ball",XS(e.cX)),_("polygons",a(Un,ZS,e.hO)),_("coins",a(Un,QS,e.az)),_("collisionPointsHistory",a(Un,Ri,e.c$)),_("ballBouncedInLastTickToPolygonWithId",a(Ge,Se(rd),Ce(KS))(e.d7))]))},rw=function(e){return F(e,{cX:Rs})},nw=function(e){return F(e,{az:a(q,function(r){return F(r,{ey:!1})},e.az)})},aw=function(e){return F(e,{c$:M})},tw=function(e){return aw(nw(rw(e)))},iw=v(function(e,r){return F(r,{c9:a(Yf,2,a(qS,a(Ge,tw,ew),e))})}),ow=function(e){return F(e,{a0:Ol})},cw=function(e){var r=e,n=r.G;if(n.b){var t=n.a,i=n.b;return H({G:i,p:a(S,r.s,r.p),s:t})}else return B},$w=function(e){var r=e,n=r.p;if(n.b){var t=n.a,i=n.b;return H({G:a(S,r.s,r.G),p:i,s:t})}else return B},lw=function(e){var r=e,n=r.G;if(n.b){var t=n.a,i=n.b;return F(r,{G:i,p:a(S,t,r.p)})}else return F(r,{G:Le(r.p),p:M})},uw=function(e){var r=e,n=r.p;if(n.b){var t=n.a,i=n.b;return F(r,{p:i,s:t})}else{var o=r.G;if(o.b){var t=o.a,i=o.b;return F(r,{G:i,s:t})}else return r}},vw=v(function(e,r){return F(r,{da:e})}),fw=function(e){return F(e,{a0:Gs(M)})},mw=v(function(e,r){return F(r,{c8:e,a0:Ol})}),sw=L(function(e,r,n){switch(r.$){case 0:var t=r.a;return F(n,{m:a(mw,t,n.m)});case 1:return F(n,{m:fw(n.m)});case 2:var i=r.a;return F(n,{m:ow(n.m),l:a(Hs,Vs(i),n.l)});case 3:return F(n,{l:a(Ce,n.l,$w(n.l))});case 4:return F(n,{l:a(Ce,n.l,cw(n.l))});case 5:return F(n,{l:a(LS,Ns,n.l)});case 6:return F(n,{l:uw(n.l)});case 7:return F(n,{l:lw(n.l)});case 8:return F(n,{m:a(iw,n.l,n.m)});case 9:return F(n,{l:a(Ps,n.l,a(TS,WS(US),n.m.da))});default:var o=r.a;return F(n,{m:a(vw,o,n.m)})}}),gc=function(e){return e},dw=function(e){var r=e;return r},pw=function(e){var r=m(ql,1667,25e3,dw(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return gc({iS:n,iW:t})},nd=function(e){return e},gw=function(e){return{$:0,a:e}},hw=gw,bw={$:3},_w=bw,yw=X(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Sw=yw,ww=function(e){return{$:1,a:e}},xw=ww,Pw=function(e){return a(fn,"height",D(e))},Cw=jm,kw=function(e){return{$:2,a:e}},zw=kw,Mw=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function($){return Ve($*1e3)/1e3},c=function($){return Ve($*1e4)/100};return za(u(["rgba(",se(c(r)),"%,",se(c(n)),"%,",se(c(t)),"%,",se(o(i)),")"]))},Lw=v(function(e,r){switch(r.$){case 0:return a(M0,e,r);case 1:return a(L0,e,r);case 2:return a(T0,e,r);case 3:return a(D0,e,r);case 4:return a(W0,e,r);default:return a(A0,e,r)}}),Tw=v(function(e,r){switch(r.$){case 0:return a(i0,e,r);case 1:return a(o0,e,r);case 2:return a(c0,e,r);case 3:return a($0,e,r);case 4:return a(l0,e,r);case 5:return a(u0,e,r);case 6:return a(v0,e,r);case 7:return a(f0,e,r);default:return m0(e)}}),Dw=L(function(e,r,n){return m(z0,e,r,n)}),Ev=function(e){var r=e;return r},Bt=J0,Hc=P(Bt,1,1,1,1),gn=L(function(e,r,n){return a(q,function(t){return a(t,r,n)},e)}),Ww=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Aw=v(function(e,r){var n=e,t=r.iS,i=r.iW;return m(Ww,n*t/i,n,n*(1-t-i)/i)}),Ni=B0,Fw=function(e){var r=e.a,n=e.b,t=e.c;return m(Ni,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},hc=v(function(e,r){return Fw(a(Aw,e,r))}),ad=v(function(e,r){return{ez:ue(e.ez,r.ez),v:e.v*r.v+e.w*r.y+e.x*r.B,w:e.v*r.w+e.w*r.z+e.x*r.C,x:e.v*r.x+e.w*r.A+e.x*r.D,y:e.y*r.v+e.z*r.y+e.A*r.B,z:e.y*r.w+e.z*r.z+e.A*r.C,A:e.y*r.x+e.z*r.A+e.A*r.D,B:e.B*r.v+e.C*r.y+e.D*r.B,C:e.B*r.w+e.C*r.z+e.D*r.C,D:e.B*r.x+e.C*r.A+e.D*r.D,N:r.N+(e.N*r.v+e.O*r.y+e.P*r.B)*r.cL,O:r.O+(e.N*r.w+e.O*r.z+e.P*r.C)*r.cL,P:r.P+(e.N*r.x+e.O*r.A+e.P*r.D)*r.cL,cL:e.cL*r.cL}}),yn=Q0,Iw=function(e){return yn({eJ:e.v,eK:e.y,eL:e.B,eM:e.N,eN:e.w,eO:e.z,eP:e.C,eQ:e.O,eR:e.x,eS:e.A,eT:e.D,eU:e.P,eV:0,eW:0,eX:0,eY:1})},Jc=qe(function(e,r,n,t,i){var o=t.ez?1:-1,c=P(Bt,t.cL,t.cL,t.cL,o);return zr(i,e,c,Iw(t),t.ez,r,n)}),td=Rr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,$=i.b,l=e,f=r,s=n,d=a(ad,c,t),b=$,p=o;e=l,r=f,n=s,t=d,i=b,o=p;continue e;case 1:var w=i.b,y=a(S,W(Jc,e,r,n,t,w),o.S);return{S:y,ab:o.ab,h5:o.h5};case 3:var C=i.b,z=a(S,W(Jc,e,r,n,t,C),o.ab);return{S:o.S,ab:z,h5:o.h5};case 2:var x=i.a,T=a(S,W(Jc,e,r,n,t,x),o.h5);return{S:o.S,ab:o.ab,h5:T};default:var G=i.a;return m(Me,P(td,e,r,n,t),o,G)}}),Ew=X(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),id=Ew,Xl=X(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),jw=function(e){var r=e.ak,n=e.ae,t=e.ad;return P(Xl,518,r,n,t)},Bw=v(function(e,r){return{$:6,a:e,b:r}}),Vw=Bw,od=u([jw({ad:1,ae:0,ak:!1}),P(id,!1,!1,!1,!1),a(Vw,0,1)]),Ct=519,Ql=8,cd=15,dt=7681,Rw={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Je=t0,Nw=v(function(e,r){return{$:0,a:e,b:r}}),Gw=Nw({eh:1,eu:0,e5:5}),Er=E0,Hw=Gw(u([{fk:a(Er,-1,-1)},{fk:a(Er,1,-1)},{fk:a(Er,-1,1)},{fk:a(Er,1,1)}])),Jw={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"fk"},uniforms:{}},Ow=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function($){return function(l){return function(f){return function(s){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:$,i:l,j:f,k:s}}}}}}}}}}}},Zl=L(function(e,r,n){var t=e.dI,i=e.dn,o=e.d_,c=v(function(f,s){var d=f;return s(d)}),$=v(function(f,s){var d=f;return s(d)}),l=function(f){return a(Ge,c(f.bV),a(Ge,$(f.bH),a(Ge,$(f.b2),$(f.b3))))};return a(l,n,a(l,r,m(Ow,t,i,o)))}),Kl=function(e){return m(Zl,{dn:e.dn,dI:e.dI,d_:e.d_},{bH:e.bH,bV:e.bV,b2:e.b2,b3:e.b3},{bH:e.bH,bV:e.bV,b2:e.b2,b3:e.b3})},eu=function(e){return W(Je,u([Kl(e),P(id,!1,!1,!1,!1)]),Jw,Rw,Hw,{})},Uw=eu({bH:dt,dn:0,dI:Ql,bV:Ct,d_:cd,b2:dt,b3:dt}),qw=516,jv=5386,yr=7680,Yw=function(e){return a(la,2,e+4)},$d=function(e){return eu({bH:yr,dn:cd,dI:Ql,bV:qw,d_:Yw(e),b2:jv,b3:jv})},Xw=L(function(e,r,n){return or(u([m(gn,e,n,od),u([$d(r),Uw])]))}),Qw=v(function(e,r){return or(a(ll,Xw(e),r))}),Zw=function(e){var r=e.ak,n=e.ae,t=e.ad;return P(Xl,513,r,n,t)},Kw=Zw({ad:1,ae:0,ak:!0}),e4=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function($){return function(l){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:$,i:l,j:f}}}}}}}}}}},r4=function(e){var r=e.cI,n=e.cn,t=e.b7,i=e.b4,o=e.cf,c=e.f0,$=v(function(l,f){var s=l.a,d=l.b,b=l.c,p=f.a,w=f.b,y=f.c;return e4(s)(d)(b)(p)(w)(y)(r)(n)(t)(i)});return a($,o,c)},n4=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Bv=v(function(e,r){var n=e,t=r;return m(n4,32774,n,t)}),a4=1,Vv=771,t4=770,ru=r4({b4:0,f0:a(Bv,a4,Vv),b7:0,cf:a(Bv,t4,Vv),cn:0,cI:0}),Za=u([Kw,ru]),i4=function(e){var r=e;return r.e_},o4=function(e){var r=e;return r.e$},ld=function(e){var r=e;return r.e0},c4=function(e){var r=e;return r.e1},$4=function(e){var r=e;return r.e2},ud=function(e){var r=e;return r.e3},dr=v(function(e,r){var n=e,t=r;return t-n}),vd=function(e){return E(a(dr,c4(e),i4(e)),a(dr,$4(e),o4(e)),a(dr,ud(e),ld(e)))},l4=function(e){return e},u4=function(e){return Et({dw:l4({iS:e.N,iW:e.O,d1:e.P}),d$:Ma({iS:e.v,iW:e.w,d1:e.x}),d0:Ma({iS:e.y,iW:e.z,d1:e.A}),d2:Ma({iS:e.B,iW:e.C,d1:e.D})})},Oc=v(function(e,r){var n=e,t=r,i=n.d2,o=i,c=n.d0,$=c,l=n.d$,f=l;return{iS:t.iS*f.iS+t.iW*f.iW+t.d1*f.d1,iW:t.iS*$.iS+t.iW*$.iW+t.d1*$.d1,d1:t.iS*o.iS+t.iW*o.iW+t.d1*o.d1}}),fd=v(function(e,r){var n=e,t=r,i=n.dw,o=i,c=t.iS-o.iS,$=t.iW-o.iW,l=t.d1-o.d1,f=n.d2,s=f,d=n.d0,b=d,p=n.d$,w=p;return{iS:c*w.iS+$*w.iW+l*w.d1,iW:c*b.iS+$*b.iW+l*b.d1,d1:c*s.iS+$*s.iW+l*s.d1}}),md=v(function(e,r){return{dw:a(fd,e,It(r)),d$:a(Oc,e,Na(r)),d0:a(Oc,e,Ga(r)),d2:a(Oc,e,Ha(r))}}),_o=L(function(e,r,n){return{iS:e,iW:r,d1:n}}),Ho=function(e){var r=e;return r},Ke=v(function(e,r){var n=e,t=r;return a(tr,n,t)}),ir=v(function(e,r){var n=e,t=r;return a(rn,n,t)}),v4=v(function(e,r){var n=Ho(r),t=Ho(e);return{e_:a(Ke,t.e_,n.e_),e$:a(Ke,t.e$,n.e$),e0:a(Ke,t.e0,n.e0),e1:a(ir,t.e1,n.e1),e2:a(ir,t.e2,n.e2),e3:a(ir,t.e3,n.e3)}}),qr=function(e){var r=e;return r},f4=function(e){var r=e;return E(r.iS,r.iW,r.d1)},Ta=v(function(e,r){var n=e,t=r;return t+n}),m4=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=bo(gr(t)),c=bo(gr(n)),$=bo(gr(i)),l=f4(r),f=l.a,s=l.b,d=l.c;return{e_:a(Ta,c,f),e$:a(Ta,o,s),e0:a(Ta,$,d),e1:a(dr,c,f),e2:a(dr,o,s),e3:a(dr,$,d)}}),Rv=X(function(e,r,n,t){var i=n.gp,o=2*n.g1*r,c=2*n.g0*r,$=2*n.g$*r,l=i.d1*r,f=i.iW*r,s=i.iS*r,d=qr(Ha(e)),b=Pe($*d.iS)+Pe(c*d.iW)+Pe(o*d.d1),p=qr(Ga(e)),w=Pe($*p.iS)+Pe(c*p.iW)+Pe(o*p.d1),y=qr(Na(e)),C=Pe($*y.iS)+Pe(c*y.iW)+Pe(o*y.d1),z=a(m4,E(C,w,b),a(fd,e,m(_o,s,f,l)));if(t.$)return H(z);var x=t.a;return H(a(v4,x,z))}),F$=X(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var p=e,w=r,y=n,C=o;e=p,r=w,n=y,t=C;continue e;case 1:var c=i.a,$=P(Rv,e,r,c,n),p=e,w=r,y=$,C=o;e=p,r=w,n=y,t=C;continue e;case 2:var p=e,w=r,y=n,C=o;e=p,r=w,n=y,t=C;continue e;case 3:var c=i.a,$=P(Rv,e,r,c,n),p=e,w=r,y=$,C=o;e=p,r=w,n=y,t=C;continue e;case 4:var l=i.a,p=e,w=r,y=P(F$,e,r,n,l),C=o;e=p,r=w,n=y,t=C;continue e;default:var f=i.a,s=i.b,d=a(md,u4(f),e),b=r*f.cL,p=e,w=r,y=P(F$,d,b,n,u([s])),C=o;e=p,r=w,n=y,t=C;continue e}}else return n}),Ja=V0,Oa=R0,Ua=N0,sd=function(e){return{$:4,a:e}},s4=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(S,n,r);e=i,r=o;continue e}else return r}),Gi=function(e){return sd(a(s4,e,M))},d4={ez:!0,v:1,w:0,x:0,y:0,z:1,A:0,B:0,C:0,D:1,N:0,O:0,P:0,cL:1},Nv=eu({bH:dt,dn:0,dI:Ql,bV:Ct,d_:255,b2:dt,b3:dt}),p4=function(e){var r=e,n=a(tr,Pe(r.iS),a(tr,Pe(r.iW),Pe(r.d1)));if(n){var t=r.d1/n,i=r.iW/n,o=r.iS/n,c=an(o*o+i*i+t*t);return c*n}else return Ue},Fr={b7:0,go:!1,cn:0,dF:0,cI:0,dS:0,iS:0,iW:0,d1:0},Nr=v(function(e,r){var n=e,t=r;return yn({eJ:n.iS,eK:n.cI,eL:t.iS,eM:t.cI,eN:n.iW,eO:n.cn,eP:t.iW,eQ:t.cn,eR:n.d1,eS:n.b7,eT:t.d1,eU:t.b7,eV:n.dS,eW:n.dF,eX:t.dS,eY:t.dF})}),Qt=_({bN:a(Nr,Fr,Fr),cu:a(Nr,Fr,Fr),cv:a(Nr,Fr,Fr),cw:a(Nr,Fr,Fr)},P(Bt,0,0,0,0)),dd=514,pd=function(e){var r=e.ak,n=e.ae,t=e.ad;return P(Xl,515,r,n,t)},gd=240,g4=u([pd({ad:1,ae:0,ak:!0}),Kl({bH:yr,dn:gd,dI:0,bV:dd,d_:0,b2:yr,b3:yr}),ru]),h4=v(function(e,r){var n=e,t=r.hz,i=r.gT,o=r.f5,c=gr(t),$=c,l=gr(i),f=l,s=n.dH;if(s.$){var b=s.a;return f$(f)?yn({eJ:2/(o*b),eK:0,eL:0,eM:0,eN:0,eO:2/b,eP:0,eQ:0,eR:0,eS:0,eT:0,eU:-1,eV:0,eW:0,eX:0,eY:1}):yn({eJ:2/(o*b),eK:0,eL:0,eM:0,eN:0,eO:2/b,eP:0,eQ:0,eR:0,eS:0,eT:-2/(f-$),eU:-(f+$)/(f-$),eV:0,eW:0,eX:0,eY:1})}else{var d=s.a;return f$(f)?yn({eJ:1/(o*d),eK:0,eL:0,eM:0,eN:0,eO:1/d,eP:0,eQ:0,eR:0,eS:0,eT:-1,eU:-2*$,eV:0,eW:0,eX:-1,eY:0}):yn({eJ:1/(o*d),eK:0,eL:0,eM:0,eN:0,eO:1/d,eP:0,eQ:0,eR:0,eS:0,eT:-(f+$)/(f-$),eU:-2*f*$/(f-$),eV:0,eW:0,eX:-1,eY:0})}}),ao=v(function(e,r){return(1&e>>r)===1?0:1}),b4=function(e){return u([pd({ad:1,ae:0,ak:!0}),Kl({bH:yr,dn:gd,dI:e,bV:dd,d_:0,b2:yr,b3:yr}),ru])},_4=L(function(e,r,n){return or(a(q,function(t){var i=t<<4,o=P(Bt,a(ao,t,0),a(ao,t,1),a(ao,t,2),a(ao,t,3));return m(gn,e,_(r,o),b4(i))},a(wn,1,a(la,2,n)-1)))}),pt=function(e){var r=e;return r},y4=Z0,hd=Ma({iS:0,iW:1,d1:0}),nu=hd,S4={dw:aa,d$:Jl,d0:nu,d2:sc},Hi=function(e){var r=e;return r},w4=function(e){var r=Hi(It(e)),n=qr(Ha(e)),t=qr(Ga(e)),i=qr(Na(e));return yn({eJ:i.iS,eK:t.iS,eL:n.iS,eM:r.iS,eN:i.iW,eO:t.iW,eP:n.iW,eQ:r.iW,eR:i.d1,eS:t.d1,eT:n.d1,eU:r.d1,eV:0,eW:0,eX:0,eY:1})},x4=v(function(e,r){var n=r;return w4(a(md,n,e))}),P4=function(e){return a(x4,S4,e)},C4=function(e){var r=e;return r.dV},k4=function(e){var r=e;return Na(r)},z4=function(e){var r=e;return Ga(r)},M4=function(e){var r=C4(e.ay),n=Et({dw:D$(r),d$:k4(r),d0:z4(r),d2:Go(W$(r))}),t=Gi(e.be),i=t,o=P(F$,n,1,B,u([i]));if(o.$===1)return M;var c=o.a,$=P4(r),l=a(Re,.99,a(Ke,gr(e.ec),No(ld(c)))),f=vd(c),s=f.a,d=f.b,b=f.c,p=p4(m(Yl,s,d,b)),w=a(Re,1.01,a(Ta,p,No(ud(c)))),y=a(h4,e.ay,{f5:e.f5,gT:w,hz:l}),C=y4(y).eY,z=C?qr(Go(W$(r))):pt(D$(r)),x=function(){var ge=e.iE;switch(ge.$){case 0:return _(0,0);case 1:return _(1,0);case 2:return _(2,0);case 3:var Be=ge.a;return _(3,Be);case 4:var Be=ge.a;return _(4,Be);default:return _(5,0)}}(),T=x.a,G=x.b,ne=e.gR,te=ne,ie=a(hc,te,e.iP),$e=ie,oe=yn({eJ:0,eK:z.iS,eL:Ja($e),eM:e.fz,eN:0,eO:z.iW,eP:Oa($e),eQ:La(p),eR:0,eS:z.d1,eT:Ua($e),eU:T,eV:0,eW:C,eX:0,eY:G}),ee=zr(td,oe,$,y,d4,i,{S:M,ab:M,h5:M}),be=e.hs;switch(be.$){case 0:var _e=be.a;return or(u([m(gn,ee.S,_(_e,Hc),Za),m(gn,ee.ab,Qt,Za)]));case 1:var _e=be.a;return or(u([m(gn,ee.S,Qt,Za),u([Nv]),m(gn,ee.h5,_e.bN,od),u([$d(0)]),m(gn,ee.S,_(_e,Hc),g4),m(gn,ee.ab,Qt,Za)]));default:var je=be.a,De=be.b;return or(u([m(gn,ee.S,_(De,Hc),Za),u([Nv]),a(Qw,ee.h5,je),m(_4,ee.S,De,un(je)),m(gn,ee.ab,Qt,Za)]))}},L4=function(e){return a(fn,"width",D(e))},bd=v(function(e,r){var n=u([xw(1),zw(0),hw(!0),P(Sw,0,0,0,0)]),t=function(){var T=e.f2;switch(T.$){case 0:return E(n,"0",1);case 1:return E(a(S,_w,n),"1",1);default:var G=T.a;return E(n,"0",G)}}(),i=t.a,o=t.b,c=t.c,$=e.ba,l=$.a,f=$.b,s=Ev(f),d=a(ar,"height",D(s)+"px"),b=Ev(l),p=b/s,w=a(Ra,function(T){return M4({f5:p,ay:e.ay,ec:e.ec,be:T.be,gR:T.gR,hs:T.hs,fz:c,iE:T.iE,iP:T.iP})},r),y=a(ar,"width",D(b)+"px"),C=e.f7,z=C,x=Mw(z);return m(Cw,"div",u([a(ar,"padding","0px"),y,d]),u([_(o,m(Dw,i,u([L4(Ve(b*c)),Pw(Ve(s*c)),y,d,a(ar,"display","block"),a(ar,"background-color",x)]),w))]))}),T4=function(e){return{$:2,a:e}},_d=function(e){return T4(e)},D4=function(e){return a(bd,{f2:_d(e.bD),f7:e.f7,ay:e.ay,ec:e.ec,ba:e.ba},u([{be:e.be,gR:e.gR,hs:e.hs,iE:e.iE,iP:e.iP}]))},Jo=function(e){return e},W4=function(e){var r=e;return r},au=function(e){var r=e;return W4(r.f6)},yd=X(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),A4=X(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Sd=X(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),wd=X(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),F4=X(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),I4=X(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),E4=X(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),tu=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return P(E4,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return P(yd,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return P(A4,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return P(Sd,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return P(I4,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return P(wd,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return P(F4,n,t,i,1);case 8:return e;case 9:return e;default:return e}},iu={$:0},j4=Ee(function(e,r,n,t,i,o,c,$){e:for(;;)if($.b){var l=$.a,f=$.b,s=Ho(c(l)),d=a(ir,s.e1,e),b=a(Ke,s.e_,r),p=a(ir,s.e2,n),w=a(Ke,s.e$,t),y=a(ir,s.e3,i),C=a(Ke,s.e0,o),z=c,x=f;e=d,r=b,n=p,t=w,i=y,o=C,c=z,$=x;continue e}else return{e_:r,e$:t,e0:o,e1:e,e2:n,e3:i}}),B4=L(function(e,r,n){var t=Ho(e(r));return wi(j4,t.e1,t.e_,t.e2,t.e$,t.e3,t.e0,e,n)}),ai=v(function(e,r){var n=e,t=r;return ve(t,n)<1}),xd=function(e){return a(ai,e.e_,e.e1)&&a(ai,e.e$,e.e2)&&a(ai,e.e0,e.e3)?e:{e_:a(Ke,e.e1,e.e_),e$:a(Ke,e.e2,e.e$),e0:a(Ke,e.e3,e.e0),e1:a(ir,e.e1,e.e_),e2:a(ir,e.e2,e.e$),e3:a(ir,e.e3,e.e0)}},hi=function(e){var r=e;return r},Pd=function(e){var r=hi(e),n=r.a,t=r.b,i=r.c,o=ft(n),c=mt(n),$=st(n),l=ft(t),f=mt(t),s=st(t),d=ft(i),b=mt(i),p=st(i);return xd({e_:a(Ke,o,a(Ke,l,d)),e$:a(Ke,c,a(Ke,f,b)),e0:a(Ke,$,a(Ke,s,p)),e1:a(ir,o,a(ir,l,d)),e2:a(ir,c,a(ir,f,b)),e3:a(ir,$,a(ir,s,p))})},Cd=G0,Tr=function(e){return Cd(Hi(e))},kd=function(e){var r=e;return r},bc=function(e){return Cd(kd(e))},V4=v(function(e,r){var n=e,t=r;return{iS:t.iW*n.d1-t.d1*n.iW,iW:t.d1*n.iS-t.iS*n.d1,d1:t.iS*n.iW-t.iW*n.iS}}),I$=v(function(e,r){var n=e,t=r;return{iS:t.iS-n.iS,iW:t.iW-n.iW,d1:t.d1-n.d1}}),zd=function(e){return e},R4={iS:0,iW:0,d1:0},N4=v(function(e,r){var n=e,t=r,i=a(tr,Pe(t.iS),a(tr,Pe(t.iW),Pe(t.d1)));if(i){var o=t.d1/i,c=t.iW/i,$=t.iS/i,l=an($*$+c*c+o*o);return{iS:n*$/l,iW:n*c/l,d1:n*o/l}}else return R4}),G4=N4(zd(1)),Md=L(function(e,r,n){var t=a(I$,r,n),i=a(I$,e,r);return G4(a(V4,t,i))}),H4=function(e){var r=hi(e),n=r.a,t=r.b,i=r.c,o=bc(m(Md,n,t,i));return E({t:o,fk:Tr(n)},{t:o,fk:Tr(t)},{t:o,fk:Tr(i)})},J4=v(function(e,r){return{$:2,a:e,b:r}}),Ld=J4({eh:3,eu:0,e5:4}),O4=function(e){if(e.b){var r=e.a,n=e.b,t=Ld(a(q,H4,e)),i=m(B4,Pd,r,n);return P(yd,i,e,t,0)}else return iu},Ar=L(function(e,r,n){return E(e,r,n)}),sr=L(function(e,r,n){var t=e,i=r,o=n;return{iS:t,iW:i,d1:o}}),Td=function(){var e=fr(1),r=fr(1),n=fr(1),t=a(Re,-.5,e),i=a(Re,-.5,r),o=a(Re,-.5,n),c=m(sr,o,i,t),$=a(Re,.5,e),l=m(sr,o,i,$),f=a(Re,.5,r),s=m(sr,o,f,t),d=m(sr,o,f,$),b=a(Re,.5,n),p=m(sr,b,i,t),w=m(sr,b,f,t),y=m(sr,b,i,$),C=m(sr,b,f,$);return tu(O4(u([m(Ar,c,w,p),m(Ar,c,s,w),m(Ar,l,y,C),m(Ar,l,C,d),m(Ar,p,w,C),m(Ar,p,C,y),m(Ar,c,d,s),m(Ar,c,l,d),m(Ar,c,p,y),m(Ar,c,y,l),m(Ar,s,C,w),m(Ar,s,d,C)])))}(),to={$:0},U4=L(function(e,r,n){return{$:1,a:e,b:r,c:n}}),q4=L(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),$=e(i),l=e(t),f=bc(m(Md,l,$,c)),s={t:f,fk:Tr(l)},d={t:f,fk:Tr($)},b={t:f,fk:Tr(c)};return a(S,s,a(S,d,a(S,b,n)))}),ou=function(e){var r=e;return r.K},Y4=X(function(e,r,n,t){if(r.$===1)return B;var i=r.a;if(n.$===1)return B;var o=n.a;if(t.$===1)return B;var c=t.a;return H(m(e,i,o,c))}),Ea=4294967295>>>32-tn,bi=Np,X4=L(function(e,r,n){e:for(;;){var t=Ea&r>>>e,i=a(bi,t,n);if(i.$){var f=i.a;return a(bi,Ea&r,f)}else{var o=i.a,c=e-tn,$=r,l=o;e=c,r=$,n=l;continue e}}}),Dd=function(e){return e>>>5<<5},Hn=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||ve(e,n)>-1?B:ve(e,Dd(n))>-1?H(a(bi,Ea&e,o)):H(m(X4,t,e,i))}),cu=function(e){var r=e;return r.aw},Uc=v(function(e,r){return a(Hn,e,cu(r))}),Wd=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(Y4,L(function(c,$,l){return E(c,$,l)}),a(Uc,t,e),a(Uc,i,e),a(Uc,o,e))};return a(Wr,r,ou(e))},Q4=L(function(e,r,n){e:for(;;){var t=a(fl,er,e),i=t.a,o=t.b;if(ve(kn(i),er)<0)return a(ml,!0,{E:r,q:n,u:i});var c=o,$=a(S,Fa(i),r),l=n+1;e=c,r=$,n=l;continue e}}),_i=function(e){return e.b?m(Q4,e,M,0):vl},Z4=v(function(e,r){return!a(Ia,a(pa,zb,e),r)}),$u=function(e){var r=e.a;return r},lu=v(function(e,r){var n=$u(e),t=function(i){var o=i.a,c=i.b,$=i.c;return o>=0&&ve(o,n)<0&&c>=0&&ve(c,n)<0&&$>=0&&ve($,n)<0};return a(Z4,t,r)?{K:r,aw:e}:{K:a(zi,t,r),aw:e}}),K4=L(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ji=K4({eh:1,eu:3,e5:4}),yo=v(function(e,r){var n=pt(r),t=pt(e);return _(E(t.iS,t.iW,t.d1),E(n.iS,n.iW,n.d1))}),Gv=m(Ni,0,0,0),qc=Rr(function(e,r,n,t,i,o){var c=o.a,$=o.b,l=o.c,f=a(Wt,a(yo,e,r),i);if(f.$){var d={t:Gv,fk:Tr(r)},b={t:Gv,fk:Tr(e)},p=l+1,w=l;return E(a(S,E(n,w,p),a(S,E(n,p,t),c)),a(S,d,a(S,b,$)),l+2)}else{var s=f.a;return E(a(S,E(n,s,t),c),$,l)}}),ex=qe(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,$=o.b,l=o.c,f=n.b,s=e(l),d=e($),b=e(c),p=t+2,w=t+1,y=t,C=e,z=r,x=f,T=t+3,G=zr(qc,s,b,p,y,r,zr(qc,d,s,w,p,r,zr(qc,b,d,y,w,r,i)));e=C,r=z,n=x,t=T,i=G;continue e}else{var ne=i,te=ne.a,ie=ne.b;return _(te,Le(ie))}}),rx=qe(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,$=o.b,l=o.c,f=r.b,s=e(l),d=e($),b=e(c),p=n+2,w=n+1,y=n,C=m(ka,a(yo,b,s),p,m(ka,a(yo,s,d),w,m(ka,a(yo,d,b),y,i))),z=a(S,E(y,w,p),t),x=e,T=f,G=n+3,ne=z,te=C;e=x,r=T,n=G,t=ne,i=te;continue e}else return E(t,i,n)}),ya=L(function(e,r,n){var t=Wd(n),i=m(cr,q4(r),M,t),o=W(rx,r,t,0,M,oc),c=o.a,$=o.b,l=o.c,f=W(ex,r,$,t,0,E(c,M,l)),s=f.a,d=f.b,b=Bn(d)?i:Y(i,d);return m(U4,e,a(lu,_i(b),s),a(Ji,b,s))}),E$=function(e){return{K:a(q,function(r){return E(3*r,3*r+1,3*r+2)},a(wn,0,un(e)-1)),aw:_i(or(a(q,function(r){var n=r.a,t=r.b,i=r.c;return u([n,t,i])},e)))}},Ad=function(e){switch(e.$){case 0:return to;case 1:var t=e.a,r=e.b,n=a(q,hi,r);return m(ya,t,Sr,E$(n));case 2:var t=e.a,r=e.b,n=a(q,hi,r);return m(ya,t,Sr,E$(n));case 3:var t=e.a,i=e.b;return m(ya,t,Sr,i);case 4:var t=e.a,i=e.b;return m(ya,t,function(o){return o.fk},i);case 5:var t=e.a,i=e.b;return m(ya,t,function(o){return o.fk},i);case 6:var t=e.a,i=e.b;return m(ya,t,function(o){return o.fk},i);case 7:var t=e.a,i=e.b;return m(ya,t,function(o){return o.fk},i);case 8:return to;case 9:return to;default:return to}},Hv=Ad(Td),uu=function(e){var r=e;return r.ba},Fd={$:0},Q=Fd,ur=v(function(e,r){return{$:1,a:e,b:r}}),nx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"cg"}},ax=1029,tx=function(e){return{$:5,a:e}},Id=function(e){var r=e;return tx(r)},ix=Id(ax),ox=1028,cx=Id(ox),Dr=L(function(e,r,n){return r===1?e?a(S,ix,n):a(S,cx,n):n}),Ed={src:`
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
    `,attributes:{position:"fk",uv:"R"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Yc=X(function(e,r,n,t){return a(ur,r,Ee(function(i,o,c,$,l,f,s,d){return W(Je,m(Dr,$,t,d),Ed,nx,n,{cg:e,c,d:o,e:f,f:i,g:l})}))}),vu={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aS"}},jd={src:`
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
    `,attributes:{position:"fk"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},En=X(function(e,r,n,t){return a(ur,r,Ee(function(i,o,c,$,l,f,s,d){return W(Je,m(Dr,$,t,d),jd,vu,n,{aS:e,c,d:o,e:f,f:i,g:l})}))}),Bd=v(function(e,r){return{$:3,a:e,b:r}}),$x={src:`
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
    `,attributes:{},uniforms:{constantColor:"aS",pointRadius:"cF",sceneProperties:"f"}},Vd={src:`
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
    `,attributes:{position:"fk"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cF",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},lx=X(function(e,r,n,t){return a(Bd,n,Ee(function(i,o,c,$,l,f,s,d){return W(Je,d,Vd,$x,t,{aS:e,c,d:o,cF:r,e:f,f:i,g:l})}))}),fu={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bc",sceneProperties:"f"}},Oi=function(e){var r=e;return r},_c=H0,jn=qe(function(e,r,n,t,i){return a(ur,n,Ee(function(o,c,$,l,f,s,d,b){return W(Je,m(Dr,l,i,b),jd,fu,t,{bc:a(_c,Oi(r),e),c:$,d:c,e:s,f:o,g:f})}))}),ux={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bc",pointRadius:"cF",sceneProperties:"f"}},vx=qe(function(e,r,n,t,i){return a(Bd,t,Ee(function(o,c,$,l,f,s,d,b){return W(Je,b,Vd,ux,i,{bc:a(_c,Oi(r),e),c:$,d:c,cF:n,e:s,f:o,g:f})}))}),Rd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"X",lights12:"bN",lights34:"cu",lights56:"cv",lights78:"cw",materialColor:"$7",sceneProperties:"f",viewMatrix:"g"}},Nd={src:`
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
    `,attributes:{normal:"t",position:"fk"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},io=X(function(e,r,n,t){return a(ur,r,Ee(function(i,o,c,$,l,f,s,d){var b=s.a,p=s.b;return W(Je,m(Dr,$,t,d),Nd,Rd,n,{X:p,bN:b.bN,cu:b.cu,cv:b.cv,cw:b.cw,$7:e,c,d:o,e:f,f:i,g:l})}))}),Gd={src:`
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
    `,attributes:{},uniforms:{enabledLights:"X",lights12:"bN",lights34:"cu",lights56:"cv",lights78:"cw",materialColorTexture:"dp",normalMapTexture:"bm",sceneProperties:"f",useNormalMap:"bt",viewMatrix:"g"}},Hd={src:`
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
    `,attributes:{normal:"t",position:"fk",tangent:"fB",uv:"R"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},fx=Rr(function(e,r,n,t,i,o){return a(ur,t,Ee(function(c,$,l,f,s,d,b,p){var w=b.a,y=b.b;return W(Je,m(Dr,f,o,p),Hd,Gd,i,{X:y,bN:w.bN,cu:w.cu,cv:w.cv,cw:w.cw,dp:e,c:l,d:$,bm:r,e:d,f:c,bt:n,g:s})}))}),Jd={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"c_",constantBaseColor:"c0",constantMetallic:"c1",constantRoughness:"c2",enabledLights:"X",lights12:"bN",lights34:"cu",lights56:"cv",lights78:"cw",metallicTexture:"ds",normalMapTexture:"bm",roughnessTexture:"dM",sceneProperties:"f",useNormalMap:"bt",viewMatrix:"g"}},mx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function($){return function(l){return function(f){return function(s){return a(ur,l,Ee(function(d,b,p,w,y,C,z,x){var T=z.a,G=z.b;return W(Je,m(Dr,w,s,x),Hd,Jd,f,{c_:e,c0:r,c1:o,c2:t,X:G,bN:T.bN,cu:T.cu,cv:T.cv,cw:T.cw,ds:i,c:p,d:b,bm:c,e:C,dM:n,f:d,bt:$,g:y})}))}}}}}}}}}}},Od={src:`
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
    `,attributes:{},uniforms:{baseColor:"cZ",enabledLights:"X",lights12:"bN",lights34:"cu",lights56:"cv",lights78:"cw",metallic:"dr",roughness:"dL",sceneProperties:"f",viewMatrix:"g"}},oo=Rr(function(e,r,n,t,i,o){return a(ur,t,Ee(function(c,$,l,f,s,d,b,p){var w=b.a,y=b.b;return W(Je,m(Dr,f,o,p),Nd,Od,i,{cZ:e,X:y,bN:w.bN,cu:w.cu,cv:w.cv,cw:w.cw,dr:n,c:l,d:$,e:d,dL:r,f:c,g:s})}))}),sx=function(e){return{$:0,a:e}},Jv=v(function(e,r){return{$:1,a:e,b:r}}),ti=v(function(e,r){if(r.$){var n=r.a.H;return _(n,1)}else return r.a,_(e,0)}),dx=function(e){return P(Bt,Ja(e),Oa(e),Ua(e),1)},mu=P(Bt,0,0,0,0),So=v(function(e,r){if(r.$){var t=r.a.H;return _(t,mu)}else{var n=r.a;return _(e,dx(n))}}),Ud=v(function(e,r){var n=_(e,r);if(n.a.$){var i=n.a.a.H;return a(Jv,_(i,mu),a(ti,i,r))}else if(n.b.$){var i=n.b.a.H;return a(Jv,a(So,i,e),a(ti,i,r))}else{var t=n.a.a;return n.b.a,sx(t)}}),px=L(function(e,r,n){return{$:0,a:e,b:r,c:n}}),co=X(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),gx=X(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),hx=function(e){return a(Er,e,1)},j$=a(Er,0,0),Ka=v(function(e,r){if(r.$){var t=r.a.H;return _(t,j$)}else{var n=r.a;return _(e,hx(n))}}),qd=X(function(e,r,n,t){var i=P(gx,e,r,n,t);if(i.a.$){var l=i.a.a.H;return P(co,_(l,mu),a(Ka,l,r),a(Ka,l,n),a(ti,l,t))}else if(i.b.$){var l=i.b.a.H;return P(co,a(So,l,e),_(l,j$),a(Ka,l,n),a(ti,l,t))}else if(i.c.$){var l=i.c.a.H;return P(co,a(So,l,e),a(Ka,l,r),_(l,j$),a(ti,l,t))}else if(i.d.$){var l=i.d.a.H;return P(co,a(So,l,e),a(Ka,l,r),a(Ka,l,n),_(l,1))}else{var o=i.a.a,c=i.b.a,$=i.c.a;return i.d.a,m(px,o,c,$)}}),bx={src:`
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
    `,attributes:{},uniforms:{backlight:"cW",colorTexture:"cg",sceneProperties:"f"}},Xc=qe(function(e,r,n,t,i){return a(ur,n,Ee(function(o,c,$,l,f,s,d,b){return W(Je,m(Dr,l,i,b),Ed,bx,t,{cW:Oi(r),cg:e,c:$,d:c,e:s,f:o,g:f})}))}),Yd={src:`
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
    `,attributes:{normal:"t",position:"fk",uv:"R"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},_x=X(function(e,r,n,t){return a(ur,r,Ee(function(i,o,c,$,l,f,s,d){var b=s.a,p=s.b;return W(Je,m(Dr,$,t,d),Yd,Gd,n,{X:p,bN:b.bN,cu:b.cu,cv:b.cv,cw:b.cw,dp:e,c,d:o,bm:e,e:f,f:i,bt:0,g:l})}))}),yx=U$(function(e,r,n,t,i,o,c,$,l){return a(ur,c,Ee(function(f,s,d,b,p,w,y,C){var z=y.a,x=y.b;return W(Je,m(Dr,b,l,C),Yd,Jd,$,{c_:e,c0:r,c1:o,c2:t,X:x,bN:z.bN,cu:z.cu,cv:z.cv,cw:z.cw,ds:i,c:d,d:s,bm:e,e:w,dM:n,f,bt:0,g:p})}))}),yi=L(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Sx=function(e){var r=e;return m(yi,r.e1,r.e_,.5)},wx=function(e){var r=e;return m(yi,r.e2,r.e$,.5)},xx=function(e){var r=e;return m(yi,r.e3,r.e0,.5)},Px=function(e){return m(sr,Sx(e),wx(e),xx(e))},de=function(e){var r=vd(e),n=r.a,t=r.b,i=r.c;return{gp:Hi(Px(e)),g$:n/2,g0:t/2,g1:i/2}},su=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var $=e.b.a.H;switch(r.$){case 0:return Q;case 1:return Q;case 2:return Q;case 3:return Q;case 4:return Q;case 5:var i=r.a,c=r.c,t=r.d;return P(Yc,$,de(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return P(Yc,$,de(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return P(Yc,$,de(i),c,t);case 8:return Q;case 9:return Q;default:return Q}}else{var n=e.b.a;switch(r.$){case 0:return Q;case 1:var i=r.a,c=r.c,t=r.d;return P(En,n,de(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return P(En,n,de(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return P(En,n,de(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return P(En,n,de(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return P(En,n,de(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return P(En,n,de(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return P(En,n,de(i),c,t);case 8:var i=r.a,c=r.c;return P(En,n,de(i),c,0);case 9:var i=r.a,c=r.c;return P(En,n,de(i),c,0);default:var i=r.a,o=r.b,c=r.d;return P(lx,n,o,de(i),c)}}case 1:if(e.b.$){e.a;var $=e.b.a.H,f=e.c;switch(r.$){case 0:return Q;case 1:return Q;case 2:return Q;case 3:return Q;case 4:return Q;case 5:var i=r.a,c=r.c,t=r.d;return W(Xc,$,f,de(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return W(Xc,$,f,de(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return W(Xc,$,f,de(i),c,t);case 8:return Q;case 9:return Q;default:return Q}}else{var l=e.b.a,f=e.c;switch(r.$){case 0:return Q;case 1:var i=r.a,c=r.c,t=r.d;return W(jn,l,f,de(i),c,t);case 2:var i=r.a,c=r.c,t=r.d;return W(jn,l,f,de(i),c,t);case 3:var i=r.a,c=r.c,t=r.d;return W(jn,l,f,de(i),c,t);case 4:var i=r.a,c=r.c,t=r.d;return W(jn,l,f,de(i),c,t);case 5:var i=r.a,c=r.c,t=r.d;return W(jn,l,f,de(i),c,t);case 6:var i=r.a,c=r.c,t=r.d;return W(jn,l,f,de(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return W(jn,l,f,de(i),c,t);case 8:var i=r.a,c=r.c;return W(jn,l,f,de(i),c,0);case 9:var i=r.a,c=r.c;return W(jn,l,f,de(i),c,0);default:var i=r.a,o=r.b,c=r.d;return W(vx,l,f,o,de(i),c)}}case 2:e.a;var s=e.b,te=e.c,d=a(Ud,s,te);if(d.$){var w=d.a,y=w.a;w.b;var C=d.b,z=C.a,x=C.b;switch(r.$){case 0:return Q;case 1:return Q;case 2:return Q;case 3:return Q;case 4:return Q;case 5:return Q;case 6:var i=r.a,c=r.c,p=r.d;return P(_x,y,de(i),c,p);case 7:var i=r.a,c=r.c,p=r.d;return zr(fx,y,z,x,de(i),c,p);case 8:return Q;case 9:return Q;default:return Q}}else{var b=d.a;switch(r.$){case 0:return Q;case 1:return Q;case 2:var i=r.a,c=r.c,p=r.d;return P(io,b,de(i),c,p);case 3:return Q;case 4:var i=r.a,c=r.c,p=r.d;return P(io,b,de(i),c,p);case 5:return Q;case 6:var i=r.a,c=r.c,p=r.d;return P(io,b,de(i),c,p);case 7:var i=r.a,c=r.c,p=r.d;return P(io,b,de(i),c,p);case 8:return Q;case 9:return Q;default:return Q}}default:e.a;var T=e.b,G=e.c,ne=e.d,te=e.e,ie=P(qd,T,G,ne,te);if(ie.$){var be=ie.a,_e=be.a,je=be.b,De=ie.b,ge=De.a,Be=De.b,I=ie.c,j=I.a,V=I.b,R=ie.d,z=R.a,x=R.b;switch(r.$){case 0:return Q;case 1:return Q;case 2:return Q;case 3:return Q;case 4:return Q;case 5:return Q;case 6:var i=r.a,c=r.c,t=r.d;return Ip(yx,_e,je,ge,Be,j,V,de(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return mx(_e)(je)(ge)(Be)(j)(V)(z)(x)(de(i))(c)(t);case 8:return Q;case 9:return Q;default:return Q}}else{var $e=ie.a,oe=ie.b,ee=ie.c;switch(r.$){case 0:return Q;case 1:return Q;case 2:var i=r.a,c=r.c,t=r.d;return zr(oo,$e,oe,ee,de(i),c,t);case 3:return Q;case 4:var i=r.a,c=r.c,t=r.d;return zr(oo,$e,oe,ee,de(i),c,t);case 5:return Q;case 6:var i=r.a,c=r.c,t=r.d;return zr(oo,$e,oe,ee,de(i),c,t);case 7:var i=r.a,c=r.c,t=r.d;return zr(oo,$e,oe,ee,de(i),c,t);case 8:return Q;case 9:return Q;default:return Q}}}}),Qc=function(e){var r=e;return r.iS},Zc=function(e){var r=e;return r.iW},Kc=function(e){var r=e;return r.d1},Cx=function(e){var r=e,n=Kc(r.d2),t=Zc(r.d2),i=Qc(r.d2),o=Kc(r.d0),c=Zc(r.d0),$=Qc(r.d0),l=Kc(r.d$),f=Zc(r.d$),s=Qc(r.d$);return s*c*n+f*o*i+l*$*t-l*c*i-f*$*n-s*o*t>0},kx=function(e){var r=Hi(It(e)),n=qr(Ha(e)),t=qr(Ga(e)),i=qr(Na(e));return{ez:Cx(e),v:i.iS,w:i.iW,x:i.d1,y:t.iS,z:t.iW,A:t.d1,B:n.iS,C:n.iW,D:n.d1,N:r.iS,O:r.iW,P:r.d1,cL:1}},nt=v(function(e,r){return{$:5,a:e,b:r}}),Xd=v(function(e,r){var n=r;switch(n.$){case 0:return Q;case 5:var t=n.a,i=n.b,o=a(ad,t,e);return a(nt,o,i);case 1:return a(nt,e,n);case 3:return a(nt,e,n);case 2:return a(nt,e,n);default:return a(nt,e,n)}}),Qd=v(function(e,r){return a(Xd,kx(e),r)}),yc=function(e){return{$:2,a:e}},zx=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.gp;return{gp:{iS:n*o.iS,iW:t*o.iW,d1:i*o.d1},g$:n*r.g$,g0:t*r.g0,g1:i*r.g1}}),Mx=U0,Lx=O0,Ov=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function($){return function(l){return function(f){var s=e.a,d=e.b,b=e.c,p=Lx(t),w=p.iS,y=p.iW,C=p.d1,z=p.fN,x=Mx({fN:z,iS:w*s,iW:y*d,d1:C*b});return wi(r,n,x,i,o,c,$,l,f)}}}}}}}}}},B$=v(function(e,r){switch(r.$){case 0:return Fd;case 5:var n=r.a,t=r.b;return a(nt,n,a(B$,e,t));case 1:var i=r.a,o=r.b;return a(ur,a(zx,e,i),a(Ov,e,o));case 3:return r;case 2:var o=r.a;return yc(a(Ov,e,o));default:var c=r.a;return sd(a(q,B$(e),c))}}),du=v(function(e,r){var n=r;return a(B$,e,n)}),pu={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Zd=7683,Kd=7682,Tx=m(Zl,{dn:0,dI:0,d_:15},{bH:yr,bV:Ct,b2:yr,b3:Zd},{bH:yr,bV:Ct,b2:yr,b3:Kd}),Dx=m(Zl,{dn:0,dI:0,d_:15},{bH:yr,bV:Ct,b2:yr,b3:Kd},{bH:yr,bV:Ct,b2:yr,b3:Zd}),gu=v(function(e,r){return e?a(S,Dx,r):a(S,Tx,r)}),Wx={src:`
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
    `,attributes:{normal:"t",position:"fk"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cM",viewMatrix:"g"}},Ax=function(e){if(e.$){var r=e.c;return H(Ee(function(n,t,i,o,c,$,l,f){return W(Je,a(gu,o,f),Wx,pu,r,{c:i,d:t,e:$,f:n,cM:l,g:c})}))}else return B},Oo=function(e){var r=Ax(e);if(r.$)return Q;var n=r.a;return yc(n)},Fx=X(function(e,r,n,t){var i=a(su,n,Td),o=function(){var s=_(e,r);return s.a?s.b?Gi(u([i,Oo(Hv)])):i:s.b?Oo(Hv):Q}(),c=uu(t),$=c.a,l=c.b,f=c.c;return a(Qd,au(t),a(du,E($,l,f),o))}),Ix=v(function(e,r){return P(Fx,!0,!0,e,r)}),V$=function(e){return{$:0,a:e}},ep=v(function(e,r){return{$:0,a:e,b:r}}),Ex=function(e){var r=Al(e),n=r.hS,t=r.gY,i=r.gc;return m(Ni,n,t,i)},rp=function(e){return a(ep,0,V$(Ex(e)))},jx=function(e){var r=e;return r.o},ii=function(e){var r=e;return ea(r)},Bx=v(function(e,r){var n=e.fk,t=e.t;return a(S,{t:bc(t),fk:Tr(n)},r)}),Vx=Qo(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var $=c.a,l=c.b,f=Ua($.fk),s=Oa($.fk),d=Ja($.fk),b=a(rn,e,d),p=a(tr,r,d),w=a(rn,n,s),y=a(tr,t,s),C=a(rn,i,f),z=a(tr,o,f),x=l;e=b,r=p,n=w,t=y,i=C,o=z,c=x;continue e}else return xd({e_:r,e$:t,e0:o,e1:e,e2:n,e3:i})}),np=v(function(e,r){var n=Ua(e.fk),t=Oa(e.fk),i=Ja(e.fk);return q$(Vx,i,i,t,t,n,n,r)}),Rx=function(e){var r=m(Jf,Bx,M,cu(e));if(r.b){var n=r.a,t=r.b,i=a(Ji,r,ou(e)),o=a(np,n,t);return P(Sd,o,e,i,0)}else return iu},Uv=v(function(e,r){var n=e,t=r,i=n.d0,o=i,c=n.d$,$=c;return{iS:t.iS*$.iS+t.iW*o.iS,iW:t.iS*$.iW+t.iW*o.iW,d1:t.iS*$.d1+t.iW*o.d1}}),Uo=function(e){var r=e;return ra(r)},Zt=function(e){var r=e;return r},R$=function(e){return Yr(2*qn*e)},qv=Is({dw:aa,d$:Jl,d0:nu}),ap=function(){var e=72,r=a(Zs,e,R$(1)),n=fr(1),t=Zt(Es),i=Zt(Ks),o=fr(1),c=a(Re,.5,o),$=m(sr,Ue,Ue,c),l=a(Re,-.5,o),f=m(sr,Ue,Ue,l),s=function(p){var w=a(Re,p,r),y=Zt(a(Uv,qv,A$(w))),C=a(Re,ii(w),n),z=a(Re,Uo(w),n),x=m(sr,C,z,c),T=m(sr,C,z,l),G=a(jo,e,p+1),ne=a(Re,G,r),te=Zt(a(Uv,qv,A$(ne))),ie=a(Re,ii(ne),n),$e=a(Re,Uo(ne),n),oe=m(sr,ie,$e,l),ee=m(sr,ie,$e,c);return u([E({t:i,fk:f},{t:i,fk:oe},{t:i,fk:T}),E({t:y,fk:T},{t:te,fk:oe},{t:te,fk:ee}),E({t:y,fk:T},{t:te,fk:ee},{t:y,fk:x}),E({t,fk:$},{t,fk:x},{t,fk:ee})])},d=a(q,s,a(wn,0,e-1)),b=E$(or(d));return tu(Rx(b))}(),Yv=Ad(ap),Nx=function(e){var r=e,n=Pe(r.d1),t=Pe(r.iW),i=Pe(r.iS);if(ve(i,t)<1)if(ve(i,n)<1){var o=an(r.d1*r.d1+r.iW*r.iW);return{iS:0,iW:-r.d1/o,d1:r.iW/o}}else{var o=an(r.iW*r.iW+r.iS*r.iS);return{iS:-r.iW/o,iW:r.iS/o,d1:0}}else if(ve(t,n)<1){var o=an(r.d1*r.d1+r.iS*r.iS);return{iS:r.d1/o,iW:0,d1:-r.iS/o}}else{var o=an(r.iS*r.iS+r.iW*r.iW);return{iS:-r.iW/o,iW:r.iS/o,d1:0}}},Gx=function(e){var r=Nx(e),n=r,t=n,i=e,o=i,c={iS:o.iW*t.d1-o.d1*t.iW,iW:o.d1*t.iS-o.iS*t.d1,d1:o.iS*t.iW-o.iW*t.iS};return _(r,c)},Hx=function(e){var r=Hl(e),n=Gx(r),t=n.a,i=n.b;return Et({dw:Qs(e),d$:t,d0:i,d2:r})},Jx=function(e){var r=e;return r.hq},Ox=function(e){var r=e;return r.hQ},Ux=X(function(e,r,n,t){var i=Hx(jx(t)),o=a(su,n,ap),c=function(){var d=_(e,r);return d.a?d.b?Gi(u([o,Oo(Yv)])):o:d.b?Oo(Yv):Q}(),$=Ox(t),l=$,f=Jx(t),s=f;return a(Qd,i,a(du,E(l,l,s),c))}),qx=v(function(e,r){return P(Ux,!0,!0,e,r)}),Xv={src:`
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
    `,attributes:{triangleVertex:"dR"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"b$",viewMatrix:"g"}},Qv={src:`
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
    `,attributes:{triangleVertex:"dR"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"b$",viewMatrix:"g"}},Kt=function(e){var r=hi(e),n=r.a,t=r.b,i=r.c,o=pt(n),c=pt(t),$=pt(i);return yn({eJ:o.iS,eK:c.iS,eL:$.iS,eM:0,eN:o.iW,eO:c.iW,eP:$.iW,eQ:0,eR:o.d1,eS:c.d1,eT:$.d1,eU:0,eV:0,eW:0,eX:0,eY:0})},$o=Ld(u([E({dR:0},{dR:1},{dR:2})])),Yx=v(function(e,r){var n=Pd(r),t=de(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.H,Q;var i=e.b.a;return a(ur,t,Ee(function(x,T,G,ne,te,ie,$e,oe){return W(Je,m(Dr,ne,0,oe),Xv,vu,$o,{aS:i,c:G,d:T,e:ie,f:x,b$:Kt(r),g:te})}));case 1:if(e.b.$)return e.a,Q;var o=e.b.a,c=e.c;return a(ur,t,Ee(function(x,T,G,ne,te,ie,$e,oe){return W(Je,m(Dr,ne,0,oe),Xv,fu,$o,{bc:a(_c,Oi(c),o),c:G,d:T,e:ie,f:x,b$:Kt(r),g:te})}));case 2:e.a;var $=e.b,p=e.c,l=a(Ud,$,p);if(l.$)return Q;var f=l.a;return a(ur,t,Ee(function(x,T,G,ne,te,ie,$e,oe){var ee=$e.a,be=$e.b;return W(Je,m(Dr,ne,0,oe),Qv,Rd,$o,{X:be,bN:ee.bN,cu:ee.cu,cv:ee.cv,cw:ee.cw,$7:f,c:G,d:T,e:ie,f:x,b$:Kt(r),g:te})}));default:e.a;var s=e.b,d=e.c,b=e.d,p=e.e,w=P(qd,s,d,b,p);if(w.$)return Q;var y=w.a,C=w.b,z=w.c;return a(ur,t,Ee(function(x,T,G,ne,te,ie,$e,oe){var ee=$e.a,be=$e.b;return W(Je,m(Dr,ne,0,oe),Qv,Od,$o,{cZ:y,X:be,bN:ee.bN,cu:ee.cu,cv:ee.cv,cw:ee.cw,dr:z,c:G,d:T,e:ie,dL:C,f:x,b$:Kt(r),g:te})}))}}),Xx=function(){var e=u([{bs:a(Er,0,1)},{bs:a(Er,1,1)},{bs:a(Er,2,1)},{bs:a(Er,0,-1)},{bs:a(Er,1,-1)},{bs:a(Er,2,-1)}]),r=u([E(0,1,2),E(3,5,4),E(3,4,1),E(3,1,0),E(4,5,2),E(4,2,1),E(5,3,0),E(5,0,2)]);return a(Ji,e,r)}(),Qx={src:`
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
    `,attributes:{triangleShadowVertex:"bs"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cM",triangleVertexPositions:"b$",viewMatrix:"g"}},Zv=function(e){return yc(Ee(function(r,n,t,i,o,c,$,l){return W(Je,a(gu,i,l),Qx,pu,Xx,{c:t,d:n,e:c,f:r,cM:$,b$:Kt(e),g:o})}))},Zx=X(function(e,r,n,t){var i=a(Yx,n,t),o=_(e,r);return o.a?o.b?Gi(u([i,Zv(t)])):i:o.b?Zv(t):Q}),Kx=v(function(e,r){return P(Zx,!0,!0,e,r)}),hu=function(e){var r=e;return r},eP=v(function(e,r){var n=st(r),t=st(e),i=mt(r),o=mt(e),c=ft(r),$=ft(e);return{e_:a(Ke,$,c),e$:a(Ke,o,i),e0:a(Ke,t,n),e1:a(ir,$,c),e2:a(ir,o,i),e3:a(ir,t,n)}}),rP=function(e){var r=hu(e),n=r.a,t=r.b;return a(eP,n,t)},Kv={src:`
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
    `,attributes:{lineSegmentVertex:"eH"},uniforms:{lineSegmentEndPoint:"eF",lineSegmentStartPoint:"eG",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},nP=v(function(e,r){return{$:1,a:e,b:r}}),aP=nP({eh:2,eu:0,e5:1}),ef=aP(u([_({eH:0},{eH:1})])),tP=v(function(e,r){var n=rP(r),t=de(n),i=hu(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.H,Q;var $=e.b.a;return a(ur,t,Ee(function(f,s,d,b,p,w,y,C){return W(Je,C,Kv,vu,ef,{aS:$,eF:Tr(c),eG:Tr(o),c:d,d:s,e:w,f,g:p})}));case 1:if(e.b.$)return Q;var $=e.b.a,l=e.c;return a(ur,t,Ee(function(s,d,b,p,w,y,C,z){return W(Je,z,Kv,fu,ef,{bc:a(_c,Oi(l),$),eF:Tr(c),eG:Tr(o),c:b,d,e:y,f:s,g:w})}));case 2:return Q;default:return Q}}),iP=v(function(e,r){return a(tP,e,r)}),bu=function(e){var r=e;return r.gp},_u=function(e){var r=e;return r.hQ},N$=v(function(e,r){var n=e,t=r;return n/t}),oP=qe(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(S,o,i);if(ue(r,e))return c;var $=e,l=r-1,f=n,s=t,d=c;e=$,r=l,n=f,t=s,i=d;continue e}}),rf=v(function(e,r){return e<1?M:W(oP,0,e,e,r,M)}),cP=v(function(e,r){var n=e.fk,t=e.t,i=e.R,o=i,c=o.a,$=o.b;return a(S,{t:bc(t),fk:Tr(n),R:a(Er,c,$)},r)}),$P=function(e){var r=m(Jf,cP,M,cu(e));if(r.b){var n=r.a,t=r.b,i=a(Ji,r,ou(e)),o=a(np,n,t);return P(wd,o,e,i,0)}else return iu},yu=v(function(e,r){var n=e,t=r,i=ea(t);return{iS:i*ea(n),iW:i*ra(n),d1:ra(t)}}),lP=function(){var e=fr(1),r=72,n=a(wn,0,r-1),t=a(rf,r,a(yi,Ue,R$(1))),i=$i(r/2),o=a(wn,0,i-1),c=a(rf,i,a(yi,lt(90),lt(-90))),$=_i(or(a(q,function(s){return a(q,function(d){return{t:Zt(a(yu,s,d)),fk:m(sr,a(Re,ii(d)*ii(s),e),a(Re,ii(d)*Uo(s),e),a(Re,Uo(d),e)),R:_(a(N$,s,R$(1)),a(N$,a(Ta,lt(90),d),lt(180)))}},c)},t))),l=v(function(s,d){return s*(i+1)+d}),f=or(a(q,function(s){return or(a(q,function(d){var b=a(l,s+1,d),p=a(l,s,d),w=a(l,s+1,d+1),y=a(l,s,d+1);return u([E(y,w,b),E(y,b,p)])},o))},n));return tu($P(a(lu,$,f)))}(),qo=72,lo=2*qo,uP=v(function(e,r){e:for(;;){var n=lo+1,t=a(jo,lo,2*e+3),i=a(jo,lo,2*e+2),o=2*e+1,c=2*e,$=lo,l=a(S,E($,c,i),a(S,E(c,t,i),a(S,E(c,o,t),a(S,E(o,n,t),r))));if(e){var f=e-1,s=l;e=f,r=s;continue e}else return l}}),vP=L(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),fP=v(function(e,r){e:for(;;){var n=m(vP,0,2*qn,e/qo),t={b5:n,cC:0,cJ:1},i={b5:n,cC:1,cJ:1},o=a(S,t,a(S,i,r));if(e){var c=e-1,$=o;e=c,r=$;continue e}else return o}}),mP=function(){var e=a(fP,qo-1,u([{b5:0,cC:0,cJ:0},{b5:0,cC:1,cJ:0}])),r=a(uP,qo-1,M);return a(Ji,e,r)}(),sP={src:`
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
    `,attributes:{angle:"b5",offsetScale:"cC",radiusScale:"cJ"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cM",viewMatrix:"g"}},nf=function(e){return yc(Ee(function(r,n,t,i,o,c,$,l){return W(Je,a(gu,!0,l),sP,pu,mP,{aS:m(Ni,0,0,1),c:t,d:n,e:c,f:r,cM:$,g:o})}))},dP=function(e){var r=kd(e);return{ez:!0,v:1,w:0,x:0,y:0,z:1,A:0,B:0,C:0,D:1,N:r.iS,O:r.iW,P:r.d1,cL:1}},pP=v(function(e,r){return a(Xd,dP(e),r)}),gP=X(function(e,r,n,t){var i=a(su,n,lP),o=function(){var l=_(e,r);return l.a?l.b?Gi(u([i,nf()])):i:l.b?nf():Q}(),c=_u(t),$=c;return a(pP,a(I$,aa,bu(t)),a(du,E($,$,$),o))}),hP=v(function(e,r){return P(gP,!0,!0,e,r)}),bP=L(function(e,r,n){return{$:1,a:e,b:r,c:n}}),tp=L(function(e,r,n){return{$:2,a:e,b:r,c:n}}),_P=qe(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),yP=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(ep,n,t);case 1:var n=e.a,t=e.b,r=e.c;return m(bP,n,t,r);case 2:var n=e.a,t=e.b,c=e.c;return m(tp,n,t,c);default:var n=e.a,t=e.b,i=e.c,o=e.d,c=e.e;return W(_P,n,t,i,o,c)}},SP=yP,ip=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return u([a(Ix,i,r)]);case 1:var i=e.a,n=e.b;return u([a(Kx,i,n)]);case 3:var i=e.a,t=e.b;return u([a(hP,SP(i),t)]);case 2:var i=e.a,o=e.b;return u([a(qx,i,o)]);case 4:var c=e.a,$=e.b;return u([a(iP,rp(c),$)]);default:var l=e.a;return a(Ra,ip,l)}},op=function(e){return a(Ra,ip,e)},wP=v(function(e,r){return D4({f2:e.f2,f7:nd(e.f8),ay:e.ay,ec:fr(e.ec),bD:e.bD,ba:_(Jo(Ve(e.bo.iQ)),Jo(Ve(e.bo.g3))),be:op(r),gR:e.gR,hs:e.hs,iE:e.iE,iP:e.iP})}),cp=function(e){return e},xP=v(function(e,r){var n=e,t=qr(r.gJ),i=t.iS,o=t.iW,c=t.d1,$=a(hc,r.cr,r.a8),l=$;return{b7:Ua(l),go:n,cn:Oa(l),dF:0,cI:Ja(l),dS:1,iS:-i,iW:-o,d1:-c}}),PP=function(e){return a(xP,cp(!0),{a8:e.a8,gJ:a(yu,Yr(e.b6),Yr(e.cl)),cr:e.cr})},Sc=P(Fn,52/255,101/255,164/255,1),CP=P(Fn,115/255,210/255,22/255,1),Su=function(e){return{$:5,a:e}},Mr=function(e){return Su(e)},wu=P(Fn,204/255,0/255,0/255,1),xu=v(function(e,r){return{$:2,a:e,b:r}}),kP=L(function(e,r,n){return{o:a(Tn,e,r),hq:gr(n.hq),hQ:gr(n.hQ)}}),$p=L(function(e,r,n){return a(xu,e,m(kP,aa,hd,{hq:fr(n),hQ:fr(r)}))}),e$=function(e){return m(ql,0,1,e<=.04045?e/12.92:a(la,(e+.055)/1.055,2.4))},zP=function(e){var r=Al(e),n=r.hS,t=r.gY,i=r.gc;return m(Ni,e$(n),e$(t),e$(i))},MP=function(e){return m(tp,0,V$(zP(e)),V$(0))},Da=v(function(e,r){return a(Ft,"unlit",e)?rp(r):MP(r)}),lp=v(function(e,r){return{$:0,a:e,b:r}}),up=v(function(e,r){return{$:4,a:e,b:r}}),Pu=v(function(e,r){return{$:3,a:e,b:r}}),Cu=v(function(e,r){return{$:1,a:e,b:r}}),LP=L(function(e,r,n){return{iS:e,iW:r,d1:n}}),TP=v(function(e,r){return{f6:a(As,e,au(r)),ba:uu(r)}}),DP=v(function(e,r){var n=r;return a(Tn,a(jt,e,n.dw),n.gJ)}),WP=v(function(e,r){var n=r;return{o:a(DP,e,n.o),hq:n.hq,hQ:n.hQ}}),AP=function(e){return e},vp=v(function(e,r){var n=hu(r),t=n.a,i=n.b;return AP(_(e(t),e(i)))}),FP=v(function(e,r){return a(vp,jt(e),r)}),ku=v(function(e,r){return{gp:r,hQ:gr(e)}}),IP=v(function(e,r){return a(ku,_u(r),a(jt,e,bu(r)))}),fp=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return E(e(t),e(i),e(o))}),EP=v(function(e,r){return a(fp,jt(e),r)}),wc=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=m(LP,n,t,i);switch(r.$){case 0:var s=r.a,c=r.b;return a(lp,s,a(TP,o,c));case 1:var s=r.a,$=r.b;return a(Cu,s,a(EP,o,$));case 3:var s=r.a,l=r.b;return a(Pu,s,a(IP,o,l));case 2:var s=r.a,f=r.b;return a(xu,s,a(WP,o,f));case 4:var s=r.a,d=r.b;return a(up,s,a(FP,o,d));default:var b=r.a;return Su(a(q,wc(E(n,t,i)),b))}}),Wa=function(e){return wc(E(e,0,0))},xc=function(e){return wc(E(0,e,0))},mp=function(e){return wc(E(0,0,e))},jP=L(function(e,r,n){return{f6:m(Ws,e,r,au(n)),ba:uu(n)}}),BP=v(function(e,r){var n=a(Ii,e,r),t=a(ho,e,r);return function(i){var o=i;return a(Tn,n(o.dw),t(o.gJ))}}),VP=L(function(e,r,n){var t=n;return{o:m(BP,e,r,t.o),hq:t.hq,hQ:t.hQ}}),RP=L(function(e,r,n){return a(vp,a(Ii,e,r),n)}),NP=L(function(e,r,n){return a(ku,_u(n),m(Ii,e,r,bu(n)))}),GP=L(function(e,r,n){return a(fp,a(Ii,e,r),n)}),zu=L(function(e,r,n){switch(n.$){case 0:var $=n.a,t=n.b;return a(lp,$,m(jP,e,r,t));case 1:var $=n.a,i=n.b;return a(Cu,$,m(GP,e,r,i));case 3:var $=n.a,o=n.b;return a(Pu,$,m(NP,e,r,o));case 2:var $=n.a,c=n.b;return a(xu,$,m(VP,e,r,c));case 4:var $=n.a,l=n.b;return a(up,$,m(RP,e,r,l));default:var f=n.a;return Su(a(q,a(zu,e,r),f))}}),HP=a(Tn,aa,nu),sp=v(function(e,r){return m(zu,HP,Yr(e),r)}),JP=a(Tn,aa,sc),G$=v(function(e,r){return m(zu,JP,Yr(e),r)}),OP=lg,UP=ug,qP=function(e){var r=e.a,n=e.b,t=e.c;return an(a(la,r,2)+a(la,n,2)+a(la,t,2))},YP=function(e){var r=e.a,n=e.b,t=e.c,i=qP(E(r,n,t));return{b6:a(UP,n,r),hc:OP(t/i),hQ:i}},wo=X(function(e,r,n,t){var i=t.a,o=t.b,c=E(o.iS-i.iS,o.iW-i.iW,o.d1-i.d1),$=c.a,l=c.b,f=c.c,s=YP(E($,l,f)),d=s.hQ,b=s.b6,p=s.hc;return a(mp,i.d1,a(xc,i.iW,a(Wa,i.iS,a(G$,b,a(sp,p-Ln(90),a(Wa,d/2,a(G$,Ln(90),m($p,a(Da,e,r),n/2,d))))))))}),XP=function(e){return Mr(u([P(wo,e,wu,.1,_(m(kr,0,0,0),m(kr,10,0,0))),P(wo,e,CP,.1,_(m(kr,0,0,0),m(kr,0,10,0))),P(wo,e,Sc,.1,_(m(kr,0,0,0),m(kr,0,0,10)))]))},QP=P(Fn,78/255,154/255,6/255,1),H$=v(function(e,r){return a(Pu,e,a(ku,fr(r),aa))}),dp=X(function(e,r,n,t){var i=t.a,o=t.b;return P(wo,e,r,n,_(m(kr,i.iS,i.iW,0),m(kr,o.iS,o.iW,0)))}),ZP=P(Fn,237/255,212/255,0/255,1),KP=v(function(e,r){var n=ji(r.l).cX,t=a(G$,n.gK,Mr(u([a(sp,n.hZ,Mr(u([a(Wa,-.02,a(H$,a(Da,e,wu),n.a9.hQ)),a(Wa,.02,a(H$,a(Da,e,ZP),n.a9.hQ))]))),m($p,a(Da,e,os),.2,1.1)]))),i=n.iM,o=i.a,c=i.b,$=a(Ft,"draw speed vector",e)?P(dp,e,QP,.2,_(a(Pn,0,0),a(Pn,.3*o,.3*c))):Mr(M);return a(xc,n.a9.cc.iW,a(Wa,n.a9.cc.iS,a(mp,.5,Mr(u([t,$])))))}),xo=v(function(e,r){var n=r.a,t=r.b,i=r.c;return a(Cu,e,m(Ar,m(_o,n.iS,n.iW,n.d1),m(_o,t.iS,t.iW,t.d1),m(_o,i.iS,i.iW,i.d1)))}),eC=function(e){return a(xo,a(Da,e,Sc),E(m(kr,0,0,0),m(kr,.1,0,0),m(kr,0,.1,0)))},rC=v(function(e,r){if(a(Ft,"draw ball trail",e)){var n=ji(r.l).cX;return Mr(a(q,function(t){return a(xc,t.iW,a(Wa,t.iS,eC(e)))},n.iH))}else return Mr(M)}),nC=v(function(e,r){return a(xc,r.aX.iW,a(Wa,r.aX.iS,a(H$,a(Da,e,wu),.2)))}),aC=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return M}();return m(rc,pc,e,r)},tC=v(function(e,r){var n=r.m.a0;if(n.$===1){var t=n.a;return Mr(a(q,m(dp,e,Sc,.2),aC(t)))}else return Mr(M)}),r$=v(function(e,r){var n=e.a,t=e.b,i=e.c;return{iS:r.iS+n,iW:r.iW+t,d1:r.d1+i}}),iC=v(function(e,r){return{iS:e,iW:r}}),oC=v(function(e,r){var n=e,t=r;return t.iS*n.iW-t.iW*n.iS}),af=v(function(e,r){var n=e,t=r;return{iS:t.iS-n.iS,iW:t.iW-n.iW}}),cC=function(e){var r=e;return r},pp=function(e){var r=cC(e),n=r.a,t=r.b,i=r.c,o=a(af,n,t),c=a(af,n,i);return a(Re,.5,a(oC,c,o))},gp=L(function(e,r,n){return E(e,r,n)}),$C=function(e){return m(Me,Ta,Ue,e)},hp=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,i=e.b,t=i.a,o=i.b,c=v(function(s,d){return pp(m(gp,r,s,d))}),$=m(rc,c,a(S,t,o),o);return $C($)}else{var r=e.a,n=e.b,t=n.a;return Ue}else return e.a,Ue;else return Ue},lC=function(e){return a(ai,Ue,hp(e))?e:Le(e)},bp=v(function(e,r){var n=e,t=r;return ve(t,n)>-1}),uC=function(e){return a(bp,Ue,hp(e))?e:Le(e)},vC=v(function(e,r){return{bi:a(q,lC,e),bn:uC(r)}}),fC=function(e){return a(vC,M,e)},Xn=function(e){var r=e;return r.iS},Qn=function(e){var r=e;return r.iW},n$=v(function(e,r){return{iS:e(Xn(r)),iW:e(Qn(r))}}),ja=v(function(e,r){var n=e,t=r;return ve(t,n)>0}),Yo=L(function(e,r,n){return pp(m(gp,e.fk,r.fk,n.fk))}),mC=v(function(e,r){e:for(;;){var n=r.r;if(n.b){var i=n.a,o=n.b;if(a(ja,Ue,m(Yo,i,r.h,e))){var t=E(i.hd,r.h.hd,e.hd),c=e,$={h:i,r:o,k:r.k,bG:a(S,t,r.bG)};e=c,r=$;continue e}else return{h:e,r:a(S,r.h,r.r),k:r.k,bG:r.bG}}else if(a(ja,Ue,m(Yo,r.k,r.h,e))){var t=E(r.k.hd,r.h.hd,e.hd);return{h:e,r:M,k:r.k,bG:a(S,t,r.bG)}}else return{h:e,r:u([r.h]),k:r.k,bG:r.bG}}}),sC=v(function(e,r){e:for(;;){var n=r.r;if(n.b){var i=n.a,o=n.b;if(a(ja,Ue,m(Yo,e,r.h,i))){var t=E(e.hd,r.h.hd,i.hd),c=e,$={h:i,r:o,k:r.k,bG:a(S,t,r.bG)};e=c,r=$;continue e}else return{h:e,r:a(S,r.h,r.r),k:r.k,bG:r.bG}}else if(a(ja,Ue,m(Yo,e,r.h,r.k))){var t=E(e.hd,r.h.hd,r.k.hd);return{h:e,r:M,k:r.k,bG:a(S,t,r.bG)}}else return{h:e,r:u([r.h]),k:r.k,bG:r.bG}}}),dC=v(function(e,r){var n=e,t=r;return a(bl,n,t)}),pC=v(function(e,r){var n=e,t=r;return ve(t,n)<0}),Si=v(function(e,r){var n=Qn(r),t=Qn(e),i=Xn(r),o=Xn(e);return a(pC,n,t)?0:a(ja,n,t)?2:a(dC,i,o)}),Xo=function(e){return e},_p=ng,gC=v(function(e,r){var n=L(function(t,i,o){e:for(;;)if(i.b){var $=i.a,l=i.b,c=E(e.hd,t.hd,$.hd),f=$,s=l,d=a(S,c,o);t=f,i=s,o=d;continue e}else{var c=E(e.hd,t.hd,r.k.hd);return a(S,c,o)}});return{h:e,r:M,k:r.h,bG:m(n,r.h,r.r,r.bG)}}),hC=v(function(e,r){var n=L(function(t,i,o){e:for(;;)if(i.b){var $=i.a,l=i.b,c=E(t.hd,e.hd,$.hd),f=$,s=l,d=a(S,c,o);t=f,i=s,o=d;continue e}else{var c=E(t.hd,e.hd,r.k.hd);return a(S,c,o)}});return{h:e,r:M,k:r.h,bG:m(n,r.h,r.r,r.bG)}}),bC=function(e){var r=a(_p,v(function(l,f){return a(Si,f.fk,l.fk)}),e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=t.b,c=v(function(l,f){return ue(l.bl,f.k.hd)?a(hC,l,f):ue(f.k.bl,l.hd)?a(gC,l,f):ue(l.bl,f.h.hd)?a(sC,l,f):ue(f.h.bl,l.hd)?a(mC,l,f):Xo(f)}),$={h:i,r:M,k:n,bG:M};return m(Me,c,$,o).bG}else return r.a,M;else return M},Ui=v(function(e,r){return a(Hn,e,r.W)}),_C=qe(function(e,r,n,t,i){e:for(;;){var o=i.a,c=i.b,$=a(Ui,t,e);if($.$)return Xo(_(o,M));var l=$.a,f=a(Hn,l.at,r);if(f.$)return Xo(_(o,M));var s=f.a,d=a(Mm,t,o),b=l.aF,p={hd:l.at,bl:l.aC,fk:s},w=a(S,p,c);if(ue(b,n))return _(d,Le(w));var y=e,C=r,z=n,x=b,T=_(d,w);e=y,r=C,n=z,t=x,i=T;continue e}}),uo=Up,yC=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d,c=function($){if($.$){var f=$.a;return Fa(a(uo,e,f))}else{var l=$.a;return Ca(a(uo,c,l))}};return P(On,n,t,a(uo,c,i),a(uo,e,o))}),SC=function(e){var r=a(yC,function(c){return c.fk},e.aw),n=v(function(c,$){var l=$,f=l.a,s=l.b;if(a(Lm,c,f))return $;var d=W(_C,e,r,c,c,_(f,M)),b=d.a,p=d.b;return _(b,a(S,p,s))}),t=a(wn,0,$u(e.W)-1),i=m(Me,n,_(yl,M),t),o=i.b;return _(r,o)},wC=M,qa=v(function(e,r){if(r.$)return Xo(e);var n=r.a;return n}),xC=qe(function(e,r,n,t,i){if(r.$===1)return B;var o=r.a;if(n.$===1)return B;var c=n.a;if(t.$===1)return B;var $=t.a;if(i.$===1)return B;var l=i.a;return H(P(e,o,c,$,l))}),J$=Hp,yp=jp,gt=Gp,oi=X(function(e,r,n,t){var i=Ea&r>>>e;if(ve(i,kn(t))>-1){if(e===5)return a(J$,Fa(n),t);var o=Ca(P(oi,e-tn,r,n,Aa));return a(J$,o,t)}else{var c=a(bi,i,t);if(c.$){var o=Ca(P(oi,e-tn,r,n,yp(c)));return m(gt,i,o,t)}else{var $=c.a,o=Ca(P(oi,e-tn,r,n,$));return m(gt,i,o,t)}}}),O$=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d,c=kn(o),$=kn(e),l=n+($-c);if(ue($,er)){var f=ve(l>>>tn,1<<t)>0;if(f){var s=t+tn,d=P(oi,s,n,e,yp(Ca(i)));return P(On,l,s,d,Aa)}else return P(On,l,t,P(oi,t,n,e,i),Aa)}else return P(On,l,t,i,e)}),tf=v(function(e,r){var n=r.d;return a(O$,a(J$,e,n),r)}),of=v(function(e,r){return F(r,{aF:e})}),cf=v(function(e,r){return F(r,{F:e})}),Sp=X(function(e,r,n,t){var i=Ea&r>>>e,o=a(bi,i,t);if(o.$){var l=o.a,f=m(gt,Ea&r,n,l);return m(gt,i,Fa(f),t)}else{var c=o.a,$=P(Sp,e-tn,r,n,c);return m(gt,i,Ca($),t)}}),PC=L(function(e,r,n){var t=n.a,i=n.b,o=n.c,c=n.d;return e<0||ve(e,t)>-1?n:ve(e,Dd(t))>-1?P(On,t,i,o,m(gt,Ea&e,r,c)):P(On,t,i,P(Sp,i,e,r,o),c)}),vo=L(function(e,r,n){var t=a(Hn,e,n);if(t.$)return n;var i=t.a;return m(PC,e,r(i),n)}),kt=L(function(e,r,n){var t=$u(n.W);return a(qa,_(n,-1),W(xC,X(function(i,o,c,$){return _(F(n,{W:a(tf,{aC:e,aF:e,F:$.F,at:r.hd},a(tf,{aC:r.hd,aF:r.cD,F:c.F,at:e},m(vo,$.F,of(t+1),m(vo,c.F,of(t),m(vo,r.cD,cf(t),m(vo,e,cf(t+1),n.W))))))}),t)}),a(Hn,e,n.aw),a(Hn,r.hd,n.aw),a(Hn,e,n.W),a(Hn,r.cD,n.W)))}),zt=v(function(e,r){return a(Wt,e,r.bK)}),CC=Sr,$f=v(function(e,r){return a(Hn,e,r.aw)}),kC=L(function(e,r,n){if(r.$===1)return B;var t=r.a;if(n.$===1)return B;var i=n.a;return H(a(e,t,i))}),wp=L(function(e,r,n){return a(qa,n,a(Yn,function(t){return m(kC,v(function(i,o){var c=CC(_(i.fk,o.fk));return F(n,{bF:a(e,_(r,c),n.bF)})}),a($f,t.at,n),a($f,t.aC,n))},a(Ui,r,n)))}),zC=v(function(e,r){var n=r;return a(zi,Rb(e),n)}),Mu=wp(zC),MC=v(function(e,r){return a(qa,r,a(Yn,function(n){return a(Se,function(t){var i=t.bj?m(kt,e,t,r).a:r;return a(Mu,n.F,i)},a(zt,n.F,r))},a(Ui,e,r)))}),Mt=L(function(e,r,n){return{hd:e,bj:n,cD:r}}),LC=v(function(e,r){var n=r;return a(S,e,n)}),Lu=wp(LC),Lt=L(function(e,r,n){return F(n,{bK:m(ka,e,r,n.bK)})}),TC=v(function(e,r){return a(qa,r,a(Yn,function(n){return a(Se,function(t){var i=t.bj?m(kt,e,t,r).a:r;return m(Lt,e,m(Mt,e,e,!1),a(Lu,e,a(Mu,n.F,i)))},a(zt,n.F,r))},a(Ui,e,r)))}),DC=function(e){var r=e;return r},WC=v(function(e,r){var n=r,t=Qn(e),i=Xn(e);return a(Se,function(o){o.a;var c=o.b,$=c.a;return c.b,$},m(Me,v(function(o,c){var $=DC(o.b),l=$.a,f=$.b,s=Xn(l),d=Qn(l),b=Xn(f),p=Qn(f),w=function(){if(ue(d,p))return a(dr,a(Ke,s,b),i);var z=a(N$,a(dr,d,t),a(dr,d,p));return a(dr,a(Ta,a(Re,z,a(dr,s,b)),s),i)}();if(a(bp,Ue,w)){if(c.$===1)return H(_(w,o));var y=c.a,C=y.a;return y.b,a(ai,C,w)?H(_(w,o)):c}else return c}),B,n))}),Tu=v(function(e,r){return a(WC,e,r.bF)}),AC=L(function(e,r,n){return a(qa,n,a(Yn,function(t){return a(Yn,function(i){var o=i.bj?m(kt,e,i,n).a:n,c=a(Mu,t.F,o);return a(Yn,function($){return a(Se,function(l){var f=l.bj?m(kt,e,l,c):_(c,e),s=f.a,d=f.b;return m(Lt,$,m(Mt,e,d,!0),s)},a(zt,$,n))},a(Tu,r,c))},a(zt,t.F,n))},a(Ui,e,n)))}),FC=L(function(e,r,n){return a(qa,n,a(Yn,function(t){return a(Se,function(i){var o=i.bj?m(kt,e,i,n):_(n,e),c=o.a,$=o.b;return m(Lt,t,m(Mt,e,$,!1),c)},a(zt,t,n))},a(Tu,r,n)))}),IC=L(function(e,r,n){return a(qa,n,a(Yn,function(t){return a(Se,function(i){var o=m(kt,e,i,n),c=o.a,$=o.b;return m(Lt,e,m(Mt,e,e,!1),a(Lu,e,m(Lt,t,m(Mt,e,$,!1),c)))},a(zt,t,n))},a(Tu,r,n)))}),EC=v(function(e,r){return m(Lt,e,m(Mt,e,e,!1),a(Lu,e,r))}),xp=Yp,Pp=qp,lf=v(function(e,r){var n=kn(e),t=er-kn(r.u)-n,i=m(xp,er,r.u,e);return t<0?{E:a(S,Fa(i),r.E),q:r.q+1,u:m(Pp,t,n,e)}:t?{E:r.E,q:r.q,u:i}:{E:a(S,Fa(i),r.E),q:r.q+1,u:Aa}}),uf=v(function(e,r){r.a,r.c;var n=r.d,t=kn(e),i=er-kn(n)-t,o=m(xp,er,n,e),c=a(O$,o,r);if(i<0){var $=m(Pp,i,t,e);return a(O$,$,c)}else return c}),ut=Jp,jC=function(e){var r=e.a,n=e.c,t=e.d,i=v(function(o,c){if(o.$)return a(S,o,c);var $=o.a;return m(ut,i,c,$)});return{E:m(ut,i,M,n),q:r/er|0,u:t}},BC=v(function(e,r){e.d;var n=r.a,t=r.c,i=r.d;if(ve(n,er*4)<1){var o=v(function(c,$){if(c.$){var f=c.a;return a(uf,f,$)}else{var l=c.a;return m(ut,o,$,l)}});return a(uf,i,m(ut,o,e,t))}else{var o=v(function($,l){if($.$){var s=$.a;return a(lf,s,l)}else{var f=$.a;return m(ut,o,l,f)}});return a(ml,!0,a(lf,i,m(ut,o,jC(e),t)))}}),VC=L(function(e,r,n){e:for(;;)if(r.b){var t=r.a,i=r.b,o=ue(t,e)?n:a(S,t,n),c=t,$=i,l=o;e=c,r=$,n=l;continue e}else return n}),RC=function(e){if(e.b){var r=e.a,n=e.b,t=m(VC,r,n,M);if(t.b){var i=t.a,o=t.b;return ue(i,r)?a(S,r,Le(o)):a(S,r,Le(t))}else return u([r])}else return M},vf=v(function(e,r){var n=e,t=r;return t*n}),ff=L(function(e,r,n){var t=Qn(n),i=Qn(r),o=Qn(e),c=Xn(n),$=Xn(r),l=Xn(e),f=a(vf,a(dr,$,c),a(dr,o,i)),s=a(vf,a(dr,i,t),a(dr,l,$)),d=a(dr,f,s);return a(ja,Ue,d)}),mf=L(function(e,r,n){var t=a(Si,r,e),i=a(Si,r,n);return t===2&&i===2?m(ff,e,r,n)?0:4:!t&&!i?m(ff,e,r,n)?1:5:t===2?3:2}),NC=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,i=e.b,t=i.a,o=i.b,c=o.a,$=o.b,l=m(Me,_t,c,$),f=X(function(b,p,w,y){e:for(;;)if(w.b){var z=w.a,x=w.b,T={aD:m(mf,b,p,z),fk:p},G=p,ne=z,te=x,ie=a(S,T,y);b=G,p=ne,w=te,y=ie;continue e}else{var C={aD:m(mf,b,p,r),fk:p};return Le(a(S,C,y))}});return P(f,l,r,a(S,t,a(S,c,$)),M)}else{var r=e.a,n=e.b,t=n.a;return a(Si,r,t)===2?u([{aD:4,fk:r},{aD:5,fk:t}]):u([{aD:5,fk:r},{aD:4,fk:t}])}else return e.a,M;else return M},GC=function(e){var r=e.bn,n=e.bi,t=a(q,function(c){return RC(c)},a(S,r,n)),i=m(Me,v(function(c,$){var l=$.a,f=$.b,s=un(c),d=a(rm,s,function(b){return b?ue(b,s-1)?{aC:l,aF:l,F:l+b-1,at:l+b}:{aC:l+b+1,aF:l+b+1,F:l+b-1,at:l+b}:{aC:l+1,aF:l+1,F:l+s-1,at:l}});return _(l+s,a(BC,f,d))}),_(0,vl),t).b,o=or(a(q,NC,t));return{W:i,aw:o}},HC=function(e){var r=v(function(l,f){var s=l.a,d=l.b,b=d.aD;switch(b){case 0:return a(EC,s,f);case 1:return a(MC,s,f);case 3:return m(FC,s,d.fk,f);case 2:return a(TC,s,f);case 4:return m(IC,s,d.fk,f);default:return m(AC,s,d.fk,f)}}),n=GC(e),t=n.aw,i=n.W,o={bF:wC,W:i,bK:oc,aw:_i(t)},c=a(_p,v(function(l,f){var s=l.b,d=f.b;return a(Si,d.fk,s.fk)}),a(ll,pc,t)),$=m(Me,r,o,c);return _i(t),SC($)},JC=function(e){var r=HC(e),n=r.a,t=r.b;return a(lu,n,or(a(q,bC,t)))},OC=function(e){return JC(e)},UC=function(e){return a(q,function(r){var n=r.a,t=r.b,i=r.c;return E(a(n$,La,n),a(n$,La,t),a(n$,La,i))},Wd(OC(fC(a(q,function(r){return a(iC,r.iS,r.iW)},e)))))},qC=v(function(e,r){var n=a(Da,e,Sc),t=2,i=function(f){var s=f.iS,d=f.iW;return m(kr,s,d,t)},o=function(f){var s=f.a,d=f.b;return Mr(u([a(xo,n,E(i(s),i(d),a(r$,E(0,0,-t),i(s)))),a(xo,n,E(a(r$,E(0,0,-t),i(s)),i(d),a(r$,E(0,0,-t),i(d))))]))},c=function(f){return Mr(a(q,o,Ul(f.fi)))},$=function(f){return Mr(a(q,function(s){var d=s.a,b=s.b,p=s.c;return a(xo,n,E(i(d),i(b),i(p)))},UC(f.fi)))},l=function(f){return Mr(u([$(f),c(f)]))};return Mr(a(q,l,ji(r.l).hO))}),Cp=function(e){return e},YC=function(e){return Cp(1.2*a(la,2,e))},a$=gc({iS:.37208,iW:.37529}),XC=v(function(e,r){return{$:2,a:e,b:r}}),kp=function(e){return{$:0,a:e}},fo=function(e){var r=e;return r},QC=function(e){var r=e;return r.go},zp=kp(Qt.a),ZC=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?_(a(S,t,o),c):_(o,a(S,t,c))});return m(cr,n,_(M,M),r)}),KC=function(e){var r=e;return yn({eJ:r.iS,eK:r.cI,eL:0,eM:0,eN:r.iW,eO:r.cn,eP:0,eQ:0,eR:r.d1,eS:r.b7,eT:0,eU:0,eV:r.dS,eW:r.dF,eX:0,eY:0})},ek=Ee(function(e,r,n,t,i,o,c,$){var l=a(ZC,QC,u([fo(e),fo(r),fo(n),fo(t)])),f=l.a,s=l.b;if(f.b){var d=Y(f,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,p=d.b,w=p.a,y=p.b,C=y.a,z=y.b,x=z.a;return a(XC,a(q,KC,f),{bN:a(Nr,b,w),cu:a(Nr,C,x),cv:a(Nr,i,o),cw:a(Nr,c,$)})}else return zp}else return kp({bN:a(Nr,e,r),cu:a(Nr,n,t),cv:a(Nr,i,o),cw:a(Nr,c,$)})}),rk=X(function(e,r,n,t){return wi(ek,e,r,n,t,Fr,Fr,Fr,Fr)}),nk={$:5},ak=nk,tk=gc({iS:.44757,iW:.40745}),ik=function(e){return e},sf=function(e){return e},t$=function(e){return e},ok={$:1},ck=ok,$k=v(function(e,r){var n=e,t=Hi(r.fk),i=t.iS,o=t.iW,c=t.d1,$=a(hc,r.cr,r.a8),l=$;return{b7:Ua(l),go:n,cn:Oa(l),dF:0,cI:Ja(l),dS:2,iS:i,iW:o,d1:c}}),df=function(e){return a($k,cp(!0),{a8:e.a8,cr:e.cr,fk:Gl(e.fk)})},i$=function(e){return e/255},pf=L(function(e,r,n){return P(Fn,i$(e),i$(r),i$(n),1)}),gf=function(e){var r=e;return r},lk=function(e){e:for(;;){if(ue(e.ew,Ue)&&ue(e.ex,Ue))return Fr;if(a(ja,gr(e.ew),gr(e.ex))){var r={a8:e.a8,ew:e.ex,ex:e.ew,fG:Go(e.fG)};e=r;continue e}else{var n=Pe(gf(e.ex)/qn),t=Pe(gf(e.ew)/qn),i=qr(e.fG),o=i.iS,c=i.iW,$=i.d1,l=a(hc,zd(1),e.a8),f=l;return{b7:t*Ua(f),go:!1,cn:t*Oa(f),dF:n/t,cI:t*Ja(f),dS:3,iS:o,iW:c,d1:$}}}},uk=function(e){return lk({a8:e.a8,ew:e.ew,ex:e.ex,fG:a(yu,Yr(e.b6),Yr(e.cl))})},vk=function(e){return a(bd,{f2:e.f2,f7:e.f7,ay:e.ay,ec:e.ec,ba:e.ba},u([{be:e.be,gR:e.gR,hs:e.hs,iE:e.iE,iP:e.iP}]))},fk=gc({iS:.31271,iW:.32902}),mk=function(e){return gr(e)},sk={$:0},dk=sk,pk=function(e){return vk({f2:_d(e.bD),f7:e.f7,ay:e.ay,ec:e.ec,ba:e.ba,be:e.be,gR:mk(Cp(80)),hs:zp,iE:dk,iP:fk})},gk=v(function(e,r){return pk({f7:nd(e.f7),ay:e.ay,ec:fr(e.ec),bD:e.bD,ba:_(Jo(Ve(e.bo.iQ)),Jo(Ve(e.bo.g3))),be:op(r)})}),hk=v(function(e,r){var n=PP({b6:0,a8:pw(ik(2e3)),cl:Ln(90),cr:t$(240)}),t=df({a8:a$,cr:sf(6e3),fk:{iS:2,iW:3,d1:3}}),i=uk({b6:0,a8:a$,cl:Ln(90),ew:t$(30),ex:t$(30)}),o=df({a8:tk,cr:sf(6e3),fk:{iS:-2,iW:4,d1:3}}),c=a(Ft,"unlit",e)?gk({f7:m(pf,46,46,46),ay:r.ay,ec:.1,bD:e.bD,bo:e.bo}):wP({f2:ck,f8:m(pf,46,46,46),ay:r.ay,ec:.1,bD:e.bD,gR:YC(6),hs:P(rk,o,t,n,i),bo:e.bo,iE:ak,iP:a$});return c(u([XP(e),a(KP,e,r),a(rC,e,r),a(qC,e,r),a(nC,e,r),a(tC,e,r)]))}),bk=v(function(e,r){return a(hk,e,r)}),Mp=a(sn,kl,g.is),Pc=function(e){return a(ke,u([re(ce),a(Li,0,10),Mp,dn(20)]),hr(e))},_k=5,yk=v(function(e,r){return{$:4,a:e,b:r}}),Sk=v(function(e,r){return a(yk,e,r)}),wk=v(function(e,r){return{$:3,a:e,b:r}}),xk=v(function(e,r){return a(wk,e,r)}),Pk=v(function(e,r){return P(Qe,_k,Ur,a(S,re(a(Sk,750,a(xk,500,ce))),e),He(r))}),Ck=v(function(e,r){return a(Pk,u([T$]),u([Pc("Debugger")]))}),kk={$:8},Zn=v(function(e,r){return a(Nl,u([Vr(At),a(Li,10,6),xr(ni),cn(8)]),{dc:hr(e),hD:H(r)})}),zk=function(e){return a(ke,u([re(ce),we(Fe(100)),nn(10),xr(At),Ai(u([Fi])),Mi,Br(a(ar,"user-select","text")),cn(10)]),hr(e.m.c9))},Mk=v(function(e,r){return a(rr,u([$r(10),re(ce)]),u([a(Zn,"Export Levels",kk),zk(r)]))}),Lk={$:9},Tk=function(e){return{$:10,a:e}},Dk=function(e){return{$:0,a:e}},Wk={$:1},Ak=a(pa,ze,Eo("autocomplete")),Fk=function(e){var r=v(function(i,o){if(i.$===4&&i.b.$===5){var c=i.b;c.b;var $=c.c;return o.$===1?H($):o}else return o}),n=m(cr,r,B,e);if(n.$===1)return Jr;var t=n.a;return ps(tt(t/2))},Lp=a(sn,is,g.gs),Ik=m(ca,186/255,189/255,182/255),Ek=a(Li,12,12),jk=u([Ek,cn(3),Mn(Ik),xr(go),Di(1),$r(5),re(ce),we(wr)]),Bk=function(e){if(e.$===8){var r=e.a;return H(r)}else return B},Vk=function(e){e:for(;;)switch(e.$){case 1:return!1;case 0:return!0;case 2:return!0;case 3:var n=e.b,r=n;e=r;continue e;default:var n=e.b;return!0}},Rk=function(e){if(e.$)return!0;var r=e.a;switch(r){case 0:return!1;case 1:return!1;case 2:return!0;default:return!0}},Nk=function(e){return{b9:-e.b9,hp:-e.hp,hV:-e.hV,cP:-e.cP}},hf=function(e){e:for(;;)switch(e.$){case 2:return!0;case 1:return!1;case 0:return!1;case 3:var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},Gk=function(e){e:for(;;)switch(e.$){case 1:return!1;case 0:return!0;case 2:return!1;case 3:var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},Hk=X(function(e,r,n,t){return"pad-"+(Ie(e)+("-"+(Ie(r)+("-"+(Ie(n)+("-"+Ie(t)))))))}),Jk=X(function(e,r,n,t){switch(n.$){case 9:return F(t,{b:a(S,n,t.b)});case 7:var i=n.a;return hf(i)?F(t,{n:a(S,n,t.n),I:a(S,n,t.I),b:a(S,n,t.b)}):r?F(t,{n:a(S,n,t.n)}):F(t,{b:a(S,n,t.b)});case 8:var o=n.a;return r?hf(o)?F(t,{n:a(S,n,t.n),b:a(S,n,t.b)}):Gk(o)?F(t,{b:a(S,n,t.b)}):F(t,{b:a(S,n,t.b)}):F(t,{n:a(S,n,t.n),b:a(S,n,t.b)});case 6:return F(t,{n:a(S,n,t.n)});case 5:return F(t,{n:a(S,n,t.n)});case 4:switch(n.b.$){case 5:return n.b,F(t,{n:a(S,n,t.n),I:a(S,n,t.I),b:a(S,n,t.b),bv:a(S,n,t.bv)});case 7:n.a;var c=n.b;c.a;var $=c.b,l=c.c,f=c.d,s=c.e;if(e)return F(t,{V:a(S,n,t.V),b:a(S,n,t.b)});var d=$-a(rn,$,f),b=Br(a(ar,"line-height","calc(1.0em + "+(se(2*a(rn,$,f))+"px)"))),p=Br(a(ar,"height","calc(1.0em + "+(se(2*a(rn,$,f))+"px)"))),w=f-a(rn,$,f),y=a(Te,xt,W(wt,P(Hk,d,l,w,s),d,l,w,s));return F(t,{V:a(S,n,t.V),I:a(S,p,a(S,b,t.I)),b:a(S,y,t.b)});case 6:return n.b,F(t,{V:a(S,n,t.V),b:a(S,n,t.b)});case 10:return F(t,{V:a(S,n,t.V),b:a(S,n,t.b)});case 2:return F(t,{n:a(S,n,t.n)});case 1:return n.b,F(t,{n:a(S,n,t.n)});default:return n.a,n.b,F(t,{b:a(S,n,t.b)})}case 0:return t;case 1:return n.a,F(t,{I:a(S,n,t.I)});case 2:return F(t,{I:a(S,n,t.I)});case 3:return F(t,{b:a(S,n,t.b)});default:return F(t,{I:a(S,n,t.I)})}}),Ok=L(function(e,r,n){return function(t){return{V:Le(t.V),n:Le(t.n),I:Le(t.I),b:Le(t.b),bv:Le(t.bv)}}(m(Me,a(Jk,e,r),{V:M,n:M,I:M,b:M,bv:M},n))}),Uk=function(e){var r=e.cP,n=e.hV,t=e.b9,i=e.hp;return D(r)+("px "+(D(n)+("px "+(D(t)+("px "+(D(i)+"px"))))))},qk=function(e){var r=function(n){return 1-n}(a(rn,1,a(tr,0,e)));return a(Te,M$,a(z$,"transparency-"+Ie(r),r))},Yk=m(ca,136/255,138/255,133/255),bf=L(function(e,r,n){var t=e.a,i=e.b;return a(ke,Y(r,Y(u([Vr(Yk),Xe(g.e7+(" "+g.hK)),Lp,Mn(P(k$,0,0,0,0)),xr(P(k$,0,0,0,0)),we(ce),re(ce),qk(n?1:0)]),t)),i)}),Xk=Wn("span"),Qk=Ls("spellcheck"),Zk=a(pa,ze,Qk),Kk=a(pa,ze,Rl),ez=L(function(e,r,n){var t=Y(jk,r),i=m(Ok,ue(e.dS,Wk),Rk(n.dc),t),o=function(){var s=e.dS;return s.$?a(Ce,!1,a(Se,Vk,va(Le(a(Wr,Bk,t))))):(s.a,!1)}(),c=function(s){if(s.$===4&&s.b.$===7){s.a;var d=s.b;d.a;var b=d.b,p=d.c,w=d.d,y=d.e;return H({b9:a(tr,0,tt(w-3)),hp:a(tr,0,tt(y-3)),hV:a(tr,0,tt(p-3)),cP:a(tr,0,tt(b-3))})}else return B},$=a(Ce,{b9:0,hp:0,hV:0,cP:0},va(Le(a(Wr,c,t)))),l=P(Qe,pr,function(){var s=e.dS;return s.$?bn("textarea"):(s.a,bn("input"))}(),Y(function(){var s=e.dS;if(s.$)return u([Lp,we(ce),Xe(g.hf),Fk(t),Cs($),ze(a(ar,"margin",Uk(Nk($)))),ze(a(ar,"box-sizing","content-box"))]);var d=s.a;return u([ze(Vl(d)),Xe(g.hj)])}(),Y(u([Kk(n.io),ze(Bl(n.e9)),Tl(n.dc),Zk(e.aj),a(Ce,Jr,a(Se,Ak,e.ac))]),i.I)),He(M)),f=function(){var s=e.dS;return s.$===1?P(Qe,pr,Ur,Y((o?S(Mi):Sr)(u([re(ce),a(Ia,L$,t)?Jr:Xe(g.em),Xe(g.hi)])),i.b),He(u([P(Qe,ot,Ur,a(S,re(ce),a(S,we(ce),a(S,Wo(l),a(S,Xe(g.hh),i.bv)))),He(function(){if(n.io===""){var d=n.hM;if(d.$===1)return u([hr("\xA0")]);var b=d.a;return u([m(bf,b,M,n.io==="")])}else return u([ym(a(Xk,u([jr(g.hg)]),u([cc(n.io+"\xA0")])))])}()))]))):(s.a,P(Qe,pr,Ur,a(S,re(ce),a(S,a(Ia,L$,t)?Jr:Xe(g.em),or(u([i.b,function(){var d=n.hM;if(d.$===1)return M;var b=d.a;return u([mc(m(bf,b,i.V,n.io===""))])}()])))),He(u([l]))))}();return m(Ll,a(S,a(sn,us,g.gD),a(S,Dl(n.dc)?Jr:$r(5),a(S,Ml,i.n))),n.dc,f)}),rz=ez({ac:B,aj:!1,dS:Dk("text")}),nz=function(e){return a(rz,u([re(ce),we(Fe(100)),nn(10),xr(At),Ai(u([Fi])),Mi,Br(a(ar,"user-select","text")),cn(10)]),{dc:ks("Imported Levels"),e9:Tk,hM:B,io:e.m.da})},az=v(function(e,r){return a(rr,u([$r(10),re(ce)]),u([a(Zn,"Import Levels",Lk),nz(r)]))}),tz=v(function(e,r){return a(rr,u([re(ce),$r(10)]),u([Pc("Import/Export Levels"),a(Mk,e,r),a(az,e,r)]))}),iz={$:5},oz={$:7},cz={$:6},$z={$:4},lz={$:3},uz=function(e){var r=e;return r.p},vz=function(e){return un(uz(e))+1},fz=function(e){var r=e;return 1+un(r.p)+un(r.G)},mz=v(function(e,r){return a(An,u([$r(10)]),u([a(Zn,"<",lz),a(ke,u([dn(22),Mp,Vr(Vo)]),hr(za(u([D(vz(r.l))," / ",D(fz(r.l))])))),a(Zn,">",$z)]))}),sz=v(function(e,r){return a(rr,M,u([Pc("Level Selector"),a(An,u([$r(10)]),u([a(mz,e,r),a(Zn,"Add level",iz),a(Zn,"Remove level",cz),a(Zn,"Move level up",oz)]))]))}),dz=function(e){return{$:2,a:e}},pz={$:1},gz={$:9},hz=v(function(e,r){return P(Qe,ot,Ur,a(S,Ti(gz),a(S,re(ce),a(S,$r(5),e))),He(r))}),bz=v(function(e,r){return a(rr,M,u([Pc("Polygon editor"),function(){var n=r.m.a0;if(n.$===1){var t=n.a;return a(rr,u([$r(10)]),u([a(hz,u([re(ce),nn(16),Vr(gi),dn(16),xr(At)]),u([hr("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. "),hr("After you are finished drawing, click the button below.")])),a(Zn,"Finish drawing polygon",dz(t))]))}else return a(Zn,"Start drawing a polygon",pz)}()]))}),_z=v(function(e,r){return r.m.c8?u([a(bz,e,r),a(sz,e,r),a(tz,e,r),a(Ck,e,r)]):M}),yz=function(e){return{$:0,a:e}},Sz=jl(1),wz=v(function(e,r){return a(ms,M,{gr:r.m.c8,g8:gs,dc:a(Sz,M,hr("Editor")),e9:yz})}),xz=v(function(e,r){return a(rr,u([re(ce),we(ce)]),u([a(rr,u([Cl,zs,re(Fe(500)),we(ce),nn(20),$r(20),Vr(vc),dn(13)]),a(S,a(wz,e,r),a(_z,e,r)))]))}),Pz=zr(N2,bk,MS,_y,sy,xz,sw);const Cz={Main:{init:Pz(a(ae,function(e){return Ye({hk:e})},a(K,"inputs",a(ae,function(e){return a(ae,function(r){return a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return Ye({gv:c,bD:o,eg:i,eB:t,fh:n,bo:r,iO:e})},a(K,"clock",Ae))},a(K,"devicePixelRatio",Ae))},a(K,"dt",Ae))},a(K,"keyboard",a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function($){return a(ae,function(l){return a(ae,function(f){return a(ae,function(s){return a(ae,function(d){return Ye({f1:d,gz:s,ef:f,gM:l,hp:$,hP:c,hV:o,fv:i,fF:t})},a(K,"alt",We))},a(K,"control",We))},a(K,"down",We))},a(K,"downs",on(bt)))},a(K,"left",We))},a(K,"pressedKeys",on(bt)))},a(K,"right",We))},a(K,"shift",We))},a(K,"up",We))))},a(K,"pointer",a(ae,function(n){return a(ae,function(t){return a(ae,function(i){return a(ae,function(o){return a(ae,function(c){return a(ae,function($){return a(ae,function(l){return a(ae,function(f){return Ye({ef:f,hl:l,hw:$,hW:c,hX:o,fF:i,iS:t,iW:n})},a(K,"down",We))},a(K,"isDown",We))},a(K,"move",We))},a(K,"rightDown",We))},a(K,"rightUp",We))},a(K,"up",We))},a(K,"x",Ae))},a(K,"y",Ae))))},a(K,"screen",a(ae,function(r){return a(ae,function(n){return Ye({g3:n,iQ:r})},a(K,"height",Ae))},a(K,"width",Ae))))},a(K,"wheel",a(ae,function(e){return a(ae,function(r){return Ye({gE:r,gF:e})},a(K,"deltaX",Ae))},a(K,"deltaY",Ae)))))))(0)}},le={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},kz=e=>{const r=p=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(p.code),n=p=>["AltLeft","AltRight"].includes(p.code),t=p=>["ShiftLeft","ShiftRight"].includes(p.code),i=p=>p.code=="ArrowLeft",o=p=>p.code=="ArrowRight",c=p=>p.code=="ArrowUp",$=p=>p.code=="ArrowDown",l=p=>p.button==0,f=p=>p.button==2;function s(p){p.keyboard.pressedKeys=[],p.keyboard.control=!1,p.keyboard.alt=!1,p.keyboard.shift=!1,p.keyboard.left=!1,p.keyboard.right=!1,p.keyboard.up=!1,p.keyboard.down=!1,p.pointer.isDown=!1}function d(p){p.keyboard.downs=[],p.pointer.down=!1,p.pointer.move=!1,p.pointer.up=!1,p.pointer.rightDown=!1,p.pointer.rightUp=!1,p.wheel.deltaX=0,p.wheel.deltaY=0}window.addEventListener("keydown",p=>{p.repeat||(le.keyboard.downs.push(p.code),le.keyboard.pressedKeys.push(p.code),r(p)&&(le.keyboard.control=!0),n(p)&&(le.keyboard.alt=!0),t(p)&&(console.log("yo"),le.keyboard.shift=!0),i(p)&&(le.keyboard.left=!0),o(p)&&(le.keyboard.right=!0),c(p)&&(le.keyboard.up=!0),$(p)&&(console.log("yey"),le.keyboard.down=!0))}),window.addEventListener("keyup",p=>{le.keyboard.pressedKeys=le.keyboard.pressedKeys.filter(w=>w!=p.code),r(p)&&(le.keyboard.control=!1,le.keyboard.pressedKeys=[]),n(p)&&(le.keyboard.alt=!1),t(p)&&(le.keyboard.shift=!1),i(p)&&(le.keyboard.left=!1),o(p)&&(le.keyboard.right=!1),c(p)&&(le.keyboard.up=!1),$(p)&&(le.keyboard.down=!1)}),window.addEventListener("pointerdown",p=>{le.pointer.x=-.5*le.screen.width+p.pageX,le.pointer.y=.5*le.screen.height-p.pageY,l(p)&&(le.pointer.down=!0,le.pointer.isDown=!0),f(p)&&(le.pointer.rightDown=!0)}),window.addEventListener("pointermove",p=>{le.pointer.move=!0,le.pointer.x=-.5*le.screen.width+p.pageX,le.pointer.y=.5*le.screen.height-p.pageY}),window.addEventListener("pointerup",p=>{l(p)&&(le.pointer.up=!0,le.pointer.isDown=!1),f(p)&&(le.pointer.rightUp=!0)}),window.addEventListener("pointercancel",p=>{l(p)&&(le.pointer.up=!0,le.pointer.isDown=!1),f(p)&&(le.pointer.rightUp=!0)}),window.addEventListener("wheel",p=>{le.wheel.deltaX=p.deltaX,le.wheel.deltaY=p.deltaY}),window.addEventListener("blur",p=>{s(le)}),window.addEventListener("focus",p=>{s(le)}),window.addEventListener("visibilitychange",p=>{s(le)}),window.addEventListener("resize",()=>{le.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(p){const w=p/1e3,y=w-le.clock;y<.009||(le.dt=y,le.clock=w,e.ports.tick.send(le),d(le)),window.requestAnimationFrame(b)}},zz=Cz.Main.init({node:document.querySelector("#app div"),flags:{inputs:le}});kz(zz);
