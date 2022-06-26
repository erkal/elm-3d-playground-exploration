const Id=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Id();function Rn(e,r,n){return n.a=e,n.f=r,n}function v(e){return Rn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return Rn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function U(e){return Rn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Ye(e){return Rn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Sr(e){return Rn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return e(r,n,t,i,o,c)}}}}}})}function yi(e){return Rn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return e(r,n,t,i,o,c,l)}}}}}}})}function Se(e){return Rn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return e(r,n,t,i,o,c,l,$)}}}}}}}})}function cc(e){return Rn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return e(r,n,t,i,o,c,l,$,m)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function s(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function T(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function N(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function lr(e,r,n,t,i,o,c){return e.a===6?e.f(r,n,t,i,o,c):e(r)(n)(t)(i)(o)(c)}function lc(e,r,n,t,i,o,c,l){return e.a===7?e.f(r,n,t,i,o,c,l):e(r)(n)(t)(i)(o)(c)(l)}function bt(e,r,n,t,i,o,c,l,$){return e.a===8?e.f(r,n,t,i,o,c,l,$):e(r)(n)(t)(i)(o)(c)(l)($)}function Ed(e,r,n,t,i,o,c,l,$,m){return e.a===9?e.f(r,n,t,i,o,c,l,$,m):e(r)(n)(t)(i)(o)(c)(l)($)(m)}var Bd=[];function Fd(e){return e.length}var jd=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Ad=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,P(n,r)}),Vd=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var Jd=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,c=new Array(o),l=0;l<t;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+t]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Rd()),r});function Rd(e){return"<internals>"}function Ba(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function oe(e,r){for(var n,t=[],i=uc(e,r,0,t);i&&(n=t.pop());i=uc(n.a,n.b,0,t));return i}function uc(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ba(5),!1;if(n>100)return t.push(P(e,r)),!0;e.$<0&&(e=zt(e),r=zt(r));for(var i in e)if(!uc(e[i],r[i],n+1,t))return!1;return!0}v(oe);v(function(e,r){return!oe(e,r)});function ue(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=ue(e.a,r.a))||(n=ue(e.b,r.b))?n:ue(e.c,r.c);for(;e.b&&r.b&&!(n=ue(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return ue(e,r)<0});v(function(e,r){return ue(e,r)<1});v(function(e,r){return ue(e,r)>0});v(function(e,r){return ue(e,r)>=0});var Hd=v(function(e,r){var n=ue(e,r);return n<0?G$:n?Rh:H$}),_t=0;function P(e,r){return{a:e,b:r}}function B(e,r,n){return{a:e,b:r,c:n}}function ln(e){return e}function E(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(V);function V(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=un(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=un(e.a,r);return n}var k={$:0};function un(e,r){return{$:1,a:e,b:r}}var Gd=v(un);function u(e){for(var r=k,n=e.length;n--;)r=un(e[n],r);return r}function xi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Wd=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return u(t)});U(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(s(e,r.a,n.a,t.a));return u(i)});Ye(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(T(e,r.a,n.a,t.a,i.a));return u(o)});Sr(function(e,r,n,t,i,o){for(var c=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)c.push(N(e,r.a,n.a,t.a,i.a,o.a));return u(c)});var Od=v(function(e,r){return u(xi(r).sort(function(n,t){return ue(e(n),e(t))}))});v(function(e,r){return u(xi(r).sort(function(n,t){var i=a(e,n,t);return i===H$?0:i===G$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var Ud=v(Math.pow);v(function(e,r){return r%e});var Yd=v(function(e,r){var n=r%e;return e===0?Ba(11):n>0&&e<0||n<0&&e>0?n+e:n}),qd=Math.PI,Zd=Math.cos,Xd=Math.sin,Qd=Math.tan,Kd=Math.acos,ep=v(Math.atan2);function rp(e){return e}function np(e){return e===1/0||e===-1/0}var ap=Math.ceil,tp=Math.floor,ip=Math.round,op=Math.sqrt,r$=Math.log,cp=isNaN;function lp(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var up=v(function(e,r){return e+r});function $p(e){var r=e.charCodeAt(0);return isNaN(r)?A:j(55296<=r&&r<=56319?P(ln(e[0]+e[1]),e.slice(2)):P(ln(e[0]),e.slice(1)))}v(function(e,r){return e+r});function vp(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(ln(r[i]+r[i+1])),i+=2;continue}t[i]=e(ln(r[i])),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(ln(o))&&n.push(o)}return n.join("")});function fp(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=a(e,ln(o),r)}return r});var mp=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,ln(i),r)}return r}),sp=v(function(e,r){return r.split(e)}),dp=v(function(e,r){return r.join(e)}),pp=M(function(e,r,n){return n.slice(e,r)});function hp(e){return u(e.trim().split(/\s+/g))}function gp(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(ln(t)))return!0}return!1});var bp=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(ln(t)))return!1}return!0}),_p=v(function(e,r){return r.indexOf(e)>-1}),yp=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var xp=v(function(e,r){var n=e.length;if(n<1)return k;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return u(i)});function n$(e){return e+""}function wp(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return A;r=10*r+o-48}return i==t?A:j(n==45?-r:r)}function Sp(e){if(e.length===0||/[\sxbo]/.test(e))return A;var r=+e;return r===r?j(r):A}function Cp(e){return xi(e).join("")}function zp(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Pp(e){return ln(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Lp(e){return{$:0,a:e}}function Tp(e){return{$:1,a:e}}function wi(e){return{$:2,b:e}}var Mp=wi(function(e){return typeof e!="number"?Nr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?Be(e):Nr("an INT",e)}),kp=wi(function(e){return typeof e=="boolean"?Be(e):Nr("a BOOL",e)}),Dp=wi(function(e){return typeof e=="number"?Be(e):Nr("a FLOAT",e)}),Np=wi(function(e){return typeof e=="string"?Be(e):e instanceof String?Be(e+""):Nr("a STRING",e)});function Ip(e){return{$:3,b:e}}var Ep=v(function(e,r){return{$:6,d:e,b:r}}),Bp=v(function(e,r){return{$:7,e,b:r}});function Hn(e,r){return{$:9,f:e,g:r}}var Fp=v(function(e,r){return{$:10,b:r,h:e}}),jp=v(function(e,r){return Hn(e,[r])}),Ap=M(function(e,r,n){return Hn(e,[r,n])}),Vp=U(function(e,r,n,t){return Hn(e,[r,n,t])});Ye(function(e,r,n,t,i){return Hn(e,[r,n,t,i])});Sr(function(e,r,n,t,i,o){return Hn(e,[r,n,t,i,o])});yi(function(e,r,n,t,i,o,c){return Hn(e,[r,n,t,i,o,c])});Se(function(e,r,n,t,i,o,c,l){return Hn(e,[r,n,t,i,o,c,l])});cc(function(e,r,n,t,i,o,c,l,$){return Hn(e,[r,n,t,i,o,c,l,$])});var Jp=v(function(e,r){try{var n=JSON.parse(r);return Dr(e,n)}catch(t){return $r(a(Lc,"This is not valid JSON! "+t.message,Cr(r)))}}),a$=v(function(e,r){return Dr(e,ja(r))});function Dr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Be(e.c):Nr("null",r);case 3:return Si(r)?t$(e.b,r,u):Nr("a LIST",r);case 4:return Si(r)?t$(e.b,r,Rp):Nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Nr("an OBJECT with a field named `"+n+"`",r);var t=Dr(e.b,r[n]);return qr(t)?t:$r(a(W$,n,t.a));case 7:var i=e.e;if(!Si(r))return Nr("an ARRAY",r);if(i>=r.length)return Nr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var t=Dr(e.b,r[i]);return qr(t)?t:$r(a(O$,i,t.a));case 8:if(typeof r!="object"||r===null||Si(r))return Nr("an OBJECT",r);var o=k;for(var c in r)if(r.hasOwnProperty(c)){var t=Dr(e.b,r[c]);if(!qr(t))return $r(a(W$,c,t.a));o=un(P(c,t.a),o)}return Be(Me(o));case 9:for(var l=e.f,$=e.g,m=0;m<$.length;m++){var t=Dr($[m],r);if(!qr(t))return t;l=l(t.a)}return Be(l);case 10:var t=Dr(e.b,r);return qr(t)?Dr(e.h(t.a),r):t;case 11:for(var p=k,d=e.g;d.b;d=d.b){var t=Dr(d.a,r);if(qr(t))return t;p=un(t.a,p)}return $r(Hh(Me(p)));case 1:return $r(a(Lc,e.a,Cr(r)));case 0:return Be(e.a)}}function t$(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var c=Dr(e,r[o]);if(!qr(c))return $r(a(O$,o,c.a));i[o]=c.a}return Be(n(i))}function Si(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Rp(e){return a(tg,e.length,function(r){return e[r]})}function Nr(e,r){return $r(a(Lc,"Expecting "+e,Cr(r)))}function Fa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Fa(e.b,r.b);case 6:return e.d===r.d&&Fa(e.b,r.b);case 7:return e.e===r.e&&Fa(e.b,r.b);case 9:return e.f===r.f&&i$(e.g,r.g);case 10:return e.h===r.h&&Fa(e.b,r.b);case 11:return i$(e.g,r.g)}}function i$(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!Fa(e[t],r[t]))return!1;return!0}var Hp=v(function(e,r){return JSON.stringify(ja(r),null,e)+""});function Cr(e){return e}function ja(e){return e}function o$(){return[]}function Gp(){return{}}var Wp=M(function(e,r,n){return n[e]=ja(r),n});function c$(e){return v(function(r,n){return n.push(ja(e(r))),n})}var Op=Cr(null);function $a(e){return{$:0,a:e}}function Up(e){return{$:1,a:e}}function Tn(e){return{$:2,b:e,c:null}}var $c=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Yp(e){return{$:5,b:e}}var qp=0;function vc(e){var r={$:0,e:qp++,f:e,g:null,h:[]};return mc(r),r}function l$(e){return Tn(function(r){r($a(vc(e)))})}function u$(e,r){e.h.push(r),mc(e)}var Zp=v(function(e,r){return Tn(function(n){u$(e,r),n($a(_t))})}),fc=!1,$$=[];function mc(e){if($$.push(e),!fc){for(fc=!0;e=$$.shift();)Xp(e);fc=!1}}function Xp(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,mc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}U(function(e,r,n,t){return sc(r,t,e.g7,e.iC,e.ib,function(){return function(){}})});function sc(e,r,n,t,i,o){var c=a(a$,e,Cr(r?r.flags:void 0));qr(c)||Ba(2);var l={},$=n(c.a),m=$.a,p=o(g,m),d=Qp(l,g);function g(f,_){var y=a(t,f,m);p(m=y.a,_),m$(l,y.b,i(m))}return m$(l,$.b,i(m)),d?{ports:d}:{}}var $n={};function Qp(e,r){var n;for(var t in $n){var i=$n[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=e0(i,r)}return n}function Kp(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function e0(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,c=e.f;function l($){return a($c,l,Yp(function(m){var p=m.a;return m.$===0?s(i,n,p,$):o&&c?T(t,n,p.i,p.j,$):s(t,n,o?p.i:p.j,$)}))}return n.h=vc(a($c,l,e.b))}var r0=v(function(e,r){return Tn(function(n){e.g(r),n($a(_t))})});v(function(e,r){return a(Zp,e.h,{$:0,a:r})});function v$(e){return function(r){return{$:1,k:e,l:r}}}function n0(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var f$=[],dc=!1;function m$(e,r,n){if(f$.push({p:e,q:r,r:n}),!dc){dc=!0;for(var t;t=f$.shift();)a0(t.p,t.q,t.r);dc=!1}}function a0(e,r,n){var t={};Ci(!0,r,t,null),Ci(!1,n,t,null);for(var i in e)u$(e[i],{$:"fx",a:t[i]||{i:k,j:k}})}function Ci(e,r,n,t){switch(r.$){case 1:var i=r.k,o=t0(e,i,t,r.l);n[i]=i0(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)Ci(e,c.a,n,t);return;case 3:Ci(e,r.o,n,{s:r.n,t});return}}function t0(e,r,n,t){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?$n[r].e:$n[r].f;return a(o,i,t)}function i0(e,r,n){return n=n||{i:k,j:k},e?n.i=un(r,n.i):n.j=un(r,n.j),n}function o0(e){$n[e]&&Ba(3)}v(function(e,r){return r});function c0(e,r){return o0(e),$n[e]={f:l0,u:r,a:u0},v$(e)}var l0=v(function(e,r){return function(n){return e(r(n))}});function u0(e,r){var n=k,t=$n[e].u,i=$a(null);$n[e].b=i,$n[e].c=M(function(c,l,$){return n=l,i});function o(c){var l=a(a$,t,Cr(c));qr(l)||Ba(4,e,l.a);for(var $=l.a,m=n;m.b;m=m.b)r(m.a($))}return{send:o}}var zi,Mn=typeof document!="undefined"?document:{};function pc(e,r){e.appendChild(r)}U(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(Wn(e,function(){}),i),{}});function hc(e){return{$:0,a:e}}var s$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:bc(n),e:i,f:e,b:o}})}),vn=s$(void 0),$0=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var c=t.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:bc(n),e:i,f:e,b:o}})}),v0=$0(void 0);function f0(e,r,n,t){return{$:3,d:bc(e),g:r,h:n,i:t}}var m0=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Gn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Gn([e,r],function(){return e(r)})});M(function(e,r,n){return Gn([e,r,n],function(){return a(e,r,n)})});var s0=U(function(e,r,n,t){return Gn([e,r,n,t],function(){return s(e,r,n,t)})});Ye(function(e,r,n,t,i){return Gn([e,r,n,t,i],function(){return T(e,r,n,t,i)})});Sr(function(e,r,n,t,i,o){return Gn([e,r,n,t,i,o],function(){return N(e,r,n,t,i,o)})});yi(function(e,r,n,t,i,o,c){return Gn([e,r,n,t,i,o,c],function(){return lr(e,r,n,t,i,o,c)})});Se(function(e,r,n,t,i,o,c,l){return Gn([e,r,n,t,i,o,c,l],function(){return lc(e,r,n,t,i,o,c,l)})});cc(function(e,r,n,t,i,o,c,l,$){return Gn([e,r,n,t,i,o,c,l,$],function(){return bt(e,r,n,t,i,o,c,l,$)})});var d$=v(function(e,r){return{$:"a0",n:e,o:r}}),d0=v(function(e,r){return{$:"a1",n:e,o:r}}),gc=v(function(e,r){return{$:"a2",n:e,o:r}}),Ur=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function p$(e){return e=="script"?"p":e}function p0(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function h0(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function g0(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function h$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var b0=v(function(e,r){return r.$==="a0"?a(d$,r.n,_0(e,r.o)):r});function _0(e,r){var n=Ec(r);return{$:r.$,a:n?s(Ni,n<3?y0:x0,Re(e),r.a):a(va,e,r.a)}}var y0=v(function(e,r){return P(e(r.a),r.b)}),x0=v(function(e,r){return{aI:e(r.aI),dS:r.dS,dI:r.dI}});function bc(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?g$(r,i,ja(o)):r[i]=ja(o);continue}var c=r[t]||(r[t]={});t==="a3"&&i==="class"?g$(c,i,o):c[i]=o}return r}function g$(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Wn(e,r){var n=e.$;if(n===5)return Wn(e.k||(e.k=e.m()),r);if(n===0)return Mn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},c=Wn(t,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return _c(c,r,e.d),c}var c=e.f?Mn.createElementNS(e.f,e.c):Mn.createElement(e.c);zi&&e.c=="a"&&c.addEventListener("click",zi(c)),_c(c,r,e.d);for(var l=e.e,$=0;$<l.length;$++)pc(c,Wn(n===1?l[$]:l[$].b,r));return c}function _c(e,r,n){for(var t in n){var i=n[t];t==="a1"?w0(e,i):t==="a0"?z0(e,r,i):t==="a3"?S0(e,i):t==="a4"?C0(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function w0(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function S0(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function C0(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function z0(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=t[i];if(!o){e.removeEventListener(i,c),t[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=P0(r,o),e.addEventListener(i,c,yc&&{passive:Ec(o)<2}),t[i]=c}}var yc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yc=!0}}))}catch{}function P0(e,r){function n(t){var i=n.q,o=Dr(i.a,t);if(!!qr(o)){for(var c=Ec(i),l=o.a,$=c?c<3?l.a:l.aI:l,m=c==1?l.b:c==3&&l.dS,p=(m&&t.stopPropagation(),(c==2?l.b:c==3&&l.dI)&&t.preventDefault(),e),d,g;d=p.j;){if(typeof d=="function")$=d($);else for(var g=d.length;g--;)$=d[g]($);p=p.p}p($,m)}}return n.q=r,n}function L0(e,r){return e.$==r.$&&Fa(e.a,r.a)}function b$(e,r){var n=[];return Yr(e,r,n,0),n}function ur(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Yr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=B0(r),o=1;else{ur(n,0,t,r);return}switch(o){case 5:for(var c=e.l,l=r.l,$=c.length,m=$===l.length;m&&$--;)m=c[$]===l[$];if(m){r.k=e.k;return}r.k=r.m();var p=[];Yr(e.k,r.k,p,0),p.length>0&&ur(n,1,t,p);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var y=r.k;y.$===4;)f=!0,typeof g!="object"?g=[g,y.j]:g.push(y.j),y=y.k;if(f&&d.length!==g.length){ur(n,0,t,r);return}(f?!T0(d,g):d!==g)&&ur(n,2,t,g),Yr(_,y,n,t+1);return;case 0:e.a!==r.a&&ur(n,3,t,r.a);return;case 1:_$(e,r,n,t,M0);return;case 2:_$(e,r,n,t,k0);return;case 3:if(e.h!==r.h){ur(n,0,t,r);return}var w=xc(e.d,r.d);w&&ur(n,4,t,w);var S=r.i(e.g,r.g);S&&ur(n,5,t,S);return}}}function T0(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function _$(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){ur(n,0,t,r);return}var o=xc(e.d,r.d);o&&ur(n,4,t,o),i(e,r,n,t)}function xc(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=xc(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&L0(c,l)||(t=t||{},t[i]=l)}for(var $ in r)$ in e||(t=t||{},t[$]=r[$]);return t}function M0(e,r,n,t){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?ur(n,6,t,{v:l,i:c-l}):c<l&&ur(n,7,t,{v:c,e:o});for(var $=c<l?c:l,m=0;m<$;m++){var p=i[m];Yr(p,o[m],n,++t),t+=p.b||0}}function k0(e,r,n,t){for(var i=[],o={},c=[],l=e.e,$=r.e,m=l.length,p=$.length,d=0,g=0,f=t;d<m&&g<p;){var _=l[d],y=$[g],w=_.a,S=y.a,x=_.b,z=y.b,F=void 0,Z=void 0;if(w===S){f++,Yr(x,z,i,f),f+=x.b||0,d++,g++;continue}var ee=l[d+1],Y=$[g+1];if(ee){var Q=ee.a,K=ee.b;Z=S===Q}if(Y){var R=Y.a,ie=Y.b;F=w===R}if(F&&Z){f++,Yr(x,ie,i,f),yt(o,i,w,z,g,c),f+=x.b||0,f++,xt(o,i,w,K,f),f+=K.b||0,d+=2,g+=2;continue}if(F){f++,yt(o,i,S,z,g,c),Yr(x,ie,i,f),f+=x.b||0,d+=1,g+=2;continue}if(Z){f++,xt(o,i,w,x,f),f+=x.b||0,f++,Yr(K,z,i,f),f+=K.b||0,d+=2,g+=1;continue}if(ee&&Q===R){f++,xt(o,i,w,x,f),yt(o,i,S,z,g,c),f+=x.b||0,f++,Yr(K,ie,i,f),f+=K.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=l[d],x=_.b;xt(o,i,_.a,x,f),f+=x.b||0,d++}for(;g<p;){var de=de||[],y=$[g];yt(o,i,y.a,y.b,void 0,de),g++}(i.length>0||c.length>0||de)&&ur(n,8,t,{w:i,x:c,y:de})}var y$="_elmW6BL";function yt(e,r,n,t,i,o){var c=e[n];if(!c){c={c:0,z:t,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Yr(c.z,t,l,c.r),c.r=i,c.s.s={w:l,A:c};return}yt(e,r,n+y$,t,i,o)}function xt(e,r,n,t,i){var o=e[n];if(!o){var c=ur(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Yr(t,o.z,l,i),ur(r,9,i,{w:l,A:o});return}xt(e,r,n+y$,t,i)}function x$(e,r,n,t){wt(e,r,n,0,0,r.b,t)}function wt(e,r,n,t,i,o,c){for(var l=n[t],$=l.r;$===i;){var m=l.$;if(m===1)x$(e,r.k,l.s,c);else if(m===8){l.t=e,l.u=c;var p=l.s.w;p.length>0&&wt(e,r,p,0,i,o,c)}else if(m===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var p=d.w;p.length>0&&wt(e,r,p,0,i,o,c)}}else l.t=e,l.u=c;if(t++,!(l=n[t])||($=l.r)>o)return t}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return wt(e,f,n,t,i+1,o,e.elm_event_node_ref)}for(var _=r.e,y=e.childNodes,w=0;w<_.length;w++){i++;var S=g===1?_[w]:_[w].b,x=i+(S.b||0);if(i<=$&&$<=x&&(t=wt(y[w],S,n,t,i,x,c),!(l=n[t])||($=l.r)>o))return t;i=x}return t}function w$(e,r,n,t){return n.length===0?e:(x$(e,r,n,t),Pi(e,n))}function Pi(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=D0(i,t);i===e&&(e=o)}return e}function D0(e,r){switch(r.$){case 0:return N0(e,r.s,r.u);case 4:return _c(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Pi(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,t=n.e,i=n.v,o=e.childNodes[i];i<t.length;i++)e.insertBefore(Wn(t[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var c=n.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=Pi(e,n.w),e;case 8:return I0(e,r);case 5:return r.s(e);default:Ba(10)}}function N0(e,r,n){var t=e.parentNode,i=Wn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function I0(e,r){var n=r.s,t=E0(n.y,r);e=Pi(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,$=l.c===2?l.s:Wn(l.z,r.u);e.insertBefore($,e.childNodes[c.r])}return t&&pc(e,t),e}function E0(e,r){if(!!e){for(var n=Mn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;pc(n,o.c===2?o.s:Wn(o.z,r.u))}return n}}function wc(e){if(e.nodeType===3)return hc(e.textContent);if(e.nodeType!==1)return hc("");for(var r=k,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,c=i.value;r=un(a(Ur,o,c),r)}for(var l=e.tagName.toLowerCase(),$=k,m=e.childNodes,t=m.length;t--;)$=un(wc(m[t]),$);return s(vn,l,r,$)}function B0(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var F0=U(function(e,r,n,t){return sc(r,t,e.g7,e.iC,e.ib,function(i,o){var c=e.iE,l=t.node,$=wc(l);return S$(o,function(m){var p=c(m),d=b$($,p);l=w$(l,$,d,i),$=p})})});U(function(e,r,n,t){return sc(r,t,e.g7,e.iC,e.ib,function(i,o){var c=e.dQ&&e.dQ(i),l=e.iE,$=Mn.title,m=Mn.body,p=wc(m);return S$(o,function(d){zi=c;var g=l(d),f=vn("body")(k)(g.f6),_=b$(p,f);m=w$(m,p,_,i),p=f,zi=0,$!==g.iw&&(Mn.title=$=g.iw)})})});var Li=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function S$(e,r){r(e);var n=0;function t(){n=n===1?0:(Li(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Li(t),n=2)}}v(function(e,r){return a(jc,kt,Tn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(jc,kt,Tn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(jc,kt,Tn(function(){history.replaceState({},"",r),e()}))});var j0={addEventListener:function(){},removeEventListener:function(){}},A0=typeof window!="undefined"?window:j0;M(function(e,r,n){return l$(Tn(function(t){function i(o){vc(n(o))}return e.addEventListener(r,i,yc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Dr(e,r);return qr(n)?j(n.a):A});function C$(e,r){return Tn(function(n){Li(function(){var t=document.getElementById(e);n(t?$a(r(t)):Up(ig(e)))})})}function V0(e){return Tn(function(r){Li(function(){r($a(e()))})})}v(function(e,r){return C$(r,function(n){return n[e](),_t})});v(function(e,r){return V0(function(){return A0.scroll(e,r),_t})});M(function(e,r,n){return C$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,_t})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var J0=v(function(e,r){var n="g";e.hp&&(n+="m"),e.gg&&(n+="i");try{return j(new RegExp(r,n))}catch{return A}});v(function(e,r){return r.match(e)!==null});var R0=M(function(e,r,n){for(var t=[],i=0,o=n,c=r.lastIndex,l=-1,$;i++<e&&($=r.exec(o))&&l!=r.lastIndex;){for(var m=$.length-1,p=new Array(m);m>0;){var d=$[m];p[--m]=d?j(d):A}t.push(T(Rf,$[0],$.index,i,u(p))),l=r.lastIndex}return r.lastIndex=c,u(t)});U(function(e,r,n,t){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,$=new Array(l);l>0;){var m=arguments[l];$[--l]=m?j(m):A}return n(T(Rf,c,arguments[arguments.length-2],i,u($)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(t);if(!l)break;i.push(t.slice(o,l.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=c,u(i)});var z$=0;function St(e,r){for(;r.b;r=r.b)e(r.a)}function Sc(e){for(var r=0;e.b;e=e.b)r++;return r}var H0=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},G0=Ye(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),W0=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),O0=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),U0=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Y0=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),q0=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Z0=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),X0=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Q0=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),K0=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},eh=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},rh=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},nh=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},P$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},L$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},ah=function(e){e.gl.disable(e.gl.CULL_FACE)},th=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},ih=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},oh=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},T$=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],ch=[eh,rh,nh,P$,L$,ah,th,ih,oh];function M$(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function lh(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function k$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function uh(e,r,n,t){for(var i=n.a.eg,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(f,_,y,w,S){var x;if(i===1)for(x=0;x<_;x++)f[y++]=_===1?w[S]:w[S][x];else o.forEach(function(z){for(x=0;x<_;x++)f[y++]=_===1?w[z][S]:w[z][S][x]})}var $=k$(e,r.type);if($===void 0)throw new Error("No info available for: "+r.type);var m=0,p=$.size*$.arraySize*i,d=new $.type(Sc(n.b)*p);St(function(f){l(d,$.size*$.arraySize,m,f,t[r.name]||r.name),m+=p},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function $h(e,r){if(r.a.et>0){var n=e.createBuffer(),t=vh(r.c,r.a.et);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.eg*Sc(r.b),indexBuffer:null,buffers:{}}}function vh(e,r){var n=new Uint32Array(Sc(e)*r),t=0,i;return St(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function D$(e,r){return e+"#"+r}var N$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),P$(n),L$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,$;if(o.b.id&&o.c.id&&(c=D$(o.b.id,o.c.id),l=n.programs[c]),!l){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=z$++,m||(m=M$(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=m);var p;o.c.id?p=n.shaders[o.c.id]:o.c.id=z$++,p||(p=M$(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=p);var d=lh(t,m,p);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=fh(t,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var g=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for($=0;$<g;$++){var f=t.getActiveAttrib(d,$),_=t.getAttribLocation(d,f.name);l.activeAttributes.push(f),l.activeAttributeLocations.push(_)}c=D$(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(t.useProgram(l.glProgram),n.lastProgId=c),mh(l.uniformSetters,o.e);var y=n.buffers.get(o.d);for(y||(y=$h(t,o.d),n.buffers.set(o.d,y)),$=0;$<l.activeAttributes.length;$++){f=l.activeAttributes[$],_=l.activeAttributeLocations[$],y.buffers[f.name]===void 0&&(y.buffers[f.name]=uh(t,f,o.d,l.attributes)),t.bindBuffer(t.ARRAY_BUFFER,y.buffers[f.name]);var w=k$(t,f.type);if(w.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,w.size,w.baseType,!1,0,0);else for(var S=w.size*4,x=S*w.arraySize,z=0;z<w.arraySize;z++)t.enableVertexAttribArray(_+z),t.vertexAttribPointer(_+z,w.size,w.baseType,!1,x,S*z)}for(n.toggle=!n.toggle,St(K4(n),o.a),$=0;$<T$.length;$++){var F=n[T$[$]];F.toggle!==n.toggle&&F.enabled&&(ch[$](n),F.enabled=!1,F.toggle=n.toggle)}y.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,y.indexBuffer),t.drawElements(o.d.a.e3,y.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.e3,0,y.numIndices)}}return St(i,e.g),r});function fh(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function $(f,_){var y=_.name,w=e.getUniformLocation(f,y);switch(_.type){case e.INT:return function(x){o[y]!==x&&(e.uniform1i(w,x),o[y]=x)};case e.FLOAT:return function(x){o[y]!==x&&(e.uniform1f(w,x),o[y]=x)};case e.FLOAT_VEC2:return function(x){o[y]!==x&&(e.uniform2f(w,x[0],x[1]),o[y]=x)};case e.FLOAT_VEC3:return function(x){o[y]!==x&&(e.uniform3f(w,x[0],x[1],x[2]),o[y]=x)};case e.FLOAT_VEC4:return function(x){o[y]!==x&&(e.uniform4f(w,x[0],x[1],x[2],x[3]),o[y]=x)};case e.FLOAT_MAT4:return function(x){o[y]!==x&&(e.uniformMatrix4fv(w,!1,new Float32Array(x)),o[y]=x)};case e.SAMPLER_2D:var S=c++;return function(x){e.activeTexture(e.TEXTURE0+S);var z=l.textures.get(x);z||(z=x.gu(e),l.textures.set(x,z)),e.bindTexture(e.TEXTURE_2D,z),o[y]!==x&&(e.uniform1i(w,S),o[y]=x)};case e.BOOL:return function(x){o[y]!==x&&(e.uniform1i(w,x),o[y]=x)};default:return function(){}}}for(var m={},p=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<p;d++){var g=e.getActiveUniform(i,d);m[t[g.name]||g.name]=$(i,g)}return m}function mh(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var sh=M(function(e,r,n){return f0(r,{g:n,f:{},h:e},yh,xh)}),dh=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),ph=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),hh=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),gh=v(function(e,r){e.contextAttributes.antialias=!0}),bh=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),_h=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function yh(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};St(function(i){return a(Q4,r,i)},e.h);var n=Mn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),H0(function(){return a(N$,e,n)})):(n=Mn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function xh(e,r){return r.f=e.f,N$(r)}var wh=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Sh(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Sh(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Cc=new Float64Array(3),I$=new Float64Array(3),E$=new Float64Array(3),Ch=M(function(e,r,n){return new Float64Array([e,r,n])}),zh=function(e){return e[0]},Ph=function(e){return e[1]},Lh=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Th=function(e){return new Float64Array([e.iJ,e.iN,e.d4])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function B$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(B$);function F$(e,r,n){return n===void 0&&(n=new Float64Array(3)),Ti(B$(e,r,n),n)}v(F$);function j$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function Ti(e,r){r===void 0&&(r=new Float64Array(3));var n=1/j$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Mh=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ct=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ct);function zc(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(zc);v(function(e,r){var n,t=Cc,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Ct(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Ct(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Ct(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Ct(r,t)+e[14])/n,i});var kh=U(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Dh=function(e){return{iJ:e[0],iN:e[1],d4:e[2],fH:e[3]}},Nh=function(e){return new Float64Array([e.iJ,e.iN,e.d4,e.fH])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/Ih(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function Ih(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Eh=new Float64Array(16),Bh=new Float64Array(16),Fh=function(e){var r=new Float64Array(16);return r[0]=e.eG,r[1]=e.eK,r[2]=e.eO,r[3]=e.eS,r[4]=e.eH,r[5]=e.eL,r[6]=e.eP,r[7]=e.eT,r[8]=e.eI,r[9]=e.eM,r[10]=e.eQ,r[11]=e.eU,r[12]=e.eJ,r[13]=e.eN,r[14]=e.eR,r[15]=e.eV,r},jh=function(e){return{eG:e[0],eK:e[1],eO:e[2],eS:e[3],eH:e[4],eL:e[5],eP:e[6],eT:e[7],eI:e[8],eM:e[9],eQ:e[10],eU:e[11],eJ:e[12],eN:e[13],eR:e[14],eV:e[15]}};function A$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(t-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(t+n)/(t-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}Sr(A$);U(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return A$(c,l,o,i,n,t)});function V$(e,r,n,t,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(t-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(t+n)/(t-n),c[14]=-(o+i)/(o-i),c[15]=1,c}Sr(V$);U(function(e,r,n,t){return V$(e,r,n,t,-1,1)});function J$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[3],l=e[4],$=e[5],m=e[6],p=e[7],d=e[8],g=e[9],f=e[10],_=e[11],y=e[12],w=e[13],S=e[14],x=e[15],z=r[0],F=r[1],Z=r[2],ee=r[3],Y=r[4],Q=r[5],K=r[6],R=r[7],ie=r[8],de=r[9],Pe=r[10],pe=r[11],be=r[12],Le=r[13],_e=r[14],Je=r[15];return n[0]=t*z+l*F+d*Z+y*ee,n[1]=i*z+$*F+g*Z+w*ee,n[2]=o*z+m*F+f*Z+S*ee,n[3]=c*z+p*F+_*Z+x*ee,n[4]=t*Y+l*Q+d*K+y*R,n[5]=i*Y+$*Q+g*K+w*R,n[6]=o*Y+m*Q+f*K+S*R,n[7]=c*Y+p*Q+_*K+x*R,n[8]=t*ie+l*de+d*Pe+y*pe,n[9]=i*ie+$*de+g*Pe+w*pe,n[10]=o*ie+m*de+f*Pe+S*pe,n[11]=c*ie+p*de+_*Pe+x*pe,n[12]=t*be+l*Le+d*_e+y*Je,n[13]=i*be+$*Le+g*_e+w*Je,n[14]=o*be+m*Le+f*_e+S*Je,n[15]=c*be+p*Le+_*_e+x*Je,n}v(J$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=e[4],l=e[5],$=e[6],m=e[8],p=e[9],d=e[10],g=e[12],f=e[13],_=e[14],y=r[0],w=r[1],S=r[2],x=r[4],z=r[5],F=r[6],Z=r[8],ee=r[9],Y=r[10],Q=r[12],K=r[13],R=r[14];return n[0]=t*y+c*w+m*S,n[1]=i*y+l*w+p*S,n[2]=o*y+$*w+d*S,n[3]=0,n[4]=t*x+c*z+m*F,n[5]=i*x+l*z+p*F,n[6]=o*x+$*z+d*F,n[7]=0,n[8]=t*Z+c*ee+m*Y,n[9]=i*Z+l*ee+p*Y,n[10]=o*Z+$*ee+d*Y,n[11]=0,n[12]=t*Q+c*K+m*R+g,n[13]=i*Q+l*K+p*R+f,n[14]=o*Q+$*K+d*R+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Ti(r,Cc);var t=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,$=Math.sin(e);return n[0]=t*t*l+c,n[1]=i*t*l+o*$,n[2]=o*t*l-i*$,n[3]=0,n[4]=t*i*l-o*$,n[5]=i*i*l+c,n[6]=i*o*l+t*$,n[7]=0,n[8]=t*o*l+i*$,n[9]=i*o*l-t*$,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/j$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,$=Math.cos(e),m=1-$,p=Math.sin(e),d=o*p,g=c*p,f=l*p,_=o*c*m,y=o*l*m,w=c*l*m,S=o*o*m+$,x=_+f,z=y-g,F=_-f,Z=c*c*m+$,ee=w+d,Y=y+g,Q=w-d,K=l*l*m+$,R=n[0],ie=n[1],de=n[2],Pe=n[3],pe=n[4],be=n[5],Le=n[6],_e=n[7],Je=n[8],Ee=n[9],cr=n[10],ca=n[11],pt=n[12],zn=n[13],Pn=n[14],Ea=n[15];return t[0]=R*S+pe*x+Je*z,t[1]=ie*S+be*x+Ee*z,t[2]=de*S+Le*x+cr*z,t[3]=Pe*S+_e*x+ca*z,t[4]=R*F+pe*Z+Je*ee,t[5]=ie*F+be*Z+Ee*ee,t[6]=de*F+Le*Z+cr*ee,t[7]=Pe*F+_e*Z+ca*ee,t[8]=R*Y+pe*Q+Je*K,t[9]=ie*Y+be*Q+Ee*K,t[10]=de*Y+Le*Q+cr*K,t[11]=Pe*Y+_e*Q+ca*K,t[12]=pt,t[13]=zn,t[14]=Pn,t[15]=Ea,t});function Ah(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(Ah);U(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Vh(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(Vh);U(function(e,r,n,t){var i=new Float64Array(16),o=t[0],c=t[1],l=t[2],$=t[3],m=t[4],p=t[5],d=t[6],g=t[7],f=t[8],_=t[9],y=t[10],w=t[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=$,i[4]=m,i[5]=p,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=y,i[11]=w,i[12]=o*e+m*r+f*n+t[12],i[13]=c*e+p*r+_*n+t[13],i[14]=l*e+d*r+y*n+t[14],i[15]=$*e+g*r+w*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],c=r[0],l=r[1],$=r[2],m=r[3],p=r[4],d=r[5],g=r[6],f=r[7],_=r[8],y=r[9],w=r[10],S=r[11];return n[0]=c,n[1]=l,n[2]=$,n[3]=m,n[4]=p,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=y,n[10]=w,n[11]=S,n[12]=c*t+p*i+_*o+r[12],n[13]=l*t+d*i+y*o+r[13],n[14]=$*t+g*i+w*o+r[14],n[15]=m*t+f*i+S*o+r[15],n});M(function(e,r,n){var t=F$(e,r,Cc),i=Ti(zc(n,t,I$),I$),o=Ti(zc(t,i,E$),E$),c=Eh,l=Bh;return c[0]=i[0],c[1]=o[0],c[2]=t[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=t[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=t[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,J$(c,l)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var C=Gd,Mi=Jd,R$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(c,l){if(c.$){var m=c.a;return s(Mi,e,l,m)}else{var $=c.a;return s(Mi,o,l,$)}});return s(Mi,o,s(Mi,e,r,i),t)}),ki=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,$=s(e,t,i,s(ki,e,r,c)),m=o;e=l,r=$,n=m;continue e}}),zt=function(e){return s(ki,M(function(r,n,t){return a(C,P(r,n),t)}),k,e)},Pc=function(e){return s(ki,M(function(r,n,t){return a(C,r,t)}),k,e)},Jh=function(e){var r=e;return Pc(r)},H$=1,Rh=2,G$=0,$r=function(e){return{$:1,a:e}},Lc=v(function(e,r){return{$:3,a:e,b:r}}),W$=v(function(e,r){return{$:0,a:e,b:r}}),O$=v(function(e,r){return{$:1,a:e,b:r}}),Be=function(e){return{$:0,a:e}},Hh=function(e){return{$:2,a:e}},j=function(e){return{$:0,a:e}},A={$:1},Gh=bp,U$=Hp,D=n$,ne=v(function(e,r){return a(dp,e,xi(r))}),Tc=v(function(e,r){return u(a(sp,e,r))}),Y$=function(e){return a(ne,`
    `,a(Tc,`
`,e))},Te=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,c=a(e,t,r),l=i;e=o,r=c,n=l;continue e}else return r}),fn=function(e){return s(Te,v(function(r,n){return n+1}),0,e)},Wh=Wd,Oh=M(function(e,r,n){e:for(;;)if(ue(e,r)<1){var t=e,i=r-1,o=a(C,r,n);e=t,r=i,n=o;continue e}else return n}),kn=v(function(e,r){return s(Oh,e,r,k)}),q$=v(function(e,r){return s(Wh,e,a(kn,0,fn(r)-1),r)}),mn=zp,Z$=function(e){var r=mn(e);return 97<=r&&r<=122},X$=function(e){var r=mn(e);return r<=90&&65<=r},Uh=function(e){return Z$(e)||X$(e)},Yh=function(e){var r=mn(e);return r<=57&&48<=r},qh=function(e){return Z$(e)||X$(e)||Yh(e)},Me=function(e){return s(Te,C,k,e)},Aa=$p,Zh=v(function(e,r){return`

(`+(D(e+1)+(") "+Y$(Xh(r))))}),Xh=function(e){return a(Qh,e,k)},Qh=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,t=e.b,i=function(){var y=Aa(n);if(y.$===1)return!1;var w=y.a,S=w.a,x=w.b;return Uh(S)&&a(Gh,qh,x)}(),o=i?"."+n:"['"+(n+"']"),c=t,l=a(C,o,r);e=c,r=l;continue e;case 1:var $=e.a,t=e.b,m="["+(D($)+"]"),c=t,l=a(C,m,r);e=c,r=l;continue e;case 2:var p=e.a;if(p.b)if(p.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(ne,"",Me(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(D(fn(p))+" ways:"));return a(ne,`

`,a(C,_,a(q$,Zh,p)))}else{var t=p.a,c=t,l=r;e=c,r=l;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ne,"",Me(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(a(ne,"",Me(r))+`:

    `):`Problem with the given value:

`}();return _+(Y$(a(U$,4,f))+(`

`+g))}}),zr=32,Mc=U(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),kc=Bd,Pt=ap,Dc=v(function(e,r){return r$(r)/r$(e)}),Lt=rp,Tt=Pt(a(Dc,2,zr)),Q$=T(Mc,0,Tt,kc,kc),K$=jd,ev=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});var Kh=v(function(e,r){return r(e)}),Va=tp,Nc=Fd,We=v(function(e,r){return ue(e,r)>0?e:r}),eg=function(e){return{$:0,a:e}},Ic=Ad,rg=v(function(e,r){e:for(;;){var n=a(Ic,zr,e),t=n.a,i=n.b,o=a(C,eg(t),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return Me(o)}}),Di=function(e){var r=e.a;return r},ng=v(function(e,r){e:for(;;){var n=Pt(r/zr);if(n===1)return a(Ic,zr,e).a;var t=a(rg,e,k),i=n;e=t,r=i;continue e}}),rv=v(function(e,r){if(r.p){var n=r.p*zr,t=Va(a(Dc,zr,n-1)),i=e?Me(r.F):r.F,o=a(ng,i,r.p);return T(Mc,Nc(r.v)+n,a(We,5,t*Tt),o,r.v)}else return T(Mc,Nc(r.v),Tt,kc,r.v)}),ag=Ye(function(e,r,n,t,i){e:for(;;){if(r<0)return a(rv,!1,{F:t,p:n/zr|0,v:i});var o=ev(s(K$,zr,r,e)),c=e,l=r-zr,$=n,m=a(C,o,t),p=i;e=c,r=l,n=$,t=m,i=p;continue e}}),tg=v(function(e,r){if(e<=0)return Q$;var n=e%zr,t=s(K$,n,e-n,r),i=e-n-zr;return N(ag,r,i,e,k,t)}),qr=function(e){return!e.$},q=Fp,Ce=kp,H=Ep,Fe=Dp,nv=v(function(e,r){return{gp:r.gp,gr:e,c5:r.c5,gF:r.gF,bn:r.bn,aw:r.aw,cO:r.cO,iF:r.iF}}),va=jp,Ni=Ap,Re=Lp,Ec=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},pr=function(e){return e},ig=pr,av=Sr(function(e,r,n,t,i,o){return{em:o,er:r,fc:t,ff:n,fi:e,fj:i}}),og=_p,fa=vp,Ja=pp,Mt=v(function(e,r){return e<1?r:s(Ja,e,fa(r),r)}),Ii=xp,Ei=function(e){return e===""},Bi=v(function(e,r){return e<1?"":s(Ja,0,e,r)}),Bc=wp,tv=Ye(function(e,r,n,t,i){if(Ei(i)||a(og,"@",i))return A;var o=a(Ii,":",i);if(o.b){if(o.b.b)return A;var c=o.a,l=Bc(a(Mt,c+1,i));if(l.$===1)return A;var $=l;return j(lr(av,e,a(Bi,c,i),$,r,n,t))}else return j(lr(av,e,i,A,r,n,t))}),iv=U(function(e,r,n,t){if(Ei(t))return A;var i=a(Ii,"/",t);if(i.b){var o=i.a;return N(tv,e,a(Mt,o,t),r,n,a(Bi,o,t))}else return N(tv,e,"/",r,n,t)}),ov=M(function(e,r,n){if(Ei(n))return A;var t=a(Ii,"?",n);if(t.b){var i=t.a;return T(iv,e,j(a(Mt,i+1,n)),r,a(Bi,i,n))}else return T(iv,e,A,r,n)});v(function(e,r){if(Ei(r))return A;var n=a(Ii,"#",r);if(n.b){var t=n.a;return s(ov,e,j(a(Mt,t+1,r)),a(Bi,t,r))}else return s(ov,e,A,r)});var cg=yp,kt=function(e){},Dt=$a,lg=Dt(0),cv=U(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var c=o.a,l=o.b;if(l.b){var $=l.a,m=l.b;if(m.b){var p=m.a,d=m.b,g=n>500?s(Te,e,r,Me(d)):T(cv,e,r,n+1,d);return a(e,i,a(e,c,a(e,$,a(e,p,g))))}else return a(e,i,a(e,c,a(e,$,r)))}else return a(e,i,a(e,c,r))}else return a(e,i,r)}else return r}),qe=M(function(e,r,n){return T(cv,e,r,0,n)}),W=v(function(e,r){return s(qe,v(function(n,t){return a(C,e(n),t)}),k,r)}),Fi=$c,Fc=v(function(e,r){return a(Fi,function(n){return Dt(e(n))},r)}),ug=M(function(e,r,n){return a(Fi,function(t){return a(Fi,function(i){return Dt(a(e,t,i))},n)},r)}),$g=function(e){return s(qe,ug(C),Dt(k),e)},vg=r0,fg=v(function(e,r){var n=r;return l$(a(Fi,vg(e),n))}),mg=M(function(e,r,n){return a(Fc,function(t){return 0},$g(a(W,fg(e),r)))}),sg=M(function(e,r,n){return Dt(0)}),dg=v(function(e,r){var n=r;return a(Fc,e,n)});$n.Task=Kp(lg,mg,sg,dg);var pg=v$("Task"),jc=v(function(e,r){return pg(a(Fc,e,r))}),hg=F0,gg=lp,ji={$:1},lv=function(e){return{$:2,a:e}},Ac={$:0},Ir=v(function(e,r){return{$:0,a:e,b:r}}),Ze=M(function(e,r,n){return r(e(n))}),ma=function(e){var r=e.b.s;return r.a},bg=function(e){var r=e.a,n=e.b.ab,t=e.b.s,i=e.b.au;if(i.b){var o=i.a,c=i.b;return j(a(Ir,r,{s:o,au:c,ab:a(C,t,n)}))}else return A},ve=v(function(e,r){if(r.$)return e;var n=r.a;return n}),_g=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dT;return(ue(o+r.gF,ma(n).gp)>0?a(Ze,bg,ve(a(Ir,ji,i))):pr)(a(Ir,lv({dT:o+r.gF}),i));default:var c=i.s,l=c.a,$=c.b,m=a(nv,l.gr,E(r,{gp:l.gp+r.gF})),p=a(e,m,$);return a(Ir,Ac,{s:P(m,p),au:k,ab:a(C,i.s,i.ab)})}}),uv=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),yg=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,c=i,l=a(C,t,n);e=o,r=c,n=l;continue e}else return n}}),xg=v(function(e,r){return Me(s(yg,e,r,k))}),$v=M(function(e,r,n){if(r<=0)return k;{var t=P(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,x=i.a,o=i.b,c=o.a;return u([x,c]);case 3:if(t.b.b.b.b){var l=t.b,x=l.a,$=l.b,c=$.a,m=$.b,p=m.a;return u([x,c,p])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,x=d.a,g=d.b,c=g.a,f=g.b,p=f.a,_=f.b,y=_.a,w=_.b;return e>1e3?a(C,x,a(C,c,a(C,p,a(C,y,a(xg,r-4,w))))):a(C,x,a(C,c,a(C,p,a(C,y,s($v,e+1,r-4,w)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var S=t.b,x=S.a;return u([x])}}),wg=v(function(e,r){return s($v,0,e,r)}),Sg=v(function(e,r){var n=r.b.ab,t=r.b.s,i=r.b.au,o=V(Me(n),V(u([t]),i)),c=a(wg,e,o),l=a(uv,e,o);if(l.b){var $=l.a,m=l.b;return a(Ir,ji,{s:$,au:m,ab:Me(c)})}else{var p=Me(c);if(p.b){var d=p.a,g=p.b;return a(Ir,ji,{s:d,au:k,ab:g})}else return r}}),Cg=function(e){var r=e.b;return a(Ir,ji,r)},zg=function(e){var r=e.b;return a(Ir,lv({dT:ma(e).gp}),r)},Pg=function(e){var r=e.b;return a(Ir,Ac,r)},Lg=v(function(e,r){switch(e.$){case 1:return Cg(r);case 2:return Pg(r);case 3:return zg(r);default:var n=e.a;return a(Sg,n,r)}}),Ai=v(function(e,r){var n=r.a,t=r.b;return P(e(n),t)}),Tg=v(function(e,r){return E(r,{aW:e(r.aW)})}),vv=function(e){return{$:3,a:e}},fv=function(e){return{$:2,a:e}},mv=v(function(e,r){return{$:0,a:e,b:r}}),Mg=v(function(e,r){return{$:1,a:e,b:r}}),se=v(function(e,r){if(r.$)return A;var n=r.a;return j(e(n))}),he=function(e){return e<0?-e:e},sv=Sp,kg=M(function(e,r,n){return a(ve,0/0,sv(a(e,r,n)))}),sa=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),Dg=mp,dv=function(e){return s(Dg,C,k,e)},Ng=v(function(e,r){var n=a(sa,function(t){return t!=="0"&&t!=="."},dv(r));return V(e&&n?"-":"",r)}),ae=n$,Vc=up,pv=Pp,hv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Aa(n);if(t.$===1)return"01";var i=t.a;return a(Vc,"0",hv(i))}else{var o=mn(r);return o>=48&&o<57?a(Vc,pv(o+1),n):"0"}},Jc=np,Ig=cp,Vi=function(e){return a(Vc,e,"")},gv=M(function(e,r,n){return e<=0?n:s(gv,e>>1,V(r,r),e&1?V(n,r):n)}),Nt=v(function(e,r){return s(gv,e,r,"")}),Rc=M(function(e,r,n){return V(n,a(Nt,e-fa(n),Vi(r)))}),Hc=fp,bv=function(e){var r=a(Tc,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},Eg=function(e){var r=a(Tc,"e",ae(he(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(ve,0,Bc(a(cg,"+",i)?a(Mt,1,i):i)),c=bv(n),l=c.a,$=c.b,m=V(l,$),p=o<0?a(ve,"0",a(se,function(d){var g=d.a,f=d.b;return g+("."+f)},a(se,Ai(Vi),Aa(V(a(Nt,he(o),"0"),m))))):s(Rc,o+1,"0",m);return V(e<0?"-":"",p)}else{var n=r.a;return V(e<0?"-":"",n)}else return""},Bg=M(function(e,r,n){if(Jc(n)||Ig(n))return ae(n);var t=n<0,i=bv(Eg(he(n))),o=i.a,c=i.b,l=fa(o)+r,$=V(a(Nt,-l+1,"0"),s(Rc,l,"0",V(o,c))),m=fa($),p=a(We,1,l),d=a(e,t,s(Ja,p,m,$)),g=s(Ja,0,p,$),f=d?Hc(a(ve,"1",a(se,hv,Aa(Hc(g))))):g,_=fa(f),y=f==="0"?f:r<=0?V(f,a(Nt,he(r),"0")):ue(r,fa(c))<0?s(Ja,0,_-r,f)+("."+s(Ja,_-r,_,f)):V(o+".",s(Rc,r,"0",c));return a(Ng,t,y)}),_v=Bg(v(function(e,r){var n=Aa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(mn(i))})),Fg=kg(_v),jg=M(function(e,r,n){var t=a(Dc,10,he(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(Fg,i,n)}),yv=Hd,On=v(function(e,r){e:for(;;){if(r.$===-2)return A;var n=r.b,t=r.c,i=r.d,o=r.e,c=a(yv,e,n);switch(c){case 0:var l=e,$=i;e=l,r=$;continue e;case 1:return j(t);default:var l=e,$=o;e=l,r=$;continue e}}}),ce=Ye(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),sn={$:-2},Ra=Ye(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,$=i.e;if(t.$===-1&&!t.a){t.a;var m=t.b,p=t.c,d=t.d,g=t.e;return N(ce,0,r,n,N(ce,1,m,p,d,g),N(ce,1,o,c,l,$))}else return N(ce,e,o,c,N(ce,0,r,n,t,l),$)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var m=t.b,p=t.c,f=t.d;f.a;var _=f.b,y=f.c,w=f.d,S=f.e,g=t.e;return N(ce,0,m,p,N(ce,1,_,y,w,S),N(ce,1,r,n,g,i))}else return N(ce,e,r,n,t,i)}),Gc=M(function(e,r,n){if(n.$===-2)return N(ce,0,e,r,sn,sn);var t=n.a,i=n.b,o=n.c,c=n.d,l=n.e,$=a(yv,e,i);switch($){case 0:return N(Ra,t,i,o,s(Gc,e,r,c),l);case 1:return N(ce,t,i,r,c,l);default:return N(Ra,t,i,o,c,s(Gc,e,r,l))}}),Un=M(function(e,r,n){var t=s(Gc,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,c=t.d,l=t.e;return N(ce,1,i,o,c,l)}else{var $=t;return $}}),Ag=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},xv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,$=i.e,m=e.e;m.a;var p=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,y=g.d,w=g.e,S=m.e;return N(ce,0,f,_,N(ce,1,n,t,N(ce,0,o,c,l,$),y),N(ce,1,p,d,w,S))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,$=x.e,z=e.e;z.a;var p=z.b,d=z.c,g=z.d,S=z.e;return N(ce,1,n,t,N(ce,0,o,c,l,$),N(ce,0,p,d,g,S))}else return e},wv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var $=l.b,m=l.c,p=l.d,d=l.e,g=i.e,f=e.e;f.a;var _=f.b,y=f.c,w=f.d,S=f.e;return N(ce,0,o,c,N(ce,1,$,m,p,d),N(ce,1,n,t,g,N(ce,0,_,y,w,S)))}else{var r=e.a,n=e.b,t=e.c,x=e.d;x.a;var o=x.b,c=x.c,z=x.d,g=x.e,F=e.e;F.a;var _=F.b,y=F.c,w=F.d,S=F.e;return N(ce,1,n,t,N(ce,0,o,c,z,g),N(ce,0,_,y,w,S))}else return e},Vg=yi(function(e,r,n,t,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,$=o.c,m=o.d,p=o.e;return N(ce,n,l,$,m,N(ce,0,t,i,p,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,wv(r)}else break e;else return c.a,c.d,wv(r);else break e;return r}}),Ji=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,N(ce,r,n,t,Ji(i),l);var $=xv(e);if($.$===-1){var m=$.a,p=$.b,d=$.c,g=$.d,f=$.e;return N(Ra,m,p,d,Ji(g),f)}else return sn}else return N(ce,r,n,t,Ji(i),l)}else return sn},It=v(function(e,r){if(r.$===-2)return sn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(ue(e,t)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,N(ce,n,t,i,a(It,e,o),c);var $=xv(r);if($.$===-1){var m=$.a,p=$.b,d=$.c,g=$.d,f=$.e;return N(Ra,m,p,d,a(It,e,g),f)}else return sn}else return N(ce,n,t,i,a(It,e,o),c);else return a(Jg,e,lc(Vg,e,r,n,t,i,o,c))}),Jg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;if(oe(e,t)){var l=Ag(c);if(l.$===-1){var $=l.b,m=l.c;return N(Ra,n,$,m,o,Ji(c))}else return sn}else return N(Ra,n,t,i,o,a(It,e,c))}else return sn}),Rg=v(function(e,r){var n=a(It,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,c=n.e;return N(ce,1,t,i,o,c)}else{var l=n;return l}}),da=M(function(e,r,n){var t=r(a(On,e,n));if(t.$)return a(Rg,e,n);var i=t.a;return s(Un,e,i,n)}),Hg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(da,r,se(function(t){if(t.$===1){var i=t.a,o=i.a,c=i.b;return a(Mg,P(o,c),n)}else return t}));case 0:var r=e.a,n=e.b;return a(da,r,se(function(t){if(t.$)return t;var i=t.a,o=i.a,c=i.b;return a(mv,P(o,c),s(jg,o,c,n))}));case 3:var r=e.a,n=e.b;return a(da,r,se(function(t){return t.$===3?vv(n):t}));default:var r=e.a,n=e.b;return a(da,r,se(function(t){return t.$===2?fv(n):t}))}},Gg=function(e){return Tg(Hg(e))},Wg=v(function(e,r){return a(W,Gg(e),r)}),Og=v(function(e,r){return E(r,{gr:a(Wg,e,r.gr)})}),Ug=v(function(e,r){var n=r.a,t=r.b;return a(Ir,n,E(t,{s:a(Ai,Og(e),t.s)}))}),Wc=v(function(e,r){var n=r.a,t=r.b;return P(n,e(t))}),Yg=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Ir,t,E(i,{s:a(Wc,a(e,o.a,r),o)}))}),qg=U(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return E(t,{bG:!t.bG});case 2:var i=n.a;return E(t,{W:s(_g,e,i,t.W)});case 3:var o=n.a;return E(t,{bz:o});case 4:var c=n.a;return E(t,{W:a(Ug,c,t.W)});case 5:var l=n.a;return E(t,{W:s(Yg,r,l,t.W)});default:var $=n.a;return E(t,{W:a(Lg,$,t.W)})}}),Zg=v(function(e,r){return a(Ir,Ac,{s:P(e,r(e)),au:k,ab:k})}),Xg=n0,Sv=Xg(k),Qg=function(e){return{$:2,a:e}},dn=Ip,Yn=Np,Kg=c0("tick",a(q,function(e){return a(q,function(r){return a(q,function(n){return a(q,function(t){return a(q,function(i){return a(q,function(o){return a(q,function(c){return Re({gp:c,c5:o,gF:i,bn:t,aw:n,cO:r,iF:e})},a(H,"clock",Fe))},a(H,"devicePixelRatio",Fe))},a(H,"dt",Fe))},a(H,"keyboard",a(q,function(t){return a(q,function(i){return a(q,function(o){return a(q,function(c){return a(q,function(l){return a(q,function($){return a(q,function(m){return a(q,function(p){return a(q,function(d){return Re({cZ:d,gt:p,ef:m,gE:$,hh:l,hG:c,hM:o,cQ:i,fy:t})},a(H,"alt",Ce))},a(H,"control",Ce))},a(H,"down",Ce))},a(H,"downs",dn(Yn)))},a(H,"left",Ce))},a(H,"pressedKeys",dn(Yn)))},a(H,"right",Ce))},a(H,"shift",Ce))},a(H,"up",Ce))))},a(H,"pointer",a(q,function(n){return a(q,function(t){return a(q,function(i){return a(q,function(o){return a(q,function(c){return a(q,function(l){return a(q,function($){return a(q,function(m){return Re({ef:m,aG:$,ho:l,hN:c,hO:o,fy:i,iJ:t,iN:n})},a(H,"down",Ce))},a(H,"isDown",Ce))},a(H,"move",Ce))},a(H,"rightDown",Ce))},a(H,"rightUp",Ce))},a(H,"up",Ce))},a(H,"x",Fe))},a(H,"y",Fe))))},a(H,"screen",a(q,function(r){return a(q,function(n){return Re({gY:n,iH:r})},a(H,"height",Fe))},a(H,"width",Fe))))},a(H,"wheel",a(q,function(e){return a(q,function(r){return Re({gx:r,gy:e})},a(H,"deltaX",Fe))},a(H,"deltaY",Fe))))),e3=function(e){return e.dZ,Kg(Qg)},r3=function(e){return{$:5,a:e}},n3={$:0},Ri=v(function(e,r){return e}),a3=function(e){var r=e.b.s;return r.b},t3=function(e){return{$:1,a:e}},i3=t3,Cv=function(e){return{$:8,a:e}},$e=Cv,Et=function(e){return{$:0,a:e}},qn=M(function(e,r,n){return e(r(n))}),zv=a(qn,Et,Ri),Zn=zv,ye=function(e){return{$:1,a:e}},Pr=ye,Pv=v(function(e,r){return{$:9,a:e,b:r}}),Er={$:0},Lv=v(function(e,r){return r.$===3?Er:a(Pv,e,r)}),Hi=function(e){return a(Lv,4,e)},h={fM:"a",cW:"atv",fO:"ab",fP:"cx",fQ:"cy",fR:"acb",fS:"accx",fT:"accy",fU:"acr",d7:"al",d8:"ar",fV:"at",cX:"ah",cY:"av",fY:"s",f2:"bh",f3:"b",f7:"w7",f9:"bd",ga:"bdt",cb:"bn",gb:"bs",ce:"cpe",gl:"cp",gn:"cpx",go:"cpy",aD:"c",ci:"ctr",cj:"cb",ck:"ccx",aE:"ccy",bD:"cl",cl:"cr",gs:"ct",gv:"cptr",gw:"ctxt",gO:"fcs",el:"focus-within",gP:"fs",gT:"g",c7:"hbh",c8:"hc",ep:"he",c9:"hf",eq:"hfp",g$:"hv",g2:"ic",g4:"fr",ct:"lbl",g8:"iml",g9:"imlf",ha:"imlp",hb:"implw",hc:"it",hg:"i",eF:"lnk",bo:"nb",e5:"notxt",hu:"ol",hw:"or",a1:"oq",hB:"oh",e9:"pg",fa:"p",hC:"ppe",hP:"ui",am:"r",hS:"sb",hT:"sbx",hU:"sby",hV:"sbt",hZ:"e",h_:"cap",h2:"sev",h8:"sk",ih:"t",ii:"tc",ij:"w8",ik:"w2",il:"w9",im:"tj",cS:"tja",$9:"tl",io:"w3",ip:"w5",iq:"w4",ir:"tr",is:"w6",it:"w1",iu:"tun",fw:"ts",a8:"clr",iB:"u",d_:"wc",fI:"we",d$:"wf",fJ:"wfp",d0:"wrp"},Bt=Cr,Br=v(function(e,r){return a(gc,e,Bt(r))}),Lr=Br("className"),He=function(e){return ye(Lr(e))},Tv=v(function(e,r){return{$:2,a:e,b:r}}),o3=v(function(e,r){return{$:1,a:e,b:r}}),ke=function(e){return{$:0,a:e}},or=2,c3={$:0},Fr=c3,l3={$:0},u3=h.fY+(" "+h.aD),$3=h.fY+(" "+h.gT),v3=h.fY+(" "+h.e9),f3=h.fY+(" "+h.fa),m3=h.fY+(" "+h.am),s3=h.fY+(" "+h.hZ),d3=function(e){switch(e){case 0:return m3;case 1:return u3;case 2:return s3;case 3:return $3;case 4:return f3;default:return v3}},Mv=function(e){return{$:1,a:e}},pa={$:0},Oc=function(e){return{$:1,a:e}},kv=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return V(n,e);case 2:var t=r.a;return V(e,t);default:var n=r.a,t=r.b;return V(n,V(e,t))}}),Dv=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return V(a(W,function(o){return P(e,o)},t),r);case 2:var i=n.a;return V(r,a(W,function(o){return P(e,o)},i));default:var t=n.a,i=n.b;return V(a(W,function(o){return P(e,o)},t),V(r,a(W,function(o){return P(e,o)},i)))}}),Ha=4,p3=function(e){return{$:0,a:e}},h3=function(e){return{$:1,a:e}},me=function(e){return e>31?h3(1<<e-32):p3(1<<e)},Nv=me(41),Iv=me(40),Ev=me(42),Bv=me(43),Ga=vn("div"),Gi=sn,Ft=Gi,pn=function(e){switch(e.$){case 0:var r=e.a;return D(r)+"px";case 1:return"auto";case 2:var n=e.a;return D(n)+"fr";case 3:var t=e.a,i=e.b;return"min"+(D(t)+pn(i));default:var o=e.a,i=e.b;return"max"+(D(o)+pn(i))}},De=ip,ze=function(e){return D(De(e*255))},Uc=function(e){switch(e.$){case 0:return A;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return j("mv-"+(ze(n)+("-"+(ze(t)+("-"+ze(i))))));default:var o=e.a,c=o.a,l=o.b,$=o.c,m=e.b,p=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,w=f.c,S=e.d;return j("tfrm-"+(ze(c)+("-"+(ze(l)+("-"+(ze($)+("-"+(ze(p)+("-"+(ze(d)+("-"+(ze(g)+("-"+(ze(_)+("-"+(ze(y)+("-"+(ze(w)+("-"+ze(S))))))))))))))))))))}},jt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var t=e.a;return"font-size-"+D(t);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var c=e.a;return"grid-rows-"+(a(ne,"-",a(W,pn,c.hQ))+("-cols-"+(a(ne,"-",a(W,pn,c.ar))+("-space-x-"+(pn(c.h3.a)+("-space-y-"+pn(c.h3.b)))))));case 9:var l=e.a;return"gp grid-pos-"+(D(l.am)+("-"+(D(l.gq)+("-"+(D(l.iH)+("-"+D(l.gY)))))));case 11:var $=e.a,m=e.b,r=function(){switch($){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ne," ",a(W,function(p){var d=jt(p);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return a(ve,"",Uc(o))}},Wi=v(function(e,r){var n=r;return s(Un,e,0,n)}),g3=v(function(e,r){var n=a(On,e,r);return!n.$}),b3=v(function(e,r){var n=r;return a(g3,e,n)}),Fv=v(function(e,r){var n=r.a,t=r.b,i=jt(e);return a(b3,i,n)?r:P(a(Wi,i,n),a(C,e,t))}),te=v(function(e,r){return{$:0,a:e,b:r}}),At=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},_3=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(C,i,n)}),jr=v(function(e,r){return s(qe,_3(e),k,r)}),Wa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(D(De(r*255))+(","+D(De(n*255))+(","+D(De(t*255))+(","+(ae(i)+")")))))},Yc=function(e){return a(ne," ",a(jr,pr,u([e.eu?j("inset"):A,j(ae(e.e6.a)+"px"),j(ae(e.e6.b)+"px"),j(ae(e.bb)+"px"),j(ae(e.bs)+"px"),j(Wa(e.cg))])))},jv=function(e){return u([a(At,L(h.el)+":focus-within",a(jr,pr,u([a(se,function(r){return a(te,"border-color",Wa(r))},e.f8),a(se,function(r){return a(te,"background-color",Wa(r))},e.f0),a(se,function(r){return a(te,"box-shadow",Yc({bb:r.bb,cg:r.cg,eu:!1,e6:a(Wc,Lt,a(Ai,Lt,r.e6)),bs:r.bs}))},e.hW),j(a(te,"outline","none"))]))),a(At,L(h.fY)+":focus .focusable, "+(L(h.fY)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(h.fY)+" .focusable-thumb"))),a(jr,pr,u([a(se,function(r){return a(te,"border-color",Wa(r))},e.f8),a(se,function(r){return a(te,"background-color",Wa(r))},e.f0),a(se,function(r){return a(te,"box-shadow",Yc({bb:r.bb,cg:r.cg,eu:!1,e6:a(Wc,Lt,a(Ai,Lt,r.e6)),bs:r.bs}))},e.hW),j(a(te,"outline","none"))])))])},hn=function(e){return vn(p$(e))},Av=v(function(e,r){return a(gc,h0(e),h$(r))}),qc=v(function(e,r){return{$:2,a:e,b:r}}),Zc=function(e){return{$:6,a:e}},G=v(function(e,r){return{$:1,a:e,b:r}}),Tr=v(function(e,r){return{$:0,a:e,b:r}}),I=v(function(e,r){return{$:4,a:e,b:r}}),b=v(function(e,r){return{$:0,a:e,b:r}}),y3=v(function(e,r){return{$:3,a:e,b:r}}),Vv=u([0,1,2,3,4,5]),x3=v(function(e,r){return r.b?s(qe,C,r,e):e}),vr=function(e){return s(qe,x3,k,e)},ha=v(function(e,r){return vr(a(W,e,r))}),w3=function(e){switch(e){case 0:return L(h.gs);case 1:return L(h.cj);case 2:return L(h.cl);case 3:return L(h.bD);case 4:return L(h.ck);default:return L(h.aE)}},Oi=function(e){switch(e){case 0:return L(h.fV);case 1:return L(h.fO);case 2:return L(h.d8);case 3:return L(h.d7);case 4:return L(h.fP);default:return L(h.fQ)}},Vt=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return u([a(I,w3(n),i),a(G,L(h.fY),u([a(I,Oi(n),o)]))])};return Zc(a(ha,r,Vv))},Jv=u([a(b,"display","flex"),a(b,"flex-direction","column"),a(b,"white-space","pre"),a(I,L(h.c7),u([a(b,"z-index","0"),a(G,L(h.f2),u([a(b,"z-index","-1")]))])),a(I,L(h.hV),u([a(G,L(h.ih),u([a(I,L(h.c9),u([a(b,"flex-grow","0")])),a(I,L(h.d$),u([a(b,"align-self","auto !important")]))]))])),a(G,L(h.c8),u([a(b,"height","auto")])),a(G,L(h.c9),u([a(b,"flex-grow","100000")])),a(G,L(h.d$),u([a(b,"width","100%")])),a(G,L(h.fJ),u([a(b,"width","100%")])),a(G,L(h.d_),u([a(b,"align-self","flex-start")])),Vt(function(e){switch(e){case 0:return P(u([a(b,"justify-content","flex-start")]),u([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]));case 1:return P(u([a(b,"justify-content","flex-end")]),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]));case 2:return P(u([a(b,"align-items","flex-end")]),u([a(b,"align-self","flex-end")]));case 3:return P(u([a(b,"align-items","flex-start")]),u([a(b,"align-self","flex-start")]));case 4:return P(u([a(b,"align-items","center")]),u([a(b,"align-self","center")]));default:return P(u([a(G,L(h.fY),u([a(b,"margin-top","auto"),a(b,"margin-bottom","auto")]))]),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))}})]),S3=function(e){var r=function(n){return u([a(G,L(h.fY),u([a(I,Oi(n),e(n))]))])};return Zc(a(ha,r,Vv))},C3=function(){return u([0,1,2,3,4,5])}(),z3=u([a(Tr,"html,body",u([a(b,"height","100%"),a(b,"padding","0"),a(b,"margin","0")])),a(Tr,V(L(h.fY),V(L(h.hZ),L(h.g2))),u([a(b,"display","block"),a(I,L(h.c9),u([a(G,"img",u([a(b,"max-height","100%"),a(b,"object-fit","cover")]))])),a(I,L(h.d$),u([a(G,"img",u([a(b,"max-width","100%"),a(b,"object-fit","cover")]))]))])),a(Tr,L(h.fY)+":focus",u([a(b,"outline","none")])),a(Tr,L(h.hP),u([a(b,"width","100%"),a(b,"height","auto"),a(b,"min-height","100%"),a(b,"z-index","0"),a(I,V(L(h.fY),L(h.c9)),u([a(b,"height","100%"),a(G,L(h.c9),u([a(b,"height","100%")]))])),a(G,L(h.g4),u([a(I,L(h.bo),u([a(b,"position","fixed"),a(b,"z-index","20")]))]))])),a(Tr,L(h.bo),u([a(b,"position","relative"),a(b,"border","none"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(I,L(h.hZ),Jv),Zc(function(e){return a(W,e,C3)}(function(e){switch(e){case 0:return a(I,L(h.fM),u([a(b,"position","absolute"),a(b,"bottom","100%"),a(b,"left","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(G,L(h.c9),u([a(b,"height","auto")])),a(G,L(h.d$),u([a(b,"width","100%")])),a(b,"pointer-events","none"),a(G,"*",u([a(b,"pointer-events","auto")]))]));case 1:return a(I,L(h.f3),u([a(b,"position","absolute"),a(b,"bottom","0"),a(b,"left","0"),a(b,"height","0"),a(b,"width","100%"),a(b,"z-index","20"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(G,"*",u([a(b,"pointer-events","auto")])),a(G,L(h.c9),u([a(b,"height","auto")]))]));case 2:return a(I,L(h.hw),u([a(b,"position","absolute"),a(b,"left","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(G,"*",u([a(b,"pointer-events","auto")]))]));case 3:return a(I,L(h.hu),u([a(b,"position","absolute"),a(b,"right","100%"),a(b,"top","0"),a(b,"height","100%"),a(b,"margin","0 !important"),a(b,"z-index","20"),a(b,"pointer-events","none"),a(G,"*",u([a(b,"pointer-events","auto")]))]));case 4:return a(I,L(h.g4),u([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"pointer-events","none"),a(G,"*",u([a(b,"pointer-events","auto")]))]));default:return a(I,L(h.f2),u([a(b,"position","absolute"),a(b,"width","100%"),a(b,"height","100%"),a(b,"left","0"),a(b,"top","0"),a(b,"margin","0 !important"),a(b,"z-index","0"),a(b,"pointer-events","none"),a(G,"*",u([a(b,"pointer-events","auto")]))]))}}))])),a(Tr,L(h.fY),u([a(b,"position","relative"),a(b,"border","none"),a(b,"flex-shrink","0"),a(b,"display","flex"),a(b,"flex-direction","row"),a(b,"flex-basis","auto"),a(b,"resize","none"),a(b,"font-feature-settings","inherit"),a(b,"box-sizing","border-box"),a(b,"margin","0"),a(b,"padding","0"),a(b,"border-width","0"),a(b,"border-style","solid"),a(b,"font-size","inherit"),a(b,"color","inherit"),a(b,"font-family","inherit"),a(b,"line-height","1"),a(b,"font-weight","inherit"),a(b,"text-decoration","none"),a(b,"font-style","inherit"),a(I,L(h.d0),u([a(b,"flex-wrap","wrap")])),a(I,L(h.e5),u([a(b,"-moz-user-select","none"),a(b,"-webkit-user-select","none"),a(b,"-ms-user-select","none"),a(b,"user-select","none")])),a(I,L(h.gv),u([a(b,"cursor","pointer")])),a(I,L(h.gw),u([a(b,"cursor","text")])),a(I,L(h.hC),u([a(b,"pointer-events","none !important")])),a(I,L(h.ce),u([a(b,"pointer-events","auto !important")])),a(I,L(h.a8),u([a(b,"opacity","0")])),a(I,L(h.a1),u([a(b,"opacity","1")])),a(I,L(V(h.g$,h.a8))+":hover",u([a(b,"opacity","0")])),a(I,L(V(h.g$,h.a1))+":hover",u([a(b,"opacity","1")])),a(I,L(V(h.gO,h.a8))+":focus",u([a(b,"opacity","0")])),a(I,L(V(h.gO,h.a1))+":focus",u([a(b,"opacity","1")])),a(I,L(V(h.cW,h.a8))+":active",u([a(b,"opacity","0")])),a(I,L(V(h.cW,h.a1))+":active",u([a(b,"opacity","1")])),a(I,L(h.fw),u([a(b,"transition",a(ne,", ",a(W,function(e){return e+" 160ms"},u(["transform","opacity","filter","background-color","color","font-size"]))))])),a(I,L(h.hS),u([a(b,"overflow","auto"),a(b,"flex-shrink","1")])),a(I,L(h.hT),u([a(b,"overflow-x","auto"),a(I,L(h.am),u([a(b,"flex-shrink","1")]))])),a(I,L(h.hU),u([a(b,"overflow-y","auto"),a(I,L(h.aD),u([a(b,"flex-shrink","1")])),a(I,L(h.hZ),u([a(b,"flex-shrink","1")]))])),a(I,L(h.gl),u([a(b,"overflow","hidden")])),a(I,L(h.gn),u([a(b,"overflow-x","hidden")])),a(I,L(h.go),u([a(b,"overflow-y","hidden")])),a(I,L(h.d_),u([a(b,"width","auto")])),a(I,L(h.cb),u([a(b,"border-width","0")])),a(I,L(h.f9),u([a(b,"border-style","dashed")])),a(I,L(h.ga),u([a(b,"border-style","dotted")])),a(I,L(h.gb),u([a(b,"border-style","solid")])),a(I,L(h.ih),u([a(b,"white-space","pre"),a(b,"display","inline-block")])),a(I,L(h.hc),u([a(b,"line-height","1.05"),a(b,"background","transparent"),a(b,"text-align","inherit")])),a(I,L(h.hZ),Jv),a(I,L(h.am),u([a(b,"display","flex"),a(b,"flex-direction","row"),a(G,L(h.fY),u([a(b,"flex-basis","0%"),a(I,L(h.fI),u([a(b,"flex-basis","auto")])),a(I,L(h.eF),u([a(b,"flex-basis","auto")]))])),a(G,L(h.c9),u([a(b,"align-self","stretch !important")])),a(G,L(h.eq),u([a(b,"align-self","stretch !important")])),a(G,L(h.d$),u([a(b,"flex-grow","100000")])),a(G,L(h.ci),u([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"align-self","stretch")])),a(G,"u:first-of-type."+h.fU,u([a(b,"flex-grow","1")])),a(G,"s:first-of-type."+h.fS,u([a(b,"flex-grow","1"),a(G,L(h.fP),u([a(b,"margin-left","auto !important")]))])),a(G,"s:last-of-type."+h.fS,u([a(b,"flex-grow","1"),a(G,L(h.fP),u([a(b,"margin-right","auto !important")]))])),a(G,"s:only-of-type."+h.fS,u([a(b,"flex-grow","1"),a(G,L(h.fQ),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(G,"s:last-of-type."+(h.fS+" ~ u"),u([a(b,"flex-grow","0")])),a(G,"u:first-of-type."+(h.fU+(" ~ s."+h.fS)),u([a(b,"flex-grow","0")])),Vt(function(e){switch(e){case 0:return P(u([a(b,"align-items","flex-start")]),u([a(b,"align-self","flex-start")]));case 1:return P(u([a(b,"align-items","flex-end")]),u([a(b,"align-self","flex-end")]));case 2:return P(u([a(b,"justify-content","flex-end")]),k);case 3:return P(u([a(b,"justify-content","flex-start")]),k);case 4:return P(u([a(b,"justify-content","center")]),k);default:return P(u([a(b,"align-items","center")]),u([a(b,"align-self","center")]))}}),a(I,L(h.h2),u([a(b,"justify-content","space-between")])),a(I,L(h.ct),u([a(b,"align-items","baseline")]))])),a(I,L(h.aD),u([a(b,"display","flex"),a(b,"flex-direction","column"),a(G,L(h.fY),u([a(b,"flex-basis","0px"),a(b,"min-height","min-content"),a(I,L(h.ep),u([a(b,"flex-basis","auto")]))])),a(G,L(h.c9),u([a(b,"flex-grow","100000")])),a(G,L(h.d$),u([a(b,"width","100%")])),a(G,L(h.fJ),u([a(b,"width","100%")])),a(G,L(h.d_),u([a(b,"align-self","flex-start")])),a(G,"u:first-of-type."+h.fR,u([a(b,"flex-grow","1")])),a(G,"s:first-of-type."+h.fT,u([a(b,"flex-grow","1"),a(G,L(h.fQ),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","0 !important")]))])),a(G,"s:last-of-type."+h.fT,u([a(b,"flex-grow","1"),a(G,L(h.fQ),u([a(b,"margin-bottom","auto !important"),a(b,"margin-top","0 !important")]))])),a(G,"s:only-of-type."+h.fT,u([a(b,"flex-grow","1"),a(G,L(h.fQ),u([a(b,"margin-top","auto !important"),a(b,"margin-bottom","auto !important")]))])),a(G,"s:last-of-type."+(h.fT+" ~ u"),u([a(b,"flex-grow","0")])),a(G,"u:first-of-type."+(h.fR+(" ~ s."+h.fT)),u([a(b,"flex-grow","0")])),Vt(function(e){switch(e){case 0:return P(u([a(b,"justify-content","flex-start")]),u([a(b,"margin-bottom","auto")]));case 1:return P(u([a(b,"justify-content","flex-end")]),u([a(b,"margin-top","auto")]));case 2:return P(u([a(b,"align-items","flex-end")]),u([a(b,"align-self","flex-end")]));case 3:return P(u([a(b,"align-items","flex-start")]),u([a(b,"align-self","flex-start")]));case 4:return P(u([a(b,"align-items","center")]),u([a(b,"align-self","center")]));default:return P(u([a(b,"justify-content","center")]),k)}}),a(G,L(h.ci),u([a(b,"flex-grow","0"),a(b,"flex-basis","auto"),a(b,"width","100%"),a(b,"align-self","stretch !important")])),a(I,L(h.h2),u([a(b,"justify-content","space-between")]))])),a(I,L(h.gT),u([a(b,"display","-ms-grid"),a(G,".gp",u([a(G,L(h.fY),u([a(b,"width","100%")]))])),a(y3,P("display","grid"),u([P("display","grid")])),S3(function(e){switch(e){case 0:return u([a(b,"justify-content","flex-start")]);case 1:return u([a(b,"justify-content","flex-end")]);case 2:return u([a(b,"align-items","flex-end")]);case 3:return u([a(b,"align-items","flex-start")]);case 4:return u([a(b,"align-items","center")]);default:return u([a(b,"justify-content","center")])}})])),a(I,L(h.e9),u([a(b,"display","block"),a(G,L(h.fY+":first-child"),u([a(b,"margin","0 !important")])),a(G,L(h.fY+(Oi(3)+(":first-child + ."+h.fY))),u([a(b,"margin","0 !important")])),a(G,L(h.fY+(Oi(2)+(":first-child + ."+h.fY))),u([a(b,"margin","0 !important")])),Vt(function(e){switch(e){case 0:return P(k,k);case 1:return P(k,k);case 2:return P(k,u([a(b,"float","right"),a(I,"::after",u([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case 3:return P(k,u([a(b,"float","left"),a(I,"::after",u([a(b,"content",'""'),a(b,"display","table"),a(b,"clear","both")]))]));case 4:return P(k,k);default:return P(k,k)}})])),a(I,L(h.g8),u([a(b,"white-space","pre-wrap !important"),a(b,"height","100%"),a(b,"width","100%"),a(b,"background-color","transparent")])),a(I,L(h.hb),u([a(I,L(h.hZ),u([a(b,"flex-basis","auto")]))])),a(I,L(h.ha),u([a(b,"white-space","pre-wrap !important"),a(b,"cursor","text"),a(G,L(h.g9),u([a(b,"white-space","pre-wrap !important"),a(b,"color","transparent")]))])),a(I,L(h.fa),u([a(b,"display","block"),a(b,"white-space","normal"),a(b,"overflow-wrap","break-word"),a(I,L(h.c7),u([a(b,"z-index","0"),a(G,L(h.f2),u([a(b,"z-index","-1")]))])),a(qc,L(h.ih),u([a(b,"display","inline"),a(b,"white-space","normal")])),a(qc,L(h.fa),u([a(b,"display","inline"),a(I,"::after",u([a(b,"content","none")])),a(I,"::before",u([a(b,"content","none")]))])),a(qc,L(h.hZ),u([a(b,"display","inline"),a(b,"white-space","normal"),a(I,L(h.fI),u([a(b,"display","inline-block")])),a(I,L(h.g4),u([a(b,"display","flex")])),a(I,L(h.f2),u([a(b,"display","flex")])),a(I,L(h.fM),u([a(b,"display","flex")])),a(I,L(h.f3),u([a(b,"display","flex")])),a(I,L(h.hw),u([a(b,"display","flex")])),a(I,L(h.hu),u([a(b,"display","flex")])),a(G,L(h.ih),u([a(b,"display","inline"),a(b,"white-space","normal")]))])),a(G,L(h.am),u([a(b,"display","inline")])),a(G,L(h.aD),u([a(b,"display","inline-flex")])),a(G,L(h.gT),u([a(b,"display","inline-grid")])),Vt(function(e){switch(e){case 0:return P(k,k);case 1:return P(k,k);case 2:return P(k,u([a(b,"float","right")]));case 3:return P(k,u([a(b,"float","left")]));case 4:return P(k,k);default:return P(k,k)}})])),a(I,".hidden",u([a(b,"display","none")])),a(I,L(h.it),u([a(b,"font-weight","100")])),a(I,L(h.ik),u([a(b,"font-weight","200")])),a(I,L(h.io),u([a(b,"font-weight","300")])),a(I,L(h.iq),u([a(b,"font-weight","400")])),a(I,L(h.ip),u([a(b,"font-weight","500")])),a(I,L(h.is),u([a(b,"font-weight","600")])),a(I,L(h.f7),u([a(b,"font-weight","700")])),a(I,L(h.ij),u([a(b,"font-weight","800")])),a(I,L(h.il),u([a(b,"font-weight","900")])),a(I,L(h.hg),u([a(b,"font-style","italic")])),a(I,L(h.h8),u([a(b,"text-decoration","line-through")])),a(I,L(h.iB),u([a(b,"text-decoration","underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(I,V(L(h.iB),L(h.h8)),u([a(b,"text-decoration","line-through underline"),a(b,"text-decoration-skip-ink","auto"),a(b,"text-decoration-skip","ink")])),a(I,L(h.iu),u([a(b,"font-style","normal")])),a(I,L(h.im),u([a(b,"text-align","justify")])),a(I,L(h.cS),u([a(b,"text-align","justify-all")])),a(I,L(h.ii),u([a(b,"text-align","center")])),a(I,L(h.ir),u([a(b,"text-align","right")])),a(I,L(h.$9),u([a(b,"text-align","left")])),a(I,".modal",u([a(b,"position","fixed"),a(b,"left","0"),a(b,"top","0"),a(b,"width","100%"),a(b,"height","100%"),a(b,"pointer-events","none")]))]))]),Xn=function(e){return u([a(Tr,".v-"+e,u([a(b,"font-feature-settings",'"'+(e+'"'))])),a(Tr,".v-"+(e+"-off"),u([a(b,"font-feature-settings",'"'+(e+'" 0'))]))])},P3=vr(u([a(W,function(e){return a(Tr,".border-"+D(e),u([a(b,"border-width",D(e)+"px")]))},a(kn,0,6)),a(W,function(e){return a(Tr,".font-size-"+D(e),u([a(b,"font-size",D(e)+"px")]))},a(kn,8,32)),a(W,function(e){return a(Tr,".p-"+D(e),u([a(b,"padding",D(e)+"px")]))},a(kn,0,24)),u([a(Tr,".v-smcp",u([a(b,"font-variant","small-caps")])),a(Tr,".v-smcp-off",u([a(b,"font-variant","normal")]))]),Xn("zero"),Xn("onum"),Xn("liga"),Xn("dlig"),Xn("ordn"),Xn("tnum"),Xn("afrc"),Xn("frac")])),L3=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(h.fY+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(h.fY+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),T3=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,M3=`
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
`,k3=`
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
`,D3=`
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
`,N3="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(h.fY)+(L(h.am)+(" > "+(L(h.fY)+(" { flex-basis: auto !important; } "+(L(h.fY)+(L(h.am)+(" > "+(L(h.fY)+(L(h.ci)+(" { flex-basis: auto !important; }}"+(T3+(M3+(D3+(k3+L3))))))))))))))),ga=function(e){return a(ne,"",e)},Oa=v(function(e,r){return{cf:r,J:k,aN:k,an:e}}),Ua=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return E(o,{aN:a(C,P(c,l),o.aN)});case 3:var $=i.a,m=$.a,p=$.b,d=i.b;return E(o,{J:a(C,{cf:`
}`,J:k,aN:d,an:"@supports ("+(m+(":"+(p+(") {"+n.an))))},o.J)});case 5:var g=i.a,f=i.b;return E(o,{J:a(C,a(Ua,a(Oa,n.an+(" + "+g),""),f),o.J)});case 1:var _=i.a,y=i.b;return E(o,{J:a(C,a(Ua,a(Oa,n.an+(" > "+_),""),y),o.J)});case 2:var _=i.a,y=i.b;return E(o,{J:a(C,a(Ua,a(Oa,n.an+(" "+_),""),y),o.J)});case 4:var w=i.a,S=i.b;return E(o,{J:a(C,a(Ua,a(Oa,V(n.an,w),""),S),o.J)});default:var x=i.a;return E(o,{J:a(C,a(Ua,a(Oa,n.an,""),x),o.J)})}});return s(qe,t,n,r)}),I3=function(e){var r=function(i){return ga(a(W,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aN;return o.b?i.an+("{"+(r(i.aN)+(i.cf+"}"))):""},t=function(i){var o=i;return V(n(o),ga(a(W,t,o.J)))};return ga(a(W,t,s(qe,v(function(i,o){var c=i.a,l=i.b;return a(C,a(Ua,a(Oa,c,""),l),o)}),k,e)))},Rv=V(N3,I3(V(z3,P3))),Qn=hc,Hv=function(e){var r=e.e3;switch(r){case 0:return s(hn,"div",k,u([s(hn,"style",k,u([Qn(Rv)]))]));case 1:return Qn("");default:return s(hn,"elm-ui-static-rules",u([a(Av,"rules",Bt(Rv))]),k)}},ba=v(function(e,r){return Cr(s(Te,c$(e),o$(),r))}),_a=function(e){return Cr(s(Te,v(function(r,n){var t=r.a,i=r.b;return s(Wp,t,i,n)}),Gp(),e))},E3=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hq;return'"'+(r+'"')}},B3=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},F3=function(e){if(e.$===5){var r=e.a;return a(sa,B3,r.fB)}else return!1},Zr=v(function(e,r){return ue(e,r)<0?e:r}),Jt=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Ne=U(function(e,r,n,t){if(r.$===1)return u([n+("{"+(s(Te,Jt(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.g$;switch(o){case 0:return k;case 2:return u([n+("-hv {"+(s(Te,Jt(!0),"",t)+`
}`))]);default:return u([n+("-hv:hover {"+(s(Te,Jt(!1),"",t)+`
}`))])}case 0:var c=s(Te,Jt(!1),"",t);return u([n+("-fs:focus {"+(c+`
}`)),"."+(h.fY+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(L(h.fY)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return u([n+("-act:active {"+(s(Te,Jt(!1),"",t)+`
}`))])}}),j3=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+D(n)))}},A3=function(e){if(e.$===5){var r=e.a;return j(a(ne,", ",a(W,j3,r.fB)))}else return A},V3=function(e){switch(e.$){case 0:return A;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return j("translate3d("+(ae(n)+("px, "+(ae(t)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,$=o.c,m=e.b,p=m.a,d=m.b,g=m.c,f=e.c,_=f.a,y=f.b,w=f.c,S=e.d,x="translate3d("+(ae(c)+("px, "+(ae(l)+("px, "+(ae($)+"px)"))))),z="scale3d("+(ae(p)+(", "+(ae(d)+(", "+(ae(g)+")"))))),F="rotate3d("+(ae(_)+(", "+(ae(y)+(", "+(ae(w)+(", "+(ae(S)+"rad)")))))));return j(x+(" "+(z+(" "+F))))}},Xc=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return T(Ne,e,n,t,i);case 13:var o=r.a,c=r.b;return T(Ne,e,n,"."+o,u([a(te,"box-shadow",c)]));case 12:var o=r.a,l=r.b,$=a(We,0,a(Zr,1,1-l));return T(Ne,e,n,"."+o,u([a(te,"opacity",ae($))]));case 2:var m=r.a;return T(Ne,e,n,".font-size-"+D(m),u([a(te,"font-size",D(m)+"px")]));case 1:var o=r.a,p=r.b,d=a(ne,", ",a(jr,A3,p)),g=u([a(te,"font-family",a(ne,", ",a(W,E3,p))),a(te,"font-feature-settings",d),a(te,"font-variant",a(sa,F3,p)?"small-caps":"normal")]);return T(Ne,e,n,"."+o,g);case 3:var f=r.a,c=r.b,_=r.c;return T(Ne,e,n,"."+f,u([a(te,c,_)]));case 4:var f=r.a,c=r.b,y=r.c;return T(Ne,e,n,"."+f,u([a(te,c,Wa(y))]));case 5:var w=r.a,S=r.b,x=r.c,z=D(x)+"px",F=D(S)+"px",Z="."+h.am,ee="."+(h.d0+Z),Y="."+h.d8,Q="."+h.fa,K="."+h.e9,R="."+h.d7,ie=ae(x/2)+"px",de=ae(S/2)+"px",Pe="."+h.aD,f="."+w,pe="."+h.fY;return vr(u([T(Ne,e,n,f+(Z+(" > "+(pe+(" + "+pe)))),u([a(te,"margin-left",F)])),T(Ne,e,n,f+(ee+(" > "+pe)),u([a(te,"margin",ie+(" "+de))])),T(Ne,e,n,f+(Pe+(" > "+(pe+(" + "+pe)))),u([a(te,"margin-top",z)])),T(Ne,e,n,f+(K+(" > "+(pe+(" + "+pe)))),u([a(te,"margin-top",z)])),T(Ne,e,n,f+(K+(" > "+R)),u([a(te,"margin-right",F)])),T(Ne,e,n,f+(K+(" > "+Y)),u([a(te,"margin-left",F)])),T(Ne,e,n,V(f,Q),u([a(te,"line-height","calc(1em + "+(D(x)+"px)"))])),T(Ne,e,n,"textarea"+(pe+f),u([a(te,"line-height","calc(1em + "+(D(x)+"px)")),a(te,"height","calc(100% + "+(D(x)+"px)"))])),T(Ne,e,n,f+(Q+(" > "+R)),u([a(te,"margin-right",F)])),T(Ne,e,n,f+(Q+(" > "+Y)),u([a(te,"margin-left",F)])),T(Ne,e,n,f+(Q+"::after"),u([a(te,"content","''"),a(te,"display","block"),a(te,"height","0"),a(te,"width","0"),a(te,"margin-top",D(-1*(x/2|0))+"px")])),T(Ne,e,n,f+(Q+"::before"),u([a(te,"content","''"),a(te,"display","block"),a(te,"height","0"),a(te,"width","0"),a(te,"margin-bottom",D(-1*(x/2|0))+"px")]))]));case 7:var w=r.a,be=r.b,Y=r.c,Le=r.d,R=r.e,f="."+w;return T(Ne,e,n,f,u([a(te,"padding",ae(be)+("px "+(ae(Y)+("px "+(ae(Le)+("px "+(ae(R)+"px")))))))]));case 6:var w=r.a,be=r.b,Y=r.c,Le=r.d,R=r.e,f="."+w;return T(Ne,e,n,f,u([a(te,"border-width",D(be)+("px "+(D(Y)+("px "+(D(Le)+("px "+(D(R)+"px")))))))]));case 8:var _e=r.a,Je=M(function(rr,gt,Ln){e:for(;;)switch(Ln.$){case 0:var Nd=Ln.a;return D(Nd)+"px";case 1:var Wr=P(rr,gt);if(Wr.a.$===1){if(Wr.b.$===1)return Wr.a,Wr.b,"max-content";Wr.a;var la=Wr.b.a;return"minmax(max-content, "+(D(la)+"px)")}else if(Wr.b.$===1){var ua=Wr.a.a;return Wr.b,"minmax("+(D(ua)+"px, max-content)")}else{var ua=Wr.a.a,la=Wr.b.a;return"minmax("+(D(ua)+("px, "+(D(la)+"px)")))}case 2:var e$=Ln.a,Or=P(rr,gt);if(Or.a.$===1){if(Or.b.$===1)return Or.a,Or.b,D(e$)+"fr";Or.a;var la=Or.b.a;return"minmax(max-content, "+(D(la)+"px)")}else if(Or.b.$===1){var ua=Or.a.a;return Or.b,"minmax("+(D(ua)+("px, "+(D(e$)+"frfr)")))}else{var ua=Or.a.a,la=Or.b.a;return"minmax("+(D(ua)+("px, "+(D(la)+"px)")))}case 3:var nc=Ln.a,ac=Ln.b,tc=j(nc),ic=gt,oc=ac;rr=tc,gt=ic,Ln=oc;continue e;default:var nc=Ln.a,ac=Ln.b,tc=rr,ic=j(nc),oc=ac;rr=tc,gt=ic,Ln=oc;continue e}}),Ee=function(rr){return s(Je,A,A,rr)};Ee(_e.h3.a);var cr=Ee(_e.h3.b),ca=function(rr){return"grid-template-rows: "+(rr+";")}(a(ne," ",a(W,Ee,_e.hQ))),pt=function(rr){return"-ms-grid-rows: "+(rr+";")}(a(ne,cr,a(W,Ee,_e.ar))),zn=function(rr){return"-ms-grid-columns: "+(rr+";")}(a(ne,cr,a(W,Ee,_e.ar))),Pn="grid-row-gap:"+(Ee(_e.h3.b)+";"),Ea="grid-column-gap:"+(Ee(_e.h3.a)+";"),bi=function(rr){return"grid-template-columns: "+(rr+";")}(a(ne," ",a(W,Ee,_e.ar))),f=".grid-rows-"+(a(ne,"-",a(W,pn,_e.hQ))+("-cols-"+(a(ne,"-",a(W,pn,_e.ar))+("-space-x-"+(pn(_e.h3.a)+("-space-y-"+pn(_e.h3.b))))))),ht=f+("{"+(bi+(ca+(Ea+(Pn+"}"))))),ec="@supports (display:grid) {"+(ht+"}"),rc=f+("{"+(zn+(pt+"}")));return u([rc,ec]);case 9:var dr=r.a,Ld=a(ne," ",u(["-ms-grid-row: "+(D(dr.am)+";"),"-ms-grid-row-span: "+(D(dr.gY)+";"),"-ms-grid-column: "+(D(dr.gq)+";"),"-ms-grid-column-span: "+(D(dr.iH)+";")])),Td=a(ne," ",u(["grid-row: "+(D(dr.am)+(" / "+(D(dr.am+dr.gY)+";"))),"grid-column: "+(D(dr.gq)+(" / "+(D(dr.gq+dr.iH)+";")))])),f=".grid-pos-"+(D(dr.am)+("-"+(D(dr.gq)+("-"+(D(dr.iH)+("-"+D(dr.gY))))))),ht=f+("{"+(Td+"}")),ec="@supports (display:grid) {"+(ht+"}"),rc=f+("{"+(Ld+"}"));return u([rc,ec]);case 11:var f=r.a,Md=r.b,kd=function(rr){return s(Xc,e,rr,j(f))};return a(ha,kd,Md);default:var cn=r.a,_=V3(cn),f=Uc(cn),_i=P(f,_);if(!_i.a.$&&!_i.b.$){var w=_i.a.a,Dd=_i.b.a;return T(Ne,e,n,"."+w,u([a(te,"transform",Dd)]))}else return k}}),J3=v(function(e,r){return _a(a(W,function(n){var t=s(Xc,e,n,A);return P(jt(n),a(ba,Bt,t))},r))}),Ui=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ne,"",a(W,n,r))+"}"))}),Gv=M(function(e,r,n){var t=n.a,i=n.b;return u([a(Ui,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Ui,"."+(e+("."+(r+("> ."+(h.ih+(", ."+(e+(" ."+(r+(" > ."+h.ih)))))))))),i)])}),R3=M(function(e,r,n){var t=r.a,i=r.b,o=oe(e,n)?e:n+(" ."+e);return a(ne," ",V(s(Gv,o,h.h_,i),s(Gv,o,h.gP,t)))}),H3=v(function(e,r){var n=oe(e,r)?e:r+(" ."+e);return a(ne," ",u([a(Ui,"."+(n+("."+(h.h_+(", "+("."+(n+(" ."+h.h_))))))),u([P("line-height","1")])),a(Ui,"."+(n+("."+(h.h_+("> ."+(h.ih+(", ."+(n+(" ."+(h.h_+(" > ."+h.ih)))))))))),u([P("vertical-align","0"),P("line-height","1")]))]))}),Wv=M(function(e,r,n){return{gY:r/e,bs:e,fD:n}}),Qc=v(function(e,r){return s(qe,v(function(n,t){return e(n)?a(C,n,t):t}),k,r)}),Kc=function(e){if(e.b){var r=e.a,n=e.b;return j(s(Te,We,r,n))}else return A},Ov=function(e){if(e.b){var r=e.a,n=e.b;return j(s(Te,Zr,r,n))}else return A},Uv=function(e){var r=u([e.gf,e.f1,e.gA,e.hl]),n=a(ve,e.gA,Ov(r)),t=a(ve,e.f1,Ov(a(Qc,function(m){return!oe(m,n)},r))),i=a(ve,e.gf,Kc(r)),o=1/(i-t),c=1-i,l=1/(i-n),$=1-i;return{gf:s(Wv,o,i-t,c),en:s(Wv,l,i-n,$)}},Yv=function(e){return P(u([P("display","block")]),u([P("display","inline-block"),P("line-height",ae(e.gY)),P("vertical-align",ae(e.fD)+"em"),P("font-size",ae(e.bs)+"em")]))},G3=function(e){return s(Te,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fN;if(i.$===1)return n;var o=i.a;return j(P(Yv(function(c){return c.en}(Uv(o))),Yv(function(c){return c.gf}(Uv(o)))))}else return n;else return n}),A,e)},W3=function(e){var r=function(o){if(o.$===4){var c=o.b;return j("@import url('"+(c+"');"))}else return A},n=function(o){o.a;var c=o.b,l=a(ne,`
`,a(jr,r,c));return l},t=a(W,Di,e),i=function(o){var c=o.a,l=o.b,$=G3(l);if($.$===1)return a(ne,"",a(W,H3(c),t));var m=$.a;return a(ne,"",a(W,a(R3,c,m),t))};return V(a(ne,`
`,a(W,n,e)),a(ne,`
`,a(W,i,e)))},O3=function(e){if(e.$===1){var r=e.a,n=e.b;return j(P(r,n))}else return A},qv=v(function(e,r){var n=v(function(c,l){return{cM:V(l.cM,s(Xc,e,c,A)),b1:function(){var $=O3(c);if($.$===1)return l.b1;var m=$.a;return a(C,m,l.b1)}()}}),t=s(Te,n,{cM:k,b1:k},r),i=t.b1,o=t.cM;return V(W3(i),ga(o))}),Zv=v(function(e,r){var n=e.e3;switch(n){case 0:return s(hn,"div",k,u([s(hn,"style",k,u([Qn(a(qv,e,r))]))]));case 1:return s(hn,"div",k,u([s(hn,"style",k,u([Qn(a(qv,e,r))]))]));default:return s(hn,"elm-ui-rules",u([a(Av,"rules",a(J3,e,r))]),k)}}),Xv=U(function(e,r,n,t){var i=a(Zv,r,s(Te,Fv,P(Ft,jv(r.gO)),n).b);return e?a(C,P("static-stylesheet",Hv(r)),a(C,P("dynamic-stylesheet",i),t)):a(C,P("dynamic-stylesheet",i),t)}),Qv=U(function(e,r,n,t){var i=a(Zv,r,s(Te,Fv,P(Ft,jv(r.gO)),n).b);return e?a(C,Hv(r),a(C,i,t)):a(C,i,t)}),el=me(45),Rt=me(37),Kv=function(e){return v0(p$(e))},U3=vn("p"),hr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return oe(o&t,o)}else{var i=e.a;return oe(i&n,i)}}),ef=vn("s"),rf=vn("u"),rl=me(44),Ht=me(39),Yi=Sr(function(e,r,n,t,i,o){var c=v(function($,m){if(t.$===1){var p=t.a;return s(Kv,$,m,function(){switch(i.$){case 0:return p;case 2:var g=i.a,f=i.b;return T(Xv,!1,g,f,p);default:var g=i.a,f=i.b;return T(Xv,!0,g,f,p)}}())}else{var d=t.a;return a(function(){switch($){case"div":return Ga;case"p":return U3;default:return hn($)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return T(Qv,!1,g,f,d);default:var g=i.a,f=i.b;return T(Qv,!0,g,f,d)}}())}}),l=function(){switch(r.$){case 0:return a(c,"div",n);case 1:var $=r.a;return a(c,$,n);default:var $=r.a,m=r.b;return s(hn,$,n,u([a(c,m,u([Lr(h.fY+(" "+h.hZ))]))]))}}();switch(o){case 0:return a(hr,Ht,e)&&!a(hr,rl,e)?l:a(hr,Iv,e)?a(rf,u([Lr(a(ne," ",u([h.fY,h.hZ,h.ci,h.aE,h.fU])))]),u([l])):a(hr,Ev,e)?a(ef,u([Lr(a(ne," ",u([h.fY,h.hZ,h.ci,h.aE,h.fS])))]),u([l])):l;case 1:return a(hr,Rt,e)&&!a(hr,el,e)?l:a(hr,Bv,e)?a(ef,u([Lr(a(ne," ",u([h.fY,h.hZ,h.ci,h.fT])))]),u([l])):a(hr,Nv,e)?a(rf,u([Lr(a(ne," ",u([h.fY,h.hZ,h.ci,h.fR])))]),u([l])):l;default:return l}}),Kn=function(e){return!e.b},qi=Qn,Y3=h.fY+(" "+(h.ih+(" "+(h.d_+(" "+h.c8))))),Gt=function(e){return a(Ga,u([Lr(Y3)]),u([qi(e)]))},q3=h.fY+(" "+(h.ih+(" "+(h.d$+(" "+h.c9))))),nf=function(e){return a(Ga,u([Lr(q3)]),u([qi(e)]))},Z3=M(function(e,r,n){var t=v(function(_,y){var w=_.a,S=_.b,x=y.a,z=y.b;switch(S.$){case 0:var F=S.a;return oe(e,Ha),P(a(C,P(w,F(e)),x),z);case 1:var Z=S.a;return oe(e,Ha),P(a(C,P(w,a(Z.g0,pa,e)),x),Kn(z)?Z.h9:V(Z.h9,z));case 2:var ee=S.a;return P(a(C,P(w,oe(e,or)?nf(ee):Gt(ee)),x),z);default:return P(x,z)}}),i=v(function(_,y){var w=y.a,S=y.b;switch(_.$){case 0:var x=_.a;return oe(e,Ha),P(a(C,x(e),w),S);case 1:var z=_.a;return oe(e,Ha),P(a(C,a(z.g0,pa,e),w),Kn(S)?z.h9:V(z.h9,S));case 2:var F=_.a;return P(a(C,oe(e,or)?nf(F):Gt(F),w),S);default:return P(w,S)}});if(r.$===1){var o=r.a,c=s(qe,t,P(k,k),o),l=c.a,$=c.b,m=Kn($)?n.h9:V(n.h9,$);if(m.b){var p=m;return Oc({g0:T(Yi,n.a_,n.a0,n.aS,Mv(s(Dv,"nearby-element-pls",l,n.aV))),h9:p})}else return Et(N(Yi,n.a_,n.a0,n.aS,Mv(s(Dv,"nearby-element-pls",l,n.aV)),pa))}else{var d=r.a,g=s(qe,i,P(k,k),d),f=g.a,$=g.b,m=Kn($)?n.h9:V(n.h9,$);if(m.b){var p=m;return Oc({g0:T(Yi,n.a_,n.a0,n.aS,ke(a(kv,f,n.aV))),h9:p})}else return Et(N(Yi,n.a_,n.a0,n.aS,ke(a(kv,f,n.aV)),pa))}}),gr=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),X3=function(e){return{$:10,a:e}},Zi=v(function(e,r){return{$:0,a:e,b:r}}),fe=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(Zi,n,o|t)}else{var i=e.a;return a(Zi,i|n,t)}}),af=function(e){return{$:1,a:e}},Xi=v(function(e,r){return{$:3,a:e,b:r}}),tf=function(e){return{$:2,a:e}},Q3=v(function(e,r){return a(Ga,u([Lr(function(){switch(e){case 0:return a(ne," ",u([h.bo,h.hZ,h.fM]));case 1:return a(ne," ",u([h.bo,h.hZ,h.f3]));case 2:return a(ne," ",u([h.bo,h.hZ,h.hw]));case 3:return a(ne," ",u([h.bo,h.hZ,h.hu]));case 4:return a(ne," ",u([h.bo,h.hZ,h.g4]));default:return a(ne," ",u([h.bo,h.hZ,h.f2]))}}())]),u([function(){switch(r.$){case 3:return Qn("");case 2:var n=r.a;return Gt(n);case 0:var t=r.a;return t(or);default:var i=r.a;return a(i.g0,pa,or)}}()]))}),K3=M(function(e,r,n){var t=a(Q3,e,r);switch(n.$){case 0:return e===5?af(u([t])):tf(u([t]));case 1:var i=n.a;return e===5?af(a(C,t,i)):a(Xi,i,u([t]));case 2:var o=n.a;return e===5?a(Xi,u([t]),o):tf(a(C,t,o));default:var i=n.a,o=n.b;return e===5?a(Xi,a(C,t,i),o):a(Xi,i,a(C,t,o))}}),of=v(function(e,r){return{$:2,a:e,b:r}}),gn=function(e){return{$:1,a:e}},ya=v(function(e,r){switch(r.$){case 0:return gn(e);case 1:var n=r.a;return a(of,n,e);default:var t=r.a,i=r.b;return a(of,t,i)}}),eb=function(e){switch(e){case 0:return h.cX+(" "+h.d7);case 2:return h.cX+(" "+h.d8);default:return h.cX+(" "+h.fP)}},rb=function(e){switch(e){case 0:return h.cY+(" "+h.fV);case 2:return h.cY+(" "+h.fO);default:return h.cY+(" "+h.fQ)}},Wt=v(function(e,r){return a(Ur,p0(e),h$(r))}),bn=U(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),ea=function(e){return{$:1,a:e}},nb=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return ea(B(i,0,0));case 1:var o=r.a;return ea(B(0,o,0));case 2:var c=r.a;return ea(B(0,0,c));case 3:var n=r.a;return ea(n);case 4:var n=r.a,f=r.b;return T(bn,B(0,0,0),B(1,1,1),n,f);default:var n=r.a;return T(bn,B(0,0,0),n,B(0,0,1),0)}case 1:var t=e.a,i=t.a,o=t.b,c=t.c;switch(r.$){case 0:var l=r.a;return ea(B(l,o,c));case 1:var $=r.a;return ea(B(i,$,c));case 2:var m=r.a;return ea(B(i,o,m));case 3:var n=r.a;return ea(n);case 4:var n=r.a,f=r.b;return T(bn,t,B(1,1,1),n,f);default:var p=r.a;return T(bn,t,p,B(0,0,1),0)}default:var t=e.a,i=t.a,o=t.b,c=t.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var l=r.a;return T(bn,B(l,o,c),d,g,f);case 1:var $=r.a;return T(bn,B(i,$,c),d,g,f);case 2:var m=r.a;return T(bn,B(i,o,m),d,g,f);case 3:var _=r.a;return T(bn,_,d,g,f);case 4:var y=r.a,w=r.b;return T(bn,t,d,y,w);default:var S=r.a;return T(bn,t,S,g,f)}}}),Ya=me(7),cf=me(36),lf=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(Zi,n|i,t|o)}),Dn=a(Zi,0,0),nl=function(e){switch(e.$){case 0:var r=e.a,n=D(r),t="height-px-"+n;return B(Dn,h.ep+(" "+t),u([s(gr,t,"height",n+"px")]));case 1:return B(a(fe,cf,Dn),h.c8,k);case 2:var i=e.a;return i===1?B(a(fe,Rt,Dn),h.c9,k):B(a(fe,Rt,Dn),h.eq+(" height-fill-"+D(i)),u([s(gr,h.fY+("."+(h.aD+(" > "+L("height-fill-"+D(i))))),"flex-grow",D(i*1e5))]));case 3:var o=e.a,c=e.b,l="min-height-"+D(o),$=s(gr,l,"min-height",D(o)+"px !important"),m=nl(c),p=m.a,d=m.b,g=m.c;return B(a(fe,el,p),l+(" "+d),a(C,$,g));default:var f=e.a,c=e.b,l="max-height-"+D(f),$=s(gr,l,"max-height",D(f)+"px"),_=nl(c),p=_.a,d=_.b,g=_.c;return B(a(fe,el,p),l+(" "+d),a(C,$,g))}},uf=me(38),al=function(e){switch(e.$){case 0:var r=e.a;return B(Dn,h.fI+(" width-px-"+D(r)),u([s(gr,"width-px-"+D(r),"width",D(r)+"px")]));case 1:return B(a(fe,uf,Dn),h.d_,k);case 2:var n=e.a;return n===1?B(a(fe,Ht,Dn),h.d$,k):B(a(fe,Ht,Dn),h.fJ+(" width-fill-"+D(n)),u([s(gr,h.fY+("."+(h.am+(" > "+L("width-fill-"+D(n))))),"flex-grow",D(n*1e5))]));case 3:var t=e.a,i=e.b,o="min-width-"+D(t),c=s(gr,o,"min-width",D(t)+"px"),l=al(i),$=l.a,m=l.b,p=l.c;return B(a(fe,rl,$),o+(" "+m),a(C,c,p));default:var d=e.a,i=e.b,o="max-width-"+D(d),c=s(gr,o,"max-width",D(d)+"px"),g=al(i),$=g.a,m=g.b,p=g.c;return B(a(fe,rl,$),o+(" "+m),a(C,c,p))}},Qi=me(27),ab=v(function(e,r){if(oe(e,Qi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return oe(i,c)&&oe(i,o)&&oe(i,l)&&i>=0&&i<=24;default:return!1}}),qa=me(6),$f=me(30),vf=me(29),tb=Se(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var p=l.a,d=l.b;switch(p.$){case 0:var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 3:var F=p.a,Z=p.b;if(a(hr,F,n)){var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else{var g=Z+(" "+e),f=r,_=a(fe,F,n),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}case 1:var ee=p.a,g=e,f=r,_=n,y=t,w=i,S=a(C,ee,o),x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 4:var F=p.a,Y=p.b;if(a(hr,F,n)){var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else if(a(ab,F,Y)){var g=jt(Y)+(" "+e),f=r,_=a(fe,F,n),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else{var g=jt(Y)+(" "+e),f=r,_=a(fe,F,n),y=t,w=a(C,Y,i),S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}case 10:var F=p.a,Q=p.b,g=e,f=r,_=a(fe,F,n),y=a(nb,t,Q),w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 7:var K=p.a;if(a(hr,qa,n)){var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else switch(K.$){case 0:var R=K.a,g=h.fI+(" width-px-"+D(R))+(" "+e),f=r,_=a(fe,qa,n),y=t,w=a(C,s(gr,"width-px-"+D(R),"width",D(R)+"px"),i),S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 1:var g=e+(" "+h.d_),f=r,_=a(fe,uf,a(fe,qa,n)),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 2:var ie=K.a;if(ie===1){var g=e+(" "+h.d$),f=r,_=a(fe,Ht,a(fe,qa,n)),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else{var g=e+(" "+(h.fJ+(" width-fill-"+D(ie)))),f=r,_=a(fe,Ht,a(fe,qa,n)),y=t,w=a(C,s(gr,h.fY+("."+(h.am+(" > "+L("width-fill-"+D(ie))))),"flex-grow",D(ie*1e5)),i),S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}default:var de=al(K),Pe=de.a,pe=de.b,Pn=de.c,g=e+(" "+pe),f=r,_=a(lf,Pe,a(fe,qa,n)),y=t,w=V(Pn,i),S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}case 8:var be=p.a;if(a(hr,Ya,n)){var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else switch(be.$){case 0:var R=be.a,Le=D(R)+"px",_e="height-px-"+Le,g=h.ep+(" "+(_e+(" "+e))),f=r,_=a(fe,Ya,n),y=t,w=a(C,s(gr,_e,"height ",Le),i),S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 1:var g=h.c8+(" "+e),f=r,_=a(fe,cf,a(fe,Ya,n)),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 2:var ie=be.a;if(ie===1){var g=h.c9+(" "+e),f=r,_=a(fe,Rt,a(fe,Ya,n)),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else{var g=e+(" "+(h.eq+(" height-fill-"+D(ie)))),f=r,_=a(fe,Rt,a(fe,Ya,n)),y=t,w=a(C,s(gr,h.fY+("."+(h.aD+(" > "+L("height-fill-"+D(ie))))),"flex-grow",D(ie*1e5)),i),S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}default:var Je=nl(be),Pe=Je.a,pe=Je.b,Pn=Je.c,g=e+(" "+pe),f=r,_=a(lf,Pe,a(fe,Ya,n)),y=t,w=V(Pn,i),S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}case 2:var Ee=p.a;switch(Ee.$){case 0:var g=e,f=a(ya,"main",r),_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 1:var g=e,f=a(ya,"nav",r),_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 2:var g=e,f=a(ya,"footer",r),_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 3:var g=e,f=a(ya,"aside",r),_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 4:var cr=Ee.a;if(cr<=1){var g=e,f=a(ya,"h1",r),_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else if(cr<7){var g=e,f=a(ya,"h"+D(cr),r),_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else{var g=e,f=a(ya,"h6",r),_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}case 9:var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 8:var g=e,f=r,_=n,y=t,w=i,S=a(C,a(Wt,"role","button"),o),x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 5:var ca=Ee.a,g=e,f=r,_=n,y=t,w=i,S=a(C,a(Wt,"aria-label",ca),o),x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 6:var g=e,f=r,_=n,y=t,w=i,S=a(C,a(Wt,"aria-live","polite"),o),x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;default:var g=e,f=r,_=n,y=t,w=i,S=a(C,a(Wt,"aria-live","assertive"),o),x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}case 9:var pt=p.a,zn=p.b,Pn=function(){switch(zn.$){case 3:return i;case 2:return zn.a,i;case 0:return zn.a,i;default:var ht=zn.a;return V(i,ht.h9)}}(),g=e,f=r,_=n,y=t,w=Pn,S=o,x=s(K3,pt,zn,c),z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e;case 6:var Ea=p.a;if(a(hr,$f,n)){var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else{var g=eb(Ea)+(" "+e),f=r,_=function(cn){switch(Ea){case 1:return a(fe,Ev,cn);case 2:return a(fe,Iv,cn);default:return cn}}(a(fe,$f,n)),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}default:var bi=p.a;if(a(hr,vf,n)){var g=e,f=r,_=n,y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}else{var g=rb(bi)+(" "+e),f=r,_=function(cn){switch(bi){case 1:return a(fe,Bv,cn);case 2:return a(fe,Nv,cn);default:return cn}}(a(fe,vf,n)),y=t,w=i,S=o,x=c,z=d;e=g,r=f,n=_,t=y,i=w,o=S,c=x,l=z;continue e}}}else{var $=Uc(t);if($.$===1)return{aS:a(C,Lr(e),o),aV:c,a_:n,a0:r,h9:i};var m=$.a;return{aS:a(C,Lr(e+(" "+m)),o),aV:c,a_:n,a0:r,h9:a(C,X3(t),i)}}}),ib={$:0},ob=ib,Ge=U(function(e,r,n,t){return s(Z3,e,t,bt(tb,d3(e),r,Dn,ob,k,k,l3,Me(n)))}),Nn=U(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),cb={f0:A,f8:A,hW:j({bb:0,cg:T(Nn,155/255,203/255,1,1),e6:P(0,0),bs:3})},lb=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,c=i.g$;return c.$===1?E(i,{g$:j(o)}):i;case 1:var l=t.a,$=i.gO;return $.$===1?E(i,{gO:j(l)}):i;default:var m=t.a,p=i.e3;return p.$===1?E(i,{e3:j(m)}):i}}),n=function(t){return{gO:function(){var i=t.gO;if(i.$===1)return cb;var o=i.a;return o}(),g$:function(){var i=t.g$;if(i.$===1)return 1;var o=i.a;return o}(),e3:function(){var i=t.e3;if(i.$===1)return 0;var o=i.a;return o}()}};return n(s(qe,r,{gO:A,g$:A,e3:A},e))},ub=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(or);case 1:var t=r.a.h9,n=r.a.g0;return a(n,e(t),or);case 2:var i=r.a;return Gt(i);default:return Gt("")}}),$b=M(function(e,r,n){var t=lb(e),i=function(){var o=t.e3;return o===1?Tv(t):o3(t)}();return a(ub,i,T(Ge,or,Fr,r,ke(u([n]))))}),Ot=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),ff=v(function(e,r){return{$:1,a:e,b:r}}),mf=function(e){return{$:2,a:e}},vb={$:1},xe=v(function(e,r){return{$:4,a:e,b:r}}),tl=function(e){return{$:3,a:e}},sf=me(8),df=me(14),pf=me(5),hf=me(4),Za=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return ze(r)+("-"+(ze(n)+("-"+(ze(t)+("-"+ze(i))))))},Ki=gp,il=hp,gf=v(function(e,r){return V(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ne,"-",il(Ki(n)));case 4:var n=e.a;return e.b,a(ne,"-",il(Ki(n)));default:var n=e.a.hq;return a(ne,"-",il(Ki(n)))}}())}),fb=function(){var e=u([tl("Open Sans"),tl("Helvetica"),tl("Verdana"),vb]);return u([a(xe,sf,s(Ot,"bg-"+Za(T(Nn,1,1,1,0)),"background-color",T(Nn,1,1,1,0))),a(xe,df,s(Ot,"fc-"+Za(T(Nn,0,0,0,1)),"color",T(Nn,0,0,0,1))),a(xe,hf,mf(20)),a(xe,pf,a(ff,s(Te,gf,"font-",e),e))])}(),mb=M(function(e,r,n){var t=e.hA;return s($b,t,a(C,He(a(ne," ",u([h.hP,h.fY,h.hZ]))),V(fb,r)),n)}),bf={$:3},_f=function(e){return{$:2,a:e}},ol=m0,yf=v(function(e,r){switch(r.$){case 1:var n=r.a;return Oc({g0:v(function(o,c){return a(ol,e,a(n.g0,o,c))}),h9:n.h9});case 0:var t=r.a;return Et(a(qn,ol(e),t));case 2:var i=r.a;return _f(i);default:return bf}}),cl=yf,sb=ol,db=function(e){return{$:0,a:e}},we=db,pb=d0,Oe=pb,xf={$:1},eo=function(e){return{$:5,a:e}},ll=eo(0),Xr=M(function(e,r,n){return T(Nn,e/255,r/255,n/255,1)}),Ut=s(Xr,0,0,0),hb=Ur("d"),gb=Ur("fill"),bb=Ur("height"),wf=s$("http://www.w3.org/2000/svg"),_b=wf("path"),yb=wf("svg"),xb=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fW:i,f4:t,gR:n,hJ:r}},wb=function(e){var r=xb(e);return"rgba("+(D(De(r.hJ*255))+(","+D(De(r.gR*255))+(","+D(De(r.f4*255))+(","+ae(r.fW)+")"))))},Sb=Ur("viewBox"),Cb=Ur("width"),Xa=M(function(e,r,n){return a(yb,u([Sb("0 0 100 100"),Cb(D(e)),bb(D(e))]),u([a(_b,u([hb(n),gb(wb(r))]),k)]))}),zb={$:1},fr=zb,Sf=function(e){return{$:7,a:e}},O=Sf,ge=v(function(e,r){return T(Ge,or,Fr,a(C,O(fr),a(C,$e(fr),e)),ke(u([r])))}),Cf=function(e){return{$:2,a:e}},X=Cf(1),xa={gD:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gQ:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gX:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hD:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hF:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hI:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",h$:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",iA:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",iD:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fL:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Qa={dg:260,bO:54},br=function(e){return a(xe,sf,s(Ot,"bg-"+Za(e),"background-color",e))},Pb=me(28),_n=function(e){return a(xe,Pb,s(Ot,"bc-"+Za(e),"border-color",e))},ro=1,Xe=v(function(e,r){return T(Ge,ro,Fr,a(C,He(h.gs+(" "+h.bD)),a(C,$e(fr),a(C,O(fr),e))),ke(r))}),Lb=s(Xr,83,83,83),zf=U(function(e,r,n,t){return T(Nn,e/255,r/255,n/255,t)}),no=T(zf,56,56,56,.25),Qe=bf,Ka=Ye(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),et=me(2),Qr=function(e){var r=e;return a(xe,et,N(Ka,"p-"+D(e),r,r,r,r))},Pf=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Lf=me(3),Tf=v(function(e,r){return"spacing-"+(D(e)+("-"+D(r)))}),Ke=function(e){return a(xe,Lf,s(Pf,a(Tf,e,e),e,e))},Tb=T(zf,0,0,0,0),Mb=function(e){return{$:4,a:e}},ul=0,Kr=v(function(e,r){return T(Ge,ul,Fr,a(C,He(h.bD+(" "+h.aE)),a(C,O(fr),a(C,$e(fr),e))),ke(r))}),kb=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.g0(a(Tv,{gO:{f0:A,f8:A,hW:A},g$:1,e3:0},n.h9));case 2:var t=e.a;return Ri(Qn(t));default:return Ri(Qn(""))}},Db=v(function(e,r){return kb(e(r))}),Nb=s0,Ib=v(function(e,r){return Et(s(Nb,Db,e,r))}),Ar=function(e){return a(xe,df,s(Ot,"fc-"+Za(e),"color",e))},ao=s(Xr,195,195,195),en=v(function(e,r){return{$:3,a:e,b:r}}),$l=me(13),Eb=a(en,$l,h.iq),Mf=me(20),Yt=a(en,Mf,h.hU),rn=function(e){return a(xe,hf,mf(e))},to=a(en,$l,h.f7),io=v(function(e,r){if(r.$===-2)return sn;var n=r.a,t=r.b,i=r.c,o=r.d,c=r.e;return N(ce,n,t,a(e,t,i),a(io,e,o),a(io,e,c))}),qt=v(function(e,r){if(oe(e,r)){var n=e;return a(xe,et,N(Ka,"p-"+D(e),n,n,n,n))}else{var t=r,i=e;return a(xe,et,N(Ka,"p-"+(D(e)+("-"+D(r))),t,i,t,i))}}),nr=function(e){return _f(e)},Bb=function(e){return s(ki,M(function(r,n,t){return a(C,n,t)}),k,e)},Fb=v(function(e,r){return{$:3,a:e,b:r}}),jb=v(function(e,r){return{$:2,a:e,b:r}}),Ab=v(function(e,r){return{$:0,a:e,b:r}}),Vb=v(function(e,r){return{$:1,a:e,b:r}}),wa=U(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),vl=T(wa,0/255,0/255,0/255,1),oo=function(e){return{$:6,a:e}},Jb=oo(0),Zt=function(e){return{$:2,a:e}},Rb={$:6},fl=Zt(Rb),ml=M(function(e,r,n){if(r.$===1)return r.a,T(Ge,ro,gn("label"),e,ke(u([n])));var t=r.a,i=r.b,o=r.c,c=T(Ge,or,Fr,i,ke(u([o])));switch(t){case 2:return T(Ge,ro,gn("label"),a(C,He(h.ct),e),ke(u([c,n])));case 3:return T(Ge,ro,gn("label"),a(C,He(h.ct),e),ke(u([n,c])));case 0:return T(Ge,ul,gn("label"),a(C,He(h.ct),e),ke(u([n,c])));default:return T(Ge,ul,gn("label"),a(C,He(h.ct),e),ke(u([c,n])))}}),co=Wt,In=eo(1),kf="Enter",Hb=function(e){return{$:5,a:e}},sl=function(e){if(e.$===1){var r=e.a;return Zt(Hb(r))}else return Er},dl=function(e){return e.$===1},Gb=function(e){return{$:0,a:e}},pl=d$,Wb=v(function(e,r){return a(pl,e,Gb(r))}),Df=function(e){return a(Wb,"click",Re(e))},Ob=Tp,Ub=function(e){return{$:2,a:e}},Yb=v(function(e,r){return a(pl,e,Ub(r))}),Nf=function(e){var r=function(t){var i=e(t);if(i.$===1)return Ob("No key matched");var o=i.a;return Re(o)},n=a(q,r,a(H,"key",Yn));return ye(a(Yb,"keydown",a(va,function(t){return P(t,!0)},n)))},If=me(21),Sa=a(en,If,h.gv),Ef=" ",Bf=function(e){return a(Ur,"tabIndex",D(e))},qb=a(qn,ye,Bf),Ff=v(function(e,r){var n=r.de,t=r.g1,i=r.gk,o=r.e7,c=V(u([dl(n)?Er:Ke(6),ye(Df(o(!i))),fl,Nf(function(l){return oe(l,kf)||oe(l,Ef)?j(o(!i)):A}),qb(0),Sa,Jb,O(X)]),e);return s(ml,a(C,ye(a(co,"role","checkbox")),a(C,ye(a(co,"aria-checked",i?"true":"false")),a(C,sl(n),c))),n,T(Ge,or,Fr,u([In,$e(X),O(fr)]),ke(u([t(i)]))))}),Zb=M(function(e,r,n){return V(a(Nt,e-fa(n),Vi(r)),n)}),lo=Yd,jf=function(e){var r=function(n){return n<10?D(n):Vi(pv(87+n))};return e<16?r(e):V(jf(e/16|0),r(a(lo,16,e)))},Xb=a(Ze,jf,a(Zb,2,"0")),hl=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fW:i,f4:t,gR:n,hJ:r}},Qb=function(e){var r=hl(e),n=r.hJ,t=r.gR,i=r.f4;return a(ne,"",a(C,"#",a(W,a(Ze,De,Xb),u([n*255,t*255,i*255]))))},gl=me(12),Af=a(en,gl,h.ii),uo=oo(1),je=qd,Xt=function(e){return e*je/180},Kb=function(e){return{$:1,a:e}},bl=v(function(e,r){return{$:10,a:e,b:r}}),e1=me(26),Vf=function(e){return a(bl,e1,Kb(-e))},ra=M(function(e,r,n){return T(Nn,e,r,n,1)}),_l=Nn,r1=v(function(e,r){return{$:4,a:e,b:r}}),n1=me(24),a1=function(e){return a(bl,n1,a(r1,B(0,0,1),e))},t1=me(17),nn=function(e){return a(xe,t1,s(gr,"br-"+D(e),"border-radius",D(e)+"px"))},i1=function(e){return ga(u([e.eu?"box-inset":"box-",ze(e.e6.a)+"px",ze(e.e6.b)+"px",ze(e.bb)+"px",ze(e.bs)+"px",Za(e.cg)]))},o1=me(19),c1=function(e){var r={bb:e.bb,cg:e.cg,eu:!1,e6:e.e6,bs:e.bs};return a(xe,o1,s(gr,i1(r),"box-shadow",Yc(r)))},yl=v(function(e,r){return{$:12,a:e,b:r}}),xl=me(0),l1=function(e){return e?a(xe,xl,a(yl,"transparent",1)):a(xe,xl,a(yl,"visible",0))},$o=s(ra,1,1,1),wl=Ye(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Qt=function(e){return a(xe,Qi,N(wl,"b-"+D(e),e,e,e,e))},u1=v(function(e,r){return a(xe,Qi,N(wl,"b-"+(D(e)+("-"+D(r))),r,e,r,e))}),Kt=function(e){var r=e.cc,n=e.cT,t=e.hh,i=e.hM;return oe(n,r)&&oe(t,i)?oe(n,i)?Qt(n):a(u1,t,n):a(xe,Qi,N(wl,"b-"+(D(n)+("-"+(D(i)+("-"+(D(r)+("-"+D(t))))))),n,i,r,t))},Jf=function(e){return a(ge,u([He("focusable"),O(we(14)),$e(we(14)),Ar($o),In,rn(9),Af,nn(3),_n(e?s(ra,59/255,153/255,252/255):s(ra,211/255,211/255,211/255)),c1({bb:1,cg:e?T(_l,238/255,238/255,238/255,0):s(ra,238/255,238/255,238/255),e6:P(0,0),bs:1}),br(e?s(ra,59/255,153/255,252/255):$o),Qt(e?0:1),Hi(a(ge,u([_n($o),$e(we(6)),O(we(9)),a1(Xt(-45)),uo,In,Vf(1),l1(!e),Kt({cc:2,hh:2,hM:0,cT:0})]),Qe))]),Qe)},$1=Br("htmlFor"),v1=v(function(e,r){if(r.$)return A;var n=r.a;return e(n)}),vo=v(function(e,r){if(r.$){var t=r.a;return $r(t)}else{var n=r.a;return e(n)}}),Rf=U(function(e,r,n,t){return{g6:r,hm:e,ht:n,ia:t}}),f1=R0,m1=Cp,s1=v(function(e,r){if(r.$)return $r(e);var n=r.a;return Be(n)}),d1=J0,p1=function(e){return a(d1,{gg:!1,hp:!1},e)},En=function(e){if(e.b){var r=e.a;return e.b,j(r)}else return A},h1=v(function(e,r){if(r.$){var t=r.a;return $r(t)}else{var n=r.a;return Be(e(n))}}),g1=function(e){return{$:2,a:e}},b1=function(e){return{$:0,a:e}},_1=function(e){return{$:1,a:e}},Sl=v(function(e,r){return mn(r)-mn(e)}),Cl=M(function(e,r,n){var t=mn(n);return ue(mn(e),t)<1&&ue(t,mn(r))<1}),y1=v(function(e,r){var n=function(i){return ue(i,e)<0?Be(i):$r(_1(r))},t=s(Cl,"0","9",r)?Be(a(Sl,"0",r)):s(Cl,"a","z",r)?Be(10+a(Sl,"a",r)):s(Cl,"A","Z",r)?Be(10+a(Sl,"A",r)):$r(b1(r));return a(vo,n,t)}),Hf=v(function(e,r){var n=Aa(r);if(n.$===1)return Be(0);var t=n.a,i=t.a,o=t.b;return a(vo,function(c){return a(vo,function(l){return Be(c+l*e)},a(Hf,e,o))},a(y1,e,i))}),x1=v(function(e,r){return 2<=e&&e<=36?a(Hf,e,Hc(r)):$r(g1(e))}),w1=x1(16),S1=M(function(e,r,n){return T(wa,e,r,n,1)}),C1=U(function(e,r,n,t){return T(wa,e,r,n,t)}),Vr=Ud,z1=v(function(e,r){var n=a(Vr,10,e);return De(r*n)/n}),P1=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=dv(n);if(t.b&&!t.b.b){var i=t.a;return m1(u([i,i]))}else return n};return a(Ze,Ki,a(Ze,function(n){return a(se,function(t){return s(f1,1,t,n)},p1(e))},a(Ze,v1(En),a(Ze,se(function(n){return n.ia}),a(Ze,se(jr(pr)),a(Ze,s1("Parsing hex regex failed"),vo(function(n){var t=a(W,a(Ze,r,a(Ze,w1,h1(Lt))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,c=o.a.a,l=o.b,$=l.a.a,m=l.b,p=m.a.a;return Be(T(C1,i/255,c/255,$/255,a(z1,2,p/255)))}else break e;else{var i=t.a.a,d=t.b,c=d.a.a,g=d.b,$=g.a.a;return Be(s(S1,i/255,c/255,$/255))}else break e;return $r("Parsing ints from hex failed")})))))))}(),L1=Br("id"),T1=vn("input"),M1=vn("label"),zl=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),k1=zl(0),D1=Br("name"),N1=function(e){return P(e,!0)},I1=function(e){return{$:1,a:e}},E1=v(function(e,r){return a(pl,e,I1(r))}),B1=v(function(e,r){return s(qe,H,r,e)}),F1=a(B1,u(["target","value"]),Yn),Pl=function(e){return a(E1,"input",a(va,N1,a(va,e,F1)))},j1=a(en,gl,h.$9),Gf=a(en,gl,h.ir),fo=function(e){return a(Lv,5,e)},ei=function(e){return a(xe,pf,a(ff,s(Te,gf,"ff-",e),e))},A1=s(Xr,195,195,195),Wf=s(Xr,69,69,69),V1=zl(2),J1={$:2},ri=J1,R1=me(32),H1=me(31),Of=function(e){return s(qe,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return j(i)}else return A;else{var t=n.a;return j(t)}}),A,e)},G1=v(function(e,r){return a(ve,r,s(qe,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return j(P(i,c))}else return A;else{var i=t.a;return j(i)}}),A,e))}),Uf=function(e){return s(qe,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return j(i)}else return A;else{var t=n.a;return j(t)}}),A,e)},W1=me(33),O1=Br("max"),U1=Br("min"),Y1=v(function(e,r){return a(xe,Lf,s(Pf,a(Tf,e,r),e,r))}),q1=function(e){return a(Br,"step",e)},Ll=Br("type"),Tl=Br("value"),rt=Cf,Z1=b0,Yf=v(function(e,r){switch(r.$){case 0:return Er;case 2:var n=r.a;return Zt(n);case 6:var t=r.a;return oo(t);case 5:var i=r.a;return eo(i);case 7:var t=r.a;return Sf(t);case 8:var t=r.a;return Cv(t);case 3:var t=r.a,i=r.b;return a(en,t,i);case 4:var o=r.a,c=r.b;return a(xe,o,c);case 9:var l=r.a,$=r.b;return a(Pv,l,a(yf,e,$));case 1:var m=r.a;return ye(a(Z1,e,m));default:var p=r.a,d=r.b;return a(bl,p,d)}}),X1=M(function(e,r,n){return a(Kr,u([O(X),$e(a(ve,X,n)),In]),u([a(ge,u([O(rt(De(e*1e4)))]),Qe),a(ge,a(C,In,a(W,Yf(kt),r)),Qe),a(ge,u([O(rt(De(he(1-e)*1e4)))]),Qe)]))}),Q1=M(function(e,r,n){return a(Xe,u([$e(X),O(a(ve,X,n)),uo]),u([a(ge,u([$e(rt(De(he(1-e)*1e4)))]),Qe),a(ge,a(C,uo,a(W,Yf(kt),r)),Qe),a(ge,u([$e(rt(De(e*1e4)))]),Qe)]))}),qf=v(function(e,r){var n=Uf(e),t=Of(e),i=function(){var S=P(n,t);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var x=S.a.a.a,z=S.b.a.a;return ue(z,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cU-r.cD)/(r.cB-r.cD),c=r.iv,l=c,$=Of(l),m=function(){if($.$===1)return"20px";if($.a.$)return"100%";var S=$.a.a;return D(S)+"px"}(),p=Uf(l),d=function(){if(p.$===1)return"20px";if(p.a.$)return"100%";var S=p.a.a;return D(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=u([a(te,"width",d),a(te,"height",m)]),_=a(G1,e,P(5,5)),y=_.a,w=_.b;return s(ml,u([dl(r.de)?Er:a(Y1,y,w),fl,O(function(){if(n.$===1)return X;if(n.a.$){var S=n.a;return S}else return fr}()),$e(function(){if(t.$===1)return fr;if(t.a.$){var S=t.a;return S}else return fr}())]),r.de,a(Kr,u([O(a(ve,X,n)),$e(a(ve,we(20),t))]),u([T(Ge,or,gn("input"),u([sl(r.de),a(xe,R1,a(At,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),a(xe,W1,a(At,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),a(xe,H1,a(At,'input[type="range"].'+(g+"::-ms-thumb"),f)),ye(Lr(g+" ui-slide-bar focusable-parent")),ye(Pl(function(S){var x=sv(S);if(x.$===1)return r.e7(0);var z=x.a;return r.e7(z)})),ye(Ll("range")),ye(q1(function(){var S=r.cR;if(S.$===1)return"any";var x=S.a;return ae(x)}())),ye(U1(ae(r.cD))),ye(O1(ae(r.cB))),ye(Tl(ae(r.cU))),i?ye(a(co,"orient","vertical")):Er,O(i?a(ve,we(20),t):a(ve,X,n)),$e(i?a(ve,X,n):a(ve,we(20),t))]),ke(k)),a(ge,a(C,O(a(ve,X,n)),a(C,$e(a(ve,we(20),t)),V(e,u([fo(i?s(Q1,o,a(C,He("focusable-thumb"),l),n):s(X1,o,a(C,He("focusable-thumb"),l),t))])))),Qe)])))}),K1=s(ra,.5,.5,.5),Zf=pr,Xf=function(e){var r=e.df,n=e.cU,t=e.cD,i=e.cB,o=e.cR,c=e.e7;return a(ge,u([O(X)]),a(qf,u([Ke(2),fo(a(ge,u([O(X),$e(we(16)),In,br(Wf),nn(4)]),Qe))]),{de:a(V1,k,a(Kr,u([O(X)]),u([a(ge,u([j1]),nr(r)),a(ge,u([O(X),Gf,ei(u([ri]))]),nr(ae(n)))]))),cB:i,cD:t,e7:c,cR:j(o),iv:Zf(u([O(we(12)),$e(we(12)),nn(4),Qt(0),_n(K1),br(A1)])),cU:n}))},Ml=v(function(e,r){if(r.$)return e;var n=r.a;return n}),e_=v(function(e,r){switch(r.$){case 3:var n=r.a;return a(Ff,k,{gk:n,g1:Jf,de:a(k1,k,nr(e)),e7:Fb(e)});case 0:var t=r.a,i=t.a,o=t.b,n=r.b;return Xf({df:e,cB:o,cD:i,e7:Ab(e),cR:.001*(o-i),cU:n});case 1:var c=r.a,i=c.a,o=c.b,n=r.b;return Xf({df:e,cB:o,cD:i,e7:a(Ze,De,Vb(e)),cR:1,cU:n});default:var n=r.a;return a(ge,u([O(X)]),Zn(a(Ga,k,u([a(Ga,u([a(Oe,"margin-bottom","6px")]),u([a(M1,u([$1(e)]),u([qi(e)]))])),a(T1,u([Ll("color"),a(Oe,"width","100%"),a(Oe,"height","26px"),a(Oe,"padding","0px"),L1(e),D1(e),Pl(function(l){return a(jb,e,a(Ml,vl,P1(l)))}),Tl(Qb(n))]),k)]))))}}),mo=s(Xr,255,255,255),r_=function(e){return a(Xe,u([O(X),Ke(8),a(qt,0,14),Kt({cc:1,hh:0,hM:0,cT:0}),_n(no)]),u([a(ge,u([rn(16),to,Ar(mo)]),nr(e.hq)),a(Xe,u([O(X),Ke(6)]),Bb(a(io,e_,e.aW)))]))},n_=function(e){return a(Xe,u([O(X),$e(X),Ar(ao),rn(12),Eb,Yt]),a(W,r_,e))},a_=Ib(n_),t_=function(e){return a(Xe,u([O(X),$e(X)]),u([a(Kr,u([Ke(14),O(X)]),k),a(cl,Mb,a_(ma(e).gr))]))},i_=function(e){return{$:6,a:e}},o_=U(function(e,r,n,t){return"pad-"+(D(e)+("-"+(D(r)+("-"+(D(n)+("-"+D(t)))))))}),Qf=function(e){var r=e.cT,n=e.hM,t=e.cc,i=e.hh;if(oe(r,n)&&oe(r,t)&&oe(r,i)){var o=r;return a(xe,et,N(Ka,"p-"+D(r),o,o,o,o))}else return a(xe,et,N(Ka,T(o_,r,n,t,i),r,n,t,i))},c_=function(e){return{$:0,a:e}},l_=function(e){return{$:1,a:e}},Kf=l_,u_=function(e){var r=e.b.ab;return fn(r)},so=s(Xr,255,60,0),$_=function(e){var r=e.b.ab;e.b.s;var n=e.b.au;return fn(r)+1+fn(n)},v_=function(e){var r=P(u_(e),$_(e)-1),n=r.a,t=r.b;return a(ge,u([O(X),In]),a(qf,u([fo(a(Kr,u([O(X),$e(we(4)),In,br(Wf),nn(2)]),u([a(ge,u([O(rt(n)),$e(X),br(so),nn(2)]),Qe),a(ge,u([O(rt(t-n))]),Qe)])))]),{de:Kf(""),cB:t,cD:0,e7:a(Ze,De,c_),cR:j(1),iv:Zf(u([O(we(12)),$e(we(12)),nn(6),br(so)])),cU:n}))},em=oo(2),ni=s(Xr,220,220,220),f_=function(e){var r=e.a,n=function(){return r.$?u([Ar(ni)]):u([Ar(so)])}();return a(ge,V(n,u([rn(14),em,Gf,ei(u([ri]))])),nr(a(_v,3,ma(e).gp)))},m_=function(e){e.a;var r=e.b.ab;return a(se,function(n){return De(60/(ma(e).gp-n))},a(se,a(Ze,Di,function(n){return n.gp}),En(a(uv,59,r))))},s_=function(e){var r=m_(e);if(r.$===1)return Qe;var n=r.a;return a(ge,u([rn(14),Ar(ao),ei(u([ri]))]),nr(D(n)+" FPS"))},rm={$:1},d_={$:3},p_={$:2},h_={$:8},g_=Cr,nm=v(function(e,r){return a(gc,e,g_(r))}),b_=nm("disabled"),kl=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},__=function(e){return a(sa,kl,e)?Er:He("focusable")},po=a(qn,ye,Df),Dl=v(function(e,r){var n=r.hv,t=r.de;return T(Ge,or,Fr,a(C,O(fr),a(C,$e(fr),a(C,He(h.ck+(" "+(h.aE+(" "+(h.hV+(" "+h.e5)))))),a(C,Sa,a(C,__(e),a(C,Zt(h_),a(C,ye(Bf(0)),function(){if(n.$===1)return a(C,ye(b_(!0)),e);var i=n.a;return a(C,po(i),a(C,Nf(function(o){return oe(o,kf)||oe(o,Ef)?j(i):A}),e))}()))))))),ke(u([t])))}),am=v(function(e,r){return a(Dl,k,{de:a(ge,u([O(we(36)),Qr(3),Ar(r),Af,rn(12),to,_n(r),Qt(1),nn(4)]),nr("REC")),hv:j(e)})}),tm=M(function(e,r,n){return a(Dl,k,{de:Zn(s(Xa,20,n,e)),hv:j(r)})}),y_=function(e){var r=e.a;e.b.ab,e.b.s;var n=e.b.au;return a(Kr,k,u([a(ge,u([O(we(40))]),function(){switch(r.$){case 0:return a(am,rm,so);case 1:return a(am,p_,ni);default:return Qe}}()),a(ge,u([O(we(28))]),function(){switch(r.$){case 0:return Qe;case 1:return Kn(n)?Qe:s(tm,xa.hF,d_,ni);default:return s(tm,xa.hD,rm,ni)}}())]))},x_=function(e){return a(Xe,u([O(X)]),u([v_(e),a(Kr,u([O(X),Ke(14),a(qt,0,6),In]),u([y_(e),s_(e),f_(e)]))]))},w_=function(e){return a(Xe,u([O(X),Ke(14),Qf({cc:20,hh:0,hM:0,cT:0}),Kt({cc:1,hh:0,hM:0,cT:0}),_n(no)]),u([a(ge,u([rn(16),to,Ar(ao)]),nr("Time Travel")),a(cl,i_,x_(e))]))},S_=v(function(e,r){return a(Xe,u([ma(r).cO.iH>600?br(Lb):br(Tb),Kt({cc:0,hh:0,hM:1,cT:0}),_n(no),O(we(Qa.dg)),$e(X)]),u([function(){return e?Qe:a(Xe,u([O(X),$e(X),Qr(14),Ke(14)]),u([w_(r),t_(r)]))}()]))}),C_=function(e){return{$:3,a:e}},ho=eo(2),z_=s(Xr,232,78,50),P_=s(Xr,48,48,48),L_=function(e){return a(Br,"href",g0(e))},T_=Ur("rel"),M_=Br("target"),im=v(function(e,r){var n=r.fA,t=r.de;return T(Ge,or,gn("a"),a(C,ye(L_(n)),a(C,ye(T_("noopener noreferrer")),a(C,ye(M_("_blank")),a(C,O(fr),a(C,$e(fr),a(C,He(h.ck+(" "+(h.aE+(" "+h.eF)))),e)))))),ke(u([t])))}),ai=Br("title"),k_=s(Xr,31,161,242),D_=function(e){var r=M(function(o,c,l){var $=oe(c,e)?mo:P_;return a(ge,u([Pr(ai(o)),po(C_(c)),Sa,Qr(7)]),Zn(s(Xa,40,$,l)))}),n=a(Xe,u([ll]),u([s(r,"Configurations",0,xa.h$)])),t=a(Xe,k,u([a(im,u([Pr(ai("Twitter")),ho,Sa,Qr(7)]),{de:Zn(s(Xa,40,k_,xa.iA)),fA:"https://twitter.com/AzizErkalSelman"}),a(im,u([Pr(ai("Source Code")),ho,Sa,Qr(7)]),{de:Zn(s(Xa,40,z_,xa.gQ)),fA:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(ge,u([O(we(Qa.bO)),Qr(4),po(xf),Kt({cc:1,hh:0,hM:0,cT:0}),_n(no),Sa,Pr(ai("Activate Distraction Free Mode"))]),Zn(s(Xa,46,mo,xa.fL)));return a(Xe,u([O(we(Qa.bO)),$e(X),Yt,br(Ut)]),u([i,n,t]))},N_=function(e){var r=a(ge,u([O(we(Qa.bO)),ll,Qr(4),po(xf),Sa,Pr(ai("Deactivate Distraction Free Mode (A)"))]),Zn(s(Xa,46,Ut,xa.fL)));return e.bG?r:a(Kr,u([O(we(Qa.bO+Qa.dg)),$e(X)]),u([D_(e.bz),a(S_,e.bz,e.W)]))},I_=M(function(e,r,n){var t=a3(n.W),i=ma(n.W);return s(mb,{hA:u([i3({f0:A,f8:A,hW:A})])},u([O(we(Pt(i.cO.iH))),$e(we(Pt(i.cO.gY))),Pr(a(Oe,"-webkit-font-smoothing","antialiased")),Pr(a(Oe,"pointer-events","none")),Pr(a(Oe,"touch-action","none")),Pr(a(Oe,"user-select","none")),Hi(a(cl,r3,a(r,i,t))),Hi(N_(n))]),Zn(a(sb,Ri(n3),a(e,i,t))))}),E_=Sr(function(e,r,n,t,i,o){var c=v(function($,m){return P(T(qg,r,o,$,m),Sv)}),l=function($){var m=a(nv,n,$.hd);return P({bz:0,bG:!0,W:a(Zg,m,t),dZ:0},Sv)};return hg({g7:l,ib:e3,iC:c,iE:a(I_,e,i)})}),om={$:0},Nl={$:0},go=M(function(e,r,n){return{iJ:e,iN:r,d4:n}}),cm=Jp,B_=v(function(e,r){return{T:e,ae:r}}),lm=M(function(e,r,n){return{cm:n,aK:r,bT:e}}),um=function(e){return s(Te,Wi,Ft,e)},$m=M(function(e,r,n){return{iJ:e,iN:r,d4:n}}),F_=Ni(Kh),Jr=M(function(e,r,n){return a(F_,a(H,e,r),n)}),vm=s(Jr,"z",Fe,s(Jr,"y",Fe,s(Jr,"x",Fe,Re($m)))),Il=Mp,j_=s(Jr,"data",Re(0),s(Jr,"outNeighbours",a(va,um,dn(Il)),s(Jr,"position",vm,Re(lm)))),A_=function(e){return{eW:e}},V_=s(Jr,"mappedToBaseVertex",Il,Re(A_)),J_=s(Jr,"data",V_,s(Jr,"outNeighbours",a(va,um,dn(Il)),s(Jr,"position",vm,Re(lm)))),bo=Bp,fm=v(function(e,r){return P(e,r)}),R_=s(Jr,"playerGraph",dn(s(Ni,fm,a(bo,0,Yn),a(bo,1,J_))),s(Jr,"baseGraph",dn(s(Ni,fm,a(bo,0,Yn),a(bo,1,j_))),Re(B_))),mm=function(e){return s(Te,v(function(r,n){var t=r.a,i=r.b;return s(Un,t,i,n)}),Gi,e)},sm=function(e){return mm(a(W,function(r){var n=r.a,t=r.b;return P(a(ve,999,Bc(n)),t)},e))},H_=function(e){return{T:sm(e.T),ae:sm(e.ae)}},dm=a(va,H_,R_),G_=Vp,pm=function(e){var r=M(function(n,t,i){return{H:i,o:n,s:t}});return T(G_,r,a(H,"before",dn(e)),a(H,"current",e),a(H,"after",dn(e)))},hm=Gi,gm={T:hm,ae:hm},W_=`
{
  "before": [],
  "current": {
    "baseGraph": [
      [
        "0",
        {
          "position": {
            "x": -0.24675948085844226,
            "y": 2.590974549013644,
            "z": 3.552713678800501e-15
          },
          "outNeighbours": [
            1
          ],
          "data": null
        }
      ],
      [
        "1",
        {
          "position": {
            "x": -2.590974549013644,
            "y": -1.758161301116401,
            "z": 0
          },
          "outNeighbours": [
            2
          ],
          "data": null
        }
      ],
      [
        "2",
        {
          "position": {
            "x": 2.3133701330478957,
            "y": -1.7735837686700535,
            "z": 0
          },
          "outNeighbours": [],
          "data": null
        }
      ]
    ],
    "playerGraph": [
      [
        "0",
        {
          "position": {
            "x": -2.59097454901364,
            "y": -1.7581613011163988,
            "z": 1.0329372504774534e-30
          },
          "outNeighbours": [
            1
          ],
          "data": {
            "mappedToBaseVertex": 1
          }
        }
      ],
      [
        "1",
        {
          "position": {
            "x": -0.24675948086016916,
            "y": 2.5909745490149825,
            "z": 3.5527136784716473e-15
          },
          "outNeighbours": [
            2
          ],
          "data": {
            "mappedToBaseVertex": 0
          }
        }
      ],
      [
        "2",
        {
          "position": {
            "x": 2.3133701330478917,
            "y": -1.7735837686700555,
            "z": -7.324791694637559e-33
          },
          "outNeighbours": [],
          "data": {
            "mappedToBaseVertex": 2
          }
        }
      ]
    ]
  },
  "after": [
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -2.205412860172328,
              "y": 2.1283005224040648,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.1283005224040643,
              "y": -1.9894983144211906,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.112878054850412,
              "y": -1.9278084442065802,
              "z": 0
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.0203432495284956,
              "y": 2.2516802628332853,
              "z": 0
            },
            "outNeighbours": [
              0
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": -2.205412860155744,
              "y": 2.128300522418598,
              "z": 1.8913496096524053e-25
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.1283005224040688,
              "y": -1.9894983144211962,
              "z": 3.0316055274290395e-29
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.0203432495284916,
              "y": 2.2516802628332897,
              "z": -1.1344976625790978e-31
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.112878054850408,
              "y": -1.9278084442065824,
              "z": 9.639441824238942e-44
            },
            "outNeighbours": [
              0
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ]
      ]
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": 0.04626740266095791,
              "y": 4.194911174593519,
              "z": 0
            },
            "outNeighbours": [
              1
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.4213274059234644,
              "y": 1.7273163660090958,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 2.5909745490136435,
              "y": 1.6964714309017905,
              "z": 0
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.606397016567296,
              "y": -1.7581613011164012,
              "z": 0
            },
            "outNeighbours": [
              4
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 0.030844935107305283,
              "y": -4.302868447469087,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -2.421327405923465,
              "y": -1.7890062362237065,
              "z": 0
            },
            "outNeighbours": [
              1,
              3
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": 2.5909745490136835,
              "y": 1.6964714309017488,
              "z": -3.665587812555619e-28
            },
            "outNeighbours": [
              1
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": -2.421327405923469,
              "y": 1.7273163660090978,
              "z": 3.2054634041132753e-32
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 0.046267402628346735,
              "y": 4.1949111747681105,
              "z": -1.0866603716007606e-25
            },
            "outNeighbours": [
              0,
              3
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": 2.6063970165673,
              "y": -1.7581613011163992,
              "z": 4.4379225004086626e-38
            },
            "outNeighbours": [
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -2.421327405923461,
              "y": -1.7890062362237087,
              "z": 6.985118375071225e-35
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 0.030844935107305252,
              "y": -4.302868447469079,
              "z": -1.7226142845885027e-41
            },
            "outNeighbours": [
              1,
              3
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ]
      ]
    },
    {
      "baseGraph": [
        [
          "0",
          {
            "position": {
              "x": -1.0641502612020322,
              "y": 4.349135850130045,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": null
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 3.4700551995718443,
              "y": 4.333713382576392,
              "z": 0
            },
            "outNeighbours": [
              2
            ],
            "data": null
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 3.439210264464539,
              "y": -0.863658183004548,
              "z": 0
            },
            "outNeighbours": [
              3
            ],
            "data": null
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -0.9716154558801163,
              "y": -0.987037923433769,
              "z": 3.552713678800501e-15
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": null
          }
        ],
        [
          "4",
          {
            "position": {
              "x": -3.392942861803581,
              "y": 2.2979476654942435,
              "z": 0
            },
            "outNeighbours": [
              5
            ],
            "data": null
          }
        ],
        [
          "5",
          {
            "position": {
              "x": -3.3004080564816656,
              "y": -3.238718186267054,
              "z": 0
            },
            "outNeighbours": [
              6
            ],
            "data": null
          }
        ],
        [
          "6",
          {
            "position": {
              "x": 1.850696106438317,
              "y": -3.2078732511597488,
              "z": 0
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": null
          }
        ],
        [
          "7",
          {
            "position": {
              "x": 1.6810489633481378,
              "y": 2.436749873477117,
              "z": 0
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": null
          }
        ]
      ],
      "playerGraph": [
        [
          "0",
          {
            "position": {
              "x": -0.9716154558801153,
              "y": -0.9870379234337678,
              "z": 3.552713678800497e-15
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 3
            }
          }
        ],
        [
          "1",
          {
            "position": {
              "x": 3.439210264464535,
              "y": -0.8636581830045491,
              "z": 2.775097550203857e-47
            },
            "outNeighbours": [
              2
            ],
            "data": {
              "mappedToBaseVertex": 2
            }
          }
        ],
        [
          "2",
          {
            "position": {
              "x": 3.470055199571857,
              "y": 4.3337133825764,
              "z": -4.5922617259897015e-29
            },
            "outNeighbours": [
              3
            ],
            "data": {
              "mappedToBaseVertex": 1
            }
          }
        ],
        [
          "3",
          {
            "position": {
              "x": -1.0641502612020344,
              "y": 4.349135850130036,
              "z": 1.8698127623923835e-33
            },
            "outNeighbours": [
              0,
              5
            ],
            "data": {
              "mappedToBaseVertex": 0
            }
          }
        ],
        [
          "4",
          {
            "position": {
              "x": 1.8506961064383192,
              "y": -3.2078732511597448,
              "z": -3.028727139831328e-49
            },
            "outNeighbours": [
              5
            ],
            "data": {
              "mappedToBaseVertex": 6
            }
          }
        ],
        [
          "5",
          {
            "position": {
              "x": 1.6810489633481356,
              "y": 2.4367498734771127,
              "z": -3.525322320730601e-39
            },
            "outNeighbours": [
              6
            ],
            "data": {
              "mappedToBaseVertex": 7
            }
          }
        ],
        [
          "6",
          {
            "position": {
              "x": -3.3929428618035855,
              "y": 2.297947665494248,
              "z": -2.1772851892180453e-43
            },
            "outNeighbours": [
              2,
              7
            ],
            "data": {
              "mappedToBaseVertex": 4
            }
          }
        ],
        [
          "7",
          {
            "position": {
              "x": -3.30040805648167,
              "y": -3.238718186267058,
              "z": 3.5228333833933177e-54
            },
            "outNeighbours": [
              1,
              4
            ],
            "data": {
              "mappedToBaseVertex": 5
            }
          }
        ]
      ]
    }
  ]
}
`,O_=function(e){return{H:k,o:k,s:e}},U_=a(Ml,O_(gm),a(cm,pm(dm),W_)),Y_={da:!1,db:"",dc:""},q_=function(e){return{N:Y_,ac:om,ai:Nl,a:U_,u:s(go,0,0,0)}},Z_=v(function(e,r){return P(e,vv(r))}),_o=v(function(e,r){return P(e,fv(r))}),X_=M(function(e,r,n){return{aW:n,he:r,hq:e}}),Q_=M(function(e,r,n){return s(X_,e,r,mm(n))}),ti=Q_,mr=M(function(e,r,n){var t=r.a,i=r.b;return P(e,a(mv,P(t,i),n))}),El=function(e){return e/255},bm=M(function(e,r,n){return T(wa,El(e),El(r),El(n),1)}),K_=T(wa,255/255,255/255,255/255,1),_m=T(wa,237/255,212/255,0/255,1),e2=u([s(ti,"Camera",!0,u([s(mr,"camera distance",P(3,40),20),s(mr,"camera azimuth",P(0,2*je),0),s(mr,"camera elevation",P(-je/2,je/2),0)])),s(ti,"Light",!0,u([s(mr,"sunlight azimuth",P(-je,je),-.5),s(mr,"sunlight elevation",P(-je,je),-2.7),s(mr,"azimuth for third light",P(-je,je),1),s(mr,"elevation for third light",P(-je,je),-2),s(mr,"azimuth for fourth light",P(-je,je),1),s(mr,"elevation for fourth light",P(-je,je),-2)])),s(ti,"Pointer",!0,u([a(Z_,"pointer view on/off",!0),a(_o,"pointer color",_m),s(mr,"pointer reach",P(.5,2),1)])),s(ti,"Base",!0,u([a(_o,"game background",s(bm,44,100,200)),a(_o,"base",s(bm,176,69,76)),s(mr,"base height",P(.01,5),.4),s(mr,"base vertex radius",P(.2,2),.5),s(mr,"base edge width",P(.2,1.5),1)])),s(ti,"Player CodeGraph",!0,u([a(_o,"player",K_),s(mr,"player vertex radius",P(.1,.6),.35),s(mr,"player edge width",P(.05,.6),.25)]))]),r2=v(function(e,r){return e.aw.aG?r:E(r,{ac:om})}),_r=function(e){var r=e;return r.s},yn=op,yo=v(function(e,r){return yn(a(Vr,r.iJ-e.iJ,2)+a(Vr,r.iN-e.iN,2))}),n2=v(function(e,r){return a(se,function(n){if(n.$)return 0;var t=n.b;return t},a(On,e,r.aW))}),a2=v(function(e,r){return a(ve,0,En(a(jr,n2(e),r)))}),t2=v(function(e,r){return a(a2,e,r.gr)}),Ae=t2,an=v(function(e,r){var n=r;return a(ve,s(go,-10,-10,0),a(se,function(t){return t.bT},a(On,e,n)))}),i2=M(function(e,r,n){var t=n;return s(da,e,se(function(i){return E(i,{aK:a(Wi,r,i.aK)})}),t)}),o2=U(function(e,r,n,t){var i=t,o={cm:e,aK:Ft,bT:n},c=1+a(ve,-1,Kc(Pc(i)));return s(da,r,se(function(l){return E(l,{aK:a(Wi,c,l.aK)})}),s(Un,c,o,i))}),c2=v(function(e,r){return E(r,{T:e(r.T)})}),Bl=v(function(e,r){var n=r;return E(n,{s:e(n.s)})}),xo=v(function(e,r){return E(r,{a:a(Bl,c2(e),r.a)})}),l2=v(function(e,r){return a(Vr,r.iJ-e.iJ,2)+a(Vr,r.iN-e.iN,2)}),u2=Od,wo=function(e){var r=e;return zt(r)},$2=v(function(e,r){return a(se,Di,En(a(u2,function(n){var t=n.b.bT;return a(l2,t,e)},wo(r))))}),nt=v(function(e,r){return a($2,r.u,_r(r.a).T)}),v2=v(function(e,r){if(e.aw.aG)return r;var n=P(r.ac,a(nt,e,r));if(n.a.$===2&&!n.b.$){var t=n.a.a.h0,i=n.b.a;return ue(a(yo,a(an,i,_r(r.a).T),r.u),a(Ae,"pointer reach",e))<0?a(xo,a(i2,t,i),r):a(xo,s(o2,0,t,r.u),r)}else return r}),f2=M(function(e,r,n){var t=n,i={cm:e,aK:Ft,bT:r},o=1+a(ve,-1,Kc(Pc(t)));return s(Un,o,i,t)}),m2=v(function(e,r){if(e.aw.aG&&e.bn.cZ){var n=P(r.ac,a(nt,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return ue(a(yo,a(an,t,_r(r.a).T),r.u),a(Ae,"pointer reach",e))>0?a(xo,a(f2,0,r.u),r):r}else return r}else return r}),s2=function(e){return{$:2,a:e}},d2=v(function(e,r){if(e.bn.cQ&&!e.bn.cZ&&e.aw.aG){var n=P(r.ac,a(nt,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return E(r,{ac:s2({h0:t})})}else return r}else return r}),p2=function(e){return{$:1,a:e}},h2=v(function(e,r){if(e.aw.aG&&!e.bn.cQ){var n=P(r.ac,a(nt,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return ue(a(yo,a(an,t,_r(r.a).T),r.u),a(Ae,"pointer reach",e))<0?E(r,{ac:p2({fC:t})}):r}else return r}else return r}),g2=v(function(e,r){return a(r2,e,a(v2,e,a(d2,e,a(h2,e,a(m2,e,r)))))}),ym=v(function(e,r){var n=r;return a(se,function(t){return t.cm},a(On,e,n))}),b2=v(function(e,r){return E(r,{ae:e(r.ae)})}),xm=v(function(e,r){return E(r,{a:a(Bl,b2(e),r.a)})}),Fl=v(function(e,r){var n=r;return a(io,e,n)}),_2=v(function(e,r){if(e.aw.aG)return r;var n=r.ai;if(n.$===1){var t=n.a,i=t.cC;if(i.$)return E(r,{ai:Nl});var o=i.a,c=v(function($,m){return E(m,{eW:$})}),l=v(function($,m){return oe($,t.cn)?E(m,{cm:a(c,o,m.cm)}):oe(m.cm.eW,o)?E(m,{cm:a(c,a(ve,0,a(se,function(p){return p.eW},a(ym,t.cn,_r(r.a).ae))),m.cm)}):m});return a(xm,Fl(l),E(r,{ai:Nl}))}else return r}),wm=function(e){return{$:1,a:e}},Sm=v(function(e,r){var n=a(nt,e,r);return a(se,Di,En(a(Qc,function(t){var i=t.b.cm;return oe(j(i.eW),n)},wo(_r(r.a).ae))))}),y2=v(function(e,r){if(e.aw.aG&&!e.bn.cQ){var n=P(r.ai,a(Sm,e,r));if(!n.a.$&&!n.b.$){n.a;var t=n.b.a;return ue(a(yo,a(an,t,_r(r.a).ae),r.u),a(Ae,"pointer reach",e))<0?E(r,{ai:wm({cn:t,cC:A})}):r}else return r}else return r}),x2=v(function(e,r){return a(_2,e,a(y2,e,r))}),w2=M(function(e,r,n){var t=n;return s(da,e,se(r),t)}),S2=v(function(e,r){var n=r.ac;if(n.$===1){var t=n.a.fC,i=function(o){return E(o,{bT:r.u})};return a(xo,a(w2,t,i),r)}else return r}),So=M(function(e,r,n){var t=function(i){return i(n)+e*(i(r)-i(n))};return{iJ:t(function(i){return i.iJ}),iN:t(function(i){return i.iN}),d4:t(function(i){return i.d4})}}),C2=v(function(e,r){var n=_r(r.a).ae,t=_r(r.a).T,i=v(function(o,c){var l=r.ai;if(l.$===1){var $=l.a.cn,m=l.a.cC;if(oe(o,$))return E(c,{bT:function(d){return s(go,d.iJ,d.iN,d.d4)}(r.u)});if(oe(j(c.cm.eW),m)){var p=s(So,.3,a(an,a(ve,0,a(se,function(d){return d.eW},a(ym,$,n))),t),a(an,c.cm.eW,t));return E(c,{bT:s(So,.1,function(d){return s(go,d.iJ,d.iN,d.d4+1)}(p),c.bT)})}else return E(c,{bT:s(So,.1,a(an,c.cm.eW,t),c.bT)})}else return E(c,{bT:s(So,.1,a(an,c.cm.eW,t),c.bT)})});return a(xm,Fl(i),r)}),z2=v(function(e,r){var n=r.ai;if(n.$===1){var t=n.a;return E(r,{ai:wm(E(t,{cC:a(nt,e,r)}))})}else return r}),tn=function(e){return e},at=function(e){return tn(je*(e/180))},Cm=function(e){return e},yr=function(e){return e},Co=function(e){var r=e;return-r},P2=v(function(e,r){var n=e,t=r;return{iJ:n.iN*t.d4-n.d4*t.iN,iN:n.d4*t.iJ-n.iJ*t.d4,d4:n.iJ*t.iN-n.iN*t.iJ}}),zm=function(e){var r=e;return r.d2},Pm=function(e){var r=e;return r.d3},L2=function(e){return a(P2,zm(e),Pm(e))},tt=function(e){var r=e;return r.dy},it=Zd,ot=Xd,zo=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=it(c),$=ot(c),m=t.gC,p=m,d=p.iJ*$,g=l*d,f=d*d,_=p.iN*$,y=l*_,w=d*_,S=_*_,x=1-2*(f+S),z=p.d4*$,F=l*z,Z=2*(w-F),ee=2*(w+F),Y=d*z,Q=2*(Y+y),K=2*(Y-y),R=_*z,ie=2*(R-g),de=2*(R+g),Pe=z*z,pe=1-2*(S+Pe),be=1-2*(f+Pe);return{iJ:pe*o.iJ+Z*o.iN+Q*o.d4,iN:ee*o.iJ+be*o.iN+ie*o.d4,d4:K*o.iJ+de*o.iN+x*o.d4}}),ii=M(function(e,r,n){var t=e,i=r,o=n,c=.5*i,l=it(c),$=ot(c),m=t.dy,p=m,d=o.iJ-p.iJ,g=o.iN-p.iN,f=o.d4-p.d4,_=t.gC,y=_,w=y.iJ*$,S=l*w,x=w*w,z=y.iN*$,F=l*z,Z=w*z,ee=z*z,Y=1-2*(x+ee),Q=y.d4*$,K=l*Q,R=2*(Z-K),ie=2*(Z+K),de=w*Q,Pe=2*(de+F),pe=2*(de-F),be=z*Q,Le=2*(be-S),_e=2*(be+S),Je=Q*Q,Ee=1-2*(ee+Je),cr=1-2*(x+Je);return{iJ:p.iJ+Ee*d+R*g+Pe*f,iN:p.iN+ie*d+cr*g+Le*f,d4:p.d4+pe*d+_e*g+Y*f}}),Ca=function(e){return e},za=function(e){var r=e;return r.d2},Pa=function(e){var r=e;return r.d3},La=function(e){var r=e;return r.d5},Lm=M(function(e,r,n){return Ca({dy:s(ii,e,r,tt(n)),d2:s(zo,e,r,za(n)),d3:s(zo,e,r,Pa(n)),d5:s(zo,e,r,La(n))})}),Tm=M(function(e,r,n){return s(Lm,e(n),r,n)}),jl=function(e){var r=e;return r.gC},ct=v(function(e,r){var n=e,t=r;return{iJ:t.iJ+n.iJ,iN:t.iN+n.iN,d4:t.d4+n.d4}}),Mm=v(function(e,r){return Ca({dy:a(ct,e,tt(r)),d2:za(r),d3:Pa(r),d5:La(r)})}),T2=v(function(e,r){var n=e,t=r;return{iJ:n*t.iJ,iN:n*t.iN,d4:n*t.d4}}),M2=M(function(e,r,n){return a(Mm,a(T2,r,e),n)}),k2=M(function(e,r,n){return s(M2,jl(e(n)),r,n)}),on=v(function(e,r){return{gC:r,dy:e}}),D2=function(e){var r=e;return a(on,r.dy,r.d2)},N2=function(e){var r=e;return a(on,r.dy,r.d3)},I2=function(e){var r=e;return a(on,r.dy,r.d5)},E2=function(e){var r=Ca({dy:e.bj,d2:Pm(e.eo),d3:L2(e.eo),d5:zm(e.eo)}),n=s(k2,I2,e.c6,s(Tm,D2,Co(e.co),s(Tm,N2,e.b9,r)));return n},B2=function(e){return{$:0,a:e}},ar=function(e){var r=e;return he(r)},Po=function(e){var r=e;return .5*r},F2=Qd,j2=function(e){var r=e;return F2(r)},A2=function(e){var r=Po(ar(e.fE)),n=j2(r);return{dJ:B2(n),dY:e.dY}},xn={iJ:0,iN:0,d4:0},km=pr,Bn=function(e){return e},Dm=Bn({iJ:1,iN:0,d4:0}),Lo=Dm,Al=Bn({iJ:0,iN:0,d4:1}),To=Al,V2=km({dy:xn,d2:To,d3:Lo}),J2=function(e){var r=e.bj,n=e.b9,t=e.co,i=e.c6;return A2({fE:at(40),dY:E2({b9:tn(n),c6:yr(i),co:tn(t),bj:Cm(r),eo:V2})})},Nm=function(e){return J2({b9:a(Ae,"camera azimuth",e),c6:a(Ae,"camera distance",e),co:a(Ae,"camera elevation",e),bj:{iJ:0,iN:0,d4:0}})},Mo=function(e){return e},ko=function(e){var r=e;return r},R2=v(function(e,r){var n=e,t=r;return t.iJ*n.iJ+t.iN*n.iN+t.d4*n.d4}),Ve=v(function(e,r){var n=r;return e*n}),Im=function(e){var r=e;return r.dy},H2=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=n.hs,l=c;return(t.iJ-o.iJ)*l.iJ+(t.iN-o.iN)*l.iN+(t.d4-o.d4)*l.d4}),G2=M(function(e,r,n){var t=e,i=r,o=n;return{iJ:o.iJ+i*t.iJ,iN:o.iN+i*t.iN,d4:o.d4+i*t.d4}}),W2=v(function(e,r){var n=jl(r),t=e,i=t.hs,o=a(R2,i,n);if(o){var c=Im(r),l=a(H2,e,c),$=a(Ve,-1/o,l);return j(s(G2,n,$,c))}else return A}),O2=v(function(e,r){return{iJ:e,iN:r}}),Em=v(function(e,r){var n=e,t=r;return n*t}),U2=function(e){var r=e;return r},Bm=function(e){var r=e;return U2(r.f$)},Y2=function(e){var r=e;return r.bd},q2=function(e){var r=e,n=a(We,he(r.iJ),a(We,he(r.iN),he(r.d4)));if(n){var t=r.d4/n,i=r.iN/n,o=r.iJ/n,c=yn(o*o+i*i+t*t);return j({iJ:o/c,iN:i/c,d4:t/c})}else return A},Fm=v(function(e,r){var n=r;return n/e}),Vl=function(e){var r=e;return tt(r)},Jl=Bn({iJ:0,iN:0,d4:-1}),Z2=v(function(e,r){var n=e,t=r;return t/n}),X2=v(function(e,r){var n=e,t=r,i=n.d5,o=i,c=n.d3,l=c,$=n.d2,m=$;return{iJ:m.iJ*t.iJ+l.iJ*t.iN+o.iJ*t.d4,iN:m.iN*t.iJ+l.iN*t.iN+o.iN*t.d4,d4:m.d4*t.iJ+l.d4*t.iN+o.d4*t.d4}}),Do=function(e){var r=e;return{iJ:-r.iJ,iN:-r.iN,d4:-r.d4}},Rl=function(e){var r=e;return Do(La(r))},Q2=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=n.d2,l=c;return(t.iJ-o.iJ)*l.iJ+(t.iN-o.iN)*l.iN}),Hl=M(function(e,r,n){var t=e,i=r,o=n;return{iJ:t,iN:i,d4:o}}),K2=U(function(e,r,n,t){var i=e,o=r,c=n,l=t,$=i.dy,m=$,p=i.d5,d=p,g=i.d3,f=g,_=i.d2,y=_;return{iJ:m.iJ+o*y.iJ+c*f.iJ+l*d.iJ,iN:m.iN+o*y.iN+c*f.iN+l*d.iN,d4:m.d4+o*y.d4+c*f.d4+l*d.d4}}),e4=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=n.d3,l=c;return(t.iJ-o.iJ)*l.iJ+(t.iN-o.iN)*l.iN}),Fn=0,r4=M(function(e,r,n){var t=e,i=a(e4,Bm(r),n),o=a(Q2,Bm(r),n),c=t.dY,l=c,$=Y2(r);$.a;var m=$.b,p=t.dJ;if(p.$){var _=p.a,y=a(Z2,m,_),w=T(K2,l,a(Em,y,o),a(Em,y,i),Fn);return a(on,w,Rl(t.dY))}else{var d=p.a,g=Co(a(Fm,d,a(Ve,.5,m))),f=a(X2,l,a(ve,Jl,q2(s(Hl,o,i,g))));return a(on,Vl(t.dY),f)}}),Gl=function(e){var r=e;return{iJ:it(r),iN:ot(r)}},n4=function(e){var r=e;return{iJ:-r.iN,iN:r.iJ}},a4=function(e){return e},t4=v(function(e,r){return a4({dy:r,d2:e,d3:n4(e)})}),i4=v(function(e,r){return a(t4,Gl(e),r)}),o4=M(function(e,r,n){var t=e.a,i=e.b;return{f$:a(i4,r,n),bd:P(ar(t),ar(i))}}),na=function(e){var r=e;return r.iJ},c4=v(function(e,r){var n=e,t=r;return{iJ:n,iN:t}}),aa=function(e){var r=e;return r.iN},ta=function(e){var r=e;return r.d4},l4=U(function(e,r,n,t){var i=n.iJ,o=n.iN,c=function(m){return s($m,ko(na(m)),ko(aa(m)),ko(ta(m)))},l=s(o4,P(Mo(r.iH),Mo(r.gY)),at(0),a(O2,0,0)),$=a(c4,Mo(i),Mo(o));return a(se,c,a(W2,t,s(r4,e,l,$)))}),u4=v(function(e,r){return{hs:e,dy:r}}),$4=v(function(e,r){var n=r;return a(u4,n.hs,a(ct,e,n.dy))}),v4=v(function(e,r){return{hs:r,dy:e}}),f4=a(v4,xn,To),m4=U(function(e,r,n,t){return T(l4,r,n,t,a($4,s(Hl,yr(0),yr(0),yr(e)),f4))}),s4=m4(0),d4=v(function(e,r){return E(r,{u:a(ve,r.u,s(s4,Nm(e),e.cO,e.aw))})}),p4=v(function(e,r){var n=r.N.da?g2(e):x2(e);return n(a(S2,e,a(C2,e,a(z2,e,a(d4,e,r)))))}),h4=v(function(e,r){var n=r;return E(n,{o:a(C,n.s,n.o),s:e})}),Wl=Cr,jm=function(e){return _a(u([P("x",Wl(e.iJ)),P("y",Wl(e.iN)),P("z",Wl(e.d4))]))},Ol=Cr,g4=Op,Am=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,c=n.e,l=e,$=s(e,t,i,s(Am,e,r,o)),m=c;e=l,r=$,n=m;continue e}}),b4=M(function(e,r,n){var t=n;return s(Am,M(function(i,o,c){return a(e,i,c)}),r,t)}),Vm=v(function(e,r){return Cr(s(b4,c$(e),o$(),r))}),_4=function(e){return _a(u([P("position",jm(e.bT)),P("outNeighbours",a(Vm,Ol,e.aK)),P("data",function(r){return g4}(e.cm))]))},y4=function(e){return _a(u([P("mappedToBaseVertex",Ol(e.eW))]))},x4=function(e){return _a(u([P("position",jm(e.bT)),P("outNeighbours",a(Vm,Ol,e.aK)),P("data",y4(e.cm))]))},w4=function(e){return _a(u([P("baseGraph",a(ba,function(r){var n=r.a,t=r.b;return a(ba,pr,u([Bt(n),_4(t)]))},e.T)),P("playerGraph",a(ba,function(r){var n=r.a,t=r.b;return a(ba,pr,u([Bt(n),x4(t)]))},e.ae))]))},Jm=function(e){var r=e;return a(W,function(n){var t=n.a,i=n.b;return P(D(t),i)},zt(r))},S4=function(e){return{T:Jm(e.T),ae:Jm(e.ae)}},C4=a(Ze,S4,w4),z4=v(function(e,r){var n=r;return _a(u([P("before",a(ba,e,n.o)),P("current",e(n.s)),P("after",a(ba,e,n.H))]))}),P4=v(function(e,r){return E(r,{db:a(U$,2,a(z4,C4,e))})}),L4=function(e){var r=e,n=r.H;if(n.b){var t=n.a,i=n.b;return j({H:i,o:a(C,r.s,r.o),s:t})}else return A},T4=function(e){var r=e,n=r.o;if(n.b){var t=n.a,i=n.b;return j({H:a(C,r.s,r.H),o:i,s:t})}else return A},M4=function(e){var r=e,n=r.H;if(n.b){var t=n.a,i=n.b;return E(r,{H:i,o:a(C,t,r.o)})}else return E(r,{H:Me(r.o),o:k})},k4=v(function(e,r){return E(r,{da:e})}),D4=function(e){var r=e,n=r.o;if(n.b){var t=n.a,i=n.b;return E(r,{o:i,s:t})}else{var o=r.H;if(o.b){var t=o.a,i=o.b;return E(r,{H:i,s:t})}else return r}},N4=function(e){return{T:e.T,ae:a(Fl,v(function(r,n){return{cm:{eW:r},aK:n.aK,bT:n.bT}}),e.T)}},I4=v(function(e,r){return E(r,{dc:e})}),E4=M(function(e,r,n){switch(r.$){case 0:var t=r.a;return E(n,{N:a(k4,t,n.N)});case 1:return E(n,{a:a(ve,n.a,T4(n.a))});case 2:return E(n,{a:a(ve,n.a,L4(n.a))});case 3:return E(n,{a:a(h4,gm,n.a)});case 4:return E(n,{a:D4(n.a)});case 5:return E(n,{a:M4(n.a)});case 6:return E(n,{a:a(Bl,N4,n.a)});case 7:return E(n,{N:a(P4,n.a,n.N)});case 8:return E(n,{a:a(Ml,n.a,a(cm,pm(dm),n.N.dc))});default:var i=r.a;return E(n,{N:a(I4,i,n.N)})}}),Ul=function(e){return e},Rm=M(function(e,r,n){return ue(n,e)<0?e:ue(n,r)>0?r:n}),B4=function(e){var r=e;return r},F4=function(e){var r=s(Rm,1667,25e3,B4(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Ul({iJ:n,iN:t})},j4=function(e){return e},A4=function(e){return{$:0,a:e}},V4=A4,J4={$:3},R4=J4,H4=U(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),G4=H4,W4=function(e){return{$:1,a:e}},O4=W4,U4=function(e){return a(Ur,"height",D(e))},Y4=Kv,q4=function(e){return{$:2,a:e}},Z4=q4,X4=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(l){return De(l*1e3)/1e3},c=function(l){return De(l*1e4)/100};return ga(u(["rgba(",ae(c(r)),"%,",ae(c(n)),"%,",ae(c(t)),"%,",ae(o(i)),")"]))},Q4=v(function(e,r){switch(r.$){case 0:return a(dh,e,r);case 1:return a(ph,e,r);case 2:return a(hh,e,r);case 3:return a(gh,e,r);case 4:return a(bh,e,r);default:return a(_h,e,r)}}),K4=v(function(e,r){switch(r.$){case 0:return a(W0,e,r);case 1:return a(O0,e,r);case 2:return a(U0,e,r);case 3:return a(Y0,e,r);case 4:return a(q0,e,r);case 5:return a(Z0,e,r);case 6:return a(X0,e,r);case 7:return a(Q0,e,r);default:return K0(e)}}),ey=M(function(e,r,n){return s(sh,e,r,n)}),Hm=function(e){var r=e;return r},lt=kh,Yl=T(lt,1,1,1,1),wn=M(function(e,r,n){return a(W,function(t){return a(t,r,n)},e)}),ry=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ny=v(function(e,r){var n=e,t=r.iJ,i=r.iN;return s(ry,n*t/i,n,n*(1-t-i)/i)}),oi=Ch,ay=function(e){var r=e.a,n=e.b,t=e.c;return s(oi,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},No=v(function(e,r){return ay(a(ny,e,r))}),Gm=v(function(e,r){return{ex:oe(e.ex,r.ex),w:e.w*r.w+e.x*r.z+e.y*r.C,x:e.w*r.x+e.x*r.A+e.y*r.D,y:e.w*r.y+e.x*r.B+e.y*r.E,z:e.z*r.w+e.A*r.z+e.B*r.C,A:e.z*r.x+e.A*r.A+e.B*r.D,B:e.z*r.y+e.A*r.B+e.B*r.E,C:e.C*r.w+e.D*r.z+e.E*r.C,D:e.C*r.x+e.D*r.A+e.E*r.D,E:e.C*r.y+e.D*r.B+e.E*r.E,O:r.O+(e.O*r.w+e.P*r.z+e.Q*r.C)*r.cN,P:r.P+(e.O*r.x+e.P*r.A+e.Q*r.D)*r.cN,Q:r.Q+(e.O*r.y+e.P*r.B+e.Q*r.E)*r.cN,cN:e.cN*r.cN}}),Sn=Fh,ty=function(e){return Sn({eG:e.w,eH:e.z,eI:e.C,eJ:e.O,eK:e.x,eL:e.A,eM:e.D,eN:e.P,eO:e.y,eP:e.B,eQ:e.E,eR:e.Q,eS:0,eT:0,eU:0,eV:1})},ql=Ye(function(e,r,n,t,i){var o=t.ex?1:-1,c=T(lt,t.cN,t.cN,t.cN,o);return lr(i,e,c,ty(t),t.ex,r,n)}),Wm=Sr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,$=e,m=r,p=n,d=a(Gm,c,t),g=l,f=o;e=$,r=m,n=p,t=d,i=g,o=f;continue e;case 1:var _=i.b,y=a(C,N(ql,e,r,n,t,_),o.U);return{U:y,af:o.af,hX:o.hX};case 3:var w=i.b,S=a(C,N(ql,e,r,n,t,w),o.af);return{U:o.U,af:S,hX:o.hX};case 2:var x=i.a,z=a(C,N(ql,e,r,n,t,x),o.hX);return{U:o.U,af:o.af,hX:z};default:var F=i.a;return s(Te,T(Wm,e,r,n,t),o,F)}}),iy=U(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Om=iy,Zl=U(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),oy=function(e){var r=e.ap,n=e.aj,t=e.ah;return T(Zl,518,r,n,t)},cy=v(function(e,r){return{$:6,a:e,b:r}}),ly=cy,Um=u([oy({ah:1,aj:0,ap:!1}),T(Om,!1,!1,!1,!1),a(ly,0,1)]),ut=519,Xl=8,Ym=15,$t=7681,uy={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ie=G0,$y=v(function(e,r){return{$:0,a:e,b:r}}),vy=$y({eg:1,et:0,e3:5}),Mr=wh,fy=vy(u([{bT:a(Mr,-1,-1)},{bT:a(Mr,1,-1)},{bT:a(Mr,-1,1)},{bT:a(Mr,1,1)}])),my={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"bT"},uniforms:{}},sy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return function(p){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:$,j:m,k:p}}}}}}}}}}}},Ql=M(function(e,r,n){var t=e.dK,i=e.dp,o=e.d1,c=v(function(m,p){var d=m;return p(d)}),l=v(function(m,p){var d=m;return p(d)}),$=function(m){return a(Ze,c(m.bY),a(Ze,l(m.bJ),a(Ze,l(m.b5),l(m.b6))))};return a($,n,a($,r,s(sy,t,i,o)))}),Kl=function(e){return s(Ql,{dp:e.dp,dK:e.dK,d1:e.d1},{bJ:e.bJ,bY:e.bY,b5:e.b5,b6:e.b6},{bJ:e.bJ,bY:e.bY,b5:e.b5,b6:e.b6})},eu=function(e){return N(Ie,u([Kl(e),T(Om,!1,!1,!1,!1)]),my,uy,fy,{})},dy=eu({bJ:$t,dp:0,dK:Xl,bY:ut,d1:Ym,b5:$t,b6:$t}),py=516,qm=5386,sr=7680,hy=function(e){return a(Vr,2,e+4)},Zm=function(e){return eu({bJ:sr,dp:Ym,dK:Xl,bY:py,d1:hy(e),b5:qm,b6:qm})},gy=M(function(e,r,n){return vr(u([s(wn,e,n,Um),u([Zm(r),dy])]))}),by=v(function(e,r){return vr(a(q$,gy(e),r))}),_y=function(e){var r=e.ap,n=e.aj,t=e.ah;return T(Zl,513,r,n,t)},yy=_y({ah:1,aj:0,ap:!0}),xy=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:c,h:l,i:$,j:m}}}}}}}}}}},wy=function(e){var r=e.cK,n=e.cq,t=e.ca,i=e.b7,o=e.cg,c=e.fW,l=v(function($,m){var p=$.a,d=$.b,g=$.c,f=m.a,_=m.b,y=m.c;return xy(p)(d)(g)(f)(_)(y)(r)(n)(t)(i)});return a(l,o,c)},Sy=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Xm=v(function(e,r){var n=e,t=r;return s(Sy,32774,n,t)}),Cy=1,Qm=771,zy=770,ru=wy({b7:0,fW:a(Xm,Cy,Qm),ca:0,cg:a(Xm,zy,Qm),cq:0,cK:0}),vt=u([yy,ru]),Py=function(e){var r=e;return r.eY},Ly=function(e){var r=e;return r.eZ},Km=function(e){var r=e;return r.e_},Ty=function(e){var r=e;return r.e$},My=function(e){var r=e;return r.e0},es=function(e){var r=e;return r.e1},jn=v(function(e,r){var n=e,t=r;return t-n}),rs=function(e){return B(a(jn,Ty(e),Py(e)),a(jn,My(e),Ly(e)),a(jn,es(e),Km(e)))},ky=function(e){return e},Dy=function(e){return Ca({dy:ky({iJ:e.O,iN:e.P,d4:e.Q}),d2:Bn({iJ:e.w,iN:e.x,d4:e.y}),d3:Bn({iJ:e.z,iN:e.A,d4:e.B}),d5:Bn({iJ:e.C,iN:e.D,d4:e.E})})},nu=v(function(e,r){var n=e,t=r,i=n.d5,o=i,c=n.d3,l=c,$=n.d2,m=$;return{iJ:t.iJ*m.iJ+t.iN*m.iN+t.d4*m.d4,iN:t.iJ*l.iJ+t.iN*l.iN+t.d4*l.d4,d4:t.iJ*o.iJ+t.iN*o.iN+t.d4*o.d4}}),ns=v(function(e,r){var n=e,t=r,i=n.dy,o=i,c=t.iJ-o.iJ,l=t.iN-o.iN,$=t.d4-o.d4,m=n.d5,p=m,d=n.d3,g=d,f=n.d2,_=f;return{iJ:c*_.iJ+l*_.iN+$*_.d4,iN:c*g.iJ+l*g.iN+$*g.d4,d4:c*p.iJ+l*p.iN+$*p.d4}}),as=v(function(e,r){return{dy:a(ns,e,tt(r)),d2:a(nu,e,za(r)),d3:a(nu,e,Pa(r)),d5:a(nu,e,La(r))}}),au=M(function(e,r,n){return{iJ:e,iN:r,d4:n}}),Io=function(e){var r=e;return r},Ue=v(function(e,r){var n=e,t=r;return a(We,n,t)}),er=v(function(e,r){var n=e,t=r;return a(Zr,n,t)}),Ny=v(function(e,r){var n=Io(r),t=Io(e);return{eY:a(Ue,t.eY,n.eY),eZ:a(Ue,t.eZ,n.eZ),e_:a(Ue,t.e_,n.e_),e$:a(er,t.e$,n.e$),e0:a(er,t.e0,n.e0),e1:a(er,t.e1,n.e1)}}),Rr=function(e){var r=e;return r},Iy=function(e){var r=e;return B(r.iJ,r.iN,r.d4)},ci=v(function(e,r){var n=e,t=r;return t+n}),Ey=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=Po(ar(t)),c=Po(ar(n)),l=Po(ar(i)),$=Iy(r),m=$.a,p=$.b,d=$.c;return{eY:a(ci,c,m),eZ:a(ci,o,p),e_:a(ci,l,d),e$:a(jn,c,m),e0:a(jn,o,p),e1:a(jn,l,d)}}),ts=U(function(e,r,n,t){var i=n.gi,o=2*n.gW*r,c=2*n.gV*r,l=2*n.gU*r,$=i.d4*r,m=i.iN*r,p=i.iJ*r,d=Rr(La(e)),g=he(l*d.iJ)+he(c*d.iN)+he(o*d.d4),f=Rr(Pa(e)),_=he(l*f.iJ)+he(c*f.iN)+he(o*f.d4),y=Rr(za(e)),w=he(l*y.iJ)+he(c*y.iN)+he(o*y.d4),S=a(Ey,B(w,_,g),a(ns,e,s(au,p,m,$)));if(t.$)return j(S);var x=t.a;return j(a(Ny,x,S))}),tu=U(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var c=e,l=r,$=n,m=o;e=c,r=l,n=$,t=m;continue e;case 1:var p=i.a,d=T(ts,e,r,p,n),c=e,l=r,$=d,m=o;e=c,r=l,n=$,t=m;continue e;case 2:var c=e,l=r,$=n,m=o;e=c,r=l,n=$,t=m;continue e;case 3:var p=i.a,d=T(ts,e,r,p,n),c=e,l=r,$=d,m=o;e=c,r=l,n=$,t=m;continue e;case 4:var g=i.a,c=e,l=r,$=T(tu,e,r,n,g),m=o;e=c,r=l,n=$,t=m;continue e;default:var f=i.a,_=i.b,y=a(as,Dy(f),e),w=r*f.cN,c=e,l=r,$=T(tu,y,w,n,u([_])),m=o;e=c,r=l,n=$,t=m;continue e}}else return n}),Ta=zh,Ma=Ph,ka=Lh,is=function(e){return{$:4,a:e}},By=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(C,n,r);e=i,r=o;continue e}else return r}),li=function(e){return is(a(By,e,k))},Fy={ex:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,O:0,P:0,Q:0,cN:1},os=eu({bJ:$t,dp:0,dK:Xl,bY:ut,d1:255,b5:$t,b6:$t}),jy=function(e){var r=e,n=a(We,he(r.iJ),a(We,he(r.iN),he(r.d4)));if(n){var t=r.d4/n,i=r.iN/n,o=r.iJ/n,c=yn(o*o+i*i+t*t);return c*n}else return Fn},kr={ca:0,gh:!1,cq:0,dH:0,cK:0,dV:0,iJ:0,iN:0,d4:0},Hr=v(function(e,r){var n=e,t=r;return Sn({eG:n.iJ,eH:n.cK,eI:t.iJ,eJ:t.cK,eK:n.iN,eL:n.cq,eM:t.iN,eN:t.cq,eO:n.d4,eP:n.ca,eQ:t.d4,eR:t.ca,eS:n.dV,eT:n.dH,eU:t.dV,eV:t.dH})}),ui=P({bP:a(Hr,kr,kr),cx:a(Hr,kr,kr),cy:a(Hr,kr,kr),cz:a(Hr,kr,kr)},T(lt,0,0,0,0)),cs=514,ls=function(e){var r=e.ap,n=e.aj,t=e.ah;return T(Zl,515,r,n,t)},us=240,Ay=u([ls({ah:1,aj:0,ap:!0}),Kl({bJ:sr,dp:us,dK:0,bY:cs,d1:0,b5:sr,b6:sr}),ru]),Vy=v(function(e,r){var n=e,t=r.hr,i=r.gM,o=r.f_,c=ar(t),l=c,$=ar(i),m=$,p=n.dJ;if(p.$){var g=p.a;return Jc(m)?Sn({eG:2/(o*g),eH:0,eI:0,eJ:0,eK:0,eL:2/g,eM:0,eN:0,eO:0,eP:0,eQ:0,eR:-1,eS:0,eT:0,eU:0,eV:1}):Sn({eG:2/(o*g),eH:0,eI:0,eJ:0,eK:0,eL:2/g,eM:0,eN:0,eO:0,eP:0,eQ:-2/(m-l),eR:-(m+l)/(m-l),eS:0,eT:0,eU:0,eV:1})}else{var d=p.a;return Jc(m)?Sn({eG:1/(o*d),eH:0,eI:0,eJ:0,eK:0,eL:1/d,eM:0,eN:0,eO:0,eP:0,eQ:-1,eR:-2*l,eS:0,eT:0,eU:-1,eV:0}):Sn({eG:1/(o*d),eH:0,eI:0,eJ:0,eK:0,eL:1/d,eM:0,eN:0,eO:0,eP:0,eQ:-(m+l)/(m-l),eR:-2*m*l/(m-l),eS:0,eT:0,eU:-1,eV:0})}}),Eo=v(function(e,r){return(1&e>>r)==1?0:1}),Jy=function(e){return u([ls({ah:1,aj:0,ap:!0}),Kl({bJ:sr,dp:us,dK:e,bY:cs,d1:0,b5:sr,b6:sr}),ru])},Ry=M(function(e,r,n){return vr(a(W,function(t){var i=t<<4,o=T(lt,a(Eo,t,0),a(Eo,t,1),a(Eo,t,2),a(Eo,t,3));return s(wn,e,P(r,o),Jy(i))},a(kn,1,a(Vr,2,n)-1)))}),ft=function(e){var r=e;return r},Hy=jh,iu=Bn({iJ:0,iN:1,d4:0}),ou=iu,Gy={dy:xn,d2:Lo,d3:ou,d5:To},$i=function(e){var r=e;return r},Wy=function(e){var r=$i(tt(e)),n=Rr(La(e)),t=Rr(Pa(e)),i=Rr(za(e));return Sn({eG:i.iJ,eH:t.iJ,eI:n.iJ,eJ:r.iJ,eK:i.iN,eL:t.iN,eM:n.iN,eN:r.iN,eO:i.d4,eP:t.d4,eQ:n.d4,eR:r.d4,eS:0,eT:0,eU:0,eV:1})},Oy=v(function(e,r){var n=r;return Wy(a(as,n,e))}),Uy=function(e){return a(Oy,Gy,e)},Yy=function(e){var r=e;return r.dY},qy=function(e){var r=e;return za(r)},Zy=function(e){var r=e;return Pa(r)},Xy=function(e){var r=Yy(e.ge),n=Ca({dy:Vl(r),d2:qy(r),d3:Zy(r),d5:Do(Rl(r))}),t=li(e.bh),i=t,o=T(tu,n,1,A,u([i]));if(o.$===1)return k;var c=o.a,l=Uy(r),$=a(Ve,.99,a(Ue,ar(e.gm),Co(Km(c)))),m=rs(c),p=m.a,d=m.b,g=m.c,f=jy(s(Hl,p,d,g)),_=a(Ve,1.01,a(ci,f,Co(es(c)))),y=a(Vy,e.ge,{f_:e.f_,gM:_,hr:$}),w=Hy(y).eV,S=w?Rr(Do(Rl(r))):ft(Vl(r)),x=function(){var be=e.ix;switch(be.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var Le=be.a;return P(3,Le);case 4:var Le=be.a;return P(4,Le);default:return P(5,0)}}(),z=x.a,F=x.b,Z=e.gK,ee=Z,Y=a(No,ee,e.iG),Q=Y,K=Sn({eG:0,eH:S.iJ,eI:Ta(Q),eJ:e.fs,eK:0,eL:S.iN,eM:Ma(Q),eN:ko(f),eO:0,eP:S.d4,eQ:ka(Q),eR:z,eS:0,eT:w,eU:0,eV:F}),R=lr(Wm,K,l,y,Fy,i,{U:k,af:k,hX:k}),ie=e.hk;switch(ie.$){case 0:var de=ie.a;return vr(u([s(wn,R.U,P(de,Yl),vt),s(wn,R.af,ui,vt)]));case 1:var de=ie.a;return vr(u([s(wn,R.U,ui,vt),u([os]),s(wn,R.hX,de.bP,Um),u([Zm(0)]),s(wn,R.U,P(de,Yl),Ay),s(wn,R.af,ui,vt)]));default:var Pe=ie.a,pe=ie.b;return vr(u([s(wn,R.U,P(pe,Yl),vt),u([os]),a(by,R.hX,Pe),s(Ry,R.U,pe,fn(Pe)),s(wn,R.af,ui,vt)]))}},Qy=function(e){return a(Ur,"width",D(e))},Ky=v(function(e,r){var n=u([O4(1),Z4(0),V4(!0),T(G4,0,0,0,0)]),t=function(){var z=e.fX;switch(z.$){case 0:return B(n,"0",1);case 1:return B(a(C,R4,n),"1",1);default:var F=z.a;return B(n,"0",F)}}(),i=t.a,o=t.b,c=t.c,l=e.bd,$=l.a,m=l.b,p=Hm(m),d=a(Oe,"height",D(p)+"px"),g=Hm($),f=g/p,_=a(ha,function(z){return Xy({f_:f,ge:e.ge,gm:e.gm,bh:z.bh,gK:z.gK,hk:z.hk,fs:c,ix:z.ix,iG:z.iG})},r),y=a(Oe,"width",D(g)+"px"),w=e.ba,S=w,x=X4(S);return s(Y4,"div",u([a(Oe,"padding","0px"),y,d]),u([P(o,s(ey,i,u([Qy(De(g*c)),U4(De(p*c)),y,d,a(Oe,"display","block"),a(Oe,"background-color",x)]),_))]))}),ex=function(e){return{$:2,a:e}},rx=function(e){return ex(e)},nx=function(e){return a(Ky,{fX:rx(e.c5),ba:e.ba,ge:e.ge,gm:e.gm,bd:e.bd},u([{bh:e.bh,gK:e.gK,hk:e.hk,ix:e.ix,iG:e.iG}]))},$s=function(e){return e},ax=function(e){var r=e;return r},cu=function(e){var r=e;return ax(r.f$)},vs=U(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),tx=U(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),fs=U(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),ms=U(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),ix=U(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),ox=U(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),cx=U(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),lu=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,t=e.c;return T(cx,r,n,t,1);case 2:var r=e.a,n=e.b,t=e.c;return T(vs,r,n,t,1);case 3:var r=e.a,i=e.b,t=e.c;return T(tx,r,i,t,1);case 4:var r=e.a,i=e.b,t=e.c;return T(fs,r,i,t,1);case 5:var r=e.a,i=e.b,t=e.c;return T(ox,r,i,t,1);case 6:var r=e.a,i=e.b,t=e.c;return T(ms,r,i,t,1);case 7:var r=e.a,i=e.b,t=e.c;return T(ix,r,i,t,1);case 8:return e;case 9:return e;default:return e}},uu={$:0},lx=Se(function(e,r,n,t,i,o,c,l){e:for(;;)if(l.b){var $=l.a,m=l.b,p=Io(c($)),d=a(er,p.e$,e),g=a(Ue,p.eY,r),f=a(er,p.e0,n),_=a(Ue,p.eZ,t),y=a(er,p.e1,i),w=a(Ue,p.e_,o),S=c,x=m;e=d,r=g,n=f,t=_,i=y,o=w,c=S,l=x;continue e}else return{eY:r,eZ:t,e_:o,e$:e,e0:n,e1:i}}),ux=M(function(e,r,n){var t=Io(e(r));return bt(lx,t.e$,t.eY,t.e0,t.eZ,t.e1,t.e_,e,n)}),$u=v(function(e,r){var n=e,t=r;return ue(t,n)<1}),ss=function(e){return a($u,e.eY,e.e$)&&a($u,e.eZ,e.e0)&&a($u,e.e_,e.e1)?e:{eY:a(Ue,e.e$,e.eY),eZ:a(Ue,e.e0,e.eZ),e_:a(Ue,e.e1,e.e_),e$:a(er,e.e$,e.eY),e0:a(er,e.e0,e.eZ),e1:a(er,e.e1,e.e_)}},vi=function(e){var r=e;return r},ds=function(e){var r=vi(e),n=r.a,t=r.b,i=r.c,o=na(n),c=aa(n),l=ta(n),$=na(t),m=aa(t),p=ta(t),d=na(i),g=aa(i),f=ta(i);return ss({eY:a(Ue,o,a(Ue,$,d)),eZ:a(Ue,c,a(Ue,m,g)),e_:a(Ue,l,a(Ue,p,f)),e$:a(er,o,a(er,$,d)),e0:a(er,c,a(er,m,g)),e1:a(er,l,a(er,p,f))})},ps=Th,xr=function(e){return ps($i(e))},hs=function(e){var r=e;return r},Bo=function(e){return ps(hs(e))},$x=v(function(e,r){var n=e,t=r;return{iJ:t.iN*n.d4-t.d4*n.iN,iN:t.d4*n.iJ-t.iJ*n.d4,d4:t.iJ*n.iN-t.iN*n.iJ}}),vu=v(function(e,r){var n=e,t=r;return{iJ:t.iJ-n.iJ,iN:t.iN-n.iN,d4:t.d4-n.d4}}),gs=function(e){return e},vx={iJ:0,iN:0,d4:0},fx=v(function(e,r){var n=e,t=r,i=a(We,he(t.iJ),a(We,he(t.iN),he(t.d4)));if(i){var o=t.d4/i,c=t.iN/i,l=t.iJ/i,$=yn(l*l+c*c+o*o);return{iJ:n*l/$,iN:n*c/$,d4:n*o/$}}else return vx}),mx=fx(gs(1)),bs=M(function(e,r,n){var t=a(vu,r,n),i=a(vu,e,r);return mx(a($x,t,i))}),sx=function(e){var r=vi(e),n=r.a,t=r.b,i=r.c,o=Bo(s(bs,n,t,i));return B({t:o,bT:xr(n)},{t:o,bT:xr(t)},{t:o,bT:xr(i)})},dx=v(function(e,r){return{$:2,a:e,b:r}}),_s=dx({eg:3,et:0,e3:4}),px=function(e){if(e.b){var r=e.a,n=e.b,t=_s(a(W,sx,e)),i=s(ux,ds,r,n);return T(vs,i,e,t,0)}else return uu},Gr=M(function(e,r,n){return B(e,r,n)}),tr=M(function(e,r,n){var t=e,i=r,o=n;return{iJ:t,iN:i,d4:o}}),ys=function(){var e=yr(1),r=yr(1),n=yr(1),t=a(Ve,-.5,e),i=a(Ve,-.5,r),o=a(Ve,-.5,n),c=s(tr,o,i,t),l=a(Ve,.5,e),$=s(tr,o,i,l),m=a(Ve,.5,r),p=s(tr,o,m,t),d=s(tr,o,m,l),g=a(Ve,.5,n),f=s(tr,g,i,t),_=s(tr,g,m,t),y=s(tr,g,i,l),w=s(tr,g,m,l);return lu(px(u([s(Gr,c,_,f),s(Gr,c,p,_),s(Gr,$,y,w),s(Gr,$,w,d),s(Gr,f,_,w),s(Gr,f,w,y),s(Gr,c,d,p),s(Gr,c,$,d),s(Gr,c,f,y),s(Gr,c,y,$),s(Gr,p,w,_),s(Gr,p,d,w)])))}(),Fo={$:0},hx=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),gx=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,c=e(o),l=e(i),$=e(t),m=Bo(s(bs,$,l,c)),p={t:m,bT:xr($)},d={t:m,bT:xr(l)},g={t:m,bT:xr(c)};return a(C,p,a(C,d,a(C,g,n)))}),fu=function(e){var r=e;return r.K},bx=U(function(e,r,n,t){if(r.$===1)return A;var i=r.a;if(n.$===1)return A;var o=n.a;if(t.$===1)return A;var c=t.a;return j(s(e,i,o,c))}),mu=4294967295>>>32-Tt,su=Vd,_x=M(function(e,r,n){e:for(;;){var t=mu&r>>>e,i=a(su,t,n);if(i.$){var m=i.a;return a(su,mu&r,m)}else{var o=i.a,c=e-Tt,l=r,$=o;e=c,r=l,n=$;continue e}}}),yx=function(e){return e>>>5<<5},xx=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||ue(e,n)>-1?A:ue(e,yx(n))>-1?j(a(su,mu&e,o)):j(s(_x,t,e,i))}),du=function(e){var r=e;return r.aB},pu=v(function(e,r){return a(xx,e,du(r))}),wx=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return T(bx,M(function(c,l,$){return B(c,l,$)}),a(pu,t,e),a(pu,i,e),a(pu,o,e))};return a(jr,r,fu(e))},Sx=M(function(e,r,n){e:for(;;){var t=a(Ic,zr,e),i=t.a,o=t.b;if(ue(Nc(i),zr)<0)return a(rv,!0,{F:r,p:n,v:i});var c=o,l=a(C,ev(i),r),$=n+1;e=c,r=l,n=$;continue e}}),hu=function(e){return e.b?s(Sx,e,k,0):Q$},Cx=v(function(e,r){return!a(sa,a(qn,gg,e),r)}),zx=function(e){var r=e.a;return r},xs=v(function(e,r){var n=zx(e),t=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&ue(o,n)<0&&c>=0&&ue(c,n)<0&&l>=0&&ue(l,n)<0};return a(Cx,t,r)?{K:r,aB:e}:{K:a(Qc,t,r),aB:e}}),Px=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),fi=Px({eg:1,et:3,e3:4}),jo=v(function(e,r){var n=ft(r),t=ft(e);return P(B(t.iJ,t.iN,t.d4),B(n.iJ,n.iN,n.d4))}),ws=s(oi,0,0,0),gu=Sr(function(e,r,n,t,i,o){var c=o.a,l=o.b,$=o.c,m=a(On,a(jo,e,r),i);if(m.$){var d={t:ws,bT:xr(r)},g={t:ws,bT:xr(e)},f=$+1,_=$;return B(a(C,B(n,_,f),a(C,B(n,f,t),c)),a(C,d,a(C,g,l)),$+2)}else{var p=m.a;return B(a(C,B(n,p,t),c),l,$)}}),Lx=Ye(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,$=o.c,m=n.b,p=e($),d=e(l),g=e(c),f=t+2,_=t+1,y=t,w=e,S=r,x=m,z=t+3,F=lr(gu,p,g,f,y,r,lr(gu,d,p,_,f,r,lr(gu,g,d,y,_,r,i)));e=w,r=S,n=x,t=z,i=F;continue e}else{var Z=i,ee=Z.a,Y=Z.b;return P(ee,Me(Y))}}),Tx=Ye(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,$=o.c,m=r.b,p=e($),d=e(l),g=e(c),f=n+2,_=n+1,y=n,w=s(Un,a(jo,g,p),f,s(Un,a(jo,p,d),_,s(Un,a(jo,d,g),y,i))),S=a(C,B(y,_,f),t),x=e,z=m,F=n+3,Z=S,ee=w;e=x,r=z,n=F,t=Z,i=ee;continue e}else return B(t,i,n)}),Da=M(function(e,r,n){var t=wx(n),i=s(qe,gx(r),k,t),o=N(Tx,r,t,0,k,Gi),c=o.a,l=o.b,$=o.c,m=N(Lx,r,l,t,0,B(c,k,$)),p=m.a,d=m.b,g=Kn(d)?i:V(i,d);return s(hx,e,a(xs,hu(g),p),a(fi,g,p))}),bu=function(e){return{K:a(W,function(r){return B(3*r,3*r+1,3*r+2)},a(kn,0,fn(e)-1)),aB:hu(vr(a(W,function(r){var n=r.a,t=r.b,i=r.c;return u([n,t,i])},e)))}},Ss=function(e){switch(e.$){case 0:return Fo;case 1:var r=e.a,n=e.b,t=a(W,vi,n);return s(Da,r,pr,bu(t));case 2:var r=e.a,n=e.b,t=a(W,vi,n);return s(Da,r,pr,bu(t));case 3:var r=e.a,i=e.b;return s(Da,r,pr,i);case 4:var r=e.a,i=e.b;return s(Da,r,function(o){return o.bT},i);case 5:var r=e.a,i=e.b;return s(Da,r,function(o){return o.bT},i);case 6:var r=e.a,i=e.b;return s(Da,r,function(o){return o.bT},i);case 7:var r=e.a,i=e.b;return s(Da,r,function(o){return o.bT},i);case 8:return Fo;case 9:return Fo;default:return Fo}},Cs=Ss(ys),_u=function(e){var r=e;return r.bd},zs={$:0},J=zs,ir=v(function(e,r){return{$:1,a:e,b:r}}),Mx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"ch"}},kx=1029,Dx=function(e){return{$:5,a:e}},Ps=function(e){var r=e;return Dx(r)},Nx=Ps(kx),Ix=1028,Ex=Ps(Ix),wr=M(function(e,r,n){return r===1?e?a(C,Nx,n):a(C,Ex,n):n}),Ls={src:`
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
    `,attributes:{position:"bT",uv:"S"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},yu=U(function(e,r,n,t){return a(ir,r,Se(function(i,o,c,l,$,m,p,d){return N(Ie,s(wr,l,t,d),Ls,Mx,n,{ch:e,d:c,e:o,f:m,g:i,h:$})}))}),xu={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aX"}},Ts={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},An=U(function(e,r,n,t){return a(ir,r,Se(function(i,o,c,l,$,m,p,d){return N(Ie,s(wr,l,t,d),Ts,xu,n,{aX:e,d:c,e:o,f:m,g:i,h:$})}))}),Ms=v(function(e,r){return{$:3,a:e,b:r}}),Bx={src:`
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
    `,attributes:{},uniforms:{constantColor:"aX",pointRadius:"cI",sceneProperties:"g"}},ks={src:`
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
    `,attributes:{position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",pointRadius:"cI",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Fx=U(function(e,r,n,t){return a(Ms,n,Se(function(i,o,c,l,$,m,p,d){return N(Ie,d,ks,Bx,t,{aX:e,d:c,e:o,cI:r,f:m,g:i,h:$})}))}),wu={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bf",sceneProperties:"g"}},mi=function(e){var r=e;return r},Ao=Mh,Vn=Ye(function(e,r,n,t,i){return a(ir,n,Se(function(o,c,l,$,m,p,d,g){return N(Ie,s(wr,$,i,g),Ts,wu,t,{bf:a(Ao,mi(r),e),d:l,e:c,f:p,g:o,h:m})}))}),jx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"bf",pointRadius:"cI",sceneProperties:"g"}},Ax=Ye(function(e,r,n,t,i){return a(Ms,t,Se(function(o,c,l,$,m,p,d,g){return N(Ie,g,ks,jx,i,{bf:a(Ao,mi(r),e),d:l,e:c,cI:n,f:p,g:o,h:m})}))}),Ds={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",materialColor:"dq",sceneProperties:"g",viewMatrix:"h"}},Ns={src:`
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
    `,attributes:{normal:"t",position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Vo=U(function(e,r,n,t){return a(ir,r,Se(function(i,o,c,l,$,m,p,d){var g=p.a,f=p.b;return N(Ie,s(wr,l,t,d),Ns,Ds,n,{Z:f,bP:g.bP,cx:g.cx,cy:g.cy,cz:g.cz,dq:e,d:c,e:o,f:m,g:i,h:$})}))}),Is={src:`
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
    `,attributes:{},uniforms:{enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",materialColorTexture:"dr",normalMapTexture:"bq",sceneProperties:"g",useNormalMap:"bw",viewMatrix:"h"}},Es={src:`
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
    `,attributes:{normal:"t",position:"bT",tangent:"fu",uv:"S"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Vx=Sr(function(e,r,n,t,i,o){return a(ir,t,Se(function(c,l,$,m,p,d,g,f){var _=g.a,y=g.b;return N(Ie,s(wr,m,o,f),Es,Is,i,{Z:y,bP:_.bP,cx:_.cx,cy:_.cy,cz:_.cz,dr:e,d:$,e:l,bq:r,f:d,g:c,bw:n,h:p})}))}),Bs={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"c1",constantBaseColor:"c2",constantMetallic:"c3",constantRoughness:"c4",enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",metallicTexture:"du",normalMapTexture:"bq",roughnessTexture:"dO",sceneProperties:"g",useNormalMap:"bw",viewMatrix:"h"}},Jx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){return function(p){return a(ir,$,Se(function(d,g,f,_,y,w,S,x){var z=S.a,F=S.b;return N(Ie,s(wr,_,p,x),Es,Bs,m,{c1:e,c2:r,c3:o,c4:t,Z:F,bP:z.bP,cx:z.cx,cy:z.cy,cz:z.cz,du:i,d:f,e:g,bq:c,f:w,dO:n,g:d,bw:l,h:y})}))}}}}}}}}}}},Fs={src:`
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
    `,attributes:{},uniforms:{baseColor:"c0",enabledLights:"Z",lights12:"bP",lights34:"cx",lights56:"cy",lights78:"cz",metallic:"dt",roughness:"dN",sceneProperties:"g",viewMatrix:"h"}},Jo=Sr(function(e,r,n,t,i,o){return a(ir,t,Se(function(c,l,$,m,p,d,g,f){var _=g.a,y=g.b;return N(Ie,s(wr,m,o,f),Ns,Fs,i,{c0:e,Z:y,bP:_.bP,cx:_.cx,cy:_.cy,cz:_.cz,dt:n,d:$,e:l,f:d,dN:r,g:c,h:p})}))}),Rx=function(e){return{$:0,a:e}},js=v(function(e,r){return{$:1,a:e,b:r}}),si=v(function(e,r){if(r.$){var n=r.a.cm;return P(n,1)}else return r.a,P(e,0)}),Hx=function(e){return T(lt,Ta(e),Ma(e),ka(e),1)},Su=T(lt,0,0,0,0),Ro=v(function(e,r){if(r.$){var t=r.a.cm;return P(t,Su)}else{var n=r.a;return P(e,Hx(n))}}),As=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.cm;return a(js,P(i,Su),a(si,i,r))}else if(n.b.$){var i=n.b.a.cm;return a(js,a(Ro,i,e),a(si,i,r))}else{var t=n.a.a;return n.b.a,Rx(t)}}),Gx=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Ho=U(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Wx=U(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ox=function(e){return a(Mr,e,1)},Cu=a(Mr,0,0),mt=v(function(e,r){if(r.$){var t=r.a.cm;return P(t,Cu)}else{var n=r.a;return P(e,Ox(n))}}),Vs=U(function(e,r,n,t){var i=T(Wx,e,r,n,t);if(i.a.$){var $=i.a.a.cm;return T(Ho,P($,Su),a(mt,$,r),a(mt,$,n),a(si,$,t))}else if(i.b.$){var $=i.b.a.cm;return T(Ho,a(Ro,$,e),P($,Cu),a(mt,$,n),a(si,$,t))}else if(i.c.$){var $=i.c.a.cm;return T(Ho,a(Ro,$,e),a(mt,$,r),P($,Cu),a(si,$,t))}else if(i.d.$){var $=i.d.a.cm;return T(Ho,a(Ro,$,e),a(mt,$,r),a(mt,$,n),P($,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,s(Gx,o,c,l)}}),Ux={src:`
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
    `,attributes:{},uniforms:{backlight:"c_",colorTexture:"ch",sceneProperties:"g"}},zu=Ye(function(e,r,n,t,i){return a(ir,n,Se(function(o,c,l,$,m,p,d,g){return N(Ie,s(wr,$,i,g),Ls,Ux,t,{c_:mi(r),ch:e,d:l,e:c,f:p,g:o,h:m})}))}),Js={src:`
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
    `,attributes:{normal:"t",position:"bT",uv:"S"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},Yx=U(function(e,r,n,t){return a(ir,r,Se(function(i,o,c,l,$,m,p,d){var g=p.a,f=p.b;return N(Ie,s(wr,l,t,d),Js,Is,n,{Z:f,bP:g.bP,cx:g.cx,cy:g.cy,cz:g.cz,dr:e,d:c,e:o,bq:e,f:m,g:i,bw:0,h:$})}))}),qx=cc(function(e,r,n,t,i,o,c,l,$){return a(ir,c,Se(function(m,p,d,g,f,_,y,w){var S=y.a,x=y.b;return N(Ie,s(wr,g,$,w),Js,Bs,l,{c1:e,c2:r,c3:o,c4:t,Z:x,bP:S.bP,cx:S.cx,cy:S.cy,cz:S.cz,du:i,d,e:p,bq:e,f:_,dO:n,g:m,bw:0,h:f})}))}),di=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Zx=function(e){var r=e;return s(di,r.e$,r.eY,.5)},Xx=function(e){var r=e;return s(di,r.e0,r.eZ,.5)},Qx=function(e){var r=e;return s(di,r.e1,r.e_,.5)},Kx=function(e){return s(tr,Zx(e),Xx(e),Qx(e))},le=function(e){var r=rs(e),n=r.a,t=r.b,i=r.c;return{gi:$i(Kx(e)),gU:n/2,gV:t/2,gW:i/2}},Pu=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.cm;switch(r.$){case 0:return J;case 1:return J;case 2:return J;case 3:return J;case 4:return J;case 5:var t=r.a,i=r.c,o=r.d;return T(yu,l,le(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return T(yu,l,le(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return T(yu,l,le(t),i,o);case 8:return J;case 9:return J;default:return J}}else{var n=e.b.a;switch(r.$){case 0:return J;case 1:var t=r.a,i=r.c,o=r.d;return T(An,n,le(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return T(An,n,le(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return T(An,n,le(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return T(An,n,le(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return T(An,n,le(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return T(An,n,le(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return T(An,n,le(t),i,o);case 8:var t=r.a,i=r.c;return T(An,n,le(t),i,0);case 9:var t=r.a,i=r.c;return T(An,n,le(t),i,0);default:var t=r.a,c=r.b,i=r.d;return T(Fx,n,c,le(t),i)}}case 1:if(e.b.$){e.a;var l=e.b.a.cm,m=e.c;switch(r.$){case 0:return J;case 1:return J;case 2:return J;case 3:return J;case 4:return J;case 5:var t=r.a,i=r.c,o=r.d;return N(zu,l,m,le(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return N(zu,l,m,le(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return N(zu,l,m,le(t),i,o);case 8:return J;case 9:return J;default:return J}}else{var $=e.b.a,m=e.c;switch(r.$){case 0:return J;case 1:var t=r.a,i=r.c,o=r.d;return N(Vn,$,m,le(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return N(Vn,$,m,le(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return N(Vn,$,m,le(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return N(Vn,$,m,le(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return N(Vn,$,m,le(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return N(Vn,$,m,le(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return N(Vn,$,m,le(t),i,o);case 8:var t=r.a,i=r.c;return N(Vn,$,m,le(t),i,0);case 9:var t=r.a,i=r.c;return N(Vn,$,m,le(t),i,0);default:var t=r.a,c=r.b,i=r.d;return N(Ax,$,m,c,le(t),i)}}case 2:e.a;var p=e.b,d=e.c,g=a(As,p,d);if(g.$){var y=g.a,w=y.a;y.b;var S=g.b,x=S.a,z=S.b;switch(r.$){case 0:return J;case 1:return J;case 2:return J;case 3:return J;case 4:return J;case 5:return J;case 6:var t=r.a,i=r.c,_=r.d;return T(Yx,w,le(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return lr(Vx,w,x,z,le(t),i,_);case 8:return J;case 9:return J;default:return J}}else{var f=g.a;switch(r.$){case 0:return J;case 1:return J;case 2:var t=r.a,i=r.c,_=r.d;return T(Vo,f,le(t),i,_);case 3:return J;case 4:var t=r.a,i=r.c,_=r.d;return T(Vo,f,le(t),i,_);case 5:return J;case 6:var t=r.a,i=r.c,_=r.d;return T(Vo,f,le(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return T(Vo,f,le(t),i,_);case 8:return J;case 9:return J;default:return J}}default:e.a;var F=e.b,Z=e.c,ee=e.d,d=e.e,Y=T(Vs,F,Z,ee,d);if(Y.$){var ie=Y.a,de=ie.a,Pe=ie.b,pe=Y.b,be=pe.a,Le=pe.b,_e=Y.c,Je=_e.a,Ee=_e.b,cr=Y.d,x=cr.a,z=cr.b;switch(r.$){case 0:return J;case 1:return J;case 2:return J;case 3:return J;case 4:return J;case 5:return J;case 6:var t=r.a,i=r.c,o=r.d;return Ed(qx,de,Pe,be,Le,Je,Ee,le(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return Jx(de)(Pe)(be)(Le)(Je)(Ee)(x)(z)(le(t))(i)(o);case 8:return J;case 9:return J;default:return J}}else{var Q=Y.a,K=Y.b,R=Y.c;switch(r.$){case 0:return J;case 1:return J;case 2:var t=r.a,i=r.c,o=r.d;return lr(Jo,Q,K,R,le(t),i,o);case 3:return J;case 4:var t=r.a,i=r.c,o=r.d;return lr(Jo,Q,K,R,le(t),i,o);case 5:return J;case 6:var t=r.a,i=r.c,o=r.d;return lr(Jo,Q,K,R,le(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return lr(Jo,Q,K,R,le(t),i,o);case 8:return J;case 9:return J;default:return J}}}}),Lu=function(e){var r=e;return r.iJ},Tu=function(e){var r=e;return r.iN},Mu=function(e){var r=e;return r.d4},ew=function(e){var r=e,n=Mu(r.d5),t=Tu(r.d5),i=Lu(r.d5),o=Mu(r.d3),c=Tu(r.d3),l=Lu(r.d3),$=Mu(r.d2),m=Tu(r.d2),p=Lu(r.d2);return p*c*n+m*o*i+$*l*t-$*c*i-m*l*n-p*o*t>0},rw=function(e){var r=$i(tt(e)),n=Rr(La(e)),t=Rr(Pa(e)),i=Rr(za(e));return{ex:ew(e),w:i.iJ,x:i.iN,y:i.d4,z:t.iJ,A:t.iN,B:t.d4,C:n.iJ,D:n.iN,E:n.d4,O:r.iJ,P:r.iN,Q:r.d4,cN:1}},st=v(function(e,r){return{$:5,a:e,b:r}}),Rs=v(function(e,r){var n=r;switch(n.$){case 0:return J;case 5:var t=n.a,i=n.b,o=a(Gm,t,e);return a(st,o,i);case 1:return a(st,e,n);case 3:return a(st,e,n);case 2:return a(st,e,n);default:return a(st,e,n)}}),Hs=v(function(e,r){return a(Rs,rw(e),r)}),Go=function(e){return{$:2,a:e}},nw=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.gi;return{gi:{iJ:n*o.iJ,iN:t*o.iN,d4:i*o.d4},gU:n*r.gU,gV:t*r.gV,gW:i*r.gW}}),aw=Nh,tw=Dh,Gs=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(c){return function(l){return function($){return function(m){var p=e.a,d=e.b,g=e.c,f=tw(t),_=f.iJ,y=f.iN,w=f.d4,S=f.fH,x=aw({fH:S,iJ:_*p,iN:y*d,d4:w*g});return bt(r,n,x,i,o,c,l,$,m)}}}}}}}}}},ku=v(function(e,r){switch(r.$){case 0:return zs;case 5:var n=r.a,t=r.b;return a(st,n,a(ku,e,t));case 1:var i=r.a,o=r.b;return a(ir,a(nw,e,i),a(Gs,e,o));case 3:return r;case 2:var o=r.a;return Go(a(Gs,e,o));default:var c=r.a;return is(a(W,ku(e),c))}}),Du=v(function(e,r){var n=r;return a(ku,e,n)}),Nu={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ws=7683,Os=7682,iw=s(Ql,{dp:0,dK:0,d1:15},{bJ:sr,bY:ut,b5:sr,b6:Ws},{bJ:sr,bY:ut,b5:sr,b6:Os}),ow=s(Ql,{dp:0,dK:0,d1:15},{bJ:sr,bY:ut,b5:sr,b6:Os},{bJ:sr,bY:ut,b5:sr,b6:Ws}),Iu=v(function(e,r){return e?a(C,ow,r):a(C,iw,r)}),cw={src:`
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
    `,attributes:{normal:"t",position:"bT"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cP",viewMatrix:"h"}},lw=function(e){if(e.$){var r=e.c;return j(Se(function(n,t,i,o,c,l,$,m){return N(Ie,a(Iu,o,m),cw,Nu,r,{d:i,e:t,f:l,g:n,cP:$,h:c})}))}else return A},Wo=function(e){var r=lw(e);if(r.$)return J;var n=r.a;return Go(n)},uw=U(function(e,r,n,t){var i=a(Pu,n,ys),o=function(){var p=P(e,r);return p.a?p.b?li(u([i,Wo(Cs)])):i:p.b?Wo(Cs):J}(),c=_u(t),l=c.a,$=c.b,m=c.c;return a(Hs,cu(t),a(Du,B(l,$,m),o))}),$w=v(function(e,r){return T(uw,!0,!0,e,r)}),Eu=function(e){return{$:0,a:e}},Us=v(function(e,r){return{$:0,a:e,b:r}}),vw=function(e){var r=hl(e),n=r.hJ,t=r.gR,i=r.f4;return s(oi,n,t,i)},fw=function(e){return a(Us,0,Eu(vw(e)))},mw=function(e){var r=e;return r.n},pi=function(e){var r=e;return it(r)},sw=v(function(e,r){var n=e.bT,t=e.t;return a(C,{t:Bo(t),bT:xr(n)},r)}),dw=yi(function(e,r,n,t,i,o,c){e:for(;;)if(c.b){var l=c.a,$=c.b,m=ka(l.bT),p=Ma(l.bT),d=Ta(l.bT),g=a(Zr,e,d),f=a(We,r,d),_=a(Zr,n,p),y=a(We,t,p),w=a(Zr,i,m),S=a(We,o,m),x=$;e=g,r=f,n=_,t=y,i=w,o=S,c=x;continue e}else return ss({eY:r,eZ:t,e_:o,e$:e,e0:n,e1:i})}),Ys=v(function(e,r){var n=ka(e.bT),t=Ma(e.bT),i=Ta(e.bT);return lc(dw,i,i,t,t,n,n,r)}),pw=function(e){var r=s(R$,sw,k,du(e));if(r.b){var n=r.a,t=r.b,i=a(fi,r,fu(e)),o=a(Ys,n,t);return T(fs,o,e,i,0)}else return uu},qs=v(function(e,r){var n=e,t=r,i=n.d3,o=i,c=n.d2,l=c;return{iJ:t.iJ*l.iJ+t.iN*o.iJ,iN:t.iJ*l.iN+t.iN*o.iN,d4:t.iJ*l.d4+t.iN*o.d4}}),Oo=function(e){var r=e;return ot(r)},hi=function(e){var r=e;return r},Bu=function(e){return tn(2*je*e)},Zs=km({dy:xn,d2:Lo,d3:ou}),Xs=function(){var e=72,r=a(Fm,e,Bu(1)),n=yr(1),t=hi(Al),i=hi(Jl),o=yr(1),c=a(Ve,.5,o),l=s(tr,Fn,Fn,c),$=a(Ve,-.5,o),m=s(tr,Fn,Fn,$),p=function(f){var _=a(Ve,f,r),y=hi(a(qs,Zs,Gl(_))),w=a(Ve,pi(_),n),S=a(Ve,Oo(_),n),x=s(tr,w,S,c),z=s(tr,w,S,$),F=a(lo,e,f+1),Z=a(Ve,F,r),ee=hi(a(qs,Zs,Gl(Z))),Y=a(Ve,pi(Z),n),Q=a(Ve,Oo(Z),n),K=s(tr,Y,Q,$),R=s(tr,Y,Q,c);return u([B({t:i,bT:m},{t:i,bT:K},{t:i,bT:z}),B({t:y,bT:z},{t:ee,bT:K},{t:ee,bT:R}),B({t:y,bT:z},{t:ee,bT:R},{t:y,bT:x}),B({t,bT:l},{t,bT:x},{t,bT:R})])},d=a(W,p,a(kn,0,e-1)),g=bu(vr(d));return lu(pw(g))}(),Qs=Ss(Xs),hw=function(e){var r=e,n=he(r.d4),t=he(r.iN),i=he(r.iJ);if(ue(i,t)<1)if(ue(i,n)<1){var o=yn(r.d4*r.d4+r.iN*r.iN);return{iJ:0,iN:-r.d4/o,d4:r.iN/o}}else{var o=yn(r.iN*r.iN+r.iJ*r.iJ);return{iJ:-r.iN/o,iN:r.iJ/o,d4:0}}else if(ue(t,n)<1){var o=yn(r.d4*r.d4+r.iJ*r.iJ);return{iJ:r.d4/o,iN:0,d4:-r.iJ/o}}else{var o=yn(r.iJ*r.iJ+r.iN*r.iN);return{iJ:-r.iN/o,iN:r.iJ/o,d4:0}}},gw=function(e){var r=hw(e),n=r,t=n,i=e,o=i,c={iJ:o.iN*t.d4-o.d4*t.iN,iN:o.d4*t.iJ-o.iJ*t.d4,d4:o.iJ*t.iN-o.iN*t.iJ};return P(r,c)},bw=function(e){var r=jl(e),n=gw(r),t=n.a,i=n.b;return Ca({dy:Im(e),d2:t,d3:i,d5:r})},_w=function(e){var r=e;return r.hi},yw=function(e){var r=e;return r.hH},xw=U(function(e,r,n,t){var i=bw(mw(t)),o=a(Pu,n,Xs),c=function(){var d=P(e,r);return d.a?d.b?li(u([o,Wo(Qs)])):o:d.b?Wo(Qs):J}(),l=yw(t),$=l,m=_w(t),p=m;return a(Hs,i,a(Du,B($,$,p),c))}),ww=v(function(e,r){return T(xw,!0,!0,e,r)}),Ks={src:`
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
    `,attributes:{triangleVertex:"dU"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b2",viewMatrix:"h"}},ed={src:`
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
    `,attributes:{triangleVertex:"dU"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",triangleVertexPositions:"b2",viewMatrix:"h"}},gi=function(e){var r=vi(e),n=r.a,t=r.b,i=r.c,o=ft(n),c=ft(t),l=ft(i);return Sn({eG:o.iJ,eH:c.iJ,eI:l.iJ,eJ:0,eK:o.iN,eL:c.iN,eM:l.iN,eN:0,eO:o.d4,eP:c.d4,eQ:l.d4,eR:0,eS:0,eT:0,eU:0,eV:0})},Uo=_s(u([B({dU:0},{dU:1},{dU:2})])),Sw=v(function(e,r){var n=ds(r),t=le(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.cm,J;var i=e.b.a;return a(ir,t,Se(function(x,z,F,Z,ee,Y,Q,K){return N(Ie,s(wr,Z,0,K),Ks,xu,Uo,{aX:i,d:F,e:z,f:Y,g:x,b2:gi(r),h:ee})}));case 1:if(e.b.$)return e.a,J;var o=e.b.a,c=e.c;return a(ir,t,Se(function(x,z,F,Z,ee,Y,Q,K){return N(Ie,s(wr,Z,0,K),Ks,wu,Uo,{bf:a(Ao,mi(c),o),d:F,e:z,f:Y,g:x,b2:gi(r),h:ee})}));case 2:e.a;var l=e.b,$=e.c,m=a(As,l,$);if(m.$)return J;var p=m.a;return a(ir,t,Se(function(x,z,F,Z,ee,Y,Q,K){var R=Q.a,ie=Q.b;return N(Ie,s(wr,Z,0,K),ed,Ds,Uo,{Z:ie,bP:R.bP,cx:R.cx,cy:R.cy,cz:R.cz,dq:p,d:F,e:z,f:Y,g:x,b2:gi(r),h:ee})}));default:e.a;var d=e.b,g=e.c,f=e.d,$=e.e,_=T(Vs,d,g,f,$);if(_.$)return J;var y=_.a,w=_.b,S=_.c;return a(ir,t,Se(function(x,z,F,Z,ee,Y,Q,K){var R=Q.a,ie=Q.b;return N(Ie,s(wr,Z,0,K),ed,Fs,Uo,{c0:y,Z:ie,bP:R.bP,cx:R.cx,cy:R.cy,cz:R.cz,dt:S,d:F,e:z,f:Y,dN:w,g:x,b2:gi(r),h:ee})}))}}),Cw=function(){var e=u([{bv:a(Mr,0,1)},{bv:a(Mr,1,1)},{bv:a(Mr,2,1)},{bv:a(Mr,0,-1)},{bv:a(Mr,1,-1)},{bv:a(Mr,2,-1)}]),r=u([B(0,1,2),B(3,5,4),B(3,4,1),B(3,1,0),B(4,5,2),B(4,2,1),B(5,3,0),B(5,0,2)]);return a(fi,e,r)}(),zw={src:`
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
    `,attributes:{triangleShadowVertex:"bv"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cP",triangleVertexPositions:"b2",viewMatrix:"h"}},rd=function(e){return Go(Se(function(r,n,t,i,o,c,l,$){return N(Ie,a(Iu,i,$),zw,Nu,Cw,{d:t,e:n,f:c,g:r,cP:l,b2:gi(e),h:o})}))},Pw=U(function(e,r,n,t){var i=a(Sw,n,t),o=P(e,r);return o.a?o.b?li(u([i,rd(t)])):i:o.b?rd(t):J}),Lw=v(function(e,r){return T(Pw,!0,!0,e,r)}),Fu=function(e){var r=e;return r},Tw=v(function(e,r){var n=ta(r),t=ta(e),i=aa(r),o=aa(e),c=na(r),l=na(e);return{eY:a(Ue,l,c),eZ:a(Ue,o,i),e_:a(Ue,t,n),e$:a(er,l,c),e0:a(er,o,i),e1:a(er,t,n)}}),Mw=function(e){var r=Fu(e),n=r.a,t=r.b;return a(Tw,n,t)},nd={src:`
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
    `,attributes:{lineSegmentVertex:"eE"},uniforms:{lineSegmentEndPoint:"eC",lineSegmentStartPoint:"eD",modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",viewMatrix:"h"}},kw=v(function(e,r){return{$:1,a:e,b:r}}),Dw=kw({eg:2,et:0,e3:1}),ad=Dw(u([P({eE:0},{eE:1})])),Nw=v(function(e,r){var n=Mw(r),t=le(n),i=Fu(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.cm,J;var l=e.b.a;return a(ir,t,Se(function(m,p,d,g,f,_,y,w){return N(Ie,w,nd,xu,ad,{aX:l,eC:xr(c),eD:xr(o),d,e:p,f:_,g:m,h:f})}));case 1:if(e.b.$)return J;var l=e.b.a,$=e.c;return a(ir,t,Se(function(p,d,g,f,_,y,w,S){return N(Ie,S,nd,wu,ad,{bf:a(Ao,mi($),l),eC:xr(c),eD:xr(o),d:g,e:d,f:y,g:p,h:_})}));case 2:return J;default:return J}}),Iw=v(function(e,r){return a(Nw,e,r)}),ju=function(e){var r=e;return r.gi},Au=function(e){var r=e;return r.hH},td=v(function(e,r){var n=e,t=r;return n/t}),Ew=Ye(function(e,r,n,t,i){e:for(;;){var o=t(r/n),c=a(C,o,i);if(oe(r,e))return c;var l=e,$=r-1,m=n,p=t,d=c;e=l,r=$,n=m,t=p,i=d;continue e}}),id=v(function(e,r){return e<1?k:N(Ew,0,e,e,r,k)}),Bw=v(function(e,r){var n=e.bT,t=e.t,i=e.S,o=i,c=o.a,l=o.b;return a(C,{t:Bo(t),bT:xr(n),S:a(Mr,c,l)},r)}),Fw=function(e){var r=s(R$,Bw,k,du(e));if(r.b){var n=r.a,t=r.b,i=a(fi,r,fu(e)),o=a(Ys,n,t);return T(ms,o,e,i,0)}else return uu},Vu=v(function(e,r){var n=e,t=r,i=it(t);return{iJ:i*it(n),iN:i*ot(n),d4:ot(t)}}),jw=function(){var e=yr(1),r=72,n=a(kn,0,r-1),t=a(id,r,a(di,Fn,Bu(1))),i=Pt(r/2),o=a(kn,0,i-1),c=a(id,i,a(di,at(90),at(-90))),l=hu(vr(a(W,function(p){return a(W,function(d){return{t:hi(a(Vu,p,d)),bT:s(tr,a(Ve,pi(d)*pi(p),e),a(Ve,pi(d)*Oo(p),e),a(Ve,Oo(d),e)),S:P(a(td,p,Bu(1)),a(td,a(ci,at(90),d),at(180)))}},c)},t))),$=v(function(p,d){return p*(i+1)+d}),m=vr(a(W,function(p){return vr(a(W,function(d){var g=a($,p+1,d),f=a($,p,d),_=a($,p+1,d+1),y=a($,p,d+1);return u([B(y,_,g),B(y,g,f)])},o))},n));return lu(Fw(a(xs,l,m)))}(),Yo=72,qo=2*Yo,Aw=v(function(e,r){e:for(;;){var n=qo+1,t=a(lo,qo,2*e+3),i=a(lo,qo,2*e+2),o=2*e+1,c=2*e,l=qo,$=a(C,B(l,c,i),a(C,B(c,t,i),a(C,B(c,o,t),a(C,B(o,n,t),r))));if(e){var m=e-1,p=$;e=m,r=p;continue e}else return $}}),Vw=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Jw=v(function(e,r){e:for(;;){var n=s(Vw,0,2*je,e/Yo),t={b8:n,cF:0,cL:1},i={b8:n,cF:1,cL:1},o=a(C,t,a(C,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Rw=function(){var e=a(Jw,Yo-1,u([{b8:0,cF:0,cL:0},{b8:0,cF:1,cL:0}])),r=a(Aw,Yo-1,k);return a(fi,e,r)}(),Hw={src:`
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
    `,attributes:{angle:"b8",offsetScale:"cF",radiusScale:"cL"},uniforms:{modelMatrix:"d",modelScale:"e",projectionMatrix:"f",sceneProperties:"g",shadowLight:"cP",viewMatrix:"h"}},od=function(e){return Go(Se(function(r,n,t,i,o,c,l,$){return N(Ie,a(Iu,!0,$),Hw,Nu,Rw,{aX:s(oi,0,0,1),d:t,e:n,f:c,g:r,cP:l,h:o})}))},Gw=function(e){var r=hs(e);return{ex:!0,w:1,x:0,y:0,z:0,A:1,B:0,C:0,D:0,E:1,O:r.iJ,P:r.iN,Q:r.d4,cN:1}},Ww=v(function(e,r){return a(Rs,Gw(e),r)}),Ow=U(function(e,r,n,t){var i=a(Pu,n,jw),o=function(){var $=P(e,r);return $.a?$.b?li(u([i,od()])):i:$.b?od():J}(),c=Au(t),l=c;return a(Ww,a(vu,xn,ju(t)),a(Du,B(l,l,l),o))}),Uw=v(function(e,r){return T(Ow,!0,!0,e,r)}),Yw=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),cd=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),qw=Ye(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Zw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return a(Us,r,n);case 1:var r=e.a,n=e.b,t=e.c;return s(Yw,r,n,t);case 2:var r=e.a,n=e.b,i=e.c;return s(cd,r,n,i);default:var r=e.a,n=e.b,o=e.c,c=e.d,i=e.e;return N(qw,r,n,o,c,i)}},Xw=Zw,ld=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return u([a($w,r,n)]);case 1:var r=e.a,t=e.b;return u([a(Lw,r,t)]);case 3:var r=e.a,i=e.b;return u([a(Uw,Xw(r),i)]);case 2:var r=e.a,o=e.b;return u([a(ww,r,o)]);case 4:var c=e.a,l=e.b;return u([a(Iw,fw(c),l)]);default:var $=e.a;return a(ha,ld,$)}},Qw=function(e){return a(ha,ld,e)},Kw=v(function(e,r){return nx({fX:e.fX,ba:j4(e.f0),ge:e.ge,gm:yr(e.gm),c5:e.c5,bd:P($s(De(e.cO.iH)),$s(De(e.cO.gY))),bh:Qw(r),gK:e.gK,hk:e.hk,ix:e.ix,iG:e.iG})}),ud=function(e){return e},e5=v(function(e,r){var n=e,t=Rr(r.gC),i=t.iJ,o=t.iN,c=t.d4,l=a(No,r.cu,r.bc),$=l;return{ca:ka($),gh:n,cq:Ma($),dH:0,cK:Ta($),dV:1,iJ:-i,iN:-o,d4:-c}}),r5=function(e){return a(e5,ud(!0),{bc:e.bc,gC:a(Vu,tn(e.b9),tn(e.co)),cu:e.cu})},Ju=v(function(e,r){return{$:0,a:e,b:r}}),Ru=v(function(e,r){var n=e,t=r;return ue(t,n)>-1}),Hu=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),n5=Bn({iJ:-1,iN:0,d4:0}),a5=Bn({iJ:0,iN:-1,d4:0}),t5=Sr(function(e,r,n,t,i,o){var c=a(Ru,n,o)?Al:Jl,l=a(Ru,r,i)?iu:a5,$=a(Ru,e,t)?Dm:n5,m=B(ar(a(jn,e,t)),ar(a(jn,r,i)),ar(a(jn,n,o))),p=s(tr,a(Hu,e,t),a(Hu,r,i),a(Hu,n,o)),d=Ca({dy:p,d2:$,d3:l,d5:c});return{f$:d,bd:m}}),i5=v(function(e,r){return lr(t5,na(e),aa(e),ta(e),na(r),aa(r),ta(r))}),Gu=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=B(n/2,t/2,i/2),c=o.a,l=o.b,$=o.c;return a(Ju,e,a(i5,s(au,-c,-l,-$),s(au,c,l,$)))}),o5=v(function(e,r){return a(se,function(n){if(n.$===2){var t=n.a;return t}else return vl},a(On,e,r.aW))}),c5=v(function(e,r){return a(ve,vl,En(a(jr,o5(e),r)))}),l5=v(function(e,r){return a(c5,e,r.gr)}),Na=l5,Wu=function(e){return s(Rm,0,1,e<=.04045?e/12.92:a(Vr,(e+.055)/1.055,2.4))},u5=function(e){var r=hl(e),n=r.hJ,t=r.gR,i=r.f4;return s(oi,Wu(n),Wu(t),Wu(i))},Ia=function(e){return s(cd,0,Eu(u5(e)),Eu(0))},Ou=v(function(e,r){return{$:2,a:e,b:r}}),Uu=function(e){return{$:5,a:e}},$d=v(function(e,r){return{$:4,a:e,b:r}}),Yu=v(function(e,r){return{$:3,a:e,b:r}}),vd=v(function(e,r){return{$:1,a:e,b:r}}),$5=M(function(e,r,n){return{iJ:e,iN:r,d4:n}}),v5=v(function(e,r){return{f$:a(Mm,e,cu(r)),bd:_u(r)}}),f5=v(function(e,r){var n=r;return a(on,a(ct,e,n.dy),n.gC)}),m5=v(function(e,r){var n=r;return{n:a(f5,e,n.n),hi:n.hi,hH:n.hH}}),s5=function(e){return e},fd=v(function(e,r){var n=Fu(r),t=n.a,i=n.b;return s5(P(e(t),e(i)))}),d5=v(function(e,r){return a(fd,ct(e),r)}),qu=v(function(e,r){return{gi:r,hH:ar(e)}}),p5=v(function(e,r){return a(qu,Au(r),a(ct,e,ju(r)))}),md=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return B(e(t),e(i),e(o))}),h5=v(function(e,r){return a(md,ct(e),r)}),Zo=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=s($5,n,t,i);switch(r.$){case 0:var c=r.a,l=r.b;return a(Ju,c,a(v5,o,l));case 1:var c=r.a,$=r.b;return a(vd,c,a(h5,o,$));case 3:var c=r.a,m=r.b;return a(Yu,c,a(p5,o,m));case 2:var c=r.a,p=r.b;return a(Ou,c,a(m5,o,p));case 4:var c=r.a,d=r.b;return a($d,c,a(d5,o,d));default:var g=r.a;return Uu(a(W,Zo(B(n,t,i)),g))}}),Jn=function(e){return Zo(B(e,0,0))},dt=function(e){return Zo(B(0,e,0))},Cn=function(e){return Zo(B(0,0,e))},g5=M(function(e,r,n){return{f$:s(Lm,e,r,cu(n)),bd:_u(n)}}),b5=v(function(e,r){var n=a(ii,e,r),t=a(zo,e,r);return function(i){var o=i;return a(on,n(o.dy),t(o.gC))}}),_5=M(function(e,r,n){var t=n;return{n:s(b5,e,r,t.n),hi:t.hi,hH:t.hH}}),y5=M(function(e,r,n){return a(fd,a(ii,e,r),n)}),x5=M(function(e,r,n){return a(qu,Au(n),s(ii,e,r,ju(n)))}),w5=M(function(e,r,n){return a(md,a(ii,e,r),n)}),Xo=M(function(e,r,n){switch(n.$){case 0:var t=n.a,i=n.b;return a(Ju,t,s(g5,e,r,i));case 1:var t=n.a,o=n.b;return a(vd,t,s(w5,e,r,o));case 3:var t=n.a,c=n.b;return a(Yu,t,s(x5,e,r,c));case 2:var t=n.a,l=n.b;return a(Ou,t,s(_5,e,r,l));case 4:var t=n.a,$=n.b;return a($d,t,s(y5,e,r,$));default:var m=n.a;return Uu(a(W,a(Xo,e,r),m))}}),S5=a(on,xn,To),Qo=v(function(e,r){return s(Xo,S5,tn(e),r)}),sd=ep,dd=function(e){var r=e.a,n=e.b;return P(yn(r*r+n*n),a(sd,n,r))},C5=v(function(e,r){var n=r.h1,t=r.ig;r.h0,r.$8;var i=a(Ae,"base height",e),o=dd(P(t.iJ-n.iJ,t.iN-n.iN)),c=o.a,l=o.b;return a(dt,n.iN,a(Jn,n.iJ,a(Qo,l,a(Jn,c/2,a(Cn,-(i/2),a(Gu,Ia(a(Na,"base",e)),B(c,a(Ae,"base edge width",e),i)))))))}),pd=function(e){var r=e;return a(ha,function(n){var t=n.a,i=n.b.aK;return a(W,function(o){return{h0:t,h1:a(an,t,r),$8:o,ig:a(an,o,r)}},Jh(i))},zt(r))},ia=function(e){return Uu(e)},z5=v(function(e,r){return ia(a(W,C5(e),pd(_r(r.a).T)))}),P5=M(function(e,r,n){return{n:a(on,e,r),hi:ar(n.hi),hH:ar(n.hH)}}),Zu=M(function(e,r,n){return a(Ou,e,s(P5,xn,iu,{hi:yr(n),hH:yr(r)}))}),L5=a(on,xn,Lo),hd=v(function(e,r){return s(Xo,L5,tn(e),r)}),T5=v(function(e,r){var n=r.b.bT;return a(Cn,n.d4,a(dt,n.iN,a(Jn,n.iJ,a(Cn,-(a(Ae,"base height",e)/2),a(hd,Xt(90),s(Zu,Ia(a(Na,"base",e)),a(Ae,"base vertex radius",e),a(Ae,"base height",e)))))))}),M5=v(function(e,r){return ia(a(W,T5(e),wo(_r(r.a).T)))}),k5=v(function(e,r){return a(Cn,-.2,ia(u([a(M5,e,r),a(z5,e,r)])))}),D5=v(function(e,r){var n=r.ac;if(n.$===2){var t=n.a.h0,i=a(an,t,_r(r.a).T),o=dd(P(r.u.iJ-i.iJ,r.u.iN-i.iN)),c=o.a,l=o.b;return a(dt,i.iN,a(Jn,i.iJ,a(Qo,l,a(Jn,c/2,a(Gu,Ia(a(Na,"base",e)),B(c,.3,.3))))))}else return ia(k)}),N5=a(on,xn,ou),I5=v(function(e,r){return s(Xo,N5,tn(e),r)}),E5=Kd,B5=function(e){var r=e.a,n=e.b,t=e.c,i=yn(a(Vr,r,2)+a(Vr,n,2)+a(Vr,t,2));return{b9:a(sd,n,r),g5:E5(t/i),hH:i}},F5=v(function(e,r){var n=r.h1,t=r.ig,i=a(Ae,"player edge width",e),o=B(t.iJ-n.iJ,t.iN-n.iN,t.d4-n.d4),c=o.a,l=o.b,$=o.c,m=B5(B(c,l,$)),p=m.hH,d=m.b9,g=m.g5;return a(Cn,n.d4,a(dt,n.iN,a(Jn,n.iJ,a(Qo,d,a(I5,g-Xt(90),a(Jn,p/2,a(Qo,Xt(90),s(Zu,Ia(a(Na,"player",e)),.5*i,p))))))))}),j5=v(function(e,r){return ia(a(W,F5(e),pd(_r(r.a).ae)))}),A5=v(function(e,r){return a(Yu,e,a(qu,yr(r),xn))}),V5=M(function(e,r,n){var t=n.a,i=n.b.bT,o=oe(a(Sm,e,r),j(t))?_m:a(Na,"player",e);return a(Cn,i.d4,a(dt,i.iN,a(Jn,i.iJ,a(A5,Ia(o),a(Ae,"player vertex radius",e)))))}),J5=v(function(e,r){return ia(a(W,a(V5,e,r),wo(_r(r.a).ae)))}),R5=v(function(e,r){return ia(u([a(J5,e,r),a(j5,e,r)]))}),H5=v(function(e,r){return a(se,function(n){if(n.$===3){var t=n.a;return t}else return!1},a(On,e,r.aW))}),G5=v(function(e,r){return a(ve,!1,En(a(jr,H5(e),r)))}),W5=v(function(e,r){return a(G5,e,r.gr)}),O5=W5,U5=v(function(e,r){var n=B(a(Na,"pointer color",e),-a(Ae,"base height",e)+.01,a(Ae,"pointer reach",e)),t=n.a,i=n.b,o=n.c;return a(O5,"pointer view on/off",e)?a(Cn,r.u.d4,a(dt,r.u.iN,a(Jn,r.u.iJ,a(Cn,i,a(hd,Xt(90),s(Zu,Ia(t),o,.02)))))):ia(k)}),Y5=function(e){return e},q5=function(e){return Y5(1.2*a(Vr,2,e))},Z5=function(e){return a(Cn,-a(Ae,"base height",e),a(Cn,-.5,a(Gu,Ia(a(Na,"game background",e)),B(100,100,1))))},Xu=Ul({iJ:.37208,iN:.37529}),X5=v(function(e,r){return{$:2,a:e,b:r}}),gd=function(e){return{$:0,a:e}},Ko=function(e){var r=e;return r},Q5=function(e){var r=e;return r.gh},K5=gd(ui.a),eS=v(function(e,r){var n=v(function(t,i){var o=i.a,c=i.b;return e(t)?P(a(C,t,o),c):P(o,a(C,t,c))});return s(qe,n,P(k,k),r)}),rS=function(e){var r=e;return Sn({eG:r.iJ,eH:r.cK,eI:0,eJ:0,eK:r.iN,eL:r.cq,eM:0,eN:0,eO:r.d4,eP:r.ca,eQ:0,eR:0,eS:r.dV,eT:r.dH,eU:0,eV:0})},nS=Se(function(e,r,n,t,i,o,c,l){var $=a(eS,Q5,u([Ko(e),Ko(r),Ko(n),Ko(t)])),m=$.a,p=$.b;if(m.b){var d=V(m,p);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,y=f.b,w=y.a,S=y.b,x=S.a;return a(X5,a(W,rS,m),{bP:a(Hr,g,_),cx:a(Hr,w,x),cy:a(Hr,i,o),cz:a(Hr,c,l)})}else return K5}else return gd({bP:a(Hr,e,r),cx:a(Hr,n,t),cy:a(Hr,i,o),cz:a(Hr,c,l)})}),aS=U(function(e,r,n,t){return bt(nS,e,r,n,t,kr,kr,kr,kr)}),tS={$:5},iS=tS,oS=Ul({iJ:.44757,iN:.40745}),cS=function(e){return e},lS=T(wa,114/255,159/255,207/255,1),bd=function(e){return e},Qu=function(e){return e},uS={$:1},$S=uS,vS=v(function(e,r){var n=e,t=$i(r.bT),i=t.iJ,o=t.iN,c=t.d4,l=a(No,r.cu,r.bc),$=l;return{ca:ka($),gh:n,cq:Ma($),dH:0,cK:Ta($),dV:2,iJ:i,iN:o,d4:c}}),_d=function(e){return a(vS,ud(!0),{bc:e.bc,cu:e.cu,bT:Cm(e.bT)})},fS=v(function(e,r){var n=e,t=r;return ue(t,n)>0}),yd=function(e){var r=e;return r},mS=function(e){e:for(;;){if(oe(e.ev,Fn)&&oe(e.ew,Fn))return kr;if(a(fS,ar(e.ev),ar(e.ew))){var r={bc:e.bc,ev:e.ew,ew:e.ev,fz:Do(e.fz)};e=r;continue e}else{var n=he(yd(e.ew)/je),t=he(yd(e.ev)/je),i=Rr(e.fz),o=i.iJ,c=i.iN,l=i.d4,$=a(No,gs(1),e.bc),m=$;return{ca:t*ka(m),gh:!1,cq:t*Ma(m),dH:n/t,cK:t*Ta(m),dV:3,iJ:o,iN:c,d4:l}}}},sS=function(e){return mS({bc:e.bc,ev:e.ev,ew:e.ew,fz:a(Vu,tn(e.b9),tn(e.co))})},dS=v(function(e,r){var n=r5({b9:a(Ae,"azimuth for third light",e),bc:F4(cS(2e3)),co:a(Ae,"elevation for third light",e),cu:Qu(120)}),t=_d({bc:Xu,cu:bd(12e3),bT:{iJ:2,iN:3,d4:4}}),i=sS({b9:a(Ae,"azimuth for fourth light",e),bc:Xu,co:a(Ae,"elevation for fourth light",e),ev:Qu(20),ew:Qu(10)}),o=_d({bc:oS,cu:bd(12e3),bT:{iJ:-2,iN:4,d4:4}});return a(Kw,{fX:$S,f0:lS,ge:Nm(e),gm:.1,c5:e.c5,gK:q5(6),hk:T(aS,o,t,n,i),cO:e.cO,ix:iS,iG:Xu},u([a(k5,e,r),a(R5,e,r),a(D5,e,r),Z5(e),a(U5,e,r)]))}),xd=a(en,$l,h.il),wd=function(e){return a(ge,u([O(X),a(qt,0,10),xd,rn(16)]),nr(e))},pS={$:9},Ku=v(function(e,r){return T(Ge,Ha,Fr,a(C,Zt(pS),a(C,O(X),a(C,Ke(5),e))),ke(r))}),hS=5,gS=v(function(e,r){return{$:4,a:e,b:r}}),bS=v(function(e,r){return a(gS,e,r)}),_S=v(function(e,r){return{$:3,a:e,b:r}}),yS=v(function(e,r){return a(_S,e,r)}),Sd=v(function(e,r){return T(Ge,hS,Fr,a(C,O(a(bS,750,a(yS,500,X))),e),ke(r))}),xS=v(function(e,r){return a(Sd,k,u([wd("Editing the selected level"),a(Ku,k,u([nr("- Hold shift + alt & Press mouse to add vertex")])),a(Ku,k,u([nr("- To move vertices drag them with mouse")])),a(Ku,k,u([nr("- Hold shift and drag with mouse to draw an edge")]))]))}),wS={$:6},SS={$:7},oa=v(function(e,r){return a(Dl,u([Ar(Ut),a(qt,10,6),br(ni),nn(8)]),{de:nr(e),hv:j(r)})}),CS=function(e){return a(ge,u([O(X),$e(we(100)),Qr(10),br(Ut),ei(u([ri])),Yt,Pr(a(Oe,"user-select","text")),nn(10)]),nr(e.N.db))},zS=v(function(e,r){return a(Xe,u([Ke(10),O(X)]),u([a(oa,"Export Levels",SS),CS(r)]))}),PS={$:8},LS=function(e){return{$:9,a:e}},TS=function(e){return{$:0,a:e}},MS={$:1},kS=a(qn,ye,co("autocomplete")),DS=function(e){var r=v(function(i,o){if(i.$===4&&i.b.$===5){var c=i.b;c.b;var l=c.c;return o.$===1?j(l):o}else return o}),n=s(qe,r,A,e);if(n.$===1)return Er;var t=n.a;return Vf(Va(t/2))},Cd=a(en,Mf,h.gl),NS=s(ra,186/255,189/255,182/255),IS=a(qt,12,12),ES=u([IS,nn(3),_n(NS),br($o),Qt(1),Ke(5),O(X),$e(fr)]),BS=function(e){if(e.$===8){var r=e.a;return j(r)}else return A},FS=function(e){e:for(;;)switch(e.$){case 1:return!1;case 0:return!0;case 2:return!0;case 3:var r=e.b,n=r;e=n;continue e;default:var r=e.b;return!0}},jS=function(e){if(e.$)return!0;var r=e.a;switch(r){case 0:return!1;case 1:return!1;case 2:return!0;default:return!0}},AS=function(e){return{cc:-e.cc,hh:-e.hh,hM:-e.hM,cT:-e.cT}},zd=function(e){e:for(;;)switch(e.$){case 2:return!0;case 1:return!1;case 0:return!1;case 3:var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},VS=function(e){e:for(;;)switch(e.$){case 1:return!1;case 0:return!0;case 2:return!1;case 3:var r=e.b,n=r;e=n;continue e;default:var r=e.b,n=r;e=n;continue e}},JS=U(function(e,r,n,t){return"pad-"+(ze(e)+("-"+(ze(r)+("-"+(ze(n)+("-"+ze(t)))))))}),RS=U(function(e,r,n,t){switch(n.$){case 9:return E(t,{c:a(C,n,t.c)});case 7:var i=n.a;return zd(i)?E(t,{m:a(C,n,t.m),I:a(C,n,t.I),c:a(C,n,t.c)}):r?E(t,{m:a(C,n,t.m)}):E(t,{c:a(C,n,t.c)});case 8:var o=n.a;return r?zd(o)?E(t,{m:a(C,n,t.m),c:a(C,n,t.c)}):VS(o)?E(t,{c:a(C,n,t.c)}):E(t,{c:a(C,n,t.c)}):E(t,{m:a(C,n,t.m),c:a(C,n,t.c)});case 6:return E(t,{m:a(C,n,t.m)});case 5:return E(t,{m:a(C,n,t.m)});case 4:switch(n.b.$){case 5:return n.b,E(t,{m:a(C,n,t.m),I:a(C,n,t.I),c:a(C,n,t.c),by:a(C,n,t.by)});case 7:n.a;var c=n.b;c.a;var l=c.b,$=c.c,m=c.d,p=c.e;if(e)return E(t,{X:a(C,n,t.X),c:a(C,n,t.c)});var d=l-a(Zr,l,m),g=Pr(a(Oe,"line-height","calc(1.0em + "+(ae(2*a(Zr,l,m))+"px)"))),f=Pr(a(Oe,"height","calc(1.0em + "+(ae(2*a(Zr,l,m))+"px)"))),_=m-a(Zr,l,m),y=a(xe,et,N(Ka,T(JS,d,$,_,p),d,$,_,p));return E(t,{X:a(C,n,t.X),I:a(C,f,a(C,g,t.I)),c:a(C,y,t.c)});case 6:return n.b,E(t,{X:a(C,n,t.X),c:a(C,n,t.c)});case 10:return E(t,{X:a(C,n,t.X),c:a(C,n,t.c)});case 2:return E(t,{m:a(C,n,t.m)});case 1:return n.b,E(t,{m:a(C,n,t.m)});default:return n.a,n.b,E(t,{c:a(C,n,t.c)})}case 0:return t;case 1:return n.a,E(t,{I:a(C,n,t.I)});case 2:return E(t,{I:a(C,n,t.I)});case 3:return E(t,{c:a(C,n,t.c)});default:return E(t,{I:a(C,n,t.I)})}}),HS=M(function(e,r,n){return function(t){return{X:Me(t.X),m:Me(t.m),I:Me(t.I),c:Me(t.c),by:Me(t.by)}}(s(Te,a(RS,e,r),{X:k,m:k,I:k,c:k,by:k},n))}),GS=function(e){var r=e.cT,n=e.hM,t=e.cc,i=e.hh;return D(r)+("px "+(D(n)+("px "+(D(t)+("px "+(D(i)+"px"))))))},WS=function(e){var r=function(n){return 1-n}(a(Zr,1,a(We,0,e)));return a(xe,xl,a(yl,"transparency-"+ze(r),r))},OS=s(ra,136/255,138/255,133/255),Pd=M(function(e,r,n){var t=e.a,i=e.b;return a(ge,V(r,V(u([Ar(OS),He(h.e5+(" "+h.hC)),Cd,_n(T(_l,0,0,0,0)),br(T(_l,0,0,0,0)),$e(X),O(X),WS(n?1:0)]),t)),i)}),US=vn("span"),YS=nm("spellcheck"),qS=a(qn,ye,YS),ZS=a(qn,ye,Tl),XS=M(function(e,r,n){var t=V(ES,r),i=s(HS,oe(e.dV,MS),jS(n.de),t),o=function(){var p=e.dV;return p.$?a(ve,!1,a(se,FS,En(Me(a(jr,BS,t))))):(p.a,!1)}(),c=function(p){if(p.$===4&&p.b.$===7){p.a;var d=p.b;d.a;var g=d.b,f=d.c,_=d.d,y=d.e;return j({cc:a(We,0,Va(_-3)),hh:a(We,0,Va(y-3)),hM:a(We,0,Va(f-3)),cT:a(We,0,Va(g-3))})}else return A},l=a(ve,{cc:0,hh:0,hM:0,cT:0},En(Me(a(jr,c,t)))),$=T(Ge,or,function(){var p=e.dV;return p.$?gn("textarea"):(p.a,gn("input"))}(),V(function(){var p=e.dV;if(p.$)return u([Cd,$e(X),He(h.g8),DS(t),Qf(l),ye(a(Oe,"margin",GS(AS(l)))),ye(a(Oe,"box-sizing","content-box"))]);var d=p.a;return u([ye(Ll(d)),He(h.hc)])}(),V(u([ZS(n.ih),ye(Pl(n.e7)),sl(n.de),qS(e.ao),a(ve,Er,a(se,kS,e.ag))]),i.I)),ke(k)),m=function(){var p=e.dV;return p.$===1?T(Ge,or,Fr,V((o?C(Yt):pr)(u([O(X),a(sa,kl,t)?Er:He(h.el),He(h.hb)])),i.c),ke(u([T(Ge,Ha,Fr,a(C,O(X),a(C,$e(X),a(C,Hi($),a(C,He(h.ha),i.by)))),ke(function(){if(n.ih===""){var d=n.hE;if(d.$===1)return u([nr("\xA0")]);var g=d.a;return u([s(Pd,g,k,n.ih==="")])}else return u([zv(a(US,u([Lr(h.g9)]),u([qi(n.ih+"\xA0")])))])}()))]))):(p.a,T(Ge,or,Fr,a(C,O(X),a(C,a(sa,kl,t)?Er:He(h.el),vr(u([i.c,function(){var d=n.hE;if(d.$===1)return k;var g=d.a;return u([fo(s(Pd,g,i.X,n.ih===""))])}()])))),ke(u([$]))))}();return s(ml,a(C,a(en,If,h.gw),a(C,dl(n.de)?Er:Ke(5),a(C,fl,i.m))),n.de,m)}),QS=XS({ag:A,ao:!1,dV:TS("text")}),KS=function(e){return a(QS,u([O(X),$e(we(100)),Qr(10),br(Ut),ei(u([ri])),Yt,Pr(a(Oe,"user-select","text")),nn(10)]),{de:Kf("Imported Levels"),e7:LS,hE:A,ih:e.N.dc})},eC=v(function(e,r){return a(Xe,u([Ke(10),O(X)]),u([a(oa,"Import Levels",PS),KS(r)]))}),rC={$:3},nC={$:5},aC={$:4},tC=v(function(e,r){return a(Kr,u([Ke(10)]),u([a(oa,"Add level",rC),a(oa,"Remove current level",aC),a(oa,"Move level one up",nC)]))}),iC=v(function(e,r){return a(Xe,u([Ke(10)]),u([a(tC,e,r),a(oa,"Reset player graph",wS),a(zS,e,r),a(eC,e,r)]))}),oC=v(function(e,r){return r.N.da?a(Xe,u([O(X),$e(X),Ke(20)]),u([a(xS,e,r),a(iC,e,r)])):Qe}),cC=function(e){return{$:0,a:e}},lC=zl(1),uC=v(function(e,r){return a(Ff,k,{gk:r.N.da,g1:Jf,de:a(lC,k,nr("Editor")),e7:cC})}),$C={$:2},vC={$:1},fC=function(e){var r=e;return r.o},mC=function(e){return fn(fC(e))+1},sC=function(e){var r=e;return 1+fn(r.o)+fn(r.H)},dC=v(function(e,r){return a(Kr,u([Ke(10)]),u([a(oa,"<",vC),a(ge,u([rn(22),xd,Ar(mo)]),nr(ga(u([D(mC(r.a))," / ",D(sC(r.a))])))),a(oa,">",$C)]))}),pC=v(function(e,r){return a(Sd,u([ho]),u([wd("Debugger")]))}),hC=v(function(e,r){return a(Xe,u([O(X),$e(X)]),u([a(Xe,u([ll,em,Qr(20),Ke(20),O(we(600)),$e(X),Ar(ao),rn(13)]),u([a(uC,e,r),a(oC,e,r),a(pC,e,r)])),a(Kr,u([ho,uo,rn(30),to,Qr(20)]),u([a(dC,e,r)]))]))}),gC=lr(E_,dS,p4,e2,q_,hC,E4);const bC={Main:{init:gC(a(q,function(e){return Re({hd:e})},a(H,"inputs",a(q,function(e){return a(q,function(r){return a(q,function(n){return a(q,function(t){return a(q,function(i){return a(q,function(o){return a(q,function(c){return Re({gp:c,c5:o,gF:i,bn:t,aw:n,cO:r,iF:e})},a(H,"clock",Fe))},a(H,"devicePixelRatio",Fe))},a(H,"dt",Fe))},a(H,"keyboard",a(q,function(t){return a(q,function(i){return a(q,function(o){return a(q,function(c){return a(q,function(l){return a(q,function($){return a(q,function(m){return a(q,function(p){return a(q,function(d){return Re({cZ:d,gt:p,ef:m,gE:$,hh:l,hG:c,hM:o,cQ:i,fy:t})},a(H,"alt",Ce))},a(H,"control",Ce))},a(H,"down",Ce))},a(H,"downs",dn(Yn)))},a(H,"left",Ce))},a(H,"pressedKeys",dn(Yn)))},a(H,"right",Ce))},a(H,"shift",Ce))},a(H,"up",Ce))))},a(H,"pointer",a(q,function(n){return a(q,function(t){return a(q,function(i){return a(q,function(o){return a(q,function(c){return a(q,function(l){return a(q,function($){return a(q,function(m){return Re({ef:m,aG:$,ho:l,hN:c,hO:o,fy:i,iJ:t,iN:n})},a(H,"down",Ce))},a(H,"isDown",Ce))},a(H,"move",Ce))},a(H,"rightDown",Ce))},a(H,"rightUp",Ce))},a(H,"up",Ce))},a(H,"x",Fe))},a(H,"y",Fe))))},a(H,"screen",a(q,function(r){return a(q,function(n){return Re({gY:n,iH:r})},a(H,"height",Fe))},a(H,"width",Fe))))},a(H,"wheel",a(q,function(e){return a(q,function(r){return Re({gx:r,gy:e})},a(H,"deltaX",Fe))},a(H,"deltaY",Fe)))))))(0)}},re={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},_C=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),t=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",c=f=>f.code=="ArrowUp",l=f=>f.code=="ArrowDown",$=f=>f.button==0,m=f=>f.button==2;function p(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(re.keyboard.downs.push(f.code),re.keyboard.pressedKeys.push(f.code),r(f)&&(re.keyboard.control=!0),n(f)&&(re.keyboard.alt=!0),t(f)&&(console.log("yo"),re.keyboard.shift=!0),i(f)&&(re.keyboard.left=!0),o(f)&&(re.keyboard.right=!0),c(f)&&(re.keyboard.up=!0),l(f)&&(console.log("yey"),re.keyboard.down=!0))}),window.addEventListener("keyup",f=>{re.keyboard.pressedKeys=re.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(re.keyboard.control=!1,re.keyboard.pressedKeys=[]),n(f)&&(re.keyboard.alt=!1),t(f)&&(re.keyboard.shift=!1),i(f)&&(re.keyboard.left=!1),o(f)&&(re.keyboard.right=!1),c(f)&&(re.keyboard.up=!1),l(f)&&(re.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{re.pointer.x=-.5*re.screen.width+f.pageX,re.pointer.y=.5*re.screen.height-f.pageY,$(f)&&(re.pointer.down=!0,re.pointer.isDown=!0),m(f)&&(re.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{re.pointer.move=!0,re.pointer.x=-.5*re.screen.width+f.pageX,re.pointer.y=.5*re.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{$(f)&&(re.pointer.up=!0,re.pointer.isDown=!1),m(f)&&(re.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{$(f)&&(re.pointer.up=!0,re.pointer.isDown=!1),m(f)&&(re.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{re.wheel.deltaX=f.deltaX,re.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{p(re)}),window.addEventListener("focus",f=>{p(re)}),window.addEventListener("visibilitychange",f=>{p(re)}),window.addEventListener("resize",()=>{re.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,y=_-re.clock;y<.009||(re.dt=y,re.clock=_,e.ports.tick.send(re),d(re)),window.requestAnimationFrame(g)}},yC=bC.Main.init({node:document.querySelector("#app div"),flags:{inputs:re}});_C(yC);
