(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}})();function rn(e,r,n){return n.a=e,n.f=r,n}function $(e){return rn(2,e,function(r){return function(n){return e(r,n)}})}function P(e){return rn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function q(e){return rn(4,e,function(r){return function(n){return function(a){return function(t){return e(r,n,a,t)}}}})}function he(e){return rn(5,e,function(r){return function(n){return function(a){return function(t){return function(i){return e(r,n,a,t,i)}}}}})}function or(e){return rn(6,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return e(r,n,a,t,i,c)}}}}}})}function Ft(e){return rn(7,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return e(r,n,a,t,i,c,l)}}}}}}})}function ue(e){return rn(8,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return e(r,n,a,t,i,c,l,u)}}}}}}}})}function si(e){return rn(9,e,function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return e(r,n,a,t,i,c,l,u,v)}}}}}}}}})}function o(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function m(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function S(e,r,n,a,t){return e.a===4?e.f(r,n,a,t):e(r)(n)(a)(t)}function z(e,r,n,a,t,i){return e.a===5?e.f(r,n,a,t,i):e(r)(n)(a)(t)(i)}function We(e,r,n,a,t,i,c){return e.a===6?e.f(r,n,a,t,i,c):e(r)(n)(a)(t)(i)(c)}function di(e,r,n,a,t,i,c,l){return e.a===7?e.f(r,n,a,t,i,c,l):e(r)(n)(a)(t)(i)(c)(l)}function mi(e,r,n,a,t,i,c,l,u){return e.a===8?e.f(r,n,a,t,i,c,l,u):e(r)(n)(a)(t)(i)(c)(l)(u)}function Uv(e,r,n,a,t,i,c,l,u,v){return e.a===9?e.f(r,n,a,t,i,c,l,u,v):e(r)(n)(a)(t)(i)(c)(l)(u)(v)}var Jv=[];function Ov(e){return[e]}function Xv(e){return e.length}var Yv=P(function(e,r,n){for(var a=new Array(e),t=0;t<e;t++)a[t]=n(r+t);return a}),Zv=$(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,y(n,r)}),Qv=$(function(e,r){return r[e]}),Kv=P(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=n[i];return t[e]=r,t}),ef=$(function(e,r){for(var n=r.length,a=new Array(n+1),t=0;t<n;t++)a[t]=r[t];return a[n]=e,a}),rf=P(function(e,r,n){for(var a=n.length,t=0;t<a;t++)r=o(e,n[t],r);return r}),nf=P(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=o(e,n[a],r);return r}),af=$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=e(r[t]);return a});P(function(e,r,n){for(var a=n.length,t=new Array(a),i=0;i<a;i++)t[i]=o(e,r+i,n[i]);return t});var tf=P(function(e,r,n){return n.slice(e,r)}),of=P(function(e,r,n){var a=r.length,t=e-a;t>n.length&&(t=n.length);for(var i=a+t,c=new Array(i),l=0;l<a;l++)c[l]=r[l];for(var l=0;l<t;l++)c[l+a]=n[l];return c});$(function(e,r){return r});$(function(e,r){return console.log(e+": "+cf()),r});function cf(e){return"<internals>"}function Yn(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ve(e,r){for(var n,a=[],t=Ao(e,r,0,a);t&&(n=a.pop());t=Ao(n.a,n.b,0,a));return t}function Ao(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&Yn(5),!1;if(n>100)return a.push(y(e,r)),!0;e.$<0&&(e=Bc(e),r=Bc(r));for(var t in e)if(!Ao(e[t],r[t],n+1,a))return!1;return!0}$(ve);var lf=$(function(e,r){return!ve(e,r)});function J(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$>"u")return(n=J(e.a,r.a))||(n=J(e.b,r.b))?n:J(e.c,r.c);for(;e.b&&r.b&&!(n=J(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}$(function(e,r){return J(e,r)<0});$(function(e,r){return J(e,r)<1});$(function(e,r){return J(e,r)>0});$(function(e,r){return J(e,r)>=0});var uf=$(function(e,r){var n=J(e,r);return n<0?$u:n?um:uu}),Ma=0;function y(e,r){return{a:e,b:r}}function M(e,r,n){return{a:e,b:r,c:n}}function V(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}$(ce);function ce(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=yr(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=yr(e.a,r);return n}var w={$:0};function yr(e,r){return{$:1,a:e,b:r}}var $f=$(yr);function g(e){for(var r=w,n=e.length;n--;)r=yr(e[n],r);return r}function Vt(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var vf=P(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(o(e,r.a,n.a));return g(a)});q(function(e,r,n,a){for(var t=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)t.push(m(e,r.a,n.a,a.a));return g(t)});he(function(e,r,n,a,t){for(var i=[];r.b&&n.b&&a.b&&t.b;r=r.b,n=n.b,a=a.b,t=t.b)i.push(S(e,r.a,n.a,a.a,t.a));return g(i)});or(function(e,r,n,a,t,i){for(var c=[];r.b&&n.b&&a.b&&t.b&&i.b;r=r.b,n=n.b,a=a.b,t=t.b,i=i.b)c.push(z(e,r.a,n.a,a.a,t.a,i.a));return g(c)});var ff=$(function(e,r){return g(Vt(r).sort(function(n,a){return J(e(n),e(a))}))}),sf=$(function(e,r){return g(Vt(r).sort(function(n,a){var t=o(e,n,a);return t===uu?0:t===$u?-1:1}))});$(function(e,r){return e+r});$(function(e,r){return e-r});$(function(e,r){return e*r});$(function(e,r){return e/r});$(function(e,r){return e/r|0});var df=$(Math.pow);$(function(e,r){return r%e});var mf=$(function(e,r){var n=r%e;return e===0?Yn(11):n>0&&e<0||n<0&&e>0?n+e:n}),gf=Math.PI,pf=Math.cos,bf=Math.sin,hf=Math.tan,_f=Math.acos,yf=Math.atan,Cf=$(Math.atan2);function Pf(e){return e}function wf(e){return e===1/0||e===-1/0}var Lf=Math.ceil,Sf=Math.floor,xf=Math.round,zf=Math.sqrt,yc=Math.log,Tf=isNaN;function kf(e){return!e}$(function(e,r){return e&&r});$(function(e,r){return e||r});$(function(e,r){return e!==r});var Mf=$(function(e,r){return e+r});function Df(e){var r=e.charCodeAt(0);return isNaN(r)?W:Z(55296<=r&&r<=56319?y(e[0]+e[1],e.slice(2)):y(e[0],e.slice(1)))}$(function(e,r){return e+r});function jf(e){return e.length}$(function(e,r){for(var n=r.length,a=new Array(n),t=0;t<n;){var i=r.charCodeAt(t);if(55296<=i&&i<=56319){a[t]=e(r[t]+r[t+1]),t+=2;continue}a[t]=e(r[t]),t++}return a.join("")});$(function(e,r){for(var n=[],a=r.length,t=0;t<a;){var i=r[t],c=r.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=r[t],t++),e(i)&&n.push(i)}return n.join("")});function Af(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var t=e.charCodeAt(a);55296<=t&&t<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}P(function(e,r,n){for(var a=n.length,t=0;t<a;){var i=n[t],c=n.charCodeAt(t);t++,55296<=c&&c<=56319&&(i+=n[t],t++),r=o(e,i,r)}return r});var Bf=P(function(e,r,n){for(var a=n.length;a--;){var t=n[a],i=n.charCodeAt(a);56320<=i&&i<=57343&&(a--,t=n[a]+t),r=o(e,t,r)}return r}),Ff=$(function(e,r){return r.split(e)}),Vf=$(function(e,r){return r.join(e)}),qf=P(function(e,r,n){return n.slice(e,r)});function Ef(e){return e.toLowerCase()}$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),e(a))return!0}return!1});var Wf=$(function(e,r){for(var n=r.length;n--;){var a=r[n],t=r.charCodeAt(n);if(56320<=t&&t<=57343&&(n--,a=r[n]+a),!e(a))return!1}return!0}),Rf=$(function(e,r){return r.indexOf(e)>-1}),Nf=$(function(e,r){return r.indexOf(e)===0});$(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Gf=$(function(e,r){var n=e.length;if(n<1)return w;for(var a=0,t=[];(a=r.indexOf(e,a))>-1;)t.push(a),a=a+n;return g(t)});function ql(e){return e+""}function Hf(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,t=a;t<e.length;++t){var i=e.charCodeAt(t);if(i<48||57<i)return W;r=10*r+i-48}return t==a?W:Z(n==45?-r:r)}function If(e){if(e.length===0||/[\sxbo]/.test(e))return W;var r=+e;return r===r?Z(r):W}function Uf(e){return Vt(e).join("")}function Jf(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Of(e){return e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320))}function Xf(e){return{$:0,a:e}}function Yf(e){return{$:1,a:e}}function qt(e){return{$:2,b:e}}var Zf=qt(function(e){return typeof e!="number"?nr("an INT",e):-2147483647<e&&e<2147483647&&(e|0)===e||isFinite(e)&&!(e%1)?fe(e):nr("an INT",e)}),Qf=qt(function(e){return typeof e=="boolean"?fe(e):nr("a BOOL",e)}),Kf=qt(function(e){return typeof e=="number"?fe(e):nr("a FLOAT",e)}),es=qt(function(e){return typeof e=="string"?fe(e):e instanceof String?fe(e+""):nr("a STRING",e)});function rs(e){return{$:3,b:e}}function ns(e){return{$:5,c:e}}var as=$(function(e,r){return{$:6,d:e,b:r}}),ts=$(function(e,r){return{$:7,e,b:r}});function nn(e,r){return{$:9,f:e,g:r}}var os=$(function(e,r){return{$:10,b:r,h:e}});function is(e){return{$:11,g:e}}var cs=$(function(e,r){return nn(e,[r])}),ls=P(function(e,r,n){return nn(e,[r,n])});q(function(e,r,n,a){return nn(e,[r,n,a])});he(function(e,r,n,a,t){return nn(e,[r,n,a,t])});or(function(e,r,n,a,t,i){return nn(e,[r,n,a,t,i])});Ft(function(e,r,n,a,t,i,c){return nn(e,[r,n,a,t,i,c])});ue(function(e,r,n,a,t,i,c,l){return nn(e,[r,n,a,t,i,c,l])});si(function(e,r,n,a,t,i,c,l,u){return nn(e,[r,n,a,t,i,c,l,u])});var us=$(function(e,r){try{var n=JSON.parse(r);return rr(e,n)}catch(a){return Me(o(xi,"This is not valid JSON! "+a.message,r))}}),El=$(function(e,r){return rr(e,r)});function rr(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?fe(e.c):nr("null",r);case 3:return Ia(r)?Cc(e.b,r,g):nr("a LIST",r);case 4:return Ia(r)?Cc(e.b,r,$s):nr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return nr("an OBJECT with a field named `"+n+"`",r);var v=rr(e.b,r[n]);return ir(v)?v:Me(o(Fc,n,v.a));case 7:var a=e.e;if(!Ia(r))return nr("an ARRAY",r);if(a>=r.length)return nr("a LONGER array. Need index "+a+" but only see "+r.length+" entries",r);var v=rr(e.b,r[a]);return ir(v)?v:Me(o(vu,a,v.a));case 8:if(typeof r!="object"||r===null||Ia(r))return nr("an OBJECT",r);var t=w;for(var i in r)if(r.hasOwnProperty(i)){var v=rr(e.b,r[i]);if(!ir(v))return Me(o(Fc,i,v.a));t=yr(y(i,v.a),t)}return fe(ie(t));case 9:for(var c=e.f,l=e.g,u=0;u<l.length;u++){var v=rr(l[u],r);if(!ir(v))return v;c=c(v.a)}return fe(c);case 10:var v=rr(e.b,r);return ir(v)?rr(e.h(v.a),r):v;case 11:for(var f=w,d=e.g;d.b;d=d.b){var v=rr(d.a,r);if(ir(v))return v;f=yr(v.a,f)}return Me($m(ie(f)));case 1:return Me(o(xi,e.a,r));case 0:return fe(e.a)}}function Cc(e,r,n){for(var a=r.length,t=new Array(a),i=0;i<a;i++){var c=rr(e,r[i]);if(!ir(c))return Me(o(vu,i,c.a));t[i]=c.a}return fe(n(t))}function Ia(e){return Array.isArray(e)||typeof FileList<"u"&&e instanceof FileList}function $s(e){return o(pu,e.length,function(r){return e[r]})}function nr(e,r){return Me(o(xi,"Expecting "+e,r))}function Vn(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return Vn(e.b,r.b);case 6:return e.d===r.d&&Vn(e.b,r.b);case 7:return e.e===r.e&&Vn(e.b,r.b);case 9:return e.f===r.f&&Pc(e.g,r.g);case 10:return e.h===r.h&&Vn(e.b,r.b);case 11:return Pc(e.g,r.g)}}function Pc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!Vn(e[a],r[a]))return!1;return!0}var vs=$(function(e,r){return JSON.stringify(r,null,e)+""});function Et(e){return e}function fs(){return[]}function ss(){return{}}var ds=P(function(e,r,n){return n[e]=r,n});function ms(e){return $(function(r,n){return n.push(e(r)),n})}var gs=null;function Pn(e){return{$:0,a:e}}function ps(e){return{$:1,a:e}}function Gr(e){return{$:2,b:e,c:null}}var Bo=$(function(e,r){return{$:3,b:e,d:r}});$(function(e,r){return{$:4,b:e,d:r}});function bs(e){return{$:5,b:e}}var hs=0;function gi(e){var r={$:0,e:hs++,f:e,g:null,h:[]};return pi(r),r}function Wl(e){return Gr(function(r){r(Pn(gi(e)))})}function Rl(e,r){e.h.push(r),pi(e)}var _s=$(function(e,r){return Gr(function(n){Rl(e,r),n(Pn(Ma))})}),lo=!1,wc=[];function pi(e){if(wc.push(e),!lo){for(lo=!0;e=wc.shift();)ys(e);lo=!1}}function ys(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,pi(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}q(function(e,r,n,a){return bi(r,a,e.fu,e.gi,e.f9,function(){return function(){}})});function bi(e,r,n,a,t,i){var c=o(El,e,r?r.flags:void 0);ir(c)||Yn(2);var l={},u=n(c.a),v=u.a,f=i(p,v),d=Cs(l,p);function p(s,b){var h=o(a,s,v);f(v=h.a,b),Sc(l,h.b,t(v))}return Sc(l,u.b,t(v)),d?{ports:d}:{}}var pr={};function Cs(e,r){var n;for(var a in pr){var t=pr[a];t.a&&(n=n||{},n[a]=t.a(a,r)),e[a]=ws(t,r)}return n}function Ps(e,r,n,a,t){return{b:e,c:r,d:n,e:a,f:t}}function ws(e,r){var n={g:r,h:void 0},a=e.c,t=e.d,i=e.e,c=e.f;function l(u){return o(Bo,l,bs(function(v){var f=v.a;return v.$===0?m(t,n,f,u):i&&c?S(a,n,f.i,f.j,u):m(a,n,i?f.i:f.j,u)}))}return n.h=gi(o(Bo,l,e.b))}var Ls=$(function(e,r){return Gr(function(n){e.g(r),n(Pn(Ma))})});$(function(e,r){return o(_s,e.h,{$:0,a:r})});function Nl(e){return function(r){return{$:1,k:e,l:r}}}function Ss(e){return{$:2,m:e}}$(function(e,r){return{$:3,n:e,o:r}});var Lc=[],uo=!1;function Sc(e,r,n){if(Lc.push({p:e,q:r,r:n}),!uo){uo=!0;for(var a;a=Lc.shift();)xs(a.p,a.q,a.r);uo=!1}}function xs(e,r,n){var a={};pt(!0,r,a,null),pt(!1,n,a,null);for(var t in e)Rl(e[t],{$:"fx",a:a[t]||{i:w,j:w}})}function pt(e,r,n,a){switch(r.$){case 1:var t=r.k,i=zs(e,t,a,r.l);n[t]=Ts(e,i,n[t]);return;case 2:for(var c=r.m;c.b;c=c.b)pt(e,c.a,n,a);return;case 3:pt(e,r.o,n,{s:r.n,t:a});return}}function zs(e,r,n,a){function t(c){for(var l=n;l;l=l.t)c=l.s(c);return c}var i=e?pr[r].e:pr[r].f;return o(i,t,a)}function Ts(e,r,n){return n=n||{i:w,j:w},e?n.i=yr(r,n.i):n.j=yr(r,n.j),n}function ks(e){pr[e]&&Yn(3)}$(function(e,r){return r});function Ms(e,r){return ks(e),pr[e]={f:Ds,u:r,a:js},Nl(e)}var Ds=$(function(e,r){return function(n){return e(r(n))}});function js(e,r){var n=w,a=pr[e].u,t=Pn(null);pr[e].b=t,pr[e].c=P(function(c,l,u){return n=l,t});function i(c){var l=o(El,a,c);ir(l)||Yn(4,e,l.a);for(var u=l.a,v=n;v.b;v=v.b)r(v.a(u))}return{send:i}}var bt,Br=typeof document<"u"?document:{};function hi(e,r){e.appendChild(r)}q(function(e,r,n,a){var t=a.node;return t.parentNode.replaceChild(Yr(e,function(){}),t),{}});function Fo(e){return{$:0,a:e}}var Gl=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b||0,t.push(c)}return i+=t.length,{$:1,c:r,d:_i(n),e:t,f:e,b:i}})}),Hr=Gl(void 0),As=$(function(e,r){return $(function(n,a){for(var t=[],i=0;a.b;a=a.b){var c=a.a;i+=c.b.b||0,t.push(c)}return i+=t.length,{$:2,c:r,d:_i(n),e:t,f:e,b:i}})}),Bs=As(void 0);function Fs(e,r,n,a){return{$:3,d:_i(e),g:r,h:n,i:a}}var Vs=$(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function an(e,r){return{$:5,l:e,m:r,k:void 0}}$(function(e,r){return an([e,r],function(){return e(r)})});P(function(e,r,n){return an([e,r,n],function(){return o(e,r,n)})});q(function(e,r,n,a){return an([e,r,n,a],function(){return m(e,r,n,a)})});he(function(e,r,n,a,t){return an([e,r,n,a,t],function(){return S(e,r,n,a,t)})});or(function(e,r,n,a,t,i){return an([e,r,n,a,t,i],function(){return z(e,r,n,a,t,i)})});Ft(function(e,r,n,a,t,i,c){return an([e,r,n,a,t,i,c],function(){return We(e,r,n,a,t,i,c)})});ue(function(e,r,n,a,t,i,c,l){return an([e,r,n,a,t,i,c,l],function(){return di(e,r,n,a,t,i,c,l)})});si(function(e,r,n,a,t,i,c,l,u){return an([e,r,n,a,t,i,c,l,u],function(){return mi(e,r,n,a,t,i,c,l,u)})});var Hl=$(function(e,r){return{$:"a0",n:e,o:r}}),qs=$(function(e,r){return{$:"a1",n:e,o:r}}),Il=$(function(e,r){return{$:"a2",n:e,o:r}}),zr=$(function(e,r){return{$:"a3",n:e,o:r}}),Es=P(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function Ws(e){return e=="script"?"p":e}function Rs(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}$(function(e,r){return r.$==="a0"?o(Hl,r.n,Ns(e,r.o)):r});function Ns(e,r){var n=Ai(r);return{$:r.$,a:n?m(Gt,n<3?Gs:Hs,$e(e),r.a):o(Ca,e,r.a)}}var Gs=$(function(e,r){return y(e(r.a),r.b)}),Hs=$(function(e,r){return{as:e(r.as),c4:r.c4,cW:r.cW}});function _i(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,t=n.n,i=n.o;if(a==="a2"){t==="className"?xc(r,t,i):r[t]=i;continue}var c=r[a]||(r[a]={});a==="a3"&&t==="class"?xc(c,t,i):c[t]=i}return r}function xc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function Yr(e,r){var n=e.$;if(n===5)return Yr(e.k||(e.k=e.m()),r);if(n===0)return Br.createTextNode(e.a);if(n===4){for(var a=e.k,t=e.j;a.$===4;)typeof t!="object"?t=[t,a.j]:t.push(a.j),a=a.k;var i={j:t,p:r},c=Yr(a,i);return c.elm_event_node_ref=i,c}if(n===3){var c=e.h(e.g);return Vo(c,r,e.d),c}var c=e.f?Br.createElementNS(e.f,e.c):Br.createElement(e.c);bt&&e.c=="a"&&c.addEventListener("click",bt(c)),Vo(c,r,e.d);for(var l=e.e,u=0;u<l.length;u++)hi(c,Yr(n===1?l[u]:l[u].b,r));return c}function Vo(e,r,n){for(var a in n){var t=n[a];a==="a1"?Is(e,t):a==="a0"?Os(e,r,t):a==="a3"?Us(e,t):a==="a4"?Js(e,t):(a!=="value"&&a!=="checked"||e[a]!==t)&&(e[a]=t)}}function Is(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Us(e,r){for(var n in r){var a=r[n];typeof a<"u"?e.setAttribute(n,a):e.removeAttribute(n)}}function Js(e,r){for(var n in r){var a=r[n],t=a.f,i=a.o;typeof i<"u"?e.setAttributeNS(t,n,i):e.removeAttributeNS(t,n)}}function Os(e,r,n){var a=e.elmFs||(e.elmFs={});for(var t in n){var i=n[t],c=a[t];if(!i){e.removeEventListener(t,c),a[t]=void 0;continue}if(c){var l=c.q;if(l.$===i.$){c.q=i;continue}e.removeEventListener(t,c)}c=Xs(r,i),e.addEventListener(t,c,yi&&{passive:Ai(i)<2}),a[t]=c}}var yi;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){yi=!0}}))}catch{}function Xs(e,r){function n(a){var t=n.q,i=rr(t.a,a);if(!!ir(i)){for(var c=Ai(t),l=i.a,u=c?c<3?l.a:l.as:l,v=c==1?l.b:c==3&&l.c4,f=(v&&a.stopPropagation(),(c==2?l.b:c==3&&l.cW)&&a.preventDefault(),e),d,p;d=f.j;){if(typeof d=="function")u=d(u);else for(var p=d.length;p--;)u=d[p](u);f=f.p}f(u,v)}}return n.q=r,n}function Ys(e,r){return e.$==r.$&&Vn(e.a,r.a)}function Ul(e,r){var n=[];return cr(e,r,n,0),n}function ke(e,r,n,a){var t={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(t),t}function cr(e,r,n,a){if(e!==r){var t=e.$,i=r.$;if(t!==i)if(t===1&&i===2)r=td(r),i=1;else{ke(n,0,a,r);return}switch(i){case 5:for(var c=e.l,l=r.l,u=c.length,v=u===l.length;v&&u--;)v=c[u]===l[u];if(v){r.k=e.k;return}r.k=r.m();var f=[];cr(e.k,r.k,f,0),f.length>0&&ke(n,1,a,f);return;case 4:for(var d=e.j,p=r.j,s=!1,b=e.k;b.$===4;)s=!0,typeof d!="object"?d=[d,b.j]:d.push(b.j),b=b.k;for(var h=r.k;h.$===4;)s=!0,typeof p!="object"?p=[p,h.j]:p.push(h.j),h=h.k;if(s&&d.length!==p.length){ke(n,0,a,r);return}(s?!Zs(d,p):d!==p)&&ke(n,2,a,p),cr(b,h,n,a+1);return;case 0:e.a!==r.a&&ke(n,3,a,r.a);return;case 1:zc(e,r,n,a,Qs);return;case 2:zc(e,r,n,a,Ks);return;case 3:if(e.h!==r.h){ke(n,0,a,r);return}var C=Ci(e.d,r.d);C&&ke(n,4,a,C);var L=r.i(e.g,r.g);L&&ke(n,5,a,L);return}}}function Zs(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function zc(e,r,n,a,t){if(e.c!==r.c||e.f!==r.f){ke(n,0,a,r);return}var i=Ci(e.d,r.d);i&&ke(n,4,a,i),t(e,r,n,a)}function Ci(e,r,n){var a;for(var t in e){if(t==="a1"||t==="a0"||t==="a3"||t==="a4"){var i=Ci(e[t],r[t]||{},t);i&&(a=a||{},a[t]=i);continue}if(!(t in r)){a=a||{},a[t]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[t].f,o:void 0}:typeof e[t]=="string"?"":null;continue}var c=e[t],l=r[t];c===l&&t!=="value"&&t!=="checked"||n==="a0"&&Ys(c,l)||(a=a||{},a[t]=l)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Qs(e,r,n,a){var t=e.e,i=r.e,c=t.length,l=i.length;c>l?ke(n,6,a,{v:l,i:c-l}):c<l&&ke(n,7,a,{v:c,e:i});for(var u=c<l?c:l,v=0;v<u;v++){var f=t[v];cr(f,i[v],n,++a),a+=f.b||0}}function Ks(e,r,n,a){for(var t=[],i={},c=[],l=e.e,u=r.e,v=l.length,f=u.length,d=0,p=0,s=a;d<v&&p<f;){var b=l[d],h=u[p],C=b.a,L=h.a,_=b.b,x=h.b,D=void 0,H=void 0;if(C===L){s++,cr(_,x,t,s),s+=_.b||0,d++,p++;continue}var N=l[d+1],R=u[p+1];if(N){var I=N.a,U=N.b;H=L===I}if(R){var E=R.a,Q=R.b;D=C===E}if(D&&H){s++,cr(_,Q,t,s),ca(i,t,C,x,p,c),s+=_.b||0,s++,la(i,t,C,U,s),s+=U.b||0,d+=2,p+=2;continue}if(D){s++,ca(i,t,L,x,p,c),cr(_,Q,t,s),s+=_.b||0,d+=1,p+=2;continue}if(H){s++,la(i,t,C,_,s),s+=_.b||0,s++,cr(U,x,t,s),s+=U.b||0,d+=2,p+=1;continue}if(N&&I===E){s++,la(i,t,C,_,s),ca(i,t,L,x,p,c),s+=_.b||0,s++,cr(U,Q,t,s),s+=U.b||0,d+=2,p+=2;continue}break}for(;d<v;){s++;var b=l[d],_=b.b;la(i,t,b.a,_,s),s+=_.b||0,d++}for(;p<f;){var K=K||[],h=u[p];ca(i,t,h.a,h.b,void 0,K),p++}(t.length>0||c.length>0||K)&&ke(n,8,a,{w:t,x:c,y:K})}var Jl="_elmW6BL";function ca(e,r,n,a,t,i){var c=e[n];if(!c){c={c:0,z:a,r:t,s:void 0},i.push({r:t,A:c}),e[n]=c;return}if(c.c===1){i.push({r:t,A:c}),c.c=2;var l=[];cr(c.z,a,l,c.r),c.r=t,c.s.s={w:l,A:c};return}ca(e,r,n+Jl,a,t,i)}function la(e,r,n,a,t){var i=e[n];if(!i){var c=ke(r,9,t,void 0);e[n]={c:1,z:a,r:t,s:c};return}if(i.c===0){i.c=2;var l=[];cr(a,i.z,l,t),ke(r,9,t,{w:l,A:i});return}la(e,r,n+Jl,a,t)}function Ol(e,r,n,a){ua(e,r,n,0,0,r.b,a)}function ua(e,r,n,a,t,i,c){for(var l=n[a],u=l.r;u===t;){var v=l.$;if(v===1)Ol(e,r.k,l.s,c);else if(v===8){l.t=e,l.u=c;var f=l.s.w;f.length>0&&ua(e,r,f,0,t,i,c)}else if(v===9){l.t=e,l.u=c;var d=l.s;if(d){d.A.s=e;var f=d.w;f.length>0&&ua(e,r,f,0,t,i,c)}}else l.t=e,l.u=c;if(a++,!(l=n[a])||(u=l.r)>i)return a}var p=r.$;if(p===4){for(var s=r.k;s.$===4;)s=s.k;return ua(e,s,n,a,t+1,i,e.elm_event_node_ref)}for(var b=r.e,h=e.childNodes,C=0;C<b.length;C++){t++;var L=p===1?b[C]:b[C].b,_=t+(L.b||0);if(t<=u&&u<=_&&(a=ua(h[C],L,n,a,t,_,c),!(l=n[a])||(u=l.r)>i))return a;t=_}return a}function Xl(e,r,n,a){return n.length===0?e:(Ol(e,r,n,a),ht(e,n))}function ht(e,r){for(var n=0;n<r.length;n++){var a=r[n],t=a.t,i=ed(t,a);t===e&&(e=i)}return e}function ed(e,r){switch(r.$){case 0:return rd(e,r.s,r.u);case 4:return Vo(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return ht(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var i=r.s,a=0;a<i.i;a++)e.removeChild(e.childNodes[i.v]);return e;case 7:for(var i=r.s,n=i.e,a=i.v,t=e.childNodes[a];a<n.length;a++)e.insertBefore(Yr(n[a],r.u),t);return e;case 9:var i=r.s;if(!i)return e.parentNode.removeChild(e),e;var c=i.A;return typeof c.r<"u"&&e.parentNode.removeChild(e),c.s=ht(e,i.w),e;case 8:return nd(e,r);case 5:return r.s(e);default:Yn(10)}}function rd(e,r,n){var a=e.parentNode,t=Yr(r,n);return t.elm_event_node_ref||(t.elm_event_node_ref=e.elm_event_node_ref),a&&t!==e&&a.replaceChild(t,e),t}function nd(e,r){var n=r.s,a=ad(n.y,r);e=ht(e,n.w);for(var t=n.x,i=0;i<t.length;i++){var c=t[i],l=c.A,u=l.c===2?l.s:Yr(l.z,r.u);e.insertBefore(u,e.childNodes[c.r])}return a&&hi(e,a),e}function ad(e,r){if(!!e){for(var n=Br.createDocumentFragment(),a=0;a<e.length;a++){var t=e[a],i=t.A;hi(n,i.c===2?i.s:Yr(i.z,r.u))}return n}}function Pi(e){if(e.nodeType===3)return Fo(e.textContent);if(e.nodeType!==1)return Fo("");for(var r=w,n=e.attributes,a=n.length;a--;){var t=n[a],i=t.name,c=t.value;r=yr(o(zr,i,c),r)}for(var l=e.tagName.toLowerCase(),u=w,v=e.childNodes,a=v.length;a--;)u=yr(Pi(v[a]),u);return m(Hr,l,r,u)}function td(e){for(var r=e.e,n=r.length,a=new Array(n),t=0;t<n;t++)a[t]=r[t].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var od=q(function(e,r,n,a){return bi(r,a,e.fu,e.gi,e.f9,function(t,i){var c=e.gl,l=a.node,u=Pi(l);return Yl(i,function(v){var f=c(v),d=Ul(u,f);l=Xl(l,u,d,t),u=f})})});q(function(e,r,n,a){return bi(r,a,e.fu,e.gi,e.f9,function(t,i){var c=e.c2&&e.c2(t),l=e.gl,u=Br.title,v=Br.body,f=Pi(v);return Yl(i,function(d){bt=c;var p=l(d),s=Hr("body")(w)(p.eX),b=Ul(f,s);v=Xl(v,f,b,t),f=s,bt=0,u!==p.gd&&(Br.title=u=p.gd)})})});var _t=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function Yl(e,r){r(e);var n=0;function a(){n=n===1?0:(_t(a),r(e),1)}return function(t,i){e=t,i?(r(e),n===2&&(n=1)):(n===0&&_t(a),n=2)}}$(function(e,r){return o(Vi,Bi,Gr(function(){r&&history.go(r),e()}))});$(function(e,r){return o(Vi,Bi,Gr(function(){history.pushState({},"",r),e()}))});$(function(e,r){return o(Vi,Bi,Gr(function(){history.replaceState({},"",r),e()}))});var id={addEventListener:function(){},removeEventListener:function(){}},cd=typeof window<"u"?window:id;P(function(e,r,n){return Wl(Gr(function(a){function t(i){gi(n(i))}return e.addEventListener(r,t,yi&&{passive:!0}),function(){e.removeEventListener(r,t)}}))});$(function(e,r){var n=rr(e,r);return ir(n)?Z(n.a):W});function Zl(e,r){return Gr(function(n){_t(function(){var a=document.getElementById(e);n(a?Pn(r(a)):ps(xm(e)))})})}function ld(e){return Gr(function(r){_t(function(){r(Pn(e()))})})}$(function(e,r){return Zl(r,function(n){return n[e](),Ma})});$(function(e,r){return ld(function(){return cd.scroll(e,r),Ma})});P(function(e,r,n){return Zl(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ma})});$(function(e,r){return e&r});$(function(e,r){return e|r});$(function(e,r){return e^r});$(function(e,r){return r<<e});$(function(e,r){return r>>e});$(function(e,r){return r>>>e});var ud=$(function(e,r){var n="g";e.fI&&(n+="m"),e.eY&&(n+="i");try{return Z(new RegExp(r,n))}catch{return W}});$(function(e,r){return r.match(e)!==null});var $d=P(function(e,r,n){for(var a=[],t=0,i=n,c=r.lastIndex,l=-1,u;t++<e&&(u=r.exec(i))&&l!=r.lastIndex;){for(var v=u.length-1,f=new Array(v);v>0;){var d=u[v];f[--v]=d?Z(d):W}a.push(S(Gu,u[0],u.index,t,g(f))),l=r.lastIndex}return r.lastIndex=c,g(a)});q(function(e,r,n,a){var t=0;function i(c){if(t++>=e)return c;for(var l=arguments.length-3,u=new Array(l);l>0;){var v=arguments[l];u[--l]=v?Z(v):W}return n(S(Gu,c,arguments[arguments.length-2],t,g(u)))}return a.replace(r,i)});P(function(e,r,n){for(var a=n,t=[],i=r.lastIndex,c=r.lastIndex;e--;){var l=r.exec(a);if(!l)break;t.push(a.slice(i,l.index)),i=r.lastIndex}return t.push(a.slice(i)),r.lastIndex=c,g(t)});var Tc=0;function ya(e,r){for(;r.b;r=r.b)e(r.a)}function wi(e){for(var r=0;e.b;e=e.b)r++;return r}var vd=typeof requestAnimationFrame<"u"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},fd=he(function(e,r,n,a,t){return{$:0,a:e,b:r,c:n,d:a,e:t}}),sd=$(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),dd=$(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),md=$(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),gd=$(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),pd=$(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),bd=$(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),hd=$(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),_d=$(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),yd=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Cd=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},Pd=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},wd=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},Ql=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},Kl=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Ld=function(e){e.gl.disable(e.gl.CULL_FACE)},Sd=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},xd=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},zd=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},kc=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Td=[Cd,Pd,wd,Ql,Kl,Ld,Sd,xd,zd];function Mc(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function kd(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function eu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Md(e,r,n,a){for(var t=n.a.dv,i=[],c=0;c<t;c++)i.push(String.fromCharCode(97+c));function l(s,b,h,C,L){var _;if(t===1)for(_=0;_<b;_++)s[h++]=b===1?C[L]:C[L][_];else i.forEach(function(x){for(_=0;_<b;_++)s[h++]=b===1?C[x][L]:C[x][L][_]})}var u=eu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var v=0,f=u.size*u.arraySize*t,d=new u.type(wi(n.b)*f);ya(function(s){l(d,u.size*u.arraySize,v,s,a[r.name]||r.name),v+=f},n.b);var p=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),p}function Dd(e,r){if(r.a.dF>0){var n=e.createBuffer(),a=jd(r.c,r.a.dF);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.dv*wi(r.b),indexBuffer:null,buffers:{}}}function jd(e,r){var n=new Uint32Array(wi(e)*r),a=0,t;return ya(function(i){if(r===1)n[a++]=i;else for(t=0;t<r;t++)n[a++]=i[String.fromCharCode(97+t)]},e),n}function Dc(e,r){return e+"#"+r}var ru=$(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),Ql(n),Kl(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function t(i){if(!!i.d.b.b){var c,l,u;if(i.b.id&&i.c.id&&(c=Dc(i.b.id,i.c.id),l=n.programs[c]),!l){var v;i.b.id?v=n.shaders[i.b.id]:i.b.id=Tc++,v||(v=Mc(a,i.b.src,a.VERTEX_SHADER),n.shaders[i.b.id]=v);var f;i.c.id?f=n.shaders[i.c.id]:i.c.id=Tc++,f||(f=Mc(a,i.c.src,a.FRAGMENT_SHADER),n.shaders[i.c.id]=f);var d=kd(a,v,f);l={glProgram:d,attributes:Object.assign({},i.b.attributes,i.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},l.uniformSetters=Ad(a,e,l,Object.assign({},i.b.uniforms,i.c.uniforms));var p=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<p;u++){var s=a.getActiveAttrib(d,u),b=a.getAttribLocation(d,s.name);l.activeAttributes.push(s),l.activeAttributeLocations.push(b)}c=Dc(i.b.id,i.c.id),n.programs[c]=l}n.lastProgId!==c&&(a.useProgram(l.glProgram),n.lastProgId=c),Bd(l.uniformSetters,i.e);var h=n.buffers.get(i.d);for(h||(h=Dd(a,i.d),n.buffers.set(i.d,h)),u=0;u<l.activeAttributes.length;u++){s=l.activeAttributes[u],b=l.activeAttributeLocations[u],h.buffers[s.name]===void 0&&(h.buffers[s.name]=Md(a,s,i.d,l.attributes)),a.bindBuffer(a.ARRAY_BUFFER,h.buffers[s.name]);var C=eu(a,s.type);if(C.arraySize===1)a.enableVertexAttribArray(b),a.vertexAttribPointer(b,C.size,C.baseType,!1,0,0);else for(var L=C.size*4,_=L*C.arraySize,x=0;x<C.arraySize;x++)a.enableVertexAttribArray(b+x),a.vertexAttribPointer(b+x,C.size,C.baseType,!1,_,L*x)}for(n.toggle=!n.toggle,ya(L3(n),i.a),u=0;u<kc.length;u++){var D=n[kc[u]];D.toggle!==n.toggle&&D.enabled&&(Td[u](n),D.enabled=!1,D.toggle=n.toggle)}h.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,h.indexBuffer),a.drawElements(i.d.a.ee,h.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(i.d.a.ee,0,h.numIndices)}}return ya(t,e.g),r});function Ad(e,r,n,a){var t=n.glProgram,i=n.currentUniforms,c=0,l=r.f;function u(s,b){var h=b.name,C=e.getUniformLocation(s,h);switch(b.type){case e.INT:return function(_){i[h]!==_&&(e.uniform1i(C,_),i[h]=_)};case e.FLOAT:return function(_){i[h]!==_&&(e.uniform1f(C,_),i[h]=_)};case e.FLOAT_VEC2:return function(_){i[h]!==_&&(e.uniform2f(C,_[0],_[1]),i[h]=_)};case e.FLOAT_VEC3:return function(_){i[h]!==_&&(e.uniform3f(C,_[0],_[1],_[2]),i[h]=_)};case e.FLOAT_VEC4:return function(_){i[h]!==_&&(e.uniform4f(C,_[0],_[1],_[2],_[3]),i[h]=_)};case e.FLOAT_MAT4:return function(_){i[h]!==_&&(e.uniformMatrix4fv(C,!1,new Float32Array(_)),i[h]=_)};case e.SAMPLER_2D:var L=c++;return function(_){e.activeTexture(e.TEXTURE0+L);var x=l.textures.get(_);x||(x=_.e4(e),l.textures.set(_,x)),e.bindTexture(e.TEXTURE_2D,x),i[h]!==_&&(e.uniform1i(C,L),i[h]=_)};case e.BOOL:return function(_){i[h]!==_&&(e.uniform1i(C,_),i[h]=_)};default:return function(){}}}for(var v={},f=e.getProgramParameter(t,e.ACTIVE_UNIFORMS),d=0;d<f;d++){var p=e.getActiveUniform(t,d);v[a[p.name]||p.name]=u(t,p)}return v}function Bd(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var Fd=P(function(e,r,n){return Fs(r,{g:n,f:{},h:e},Gd,Hd)}),Vd=$(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),qd=$(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Ed=$(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Wd=$(function(e,r){e.contextAttributes.antialias=!0}),Rd=$(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),Nd=$(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Gd(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};ya(function(t){return o(w3,r,t)},e.h);var n=Br.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap<"u"?(r.sceneSettings.forEach(function(t){t(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),vd(function(){return o(ru,e,n)})):(n=Br.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Hd(e,r){return r.f=e.f,ru(r)}var Id=$(function(e,r){return new Float64Array([e,r])});$(function(e,r){return new Float64Array([e,r[1]])});$(function(e,r){return new Float64Array([r[0],e])});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});$(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});$(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Ud(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Ud(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});$(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]});var Li=new Float64Array(3),jc=new Float64Array(3),Ac=new Float64Array(3),Jd=P(function(e,r,n){return new Float64Array([e,r,n])}),Od=function(e){return e[0]},Xd=function(e){return e[1]},Yd=function(e){return e[2]};$(function(e,r){return new Float64Array([e,r[1],r[2]])});$(function(e,r){return new Float64Array([r[0],e,r[2]])});$(function(e,r){return new Float64Array([r[0],r[1],e])});var Zd=function(e){return new Float64Array([e.gq,e.gu,e.dg])};$(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function nu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}$(nu);function au(e,r,n){return n===void 0&&(n=new Float64Array(3)),yt(nu(e,r,n),n)}$(au);function tu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return Math.sqrt(n*n+a*a+t*t)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2];return n*n+a*a+t*t});function yt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/tu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var Qd=$(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),$a=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};$($a);function qo(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}$(qo);$(function(e,r){var n,a=Li,t=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=$a(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],t[0]=($a(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],t[1]=($a(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],t[2]=($a(r,a)+e[14])/n,t});var Kd=q(function(e,r,n,a){return new Float64Array([e,r,n,a])});$(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});$(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var em=function(e){return{gq:e[0],gu:e[1],dg:e[2],eN:e[3]}},rm=function(e){return new Float64Array([e.gq,e.gu,e.dg,e.eN])};$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});$(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});$(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/nm(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function nm(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return Math.sqrt(n*n+a*a+t*t+i*i)});$(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],t=e[2]-r[2],i=e[3]-r[3];return n*n+a*a+t*t+i*i});$(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});$(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var am=new Float64Array(16),tm=new Float64Array(16),om=function(e){var r=new Float64Array(16);return r[0]=e.dS,r[1]=e.dW,r[2]=e.d_,r[3]=e.d2,r[4]=e.dT,r[5]=e.dX,r[6]=e.d$,r[7]=e.d3,r[8]=e.dU,r[9]=e.dY,r[10]=e.d0,r[11]=e.d4,r[12]=e.dV,r[13]=e.dZ,r[14]=e.d1,r[15]=e.d5,r},im=function(e){return{dS:e[0],dW:e[1],d_:e[2],d2:e[3],dT:e[4],dX:e[5],d$:e[6],d3:e[7],dU:e[8],dY:e[9],d0:e[10],d4:e[11],dV:e[12],dZ:e[13],d1:e[14],d5:e[15]}};function ou(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2*t/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2*t/(a-n),c[6]=0,c[7]=0,c[8]=(r+e)/(r-e),c[9]=(a+n)/(a-n),c[10]=-(i+t)/(i-t),c[11]=-1,c[12]=0,c[13]=0,c[14]=-2*i*t/(i-t),c[15]=0,c}or(ou);q(function(e,r,n,a){var t=n*Math.tan(e*Math.PI/360),i=-t,c=i*r,l=t*r;return ou(c,l,i,t,n,a)});function iu(e,r,n,a,t,i){var c=new Float64Array(16);return c[0]=2/(r-e),c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=2/(a-n),c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=-2/(i-t),c[11]=0,c[12]=-(r+e)/(r-e),c[13]=-(a+n)/(a-n),c[14]=-(i+t)/(i-t),c[15]=1,c}or(iu);q(function(e,r,n,a){return iu(e,r,n,a,-1,1)});function cu(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[3],l=e[4],u=e[5],v=e[6],f=e[7],d=e[8],p=e[9],s=e[10],b=e[11],h=e[12],C=e[13],L=e[14],_=e[15],x=r[0],D=r[1],H=r[2],N=r[3],R=r[4],I=r[5],U=r[6],E=r[7],Q=r[8],K=r[9],be=r[10],_e=r[11],de=r[12],Ce=r[13],Ie=r[14],Ve=r[15];return n[0]=a*x+l*D+d*H+h*N,n[1]=t*x+u*D+p*H+C*N,n[2]=i*x+v*D+s*H+L*N,n[3]=c*x+f*D+b*H+_*N,n[4]=a*R+l*I+d*U+h*E,n[5]=t*R+u*I+p*U+C*E,n[6]=i*R+v*I+s*U+L*E,n[7]=c*R+f*I+b*U+_*E,n[8]=a*Q+l*K+d*be+h*_e,n[9]=t*Q+u*K+p*be+C*_e,n[10]=i*Q+v*K+s*be+L*_e,n[11]=c*Q+f*K+b*be+_*_e,n[12]=a*de+l*Ce+d*Ie+h*Ve,n[13]=t*de+u*Ce+p*Ie+C*Ve,n[14]=i*de+v*Ce+s*Ie+L*Ve,n[15]=c*de+f*Ce+b*Ie+_*Ve,n}$(cu);$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=e[4],l=e[5],u=e[6],v=e[8],f=e[9],d=e[10],p=e[12],s=e[13],b=e[14],h=r[0],C=r[1],L=r[2],_=r[4],x=r[5],D=r[6],H=r[8],N=r[9],R=r[10],I=r[12],U=r[13],E=r[14];return n[0]=a*h+c*C+v*L,n[1]=t*h+l*C+f*L,n[2]=i*h+u*C+d*L,n[3]=0,n[4]=a*_+c*x+v*D,n[5]=t*_+l*x+f*D,n[6]=i*_+u*x+d*D,n[7]=0,n[8]=a*H+c*N+v*R,n[9]=t*H+l*N+f*R,n[10]=i*H+u*N+d*R,n[11]=0,n[12]=a*I+c*U+v*E+p,n[13]=t*I+l*U+f*E+s,n[14]=i*I+u*U+d*E+b,n[15]=1,n});$(function(e,r){var n=new Float64Array(16);r=yt(r,Li);var a=r[0],t=r[1],i=r[2],c=Math.cos(e),l=1-c,u=Math.sin(e);return n[0]=a*a*l+c,n[1]=t*a*l+i*u,n[2]=i*a*l-t*u,n[3]=0,n[4]=a*t*l-i*u,n[5]=t*t*l+c,n[6]=t*i*l+a*u,n[7]=0,n[8]=a*i*l+t*u,n[9]=t*i*l-a*u,n[10]=i*i*l+c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});P(function(e,r,n){var a=new Float64Array(16),t=1/tu(r),i=r[0]*t,c=r[1]*t,l=r[2]*t,u=Math.cos(e),v=1-u,f=Math.sin(e),d=i*f,p=c*f,s=l*f,b=i*c*v,h=i*l*v,C=c*l*v,L=i*i*v+u,_=b+s,x=h-p,D=b-s,H=c*c*v+u,N=C+d,R=h+p,I=C-d,U=l*l*v+u,E=n[0],Q=n[1],K=n[2],be=n[3],_e=n[4],de=n[5],Ce=n[6],Ie=n[7],Ve=n[8],Jr=n[9],Or=n[10],co=n[11],Nv=n[12],Gv=n[13],Hv=n[14],Iv=n[15];return a[0]=E*L+_e*_+Ve*x,a[1]=Q*L+de*_+Jr*x,a[2]=K*L+Ce*_+Or*x,a[3]=be*L+Ie*_+co*x,a[4]=E*D+_e*H+Ve*N,a[5]=Q*D+de*H+Jr*N,a[6]=K*D+Ce*H+Or*N,a[7]=be*D+Ie*H+co*N,a[8]=E*R+_e*I+Ve*U,a[9]=Q*R+de*I+Jr*U,a[10]=K*R+Ce*I+Or*U,a[11]=be*R+Ie*I+co*U,a[12]=Nv,a[13]=Gv,a[14]=Hv,a[15]=Iv,a});function cm(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}P(cm);q(function(e,r,n,a){var t=new Float64Array(16);return t[0]=a[0]*e,t[1]=a[1]*e,t[2]=a[2]*e,t[3]=a[3]*e,t[4]=a[4]*r,t[5]=a[5]*r,t[6]=a[6]*r,t[7]=a[7]*r,t[8]=a[8]*n,t[9]=a[9]*n,t[10]=a[10]*n,t[11]=a[11]*n,t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*t,n[5]=r[5]*t,n[6]=r[6]*t,n[7]=r[7]*t,n[8]=r[8]*i,n[9]=r[9]*i,n[10]=r[10]*i,n[11]=r[11]*i,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function lm(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}P(lm);q(function(e,r,n,a){var t=new Float64Array(16),i=a[0],c=a[1],l=a[2],u=a[3],v=a[4],f=a[5],d=a[6],p=a[7],s=a[8],b=a[9],h=a[10],C=a[11];return t[0]=i,t[1]=c,t[2]=l,t[3]=u,t[4]=v,t[5]=f,t[6]=d,t[7]=p,t[8]=s,t[9]=b,t[10]=h,t[11]=C,t[12]=i*e+v*r+s*n+a[12],t[13]=c*e+f*r+b*n+a[13],t[14]=l*e+d*r+h*n+a[14],t[15]=u*e+p*r+C*n+a[15],t});$(function(e,r){var n=new Float64Array(16),a=e[0],t=e[1],i=e[2],c=r[0],l=r[1],u=r[2],v=r[3],f=r[4],d=r[5],p=r[6],s=r[7],b=r[8],h=r[9],C=r[10],L=r[11];return n[0]=c,n[1]=l,n[2]=u,n[3]=v,n[4]=f,n[5]=d,n[6]=p,n[7]=s,n[8]=b,n[9]=h,n[10]=C,n[11]=L,n[12]=c*a+f*t+b*i+r[12],n[13]=l*a+d*t+h*i+r[13],n[14]=u*a+p*t+C*i+r[14],n[15]=v*a+s*t+L*i+r[15],n});P(function(e,r,n){var a=au(e,r,Li),t=yt(qo(n,a,jc),jc),i=yt(qo(a,t,Ac),Ac),c=am,l=tm;return c[0]=t[0],c[1]=i[0],c[2]=a[0],c[3]=0,c[4]=t[1],c[5]=i[1],c[6]=a[1],c[7]=0,c[8]=t[2],c[9]=i[2],c[10]=a[2],c[11]=0,c[12]=0,c[13]=0,c[14]=0,c[15]=1,l[0]=1,l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=1,l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=1,l[11]=0,l[12]=-e[0],l[13]=-e[1],l[14]=-e[2],l[15]=1,cu(c,l)});P(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var T=$f,Ua=nf,lu=P(function(e,r,n){var a=n.c,t=n.d,i=$(function(c,l){if(c.$){var v=c.a;return m(Ua,e,l,v)}else{var u=c.a;return m(Ua,i,l,u)}});return m(Ua,i,m(Ua,e,r,t),a)}),Si=P(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,t=n.c,i=n.d,c=n.e,l=e,u=m(e,a,t,m(Si,e,r,c)),v=i;e=l,r=u,n=v;continue e}}),Bc=function(e){return m(Si,P(function(r,n,a){return o(T,y(r,n),a)}),w,e)},uu=1,um=2,$u=0,Me=function(e){return{$:1,a:e}},xi=$(function(e,r){return{$:3,a:e,b:r}}),Fc=$(function(e,r){return{$:0,a:e,b:r}}),vu=$(function(e,r){return{$:1,a:e,b:r}}),fe=function(e){return{$:0,a:e}},$m=function(e){return{$:2,a:e}},Z=function(e){return{$:0,a:e}},W={$:1},vm=Wf,fu=vs,De=ql,on=$(function(e,r){return o(Vf,e,Vt(r))}),zi=$(function(e,r){return g(o(Ff,e,r))}),su=function(e){return o(on,`
    `,o(zi,`
`,e))},Te=P(function(e,r,n){e:for(;;)if(n.b){var a=n.a,t=n.b,i=e,c=o(e,a,r),l=t;e=i,r=c,n=l;continue e}else return r}),Cr=function(e){return m(Te,$(function(r,n){return n+1}),0,e)},Wt=vf,fm=P(function(e,r,n){e:for(;;)if(J(e,r)<1){var a=e,t=r-1,i=o(T,r,n);e=a,r=t,n=i;continue e}else return n}),pn=$(function(e,r){return m(fm,e,r,w)}),Rt=$(function(e,r){return m(Wt,e,o(pn,0,Cr(r)-1),r)}),br=Jf,du=function(e){var r=br(e);return 97<=r&&r<=122},mu=function(e){var r=br(e);return r<=90&&65<=r},sm=function(e){return du(e)||mu(e)},dm=function(e){var r=br(e);return r<=57&&48<=r},mm=function(e){return du(e)||mu(e)||dm(e)},ie=function(e){return m(Te,T,w,e)},Zn=Df,gm=$(function(e,r){return`

(`+(De(e+1)+(") "+su(pm(r))))}),pm=function(e){return o(bm,e,w)},bm=$(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,c=e.b,a=function(){var h=Zn(n);if(h.$===1)return!1;var C=h.a,L=C.a,_=C.b;return sm(L)&&o(vm,mm,_)}(),t=a?"."+n:"['"+(n+"']"),u=c,v=o(T,t,r);e=u,r=v;continue e;case 1:var i=e.a,c=e.b,l="["+(De(i)+"]"),u=c,v=o(T,l,r);e=u,r=v;continue e;case 2:var f=e.a;if(f.b)if(f.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+o(on,"",ie(r)):"Json.Decode.oneOf"}(),b=d+(" failed in the following "+(De(Cr(f))+" ways:"));return o(on,`

`,o(T,b,o(Rt,gm,f)))}else{var c=f.a,u=c,v=r;e=u,r=v;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+o(on,"",ie(r)):"!"}();default:var p=e.a,s=e.b,b=function(){return r.b?"Problem with the value at json"+(o(on,"",ie(r))+`:

    `):`Problem with the given value:

`}();return b+(su(o(fu,4,s))+(`

`+p))}}),pe=32,Fr=q(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),bn=Jv,Ti=Lf,ki=$(function(e,r){return yc(r)/yc(e)}),hm=Pf,$r=Ti(o(ki,2,pe)),Mi=S(Fr,0,$r,bn,bn),gu=Yv,hn=function(e){return{$:1,a:e}};$(function(e,r){return e(r)});var _m=$(function(e,r){return r(e)}),ym=Sf,Pr=Xv,Oe=$(function(e,r){return J(e,r)>0?e:r}),ln=function(e){return{$:0,a:e}},Di=Zv,Cm=$(function(e,r){e:for(;;){var n=o(Di,pe,e),a=n.a,t=n.b,i=o(T,ln(a),r);if(t.b){var c=t,l=i;e=c,r=l;continue e}else return ie(i)}}),Pm=function(e){var r=e.a;return r},wm=$(function(e,r){e:for(;;){var n=Ti(r/pe);if(n===1)return o(Di,pe,e).a;var a=o(Cm,e,w),t=n;e=a,r=t;continue e}}),ji=$(function(e,r){if(r.m){var n=r.m*pe,a=ym(o(ki,pe,n-1)),t=e?ie(r.A):r.A,i=o(wm,t,r.m);return S(Fr,Pr(r.p)+n,o(Oe,5,a*$r),i,r.p)}else return S(Fr,Pr(r.p),$r,bn,r.p)}),Lm=he(function(e,r,n,a,t){e:for(;;){if(r<0)return o(ji,!1,{A:a,m:n/pe|0,p:t});var i=hn(m(gu,pe,r,e)),c=e,l=r-pe,u=n,v=o(T,i,a),f=t;e=c,r=l,n=u,a=v,t=f;continue e}}),pu=$(function(e,r){if(e<=0)return Mi;var n=e%pe,a=m(gu,n,e-n,r),t=e-n-pe;return z(Lm,r,t,e,w,a)}),ir=function(e){return!e.$},B=os,re=Qf,j=as,ae=Kf,Sm=function(e){return{$:2,a:e}},Nt=$(function(e,r){return e}),bu=$(function(e,r){return{e0:r.e0,e1:e,bg:r.bg,dt:r.dt,dL:r.dL,em:r.em,aL:r.aL,gm:r.gm}}),Ca=cs,Gt=ls,$e=Xf,Ai=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},hr=function(e){return e},xm=hr,Vc=or(function(e,r,n,a,t,i){return{dB:i,dD:r,ej:a,eo:n,es:e,et:t}}),zm=Rf,cn=jf,qn=qf,Da=$(function(e,r){return e<1?r:m(qn,e,cn(r),r)}),Ht=Gf,It=function(e){return e===""},Ut=$(function(e,r){return e<1?"":m(qn,0,e,r)}),hu=Hf,qc=he(function(e,r,n,a,t){if(It(t)||o(zm,"@",t))return W;var i=o(Ht,":",t);if(i.b){if(i.b.b)return W;var c=i.a,l=hu(o(Da,c+1,t));if(l.$===1)return W;var u=l;return Z(We(Vc,e,o(Ut,c,t),u,r,n,a))}else return Z(We(Vc,e,t,W,r,n,a))}),Ec=q(function(e,r,n,a){if(It(a))return W;var t=o(Ht,"/",a);if(t.b){var i=t.a;return z(qc,e,o(Da,i,a),r,n,o(Ut,i,a))}else return z(qc,e,"/",r,n,a)}),Wc=P(function(e,r,n){if(It(n))return W;var a=o(Ht,"?",n);if(a.b){var t=a.a;return S(Ec,e,Z(o(Da,t+1,n)),r,o(Ut,t,n))}else return S(Ec,e,W,r,n)});$(function(e,r){if(It(r))return W;var n=o(Ht,"#",r);if(n.b){var a=n.a;return m(Wc,e,Z(o(Da,a+1,r)),o(Ut,a,r))}else return m(Wc,e,W,r)});var Tm=Nf,Bi=function(e){},ja=Pn,km=ja(0),_u=q(function(e,r,n,a){if(a.b){var t=a.a,i=a.b;if(i.b){var c=i.a,l=i.b;if(l.b){var u=l.a,v=l.b;if(v.b){var f=v.a,d=v.b,p=n>500?m(Te,e,r,ie(d)):S(_u,e,r,n+1,d);return o(e,t,o(e,c,o(e,u,o(e,f,p))))}else return o(e,t,o(e,c,o(e,u,r)))}else return o(e,t,o(e,c,r))}else return o(e,t,r)}else return r}),Ir=P(function(e,r,n){return S(_u,e,r,0,n)}),Y=$(function(e,r){return m(Ir,$(function(n,a){return o(T,e(n),a)}),w,r)}),Ct=Bo,Fi=$(function(e,r){return o(Ct,function(n){return ja(e(n))},r)}),Mm=P(function(e,r,n){return o(Ct,function(a){return o(Ct,function(t){return ja(o(e,a,t))},n)},r)}),Dm=function(e){return m(Ir,Mm(T),ja(w),e)},jm=Ls,Am=$(function(e,r){var n=r;return Wl(o(Ct,jm(e),n))}),Bm=P(function(e,r,n){return o(Fi,function(a){return 0},Dm(o(Y,Am(e),r)))}),Fm=P(function(e,r,n){return ja(0)}),Vm=$(function(e,r){var n=r;return o(Fi,e,n)});pr.Task=Ps(km,Bm,Fm,Vm);var qm=Nl("Task"),Vi=$(function(e,r){return qm(o(Fi,e,r))}),Em=od,Wm=kf,Pt={$:1},yu=function(e){return{$:2,a:e}},Jt={$:0},tr=$(function(e,r){return{$:0,a:e,b:r}}),te=P(function(e,r,n){return r(e(n))}),Qn=function(e){var r=e.b.C;return r.a},Rm=function(e){var r=e.a,n=e.b.W,a=e.b.C,t=e.b.ae;if(t.b){var i=t.a,c=t.b;return Z(o(tr,r,{C:i,ae:c,W:o(T,a,n)}))}else return W},Cu=function(e){var r=e.b;return o(tr,Jt,r)},Ze=$(function(e,r){if(r.$)return e;var n=r.a;return n}),Nm=P(function(e,r,n){var a=n.a,t=n.b;switch(a.$){case 1:return r.em.ds?Cu(n):n;case 2:var i=a.a.c5;return(J(i+r.dt,Qn(n).e0)>0?o(te,Rm,Ze(o(tr,Pt,t))):hr)(o(tr,yu({c5:i+r.dt}),t));default:var c=t.C,l=c.a,u=c.b,v=o(bu,l.e1,V(r,{e0:l.e0+r.dt})),f=o(e,v,u);return o(tr,Jt,{C:y(v,f),ae:w,W:o(T,t.C,t.W)})}}),qi=$(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,t=n;e=a,r=t;continue e}else return r}}),Gm=P(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,t=r.b,i=e-1,c=t,l=o(T,a,n);e=i,r=c,n=l;continue e}else return n}}),Hm=$(function(e,r){return ie(m(Gm,e,r,w))}),Pu=P(function(e,r,n){if(r<=0)return w;{var a=y(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var t=a.b,_=t.a,i=t.b,c=i.a;return g([_,c]);case 3:if(a.b.b.b.b){var l=a.b,_=l.a,u=l.b,c=u.a,v=u.b,f=v.a;return g([_,c,f])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,_=d.a,p=d.b,c=p.a,s=p.b,f=s.a,b=s.b,h=b.a,C=b.b;return e>1e3?o(T,_,o(T,c,o(T,f,o(T,h,o(Hm,r-4,C))))):o(T,_,o(T,c,o(T,f,o(T,h,m(Pu,e+1,r-4,C)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var L=a.b,_=L.a;return g([_])}}),Ei=$(function(e,r){return m(Pu,0,e,r)}),Im=$(function(e,r){var n=r.b.W,a=r.b.C,t=r.b.ae,i=ce(ie(n),ce(g([a]),t)),c=o(Ei,e,i),l=o(qi,e,i);if(l.b){var u=l.a,v=l.b;return o(tr,Pt,{C:u,ae:v,W:ie(c)})}else{var f=ie(c);if(f.b){var d=f.a,p=f.b;return o(tr,Pt,{C:d,ae:w,W:p})}else return r}}),Um=function(e){var r=e.b;return o(tr,Pt,r)},Jm=function(e){var r=e.b;return o(tr,yu({c5:Qn(e).e0}),r)},Om=$(function(e,r){switch(e.$){case 1:return Um(r);case 2:return Cu(r);case 3:return Jm(r);default:var n=e.a;return o(Im,n,r)}}),wu=$(function(e,r){var n=r.a,a=r.b;return y(e(n),a)}),Xm=$(function(e,r){return V(r,{aC:e(r.aC)})}),Lu=function(e){return{$:3,a:e}},Su=function(e){return{$:2,a:e}},xu=$(function(e,r){return{$:0,a:e,b:r}}),Ym=$(function(e,r){return{$:1,a:e,b:r}}),ne=$(function(e,r){if(r.$)return W;var n=r.a;return Z(e(n))}),ee=function(e){return e<0?-e:e},Wi=If,Zm=P(function(e,r,n){return o(Ze,0/0,Wi(o(e,r,n)))}),zu=$(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var t=e,i=a;e=t,r=i;continue e}else return!1}),Qm=lf,Km=Bf,Tu=function(e){return m(Km,T,w,e)},eg=$(function(e,r){var n=o(zu,function(a){return a!=="0"&&a!=="."},Tu(r));return ce(e&&n?"-":"",r)}),le=ql,Eo=Mf,ku=Of,Mu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=Zn(n);if(a.$===1)return"01";var t=a.a;return o(Eo,"0",Mu(t))}else{var i=br(r);return i>=48&&i<57?o(Eo,ku(i+1),n):"0"}},Wo=wf,rg=Tf,Ot=function(e){return o(Eo,e,"")},Du=P(function(e,r,n){return e<=0?n:m(Du,e>>1,ce(r,r),e&1?ce(n,r):n)}),Pa=$(function(e,r){return m(Du,e,r,"")}),Ro=P(function(e,r,n){return ce(n,o(Pa,e-cn(n),Ot(r)))}),No=Af,ju=function(e){var r=o(zi,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a;return y(n,t)}else{var n=r.a;return y(n,"0")}else return y("0","0")},ng=function(e){var r=o(zi,"e",le(ee(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=o(Ze,0,hu(o(Tm,"+",t)?o(Da,1,t):t)),c=ju(n),l=c.a,u=c.b,v=ce(l,u),f=i<0?o(Ze,"0",o(ne,function(d){var p=d.a,s=d.b;return p+("."+s)},o(ne,wu(Ot),Zn(ce(o(Pa,ee(i),"0"),v))))):m(Ro,i+1,"0",v);return ce(e<0?"-":"",f)}else{var n=r.a;return ce(e<0?"-":"",n)}else return""},ag=P(function(e,r,n){if(Wo(n)||rg(n))return le(n);var a=n<0,t=ju(ng(ee(n))),i=t.a,c=t.b,l=cn(i)+r,u=ce(o(Pa,-l+1,"0"),m(Ro,l,"0",ce(i,c))),v=cn(u),f=o(Oe,1,l),d=o(e,a,m(qn,f,v,u)),p=m(qn,0,f,u),s=d?No(o(Ze,"1",o(ne,Mu,Zn(No(p))))):p,b=cn(s),h=s==="0"?s:r<=0?ce(s,o(Pa,ee(r),"0")):J(r,cn(c))<0?m(qn,0,b-r,s)+("."+m(qn,b-r,b,s)):ce(i+".",m(Ro,r,"0",c));return o(eg,a,h)}),Au=ag($(function(e,r){var n=Zn(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,t=a.a;return function(i){return i>53&&e||i>=53&&!e}(br(t))})),tg=Zm(Au),og=P(function(e,r,n){var a=o(ki,10,ee(r-e)),t=a<0?3:a<1?2:a<2?1:0;return o(tg,t,n)}),Ri=uf,Kn=$(function(e,r){e:for(;;){if(r.$===-2)return W;var n=r.b,a=r.c,t=r.d,i=r.e,c=o(Ri,e,n);switch(c){case 0:var l=e,u=t;e=l,r=u;continue e;case 1:return Z(a);default:var l=e,u=i;e=l,r=u;continue e}}}),O=he(function(e,r,n,a,t){return{$:-1,a:e,b:r,c:n,d:a,e:t}}),wr={$:-2},Gn=he(function(e,r,n,a,t){if(t.$===-1&&!t.a){t.a;var i=t.b,c=t.c,l=t.d,u=t.e;if(a.$===-1&&!a.a){a.a;var v=a.b,f=a.c,d=a.d,p=a.e;return z(O,0,r,n,z(O,1,v,f,d,p),z(O,1,i,c,l,u))}else return z(O,e,i,c,z(O,0,r,n,a,l),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var v=a.b,f=a.c,s=a.d;s.a;var b=s.b,h=s.c,C=s.d,L=s.e,p=a.e;return z(O,0,v,f,z(O,1,b,h,C,L),z(O,1,r,n,p,t))}else return z(O,e,r,n,a,t)}),Go=P(function(e,r,n){if(n.$===-2)return z(O,0,e,r,wr,wr);var a=n.a,t=n.b,i=n.c,c=n.d,l=n.e,u=o(Ri,e,t);switch(u){case 0:return z(Gn,a,t,i,m(Go,e,r,c),l);case 1:return z(O,a,t,r,c,l);default:return z(Gn,a,t,i,c,m(Go,e,r,l))}}),un=P(function(e,r,n){var a=m(Go,e,r,n);if(a.$===-1&&!a.a){a.a;var t=a.b,i=a.c,c=a.d,l=a.e;return z(O,1,t,i,c,l)}else{var u=a;return u}}),ig=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},Bu=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d,u=t.e,v=e.e;v.a;var f=v.b,d=v.c,p=v.d;p.a;var s=p.b,b=p.c,h=p.d,C=p.e,L=v.e;return z(O,0,s,b,z(O,1,n,a,z(O,0,i,c,l,u),h),z(O,1,f,d,C,L))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,l=_.d,u=_.e,x=e.e;x.a;var f=x.b,d=x.c,p=x.d,L=x.e;return z(O,1,n,a,z(O,0,i,c,l,u),z(O,0,f,d,p,L))}else return e},Rc=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,t=e.d;t.a;var i=t.b,c=t.c,l=t.d;l.a;var u=l.b,v=l.c,f=l.d,d=l.e,p=t.e,s=e.e;s.a;var b=s.b,h=s.c,C=s.d,L=s.e;return z(O,0,i,c,z(O,1,u,v,f,d),z(O,1,n,a,p,z(O,0,b,h,C,L)))}else{var r=e.a,n=e.b,a=e.c,_=e.d;_.a;var i=_.b,c=_.c,x=_.d,p=_.e,D=e.e;D.a;var b=D.b,h=D.c,C=D.d,L=D.e;return z(O,1,n,a,z(O,0,i,c,x,p),z(O,0,b,h,C,L))}else return e},cg=Ft(function(e,r,n,a,t,i,c){if(i.$===-1&&!i.a){i.a;var l=i.b,u=i.c,v=i.d,f=i.e;return z(O,n,l,u,v,z(O,0,a,t,f,c))}else{e:for(;;)if(c.$===-1&&c.a===1)if(c.d.$===-1)if(c.d.a===1){c.a;var d=c.d;return d.a,Rc(r)}else break e;else return c.a,c.d,Rc(r);else break e;return r}}),it=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,t=e.d,i=t.a,c=t.d,l=e.e;if(i===1){if(c.$===-1&&!c.a)return c.a,z(O,r,n,a,it(t),l);var u=Bu(e);if(u.$===-1){var v=u.a,f=u.b,d=u.c,p=u.d,s=u.e;return z(Gn,v,f,d,it(p),s)}else return wr}else return z(O,r,n,a,it(t),l)}else return wr},ga=$(function(e,r){if(r.$===-2)return wr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(J(e,a)<0)if(i.$===-1&&i.a===1){i.a;var l=i.d;if(l.$===-1&&!l.a)return l.a,z(O,n,a,t,o(ga,e,i),c);var u=Bu(r);if(u.$===-1){var v=u.a,f=u.b,d=u.c,p=u.d,s=u.e;return z(Gn,v,f,d,o(ga,e,p),s)}else return wr}else return z(O,n,a,t,o(ga,e,i),c);else return o(lg,e,di(cg,e,r,n,a,t,i,c))}),lg=$(function(e,r){if(r.$===-1){var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;if(ve(e,a)){var l=ig(c);if(l.$===-1){var u=l.b,v=l.c;return z(Gn,n,u,v,i,it(c))}else return wr}else return z(Gn,n,a,t,i,o(ga,e,c))}else return wr}),ug=$(function(e,r){var n=o(ga,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,t=n.c,i=n.d,c=n.e;return z(O,1,a,t,i,c)}else{var l=n;return l}}),Ja=P(function(e,r,n){var a=r(o(Kn,e,n));if(a.$)return o(ug,e,n);var t=a.a;return m(un,e,t,n)}),$g=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return o(Ja,r,ne(function(a){if(a.$===1){var t=a.a,i=t.a,c=t.b;return o(Ym,y(i,c),n)}else return a}));case 0:var r=e.a,n=e.b;return o(Ja,r,ne(function(a){if(a.$)return a;var t=a.a,i=t.a,c=t.b;return o(xu,y(i,c),m(og,i,c,n))}));case 3:var r=e.a,n=e.b;return o(Ja,r,ne(function(a){return a.$===3?Lu(n):a}));default:var r=e.a,n=e.b;return o(Ja,r,ne(function(a){return a.$===2?Su(n):a}))}},vg=function(e){return Xm($g(e))},fg=$(function(e,r){return o(Y,vg(e),r)}),sg=$(function(e,r){return V(r,{e1:o(fg,e,r.e1)})}),dg=$(function(e,r){var n=r.a,a=r.b;return o(tr,n,V(a,{C:o(wu,sg(e),a.C)}))}),mg=$(function(e,r){var n=r.a,a=r.b;return y(n,e(a))}),gg=P(function(e,r,n){var a=n.a,t=n.b,i=t.C;return o(tr,a,V(t,{C:o(mg,o(e,i.a,r),i)}))}),pg=q(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return V(a,{aV:!a.aV});case 2:var t=n.a;return V(a,{H:m(Nm,e,t,a.H)});case 3:var i=n.a;return V(a,{H:o(dg,i,a.H)});case 4:var c=n.a;return V(a,{H:m(gg,r,c,a.H)});default:var l=n.a;return V(a,{H:o(Om,l,a.H)})}}),bg=$(function(e,r){return o(tr,Jt,{C:y(e,r(e)),ae:w,W:w})}),hg=Ss,Nc=hg(w),_r=rs,Hn=es,_g=Ms("tick",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return $e({e0:c,bg:i,dt:t,dL:a,em:n,aL:r,gm:e})},o(j,"clock",ae))},o(j,"devicePixelRatio",ae))},o(j,"dt",ae))},o(j,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(f){return o(B,function(d){return $e({eP:d,e2:f,ds:v,fa:u,fz:l,fW:c,f_:i,eA:t,eI:a})},o(j,"alt",re))},o(j,"control",re))},o(j,"down",re))},o(j,"downs",_r(Hn)))},o(j,"left",re))},o(j,"pressedKeys",_r(Hn)))},o(j,"right",re))},o(j,"shift",re))},o(j,"up",re))))},o(j,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return $e({ds:v,fw:u,fF:l,f$:c,f0:i,eI:t,gq:a,gu:n})},o(j,"down",re))},o(j,"isDown",re))},o(j,"move",re))},o(j,"rightDown",re))},o(j,"rightUp",re))},o(j,"up",re))},o(j,"x",ae))},o(j,"y",ae))))},o(j,"screen",o(B,function(r){return o(B,function(n){return $e({fo:n,go:r})},o(j,"height",ae))},o(j,"width",ae))))},o(j,"wheel",o(B,function(e){return o(B,function(r){return $e({e5:r,e6:e})},o(j,"deltaX",ae))},o(j,"deltaY",ae))))),yg=function(e){return{$:4,a:e}},Cg={$:0},Fu=Et,He=$(function(e,r){return o(Il,e,Fu(r))}),k=He("className"),Pg=function(e){var r=e.b.C;return r.b},F=Hr("div"),wt=He("id"),wg=Vs,wa=wg,Lg=qs,oe=Lg,Sg={$:1},xg=function(e){return{$:3,a:e}},zg=function(e){return{$:5,a:e}},Gc=Hr("a"),Qr=Hr("button"),Hc=function(e){return o(He,"href",Rs(e))},Tg=zr("clip-rule"),Le=zr("d"),Ho=zr("fill"),Vu=Gl("http://www.w3.org/2000/svg"),Io=Vu("svg"),Uo=zr("viewBox"),kg=o(Es,"http://www.w3.org/XML/1998/namespace","xml:space"),Ke=Io(g([Uo("0 0 24 24"),Ho("currentColor"),o(oe,"width","100%"),o(oe,"height","100%"),kg("http://www.w3.org/2000/svg")])),Mg=zr("fill-rule"),Se=Vu("path"),lr={dp:Ke(g([o(Se,g([Le("M12 9.42856L19.7143 1.71428L22.2857 4.2857L14.5714 12L22.2857 19.7143L19.7143 22.2857L12 14.5714L4.28572 22.2857L1.7143 19.7143L9.42857 12L1.7143 4.2857L4.28572 1.71428L12 9.42856Z")]),w)])),fi:Ke(g([o(Se,g([Le("M11.8972 2.16C7.00414 2.15938 2.83301 5.70798 2.0496 10.5379C1.26619 15.3679 4.1018 20.053 8.74421 21.599C9.2442 21.689 9.42319 21.382 9.42319 21.118C9.42319 20.881 9.4152 20.253 9.4122 19.418C6.6372 20.018 6.05119 18.08 6.05119 18.08C5.86851 17.477 5.47577 16.9593 4.94419 16.621C4.04419 16.002 5.01319 16.016 5.01319 16.016C5.65387 16.1038 6.21775 16.4834 6.54019 17.044C6.81315 17.5403 7.27296 17.907 7.8175 18.0626C8.36206 18.2183 8.94622 18.15 9.44021 17.873C9.48663 17.367 9.71175 16.8941 10.0752 16.539C7.8612 16.288 5.5332 15.432 5.5332 11.609C5.52091 10.6202 5.88809 9.66431 6.5592 8.93799C6.25555 8.07731 6.29131 7.13327 6.65921 6.29799C6.65921 6.29799 7.49621 6.029 9.40121 7.319C11.0351 6.87102 12.7594 6.87102 14.3932 7.319C16.2992 6.02799 17.1352 6.29799 17.1352 6.29799C17.5048 7.13286 17.5406 8.07757 17.2352 8.93799C17.9088 9.66423 18.2756 10.6226 18.2592 11.613C18.2592 15.446 15.9292 16.288 13.7072 16.535C14.1865 17.0251 14.4324 17.6973 14.3822 18.381C14.3822 19.715 14.3702 20.791 14.3702 21.118C14.3702 21.385 14.5482 21.695 15.0572 21.597C19.6977 20.0484 22.5302 15.363 21.7452 10.5343C20.9602 5.70565 16.7893 2.15888 11.8972 2.16Z")]),w)])),fn:Ke(g([o(Se,g([Le("M11.92 21.23L10.47 19.91C5.32002 15.24 1.92001 12.16 1.92001 8.38001C1.92001 5.3 4.34 2.88 7.42002 2.88C9.16002 2.88 10.83 3.69 11.92 4.97C13.01 3.69 14.68 2.88 16.42 2.88C19.5 2.88 21.92 5.3 21.92 8.38001C21.92 12.16 18.52 15.24 13.37 19.92L11.92 21.23Z")]),w)])),fG:Ke(g([o(Se,g([Le("M20 9.77778L4 9.77778L12 22L20 9.77778Z")]),w),o(Se,g([Le("M14.2857 9.77778L9.71428 9.77778L9.71428 2L14.2857 2L14.2857 9.77778Z")]),w)])),fH:Ke(g([o(Se,g([Le("M4 14.2222L20 14.2222L12 2L4 14.2222Z")]),w),o(Se,g([Le("M9.71429 14.2222H14.2857V22H9.71429V14.2222Z")]),w)])),fS:Ke(g([o(Se,g([Le("M6 19H10V5H6V19ZM14 5V19H18V5H14Z")]),w)])),fT:Ke(g([o(Se,g([Le("M7 5V19L18 12L7 5Z")]),w)])),fU:Ke(g([o(Se,g([Le("M9.5 9.5V2H14.5V9.5H22V14.5H14.5V22H9.5V14.5H2V9.5H9.5Z")]),w)])),em:Ke(g([o(Se,g([Le("M3.97609 22.5975L0.523555 0.939237L19.0232 12.719L9.03003 13.8965L3.97609 22.5975Z")]),w)])),gg:Ke(g([o(Se,g([Mg("evenodd"),Tg("evenodd"),Le("M10.2 3.81818C9.96131 3.81818 9.73239 3.91396 9.5636 4.08445C9.39482 4.25494 9.3 4.48617 9.3 4.72727V5.63636H14.7V4.72727C14.7 4.48617 14.6052 4.25494 14.4364 4.08445C14.2676 3.91396 14.0387 3.81818 13.8 3.81818H10.2ZM16.5 5.63636V4.72727C16.5 4.00395 16.2155 3.31026 15.7092 2.7988C15.2028 2.28734 14.5161 2 13.8 2H10.2C9.48392 2 8.79716 2.28734 8.29081 2.7988C7.78446 3.31026 7.5 4.00395 7.5 4.72727V5.63636H3.9C3.40294 5.63636 3 6.04338 3 6.54545C3 7.04753 3.40294 7.45455 3.9 7.45455H4.8V19.2727C4.8 19.996 5.08446 20.6897 5.59081 21.2012C6.09716 21.7127 6.78391 22 7.5 22H16.5C17.2161 22 17.9028 21.7127 18.4092 21.2012C18.9155 20.6897 19.2 19.996 19.2 19.2727V7.45455H20.1C20.5971 7.45455 21 7.04753 21 6.54545C21 6.04338 20.5971 5.63636 20.1 5.63636H16.5ZM6.6 7.45455V19.2727C6.6 19.5138 6.69482 19.7451 6.8636 19.9156C7.03239 20.086 7.26131 20.1818 7.5 20.1818H16.5C16.7387 20.1818 16.9676 20.086 17.1364 19.9156C17.3052 19.7451 17.4 19.5138 17.4 19.2727V7.45455H6.6ZM10.2 10.1818C10.6971 10.1818 11.1 10.5888 11.1 11.0909V16.5455C11.1 17.0475 10.6971 17.4545 10.2 17.4545C9.70294 17.4545 9.3 17.0475 9.3 16.5455V11.0909C9.3 10.5888 9.70294 10.1818 10.2 10.1818ZM12.9 11.0909C12.9 10.5888 13.3029 10.1818 13.8 10.1818C14.2971 10.1818 14.7 10.5888 14.7 11.0909V16.5455C14.7 17.0475 14.2971 17.4545 13.8 17.4545C13.3029 17.4545 12.9 17.0475 12.9 16.5455V11.0909Z")]),w)])),gh:Ke(g([o(Se,g([Le("M19.894 6.27921C20.7904 5.74329 21.4612 4.89945 21.781 3.90521C20.9387 4.40501 20.017 4.75709 19.056 4.94621C17.7236 3.53673 15.6125 3.19373 13.9024 4.10887C12.1923 5.02399 11.3065 6.9707 11.74 8.86121C8.2896 8.68797 5.07497 7.05813 2.89601 4.37721C1.75884 6.33864 2.33995 8.84599 4.224 10.1072C3.54271 10.0853 2.87652 9.90084 2.281 9.56921C2.281 9.58721 2.281 9.60521 2.281 9.62321C2.2814 11.6664 3.72137 13.4263 5.724 13.8312C5.09206 14.0031 4.4292 14.0285 3.786 13.9052C4.34921 15.6525 5.95956 16.8495 7.79501 16.8852C6.27483 18.0783 4.39747 18.7254 2.46499 18.7222C2.12247 18.7227 1.78021 18.703 1.44 18.6632C3.40239 19.9242 5.68637 20.5936 8.019 20.5912C11.2643 20.6135 14.383 19.3341 16.6777 17.0392C18.9724 14.7443 20.2516 11.6255 20.229 8.3802C20.229 8.1942 20.2247 8.00921 20.216 7.8252C21.0564 7.21781 21.7818 6.46536 22.358 5.60321C21.575 5.95027 20.7445 6.17813 19.894 6.27921Z")]),w)])),gy:Ke(g([o(Se,g([Le("M13.2247 16.2055C13.2247 16.4243 13.1598 16.6382 13.0382 16.8202C12.9166 17.0021 12.7438 17.1439 12.5417 17.2277C12.3395 17.3114 12.117 17.3333 11.9024 17.2906C11.6878 17.248 11.4907 17.1426 11.3359 16.9878C11.1812 16.8331 11.0758 16.636 11.0331 16.4213C10.9904 16.2067 11.0123 15.9843 11.0961 15.7821C11.1798 15.5799 11.3216 15.4071 11.5036 15.2856C11.6855 15.164 11.8994 15.0991 12.1183 15.0991C12.2637 15.0988 12.4077 15.1272 12.542 15.1827C12.6764 15.2382 12.7985 15.3197 12.9013 15.4225C13.0041 15.5253 13.0856 15.6473 13.1411 15.7817C13.1966 15.9161 13.225 16.0601 13.2247 16.2055V16.2055ZM16.3207 7.8055C16.3188 8.9188 15.8752 9.98585 15.0873 10.7724C14.2994 11.5589 13.2316 12.0007 12.1183 12.0007C11.0187 11.9937 9.96018 12.4181 9.16985 13.1826C8.37953 13.9471 7.92034 14.991 7.89082 16.0902C7.8613 17.1894 8.26379 18.2564 9.01194 19.0623C9.76009 19.8681 10.7943 20.3486 11.8927 20.4007C9.66485 20.3721 7.53966 19.4596 5.98461 17.864C4.42955 16.2685 3.57203 14.1205 3.60067 11.8927C3.62931 9.66488 4.54178 7.53969 6.13734 5.98464C7.7329 4.42959 9.88085 3.57206 12.1087 3.6007C12.6613 3.59944 13.2088 3.70721 13.7198 3.91783C14.2308 4.12846 14.6952 4.4378 15.0864 4.82816C15.4777 5.21851 15.7881 5.68221 15.9999 6.19269C16.2117 6.70318 16.3207 7.25043 16.3207 7.8031V7.8055ZM13.2247 7.8055C13.2251 7.58657 13.1607 7.37243 13.0394 7.19017C12.9181 7.0079 12.7455 6.86572 12.5433 6.78161C12.3412 6.6975 12.1187 6.67525 11.9039 6.71767C11.6891 6.76009 11.4918 6.86527 11.3368 7.01991C11.1818 7.17455 11.0762 7.37168 11.0333 7.58637C10.9904 7.80105 11.0122 8.02364 11.0959 8.22595C11.1795 8.42825 11.3213 8.60119 11.5033 8.72287C11.6853 8.84455 11.8993 8.9095 12.1183 8.9095C12.2637 8.90982 12.4077 8.88142 12.542 8.82593C12.6764 8.77044 12.7985 8.68895 12.9013 8.58615C13.0041 8.48335 13.0856 8.36125 13.1411 8.22688C13.1966 8.0925 13.225 7.94848 13.2247 7.8031V7.8055Z")]),w)]))},Dg=function(e){return{$:0,a:e}},qu=Hl,Ni=$(function(e,r){return o(qu,e,Dg(r))}),mr=function(e){return o(Ni,"click",$e(e))},Ic=He("target"),va=He("title"),Jo=$(function(e,r){if(r.$===-2)return wr;var n=r.a,a=r.b,t=r.c,i=r.d,c=r.e;return z(O,n,a,o(e,a,t),o(Jo,e,i),o(Jo,e,c))}),jg=Fo,ye=jg,Ag=function(e){return m(Si,P(function(r,n,a){return o(T,n,a)}),w,e)},Bg=$(function(e,r){return{$:3,a:e,b:r}}),Fg=$(function(e,r){return{$:2,a:e,b:r}}),Vg=$(function(e,r){return{$:0,a:e,b:r}}),qg=$(function(e,r){return{$:1,a:e,b:r}}),Tr=q(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Eu=S(Tr,0/255,0/255,0/255,1),Wu=Et,Ru=$(function(e,r){return o(Il,e,Wu(r))}),Eg=Ru("checked"),Qe=xf,Wg=P(function(e,r,n){return ce(o(Pa,e-cn(n),Ot(r)),n)}),La=mf,Nu=function(e){var r=function(n){return n<10?De(n):Ot(ku(87+n))};return e<16?r(e):ce(Nu(e/16|0),r(o(La,16,e)))},Rg=o(te,Nu,o(Wg,2,"0")),Gi=function(e){var r=e.a,n=e.b,a=e.c,t=e.d;return{aR:t,ci:a,co:n,cY:r}},Ng=function(e){var r=Gi(e),n=r.cY,a=r.co,t=r.ci;return o(on,"",o(T,"#",o(Y,o(te,Qe,Rg),g([n*255,a*255,t*255]))))},Oo=He("htmlFor"),Vr=$(function(e,r){if(r.$)return W;var n=r.a;return e(n)}),Lt=$(function(e,r){if(r.$){var a=r.a;return Me(a)}else{var n=r.a;return e(n)}}),Gg=P(function(e,r,n){var a=e(r);if(a.$)return n;var t=a.a;return o(T,t,n)}),_n=$(function(e,r){return m(Ir,Gg(e),w,r)}),Gu=q(function(e,r,n,a){return{ft:r,fD:e,fM:n,f8:a}}),Hg=$d,Ig=Uf,Ug=$(function(e,r){if(r.$)return Me(e);var n=r.a;return fe(n)}),Jg=ud,Og=function(e){return o(Jg,{eY:!1,fI:!1},e)},ea=function(e){if(e.b){var r=e.a;return e.b,Z(r)}else return W},Xg=$(function(e,r){if(r.$){var a=r.a;return Me(a)}else{var n=r.a;return fe(e(n))}}),Yg=function(e){return{$:2,a:e}},Zg=function(e){return{$:0,a:e}},Qg=function(e){return{$:1,a:e}},$o=$(function(e,r){return br(r)-br(e)}),vo=P(function(e,r,n){var a=br(n);return J(br(e),a)<1&&J(a,br(r))<1}),Kg=$(function(e,r){var n=function(t){return J(t,e)<0?fe(t):Me(Qg(r))},a=m(vo,"0","9",r)?fe(o($o,"0",r)):m(vo,"a","z",r)?fe(10+o($o,"a",r)):m(vo,"A","Z",r)?fe(10+o($o,"A",r)):Me(Zg(r));return o(Lt,n,a)}),Hu=$(function(e,r){var n=Zn(r);if(n.$===1)return fe(0);var a=n.a,t=a.a,i=a.b;return o(Lt,function(c){return o(Lt,function(l){return fe(c+l*e)},o(Hu,e,i))},o(Kg,e,t))}),ep=$(function(e,r){return 2<=e&&e<=36?o(Hu,e,No(r)):Me(Yg(e))}),rp=ep(16),np=P(function(e,r,n){return S(Tr,e,r,n,1)}),ap=q(function(e,r,n,a){return S(Tr,e,r,n,a)}),Zr=df,tp=$(function(e,r){var n=o(Zr,10,e);return Qe(r*n)/n}),op=Ef,ip=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Tu(n);if(a.b&&!a.b.b){var t=a.a;return Ig(g([t,t]))}else return n};return o(te,op,o(te,function(n){return o(ne,function(a){return m(Hg,1,a,n)},Og(e))},o(te,Vr(ea),o(te,ne(function(n){return n.f8}),o(te,ne(_n(hr)),o(te,Ug("Parsing hex regex failed"),Lt(function(n){var a=o(Y,o(te,r,o(te,rp,Xg(hm))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var t=a.a.a,i=a.b,c=i.a.a,l=i.b,u=l.a.a,v=l.b,f=v.a.a;return fe(S(ap,t/255,c/255,u/255,o(tp,2,f/255)))}else break e;else{var t=a.a.a,d=a.b,c=d.a.a,p=d.b,u=p.a.a;return fe(m(np,t/255,c/255,u/255))}else break e;return Me("Parsing ints from hex failed")})))))))}(),Sa=Hr("input"),Xo=Hr("label"),Yo=He("name"),Iu=$(function(e,r){return m(Ir,j,r,e)}),cp=o(Iu,g(["target","checked"]),re),lp=function(e){return o(Ni,"change",o(Ca,e,cp))},up=function(e){return y(e,!0)},$p=function(e){return{$:1,a:e}},vp=$(function(e,r){return o(qu,e,$p(r))}),fp=o(Iu,g(["target","value"]),Hn),Aa=function(e){return o(vp,"input",o(Ca,up,o(Ca,e,fp)))},Uu=He("max"),Ju=He("min"),Ou=function(e){return o(He,"step",e)},St=He("type"),Ba=He("value"),Uc=function(e){var r=e.cr,n=e.db,a=e.cH,t=e.cD,i=e.c3,c=e.cL;return o(F,w,g([o(Xo,g([Oo(r)]),g([o(F,g([k("relative w-full")]),g([o(F,g([k("inline-block")]),g([ye(r)])),o(F,g([k("inline-block float-right")]),g([ye(le(n))]))]))])),o(Sa,g([St("range"),o(oe,"width","100%"),wt(r),Yo(r),Ju(le(a)),Uu(le(t)),Ba(le(n)),Ou(le(i)),Aa(o(te,Wi,o(te,Ze(42),c)))]),w)]))},Xu=$(function(e,r){if(r.$)return e;var n=r.a;return n}),sp=$(function(e,r){switch(r.$){case 3:var c=r.a;return o(F,g([k("h-12 py-4")]),g([o(Xo,g([k("block"),Oo(e)]),g([o(Sa,g([k("relative bottom-[1px] align-middle mr-2"),St("checkbox"),wt(e),Yo(e),lp(Bg(e)),Eg(c)]),w),ye(e)]))]));case 0:var n=r.a,t=n.a,i=n.b,c=r.b;return Uc({cr:e,cD:i,cH:t,cL:Vg(e),c3:.01*(i-t),db:c});case 1:var a=r.a,t=a.a,i=a.b,c=r.b;return Uc({cr:e,cD:i,cH:t,cL:o(te,Qe,qg(e)),c3:1,db:c});default:var c=r.a;return o(F,w,g([o(F,g([o(oe,"margin-bottom","6px")]),g([o(Xo,g([Oo(e)]),g([ye(e)]))])),o(Sa,g([St("color"),o(oe,"width","100%"),o(oe,"height","26px"),o(oe,"padding","0px"),wt(e),Yo(e),Aa(function(l){return o(Fg,e,o(Xu,Eu,ip(l)))}),Ba(Ng(c))]),w)]))}}),dp=function(e){return o(F,g([k("p-4 border-y-[0.5px] border-white20")]),g([o(F,g([k("text-lg pb-2")]),g([ye(e.fJ)])),o(F,g([k("pl-2 pr-2")]),Ag(o(Jo,sp,e.aC)))]))},mp=function(e){return o(F,g([k("text-xs text-white60")]),o(Y,dp,e))},gp=function(e){return o(F,g([k("absolute left-[104px] bottom-2 text-sm text-white40")]),g([ye("clock: "+o(Au,3,Qn(e).e0))]))},pp=function(e){e.a;var r=e.b.W;return o(ne,function(n){return Qe(60/(Qn(e).e0-n))},o(ne,o(te,Pm,function(n){return n.e0}),ea(o(qi,59,r))))},bp=function(e){return o(F,g([k("absolute bottom-2 right-4 text-sm text-white40")]),function(){var r=pp(e);if(r.$===1)return g([ye("... Fps")]);var n=r.a;return g([ye(De(n)+" Fps")])}())},hp=function(e){return{$:0,a:e}},_p=function(e){var r=e.b.W;return Cr(r)},yp=function(e){var r=e.b.W;e.b.C;var n=e.b.ae;return Cr(r)+1+Cr(n)},Cp=function(e){return o(Sa,g([k("absolute w-full"),St("range"),Ju(De(0)),Uu(De(yp(e)-1)),Ba(De(_p(e))),Ou(De(1)),Aa(o(te,Wi,o(te,Ze(42),o(te,Qe,hp))))]),w)},Jc={$:1},Oc={$:3},Xc={$:2},xt=function(e){return!e.b},Yu=Ru("disabled"),fo=P(function(e,r,n){return o(Qr,g([k("px-2 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),k(n),Yu(e),mr(r)]),g([ye("REC")]))}),so=P(function(e,r,n){return o(Qr,g([k("absolute left-[60px] mx-1 px-1 bg-black60 hover:bg-black80 active:bg-black disabled:opacity-30 disabled:bg-black60"),Yu(e),mr(n)]),g([o(F,g([k("w-4 h-6 text-white60 hover:text-white80")]),g([r]))]))}),Pp=function(e){var r=e.a,n=e.b.ae;return o(F,g([k("py-1")]),g([function(){switch(r.$){case 0:return m(fo,!1,Jc,"text-red-500 font-bold");case 1:return m(fo,!1,Xc,"text-white60 hover:text-white80 font-bold");default:return m(fo,!0,Xc,"text-white60 hover:text-white80 font-bold")}}(),function(){switch(r.$){case 0:return m(so,xt(n),lr.fT,Oc);case 1:return m(so,xt(n),lr.fT,Oc);default:return m(so,!1,lr.fS,Jc)}}()]))},wp=function(e){return o(F,g([k("w-full h-full p-4 border-[0.5px] border-white20 bg-black20")]),g([Cp(e),Pp(e),bp(e),gp(e)]))},Lp=function(e){var r=e.a;return ve(r,Jt)},Sp=$(function(e,r){var n=Lp(r.H)?o(F,w,w):o(F,g([k("absolute pointer-events-none w-8 h-8"),o(oe,"left",le(e.em.gq+.5*e.aL.go)+"px"),o(oe,"top",le(-e.em.gu+.5*e.aL.fo)+"px")]),g([o(F,g([k(e.em.fw?"text-black80":"text-black40")]),g([lr.em]))]));return o(F,w,g([n]))}),xp=$(function(e,r){var n=o(Qr,g([k(r.aV?"text-black20 hover:text-black80":"text-white40 hover:text-white80"),mr(Sg),va("Distraction Free Mode")]),g([lr.gy])),a=40,t=260,i=o(F,g([k("absolute w-8 bottom-12")]),g([o(Gc,g([k("text-twitterBlue40 hover:text-twitterBlue"),Hc("https://twitter.com/AzizErkalSelman"),Ic("_blank")]),g([lr.gh]))])),c=80,l=o(F,g([k("absolute w-8 bottom-2")]),g([o(Gc,g([k("text-githubCat40 hover:text-githubCat"),Hc("https://github.com/erkal/elm-3d-playground-exploration"),Ic("_blank")]),g([lr.fi]))])),u=e.aL.go>640?M(e.aL.fo,a+t,e.aL.go-(a+t)):M(e.aL.fo-c,a,e.aL.go-a),v=u.a,f=u.b,d=u.c;return r.aV?o(F,g([k("fixed w-10 h-10 p-1")]),g([n])):o(F,w,g([o(F,g([k("absolute h-full p-1 border-r-[0.5px] border-white20 bg-black80"),o(oe,"width",le(a)+"px")]),g([n,i,l])),o(F,g([k("absolute overflow-y-auto left-10 bg-black20 border-x-[0.5px] border-white20"),o(oe,"width",le(t)+"px"),o(oe,"height",le(v)+"px")]),g([o(wa,xg,mp(Qn(r.H).e1))])),o(F,g([k("absolute bottom-0"),o(oe,"left",le(f)+"px"),o(oe,"height",le(c)+"px"),o(oe,"width",le(d)+"px")]),g([o(wa,zg,wp(r.H))])),o(Sp,e,r)]))}),zp=P(function(e,r,n){var a=Pg(n.H),t=Qn(n.H);return o(F,g([k("bg-black40"),k("select-none"),k("antialiased"),k("font-mono"),o(oe,"width",le(t.aL.go)+"px"),o(oe,"height",le(t.aL.fo)+"px")]),g([o(F,g([k("fixed")]),g([o(wa,Nt(Cg),o(e,t,a))])),o(F,g([wt("gui")]),g([o(xp,t,n),o(wa,yg,o(r,t,a))]))]))}),Tp=or(function(e,r,n,a,t,i){var c=$(function(u,v){return y(S(pg,r,i,u,v),Nc)}),l=function(u){var v=o(bu,n,u.fv);return y({aV:u.fv.aL.go<500,H:o(bg,v,a)},Nc)};return Em({fu:l,f9:Nt(_g(Sm)),gi:c,gl:o(zp,e,t)})}),Zo={$:0},qr=$(function(e,r){return{gq:e,gu:r}}),kp=$(function(e,r){return o(ne,function(n){if(n.$===3){var a=n.a;return a}else return!1},o(Kn,e,r.aC))}),Mp=$(function(e,r){return o(Ze,!1,ea(o(_n,kp(e),r)))}),Dp=$(function(e,r){return o(Mp,e,r.e1)}),ra=Dp,jp=$(function(e,r){return o(ne,function(n){if(n.$)return 0;var a=n.b;return a},o(Kn,e,r.aC))}),Ap=$(function(e,r){return o(Ze,0,ea(o(_n,jp(e),r)))}),Bp=$(function(e,r){return o(Ap,e,r.e1)}),Dr=Bp,Hi=function(e){return e},Ge=function(e){return e},zt=function(e){var r=e;return-r},Fp=$(function(e,r){var n=e,a=r;return{gq:n.gu*a.dg-n.dg*a.gu,gu:n.dg*a.gq-n.gq*a.dg,dg:n.gq*a.gu-n.gu*a.gq}}),Zu=function(e){var r=e;return r.de},Qu=function(e){var r=e;return r.df},Vp=function(e){return o(Fp,Zu(e),Qu(e))},na=function(e){var r=e;return r.cM},Lr=pf,Sr=bf,mo=P(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Lr(c),u=Sr(c),v=a.e8,f=v,d=f.gq*u,p=l*d,s=d*d,b=f.gu*u,h=l*b,C=d*b,L=b*b,_=1-2*(s+L),x=f.dg*u,D=l*x,H=2*(C-D),N=2*(C+D),R=d*x,I=2*(R+h),U=2*(R-h),E=b*x,Q=2*(E-p),K=2*(E+p),be=x*x,_e=1-2*(L+be),de=1-2*(s+be);return{gq:_e*i.gq+H*i.gu+I*i.dg,gu:N*i.gq+de*i.gu+Q*i.dg,dg:U*i.gq+K*i.gu+_*i.dg}}),qp=P(function(e,r,n){var a=e,t=r,i=n,c=.5*t,l=Lr(c),u=Sr(c),v=a.cM,f=v,d=i.gq-f.gq,p=i.gu-f.gu,s=i.dg-f.dg,b=a.e8,h=b,C=h.gq*u,L=l*C,_=C*C,x=h.gu*u,D=l*x,H=C*x,N=x*x,R=1-2*(_+N),I=h.dg*u,U=l*I,E=2*(H-U),Q=2*(H+U),K=C*I,be=2*(K+D),_e=2*(K-D),de=x*I,Ce=2*(de-L),Ie=2*(de+L),Ve=I*I,Jr=1-2*(N+Ve),Or=1-2*(_+Ve);return{gq:f.gq+Jr*d+E*p+be*s,gu:f.gu+Q*d+Or*p+Ce*s,dg:f.dg+_e*d+Ie*p+R*s}}),aa=function(e){return e},wn=function(e){var r=e;return r.de},Ln=function(e){var r=e;return r.df},Sn=function(e){var r=e;return r.dh},Ep=P(function(e,r,n){return aa({cM:m(qp,e,r,na(n)),de:m(mo,e,r,wn(n)),df:m(mo,e,r,Ln(n)),dh:m(mo,e,r,Sn(n))})}),Yc=P(function(e,r,n){return m(Ep,e(n),r,n)}),Xt=function(e){var r=e;return r.e8},Ku=$(function(e,r){var n=e,a=r;return{gq:a.gq+n.gq,gu:a.gu+n.gu,dg:a.dg+n.dg}}),Wp=$(function(e,r){return aa({cM:o(Ku,e,na(r)),de:wn(r),df:Ln(r),dh:Sn(r)})}),Rp=$(function(e,r){var n=e,a=r;return{gq:n*a.gq,gu:n*a.gu,dg:n*a.dg}}),Np=P(function(e,r,n){return o(Wp,o(Rp,r,e),n)}),Gp=P(function(e,r,n){return m(Np,Xt(e(n)),r,n)}),Kr=$(function(e,r){return{e8:r,cM:e}}),Hp=function(e){var r=e;return o(Kr,r.cM,r.de)},Ip=function(e){var r=e;return o(Kr,r.cM,r.df)},Up=function(e){var r=e;return o(Kr,r.cM,r.dh)},e$=function(e){var r=aa({cM:e.a$,de:Qu(e.dC),df:Vp(e.dC),dh:Zu(e.dC)}),n=m(Gp,Up,e.cn,m(Yc,Hp,zt(e.bP),m(Yc,Ip,e.bI,r)));return n},Jp=function(e){return{$:1,a:e}},ze=function(e){var r=e;return ee(r)},Op=function(e){return{cX:Jp(ze(e.eM)),dc:e.dc}},Xe=function(e){return e},Ur={gq:0,gu:0,dg:0},r$=hr,$n=function(e){return e},Xp=$n({gq:1,gu:0,dg:0}),Ii=Xp,n$=$n({gq:0,gu:0,dg:1}),Yt=n$,a$=r$({cM:Ur,de:Yt,df:Ii}),Yp=function(e){var r=e.a$,n=e.bI,a=e.bP,t=e.eM;return Op({dc:e$({bI:Xe(n),cn:Ge(1e3),bP:Xe(a),a$:Hi(r),dC:a$}),eM:Ge(t)})},Zp=yf,Qp=function(e){return{$:0,a:e}},ct=function(e){var r=e;return .5*r},Kp=hf,e0=function(e){var r=e;return Kp(r)},r0=function(e){var r=ct(ze(e.eK)),n=e0(r);return{cX:Qp(n),dc:e.dc}},n0=function(e){var r=e.a$,n=e.bI,a=e.bP,t=e.cn;return r0({eK:Xe(2*Zp(.5)),dc:e$({bI:Xe(n),cn:Ge(t),bP:Xe(a),a$:Hi(r),dC:a$})})},t$=$(function(e,r){return o(ra,"orthographic",e)?Yp({bI:o(Dr,"camera azimuth",e),bP:o(Dr,"camera elevation",e),a$:r,eM:o(Dr,"camera distance",e)}):n0({bI:o(Dr,"camera azimuth",e),cn:o(Dr,"camera distance",e),bP:o(Dr,"camera elevation",e),a$:r})}),a0=he(function(e,r,n,a,t){return{ce:e,dk:t,ap:n,cj:a,fV:r}}),t0=or(function(e,r,n,a,t,i){return{aT:e,e9:n,f1:t,ew:a,gf:i,gk:r}}),o0=$(function(e,r){return{bL:e,fX:r}}),i0=Gt(_m),me=P(function(e,r,n){return o(i0,o(j,e,r),n)}),Fa=m(me,"y",ae,m(me,"x",ae,$e(qr))),c0=m(me,"radius",ae,m(me,"center",Fa,$e(o0))),Zc=ts,Zt=$(function(e,r){return y(e,r)}),l0=m(me,"trail",_r(Fa),m(me,"rotation",ae,m(me,"rotationSpeed",ae,m(me,"directionFromXAxis",ae,m(me,"velocity",m(Gt,Zt,o(Zc,0,ae),o(Zc,1,ae)),m(me,"circle",c0,$e(t0))))))),u0=$(function(e,r){return{bL:e,dI:r}}),$0=m(me,"isCollected",re,m(me,"center",Fa,$e(u0))),o$=Zf,v0=ns,f0=is,s0=function(e){return f0(g([v0(W),o(Ca,Z,e)]))},d0=P(function(e,r,n){return{dl:n,cp:e,en:r}}),m0=m(me,"bounciness",ae,m(me,"polygon",_r(Fa),m(me,"id",o$,$e(d0)))),g0=m(me,"ballBouncedInLastTickToPolygonWithId",s0(o$),m(me,"collisionPointsHistory",_r(Fa),m(me,"coins",_r($0),m(me,"polygons",_r(m0),m(me,"ball",l0,$e(a0)))))),jr=Et,xn=function(e){return m(Te,$(function(r,n){var a=r.a,t=r.b;return m(ds,a,t,n)}),ss(),e)},Va=function(e){return xn(g([y("x",jr(e.gq)),y("y",jr(e.gu))]))},p0=function(e){return xn(g([y("center",Va(e.bL)),y("radius",jr(e.fX))]))},vn=$(function(e,r){return m(Te,ms(e),fs(),r)}),b0=function(e){return xn(g([y("circle",p0(e.aT)),y("velocity",function(r){var n=r.a,a=r.b;return o(vn,hr,g([jr(n),jr(a)]))}(e.gk)),y("directionFromXAxis",jr(e.e9)),y("rotationSpeed",jr(e.ew)),y("rotation",jr(e.f1)),y("trail",o(vn,Va,e.gf))]))},h0=function(e){return xn(g([y("center",Va(e.bL)),y("isCollected",Wu(e.dI))]))},i$=Et,_0=function(e){return xn(g([y("id",i$(e.cp)),y("polygon",o(vn,Va,e.en)),y("bounciness",jr(e.dl))]))},y0=gs,C0=function(e){return xn(g([y("ball",b0(e.ce)),y("polygons",o(vn,_0,e.fV)),y("coins",o(vn,h0,e.ap)),y("collisionPointsHistory",o(vn,Va,e.cj)),y("ballBouncedInLastTickToPolygonWithId",o(te,ne(i$),Ze(y0))(e.dk))]))},c$=$(function(e,r){return{q:r,l:w,C:e}}),P0=q(function(e,r,n,a){return{dw:e,eh:r,U:o(c$,n,a),c6:"",ca:""}}),w0=function(e){if(e.b){var r=e.a,n=e.b;return Z(m(Te,Oe,r,n))}else return W},l$=$(function(e,r){var n={dl:1,cp:1+o(Ze,-1,w0(o(Y,function(a){return a.cp},r.fV))),en:e};return V(r,{fV:o(T,n,r.fV)})}),L0={aT:{bL:o(qr,0,0),fX:.5},e9:0,f1:0,ew:0,gf:w,gk:y(0,0)},S0=o(l$,g([o(qr,6,0),o(qr,6,6),o(qr,0,6)]),{ce:L0,dk:W,ap:w,cj:w,fV:w}),x0=function(e){return{ao:o(t$,e,{gq:0,gu:0,dg:0}),aE:!0,I:S(P0,C0,g0,{fJ:"level 1",fR:S0},w),aI:o(qr,0,0),aj:Zo}},ia=$(function(e,r){return y(e,Lu(r))}),z0=$(function(e,r){return y(e,Su(r))}),T0=P(function(e,r,n){return{aC:n,fx:r,fJ:e}}),Qt=wr,k0=function(e){return m(Te,$(function(r,n){var a=r.a,t=r.b;return m(un,a,t,n)}),Qt,e)},M0=P(function(e,r,n){return m(T0,e,r,k0(n))}),Oa=M0,jn=P(function(e,r,n){var a=r.a,t=r.b;return y(e,o(xu,y(a,t),n))}),Er=gf,D0=S(Tr,255/255,255/255,255/255,1),j0=g([m(Oa,"View Options",!0,g([o(ia,"draw speed vector",!1),o(ia,"draw ball trail",!0),o(ia,"orthographic",!0),o(ia,"unlit",!0)])),m(Oa,"Camera",!0,g([m(jn,"camera distance",y(3,60),40),m(jn,"camera azimuth",y(0,2*Er),0),m(jn,"camera elevation",y(-Er/2,Er/2),0)])),m(Oa,"Physics Parameters",!0,g([o(ia,"fix time steps",!0),m(jn,"gas force",y(20,60),40),m(jn,"friction",y(0,1),.4),m(jn,"direction change speed",y(1,5),3)])),m(Oa,"Color",!0,g([o(z0,"floor color",D0)]))]),u$=function(e){return{$:1,a:e}},qa=$(function(e,r){var n=e.a,a=e.b,t=r.a,i=r.b;return n*t+a*i}),ur=zf,Kt=function(e){return ur(o(qa,e,e))},vr=$(function(e,r){return Kt(y(e.gq-r.gq,e.gu-r.gu))}),A0=$(function(e,r){var n=y(e.dL.eA,r.aj);if(n.a&&n.b.$===1){var a=n.b.a,t=r.aI;return V(r,{aj:u$(function(){var i=ie(a);if(i.b){var c=i.a;return o(vr,c,t)>2?ce(a,g([t])):a}else return g([t])}())})}else return r}),qe=P(function(e,r,n){return{gq:e,gu:r,dg:n}}),Ui=function(e){var r=e;return r.C},Ea=function(e){var r=e;return Ui(r.U).fR},B0=$(function(e,r){var n=Ea(r.I).ce;return V(r,{ao:o(t$,e,m(qe,n.aT.bL.gq,n.aT.bL.gu,0))})}),$$=$(function(e,r){var n=r;return V(n,{C:e(n.C)})}),zn=$(function(e,r){var n=r;return V(n,{U:e(n.U)})}),v$=function(e){return zn($$(function(r){return V(r,{fR:e(r.fR)})}))},F0=function(e){var r=function(n){return!n.dI&&o(vr,n.bL,e.ce.aT.bL)<1?V(n,{dI:!0}):n};return V(e,{ap:o(Y,r,e.ap)})},f$=$(function(e,r){var n=e.a,a=e.b,t=r.a,i=r.b;return y(n+t,a+i)}),xr=$(function(e,r){var n=r.a,a=r.b;return y(e*n,e*a)}),en=$(function(e,r){return o(xr,e/Kt(r),r)}),V0=$(function(e,r){return o(en,o(qa,e,r),e)}),q0=$(function(e,r){var n=e.a,a=e.b,t=r.a,i=r.b;return y(t-n,i-a)}),E0=$(function(e,r){var n=r.ce,a=o(V0,e.b$,n.gk),t=o(q0,a,n.gk),i=o(f$,t,o(xr,e.b4.dl,o(xr,-1,a)));return V(r,{ce:V(n,{gk:i})})}),W0=$(function(e,r){return r.b?m(Ir,T,r,e):e}),Be=function(e){return m(Ir,W0,w,e)},Nr=function(e){return e*Er/180},Ji=function(e){var r=function(){if(e.b){var n=e.a,a=e.b;return ce(a,g([n]))}else return w}();return m(Wt,Zt,e,r)},Wa=$(function(e,r){var n=r.a,a=r.b;return y(n*Lr(e)-a*Sr(e),n*Sr(e)+a*Lr(e))}),Fe=$(function(e,r){var n=e.a,a=e.b;return V(r,{gq:r.gq+n,gu:r.gu+a})}),we=$(function(e,r){return y(e.gq-r.gq,e.gu-r.gu)}),R0=$(function(e,r){var n=r.a,a=r.b,t=o(en,e,o(Wa,-Nr(90),o(we,a,n)));return y(o(Fe,t,n),o(Fe,t,a))}),N0=$(function(e,r){return{e3:o(Y,function(n){return{bL:n,fX:e}},r),f4:o(Y,R0(e),Ji(r))}}),fr=$(function(e,r){var n=e.a,a=e.b,t=r.a,i=r.b;return n*i-a*t}),G0=$(function(e,r){var n=y(y(e.ah,e.e8),y(r.ah,r.e8)),a=n.a,t=a.a,i=a.b,c=n.b,l=c.a,u=c.b,v=o(fr,o(we,l,t),i),f=o(fr,i,u),d=v/f,p=o(fr,o(we,l,t),u),s=p/f;return!v&&!f?W:f&&0<=s&&0<=d?Z(o(Fe,o(xr,s,i),t)):W}),s$=$(function(e,r){r.fX;var n=r.bL,a=o(fr,e.e8,o(we,n,e.ah))<0?1:-1;return o(G0,{e8:o(Wa,a*Nr(90),e.e8),ah:n},e)}),sr=function(e){var r=e.a,n=e.b;return y(n.gq-r.gq,n.gu-r.gu)},d$=function(e){var r=e.a,n=e.b;return{e8:sr(y(r,n)),ah:r}},H0=$(function(e,r){var n=e.a,a=e.b,t=r.fX,i=o(s$,d$(e),r);if(i.$===1)return W;var c=i.a,l=o(vr,r.bL,c);if(J(l,t)<1){var u=o(Fe,o(en,-ur(t*t-l*l),sr(e)),c),v=o(qa,o(we,a,n),o(we,u,n))>=0&&J(o(vr,n,u),o(vr,n,a))<1;return v?Z(u):W}else return W}),m$=en(1),I0=P(function(e,r,n){var a=y(e,o(Fe,r,e)),t=o(H0,a,n);return o(ne,function(i){return{b$:m$(o(we,i,n.bL)),cb:o(we,i,e)}},t)}),U0=$(function(e,r){var n=e.a,a=r.a,t=y(y(n,sr(e)),y(a,sr(r))),i=t.a,c=i.a,l=i.b,u=t.b,v=u.a,f=u.b,d=o(fr,o(we,v,c),l),p=o(fr,l,f),s=d/p,b=o(fr,o(we,v,c),f),h=b/p;return!d&&!p?W:p&&0<=h&&h<=1&&0<=s&&s<=1?Z(o(Fe,o(xr,h,l),c)):W}),g$=function(e){return m$(o(Wa,-Nr(90),sr(e)))},J0=P(function(e,r,n){var a=y(e,o(Fe,r,e)),t=o(U0,a,n);return o(ne,function(i){return{b$:g$(n),cb:o(we,i,e)}},t)}),p$=ff,Qc=$(function(e,r){return{bM:e,b$:r.b$,cb:r.cb}}),O0=P(function(e,r,n){var a=o(N0,e.fX,n),t=a.f4,i=a.e3,c=o(_n,function(u){return o(ne,Qc(u.bL),m(I0,e.bL,r,u))},i),l=o(_n,function(u){return o(ne,function(v){return o(Qc,o(Fe,o(en,e.fX,o(Wa,Nr(90),sr(u))),o(Fe,v.cb,e.bL)),v)},m(J0,e.bL,r,u))},t);return ea(o(p$,o(te,function(u){return u.cb},Kt),Be(g([c,l]))))}),X0=$(function(e,r){return{bM:r.bM,b$:r.b$,b4:e,cb:r.cb}}),Y0=$(function(e,r){var n=o(xr,e.dt,r.ce.gk),a=function(c){return o(ne,X0(c),m(O0,r.ce.aT,n,c.en))},t=ea(o(p$,o(te,function(c){return c.cb},Kt),o(_n,a,r.fV)));if(t.$===1)return r;var i=t.a;return o(E0,i,V(r,{dk:Z(i.b4.cp),cj:o(Ei,15,o(T,i.bM,r.cj))}))}),b$=$(function(e,r){return Be(o(Y,e,r))}),eo=$(function(e,r){return m(Ir,$(function(n,a){return e(n)?o(T,n,a):a}),w,r)}),Kc=$(function(e,r){var n=e.a,a=e.b,t=r.fX,i=o(s$,d$(e),r);if(i.$===1)return w;var c=i.a,l=o(vr,r.bL,c);if(J(l,t)<1){var u=ur(t*t-l*l),v=o(Fe,o(en,u,sr(e)),c),f=function(p){return o(qa,o(we,a,n),o(we,p,n))>=0&&J(o(vr,n,p),o(vr,n,a))<1},d=o(Fe,o(en,-u,sr(e)),c);return o(eo,f,ve(l,t)?g([d]):g([d,v]))}else return w}),Z0=$(function(e,r){var n=e.a,a=e.b;return J(o(vr,n,r.bL),r.fX)<0&&J(o(vr,a,r.bL),r.fX)>-1?o(Kc,y(a,n),r):o(Kc,y(n,a),r)}),Q0=$(function(e,r){var n=r.a,a=y(y(e.ah,e.e8),y(n,sr(r))),t=a.a,i=t.a,c=t.b,l=a.b,u=l.a,v=l.b,f=o(fr,o(we,u,i),c),d=o(fr,c,v),p=f/d,s=o(fr,o(we,u,i),v),b=s/d;return!f&&!d?W:d&&b>=0&&p>=0&&p<=1?Z(o(Fe,o(xr,b,c),i)):W}),K0=$(function(e,r){var n=e.a;r.fX;var a=r.bL,t=o(fr,sr(e),o(we,a,n))<0?1:-1;return o(Q0,{e8:o(Wa,t*Nr(90),sr(e)),ah:a},e)}),e1=function(e){var r=e.ce,n=$(function(i,c){var l=o(K0,i,c);if(l.$)return c;var u=l.a;return V(c,{bL:o(Fe,o(en,c.fX,g$(i)),o(Fe,o(we,u,c.bL),c.bL))})}),a=o(eo,function(i){return!xt(o(Z0,i,r.aT))},o(b$,o(te,function(i){return i.en},Ji),e.fV)),t=m(Te,n,r.aT,a);return V(e,{ce:V(r,{aT:t})})},r1=$(function(e,r){return V(r,{ce:e(r.ce)})}),n1=$(function(e,r){return V(r,{gk:o(xr,1-e.dt*5*o(Dr,"friction",e),r.gk)})}),Oi=P(function(e,r,n){return J(n,e)<0?e:J(n,r)>0?r:n}),a1=function(e){var r=e.a,n=e.b;return y(r*Lr(n),r*Sr(n))},t1=function(e){return(e.f_?1:0)-(e.fz?1:0)},o1=t1,i1=function(e){return(e.eI?1:0)-(e.ds?1:0)},go=i1,c1=$(function(e,r){var n=o(Dr,"gas force",e),a=a1(y(1,r.e9)),t=f$(o(xr,e.dt*n*go(e.dL),a));return V(r,{e9:r.e9-o1(e.dL)*o(Dr,"direction change speed",e)*e.dt,ew:go(e.dL)?m(Oi,-14,14,r.ew+e.dt*1e3*go(e.dL)):o(qa,r.gk,a),gk:t(r.gk)})}),l1=$(function(e,r){var n=r.aT;return V(r,{aT:V(n,{bL:o(Fe,o(xr,e.dt,r.gk),r.aT.bL)})})}),u1=$(function(e,r){return V(r,{f1:r.f1+e.dt*r.ew})}),$1=function(e){return V(e,{gf:function(){var r=e.gf;if(r.b){var n=r.a;return o(vr,n,e.aT.bL)>1?o(T,e.aT.bL,e.gf):e.gf}else return g([e.aT.bL])}()})},v1=$(function(e,r){return $1(o(l1,e,o(u1,e,o(n1,e,o(c1,e,r)))))}),f1=$(function(e,r){return F0(e1(o(r1,v1(e),o(Y0,e,r))))}),s1=$(function(e,r){var n=o(f1,e,Ea(r.I));return V(r,{I:o(v$,Nt(n),r.I)})}),fa=function(e){return Xe(Er*(e/180))},Xa=function(e){return e},fn=function(e){var r=e;return r},d1=$(function(e,r){var n=e,a=r;return a.gq*n.gq+a.gu*n.gu+a.dg*n.dg}),Pe=$(function(e,r){var n=r;return e*n}),Xi=function(e){var r=e;return r.cM},m1=$(function(e,r){var n=e,a=r,t=n.cM,i=t,c=n.fL,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu+(a.dg-i.dg)*l.dg}),g1=P(function(e,r,n){var a=e,t=r,i=n;return{gq:i.gq+t*a.gq,gu:i.gu+t*a.gu,dg:i.dg+t*a.dg}}),p1=$(function(e,r){var n=Xt(r),a=e,t=a.fL,i=o(d1,t,n);if(i){var c=Xi(r),l=o(m1,e,c),u=o(Pe,-1/i,l);return Z(m(g1,n,u,c))}else return W}),b1=$(function(e,r){return{gq:e,gu:r}}),el=$(function(e,r){var n=e,a=r;return n*a}),h1=function(e){var r=e;return r},rl=function(e){var r=e;return h1(r.eT)},_1=function(e){var r=e;return r.aU},y1=function(e){var r=e,n=o(Oe,ee(r.gq),o(Oe,ee(r.gu),ee(r.dg)));if(n){var a=r.dg/n,t=r.gu/n,i=r.gq/n,c=ur(i*i+t*t+a*a);return Z({gq:i/c,gu:t/c,dg:a/c})}else return W},h$=$(function(e,r){var n=r;return n/e}),Qo=function(e){var r=e;return na(r)},_$=$n({gq:0,gu:0,dg:-1}),C1=$(function(e,r){var n=e,a=r;return a/n}),P1=$(function(e,r){var n=e,a=r,t=n.dh,i=t,c=n.df,l=c,u=n.de,v=u;return{gq:v.gq*a.gq+l.gq*a.gu+i.gq*a.dg,gu:v.gu*a.gq+l.gu*a.gu+i.gu*a.dg,dg:v.dg*a.gq+l.dg*a.gu+i.dg*a.dg}}),Tt=function(e){var r=e;return{gq:-r.gq,gu:-r.gu,dg:-r.dg}},Ko=function(e){var r=e;return Tt(Sn(r))},w1=$(function(e,r){var n=e,a=r,t=n.cM,i=t,c=n.de,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),Yi=P(function(e,r,n){var a=e,t=r,i=n;return{gq:a,gu:t,dg:i}}),L1=q(function(e,r,n,a){var t=e,i=r,c=n,l=a,u=t.cM,v=u,f=t.dh,d=f,p=t.df,s=p,b=t.de,h=b;return{gq:v.gq+i*h.gq+c*s.gq+l*d.gq,gu:v.gu+i*h.gu+c*s.gu+l*d.gu,dg:v.dg+i*h.dg+c*s.dg+l*d.dg}}),S1=$(function(e,r){var n=e,a=r,t=n.cM,i=t,c=n.df,l=c;return(a.gq-i.gq)*l.gq+(a.gu-i.gu)*l.gu}),se=0,x1=P(function(e,r,n){var a=e,t=o(S1,rl(r),n),i=o(w1,rl(r),n),c=a.dc,l=c,u=_1(r);u.a;var v=u.b,f=a.cX;if(f.$){var b=f.a,h=o(C1,v,b),C=S(L1,l,o(el,h,i),o(el,h,t),se);return o(Kr,C,Ko(a.dc))}else{var d=f.a,p=zt(o(h$,d,o(Pe,.5,v))),s=o(P1,l,o(Ze,_$,y1(m(Yi,i,t,p))));return o(Kr,Qo(a.dc),s)}}),ei=function(e){var r=e;return{gq:Lr(r),gu:Sr(r)}},z1=function(e){var r=e;return{gq:-r.gu,gu:r.gq}},T1=function(e){return e},k1=$(function(e,r){return T1({cM:r,de:e,df:z1(e)})}),M1=$(function(e,r){return o(k1,ei(e),r)}),D1=P(function(e,r,n){var a=e.a,t=e.b;return{eT:o(M1,r,n),aU:y(ze(a),ze(t))}}),lt=function(e){var r=e;return r.gq},j1=$(function(e,r){var n=e,a=r;return{gq:n,gu:a}}),ut=function(e){var r=e;return r.gu},$t=function(e){var r=e;return r.dg},A1=q(function(e,r,n,a){var t=n.gq,i=n.gu,c=function(v){return m(qe,fn(lt(v)),fn(ut(v)),fn($t(v)))},l=m(D1,y(Xa(r.go),Xa(r.fo)),fa(0),o(b1,0,0)),u=o(j1,Xa(t),Xa(i));return o(ne,c,o(p1,a,m(x1,e,l,u)))}),B1=$(function(e,r){return{fL:e,cM:r}}),F1=$(function(e,r){var n=r;return o(B1,n.fL,o(Ku,e,n.cM))}),V1=$(function(e,r){return{fL:r,cM:e}}),q1=o(V1,Ur,Yt),E1=q(function(e,r,n,a){return S(A1,r,n,a,o(F1,m(Yi,Ge(0),Ge(0),Ge(e)),q1))}),W1=E1(0),R1=$(function(e,r){return V(r,{aI:o(Ze,r.aI,o(ne,function(n){return o(qr,n.gq,n.gu)},m(W1,r.ao,e.aL,e.em)))})}),N1=$(function(e,r){var n=o(ra,"fix time steps",e)?V(e,{dt:.016}):e,a=r.aE?A0(n):hr;return o(B0,n,o(s1,n,o(R1,n,a(r))))}),G1=$(function(e,r){var n=r;return V(n,{l:o(T,n.C,n.l),C:e})}),H1=$(function(e,r){var n=r;if(e.$)return n;var a=Ui(n.U);return o(zn,G1(V(a,{fJ:a.fJ+" copy"})),n)}),I1=$(function(e,r){var n=r;if(e.$===4){var a=e.a;return o(zn,$$(function(t){return V(t,{fJ:a})}),n)}else return n}),U1=$(function(e,r){return{fJ:e,fR:r}}),J1=us,O1=Yf,X1=$(function(e,r){var n=r;return V(n,{U:function(){var a=m(Gt,U1,o(j,"name",Hn),o(j,"page",n.eh));return o(Xu,n.U,o(J1,o(B,function(t){if(t.b){var i=t.a,c=t.b;return $e(o(c$,i,c))}else return O1("List of pages is empty")},_r(a)),e))}()})}),Zi=function(e){var r=e;return ce(ie(r.l),ce(g([r.C]),r.q))},Y1=$(function(e,r){var n=r;switch(e.$){case 6:return V(n,{c6:o(fu,2,o(vn,function(t){return xn(g([y("name",Fu(t.fJ)),y("page",n.dw(t.fR))]))},Zi(n.U)))});case 7:return o(X1,n.ca,n);case 8:var a=e.a;return V(n,{ca:a});default:return n}}),Z1=function(e){var r=e,n=r.q;if(n.b){var a=n.a,t=n.b;return V(r,{q:t,l:o(T,a,r.l)})}else return V(r,{q:ie(r.l),l:w})},Q1=$(function(e,r){var n=r;return e.$===2?o(zn,Z1,n):n}),K1=function(e){var r=e,n=r.l;if(n.b){var a=n.a,t=n.b;return V(r,{q:o(T,a,r.q),l:t})}else return V(r,{q:w,l:ie(r.q)})},e3=$(function(e,r){var n=r;return e.$===3?o(zn,K1,n):n}),r3=function(e){var r=e,n=r.l;if(n.b){var a=n.a,t=n.b;return V(r,{l:t,C:a})}else{var i=r.q;if(i.b){var a=i.a,t=i.b;return V(r,{q:t,C:a})}else return r}},n3=$(function(e,r){var n=r;return e.$===1?o(zn,r3,n):n}),a3=$(function(e,r){var n=r,a=Zi(n),t=o(La,Cr(a),e),i=o(qi,t,a);if(i.b){var c=i.a,l=i.b;return{q:l,l:ie(o(Ei,t,a)),C:c}}else return n}),t3=$(function(e,r){var n=r;if(e.$===5){var a=e.a;return o(zn,a3(a),n)}else return n}),o3=$(function(e,r){return o(Y1,e,o(I1,e,o(t3,e,o(e3,e,o(Q1,e,o(n3,e,o(H1,e,r)))))))}),i3=P(function(e,r,n){switch(r.$){case 0:return V(n,{aE:!n.aE,aj:Zo});case 1:return V(n,{aj:u$(w)});case 2:var a=r.a;return V(n,{I:o(v$,l$(a),n.I),aj:Zo});default:var t=r.a;return V(n,{I:o(o3,t,n.I)})}}),ro=function(e){return e},c3=function(e){var r=e;return r},l3=function(e){var r=m(Oi,1667,25e3,c3(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return ro({gq:n,gu:a})},y$=function(e){return e},u3=function(e){return{$:0,a:e}},$3=u3,v3={$:3},f3=v3,s3=q(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),d3=s3,m3=function(e){return{$:1,a:e}},g3=m3,p3=function(e){return o(zr,"height",De(e))},b3=function(e){return Bs(Ws(e))},h3=b3,_3=function(e){return{$:2,a:e}},y3=_3,C3=function(e){return o(on,"",e)},P3=function(e){var r=e.a,n=e.b,a=e.c,t=e.d,i=function(l){return Qe(l*1e3)/1e3},c=function(l){return Qe(l*1e4)/100};return C3(g(["rgba(",le(c(r)),"%,",le(c(n)),"%,",le(c(a)),"%,",le(i(t)),")"]))},w3=$(function(e,r){switch(r.$){case 0:return o(Vd,e,r);case 1:return o(qd,e,r);case 2:return o(Ed,e,r);case 3:return o(Wd,e,r);case 4:return o(Rd,e,r);default:return o(Nd,e,r)}}),L3=$(function(e,r){switch(r.$){case 0:return o(sd,e,r);case 1:return o(dd,e,r);case 2:return o(md,e,r);case 3:return o(gd,e,r);case 4:return o(pd,e,r);case 5:return o(bd,e,r);case 6:return o(hd,e,r);case 7:return o(_d,e,r);default:return yd(e)}}),S3=P(function(e,r,n){return m(Fd,e,r,n)}),nl=function(e){var r=e;return r},ta=Kd,po=S(ta,1,1,1,1),dr=P(function(e,r,n){return o(Y,function(a){return o(a,r,n)},e)}),x3=P(function(e,r,n){return{$:0,a:e,b:r,c:n}}),z3=$(function(e,r){var n=e,a=r.gq,t=r.gu;return m(x3,n*a/t,n,n*(1-a-t)/t)}),Ra=Jd,T3=function(e){var r=e.a,n=e.b,a=e.c;return m(Ra,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},no=$(function(e,r){return T3(o(z3,e,r))}),C$=$(function(e,r){return{dJ:ve(e.dJ,r.dJ),r:e.r*r.r+e.s*r.u+e.t*r.x,s:e.r*r.s+e.s*r.v+e.t*r.y,t:e.r*r.t+e.s*r.w+e.t*r.z,u:e.u*r.r+e.v*r.u+e.w*r.x,v:e.u*r.s+e.v*r.v+e.w*r.y,w:e.u*r.t+e.v*r.w+e.w*r.z,x:e.x*r.r+e.y*r.u+e.z*r.x,y:e.x*r.s+e.y*r.v+e.z*r.y,z:e.x*r.t+e.y*r.w+e.z*r.z,J:r.J+(e.J*r.r+e.K*r.u+e.L*r.x)*r.b8,K:r.K+(e.J*r.s+e.K*r.v+e.L*r.y)*r.b8,L:r.L+(e.J*r.t+e.K*r.w+e.L*r.z)*r.b8,b8:e.b8*r.b8}}),gr=om,k3=function(e){return gr({dS:e.r,dT:e.u,dU:e.x,dV:e.J,dW:e.s,dX:e.v,dY:e.y,dZ:e.K,d_:e.t,d$:e.w,d0:e.z,d1:e.L,d2:0,d3:0,d4:0,d5:1})},bo=he(function(e,r,n,a,t){var i=a.dJ?1:-1,c=S(ta,a.b8,a.b8,a.b8,i);return We(t,e,c,k3(a),a.dJ,r,n)}),P$=or(function(e,r,n,a,t,i){e:for(;;)switch(t.$){case 0:return i;case 5:var c=t.a,l=t.b,u=e,v=r,f=n,d=o(C$,c,a),p=l,s=i;e=u,r=v,n=f,a=d,t=p,i=s;continue e;case 1:var b=t.b,h=o(T,z(bo,e,r,n,a,b),i.O);return{O:h,X:i.X,f3:i.f3};case 3:var C=t.b,L=o(T,z(bo,e,r,n,a,C),i.X);return{O:i.O,X:L,f3:i.f3};case 2:var _=t.a,x=o(T,z(bo,e,r,n,a,_),i.f3);return{O:i.O,X:i.X,f3:x};default:var D=t.a;return m(Te,S(P$,e,r,n,a),i,D)}}),M3=q(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),w$=M3,Qi=q(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),D3=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(Qi,518,r,n,a)},j3=$(function(e,r){return{$:6,a:e,b:r}}),A3=j3,L$=g([D3({Y:1,Z:0,ab:!1}),S(w$,!1,!1,!1,!1),o(A3,0,1)]),In=519,Ki=8,S$=15,Wn=7681,B3={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ge=fd,F3=$(function(e,r){return{$:0,a:e,b:r}}),V3=F3({dv:1,dF:0,ee:5}),Je=Id,q3=V3(g([{ep:o(Je,-1,-1)},{ep:o(Je,1,-1)},{ep:o(Je,-1,1)},{ep:o(Je,1,1)}])),E3={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"ep"},uniforms:{}},W3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return{$:2,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v,k:f}}}}}}}}}}}},ec=P(function(e,r,n){var a=e.cZ,t=e.cA,i=e.dd,c=$(function(v,f){var d=v;return f(d)}),l=$(function(v,f){var d=v;return f(d)}),u=function(v){return o(te,c(v.bw),o(te,l(v.bj),o(te,l(v.bE),l(v.bF))))};return o(u,n,o(u,r,m(W3,a,t,i)))}),rc=function(e){return m(ec,{cA:e.cA,cZ:e.cZ,dd:e.dd},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF},{bj:e.bj,bw:e.bw,bE:e.bE,bF:e.bF})},nc=function(e){return z(ge,g([rc(e),S(w$,!1,!1,!1,!1)]),E3,B3,q3,{})},R3=nc({bj:Wn,cA:0,cZ:Ki,bw:In,dd:S$,bE:Wn,bF:Wn}),N3=516,al=5386,je=7680,G3=function(e){return o(Zr,2,e+4)},x$=function(e){return nc({bj:je,cA:S$,cZ:Ki,bw:N3,dd:G3(e),bE:al,bF:al})},H3=P(function(e,r,n){return Be(g([m(dr,e,n,L$),g([x$(r),R3])]))}),I3=$(function(e,r){return Be(o(Rt,H3(e),r))}),U3=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(Qi,513,r,n,a)},J3=U3({Y:1,Z:0,ab:!0}),O3=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return{$:0,a:e,b:r,c:n,d:a,e:t,f:i,g:c,h:l,i:u,j:v}}}}}}}}}}},X3=function(e){var r=e.b6,n=e.bR,a=e.bJ,t=e.bG,i=e.bN,c=e.aR,l=$(function(u,v){var f=u.a,d=u.b,p=u.c,s=v.a,b=v.b,h=v.c;return O3(f)(d)(p)(s)(b)(h)(r)(n)(a)(t)});return o(l,i,c)},Y3=P(function(e,r,n){return{$:0,a:e,b:r,c:n}}),tl=$(function(e,r){var n=e,a=r;return m(Y3,32774,n,a)}),Z3=1,ol=771,Q3=770,ac=X3({bG:0,aR:o(tl,Z3,ol),bJ:0,bN:o(tl,Q3,ol),bR:0,b6:0}),An=g([J3,ac]),K3=function(e){var r=e;return r.d7},eb=function(e){var r=e;return r.d8},z$=function(e){var r=e;return r.d9},rb=function(e){var r=e;return r.ea},nb=function(e){var r=e;return r.eb},T$=function(e){var r=e;return r.ec},xe=$(function(e,r){var n=e,a=r;return a-n}),k$=function(e){return M(o(xe,rb(e),K3(e)),o(xe,nb(e),eb(e)),o(xe,T$(e),z$(e)))},ab=function(e){return e},tb=function(e){return aa({cM:ab({gq:e.J,gu:e.K,dg:e.L}),de:$n({gq:e.r,gu:e.s,dg:e.t}),df:$n({gq:e.u,gu:e.v,dg:e.w}),dh:$n({gq:e.x,gu:e.y,dg:e.z})})},ho=$(function(e,r){var n=e,a=r,t=n.dh,i=t,c=n.df,l=c,u=n.de,v=u;return{gq:a.gq*v.gq+a.gu*v.gu+a.dg*v.dg,gu:a.gq*l.gq+a.gu*l.gu+a.dg*l.dg,dg:a.gq*i.gq+a.gu*i.gu+a.dg*i.dg}}),M$=$(function(e,r){var n=e,a=r,t=n.cM,i=t,c=a.gq-i.gq,l=a.gu-i.gu,u=a.dg-i.dg,v=n.dh,f=v,d=n.df,p=d,s=n.de,b=s;return{gq:c*b.gq+l*b.gu+u*b.dg,gu:c*p.gq+l*p.gu+u*p.dg,dg:c*f.gq+l*f.gu+u*f.dg}}),D$=$(function(e,r){return{cM:o(M$,e,na(r)),de:o(ho,e,wn(r)),df:o(ho,e,Ln(r)),dh:o(ho,e,Sn(r))}}),vt=P(function(e,r,n){return{gq:e,gu:r,dg:n}}),il=function(e){var r=e;return r},Ee=$(function(e,r){var n=e,a=r;return o(Oe,n,a)}),ft=$(function(e,r){return J(e,r)<0?e:r}),ar=$(function(e,r){var n=e,a=r;return o(ft,n,a)}),ob=$(function(e,r){var n=il(r),a=il(e);return{d7:o(Ee,a.d7,n.d7),d8:o(Ee,a.d8,n.d8),d9:o(Ee,a.d9,n.d9),ea:o(ar,a.ea,n.ea),eb:o(ar,a.eb,n.eb),ec:o(ar,a.ec,n.ec)}}),Ye=function(e){var r=e;return r},ib=function(e){var r=e;return M(r.gq,r.gu,r.dg)},sn=$(function(e,r){var n=e,a=r;return a+n}),cb=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=ct(ze(a)),c=ct(ze(n)),l=ct(ze(t)),u=ib(r),v=u.a,f=u.b,d=u.c;return{d7:o(sn,c,v),d8:o(sn,i,f),d9:o(sn,l,d),ea:o(xe,c,v),eb:o(xe,i,f),ec:o(xe,l,d)}}),cl=q(function(e,r,n,a){var t=n.e_,i=2*n.fm*r,c=2*n.fl*r,l=2*n.fk*r,u=t.dg*r,v=t.gu*r,f=t.gq*r,d=Ye(Sn(e)),p=ee(l*d.gq)+ee(c*d.gu)+ee(i*d.dg),s=Ye(Ln(e)),b=ee(l*s.gq)+ee(c*s.gu)+ee(i*s.dg),h=Ye(wn(e)),C=ee(l*h.gq)+ee(c*h.gu)+ee(i*h.dg),L=o(cb,M(C,b,p),o(M$,e,m(vt,f,v,u)));if(a.$)return Z(L);var _=a.a;return Z(o(ob,_,L))}),ri=q(function(e,r,n,a){e:for(;;)if(a.b){var t=a.a,i=a.b;switch(t.$){case 0:var s=e,b=r,h=n,C=i;e=s,r=b,n=h,a=C;continue e;case 1:var c=t.a,l=S(cl,e,r,c,n),s=e,b=r,h=l,C=i;e=s,r=b,n=h,a=C;continue e;case 2:var s=e,b=r,h=n,C=i;e=s,r=b,n=h,a=C;continue e;case 3:var c=t.a,l=S(cl,e,r,c,n),s=e,b=r,h=l,C=i;e=s,r=b,n=h,a=C;continue e;case 4:var u=t.a,s=e,b=r,h=S(ri,e,r,n,u),C=i;e=s,r=b,n=h,a=C;continue e;default:var v=t.a,f=t.b,d=o(D$,tb(v),e),p=r*v.b8,s=e,b=r,h=S(ri,d,p,n,g([f])),C=i;e=s,r=b,n=h,a=C;continue e}}else return n}),Tn=Od,kn=Xd,Mn=Yd,j$=function(e){return{$:4,a:e}},lb=$(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,t=a,i=o(T,n,r);e=t,r=i;continue e}else return r}),Na=function(e){return j$(o(lb,e,w))},ub={dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:0,K:0,L:0,b8:1},ll=nc({bj:Wn,cA:0,cZ:Ki,bw:In,dd:255,bE:Wn,bF:Wn}),$b=function(e){var r=e,n=o(Oe,ee(r.gq),o(Oe,ee(r.gu),ee(r.dg)));if(n){var a=r.dg/n,t=r.gu/n,i=r.gq/n,c=ur(i*i+t*t+a*a);return c*n}else return se},Ue={bJ:0,eZ:!1,bR:0,cV:0,b6:0,c8:0,gq:0,gu:0,dg:0},er=$(function(e,r){var n=e,a=r;return gr({dS:n.gq,dT:n.b6,dU:a.gq,dV:a.b6,dW:n.gu,dX:n.bR,dY:a.gu,dZ:a.bR,d_:n.dg,d$:n.bJ,d0:a.dg,d1:a.bJ,d2:n.c8,d3:n.cV,d4:a.c8,d5:a.cV})}),sa=y({bo:o(er,Ue,Ue),bW:o(er,Ue,Ue),bX:o(er,Ue,Ue),bY:o(er,Ue,Ue)},S(ta,0,0,0,0)),A$=514,B$=function(e){var r=e.ab,n=e.Z,a=e.Y;return S(Qi,515,r,n,a)},F$=240,vb=g([B$({Y:1,Z:0,ab:!0}),rc({bj:je,cA:F$,cZ:0,bw:A$,dd:0,bE:je,bF:je}),ac]),fb=$(function(e,r){var n=e,a=r.fK,t=r.fh,i=r.eS,c=ze(a),l=c,u=ze(t),v=u,f=n.cX;if(f.$){var p=f.a;return Wo(v)?gr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:0,d1:-1,d2:0,d3:0,d4:0,d5:1}):gr({dS:2/(i*p),dT:0,dU:0,dV:0,dW:0,dX:2/p,dY:0,dZ:0,d_:0,d$:0,d0:-2/(v-l),d1:-(v+l)/(v-l),d2:0,d3:0,d4:0,d5:1})}else{var d=f.a;return Wo(v)?gr({dS:1/(i*d),dT:0,dU:0,dV:0,dW:0,dX:1/d,dY:0,dZ:0,d_:0,d$:0,d0:-1,d1:-2*l,d2:0,d3:0,d4:-1,d5:0}):gr({dS:1/(i*d),dT:0,dU:0,dV:0,dW:0,dX:1/d,dY:0,dZ:0,d_:0,d$:0,d0:-(v+l)/(v-l),d1:-2*v*l/(v-l),d2:0,d3:0,d4:-1,d5:0})}}),Ya=$(function(e,r){return(1&e>>r)===1?0:1}),sb=function(e){return g([B$({Y:1,Z:0,ab:!0}),rc({bj:je,cA:F$,cZ:e,bw:A$,dd:0,bE:je,bF:je}),ac])},db=P(function(e,r,n){return Be(o(Y,function(a){var t=a<<4,i=S(ta,o(Ya,a,0),o(Ya,a,1),o(Ya,a,2),o(Ya,a,3));return m(dr,e,y(r,i),sb(t))},o(pn,1,o(Zr,2,n)-1)))}),Rn=function(e){var r=e;return r},mb=im,V$=$n({gq:0,gu:1,dg:0}),tc=V$,gb={cM:Ur,de:Ii,df:tc,dh:Yt},oa=function(e){var r=e;return r},pb=function(e){var r=oa(na(e)),n=Ye(Sn(e)),a=Ye(Ln(e)),t=Ye(wn(e));return gr({dS:t.gq,dT:a.gq,dU:n.gq,dV:r.gq,dW:t.gu,dX:a.gu,dY:n.gu,dZ:r.gu,d_:t.dg,d$:a.dg,d0:n.dg,d1:r.dg,d2:0,d3:0,d4:0,d5:1})},bb=$(function(e,r){var n=r;return pb(o(D$,n,e))}),hb=function(e){return o(bb,gb,e)},_b=function(e){var r=e;return r.dc},yb=function(e){var r=e;return wn(r)},Cb=function(e){var r=e;return Ln(r)},Pb=function(e){var r=_b(e.ao),n=aa({cM:Qo(r),de:yb(r),df:Cb(r),dh:Tt(Ko(r))}),a=Na(e.aZ),t=a,i=S(ri,n,1,W,g([t]));if(i.$===1)return w;var c=i.a,l=hb(r),u=o(Pe,.99,o(Ee,ze(e.$7),zt(z$(c)))),v=k$(c),f=v.a,d=v.b,p=v.c,s=$b(m(Yi,f,d,p)),b=o(Pe,1.01,o(sn,s,zt(T$(c)))),h=o(fb,e.ao,{eS:e.eS,fh:b,fK:u}),C=mb(h).d5,L=C?Ye(Tt(Ko(r))):Rn(Qo(r)),_=function(){var de=e.ge;switch(de.$){case 0:return y(0,0);case 1:return y(1,0);case 2:return y(2,0);case 3:var Ce=de.a;return y(3,Ce);case 4:var Ce=de.a;return y(4,Ce);default:return y(5,0)}}(),x=_.a,D=_.b,H=e.ff,N=H,R=o(no,N,e.gn),I=R,U=gr({dS:0,dT:L.gq,dU:Tn(I),dV:e.eD,dW:0,dX:L.gu,dY:kn(I),dZ:fn(s),d_:0,d$:L.dg,d0:Mn(I),d1:x,d2:0,d3:C,d4:0,d5:D}),E=We(P$,U,l,h,ub,t,{O:w,X:w,f3:w}),Q=e.fC;switch(Q.$){case 0:var K=Q.a;return Be(g([m(dr,E.O,y(K,po),An),m(dr,E.X,sa,An)]));case 1:var K=Q.a;return Be(g([m(dr,E.O,sa,An),g([ll]),m(dr,E.f3,K.bo,L$),g([x$(0)]),m(dr,E.O,y(K,po),vb),m(dr,E.X,sa,An)]));default:var be=Q.a,_e=Q.b;return Be(g([m(dr,E.O,y(_e,po),An),g([ll]),o(I3,E.f3,be),m(db,E.O,_e,Cr(be)),m(dr,E.X,sa,An)]))}},wb=function(e){return o(zr,"width",De(e))},q$=$(function(e,r){var n=g([g3(1),y3(0),$3(!0),S(d3,0,0,0,0)]),a=function(){var x=e.eQ;switch(x.$){case 0:return M(n,"0",1);case 1:return M(o(T,f3,n),"1",1);default:var D=x.a;return M(n,"0",D)}}(),t=a.a,i=a.b,c=a.c,l=e.aU,u=l.a,v=l.b,f=nl(v),d=o(oe,"height",De(f)+"px"),p=nl(u),s=p/f,b=o(b$,function(x){return Pb({eS:s,ao:e.ao,$7:e.$7,aZ:x.aZ,ff:x.ff,fC:x.fC,eD:c,ge:x.ge,gn:x.gn})},r),h=o(oe,"width",De(p)+"px"),C=e.eU,L=C,_=P3(L);return m(h3,"div",g([o(oe,"padding","0px"),h,d]),g([y(i,m(S3,t,g([wb(Qe(p*c)),p3(Qe(f*c)),h,d,o(oe,"display","block"),o(oe,"background-color",_)]),b))]))}),Lb=function(e){return{$:2,a:e}},E$=function(e){return Lb(e)},Sb=function(e){return o(q$,{eQ:E$(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU},g([{aZ:e.aZ,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},kt=function(e){return e},xb=$(function(e,r){return Sb({eQ:e.eQ,eU:y$(e.eV),ao:e.ao,$7:Ge(e.$7),bg:e.bg,aU:y(kt(Qe(e.aL.go)),kt(Qe(e.aL.fo))),aZ:r,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn})}),W$=function(e){return e},zb=$(function(e,r){var n=e,a=Ye(r.e8),t=a.gq,i=a.gu,c=a.dg,l=o(no,r.bT,r.aS),u=l;return{bJ:Mn(u),eZ:n,bR:kn(u),cV:0,b6:Tn(u),c8:1,gq:-t,gu:-i,dg:-c}}),oc=$(function(e,r){var n=e,a=r,t=Lr(a);return{gq:t*Lr(n),gu:t*Sr(n),dg:Sr(a)}}),Tb=function(e){return o(zb,W$(!0),{aS:e.aS,e8:o(oc,Xe(e.bI),Xe(e.bP)),bT:e.bT})},ao=S(Tr,52/255,101/255,164/255,1),kb=S(Tr,115/255,210/255,22/255,1),Mb=function(e){return Na(e)},Re=Mb,ic=S(Tr,204/255,0/255,0/255,1),Db=P(function(e,r,n){return{k:o(Kr,e,r),fA:ze(n.fA),fX:ze(n.fX)}}),jb=function(e){var r=e;return r.k},pa=function(e){var r=e;return Lr(r)},Ab=q(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Bb=q(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),R$=q(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),N$=q(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),Fb=q(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),Vb=q(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),qb=q(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),G$=function(e){switch(e.$){case 0:return e;case 1:var n=e.a,r=e.b,t=e.c;return S(qb,n,r,t,1);case 2:var n=e.a,r=e.b,t=e.c;return S(Ab,n,r,t,1);case 3:var n=e.a,a=e.b,t=e.c;return S(Bb,n,a,t,1);case 4:var n=e.a,a=e.b,t=e.c;return S(R$,n,a,t,1);case 5:var n=e.a,a=e.b,t=e.c;return S(Vb,n,a,t,1);case 6:var n=e.a,a=e.b,t=e.c;return S(N$,n,a,t,1);case 7:var n=e.a,a=e.b,t=e.c;return S(Fb,n,a,t,1);case 8:return e;case 9:return e;default:return e}},H$={$:0},I$=Zd,dn=function(e){return I$(oa(e))},U$=function(e){var r=e;return r},cc=function(e){return I$(U$(e))},Eb=$(function(e,r){var n=e.ep,a=e.o;return o(T,{o:cc(a),ep:dn(n)},r)}),lc=function(e){var r=e;return r.E},Wb=P(function(e,r,n){return{$:3,a:e,b:r,c:n}}),Ga=Wb({dv:1,dF:3,ee:4}),ba=$(function(e,r){var n=e,a=r;return J(a,n)<1}),J$=function(e){return o(ba,e.d7,e.ea)&&o(ba,e.d8,e.eb)&&o(ba,e.d9,e.ec)?e:{d7:o(Ee,e.ea,e.d7),d8:o(Ee,e.eb,e.d8),d9:o(Ee,e.ec,e.d9),ea:o(ar,e.ea,e.d7),eb:o(ar,e.eb,e.d8),ec:o(ar,e.ec,e.d9)}},Rb=Ft(function(e,r,n,a,t,i,c){e:for(;;)if(c.b){var l=c.a,u=c.b,v=Mn(l.ep),f=kn(l.ep),d=Tn(l.ep),p=o(ft,e,d),s=o(Oe,r,d),b=o(ft,n,f),h=o(Oe,a,f),C=o(ft,t,v),L=o(Oe,i,v),_=u;e=p,r=s,n=b,a=h,t=C,i=L,c=_;continue e}else return J$({d7:r,d8:a,d9:i,ea:e,eb:n,ec:t})}),O$=$(function(e,r){var n=Mn(e.ep),a=kn(e.ep),t=Tn(e.ep);return di(Rb,t,t,a,a,n,n,r)}),uc=function(e){var r=e;return r.am},Nb=function(e){var r=m(lu,Eb,w,uc(e));if(r.b){var n=r.a,a=r.b,t=o(Ga,r,lc(e)),i=o(O$,n,a);return S(R$,i,e,t,0)}else return H$},ul=$(function(e,r){var n=e,a=r,t=n.df,i=t,c=n.de,l=c;return{gq:a.gq*l.gq+a.gu*i.gq,gu:a.gq*l.gu+a.gu*i.gu,dg:a.gq*l.dg+a.gu*i.dg}}),Mt=function(e){var r=e;return Sr(r)},da=function(e){var r=e;return r},Gb=P(function(e,r,n){e:for(;;){var a=o(Di,pe,e),t=a.a,i=a.b;if(J(Pr(t),pe)<0)return o(ji,!0,{A:r,m:n,p:t});var c=i,l=o(T,hn(t),r),u=n+1;e=c,r=l,n=u;continue e}}),xa=function(e){return e.b?m(Gb,e,w,0):Mi},ni=function(e){return{E:o(Y,function(r){return M(3*r,3*r+1,3*r+2)},o(pn,0,Cr(e)-1)),am:xa(Be(o(Y,function(r){var n=r.a,a=r.b,t=r.c;return g([n,a,t])},e)))}},ai=function(e){return Xe(2*Er*e)},$l=r$({cM:Ur,de:Ii,df:tc}),Xr=P(function(e,r,n){var a=e,t=r,i=n;return{gq:a,gu:t,dg:i}}),X$=function(){var e=72,r=o(h$,e,ai(1)),n=Ge(1),a=da(n$),t=da(_$),i=Ge(1),c=o(Pe,.5,i),l=m(Xr,se,se,c),u=o(Pe,-.5,i),v=m(Xr,se,se,u),f=function(s){var b=o(Pe,s,r),h=da(o(ul,$l,ei(b))),C=o(Pe,pa(b),n),L=o(Pe,Mt(b),n),_=m(Xr,C,L,c),x=m(Xr,C,L,u),D=o(La,e,s+1),H=o(Pe,D,r),N=da(o(ul,$l,ei(H))),R=o(Pe,pa(H),n),I=o(Pe,Mt(H),n),U=m(Xr,R,I,u),E=m(Xr,R,I,c);return g([M({o:t,ep:v},{o:t,ep:U},{o:t,ep:x}),M({o:h,ep:x},{o:N,ep:U},{o:N,ep:E}),M({o:h,ep:x},{o:N,ep:E},{o:h,ep:_}),M({o:a,ep:l},{o:a,ep:_},{o:a,ep:E})])},d=o(Y,f,o(pn,0,e-1)),p=ni(Be(d));return G$(Nb(p))}(),Za={$:0},Hb=P(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Ib=$(function(e,r){var n=e,a=r;return{gq:a.gu*n.dg-a.dg*n.gu,gu:a.dg*n.gq-a.gq*n.dg,dg:a.gq*n.gu-a.gu*n.gq}}),ti=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu,dg:a.dg-n.dg}}),Y$=function(e){return e},Ub={gq:0,gu:0,dg:0},Jb=$(function(e,r){var n=e,a=r,t=o(Oe,ee(a.gq),o(Oe,ee(a.gu),ee(a.dg)));if(t){var i=a.dg/t,c=a.gu/t,l=a.gq/t,u=ur(l*l+c*c+i*i);return{gq:n*l/u,gu:n*c/u,dg:n*i/u}}else return Ub}),Ob=Jb(Y$(1)),Xb=P(function(e,r,n){var a=o(ti,r,n),t=o(ti,e,r);return Ob(o(Ib,a,t))}),Yb=P(function(e,r,n){var a=r.a,t=r.b,i=r.c,c=e(i),l=e(t),u=e(a),v=cc(m(Xb,u,l,c)),f={o:v,ep:dn(u)},d={o:v,ep:dn(l)},p={o:v,ep:dn(c)};return o(T,f,o(T,d,o(T,p,n)))}),Zb=q(function(e,r,n,a){if(r.$===1)return W;var t=r.a;if(n.$===1)return W;var i=n.a;if(a.$===1)return W;var c=a.a;return Z(m(e,t,i,c))}),yn=4294967295>>>32-$r,za=Qv,Qb=P(function(e,r,n){e:for(;;){var a=yn&r>>>e,t=o(za,a,n);if(t.$){var v=t.a;return o(za,yn&r,v)}else{var i=t.a,c=e-$r,l=r,u=i;e=c,r=l,n=u;continue e}}}),Z$=function(e){return e>>>5<<5},Ar=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d;return e<0||J(e,n)>-1?W:J(e,Z$(n))>-1?Z(o(za,yn&e,i)):Z(m(Qb,a,e,t))}),_o=$(function(e,r){return o(Ar,e,uc(r))}),Q$=function(e){var r=function(n){var a=n.a,t=n.b,i=n.c;return S(Zb,P(function(c,l,u){return M(c,l,u)}),o(_o,a,e),o(_o,t,e),o(_o,i,e))};return o(_n,r,lc(e))},Kb=P(function(e,r,n){return e(r(n))}),eh=$(function(e,r){return!o(zu,o(Kb,Wm,e),r)}),$c=function(e){var r=e.a;return r},vc=$(function(e,r){var n=$c(e),a=function(t){var i=t.a,c=t.b,l=t.c;return i>=0&&J(i,n)<0&&c>=0&&J(c,n)<0&&l>=0&&J(l,n)<0};return o(eh,a,r)?{E:r,am:e}:{E:o(eo,a,r),am:e}}),st=$(function(e,r){var n=Rn(r),a=Rn(e);return y(M(a.gq,a.gu,a.dg),M(n.gq,n.gu,n.dg))}),vl=m(Ra,0,0,0),yo=or(function(e,r,n,a,t,i){var c=i.a,l=i.b,u=i.c,v=o(Kn,o(st,e,r),t);if(v.$){var d={o:vl,ep:dn(r)},p={o:vl,ep:dn(e)},s=u+1,b=u;return M(o(T,M(n,b,s),o(T,M(n,s,a),c)),o(T,d,o(T,p,l)),u+2)}else{var f=v.a;return M(o(T,M(n,f,a),c),l,u)}}),rh=he(function(e,r,n,a,t){e:for(;;)if(n.b){var i=n.a,c=i.a,l=i.b,u=i.c,v=n.b,f=e(u),d=e(l),p=e(c),s=a+2,b=a+1,h=a,C=e,L=r,_=v,x=a+3,D=We(yo,f,p,s,h,r,We(yo,d,f,b,s,r,We(yo,p,d,h,b,r,t)));e=C,r=L,n=_,a=x,t=D;continue e}else{var H=t,N=H.a,R=H.b;return y(N,ie(R))}}),nh=he(function(e,r,n,a,t){e:for(;;)if(r.b){var i=r.a,c=i.a,l=i.b,u=i.c,v=r.b,f=e(u),d=e(l),p=e(c),s=n+2,b=n+1,h=n,C=m(un,o(st,p,f),s,m(un,o(st,f,d),b,m(un,o(st,d,p),h,t))),L=o(T,M(h,b,s),a),_=e,x=v,D=n+3,H=L,N=C;e=_,r=x,n=D,a=H,t=N;continue e}else return M(a,t,n)}),tn=P(function(e,r,n){var a=Q$(n),t=m(Ir,Yb(r),w,a),i=z(nh,r,a,0,w,Qt),c=i.a,l=i.b,u=i.c,v=z(rh,r,l,a,0,M(c,w,u)),f=v.a,d=v.b,p=xt(d)?t:ce(t,d);return m(Hb,e,o(vc,xa(p),f),o(Ga,p,f))}),Dt=function(e){var r=e;return r},ah=function(e){switch(e.$){case 0:return Za;case 1:var a=e.a,r=e.b,n=o(Y,Dt,r);return m(tn,a,hr,ni(n));case 2:var a=e.a,r=e.b,n=o(Y,Dt,r);return m(tn,a,hr,ni(n));case 3:var a=e.a,t=e.b;return m(tn,a,hr,t);case 4:var a=e.a,t=e.b;return m(tn,a,function(i){return i.ep},t);case 5:var a=e.a,t=e.b;return m(tn,a,function(i){return i.ep},t);case 6:var a=e.a,t=e.b;return m(tn,a,function(i){return i.ep},t);case 7:var a=e.a,t=e.b;return m(tn,a,function(i){return i.ep},t);case 8:return Za;case 9:return Za;default:return Za}},fl=ah(X$),K$={$:0},A=K$,th=function(e){var r=e,n=ee(r.dg),a=ee(r.gu),t=ee(r.gq);if(J(t,a)<1)if(J(t,n)<1){var i=ur(r.dg*r.dg+r.gu*r.gu);return{gq:0,gu:-r.dg/i,dg:r.gu/i}}else{var i=ur(r.gu*r.gu+r.gq*r.gq);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}else if(J(a,n)<1){var i=ur(r.dg*r.dg+r.gq*r.gq);return{gq:r.dg/i,gu:0,dg:-r.gq/i}}else{var i=ur(r.gq*r.gq+r.gu*r.gu);return{gq:-r.gu/i,gu:r.gq/i,dg:0}}},oh=function(e){var r=th(e),n=r,a=n,t=e,i=t,c={gq:i.gu*a.dg-i.dg*a.gu,gu:i.dg*a.gq-i.gq*a.dg,dg:i.gq*a.gu-i.gu*a.gq};return y(r,c)},ih=function(e){var r=Xt(e),n=oh(r),a=n.a,t=n.b;return aa({cM:Xi(e),de:a,df:t,dh:r})},ch=function(e){var r=e;return r.fA},Ae=$(function(e,r){return{$:1,a:e,b:r}}),lh={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"bO"}},uh=1029,$h=function(e){return{$:5,a:e}},ev=function(e){var r=e;return $h(r)},vh=ev(uh),fh=1028,sh=ev(fh),Ne=P(function(e,r,n){return r===1?e?o(T,vh,n):o(T,sh,n):n}),rv={src:`
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
    `,attributes:{position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Co=q(function(e,r,n,a){return o(Ae,r,ue(function(t,i,c,l,u,v,f,d){return z(ge,m(Ne,l,a,d),rv,lh,n,{bO:e,b:c,c:i,d:v,e:t,f:u})}))}),nv={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aD"}},av={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},kr=q(function(e,r,n,a){return o(Ae,r,ue(function(t,i,c,l,u,v,f,d){return z(ge,m(Ne,l,a,d),av,nv,n,{aD:e,b:c,c:i,d:v,e:t,f:u})}))}),tv=$(function(e,r){return{$:3,a:e,b:r}}),dh={src:`
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
    `,attributes:{},uniforms:{constantColor:"aD",pointRadius:"b3",sceneProperties:"e"}},ov={src:`
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
    `,attributes:{position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",pointRadius:"b3",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},mh=q(function(e,r,n,a){return o(tv,n,ue(function(t,i,c,l,u,v,f,d){return z(ge,d,ov,dh,a,{aD:e,b:c,c:i,b3:r,d:v,e:t,f:u})}))}),iv={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aX",sceneProperties:"e"}},to=function(e){var r=e;return r},fc=Qd,Mr=he(function(e,r,n,a,t){return o(Ae,n,ue(function(i,c,l,u,v,f,d,p){return z(ge,m(Ne,u,t,p),av,iv,a,{aX:o(fc,to(r),e),b:l,c,d:f,e:i,f:v})}))}),gh={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"aX",pointRadius:"b3",sceneProperties:"e"}},ph=he(function(e,r,n,a,t){return o(tv,a,ue(function(i,c,l,u,v,f,d,p){return z(ge,p,ov,gh,t,{aX:o(fc,to(r),e),b:l,c,b3:n,d:f,e:i,f:v})}))}),cv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",materialColor:"cB",sceneProperties:"e",viewMatrix:"f"}},lv={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Qa=q(function(e,r,n,a){return o(Ae,r,ue(function(t,i,c,l,u,v,f,d){var p=f.a,s=f.b;return z(ge,m(Ne,l,a,d),lv,cv,n,{R:s,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cB:e,b:c,c:i,d:v,e:t,f:u})}))}),uv={src:`
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
    `,attributes:{},uniforms:{enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",materialColorTexture:"cC",normalMapTexture:"a4",sceneProperties:"e",useNormalMap:"a9",viewMatrix:"f"}},$v={src:`
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
    `,attributes:{normal:"o",position:"ep",tangent:"eF",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},bh=or(function(e,r,n,a,t,i){return o(Ae,a,ue(function(c,l,u,v,f,d,p,s){var b=p.a,h=p.b;return z(ge,m(Ne,v,i,s),$v,uv,t,{R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cC:e,b:u,c:l,a4:r,d,e:c,a9:n,f})}))}),vv={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"ch",constantBaseColor:"ck",constantMetallic:"cl",constantRoughness:"cm",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallicTexture:"cG",normalMapTexture:"a4",roughnessTexture:"c1",sceneProperties:"e",useNormalMap:"a9",viewMatrix:"f"}},hh=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){return function(f){return o(Ae,u,ue(function(d,p,s,b,h,C,L,_){var x=L.a,D=L.b;return z(ge,m(Ne,b,f,_),$v,vv,v,{ch:e,ck:r,cl:i,cm:a,R:D,bo:x.bo,bW:x.bW,bX:x.bX,bY:x.bY,cG:t,b:s,c:p,a4:c,d:C,c1:n,e:d,a9:l,f:h})}))}}}}}}}}}}},fv={src:`
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
    `,attributes:{},uniforms:{baseColor:"cg",enabledLights:"R",lights12:"bo",lights34:"bW",lights56:"bX",lights78:"bY",metallic:"cF",roughness:"c0",sceneProperties:"e",viewMatrix:"f"}},Ka=or(function(e,r,n,a,t,i){return o(Ae,a,ue(function(c,l,u,v,f,d,p,s){var b=p.a,h=p.b;return z(ge,m(Ne,v,i,s),lv,fv,t,{cg:e,R:h,bo:b.bo,bW:b.bW,bX:b.bX,bY:b.bY,cF:n,b:u,c:l,d,c0:r,e:c,f})}))}),_h=function(e){return{$:0,a:e}},sl=$(function(e,r){return{$:1,a:e,b:r}}),ha=$(function(e,r){if(r.$){var n=r.a.D;return y(n,1)}else return r.a,y(e,0)}),yh=function(e){return S(ta,Tn(e),kn(e),Mn(e),1)},sc=S(ta,0,0,0,0),dt=$(function(e,r){if(r.$){var a=r.a.D;return y(a,sc)}else{var n=r.a;return y(e,yh(n))}}),sv=$(function(e,r){var n=y(e,r);if(n.a.$){var t=n.a.a.D;return o(sl,y(t,sc),o(ha,t,r))}else if(n.b.$){var t=n.b.a.D;return o(sl,o(dt,t,e),o(ha,t,r))}else{var a=n.a.a;return n.b.a,_h(a)}}),Ch=P(function(e,r,n){return{$:0,a:e,b:r,c:n}}),et=q(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Ph=q(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),wh=function(e){return o(Je,e,1)},oi=o(Je,0,0),Bn=$(function(e,r){if(r.$){var a=r.a.D;return y(a,oi)}else{var n=r.a;return y(e,wh(n))}}),dv=q(function(e,r,n,a){var t=S(Ph,e,r,n,a);if(t.a.$){var u=t.a.a.D;return S(et,y(u,sc),o(Bn,u,r),o(Bn,u,n),o(ha,u,a))}else if(t.b.$){var u=t.b.a.D;return S(et,o(dt,u,e),y(u,oi),o(Bn,u,n),o(ha,u,a))}else if(t.c.$){var u=t.c.a.D;return S(et,o(dt,u,e),o(Bn,u,r),y(u,oi),o(ha,u,a))}else if(t.d.$){var u=t.d.a.D;return S(et,o(dt,u,e),o(Bn,u,r),o(Bn,u,n),y(u,1))}else{var i=t.a.a,c=t.b.a,l=t.c.a;return t.d.a,m(Ch,i,c,l)}}),Lh={src:`
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
    `,attributes:{},uniforms:{backlight:"cd",colorTexture:"bO",sceneProperties:"e"}},Po=he(function(e,r,n,a,t){return o(Ae,n,ue(function(i,c,l,u,v,f,d,p){return z(ge,m(Ne,u,t,p),rv,Lh,a,{cd:to(r),bO:e,b:l,c,d:f,e:i,f:v})}))}),mv={src:`
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
    `,attributes:{normal:"o",position:"ep",uv:"N"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",viewMatrix:"f"}},Sh=q(function(e,r,n,a){return o(Ae,r,ue(function(t,i,c,l,u,v,f,d){var p=f.a,s=f.b;return z(ge,m(Ne,l,a,d),mv,uv,n,{R:s,bo:p.bo,bW:p.bW,bX:p.bX,bY:p.bY,cC:e,b:c,c:i,a4:e,d:v,e:t,a9:0,f:u})}))}),xh=si(function(e,r,n,a,t,i,c,l,u){return o(Ae,c,ue(function(v,f,d,p,s,b,h,C){var L=h.a,_=h.b;return z(ge,m(Ne,p,u,C),mv,vv,l,{ch:e,ck:r,cl:i,cm:a,R:_,bo:L.bo,bW:L.bW,bX:L.bX,bY:L.bY,cG:t,b:d,c:f,a4:e,d:b,c1:n,e:v,a9:0,f:s})}))}),Ta=P(function(e,r,n){var a=e,t=r;return n<=.5?a+n*(t-a):t+(1-n)*(a-t)}),zh=function(e){var r=e;return m(Ta,r.ea,r.d7,.5)},Th=function(e){var r=e;return m(Ta,r.eb,r.d8,.5)},kh=function(e){var r=e;return m(Ta,r.ec,r.d9,.5)},Mh=function(e){return m(Xr,zh(e),Th(e),kh(e))},X=function(e){var r=k$(e),n=r.a,a=r.b,t=r.c;return{e_:oa(Mh(e)),fk:n/2,fl:a/2,fm:t/2}},gv=$(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var l=e.b.a.D;switch(r.$){case 0:return A;case 1:return A;case 2:return A;case 3:return A;case 4:return A;case 5:var t=r.a,c=r.c,a=r.d;return S(Co,l,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(Co,l,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(Co,l,X(t),c,a);case 8:return A;case 9:return A;default:return A}}else{var n=e.b.a;switch(r.$){case 0:return A;case 1:var t=r.a,c=r.c,a=r.d;return S(kr,n,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return S(kr,n,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return S(kr,n,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return S(kr,n,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return S(kr,n,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return S(kr,n,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return S(kr,n,X(t),c,a);case 8:var t=r.a,c=r.c;return S(kr,n,X(t),c,0);case 9:var t=r.a,c=r.c;return S(kr,n,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return S(mh,n,i,X(t),c)}}case 1:if(e.b.$){e.a;var l=e.b.a.D,v=e.c;switch(r.$){case 0:return A;case 1:return A;case 2:return A;case 3:return A;case 4:return A;case 5:var t=r.a,c=r.c,a=r.d;return z(Po,l,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return z(Po,l,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return z(Po,l,v,X(t),c,a);case 8:return A;case 9:return A;default:return A}}else{var u=e.b.a,v=e.c;switch(r.$){case 0:return A;case 1:var t=r.a,c=r.c,a=r.d;return z(Mr,u,v,X(t),c,a);case 2:var t=r.a,c=r.c,a=r.d;return z(Mr,u,v,X(t),c,a);case 3:var t=r.a,c=r.c,a=r.d;return z(Mr,u,v,X(t),c,a);case 4:var t=r.a,c=r.c,a=r.d;return z(Mr,u,v,X(t),c,a);case 5:var t=r.a,c=r.c,a=r.d;return z(Mr,u,v,X(t),c,a);case 6:var t=r.a,c=r.c,a=r.d;return z(Mr,u,v,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return z(Mr,u,v,X(t),c,a);case 8:var t=r.a,c=r.c;return z(Mr,u,v,X(t),c,0);case 9:var t=r.a,c=r.c;return z(Mr,u,v,X(t),c,0);default:var t=r.a,i=r.b,c=r.d;return z(ph,u,v,i,X(t),c)}}case 2:e.a;var f=e.b,N=e.c,d=o(sv,f,N);if(d.$){var b=d.a,h=b.a;b.b;var C=d.b,L=C.a,_=C.b;switch(r.$){case 0:return A;case 1:return A;case 2:return A;case 3:return A;case 4:return A;case 5:return A;case 6:var t=r.a,c=r.c,s=r.d;return S(Sh,h,X(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return We(bh,h,L,_,X(t),c,s);case 8:return A;case 9:return A;default:return A}}else{var p=d.a;switch(r.$){case 0:return A;case 1:return A;case 2:var t=r.a,c=r.c,s=r.d;return S(Qa,p,X(t),c,s);case 3:return A;case 4:var t=r.a,c=r.c,s=r.d;return S(Qa,p,X(t),c,s);case 5:return A;case 6:var t=r.a,c=r.c,s=r.d;return S(Qa,p,X(t),c,s);case 7:var t=r.a,c=r.c,s=r.d;return S(Qa,p,X(t),c,s);case 8:return A;case 9:return A;default:return A}}default:e.a;var x=e.b,D=e.c,H=e.d,N=e.e,R=S(dv,x,D,H,N);if(R.$){var Q=R.a,K=Q.a,be=Q.b,_e=R.b,de=_e.a,Ce=_e.b,Ie=R.c,Ve=Ie.a,Jr=Ie.b,Or=R.d,L=Or.a,_=Or.b;switch(r.$){case 0:return A;case 1:return A;case 2:return A;case 3:return A;case 4:return A;case 5:return A;case 6:var t=r.a,c=r.c,a=r.d;return Uv(xh,K,be,de,Ce,Ve,Jr,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return hh(K)(be)(de)(Ce)(Ve)(Jr)(L)(_)(X(t))(c)(a);case 8:return A;case 9:return A;default:return A}}else{var I=R.a,U=R.b,E=R.c;switch(r.$){case 0:return A;case 1:return A;case 2:var t=r.a,c=r.c,a=r.d;return We(Ka,I,U,E,X(t),c,a);case 3:return A;case 4:var t=r.a,c=r.c,a=r.d;return We(Ka,I,U,E,X(t),c,a);case 5:return A;case 6:var t=r.a,c=r.c,a=r.d;return We(Ka,I,U,E,X(t),c,a);case 7:var t=r.a,c=r.c,a=r.d;return We(Ka,I,U,E,X(t),c,a);case 8:return A;case 9:return A;default:return A}}}}),wo=function(e){var r=e;return r.gq},Lo=function(e){var r=e;return r.gu},So=function(e){var r=e;return r.dg},Dh=function(e){var r=e,n=So(r.dh),a=Lo(r.dh),t=wo(r.dh),i=So(r.df),c=Lo(r.df),l=wo(r.df),u=So(r.de),v=Lo(r.de),f=wo(r.de);return f*c*n+v*i*t+u*l*a-u*c*t-v*l*n-f*i*a>0},jh=function(e){var r=oa(na(e)),n=Ye(Sn(e)),a=Ye(Ln(e)),t=Ye(wn(e));return{dJ:Dh(e),r:t.gq,s:t.gu,t:t.dg,u:a.gq,v:a.gu,w:a.dg,x:n.gq,y:n.gu,z:n.dg,J:r.gq,K:r.gu,L:r.dg,b8:1}},Fn=$(function(e,r){return{$:5,a:e,b:r}}),dc=$(function(e,r){var n=r;switch(n.$){case 0:return A;case 5:var a=n.a,t=n.b,i=o(C$,a,e);return o(Fn,i,t);case 1:return o(Fn,e,n);case 3:return o(Fn,e,n);case 2:return o(Fn,e,n);default:return o(Fn,e,n)}}),Ah=$(function(e,r){return o(dc,jh(e),r)}),oo=function(e){return{$:2,a:e}},Bh=$(function(e,r){var n=e.a,a=e.b,t=e.c,i=r.e_;return{e_:{gq:n*i.gq,gu:a*i.gu,dg:t*i.dg},fk:n*r.fk,fl:a*r.fl,fm:t*r.fm}}),Fh=rm,Vh=em,dl=function(e){return function(r){return function(n){return function(a){return function(t){return function(i){return function(c){return function(l){return function(u){return function(v){var f=e.a,d=e.b,p=e.c,s=Vh(a),b=s.gq,h=s.gu,C=s.dg,L=s.eN,_=Fh({eN:L,gq:b*f,gu:h*d,dg:C*p});return mi(r,n,_,t,i,c,l,u,v)}}}}}}}}}},ii=$(function(e,r){switch(r.$){case 0:return K$;case 5:var n=r.a,a=r.b;return o(Fn,n,o(ii,e,a));case 1:var t=r.a,i=r.b;return o(Ae,o(Bh,e,t),o(dl,e,i));case 3:return r;case 2:var i=r.a;return oo(o(dl,e,i));default:var c=r.a;return j$(o(Y,ii(e),c))}}),pv=$(function(e,r){var n=r;return o(ii,e,n)}),qh=function(e){var r=e;return r.fX},mc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},bv=7683,hv=7682,Eh=m(ec,{cA:0,cZ:0,dd:15},{bj:je,bw:In,bE:je,bF:bv},{bj:je,bw:In,bE:je,bF:hv}),Wh=m(ec,{cA:0,cZ:0,dd:15},{bj:je,bw:In,bE:je,bF:hv},{bj:je,bw:In,bE:je,bF:bv}),gc=$(function(e,r){return e?o(T,Wh,r):o(T,Eh,r)}),Rh={src:`
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
    `,attributes:{normal:"o",position:"ep"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},Nh=function(e){if(e.$){var r=e.c;return Z(ue(function(n,a,t,i,c,l,u,v){return z(ge,o(gc,i,v),Rh,mc,r,{b:t,c:a,d:l,e:n,b9:u,f:c})}))}else return W},ml=function(e){var r=Nh(e);if(r.$)return A;var n=r.a;return oo(n)},Gh=q(function(e,r,n,a){var t=ih(jb(a)),i=o(gv,n,X$),c=function(){var d=y(e,r);return d.a?d.b?Na(g([i,ml(fl)])):i:d.b?ml(fl):A}(),l=qh(a),u=l,v=ch(a),f=v;return o(Ah,t,o(pv,M(u,u,f),c))}),Hh=$(function(e,r){return S(Gh,!0,!0,e,r)}),_v=P(function(e,r,n){return o(Hh,e,m(Db,Ur,V$,{fA:Ge(n),fX:Ge(r)}))}),ci=function(e){return{$:0,a:e}},yv=$(function(e,r){return{$:0,a:e,b:r}}),Ih=function(e){var r=Gi(e),n=r.cY,a=r.co,t=r.ci;return m(Ra,n,a,t)},Uh=function(e){return o(yv,0,ci(Ih(e)))},Cv=P(function(e,r,n){return{$:2,a:e,b:r,c:n}}),xo=function(e){return m(Oi,0,1,e<=.04045?e/12.92:o(Zr,(e+.055)/1.055,2.4))},Jh=function(e){var r=Gi(e),n=r.cY,a=r.co,t=r.ci;return m(Ra,xo(n),xo(a),xo(t))},Oh=function(e){return m(Cv,0,ci(Jh(e)),ci(0))},mn=$(function(e,r){return o(ra,"unlit",e)?Uh(r):Oh(r)}),Xh=P(function(e,r,n){return{gq:e,gu:r,dg:n}}),Yh=function(e){var r=U$(e);return{dJ:!0,r:1,s:0,t:0,u:0,v:1,w:0,x:0,y:0,z:1,J:r.gq,K:r.gu,L:r.dg,b8:1}},Pv=$(function(e,r){return o(dc,Yh(e),r)}),Zh=$(function(e,r){return o(Pv,e,r)}),pc=function(e){var r=e.a,n=e.b,a=e.c;return Zh(m(Xh,r,n,a))},gn=function(e){return pc(M(e,0,0))},io=function(e){return pc(M(0,e,0))},wv=function(e){return pc(M(0,0,e))},Qh=$(function(e,r){var n=r,a=oa(Xi(e)),t=.5*n,i=Lr(t),c=Sr(t),l=Ye(Xt(e)),u=l.gq*c,v=i*u,f=u*u,d=l.gu*c,p=i*d,s=u*d,b=d*d,h=1-2*(f+b),C=l.dg*c,L=i*C,_=2*(s-L),x=2*(s+L),D=u*C,H=2*(D+p),N=2*(D-p),R=d*C,I=2*(R-v),U=2*(R+v),E=C*C,Q=1-2*(b+E),K=1-2*(f+E);return{dJ:!0,r:Q,s:x,t:N,u:_,v:K,w:U,x:H,y:I,z:h,J:a.gq-Q*a.gq-_*a.gu-H*a.dg,K:a.gu-x*a.gq-K*a.gu-I*a.dg,L:a.dg-N*a.gq-U*a.gu-h*a.dg,b8:1}}),Kh=P(function(e,r,n){return o(dc,o(Qh,e,r),n)}),Lv=P(function(e,r,n){return m(Kh,e,r,n)}),e2=o(Kr,Ur,tc),Sv=$(function(e,r){return m(Lv,e2,Xe(e),r)}),r2=o(Kr,Ur,Yt),li=$(function(e,r){return m(Lv,r2,Xe(e),r)}),n2=_f,a2=Cf,t2=function(e){var r=e.a,n=e.b,a=e.c;return ur(o(Zr,r,2)+o(Zr,n,2)+o(Zr,a,2))},o2=function(e){var r=e.a,n=e.b,a=e.c,t=t2(M(r,n,a));return{bI:o(a2,n,r),fs:n2(a/t),fX:t}},mt=q(function(e,r,n,a){var t=a.a,i=a.b,c=M(i.gq-t.gq,i.gu-t.gu,i.dg-t.dg),l=c.a,u=c.b,v=c.c,f=o2(M(l,u,v)),d=f.fX,p=f.bI,s=f.fs;return o(wv,t.dg,o(io,t.gu,o(gn,t.gq,o(li,p,o(Sv,s-Nr(90),o(gn,d/2,o(li,Nr(90),m(_v,o(mn,e,r),n/2,d))))))))}),i2=function(e){return Re(g([S(mt,e,ic,.1,y(m(qe,0,0,0),m(qe,10,0,0))),S(mt,e,kb,.1,y(m(qe,0,0,0),m(qe,0,10,0))),S(mt,e,ao,.1,y(m(qe,0,0,0),m(qe,0,0,10)))]))},c2=S(Tr,78/255,154/255,6/255,1),l2=function(e){var r=e;return r.e_},u2=function(e){var r=e;return r.fX},ui=$(function(e,r){var n=e,a=r;return n/a}),$2=he(function(e,r,n,a,t){e:for(;;){var i=a(r/n),c=o(T,i,t);if(ve(r,e))return c;var l=e,u=r-1,v=n,f=a,d=c;e=l,r=u,n=v,a=f,t=d;continue e}}),gl=$(function(e,r){return e<1?w:z($2,0,e,e,r,w)}),v2=$(function(e,r){var n=e.ep,a=e.o,t=e.N,i=t,c=i.a,l=i.b;return o(T,{o:cc(a),ep:dn(n),N:o(Je,c,l)},r)}),f2=function(e){var r=m(lu,v2,w,uc(e));if(r.b){var n=r.a,a=r.b,t=o(Ga,r,lc(e)),i=o(O$,n,a);return S(N$,i,e,t,0)}else return H$},s2=function(){var e=Ge(1),r=72,n=o(pn,0,r-1),a=o(gl,r,o(Ta,se,ai(1))),t=Ti(r/2),i=o(pn,0,t-1),c=o(gl,t,o(Ta,fa(90),fa(-90))),l=xa(Be(o(Y,function(f){return o(Y,function(d){return{o:da(o(oc,f,d)),ep:m(Xr,o(Pe,pa(d)*pa(f),e),o(Pe,pa(d)*Mt(f),e),o(Pe,Mt(d),e)),N:y(o(ui,f,ai(1)),o(ui,o(sn,fa(90),d),fa(180)))}},c)},a))),u=$(function(f,d){return f*(t+1)+d}),v=Be(o(Y,function(f){return Be(o(Y,function(d){var p=o(u,f+1,d),s=o(u,f,d),b=o(u,f+1,d+1),h=o(u,f,d+1);return g([M(h,b,p),M(h,p,s)])},i))},n));return G$(f2(o(vc,l,v)))}(),jt=72,rt=2*jt,d2=$(function(e,r){e:for(;;){var n=rt+1,a=o(La,rt,2*e+3),t=o(La,rt,2*e+2),i=2*e+1,c=2*e,l=rt,u=o(T,M(l,c,t),o(T,M(c,a,t),o(T,M(c,i,a),o(T,M(i,n,a),r))));if(e){var v=e-1,f=u;e=v,r=f;continue e}else return u}}),m2=P(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),g2=$(function(e,r){e:for(;;){var n=m(m2,0,2*Er,e/jt),a={bH:n,b0:0,b7:1},t={bH:n,b0:1,b7:1},i=o(T,a,o(T,t,r));if(e){var c=e-1,l=i;e=c,r=l;continue e}else return i}}),p2=function(){var e=o(g2,jt-1,g([{bH:0,b0:0,b7:0},{bH:0,b0:1,b7:0}])),r=o(d2,jt-1,w);return o(Ga,e,r)}(),b2={src:`
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
    `,attributes:{angle:"bH",offsetScale:"b0",radiusScale:"b7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",viewMatrix:"f"}},pl=function(e){return oo(ue(function(r,n,a,t,i,c,l,u){return z(ge,o(gc,!0,u),b2,mc,p2,{aD:m(Ra,0,0,1),b:a,c:n,d:c,e:r,b9:l,f:i})}))},h2=q(function(e,r,n,a){var t=o(gv,n,s2),i=function(){var u=y(e,r);return u.a?u.b?Na(g([t,pl()])):t:u.b?pl():A}(),c=u2(a),l=c;return o(Pv,o(ti,Ur,l2(a)),o(pv,M(l,l,l),i))}),_2=$(function(e,r){return S(h2,!0,!0,e,r)}),y2=P(function(e,r,n){return{$:1,a:e,b:r,c:n}}),C2=he(function(e,r,n,a,t){return{$:3,a:e,b:r,c:n,d:a,e:t}}),P2=function(e){switch(e.$){case 0:var n=e.a,a=e.b;return o(yv,n,a);case 1:var n=e.a,a=e.b,r=e.c;return m(y2,n,a,r);case 2:var n=e.a,a=e.b,c=e.c;return m(Cv,n,a,c);default:var n=e.a,a=e.b,t=e.c,i=e.d,c=e.e;return z(C2,n,a,t,i,c)}},w2=P2,L2=$(function(e,r){return{e_:r,fX:ze(e)}}),$i=$(function(e,r){return o(_2,w2(e),o(L2,Ge(r),Ur))}),xv=q(function(e,r,n,a){var t=a.a,i=a.b;return S(mt,e,r,n,y(m(qe,t.gq,t.gu,0),m(qe,i.gq,i.gu,0)))}),S2=S(Tr,237/255,212/255,0/255,1),x2=$(function(e,r){var n=Ea(r.I).ce,a=o(li,n.e9,Re(g([o(Sv,n.f1,Re(g([o(gn,-.02,o($i,o(mn,e,ic),n.aT.fX)),o(gn,.02,o($i,o(mn,e,S2),n.aT.fX))]))),m(_v,o(mn,e,Eu),.2,1.1)]))),t=n.gk,i=t.a,c=t.b,l=o(ra,"draw speed vector",e)?S(xv,e,c2,.2,y(o(qr,0,0),o(qr,.3*i,.3*c))):Re(w);return o(io,n.aT.bL.gu,o(gn,n.aT.bL.gq,o(wv,.5,Re(g([a,l])))))}),z2=function(e){var r=Dt(e),n=r.a,a=r.b,t=r.c,i=lt(n),c=ut(n),l=$t(n),u=lt(a),v=ut(a),f=$t(a),d=lt(t),p=ut(t),s=$t(t);return J$({d7:o(Ee,i,o(Ee,u,d)),d8:o(Ee,c,o(Ee,v,p)),d9:o(Ee,l,o(Ee,f,s)),ea:o(ar,i,o(ar,u,d)),eb:o(ar,c,o(ar,v,p)),ec:o(ar,l,o(ar,f,s))})},bl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bB",viewMatrix:"f"}},hl={src:`
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
    `,attributes:{triangleVertex:"c7"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",triangleVertexPositions:"bB",viewMatrix:"f"}},ma=function(e){var r=Dt(e),n=r.a,a=r.b,t=r.c,i=Rn(n),c=Rn(a),l=Rn(t);return gr({dS:i.gq,dT:c.gq,dU:l.gq,dV:0,dW:i.gu,dX:c.gu,dY:l.gu,dZ:0,d_:i.dg,d$:c.dg,d0:l.dg,d1:0,d2:0,d3:0,d4:0,d5:0})},T2=$(function(e,r){return{$:2,a:e,b:r}}),k2=T2({dv:3,dF:0,ee:4}),nt=k2(g([M({c7:0},{c7:1},{c7:2})])),M2=$(function(e,r){var n=z2(r),a=X(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.D,A;var t=e.b.a;return o(Ae,a,ue(function(_,x,D,H,N,R,I,U){return z(ge,m(Ne,H,0,U),bl,nv,nt,{aD:t,b:D,c:x,d:R,e:_,bB:ma(r),f:N})}));case 1:if(e.b.$)return e.a,A;var i=e.b.a,c=e.c;return o(Ae,a,ue(function(_,x,D,H,N,R,I,U){return z(ge,m(Ne,H,0,U),bl,iv,nt,{aX:o(fc,to(c),i),b:D,c:x,d:R,e:_,bB:ma(r),f:N})}));case 2:e.a;var l=e.b,s=e.c,u=o(sv,l,s);if(u.$)return A;var v=u.a;return o(Ae,a,ue(function(_,x,D,H,N,R,I,U){var E=I.a,Q=I.b;return z(ge,m(Ne,H,0,U),hl,cv,nt,{R:Q,bo:E.bo,bW:E.bW,bX:E.bX,bY:E.bY,cB:v,b:D,c:x,d:R,e:_,bB:ma(r),f:N})}));default:e.a;var f=e.b,d=e.c,p=e.d,s=e.e,b=S(dv,f,d,p,s);if(b.$)return A;var h=b.a,C=b.b,L=b.c;return o(Ae,a,ue(function(_,x,D,H,N,R,I,U){var E=I.a,Q=I.b;return z(ge,m(Ne,H,0,U),hl,fv,nt,{cg:h,R:Q,bo:E.bo,bW:E.bW,bX:E.bX,bY:E.bY,cF:L,b:D,c:x,d:R,c0:C,e:_,bB:ma(r),f:N})}))}}),D2=function(){var e=g([{a8:o(Je,0,1)},{a8:o(Je,1,1)},{a8:o(Je,2,1)},{a8:o(Je,0,-1)},{a8:o(Je,1,-1)},{a8:o(Je,2,-1)}]),r=g([M(0,1,2),M(3,5,4),M(3,4,1),M(3,1,0),M(4,5,2),M(4,2,1),M(5,3,0),M(5,0,2)]);return o(Ga,e,r)}(),j2={src:`
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
    `,attributes:{triangleShadowVertex:"a8"},uniforms:{modelMatrix:"b",modelScale:"c",projectionMatrix:"d",sceneProperties:"e",shadowLight:"b9",triangleVertexPositions:"bB",viewMatrix:"f"}},_l=function(e){return oo(ue(function(r,n,a,t,i,c,l,u){return z(ge,o(gc,t,u),j2,mc,D2,{b:a,c:n,d:c,e:r,b9:l,bB:ma(e),f:i})}))},A2=q(function(e,r,n,a){var t=o(M2,n,a),i=y(e,r);return i.a?i.b?Na(g([t,_l(a)])):t:i.b?_l(a):A}),B2=$(function(e,r){return S(A2,!0,!0,e,r)}),F2=P(function(e,r,n){return M(e,r,n)}),gt=$(function(e,r){var n=r.a,a=r.b,t=r.c;return o(B2,e,m(F2,m(vt,n.gq,n.gu,n.dg),m(vt,a.gq,a.gu,a.dg),m(vt,t.gq,t.gu,t.dg)))}),V2=function(e){return o(gt,o(mn,e,ao),M(m(qe,0,0,0),m(qe,.1,0,0),m(qe,0,.1,0)))},q2=$(function(e,r){if(o(ra,"draw ball trail",e)){var n=Ea(r.I).ce;return Re(o(Y,function(a){return o(io,a.gu,o(gn,a.gq,V2(e)))},n.gf))}else return Re(w)}),E2=$(function(e,r){return o(io,r.aI.gu,o(gn,r.aI.gq,o($i,o(mn,e,ic),.2)))}),W2=function(e){var r=function(){if(e.b){e.a;var n=e.b;return n}else return w}();return m(Wt,Zt,e,r)},R2=$(function(e,r){var n=r.aj;if(n.$===1){var a=n.a;return Re(o(Y,m(xv,e,ao,.2),W2(a)))}else return Re(w)}),zo=$(function(e,r){var n=e.a,a=e.b,t=e.c;return{gq:r.gq+n,gu:r.gu+a,dg:r.dg+t}}),N2=$(function(e,r){return{gq:e,gu:r}}),G2=$(function(e,r){var n=e,a=r;return a.gq*n.gu-a.gu*n.gq}),yl=$(function(e,r){var n=e,a=r;return{gq:a.gq-n.gq,gu:a.gu-n.gu}}),H2=function(e){var r=e;return r},zv=function(e){var r=H2(e),n=r.a,a=r.b,t=r.c,i=o(yl,n,a),c=o(yl,n,t);return o(Pe,.5,o(G2,c,i))},Tv=P(function(e,r,n){return M(e,r,n)}),I2=function(e){return m(Te,sn,se,e)},kv=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,t=e.b,a=t.a,i=t.b,c=$(function(f,d){return zv(m(Tv,r,f,d))}),l=m(Wt,c,o(T,a,i),i);return I2(l)}else{var r=e.a,n=e.b,a=n.a;return se}else return e.a,se;else return se},U2=function(e){return o(ba,se,kv(e))?e:ie(e)},Mv=$(function(e,r){var n=e,a=r;return J(a,n)>-1}),J2=function(e){return o(Mv,se,kv(e))?e:ie(e)},O2=$(function(e,r){return{a1:o(Y,U2,e),a5:J2(r)}}),X2=function(e){return o(O2,w,e)},Wr=function(e){var r=e;return r.gq},Rr=function(e){var r=e;return r.gu},To=$(function(e,r){return{gq:e(Wr(r)),gu:e(Rr(r))}}),Cn=$(function(e,r){var n=e,a=r;return J(a,n)>0}),At=P(function(e,r,n){return zv(m(Tv,e.ep,r.ep,n.ep))}),Y2=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var t=n.a,i=n.b;if(o(Cn,se,m(At,t,r.g,e))){var a=M(t.ft,r.g.ft,e.ft),c=e,l={g:t,n:i,j:r.j,bi:o(T,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:o(T,r.g,r.n),j:r.j,bi:r.bi}}else if(o(Cn,se,m(At,r.j,r.g,e))){var a=M(r.j.ft,r.g.ft,e.ft);return{g:e,n:w,j:r.j,bi:o(T,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),Z2=$(function(e,r){e:for(;;){var n=r.n;if(n.b){var t=n.a,i=n.b;if(o(Cn,se,m(At,e,r.g,t))){var a=M(e.ft,r.g.ft,t.ft),c=e,l={g:t,n:i,j:r.j,bi:o(T,a,r.bi)};e=c,r=l;continue e}else return{g:e,n:o(T,r.g,r.n),j:r.j,bi:r.bi}}else if(o(Cn,se,m(At,e,r.g,r.j))){var a=M(e.ft,r.g.ft,r.j.ft);return{g:e,n:w,j:r.j,bi:o(T,a,r.bi)}}else return{g:e,n:g([r.g]),j:r.j,bi:r.bi}}}),Q2=$(function(e,r){var n=e,a=r;return o(Ri,n,a)}),K2=$(function(e,r){var n=e,a=r;return J(a,n)<0}),ka=$(function(e,r){var n=Rr(r),a=Rr(e),t=Wr(r),i=Wr(e);return o(K2,n,a)?0:o(Cn,n,a)?2:o(Q2,t,i)}),Bt=function(e){return e},Dv=sf,e_=$(function(e,r){var n=P(function(a,t,i){e:for(;;)if(t.b){var l=t.a,u=t.b,c=M(e.ft,a.ft,l.ft),v=l,f=u,d=o(T,c,i);a=v,t=f,i=d;continue e}else{var c=M(e.ft,a.ft,r.j.ft);return o(T,c,i)}});return{g:e,n:w,j:r.g,bi:m(n,r.g,r.n,r.bi)}}),r_=$(function(e,r){var n=P(function(a,t,i){e:for(;;)if(t.b){var l=t.a,u=t.b,c=M(a.ft,e.ft,l.ft),v=l,f=u,d=o(T,c,i);a=v,t=f,i=d;continue e}else{var c=M(a.ft,e.ft,r.j.ft);return o(T,c,i)}});return{g:e,n:w,j:r.g,bi:m(n,r.g,r.n,r.bi)}}),n_=function(e){var r=o(Dv,$(function(u,v){return o(ka,v.ep,u.ep)}),e);if(r.b)if(r.b.b){var n=r.a,a=r.b,t=a.a,i=a.b,c=$(function(u,v){return ve(u.a3,v.j.ft)?o(r_,u,v):ve(v.j.a3,u.ft)?o(e_,u,v):ve(u.a3,v.g.ft)?o(Z2,u,v):ve(v.g.a3,u.ft)?o(Y2,u,v):Bt(v)}),l={g:t,n:w,j:n,bi:w};return m(Te,c,l,i).bi}else return r.a,w;else return w},Ha=$(function(e,r){return o(Ar,e,r.Q)}),a_=$(function(e,r){var n=r;return m(un,e,0,n)}),t_=he(function(e,r,n,a,t){e:for(;;){var i=t.a,c=t.b,l=o(Ha,a,e);if(l.$)return Bt(y(i,w));var u=l.a,v=o(Ar,u.ai,r);if(v.$)return Bt(y(i,w));var f=v.a,d=o(a_,a,i),p=u.at,s={ft:u.ai,a3:u.aq,ep:f},b=o(T,s,c);if(ve(p,n))return y(d,ie(b));var h=e,C=r,L=n,_=p,x=y(d,b);e=h,r=C,n=L,a=_,t=x;continue e}}),o_=Qt,at=af,i_=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d,c=function(l){if(l.$){var v=l.a;return hn(o(at,e,v))}else{var u=l.a;return ln(o(at,c,u))}};return S(Fr,n,a,o(at,c,t),o(at,e,i))}),c_=$(function(e,r){var n=o(Kn,e,r);return!n.$}),l_=$(function(e,r){var n=r;return o(c_,e,n)}),u_=function(e){var r=o(i_,function(c){return c.ep},e.am),n=$(function(c,l){var u=l,v=u.a,f=u.b;if(o(l_,c,v))return l;var d=z(t_,e,r,c,c,y(v,w)),p=d.a,s=d.b;return y(p,o(T,s,f))}),a=o(pn,0,$c(e.Q)-1),t=m(Te,n,y(o_,w),a),i=t.b;return y(r,i)},$_=w,Dn=$(function(e,r){if(r.$)return Bt(e);var n=r.a;return n}),v_=he(function(e,r,n,a,t){if(r.$===1)return W;var i=r.a;if(n.$===1)return W;var c=n.a;if(a.$===1)return W;var l=a.a;if(t.$===1)return W;var u=t.a;return Z(S(e,i,c,l,u))}),vi=ef,jv=Ov,Nn=Kv,_a=q(function(e,r,n,a){var t=yn&r>>>e;if(J(t,Pr(a))>-1){if(e===5)return o(vi,hn(n),a);var i=ln(S(_a,e-$r,r,n,bn));return o(vi,i,a)}else{var c=o(za,t,a);if(c.$){var i=ln(S(_a,e-$r,r,n,jv(c)));return m(Nn,t,i,a)}else{var l=c.a,i=ln(S(_a,e-$r,r,n,l));return m(Nn,t,i,a)}}}),fi=$(function(e,r){var n=r.a,a=r.b,t=r.c,i=r.d,c=Pr(i),l=Pr(e),u=n+(l-c);if(ve(l,pe)){var v=J(u>>>$r,1<<a)>0;if(v){var f=a+$r,d=S(_a,f,n,e,jv(ln(t)));return S(Fr,u,f,d,bn)}else return S(Fr,u,a,S(_a,a,n,e,t),bn)}else return S(Fr,u,a,t,e)}),Cl=$(function(e,r){var n=r.d;return o(fi,o(vi,e,n),r)}),Pl=$(function(e,r){return V(r,{at:e})}),wl=$(function(e,r){return V(r,{B:e})}),Av=q(function(e,r,n,a){var t=yn&r>>>e,i=o(za,t,a);if(i.$){var u=i.a,v=m(Nn,yn&r,n,u);return m(Nn,t,hn(v),a)}else{var c=i.a,l=S(Av,e-$r,r,n,c);return m(Nn,t,ln(l),a)}}),f_=P(function(e,r,n){var a=n.a,t=n.b,i=n.c,c=n.d;return e<0||J(e,a)>-1?n:J(e,Z$(a))>-1?S(Fr,a,t,i,m(Nn,yn&e,r,c)):S(Fr,a,t,S(Av,t,e,r,i),c)}),tt=P(function(e,r,n){var a=o(Ar,e,n);if(a.$)return n;var t=a.a;return m(f_,e,r(t),n)}),Un=P(function(e,r,n){var a=$c(n.Q);return o(Dn,y(n,-1),z(v_,q(function(t,i,c,l){return y(V(n,{Q:o(Cl,{aq:e,at:e,B:l.B,ai:r.ft},o(Cl,{aq:r.ft,at:r.b1,B:c.B,ai:e},m(tt,l.B,Pl(a+1),m(tt,c.B,Pl(a),m(tt,r.b1,wl(a),m(tt,e,wl(a+1),n.Q))))))}),a)}),o(Ar,e,n.am),o(Ar,r.ft,n.am),o(Ar,e,n.Q),o(Ar,r.b1,n.Q)))}),Jn=$(function(e,r){return o(Kn,e,r.bm)}),s_=hr,Ll=$(function(e,r){return o(Ar,e,r.am)}),d_=P(function(e,r,n){if(r.$===1)return W;var a=r.a;if(n.$===1)return W;var t=n.a;return Z(o(e,a,t))}),Bv=P(function(e,r,n){return o(Dn,n,o(Vr,function(a){return m(d_,$(function(t,i){var c=s_(y(t.ep,i.ep));return V(n,{bh:o(e,y(r,c),n.bh)})}),o(Ll,a.ai,n),o(Ll,a.aq,n))},o(Ha,r,n)))}),m_=$(function(e,r){var n=r;return o(eo,Qm(e),n)}),bc=Bv(m_),g_=$(function(e,r){return o(Dn,r,o(Vr,function(n){return o(ne,function(a){var t=a.a2?m(Un,e,a,r).a:r;return o(bc,n.B,t)},o(Jn,n.B,r))},o(Ha,e,r)))}),On=P(function(e,r,n){return{ft:e,a2:n,b1:r}}),p_=$(function(e,r){var n=r;return o(T,e,n)}),hc=Bv(p_),Xn=P(function(e,r,n){return V(n,{bm:m(un,e,r,n.bm)})}),b_=$(function(e,r){return o(Dn,r,o(Vr,function(n){return o(ne,function(a){var t=a.a2?m(Un,e,a,r).a:r;return m(Xn,e,m(On,e,e,!1),o(hc,e,o(bc,n.B,t)))},o(Jn,n.B,r))},o(Ha,e,r)))}),h_=function(e){var r=e;return r},__=$(function(e,r){var n=r,a=Rr(e),t=Wr(e);return o(ne,function(i){i.a;var c=i.b,l=c.a;return c.b,l},m(Te,$(function(i,c){var l=h_(i.b),u=l.a,v=l.b,f=Wr(u),d=Rr(u),p=Wr(v),s=Rr(v),b=function(){if(ve(d,s))return o(xe,o(Ee,f,p),t);var L=o(ui,o(xe,d,a),o(xe,d,s));return o(xe,o(sn,o(Pe,L,o(xe,f,p)),f),t)}();if(o(Mv,se,b)){if(c.$===1)return Z(y(b,i));var h=c.a,C=h.a;return h.b,o(ba,C,b)?Z(y(b,i)):c}else return c}),W,n))}),_c=$(function(e,r){return o(__,e,r.bh)}),y_=P(function(e,r,n){return o(Dn,n,o(Vr,function(a){return o(Vr,function(t){var i=t.a2?m(Un,e,t,n).a:n,c=o(bc,a.B,i);return o(Vr,function(l){return o(ne,function(u){var v=u.a2?m(Un,e,u,c):y(c,e),f=v.a,d=v.b;return m(Xn,l,m(On,e,d,!0),f)},o(Jn,l,n))},o(_c,r,c))},o(Jn,a.B,n))},o(Ha,e,n)))}),C_=P(function(e,r,n){return o(Dn,n,o(Vr,function(a){return o(ne,function(t){var i=t.a2?m(Un,e,t,n):y(n,e),c=i.a,l=i.b;return m(Xn,a,m(On,e,l,!1),c)},o(Jn,a,n))},o(_c,r,n)))}),P_=P(function(e,r,n){return o(Dn,n,o(Vr,function(a){return o(ne,function(t){var i=m(Un,e,t,n),c=i.a,l=i.b;return m(Xn,e,m(On,e,e,!1),o(hc,e,m(Xn,a,m(On,e,l,!1),c)))},o(Jn,a,n))},o(_c,r,n)))}),w_=$(function(e,r){return m(Xn,e,m(On,e,e,!1),o(hc,e,r))}),Fv=of,Vv=tf,Sl=$(function(e,r){var n=Pr(e),a=pe-Pr(r.p)-n,t=m(Fv,pe,r.p,e);return a<0?{A:o(T,hn(t),r.A),m:r.m+1,p:m(Vv,a,n,e)}:a?{A:r.A,m:r.m,p:t}:{A:o(T,hn(t),r.A),m:r.m+1,p:bn}}),xl=$(function(e,r){r.a,r.c;var n=r.d,a=Pr(e),t=pe-Pr(n)-a,i=m(Fv,pe,n,e),c=o(fi,i,r);if(t<0){var l=m(Vv,t,a,e);return o(fi,l,c)}else return c}),En=rf,L_=function(e){var r=e.a,n=e.c,a=e.d,t=$(function(i,c){if(i.$)return o(T,i,c);var l=i.a;return m(En,t,c,l)});return{A:m(En,t,w,n),m:r/pe|0,p:a}},S_=$(function(e,r){e.d;var n=r.a,a=r.c,t=r.d;if(J(n,pe*4)<1){var i=$(function(c,l){if(c.$){var v=c.a;return o(xl,v,l)}else{var u=c.a;return m(En,i,l,u)}});return o(xl,t,m(En,i,e,a))}else{var i=$(function(l,u){if(l.$){var f=l.a;return o(Sl,f,u)}else{var v=l.a;return m(En,i,u,v)}});return o(ji,!0,o(Sl,t,m(En,i,L_(e),a)))}}),x_=P(function(e,r,n){e:for(;;)if(r.b){var a=r.a,t=r.b,i=ve(a,e)?n:o(T,a,n),c=a,l=t,u=i;e=c,r=l,n=u;continue e}else return n}),z_=function(e){if(e.b){var r=e.a,n=e.b,a=m(x_,r,n,w);if(a.b){var t=a.a,i=a.b;return ve(t,r)?o(T,r,ie(i)):o(T,r,ie(a))}else return g([r])}else return w},zl=$(function(e,r){var n=e,a=r;return a*n}),Tl=P(function(e,r,n){var a=Rr(n),t=Rr(r),i=Rr(e),c=Wr(n),l=Wr(r),u=Wr(e),v=o(zl,o(xe,l,c),o(xe,i,t)),f=o(zl,o(xe,t,a),o(xe,u,l)),d=o(xe,v,f);return o(Cn,se,d)}),kl=P(function(e,r,n){var a=o(ka,r,e),t=o(ka,r,n);return a===2&&t===2?m(Tl,e,r,n)?0:4:!a&&!t?m(Tl,e,r,n)?1:5:a===2?3:2}),T_=function(e){if(e.b)if(e.b.b)if(e.b.b.b){var r=e.a,t=e.b,a=t.a,i=t.b,c=i.a,l=i.b,u=m(Te,Nt,c,l),v=q(function(p,s,b,h){e:for(;;)if(b.b){var L=b.a,_=b.b,x={ar:m(kl,p,s,L),ep:s},D=s,H=L,N=_,R=o(T,x,h);p=D,s=H,b=N,h=R;continue e}else{var C={ar:m(kl,p,s,r),ep:s};return ie(o(T,C,h))}});return S(v,u,r,o(T,a,o(T,c,l)),w)}else{var r=e.a,n=e.b,a=n.a;return o(ka,r,a)===2?g([{ar:4,ep:r},{ar:5,ep:a}]):g([{ar:5,ep:r},{ar:4,ep:a}])}else return e.a,w;else return w},k_=function(e){var r=e.a5,n=e.a1,a=o(Y,function(c){return z_(c)},o(T,r,n)),t=m(Te,$(function(c,l){var u=l.a,v=l.b,f=Cr(c),d=o(pu,f,function(p){return p?ve(p,f-1)?{aq:u,at:u,B:u+p-1,ai:u+p}:{aq:u+p+1,at:u+p+1,B:u+p-1,ai:u+p}:{aq:u+1,at:u+1,B:u+f-1,ai:u}});return y(u+f,o(S_,v,d))}),y(0,Mi),a).b,i=Be(o(Y,T_,a));return{Q:t,am:i}},M_=function(e){var r=$(function(u,v){var f=u.a,d=u.b,p=d.ar;switch(p){case 0:return o(w_,f,v);case 1:return o(g_,f,v);case 3:return m(C_,f,d.ep,v);case 2:return o(b_,f,v);case 4:return m(P_,f,d.ep,v);default:return m(y_,f,d.ep,v)}}),n=k_(e),a=n.am,t=n.Q,i={bh:$_,Q:t,bm:Qt,am:xa(a)},c=o(Dv,$(function(u,v){var f=u.b,d=v.b;return o(ka,d.ep,f.ep)}),o(Rt,Zt,a)),l=m(Te,r,i,c);return xa(a),u_(l)},D_=function(e){var r=M_(e),n=r.a,a=r.b;return o(vc,n,Be(o(Y,n_,a)))},j_=function(e){return D_(e)},A_=function(e){return o(Y,function(r){var n=r.a,a=r.b,t=r.c;return M(o(To,fn,n),o(To,fn,a),o(To,fn,t))},Q$(j_(X2(o(Y,function(r){return o(N2,r.gq,r.gu)},e)))))},B_=$(function(e,r){var n=o(mn,e,ao),a=2,t=function(v){var f=v.gq,d=v.gu;return m(qe,f,d,a)},i=function(v){var f=v.a,d=v.b;return Re(g([o(gt,n,M(t(f),t(d),o(zo,M(0,0,-a),t(f)))),o(gt,n,M(o(zo,M(0,0,-a),t(f)),t(d),o(zo,M(0,0,-a),t(d))))]))},c=function(v){return Re(o(Y,i,Ji(v.en)))},l=function(v){return Re(o(Y,function(f){var d=f.a,p=f.b,s=f.c;return o(gt,n,M(t(d),t(p),t(s)))},A_(v.en)))},u=function(v){return Re(g([l(v),c(v)]))};return Re(o(Y,u,Ea(r.I).fV))}),qv=function(e){return e},F_=function(e){return qv(1.2*o(Zr,2,e))},ko=ro({gq:.37208,gu:.37529}),V_=$(function(e,r){return{$:2,a:e,b:r}}),Ev=function(e){return{$:0,a:e}},ot=function(e){var r=e;return r},q_=function(e){var r=e;return r.eZ},Wv=Ev(sa.a),E_=$(function(e,r){var n=$(function(a,t){var i=t.a,c=t.b;return e(a)?y(o(T,a,i),c):y(i,o(T,a,c))});return m(Ir,n,y(w,w),r)}),W_=function(e){var r=e;return gr({dS:r.gq,dT:r.b6,dU:0,dV:0,dW:r.gu,dX:r.bR,dY:0,dZ:0,d_:r.dg,d$:r.bJ,d0:0,d1:0,d2:r.c8,d3:r.cV,d4:0,d5:0})},R_=ue(function(e,r,n,a,t,i,c,l){var u=o(E_,q_,g([ot(e),ot(r),ot(n),ot(a)])),v=u.a,f=u.b;if(v.b){var d=ce(v,f);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var p=d.a,s=d.b,b=s.a,h=s.b,C=h.a,L=h.b,_=L.a;return o(V_,o(Y,W_,v),{bo:o(er,p,b),bW:o(er,C,_),bX:o(er,t,i),bY:o(er,c,l)})}else return Wv}else return Ev({bo:o(er,e,r),bW:o(er,n,a),bX:o(er,t,i),bY:o(er,c,l)})}),N_=q(function(e,r,n,a){return mi(R_,e,r,n,a,Ue,Ue,Ue,Ue)}),G_={$:5},H_=G_,I_=ro({gq:.44757,gu:.40745}),U_=function(e){return e},Ml=function(e){return e},Mo=function(e){return e},J_={$:1},O_=J_,X_=$(function(e,r){var n=e,a=oa(r.ep),t=a.gq,i=a.gu,c=a.dg,l=o(no,r.bT,r.aS),u=l;return{bJ:Mn(u),eZ:n,bR:kn(u),cV:0,b6:Tn(u),c8:2,gq:t,gu:i,dg:c}}),Dl=function(e){return o(X_,W$(!0),{aS:e.aS,bT:e.bT,ep:Hi(e.ep)})},Do=function(e){return e/255},jl=P(function(e,r,n){return S(Tr,Do(e),Do(r),Do(n),1)}),Al=function(e){var r=e;return r},Y_=function(e){e:for(;;){if(ve(e.dG,se)&&ve(e.dH,se))return Ue;if(o(Cn,ze(e.dG),ze(e.dH))){var r={aS:e.aS,dG:e.dH,dH:e.dG,eJ:Tt(e.eJ)};e=r;continue e}else{var n=ee(Al(e.dH)/Er),a=ee(Al(e.dG)/Er),t=Ye(e.eJ),i=t.gq,c=t.gu,l=t.dg,u=o(no,Y$(1),e.aS),v=u;return{bJ:a*Mn(v),eZ:!1,bR:a*kn(v),cV:n/a,b6:a*Tn(v),c8:3,gq:i,gu:c,dg:l}}}},Z_=function(e){return Y_({aS:e.aS,dG:e.dG,dH:e.dH,eJ:o(oc,Xe(e.bI),Xe(e.bP))})},Q_=function(e){return o(q$,{eQ:e.eQ,eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU},g([{aZ:e.aZ,ff:e.ff,fC:e.fC,ge:e.ge,gn:e.gn}]))},K_=ro({gq:.31271,gu:.32902}),ey=function(e){return ze(e)},ry={$:0},ny=ry,ay=function(e){return Q_({eQ:E$(e.bg),eU:e.eU,ao:e.ao,$7:e.$7,aU:e.aU,aZ:e.aZ,ff:ey(qv(80)),fC:Wv,ge:ny,gn:K_})},ty=$(function(e,r){return ay({eU:y$(e.eU),ao:e.ao,$7:Ge(e.$7),bg:e.bg,aU:y(kt(Qe(e.aL.go)),kt(Qe(e.aL.fo))),aZ:r})}),oy=$(function(e,r){var n=Tb({bI:0,aS:l3(U_(2e3)),bP:Nr(90),bT:Mo(240)}),a=Dl({aS:ko,bT:Ml(6e3),ep:{gq:2,gu:3,dg:3}}),t=Z_({bI:0,aS:ko,bP:Nr(90),dG:Mo(30),dH:Mo(30)}),i=Dl({aS:I_,bT:Ml(6e3),ep:{gq:-2,gu:4,dg:3}}),c=o(ra,"unlit",e)?ty({eU:m(jl,46,46,46),ao:r.ao,$7:.1,bg:e.bg,aL:e.aL}):xb({eQ:O_,eV:m(jl,46,46,46),ao:r.ao,$7:.1,bg:e.bg,ff:F_(6),fC:S(N_,i,a,n,t),aL:e.aL,ge:H_,gn:ko});return c(g([i2(e),o(x2,e,r),o(q2,e,r),o(B_,e,r),o(E2,e,r),o(R2,e,r)]))}),iy=$(function(e,r){return o(oy,e,r)}),cy=function(e){return{$:3,a:e}},ly=function(e){return{$:4,a:e}},uy=function(e){return{$:5,a:e}},$y={$:0},vy={$:2},fy={$:3},sy={$:1},dy=function(e){return o(He,"autocomplete",e?"on":"off")},Bl=function(e){var r=e;return Cr(r.l)},my={$:6},Rv=$(function(e,r){return o(Qr,g([k("m-1 p-2 rounded text-white60 bg-black40 hover:bg-black80"),o(oe,"transition","background-color 0.3s ease"),mr(e)]),g([ye(r)]))}),gy=Hr("pre"),py=function(e){var r=e;return o(F,w,g([o(Rv,my,"Export"),o(gy,g([k("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text")]),g([ye(r.c6)]))]))},by={$:7},hy=function(e){return{$:8,a:e}},_y=function(e){return o(zr,"cols",De(e))},yy=function(e){return o(zr,"rows",De(e))},Cy=Hr("textarea"),Py=function(e){var r=e;return o(F,w,g([o(Rv,by,"Import"),o(Cy,g([k("w-full p-2 h-28 overflow-y-scroll text-white60 text-[8px] leading-[9px] bg-black40 select-text"),yy(150),_y(10),Aa(hy),Ba(r.ca)]),g([ye("todo")]))]))},wy=function(e){return o(Ni,"mousedown",$e(e))},Ly=He("placeholder"),Sy=function(e){var r=e,n=o(F,g([k("inline-block ml-1 w-4 text-white40 hover:text-white80"),mr(fy),va("Move Level Up")]),g([lr.fH])),a=o(F,g([k("inline-block ml-1 w-4 text-white40 hover:text-white80"),mr(vy),va("Move Level Down")]),g([lr.fG])),t=o(F,g([k("inline-block ml-1 w-4 text-white40 hover:text-red-400"),mr(sy),va("Delete Level")]),g([lr.gg])),i=o(Qr,g([k("inline-block ml-1 w-4 text-white40 hover:text-white80"),mr($y),va("Duplicate Level")]),g([lr.fU])),c=$(function(l,u){return o(Qr,g([k("w-full h-8 p-2 text-left text-white80 border-b border-white20"),k(ve(l,Bl(r.U))?"bg-black40 hover:bg-black60 active:bg-black80":"hover:bg-black20"),o(oe,"transition","background-color 0.3s ease"),wy(uy(l))]),g([ve(l,Bl(r.U))?o(F,w,g([o(Sa,g([k("w-[100px] bg-transparent"),Ly("Enter Level Name"),Ba(Ui(r.U).fJ),Aa(ly),dy(!1)]),w),o(F,g([k("float-right")]),g([i,n,a,t]))])):o(F,g([k("whitespace-nowrap")]),g([ye(u)]))]))});return o(F,g([k("w-60 text-xs")]),g([o(F,g([k("w-full h-[200px] overflow-hidden overflow-y-scroll")]),o(Rt,$(function(l,u){var v=u.fJ;return o(c,l,v)}),Zi(r.U))),o(F,g([k("p-4 border-[0.5px] border-white20")]),g([py(r)])),o(F,g([k("p-4 border-[0.5px] border-white20")]),g([Py(r)]))]))},xy=function(e){return o(F,w,g([o(F,g([k("text-lg")]),g([ye("Pages")])),o(F,g([k("p-4")]),g([o(wa,cy,Sy(e.I))]))]))},zy=function(e){return{$:2,a:e}},Ty={$:1},Fl=$(function(e,r){return o(Qr,g([k("m-1 p-2 rounded bg-black40 hover:bg-black80"),mr(e)]),g([ye(r)]))}),ky=$(function(e,r){return o(F,w,g([o(F,g([k("h-40")]),g([o(F,g([k("text-lg")]),g([ye("Polygon editor")])),function(){var n=r.aj;if(n.$===1){var a=n.a;return o(F,g([k("p-2")]),g([o(F,w,g([ye("Now, draw your polygon in the counter-clockwise direction by holding the shift key pressed. ")])),o(F,w,g([ye("After you are finished drawing, click the button below.")])),o(Fl,zy(a),"Finish drawing polygon")]))}else return o(Fl,Ty,"Start drawing a polygon")}()]))]))}),My=$(function(e,r){return r.aE?o(F,g([k("fixed top-0 right-0 w-[300px]"),o(oe,"height",le(e.aL.fo-80)+"px"),k("bg-black20"),k("border-[0.5px] border-white20"),k("overflow-y-scroll"),k("text-xs text-white60")]),g([o(F,g([k("p-4 border-[0.5px] border-white20")]),g([o(ky,e,r)])),o(F,g([k("p-4 border-[0.5px] border-white20")]),g([xy(r)]))])):o(F,w,w)}),Dy={$:0},Vl={dp:o(Io,g([Uo("0 0 24 24"),Ho("currentColor")]),g([o(Se,g([Le("M12 9.71428L18.8571 2.85714L21.1429 5.14285L14.2857 12L21.1429 18.8571L18.8571 21.1428L12 14.2857L5.14286 21.1428L2.85715 18.8571L9.71429 12L2.85715 5.14285L5.14286 2.85714L12 9.71428Z")]),w)])),du:o(Io,g([Uo("0 0 24 24"),Ho("currentColor")]),g([o(Se,g([Le("M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z")]),w)]))},jy=function(e){return o(F,g([k("fixed top-0 right-0 p-2 text-white20 hover:text-white active:text-white60")]),g([o(Qr,g([k("w-6"),mr(Dy)]),g([e.aE?Vl.dp:Vl.du]))]))},Ay=$(function(e,r){return o(F,w,g([o(My,e,r),jy(r)]))}),By=We(Tp,iy,N1,j0,x0,Ay,i3);const Fy={Main:{init:By(o(B,function(e){return $e({fv:e})},o(j,"inputs",o(B,function(e){return o(B,function(r){return o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return $e({e0:c,bg:i,dt:t,dL:a,em:n,aL:r,gm:e})},o(j,"clock",ae))},o(j,"devicePixelRatio",ae))},o(j,"dt",ae))},o(j,"keyboard",o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return o(B,function(f){return o(B,function(d){return $e({eP:d,e2:f,ds:v,fa:u,fz:l,fW:c,f_:i,eA:t,eI:a})},o(j,"alt",re))},o(j,"control",re))},o(j,"down",re))},o(j,"downs",_r(Hn)))},o(j,"left",re))},o(j,"pressedKeys",_r(Hn)))},o(j,"right",re))},o(j,"shift",re))},o(j,"up",re))))},o(j,"pointer",o(B,function(n){return o(B,function(a){return o(B,function(t){return o(B,function(i){return o(B,function(c){return o(B,function(l){return o(B,function(u){return o(B,function(v){return $e({ds:v,fw:u,fF:l,f$:c,f0:i,eI:t,gq:a,gu:n})},o(j,"down",re))},o(j,"isDown",re))},o(j,"move",re))},o(j,"rightDown",re))},o(j,"rightUp",re))},o(j,"up",re))},o(j,"x",ae))},o(j,"y",ae))))},o(j,"screen",o(B,function(r){return o(B,function(n){return $e({fo:n,go:r})},o(j,"height",ae))},o(j,"width",ae))))},o(j,"wheel",o(B,function(e){return o(B,function(r){return $e({e5:r,e6:e})},o(j,"deltaX",ae))},o(j,"deltaY",ae)))))))(0)}},G={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},Vy=e=>{const r=s=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(s.code),n=s=>["AltLeft","AltRight"].includes(s.code),a=s=>["ShiftLeft","ShiftRight"].includes(s.code),t=s=>s.code=="ArrowLeft",i=s=>s.code=="ArrowRight",c=s=>s.code=="ArrowUp",l=s=>s.code=="ArrowDown",u=s=>s.button==0,v=s=>s.button==2;function f(s){s.keyboard.pressedKeys=[],s.keyboard.control=!1,s.keyboard.alt=!1,s.keyboard.shift=!1,s.keyboard.left=!1,s.keyboard.right=!1,s.keyboard.up=!1,s.keyboard.down=!1,s.pointer.isDown=!1}function d(s){s.keyboard.downs=[],s.pointer.down=!1,s.pointer.move=!1,s.pointer.up=!1,s.pointer.rightDown=!1,s.pointer.rightUp=!1,s.wheel.deltaX=0,s.wheel.deltaY=0}window.addEventListener("keydown",s=>{s.repeat||(G.keyboard.downs.push(s.code),G.keyboard.pressedKeys.push(s.code),r(s)&&(G.keyboard.control=!0),n(s)&&(G.keyboard.alt=!0),a(s)&&(G.keyboard.shift=!0),t(s)&&(G.keyboard.left=!0),i(s)&&(G.keyboard.right=!0),c(s)&&(G.keyboard.up=!0),l(s)&&(G.keyboard.down=!0))}),window.addEventListener("keyup",s=>{G.keyboard.pressedKeys=G.keyboard.pressedKeys.filter(b=>b!=s.code),r(s)&&(G.keyboard.control=!1,G.keyboard.pressedKeys=[]),n(s)&&(G.keyboard.alt=!1),a(s)&&(G.keyboard.shift=!1),t(s)&&(G.keyboard.left=!1),i(s)&&(G.keyboard.right=!1),c(s)&&(G.keyboard.up=!1),l(s)&&(G.keyboard.down=!1)}),window.addEventListener("pointerdown",s=>{G.pointer.x=-.5*G.screen.width+s.pageX,G.pointer.y=.5*G.screen.height-s.pageY,u(s)&&(G.pointer.down=!0,G.pointer.isDown=!0),v(s)&&(G.pointer.rightDown=!0)}),window.addEventListener("pointermove",s=>{G.pointer.move=!0,G.pointer.x=-.5*G.screen.width+s.pageX,G.pointer.y=.5*G.screen.height-s.pageY}),window.addEventListener("pointerup",s=>{u(s)&&(G.pointer.up=!0,G.pointer.isDown=!1),v(s)&&(G.pointer.rightUp=!0)}),window.addEventListener("pointercancel",s=>{u(s)&&(G.pointer.up=!0,G.pointer.isDown=!1),v(s)&&(G.pointer.rightUp=!0)}),window.addEventListener("wheel",s=>{G.wheel.deltaX=s.deltaX,G.wheel.deltaY=s.deltaY}),window.addEventListener("blur",s=>{f(G)}),window.addEventListener("focus",s=>{f(G)}),window.addEventListener("visibilitychange",s=>{f(G)}),window.addEventListener("resize",()=>{G.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(p);function p(s){const b=s/1e3,h=b-G.clock;h<.009||(G.dt=h,G.clock=b,e.ports.tick.send(G),d(G)),window.requestAnimationFrame(p)}},qy=()=>{jo("pointerdown"),jo("wheel"),jo("keydown")},jo=e=>{document.addEventListener(e,function(r){var n;r.target&&((n=document.querySelector("#gui"))==null?void 0:n.contains(r.target))&&r.stopPropagation()},!0)},Ey=Fy.Main.init({node:document.querySelector("#app div"),flags:{inputs:G}});qy();Vy(Ey);
