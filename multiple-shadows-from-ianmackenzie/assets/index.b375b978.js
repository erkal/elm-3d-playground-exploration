const bs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};bs();function jn(e,r,n){return n.a=e,n.f=r,n}function v(e){return jn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return jn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function re(e){return jn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Ye(e){return jn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function Mr(e){return jn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function qi(e){return jn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function ze(e){return jn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,t,i,o,l,c,u)}}}}}}}})}function Hl(e){return jn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return e(r,n,t,i,o,l,c,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function L(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function A(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ir(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function Rl(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function kt(e,r,n,t,i,o,l,c,u){return e.a===8?e.f(r,n,t,i,o,l,c,u):e(r)(n)(t)(i)(o)(l)(c)(u)}function _s(e,r,n,t,i,o,l,c,u,f){return e.a===9?e.f(r,n,t,i,o,l,c,u,f):e(r)(n)(t)(i)(o)(l)(c)(u)(f)}var ws=[];function ys(e){return e.length}var xs=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Ss=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,P(n,r)}),Cs=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var Ls=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Ps()),r});function Ps(e){return"<internals>"}function Ja(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,t=[],i=al(e,r,0,t);i&&(n=t.pop());i=al(n.a,n.b,0,t));return i}function al(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ja(5),!1;if(n>100)return t.push(P(e,r)),!0;e.$<0&&(e=bu(e),r=bu(r));for(var i in e)if(!al(e[i],r[i],n+1,t))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function be(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=be(e.a,r.a))||(n=be(e.b,r.b))?n:be(e.c,r.c);for(;e.b&&r.b&&!(n=be(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return be(e,r)<0});v(function(e,r){return be(e,r)<1});v(function(e,r){return be(e,r)>0});v(function(e,r){return be(e,r)>=0});var zs=v(function(e,r){var n=be(e,r);return n<0?fv:n?w0:vv}),Dt=0;function P(e,r){return{a:e,b:r}}function j(e,r,n){return{a:e,b:r,c:n}}function je(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Z);function Z(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=on(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=on(e.a,r);return n}var D={$:0};function on(e,r){return{$:1,a:e,b:r}}var Ms=v(on);function $(e){for(var r=D,n=e.length;n--;)r=on(e[n],r);return r}function Ui(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ts=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});re(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Ye(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(L(e,r.a,n.a,t.a,i.a));return $(o)});Mr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(A(e,r.a,n.a,t.a,i.a,o.a));return $(l)});v(function(e,r){return $(Ui(r).sort(function(n,t){return be(e(n),e(t))}))});v(function(e,r){return $(Ui(r).sort(function(n,t){var i=a(e,n,t);return i===vv?0:i===fv?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ks=v(Math.pow);v(function(e,r){return r%e});var Ds=v(function(e,r){var n=r%e;return e===0?Ja(11):n>0&&e<0||n<0&&e>0?n+e:n}),As=Math.PI,Bs=Math.cos,Is=Math.sin,Fs=Math.tan,Es=Math.acos;v(Math.atan2);function Vs(e){return e}function js(e){return e===1/0||e===-1/0}var Ns=Math.ceil,Hs=Math.floor,Rs=Math.round,Os=Math.sqrt,iu=Math.log,Gs=isNaN;function Ws(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Js=v(function(e,r){return e+r});function qs(e){var r=e.charCodeAt(0);return isNaN(r)?q:Y(55296<=r&&r<=56319?P(e[0]+e[1],e.slice(2)):P(e[0],e.slice(1)))}v(function(e,r){return e+r});function Us(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function Ys(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Zs=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Qs=v(function(e,r){return r.split(e)}),Ks=v(function(e,r){return r.join(e)}),Xs=M(function(e,r,n){return n.slice(e,r)});function ed(e){return $(e.trim().split(/\s+/g))}function rd(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var nd=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),ad=v(function(e,r){return r.indexOf(e)>-1}),td=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var id=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function V$(e){return e+""}function od(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return q;r=10*r+o-48}return i==t?q:Y(n==45?-r:r)}function ld(e){if(e.length===0||/[\sxbo]/.test(e))return q;var r=+e;return r===r?Y(r):q}function cd(e){return Ui(e).join("")}function ud(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function $d(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function vd(e){return{$:0,a:e}}function fd(e){return{$:1,a:e}}function Ol(e){return{$:2,b:e}}var md=Ol(function(e){return typeof e=="boolean"?We(e):Zr("a BOOL",e)}),sd=Ol(function(e){return typeof e=="number"?We(e):Zr("a FLOAT",e)}),dd=Ol(function(e){return typeof e=="string"?We(e):e instanceof String?We(e+""):Zr("a STRING",e)});function pd(e){return{$:3,b:e}}var gd=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Nn(e,r){return{$:9,f:e,g:r}}var hd=v(function(e,r){return{$:10,b:r,h:e}}),bd=v(function(e,r){return Nn(e,[r])}),_d=M(function(e,r,n){return Nn(e,[r,n])});re(function(e,r,n,t){return Nn(e,[r,n,t])});Ye(function(e,r,n,t,i){return Nn(e,[r,n,t,i])});Mr(function(e,r,n,t,i,o){return Nn(e,[r,n,t,i,o])});qi(function(e,r,n,t,i,o,l){return Nn(e,[r,n,t,i,o,l])});ze(function(e,r,n,t,i,o,l,c){return Nn(e,[r,n,t,i,o,l,c])});Hl(function(e,r,n,t,i,o,l,c,u){return Nn(e,[r,n,t,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return kr(e,n)}catch(t){return or(a(nc,"This is not valid JSON! "+t.message,r))}});var j$=v(function(e,r){return kr(e,r)});function kr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?We(e.c):Zr("null",r);case 3:return Kt(r)?ou(e.b,r,$):Zr("a LIST",r);case 4:return Kt(r)?ou(e.b,r,wd):Zr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Zr("an OBJECT with a field named `"+n+"`",r);var f=kr(e.b,r[n]);return Hr(f)?f:or(a(_u,n,f.a));case 7:var t=e.e;if(!Kt(r))return Zr("an ARRAY",r);if(t>=r.length)return Zr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=kr(e.b,r[t]);return Hr(f)?f:or(a(mv,t,f.a));case 8:if(typeof r!="object"||r===null||Kt(r))return Zr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=kr(e.b,r[o]);if(!Hr(f))return or(a(_u,o,f.a));i=on(P(o,f.a),i)}return We(gr(i));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var f=kr(c[u],r);if(!Hr(f))return f;l=l(f.a)}return We(l);case 10:var f=kr(e.b,r);return Hr(f)?kr(e.h(f.a),r):f;case 11:for(var m=D,d=e.g;d.b;d=d.b){var f=kr(d.a,r);if(Hr(f))return f;m=on(f.a,m)}return or(y0(gr(m)));case 1:return or(a(nc,e.a,r));case 0:return We(e.a)}}function ou(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=kr(e,r[o]);if(!Hr(l))return or(a(mv,o,l.a));i[o]=l.a}return We(n(i))}function Kt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function wd(e){return a(E0,e.length,function(r){return e[r]})}function Zr(e,r){return or(a(nc,"Expecting "+e,r))}function La(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return La(e.b,r.b);case 6:return e.d===r.d&&La(e.b,r.b);case 7:return e.e===r.e&&La(e.b,r.b);case 9:return e.f===r.f&&lu(e.g,r.g);case 10:return e.h===r.h&&La(e.b,r.b);case 11:return lu(e.g,r.g)}}function lu(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!La(e[t],r[t]))return!1;return!0}var yd=v(function(e,r){return JSON.stringify(r,null,e)+""});function N$(e){return e}function xd(){return[]}function Sd(){return{}}var Cd=M(function(e,r,n){return n[e]=r,n});function Ld(e){return v(function(r,n){return n.push(e(r)),n})}function $a(e){return{$:0,a:e}}function Pd(e){return{$:1,a:e}}function xn(e){return{$:2,b:e,c:null}}var tl=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function zd(e){return{$:5,b:e}}var Md=0;function Gl(e){var r={$:0,e:Md++,f:e,g:null,h:[]};return Wl(r),r}function H$(e){return xn(function(r){r($a(Gl(e)))})}function R$(e,r){e.h.push(r),Wl(e)}var Td=v(function(e,r){return xn(function(n){R$(e,r),n($a(Dt))})}),Ao=!1,cu=[];function Wl(e){if(cu.push(e),!Ao){for(Ao=!0;e=cu.shift();)kd(e);Ao=!1}}function kd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Wl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}re(function(e,r,n,t){return Jl(r,t,e.gR,e.ih,e.hV,function(){return function(){}})});function Jl(e,r,n,t,i,o){var l=a(j$,e,r?r.flags:void 0);Hr(l)||Ja(2);var c={},u=n(l.a),f=u.a,m=o(b,f),d=Dd(c,b);function b(s,w){var _=a(t,s,f);m(f=_.a,w),$u(c,_.b,i(f))}return $u(c,u.b,i(f)),d?{ports:d}:{}}var rn={};function Dd(e,r){var n;for(var t in rn){var i=rn[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Bd(i,r)}return n}function Ad(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Bd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c(u){return a(tl,c,zd(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&l?L(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=Gl(a(tl,c,e.b))}var Id=v(function(e,r){return xn(function(n){e.g(r),n($a(Dt))})});v(function(e,r){return a(Td,e.h,{$:0,a:r})});function O$(e){return function(r){return{$:1,k:e,l:r}}}function Fd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var uu=[],Bo=!1;function $u(e,r,n){if(uu.push({p:e,q:r,r:n}),!Bo){Bo=!0;for(var t;t=uu.shift();)Ed(t.p,t.q,t.r);Bo=!1}}function Ed(e,r,n){var t={};xi(!0,r,t,null),xi(!1,n,t,null);for(var i in e)R$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function xi(e,r,n,t){switch(r.$){case 1:var i=r.k,o=Vd(e,i,t,r.l);n[i]=jd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)xi(e,l.a,n,t);return;case 3:xi(e,r.o,n,{s:r.n,t});return}}function Vd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?rn[r].e:rn[r].f;return a(o,i,t)}function jd(e,r,n){return n=n||{i:D,j:D},e?n.i=on(r,n.i):n.j=on(r,n.j),n}function Nd(e){rn[e]&&Ja(3)}v(function(e,r){return r});function Hd(e,r){return Nd(e),rn[e]={f:Rd,u:r,a:Od},O$(e)}var Rd=v(function(e,r){return function(n){return e(r(n))}});function Od(e,r){var n=D,t=rn[e].u,i=$a(null);rn[e].b=i,rn[e].c=M(function(l,c,u){return n=c,i});function o(l){var c=a(j$,t,l);Hr(c)||Ja(4,e,c.a);for(var u=c.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var Si,dn=typeof document!="undefined"?document:{};function ql(e,r){e.appendChild(r)}re(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(Tn(e,function(){}),i),{}});function il(e){return{$:0,a:e}}var G$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Yl(n),e:i,f:e,b:o}})}),Sn=G$(void 0),Gd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Yl(n),e:i,f:e,b:o}})}),Wd=Gd(void 0);function Jd(e,r,n,t){return{$:3,d:Yl(e),g:r,h:n,i:t}}var qd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Hn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Hn([e,r],function(){return e(r)})});M(function(e,r,n){return Hn([e,r,n],function(){return a(e,r,n)})});var Ud=re(function(e,r,n,t){return Hn([e,r,n,t],function(){return h(e,r,n,t)})});Ye(function(e,r,n,t,i){return Hn([e,r,n,t,i],function(){return L(e,r,n,t,i)})});Mr(function(e,r,n,t,i,o){return Hn([e,r,n,t,i,o],function(){return A(e,r,n,t,i,o)})});qi(function(e,r,n,t,i,o,l){return Hn([e,r,n,t,i,o,l],function(){return ir(e,r,n,t,i,o,l)})});ze(function(e,r,n,t,i,o,l,c){return Hn([e,r,n,t,i,o,l,c],function(){return Rl(e,r,n,t,i,o,l,c)})});Hl(function(e,r,n,t,i,o,l,c,u){return Hn([e,r,n,t,i,o,l,c,u],function(){return kt(e,r,n,t,i,o,l,c,u)})});var W$=v(function(e,r){return{$:"a0",n:e,o:r}}),Yd=v(function(e,r){return{$:"a1",n:e,o:r}}),Ul=v(function(e,r){return{$:"a2",n:e,o:r}}),Jr=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function J$(e){return e=="script"?"p":e}function Zd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Qd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Kd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function q$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Xd=v(function(e,r){return r.$==="a0"?a(W$,r.n,ep(e,r.o)):r});function ep(e,r){var n=oc(r);return{$:r.$,a:n?h(V0,n<3?rp:np,vr(e),r.a):a(zi,e,r.a)}}var rp=v(function(e,r){return P(e(r.a),r.b)}),np=v(function(e,r){return{aB:e(r.aB),dA:r.dA,dp:r.dp}});function Yl(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?vu(r,i,o):r[i]=o;continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?vu(l,i,o):l[i]=o}return r}function vu(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function Tn(e,r){var n=e.$;if(n===5)return Tn(e.k||(e.k=e.m()),r);if(n===0)return dn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=Tn(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return ol(l,r,e.d),l}var l=e.f?dn.createElementNS(e.f,e.c):dn.createElement(e.c);Si&&e.c=="a"&&l.addEventListener("click",Si(l)),ol(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)ql(l,Tn(n===1?c[u]:c[u].b,r));return l}function ol(e,r,n){for(var t in n){var i=n[t];t==="a1"?ap(e,i):t==="a0"?op(e,r,i):t==="a3"?tp(e,i):t==="a4"?ip(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function ap(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function tp(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function ip(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function op(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=lp(r,o),e.addEventListener(i,l,Zl&&{passive:oc(o)<2}),t[i]=l}}var Zl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zl=!0}}))}catch{}function lp(e,r){function n(t){var i=n.q,o=kr(i.a,t);if(!!Hr(o)){for(var l=oc(i),c=o.a,u=l?l<3?c.a:c.aB:c,f=l==1?c.b:l==3&&c.dA,m=(f&&t.stopPropagation(),(l==2?c.b:l==3&&c.dp)&&t.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")u=d(u);else for(var b=d.length;b--;)u=d[b](u);m=m.p}m(u,f)}}return n.q=r,n}function cp(e,r){return e.$==r.$&&La(e.a,r.a)}function U$(e,r){var n=[];return Rr(e,r,n,0),n}function ar(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Rr(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=pp(r),o=1;else{ar(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,f=u===c.length;f&&u--;)f=l[u]===c[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Rr(e.k,r.k,m,0),m.length>0&&ar(n,1,t,m);return;case 4:for(var d=e.j,b=r.j,s=!1,w=e.k;w.$===4;)s=!0,typeof d!="object"?d=[d,w.j]:d.push(w.j),w=w.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&d.length!==b.length){ar(n,0,t,r);return}(s?!up(d,b):d!==b)&&ar(n,2,t,b),Rr(w,_,n,t+1);return;case 0:e.a!==r.a&&ar(n,3,t,r.a);return;case 1:fu(e,r,n,t,$p);return;case 2:fu(e,r,n,t,vp);return;case 3:if(e.h!==r.h){ar(n,0,t,r);return}var S=Ql(e.d,r.d);S&&ar(n,4,t,S);var C=r.i(e.g,r.g);C&&ar(n,5,t,C);return}}}function up(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function fu(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){ar(n,0,t,r);return}var o=Ql(e.d,r.d);o&&ar(n,4,t,o),i(e,r,n,t)}function Ql(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Ql(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&cp(l,c)||(t=t||{},t[i]=c)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function $p(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?ar(n,6,t,{v:c,i:l-c}):l<c&&ar(n,7,t,{v:l,e:o});for(var u=l<c?l:c,f=0;f<u;f++){var m=i[f];Rr(m,o[f],n,++t),t+=m.b||0}}function vp(e,r,n,t){for(var i=[],o={},l=[],c=e.e,u=r.e,f=c.length,m=u.length,d=0,b=0,s=t;d<f&&b<m;){var w=c[d],_=u[b],S=w.a,C=_.a,y=w.b,T=_.b,G=void 0,K=void 0;if(S===C){s++,Rr(y,T,i,s),s+=y.b||0,d++,b++;continue}var ae=c[d+1],te=u[b+1];if(ae){var ie=ae.a,ne=ae.b;K=C===ie}if(te){var U=te.a,de=te.b;G=S===U}if(G&&K){s++,Rr(y,de,i,s),Xa(o,i,S,T,b,l),s+=y.b||0,s++,et(o,i,S,ne,s),s+=ne.b||0,d+=2,b+=2;continue}if(G){s++,Xa(o,i,C,T,b,l),Rr(y,de,i,s),s+=y.b||0,d+=1,b+=2;continue}if(K){s++,et(o,i,S,y,s),s+=y.b||0,s++,Rr(ne,T,i,s),s+=ne.b||0,d+=2,b+=1;continue}if(ae&&ie===U){s++,et(o,i,S,y,s),Xa(o,i,C,T,b,l),s+=y.b||0,s++,Rr(ne,de,i,s),s+=ne.b||0,d+=2,b+=2;continue}break}for(;d<f;){s++;var w=c[d],y=w.b;et(o,i,w.a,y,s),s+=y.b||0,d++}for(;b<m;){var pe=pe||[],_=u[b];Xa(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||l.length>0||pe)&&ar(n,8,t,{w:i,x:l,y:pe})}var Y$="_elmW6BL";function Xa(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Rr(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Xa(e,r,n+Y$,t,i,o)}function et(e,r,n,t,i){var o=e[n];if(!o){var l=ar(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Rr(t,o.z,c,i),ar(r,9,i,{w:c,A:o});return}et(e,r,n+Y$,t,i)}function Z$(e,r,n,t){rt(e,r,n,0,0,r.b,t)}function rt(e,r,n,t,i,o,l){for(var c=n[t],u=c.r;u===i;){var f=c.$;if(f===1)Z$(e,r.k,c.s,l);else if(f===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&rt(e,r,m,0,i,o,l)}else if(f===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var m=d.w;m.length>0&&rt(e,r,m,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||(u=c.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return rt(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var w=r.e,_=e.childNodes,S=0;S<w.length;S++){i++;var C=b===1?w[S]:w[S].b,y=i+(C.b||0);if(i<=u&&u<=y&&(t=rt(_[S],C,n,t,i,y,l),!(c=n[t])||(u=c.r)>o))return t;i=y}return t}function Q$(e,r,n,t){return n.length===0?e:(Z$(e,r,n,t),Ci(e,n))}function Ci(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=fp(i,t);i===e&&(e=o)}return e}function fp(e,r){switch(r.$){case 0:return mp(e,r.s,r.u);case 4:return ol(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return Ci(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(Tn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=Ci(e,o.w),e;case 8:return sp(e,r);case 5:return r.s(e);default:Ja(10)}}function mp(e,r,n){var t=e.parentNode,i=Tn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function sp(e,r){var n=r.s,t=dp(n.y,r);e=Ci(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:Tn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return t&&ql(e,t),e}function dp(e,r){if(!!e){for(var n=dn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;ql(n,o.c===2?o.s:Tn(o.z,r.u))}return n}}function Kl(e){if(e.nodeType===3)return il(e.textContent);if(e.nodeType!==1)return il("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=on(a(Jr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=on(Kl(f[t]),u);return h(Sn,c,r,u)}function pp(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var gp=re(function(e,r,n,t){return Jl(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.ij,c=t.node,u=Kl(c);return K$(o,function(f){var m=l(f),d=U$(u,m);c=Q$(c,u,d,i),u=m})})});re(function(e,r,n,t){return Jl(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.dy&&e.dy(i),c=e.ij,u=dn.title,f=dn.body,m=Kl(f);return K$(o,function(d){Si=l;var b=c(d),s=Sn("body")(D)(b.fR),w=U$(m,s);f=Q$(f,m,w,i),m=s,Si=0,u!==b.ib&&(dn.title=u=b.ib)})})});var Li=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function K$(e,r){r(e);var n=0;function t(){n=n===1?0:(Li(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Li(t),n=2)}}v(function(e,r){return a(cc,Bt,xn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(cc,Bt,xn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(cc,Bt,xn(function(){history.replaceState({},"",r),e()}))});var hp={addEventListener:function(){},removeEventListener:function(){}},bp=typeof window!="undefined"?window:hp;M(function(e,r,n){return H$(xn(function(t){function i(o){Gl(n(o))}return e.addEventListener(r,i,Zl&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=kr(e,r);return Hr(n)?Y(n.a):q});function X$(e,r){return xn(function(n){Li(function(){var t=document.getElementById(e);n(t?$a(r(t)):Pd(j0(e)))})})}function _p(e){return xn(function(r){Li(function(){r($a(e()))})})}v(function(e,r){return X$(r,function(n){return n[e](),Dt})});v(function(e,r){return _p(function(){return bp.scroll(e,r),Dt})});M(function(e,r,n){return X$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,Dt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var wp=v(function(e,r){var n="g";e.g9&&(n+="m"),e.f$&&(n+="i");try{return Y(new RegExp(r,n))}catch{return q}});v(function(e,r){return r.match(e)!==null});var yp=M(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var d=u[f];m[--f]=d?Y(d):q}t.push(L(Hf,u[0],u.index,i,$(m))),c=r.lastIndex}return r.lastIndex=l,$(t)});re(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var f=arguments[c];u[--c]=f?Y(f):q}return n(L(Hf,l,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,$(i)});var mu=0;function gt(e,r){for(;r.b;r=r.b)e(r.a)}function Xl(e){for(var r=0;e.b;e=e.b)r++;return r}var xp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Sp=Ye(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Cp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Lp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Pp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),zp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Mp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Tp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),kp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Dp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Ap=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Bp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ip=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Fp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},ev=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},rv=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ep=function(e){e.gl.disable(e.gl.CULL_FACE)},Vp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},jp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Np=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},su=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Hp=[Bp,Ip,Fp,ev,rv,Ep,Vp,jp,Np];function du(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Rp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function nv(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Op(e,r,n,t){for(var i=n.a.d_,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(s,w,_,S,C){var y;if(i===1)for(y=0;y<w;y++)s[_++]=w===1?S[C]:S[C][y];else o.forEach(function(T){for(y=0;y<w;y++)s[_++]=w===1?S[T][C]:S[T][C][y]})}var u=nv(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,d=new u.type(Xl(n.b)*m);gt(function(s){c(d,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function Gp(e,r){if(r.a.eb>0){var n=e.createBuffer(),t=Wp(r.c,r.a.eb);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d_*Xl(r.b),indexBuffer:null,buffers:{}}}function Wp(e,r){var n=new Uint32Array(Xl(e)*r),t=0,i;return gt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function pu(e,r){return e+"#"+r}var av=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),ev(n),rv(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=pu(o.b.id,o.c.id),c=n.programs[l]),!c){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=mu++,f||(f=du(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=mu++,m||(m=du(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=Rp(t,f,m);c={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Jp(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(d,u),w=t.getAttribLocation(d,s.name);c.activeAttributes.push(s),c.activeAttributeLocations.push(w)}l=pu(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),qp(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Gp(t,o.d),n.buffers.set(o.d,_)),u=0;u<c.activeAttributes.length;u++){s=c.activeAttributes[u],w=c.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=Op(t,s,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=nv(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(w),t.vertexAttribPointer(w,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,y=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(w+T),t.vertexAttribPointer(w+T,S.size,S.baseType,!1,y,C*T)}for(n.toggle=!n.toggle,gt(w_(n),o.a),u=0;u<su.length;u++){var G=n[su[u]];G.toggle!==n.toggle&&G.enabled&&(Hp[u](n),G.enabled=!1,G.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eN,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eN,0,_.numIndices)}}return gt(i,e.g),r});function Jp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(s,w){var _=w.name,S=e.getUniformLocation(s,_);switch(w.type){case e.INT:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};case e.FLOAT:return function(y){o[_]!==y&&(e.uniform1f(S,y),o[_]=y)};case e.FLOAT_VEC2:return function(y){o[_]!==y&&(e.uniform2f(S,y[0],y[1]),o[_]=y)};case e.FLOAT_VEC3:return function(y){o[_]!==y&&(e.uniform3f(S,y[0],y[1],y[2]),o[_]=y)};case e.FLOAT_VEC4:return function(y){o[_]!==y&&(e.uniform4f(S,y[0],y[1],y[2],y[3]),o[_]=y)};case e.FLOAT_MAT4:return function(y){o[_]!==y&&(e.uniformMatrix4fv(S,!1,new Float32Array(y)),o[_]=y)};case e.SAMPLER_2D:var C=l++;return function(y){e.activeTexture(e.TEXTURE0+C);var T=c.textures.get(y);T||(T=y.gc(e),c.textures.set(y,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==y&&(e.uniform1i(S,C),o[_]=y)};case e.BOOL:return function(y){o[_]!==y&&(e.uniform1i(S,y),o[_]=y)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[t[b.name]||b.name]=u(i,b)}return f}function qp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Up=M(function(e,r,n){return Jd(r,{g:n,f:{},h:e},r0,n0)}),Yp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Zp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Qp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Kp=v(function(e,r){e.contextAttributes.antialias=!0}),Xp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),e0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function r0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};gt(function(i){return a(__,r,i)},e.h);var n=dn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),xp(function(){return a(av,e,n)})):(n=dn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function n0(e,r){return r.f=e.f,av(r)}var a0=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/t0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function t0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var ec=new Float64Array(3),gu=new Float64Array(3),hu=new Float64Array(3),i0=M(function(e,r,n){return new Float64Array([e,r,n])}),o0=function(e){return e[0]},l0=function(e){return e[1]},c0=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var u0=function(e){return new Float64Array([e.io,e.is,e.dO])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function tv(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(tv);function iv(e,r,n){return n===void 0&&(n=new Float64Array(3)),Pi(tv(e,r,n),n)}v(iv);function ov(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function Pi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/ov(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var $0=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),nt=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(nt);function ll(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(ll);v(function(e,r){var n,t=ec,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=nt(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(nt(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(nt(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(nt(r,t)+e[14])/n,i});var v0=re(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var f0=function(e){return{io:e[0],is:e[1],dO:e[2],fp:e[3]}},m0=function(e){return new Float64Array([e.io,e.is,e.dO,e.fp])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/s0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function s0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var d0=new Float64Array(16),p0=new Float64Array(16),g0=function(e){var r=new Float64Array(16);return r[0]=e.ep,r[1]=e.et,r[2]=e.ex,r[3]=e.eB,r[4]=e.eq,r[5]=e.eu,r[6]=e.ey,r[7]=e.eC,r[8]=e.er,r[9]=e.ev,r[10]=e.ez,r[11]=e.eD,r[12]=e.es,r[13]=e.ew,r[14]=e.eA,r[15]=e.eE,r},h0=function(e){return{ep:e[0],et:e[1],ex:e[2],eB:e[3],eq:e[4],eu:e[5],ey:e[6],eC:e[7],er:e[8],ev:e[9],ez:e[10],eD:e[11],es:e[12],ew:e[13],eA:e[14],eE:e[15]}};function lv(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}Mr(lv);re(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return lv(l,c,o,i,n,t)});function cv(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}Mr(cv);re(function(e,r,n,t){return cv(e,r,n,t,-1,1)});function uv(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],m=e[7],d=e[8],b=e[9],s=e[10],w=e[11],_=e[12],S=e[13],C=e[14],y=e[15],T=r[0],G=r[1],K=r[2],ae=r[3],te=r[4],ie=r[5],ne=r[6],U=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],I=r[14],F=r[15];return n[0]=t*T+c*G+d*K+_*ae,n[1]=i*T+u*G+b*K+S*ae,n[2]=o*T+f*G+s*K+C*ae,n[3]=l*T+m*G+w*K+y*ae,n[4]=t*te+c*ie+d*ne+_*U,n[5]=i*te+u*ie+b*ne+S*U,n[6]=o*te+f*ie+s*ne+C*U,n[7]=l*te+m*ie+w*ne+y*U,n[8]=t*de+c*pe+d*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=l*de+m*pe+w*Me+y*Se,n[12]=t*me+c*Te+d*I+_*F,n[13]=i*me+u*Te+b*I+S*F,n[14]=o*me+f*Te+s*I+C*F,n[15]=l*me+m*Te+w*I+y*F,n}v(uv);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],f=e[8],m=e[9],d=e[10],b=e[12],s=e[13],w=e[14],_=r[0],S=r[1],C=r[2],y=r[4],T=r[5],G=r[6],K=r[8],ae=r[9],te=r[10],ie=r[12],ne=r[13],U=r[14];return n[0]=t*_+l*S+f*C,n[1]=i*_+c*S+m*C,n[2]=o*_+u*S+d*C,n[3]=0,n[4]=t*y+l*T+f*G,n[5]=i*y+c*T+m*G,n[6]=o*y+u*T+d*G,n[7]=0,n[8]=t*K+l*ae+f*te,n[9]=i*K+c*ae+m*te,n[10]=o*K+u*ae+d*te,n[11]=0,n[12]=t*ie+l*ne+f*U+b,n[13]=i*ie+c*ne+m*U+s,n[14]=o*ie+u*ne+d*U+w,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Pi(r,ec);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*u,n[2]=o*t*c-i*u,n[3]=0,n[4]=t*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+t*u,n[7]=0,n[8]=t*o*c+i*u,n[9]=i*o*c-t*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/ov(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),d=o*m,b=l*m,s=c*m,w=o*l*f,_=o*c*f,S=l*c*f,C=o*o*f+u,y=w+s,T=_-b,G=w-s,K=l*l*f+u,ae=S+d,te=_+b,ie=S-d,ne=c*c*f+u,U=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],I=n[7],F=n[8],E=n[9],V=n[10],N=n[11],H=n[12],R=n[13],O=n[14],Oe=n[15];return t[0]=U*C+Se*y+F*T,t[1]=de*C+me*y+E*T,t[2]=pe*C+Te*y+V*T,t[3]=Me*C+I*y+N*T,t[4]=U*G+Se*K+F*ae,t[5]=de*G+me*K+E*ae,t[6]=pe*G+Te*K+V*ae,t[7]=Me*G+I*K+N*ae,t[8]=U*te+Se*ie+F*ne,t[9]=de*te+me*ie+E*ne,t[10]=pe*te+Te*ie+V*ne,t[11]=Me*te+I*ie+N*ne,t[12]=H,t[13]=R,t[14]=O,t[15]=Oe,t});function b0(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(b0);re(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function _0(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(_0);re(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],u=t[3],f=t[4],m=t[5],d=t[6],b=t[7],s=t[8],w=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=s,i[9]=w,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=l*e+m*r+w*n+t[13],i[14]=c*e+d*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],f=r[3],m=r[4],d=r[5],b=r[6],s=r[7],w=r[8],_=r[9],S=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=s,n[8]=w,n[9]=_,n[10]=S,n[11]=C,n[12]=l*t+m*i+w*o+r[12],n[13]=c*t+d*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=iv(e,r,ec),i=Pi(ll(n,t,gu),gu),o=Pi(ll(t,i,hu),hu),l=d0,c=p0;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,uv(l,c)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var z=Ms,Xt=Ls,$v=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var f=l.a;return h(Xt,e,c,f)}else{var u=l.a;return h(Xt,o,c,u)}});return h(Xt,o,h(Xt,e,r,i),t)}),rc=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,u=h(e,t,i,h(rc,e,r,l)),f=o;e=c,r=u,n=f;continue e}}),bu=function(e){return h(rc,M(function(r,n,t){return a(z,P(r,n),t)}),D,e)},vv=1,w0=2,fv=0,or=function(e){return{$:1,a:e}},nc=v(function(e,r){return{$:3,a:e,b:r}}),_u=v(function(e,r){return{$:0,a:e,b:r}}),mv=v(function(e,r){return{$:1,a:e,b:r}}),We=function(e){return{$:0,a:e}},y0=function(e){return{$:2,a:e}},Y=function(e){return{$:0,a:e}},q={$:1},x0=nd,S0=yd,k=V$,ce=v(function(e,r){return a(Ks,e,Ui(r))}),ac=v(function(e,r){return $(a(Qs,e,r))}),sv=function(e){return a(ce,`
    `,a(ac,`
`,e))},He=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),la=function(e){return h(He,v(function(r,n){return n+1}),0,e)},C0=Ts,L0=M(function(e,r,n){e:for(;;)if(be(e,r)<1){var t=e,i=r-1,o=a(z,r,n);e=t,r=i,n=o;continue e}else return n}),Ar=v(function(e,r){return h(L0,e,r,D)}),dv=v(function(e,r){return h(C0,e,a(Ar,0,la(r)-1),r)}),nn=ud,pv=function(e){var r=nn(e);return 97<=r&&r<=122},gv=function(e){var r=nn(e);return r<=90&&65<=r},P0=function(e){return pv(e)||gv(e)},z0=function(e){var r=nn(e);return r<=57&&48<=r},M0=function(e){return pv(e)||gv(e)||z0(e)},gr=function(e){return h(He,z,D,e)},qa=qs,T0=v(function(e,r){return`

(`+(k(e+1)+(") "+sv(k0(r))))}),k0=function(e){return a(D0,e,D)},D0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,l=e.b,t=function(){var _=qa(n);if(_.$===1)return!1;var S=_.a,C=S.a,y=S.b;return P0(C)&&a(x0,M0,y)}(),i=t?"."+n:"['"+(n+"']"),u=l,f=a(z,i,r);e=u,r=f;continue e;case 1:var o=e.a,l=e.b,c="["+(k(o)+"]"),u=l,f=a(z,c,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(ce,"",gr(r)):"Json.Decode.oneOf"}(),w=d+(" failed in the following "+(k(la(m))+" ways:"));return a(ce,`

`,a(z,w,a(dv,T0,m)))}else{var l=m.a,u=l,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ce,"",gr(r)):"!"}();default:var b=e.a,s=e.b,w=function(){return r.b?"Problem with the value at json"+(a(ce,"",gr(r))+`:

    `):`Problem with the given value:

`}();return w+(sv(a(S0,4,s))+(`

`+b))}}),Lr=32,cl=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),ul=ws,ht=Ns,tc=v(function(e,r){return iu(r)/iu(e)}),at=Vs,bt=ht(a(tc,2,Lr)),hv=L(cl,0,bt,ul,ul),bv=xs,_v=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var wv=Hs,$l=ys,nr=v(function(e,r){return be(e,r)>0?e:r}),A0=function(e){return{$:0,a:e}},ic=Ss,B0=v(function(e,r){e:for(;;){var n=a(ic,Lr,e),t=n.a,i=n.b,o=a(z,A0(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return gr(o)}}),yv=function(e){var r=e.a;return r},I0=v(function(e,r){e:for(;;){var n=ht(r/Lr);if(n===1)return a(ic,Lr,e).a;var t=a(B0,e,D),i=n;e=t,r=i;continue e}}),xv=v(function(e,r){if(r.n){var n=r.n*Lr,t=wv(a(tc,Lr,n-1)),i=e?gr(r.C):r.C,o=a(I0,i,r.n);return L(cl,$l(r.r)+n,a(nr,5,t*bt),o,r.r)}else return L(cl,$l(r.r),bt,ul,r.r)}),F0=Ye(function(e,r,n,t,i){e:for(;;){if(r<0)return a(xv,!1,{C:t,n:n/Lr|0,r:i});var o=_v(h(bv,Lr,r,e)),l=e,c=r-Lr,u=n,f=a(z,o,t),m=i;e=l,r=c,n=u,t=f,i=m;continue e}}),E0=v(function(e,r){if(e<=0)return hv;var n=e%Lr,t=h(bv,n,e-n,r),i=e-n-Lr;return A(F0,r,i,e,D,t)}),Hr=function(e){return!e.$},X=hd,Pe=md,Q=gd,Je=sd,Sv=v(function(e,r){return{H:r.H,f9:e,cS:r.cS,gn:r.gn,g0:r.g0,ho:r.ho,dw:r.dw,ik:r.ik}}),zi=bd,V0=_d,vr=vd,oc=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Gr=function(e){return e},j0=Gr,wu=Mr(function(e,r,n,t,i,o){return{d4:o,d9:r,eW:t,eZ:n,e1:e,e2:i}}),N0=ad,Kn=Us,Pa=Xs,At=v(function(e,r){return e<1?r:h(Pa,e,Kn(r),r)}),Yi=id,Zi=function(e){return e===""},Qi=v(function(e,r){return e<1?"":h(Pa,0,e,r)}),Cv=od,yu=Ye(function(e,r,n,t,i){if(Zi(i)||a(N0,"@",i))return q;var o=a(Yi,":",i);if(o.b){if(o.b.b)return q;var l=o.a,c=Cv(a(At,l+1,i));if(c.$===1)return q;var u=c;return Y(ir(wu,e,a(Qi,l,i),u,r,n,t))}else return Y(ir(wu,e,i,q,r,n,t))}),xu=re(function(e,r,n,t){if(Zi(t))return q;var i=a(Yi,"/",t);if(i.b){var o=i.a;return A(yu,e,a(At,o,t),r,n,a(Qi,o,t))}else return A(yu,e,"/",r,n,t)}),Su=M(function(e,r,n){if(Zi(n))return q;var t=a(Yi,"?",n);if(t.b){var i=t.a;return L(xu,e,Y(a(At,i+1,n)),r,a(Qi,i,n))}else return L(xu,e,q,r,n)});v(function(e,r){if(Zi(r))return q;var n=a(Yi,"#",r);if(n.b){var t=n.a;return h(Su,e,Y(a(At,t+1,r)),a(Qi,t,r))}else return h(Su,e,q,r)});var H0=td,Bt=function(e){},It=$a,R0=It(0),Lv=re(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,f=c.b;if(f.b){var m=f.a,d=f.b,b=n>500?h(He,e,r,gr(d)):L(Lv,e,r,n+1,d);return a(e,i,a(e,l,a(e,u,a(e,m,b))))}else return a(e,i,a(e,l,a(e,u,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),er=M(function(e,r,n){return L(Lv,e,r,0,n)}),ee=v(function(e,r){return h(er,v(function(n,t){return a(z,e(n),t)}),D,r)}),Mi=tl,lc=v(function(e,r){return a(Mi,function(n){return It(e(n))},r)}),O0=M(function(e,r,n){return a(Mi,function(t){return a(Mi,function(i){return It(a(e,t,i))},n)},r)}),G0=function(e){return h(er,O0(z),It(D),e)},W0=Id,J0=v(function(e,r){var n=r;return H$(a(Mi,W0(e),n))}),q0=M(function(e,r,n){return a(lc,function(t){return 0},G0(a(ee,J0(e),r)))}),U0=M(function(e,r,n){return It(0)}),Y0=v(function(e,r){var n=r;return a(lc,e,n)});rn.Task=Ad(R0,q0,U0,Y0);var Z0=O$("Task"),cc=v(function(e,r){return Z0(a(lc,e,r))}),Q0=gp,K0=Ws,Ti={$:1},Pv=function(e){return{$:2,a:e}},uc={$:0},Br=v(function(e,r){return{$:0,a:e,b:r}}),Qe=M(function(e,r,n){return r(e(n))}),va=function(e){var r=e.b.s;return r.a},X0=function(e){var r=e.a,n=e.b.Y,t=e.b.s,i=e.b.ao;if(i.b){var o=i.a,l=i.b;return Y(a(Br,r,{s:o,ao:l,Y:a(z,t,n)}))}else return q},Ae=v(function(e,r){if(r.$)return e;var n=r.a;return n}),eg=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dB;return(be(o+r.gn,va(n).H)>0?a(Qe,X0,Ae(a(Br,Ti,i))):Gr)(a(Br,Pv({dB:o+r.gn}),i));default:var l=i.s,c=l.a,u=l.b,f=a(Sv,c.f9,je(r,{H:c.H+r.gn})),m=a(e,f,u);return a(Br,uc,{s:P(f,m),ao:D,Y:a(z,i.s,i.Y)})}}),zv=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),rg=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(z,t,n);e=o,r=l,n=c;continue e}else return n}}),ng=v(function(e,r){return gr(h(rg,e,r,D))}),Mv=M(function(e,r,n){if(r<=0)return D;{var t=P(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,l=o.a;return $([y,l]);case 3:if(t.b.b.b.b){var c=t.b,y=c.a,u=c.b,l=u.a,f=u.b,m=f.a;return $([y,l,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,y=d.a,b=d.b,l=b.a,s=b.b,m=s.a,w=s.b,_=w.a,S=w.b;return e>1e3?a(z,y,a(z,l,a(z,m,a(z,_,a(ng,r-4,S))))):a(z,y,a(z,l,a(z,m,a(z,_,h(Mv,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,y=C.a;return $([y])}}),ag=v(function(e,r){return h(Mv,0,e,r)}),tg=v(function(e,r){var n=r.b.Y,t=r.b.s,i=r.b.ao,o=Z(gr(n),Z($([t]),i)),l=a(ag,e,o),c=a(zv,e,o);if(c.b){var u=c.a,f=c.b;return a(Br,Ti,{s:u,ao:f,Y:gr(l)})}else{var m=gr(l);if(m.b){var d=m.a,b=m.b;return a(Br,Ti,{s:d,ao:D,Y:b})}else return r}}),ig=function(e){var r=e.b;return a(Br,Ti,r)},og=function(e){var r=e.b;return a(Br,Pv({dB:va(e).H}),r)},lg=function(e){var r=e.b;return a(Br,uc,r)},cg=v(function(e,r){switch(e.$){case 1:return ig(r);case 2:return lg(r);case 3:return og(r);default:var n=e.a;return a(tg,n,r)}}),ki=v(function(e,r){var n=r.a,t=r.b;return P(e(n),t)}),ug=v(function(e,r){return je(r,{aO:e(r.aO)})}),$g=function(e){return{$:3,a:e}},vg=function(e){return{$:2,a:e}},Tv=v(function(e,r){return{$:0,a:e,b:r}}),kv=v(function(e,r){return{$:1,a:e,b:r}}),Ne=v(function(e,r){if(r.$)return q;var n=r.a;return Y(e(n))}),he=function(e){return e<0?-e:e},Dv=ld,fg=M(function(e,r,n){return a(Ae,0/0,Dv(a(e,r,n)))}),Ft=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),mg=Zs,Av=function(e){return h(mg,z,D,e)},sg=v(function(e,r){var n=a(Ft,function(t){return t!=="0"&&t!=="."},Av(r));return Z(e&&n?"-":"",r)}),ve=V$,vl=Js,Bv=$d,Iv=function(e){var r=e.a,n=e.b;if(r==="9"){var t=qa(n);if(t.$===1)return"01";var i=t.a;return a(vl,"0",Iv(i))}else{var o=nn(r);return o>=48&&o<57?a(vl,Bv(o+1),n):"0"}},fl=js,dg=Gs,Ki=function(e){return a(vl,e,"")},Fv=M(function(e,r,n){return e<=0?n:h(Fv,e>>1,Z(r,r),e&1?Z(n,r):n)}),_t=v(function(e,r){return h(Fv,e,r,"")}),ml=M(function(e,r,n){return Z(n,a(_t,e-Kn(n),Ki(r)))}),sl=Ys,Ev=function(e){var r=a(ac,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},pg=function(e){var r=a(ac,"e",ve(he(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ae,0,Cv(a(H0,"+",i)?a(At,1,i):i)),l=Ev(n),c=l.a,u=l.b,f=Z(c,u),m=o<0?a(Ae,"0",a(Ne,function(d){var b=d.a,s=d.b;return b+("."+s)},a(Ne,ki(Ki),qa(Z(a(_t,he(o),"0"),f))))):h(ml,o+1,"0",f);return Z(e<0?"-":"",m)}else{var n=r.a;return Z(e<0?"-":"",n)}else return""},gg=M(function(e,r,n){if(fl(n)||dg(n))return ve(n);var t=n<0,i=Ev(pg(he(n))),o=i.a,l=i.b,c=Kn(o)+r,u=Z(a(_t,-c+1,"0"),h(ml,c,"0",Z(o,l))),f=Kn(u),m=a(nr,1,c),d=a(e,t,h(Pa,m,f,u)),b=h(Pa,0,m,u),s=d?sl(a(Ae,"1",a(Ne,Iv,qa(sl(b))))):b,w=Kn(s),_=s==="0"?s:r<=0?Z(s,a(_t,he(r),"0")):be(r,Kn(l))<0?h(Pa,0,w-r,s)+("."+h(Pa,w-r,w,s)):Z(o+".",h(ml,r,"0",l));return a(sg,t,_)}),Vv=gg(v(function(e,r){var n=qa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(nn(i))})),hg=fg(Vv),bg=M(function(e,r,n){var t=a(tc,10,he(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(hg,i,n)}),jv=zs,Et=v(function(e,r){e:for(;;){if(r.$===-2)return q;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(jv,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return Y(t);default:var c=e,u=o;e=c,r=u;continue e}}}),fe=Ye(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),ln={$:-2},Va=Ye(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,d=t.d,b=t.e;return A(fe,0,r,n,A(fe,1,f,m,d,b),A(fe,1,o,l,c,u))}else return A(fe,e,o,l,A(fe,0,r,n,t,c),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var w=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return A(fe,0,f,m,A(fe,1,w,_,S,C),A(fe,1,r,n,b,i))}else return A(fe,e,r,n,t,i)}),dl=M(function(e,r,n){if(n.$===-2)return A(fe,0,e,r,ln,ln);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=a(jv,e,i);switch(u){case 0:return A(Va,t,i,o,h(dl,e,r,l),c);case 1:return A(fe,t,i,r,l,c);default:return A(Va,t,i,o,l,h(dl,e,r,c))}}),Da=M(function(e,r,n){var t=h(dl,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return A(fe,1,i,o,l,c)}else{var u=t;return u}}),_g=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Nv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var s=b.b,w=b.c,_=b.d,S=b.e,C=f.e;return A(fe,0,s,w,A(fe,1,n,t,A(fe,0,o,l,c,u),_),A(fe,1,m,d,S,C))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,u=y.e,T=e.e;T.a;var m=T.b,d=T.c,b=T.d,C=T.e;return A(fe,1,n,t,A(fe,0,o,l,c,u),A(fe,0,m,d,b,C))}else return e},Cu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,f=c.c,m=c.d,d=c.e,b=i.e,s=e.e;s.a;var w=s.b,_=s.c,S=s.d,C=s.e;return A(fe,0,o,l,A(fe,1,u,f,m,d),A(fe,1,n,t,b,A(fe,0,w,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,T=y.d,b=y.e,G=e.e;G.a;var w=G.b,_=G.c,S=G.d,C=G.e;return A(fe,1,n,t,A(fe,0,o,l,T,b),A(fe,0,w,_,S,C))}else return e},wg=qi(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,f=o.d,m=o.e;return A(fe,n,c,u,f,A(fe,0,t,i,m,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var d=l.d;return d.a,Cu(r)}else break e;else return l.a,l.d,Cu(r);else break e;return r}}),fi=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,A(fe,r,n,t,fi(i),c);var u=Nv(e);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return A(Va,f,m,d,fi(b),s)}else return ln}else return A(fe,r,n,t,fi(i),c)}else return ln},vt=v(function(e,r){if(r.$===-2)return ln;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(be(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,A(fe,n,t,i,a(vt,e,o),l);var u=Nv(r);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return A(Va,f,m,d,a(vt,e,b),s)}else return ln}else return A(fe,n,t,i,a(vt,e,o),l);else return a(yg,e,Rl(wg,e,r,n,t,i,o,l))}),yg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(_e(e,t)){var c=_g(l);if(c.$===-1){var u=c.b,f=c.c;return A(Va,n,u,f,o,fi(l))}else return ln}else return A(Va,n,t,i,o,a(vt,e,l))}else return ln}),xg=v(function(e,r){var n=a(vt,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return A(fe,1,t,i,o,l)}else{var c=n;return c}}),ei=M(function(e,r,n){var t=r(a(Et,e,n));if(t.$)return a(xg,e,n);var i=t.a;return h(Da,e,i,n)}),Sg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(ei,r,Ne(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(kv,P(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(ei,r,Ne(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(Tv,P(o,l),h(bg,o,l,n))}));case 3:var r=e.a,n=e.b;return a(ei,r,Ne(function(t){return t.$===3?$g(n):t}));default:var r=e.a,n=e.b;return a(ei,r,Ne(function(t){return t.$===2?vg(n):t}))}},Cg=function(e){return ug(Sg(e))},Lg=v(function(e,r){return a(ee,Cg(e),r)}),Pg=v(function(e,r){return je(r,{f9:a(Lg,e,r.f9)})}),zg=v(function(e,r){var n=r.a,t=r.b;return a(Br,n,je(t,{s:a(ki,Pg(e),t.s)}))}),pl=v(function(e,r){var n=r.a,t=r.b;return P(n,e(t))}),Mg=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Br,t,je(i,{s:a(pl,a(e,o.a,r),o)}))}),Tg=re(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return je(t,{bx:!t.bx});case 2:var i=n.a;return je(t,{S:h(eg,e,i,t.S)});case 3:var o=n.a;return je(t,{bq:o});case 4:var l=n.a;return je(t,{S:a(zg,l,t.S)});case 5:var c=n.a;return je(t,{S:h(Mg,r,c,t.S)});default:var u=n.a;return je(t,{S:a(cg,u,t.S)})}}),kg=v(function(e,r){return a(Br,uc,{s:P(e,r(e)),ao:D,Y:D})}),Dg=Fd,Lu=Dg(D),Ag=function(e){return{$:2,a:e}},Di=pd,ja=dd,Bg=Hd("tick",a(X,function(e){return a(X,function(r){return a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return vr({H:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(Q,"clock",Je))},a(Q,"devicePixelRatio",Je))},a(Q,"dt",Je))},a(Q,"keyboard",a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function(u){return a(X,function(f){return a(X,function(m){return a(X,function(d){return vr({fF:d,gb:m,dZ:f,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(Q,"alt",Pe))},a(Q,"control",Pe))},a(Q,"down",Pe))},a(Q,"downs",Di(ja)))},a(Q,"left",Pe))},a(Q,"pressedKeys",Di(ja)))},a(Q,"right",Pe))},a(Q,"shift",Pe))},a(Q,"up",Pe))))},a(Q,"pointer",a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function(u){return a(X,function(f){return vr({dZ:f,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(Q,"down",Pe))},a(Q,"isDown",Pe))},a(Q,"move",Pe))},a(Q,"rightDown",Pe))},a(Q,"rightUp",Pe))},a(Q,"up",Pe))},a(Q,"x",Je))},a(Q,"y",Je))))},a(Q,"screen",a(X,function(r){return a(X,function(n){return vr({gG:n,im:r})},a(Q,"height",Je))},a(Q,"width",Je))))},a(Q,"wheel",a(X,function(e){return a(X,function(r){return vr({gf:r,gg:e})},a(Q,"deltaX",Je))},a(Q,"deltaY",Je))))),Ig=function(e){return e.dH,Bg(Ag)},Fg=function(e){return{$:5,a:e}},Eg={$:0},Ai=v(function(e,r){return e}),Vg=function(e){var r=e.b.s;return r.b},jg=function(e){return{$:1,a:e}},Ng=jg,Hv=function(e){return{$:8,a:e}},xe=Hv,wt=function(e){return{$:0,a:e}},Vt=M(function(e,r,n){return e(r(n))}),Hg=a(Vt,wt,Ai),Mn=Hg,Ie=function(e){return{$:1,a:e}},vn=Ie,Rv=v(function(e,r){return{$:9,a:e,b:r}}),ca={$:0},Ov=v(function(e,r){return r.$===3?ca:a(Rv,e,r)}),gl=function(e){return a(Ov,4,e)},p={fu:"a",cI:"atv",fw:"ab",fx:"cx",fy:"cy",fz:"acb",fA:"accx",fB:"accy",fC:"acr",dR:"al",dS:"ar",fD:"at",cJ:"ah",cK:"av",fH:"s",fN:"bh",fO:"b",fS:"w7",fU:"bd",fV:"bdt",b2:"bn",fW:"bs",b5:"cpe",f4:"cp",f6:"cpx",f7:"cpy",ax:"c",b9:"ctr",ca:"cb",cb:"ccx",ay:"ccy",bu:"cl",cc:"cr",ga:"ct",gd:"cptr",ge:"ctxt",gw:"fcs",d3:"focus-within",gx:"fs",gB:"g",cU:"hbh",cV:"hc",d7:"he",cW:"hf",d8:"hfp",gJ:"hv",gM:"ic",gO:"fr",ci:"lbl",gS:"iml",gT:"imlf",gU:"imlp",gV:"implw",gW:"it",g$:"i",eo:"lnk",bf:"nb",eP:"notxt",he:"ol",hf:"or",aV:"oq",hk:"oh",eT:"pg",eU:"p",hl:"ppe",hy:"ui",ag:"r",hB:"sb",hC:"sbx",hD:"sby",hE:"sbt",hJ:"e",hK:"cap",hM:"sev",hS:"sk",Z:"t",hZ:"tc",h_:"w8",h$:"w2",h0:"w9",h1:"tj",cE:"tja",h2:"tl",h3:"w3",h4:"w5",h5:"w4",h6:"tr",h7:"w6",h8:"w1",h9:"tun",ff:"ts",a0:"clr",ig:"u",dI:"wc",fq:"we",dJ:"wf",fr:"wfp",dK:"wrp"},$c=N$,Er=v(function(e,r){return a(Ul,e,$c(r))}),Dr=Er("className"),Cr=function(e){return Ie(Dr(e))},Gv=v(function(e,r){return{$:2,a:e,b:r}}),Rg=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},zr=2,Og={$:0},fa=Og,Gg={$:0},Wg=p.fH+(" "+p.ax),Jg=p.fH+(" "+p.gB),qg=p.fH+(" "+p.eT),Ug=p.fH+(" "+p.eU),Yg=p.fH+(" "+p.ag),Zg=p.fH+(" "+p.hJ),Qg=function(e){switch(e){case 0:return Yg;case 1:return Wg;case 2:return Zg;case 3:return Jg;case 4:return Ug;default:return qg}},Pu=function(e){return{$:1,a:e}},Qn={$:0},hl=function(e){return{$:1,a:e}},zu=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Z(n,e);case 2:var t=r.a;return Z(e,t);default:var n=r.a,t=r.b;return Z(n,Z(e,t))}}),Mu=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Z(a(ee,function(o){return P(e,o)},t),r);case 2:var i=n.a;return Z(r,a(ee,function(o){return P(e,o)},i));default:var t=n.a,i=n.b;return Z(a(ee,function(o){return P(e,o)},t),Z(r,a(ee,function(o){return P(e,o)},i)))}}),ri=4,Kg=function(e){return{$:0,a:e}},Xg=function(e){return{$:1,a:e}},ye=function(e){return e>31?Xg(1<<e-32):Kg(1<<e)},Wv=ye(41),Jv=ye(40),qv=ye(42),Uv=ye(43),Na=Sn("div"),vc=ln,Yv=vc,Kr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Kr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Kr(o))}},Ee=Rs,Ve=function(e){return k(Ee(e*255))},fc=function(e){switch(e.$){case 0:return q;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("mv-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,w=s.a,_=s.b,S=s.c,C=e.d;return Y("tfrm-"+(Ve(l)+("-"+(Ve(c)+("-"+(Ve(u)+("-"+(Ve(m)+("-"+(Ve(d)+("-"+(Ve(b)+("-"+(Ve(w)+("-"+(Ve(_)+("-"+(Ve(S)+("-"+Ve(C))))))))))))))))))))}},yt=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(ce,"-",a(ee,Kr,i.hz))+("-cols-"+(a(ce,"-",a(ee,Kr,i.al))+("-space-x-"+(Kr(i.hN.a)+("-space-y-"+Kr(i.hN.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.ag)+("-"+(k(o.f8)+("-"+(k(o.im)+("-"+k(o.gG)))))));case 11:var l=e.a,c=e.b,u=function(){switch(l){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ce," ",a(ee,function(m){var d=yt(m);if(d==="")return"";var b=d;return b+("-"+u)},c));default:var f=e.a;return a(Ae,"",fc(f))}},eh=v(function(e,r){var n=r;return h(Da,e,0,n)}),rh=v(function(e,r){var n=a(Et,e,r);return!n.$}),nh=v(function(e,r){var n=r;return a(rh,e,n)}),Zv=v(function(e,r){var n=r.a,t=r.b,i=yt(e);return a(nh,i,n)?r:P(a(eh,i,n),a(z,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),ft=v(function(e,r){return{$:0,a:e,b:r}}),x=function(e){return"."+e},ah=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(z,i,n)}),bn=v(function(e,r){return h(er,ah(e),D,r)}),za=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Ee(r*255))+(","+k(Ee(n*255))+(","+k(Ee(t*255))+(","+(ve(i)+")")))))},bl=function(e){return a(ce," ",a(bn,Gr,$([e.ec?Y("inset"):q,Y(ve(e.eQ.a)+"px"),Y(ve(e.eQ.b)+"px"),Y(ve(e.a3)+"px"),Y(ve(e.bj)+"px"),Y(za(e.b7))])))},Qv=function(e){return $([a(ft,x(p.d3)+":focus-within",a(bn,Gr,$([a(Ne,function(r){return a(ue,"border-color",za(r))},e.fT),a(Ne,function(r){return a(ue,"background-color",za(r))},e.fL),a(Ne,function(r){return a(ue,"box-shadow",bl({a3:r.a3,b7:r.b7,ec:!1,eQ:a(pl,at,a(ki,at,r.eQ)),bj:r.bj}))},e.hF),Y(a(ue,"outline","none"))]))),a(ft,x(p.fH)+":focus .focusable, "+(x(p.fH)+".focusable:focus, "+(".ui-slide-bar:focus + "+(x(p.fH)+" .focusable-thumb"))),a(bn,Gr,$([a(Ne,function(r){return a(ue,"border-color",za(r))},e.fT),a(Ne,function(r){return a(ue,"background-color",za(r))},e.fL),a(Ne,function(r){return a(ue,"box-shadow",bl({a3:r.a3,b7:r.b7,ec:!1,eQ:a(pl,at,a(ki,at,r.eQ)),bj:r.bj}))},e.hF),Y(a(ue,"outline","none"))])))])},Qr=function(e){return Sn(J$(e))},Kv=v(function(e,r){return a(Ul,Qd(e),q$(r))}),Io=v(function(e,r){return{$:2,a:e,b:r}}),mc=function(e){return{$:6,a:e}},J=v(function(e,r){return{$:1,a:e,b:r}}),yr=v(function(e,r){return{$:0,a:e,b:r}}),B=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),th=v(function(e,r){return{$:3,a:e,b:r}}),Xv=$([0,1,2,3,4,5]),ih=v(function(e,r){return r.b?h(er,z,r,e):e}),hr=function(e){return h(er,ih,D,e)},Ua=v(function(e,r){return hr(a(ee,e,r))}),oh=function(e){switch(e){case 0:return x(p.ga);case 1:return x(p.ca);case 2:return x(p.cc);case 3:return x(p.bu);case 4:return x(p.cb);default:return x(p.ay)}},Bi=function(e){switch(e){case 0:return x(p.fD);case 1:return x(p.fw);case 2:return x(p.dS);case 3:return x(p.dR);case 4:return x(p.fx);default:return x(p.fy)}},tt=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(B,oh(n),i),a(J,x(p.fH),$([a(B,Bi(n),o)]))])};return mc(a(Ua,r,Xv))},Tu=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(B,x(p.cU),$([a(g,"z-index","0"),a(J,x(p.fN),$([a(g,"z-index","-1")]))])),a(B,x(p.hE),$([a(J,x(p.Z),$([a(B,x(p.cW),$([a(g,"flex-grow","0")])),a(B,x(p.dJ),$([a(g,"align-self","auto !important")]))]))])),a(J,x(p.cV),$([a(g,"height","auto")])),a(J,x(p.cW),$([a(g,"flex-grow","100000")])),a(J,x(p.dJ),$([a(g,"width","100%")])),a(J,x(p.fr),$([a(g,"width","100%")])),a(J,x(p.dI),$([a(g,"align-self","flex-start")])),tt(function(e){switch(e){case 0:return P($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return P($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return P($([a(J,x(p.fH),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),lh=function(e){var r=function(n){return $([a(J,x(p.fH),$([a(B,Bi(n),e(n))]))])};return mc(a(Ua,r,Xv))},ch=function(){return $([0,1,2,3,4,5])}(),uh=$([a(yr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(yr,Z(x(p.fH),Z(x(p.hJ),x(p.gM))),$([a(g,"display","block"),a(B,x(p.cW),$([a(J,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(B,x(p.dJ),$([a(J,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(yr,x(p.fH)+":focus",$([a(g,"outline","none")])),a(yr,x(p.hy),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(B,Z(x(p.fH),x(p.cW)),$([a(g,"height","100%"),a(J,x(p.cW),$([a(g,"height","100%")]))])),a(J,x(p.gO),$([a(B,x(p.bf),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(yr,x(p.bf),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(B,x(p.hJ),Tu),mc(function(e){return a(ee,e,ch)}(function(e){switch(e){case 0:return a(B,x(p.fu),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(J,x(p.cW),$([a(g,"height","auto")])),a(J,x(p.dJ),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(J,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(B,x(p.fO),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(J,"*",$([a(g,"pointer-events","auto")])),a(J,x(p.cW),$([a(g,"height","auto")]))]));case 2:return a(B,x(p.hf),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(J,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(B,x(p.he),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(J,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(B,x(p.gO),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(J,"*",$([a(g,"pointer-events","auto")]))]));default:return a(B,x(p.fN),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(J,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(yr,x(p.fH),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(B,x(p.dK),$([a(g,"flex-wrap","wrap")])),a(B,x(p.eP),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(B,x(p.gd),$([a(g,"cursor","pointer")])),a(B,x(p.ge),$([a(g,"cursor","text")])),a(B,x(p.hl),$([a(g,"pointer-events","none !important")])),a(B,x(p.b5),$([a(g,"pointer-events","auto !important")])),a(B,x(p.a0),$([a(g,"opacity","0")])),a(B,x(p.aV),$([a(g,"opacity","1")])),a(B,x(Z(p.gJ,p.a0))+":hover",$([a(g,"opacity","0")])),a(B,x(Z(p.gJ,p.aV))+":hover",$([a(g,"opacity","1")])),a(B,x(Z(p.gw,p.a0))+":focus",$([a(g,"opacity","0")])),a(B,x(Z(p.gw,p.aV))+":focus",$([a(g,"opacity","1")])),a(B,x(Z(p.cI,p.a0))+":active",$([a(g,"opacity","0")])),a(B,x(Z(p.cI,p.aV))+":active",$([a(g,"opacity","1")])),a(B,x(p.ff),$([a(g,"transition",a(ce,", ",a(ee,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(B,x(p.hB),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(B,x(p.hC),$([a(g,"overflow-x","auto"),a(B,x(p.ag),$([a(g,"flex-shrink","1")]))])),a(B,x(p.hD),$([a(g,"overflow-y","auto"),a(B,x(p.ax),$([a(g,"flex-shrink","1")])),a(B,x(p.hJ),$([a(g,"flex-shrink","1")]))])),a(B,x(p.f4),$([a(g,"overflow","hidden")])),a(B,x(p.f6),$([a(g,"overflow-x","hidden")])),a(B,x(p.f7),$([a(g,"overflow-y","hidden")])),a(B,x(p.dI),$([a(g,"width","auto")])),a(B,x(p.b2),$([a(g,"border-width","0")])),a(B,x(p.fU),$([a(g,"border-style","dashed")])),a(B,x(p.fV),$([a(g,"border-style","dotted")])),a(B,x(p.fW),$([a(g,"border-style","solid")])),a(B,x(p.Z),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(B,x(p.gW),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(B,x(p.hJ),Tu),a(B,x(p.ag),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(J,x(p.fH),$([a(g,"flex-basis","0%"),a(B,x(p.fq),$([a(g,"flex-basis","auto")])),a(B,x(p.eo),$([a(g,"flex-basis","auto")]))])),a(J,x(p.cW),$([a(g,"align-self","stretch !important")])),a(J,x(p.d8),$([a(g,"align-self","stretch !important")])),a(J,x(p.dJ),$([a(g,"flex-grow","100000")])),a(J,x(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(J,"u:first-of-type."+p.fC,$([a(g,"flex-grow","1")])),a(J,"s:first-of-type."+p.fA,$([a(g,"flex-grow","1"),a(J,x(p.fx),$([a(g,"margin-left","auto !important")]))])),a(J,"s:last-of-type."+p.fA,$([a(g,"flex-grow","1"),a(J,x(p.fx),$([a(g,"margin-right","auto !important")]))])),a(J,"s:only-of-type."+p.fA,$([a(g,"flex-grow","1"),a(J,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(J,"s:last-of-type."+(p.fA+" ~ u"),$([a(g,"flex-grow","0")])),a(J,"u:first-of-type."+(p.fC+(" ~ s."+p.fA)),$([a(g,"flex-grow","0")])),tt(function(e){switch(e){case 0:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return P($([a(g,"justify-content","flex-end")]),D);case 3:return P($([a(g,"justify-content","flex-start")]),D);case 4:return P($([a(g,"justify-content","center")]),D);default:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(B,x(p.hM),$([a(g,"justify-content","space-between")])),a(B,x(p.ci),$([a(g,"align-items","baseline")]))])),a(B,x(p.ax),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(J,x(p.fH),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(B,x(p.d7),$([a(g,"flex-basis","auto")]))])),a(J,x(p.cW),$([a(g,"flex-grow","100000")])),a(J,x(p.dJ),$([a(g,"width","100%")])),a(J,x(p.fr),$([a(g,"width","100%")])),a(J,x(p.dI),$([a(g,"align-self","flex-start")])),a(J,"u:first-of-type."+p.fz,$([a(g,"flex-grow","1")])),a(J,"s:first-of-type."+p.fB,$([a(g,"flex-grow","1"),a(J,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(J,"s:last-of-type."+p.fB,$([a(g,"flex-grow","1"),a(J,x(p.fy),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(J,"s:only-of-type."+p.fB,$([a(g,"flex-grow","1"),a(J,x(p.fy),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(J,"s:last-of-type."+(p.fB+" ~ u"),$([a(g,"flex-grow","0")])),a(J,"u:first-of-type."+(p.fz+(" ~ s."+p.fB)),$([a(g,"flex-grow","0")])),tt(function(e){switch(e){case 0:return P($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return P($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return P($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return P($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return P($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return P($([a(g,"justify-content","center")]),D)}}),a(J,x(p.b9),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(B,x(p.hM),$([a(g,"justify-content","space-between")]))])),a(B,x(p.gB),$([a(g,"display","-ms-grid"),a(J,".gp",$([a(J,x(p.fH),$([a(g,"width","100%")]))])),a(th,P("display","grid"),$([P("display","grid")])),lh(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(B,x(p.eT),$([a(g,"display","block"),a(J,x(p.fH+":first-child"),$([a(g,"margin","0 !important")])),a(J,x(p.fH+(Bi(3)+(":first-child + ."+p.fH))),$([a(g,"margin","0 !important")])),a(J,x(p.fH+(Bi(2)+(":first-child + ."+p.fH))),$([a(g,"margin","0 !important")])),tt(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([a(g,"float","right"),a(B,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return P(D,$([a(g,"float","left"),a(B,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return P(D,D);default:return P(D,D)}})])),a(B,x(p.gS),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(B,x(p.gV),$([a(B,x(p.hJ),$([a(g,"flex-basis","auto")]))])),a(B,x(p.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(J,x(p.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(B,x(p.eU),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(B,x(p.cU),$([a(g,"z-index","0"),a(J,x(p.fN),$([a(g,"z-index","-1")]))])),a(Io,x(p.Z),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(Io,x(p.eU),$([a(g,"display","inline"),a(B,"::after",$([a(g,"content","none")])),a(B,"::before",$([a(g,"content","none")]))])),a(Io,x(p.hJ),$([a(g,"display","inline"),a(g,"white-space","normal"),a(B,x(p.fq),$([a(g,"display","inline-block")])),a(B,x(p.gO),$([a(g,"display","flex")])),a(B,x(p.fN),$([a(g,"display","flex")])),a(B,x(p.fu),$([a(g,"display","flex")])),a(B,x(p.fO),$([a(g,"display","flex")])),a(B,x(p.hf),$([a(g,"display","flex")])),a(B,x(p.he),$([a(g,"display","flex")])),a(J,x(p.Z),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(J,x(p.ag),$([a(g,"display","inline")])),a(J,x(p.ax),$([a(g,"display","inline-flex")])),a(J,x(p.gB),$([a(g,"display","inline-grid")])),tt(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([a(g,"float","right")]));case 3:return P(D,$([a(g,"float","left")]));case 4:return P(D,D);default:return P(D,D)}})])),a(B,".hidden",$([a(g,"display","none")])),a(B,x(p.h8),$([a(g,"font-weight","100")])),a(B,x(p.h$),$([a(g,"font-weight","200")])),a(B,x(p.h3),$([a(g,"font-weight","300")])),a(B,x(p.h5),$([a(g,"font-weight","400")])),a(B,x(p.h4),$([a(g,"font-weight","500")])),a(B,x(p.h7),$([a(g,"font-weight","600")])),a(B,x(p.fS),$([a(g,"font-weight","700")])),a(B,x(p.h_),$([a(g,"font-weight","800")])),a(B,x(p.h0),$([a(g,"font-weight","900")])),a(B,x(p.g$),$([a(g,"font-style","italic")])),a(B,x(p.hS),$([a(g,"text-decoration","line-through")])),a(B,x(p.ig),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(B,Z(x(p.ig),x(p.hS)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(B,x(p.h9),$([a(g,"font-style","normal")])),a(B,x(p.h1),$([a(g,"text-align","justify")])),a(B,x(p.cE),$([a(g,"text-align","justify-all")])),a(B,x(p.hZ),$([a(g,"text-align","center")])),a(B,x(p.h6),$([a(g,"text-align","right")])),a(B,x(p.h2),$([a(g,"text-align","left")])),a(B,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),Cn=function(e){return $([a(yr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(yr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},$h=hr($([a(ee,function(e){return a(yr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(Ar,0,6)),a(ee,function(e){return a(yr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(Ar,8,32)),a(ee,function(e){return a(yr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(Ar,0,24)),$([a(yr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(yr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),Cn("zero"),Cn("onum"),Cn("liga"),Cn("dlig"),Cn("ordn"),Cn("tnum"),Cn("afrc"),Cn("frac")])),vh=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fH+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fH+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),fh=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,mh=`
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
`,sh=`
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
`,dh=`
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
`,ph="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(x(p.fH)+(x(p.ag)+(" > "+(x(p.fH)+(" { flex-basis: auto !important; } "+(x(p.fH)+(x(p.ag)+(" > "+(x(p.fH)+(x(p.b9)+(" { flex-basis: auto !important; }}"+(fh+(mh+(dh+(sh+vh))))))))))))))),Aa=function(e){return a(ce,"",e)},xa=v(function(e,r){return{b6:r,G:D,aF:D,ah:e}}),Sa=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return je(o,{aF:a(z,P(l,c),o.aF)});case 3:var u=i.a,f=u.a,m=u.b,d=i.b;return je(o,{G:a(z,{b6:`
}`,G:D,aF:d,ah:"@supports ("+(f+(":"+(m+(") {"+n.ah))))},o.G)});case 5:var b=i.a,s=i.b;return je(o,{G:a(z,a(Sa,a(xa,n.ah+(" + "+b),""),s),o.G)});case 1:var w=i.a,_=i.b;return je(o,{G:a(z,a(Sa,a(xa,n.ah+(" > "+w),""),_),o.G)});case 2:var w=i.a,_=i.b;return je(o,{G:a(z,a(Sa,a(xa,n.ah+(" "+w),""),_),o.G)});case 4:var S=i.a,C=i.b;return je(o,{G:a(z,a(Sa,a(xa,Z(n.ah,S),""),C),o.G)});default:var y=i.a;return je(o,{G:a(z,a(Sa,a(xa,n.ah,""),y),o.G)})}});return h(er,t,n,r)}),gh=function(e){var r=function(i){return Aa(a(ee,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aF;return o.b?i.ah+("{"+(r(i.aF)+(i.b6+"}"))):""},t=function(i){var o=i;return Z(n(o),Aa(a(ee,t,o.G)))};return Aa(a(ee,t,h(er,v(function(i,o){var l=i.a,c=i.b;return a(z,a(Sa,a(xa,l,""),c),o)}),D,e)))},ku=Z(ph,gh(Z(uh,$h))),Bn=il,ef=function(e){var r=e.eN;switch(r){case 0:return h(Qr,"div",D,$([h(Qr,"style",D,$([Bn(ku)]))]));case 1:return Bn("");default:return h(Qr,"elm-ui-static-rules",$([a(Kv,"rules",$c(ku))]),D)}},hh=v(function(e,r){return h(He,Ld(e),xd(),r)}),bh=function(e){return h(He,v(function(r,n){var t=r.a,i=r.b;return h(Cd,t,i,n)}),Sd(),e)},_h=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.ha;return'"'+(r+'"')}},wh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},yh=function(e){if(e.$===5){var r=e.a;return a(Ft,wh,r.fk)}else return!1},na=v(function(e,r){return be(e,r)<0?e:r}),Qa=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Be=re(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(He,Qa(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gJ;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(He,Qa(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(He,Qa(!1),"",t)+`
}`))])}case 0:var l=h(He,Qa(!1),"",t);return $([n+("-fs:focus {"+(l+`
}`)),"."+(p.fH+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(x(p.fH)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(h(He,Qa(!1),"",t)+`
}`))])}}),xh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},Sh=function(e){if(e.$===5){var r=e.a;return Y(a(ce,", ",a(ee,xh,r.fk)))}else return q},Ch=function(e){switch(e.$){case 0:return q;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return Y("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,w=s.a,_=s.b,S=s.c,C=e.d,y="translate3d("+(ve(l)+("px, "+(ve(c)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(d)+(", "+(ve(b)+")"))))),G="rotate3d("+(ve(w)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return Y(y+(" "+(T+(" "+G))))}},sc=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return L(Be,e,n,t,i);case 13:var u=r.a,b=r.b;return L(Be,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,l=a(nr,0,a(na,1,1-o));return L(Be,e,n,"."+u,$([a(ue,"opacity",ve(l))]));case 2:var c=r.a;return L(Be,e,n,".font-size-"+k(c),$([a(ue,"font-size",k(c)+"px")]));case 1:var u=r.a,f=r.b,m=a(ce,", ",a(bn,Sh,f)),d=$([a(ue,"font-family",a(ce,", ",a(ee,_h,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(Ft,yh,f)?"small-caps":"normal")]);return L(Be,e,n,"."+u,d);case 3:var se=r.a,b=r.b,Po=r.c;return L(Be,e,n,"."+se,$([a(ue,b,Po)]));case 4:var se=r.a,b=r.b,s=r.c;return L(Be,e,n,"."+se,$([a(ue,b,za(s))]));case 5:var U=r.a,w=r.b,_=r.c,S=k(_)+"px",C=k(w)+"px",y="."+p.ag,T="."+(p.dK+y),pe="."+p.dS,G="."+p.eU,K="."+p.eT,Se="."+p.dR,ae=ve(_/2)+"px",te=ve(w/2)+"px",ie="."+p.ax,se="."+U,ne="."+p.fH;return hr($([L(Be,e,n,se+(y+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-left",C)])),L(Be,e,n,se+(T+(" > "+ne)),$([a(ue,"margin",ae+(" "+te))])),L(Be,e,n,se+(ie+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),L(Be,e,n,se+(K+(" > "+(ne+(" + "+ne)))),$([a(ue,"margin-top",S)])),L(Be,e,n,se+(K+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Be,e,n,se+(K+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Be,e,n,Z(se,G),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),L(Be,e,n,"textarea"+(ne+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),L(Be,e,n,se+(G+(" > "+Se)),$([a(ue,"margin-right",C)])),L(Be,e,n,se+(G+(" > "+pe)),$([a(ue,"margin-left",C)])),L(Be,e,n,se+(G+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),L(Be,e,n,se+(G+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var U=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+U;return L(Be,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var U=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+U;return L(Be,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Ze,Za,cn){e:for(;;)switch(cn.$){case 0:var hs=cn.a;return k(hs)+"px";case 1:var jr=P(Ze,Za);if(jr.a.$===1){if(jr.b.$===1)return jr.a,jr.b,"max-content";jr.a;var qn=jr.b.a;return"minmax(max-content, "+(k(qn)+"px)")}else if(jr.b.$===1){var Un=jr.a.a;return jr.b,"minmax("+(k(Un)+"px, max-content)")}else{var Un=jr.a.a,qn=jr.b.a;return"minmax("+(k(Un)+("px, "+(k(qn)+"px)")))}case 2:var tu=cn.a,Nr=P(Ze,Za);if(Nr.a.$===1){if(Nr.b.$===1)return Nr.a,Nr.b,k(tu)+"fr";Nr.a;var qn=Nr.b.a;return"minmax(max-content, "+(k(qn)+"px)")}else if(Nr.b.$===1){var Un=Nr.a.a;return Nr.b,"minmax("+(k(Un)+("px, "+(k(tu)+"frfr)")))}else{var Un=Nr.a.a,qn=Nr.b.a;return"minmax("+(k(Un)+("px, "+(k(qn)+"px)")))}case 3:var zo=cn.a,Mo=cn.b,To=Y(zo),ko=Za,Do=Mo;Ze=To,Za=ko,cn=Do;continue e;default:var zo=cn.a,Mo=cn.b,To=Ze,ko=Y(zo),Do=Mo;Ze=To,Za=ko,cn=Do;continue e}}),I=function(Ze){return h(Te,q,q,Ze)};I(me.hN.a);var F=I(me.hN.b),E=function(Ze){return"grid-template-rows: "+(Ze+";")}(a(ce," ",a(ee,I,me.hz))),V=function(Ze){return"-ms-grid-rows: "+(Ze+";")}(a(ce,F,a(ee,I,me.al))),N=function(Ze){return"-ms-grid-columns: "+(Ze+";")}(a(ce,F,a(ee,I,me.al))),H="grid-row-gap:"+(I(me.hN.b)+";"),R="grid-column-gap:"+(I(me.hN.a)+";"),O=function(Ze){return"grid-template-columns: "+(Ze+";")}(a(ce," ",a(ee,I,me.al))),se=".grid-rows-"+(a(ce,"-",a(ee,Kr,me.hz))+("-cols-"+(a(ce,"-",a(ee,Kr,me.al))+("-space-x-"+(Kr(me.hN.a)+("-space-y-"+Kr(me.hN.b))))))),So=se+("{"+(O+(E+(R+(H+"}"))))),Co="@supports (display:grid) {"+(So+"}"),Lo=se+("{"+(N+(V+"}")));return $([Lo,Co]);case 9:var Oe=r.a,Zt=a(ce," ",$(["-ms-grid-row: "+(k(Oe.ag)+";"),"-ms-grid-row-span: "+(k(Oe.gG)+";"),"-ms-grid-column: "+(k(Oe.f8)+";"),"-ms-grid-column-span: "+(k(Oe.im)+";")])),xo=a(ce," ",$(["grid-row: "+(k(Oe.ag)+(" / "+(k(Oe.ag+Oe.gG)+";"))),"grid-column: "+(k(Oe.f8)+(" / "+(k(Oe.f8+Oe.im)+";")))])),se=".grid-pos-"+(k(Oe.ag)+("-"+(k(Oe.f8)+("-"+(k(Oe.im)+("-"+k(Oe.gG))))))),So=se+("{"+(xo+"}")),Co="@supports (display:grid) {"+(So+"}"),Lo=se+("{"+(Zt+"}"));return $([Lo,Co]);case 11:var se=r.a,ds=r.b,ps=function(Ze){return h(sc,e,Ze,Y(se))};return a(Ua,ps,ds);default:var au=r.a,Po=Ch(au),se=fc(au),Qt=P(se,Po);if(!Qt.a.$&&!Qt.b.$){var U=Qt.a.a,gs=Qt.b.a;return L(Be,e,n,"."+U,$([a(ue,"transform",gs)]))}else return D}}),Lh=v(function(e,r){return bh(a(ee,function(n){var t=h(sc,e,n,q);return P(yt(n),a(hh,$c,t))},r))}),Ii=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ce,"",a(ee,n,r))+"}"))}),Du=M(function(e,r,n){var t=n.a,i=n.b;return $([a(Ii,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Ii,"."+(e+("."+(r+("> ."+(p.Z+(", ."+(e+(" ."+(r+(" > ."+p.Z)))))))))),i)])}),Ph=M(function(e,r,n){var t=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return a(ce," ",Z(h(Du,o,p.hK,i),h(Du,o,p.gx,t)))}),zh=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return a(ce," ",$([a(Ii,"."+(n+("."+(p.hK+(", "+("."+(n+(" ."+p.hK))))))),$([P("line-height","1")])),a(Ii,"."+(n+("."+(p.hK+("> ."+(p.Z+(", ."+(n+(" ."+(p.hK+(" > ."+p.Z)))))))))),$([P("vertical-align","0"),P("line-height","1")]))]))}),Au=M(function(e,r,n){return{gG:r/e,bj:e,fl:n}}),rf=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(z,n,t):t}),D,r)}),Mh=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(He,nr,r,n))}else return q},Bu=function(e){if(e.b){var r=e.a,n=e.b;return Y(h(He,na,r,n))}else return q},Iu=function(e){var r=$([e.f_,e.fM,e.gi,e.g5]),n=a(Ae,e.gi,Bu(r)),t=a(Ae,e.fM,Bu(a(rf,function(f){return!_e(f,n)},r))),i=a(Ae,e.f_,Mh(r)),o=1/(i-t),l=1-i,c=1/(i-n),u=1-i;return{f_:h(Au,o,i-t,l),d5:h(Au,c,i-n,u)}},Fu=function(e){return P($([P("display","block")]),$([P("display","inline-block"),P("line-height",ve(e.gG)),P("vertical-align",ve(e.fl)+"em"),P("font-size",ve(e.bj)+"em")]))},Th=function(e){return h(He,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fv;if(i.$===1)return n;var o=i.a;return Y(P(Fu(function(l){return l.d5}(Iu(o))),Fu(function(l){return l.f_}(Iu(o)))))}else return n;else return n}),q,e)},kh=function(e){var r=function(o){if(o.$===4){var l=o.b;return Y("@import url('"+(l+"');"))}else return q},n=function(o){o.a;var l=o.b,c=a(ce,`
`,a(bn,r,l));return c},t=a(ee,yv,e),i=function(o){var l=o.a,c=o.b,u=Th(c);if(u.$===1)return a(ce,"",a(ee,zh(l),t));var f=u.a;return a(ce,"",a(ee,a(Ph,l,f),t))};return Z(a(ce,`
`,a(ee,n,e)),a(ce,`
`,a(ee,i,e)))},Dh=function(e){if(e.$===1){var r=e.a,n=e.b;return Y(P(r,n))}else return q},Eu=v(function(e,r){var n=v(function(l,c){return{cA:Z(c.cA,h(sc,e,l,q)),bU:function(){var u=Dh(l);if(u.$===1)return c.bU;var f=u.a;return a(z,f,c.bU)}()}}),t=h(He,n,{cA:D,bU:D},r),i=t.bU,o=t.cA;return Z(kh(i),Aa(o))}),nf=v(function(e,r){var n=e.eN;switch(n){case 0:return h(Qr,"div",D,$([h(Qr,"style",D,$([Bn(a(Eu,e,r))]))]));case 1:return h(Qr,"div",D,$([h(Qr,"style",D,$([Bn(a(Eu,e,r))]))]));default:return h(Qr,"elm-ui-rules",$([a(Kv,"rules",a(Lh,e,r))]),D)}}),Vu=re(function(e,r,n,t){var i=a(nf,r,h(He,Zv,P(Yv,Qv(r.gw)),n).b);return e?a(z,P("static-stylesheet",ef(r)),a(z,P("dynamic-stylesheet",i),t)):a(z,P("dynamic-stylesheet",i),t)}),ju=re(function(e,r,n,t){var i=a(nf,r,h(He,Zv,P(Yv,Qv(r.gw)),n).b);return e?a(z,ef(r),a(z,i,t)):a(z,i,t)}),_l=ye(45),xt=ye(37),af=function(e){return Wd(J$(e))},Ah=Sn("p"),$r=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return _e(o&t,o)}else{var i=e.a;return _e(i&n,i)}}),Nu=Sn("s"),Hu=Sn("u"),wl=ye(44),St=ye(39),ni=Mr(function(e,r,n,t,i,o){var l=v(function(u,f){if(t.$===1){var m=t.a;return h(af,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return L(Vu,!1,b,s,m);default:var b=i.a,s=i.b;return L(Vu,!0,b,s,m)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return Na;case"p":return Ah;default:return Qr(u)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,s=i.b;return L(ju,!1,b,s,d);default:var b=i.a,s=i.b;return L(ju,!0,b,s,d)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var u=r.a;return a(l,u,n);default:var u=r.a,f=r.b;return h(Qr,u,n,$([a(l,f,$([Dr(p.fH+(" "+p.hJ))]))]))}}();switch(o){case 0:return a($r,St,e)&&!a($r,wl,e)?c:a($r,Jv,e)?a(Hu,$([Dr(a(ce," ",$([p.fH,p.hJ,p.b9,p.ay,p.fC])))]),$([c])):a($r,qv,e)?a(Nu,$([Dr(a(ce," ",$([p.fH,p.hJ,p.b9,p.ay,p.fA])))]),$([c])):c;case 1:return a($r,xt,e)&&!a($r,_l,e)?c:a($r,Uv,e)?a(Nu,$([Dr(a(ce," ",$([p.fH,p.hJ,p.b9,p.fB])))]),$([c])):a($r,Wv,e)?a(Hu,$([Dr(a(ce," ",$([p.fH,p.hJ,p.b9,p.fz])))]),$([c])):c;default:return c}}),Pn=function(e){return!e.b},dc=Bn,Bh=p.fH+(" "+(p.Z+(" "+(p.dI+(" "+p.cV))))),Ct=function(e){return a(Na,$([Dr(Bh)]),$([dc(e)]))},Ih=p.fH+(" "+(p.Z+(" "+(p.dJ+(" "+p.cW))))),Ru=function(e){return a(Na,$([Dr(Ih)]),$([dc(e)]))},Fh=M(function(e,r,n){var t=v(function(w,_){var S=w.a,C=w.b,y=_.a,T=_.b;switch(C.$){case 0:var G=C.a;return _e(e,ri),P(a(z,P(S,G(e)),y),T);case 1:var K=C.a;return _e(e,ri),P(a(z,P(S,a(K.gK,Qn,e)),y),Pn(T)?K.hT:Z(K.hT,T));case 2:var ae=C.a;return P(a(z,P(S,_e(e,zr)?Ru(ae):Ct(ae)),y),T);default:return P(y,T)}}),i=v(function(w,_){var S=_.a,C=_.b;switch(w.$){case 0:var y=w.a;return _e(e,ri),P(a(z,y(e),S),C);case 1:var T=w.a;return _e(e,ri),P(a(z,a(T.gK,Qn,e),S),Pn(C)?T.hT:Z(T.hT,C));case 2:var G=w.a;return P(a(z,_e(e,zr)?Ru(G):Ct(G),S),C);default:return P(S,C)}});if(r.$===1){var o=r.a,l=h(er,t,P(D,D),o),c=l.a,u=l.b,f=Pn(u)?n.hT:Z(n.hT,u);if(f.b){var m=f;return hl({gK:L(ni,n.aS,n.aU,n.aK,Pu(h(Mu,"nearby-element-pls",c,n.aN))),hT:m})}else return wt(A(ni,n.aS,n.aU,n.aK,Pu(h(Mu,"nearby-element-pls",c,n.aN)),Qn))}else{var d=r.a,b=h(er,i,P(D,D),d),s=b.a,u=b.b,f=Pn(u)?n.hT:Z(n.hT,u);if(f.b){var m=f;return hl({gK:L(ni,n.aS,n.aU,n.aK,rr(a(zu,s,n.aN))),hT:m})}else return wt(A(ni,n.aS,n.aU,n.aK,rr(a(zu,s,n.aN)),Qn))}}),sr=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Eh=function(e){return{$:10,a:e}},Fi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(Fi,n,o|t)}else{var i=e.a;return a(Fi,i|n,t)}}),Ou=function(e){return{$:1,a:e}},ai=v(function(e,r){return{$:3,a:e,b:r}}),Gu=function(e){return{$:2,a:e}},Vh=v(function(e,r){return a(Na,$([Dr(function(){switch(e){case 0:return a(ce," ",$([p.bf,p.hJ,p.fu]));case 1:return a(ce," ",$([p.bf,p.hJ,p.fO]));case 2:return a(ce," ",$([p.bf,p.hJ,p.hf]));case 3:return a(ce," ",$([p.bf,p.hJ,p.he]));case 4:return a(ce," ",$([p.bf,p.hJ,p.gO]));default:return a(ce," ",$([p.bf,p.hJ,p.fN]))}}())]),$([function(){switch(r.$){case 3:return Bn("");case 2:var n=r.a;return Ct(n);case 0:var t=r.a;return t(zr);default:var i=r.a;return a(i.gK,Qn,zr)}}()]))}),jh=M(function(e,r,n){var t=a(Vh,e,r);switch(n.$){case 0:return e===5?Ou($([t])):Gu($([t]));case 1:var i=n.a;return e===5?Ou(a(z,t,i)):a(ai,i,$([t]));case 2:var o=n.a;return e===5?a(ai,$([t]),o):Gu(a(z,t,o));default:var i=n.a,o=n.b;return e===5?a(ai,a(z,t,i),o):a(ai,i,a(z,t,o))}}),Wu=v(function(e,r){return{$:2,a:e,b:r}}),zn=function(e){return{$:1,a:e}},Yn=v(function(e,r){switch(r.$){case 0:return zn(e);case 1:var n=r.a;return a(Wu,n,e);default:var t=r.a,i=r.b;return a(Wu,t,i)}}),Nh=function(e){switch(e){case 0:return p.cJ+(" "+p.dR);case 2:return p.cJ+(" "+p.dS);default:return p.cJ+(" "+p.fx)}},Hh=function(e){switch(e){case 0:return p.cK+(" "+p.fD);case 2:return p.cK+(" "+p.fw);default:return p.cK+(" "+p.fy)}},it=v(function(e,r){return a(Jr,Zd(e),q$(r))}),Ur=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),Ln=function(e){return{$:1,a:e}},Rh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return Ln(j(u,0,0));case 1:var f=r.a;return Ln(j(0,f,0));case 2:var m=r.a;return Ln(j(0,0,m));case 3:var n=r.a;return Ln(n);case 4:var n=r.a,s=r.b;return L(Ur,j(0,0,0),j(1,1,1),n,s);default:var n=r.a;return L(Ur,j(0,0,0),n,j(0,0,1),0)}case 1:var c=e.a,u=c.a,f=c.b,m=c.c;switch(r.$){case 0:var t=r.a;return Ln(j(t,f,m));case 1:var i=r.a;return Ln(j(u,i,m));case 2:var o=r.a;return Ln(j(u,f,o));case 3:var n=r.a;return Ln(n);case 4:var n=r.a,s=r.b;return L(Ur,c,j(1,1,1),n,s);default:var l=r.a;return L(Ur,c,l,j(0,0,1),0)}default:var c=e.a,u=c.a,f=c.b,m=c.c,d=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return L(Ur,j(t,f,m),d,b,s);case 1:var i=r.a;return L(Ur,j(u,i,m),d,b,s);case 2:var o=r.a;return L(Ur,j(u,f,o),d,b,s);case 3:var w=r.a;return L(Ur,w,d,b,s);case 4:var _=r.a,S=r.b;return L(Ur,c,d,_,S);default:var C=r.a;return L(Ur,c,C,b,s)}}}),ba=ye(7),tf=ye(36),Ju=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(Fi,n|i,t|o)}),fn=a(Fi,0,0),yl=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return j(fn,p.d7+(" "+t),$([h(sr,t,"height",n+"px")]));case 1:return j(a(ge,tf,fn),p.cV,D);case 2:var i=e.a;return i===1?j(a(ge,xt,fn),p.cW,D):j(a(ge,xt,fn),p.d8+(" height-fill-"+k(i)),$([h(sr,p.fH+("."+(p.ax+(" > "+x("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h(sr,f,"min-height",k(o)+"px !important"),l=yl(u),b=l.a,s=l.b,w=l.c;return j(a(ge,_l,b),f+(" "+s),a(z,m,w));default:var c=e.a,u=e.b,f="max-height-"+k(c),m=h(sr,f,"max-height",k(c)+"px"),d=yl(u),b=d.a,s=d.b,w=d.c;return j(a(ge,_l,b),f+(" "+s),a(z,m,w))}},of=ye(38),xl=function(e){switch(e.$){case 0:var r=e.a;return j(fn,p.fq+(" width-px-"+k(r)),$([h(sr,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return j(a(ge,of,fn),p.dI,D);case 2:var n=e.a;return n===1?j(a(ge,St,fn),p.dJ,D):j(a(ge,St,fn),p.fr+(" width-fill-"+k(n)),$([h(sr,p.fH+("."+(p.ag+(" > "+x("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,l=e.b,c="min-width-"+k(t),u=h(sr,c,"min-width",k(t)+"px"),i=xl(l),m=i.a,d=i.b,b=i.c;return j(a(ge,wl,m),c+(" "+d),a(z,u,b));default:var o=e.a,l=e.b,c="max-width-"+k(o),u=h(sr,c,"max-width",k(o)+"px"),f=xl(l),m=f.a,d=f.b,b=f.c;return j(a(ge,wl,m),c+(" "+d),a(z,u,b))}},Xi=ye(27),Oh=v(function(e,r){if(_e(e,Xi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return _e(i,l)&&_e(i,o)&&_e(i,c)&&i>=0&&i<=24;default:return!1}}),_a=ye(6),qu=ye(30),Uu=ye(29),Gh=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var m=c.a,d=c.b;switch(m.$){case 0:var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 3:var _=m.a,b=m.b;if(a($r,_,n)){var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else{var I=b+(" "+e),F=r,E=a(ge,_,n),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}case 1:var s=m.a,I=e,F=r,E=n,V=t,N=i,H=a(z,s,o),R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 4:var _=m.a,w=m.b;if(a($r,_,n)){var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else if(a(Oh,_,w)){var I=yt(w)+(" "+e),F=r,E=a(ge,_,n),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else{var I=yt(w)+(" "+e),F=r,E=a(ge,_,n),V=t,N=a(z,w,i),H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}case 10:var _=m.a,S=m.b,I=e,F=r,E=a(ge,_,n),V=a(Rh,t,S),N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 7:var C=m.a;if(a($r,_a,n)){var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else switch(C.$){case 0:var y=C.a,I=p.fq+(" width-px-"+k(y))+(" "+e),F=r,E=a(ge,_a,n),V=t,N=a(z,h(sr,"width-px-"+k(y),"width",k(y)+"px"),i),H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 1:var I=e+(" "+p.dI),F=r,E=a(ge,of,a(ge,_a,n)),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 2:var T=C.a;if(T===1){var I=e+(" "+p.dJ),F=r,E=a(ge,St,a(ge,_a,n)),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else{var I=e+(" "+(p.fr+(" width-fill-"+k(T)))),F=r,E=a(ge,St,a(ge,_a,n)),V=t,N=a(z,h(sr,p.fH+("."+(p.ag+(" > "+x("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}default:var G=xl(C),K=G.a,ae=G.b,Te=G.c,I=e+(" "+ae),F=r,E=a(Ju,K,a(ge,_a,n)),V=t,N=Z(Te,i),H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}case 8:var te=m.a;if(a($r,ba,n)){var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else switch(te.$){case 0:var y=te.a,ie=k(y)+"px",ne="height-px-"+ie,I=p.d7+(" "+(ne+(" "+e))),F=r,E=a(ge,ba,n),V=t,N=a(z,h(sr,ne,"height ",ie),i),H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 1:var I=p.cV+(" "+e),F=r,E=a(ge,tf,a(ge,ba,n)),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 2:var T=te.a;if(T===1){var I=p.cW+(" "+e),F=r,E=a(ge,xt,a(ge,ba,n)),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else{var I=e+(" "+(p.d8+(" height-fill-"+k(T)))),F=r,E=a(ge,xt,a(ge,ba,n)),V=t,N=a(z,h(sr,p.fH+("."+(p.ax+(" > "+x("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}default:var U=yl(te),K=U.a,ae=U.b,Te=U.c,I=e+(" "+ae),F=r,E=a(Ju,K,a(ge,ba,n)),V=t,N=Z(Te,i),H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}case 2:var de=m.a;switch(de.$){case 0:var I=e,F=a(Yn,"main",r),E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 1:var I=e,F=a(Yn,"nav",r),E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 2:var I=e,F=a(Yn,"footer",r),E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 3:var I=e,F=a(Yn,"aside",r),E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 4:var pe=de.a;if(pe<=1){var I=e,F=a(Yn,"h1",r),E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else if(pe<7){var I=e,F=a(Yn,"h"+k(pe),r),E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else{var I=e,F=a(Yn,"h6",r),E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}case 9:var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 8:var I=e,F=r,E=n,V=t,N=i,H=a(z,a(it,"role","button"),o),R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 5:var Me=de.a,I=e,F=r,E=n,V=t,N=i,H=a(z,a(it,"aria-label",Me),o),R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 6:var I=e,F=r,E=n,V=t,N=i,H=a(z,a(it,"aria-live","polite"),o),R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;default:var I=e,F=r,E=n,V=t,N=i,H=a(z,a(it,"aria-live","assertive"),o),R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var xo=me.a;return Z(i,xo.hT)}}(),I=e,F=r,E=n,V=t,N=Te,H=o,R=h(jh,Se,me,l),O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e;case 6:var Oe=m.a;if(a($r,qu,n)){var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else{var I=Nh(Oe)+(" "+e),F=r,E=function(se){switch(Oe){case 1:return a(ge,qv,se);case 2:return a(ge,Jv,se);default:return se}}(a(ge,qu,n)),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}default:var Zt=m.a;if(a($r,Uu,n)){var I=e,F=r,E=n,V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}else{var I=Hh(Zt)+(" "+e),F=r,E=function(se){switch(Zt){case 1:return a(ge,Uv,se);case 2:return a(ge,Wv,se);default:return se}}(a(ge,Uu,n)),V=t,N=i,H=o,R=l,O=d;e=I,r=F,n=E,t=V,i=N,o=H,l=R,c=O;continue e}}}else{var u=fc(t);if(u.$===1)return{aK:a(z,Dr(e),o),aN:l,aS:n,aU:r,hT:i};var f=u.a;return{aK:a(z,Dr(e+(" "+f)),o),aN:l,aS:n,aU:r,hT:a(z,Eh(t),i)}}}),Wh={$:0},Jh=Wh,fr=re(function(e,r,n,t){return h(Fh,e,t,kt(Gh,Qg(e),r,fn,Jh,D,D,Gg,gr(n)))}),mn=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),qh={fL:q,fT:q,hF:Y({a3:0,b7:L(mn,155/255,203/255,1,1),eQ:P(0,0),bj:3})},Uh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gJ;return l.$===1?je(i,{gJ:Y(o)}):i;case 1:var c=t.a,u=i.gw;return u.$===1?je(i,{gw:Y(c)}):i;default:var f=t.a,m=i.eN;return m.$===1?je(i,{eN:Y(f)}):i}}),n=function(t){return{gw:function(){var i=t.gw;if(i.$===1)return qh;var o=i.a;return o}(),gJ:function(){var i=t.gJ;if(i.$===1)return 1;var o=i.a;return o}(),eN:function(){var i=t.eN;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gw:q,gJ:q,eN:q},e))},Yh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(zr);case 1:var n=r.a.hT,t=r.a.gK;return a(t,e(n),zr);case 2:var i=r.a;return Ct(i);default:return Ct("")}}),Zh=M(function(e,r,n){var t=Uh(e),i=function(){var o=t.eN;return o===1?Gv(t):Rg(t)}();return a(Yh,i,L(fr,zr,fa,r,rr($([n]))))}),Lt=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),lf=v(function(e,r){return{$:1,a:e,b:r}}),cf=function(e){return{$:2,a:e}},Qh={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),Fo=function(e){return{$:3,a:e}},uf=ye(8),$f=ye(14),vf=ye(5),ff=ye(4),Ha=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ve(r)+("-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))))},mi=rd,Eo=ed,mf=v(function(e,r){return Z(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ce,"-",Eo(mi(n)));case 4:var n=e.a;return e.b,a(ce,"-",Eo(mi(n)));default:var n=e.a.ha;return a(ce,"-",Eo(mi(n)))}}())}),Kh=function(){var e=$([Fo("Open Sans"),Fo("Helvetica"),Fo("Verdana"),Qh]);return $([a(Ce,uf,h(Lt,"bg-"+Ha(L(mn,1,1,1,0)),"background-color",L(mn,1,1,1,0))),a(Ce,$f,h(Lt,"fc-"+Ha(L(mn,0,0,0,1)),"color",L(mn,0,0,0,1))),a(Ce,ff,cf(20)),a(Ce,vf,a(lf,h(He,mf,"font-",e),e))])}(),Xh=M(function(e,r,n){var t=e.hj;return h(Zh,t,a(z,Cr(a(ce," ",$([p.hy,p.fH,p.hJ]))),Z(Kh,r)),n)}),sf={$:3},df=function(e){return{$:2,a:e}},Sl=qd,pf=v(function(e,r){switch(r.$){case 1:var n=r.a;return hl({gK:v(function(o,l){return a(Sl,e,a(n.gK,o,l))}),hT:n.hT});case 0:var t=r.a;return wt(a(Vt,Sl(e),t));case 2:var i=r.a;return df(i);default:return sf}}),pc=pf,e3=Sl,r3=function(e){return{$:0,a:e}},De=r3,n3=Yd,Sr=n3,gf={$:1},eo=function(e){return{$:5,a:e}},hf=eo(0),qr=M(function(e,r,n){return L(mn,e/255,r/255,n/255,1)}),bf=h(qr,0,0,0),a3=Jr("d"),t3=Jr("fill"),i3=Jr("height"),_f=G$("http://www.w3.org/2000/svg"),o3=_f("path"),l3=_f("svg"),c3=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},u3=function(e){var r=c3(e);return"rgba("+(k(Ee(r.hs*255))+(","+k(Ee(r.gz*255))+(","+k(Ee(r.fP*255))+(","+ve(r.fE)+")"))))},$3=Jr("viewBox"),v3=Jr("width"),Ma=M(function(e,r,n){return a(l3,$([$3("0 0 100 100"),v3(k(e)),i3(k(e))]),$([a(o3,$([a3(n),t3(u3(r))]),D)]))}),f3={$:1},br=f3,wf=function(e){return{$:7,a:e}},le=wf,Le=v(function(e,r){return L(fr,zr,fa,a(z,le(br),a(z,xe(br),e)),rr($([r])))}),yf=function(e){return{$:2,a:e}},we=yf(1),Xn={gl:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gy:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gF:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hm:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hn:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hr:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hL:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",$8:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ii:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",ft:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Ba={cZ:260,bF:54},pn=function(e){return a(Ce,uf,h(Lt,"bg-"+Ha(e),"background-color",e))},m3=ye(28),In=function(e){return a(Ce,m3,h(Lt,"bc-"+Ha(e),"border-color",e))},si=1,Ir=v(function(e,r){return L(fr,si,fa,a(z,Cr(p.ga+(" "+p.bu)),a(z,xe(br),a(z,le(br),e))),rr(r))}),s3=h(qr,83,83,83),xf=re(function(e,r,n,t){return L(mn,e/255,r/255,n/255,t)}),ro=L(xf,56,56,56,.25),Ue=sf,Pt=Ye(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),zt=ye(2),ea=function(e){var r=e;return a(Ce,zt,A(Pt,"p-"+k(e),r,r,r,r))},Sf=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Cf=ye(3),Lf=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Fn=function(e){return a(Ce,Cf,h(Sf,a(Lf,e,e),e,e))},d3=L(xf,0,0,0,0),p3=function(e){return{$:4,a:e}},Cl=0,Rn=v(function(e,r){return L(fr,Cl,fa,a(z,Cr(p.bu+(" "+p.ay)),a(z,le(br),a(z,xe(br),e))),rr(r))}),g3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gK(a(Gv,{gw:{fL:q,fT:q,hF:q},gJ:1,eN:0},n.hT));case 2:var t=e.a;return Ai(Bn(t));default:return Ai(Bn(""))}},h3=v(function(e,r){return g3(e(r))}),b3=Ud,_3=v(function(e,r){return wt(h(b3,h3,e,r))}),En=function(e){return a(Ce,$f,h(Lt,"fc-"+Ha(e),"color",e))},gc=h(qr,195,195,195),On=v(function(e,r){return{$:3,a:e,b:r}}),Pf=ye(13),w3=a(On,Pf,p.h5),y3=ye(20),zf=a(On,y3,p.hD),ma=function(e){return a(Ce,ff,cf(e))},hc=a(On,Pf,p.fS),Ll=v(function(e,r){if(r.$===-2)return ln;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return A(fe,n,t,a(e,t,i),a(Ll,e,o),a(Ll,e,l))}),Mf=v(function(e,r){if(_e(e,r)){var n=e;return a(Ce,zt,A(Pt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,zt,A(Pt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Vn=function(e){return df(e)},x3=function(e){return h(rc,M(function(r,n,t){return a(z,n,t)}),D,e)},S3=v(function(e,r){return{$:3,a:e,b:r}}),C3=v(function(e,r){return{$:2,a:e,b:r}}),L3=v(function(e,r){return{$:0,a:e,b:r}}),P3=v(function(e,r){return{$:1,a:e,b:r}}),Vr=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),z3=L(Vr,0/255,0/255,0/255,1),no=function(e){return{$:6,a:e}},M3=no(0),ao=function(e){return{$:2,a:e}},T3={$:6},Tf=ao(T3),kf=M(function(e,r,n){if(r.$===1)return r.a,L(fr,si,zn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,l=L(fr,zr,fa,i,rr($([o])));switch(t){case 2:return L(fr,si,zn("label"),a(z,Cr(p.ci),e),rr($([l,n])));case 3:return L(fr,si,zn("label"),a(z,Cr(p.ci),e),rr($([n,l])));case 0:return L(fr,Cl,zn("label"),a(z,Cr(p.ci),e),rr($([n,l])));default:return L(fr,Cl,zn("label"),a(z,Cr(p.ci),e),rr($([l,n])))}}),Pl=it,_n=eo(1),Df="Enter",k3=function(e){return{$:5,a:e}},Af=function(e){if(e.$===1){var r=e.a;return ao(k3(r))}else return ca},Bf=function(e){return e.$===1},D3=function(e){return{$:0,a:e}},bc=W$,A3=v(function(e,r){return a(bc,e,D3(r))}),If=function(e){return a(A3,"click",vr(e))},B3=fd,I3=function(e){return{$:2,a:e}},F3=v(function(e,r){return a(bc,e,I3(r))}),Ff=function(e){var r=function(t){var i=e(t);if(i.$===1)return B3("No key matched");var o=i.a;return vr(o)},n=a(X,r,a(Q,"key",ja));return Ie(a(F3,"keydown",a(zi,function(t){return P(t,!0)},n)))},E3=ye(21),ra=a(On,E3,p.gd),Ef=" ",Vf=function(e){return a(Jr,"tabIndex",k(e))},V3=a(Vt,Ie,Vf),j3=v(function(e,r){var n=r.eh,t=r.gL,i=r.f3,o=r.bJ,l=Z($([Bf(n)?ca:Fn(6),Ie(If(o(!i))),Tf,Ff(function(c){return _e(c,Df)||_e(c,Ef)?Y(o(!i)):q}),V3(0),ra,M3,le(we)]),e);return h(kf,a(z,Ie(a(Pl,"role","checkbox")),a(z,Ie(a(Pl,"aria-checked",i?"true":"false")),a(z,Af(n),l))),n,L(fr,zr,fa,$([_n,xe(we),le(br)]),rr($([t(i)]))))}),N3=M(function(e,r,n){return Z(a(_t,e-Kn(n),Ki(r)),n)}),Ei=Ds,jf=function(e){var r=function(n){return n<10?k(n):Ki(Bv(87+n))};return e<16?r(e):Z(jf(e/16|0),r(a(Ei,16,e)))},H3=a(Qe,jf,a(N3,2,"0")),_c=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},R3=function(e){var r=_c(e),n=r.hs,t=r.gz,i=r.fP;return a(ce,"",a(z,"#",a(ee,a(Qe,Ee,H3),$([n*255,t*255,i*255]))))},wc=ye(12),Nf=a(On,wc,p.hZ),zl=no(1),tr=As,kn=function(e){return e*tr/180},O3=function(e){return{$:1,a:e}},yc=v(function(e,r){return{$:10,a:e,b:r}}),G3=ye(26),W3=function(e){return a(yc,G3,O3(-e))},Ta=M(function(e,r,n){return L(mn,e,r,n,1)}),J3=mn,q3=v(function(e,r){return{$:4,a:e,b:r}}),U3=ye(24),Y3=function(e){return a(yc,U3,a(q3,j(0,0,1),e))},Z3=ye(17),aa=function(e){return a(Ce,Z3,h(sr,"br-"+k(e),"border-radius",k(e)+"px"))},Q3=function(e){return Aa($([e.ec?"box-inset":"box-",Ve(e.eQ.a)+"px",Ve(e.eQ.b)+"px",Ve(e.a3)+"px",Ve(e.bj)+"px",Ha(e.b7)]))},K3=ye(19),X3=function(e){var r={a3:e.a3,b7:e.b7,ec:!1,eQ:e.eQ,bj:e.bj};return a(Ce,K3,h(sr,Q3(r),"box-shadow",bl(r)))},Yu=v(function(e,r){return{$:12,a:e,b:r}}),Zu=ye(0),eb=function(e){return e?a(Ce,Zu,a(Yu,"transparent",1)):a(Ce,Zu,a(Yu,"visible",0))},Vo=h(Ta,1,1,1),xc=Ye(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),to=function(e){return a(Ce,Xi,A(xc,"b-"+k(e),e,e,e,e))},rb=v(function(e,r){return a(Ce,Xi,A(xc,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),jt=function(e){var r=e.b3,n=e.cF,t=e.g1,i=e.hv;return _e(n,r)&&_e(t,i)?_e(n,i)?to(n):a(rb,t,n):a(Ce,Xi,A(xc,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},nb=function(e){return a(Le,$([Cr("focusable"),le(De(14)),xe(De(14)),En(Vo),_n,ma(9),Nf,aa(3),In(e?h(Ta,59/255,153/255,252/255):h(Ta,211/255,211/255,211/255)),X3({a3:1,b7:e?L(J3,238/255,238/255,238/255,0):h(Ta,238/255,238/255,238/255),eQ:P(0,0),bj:1}),pn(e?h(Ta,59/255,153/255,252/255):Vo),to(e?0:1),gl(a(Le,$([In(Vo),xe(De(6)),le(De(9)),Y3(kn(-45)),zl,_n,W3(1),eb(!e),jt({b3:2,g1:2,hv:0,cF:0})]),Ue))]),Ue)},ab=Er("htmlFor"),Ml=v(function(e,r){if(r.$)return q;var n=r.a;return e(n)}),Vi=v(function(e,r){if(r.$){var t=r.a;return or(t)}else{var n=r.a;return e(n)}}),Hf=re(function(e,r,n,t){return{gQ:r,g6:e,hd:n,hU:t}}),tb=yp,ib=cd,ob=v(function(e,r){if(r.$)return or(e);var n=r.a;return We(n)}),lb=wp,cb=function(e){return a(lb,{f$:!1,g9:!1},e)},io=function(e){if(e.b){var r=e.a;return e.b,Y(r)}else return q},ub=v(function(e,r){if(r.$){var t=r.a;return or(t)}else{var n=r.a;return We(e(n))}}),$b=function(e){return{$:2,a:e}},vb=function(e){return{$:0,a:e}},fb=function(e){return{$:1,a:e}},jo=v(function(e,r){return nn(r)-nn(e)}),No=M(function(e,r,n){var t=nn(n);return be(nn(e),t)<1&&be(t,nn(r))<1}),mb=v(function(e,r){var n=function(i){return be(i,e)<0?We(i):or(fb(r))},t=h(No,"0","9",r)?We(a(jo,"0",r)):h(No,"a","z",r)?We(10+a(jo,"a",r)):h(No,"A","Z",r)?We(10+a(jo,"A",r)):or(vb(r));return a(Vi,n,t)}),Rf=v(function(e,r){var n=qa(r);if(n.$===1)return We(0);var t=n.a,i=t.a,o=t.b;return a(Vi,function(l){return a(Vi,function(c){return We(l+c*e)},a(Rf,e,o))},a(mb,e,i))}),sb=v(function(e,r){return 2<=e&&e<=36?a(Rf,e,sl(r)):or($b(e))}),db=sb(16),pb=M(function(e,r,n){return L(Vr,e,r,n,1)}),gb=re(function(e,r,n,t){return L(Vr,e,r,n,t)}),Nt=ks,hb=v(function(e,r){var n=a(Nt,10,e);return Ee(r*n)/n}),bb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=Av(n);if(t.b&&!t.b.b){var i=t.a;return ib($([i,i]))}else return n};return a(Qe,mi,a(Qe,function(n){return a(Ne,function(t){return h(tb,1,t,n)},cb(e))},a(Qe,Ml(io),a(Qe,Ne(function(n){return n.hU}),a(Qe,Ne(bn(Gr)),a(Qe,ob("Parsing hex regex failed"),Vi(function(n){var t=a(ee,a(Qe,r,a(Qe,db,ub(at))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,u=c.a.a,f=c.b,m=f.a.a;return We(L(gb,i/255,l/255,u/255,a(hb,2,m/255)))}else break e;else{var i=t.a.a,d=t.b,l=d.a.a,b=d.b,u=b.a.a;return We(h(pb,i/255,l/255,u/255))}else break e;return or("Parsing ints from hex failed")})))))))}(),_b=Er("id"),wb=Sn("input"),yb=Sn("label"),Of=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),xb=Of(0),Sb=Er("name"),Cb=function(e){return P(e,!0)},Lb=function(e){return{$:1,a:e}},Pb=v(function(e,r){return a(bc,e,Lb(r))}),zb=v(function(e,r){return h(er,Q,r,e)}),Mb=a(zb,$(["target","value"]),ja),Gf=function(e){return a(Pb,"input",a(zi,Cb,a(zi,e,Mb)))},Tb=a(On,wc,p.h2),Wf=a(On,wc,p.h6),Sc=function(e){return a(Ov,5,e)},Cc=function(e){return a(Ce,vf,a(lf,h(He,mf,"ff-",e),e))},kb=h(qr,195,195,195),Jf=h(qr,69,69,69),Db=Of(2),Ab={$:2},Lc=Ab,Bb=ye(32),Ib=ye(31),Qu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return Y(i)}else return q;else{var t=n.a;return Y(t)}}),q,e)},Fb=v(function(e,r){return a(Ae,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return Y(P(i,l))}else return q;else{var i=t.a;return Y(i)}}),q,e))}),Ku=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return Y(i)}else return q;else{var t=n.a;return Y(t)}}),q,e)},Eb=ye(33),Vb=Er("max"),jb=Er("min"),Nb=v(function(e,r){return a(Ce,Cf,h(Sf,a(Lf,e,r),e,r))}),Hb=function(e){return a(Er,"step",e)},qf=Er("type"),Uf=Er("value"),Ra=yf,Rb=Xd,Yf=v(function(e,r){switch(r.$){case 0:return ca;case 2:var n=r.a;return ao(n);case 6:var t=r.a;return no(t);case 5:var i=r.a;return eo(i);case 7:var t=r.a;return wf(t);case 8:var t=r.a;return Hv(t);case 3:var t=r.a,i=r.b;return a(On,t,i);case 4:var o=r.a,l=r.b;return a(Ce,o,l);case 9:var c=r.a,u=r.b;return a(Rv,c,a(pf,e,u));case 1:var f=r.a;return Ie(a(Rb,e,f));default:var m=r.a,d=r.b;return a(yc,m,d)}}),Ob=M(function(e,r,n){return a(Rn,$([le(we),xe(a(Ae,we,n)),_n]),$([a(Le,$([le(Ra(Ee(e*1e4)))]),Ue),a(Le,a(z,_n,a(ee,Yf(Bt),r)),Ue),a(Le,$([le(Ra(Ee(he(1-e)*1e4)))]),Ue)]))}),Gb=M(function(e,r,n){return a(Ir,$([xe(we),le(a(Ae,we,n)),zl]),$([a(Le,$([xe(Ra(Ee(he(1-e)*1e4)))]),Ue),a(Le,a(z,zl,a(ee,Yf(Bt),r)),Ue),a(Le,$([xe(Ra(Ee(e*1e4)))]),Ue)]))}),Zf=v(function(e,r){var n=Ku(e),t=Qu(e),i=function(){var C=P(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var y=C.a.a.a,T=C.b.a.a;return be(T,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cG-r.cr)/(r.cq-r.cr),l=r.ia,c=l,u=Qu(c),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Ku(c),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(d+("-"+f)),s=$([a(ue,"width",d),a(ue,"height",f)]),w=a(Fb,e,P(5,5)),_=w.a,S=w.b;return h(kf,$([Bf(r.eh)?ca:a(Nb,_,S),Tf,le(function(){if(n.$===1)return we;if(n.a.$){var C=n.a;return C}else return br}()),xe(function(){if(t.$===1)return br;if(t.a.$){var C=t.a;return C}else return br}())]),r.eh,a(Rn,$([le(a(Ae,we,n)),xe(a(Ae,De(20),t))]),$([L(fr,zr,zn("input"),$([Af(r.eh),a(Ce,Bb,a(ft,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,Eb,a(ft,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,Ib,a(ft,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ie(Dr(b+" ui-slide-bar focusable-parent")),Ie(Gf(function(C){var y=Dv(C);if(y.$===1)return r.bJ(0);var T=y.a;return r.bJ(T)})),Ie(qf("range")),Ie(Hb(function(){var C=r.cD;if(C.$===1)return"any";var y=C.a;return ve(y)}())),Ie(jb(ve(r.cr))),Ie(Vb(ve(r.cq))),Ie(Uf(ve(r.cG))),i?Ie(a(Pl,"orient","vertical")):ca,le(i?a(Ae,De(20),t):a(Ae,we,n)),xe(i?a(Ae,we,n):a(Ae,De(20),t))]),rr(D)),a(Le,a(z,le(a(Ae,we,n)),a(z,xe(a(Ae,De(20),t)),Z(e,$([Sc(i?h(Gb,o,a(z,Cr("focusable-thumb"),c),n):h(Ob,o,a(z,Cr("focusable-thumb"),c),t))])))),Ue)])))}),Wb=h(Ta,.5,.5,.5),Qf=Gr,Xu=function(e){var r=e.cY,n=e.cG,t=e.cr,i=e.cq,o=e.cD,l=e.bJ;return a(Le,$([le(we)]),a(Zf,$([Fn(2),Sc(a(Le,$([le(we),xe(De(16)),_n,pn(Jf),aa(4)]),Ue))]),{eh:a(Db,D,a(Rn,$([le(we)]),$([a(Le,$([Tb]),Vn(r)),a(Le,$([le(we),Wf,Cc($([Lc]))]),Vn(ve(n)))]))),cq:i,cr:t,bJ:l,cD:Y(o),ia:Qf($([le(De(12)),xe(De(12)),aa(4),to(0),In(Wb),pn(kb)])),cG:n}))},Jb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),qb=v(function(e,r){switch(r.$){case 3:var l=r.a;return a(j3,D,{f3:l,gL:nb,eh:a(xb,D,Vn(e)),bJ:S3(e)});case 0:var n=r.a,i=n.a,o=n.b,l=r.b;return Xu({cY:e,cq:o,cr:i,bJ:L3(e),cD:.001*(o-i),cG:l});case 1:var t=r.a,i=t.a,o=t.b,l=r.b;return Xu({cY:e,cq:o,cr:i,bJ:a(Qe,Ee,P3(e)),cD:1,cG:l});default:var l=r.a;return a(Le,$([le(we)]),Mn(a(Na,D,$([a(Na,$([a(Sr,"margin-bottom","6px")]),$([a(yb,$([ab(e)]),$([dc(e)]))])),a(wb,$([qf("color"),a(Sr,"width","100%"),a(Sr,"height","26px"),a(Sr,"padding","0px"),_b(e),Sb(e),Gf(function(c){return a(C3,e,a(Jb,z3,bb(c)))}),Uf(R3(l))]),D)]))))}}),Tl=h(qr,255,255,255),Ub=function(e){return a(Ir,$([le(we),Fn(8),a(Mf,0,14),jt({b3:1,g1:0,hv:0,cF:0}),In(ro)]),$([a(Le,$([ma(16),hc,En(Tl)]),Vn(e.ha)),a(Ir,$([le(we),Fn(6)]),x3(a(Ll,qb,e.aO)))]))},Yb=function(e){return a(Ir,$([le(we),xe(we),En(gc),ma(12),w3,zf]),a(ee,Ub,e))},Zb=_3(Yb),Qb=function(e){return a(Ir,$([le(we),xe(we)]),$([a(Rn,$([Fn(14),le(we)]),D),a(pc,p3,Zb(va(e).f9))]))},Kb=function(e){return{$:6,a:e}},Xb=re(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),e1=function(e){var r=e.cF,n=e.hv,t=e.b3,i=e.g1;if(_e(r,n)&&_e(r,t)&&_e(r,i)){var o=r;return a(Ce,zt,A(Pt,"p-"+k(r),o,o,o,o))}else return a(Ce,zt,A(Pt,L(Xb,r,n,t,i),r,n,t,i))},r1=function(e){return{$:0,a:e}},n1=function(e){return{$:1,a:e}},a1=n1,t1=function(e){var r=e.b.Y;return la(r)},ji=h(qr,255,60,0),i1=function(e){var r=e.b.Y;e.b.s;var n=e.b.ao;return la(r)+1+la(n)},o1=function(e){var r=P(t1(e),i1(e)-1),n=r.a,t=r.b;return a(Le,$([le(we),_n]),a(Zf,$([Sc(a(Rn,$([le(we),xe(De(4)),_n,pn(Jf),aa(2)]),$([a(Le,$([le(Ra(n)),xe(we),pn(ji),aa(2)]),Ue),a(Le,$([le(Ra(t-n))]),Ue)])))]),{eh:a1(""),cq:t,cr:0,bJ:a(Qe,Ee,r1),cD:Y(1),ia:Qf($([le(De(12)),xe(De(12)),aa(6),pn(ji)])),cG:n}))},l1=no(2),di=h(qr,220,220,220),c1=function(e){var r=e.a,n=function(){return r.$?$([En(di)]):$([En(ji)])}();return a(Le,Z(n,$([ma(14),l1,Wf,Cc($([Lc]))])),Vn(a(Vv,3,va(e).H)))},u1=function(e){e.a;var r=e.b.Y;return a(Ne,function(n){return Ee(60/(va(e).H-n))},a(Ne,a(Qe,yv,function(n){return n.H}),io(a(zv,59,r))))},$1=function(e){var r=u1(e);if(r.$===1)return Ue;var n=r.a;return a(Le,$([ma(14),En(gc),Cc($([Lc]))]),Vn(k(n)+" FPS"))},e$={$:1},v1={$:3},f1={$:2},m1={$:8},s1=N$,d1=v(function(e,r){return a(Ul,e,s1(r))}),p1=d1("disabled"),g1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},h1=function(e){return a(Ft,g1,e)?ca:Cr("focusable")},Ni=a(Vt,Ie,If),Kf=v(function(e,r){var n=r.eR,t=r.eh;return L(fr,zr,fa,a(z,le(br),a(z,xe(br),a(z,Cr(p.cb+(" "+(p.ay+(" "+(p.hE+(" "+p.eP)))))),a(z,ra,a(z,h1(e),a(z,ao(m1),a(z,Ie(Vf(0)),function(){if(n.$===1)return a(z,Ie(p1(!0)),e);var i=n.a;return a(z,Ni(i),a(z,Ff(function(o){return _e(o,Df)||_e(o,Ef)?Y(i):q}),e))}()))))))),rr($([t])))}),r$=v(function(e,r){return a(Kf,D,{eh:a(Le,$([le(De(36)),ea(3),En(r),Nf,ma(12),hc,In(r),to(1),aa(4)]),Vn("REC")),eR:Y(e)})}),n$=M(function(e,r,n){return a(Kf,D,{eh:Mn(h(Ma,20,n,e)),eR:Y(r)})}),b1=function(e){var r=e.a;e.b.Y,e.b.s;var n=e.b.ao;return a(Rn,D,$([a(Le,$([le(De(40))]),function(){switch(r.$){case 0:return a(r$,e$,ji);case 1:return a(r$,f1,di);default:return Ue}}()),a(Le,$([le(De(28))]),function(){switch(r.$){case 0:return Ue;case 1:return Pn(n)?Ue:h(n$,Xn.hn,v1,di);default:return h(n$,Xn.hm,e$,di)}}())]))},_1=function(e){return a(Ir,$([le(we)]),$([o1(e),a(Rn,$([le(we),Fn(14),a(Mf,0,6),_n]),$([b1(e),$1(e),c1(e)]))]))},w1=function(e){return a(Ir,$([le(we),Fn(14),e1({b3:20,g1:0,hv:0,cF:0}),jt({b3:1,g1:0,hv:0,cF:0}),In(ro)]),$([a(Le,$([ma(16),hc,En(gc)]),Vn("Time Travel")),a(pc,Kb,_1(e))]))},y1=v(function(e,r){return a(Ir,$([va(r).dw.im>600?pn(s3):pn(d3),jt({b3:0,g1:0,hv:1,cF:0}),In(ro),le(De(Ba.cZ)),xe(we)]),$([function(){return e?Ue:a(Ir,$([le(we),xe(we),ea(14),Fn(14)]),$([w1(r),Qb(r)]))}()]))}),x1=function(e){return{$:3,a:e}},a$=eo(2),S1=h(qr,232,78,50),C1=h(qr,48,48,48),L1=function(e){return a(Er,"href",Kd(e))},P1=Jr("rel"),z1=Er("target"),t$=v(function(e,r){var n=r.fj,t=r.eh;return L(fr,zr,zn("a"),a(z,Ie(L1(n)),a(z,Ie(P1("noopener noreferrer")),a(z,Ie(z1("_blank")),a(z,le(br),a(z,xe(br),a(z,Cr(p.cb+(" "+(p.ay+(" "+p.eo)))),e)))))),rr($([t])))}),ot=Er("title"),M1=h(qr,31,161,242),T1=function(e){var r=M(function(o,l,c){var u=_e(l,e)?Tl:C1;return a(Le,$([vn(ot(o)),Ni(x1(l)),ra,ea(7)]),Mn(h(Ma,40,u,c)))}),n=a(Ir,$([hf]),$([h(r,"Configurations",0,Xn.hL)])),t=a(Ir,D,$([a(t$,$([vn(ot("Twitter")),a$,ra,ea(7)]),{eh:Mn(h(Ma,40,M1,Xn.$8)),fj:"https://twitter.com/AzizErkalSelman"}),a(t$,$([vn(ot("Source Code")),a$,ra,ea(7)]),{eh:Mn(h(Ma,40,S1,Xn.gy)),fj:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([le(De(Ba.bF)),ea(4),Ni(gf),jt({b3:1,g1:0,hv:0,cF:0}),In(ro),ra,vn(ot("Activate Distraction Free Mode"))]),Mn(h(Ma,46,Tl,Xn.ft)));return a(Ir,$([le(De(Ba.bF)),xe(we),zf,pn(bf)]),$([i,n,t]))},k1=function(e){var r=a(Le,$([le(De(Ba.bF)),hf,ea(4),Ni(gf),ra,vn(ot("Deactivate Distraction Free Mode (A)"))]),Mn(h(Ma,46,bf,Xn.ft)));return e.bx?r:a(Rn,$([le(De(Ba.bF+Ba.cZ)),xe(we)]),$([T1(e.bq),a(y1,e.bq,e.S)]))},D1=M(function(e,r,n){var t=Vg(n.S),i=va(n.S);return h(Xh,{hj:$([Ng({fL:q,fT:q,hF:q})])},$([le(De(ht(i.dw.im))),xe(De(ht(i.dw.gG))),vn(a(Sr,"-webkit-font-smoothing","antialiased")),vn(a(Sr,"pointer-events","none")),vn(a(Sr,"touch-action","none")),vn(a(Sr,"user-select","none")),gl(a(pc,Fg,a(r,i,t))),gl(k1(n))]),Mn(a(e3,Ai(Eg),a(e,i,t))))}),A1=Mr(function(e,r,n,t,i,o){var l=v(function(u,f){return P(L(Tg,r,o,u,f),Lu)}),c=function(u){var f=a(Sv,n,u.gX);return P({bq:0,bx:!0,S:a(kg,f,t),dH:0},Lu)};return Q0({gR:c,hV:Ig,ih:l,ij:a(D1,e,i)})}),B1=re(function(e,r,n,t){return ir(A1,e,r,n,t,v(function(i,o){return Ue}),M(function(i,o,l){return l}))}),I1=function(e){return{}},F1=M(function(e,r,n){return{aO:n,gZ:r,ha:e}}),E1=function(e){return h(He,v(function(r,n){var t=r.a,i=r.b;return h(Da,t,i,n)}),vc,e)},V1=M(function(e,r,n){return h(F1,e,r,E1(n))}),i$=V1,Ka=M(function(e,r,n){var t=r.a,i=r.b;return P(e,a(Tv,P(t,i),n))}),j1=M(function(e,r,n){var t=r.a,i=r.b;return P(e,a(kv,P(t,i),n))}),N1=$([h(i$,"Parameters",!0,$([h(j1,"number of tree blocks",P(1,20),16),h(Ka,"turning speed of the tree",P(.1,4),1)])),h(i$,"Lighting",!0,$([h(Ka,"azimuth for third light",P(-tr,tr),1),h(Ka,"elevation for third light",P(-tr,tr),-2),h(Ka,"azimuth for fourth light",P(-tr,tr),1),h(Ka,"elevation for fourth light",P(-tr,tr),-2)]))]),H1=v(function(e,r){return r}),wn=function(e){return e},lt=function(e){return wn(tr*(e/180))},sn=Os,R1=v(function(e,r){var n=e,t=r,i=t.dO-n.dO,o=t.is-n.is,l=t.io-n.io,c=a(nr,he(l),a(nr,he(o),he(i)));if(c){var u=i/c,f=o/c,m=l/c,d=sn(m*m+f*f+u*u);return Y({io:m/d,is:f/d,dO:u/d})}else return q}),pi=function(e){return e},Pc=v(function(e,r){var n=e,t=r;return{io:t.is*n.dO-t.dO*n.is,is:t.dO*n.io-t.io*n.dO,dO:t.io*n.is-t.is*n.io}}),gi=function(e){var r=e,n=a(nr,he(r.io),a(nr,he(r.is),he(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=sn(o*o+i*i+t*t);return Y({io:o/l,is:i/l,dO:t/l})}else return q},Hi=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),O1=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dO*n.dO}),Xf=v(function(e,r){var n=e,t=r;return be(t,n)>0}),G1=v(function(e,r){var n=e,t=r;return be(t,n)<0}),W1=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),J1=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dO*n.dO;return{io:n.io*i,is:n.is*i,dO:n.dO*i}}),q1=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Xr=0,em={io:0,is:0,dO:0},U1=M(function(e,r,n){return a(Ml,function(t){var i=a(W1,a(J1,t,r),r);return a(Ml,function(o){var l=a(Pc,r,e),c=a(O1,n,l),u=a(Xf,Xr,c)?l:a(G1,Xr,c)?q1(l):em;return a(Ne,function(f){return j(t,o,f)},gi(u))},gi(i))},gi(e))}),Y1=function(e){var r=e,n=he(r.dO),t=he(r.is),i=he(r.io);if(be(i,t)<1)if(be(i,n)<1){var o=sn(r.dO*r.dO+r.is*r.is);return{io:0,is:-r.dO/o,dO:r.is/o}}else{var o=sn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dO:0}}else if(be(t,n)<1){var o=sn(r.dO*r.dO+r.io*r.io);return{io:r.dO/o,is:0,dO:-r.io/o}}else{var o=sn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dO:0}}},zc=function(e){var r=Y1(e),n=r,t=n,i=e,o=i,l={io:o.is*t.dO-o.dO*t.is,is:o.dO*t.io-o.io*t.dO,dO:o.io*t.is-o.is*t.io};return P(r,l)},ka=function(e){var r=e;return r},Wr=function(e){return e},Z1=v(function(e,r){var n=zc(e),t=n.a,i=n.b;return Wr({df:r,dM:t,dN:i,dP:e})}),Q1=function(e){var r=a(Hi,e.bb,e.d2),n=ka(e.fi),t=a(Pc,r,n),i=h(U1,r,n,t);if(i.$){var f=gi(r);if(f.$){var d=zc(e.fi),b=d.a,s=d.b;return Wr({df:e.d2,dM:s,dN:e.fi,dP:b})}else{var m=f.a;return a(Z1,m,e.d2)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return Wr({df:e.d2,dM:u,dN:c,dP:l})}},mr={io:0,is:0,dO:0},K1=function(e){return{$:0,a:e}},Re=function(e){var r=e;return he(r)},hi=function(e){var r=e;return .5*r},X1=Fs,e_=function(e){var r=e;return X1(r)},r_=function(e){var r=hi(Re(e.fm)),n=e_(r);return{dq:K1(n),dG:e.dG}},gn=function(e){return e},oo=gn({io:0,is:1,dO:0}),n_=function(e){var r=e.bb,n=e.d2,t=e.fi;return r_({fm:lt(40),dG:Q1({d2:pi(n),bb:pi(r),fi:a(Ae,oo,a(R1,mr,pi(t)))})})},a_=n_({d2:{io:5,is:5,dO:12},bb:{io:0,is:1,dO:0},fi:{io:0,is:1,dO:0}}),Mc=function(e){return e},rm=M(function(e,r,n){return be(n,e)<0?e:be(n,r)>0?r:n}),t_=function(e){var r=e;return r},i_=function(e){var r=h(rm,1667,25e3,t_(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Mc({io:n,is:t})},o_=function(e){return e},l_=function(e){return{$:0,a:e}},c_=l_,u_={$:3},$_=u_,v_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),f_=v_,m_=function(e){return{$:1,a:e}},s_=m_,d_=function(e){return a(Jr,"height",k(e))},p_=af,g_=function(e){return{$:2,a:e}},h_=g_,b_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Ee(c*1e3)/1e3},l=function(c){return Ee(c*1e4)/100};return Aa($(["rgba(",ve(l(r)),"%,",ve(l(n)),"%,",ve(l(t)),"%,",ve(o(i)),")"]))},__=v(function(e,r){switch(r.$){case 0:return a(Yp,e,r);case 1:return a(Zp,e,r);case 2:return a(Qp,e,r);case 3:return a(Kp,e,r);case 4:return a(Xp,e,r);default:return a(e0,e,r)}}),w_=v(function(e,r){switch(r.$){case 0:return a(Cp,e,r);case 1:return a(Lp,e,r);case 2:return a(Pp,e,r);case 3:return a(zp,e,r);case 4:return a(Mp,e,r);case 5:return a(Tp,e,r);case 6:return a(kp,e,r);case 7:return a(Dp,e,r);default:return Ap(e)}}),y_=M(function(e,r,n){return h(Up,e,r,n)}),o$=function(e){var r=e;return r},Ya=v0,Ho=L(Ya,1,1,1,1),Yr=M(function(e,r,n){return a(ee,function(t){return a(t,r,n)},e)}),x_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),S_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(x_,n*t/i,n,n*(1-t-i)/i)}),Ht=i0,C_=function(e){var r=e.a,n=e.b,t=e.c;return h(Ht,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},lo=v(function(e,r){return C_(a(S_,e,r))}),nm=v(function(e,r){return{ef:_e(e.ef,r.ef),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,L:r.L+(e.L*r.t+e.M*r.w+e.N*r.z)*r.cB,M:r.M+(e.L*r.u+e.M*r.x+e.N*r.A)*r.cB,N:r.N+(e.L*r.v+e.M*r.y+e.N*r.B)*r.cB,cB:e.cB*r.cB}}),en=g0,L_=function(e){return en({ep:e.t,eq:e.w,er:e.z,es:e.L,et:e.u,eu:e.x,ev:e.A,ew:e.M,ex:e.v,ey:e.y,ez:e.B,eA:e.N,eB:0,eC:0,eD:0,eE:1})},Ro=Ye(function(e,r,n,t,i){var o=t.ef?1:-1,l=L(Ya,t.cB,t.cB,t.cB,o);return ir(i,e,l,L_(t),t.ef,r,n)}),am=Mr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,f=r,m=n,d=a(nm,l,t),b=c,s=o;e=u,r=f,n=m,t=d,i=b,o=s;continue e;case 1:var w=i.b,_=a(z,A(Ro,e,r,n,t,w),o.Q);return{Q:_,aa:o.aa,hG:o.hG};case 3:var S=i.b,C=a(z,A(Ro,e,r,n,t,S),o.aa);return{Q:o.Q,aa:C,hG:o.hG};case 2:var y=i.a,T=a(z,A(Ro,e,r,n,t,y),o.hG);return{Q:o.Q,aa:o.aa,hG:T};default:var G=i.a;return h(He,L(am,e,r,n,t),o,G)}}),P_=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),tm=P_,Tc=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),z_=function(e){var r=e.aj,n=e.ad,t=e.ac;return L(Tc,518,r,n,t)},M_=v(function(e,r){return{$:6,a:e,b:r}}),T_=M_,im=$([z_({ac:1,ad:0,aj:!1}),L(tm,!1,!1,!1,!1),a(T_,0,1)]),Oa=519,kc=8,om=15,Ia=7681,k_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Fe=Sp,D_=v(function(e,r){return{$:0,a:e,b:r}}),A_=D_({d_:1,eb:0,eN:5}),xr=a0,B_=A_($([{e_:a(xr,-1,-1)},{e_:a(xr,1,-1)},{e_:a(xr,-1,1)},{e_:a(xr,1,1)}])),I_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e_"},uniforms:{}},F_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f,k:m}}}}}}}}}}}},Dc=M(function(e,r,n){var t=e.dr,i=e.c6,o=e.dL,l=v(function(f,m){var d=f;return m(d)}),c=v(function(f,m){var d=f;return m(d)}),u=function(f){return a(Qe,l(f.bP),a(Qe,c(f.bA),a(Qe,c(f.bY),c(f.bZ))))};return a(u,n,a(u,r,h(F_,t,i,o)))}),Ac=function(e){return h(Dc,{c6:e.c6,dr:e.dr,dL:e.dL},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},Bc=function(e){return A(Fe,$([Ac(e),L(tm,!1,!1,!1,!1)]),I_,k_,B_,{})},E_=Bc({bA:Ia,c6:0,dr:kc,bP:Oa,dL:om,bY:Ia,bZ:Ia}),V_=516,l$=5386,cr=7680,j_=function(e){return a(Nt,2,e+4)},lm=function(e){return Bc({bA:cr,c6:om,dr:kc,bP:V_,dL:j_(e),bY:l$,bZ:l$})},N_=M(function(e,r,n){return hr($([h(Yr,e,n,im),$([lm(r),E_])]))}),H_=v(function(e,r){return hr(a(dv,N_(e),r))}),R_=function(e){var r=e.aj,n=e.ad,t=e.ac;return L(Tc,513,r,n,t)},O_=R_({ac:1,ad:0,aj:!0}),G_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f}}}}}}}}}}},W_=function(e){var r=e.cy,n=e.cf,t=e.b1,i=e.b_,o=e.b7,l=e.fE,c=v(function(u,f){var m=u.a,d=u.b,b=u.c,s=f.a,w=f.b,_=f.c;return G_(m)(d)(b)(s)(w)(_)(r)(n)(t)(i)});return a(c,o,l)},J_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),c$=v(function(e,r){var n=e,t=r;return h(J_,32774,n,t)}),q_=1,u$=771,U_=770,Ic=W_({b_:0,fE:a(c$,q_,u$),b1:0,b7:a(c$,U_,u$),cf:0,cy:0}),wa=$([O_,Ic]),Y_=function(e){var r=e;return r.eG},Z_=function(e){var r=e;return r.eH},cm=function(e){var r=e;return r.eI},Q_=function(e){var r=e;return r.eJ},K_=function(e){var r=e;return r.eK},um=function(e){var r=e;return r.eL},hn=v(function(e,r){var n=e,t=r;return t-n}),$m=function(e){return j(a(hn,Q_(e),Y_(e)),a(hn,K_(e),Z_(e)),a(hn,um(e),cm(e)))},sa=function(e){var r=e;return r.df},$$=function(e){var r=e;return sa(r)},X_=function(e){return e},e2=function(e){return Wr({df:X_({io:e.L,is:e.M,dO:e.N}),dM:gn({io:e.t,is:e.u,dO:e.v}),dN:gn({io:e.w,is:e.x,dO:e.y}),dP:gn({io:e.z,is:e.A,dO:e.B})})},Oo=v(function(e,r){var n=e,t=r,i=n.dP,o=i,l=n.dN,c=l,u=n.dM,f=u;return{io:t.io*f.io+t.is*f.is+t.dO*f.dO,is:t.io*c.io+t.is*c.is+t.dO*c.dO,dO:t.io*o.io+t.is*o.is+t.dO*o.dO}}),vm=v(function(e,r){var n=e,t=r,i=n.df,o=i,l=t.io-o.io,c=t.is-o.is,u=t.dO-o.dO,f=n.dP,m=f,d=n.dN,b=d,s=n.dM,w=s;return{io:l*w.io+c*w.is+u*w.dO,is:l*b.io+c*b.is+u*b.dO,dO:l*m.io+c*m.is+u*m.dO}}),Gn=function(e){var r=e;return r.dM},Wn=function(e){var r=e;return r.dN},Jn=function(e){var r=e;return r.dP},fm=v(function(e,r){return{df:a(vm,e,sa(r)),dM:a(Oo,e,Gn(r)),dN:a(Oo,e,Wn(r)),dP:a(Oo,e,Jn(r))}}),Dn=M(function(e,r,n){return{io:e,is:r,dO:n}}),Ri=function(e){var r=e;return r},Ge=v(function(e,r){var n=e,t=r;return a(nr,n,t)}),qe=v(function(e,r){var n=e,t=r;return a(na,n,t)}),r2=v(function(e,r){var n=Ri(r),t=Ri(e);return{eG:a(Ge,t.eG,n.eG),eH:a(Ge,t.eH,n.eH),eI:a(Ge,t.eI,n.eI),eJ:a(qe,t.eJ,n.eJ),eK:a(qe,t.eK,n.eK),eL:a(qe,t.eL,n.eL)}}),Fr=function(e){var r=e;return r},n2=function(e){var r=e;return j(r.io,r.is,r.dO)},mt=v(function(e,r){var n=e,t=r;return t+n}),a2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=hi(Re(t)),l=hi(Re(n)),c=hi(Re(i)),u=n2(r),f=u.a,m=u.b,d=u.c;return{eG:a(mt,l,f),eH:a(mt,o,m),eI:a(mt,c,d),eJ:a(hn,l,f),eK:a(hn,o,m),eL:a(hn,c,d)}}),v$=re(function(e,r,n,t){var i=n.f1,o=2*n.gE*r,l=2*n.gD*r,c=2*n.gC*r,u=i.dO*r,f=i.is*r,m=i.io*r,d=Fr(Jn(e)),b=he(c*d.io)+he(l*d.is)+he(o*d.dO),s=Fr(Wn(e)),w=he(c*s.io)+he(l*s.is)+he(o*s.dO),_=Fr(Gn(e)),S=he(c*_.io)+he(l*_.is)+he(o*_.dO),C=a(a2,j(S,w,b),a(vm,e,h(Dn,m,f,u)));if(t.$)return Y(C);var y=t.a;return Y(a(r2,y,C))}),kl=re(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,w=r,_=n,S=o;e=s,r=w,n=_,t=S;continue e;case 1:var l=i.a,c=L(v$,e,r,l,n),s=e,w=r,_=c,S=o;e=s,r=w,n=_,t=S;continue e;case 2:var s=e,w=r,_=n,S=o;e=s,r=w,n=_,t=S;continue e;case 3:var l=i.a,c=L(v$,e,r,l,n),s=e,w=r,_=c,S=o;e=s,r=w,n=_,t=S;continue e;case 4:var u=i.a,s=e,w=r,_=L(kl,e,r,n,u),S=o;e=s,r=w,n=_,t=S;continue e;default:var f=i.a,m=i.b,d=a(fm,e2(f),e),b=r*f.cB,s=e,w=r,_=L(kl,d,b,n,$([m])),S=o;e=s,r=w,n=_,t=S;continue e}}else return n}),da=o0,pa=l0,ga=c0,mm=function(e){return{$:4,a:e}},t2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(z,n,r);e=i,r=o;continue e}else return r}),Rt=function(e){return mm(a(t2,e,D))},i2={ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,L:0,M:0,N:0,cB:1},o2=function(e){var r=e;return r},f$=Bc({bA:Ia,c6:0,dr:kc,bP:Oa,dL:255,bY:Ia,bZ:Ia}),l2=function(e){var r=e,n=a(nr,he(r.io),a(nr,he(r.is),he(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=sn(o*o+i*i+t*t);return l*n}else return Xr},wr={b1:0,f0:!1,cf:0,$7:0,cy:0,dD:0,io:0,is:0,dO:0},Tr=v(function(e,r){var n=e,t=r;return en({ep:n.io,eq:n.cy,er:t.io,es:t.cy,et:n.is,eu:n.cf,ev:t.is,ew:t.cf,ex:n.dO,ey:n.b1,ez:t.dO,eA:t.b1,eB:n.dD,eC:n.$7,eD:t.dD,eE:t.$7})}),ct=P({bG:a(Tr,wr,wr),cm:a(Tr,wr,wr),cn:a(Tr,wr,wr),co:a(Tr,wr,wr)},L(Ya,0,0,0,0)),ke=v(function(e,r){var n=r;return e*n}),m$=function(e){var r=e;return-r},sm=514,dm=function(e){var r=e.aj,n=e.ad,t=e.ac;return L(Tc,515,r,n,t)},pm=240,c2=$([dm({ac:1,ad:0,aj:!0}),Ac({bA:cr,c6:pm,dr:0,bP:sm,dL:0,bY:cr,bZ:cr}),Ic]),u2=v(function(e,r){var n=e,t=r.hb,i=r.gu,o=r.fJ,l=Re(t),c=l,u=Re(i),f=u,m=n.dq;if(m.$){var b=m.a;return fl(f)?en({ep:2/(o*b),eq:0,er:0,es:0,et:0,eu:2/b,ev:0,ew:0,ex:0,ey:0,ez:0,eA:-1,eB:0,eC:0,eD:0,eE:1}):en({ep:2/(o*b),eq:0,er:0,es:0,et:0,eu:2/b,ev:0,ew:0,ex:0,ey:0,ez:-2/(f-c),eA:-(f+c)/(f-c),eB:0,eC:0,eD:0,eE:1})}else{var d=m.a;return fl(f)?en({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-1,eA:-2*c,eB:0,eC:0,eD:-1,eE:0}):en({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-(f+c)/(f-c),eA:-2*f*c/(f-c),eB:0,eC:0,eD:-1,eE:0})}}),ti=v(function(e,r){return(1&e>>r)===1?0:1}),$2=function(e){return $([dm({ac:1,ad:0,aj:!0}),Ac({bA:cr,c6:pm,dr:e,bP:sm,dL:0,bY:cr,bZ:cr}),Ic])},v2=M(function(e,r,n){return hr(a(ee,function(t){var i=t<<4,o=L(Ya,a(ti,t,0),a(ti,t,1),a(ti,t,2),a(ti,t,3));return h(Yr,e,P(r,o),$2(i))},a(Ar,1,a(Nt,2,n)-1)))}),An=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Fa=function(e){var r=e;return r},f2=h0,s$=function(e){var r=e;return An(Jn(r))},gm=gn({io:1,is:0,dO:0}),Fc=gm,Ec=oo,Vc=gn({io:0,is:0,dO:1}),hm=Vc,m2={df:mr,dM:Fc,dN:Ec,dP:hm},Ot=function(e){var r=e;return r},s2=function(e){var r=Ot(sa(e)),n=Fr(Jn(e)),t=Fr(Wn(e)),i=Fr(Gn(e));return en({ep:i.io,eq:t.io,er:n.io,es:r.io,et:i.is,eu:t.is,ev:n.is,ew:r.is,ex:i.dO,ey:t.dO,ez:n.dO,eA:r.dO,eB:0,eC:0,eD:0,eE:1})},d2=v(function(e,r){var n=r;return s2(a(fm,n,e))}),p2=function(e){return a(d2,m2,e)},g2=function(e){var r=e;return r.dG},h2=function(e){var r=e;return Gn(r)},b2=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),_2=function(e){var r=e;return Wn(r)},w2=function(e){var r=g2(e.fZ),n=Wr({df:$$(r),dM:h2(r),dN:_2(r),dP:An(s$(r))}),t=Rt(e.a9),i=t,o=L(kl,n,1,q,$([i]));if(o.$===1)return D;var l=o.a,c=p2(r),u=a(ke,.99,a(Ge,Re(e.f5),m$(cm(l)))),f=$m(l),m=f.a,d=f.b,b=f.c,s=l2(h(b2,m,d,b)),w=a(ke,1.01,a(mt,s,m$(um(l)))),_=a(u2,e.fZ,{fJ:e.fJ,gu:w,hb:u}),S=f2(_).eE,C=S?Fr(An(s$(r))):Fa($$(r)),y=function(){var me=e.ic;switch(me.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var Te=me.a;return P(3,Te);case 4:var Te=me.a;return P(4,Te);default:return P(5,0)}}(),T=y.a,G=y.b,K=e.gs,ae=K,te=a(lo,ae,e.il),ie=te,ne=en({ep:0,eq:C.io,er:da(ie),es:e.fb,et:0,eu:C.is,ev:pa(ie),ew:o2(s),ex:0,ey:C.dO,ez:ga(ie),eA:T,eB:0,eC:S,eD:0,eE:G}),U=ir(am,ne,c,_,i2,i,{Q:D,aa:D,hG:D}),de=e.g4;switch(de.$){case 0:var pe=de.a;return hr($([h(Yr,U.Q,P(pe,Ho),wa),h(Yr,U.aa,ct,wa)]));case 1:var pe=de.a;return hr($([h(Yr,U.Q,ct,wa),$([f$]),h(Yr,U.hG,pe.bG,im),$([lm(0)]),h(Yr,U.Q,P(pe,Ho),c2),h(Yr,U.aa,ct,wa)]));default:var Me=de.a,Se=de.b;return hr($([h(Yr,U.Q,P(Se,Ho),wa),$([f$]),a(H_,U.hG,Me),h(v2,U.Q,Se,la(Me)),h(Yr,U.aa,ct,wa)]))}},y2=function(e){return a(Jr,"width",k(e))},x2=v(function(e,r){var n=$([s_(1),h_(0),c_(!0),L(f_,0,0,0,0)]),t=function(){var T=e.fG;switch(T.$){case 0:return j(n,"0",1);case 1:return j(a(z,$_,n),"1",1);default:var G=T.a;return j(n,"0",G)}}(),i=t.a,o=t.b,l=t.c,c=e.a5,u=c.a,f=c.b,m=o$(f),d=a(Sr,"height",k(m)+"px"),b=o$(u),s=b/m,w=a(Ua,function(T){return w2({fJ:s,fZ:e.fZ,f5:e.f5,a9:T.a9,gs:T.gs,g4:T.g4,fb:l,ic:T.ic,il:T.il})},r),_=a(Sr,"width",k(b)+"px"),S=e.a2,C=S,y=b_(C);return h(p_,"div",$([a(Sr,"padding","0px"),_,d]),$([P(o,h(y_,i,$([y2(Ee(b*l)),d_(Ee(m*l)),_,d,a(Sr,"display","block"),a(Sr,"background-color",y)]),w))]))}),S2=function(e){return{$:2,a:e}},C2=function(e){return S2(e)},L2=function(e){return a(x2,{fG:C2(e.cS),a2:e.a2,fZ:e.fZ,f5:e.f5,a5:e.a5},$([{a9:e.a9,gs:e.gs,g4:e.g4,ic:e.ic,il:e.il}]))},d$=function(e){return e},an=function(e){return e},P2=function(e){var r=e;return r},co=function(e){var r=e;return P2(r.fK)},bm=re(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),z2=re(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),_m=re(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),wm=re(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),M2=re(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),T2=re(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),k2=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),jc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return L(k2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return L(bm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return L(z2,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return L(_m,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return L(T2,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return L(wm,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return L(M2,n,t,i,1);case 8:return e;case 9:return e;default:return e}},Nc={$:0},D2=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var u=c.a,f=c.b,m=Ri(l(u)),d=a(qe,m.eJ,e),b=a(Ge,m.eG,r),s=a(qe,m.eK,n),w=a(Ge,m.eH,t),_=a(qe,m.eL,i),S=a(Ge,m.eI,o),C=l,y=f;e=d,r=b,n=s,t=w,i=_,o=S,l=C,c=y;continue e}else return{eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i}}),A2=M(function(e,r,n){var t=Ri(e(r));return kt(D2,t.eJ,t.eG,t.eK,t.eH,t.eL,t.eI,e,n)}),Go=v(function(e,r){var n=e,t=r;return be(t,n)<1}),ym=function(e){return a(Go,e.eG,e.eJ)&&a(Go,e.eH,e.eK)&&a(Go,e.eI,e.eL)?e:{eG:a(Ge,e.eJ,e.eG),eH:a(Ge,e.eK,e.eH),eI:a(Ge,e.eL,e.eI),eJ:a(qe,e.eJ,e.eG),eK:a(qe,e.eK,e.eH),eL:a(qe,e.eL,e.eI)}},Mt=function(e){var r=e;return r},ta=function(e){var r=e;return r.io},ia=function(e){var r=e;return r.is},oa=function(e){var r=e;return r.dO},xm=function(e){var r=Mt(e),n=r.a,t=r.b,i=r.c,o=ta(n),l=ia(n),c=oa(n),u=ta(t),f=ia(t),m=oa(t),d=ta(i),b=ia(i),s=oa(i);return ym({eG:a(Ge,o,a(Ge,u,d)),eH:a(Ge,l,a(Ge,f,b)),eI:a(Ge,c,a(Ge,m,s)),eJ:a(qe,o,a(qe,u,d)),eK:a(qe,l,a(qe,f,b)),eL:a(qe,c,a(qe,m,s))})},Sm=u0,dr=function(e){return Sm(Ot(e))},Cm=function(e){var r=e;return r},uo=function(e){return Sm(Cm(e))},Lm=function(e){return e},B2=v(function(e,r){var n=e,t=r,i=a(nr,he(t.io),a(nr,he(t.is),he(t.dO)));if(i){var o=t.dO/i,l=t.is/i,c=t.io/i,u=sn(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dO:n*o/u}}else return em}),I2=B2(Lm(1)),Pm=M(function(e,r,n){var t=a(Hi,r,n),i=a(Hi,e,r);return I2(a(Pc,t,i))}),F2=function(e){var r=Mt(e),n=r.a,t=r.b,i=r.c,o=uo(h(Pm,n,t,i));return j({q:o,e_:dr(n)},{q:o,e_:dr(t)},{q:o,e_:dr(i)})},E2=v(function(e,r){return{$:2,a:e,b:r}}),zm=E2({d_:3,eb:0,eN:4}),V2=function(e){if(e.b){var r=e.a,n=e.b,t=zm(a(ee,F2,e)),i=h(A2,xm,r,n);return L(bm,i,e,t,0)}else return Nc},_r=M(function(e,r,n){return j(e,r,n)}),Ke=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),Mm=function(){var e=an(1),r=an(1),n=an(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),l=h(Ke,o,i,t),c=a(ke,.5,e),u=h(Ke,o,i,c),f=a(ke,.5,r),m=h(Ke,o,f,t),d=h(Ke,o,f,c),b=a(ke,.5,n),s=h(Ke,b,i,t),w=h(Ke,b,f,t),_=h(Ke,b,i,c),S=h(Ke,b,f,c);return jc(V2($([h(_r,l,w,s),h(_r,l,m,w),h(_r,u,_,S),h(_r,u,S,d),h(_r,s,w,S),h(_r,s,S,_),h(_r,l,d,m),h(_r,l,u,d),h(_r,l,s,_),h(_r,l,_,u),h(_r,m,S,w),h(_r,m,d,S)])))}(),ii={$:0},j2=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),N2=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(t),f=uo(h(Pm,u,c,l)),m={q:f,e_:dr(u)},d={q:f,e_:dr(c)},b={q:f,e_:dr(l)};return a(z,m,a(z,d,a(z,b,n)))}),Hc=function(e){var r=e;return r.I},H2=re(function(e,r,n,t){if(r.$===1)return q;var i=r.a;if(n.$===1)return q;var o=n.a;if(t.$===1)return q;var l=t.a;return Y(h(e,i,o,l))}),Dl=4294967295>>>32-bt,Al=Cs,R2=M(function(e,r,n){e:for(;;){var t=Dl&r>>>e,i=a(Al,t,n);if(i.$){var f=i.a;return a(Al,Dl&r,f)}else{var o=i.a,l=e-bt,c=r,u=o;e=l,r=c,n=u;continue e}}}),O2=function(e){return e>>>5<<5},G2=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||be(e,n)>-1?q:be(e,O2(n))>-1?Y(a(Al,Dl&e,o)):Y(h(R2,t,e,i))}),Rc=function(e){var r=e;return r.av},Wo=v(function(e,r){return a(G2,e,Rc(r))}),W2=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return L(H2,M(function(l,c,u){return j(l,c,u)}),a(Wo,t,e),a(Wo,i,e),a(Wo,o,e))};return a(bn,r,Hc(e))},J2=M(function(e,r,n){e:for(;;){var t=a(ic,Lr,e),i=t.a,o=t.b;if(be($l(i),Lr)<0)return a(xv,!0,{C:r,n,r:i});var l=o,c=a(z,_v(i),r),u=n+1;e=l,r=c,n=u;continue e}}),Oc=function(e){return e.b?h(J2,e,D,0):hv},q2=v(function(e,r){return!a(Ft,a(Vt,K0,e),r)}),U2=function(e){var r=e.a;return r},Tm=v(function(e,r){var n=U2(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&be(o,n)<0&&l>=0&&be(l,n)<0&&c>=0&&be(c,n)<0};return a(q2,t,r)?{I:r,av:e}:{I:a(rf,t,r),av:e}}),Y2=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Gt=Y2({d_:1,eb:3,eN:4}),bi=v(function(e,r){var n=Fa(r),t=Fa(e);return P(j(t.io,t.is,t.dO),j(n.io,n.is,n.dO))}),p$=h(Ht,0,0,0),Jo=Mr(function(e,r,n,t,i,o){var l=o.a,c=o.b,u=o.c,f=a(Et,a(bi,e,r),i);if(f.$){var d={q:p$,e_:dr(r)},b={q:p$,e_:dr(e)},s=u+1,w=u;return j(a(z,j(n,w,s),a(z,j(n,s,t),l)),a(z,d,a(z,b,c)),u+2)}else{var m=f.a;return j(a(z,j(n,m,t),l),c,u)}}),Z2=Ye(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,f=n.b,m=e(u),d=e(c),b=e(l),s=t+2,w=t+1,_=t,S=e,C=r,y=f,T=t+3,G=ir(Jo,m,b,s,_,r,ir(Jo,d,m,w,s,r,ir(Jo,b,d,_,w,r,i)));e=S,r=C,n=y,t=T,i=G;continue e}else{var K=i,ae=K.a,te=K.b;return P(ae,gr(te))}}),Q2=Ye(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,f=r.b,m=e(u),d=e(c),b=e(l),s=n+2,w=n+1,_=n,S=h(Da,a(bi,b,m),s,h(Da,a(bi,m,d),w,h(Da,a(bi,d,b),_,i))),C=a(z,j(_,w,s),t),y=e,T=f,G=n+3,K=C,ae=S;e=y,r=T,n=G,t=K,i=ae;continue e}else return j(t,i,n)}),Zn=M(function(e,r,n){var t=W2(n),i=h(er,N2(r),D,t),o=A(Q2,r,t,0,D,vc),l=o.a,c=o.b,u=o.c,f=A(Z2,r,c,t,0,j(l,D,u)),m=f.a,d=f.b,b=Pn(d)?i:Z(i,d);return h(j2,e,a(Tm,Oc(b),m),a(Gt,b,m))}),Bl=function(e){return{I:a(ee,function(r){return j(3*r,3*r+1,3*r+2)},a(Ar,0,la(e)-1)),av:Oc(hr(a(ee,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},km=function(e){switch(e.$){case 0:return ii;case 1:var t=e.a,r=e.b,n=a(ee,Mt,r);return h(Zn,t,Gr,Bl(n));case 2:var t=e.a,r=e.b,n=a(ee,Mt,r);return h(Zn,t,Gr,Bl(n));case 3:var t=e.a,i=e.b;return h(Zn,t,Gr,i);case 4:var t=e.a,i=e.b;return h(Zn,t,function(o){return o.e_},i);case 5:var t=e.a,i=e.b;return h(Zn,t,function(o){return o.e_},i);case 6:var t=e.a,i=e.b;return h(Zn,t,function(o){return o.e_},i);case 7:var t=e.a,i=e.b;return h(Zn,t,function(o){return o.e_},i);case 8:return ii;case 9:return ii;default:return ii}},g$=km(Mm),$o=function(e){var r=e;return r.a5},Dm={$:0},W=Dm,Xe=v(function(e,r){return{$:1,a:e,b:r}}),K2={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},X2=1029,ew=function(e){return{$:5,a:e}},Am=function(e){var r=e;return ew(r)},rw=Am(X2),nw=1028,aw=Am(nw),pr=M(function(e,r,n){return r===1?e?a(z,rw,n):a(z,aw,n):n}),Bm={src:`
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
    `,attributes:{position:"e_",uv:"P"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},qo=re(function(e,r,n,t){return a(Xe,r,ze(function(i,o,l,c,u,f,m,d){return A(Fe,h(pr,c,t,d),Bm,K2,n,{b8:e,c:l,d:o,e:f,f:i,g:u})}))}),Gc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aP"}},Im={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},un=re(function(e,r,n,t){return a(Xe,r,ze(function(i,o,l,c,u,f,m,d){return A(Fe,h(pr,c,t,d),Im,Gc,n,{aP:e,c:l,d:o,e:f,f:i,g:u})}))}),Fm=v(function(e,r){return{$:3,a:e,b:r}}),tw={src:`
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
    `,attributes:{},uniforms:{constantColor:"aP",pointRadius:"cw",sceneProperties:"f"}},Em={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},iw=re(function(e,r,n,t){return a(Fm,n,ze(function(i,o,l,c,u,f,m,d){return A(Fe,d,Em,tw,t,{aP:e,c:l,d:o,cw:r,e:f,f:i,g:u})}))}),Wc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",sceneProperties:"f"}},Wt=function(e){var r=e;return r},vo=$0,$n=Ye(function(e,r,n,t,i){return a(Xe,n,ze(function(o,l,c,u,f,m,d,b){return A(Fe,h(pr,u,i,b),Im,Wc,t,{a7:a(vo,Wt(r),e),c,d:l,e:m,f:o,g:f})}))}),ow={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",pointRadius:"cw",sceneProperties:"f"}},lw=Ye(function(e,r,n,t,i){return a(Fm,t,ze(function(o,l,c,u,f,m,d,b){return A(Fe,b,Em,ow,i,{a7:a(vo,Wt(r),e),c,d:l,cw:n,e:m,f:o,g:f})}))}),Vm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"c7",sceneProperties:"f",viewMatrix:"g"}},jm={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},oi=re(function(e,r,n,t){return a(Xe,r,ze(function(i,o,l,c,u,f,m,d){var b=m.a,s=m.b;return A(Fe,h(pr,c,t,d),jm,Vm,n,{V:s,bG:b.bG,cm:b.cm,cn:b.cn,co:b.co,c7:e,c:l,d:o,e:f,f:i,g:u})}))}),Nm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"c8",normalMapTexture:"bh",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},Hm={src:`
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
    `,attributes:{normal:"q",position:"e_",tangent:"fd",uv:"P"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},cw=Mr(function(e,r,n,t,i,o){return a(Xe,t,ze(function(l,c,u,f,m,d,b,s){var w=b.a,_=b.b;return A(Fe,h(pr,f,o,s),Hm,Nm,i,{V:_,bG:w.bG,cm:w.cm,cn:w.cn,co:w.co,c8:e,c:u,d:c,bh:r,e:d,f:l,bn:n,g:m})}))}),Rm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cO",constantBaseColor:"cP",constantMetallic:"cQ",constantRoughness:"cR",enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"db",normalMapTexture:"bh",roughnessTexture:"dv",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},uw=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return a(Xe,u,ze(function(d,b,s,w,_,S,C,y){var T=C.a,G=C.b;return A(Fe,h(pr,w,m,y),Hm,Rm,f,{cO:e,cP:r,cQ:o,cR:t,V:G,bG:T.bG,cm:T.cm,cn:T.cn,co:T.co,db:i,c:s,d:b,bh:l,e:S,dv:n,f:d,bn:c,g:_})}))}}}}}}}}}}},Om={src:`
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
    `,attributes:{},uniforms:{baseColor:"cN",enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",metallic:"da",roughness:"du",sceneProperties:"f",viewMatrix:"g"}},li=Mr(function(e,r,n,t,i,o){return a(Xe,t,ze(function(l,c,u,f,m,d,b,s){var w=b.a,_=b.b;return A(Fe,h(pr,f,o,s),jm,Om,i,{cN:e,V:_,bG:w.bG,cm:w.cm,cn:w.cn,co:w.co,da:n,c:u,d:c,e:d,du:r,f:l,g:m})}))}),$w=function(e){return{$:0,a:e}},h$=v(function(e,r){return{$:1,a:e,b:r}}),st=v(function(e,r){if(r.$){var n=r.a.E;return P(n,1)}else return r.a,P(e,0)}),vw=function(e){return L(Ya,da(e),pa(e),ga(e),1)},Jc=L(Ya,0,0,0,0),_i=v(function(e,r){if(r.$){var t=r.a.E;return P(t,Jc)}else{var n=r.a;return P(e,vw(n))}}),Gm=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.E;return a(h$,P(i,Jc),a(st,i,r))}else if(n.b.$){var i=n.b.a.E;return a(h$,a(_i,i,e),a(st,i,r))}else{var t=n.a.a;return n.b.a,$w(t)}}),fw=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ci=re(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),mw=re(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),sw=function(e){return a(xr,e,1)},Il=a(xr,0,0),ya=v(function(e,r){if(r.$){var t=r.a.E;return P(t,Il)}else{var n=r.a;return P(e,sw(n))}}),Wm=re(function(e,r,n,t){var i=L(mw,e,r,n,t);if(i.a.$){var u=i.a.a.E;return L(ci,P(u,Jc),a(ya,u,r),a(ya,u,n),a(st,u,t))}else if(i.b.$){var u=i.b.a.E;return L(ci,a(_i,u,e),P(u,Il),a(ya,u,n),a(st,u,t))}else if(i.c.$){var u=i.c.a.E;return L(ci,a(_i,u,e),a(ya,u,r),P(u,Il),a(st,u,t))}else if(i.d.$){var u=i.d.a.E;return L(ci,a(_i,u,e),a(ya,u,r),a(ya,u,n),P(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,h(fw,o,l,c)}}),dw={src:`
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
    `,attributes:{},uniforms:{backlight:"cL",colorTexture:"b8",sceneProperties:"f"}},Uo=Ye(function(e,r,n,t,i){return a(Xe,n,ze(function(o,l,c,u,f,m,d,b){return A(Fe,h(pr,u,i,b),Bm,dw,t,{cL:Wt(r),b8:e,c,d:l,e:m,f:o,g:f})}))}),Jm={src:`
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
    `,attributes:{normal:"q",position:"e_",uv:"P"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},pw=re(function(e,r,n,t){return a(Xe,r,ze(function(i,o,l,c,u,f,m,d){var b=m.a,s=m.b;return A(Fe,h(pr,c,t,d),Jm,Nm,n,{V:s,bG:b.bG,cm:b.cm,cn:b.cn,co:b.co,c8:e,c:l,d:o,bh:e,e:f,f:i,bn:0,g:u})}))}),gw=Hl(function(e,r,n,t,i,o,l,c,u){return a(Xe,l,ze(function(f,m,d,b,s,w,_,S){var C=_.a,y=_.b;return A(Fe,h(pr,b,u,S),Jm,Rm,c,{cO:e,cP:r,cQ:o,cR:t,V:y,bG:C.bG,cm:C.cm,cn:C.cn,co:C.co,db:i,c:d,d:m,bh:e,e:w,dv:n,f,bn:0,g:s})}))}),Tt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),hw=function(e){var r=e;return h(Tt,r.eJ,r.eG,.5)},bw=function(e){var r=e;return h(Tt,r.eK,r.eH,.5)},_w=function(e){var r=e;return h(Tt,r.eL,r.eI,.5)},ww=function(e){return h(Ke,hw(e),bw(e),_w(e))},$e=function(e){var r=$m(e),n=r.a,t=r.b,i=r.c;return{f1:Ot(ww(e)),gC:n/2,gD:t/2,gE:i/2}},qc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return L(qo,c,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return L(qo,c,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return L(qo,c,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var n=e.b.a;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return L(un,n,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return L(un,n,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return L(un,n,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return L(un,n,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return L(un,n,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return L(un,n,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return L(un,n,$e(i),l,t);case 8:var i=r.a,l=r.c;return L(un,n,$e(i),l,0);case 9:var i=r.a,l=r.c;return L(un,n,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return L(iw,n,o,$e(i),l)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,f=e.c;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return A(Uo,c,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return A(Uo,c,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return A(Uo,c,f,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return A($n,u,f,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return A($n,u,f,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return A($n,u,f,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return A($n,u,f,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return A($n,u,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return A($n,u,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return A($n,u,f,$e(i),l,t);case 8:var i=r.a,l=r.c;return A($n,u,f,$e(i),l,0);case 9:var i=r.a,l=r.c;return A($n,u,f,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return A(lw,u,f,o,$e(i),l)}}case 2:e.a;var m=e.b,ae=e.c,d=a(Gm,m,ae);if(d.$){var w=d.a,_=w.a;w.b;var S=d.b,C=S.a,y=S.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return L(pw,_,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return ir(cw,_,C,y,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}else{var b=d.a;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,s=r.d;return L(oi,b,$e(i),l,s);case 3:return W;case 4:var i=r.a,l=r.c,s=r.d;return L(oi,b,$e(i),l,s);case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return L(oi,b,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return L(oi,b,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}default:e.a;var T=e.b,G=e.c,K=e.d,ae=e.e,te=L(Wm,T,G,K,ae);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,I=te.c,F=I.a,E=I.b,V=te.d,C=V.a,y=V.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return _s(gw,pe,Me,me,Te,F,E,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return uw(pe)(Me)(me)(Te)(F)(E)(C)(y)($e(i))(l)(t);case 8:return W;case 9:return W;default:return W}}else{var ie=te.a,ne=te.b,U=te.c;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,t=r.d;return ir(li,ie,ne,U,$e(i),l,t);case 3:return W;case 4:var i=r.a,l=r.c,t=r.d;return ir(li,ie,ne,U,$e(i),l,t);case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return ir(li,ie,ne,U,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return ir(li,ie,ne,U,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}}}),Yo=function(e){var r=e;return r.io},Zo=function(e){var r=e;return r.is},Qo=function(e){var r=e;return r.dO},yw=function(e){var r=e,n=Qo(r.dP),t=Zo(r.dP),i=Yo(r.dP),o=Qo(r.dN),l=Zo(r.dN),c=Yo(r.dN),u=Qo(r.dM),f=Zo(r.dM),m=Yo(r.dM);return m*l*n+f*o*i+u*c*t-u*l*i-f*c*n-m*o*t>0},xw=function(e){var r=Ot(sa(e)),n=Fr(Jn(e)),t=Fr(Wn(e)),i=Fr(Gn(e));return{ef:yw(e),t:i.io,u:i.is,v:i.dO,w:t.io,x:t.is,y:t.dO,z:n.io,A:n.is,B:n.dO,L:r.io,M:r.is,N:r.dO,cB:1}},Ca=v(function(e,r){return{$:5,a:e,b:r}}),qm=v(function(e,r){var n=r;switch(n.$){case 0:return W;case 5:var t=n.a,i=n.b,o=a(nm,t,e);return a(Ca,o,i);case 1:return a(Ca,e,n);case 3:return a(Ca,e,n);case 2:return a(Ca,e,n);default:return a(Ca,e,n)}}),Um=v(function(e,r){return a(qm,xw(e),r)}),fo=function(e){return{$:2,a:e}},Sw=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f1;return{f1:{io:n*o.io,is:t*o.is,dO:i*o.dO},gC:n*r.gC,gD:t*r.gD,gE:i*r.gE}}),Cw=m0,Lw=f0,b$=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){var m=e.a,d=e.b,b=e.c,s=Lw(t),w=s.io,_=s.is,S=s.dO,C=s.fp,y=Cw({fp:C,io:w*m,is:_*d,dO:S*b});return kt(r,n,y,i,o,l,c,u,f)}}}}}}}}}},Fl=v(function(e,r){switch(r.$){case 0:return Dm;case 5:var n=r.a,t=r.b;return a(Ca,n,a(Fl,e,t));case 1:var i=r.a,o=r.b;return a(Xe,a(Sw,e,i),a(b$,e,o));case 3:return r;case 2:var o=r.a;return fo(a(b$,e,o));default:var l=r.a;return mm(a(ee,Fl(e),l))}}),Uc=v(function(e,r){var n=r;return a(Fl,e,n)}),Yc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Ym=7683,Zm=7682,Pw=h(Dc,{c6:0,dr:0,dL:15},{bA:cr,bP:Oa,bY:cr,bZ:Ym},{bA:cr,bP:Oa,bY:cr,bZ:Zm}),zw=h(Dc,{c6:0,dr:0,dL:15},{bA:cr,bP:Oa,bY:cr,bZ:Zm},{bA:cr,bP:Oa,bY:cr,bZ:Ym}),Zc=v(function(e,r){return e?a(z,zw,r):a(z,Pw,r)}),Mw={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},Tw=function(e){if(e.$){var r=e.c;return Y(ze(function(n,t,i,o,l,c,u,f){return A(Fe,a(Zc,o,f),Mw,Yc,r,{c:i,d:t,e:c,f:n,cC:u,g:l})}))}else return q},Oi=function(e){var r=Tw(e);if(r.$)return W;var n=r.a;return fo(n)},kw=re(function(e,r,n,t){var i=a(qc,n,Mm),o=function(){var m=P(e,r);return m.a?m.b?Rt($([i,Oi(g$)])):i:m.b?Oi(g$):W}(),l=$o(t),c=l.a,u=l.b,f=l.c;return a(Um,co(t),a(Uc,j(c,u,f),o))}),Dw=v(function(e,r){return L(kw,!0,!0,e,r)}),El=function(e){return{$:0,a:e}},Qm=v(function(e,r){return{$:0,a:e,b:r}}),Aw=function(e){var r=_c(e),n=r.hs,t=r.gz,i=r.fP;return h(Ht,n,t,i)},Bw=function(e){return a(Qm,0,El(Aw(e)))},Qc=function(e){var r=e;return r.m},ua=Bs,dt=function(e){var r=e;return ua(r)},Iw=v(function(e,r){var n=r;return n/e}),Ga=Is,_$=function(e){var r=e;return{io:ua(r),is:Ga(r)}},Fw=v(function(e,r){var n=e.e_,t=e.q;return a(z,{q:uo(t),e_:dr(n)},r)}),Ew=qi(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,f=ga(c.e_),m=pa(c.e_),d=da(c.e_),b=a(na,e,d),s=a(nr,r,d),w=a(na,n,m),_=a(nr,t,m),S=a(na,i,f),C=a(nr,o,f),y=u;e=b,r=s,n=w,t=_,i=S,o=C,l=y;continue e}else return ym({eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i})}),Km=v(function(e,r){var n=ga(e.e_),t=pa(e.e_),i=da(e.e_);return Rl(Ew,i,i,t,t,n,n,r)}),Vw=function(e){var r=h($v,Fw,D,Rc(e));if(r.b){var n=r.a,t=r.b,i=a(Gt,r,Hc(e)),o=a(Km,n,t);return L(_m,o,e,i,0)}else return Nc},Xm=gn({io:0,is:0,dO:-1}),w$=v(function(e,r){var n=e,t=r,i=n.dN,o=i,l=n.dM,c=l;return{io:t.io*c.io+t.is*o.io,is:t.io*c.is+t.is*o.is,dO:t.io*c.dO+t.is*o.dO}}),Gi=function(e){var r=e;return Ga(r)},Vl=function(e){return wn(2*tr*e)},jw=Gr,y$=jw({df:mr,dM:Fc,dN:Ec}),es=function(){var e=72,r=a(Iw,e,Vl(1)),n=an(1),t=ka(Vc),i=ka(Xm),o=an(1),l=a(ke,.5,o),c=h(Ke,Xr,Xr,l),u=a(ke,-.5,o),f=h(Ke,Xr,Xr,u),m=function(s){var w=a(ke,s,r),_=ka(a(w$,y$,_$(w))),S=a(ke,dt(w),n),C=a(ke,Gi(w),n),y=h(Ke,S,C,l),T=h(Ke,S,C,u),G=a(Ei,e,s+1),K=a(ke,G,r),ae=ka(a(w$,y$,_$(K))),te=a(ke,dt(K),n),ie=a(ke,Gi(K),n),ne=h(Ke,te,ie,u),U=h(Ke,te,ie,l);return $([j({q:i,e_:f},{q:i,e_:ne},{q:i,e_:T}),j({q:_,e_:T},{q:ae,e_:ne},{q:ae,e_:U}),j({q:_,e_:T},{q:ae,e_:U},{q:_,e_:y}),j({q:t,e_:c},{q:t,e_:y},{q:t,e_:U})])},d=a(ee,m,a(Ar,0,e-1)),b=Bl(hr(d));return jc(Vw(b))}(),x$=km(es),rs=function(e){var r=e;return r.gk},ns=function(e){var r=e;return r.df},Nw=function(e){var r=rs(e),n=zc(r),t=n.a,i=n.b;return Wr({df:ns(e),dM:t,dN:i,dP:r})},as=function(e){var r=e;return r.g2},ts=function(e){var r=e;return r.hq},Hw=re(function(e,r,n,t){var i=Nw(Qc(t)),o=a(qc,n,es),l=function(){var d=P(e,r);return d.a?d.b?Rt($([o,Oi(x$)])):o:d.b?Oi(x$):W}(),c=ts(t),u=c,f=as(t),m=f;return a(Um,i,a(Uc,j(u,u,m),l))}),Rw=v(function(e,r){return L(Hw,!0,!0,e,r)}),S$={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},C$={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},ut=function(e){var r=Mt(e),n=r.a,t=r.b,i=r.c,o=Fa(n),l=Fa(t),c=Fa(i);return en({ep:o.io,eq:l.io,er:c.io,es:0,et:o.is,eu:l.is,ev:c.is,ew:0,ex:o.dO,ey:l.dO,ez:c.dO,eA:0,eB:0,eC:0,eD:0,eE:0})},ui=zm($([j({dC:0},{dC:1},{dC:2})])),Ow=v(function(e,r){var n=xm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var i=e.b.a;return a(Xe,t,ze(function(y,T,G,K,ae,te,ie,ne){return A(Fe,h(pr,K,0,ne),S$,Gc,ui,{aP:i,c:G,d:T,e:te,f:y,bV:ut(r),g:ae})}));case 1:if(e.b.$)return e.a,W;var o=e.b.a,l=e.c;return a(Xe,t,ze(function(y,T,G,K,ae,te,ie,ne){return A(Fe,h(pr,K,0,ne),S$,Wc,ui,{a7:a(vo,Wt(l),o),c:G,d:T,e:te,f:y,bV:ut(r),g:ae})}));case 2:e.a;var c=e.b,s=e.c,u=a(Gm,c,s);if(u.$)return W;var f=u.a;return a(Xe,t,ze(function(y,T,G,K,ae,te,ie,ne){var U=ie.a,de=ie.b;return A(Fe,h(pr,K,0,ne),C$,Vm,ui,{V:de,bG:U.bG,cm:U.cm,cn:U.cn,co:U.co,c7:f,c:G,d:T,e:te,f:y,bV:ut(r),g:ae})}));default:e.a;var m=e.b,d=e.c,b=e.d,s=e.e,w=L(Wm,m,d,b,s);if(w.$)return W;var _=w.a,S=w.b,C=w.c;return a(Xe,t,ze(function(y,T,G,K,ae,te,ie,ne){var U=ie.a,de=ie.b;return A(Fe,h(pr,K,0,ne),C$,Om,ui,{cN:_,V:de,bG:U.bG,cm:U.cm,cn:U.cn,co:U.co,da:C,c:G,d:T,e:te,du:S,f:y,bV:ut(r),g:ae})}))}}),Gw=function(){var e=$([{bm:a(xr,0,1)},{bm:a(xr,1,1)},{bm:a(xr,2,1)},{bm:a(xr,0,-1)},{bm:a(xr,1,-1)},{bm:a(xr,2,-1)}]),r=$([j(0,1,2),j(3,5,4),j(3,4,1),j(3,1,0),j(4,5,2),j(4,2,1),j(5,3,0),j(5,0,2)]);return a(Gt,e,r)}(),Ww={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",triangleVertexPositions:"bV",viewMatrix:"g"}},L$=function(e){return fo(ze(function(r,n,t,i,o,l,c,u){return A(Fe,a(Zc,i,u),Ww,Yc,Gw,{c:t,d:n,e:l,f:r,cC:c,bV:ut(e),g:o})}))},Jw=re(function(e,r,n,t){var i=a(Ow,n,t),o=P(e,r);return o.a?o.b?Rt($([i,L$(t)])):i:o.b?L$(t):W}),qw=v(function(e,r){return L(Jw,!0,!0,e,r)}),Kc=function(e){var r=e;return r},Uw=v(function(e,r){var n=oa(r),t=oa(e),i=ia(r),o=ia(e),l=ta(r),c=ta(e);return{eG:a(Ge,c,l),eH:a(Ge,o,i),eI:a(Ge,t,n),eJ:a(qe,c,l),eK:a(qe,o,i),eL:a(qe,t,n)}}),Yw=function(e){var r=Kc(e),n=r.a,t=r.b;return a(Uw,n,t)},P$={src:`
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
    `,attributes:{lineSegmentVertex:"en"},uniforms:{lineSegmentEndPoint:"el",lineSegmentStartPoint:"em",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Zw=v(function(e,r){return{$:1,a:e,b:r}}),Qw=Zw({d_:2,eb:0,eN:1}),z$=Qw($([P({en:0},{en:1})])),Kw=v(function(e,r){var n=Yw(r),t=$e(n),i=Kc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var c=e.b.a;return a(Xe,t,ze(function(f,m,d,b,s,w,_,S){return A(Fe,S,P$,Gc,z$,{aP:c,el:dr(l),em:dr(o),c:d,d:m,e:w,f,g:s})}));case 1:if(e.b.$)return W;var c=e.b.a,u=e.c;return a(Xe,t,ze(function(m,d,b,s,w,_,S,C){return A(Fe,C,P$,Wc,z$,{a7:a(vo,Wt(u),c),el:dr(l),em:dr(o),c:b,d,e:_,f:m,g:w})}));case 2:return W;default:return W}}),Xw=v(function(e,r){return a(Kw,e,r)}),mo=function(e){var r=e;return r.f1},so=function(e){var r=e;return r.hq},M$=v(function(e,r){var n=e,t=r;return n/t}),ey=Ye(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(z,o,i);if(_e(r,e))return l;var c=e,u=r-1,f=n,m=t,d=l;e=c,r=u,n=f,t=m,i=d;continue e}}),T$=v(function(e,r){return e<1?D:A(ey,0,e,e,r,D)}),ry=v(function(e,r){var n=e.e_,t=e.q,i=e.P,o=i,l=o.a,c=o.b;return a(z,{q:uo(t),e_:dr(n),P:a(xr,l,c)},r)}),ny=function(e){var r=h($v,ry,D,Rc(e));if(r.b){var n=r.a,t=r.b,i=a(Gt,r,Hc(e)),o=a(Km,n,t);return L(wm,o,e,i,0)}else return Nc},Xc=v(function(e,r){var n=e,t=r,i=ua(t);return{io:i*ua(n),is:i*Ga(n),dO:Ga(t)}}),ay=function(){var e=an(1),r=72,n=a(Ar,0,r-1),t=a(T$,r,a(Tt,Xr,Vl(1))),i=ht(r/2),o=a(Ar,0,i-1),l=a(T$,i,a(Tt,lt(90),lt(-90))),c=Oc(hr(a(ee,function(m){return a(ee,function(d){return{q:ka(a(Xc,m,d)),e_:h(Ke,a(ke,dt(d)*dt(m),e),a(ke,dt(d)*Gi(m),e),a(ke,Gi(d),e)),P:P(a(M$,m,Vl(1)),a(M$,a(mt,lt(90),d),lt(180)))}},l)},t))),u=v(function(m,d){return m*(i+1)+d}),f=hr(a(ee,function(m){return hr(a(ee,function(d){var b=a(u,m+1,d),s=a(u,m,d),w=a(u,m+1,d+1),_=a(u,m,d+1);return $([j(_,w,b),j(_,b,s)])},o))},n));return jc(ny(a(Tm,c,f)))}(),Wi=72,$i=2*Wi,ty=v(function(e,r){e:for(;;){var n=$i+1,t=a(Ei,$i,2*e+3),i=a(Ei,$i,2*e+2),o=2*e+1,l=2*e,c=$i,u=a(z,j(c,l,i),a(z,j(l,t,i),a(z,j(l,o,t),a(z,j(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),iy=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),oy=v(function(e,r){e:for(;;){var n=h(iy,0,2*tr,e/Wi),t={b$:n,ct:0,cz:1},i={b$:n,ct:1,cz:1},o=a(z,t,a(z,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),ly=function(){var e=a(oy,Wi-1,$([{b$:0,ct:0,cz:0},{b$:0,ct:1,cz:0}])),r=a(ty,Wi-1,D);return a(Gt,e,r)}(),cy={src:`
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
    `,attributes:{angle:"b$",offsetScale:"ct",radiusScale:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},k$=function(e){return fo(ze(function(r,n,t,i,o,l,c,u){return A(Fe,a(Zc,!0,u),cy,Yc,ly,{aP:h(Ht,0,0,1),c:t,d:n,e:l,f:r,cC:c,g:o})}))},uy=function(e){var r=Cm(e);return{ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,L:r.io,M:r.is,N:r.dO,cB:1}},$y=v(function(e,r){return a(qm,uy(e),r)}),vy=re(function(e,r,n,t){var i=a(qc,n,ay),o=function(){var u=P(e,r);return u.a?u.b?Rt($([i,k$()])):i:u.b?k$():W}(),l=so(t),c=l;return a($y,a(Hi,mr,mo(t)),a(Uc,j(c,c,c),o))}),fy=v(function(e,r){return L(vy,!0,!0,e,r)}),my=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),is=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),sy=Ye(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),dy=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Qm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(my,n,t,r);case 2:var n=e.a,t=e.b,l=e.c;return h(is,n,t,l);default:var n=e.a,t=e.b,i=e.c,o=e.d,l=e.e;return A(sy,n,t,i,o,l)}},py=dy,os=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(Dw,i,r)]);case 1:var i=e.a,n=e.b;return $([a(qw,i,n)]);case 3:var i=e.a,t=e.b;return $([a(fy,py(i),t)]);case 2:var i=e.a,o=e.b;return $([a(Rw,i,o)]);case 4:var l=e.a,c=e.b;return $([a(Xw,Bw(l),c)]);default:var u=e.a;return a(Ua,os,u)}},gy=function(e){return a(Ua,os,e)},hy=v(function(e,r){return L2({fG:e.fG,a2:o_(e.fL),fZ:e.fZ,f5:an(e.f5),cS:e.cS,a5:P(d$(Ee(e.dw.im)),d$(Ee(e.dw.gG))),a9:gy(r),gs:e.gs,g4:e.g4,ic:e.ic,il:e.il})}),ls=function(e){return e},by=v(function(e,r){var n=e,t=Fr(r.gk),i=t.io,o=t.is,l=t.dO,c=a(lo,r.cj,r.a4),u=c;return{b1:ga(u),f0:n,cf:pa(u),$7:0,cy:da(u),dD:1,io:-i,is:-o,dO:-l}}),_y=function(e){return a(by,ls(!0),{a4:e.a4,gk:a(Xc,wn(e.b0),wn(e.cd)),cj:e.cj})},wy=function(e){return e},yy=function(e){return wy(1.2*a(Nt,2,e))},Ko=Mc({io:.37208,is:.37529}),xy=v(function(e,r){return{$:2,a:e,b:r}}),cs=function(e){return{$:0,a:e}},vi=function(e){var r=e;return r},Sy=function(e){var r=e;return r.f0},Cy=cs(ct.a),Ly=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?P(a(z,t,o),l):P(o,a(z,t,l))});return h(er,n,P(D,D),r)}),Py=function(e){var r=e;return en({ep:r.io,eq:r.cy,er:0,es:0,et:r.is,eu:r.cf,ev:0,ew:0,ex:r.dO,ey:r.b1,ez:0,eA:0,eB:r.dD,eC:r.$7,eD:0,eE:0})},zy=ze(function(e,r,n,t,i,o,l,c){var u=a(Ly,Sy,$([vi(e),vi(r),vi(n),vi(t)])),f=u.a,m=u.b;if(f.b){var d=Z(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,s=d.b,w=s.a,_=s.b,S=_.a,C=_.b,y=C.a;return a(xy,a(ee,Py,f),{bG:a(Tr,b,w),cm:a(Tr,S,y),cn:a(Tr,i,o),co:a(Tr,l,c)})}else return Cy}else return cs({bG:a(Tr,e,r),cm:a(Tr,n,t),cn:a(Tr,i,o),co:a(Tr,l,c)})}),My=re(function(e,r,n,t){return kt(zy,e,r,n,t,wr,wr,wr,wr)}),Ty=v(function(e,r){return a(Ne,function(n){if(n.$)return 0;var t=n.b;return t},a(Et,e,r.aO))}),ky=v(function(e,r){return a(Ae,0,io(a(bn,Ty(e),r)))}),Dy=v(function(e,r){return a(ky,e,r.f9)}),$t=Dy,Ay={$:5},By=Ay,Iy=Mc({io:.44757,is:.40745}),Fy=function(e){return e},us=L(Vr,114/255,159/255,207/255,1),D$=function(e){return e},Xo=function(e){return e},Ey={$:1},Vy=Ey,jy=v(function(e,r){var n=e,t=Ot(r.e_),i=t.io,o=t.is,l=t.dO,c=a(lo,r.cj,r.a4),u=c;return{b1:ga(u),f0:n,cf:pa(u),$7:0,cy:da(u),dD:2,io:i,is:o,dO:l}}),A$=function(e){return a(jy,ls(!0),{a4:e.a4,cj:e.cj,e_:pi(e.e_)})},$s=L(Vr,52/255,101/255,164/255,1),Jt=v(function(e,r){return{$:0,a:e,b:r}}),el=v(function(e,r){var n=e,t=r;return be(t,n)>-1}),rl=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),Ny=gn({io:-1,is:0,dO:0}),Hy=gn({io:0,is:-1,dO:0}),Ry=Mr(function(e,r,n,t,i,o){var l=a(el,n,o)?Vc:Xm,c=a(el,r,i)?oo:Hy,u=a(el,e,t)?gm:Ny,f=j(Re(a(hn,e,t)),Re(a(hn,r,i)),Re(a(hn,n,o))),m=h(Ke,a(rl,e,t),a(rl,r,i),a(rl,n,o)),d=Wr({df:m,dM:u,dN:c,dP:l});return{fK:d,a5:f}}),vs=v(function(e,r){return ir(Ry,ta(e),ia(e),oa(e),ta(r),ia(r),oa(r))}),Ea=v(function(e,r){var n=r/2;return a(Jt,e,a(vs,h(Dn,-n,-n,-n),h(Dn,n,n,n)))}),po=function(e){return{$:5,a:e}},Pr=function(e){return po(e)},fs=L(Vr,138/255,226/255,52/255,1),Oy=L(Vr,173/255,127/255,168/255,1),nl=function(e){return h(rm,0,1,e<=.04045?e/12.92:a(Nt,(e+.055)/1.055,2.4))},Gy=function(e){var r=_c(e),n=r.hs,t=r.gz,i=r.fP;return h(Ht,nl(n),nl(t),nl(i))},ur=function(e){return h(is,0,El(Gy(e)),El(0))},go=v(function(e,r){return{$:2,a:e,b:r}}),eu=v(function(e,r){return{$:4,a:e,b:r}}),ho=v(function(e,r){return{$:3,a:e,b:r}}),bo=v(function(e,r){return{$:1,a:e,b:r}}),Wy=M(function(e,r,n){return{io:e,is:r,dO:n}}),qt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dO:t.dO+n.dO}}),Jy=v(function(e,r){return Wr({df:a(qt,e,sa(r)),dM:Gn(r),dN:Wn(r),dP:Jn(r)})}),qy=v(function(e,r){return{fK:a(Jy,e,co(r)),a5:$o(r)}}),ha=v(function(e,r){return{gk:r,df:e}}),Uy=v(function(e,r){var n=r;return a(ha,a(qt,e,n.df),n.gk)}),Yy=v(function(e,r){var n=r;return{m:a(Uy,e,n.m),g2:n.g2,hq:n.hq}}),Zy=function(e){return e},ru=v(function(e,r){var n=Kc(r),t=n.a,i=n.b;return Zy(P(e(t),e(i)))}),Qy=v(function(e,r){return a(ru,qt(e),r)}),_o=v(function(e,r){return{f1:r,hq:Re(e)}}),Ky=v(function(e,r){return a(_o,so(r),a(qt,e,mo(r)))}),nu=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return j(e(t),e(i),e(o))}),Xy=v(function(e,r){return a(nu,qt(e),r)}),wo=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(Wy,n,t,i);switch(r.$){case 0:var m=r.a,l=r.b;return a(Jt,m,a(qy,o,l));case 1:var m=r.a,c=r.b;return a(bo,m,a(Xy,o,c));case 3:var m=r.a,u=r.b;return a(ho,m,a(Ky,o,u));case 2:var m=r.a,f=r.b;return a(go,m,a(Yy,o,f));case 4:var m=r.a,d=r.b;return a(eu,m,a(Qy,o,d));default:var b=r.a;return po(a(ee,wo(j(n,t,i)),b))}}),yn=function(e){return wo(j(e,0,0))},lr=function(e){return wo(j(0,e,0))},wi=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ua(l),u=Ga(l),f=t.gk,m=f,d=m.io*u,b=c*d,s=d*d,w=m.is*u,_=c*w,S=d*w,C=w*w,y=1-2*(s+C),T=m.dO*u,G=c*T,K=2*(S-G),ae=2*(S+G),te=d*T,ie=2*(te+_),ne=2*(te-_),U=w*T,de=2*(U-b),pe=2*(U+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+K*o.is+ie*o.dO,is:ae*o.io+me*o.is+de*o.dO,dO:ne*o.io+pe*o.is+y*o.dO}}),Ut=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ua(l),u=Ga(l),f=t.df,m=f,d=o.io-m.io,b=o.is-m.is,s=o.dO-m.dO,w=t.gk,_=w,S=_.io*u,C=c*S,y=S*S,T=_.is*u,G=c*T,K=S*T,ae=T*T,te=1-2*(y+ae),ie=_.dO*u,ne=c*ie,U=2*(K-ne),de=2*(K+ne),pe=S*ie,Me=2*(pe+G),Se=2*(pe-G),me=T*ie,Te=2*(me-C),I=2*(me+C),F=ie*ie,E=1-2*(ae+F),V=1-2*(y+F);return{io:m.io+E*d+U*b+Me*s,is:m.is+de*d+V*b+Te*s,dO:m.dO+Se*d+I*b+te*s}}),ex=M(function(e,r,n){return Wr({df:h(Ut,e,r,sa(n)),dM:h(wi,e,r,Gn(n)),dN:h(wi,e,r,Wn(n)),dP:h(wi,e,r,Jn(n))})}),rx=M(function(e,r,n){return{fK:h(ex,e,r,co(n)),a5:$o(n)}}),nx=v(function(e,r){var n=a(Ut,e,r),t=a(wi,e,r);return function(i){var o=i;return a(ha,n(o.df),t(o.gk))}}),ax=M(function(e,r,n){var t=n;return{m:h(nx,e,r,t.m),g2:t.g2,hq:t.hq}}),tx=M(function(e,r,n){return a(ru,a(Ut,e,r),n)}),ix=M(function(e,r,n){return a(_o,so(n),h(Ut,e,r,mo(n)))}),ox=M(function(e,r,n){return a(nu,a(Ut,e,r),n)}),yo=M(function(e,r,n){switch(n.$){case 0:var c=n.a,t=n.b;return a(Jt,c,h(rx,e,r,t));case 1:var c=n.a,i=n.b;return a(bo,c,h(ox,e,r,i));case 3:var c=n.a,o=n.b;return a(ho,c,h(ix,e,r,o));case 2:var c=n.a,l=n.b;return a(go,c,h(ax,e,r,l));case 4:var c=n.a,u=n.b;return a(eu,c,h(tx,e,r,u));default:var f=n.a;return po(a(ee,a(yo,e,r),f))}}),lx=a(ha,mr,Fc),Ji=v(function(e,r){return h(yo,lx,wn(e),r)}),cx=a(ha,mr,Ec),tn=v(function(e,r){return h(yo,cx,wn(e),r)}),ux=a(ha,mr,hm),Wa=v(function(e,r){return h(yo,ux,wn(e),r)}),ms=v(function(e,r){return(r-wv(r/e)*e)/e}),Or=v(function(e,r){return 360*a(ms,e,r)}),$x=Es,vx=v(function(e,r){var n=r.a,t=r.b,i=r.c;return a(bo,e,h(_r,h(Dn,n.io,n.is,n.dO),h(Dn,t.io,t.is,t.dO),h(Dn,i.io,i.is,i.dO)))}),yi=L(Vr,255/255,255/255,255/255,1),ss=function(){var e=sn(3)/2,r=a(vx,ur(yi),j({io:e,is:0,dO:0},{io:0,is:.5,dO:0},{io:0,is:-.5,dO:0})),n=a(yn,-(e/3),a(tn,$x(1/3),r));return a(lr,-(e/3),a(Ji,kn(90),Pr($([a(yn,-(e/3),r),n,a(Wa,kn(120),n),a(Wa,kn(240),n)]))))}(),fx=function(e){var r=function(n){return a(Wa,a(Or,300,e.H),a(tn,a(Or,300,e.H),a(Ji,a(Or,300,e.H),n)))};return Pr($([a(lr,2,a(yn,-2,r(a(Ea,ur(fs),1)))),a(lr,2,a(yn,2,r(a(Ea,ur($s),1)))),a(lr,4,r(a(Ea,ur(Oy),1))),a(lr,1.5,r(ss))]))},jl=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=j(n/2,t/2,i/2),l=o.a,c=o.b,u=o.c;return a(Jt,e,a(vs,h(Dn,-l,-c,-u),h(Dn,l,c,u)))}),mx=M(function(e,r,n){return{m:a(ha,e,r),g2:Re(n.g2),hq:Re(n.hq)}}),sx=M(function(e,r,n){return a(go,e,h(mx,mr,oo,{g2:an(n),hq:an(r)}))}),Yt=M(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dO:t.dO+r*(i.dO-t.dO)}}),dx=M(function(e,r,n){var t=co(n),i=Gn(t),o=Wn(t),l=Jn(t),c=h(Yt,e,r,sa(t)),u=r>=0?Wr({df:c,dM:i,dN:o,dP:l}):Wr({df:c,dM:An(i),dN:An(o),dP:An(l)}),f=$o(n),m=f.a,d=f.b,b=f.c,s=Re(a(ke,r,m)),w=Re(a(ke,r,d)),_=Re(a(ke,r,b));return{fK:u,a5:j(s,w,_)}}),B$=function(e){return rs(Qc(e))},px=function(e){return ns(Qc(e))},gx=M(function(e,r,n){var t=Re(a(ke,r,ts(n))),i=Re(a(ke,r,as(n))),o=r>=0?B$(n):An(B$(n)),l=h(Yt,e,r,px(n));return{m:a(ha,l,o),g2:i,hq:t}}),hx=M(function(e,r,n){return a(ru,a(Yt,e,r),n)}),bx=M(function(e,r,n){return a(_o,a(ke,he(r),so(n)),h(Yt,e,r,mo(n)))}),_x=M(function(e,r,n){return a(nu,a(Yt,e,r),n)}),pt=v(function(e,r){switch(r.$){case 0:var l=r.a,n=r.b;return a(Jt,l,h(dx,mr,e,n));case 1:var l=r.a,t=r.b;return a(bo,l,h(_x,mr,e,t));case 3:var l=r.a,i=r.b;return a(ho,l,h(bx,mr,e,i));case 2:var l=r.a,o=r.b;return a(go,l,h(gx,mr,e,o));case 4:var l=r.a,c=r.b;return a(eu,l,h(hx,mr,e,c));default:var u=r.a;return po(a(ee,pt(e),u))}}),wx=function(){var e=Pr($([a(Ea,ur(yi),1),a(tn,kn(45),a(Ea,ur(yi),1))]));return Pr($([Pr($([e,a(lr,-.4,a(pt,1.3,e))])),a(lr,-.7,h(sx,ur(yi),1,.5))]))}(),I$=L(Vr,211/255,215/255,207/255,1),yx=L(Vr,193/255,125/255,17/255,1),xx=v(function(e,r){return a(Ne,function(n){if(n.$===1){var t=n.b;return t}else return 0},a(Et,e,r.aO))}),Sx=v(function(e,r){return a(Ae,0,io(a(bn,xx(e),r)))}),Cx=v(function(e,r){return a(Sx,e,r.f9)}),Lx=Cx,Px=re(function(e,r,n,t){var i=j(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,f=c*2-u,m=function(w){var _=w<0?w+1:w>1?w-1:w;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},d=m(o-1/3),b=m(o),s=m(o+1/3);return L(Vr,s,b,d,t)}),zx=M(function(e,r,n){return L(Px,e,r,n,1)}),Mx=function(e){return 2*tr*e},Nl=re(function(e,r,n,t){return e+(r-e)*(1+ua(Mx(a(ms,n,t))))/2}),Tx=function(e){var r=a(Lx,"number of tree blocks",e),n=function(t){var i=a(na,2,.2*(r-t)),o=h(zx,L(Nl,t/r,1,10,e.H),.6,.6),l=.25;return a(tn,a($t,"turning speed of the tree",e)*t*L(Nl,3,5,10,e.H),a(lr,t*1.2*l,a(jl,ur(o),j(i,l,i))))};return Pr($([a(jl,ur(yx),j(.2,8,.2)),Pr(a(ee,n,a(Ar,0,r-1)))]))},kx=function(e){var r=function(t){return a(lr,-1,a(jl,t,j(10,1,10)))},n=function(t){return Pr($([r(t),a(tn,kn(45),r(t))]))};return a(tn,a(Or,1e3,e.H),Pr($([wx,n(ur(I$)),a(lr,-.1,a(pt,1.1,n(ur($s)))),a(lr,-.2,a(pt,1.2,n(ur(I$)))),a(lr,1,a(yn,5,Tx(e))),Pr(a(ee,function(t){return a(tn,kn(t*45),a(lr,-1/3,a(yn,5.5,a(pt,2,ss))))},a(Ar,1,7)))])))},Dx=L(Vr,245/255,121/255,0/255,1),Ax=function(e){var r=14;return Pr(a(ee,function(n){return a(lr,4,a(Wa,a(Or,1e3,e.H),a(Ji,a(Or,1e3,e.H),a(tn,-a(Or,200,e.H),a(tn,-(n/r*kn(360)),a(yn,1.3,a(lr,L(Nl,-1,1,10,e.H),a(Ji,a(Or,600,e.H),a(Wa,a(Or,300,e.H),a(Ea,ur(Dx),.3))))))))))},a(Ar,0,r-1)))},Bx=function(e){return wo(j(0,0,e))},F$=v(function(e,r){return a(ho,e,a(_o,an(r),mr))}),Ix=function(e){return Pr($([a(tn,-a(Or,640,e.H),a(Bx,3.5,a(Wa,a(Or,100,e.H),Pr($([a(yn,-.02,a(F$,ur(us),.5)),a(yn,.02,a(F$,ur(fs),.5))])))))]))},Fx=v(function(e,r){return $([kx(e),fx(e),Ax(e),Ix(e)])}),E$=function(e){var r=e;return r},Ex=function(e){e:for(;;){if(_e(e.ed,Xr)&&_e(e.ee,Xr))return wr;if(a(Xf,Re(e.ed),Re(e.ee))){var r={a4:e.a4,ed:e.ee,ee:e.ed,fi:An(e.fi)};e=r;continue e}else{var n=he(E$(e.ee)/tr),t=he(E$(e.ed)/tr),i=Fr(e.fi),o=i.io,l=i.is,c=i.dO,u=a(lo,Lm(1),e.a4),f=u;return{b1:t*ga(f),f0:!1,cf:t*pa(f),$7:n/t,cy:t*da(f),dD:3,io:o,is:l,dO:c}}}},Vx=function(e){return Ex({a4:e.a4,ed:e.ed,ee:e.ee,fi:a(Xc,wn(e.b0),wn(e.cd))})},jx=v(function(e,r){var n=_y({b0:a($t,"azimuth for third light",e),a4:i_(Fy(2e3)),cd:a($t,"elevation for third light",e),cj:Xo(120)}),t=A$({a4:Ko,cj:D$(6e3),e_:{io:2,is:3,dO:1}}),i=Vx({b0:a($t,"azimuth for fourth light",e),a4:Ko,cd:a($t,"elevation for fourth light",e),ed:Xo(20),ee:Xo(10)}),o=A$({a4:Iy,cj:D$(6e3),e_:{io:-2,is:4,dO:1}});return a(hy,{fG:Vy,fL:us,fZ:a_,f5:.1,cS:e.cS,gs:yy(6),g4:L(My,o,t,n,i),dw:e.dw,ic:By,il:Ko},a(Fx,e,r))}),Nx=L(B1,jx,H1,N1,I1);const Hx={Main:{init:Nx(a(X,function(e){return vr({gX:e})},a(Q,"inputs",a(X,function(e){return a(X,function(r){return a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return vr({H:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(Q,"clock",Je))},a(Q,"devicePixelRatio",Je))},a(Q,"dt",Je))},a(Q,"keyboard",a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function(u){return a(X,function(f){return a(X,function(m){return a(X,function(d){return vr({fF:d,gb:m,dZ:f,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(Q,"alt",Pe))},a(Q,"control",Pe))},a(Q,"down",Pe))},a(Q,"downs",Di(ja)))},a(Q,"left",Pe))},a(Q,"pressedKeys",Di(ja)))},a(Q,"right",Pe))},a(Q,"shift",Pe))},a(Q,"up",Pe))))},a(Q,"pointer",a(X,function(n){return a(X,function(t){return a(X,function(i){return a(X,function(o){return a(X,function(l){return a(X,function(c){return a(X,function(u){return a(X,function(f){return vr({dZ:f,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(Q,"down",Pe))},a(Q,"isDown",Pe))},a(Q,"move",Pe))},a(Q,"rightDown",Pe))},a(Q,"rightUp",Pe))},a(Q,"up",Pe))},a(Q,"x",Je))},a(Q,"y",Je))))},a(Q,"screen",a(X,function(r){return a(X,function(n){return vr({gG:n,im:r})},a(Q,"height",Je))},a(Q,"width",Je))))},a(Q,"wheel",a(X,function(e){return a(X,function(r){return vr({gf:r,gg:e})},a(Q,"deltaX",Je))},a(Q,"deltaY",Je)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Rx=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",l=s=>s.code=="ArrowUp",c=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),l(s)&&(oe.keyboard.up=!0),c(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(w=>w!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),l(s)&&(oe.keyboard.up=!1),c(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const w=s/1e3,_=w-oe.clock;_<.009||(oe.dt=_,oe.clock=w,e.ports.tick.send(oe),d(oe)),window.requestAnimationFrame(b)}},Ox=Hx.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});Rx(Ox);
