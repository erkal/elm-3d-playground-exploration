const Qm=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Qm();function zn(e,r,n){return n.a=e,n.f=r,n}function v(e){return zn(2,e,function(r){return function(n){return e(r,n)}})}function M(e){return zn(3,e,function(r){return function(n){return function(t){return e(r,n,t)}}})}function ee(e){return zn(4,e,function(r){return function(n){return function(t){return function(i){return e(r,n,t,i)}}}})}function Ye(e){return zn(5,e,function(r){return function(n){return function(t){return function(i){return function(o){return e(r,n,t,i,o)}}}}})}function wr(e){return zn(6,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return e(r,n,t,i,o,l)}}}}}})}function Pi(e){return zn(7,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return e(r,n,t,i,o,l,c)}}}}}}})}function ze(e){return zn(8,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,t,i,o,l,c,u)}}}}}}}})}function ml(e){return zn(9,e,function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return e(r,n,t,i,o,l,c,u,f)}}}}}}}}})}function a(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,t){return e.a===3?e.f(r,n,t):e(r)(n)(t)}function P(e,r,n,t,i){return e.a===4?e.f(r,n,t,i):e(r)(n)(t)(i)}function F(e,r,n,t,i,o){return e.a===5?e.f(r,n,t,i,o):e(r)(n)(t)(i)(o)}function ar(e,r,n,t,i,o,l){return e.a===6?e.f(r,n,t,i,o,l):e(r)(n)(t)(i)(o)(l)}function sl(e,r,n,t,i,o,l,c){return e.a===7?e.f(r,n,t,i,o,l,c):e(r)(n)(t)(i)(o)(l)(c)}function pt(e,r,n,t,i,o,l,c,u){return e.a===8?e.f(r,n,t,i,o,l,c,u):e(r)(n)(t)(i)(o)(l)(c)(u)}function es(e,r,n,t,i,o,l,c,u,f){return e.a===9?e.f(r,n,t,i,o,l,c,u,f):e(r)(n)(t)(i)(o)(l)(c)(u)(f)}var rs=[];function ns(e){return e.length}var as=M(function(e,r,n){for(var t=new Array(e),i=0;i<e;i++)t[i]=n(r+i);return t}),ts=v(function(e,r){for(var n=new Array(e),t=0;t<e&&r.b;t++)n[t]=r.a,r=r.b;return n.length=t,L(n,r)}),is=v(function(e,r){return r[e]});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,t=new Array(n+1),i=0;i<n;i++)t[i]=r[i];return t[n]=e,t});M(function(e,r,n){for(var t=n.length,i=0;i<t;i++)r=a(e,n[i],r);return r});var os=M(function(e,r,n){for(var t=n.length-1;t>=0;t--)r=a(e,n[t],r);return r});v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=e(r[i]);return t});M(function(e,r,n){for(var t=n.length,i=new Array(t),o=0;o<t;o++)i[o]=a(e,r+o,n[o]);return i});M(function(e,r,n){return n.slice(e,r)});M(function(e,r,n){var t=r.length,i=e-t;i>n.length&&(i=n.length);for(var o=t+i,l=new Array(o),c=0;c<t;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+t]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+ls()),r});function ls(e){return"<internals>"}function Ta(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function he(e,r){for(var n,t=[],i=zo(e,r,0,t);i&&(n=t.pop());i=zo(n.a,n.b,0,t));return i}function zo(e,r,n,t){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ta(5),!1;if(n>100)return t.push(L(e,r)),!0;e.$<0&&(e=Oc(e),r=Oc(r));for(var i in e)if(!zo(e[i],r[i],n+1,t))return!1;return!0}v(he);v(function(e,r){return!he(e,r)});function _e(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=_e(e.a,r.a))||(n=_e(e.b,r.b))?n:_e(e.c,r.c);for(;e.b&&r.b&&!(n=_e(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return _e(e,r)<0});v(function(e,r){return _e(e,r)<1});v(function(e,r){return _e(e,r)>0});v(function(e,r){return _e(e,r)>=0});var cs=v(function(e,r){var n=_e(e,r);return n<0?B$:n?eg:E$}),gt=0;function L(e,r){return{a:e,b:r}}function U(e,r,n){return{a:e,b:r,c:n}}function Re(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n}v(Y);function Y(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Jr(e.a,r);e=e.b;for(var t=n;e.b;e=e.b)t=t.b=Jr(e.a,r);return n}var D={$:0};function Jr(e,r){return{$:1,a:e,b:r}}var us=v(Jr);function $(e){for(var r=D,n=e.length;n--;)r=Jr(e[n],r);return r}function zi(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var $s=M(function(e,r,n){for(var t=[];r.b&&n.b;r=r.b,n=n.b)t.push(a(e,r.a,n.a));return $(t)});ee(function(e,r,n,t){for(var i=[];r.b&&n.b&&t.b;r=r.b,n=n.b,t=t.b)i.push(h(e,r.a,n.a,t.a));return $(i)});Ye(function(e,r,n,t,i){for(var o=[];r.b&&n.b&&t.b&&i.b;r=r.b,n=n.b,t=t.b,i=i.b)o.push(P(e,r.a,n.a,t.a,i.a));return $(o)});wr(function(e,r,n,t,i,o){for(var l=[];r.b&&n.b&&t.b&&i.b&&o.b;r=r.b,n=n.b,t=t.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,t.a,i.a,o.a));return $(l)});v(function(e,r){return $(zi(r).sort(function(n,t){return _e(e(n),e(t))}))});v(function(e,r){return $(zi(r).sort(function(n,t){var i=a(e,n,t);return i===E$?0:i===B$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var vs=v(Math.pow);v(function(e,r){return r%e});var fs=v(function(e,r){var n=r%e;return e===0?Ta(11):n>0&&e<0||n<0&&e>0?n+e:n}),ms=Math.PI,ss=Math.cos,ds=Math.sin,ps=Math.tan;v(Math.atan2);function gs(e){return e}function hs(e){return e===1/0||e===-1/0}var bs=Math.ceil,_s=Math.floor,xs=Math.round,ws=Math.sqrt,Dc=Math.log,ys=isNaN;function Ss(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Cs=v(function(e,r){return e+r});function Ls(e){var r=e.charCodeAt(0);return isNaN(r)?J:X(55296<=r&&r<=56319?L(e[0]+e[1],e.slice(2)):L(e[0],e.slice(1)))}v(function(e,r){return e+r});function Ps(e){return e.length}v(function(e,r){for(var n=r.length,t=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){t[i]=e(r[i]+r[i+1]),i+=2;continue}t[i]=e(r[i]),i++}return t.join("")});v(function(e,r){for(var n=[],t=r.length,i=0;i<t;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function zs(e){for(var r=e.length,n=new Array(r),t=0;t<r;){var i=e.charCodeAt(t);55296<=i&&i<=56319?(n[r-t]=e[t+1],t++,n[r-t]=e[t-1],t++):(n[r-t]=e[t],t++)}return n.join("")}M(function(e,r,n){for(var t=n.length,i=0;i<t;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=a(e,o,r)}return r});var Ms=M(function(e,r,n){for(var t=n.length;t--;){var i=n[t],o=n.charCodeAt(t);56320<=o&&o<=57343&&(t--,i=n[t]+i),r=a(e,i,r)}return r}),Ts=v(function(e,r){return r.split(e)}),ks=v(function(e,r){return r.join(e)}),Ds=M(function(e,r,n){return n.slice(e,r)});function Fs(e){return $(e.trim().split(/\s+/g))}function As(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),e(t))return!0}return!1});var Is=v(function(e,r){for(var n=r.length;n--;){var t=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,t=r[n]+t),!e(t))return!1}return!0}),Es=v(function(e,r){return r.indexOf(e)>-1}),Bs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Vs=v(function(e,r){var n=e.length;if(n<1)return D;for(var t=0,i=[];(t=r.indexOf(e,t))>-1;)i.push(t),t=t+n;return $(i)});function u$(e){return e+""}function Rs(e){for(var r=0,n=e.charCodeAt(0),t=n==43||n==45?1:0,i=t;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return J;r=10*r+o-48}return i==t?J:X(n==45?-r:r)}function Us(e){if(e.length===0||/[\sxbo]/.test(e))return J;var r=+e;return r===r?X(r):J}function js(e){return zi(e).join("")}function Ns(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Hs(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Gs(e){return{$:0,a:e}}function Ws(e){return{$:1,a:e}}function dl(e){return{$:2,b:e}}var Os=dl(function(e){return typeof e=="boolean"?Ge(e):jr("a BOOL",e)}),qs=dl(function(e){return typeof e=="number"?Ge(e):jr("a FLOAT",e)}),Js=dl(function(e){return typeof e=="string"?Ge(e):e instanceof String?Ge(e+""):jr("a STRING",e)});function Ys(e){return{$:3,b:e}}var Xs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Mn(e,r){return{$:9,f:e,g:r}}var Ks=v(function(e,r){return{$:10,b:r,h:e}}),Zs=v(function(e,r){return Mn(e,[r])}),Qs=M(function(e,r,n){return Mn(e,[r,n])});ee(function(e,r,n,t){return Mn(e,[r,n,t])});Ye(function(e,r,n,t,i){return Mn(e,[r,n,t,i])});wr(function(e,r,n,t,i,o){return Mn(e,[r,n,t,i,o])});Pi(function(e,r,n,t,i,o,l){return Mn(e,[r,n,t,i,o,l])});ze(function(e,r,n,t,i,o,l,c){return Mn(e,[r,n,t,i,o,l,c])});ml(function(e,r,n,t,i,o,l,c,u){return Mn(e,[r,n,t,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return Cr(e,n)}catch(t){return tr(a(zl,"This is not valid JSON! "+t.message,r))}});var $$=v(function(e,r){return Cr(e,r)});function Cr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ge(e.c):jr("null",r);case 3:return Et(r)?Fc(e.b,r,$):jr("a LIST",r);case 4:return Et(r)?Fc(e.b,r,ed):jr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return jr("an OBJECT with a field named `"+n+"`",r);var f=Cr(e.b,r[n]);return Ar(f)?f:tr(a(qc,n,f.a));case 7:var t=e.e;if(!Et(r))return jr("an ARRAY",r);if(t>=r.length)return jr("a LONGER array. Need index "+t+" but only see "+r.length+" entries",r);var f=Cr(e.b,r[t]);return Ar(f)?f:tr(a(V$,t,f.a));case 8:if(typeof r!="object"||r===null||Et(r))return jr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Cr(e.b,r[o]);if(!Ar(f))return tr(a(qc,o,f.a));i=Jr(L(o,f.a),i)}return Ge(mr(i));case 9:for(var l=e.f,c=e.g,u=0;u<c.length;u++){var f=Cr(c[u],r);if(!Ar(f))return f;l=l(f.a)}return Ge(l);case 10:var f=Cr(e.b,r);return Ar(f)?Cr(e.h(f.a),r):f;case 11:for(var m=D,p=e.g;p.b;p=p.b){var f=Cr(p.a,r);if(Ar(f))return f;m=Jr(f.a,m)}return tr(rg(mr(m)));case 1:return tr(a(zl,e.a,r));case 0:return Ge(e.a)}}function Fc(e,r,n){for(var t=r.length,i=new Array(t),o=0;o<t;o++){var l=Cr(e,r[o]);if(!Ar(l))return tr(a(V$,o,l.a));i[o]=l.a}return Ge(n(i))}function Et(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function ed(e){return a(pg,e.length,function(r){return e[r]})}function jr(e,r){return tr(a(zl,"Expecting "+e,r))}function $a(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return $a(e.b,r.b);case 6:return e.d===r.d&&$a(e.b,r.b);case 7:return e.e===r.e&&$a(e.b,r.b);case 9:return e.f===r.f&&Ac(e.g,r.g);case 10:return e.h===r.h&&$a(e.b,r.b);case 11:return Ac(e.g,r.g)}}function Ac(e,r){var n=e.length;if(n!==r.length)return!1;for(var t=0;t<n;t++)if(!$a(e[t],r[t]))return!1;return!0}var rd=v(function(e,r){return JSON.stringify(r,null,e)+""});function v$(e){return e}function nd(){return[]}function ad(){return{}}var td=M(function(e,r,n){return n[e]=r,n});function id(e){return v(function(r,n){return n.push(e(r)),n})}function Zn(e){return{$:0,a:e}}function od(e){return{$:1,a:e}}function sn(e){return{$:2,b:e,c:null}}var Mo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ld(e){return{$:5,b:e}}var cd=0;function pl(e){var r={$:0,e:cd++,f:e,g:null,h:[]};return gl(r),r}function f$(e){return sn(function(r){r(Zn(pl(e)))})}function m$(e,r){e.h.push(r),gl(e)}var ud=v(function(e,r){return sn(function(n){m$(e,r),n(Zn(gt))})}),eo=!1,Ic=[];function gl(e){if(Ic.push(e),!eo){for(eo=!0;e=Ic.shift();)$d(e);eo=!1}}function $d(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,gl(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}ee(function(e,r,n,t){return hl(r,t,e.gS,e.ii,e.hX,function(){return function(){}})});function hl(e,r,n,t,i,o){var l=a($$,e,r?r.flags:void 0);Ar(l)||Ta(2);var c={},u=n(l.a),f=u.a,m=o(b,f),p=vd(c,b);function b(s,x){var _=a(t,s,f);m(f=_.a,x),Bc(c,_.b,i(f))}return Bc(c,u.b,i(f)),p?{ports:p}:{}}var Wr={};function vd(e,r){var n;for(var t in Wr){var i=Wr[t];i.a&&(n=n||{},n[t]=i.a(t,r)),e[t]=md(i,r)}return n}function fd(e,r,n,t,i){return{b:e,c:r,d:n,e:t,f:i}}function md(e,r){var n={g:r,h:void 0},t=e.c,i=e.d,o=e.e,l=e.f;function c(u){return a(Mo,c,ld(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&l?P(t,n,m.i,m.j,u):h(t,n,o?m.i:m.j,u)}))}return n.h=pl(a(Mo,c,e.b))}var sd=v(function(e,r){return sn(function(n){e.g(r),n(Zn(gt))})});v(function(e,r){return a(ud,e.h,{$:0,a:r})});function s$(e){return function(r){return{$:1,k:e,l:r}}}function dd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Ec=[],ro=!1;function Bc(e,r,n){if(Ec.push({p:e,q:r,r:n}),!ro){ro=!0;for(var t;t=Ec.shift();)pd(t.p,t.q,t.r);ro=!1}}function pd(e,r,n){var t={};ii(!0,r,t,null),ii(!1,n,t,null);for(var i in e)m$(e[i],{$:"fx",a:t[i]||{i:D,j:D}})}function ii(e,r,n,t){switch(r.$){case 1:var i=r.k,o=gd(e,i,t,r.l);n[i]=hd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)ii(e,l.a,n,t);return;case 3:ii(e,r.o,n,{s:r.n,t});return}}function gd(e,r,n,t){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Wr[r].e:Wr[r].f;return a(o,i,t)}function hd(e,r,n){return n=n||{i:D,j:D},e?n.i=Jr(r,n.i):n.j=Jr(r,n.j),n}function bd(e){Wr[e]&&Ta(3)}v(function(e,r){return r});function _d(e,r){return bd(e),Wr[e]={f:xd,u:r,a:wd},s$(e)}var xd=v(function(e,r){return function(n){return e(r(n))}});function wd(e,r){var n=D,t=Wr[e].u,i=Zn(null);Wr[e].b=i,Wr[e].c=M(function(l,c,u){return n=c,i});function o(l){var c=a($$,t,l);Ar(c)||Ta(4,e,c.a);for(var u=c.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var oi,tn=typeof document!="undefined"?document:{};function bl(e,r){e.appendChild(r)}ee(function(e,r,n,t){var i=t.node;return i.parentNode.replaceChild(xn(e,function(){}),i),{}});function To(e){return{$:0,a:e}}var d$=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:xl(n),e:i,f:e,b:o}})}),dn=d$(void 0),yd=v(function(e,r){return v(function(n,t){for(var i=[],o=0;t.b;t=t.b){var l=t.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:xl(n),e:i,f:e,b:o}})}),Sd=yd(void 0);function Cd(e,r,n,t){return{$:3,d:xl(e),g:r,h:n,i:t}}var Ld=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Tn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Tn([e,r],function(){return e(r)})});M(function(e,r,n){return Tn([e,r,n],function(){return a(e,r,n)})});var Pd=ee(function(e,r,n,t){return Tn([e,r,n,t],function(){return h(e,r,n,t)})});Ye(function(e,r,n,t,i){return Tn([e,r,n,t,i],function(){return P(e,r,n,t,i)})});wr(function(e,r,n,t,i,o){return Tn([e,r,n,t,i,o],function(){return F(e,r,n,t,i,o)})});Pi(function(e,r,n,t,i,o,l){return Tn([e,r,n,t,i,o,l],function(){return ar(e,r,n,t,i,o,l)})});ze(function(e,r,n,t,i,o,l,c){return Tn([e,r,n,t,i,o,l,c],function(){return sl(e,r,n,t,i,o,l,c)})});ml(function(e,r,n,t,i,o,l,c,u){return Tn([e,r,n,t,i,o,l,c,u],function(){return pt(e,r,n,t,i,o,l,c,u)})});var p$=v(function(e,r){return{$:"a0",n:e,o:r}}),zd=v(function(e,r){return{$:"a1",n:e,o:r}}),_l=v(function(e,r){return{$:"a2",n:e,o:r}}),Br=v(function(e,r){return{$:"a3",n:e,o:r}});M(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function g$(e){return e=="script"?"p":e}function Md(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Td(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function kd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function h$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Dd=v(function(e,r){return r.$==="a0"?a(p$,r.n,Fd(e,r.o)):r});function Fd(e,r){var n=Dl(r);return{$:r.$,a:n?h(gg,n<3?Ad:Id,cr(e),r.a):a($i,e,r.a)}}var Ad=v(function(e,r){return L(e(r.a),r.b)}),Id=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function xl(e){for(var r={};e.b;e=e.b){var n=e.a,t=n.$,i=n.n,o=n.o;if(t==="a2"){i==="className"?Vc(r,i,o):r[i]=o;continue}var l=r[t]||(r[t]={});t==="a3"&&i==="class"?Vc(l,i,o):l[i]=o}return r}function Vc(e,r,n){var t=e[r];e[r]=t?t+" "+n:n}function xn(e,r){var n=e.$;if(n===5)return xn(e.k||(e.k=e.m()),r);if(n===0)return tn.createTextNode(e.a);if(n===4){for(var t=e.k,i=e.j;t.$===4;)typeof i!="object"?i=[i,t.j]:i.push(t.j),t=t.k;var o={j:i,p:r},l=xn(t,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return ko(l,r,e.d),l}var l=e.f?tn.createElementNS(e.f,e.c):tn.createElement(e.c);oi&&e.c=="a"&&l.addEventListener("click",oi(l)),ko(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)bl(l,xn(n===1?c[u]:c[u].b,r));return l}function ko(e,r,n){for(var t in n){var i=n[t];t==="a1"?Ed(e,i):t==="a0"?Rd(e,r,i):t==="a3"?Bd(e,i):t==="a4"?Vd(e,i):(t!=="value"&&t!=="checked"||e[t]!==i)&&(e[t]=i)}}function Ed(e,r){var n=e.style;for(var t in r)n[t]=r[t]}function Bd(e,r){for(var n in r){var t=r[n];typeof t!="undefined"?e.setAttribute(n,t):e.removeAttribute(n)}}function Vd(e,r){for(var n in r){var t=r[n],i=t.f,o=t.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Rd(e,r,n){var t=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=t[i];if(!o){e.removeEventListener(i,l),t[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Ud(r,o),e.addEventListener(i,l,wl&&{passive:Dl(o)<2}),t[i]=l}}var wl;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){wl=!0}}))}catch{}function Ud(e,r){function n(t){var i=n.q,o=Cr(i.a,t);if(!!Ar(o)){for(var l=Dl(i),c=o.a,u=l?l<3?c.a:c.aA:c,f=l==1?c.b:l==3&&c.dG,m=(f&&t.stopPropagation(),(l==2?c.b:l==3&&c.dv)&&t.preventDefault(),e),p,b;p=m.j;){if(typeof p=="function")u=p(u);else for(var b=p.length;b--;)u=p[b](u);m=m.p}m(u,f)}}return n.q=r,n}function jd(e,r){return e.$==r.$&&$a(e.a,r.a)}function b$(e,r){var n=[];return Ir(e,r,n,0),n}function nr(e,r,n,t){var i={$:r,r:n,s:t,t:void 0,u:void 0};return e.push(i),i}function Ir(e,r,n,t){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Yd(r),o=1;else{nr(n,0,t,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,f=u===c.length;f&&u--;)f=l[u]===c[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Ir(e.k,r.k,m,0),m.length>0&&nr(n,1,t,m);return;case 4:for(var p=e.j,b=r.j,s=!1,x=e.k;x.$===4;)s=!0,typeof p!="object"?p=[p,x.j]:p.push(x.j),x=x.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&p.length!==b.length){nr(n,0,t,r);return}(s?!Nd(p,b):p!==b)&&nr(n,2,t,b),Ir(x,_,n,t+1);return;case 0:e.a!==r.a&&nr(n,3,t,r.a);return;case 1:Rc(e,r,n,t,Hd);return;case 2:Rc(e,r,n,t,Gd);return;case 3:if(e.h!==r.h){nr(n,0,t,r);return}var S=yl(e.d,r.d);S&&nr(n,4,t,S);var C=r.i(e.g,r.g);C&&nr(n,5,t,C);return}}}function Nd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Rc(e,r,n,t,i){if(e.c!==r.c||e.f!==r.f){nr(n,0,t,r);return}var o=yl(e.d,r.d);o&&nr(n,4,t,o),i(e,r,n,t)}function yl(e,r,n){var t;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=yl(e[i],r[i]||{},i);o&&(t=t||{},t[i]=o);continue}if(!(i in r)){t=t||{},t[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&jd(l,c)||(t=t||{},t[i]=c)}for(var u in r)u in e||(t=t||{},t[u]=r[u]);return t}function Hd(e,r,n,t){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?nr(n,6,t,{v:c,i:l-c}):l<c&&nr(n,7,t,{v:l,e:o});for(var u=l<c?l:c,f=0;f<u;f++){var m=i[f];Ir(m,o[f],n,++t),t+=m.b||0}}function Gd(e,r,n,t){for(var i=[],o={},l=[],c=e.e,u=r.e,f=c.length,m=u.length,p=0,b=0,s=t;p<f&&b<m;){var x=c[p],_=u[b],S=x.a,C=_.a,w=x.b,T=_.b,G=void 0,Z=void 0;if(S===C){s++,Ir(w,T,i,s),s+=w.b||0,p++,b++;continue}var ne=c[p+1],te=u[b+1];if(ne){var ie=ne.a,re=ne.b;Z=C===ie}if(te){var q=te.a,de=te.b;G=S===q}if(G&&Z){s++,Ir(w,de,i,s),Ra(o,i,S,T,b,l),s+=w.b||0,s++,Ua(o,i,S,re,s),s+=re.b||0,p+=2,b+=2;continue}if(G){s++,Ra(o,i,C,T,b,l),Ir(w,de,i,s),s+=w.b||0,p+=1,b+=2;continue}if(Z){s++,Ua(o,i,S,w,s),s+=w.b||0,s++,Ir(re,T,i,s),s+=re.b||0,p+=2,b+=1;continue}if(ne&&ie===q){s++,Ua(o,i,S,w,s),Ra(o,i,C,T,b,l),s+=w.b||0,s++,Ir(re,de,i,s),s+=re.b||0,p+=2,b+=2;continue}break}for(;p<f;){s++;var x=c[p],w=x.b;Ua(o,i,x.a,w,s),s+=w.b||0,p++}for(;b<m;){var pe=pe||[],_=u[b];Ra(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||l.length>0||pe)&&nr(n,8,t,{w:i,x:l,y:pe})}var _$="_elmW6BL";function Ra(e,r,n,t,i,o){var l=e[n];if(!l){l={c:0,z:t,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Ir(l.z,t,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Ra(e,r,n+_$,t,i,o)}function Ua(e,r,n,t,i){var o=e[n];if(!o){var l=nr(r,9,i,void 0);e[n]={c:1,z:t,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Ir(t,o.z,c,i),nr(r,9,i,{w:c,A:o});return}Ua(e,r,n+_$,t,i)}function x$(e,r,n,t){ja(e,r,n,0,0,r.b,t)}function ja(e,r,n,t,i,o,l){for(var c=n[t],u=c.r;u===i;){var f=c.$;if(f===1)x$(e,r.k,c.s,l);else if(f===8){c.t=e,c.u=l;var m=c.s.w;m.length>0&&ja(e,r,m,0,i,o,l)}else if(f===9){c.t=e,c.u=l;var p=c.s;if(p){p.A.s=e;var m=p.w;m.length>0&&ja(e,r,m,0,i,o,l)}}else c.t=e,c.u=l;if(t++,!(c=n[t])||(u=c.r)>o)return t}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return ja(e,s,n,t,i+1,o,e.elm_event_node_ref)}for(var x=r.e,_=e.childNodes,S=0;S<x.length;S++){i++;var C=b===1?x[S]:x[S].b,w=i+(C.b||0);if(i<=u&&u<=w&&(t=ja(_[S],C,n,t,i,w,l),!(c=n[t])||(u=c.r)>o))return t;i=w}return t}function w$(e,r,n,t){return n.length===0?e:(x$(e,r,n,t),li(e,n))}function li(e,r){for(var n=0;n<r.length;n++){var t=r[n],i=t.t,o=Wd(i,t);i===e&&(e=o)}return e}function Wd(e,r){switch(r.$){case 0:return Od(e,r.s,r.u);case 4:return ko(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return li(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,t=0;t<o.i;t++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,t=o.v,i=e.childNodes[t];t<n.length;t++)e.insertBefore(xn(n[t],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var l=o.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=li(e,o.w),e;case 8:return qd(e,r);case 5:return r.s(e);default:Ta(10)}}function Od(e,r,n){var t=e.parentNode,i=xn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),t&&i!==e&&t.replaceChild(i,e),i}function qd(e,r){var n=r.s,t=Jd(n.y,r);e=li(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:xn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return t&&bl(e,t),e}function Jd(e,r){if(!!e){for(var n=tn.createDocumentFragment(),t=0;t<e.length;t++){var i=e[t],o=i.A;bl(n,o.c===2?o.s:xn(o.z,r.u))}return n}}function Sl(e){if(e.nodeType===3)return To(e.textContent);if(e.nodeType!==1)return To("");for(var r=D,n=e.attributes,t=n.length;t--;){var i=n[t],o=i.name,l=i.value;r=Jr(a(Br,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,f=e.childNodes,t=f.length;t--;)u=Jr(Sl(f[t]),u);return h(dn,c,r,u)}function Yd(e){for(var r=e.e,n=r.length,t=new Array(n),i=0;i<n;i++)t[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:t,f:e.f,b:e.b}}var Xd=ee(function(e,r,n,t){return hl(r,t,e.gS,e.ii,e.hX,function(i,o){var l=e.ik,c=t.node,u=Sl(c);return y$(o,function(f){var m=l(f),p=b$(u,m);c=w$(c,u,p,i),u=m})})});ee(function(e,r,n,t){return hl(r,t,e.gS,e.ii,e.hX,function(i,o){var l=e.dE&&e.dE(i),c=e.ik,u=tn.title,f=tn.body,m=Sl(f);return y$(o,function(p){oi=l;var b=c(p),s=dn("body")(D)(b.fU),x=b$(m,s);f=w$(f,m,x,i),m=s,oi=0,u!==b.id&&(tn.title=u=b.id)})})});var ci=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function y$(e,r){r(e);var n=0;function t(){n=n===1?0:(ci(t),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&ci(t),n=2)}}v(function(e,r){return a(Al,bt,sn(function(){r&&history.go(r),e()}))});v(function(e,r){return a(Al,bt,sn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return a(Al,bt,sn(function(){history.replaceState({},"",r),e()}))});var Kd={addEventListener:function(){},removeEventListener:function(){}},Zd=typeof window!="undefined"?window:Kd;M(function(e,r,n){return f$(sn(function(t){function i(o){pl(n(o))}return e.addEventListener(r,i,wl&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Cr(e,r);return Ar(n)?X(n.a):J});function S$(e,r){return sn(function(n){ci(function(){var t=document.getElementById(e);n(t?Zn(r(t)):od(hg(e)))})})}function Qd(e){return sn(function(r){ci(function(){r(Zn(e()))})})}v(function(e,r){return S$(r,function(n){return n[e](),gt})});v(function(e,r){return Qd(function(){return Zd.scroll(e,r),gt})});M(function(e,r,n){return S$(e,function(t){return t.scrollLeft=r,t.scrollTop=n,gt})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var ep=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return X(new RegExp(r,n))}catch{return J}});v(function(e,r){return r.match(e)!==null});var rp=M(function(e,r,n){for(var t=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var p=u[f];m[--f]=p?X(p):J}t.push(P(ff,u[0],u.index,i,$(m))),c=r.lastIndex}return r.lastIndex=l,$(t)});ee(function(e,r,n,t){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var f=arguments[c];u[--c]=f?X(f):J}return n(P(ff,l,arguments[arguments.length-2],i,$(u)))}return t.replace(r,o)});M(function(e,r,n){for(var t=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(t);if(!c)break;i.push(t.slice(o,c.index)),o=r.lastIndex}return i.push(t.slice(o)),r.lastIndex=l,$(i)});var Uc=0;function nt(e,r){for(;r.b;r=r.b)e(r.a)}function Cl(e){for(var r=0;e.b;e=e.b)r++;return r}var np=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},ap=Ye(function(e,r,n,t,i){return{$:0,a:e,b:r,c:n,d:t,e:i}}),tp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),ip=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),op=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),lp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),cp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),up=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),$p=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),vp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),fp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},mp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},sp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},dp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},C$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},L$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},pp=function(e){e.gl.disable(e.gl.CULL_FACE)},gp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},hp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},bp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},jc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],_p=[mp,sp,dp,C$,L$,pp,gp,hp,bp];function Nc(e,r,n){var t=e.createShader(n);return e.shaderSource(t,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(t),t}function xp(e,r,n){var t=e.createProgram();if(e.attachShader(t,r),e.attachShader(t,n),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(t)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return t}function P$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function wp(e,r,n,t){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(s,x,_,S,C){var w;if(i===1)for(w=0;w<x;w++)s[_++]=x===1?S[C]:S[C][w];else o.forEach(function(T){for(w=0;w<x;w++)s[_++]=x===1?S[T][C]:S[T][C][w]})}var u=P$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,p=new u.type(Cl(n.b)*m);nt(function(s){c(p,u.size*u.arraySize,f,s,t[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,p,e.STATIC_DRAW),b}function yp(e,r){if(r.a.ei>0){var n=e.createBuffer(),t=Sp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),{numIndices:t.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Cl(r.b),indexBuffer:null,buffers:{}}}function Sp(e,r){var n=new Uint32Array(Cl(e)*r),t=0,i;return nt(function(o){if(r===1)n[t++]=o;else for(i=0;i<r;i++)n[t++]=o[String.fromCharCode(97+i)]},e),n}function Hc(e,r){return e+"#"+r}var z$=v(function(e,r){var n=e.f,t=n.gl;if(!t)return r;t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),n.depthTest.b||(t.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(t.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),C$(n),L$(n),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT|t.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=Hc(o.b.id,o.c.id),c=n.programs[l]),!c){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=Uc++,f||(f=Nc(t,o.b.src,t.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=Uc++,m||(m=Nc(t,o.c.src,t.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var p=xp(t,f,m);c={glProgram:p,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Cp(t,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var b=t.getProgramParameter(p,t.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=t.getActiveAttrib(p,u),x=t.getAttribLocation(p,s.name);c.activeAttributes.push(s),c.activeAttributeLocations.push(x)}l=Hc(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(t.useProgram(c.glProgram),n.lastProgId=l),Lp(c.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=yp(t,o.d),n.buffers.set(o.d,_)),u=0;u<c.activeAttributes.length;u++){s=c.activeAttributes[u],x=c.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=wp(t,s,o.d,c.attributes)),t.bindBuffer(t.ARRAY_BUFFER,_.buffers[s.name]);var S=P$(t,s.type);if(S.arraySize===1)t.enableVertexAttribArray(x),t.vertexAttribPointer(x,S.size,S.baseType,!1,0,0);else for(var C=S.size*4,w=C*S.arraySize,T=0;T<S.arraySize;T++)t.enableVertexAttribArray(x+T),t.vertexAttribPointer(x+T,S.size,S.baseType,!1,w,C*T)}for(n.toggle=!n.toggle,nt(h_(n),o.a),u=0;u<jc.length;u++){var G=n[jc[u]];G.toggle!==n.toggle&&G.enabled&&(_p[u](n),G.enabled=!1,G.toggle=n.toggle)}_.indexBuffer?(t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,_.indexBuffer),t.drawElements(o.d.a.eS,_.numIndices,t.UNSIGNED_INT,0)):t.drawArrays(o.d.a.eS,0,_.numIndices)}}return nt(i,e.g),r});function Cp(e,r,n,t){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(s,x){var _=x.name,S=e.getUniformLocation(s,_);switch(x.type){case e.INT:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};case e.FLOAT:return function(w){o[_]!==w&&(e.uniform1f(S,w),o[_]=w)};case e.FLOAT_VEC2:return function(w){o[_]!==w&&(e.uniform2f(S,w[0],w[1]),o[_]=w)};case e.FLOAT_VEC3:return function(w){o[_]!==w&&(e.uniform3f(S,w[0],w[1],w[2]),o[_]=w)};case e.FLOAT_VEC4:return function(w){o[_]!==w&&(e.uniform4f(S,w[0],w[1],w[2],w[3]),o[_]=w)};case e.FLOAT_MAT4:return function(w){o[_]!==w&&(e.uniformMatrix4fv(S,!1,new Float32Array(w)),o[_]=w)};case e.SAMPLER_2D:var C=l++;return function(w){e.activeTexture(e.TEXTURE0+C);var T=c.textures.get(w);T||(T=w.ge(e),c.textures.set(w,T)),e.bindTexture(e.TEXTURE_2D,T),o[_]!==w&&(e.uniform1i(S,C),o[_]=w)};case e.BOOL:return function(w){o[_]!==w&&(e.uniform1i(S,w),o[_]=w)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),p=0;p<m;p++){var b=e.getActiveUniform(i,p);f[t[b.name]||b.name]=u(i,b)}return f}function Lp(e,r){Object.keys(r).forEach(function(n){var t=e[n];t&&t(r[n])})}var Pp=M(function(e,r,n){return Cd(r,{g:n,f:{},h:e},Ap,Ip)}),zp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Mp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Tp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),kp=v(function(e,r){e.contextAttributes.antialias=!0}),Dp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Fp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Ap(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};nt(function(i){return a(g_,r,i)},e.h);var n=tn.createElement("canvas"),t=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return t&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(t)}),t.getExtension("OES_standard_derivatives"),t.getExtension("OES_element_index_uint"),e.f.gl=t,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=t.getParameter(t.STENCIL_WRITEMASK),np(function(){return a(z$,e,n)})):(n=tn.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Ip(e,r){return r.f=e.f,z$(r)}var Ep=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var t=1/Bp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n});function Bp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return Math.sqrt(n*n+t*t)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1];return n*n+t*t});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Ll=new Float64Array(3),Gc=new Float64Array(3),Wc=new Float64Array(3),Vp=M(function(e,r,n){return new Float64Array([e,r,n])}),Rp=function(e){return e[0]},Up=function(e){return e[1]},jp=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var Np=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function M$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(M$);function T$(e,r,n){return n===void 0&&(n=new Float64Array(3)),ui(M$(e,r,n),n)}v(T$);function k$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+t*t+i*i)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2];return n*n+t*t+i*i});function ui(e,r){r===void 0&&(r=new Float64Array(3));var n=1/k$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Hp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Na=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Na);function Do(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Do);v(function(e,r){var n,t=Ll,i=new Float64Array(3);return t[0]=e[3],t[1]=e[7],t[2]=e[11],n=Na(r,t)+e[15],t[0]=e[0],t[1]=e[4],t[2]=e[8],i[0]=(Na(r,t)+e[12])/n,t[0]=e[1],t[1]=e[5],t[2]=e[9],i[1]=(Na(r,t)+e[13])/n,t[0]=e[2],t[1]=e[6],t[2]=e[10],i[2]=(Na(r,t)+e[14])/n,i});var Gp=ee(function(e,r,n,t){return new Float64Array([e,r,n,t])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var Wp=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},Op=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var t=1/qp(n);return n[0]=n[0]*t,n[1]=n[1]*t,n[2]=n[2]*t,n[3]=n[3]*t,n});function qp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+t*t+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],t=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+t*t+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var Jp=new Float64Array(16),Yp=new Float64Array(16),Xp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},Kp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function D$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(t-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(t+n)/(t-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}wr(D$);ee(function(e,r,n,t){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return D$(l,c,o,i,n,t)});function F$(e,r,n,t,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(t-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(t+n)/(t-n),l[14]=-(o+i)/(o-i),l[15]=1,l}wr(F$);ee(function(e,r,n,t){return F$(e,r,n,t,-1,1)});function A$(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],f=e[6],m=e[7],p=e[8],b=e[9],s=e[10],x=e[11],_=e[12],S=e[13],C=e[14],w=e[15],T=r[0],G=r[1],Z=r[2],ne=r[3],te=r[4],ie=r[5],re=r[6],q=r[7],de=r[8],pe=r[9],Me=r[10],Se=r[11],me=r[12],Te=r[13],I=r[14],E=r[15];return n[0]=t*T+c*G+p*Z+_*ne,n[1]=i*T+u*G+b*Z+S*ne,n[2]=o*T+f*G+s*Z+C*ne,n[3]=l*T+m*G+x*Z+w*ne,n[4]=t*te+c*ie+p*re+_*q,n[5]=i*te+u*ie+b*re+S*q,n[6]=o*te+f*ie+s*re+C*q,n[7]=l*te+m*ie+x*re+w*q,n[8]=t*de+c*pe+p*Me+_*Se,n[9]=i*de+u*pe+b*Me+S*Se,n[10]=o*de+f*pe+s*Me+C*Se,n[11]=l*de+m*pe+x*Me+w*Se,n[12]=t*me+c*Te+p*I+_*E,n[13]=i*me+u*Te+b*I+S*E,n[14]=o*me+f*Te+s*I+C*E,n[15]=l*me+m*Te+x*I+w*E,n}v(A$);v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],f=e[8],m=e[9],p=e[10],b=e[12],s=e[13],x=e[14],_=r[0],S=r[1],C=r[2],w=r[4],T=r[5],G=r[6],Z=r[8],ne=r[9],te=r[10],ie=r[12],re=r[13],q=r[14];return n[0]=t*_+l*S+f*C,n[1]=i*_+c*S+m*C,n[2]=o*_+u*S+p*C,n[3]=0,n[4]=t*w+l*T+f*G,n[5]=i*w+c*T+m*G,n[6]=o*w+u*T+p*G,n[7]=0,n[8]=t*Z+l*ne+f*te,n[9]=i*Z+c*ne+m*te,n[10]=o*Z+u*ne+p*te,n[11]=0,n[12]=t*ie+l*re+f*q+b,n[13]=i*ie+c*re+m*q+s,n[14]=o*ie+u*re+p*q+x,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=ui(r,Ll);var t=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=t*t*c+l,n[1]=i*t*c+o*u,n[2]=o*t*c-i*u,n[3]=0,n[4]=t*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+t*u,n[7]=0,n[8]=t*o*c+i*u,n[9]=i*o*c-t*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});M(function(e,r,n){var t=new Float64Array(16),i=1/k$(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),p=o*m,b=l*m,s=c*m,x=o*l*f,_=o*c*f,S=l*c*f,C=o*o*f+u,w=x+s,T=_-b,G=x-s,Z=l*l*f+u,ne=S+p,te=_+b,ie=S-p,re=c*c*f+u,q=n[0],de=n[1],pe=n[2],Me=n[3],Se=n[4],me=n[5],Te=n[6],I=n[7],E=n[8],B=n[9],V=n[10],R=n[11],j=n[12],N=n[13],H=n[14],Ne=n[15];return t[0]=q*C+Se*w+E*T,t[1]=de*C+me*w+B*T,t[2]=pe*C+Te*w+V*T,t[3]=Me*C+I*w+R*T,t[4]=q*G+Se*Z+E*ne,t[5]=de*G+me*Z+B*ne,t[6]=pe*G+Te*Z+V*ne,t[7]=Me*G+I*Z+R*ne,t[8]=q*te+Se*ie+E*re,t[9]=de*te+me*ie+B*re,t[10]=pe*te+Te*ie+V*re,t[11]=Me*te+I*ie+R*re,t[12]=j,t[13]=N,t[14]=H,t[15]=Ne,t});function Zp(e,r,n){var t=new Float64Array(16);return t[0]=e,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=r,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=n,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}M(Zp);ee(function(e,r,n,t){var i=new Float64Array(16);return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i[3]=t[3]*e,i[4]=t[4]*r,i[5]=t[5]*r,i[6]=t[6]*r,i[7]=t[7]*r,i[8]=t[8]*n,i[9]=t[9]*n,i[10]=t[10]*n,i[11]=t[11]*n,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2];return n[0]=r[0]*t,n[1]=r[1]*t,n[2]=r[2]*t,n[3]=r[3]*t,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function Qp(e,r,n){var t=new Float64Array(16);return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=e,t[13]=r,t[14]=n,t[15]=1,t}M(Qp);ee(function(e,r,n,t){var i=new Float64Array(16),o=t[0],l=t[1],c=t[2],u=t[3],f=t[4],m=t[5],p=t[6],b=t[7],s=t[8],x=t[9],_=t[10],S=t[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=f,i[5]=m,i[6]=p,i[7]=b,i[8]=s,i[9]=x,i[10]=_,i[11]=S,i[12]=o*e+f*r+s*n+t[12],i[13]=l*e+m*r+x*n+t[13],i[14]=c*e+p*r+_*n+t[14],i[15]=u*e+b*r+S*n+t[15],i});v(function(e,r){var n=new Float64Array(16),t=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],f=r[3],m=r[4],p=r[5],b=r[6],s=r[7],x=r[8],_=r[9],S=r[10],C=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=f,n[4]=m,n[5]=p,n[6]=b,n[7]=s,n[8]=x,n[9]=_,n[10]=S,n[11]=C,n[12]=l*t+m*i+x*o+r[12],n[13]=c*t+p*i+_*o+r[13],n[14]=u*t+b*i+S*o+r[14],n[15]=f*t+s*i+C*o+r[15],n});M(function(e,r,n){var t=T$(e,r,Ll),i=ui(Do(n,t,Gc),Gc),o=ui(Do(t,i,Wc),Wc),l=Jp,c=Yp;return l[0]=i[0],l[1]=o[0],l[2]=t[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=t[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=t[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,A$(l,c)});M(function(e,r,n){var t=new Float64Array(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=0,t[4]=r[0],t[5]=r[1],t[6]=r[2],t[7]=0,t[8]=n[0],t[9]=n[1],t[10]=n[2],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t});var z=us,Bt=os,I$=M(function(e,r,n){var t=n.c,i=n.d,o=v(function(l,c){if(l.$){var f=l.a;return h(Bt,e,c,f)}else{var u=l.a;return h(Bt,o,c,u)}});return h(Bt,o,h(Bt,e,r,i),t)}),Pl=M(function(e,r,n){e:for(;;){if(n.$===-2)return r;var t=n.b,i=n.c,o=n.d,l=n.e,c=e,u=h(e,t,i,h(Pl,e,r,l)),f=o;e=c,r=u,n=f;continue e}}),Oc=function(e){return h(Pl,M(function(r,n,t){return a(z,L(r,n),t)}),D,e)},E$=1,eg=2,B$=0,tr=function(e){return{$:1,a:e}},zl=v(function(e,r){return{$:3,a:e,b:r}}),qc=v(function(e,r){return{$:0,a:e,b:r}}),V$=v(function(e,r){return{$:1,a:e,b:r}}),Ge=function(e){return{$:0,a:e}},rg=function(e){return{$:2,a:e}},X=function(e){return{$:0,a:e}},J={$:1},ng=Is,ag=rd,k=u$,ce=v(function(e,r){return a(ks,e,zi(r))}),Ml=v(function(e,r){return $(a(Ts,e,r))}),R$=function(e){return a(ce,`
    `,a(Ml,`
`,e))},je=M(function(e,r,n){e:for(;;)if(n.b){var t=n.a,i=n.b,o=e,l=a(e,t,r),c=i;e=o,r=l,n=c;continue e}else return r}),Yn=function(e){return h(je,v(function(r,n){return n+1}),0,e)},tg=$s,ig=M(function(e,r,n){e:for(;;)if(_e(e,r)<1){var t=e,i=r-1,o=a(z,r,n);e=t,r=i,n=o;continue e}else return n}),on=v(function(e,r){return h(ig,e,r,D)}),U$=v(function(e,r){return h(tg,e,a(on,0,Yn(r)-1),r)}),Or=Ns,j$=function(e){var r=Or(e);return 97<=r&&r<=122},N$=function(e){var r=Or(e);return r<=90&&65<=r},og=function(e){return j$(e)||N$(e)},lg=function(e){var r=Or(e);return r<=57&&48<=r},cg=function(e){return j$(e)||N$(e)||lg(e)},mr=function(e){return h(je,z,D,e)},ka=Ls,ug=v(function(e,r){return`

(`+(k(e+1)+(") "+R$($g(r))))}),$g=function(e){return a(vg,e,D)},vg=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,l=e.b,t=function(){var _=ka(n);if(_.$===1)return!1;var S=_.a,C=S.a,w=S.b;return og(C)&&a(ng,cg,w)}(),i=t?"."+n:"['"+(n+"']"),u=l,f=a(z,i,r);e=u,r=f;continue e;case 1:var o=e.a,l=e.b,c="["+(k(o)+"]"),u=l,f=a(z,c,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var p=function(){return r.b?"The Json.Decode.oneOf at json"+a(ce,"",mr(r)):"Json.Decode.oneOf"}(),x=p+(" failed in the following "+(k(Yn(m))+" ways:"));return a(ce,`

`,a(z,x,a(U$,ug,m)))}else{var l=m.a,u=l,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+a(ce,"",mr(r)):"!"}();default:var b=e.a,s=e.b,x=function(){return r.b?"Problem with the value at json"+(a(ce,"",mr(r))+`:

    `):`Problem with the given value:

`}();return x+(R$(a(ag,4,s))+(`

`+b))}}),_r=32,Fo=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Ao=rs,at=bs,Tl=v(function(e,r){return Dc(r)/Dc(e)}),Ha=gs,tt=at(a(Tl,2,_r)),H$=P(Fo,0,tt,Ao,Ao),G$=as,W$=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var O$=_s,Io=ns,Pr=v(function(e,r){return _e(e,r)>0?e:r}),fg=function(e){return{$:0,a:e}},kl=ts,mg=v(function(e,r){e:for(;;){var n=a(kl,_r,e),t=n.a,i=n.b,o=a(z,fg(t),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return mr(o)}}),q$=function(e){var r=e.a;return r},sg=v(function(e,r){e:for(;;){var n=at(r/_r);if(n===1)return a(kl,_r,e).a;var t=a(mg,e,D),i=n;e=t,r=i;continue e}}),J$=v(function(e,r){if(r.n){var n=r.n*_r,t=O$(a(Tl,_r,n-1)),i=e?mr(r.C):r.C,o=a(sg,i,r.n);return P(Fo,Io(r.r)+n,a(Pr,5,t*tt),o,r.r)}else return P(Fo,Io(r.r),tt,Ao,r.r)}),dg=Ye(function(e,r,n,t,i){e:for(;;){if(r<0)return a(J$,!1,{C:t,n:n/_r|0,r:i});var o=W$(h(G$,_r,r,e)),l=e,c=r-_r,u=n,f=a(z,o,t),m=i;e=l,r=c,n=u,t=f,i=m;continue e}}),pg=v(function(e,r){if(e<=0)return H$;var n=e%_r,t=h(G$,n,e-n,r),i=e-n-_r;return F(dg,r,i,e,D,t)}),Ar=function(e){return!e.$},Q=Ks,Pe=Os,K=Xs,We=qs,Y$=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),$i=Zs,gg=Qs,cr=Gs,Dl=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Er=function(e){return e},hg=Er,Jc=wr(function(e,r,n,t,i,o){return{eb:o,eg:r,e$:t,e2:n,e5:e,e6:i}}),bg=Es,jn=Ps,va=Ds,ht=v(function(e,r){return e<1?r:h(va,e,jn(r),r)}),Mi=Vs,Ti=function(e){return e===""},ki=v(function(e,r){return e<1?"":h(va,0,e,r)}),X$=Rs,Yc=Ye(function(e,r,n,t,i){if(Ti(i)||a(bg,"@",i))return J;var o=a(Mi,":",i);if(o.b){if(o.b.b)return J;var l=o.a,c=X$(a(ht,l+1,i));if(c.$===1)return J;var u=c;return X(ar(Jc,e,a(ki,l,i),u,r,n,t))}else return X(ar(Jc,e,i,J,r,n,t))}),Xc=ee(function(e,r,n,t){if(Ti(t))return J;var i=a(Mi,"/",t);if(i.b){var o=i.a;return F(Yc,e,a(ht,o,t),r,n,a(ki,o,t))}else return F(Yc,e,"/",r,n,t)}),Kc=M(function(e,r,n){if(Ti(n))return J;var t=a(Mi,"?",n);if(t.b){var i=t.a;return P(Xc,e,X(a(ht,i+1,n)),r,a(ki,i,n))}else return P(Xc,e,J,r,n)});v(function(e,r){if(Ti(r))return J;var n=a(Mi,"#",r);if(n.b){var t=n.a;return h(Kc,e,X(a(ht,t+1,r)),a(ki,t,r))}else return h(Kc,e,J,r)});var _g=Bs,bt=function(e){},_t=Zn,xg=_t(0),K$=ee(function(e,r,n,t){if(t.b){var i=t.a,o=t.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,f=c.b;if(f.b){var m=f.a,p=f.b,b=n>500?h(je,e,r,mr(p)):P(K$,e,r,n+1,p);return a(e,i,a(e,l,a(e,u,a(e,m,b))))}else return a(e,i,a(e,l,a(e,u,r)))}else return a(e,i,a(e,l,r))}else return a(e,i,r)}else return r}),er=M(function(e,r,n){return P(K$,e,r,0,n)}),ae=v(function(e,r){return h(er,v(function(n,t){return a(z,e(n),t)}),D,r)}),vi=Mo,Fl=v(function(e,r){return a(vi,function(n){return _t(e(n))},r)}),wg=M(function(e,r,n){return a(vi,function(t){return a(vi,function(i){return _t(a(e,t,i))},n)},r)}),yg=function(e){return h(er,wg(z),_t(D),e)},Sg=sd,Cg=v(function(e,r){var n=r;return f$(a(vi,Sg(e),n))}),Lg=M(function(e,r,n){return a(Fl,function(t){return 0},yg(a(ae,Cg(e),r)))}),Pg=M(function(e,r,n){return _t(0)}),zg=v(function(e,r){var n=r;return a(Fl,e,n)});Wr.Task=fd(xg,Lg,Pg,zg);var Mg=s$("Task"),Al=v(function(e,r){return Mg(a(Fl,e,r))}),Tg=Xd,kg=Ss,fi={$:1},Z$=function(e){return{$:2,a:e}},Il={$:0},zr=v(function(e,r){return{$:0,a:e,b:r}}),Ke=M(function(e,r,n){return r(e(n))}),Qn=function(e){var r=e.b.s;return r.a},Dg=function(e){var r=e.a,n=e.b.X,t=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return X(a(zr,r,{s:o,an:l,X:a(z,t,n)}))}else return J},Ae=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Fg=M(function(e,r,n){var t=n.a,i=n.b;switch(t.$){case 1:return n;case 2:var o=t.a.dH;return(_e(o+r.gp,Qn(n).d1)>0?a(Ke,Dg,Ae(a(zr,fi,i))):Er)(a(zr,Z$({dH:o+r.gp}),i));default:var l=i.s,c=l.a,u=l.b,f=a(Y$,c.gb,Re(r,{d1:c.d1+r.gp})),m=a(e,f,u);return a(zr,Il,{s:L(f,m),an:D,X:a(z,i.s,i.X)})}}),Q$=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,t=e-1,i=n;e=t,r=i;continue e}else return r}}),Ag=M(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var t=r.a,i=r.b,o=e-1,l=i,c=a(z,t,n);e=o,r=l,n=c;continue e}else return n}}),Ig=v(function(e,r){return mr(h(Ag,e,r,D))}),ev=M(function(e,r,n){if(r<=0)return D;{var t=L(r,n);e:for(;;){r:for(;;)if(t.b.b)if(t.b.b.b)switch(t.a){case 1:break e;case 2:var i=t.b,w=i.a,o=i.b,l=o.a;return $([w,l]);case 3:if(t.b.b.b.b){var c=t.b,w=c.a,u=c.b,l=u.a,f=u.b,m=f.a;return $([w,l,m])}else break r;default:if(t.b.b.b.b&&t.b.b.b.b.b){var p=t.b,w=p.a,b=p.b,l=b.a,s=b.b,m=s.a,x=s.b,_=x.a,S=x.b;return e>1e3?a(z,w,a(z,l,a(z,m,a(z,_,a(Ig,r-4,S))))):a(z,w,a(z,l,a(z,m,a(z,_,h(ev,e+1,r-4,S)))))}else break r}else{if(t.a===1)break e;break r}else return n;return n}var C=t.b,w=C.a;return $([w])}}),Eg=v(function(e,r){return h(ev,0,e,r)}),Bg=v(function(e,r){var n=r.b.X,t=r.b.s,i=r.b.an,o=Y(mr(n),Y($([t]),i)),l=a(Eg,e,o),c=a(Q$,e,o);if(c.b){var u=c.a,f=c.b;return a(zr,fi,{s:u,an:f,X:mr(l)})}else{var m=mr(l);if(m.b){var p=m.a,b=m.b;return a(zr,fi,{s:p,an:D,X:b})}else return r}}),Vg=function(e){var r=e.b;return a(zr,fi,r)},Rg=function(e){var r=e.b;return a(zr,Z$({dH:Qn(e).d1}),r)},Ug=function(e){var r=e.b;return a(zr,Il,r)},jg=v(function(e,r){switch(e.$){case 1:return Vg(r);case 2:return Ug(r);case 3:return Rg(r);default:var n=e.a;return a(Bg,n,r)}}),mi=v(function(e,r){var n=r.a,t=r.b;return L(e(n),t)}),Ng=v(function(e,r){return Re(r,{aN:e(r.aN)})}),Hg=function(e){return{$:3,a:e}},rv=function(e){return{$:2,a:e}},nv=v(function(e,r){return{$:0,a:e,b:r}}),Gg=v(function(e,r){return{$:1,a:e,b:r}}),Ue=v(function(e,r){if(r.$)return J;var n=r.a;return X(e(n))}),we=function(e){return e<0?-e:e},av=Us,Wg=M(function(e,r,n){return a(Ae,0/0,av(a(e,r,n)))}),xt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,t=r.b;if(e(n))return!0;var i=e,o=t;e=i,r=o;continue e}else return!1}),Og=Ms,tv=function(e){return h(Og,z,D,e)},qg=v(function(e,r){var n=a(xt,function(t){return t!=="0"&&t!=="."},tv(r));return Y(e&&n?"-":"",r)}),ve=u$,Eo=Cs,iv=Hs,ov=function(e){var r=e.a,n=e.b;if(r==="9"){var t=ka(n);if(t.$===1)return"01";var i=t.a;return a(Eo,"0",ov(i))}else{var o=Or(r);return o>=48&&o<57?a(Eo,iv(o+1),n):"0"}},Bo=hs,Jg=ys,Di=function(e){return a(Eo,e,"")},lv=M(function(e,r,n){return e<=0?n:h(lv,e>>1,Y(r,r),e&1?Y(n,r):n)}),it=v(function(e,r){return h(lv,e,r,"")}),Vo=M(function(e,r,n){return Y(n,a(it,e-jn(n),Di(r)))}),Ro=zs,cv=function(e){var r=a(Ml,".",e);if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a;return L(n,i)}else{var n=r.a;return L(n,"0")}else return L("0","0")},Yg=function(e){var r=a(Ml,"e",ve(we(e)));if(r.b)if(r.b.b){var n=r.a,t=r.b,i=t.a,o=a(Ae,0,X$(a(_g,"+",i)?a(ht,1,i):i)),l=cv(n),c=l.a,u=l.b,f=Y(c,u),m=o<0?a(Ae,"0",a(Ue,function(p){var b=p.a,s=p.b;return b+("."+s)},a(Ue,mi(Di),ka(Y(a(it,we(o),"0"),f))))):h(Vo,o+1,"0",f);return Y(e<0?"-":"",m)}else{var n=r.a;return Y(e<0?"-":"",n)}else return""},Xg=M(function(e,r,n){if(Bo(n)||Jg(n))return ve(n);var t=n<0,i=cv(Yg(we(n))),o=i.a,l=i.b,c=jn(o)+r,u=Y(a(it,-c+1,"0"),h(Vo,c,"0",Y(o,l))),f=jn(u),m=a(Pr,1,c),p=a(e,t,h(va,m,f,u)),b=h(va,0,m,u),s=p?Ro(a(Ae,"1",a(Ue,ov,ka(Ro(b))))):b,x=jn(s),_=s==="0"?s:r<=0?Y(s,a(it,we(r),"0")):_e(r,jn(l))<0?h(va,0,x-r,s)+("."+h(va,x-r,x,s)):Y(o+".",h(Vo,r,"0",l));return a(qg,t,_)}),uv=Xg(v(function(e,r){var n=ka(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var t=n.a,i=t.a;return function(o){return o>53&&e||o>=53&&!e}(Or(i))})),Kg=Wg(uv),Zg=M(function(e,r,n){var t=a(Tl,10,we(r-e)),i=t<0?3:t<1?2:t<2?1:0;return a(Kg,i,n)}),$v=cs,wt=v(function(e,r){e:for(;;){if(r.$===-2)return J;var n=r.b,t=r.c,i=r.d,o=r.e,l=a($v,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return X(t);default:var c=e,u=o;e=c,r=u;continue e}}}),fe=Ye(function(e,r,n,t,i){return{$:-1,a:e,b:r,c:n,d:t,e:i}}),Yr={$:-2},wa=Ye(function(e,r,n,t,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(t.$===-1&&!t.a){t.a;var f=t.b,m=t.c,p=t.d,b=t.e;return F(fe,0,r,n,F(fe,1,f,m,p,b),F(fe,1,o,l,c,u))}else return F(fe,e,o,l,F(fe,0,r,n,t,c),u)}else if(t.$===-1&&!t.a&&t.d.$===-1&&!t.d.a){t.a;var f=t.b,m=t.c,s=t.d;s.a;var x=s.b,_=s.c,S=s.d,C=s.e,b=t.e;return F(fe,0,f,m,F(fe,1,x,_,S,C),F(fe,1,r,n,b,i))}else return F(fe,e,r,n,t,i)}),Uo=M(function(e,r,n){if(n.$===-2)return F(fe,0,e,r,Yr,Yr);var t=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=a($v,e,i);switch(u){case 0:return F(wa,t,i,o,h(Uo,e,r,l),c);case 1:return F(fe,t,i,r,l,c);default:return F(wa,t,i,o,l,h(Uo,e,r,c))}}),pa=M(function(e,r,n){var t=h(Uo,e,r,n);if(t.$===-1&&!t.a){t.a;var i=t.b,o=t.c,l=t.d,c=t.e;return F(fe,1,i,o,l,c)}else{var u=t;return u}}),Qg=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},vv=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,f=e.e;f.a;var m=f.b,p=f.c,b=f.d;b.a;var s=b.b,x=b.c,_=b.d,S=b.e,C=f.e;return F(fe,0,s,x,F(fe,1,n,t,F(fe,0,o,l,c,u),_),F(fe,1,m,p,S,C))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,l=w.c,c=w.d,u=w.e,T=e.e;T.a;var m=T.b,p=T.c,b=T.d,C=T.e;return F(fe,1,n,t,F(fe,0,o,l,c,u),F(fe,0,m,p,b,C))}else return e},Zc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,t=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,f=c.c,m=c.d,p=c.e,b=i.e,s=e.e;s.a;var x=s.b,_=s.c,S=s.d,C=s.e;return F(fe,0,o,l,F(fe,1,u,f,m,p),F(fe,1,n,t,b,F(fe,0,x,_,S,C)))}else{var r=e.a,n=e.b,t=e.c,w=e.d;w.a;var o=w.b,l=w.c,T=w.d,b=w.e,G=e.e;G.a;var x=G.b,_=G.c,S=G.d,C=G.e;return F(fe,1,n,t,F(fe,0,o,l,T,b),F(fe,0,x,_,S,C))}else return e},e0=Pi(function(e,r,n,t,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,f=o.d,m=o.e;return F(fe,n,c,u,f,F(fe,0,t,i,m,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var p=l.d;return p.a,Zc(r)}else break e;else return l.a,l.d,Zc(r);else break e;return r}}),Kt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,t=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(fe,r,n,t,Kt(i),c);var u=vv(e);if(u.$===-1){var f=u.a,m=u.b,p=u.c,b=u.d,s=u.e;return F(wa,f,m,p,Kt(b),s)}else return Yr}else return F(fe,r,n,t,Kt(i),c)}else return Yr},Ka=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(_e(e,t)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(fe,n,t,i,a(Ka,e,o),l);var u=vv(r);if(u.$===-1){var f=u.a,m=u.b,p=u.c,b=u.d,s=u.e;return F(wa,f,m,p,a(Ka,e,b),s)}else return Yr}else return F(fe,n,t,i,a(Ka,e,o),l);else return a(r0,e,sl(e0,e,r,n,t,i,o,l))}),r0=v(function(e,r){if(r.$===-1){var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;if(he(e,t)){var c=Qg(l);if(c.$===-1){var u=c.b,f=c.c;return F(wa,n,u,f,o,Kt(l))}else return Yr}else return F(wa,n,t,i,o,a(Ka,e,l))}else return Yr}),n0=v(function(e,r){var n=a(Ka,e,r);if(n.$===-1&&!n.a){n.a;var t=n.b,i=n.c,o=n.d,l=n.e;return F(fe,1,t,i,o,l)}else{var c=n;return c}}),Vt=M(function(e,r,n){var t=r(a(wt,e,n));if(t.$)return a(n0,e,n);var i=t.a;return h(pa,e,i,n)}),a0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return a(Vt,r,Ue(function(t){if(t.$===1){var i=t.a,o=i.a,l=i.b;return a(Gg,L(o,l),n)}else return t}));case 0:var r=e.a,n=e.b;return a(Vt,r,Ue(function(t){if(t.$)return t;var i=t.a,o=i.a,l=i.b;return a(nv,L(o,l),h(Zg,o,l,n))}));case 3:var r=e.a,n=e.b;return a(Vt,r,Ue(function(t){return t.$===3?Hg(n):t}));default:var r=e.a,n=e.b;return a(Vt,r,Ue(function(t){return t.$===2?rv(n):t}))}},t0=function(e){return Ng(a0(e))},i0=v(function(e,r){return a(ae,t0(e),r)}),o0=v(function(e,r){return Re(r,{gb:a(i0,e,r.gb)})}),l0=v(function(e,r){var n=r.a,t=r.b;return a(zr,n,Re(t,{s:a(mi,o0(e),t.s)}))}),jo=v(function(e,r){var n=r.a,t=r.b;return L(n,e(t))}),c0=M(function(e,r,n){var t=n.a,i=n.b,o=i.s;return a(zr,t,Re(i,{s:a(jo,a(e,o.a,r),o)}))}),u0=ee(function(e,r,n,t){switch(n.$){case 0:return t;case 1:return Re(t,{bw:!t.bw});case 2:var i=n.a;return Re(t,{R:h(Fg,e,i,t.R)});case 3:var o=n.a;return Re(t,{bp:o});case 4:var l=n.a;return Re(t,{R:a(l0,l,t.R)});case 5:var c=n.a;return Re(t,{R:h(c0,r,c,t.R)});default:var u=n.a;return Re(t,{R:a(jg,u,t.R)})}}),$0=v(function(e,r){return a(zr,Il,{s:L(e,r(e)),an:D,X:D})}),v0=dd,Qc=v0(D),f0=function(e){return{$:2,a:e}},si=Ys,ya=Js,m0=_d("tick",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return cr({d1:l,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(p){return cr({fJ:p,gd:m,d4:f,go:u,g4:c,hr:l,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",si(ya)))},a(K,"left",Pe))},a(K,"pressedKeys",si(ya)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return cr({d4:f,g$:u,ha:c,hy:l,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return cr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return cr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We))))),s0=function(e){return e.dN,m0(f0)},d0=function(e){return{$:5,a:e}},p0={$:0},di=v(function(e,r){return e}),g0=function(e){var r=e.b.s;return r.b},h0=function(e){return{$:1,a:e}},b0=h0,fv=function(e){return{$:8,a:e}},ye=fv,ot=function(e){return{$:0,a:e}},yt=M(function(e,r,n){return e(r(n))}),_0=a(yt,ot,di),_n=_0,Ie=function(e){return{$:1,a:e}},en=Ie,mv=v(function(e,r){return{$:9,a:e,b:r}}),Xn={$:0},sv=v(function(e,r){return r.$===3?Xn:a(mv,e,r)}),No=function(e){return a(sv,4,e)},d={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},El=v$,kr=v(function(e,r){return a(_l,e,El(r))}),Lr=kr("className"),br=function(e){return Ie(Lr(e))},dv=v(function(e,r){return{$:2,a:e,b:r}}),x0=v(function(e,r){return{$:1,a:e,b:r}}),rr=function(e){return{$:0,a:e}},xr=2,w0={$:0},ea=w0,y0={$:0},S0=d.fK+(" "+d.aw),C0=d.fK+(" "+d.gC),L0=d.fK+(" "+d.eY),P0=d.fK+(" "+d.eZ),z0=d.fK+(" "+d.af),M0=d.fK+(" "+d.hL),T0=function(e){switch(e){case 0:return z0;case 1:return S0;case 2:return M0;case 3:return C0;case 4:return P0;default:return L0}},eu=function(e){return{$:1,a:e}},Un={$:0},Ho=function(e){return{$:1,a:e}},ru=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return Y(n,e);case 2:var t=r.a;return Y(e,t);default:var n=r.a,t=r.b;return Y(n,Y(e,t))}}),nu=M(function(e,r,n){switch(n.$){case 0:return r;case 1:var t=n.a;return Y(a(ae,function(o){return L(e,o)},t),r);case 2:var i=n.a;return Y(r,a(ae,function(o){return L(e,o)},i));default:var t=n.a,i=n.b;return Y(a(ae,function(o){return L(e,o)},t),Y(r,a(ae,function(o){return L(e,o)},i)))}}),Rt=4,k0=function(e){return{$:0,a:e}},D0=function(e){return{$:1,a:e}},xe=function(e){return e>31?D0(1<<e-32):k0(1<<e)},pv=xe(41),gv=xe(40),hv=xe(42),bv=xe(43),Sa=dn("div"),Bl=Yr,_v=Bl,Hr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var t=e.a,o=e.b;return"min"+(k(t)+Hr(o));default:var i=e.a,o=e.b;return"max"+(k(i)+Hr(o))}},Be=xs,Ve=function(e){return k(Be(e*255))},Vl=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("mv-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d;return X("tfrm-"+(Ve(l)+("-"+(Ve(c)+("-"+(Ve(u)+("-"+(Ve(m)+("-"+(Ve(p)+("-"+(Ve(b)+("-"+(Ve(x)+("-"+(Ve(_)+("-"+(Ve(S)+("-"+Ve(C))))))))))))))))))))}},lt=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+k(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var t=e.a,f=e.b;return e.c,t;case 7:var t=e.a;return e.b,e.c,e.d,e.e,t;case 6:var t=e.a;return e.b,e.c,e.d,e.e,t;case 8:var i=e.a;return"grid-rows-"+(a(ce,"-",a(ae,Hr,i.hB))+("-cols-"+(a(ce,"-",a(ae,Hr,i.ak))+("-space-x-"+(Hr(i.hP.a)+("-space-y-"+Hr(i.hP.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(k(o.af)+("-"+(k(o.ga)+("-"+(k(o.im)+("-"+k(o.gH)))))));case 11:var l=e.a,c=e.b,u=function(){switch(l){case 0:return"fs";case 1:return"hv";default:return"act"}}();return a(ce," ",a(ae,function(m){var p=lt(m);if(p==="")return"";var b=p;return b+("-"+u)},c));default:var f=e.a;return a(Ae,"",Vl(f))}},F0=v(function(e,r){var n=r;return h(pa,e,0,n)}),A0=v(function(e,r){var n=a(wt,e,r);return!n.$}),I0=v(function(e,r){var n=r;return a(A0,e,n)}),xv=v(function(e,r){var n=r.a,t=r.b,i=lt(e);return a(I0,i,n)?r:L(a(F0,i,n),a(z,e,t))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),Za=v(function(e,r){return{$:0,a:e,b:r}}),y=function(e){return"."+e},E0=M(function(e,r,n){var t=e(r);if(t.$)return n;var i=t.a;return a(z,i,n)}),vn=v(function(e,r){return h(er,E0(e),D,r)}),fa=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return"rgba("+(k(Be(r*255))+(","+k(Be(n*255))+(","+k(Be(t*255))+(","+(ve(i)+")")))))},Go=function(e){return a(ce," ",a(vn,Er,$([e.ej?X("inset"):J,X(ve(e.eV.a)+"px"),X(ve(e.eV.b)+"px"),X(ve(e.a2)+"px"),X(ve(e.bi)+"px"),X(fa(e.b6))])))},wv=function(e){return $([a(Za,y(d.ea)+":focus-within",a(vn,Er,$([a(Ue,function(r){return a(ue,"border-color",fa(r))},e.fW),a(Ue,function(r){return a(ue,"background-color",fa(r))},e.fO),a(Ue,function(r){return a(ue,"box-shadow",Go({a2:r.a2,b6:r.b6,ej:!1,eV:a(jo,Ha,a(mi,Ha,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))]))),a(Za,y(d.fK)+":focus .focusable, "+(y(d.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(y(d.fK)+" .focusable-thumb"))),a(vn,Er,$([a(Ue,function(r){return a(ue,"border-color",fa(r))},e.fW),a(Ue,function(r){return a(ue,"background-color",fa(r))},e.fO),a(Ue,function(r){return a(ue,"box-shadow",Go({a2:r.a2,b6:r.b6,ej:!1,eV:a(jo,Ha,a(mi,Ha,r.eV)),bi:r.bi}))},e.hH),X(a(ue,"outline","none"))])))])},Nr=function(e){return dn(g$(e))},yv=v(function(e,r){return a(_l,Td(e),h$(r))}),no=v(function(e,r){return{$:2,a:e,b:r}}),Rl=function(e){return{$:6,a:e}},O=v(function(e,r){return{$:1,a:e,b:r}}),pr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),B0=v(function(e,r){return{$:3,a:e,b:r}}),Sv=$([0,1,2,3,4,5]),V0=v(function(e,r){return r.b?h(er,z,r,e):e}),sr=function(e){return h(er,V0,D,e)},Da=v(function(e,r){return sr(a(ae,e,r))}),R0=function(e){switch(e){case 0:return y(d.gc);case 1:return y(d.b9);case 2:return y(d.cb);case 3:return y(d.bt);case 4:return y(d.ca);default:return y(d.ax)}},pi=function(e){switch(e){case 0:return y(d.fH);case 1:return y(d.fA);case 2:return y(d.dY);case 3:return y(d.dX);case 4:return y(d.fB);default:return y(d.fC)}},Ga=function(e){var r=function(n){var t=e(n),i=t.a,o=t.b;return $([a(A,R0(n),i),a(O,y(d.fK),$([a(A,pi(n),o)]))])};return Rl(a(Da,r,Sv))},au=$([a(g,"display","flex"),a(g,"flex-direction","column"),a(g,"white-space","pre"),a(A,y(d.cZ),$([a(g,"z-index","0"),a(O,y(d.fQ),$([a(g,"z-index","-1")]))])),a(A,y(d.hG),$([a(O,y(d.Y),$([a(A,y(d.c$),$([a(g,"flex-grow","0")])),a(A,y(d.dP),$([a(g,"align-self","auto !important")]))]))])),a(O,y(d.c_),$([a(g,"height","auto")])),a(O,y(d.c$),$([a(g,"flex-grow","100000")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(O,y(d.fv),$([a(g,"width","100%")])),a(O,y(d.dO),$([a(g,"align-self","flex-start")])),Ga(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(O,y(d.fK),$([a(g,"margin-top","auto"),a(g,"margin-bottom","auto")]))]),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))}})]),U0=function(e){var r=function(n){return $([a(O,y(d.fK),$([a(A,pi(n),e(n))]))])};return Rl(a(Da,r,Sv))},j0=function(){return $([0,1,2,3,4,5])}(),N0=$([a(pr,"html,body",$([a(g,"height","100%"),a(g,"padding","0"),a(g,"margin","0")])),a(pr,Y(y(d.fK),Y(y(d.hL),y(d.gN))),$([a(g,"display","block"),a(A,y(d.c$),$([a(O,"img",$([a(g,"max-height","100%"),a(g,"object-fit","cover")]))])),a(A,y(d.dP),$([a(O,"img",$([a(g,"max-width","100%"),a(g,"object-fit","cover")]))]))])),a(pr,y(d.fK)+":focus",$([a(g,"outline","none")])),a(pr,y(d.hA),$([a(g,"width","100%"),a(g,"height","auto"),a(g,"min-height","100%"),a(g,"z-index","0"),a(A,Y(y(d.fK),y(d.c$)),$([a(g,"height","100%"),a(O,y(d.c$),$([a(g,"height","100%")]))])),a(O,y(d.gP),$([a(A,y(d.be),$([a(g,"position","fixed"),a(g,"z-index","20")]))]))])),a(pr,y(d.be),$([a(g,"position","relative"),a(g,"border","none"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(A,y(d.hL),au),Rl(function(e){return a(ae,e,j0)}(function(e){switch(e){case 0:return a(A,y(d.fy),$([a(g,"position","absolute"),a(g,"bottom","100%"),a(g,"left","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(O,y(d.c$),$([a(g,"height","auto")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 1:return a(A,y(d.fR),$([a(g,"position","absolute"),a(g,"bottom","0"),a(g,"left","0"),a(g,"height","0"),a(g,"width","100%"),a(g,"z-index","20"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")])),a(O,y(d.c$),$([a(g,"height","auto")]))]));case 2:return a(A,y(d.hh),$([a(g,"position","absolute"),a(g,"left","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 3:return a(A,y(d.hg),$([a(g,"position","absolute"),a(g,"right","100%"),a(g,"top","0"),a(g,"height","100%"),a(g,"margin","0 !important"),a(g,"z-index","20"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));case 4:return a(A,y(d.gP),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]));default:return a(A,y(d.fQ),$([a(g,"position","absolute"),a(g,"width","100%"),a(g,"height","100%"),a(g,"left","0"),a(g,"top","0"),a(g,"margin","0 !important"),a(g,"z-index","0"),a(g,"pointer-events","none"),a(O,"*",$([a(g,"pointer-events","auto")]))]))}}))])),a(pr,y(d.fK),$([a(g,"position","relative"),a(g,"border","none"),a(g,"flex-shrink","0"),a(g,"display","flex"),a(g,"flex-direction","row"),a(g,"flex-basis","auto"),a(g,"resize","none"),a(g,"font-feature-settings","inherit"),a(g,"box-sizing","border-box"),a(g,"margin","0"),a(g,"padding","0"),a(g,"border-width","0"),a(g,"border-style","solid"),a(g,"font-size","inherit"),a(g,"color","inherit"),a(g,"font-family","inherit"),a(g,"line-height","1"),a(g,"font-weight","inherit"),a(g,"text-decoration","none"),a(g,"font-style","inherit"),a(A,y(d.dQ),$([a(g,"flex-wrap","wrap")])),a(A,y(d.eU),$([a(g,"-moz-user-select","none"),a(g,"-webkit-user-select","none"),a(g,"-ms-user-select","none"),a(g,"user-select","none")])),a(A,y(d.gf),$([a(g,"cursor","pointer")])),a(A,y(d.gg),$([a(g,"cursor","text")])),a(A,y(d.hn),$([a(g,"pointer-events","none !important")])),a(A,y(d.b4),$([a(g,"pointer-events","auto !important")])),a(A,y(d.a$),$([a(g,"opacity","0")])),a(A,y(d.aU),$([a(g,"opacity","1")])),a(A,y(Y(d.gK,d.a$))+":hover",$([a(g,"opacity","0")])),a(A,y(Y(d.gK,d.aU))+":hover",$([a(g,"opacity","1")])),a(A,y(Y(d.gx,d.a$))+":focus",$([a(g,"opacity","0")])),a(A,y(Y(d.gx,d.aU))+":focus",$([a(g,"opacity","1")])),a(A,y(Y(d.cL,d.a$))+":active",$([a(g,"opacity","0")])),a(A,y(Y(d.cL,d.aU))+":active",$([a(g,"opacity","1")])),a(A,y(d.fj),$([a(g,"transition",a(ce,", ",a(ae,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),a(A,y(d.hD),$([a(g,"overflow","auto"),a(g,"flex-shrink","1")])),a(A,y(d.hE),$([a(g,"overflow-x","auto"),a(A,y(d.af),$([a(g,"flex-shrink","1")]))])),a(A,y(d.hF),$([a(g,"overflow-y","auto"),a(A,y(d.aw),$([a(g,"flex-shrink","1")])),a(A,y(d.hL),$([a(g,"flex-shrink","1")]))])),a(A,y(d.f7),$([a(g,"overflow","hidden")])),a(A,y(d.f8),$([a(g,"overflow-x","hidden")])),a(A,y(d.f9),$([a(g,"overflow-y","hidden")])),a(A,y(d.dO),$([a(g,"width","auto")])),a(A,y(d.b1),$([a(g,"border-width","0")])),a(A,y(d.fX),$([a(g,"border-style","dashed")])),a(A,y(d.fY),$([a(g,"border-style","dotted")])),a(A,y(d.fZ),$([a(g,"border-style","solid")])),a(A,y(d.Y),$([a(g,"white-space","pre"),a(g,"display","inline-block")])),a(A,y(d.gX),$([a(g,"line-height","1.05"),a(g,"background","transparent"),a(g,"text-align","inherit")])),a(A,y(d.hL),au),a(A,y(d.af),$([a(g,"display","flex"),a(g,"flex-direction","row"),a(O,y(d.fK),$([a(g,"flex-basis","0%"),a(A,y(d.fu),$([a(g,"flex-basis","auto")])),a(A,y(d.et),$([a(g,"flex-basis","auto")]))])),a(O,y(d.c$),$([a(g,"align-self","stretch !important")])),a(O,y(d.ef),$([a(g,"align-self","stretch !important")])),a(O,y(d.dP),$([a(g,"flex-grow","100000")])),a(O,y(d.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"align-self","stretch")])),a(O,"u:first-of-type."+d.fG,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fB),$([a(g,"margin-left","auto !important")]))])),a(O,"s:last-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fB),$([a(g,"margin-right","auto !important")]))])),a(O,"s:only-of-type."+d.fE,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fE+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fG+(" ~ s."+d.fE)),$([a(g,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 1:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 2:return L($([a(g,"justify-content","flex-end")]),D);case 3:return L($([a(g,"justify-content","flex-start")]),D);case 4:return L($([a(g,"justify-content","center")]),D);default:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]))}}),a(A,y(d.hO),$([a(g,"justify-content","space-between")])),a(A,y(d.ci),$([a(g,"align-items","baseline")]))])),a(A,y(d.aw),$([a(g,"display","flex"),a(g,"flex-direction","column"),a(O,y(d.fK),$([a(g,"flex-basis","0px"),a(g,"min-height","min-content"),a(A,y(d.ee),$([a(g,"flex-basis","auto")]))])),a(O,y(d.c$),$([a(g,"flex-grow","100000")])),a(O,y(d.dP),$([a(g,"width","100%")])),a(O,y(d.fv),$([a(g,"width","100%")])),a(O,y(d.dO),$([a(g,"align-self","flex-start")])),a(O,"u:first-of-type."+d.fD,$([a(g,"flex-grow","1")])),a(O,"s:first-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","0 !important")]))])),a(O,"s:last-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-bottom","auto !important"),a(g,"margin-top","0 !important")]))])),a(O,"s:only-of-type."+d.fF,$([a(g,"flex-grow","1"),a(O,y(d.fC),$([a(g,"margin-top","auto !important"),a(g,"margin-bottom","auto !important")]))])),a(O,"s:last-of-type."+(d.fF+" ~ u"),$([a(g,"flex-grow","0")])),a(O,"u:first-of-type."+(d.fD+(" ~ s."+d.fF)),$([a(g,"flex-grow","0")])),Ga(function(e){switch(e){case 0:return L($([a(g,"justify-content","flex-start")]),$([a(g,"margin-bottom","auto")]));case 1:return L($([a(g,"justify-content","flex-end")]),$([a(g,"margin-top","auto")]));case 2:return L($([a(g,"align-items","flex-end")]),$([a(g,"align-self","flex-end")]));case 3:return L($([a(g,"align-items","flex-start")]),$([a(g,"align-self","flex-start")]));case 4:return L($([a(g,"align-items","center")]),$([a(g,"align-self","center")]));default:return L($([a(g,"justify-content","center")]),D)}}),a(O,y(d.b8),$([a(g,"flex-grow","0"),a(g,"flex-basis","auto"),a(g,"width","100%"),a(g,"align-self","stretch !important")])),a(A,y(d.hO),$([a(g,"justify-content","space-between")]))])),a(A,y(d.gC),$([a(g,"display","-ms-grid"),a(O,".gp",$([a(O,y(d.fK),$([a(g,"width","100%")]))])),a(B0,L("display","grid"),$([L("display","grid")])),U0(function(e){switch(e){case 0:return $([a(g,"justify-content","flex-start")]);case 1:return $([a(g,"justify-content","flex-end")]);case 2:return $([a(g,"align-items","flex-end")]);case 3:return $([a(g,"align-items","flex-start")]);case 4:return $([a(g,"align-items","center")]);default:return $([a(g,"justify-content","center")])}})])),a(A,y(d.eY),$([a(g,"display","block"),a(O,y(d.fK+":first-child"),$([a(g,"margin","0 !important")])),a(O,y(d.fK+(pi(3)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),a(O,y(d.fK+(pi(2)+(":first-child + ."+d.fK))),$([a(g,"margin","0 !important")])),Ga(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 3:return L(D,$([a(g,"float","left"),a(A,"::after",$([a(g,"content",'""'),a(g,"display","table"),a(g,"clear","both")]))]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,y(d.gT),$([a(g,"white-space","pre-wrap !important"),a(g,"height","100%"),a(g,"width","100%"),a(g,"background-color","transparent")])),a(A,y(d.gW),$([a(A,y(d.hL),$([a(g,"flex-basis","auto")]))])),a(A,y(d.gV),$([a(g,"white-space","pre-wrap !important"),a(g,"cursor","text"),a(O,y(d.gU),$([a(g,"white-space","pre-wrap !important"),a(g,"color","transparent")]))])),a(A,y(d.eZ),$([a(g,"display","block"),a(g,"white-space","normal"),a(g,"overflow-wrap","break-word"),a(A,y(d.cZ),$([a(g,"z-index","0"),a(O,y(d.fQ),$([a(g,"z-index","-1")]))])),a(no,y(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")])),a(no,y(d.eZ),$([a(g,"display","inline"),a(A,"::after",$([a(g,"content","none")])),a(A,"::before",$([a(g,"content","none")]))])),a(no,y(d.hL),$([a(g,"display","inline"),a(g,"white-space","normal"),a(A,y(d.fu),$([a(g,"display","inline-block")])),a(A,y(d.gP),$([a(g,"display","flex")])),a(A,y(d.fQ),$([a(g,"display","flex")])),a(A,y(d.fy),$([a(g,"display","flex")])),a(A,y(d.fR),$([a(g,"display","flex")])),a(A,y(d.hh),$([a(g,"display","flex")])),a(A,y(d.hg),$([a(g,"display","flex")])),a(O,y(d.Y),$([a(g,"display","inline"),a(g,"white-space","normal")]))])),a(O,y(d.af),$([a(g,"display","inline")])),a(O,y(d.aw),$([a(g,"display","inline-flex")])),a(O,y(d.gC),$([a(g,"display","inline-grid")])),Ga(function(e){switch(e){case 0:return L(D,D);case 1:return L(D,D);case 2:return L(D,$([a(g,"float","right")]));case 3:return L(D,$([a(g,"float","left")]));case 4:return L(D,D);default:return L(D,D)}})])),a(A,".hidden",$([a(g,"display","none")])),a(A,y(d.ia),$([a(g,"font-weight","100")])),a(A,y(d.h1),$([a(g,"font-weight","200")])),a(A,y(d.h5),$([a(g,"font-weight","300")])),a(A,y(d.h7),$([a(g,"font-weight","400")])),a(A,y(d.h6),$([a(g,"font-weight","500")])),a(A,y(d.h9),$([a(g,"font-weight","600")])),a(A,y(d.fV),$([a(g,"font-weight","700")])),a(A,y(d.h0),$([a(g,"font-weight","800")])),a(A,y(d.h2),$([a(g,"font-weight","900")])),a(A,y(d.g2),$([a(g,"font-style","italic")])),a(A,y(d.hU),$([a(g,"text-decoration","line-through")])),a(A,y(d.ih),$([a(g,"text-decoration","underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,Y(y(d.ih),y(d.hU)),$([a(g,"text-decoration","line-through underline"),a(g,"text-decoration-skip-ink","auto"),a(g,"text-decoration-skip","ink")])),a(A,y(d.ib),$([a(g,"font-style","normal")])),a(A,y(d.h3),$([a(g,"text-align","justify")])),a(A,y(d.cF),$([a(g,"text-align","justify-all")])),a(A,y(d.h$),$([a(g,"text-align","center")])),a(A,y(d.h8),$([a(g,"text-align","right")])),a(A,y(d.h4),$([a(g,"text-align","left")])),a(A,".modal",$([a(g,"position","fixed"),a(g,"left","0"),a(g,"top","0"),a(g,"width","100%"),a(g,"height","100%"),a(g,"pointer-events","none")]))]))]),pn=function(e){return $([a(pr,".v-"+e,$([a(g,"font-feature-settings",'"'+(e+'"'))])),a(pr,".v-"+(e+"-off"),$([a(g,"font-feature-settings",'"'+(e+'" 0'))]))])},H0=sr($([a(ae,function(e){return a(pr,".border-"+k(e),$([a(g,"border-width",k(e)+"px")]))},a(on,0,6)),a(ae,function(e){return a(pr,".font-size-"+k(e),$([a(g,"font-size",k(e)+"px")]))},a(on,8,32)),a(ae,function(e){return a(pr,".p-"+k(e),$([a(g,"padding",k(e)+"px")]))},a(on,0,24)),$([a(pr,".v-smcp",$([a(g,"font-variant","small-caps")])),a(pr,".v-smcp-off",$([a(g,"font-variant","normal")]))]),pn("zero"),pn("onum"),pn("liga"),pn("dlig"),pn("ordn"),pn("tnum"),pn("afrc"),pn("frac")])),G0=`
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
`,Y0="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(y(d.fK)+(y(d.af)+(" > "+(y(d.fK)+(" { flex-basis: auto !important; } "+(y(d.fK)+(y(d.af)+(" > "+(y(d.fK)+(y(d.b8)+(" { flex-basis: auto !important; }}"+(W0+(O0+(J0+(q0+G0))))))))))))))),ga=function(e){return a(ce,"",e)},la=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),ca=v(function(e,r){var n=e,t=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return Re(o,{aE:a(z,L(l,c),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,p=i.b;return Re(o,{G:a(z,{b5:`
}`,G:D,aE:p,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Re(o,{G:a(z,a(ca,a(la,n.ag+(" + "+b),""),s),o.G)});case 1:var x=i.a,_=i.b;return Re(o,{G:a(z,a(ca,a(la,n.ag+(" > "+x),""),_),o.G)});case 2:var x=i.a,_=i.b;return Re(o,{G:a(z,a(ca,a(la,n.ag+(" "+x),""),_),o.G)});case 4:var S=i.a,C=i.b;return Re(o,{G:a(z,a(ca,a(la,Y(n.ag,S),""),C),o.G)});default:var w=i.a;return Re(o,{G:a(z,a(ca,a(la,n.ag,""),w),o.G)})}});return h(er,t,n,r)}),X0=function(e){var r=function(i){return ga(a(ae,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},t=function(i){var o=i;return Y(n(o),ga(a(ae,t,o.G)))};return ga(a(ae,t,h(er,v(function(i,o){var l=i.a,c=i.b;return a(z,a(ca,a(la,l,""),c),o)}),D,e)))},tu=Y(Y0,X0(Y(N0,H0))),yn=To,Cv=function(e){var r=e.eS;switch(r){case 0:return h(Nr,"div",D,$([h(Nr,"style",D,$([yn(tu)]))]));case 1:return yn("");default:return h(Nr,"elm-ui-static-rules",$([a(yv,"rules",El(tu))]),D)}},K0=v(function(e,r){return h(je,id(e),nd(),r)}),Z0=function(e){return h(je,v(function(r,n){var t=r.a,i=r.b;return h(td,t,i,n)}),ad(),e)},Q0=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},eh=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},rh=function(e){if(e.$===5){var r=e.a;return a(xt,eh,r.fo)}else return!1},ha=v(function(e,r){return _e(e,r)<0?e:r}),Va=M(function(e,r,n){var t=r.a,i=r.b;return e?n+(`
  `+(t+(": "+(i+" !important;")))):n+(`
  `+(t+(": "+(i+";"))))}),Fe=ee(function(e,r,n,t){if(r.$===1)return $([n+("{"+(h(je,Va(!1),"",t)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(je,Va(!0),"",t)+`
}`))]);default:return $([n+("-hv:hover {"+(h(je,Va(!1),"",t)+`
}`))])}case 0:var l=h(je,Va(!1),"",t);return $([n+("-fs:focus {"+(l+`
}`)),"."+(d.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(y(d.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(h(je,Va(!1),"",t)+`
}`))])}}),nh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},ah=function(e){if(e.$===5){var r=e.a;return X(a(ce,", ",a(ae,nh,r.fo)))}else return J},th=function(e){switch(e.$){case 0:return J;case 1:var r=e.a,n=r.a,t=r.b,i=r.c;return X("translate3d("+(ve(n)+("px, "+(ve(t)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,f=e.b,m=f.a,p=f.b,b=f.c,s=e.c,x=s.a,_=s.b,S=s.c,C=e.d,w="translate3d("+(ve(l)+("px, "+(ve(c)+("px, "+(ve(u)+"px)"))))),T="scale3d("+(ve(m)+(", "+(ve(p)+(", "+(ve(b)+")"))))),G="rotate3d("+(ve(x)+(", "+(ve(_)+(", "+(ve(S)+(", "+(ve(C)+"rad)")))))));return X(w+(" "+(T+(" "+G))))}},Ul=M(function(e,r,n){switch(r.$){case 0:var t=r.a,i=r.b;return P(Fe,e,n,t,i);case 13:var u=r.a,b=r.b;return P(Fe,e,n,"."+u,$([a(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,l=a(Pr,0,a(ha,1,1-o));return P(Fe,e,n,"."+u,$([a(ue,"opacity",ve(l))]));case 2:var c=r.a;return P(Fe,e,n,".font-size-"+k(c),$([a(ue,"font-size",k(c)+"px")]));case 1:var u=r.a,f=r.b,m=a(ce,", ",a(vn,ah,f)),p=$([a(ue,"font-family",a(ce,", ",a(ae,Q0,f))),a(ue,"font-feature-settings",m),a(ue,"font-variant",a(xt,rh,f)?"small-caps":"normal")]);return P(Fe,e,n,"."+u,p);case 3:var se=r.a,b=r.b,Ji=r.c;return P(Fe,e,n,"."+se,$([a(ue,b,Ji)]));case 4:var se=r.a,b=r.b,s=r.c;return P(Fe,e,n,"."+se,$([a(ue,b,fa(s))]));case 5:var q=r.a,x=r.b,_=r.c,S=k(_)+"px",C=k(x)+"px",w="."+d.af,T="."+(d.dQ+w),pe="."+d.dY,G="."+d.eZ,Z="."+d.eY,Se="."+d.dX,ne=ve(_/2)+"px",te=ve(x/2)+"px",ie="."+d.aw,se="."+q,re="."+d.fK;return sr($([P(Fe,e,n,se+(w+(" > "+(re+(" + "+re)))),$([a(ue,"margin-left",C)])),P(Fe,e,n,se+(T+(" > "+re)),$([a(ue,"margin",ne+(" "+te))])),P(Fe,e,n,se+(ie+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),P(Fe,e,n,se+(Z+(" > "+(re+(" + "+re)))),$([a(ue,"margin-top",S)])),P(Fe,e,n,se+(Z+(" > "+Se)),$([a(ue,"margin-right",C)])),P(Fe,e,n,se+(Z+(" > "+pe)),$([a(ue,"margin-left",C)])),P(Fe,e,n,Y(se,G),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)"))])),P(Fe,e,n,"textarea"+(re+se),$([a(ue,"line-height","calc(1em + "+(k(_)+"px)")),a(ue,"height","calc(100% + "+(k(_)+"px)"))])),P(Fe,e,n,se+(G+(" > "+Se)),$([a(ue,"margin-right",C)])),P(Fe,e,n,se+(G+(" > "+pe)),$([a(ue,"margin-left",C)])),P(Fe,e,n,se+(G+"::after"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-top",k(-1*(_/2|0))+"px")])),P(Fe,e,n,se+(G+"::before"),$([a(ue,"content","''"),a(ue,"display","block"),a(ue,"height","0"),a(ue,"width","0"),a(ue,"margin-bottom",k(-1*(_/2|0))+"px")]))]));case 7:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return P(Fe,e,n,se,$([a(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(Me)+("px "+(ve(Se)+"px")))))))]));case 6:var q=r.a,de=r.b,pe=r.c,Me=r.d,Se=r.e,se="."+q;return P(Fe,e,n,se,$([a(ue,"border-width",k(de)+("px "+(k(pe)+("px "+(k(Me)+("px "+(k(Se)+"px")))))))]));case 8:var me=r.a,Te=M(function(Xe,Ba,Xr){e:for(;;)switch(Xr.$){case 0:var Zm=Xr.a;return k(Zm)+"px";case 1:var Dr=L(Xe,Ba);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var En=Dr.b.a;return"minmax(max-content, "+(k(En)+"px)")}else if(Dr.b.$===1){var Bn=Dr.a.a;return Dr.b,"minmax("+(k(Bn)+"px, max-content)")}else{var Bn=Dr.a.a,En=Dr.b.a;return"minmax("+(k(Bn)+("px, "+(k(En)+"px)")))}case 2:var kc=Xr.a,Fr=L(Xe,Ba);if(Fr.a.$===1){if(Fr.b.$===1)return Fr.a,Fr.b,k(kc)+"fr";Fr.a;var En=Fr.b.a;return"minmax(max-content, "+(k(En)+"px)")}else if(Fr.b.$===1){var Bn=Fr.a.a;return Fr.b,"minmax("+(k(Bn)+("px, "+(k(kc)+"frfr)")))}else{var Bn=Fr.a.a,En=Fr.b.a;return"minmax("+(k(Bn)+("px, "+(k(En)+"px)")))}case 3:var Yi=Xr.a,Xi=Xr.b,Ki=X(Yi),Zi=Ba,Qi=Xi;Xe=Ki,Ba=Zi,Xr=Qi;continue e;default:var Yi=Xr.a,Xi=Xr.b,Ki=Xe,Zi=X(Yi),Qi=Xi;Xe=Ki,Ba=Zi,Xr=Qi;continue e}}),I=function(Xe){return h(Te,J,J,Xe)};I(me.hP.a);var E=I(me.hP.b),B=function(Xe){return"grid-template-rows: "+(Xe+";")}(a(ce," ",a(ae,I,me.hB))),V=function(Xe){return"-ms-grid-rows: "+(Xe+";")}(a(ce,E,a(ae,I,me.ak))),R=function(Xe){return"-ms-grid-columns: "+(Xe+";")}(a(ce,E,a(ae,I,me.ak))),j="grid-row-gap:"+(I(me.hP.b)+";"),N="grid-column-gap:"+(I(me.hP.a)+";"),H=function(Xe){return"grid-template-columns: "+(Xe+";")}(a(ce," ",a(ae,I,me.ak))),se=".grid-rows-"+(a(ce,"-",a(ae,Hr,me.hB))+("-cols-"+(a(ce,"-",a(ae,Hr,me.ak))+("-space-x-"+(Hr(me.hP.a)+("-space-y-"+Hr(me.hP.b))))))),Wi=se+("{"+(H+(B+(N+(j+"}"))))),Oi="@supports (display:grid) {"+(Wi+"}"),qi=se+("{"+(R+(V+"}")));return $([qi,Oi]);case 9:var Ne=r.a,At=a(ce," ",$(["-ms-grid-row: "+(k(Ne.af)+";"),"-ms-grid-row-span: "+(k(Ne.gH)+";"),"-ms-grid-column: "+(k(Ne.ga)+";"),"-ms-grid-column-span: "+(k(Ne.im)+";")])),Gi=a(ce," ",$(["grid-row: "+(k(Ne.af)+(" / "+(k(Ne.af+Ne.gH)+";"))),"grid-column: "+(k(Ne.ga)+(" / "+(k(Ne.ga+Ne.im)+";")))])),se=".grid-pos-"+(k(Ne.af)+("-"+(k(Ne.ga)+("-"+(k(Ne.im)+("-"+k(Ne.gH))))))),Wi=se+("{"+(Gi+"}")),Oi="@supports (display:grid) {"+(Wi+"}"),qi=se+("{"+(At+"}"));return $([qi,Oi]);case 11:var se=r.a,Ym=r.b,Xm=function(Xe){return h(Ul,e,Xe,X(se))};return a(Da,Xm,Ym);default:var Tc=r.a,Ji=th(Tc),se=Vl(Tc),It=L(se,Ji);if(!It.a.$&&!It.b.$){var q=It.a.a,Km=It.b.a;return P(Fe,e,n,"."+q,$([a(ue,"transform",Km)]))}else return D}}),ih=v(function(e,r){return Z0(a(ae,function(n){var t=h(Ul,e,n,J);return L(lt(n),a(K0,El,t))},r))}),gi=v(function(e,r){var n=function(t){var i=t.a,o=t.b;return i+(": "+(o+";"))};return e+(" {"+(a(ce,"",a(ae,n,r))+"}"))}),iu=M(function(e,r,n){var t=n.a,i=n.b;return $([a(gi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),t),a(gi,"."+(e+("."+(r+("> ."+(d.Y+(", ."+(e+(" ."+(r+(" > ."+d.Y)))))))))),i)])}),oh=M(function(e,r,n){var t=r.a,i=r.b,o=he(e,n)?e:n+(" ."+e);return a(ce," ",Y(h(iu,o,d.hM,i),h(iu,o,d.gy,t)))}),lh=v(function(e,r){var n=he(e,r)?e:r+(" ."+e);return a(ce," ",$([a(gi,"."+(n+("."+(d.hM+(", "+("."+(n+(" ."+d.hM))))))),$([L("line-height","1")])),a(gi,"."+(n+("."+(d.hM+("> ."+(d.Y+(", ."+(n+(" ."+(d.hM+(" > ."+d.Y)))))))))),$([L("vertical-align","0"),L("line-height","1")]))]))}),ou=M(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),Lv=v(function(e,r){return h(er,v(function(n,t){return e(n)?a(z,n,t):t}),D,r)}),ch=function(e){if(e.b){var r=e.a,n=e.b;return X(h(je,Pr,r,n))}else return J},lu=function(e){if(e.b){var r=e.a,n=e.b;return X(h(je,ha,r,n))}else return J},cu=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=a(Ae,e.gk,lu(r)),t=a(Ae,e.fP,lu(a(Lv,function(f){return!he(f,n)},r))),i=a(Ae,e.f1,ch(r)),o=1/(i-t),l=1-i,c=1/(i-n),u=1-i;return{f1:h(ou,o,i-t,l),ec:h(ou,c,i-n,u)}},uu=function(e){return L($([L("display","block")]),$([L("display","inline-block"),L("line-height",ve(e.gH)),L("vertical-align",ve(e.fp)+"em"),L("font-size",ve(e.bi)+"em")]))},uh=function(e){return h(je,v(function(r,n){if(n.$===1)if(r.$===5){var t=r.a,i=t.fz;if(i.$===1)return n;var o=i.a;return X(L(uu(function(l){return l.ec}(cu(o))),uu(function(l){return l.f1}(cu(o)))))}else return n;else return n}),J,e)},$h=function(e){var r=function(o){if(o.$===4){var l=o.b;return X("@import url('"+(l+"');"))}else return J},n=function(o){o.a;var l=o.b,c=a(ce,`
`,a(vn,r,l));return c},t=a(ae,q$,e),i=function(o){var l=o.a,c=o.b,u=uh(c);if(u.$===1)return a(ce,"",a(ae,lh(l),t));var f=u.a;return a(ce,"",a(ae,a(oh,l,f),t))};return Y(a(ce,`
`,a(ae,n,e)),a(ce,`
`,a(ae,i,e)))},vh=function(e){if(e.$===1){var r=e.a,n=e.b;return X(L(r,n))}else return J},$u=v(function(e,r){var n=v(function(l,c){return{cB:Y(c.cB,h(Ul,e,l,J)),bT:function(){var u=vh(l);if(u.$===1)return c.bT;var f=u.a;return a(z,f,c.bT)}()}}),t=h(je,n,{cB:D,bT:D},r),i=t.bT,o=t.cB;return Y($h(i),ga(o))}),Pv=v(function(e,r){var n=e.eS;switch(n){case 0:return h(Nr,"div",D,$([h(Nr,"style",D,$([yn(a($u,e,r))]))]));case 1:return h(Nr,"div",D,$([h(Nr,"style",D,$([yn(a($u,e,r))]))]));default:return h(Nr,"elm-ui-rules",$([a(yv,"rules",a(ih,e,r))]),D)}}),vu=ee(function(e,r,n,t){var i=a(Pv,r,h(je,xv,L(_v,wv(r.gx)),n).b);return e?a(z,L("static-stylesheet",Cv(r)),a(z,L("dynamic-stylesheet",i),t)):a(z,L("dynamic-stylesheet",i),t)}),fu=ee(function(e,r,n,t){var i=a(Pv,r,h(je,xv,L(_v,wv(r.gx)),n).b);return e?a(z,Cv(r),a(z,i,t)):a(z,i,t)}),Wo=xe(45),ct=xe(37),zv=function(e){return Sd(g$(e))},fh=dn("p"),or=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return he(o&t,o)}else{var i=e.a;return he(i&n,i)}}),mu=dn("s"),su=dn("u"),Oo=xe(44),ut=xe(39),Ut=wr(function(e,r,n,t,i,o){var l=v(function(u,f){if(t.$===1){var m=t.a;return h(zv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return P(vu,!1,b,s,m);default:var b=i.a,s=i.b;return P(vu,!0,b,s,m)}}())}else{var p=t.a;return a(function(){switch(u){case"div":return Sa;case"p":return fh;default:return Nr(u)}}(),f,function(){switch(i.$){case 0:return p;case 2:var b=i.a,s=i.b;return P(fu,!1,b,s,p);default:var b=i.a,s=i.b;return P(fu,!0,b,s,p)}}())}}),c=function(){switch(r.$){case 0:return a(l,"div",n);case 1:var u=r.a;return a(l,u,n);default:var u=r.a,f=r.b;return h(Nr,u,n,$([a(l,f,$([Lr(d.fK+(" "+d.hL))]))]))}}();switch(o){case 0:return a(or,ut,e)&&!a(or,Oo,e)?c:a(or,gv,e)?a(su,$([Lr(a(ce," ",$([d.fK,d.hL,d.b8,d.ax,d.fG])))]),$([c])):a(or,hv,e)?a(mu,$([Lr(a(ce," ",$([d.fK,d.hL,d.b8,d.ax,d.fE])))]),$([c])):c;case 1:return a(or,ct,e)&&!a(or,Wo,e)?c:a(or,bv,e)?a(mu,$([Lr(a(ce," ",$([d.fK,d.hL,d.b8,d.fF])))]),$([c])):a(or,pv,e)?a(su,$([Lr(a(ce," ",$([d.fK,d.hL,d.b8,d.fD])))]),$([c])):c;default:return c}}),hn=function(e){return!e.b},jl=yn,mh=d.fK+(" "+(d.Y+(" "+(d.dO+(" "+d.c_))))),$t=function(e){return a(Sa,$([Lr(mh)]),$([jl(e)]))},sh=d.fK+(" "+(d.Y+(" "+(d.dP+(" "+d.c$))))),du=function(e){return a(Sa,$([Lr(sh)]),$([jl(e)]))},dh=M(function(e,r,n){var t=v(function(x,_){var S=x.a,C=x.b,w=_.a,T=_.b;switch(C.$){case 0:var G=C.a;return he(e,Rt),L(a(z,L(S,G(e)),w),T);case 1:var Z=C.a;return he(e,Rt),L(a(z,L(S,a(Z.gL,Un,e)),w),hn(T)?Z.hV:Y(Z.hV,T));case 2:var ne=C.a;return L(a(z,L(S,he(e,xr)?du(ne):$t(ne)),w),T);default:return L(w,T)}}),i=v(function(x,_){var S=_.a,C=_.b;switch(x.$){case 0:var w=x.a;return he(e,Rt),L(a(z,w(e),S),C);case 1:var T=x.a;return he(e,Rt),L(a(z,a(T.gL,Un,e),S),hn(C)?T.hV:Y(T.hV,C));case 2:var G=x.a;return L(a(z,he(e,xr)?du(G):$t(G),S),C);default:return L(S,C)}});if(r.$===1){var o=r.a,l=h(er,t,L(D,D),o),c=l.a,u=l.b,f=hn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Ho({gL:P(Ut,n.aR,n.aT,n.aJ,eu(h(nu,"nearby-element-pls",c,n.aM))),hV:m})}else return ot(F(Ut,n.aR,n.aT,n.aJ,eu(h(nu,"nearby-element-pls",c,n.aM)),Un))}else{var p=r.a,b=h(er,i,L(D,D),p),s=b.a,u=b.b,f=hn(u)?n.hV:Y(n.hV,u);if(f.b){var m=f;return Ho({gL:P(Ut,n.aR,n.aT,n.aJ,rr(a(ru,s,n.aM))),hV:m})}else return ot(F(Ut,n.aR,n.aT,n.aJ,rr(a(ru,s,n.aM)),Un))}}),$r=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),ph=function(e){return{$:10,a:e}},hi=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,t=r.b;if(e.$){var o=e.a;return a(hi,n,o|t)}else{var i=e.a;return a(hi,i|n,t)}}),pu=function(e){return{$:1,a:e}},jt=v(function(e,r){return{$:3,a:e,b:r}}),gu=function(e){return{$:2,a:e}},gh=v(function(e,r){return a(Sa,$([Lr(function(){switch(e){case 0:return a(ce," ",$([d.be,d.hL,d.fy]));case 1:return a(ce," ",$([d.be,d.hL,d.fR]));case 2:return a(ce," ",$([d.be,d.hL,d.hh]));case 3:return a(ce," ",$([d.be,d.hL,d.hg]));case 4:return a(ce," ",$([d.be,d.hL,d.gP]));default:return a(ce," ",$([d.be,d.hL,d.fQ]))}}())]),$([function(){switch(r.$){case 3:return yn("");case 2:var n=r.a;return $t(n);case 0:var t=r.a;return t(xr);default:var i=r.a;return a(i.gL,Un,xr)}}()]))}),hh=M(function(e,r,n){var t=a(gh,e,r);switch(n.$){case 0:return e===5?pu($([t])):gu($([t]));case 1:var i=n.a;return e===5?pu(a(z,t,i)):a(jt,i,$([t]));case 2:var o=n.a;return e===5?a(jt,$([t]),o):gu(a(z,t,o));default:var i=n.a,o=n.b;return e===5?a(jt,a(z,t,i),o):a(jt,i,a(z,t,o))}}),hu=v(function(e,r){return{$:2,a:e,b:r}}),bn=function(e){return{$:1,a:e}},Vn=v(function(e,r){switch(r.$){case 0:return bn(e);case 1:var n=r.a;return a(hu,n,e);default:var t=r.a,i=r.b;return a(hu,t,i)}}),bh=function(e){switch(e){case 0:return d.cM+(" "+d.dX);case 2:return d.cM+(" "+d.dY);default:return d.cM+(" "+d.fB)}},_h=function(e){switch(e){case 0:return d.cN+(" "+d.fH);case 2:return d.cN+(" "+d.fA);default:return d.cN+(" "+d.fC)}},Wa=v(function(e,r){return a(Br,Md(e),h$(r))}),Rr=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),gn=function(e){return{$:1,a:e}},xh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return gn(U(u,0,0));case 1:var f=r.a;return gn(U(0,f,0));case 2:var m=r.a;return gn(U(0,0,m));case 3:var n=r.a;return gn(n);case 4:var n=r.a,s=r.b;return P(Rr,U(0,0,0),U(1,1,1),n,s);default:var n=r.a;return P(Rr,U(0,0,0),n,U(0,0,1),0)}case 1:var c=e.a,u=c.a,f=c.b,m=c.c;switch(r.$){case 0:var t=r.a;return gn(U(t,f,m));case 1:var i=r.a;return gn(U(u,i,m));case 2:var o=r.a;return gn(U(u,f,o));case 3:var n=r.a;return gn(n);case 4:var n=r.a,s=r.b;return P(Rr,c,U(1,1,1),n,s);default:var l=r.a;return P(Rr,c,l,U(0,0,1),0)}default:var c=e.a,u=c.a,f=c.b,m=c.c,p=e.b,b=e.c,s=e.d;switch(r.$){case 0:var t=r.a;return P(Rr,U(t,f,m),p,b,s);case 1:var i=r.a;return P(Rr,U(u,i,m),p,b,s);case 2:var o=r.a;return P(Rr,U(u,f,o),p,b,s);case 3:var x=r.a;return P(Rr,x,p,b,s);case 4:var _=r.a,S=r.b;return P(Rr,c,p,_,S);default:var C=r.a;return P(Rr,c,C,b,s)}}}),aa=xe(7),Mv=xe(36),bu=v(function(e,r){var n=e.a,t=e.b,i=r.a,o=r.b;return a(hi,n|i,t|o)}),rn=a(hi,0,0),qo=function(e){switch(e.$){case 0:var r=e.a,n=k(r),t="height-px-"+n;return U(rn,d.ee+(" "+t),$([h($r,t,"height",n+"px")]));case 1:return U(a(ge,Mv,rn),d.c_,D);case 2:var i=e.a;return i===1?U(a(ge,ct,rn),d.c$,D):U(a(ge,ct,rn),d.ef+(" height-fill-"+k(i)),$([h($r,d.fK+("."+(d.aw+(" > "+y("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+k(o),m=h($r,f,"min-height",k(o)+"px !important"),l=qo(u),b=l.a,s=l.b,x=l.c;return U(a(ge,Wo,b),f+(" "+s),a(z,m,x));default:var c=e.a,u=e.b,f="max-height-"+k(c),m=h($r,f,"max-height",k(c)+"px"),p=qo(u),b=p.a,s=p.b,x=p.c;return U(a(ge,Wo,b),f+(" "+s),a(z,m,x))}},Tv=xe(38),Jo=function(e){switch(e.$){case 0:var r=e.a;return U(rn,d.fu+(" width-px-"+k(r)),$([h($r,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return U(a(ge,Tv,rn),d.dO,D);case 2:var n=e.a;return n===1?U(a(ge,ut,rn),d.dP,D):U(a(ge,ut,rn),d.fv+(" width-fill-"+k(n)),$([h($r,d.fK+("."+(d.af+(" > "+y("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var t=e.a,l=e.b,c="min-width-"+k(t),u=h($r,c,"min-width",k(t)+"px"),i=Jo(l),m=i.a,p=i.b,b=i.c;return U(a(ge,Oo,m),c+(" "+p),a(z,u,b));default:var o=e.a,l=e.b,c="max-width-"+k(o),u=h($r,c,"max-width",k(o)+"px"),f=Jo(l),m=f.a,p=f.b,b=f.c;return U(a(ge,Oo,m),c+(" "+p),a(z,u,b))}},Fi=xe(27),wh=v(function(e,r){if(he(e,Fi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var t=r.a;return t>=8&&t<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return he(i,l)&&he(i,o)&&he(i,c)&&i>=0&&i<=24;default:return!1}}),ta=xe(6),_u=xe(30),xu=xe(29),yh=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var m=c.a,p=c.b;switch(m.$){case 0:var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 3:var _=m.a,b=m.b;if(a(or,_,n)){var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else{var I=b+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}case 1:var s=m.a,I=e,E=r,B=n,V=t,R=i,j=a(z,s,o),N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 4:var _=m.a,x=m.b;if(a(or,_,n)){var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else if(a(wh,_,x)){var I=lt(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else{var I=lt(x)+(" "+e),E=r,B=a(ge,_,n),V=t,R=a(z,x,i),j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}case 10:var _=m.a,S=m.b,I=e,E=r,B=a(ge,_,n),V=a(xh,t,S),R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 7:var C=m.a;if(a(or,ta,n)){var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else switch(C.$){case 0:var w=C.a,I=d.fu+(" width-px-"+k(w))+(" "+e),E=r,B=a(ge,ta,n),V=t,R=a(z,h($r,"width-px-"+k(w),"width",k(w)+"px"),i),j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 1:var I=e+(" "+d.dO),E=r,B=a(ge,Tv,a(ge,ta,n)),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 2:var T=C.a;if(T===1){var I=e+(" "+d.dP),E=r,B=a(ge,ut,a(ge,ta,n)),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else{var I=e+(" "+(d.fv+(" width-fill-"+k(T)))),E=r,B=a(ge,ut,a(ge,ta,n)),V=t,R=a(z,h($r,d.fK+("."+(d.af+(" > "+y("width-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}default:var G=Jo(C),Z=G.a,ne=G.b,Te=G.c,I=e+(" "+ne),E=r,B=a(bu,Z,a(ge,ta,n)),V=t,R=Y(Te,i),j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}case 8:var te=m.a;if(a(or,aa,n)){var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else switch(te.$){case 0:var w=te.a,ie=k(w)+"px",re="height-px-"+ie,I=d.ee+(" "+(re+(" "+e))),E=r,B=a(ge,aa,n),V=t,R=a(z,h($r,re,"height ",ie),i),j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 1:var I=d.c_+(" "+e),E=r,B=a(ge,Mv,a(ge,aa,n)),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 2:var T=te.a;if(T===1){var I=d.c$+(" "+e),E=r,B=a(ge,ct,a(ge,aa,n)),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else{var I=e+(" "+(d.ef+(" height-fill-"+k(T)))),E=r,B=a(ge,ct,a(ge,aa,n)),V=t,R=a(z,h($r,d.fK+("."+(d.aw+(" > "+y("height-fill-"+k(T))))),"flex-grow",k(T*1e5)),i),j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}default:var q=qo(te),Z=q.a,ne=q.b,Te=q.c,I=e+(" "+ne),E=r,B=a(bu,Z,a(ge,aa,n)),V=t,R=Y(Te,i),j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}case 2:var de=m.a;switch(de.$){case 0:var I=e,E=a(Vn,"main",r),B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 1:var I=e,E=a(Vn,"nav",r),B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 2:var I=e,E=a(Vn,"footer",r),B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 3:var I=e,E=a(Vn,"aside",r),B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 4:var pe=de.a;if(pe<=1){var I=e,E=a(Vn,"h1",r),B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else if(pe<7){var I=e,E=a(Vn,"h"+k(pe),r),B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else{var I=e,E=a(Vn,"h6",r),B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}case 9:var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 8:var I=e,E=r,B=n,V=t,R=i,j=a(z,a(Wa,"role","button"),o),N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 5:var Me=de.a,I=e,E=r,B=n,V=t,R=i,j=a(z,a(Wa,"aria-label",Me),o),N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 6:var I=e,E=r,B=n,V=t,R=i,j=a(z,a(Wa,"aria-live","polite"),o),N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;default:var I=e,E=r,B=n,V=t,R=i,j=a(z,a(Wa,"aria-live","assertive"),o),N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var Gi=me.a;return Y(i,Gi.hV)}}(),I=e,E=r,B=n,V=t,R=Te,j=o,N=h(hh,Se,me,l),H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e;case 6:var Ne=m.a;if(a(or,_u,n)){var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else{var I=bh(Ne)+(" "+e),E=r,B=function(se){switch(Ne){case 1:return a(ge,hv,se);case 2:return a(ge,gv,se);default:return se}}(a(ge,_u,n)),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}default:var At=m.a;if(a(or,xu,n)){var I=e,E=r,B=n,V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}else{var I=_h(At)+(" "+e),E=r,B=function(se){switch(At){case 1:return a(ge,bv,se);case 2:return a(ge,pv,se);default:return se}}(a(ge,xu,n)),V=t,R=i,j=o,N=l,H=p;e=I,r=E,n=B,t=V,i=R,o=j,l=N,c=H;continue e}}}else{var u=Vl(t);if(u.$===1)return{aJ:a(z,Lr(e),o),aM:l,aR:n,aT:r,hV:i};var f=u.a;return{aJ:a(z,Lr(e+(" "+f)),o),aM:l,aR:n,aT:r,hV:a(z,ph(t),i)}}}),Sh={$:0},Ch=Sh,ur=ee(function(e,r,n,t){return h(dh,e,t,pt(yh,T0(e),r,rn,Ch,D,D,y0,mr(n)))}),nn=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Lh={fO:J,fW:J,hH:X({a2:0,b6:P(nn,155/255,203/255,1,1),eV:L(0,0),bi:3})},Ph=function(e){var r=v(function(t,i){switch(t.$){case 0:var o=t.a,l=i.gK;return l.$===1?Re(i,{gK:X(o)}):i;case 1:var c=t.a,u=i.gx;return u.$===1?Re(i,{gx:X(c)}):i;default:var f=t.a,m=i.eS;return m.$===1?Re(i,{eS:X(f)}):i}}),n=function(t){return{gx:function(){var i=t.gx;if(i.$===1)return Lh;var o=i.a;return o}(),gK:function(){var i=t.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=t.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(er,r,{gx:J,gK:J,eS:J},e))},zh=v(function(e,r){switch(r.$){case 0:var t=r.a;return t(xr);case 1:var n=r.a.hV,t=r.a.gL;return a(t,e(n),xr);case 2:var i=r.a;return $t(i);default:return $t("")}}),Mh=M(function(e,r,n){var t=Ph(e),i=function(){var o=t.eS;return o===1?dv(t):x0(t)}();return a(zh,i,P(ur,xr,ea,r,rr($([n]))))}),vt=M(function(e,r,n){return{$:4,a:e,b:r,c:n}}),kv=v(function(e,r){return{$:1,a:e,b:r}}),Dv=function(e){return{$:2,a:e}},Th={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),ao=function(e){return{$:3,a:e}},Fv=xe(8),Av=xe(14),Iv=xe(5),Ev=xe(4),Ca=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return Ve(r)+("-"+(Ve(n)+("-"+(Ve(t)+("-"+Ve(i))))))},Zt=As,to=Fs,Bv=v(function(e,r){return Y(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return a(ce,"-",to(Zt(n)));case 4:var n=e.a;return e.b,a(ce,"-",to(Zt(n)));default:var n=e.a.hc;return a(ce,"-",to(Zt(n)))}}())}),kh=function(){var e=$([ao("Open Sans"),ao("Helvetica"),ao("Verdana"),Th]);return $([a(Ce,Fv,h(vt,"bg-"+Ca(P(nn,1,1,1,0)),"background-color",P(nn,1,1,1,0))),a(Ce,Av,h(vt,"fc-"+Ca(P(nn,0,0,0,1)),"color",P(nn,0,0,0,1))),a(Ce,Ev,Dv(20)),a(Ce,Iv,a(kv,h(je,Bv,"font-",e),e))])}(),Dh=M(function(e,r,n){var t=e.hl;return h(Mh,t,a(z,br(a(ce," ",$([d.hA,d.fK,d.hL]))),Y(kh,r)),n)}),Vv={$:3},Rv=function(e){return{$:2,a:e}},Yo=Ld,Uv=v(function(e,r){switch(r.$){case 1:var n=r.a;return Ho({gL:v(function(o,l){return a(Yo,e,a(n.gL,o,l))}),hV:n.hV});case 0:var t=r.a;return ot(a(yt,Yo(e),t));case 2:var i=r.a;return Rv(i);default:return Vv}}),Nl=Uv,Fh=Yo,Ah=function(e){return{$:0,a:e}},De=Ah,Ih=zd,hr=Ih,jv={$:1},Ai=function(e){return{$:5,a:e}},Nv=Ai(0),Vr=M(function(e,r,n){return P(nn,e/255,r/255,n/255,1)}),Hv=h(Vr,0,0,0),Eh=Br("d"),Bh=Br("fill"),Vh=Br("height"),Gv=d$("http://www.w3.org/2000/svg"),Rh=Gv("path"),Uh=Gv("svg"),jh=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},Nh=function(e){var r=jh(e);return"rgba("+(k(Be(r.hu*255))+(","+k(Be(r.gA*255))+(","+k(Be(r.fS*255))+(","+ve(r.fI)+")"))))},Hh=Br("viewBox"),Gh=Br("width"),ma=M(function(e,r,n){return a(Uh,$([Hh("0 0 100 100"),Gh(k(e)),Vh(k(e))]),$([a(Rh,$([Eh(n),Bh(Nh(r))]),D)]))}),Wh={$:1},dr=Wh,Wv=function(e){return{$:7,a:e}},le=Wv,Le=v(function(e,r){return P(ur,xr,ea,a(z,le(dr),a(z,ye(dr),e)),rr($([r])))}),Ov=function(e){return{$:2,a:e}},be=Ov(1),Nn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},ba={c3:260,bE:54},ln=function(e){return a(Ce,Fv,h(vt,"bg-"+Ca(e),"background-color",e))},Oh=xe(28),Sn=function(e){return a(Ce,Oh,h(vt,"bc-"+Ca(e),"border-color",e))},Qt=1,Mr=v(function(e,r){return P(ur,Qt,ea,a(z,br(d.gc+(" "+d.bt)),a(z,ye(dr),a(z,le(dr),e))),rr(r))}),qh=h(Vr,83,83,83),qv=ee(function(e,r,n,t){return P(nn,e/255,r/255,n/255,t)}),Ii=P(qv,56,56,56,.25),qe=Vv,ft=Ye(function(e,r,n,t,i){return{$:7,a:e,b:r,c:n,d:t,e:i}}),mt=xe(2),Hn=function(e){var r=e;return a(Ce,mt,F(ft,"p-"+k(e),r,r,r,r))},Jv=M(function(e,r,n){return{$:5,a:e,b:r,c:n}}),Yv=xe(3),Xv=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Cn=function(e){return a(Ce,Yv,h(Jv,a(Xv,e,e),e,e))},Jh=P(qv,0,0,0,0),Yh=function(e){return{$:4,a:e}},Xo=0,kn=v(function(e,r){return P(ur,Xo,ea,a(z,br(d.bt+(" "+d.ax)),a(z,le(dr),a(z,ye(dr),e))),rr(r))}),Xh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(a(dv,{gx:{fO:J,fW:J,hH:J},gK:1,eS:0},n.hV));case 2:var t=e.a;return di(yn(t));default:return di(yn(""))}},Kh=v(function(e,r){return Xh(e(r))}),Zh=Pd,Qh=v(function(e,r){return ot(h(Zh,Kh,e,r))}),Ln=function(e){return a(Ce,Av,h(vt,"fc-"+Ca(e),"color",e))},Hl=h(Vr,195,195,195),Dn=v(function(e,r){return{$:3,a:e,b:r}}),Kv=xe(13),e3=a(Dn,Kv,d.h7),r3=xe(20),Zv=a(Dn,r3,d.hF),ra=function(e){return a(Ce,Ev,Dv(e))},Gl=a(Dn,Kv,d.fV),Ko=v(function(e,r){if(r.$===-2)return Yr;var n=r.a,t=r.b,i=r.c,o=r.d,l=r.e;return F(fe,n,t,a(e,t,i),a(Ko,e,o),a(Ko,e,l))}),Qv=v(function(e,r){if(he(e,r)){var n=e;return a(Ce,mt,F(ft,"p-"+k(e),n,n,n,n))}else{var t=r,i=e;return a(Ce,mt,F(ft,"p-"+(k(e)+("-"+k(r))),t,i,t,i))}}),Pn=function(e){return Rv(e)},n3=function(e){return h(Pl,M(function(r,n,t){return a(z,n,t)}),D,e)},a3=v(function(e,r){return{$:3,a:e,b:r}}),t3=v(function(e,r){return{$:2,a:e,b:r}}),i3=v(function(e,r){return{$:0,a:e,b:r}}),o3=v(function(e,r){return{$:1,a:e,b:r}}),St=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Wl=P(St,0/255,0/255,0/255,1),Ei=function(e){return{$:6,a:e}},l3=Ei(0),Bi=function(e){return{$:2,a:e}},c3={$:6},ef=Bi(c3),rf=M(function(e,r,n){if(r.$===1)return r.a,P(ur,Qt,bn("label"),e,rr($([n])));var t=r.a,i=r.b,o=r.c,l=P(ur,xr,ea,i,rr($([o])));switch(t){case 2:return P(ur,Qt,bn("label"),a(z,br(d.ci),e),rr($([l,n])));case 3:return P(ur,Qt,bn("label"),a(z,br(d.ci),e),rr($([n,l])));case 0:return P(ur,Xo,bn("label"),a(z,br(d.ci),e),rr($([n,l])));default:return P(ur,Xo,bn("label"),a(z,br(d.ci),e),rr($([l,n])))}}),Zo=Wa,fn=Ai(1),nf="Enter",u3=function(e){return{$:5,a:e}},af=function(e){if(e.$===1){var r=e.a;return Bi(u3(r))}else return Xn},tf=function(e){return e.$===1},$3=function(e){return{$:0,a:e}},Ol=p$,v3=v(function(e,r){return a(Ol,e,$3(r))}),of=function(e){return a(v3,"click",cr(e))},f3=Ws,m3=function(e){return{$:2,a:e}},s3=v(function(e,r){return a(Ol,e,m3(r))}),lf=function(e){var r=function(t){var i=e(t);if(i.$===1)return f3("No key matched");var o=i.a;return cr(o)},n=a(Q,r,a(K,"key",ya));return Ie(a(s3,"keydown",a($i,function(t){return L(t,!0)},n)))},d3=xe(21),Gn=a(Dn,d3,d.gf),cf=" ",uf=function(e){return a(Br,"tabIndex",k(e))},p3=a(yt,Ie,uf),g3=v(function(e,r){var n=r.em,t=r.gM,i=r.f6,o=r.bI,l=Y($([tf(n)?Xn:Cn(6),Ie(of(o(!i))),ef,lf(function(c){return he(c,nf)||he(c,cf)?X(o(!i)):J}),p3(0),Gn,l3,le(be)]),e);return h(rf,a(z,Ie(a(Zo,"role","checkbox")),a(z,Ie(a(Zo,"aria-checked",i?"true":"false")),a(z,af(n),l))),n,P(ur,xr,ea,$([fn,ye(be),le(dr)]),rr($([t(i)]))))}),h3=M(function(e,r,n){return Y(a(it,e-jn(n),Di(r)),n)}),bi=fs,$f=function(e){var r=function(n){return n<10?k(n):Di(iv(87+n))};return e<16?r(e):Y($f(e/16|0),r(a(bi,16,e)))},b3=a(Ke,$f,a(h3,2,"0")),ql=function(e){var r=e.a,n=e.b,t=e.c,i=e.d;return{fI:i,fS:t,gA:n,hu:r}},_3=function(e){var r=ql(e),n=r.hu,t=r.gA,i=r.fS;return a(ce,"",a(z,"#",a(ae,a(Ke,Be,b3),$([n*255,t*255,i*255]))))},Jl=xe(12),vf=a(Dn,Jl,d.h$),Qo=Ei(1),qr=ms,el=function(e){return e*qr/180},x3=function(e){return{$:1,a:e}},Yl=v(function(e,r){return{$:10,a:e,b:r}}),w3=xe(26),y3=function(e){return a(Yl,w3,x3(-e))},sa=M(function(e,r,n){return P(nn,e,r,n,1)}),S3=nn,C3=v(function(e,r){return{$:4,a:e,b:r}}),L3=xe(24),P3=function(e){return a(Yl,L3,a(C3,U(0,0,1),e))},z3=xe(17),Wn=function(e){return a(Ce,z3,h($r,"br-"+k(e),"border-radius",k(e)+"px"))},M3=function(e){return ga($([e.ej?"box-inset":"box-",Ve(e.eV.a)+"px",Ve(e.eV.b)+"px",Ve(e.a2)+"px",Ve(e.bi)+"px",Ca(e.b6)]))},T3=xe(19),k3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return a(Ce,T3,h($r,M3(r),"box-shadow",Go(r)))},wu=v(function(e,r){return{$:12,a:e,b:r}}),yu=xe(0),D3=function(e){return e?a(Ce,yu,a(wu,"transparent",1)):a(Ce,yu,a(wu,"visible",0))},io=h(sa,1,1,1),Xl=Ye(function(e,r,n,t,i){return{$:6,a:e,b:r,c:n,d:t,e:i}}),Vi=function(e){return a(Ce,Fi,F(Xl,"b-"+k(e),e,e,e,e))},F3=v(function(e,r){return a(Ce,Fi,F(Xl,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),Ct=function(e){var r=e.b2,n=e.cH,t=e.g4,i=e.hx;return he(n,r)&&he(t,i)?he(n,i)?Vi(n):a(F3,t,n):a(Ce,Fi,F(Xl,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(t))))))),n,i,r,t))},A3=function(e){return a(Le,$([br("focusable"),le(De(14)),ye(De(14)),Ln(io),fn,ra(9),vf,Wn(3),Sn(e?h(sa,59/255,153/255,252/255):h(sa,211/255,211/255,211/255)),k3({a2:1,b6:e?P(S3,238/255,238/255,238/255,0):h(sa,238/255,238/255,238/255),eV:L(0,0),bi:1}),ln(e?h(sa,59/255,153/255,252/255):io),Vi(e?0:1),No(a(Le,$([Sn(io),ye(De(6)),le(De(9)),P3(el(-45)),Qo,fn,y3(1),D3(!e),Ct({b2:2,g4:2,hx:0,cH:0})]),qe))]),qe)},I3=kr("htmlFor"),E3=v(function(e,r){if(r.$)return J;var n=r.a;return e(n)}),_i=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return e(n)}}),ff=ee(function(e,r,n,t){return{gR:r,g8:e,hf:n,hW:t}}),B3=rp,V3=js,R3=v(function(e,r){if(r.$)return tr(e);var n=r.a;return Ge(n)}),U3=ep,j3=function(e){return a(U3,{f2:!1,hb:!1},e)},Ri=function(e){if(e.b){var r=e.a;return e.b,X(r)}else return J},N3=v(function(e,r){if(r.$){var t=r.a;return tr(t)}else{var n=r.a;return Ge(e(n))}}),H3=function(e){return{$:2,a:e}},G3=function(e){return{$:0,a:e}},W3=function(e){return{$:1,a:e}},oo=v(function(e,r){return Or(r)-Or(e)}),lo=M(function(e,r,n){var t=Or(n);return _e(Or(e),t)<1&&_e(t,Or(r))<1}),O3=v(function(e,r){var n=function(i){return _e(i,e)<0?Ge(i):tr(W3(r))},t=h(lo,"0","9",r)?Ge(a(oo,"0",r)):h(lo,"a","z",r)?Ge(10+a(oo,"a",r)):h(lo,"A","Z",r)?Ge(10+a(oo,"A",r)):tr(G3(r));return a(_i,n,t)}),mf=v(function(e,r){var n=ka(r);if(n.$===1)return Ge(0);var t=n.a,i=t.a,o=t.b;return a(_i,function(l){return a(_i,function(c){return Ge(l+c*e)},a(mf,e,o))},a(O3,e,i))}),q3=v(function(e,r){return 2<=e&&e<=36?a(mf,e,Ro(r)):tr(H3(e))}),J3=q3(16),Y3=M(function(e,r,n){return P(St,e,r,n,1)}),X3=ee(function(e,r,n,t){return P(St,e,r,n,t)}),Lt=vs,K3=v(function(e,r){var n=a(Lt,10,e);return Be(r*n)/n}),Z3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var t=tv(n);if(t.b&&!t.b.b){var i=t.a;return V3($([i,i]))}else return n};return a(Ke,Zt,a(Ke,function(n){return a(Ue,function(t){return h(B3,1,t,n)},j3(e))},a(Ke,E3(Ri),a(Ke,Ue(function(n){return n.hW}),a(Ke,Ue(vn(Er)),a(Ke,R3("Parsing hex regex failed"),_i(function(n){var t=a(ae,a(Ke,r,a(Ke,J3,N3(Ha))),n);e:for(;;)if(t.b&&!t.a.$&&t.b.b&&!t.b.a.$&&t.b.b.b&&!t.b.b.a.$)if(t.b.b.b.b)if(!t.b.b.b.a.$&&!t.b.b.b.b.b){var i=t.a.a,o=t.b,l=o.a.a,c=o.b,u=c.a.a,f=c.b,m=f.a.a;return Ge(P(X3,i/255,l/255,u/255,a(K3,2,m/255)))}else break e;else{var i=t.a.a,p=t.b,l=p.a.a,b=p.b,u=b.a.a;return Ge(h(Y3,i/255,l/255,u/255))}else break e;return tr("Parsing ints from hex failed")})))))))}(),Q3=kr("id"),eb=dn("input"),rb=dn("label"),sf=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),nb=sf(0),ab=kr("name"),tb=function(e){return L(e,!0)},ib=function(e){return{$:1,a:e}},ob=v(function(e,r){return a(Ol,e,ib(r))}),lb=v(function(e,r){return h(er,K,r,e)}),cb=a(lb,$(["target","value"]),ya),df=function(e){return a(ob,"input",a($i,tb,a($i,e,cb)))},ub=a(Dn,Jl,d.h4),pf=a(Dn,Jl,d.h8),Kl=function(e){return a(sv,5,e)},Zl=function(e){return a(Ce,Iv,a(kv,h(je,Bv,"ff-",e),e))},$b=h(Vr,195,195,195),gf=h(Vr,69,69,69),vb=sf(2),fb={$:2},Ql=fb,mb=xe(32),sb=xe(31),Su=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},db=v(function(e,r){return a(Ae,r,h(er,v(function(n,t){if(t.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return X(L(i,l))}else return J;else{var i=t.a;return X(i)}}),J,e))}),Cu=function(e){return h(er,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return X(i)}else return J;else{var t=n.a;return X(t)}}),J,e)},pb=xe(33),gb=kr("max"),hb=kr("min"),bb=v(function(e,r){return a(Ce,Yv,h(Jv,a(Xv,e,r),e,r))}),_b=function(e){return a(kr,"step",e)},hf=kr("type"),bf=kr("value"),La=Ov,xb=Dd,_f=v(function(e,r){switch(r.$){case 0:return Xn;case 2:var n=r.a;return Bi(n);case 6:var t=r.a;return Ei(t);case 5:var i=r.a;return Ai(i);case 7:var t=r.a;return Wv(t);case 8:var t=r.a;return fv(t);case 3:var t=r.a,i=r.b;return a(Dn,t,i);case 4:var o=r.a,l=r.b;return a(Ce,o,l);case 9:var c=r.a,u=r.b;return a(mv,c,a(Uv,e,u));case 1:var f=r.a;return Ie(a(xb,e,f));default:var m=r.a,p=r.b;return a(Yl,m,p)}}),wb=M(function(e,r,n){return a(kn,$([le(be),ye(a(Ae,be,n)),fn]),$([a(Le,$([le(La(Be(e*1e4)))]),qe),a(Le,a(z,fn,a(ae,_f(bt),r)),qe),a(Le,$([le(La(Be(we(1-e)*1e4)))]),qe)]))}),yb=M(function(e,r,n){return a(Mr,$([ye(be),le(a(Ae,be,n)),Qo]),$([a(Le,$([ye(La(Be(we(1-e)*1e4)))]),qe),a(Le,a(z,Qo,a(ae,_f(bt),r)),qe),a(Le,$([ye(La(Be(e*1e4)))]),qe)]))}),xf=v(function(e,r){var n=Cu(e),t=Su(e),i=function(){var C=L(n,t);e:for(;;)if(C.a.$===1){if(C.b.$===1)return C.a,C.b,!1;break e}else if(!C.a.a.$&&!C.b.$)switch(C.b.a.$){case 0:var w=C.a.a.a,T=C.b.a.a;return _e(T,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),l=r.ic,c=l,u=Su(c),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var C=u.a.a;return k(C)+"px"}(),m=Cu(c),p=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var C=m.a.a;return k(C)+"px"}(),b="thmb-"+(p+("-"+f)),s=$([a(ue,"width",p),a(ue,"height",f)]),x=a(db,e,L(5,5)),_=x.a,S=x.b;return h(rf,$([tf(r.em)?Xn:a(bb,_,S),ef,le(function(){if(n.$===1)return be;if(n.a.$){var C=n.a;return C}else return dr}()),ye(function(){if(t.$===1)return dr;if(t.a.$){var C=t.a;return C}else return dr}())]),r.em,a(kn,$([le(a(Ae,be,n)),ye(a(Ae,De(20),t))]),$([P(ur,xr,bn("input"),$([af(r.em),a(Ce,mb,a(Za,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),a(Ce,pb,a(Za,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),a(Ce,sb,a(Za,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ie(Lr(b+" ui-slide-bar focusable-parent")),Ie(df(function(C){var w=av(C);if(w.$===1)return r.bI(0);var T=w.a;return r.bI(T)})),Ie(hf("range")),Ie(_b(function(){var C=r.cE;if(C.$===1)return"any";var w=C.a;return ve(w)}())),Ie(hb(ve(r.cr))),Ie(gb(ve(r.cq))),Ie(bf(ve(r.cI))),i?Ie(a(Zo,"orient","vertical")):Xn,le(i?a(Ae,De(20),t):a(Ae,be,n)),ye(i?a(Ae,be,n):a(Ae,De(20),t))]),rr(D)),a(Le,a(z,le(a(Ae,be,n)),a(z,ye(a(Ae,De(20),t)),Y(e,$([Kl(i?h(yb,o,a(z,br("focusable-thumb"),c),n):h(wb,o,a(z,br("focusable-thumb"),c),t))])))),qe)])))}),Sb=h(sa,.5,.5,.5),wf=Er,Lu=function(e){var r=e.c2,n=e.cI,t=e.cr,i=e.cq,o=e.cE,l=e.bI;return a(Le,$([le(be)]),a(xf,$([Cn(2),Kl(a(Le,$([le(be),ye(De(16)),fn,ln(gf),Wn(4)]),qe))]),{em:a(vb,D,a(kn,$([le(be)]),$([a(Le,$([ub]),Pn(r)),a(Le,$([le(be),pf,Zl($([Ql]))]),Pn(ve(n)))]))),cq:i,cr:t,bI:l,cE:X(o),ic:wf($([le(De(12)),ye(De(12)),Wn(4),Vi(0),Sn(Sb),ln($b)])),cI:n}))},Cb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Lb=v(function(e,r){switch(r.$){case 3:var l=r.a;return a(g3,D,{f6:l,gM:A3,em:a(nb,D,Pn(e)),bI:a3(e)});case 0:var n=r.a,i=n.a,o=n.b,l=r.b;return Lu({c2:e,cq:o,cr:i,bI:i3(e),cE:.001*(o-i),cI:l});case 1:var t=r.a,i=t.a,o=t.b,l=r.b;return Lu({c2:e,cq:o,cr:i,bI:a(Ke,Be,o3(e)),cE:1,cI:l});default:var l=r.a;return a(Le,$([le(be)]),_n(a(Sa,D,$([a(Sa,$([a(hr,"margin-bottom","6px")]),$([a(rb,$([I3(e)]),$([jl(e)]))])),a(eb,$([hf("color"),a(hr,"width","100%"),a(hr,"height","26px"),a(hr,"padding","0px"),Q3(e),ab(e),df(function(c){return a(t3,e,a(Cb,Wl,Z3(c)))}),bf(_3(l))]),D)]))))}}),rl=h(Vr,255,255,255),Pb=function(e){return a(Mr,$([le(be),Cn(8),a(Qv,0,14),Ct({b2:1,g4:0,hx:0,cH:0}),Sn(Ii)]),$([a(Le,$([ra(16),Gl,Ln(rl)]),Pn(e.hc)),a(Mr,$([le(be),Cn(6)]),n3(a(Ko,Lb,e.aN)))]))},zb=function(e){return a(Mr,$([le(be),ye(be),Ln(Hl),ra(12),e3,Zv]),a(ae,Pb,e))},Mb=Qh(zb),Tb=function(e){return a(Mr,$([le(be),ye(be)]),$([a(kn,$([Cn(14),le(be)]),D),a(Nl,Yh,Mb(Qn(e).gb))]))},kb=function(e){return{$:6,a:e}},Db=ee(function(e,r,n,t){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(t)))))))}),Fb=function(e){var r=e.cH,n=e.hx,t=e.b2,i=e.g4;if(he(r,n)&&he(r,t)&&he(r,i)){var o=r;return a(Ce,mt,F(ft,"p-"+k(r),o,o,o,o))}else return a(Ce,mt,F(ft,P(Db,r,n,t,i),r,n,t,i))},Ab=function(e){return{$:0,a:e}},Ib=function(e){return{$:1,a:e}},Eb=Ib,Bb=function(e){var r=e.b.X;return Yn(r)},xi=h(Vr,255,60,0),Vb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return Yn(r)+1+Yn(n)},Rb=function(e){var r=L(Bb(e),Vb(e)-1),n=r.a,t=r.b;return a(Le,$([le(be),fn]),a(xf,$([Kl(a(kn,$([le(be),ye(De(4)),fn,ln(gf),Wn(2)]),$([a(Le,$([le(La(n)),ye(be),ln(xi),Wn(2)]),qe),a(Le,$([le(La(t-n))]),qe)])))]),{em:Eb(""),cq:t,cr:0,bI:a(Ke,Be,Ab),cE:X(1),ic:wf($([le(De(12)),ye(De(12)),Wn(6),ln(xi)])),cI:n}))},Ub=Ei(2),ei=h(Vr,220,220,220),jb=function(e){var r=e.a,n=function(){return r.$?$([Ln(ei)]):$([Ln(xi)])}();return a(Le,Y(n,$([ra(14),Ub,pf,Zl($([Ql]))])),Pn(a(uv,3,Qn(e).d1)))},Nb=function(e){e.a;var r=e.b.X;return a(Ue,function(n){return Be(60/(Qn(e).d1-n))},a(Ue,a(Ke,q$,function(n){return n.d1}),Ri(a(Q$,59,r))))},Hb=function(e){var r=Nb(e);if(r.$===1)return qe;var n=r.a;return a(Le,$([ra(14),Ln(Hl),Zl($([Ql]))]),Pn(k(n)+" FPS"))},Pu={$:1},Gb={$:3},Wb={$:2},Ob={$:8},qb=v$,Jb=v(function(e,r){return a(_l,e,qb(r))}),Yb=Jb("disabled"),Xb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},Kb=function(e){return a(xt,Xb,e)?Xn:br("focusable")},wi=a(yt,Ie,of),yf=v(function(e,r){var n=r.eW,t=r.em;return P(ur,xr,ea,a(z,le(dr),a(z,ye(dr),a(z,br(d.ca+(" "+(d.ax+(" "+(d.hG+(" "+d.eU)))))),a(z,Gn,a(z,Kb(e),a(z,Bi(Ob),a(z,Ie(uf(0)),function(){if(n.$===1)return a(z,Ie(Yb(!0)),e);var i=n.a;return a(z,wi(i),a(z,lf(function(o){return he(o,nf)||he(o,cf)?X(i):J}),e))}()))))))),rr($([t])))}),zu=v(function(e,r){return a(yf,D,{em:a(Le,$([le(De(36)),Hn(3),Ln(r),vf,ra(12),Gl,Sn(r),Vi(1),Wn(4)]),Pn("REC")),eW:X(e)})}),Mu=M(function(e,r,n){return a(yf,D,{em:_n(h(ma,20,n,e)),eW:X(r)})}),Zb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return a(kn,D,$([a(Le,$([le(De(40))]),function(){switch(r.$){case 0:return a(zu,Pu,xi);case 1:return a(zu,Wb,ei);default:return qe}}()),a(Le,$([le(De(28))]),function(){switch(r.$){case 0:return qe;case 1:return hn(n)?qe:h(Mu,Nn.hp,Gb,ei);default:return h(Mu,Nn.ho,Pu,ei)}}())]))},Qb=function(e){return a(Mr,$([le(be)]),$([Rb(e),a(kn,$([le(be),Cn(14),a(Qv,0,6),fn]),$([Zb(e),Hb(e),jb(e)]))]))},e1=function(e){return a(Mr,$([le(be),Cn(14),Fb({b2:20,g4:0,hx:0,cH:0}),Ct({b2:1,g4:0,hx:0,cH:0}),Sn(Ii)]),$([a(Le,$([ra(16),Gl,Ln(Hl)]),Pn("Time Travel")),a(Nl,kb,Qb(e))]))},r1=v(function(e,r){return a(Mr,$([Qn(r).dC.im>600?ln(qh):ln(Jh),Ct({b2:0,g4:0,hx:1,cH:0}),Sn(Ii),le(De(ba.c3)),ye(be)]),$([function(){return e?qe:a(Mr,$([le(be),ye(be),Hn(14),Cn(14)]),$([e1(r),Tb(r)]))}()]))}),n1=function(e){return{$:3,a:e}},Tu=Ai(2),a1=h(Vr,232,78,50),t1=h(Vr,48,48,48),i1=function(e){return a(kr,"href",kd(e))},o1=Br("rel"),l1=kr("target"),ku=v(function(e,r){var n=r.fn,t=r.em;return P(ur,xr,bn("a"),a(z,Ie(i1(n)),a(z,Ie(o1("noopener noreferrer")),a(z,Ie(l1("_blank")),a(z,le(dr),a(z,ye(dr),a(z,br(d.ca+(" "+(d.ax+(" "+d.et)))),e)))))),rr($([t])))}),Oa=kr("title"),c1=h(Vr,31,161,242),u1=function(e){var r=M(function(o,l,c){var u=he(l,e)?rl:t1;return a(Le,$([en(Oa(o)),wi(n1(l)),Gn,Hn(7)]),_n(h(ma,40,u,c)))}),n=a(Mr,$([Nv]),$([h(r,"Configurations",0,Nn.hN)])),t=a(Mr,D,$([a(ku,$([en(Oa("Twitter")),Tu,Gn,Hn(7)]),{em:_n(h(ma,40,c1,Nn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),a(ku,$([en(Oa("Source Code")),Tu,Gn,Hn(7)]),{em:_n(h(ma,40,a1,Nn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=a(Le,$([le(De(ba.bE)),Hn(4),wi(jv),Ct({b2:1,g4:0,hx:0,cH:0}),Sn(Ii),Gn,en(Oa("Activate Distraction Free Mode"))]),_n(h(ma,46,rl,Nn.fx)));return a(Mr,$([le(De(ba.bE)),ye(be),Zv,ln(Hv)]),$([i,n,t]))},$1=function(e){var r=a(Le,$([le(De(ba.bE)),Nv,Hn(4),wi(jv),Gn,en(Oa("Deactivate Distraction Free Mode (A)"))]),_n(h(ma,46,Hv,Nn.fx)));return e.bw?r:a(kn,$([le(De(ba.bE+ba.c3)),ye(be)]),$([u1(e.bp),a(r1,e.bp,e.R)]))},v1=M(function(e,r,n){var t=g0(n.R),i=Qn(n.R);return h(Dh,{hl:$([b0({fO:J,fW:J,hH:J})])},$([le(De(at(i.dC.im))),ye(De(at(i.dC.gH))),en(a(hr,"-webkit-font-smoothing","antialiased")),en(a(hr,"pointer-events","none")),en(a(hr,"touch-action","none")),en(a(hr,"user-select","none")),No(a(Nl,d0,a(r,i,t))),No($1(n))]),_n(a(Fh,di(p0),a(e,i,t))))}),f1=wr(function(e,r,n,t,i,o){var l=v(function(u,f){return L(P(u0,r,o,u,f),Qc)}),c=function(u){var f=a(Y$,n,u.gY);return L({bp:0,bw:!0,R:a($0,f,t),dN:0},Qc)};return Tg({gS:c,hX:s0,ii:l,ik:a(v1,e,i)})}),m1=ee(function(e,r,n,t){return ar(f1,e,r,n,t,v(function(i,o){return qe}),M(function(i,o,l){return l}))}),s1=function(e){return{}},d1=v(function(e,r){return L(e,rv(r))}),p1=M(function(e,r,n){return{aN:n,g0:r,hc:e}}),g1=function(e){return h(je,v(function(r,n){var t=r.a,i=r.b;return h(pa,t,i,n)}),Bl,e)},h1=M(function(e,r,n){return h(p1,e,r,g1(n))}),co=h1,Nt=M(function(e,r,n){var t=r.a,i=r.b;return L(e,a(nv,L(t,i),n))}),b1=ee(function(e,r,n,t){var i=U(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,f=c*2-u,m=function(x){var _=x<0?x+1:x>1?x-1:x;return _*6<1?f+(u-f)*_*6:_*2<1?u:_*3<2?f+(u-f)*(2/3-_)*6:f},p=m(o-1/3),b=m(o),s=m(o+1/3);return P(St,s,b,p,t)}),_1=M(function(e,r,n){return P(b1,e,r,n,1)}),x1=$([h(co,"Camera",!0,$([h(Nt,"camera distance",L(3,8),4),h(Nt,"camera azimuth",L(0,2*qr),0),h(Nt,"camera elevation",L(-qr/2,qr/2),.5)])),h(co,"Color",!0,$([a(d1,"cube color",h(_1,0,.36,.5))])),h(co,"Time",!0,$([h(Nt,"period",L(.1,5),1)]))]),w1=v(function(e,r){return r}),y1=v(function(e,r){return a(Ue,function(n){if(n.$)return 0;var t=n.b;return t},a(wt,e,r.aN))}),S1=v(function(e,r){return a(Ae,0,Ri(a(vn,y1(e),r)))}),C1=v(function(e,r){return a(S1,e,r.gb)}),ri=C1,Pa=function(e){return e},qa=function(e){return Pa(qr*(e/180))},L1=function(e){return e},wn=function(e){return e},nl=function(e){var r=e;return-r},P1=v(function(e,r){var n=e,t=r;return{io:n.is*t.dU-n.dU*t.is,is:n.dU*t.io-n.io*t.dU,dU:n.io*t.is-n.is*t.io}}),Sf=function(e){var r=e;return r.dS},Cf=function(e){var r=e;return r.dT},z1=function(e){return a(P1,Sf(e),Cf(e))},na=function(e){var r=e;return r.dl},Kn=ss,za=ds,uo=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Kn(l),u=za(l),f=t.gm,m=f,p=m.io*u,b=c*p,s=p*p,x=m.is*u,_=c*x,S=p*x,C=x*x,w=1-2*(s+C),T=m.dU*u,G=c*T,Z=2*(S-G),ne=2*(S+G),te=p*T,ie=2*(te+_),re=2*(te-_),q=x*T,de=2*(q-b),pe=2*(q+b),Me=T*T,Se=1-2*(C+Me),me=1-2*(s+Me);return{io:Se*o.io+Z*o.is+ie*o.dU,is:ne*o.io+me*o.is+de*o.dU,dU:re*o.io+pe*o.is+w*o.dU}}),M1=M(function(e,r,n){var t=e,i=r,o=n,l=.5*i,c=Kn(l),u=za(l),f=t.dl,m=f,p=o.io-m.io,b=o.is-m.is,s=o.dU-m.dU,x=t.gm,_=x,S=_.io*u,C=c*S,w=S*S,T=_.is*u,G=c*T,Z=S*T,ne=T*T,te=1-2*(w+ne),ie=_.dU*u,re=c*ie,q=2*(Z-re),de=2*(Z+re),pe=S*ie,Me=2*(pe+G),Se=2*(pe-G),me=T*ie,Te=2*(me-C),I=2*(me+C),E=ie*ie,B=1-2*(ne+E),V=1-2*(w+E);return{io:m.io+B*p+q*b+Me*s,is:m.is+de*p+V*b+Te*s,dU:m.dU+Se*p+I*b+te*s}}),mn=function(e){return e},Fn=function(e){var r=e;return r.dS},An=function(e){var r=e;return r.dT},In=function(e){var r=e;return r.dV},T1=M(function(e,r,n){return mn({dl:h(M1,e,r,na(n)),dS:h(uo,e,r,Fn(n)),dT:h(uo,e,r,An(n)),dV:h(uo,e,r,In(n))})}),Du=M(function(e,r,n){return h(T1,e(n),r,n)}),ec=function(e){var r=e;return r.gm},Pt=v(function(e,r){var n=e,t=r;return{io:t.io+n.io,is:t.is+n.is,dU:t.dU+n.dU}}),Lf=v(function(e,r){return mn({dl:a(Pt,e,na(r)),dS:Fn(r),dT:An(r),dV:In(r)})}),k1=v(function(e,r){var n=e,t=r;return{io:n*t.io,is:n*t.is,dU:n*t.dU}}),D1=M(function(e,r,n){return a(Lf,a(k1,r,e),n)}),F1=M(function(e,r,n){return h(D1,ec(e(n)),r,n)}),zt=v(function(e,r){return{gm:r,dl:e}}),A1=function(e){var r=e;return a(zt,r.dl,r.dS)},I1=function(e){var r=e;return a(zt,r.dl,r.dT)},E1=function(e){var r=e;return a(zt,r.dl,r.dV)},B1=function(e){var r=mn({dl:e.ba,dS:Cf(e.ed),dT:z1(e.ed),dV:Sf(e.ed)}),n=h(F1,E1,e.cY,h(Du,A1,nl(e.cc),h(Du,I1,e.b$,r)));return n},V1=function(e){return{$:0,a:e}},Je=function(e){var r=e;return we(r)},ni=function(e){var r=e;return .5*r},R1=ps,U1=function(e){var r=e;return R1(r)},j1=function(e){var r=ni(Je(e.fq)),n=U1(r);return{dw:V1(n),dM:e.dM}},Qr={io:0,is:0,dU:0},Pf=Er,cn=function(e){return e},zf=cn({io:1,is:0,dU:0}),rc=zf,nc=cn({io:0,is:0,dU:1}),ac=nc,N1=Pf({dl:Qr,dS:ac,dT:rc}),H1=function(e){var r=e.ba,n=e.b$,t=e.cc,i=e.cY;return j1({fq:qa(40),dM:B1({b$:Pa(n),cY:wn(i),cc:Pa(t),ba:L1(r),ed:N1})})},G1=function(e){return H1({b$:a(ri,"camera azimuth",e),cY:a(ri,"camera distance",e),cc:a(ri,"camera elevation",e),ba:{io:0,is:0,dU:0}})},tc=v(function(e,r){return{$:0,a:e,b:r}}),Mf=v(function(e,r){return{$:2,a:e,b:r}}),Tf=function(e){return{$:5,a:e}},kf=v(function(e,r){return{$:4,a:e,b:r}}),Df=v(function(e,r){return{$:3,a:e,b:r}}),Ff=v(function(e,r){return{$:1,a:e,b:r}}),W1=M(function(e,r,n){return{io:e,is:r,dU:n}}),O1=function(e){var r=e;return r},ic=function(e){var r=e;return O1(r.fN)},oc=function(e){var r=e;return r.a4},q1=v(function(e,r){return{fN:a(Lf,e,ic(r)),a4:oc(r)}}),J1=v(function(e,r){var n=r;return a(zt,a(Pt,e,n.dl),n.gm)}),Y1=v(function(e,r){var n=r;return{m:a(J1,e,n.m),g5:n.g5,hs:n.hs}}),lc=function(e){var r=e;return r},X1=function(e){return e},Af=v(function(e,r){var n=lc(r),t=n.a,i=n.b;return X1(L(e(t),e(i)))}),K1=v(function(e,r){return a(Af,Pt(e),r)}),cc=function(e){var r=e;return r.f4},uc=function(e){var r=e;return r.hs},If=v(function(e,r){return{f4:r,hs:Je(e)}}),Z1=v(function(e,r){return a(If,uc(r),a(Pt,e,cc(r)))}),Ef=v(function(e,r){var n=r,t=n.a,i=n.b,o=n.c;return U(e(t),e(i),e(o))}),Q1=v(function(e,r){return a(Ef,Pt(e),r)}),Bf=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=h(W1,n,t,i);switch(r.$){case 0:var m=r.a,l=r.b;return a(tc,m,a(q1,o,l));case 1:var m=r.a,c=r.b;return a(Ff,m,a(Q1,o,c));case 3:var m=r.a,u=r.b;return a(Df,m,a(Z1,o,u));case 2:var m=r.a,f=r.b;return a(Mf,m,a(Y1,o,f));case 4:var m=r.a,p=r.b;return a(kf,m,a(K1,o,p));default:var b=r.a;return Tf(a(ae,Bf(U(n,t,i)),b))}}),Fu=function(e){return Bf(U(e,0,0))},$o=function(e){return e/255},e_=M(function(e,r,n){return P(St,$o(e),$o(r),$o(n),1)}),r_=function(e){return e},n_=function(e){return wn(.01*e)},Au=function(e){return e},a_=function(e){return e},t_=function(e){return{$:0,a:e}},i_=t_,o_={$:3},l_=o_,c_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),u_=c_,$_=function(e){return{$:1,a:e}},v_=$_,f_=function(e){return a(Br,"height",k(e))},m_=zv,s_=function(e){return{$:2,a:e}},d_=s_,p_=function(e){var r=e.a,n=e.b,t=e.c,i=e.d,o=function(c){return Be(c*1e3)/1e3},l=function(c){return Be(c*1e4)/100};return ga($(["rgba(",ve(l(r)),"%,",ve(l(n)),"%,",ve(l(t)),"%,",ve(o(i)),")"]))},g_=v(function(e,r){switch(r.$){case 0:return a(zp,e,r);case 1:return a(Mp,e,r);case 2:return a(Tp,e,r);case 3:return a(kp,e,r);case 4:return a(Dp,e,r);default:return a(Fp,e,r)}}),h_=v(function(e,r){switch(r.$){case 0:return a(tp,e,r);case 1:return a(ip,e,r);case 2:return a(op,e,r);case 3:return a(lp,e,r);case 4:return a(cp,e,r);case 5:return a(up,e,r);case 6:return a($p,e,r);case 7:return a(vp,e,r);default:return fp(e)}}),b_=M(function(e,r,n){return h(Pp,e,r,n)}),Iu=function(e){var r=e;return r},Fa=Gp,vo=P(Fa,1,1,1,1),Ur=M(function(e,r,n){return a(ae,function(t){return a(t,r,n)},e)}),__=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),x_=v(function(e,r){var n=e,t=r.io,i=r.is;return h(__,n*t/i,n,n*(1-t-i)/i)}),Mt=Vp,w_=function(e){var r=e.a,n=e.b,t=e.c;return h(Mt,3.2406*r-1.5372*n-.4986*t,-.9689*r+1.8758*n+.0415*t,.0557*r-.204*n+1.057*t)},$c=v(function(e,r){return w_(a(x_,e,r))}),Vf=v(function(e,r){return{ek:he(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),Gr=Xp,y_=function(e){return Gr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},fo=Ye(function(e,r,n,t,i){var o=t.ek?1:-1,l=P(Fa,t.cC,t.cC,t.cC,o);return ar(i,e,l,y_(t),t.ek,r,n)}),Rf=wr(function(e,r,n,t,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,f=r,m=n,p=a(Vf,l,t),b=c,s=o;e=u,r=f,n=m,t=p,i=b,o=s;continue e;case 1:var x=i.b,_=a(z,F(fo,e,r,n,t,x),o.P);return{P:_,_:o._,hI:o.hI};case 3:var S=i.b,C=a(z,F(fo,e,r,n,t,S),o._);return{P:o.P,_:C,hI:o.hI};case 2:var w=i.a,T=a(z,F(fo,e,r,n,t,w),o.hI);return{P:o.P,_:o._,hI:T};default:var G=i.a;return h(je,P(Rf,e,r,n,t),o,G)}}),S_=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),Uf=S_,vc=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),C_=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(vc,518,r,n,t)},L_=v(function(e,r){return{$:6,a:e,b:r}}),P_=L_,jf=$([C_({ab:1,ac:0,ai:!1}),P(Uf,!1,!1,!1,!1),a(P_,0,1)]),Ma=519,fc=8,Nf=15,_a=7681,z_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ee=ap,M_=v(function(e,r){return{$:0,a:e,b:r}}),T_=M_({d5:1,ei:0,eS:5}),gr=Ep,k_=T_($([{cx:a(gr,-1,-1)},{cx:a(gr,1,-1)},{cx:a(gr,-1,1)},{cx:a(gr,1,1)}])),D_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},F_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f,k:m}}}}}}}}}}}},mc=M(function(e,r,n){var t=e.dx,i=e.dc,o=e.dR,l=v(function(f,m){var p=f;return m(p)}),c=v(function(f,m){var p=f;return m(p)}),u=function(f){return a(Ke,l(f.bO),a(Ke,c(f.bz),a(Ke,c(f.bX),c(f.bY))))};return a(u,n,a(u,r,h(F_,t,i,o)))}),sc=function(e){return h(mc,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},dc=function(e){return F(Ee,$([sc(e),P(Uf,!1,!1,!1,!1)]),D_,z_,k_,{})},A_=dc({bz:_a,dc:0,dx:fc,bO:Ma,dR:Nf,bX:_a,bY:_a}),I_=516,Eu=5386,ir=7680,E_=function(e){return a(Lt,2,e+4)},Hf=function(e){return dc({bz:ir,dc:Nf,dx:fc,bO:I_,dR:E_(e),bX:Eu,bY:Eu})},B_=M(function(e,r,n){return sr($([h(Ur,e,n,jf),$([Hf(r),A_])]))}),V_=v(function(e,r){return sr(a(U$,B_(e),r))}),R_=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(vc,513,r,n,t)},U_=R_({ab:1,ac:0,ai:!0}),j_=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:t,e:i,f:o,g:l,h:c,i:u,j:f}}}}}}}}}}},N_=function(e){var r=e.cz,n=e.cf,t=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function(u,f){var m=u.a,p=u.b,b=u.c,s=f.a,x=f.b,_=f.c;return j_(m)(p)(b)(s)(x)(_)(r)(n)(t)(i)});return a(c,o,l)},H_=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Bu=v(function(e,r){var n=e,t=r;return h(H_,32774,n,t)}),G_=1,Vu=771,W_=770,pc=N_({bZ:0,fI:a(Bu,G_,Vu),b0:0,b6:a(Bu,W_,Vu),cf:0,cz:0}),ia=$([U_,pc]),O_=function(e){var r=e;return r.eL},q_=function(e){var r=e;return r.eM},Gf=function(e){var r=e;return r.eN},J_=function(e){var r=e;return r.eO},Y_=function(e){var r=e;return r.eP},Wf=function(e){var r=e;return r.eQ},un=v(function(e,r){var n=e,t=r;return t-n}),Of=function(e){return U(a(un,J_(e),O_(e)),a(un,Y_(e),q_(e)),a(un,Wf(e),Gf(e)))},Ru=function(e){var r=e;return na(r)},X_=function(e){return e},K_=function(e){return mn({dl:X_({io:e.K,is:e.L,dU:e.M}),dS:cn({io:e.t,is:e.u,dU:e.v}),dT:cn({io:e.w,is:e.x,dU:e.y}),dV:cn({io:e.z,is:e.A,dU:e.B})})},mo=v(function(e,r){var n=e,t=r,i=n.dV,o=i,l=n.dT,c=l,u=n.dS,f=u;return{io:t.io*f.io+t.is*f.is+t.dU*f.dU,is:t.io*c.io+t.is*c.is+t.dU*c.dU,dU:t.io*o.io+t.is*o.is+t.dU*o.dU}}),qf=v(function(e,r){var n=e,t=r,i=n.dl,o=i,l=t.io-o.io,c=t.is-o.is,u=t.dU-o.dU,f=n.dV,m=f,p=n.dT,b=p,s=n.dS,x=s;return{io:l*x.io+c*x.is+u*x.dU,is:l*b.io+c*b.is+u*b.dU,dU:l*m.io+c*m.is+u*m.dU}}),Jf=v(function(e,r){return{dl:a(qf,e,na(r)),dS:a(mo,e,Fn(r)),dT:a(mo,e,An(r)),dV:a(mo,e,In(r))}}),al=M(function(e,r,n){return{io:e,is:r,dU:n}}),yi=function(e){var r=e;return r},He=v(function(e,r){var n=e,t=r;return a(Pr,n,t)}),Oe=v(function(e,r){var n=e,t=r;return a(ha,n,t)}),Z_=v(function(e,r){var n=yi(r),t=yi(e);return{eL:a(He,t.eL,n.eL),eM:a(He,t.eM,n.eM),eN:a(He,t.eN,n.eN),eO:a(Oe,t.eO,n.eO),eP:a(Oe,t.eP,n.eP),eQ:a(Oe,t.eQ,n.eQ)}}),Tr=function(e){var r=e;return r},Q_=function(e){var r=e;return U(r.io,r.is,r.dU)},Qa=v(function(e,r){var n=e,t=r;return t+n}),e2=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=ni(Je(t)),l=ni(Je(n)),c=ni(Je(i)),u=Q_(r),f=u.a,m=u.b,p=u.c;return{eL:a(Qa,l,f),eM:a(Qa,o,m),eN:a(Qa,c,p),eO:a(un,l,f),eP:a(un,o,m),eQ:a(un,c,p)}}),Uu=ee(function(e,r,n,t){var i=n.f4,o=2*n.gF*r,l=2*n.gE*r,c=2*n.gD*r,u=i.dU*r,f=i.is*r,m=i.io*r,p=Tr(In(e)),b=we(c*p.io)+we(l*p.is)+we(o*p.dU),s=Tr(An(e)),x=we(c*s.io)+we(l*s.is)+we(o*s.dU),_=Tr(Fn(e)),S=we(c*_.io)+we(l*_.is)+we(o*_.dU),C=a(e2,U(S,x,b),a(qf,e,h(al,m,f,u)));if(t.$)return X(C);var w=t.a;return X(a(Z_,w,C))}),tl=ee(function(e,r,n,t){e:for(;;)if(t.b){var i=t.a,o=t.b;switch(i.$){case 0:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 1:var l=i.a,c=P(Uu,e,r,l,n),s=e,x=r,_=c,S=o;e=s,r=x,n=_,t=S;continue e;case 2:var s=e,x=r,_=n,S=o;e=s,r=x,n=_,t=S;continue e;case 3:var l=i.a,c=P(Uu,e,r,l,n),s=e,x=r,_=c,S=o;e=s,r=x,n=_,t=S;continue e;case 4:var u=i.a,s=e,x=r,_=P(tl,e,r,n,u),S=o;e=s,r=x,n=_,t=S;continue e;default:var f=i.a,m=i.b,p=a(Jf,K_(f),e),b=r*f.cC,s=e,x=r,_=P(tl,p,b,n,$([m])),S=o;e=s,r=x,n=_,t=S;continue e}}else return n}),Aa=Rp,Ia=Up,Ea=jp,Yf=function(e){return{$:4,a:e}},r2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,t=e.b,i=t,o=a(z,n,r);e=i,r=o;continue e}else return r}),Tt=function(e){return Yf(a(r2,e,D))},n2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},a2=function(e){var r=e;return r},ju=dc({bz:_a,dc:0,dx:fc,bO:Ma,dR:255,bX:_a,bY:_a}),da=ws,an=0,t2=function(e){var r=e,n=a(Pr,we(r.io),a(Pr,we(r.is),we(r.dU)));if(n){var t=r.dU/n,i=r.is/n,o=r.io/n,l=da(o*o+i*i+t*t);return l*n}else return an},lr={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},Sr=v(function(e,r){var n=e,t=r;return Gr({eu:n.io,ev:n.cz,ew:t.io,ex:t.cz,ey:n.is,ez:n.cf,eA:t.is,eB:t.cf,eC:n.dU,eD:n.b0,eE:t.dU,eF:t.b0,eG:n.dJ,eH:n.du,eI:t.dJ,eJ:t.du})}),Ja=L({bF:a(Sr,lr,lr),cm:a(Sr,lr,lr),cn:a(Sr,lr,lr),co:a(Sr,lr,lr)},P(Fa,0,0,0,0)),ke=v(function(e,r){var n=r;return e*n}),Xf=514,Kf=function(e){var r=e.ai,n=e.ac,t=e.ab;return P(vc,515,r,n,t)},Zf=240,i2=$([Kf({ab:1,ac:0,ai:!0}),sc({bz:ir,dc:Zf,dx:0,bO:Xf,dR:0,bX:ir,bY:ir}),pc]),o2=v(function(e,r){var n=e,t=r.hd,i=r.gv,o=r.fM,l=Je(t),c=l,u=Je(i),f=u,m=n.dw;if(m.$){var b=m.a;return Bo(f)?Gr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):Gr({eu:2/(o*b),ev:0,ew:0,ex:0,ey:0,ez:2/b,eA:0,eB:0,eC:0,eD:0,eE:-2/(f-c),eF:-(f+c)/(f-c),eG:0,eH:0,eI:0,eJ:1})}else{var p=m.a;return Bo(f)?Gr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):Gr({eu:1/(o*p),ev:0,ew:0,ex:0,ey:0,ez:1/p,eA:0,eB:0,eC:0,eD:0,eE:-(f+c)/(f-c),eF:-2*f*c/(f-c),eG:0,eH:0,eI:-1,eJ:0})}}),Ht=v(function(e,r){return(1&e>>r)===1?0:1}),l2=function(e){return $([Kf({ab:1,ac:0,ai:!0}),sc({bz:ir,dc:Zf,dx:e,bO:Xf,dR:0,bX:ir,bY:ir}),pc])},c2=M(function(e,r,n){return sr(a(ae,function(t){var i=t<<4,o=P(Fa,a(Ht,t,0),a(Ht,t,1),a(Ht,t,2),a(Ht,t,3));return h(Ur,e,L(r,o),l2(i))},a(on,1,a(Lt,2,n)-1)))}),$n=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},xa=function(e){var r=e;return r},u2=Kp,Nu=function(e){var r=e;return $n(In(r))},Qf=cn({io:0,is:1,dU:0}),em=Qf,$2={dl:Qr,dS:rc,dT:em,dV:ac},Ui=function(e){var r=e;return r},v2=function(e){var r=Ui(na(e)),n=Tr(In(e)),t=Tr(An(e)),i=Tr(Fn(e));return Gr({eu:i.io,ev:t.io,ew:n.io,ex:r.io,ey:i.is,ez:t.is,eA:n.is,eB:r.is,eC:i.dU,eD:t.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},f2=v(function(e,r){var n=r;return v2(a(Jf,n,e))}),m2=function(e){return a(f2,$2,e)},s2=function(e){var r=e;return r.dM},d2=function(e){var r=e;return Fn(r)},p2=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),g2=function(e){var r=e;return An(r)},h2=function(e){var r=s2(e.f0),n=mn({dl:Ru(r),dS:d2(r),dT:g2(r),dV:$n(Nu(r))}),t=Tt(e.a8),i=t,o=P(tl,n,1,J,$([i]));if(o.$===1)return D;var l=o.a,c=m2(r),u=a(ke,.99,a(He,Je(e.a3),nl(Gf(l)))),f=Of(l),m=f.a,p=f.b,b=f.c,s=t2(h(p2,m,p,b)),x=a(ke,1.01,a(Qa,s,nl(Wf(l)))),_=a(o2,e.f0,{fM:e.fM,gv:x,hd:u}),S=u2(_).eJ,C=S?Tr($n(Nu(r))):xa(Ru(r)),w=function(){var me=e.cG;switch(me.$){case 0:return L(0,0);case 1:return L(1,0);case 2:return L(2,0);case 3:var Te=me.a;return L(3,Te);case 4:var Te=me.a;return L(4,Te);default:return L(5,0)}}(),T=w.a,G=w.b,Z=e.cd,ne=Z,te=a($c,ne,e.cK),ie=te,re=Gr({eu:0,ev:C.io,ew:Aa(ie),ex:e.ff,ey:0,ez:C.is,eA:Ia(ie),eB:a2(s),eC:0,eD:C.dU,eE:Ea(ie),eF:T,eG:0,eH:S,eI:0,eJ:G}),q=ar(Rf,re,c,_,n2,i,{P:D,_:D,hI:D}),de=e.cl;switch(de.$){case 0:var pe=de.a;return sr($([h(Ur,q.P,L(pe,vo),ia),h(Ur,q._,Ja,ia)]));case 1:var pe=de.a;return sr($([h(Ur,q.P,Ja,ia),$([ju]),h(Ur,q.hI,pe.bF,jf),$([Hf(0)]),h(Ur,q.P,L(pe,vo),i2),h(Ur,q._,Ja,ia)]));default:var Me=de.a,Se=de.b;return sr($([h(Ur,q.P,L(Se,vo),ia),$([ju]),a(V_,q.hI,Me),h(c2,q.P,Se,Yn(Me)),h(Ur,q._,Ja,ia)]))}},b2=function(e){return a(Br,"width",k(e))},_2=v(function(e,r){var n=$([v_(1),d_(0),i_(!0),P(u_,0,0,0,0)]),t=function(){var T=e.cO;switch(T.$){case 0:return U(n,"0",1);case 1:return U(a(z,l_,n),"1",1);default:var G=T.a;return U(n,"0",G)}}(),i=t.a,o=t.b,l=t.c,c=e.a4,u=c.a,f=c.b,m=Iu(f),p=a(hr,"height",k(m)+"px"),b=Iu(u),s=b/m,x=a(Da,function(T){return h2({fM:s,f0:e.f0,a3:e.a3,a8:T.a8,cd:T.cd,cl:T.cl,ff:l,cG:T.cG,cK:T.cK})},r),_=a(hr,"width",k(b)+"px"),S=e.a1,C=S,w=p_(C);return h(m_,"div",$([a(hr,"padding","0px"),_,p]),$([L(o,h(b_,i,$([b2(Be(b*l)),f_(Be(m*l)),_,p,a(hr,"display","block"),a(hr,"background-color",w)]),x))]))}),x2=function(e){return a(_2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},rm=function(e){return e},Hu=rm({io:.31271,is:.32902}),w2=v(function(e,r){var n=e,t=Tr(r.gm),i=t.io,o=t.is,l=t.dU,c=a($c,r.c0,r.cT),u=c;return{b0:Ea(u),f3:n,cf:Ia(u),du:0,cz:Aa(u),dJ:1,io:-i,is:-o,dU:-l}}),y2=function(e){return e},S2=function(e){return y2(1.2*a(Lt,2,e))},so=function(e){return e},C2={$:0},L2=C2,nm=function(e){return e},P2=v(function(e,r){var n=e,t=r;return _e(t,n)>0}),Gu=function(e){var r=e;return r},z2=function(e){e:for(;;){if(he(e.gZ,an)&&he(e.g_,an))return lr;if(a(P2,Je(e.gZ),Je(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:$n(e.fm)};e=r;continue e}else{var n=we(Gu(e.g_)/qr),t=we(Gu(e.gZ)/qr),i=Tr(e.fm),o=i.io,l=i.is,c=i.dU,u=a($c,nm(1),e.cT),f=u;return{b0:t*Ea(f),f3:!1,cf:t*Ia(f),du:n/t,cz:t*Aa(f),dJ:3,io:o,is:l,dU:c}}}},Wu=function(e){return z2({cT:e.cT,gZ:e.c0,g_:an,fm:e.fm})},am=M(function(e,r,n){return _e(n,e)<0?e:_e(n,r)>0?r:n}),M2=function(e){var r=e;return r},tm=function(e){var r=h(am,1667,25e3,M2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,t=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return rm({io:n,is:t})},im=function(e){return e},T2=tm(im(12e3)),k2=tm(im(5600)),D2=function(e){return{$:2,a:e}},F2=function(e){return D2(e)},A2=v(function(e,r){return{$:2,a:e,b:r}}),om=function(e){return{$:0,a:e}},Gt=function(e){var r=e;return r},I2=function(e){var r=e;return r.f3},E2=om(Ja.a),B2=v(function(e,r){var n=v(function(t,i){var o=i.a,l=i.b;return e(t)?L(a(z,t,o),l):L(o,a(z,t,l))});return h(er,n,L(D,D),r)}),V2=function(e){var r=e;return Gr({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},R2=ze(function(e,r,n,t,i,o,l,c){var u=a(B2,I2,$([Gt(e),Gt(r),Gt(n),Gt(t)])),f=u.a,m=u.b;if(f.b){var p=Y(f,m);if(p.b&&p.b.b&&p.b.b.b&&p.b.b.b.b&&!p.b.b.b.b.b){var b=p.a,s=p.b,x=s.a,_=s.b,S=_.a,C=_.b,w=C.a;return a(A2,a(ae,V2,f),{bF:a(Sr,b,x),cm:a(Sr,S,w),cn:a(Sr,i,o),co:a(Sr,l,c)})}else return E2}else return om({bF:a(Sr,e,r),cm:a(Sr,n,t),cn:a(Sr,i,o),co:a(Sr,l,c)})}),U2=M(function(e,r,n){return pt(R2,e,r,n,lr,lr,lr,lr,lr)}),j2=function(e){var r=a(w2,a_(e.hI),{cT:k2,gm:e.hZ,c0:so(8e4)}),n=Wu({cT:T2,c0:so(2e4),fm:e.fm}),t=Wu({cT:Hu,c0:so(15e3),fm:$n(e.fm)}),i=h(U2,r,n,t);return x2({cO:F2(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:S2(15),cl:i,cG:L2,cK:Hu})},lm=ee(function(e,r,n,t){return{$:2,a:e,b:r,c:n,d:t}}),N2=ee(function(e,r,n,t){return{$:3,a:e,b:r,c:n,d:t}}),cm=ee(function(e,r,n,t){return{$:4,a:e,b:r,c:n,d:t}}),um=ee(function(e,r,n,t){return{$:6,a:e,b:r,c:n,d:t}}),H2=ee(function(e,r,n,t){return{$:7,a:e,b:r,c:n,d:t}}),G2=ee(function(e,r,n,t){return{$:5,a:e,b:r,c:n,d:t}}),W2=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),gc=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return P(W2,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return P(lm,n,r,i,1);case 3:var n=e.a,t=e.b,i=e.c;return P(N2,n,t,i,1);case 4:var n=e.a,t=e.b,i=e.c;return P(cm,n,t,i,1);case 5:var n=e.a,t=e.b,i=e.c;return P(G2,n,t,i,1);case 6:var n=e.a,t=e.b,i=e.c;return P(um,n,t,i,1);case 7:var n=e.a,t=e.b,i=e.c;return P(H2,n,t,i,1);case 8:return e;case 9:return e;default:return e}},hc={$:0},O2=ze(function(e,r,n,t,i,o,l,c){e:for(;;)if(c.b){var u=c.a,f=c.b,m=yi(l(u)),p=a(Oe,m.eO,e),b=a(He,m.eL,r),s=a(Oe,m.eP,n),x=a(He,m.eM,t),_=a(Oe,m.eQ,i),S=a(He,m.eN,o),C=l,w=f;e=p,r=b,n=s,t=x,i=_,o=S,l=C,c=w;continue e}else return{eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i}}),q2=M(function(e,r,n){var t=yi(e(r));return pt(O2,t.eO,t.eL,t.eP,t.eM,t.eQ,t.eN,e,n)}),po=v(function(e,r){var n=e,t=r;return _e(t,n)<1}),$m=function(e){return a(po,e.eL,e.eO)&&a(po,e.eM,e.eP)&&a(po,e.eN,e.eQ)?e:{eL:a(He,e.eO,e.eL),eM:a(He,e.eP,e.eM),eN:a(He,e.eQ,e.eN),eO:a(Oe,e.eO,e.eL),eP:a(Oe,e.eP,e.eM),eQ:a(Oe,e.eQ,e.eN)}},st=function(e){var r=e;return r},On=function(e){var r=e;return r.io},qn=function(e){var r=e;return r.is},Jn=function(e){var r=e;return r.dU},vm=function(e){var r=st(e),n=r.a,t=r.b,i=r.c,o=On(n),l=qn(n),c=Jn(n),u=On(t),f=qn(t),m=Jn(t),p=On(i),b=qn(i),s=Jn(i);return $m({eL:a(He,o,a(He,u,p)),eM:a(He,l,a(He,f,b)),eN:a(He,c,a(He,m,s)),eO:a(Oe,o,a(Oe,u,p)),eP:a(Oe,l,a(Oe,f,b)),eQ:a(Oe,c,a(Oe,m,s))})},fm=Np,vr=function(e){return fm(Ui(e))},mm=function(e){var r=e;return r},ji=function(e){return fm(mm(e))},J2=v(function(e,r){var n=e,t=r;return{io:t.is*n.dU-t.dU*n.is,is:t.dU*n.io-t.io*n.dU,dU:t.io*n.is-t.is*n.io}}),il=v(function(e,r){var n=e,t=r;return{io:t.io-n.io,is:t.is-n.is,dU:t.dU-n.dU}}),Y2={io:0,is:0,dU:0},X2=v(function(e,r){var n=e,t=r,i=a(Pr,we(t.io),a(Pr,we(t.is),we(t.dU)));if(i){var o=t.dU/i,l=t.is/i,c=t.io/i,u=da(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dU:n*o/u}}else return Y2}),K2=X2(nm(1)),sm=M(function(e,r,n){var t=a(il,r,n),i=a(il,e,r);return K2(a(J2,t,i))}),Z2=function(e){var r=st(e),n=r.a,t=r.b,i=r.c,o=ji(h(sm,n,t,i));return U({q:o,cx:vr(n)},{q:o,cx:vr(t)},{q:o,cx:vr(i)})},Q2=v(function(e,r){return{$:2,a:e,b:r}}),dm=Q2({d5:3,ei:0,eS:4}),ex=function(e){if(e.b){var r=e.a,n=e.b,t=dm(a(ae,Z2,e)),i=h(q2,vm,r,n);return P(lm,i,e,t,0)}else return hc},yr=M(function(e,r,n){return U(e,r,n)}),Ze=M(function(e,r,n){var t=e,i=r,o=n;return{io:t,is:i,dU:o}}),pm=function(){var e=wn(1),r=wn(1),n=wn(1),t=a(ke,-.5,e),i=a(ke,-.5,r),o=a(ke,-.5,n),l=h(Ze,o,i,t),c=a(ke,.5,e),u=h(Ze,o,i,c),f=a(ke,.5,r),m=h(Ze,o,f,t),p=h(Ze,o,f,c),b=a(ke,.5,n),s=h(Ze,b,i,t),x=h(Ze,b,f,t),_=h(Ze,b,i,c),S=h(Ze,b,f,c);return gc(ex($([h(yr,l,x,s),h(yr,l,m,x),h(yr,u,_,S),h(yr,u,S,p),h(yr,s,x,S),h(yr,s,S,_),h(yr,l,p,m),h(yr,l,u,p),h(yr,l,s,_),h(yr,l,_,u),h(yr,m,S,x),h(yr,m,p,S)])))}(),Wt={$:0},rx=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),nx=M(function(e,r,n){var t=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(t),f=ji(h(sm,u,c,l)),m={q:f,cx:vr(u)},p={q:f,cx:vr(c)},b={q:f,cx:vr(l)};return a(z,m,a(z,p,a(z,b,n)))}),bc=function(e){var r=e;return r.H},ax=ee(function(e,r,n,t){if(r.$===1)return J;var i=r.a;if(n.$===1)return J;var o=n.a;if(t.$===1)return J;var l=t.a;return X(h(e,i,o,l))}),ol=4294967295>>>32-tt,ll=is,tx=M(function(e,r,n){e:for(;;){var t=ol&r>>>e,i=a(ll,t,n);if(i.$){var f=i.a;return a(ll,ol&r,f)}else{var o=i.a,l=e-tt,c=r,u=o;e=l,r=c,n=u;continue e}}}),ix=function(e){return e>>>5<<5},ox=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=r.d;return e<0||_e(e,n)>-1?J:_e(e,ix(n))>-1?X(a(ll,ol&e,o)):X(h(tx,t,e,i))}),_c=function(e){var r=e;return r.au},go=v(function(e,r){return a(ox,e,_c(r))}),lx=function(e){var r=function(n){var t=n.a,i=n.b,o=n.c;return P(ax,M(function(l,c,u){return U(l,c,u)}),a(go,t,e),a(go,i,e),a(go,o,e))};return a(vn,r,bc(e))},cx=M(function(e,r,n){e:for(;;){var t=a(kl,_r,e),i=t.a,o=t.b;if(_e(Io(i),_r)<0)return a(J$,!0,{C:r,n,r:i});var l=o,c=a(z,W$(i),r),u=n+1;e=l,r=c,n=u;continue e}}),xc=function(e){return e.b?h(cx,e,D,0):H$},ux=v(function(e,r){return!a(xt,a(yt,kg,e),r)}),$x=function(e){var r=e.a;return r},gm=v(function(e,r){var n=$x(e),t=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&_e(o,n)<0&&l>=0&&_e(l,n)<0&&c>=0&&_e(c,n)<0};return a(ux,t,r)?{H:r,au:e}:{H:a(Lv,t,r),au:e}}),vx=M(function(e,r,n){return{$:3,a:e,b:r,c:n}}),kt=vx({d5:1,ei:3,eS:4}),ai=v(function(e,r){var n=xa(r),t=xa(e);return L(U(t.io,t.is,t.dU),U(n.io,n.is,n.dU))}),Ou=h(Mt,0,0,0),ho=wr(function(e,r,n,t,i,o){var l=o.a,c=o.b,u=o.c,f=a(wt,a(ai,e,r),i);if(f.$){var p={q:Ou,cx:vr(r)},b={q:Ou,cx:vr(e)},s=u+1,x=u;return U(a(z,U(n,x,s),a(z,U(n,s,t),l)),a(z,p,a(z,b,c)),u+2)}else{var m=f.a;return U(a(z,U(n,m,t),l),c,u)}}),fx=Ye(function(e,r,n,t,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,f=n.b,m=e(u),p=e(c),b=e(l),s=t+2,x=t+1,_=t,S=e,C=r,w=f,T=t+3,G=ar(ho,m,b,s,_,r,ar(ho,p,m,x,s,r,ar(ho,b,p,_,x,r,i)));e=S,r=C,n=w,t=T,i=G;continue e}else{var Z=i,ne=Z.a,te=Z.b;return L(ne,mr(te))}}),mx=Ye(function(e,r,n,t,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,f=r.b,m=e(u),p=e(c),b=e(l),s=n+2,x=n+1,_=n,S=h(pa,a(ai,b,m),s,h(pa,a(ai,m,p),x,h(pa,a(ai,p,b),_,i))),C=a(z,U(_,x,s),t),w=e,T=f,G=n+3,Z=C,ne=S;e=w,r=T,n=G,t=Z,i=ne;continue e}else return U(t,i,n)}),Rn=M(function(e,r,n){var t=lx(n),i=h(er,nx(r),D,t),o=F(mx,r,t,0,D,Bl),l=o.a,c=o.b,u=o.c,f=F(fx,r,c,t,0,U(l,D,u)),m=f.a,p=f.b,b=hn(p)?i:Y(i,p);return h(rx,e,a(gm,xc(b),m),a(kt,b,m))}),cl=function(e){return{H:a(ae,function(r){return U(3*r,3*r+1,3*r+2)},a(on,0,Yn(e)-1)),au:xc(sr(a(ae,function(r){var n=r.a,t=r.b,i=r.c;return $([n,t,i])},e)))}},hm=function(e){switch(e.$){case 0:return Wt;case 1:var t=e.a,r=e.b,n=a(ae,st,r);return h(Rn,t,Er,cl(n));case 2:var t=e.a,r=e.b,n=a(ae,st,r);return h(Rn,t,Er,cl(n));case 3:var t=e.a,i=e.b;return h(Rn,t,Er,i);case 4:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cx},i);case 5:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cx},i);case 6:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cx},i);case 7:var t=e.a,i=e.b;return h(Rn,t,function(o){return o.cx},i);case 8:return Wt;case 9:return Wt;default:return Wt}},qu=hm(pm),bm={$:0},W=bm,Qe=v(function(e,r){return{$:1,a:e,b:r}}),sx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},dx=1029,px=function(e){return{$:5,a:e}},_m=function(e){var r=e;return px(r)},gx=_m(dx),hx=1028,bx=_m(hx),fr=M(function(e,r,n){return r===1?e?a(z,gx,n):a(z,bx,n):n}),xm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},bo=ee(function(e,r,n,t){return a(Qe,r,ze(function(i,o,l,c,u,f,m,p){return F(Ee,h(fr,c,t,p),xm,sx,n,{b7:e,c:l,d:o,e:f,f:i,g:u})}))}),wc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},wm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Kr=ee(function(e,r,n,t){return a(Qe,r,ze(function(i,o,l,c,u,f,m,p){return F(Ee,h(fr,c,t,p),wm,wc,n,{aO:e,c:l,d:o,e:f,f:i,g:u})}))}),ym=v(function(e,r){return{$:3,a:e,b:r}}),_x={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},Sm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},xx=ee(function(e,r,n,t){return a(ym,n,ze(function(i,o,l,c,u,f,m,p){return F(Ee,p,Sm,_x,t,{aO:e,c:l,d:o,cw:r,e:f,f:i,g:u})}))}),yc={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},Dt=function(e){var r=e;return r},Ni=Hp,Zr=Ye(function(e,r,n,t,i){return a(Qe,n,ze(function(o,l,c,u,f,m,p,b){return F(Ee,h(fr,u,i,b),wm,yc,t,{a6:a(Ni,Dt(r),e),c,d:l,e:m,f:o,g:f})}))}),wx={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},yx=Ye(function(e,r,n,t,i){return a(ym,t,ze(function(o,l,c,u,f,m,p,b){return F(Ee,b,Sm,wx,i,{a6:a(Ni,Dt(r),e),c,d:l,cw:n,e:m,f:o,g:f})}))}),Cm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},Lm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ot=ee(function(e,r,n,t){return a(Qe,r,ze(function(i,o,l,c,u,f,m,p){var b=m.a,s=m.b;return F(Ee,h(fr,c,t,p),Lm,Cm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,dd:e,c:l,d:o,e:f,f:i,g:u})}))}),Pm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},zm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Sx=wr(function(e,r,n,t,i,o){return a(Qe,t,ze(function(l,c,u,f,m,p,b,s){var x=b.a,_=b.b;return F(Ee,h(fr,f,o,s),zm,Pm,i,{U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,de:e,c:u,d:c,bg:r,e:p,f:l,bm:n,g:m})}))}),Mm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Cx=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){return function(m){return a(Qe,u,ze(function(p,b,s,x,_,S,C,w){var T=C.a,G=C.b;return F(Ee,h(fr,x,m,w),zm,Mm,f,{cS:e,cU:r,cV:o,cW:t,U:G,bF:T.bF,cm:T.cm,cn:T.cn,co:T.co,dh:i,c:s,d:b,bg:l,e:S,dB:n,f:p,bm:c,g:_})}))}}}}}}}}}}},Tm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},qt=wr(function(e,r,n,t,i,o){return a(Qe,t,ze(function(l,c,u,f,m,p,b,s){var x=b.a,_=b.b;return F(Ee,h(fr,f,o,s),Lm,Tm,i,{cR:e,U:_,bF:x.bF,cm:x.cm,cn:x.cn,co:x.co,dg:n,c:u,d:c,e:p,dA:r,f:l,g:m})}))}),Lx=function(e){return{$:0,a:e}},Ju=v(function(e,r){return{$:1,a:e,b:r}}),et=v(function(e,r){if(r.$){var n=r.a.E;return L(n,1)}else return r.a,L(e,0)}),Px=function(e){return P(Fa,Aa(e),Ia(e),Ea(e),1)},Sc=P(Fa,0,0,0,0),ti=v(function(e,r){if(r.$){var t=r.a.E;return L(t,Sc)}else{var n=r.a;return L(e,Px(n))}}),km=v(function(e,r){var n=L(e,r);if(n.a.$){var i=n.a.a.E;return a(Ju,L(i,Sc),a(et,i,r))}else if(n.b.$){var i=n.b.a.E;return a(Ju,a(ti,i,e),a(et,i,r))}else{var t=n.a.a;return n.b.a,Lx(t)}}),zx=M(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Jt=ee(function(e,r,n,t){return{$:1,a:e,b:r,c:n,d:t}}),Mx=ee(function(e,r,n,t){return{$:0,a:e,b:r,c:n,d:t}}),Tx=function(e){return a(gr,e,1)},ul=a(gr,0,0),oa=v(function(e,r){if(r.$){var t=r.a.E;return L(t,ul)}else{var n=r.a;return L(e,Tx(n))}}),Dm=ee(function(e,r,n,t){var i=P(Mx,e,r,n,t);if(i.a.$){var u=i.a.a.E;return P(Jt,L(u,Sc),a(oa,u,r),a(oa,u,n),a(et,u,t))}else if(i.b.$){var u=i.b.a.E;return P(Jt,a(ti,u,e),L(u,ul),a(oa,u,n),a(et,u,t))}else if(i.c.$){var u=i.c.a.E;return P(Jt,a(ti,u,e),a(oa,u,r),L(u,ul),a(et,u,t))}else if(i.d.$){var u=i.d.a.E;return P(Jt,a(ti,u,e),a(oa,u,r),a(oa,u,n),L(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,h(zx,o,l,c)}}),kx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},_o=Ye(function(e,r,n,t,i){return a(Qe,n,ze(function(o,l,c,u,f,m,p,b){return F(Ee,h(fr,u,i,b),xm,kx,t,{cP:Dt(r),b7:e,c,d:l,e:m,f:o,g:f})}))}),Fm={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Dx=ee(function(e,r,n,t){return a(Qe,r,ze(function(i,o,l,c,u,f,m,p){var b=m.a,s=m.b;return F(Ee,h(fr,c,t,p),Fm,Pm,n,{U:s,bF:b.bF,cm:b.cm,cn:b.cn,co:b.co,de:e,c:l,d:o,bg:e,e:f,f:i,bm:0,g:u})}))}),Fx=ml(function(e,r,n,t,i,o,l,c,u){return a(Qe,l,ze(function(f,m,p,b,s,x,_,S){var C=_.a,w=_.b;return F(Ee,h(fr,b,u,S),Fm,Mm,c,{cS:e,cU:r,cV:o,cW:t,U:w,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:p,d:m,bg:e,e:x,dB:n,f,bm:0,g:s})}))}),dt=M(function(e,r,n){var t=e,i=r;return n<=.5?t+n*(i-t):i+(1-n)*(t-i)}),Ax=function(e){var r=e;return h(dt,r.eO,r.eL,.5)},Ix=function(e){var r=e;return h(dt,r.eP,r.eM,.5)},Ex=function(e){var r=e;return h(dt,r.eQ,r.eN,.5)},Bx=function(e){return h(Ze,Ax(e),Ix(e),Ex(e))},$e=function(e){var r=Of(e),n=r.a,t=r.b,i=r.c;return{f4:Ui(Bx(e)),gD:n/2,gE:t/2,gF:i/2}},Cc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return P(bo,c,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return P(bo,c,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return P(bo,c,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var n=e.b.a;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return P(Kr,n,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return P(Kr,n,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return P(Kr,n,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return P(Kr,n,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return P(Kr,n,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return P(Kr,n,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return P(Kr,n,$e(i),l,t);case 8:var i=r.a,l=r.c;return P(Kr,n,$e(i),l,0);case 9:var i=r.a,l=r.c;return P(Kr,n,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return P(xx,n,o,$e(i),l)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,f=e.c;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:var i=r.a,l=r.c,t=r.d;return F(_o,c,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(_o,c,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(_o,c,f,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return W;case 1:var i=r.a,l=r.c,t=r.d;return F(Zr,u,f,$e(i),l,t);case 2:var i=r.a,l=r.c,t=r.d;return F(Zr,u,f,$e(i),l,t);case 3:var i=r.a,l=r.c,t=r.d;return F(Zr,u,f,$e(i),l,t);case 4:var i=r.a,l=r.c,t=r.d;return F(Zr,u,f,$e(i),l,t);case 5:var i=r.a,l=r.c,t=r.d;return F(Zr,u,f,$e(i),l,t);case 6:var i=r.a,l=r.c,t=r.d;return F(Zr,u,f,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return F(Zr,u,f,$e(i),l,t);case 8:var i=r.a,l=r.c;return F(Zr,u,f,$e(i),l,0);case 9:var i=r.a,l=r.c;return F(Zr,u,f,$e(i),l,0);default:var i=r.a,o=r.b,l=r.d;return F(yx,u,f,o,$e(i),l)}}case 2:e.a;var m=e.b,ne=e.c,p=a(km,m,ne);if(p.$){var x=p.a,_=x.a;x.b;var S=p.b,C=S.a,w=S.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return P(Dx,_,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return ar(Sx,_,C,w,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}else{var b=p.a;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 3:return W;case 4:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 5:return W;case 6:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 7:var i=r.a,l=r.c,s=r.d;return P(Ot,b,$e(i),l,s);case 8:return W;case 9:return W;default:return W}}default:e.a;var T=e.b,G=e.c,Z=e.d,ne=e.e,te=P(Dm,T,G,Z,ne);if(te.$){var de=te.a,pe=de.a,Me=de.b,Se=te.b,me=Se.a,Te=Se.b,I=te.c,E=I.a,B=I.b,V=te.d,C=V.a,w=V.b;switch(r.$){case 0:return W;case 1:return W;case 2:return W;case 3:return W;case 4:return W;case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return es(Fx,pe,Me,me,Te,E,B,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return Cx(pe)(Me)(me)(Te)(E)(B)(C)(w)($e(i))(l)(t);case 8:return W;case 9:return W;default:return W}}else{var ie=te.a,re=te.b,q=te.c;switch(r.$){case 0:return W;case 1:return W;case 2:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,q,$e(i),l,t);case 3:return W;case 4:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,q,$e(i),l,t);case 5:return W;case 6:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,q,$e(i),l,t);case 7:var i=r.a,l=r.c,t=r.d;return ar(qt,ie,re,q,$e(i),l,t);case 8:return W;case 9:return W;default:return W}}}}),xo=function(e){var r=e;return r.io},wo=function(e){var r=e;return r.is},yo=function(e){var r=e;return r.dU},Vx=function(e){var r=e,n=yo(r.dV),t=wo(r.dV),i=xo(r.dV),o=yo(r.dT),l=wo(r.dT),c=xo(r.dT),u=yo(r.dS),f=wo(r.dS),m=xo(r.dS);return m*l*n+f*o*i+u*c*t-u*l*i-f*c*n-m*o*t>0},Rx=function(e){var r=Ui(na(e)),n=Tr(In(e)),t=Tr(An(e)),i=Tr(Fn(e));return{ek:Vx(e),t:i.io,u:i.is,v:i.dU,w:t.io,x:t.is,y:t.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},ua=v(function(e,r){return{$:5,a:e,b:r}}),Am=v(function(e,r){var n=r;switch(n.$){case 0:return W;case 5:var t=n.a,i=n.b,o=a(Vf,t,e);return a(ua,o,i);case 1:return a(ua,e,n);case 3:return a(ua,e,n);case 2:return a(ua,e,n);default:return a(ua,e,n)}}),Im=v(function(e,r){return a(Am,Rx(e),r)}),Hi=function(e){return{$:2,a:e}},Ux=v(function(e,r){var n=e.a,t=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:t*o.is,dU:i*o.dU},gD:n*r.gD,gE:t*r.gE,gF:i*r.gF}}),jx=Op,Nx=Wp,Yu=function(e){return function(r){return function(n){return function(t){return function(i){return function(o){return function(l){return function(c){return function(u){return function(f){var m=e.a,p=e.b,b=e.c,s=Nx(t),x=s.io,_=s.is,S=s.dU,C=s.ft,w=jx({ft:C,io:x*m,is:_*p,dU:S*b});return pt(r,n,w,i,o,l,c,u,f)}}}}}}}}}},$l=v(function(e,r){switch(r.$){case 0:return bm;case 5:var n=r.a,t=r.b;return a(ua,n,a($l,e,t));case 1:var i=r.a,o=r.b;return a(Qe,a(Ux,e,i),a(Yu,e,o));case 3:return r;case 2:var o=r.a;return Hi(a(Yu,e,o));default:var l=r.a;return Yf(a(ae,$l(e),l))}}),Lc=v(function(e,r){var n=r;return a($l,e,n)}),Pc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Em=7683,Bm=7682,Hx=h(mc,{dc:0,dx:0,dR:15},{bz:ir,bO:Ma,bX:ir,bY:Em},{bz:ir,bO:Ma,bX:ir,bY:Bm}),Gx=h(mc,{dc:0,dx:0,dR:15},{bz:ir,bO:Ma,bX:ir,bY:Bm},{bz:ir,bO:Ma,bX:ir,bY:Em}),zc=v(function(e,r){return e?a(z,Gx,r):a(z,Hx,r)}),Wx={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},Ox=function(e){if(e.$){var r=e.c;return X(ze(function(n,t,i,o,l,c,u,f){return F(Ee,a(zc,o,f),Wx,Pc,r,{c:i,d:t,e:c,f:n,cD:u,g:l})}))}else return J},Si=function(e){var r=Ox(e);if(r.$)return W;var n=r.a;return Hi(n)},qx=ee(function(e,r,n,t){var i=a(Cc,n,pm),o=function(){var m=L(e,r);return m.a?m.b?Tt($([i,Si(qu)])):i:m.b?Si(qu):W}(),l=oc(t),c=l.a,u=l.b,f=l.c;return a(Im,ic(t),a(Lc,U(c,u,f),o))}),Jx=v(function(e,r){return P(qx,!0,!0,e,r)}),vl=function(e){return{$:0,a:e}},Vm=v(function(e,r){return{$:0,a:e,b:r}}),Yx=function(e){var r=ql(e),n=r.hu,t=r.gA,i=r.fS;return h(Mt,n,t,i)},Xx=function(e){return a(Vm,0,vl(Yx(e)))},Mc=function(e){var r=e;return r.m},rt=function(e){var r=e;return Kn(r)},Kx=v(function(e,r){var n=r;return n/e}),Xu=function(e){var r=e;return{io:Kn(r),is:za(r)}},Zx=v(function(e,r){var n=e.cx,t=e.q;return a(z,{q:ji(t),cx:vr(n)},r)}),Qx=Pi(function(e,r,n,t,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,f=Ea(c.cx),m=Ia(c.cx),p=Aa(c.cx),b=a(ha,e,p),s=a(Pr,r,p),x=a(ha,n,m),_=a(Pr,t,m),S=a(ha,i,f),C=a(Pr,o,f),w=u;e=b,r=s,n=x,t=_,i=S,o=C,l=w;continue e}else return $m({eL:r,eM:t,eN:o,eO:e,eP:n,eQ:i})}),Rm=v(function(e,r){var n=Ea(e.cx),t=Ia(e.cx),i=Aa(e.cx);return sl(Qx,i,i,t,t,n,n,r)}),ew=function(e){var r=h(I$,Zx,D,_c(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,bc(e)),o=a(Rm,n,t);return P(cm,o,e,i,0)}else return hc},Um=cn({io:0,is:0,dU:-1}),Ku=v(function(e,r){var n=e,t=r,i=n.dT,o=i,l=n.dS,c=l;return{io:t.io*c.io+t.is*o.io,is:t.io*c.is+t.is*o.is,dU:t.io*c.dU+t.is*o.dU}}),Ci=function(e){var r=e;return za(r)},Ya=function(e){var r=e;return r},fl=function(e){return Pa(2*qr*e)},Zu=Pf({dl:Qr,dS:rc,dT:em}),jm=function(){var e=72,r=a(Kx,e,fl(1)),n=wn(1),t=Ya(nc),i=Ya(Um),o=wn(1),l=a(ke,.5,o),c=h(Ze,an,an,l),u=a(ke,-.5,o),f=h(Ze,an,an,u),m=function(s){var x=a(ke,s,r),_=Ya(a(Ku,Zu,Xu(x))),S=a(ke,rt(x),n),C=a(ke,Ci(x),n),w=h(Ze,S,C,l),T=h(Ze,S,C,u),G=a(bi,e,s+1),Z=a(ke,G,r),ne=Ya(a(Ku,Zu,Xu(Z))),te=a(ke,rt(Z),n),ie=a(ke,Ci(Z),n),re=h(Ze,te,ie,u),q=h(Ze,te,ie,l);return $([U({q:i,cx:f},{q:i,cx:re},{q:i,cx:T}),U({q:_,cx:T},{q:ne,cx:re},{q:ne,cx:q}),U({q:_,cx:T},{q:ne,cx:q},{q:_,cx:w}),U({q:t,cx:c},{q:t,cx:w},{q:t,cx:q})])},p=a(ae,m,a(on,0,e-1)),b=cl(sr(p));return gc(ew(b))}(),Qu=hm(jm),Nm=function(e){var r=e;return r.dl},rw=function(e){var r=e,n=we(r.dU),t=we(r.is),i=we(r.io);if(_e(i,t)<1)if(_e(i,n)<1){var o=da(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=da(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if(_e(t,n)<1){var o=da(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=da(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},nw=function(e){var r=rw(e),n=r,t=n,i=e,o=i,l={io:o.is*t.dU-o.dU*t.is,is:o.dU*t.io-o.io*t.dU,dU:o.io*t.is-o.is*t.io};return L(r,l)},aw=function(e){var r=ec(e),n=nw(r),t=n.a,i=n.b;return mn({dl:Nm(e),dS:t,dT:i,dV:r})},Hm=function(e){var r=e;return r.g5},Gm=function(e){var r=e;return r.hs},tw=ee(function(e,r,n,t){var i=aw(Mc(t)),o=a(Cc,n,jm),l=function(){var p=L(e,r);return p.a?p.b?Tt($([o,Si(Qu)])):o:p.b?Si(Qu):W}(),c=Gm(t),u=c,f=Hm(t),m=f;return a(Im,i,a(Lc,U(u,u,m),l))}),iw=v(function(e,r){return P(tw,!0,!0,e,r)}),e$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},r$={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Xa=function(e){var r=st(e),n=r.a,t=r.b,i=r.c,o=xa(n),l=xa(t),c=xa(i);return Gr({eu:o.io,ev:l.io,ew:c.io,ex:0,ey:o.is,ez:l.is,eA:c.is,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},Yt=dm($([U({dI:0},{dI:1},{dI:2})])),ow=v(function(e,r){var n=vm(r),t=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var i=e.b.a;return a(Qe,t,ze(function(w,T,G,Z,ne,te,ie,re){return F(Ee,h(fr,Z,0,re),e$,wc,Yt,{aO:i,c:G,d:T,e:te,f:w,bU:Xa(r),g:ne})}));case 1:if(e.b.$)return e.a,W;var o=e.b.a,l=e.c;return a(Qe,t,ze(function(w,T,G,Z,ne,te,ie,re){return F(Ee,h(fr,Z,0,re),e$,yc,Yt,{a6:a(Ni,Dt(l),o),c:G,d:T,e:te,f:w,bU:Xa(r),g:ne})}));case 2:e.a;var c=e.b,s=e.c,u=a(km,c,s);if(u.$)return W;var f=u.a;return a(Qe,t,ze(function(w,T,G,Z,ne,te,ie,re){var q=ie.a,de=ie.b;return F(Ee,h(fr,Z,0,re),r$,Cm,Yt,{U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dd:f,c:G,d:T,e:te,f:w,bU:Xa(r),g:ne})}));default:e.a;var m=e.b,p=e.c,b=e.d,s=e.e,x=P(Dm,m,p,b,s);if(x.$)return W;var _=x.a,S=x.b,C=x.c;return a(Qe,t,ze(function(w,T,G,Z,ne,te,ie,re){var q=ie.a,de=ie.b;return F(Ee,h(fr,Z,0,re),r$,Tm,Yt,{cR:_,U:de,bF:q.bF,cm:q.cm,cn:q.cn,co:q.co,dg:C,c:G,d:T,e:te,dA:S,f:w,bU:Xa(r),g:ne})}))}}),lw=function(){var e=$([{bl:a(gr,0,1)},{bl:a(gr,1,1)},{bl:a(gr,2,1)},{bl:a(gr,0,-1)},{bl:a(gr,1,-1)},{bl:a(gr,2,-1)}]),r=$([U(0,1,2),U(3,5,4),U(3,4,1),U(3,1,0),U(4,5,2),U(4,2,1),U(5,3,0),U(5,0,2)]);return a(kt,e,r)}(),cw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},n$=function(e){return Hi(ze(function(r,n,t,i,o,l,c,u){return F(Ee,a(zc,i,u),cw,Pc,lw,{c:t,d:n,e:l,f:r,cD:c,bU:Xa(e),g:o})}))},uw=ee(function(e,r,n,t){var i=a(ow,n,t),o=L(e,r);return o.a?o.b?Tt($([i,n$(t)])):i:o.b?n$(t):W}),$w=v(function(e,r){return P(uw,!0,!0,e,r)}),vw=v(function(e,r){var n=Jn(r),t=Jn(e),i=qn(r),o=qn(e),l=On(r),c=On(e);return{eL:a(He,c,l),eM:a(He,o,i),eN:a(He,t,n),eO:a(Oe,c,l),eP:a(Oe,o,i),eQ:a(Oe,t,n)}}),fw=function(e){var r=lc(e),n=r.a,t=r.b;return a(vw,n,t)},a$={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},mw=v(function(e,r){return{$:1,a:e,b:r}}),sw=mw({d5:2,ei:0,eS:1}),t$=sw($([L({es:0},{es:1})])),dw=v(function(e,r){var n=fw(r),t=$e(n),i=lc(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,W;var c=e.b.a;return a(Qe,t,ze(function(f,m,p,b,s,x,_,S){return F(Ee,S,a$,wc,t$,{aO:c,eq:vr(l),er:vr(o),c:p,d:m,e:x,f,g:s})}));case 1:if(e.b.$)return W;var c=e.b.a,u=e.c;return a(Qe,t,ze(function(m,p,b,s,x,_,S,C){return F(Ee,C,a$,yc,t$,{a6:a(Ni,Dt(u),c),eq:vr(l),er:vr(o),c:b,d:p,e:_,f:m,g:x})}));case 2:return W;default:return W}}),pw=v(function(e,r){return a(dw,e,r)}),i$=v(function(e,r){var n=e,t=r;return n/t}),gw=Ye(function(e,r,n,t,i){e:for(;;){var o=t(r/n),l=a(z,o,i);if(he(r,e))return l;var c=e,u=r-1,f=n,m=t,p=l;e=c,r=u,n=f,t=m,i=p;continue e}}),o$=v(function(e,r){return e<1?D:F(gw,0,e,e,r,D)}),hw=v(function(e,r){var n=e.cx,t=e.q,i=e.O,o=i,l=o.a,c=o.b;return a(z,{q:ji(t),cx:vr(n),O:a(gr,l,c)},r)}),bw=function(e){var r=h(I$,hw,D,_c(e));if(r.b){var n=r.a,t=r.b,i=a(kt,r,bc(e)),o=a(Rm,n,t);return P(um,o,e,i,0)}else return hc},Wm=v(function(e,r){var n=e,t=r,i=Kn(t);return{io:i*Kn(n),is:i*za(n),dU:za(t)}}),_w=function(){var e=wn(1),r=72,n=a(on,0,r-1),t=a(o$,r,a(dt,an,fl(1))),i=at(r/2),o=a(on,0,i-1),l=a(o$,i,a(dt,qa(90),qa(-90))),c=xc(sr(a(ae,function(m){return a(ae,function(p){return{q:Ya(a(Wm,m,p)),cx:h(Ze,a(ke,rt(p)*rt(m),e),a(ke,rt(p)*Ci(m),e),a(ke,Ci(p),e)),O:L(a(i$,m,fl(1)),a(i$,a(Qa,qa(90),p),qa(180)))}},l)},t))),u=v(function(m,p){return m*(i+1)+p}),f=sr(a(ae,function(m){return sr(a(ae,function(p){var b=a(u,m+1,p),s=a(u,m,p),x=a(u,m+1,p+1),_=a(u,m,p+1);return $([U(_,x,b),U(_,b,s)])},o))},n));return gc(bw(a(gm,c,f)))}(),Li=72,Xt=2*Li,xw=v(function(e,r){e:for(;;){var n=Xt+1,t=a(bi,Xt,2*e+3),i=a(bi,Xt,2*e+2),o=2*e+1,l=2*e,c=Xt,u=a(z,U(c,l,i),a(z,U(l,t,i),a(z,U(l,o,t),a(z,U(o,n,t),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),ww=M(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),yw=v(function(e,r){e:for(;;){var n=h(ww,0,2*qr,e/Li),t={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=a(z,t,a(z,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Sw=function(){var e=a(yw,Li-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=a(xw,Li-1,D);return a(kt,e,r)}(),Cw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},l$=function(e){return Hi(ze(function(r,n,t,i,o,l,c,u){return F(Ee,a(zc,!0,u),Cw,Pc,Sw,{aO:h(Mt,0,0,1),c:t,d:n,e:l,f:r,cD:c,g:o})}))},Lw=function(e){var r=mm(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},Pw=v(function(e,r){return a(Am,Lw(e),r)}),zw=ee(function(e,r,n,t){var i=a(Cc,n,_w),o=function(){var u=L(e,r);return u.a?u.b?Tt($([i,l$()])):i:u.b?l$():W}(),l=uc(t),c=l;return a(Pw,a(il,Qr,cc(t)),a(Lc,U(c,c,c),o))}),Mw=v(function(e,r){return P(zw,!0,!0,e,r)}),Tw=M(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Om=M(function(e,r,n){return{$:2,a:e,b:r,c:n}}),kw=Ye(function(e,r,n,t,i){return{$:3,a:e,b:r,c:n,d:t,e:i}}),Dw=function(e){switch(e.$){case 0:var n=e.a,t=e.b;return a(Vm,n,t);case 1:var n=e.a,t=e.b,r=e.c;return h(Tw,n,t,r);case 2:var n=e.a,t=e.b,l=e.c;return h(Om,n,t,l);default:var n=e.a,t=e.b,i=e.c,o=e.d,l=e.e;return F(kw,n,t,i,o,l)}},Fw=Dw,qm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([a(Jx,i,r)]);case 1:var i=e.a,n=e.b;return $([a($w,i,n)]);case 3:var i=e.a,t=e.b;return $([a(Mw,Fw(i),t)]);case 2:var i=e.a,o=e.b;return $([a(iw,i,o)]);case 4:var l=e.a,c=e.b;return $([a(pw,Xx(l),c)]);default:var u=e.a;return a(Da,qm,u)}},Aw=function(e){return a(Da,qm,e)},Iw=v(function(e,r){return j2({a1:r_(e.fO),f0:e.f0,a3:n_(.5),cX:e.cX,a4:L(Au(Be(e.dC.im)),Au(Be(e.dC.gH))),a8:Aw(r),hI:!0,hZ:a(Wm,Pa(e.hY),Pa(e.h_)),fm:ac})}),So=v(function(e,r){var n=e,t=r;return _e(t,n)>-1}),Co=v(function(e,r){var n=e,t=r;return n+.5*(t-n)}),Ew=cn({io:-1,is:0,dU:0}),Bw=cn({io:0,is:-1,dU:0}),Vw=wr(function(e,r,n,t,i,o){var l=a(So,n,o)?nc:Um,c=a(So,r,i)?Qf:Bw,u=a(So,e,t)?zf:Ew,f=U(Je(a(un,e,t)),Je(a(un,r,i)),Je(a(un,n,o))),m=h(Ze,a(Co,e,t),a(Co,r,i),a(Co,n,o)),p=mn({dl:m,dS:u,dT:c,dV:l});return{fN:p,a4:f}}),Rw=v(function(e,r){return ar(Vw,On(e),qn(e),Jn(e),On(r),qn(r),Jn(r))}),Uw=v(function(e,r){var n=r.a,t=r.b,i=r.c,o=U(n/2,t/2,i/2),l=o.a,c=o.b,u=o.c;return a(tc,e,a(Rw,h(al,-l,-c,-u),h(al,l,c,u)))}),jw=v(function(e,r){return a(Ue,function(n){if(n.$===2){var t=n.a;return t}else return Wl},a(wt,e,r.aN))}),Nw=v(function(e,r){return a(Ae,Wl,Ri(a(vn,jw(e),r)))}),Hw=v(function(e,r){return a(Nw,e,r.gb)}),Gw=Hw,Lo=function(e){return h(am,0,1,e<=.04045?e/12.92:a(Lt,(e+.055)/1.055,2.4))},Ww=function(e){var r=ql(e),n=r.hu,t=r.gA,i=r.fS;return h(Mt,Lo(n),Lo(t),Lo(i))},Ow=function(e){return h(Om,0,vl(Ww(e)),vl(0))},Ft=M(function(e,r,n){var t=e,i=n;return{io:t.io+r*(i.io-t.io),is:t.is+r*(i.is-t.is),dU:t.dU+r*(i.dU-t.dU)}}),qw=M(function(e,r,n){var t=ic(n),i=Fn(t),o=An(t),l=In(t),c=h(Ft,e,r,na(t)),u=r>=0?mn({dl:c,dS:i,dT:o,dV:l}):mn({dl:c,dS:$n(i),dT:$n(o),dV:$n(l)}),f=oc(n),m=f.a,p=f.b,b=f.c,s=Je(a(ke,r,m)),x=Je(a(ke,r,p)),_=Je(a(ke,r,b));return{fN:u,a4:U(s,x,_)}}),c$=function(e){return ec(Mc(e))},Jw=function(e){return Nm(Mc(e))},Yw=M(function(e,r,n){var t=Je(a(ke,r,Gm(n))),i=Je(a(ke,r,Hm(n))),o=r>=0?c$(n):$n(c$(n)),l=h(Ft,e,r,Jw(n));return{m:a(zt,l,o),g5:i,hs:t}}),Xw=M(function(e,r,n){return a(Af,a(Ft,e,r),n)}),Kw=M(function(e,r,n){return a(If,a(ke,we(r),uc(n)),h(Ft,e,r,cc(n)))}),Zw=M(function(e,r,n){return a(Ef,a(Ft,e,r),n)}),Jm=v(function(e,r){switch(r.$){case 0:var l=r.a,n=r.b;return a(tc,l,h(qw,Qr,e,n));case 1:var l=r.a,t=r.b;return a(Ff,l,h(Zw,Qr,e,t));case 3:var l=r.a,i=r.b;return a(Df,l,h(Kw,Qr,e,i));case 2:var l=r.a,o=r.b;return a(Mf,l,h(Yw,Qr,e,o));case 4:var l=r.a,c=r.b;return a(kf,l,h(Xw,Qr,e,c));default:var u=r.a;return Tf(a(ae,Jm(e),u))}}),Qw=v(function(e,r){return(r-O$(r/e)*e)/e}),ey=function(e){return 2*qr*e},ry=ee(function(e,r,n,t){return e+(r-e)*(1+Kn(ey(a(Qw,n,t))))/2}),Po=function(e){return a(Jm,P(ry,1,1.1,a(ri,"period",e),e.d1),a(Uw,Ow(a(Gw,"cube color",e)),U(1,1,1)))},ny=v(function(e,r){return a(Iw,{fO:h(e_,46,46,46),f0:G1(e),cX:e.cX,dC:e.dC,hY:-el(135),h_:-el(45)},$([Po(e),a(Fu,-2,Po(e)),a(Fu,2,Po(e))]))}),ay=P(m1,ny,w1,x1,s1);const ty={Main:{init:ay(a(Q,function(e){return cr({gY:e})},a(K,"inputs",a(Q,function(e){return a(Q,function(r){return a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return cr({d1:l,cX:o,gp:i,g3:t,hq:n,dC:r,il:e})},a(K,"clock",We))},a(K,"devicePixelRatio",We))},a(K,"dt",We))},a(K,"keyboard",a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return a(Q,function(m){return a(Q,function(p){return cr({fJ:p,gd:m,d4:f,go:u,g4:c,hr:l,hx:o,hJ:i,fl:t})},a(K,"alt",Pe))},a(K,"control",Pe))},a(K,"down",Pe))},a(K,"downs",si(ya)))},a(K,"left",Pe))},a(K,"pressedKeys",si(ya)))},a(K,"right",Pe))},a(K,"shift",Pe))},a(K,"up",Pe))))},a(K,"pointer",a(Q,function(n){return a(Q,function(t){return a(Q,function(i){return a(Q,function(o){return a(Q,function(l){return a(Q,function(c){return a(Q,function(u){return a(Q,function(f){return cr({d4:f,g$:u,ha:c,hy:l,hz:o,fl:i,io:t,is:n})},a(K,"down",Pe))},a(K,"isDown",Pe))},a(K,"move",Pe))},a(K,"rightDown",Pe))},a(K,"rightUp",Pe))},a(K,"up",Pe))},a(K,"x",We))},a(K,"y",We))))},a(K,"screen",a(Q,function(r){return a(Q,function(n){return cr({gH:n,im:r})},a(K,"height",We))},a(K,"width",We))))},a(K,"wheel",a(Q,function(e){return a(Q,function(r){return cr({gh:r,gi:e})},a(K,"deltaX",We))},a(K,"deltaY",We)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},iy=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),t=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",l=s=>s.code=="ArrowUp",c=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function p(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),t(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),l(s)&&(oe.keyboard.up=!0),c(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(x=>x!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),t(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),l(s)&&(oe.keyboard.up=!1),c(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const x=s/1e3,_=x-oe.clock;_<.009||(oe.dt=_,oe.clock=x,e.ports.tick.send(oe),p(oe)),window.requestAnimationFrame(b)}},oy=ty.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});iy(oy);
