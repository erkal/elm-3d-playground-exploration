const rs=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};rs();function kn(e,r,n){return n.a=e,n.f=r,n}function v(e){return kn(2,e,function(r){return function(n){return e(r,n)}})}function k(e){return kn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function Z(e){return kn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Je(e){return kn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function xr(e){return kn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return e(r,n,a,i,o,c)}}}}}})}function Ti(e){return kn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return e(r,n,a,i,o,c,l)}}}}}}})}function Pe(e){return kn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return e(r,n,a,i,o,c,l,u)}}}}}}}})}function _c(e){return kn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return e(r,n,a,i,o,c,l,u,f)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function h(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function M(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function R(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function ar(e,r,n,a,i,o,c){return e.a===6?e.f(r,n,a,i,o,c):e(r)(n)(a)(i)(o)(c)}function yc(e,r,n,a,i,o,c,l){return e.a===7?e.f(r,n,a,i,o,c,l):e(r)(n)(a)(i)(o)(c)(l)}function bt(e,r,n,a,i,o,c,l,u){return e.a===8?e.f(r,n,a,i,o,c,l,u):e(r)(n)(a)(i)(o)(c)(l)(u)}function ns(e,r,n,a,i,o,c,l,u,f){return e.a===9?e.f(r,n,a,i,o,c,l,u,f):e(r)(n)(a)(i)(o)(c)(l)(u)(f)}var as=[];function ts(e){return e.length}var is=k(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),os=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,w(n,r)}),cs=v(function(e,r){return r[e]});k(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});k(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var ls=k(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});k(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});k(function(e,r,n){return n.slice(e,r)});k(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,c=new Array(o),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<i;l++)c[l+a]=n[l];return c});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+us()),r});function us(e){return"<internals>"}function Ra(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function _e(e,r){for(var n,a=[],i=Do(e,r,0,a);i&&(n=a.pop());i=Do(n.a,n.b,0,a));return i}function Do(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Ra(5),!1;if(n>100)return a.push(w(e,r)),!0;e.$<0&&(e=ou(e),r=ou(r));for(var i in e)if(!Do(e[i],r[i],n+1,a))return!1;return!0}v(_e);v(function(e,r){return!_e(e,r)});function he(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=he(e.a,r.a))||(n=he(e.b,r.b))?n:he(e.c,r.c);for(;e.b&&r.b&&!(n=he(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return he(e,r)<0});v(function(e,r){return he(e,r)<1});v(function(e,r){return he(e,r)>0});v(function(e,r){return he(e,r)>=0});var $s=v(function(e,r){var n=he(e,r);return n<0?J$:n?tg:q$}),_t=0;function w(e,r){return{a:e,b:r}}function H(e,r,n){return{a:e,b:r,c:n}}function Re(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(X);function X(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Yr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Yr(e.a,r);return n}var D={$:0};function Yr(e,r){return{$:1,a:e,b:r}}var vs=v(Yr);function $(e){for(var r=D,n=e.length;n--;)r=Yr(e[n],r);return r}function Di(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var fs=k(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});Z(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(h(e,r.a,n.a,a.a));return $(i)});Je(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(M(e,r.a,n.a,a.a,i.a));return $(o)});xr(function(e,r,n,a,i,o){for(var c=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)c.push(R(e,r.a,n.a,a.a,i.a,o.a));return $(c)});v(function(e,r){return $(Di(r).sort(function(n,a){return he(e(n),e(a))}))});v(function(e,r){return $(Di(r).sort(function(n,a){var i=t(e,n,a);return i===q$?0:i===J$?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ms=v(Math.pow);v(function(e,r){return r%e});var ss=v(function(e,r){var n=r%e;return e===0?Ra(11):n>0&&e<0||n<0&&e>0?n+e:n}),ds=Math.PI,ps=Math.cos,gs=Math.sin,hs=Math.tan;v(Math.atan2);function bs(e){return e}function _s(e){return e===1/0||e===-1/0}var ys=Math.ceil,ws=Math.floor,xs=Math.round,Ss=Math.sqrt,Ol=Math.log,Cs=isNaN;function Ls(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var Ms=v(function(e,r){return e+r});function Ps(e){var r=e.charCodeAt(0);return isNaN(r)?O:J(55296<=r&&r<=56319?w(e[0]+e[1],e.slice(2)):w(e[0],e.slice(1)))}v(function(e,r){return e+r});function zs(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(r[i]+r[i+1]),i+=2;continue}a[i]=e(r[i]),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],c=r.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=r[i],i++),e(o)&&n.push(o)}return n.join("")});function ks(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}k(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],c=n.charCodeAt(i);i++,55296<=c&&c<=56319&&(o+=n[i],i++),r=t(e,o,r)}return r});var Ts=k(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,i,r)}return r}),Ds=v(function(e,r){return r.split(e)}),Rs=v(function(e,r){return r.join(e)}),As=k(function(e,r,n){return n.slice(e,r)});function Fs(e){return $(e.trim().split(/\s+/g))}function Is(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Es=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Bs=v(function(e,r){return r.indexOf(e)>-1}),Vs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var js=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function _$(e){return e+""}function Ns(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return O;r=10*r+o-48}return i==a?O:J(n==45?-r:r)}function Gs(e){if(e.length===0||/[\sxbo]/.test(e))return O;var r=+e;return r===r?J(r):O}function Hs(e){return Di(e).join("")}function Ws(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Us(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Os(e){return{$:0,a:e}}function qs(e){return{$:1,a:e}}function wc(e){return{$:2,b:e}}var Js=wc(function(e){return typeof e=="boolean"?We(e):Gr("a BOOL",e)}),Ys=wc(function(e){return typeof e=="number"?We(e):Gr("a FLOAT",e)}),Xs=wc(function(e){return typeof e=="string"?We(e):e instanceof String?We(e+""):Gr("a STRING",e)});function Qs(e){return{$:3,b:e}}var Zs=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function Tn(e,r){return{$:9,f:e,g:r}}var Ks=v(function(e,r){return{$:10,b:r,h:e}}),ed=v(function(e,r){return Tn(e,[r])}),rd=k(function(e,r,n){return Tn(e,[r,n])});Z(function(e,r,n,a){return Tn(e,[r,n,a])});Je(function(e,r,n,a,i){return Tn(e,[r,n,a,i])});xr(function(e,r,n,a,i,o){return Tn(e,[r,n,a,i,o])});Ti(function(e,r,n,a,i,o,c){return Tn(e,[r,n,a,i,o,c])});Pe(function(e,r,n,a,i,o,c,l){return Tn(e,[r,n,a,i,o,c,l])});_c(function(e,r,n,a,i,o,c,l,u){return Tn(e,[r,n,a,i,o,c,l,u])});v(function(e,r){try{var n=JSON.parse(r);return Lr(e,n)}catch(a){return tr(t(Ac,"This is not valid JSON! "+a.message,r))}});var y$=v(function(e,r){return Lr(e,r)});function Lr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?We(e.c):Gr("null",r);case 3:return It(r)?ql(e.b,r,$):Gr("a LIST",r);case 4:return It(r)?ql(e.b,r,nd):Gr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Gr("an OBJECT with a field named `"+n+"`",r);var f=Lr(e.b,r[n]);return Ar(f)?f:tr(t(cu,n,f.a));case 7:var a=e.e;if(!It(r))return Gr("an ARRAY",r);if(a>=r.length)return Gr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var f=Lr(e.b,r[a]);return Ar(f)?f:tr(t(Y$,a,f.a));case 8:if(typeof r!="object"||r===null||It(r))return Gr("an OBJECT",r);var i=D;for(var o in r)if(r.hasOwnProperty(o)){var f=Lr(e.b,r[o]);if(!Ar(f))return tr(t(cu,o,f.a));i=Yr(w(o,f.a),i)}return We(mr(i));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var f=Lr(l[u],r);if(!Ar(f))return f;c=c(f.a)}return We(c);case 10:var f=Lr(e.b,r);return Ar(f)?Lr(e.h(f.a),r):f;case 11:for(var m=D,d=e.g;d.b;d=d.b){var f=Lr(d.a,r);if(Ar(f))return f;m=Yr(f.a,m)}return tr(ig(mr(m)));case 1:return tr(t(Ac,e.a,r));case 0:return We(e.a)}}function ql(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var c=Lr(e,r[o]);if(!Ar(c))return tr(t(Y$,o,c.a));i[o]=c.a}return We(n(i))}function It(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function nd(e){return t(_g,e.length,function(r){return e[r]})}function Gr(e,r){return tr(t(Ac,"Expecting "+e,r))}function sa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return sa(e.b,r.b);case 6:return e.d===r.d&&sa(e.b,r.b);case 7:return e.e===r.e&&sa(e.b,r.b);case 9:return e.f===r.f&&Jl(e.g,r.g);case 10:return e.h===r.h&&sa(e.b,r.b);case 11:return Jl(e.g,r.g)}}function Jl(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!sa(e[a],r[a]))return!1;return!0}var ad=v(function(e,r){return JSON.stringify(r,null,e)+""});function w$(e){return e}function td(){return[]}function id(){return{}}var od=k(function(e,r,n){return n[e]=r,n});function cd(e){return v(function(r,n){return n.push(e(r)),n})}function Qn(e){return{$:0,a:e}}function ld(e){return{$:1,a:e}}function mn(e){return{$:2,b:e,c:null}}var Ro=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ud(e){return{$:5,b:e}}var $d=0;function xc(e){var r={$:0,e:$d++,f:e,g:null,h:[]};return Sc(r),r}function x$(e){return mn(function(r){r(Qn(xc(e)))})}function S$(e,r){e.h.push(r),Sc(e)}var vd=v(function(e,r){return mn(function(n){S$(e,r),n(Qn(_t))})}),co=!1,Yl=[];function Sc(e){if(Yl.push(e),!co){for(co=!0;e=Yl.shift();)fd(e);co=!1}}function fd(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,Sc(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}Z(function(e,r,n,a){return Cc(r,a,e.gW,e.ii,e.hW,function(){return function(){}})});function Cc(e,r,n,a,i,o){var c=t(y$,e,r?r.flags:void 0);Ar(c)||Ra(2);var l={},u=n(c.a),f=u.a,m=o(b,f),d=md(l,b);function b(s,y){var _=t(a,s,f);m(f=_.a,y),Ql(l,_.b,i(f))}return Ql(l,u.b,i(f)),d?{ports:d}:{}}var Or={};function md(e,r){var n;for(var a in Or){var i=Or[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=dd(i,r)}return n}function sd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function dd(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,c=e.f;function l(u){return t(Ro,l,ud(function(f){var m=f.a;return f.$===0?h(i,n,m,u):o&&c?M(a,n,m.i,m.j,u):h(a,n,o?m.i:m.j,u)}))}return n.h=xc(t(Ro,l,e.b))}var pd=v(function(e,r){return mn(function(n){e.g(r),n(Qn(_t))})});v(function(e,r){return t(vd,e.h,{$:0,a:r})});function C$(e){return function(r){return{$:1,k:e,l:r}}}function gd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Xl=[],lo=!1;function Ql(e,r,n){if(Xl.push({p:e,q:r,r:n}),!lo){lo=!0;for(var a;a=Xl.shift();)hd(a.p,a.q,a.r);lo=!1}}function hd(e,r,n){var a={};ci(!0,r,a,null),ci(!1,n,a,null);for(var i in e)S$(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function ci(e,r,n,a){switch(r.$){case 1:var i=r.k,o=bd(e,i,a,r.l);n[i]=_d(e,o,n[i]);return;case 2:for(var c=r.m;c.b;c=c.b)ci(e,c.a,n,a);return;case 3:ci(e,r.o,n,{s:r.n,t:a});return}}function bd(e,r,n,a){function i(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var o=e?Or[r].e:Or[r].f;return t(o,i,a)}function _d(e,r,n){return n=n||{i:D,j:D},e?n.i=Yr(r,n.i):n.j=Yr(r,n.j),n}function yd(e){Or[e]&&Ra(3)}v(function(e,r){return r});function wd(e,r){return yd(e),Or[e]={f:xd,u:r,a:Sd},C$(e)}var xd=v(function(e,r){return function(n){return e(r(n))}});function Sd(e,r){var n=D,a=Or[e].u,i=Qn(null);Or[e].b=i,Or[e].c=k(function(c,l,u){return n=l,i});function o(c){var l=t(y$,a,c);Ar(l)||Ra(4,e,l.a);for(var u=l.a,f=n;f.b;f=f.b)r(f.a(u))}return{send:o}}var li,an=typeof document!="undefined"?document:{};function Lc(e,r){e.appendChild(r)}Z(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(yn(e,function(){}),i),{}});function Ao(e){return{$:0,a:e}}var L$=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b||0,i.push(c)}return o+=i.length,{$:1,c:r,d:Pc(n),e:i,f:e,b:o}})}),sn=L$(void 0),Cd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var c=a.a;o+=c.b.b||0,i.push(c)}return o+=i.length,{$:2,c:r,d:Pc(n),e:i,f:e,b:o}})}),Ld=Cd(void 0);function Md(e,r,n,a){return{$:3,d:Pc(e),g:r,h:n,i:a}}var Pd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function Dn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return Dn([e,r],function(){return e(r)})});k(function(e,r,n){return Dn([e,r,n],function(){return t(e,r,n)})});var zd=Z(function(e,r,n,a){return Dn([e,r,n,a],function(){return h(e,r,n,a)})});Je(function(e,r,n,a,i){return Dn([e,r,n,a,i],function(){return M(e,r,n,a,i)})});xr(function(e,r,n,a,i,o){return Dn([e,r,n,a,i,o],function(){return R(e,r,n,a,i,o)})});Ti(function(e,r,n,a,i,o,c){return Dn([e,r,n,a,i,o,c],function(){return ar(e,r,n,a,i,o,c)})});Pe(function(e,r,n,a,i,o,c,l){return Dn([e,r,n,a,i,o,c,l],function(){return yc(e,r,n,a,i,o,c,l)})});_c(function(e,r,n,a,i,o,c,l,u){return Dn([e,r,n,a,i,o,c,l,u],function(){return bt(e,r,n,a,i,o,c,l,u)})});var M$=v(function(e,r){return{$:"a0",n:e,o:r}}),kd=v(function(e,r){return{$:"a1",n:e,o:r}}),Mc=v(function(e,r){return{$:"a2",n:e,o:r}}),Br=v(function(e,r){return{$:"a3",n:e,o:r}});k(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function P$(e){return e=="script"?"p":e}function Td(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Dd(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Rd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function z$(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var Ad=v(function(e,r){return r.$==="a0"?t(M$,r.n,Fd(e,r.o)):r});function Fd(e,r){var n=Bc(r);return{$:r.$,a:n?h(yg,n<3?Id:Ed,lr(e),r.a):t(fi,e,r.a)}}var Id=v(function(e,r){return w(e(r.a),r.b)}),Ed=v(function(e,r){return{aA:e(r.aA),dD:r.dD,dt:r.dt}});function Pc(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Zl(r,i,o):r[i]=o;continue}var c=r[a]||(r[a]={});a==="a3"&&i==="class"?Zl(c,i,o):c[i]=o}return r}function Zl(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function yn(e,r){var n=e.$;if(n===5)return yn(e.k||(e.k=e.m()),r);if(n===0)return an.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},c=yn(a,o);return c.elm_event_node_ref=o,c}if(n===3){var c=e.h(e.g);return Fo(c,r,e.d),c}var c=e.f?an.createElementNS(e.f,e.c):an.createElement(e.c);li&&e.c=="a"&&c.addEventListener("click",li(c)),Fo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)Lc(c,yn(n===1?l[u]:l[u].b,r));return c}function Fo(e,r,n){for(var a in n){var i=n[a];a==="a1"?Bd(e,i):a==="a0"?Nd(e,r,i):a==="a3"?Vd(e,i):a==="a4"?jd(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Bd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Vd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function jd(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Nd(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],c=a[i];if(!o){e.removeEventListener(i,c),a[i]=void 0;continue}if(c){var l=c.q;if(l.$===o.$){c.q=o;continue}e.removeEventListener(i,c)}c=Gd(r,o),e.addEventListener(i,c,zc&&{passive:Bc(o)<2}),a[i]=c}}var zc;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){zc=!0}}))}catch{}function Gd(e,r){function n(a){var i=n.q,o=Lr(i.a,a);if(!!Ar(o)){for(var c=Bc(i),l=o.a,u=c?c<3?l.a:l.aA:l,f=c==1?l.b:c==3&&l.dD,m=(f&&a.stopPropagation(),(c==2?l.b:c==3&&l.dt)&&a.preventDefault(),e),d,b;d=m.j;){if(typeof d=="function")u=d(u);else for(var b=d.length;b--;)u=d[b](u);m=m.p}m(u,f)}}return n.q=r,n}function Hd(e,r){return e.$==r.$&&sa(e.a,r.a)}function k$(e,r){var n=[];return Fr(e,r,n,0),n}function nr(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Fr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Qd(r),o=1;else{nr(n,0,a,r);return}switch(o){case 5:for(var c=e.l,l=r.l,u=c.length,f=u===l.length;f&&u--;)f=c[u]===l[u];if(f){r.k=e.k;return}r.k=r.m();var m=[];Fr(e.k,r.k,m,0),m.length>0&&nr(n,1,a,m);return;case 4:for(var d=e.j,b=r.j,s=!1,y=e.k;y.$===4;)s=!0,typeof d!="object"?d=[d,y.j]:d.push(y.j),y=y.k;for(var _=r.k;_.$===4;)s=!0,typeof b!="object"?b=[b,_.j]:b.push(_.j),_=_.k;if(s&&d.length!==b.length){nr(n,0,a,r);return}(s?!Wd(d,b):d!==b)&&nr(n,2,a,b),Fr(y,_,n,a+1);return;case 0:e.a!==r.a&&nr(n,3,a,r.a);return;case 1:Kl(e,r,n,a,Ud);return;case 2:Kl(e,r,n,a,Od);return;case 3:if(e.h!==r.h){nr(n,0,a,r);return}var C=kc(e.d,r.d);C&&nr(n,4,a,C);var L=r.i(e.g,r.g);L&&nr(n,5,a,L);return}}}function Wd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Kl(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){nr(n,0,a,r);return}var o=kc(e.d,r.d);o&&nr(n,4,a,o),i(e,r,n,a)}function kc(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=kc(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var c=e[i],l=r[i];c===l&&i!=="value"&&i!=="checked"||n==="a0"&&Hd(c,l)||(a=a||{},a[i]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Ud(e,r,n,a){var i=e.e,o=r.e,c=i.length,l=o.length;c>l?nr(n,6,a,{v:l,i:c-l}):c<l&&nr(n,7,a,{v:c,e:o});for(var u=c<l?c:l,f=0;f<u;f++){var m=i[f];Fr(m,o[f],n,++a),a+=m.b||0}}function Od(e,r,n,a){for(var i=[],o={},c=[],l=e.e,u=r.e,f=l.length,m=u.length,d=0,b=0,s=a;d<f&&b<m;){var y=l[d],_=u[b],C=y.a,L=_.a,x=y.b,z=_.b,W=void 0,K=void 0;if(C===L){s++,Fr(x,z,i,s),s+=x.b||0,d++,b++;continue}var ae=l[d+1],te=u[b+1];if(ae){var ie=ae.a,re=ae.b;K=L===ie}if(te){var Y=te.a,de=te.b;W=C===Y}if(W&&K){s++,Fr(x,de,i,s),Na(o,i,C,z,b,c),s+=x.b||0,s++,Ga(o,i,C,re,s),s+=re.b||0,d+=2,b+=2;continue}if(W){s++,Na(o,i,L,z,b,c),Fr(x,de,i,s),s+=x.b||0,d+=1,b+=2;continue}if(K){s++,Ga(o,i,C,x,s),s+=x.b||0,s++,Fr(re,z,i,s),s+=re.b||0,d+=2,b+=1;continue}if(ae&&ie===Y){s++,Ga(o,i,C,x,s),Na(o,i,L,z,b,c),s+=x.b||0,s++,Fr(re,de,i,s),s+=re.b||0,d+=2,b+=2;continue}break}for(;d<f;){s++;var y=l[d],x=y.b;Ga(o,i,y.a,x,s),s+=x.b||0,d++}for(;b<m;){var pe=pe||[],_=u[b];Na(o,i,_.a,_.b,void 0,pe),b++}(i.length>0||c.length>0||pe)&&nr(n,8,a,{w:i,x:c,y:pe})}var T$="_elmW6BL";function Na(e,r,n,a,i,o){var c=e[n];if(!c){c={c:0,z:a,r:i,s:void 0},o.push({r:i,A:c}),e[n]=c;return}if(c.c===1){o.push({r:i,A:c}),c.c=2;var l=[];Fr(c.z,a,l,c.r),c.r=i,c.s.s={w:l,A:c};return}Na(e,r,n+T$,a,i,o)}function Ga(e,r,n,a,i){var o=e[n];if(!o){var c=nr(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:c};return}if(o.c===0){o.c=2;var l=[];Fr(a,o.z,l,i),nr(r,9,i,{w:l,A:o});return}Ga(e,r,n+T$,a,i)}function D$(e,r,n,a){Ha(e,r,n,0,0,r.b,a)}function Ha(e,r,n,a,i,o,c){for(var l=n[a],u=l.r;u===i;){var f=l.$;if(f===1)D$(e,r.k,l.s,c);else if(f===8){l.t=e,l.u=c;var m=l.s.w;m.length>0&&Ha(e,r,m,0,i,o,c)}else if(f===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var m=d.w;m.length>0&&Ha(e,r,m,0,i,o,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>o)return a}var b=r.$;if(b===4){for(var s=r.k;s.$===4;)s=s.k;return Ha(e,s,n,a,i+1,o,e.elm_event_node_ref)}for(var y=r.e,_=e.childNodes,C=0;C<y.length;C++){i++;var L=b===1?y[C]:y[C].b,x=i+(L.b||0);if(i<=u&&u<=x&&(a=Ha(_[C],L,n,a,i,x,c),!(l=n[a])||(u=l.r)>o))return a;i=x}return a}function R$(e,r,n,a){return n.length===0?e:(D$(e,r,n,a),ui(e,n))}function ui(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=qd(i,a);i===e&&(e=o)}return e}function qd(e,r){switch(r.$){case 0:return Jd(e,r.s,r.u);case 4:return Fo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ui(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var o=r.s,a=0;a<o.i;a++)e.removeChild(e.childNodes[o.v]);return e;case 7:for(var o=r.s,n=o.e,a=o.v,i=e.childNodes[a];a<n.length;a++)e.insertBefore(yn(n[a],r.u),i);return e;case 9:var o=r.s;if(!o)return e.parentNode.removeChild(e),e;var c=o.A;return typeof c.r!="undefined"&&e.parentNode.removeChild(e),c.s=ui(e,o.w),e;case 8:return Yd(e,r);case 5:return r.s(e);default:Ra(10)}}function Jd(e,r,n){var a=e.parentNode,i=yn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Yd(e,r){var n=r.s,a=Xd(n.y,r);e=ui(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var c=i[o],l=c.A,u=l.c===2?l.s:yn(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&Lc(e,a),e}function Xd(e,r){if(!!e){for(var n=an.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;Lc(n,o.c===2?o.s:yn(o.z,r.u))}return n}}function Tc(e){if(e.nodeType===3)return Ao(e.textContent);if(e.nodeType!==1)return Ao("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,c=i.value;r=Yr(t(Br,o,c),r)}for(var l=e.tagName.toLowerCase(),u=D,f=e.childNodes,a=f.length;a--;)u=Yr(Tc(f[a]),u);return h(sn,l,r,u)}function Qd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Zd=Z(function(e,r,n,a){return Cc(r,a,e.gW,e.ii,e.hW,function(i,o){var c=e.ik,l=a.node,u=Tc(l);return A$(o,function(f){var m=c(f),d=k$(u,m);l=R$(l,u,d,i),u=m})})});Z(function(e,r,n,a){return Cc(r,a,e.gW,e.ii,e.hW,function(i,o){var c=e.dB&&e.dB(i),l=e.ik,u=an.title,f=an.body,m=Tc(f);return A$(o,function(d){li=c;var b=l(d),s=sn("body")(D)(b.fW),y=k$(m,s);f=R$(f,m,y,i),m=s,li=0,u!==b.ic&&(an.title=u=b.ic)})})});var $i=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function A$(e,r){r(e);var n=0;function a(){n=n===1?0:($i(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&$i(a),n=2)}}v(function(e,r){return t(jc,wt,mn(function(){r&&history.go(r),e()}))});v(function(e,r){return t(jc,wt,mn(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(jc,wt,mn(function(){history.replaceState({},"",r),e()}))});var Kd={addEventListener:function(){},removeEventListener:function(){}},ep=typeof window!="undefined"?window:Kd;k(function(e,r,n){return x$(mn(function(a){function i(o){xc(n(o))}return e.addEventListener(r,i,zc&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=Lr(e,r);return Ar(n)?J(n.a):O});function F$(e,r){return mn(function(n){$i(function(){var a=document.getElementById(e);n(a?Qn(r(a)):ld(wg(e)))})})}function rp(e){return mn(function(r){$i(function(){r(Qn(e()))})})}v(function(e,r){return F$(r,function(n){return n[e](),_t})});v(function(e,r){return rp(function(){return ep.scroll(e,r),_t})});k(function(e,r,n){return F$(e,function(a){return a.scrollLeft=r,a.scrollTop=n,_t})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var np=v(function(e,r){var n="g";e.hc&&(n+="m"),e.f4&&(n+="i");try{return J(new RegExp(r,n))}catch{return O}});v(function(e,r){return r.match(e)!==null});var ap=k(function(e,r,n){for(var a=[],i=0,o=n,c=r.lastIndex,l=-1,u;i++<e&&(u=r.exec(o))&&l!=r.lastIndex;){for(var f=u.length-1,m=new Array(f);f>0;){var d=u[f];m[--f]=d?J(d):O}a.push(M(xf,u[0],u.index,i,$(m))),l=r.lastIndex}return r.lastIndex=c,$(a)});Z(function(e,r,n,a){var i=0;function o(c){if(i++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var f=arguments[l];u[--l]=f?J(f):O}return n(M(xf,c,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});k(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;i.push(a.slice(o,l.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=c,$(i)});var tp=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/ip(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function ip(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Dc=new Float64Array(3),eu=new Float64Array(3),ru=new Float64Array(3),op=k(function(e,r,n){return new Float64Array([e,r,n])}),cp=function(e){return e[0]},lp=function(e){return e[1]},up=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var $p=function(e){return new Float64Array([e.ip,e.it,e.dR])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function I$(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(I$);function E$(e,r,n){return n===void 0&&(n=new Float64Array(3)),vi(I$(e,r,n),n)}v(E$);function B$(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function vi(e,r){r===void 0&&(r=new Float64Array(3));var n=1/B$(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var vp=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Wa=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Wa);function Io(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Io);v(function(e,r){var n,a=Dc,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Wa(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Wa(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Wa(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Wa(r,a)+e[14])/n,i});var fp=Z(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var mp=function(e){return{ip:e[0],it:e[1],dR:e[2],fu:e[3]}},sp=function(e){return new Float64Array([e.ip,e.it,e.dR,e.fu])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/dp(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function dp(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var pp=new Float64Array(16),gp=new Float64Array(16),hp=function(e){var r=new Float64Array(16);return r[0]=e.et,r[1]=e.ex,r[2]=e.eB,r[3]=e.eF,r[4]=e.eu,r[5]=e.ey,r[6]=e.eC,r[7]=e.eG,r[8]=e.ev,r[9]=e.ez,r[10]=e.eD,r[11]=e.eH,r[12]=e.ew,r[13]=e.eA,r[14]=e.eE,r[15]=e.eI,r},bp=function(e){return{et:e[0],ex:e[1],eB:e[2],eF:e[3],eu:e[4],ey:e[5],eC:e[6],eG:e[7],ev:e[8],ez:e[9],eD:e[10],eH:e[11],ew:e[12],eA:e[13],eE:e[14],eI:e[15]}};function V$(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2*i/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*i/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(o+i)/(o-i),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*o*i/(o-i),c[15]=0,c}xr(V$);Z(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,c=o*r,l=i*r;return V$(c,l,o,i,n,a)});function j$(e,r,n,a,i,o){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(o-i),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(o+i)/(o-i),c[15]=1,c}xr(j$);Z(function(e,r,n,a){return j$(e,r,n,a,-1,1)});function N$(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[3],l=e[4],u=e[5],f=e[6],m=e[7],d=e[8],b=e[9],s=e[10],y=e[11],_=e[12],C=e[13],L=e[14],x=e[15],z=r[0],W=r[1],K=r[2],ae=r[3],te=r[4],ie=r[5],re=r[6],Y=r[7],de=r[8],pe=r[9],ke=r[10],Se=r[11],me=r[12],Te=r[13],F=r[14],I=r[15];return n[0]=a*z+l*W+d*K+_*ae,n[1]=i*z+u*W+b*K+C*ae,n[2]=o*z+f*W+s*K+L*ae,n[3]=c*z+m*W+y*K+x*ae,n[4]=a*te+l*ie+d*re+_*Y,n[5]=i*te+u*ie+b*re+C*Y,n[6]=o*te+f*ie+s*re+L*Y,n[7]=c*te+m*ie+y*re+x*Y,n[8]=a*de+l*pe+d*ke+_*Se,n[9]=i*de+u*pe+b*ke+C*Se,n[10]=o*de+f*pe+s*ke+L*Se,n[11]=c*de+m*pe+y*ke+x*Se,n[12]=a*me+l*Te+d*F+_*I,n[13]=i*me+u*Te+b*F+C*I,n[14]=o*me+f*Te+s*F+L*I,n[15]=c*me+m*Te+y*F+x*I,n}v(N$);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=e[4],l=e[5],u=e[6],f=e[8],m=e[9],d=e[10],b=e[12],s=e[13],y=e[14],_=r[0],C=r[1],L=r[2],x=r[4],z=r[5],W=r[6],K=r[8],ae=r[9],te=r[10],ie=r[12],re=r[13],Y=r[14];return n[0]=a*_+c*C+f*L,n[1]=i*_+l*C+m*L,n[2]=o*_+u*C+d*L,n[3]=0,n[4]=a*x+c*z+f*W,n[5]=i*x+l*z+m*W,n[6]=o*x+u*z+d*W,n[7]=0,n[8]=a*K+c*ae+f*te,n[9]=i*K+l*ae+m*te,n[10]=o*K+u*ae+d*te,n[11]=0,n[12]=a*ie+c*re+f*Y+b,n[13]=i*ie+l*re+m*Y+s,n[14]=o*ie+u*re+d*Y+y,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=vi(r,Dc);var a=r[0],i=r[1],o=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=i*a*l+o*u,n[2]=o*a*l-i*u,n[3]=0,n[4]=a*i*l-o*u,n[5]=i*i*l+c,n[6]=i*o*l+a*u,n[7]=0,n[8]=a*o*l+i*u,n[9]=i*o*l-a*u,n[10]=o*o*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});k(function(e,r,n){var a=new Float64Array(16),i=1/B$(r),o=r[0]*i,c=r[1]*i,l=r[2]*i,u=Math.cos(e),f=1-u,m=Math.sin(e),d=o*m,b=c*m,s=l*m,y=o*c*f,_=o*l*f,C=c*l*f,L=o*o*f+u,x=y+s,z=_-b,W=y-s,K=c*c*f+u,ae=C+d,te=_+b,ie=C-d,re=l*l*f+u,Y=n[0],de=n[1],pe=n[2],ke=n[3],Se=n[4],me=n[5],Te=n[6],F=n[7],I=n[8],E=n[9],B=n[10],V=n[11],j=n[12],N=n[13],G=n[14],Ge=n[15];return a[0]=Y*L+Se*x+I*z,a[1]=de*L+me*x+E*z,a[2]=pe*L+Te*x+B*z,a[3]=ke*L+F*x+V*z,a[4]=Y*W+Se*K+I*ae,a[5]=de*W+me*K+E*ae,a[6]=pe*W+Te*K+B*ae,a[7]=ke*W+F*K+V*ae,a[8]=Y*te+Se*ie+I*re,a[9]=de*te+me*ie+E*re,a[10]=pe*te+Te*ie+B*re,a[11]=ke*te+F*ie+V*re,a[12]=j,a[13]=N,a[14]=G,a[15]=Ge,a});function _p(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}k(_p);Z(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function yp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}k(yp);Z(function(e,r,n,a){var i=new Float64Array(16),o=a[0],c=a[1],l=a[2],u=a[3],f=a[4],m=a[5],d=a[6],b=a[7],s=a[8],y=a[9],_=a[10],C=a[11];return i[0]=o,i[1]=c,i[2]=l,i[3]=u,i[4]=f,i[5]=m,i[6]=d,i[7]=b,i[8]=s,i[9]=y,i[10]=_,i[11]=C,i[12]=o*e+f*r+s*n+a[12],i[13]=c*e+m*r+y*n+a[13],i[14]=l*e+d*r+_*n+a[14],i[15]=u*e+b*r+C*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],c=r[0],l=r[1],u=r[2],f=r[3],m=r[4],d=r[5],b=r[6],s=r[7],y=r[8],_=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=f,n[4]=m,n[5]=d,n[6]=b,n[7]=s,n[8]=y,n[9]=_,n[10]=C,n[11]=L,n[12]=c*a+m*i+y*o+r[12],n[13]=l*a+d*i+_*o+r[13],n[14]=u*a+b*i+C*o+r[14],n[15]=f*a+s*i+L*o+r[15],n});k(function(e,r,n){var a=E$(e,r,Dc),i=vi(Io(n,a,eu),eu),o=vi(Io(a,i,ru),ru),c=pp,l=gp;return c[0]=i[0],c[1]=o[0],c[2]=a[0],c[3]=0,c[4]=i[1],c[5]=o[1],c[6]=a[1],c[7]=0,c[8]=i[2],c[9]=o[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,N$(c,l)});k(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var nu=0;function it(e,r){for(;r.b;r=r.b)e(r.a)}function Rc(e){for(var r=0;e.b;e=e.b)r++;return r}var wp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},xp=Je(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),Sp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),Cp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),Lp=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),Mp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),Pp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),zp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),kp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Tp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Dp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Rp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Ap=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Fp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},G$=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},H$=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ip=function(e){e.gl.disable(e.gl.CULL_FACE)},Ep=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Bp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Vp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},au=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],jp=[Rp,Ap,Fp,G$,H$,Ip,Ep,Bp,Vp];function tu(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Np(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function W$(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Gp(e,r,n,a){for(var i=n.a.d1,o=[],c=0;c<i;c++)o.push(String.fromCharCode(97+c));function l(s,y,_,C,L){var x;if(i===1)for(x=0;x<y;x++)s[_++]=y===1?C[L]:C[L][x];else o.forEach(function(z){for(x=0;x<y;x++)s[_++]=y===1?C[z][L]:C[z][L][x]})}var u=W$(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var f=0,m=u.size*u.arraySize*i,d=new u.type(Rc(n.b)*m);it(function(s){l(d,u.size*u.arraySize,f,s,a[r.name]||r.name),f+=m},n.b);var b=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,b),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),b}function Hp(e,r){if(r.a.ee>0){var n=e.createBuffer(),a=Wp(r.c,r.a.ee);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d1*Rc(r.b),indexBuffer:null,buffers:{}}}function Wp(e,r){var n=new Uint32Array(Rc(e)*r),a=0,i;return it(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function iu(e,r){return e+"#"+r}var U$=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),G$(n),H$(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var c,l,u;if(o.b.id&&o.c.id&&(c=iu(o.b.id,o.c.id),l=n.programs[c]),!l){var f;o.b.id?f=n.shaders[o.b.id]:o.b.id=nu++,f||(f=tu(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=f);var m;o.c.id?m=n.shaders[o.c.id]:o.c.id=nu++,m||(m=tu(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=m);var d=Np(a,f,m);l={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Up(a,e,l,Object.assign({},o.b.uniforms,o.c.uniforms));var b=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<b;u++){var s=a.getActiveAttrib(d,u),y=a.getAttribLocation(d,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(y)}c=iu(o.b.id,o.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Op(l.uniformSetters,o.e);var _=n.buffers.get(o.d);for(_||(_=Hp(a,o.d),n.buffers.set(o.d,_)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],y=l.activeAttributeLocations[u],_.buffers[s.name]===void 0&&(_.buffers[s.name]=Gp(a,s,o.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,_.buffers[s.name]);var C=W$(a,s.type);if(C.arraySize===1)a.enableVertexAttribArray(y),a.vertexAttribPointer(y,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,x=L*C.arraySize,z=0;z<C.arraySize;z++)a.enableVertexAttribArray(y+z),a.vertexAttribPointer(y+z,C.size,C.baseType,!1,x,L*z)}for(n.toggle=!n.toggle,it(v2(n),o.a),u=0;u<au.length;u++){var W=n[au[u]];W.toggle!==n.toggle&&W.enabled&&(jp[u](n),W.enabled=!1,W.toggle=n.toggle)}_.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,_.indexBuffer),a.drawElements(o.d.a.eR,_.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eR,0,_.numIndices)}}return it(i,e.g),r});function Up(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,c=0,l=r.f;function u(s,y){var _=y.name,C=e.getUniformLocation(s,_);switch(y.type){case e.INT:return function(x){o[_]!==x&&(e.uniform1i(C,x),o[_]=x)};case e.FLOAT:return function(x){o[_]!==x&&(e.uniform1f(C,x),o[_]=x)};case e.FLOAT_VEC2:return function(x){o[_]!==x&&(e.uniform2f(C,x[0],x[1]),o[_]=x)};case e.FLOAT_VEC3:return function(x){o[_]!==x&&(e.uniform3f(C,x[0],x[1],x[2]),o[_]=x)};case e.FLOAT_VEC4:return function(x){o[_]!==x&&(e.uniform4f(C,x[0],x[1],x[2],x[3]),o[_]=x)};case e.FLOAT_MAT4:return function(x){o[_]!==x&&(e.uniformMatrix4fv(C,!1,new Float32Array(x)),o[_]=x)};case e.SAMPLER_2D:var L=c++;return function(x){e.activeTexture(e.TEXTURE0+L);var z=l.textures.get(x);z||(z=x.gh(e),l.textures.set(x,z)),e.bindTexture(e.TEXTURE_2D,z),o[_]!==x&&(e.uniform1i(C,L),o[_]=x)};case e.BOOL:return function(x){o[_]!==x&&(e.uniform1i(C,x),o[_]=x)};default:return function(){}}}for(var f={},m=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<m;d++){var b=e.getActiveUniform(i,d);f[a[b.name]||b.name]=u(i,b)}return f}function Op(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var qp=k(function(e,r,n){return Md(r,{g:n,f:{},h:e},eg,rg)}),Jp=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Yp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Xp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Qp=v(function(e,r){e.contextAttributes.antialias=!0}),Zp=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Kp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function eg(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};it(function(i){return t($2,r,i)},e.h);var n=an.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),wp(function(){return t(U$,e,n)})):(n=an.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function rg(e,r){return r.f=e.f,U$(r)}var P=vs,Et=ls,O$=k(function(e,r,n){var a=n.c,i=n.d,o=v(function(c,l){if(c.$){var f=c.a;return h(Et,e,l,f)}else{var u=c.a;return h(Et,o,l,u)}});return h(Et,o,h(Et,e,r,i),a)}),Ri=k(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,c=n.e,l=e,u=h(e,a,i,h(Ri,e,r,c)),f=o;e=l,r=u,n=f;continue e}}),ou=function(e){return h(Ri,k(function(r,n,a){return t(P,w(r,n),a)}),D,e)},ng=function(e){return h(Ri,k(function(r,n,a){return t(P,r,a)}),D,e)},ag=function(e){var r=e;return ng(r)},q$=1,tg=2,J$=0,tr=function(e){return{$:1,a:e}},Ac=v(function(e,r){return{$:3,a:e,b:r}}),cu=v(function(e,r){return{$:0,a:e,b:r}}),Y$=v(function(e,r){return{$:1,a:e,b:r}}),We=function(e){return{$:0,a:e}},ig=function(e){return{$:2,a:e}},J=function(e){return{$:0,a:e}},O={$:1},og=Es,cg=ad,T=_$,le=v(function(e,r){return t(Rs,e,Di(r))}),Fc=v(function(e,r){return $(t(Ds,e,r))}),X$=function(e){return t(le,`
    `,t(Fc,`
`,e))},Ne=k(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,c=t(e,a,r),l=i;e=o,r=c,n=l;continue e}else return r}),On=function(e){return h(Ne,v(function(r,n){return n+1}),0,e)},lg=fs,ug=k(function(e,r,n){e:for(;;)if(he(e,r)<1){var a=e,i=r-1,o=t(P,r,n);e=a,r=i,n=o;continue e}else return n}),tn=v(function(e,r){return h(ug,e,r,D)}),Q$=v(function(e,r){return h(lg,e,t(tn,0,On(r)-1),r)}),qr=Ws,Z$=function(e){var r=qr(e);return 97<=r&&r<=122},K$=function(e){var r=qr(e);return r<=90&&65<=r},$g=function(e){return Z$(e)||K$(e)},vg=function(e){var r=qr(e);return r<=57&&48<=r},fg=function(e){return Z$(e)||K$(e)||vg(e)},mr=function(e){return h(Ne,P,D,e)},Aa=Ps,mg=v(function(e,r){return`

(`+(T(e+1)+(") "+X$(sg(r))))}),sg=function(e){return t(dg,e,D)},dg=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var _=Aa(n);if(_.$===1)return!1;var C=_.a,L=C.a,x=C.b;return $g(L)&&t(og,fg,x)}(),i=a?"."+n:"['"+(n+"']"),u=c,f=t(P,i,r);e=u,r=f;continue e;case 1:var o=e.a,c=e.b,l="["+(T(o)+"]"),u=c,f=t(P,l,r);e=u,r=f;continue e;case 2:var m=e.a;if(m.b)if(m.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+t(le,"",mr(r)):"Json.Decode.oneOf"}(),y=d+(" failed in the following "+(T(On(m))+" ways:"));return t(le,`

`,t(P,y,t(Q$,mg,m)))}else{var c=m.a,u=c,f=r;e=u,r=f;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(le,"",mr(r)):"!"}();default:var b=e.a,s=e.b,y=function(){return r.b?"Problem with the value at json"+(t(le,"",mr(r))+`:

    `):`Problem with the given value:

`}();return y+(X$(t(cg,4,s))+(`

`+b))}}),yr=32,Eo=Z(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Bo=as,ot=ys,Ic=v(function(e,r){return Ol(r)/Ol(e)}),Ua=bs,ct=ot(t(Ic,2,yr)),ev=M(Eo,0,ct,Bo,Bo),rv=is,nv=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var av=ws,Vo=ts,rr=v(function(e,r){return he(e,r)>0?e:r}),pg=function(e){return{$:0,a:e}},Ec=os,gg=v(function(e,r){e:for(;;){var n=t(Ec,yr,e),a=n.a,i=n.b,o=t(P,pg(a),r);if(i.b){var c=i,l=o;e=c,r=l;continue e}else return mr(o)}}),tv=function(e){var r=e.a;return r},hg=v(function(e,r){e:for(;;){var n=ot(r/yr);if(n===1)return t(Ec,yr,e).a;var a=t(gg,e,D),i=n;e=a,r=i;continue e}}),iv=v(function(e,r){if(r.n){var n=r.n*yr,a=av(t(Ic,yr,n-1)),i=e?mr(r.C):r.C,o=t(hg,i,r.n);return M(Eo,Vo(r.r)+n,t(rr,5,a*ct),o,r.r)}else return M(Eo,Vo(r.r),ct,Bo,r.r)}),bg=Je(function(e,r,n,a,i){e:for(;;){if(r<0)return t(iv,!1,{C:a,n:n/yr|0,r:i});var o=nv(h(rv,yr,r,e)),c=e,l=r-yr,u=n,f=t(P,o,a),m=i;e=c,r=l,n=u,a=f,i=m;continue e}}),_g=v(function(e,r){if(e<=0)return ev;var n=e%yr,a=h(rv,n,e-n,r),i=e-n-yr;return R(bg,r,i,e,D,a)}),Ar=function(e){return!e.$},ee=Ks,Me=Js,Q=Zs,Ue=Ys,ov=v(function(e,r){return{b8:r.b8,ge:e,cV:r.cV,gs:r.gs,ek:r.ek,bL:r.bL,bN:r.bN,il:r.il}}),fi=ed,yg=rd,lr=Os,Bc=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Er=function(e){return e},wg=Er,lu=xr(function(e,r,n,a,i,o){return{d7:o,ec:r,e_:a,e1:n,e5:e,e6:i}}),xg=Bs,Nn=zs,da=As,yt=v(function(e,r){return e<1?r:h(da,e,Nn(r),r)}),Ai=js,Fi=function(e){return e===""},Ii=v(function(e,r){return e<1?"":h(da,0,e,r)}),cv=Ns,uu=Je(function(e,r,n,a,i){if(Fi(i)||t(xg,"@",i))return O;var o=t(Ai,":",i);if(o.b){if(o.b.b)return O;var c=o.a,l=cv(t(yt,c+1,i));if(l.$===1)return O;var u=l;return J(ar(lu,e,t(Ii,c,i),u,r,n,a))}else return J(ar(lu,e,i,O,r,n,a))}),$u=Z(function(e,r,n,a){if(Fi(a))return O;var i=t(Ai,"/",a);if(i.b){var o=i.a;return R(uu,e,t(yt,o,a),r,n,t(Ii,o,a))}else return R(uu,e,"/",r,n,a)}),vu=k(function(e,r,n){if(Fi(n))return O;var a=t(Ai,"?",n);if(a.b){var i=a.a;return M($u,e,J(t(yt,i+1,n)),r,t(Ii,i,n))}else return M($u,e,O,r,n)});v(function(e,r){if(Fi(r))return O;var n=t(Ai,"#",r);if(n.b){var a=n.a;return h(vu,e,J(t(yt,a+1,r)),t(Ii,a,r))}else return h(vu,e,O,r)});var Sg=Vs,wt=function(e){},xt=Qn,Cg=xt(0),lv=Z(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var c=o.a,l=o.b;if(l.b){var u=l.a,f=l.b;if(f.b){var m=f.a,d=f.b,b=n>500?h(Ne,e,r,mr(d)):M(lv,e,r,n+1,d);return t(e,i,t(e,c,t(e,u,t(e,m,b))))}else return t(e,i,t(e,c,t(e,u,r)))}else return t(e,i,t(e,c,r))}else return t(e,i,r)}else return r}),Ke=k(function(e,r,n){return M(lv,e,r,0,n)}),ne=v(function(e,r){return h(Ke,v(function(n,a){return t(P,e(n),a)}),D,r)}),mi=Ro,Vc=v(function(e,r){return t(mi,function(n){return xt(e(n))},r)}),Lg=k(function(e,r,n){return t(mi,function(a){return t(mi,function(i){return xt(t(e,a,i))},n)},r)}),Mg=function(e){return h(Ke,Lg(P),xt(D),e)},Pg=pd,zg=v(function(e,r){var n=r;return x$(t(mi,Pg(e),n))}),kg=k(function(e,r,n){return t(Vc,function(a){return 0},Mg(t(ne,zg(e),r)))}),Tg=k(function(e,r,n){return xt(0)}),Dg=v(function(e,r){var n=r;return t(Vc,e,n)});Or.Task=sd(Cg,kg,Tg,Dg);var Rg=C$("Task"),jc=v(function(e,r){return Rg(t(Vc,e,r))}),Ag=Zd,Fg=Ls,si={$:1},uv=function(e){return{$:2,a:e}},Nc={$:0},Pr=v(function(e,r){return{$:0,a:e,b:r}}),Xe=k(function(e,r,n){return r(e(n))}),Zn=function(e){var r=e.b.s;return r.a},Ig=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,c=i.b;return J(t(Pr,r,{s:o,an:c,X:t(P,a,n)}))}else return O},Fe=v(function(e,r){if(r.$)return e;var n=r.a;return n}),Eg=k(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dE;return(he(o+r.gs,Zn(n).b8)>0?t(Xe,Ig,Fe(t(Pr,si,i))):Er)(t(Pr,uv({dE:o+r.gs}),i));default:var c=i.s,l=c.a,u=c.b,f=t(ov,l.ge,Re(r,{b8:l.b8+r.gs})),m=t(e,f,u);return t(Pr,Nc,{s:w(f,m),an:D,X:t(P,i.s,i.X)})}}),$v=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),Bg=k(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,c=i,l=t(P,a,n);e=o,r=c,n=l;continue e}else return n}}),Vg=v(function(e,r){return mr(h(Bg,e,r,D))}),vv=k(function(e,r,n){if(r<=0)return D;{var a=w(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,x=i.a,o=i.b,c=o.a;return $([x,c]);case 3:if(a.b.b.b.b){var l=a.b,x=l.a,u=l.b,c=u.a,f=u.b,m=f.a;return $([x,c,m])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,x=d.a,b=d.b,c=b.a,s=b.b,m=s.a,y=s.b,_=y.a,C=y.b;return e>1e3?t(P,x,t(P,c,t(P,m,t(P,_,t(Vg,r-4,C))))):t(P,x,t(P,c,t(P,m,t(P,_,h(vv,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,x=L.a;return $([x])}}),jg=v(function(e,r){return h(vv,0,e,r)}),Ng=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=X(mr(n),X($([a]),i)),c=t(jg,e,o),l=t($v,e,o);if(l.b){var u=l.a,f=l.b;return t(Pr,si,{s:u,an:f,X:mr(c)})}else{var m=mr(c);if(m.b){var d=m.a,b=m.b;return t(Pr,si,{s:d,an:D,X:b})}else return r}}),Gg=function(e){var r=e.b;return t(Pr,si,r)},Hg=function(e){var r=e.b;return t(Pr,uv({dE:Zn(e).b8}),r)},Wg=function(e){var r=e.b;return t(Pr,Nc,r)},Ug=v(function(e,r){switch(e.$){case 1:return Gg(r);case 2:return Wg(r);case 3:return Hg(r);default:var n=e.a;return t(Ng,n,r)}}),di=v(function(e,r){var n=r.a,a=r.b;return w(e(n),a)}),Og=v(function(e,r){return Re(r,{aN:e(r.aN)})}),qg=function(e){return{$:3,a:e}},Jg=function(e){return{$:2,a:e}},Yg=v(function(e,r){return{$:0,a:e,b:r}}),Xg=v(function(e,r){return{$:1,a:e,b:r}}),je=v(function(e,r){if(r.$)return O;var n=r.a;return J(e(n))}),be=function(e){return e<0?-e:e},fv=Gs,Qg=k(function(e,r,n){return t(Fe,0/0,fv(t(e,r,n)))}),St=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),Zg=Ts,mv=function(e){return h(Zg,P,D,e)},Kg=v(function(e,r){var n=t(St,function(a){return a!=="0"&&a!=="."},mv(r));return X(e&&n?"-":"",r)}),ve=_$,jo=Ms,sv=Us,dv=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Aa(n);if(a.$===1)return"01";var i=a.a;return t(jo,"0",dv(i))}else{var o=qr(r);return o>=48&&o<57?t(jo,sv(o+1),n):"0"}},No=_s,e0=Cs,Ei=function(e){return t(jo,e,"")},pv=k(function(e,r,n){return e<=0?n:h(pv,e>>1,X(r,r),e&1?X(n,r):n)}),lt=v(function(e,r){return h(pv,e,r,"")}),Go=k(function(e,r,n){return X(n,t(lt,e-Nn(n),Ei(r)))}),Ho=ks,gv=function(e){var r=t(Fc,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return w(n,i)}else{var n=r.a;return w(n,"0")}else return w("0","0")},r0=function(e){var r=t(Fc,"e",ve(be(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Fe,0,cv(t(Sg,"+",i)?t(yt,1,i):i)),c=gv(n),l=c.a,u=c.b,f=X(l,u),m=o<0?t(Fe,"0",t(je,function(d){var b=d.a,s=d.b;return b+("."+s)},t(je,di(Ei),Aa(X(t(lt,be(o),"0"),f))))):h(Go,o+1,"0",f);return X(e<0?"-":"",m)}else{var n=r.a;return X(e<0?"-":"",n)}else return""},n0=k(function(e,r,n){if(No(n)||e0(n))return ve(n);var a=n<0,i=gv(r0(be(n))),o=i.a,c=i.b,l=Nn(o)+r,u=X(t(lt,-l+1,"0"),h(Go,l,"0",X(o,c))),f=Nn(u),m=t(rr,1,l),d=t(e,a,h(da,m,f,u)),b=h(da,0,m,u),s=d?Ho(t(Fe,"1",t(je,dv,Aa(Ho(b))))):b,y=Nn(s),_=s==="0"?s:r<=0?X(s,t(lt,be(r),"0")):he(r,Nn(c))<0?h(da,0,y-r,s)+("."+h(da,y-r,y,s)):X(o+".",h(Go,r,"0",c));return t(Kg,a,_)}),hv=n0(v(function(e,r){var n=Aa(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(qr(i))})),a0=Qg(hv),t0=k(function(e,r,n){var a=t(Ic,10,be(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(a0,i,n)}),bv=$s,Gc=v(function(e,r){e:for(;;){if(r.$===-2)return O;var n=r.b,a=r.c,i=r.d,o=r.e,c=t(bv,e,n);switch(c){case 0:var l=e,u=i;e=l,r=u;continue e;case 1:return J(a);default:var l=e,u=o;e=l,r=u;continue e}}}),fe=Je(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Xr={$:-2},La=Je(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,c=i.c,l=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var f=a.b,m=a.c,d=a.d,b=a.e;return R(fe,0,r,n,R(fe,1,f,m,d,b),R(fe,1,o,c,l,u))}else return R(fe,e,o,c,R(fe,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var f=a.b,m=a.c,s=a.d;s.a;var y=s.b,_=s.c,C=s.d,L=s.e,b=a.e;return R(fe,0,f,m,R(fe,1,y,_,C,L),R(fe,1,r,n,b,i))}else return R(fe,e,r,n,a,i)}),Wo=k(function(e,r,n){if(n.$===-2)return R(fe,0,e,r,Xr,Xr);var a=n.a,i=n.b,o=n.c,c=n.d,l=n.e,u=t(bv,e,i);switch(u){case 0:return R(La,a,i,o,h(Wo,e,r,c),l);case 1:return R(fe,a,i,r,c,l);default:return R(La,a,i,o,c,h(Wo,e,r,l))}}),Za=k(function(e,r,n){var a=h(Wo,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,c=a.d,l=a.e;return R(fe,1,i,o,c,l)}else{var u=a;return u}}),i0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},_v=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d,u=i.e,f=e.e;f.a;var m=f.b,d=f.c,b=f.d;b.a;var s=b.b,y=b.c,_=b.d,C=b.e,L=f.e;return R(fe,0,s,y,R(fe,1,n,a,R(fe,0,o,c,l,u),_),R(fe,1,m,d,C,L))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,l=x.d,u=x.e,z=e.e;z.a;var m=z.b,d=z.c,b=z.d,L=z.e;return R(fe,1,n,a,R(fe,0,o,c,l,u),R(fe,0,m,d,b,L))}else return e},fu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,c=i.c,l=i.d;l.a;var u=l.b,f=l.c,m=l.d,d=l.e,b=i.e,s=e.e;s.a;var y=s.b,_=s.c,C=s.d,L=s.e;return R(fe,0,o,c,R(fe,1,u,f,m,d),R(fe,1,n,a,b,R(fe,0,y,_,C,L)))}else{var r=e.a,n=e.b,a=e.c,x=e.d;x.a;var o=x.b,c=x.c,z=x.d,b=x.e,W=e.e;W.a;var y=W.b,_=W.c,C=W.d,L=W.e;return R(fe,1,n,a,R(fe,0,o,c,z,b),R(fe,0,y,_,C,L))}else return e},o0=Ti(function(e,r,n,a,i,o,c){if(o.$===-1&&!o.a){o.a;var l=o.b,u=o.c,f=o.d,m=o.e;return R(fe,n,l,u,f,R(fe,0,a,i,m,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,fu(r)}else break e;else return c.a,c.d,fu(r);else break e;return r}}),Qt=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,c=i.d,l=e.e;if(o===1){if(c.$===-1&&!c.a)return c.a,R(fe,r,n,a,Qt(i),l);var u=_v(e);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return R(La,f,m,d,Qt(b),s)}else return Xr}else return R(fe,r,n,a,Qt(i),l)}else return Xr},Ka=v(function(e,r){if(r.$===-2)return Xr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(he(e,a)<0)if(o.$===-1&&o.a===1){o.a;var l=o.d;if(l.$===-1&&!l.a)return l.a,R(fe,n,a,i,t(Ka,e,o),c);var u=_v(r);if(u.$===-1){var f=u.a,m=u.b,d=u.c,b=u.d,s=u.e;return R(La,f,m,d,t(Ka,e,b),s)}else return Xr}else return R(fe,n,a,i,t(Ka,e,o),c);else return t(c0,e,yc(o0,e,r,n,a,i,o,c))}),c0=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;if(_e(e,a)){var l=i0(c);if(l.$===-1){var u=l.b,f=l.c;return R(La,n,u,f,o,Qt(c))}else return Xr}else return R(La,n,a,i,o,t(Ka,e,c))}else return Xr}),yv=v(function(e,r){var n=t(Ka,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,c=n.e;return R(fe,1,a,i,o,c)}else{var l=n;return l}}),Bt=k(function(e,r,n){var a=r(t(Gc,e,n));if(a.$)return t(yv,e,n);var i=a.a;return h(Za,e,i,n)}),l0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(Bt,r,je(function(a){if(a.$===1){var i=a.a,o=i.a,c=i.b;return t(Xg,w(o,c),n)}else return a}));case 0:var r=e.a,n=e.b;return t(Bt,r,je(function(a){if(a.$)return a;var i=a.a,o=i.a,c=i.b;return t(Yg,w(o,c),h(t0,o,c,n))}));case 3:var r=e.a,n=e.b;return t(Bt,r,je(function(a){return a.$===3?qg(n):a}));default:var r=e.a,n=e.b;return t(Bt,r,je(function(a){return a.$===2?Jg(n):a}))}},u0=function(e){return Og(l0(e))},$0=v(function(e,r){return t(ne,u0(e),r)}),v0=v(function(e,r){return Re(r,{ge:t($0,e,r.ge)})}),f0=v(function(e,r){var n=r.a,a=r.b;return t(Pr,n,Re(a,{s:t(di,v0(e),a.s)}))}),Uo=v(function(e,r){var n=r.a,a=r.b;return w(n,e(a))}),m0=k(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(Pr,a,Re(i,{s:t(Uo,t(e,o.a,r),o)}))}),s0=Z(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Re(a,{bx:!a.bx});case 2:var i=n.a;return Re(a,{R:h(Eg,e,i,a.R)});case 3:var o=n.a;return Re(a,{bq:o});case 4:var c=n.a;return Re(a,{R:t(f0,c,a.R)});case 5:var l=n.a;return Re(a,{R:h(m0,r,l,a.R)});default:var u=n.a;return Re(a,{R:t(Ug,u,a.R)})}}),d0=v(function(e,r){return t(Pr,Nc,{s:w(e,r(e)),an:D,X:D})}),p0=gd,mu=p0(D),g0=function(e){return{$:2,a:e}},pi=Qs,Ma=Xs,h0=wd("tick",t(ee,function(e){return t(ee,function(r){return t(ee,function(n){return t(ee,function(a){return t(ee,function(i){return t(ee,function(o){return t(ee,function(c){return lr({b8:c,cV:o,gs:i,ek:a,bL:n,bN:r,il:e})},t(Q,"clock",Ue))},t(Q,"devicePixelRatio",Ue))},t(Q,"dt",Ue))},t(Q,"keyboard",t(ee,function(a){return t(ee,function(i){return t(ee,function(o){return t(ee,function(c){return t(ee,function(l){return t(ee,function(u){return t(ee,function(f){return t(ee,function(m){return t(ee,function(d){return lr({fK:d,gg:m,d0:f,gr:u,g4:l,hr:c,hx:o,fc:i,fm:a})},t(Q,"alt",Me))},t(Q,"control",Me))},t(Q,"down",Me))},t(Q,"downs",pi(Ma)))},t(Q,"left",Me))},t(Q,"pressedKeys",pi(Ma)))},t(Q,"right",Me))},t(Q,"shift",Me))},t(Q,"up",Me))))},t(Q,"pointer",t(ee,function(n){return t(ee,function(a){return t(ee,function(i){return t(ee,function(o){return t(ee,function(c){return t(ee,function(l){return t(ee,function(u){return t(ee,function(f){return lr({d0:f,c_:u,hb:l,hy:c,hz:o,fm:i,ip:a,it:n})},t(Q,"down",Me))},t(Q,"isDown",Me))},t(Q,"move",Me))},t(Q,"rightDown",Me))},t(Q,"rightUp",Me))},t(Q,"up",Me))},t(Q,"x",Ue))},t(Q,"y",Ue))))},t(Q,"screen",t(ee,function(r){return t(ee,function(n){return lr({gL:n,$9:r})},t(Q,"height",Ue))},t(Q,"width",Ue))))},t(Q,"wheel",t(ee,function(e){return t(ee,function(r){return lr({gk:r,gl:e})},t(Q,"deltaX",Ue))},t(Q,"deltaY",Ue))))),b0=function(e){return e.dK,h0(g0)},_0=function(e){return{$:5,a:e}},y0={$:0},gi=v(function(e,r){return e}),w0=function(e){var r=e.b.s;return r.b},x0=function(e){return{$:1,a:e}},S0=x0,wv=function(e){return{$:8,a:e}},xe=wv,ut=function(e){return{$:0,a:e}},Ct=k(function(e,r,n){return e(r(n))}),C0=t(Ct,ut,gi),bn=C0,Ie=function(e){return{$:1,a:e}},en=Ie,xv=v(function(e,r){return{$:9,a:e,b:r}}),qn={$:0},Sv=v(function(e,r){return r.$===3?qn:t(xv,e,r)}),Oo=function(e){return t(Sv,4,e)},p={fz:"a",cL:"atv",fB:"ab",fC:"cx",fD:"cy",fE:"acb",fF:"accx",fG:"accy",fH:"acr",dU:"al",dV:"ar",fI:"at",cM:"ah",cN:"av",fM:"s",fS:"bh",fT:"b",fX:"w7",fZ:"bd",f_:"bdt",b4:"bn",f$:"bs",b7:"cpe",f9:"cp",gb:"cpx",gc:"cpy",aw:"c",cc:"ctr",cd:"cb",ce:"ccx",ax:"ccy",bu:"cl",cf:"cr",gf:"ct",gi:"cptr",gj:"ctxt",gB:"fcs",d6:"focus-within",gC:"fs",gG:"g",cX:"hbh",cY:"hc",ea:"he",cZ:"hf",eb:"hfp",gO:"hv",gR:"ic",gT:"fr",cl:"lbl",gX:"iml",gY:"imlf",gZ:"imlp",g_:"implw",g$:"it",g3:"i",es:"lnk",bf:"nb",eT:"notxt",hh:"ol",hi:"or",aV:"oq",hn:"oh",eX:"pg",eY:"p",ho:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hK:"e",hL:"cap",hN:"sev",hT:"sk",Y:"t",h_:"tc",h$:"w8",h0:"w2",h1:"w9",h2:"tj",cH:"tja",h3:"tl",h4:"w3",h5:"w5",h6:"w4",h7:"tr",h8:"w6",h9:"w1",ia:"tun",fk:"ts",a0:"clr",ih:"u",dL:"wc",fv:"we",dM:"wf",fw:"wfp",dN:"wrp"},Hc=w$,Tr=v(function(e,r){return t(Mc,e,Hc(r))}),Mr=Tr("className"),_r=function(e){return Ie(Mr(e))},Cv=v(function(e,r){return{$:2,a:e,b:r}}),L0=v(function(e,r){return{$:1,a:e,b:r}}),er=function(e){return{$:0,a:e}},wr=2,M0={$:0},Kn=M0,P0={$:0},z0=p.fM+(" "+p.aw),k0=p.fM+(" "+p.gG),T0=p.fM+(" "+p.eX),D0=p.fM+(" "+p.eY),R0=p.fM+(" "+p.af),A0=p.fM+(" "+p.hK),F0=function(e){switch(e){case 0:return R0;case 1:return z0;case 2:return A0;case 3:return k0;case 4:return D0;default:return T0}},su=function(e){return{$:1,a:e}},jn={$:0},qo=function(e){return{$:1,a:e}},du=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return X(n,e);case 2:var a=r.a;return X(e,a);default:var n=r.a,a=r.b;return X(n,X(e,a))}}),pu=k(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return X(t(ne,function(o){return w(e,o)},a),r);case 2:var i=n.a;return X(r,t(ne,function(o){return w(e,o)},i));default:var a=n.a,i=n.b;return X(t(ne,function(o){return w(e,o)},a),X(r,t(ne,function(o){return w(e,o)},i)))}}),Vt=4,I0=function(e){return{$:0,a:e}},E0=function(e){return{$:1,a:e}},we=function(e){return e>31?E0(1<<e-32):I0(1<<e)},Lv=we(41),Mv=we(40),Pv=we(42),zv=we(43),Pa=sn("div"),kv=Xr,Wc=kv,Wr=function(e){switch(e.$){case 0:var r=e.a;return T(r)+"px";case 1:return"auto";case 2:var n=e.a;return T(n)+"fr";case 3:var a=e.a,o=e.b;return"min"+(T(a)+Wr(o));default:var i=e.a,o=e.b;return"max"+(T(i)+Wr(o))}},ze=xs,Be=function(e){return T(ze(e*255))},Uc=function(e){switch(e.$){case 0:return O;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return J("mv-"+(Be(n)+("-"+(Be(a)+("-"+Be(i))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,y=s.a,_=s.b,C=s.c,L=e.d;return J("tfrm-"+(Be(c)+("-"+(Be(l)+("-"+(Be(u)+("-"+(Be(m)+("-"+(Be(d)+("-"+(Be(b)+("-"+(Be(y)+("-"+(Be(_)+("-"+(Be(C)+("-"+Be(L))))))))))))))))))))}},$t=function(e){switch(e.$){case 13:var u=e.a;return u;case 12:var u=e.a;return e.b,u;case 0:var n=e.a;return n;case 1:var u=e.a;return u;case 2:var r=e.a;return"font-size-"+T(r);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var a=e.a,f=e.b;return e.c,a;case 7:var a=e.a;return e.b,e.c,e.d,e.e,a;case 6:var a=e.a;return e.b,e.c,e.d,e.e,a;case 8:var i=e.a;return"grid-rows-"+(t(le,"-",t(ne,Wr,i.hB))+("-cols-"+(t(le,"-",t(ne,Wr,i.ak))+("-space-x-"+(Wr(i.hO.a)+("-space-y-"+Wr(i.hO.b)))))));case 9:var o=e.a;return"gp grid-pos-"+(T(o.af)+("-"+(T(o.gd)+("-"+(T(o.$9)+("-"+T(o.gL)))))));case 11:var c=e.a,l=e.b,u=function(){switch(c){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(le," ",t(ne,function(m){var d=$t(m);if(d==="")return"";var b=d;return b+("-"+u)},l));default:var f=e.a;return t(Fe,"",Uc(f))}},Oc=v(function(e,r){var n=r;return h(Za,e,0,n)}),B0=v(function(e,r){var n=t(Gc,e,r);return!n.$}),V0=v(function(e,r){var n=r;return t(B0,e,n)}),Tv=v(function(e,r){var n=r.a,a=r.b,i=$t(e);return t(V0,i,n)?r:w(t(Oc,i,n),t(P,e,a))}),ue=v(function(e,r){return{$:0,a:e,b:r}}),et=v(function(e,r){return{$:0,a:e,b:r}}),S=function(e){return"."+e},j0=k(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(P,i,n)}),Jn=v(function(e,r){return h(Ke,j0(e),D,r)}),pa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(T(ze(r*255))+(","+T(ze(n*255))+(","+T(ze(a*255))+(","+(ve(i)+")")))))},Jo=function(e){return t(le," ",t(Jn,Er,$([e.ef?J("inset"):O,J(ve(e.eU.a)+"px"),J(ve(e.eU.b)+"px"),J(ve(e.a3)+"px"),J(ve(e.bj)+"px"),J(pa(e.ca))])))},Dv=function(e){return $([t(et,S(p.d6)+":focus-within",t(Jn,Er,$([t(je,function(r){return t(ue,"border-color",pa(r))},e.fY),t(je,function(r){return t(ue,"background-color",pa(r))},e.fQ),t(je,function(r){return t(ue,"box-shadow",Jo({a3:r.a3,ca:r.ca,ef:!1,eU:t(Uo,Ua,t(di,Ua,r.eU)),bj:r.bj}))},e.hH),J(t(ue,"outline","none"))]))),t(et,S(p.fM)+":focus .focusable, "+(S(p.fM)+".focusable:focus, "+(".ui-slide-bar:focus + "+(S(p.fM)+" .focusable-thumb"))),t(Jn,Er,$([t(je,function(r){return t(ue,"border-color",pa(r))},e.fY),t(je,function(r){return t(ue,"background-color",pa(r))},e.fQ),t(je,function(r){return t(ue,"box-shadow",Jo({a3:r.a3,ca:r.ca,ef:!1,eU:t(Uo,Ua,t(di,Ua,r.eU)),bj:r.bj}))},e.hH),J(t(ue,"outline","none"))])))])},Hr=function(e){return sn(P$(e))},Rv=v(function(e,r){return t(Mc,Dd(e),z$(r))}),uo=v(function(e,r){return{$:2,a:e,b:r}}),qc=function(e){return{$:6,a:e}},q=v(function(e,r){return{$:1,a:e,b:r}}),gr=v(function(e,r){return{$:0,a:e,b:r}}),A=v(function(e,r){return{$:4,a:e,b:r}}),g=v(function(e,r){return{$:0,a:e,b:r}}),N0=v(function(e,r){return{$:3,a:e,b:r}}),Av=$([0,1,2,3,4,5]),G0=v(function(e,r){return r.b?h(Ke,P,r,e):e}),sr=function(e){return h(Ke,G0,D,e)},Fa=v(function(e,r){return sr(t(ne,e,r))}),H0=function(e){switch(e){case 0:return S(p.gf);case 1:return S(p.cd);case 2:return S(p.cf);case 3:return S(p.bu);case 4:return S(p.ce);default:return S(p.ax)}},hi=function(e){switch(e){case 0:return S(p.fI);case 1:return S(p.fB);case 2:return S(p.dV);case 3:return S(p.dU);case 4:return S(p.fC);default:return S(p.fD)}},Oa=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(A,H0(n),i),t(q,S(p.fM),$([t(A,hi(n),o)]))])};return qc(t(Fa,r,Av))},gu=$([t(g,"display","flex"),t(g,"flex-direction","column"),t(g,"white-space","pre"),t(A,S(p.cX),$([t(g,"z-index","0"),t(q,S(p.fS),$([t(g,"z-index","-1")]))])),t(A,S(p.hG),$([t(q,S(p.Y),$([t(A,S(p.cZ),$([t(g,"flex-grow","0")])),t(A,S(p.dM),$([t(g,"align-self","auto !important")]))]))])),t(q,S(p.cY),$([t(g,"height","auto")])),t(q,S(p.cZ),$([t(g,"flex-grow","100000")])),t(q,S(p.dM),$([t(g,"width","100%")])),t(q,S(p.fw),$([t(g,"width","100%")])),t(q,S(p.dL),$([t(g,"align-self","flex-start")])),Oa(function(e){switch(e){case 0:return w($([t(g,"justify-content","flex-start")]),$([t(g,"margin-bottom","auto !important"),t(g,"margin-top","0 !important")]));case 1:return w($([t(g,"justify-content","flex-end")]),$([t(g,"margin-top","auto !important"),t(g,"margin-bottom","0 !important")]));case 2:return w($([t(g,"align-items","flex-end")]),$([t(g,"align-self","flex-end")]));case 3:return w($([t(g,"align-items","flex-start")]),$([t(g,"align-self","flex-start")]));case 4:return w($([t(g,"align-items","center")]),$([t(g,"align-self","center")]));default:return w($([t(q,S(p.fM),$([t(g,"margin-top","auto"),t(g,"margin-bottom","auto")]))]),$([t(g,"margin-top","auto !important"),t(g,"margin-bottom","auto !important")]))}})]),W0=function(e){var r=function(n){return $([t(q,S(p.fM),$([t(A,hi(n),e(n))]))])};return qc(t(Fa,r,Av))},U0=function(){return $([0,1,2,3,4,5])}(),O0=$([t(gr,"html,body",$([t(g,"height","100%"),t(g,"padding","0"),t(g,"margin","0")])),t(gr,X(S(p.fM),X(S(p.hK),S(p.gR))),$([t(g,"display","block"),t(A,S(p.cZ),$([t(q,"img",$([t(g,"max-height","100%"),t(g,"object-fit","cover")]))])),t(A,S(p.dM),$([t(q,"img",$([t(g,"max-width","100%"),t(g,"object-fit","cover")]))]))])),t(gr,S(p.fM)+":focus",$([t(g,"outline","none")])),t(gr,S(p.hA),$([t(g,"width","100%"),t(g,"height","auto"),t(g,"min-height","100%"),t(g,"z-index","0"),t(A,X(S(p.fM),S(p.cZ)),$([t(g,"height","100%"),t(q,S(p.cZ),$([t(g,"height","100%")]))])),t(q,S(p.gT),$([t(A,S(p.bf),$([t(g,"position","fixed"),t(g,"z-index","20")]))]))])),t(gr,S(p.bf),$([t(g,"position","relative"),t(g,"border","none"),t(g,"display","flex"),t(g,"flex-direction","row"),t(g,"flex-basis","auto"),t(A,S(p.hK),gu),qc(function(e){return t(ne,e,U0)}(function(e){switch(e){case 0:return t(A,S(p.fz),$([t(g,"position","absolute"),t(g,"bottom","100%"),t(g,"left","0"),t(g,"width","100%"),t(g,"z-index","20"),t(g,"margin","0 !important"),t(q,S(p.cZ),$([t(g,"height","auto")])),t(q,S(p.dM),$([t(g,"width","100%")])),t(g,"pointer-events","none"),t(q,"*",$([t(g,"pointer-events","auto")]))]));case 1:return t(A,S(p.fT),$([t(g,"position","absolute"),t(g,"bottom","0"),t(g,"left","0"),t(g,"height","0"),t(g,"width","100%"),t(g,"z-index","20"),t(g,"margin","0 !important"),t(g,"pointer-events","none"),t(q,"*",$([t(g,"pointer-events","auto")])),t(q,S(p.cZ),$([t(g,"height","auto")]))]));case 2:return t(A,S(p.hi),$([t(g,"position","absolute"),t(g,"left","100%"),t(g,"top","0"),t(g,"height","100%"),t(g,"margin","0 !important"),t(g,"z-index","20"),t(g,"pointer-events","none"),t(q,"*",$([t(g,"pointer-events","auto")]))]));case 3:return t(A,S(p.hh),$([t(g,"position","absolute"),t(g,"right","100%"),t(g,"top","0"),t(g,"height","100%"),t(g,"margin","0 !important"),t(g,"z-index","20"),t(g,"pointer-events","none"),t(q,"*",$([t(g,"pointer-events","auto")]))]));case 4:return t(A,S(p.gT),$([t(g,"position","absolute"),t(g,"width","100%"),t(g,"height","100%"),t(g,"left","0"),t(g,"top","0"),t(g,"margin","0 !important"),t(g,"pointer-events","none"),t(q,"*",$([t(g,"pointer-events","auto")]))]));default:return t(A,S(p.fS),$([t(g,"position","absolute"),t(g,"width","100%"),t(g,"height","100%"),t(g,"left","0"),t(g,"top","0"),t(g,"margin","0 !important"),t(g,"z-index","0"),t(g,"pointer-events","none"),t(q,"*",$([t(g,"pointer-events","auto")]))]))}}))])),t(gr,S(p.fM),$([t(g,"position","relative"),t(g,"border","none"),t(g,"flex-shrink","0"),t(g,"display","flex"),t(g,"flex-direction","row"),t(g,"flex-basis","auto"),t(g,"resize","none"),t(g,"font-feature-settings","inherit"),t(g,"box-sizing","border-box"),t(g,"margin","0"),t(g,"padding","0"),t(g,"border-width","0"),t(g,"border-style","solid"),t(g,"font-size","inherit"),t(g,"color","inherit"),t(g,"font-family","inherit"),t(g,"line-height","1"),t(g,"font-weight","inherit"),t(g,"text-decoration","none"),t(g,"font-style","inherit"),t(A,S(p.dN),$([t(g,"flex-wrap","wrap")])),t(A,S(p.eT),$([t(g,"-moz-user-select","none"),t(g,"-webkit-user-select","none"),t(g,"-ms-user-select","none"),t(g,"user-select","none")])),t(A,S(p.gi),$([t(g,"cursor","pointer")])),t(A,S(p.gj),$([t(g,"cursor","text")])),t(A,S(p.ho),$([t(g,"pointer-events","none !important")])),t(A,S(p.b7),$([t(g,"pointer-events","auto !important")])),t(A,S(p.a0),$([t(g,"opacity","0")])),t(A,S(p.aV),$([t(g,"opacity","1")])),t(A,S(X(p.gO,p.a0))+":hover",$([t(g,"opacity","0")])),t(A,S(X(p.gO,p.aV))+":hover",$([t(g,"opacity","1")])),t(A,S(X(p.gB,p.a0))+":focus",$([t(g,"opacity","0")])),t(A,S(X(p.gB,p.aV))+":focus",$([t(g,"opacity","1")])),t(A,S(X(p.cL,p.a0))+":active",$([t(g,"opacity","0")])),t(A,S(X(p.cL,p.aV))+":active",$([t(g,"opacity","1")])),t(A,S(p.fk),$([t(g,"transition",t(le,", ",t(ne,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(A,S(p.hD),$([t(g,"overflow","auto"),t(g,"flex-shrink","1")])),t(A,S(p.hE),$([t(g,"overflow-x","auto"),t(A,S(p.af),$([t(g,"flex-shrink","1")]))])),t(A,S(p.hF),$([t(g,"overflow-y","auto"),t(A,S(p.aw),$([t(g,"flex-shrink","1")])),t(A,S(p.hK),$([t(g,"flex-shrink","1")]))])),t(A,S(p.f9),$([t(g,"overflow","hidden")])),t(A,S(p.gb),$([t(g,"overflow-x","hidden")])),t(A,S(p.gc),$([t(g,"overflow-y","hidden")])),t(A,S(p.dL),$([t(g,"width","auto")])),t(A,S(p.b4),$([t(g,"border-width","0")])),t(A,S(p.fZ),$([t(g,"border-style","dashed")])),t(A,S(p.f_),$([t(g,"border-style","dotted")])),t(A,S(p.f$),$([t(g,"border-style","solid")])),t(A,S(p.Y),$([t(g,"white-space","pre"),t(g,"display","inline-block")])),t(A,S(p.g$),$([t(g,"line-height","1.05"),t(g,"background","transparent"),t(g,"text-align","inherit")])),t(A,S(p.hK),gu),t(A,S(p.af),$([t(g,"display","flex"),t(g,"flex-direction","row"),t(q,S(p.fM),$([t(g,"flex-basis","0%"),t(A,S(p.fv),$([t(g,"flex-basis","auto")])),t(A,S(p.es),$([t(g,"flex-basis","auto")]))])),t(q,S(p.cZ),$([t(g,"align-self","stretch !important")])),t(q,S(p.eb),$([t(g,"align-self","stretch !important")])),t(q,S(p.dM),$([t(g,"flex-grow","100000")])),t(q,S(p.cc),$([t(g,"flex-grow","0"),t(g,"flex-basis","auto"),t(g,"align-self","stretch")])),t(q,"u:first-of-type."+p.fH,$([t(g,"flex-grow","1")])),t(q,"s:first-of-type."+p.fF,$([t(g,"flex-grow","1"),t(q,S(p.fC),$([t(g,"margin-left","auto !important")]))])),t(q,"s:last-of-type."+p.fF,$([t(g,"flex-grow","1"),t(q,S(p.fC),$([t(g,"margin-right","auto !important")]))])),t(q,"s:only-of-type."+p.fF,$([t(g,"flex-grow","1"),t(q,S(p.fD),$([t(g,"margin-top","auto !important"),t(g,"margin-bottom","auto !important")]))])),t(q,"s:last-of-type."+(p.fF+" ~ u"),$([t(g,"flex-grow","0")])),t(q,"u:first-of-type."+(p.fH+(" ~ s."+p.fF)),$([t(g,"flex-grow","0")])),Oa(function(e){switch(e){case 0:return w($([t(g,"align-items","flex-start")]),$([t(g,"align-self","flex-start")]));case 1:return w($([t(g,"align-items","flex-end")]),$([t(g,"align-self","flex-end")]));case 2:return w($([t(g,"justify-content","flex-end")]),D);case 3:return w($([t(g,"justify-content","flex-start")]),D);case 4:return w($([t(g,"justify-content","center")]),D);default:return w($([t(g,"align-items","center")]),$([t(g,"align-self","center")]))}}),t(A,S(p.hN),$([t(g,"justify-content","space-between")])),t(A,S(p.cl),$([t(g,"align-items","baseline")]))])),t(A,S(p.aw),$([t(g,"display","flex"),t(g,"flex-direction","column"),t(q,S(p.fM),$([t(g,"flex-basis","0px"),t(g,"min-height","min-content"),t(A,S(p.ea),$([t(g,"flex-basis","auto")]))])),t(q,S(p.cZ),$([t(g,"flex-grow","100000")])),t(q,S(p.dM),$([t(g,"width","100%")])),t(q,S(p.fw),$([t(g,"width","100%")])),t(q,S(p.dL),$([t(g,"align-self","flex-start")])),t(q,"u:first-of-type."+p.fE,$([t(g,"flex-grow","1")])),t(q,"s:first-of-type."+p.fG,$([t(g,"flex-grow","1"),t(q,S(p.fD),$([t(g,"margin-top","auto !important"),t(g,"margin-bottom","0 !important")]))])),t(q,"s:last-of-type."+p.fG,$([t(g,"flex-grow","1"),t(q,S(p.fD),$([t(g,"margin-bottom","auto !important"),t(g,"margin-top","0 !important")]))])),t(q,"s:only-of-type."+p.fG,$([t(g,"flex-grow","1"),t(q,S(p.fD),$([t(g,"margin-top","auto !important"),t(g,"margin-bottom","auto !important")]))])),t(q,"s:last-of-type."+(p.fG+" ~ u"),$([t(g,"flex-grow","0")])),t(q,"u:first-of-type."+(p.fE+(" ~ s."+p.fG)),$([t(g,"flex-grow","0")])),Oa(function(e){switch(e){case 0:return w($([t(g,"justify-content","flex-start")]),$([t(g,"margin-bottom","auto")]));case 1:return w($([t(g,"justify-content","flex-end")]),$([t(g,"margin-top","auto")]));case 2:return w($([t(g,"align-items","flex-end")]),$([t(g,"align-self","flex-end")]));case 3:return w($([t(g,"align-items","flex-start")]),$([t(g,"align-self","flex-start")]));case 4:return w($([t(g,"align-items","center")]),$([t(g,"align-self","center")]));default:return w($([t(g,"justify-content","center")]),D)}}),t(q,S(p.cc),$([t(g,"flex-grow","0"),t(g,"flex-basis","auto"),t(g,"width","100%"),t(g,"align-self","stretch !important")])),t(A,S(p.hN),$([t(g,"justify-content","space-between")]))])),t(A,S(p.gG),$([t(g,"display","-ms-grid"),t(q,".gp",$([t(q,S(p.fM),$([t(g,"width","100%")]))])),t(N0,w("display","grid"),$([w("display","grid")])),W0(function(e){switch(e){case 0:return $([t(g,"justify-content","flex-start")]);case 1:return $([t(g,"justify-content","flex-end")]);case 2:return $([t(g,"align-items","flex-end")]);case 3:return $([t(g,"align-items","flex-start")]);case 4:return $([t(g,"align-items","center")]);default:return $([t(g,"justify-content","center")])}})])),t(A,S(p.eX),$([t(g,"display","block"),t(q,S(p.fM+":first-child"),$([t(g,"margin","0 !important")])),t(q,S(p.fM+(hi(3)+(":first-child + ."+p.fM))),$([t(g,"margin","0 !important")])),t(q,S(p.fM+(hi(2)+(":first-child + ."+p.fM))),$([t(g,"margin","0 !important")])),Oa(function(e){switch(e){case 0:return w(D,D);case 1:return w(D,D);case 2:return w(D,$([t(g,"float","right"),t(A,"::after",$([t(g,"content",'""'),t(g,"display","table"),t(g,"clear","both")]))]));case 3:return w(D,$([t(g,"float","left"),t(A,"::after",$([t(g,"content",'""'),t(g,"display","table"),t(g,"clear","both")]))]));case 4:return w(D,D);default:return w(D,D)}})])),t(A,S(p.gX),$([t(g,"white-space","pre-wrap !important"),t(g,"height","100%"),t(g,"width","100%"),t(g,"background-color","transparent")])),t(A,S(p.g_),$([t(A,S(p.hK),$([t(g,"flex-basis","auto")]))])),t(A,S(p.gZ),$([t(g,"white-space","pre-wrap !important"),t(g,"cursor","text"),t(q,S(p.gY),$([t(g,"white-space","pre-wrap !important"),t(g,"color","transparent")]))])),t(A,S(p.eY),$([t(g,"display","block"),t(g,"white-space","normal"),t(g,"overflow-wrap","break-word"),t(A,S(p.cX),$([t(g,"z-index","0"),t(q,S(p.fS),$([t(g,"z-index","-1")]))])),t(uo,S(p.Y),$([t(g,"display","inline"),t(g,"white-space","normal")])),t(uo,S(p.eY),$([t(g,"display","inline"),t(A,"::after",$([t(g,"content","none")])),t(A,"::before",$([t(g,"content","none")]))])),t(uo,S(p.hK),$([t(g,"display","inline"),t(g,"white-space","normal"),t(A,S(p.fv),$([t(g,"display","inline-block")])),t(A,S(p.gT),$([t(g,"display","flex")])),t(A,S(p.fS),$([t(g,"display","flex")])),t(A,S(p.fz),$([t(g,"display","flex")])),t(A,S(p.fT),$([t(g,"display","flex")])),t(A,S(p.hi),$([t(g,"display","flex")])),t(A,S(p.hh),$([t(g,"display","flex")])),t(q,S(p.Y),$([t(g,"display","inline"),t(g,"white-space","normal")]))])),t(q,S(p.af),$([t(g,"display","inline")])),t(q,S(p.aw),$([t(g,"display","inline-flex")])),t(q,S(p.gG),$([t(g,"display","inline-grid")])),Oa(function(e){switch(e){case 0:return w(D,D);case 1:return w(D,D);case 2:return w(D,$([t(g,"float","right")]));case 3:return w(D,$([t(g,"float","left")]));case 4:return w(D,D);default:return w(D,D)}})])),t(A,".hidden",$([t(g,"display","none")])),t(A,S(p.h9),$([t(g,"font-weight","100")])),t(A,S(p.h0),$([t(g,"font-weight","200")])),t(A,S(p.h4),$([t(g,"font-weight","300")])),t(A,S(p.h6),$([t(g,"font-weight","400")])),t(A,S(p.h5),$([t(g,"font-weight","500")])),t(A,S(p.h8),$([t(g,"font-weight","600")])),t(A,S(p.fX),$([t(g,"font-weight","700")])),t(A,S(p.h$),$([t(g,"font-weight","800")])),t(A,S(p.h1),$([t(g,"font-weight","900")])),t(A,S(p.g3),$([t(g,"font-style","italic")])),t(A,S(p.hT),$([t(g,"text-decoration","line-through")])),t(A,S(p.ih),$([t(g,"text-decoration","underline"),t(g,"text-decoration-skip-ink","auto"),t(g,"text-decoration-skip","ink")])),t(A,X(S(p.ih),S(p.hT)),$([t(g,"text-decoration","line-through underline"),t(g,"text-decoration-skip-ink","auto"),t(g,"text-decoration-skip","ink")])),t(A,S(p.ia),$([t(g,"font-style","normal")])),t(A,S(p.h2),$([t(g,"text-align","justify")])),t(A,S(p.cH),$([t(g,"text-align","justify-all")])),t(A,S(p.h_),$([t(g,"text-align","center")])),t(A,S(p.h7),$([t(g,"text-align","right")])),t(A,S(p.h3),$([t(g,"text-align","left")])),t(A,".modal",$([t(g,"position","fixed"),t(g,"left","0"),t(g,"top","0"),t(g,"width","100%"),t(g,"height","100%"),t(g,"pointer-events","none")]))]))]),dn=function(e){return $([t(gr,".v-"+e,$([t(g,"font-feature-settings",'"'+(e+'"'))])),t(gr,".v-"+(e+"-off"),$([t(g,"font-feature-settings",'"'+(e+'" 0'))]))])},q0=sr($([t(ne,function(e){return t(gr,".border-"+T(e),$([t(g,"border-width",T(e)+"px")]))},t(tn,0,6)),t(ne,function(e){return t(gr,".font-size-"+T(e),$([t(g,"font-size",T(e)+"px")]))},t(tn,8,32)),t(ne,function(e){return t(gr,".p-"+T(e),$([t(g,"padding",T(e)+"px")]))},t(tn,0,24)),$([t(gr,".v-smcp",$([t(g,"font-variant","small-caps")])),t(gr,".v-smcp-off",$([t(g,"font-variant","normal")]))]),dn("zero"),dn("onum"),dn("liga"),dn("dlig"),dn("ordn"),dn("tnum"),dn("afrc"),dn("frac")])),J0=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fM+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fM+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),Y0=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,X0=`
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
`,Q0=`
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
`,Z0=`
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
`,K0="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(S(p.fM)+(S(p.af)+(" > "+(S(p.fM)+(" { flex-basis: auto !important; } "+(S(p.fM)+(S(p.af)+(" > "+(S(p.fM)+(S(p.cc)+(" { flex-basis: auto !important; }}"+(Y0+(X0+(Z0+(Q0+J0))))))))))))))),ya=function(e){return t(le,"",e)},va=v(function(e,r){return{b9:r,G:D,aE:D,ag:e}}),fa=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var c=i.a,l=i.b;return Re(o,{aE:t(P,w(c,l),o.aE)});case 3:var u=i.a,f=u.a,m=u.b,d=i.b;return Re(o,{G:t(P,{b9:`
}`,G:D,aE:d,ag:"@supports ("+(f+(":"+(m+(") {"+n.ag))))},o.G)});case 5:var b=i.a,s=i.b;return Re(o,{G:t(P,t(fa,t(va,n.ag+(" + "+b),""),s),o.G)});case 1:var y=i.a,_=i.b;return Re(o,{G:t(P,t(fa,t(va,n.ag+(" > "+y),""),_),o.G)});case 2:var y=i.a,_=i.b;return Re(o,{G:t(P,t(fa,t(va,n.ag+(" "+y),""),_),o.G)});case 4:var C=i.a,L=i.b;return Re(o,{G:t(P,t(fa,t(va,X(n.ag,C),""),L),o.G)});default:var x=i.a;return Re(o,{G:t(P,t(fa,t(va,n.ag,""),x),o.G)})}});return h(Ke,a,n,r)}),eh=function(e){var r=function(i){return ya(t(ne,function(o){var c=o.a,l=o.b;return c+(":"+(l+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b9+"}"))):""},a=function(i){var o=i;return X(n(o),ya(t(ne,a,o.G)))};return ya(t(ne,a,h(Ke,v(function(i,o){var c=i.a,l=i.b;return t(P,t(fa,t(va,c,""),l),o)}),D,e)))},hu=X(K0,eh(X(O0,q0))),Cn=Ao,Fv=function(e){var r=e.eR;switch(r){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([Cn(hu)]))]));case 1:return Cn("");default:return h(Hr,"elm-ui-static-rules",$([t(Rv,"rules",Hc(hu))]),D)}},rh=v(function(e,r){return h(Ne,cd(e),td(),r)}),nh=function(e){return h(Ne,v(function(r,n){var a=r.a,i=r.b;return h(od,a,i,n)}),id(),e)},ah=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hd;return'"'+(r+'"')}},th=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},ih=function(e){if(e.$===5){var r=e.a;return t(St,th,r.fp)}else return!1},wa=v(function(e,r){return he(e,r)<0?e:r}),ja=k(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Ae=Z(function(e,r,n,a){if(r.$===1)return $([n+("{"+(h(Ne,ja(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gO;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(h(Ne,ja(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(h(Ne,ja(!1),"",a)+`
}`))])}case 0:var c=h(Ne,ja(!1),"",a);return $([n+("-fs:focus {"+(c+`
}`)),"."+(p.fM+(":focus "+(n+"-fs  {")))+(c+`
}`),n+"-fs:focus-within {"+(c+`
}`),".ui-slide-bar:focus + "+(S(p.fM)+(" .focusable-thumb"+(n+"-fs {")))+(c+`
}`)]);default:return $([n+("-act:active {"+(h(Ne,ja(!1),"",a)+`
}`))])}}),oh=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+T(n)))}},ch=function(e){if(e.$===5){var r=e.a;return J(t(le,", ",t(ne,oh,r.fp)))}else return O},lh=function(e){switch(e.$){case 0:return O;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return J("translate3d("+(ve(n)+("px, "+(ve(a)+("px, "+(ve(i)+"px)"))))));default:var o=e.a,c=o.a,l=o.b,u=o.c,f=e.b,m=f.a,d=f.b,b=f.c,s=e.c,y=s.a,_=s.b,C=s.c,L=e.d,x="translate3d("+(ve(c)+("px, "+(ve(l)+("px, "+(ve(u)+"px)"))))),z="scale3d("+(ve(m)+(", "+(ve(d)+(", "+(ve(b)+")"))))),W="rotate3d("+(ve(y)+(", "+(ve(_)+(", "+(ve(C)+(", "+(ve(L)+"rad)")))))));return J(x+(" "+(z+(" "+W))))}},Jc=k(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return M(Ae,e,n,a,i);case 13:var u=r.a,b=r.b;return M(Ae,e,n,"."+u,$([t(ue,"box-shadow",b)]));case 12:var u=r.a,o=r.b,c=t(rr,0,t(wa,1,1-o));return M(Ae,e,n,"."+u,$([t(ue,"opacity",ve(c))]));case 2:var l=r.a;return M(Ae,e,n,".font-size-"+T(l),$([t(ue,"font-size",T(l)+"px")]));case 1:var u=r.a,f=r.b,m=t(le,", ",t(Jn,ch,f)),d=$([t(ue,"font-family",t(le,", ",t(ne,ah,f))),t(ue,"font-feature-settings",m),t(ue,"font-variant",t(St,ih,f)?"small-caps":"normal")]);return M(Ae,e,n,"."+u,d);case 3:var se=r.a,b=r.b,ro=r.c;return M(Ae,e,n,"."+se,$([t(ue,b,ro)]));case 4:var se=r.a,b=r.b,s=r.c;return M(Ae,e,n,"."+se,$([t(ue,b,pa(s))]));case 5:var Y=r.a,y=r.b,_=r.c,C=T(_)+"px",L=T(y)+"px",x="."+p.af,z="."+(p.dN+x),pe="."+p.dV,W="."+p.eY,K="."+p.eX,Se="."+p.dU,ae=ve(_/2)+"px",te=ve(y/2)+"px",ie="."+p.aw,se="."+Y,re="."+p.fM;return sr($([M(Ae,e,n,se+(x+(" > "+(re+(" + "+re)))),$([t(ue,"margin-left",L)])),M(Ae,e,n,se+(z+(" > "+re)),$([t(ue,"margin",ae+(" "+te))])),M(Ae,e,n,se+(ie+(" > "+(re+(" + "+re)))),$([t(ue,"margin-top",C)])),M(Ae,e,n,se+(K+(" > "+(re+(" + "+re)))),$([t(ue,"margin-top",C)])),M(Ae,e,n,se+(K+(" > "+Se)),$([t(ue,"margin-right",L)])),M(Ae,e,n,se+(K+(" > "+pe)),$([t(ue,"margin-left",L)])),M(Ae,e,n,X(se,W),$([t(ue,"line-height","calc(1em + "+(T(_)+"px)"))])),M(Ae,e,n,"textarea"+(re+se),$([t(ue,"line-height","calc(1em + "+(T(_)+"px)")),t(ue,"height","calc(100% + "+(T(_)+"px)"))])),M(Ae,e,n,se+(W+(" > "+Se)),$([t(ue,"margin-right",L)])),M(Ae,e,n,se+(W+(" > "+pe)),$([t(ue,"margin-left",L)])),M(Ae,e,n,se+(W+"::after"),$([t(ue,"content","''"),t(ue,"display","block"),t(ue,"height","0"),t(ue,"width","0"),t(ue,"margin-top",T(-1*(_/2|0))+"px")])),M(Ae,e,n,se+(W+"::before"),$([t(ue,"content","''"),t(ue,"display","block"),t(ue,"height","0"),t(ue,"width","0"),t(ue,"margin-bottom",T(-1*(_/2|0))+"px")]))]));case 7:var Y=r.a,de=r.b,pe=r.c,ke=r.d,Se=r.e,se="."+Y;return M(Ae,e,n,se,$([t(ue,"padding",ve(de)+("px "+(ve(pe)+("px "+(ve(ke)+("px "+(ve(Se)+"px")))))))]));case 6:var Y=r.a,de=r.b,pe=r.c,ke=r.d,Se=r.e,se="."+Y;return M(Ae,e,n,se,$([t(ue,"border-width",T(de)+("px "+(T(pe)+("px "+(T(ke)+("px "+(T(Se)+"px")))))))]));case 8:var me=r.a,Te=k(function(Ye,Va,Qr){e:for(;;)switch(Qr.$){case 0:var es=Qr.a;return T(es)+"px";case 1:var Dr=w(Ye,Va);if(Dr.a.$===1){if(Dr.b.$===1)return Dr.a,Dr.b,"max-content";Dr.a;var In=Dr.b.a;return"minmax(max-content, "+(T(In)+"px)")}else if(Dr.b.$===1){var En=Dr.a.a;return Dr.b,"minmax("+(T(En)+"px, max-content)")}else{var En=Dr.a.a,In=Dr.b.a;return"minmax("+(T(En)+("px, "+(T(In)+"px)")))}case 2:var Ul=Qr.a,Rr=w(Ye,Va);if(Rr.a.$===1){if(Rr.b.$===1)return Rr.a,Rr.b,T(Ul)+"fr";Rr.a;var In=Rr.b.a;return"minmax(max-content, "+(T(In)+"px)")}else if(Rr.b.$===1){var En=Rr.a.a;return Rr.b,"minmax("+(T(En)+("px, "+(T(Ul)+"frfr)")))}else{var En=Rr.a.a,In=Rr.b.a;return"minmax("+(T(En)+("px, "+(T(In)+"px)")))}case 3:var no=Qr.a,ao=Qr.b,to=J(no),io=Va,oo=ao;Ye=to,Va=io,Qr=oo;continue e;default:var no=Qr.a,ao=Qr.b,to=Ye,io=J(no),oo=ao;Ye=to,Va=io,Qr=oo;continue e}}),F=function(Ye){return h(Te,O,O,Ye)};F(me.hO.a);var I=F(me.hO.b),E=function(Ye){return"grid-template-rows: "+(Ye+";")}(t(le," ",t(ne,F,me.hB))),B=function(Ye){return"-ms-grid-rows: "+(Ye+";")}(t(le,I,t(ne,F,me.ak))),V=function(Ye){return"-ms-grid-columns: "+(Ye+";")}(t(le,I,t(ne,F,me.ak))),j="grid-row-gap:"+(F(me.hO.b)+";"),N="grid-column-gap:"+(F(me.hO.a)+";"),G=function(Ye){return"grid-template-columns: "+(Ye+";")}(t(le," ",t(ne,F,me.ak))),se=".grid-rows-"+(t(le,"-",t(ne,Wr,me.hB))+("-cols-"+(t(le,"-",t(ne,Wr,me.ak))+("-space-x-"+(Wr(me.hO.a)+("-space-y-"+Wr(me.hO.b))))))),Zi=se+("{"+(G+(E+(N+(j+"}"))))),Ki="@supports (display:grid) {"+(Zi+"}"),eo=se+("{"+(V+(B+"}")));return $([eo,Ki]);case 9:var Ge=r.a,At=t(le," ",$(["-ms-grid-row: "+(T(Ge.af)+";"),"-ms-grid-row-span: "+(T(Ge.gL)+";"),"-ms-grid-column: "+(T(Ge.gd)+";"),"-ms-grid-column-span: "+(T(Ge.$9)+";")])),Qi=t(le," ",$(["grid-row: "+(T(Ge.af)+(" / "+(T(Ge.af+Ge.gL)+";"))),"grid-column: "+(T(Ge.gd)+(" / "+(T(Ge.gd+Ge.$9)+";")))])),se=".grid-pos-"+(T(Ge.af)+("-"+(T(Ge.gd)+("-"+(T(Ge.$9)+("-"+T(Ge.gL))))))),Zi=se+("{"+(Qi+"}")),Ki="@supports (display:grid) {"+(Zi+"}"),eo=se+("{"+(At+"}"));return $([eo,Ki]);case 11:var se=r.a,Qm=r.b,Zm=function(Ye){return h(Jc,e,Ye,J(se))};return t(Fa,Zm,Qm);default:var Wl=r.a,ro=lh(Wl),se=Uc(Wl),Ft=w(se,ro);if(!Ft.a.$&&!Ft.b.$){var Y=Ft.a.a,Km=Ft.b.a;return M(Ae,e,n,"."+Y,$([t(ue,"transform",Km)]))}else return D}}),uh=v(function(e,r){return nh(t(ne,function(n){var a=h(Jc,e,n,O);return w($t(n),t(rh,Hc,a))},r))}),bi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(le,"",t(ne,n,r))+"}"))}),bu=k(function(e,r,n){var a=n.a,i=n.b;return $([t(bi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(bi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),$h=k(function(e,r,n){var a=r.a,i=r.b,o=_e(e,n)?e:n+(" ."+e);return t(le," ",X(h(bu,o,p.hL,i),h(bu,o,p.gC,a)))}),vh=v(function(e,r){var n=_e(e,r)?e:r+(" ."+e);return t(le," ",$([t(bi,"."+(n+("."+(p.hL+(", "+("."+(n+(" ."+p.hL))))))),$([w("line-height","1")])),t(bi,"."+(n+("."+(p.hL+("> ."+(p.Y+(", ."+(n+(" ."+(p.hL+(" > ."+p.Y)))))))))),$([w("vertical-align","0"),w("line-height","1")]))]))}),_u=k(function(e,r,n){return{gL:r/e,bj:e,fq:n}}),Iv=v(function(e,r){return h(Ke,v(function(n,a){return e(n)?t(P,n,a):a}),D,r)}),fh=function(e){if(e.b){var r=e.a,n=e.b;return J(h(Ne,rr,r,n))}else return O},yu=function(e){if(e.b){var r=e.a,n=e.b;return J(h(Ne,wa,r,n))}else return O},wu=function(e){var r=$([e.f3,e.fR,e.gn,e.g8]),n=t(Fe,e.gn,yu(r)),a=t(Fe,e.fR,yu(t(Iv,function(f){return!_e(f,n)},r))),i=t(Fe,e.f3,fh(r)),o=1/(i-a),c=1-i,l=1/(i-n),u=1-i;return{f3:h(_u,o,i-a,c),d8:h(_u,l,i-n,u)}},xu=function(e){return w($([w("display","block")]),$([w("display","inline-block"),w("line-height",ve(e.gL)),w("vertical-align",ve(e.fq)+"em"),w("font-size",ve(e.bj)+"em")]))},mh=function(e){return h(Ne,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fA;if(i.$===1)return n;var o=i.a;return J(w(xu(function(c){return c.d8}(wu(o))),xu(function(c){return c.f3}(wu(o)))))}else return n;else return n}),O,e)},sh=function(e){var r=function(o){if(o.$===4){var c=o.b;return J("@import url('"+(c+"');"))}else return O},n=function(o){o.a;var c=o.b,l=t(le,`
`,t(Jn,r,c));return l},a=t(ne,tv,e),i=function(o){var c=o.a,l=o.b,u=mh(l);if(u.$===1)return t(le,"",t(ne,vh(c),a));var f=u.a;return t(le,"",t(ne,t($h,c,f),a))};return X(t(le,`
`,t(ne,n,e)),t(le,`
`,t(ne,i,e)))},dh=function(e){if(e.$===1){var r=e.a,n=e.b;return J(w(r,n))}else return O},Su=v(function(e,r){var n=v(function(c,l){return{cD:X(l.cD,h(Jc,e,c,O)),bW:function(){var u=dh(c);if(u.$===1)return l.bW;var f=u.a;return t(P,f,l.bW)}()}}),a=h(Ne,n,{cD:D,bW:D},r),i=a.bW,o=a.cD;return X(sh(i),ya(o))}),Ev=v(function(e,r){var n=e.eR;switch(n){case 0:return h(Hr,"div",D,$([h(Hr,"style",D,$([Cn(t(Su,e,r))]))]));case 1:return h(Hr,"div",D,$([h(Hr,"style",D,$([Cn(t(Su,e,r))]))]));default:return h(Hr,"elm-ui-rules",$([t(Rv,"rules",t(uh,e,r))]),D)}}),Cu=Z(function(e,r,n,a){var i=t(Ev,r,h(Ne,Tv,w(Wc,Dv(r.gB)),n).b);return e?t(P,w("static-stylesheet",Fv(r)),t(P,w("dynamic-stylesheet",i),a)):t(P,w("dynamic-stylesheet",i),a)}),Lu=Z(function(e,r,n,a){var i=t(Ev,r,h(Ne,Tv,w(Wc,Dv(r.gB)),n).b);return e?t(P,Fv(r),t(P,i,a)):t(P,i,a)}),Yo=we(45),vt=we(37),Bv=function(e){return Ld(P$(e))},ph=sn("p"),cr=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return _e(o&a,o)}else{var i=e.a;return _e(i&n,i)}}),Mu=sn("s"),Pu=sn("u"),Xo=we(44),ft=we(39),jt=xr(function(e,r,n,a,i,o){var c=v(function(u,f){if(a.$===1){var m=a.a;return h(Bv,u,f,function(){switch(i.$){case 0:return m;case 2:var b=i.a,s=i.b;return M(Cu,!1,b,s,m);default:var b=i.a,s=i.b;return M(Cu,!0,b,s,m)}}())}else{var d=a.a;return t(function(){switch(u){case"div":return Pa;case"p":return ph;default:return Hr(u)}}(),f,function(){switch(i.$){case 0:return d;case 2:var b=i.a,s=i.b;return M(Lu,!1,b,s,d);default:var b=i.a,s=i.b;return M(Lu,!0,b,s,d)}}())}}),l=function(){switch(r.$){case 0:return t(c,"div",n);case 1:var u=r.a;return t(c,u,n);default:var u=r.a,f=r.b;return h(Hr,u,n,$([t(c,f,$([Mr(p.fM+(" "+p.hK))]))]))}}();switch(o){case 0:return t(cr,ft,e)&&!t(cr,Xo,e)?l:t(cr,Mv,e)?t(Pu,$([Mr(t(le," ",$([p.fM,p.hK,p.cc,p.ax,p.fH])))]),$([l])):t(cr,Pv,e)?t(Mu,$([Mr(t(le," ",$([p.fM,p.hK,p.cc,p.ax,p.fF])))]),$([l])):l;case 1:return t(cr,vt,e)&&!t(cr,Yo,e)?l:t(cr,zv,e)?t(Mu,$([Mr(t(le," ",$([p.fM,p.hK,p.cc,p.fG])))]),$([l])):t(cr,Lv,e)?t(Pu,$([Mr(t(le," ",$([p.fM,p.hK,p.cc,p.fE])))]),$([l])):l;default:return l}}),gn=function(e){return!e.b},Yc=Cn,gh=p.fM+(" "+(p.Y+(" "+(p.dL+(" "+p.cY))))),mt=function(e){return t(Pa,$([Mr(gh)]),$([Yc(e)]))},hh=p.fM+(" "+(p.Y+(" "+(p.dM+(" "+p.cZ))))),zu=function(e){return t(Pa,$([Mr(hh)]),$([Yc(e)]))},bh=k(function(e,r,n){var a=v(function(y,_){var C=y.a,L=y.b,x=_.a,z=_.b;switch(L.$){case 0:var W=L.a;return _e(e,Vt),w(t(P,w(C,W(e)),x),z);case 1:var K=L.a;return _e(e,Vt),w(t(P,w(C,t(K.gP,jn,e)),x),gn(z)?K.hU:X(K.hU,z));case 2:var ae=L.a;return w(t(P,w(C,_e(e,wr)?zu(ae):mt(ae)),x),z);default:return w(x,z)}}),i=v(function(y,_){var C=_.a,L=_.b;switch(y.$){case 0:var x=y.a;return _e(e,Vt),w(t(P,x(e),C),L);case 1:var z=y.a;return _e(e,Vt),w(t(P,t(z.gP,jn,e),C),gn(L)?z.hU:X(z.hU,L));case 2:var W=y.a;return w(t(P,_e(e,wr)?zu(W):mt(W),C),L);default:return w(C,L)}});if(r.$===1){var o=r.a,c=h(Ke,a,w(D,D),o),l=c.a,u=c.b,f=gn(u)?n.hU:X(n.hU,u);if(f.b){var m=f;return qo({gP:M(jt,n.aS,n.aU,n.aJ,su(h(pu,"nearby-element-pls",l,n.aM))),hU:m})}else return ut(R(jt,n.aS,n.aU,n.aJ,su(h(pu,"nearby-element-pls",l,n.aM)),jn))}else{var d=r.a,b=h(Ke,i,w(D,D),d),s=b.a,u=b.b,f=gn(u)?n.hU:X(n.hU,u);if(f.b){var m=f;return qo({gP:M(jt,n.aS,n.aU,n.aJ,er(t(du,s,n.aM))),hU:m})}else return ut(R(jt,n.aS,n.aU,n.aJ,er(t(du,s,n.aM)),jn))}}),$r=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),_h=function(e){return{$:10,a:e}},_i=v(function(e,r){return{$:0,a:e,b:r}}),ge=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(_i,n,o|a)}else{var i=e.a;return t(_i,i|n,a)}}),ku=function(e){return{$:1,a:e}},Nt=v(function(e,r){return{$:3,a:e,b:r}}),Tu=function(e){return{$:2,a:e}},yh=v(function(e,r){return t(Pa,$([Mr(function(){switch(e){case 0:return t(le," ",$([p.bf,p.hK,p.fz]));case 1:return t(le," ",$([p.bf,p.hK,p.fT]));case 2:return t(le," ",$([p.bf,p.hK,p.hi]));case 3:return t(le," ",$([p.bf,p.hK,p.hh]));case 4:return t(le," ",$([p.bf,p.hK,p.gT]));default:return t(le," ",$([p.bf,p.hK,p.fS]))}}())]),$([function(){switch(r.$){case 3:return Cn("");case 2:var n=r.a;return mt(n);case 0:var a=r.a;return a(wr);default:var i=r.a;return t(i.gP,jn,wr)}}()]))}),wh=k(function(e,r,n){var a=t(yh,e,r);switch(n.$){case 0:return e===5?ku($([a])):Tu($([a]));case 1:var i=n.a;return e===5?ku(t(P,a,i)):t(Nt,i,$([a]));case 2:var o=n.a;return e===5?t(Nt,$([a]),o):Tu(t(P,a,o));default:var i=n.a,o=n.b;return e===5?t(Nt,t(P,a,i),o):t(Nt,i,t(P,a,o))}}),Du=v(function(e,r){return{$:2,a:e,b:r}}),hn=function(e){return{$:1,a:e}},Bn=v(function(e,r){switch(r.$){case 0:return hn(e);case 1:var n=r.a;return t(Du,n,e);default:var a=r.a,i=r.b;return t(Du,a,i)}}),xh=function(e){switch(e){case 0:return p.cM+(" "+p.dU);case 2:return p.cM+(" "+p.dV);default:return p.cM+(" "+p.fC)}},Sh=function(e){switch(e){case 0:return p.cN+(" "+p.fI);case 2:return p.cN+(" "+p.fB);default:return p.cN+(" "+p.fD)}},qa=v(function(e,r){return t(Br,Td(e),z$(r))}),jr=Z(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),pn=function(e){return{$:1,a:e}},Ch=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var u=r.a;return pn(H(u,0,0));case 1:var f=r.a;return pn(H(0,f,0));case 2:var m=r.a;return pn(H(0,0,m));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return M(jr,H(0,0,0),H(1,1,1),n,s);default:var n=r.a;return M(jr,H(0,0,0),n,H(0,0,1),0)}case 1:var l=e.a,u=l.a,f=l.b,m=l.c;switch(r.$){case 0:var a=r.a;return pn(H(a,f,m));case 1:var i=r.a;return pn(H(u,i,m));case 2:var o=r.a;return pn(H(u,f,o));case 3:var n=r.a;return pn(n);case 4:var n=r.a,s=r.b;return M(jr,l,H(1,1,1),n,s);default:var c=r.a;return M(jr,l,c,H(0,0,1),0)}default:var l=e.a,u=l.a,f=l.b,m=l.c,d=e.b,b=e.c,s=e.d;switch(r.$){case 0:var a=r.a;return M(jr,H(a,f,m),d,b,s);case 1:var i=r.a;return M(jr,H(u,i,m),d,b,s);case 2:var o=r.a;return M(jr,H(u,f,o),d,b,s);case 3:var y=r.a;return M(jr,y,d,b,s);case 4:var _=r.a,C=r.b;return M(jr,l,d,_,C);default:var L=r.a;return M(jr,l,L,b,s)}}}),ca=we(7),Vv=we(36),Ru=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(_i,n|i,a|o)}),rn=t(_i,0,0),Qo=function(e){switch(e.$){case 0:var r=e.a,n=T(r),a="height-px-"+n;return H(rn,p.ea+(" "+a),$([h($r,a,"height",n+"px")]));case 1:return H(t(ge,Vv,rn),p.cY,D);case 2:var i=e.a;return i===1?H(t(ge,vt,rn),p.cZ,D):H(t(ge,vt,rn),p.eb+(" height-fill-"+T(i)),$([h($r,p.fM+("."+(p.aw+(" > "+S("height-fill-"+T(i))))),"flex-grow",T(i*1e5))]));case 3:var o=e.a,u=e.b,f="min-height-"+T(o),m=h($r,f,"min-height",T(o)+"px !important"),c=Qo(u),b=c.a,s=c.b,y=c.c;return H(t(ge,Yo,b),f+(" "+s),t(P,m,y));default:var l=e.a,u=e.b,f="max-height-"+T(l),m=h($r,f,"max-height",T(l)+"px"),d=Qo(u),b=d.a,s=d.b,y=d.c;return H(t(ge,Yo,b),f+(" "+s),t(P,m,y))}},jv=we(38),Zo=function(e){switch(e.$){case 0:var r=e.a;return H(rn,p.fv+(" width-px-"+T(r)),$([h($r,"width-px-"+T(r),"width",T(r)+"px")]));case 1:return H(t(ge,jv,rn),p.dL,D);case 2:var n=e.a;return n===1?H(t(ge,ft,rn),p.dM,D):H(t(ge,ft,rn),p.fw+(" width-fill-"+T(n)),$([h($r,p.fM+("."+(p.af+(" > "+S("width-fill-"+T(n))))),"flex-grow",T(n*1e5))]));case 3:var a=e.a,c=e.b,l="min-width-"+T(a),u=h($r,l,"min-width",T(a)+"px"),i=Zo(c),m=i.a,d=i.b,b=i.c;return H(t(ge,Xo,m),l+(" "+d),t(P,u,b));default:var o=e.a,c=e.b,l="max-width-"+T(o),u=h($r,l,"max-width",T(o)+"px"),f=Zo(c),m=f.a,d=f.b,b=f.c;return H(t(ge,Xo,m),l+(" "+d),t(P,u,b))}},Bi=we(27),Lh=v(function(e,r){if(_e(e,Bi))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,c=r.d,l=r.e;return _e(i,c)&&_e(i,o)&&_e(i,l)&&i>=0&&i<=24;default:return!1}}),la=we(6),Au=we(30),Fu=we(29),Mh=Pe(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var m=l.a,d=l.b;switch(m.$){case 0:var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 3:var _=m.a,b=m.b;if(t(cr,_,n)){var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else{var F=b+(" "+e),I=r,E=t(ge,_,n),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}case 1:var s=m.a,F=e,I=r,E=n,B=a,V=i,j=t(P,s,o),N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 4:var _=m.a,y=m.b;if(t(cr,_,n)){var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else if(t(Lh,_,y)){var F=$t(y)+(" "+e),I=r,E=t(ge,_,n),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else{var F=$t(y)+(" "+e),I=r,E=t(ge,_,n),B=a,V=t(P,y,i),j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}case 10:var _=m.a,C=m.b,F=e,I=r,E=t(ge,_,n),B=t(Ch,a,C),V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 7:var L=m.a;if(t(cr,la,n)){var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else switch(L.$){case 0:var x=L.a,F=p.fv+(" width-px-"+T(x))+(" "+e),I=r,E=t(ge,la,n),B=a,V=t(P,h($r,"width-px-"+T(x),"width",T(x)+"px"),i),j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 1:var F=e+(" "+p.dL),I=r,E=t(ge,jv,t(ge,la,n)),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 2:var z=L.a;if(z===1){var F=e+(" "+p.dM),I=r,E=t(ge,ft,t(ge,la,n)),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else{var F=e+(" "+(p.fw+(" width-fill-"+T(z)))),I=r,E=t(ge,ft,t(ge,la,n)),B=a,V=t(P,h($r,p.fM+("."+(p.af+(" > "+S("width-fill-"+T(z))))),"flex-grow",T(z*1e5)),i),j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}default:var W=Zo(L),K=W.a,ae=W.b,Te=W.c,F=e+(" "+ae),I=r,E=t(Ru,K,t(ge,la,n)),B=a,V=X(Te,i),j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}case 8:var te=m.a;if(t(cr,ca,n)){var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else switch(te.$){case 0:var x=te.a,ie=T(x)+"px",re="height-px-"+ie,F=p.ea+(" "+(re+(" "+e))),I=r,E=t(ge,ca,n),B=a,V=t(P,h($r,re,"height ",ie),i),j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 1:var F=p.cY+(" "+e),I=r,E=t(ge,Vv,t(ge,ca,n)),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 2:var z=te.a;if(z===1){var F=p.cZ+(" "+e),I=r,E=t(ge,vt,t(ge,ca,n)),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else{var F=e+(" "+(p.eb+(" height-fill-"+T(z)))),I=r,E=t(ge,vt,t(ge,ca,n)),B=a,V=t(P,h($r,p.fM+("."+(p.aw+(" > "+S("height-fill-"+T(z))))),"flex-grow",T(z*1e5)),i),j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}default:var Y=Qo(te),K=Y.a,ae=Y.b,Te=Y.c,F=e+(" "+ae),I=r,E=t(Ru,K,t(ge,ca,n)),B=a,V=X(Te,i),j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}case 2:var de=m.a;switch(de.$){case 0:var F=e,I=t(Bn,"main",r),E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 1:var F=e,I=t(Bn,"nav",r),E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 2:var F=e,I=t(Bn,"footer",r),E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 3:var F=e,I=t(Bn,"aside",r),E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 4:var pe=de.a;if(pe<=1){var F=e,I=t(Bn,"h1",r),E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else if(pe<7){var F=e,I=t(Bn,"h"+T(pe),r),E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else{var F=e,I=t(Bn,"h6",r),E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}case 9:var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 8:var F=e,I=r,E=n,B=a,V=i,j=t(P,t(qa,"role","button"),o),N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 5:var ke=de.a,F=e,I=r,E=n,B=a,V=i,j=t(P,t(qa,"aria-label",ke),o),N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 6:var F=e,I=r,E=n,B=a,V=i,j=t(P,t(qa,"aria-live","polite"),o),N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;default:var F=e,I=r,E=n,B=a,V=i,j=t(P,t(qa,"aria-live","assertive"),o),N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}case 9:var Se=m.a,me=m.b,Te=function(){switch(me.$){case 3:return i;case 2:return me.a,i;case 0:return me.a,i;default:var Qi=me.a;return X(i,Qi.hU)}}(),F=e,I=r,E=n,B=a,V=Te,j=o,N=h(wh,Se,me,c),G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e;case 6:var Ge=m.a;if(t(cr,Au,n)){var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else{var F=xh(Ge)+(" "+e),I=r,E=function(se){switch(Ge){case 1:return t(ge,Pv,se);case 2:return t(ge,Mv,se);default:return se}}(t(ge,Au,n)),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}default:var At=m.a;if(t(cr,Fu,n)){var F=e,I=r,E=n,B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}else{var F=Sh(At)+(" "+e),I=r,E=function(se){switch(At){case 1:return t(ge,zv,se);case 2:return t(ge,Lv,se);default:return se}}(t(ge,Fu,n)),B=a,V=i,j=o,N=c,G=d;e=F,r=I,n=E,a=B,i=V,o=j,c=N,l=G;continue e}}}else{var u=Uc(a);if(u.$===1)return{aJ:t(P,Mr(e),o),aM:c,aS:n,aU:r,hU:i};var f=u.a;return{aJ:t(P,Mr(e+(" "+f)),o),aM:c,aS:n,aU:r,hU:t(P,_h(a),i)}}}),Ph={$:0},zh=Ph,ur=Z(function(e,r,n,a){return h(bh,e,a,bt(Mh,F0(e),r,rn,zh,D,D,P0,mr(n)))}),nn=Z(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),kh={fQ:O,fY:O,hH:J({a3:0,ca:M(nn,155/255,203/255,1,1),eU:w(0,0),bj:3})},Th=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,c=i.gO;return c.$===1?Re(i,{gO:J(o)}):i;case 1:var l=a.a,u=i.gB;return u.$===1?Re(i,{gB:J(l)}):i;default:var f=a.a,m=i.eR;return m.$===1?Re(i,{eR:J(f)}):i}}),n=function(a){return{gB:function(){var i=a.gB;if(i.$===1)return kh;var o=i.a;return o}(),gO:function(){var i=a.gO;if(i.$===1)return 1;var o=i.a;return o}(),eR:function(){var i=a.eR;if(i.$===1)return 0;var o=i.a;return o}()}};return n(h(Ke,r,{gB:O,gO:O,eR:O},e))},Dh=v(function(e,r){switch(r.$){case 0:var a=r.a;return a(wr);case 1:var n=r.a.hU,a=r.a.gP;return t(a,e(n),wr);case 2:var i=r.a;return mt(i);default:return mt("")}}),Rh=k(function(e,r,n){var a=Th(e),i=function(){var o=a.eR;return o===1?Cv(a):L0(a)}();return t(Dh,i,M(ur,wr,Kn,r,er($([n]))))}),st=k(function(e,r,n){return{$:4,a:e,b:r,c:n}}),Nv=v(function(e,r){return{$:1,a:e,b:r}}),Gv=function(e){return{$:2,a:e}},Ah={$:1},Ce=v(function(e,r){return{$:4,a:e,b:r}}),$o=function(e){return{$:3,a:e}},Hv=we(8),Wv=we(14),Uv=we(5),Ov=we(4),za=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return Be(r)+("-"+(Be(n)+("-"+(Be(a)+("-"+Be(i))))))},Zt=Is,vo=Fs,qv=v(function(e,r){return X(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(le,"-",vo(Zt(n)));case 4:var n=e.a;return e.b,t(le,"-",vo(Zt(n)));default:var n=e.a.hd;return t(le,"-",vo(Zt(n)))}}())}),Fh=function(){var e=$([$o("Open Sans"),$o("Helvetica"),$o("Verdana"),Ah]);return $([t(Ce,Hv,h(st,"bg-"+za(M(nn,1,1,1,0)),"background-color",M(nn,1,1,1,0))),t(Ce,Wv,h(st,"fc-"+za(M(nn,0,0,0,1)),"color",M(nn,0,0,0,1))),t(Ce,Ov,Gv(20)),t(Ce,Uv,t(Nv,h(Ne,qv,"font-",e),e))])}(),Ih=k(function(e,r,n){var a=e.hm;return h(Rh,a,t(P,_r(t(le," ",$([p.hA,p.fM,p.hK]))),X(Fh,r)),n)}),Jv={$:3},Yv=function(e){return{$:2,a:e}},Ko=Pd,Xv=v(function(e,r){switch(r.$){case 1:var n=r.a;return qo({gP:v(function(o,c){return t(Ko,e,t(n.gP,o,c))}),hU:n.hU});case 0:var a=r.a;return ut(t(Ct,Ko(e),a));case 2:var i=r.a;return Yv(i);default:return Jv}}),Xc=Xv,Eh=Ko,Bh=function(e){return{$:0,a:e}},De=Bh,Vh=kd,br=Vh,Qv={$:1},Vi=function(e){return{$:5,a:e}},Zv=Vi(0),Vr=k(function(e,r,n){return M(nn,e/255,r/255,n/255,1)}),Kv=h(Vr,0,0,0),jh=Br("d"),Nh=Br("fill"),Gh=Br("height"),ef=L$("http://www.w3.org/2000/svg"),Hh=ef("path"),Wh=ef("svg"),Uh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fJ:i,fU:a,gE:n,hu:r}},Oh=function(e){var r=Uh(e);return"rgba("+(T(ze(r.hu*255))+(","+T(ze(r.gE*255))+(","+T(ze(r.fU*255))+(","+ve(r.fJ)+")"))))},qh=Br("viewBox"),Jh=Br("width"),ga=k(function(e,r,n){return t(Wh,$([qh("0 0 100 100"),Jh(T(e)),Gh(T(e))]),$([t(Hh,$([jh(n),Nh(Oh(r))]),D)]))}),Yh={$:1},dr=Yh,rf=function(e){return{$:7,a:e}},ce=rf,Le=v(function(e,r){return M(ur,wr,Kn,t(P,ce(dr),t(P,xe(dr),e)),er($([r])))}),nf=function(e){return{$:2,a:e}},ye=nf(1),Gn={gq:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gD:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gK:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",hp:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hq:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hM:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fy:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},xa={c1:260,bF:54},on=function(e){return t(Ce,Hv,h(st,"bg-"+za(e),"background-color",e))},Xh=we(28),Ln=function(e){return t(Ce,Xh,h(st,"bc-"+za(e),"border-color",e))},Kt=1,zr=v(function(e,r){return M(ur,Kt,Kn,t(P,_r(p.gf+(" "+p.bu)),t(P,xe(dr),t(P,ce(dr),e))),er(r))}),Qh=h(Vr,83,83,83),af=Z(function(e,r,n,a){return M(nn,e/255,r/255,n/255,a)}),ji=M(af,56,56,56,.25),qe=Jv,dt=Je(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),pt=we(2),Hn=function(e){var r=e;return t(Ce,pt,R(dt,"p-"+T(e),r,r,r,r))},tf=k(function(e,r,n){return{$:5,a:e,b:r,c:n}}),of=we(3),cf=v(function(e,r){return"spacing-"+(T(e)+("-"+T(r)))}),Mn=function(e){return t(Ce,of,h(tf,t(cf,e,e),e,e))},Zh=M(af,0,0,0,0),Kh=function(e){return{$:4,a:e}},ec=0,Rn=v(function(e,r){return M(ur,ec,Kn,t(P,_r(p.bu+(" "+p.ax)),t(P,ce(dr),t(P,xe(dr),e))),er(r))}),e3=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gP(t(Cv,{gB:{fQ:O,fY:O,hH:O},gO:1,eR:0},n.hU));case 2:var a=e.a;return gi(Cn(a));default:return gi(Cn(""))}},r3=v(function(e,r){return e3(e(r))}),n3=zd,a3=v(function(e,r){return ut(h(n3,r3,e,r))}),Pn=function(e){return t(Ce,Wv,h(st,"fc-"+za(e),"color",e))},Qc=h(Vr,195,195,195),An=v(function(e,r){return{$:3,a:e,b:r}}),lf=we(13),t3=t(An,lf,p.h6),i3=we(20),uf=t(An,i3,p.hF),ea=function(e){return t(Ce,Ov,Gv(e))},Zc=t(An,lf,p.fX),rc=v(function(e,r){if(r.$===-2)return Xr;var n=r.a,a=r.b,i=r.c,o=r.d,c=r.e;return R(fe,n,a,t(e,a,i),t(rc,e,o),t(rc,e,c))}),$f=v(function(e,r){if(_e(e,r)){var n=e;return t(Ce,pt,R(dt,"p-"+T(e),n,n,n,n))}else{var a=r,i=e;return t(Ce,pt,R(dt,"p-"+(T(e)+("-"+T(r))),a,i,a,i))}}),zn=function(e){return Yv(e)},o3=function(e){return h(Ri,k(function(r,n,a){return t(P,n,a)}),D,e)},c3=v(function(e,r){return{$:3,a:e,b:r}}),l3=v(function(e,r){return{$:2,a:e,b:r}}),u3=v(function(e,r){return{$:0,a:e,b:r}}),$3=v(function(e,r){return{$:1,a:e,b:r}}),Ni=Z(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),vf=M(Ni,0/255,0/255,0/255,1),Gi=function(e){return{$:6,a:e}},v3=Gi(0),Hi=function(e){return{$:2,a:e}},f3={$:6},ff=Hi(f3),mf=k(function(e,r,n){if(r.$===1)return r.a,M(ur,Kt,hn("label"),e,er($([n])));var a=r.a,i=r.b,o=r.c,c=M(ur,wr,Kn,i,er($([o])));switch(a){case 2:return M(ur,Kt,hn("label"),t(P,_r(p.cl),e),er($([c,n])));case 3:return M(ur,Kt,hn("label"),t(P,_r(p.cl),e),er($([n,c])));case 0:return M(ur,ec,hn("label"),t(P,_r(p.cl),e),er($([n,c])));default:return M(ur,ec,hn("label"),t(P,_r(p.cl),e),er($([c,n])))}}),nc=qa,un=Vi(1),sf="Enter",m3=function(e){return{$:5,a:e}},df=function(e){if(e.$===1){var r=e.a;return Hi(m3(r))}else return qn},pf=function(e){return e.$===1},s3=function(e){return{$:0,a:e}},Kc=M$,d3=v(function(e,r){return t(Kc,e,s3(r))}),gf=function(e){return t(d3,"click",lr(e))},p3=qs,g3=function(e){return{$:2,a:e}},h3=v(function(e,r){return t(Kc,e,g3(r))}),hf=function(e){var r=function(a){var i=e(a);if(i.$===1)return p3("No key matched");var o=i.a;return lr(o)},n=t(ee,r,t(Q,"key",Ma));return Ie(t(h3,"keydown",t(fi,function(a){return w(a,!0)},n)))},b3=we(21),Wn=t(An,b3,p.gi),bf=" ",_f=function(e){return t(Br,"tabIndex",T(e))},_3=t(Ct,Ie,_f),y3=v(function(e,r){var n=r.el,a=r.gQ,i=r.f8,o=r.bJ,c=X($([pf(n)?qn:Mn(6),Ie(gf(o(!i))),ff,hf(function(l){return _e(l,sf)||_e(l,bf)?J(o(!i)):O}),_3(0),Wn,v3,ce(ye)]),e);return h(mf,t(P,Ie(t(nc,"role","checkbox")),t(P,Ie(t(nc,"aria-checked",i?"true":"false")),t(P,df(n),c))),n,M(ur,wr,Kn,$([un,xe(ye),ce(dr)]),er($([a(i)]))))}),w3=k(function(e,r,n){return X(t(lt,e-Nn(n),Ei(r)),n)}),yi=ss,yf=function(e){var r=function(n){return n<10?T(n):Ei(sv(87+n))};return e<16?r(e):X(yf(e/16|0),r(t(yi,16,e)))},x3=t(Xe,yf,t(w3,2,"0")),el=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fJ:i,fU:a,gE:n,hu:r}},S3=function(e){var r=el(e),n=r.hu,a=r.gE,i=r.fU;return t(le,"",t(P,"#",t(ne,t(Xe,ze,x3),$([n*255,a*255,i*255]))))},rl=we(12),wf=t(An,rl,p.h_),ac=Gi(1),$n=ds,Ja=function(e){return e*$n/180},C3=function(e){return{$:1,a:e}},nl=v(function(e,r){return{$:10,a:e,b:r}}),L3=we(26),M3=function(e){return t(nl,L3,C3(-e))},ha=k(function(e,r,n){return M(nn,e,r,n,1)}),P3=nn,z3=v(function(e,r){return{$:4,a:e,b:r}}),k3=we(24),T3=function(e){return t(nl,k3,t(z3,H(0,0,1),e))},D3=we(17),Un=function(e){return t(Ce,D3,h($r,"br-"+T(e),"border-radius",T(e)+"px"))},R3=function(e){return ya($([e.ef?"box-inset":"box-",Be(e.eU.a)+"px",Be(e.eU.b)+"px",Be(e.a3)+"px",Be(e.bj)+"px",za(e.ca)]))},A3=we(19),F3=function(e){var r={a3:e.a3,ca:e.ca,ef:!1,eU:e.eU,bj:e.bj};return t(Ce,A3,h($r,R3(r),"box-shadow",Jo(r)))},Iu=v(function(e,r){return{$:12,a:e,b:r}}),Eu=we(0),I3=function(e){return e?t(Ce,Eu,t(Iu,"transparent",1)):t(Ce,Eu,t(Iu,"visible",0))},fo=h(ha,1,1,1),al=Je(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),Wi=function(e){return t(Ce,Bi,R(al,"b-"+T(e),e,e,e,e))},E3=v(function(e,r){return t(Ce,Bi,R(al,"b-"+(T(e)+("-"+T(r))),r,e,r,e))}),Lt=function(e){var r=e.b5,n=e.cI,a=e.g4,i=e.hx;return _e(n,r)&&_e(a,i)?_e(n,i)?Wi(n):t(E3,a,n):t(Ce,Bi,R(al,"b-"+(T(n)+("-"+(T(i)+("-"+(T(r)+("-"+T(a))))))),n,i,r,a))},B3=function(e){return t(Le,$([_r("focusable"),ce(De(14)),xe(De(14)),Pn(fo),un,ea(9),wf,Un(3),Ln(e?h(ha,59/255,153/255,252/255):h(ha,211/255,211/255,211/255)),F3({a3:1,ca:e?M(P3,238/255,238/255,238/255,0):h(ha,238/255,238/255,238/255),eU:w(0,0),bj:1}),on(e?h(ha,59/255,153/255,252/255):fo),Wi(e?0:1),Oo(t(Le,$([Ln(fo),xe(De(6)),ce(De(9)),T3(Ja(-45)),ac,un,M3(1),I3(!e),Lt({b5:2,g4:2,hx:0,cI:0})]),qe))]),qe)},V3=Tr("htmlFor"),tc=v(function(e,r){if(r.$)return O;var n=r.a;return e(n)}),wi=v(function(e,r){if(r.$){var a=r.a;return tr(a)}else{var n=r.a;return e(n)}}),xf=Z(function(e,r,n,a){return{gV:r,g9:e,hg:n,hV:a}}),j3=ap,N3=Hs,G3=v(function(e,r){if(r.$)return tr(e);var n=r.a;return We(n)}),H3=np,W3=function(e){return t(H3,{f4:!1,hc:!1},e)},Sf=function(e){if(e.b){var r=e.a;return e.b,J(r)}else return O},U3=v(function(e,r){if(r.$){var a=r.a;return tr(a)}else{var n=r.a;return We(e(n))}}),O3=function(e){return{$:2,a:e}},q3=function(e){return{$:0,a:e}},J3=function(e){return{$:1,a:e}},mo=v(function(e,r){return qr(r)-qr(e)}),so=k(function(e,r,n){var a=qr(n);return he(qr(e),a)<1&&he(a,qr(r))<1}),Y3=v(function(e,r){var n=function(i){return he(i,e)<0?We(i):tr(J3(r))},a=h(so,"0","9",r)?We(t(mo,"0",r)):h(so,"a","z",r)?We(10+t(mo,"a",r)):h(so,"A","Z",r)?We(10+t(mo,"A",r)):tr(q3(r));return t(wi,n,a)}),Cf=v(function(e,r){var n=Aa(r);if(n.$===1)return We(0);var a=n.a,i=a.a,o=a.b;return t(wi,function(c){return t(wi,function(l){return We(c+l*e)},t(Cf,e,o))},t(Y3,e,i))}),X3=v(function(e,r){return 2<=e&&e<=36?t(Cf,e,Ho(r)):tr(O3(e))}),Q3=X3(16),Z3=k(function(e,r,n){return M(Ni,e,r,n,1)}),K3=Z(function(e,r,n,a){return M(Ni,e,r,n,a)}),Mt=ms,eb=v(function(e,r){var n=t(Mt,10,e);return ze(r*n)/n}),rb=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=mv(n);if(a.b&&!a.b.b){var i=a.a;return N3($([i,i]))}else return n};return t(Xe,Zt,t(Xe,function(n){return t(je,function(a){return h(j3,1,a,n)},W3(e))},t(Xe,tc(Sf),t(Xe,je(function(n){return n.hV}),t(Xe,je(Jn(Er)),t(Xe,G3("Parsing hex regex failed"),wi(function(n){var a=t(ne,t(Xe,r,t(Xe,Q3,U3(Ua))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,c=o.a.a,l=o.b,u=l.a.a,f=l.b,m=f.a.a;return We(M(K3,i/255,c/255,u/255,t(eb,2,m/255)))}else break e;else{var i=a.a.a,d=a.b,c=d.a.a,b=d.b,u=b.a.a;return We(h(Z3,i/255,c/255,u/255))}else break e;return tr("Parsing ints from hex failed")})))))))}(),nb=Tr("id"),ab=sn("input"),tb=sn("label"),Lf=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),ib=Lf(0),ob=Tr("name"),cb=function(e){return w(e,!0)},lb=function(e){return{$:1,a:e}},ub=v(function(e,r){return t(Kc,e,lb(r))}),$b=v(function(e,r){return h(Ke,Q,r,e)}),vb=t($b,$(["target","value"]),Ma),Mf=function(e){return t(ub,"input",t(fi,cb,t(fi,e,vb)))},fb=t(An,rl,p.h3),Pf=t(An,rl,p.h7),tl=function(e){return t(Sv,5,e)},il=function(e){return t(Ce,Uv,t(Nv,h(Ne,qv,"ff-",e),e))},mb=h(Vr,195,195,195),zf=h(Vr,69,69,69),sb=Lf(2),db={$:2},ol=db,pb=we(32),gb=we(31),Bu=function(e){return h(Ke,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return J(i)}else return O;else{var a=n.a;return J(a)}}),O,e)},hb=v(function(e,r){return t(Fe,r,h(Ke,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,c=o.c;return J(w(i,c))}else return O;else{var i=a.a;return J(i)}}),O,e))}),Vu=function(e){return h(Ke,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return J(i)}else return O;else{var a=n.a;return J(a)}}),O,e)},bb=we(33),_b=Tr("max"),yb=Tr("min"),wb=v(function(e,r){return t(Ce,of,h(tf,t(cf,e,r),e,r))}),xb=function(e){return t(Tr,"step",e)},kf=Tr("type"),Tf=Tr("value"),ka=nf,Sb=Ad,Df=v(function(e,r){switch(r.$){case 0:return qn;case 2:var n=r.a;return Hi(n);case 6:var a=r.a;return Gi(a);case 5:var i=r.a;return Vi(i);case 7:var a=r.a;return rf(a);case 8:var a=r.a;return wv(a);case 3:var a=r.a,i=r.b;return t(An,a,i);case 4:var o=r.a,c=r.b;return t(Ce,o,c);case 9:var l=r.a,u=r.b;return t(xv,l,t(Xv,e,u));case 1:var f=r.a;return Ie(t(Sb,e,f));default:var m=r.a,d=r.b;return t(nl,m,d)}}),Cb=k(function(e,r,n){return t(Rn,$([ce(ye),xe(t(Fe,ye,n)),un]),$([t(Le,$([ce(ka(ze(e*1e4)))]),qe),t(Le,t(P,un,t(ne,Df(wt),r)),qe),t(Le,$([ce(ka(ze(be(1-e)*1e4)))]),qe)]))}),Lb=k(function(e,r,n){return t(zr,$([xe(ye),ce(t(Fe,ye,n)),ac]),$([t(Le,$([xe(ka(ze(be(1-e)*1e4)))]),qe),t(Le,t(P,ac,t(ne,Df(wt),r)),qe),t(Le,$([xe(ka(ze(e*1e4)))]),qe)]))}),Rf=v(function(e,r){var n=Vu(e),a=Bu(e),i=function(){var L=w(n,a);e:for(;;)if(L.a.$===1){if(L.b.$===1)return L.a,L.b,!1;break e}else if(!L.a.a.$&&!L.b.$)switch(L.b.a.$){case 0:var x=L.a.a.a,z=L.b.a.a;return he(z,x)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cJ-r.cu)/(r.ct-r.cu),c=r.ib,l=c,u=Bu(l),f=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var L=u.a.a;return T(L)+"px"}(),m=Vu(l),d=function(){if(m.$===1)return"20px";if(m.a.$)return"100%";var L=m.a.a;return T(L)+"px"}(),b="thmb-"+(d+("-"+f)),s=$([t(ue,"width",d),t(ue,"height",f)]),y=t(hb,e,w(5,5)),_=y.a,C=y.b;return h(mf,$([pf(r.el)?qn:t(wb,_,C),ff,ce(function(){if(n.$===1)return ye;if(n.a.$){var L=n.a;return L}else return dr}()),xe(function(){if(a.$===1)return dr;if(a.a.$){var L=a.a;return L}else return dr}())]),r.el,t(Rn,$([ce(t(Fe,ye,n)),xe(t(Fe,De(20),a))]),$([M(ur,wr,hn("input"),$([df(r.el),t(Ce,pb,t(et,'input[type="range"].'+(b+"::-moz-range-thumb"),s)),t(Ce,bb,t(et,'input[type="range"].'+(b+"::-webkit-slider-thumb"),s)),t(Ce,gb,t(et,'input[type="range"].'+(b+"::-ms-thumb"),s)),Ie(Mr(b+" ui-slide-bar focusable-parent")),Ie(Mf(function(L){var x=fv(L);if(x.$===1)return r.bJ(0);var z=x.a;return r.bJ(z)})),Ie(kf("range")),Ie(xb(function(){var L=r.cG;if(L.$===1)return"any";var x=L.a;return ve(x)}())),Ie(yb(ve(r.cu))),Ie(_b(ve(r.ct))),Ie(Tf(ve(r.cJ))),i?Ie(t(nc,"orient","vertical")):qn,ce(i?t(Fe,De(20),a):t(Fe,ye,n)),xe(i?t(Fe,ye,n):t(Fe,De(20),a))]),er(D)),t(Le,t(P,ce(t(Fe,ye,n)),t(P,xe(t(Fe,De(20),a)),X(e,$([tl(i?h(Lb,o,t(P,_r("focusable-thumb"),l),n):h(Cb,o,t(P,_r("focusable-thumb"),l),a))])))),qe)])))}),Mb=h(ha,.5,.5,.5),Af=Er,ju=function(e){var r=e.c0,n=e.cJ,a=e.cu,i=e.ct,o=e.cG,c=e.bJ;return t(Le,$([ce(ye)]),t(Rf,$([Mn(2),tl(t(Le,$([ce(ye),xe(De(16)),un,on(zf),Un(4)]),qe))]),{el:t(sb,D,t(Rn,$([ce(ye)]),$([t(Le,$([fb]),zn(r)),t(Le,$([ce(ye),Pf,il($([ol]))]),zn(ve(n)))]))),ct:i,cu:a,bJ:c,cG:J(o),ib:Af($([ce(De(12)),xe(De(12)),Un(4),Wi(0),Ln(Mb),on(mb)])),cJ:n}))},Pb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),zb=v(function(e,r){switch(r.$){case 3:var c=r.a;return t(y3,D,{f8:c,gQ:B3,el:t(ib,D,zn(e)),bJ:c3(e)});case 0:var n=r.a,i=n.a,o=n.b,c=r.b;return ju({c0:e,ct:o,cu:i,bJ:u3(e),cG:.001*(o-i),cJ:c});case 1:var a=r.a,i=a.a,o=a.b,c=r.b;return ju({c0:e,ct:o,cu:i,bJ:t(Xe,ze,$3(e)),cG:1,cJ:c});default:var c=r.a;return t(Le,$([ce(ye)]),bn(t(Pa,D,$([t(Pa,$([t(br,"margin-bottom","6px")]),$([t(tb,$([V3(e)]),$([Yc(e)]))])),t(ab,$([kf("color"),t(br,"width","100%"),t(br,"height","26px"),t(br,"padding","0px"),nb(e),ob(e),Mf(function(l){return t(l3,e,t(Pb,vf,rb(l)))}),Tf(S3(c))]),D)]))))}}),ic=h(Vr,255,255,255),kb=function(e){return t(zr,$([ce(ye),Mn(8),t($f,0,14),Lt({b5:1,g4:0,hx:0,cI:0}),Ln(ji)]),$([t(Le,$([ea(16),Zc,Pn(ic)]),zn(e.hd)),t(zr,$([ce(ye),Mn(6)]),o3(t(rc,zb,e.aN)))]))},Tb=function(e){return t(zr,$([ce(ye),xe(ye),Pn(Qc),ea(12),t3,uf]),t(ne,kb,e))},Db=a3(Tb),Rb=function(e){return t(zr,$([ce(ye),xe(ye)]),$([t(Rn,$([Mn(14),ce(ye)]),D),t(Xc,Kh,Db(Zn(e).ge))]))},Ab=function(e){return{$:6,a:e}},Fb=Z(function(e,r,n,a){return"pad-"+(T(e)+("-"+(T(r)+("-"+(T(n)+("-"+T(a)))))))}),Ib=function(e){var r=e.cI,n=e.hx,a=e.b5,i=e.g4;if(_e(r,n)&&_e(r,a)&&_e(r,i)){var o=r;return t(Ce,pt,R(dt,"p-"+T(r),o,o,o,o))}else return t(Ce,pt,R(dt,M(Fb,r,n,a,i),r,n,a,i))},Eb=function(e){return{$:0,a:e}},Bb=function(e){return{$:1,a:e}},Vb=Bb,jb=function(e){var r=e.b.X;return On(r)},xi=h(Vr,255,60,0),Nb=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return On(r)+1+On(n)},Gb=function(e){var r=w(jb(e),Nb(e)-1),n=r.a,a=r.b;return t(Le,$([ce(ye),un]),t(Rf,$([tl(t(Rn,$([ce(ye),xe(De(4)),un,on(zf),Un(2)]),$([t(Le,$([ce(ka(n)),xe(ye),on(xi),Un(2)]),qe),t(Le,$([ce(ka(a-n))]),qe)])))]),{el:Vb(""),ct:a,cu:0,bJ:t(Xe,ze,Eb),cG:J(1),ib:Af($([ce(De(12)),xe(De(12)),Un(6),on(xi)])),cJ:n}))},Hb=Gi(2),ei=h(Vr,220,220,220),Wb=function(e){var r=e.a,n=function(){return r.$?$([Pn(ei)]):$([Pn(xi)])}();return t(Le,X(n,$([ea(14),Hb,Pf,il($([ol]))])),zn(t(hv,3,Zn(e).b8)))},Ub=function(e){e.a;var r=e.b.X;return t(je,function(n){return ze(60/(Zn(e).b8-n))},t(je,t(Xe,tv,function(n){return n.b8}),Sf(t($v,59,r))))},Ob=function(e){var r=Ub(e);if(r.$===1)return qe;var n=r.a;return t(Le,$([ea(14),Pn(Qc),il($([ol]))]),zn(T(n)+" FPS"))},Nu={$:1},qb={$:3},Jb={$:2},Yb={$:8},Xb=w$,Qb=v(function(e,r){return t(Mc,e,Xb(r))}),Zb=Qb("disabled"),Kb=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},e1=function(e){return t(St,Kb,e)?qn:_r("focusable")},Si=t(Ct,Ie,gf),Ff=v(function(e,r){var n=r.eV,a=r.el;return M(ur,wr,Kn,t(P,ce(dr),t(P,xe(dr),t(P,_r(p.ce+(" "+(p.ax+(" "+(p.hG+(" "+p.eT)))))),t(P,Wn,t(P,e1(e),t(P,Hi(Yb),t(P,Ie(_f(0)),function(){if(n.$===1)return t(P,Ie(Zb(!0)),e);var i=n.a;return t(P,Si(i),t(P,hf(function(o){return _e(o,sf)||_e(o,bf)?J(i):O}),e))}()))))))),er($([a])))}),Gu=v(function(e,r){return t(Ff,D,{el:t(Le,$([ce(De(36)),Hn(3),Pn(r),wf,ea(12),Zc,Ln(r),Wi(1),Un(4)]),zn("REC")),eV:J(e)})}),Hu=k(function(e,r,n){return t(Ff,D,{el:bn(h(ga,20,n,e)),eV:J(r)})}),r1=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Rn,D,$([t(Le,$([ce(De(40))]),function(){switch(r.$){case 0:return t(Gu,Nu,xi);case 1:return t(Gu,Jb,ei);default:return qe}}()),t(Le,$([ce(De(28))]),function(){switch(r.$){case 0:return qe;case 1:return gn(n)?qe:h(Hu,Gn.hq,qb,ei);default:return h(Hu,Gn.hp,Nu,ei)}}())]))},n1=function(e){return t(zr,$([ce(ye)]),$([Gb(e),t(Rn,$([ce(ye),Mn(14),t($f,0,6),un]),$([r1(e),Ob(e),Wb(e)]))]))},a1=function(e){return t(zr,$([ce(ye),Mn(14),Ib({b5:20,g4:0,hx:0,cI:0}),Lt({b5:1,g4:0,hx:0,cI:0}),Ln(ji)]),$([t(Le,$([ea(16),Zc,Pn(Qc)]),zn("Time Travel")),t(Xc,Ab,n1(e))]))},t1=v(function(e,r){return t(zr,$([Zn(r).bN.$9>600?on(Qh):on(Zh),Lt({b5:0,g4:0,hx:1,cI:0}),Ln(ji),ce(De(xa.c1)),xe(ye)]),$([function(){return e?qe:t(zr,$([ce(ye),xe(ye),Hn(14),Mn(14)]),$([a1(r),Rb(r)]))}()]))}),i1=function(e){return{$:3,a:e}},Wu=Vi(2),o1=h(Vr,232,78,50),c1=h(Vr,48,48,48),l1=function(e){return t(Tr,"href",Rd(e))},u1=Br("rel"),$1=Tr("target"),Uu=v(function(e,r){var n=r.fo,a=r.el;return M(ur,wr,hn("a"),t(P,Ie(l1(n)),t(P,Ie(u1("noopener noreferrer")),t(P,Ie($1("_blank")),t(P,ce(dr),t(P,xe(dr),t(P,_r(p.ce+(" "+(p.ax+(" "+p.es)))),e)))))),er($([a])))}),Ya=Tr("title"),v1=h(Vr,31,161,242),f1=function(e){var r=k(function(o,c,l){var u=_e(c,e)?ic:c1;return t(Le,$([en(Ya(o)),Si(i1(c)),Wn,Hn(7)]),bn(h(ga,40,u,l)))}),n=t(zr,$([Zv]),$([h(r,"Configurations",0,Gn.hM)])),a=t(zr,D,$([t(Uu,$([en(Ya("Twitter")),Wu,Wn,Hn(7)]),{el:bn(h(ga,40,v1,Gn.ig)),fo:"https://twitter.com/AzizErkalSelman"}),t(Uu,$([en(Ya("Source Code")),Wu,Wn,Hn(7)]),{el:bn(h(ga,40,o1,Gn.gD)),fo:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(Le,$([ce(De(xa.bF)),Hn(4),Si(Qv),Lt({b5:1,g4:0,hx:0,cI:0}),Ln(ji),Wn,en(Ya("Activate Distraction Free Mode"))]),bn(h(ga,46,ic,Gn.fy)));return t(zr,$([ce(De(xa.bF)),xe(ye),uf,on(Kv)]),$([i,n,a]))},m1=function(e){var r=t(Le,$([ce(De(xa.bF)),Zv,Hn(4),Si(Qv),Wn,en(Ya("Deactivate Distraction Free Mode (A)"))]),bn(h(ga,46,Kv,Gn.fy)));return e.bx?r:t(Rn,$([ce(De(xa.bF+xa.c1)),xe(ye)]),$([f1(e.bq),t(t1,e.bq,e.R)]))},s1=k(function(e,r,n){var a=w0(n.R),i=Zn(n.R);return h(Ih,{hm:$([S0({fQ:O,fY:O,hH:O})])},$([ce(De(ot(i.bN.$9))),xe(De(ot(i.bN.gL))),en(t(br,"-webkit-font-smoothing","antialiased")),en(t(br,"pointer-events","none")),en(t(br,"touch-action","none")),en(t(br,"user-select","none")),Oo(t(Xc,_0,t(r,i,a))),Oo(m1(n))]),bn(t(Eh,gi(y0),t(e,i,a))))}),d1=xr(function(e,r,n,a,i,o){var c=v(function(u,f){return w(M(s0,r,o,u,f),mu)}),l=function(u){var f=t(ov,n,u.g0);return w({bq:0,bx:!0,R:t(d0,f,a),dK:0},mu)};return Ag({gW:l,hW:b0,ii:c,ik:t(s1,e,i)})}),p1=Z(function(e,r,n,a){return ar(d1,e,r,n,a,v(function(i,o){return qe}),k(function(i,o,c){return c}))}),g1=function(e){return h(Ne,Oc,Wc,e)},h1=g1($([w(-3,-3),w(-3,1),w(-3,2),w(-3,3),w(-2,-2),w(-2,0),w(-2,3),w(-2,4),w(-1,-5),w(-1,-4),w(-1,-3),w(-1,-2),w(-1,0),w(-1,3),w(-1,4),w(0,-4),w(0,-3),w(0,-2),w(0,-1),w(0,0),w(0,1),w(0,2),w(0,3),w(0,4),w(1,-5),w(1,-4),w(1,-3),w(1,-2),w(1,0),w(1,3),w(1,4),w(2,-2),w(2,0),w(2,3),w(2,4),w(3,-3),w(3,1),w(3,2),w(3,3)])),b1=function(e){return{aP:h1}},vn=function(e){return e},ba=function(e){return vn($n*(e/180))},_n=Ss,_1=v(function(e,r){var n=e,a=r,i=a.dR-n.dR,o=a.it-n.it,c=a.ip-n.ip,l=t(rr,be(c),t(rr,be(o),be(i)));if(l){var u=i/l,f=o/l,m=c/l,d=_n(m*m+f*f+u*u);return J({ip:m/d,it:f/d,dR:u/d})}else return O}),ri=function(e){return e},cl=v(function(e,r){var n=e,a=r;return{ip:a.it*n.dR-a.dR*n.it,it:a.dR*n.ip-a.ip*n.dR,dR:a.ip*n.it-a.it*n.ip}}),rt=function(e){var r=e,n=t(rr,be(r.ip),t(rr,be(r.it),be(r.dR)));if(n){var a=r.dR/n,i=r.it/n,o=r.ip/n,c=_n(o*o+i*i+a*a);return J({ip:o/c,it:i/c,dR:a/c})}else return O},Ci=v(function(e,r){var n=e,a=r;return{ip:a.ip-n.ip,it:a.it-n.it,dR:a.dR-n.dR}}),y1=v(function(e,r){var n=e,a=r;return a.ip*n.ip+a.it*n.it+a.dR*n.dR}),If=v(function(e,r){var n=e,a=r;return he(a,n)>0}),w1=v(function(e,r){var n=e,a=r;return he(a,n)<0}),x1=v(function(e,r){var n=e,a=r;return{ip:a.ip-n.ip,it:a.it-n.it,dR:a.dR-n.dR}}),S1=v(function(e,r){var n=e,a=r,i=a.ip*n.ip+a.it*n.it+a.dR*n.dR;return{ip:n.ip*i,it:n.it*i,dR:n.dR*i}}),C1=function(e){var r=e;return{ip:-r.ip,it:-r.it,dR:-r.dR}},Ir=0,Ef={ip:0,it:0,dR:0},L1=k(function(e,r,n){return t(tc,function(a){var i=t(x1,t(S1,a,r),r);return t(tc,function(o){var c=t(cl,r,e),l=t(y1,n,c),u=t(If,Ir,l)?c:t(w1,Ir,l)?C1(c):Ef;return t(je,function(f){return H(a,o,f)},rt(u))},rt(i))},rt(e))}),M1=function(e){var r=e,n=be(r.dR),a=be(r.it),i=be(r.ip);if(he(i,a)<1)if(he(i,n)<1){var o=_n(r.dR*r.dR+r.it*r.it);return{ip:0,it:-r.dR/o,dR:r.it/o}}else{var o=_n(r.it*r.it+r.ip*r.ip);return{ip:-r.it/o,it:r.ip/o,dR:0}}else if(he(a,n)<1){var o=_n(r.dR*r.dR+r.ip*r.ip);return{ip:r.dR/o,it:0,dR:-r.ip/o}}else{var o=_n(r.ip*r.ip+r.it*r.it);return{ip:-r.it/o,it:r.ip/o,dR:0}}},ll=function(e){var r=M1(e),n=r,a=n,i=e,o=i,c={ip:o.it*a.dR-o.dR*a.it,it:o.dR*a.ip-o.ip*a.dR,dR:o.ip*a.it-o.it*a.ip};return w(r,c)},_a=function(e){var r=e;return r},fn=function(e){return e},P1=v(function(e,r){var n=ll(e),a=n.a,i=n.b;return fn({dj:r,dP:a,dQ:i,dS:e})}),z1=function(e){var r=t(Ci,e.bb,e.d5),n=_a(e.fn),a=t(cl,r,n),i=h(L1,r,n,a);if(i.$){var f=rt(r);if(f.$){var d=ll(e.fn),b=d.a,s=d.b;return fn({dj:e.d5,dP:s,dQ:e.fn,dS:b})}else{var m=f.a;return t(P1,m,e.d5)}}else{var o=i.a,c=o.a,l=o.b,u=o.c;return fn({dj:e.d5,dP:u,dQ:l,dS:c})}},Fn={ip:0,it:0,dR:0},k1=function(e){return{$:0,a:e}},or=function(e){var r=e;return be(r)},ni=function(e){var r=e;return .5*r},T1=hs,D1=function(e){var r=e;return T1(r)},R1=function(e){var r=ni(or(e.fr)),n=D1(r);return{du:k1(n),dJ:e.dJ}},cn=function(e){return e},ul=cn({ip:0,it:1,dR:0}),A1=function(e){var r=e.bb,n=e.d5,a=e.fn;return R1({fr:ba(40),dJ:z1({d5:ri(n),bb:ri(r),fn:t(Fe,ul,t(_1,Fn,ri(a)))})})},Yn=ps,F1=v(function(e,r){return(r-av(r/e)*e)/e}),I1=function(e){return 2*$n*e},oc=Z(function(e,r,n,a){return e+(r-e)*(1+Yn(I1(t(F1,n,a))))/2}),$l=function(e){return A1({d5:{ip:1+M(oc,-5,5,7,e.b8),it:1,dR:20},bb:{ip:0,it:0,dR:0},fn:{ip:0,it:1,dR:0}})},Jr=function(e){return e},E1=k(function(e,r,n){return{ip:e,it:r,dR:n}}),Gt=function(e){return e},ai=function(e){var r=e;return r},B1=v(function(e,r){var n=e,a=r;return a.ip*n.ip+a.it*n.it+a.dR*n.dR}),Bf=function(e){var r=e;return r.gp},Ve=v(function(e,r){var n=r;return e*n}),Vf=function(e){var r=e;return r.dj},V1=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=n.hf,l=c;return(a.ip-o.ip)*l.ip+(a.it-o.it)*l.it+(a.dR-o.dR)*l.dR}),j1=k(function(e,r,n){var a=e,i=r,o=n;return{ip:o.ip+i*a.ip,it:o.it+i*a.it,dR:o.dR+i*a.dR}}),N1=v(function(e,r){var n=Bf(r),a=e,i=a.hf,o=t(B1,i,n);if(o){var c=Vf(r),l=t(V1,e,c),u=t(Ve,-1/o,l);return J(h(j1,n,u,c))}else return O}),G1=v(function(e,r){return{ip:e,it:r}}),Ou=v(function(e,r){var n=e,a=r;return n*a}),H1=function(e){var r=e;return r},qu=function(e){var r=e;return H1(r.fP)},W1=function(e){var r=e;return r.a5},jf=v(function(e,r){var n=r;return n/e}),Ia=function(e){var r=e;return r.dj},cc=function(e){var r=e;return Ia(r)},lc=function(e){var r=e;return-r},vl=cn({ip:0,it:0,dR:-1}),U1=v(function(e,r){var n=e,a=r;return a/n}),O1=v(function(e,r){var n=e,a=r,i=n.dS,o=i,c=n.dQ,l=c,u=n.dP,f=u;return{ip:f.ip*a.ip+l.ip*a.it+o.ip*a.dR,it:f.it*a.ip+l.it*a.it+o.it*a.dR,dR:f.dR*a.ip+l.dR*a.it+o.dR*a.dR}}),Xn=v(function(e,r){return{gp:r,dj:e}}),Li=function(e){var r=e;return{ip:-r.ip,it:-r.it,dR:-r.dR}},ra=function(e){var r=e;return r.dS},uc=function(e){var r=e;return Li(ra(r))},q1=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=n.dP,l=c;return(a.ip-o.ip)*l.ip+(a.it-o.it)*l.it}),fl=k(function(e,r,n){var a=e,i=r,o=n;return{ip:a,it:i,dR:o}}),J1=Z(function(e,r,n,a){var i=e,o=r,c=n,l=a,u=i.dj,f=u,m=i.dS,d=m,b=i.dQ,s=b,y=i.dP,_=y;return{ip:f.ip+o*_.ip+c*s.ip+l*d.ip,it:f.it+o*_.it+c*s.it+l*d.it,dR:f.dR+o*_.dR+c*s.dR+l*d.dR}}),Y1=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=n.dQ,l=c;return(a.ip-o.ip)*l.ip+(a.it-o.it)*l.it}),X1=k(function(e,r,n){var a=e,i=t(Y1,qu(r),n),o=t(q1,qu(r),n),c=a.dJ,l=c,u=W1(r);u.a;var f=u.b,m=a.du;if(m.$){var y=m.a,_=t(U1,f,y),C=M(J1,l,t(Ou,_,o),t(Ou,_,i),Ir);return t(Xn,C,uc(a.dJ))}else{var d=m.a,b=lc(t(jf,d,t(Ve,.5,f))),s=t(O1,l,t(Fe,vl,rt(h(fl,o,i,b))));return t(Xn,cc(a.dJ),s)}}),Ta=gs,$c=function(e){var r=e;return{ip:Yn(r),it:Ta(r)}},Q1=function(e){var r=e;return{ip:-r.it,it:r.ip}},Z1=function(e){return e},K1=v(function(e,r){return Z1({dj:r,dP:e,dQ:Q1(e)})}),e_=v(function(e,r){return t(K1,$c(e),r)}),r_=k(function(e,r,n){var a=e.a,i=e.b;return{fP:t(e_,r,n),a5:w(or(a),or(i))}}),wn=function(e){var r=e;return r.ip},n_=v(function(e,r){var n=e,a=r;return{ip:n,it:a}}),xn=function(e){var r=e;return r.it},Sn=function(e){var r=e;return r.dR},a_=Z(function(e,r,n,a){var i=n.ip,o=n.it,c=function(f){return h(E1,ai(wn(f)),ai(xn(f)),ai(Sn(f)))},l=h(r_,w(Gt(r.$9),Gt(r.gL)),ba(0),t(G1,0,0)),u=t(n_,Gt(i),Gt(o));return t(je,c,t(N1,a,h(X1,e,l,u)))}),Ea=v(function(e,r){var n=e,a=r;return{ip:a.ip+n.ip,it:a.it+n.it,dR:a.dR+n.dR}}),t_=v(function(e,r){return{hf:e,dj:r}}),i_=v(function(e,r){var n=r;return t(t_,n.hf,t(Ea,e,n.dj))}),o_=v(function(e,r){return{hf:r,dj:e}}),ml=cn({ip:0,it:0,dR:1}),sl=ml,c_=t(o_,Fn,sl),l_=Z(function(e,r,n,a){return M(a_,r,n,a,t(i_,h(fl,Jr(0),Jr(0),Jr(e)),c_))}),Nf=l_(0),u_=v(function(e,r){var n=h(Nf,$l(e),e.bN,e.bL);if(n.$)return r;var a=n.a;return Re(r,{aP:t(Oc,w(ze(a.ip),ze(a.it)),r.aP)})}),$_=v(function(e,r){var n=r;return t(yv,e,n)}),v_=v(function(e,r){var n=h(Nf,$l(e),e.bN,e.bL);if(n.$)return r;var a=n.a;return Re(r,{aP:t($_,w(ze(a.ip),ze(a.it)),r.aP)})}),f_=v(function(e,r){return e.ek.fc&&e.bL.c_?t(v_,e,r):e.bL.c_?t(u_,e,r):r}),dl=function(e){return e},Gf=k(function(e,r,n){return he(n,e)<0?e:he(n,r)>0?r:n}),m_=function(e){var r=e;return r},s_=function(e){var r=h(Gf,1667,25e3,m_(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return dl({ip:n,it:a})},pl=v(function(e,r){return{$:0,a:e,b:r}}),po=v(function(e,r){var n=e,a=r;return he(a,n)>-1}),go=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),ln=v(function(e,r){var n=e,a=r;return a-n}),d_=cn({ip:-1,it:0,dR:0}),p_=cn({ip:0,it:-1,dR:0}),Hf=cn({ip:1,it:0,dR:0}),Qe=k(function(e,r,n){var a=e,i=r,o=n;return{ip:a,it:i,dR:o}}),g_=xr(function(e,r,n,a,i,o){var c=t(po,n,o)?ml:vl,l=t(po,r,i)?ul:p_,u=t(po,e,a)?Hf:d_,f=H(or(t(ln,e,a)),or(t(ln,r,i)),or(t(ln,n,o))),m=h(Qe,t(go,e,a),t(go,r,i),t(go,n,o)),d=fn({dj:m,dP:u,dQ:l,dS:c});return{fP:d,a5:f}}),h_=v(function(e,r){return ar(g_,wn(e),xn(e),Sn(e),wn(r),xn(r),Sn(r))}),vc=k(function(e,r,n){return{ip:e,it:r,dR:n}}),b_=v(function(e,r){var n=r/2;return t(pl,e,t(h_,h(vc,-n,-n,-n),h(vc,n,n,n)))}),gl=function(e){return{$:5,a:e}},__=function(e){return gl(e)},fc=function(e){return{$:0,a:e}},Wf=k(function(e,r,n){return{$:2,a:e,b:r,c:n}}),ho=function(e){return h(Gf,0,1,e<=.04045?e/12.92:t(Mt,(e+.055)/1.055,2.4))},Pt=op,y_=function(e){var r=el(e),n=r.hu,a=r.gE,i=r.fU;return h(Pt,ho(n),ho(a),ho(i))},w_=function(e){return h(Wf,0,fc(y_(e)),fc(0))},Uf=v(function(e,r){return{$:2,a:e,b:r}}),Of=v(function(e,r){return{$:4,a:e,b:r}}),qf=v(function(e,r){return{$:3,a:e,b:r}}),Jf=v(function(e,r){return{$:1,a:e,b:r}}),x_=k(function(e,r,n){return{ip:e,it:r,dR:n}}),S_=function(e){var r=e;return r},hl=function(e){var r=e;return S_(r.fP)},bl=function(e){var r=e;return r.a5},na=function(e){var r=e;return r.dP},aa=function(e){var r=e;return r.dQ},C_=v(function(e,r){return fn({dj:t(Ea,e,Ia(r)),dP:na(r),dQ:aa(r),dS:ra(r)})}),L_=v(function(e,r){return{fP:t(C_,e,hl(r)),a5:bl(r)}}),M_=v(function(e,r){var n=r;return t(Xn,t(Ea,e,n.dj),n.gp)}),P_=v(function(e,r){var n=r;return{m:t(M_,e,n.m),g5:n.g5,hs:n.hs}}),_l=function(e){var r=e;return r},z_=function(e){return e},Yf=v(function(e,r){var n=_l(r),a=n.a,i=n.b;return z_(w(e(a),e(i)))}),k_=v(function(e,r){return t(Yf,Ea(e),r)}),yl=function(e){var r=e;return r.f6},wl=function(e){var r=e;return r.hs},Xf=v(function(e,r){return{f6:r,hs:or(e)}}),T_=v(function(e,r){return t(Xf,wl(r),t(Ea,e,yl(r)))}),Qf=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return H(e(a),e(i),e(o))}),D_=v(function(e,r){return t(Qf,Ea(e),r)}),Ui=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=h(x_,n,a,i);switch(r.$){case 0:var m=r.a,c=r.b;return t(pl,m,t(L_,o,c));case 1:var m=r.a,l=r.b;return t(Jf,m,t(D_,o,l));case 3:var m=r.a,u=r.b;return t(qf,m,t(T_,o,u));case 2:var m=r.a,f=r.b;return t(Uf,m,t(P_,o,f));case 4:var m=r.a,d=r.b;return t(Of,m,t(k_,o,d));default:var b=r.a;return gl(t(ne,Ui(H(n,a,i)),b))}}),R_=function(e){return Ui(H(e,0,0))},Ju=function(e){return Ui(H(0,e,0))},A_=function(e){return Ui(H(0,0,e))},ti=k(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Yn(c),u=Ta(c),f=a.gp,m=f,d=m.ip*u,b=l*d,s=d*d,y=m.it*u,_=l*y,C=d*y,L=y*y,x=1-2*(s+L),z=m.dR*u,W=l*z,K=2*(C-W),ae=2*(C+W),te=d*z,ie=2*(te+_),re=2*(te-_),Y=y*z,de=2*(Y-b),pe=2*(Y+b),ke=z*z,Se=1-2*(L+ke),me=1-2*(s+ke);return{ip:Se*o.ip+K*o.it+ie*o.dR,it:ae*o.ip+me*o.it+de*o.dR,dR:re*o.ip+pe*o.it+x*o.dR}}),zt=k(function(e,r,n){var a=e,i=r,o=n,c=.5*i,l=Yn(c),u=Ta(c),f=a.dj,m=f,d=o.ip-m.ip,b=o.it-m.it,s=o.dR-m.dR,y=a.gp,_=y,C=_.ip*u,L=l*C,x=C*C,z=_.it*u,W=l*z,K=C*z,ae=z*z,te=1-2*(x+ae),ie=_.dR*u,re=l*ie,Y=2*(K-re),de=2*(K+re),pe=C*ie,ke=2*(pe+W),Se=2*(pe-W),me=z*ie,Te=2*(me-L),F=2*(me+L),I=ie*ie,E=1-2*(ae+I),B=1-2*(x+I);return{ip:m.ip+E*d+Y*b+ke*s,it:m.it+de*d+B*b+Te*s,dR:m.dR+Se*d+F*b+te*s}}),F_=k(function(e,r,n){return fn({dj:h(zt,e,r,Ia(n)),dP:h(ti,e,r,na(n)),dQ:h(ti,e,r,aa(n)),dS:h(ti,e,r,ra(n))})}),I_=k(function(e,r,n){return{fP:h(F_,e,r,hl(n)),a5:bl(n)}}),E_=v(function(e,r){var n=t(zt,e,r),a=t(ti,e,r);return function(i){var o=i;return t(Xn,n(o.dj),a(o.gp))}}),B_=k(function(e,r,n){var a=n;return{m:h(E_,e,r,a.m),g5:a.g5,hs:a.hs}}),V_=k(function(e,r,n){return t(Yf,t(zt,e,r),n)}),j_=k(function(e,r,n){return t(Xf,wl(n),h(zt,e,r,yl(n)))}),N_=k(function(e,r,n){return t(Qf,t(zt,e,r),n)}),Oi=k(function(e,r,n){switch(n.$){case 0:var l=n.a,a=n.b;return t(pl,l,h(I_,e,r,a));case 1:var l=n.a,i=n.b;return t(Jf,l,h(N_,e,r,i));case 3:var l=n.a,o=n.b;return t(qf,l,h(j_,e,r,o));case 2:var l=n.a,c=n.b;return t(Uf,l,h(B_,e,r,c));case 4:var l=n.a,u=n.b;return t(Of,l,h(V_,e,r,u));default:var f=n.a;return gl(t(ne,t(Oi,e,r),f))}}),xl=Hf,G_=t(Xn,Fn,xl),H_=v(function(e,r){return h(Oi,G_,vn(e),r)}),Sl=ul,W_=t(Xn,Fn,Sl),U_=v(function(e,r){return h(Oi,W_,vn(e),r)}),O_=t(Xn,Fn,sl),q_=v(function(e,r){return h(Oi,O_,vn(e),r)}),J_=M(Ni,237/255,212/255,0/255,1),Y_=v(function(e,r){var n=function(a){var i=a.a,o=a.b,c=(i+o)*.1,l=M(oc,-$n,$n,14,e.b8+c);return t(A_,-.5,t(Ju,o,t(R_,i,t(q_,l,t(H_,l,t(U_,l,t(b_,w_(J_),1)))))))};return t(Ju,M(oc,-.5,.5,7,e.b8),__(t(ne,n,ag(r.aP))))}),X_=function(e){return e},Q_=function(e){return{$:0,a:e}},Z_=Q_,K_={$:3},e2=K_,r2=Z(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),n2=r2,a2=function(e){return{$:1,a:e}},t2=a2,i2=function(e){return t(Br,"height",T(e))},o2=Bv,c2=function(e){return{$:2,a:e}},l2=c2,u2=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(l){return ze(l*1e3)/1e3},c=function(l){return ze(l*1e4)/100};return ya($(["rgba(",ve(c(r)),"%,",ve(c(n)),"%,",ve(c(a)),"%,",ve(o(i)),")"]))},$2=v(function(e,r){switch(r.$){case 0:return t(Jp,e,r);case 1:return t(Yp,e,r);case 2:return t(Xp,e,r);case 3:return t(Qp,e,r);case 4:return t(Zp,e,r);default:return t(Kp,e,r)}}),v2=v(function(e,r){switch(r.$){case 0:return t(Sp,e,r);case 1:return t(Cp,e,r);case 2:return t(Lp,e,r);case 3:return t(Mp,e,r);case 4:return t(Pp,e,r);case 5:return t(zp,e,r);case 6:return t(kp,e,r);case 7:return t(Tp,e,r);default:return Dp(e)}}),f2=k(function(e,r,n){return h(qp,e,r,n)}),Yu=function(e){var r=e;return r},Ba=fp,bo=M(Ba,1,1,1,1),Nr=k(function(e,r,n){return t(ne,function(a){return t(a,r,n)},e)}),m2=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),s2=v(function(e,r){var n=e,a=r.ip,i=r.it;return h(m2,n*a/i,n,n*(1-a-i)/i)}),d2=function(e){var r=e.a,n=e.b,a=e.c;return h(Pt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},qi=v(function(e,r){return d2(t(s2,e,r))}),Zf=v(function(e,r){return{ei:_e(e.ei,r.ei),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cE,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cE,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cE,cE:e.cE*r.cE}}),Ur=hp,p2=function(e){return Ur({et:e.t,eu:e.w,ev:e.z,ew:e.K,ex:e.u,ey:e.x,ez:e.A,eA:e.L,eB:e.v,eC:e.y,eD:e.B,eE:e.M,eF:0,eG:0,eH:0,eI:1})},_o=Je(function(e,r,n,a,i){var o=a.ei?1:-1,c=M(Ba,a.cE,a.cE,a.cE,o);return ar(i,e,c,p2(a),a.ei,r,n)}),Kf=xr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var c=i.a,l=i.b,u=e,f=r,m=n,d=t(Zf,c,a),b=l,s=o;e=u,r=f,n=m,a=d,i=b,o=s;continue e;case 1:var y=i.b,_=t(P,R(_o,e,r,n,a,y),o.P);return{P:_,_:o._,hI:o.hI};case 3:var C=i.b,L=t(P,R(_o,e,r,n,a,C),o._);return{P:o.P,_:L,hI:o.hI};case 2:var x=i.a,z=t(P,R(_o,e,r,n,a,x),o.hI);return{P:o.P,_:o._,hI:z};default:var W=i.a;return h(Ne,M(Kf,e,r,n,a),o,W)}}),g2=Z(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),em=g2,Cl=Z(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),h2=function(e){var r=e.ai,n=e.ac,a=e.ab;return M(Cl,518,r,n,a)},b2=v(function(e,r){return{$:6,a:e,b:r}}),_2=b2,rm=$([h2({ab:1,ac:0,ai:!1}),M(em,!1,!1,!1,!1),t(_2,0,1)]),Da=519,Ll=8,nm=15,Sa=7681,y2={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},Ee=xp,w2=v(function(e,r){return{$:0,a:e,b:r}}),x2=w2({d1:1,ee:0,eR:5}),hr=tp,S2=x2($([{e2:t(hr,-1,-1)},{e2:t(hr,1,-1)},{e2:t(hr,-1,1)},{e2:t(hr,1,1)}])),C2={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"e2"},uniforms:{}},L2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:f,k:m}}}}}}}}}}}},Ml=k(function(e,r,n){var a=e.dv,i=e.da,o=e.dO,c=v(function(f,m){var d=f;return m(d)}),l=v(function(f,m){var d=f;return m(d)}),u=function(f){return t(Xe,c(f.bR),t(Xe,l(f.bA),t(Xe,l(f.b_),l(f.b$))))};return t(u,n,t(u,r,h(L2,a,i,o)))}),Pl=function(e){return h(Ml,{da:e.da,dv:e.dv,dO:e.dO},{bA:e.bA,bR:e.bR,b_:e.b_,b$:e.b$},{bA:e.bA,bR:e.bR,b_:e.b_,b$:e.b$})},zl=function(e){return R(Ee,$([Pl(e),M(em,!1,!1,!1,!1)]),C2,y2,S2,{})},M2=zl({bA:Sa,da:0,dv:Ll,bR:Da,dO:nm,b_:Sa,b$:Sa}),P2=516,Xu=5386,ir=7680,z2=function(e){return t(Mt,2,e+4)},am=function(e){return zl({bA:ir,da:nm,dv:Ll,bR:P2,dO:z2(e),b_:Xu,b$:Xu})},k2=k(function(e,r,n){return sr($([h(Nr,e,n,rm),$([am(r),M2])]))}),T2=v(function(e,r){return sr(t(Q$,k2(e),r))}),D2=function(e){var r=e.ai,n=e.ac,a=e.ab;return M(Cl,513,r,n,a)},R2=D2({ab:1,ac:0,ai:!0}),A2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:c,h:l,i:u,j:f}}}}}}}}}}},F2=function(e){var r=e.cB,n=e.ci,a=e.b3,i=e.b0,o=e.ca,c=e.fJ,l=v(function(u,f){var m=u.a,d=u.b,b=u.c,s=f.a,y=f.b,_=f.c;return A2(m)(d)(b)(s)(y)(_)(r)(n)(a)(i)});return t(l,o,c)},I2=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Qu=v(function(e,r){var n=e,a=r;return h(I2,32774,n,a)}),E2=1,Zu=771,B2=770,kl=F2({b0:0,fJ:t(Qu,E2,Zu),b3:0,ca:t(Qu,B2,Zu),ci:0,cB:0}),ua=$([R2,kl]),V2=function(e){var r=e;return r.eK},j2=function(e){var r=e;return r.eL},tm=function(e){var r=e;return r.eM},N2=function(e){var r=e;return r.eN},G2=function(e){var r=e;return r.eO},im=function(e){var r=e;return r.eP},om=function(e){return H(t(ln,N2(e),V2(e)),t(ln,G2(e),j2(e)),t(ln,im(e),tm(e)))},H2=function(e){return e},W2=function(e){return fn({dj:H2({ip:e.K,it:e.L,dR:e.M}),dP:cn({ip:e.t,it:e.u,dR:e.v}),dQ:cn({ip:e.w,it:e.x,dR:e.y}),dS:cn({ip:e.z,it:e.A,dR:e.B})})},yo=v(function(e,r){var n=e,a=r,i=n.dS,o=i,c=n.dQ,l=c,u=n.dP,f=u;return{ip:a.ip*f.ip+a.it*f.it+a.dR*f.dR,it:a.ip*l.ip+a.it*l.it+a.dR*l.dR,dR:a.ip*o.ip+a.it*o.it+a.dR*o.dR}}),cm=v(function(e,r){var n=e,a=r,i=n.dj,o=i,c=a.ip-o.ip,l=a.it-o.it,u=a.dR-o.dR,f=n.dS,m=f,d=n.dQ,b=d,s=n.dP,y=s;return{ip:c*y.ip+l*y.it+u*y.dR,it:c*b.ip+l*b.it+u*b.dR,dR:c*m.ip+l*m.it+u*m.dR}}),lm=v(function(e,r){return{dj:t(cm,e,Ia(r)),dP:t(yo,e,na(r)),dQ:t(yo,e,aa(r)),dS:t(yo,e,ra(r))}}),Mi=function(e){var r=e;return r},He=v(function(e,r){var n=e,a=r;return t(rr,n,a)}),Oe=v(function(e,r){var n=e,a=r;return t(wa,n,a)}),U2=v(function(e,r){var n=Mi(r),a=Mi(e);return{eK:t(He,a.eK,n.eK),eL:t(He,a.eL,n.eL),eM:t(He,a.eM,n.eM),eN:t(Oe,a.eN,n.eN),eO:t(Oe,a.eO,n.eO),eP:t(Oe,a.eP,n.eP)}}),kr=function(e){var r=e;return r},O2=function(e){var r=e;return H(r.ip,r.it,r.dR)},nt=v(function(e,r){var n=e,a=r;return a+n}),q2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=ni(or(a)),c=ni(or(n)),l=ni(or(i)),u=O2(r),f=u.a,m=u.b,d=u.c;return{eK:t(nt,c,f),eL:t(nt,o,m),eM:t(nt,l,d),eN:t(ln,c,f),eO:t(ln,o,m),eP:t(ln,l,d)}}),Ku=Z(function(e,r,n,a){var i=n.f6,o=2*n.gJ*r,c=2*n.gI*r,l=2*n.gH*r,u=i.dR*r,f=i.it*r,m=i.ip*r,d=kr(ra(e)),b=be(l*d.ip)+be(c*d.it)+be(o*d.dR),s=kr(aa(e)),y=be(l*s.ip)+be(c*s.it)+be(o*s.dR),_=kr(na(e)),C=be(l*_.ip)+be(c*_.it)+be(o*_.dR),L=t(q2,H(C,y,b),t(cm,e,h(vc,m,f,u)));if(a.$)return J(L);var x=a.a;return J(t(U2,x,L))}),mc=Z(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var s=e,y=r,_=n,C=o;e=s,r=y,n=_,a=C;continue e;case 1:var c=i.a,l=M(Ku,e,r,c,n),s=e,y=r,_=l,C=o;e=s,r=y,n=_,a=C;continue e;case 2:var s=e,y=r,_=n,C=o;e=s,r=y,n=_,a=C;continue e;case 3:var c=i.a,l=M(Ku,e,r,c,n),s=e,y=r,_=l,C=o;e=s,r=y,n=_,a=C;continue e;case 4:var u=i.a,s=e,y=r,_=M(mc,e,r,n,u),C=o;e=s,r=y,n=_,a=C;continue e;default:var f=i.a,m=i.b,d=t(lm,W2(f),e),b=r*f.cE,s=e,y=r,_=M(mc,d,b,n,$([m])),C=o;e=s,r=y,n=_,a=C;continue e}}else return n}),ta=cp,ia=lp,oa=up,um=function(e){return{$:4,a:e}},J2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(P,n,r);e=i,r=o;continue e}else return r}),kt=function(e){return um(t(J2,e,D))},Y2={ei:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cE:1},e$=zl({bA:Sa,da:0,dv:Ll,bR:Da,dO:255,b_:Sa,b$:Sa}),X2=function(e){var r=e,n=t(rr,be(r.ip),t(rr,be(r.it),be(r.dR)));if(n){var a=r.dR/n,i=r.it/n,o=r.ip/n,c=_n(o*o+i*i+a*a);return c*n}else return Ir},pr={b3:0,f5:!1,ci:0,ds:0,cB:0,dG:0,ip:0,it:0,dR:0},Cr=v(function(e,r){var n=e,a=r;return Ur({et:n.ip,eu:n.cB,ev:a.ip,ew:a.cB,ex:n.it,ey:n.ci,ez:a.it,eA:a.ci,eB:n.dR,eC:n.b3,eD:a.dR,eE:a.b3,eF:n.dG,eG:n.ds,eH:a.dG,eI:a.ds})}),Xa=w({bG:t(Cr,pr,pr),cp:t(Cr,pr,pr),cq:t(Cr,pr,pr),cr:t(Cr,pr,pr)},M(Ba,0,0,0,0)),$m=514,vm=function(e){var r=e.ai,n=e.ac,a=e.ab;return M(Cl,515,r,n,a)},fm=240,Q2=$([vm({ab:1,ac:0,ai:!0}),Pl({bA:ir,da:fm,dv:0,bR:$m,dO:0,b_:ir,b$:ir}),kl]),Z2=v(function(e,r){var n=e,a=r.he,i=r.gz,o=r.fO,c=or(a),l=c,u=or(i),f=u,m=n.du;if(m.$){var b=m.a;return No(f)?Ur({et:2/(o*b),eu:0,ev:0,ew:0,ex:0,ey:2/b,ez:0,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:0,eG:0,eH:0,eI:1}):Ur({et:2/(o*b),eu:0,ev:0,ew:0,ex:0,ey:2/b,ez:0,eA:0,eB:0,eC:0,eD:-2/(f-l),eE:-(f+l)/(f-l),eF:0,eG:0,eH:0,eI:1})}else{var d=m.a;return No(f)?Ur({et:1/(o*d),eu:0,ev:0,ew:0,ex:0,ey:1/d,ez:0,eA:0,eB:0,eC:0,eD:-1,eE:-2*l,eF:0,eG:0,eH:-1,eI:0}):Ur({et:1/(o*d),eu:0,ev:0,ew:0,ex:0,ey:1/d,ez:0,eA:0,eB:0,eC:0,eD:-(f+l)/(f-l),eE:-2*f*l/(f-l),eF:0,eG:0,eH:-1,eI:0})}}),Ht=v(function(e,r){return(1&e>>r)===1?0:1}),K2=function(e){return $([vm({ab:1,ac:0,ai:!0}),Pl({bA:ir,da:fm,dv:e,bR:$m,dO:0,b_:ir,b$:ir}),kl])},ey=k(function(e,r,n){return sr(t(ne,function(a){var i=a<<4,o=M(Ba,t(Ht,a,0),t(Ht,a,1),t(Ht,a,2),t(Ht,a,3));return h(Nr,e,w(r,o),K2(i))},t(tn,1,t(Mt,2,n)-1)))}),Ca=function(e){var r=e;return r},ry=bp,ny={dj:Fn,dP:xl,dQ:Sl,dS:sl},Tt=function(e){var r=e;return r},ay=function(e){var r=Tt(Ia(e)),n=kr(ra(e)),a=kr(aa(e)),i=kr(na(e));return Ur({et:i.ip,eu:a.ip,ev:n.ip,ew:r.ip,ex:i.it,ey:a.it,ez:n.it,eA:r.it,eB:i.dR,eC:a.dR,eD:n.dR,eE:r.dR,eF:0,eG:0,eH:0,eI:1})},ty=v(function(e,r){var n=r;return ay(t(lm,n,e))}),iy=function(e){return t(ty,ny,e)},oy=function(e){var r=e;return r.dJ},cy=function(e){var r=e;return na(r)},ly=function(e){var r=e;return aa(r)},uy=function(e){var r=oy(e.f2),n=fn({dj:cc(r),dP:cy(r),dQ:ly(r),dS:Li(uc(r))}),a=kt(e.a9),i=a,o=M(mc,n,1,O,$([i]));if(o.$===1)return D;var c=o.a,l=iy(r),u=t(Ve,.99,t(He,or(e.ga),lc(tm(c)))),f=om(c),m=f.a,d=f.b,b=f.c,s=X2(h(fl,m,d,b)),y=t(Ve,1.01,t(nt,s,lc(im(c)))),_=t(Z2,e.f2,{fO:e.fO,gz:y,he:u}),C=ry(_).eI,L=C?kr(Li(uc(r))):Ca(cc(r)),x=function(){var me=e.id;switch(me.$){case 0:return w(0,0);case 1:return w(1,0);case 2:return w(2,0);case 3:var Te=me.a;return w(3,Te);case 4:var Te=me.a;return w(4,Te);default:return w(5,0)}}(),z=x.a,W=x.b,K=e.gx,ae=K,te=t(qi,ae,e.im),ie=te,re=Ur({et:0,eu:L.ip,ev:ta(ie),ew:e.fg,ex:0,ey:L.it,ez:ia(ie),eA:ai(s),eB:0,eC:L.dR,eD:oa(ie),eE:z,eF:0,eG:C,eH:0,eI:W}),Y=ar(Kf,re,l,_,Y2,i,{P:D,_:D,hI:D}),de=e.g7;switch(de.$){case 0:var pe=de.a;return sr($([h(Nr,Y.P,w(pe,bo),ua),h(Nr,Y._,Xa,ua)]));case 1:var pe=de.a;return sr($([h(Nr,Y.P,Xa,ua),$([e$]),h(Nr,Y.hI,pe.bG,rm),$([am(0)]),h(Nr,Y.P,w(pe,bo),Q2),h(Nr,Y._,Xa,ua)]));default:var ke=de.a,Se=de.b;return sr($([h(Nr,Y.P,w(Se,bo),ua),$([e$]),t(T2,Y.hI,ke),h(ey,Y.P,Se,On(ke)),h(Nr,Y._,Xa,ua)]))}},$y=function(e){return t(Br,"width",T(e))},vy=v(function(e,r){var n=$([t2(1),l2(0),Z_(!0),M(n2,0,0,0,0)]),a=function(){var z=e.fL;switch(z.$){case 0:return H(n,"0",1);case 1:return H(t(P,e2,n),"1",1);default:var W=z.a;return H(n,"0",W)}}(),i=a.a,o=a.b,c=a.c,l=e.a5,u=l.a,f=l.b,m=Yu(f),d=t(br,"height",T(m)+"px"),b=Yu(u),s=b/m,y=t(Fa,function(z){return uy({fO:s,f2:e.f2,ga:e.ga,a9:z.a9,gx:z.gx,g7:z.g7,fg:c,id:z.id,im:z.im})},r),_=t(br,"width",T(b)+"px"),C=e.a2,L=C,x=u2(L);return h(o2,"div",$([t(br,"padding","0px"),_,d]),$([w(o,h(f2,i,$([$y(ze(b*c)),i2(ze(m*c)),_,d,t(br,"display","block"),t(br,"background-color",x)]),y))]))}),fy=function(e){return{$:2,a:e}},my=function(e){return fy(e)},sy=function(e){return t(vy,{fL:my(e.cV),a2:e.a2,f2:e.f2,ga:e.ga,a5:e.a5},$([{a9:e.a9,gx:e.gx,g7:e.g7,id:e.id,im:e.im}]))},r$=function(e){return e},mm=Z(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),dy=Z(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),sm=Z(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),dm=Z(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),py=Z(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),gy=Z(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),hy=Z(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Tl=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,i=e.c;return M(hy,n,r,i,1);case 2:var n=e.a,r=e.b,i=e.c;return M(mm,n,r,i,1);case 3:var n=e.a,a=e.b,i=e.c;return M(dy,n,a,i,1);case 4:var n=e.a,a=e.b,i=e.c;return M(sm,n,a,i,1);case 5:var n=e.a,a=e.b,i=e.c;return M(gy,n,a,i,1);case 6:var n=e.a,a=e.b,i=e.c;return M(dm,n,a,i,1);case 7:var n=e.a,a=e.b,i=e.c;return M(py,n,a,i,1);case 8:return e;case 9:return e;default:return e}},Dl={$:0},by=Pe(function(e,r,n,a,i,o,c,l){e:for(;;)if(l.b){var u=l.a,f=l.b,m=Mi(c(u)),d=t(Oe,m.eN,e),b=t(He,m.eK,r),s=t(Oe,m.eO,n),y=t(He,m.eL,a),_=t(Oe,m.eP,i),C=t(He,m.eM,o),L=c,x=f;e=d,r=b,n=s,a=y,i=_,o=C,c=L,l=x;continue e}else return{eK:r,eL:a,eM:o,eN:e,eO:n,eP:i}}),_y=k(function(e,r,n){var a=Mi(e(r));return bt(by,a.eN,a.eK,a.eO,a.eL,a.eP,a.eM,e,n)}),wo=v(function(e,r){var n=e,a=r;return he(a,n)<1}),pm=function(e){return t(wo,e.eK,e.eN)&&t(wo,e.eL,e.eO)&&t(wo,e.eM,e.eP)?e:{eK:t(He,e.eN,e.eK),eL:t(He,e.eO,e.eL),eM:t(He,e.eP,e.eM),eN:t(Oe,e.eN,e.eK),eO:t(Oe,e.eO,e.eL),eP:t(Oe,e.eP,e.eM)}},gt=function(e){var r=e;return r},gm=function(e){var r=gt(e),n=r.a,a=r.b,i=r.c,o=wn(n),c=xn(n),l=Sn(n),u=wn(a),f=xn(a),m=Sn(a),d=wn(i),b=xn(i),s=Sn(i);return pm({eK:t(He,o,t(He,u,d)),eL:t(He,c,t(He,f,b)),eM:t(He,l,t(He,m,s)),eN:t(Oe,o,t(Oe,u,d)),eO:t(Oe,c,t(Oe,f,b)),eP:t(Oe,l,t(Oe,m,s))})},hm=$p,vr=function(e){return hm(Tt(e))},bm=function(e){var r=e;return r},Ji=function(e){return hm(bm(e))},_m=function(e){return e},yy=v(function(e,r){var n=e,a=r,i=t(rr,be(a.ip),t(rr,be(a.it),be(a.dR)));if(i){var o=a.dR/i,c=a.it/i,l=a.ip/i,u=_n(l*l+c*c+o*o);return{ip:n*l/u,it:n*c/u,dR:n*o/u}}else return Ef}),wy=yy(_m(1)),ym=k(function(e,r,n){var a=t(Ci,r,n),i=t(Ci,e,r);return wy(t(cl,a,i))}),xy=function(e){var r=gt(e),n=r.a,a=r.b,i=r.c,o=Ji(h(ym,n,a,i));return H({q:o,e2:vr(n)},{q:o,e2:vr(a)},{q:o,e2:vr(i)})},Sy=v(function(e,r){return{$:2,a:e,b:r}}),wm=Sy({d1:3,ee:0,eR:4}),Cy=function(e){if(e.b){var r=e.a,n=e.b,a=wm(t(ne,xy,e)),i=h(_y,gm,r,n);return M(mm,i,e,a,0)}else return Dl},Sr=k(function(e,r,n){return H(e,r,n)}),xm=function(){var e=Jr(1),r=Jr(1),n=Jr(1),a=t(Ve,-.5,e),i=t(Ve,-.5,r),o=t(Ve,-.5,n),c=h(Qe,o,i,a),l=t(Ve,.5,e),u=h(Qe,o,i,l),f=t(Ve,.5,r),m=h(Qe,o,f,a),d=h(Qe,o,f,l),b=t(Ve,.5,n),s=h(Qe,b,i,a),y=h(Qe,b,f,a),_=h(Qe,b,i,l),C=h(Qe,b,f,l);return Tl(Cy($([h(Sr,c,y,s),h(Sr,c,m,y),h(Sr,u,_,C),h(Sr,u,C,d),h(Sr,s,y,C),h(Sr,s,C,_),h(Sr,c,d,m),h(Sr,c,u,d),h(Sr,c,s,_),h(Sr,c,_,u),h(Sr,m,C,y),h(Sr,m,d,C)])))}(),Wt={$:0},Ly=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),My=k(function(e,r,n){var a=r.a,i=r.b,o=r.c,c=e(o),l=e(i),u=e(a),f=Ji(h(ym,u,l,c)),m={q:f,e2:vr(u)},d={q:f,e2:vr(l)},b={q:f,e2:vr(c)};return t(P,m,t(P,d,t(P,b,n)))}),Rl=function(e){var r=e;return r.H},Py=Z(function(e,r,n,a){if(r.$===1)return O;var i=r.a;if(n.$===1)return O;var o=n.a;if(a.$===1)return O;var c=a.a;return J(h(e,i,o,c))}),sc=4294967295>>>32-ct,dc=cs,zy=k(function(e,r,n){e:for(;;){var a=sc&r>>>e,i=t(dc,a,n);if(i.$){var f=i.a;return t(dc,sc&r,f)}else{var o=i.a,c=e-ct,l=r,u=o;e=c,r=l,n=u;continue e}}}),ky=function(e){return e>>>5<<5},Ty=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||he(e,n)>-1?O:he(e,ky(n))>-1?J(t(dc,sc&e,o)):J(h(zy,a,e,i))}),Al=function(e){var r=e;return r.au},xo=v(function(e,r){return t(Ty,e,Al(r))}),Dy=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return M(Py,k(function(c,l,u){return H(c,l,u)}),t(xo,a,e),t(xo,i,e),t(xo,o,e))};return t(Jn,r,Rl(e))},Ry=k(function(e,r,n){e:for(;;){var a=t(Ec,yr,e),i=a.a,o=a.b;if(he(Vo(i),yr)<0)return t(iv,!0,{C:r,n,r:i});var c=o,l=t(P,nv(i),r),u=n+1;e=c,r=l,n=u;continue e}}),Fl=function(e){return e.b?h(Ry,e,D,0):ev},Ay=v(function(e,r){return!t(St,t(Ct,Fg,e),r)}),Fy=function(e){var r=e.a;return r},Sm=v(function(e,r){var n=Fy(e),a=function(i){var o=i.a,c=i.b,l=i.c;return o>=0&&he(o,n)<0&&c>=0&&he(c,n)<0&&l>=0&&he(l,n)<0};return t(Ay,a,r)?{H:r,au:e}:{H:t(Iv,a,r),au:e}}),Iy=k(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Dt=Iy({d1:1,ee:3,eR:4}),ii=v(function(e,r){var n=Ca(r),a=Ca(e);return w(H(a.ip,a.it,a.dR),H(n.ip,n.it,n.dR))}),n$=h(Pt,0,0,0),So=xr(function(e,r,n,a,i,o){var c=o.a,l=o.b,u=o.c,f=t(Gc,t(ii,e,r),i);if(f.$){var d={q:n$,e2:vr(r)},b={q:n$,e2:vr(e)},s=u+1,y=u;return H(t(P,H(n,y,s),t(P,H(n,s,a),c)),t(P,d,t(P,b,l)),u+2)}else{var m=f.a;return H(t(P,H(n,m,a),c),l,u)}}),Ey=Je(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,c=o.a,l=o.b,u=o.c,f=n.b,m=e(u),d=e(l),b=e(c),s=a+2,y=a+1,_=a,C=e,L=r,x=f,z=a+3,W=ar(So,m,b,s,_,r,ar(So,d,m,y,s,r,ar(So,b,d,_,y,r,i)));e=C,r=L,n=x,a=z,i=W;continue e}else{var K=i,ae=K.a,te=K.b;return w(ae,mr(te))}}),By=Je(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,c=o.a,l=o.b,u=o.c,f=r.b,m=e(u),d=e(l),b=e(c),s=n+2,y=n+1,_=n,C=h(Za,t(ii,b,m),s,h(Za,t(ii,m,d),y,h(Za,t(ii,d,b),_,i))),L=t(P,H(_,y,s),a),x=e,z=f,W=n+3,K=L,ae=C;e=x,r=z,n=W,a=K,i=ae;continue e}else return H(a,i,n)}),Vn=k(function(e,r,n){var a=Dy(n),i=h(Ke,My(r),D,a),o=R(By,r,a,0,D,kv),c=o.a,l=o.b,u=o.c,f=R(Ey,r,l,a,0,H(c,D,u)),m=f.a,d=f.b,b=gn(d)?i:X(i,d);return h(Ly,e,t(Sm,Fl(b),m),t(Dt,b,m))}),pc=function(e){return{H:t(ne,function(r){return H(3*r,3*r+1,3*r+2)},t(tn,0,On(e)-1)),au:Fl(sr(t(ne,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},Cm=function(e){switch(e.$){case 0:return Wt;case 1:var a=e.a,r=e.b,n=t(ne,gt,r);return h(Vn,a,Er,pc(n));case 2:var a=e.a,r=e.b,n=t(ne,gt,r);return h(Vn,a,Er,pc(n));case 3:var a=e.a,i=e.b;return h(Vn,a,Er,i);case 4:var a=e.a,i=e.b;return h(Vn,a,function(o){return o.e2},i);case 5:var a=e.a,i=e.b;return h(Vn,a,function(o){return o.e2},i);case 6:var a=e.a,i=e.b;return h(Vn,a,function(o){return o.e2},i);case 7:var a=e.a,i=e.b;return h(Vn,a,function(o){return o.e2},i);case 8:return Wt;case 9:return Wt;default:return Wt}},a$=Cm(xm),Lm={$:0},U=Lm,Ze=v(function(e,r){return{$:1,a:e,b:r}}),Vy={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"cb"}},jy=1029,Ny=function(e){return{$:5,a:e}},Mm=function(e){var r=e;return Ny(r)},Gy=Mm(jy),Hy=1028,Wy=Mm(Hy),fr=k(function(e,r,n){return r===1?e?t(P,Gy,n):t(P,Wy,n):n}),Pm={src:`
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
    `,attributes:{position:"e2",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Co=Z(function(e,r,n,a){return t(Ze,r,Pe(function(i,o,c,l,u,f,m,d){return R(Ee,h(fr,l,a,d),Pm,Vy,n,{cb:e,c,d:o,e:f,f:i,g:u})}))}),Il={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},zm={src:`
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
    `,attributes:{position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Zr=Z(function(e,r,n,a){return t(Ze,r,Pe(function(i,o,c,l,u,f,m,d){return R(Ee,h(fr,l,a,d),zm,Il,n,{aO:e,c,d:o,e:f,f:i,g:u})}))}),km=v(function(e,r){return{$:3,a:e,b:r}}),Uy={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cz",sceneProperties:"f"}},Tm={src:`
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
    `,attributes:{position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cz",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Oy=Z(function(e,r,n,a){return t(km,n,Pe(function(i,o,c,l,u,f,m,d){return R(Ee,d,Tm,Uy,a,{aO:e,c,d:o,cz:r,e:f,f:i,g:u})}))}),El={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",sceneProperties:"f"}},Rt=function(e){var r=e;return r},Yi=vp,Kr=Je(function(e,r,n,a,i){return t(Ze,n,Pe(function(o,c,l,u,f,m,d,b){return R(Ee,h(fr,u,i,b),zm,El,a,{a7:t(Yi,Rt(r),e),c:l,d:c,e:m,f:o,g:f})}))}),qy={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a7",pointRadius:"cz",sceneProperties:"f"}},Jy=Je(function(e,r,n,a,i){return t(km,a,Pe(function(o,c,l,u,f,m,d,b){return R(Ee,b,Tm,qy,i,{a7:t(Yi,Rt(r),e),c:l,d:c,cz:n,e:m,f:o,g:f})}))}),Dm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",materialColor:"db",sceneProperties:"f",viewMatrix:"g"}},Rm={src:`
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
    `,attributes:{normal:"q",position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ut=Z(function(e,r,n,a){return t(Ze,r,Pe(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return R(Ee,h(fr,l,a,d),Rm,Dm,n,{U:s,bG:b.bG,cp:b.cp,cq:b.cq,cr:b.cr,db:e,c,d:o,e:f,f:i,g:u})}))}),Am={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",materialColorTexture:"dc",normalMapTexture:"bh",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},Fm={src:`
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
    `,attributes:{normal:"q",position:"e2",tangent:"fi",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Yy=xr(function(e,r,n,a,i,o){return t(Ze,a,Pe(function(c,l,u,f,m,d,b,s){var y=b.a,_=b.b;return R(Ee,h(fr,f,o,s),Fm,Am,i,{U:_,bG:y.bG,cp:y.cp,cq:y.cq,cr:y.cr,dc:e,c:u,d:l,bh:r,e:d,f:c,bn:n,g:m})}))}),Im={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cR",constantBaseColor:"cS",constantMetallic:"cT",constantRoughness:"cU",enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",metallicTexture:"df",normalMapTexture:"bh",roughnessTexture:"dz",sceneProperties:"f",useNormalMap:"bn",viewMatrix:"g"}},Xy=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){return function(m){return t(Ze,u,Pe(function(d,b,s,y,_,C,L,x){var z=L.a,W=L.b;return R(Ee,h(fr,y,m,x),Fm,Im,f,{cR:e,cS:r,cT:o,cU:a,U:W,bG:z.bG,cp:z.cp,cq:z.cq,cr:z.cr,df:i,c:s,d:b,bh:c,e:C,dz:n,f:d,bn:l,g:_})}))}}}}}}}}}}},Em={src:`
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
    `,attributes:{},uniforms:{baseColor:"cQ",enabledLights:"U",lights12:"bG",lights34:"cp",lights56:"cq",lights78:"cr",metallic:"de",roughness:"dy",sceneProperties:"f",viewMatrix:"g"}},Ot=xr(function(e,r,n,a,i,o){return t(Ze,a,Pe(function(c,l,u,f,m,d,b,s){var y=b.a,_=b.b;return R(Ee,h(fr,f,o,s),Rm,Em,i,{cQ:e,U:_,bG:y.bG,cp:y.cp,cq:y.cq,cr:y.cr,de:n,c:u,d:l,e:d,dy:r,f:c,g:m})}))}),Qy=function(e){return{$:0,a:e}},t$=v(function(e,r){return{$:1,a:e,b:r}}),at=v(function(e,r){if(r.$){var n=r.a.E;return w(n,1)}else return r.a,w(e,0)}),Zy=function(e){return M(Ba,ta(e),ia(e),oa(e),1)},Bl=M(Ba,0,0,0,0),oi=v(function(e,r){if(r.$){var a=r.a.E;return w(a,Bl)}else{var n=r.a;return w(e,Zy(n))}}),Bm=v(function(e,r){var n=w(e,r);if(n.a.$){var i=n.a.a.E;return t(t$,w(i,Bl),t(at,i,r))}else if(n.b.$){var i=n.b.a.E;return t(t$,t(oi,i,e),t(at,i,r))}else{var a=n.a.a;return n.b.a,Qy(a)}}),Ky=k(function(e,r,n){return{$:0,a:e,b:r,c:n}}),qt=Z(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),ew=Z(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),rw=function(e){return t(hr,e,1)},gc=t(hr,0,0),$a=v(function(e,r){if(r.$){var a=r.a.E;return w(a,gc)}else{var n=r.a;return w(e,rw(n))}}),Vm=Z(function(e,r,n,a){var i=M(ew,e,r,n,a);if(i.a.$){var u=i.a.a.E;return M(qt,w(u,Bl),t($a,u,r),t($a,u,n),t(at,u,a))}else if(i.b.$){var u=i.b.a.E;return M(qt,t(oi,u,e),w(u,gc),t($a,u,n),t(at,u,a))}else if(i.c.$){var u=i.c.a.E;return M(qt,t(oi,u,e),t($a,u,r),w(u,gc),t(at,u,a))}else if(i.d.$){var u=i.d.a.E;return M(qt,t(oi,u,e),t($a,u,r),t($a,u,n),w(u,1))}else{var o=i.a.a,c=i.b.a,l=i.c.a;return i.d.a,h(Ky,o,c,l)}}),nw={src:`
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
    `,attributes:{},uniforms:{backlight:"cO",colorTexture:"cb",sceneProperties:"f"}},Lo=Je(function(e,r,n,a,i){return t(Ze,n,Pe(function(o,c,l,u,f,m,d,b){return R(Ee,h(fr,u,i,b),Pm,nw,a,{cO:Rt(r),cb:e,c:l,d:c,e:m,f:o,g:f})}))}),jm={src:`
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
    `,attributes:{normal:"q",position:"e2",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},aw=Z(function(e,r,n,a){return t(Ze,r,Pe(function(i,o,c,l,u,f,m,d){var b=m.a,s=m.b;return R(Ee,h(fr,l,a,d),jm,Am,n,{U:s,bG:b.bG,cp:b.cp,cq:b.cq,cr:b.cr,dc:e,c,d:o,bh:e,e:f,f:i,bn:0,g:u})}))}),tw=_c(function(e,r,n,a,i,o,c,l,u){return t(Ze,c,Pe(function(f,m,d,b,s,y,_,C){var L=_.a,x=_.b;return R(Ee,h(fr,b,u,C),jm,Im,l,{cR:e,cS:r,cT:o,cU:a,U:x,bG:L.bG,cp:L.cp,cq:L.cq,cr:L.cr,df:i,c:d,d:m,bh:e,e:y,dz:n,f,bn:0,g:s})}))}),ht=k(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),iw=function(e){var r=e;return h(ht,r.eN,r.eK,.5)},ow=function(e){var r=e;return h(ht,r.eO,r.eL,.5)},cw=function(e){var r=e;return h(ht,r.eP,r.eM,.5)},lw=function(e){return h(Qe,iw(e),ow(e),cw(e))},$e=function(e){var r=om(e),n=r.a,a=r.b,i=r.c;return{f6:Tt(lw(e)),gH:n/2,gI:a/2,gJ:i/2}},Vl=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.E;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,a=r.d;return M(Co,l,$e(i),c,a);case 6:var i=r.a,c=r.c,a=r.d;return M(Co,l,$e(i),c,a);case 7:var i=r.a,c=r.c,a=r.d;return M(Co,l,$e(i),c,a);case 8:return U;case 9:return U;default:return U}}else{var n=e.b.a;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,a=r.d;return M(Zr,n,$e(i),c,a);case 2:var i=r.a,c=r.c,a=r.d;return M(Zr,n,$e(i),c,a);case 3:var i=r.a,c=r.c,a=r.d;return M(Zr,n,$e(i),c,a);case 4:var i=r.a,c=r.c,a=r.d;return M(Zr,n,$e(i),c,a);case 5:var i=r.a,c=r.c,a=r.d;return M(Zr,n,$e(i),c,a);case 6:var i=r.a,c=r.c,a=r.d;return M(Zr,n,$e(i),c,a);case 7:var i=r.a,c=r.c,a=r.d;return M(Zr,n,$e(i),c,a);case 8:var i=r.a,c=r.c;return M(Zr,n,$e(i),c,0);case 9:var i=r.a,c=r.c;return M(Zr,n,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return M(Oy,n,o,$e(i),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.E,f=e.c;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:var i=r.a,c=r.c,a=r.d;return R(Lo,l,f,$e(i),c,a);case 6:var i=r.a,c=r.c,a=r.d;return R(Lo,l,f,$e(i),c,a);case 7:var i=r.a,c=r.c,a=r.d;return R(Lo,l,f,$e(i),c,a);case 8:return U;case 9:return U;default:return U}}else{var u=e.b.a,f=e.c;switch(r.$){case 0:return U;case 1:var i=r.a,c=r.c,a=r.d;return R(Kr,u,f,$e(i),c,a);case 2:var i=r.a,c=r.c,a=r.d;return R(Kr,u,f,$e(i),c,a);case 3:var i=r.a,c=r.c,a=r.d;return R(Kr,u,f,$e(i),c,a);case 4:var i=r.a,c=r.c,a=r.d;return R(Kr,u,f,$e(i),c,a);case 5:var i=r.a,c=r.c,a=r.d;return R(Kr,u,f,$e(i),c,a);case 6:var i=r.a,c=r.c,a=r.d;return R(Kr,u,f,$e(i),c,a);case 7:var i=r.a,c=r.c,a=r.d;return R(Kr,u,f,$e(i),c,a);case 8:var i=r.a,c=r.c;return R(Kr,u,f,$e(i),c,0);case 9:var i=r.a,c=r.c;return R(Kr,u,f,$e(i),c,0);default:var i=r.a,o=r.b,c=r.d;return R(Jy,u,f,o,$e(i),c)}}case 2:e.a;var m=e.b,ae=e.c,d=t(Bm,m,ae);if(d.$){var y=d.a,_=y.a;y.b;var C=d.b,L=C.a,x=C.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,s=r.d;return M(aw,_,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return ar(Yy,_,L,x,$e(i),c,s);case 8:return U;case 9:return U;default:return U}}else{var b=d.a;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,s=r.d;return M(Ut,b,$e(i),c,s);case 3:return U;case 4:var i=r.a,c=r.c,s=r.d;return M(Ut,b,$e(i),c,s);case 5:return U;case 6:var i=r.a,c=r.c,s=r.d;return M(Ut,b,$e(i),c,s);case 7:var i=r.a,c=r.c,s=r.d;return M(Ut,b,$e(i),c,s);case 8:return U;case 9:return U;default:return U}}default:e.a;var z=e.b,W=e.c,K=e.d,ae=e.e,te=M(Vm,z,W,K,ae);if(te.$){var de=te.a,pe=de.a,ke=de.b,Se=te.b,me=Se.a,Te=Se.b,F=te.c,I=F.a,E=F.b,B=te.d,L=B.a,x=B.b;switch(r.$){case 0:return U;case 1:return U;case 2:return U;case 3:return U;case 4:return U;case 5:return U;case 6:var i=r.a,c=r.c,a=r.d;return ns(tw,pe,ke,me,Te,I,E,$e(i),c,a);case 7:var i=r.a,c=r.c,a=r.d;return Xy(pe)(ke)(me)(Te)(I)(E)(L)(x)($e(i))(c)(a);case 8:return U;case 9:return U;default:return U}}else{var ie=te.a,re=te.b,Y=te.c;switch(r.$){case 0:return U;case 1:return U;case 2:var i=r.a,c=r.c,a=r.d;return ar(Ot,ie,re,Y,$e(i),c,a);case 3:return U;case 4:var i=r.a,c=r.c,a=r.d;return ar(Ot,ie,re,Y,$e(i),c,a);case 5:return U;case 6:var i=r.a,c=r.c,a=r.d;return ar(Ot,ie,re,Y,$e(i),c,a);case 7:var i=r.a,c=r.c,a=r.d;return ar(Ot,ie,re,Y,$e(i),c,a);case 8:return U;case 9:return U;default:return U}}}}),Mo=function(e){var r=e;return r.ip},Po=function(e){var r=e;return r.it},zo=function(e){var r=e;return r.dR},uw=function(e){var r=e,n=zo(r.dS),a=Po(r.dS),i=Mo(r.dS),o=zo(r.dQ),c=Po(r.dQ),l=Mo(r.dQ),u=zo(r.dP),f=Po(r.dP),m=Mo(r.dP);return m*c*n+f*o*i+u*l*a-u*c*i-f*l*n-m*o*a>0},$w=function(e){var r=Tt(Ia(e)),n=kr(ra(e)),a=kr(aa(e)),i=kr(na(e));return{ei:uw(e),t:i.ip,u:i.it,v:i.dR,w:a.ip,x:a.it,y:a.dR,z:n.ip,A:n.it,B:n.dR,K:r.ip,L:r.it,M:r.dR,cE:1}},ma=v(function(e,r){return{$:5,a:e,b:r}}),Nm=v(function(e,r){var n=r;switch(n.$){case 0:return U;case 5:var a=n.a,i=n.b,o=t(Zf,a,e);return t(ma,o,i);case 1:return t(ma,e,n);case 3:return t(ma,e,n);case 2:return t(ma,e,n);default:return t(ma,e,n)}}),Gm=v(function(e,r){return t(Nm,$w(e),r)}),Xi=function(e){return{$:2,a:e}},vw=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f6;return{f6:{ip:n*o.ip,it:a*o.it,dR:i*o.dR},gH:n*r.gH,gI:a*r.gI,gJ:i*r.gJ}}),fw=sp,mw=mp,i$=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(c){return function(l){return function(u){return function(f){var m=e.a,d=e.b,b=e.c,s=mw(a),y=s.ip,_=s.it,C=s.dR,L=s.fu,x=fw({fu:L,ip:y*m,it:_*d,dR:C*b});return bt(r,n,x,i,o,c,l,u,f)}}}}}}}}}},hc=v(function(e,r){switch(r.$){case 0:return Lm;case 5:var n=r.a,a=r.b;return t(ma,n,t(hc,e,a));case 1:var i=r.a,o=r.b;return t(Ze,t(vw,e,i),t(i$,e,o));case 3:return r;case 2:var o=r.a;return Xi(t(i$,e,o));default:var c=r.a;return um(t(ne,hc(e),c))}}),jl=v(function(e,r){var n=r;return t(hc,e,n)}),Nl={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Hm=7683,Wm=7682,sw=h(Ml,{da:0,dv:0,dO:15},{bA:ir,bR:Da,b_:ir,b$:Hm},{bA:ir,bR:Da,b_:ir,b$:Wm}),dw=h(Ml,{da:0,dv:0,dO:15},{bA:ir,bR:Da,b_:ir,b$:Wm},{bA:ir,bR:Da,b_:ir,b$:Hm}),Gl=v(function(e,r){return e?t(P,dw,r):t(P,sw,r)}),pw={src:`
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
    `,attributes:{normal:"q",position:"e2"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cF",viewMatrix:"g"}},gw=function(e){if(e.$){var r=e.c;return J(Pe(function(n,a,i,o,c,l,u,f){return R(Ee,t(Gl,o,f),pw,Nl,r,{c:i,d:a,e:l,f:n,cF:u,g:c})}))}else return O},Pi=function(e){var r=gw(e);if(r.$)return U;var n=r.a;return Xi(n)},hw=Z(function(e,r,n,a){var i=t(Vl,n,xm),o=function(){var m=w(e,r);return m.a?m.b?kt($([i,Pi(a$)])):i:m.b?Pi(a$):U}(),c=bl(a),l=c.a,u=c.b,f=c.c;return t(Gm,hl(a),t(jl,H(l,u,f),o))}),bw=v(function(e,r){return M(hw,!0,!0,e,r)}),Um=v(function(e,r){return{$:0,a:e,b:r}}),_w=function(e){var r=el(e),n=r.hu,a=r.gE,i=r.fU;return h(Pt,n,a,i)},yw=function(e){return t(Um,0,fc(_w(e)))},ww=function(e){var r=e;return r.m},tt=function(e){var r=e;return Yn(r)},xw=v(function(e,r){var n=e.e2,a=e.q;return t(P,{q:Ji(a),e2:vr(n)},r)}),Sw=Ti(function(e,r,n,a,i,o,c){e:for(;;)if(c.b){var l=c.a,u=c.b,f=oa(l.e2),m=ia(l.e2),d=ta(l.e2),b=t(wa,e,d),s=t(rr,r,d),y=t(wa,n,m),_=t(rr,a,m),C=t(wa,i,f),L=t(rr,o,f),x=u;e=b,r=s,n=y,a=_,i=C,o=L,c=x;continue e}else return pm({eK:r,eL:a,eM:o,eN:e,eO:n,eP:i})}),Om=v(function(e,r){var n=oa(e.e2),a=ia(e.e2),i=ta(e.e2);return yc(Sw,i,i,a,a,n,n,r)}),Cw=function(e){var r=h(O$,xw,D,Al(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,Rl(e)),o=t(Om,n,a);return M(sm,o,e,i,0)}else return Dl},o$=v(function(e,r){var n=e,a=r,i=n.dQ,o=i,c=n.dP,l=c;return{ip:a.ip*l.ip+a.it*o.ip,it:a.ip*l.it+a.it*o.it,dR:a.ip*l.dR+a.it*o.dR}}),zi=function(e){var r=e;return Ta(r)},bc=function(e){return vn(2*$n*e)},Lw=Er,c$=Lw({dj:Fn,dP:xl,dQ:Sl}),qm=function(){var e=72,r=t(jf,e,bc(1)),n=Jr(1),a=_a(ml),i=_a(vl),o=Jr(1),c=t(Ve,.5,o),l=h(Qe,Ir,Ir,c),u=t(Ve,-.5,o),f=h(Qe,Ir,Ir,u),m=function(s){var y=t(Ve,s,r),_=_a(t(o$,c$,$c(y))),C=t(Ve,tt(y),n),L=t(Ve,zi(y),n),x=h(Qe,C,L,c),z=h(Qe,C,L,u),W=t(yi,e,s+1),K=t(Ve,W,r),ae=_a(t(o$,c$,$c(K))),te=t(Ve,tt(K),n),ie=t(Ve,zi(K),n),re=h(Qe,te,ie,u),Y=h(Qe,te,ie,c);return $([H({q:i,e2:f},{q:i,e2:re},{q:i,e2:z}),H({q:_,e2:z},{q:ae,e2:re},{q:ae,e2:Y}),H({q:_,e2:z},{q:ae,e2:Y},{q:_,e2:x}),H({q:a,e2:l},{q:a,e2:x},{q:a,e2:Y})])},d=t(ne,m,t(tn,0,e-1)),b=pc(sr(d));return Tl(Cw(b))}(),l$=Cm(qm),Mw=function(e){var r=Bf(e),n=ll(r),a=n.a,i=n.b;return fn({dj:Vf(e),dP:a,dQ:i,dS:r})},Pw=function(e){var r=e;return r.g5},zw=function(e){var r=e;return r.hs},kw=Z(function(e,r,n,a){var i=Mw(ww(a)),o=t(Vl,n,qm),c=function(){var d=w(e,r);return d.a?d.b?kt($([o,Pi(l$)])):o:d.b?Pi(l$):U}(),l=zw(a),u=l,f=Pw(a),m=f;return t(Gm,i,t(jl,H(u,u,m),c))}),Tw=v(function(e,r){return M(kw,!0,!0,e,r)}),u$={src:`
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
    `,attributes:{triangleVertex:"dF"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bX",viewMatrix:"g"}},$$={src:`
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
    `,attributes:{triangleVertex:"dF"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bX",viewMatrix:"g"}},Qa=function(e){var r=gt(e),n=r.a,a=r.b,i=r.c,o=Ca(n),c=Ca(a),l=Ca(i);return Ur({et:o.ip,eu:c.ip,ev:l.ip,ew:0,ex:o.it,ey:c.it,ez:l.it,eA:0,eB:o.dR,eC:c.dR,eD:l.dR,eE:0,eF:0,eG:0,eH:0,eI:0})},Jt=wm($([H({dF:0},{dF:1},{dF:2})])),Dw=v(function(e,r){var n=gm(r),a=$e(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var i=e.b.a;return t(Ze,a,Pe(function(x,z,W,K,ae,te,ie,re){return R(Ee,h(fr,K,0,re),u$,Il,Jt,{aO:i,c:W,d:z,e:te,f:x,bX:Qa(r),g:ae})}));case 1:if(e.b.$)return e.a,U;var o=e.b.a,c=e.c;return t(Ze,a,Pe(function(x,z,W,K,ae,te,ie,re){return R(Ee,h(fr,K,0,re),u$,El,Jt,{a7:t(Yi,Rt(c),o),c:W,d:z,e:te,f:x,bX:Qa(r),g:ae})}));case 2:e.a;var l=e.b,s=e.c,u=t(Bm,l,s);if(u.$)return U;var f=u.a;return t(Ze,a,Pe(function(x,z,W,K,ae,te,ie,re){var Y=ie.a,de=ie.b;return R(Ee,h(fr,K,0,re),$$,Dm,Jt,{U:de,bG:Y.bG,cp:Y.cp,cq:Y.cq,cr:Y.cr,db:f,c:W,d:z,e:te,f:x,bX:Qa(r),g:ae})}));default:e.a;var m=e.b,d=e.c,b=e.d,s=e.e,y=M(Vm,m,d,b,s);if(y.$)return U;var _=y.a,C=y.b,L=y.c;return t(Ze,a,Pe(function(x,z,W,K,ae,te,ie,re){var Y=ie.a,de=ie.b;return R(Ee,h(fr,K,0,re),$$,Em,Jt,{cQ:_,U:de,bG:Y.bG,cp:Y.cp,cq:Y.cq,cr:Y.cr,de:L,c:W,d:z,e:te,dy:C,f:x,bX:Qa(r),g:ae})}))}}),Rw=function(){var e=$([{bm:t(hr,0,1)},{bm:t(hr,1,1)},{bm:t(hr,2,1)},{bm:t(hr,0,-1)},{bm:t(hr,1,-1)},{bm:t(hr,2,-1)}]),r=$([H(0,1,2),H(3,5,4),H(3,4,1),H(3,1,0),H(4,5,2),H(4,2,1),H(5,3,0),H(5,0,2)]);return t(Dt,e,r)}(),Aw={src:`
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
    `,attributes:{triangleShadowVertex:"bm"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cF",triangleVertexPositions:"bX",viewMatrix:"g"}},v$=function(e){return Xi(Pe(function(r,n,a,i,o,c,l,u){return R(Ee,t(Gl,i,u),Aw,Nl,Rw,{c:a,d:n,e:c,f:r,cF:l,bX:Qa(e),g:o})}))},Fw=Z(function(e,r,n,a){var i=t(Dw,n,a),o=w(e,r);return o.a?o.b?kt($([i,v$(a)])):i:o.b?v$(a):U}),Iw=v(function(e,r){return M(Fw,!0,!0,e,r)}),Ew=v(function(e,r){var n=Sn(r),a=Sn(e),i=xn(r),o=xn(e),c=wn(r),l=wn(e);return{eK:t(He,l,c),eL:t(He,o,i),eM:t(He,a,n),eN:t(Oe,l,c),eO:t(Oe,o,i),eP:t(Oe,a,n)}}),Bw=function(e){var r=_l(e),n=r.a,a=r.b;return t(Ew,n,a)},f$={src:`
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
    `,attributes:{lineSegmentVertex:"er"},uniforms:{lineSegmentEndPoint:"ep",lineSegmentStartPoint:"eq",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Vw=v(function(e,r){return{$:1,a:e,b:r}}),jw=Vw({d1:2,ee:0,eR:1}),m$=jw($([w({er:0},{er:1})])),Nw=v(function(e,r){var n=Bw(r),a=$e(n),i=_l(r),o=i.a,c=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,U;var l=e.b.a;return t(Ze,a,Pe(function(f,m,d,b,s,y,_,C){return R(Ee,C,f$,Il,m$,{aO:l,ep:vr(c),eq:vr(o),c:d,d:m,e:y,f,g:s})}));case 1:if(e.b.$)return U;var l=e.b.a,u=e.c;return t(Ze,a,Pe(function(m,d,b,s,y,_,C,L){return R(Ee,L,f$,El,m$,{a7:t(Yi,Rt(u),l),ep:vr(c),eq:vr(o),c:b,d,e:_,f:m,g:y})}));case 2:return U;default:return U}}),Gw=v(function(e,r){return t(Nw,e,r)}),s$=v(function(e,r){var n=e,a=r;return n/a}),Hw=Je(function(e,r,n,a,i){e:for(;;){var o=a(r/n),c=t(P,o,i);if(_e(r,e))return c;var l=e,u=r-1,f=n,m=a,d=c;e=l,r=u,n=f,a=m,i=d;continue e}}),d$=v(function(e,r){return e<1?D:R(Hw,0,e,e,r,D)}),Ww=v(function(e,r){var n=e.e2,a=e.q,i=e.O,o=i,c=o.a,l=o.b;return t(P,{q:Ji(a),e2:vr(n),O:t(hr,c,l)},r)}),Uw=function(e){var r=h(O$,Ww,D,Al(e));if(r.b){var n=r.a,a=r.b,i=t(Dt,r,Rl(e)),o=t(Om,n,a);return M(dm,o,e,i,0)}else return Dl},Hl=v(function(e,r){var n=e,a=r,i=Yn(a);return{ip:i*Yn(n),it:i*Ta(n),dR:Ta(a)}}),Ow=function(){var e=Jr(1),r=72,n=t(tn,0,r-1),a=t(d$,r,t(ht,Ir,bc(1))),i=ot(r/2),o=t(tn,0,i-1),c=t(d$,i,t(ht,ba(90),ba(-90))),l=Fl(sr(t(ne,function(m){return t(ne,function(d){return{q:_a(t(Hl,m,d)),e2:h(Qe,t(Ve,tt(d)*tt(m),e),t(Ve,tt(d)*zi(m),e),t(Ve,zi(d),e)),O:w(t(s$,m,bc(1)),t(s$,t(nt,ba(90),d),ba(180)))}},c)},a))),u=v(function(m,d){return m*(i+1)+d}),f=sr(t(ne,function(m){return sr(t(ne,function(d){var b=t(u,m+1,d),s=t(u,m,d),y=t(u,m+1,d+1),_=t(u,m,d+1);return $([H(_,y,b),H(_,b,s)])},o))},n));return Tl(Uw(t(Sm,l,f)))}(),ki=72,Yt=2*ki,qw=v(function(e,r){e:for(;;){var n=Yt+1,a=t(yi,Yt,2*e+3),i=t(yi,Yt,2*e+2),o=2*e+1,c=2*e,l=Yt,u=t(P,H(l,c,i),t(P,H(c,a,i),t(P,H(c,o,a),t(P,H(o,n,a),r))));if(e){var f=e-1,m=u;e=f,r=m;continue e}else return u}}),Jw=k(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),Yw=v(function(e,r){e:for(;;){var n=h(Jw,0,2*$n,e/ki),a={b1:n,cw:0,cC:1},i={b1:n,cw:1,cC:1},o=t(P,a,t(P,i,r));if(e){var c=e-1,l=o;e=c,r=l;continue e}else return o}}),Xw=function(){var e=t(Yw,ki-1,$([{b1:0,cw:0,cC:0},{b1:0,cw:1,cC:0}])),r=t(qw,ki-1,D);return t(Dt,e,r)}(),Qw={src:`
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
    `,attributes:{angle:"b1",offsetScale:"cw",radiusScale:"cC"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cF",viewMatrix:"g"}},p$=function(e){return Xi(Pe(function(r,n,a,i,o,c,l,u){return R(Ee,t(Gl,!0,u),Qw,Nl,Xw,{aO:h(Pt,0,0,1),c:a,d:n,e:c,f:r,cF:l,g:o})}))},Zw=function(e){var r=bm(e);return{ei:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.ip,L:r.it,M:r.dR,cE:1}},Kw=v(function(e,r){return t(Nm,Zw(e),r)}),ex=Z(function(e,r,n,a){var i=t(Vl,n,Ow),o=function(){var u=w(e,r);return u.a?u.b?kt($([i,p$()])):i:u.b?p$():U}(),c=wl(a),l=c;return t(Kw,t(Ci,Fn,yl(a)),t(jl,H(l,l,l),o))}),rx=v(function(e,r){return M(ex,!0,!0,e,r)}),nx=k(function(e,r,n){return{$:1,a:e,b:r,c:n}}),ax=Je(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),tx=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return t(Um,n,a);case 1:var n=e.a,a=e.b,r=e.c;return h(nx,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return h(Wf,n,a,c);default:var n=e.a,a=e.b,i=e.c,o=e.d,c=e.e;return R(ax,n,a,i,o,c)}},ix=tx,Jm=function(e){switch(e.$){case 0:var i=e.a,r=e.b;return $([t(bw,i,r)]);case 1:var i=e.a,n=e.b;return $([t(Iw,i,n)]);case 3:var i=e.a,a=e.b;return $([t(rx,ix(i),a)]);case 2:var i=e.a,o=e.b;return $([t(Tw,i,o)]);case 4:var c=e.a,l=e.b;return $([t(Gw,yw(c),l)]);default:var u=e.a;return t(Fa,Jm,u)}},ox=function(e){return t(Fa,Jm,e)},cx=v(function(e,r){return sy({fL:e.fL,a2:X_(e.fQ),f2:e.f2,ga:Jr(e.ga),cV:e.cV,a5:w(r$(ze(e.bN.$9)),r$(ze(e.bN.gL))),a9:ox(r),gx:e.gx,g7:e.g7,id:e.id,im:e.im})}),Ym=function(e){return e},lx=v(function(e,r){var n=e,a=kr(r.gp),i=a.ip,o=a.it,c=a.dR,l=t(qi,r.cm,r.a4),u=l;return{b3:oa(u),f5:n,ci:ia(u),ds:0,cB:ta(u),dG:1,ip:-i,it:-o,dR:-c}}),ux=function(e){return t(lx,Ym(!0),{a4:e.a4,gp:t(Hl,vn(e.b2),vn(e.cg)),cm:e.cm})},$x=function(e){return e},vx=function(e){return $x(1.2*t(Mt,2,e))},ko=dl({ip:.37208,it:.37529}),fx=v(function(e,r){return{$:2,a:e,b:r}}),Xm=function(e){return{$:0,a:e}},Xt=function(e){var r=e;return r},mx=function(e){var r=e;return r.f5},sx=Xm(Xa.a),dx=v(function(e,r){var n=v(function(a,i){var o=i.a,c=i.b;return e(a)?w(t(P,a,o),c):w(o,t(P,a,c))});return h(Ke,n,w(D,D),r)}),px=function(e){var r=e;return Ur({et:r.ip,eu:r.cB,ev:0,ew:0,ex:r.it,ey:r.ci,ez:0,eA:0,eB:r.dR,eC:r.b3,eD:0,eE:0,eF:r.dG,eG:r.ds,eH:0,eI:0})},gx=Pe(function(e,r,n,a,i,o,c,l){var u=t(dx,mx,$([Xt(e),Xt(r),Xt(n),Xt(a)])),f=u.a,m=u.b;if(f.b){var d=X(f,m);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var b=d.a,s=d.b,y=s.a,_=s.b,C=_.a,L=_.b,x=L.a;return t(fx,t(ne,px,f),{bG:t(Cr,b,y),cp:t(Cr,C,x),cq:t(Cr,i,o),cr:t(Cr,c,l)})}else return sx}else return Xm({bG:t(Cr,e,r),cp:t(Cr,n,a),cq:t(Cr,i,o),cr:t(Cr,c,l)})}),hx=Z(function(e,r,n,a){return bt(gx,e,r,n,a,pr,pr,pr,pr)}),bx={$:5},_x=bx,yx=dl({ip:.44757,it:.40745}),wx=function(e){return e},g$=function(e){return e},To=function(e){return e},xx={$:1},Sx=xx,Cx=v(function(e,r){var n=e,a=Tt(r.e2),i=a.ip,o=a.it,c=a.dR,l=t(qi,r.cm,r.a4),u=l;return{b3:oa(u),f5:n,ci:ia(u),ds:0,cB:ta(u),dG:2,ip:i,it:o,dR:c}}),h$=function(e){return t(Cx,Ym(!0),{a4:e.a4,cm:e.cm,e2:ri(e.e2)})},b$=function(e){var r=e;return r},Lx=function(e){e:for(;;){if(_e(e.eg,Ir)&&_e(e.eh,Ir))return pr;if(t(If,or(e.eg),or(e.eh))){var r={a4:e.a4,eg:e.eh,eh:e.eg,fn:Li(e.fn)};e=r;continue e}else{var n=be(b$(e.eh)/$n),a=be(b$(e.eg)/$n),i=kr(e.fn),o=i.ip,c=i.it,l=i.dR,u=t(qi,_m(1),e.a4),f=u;return{b3:a*oa(f),f5:!1,ci:a*ia(f),ds:n/a,cB:a*ta(f),dG:3,ip:o,it:c,dR:l}}}},Mx=function(e){return Lx({a4:e.a4,eg:e.eg,eh:e.eh,fn:t(Hl,vn(e.b2),vn(e.cg))})},Px=v(function(e,r){var n=ux({b2:Ja(-90),a4:s_(wx(2e3)),cg:Ja(-45),cm:To(100)}),a=h$({a4:ko,cm:g$(6e3),e2:{ip:2,it:3,dR:3}}),i=Mx({b2:Ja(0),a4:ko,cg:Ja(-45),eg:To(20),eh:To(10)}),o=h$({a4:yx,cm:g$(6e3),e2:{ip:-2,it:4,dR:3}});return t(cx,{fL:Sx,fQ:vf,f2:$l(e),ga:.1,cV:e.cV,gx:vx(6),g7:M(hx,o,a,n,i),bN:e.bN,id:_x,im:ko},$([t(Y_,e,r)]))}),zx=M(p1,Px,f_,D,b1);const kx={Main:{init:zx(t(ee,function(e){return lr({g0:e})},t(Q,"inputs",t(ee,function(e){return t(ee,function(r){return t(ee,function(n){return t(ee,function(a){return t(ee,function(i){return t(ee,function(o){return t(ee,function(c){return lr({b8:c,cV:o,gs:i,ek:a,bL:n,bN:r,il:e})},t(Q,"clock",Ue))},t(Q,"devicePixelRatio",Ue))},t(Q,"dt",Ue))},t(Q,"keyboard",t(ee,function(a){return t(ee,function(i){return t(ee,function(o){return t(ee,function(c){return t(ee,function(l){return t(ee,function(u){return t(ee,function(f){return t(ee,function(m){return t(ee,function(d){return lr({fK:d,gg:m,d0:f,gr:u,g4:l,hr:c,hx:o,fc:i,fm:a})},t(Q,"alt",Me))},t(Q,"control",Me))},t(Q,"down",Me))},t(Q,"downs",pi(Ma)))},t(Q,"left",Me))},t(Q,"pressedKeys",pi(Ma)))},t(Q,"right",Me))},t(Q,"shift",Me))},t(Q,"up",Me))))},t(Q,"pointer",t(ee,function(n){return t(ee,function(a){return t(ee,function(i){return t(ee,function(o){return t(ee,function(c){return t(ee,function(l){return t(ee,function(u){return t(ee,function(f){return lr({d0:f,c_:u,hb:l,hy:c,hz:o,fm:i,ip:a,it:n})},t(Q,"down",Me))},t(Q,"isDown",Me))},t(Q,"move",Me))},t(Q,"rightDown",Me))},t(Q,"rightUp",Me))},t(Q,"up",Me))},t(Q,"x",Ue))},t(Q,"y",Ue))))},t(Q,"screen",t(ee,function(r){return t(ee,function(n){return lr({gL:n,$9:r})},t(Q,"height",Ue))},t(Q,"width",Ue))))},t(Q,"wheel",t(ee,function(e){return t(ee,function(r){return lr({gk:r,gl:e})},t(Q,"deltaX",Ue))},t(Q,"deltaY",Ue)))))))(0)}},oe={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Tx=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),a=s=>["ShiftLeft","ShiftRight"].includes(s.code),i=s=>s.code=="ArrowLeft",o=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,f=s=>s.button==2;function m(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(oe.keyboard.downs.push(s.code),oe.keyboard.pressedKeys.push(s.code),r(s)&&(oe.keyboard.control=!0),n(s)&&(oe.keyboard.alt=!0),a(s)&&(console.log("yo"),oe.keyboard.shift=!0),i(s)&&(oe.keyboard.left=!0),o(s)&&(oe.keyboard.right=!0),c(s)&&(oe.keyboard.up=!0),l(s)&&(console.log("yey"),oe.keyboard.down=!0))}),window.addEventListener("keyup",s=>{oe.keyboard.pressedKeys=oe.keyboard.pressedKeys.filter(y=>y!=s.code),r(s)&&(oe.keyboard.control=!1,oe.keyboard.pressedKeys=[]),n(s)&&(oe.keyboard.alt=!1),a(s)&&(oe.keyboard.shift=!1),i(s)&&(oe.keyboard.left=!1),o(s)&&(oe.keyboard.right=!1),c(s)&&(oe.keyboard.up=!1),l(s)&&(oe.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY,u(s)&&(oe.pointer.down=!0,oe.pointer.isDown=!0),f(s)&&(oe.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{oe.pointer.move=!0,oe.pointer.x=-.5*oe.screen.width+s.pageX,oe.pointer.y=.5*oe.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(oe.pointer.up=!0,oe.pointer.isDown=!1),f(s)&&(oe.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{oe.wheel.deltaX=s.deltaX,oe.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{m(oe)}),window.addEventListener("focus",s=>{m(oe)}),window.addEventListener("visibilitychange",s=>{m(oe)}),window.addEventListener("resize",()=>{oe.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(b);function b(s){const y=s/1e3,_=y-oe.clock;_<.009||(oe.dt=_,oe.clock=y,e.ports.tick.send(oe),d(oe)),window.requestAnimationFrame(b)}},Dx=kx.Main.init({node:document.querySelector("#app div"),flags:{inputs:oe}});Tx(Dx);
