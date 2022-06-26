const ws=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};ws();function Cn(e,r,n){return n.a=e,n.f=r,n}function v(e){return Cn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return Cn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function q(e){return Cn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function je(e){return Cn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function dr(e){return Cn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function ai(e){return Cn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function be(e){return Cn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,t,i,o,l,c,u)}}}}}}}})}function Io(e){return Cn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return e(r,n,t,i,o,l,c,u,m)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function A(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function Qe(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function Fo(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function nt(e,r,n,t,i,o,l,c,u){return e.a===8?e.f(r,n,t,i,o,l,c,u):e(r)(n)(t)(i)(o)(l)(c)(u)}function ys(e,r,n,t,i,o,l,c,u,m){return e.a===9?e.f(r,n,t,i,o,l,c,u,m):e(r)(n)(t)(i)(o)(l)(c)(u)(m)}var xs=[];function Ss(e){return e.length}var Cs=T(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),Ls=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,z(n,r)}),Ps=v(function(e,r){return r[e]});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});T(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var zs=T(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});T(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+Ms()),r});function Ms(e){return"<internals>"}function wa(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ue(e,r){for(var n,t=[],i=Eo(e,r,0,t);i&&(n=t.pop());i=Eo(n.a,n.b,0,t));return i}function Eo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&wa(5),!1;if(n>100)return t.push(z(e,r)),!0;e.$<0&&(e=Ju(e),r=Ju(r));for(var i in e)if(!Eo(e[i],r[i],n+1,t))return!1;return!0}v(ue);v(function(e,r){return!ue(e,r)});function le(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=le(e.a,r.a))||(n=le(e.b,r.b))?n:le(e.c,r.c);for(;e.b&&r.b&&!(n=le(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return le(e,r)<0});v(function(e,r){return le(e,r)<1});v(function(e,r){return le(e,r)>0});v(function(e,r){return le(e,r)>=0});var Ts=v(function(e,r){var n=le(e,r);return n<0?Uu:n?x0:qu}),at=0;function z(e,r){return{a:e,b:r}}function I(e,r,n){return{a:e,b:r,c:n}}function Gr(e){return e}function ke(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(R);function R(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Wr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Wr(e.a,r);return n}var D={$:0};function Wr(e,r){return{$:1,a:e,b:r}}var ks=v(Wr);function $(e){for(var r=D,n=e.length;n--;)r=Wr(e[n],r);return r}function ti(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var Ds=T(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});q(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(b(e,r.a,n.a,t.a));return $(i)});je(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return $(o)});dr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(A(e,r.a,n.a,t.a,i.a,o.a));return $(l)});v(function(e,r){return $(ti(r).sort(function(n,t){return le(e(n),e(t))}))});v(function(e,r){return $(ti(r).sort(function(n,t){var i=a(e,n,t);return i===qu?0:i===Uu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var As=v(Math.pow);v(function(e,r){return r%e});var Bs=v(function(e,r){var n=r%e;return e===0?wa(11):n>0&&e<0||n<0&&e>0?n+e:n}),Is=Math.PI,Fs=Math.cos,Es=Math.sin,Vs=Math.tan,js=Math.acos;v(Math.atan2);function Ns(e){return e}function Hs(e){return e===1/0||e===-1/0}var Rs=Math.ceil,Os=Math.floor,Gs=Math.round,Ws=Math.sqrt,ou=Math.log,Js=isNaN;function qs(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Us=v(function(e,r){return e+r});function Ys(e){var r=e.charCodeAt(0);return isNaN(r)?j:H(55296<=r&&r<=56319?z(Gr(e[0]+e[1]),e.slice(2)):z(Gr(e[0]),e.slice(1)))}v(function(e,r){return e+r});function Zs(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(Gr(r[i]+r[i+1])),i+=2;continue}t[i]=e(Gr(r[i])),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(Gr(o))&&n.push(o)}return n.join("")});function Qs(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}T(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,Gr(o),r)}return r});var Ks=T(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,Gr(i),r)}return r}),Xs=v(function(e,r){return r.split(e)}),ed=v(function(e,r){return r.join(e)}),rd=T(function(e,r,n){return n.slice(e,r)});function nd(e){return $(e.trim().split(/\s+/g))}function ad(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(Gr(t)))return!0}return!1});var td=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(Gr(t)))return!1}return!0}),id=v(function(e,r){return r.indexOf(e)>-1}),od=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var ld=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function lu(e){return e+""}function cd(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return j;r=10*r+o-48}return i==t?j:H(n==45?-r:r)}function ud(e){if(e.length===0||/[\sxbo]/.test(e))return j;var r=+e;return r===r?H(r):j}function $d(e){return ti(e).join("")}function vd(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function fd(e){return Gr(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function md(e){return{$:0,a:e}}function sd(e){return{$:1,a:e}}function Vo(e){return{$:2,b:e}}var dd=Vo(function(e){return typeof e=="boolean"?Ee(e):Jr("a BOOL",e)}),pd=Vo(function(e){return typeof e=="number"?Ee(e):Jr("a FLOAT",e)}),gd=Vo(function(e){return typeof e=="string"?Ee(e):e instanceof String?Ee(e+""):Jr("a STRING",e)});function hd(e){return{$:3,b:e}}var bd=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Ln(e,r){return{$:9,f:e,g:r}}var _d=v(function(e,r){return{$:10,b:r,h:e}}),wd=v(function(e,r){return Ln(e,[r])}),yd=T(function(e,r,n){return Ln(e,[r,n])});q(function(e,r,n,t){return Ln(e,[r,n,t])});je(function(e,r,n,t,i){return Ln(e,[r,n,t,i])});dr(function(e,r,n,t,i,o){return Ln(e,[r,n,t,i,o])});ai(function(e,r,n,t,i,o,l){return Ln(e,[r,n,t,i,o,l])});be(function(e,r,n,t,i,o,l,c){return Ln(e,[r,n,t,i,o,l,c])});Io(function(e,r,n,t,i,o,l,c,u){return Ln(e,[r,n,t,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Cr(e,n)}catch(t){return Xe(a(al,"This is not valid JSON! "+t.message,cn(r)))}});var cu=v(function(e,r){return Cr(e,xa(r))});function Cr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ee(e.c):Jr("null",r);case 3:return ii(r)?uu(e.b,r,$):Jr("a LIST",r);case 4:return ii(r)?uu(e.b,r,xd):Jr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Jr("an OBJECT with a field named `"+n+"`",r);var t=Cr(e.b,r[n]);return Vr(t)?t:Xe(a(Yu,n,t.a));case 7:var i=e.e;if(!ii(r))return Jr("an ARRAY",r);if(i>=r.length)return Jr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var t=Cr(e.b,r[i]);return Vr(t)?t:Xe(a(Zu,i,t.a));case 8:if(typeof r!="object"||r===null||ii(r))return Jr("an OBJECT",r);var o=D;for(var l in r)if(r.hasOwnProperty(l)){var t=Cr(e.b,r[l]);if(!Vr(t))return Xe(a(Yu,l,t.a));o=Wr(z(l,t.a),o)}return Ee(ir(o));case 9:for(var c=e.f,u=e.g,m=0;m<u.length;m++){var t=Cr(u[m],r);if(!Vr(t))return t;c=c(t.a)}return Ee(c);case 10:var t=Cr(e.b,r);return Vr(t)?Cr(e.h(t.a),r):t;case 11:for(var s=D,d=e.g;d.b;d=d.b){var t=Cr(d.a,r);if(Vr(t))return t;s=Wr(t.a,s)}return Xe(S0(ir(s)));case 1:return Xe(a(al,e.a,cn(r)));case 0:return Ee(e.a)}}function uu(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=Cr(e,r[o]);if(!Vr(l))return Xe(a(Zu,o,l.a));i[o]=l.a}return Ee(n(i))}function ii(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function xd(e){return a(j0,e.length,function(r){return e[r]})}function Jr(e,r){return Xe(a(al,"Expecting "+e,cn(r)))}function ya(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return ya(e.b,r.b);case 6:return e.d===r.d&&ya(e.b,r.b);case 7:return e.e===r.e&&ya(e.b,r.b);case 9:return e.f===r.f&&$u(e.g,r.g);case 10:return e.h===r.h&&ya(e.b,r.b);case 11:return $u(e.g,r.g)}}function $u(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!ya(e[t],r[t]))return!1;return!0}var Sd=v(function(e,r){return JSON.stringify(xa(r),null,e)+""});function cn(e){return e}function xa(e){return e}function Cd(){return[]}function Ld(){return{}}var Pd=T(function(e,r,n){return n[e]=xa(r),n});function zd(e){return v(function(r,n){return n.push(xa(e(r))),n})}function Zn(e){return{$:0,a:e}}function Md(e){return{$:1,a:e}}function un(e){return{$:2,b:e,c:null}}var jo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function Td(e){return{$:5,b:e}}var kd=0;function No(e){var r={$:0,e:kd++,f:e,g:null,h:[]};return Ro(r),r}function vu(e){return un(function(r){r(Zn(No(e)))})}function fu(e,r){e.h.push(r),Ro(e)}var Dd=v(function(e,r){return un(function(n){fu(e,r),n(Zn(at))})}),Ho=!1,mu=[];function Ro(e){if(mu.push(e),!Ho){for(Ho=!0;e=mu.shift();)Ad(e);Ho=!1}}function Ad(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Ro(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}q(function(e,r,n,t){return Oo(r,t,e.gR,e.ih,e.hV,function(){return function(){}})});function Oo(e,r,n,t,i,o){var l=a(cu,e,cn(r?r.flags:void 0));Vr(l)||wa(2);var c={},u=n(l.a),m=u.a,s=o(g,m),d=Bd(c,g);function g(f,_){var w=a(t,f,m);s(m=w.a,_),pu(c,w.b,i(m))}return pu(c,u.b,i(m)),d?{ports:d}:{}}var qr={};function Bd(e,r){var n;for(var t in qr){var i=qr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=Fd(i,r)}return n}function Id(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function Fd(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c(u){return a(jo,c,Td(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&l?P(t,n,s.i,s.j,u):b(t,n,o?s.i:s.j,u)}))}return n.h=No(a(jo,c,e.b))}var Ed=v(function(e,r){return un(function(n){e.g(r),n(Zn(at))})});v(function(e,r){return a(Dd,e.h,{$:0,a:r})});function su(e){return function(r){return{$:1,k:e,l:r}}}function Vd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var du=[],Go=!1;function pu(e,r,n){if(du.push({p:e,q:r,r:n}),!Go){Go=!0;for(var t;t=du.shift();)jd(t.p,t.q,t.r);Go=!1}}function jd(e,r,n){var t={};oi(!0,r,t,null),oi(!1,n,t,null);for(var i in e)fu(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function oi(e,r,n,t){switch(r.$){case 1:var i=r.k,o=Nd(e,i,t,r.l);n[i]=Hd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)oi(e,l.a,n,t);return;case 3:oi(e,r.o,n,{s:r.n,t});return}}function Nd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?qr[r].e:qr[r].f;return a(o,i,t)}function Hd(e,r,n){return n=n||{i:D,j:D},e?n.i=Wr(r,n.i):n.j=Wr(r,n.j),n}function Rd(e){qr[e]&&wa(3)}v(function(e,r){return r});function Od(e,r){return Rd(e),qr[e]={f:Gd,u:r,a:Wd},su(e)}var Gd=v(function(e,r){return function(n){return e(r(n))}});function Wd(e,r){var n=D,t=qr[e].u,i=Zn(null);qr[e].b=i,qr[e].c=T(function(l,c,u){return n=c,i});function o(l){var c=a(cu,t,cn(l));Vr(c)||wa(4,e,c.a);for(var u=c.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var li,$n=typeof document!="undefined"?document:{};function Wo(e,r){e.appendChild(r)}q(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(zn(e,function(){}),i),{}});function Jo(e){return{$:0,a:e}}var gu=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:Uo(n),e:i,f:e,b:o}})}),vn=gu(void 0),Jd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:Uo(n),e:i,f:e,b:o}})}),qd=Jd(void 0);function Ud(e,r,n,t){return{$:3,d:Uo(e),g:r,h:n,i:t}}var Yd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Pn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Pn([e,r],function(){return e(r)})});T(function(e,r,n){return Pn([e,r,n],function(){return a(e,r,n)})});var Zd=q(function(e,r,n,t){return Pn([e,r,n,t],function(){return b(e,r,n,t)})});je(function(e,r,n,t,i){return Pn([e,r,n,t,i],function(){return P(e,r,n,t,i)})});dr(function(e,r,n,t,i,o){return Pn([e,r,n,t,i,o],function(){return A(e,r,n,t,i,o)})});ai(function(e,r,n,t,i,o,l){return Pn([e,r,n,t,i,o,l],function(){return Qe(e,r,n,t,i,o,l)})});be(function(e,r,n,t,i,o,l,c){return Pn([e,r,n,t,i,o,l,c],function(){return Fo(e,r,n,t,i,o,l,c)})});Io(function(e,r,n,t,i,o,l,c,u){return Pn([e,r,n,t,i,o,l,c,u],function(){return nt(e,r,n,t,i,o,l,c,u)})});var hu=v(function(e,r){return{$:"a0",n:e,o:r}}),Qd=v(function(e,r){return{$:"a1",n:e,o:r}}),qo=v(function(e,r){return{$:"a2",n:e,o:r}}),Fr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function bu(e){return e=="script"?"p":e}function Kd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Xd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function ep(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function _u(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var rp=v(function(e,r){return r.$==="a0"?a(hu,r.n,np(e,r.o)):r});function np(e,r){var n=$l(r);return{$:r.$,a:n?b(N0,n<3?ap:tp,or(e),r.a):a(fi,e,r.a)}}var ap=v(function(e,r){return z(e(r.a),r.b)}),tp=v(function(e,r){return{aB:e(r.aB),dA:r.dA,dp:r.dp}});function Uo(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?wu(r,i,xa(o)):r[i]=xa(o);continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?wu(l,i,o):l[i]=o}return r}function wu(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function zn(e,r){var n=e.$;if(n===5)return zn(e.k||(e.k=e.m()),r);if(n===0)return $n.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=zn(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return Yo(l,r,e.d),l}var l=e.f?$n.createElementNS(e.f,e.c):$n.createElement(e.c);li&&e.c=="a"&&l.addEventListener("click",li(l)),Yo(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)Wo(l,zn(n===1?c[u]:c[u].b,r));return l}function Yo(e,r,n){for(var t in n){var i=n[t];t==="a1"?ip(e,i):t==="a0"?cp(e,r,i):t==="a3"?op(e,i):t==="a4"?lp(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function ip(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function op(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function lp(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function cp(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=up(r,o),e.addEventListener(i,l,Zo&&{passive:$l(o)<2}),t[i]=l}}var Zo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Zo=!0}}))}catch{}function up(e,r){function n(t){var i=n.q,o=Cr(i.a,t);if(!!Vr(o)){for(var l=$l(i),c=o.a,u=l?l<3?c.a:c.aB:c,m=l==1?c.b:l==3&&c.dA,s=(m&&t.stopPropagation(),(l==2?c.b:l==3&&c.dp)&&t.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function $p(e,r){return e.$==r.$&&ya(e.a,r.a)}function yu(e,r){var n=[];return Er(e,r,n,0),n}function Ke(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Er(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=hp(r),o=1;else{Ke(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,m=u===c.length;m&&u--;)m=l[u]===c[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];Er(e.k,r.k,s,0),s.length>0&&Ke(n,1,t,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var w=r.k;w.$===4;)f=!0,typeof g!="object"?g=[g,w.j]:g.push(w.j),w=w.k;if(f&&d.length!==g.length){Ke(n,0,t,r);return}(f?!vp(d,g):d!==g)&&Ke(n,2,t,g),Er(_,w,n,t+1);return;case 0:e.a!==r.a&&Ke(n,3,t,r.a);return;case 1:xu(e,r,n,t,fp);return;case 2:xu(e,r,n,t,mp);return;case 3:if(e.h!==r.h){Ke(n,0,t,r);return}var x=Qo(e.d,r.d);x&&Ke(n,4,t,x);var S=r.i(e.g,r.g);S&&Ke(n,5,t,S);return}}}function vp(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function xu(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){Ke(n,0,t,r);return}var o=Qo(e.d,r.d);o&&Ke(n,4,t,o),i(e,r,n,t)}function Qo(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=Qo(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&$p(l,c)||(t=t||{},t[i]=c)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function fp(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?Ke(n,6,t,{v:c,i:l-c}):l<c&&Ke(n,7,t,{v:l,e:o});for(var u=l<c?l:c,m=0;m<u;m++){var s=i[m];Er(s,o[m],n,++t),t+=s.b||0}}function mp(e,r,n,t){for(var i=[],o={},l=[],c=e.e,u=r.e,m=c.length,s=u.length,d=0,g=0,f=t;d<m&&g<s;){var _=c[d],w=u[g],x=_.a,S=w.a,y=_.b,C=w.b,F=void 0,U=void 0;if(x===S){f++,Er(y,C,i,f),f+=y.b||0,d++,g++;continue}var Q=c[d+1],G=u[g+1];if(Q){var Y=Q.a,Z=Q.b;U=S===Y}if(G){var V=G.a,ne=G.b;F=x===V}if(F&&U){f++,Er(y,ne,i,f),tt(o,i,x,C,g,l),f+=y.b||0,f++,it(o,i,x,Z,f),f+=Z.b||0,d+=2,g+=2;continue}if(F){f++,tt(o,i,S,C,g,l),Er(y,ne,i,f),f+=y.b||0,d+=1,g+=2;continue}if(U){f++,it(o,i,x,y,f),f+=y.b||0,f++,Er(Z,C,i,f),f+=Z.b||0,d+=2,g+=1;continue}if(Q&&Y===V){f++,it(o,i,x,y,f),tt(o,i,S,C,g,l),f+=y.b||0,f++,Er(Z,ne,i,f),f+=Z.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=c[d],y=_.b;it(o,i,_.a,y,f),f+=y.b||0,d++}for(;g<s;){var fe=fe||[],w=u[g];tt(o,i,w.a,w.b,void 0,fe),g++}(i.length>0||l.length>0||fe)&&Ke(n,8,t,{w:i,x:l,y:fe})}var Su="_elmW6BL";function tt(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Er(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}tt(e,r,n+Su,t,i,o)}function it(e,r,n,t,i){var o=e[n];if(!o){var l=Ke(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Er(t,o.z,c,i),Ke(r,9,i,{w:c,A:o});return}it(e,r,n+Su,t,i)}function Cu(e,r,n,t){ot(e,r,n,0,0,r.b,t)}function ot(e,r,n,t,i,o,l){for(var c=n[t],u=c.r;u===i;){var m=c.$;if(m===1)Cu(e,r.k,c.s,l);else if(m===8){c.t=e,c.u=l;var s=c.s.w;s.length>0&&ot(e,r,s,0,i,o,l)}else if(m===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var s=d.w;s.length>0&&ot(e,r,s,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||(u=c.r)>o)return t}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return ot(e,f,n,t,i+1,o,e.elm_event_node_ref)}for(var _=r.e,w=e.childNodes,x=0;x<_.length;x++){i++;var S=g===1?_[x]:_[x].b,y=i+(S.b||0);if(i<=u&&u<=y&&(t=ot(w[x],S,n,t,i,y,l),!(c=n[t])||(u=c.r)>o))return t;i=y}return t}function Lu(e,r,n,t){return n.length===0?e:(Cu(e,r,n,t),ci(e,n))}function ci(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=sp(i,t);i===e&&(e=o)}return e}function sp(e,r){switch(r.$){case 0:return dp(e,r.s,r.u);case 4:return Yo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ci(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,t=n.e,i=n.v,o=e.childNodes[i];i<t.length;i++)e.insertBefore(zn(t[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=ci(e,n.w),e;case 8:return pp(e,r);case 5:return r.s(e);default:wa(10)}}function dp(e,r,n){var t=e.parentNode,i=zn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function pp(e,r){var n=r.s,t=gp(n.y,r);e=ci(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:zn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return t&&Wo(e,t),e}function gp(e,r){if(!!e){for(var n=$n.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;Wo(n,o.c===2?o.s:zn(o.z,r.u))}return n}}function Ko(e){if(e.nodeType===3)return Jo(e.textContent);if(e.nodeType!==1)return Jo("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=Wr(a(Fr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,m=e.childNodes,t=m.length;t--;)u=Wr(Ko(m[t]),u);return b(vn,c,r,u)}function hp(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var bp=q(function(e,r,n,t){return Oo(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.ij,c=t.node,u=Ko(c);return Pu(o,function(m){var s=l(m),d=yu(u,s);c=Lu(c,u,d,i),u=s})})});q(function(e,r,n,t){return Oo(r,t,e.gR,e.ih,e.hV,function(i,o){var l=e.dy&&e.dy(i),c=e.ij,u=$n.title,m=$n.body,s=Ko(m);return Pu(o,function(d){li=l;var g=c(d),f=vn("body")(D)(g.fR),_=yu(s,f);m=Lu(m,s,_,i),s=f,li=0,u!==g.ib&&($n.title=u=g.ib)})})});var ui=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Pu(e,r){r(e);var n=0;function t(){n=n===1?0:(ui(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&ui(t),n=2)}}v(function(e,r){return a(fl,mt,un(function(){r&&history.go(r),e()}))});v(function(e,r){return a(fl,mt,un(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(fl,mt,un(function(){history.replaceState({},"",r),e()}))});var _p={addEventListener:function(){},removeEventListener:function(){}},wp=typeof window!="undefined"?window:_p;T(function(e,r,n){return vu(un(function(t){function i(o){No(n(o))}return e.addEventListener(r,i,Zo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Cr(e,r);return Vr(n)?H(n.a):j});function zu(e,r){return un(function(n){ui(function(){var t=document.getElementById(e);n(t?Zn(r(t)):Md(H0(e)))})})}function yp(e){return un(function(r){ui(function(){r(Zn(e()))})})}v(function(e,r){return zu(r,function(n){return n[e](),at})});v(function(e,r){return yp(function(){return wp.scroll(e,r),at})});T(function(e,r,n){return zu(e,function(t){return t.scrollLeft=r,t.scrollTop=n,at})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var xp=v(function(e,r){var n="g";e.g9&&(n+="m"),e.f$&&(n+="i");try{return H(new RegExp(r,n))}catch{return j}});v(function(e,r){return r.match(e)!==null});var Sp=T(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?H(d):j}t.push(P(Xv,u[0],u.index,i,$(s))),c=r.lastIndex}return r.lastIndex=l,$(t)});q(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var m=arguments[c];u[--c]=m?H(m):j}return n(P(Xv,l,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});T(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,$(i)});var Mu=0;function lt(e,r){for(;r.b;r=r.b)e(r.a)}function Xo(e){for(var r=0;e.b;e=e.b)r++;return r}var Cp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},Lp=je(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),Pp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),zp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Mp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Tp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),kp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Dp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Ap=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Bp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Ip=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Fp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ep=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Vp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Tu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},ku=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},jp=function(e){e.gl.disable(e.gl.CULL_FACE)},Np=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Hp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Rp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},Du=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Op=[Fp,Ep,Vp,Tu,ku,jp,Np,Hp,Rp];function Au(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function Gp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function Bu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Wp(e,r,n,t){for(var i=n.a.d_,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(f,_,w,x,S){var y;if(i===1)for(y=0;y<_;y++)f[w++]=_===1?x[S]:x[S][y];else o.forEach(function(C){for(y=0;y<_;y++)f[w++]=_===1?x[C][S]:x[C][S][y]})}var u=Bu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(Xo(n.b)*s);lt(function(f){c(d,u.size*u.arraySize,m,f,t[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function Jp(e,r){if(r.a.eb>0){var n=e.createBuffer(),t=qp(r.c,r.a.eb);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d_*Xo(r.b),indexBuffer:null,buffers:{}}}function qp(e,r){var n=new Uint32Array(Xo(e)*r),t=0,i;return lt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Iu(e,r){return e+"#"+r}var Fu=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Tu(n),ku(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=Iu(o.b.id,o.c.id),c=n.programs[l]),!c){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=Mu++,m||(m=Au(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=Mu++,s||(s=Au(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=Gp(t,m,s);c={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Up(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var g=t.getProgramParameter(d,t.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=t.getActiveAttrib(d,u),_=t.getAttribLocation(d,f.name);c.activeAttributes.push(f),c.activeAttributeLocations.push(_)}l=Iu(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),Yp(c.uniformSetters,o.e);var w=n.buffers.get(o.d);for(w||(w=Jp(t,o.d),n.buffers.set(o.d,w)),u=0;u<c.activeAttributes.length;u++){f=c.activeAttributes[u],_=c.activeAttributeLocations[u],w.buffers[f.name]===void 0&&(w.buffers[f.name]=Wp(t,f,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,w.buffers[f.name]);var x=Bu(t,f.type);if(x.arraySize===1)t.enableVertexAttribArray(_),t.vertexAttribPointer(_,x.size,x.baseType,!1,0,0);else for(var S=x.size*4,y=S*x.arraySize,C=0;C<x.arraySize;C++)t.enableVertexAttribArray(_+C),t.vertexAttribPointer(_+C,x.size,x.baseType,!1,y,S*C)}for(n.toggle=!n.toggle,lt(x_(n),o.a),u=0;u<Du.length;u++){var F=n[Du[u]];F.toggle!==n.toggle&&F.enabled&&(Op[u](n),F.enabled=!1,F.toggle=n.toggle)}w.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,w.indexBuffer),t.drawElements(o.d.a.eN,w.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eN,0,w.numIndices)}}return lt(i,e.g),r});function Up(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(f,_){var w=_.name,x=e.getUniformLocation(f,w);switch(_.type){case e.INT:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};case e.FLOAT:return function(y){o[w]!==y&&(e.uniform1f(x,y),o[w]=y)};case e.FLOAT_VEC2:return function(y){o[w]!==y&&(e.uniform2f(x,y[0],y[1]),o[w]=y)};case e.FLOAT_VEC3:return function(y){o[w]!==y&&(e.uniform3f(x,y[0],y[1],y[2]),o[w]=y)};case e.FLOAT_VEC4:return function(y){o[w]!==y&&(e.uniform4f(x,y[0],y[1],y[2],y[3]),o[w]=y)};case e.FLOAT_MAT4:return function(y){o[w]!==y&&(e.uniformMatrix4fv(x,!1,new Float32Array(y)),o[w]=y)};case e.SAMPLER_2D:var S=l++;return function(y){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(y);C||(C=y.gc(e),c.textures.set(y,C)),e.bindTexture(e.TEXTURE_2D,C),o[w]!==y&&(e.uniform1i(x,S),o[w]=y)};case e.BOOL:return function(y){o[w]!==y&&(e.uniform1i(x,y),o[w]=y)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[t[g.name]||g.name]=u(i,g)}return m}function Yp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Zp=T(function(e,r,n){return Ud(r,{g:n,f:{},h:e},a0,t0)}),Qp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Kp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Xp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),e0=v(function(e,r){e.contextAttributes.antialias=!0}),r0=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),n0=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function a0(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};lt(function(i){return a(y_,r,i)},e.h);var n=$n.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),Cp(function(){return a(Fu,e,n)})):(n=$n.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function t0(e,r){return r.f=e.f,Fu(r)}var i0=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/o0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function o0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var el=new Float64Array(3),Eu=new Float64Array(3),Vu=new Float64Array(3),l0=T(function(e,r,n){return new Float64Array([e,r,n])}),c0=function(e){return e[0]},u0=function(e){return e[1]},$0=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var v0=function(e){return new Float64Array([e.io,e.is,e.dO])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function ju(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(ju);function Nu(e,r,n){return n===void 0&&(n=new Float64Array(3)),$i(ju(e,r,n),n)}v(Nu);function Hu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function $i(e,r){r===void 0&&(r=new Float64Array(3));var n=1/Hu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var f0=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),ct=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(ct);function rl(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(rl);v(function(e,r){var n,t=el,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=ct(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(ct(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(ct(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(ct(r,t)+e[14])/n,i});var m0=q(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var s0=function(e){return{io:e[0],is:e[1],dO:e[2],fp:e[3]}},d0=function(e){return new Float64Array([e.io,e.is,e.dO,e.fp])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/p0(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function p0(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var g0=new Float64Array(16),h0=new Float64Array(16),b0=function(e){var r=new Float64Array(16);return r[0]=e.ep,r[1]=e.et,r[2]=e.ex,r[3]=e.eB,r[4]=e.eq,r[5]=e.eu,r[6]=e.ey,r[7]=e.eC,r[8]=e.er,r[9]=e.ev,r[10]=e.ez,r[11]=e.eD,r[12]=e.es,r[13]=e.ew,r[14]=e.eA,r[15]=e.eE,r},_0=function(e){return{ep:e[0],et:e[1],ex:e[2],eB:e[3],eq:e[4],eu:e[5],ey:e[6],eC:e[7],er:e[8],ev:e[9],ez:e[10],eD:e[11],es:e[12],ew:e[13],eA:e[14],eE:e[15]}};function Ru(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}dr(Ru);q(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return Ru(l,c,o,i,n,t)});function Ou(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}dr(Ou);q(function(e,r,n,t){return Ou(e,r,n,t,-1,1)});function Gu(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],w=e[12],x=e[13],S=e[14],y=e[15],C=r[0],F=r[1],U=r[2],Q=r[3],G=r[4],Y=r[5],Z=r[6],V=r[7],ne=r[8],fe=r[9],we=r[10],me=r[11],se=r[12],xe=r[13],de=r[14],Be=r[15];return n[0]=t*C+c*F+d*U+w*Q,n[1]=i*C+u*F+g*U+x*Q,n[2]=o*C+m*F+f*U+S*Q,n[3]=l*C+s*F+_*U+y*Q,n[4]=t*G+c*Y+d*Z+w*V,n[5]=i*G+u*Y+g*Z+x*V,n[6]=o*G+m*Y+f*Z+S*V,n[7]=l*G+s*Y+_*Z+y*V,n[8]=t*ne+c*fe+d*we+w*me,n[9]=i*ne+u*fe+g*we+x*me,n[10]=o*ne+m*fe+f*we+S*me,n[11]=l*ne+s*fe+_*we+y*me,n[12]=t*se+c*xe+d*de+w*Be,n[13]=i*se+u*xe+g*de+x*Be,n[14]=o*se+m*xe+f*de+S*Be,n[15]=l*se+s*xe+_*de+y*Be,n}v(Gu);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],w=r[0],x=r[1],S=r[2],y=r[4],C=r[5],F=r[6],U=r[8],Q=r[9],G=r[10],Y=r[12],Z=r[13],V=r[14];return n[0]=t*w+l*x+m*S,n[1]=i*w+c*x+s*S,n[2]=o*w+u*x+d*S,n[3]=0,n[4]=t*y+l*C+m*F,n[5]=i*y+c*C+s*F,n[6]=o*y+u*C+d*F,n[7]=0,n[8]=t*U+l*Q+m*G,n[9]=i*U+c*Q+s*G,n[10]=o*U+u*Q+d*G,n[11]=0,n[12]=t*Y+l*Z+m*V+g,n[13]=i*Y+c*Z+s*V+f,n[14]=o*Y+u*Z+d*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=$i(r,el);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*u,n[2]=o*t*c-i*u,n[3]=0,n[4]=t*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+t*u,n[7]=0,n[8]=t*o*c+i*u,n[9]=i*o*c-t*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var t=new Float64Array(16),i=1/Hu(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=l*s,f=c*s,_=o*l*m,w=o*c*m,x=l*c*m,S=o*o*m+u,y=_+f,C=w-g,F=_-f,U=l*l*m+u,Q=x+d,G=w+g,Y=x-d,Z=c*c*m+u,V=n[0],ne=n[1],fe=n[2],we=n[3],me=n[4],se=n[5],xe=n[6],de=n[7],Be=n[8],Te=n[9],Ze=n[10],qn=n[11],Xa=n[12],tn=n[13],on=n[14],_a=n[15];return t[0]=V*S+me*y+Be*C,t[1]=ne*S+se*y+Te*C,t[2]=fe*S+xe*y+Ze*C,t[3]=we*S+de*y+qn*C,t[4]=V*F+me*U+Be*Q,t[5]=ne*F+se*U+Te*Q,t[6]=fe*F+xe*U+Ze*Q,t[7]=we*F+de*U+qn*Q,t[8]=V*G+me*Y+Be*Z,t[9]=ne*G+se*Y+Te*Z,t[10]=fe*G+xe*Y+Ze*Z,t[11]=we*G+de*Y+qn*Z,t[12]=Xa,t[13]=tn,t[14]=on,t[15]=_a,t});function w0(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}T(w0);q(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function y0(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}T(y0);q(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],u=t[3],m=t[4],s=t[5],d=t[6],g=t[7],f=t[8],_=t[9],w=t[10],x=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=w,i[11]=x,i[12]=o*e+m*r+f*n+t[12],i[13]=l*e+s*r+_*n+t[13],i[14]=c*e+d*r+w*n+t[14],i[15]=u*e+g*r+x*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],w=r[9],x=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=w,n[10]=x,n[11]=S,n[12]=l*t+s*i+_*o+r[12],n[13]=c*t+d*i+w*o+r[13],n[14]=u*t+g*i+x*o+r[14],n[15]=m*t+f*i+S*o+r[15],n});T(function(e,r,n){var t=Nu(e,r,el),i=$i(rl(n,t,Eu),Eu),o=$i(rl(t,i,Vu),Vu),l=g0,c=h0;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,Gu(l,c)});T(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var M=ks,vi=zs,Wu=T(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var m=l.a;return b(vi,e,c,m)}else{var u=l.a;return b(vi,o,c,u)}});return b(vi,o,b(vi,e,r,i),t)}),nl=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,u=b(e,t,i,b(nl,e,r,l)),m=o;e=c,r=u,n=m;continue e}}),Ju=function(e){return b(nl,T(function(r,n,t){return a(M,z(r,n),t)}),D,e)},qu=1,x0=2,Uu=0,Xe=function(e){return{$:1,a:e}},al=v(function(e,r){return{$:3,a:e,b:r}}),Yu=v(function(e,r){return{$:0,a:e,b:r}}),Zu=v(function(e,r){return{$:1,a:e,b:r}}),Ee=function(e){return{$:0,a:e}},S0=function(e){return{$:2,a:e}},H=function(e){return{$:0,a:e}},j={$:1},C0=td,L0=Sd,k=lu,ee=v(function(e,r){return a(ed,e,ti(r))}),tl=v(function(e,r){return $(a(Xs,e,r))}),Qu=function(e){return a(ee,`
    `,a(tl,`
`,e))},Ie=T(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),Qn=function(e){return b(Ie,v(function(r,n){return n+1}),0,e)},P0=Ds,z0=T(function(e,r,n){e:for(;;)if(le(e,r)<1){var t=e,i=r-1,o=a(M,r,n);e=t,r=i,n=o;continue e}else return n}),Lr=v(function(e,r){return b(z0,e,r,D)}),Ku=v(function(e,r){return b(P0,e,a(Lr,0,Qn(r)-1),r)}),Ur=vd,Xu=function(e){var r=Ur(e);return 97<=r&&r<=122},e$=function(e){var r=Ur(e);return r<=90&&65<=r},M0=function(e){return Xu(e)||e$(e)},T0=function(e){var r=Ur(e);return r<=57&&48<=r},k0=function(e){return Xu(e)||e$(e)||T0(e)},ir=function(e){return b(Ie,M,D,e)},Sa=Ys,D0=v(function(e,r){return`

(`+(k(e+1)+(") "+Qu(A0(r))))}),A0=function(e){return a(B0,e,D)},B0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,t=e.b,i=function(){var w=Sa(n);if(w.$===1)return!1;var x=w.a,S=x.a,y=x.b;return M0(S)&&a(C0,k0,y)}(),o=i?"."+n:"['"+(n+"']"),l=t,c=a(M,o,r);e=l,r=c;continue e;case 1:var u=e.a,t=e.b,m="["+(k(u)+"]"),l=t,c=a(M,m,r);e=l,r=c;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+a(ee,"",ir(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(k(Qn(s))+" ways:"));return a(ee,`

`,a(M,_,a(Ku,D0,s)))}else{var t=s.a,l=t,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ee,"",ir(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(a(ee,"",ir(r))+`:

    `):`Problem with the given value:

`}();return _+(Qu(a(L0,4,f))+(`

`+g))}}),pr=32,il=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),ol=xs,ut=Rs,ll=v(function(e,r){return ou(r)/ou(e)}),$t=Ns,vt=ut(a(ll,2,pr)),r$=P(il,0,vt,ol,ol),n$=Cs,a$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var t$=Os,cl=Ss,Ue=v(function(e,r){return le(e,r)>0?e:r}),I0=function(e){return{$:0,a:e}},ul=Ls,F0=v(function(e,r){e:for(;;){var n=a(ul,pr,e),t=n.a,i=n.b,o=a(M,I0(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return ir(o)}}),i$=function(e){var r=e.a;return r},E0=v(function(e,r){e:for(;;){var n=ut(r/pr);if(n===1)return a(ul,pr,e).a;var t=a(F0,e,D),i=n;e=t,r=i;continue e}}),o$=v(function(e,r){if(r.n){var n=r.n*pr,t=t$(a(ll,pr,n-1)),i=e?ir(r.C):r.C,o=a(E0,i,r.n);return P(il,cl(r.r)+n,a(Ue,5,t*vt),o,r.r)}else return P(il,cl(r.r),vt,ol,r.r)}),V0=je(function(e,r,n,t,i){e:for(;;){if(r<0)return a(o$,!1,{C:t,n:n/pr|0,r:i});var o=a$(b(n$,pr,r,e)),l=e,c=r-pr,u=n,m=a(M,o,t),s=i;e=l,r=c,n=u,t=m,i=s;continue e}}),j0=v(function(e,r){if(e<=0)return r$;var n=e%pr,t=b(n$,n,e-n,r),i=e-n-pr;return A(V0,r,i,e,D,t)}),Vr=function(e){return!e.$},W=_d,_e=dd,O=bd,Ne=pd,l$=v(function(e,r){return{H:r.H,f9:e,cS:r.cS,gn:r.gn,g0:r.g0,ho:r.ho,dw:r.dw,ik:r.ik}}),fi=wd,N0=yd,or=md,$l=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},jr=function(e){return e},H0=jr,c$=dr(function(e,r,n,t,i,o){return{d4:o,d9:r,eW:t,eZ:n,e1:e,e2:i}}),R0=id,Kn=Zs,Ca=rd,ft=v(function(e,r){return e<1?r:b(Ca,e,Kn(r),r)}),mi=ld,si=function(e){return e===""},di=v(function(e,r){return e<1?"":b(Ca,0,e,r)}),u$=cd,$$=je(function(e,r,n,t,i){if(si(i)||a(R0,"@",i))return j;var o=a(mi,":",i);if(o.b){if(o.b.b)return j;var l=o.a,c=u$(a(ft,l+1,i));if(c.$===1)return j;var u=c;return H(Qe(c$,e,a(di,l,i),u,r,n,t))}else return H(Qe(c$,e,i,j,r,n,t))}),v$=q(function(e,r,n,t){if(si(t))return j;var i=a(mi,"/",t);if(i.b){var o=i.a;return A($$,e,a(ft,o,t),r,n,a(di,o,t))}else return A($$,e,"/",r,n,t)}),f$=T(function(e,r,n){if(si(n))return j;var t=a(mi,"?",n);if(t.b){var i=t.a;return P(v$,e,H(a(ft,i+1,n)),r,a(di,i,n))}else return P(v$,e,j,r,n)});v(function(e,r){if(si(r))return j;var n=a(mi,"#",r);if(n.b){var t=n.a;return b(f$,e,H(a(ft,t+1,r)),a(di,t,r))}else return b(f$,e,j,r)});var O0=od,mt=function(e){},st=Zn,G0=st(0),m$=q(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,m=c.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Ie,e,r,ir(d)):P(m$,e,r,n+1,d);return a(e,i,a(e,l,a(e,u,a(e,s,g))))}else return a(e,i,a(e,l,a(e,u,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),Ge=T(function(e,r,n){return P(m$,e,r,0,n)}),J=v(function(e,r){return b(Ge,v(function(n,t){return a(M,e(n),t)}),D,r)}),pi=jo,vl=v(function(e,r){return a(pi,function(n){return st(e(n))},r)}),W0=T(function(e,r,n){return a(pi,function(t){return a(pi,function(i){return st(a(e,t,i))},n)},r)}),J0=function(e){return b(Ge,W0(M),st(D),e)},q0=Ed,U0=v(function(e,r){var n=r;return vu(a(pi,q0(e),n))}),Y0=T(function(e,r,n){return a(vl,function(t){return 0},J0(a(J,U0(e),r)))}),Z0=T(function(e,r,n){return st(0)}),Q0=v(function(e,r){var n=r;return a(vl,e,n)});qr.Task=Id(G0,Y0,Z0,Q0);var K0=su("Task"),fl=v(function(e,r){return K0(a(vl,e,r))}),X0=bp,eg=qs,gi={$:1},s$=function(e){return{$:2,a:e}},ml={$:0},Pr=v(function(e,r){return{$:0,a:e,b:r}}),We=T(function(e,r,n){return r(e(n))}),Xn=function(e){var r=e.b.s;return r.a},rg=function(e){var r=e.a,n=e.b.Y,t=e.b.s,i=e.b.ao;if(i.b){var o=i.a,l=i.b;return H(a(Pr,r,{s:o,ao:l,Y:a(M,t,n)}))}else return j},Ce=v(function(e,r){if(r.$)return e;var n=r.a;return n}),ng=T(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dB;return(le(o+r.gn,Xn(n).H)>0?a(We,rg,Ce(a(Pr,gi,i))):jr)(a(Pr,s$({dB:o+r.gn}),i));default:var l=i.s,c=l.a,u=l.b,m=a(l$,c.f9,ke(r,{H:c.H+r.gn})),s=a(e,m,u);return a(Pr,ml,{s:z(m,s),ao:D,Y:a(M,i.s,i.Y)})}}),d$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),ag=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(M,t,n);e=o,r=l,n=c;continue e}else return n}}),tg=v(function(e,r){return ir(b(ag,e,r,D))}),p$=T(function(e,r,n){if(r<=0)return D;{var t=z(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,y=i.a,o=i.b,l=o.a;return $([y,l]);case 3:if(t.b.b.b.b){var c=t.b,y=c.a,u=c.b,l=u.a,m=u.b,s=m.a;return $([y,l,s])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var d=t.b,y=d.a,g=d.b,l=g.a,f=g.b,s=f.a,_=f.b,w=_.a,x=_.b;return e>1e3?a(M,y,a(M,l,a(M,s,a(M,w,a(tg,r-4,x))))):a(M,y,a(M,l,a(M,s,a(M,w,b(p$,e+1,r-4,x)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var S=t.b,y=S.a;return $([y])}}),ig=v(function(e,r){return b(p$,0,e,r)}),og=v(function(e,r){var n=r.b.Y,t=r.b.s,i=r.b.ao,o=R(ir(n),R($([t]),i)),l=a(ig,e,o),c=a(d$,e,o);if(c.b){var u=c.a,m=c.b;return a(Pr,gi,{s:u,ao:m,Y:ir(l)})}else{var s=ir(l);if(s.b){var d=s.a,g=s.b;return a(Pr,gi,{s:d,ao:D,Y:g})}else return r}}),lg=function(e){var r=e.b;return a(Pr,gi,r)},cg=function(e){var r=e.b;return a(Pr,s$({dB:Xn(e).H}),r)},ug=function(e){var r=e.b;return a(Pr,ml,r)},$g=v(function(e,r){switch(e.$){case 1:return lg(r);case 2:return ug(r);case 3:return cg(r);default:var n=e.a;return a(og,n,r)}}),hi=v(function(e,r){var n=r.a,t=r.b;return z(e(n),t)}),vg=v(function(e,r){return ke(r,{aO:e(r.aO)})}),fg=function(e){return{$:3,a:e}},mg=function(e){return{$:2,a:e}},g$=v(function(e,r){return{$:0,a:e,b:r}}),h$=v(function(e,r){return{$:1,a:e,b:r}}),De=v(function(e,r){if(r.$)return j;var n=r.a;return H(e(n))}),ce=function(e){return e<0?-e:e},b$=ud,sg=T(function(e,r,n){return a(Ce,0/0,b$(a(e,r,n)))}),dt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),dg=Ks,_$=function(e){return b(dg,M,D,e)},pg=v(function(e,r){var n=a(dt,function(t){return t!=="0"&&t!=="."},_$(r));return R(e&&n?"-":"",r)}),ae=lu,sl=Us,w$=fd,y$=function(e){var r=e.a,n=e.b;if(r==="9"){var t=Sa(n);if(t.$===1)return"01";var i=t.a;return a(sl,"0",y$(i))}else{var o=Ur(r);return o>=48&&o<57?a(sl,w$(o+1),n):"0"}},dl=Hs,gg=Js,bi=function(e){return a(sl,e,"")},x$=T(function(e,r,n){return e<=0?n:b(x$,e>>1,R(r,r),e&1?R(n,r):n)}),pt=v(function(e,r){return b(x$,e,r,"")}),pl=T(function(e,r,n){return R(n,a(pt,e-Kn(n),bi(r)))}),gl=Qs,S$=function(e){var r=a(tl,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return z(n,i)}else{var n=r.a;return z(n,"0")}else return z("0","0")},hg=function(e){var r=a(tl,"e",ae(ce(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ce,0,u$(a(O0,"+",i)?a(ft,1,i):i)),l=S$(n),c=l.a,u=l.b,m=R(c,u),s=o<0?a(Ce,"0",a(De,function(d){var g=d.a,f=d.b;return g+("."+f)},a(De,hi(bi),Sa(R(a(pt,ce(o),"0"),m))))):b(pl,o+1,"0",m);return R(e<0?"-":"",s)}else{var n=r.a;return R(e<0?"-":"",n)}else return""},bg=T(function(e,r,n){if(dl(n)||gg(n))return ae(n);var t=n<0,i=S$(hg(ce(n))),o=i.a,l=i.b,c=Kn(o)+r,u=R(a(pt,-c+1,"0"),b(pl,c,"0",R(o,l))),m=Kn(u),s=a(Ue,1,c),d=a(e,t,b(Ca,s,m,u)),g=b(Ca,0,s,u),f=d?gl(a(Ce,"1",a(De,y$,Sa(gl(g))))):g,_=Kn(f),w=f==="0"?f:r<=0?R(f,a(pt,ce(r),"0")):le(r,Kn(l))<0?b(Ca,0,_-r,f)+("."+b(Ca,_-r,_,f)):R(o+".",b(pl,r,"0",l));return a(pg,t,w)}),C$=bg(v(function(e,r){var n=Sa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Ur(i))})),_g=sg(C$),wg=T(function(e,r,n){var t=a(ll,10,ce(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(_g,i,n)}),L$=Ts,gt=v(function(e,r){e:for(;;){if(r.$===-2)return j;var n=r.b,t=r.c,i=r.d,o=r.e,l=a(L$,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return H(t);default:var c=e,u=o;e=c,r=u;continue e}}}),te=je(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Yr={$:-2},La=je(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var m=t.b,s=t.c,d=t.d,g=t.e;return A(te,0,r,n,A(te,1,m,s,d,g),A(te,1,o,l,c,u))}else return A(te,e,o,l,A(te,0,r,n,t,c),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var m=t.b,s=t.c,f=t.d;f.a;var _=f.b,w=f.c,x=f.d,S=f.e,g=t.e;return A(te,0,m,s,A(te,1,_,w,x,S),A(te,1,r,n,g,i))}else return A(te,e,r,n,t,i)}),hl=T(function(e,r,n){if(n.$===-2)return A(te,0,e,r,Yr,Yr);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=a(L$,e,i);switch(u){case 0:return A(La,t,i,o,b(hl,e,r,l),c);case 1:return A(te,t,i,r,l,c);default:return A(La,t,i,o,l,b(hl,e,r,c))}}),Pa=T(function(e,r,n){var t=b(hl,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return A(te,1,i,o,l,c)}else{var u=t;return u}}),yg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},P$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,w=g.d,x=g.e,S=m.e;return A(te,0,f,_,A(te,1,n,t,A(te,0,o,l,c,u),w),A(te,1,s,d,x,S))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,c=y.d,u=y.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return A(te,1,n,t,A(te,0,o,l,c,u),A(te,0,s,d,g,S))}else return e},z$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,m=c.c,s=c.d,d=c.e,g=i.e,f=e.e;f.a;var _=f.b,w=f.c,x=f.d,S=f.e;return A(te,0,o,l,A(te,1,u,m,s,d),A(te,1,n,t,g,A(te,0,_,w,x,S)))}else{var r=e.a,n=e.b,t=e.c,y=e.d;y.a;var o=y.b,l=y.c,C=y.d,g=y.e,F=e.e;F.a;var _=F.b,w=F.c,x=F.d,S=F.e;return A(te,1,n,t,A(te,0,o,l,C,g),A(te,0,_,w,x,S))}else return e},xg=ai(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,m=o.d,s=o.e;return A(te,n,c,u,m,A(te,0,t,i,s,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var d=l.d;return d.a,z$(r)}else break e;else return l.a,l.d,z$(r);else break e;return r}}),_i=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,A(te,r,n,t,_i(i),c);var u=P$(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return A(La,m,s,d,_i(g),f)}else return Yr}else return A(te,r,n,t,_i(i),c)}else return Yr},ht=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(le(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,A(te,n,t,i,a(ht,e,o),l);var u=P$(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return A(La,m,s,d,a(ht,e,g),f)}else return Yr}else return A(te,n,t,i,a(ht,e,o),l);else return a(Sg,e,Fo(xg,e,r,n,t,i,o,l))}),Sg=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(ue(e,t)){var c=yg(l);if(c.$===-1){var u=c.b,m=c.c;return A(La,n,u,m,o,_i(l))}else return Yr}else return A(La,n,t,i,o,a(ht,e,l))}else return Yr}),Cg=v(function(e,r){var n=a(ht,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return A(te,1,t,i,o,l)}else{var c=n;return c}}),wi=T(function(e,r,n){var t=r(a(gt,e,n));if(t.$)return a(Cg,e,n);var i=t.a;return b(Pa,e,i,n)}),Lg=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(wi,r,De(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(h$,z(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(wi,r,De(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(g$,z(o,l),b(wg,o,l,n))}));case 3:var r=e.a,n=e.b;return a(wi,r,De(function(t){return t.$===3?fg(n):t}));default:var r=e.a,n=e.b;return a(wi,r,De(function(t){return t.$===2?mg(n):t}))}},Pg=function(e){return vg(Lg(e))},zg=v(function(e,r){return a(J,Pg(e),r)}),Mg=v(function(e,r){return ke(r,{f9:a(zg,e,r.f9)})}),Tg=v(function(e,r){var n=r.a,t=r.b;return a(Pr,n,ke(t,{s:a(hi,Mg(e),t.s)}))}),bl=v(function(e,r){var n=r.a,t=r.b;return z(n,e(t))}),kg=T(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(Pr,t,ke(i,{s:a(bl,a(e,o.a,r),o)}))}),Dg=q(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return ke(t,{bx:!t.bx});case 2:var i=n.a;return ke(t,{S:b(ng,e,i,t.S)});case 3:var o=n.a;return ke(t,{bq:o});case 4:var l=n.a;return ke(t,{S:a(Tg,l,t.S)});case 5:var c=n.a;return ke(t,{S:b(kg,r,c,t.S)});default:var u=n.a;return ke(t,{S:a($g,u,t.S)})}}),Ag=v(function(e,r){return a(Pr,ml,{s:z(e,r(e)),ao:D,Y:D})}),Bg=Vd,M$=Bg(D),Ig=function(e){return{$:2,a:e}},yi=hd,za=gd,Fg=Od("tick",a(W,function(e){return a(W,function(r){return a(W,function(n){return a(W,function(t){return a(W,function(i){return a(W,function(o){return a(W,function(l){return or({H:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(O,"clock",Ne))},a(O,"devicePixelRatio",Ne))},a(O,"dt",Ne))},a(O,"keyboard",a(W,function(t){return a(W,function(i){return a(W,function(o){return a(W,function(l){return a(W,function(c){return a(W,function(u){return a(W,function(m){return a(W,function(s){return a(W,function(d){return or({fF:d,gb:s,dZ:m,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(O,"alt",_e))},a(O,"control",_e))},a(O,"down",_e))},a(O,"downs",yi(za)))},a(O,"left",_e))},a(O,"pressedKeys",yi(za)))},a(O,"right",_e))},a(O,"shift",_e))},a(O,"up",_e))))},a(O,"pointer",a(W,function(n){return a(W,function(t){return a(W,function(i){return a(W,function(o){return a(W,function(l){return a(W,function(c){return a(W,function(u){return a(W,function(m){return or({dZ:m,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(O,"down",_e))},a(O,"isDown",_e))},a(O,"move",_e))},a(O,"rightDown",_e))},a(O,"rightUp",_e))},a(O,"up",_e))},a(O,"x",Ne))},a(O,"y",Ne))))},a(O,"screen",a(W,function(r){return a(W,function(n){return or({gG:n,im:r})},a(O,"height",Ne))},a(O,"width",Ne))))},a(O,"wheel",a(W,function(e){return a(W,function(r){return or({gf:r,gg:e})},a(O,"deltaX",Ne))},a(O,"deltaY",Ne))))),Eg=function(e){return e.dH,Fg(Ig)},Vg=function(e){return{$:5,a:e}},jg={$:0},xi=v(function(e,r){return e}),Ng=function(e){var r=e.b.s;return r.b},Hg=function(e){return{$:1,a:e}},Rg=Hg,T$=function(e){return{$:8,a:e}},pe=T$,bt=function(e){return{$:0,a:e}},_t=T(function(e,r,n){return e(r(n))}),Og=a(_t,bt,xi),Mn=Og,Le=function(e){return{$:1,a:e}},fn=Le,k$=v(function(e,r){return{$:9,a:e,b:r}}),ea={$:0},D$=v(function(e,r){return r.$===3?ea:a(k$,e,r)}),_l=function(e){return a(D$,4,e)},p={fu:"a",cI:"atv",fw:"ab",fx:"cx",fy:"cy",fz:"acb",fA:"accx",fB:"accy",fC:"acr",dR:"al",dS:"ar",fD:"at",cJ:"ah",cK:"av",fH:"s",fN:"bh",fO:"b",fS:"w7",fU:"bd",fV:"bdt",b2:"bn",fW:"bs",b5:"cpe",f4:"cp",f6:"cpx",f7:"cpy",ax:"c",b9:"ctr",ca:"cb",cb:"ccx",ay:"ccy",bu:"cl",cc:"cr",ga:"ct",gd:"cptr",ge:"ctxt",gw:"fcs",d3:"focus-within",gx:"fs",gB:"g",cU:"hbh",cV:"hc",d7:"he",cW:"hf",d8:"hfp",gJ:"hv",gM:"ic",gO:"fr",ci:"lbl",gS:"iml",gT:"imlf",gU:"imlp",gV:"implw",gW:"it",g$:"i",eo:"lnk",bf:"nb",eP:"notxt",he:"ol",hf:"or",aV:"oq",hk:"oh",eT:"pg",eU:"p",hl:"ppe",hy:"ui",ag:"r",hB:"sb",hC:"sbx",hD:"sby",hE:"sbt",hJ:"e",hK:"cap",hM:"sev",hS:"sk",Z:"t",hZ:"tc",h_:"w8",h$:"w2",h0:"w9",h1:"tj",cE:"tja",h2:"tl",h3:"w3",h4:"w5",h5:"w4",h6:"tr",h7:"w6",h8:"w1",h9:"tun",ff:"ts",a0:"clr",ig:"u",dI:"wc",fq:"we",dJ:"wf",fr:"wfp",dK:"wrp"},wl=cn,zr=v(function(e,r){return a(qo,e,wl(r))}),Mr=zr("className"),gr=function(e){return Le(Mr(e))},A$=v(function(e,r){return{$:2,a:e,b:r}}),Gg=v(function(e,r){return{$:1,a:e,b:r}}),Ye=function(e){return{$:0,a:e}},hr=2,Wg={$:0},ra=Wg,Jg={$:0},qg=p.fH+(" "+p.ax),Ug=p.fH+(" "+p.gB),Yg=p.fH+(" "+p.eT),Zg=p.fH+(" "+p.eU),Qg=p.fH+(" "+p.ag),Kg=p.fH+(" "+p.hJ),Xg=function(e){switch(e){case 0:return Qg;case 1:return qg;case 2:return Kg;case 3:return Ug;case 4:return Zg;default:return Yg}},B$=function(e){return{$:1,a:e}},na={$:0},yl=function(e){return{$:1,a:e}},I$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return R(n,e);case 2:var t=r.a;return R(e,t);default:var n=r.a,t=r.b;return R(n,R(e,t))}}),F$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return R(a(J,function(o){return z(e,o)},t),r);case 2:var i=n.a;return R(r,a(J,function(o){return z(e,o)},i));default:var t=n.a,i=n.b;return R(a(J,function(o){return z(e,o)},t),R(r,a(J,function(o){return z(e,o)},i)))}}),Si=4,eh=function(e){return{$:0,a:e}},rh=function(e){return{$:1,a:e}},$e=function(e){return e>31?rh(1<<e-32):eh(1<<e)},E$=$e(41),V$=$e(40),j$=$e(42),N$=$e(43),Ma=vn("div"),xl=Yr,H$=xl,Zr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,i=e.b;return"min"+(k(t)+Zr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Zr(i))}},Pe=Gs,Ae=function(e){return k(Pe(e*255))},Sl=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return H("mv-"+(Ae(n)+("-"+(Ae(t)+("-"+Ae(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d;return H("tfrm-"+(Ae(l)+("-"+(Ae(c)+("-"+(Ae(u)+("-"+(Ae(s)+("-"+(Ae(d)+("-"+(Ae(g)+("-"+(Ae(_)+("-"+(Ae(w)+("-"+(Ae(x)+("-"+Ae(S))))))))))))))))))))}},wt=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var t=e.a;return"font-size-"+k(t);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var l=e.a;return"grid-rows-"+(a(ee,"-",a(J,Zr,l.hz))+("-cols-"+(a(ee,"-",a(J,Zr,l.al))+("-space-x-"+(Zr(l.hN.a)+("-space-y-"+Zr(l.hN.b)))))));case 9:var c=e.a;return"gp grid-pos-"+(k(c.ag)+("-"+(k(c.f8)+("-"+(k(c.im)+("-"+k(c.gG)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ee," ",a(J,function(s){var d=wt(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return a(Ce,"",Sl(o))}},nh=v(function(e,r){var n=r;return b(Pa,e,0,n)}),ah=v(function(e,r){var n=a(gt,e,r);return!n.$}),th=v(function(e,r){var n=r;return a(ah,e,n)}),R$=v(function(e,r){var n=r.a,t=r.b,i=wt(e);return a(th,i,n)?r:z(a(nh,i,n),a(M,e,t))}),re=v(function(e,r){return{$:0,a:e,b:r}}),yt=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},ih=T(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(M,i,n)}),mn=v(function(e,r){return b(Ge,ih(e),D,r)}),Ta=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Pe(r*255))+(","+k(Pe(n*255))+(","+k(Pe(t*255))+(","+(ae(i)+")")))))},Cl=function(e){return a(ee," ",a(mn,jr,$([e.ec?H("inset"):j,H(ae(e.eQ.a)+"px"),H(ae(e.eQ.b)+"px"),H(ae(e.a3)+"px"),H(ae(e.bj)+"px"),H(Ta(e.b7))])))},O$=function(e){return $([a(yt,L(p.d3)+":focus-within",a(mn,jr,$([a(De,function(r){return a(re,"border-color",Ta(r))},e.fT),a(De,function(r){return a(re,"background-color",Ta(r))},e.fL),a(De,function(r){return a(re,"box-shadow",Cl({a3:r.a3,b7:r.b7,ec:!1,eQ:a(bl,$t,a(hi,$t,r.eQ)),bj:r.bj}))},e.hF),H(a(re,"outline","none"))]))),a(yt,L(p.fH)+":focus .focusable, "+(L(p.fH)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(p.fH)+" .focusable-thumb"))),a(mn,jr,$([a(De,function(r){return a(re,"border-color",Ta(r))},e.fT),a(De,function(r){return a(re,"background-color",Ta(r))},e.fL),a(De,function(r){return a(re,"box-shadow",Cl({a3:r.a3,b7:r.b7,ec:!1,eQ:a(bl,$t,a(hi,$t,r.eQ)),bj:r.bj}))},e.hF),H(a(re,"outline","none"))])))])},Qr=function(e){return vn(bu(e))},G$=v(function(e,r){return a(qo,Xd(e),_u(r))}),Ll=v(function(e,r){return{$:2,a:e,b:r}}),Pl=function(e){return{$:6,a:e}},N=v(function(e,r){return{$:1,a:e,b:r}}),br=v(function(e,r){return{$:0,a:e,b:r}}),B=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),oh=v(function(e,r){return{$:3,a:e,b:r}}),W$=$([0,1,2,3,4,5]),lh=v(function(e,r){return r.b?b(Ge,M,r,e):e}),lr=function(e){return b(Ge,lh,D,e)},ka=v(function(e,r){return lr(a(J,e,r))}),ch=function(e){switch(e){case 0:return L(p.ga);case 1:return L(p.ca);case 2:return L(p.cc);case 3:return L(p.bu);case 4:return L(p.cb);default:return L(p.ay)}},Ci=function(e){switch(e){case 0:return L(p.fD);case 1:return L(p.fw);case 2:return L(p.dS);case 3:return L(p.dR);case 4:return L(p.fx);default:return L(p.fy)}},xt=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(B,ch(n),i),a(N,L(p.fH),$([a(B,Ci(n),o)]))])};return Pl(a(ka,r,W$))},J$=$([a(h,"display","flex"),a(h,"flex-direction","column"),a(h,"white-space","pre"),a(B,L(p.cU),$([a(h,"z-index","0"),a(N,L(p.fN),$([a(h,"z-index","-1")]))])),a(B,L(p.hE),$([a(N,L(p.Z),$([a(B,L(p.cW),$([a(h,"flex-grow","0")])),a(B,L(p.dJ),$([a(h,"align-self","auto !important")]))]))])),a(N,L(p.cV),$([a(h,"height","auto")])),a(N,L(p.cW),$([a(h,"flex-grow","100000")])),a(N,L(p.dJ),$([a(h,"width","100%")])),a(N,L(p.fr),$([a(h,"width","100%")])),a(N,L(p.dI),$([a(h,"align-self","flex-start")])),xt(function(e){switch(e){case 0:return z($([a(h,"justify-content","flex-start")]),$([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]));case 1:return z($([a(h,"justify-content","flex-end")]),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]));case 2:return z($([a(h,"align-items","flex-end")]),$([a(h,"align-self","flex-end")]));case 3:return z($([a(h,"align-items","flex-start")]),$([a(h,"align-self","flex-start")]));case 4:return z($([a(h,"align-items","center")]),$([a(h,"align-self","center")]));default:return z($([a(N,L(p.fH),$([a(h,"margin-top","auto"),a(h,"margin-bottom","auto")]))]),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))}})]),uh=function(e){var r=function(n){return $([a(N,L(p.fH),$([a(B,Ci(n),e(n))]))])};return Pl(a(ka,r,W$))},$h=function(){return $([0,1,2,3,4,5])}(),vh=$([a(br,"html,body",$([a(h,"height","100%"),a(h,"padding","0"),a(h,"margin","0")])),a(br,R(L(p.fH),R(L(p.hJ),L(p.gM))),$([a(h,"display","block"),a(B,L(p.cW),$([a(N,"img",$([a(h,"max-height","100%"),a(h,"object-fit","cover")]))])),a(B,L(p.dJ),$([a(N,"img",$([a(h,"max-width","100%"),a(h,"object-fit","cover")]))]))])),a(br,L(p.fH)+":focus",$([a(h,"outline","none")])),a(br,L(p.hy),$([a(h,"width","100%"),a(h,"height","auto"),a(h,"min-height","100%"),a(h,"z-index","0"),a(B,R(L(p.fH),L(p.cW)),$([a(h,"height","100%"),a(N,L(p.cW),$([a(h,"height","100%")]))])),a(N,L(p.gO),$([a(B,L(p.bf),$([a(h,"position","fixed"),a(h,"z-index","20")]))]))])),a(br,L(p.bf),$([a(h,"position","relative"),a(h,"border","none"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(B,L(p.hJ),J$),Pl(function(e){return a(J,e,$h)}(function(e){switch(e){case 0:return a(B,L(p.fu),$([a(h,"position","absolute"),a(h,"bottom","100%"),a(h,"left","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(N,L(p.cW),$([a(h,"height","auto")])),a(N,L(p.dJ),$([a(h,"width","100%")])),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));case 1:return a(B,L(p.fO),$([a(h,"position","absolute"),a(h,"bottom","0"),a(h,"left","0"),a(h,"height","0"),a(h,"width","100%"),a(h,"z-index","20"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")])),a(N,L(p.cW),$([a(h,"height","auto")]))]));case 2:return a(B,L(p.hf),$([a(h,"position","absolute"),a(h,"left","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));case 3:return a(B,L(p.he),$([a(h,"position","absolute"),a(h,"right","100%"),a(h,"top","0"),a(h,"height","100%"),a(h,"margin","0 !important"),a(h,"z-index","20"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));case 4:return a(B,L(p.gO),$([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]));default:return a(B,L(p.fN),$([a(h,"position","absolute"),a(h,"width","100%"),a(h,"height","100%"),a(h,"left","0"),a(h,"top","0"),a(h,"margin","0 !important"),a(h,"z-index","0"),a(h,"pointer-events","none"),a(N,"*",$([a(h,"pointer-events","auto")]))]))}}))])),a(br,L(p.fH),$([a(h,"position","relative"),a(h,"border","none"),a(h,"flex-shrink","0"),a(h,"display","flex"),a(h,"flex-direction","row"),a(h,"flex-basis","auto"),a(h,"resize","none"),a(h,"font-feature-settings","inherit"),a(h,"box-sizing","border-box"),a(h,"margin","0"),a(h,"padding","0"),a(h,"border-width","0"),a(h,"border-style","solid"),a(h,"font-size","inherit"),a(h,"color","inherit"),a(h,"font-family","inherit"),a(h,"line-height","1"),a(h,"font-weight","inherit"),a(h,"text-decoration","none"),a(h,"font-style","inherit"),a(B,L(p.dK),$([a(h,"flex-wrap","wrap")])),a(B,L(p.eP),$([a(h,"-moz-user-select","none"),a(h,"-webkit-user-select","none"),a(h,"-ms-user-select","none"),a(h,"user-select","none")])),a(B,L(p.gd),$([a(h,"cursor","pointer")])),a(B,L(p.ge),$([a(h,"cursor","text")])),a(B,L(p.hl),$([a(h,"pointer-events","none !important")])),a(B,L(p.b5),$([a(h,"pointer-events","auto !important")])),a(B,L(p.a0),$([a(h,"opacity","0")])),a(B,L(p.aV),$([a(h,"opacity","1")])),a(B,L(R(p.gJ,p.a0))+":hover",$([a(h,"opacity","0")])),a(B,L(R(p.gJ,p.aV))+":hover",$([a(h,"opacity","1")])),a(B,L(R(p.gw,p.a0))+":focus",$([a(h,"opacity","0")])),a(B,L(R(p.gw,p.aV))+":focus",$([a(h,"opacity","1")])),a(B,L(R(p.cI,p.a0))+":active",$([a(h,"opacity","0")])),a(B,L(R(p.cI,p.aV))+":active",$([a(h,"opacity","1")])),a(B,L(p.ff),$([a(h,"transition",a(ee,", ",a(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(B,L(p.hB),$([a(h,"overflow","auto"),a(h,"flex-shrink","1")])),a(B,L(p.hC),$([a(h,"overflow-x","auto"),a(B,L(p.ag),$([a(h,"flex-shrink","1")]))])),a(B,L(p.hD),$([a(h,"overflow-y","auto"),a(B,L(p.ax),$([a(h,"flex-shrink","1")])),a(B,L(p.hJ),$([a(h,"flex-shrink","1")]))])),a(B,L(p.f4),$([a(h,"overflow","hidden")])),a(B,L(p.f6),$([a(h,"overflow-x","hidden")])),a(B,L(p.f7),$([a(h,"overflow-y","hidden")])),a(B,L(p.dI),$([a(h,"width","auto")])),a(B,L(p.b2),$([a(h,"border-width","0")])),a(B,L(p.fU),$([a(h,"border-style","dashed")])),a(B,L(p.fV),$([a(h,"border-style","dotted")])),a(B,L(p.fW),$([a(h,"border-style","solid")])),a(B,L(p.Z),$([a(h,"white-space","pre"),a(h,"display","inline-block")])),a(B,L(p.gW),$([a(h,"line-height","1.05"),a(h,"background","transparent"),a(h,"text-align","inherit")])),a(B,L(p.hJ),J$),a(B,L(p.ag),$([a(h,"display","flex"),a(h,"flex-direction","row"),a(N,L(p.fH),$([a(h,"flex-basis","0%"),a(B,L(p.fq),$([a(h,"flex-basis","auto")])),a(B,L(p.eo),$([a(h,"flex-basis","auto")]))])),a(N,L(p.cW),$([a(h,"align-self","stretch !important")])),a(N,L(p.d8),$([a(h,"align-self","stretch !important")])),a(N,L(p.dJ),$([a(h,"flex-grow","100000")])),a(N,L(p.b9),$([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"align-self","stretch")])),a(N,"u:first-of-type."+p.fC,$([a(h,"flex-grow","1")])),a(N,"s:first-of-type."+p.fA,$([a(h,"flex-grow","1"),a(N,L(p.fx),$([a(h,"margin-left","auto !important")]))])),a(N,"s:last-of-type."+p.fA,$([a(h,"flex-grow","1"),a(N,L(p.fx),$([a(h,"margin-right","auto !important")]))])),a(N,"s:only-of-type."+p.fA,$([a(h,"flex-grow","1"),a(N,L(p.fy),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(N,"s:last-of-type."+(p.fA+" ~ u"),$([a(h,"flex-grow","0")])),a(N,"u:first-of-type."+(p.fC+(" ~ s."+p.fA)),$([a(h,"flex-grow","0")])),xt(function(e){switch(e){case 0:return z($([a(h,"align-items","flex-start")]),$([a(h,"align-self","flex-start")]));case 1:return z($([a(h,"align-items","flex-end")]),$([a(h,"align-self","flex-end")]));case 2:return z($([a(h,"justify-content","flex-end")]),D);case 3:return z($([a(h,"justify-content","flex-start")]),D);case 4:return z($([a(h,"justify-content","center")]),D);default:return z($([a(h,"align-items","center")]),$([a(h,"align-self","center")]))}}),a(B,L(p.hM),$([a(h,"justify-content","space-between")])),a(B,L(p.ci),$([a(h,"align-items","baseline")]))])),a(B,L(p.ax),$([a(h,"display","flex"),a(h,"flex-direction","column"),a(N,L(p.fH),$([a(h,"flex-basis","0px"),a(h,"min-height","min-content"),a(B,L(p.d7),$([a(h,"flex-basis","auto")]))])),a(N,L(p.cW),$([a(h,"flex-grow","100000")])),a(N,L(p.dJ),$([a(h,"width","100%")])),a(N,L(p.fr),$([a(h,"width","100%")])),a(N,L(p.dI),$([a(h,"align-self","flex-start")])),a(N,"u:first-of-type."+p.fz,$([a(h,"flex-grow","1")])),a(N,"s:first-of-type."+p.fB,$([a(h,"flex-grow","1"),a(N,L(p.fy),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","0 !important")]))])),a(N,"s:last-of-type."+p.fB,$([a(h,"flex-grow","1"),a(N,L(p.fy),$([a(h,"margin-bottom","auto !important"),a(h,"margin-top","0 !important")]))])),a(N,"s:only-of-type."+p.fB,$([a(h,"flex-grow","1"),a(N,L(p.fy),$([a(h,"margin-top","auto !important"),a(h,"margin-bottom","auto !important")]))])),a(N,"s:last-of-type."+(p.fB+" ~ u"),$([a(h,"flex-grow","0")])),a(N,"u:first-of-type."+(p.fz+(" ~ s."+p.fB)),$([a(h,"flex-grow","0")])),xt(function(e){switch(e){case 0:return z($([a(h,"justify-content","flex-start")]),$([a(h,"margin-bottom","auto")]));case 1:return z($([a(h,"justify-content","flex-end")]),$([a(h,"margin-top","auto")]));case 2:return z($([a(h,"align-items","flex-end")]),$([a(h,"align-self","flex-end")]));case 3:return z($([a(h,"align-items","flex-start")]),$([a(h,"align-self","flex-start")]));case 4:return z($([a(h,"align-items","center")]),$([a(h,"align-self","center")]));default:return z($([a(h,"justify-content","center")]),D)}}),a(N,L(p.b9),$([a(h,"flex-grow","0"),a(h,"flex-basis","auto"),a(h,"width","100%"),a(h,"align-self","stretch !important")])),a(B,L(p.hM),$([a(h,"justify-content","space-between")]))])),a(B,L(p.gB),$([a(h,"display","-ms-grid"),a(N,".gp",$([a(N,L(p.fH),$([a(h,"width","100%")]))])),a(oh,z("display","grid"),$([z("display","grid")])),uh(function(e){switch(e){case 0:return $([a(h,"justify-content","flex-start")]);case 1:return $([a(h,"justify-content","flex-end")]);case 2:return $([a(h,"align-items","flex-end")]);case 3:return $([a(h,"align-items","flex-start")]);case 4:return $([a(h,"align-items","center")]);default:return $([a(h,"justify-content","center")])}})])),a(B,L(p.eT),$([a(h,"display","block"),a(N,L(p.fH+":first-child"),$([a(h,"margin","0 !important")])),a(N,L(p.fH+(Ci(3)+(":first-child + ."+p.fH))),$([a(h,"margin","0 !important")])),a(N,L(p.fH+(Ci(2)+(":first-child + ."+p.fH))),$([a(h,"margin","0 !important")])),xt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(h,"float","right"),a(B,"::after",$([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 3:return z(D,$([a(h,"float","left"),a(B,"::after",$([a(h,"content",'""'),a(h,"display","table"),a(h,"clear","both")]))]));case 4:return z(D,D);default:return z(D,D)}})])),a(B,L(p.gS),$([a(h,"white-space","pre-wrap !important"),a(h,"height","100%"),a(h,"width","100%"),a(h,"background-color","transparent")])),a(B,L(p.gV),$([a(B,L(p.hJ),$([a(h,"flex-basis","auto")]))])),a(B,L(p.gU),$([a(h,"white-space","pre-wrap !important"),a(h,"cursor","text"),a(N,L(p.gT),$([a(h,"white-space","pre-wrap !important"),a(h,"color","transparent")]))])),a(B,L(p.eU),$([a(h,"display","block"),a(h,"white-space","normal"),a(h,"overflow-wrap","break-word"),a(B,L(p.cU),$([a(h,"z-index","0"),a(N,L(p.fN),$([a(h,"z-index","-1")]))])),a(Ll,L(p.Z),$([a(h,"display","inline"),a(h,"white-space","normal")])),a(Ll,L(p.eU),$([a(h,"display","inline"),a(B,"::after",$([a(h,"content","none")])),a(B,"::before",$([a(h,"content","none")]))])),a(Ll,L(p.hJ),$([a(h,"display","inline"),a(h,"white-space","normal"),a(B,L(p.fq),$([a(h,"display","inline-block")])),a(B,L(p.gO),$([a(h,"display","flex")])),a(B,L(p.fN),$([a(h,"display","flex")])),a(B,L(p.fu),$([a(h,"display","flex")])),a(B,L(p.fO),$([a(h,"display","flex")])),a(B,L(p.hf),$([a(h,"display","flex")])),a(B,L(p.he),$([a(h,"display","flex")])),a(N,L(p.Z),$([a(h,"display","inline"),a(h,"white-space","normal")]))])),a(N,L(p.ag),$([a(h,"display","inline")])),a(N,L(p.ax),$([a(h,"display","inline-flex")])),a(N,L(p.gB),$([a(h,"display","inline-grid")])),xt(function(e){switch(e){case 0:return z(D,D);case 1:return z(D,D);case 2:return z(D,$([a(h,"float","right")]));case 3:return z(D,$([a(h,"float","left")]));case 4:return z(D,D);default:return z(D,D)}})])),a(B,".hidden",$([a(h,"display","none")])),a(B,L(p.h8),$([a(h,"font-weight","100")])),a(B,L(p.h$),$([a(h,"font-weight","200")])),a(B,L(p.h3),$([a(h,"font-weight","300")])),a(B,L(p.h5),$([a(h,"font-weight","400")])),a(B,L(p.h4),$([a(h,"font-weight","500")])),a(B,L(p.h7),$([a(h,"font-weight","600")])),a(B,L(p.fS),$([a(h,"font-weight","700")])),a(B,L(p.h_),$([a(h,"font-weight","800")])),a(B,L(p.h0),$([a(h,"font-weight","900")])),a(B,L(p.g$),$([a(h,"font-style","italic")])),a(B,L(p.hS),$([a(h,"text-decoration","line-through")])),a(B,L(p.ig),$([a(h,"text-decoration","underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(B,R(L(p.ig),L(p.hS)),$([a(h,"text-decoration","line-through underline"),a(h,"text-decoration-skip-ink","auto"),a(h,"text-decoration-skip","ink")])),a(B,L(p.h9),$([a(h,"font-style","normal")])),a(B,L(p.h1),$([a(h,"text-align","justify")])),a(B,L(p.cE),$([a(h,"text-align","justify-all")])),a(B,L(p.hZ),$([a(h,"text-align","center")])),a(B,L(p.h6),$([a(h,"text-align","right")])),a(B,L(p.h2),$([a(h,"text-align","left")])),a(B,".modal",$([a(h,"position","fixed"),a(h,"left","0"),a(h,"top","0"),a(h,"width","100%"),a(h,"height","100%"),a(h,"pointer-events","none")]))]))]),Tn=function(e){return $([a(br,".v-"+e,$([a(h,"font-feature-settings",'"'+(e+'"'))])),a(br,".v-"+(e+"-off"),$([a(h,"font-feature-settings",'"'+(e+'" 0'))]))])},fh=lr($([a(J,function(e){return a(br,".border-"+k(e),$([a(h,"border-width",k(e)+"px")]))},a(Lr,0,6)),a(J,function(e){return a(br,".font-size-"+k(e),$([a(h,"font-size",k(e)+"px")]))},a(Lr,8,32)),a(J,function(e){return a(br,".p-"+k(e),$([a(h,"padding",k(e)+"px")]))},a(Lr,0,24)),$([a(br,".v-smcp",$([a(h,"font-variant","small-caps")])),a(br,".v-smcp-off",$([a(h,"font-variant","normal")]))]),Tn("zero"),Tn("onum"),Tn("liga"),Tn("dlig"),Tn("ordn"),Tn("tnum"),Tn("afrc"),Tn("frac")])),mh=`
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
`,hh="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(p.fH)+(L(p.ag)+(" > "+(L(p.fH)+(" { flex-basis: auto !important; } "+(L(p.fH)+(L(p.ag)+(" > "+(L(p.fH)+(L(p.b9)+(" { flex-basis: auto !important; }}"+(sh+(dh+(gh+(ph+mh))))))))))))))),Da=function(e){return a(ee,"",e)},Aa=v(function(e,r){return{b6:r,G:D,aF:D,ah:e}}),Ba=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return ke(o,{aF:a(M,z(l,c),o.aF)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return ke(o,{G:a(M,{b6:`
}`,G:D,aF:d,ah:"@supports ("+(m+(":"+(s+(") {"+n.ah))))},o.G)});case 5:var g=i.a,f=i.b;return ke(o,{G:a(M,a(Ba,a(Aa,n.ah+(" + "+g),""),f),o.G)});case 1:var _=i.a,w=i.b;return ke(o,{G:a(M,a(Ba,a(Aa,n.ah+(" > "+_),""),w),o.G)});case 2:var _=i.a,w=i.b;return ke(o,{G:a(M,a(Ba,a(Aa,n.ah+(" "+_),""),w),o.G)});case 4:var x=i.a,S=i.b;return ke(o,{G:a(M,a(Ba,a(Aa,R(n.ah,x),""),S),o.G)});default:var y=i.a;return ke(o,{G:a(M,a(Ba,a(Aa,n.ah,""),y),o.G)})}});return b(Ge,t,n,r)}),bh=function(e){var r=function(i){return Da(a(J,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aF;return o.b?i.ah+("{"+(r(i.aF)+(i.b6+"}"))):""},t=function(i){var o=i;return R(n(o),Da(a(J,t,o.G)))};return Da(a(J,t,b(Ge,v(function(i,o){var l=i.a,c=i.b;return a(M,a(Ba,a(Aa,l,""),c),o)}),D,e)))},q$=R(hh,bh(R(vh,fh))),kn=Jo,U$=function(e){var r=e.eN;switch(r){case 0:return b(Qr,"div",D,$([b(Qr,"style",D,$([kn(q$)]))]));case 1:return kn("");default:return b(Qr,"elm-ui-static-rules",$([a(G$,"rules",wl(q$))]),D)}},_h=v(function(e,r){return cn(b(Ie,zd(e),Cd(),r))}),wh=function(e){return cn(b(Ie,v(function(r,n){var t=r.a,i=r.b;return b(Pd,t,i,n)}),Ld(),e))},yh=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.ha;return'"'+(r+'"')}},xh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},Sh=function(e){if(e.$===5){var r=e.a;return a(dt,xh,r.fk)}else return!1},aa=v(function(e,r){return le(e,r)<0?e:r}),St=T(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),ze=q(function(e,r,n,t){if(r.$===1)return $([n+("{"+(b(Ie,St(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gJ;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ie,St(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ie,St(!1),"",t)+`
}`))])}case 0:var l=b(Ie,St(!1),"",t);return $([n+("-fs:focus {"+(l+`
}`)),"."+(p.fH+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(L(p.fH)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(b(Ie,St(!1),"",t)+`
}`))])}}),Ch=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},Lh=function(e){if(e.$===5){var r=e.a;return H(a(ee,", ",a(J,Ch,r.fk)))}else return j},Ph=function(e){switch(e.$){case 0:return j;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return H("translate3d("+(ae(n)+("px, "+(ae(t)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,w=f.b,x=f.c,S=e.d,y="translate3d("+(ae(l)+("px, "+(ae(c)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),F="rotate3d("+(ae(_)+(", "+(ae(w)+(", "+(ae(x)+(", "+(ae(S)+"rad)")))))));return H(y+(" "+(C+(" "+F))))}},zl=T(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(ze,e,n,t,i);case 13:var o=r.a,l=r.b;return P(ze,e,n,"."+o,$([a(re,"box-shadow",l)]));case 12:var o=r.a,c=r.b,u=a(Ue,0,a(aa,1,1-c));return P(ze,e,n,"."+o,$([a(re,"opacity",ae(u))]));case 2:var m=r.a;return P(ze,e,n,".font-size-"+k(m),$([a(re,"font-size",k(m)+"px")]));case 1:var o=r.a,s=r.b,d=a(ee,", ",a(mn,Lh,s)),g=$([a(re,"font-family",a(ee,", ",a(J,yh,s))),a(re,"font-feature-settings",d),a(re,"font-variant",a(dt,Sh,s)?"small-caps":"normal")]);return P(ze,e,n,"."+o,g);case 3:var f=r.a,l=r.b,_=r.c;return P(ze,e,n,"."+f,$([a(re,l,_)]));case 4:var f=r.a,l=r.b,w=r.c;return P(ze,e,n,"."+f,$([a(re,l,Ta(w))]));case 5:var x=r.a,S=r.b,y=r.c,C=k(y)+"px",F=k(S)+"px",U="."+p.ag,Q="."+(p.dK+U),G="."+p.dS,Y="."+p.eU,Z="."+p.eT,V="."+p.dR,ne=ae(y/2)+"px",fe=ae(S/2)+"px",we="."+p.ax,f="."+x,me="."+p.fH;return lr($([P(ze,e,n,f+(U+(" > "+(me+(" + "+me)))),$([a(re,"margin-left",F)])),P(ze,e,n,f+(Q+(" > "+me)),$([a(re,"margin",ne+(" "+fe))])),P(ze,e,n,f+(we+(" > "+(me+(" + "+me)))),$([a(re,"margin-top",C)])),P(ze,e,n,f+(Z+(" > "+(me+(" + "+me)))),$([a(re,"margin-top",C)])),P(ze,e,n,f+(Z+(" > "+V)),$([a(re,"margin-right",F)])),P(ze,e,n,f+(Z+(" > "+G)),$([a(re,"margin-left",F)])),P(ze,e,n,R(f,Y),$([a(re,"line-height","calc(1em + "+(k(y)+"px)"))])),P(ze,e,n,"textarea"+(me+f),$([a(re,"line-height","calc(1em + "+(k(y)+"px)")),a(re,"height","calc(100% + "+(k(y)+"px)"))])),P(ze,e,n,f+(Y+(" > "+V)),$([a(re,"margin-right",F)])),P(ze,e,n,f+(Y+(" > "+G)),$([a(re,"margin-left",F)])),P(ze,e,n,f+(Y+"::after"),$([a(re,"content","''"),a(re,"display","block"),a(re,"height","0"),a(re,"width","0"),a(re,"margin-top",k(-1*(y/2|0))+"px")])),P(ze,e,n,f+(Y+"::before"),$([a(re,"content","''"),a(re,"display","block"),a(re,"height","0"),a(re,"width","0"),a(re,"margin-bottom",k(-1*(y/2|0))+"px")]))]));case 7:var x=r.a,se=r.b,G=r.c,xe=r.d,V=r.e,f="."+x;return P(ze,e,n,f,$([a(re,"padding",ae(se)+("px "+(ae(G)+("px "+(ae(xe)+("px "+(ae(V)+"px")))))))]));case 6:var x=r.a,se=r.b,G=r.c,xe=r.d,V=r.e,f="."+x;return P(ze,e,n,f,$([a(re,"border-width",k(se)+("px "+(k(G)+("px "+(k(xe)+("px "+(k(V)+"px")))))))]));case 8:var de=r.a,Be=T(function(Oe,rt,ln){e:for(;;)switch(ln.$){case 0:var _s=ln.a;return k(_s)+"px";case 1:var Br=z(Oe,rt);if(Br.a.$===1){if(Br.b.$===1)return Br.a,Br.b,"max-content";Br.a;var Un=Br.b.a;return"minmax(max-content, "+(k(Un)+"px)")}else if(Br.b.$===1){var Yn=Br.a.a;return Br.b,"minmax("+(k(Yn)+"px, max-content)")}else{var Yn=Br.a.a,Un=Br.b.a;return"minmax("+(k(Yn)+("px, "+(k(Un)+"px)")))}case 2:var iu=ln.a,Ir=z(Oe,rt);if(Ir.a.$===1){if(Ir.b.$===1)return Ir.a,Ir.b,k(iu)+"fr";Ir.a;var Un=Ir.b.a;return"minmax(max-content, "+(k(Un)+"px)")}else if(Ir.b.$===1){var Yn=Ir.a.a;return Ir.b,"minmax("+(k(Yn)+("px, "+(k(iu)+"frfr)")))}else{var Yn=Ir.a.a,Un=Ir.b.a;return"minmax("+(k(Yn)+("px, "+(k(Un)+"px)")))}case 3:var To=ln.a,ko=ln.b,Do=H(To),Ao=rt,Bo=ko;Oe=Do,rt=Ao,ln=Bo;continue e;default:var To=ln.a,ko=ln.b,Do=Oe,Ao=H(To),Bo=ko;Oe=Do,rt=Ao,ln=Bo;continue e}}),Te=function(Oe){return b(Be,j,j,Oe)};Te(de.hN.a);var Ze=Te(de.hN.b),qn=function(Oe){return"grid-template-rows: "+(Oe+";")}(a(ee," ",a(J,Te,de.hz))),Xa=function(Oe){return"-ms-grid-rows: "+(Oe+";")}(a(ee,Ze,a(J,Te,de.al))),tn=function(Oe){return"-ms-grid-columns: "+(Oe+";")}(a(ee,Ze,a(J,Te,de.al))),on="grid-row-gap:"+(Te(de.hN.b)+";"),_a="grid-column-gap:"+(Te(de.hN.a)+";"),ri=function(Oe){return"grid-template-columns: "+(Oe+";")}(a(ee," ",a(J,Te,de.al))),f=".grid-rows-"+(a(ee,"-",a(J,Zr,de.hz))+("-cols-"+(a(ee,"-",a(J,Zr,de.al))+("-space-x-"+(Zr(de.hN.a)+("-space-y-"+Zr(de.hN.b))))))),et=f+("{"+(ri+(qn+(_a+(on+"}"))))),zo="@supports (display:grid) {"+(et+"}"),Mo=f+("{"+(tn+(Xa+"}")));return $([Mo,zo]);case 9:var tr=r.a,ds=a(ee," ",$(["-ms-grid-row: "+(k(tr.ag)+";"),"-ms-grid-row-span: "+(k(tr.gG)+";"),"-ms-grid-column: "+(k(tr.f8)+";"),"-ms-grid-column-span: "+(k(tr.im)+";")])),ps=a(ee," ",$(["grid-row: "+(k(tr.ag)+(" / "+(k(tr.ag+tr.gG)+";"))),"grid-column: "+(k(tr.f8)+(" / "+(k(tr.f8+tr.im)+";")))])),f=".grid-pos-"+(k(tr.ag)+("-"+(k(tr.f8)+("-"+(k(tr.im)+("-"+k(tr.gG))))))),et=f+("{"+(ps+"}")),zo="@supports (display:grid) {"+(et+"}"),Mo=f+("{"+(ds+"}"));return $([Mo,zo]);case 11:var f=r.a,gs=r.b,hs=function(Oe){return b(zl,e,Oe,H(f))};return a(ka,hs,gs);default:var Or=r.a,_=Ph(Or),f=Sl(Or),ni=z(f,_);if(!ni.a.$&&!ni.b.$){var x=ni.a.a,bs=ni.b.a;return P(ze,e,n,"."+x,$([a(re,"transform",bs)]))}else return D}}),zh=v(function(e,r){return wh(a(J,function(n){var t=b(zl,e,n,j);return z(wt(n),a(_h,wl,t))},r))}),Li=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ee,"",a(J,n,r))+"}"))}),Y$=T(function(e,r,n){var t=n.a,i=n.b;return $([a(Li,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(Li,"."+(e+("."+(r+("> ."+(p.Z+(", ."+(e+(" ."+(r+(" > ."+p.Z)))))))))),i)])}),Mh=T(function(e,r,n){var t=r.a,i=r.b,o=ue(e,n)?e:n+(" ."+e);return a(ee," ",R(b(Y$,o,p.hK,i),b(Y$,o,p.gx,t)))}),Th=v(function(e,r){var n=ue(e,r)?e:r+(" ."+e);return a(ee," ",$([a(Li,"."+(n+("."+(p.hK+(", "+("."+(n+(" ."+p.hK))))))),$([z("line-height","1")])),a(Li,"."+(n+("."+(p.hK+("> ."+(p.Z+(", ."+(n+(" ."+(p.hK+(" > ."+p.Z)))))))))),$([z("vertical-align","0"),z("line-height","1")]))]))}),Z$=T(function(e,r,n){return{gG:r/e,bj:e,fl:n}}),Q$=v(function(e,r){return b(Ge,v(function(n,t){return e(n)?a(M,n,t):t}),D,r)}),kh=function(e){if(e.b){var r=e.a,n=e.b;return H(b(Ie,Ue,r,n))}else return j},K$=function(e){if(e.b){var r=e.a,n=e.b;return H(b(Ie,aa,r,n))}else return j},X$=function(e){var r=$([e.f_,e.fM,e.gi,e.g5]),n=a(Ce,e.gi,K$(r)),t=a(Ce,e.fM,K$(a(Q$,function(m){return!ue(m,n)},r))),i=a(Ce,e.f_,kh(r)),o=1/(i-t),l=1-i,c=1/(i-n),u=1-i;return{f_:b(Z$,o,i-t,l),d5:b(Z$,c,i-n,u)}},ev=function(e){return z($([z("display","block")]),$([z("display","inline-block"),z("line-height",ae(e.gG)),z("vertical-align",ae(e.fl)+"em"),z("font-size",ae(e.bj)+"em")]))},Dh=function(e){return b(Ie,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fv;if(i.$===1)return n;var o=i.a;return H(z(ev(function(l){return l.d5}(X$(o))),ev(function(l){return l.f_}(X$(o)))))}else return n;else return n}),j,e)},Ah=function(e){var r=function(o){if(o.$===4){var l=o.b;return H("@import url('"+(l+"');"))}else return j},n=function(o){o.a;var l=o.b,c=a(ee,`
`,a(mn,r,l));return c},t=a(J,i$,e),i=function(o){var l=o.a,c=o.b,u=Dh(c);if(u.$===1)return a(ee,"",a(J,Th(l),t));var m=u.a;return a(ee,"",a(J,a(Mh,l,m),t))};return R(a(ee,`
`,a(J,n,e)),a(ee,`
`,a(J,i,e)))},Bh=function(e){if(e.$===1){var r=e.a,n=e.b;return H(z(r,n))}else return j},rv=v(function(e,r){var n=v(function(l,c){return{cA:R(c.cA,b(zl,e,l,j)),bU:function(){var u=Bh(l);if(u.$===1)return c.bU;var m=u.a;return a(M,m,c.bU)}()}}),t=b(Ie,n,{cA:D,bU:D},r),i=t.bU,o=t.cA;return R(Ah(i),Da(o))}),nv=v(function(e,r){var n=e.eN;switch(n){case 0:return b(Qr,"div",D,$([b(Qr,"style",D,$([kn(a(rv,e,r))]))]));case 1:return b(Qr,"div",D,$([b(Qr,"style",D,$([kn(a(rv,e,r))]))]));default:return b(Qr,"elm-ui-rules",$([a(G$,"rules",a(zh,e,r))]),D)}}),av=q(function(e,r,n,t){var i=a(nv,r,b(Ie,R$,z(H$,O$(r.gw)),n).b);return e?a(M,z("static-stylesheet",U$(r)),a(M,z("dynamic-stylesheet",i),t)):a(M,z("dynamic-stylesheet",i),t)}),tv=q(function(e,r,n,t){var i=a(nv,r,b(Ie,R$,z(H$,O$(r.gw)),n).b);return e?a(M,U$(r),a(M,i,t)):a(M,i,t)}),Ml=$e(45),Ct=$e(37),iv=function(e){return qd(bu(e))},Ih=vn("p"),cr=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return ue(o&t,o)}else{var i=e.a;return ue(i&n,i)}}),ov=vn("s"),lv=vn("u"),Tl=$e(44),Lt=$e(39),Pi=dr(function(e,r,n,t,i,o){var l=v(function(u,m){if(t.$===1){var s=t.a;return b(iv,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return P(av,!1,g,f,s);default:var g=i.a,f=i.b;return P(av,!0,g,f,s)}}())}else{var d=t.a;return a(function(){switch(u){case"div":return Ma;case"p":return Ih;default:return Qr(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return P(tv,!1,g,f,d);default:var g=i.a,f=i.b;return P(tv,!0,g,f,d)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var u=r.a;return a(l,u,n);default:var u=r.a,m=r.b;return b(Qr,u,n,$([a(l,m,$([Mr(p.fH+(" "+p.hJ))]))]))}}();switch(o){case 0:return a(cr,Lt,e)&&!a(cr,Tl,e)?c:a(cr,V$,e)?a(lv,$([Mr(a(ee," ",$([p.fH,p.hJ,p.b9,p.ay,p.fC])))]),$([c])):a(cr,j$,e)?a(ov,$([Mr(a(ee," ",$([p.fH,p.hJ,p.b9,p.ay,p.fA])))]),$([c])):c;case 1:return a(cr,Ct,e)&&!a(cr,Ml,e)?c:a(cr,N$,e)?a(ov,$([Mr(a(ee," ",$([p.fH,p.hJ,p.b9,p.fB])))]),$([c])):a(cr,E$,e)?a(lv,$([Mr(a(ee," ",$([p.fH,p.hJ,p.b9,p.fz])))]),$([c])):c;default:return c}}),Dn=function(e){return!e.b},kl=kn,Fh=p.fH+(" "+(p.Z+(" "+(p.dI+(" "+p.cV))))),Pt=function(e){return a(Ma,$([Mr(Fh)]),$([kl(e)]))},Eh=p.fH+(" "+(p.Z+(" "+(p.dJ+(" "+p.cW))))),cv=function(e){return a(Ma,$([Mr(Eh)]),$([kl(e)]))},Vh=T(function(e,r,n){var t=v(function(_,w){var x=_.a,S=_.b,y=w.a,C=w.b;switch(S.$){case 0:var F=S.a;return ue(e,Si),z(a(M,z(x,F(e)),y),C);case 1:var U=S.a;return ue(e,Si),z(a(M,z(x,a(U.gK,na,e)),y),Dn(C)?U.hT:R(U.hT,C));case 2:var Q=S.a;return z(a(M,z(x,ue(e,hr)?cv(Q):Pt(Q)),y),C);default:return z(y,C)}}),i=v(function(_,w){var x=w.a,S=w.b;switch(_.$){case 0:var y=_.a;return ue(e,Si),z(a(M,y(e),x),S);case 1:var C=_.a;return ue(e,Si),z(a(M,a(C.gK,na,e),x),Dn(S)?C.hT:R(C.hT,S));case 2:var F=_.a;return z(a(M,ue(e,hr)?cv(F):Pt(F),x),S);default:return z(x,S)}});if(r.$===1){var o=r.a,l=b(Ge,t,z(D,D),o),c=l.a,u=l.b,m=Dn(u)?n.hT:R(n.hT,u);if(m.b){var s=m;return yl({gK:P(Pi,n.aS,n.aU,n.aK,B$(b(F$,"nearby-element-pls",c,n.aN))),hT:s})}else return bt(A(Pi,n.aS,n.aU,n.aK,B$(b(F$,"nearby-element-pls",c,n.aN)),na))}else{var d=r.a,g=b(Ge,i,z(D,D),d),f=g.a,u=g.b,m=Dn(u)?n.hT:R(n.hT,u);if(m.b){var s=m;return yl({gK:P(Pi,n.aS,n.aU,n.aK,Ye(a(I$,f,n.aN))),hT:s})}else return bt(A(Pi,n.aS,n.aU,n.aK,Ye(a(I$,f,n.aN)),na))}}),ur=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),jh=function(e){return{$:10,a:e}},zi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(zi,n,o|t)}else{var i=e.a;return a(zi,i|n,t)}}),uv=function(e){return{$:1,a:e}},Mi=v(function(e,r){return{$:3,a:e,b:r}}),$v=function(e){return{$:2,a:e}},Nh=v(function(e,r){return a(Ma,$([Mr(function(){switch(e){case 0:return a(ee," ",$([p.bf,p.hJ,p.fu]));case 1:return a(ee," ",$([p.bf,p.hJ,p.fO]));case 2:return a(ee," ",$([p.bf,p.hJ,p.hf]));case 3:return a(ee," ",$([p.bf,p.hJ,p.he]));case 4:return a(ee," ",$([p.bf,p.hJ,p.gO]));default:return a(ee," ",$([p.bf,p.hJ,p.fN]))}}())]),$([function(){switch(r.$){case 3:return kn("");case 2:var n=r.a;return Pt(n);case 0:var t=r.a;return t(hr);default:var i=r.a;return a(i.gK,na,hr)}}()]))}),Hh=T(function(e,r,n){var t=a(Nh,e,r);switch(n.$){case 0:return e===5?uv($([t])):$v($([t]));case 1:var i=n.a;return e===5?uv(a(M,t,i)):a(Mi,i,$([t]));case 2:var o=n.a;return e===5?a(Mi,$([t]),o):$v(a(M,t,o));default:var i=n.a,o=n.b;return e===5?a(Mi,a(M,t,i),o):a(Mi,i,a(M,t,o))}}),vv=v(function(e,r){return{$:2,a:e,b:r}}),An=function(e){return{$:1,a:e}},ta=v(function(e,r){switch(r.$){case 0:return An(e);case 1:var n=r.a;return a(vv,n,e);default:var t=r.a,i=r.b;return a(vv,t,i)}}),Rh=function(e){switch(e){case 0:return p.cJ+(" "+p.dR);case 2:return p.cJ+(" "+p.dS);default:return p.cJ+(" "+p.fx)}},Oh=function(e){switch(e){case 0:return p.cK+(" "+p.fD);case 2:return p.cK+(" "+p.fw);default:return p.cK+(" "+p.fy)}},zt=v(function(e,r){return a(Fr,Kd(e),_u(r))}),Kr=q(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),Bn=function(e){return{$:1,a:e}},Gh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Bn(I(i,0,0));case 1:var o=r.a;return Bn(I(0,o,0));case 2:var l=r.a;return Bn(I(0,0,l));case 3:var n=r.a;return Bn(n);case 4:var n=r.a,f=r.b;return P(Kr,I(0,0,0),I(1,1,1),n,f);default:var n=r.a;return P(Kr,I(0,0,0),n,I(0,0,1),0)}case 1:var t=e.a,i=t.a,o=t.b,l=t.c;switch(r.$){case 0:var c=r.a;return Bn(I(c,o,l));case 1:var u=r.a;return Bn(I(i,u,l));case 2:var m=r.a;return Bn(I(i,o,m));case 3:var n=r.a;return Bn(n);case 4:var n=r.a,f=r.b;return P(Kr,t,I(1,1,1),n,f);default:var s=r.a;return P(Kr,t,s,I(0,0,1),0)}default:var t=e.a,i=t.a,o=t.b,l=t.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var c=r.a;return P(Kr,I(c,o,l),d,g,f);case 1:var u=r.a;return P(Kr,I(i,u,l),d,g,f);case 2:var m=r.a;return P(Kr,I(i,o,m),d,g,f);case 3:var _=r.a;return P(Kr,_,d,g,f);case 4:var w=r.a,x=r.b;return P(Kr,t,d,w,x);default:var S=r.a;return P(Kr,t,S,g,f)}}}),Ia=$e(7),fv=$e(36),mv=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(zi,n|i,t|o)}),sn=a(zi,0,0),Dl=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return I(sn,p.d7+(" "+t),$([b(ur,t,"height",n+"px")]));case 1:return I(a(oe,fv,sn),p.cV,D);case 2:var i=e.a;return i===1?I(a(oe,Ct,sn),p.cW,D):I(a(oe,Ct,sn),p.d8+(" height-fill-"+k(i)),$([b(ur,p.fH+("."+(p.ax+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,l=e.b,c="min-height-"+k(o),u=b(ur,c,"min-height",k(o)+"px !important"),m=Dl(l),s=m.a,d=m.b,g=m.c;return I(a(oe,Ml,s),c+(" "+d),a(M,u,g));default:var f=e.a,l=e.b,c="max-height-"+k(f),u=b(ur,c,"max-height",k(f)+"px"),_=Dl(l),s=_.a,d=_.b,g=_.c;return I(a(oe,Ml,s),c+(" "+d),a(M,u,g))}},sv=$e(38),Al=function(e){switch(e.$){case 0:var r=e.a;return I(sn,p.fq+(" width-px-"+k(r)),$([b(ur,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return I(a(oe,sv,sn),p.dI,D);case 2:var n=e.a;return n===1?I(a(oe,Lt,sn),p.dJ,D):I(a(oe,Lt,sn),p.fr+(" width-fill-"+k(n)),$([b(ur,p.fH+("."+(p.ag+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,i=e.b,o="min-width-"+k(t),l=b(ur,o,"min-width",k(t)+"px"),c=Al(i),u=c.a,m=c.b,s=c.c;return I(a(oe,Tl,u),o+(" "+m),a(M,l,s));default:var d=e.a,i=e.b,o="max-width-"+k(d),l=b(ur,o,"max-width",k(d)+"px"),g=Al(i),u=g.a,m=g.b,s=g.c;return I(a(oe,Tl,u),o+(" "+m),a(M,l,s))}},Ti=$e(27),Wh=v(function(e,r){if(ue(e,Ti))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return ue(i,l)&&ue(i,o)&&ue(i,c)&&i>=0&&i<=24;default:return!1}}),Fa=$e(6),dv=$e(30),pv=$e(29),Jh=be(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var s=c.a,d=c.b;switch(s.$){case 0:var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 3:var F=s.a,U=s.b;if(a(cr,F,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=U+(" "+e),f=r,_=a(oe,F,n),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 1:var Q=s.a,g=e,f=r,_=n,w=t,x=i,S=a(M,Q,o),y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 4:var F=s.a,G=s.b;if(a(cr,F,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else if(a(Wh,F,G)){var g=wt(G)+(" "+e),f=r,_=a(oe,F,n),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=wt(G)+(" "+e),f=r,_=a(oe,F,n),w=t,x=a(M,G,i),S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 10:var F=s.a,Y=s.b,g=e,f=r,_=a(oe,F,n),w=a(Gh,t,Y),x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 7:var Z=s.a;if(a(cr,Fa,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else switch(Z.$){case 0:var V=Z.a,g=p.fq+(" width-px-"+k(V))+(" "+e),f=r,_=a(oe,Fa,n),w=t,x=a(M,b(ur,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=e+(" "+p.dI),f=r,_=a(oe,sv,a(oe,Fa,n)),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=Z.a;if(ne===1){var g=e+(" "+p.dJ),f=r,_=a(oe,Lt,a(oe,Fa,n)),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=e+(" "+(p.fr+(" width-fill-"+k(ne)))),f=r,_=a(oe,Lt,a(oe,Fa,n)),w=t,x=a(M,b(ur,p.fH+("."+(p.ag+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}default:var fe=Al(Z),we=fe.a,me=fe.b,on=fe.c,g=e+(" "+me),f=r,_=a(mv,we,a(oe,Fa,n)),w=t,x=R(on,i),S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 8:var se=s.a;if(a(cr,Ia,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else switch(se.$){case 0:var V=se.a,xe=k(V)+"px",de="height-px-"+xe,g=p.d7+(" "+(de+(" "+e))),f=r,_=a(oe,Ia,n),w=t,x=a(M,b(ur,de,"height ",xe),i),S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=p.cV+(" "+e),f=r,_=a(oe,fv,a(oe,Ia,n)),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.cW+(" "+e),f=r,_=a(oe,Ct,a(oe,Ia,n)),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=e+(" "+(p.d8+(" height-fill-"+k(ne)))),f=r,_=a(oe,Ct,a(oe,Ia,n)),w=t,x=a(M,b(ur,p.fH+("."+(p.ax+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}default:var Be=Dl(se),we=Be.a,me=Be.b,on=Be.c,g=e+(" "+me),f=r,_=a(mv,we,a(oe,Ia,n)),w=t,x=R(on,i),S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 2:var Te=s.a;switch(Te.$){case 0:var g=e,f=a(ta,"main",r),_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 1:var g=e,f=a(ta,"nav",r),_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 2:var g=e,f=a(ta,"footer",r),_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 3:var g=e,f=a(ta,"aside",r),_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 4:var Ze=Te.a;if(Ze<=1){var g=e,f=a(ta,"h1",r),_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else if(Ze<7){var g=e,f=a(ta,"h"+k(Ze),r),_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=e,f=a(ta,"h6",r),_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 9:var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 8:var g=e,f=r,_=n,w=t,x=i,S=a(M,a(zt,"role","button"),o),y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 5:var qn=Te.a,g=e,f=r,_=n,w=t,x=i,S=a(M,a(zt,"aria-label",qn),o),y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 6:var g=e,f=r,_=n,w=t,x=i,S=a(M,a(zt,"aria-live","polite"),o),y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;default:var g=e,f=r,_=n,w=t,x=i,S=a(M,a(zt,"aria-live","assertive"),o),y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}case 9:var Xa=s.a,tn=s.b,on=function(){switch(tn.$){case 3:return i;case 2:return tn.a,i;case 0:return tn.a,i;default:var et=tn.a;return R(i,et.hT)}}(),g=e,f=r,_=n,w=t,x=on,S=o,y=b(Hh,Xa,tn,l),C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e;case 6:var _a=s.a;if(a(cr,dv,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=Rh(_a)+(" "+e),f=r,_=function(Or){switch(_a){case 1:return a(oe,j$,Or);case 2:return a(oe,V$,Or);default:return Or}}(a(oe,dv,n)),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}default:var ri=s.a;if(a(cr,pv,n)){var g=e,f=r,_=n,w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}else{var g=Oh(ri)+(" "+e),f=r,_=function(Or){switch(ri){case 1:return a(oe,N$,Or);case 2:return a(oe,E$,Or);default:return Or}}(a(oe,pv,n)),w=t,x=i,S=o,y=l,C=d;e=g,r=f,n=_,t=w,i=x,o=S,l=y,c=C;continue e}}}else{var u=Sl(t);if(u.$===1)return{aK:a(M,Mr(e),o),aN:l,aS:n,aU:r,hT:i};var m=u.a;return{aK:a(M,Mr(e+(" "+m)),o),aN:l,aS:n,aU:r,hT:a(M,jh(t),i)}}}),qh={$:0},Uh=qh,$r=q(function(e,r,n,t){return b(Vh,e,t,nt(Jh,Xg(e),r,sn,Uh,D,D,Jg,ir(n)))}),dn=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Yh={fL:j,fT:j,hF:H({a3:0,b7:P(dn,155/255,203/255,1,1),eQ:z(0,0),bj:3})},Zh=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gJ;return l.$===1?ke(i,{gJ:H(o)}):i;case 1:var c=t.a,u=i.gw;return u.$===1?ke(i,{gw:H(c)}):i;default:var m=t.a,s=i.eN;return s.$===1?ke(i,{eN:H(m)}):i}}),n=function(t){return{gw:function(){var i=t.gw;if(i.$===1)return Yh;var o=i.a;return o}(),gJ:function(){var i=t.gJ;if(i.$===1)return 1;var o=i.a;return o}(),eN:function(){var i=t.eN;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(Ge,r,{gw:j,gJ:j,eN:j},e))},Qh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(hr);case 1:var t=r.a.hT,n=r.a.gK;return a(n,e(t),hr);case 2:var i=r.a;return Pt(i);default:return Pt("")}}),Kh=T(function(e,r,n){var t=Zh(e),i=function(){var o=t.eN;return o===1?A$(t):Gg(t)}();return a(Qh,i,P($r,hr,ra,r,Ye($([n]))))}),Mt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),gv=v(function(e,r){return{$:1,a:e,b:r}}),hv=function(e){return{$:2,a:e}},Xh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),Bl=function(e){return{$:3,a:e}},bv=$e(8),_v=$e(14),wv=$e(5),yv=$e(4),Ea=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ae(r)+("-"+(Ae(n)+("-"+(Ae(t)+("-"+Ae(i))))))},ki=ad,Il=nd,xv=v(function(e,r){return R(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ee,"-",Il(ki(n)));case 4:var n=e.a;return e.b,a(ee,"-",Il(ki(n)));default:var n=e.a.ha;return a(ee,"-",Il(ki(n)))}}())}),e3=function(){var e=$([Bl("Open Sans"),Bl("Helvetica"),Bl("Verdana"),Xh]);return $([a(ge,bv,b(Mt,"bg-"+Ea(P(dn,1,1,1,0)),"background-color",P(dn,1,1,1,0))),a(ge,_v,b(Mt,"fc-"+Ea(P(dn,0,0,0,1)),"color",P(dn,0,0,0,1))),a(ge,yv,hv(20)),a(ge,wv,a(gv,b(Ie,xv,"font-",e),e))])}(),r3=T(function(e,r,n){var t=e.hj;return b(Kh,t,a(M,gr(a(ee," ",$([p.hy,p.fH,p.hJ]))),R(e3,r)),n)}),Sv={$:3},Cv=function(e){return{$:2,a:e}},Fl=Yd,Lv=v(function(e,r){switch(r.$){case 1:var n=r.a;return yl({gK:v(function(o,l){return a(Fl,e,a(n.gK,o,l))}),hT:n.hT});case 0:var t=r.a;return bt(a(_t,Fl(e),t));case 2:var i=r.a;return Cv(i);default:return Sv}}),El=Lv,n3=Fl,a3=function(e){return{$:0,a:e}},Se=a3,t3=Qd,_r=t3,Pv={$:1},Di=function(e){return{$:5,a:e}},zv=Di(0),Nr=T(function(e,r,n){return P(dn,e/255,r/255,n/255,1)}),Mv=b(Nr,0,0,0),i3=Fr("d"),o3=Fr("fill"),l3=Fr("height"),Tv=gu("http://www.w3.org/2000/svg"),c3=Tv("path"),u3=Tv("svg"),$3=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},v3=function(e){var r=$3(e);return"rgba("+(k(Pe(r.hs*255))+(","+k(Pe(r.gz*255))+(","+k(Pe(r.fP*255))+(","+ae(r.fE)+")"))))},f3=Fr("viewBox"),m3=Fr("width"),Va=T(function(e,r,n){return a(u3,$([f3("0 0 100 100"),m3(k(e)),l3(k(e))]),$([a(c3,$([i3(n),o3(v3(r))]),D)]))}),s3={$:1},vr=s3,kv=function(e){return{$:7,a:e}},X=kv,he=v(function(e,r){return P($r,hr,ra,a(M,X(vr),a(M,pe(vr),e)),Ye($([r])))}),Dv=function(e){return{$:2,a:e}},ve=Dv(1),ia={gl:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gy:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gF:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hm:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hn:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",hr:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hL:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",$8:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ii:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",ft:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ja={cZ:260,bF:54},pn=function(e){return a(ge,bv,b(Mt,"bg-"+Ea(e),"background-color",e))},d3=$e(28),In=function(e){return a(ge,d3,b(Mt,"bc-"+Ea(e),"border-color",e))},Ai=1,Tr=v(function(e,r){return P($r,Ai,ra,a(M,gr(p.ga+(" "+p.bu)),a(M,pe(vr),a(M,X(vr),e))),Ye(r))}),p3=b(Nr,83,83,83),Av=q(function(e,r,n,t){return P(dn,e/255,r/255,n/255,t)}),Bi=P(Av,56,56,56,.25),He=Sv,Tt=je(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),kt=$e(2),oa=function(e){var r=e;return a(ge,kt,A(Tt,"p-"+k(e),r,r,r,r))},Bv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Iv=$e(3),Fv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Fn=function(e){return a(ge,Iv,b(Bv,a(Fv,e,e),e,e))},g3=P(Av,0,0,0,0),h3=function(e){return{$:4,a:e}},Vl=0,En=v(function(e,r){return P($r,Vl,ra,a(M,gr(p.bu+(" "+p.ay)),a(M,X(vr),a(M,pe(vr),e))),Ye(r))}),b3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gK(a(A$,{gw:{fL:j,fT:j,hF:j},gJ:1,eN:0},n.hT));case 2:var t=e.a;return xi(kn(t));default:return xi(kn(""))}},_3=v(function(e,r){return b3(e(r))}),w3=Zd,y3=v(function(e,r){return bt(b(w3,_3,e,r))}),Vn=function(e){return a(ge,_v,b(Mt,"fc-"+Ea(e),"color",e))},jl=b(Nr,195,195,195),jn=v(function(e,r){return{$:3,a:e,b:r}}),Ev=$e(13),x3=a(jn,Ev,p.h5),S3=$e(20),Vv=a(jn,S3,p.hD),la=function(e){return a(ge,yv,hv(e))},Nl=a(jn,Ev,p.fS),Hl=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return A(te,n,t,a(e,t,i),a(Hl,e,o),a(Hl,e,l))}),jv=v(function(e,r){if(ue(e,r)){var n=e;return a(ge,kt,A(Tt,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(ge,kt,A(Tt,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Nn=function(e){return Cv(e)},C3=function(e){return b(nl,T(function(r,n,t){return a(M,n,t)}),D,e)},L3=v(function(e,r){return{$:3,a:e,b:r}}),P3=v(function(e,r){return{$:2,a:e,b:r}}),z3=v(function(e,r){return{$:0,a:e,b:r}}),M3=v(function(e,r){return{$:1,a:e,b:r}}),kr=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),T3=P(kr,0/255,0/255,0/255,1),Ii=function(e){return{$:6,a:e}},k3=Ii(0),Fi=function(e){return{$:2,a:e}},D3={$:6},Nv=Fi(D3),Hv=T(function(e,r,n){if(r.$===1)return r.a,P($r,Ai,An("label"),e,Ye($([n])));var t=r.a,i=r.b,o=r.c,l=P($r,hr,ra,i,Ye($([o])));switch(t){case 2:return P($r,Ai,An("label"),a(M,gr(p.ci),e),Ye($([l,n])));case 3:return P($r,Ai,An("label"),a(M,gr(p.ci),e),Ye($([n,l])));case 0:return P($r,Vl,An("label"),a(M,gr(p.ci),e),Ye($([n,l])));default:return P($r,Vl,An("label"),a(M,gr(p.ci),e),Ye($([l,n])))}}),Rl=zt,gn=Di(1),Rv="Enter",A3=function(e){return{$:5,a:e}},Ov=function(e){if(e.$===1){var r=e.a;return Fi(A3(r))}else return ea},Gv=function(e){return e.$===1},B3=function(e){return{$:0,a:e}},Ol=hu,I3=v(function(e,r){return a(Ol,e,B3(r))}),Wv=function(e){return a(I3,"click",or(e))},F3=sd,E3=function(e){return{$:2,a:e}},V3=v(function(e,r){return a(Ol,e,E3(r))}),Jv=function(e){var r=function(t){var i=e(t);if(i.$===1)return F3("No key matched");var o=i.a;return or(o)},n=a(W,r,a(O,"key",za));return Le(a(V3,"keydown",a(fi,function(t){return z(t,!0)},n)))},j3=$e(21),ca=a(jn,j3,p.gd),qv=" ",Uv=function(e){return a(Fr,"tabIndex",k(e))},N3=a(_t,Le,Uv),H3=v(function(e,r){var n=r.eh,t=r.gL,i=r.f3,o=r.bJ,l=R($([Gv(n)?ea:Fn(6),Le(Wv(o(!i))),Nv,Jv(function(c){return ue(c,Rv)||ue(c,qv)?H(o(!i)):j}),N3(0),ca,k3,X(ve)]),e);return b(Hv,a(M,Le(a(Rl,"role","checkbox")),a(M,Le(a(Rl,"aria-checked",i?"true":"false")),a(M,Ov(n),l))),n,P($r,hr,ra,$([gn,pe(ve),X(vr)]),Ye($([t(i)]))))}),R3=T(function(e,r,n){return R(a(pt,e-Kn(n),bi(r)),n)}),Ei=Bs,Yv=function(e){var r=function(n){return n<10?k(n):bi(w$(87+n))};return e<16?r(e):R(Yv(e/16|0),r(a(Ei,16,e)))},O3=a(We,Yv,a(R3,2,"0")),Gl=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fE:i,fP:t,gz:n,hs:r}},G3=function(e){var r=Gl(e),n=r.hs,t=r.gz,i=r.fP;return a(ee,"",a(M,"#",a(J,a(We,Pe,O3),$([n*255,t*255,i*255]))))},Wl=$e(12),Zv=a(jn,Wl,p.hZ),Jl=Ii(1),er=Is,Hn=function(e){return e*er/180},W3=function(e){return{$:1,a:e}},ql=v(function(e,r){return{$:10,a:e,b:r}}),J3=$e(26),q3=function(e){return a(ql,J3,W3(-e))},Na=T(function(e,r,n){return P(dn,e,r,n,1)}),U3=dn,Y3=v(function(e,r){return{$:4,a:e,b:r}}),Z3=$e(24),Q3=function(e){return a(ql,Z3,a(Y3,I(0,0,1),e))},K3=$e(17),ua=function(e){return a(ge,K3,b(ur,"br-"+k(e),"border-radius",k(e)+"px"))},X3=function(e){return Da($([e.ec?"box-inset":"box-",Ae(e.eQ.a)+"px",Ae(e.eQ.b)+"px",Ae(e.a3)+"px",Ae(e.bj)+"px",Ea(e.b7)]))},eb=$e(19),rb=function(e){var r={a3:e.a3,b7:e.b7,ec:!1,eQ:e.eQ,bj:e.bj};return a(ge,eb,b(ur,X3(r),"box-shadow",Cl(r)))},Qv=v(function(e,r){return{$:12,a:e,b:r}}),Kv=$e(0),nb=function(e){return e?a(ge,Kv,a(Qv,"transparent",1)):a(ge,Kv,a(Qv,"visible",0))},Ul=b(Na,1,1,1),Yl=je(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Vi=function(e){return a(ge,Ti,A(Yl,"b-"+k(e),e,e,e,e))},ab=v(function(e,r){return a(ge,Ti,A(Yl,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Dt=function(e){var r=e.b3,n=e.cF,t=e.g1,i=e.hv;return ue(n,r)&&ue(t,i)?ue(n,i)?Vi(n):a(ab,t,n):a(ge,Ti,A(Yl,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},tb=function(e){return a(he,$([gr("focusable"),X(Se(14)),pe(Se(14)),Vn(Ul),gn,la(9),Zv,ua(3),In(e?b(Na,59/255,153/255,252/255):b(Na,211/255,211/255,211/255)),rb({a3:1,b7:e?P(U3,238/255,238/255,238/255,0):b(Na,238/255,238/255,238/255),eQ:z(0,0),bj:1}),pn(e?b(Na,59/255,153/255,252/255):Ul),Vi(e?0:1),_l(a(he,$([In(Ul),pe(Se(6)),X(Se(9)),Q3(Hn(-45)),Jl,gn,q3(1),nb(!e),Dt({b3:2,g1:2,hv:0,cF:0})]),He))]),He)},ib=zr("htmlFor"),Zl=v(function(e,r){if(r.$)return j;var n=r.a;return e(n)}),ji=v(function(e,r){if(r.$){var t=r.a;return Xe(t)}else{var n=r.a;return e(n)}}),Xv=q(function(e,r,n,t){return{gQ:r,g6:e,hd:n,hU:t}}),ob=Sp,lb=$d,cb=v(function(e,r){if(r.$)return Xe(e);var n=r.a;return Ee(n)}),ub=xp,$b=function(e){return a(ub,{f$:!1,g9:!1},e)},Ni=function(e){if(e.b){var r=e.a;return e.b,H(r)}else return j},vb=v(function(e,r){if(r.$){var t=r.a;return Xe(t)}else{var n=r.a;return Ee(e(n))}}),fb=function(e){return{$:2,a:e}},mb=function(e){return{$:0,a:e}},sb=function(e){return{$:1,a:e}},Ql=v(function(e,r){return Ur(r)-Ur(e)}),Kl=T(function(e,r,n){var t=Ur(n);return le(Ur(e),t)<1&&le(t,Ur(r))<1}),db=v(function(e,r){var n=function(i){return le(i,e)<0?Ee(i):Xe(sb(r))},t=b(Kl,"0","9",r)?Ee(a(Ql,"0",r)):b(Kl,"a","z",r)?Ee(10+a(Ql,"a",r)):b(Kl,"A","Z",r)?Ee(10+a(Ql,"A",r)):Xe(mb(r));return a(ji,n,t)}),ef=v(function(e,r){var n=Sa(r);if(n.$===1)return Ee(0);var t=n.a,i=t.a,o=t.b;return a(ji,function(l){return a(ji,function(c){return Ee(l+c*e)},a(ef,e,o))},a(db,e,i))}),pb=v(function(e,r){return 2<=e&&e<=36?a(ef,e,gl(r)):Xe(fb(e))}),gb=pb(16),hb=T(function(e,r,n){return P(kr,e,r,n,1)}),bb=q(function(e,r,n,t){return P(kr,e,r,n,t)}),At=As,_b=v(function(e,r){var n=a(At,10,e);return Pe(r*n)/n}),wb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=_$(n);if(t.b&&!t.b.b){var i=t.a;return lb($([i,i]))}else return n};return a(We,ki,a(We,function(n){return a(De,function(t){return b(ob,1,t,n)},$b(e))},a(We,Zl(Ni),a(We,De(function(n){return n.hU}),a(We,De(mn(jr)),a(We,cb("Parsing hex regex failed"),ji(function(n){var t=a(J,a(We,r,a(We,gb,vb($t))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,u=c.a.a,m=c.b,s=m.a.a;return Ee(P(bb,i/255,l/255,u/255,a(_b,2,s/255)))}else break e;else{var i=t.a.a,d=t.b,l=d.a.a,g=d.b,u=g.a.a;return Ee(b(hb,i/255,l/255,u/255))}else break e;return Xe("Parsing ints from hex failed")})))))))}(),yb=zr("id"),xb=vn("input"),Sb=vn("label"),rf=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Cb=rf(0),Lb=zr("name"),Pb=function(e){return z(e,!0)},zb=function(e){return{$:1,a:e}},Mb=v(function(e,r){return a(Ol,e,zb(r))}),Tb=v(function(e,r){return b(Ge,O,r,e)}),kb=a(Tb,$(["target","value"]),za),nf=function(e){return a(Mb,"input",a(fi,Pb,a(fi,e,kb)))},Db=a(jn,Wl,p.h2),af=a(jn,Wl,p.h6),Xl=function(e){return a(D$,5,e)},ec=function(e){return a(ge,wv,a(gv,b(Ie,xv,"ff-",e),e))},Ab=b(Nr,195,195,195),tf=b(Nr,69,69,69),Bb=rf(2),Ib={$:2},rc=Ib,Fb=$e(32),Eb=$e(31),of=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return H(i)}else return j;else{var t=n.a;return H(t)}}),j,e)},Vb=v(function(e,r){return a(Ce,r,b(Ge,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return H(z(i,l))}else return j;else{var i=t.a;return H(i)}}),j,e))}),lf=function(e){return b(Ge,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return H(i)}else return j;else{var t=n.a;return H(t)}}),j,e)},jb=$e(33),Nb=zr("max"),Hb=zr("min"),Rb=v(function(e,r){return a(ge,Iv,b(Bv,a(Fv,e,r),e,r))}),Ob=function(e){return a(zr,"step",e)},cf=zr("type"),uf=zr("value"),Ha=Dv,Gb=rp,$f=v(function(e,r){switch(r.$){case 0:return ea;case 2:var n=r.a;return Fi(n);case 6:var t=r.a;return Ii(t);case 5:var i=r.a;return Di(i);case 7:var t=r.a;return kv(t);case 8:var t=r.a;return T$(t);case 3:var t=r.a,i=r.b;return a(jn,t,i);case 4:var o=r.a,l=r.b;return a(ge,o,l);case 9:var c=r.a,u=r.b;return a(k$,c,a(Lv,e,u));case 1:var m=r.a;return Le(a(Gb,e,m));default:var s=r.a,d=r.b;return a(ql,s,d)}}),Wb=T(function(e,r,n){return a(En,$([X(ve),pe(a(Ce,ve,n)),gn]),$([a(he,$([X(Ha(Pe(e*1e4)))]),He),a(he,a(M,gn,a(J,$f(mt),r)),He),a(he,$([X(Ha(Pe(ce(1-e)*1e4)))]),He)]))}),Jb=T(function(e,r,n){return a(Tr,$([pe(ve),X(a(Ce,ve,n)),Jl]),$([a(he,$([pe(Ha(Pe(ce(1-e)*1e4)))]),He),a(he,a(M,Jl,a(J,$f(mt),r)),He),a(he,$([pe(Ha(Pe(e*1e4)))]),He)]))}),vf=v(function(e,r){var n=lf(e),t=of(e),i=function(){var S=z(n,t);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var y=S.a.a.a,C=S.b.a.a;return le(C,y)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cG-r.cr)/(r.cq-r.cr),l=r.ia,c=l,u=of(c),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),s=lf(c),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return k(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([a(re,"width",d),a(re,"height",m)]),_=a(Vb,e,z(5,5)),w=_.a,x=_.b;return b(Hv,$([Gv(r.eh)?ea:a(Rb,w,x),Nv,X(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return vr}()),pe(function(){if(t.$===1)return vr;if(t.a.$){var S=t.a;return S}else return vr}())]),r.eh,a(En,$([X(a(Ce,ve,n)),pe(a(Ce,Se(20),t))]),$([P($r,hr,An("input"),$([Ov(r.eh),a(ge,Fb,a(yt,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),a(ge,jb,a(yt,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),a(ge,Eb,a(yt,'input[type="range"].'+(g+"::-ms-thumb"),f)),Le(Mr(g+" ui-slide-bar focusable-parent")),Le(nf(function(S){var y=b$(S);if(y.$===1)return r.bJ(0);var C=y.a;return r.bJ(C)})),Le(cf("range")),Le(Ob(function(){var S=r.cD;if(S.$===1)return"any";var y=S.a;return ae(y)}())),Le(Hb(ae(r.cr))),Le(Nb(ae(r.cq))),Le(uf(ae(r.cG))),i?Le(a(Rl,"orient","vertical")):ea,X(i?a(Ce,Se(20),t):a(Ce,ve,n)),pe(i?a(Ce,ve,n):a(Ce,Se(20),t))]),Ye(D)),a(he,a(M,X(a(Ce,ve,n)),a(M,pe(a(Ce,Se(20),t)),R(e,$([Xl(i?b(Jb,o,a(M,gr("focusable-thumb"),c),n):b(Wb,o,a(M,gr("focusable-thumb"),c),t))])))),He)])))}),qb=b(Na,.5,.5,.5),ff=jr,mf=function(e){var r=e.cY,n=e.cG,t=e.cr,i=e.cq,o=e.cD,l=e.bJ;return a(he,$([X(ve)]),a(vf,$([Fn(2),Xl(a(he,$([X(ve),pe(Se(16)),gn,pn(tf),ua(4)]),He))]),{eh:a(Bb,D,a(En,$([X(ve)]),$([a(he,$([Db]),Nn(r)),a(he,$([X(ve),af,ec($([rc]))]),Nn(ae(n)))]))),cq:i,cr:t,bJ:l,cD:H(o),ia:ff($([X(Se(12)),pe(Se(12)),ua(4),Vi(0),In(qb),pn(Ab)])),cG:n}))},Ub=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Yb=v(function(e,r){switch(r.$){case 3:var n=r.a;return a(H3,D,{f3:n,gL:tb,eh:a(Cb,D,Nn(e)),bJ:L3(e)});case 0:var t=r.a,i=t.a,o=t.b,n=r.b;return mf({cY:e,cq:o,cr:i,bJ:z3(e),cD:.001*(o-i),cG:n});case 1:var l=r.a,i=l.a,o=l.b,n=r.b;return mf({cY:e,cq:o,cr:i,bJ:a(We,Pe,M3(e)),cD:1,cG:n});default:var n=r.a;return a(he,$([X(ve)]),Mn(a(Ma,D,$([a(Ma,$([a(_r,"margin-bottom","6px")]),$([a(Sb,$([ib(e)]),$([kl(e)]))])),a(xb,$([cf("color"),a(_r,"width","100%"),a(_r,"height","26px"),a(_r,"padding","0px"),yb(e),Lb(e),nf(function(c){return a(P3,e,a(Ub,T3,wb(c)))}),uf(G3(n))]),D)]))))}}),nc=b(Nr,255,255,255),Zb=function(e){return a(Tr,$([X(ve),Fn(8),a(jv,0,14),Dt({b3:1,g1:0,hv:0,cF:0}),In(Bi)]),$([a(he,$([la(16),Nl,Vn(nc)]),Nn(e.ha)),a(Tr,$([X(ve),Fn(6)]),C3(a(Hl,Yb,e.aO)))]))},Qb=function(e){return a(Tr,$([X(ve),pe(ve),Vn(jl),la(12),x3,Vv]),a(J,Zb,e))},Kb=y3(Qb),Xb=function(e){return a(Tr,$([X(ve),pe(ve)]),$([a(En,$([Fn(14),X(ve)]),D),a(El,h3,Kb(Xn(e).f9))]))},e1=function(e){return{$:6,a:e}},r1=q(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),n1=function(e){var r=e.cF,n=e.hv,t=e.b3,i=e.g1;if(ue(r,n)&&ue(r,t)&&ue(r,i)){var o=r;return a(ge,kt,A(Tt,"p-"+k(r),o,o,o,o))}else return a(ge,kt,A(Tt,P(r1,r,n,t,i),r,n,t,i))},a1=function(e){return{$:0,a:e}},t1=function(e){return{$:1,a:e}},i1=t1,o1=function(e){var r=e.b.Y;return Qn(r)},Hi=b(Nr,255,60,0),l1=function(e){var r=e.b.Y;e.b.s;var n=e.b.ao;return Qn(r)+1+Qn(n)},c1=function(e){var r=z(o1(e),l1(e)-1),n=r.a,t=r.b;return a(he,$([X(ve),gn]),a(vf,$([Xl(a(En,$([X(ve),pe(Se(4)),gn,pn(tf),ua(2)]),$([a(he,$([X(Ha(n)),pe(ve),pn(Hi),ua(2)]),He),a(he,$([X(Ha(t-n))]),He)])))]),{eh:i1(""),cq:t,cr:0,bJ:a(We,Pe,a1),cD:H(1),ia:ff($([X(Se(12)),pe(Se(12)),ua(6),pn(Hi)])),cG:n}))},u1=Ii(2),Ri=b(Nr,220,220,220),$1=function(e){var r=e.a,n=function(){return r.$?$([Vn(Ri)]):$([Vn(Hi)])}();return a(he,R(n,$([la(14),u1,af,ec($([rc]))])),Nn(a(C$,3,Xn(e).H)))},v1=function(e){e.a;var r=e.b.Y;return a(De,function(n){return Pe(60/(Xn(e).H-n))},a(De,a(We,i$,function(n){return n.H}),Ni(a(d$,59,r))))},f1=function(e){var r=v1(e);if(r.$===1)return He;var n=r.a;return a(he,$([la(14),Vn(jl),ec($([rc]))]),Nn(k(n)+" FPS"))},sf={$:1},m1={$:3},s1={$:2},d1={$:8},p1=cn,g1=v(function(e,r){return a(qo,e,p1(r))}),h1=g1("disabled"),b1=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},_1=function(e){return a(dt,b1,e)?ea:gr("focusable")},Oi=a(_t,Le,Wv),df=v(function(e,r){var n=r.eR,t=r.eh;return P($r,hr,ra,a(M,X(vr),a(M,pe(vr),a(M,gr(p.cb+(" "+(p.ay+(" "+(p.hE+(" "+p.eP)))))),a(M,ca,a(M,_1(e),a(M,Fi(d1),a(M,Le(Uv(0)),function(){if(n.$===1)return a(M,Le(h1(!0)),e);var i=n.a;return a(M,Oi(i),a(M,Jv(function(o){return ue(o,Rv)||ue(o,qv)?H(i):j}),e))}()))))))),Ye($([t])))}),pf=v(function(e,r){return a(df,D,{eh:a(he,$([X(Se(36)),oa(3),Vn(r),Zv,la(12),Nl,In(r),Vi(1),ua(4)]),Nn("REC")),eR:H(e)})}),gf=T(function(e,r,n){return a(df,D,{eh:Mn(b(Va,20,n,e)),eR:H(r)})}),w1=function(e){var r=e.a;e.b.Y,e.b.s;var n=e.b.ao;return a(En,D,$([a(he,$([X(Se(40))]),function(){switch(r.$){case 0:return a(pf,sf,Hi);case 1:return a(pf,s1,Ri);default:return He}}()),a(he,$([X(Se(28))]),function(){switch(r.$){case 0:return He;case 1:return Dn(n)?He:b(gf,ia.hn,m1,Ri);default:return b(gf,ia.hm,sf,Ri)}}())]))},y1=function(e){return a(Tr,$([X(ve)]),$([c1(e),a(En,$([X(ve),Fn(14),a(jv,0,6),gn]),$([w1(e),f1(e),$1(e)]))]))},x1=function(e){return a(Tr,$([X(ve),Fn(14),n1({b3:20,g1:0,hv:0,cF:0}),Dt({b3:1,g1:0,hv:0,cF:0}),In(Bi)]),$([a(he,$([la(16),Nl,Vn(jl)]),Nn("Time Travel")),a(El,e1,y1(e))]))},S1=v(function(e,r){return a(Tr,$([Xn(r).dw.im>600?pn(p3):pn(g3),Dt({b3:0,g1:0,hv:1,cF:0}),In(Bi),X(Se(ja.cZ)),pe(ve)]),$([function(){return e?He:a(Tr,$([X(ve),pe(ve),oa(14),Fn(14)]),$([x1(r),Xb(r)]))}()]))}),C1=function(e){return{$:3,a:e}},hf=Di(2),L1=b(Nr,232,78,50),P1=b(Nr,48,48,48),z1=function(e){return a(zr,"href",ep(e))},M1=Fr("rel"),T1=zr("target"),bf=v(function(e,r){var n=r.fj,t=r.eh;return P($r,hr,An("a"),a(M,Le(z1(n)),a(M,Le(M1("noopener noreferrer")),a(M,Le(T1("_blank")),a(M,X(vr),a(M,pe(vr),a(M,gr(p.cb+(" "+(p.ay+(" "+p.eo)))),e)))))),Ye($([t])))}),Bt=zr("title"),k1=b(Nr,31,161,242),D1=function(e){var r=T(function(o,l,c){var u=ue(l,e)?nc:P1;return a(he,$([fn(Bt(o)),Oi(C1(l)),ca,oa(7)]),Mn(b(Va,40,u,c)))}),n=a(Tr,$([zv]),$([b(r,"Configurations",0,ia.hL)])),t=a(Tr,D,$([a(bf,$([fn(Bt("Twitter")),hf,ca,oa(7)]),{eh:Mn(b(Va,40,k1,ia.$8)),fj:"https://twitter.com/AzizErkalSelman"}),a(bf,$([fn(Bt("Source Code")),hf,ca,oa(7)]),{eh:Mn(b(Va,40,L1,ia.gy)),fj:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(he,$([X(Se(ja.bF)),oa(4),Oi(Pv),Dt({b3:1,g1:0,hv:0,cF:0}),In(Bi),ca,fn(Bt("Activate Distraction Free Mode"))]),Mn(b(Va,46,nc,ia.ft)));return a(Tr,$([X(Se(ja.bF)),pe(ve),Vv,pn(Mv)]),$([i,n,t]))},A1=function(e){var r=a(he,$([X(Se(ja.bF)),zv,oa(4),Oi(Pv),ca,fn(Bt("Deactivate Distraction Free Mode (A)"))]),Mn(b(Va,46,Mv,ia.ft)));return e.bx?r:a(En,$([X(Se(ja.bF+ja.cZ)),pe(ve)]),$([D1(e.bq),a(S1,e.bq,e.S)]))},B1=T(function(e,r,n){var t=Ng(n.S),i=Xn(n.S);return b(r3,{hj:$([Rg({fL:j,fT:j,hF:j})])},$([X(Se(ut(i.dw.im))),pe(Se(ut(i.dw.gG))),fn(a(_r,"-webkit-font-smoothing","antialiased")),fn(a(_r,"pointer-events","none")),fn(a(_r,"touch-action","none")),fn(a(_r,"user-select","none")),_l(a(El,Vg,a(r,i,t))),_l(A1(n))]),Mn(a(n3,xi(jg),a(e,i,t))))}),I1=dr(function(e,r,n,t,i,o){var l=v(function(u,m){return z(P(Dg,r,o,u,m),M$)}),c=function(u){var m=a(l$,n,u.gX);return z({bq:0,bx:!0,S:a(Ag,m,t),dH:0},M$)};return X0({gR:c,hV:Eg,ih:l,ij:a(B1,e,i)})}),F1=q(function(e,r,n,t){return Qe(I1,e,r,n,t,v(function(i,o){return He}),T(function(i,o,l){return l}))}),E1=function(e){return{}},V1=T(function(e,r,n){return{aO:n,gZ:r,ha:e}}),j1=function(e){return b(Ie,v(function(r,n){var t=r.a,i=r.b;return b(Pa,t,i,n)}),xl,e)},N1=T(function(e,r,n){return b(V1,e,r,j1(n))}),_f=N1,It=T(function(e,r,n){var t=r.a,i=r.b;return z(e,a(g$,z(t,i),n))}),H1=T(function(e,r,n){var t=r.a,i=r.b;return z(e,a(h$,z(t,i),n))}),R1=$([b(_f,"Parameters",!0,$([b(H1,"number of tree blocks",z(1,20),16),b(It,"turning speed of the tree",z(.1,4),1)])),b(_f,"Lighting",!0,$([b(It,"azimuth for third light",z(-er,er),1),b(It,"elevation for third light",z(-er,er),-2),b(It,"azimuth for fourth light",z(-er,er),1),b(It,"elevation for fourth light",z(-er,er),-2)]))]),O1=v(function(e,r){return r}),hn=function(e){return e},Ft=function(e){return hn(er*(e/180))},bn=Ws,G1=v(function(e,r){var n=e,t=r,i=t.dO-n.dO,o=t.is-n.is,l=t.io-n.io,c=a(Ue,ce(l),a(Ue,ce(o),ce(i)));if(c){var u=i/c,m=o/c,s=l/c,d=bn(s*s+m*m+u*u);return H({io:s/d,is:m/d,dO:u/d})}else return j}),Gi=function(e){return e},ac=v(function(e,r){var n=e,t=r;return{io:t.is*n.dO-t.dO*n.is,is:t.dO*n.io-t.io*n.dO,dO:t.io*n.is-t.is*n.io}}),Wi=function(e){var r=e,n=a(Ue,ce(r.io),a(Ue,ce(r.is),ce(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=bn(o*o+i*i+t*t);return H({io:o/l,is:i/l,dO:t/l})}else return j},Ji=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),W1=v(function(e,r){var n=e,t=r;return t.io*n.io+t.is*n.is+t.dO*n.dO}),wf=v(function(e,r){var n=e,t=r;return le(t,n)>0}),J1=v(function(e,r){var n=e,t=r;return le(t,n)<0}),q1=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dO:t.dO-n.dO}}),U1=v(function(e,r){var n=e,t=r,i=t.io*n.io+t.is*n.is+t.dO*n.dO;return{io:n.io*i,is:n.is*i,dO:n.dO*i}}),Y1=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},Xr=0,yf={io:0,is:0,dO:0},Z1=T(function(e,r,n){return a(Zl,function(t){var i=a(q1,a(U1,t,r),r);return a(Zl,function(o){var l=a(ac,r,e),c=a(W1,n,l),u=a(wf,Xr,c)?l:a(J1,Xr,c)?Y1(l):yf;return a(De,function(m){return I(t,o,m)},Wi(u))},Wi(i))},Wi(e))}),Q1=function(e){var r=e,n=ce(r.dO),t=ce(r.is),i=ce(r.io);if(le(i,t)<1)if(le(i,n)<1){var o=bn(r.dO*r.dO+r.is*r.is);return{io:0,is:-r.dO/o,dO:r.is/o}}else{var o=bn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dO:0}}else if(le(t,n)<1){var o=bn(r.dO*r.dO+r.io*r.io);return{io:r.dO/o,is:0,dO:-r.io/o}}else{var o=bn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dO:0}}},tc=function(e){var r=Q1(e),n=r,t=n,i=e,o=i,l={io:o.is*t.dO-o.dO*t.is,is:o.dO*t.io-o.io*t.dO,dO:o.io*t.is-o.is*t.io};return z(r,l)},Ra=function(e){var r=e;return r},Hr=function(e){return e},K1=v(function(e,r){var n=tc(e),t=n.a,i=n.b;return Hr({df:r,dM:t,dN:i,dP:e})}),X1=function(e){var r=a(Ji,e.bb,e.d2),n=Ra(e.fi),t=a(ac,r,n),i=b(Z1,r,n,t);if(i.$){var m=Wi(r);if(m.$){var d=tc(e.fi),g=d.a,f=d.b;return Hr({df:e.d2,dM:f,dN:e.fi,dP:g})}else{var s=m.a;return a(K1,s,e.d2)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return Hr({df:e.d2,dM:u,dN:c,dP:l})}},fr={io:0,is:0,dO:0},e_=function(e){return{$:0,a:e}},Fe=function(e){var r=e;return ce(r)},qi=function(e){var r=e;return .5*r},r_=Vs,n_=function(e){var r=e;return r_(r)},a_=function(e){var r=qi(Fe(e.fm)),n=n_(r);return{dq:e_(n),dG:e.dG}},_n=function(e){return e},Ui=_n({io:0,is:1,dO:0}),t_=function(e){var r=e.bb,n=e.d2,t=e.fi;return a_({fm:Ft(40),dG:X1({d2:Gi(n),bb:Gi(r),fi:a(Ce,Ui,a(G1,fr,Gi(t)))})})},i_=t_({d2:{io:5,is:5,dO:12},bb:{io:0,is:1,dO:0},fi:{io:0,is:1,dO:0}}),ic=function(e){return e},xf=T(function(e,r,n){return le(n,e)<0?e:le(n,r)>0?r:n}),o_=function(e){var r=e;return r},l_=function(e){var r=b(xf,1667,25e3,o_(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ic({io:n,is:t})},c_=function(e){return e},u_=function(e){return{$:0,a:e}},$_=u_,v_={$:3},f_=v_,m_=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),s_=m_,d_=function(e){return{$:1,a:e}},p_=d_,g_=function(e){return a(Fr,"height",k(e))},h_=iv,b_=function(e){return{$:2,a:e}},__=b_,w_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Pe(c*1e3)/1e3},l=function(c){return Pe(c*1e4)/100};return Da($(["rgba(",ae(l(r)),"%,",ae(l(n)),"%,",ae(l(t)),"%,",ae(o(i)),")"]))},y_=v(function(e,r){switch(r.$){case 0:return a(Qp,e,r);case 1:return a(Kp,e,r);case 2:return a(Xp,e,r);case 3:return a(e0,e,r);case 4:return a(r0,e,r);default:return a(n0,e,r)}}),x_=v(function(e,r){switch(r.$){case 0:return a(Pp,e,r);case 1:return a(zp,e,r);case 2:return a(Mp,e,r);case 3:return a(Tp,e,r);case 4:return a(kp,e,r);case 5:return a(Dp,e,r);case 6:return a(Ap,e,r);case 7:return a(Bp,e,r);default:return Ip(e)}}),S_=T(function(e,r,n){return b(Zp,e,r,n)}),Sf=function(e){var r=e;return r},Oa=m0,oc=P(Oa,1,1,1,1),en=T(function(e,r,n){return a(J,function(t){return a(t,r,n)},e)}),C_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),L_=v(function(e,r){var n=e,t=r.io,i=r.is;return b(C_,n*t/i,n,n*(1-t-i)/i)}),Et=l0,P_=function(e){var r=e.a,n=e.b,t=e.c;return b(Et,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},Yi=v(function(e,r){return P_(a(L_,e,r))}),Cf=v(function(e,r){return{ef:ue(e.ef,r.ef),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,L:r.L+(e.L*r.t+e.M*r.w+e.N*r.z)*r.cB,M:r.M+(e.L*r.u+e.M*r.x+e.N*r.A)*r.cB,N:r.N+(e.L*r.v+e.M*r.y+e.N*r.B)*r.cB,cB:e.cB*r.cB}}),rn=b0,z_=function(e){return rn({ep:e.t,eq:e.w,er:e.z,es:e.L,et:e.u,eu:e.x,ev:e.A,ew:e.M,ex:e.v,ey:e.y,ez:e.B,eA:e.N,eB:0,eC:0,eD:0,eE:1})},lc=je(function(e,r,n,t,i){var o=t.ef?1:-1,l=P(Oa,t.cB,t.cB,t.cB,o);return Qe(i,e,l,z_(t),t.ef,r,n)}),Lf=dr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,m=r,s=n,d=a(Cf,l,t),g=c,f=o;e=u,r=m,n=s,t=d,i=g,o=f;continue e;case 1:var _=i.b,w=a(M,A(lc,e,r,n,t,_),o.Q);return{Q:w,aa:o.aa,hG:o.hG};case 3:var x=i.b,S=a(M,A(lc,e,r,n,t,x),o.aa);return{Q:o.Q,aa:S,hG:o.hG};case 2:var y=i.a,C=a(M,A(lc,e,r,n,t,y),o.hG);return{Q:o.Q,aa:o.aa,hG:C};default:var F=i.a;return b(Ie,P(Lf,e,r,n,t),o,F)}}),M_=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Pf=M_,cc=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),T_=function(e){var r=e.aj,n=e.ad,t=e.ac;return P(cc,518,r,n,t)},k_=v(function(e,r){return{$:6,a:e,b:r}}),D_=k_,zf=$([T_({ac:1,ad:0,aj:!1}),P(Pf,!1,!1,!1,!1),a(D_,0,1)]),Ga=519,uc=8,Mf=15,Wa=7681,A_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Me=Lp,B_=v(function(e,r){return{$:0,a:e,b:r}}),I_=B_({d_:1,eb:0,eN:5}),wr=i0,F_=I_($([{e_:a(wr,-1,-1)},{e_:a(wr,1,-1)},{e_:a(wr,-1,1)},{e_:a(wr,1,1)}])),E_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e_"},uniforms:{}},V_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:m,k:s}}}}}}}}}}}},$c=T(function(e,r,n){var t=e.dr,i=e.c6,o=e.dL,l=v(function(m,s){var d=m;return s(d)}),c=v(function(m,s){var d=m;return s(d)}),u=function(m){return a(We,l(m.bP),a(We,c(m.bA),a(We,c(m.bY),c(m.bZ))))};return a(u,n,a(u,r,b(V_,t,i,o)))}),vc=function(e){return b($c,{c6:e.c6,dr:e.dr,dL:e.dL},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ},{bA:e.bA,bP:e.bP,bY:e.bY,bZ:e.bZ})},fc=function(e){return A(Me,$([vc(e),P(Pf,!1,!1,!1,!1)]),E_,A_,F_,{})},j_=fc({bA:Wa,c6:0,dr:uc,bP:Ga,dL:Mf,bY:Wa,bZ:Wa}),N_=516,Tf=5386,rr=7680,H_=function(e){return a(At,2,e+4)},kf=function(e){return fc({bA:rr,c6:Mf,dr:uc,bP:N_,dL:H_(e),bY:Tf,bZ:Tf})},R_=T(function(e,r,n){return lr($([b(en,e,n,zf),$([kf(r),j_])]))}),O_=v(function(e,r){return lr(a(Ku,R_(e),r))}),G_=function(e){var r=e.aj,n=e.ad,t=e.ac;return P(cc,513,r,n,t)},W_=G_({ac:1,ad:0,aj:!0}),J_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:m}}}}}}}}}}},q_=function(e){var r=e.cy,n=e.cf,t=e.b1,i=e.b_,o=e.b7,l=e.fE,c=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,w=m.c;return J_(s)(d)(g)(f)(_)(w)(r)(n)(t)(i)});return a(c,o,l)},U_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Df=v(function(e,r){var n=e,t=r;return b(U_,32774,n,t)}),Y_=1,Af=771,Z_=770,mc=q_({b_:0,fE:a(Df,Y_,Af),b1:0,b7:a(Df,Z_,Af),cf:0,cy:0}),Ja=$([W_,mc]),Q_=function(e){var r=e;return r.eG},K_=function(e){var r=e;return r.eH},Bf=function(e){var r=e;return r.eI},X_=function(e){var r=e;return r.eJ},e2=function(e){var r=e;return r.eK},If=function(e){var r=e;return r.eL},wn=v(function(e,r){var n=e,t=r;return t-n}),Ff=function(e){return I(a(wn,X_(e),Q_(e)),a(wn,e2(e),K_(e)),a(wn,If(e),Bf(e)))},$a=function(e){var r=e;return r.df},Ef=function(e){var r=e;return $a(r)},r2=function(e){return e},n2=function(e){return Hr({df:r2({io:e.L,is:e.M,dO:e.N}),dM:_n({io:e.t,is:e.u,dO:e.v}),dN:_n({io:e.w,is:e.x,dO:e.y}),dP:_n({io:e.z,is:e.A,dO:e.B})})},sc=v(function(e,r){var n=e,t=r,i=n.dP,o=i,l=n.dN,c=l,u=n.dM,m=u;return{io:t.io*m.io+t.is*m.is+t.dO*m.dO,is:t.io*c.io+t.is*c.is+t.dO*c.dO,dO:t.io*o.io+t.is*o.is+t.dO*o.dO}}),Vf=v(function(e,r){var n=e,t=r,i=n.df,o=i,l=t.io-o.io,c=t.is-o.is,u=t.dO-o.dO,m=n.dP,s=m,d=n.dN,g=d,f=n.dM,_=f;return{io:l*_.io+c*_.is+u*_.dO,is:l*g.io+c*g.is+u*g.dO,dO:l*s.io+c*s.is+u*s.dO}}),Rn=function(e){var r=e;return r.dM},On=function(e){var r=e;return r.dN},Gn=function(e){var r=e;return r.dP},jf=v(function(e,r){return{df:a(Vf,e,$a(r)),dM:a(sc,e,Rn(r)),dN:a(sc,e,On(r)),dP:a(sc,e,Gn(r))}}),Wn=T(function(e,r,n){return{io:e,is:r,dO:n}}),Zi=function(e){var r=e;return r},Ve=v(function(e,r){var n=e,t=r;return a(Ue,n,t)}),Re=v(function(e,r){var n=e,t=r;return a(aa,n,t)}),a2=v(function(e,r){var n=Zi(r),t=Zi(e);return{eG:a(Ve,t.eG,n.eG),eH:a(Ve,t.eH,n.eH),eI:a(Ve,t.eI,n.eI),eJ:a(Re,t.eJ,n.eJ),eK:a(Re,t.eK,n.eK),eL:a(Re,t.eL,n.eL)}}),Dr=function(e){var r=e;return r},t2=function(e){var r=e;return I(r.io,r.is,r.dO)},Vt=v(function(e,r){var n=e,t=r;return t+n}),i2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=qi(Fe(t)),l=qi(Fe(n)),c=qi(Fe(i)),u=t2(r),m=u.a,s=u.b,d=u.c;return{eG:a(Vt,l,m),eH:a(Vt,o,s),eI:a(Vt,c,d),eJ:a(wn,l,m),eK:a(wn,o,s),eL:a(wn,c,d)}}),Nf=q(function(e,r,n,t){var i=n.f1,o=2*n.gE*r,l=2*n.gD*r,c=2*n.gC*r,u=i.dO*r,m=i.is*r,s=i.io*r,d=Dr(Gn(e)),g=ce(c*d.io)+ce(l*d.is)+ce(o*d.dO),f=Dr(On(e)),_=ce(c*f.io)+ce(l*f.is)+ce(o*f.dO),w=Dr(Rn(e)),x=ce(c*w.io)+ce(l*w.is)+ce(o*w.dO),S=a(i2,I(x,_,g),a(Vf,e,b(Wn,s,m,u)));if(t.$)return H(S);var y=t.a;return H(a(a2,y,S))}),dc=q(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,t=m;continue e;case 1:var s=i.a,d=P(Nf,e,r,s,n),l=e,c=r,u=d,m=o;e=l,r=c,n=u,t=m;continue e;case 2:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,t=m;continue e;case 3:var s=i.a,d=P(Nf,e,r,s,n),l=e,c=r,u=d,m=o;e=l,r=c,n=u,t=m;continue e;case 4:var g=i.a,l=e,c=r,u=P(dc,e,r,n,g),m=o;e=l,r=c,n=u,t=m;continue e;default:var f=i.a,_=i.b,w=a(jf,n2(f),e),x=r*f.cB,l=e,c=r,u=P(dc,w,x,n,$([_])),m=o;e=l,r=c,n=u,t=m;continue e}}else return n}),va=c0,fa=u0,ma=$0,Hf=function(e){return{$:4,a:e}},o2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(M,n,r);e=i,r=o;continue e}else return r}),jt=function(e){return Hf(a(o2,e,D))},l2={ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,L:0,M:0,N:0,cB:1},c2=function(e){var r=e;return r},Rf=fc({bA:Wa,c6:0,dr:uc,bP:Ga,dL:255,bY:Wa,bZ:Wa}),u2=function(e){var r=e,n=a(Ue,ce(r.io),a(Ue,ce(r.is),ce(r.dO)));if(n){var t=r.dO/n,i=r.is/n,o=r.io/n,l=bn(o*o+i*i+t*t);return l*n}else return Xr},yr={b1:0,f0:!1,cf:0,$7:0,cy:0,dD:0,io:0,is:0,dO:0},Ar=v(function(e,r){var n=e,t=r;return rn({ep:n.io,eq:n.cy,er:t.io,es:t.cy,et:n.is,eu:n.cf,ev:t.is,ew:t.cf,ex:n.dO,ey:n.b1,ez:t.dO,eA:t.b1,eB:n.dD,eC:n.$7,eD:t.dD,eE:t.$7})}),Nt=z({bG:a(Ar,yr,yr),cm:a(Ar,yr,yr),cn:a(Ar,yr,yr),co:a(Ar,yr,yr)},P(Oa,0,0,0,0)),ye=v(function(e,r){var n=r;return e*n}),Of=function(e){var r=e;return-r},Gf=514,Wf=function(e){var r=e.aj,n=e.ad,t=e.ac;return P(cc,515,r,n,t)},Jf=240,$2=$([Wf({ac:1,ad:0,aj:!0}),vc({bA:rr,c6:Jf,dr:0,bP:Gf,dL:0,bY:rr,bZ:rr}),mc]),v2=v(function(e,r){var n=e,t=r.hb,i=r.gu,o=r.fJ,l=Fe(t),c=l,u=Fe(i),m=u,s=n.dq;if(s.$){var g=s.a;return dl(m)?rn({ep:2/(o*g),eq:0,er:0,es:0,et:0,eu:2/g,ev:0,ew:0,ex:0,ey:0,ez:0,eA:-1,eB:0,eC:0,eD:0,eE:1}):rn({ep:2/(o*g),eq:0,er:0,es:0,et:0,eu:2/g,ev:0,ew:0,ex:0,ey:0,ez:-2/(m-c),eA:-(m+c)/(m-c),eB:0,eC:0,eD:0,eE:1})}else{var d=s.a;return dl(m)?rn({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-1,eA:-2*c,eB:0,eC:0,eD:-1,eE:0}):rn({ep:1/(o*d),eq:0,er:0,es:0,et:0,eu:1/d,ev:0,ew:0,ex:0,ey:0,ez:-(m+c)/(m-c),eA:-2*m*c/(m-c),eB:0,eC:0,eD:-1,eE:0})}}),Qi=v(function(e,r){return(1&e>>r)==1?0:1}),f2=function(e){return $([Wf({ac:1,ad:0,aj:!0}),vc({bA:rr,c6:Jf,dr:e,bP:Gf,dL:0,bY:rr,bZ:rr}),mc])},m2=T(function(e,r,n){return lr(a(J,function(t){var i=t<<4,o=P(Oa,a(Qi,t,0),a(Qi,t,1),a(Qi,t,2),a(Qi,t,3));return b(en,e,z(r,o),f2(i))},a(Lr,1,a(At,2,n)-1)))}),Jn=function(e){var r=e;return{io:-r.io,is:-r.is,dO:-r.dO}},qa=function(e){var r=e;return r},s2=_0,qf=function(e){var r=e;return Jn(Gn(r))},Uf=_n({io:1,is:0,dO:0}),pc=Uf,gc=Ui,hc=_n({io:0,is:0,dO:1}),Yf=hc,d2={df:fr,dM:pc,dN:gc,dP:Yf},Ht=function(e){var r=e;return r},p2=function(e){var r=Ht($a(e)),n=Dr(Gn(e)),t=Dr(On(e)),i=Dr(Rn(e));return rn({ep:i.io,eq:t.io,er:n.io,es:r.io,et:i.is,eu:t.is,ev:n.is,ew:r.is,ex:i.dO,ey:t.dO,ez:n.dO,eA:r.dO,eB:0,eC:0,eD:0,eE:1})},g2=v(function(e,r){var n=r;return p2(a(jf,n,e))}),h2=function(e){return a(g2,d2,e)},b2=function(e){var r=e;return r.dG},_2=function(e){var r=e;return Rn(r)},w2=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),y2=function(e){var r=e;return On(r)},x2=function(e){var r=b2(e.fZ),n=Hr({df:Ef(r),dM:_2(r),dN:y2(r),dP:Jn(qf(r))}),t=jt(e.a9),i=t,o=P(dc,n,1,j,$([i]));if(o.$===1)return D;var l=o.a,c=h2(r),u=a(ye,.99,a(Ve,Fe(e.f5),Of(Bf(l)))),m=Ff(l),s=m.a,d=m.b,g=m.c,f=u2(b(w2,s,d,g)),_=a(ye,1.01,a(Vt,f,Of(If(l)))),w=a(v2,e.fZ,{fJ:e.fJ,gu:_,hb:u}),x=s2(w).eE,S=x?Dr(Jn(qf(r))):qa(Ef(r)),y=function(){var se=e.ic;switch(se.$){case 0:return z(0,0);case 1:return z(1,0);case 2:return z(2,0);case 3:var xe=se.a;return z(3,xe);case 4:var xe=se.a;return z(4,xe);default:return z(5,0)}}(),C=y.a,F=y.b,U=e.gs,Q=U,G=a(Yi,Q,e.il),Y=G,Z=rn({ep:0,eq:S.io,er:va(Y),es:e.fb,et:0,eu:S.is,ev:fa(Y),ew:c2(f),ex:0,ey:S.dO,ez:ma(Y),eA:C,eB:0,eC:x,eD:0,eE:F}),V=Qe(Lf,Z,c,w,l2,i,{Q:D,aa:D,hG:D}),ne=e.g4;switch(ne.$){case 0:var fe=ne.a;return lr($([b(en,V.Q,z(fe,oc),Ja),b(en,V.aa,Nt,Ja)]));case 1:var fe=ne.a;return lr($([b(en,V.Q,Nt,Ja),$([Rf]),b(en,V.hG,fe.bG,zf),$([kf(0)]),b(en,V.Q,z(fe,oc),$2),b(en,V.aa,Nt,Ja)]));default:var we=ne.a,me=ne.b;return lr($([b(en,V.Q,z(me,oc),Ja),$([Rf]),a(O_,V.hG,we),b(m2,V.Q,me,Qn(we)),b(en,V.aa,Nt,Ja)]))}},S2=function(e){return a(Fr,"width",k(e))},C2=v(function(e,r){var n=$([p_(1),__(0),$_(!0),P(s_,0,0,0,0)]),t=function(){var C=e.fG;switch(C.$){case 0:return I(n,"0",1);case 1:return I(a(M,f_,n),"1",1);default:var F=C.a;return I(n,"0",F)}}(),i=t.a,o=t.b,l=t.c,c=e.a5,u=c.a,m=c.b,s=Sf(m),d=a(_r,"height",k(s)+"px"),g=Sf(u),f=g/s,_=a(ka,function(C){return x2({fJ:f,fZ:e.fZ,f5:e.f5,a9:C.a9,gs:C.gs,g4:C.g4,fb:l,ic:C.ic,il:C.il})},r),w=a(_r,"width",k(g)+"px"),x=e.a2,S=x,y=w_(S);return b(h_,"div",$([a(_r,"padding","0px"),w,d]),$([z(o,b(S_,i,$([S2(Pe(g*l)),g_(Pe(s*l)),w,d,a(_r,"display","block"),a(_r,"background-color",y)]),_))]))}),L2=function(e){return{$:2,a:e}},P2=function(e){return L2(e)},z2=function(e){return a(C2,{fG:P2(e.cS),a2:e.a2,fZ:e.fZ,f5:e.f5,a5:e.a5},$([{a9:e.a9,gs:e.gs,g4:e.g4,ic:e.ic,il:e.il}]))},Zf=function(e){return e},nn=function(e){return e},M2=function(e){var r=e;return r},Ki=function(e){var r=e;return M2(r.fK)},Qf=q(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),T2=q(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),Kf=q(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Xf=q(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),k2=q(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),D2=q(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),A2=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),bc=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,t=e.c;return P(A2,r,n,t,1);case 2:var r=e.a,n=e.b,t=e.c;return P(Qf,r,n,t,1);case 3:var r=e.a,i=e.b,t=e.c;return P(T2,r,i,t,1);case 4:var r=e.a,i=e.b,t=e.c;return P(Kf,r,i,t,1);case 5:var r=e.a,i=e.b,t=e.c;return P(D2,r,i,t,1);case 6:var r=e.a,i=e.b,t=e.c;return P(Xf,r,i,t,1);case 7:var r=e.a,i=e.b,t=e.c;return P(k2,r,i,t,1);case 8:return e;case 9:return e;default:return e}},_c={$:0},B2=be(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var u=c.a,m=c.b,s=Zi(l(u)),d=a(Re,s.eJ,e),g=a(Ve,s.eG,r),f=a(Re,s.eK,n),_=a(Ve,s.eH,t),w=a(Re,s.eL,i),x=a(Ve,s.eI,o),S=l,y=m;e=d,r=g,n=f,t=_,i=w,o=x,l=S,c=y;continue e}else return{eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i}}),I2=T(function(e,r,n){var t=Zi(e(r));return nt(B2,t.eJ,t.eG,t.eK,t.eH,t.eL,t.eI,e,n)}),wc=v(function(e,r){var n=e,t=r;return le(t,n)<1}),em=function(e){return a(wc,e.eG,e.eJ)&&a(wc,e.eH,e.eK)&&a(wc,e.eI,e.eL)?e:{eG:a(Ve,e.eJ,e.eG),eH:a(Ve,e.eK,e.eH),eI:a(Ve,e.eL,e.eI),eJ:a(Re,e.eJ,e.eG),eK:a(Re,e.eK,e.eH),eL:a(Re,e.eL,e.eI)}},Rt=function(e){var r=e;return r},sa=function(e){var r=e;return r.io},da=function(e){var r=e;return r.is},pa=function(e){var r=e;return r.dO},rm=function(e){var r=Rt(e),n=r.a,t=r.b,i=r.c,o=sa(n),l=da(n),c=pa(n),u=sa(t),m=da(t),s=pa(t),d=sa(i),g=da(i),f=pa(i);return em({eG:a(Ve,o,a(Ve,u,d)),eH:a(Ve,l,a(Ve,m,g)),eI:a(Ve,c,a(Ve,s,f)),eJ:a(Re,o,a(Re,u,d)),eK:a(Re,l,a(Re,m,g)),eL:a(Re,c,a(Re,s,f))})},nm=v0,mr=function(e){return nm(Ht(e))},am=function(e){var r=e;return r},Xi=function(e){return nm(am(e))},tm=function(e){return e},F2=v(function(e,r){var n=e,t=r,i=a(Ue,ce(t.io),a(Ue,ce(t.is),ce(t.dO)));if(i){var o=t.dO/i,l=t.is/i,c=t.io/i,u=bn(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dO:n*o/u}}else return yf}),E2=F2(tm(1)),im=T(function(e,r,n){var t=a(Ji,r,n),i=a(Ji,e,r);return E2(a(ac,t,i))}),V2=function(e){var r=Rt(e),n=r.a,t=r.b,i=r.c,o=Xi(b(im,n,t,i));return I({q:o,e_:mr(n)},{q:o,e_:mr(t)},{q:o,e_:mr(i)})},j2=v(function(e,r){return{$:2,a:e,b:r}}),om=j2({d_:3,eb:0,eN:4}),N2=function(e){if(e.b){var r=e.a,n=e.b,t=om(a(J,V2,e)),i=b(I2,rm,r,n);return P(Qf,i,e,t,0)}else return _c},xr=T(function(e,r,n){return I(e,r,n)}),Je=T(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dO:o}}),lm=function(){var e=nn(1),r=nn(1),n=nn(1),t=a(ye,-.5,e),i=a(ye,-.5,r),o=a(ye,-.5,n),l=b(Je,o,i,t),c=a(ye,.5,e),u=b(Je,o,i,c),m=a(ye,.5,r),s=b(Je,o,m,t),d=b(Je,o,m,c),g=a(ye,.5,n),f=b(Je,g,i,t),_=b(Je,g,m,t),w=b(Je,g,i,c),x=b(Je,g,m,c);return bc(N2($([b(xr,l,_,f),b(xr,l,s,_),b(xr,u,w,x),b(xr,u,x,d),b(xr,f,_,x),b(xr,f,x,w),b(xr,l,d,s),b(xr,l,u,d),b(xr,l,f,w),b(xr,l,w,u),b(xr,s,x,_),b(xr,s,d,x)])))}(),eo={$:0},H2=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),R2=T(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(t),m=Xi(b(im,u,c,l)),s={q:m,e_:mr(u)},d={q:m,e_:mr(c)},g={q:m,e_:mr(l)};return a(M,s,a(M,d,a(M,g,n)))}),yc=function(e){var r=e;return r.I},O2=q(function(e,r,n,t){if(r.$===1)return j;var i=r.a;if(n.$===1)return j;var o=n.a;if(t.$===1)return j;var l=t.a;return H(b(e,i,o,l))}),xc=4294967295>>>32-vt,Sc=Ps,G2=T(function(e,r,n){e:for(;;){var t=xc&r>>>e,i=a(Sc,t,n);if(i.$){var m=i.a;return a(Sc,xc&r,m)}else{var o=i.a,l=e-vt,c=r,u=o;e=l,r=c,n=u;continue e}}}),W2=function(e){return e>>>5<<5},J2=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||le(e,n)>-1?j:le(e,W2(n))>-1?H(a(Sc,xc&e,o)):H(b(G2,t,e,i))}),Cc=function(e){var r=e;return r.av},Lc=v(function(e,r){return a(J2,e,Cc(r))}),q2=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(O2,T(function(l,c,u){return I(l,c,u)}),a(Lc,t,e),a(Lc,i,e),a(Lc,o,e))};return a(mn,r,yc(e))},U2=T(function(e,r,n){e:for(;;){var t=a(ul,pr,e),i=t.a,o=t.b;if(le(cl(i),pr)<0)return a(o$,!0,{C:r,n,r:i});var l=o,c=a(M,a$(i),r),u=n+1;e=l,r=c,n=u;continue e}}),Pc=function(e){return e.b?b(U2,e,D,0):r$},Y2=v(function(e,r){return!a(dt,a(_t,eg,e),r)}),Z2=function(e){var r=e.a;return r},cm=v(function(e,r){var n=Z2(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&le(o,n)<0&&l>=0&&le(l,n)<0&&c>=0&&le(c,n)<0};return a(Y2,t,r)?{I:r,av:e}:{I:a(Q$,t,r),av:e}}),Q2=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ot=Q2({d_:1,eb:3,eN:4}),ro=v(function(e,r){var n=qa(r),t=qa(e);return z(I(t.io,t.is,t.dO),I(n.io,n.is,n.dO))}),um=b(Et,0,0,0),zc=dr(function(e,r,n,t,i,o){var l=o.a,c=o.b,u=o.c,m=a(gt,a(ro,e,r),i);if(m.$){var d={q:um,e_:mr(r)},g={q:um,e_:mr(e)},f=u+1,_=u;return I(a(M,I(n,_,f),a(M,I(n,f,t),l)),a(M,d,a(M,g,c)),u+2)}else{var s=m.a;return I(a(M,I(n,s,t),l),c,u)}}),K2=je(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,m=n.b,s=e(u),d=e(c),g=e(l),f=t+2,_=t+1,w=t,x=e,S=r,y=m,C=t+3,F=Qe(zc,s,g,f,w,r,Qe(zc,d,s,_,f,r,Qe(zc,g,d,w,_,r,i)));e=x,r=S,n=y,t=C,i=F;continue e}else{var U=i,Q=U.a,G=U.b;return z(Q,ir(G))}}),X2=je(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,m=r.b,s=e(u),d=e(c),g=e(l),f=n+2,_=n+1,w=n,x=b(Pa,a(ro,g,s),f,b(Pa,a(ro,s,d),_,b(Pa,a(ro,d,g),w,i))),S=a(M,I(w,_,f),t),y=e,C=m,F=n+3,U=S,Q=x;e=y,r=C,n=F,t=U,i=Q;continue e}else return I(t,i,n)}),ga=T(function(e,r,n){var t=q2(n),i=b(Ge,R2(r),D,t),o=A(X2,r,t,0,D,xl),l=o.a,c=o.b,u=o.c,m=A(K2,r,c,t,0,I(l,D,u)),s=m.a,d=m.b,g=Dn(d)?i:R(i,d);return b(H2,e,a(cm,Pc(g),s),a(Ot,g,s))}),Mc=function(e){return{I:a(J,function(r){return I(3*r,3*r+1,3*r+2)},a(Lr,0,Qn(e)-1)),av:Pc(lr(a(J,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},$m=function(e){switch(e.$){case 0:return eo;case 1:var r=e.a,n=e.b,t=a(J,Rt,n);return b(ga,r,jr,Mc(t));case 2:var r=e.a,n=e.b,t=a(J,Rt,n);return b(ga,r,jr,Mc(t));case 3:var r=e.a,i=e.b;return b(ga,r,jr,i);case 4:var r=e.a,i=e.b;return b(ga,r,function(o){return o.e_},i);case 5:var r=e.a,i=e.b;return b(ga,r,function(o){return o.e_},i);case 6:var r=e.a,i=e.b;return b(ga,r,function(o){return o.e_},i);case 7:var r=e.a,i=e.b;return b(ga,r,function(o){return o.e_},i);case 8:return eo;case 9:return eo;default:return eo}},vm=$m(lm),no=function(e){var r=e;return r.a5},fm={$:0},E=fm,qe=v(function(e,r){return{$:1,a:e,b:r}}),ew={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b8"}},rw=1029,nw=function(e){return{$:5,a:e}},mm=function(e){var r=e;return nw(r)},aw=mm(rw),tw=1028,iw=mm(tw),sr=T(function(e,r,n){return r===1?e?a(M,aw,n):a(M,iw,n):n}),sm={src:`
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
    `,attributes:{position:"e_",uv:"P"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Tc=q(function(e,r,n,t){return a(qe,r,be(function(i,o,l,c,u,m,s,d){return A(Me,b(sr,c,t,d),sm,ew,n,{b8:e,c:l,d:o,e:m,f:i,g:u})}))}),kc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aP"}},dm={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},yn=q(function(e,r,n,t){return a(qe,r,be(function(i,o,l,c,u,m,s,d){return A(Me,b(sr,c,t,d),dm,kc,n,{aP:e,c:l,d:o,e:m,f:i,g:u})}))}),pm=v(function(e,r){return{$:3,a:e,b:r}}),ow={src:`
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
    `,attributes:{},uniforms:{constantColor:"aP",pointRadius:"cw",sceneProperties:"f"}},gm={src:`
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
    `,attributes:{position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},lw=q(function(e,r,n,t){return a(pm,n,be(function(i,o,l,c,u,m,s,d){return A(Me,d,gm,ow,t,{aP:e,c:l,d:o,cw:r,e:m,f:i,g:u})}))}),Dc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",sceneProperties:"f"}},Gt=function(e){var r=e;return r},ao=f0,xn=je(function(e,r,n,t,i){return a(qe,n,be(function(o,l,c,u,m,s,d,g){return A(Me,b(sr,u,i,g),dm,Dc,t,{a7:a(ao,Gt(r),e),c,d:l,e:s,f:o,g:m})}))}),cw={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",pointRadius:"cw",sceneProperties:"f"}},uw=je(function(e,r,n,t,i){return a(pm,t,be(function(o,l,c,u,m,s,d,g){return A(Me,g,gm,cw,i,{a7:a(ao,Gt(r),e),c,d:l,cw:n,e:s,f:o,g:m})}))}),hm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"c7",sceneProperties:"f",viewMatrix:"g"}},bm={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},to=q(function(e,r,n,t){return a(qe,r,be(function(i,o,l,c,u,m,s,d){var g=s.a,f=s.b;return A(Me,b(sr,c,t,d),bm,hm,n,{V:f,bG:g.bG,cm:g.cm,cn:g.cn,co:g.co,c7:e,c:l,d:o,e:m,f:i,g:u})}))}),_m={src:`
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
    `,attributes:{},uniforms:{enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"c8",normalMapTexture:"bh",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},wm={src:`
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
    `,attributes:{normal:"q",position:"e_",tangent:"fd",uv:"P"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},$w=dr(function(e,r,n,t,i,o){return a(qe,t,be(function(l,c,u,m,s,d,g,f){var _=g.a,w=g.b;return A(Me,b(sr,m,o,f),wm,_m,i,{V:w,bG:_.bG,cm:_.cm,cn:_.cn,co:_.co,c8:e,c:u,d:c,bh:r,e:d,f:l,bn:n,g:s})}))}),ym={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cO",constantBaseColor:"cP",constantMetallic:"cQ",constantRoughness:"cR",enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"db",normalMapTexture:"bh",roughnessTexture:"dv",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},vw=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(s){return a(qe,u,be(function(d,g,f,_,w,x,S,y){var C=S.a,F=S.b;return A(Me,b(sr,_,s,y),wm,ym,m,{cO:e,cP:r,cQ:o,cR:t,V:F,bG:C.bG,cm:C.cm,cn:C.cn,co:C.co,db:i,c:f,d:g,bh:l,e:x,dv:n,f:d,bn:c,g:w})}))}}}}}}}}}}},xm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cN",enabledLights:"V",lights12:"bG",lights34:"cm",lights56:"cn",lights78:"co",metallic:"da",roughness:"du",sceneProperties:"f",viewMatrix:"g"}},io=dr(function(e,r,n,t,i,o){return a(qe,t,be(function(l,c,u,m,s,d,g,f){var _=g.a,w=g.b;return A(Me,b(sr,m,o,f),bm,xm,i,{cN:e,V:w,bG:_.bG,cm:_.cm,cn:_.cn,co:_.co,da:n,c:u,d:c,e:d,du:r,f:l,g:s})}))}),fw=function(e){return{$:0,a:e}},Sm=v(function(e,r){return{$:1,a:e,b:r}}),Wt=v(function(e,r){if(r.$){var n=r.a.E;return z(n,1)}else return r.a,z(e,0)}),mw=function(e){return P(Oa,va(e),fa(e),ma(e),1)},Ac=P(Oa,0,0,0,0),oo=v(function(e,r){if(r.$){var t=r.a.E;return z(t,Ac)}else{var n=r.a;return z(e,mw(n))}}),Cm=v(function(e,r){var n=z(e,r);if(n.a.$){var i=n.a.a.E;return a(Sm,z(i,Ac),a(Wt,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Sm,a(oo,i,e),a(Wt,i,r))}else{var t=n.a.a;return n.b.a,fw(t)}}),sw=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),lo=q(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),dw=q(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),pw=function(e){return a(wr,e,1)},Bc=a(wr,0,0),Ua=v(function(e,r){if(r.$){var t=r.a.E;return z(t,Bc)}else{var n=r.a;return z(e,pw(n))}}),Lm=q(function(e,r,n,t){var i=P(dw,e,r,n,t);if(i.a.$){var u=i.a.a.E;return P(lo,z(u,Ac),a(Ua,u,r),a(Ua,u,n),a(Wt,u,t))}else if(i.b.$){var u=i.b.a.E;return P(lo,a(oo,u,e),z(u,Bc),a(Ua,u,n),a(Wt,u,t))}else if(i.c.$){var u=i.c.a.E;return P(lo,a(oo,u,e),a(Ua,u,r),z(u,Bc),a(Wt,u,t))}else if(i.d.$){var u=i.d.a.E;return P(lo,a(oo,u,e),a(Ua,u,r),a(Ua,u,n),z(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,b(sw,o,l,c)}}),gw={src:`
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
    `,attributes:{},uniforms:{backlight:"cL",colorTexture:"b8",sceneProperties:"f"}},Ic=je(function(e,r,n,t,i){return a(qe,n,be(function(o,l,c,u,m,s,d,g){return A(Me,b(sr,u,i,g),sm,gw,t,{cL:Gt(r),b8:e,c,d:l,e:s,f:o,g:m})}))}),Pm={src:`
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
    `,attributes:{normal:"q",position:"e_",uv:"P"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},hw=q(function(e,r,n,t){return a(qe,r,be(function(i,o,l,c,u,m,s,d){var g=s.a,f=s.b;return A(Me,b(sr,c,t,d),Pm,_m,n,{V:f,bG:g.bG,cm:g.cm,cn:g.cn,co:g.co,c8:e,c:l,d:o,bh:e,e:m,f:i,bn:0,g:u})}))}),bw=Io(function(e,r,n,t,i,o,l,c,u){return a(qe,l,be(function(m,s,d,g,f,_,w,x){var S=w.a,y=w.b;return A(Me,b(sr,g,u,x),Pm,ym,c,{cO:e,cP:r,cQ:o,cR:t,V:y,bG:S.bG,cm:S.cm,cn:S.cn,co:S.co,db:i,c:d,d:s,bh:e,e:_,dv:n,f:m,bn:0,g:f})}))}),Jt=T(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),_w=function(e){var r=e;return b(Jt,r.eJ,r.eG,.5)},ww=function(e){var r=e;return b(Jt,r.eK,r.eH,.5)},yw=function(e){var r=e;return b(Jt,r.eL,r.eI,.5)},xw=function(e){return b(Je,_w(e),ww(e),yw(e))},ie=function(e){var r=Ff(e),n=r.a,t=r.b,i=r.c;return{f1:Ht(xw(e)),gC:n/2,gD:t/2,gE:i/2}},Fc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var t=r.a,i=r.c,o=r.d;return P(Tc,c,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return P(Tc,c,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return P(Tc,c,ie(t),i,o);case 8:return E;case 9:return E;default:return E}}else{var n=e.b.a;switch(r.$){case 0:return E;case 1:var t=r.a,i=r.c,o=r.d;return P(yn,n,ie(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return P(yn,n,ie(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return P(yn,n,ie(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return P(yn,n,ie(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return P(yn,n,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return P(yn,n,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return P(yn,n,ie(t),i,o);case 8:var t=r.a,i=r.c;return P(yn,n,ie(t),i,0);case 9:var t=r.a,i=r.c;return P(yn,n,ie(t),i,0);default:var t=r.a,l=r.b,i=r.d;return P(lw,n,l,ie(t),i)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,m=e.c;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:var t=r.a,i=r.c,o=r.d;return A(Ic,c,m,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return A(Ic,c,m,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return A(Ic,c,m,ie(t),i,o);case 8:return E;case 9:return E;default:return E}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return E;case 1:var t=r.a,i=r.c,o=r.d;return A(xn,u,m,ie(t),i,o);case 2:var t=r.a,i=r.c,o=r.d;return A(xn,u,m,ie(t),i,o);case 3:var t=r.a,i=r.c,o=r.d;return A(xn,u,m,ie(t),i,o);case 4:var t=r.a,i=r.c,o=r.d;return A(xn,u,m,ie(t),i,o);case 5:var t=r.a,i=r.c,o=r.d;return A(xn,u,m,ie(t),i,o);case 6:var t=r.a,i=r.c,o=r.d;return A(xn,u,m,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return A(xn,u,m,ie(t),i,o);case 8:var t=r.a,i=r.c;return A(xn,u,m,ie(t),i,0);case 9:var t=r.a,i=r.c;return A(xn,u,m,ie(t),i,0);default:var t=r.a,l=r.b,i=r.d;return A(uw,u,m,l,ie(t),i)}}case 2:e.a;var s=e.b,d=e.c,g=a(Cm,s,d);if(g.$){var w=g.a,x=w.a;w.b;var S=g.b,y=S.a,C=S.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var t=r.a,i=r.c,_=r.d;return P(hw,x,ie(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return Qe($w,x,y,C,ie(t),i,_);case 8:return E;case 9:return E;default:return E}}else{var f=g.a;switch(r.$){case 0:return E;case 1:return E;case 2:var t=r.a,i=r.c,_=r.d;return P(to,f,ie(t),i,_);case 3:return E;case 4:var t=r.a,i=r.c,_=r.d;return P(to,f,ie(t),i,_);case 5:return E;case 6:var t=r.a,i=r.c,_=r.d;return P(to,f,ie(t),i,_);case 7:var t=r.a,i=r.c,_=r.d;return P(to,f,ie(t),i,_);case 8:return E;case 9:return E;default:return E}}default:e.a;var F=e.b,U=e.c,Q=e.d,d=e.e,G=P(Lm,F,U,Q,d);if(G.$){var ne=G.a,fe=ne.a,we=ne.b,me=G.b,se=me.a,xe=me.b,de=G.c,Be=de.a,Te=de.b,Ze=G.d,y=Ze.a,C=Ze.b;switch(r.$){case 0:return E;case 1:return E;case 2:return E;case 3:return E;case 4:return E;case 5:return E;case 6:var t=r.a,i=r.c,o=r.d;return ys(bw,fe,we,se,xe,Be,Te,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return vw(fe)(we)(se)(xe)(Be)(Te)(y)(C)(ie(t))(i)(o);case 8:return E;case 9:return E;default:return E}}else{var Y=G.a,Z=G.b,V=G.c;switch(r.$){case 0:return E;case 1:return E;case 2:var t=r.a,i=r.c,o=r.d;return Qe(io,Y,Z,V,ie(t),i,o);case 3:return E;case 4:var t=r.a,i=r.c,o=r.d;return Qe(io,Y,Z,V,ie(t),i,o);case 5:return E;case 6:var t=r.a,i=r.c,o=r.d;return Qe(io,Y,Z,V,ie(t),i,o);case 7:var t=r.a,i=r.c,o=r.d;return Qe(io,Y,Z,V,ie(t),i,o);case 8:return E;case 9:return E;default:return E}}}}),Ec=function(e){var r=e;return r.io},Vc=function(e){var r=e;return r.is},jc=function(e){var r=e;return r.dO},Sw=function(e){var r=e,n=jc(r.dP),t=Vc(r.dP),i=Ec(r.dP),o=jc(r.dN),l=Vc(r.dN),c=Ec(r.dN),u=jc(r.dM),m=Vc(r.dM),s=Ec(r.dM);return s*l*n+m*o*i+u*c*t-u*l*i-m*c*n-s*o*t>0},Cw=function(e){var r=Ht($a(e)),n=Dr(Gn(e)),t=Dr(On(e)),i=Dr(Rn(e));return{ef:Sw(e),t:i.io,u:i.is,v:i.dO,w:t.io,x:t.is,y:t.dO,z:n.io,A:n.is,B:n.dO,L:r.io,M:r.is,N:r.dO,cB:1}},Ya=v(function(e,r){return{$:5,a:e,b:r}}),zm=v(function(e,r){var n=r;switch(n.$){case 0:return E;case 5:var t=n.a,i=n.b,o=a(Cf,t,e);return a(Ya,o,i);case 1:return a(Ya,e,n);case 3:return a(Ya,e,n);case 2:return a(Ya,e,n);default:return a(Ya,e,n)}}),Mm=v(function(e,r){return a(zm,Cw(e),r)}),co=function(e){return{$:2,a:e}},Lw=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f1;return{f1:{io:n*o.io,is:t*o.is,dO:i*o.dO},gC:n*r.gC,gD:t*r.gD,gE:i*r.gE}}),Pw=d0,zw=s0,Tm=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=zw(t),_=f.io,w=f.is,x=f.dO,S=f.fp,y=Pw({fp:S,io:_*s,is:w*d,dO:x*g});return nt(r,n,y,i,o,l,c,u,m)}}}}}}}}}},Nc=v(function(e,r){switch(r.$){case 0:return fm;case 5:var n=r.a,t=r.b;return a(Ya,n,a(Nc,e,t));case 1:var i=r.a,o=r.b;return a(qe,a(Lw,e,i),a(Tm,e,o));case 3:return r;case 2:var o=r.a;return co(a(Tm,e,o));default:var l=r.a;return Hf(a(J,Nc(e),l))}}),Hc=v(function(e,r){var n=r;return a(Nc,e,n)}),Rc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},km=7683,Dm=7682,Mw=b($c,{c6:0,dr:0,dL:15},{bA:rr,bP:Ga,bY:rr,bZ:km},{bA:rr,bP:Ga,bY:rr,bZ:Dm}),Tw=b($c,{c6:0,dr:0,dL:15},{bA:rr,bP:Ga,bY:rr,bZ:Dm},{bA:rr,bP:Ga,bY:rr,bZ:km}),Oc=v(function(e,r){return e?a(M,Tw,r):a(M,Mw,r)}),kw={src:`
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
    `,attributes:{normal:"q",position:"e_"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},Dw=function(e){if(e.$){var r=e.c;return H(be(function(n,t,i,o,l,c,u,m){return A(Me,a(Oc,o,m),kw,Rc,r,{c:i,d:t,e:c,f:n,cC:u,g:l})}))}else return j},uo=function(e){var r=Dw(e);if(r.$)return E;var n=r.a;return co(n)},Aw=q(function(e,r,n,t){var i=a(Fc,n,lm),o=function(){var s=z(e,r);return s.a?s.b?jt($([i,uo(vm)])):i:s.b?uo(vm):E}(),l=no(t),c=l.a,u=l.b,m=l.c;return a(Mm,Ki(t),a(Hc,I(c,u,m),o))}),Bw=v(function(e,r){return P(Aw,!0,!0,e,r)}),Gc=function(e){return{$:0,a:e}},Am=v(function(e,r){return{$:0,a:e,b:r}}),Iw=function(e){var r=Gl(e),n=r.hs,t=r.gz,i=r.fP;return b(Et,n,t,i)},Fw=function(e){return a(Am,0,Gc(Iw(e)))},Wc=function(e){var r=e;return r.m},ha=Fs,qt=function(e){var r=e;return ha(r)},Ew=v(function(e,r){var n=r;return n/e}),Za=Es,Bm=function(e){var r=e;return{io:ha(r),is:Za(r)}},Vw=v(function(e,r){var n=e.e_,t=e.q;return a(M,{q:Xi(t),e_:mr(n)},r)}),jw=ai(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,m=ma(c.e_),s=fa(c.e_),d=va(c.e_),g=a(aa,e,d),f=a(Ue,r,d),_=a(aa,n,s),w=a(Ue,t,s),x=a(aa,i,m),S=a(Ue,o,m),y=u;e=g,r=f,n=_,t=w,i=x,o=S,l=y;continue e}else return em({eG:r,eH:t,eI:o,eJ:e,eK:n,eL:i})}),Im=v(function(e,r){var n=ma(e.e_),t=fa(e.e_),i=va(e.e_);return Fo(jw,i,i,t,t,n,n,r)}),Nw=function(e){var r=b(Wu,Vw,D,Cc(e));if(r.b){var n=r.a,t=r.b,i=a(Ot,r,yc(e)),o=a(Im,n,t);return P(Kf,o,e,i,0)}else return _c},Fm=_n({io:0,is:0,dO:-1}),Em=v(function(e,r){var n=e,t=r,i=n.dN,o=i,l=n.dM,c=l;return{io:t.io*c.io+t.is*o.io,is:t.io*c.is+t.is*o.is,dO:t.io*c.dO+t.is*o.dO}}),$o=function(e){var r=e;return Za(r)},Jc=function(e){return hn(2*er*e)},Hw=jr,Vm=Hw({df:fr,dM:pc,dN:gc}),jm=function(){var e=72,r=a(Ew,e,Jc(1)),n=nn(1),t=Ra(hc),i=Ra(Fm),o=nn(1),l=a(ye,.5,o),c=b(Je,Xr,Xr,l),u=a(ye,-.5,o),m=b(Je,Xr,Xr,u),s=function(f){var _=a(ye,f,r),w=Ra(a(Em,Vm,Bm(_))),x=a(ye,qt(_),n),S=a(ye,$o(_),n),y=b(Je,x,S,l),C=b(Je,x,S,u),F=a(Ei,e,f+1),U=a(ye,F,r),Q=Ra(a(Em,Vm,Bm(U))),G=a(ye,qt(U),n),Y=a(ye,$o(U),n),Z=b(Je,G,Y,u),V=b(Je,G,Y,l);return $([I({q:i,e_:m},{q:i,e_:Z},{q:i,e_:C}),I({q:w,e_:C},{q:Q,e_:Z},{q:Q,e_:V}),I({q:w,e_:C},{q:Q,e_:V},{q:w,e_:y}),I({q:t,e_:c},{q:t,e_:y},{q:t,e_:V})])},d=a(J,s,a(Lr,0,e-1)),g=Mc(lr(d));return bc(Nw(g))}(),Nm=$m(jm),Hm=function(e){var r=e;return r.gk},Rm=function(e){var r=e;return r.df},Rw=function(e){var r=Hm(e),n=tc(r),t=n.a,i=n.b;return Hr({df:Rm(e),dM:t,dN:i,dP:r})},Om=function(e){var r=e;return r.g2},Gm=function(e){var r=e;return r.hq},Ow=q(function(e,r,n,t){var i=Rw(Wc(t)),o=a(Fc,n,jm),l=function(){var d=z(e,r);return d.a?d.b?jt($([o,uo(Nm)])):o:d.b?uo(Nm):E}(),c=Gm(t),u=c,m=Om(t),s=m;return a(Mm,i,a(Hc,I(u,u,s),l))}),Gw=v(function(e,r){return P(Ow,!0,!0,e,r)}),Wm={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Jm={src:`
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
    `,attributes:{triangleVertex:"dC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bV",viewMatrix:"g"}},Ut=function(e){var r=Rt(e),n=r.a,t=r.b,i=r.c,o=qa(n),l=qa(t),c=qa(i);return rn({ep:o.io,eq:l.io,er:c.io,es:0,et:o.is,eu:l.is,ev:c.is,ew:0,ex:o.dO,ey:l.dO,ez:c.dO,eA:0,eB:0,eC:0,eD:0,eE:0})},vo=om($([I({dC:0},{dC:1},{dC:2})])),Ww=v(function(e,r){var n=rm(r),t=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var i=e.b.a;return a(qe,t,be(function(y,C,F,U,Q,G,Y,Z){return A(Me,b(sr,U,0,Z),Wm,kc,vo,{aP:i,c:F,d:C,e:G,f:y,bV:Ut(r),g:Q})}));case 1:if(e.b.$)return e.a,E;var o=e.b.a,l=e.c;return a(qe,t,be(function(y,C,F,U,Q,G,Y,Z){return A(Me,b(sr,U,0,Z),Wm,Dc,vo,{a7:a(ao,Gt(l),o),c:F,d:C,e:G,f:y,bV:Ut(r),g:Q})}));case 2:e.a;var c=e.b,u=e.c,m=a(Cm,c,u);if(m.$)return E;var s=m.a;return a(qe,t,be(function(y,C,F,U,Q,G,Y,Z){var V=Y.a,ne=Y.b;return A(Me,b(sr,U,0,Z),Jm,hm,vo,{V:ne,bG:V.bG,cm:V.cm,cn:V.cn,co:V.co,c7:s,c:F,d:C,e:G,f:y,bV:Ut(r),g:Q})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=P(Lm,d,g,f,u);if(_.$)return E;var w=_.a,x=_.b,S=_.c;return a(qe,t,be(function(y,C,F,U,Q,G,Y,Z){var V=Y.a,ne=Y.b;return A(Me,b(sr,U,0,Z),Jm,xm,vo,{cN:w,V:ne,bG:V.bG,cm:V.cm,cn:V.cn,co:V.co,da:S,c:F,d:C,e:G,du:x,f:y,bV:Ut(r),g:Q})}))}}),Jw=function(){var e=$([{bm:a(wr,0,1)},{bm:a(wr,1,1)},{bm:a(wr,2,1)},{bm:a(wr,0,-1)},{bm:a(wr,1,-1)},{bm:a(wr,2,-1)}]),r=$([I(0,1,2),I(3,5,4),I(3,4,1),I(3,1,0),I(4,5,2),I(4,2,1),I(5,3,0),I(5,0,2)]);return a(Ot,e,r)}(),qw={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",triangleVertexPositions:"bV",viewMatrix:"g"}},qm=function(e){return co(be(function(r,n,t,i,o,l,c,u){return A(Me,a(Oc,i,u),qw,Rc,Jw,{c:t,d:n,e:l,f:r,cC:c,bV:Ut(e),g:o})}))},Uw=q(function(e,r,n,t){var i=a(Ww,n,t),o=z(e,r);return o.a?o.b?jt($([i,qm(t)])):i:o.b?qm(t):E}),Yw=v(function(e,r){return P(Uw,!0,!0,e,r)}),qc=function(e){var r=e;return r},Zw=v(function(e,r){var n=pa(r),t=pa(e),i=da(r),o=da(e),l=sa(r),c=sa(e);return{eG:a(Ve,c,l),eH:a(Ve,o,i),eI:a(Ve,t,n),eJ:a(Re,c,l),eK:a(Re,o,i),eL:a(Re,t,n)}}),Qw=function(e){var r=qc(e),n=r.a,t=r.b;return a(Zw,n,t)},Um={src:`
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
    `,attributes:{lineSegmentVertex:"en"},uniforms:{lineSegmentEndPoint:"el",lineSegmentStartPoint:"em",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Kw=v(function(e,r){return{$:1,a:e,b:r}}),Xw=Kw({d_:2,eb:0,eN:1}),Ym=Xw($([z({en:0},{en:1})])),ey=v(function(e,r){var n=Qw(r),t=ie(n),i=qc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,E;var c=e.b.a;return a(qe,t,be(function(m,s,d,g,f,_,w,x){return A(Me,x,Um,kc,Ym,{aP:c,el:mr(l),em:mr(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return E;var c=e.b.a,u=e.c;return a(qe,t,be(function(s,d,g,f,_,w,x,S){return A(Me,S,Um,Dc,Ym,{a7:a(ao,Gt(u),c),el:mr(l),em:mr(o),c:g,d,e:w,f:s,g:_})}));case 2:return E;default:return E}}),ry=v(function(e,r){return a(ey,e,r)}),fo=function(e){var r=e;return r.f1},mo=function(e){var r=e;return r.hq},Zm=v(function(e,r){var n=e,t=r;return n/t}),ny=je(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(M,o,i);if(ue(r,e))return l;var c=e,u=r-1,m=n,s=t,d=l;e=c,r=u,n=m,t=s,i=d;continue e}}),Qm=v(function(e,r){return e<1?D:A(ny,0,e,e,r,D)}),ay=v(function(e,r){var n=e.e_,t=e.q,i=e.P,o=i,l=o.a,c=o.b;return a(M,{q:Xi(t),e_:mr(n),P:a(wr,l,c)},r)}),ty=function(e){var r=b(Wu,ay,D,Cc(e));if(r.b){var n=r.a,t=r.b,i=a(Ot,r,yc(e)),o=a(Im,n,t);return P(Xf,o,e,i,0)}else return _c},Uc=v(function(e,r){var n=e,t=r,i=ha(t);return{io:i*ha(n),is:i*Za(n),dO:Za(t)}}),iy=function(){var e=nn(1),r=72,n=a(Lr,0,r-1),t=a(Qm,r,a(Jt,Xr,Jc(1))),i=ut(r/2),o=a(Lr,0,i-1),l=a(Qm,i,a(Jt,Ft(90),Ft(-90))),c=Pc(lr(a(J,function(s){return a(J,function(d){return{q:Ra(a(Uc,s,d)),e_:b(Je,a(ye,qt(d)*qt(s),e),a(ye,qt(d)*$o(s),e),a(ye,$o(d),e)),P:z(a(Zm,s,Jc(1)),a(Zm,a(Vt,Ft(90),d),Ft(180)))}},l)},t))),u=v(function(s,d){return s*(i+1)+d}),m=lr(a(J,function(s){return lr(a(J,function(d){var g=a(u,s+1,d),f=a(u,s,d),_=a(u,s+1,d+1),w=a(u,s,d+1);return $([I(w,_,g),I(w,g,f)])},o))},n));return bc(ty(a(cm,c,m)))}(),so=72,po=2*so,oy=v(function(e,r){e:for(;;){var n=po+1,t=a(Ei,po,2*e+3),i=a(Ei,po,2*e+2),o=2*e+1,l=2*e,c=po,u=a(M,I(c,l,i),a(M,I(l,t,i),a(M,I(l,o,t),a(M,I(o,n,t),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),ly=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),cy=v(function(e,r){e:for(;;){var n=b(ly,0,2*er,e/so),t={b$:n,ct:0,cz:1},i={b$:n,ct:1,cz:1},o=a(M,t,a(M,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),uy=function(){var e=a(cy,so-1,$([{b$:0,ct:0,cz:0},{b$:0,ct:1,cz:0}])),r=a(oy,so-1,D);return a(Ot,e,r)}(),$y={src:`
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
    `,attributes:{angle:"b$",offsetScale:"ct",radiusScale:"cz"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cC",viewMatrix:"g"}},Km=function(e){return co(be(function(r,n,t,i,o,l,c,u){return A(Me,a(Oc,!0,u),$y,Rc,uy,{aP:b(Et,0,0,1),c:t,d:n,e:l,f:r,cC:c,g:o})}))},vy=function(e){var r=am(e);return{ef:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,L:r.io,M:r.is,N:r.dO,cB:1}},fy=v(function(e,r){return a(zm,vy(e),r)}),my=q(function(e,r,n,t){var i=a(Fc,n,iy),o=function(){var u=z(e,r);return u.a?u.b?jt($([i,Km()])):i:u.b?Km():E}(),l=mo(t),c=l;return a(fy,a(Ji,fr,fo(t)),a(Hc,I(c,c,c),o))}),sy=v(function(e,r){return P(my,!0,!0,e,r)}),dy=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Xm=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),py=je(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),gy=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return a(Am,r,n);case 1:var r=e.a,n=e.b,t=e.c;return b(dy,r,n,t);case 2:var r=e.a,n=e.b,i=e.c;return b(Xm,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return A(py,r,n,o,l,i)}},hy=gy,es=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([a(Bw,r,n)]);case 1:var r=e.a,t=e.b;return $([a(Yw,r,t)]);case 3:var r=e.a,i=e.b;return $([a(sy,hy(r),i)]);case 2:var r=e.a,o=e.b;return $([a(Gw,r,o)]);case 4:var l=e.a,c=e.b;return $([a(ry,Fw(l),c)]);default:var u=e.a;return a(ka,es,u)}},by=function(e){return a(ka,es,e)},_y=v(function(e,r){return z2({fG:e.fG,a2:c_(e.fL),fZ:e.fZ,f5:nn(e.f5),cS:e.cS,a5:z(Zf(Pe(e.dw.im)),Zf(Pe(e.dw.gG))),a9:by(r),gs:e.gs,g4:e.g4,ic:e.ic,il:e.il})}),rs=function(e){return e},wy=v(function(e,r){var n=e,t=Dr(r.gk),i=t.io,o=t.is,l=t.dO,c=a(Yi,r.cj,r.a4),u=c;return{b1:ma(u),f0:n,cf:fa(u),$7:0,cy:va(u),dD:1,io:-i,is:-o,dO:-l}}),yy=function(e){return a(wy,rs(!0),{a4:e.a4,gk:a(Uc,hn(e.b0),hn(e.cd)),cj:e.cj})},xy=function(e){return e},Sy=function(e){return xy(1.2*a(At,2,e))},Yc=ic({io:.37208,is:.37529}),Cy=v(function(e,r){return{$:2,a:e,b:r}}),ns=function(e){return{$:0,a:e}},go=function(e){var r=e;return r},Ly=function(e){var r=e;return r.f0},Py=ns(Nt.a),zy=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?z(a(M,t,o),l):z(o,a(M,t,l))});return b(Ge,n,z(D,D),r)}),My=function(e){var r=e;return rn({ep:r.io,eq:r.cy,er:0,es:0,et:r.is,eu:r.cf,ev:0,ew:0,ex:r.dO,ey:r.b1,ez:0,eA:0,eB:r.dD,eC:r.$7,eD:0,eE:0})},Ty=be(function(e,r,n,t,i,o,l,c){var u=a(zy,Ly,$([go(e),go(r),go(n),go(t)])),m=u.a,s=u.b;if(m.b){var d=R(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,w=f.b,x=w.a,S=w.b,y=S.a;return a(Cy,a(J,My,m),{bG:a(Ar,g,_),cm:a(Ar,x,y),cn:a(Ar,i,o),co:a(Ar,l,c)})}else return Py}else return ns({bG:a(Ar,e,r),cm:a(Ar,n,t),cn:a(Ar,i,o),co:a(Ar,l,c)})}),ky=q(function(e,r,n,t){return nt(Ty,e,r,n,t,yr,yr,yr,yr)}),Dy=v(function(e,r){return a(De,function(n){if(n.$)return 0;var t=n.b;return t},a(gt,e,r.aO))}),Ay=v(function(e,r){return a(Ce,0,Ni(a(mn,Dy(e),r)))}),By=v(function(e,r){return a(Ay,e,r.f9)}),Yt=By,Iy={$:5},Fy=Iy,Ey=ic({io:.44757,is:.40745}),Vy=function(e){return e},as=P(kr,114/255,159/255,207/255,1),ts=function(e){return e},Zc=function(e){return e},jy={$:1},Ny=jy,Hy=v(function(e,r){var n=e,t=Ht(r.e_),i=t.io,o=t.is,l=t.dO,c=a(Yi,r.cj,r.a4),u=c;return{b1:ma(u),f0:n,cf:fa(u),$7:0,cy:va(u),dD:2,io:i,is:o,dO:l}}),is=function(e){return a(Hy,rs(!0),{a4:e.a4,cj:e.cj,e_:Gi(e.e_)})},os=P(kr,52/255,101/255,164/255,1),Zt=v(function(e,r){return{$:0,a:e,b:r}}),Qc=v(function(e,r){var n=e,t=r;return le(t,n)>-1}),Kc=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),Ry=_n({io:-1,is:0,dO:0}),Oy=_n({io:0,is:-1,dO:0}),Gy=dr(function(e,r,n,t,i,o){var l=a(Qc,n,o)?hc:Fm,c=a(Qc,r,i)?Ui:Oy,u=a(Qc,e,t)?Uf:Ry,m=I(Fe(a(wn,e,t)),Fe(a(wn,r,i)),Fe(a(wn,n,o))),s=b(Je,a(Kc,e,t),a(Kc,r,i),a(Kc,n,o)),d=Hr({df:s,dM:u,dN:c,dP:l});return{fK:d,a5:m}}),ls=v(function(e,r){return Qe(Gy,sa(e),da(e),pa(e),sa(r),da(r),pa(r))}),Qa=v(function(e,r){var n=r/2;return a(Zt,e,a(ls,b(Wn,-n,-n,-n),b(Wn,n,n,n)))}),ho=function(e){return{$:5,a:e}},Sr=function(e){return ho(e)},cs=P(kr,138/255,226/255,52/255,1),Wy=P(kr,173/255,127/255,168/255,1),Xc=function(e){return b(xf,0,1,e<=.04045?e/12.92:a(At,(e+.055)/1.055,2.4))},Jy=function(e){var r=Gl(e),n=r.hs,t=r.gz,i=r.fP;return b(Et,Xc(n),Xc(t),Xc(i))},nr=function(e){return b(Xm,0,Gc(Jy(e)),Gc(0))},bo=v(function(e,r){return{$:2,a:e,b:r}}),eu=v(function(e,r){return{$:4,a:e,b:r}}),_o=v(function(e,r){return{$:3,a:e,b:r}}),wo=v(function(e,r){return{$:1,a:e,b:r}}),qy=T(function(e,r,n){return{io:e,is:r,dO:n}}),Qt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dO:t.dO+n.dO}}),Uy=v(function(e,r){return Hr({df:a(Qt,e,$a(r)),dM:Rn(r),dN:On(r),dP:Gn(r)})}),Yy=v(function(e,r){return{fK:a(Uy,e,Ki(r)),a5:no(r)}}),ba=v(function(e,r){return{gk:r,df:e}}),Zy=v(function(e,r){var n=r;return a(ba,a(Qt,e,n.df),n.gk)}),Qy=v(function(e,r){var n=r;return{m:a(Zy,e,n.m),g2:n.g2,hq:n.hq}}),Ky=function(e){return e},ru=v(function(e,r){var n=qc(r),t=n.a,i=n.b;return Ky(z(e(t),e(i)))}),Xy=v(function(e,r){return a(ru,Qt(e),r)}),yo=v(function(e,r){return{f1:r,hq:Fe(e)}}),ex=v(function(e,r){return a(yo,mo(r),a(Qt,e,fo(r)))}),nu=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return I(e(t),e(i),e(o))}),rx=v(function(e,r){return a(nu,Qt(e),r)}),xo=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=b(qy,n,t,i);switch(r.$){case 0:var l=r.a,c=r.b;return a(Zt,l,a(Yy,o,c));case 1:var l=r.a,u=r.b;return a(wo,l,a(rx,o,u));case 3:var l=r.a,m=r.b;return a(_o,l,a(ex,o,m));case 2:var l=r.a,s=r.b;return a(bo,l,a(Qy,o,s));case 4:var l=r.a,d=r.b;return a(eu,l,a(Xy,o,d));default:var g=r.a;return ho(a(J,xo(I(n,t,i)),g))}}),Sn=function(e){return xo(I(e,0,0))},ar=function(e){return xo(I(0,e,0))},So=T(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ha(l),u=Za(l),m=t.gk,s=m,d=s.io*u,g=c*d,f=d*d,_=s.is*u,w=c*_,x=d*_,S=_*_,y=1-2*(f+S),C=s.dO*u,F=c*C,U=2*(x-F),Q=2*(x+F),G=d*C,Y=2*(G+w),Z=2*(G-w),V=_*C,ne=2*(V-g),fe=2*(V+g),we=C*C,me=1-2*(S+we),se=1-2*(f+we);return{io:me*o.io+U*o.is+Y*o.dO,is:Q*o.io+se*o.is+ne*o.dO,dO:Z*o.io+fe*o.is+y*o.dO}}),Kt=T(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=ha(l),u=Za(l),m=t.df,s=m,d=o.io-s.io,g=o.is-s.is,f=o.dO-s.dO,_=t.gk,w=_,x=w.io*u,S=c*x,y=x*x,C=w.is*u,F=c*C,U=x*C,Q=C*C,G=1-2*(y+Q),Y=w.dO*u,Z=c*Y,V=2*(U-Z),ne=2*(U+Z),fe=x*Y,we=2*(fe+F),me=2*(fe-F),se=C*Y,xe=2*(se-S),de=2*(se+S),Be=Y*Y,Te=1-2*(Q+Be),Ze=1-2*(y+Be);return{io:s.io+Te*d+V*g+we*f,is:s.is+ne*d+Ze*g+xe*f,dO:s.dO+me*d+de*g+G*f}}),nx=T(function(e,r,n){return Hr({df:b(Kt,e,r,$a(n)),dM:b(So,e,r,Rn(n)),dN:b(So,e,r,On(n)),dP:b(So,e,r,Gn(n))})}),ax=T(function(e,r,n){return{fK:b(nx,e,r,Ki(n)),a5:no(n)}}),tx=v(function(e,r){var n=a(Kt,e,r),t=a(So,e,r);return function(i){var o=i;return a(ba,n(o.df),t(o.gk))}}),ix=T(function(e,r,n){var t=n;return{m:b(tx,e,r,t.m),g2:t.g2,hq:t.hq}}),ox=T(function(e,r,n){return a(ru,a(Kt,e,r),n)}),lx=T(function(e,r,n){return a(yo,mo(n),b(Kt,e,r,fo(n)))}),cx=T(function(e,r,n){return a(nu,a(Kt,e,r),n)}),Co=T(function(e,r,n){switch(n.$){case 0:var t=n.a,i=n.b;return a(Zt,t,b(ax,e,r,i));case 1:var t=n.a,o=n.b;return a(wo,t,b(cx,e,r,o));case 3:var t=n.a,l=n.b;return a(_o,t,b(lx,e,r,l));case 2:var t=n.a,c=n.b;return a(bo,t,b(ix,e,r,c));case 4:var t=n.a,u=n.b;return a(eu,t,b(ox,e,r,u));default:var m=n.a;return ho(a(J,a(Co,e,r),m))}}),ux=a(ba,fr,pc),Lo=v(function(e,r){return b(Co,ux,hn(e),r)}),$x=a(ba,fr,gc),an=v(function(e,r){return b(Co,$x,hn(e),r)}),vx=a(ba,fr,Yf),Ka=v(function(e,r){return b(Co,vx,hn(e),r)}),us=v(function(e,r){return(r-t$(r/e)*e)/e}),Rr=v(function(e,r){return 360*a(us,e,r)}),fx=js,mx=v(function(e,r){var n=r.a,t=r.b,i=r.c;return a(wo,e,b(xr,b(Wn,n.io,n.is,n.dO),b(Wn,t.io,t.is,t.dO),b(Wn,i.io,i.is,i.dO)))}),Po=P(kr,255/255,255/255,255/255,1),$s=function(){var e=bn(3)/2,r=a(mx,nr(Po),I({io:e,is:0,dO:0},{io:0,is:.5,dO:0},{io:0,is:-.5,dO:0})),n=a(Sn,-(e/3),a(an,fx(1/3),r));return a(ar,-(e/3),a(Lo,Hn(90),Sr($([a(Sn,-(e/3),r),n,a(Ka,Hn(120),n),a(Ka,Hn(240),n)]))))}(),sx=function(e){var r=function(n){return a(Ka,a(Rr,300,e.H),a(an,a(Rr,300,e.H),a(Lo,a(Rr,300,e.H),n)))};return Sr($([a(ar,2,a(Sn,-2,r(a(Qa,nr(cs),1)))),a(ar,2,a(Sn,2,r(a(Qa,nr(os),1)))),a(ar,4,r(a(Qa,nr(Wy),1))),a(ar,1.5,r($s))]))},au=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=I(n/2,t/2,i/2),l=o.a,c=o.b,u=o.c;return a(Zt,e,a(ls,b(Wn,-l,-c,-u),b(Wn,l,c,u)))}),dx=T(function(e,r,n){return{m:a(ba,e,r),g2:Fe(n.g2),hq:Fe(n.hq)}}),px=T(function(e,r,n){return a(bo,e,b(dx,fr,Ui,{g2:nn(n),hq:nn(r)}))}),Xt=T(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dO:t.dO+r*(i.dO-t.dO)}}),gx=T(function(e,r,n){var t=Ki(n),i=Rn(t),o=On(t),l=Gn(t),c=b(Xt,e,r,$a(t)),u=r>=0?Hr({df:c,dM:i,dN:o,dP:l}):Hr({df:c,dM:Jn(i),dN:Jn(o),dP:Jn(l)}),m=no(n),s=m.a,d=m.b,g=m.c,f=Fe(a(ye,r,s)),_=Fe(a(ye,r,d)),w=Fe(a(ye,r,g));return{fK:u,a5:I(f,_,w)}}),vs=function(e){return Hm(Wc(e))},hx=function(e){return Rm(Wc(e))},bx=T(function(e,r,n){var t=Fe(a(ye,r,Gm(n))),i=Fe(a(ye,r,Om(n))),o=r>=0?vs(n):Jn(vs(n)),l=b(Xt,e,r,hx(n));return{m:a(ba,l,o),g2:i,hq:t}}),_x=T(function(e,r,n){return a(ru,a(Xt,e,r),n)}),wx=T(function(e,r,n){return a(yo,a(ye,ce(r),mo(n)),b(Xt,e,r,fo(n)))}),yx=T(function(e,r,n){return a(nu,a(Xt,e,r),n)}),ei=v(function(e,r){switch(r.$){case 0:var n=r.a,t=r.b;return a(Zt,n,b(gx,fr,e,t));case 1:var n=r.a,i=r.b;return a(wo,n,b(yx,fr,e,i));case 3:var n=r.a,o=r.b;return a(_o,n,b(wx,fr,e,o));case 2:var n=r.a,l=r.b;return a(bo,n,b(bx,fr,e,l));case 4:var n=r.a,c=r.b;return a(eu,n,b(_x,fr,e,c));default:var u=r.a;return ho(a(J,ei(e),u))}}),xx=function(){var e=Sr($([a(Qa,nr(Po),1),a(an,Hn(45),a(Qa,nr(Po),1))]));return Sr($([Sr($([e,a(ar,-.4,a(ei,1.3,e))])),a(ar,-.7,b(px,nr(Po),1,.5))]))}(),fs=P(kr,211/255,215/255,207/255,1),Sx=P(kr,193/255,125/255,17/255,1),Cx=v(function(e,r){return a(De,function(n){if(n.$===1){var t=n.b;return t}else return 0},a(gt,e,r.aO))}),Lx=v(function(e,r){return a(Ce,0,Ni(a(mn,Cx(e),r)))}),Px=v(function(e,r){return a(Lx,e,r.f9)}),zx=Px,Mx=q(function(e,r,n,t){var i=I(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,m=c*2-u,s=function(_){var w=_<0?_+1:_>1?_-1:_;return w*6<1?m+(u-m)*w*6:w*2<1?u:w*3<2?m+(u-m)*(2/3-w)*6:m},d=s(o-1/3),g=s(o),f=s(o+1/3);return P(kr,f,g,d,t)}),Tx=T(function(e,r,n){return P(Mx,e,r,n,1)}),kx=function(e){return 2*er*e},tu=q(function(e,r,n,t){return e+(r-e)*(1+ha(kx(a(us,n,t))))/2}),Dx=function(e){var r=a(zx,"number of tree blocks",e),n=function(t){var i=a(aa,2,.2*(r-t)),o=b(Tx,P(tu,t/r,1,10,e.H),.6,.6),l=.25;return a(an,a(Yt,"turning speed of the tree",e)*t*P(tu,3,5,10,e.H),a(ar,t*1.2*l,a(au,nr(o),I(i,l,i))))};return Sr($([a(au,nr(Sx),I(.2,8,.2)),Sr(a(J,n,a(Lr,0,r-1)))]))},Ax=function(e){var r=function(t){return a(ar,-1,a(au,t,I(10,1,10)))},n=function(t){return Sr($([r(t),a(an,Hn(45),r(t))]))};return a(an,a(Rr,1e3,e.H),Sr($([xx,n(nr(fs)),a(ar,-.1,a(ei,1.1,n(nr(os)))),a(ar,-.2,a(ei,1.2,n(nr(fs)))),a(ar,1,a(Sn,5,Dx(e))),Sr(a(J,function(t){return a(an,Hn(t*45),a(ar,-1/3,a(Sn,5.5,a(ei,2,$s))))},a(Lr,1,7)))])))},Bx=P(kr,245/255,121/255,0/255,1),Ix=function(e){var r=14;return Sr(a(J,function(n){return a(ar,4,a(Ka,a(Rr,1e3,e.H),a(Lo,a(Rr,1e3,e.H),a(an,-a(Rr,200,e.H),a(an,-(n/r*Hn(360)),a(Sn,1.3,a(ar,P(tu,-1,1,10,e.H),a(Lo,a(Rr,600,e.H),a(Ka,a(Rr,300,e.H),a(Qa,nr(Bx),.3))))))))))},a(Lr,0,r-1)))},Fx=function(e){return xo(I(0,0,e))},ms=v(function(e,r){return a(_o,e,a(yo,nn(r),fr))}),Ex=function(e){return Sr($([a(an,-a(Rr,640,e.H),a(Fx,3.5,a(Ka,a(Rr,100,e.H),Sr($([a(Sn,-.02,a(ms,nr(as),.5)),a(Sn,.02,a(ms,nr(cs),.5))])))))]))},Vx=v(function(e,r){return $([Ax(e),sx(e),Ix(e),Ex(e)])}),ss=function(e){var r=e;return r},jx=function(e){e:for(;;){if(ue(e.ed,Xr)&&ue(e.ee,Xr))return yr;if(a(wf,Fe(e.ed),Fe(e.ee))){var r={a4:e.a4,ed:e.ee,ee:e.ed,fi:Jn(e.fi)};e=r;continue e}else{var n=ce(ss(e.ee)/er),t=ce(ss(e.ed)/er),i=Dr(e.fi),o=i.io,l=i.is,c=i.dO,u=a(Yi,tm(1),e.a4),m=u;return{b1:t*ma(m),f0:!1,cf:t*fa(m),$7:n/t,cy:t*va(m),dD:3,io:o,is:l,dO:c}}}},Nx=function(e){return jx({a4:e.a4,ed:e.ed,ee:e.ee,fi:a(Uc,hn(e.b0),hn(e.cd))})},Hx=v(function(e,r){var n=yy({b0:a(Yt,"azimuth for third light",e),a4:l_(Vy(2e3)),cd:a(Yt,"elevation for third light",e),cj:Zc(120)}),t=is({a4:Yc,cj:ts(6e3),e_:{io:2,is:3,dO:1}}),i=Nx({b0:a(Yt,"azimuth for fourth light",e),a4:Yc,cd:a(Yt,"elevation for fourth light",e),ed:Zc(20),ee:Zc(10)}),o=is({a4:Ey,cj:ts(6e3),e_:{io:-2,is:4,dO:1}});return a(_y,{fG:Ny,fL:as,fZ:i_,f5:.1,cS:e.cS,gs:Sy(6),g4:P(ky,o,t,n,i),dw:e.dw,ic:Fy,il:Yc},a(Vx,e,r))}),Rx=P(F1,Hx,O1,R1,E1);const Ox={Main:{init:Rx(a(W,function(e){return or({gX:e})},a(O,"inputs",a(W,function(e){return a(W,function(r){return a(W,function(n){return a(W,function(t){return a(W,function(i){return a(W,function(o){return a(W,function(l){return or({H:l,cS:o,gn:i,g0:t,ho:n,dw:r,ik:e})},a(O,"clock",Ne))},a(O,"devicePixelRatio",Ne))},a(O,"dt",Ne))},a(O,"keyboard",a(W,function(t){return a(W,function(i){return a(W,function(o){return a(W,function(l){return a(W,function(c){return a(W,function(u){return a(W,function(m){return a(W,function(s){return a(W,function(d){return or({fF:d,gb:s,dZ:m,gm:u,g1:c,hp:l,hv:o,hH:i,fh:t})},a(O,"alt",_e))},a(O,"control",_e))},a(O,"down",_e))},a(O,"downs",yi(za)))},a(O,"left",_e))},a(O,"pressedKeys",yi(za)))},a(O,"right",_e))},a(O,"shift",_e))},a(O,"up",_e))))},a(O,"pointer",a(W,function(n){return a(W,function(t){return a(W,function(i){return a(W,function(o){return a(W,function(l){return a(W,function(c){return a(W,function(u){return a(W,function(m){return or({dZ:m,gY:u,g8:c,hw:l,hx:o,fh:i,io:t,is:n})},a(O,"down",_e))},a(O,"isDown",_e))},a(O,"move",_e))},a(O,"rightDown",_e))},a(O,"rightUp",_e))},a(O,"up",_e))},a(O,"x",Ne))},a(O,"y",Ne))))},a(O,"screen",a(W,function(r){return a(W,function(n){return or({gG:n,im:r})},a(O,"height",Ne))},a(O,"width",Ne))))},a(O,"wheel",a(W,function(e){return a(W,function(r){return or({gf:r,gg:e})},a(O,"deltaX",Ne))},a(O,"deltaY",Ne)))))))(0)}},K={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Gx=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),t=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",l=f=>f.code=="ArrowUp",c=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(K.keyboard.downs.push(f.code),K.keyboard.pressedKeys.push(f.code),r(f)&&(K.keyboard.control=!0),n(f)&&(K.keyboard.alt=!0),t(f)&&(console.log("yo"),K.keyboard.shift=!0),i(f)&&(K.keyboard.left=!0),o(f)&&(K.keyboard.right=!0),l(f)&&(K.keyboard.up=!0),c(f)&&(console.log("yey"),K.keyboard.down=!0))}),window.addEventListener("keyup",f=>{K.keyboard.pressedKeys=K.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(K.keyboard.control=!1,K.keyboard.pressedKeys=[]),n(f)&&(K.keyboard.alt=!1),t(f)&&(K.keyboard.shift=!1),i(f)&&(K.keyboard.left=!1),o(f)&&(K.keyboard.right=!1),l(f)&&(K.keyboard.up=!1),c(f)&&(K.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{K.pointer.x=-.5*K.screen.width+f.pageX,K.pointer.y=.5*K.screen.height-f.pageY,u(f)&&(K.pointer.down=!0,K.pointer.isDown=!0),m(f)&&(K.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{K.pointer.move=!0,K.pointer.x=-.5*K.screen.width+f.pageX,K.pointer.y=.5*K.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(K.pointer.up=!0,K.pointer.isDown=!1),m(f)&&(K.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(K.pointer.up=!0,K.pointer.isDown=!1),m(f)&&(K.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{K.wheel.deltaX=f.deltaX,K.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(K)}),window.addEventListener("focus",f=>{s(K)}),window.addEventListener("visibilitychange",f=>{s(K)}),window.addEventListener("resize",()=>{K.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,w=_-K.clock;w<.009||(K.dt=w,K.clock=_,e.ports.tick.send(K),d(K)),window.requestAnimationFrame(g)}},Wx=Ox.Main.init({node:document.querySelector("#app div"),flags:{inputs:K}});Gx(Wx);
