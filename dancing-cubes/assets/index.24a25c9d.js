const Ym=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};Ym();function dn(e,r,n){return n.a=e,n.f=r,n}function v(e){return dn(2,e,function(r){return function(n){return e(r,n)}})}function T(e){return dn(3,e,function(r){return function(n){return function(a){return e(r,n,a)}}})}function O(e){return dn(4,e,function(r){return function(n){return function(a){return function(i){return e(r,n,a,i)}}}})}function Ve(e){return dn(5,e,function(r){return function(n){return function(a){return function(i){return function(o){return e(r,n,a,i,o)}}}}})}function vr(e){return dn(6,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return e(r,n,a,i,o,l)}}}}}})}function Nt(e){return dn(7,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return e(r,n,a,i,o,l,c)}}}}}}})}function be(e){return dn(8,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return e(r,n,a,i,o,l,c,u)}}}}}}}})}function io(e){return dn(9,e,function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return e(r,n,a,i,o,l,c,u,m)}}}}}}}}})}function t(e,r,n){return e.a===2?e.f(r,n):e(r)(n)}function b(e,r,n,a){return e.a===3?e.f(r,n,a):e(r)(n)(a)}function z(e,r,n,a,i){return e.a===4?e.f(r,n,a,i):e(r)(n)(a)(i)}function F(e,r,n,a,i,o){return e.a===5?e.f(r,n,a,i,o):e(r)(n)(a)(i)(o)}function Xe(e,r,n,a,i,o,l){return e.a===6?e.f(r,n,a,i,o,l):e(r)(n)(a)(i)(o)(l)}function oo(e,r,n,a,i,o,l,c){return e.a===7?e.f(r,n,a,i,o,l,c):e(r)(n)(a)(i)(o)(l)(c)}function Ha(e,r,n,a,i,o,l,c,u){return e.a===8?e.f(r,n,a,i,o,l,c,u):e(r)(n)(a)(i)(o)(l)(c)(u)}function Xm(e,r,n,a,i,o,l,c,u,m){return e.a===9?e.f(r,n,a,i,o,l,c,u,m):e(r)(n)(a)(i)(o)(l)(c)(u)(m)}var Km=[];function Zm(e){return e.length}var Qm=T(function(e,r,n){for(var a=new Array(e),i=0;i<e;i++)a[i]=n(r+i);return a}),es=v(function(e,r){for(var n=new Array(e),a=0;a<e&&r.b;a++)n[a]=r.a,r=r.b;return n.length=a,P(n,r)}),rs=v(function(e,r){return r[e]});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=n[o];return i[e]=r,i});v(function(e,r){for(var n=r.length,a=new Array(n+1),i=0;i<n;i++)a[i]=r[i];return a[n]=e,a});T(function(e,r,n){for(var a=n.length,i=0;i<a;i++)r=t(e,n[i],r);return r});var ns=T(function(e,r,n){for(var a=n.length-1;a>=0;a--)r=t(e,n[a],r);return r});v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=e(r[i]);return a});T(function(e,r,n){for(var a=n.length,i=new Array(a),o=0;o<a;o++)i[o]=t(e,r+o,n[o]);return i});T(function(e,r,n){return n.slice(e,r)});T(function(e,r,n){var a=r.length,i=e-a;i>n.length&&(i=n.length);for(var o=a+i,l=new Array(o),c=0;c<a;c++)l[c]=r[c];for(var c=0;c<i;c++)l[c+a]=n[c];return l});v(function(e,r){return r});v(function(e,r){return console.log(e+": "+as()),r});function as(e){return"<internals>"}function ia(e){throw new Error("https://github.com/elm/core/blob/1.0.0/hints/"+e+".md")}function ce(e,r){for(var n,a=[],i=lo(e,r,0,a);i&&(n=a.pop());i=lo(n.a,n.b,0,a));return i}function lo(e,r,n,a){if(e===r)return!0;if(typeof e!="object"||e===null||r===null)return typeof e=="function"&&ia(5),!1;if(n>100)return a.push(P(e,r)),!0;e.$<0&&(e=_u(e),r=_u(r));for(var i in e)if(!lo(e[i],r[i],n+1,a))return!1;return!0}v(ce);v(function(e,r){return!ce(e,r)});function le(e,r,n){if(typeof e!="object")return e===r?0:e<r?-1:1;if(typeof e.$=="undefined")return(n=le(e.a,r.a))||(n=le(e.b,r.b))?n:le(e.c,r.c);for(;e.b&&r.b&&!(n=le(e.a,r.a));e=e.b,r=r.b);return n||(e.b?1:r.b?-1:0)}v(function(e,r){return le(e,r)<0});v(function(e,r){return le(e,r)<1});v(function(e,r){return le(e,r)>0});v(function(e,r){return le(e,r)>=0});var ts=v(function(e,r){var n=le(e,r);return n<0?wu:n?Xp:xu}),Ga=0;function P(e,r){return{a:e,b:r}}function E(e,r,n){return{a:e,b:r,c:n}}function Er(e){return e}function Te(e,r){var n={};for(var a in e)n[a]=e[a];for(var a in r)n[a]=r[a];return n}v(N);function N(e,r){if(typeof e=="string")return e+r;if(!e.b)return r;var n=Br(e.a,r);e=e.b;for(var a=n;e.b;e=e.b)a=a.b=Br(e.a,r);return n}var D={$:0};function Br(e,r){return{$:1,a:e,b:r}}var is=v(Br);function $(e){for(var r=D,n=e.length;n--;)r=Br(e[n],r);return r}function Ht(e){for(var r=[];e.b;e=e.b)r.push(e.a);return r}var os=T(function(e,r,n){for(var a=[];r.b&&n.b;r=r.b,n=n.b)a.push(t(e,r.a,n.a));return $(a)});O(function(e,r,n,a){for(var i=[];r.b&&n.b&&a.b;r=r.b,n=n.b,a=a.b)i.push(b(e,r.a,n.a,a.a));return $(i)});Ve(function(e,r,n,a,i){for(var o=[];r.b&&n.b&&a.b&&i.b;r=r.b,n=n.b,a=a.b,i=i.b)o.push(z(e,r.a,n.a,a.a,i.a));return $(o)});vr(function(e,r,n,a,i,o){for(var l=[];r.b&&n.b&&a.b&&i.b&&o.b;r=r.b,n=n.b,a=a.b,i=i.b,o=o.b)l.push(F(e,r.a,n.a,a.a,i.a,o.a));return $(l)});v(function(e,r){return $(Ht(r).sort(function(n,a){return le(e(n),e(a))}))});v(function(e,r){return $(Ht(r).sort(function(n,a){var i=t(e,n,a);return i===xu?0:i===wu?-1:1}))});v(function(e,r){return e+r});v(function(e,r){return e-r});v(function(e,r){return e*r});v(function(e,r){return e/r});v(function(e,r){return e/r|0});var ls=v(Math.pow);v(function(e,r){return r%e});var cs=v(function(e,r){var n=r%e;return e===0?ia(11):n>0&&e<0||n<0&&e>0?n+e:n}),us=Math.PI,$s=Math.cos,vs=Math.sin,fs=Math.tan;v(Math.atan2);function ms(e){return e}function ss(e){return e===1/0||e===-1/0}var ds=Math.ceil,ps=Math.floor,gs=Math.round,hs=Math.sqrt,Ic=Math.log,bs=isNaN;function _s(e){return!e}v(function(e,r){return e&&r});v(function(e,r){return e||r});v(function(e,r){return e!==r});var xs=v(function(e,r){return e+r});function ws(e){var r=e.charCodeAt(0);return isNaN(r)?R:j(55296<=r&&r<=56319?P(Er(e[0]+e[1]),e.slice(2)):P(Er(e[0]),e.slice(1)))}v(function(e,r){return e+r});function ys(e){return e.length}v(function(e,r){for(var n=r.length,a=new Array(n),i=0;i<n;){var o=r.charCodeAt(i);if(55296<=o&&o<=56319){a[i]=e(Er(r[i]+r[i+1])),i+=2;continue}a[i]=e(Er(r[i])),i++}return a.join("")});v(function(e,r){for(var n=[],a=r.length,i=0;i<a;){var o=r[i],l=r.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=r[i],i++),e(Er(o))&&n.push(o)}return n.join("")});function Ss(e){for(var r=e.length,n=new Array(r),a=0;a<r;){var i=e.charCodeAt(a);55296<=i&&i<=56319?(n[r-a]=e[a+1],a++,n[r-a]=e[a-1],a++):(n[r-a]=e[a],a++)}return n.join("")}T(function(e,r,n){for(var a=n.length,i=0;i<a;){var o=n[i],l=n.charCodeAt(i);i++,55296<=l&&l<=56319&&(o+=n[i],i++),r=t(e,Er(o),r)}return r});var Cs=T(function(e,r,n){for(var a=n.length;a--;){var i=n[a],o=n.charCodeAt(a);56320<=o&&o<=57343&&(a--,i=n[a]+i),r=t(e,Er(i),r)}return r}),Ls=v(function(e,r){return r.split(e)}),Ps=v(function(e,r){return r.join(e)}),zs=T(function(e,r,n){return n.slice(e,r)});function Ms(e){return $(e.trim().split(/\s+/g))}function Ts(e){return e.toLowerCase()}v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),e(Er(a)))return!0}return!1});var ks=v(function(e,r){for(var n=r.length;n--;){var a=r[n],i=r.charCodeAt(n);if(56320<=i&&i<=57343&&(n--,a=r[n]+a),!e(Er(a)))return!1}return!0}),Ds=v(function(e,r){return r.indexOf(e)>-1}),Fs=v(function(e,r){return r.indexOf(e)===0});v(function(e,r){return r.length>=e.length&&r.lastIndexOf(e)===r.length-e.length});var Is=v(function(e,r){var n=e.length;if(n<1)return D;for(var a=0,i=[];(a=r.indexOf(e,a))>-1;)i.push(a),a=a+n;return $(i)});function Ac(e){return e+""}function As(e){for(var r=0,n=e.charCodeAt(0),a=n==43||n==45?1:0,i=a;i<e.length;++i){var o=e.charCodeAt(i);if(o<48||57<o)return R;r=10*r+o-48}return i==a?R:j(n==45?-r:r)}function Es(e){if(e.length===0||/[\sxbo]/.test(e))return R;var r=+e;return r===r?j(r):R}function Bs(e){return Ht(e).join("")}function Vs(e){var r=e.charCodeAt(0);return 55296<=r&&r<=56319?(r-55296)*1024+e.charCodeAt(1)-56320+65536:r}function Rs(e){return Er(e<0||1114111<e?"\uFFFD":e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(Math.floor(e/1024)+55296,e%1024+56320)))}function Us(e){return{$:0,a:e}}function js(e){return{$:1,a:e}}function co(e){return{$:2,b:e}}var Ns=co(function(e){return typeof e=="boolean"?Ae(e):Vr("a BOOL",e)}),Hs=co(function(e){return typeof e=="number"?Ae(e):Vr("a FLOAT",e)}),Gs=co(function(e){return typeof e=="string"?Ae(e):e instanceof String?Ae(e+""):Vr("a STRING",e)});function Ws(e){return{$:3,b:e}}var Os=v(function(e,r){return{$:6,d:e,b:r}});v(function(e,r){return{$:7,e,b:r}});function pn(e,r){return{$:9,f:e,g:r}}var qs=v(function(e,r){return{$:10,b:r,h:e}}),Js=v(function(e,r){return pn(e,[r])}),Ys=T(function(e,r,n){return pn(e,[r,n])});O(function(e,r,n,a){return pn(e,[r,n,a])});Ve(function(e,r,n,a,i){return pn(e,[r,n,a,i])});vr(function(e,r,n,a,i,o){return pn(e,[r,n,a,i,o])});Nt(function(e,r,n,a,i,o,l){return pn(e,[r,n,a,i,o,l])});be(function(e,r,n,a,i,o,l,c){return pn(e,[r,n,a,i,o,l,c])});io(function(e,r,n,a,i,o,l,c,u){return pn(e,[r,n,a,i,o,l,c,u])});v(function(e,r){try{var n=JSON.parse(r);return br(e,n)}catch(a){return Ze(t(zo,"This is not valid JSON! "+a.message,Kr(r)))}});var Ec=v(function(e,r){return br(e,la(r))});function br(e,r){switch(e.$){case 2:return e.b(r);case 5:return r===null?Ae(e.c):Vr("null",r);case 3:return Gt(r)?Bc(e.b,r,$):Vr("a LIST",r);case 4:return Gt(r)?Bc(e.b,r,Xs):Vr("an ARRAY",r);case 6:var n=e.d;if(typeof r!="object"||r===null||!(n in r))return Vr("an OBJECT with a field named `"+n+"`",r);var a=br(e.b,r[n]);return kr(a)?a:Ze(t(yu,n,a.a));case 7:var i=e.e;if(!Gt(r))return Vr("an ARRAY",r);if(i>=r.length)return Vr("a LONGER array. Need index "+i+" but only see "+r.length+" entries",r);var a=br(e.b,r[i]);return kr(a)?a:Ze(t(Su,i,a.a));case 8:if(typeof r!="object"||r===null||Gt(r))return Vr("an OBJECT",r);var o=D;for(var l in r)if(r.hasOwnProperty(l)){var a=br(e.b,r[l]);if(!kr(a))return Ze(t(yu,l,a.a));o=Br(P(l,a.a),o)}return Ae(rr(o));case 9:for(var c=e.f,u=e.g,m=0;m<u.length;m++){var a=br(u[m],r);if(!kr(a))return a;c=c(a.a)}return Ae(c);case 10:var a=br(e.b,r);return kr(a)?br(e.h(a.a),r):a;case 11:for(var s=D,d=e.g;d.b;d=d.b){var a=br(d.a,r);if(kr(a))return a;s=Br(a.a,s)}return Ze(Kp(rr(s)));case 1:return Ze(t(zo,e.a,Kr(r)));case 0:return Ae(e.a)}}function Bc(e,r,n){for(var a=r.length,i=new Array(a),o=0;o<a;o++){var l=br(e,r[o]);if(!kr(l))return Ze(t(Su,o,l.a));i[o]=l.a}return Ae(n(i))}function Gt(e){return Array.isArray(e)||typeof FileList!="undefined"&&e instanceof FileList}function Xs(e){return t(f0,e.length,function(r){return e[r]})}function Vr(e,r){return Ze(t(zo,"Expecting "+e,Kr(r)))}function oa(e,r){if(e===r)return!0;if(e.$!==r.$)return!1;switch(e.$){case 0:case 1:return e.a===r.a;case 2:return e.b===r.b;case 5:return e.c===r.c;case 3:case 4:case 8:return oa(e.b,r.b);case 6:return e.d===r.d&&oa(e.b,r.b);case 7:return e.e===r.e&&oa(e.b,r.b);case 9:return e.f===r.f&&Vc(e.g,r.g);case 10:return e.h===r.h&&oa(e.b,r.b);case 11:return Vc(e.g,r.g)}}function Vc(e,r){var n=e.length;if(n!==r.length)return!1;for(var a=0;a<n;a++)if(!oa(e[a],r[a]))return!1;return!0}var Ks=v(function(e,r){return JSON.stringify(la(r),null,e)+""});function Kr(e){return e}function la(e){return e}function Zs(){return[]}function Qs(){return{}}var ed=T(function(e,r,n){return n[e]=la(r),n});function rd(e){return v(function(r,n){return n.push(la(e(r))),n})}function An(e){return{$:0,a:e}}function nd(e){return{$:1,a:e}}function Zr(e){return{$:2,b:e,c:null}}var uo=v(function(e,r){return{$:3,b:e,d:r}});v(function(e,r){return{$:4,b:e,d:r}});function ad(e){return{$:5,b:e}}var td=0;function $o(e){var r={$:0,e:td++,f:e,g:null,h:[]};return fo(r),r}function Rc(e){return Zr(function(r){r(An($o(e)))})}function Uc(e,r){e.h.push(r),fo(e)}var id=v(function(e,r){return Zr(function(n){Uc(e,r),n(An(Ga))})}),vo=!1,jc=[];function fo(e){if(jc.push(e),!vo){for(vo=!0;e=jc.shift();)od(e);vo=!1}}function od(e){for(;e.f;){var r=e.f.$;if(r===0||r===1){for(;e.g&&e.g.$!==r;)e.g=e.g.i;if(!e.g)return;e.f=e.g.b(e.f.a),e.g=e.g.i}else if(r===2){e.f.c=e.f.b(function(n){e.f=n,fo(e)});return}else if(r===5){if(e.h.length===0)return;e.f=e.f.b(e.h.shift())}else e.g={$:r===3?0:1,b:e.f.b,i:e.g},e.f=e.f.d}}O(function(e,r,n,a){return mo(r,a,e.gS,e.ii,e.hX,function(){return function(){}})});function mo(e,r,n,a,i,o){var l=t(Ec,e,Kr(r?r.flags:void 0));kr(l)||ia(2);var c={},u=n(l.a),m=u.a,s=o(g,m),d=ld(c,g);function g(f,_){var x=t(a,f,m);s(m=x.a,_),Gc(c,x.b,i(m))}return Gc(c,u.b,i(m)),d?{ports:d}:{}}var Rr={};function ld(e,r){var n;for(var a in Rr){var i=Rr[a];i.a&&(n=n||{},n[a]=i.a(a,r)),e[a]=ud(i,r)}return n}function cd(e,r,n,a,i){return{b:e,c:r,d:n,e:a,f:i}}function ud(e,r){var n={g:r,h:void 0},a=e.c,i=e.d,o=e.e,l=e.f;function c(u){return t(uo,c,ad(function(m){var s=m.a;return m.$===0?b(i,n,s,u):o&&l?z(a,n,s.i,s.j,u):b(a,n,o?s.i:s.j,u)}))}return n.h=$o(t(uo,c,e.b))}var $d=v(function(e,r){return Zr(function(n){e.g(r),n(An(Ga))})});v(function(e,r){return t(id,e.h,{$:0,a:r})});function Nc(e){return function(r){return{$:1,k:e,l:r}}}function vd(e){return{$:2,m:e}}v(function(e,r){return{$:3,n:e,o:r}});var Hc=[],so=!1;function Gc(e,r,n){if(Hc.push({p:e,q:r,r:n}),!so){so=!0;for(var a;a=Hc.shift();)fd(a.p,a.q,a.r);so=!1}}function fd(e,r,n){var a={};Wt(!0,r,a,null),Wt(!1,n,a,null);for(var i in e)Uc(e[i],{$:"fx",a:a[i]||{i:D,j:D}})}function Wt(e,r,n,a){switch(r.$){case 1:var i=r.k,o=md(e,i,a,r.l);n[i]=sd(e,o,n[i]);return;case 2:for(var l=r.m;l.b;l=l.b)Wt(e,l.a,n,a);return;case 3:Wt(e,r.o,n,{s:r.n,t:a});return}}function md(e,r,n,a){function i(l){for(var c=n;c;c=c.t)l=c.s(l);return l}var o=e?Rr[r].e:Rr[r].f;return t(o,i,a)}function sd(e,r,n){return n=n||{i:D,j:D},e?n.i=Br(r,n.i):n.j=Br(r,n.j),n}function dd(e){Rr[e]&&ia(3)}v(function(e,r){return r});function pd(e,r){return dd(e),Rr[e]={f:gd,u:r,a:hd},Nc(e)}var gd=v(function(e,r){return function(n){return e(r(n))}});function hd(e,r){var n=D,a=Rr[e].u,i=An(null);Rr[e].b=i,Rr[e].c=T(function(l,c,u){return n=c,i});function o(l){var c=t(Ec,a,Kr(l));kr(c)||ia(4,e,c.a);for(var u=c.a,m=n;m.b;m=m.b)r(m.a(u))}return{send:o}}var Ot,Qr=typeof document!="undefined"?document:{};function po(e,r){e.appendChild(r)}O(function(e,r,n,a){var i=a.node;return i.parentNode.replaceChild(hn(e,function(){}),i),{}});function go(e){return{$:0,a:e}}var Wc=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b||0,i.push(l)}return o+=i.length,{$:1,c:r,d:bo(n),e:i,f:e,b:o}})}),en=Wc(void 0),bd=v(function(e,r){return v(function(n,a){for(var i=[],o=0;a.b;a=a.b){var l=a.a;o+=l.b.b||0,i.push(l)}return o+=i.length,{$:2,c:r,d:bo(n),e:i,f:e,b:o}})}),_d=bd(void 0);function xd(e,r,n,a){return{$:3,d:bo(e),g:r,h:n,i:a}}var wd=v(function(e,r){return{$:4,j:e,k:r,b:1+(r.b||0)}});function gn(e,r){return{$:5,l:e,m:r,k:void 0}}v(function(e,r){return gn([e,r],function(){return e(r)})});T(function(e,r,n){return gn([e,r,n],function(){return t(e,r,n)})});var yd=O(function(e,r,n,a){return gn([e,r,n,a],function(){return b(e,r,n,a)})});Ve(function(e,r,n,a,i){return gn([e,r,n,a,i],function(){return z(e,r,n,a,i)})});vr(function(e,r,n,a,i,o){return gn([e,r,n,a,i,o],function(){return F(e,r,n,a,i,o)})});Nt(function(e,r,n,a,i,o,l){return gn([e,r,n,a,i,o,l],function(){return Xe(e,r,n,a,i,o,l)})});be(function(e,r,n,a,i,o,l,c){return gn([e,r,n,a,i,o,l,c],function(){return oo(e,r,n,a,i,o,l,c)})});io(function(e,r,n,a,i,o,l,c,u){return gn([e,r,n,a,i,o,l,c,u],function(){return Ha(e,r,n,a,i,o,l,c,u)})});var Oc=v(function(e,r){return{$:"a0",n:e,o:r}}),Sd=v(function(e,r){return{$:"a1",n:e,o:r}}),ho=v(function(e,r){return{$:"a2",n:e,o:r}}),Mr=v(function(e,r){return{$:"a3",n:e,o:r}});T(function(e,r,n){return{$:"a4",n:r,o:{f:e,o:n}}});function qc(e){return e=="script"?"p":e}function Cd(e){return/^(on|formAction$)/i.test(e)?"data-"+e:e}function Ld(e){return e=="innerHTML"||e=="formAction"?"data-"+e:e}function Pd(e){return/^javascript:/i.test(e.replace(/\s/g,""))?"":e}function Jc(e){return/^\s*(javascript:|data:text\/html)/i.test(e)?"":e}var zd=v(function(e,r){return r.$==="a0"?t(Oc,r.n,Md(e,r.o)):r});function Md(e,r){var n=Ao(r);return{$:r.$,a:n?b(m0,n<3?Td:kd,nr(e),r.a):t(Kt,e,r.a)}}var Td=v(function(e,r){return P(e(r.a),r.b)}),kd=v(function(e,r){return{aA:e(r.aA),dG:r.dG,dv:r.dv}});function bo(e){for(var r={};e.b;e=e.b){var n=e.a,a=n.$,i=n.n,o=n.o;if(a==="a2"){i==="className"?Yc(r,i,la(o)):r[i]=la(o);continue}var l=r[a]||(r[a]={});a==="a3"&&i==="class"?Yc(l,i,o):l[i]=o}return r}function Yc(e,r,n){var a=e[r];e[r]=a?a+" "+n:n}function hn(e,r){var n=e.$;if(n===5)return hn(e.k||(e.k=e.m()),r);if(n===0)return Qr.createTextNode(e.a);if(n===4){for(var a=e.k,i=e.j;a.$===4;)typeof i!="object"?i=[i,a.j]:i.push(a.j),a=a.k;var o={j:i,p:r},l=hn(a,o);return l.elm_event_node_ref=o,l}if(n===3){var l=e.h(e.g);return _o(l,r,e.d),l}var l=e.f?Qr.createElementNS(e.f,e.c):Qr.createElement(e.c);Ot&&e.c=="a"&&l.addEventListener("click",Ot(l)),_o(l,r,e.d);for(var c=e.e,u=0;u<c.length;u++)po(l,hn(n===1?c[u]:c[u].b,r));return l}function _o(e,r,n){for(var a in n){var i=n[a];a==="a1"?Dd(e,i):a==="a0"?Ad(e,r,i):a==="a3"?Fd(e,i):a==="a4"?Id(e,i):(a!=="value"&&a!=="checked"||e[a]!==i)&&(e[a]=i)}}function Dd(e,r){var n=e.style;for(var a in r)n[a]=r[a]}function Fd(e,r){for(var n in r){var a=r[n];typeof a!="undefined"?e.setAttribute(n,a):e.removeAttribute(n)}}function Id(e,r){for(var n in r){var a=r[n],i=a.f,o=a.o;typeof o!="undefined"?e.setAttributeNS(i,n,o):e.removeAttributeNS(i,n)}}function Ad(e,r,n){var a=e.elmFs||(e.elmFs={});for(var i in n){var o=n[i],l=a[i];if(!o){e.removeEventListener(i,l),a[i]=void 0;continue}if(l){var c=l.q;if(c.$===o.$){l.q=o;continue}e.removeEventListener(i,l)}l=Ed(r,o),e.addEventListener(i,l,xo&&{passive:Ao(o)<2}),a[i]=l}}var xo;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){xo=!0}}))}catch{}function Ed(e,r){function n(a){var i=n.q,o=br(i.a,a);if(!!kr(o)){for(var l=Ao(i),c=o.a,u=l?l<3?c.a:c.aA:c,m=l==1?c.b:l==3&&c.dG,s=(m&&a.stopPropagation(),(l==2?c.b:l==3&&c.dv)&&a.preventDefault(),e),d,g;d=s.j;){if(typeof d=="function")u=d(u);else for(var g=d.length;g--;)u=d[g](u);s=s.p}s(u,m)}}return n.q=r,n}function Bd(e,r){return e.$==r.$&&oa(e.a,r.a)}function Xc(e,r){var n=[];return Tr(e,r,n,0),n}function Ke(e,r,n,a){var i={$:r,r:n,s:a,t:void 0,u:void 0};return e.push(i),i}function Tr(e,r,n,a){if(e!==r){var i=e.$,o=r.$;if(i!==o)if(i===1&&o===2)r=Wd(r),o=1;else{Ke(n,0,a,r);return}switch(o){case 5:for(var l=e.l,c=r.l,u=l.length,m=u===c.length;m&&u--;)m=l[u]===c[u];if(m){r.k=e.k;return}r.k=r.m();var s=[];Tr(e.k,r.k,s,0),s.length>0&&Ke(n,1,a,s);return;case 4:for(var d=e.j,g=r.j,f=!1,_=e.k;_.$===4;)f=!0,typeof d!="object"?d=[d,_.j]:d.push(_.j),_=_.k;for(var x=r.k;x.$===4;)f=!0,typeof g!="object"?g=[g,x.j]:g.push(x.j),x=x.k;if(f&&d.length!==g.length){Ke(n,0,a,r);return}(f?!Vd(d,g):d!==g)&&Ke(n,2,a,g),Tr(_,x,n,a+1);return;case 0:e.a!==r.a&&Ke(n,3,a,r.a);return;case 1:Kc(e,r,n,a,Rd);return;case 2:Kc(e,r,n,a,Ud);return;case 3:if(e.h!==r.h){Ke(n,0,a,r);return}var y=wo(e.d,r.d);y&&Ke(n,4,a,y);var S=r.i(e.g,r.g);S&&Ke(n,5,a,S);return}}}function Vd(e,r){for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}function Kc(e,r,n,a,i){if(e.c!==r.c||e.f!==r.f){Ke(n,0,a,r);return}var o=wo(e.d,r.d);o&&Ke(n,4,a,o),i(e,r,n,a)}function wo(e,r,n){var a;for(var i in e){if(i==="a1"||i==="a0"||i==="a3"||i==="a4"){var o=wo(e[i],r[i]||{},i);o&&(a=a||{},a[i]=o);continue}if(!(i in r)){a=a||{},a[i]=n?n==="a1"?"":n==="a0"||n==="a3"?void 0:{f:e[i].f,o:void 0}:typeof e[i]=="string"?"":null;continue}var l=e[i],c=r[i];l===c&&i!=="value"&&i!=="checked"||n==="a0"&&Bd(l,c)||(a=a||{},a[i]=c)}for(var u in r)u in e||(a=a||{},a[u]=r[u]);return a}function Rd(e,r,n,a){var i=e.e,o=r.e,l=i.length,c=o.length;l>c?Ke(n,6,a,{v:c,i:l-c}):l<c&&Ke(n,7,a,{v:l,e:o});for(var u=l<c?l:c,m=0;m<u;m++){var s=i[m];Tr(s,o[m],n,++a),a+=s.b||0}}function Ud(e,r,n,a){for(var i=[],o={},l=[],c=e.e,u=r.e,m=c.length,s=u.length,d=0,g=0,f=a;d<m&&g<s;){var _=c[d],x=u[g],y=_.a,S=x.a,w=_.b,C=x.b,A=void 0,q=void 0;if(y===S){f++,Tr(w,C,i,f),f+=w.b||0,d++,g++;continue}var K=c[d+1],G=u[g+1];if(K){var Y=K.a,X=K.b;q=S===Y}if(G){var V=G.a,ne=G.b;A=y===V}if(A&&q){f++,Tr(w,ne,i,f),Wa(o,i,y,C,g,l),f+=w.b||0,f++,Oa(o,i,y,X,f),f+=X.b||0,d+=2,g+=2;continue}if(A){f++,Wa(o,i,S,C,g,l),Tr(w,ne,i,f),f+=w.b||0,d+=1,g+=2;continue}if(q){f++,Oa(o,i,y,w,f),f+=w.b||0,f++,Tr(X,C,i,f),f+=X.b||0,d+=2,g+=1;continue}if(K&&Y===V){f++,Oa(o,i,y,w,f),Wa(o,i,S,C,g,l),f+=w.b||0,f++,Tr(X,ne,i,f),f+=X.b||0,d+=2,g+=2;continue}break}for(;d<m;){f++;var _=c[d],w=_.b;Oa(o,i,_.a,w,f),f+=w.b||0,d++}for(;g<s;){var fe=fe||[],x=u[g];Wa(o,i,x.a,x.b,void 0,fe),g++}(i.length>0||l.length>0||fe)&&Ke(n,8,a,{w:i,x:l,y:fe})}var Zc="_elmW6BL";function Wa(e,r,n,a,i,o){var l=e[n];if(!l){l={c:0,z:a,r:i,s:void 0},o.push({r:i,A:l}),e[n]=l;return}if(l.c===1){o.push({r:i,A:l}),l.c=2;var c=[];Tr(l.z,a,c,l.r),l.r=i,l.s.s={w:c,A:l};return}Wa(e,r,n+Zc,a,i,o)}function Oa(e,r,n,a,i){var o=e[n];if(!o){var l=Ke(r,9,i,void 0);e[n]={c:1,z:a,r:i,s:l};return}if(o.c===0){o.c=2;var c=[];Tr(a,o.z,c,i),Ke(r,9,i,{w:c,A:o});return}Oa(e,r,n+Zc,a,i)}function Qc(e,r,n,a){qa(e,r,n,0,0,r.b,a)}function qa(e,r,n,a,i,o,l){for(var c=n[a],u=c.r;u===i;){var m=c.$;if(m===1)Qc(e,r.k,c.s,l);else if(m===8){c.t=e,c.u=l;var s=c.s.w;s.length>0&&qa(e,r,s,0,i,o,l)}else if(m===9){c.t=e,c.u=l;var d=c.s;if(d){d.A.s=e;var s=d.w;s.length>0&&qa(e,r,s,0,i,o,l)}}else c.t=e,c.u=l;if(a++,!(c=n[a])||(u=c.r)>o)return a}var g=r.$;if(g===4){for(var f=r.k;f.$===4;)f=f.k;return qa(e,f,n,a,i+1,o,e.elm_event_node_ref)}for(var _=r.e,x=e.childNodes,y=0;y<_.length;y++){i++;var S=g===1?_[y]:_[y].b,w=i+(S.b||0);if(i<=u&&u<=w&&(a=qa(x[y],S,n,a,i,w,l),!(c=n[a])||(u=c.r)>o))return a;i=w}return a}function eu(e,r,n,a){return n.length===0?e:(Qc(e,r,n,a),qt(e,n))}function qt(e,r){for(var n=0;n<r.length;n++){var a=r[n],i=a.t,o=jd(i,a);i===e&&(e=o)}return e}function jd(e,r){switch(r.$){case 0:return Nd(e,r.s,r.u);case 4:return _o(e,r.u,r.s),e;case 3:return e.replaceData(0,e.length,r.s),e;case 1:return qt(e,r.s);case 2:return e.elm_event_node_ref?e.elm_event_node_ref.j=r.s:e.elm_event_node_ref={j:r.s,p:r.u},e;case 6:for(var n=r.s,i=0;i<n.i;i++)e.removeChild(e.childNodes[n.v]);return e;case 7:for(var n=r.s,a=n.e,i=n.v,o=e.childNodes[i];i<a.length;i++)e.insertBefore(hn(a[i],r.u),o);return e;case 9:var n=r.s;if(!n)return e.parentNode.removeChild(e),e;var l=n.A;return typeof l.r!="undefined"&&e.parentNode.removeChild(e),l.s=qt(e,n.w),e;case 8:return Hd(e,r);case 5:return r.s(e);default:ia(10)}}function Nd(e,r,n){var a=e.parentNode,i=hn(r,n);return i.elm_event_node_ref||(i.elm_event_node_ref=e.elm_event_node_ref),a&&i!==e&&a.replaceChild(i,e),i}function Hd(e,r){var n=r.s,a=Gd(n.y,r);e=qt(e,n.w);for(var i=n.x,o=0;o<i.length;o++){var l=i[o],c=l.A,u=c.c===2?c.s:hn(c.z,r.u);e.insertBefore(u,e.childNodes[l.r])}return a&&po(e,a),e}function Gd(e,r){if(!!e){for(var n=Qr.createDocumentFragment(),a=0;a<e.length;a++){var i=e[a],o=i.A;po(n,o.c===2?o.s:hn(o.z,r.u))}return n}}function yo(e){if(e.nodeType===3)return go(e.textContent);if(e.nodeType!==1)return go("");for(var r=D,n=e.attributes,a=n.length;a--;){var i=n[a],o=i.name,l=i.value;r=Br(t(Mr,o,l),r)}for(var c=e.tagName.toLowerCase(),u=D,m=e.childNodes,a=m.length;a--;)u=Br(yo(m[a]),u);return b(en,c,r,u)}function Wd(e){for(var r=e.e,n=r.length,a=new Array(n),i=0;i<n;i++)a[i]=r[i].b;return{$:1,c:e.c,d:e.d,e:a,f:e.f,b:e.b}}var Od=O(function(e,r,n,a){return mo(r,a,e.gS,e.ii,e.hX,function(i,o){var l=e.ik,c=a.node,u=yo(c);return ru(o,function(m){var s=l(m),d=Xc(u,s);c=eu(c,u,d,i),u=s})})});O(function(e,r,n,a){return mo(r,a,e.gS,e.ii,e.hX,function(i,o){var l=e.dE&&e.dE(i),c=e.ik,u=Qr.title,m=Qr.body,s=yo(m);return ru(o,function(d){Ot=l;var g=c(d),f=en("body")(D)(g.fU),_=Xc(s,f);m=eu(m,s,_,i),s=f,Ot=0,u!==g.id&&(Qr.title=u=g.id)})})});var Jt=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){return setTimeout(e,1e3/60)};function ru(e,r){r(e);var n=0;function a(){n=n===1?0:(Jt(a),r(e),1)}return function(i,o){e=i,o?(r(e),n===2&&(n=1)):(n===0&&Jt(a),n=2)}}v(function(e,r){return t(Bo,et,Zr(function(){r&&history.go(r),e()}))});v(function(e,r){return t(Bo,et,Zr(function(){history.pushState({},"",r),e()}))});v(function(e,r){return t(Bo,et,Zr(function(){history.replaceState({},"",r),e()}))});var qd={addEventListener:function(){},removeEventListener:function(){}},Jd=typeof window!="undefined"?window:qd;T(function(e,r,n){return Rc(Zr(function(a){function i(o){$o(n(o))}return e.addEventListener(r,i,xo&&{passive:!0}),function(){e.removeEventListener(r,i)}}))});v(function(e,r){var n=br(e,r);return kr(n)?j(n.a):R});function nu(e,r){return Zr(function(n){Jt(function(){var a=document.getElementById(e);n(a?An(r(a)):nd(s0(e)))})})}function Yd(e){return Zr(function(r){Jt(function(){r(An(e()))})})}v(function(e,r){return nu(r,function(n){return n[e](),Ga})});v(function(e,r){return Yd(function(){return Jd.scroll(e,r),Ga})});T(function(e,r,n){return nu(e,function(a){return a.scrollLeft=r,a.scrollTop=n,Ga})});v(function(e,r){return e&r});v(function(e,r){return e|r});v(function(e,r){return e^r});v(function(e,r){return r<<e});v(function(e,r){return r>>e});v(function(e,r){return r>>>e});var Xd=v(function(e,r){var n="g";e.hb&&(n+="m"),e.f2&&(n+="i");try{return j(new RegExp(r,n))}catch{return R}});v(function(e,r){return r.match(e)!==null});var Kd=T(function(e,r,n){for(var a=[],i=0,o=n,l=r.lastIndex,c=-1,u;i++<e&&(u=r.exec(o))&&c!=r.lastIndex;){for(var m=u.length-1,s=new Array(m);m>0;){var d=u[m];s[--m]=d?j(d):R}a.push(z(Pv,u[0],u.index,i,$(s))),c=r.lastIndex}return r.lastIndex=l,$(a)});O(function(e,r,n,a){var i=0;function o(l){if(i++>=e)return l;for(var c=arguments.length-3,u=new Array(c);c>0;){var m=arguments[c];u[--c]=m?j(m):R}return n(z(Pv,l,arguments[arguments.length-2],i,$(u)))}return a.replace(r,o)});T(function(e,r,n){for(var a=n,i=[],o=r.lastIndex,l=r.lastIndex;e--;){var c=r.exec(a);if(!c)break;i.push(a.slice(o,c.index)),o=r.lastIndex}return i.push(a.slice(o)),r.lastIndex=l,$(i)});var Zd=v(function(e,r){return new Float64Array([e,r])});v(function(e,r){return new Float64Array([e,r[1]])});v(function(e,r){return new Float64Array([r[0],e])});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n});v(function(e,r){var n=new Float64Array(2);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n});v(function(e,r){var n=new Float64Array(2);n[0]=e[0]-r[0],n[1]=e[1]-r[1];var a=1/Qd(n);return n[0]=n[0]*a,n[1]=n[1]*a,n});function Qd(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return Math.sqrt(n*n+a*a)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1];return n*n+a*a});v(function(e,r){var n=new Float64Array(2);return n[0]=r[0]*e,n[1]=r[1]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]});var So=new Float64Array(3),au=new Float64Array(3),tu=new Float64Array(3),ep=T(function(e,r,n){return new Float64Array([e,r,n])}),rp=function(e){return e[0]},np=function(e){return e[1]},ap=function(e){return e[2]};v(function(e,r){return new Float64Array([e,r[1],r[2]])});v(function(e,r){return new Float64Array([r[0],e,r[2]])});v(function(e,r){return new Float64Array([r[0],r[1],e])});var tp=function(e){return new Float64Array([e.io,e.is,e.dU])};v(function(e,r){var n=new Float64Array(3);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n});function iu(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n}v(iu);function ou(e,r,n){return n===void 0&&(n=new Float64Array(3)),Yt(iu(e,r,n),n)}v(ou);function lu(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return Math.sqrt(n*n+a*a+i*i)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2];return n*n+a*a+i*i});function Yt(e,r){r===void 0&&(r=new Float64Array(3));var n=1/lu(e);return r[0]=e[0]*n,r[1]=e[1]*n,r[2]=e[2]*n,r}var ip=v(function(e,r){return new Float64Array([r[0]*e,r[1]*e,r[2]*e])}),Ja=function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]};v(Ja);function Co(e,r,n){return n===void 0&&(n=new Float64Array(3)),n[0]=e[1]*r[2]-e[2]*r[1],n[1]=e[2]*r[0]-e[0]*r[2],n[2]=e[0]*r[1]-e[1]*r[0],n}v(Co);v(function(e,r){var n,a=So,i=new Float64Array(3);return a[0]=e[3],a[1]=e[7],a[2]=e[11],n=Ja(r,a)+e[15],a[0]=e[0],a[1]=e[4],a[2]=e[8],i[0]=(Ja(r,a)+e[12])/n,a[0]=e[1],a[1]=e[5],a[2]=e[9],i[1]=(Ja(r,a)+e[13])/n,a[0]=e[2],a[1]=e[6],a[2]=e[10],i[2]=(Ja(r,a)+e[14])/n,i});var op=O(function(e,r,n,a){return new Float64Array([e,r,n,a])});v(function(e,r){return new Float64Array([e,r[1],r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],e,r[2],r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],e,r[3]])});v(function(e,r){return new Float64Array([r[0],r[1],r[2],e])});var lp=function(e){return{io:e[0],is:e[1],dU:e[2],ft:e[3]}},cp=function(e){return new Float64Array([e.io,e.is,e.dU,e.ft])};v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]+r[0],n[1]=e[1]+r[1],n[2]=e[2]+r[2],n[3]=e[3]+r[3],n});v(function(e,r){var n=new Float64Array(4);return n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3],n});v(function(e,r){var n=new Float64Array(4);n[0]=e[0]-r[0],n[1]=e[1]-r[1],n[2]=e[2]-r[2],n[3]=e[3]-r[3];var a=1/up(n);return n[0]=n[0]*a,n[1]=n[1]*a,n[2]=n[2]*a,n[3]=n[3]*a,n});function up(e){return Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]+e[3]*e[3])}v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return Math.sqrt(n*n+a*a+i*i+o*o)});v(function(e,r){var n=e[0]-r[0],a=e[1]-r[1],i=e[2]-r[2],o=e[3]-r[3];return n*n+a*a+i*i+o*o});v(function(e,r){var n=new Float64Array(4);return n[0]=r[0]*e,n[1]=r[1]*e,n[2]=r[2]*e,n[3]=r[3]*e,n});v(function(e,r){return e[0]*r[0]+e[1]*r[1]+e[2]*r[2]+e[3]*r[3]});var $p=new Float64Array(16),vp=new Float64Array(16),fp=function(e){var r=new Float64Array(16);return r[0]=e.eu,r[1]=e.ey,r[2]=e.eC,r[3]=e.eG,r[4]=e.ev,r[5]=e.ez,r[6]=e.eD,r[7]=e.eH,r[8]=e.ew,r[9]=e.eA,r[10]=e.eE,r[11]=e.eI,r[12]=e.ex,r[13]=e.eB,r[14]=e.eF,r[15]=e.eJ,r},mp=function(e){return{eu:e[0],ey:e[1],eC:e[2],eG:e[3],ev:e[4],ez:e[5],eD:e[6],eH:e[7],ew:e[8],eA:e[9],eE:e[10],eI:e[11],ex:e[12],eB:e[13],eF:e[14],eJ:e[15]}};function cu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2*i/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2*i/(a-n),l[6]=0,l[7]=0,l[8]=(r+e)/(r-e),l[9]=(a+n)/(a-n),l[10]=-(o+i)/(o-i),l[11]=-1,l[12]=0,l[13]=0,l[14]=-2*o*i/(o-i),l[15]=0,l}vr(cu);O(function(e,r,n,a){var i=n*Math.tan(e*Math.PI/360),o=-i,l=o*r,c=i*r;return cu(l,c,o,i,n,a)});function uu(e,r,n,a,i,o){var l=new Float64Array(16);return l[0]=2/(r-e),l[1]=0,l[2]=0,l[3]=0,l[4]=0,l[5]=2/(a-n),l[6]=0,l[7]=0,l[8]=0,l[9]=0,l[10]=-2/(o-i),l[11]=0,l[12]=-(r+e)/(r-e),l[13]=-(a+n)/(a-n),l[14]=-(o+i)/(o-i),l[15]=1,l}vr(uu);O(function(e,r,n,a){return uu(e,r,n,a,-1,1)});function $u(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[3],c=e[4],u=e[5],m=e[6],s=e[7],d=e[8],g=e[9],f=e[10],_=e[11],x=e[12],y=e[13],S=e[14],w=e[15],C=r[0],A=r[1],q=r[2],K=r[3],G=r[4],Y=r[5],X=r[6],V=r[7],ne=r[8],fe=r[9],xe=r[10],me=r[11],se=r[12],we=r[13],de=r[14],Fe=r[15];return n[0]=a*C+c*A+d*q+x*K,n[1]=i*C+u*A+g*q+y*K,n[2]=o*C+m*A+f*q+S*K,n[3]=l*C+s*A+_*q+w*K,n[4]=a*G+c*Y+d*X+x*V,n[5]=i*G+u*Y+g*X+y*V,n[6]=o*G+m*Y+f*X+S*V,n[7]=l*G+s*Y+_*X+w*V,n[8]=a*ne+c*fe+d*xe+x*me,n[9]=i*ne+u*fe+g*xe+y*me,n[10]=o*ne+m*fe+f*xe+S*me,n[11]=l*ne+s*fe+_*xe+w*me,n[12]=a*se+c*we+d*de+x*Fe,n[13]=i*se+u*we+g*de+y*Fe,n[14]=o*se+m*we+f*de+S*Fe,n[15]=l*se+s*we+_*de+w*Fe,n}v($u);v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=e[4],c=e[5],u=e[6],m=e[8],s=e[9],d=e[10],g=e[12],f=e[13],_=e[14],x=r[0],y=r[1],S=r[2],w=r[4],C=r[5],A=r[6],q=r[8],K=r[9],G=r[10],Y=r[12],X=r[13],V=r[14];return n[0]=a*x+l*y+m*S,n[1]=i*x+c*y+s*S,n[2]=o*x+u*y+d*S,n[3]=0,n[4]=a*w+l*C+m*A,n[5]=i*w+c*C+s*A,n[6]=o*w+u*C+d*A,n[7]=0,n[8]=a*q+l*K+m*G,n[9]=i*q+c*K+s*G,n[10]=o*q+u*K+d*G,n[11]=0,n[12]=a*Y+l*X+m*V+g,n[13]=i*Y+c*X+s*V+f,n[14]=o*Y+u*X+d*V+_,n[15]=1,n});v(function(e,r){var n=new Float64Array(16);r=Yt(r,So);var a=r[0],i=r[1],o=r[2],l=Math.cos(e),c=1-l,u=Math.sin(e);return n[0]=a*a*c+l,n[1]=i*a*c+o*u,n[2]=o*a*c-i*u,n[3]=0,n[4]=a*i*c-o*u,n[5]=i*i*c+l,n[6]=i*o*c+a*u,n[7]=0,n[8]=a*o*c+i*u,n[9]=i*o*c-a*u,n[10]=o*o*c+l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,n});T(function(e,r,n){var a=new Float64Array(16),i=1/lu(r),o=r[0]*i,l=r[1]*i,c=r[2]*i,u=Math.cos(e),m=1-u,s=Math.sin(e),d=o*s,g=l*s,f=c*s,_=o*l*m,x=o*c*m,y=l*c*m,S=o*o*m+u,w=_+f,C=x-g,A=_-f,q=l*l*m+u,K=y+d,G=x+g,Y=y-d,X=c*c*m+u,V=n[0],ne=n[1],fe=n[2],xe=n[3],me=n[4],se=n[5],we=n[6],de=n[7],Fe=n[8],Me=n[9],Ye=n[10],Dn=n[11],Ua=n[12],Jr=n[13],Yr=n[14],ta=n[15];return a[0]=V*S+me*w+Fe*C,a[1]=ne*S+se*w+Me*C,a[2]=fe*S+we*w+Ye*C,a[3]=xe*S+de*w+Dn*C,a[4]=V*A+me*q+Fe*K,a[5]=ne*A+se*q+Me*K,a[6]=fe*A+we*q+Ye*K,a[7]=xe*A+de*q+Dn*K,a[8]=V*G+me*Y+Fe*X,a[9]=ne*G+se*Y+Me*X,a[10]=fe*G+we*Y+Ye*X,a[11]=xe*G+de*Y+Dn*X,a[12]=Ua,a[13]=Jr,a[14]=Yr,a[15]=ta,a});function sp(e,r,n){var a=new Float64Array(16);return a[0]=e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=r,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=n,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a}T(sp);O(function(e,r,n,a){var i=new Float64Array(16);return i[0]=a[0]*e,i[1]=a[1]*e,i[2]=a[2]*e,i[3]=a[3]*e,i[4]=a[4]*r,i[5]=a[5]*r,i[6]=a[6]*r,i[7]=a[7]*r,i[8]=a[8]*n,i[9]=a[9]*n,i[10]=a[10]*n,i[11]=a[11]*n,i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2];return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=r[3]*a,n[4]=r[4]*i,n[5]=r[5]*i,n[6]=r[6]*i,n[7]=r[7]*i,n[8]=r[8]*o,n[9]=r[9]*o,n[10]=r[10]*o,n[11]=r[11]*o,n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n});function dp(e,r,n){var a=new Float64Array(16);return a[0]=1,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=1,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1,a[11]=0,a[12]=e,a[13]=r,a[14]=n,a[15]=1,a}T(dp);O(function(e,r,n,a){var i=new Float64Array(16),o=a[0],l=a[1],c=a[2],u=a[3],m=a[4],s=a[5],d=a[6],g=a[7],f=a[8],_=a[9],x=a[10],y=a[11];return i[0]=o,i[1]=l,i[2]=c,i[3]=u,i[4]=m,i[5]=s,i[6]=d,i[7]=g,i[8]=f,i[9]=_,i[10]=x,i[11]=y,i[12]=o*e+m*r+f*n+a[12],i[13]=l*e+s*r+_*n+a[13],i[14]=c*e+d*r+x*n+a[14],i[15]=u*e+g*r+y*n+a[15],i});v(function(e,r){var n=new Float64Array(16),a=e[0],i=e[1],o=e[2],l=r[0],c=r[1],u=r[2],m=r[3],s=r[4],d=r[5],g=r[6],f=r[7],_=r[8],x=r[9],y=r[10],S=r[11];return n[0]=l,n[1]=c,n[2]=u,n[3]=m,n[4]=s,n[5]=d,n[6]=g,n[7]=f,n[8]=_,n[9]=x,n[10]=y,n[11]=S,n[12]=l*a+s*i+_*o+r[12],n[13]=c*a+d*i+x*o+r[13],n[14]=u*a+g*i+y*o+r[14],n[15]=m*a+f*i+S*o+r[15],n});T(function(e,r,n){var a=ou(e,r,So),i=Yt(Co(n,a,au),au),o=Yt(Co(a,i,tu),tu),l=$p,c=vp;return l[0]=i[0],l[1]=o[0],l[2]=a[0],l[3]=0,l[4]=i[1],l[5]=o[1],l[6]=a[1],l[7]=0,l[8]=i[2],l[9]=o[2],l[10]=a[2],l[11]=0,l[12]=0,l[13]=0,l[14]=0,l[15]=1,c[0]=1,c[1]=0,c[2]=0,c[3]=0,c[4]=0,c[5]=1,c[6]=0,c[7]=0,c[8]=0,c[9]=0,c[10]=1,c[11]=0,c[12]=-e[0],c[13]=-e[1],c[14]=-e[2],c[15]=1,$u(l,c)});T(function(e,r,n){var a=new Float64Array(16);return a[0]=e[0],a[1]=e[1],a[2]=e[2],a[3]=0,a[4]=r[0],a[5]=r[1],a[6]=r[2],a[7]=0,a[8]=n[0],a[9]=n[1],a[10]=n[2],a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,a});var vu=0;function Ya(e,r){for(;r.b;r=r.b)e(r.a)}function Lo(e){for(var r=0;e.b;e=e.b)r++;return r}var pp=typeof requestAnimationFrame!="undefined"?requestAnimationFrame:function(e){setTimeout(e,1e3/60)},gp=Ve(function(e,r,n,a,i){return{$:0,a:e,b:r,c:n,d:a,e:i}}),hp=v(function(e,r){var n=e.blend;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.BLEND),n.enabled=!0),(n.a!==r.a||n.d!==r.d)&&(e.gl.blendEquationSeparate(r.a,r.d),n.a=r.a,n.d=r.d),(n.b!==r.b||n.c!==r.c||n.e!==r.e||n.f!==r.f)&&(e.gl.blendFuncSeparate(r.b,r.c,r.e,r.f),n.b=r.b,n.c=r.c,n.e=r.e,n.f=r.f),(n.g!==r.g||n.h!==r.h||n.i!==r.i||n.j!==r.j)&&(e.gl.blendColor(r.g,r.h,r.i,r.j),n.g=r.g,n.h=r.h,n.i=r.i,n.j=r.j)}),bp=v(function(e,r){var n=e.depthTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.DEPTH_TEST),n.enabled=!0),n.a!==r.a&&(e.gl.depthFunc(r.a),n.a=r.a),n.b!==r.b&&(e.gl.depthMask(r.b),n.b=r.b),(n.c!==r.c||n.d!==r.d)&&(e.gl.depthRange(r.c,r.d),n.c=r.c,n.d=r.d)}),_p=v(function(e,r){var n=e.stencilTest;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.STENCIL_TEST),n.enabled=!0),(n.d!==r.d||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.FRONT,r.d,r.a,r.b),n.d=r.d),(n.e!==r.e||n.f!==r.f||n.g!==r.g)&&(e.gl.stencilOpSeparate(e.gl.FRONT,r.e,r.f,r.g),n.e=r.e,n.f=r.f,n.g=r.g),n.c!==r.c&&(e.gl.stencilMask(r.c),n.c=r.c),(n.h!==r.h||n.a!==r.a||n.b!==r.b)&&(e.gl.stencilFuncSeparate(e.gl.BACK,r.h,r.a,r.b),n.h=r.h,n.a=r.a,n.b=r.b),(n.i!==r.i||n.j!==r.j||n.k!==r.k)&&(e.gl.stencilOpSeparate(e.gl.BACK,r.i,r.j,r.k),n.i=r.i,n.j=r.j,n.k=r.k)}),xp=v(function(e,r){var n=e.scissor;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SCISSOR_TEST),n.enabled=!0),(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.scissor(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),wp=v(function(e,r){var n=e.colorMask;n.toggle=e.toggle,n.enabled=!0,(n.a!==r.a||n.b!==r.b||n.c!==r.c||n.d!==r.d)&&(e.gl.colorMask(r.a,r.b,r.c,r.d),n.a=r.a,n.b=r.b,n.c=r.c,n.d=r.d)}),yp=v(function(e,r){var n=e.cullFace;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.CULL_FACE),n.enabled=!0),n.a!==r.a&&(e.gl.cullFace(r.a),n.a=r.a)}),Sp=v(function(e,r){var n=e.polygonOffset;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.POLYGON_OFFSET_FILL),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.polygonOffset(r.a,r.b),n.a=r.a,n.b=r.b)}),Cp=v(function(e,r){var n=e.sampleCoverage;n.toggle=e.toggle,n.enabled||(e.gl.enable(e.gl.SAMPLE_COVERAGE),n.enabled=!0),(n.a!==r.a||n.b!==r.b)&&(e.gl.sampleCoverage(r.a,r.b),n.a=r.a,n.b=r.b)}),Lp=function(e){var r=e.sampleAlphaToCoverage;r.toggle=e.toggle,r.enabled||(e.gl.enable(e.gl.SAMPLE_ALPHA_TO_COVERAGE),r.enabled=!0)},Pp=function(e){e.blend.enabled&&(e.gl.disable(e.gl.BLEND),e.blend.enabled=!1)},zp=function(e){e.depthTest.enabled&&(e.gl.disable(e.gl.DEPTH_TEST),e.depthTest.enabled=!1)},Mp=function(e){e.stencilTest.enabled&&(e.gl.disable(e.gl.STENCIL_TEST),e.stencilTest.enabled=!1)},fu=function(e){e.scissor.enabled&&(e.gl.disable(e.gl.SCISSOR_TEST),e.scissor.enabled=!1)},mu=function(e){var r=e.colorMask;(!r.a||!r.b||!r.c||!r.d)&&(e.gl.colorMask(!0,!0,!0,!0),r.a=!0,r.b=!0,r.c=!0,r.d=!0)},Tp=function(e){e.gl.disable(e.gl.CULL_FACE)},kp=function(e){e.gl.disable(e.gl.POLYGON_OFFSET_FILL)},Dp=function(e){e.gl.disable(e.gl.SAMPLE_COVERAGE)},Fp=function(e){e.gl.disable(e.gl.SAMPLE_ALPHA_TO_COVERAGE)},su=["blend","depthTest","stencilTest","scissor","colorMask","cullFace","polygonOffset","sampleCoverage","sampleAlphaToCoverage"],Ip=[Pp,zp,Mp,fu,mu,Tp,kp,Dp,Fp];function du(e,r,n){var a=e.createShader(n);return e.shaderSource(a,`#extension GL_OES_standard_derivatives : enable
`+r),e.compileShader(a),a}function Ap(e,r,n){var a=e.createProgram();if(e.attachShader(a,r),e.attachShader(a,n),e.linkProgram(a),!e.getProgramParameter(a,e.LINK_STATUS))throw"Link failed: "+e.getProgramInfoLog(a)+`
vs info-log: `+e.getShaderInfoLog(r)+`
fs info-log: `+e.getShaderInfoLog(n);return a}function pu(e,r){switch(r){case e.FLOAT:return{size:1,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC2:return{size:2,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC3:return{size:3,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_VEC4:return{size:4,arraySize:1,type:Float32Array,baseType:e.FLOAT};case e.FLOAT_MAT4:return{size:4,arraySize:4,type:Float32Array,baseType:e.FLOAT};case e.INT:return{size:1,arraySize:1,type:Int32Array,baseType:e.INT}}}function Ep(e,r,n,a){for(var i=n.a.d5,o=[],l=0;l<i;l++)o.push(String.fromCharCode(97+l));function c(f,_,x,y,S){var w;if(i===1)for(w=0;w<_;w++)f[x++]=_===1?y[S]:y[S][w];else o.forEach(function(C){for(w=0;w<_;w++)f[x++]=_===1?y[C][S]:y[C][S][w]})}var u=pu(e,r.type);if(u===void 0)throw new Error("No info available for: "+r.type);var m=0,s=u.size*u.arraySize*i,d=new u.type(Lo(n.b)*s);Ya(function(f){c(d,u.size*u.arraySize,m,f,a[r.name]||r.name),m+=s},n.b);var g=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,g),e.bufferData(e.ARRAY_BUFFER,d,e.STATIC_DRAW),g}function Bp(e,r){if(r.a.ei>0){var n=e.createBuffer(),a=Vp(r.c,r.a.ei);return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a,e.STATIC_DRAW),{numIndices:a.length,indexBuffer:n,buffers:{}}}else return{numIndices:r.a.d5*Lo(r.b),indexBuffer:null,buffers:{}}}function Vp(e,r){var n=new Uint32Array(Lo(e)*r),a=0,i;return Ya(function(o){if(r===1)n[a++]=o;else for(i=0;i<r;i++)n[a++]=o[String.fromCharCode(97+i)]},e),n}function gu(e,r){return e+"#"+r}var hu=v(function(e,r){var n=e.f,a=n.gl;if(!a)return r;a.viewport(0,0,a.drawingBufferWidth,a.drawingBufferHeight),n.depthTest.b||(a.depthMask(!0),n.depthTest.b=!0),n.stencilTest.c!==n.STENCIL_WRITEMASK&&(a.stencilMask(n.STENCIL_WRITEMASK),n.stencilTest.c=n.STENCIL_WRITEMASK),fu(n),mu(n),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT);function i(o){if(!!o.d.b.b){var l,c,u;if(o.b.id&&o.c.id&&(l=gu(o.b.id,o.c.id),c=n.programs[l]),!c){var m;o.b.id?m=n.shaders[o.b.id]:o.b.id=vu++,m||(m=du(a,o.b.src,a.VERTEX_SHADER),n.shaders[o.b.id]=m);var s;o.c.id?s=n.shaders[o.c.id]:o.c.id=vu++,s||(s=du(a,o.c.src,a.FRAGMENT_SHADER),n.shaders[o.c.id]=s);var d=Ap(a,m,s);c={glProgram:d,attributes:Object.assign({},o.b.attributes,o.c.attributes),currentUniforms:{},activeAttributes:[],activeAttributeLocations:[]},c.uniformSetters=Rp(a,e,c,Object.assign({},o.b.uniforms,o.c.uniforms));var g=a.getProgramParameter(d,a.ACTIVE_ATTRIBUTES);for(u=0;u<g;u++){var f=a.getActiveAttrib(d,u),_=a.getAttribLocation(d,f.name);c.activeAttributes.push(f),c.activeAttributeLocations.push(_)}l=gu(o.b.id,o.c.id),n.programs[l]=c}n.lastProgId!==l&&(a.useProgram(c.glProgram),n.lastProgId=l),Up(c.uniformSetters,o.e);var x=n.buffers.get(o.d);for(x||(x=Bp(a,o.d),n.buffers.set(o.d,x)),u=0;u<c.activeAttributes.length;u++){f=c.activeAttributes[u],_=c.activeAttributeLocations[u],x.buffers[f.name]===void 0&&(x.buffers[f.name]=Ep(a,f,o.d,c.attributes)),a.bindBuffer(a.ARRAY_BUFFER,x.buffers[f.name]);var y=pu(a,f.type);if(y.arraySize===1)a.enableVertexAttribArray(_),a.vertexAttribPointer(_,y.size,y.baseType,!1,0,0);else for(var S=y.size*4,w=S*y.arraySize,C=0;C<y.arraySize;C++)a.enableVertexAttribArray(_+C),a.vertexAttribPointer(_+C,y.size,y.baseType,!1,w,S*C)}for(n.toggle=!n.toggle,Ya(A_(n),o.a),u=0;u<su.length;u++){var A=n[su[u]];A.toggle!==n.toggle&&A.enabled&&(Ip[u](n),A.enabled=!1,A.toggle=n.toggle)}x.indexBuffer?(a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,x.indexBuffer),a.drawElements(o.d.a.eS,x.numIndices,a.UNSIGNED_INT,0)):a.drawArrays(o.d.a.eS,0,x.numIndices)}}return Ya(i,e.g),r});function Rp(e,r,n,a){var i=n.glProgram,o=n.currentUniforms,l=0,c=r.f;function u(f,_){var x=_.name,y=e.getUniformLocation(f,x);switch(_.type){case e.INT:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};case e.FLOAT:return function(w){o[x]!==w&&(e.uniform1f(y,w),o[x]=w)};case e.FLOAT_VEC2:return function(w){o[x]!==w&&(e.uniform2f(y,w[0],w[1]),o[x]=w)};case e.FLOAT_VEC3:return function(w){o[x]!==w&&(e.uniform3f(y,w[0],w[1],w[2]),o[x]=w)};case e.FLOAT_VEC4:return function(w){o[x]!==w&&(e.uniform4f(y,w[0],w[1],w[2],w[3]),o[x]=w)};case e.FLOAT_MAT4:return function(w){o[x]!==w&&(e.uniformMatrix4fv(y,!1,new Float32Array(w)),o[x]=w)};case e.SAMPLER_2D:var S=l++;return function(w){e.activeTexture(e.TEXTURE0+S);var C=c.textures.get(w);C||(C=w.ge(e),c.textures.set(w,C)),e.bindTexture(e.TEXTURE_2D,C),o[x]!==w&&(e.uniform1i(y,S),o[x]=w)};case e.BOOL:return function(w){o[x]!==w&&(e.uniform1i(y,w),o[x]=w)};default:return function(){}}}for(var m={},s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS),d=0;d<s;d++){var g=e.getActiveUniform(i,d);m[a[g.name]||g.name]=u(i,g)}return m}function Up(e,r){Object.keys(r).forEach(function(n){var a=e[n];a&&a(r[n])})}var jp=T(function(e,r,n){return xd(r,{g:n,f:{},h:e},Jp,Yp)}),Np=v(function(e,r){e.contextAttributes.alpha=!0,e.contextAttributes.premultipliedAlpha=r.a}),Hp=v(function(e,r){e.contextAttributes.depth=!0,e.sceneSettings.push(function(n){n.clearDepth(r.a)})}),Gp=v(function(e,r){e.contextAttributes.stencil=!0,e.sceneSettings.push(function(n){n.clearStencil(r.a)})}),Wp=v(function(e,r){e.contextAttributes.antialias=!0}),Op=v(function(e,r){e.sceneSettings.push(function(n){n.clearColor(r.a,r.b,r.c,r.d)})}),qp=v(function(e,r){e.contextAttributes.preserveDrawingBuffer=!0});function Jp(e){var r={contextAttributes:{alpha:!1,depth:!1,stencil:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1},sceneSettings:[]};Ya(function(i){return t(I_,r,i)},e.h);var n=Qr.createElement("canvas"),a=n.getContext&&(n.getContext("webgl",r.contextAttributes)||n.getContext("experimental-webgl",r.contextAttributes));return a&&typeof WeakMap!="undefined"?(r.sceneSettings.forEach(function(i){i(a)}),a.getExtension("OES_standard_derivatives"),a.getExtension("OES_element_index_uint"),e.f.gl=a,e.f.toggle=!1,e.f.blend={enabled:!1,toggle:!1},e.f.depthTest={enabled:!1,toggle:!1},e.f.stencilTest={enabled:!1,toggle:!1},e.f.scissor={enabled:!1,toggle:!1},e.f.colorMask={enabled:!1,toggle:!1},e.f.cullFace={enabled:!1,toggle:!1},e.f.polygonOffset={enabled:!1,toggle:!1},e.f.sampleCoverage={enabled:!1,toggle:!1},e.f.sampleAlphaToCoverage={enabled:!1,toggle:!1},e.f.shaders=[],e.f.programs={},e.f.lastProgId=null,e.f.buffers=new WeakMap,e.f.textures=new WeakMap,e.f.STENCIL_WRITEMASK=a.getParameter(a.STENCIL_WRITEMASK),pp(function(){return t(hu,e,n)})):(n=Qr.createElement("div"),n.innerHTML='<a href="https://get.webgl.org/">Enable WebGL</a> to see this content!'),n}function Yp(e,r){return r.f=e.f,hu(r)}var M=is,Xt=ns,bu=T(function(e,r,n){var a=n.c,i=n.d,o=v(function(l,c){if(l.$){var m=l.a;return b(Xt,e,c,m)}else{var u=l.a;return b(Xt,o,c,u)}});return b(Xt,o,b(Xt,e,r,i),a)}),Po=T(function(e,r,n){e:for(;;){if(n.$===-2)return r;var a=n.b,i=n.c,o=n.d,l=n.e,c=e,u=b(e,a,i,b(Po,e,r,l)),m=o;e=c,r=u,n=m;continue e}}),_u=function(e){return b(Po,T(function(r,n,a){return t(M,P(r,n),a)}),D,e)},xu=1,Xp=2,wu=0,Ze=function(e){return{$:1,a:e}},zo=v(function(e,r){return{$:3,a:e,b:r}}),yu=v(function(e,r){return{$:0,a:e,b:r}}),Su=v(function(e,r){return{$:1,a:e,b:r}}),Ae=function(e){return{$:0,a:e}},Kp=function(e){return{$:2,a:e}},j=function(e){return{$:0,a:e}},R={$:1},Zp=ks,Qp=Ks,k=Ac,ee=v(function(e,r){return t(Ps,e,Ht(r))}),Mo=v(function(e,r){return $(t(Ls,e,r))}),Cu=function(e){return t(ee,`
    `,t(Mo,`
`,e))},Ie=T(function(e,r,n){e:for(;;)if(n.b){var a=n.a,i=n.b,o=e,l=t(e,a,r),c=i;e=o,r=l,n=c;continue e}else return r}),En=function(e){return b(Ie,v(function(r,n){return n+1}),0,e)},e0=os,r0=T(function(e,r,n){e:for(;;)if(le(e,r)<1){var a=e,i=r-1,o=t(M,r,n);e=a,r=i,n=o;continue e}else return n}),Ur=v(function(e,r){return b(r0,e,r,D)}),Lu=v(function(e,r){return b(e0,e,t(Ur,0,En(r)-1),r)}),jr=Vs,Pu=function(e){var r=jr(e);return 97<=r&&r<=122},zu=function(e){var r=jr(e);return r<=90&&65<=r},n0=function(e){return Pu(e)||zu(e)},a0=function(e){var r=jr(e);return r<=57&&48<=r},t0=function(e){return Pu(e)||zu(e)||a0(e)},rr=function(e){return b(Ie,M,D,e)},ca=ws,i0=v(function(e,r){return`

(`+(k(e+1)+(") "+Cu(o0(r))))}),o0=function(e){return t(l0,e,D)},l0=v(function(e,r){e:for(;;)switch(e.$){case 0:var n=e.a,a=e.b,i=function(){var x=ca(n);if(x.$===1)return!1;var y=x.a,S=y.a,w=y.b;return n0(S)&&t(Zp,t0,w)}(),o=i?"."+n:"['"+(n+"']"),l=a,c=t(M,o,r);e=l,r=c;continue e;case 1:var u=e.a,a=e.b,m="["+(k(u)+"]"),l=a,c=t(M,m,r);e=l,r=c;continue e;case 2:var s=e.a;if(s.b)if(s.b.b){var d=function(){return r.b?"The Json.Decode.oneOf at json"+t(ee,"",rr(r)):"Json.Decode.oneOf"}(),_=d+(" failed in the following "+(k(En(s))+" ways:"));return t(ee,`

`,t(M,_,t(Lu,i0,s)))}else{var a=s.a,l=a,c=r;e=l,r=c;continue e}else return"Ran into a Json.Decode.oneOf with no possibilities"+function(){return r.b?" at json"+t(ee,"",rr(r)):"!"}();default:var g=e.a,f=e.b,_=function(){return r.b?"Problem with the value at json"+(t(ee,"",rr(r))+`:

    `):`Problem with the given value:

`}();return _+(Cu(t(Qp,4,f))+(`

`+g))}}),fr=32,To=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),ko=Km,Xa=ds,Do=v(function(e,r){return Ic(r)/Ic(e)}),Ka=ms,Za=Xa(t(Do,2,fr)),Mu=z(To,0,Za,ko,ko),Tu=Qm,ku=function(e){return{$:1,a:e}};v(function(e,r){return e(r)});v(function(e,r){return r(e)});var Du=ps,Fo=Zm,qe=v(function(e,r){return le(e,r)>0?e:r}),c0=function(e){return{$:0,a:e}},Io=es,u0=v(function(e,r){e:for(;;){var n=t(Io,fr,e),a=n.a,i=n.b,o=t(M,c0(a),r);if(i.b){var l=i,c=o;e=l,r=c;continue e}else return rr(o)}}),Fu=function(e){var r=e.a;return r},$0=v(function(e,r){e:for(;;){var n=Xa(r/fr);if(n===1)return t(Io,fr,e).a;var a=t(u0,e,D),i=n;e=a,r=i;continue e}}),Iu=v(function(e,r){if(r.n){var n=r.n*fr,a=Du(t(Do,fr,n-1)),i=e?rr(r.C):r.C,o=t($0,i,r.n);return z(To,Fo(r.r)+n,t(qe,5,a*Za),o,r.r)}else return z(To,Fo(r.r),Za,ko,r.r)}),v0=Ve(function(e,r,n,a,i){e:for(;;){if(r<0)return t(Iu,!1,{C:a,n:n/fr|0,r:i});var o=ku(b(Tu,fr,r,e)),l=e,c=r-fr,u=n,m=t(M,o,a),s=i;e=l,r=c,n=u,a=m,i=s;continue e}}),f0=v(function(e,r){if(e<=0)return Mu;var n=e%fr,a=b(Tu,n,e-n,r),i=e-n-fr;return F(v0,r,i,e,D,a)}),kr=function(e){return!e.$},W=qs,_e=Ns,H=Os,Re=Hs,Au=v(function(e,r){return{d1:r.d1,gb:e,cX:r.cX,gp:r.gp,g3:r.g3,hq:r.hq,dC:r.dC,il:r.il}}),Kt=Js,m0=Ys,nr=Us,Ao=function(e){switch(e.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Dr=function(e){return e},s0=Dr,Eu=vr(function(e,r,n,a,i,o){return{eb:o,eg:r,e$:a,e2:n,e5:e,e6:i}}),d0=Ds,Bn=ys,ua=zs,Qa=v(function(e,r){return e<1?r:b(ua,e,Bn(r),r)}),Zt=Is,Qt=function(e){return e===""},ei=v(function(e,r){return e<1?"":b(ua,0,e,r)}),Bu=As,Vu=Ve(function(e,r,n,a,i){if(Qt(i)||t(d0,"@",i))return R;var o=t(Zt,":",i);if(o.b){if(o.b.b)return R;var l=o.a,c=Bu(t(Qa,l+1,i));if(c.$===1)return R;var u=c;return j(Xe(Eu,e,t(ei,l,i),u,r,n,a))}else return j(Xe(Eu,e,i,R,r,n,a))}),Ru=O(function(e,r,n,a){if(Qt(a))return R;var i=t(Zt,"/",a);if(i.b){var o=i.a;return F(Vu,e,t(Qa,o,a),r,n,t(ei,o,a))}else return F(Vu,e,"/",r,n,a)}),Uu=T(function(e,r,n){if(Qt(n))return R;var a=t(Zt,"?",n);if(a.b){var i=a.a;return z(Ru,e,j(t(Qa,i+1,n)),r,t(ei,i,n))}else return z(Ru,e,R,r,n)});v(function(e,r){if(Qt(r))return R;var n=t(Zt,"#",r);if(n.b){var a=n.a;return b(Uu,e,j(t(Qa,a+1,r)),t(ei,a,r))}else return b(Uu,e,R,r)});var p0=Fs,et=function(e){},rt=An,g0=rt(0),ju=O(function(e,r,n,a){if(a.b){var i=a.a,o=a.b;if(o.b){var l=o.a,c=o.b;if(c.b){var u=c.a,m=c.b;if(m.b){var s=m.a,d=m.b,g=n>500?b(Ie,e,r,rr(d)):z(ju,e,r,n+1,d);return t(e,i,t(e,l,t(e,u,t(e,s,g))))}else return t(e,i,t(e,l,t(e,u,r)))}else return t(e,i,t(e,l,r))}else return t(e,i,r)}else return r}),He=T(function(e,r,n){return z(ju,e,r,0,n)}),J=v(function(e,r){return b(He,v(function(n,a){return t(M,e(n),a)}),D,r)}),ri=uo,Eo=v(function(e,r){return t(ri,function(n){return rt(e(n))},r)}),h0=T(function(e,r,n){return t(ri,function(a){return t(ri,function(i){return rt(t(e,a,i))},n)},r)}),b0=function(e){return b(He,h0(M),rt(D),e)},_0=$d,x0=v(function(e,r){var n=r;return Rc(t(ri,_0(e),n))}),w0=T(function(e,r,n){return t(Eo,function(a){return 0},b0(t(J,x0(e),r)))}),y0=T(function(e,r,n){return rt(0)}),S0=v(function(e,r){var n=r;return t(Eo,e,n)});Rr.Task=cd(g0,w0,y0,S0);var C0=Nc("Task"),Bo=v(function(e,r){return C0(t(Eo,e,r))}),L0=Od,P0=_s,ni={$:1},Nu=function(e){return{$:2,a:e}},Vo={$:0},_r=v(function(e,r){return{$:0,a:e,b:r}}),Ge=T(function(e,r,n){return r(e(n))}),Vn=function(e){var r=e.b.s;return r.a},z0=function(e){var r=e.a,n=e.b.X,a=e.b.s,i=e.b.an;if(i.b){var o=i.a,l=i.b;return j(t(_r,r,{s:o,an:l,X:t(M,a,n)}))}else return R},Se=v(function(e,r){if(r.$)return e;var n=r.a;return n}),M0=T(function(e,r,n){var a=n.a,i=n.b;switch(a.$){case 1:return n;case 2:var o=a.a.dH;return(le(o+r.gp,Vn(n).d1)>0?t(Ge,z0,Se(t(_r,ni,i))):Dr)(t(_r,Nu({dH:o+r.gp}),i));default:var l=i.s,c=l.a,u=l.b,m=t(Au,c.gb,Te(r,{d1:c.d1+r.gp})),s=t(e,m,u);return t(_r,Vo,{s:P(m,s),an:D,X:t(M,i.s,i.X)})}}),Hu=v(function(e,r){e:for(;;){if(e<=0)return r;if(r.b){r.a;var n=r.b,a=e-1,i=n;e=a,r=i;continue e}else return r}}),T0=T(function(e,r,n){e:for(;;){if(e<=0)return n;if(r.b){var a=r.a,i=r.b,o=e-1,l=i,c=t(M,a,n);e=o,r=l,n=c;continue e}else return n}}),k0=v(function(e,r){return rr(b(T0,e,r,D))}),Gu=T(function(e,r,n){if(r<=0)return D;{var a=P(r,n);e:for(;;){r:for(;;)if(a.b.b)if(a.b.b.b)switch(a.a){case 1:break e;case 2:var i=a.b,w=i.a,o=i.b,l=o.a;return $([w,l]);case 3:if(a.b.b.b.b){var c=a.b,w=c.a,u=c.b,l=u.a,m=u.b,s=m.a;return $([w,l,s])}else break r;default:if(a.b.b.b.b&&a.b.b.b.b.b){var d=a.b,w=d.a,g=d.b,l=g.a,f=g.b,s=f.a,_=f.b,x=_.a,y=_.b;return e>1e3?t(M,w,t(M,l,t(M,s,t(M,x,t(k0,r-4,y))))):t(M,w,t(M,l,t(M,s,t(M,x,b(Gu,e+1,r-4,y)))))}else break r}else{if(a.a===1)break e;break r}else return n;return n}var S=a.b,w=S.a;return $([w])}}),D0=v(function(e,r){return b(Gu,0,e,r)}),F0=v(function(e,r){var n=r.b.X,a=r.b.s,i=r.b.an,o=N(rr(n),N($([a]),i)),l=t(D0,e,o),c=t(Hu,e,o);if(c.b){var u=c.a,m=c.b;return t(_r,ni,{s:u,an:m,X:rr(l)})}else{var s=rr(l);if(s.b){var d=s.a,g=s.b;return t(_r,ni,{s:d,an:D,X:g})}else return r}}),I0=function(e){var r=e.b;return t(_r,ni,r)},A0=function(e){var r=e.b;return t(_r,Nu({dH:Vn(e).d1}),r)},E0=function(e){var r=e.b;return t(_r,Vo,r)},B0=v(function(e,r){switch(e.$){case 1:return I0(r);case 2:return E0(r);case 3:return A0(r);default:var n=e.a;return t(F0,n,r)}}),ai=v(function(e,r){var n=r.a,a=r.b;return P(e(n),a)}),V0=v(function(e,r){return Te(r,{aN:e(r.aN)})}),R0=function(e){return{$:3,a:e}},U0=function(e){return{$:2,a:e}},Wu=v(function(e,r){return{$:0,a:e,b:r}}),Ou=v(function(e,r){return{$:1,a:e,b:r}}),ke=v(function(e,r){if(r.$)return R;var n=r.a;return j(e(n))}),ue=function(e){return e<0?-e:e},qu=Es,j0=T(function(e,r,n){return t(Se,0/0,qu(t(e,r,n)))}),nt=v(function(e,r){e:for(;;)if(r.b){var n=r.a,a=r.b;if(e(n))return!0;var i=e,o=a;e=i,r=o;continue e}else return!1}),N0=Cs,Ju=function(e){return b(N0,M,D,e)},H0=v(function(e,r){var n=t(nt,function(a){return a!=="0"&&a!=="."},Ju(r));return N(e&&n?"-":"",r)}),ae=Ac,Ro=xs,Yu=Rs,Xu=function(e){var r=e.a,n=e.b;if(r==="9"){var a=ca(n);if(a.$===1)return"01";var i=a.a;return t(Ro,"0",Xu(i))}else{var o=jr(r);return o>=48&&o<57?t(Ro,Yu(o+1),n):"0"}},Uo=ss,G0=bs,ti=function(e){return t(Ro,e,"")},Ku=T(function(e,r,n){return e<=0?n:b(Ku,e>>1,N(r,r),e&1?N(n,r):n)}),at=v(function(e,r){return b(Ku,e,r,"")}),jo=T(function(e,r,n){return N(n,t(at,e-Bn(n),ti(r)))}),No=Ss,Zu=function(e){var r=t(Mo,".",e);if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a;return P(n,i)}else{var n=r.a;return P(n,"0")}else return P("0","0")},W0=function(e){var r=t(Mo,"e",ae(ue(e)));if(r.b)if(r.b.b){var n=r.a,a=r.b,i=a.a,o=t(Se,0,Bu(t(p0,"+",i)?t(Qa,1,i):i)),l=Zu(n),c=l.a,u=l.b,m=N(c,u),s=o<0?t(Se,"0",t(ke,function(d){var g=d.a,f=d.b;return g+("."+f)},t(ke,ai(ti),ca(N(t(at,ue(o),"0"),m))))):b(jo,o+1,"0",m);return N(e<0?"-":"",s)}else{var n=r.a;return N(e<0?"-":"",n)}else return""},O0=T(function(e,r,n){if(Uo(n)||G0(n))return ae(n);var a=n<0,i=Zu(W0(ue(n))),o=i.a,l=i.b,c=Bn(o)+r,u=N(t(at,-c+1,"0"),b(jo,c,"0",N(o,l))),m=Bn(u),s=t(qe,1,c),d=t(e,a,b(ua,s,m,u)),g=b(ua,0,s,u),f=d?No(t(Se,"1",t(ke,Xu,ca(No(g))))):g,_=Bn(f),x=f==="0"?f:r<=0?N(f,t(at,ue(r),"0")):le(r,Bn(l))<0?b(ua,0,_-r,f)+("."+b(ua,_-r,_,f)):N(o+".",b(jo,r,"0",l));return t(H0,a,x)}),Qu=O0(v(function(e,r){var n=ca(r);if(n.$===1)return!1;if(n.a.a==="5")return n.a.b===""?(n.a,!e):(n.a,!0);var a=n.a,i=a.a;return function(o){return o>53&&e||o>=53&&!e}(jr(i))})),q0=j0(Qu),J0=T(function(e,r,n){var a=t(Do,10,ue(r-e)),i=a<0?3:a<1?2:a<2?1:0;return t(q0,i,n)}),e$=ts,tt=v(function(e,r){e:for(;;){if(r.$===-2)return R;var n=r.b,a=r.c,i=r.d,o=r.e,l=t(e$,e,n);switch(l){case 0:var c=e,u=i;e=c,r=u;continue e;case 1:return j(a);default:var c=e,u=o;e=c,r=u;continue e}}}),te=Ve(function(e,r,n,a,i){return{$:-1,a:e,b:r,c:n,d:a,e:i}}),Nr={$:-2},$a=Ve(function(e,r,n,a,i){if(i.$===-1&&!i.a){i.a;var o=i.b,l=i.c,c=i.d,u=i.e;if(a.$===-1&&!a.a){a.a;var m=a.b,s=a.c,d=a.d,g=a.e;return F(te,0,r,n,F(te,1,m,s,d,g),F(te,1,o,l,c,u))}else return F(te,e,o,l,F(te,0,r,n,a,c),u)}else if(a.$===-1&&!a.a&&a.d.$===-1&&!a.d.a){a.a;var m=a.b,s=a.c,f=a.d;f.a;var _=f.b,x=f.c,y=f.d,S=f.e,g=a.e;return F(te,0,m,s,F(te,1,_,x,y,S),F(te,1,r,n,g,i))}else return F(te,e,r,n,a,i)}),Ho=T(function(e,r,n){if(n.$===-2)return F(te,0,e,r,Nr,Nr);var a=n.a,i=n.b,o=n.c,l=n.d,c=n.e,u=t(e$,e,i);switch(u){case 0:return F($a,a,i,o,b(Ho,e,r,l),c);case 1:return F(te,a,i,r,l,c);default:return F($a,a,i,o,l,b(Ho,e,r,c))}}),va=T(function(e,r,n){var a=b(Ho,e,r,n);if(a.$===-1&&!a.a){a.a;var i=a.b,o=a.c,l=a.d,c=a.e;return F(te,1,i,o,l,c)}else{var u=a;return u}}),Y0=function(e){e:for(;;)if(e.$===-1&&e.d.$===-1){var r=e.d,n=r;e=n;continue e}else return e},r$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.e.d.$===-1&&!e.e.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d,u=i.e,m=e.e;m.a;var s=m.b,d=m.c,g=m.d;g.a;var f=g.b,_=g.c,x=g.d,y=g.e,S=m.e;return F(te,0,f,_,F(te,1,n,a,F(te,0,o,l,c,u),x),F(te,1,s,d,y,S))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,l=w.c,c=w.d,u=w.e,C=e.e;C.a;var s=C.b,d=C.c,g=C.d,S=C.e;return F(te,1,n,a,F(te,0,o,l,c,u),F(te,0,s,d,g,S))}else return e},n$=function(e){if(e.$===-1&&e.d.$===-1&&e.e.$===-1)if(e.d.d.$===-1&&!e.d.d.a){var r=e.a,n=e.b,a=e.c,i=e.d;i.a;var o=i.b,l=i.c,c=i.d;c.a;var u=c.b,m=c.c,s=c.d,d=c.e,g=i.e,f=e.e;f.a;var _=f.b,x=f.c,y=f.d,S=f.e;return F(te,0,o,l,F(te,1,u,m,s,d),F(te,1,n,a,g,F(te,0,_,x,y,S)))}else{var r=e.a,n=e.b,a=e.c,w=e.d;w.a;var o=w.b,l=w.c,C=w.d,g=w.e,A=e.e;A.a;var _=A.b,x=A.c,y=A.d,S=A.e;return F(te,1,n,a,F(te,0,o,l,C,g),F(te,0,_,x,y,S))}else return e},X0=Nt(function(e,r,n,a,i,o,l){if(o.$===-1&&!o.a){o.a;var c=o.b,u=o.c,m=o.d,s=o.e;return F(te,n,c,u,m,F(te,0,a,i,s,l))}else{e:for(;;)if(l.$===-1&&l.a===1)if(l.d.$===-1)if(l.d.a===1){l.a;var d=l.d;return d.a,n$(r)}else break e;else return l.a,l.d,n$(r);else break e;return r}}),ii=function(e){if(e.$===-1&&e.d.$===-1){var r=e.a,n=e.b,a=e.c,i=e.d,o=i.a,l=i.d,c=e.e;if(o===1){if(l.$===-1&&!l.a)return l.a,F(te,r,n,a,ii(i),c);var u=r$(e);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return F($a,m,s,d,ii(g),f)}else return Nr}else return F(te,r,n,a,ii(i),c)}else return Nr},it=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(le(e,a)<0)if(o.$===-1&&o.a===1){o.a;var c=o.d;if(c.$===-1&&!c.a)return c.a,F(te,n,a,i,t(it,e,o),l);var u=r$(r);if(u.$===-1){var m=u.a,s=u.b,d=u.c,g=u.d,f=u.e;return F($a,m,s,d,t(it,e,g),f)}else return Nr}else return F(te,n,a,i,t(it,e,o),l);else return t(K0,e,oo(X0,e,r,n,a,i,o,l))}),K0=v(function(e,r){if(r.$===-1){var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;if(ce(e,a)){var c=Y0(l);if(c.$===-1){var u=c.b,m=c.c;return F($a,n,u,m,o,ii(l))}else return Nr}else return F($a,n,a,i,o,t(it,e,l))}else return Nr}),Z0=v(function(e,r){var n=t(it,e,r);if(n.$===-1&&!n.a){n.a;var a=n.b,i=n.c,o=n.d,l=n.e;return F(te,1,a,i,o,l)}else{var c=n;return c}}),oi=T(function(e,r,n){var a=r(t(tt,e,n));if(a.$)return t(Z0,e,n);var i=a.a;return b(va,e,i,n)}),Q0=function(e){switch(e.$){case 1:var r=e.a,n=e.b;return t(oi,r,ke(function(a){if(a.$===1){var i=a.a,o=i.a,l=i.b;return t(Ou,P(o,l),n)}else return a}));case 0:var r=e.a,n=e.b;return t(oi,r,ke(function(a){if(a.$)return a;var i=a.a,o=i.a,l=i.b;return t(Wu,P(o,l),b(J0,o,l,n))}));case 3:var r=e.a,n=e.b;return t(oi,r,ke(function(a){return a.$===3?R0(n):a}));default:var r=e.a,n=e.b;return t(oi,r,ke(function(a){return a.$===2?U0(n):a}))}},eg=function(e){return V0(Q0(e))},rg=v(function(e,r){return t(J,eg(e),r)}),ng=v(function(e,r){return Te(r,{gb:t(rg,e,r.gb)})}),ag=v(function(e,r){var n=r.a,a=r.b;return t(_r,n,Te(a,{s:t(ai,ng(e),a.s)}))}),Go=v(function(e,r){var n=r.a,a=r.b;return P(n,e(a))}),tg=T(function(e,r,n){var a=n.a,i=n.b,o=i.s;return t(_r,a,Te(i,{s:t(Go,t(e,o.a,r),o)}))}),ig=O(function(e,r,n,a){switch(n.$){case 0:return a;case 1:return Te(a,{bw:!a.bw});case 2:var i=n.a;return Te(a,{R:b(M0,e,i,a.R)});case 3:var o=n.a;return Te(a,{bp:o});case 4:var l=n.a;return Te(a,{R:t(ag,l,a.R)});case 5:var c=n.a;return Te(a,{R:b(tg,r,c,a.R)});default:var u=n.a;return Te(a,{R:t(B0,u,a.R)})}}),og=v(function(e,r){return t(_r,Vo,{s:P(e,r(e)),an:D,X:D})}),lg=vd,a$=lg(D),cg=function(e){return{$:2,a:e}},li=Ws,fa=Gs,ug=pd("tick",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({d1:l,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(s){return t(W,function(d){return nr({fJ:d,gd:s,d4:m,go:u,g4:c,hr:l,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",li(fa)))},t(H,"left",_e))},t(H,"pressedKeys",li(fa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:c,hy:l,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re))))),$g=function(e){return e.dN,ug(cg)},vg=function(e){return{$:5,a:e}},fg={$:0},ci=v(function(e,r){return e}),mg=function(e){var r=e.b.s;return r.b},sg=function(e){return{$:1,a:e}},dg=sg,t$=function(e){return{$:8,a:e}},pe=t$,ot=function(e){return{$:0,a:e}},lt=T(function(e,r,n){return e(r(n))}),pg=t(lt,ot,ci),bn=pg,Ce=function(e){return{$:1,a:e}},rn=Ce,i$=v(function(e,r){return{$:9,a:e,b:r}}),Rn={$:0},o$=v(function(e,r){return r.$===3?Rn:t(i$,e,r)}),Wo=function(e){return t(o$,4,e)},p={fy:"a",cL:"atv",fA:"ab",fB:"cx",fC:"cy",fD:"acb",fE:"accx",fF:"accy",fG:"acr",dX:"al",dY:"ar",fH:"at",cM:"ah",cN:"av",fK:"s",fQ:"bh",fR:"b",fV:"w7",fX:"bd",fY:"bdt",b1:"bn",fZ:"bs",b4:"cpe",f7:"cp",f8:"cpx",f9:"cpy",aw:"c",b8:"ctr",b9:"cb",ca:"ccx",ax:"ccy",bt:"cl",cb:"cr",gc:"ct",gf:"cptr",gg:"ctxt",gx:"fcs",ea:"focus-within",gy:"fs",gC:"g",cZ:"hbh",c_:"hc",ee:"he",c$:"hf",ef:"hfp",gK:"hv",gN:"ic",gP:"fr",ci:"lbl",gT:"iml",gU:"imlf",gV:"imlp",gW:"implw",gX:"it",g2:"i",et:"lnk",be:"nb",eU:"notxt",hg:"ol",hh:"or",aU:"oq",hm:"oh",eY:"pg",eZ:"p",hn:"ppe",hA:"ui",af:"r",hD:"sb",hE:"sbx",hF:"sby",hG:"sbt",hL:"e",hM:"cap",hO:"sev",hU:"sk",Y:"t",h$:"tc",h0:"w8",h1:"w2",h2:"w9",h3:"tj",cF:"tja",h4:"tl",h5:"w3",h6:"w5",h7:"w4",h8:"tr",h9:"w6",ia:"w1",ib:"tun",fj:"ts",a$:"clr",ih:"u",dO:"wc",fu:"we",dP:"wf",fv:"wfp",dQ:"wrp"},Oo=Kr,xr=v(function(e,r){return t(ho,e,Oo(r))}),wr=xr("className"),mr=function(e){return Ce(wr(e))},l$=v(function(e,r){return{$:2,a:e,b:r}}),gg=v(function(e,r){return{$:1,a:e,b:r}}),Je=function(e){return{$:0,a:e}},sr=2,hg={$:0},Un=hg,bg={$:0},_g=p.fK+(" "+p.aw),xg=p.fK+(" "+p.gC),wg=p.fK+(" "+p.eY),yg=p.fK+(" "+p.eZ),Sg=p.fK+(" "+p.af),Cg=p.fK+(" "+p.hL),Lg=function(e){switch(e){case 0:return Sg;case 1:return _g;case 2:return Cg;case 3:return xg;case 4:return yg;default:return wg}},c$=function(e){return{$:1,a:e}},jn={$:0},qo=function(e){return{$:1,a:e}},u$=v(function(e,r){switch(r.$){case 0:return e;case 1:var n=r.a;return N(n,e);case 2:var a=r.a;return N(e,a);default:var n=r.a,a=r.b;return N(n,N(e,a))}}),$$=T(function(e,r,n){switch(n.$){case 0:return r;case 1:var a=n.a;return N(t(J,function(o){return P(e,o)},a),r);case 2:var i=n.a;return N(r,t(J,function(o){return P(e,o)},i));default:var a=n.a,i=n.b;return N(t(J,function(o){return P(e,o)},a),N(r,t(J,function(o){return P(e,o)},i)))}}),ui=4,Pg=function(e){return{$:0,a:e}},zg=function(e){return{$:1,a:e}},$e=function(e){return e>31?zg(1<<e-32):Pg(1<<e)},v$=$e(41),f$=$e(40),m$=$e(42),s$=$e(43),ma=en("div"),Jo=Nr,d$=Jo,Hr=function(e){switch(e.$){case 0:var r=e.a;return k(r)+"px";case 1:return"auto";case 2:var n=e.a;return k(n)+"fr";case 3:var a=e.a,i=e.b;return"min"+(k(a)+Hr(i));default:var o=e.a,i=e.b;return"max"+(k(o)+Hr(i))}},Le=gs,De=function(e){return k(Le(e*255))},Yo=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return j("mv-"+(De(n)+("-"+(De(a)+("-"+De(i))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d;return j("tfrm-"+(De(l)+("-"+(De(c)+("-"+(De(u)+("-"+(De(s)+("-"+(De(d)+("-"+(De(g)+("-"+(De(_)+("-"+(De(x)+("-"+(De(y)+("-"+De(S))))))))))))))))))))}},ct=function(e){switch(e.$){case 13:var r=e.a;return r;case 12:var r=e.a;return e.b,r;case 0:var n=e.a;return n;case 1:var r=e.a;return r;case 2:var a=e.a;return"font-size-"+k(a);case 3:var n=e.a;return n;case 4:var n=e.a;return n;case 5:var i=e.a,o=e.b;return e.c,i;case 7:var i=e.a;return e.b,e.c,e.d,e.e,i;case 6:var i=e.a;return e.b,e.c,e.d,e.e,i;case 8:var l=e.a;return"grid-rows-"+(t(ee,"-",t(J,Hr,l.hB))+("-cols-"+(t(ee,"-",t(J,Hr,l.ak))+("-space-x-"+(Hr(l.hP.a)+("-space-y-"+Hr(l.hP.b)))))));case 9:var c=e.a;return"gp grid-pos-"+(k(c.af)+("-"+(k(c.ga)+("-"+(k(c.im)+("-"+k(c.gH)))))));case 11:var u=e.a,m=e.b,r=function(){switch(u){case 0:return"fs";case 1:return"hv";default:return"act"}}();return t(ee," ",t(J,function(s){var d=ct(s);if(d==="")return"";var g=d;return g+("-"+r)},m));default:var o=e.a;return t(Se,"",Yo(o))}},Mg=v(function(e,r){var n=r;return b(va,e,0,n)}),Tg=v(function(e,r){var n=t(tt,e,r);return!n.$}),kg=v(function(e,r){var n=r;return t(Tg,e,n)}),p$=v(function(e,r){var n=r.a,a=r.b,i=ct(e);return t(kg,i,n)?r:P(t(Mg,i,n),t(M,e,a))}),re=v(function(e,r){return{$:0,a:e,b:r}}),ut=v(function(e,r){return{$:0,a:e,b:r}}),L=function(e){return"."+e},Dg=T(function(e,r,n){var a=e(r);if(a.$)return n;var i=a.a;return t(M,i,n)}),nn=v(function(e,r){return b(He,Dg(e),D,r)}),sa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return"rgba("+(k(Le(r*255))+(","+k(Le(n*255))+(","+k(Le(a*255))+(","+(ae(i)+")")))))},Xo=function(e){return t(ee," ",t(nn,Dr,$([e.ej?j("inset"):R,j(ae(e.eV.a)+"px"),j(ae(e.eV.b)+"px"),j(ae(e.a2)+"px"),j(ae(e.bi)+"px"),j(sa(e.b6))])))},g$=function(e){return $([t(ut,L(p.ea)+":focus-within",t(nn,Dr,$([t(ke,function(r){return t(re,"border-color",sa(r))},e.fW),t(ke,function(r){return t(re,"background-color",sa(r))},e.fO),t(ke,function(r){return t(re,"box-shadow",Xo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Go,Ka,t(ai,Ka,r.eV)),bi:r.bi}))},e.hH),j(t(re,"outline","none"))]))),t(ut,L(p.fK)+":focus .focusable, "+(L(p.fK)+".focusable:focus, "+(".ui-slide-bar:focus + "+(L(p.fK)+" .focusable-thumb"))),t(nn,Dr,$([t(ke,function(r){return t(re,"border-color",sa(r))},e.fW),t(ke,function(r){return t(re,"background-color",sa(r))},e.fO),t(ke,function(r){return t(re,"box-shadow",Xo({a2:r.a2,b6:r.b6,ej:!1,eV:t(Go,Ka,t(ai,Ka,r.eV)),bi:r.bi}))},e.hH),j(t(re,"outline","none"))])))])},Gr=function(e){return en(qc(e))},h$=v(function(e,r){return t(ho,Ld(e),Jc(r))}),Ko=v(function(e,r){return{$:2,a:e,b:r}}),Zo=function(e){return{$:6,a:e}},U=v(function(e,r){return{$:1,a:e,b:r}}),dr=v(function(e,r){return{$:0,a:e,b:r}}),I=v(function(e,r){return{$:4,a:e,b:r}}),h=v(function(e,r){return{$:0,a:e,b:r}}),Fg=v(function(e,r){return{$:3,a:e,b:r}}),b$=$([0,1,2,3,4,5]),Ig=v(function(e,r){return r.b?b(He,M,r,e):e}),ar=function(e){return b(He,Ig,D,e)},da=v(function(e,r){return ar(t(J,e,r))}),Ag=function(e){switch(e){case 0:return L(p.gc);case 1:return L(p.b9);case 2:return L(p.cb);case 3:return L(p.bt);case 4:return L(p.ca);default:return L(p.ax)}},$i=function(e){switch(e){case 0:return L(p.fH);case 1:return L(p.fA);case 2:return L(p.dY);case 3:return L(p.dX);case 4:return L(p.fB);default:return L(p.fC)}},$t=function(e){var r=function(n){var a=e(n),i=a.a,o=a.b;return $([t(I,Ag(n),i),t(U,L(p.fK),$([t(I,$i(n),o)]))])};return Zo(t(da,r,b$))},_$=$([t(h,"display","flex"),t(h,"flex-direction","column"),t(h,"white-space","pre"),t(I,L(p.cZ),$([t(h,"z-index","0"),t(U,L(p.fQ),$([t(h,"z-index","-1")]))])),t(I,L(p.hG),$([t(U,L(p.Y),$([t(I,L(p.c$),$([t(h,"flex-grow","0")])),t(I,L(p.dP),$([t(h,"align-self","auto !important")]))]))])),t(U,L(p.c_),$([t(h,"height","auto")])),t(U,L(p.c$),$([t(h,"flex-grow","100000")])),t(U,L(p.dP),$([t(h,"width","100%")])),t(U,L(p.fv),$([t(h,"width","100%")])),t(U,L(p.dO),$([t(h,"align-self","flex-start")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(U,L(p.fK),$([t(h,"margin-top","auto"),t(h,"margin-bottom","auto")]))]),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))}})]),Eg=function(e){var r=function(n){return $([t(U,L(p.fK),$([t(I,$i(n),e(n))]))])};return Zo(t(da,r,b$))},Bg=function(){return $([0,1,2,3,4,5])}(),Vg=$([t(dr,"html,body",$([t(h,"height","100%"),t(h,"padding","0"),t(h,"margin","0")])),t(dr,N(L(p.fK),N(L(p.hL),L(p.gN))),$([t(h,"display","block"),t(I,L(p.c$),$([t(U,"img",$([t(h,"max-height","100%"),t(h,"object-fit","cover")]))])),t(I,L(p.dP),$([t(U,"img",$([t(h,"max-width","100%"),t(h,"object-fit","cover")]))]))])),t(dr,L(p.fK)+":focus",$([t(h,"outline","none")])),t(dr,L(p.hA),$([t(h,"width","100%"),t(h,"height","auto"),t(h,"min-height","100%"),t(h,"z-index","0"),t(I,N(L(p.fK),L(p.c$)),$([t(h,"height","100%"),t(U,L(p.c$),$([t(h,"height","100%")]))])),t(U,L(p.gP),$([t(I,L(p.be),$([t(h,"position","fixed"),t(h,"z-index","20")]))]))])),t(dr,L(p.be),$([t(h,"position","relative"),t(h,"border","none"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(I,L(p.hL),_$),Zo(function(e){return t(J,e,Bg)}(function(e){switch(e){case 0:return t(I,L(p.fy),$([t(h,"position","absolute"),t(h,"bottom","100%"),t(h,"left","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(U,L(p.c$),$([t(h,"height","auto")])),t(U,L(p.dP),$([t(h,"width","100%")])),t(h,"pointer-events","none"),t(U,"*",$([t(h,"pointer-events","auto")]))]));case 1:return t(I,L(p.fR),$([t(h,"position","absolute"),t(h,"bottom","0"),t(h,"left","0"),t(h,"height","0"),t(h,"width","100%"),t(h,"z-index","20"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(U,"*",$([t(h,"pointer-events","auto")])),t(U,L(p.c$),$([t(h,"height","auto")]))]));case 2:return t(I,L(p.hh),$([t(h,"position","absolute"),t(h,"left","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(U,"*",$([t(h,"pointer-events","auto")]))]));case 3:return t(I,L(p.hg),$([t(h,"position","absolute"),t(h,"right","100%"),t(h,"top","0"),t(h,"height","100%"),t(h,"margin","0 !important"),t(h,"z-index","20"),t(h,"pointer-events","none"),t(U,"*",$([t(h,"pointer-events","auto")]))]));case 4:return t(I,L(p.gP),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"pointer-events","none"),t(U,"*",$([t(h,"pointer-events","auto")]))]));default:return t(I,L(p.fQ),$([t(h,"position","absolute"),t(h,"width","100%"),t(h,"height","100%"),t(h,"left","0"),t(h,"top","0"),t(h,"margin","0 !important"),t(h,"z-index","0"),t(h,"pointer-events","none"),t(U,"*",$([t(h,"pointer-events","auto")]))]))}}))])),t(dr,L(p.fK),$([t(h,"position","relative"),t(h,"border","none"),t(h,"flex-shrink","0"),t(h,"display","flex"),t(h,"flex-direction","row"),t(h,"flex-basis","auto"),t(h,"resize","none"),t(h,"font-feature-settings","inherit"),t(h,"box-sizing","border-box"),t(h,"margin","0"),t(h,"padding","0"),t(h,"border-width","0"),t(h,"border-style","solid"),t(h,"font-size","inherit"),t(h,"color","inherit"),t(h,"font-family","inherit"),t(h,"line-height","1"),t(h,"font-weight","inherit"),t(h,"text-decoration","none"),t(h,"font-style","inherit"),t(I,L(p.dQ),$([t(h,"flex-wrap","wrap")])),t(I,L(p.eU),$([t(h,"-moz-user-select","none"),t(h,"-webkit-user-select","none"),t(h,"-ms-user-select","none"),t(h,"user-select","none")])),t(I,L(p.gf),$([t(h,"cursor","pointer")])),t(I,L(p.gg),$([t(h,"cursor","text")])),t(I,L(p.hn),$([t(h,"pointer-events","none !important")])),t(I,L(p.b4),$([t(h,"pointer-events","auto !important")])),t(I,L(p.a$),$([t(h,"opacity","0")])),t(I,L(p.aU),$([t(h,"opacity","1")])),t(I,L(N(p.gK,p.a$))+":hover",$([t(h,"opacity","0")])),t(I,L(N(p.gK,p.aU))+":hover",$([t(h,"opacity","1")])),t(I,L(N(p.gx,p.a$))+":focus",$([t(h,"opacity","0")])),t(I,L(N(p.gx,p.aU))+":focus",$([t(h,"opacity","1")])),t(I,L(N(p.cL,p.a$))+":active",$([t(h,"opacity","0")])),t(I,L(N(p.cL,p.aU))+":active",$([t(h,"opacity","1")])),t(I,L(p.fj),$([t(h,"transition",t(ee,", ",t(J,function(e){return e+" 160ms"},$(["transform","opacity","filter","background-color","color","font-size"]))))])),t(I,L(p.hD),$([t(h,"overflow","auto"),t(h,"flex-shrink","1")])),t(I,L(p.hE),$([t(h,"overflow-x","auto"),t(I,L(p.af),$([t(h,"flex-shrink","1")]))])),t(I,L(p.hF),$([t(h,"overflow-y","auto"),t(I,L(p.aw),$([t(h,"flex-shrink","1")])),t(I,L(p.hL),$([t(h,"flex-shrink","1")]))])),t(I,L(p.f7),$([t(h,"overflow","hidden")])),t(I,L(p.f8),$([t(h,"overflow-x","hidden")])),t(I,L(p.f9),$([t(h,"overflow-y","hidden")])),t(I,L(p.dO),$([t(h,"width","auto")])),t(I,L(p.b1),$([t(h,"border-width","0")])),t(I,L(p.fX),$([t(h,"border-style","dashed")])),t(I,L(p.fY),$([t(h,"border-style","dotted")])),t(I,L(p.fZ),$([t(h,"border-style","solid")])),t(I,L(p.Y),$([t(h,"white-space","pre"),t(h,"display","inline-block")])),t(I,L(p.gX),$([t(h,"line-height","1.05"),t(h,"background","transparent"),t(h,"text-align","inherit")])),t(I,L(p.hL),_$),t(I,L(p.af),$([t(h,"display","flex"),t(h,"flex-direction","row"),t(U,L(p.fK),$([t(h,"flex-basis","0%"),t(I,L(p.fu),$([t(h,"flex-basis","auto")])),t(I,L(p.et),$([t(h,"flex-basis","auto")]))])),t(U,L(p.c$),$([t(h,"align-self","stretch !important")])),t(U,L(p.ef),$([t(h,"align-self","stretch !important")])),t(U,L(p.dP),$([t(h,"flex-grow","100000")])),t(U,L(p.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"align-self","stretch")])),t(U,"u:first-of-type."+p.fG,$([t(h,"flex-grow","1")])),t(U,"s:first-of-type."+p.fE,$([t(h,"flex-grow","1"),t(U,L(p.fB),$([t(h,"margin-left","auto !important")]))])),t(U,"s:last-of-type."+p.fE,$([t(h,"flex-grow","1"),t(U,L(p.fB),$([t(h,"margin-right","auto !important")]))])),t(U,"s:only-of-type."+p.fE,$([t(h,"flex-grow","1"),t(U,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(U,"s:last-of-type."+(p.fE+" ~ u"),$([t(h,"flex-grow","0")])),t(U,"u:first-of-type."+(p.fG+(" ~ s."+p.fE)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 1:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 2:return P($([t(h,"justify-content","flex-end")]),D);case 3:return P($([t(h,"justify-content","flex-start")]),D);case 4:return P($([t(h,"justify-content","center")]),D);default:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]))}}),t(I,L(p.hO),$([t(h,"justify-content","space-between")])),t(I,L(p.ci),$([t(h,"align-items","baseline")]))])),t(I,L(p.aw),$([t(h,"display","flex"),t(h,"flex-direction","column"),t(U,L(p.fK),$([t(h,"flex-basis","0px"),t(h,"min-height","min-content"),t(I,L(p.ee),$([t(h,"flex-basis","auto")]))])),t(U,L(p.c$),$([t(h,"flex-grow","100000")])),t(U,L(p.dP),$([t(h,"width","100%")])),t(U,L(p.fv),$([t(h,"width","100%")])),t(U,L(p.dO),$([t(h,"align-self","flex-start")])),t(U,"u:first-of-type."+p.fD,$([t(h,"flex-grow","1")])),t(U,"s:first-of-type."+p.fF,$([t(h,"flex-grow","1"),t(U,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","0 !important")]))])),t(U,"s:last-of-type."+p.fF,$([t(h,"flex-grow","1"),t(U,L(p.fC),$([t(h,"margin-bottom","auto !important"),t(h,"margin-top","0 !important")]))])),t(U,"s:only-of-type."+p.fF,$([t(h,"flex-grow","1"),t(U,L(p.fC),$([t(h,"margin-top","auto !important"),t(h,"margin-bottom","auto !important")]))])),t(U,"s:last-of-type."+(p.fF+" ~ u"),$([t(h,"flex-grow","0")])),t(U,"u:first-of-type."+(p.fD+(" ~ s."+p.fF)),$([t(h,"flex-grow","0")])),$t(function(e){switch(e){case 0:return P($([t(h,"justify-content","flex-start")]),$([t(h,"margin-bottom","auto")]));case 1:return P($([t(h,"justify-content","flex-end")]),$([t(h,"margin-top","auto")]));case 2:return P($([t(h,"align-items","flex-end")]),$([t(h,"align-self","flex-end")]));case 3:return P($([t(h,"align-items","flex-start")]),$([t(h,"align-self","flex-start")]));case 4:return P($([t(h,"align-items","center")]),$([t(h,"align-self","center")]));default:return P($([t(h,"justify-content","center")]),D)}}),t(U,L(p.b8),$([t(h,"flex-grow","0"),t(h,"flex-basis","auto"),t(h,"width","100%"),t(h,"align-self","stretch !important")])),t(I,L(p.hO),$([t(h,"justify-content","space-between")]))])),t(I,L(p.gC),$([t(h,"display","-ms-grid"),t(U,".gp",$([t(U,L(p.fK),$([t(h,"width","100%")]))])),t(Fg,P("display","grid"),$([P("display","grid")])),Eg(function(e){switch(e){case 0:return $([t(h,"justify-content","flex-start")]);case 1:return $([t(h,"justify-content","flex-end")]);case 2:return $([t(h,"align-items","flex-end")]);case 3:return $([t(h,"align-items","flex-start")]);case 4:return $([t(h,"align-items","center")]);default:return $([t(h,"justify-content","center")])}})])),t(I,L(p.eY),$([t(h,"display","block"),t(U,L(p.fK+":first-child"),$([t(h,"margin","0 !important")])),t(U,L(p.fK+($i(3)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),t(U,L(p.fK+($i(2)+(":first-child + ."+p.fK))),$([t(h,"margin","0 !important")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right"),t(I,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 3:return P(D,$([t(h,"float","left"),t(I,"::after",$([t(h,"content",'""'),t(h,"display","table"),t(h,"clear","both")]))]));case 4:return P(D,D);default:return P(D,D)}})])),t(I,L(p.gT),$([t(h,"white-space","pre-wrap !important"),t(h,"height","100%"),t(h,"width","100%"),t(h,"background-color","transparent")])),t(I,L(p.gW),$([t(I,L(p.hL),$([t(h,"flex-basis","auto")]))])),t(I,L(p.gV),$([t(h,"white-space","pre-wrap !important"),t(h,"cursor","text"),t(U,L(p.gU),$([t(h,"white-space","pre-wrap !important"),t(h,"color","transparent")]))])),t(I,L(p.eZ),$([t(h,"display","block"),t(h,"white-space","normal"),t(h,"overflow-wrap","break-word"),t(I,L(p.cZ),$([t(h,"z-index","0"),t(U,L(p.fQ),$([t(h,"z-index","-1")]))])),t(Ko,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")])),t(Ko,L(p.eZ),$([t(h,"display","inline"),t(I,"::after",$([t(h,"content","none")])),t(I,"::before",$([t(h,"content","none")]))])),t(Ko,L(p.hL),$([t(h,"display","inline"),t(h,"white-space","normal"),t(I,L(p.fu),$([t(h,"display","inline-block")])),t(I,L(p.gP),$([t(h,"display","flex")])),t(I,L(p.fQ),$([t(h,"display","flex")])),t(I,L(p.fy),$([t(h,"display","flex")])),t(I,L(p.fR),$([t(h,"display","flex")])),t(I,L(p.hh),$([t(h,"display","flex")])),t(I,L(p.hg),$([t(h,"display","flex")])),t(U,L(p.Y),$([t(h,"display","inline"),t(h,"white-space","normal")]))])),t(U,L(p.af),$([t(h,"display","inline")])),t(U,L(p.aw),$([t(h,"display","inline-flex")])),t(U,L(p.gC),$([t(h,"display","inline-grid")])),$t(function(e){switch(e){case 0:return P(D,D);case 1:return P(D,D);case 2:return P(D,$([t(h,"float","right")]));case 3:return P(D,$([t(h,"float","left")]));case 4:return P(D,D);default:return P(D,D)}})])),t(I,".hidden",$([t(h,"display","none")])),t(I,L(p.ia),$([t(h,"font-weight","100")])),t(I,L(p.h1),$([t(h,"font-weight","200")])),t(I,L(p.h5),$([t(h,"font-weight","300")])),t(I,L(p.h7),$([t(h,"font-weight","400")])),t(I,L(p.h6),$([t(h,"font-weight","500")])),t(I,L(p.h9),$([t(h,"font-weight","600")])),t(I,L(p.fV),$([t(h,"font-weight","700")])),t(I,L(p.h0),$([t(h,"font-weight","800")])),t(I,L(p.h2),$([t(h,"font-weight","900")])),t(I,L(p.g2),$([t(h,"font-style","italic")])),t(I,L(p.hU),$([t(h,"text-decoration","line-through")])),t(I,L(p.ih),$([t(h,"text-decoration","underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(I,N(L(p.ih),L(p.hU)),$([t(h,"text-decoration","line-through underline"),t(h,"text-decoration-skip-ink","auto"),t(h,"text-decoration-skip","ink")])),t(I,L(p.ib),$([t(h,"font-style","normal")])),t(I,L(p.h3),$([t(h,"text-align","justify")])),t(I,L(p.cF),$([t(h,"text-align","justify-all")])),t(I,L(p.h$),$([t(h,"text-align","center")])),t(I,L(p.h8),$([t(h,"text-align","right")])),t(I,L(p.h4),$([t(h,"text-align","left")])),t(I,".modal",$([t(h,"position","fixed"),t(h,"left","0"),t(h,"top","0"),t(h,"width","100%"),t(h,"height","100%"),t(h,"pointer-events","none")]))]))]),_n=function(e){return $([t(dr,".v-"+e,$([t(h,"font-feature-settings",'"'+(e+'"'))])),t(dr,".v-"+(e+"-off"),$([t(h,"font-feature-settings",'"'+(e+'" 0'))]))])},Rg=ar($([t(J,function(e){return t(dr,".border-"+k(e),$([t(h,"border-width",k(e)+"px")]))},t(Ur,0,6)),t(J,function(e){return t(dr,".font-size-"+k(e),$([t(h,"font-size",k(e)+"px")]))},t(Ur,8,32)),t(J,function(e){return t(dr,".p-"+k(e),$([t(h,"padding",k(e)+"px")]))},t(Ur,0,24)),$([t(dr,".v-smcp",$([t(h,"font-variant","small-caps")])),t(dr,".v-smcp-off",$([t(h,"font-variant","normal")]))]),_n("zero"),_n("onum"),_n("liga"),_n("dlig"),_n("ordn"),_n("tnum"),_n("afrc"),_n("frac")])),Ug=`
.explain {
    border: 6px solid rgb(174, 121, 15) !important;
}
.explain > .`+(p.fK+(` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

.ctr {
    border: none !important;
}
.explain > .ctr > .`+(p.fK+` {
    border: 4px dashed rgb(0, 151, 167) !important;
}

`))),jg=`
input[type="search"],
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance:none;
}
`,Ng=`
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
`,Hg=`
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
`,Gg=`
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
`,Wg="@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {"+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(" { flex-basis: auto !important; } "+(L(p.fK)+(L(p.af)+(" > "+(L(p.fK)+(L(p.b8)+(" { flex-basis: auto !important; }}"+(jg+(Ng+(Gg+(Hg+Ug))))))))))))))),pa=function(e){return t(ee,"",e)},ga=v(function(e,r){return{b5:r,G:D,aE:D,ag:e}}),ha=v(function(e,r){var n=e,a=v(function(i,o){switch(i.$){case 0:var l=i.a,c=i.b;return Te(o,{aE:t(M,P(l,c),o.aE)});case 3:var u=i.a,m=u.a,s=u.b,d=i.b;return Te(o,{G:t(M,{b5:`
}`,G:D,aE:d,ag:"@supports ("+(m+(":"+(s+(") {"+n.ag))))},o.G)});case 5:var g=i.a,f=i.b;return Te(o,{G:t(M,t(ha,t(ga,n.ag+(" + "+g),""),f),o.G)});case 1:var _=i.a,x=i.b;return Te(o,{G:t(M,t(ha,t(ga,n.ag+(" > "+_),""),x),o.G)});case 2:var _=i.a,x=i.b;return Te(o,{G:t(M,t(ha,t(ga,n.ag+(" "+_),""),x),o.G)});case 4:var y=i.a,S=i.b;return Te(o,{G:t(M,t(ha,t(ga,N(n.ag,y),""),S),o.G)});default:var w=i.a;return Te(o,{G:t(M,t(ha,t(ga,n.ag,""),w),o.G)})}});return b(He,a,n,r)}),Og=function(e){var r=function(i){return pa(t(J,function(o){var l=o.a,c=o.b;return l+(":"+(c+";"))},i))},n=function(i){var o=i.aE;return o.b?i.ag+("{"+(r(i.aE)+(i.b5+"}"))):""},a=function(i){var o=i;return N(n(o),pa(t(J,a,o.G)))};return pa(t(J,a,b(He,v(function(i,o){var l=i.a,c=i.b;return t(M,t(ha,t(ga,l,""),c),o)}),D,e)))},x$=N(Wg,Og(N(Vg,Rg))),xn=go,w$=function(e){var r=e.eS;switch(r){case 0:return b(Gr,"div",D,$([b(Gr,"style",D,$([xn(x$)]))]));case 1:return xn("");default:return b(Gr,"elm-ui-static-rules",$([t(h$,"rules",Oo(x$))]),D)}},qg=v(function(e,r){return Kr(b(Ie,rd(e),Zs(),r))}),Jg=function(e){return Kr(b(Ie,v(function(r,n){var a=r.a,i=r.b;return b(ed,a,i,n)}),Qs(),e))},Yg=function(e){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var r=e.a;return'"'+(r+'"');case 4:var r=e.a;return e.b,'"'+(r+'"');default:var r=e.a.hc;return'"'+(r+'"')}},Xg=function(e){switch(e.$){case 0:var r=e.a;return r==="smcp";case 1:var r=e.a;return!1;default:var r=e.a,n=e.b;return r==="smcp"&&n===1}},Kg=function(e){if(e.$===5){var r=e.a;return t(nt,Xg,r.fo)}else return!1},ba=v(function(e,r){return le(e,r)<0?e:r}),vt=T(function(e,r,n){var a=r.a,i=r.b;return e?n+(`
  `+(a+(": "+(i+" !important;")))):n+(`
  `+(a+(": "+(i+";"))))}),Pe=O(function(e,r,n,a){if(r.$===1)return $([n+("{"+(b(Ie,vt(!1),"",a)+`
}`))]);var i=r.a;switch(i){case 1:var o=e.gK;switch(o){case 0:return D;case 2:return $([n+("-hv {"+(b(Ie,vt(!0),"",a)+`
}`))]);default:return $([n+("-hv:hover {"+(b(Ie,vt(!1),"",a)+`
}`))])}case 0:var l=b(Ie,vt(!1),"",a);return $([n+("-fs:focus {"+(l+`
}`)),"."+(p.fK+(":focus "+(n+"-fs  {")))+(l+`
}`),n+"-fs:focus-within {"+(l+`
}`),".ui-slide-bar:focus + "+(L(p.fK)+(" .focusable-thumb"+(n+"-fs {")))+(l+`
}`)]);default:return $([n+("-act:active {"+(b(Ie,vt(!1),"",a)+`
}`))])}}),Zg=function(e){switch(e.$){case 0:var r=e.a;return'"'+(r+'"');case 1:var r=e.a;return'"'+(r+'" 0');default:var r=e.a,n=e.b;return'"'+(r+('" '+k(n)))}},Qg=function(e){if(e.$===5){var r=e.a;return j(t(ee,", ",t(J,Zg,r.fo)))}else return R},eh=function(e){switch(e.$){case 0:return R;case 1:var r=e.a,n=r.a,a=r.b,i=r.c;return j("translate3d("+(ae(n)+("px, "+(ae(a)+("px, "+(ae(i)+"px)"))))));default:var o=e.a,l=o.a,c=o.b,u=o.c,m=e.b,s=m.a,d=m.b,g=m.c,f=e.c,_=f.a,x=f.b,y=f.c,S=e.d,w="translate3d("+(ae(l)+("px, "+(ae(c)+("px, "+(ae(u)+"px)"))))),C="scale3d("+(ae(s)+(", "+(ae(d)+(", "+(ae(g)+")"))))),A="rotate3d("+(ae(_)+(", "+(ae(x)+(", "+(ae(y)+(", "+(ae(S)+"rad)")))))));return j(w+(" "+(C+(" "+A))))}},Qo=T(function(e,r,n){switch(r.$){case 0:var a=r.a,i=r.b;return z(Pe,e,n,a,i);case 13:var o=r.a,l=r.b;return z(Pe,e,n,"."+o,$([t(re,"box-shadow",l)]));case 12:var o=r.a,c=r.b,u=t(qe,0,t(ba,1,1-c));return z(Pe,e,n,"."+o,$([t(re,"opacity",ae(u))]));case 2:var m=r.a;return z(Pe,e,n,".font-size-"+k(m),$([t(re,"font-size",k(m)+"px")]));case 1:var o=r.a,s=r.b,d=t(ee,", ",t(nn,Qg,s)),g=$([t(re,"font-family",t(ee,", ",t(J,Yg,s))),t(re,"font-feature-settings",d),t(re,"font-variant",t(nt,Kg,s)?"small-caps":"normal")]);return z(Pe,e,n,"."+o,g);case 3:var f=r.a,l=r.b,_=r.c;return z(Pe,e,n,"."+f,$([t(re,l,_)]));case 4:var f=r.a,l=r.b,x=r.c;return z(Pe,e,n,"."+f,$([t(re,l,sa(x))]));case 5:var y=r.a,S=r.b,w=r.c,C=k(w)+"px",A=k(S)+"px",q="."+p.af,K="."+(p.dQ+q),G="."+p.dY,Y="."+p.eZ,X="."+p.eY,V="."+p.dX,ne=ae(w/2)+"px",fe=ae(S/2)+"px",xe="."+p.aw,f="."+y,me="."+p.fK;return ar($([z(Pe,e,n,f+(q+(" > "+(me+(" + "+me)))),$([t(re,"margin-left",A)])),z(Pe,e,n,f+(K+(" > "+me)),$([t(re,"margin",ne+(" "+fe))])),z(Pe,e,n,f+(xe+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),z(Pe,e,n,f+(X+(" > "+(me+(" + "+me)))),$([t(re,"margin-top",C)])),z(Pe,e,n,f+(X+(" > "+V)),$([t(re,"margin-right",A)])),z(Pe,e,n,f+(X+(" > "+G)),$([t(re,"margin-left",A)])),z(Pe,e,n,N(f,Y),$([t(re,"line-height","calc(1em + "+(k(w)+"px)"))])),z(Pe,e,n,"textarea"+(me+f),$([t(re,"line-height","calc(1em + "+(k(w)+"px)")),t(re,"height","calc(100% + "+(k(w)+"px)"))])),z(Pe,e,n,f+(Y+(" > "+V)),$([t(re,"margin-right",A)])),z(Pe,e,n,f+(Y+(" > "+G)),$([t(re,"margin-left",A)])),z(Pe,e,n,f+(Y+"::after"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-top",k(-1*(w/2|0))+"px")])),z(Pe,e,n,f+(Y+"::before"),$([t(re,"content","''"),t(re,"display","block"),t(re,"height","0"),t(re,"width","0"),t(re,"margin-bottom",k(-1*(w/2|0))+"px")]))]));case 7:var y=r.a,se=r.b,G=r.c,we=r.d,V=r.e,f="."+y;return z(Pe,e,n,f,$([t(re,"padding",ae(se)+("px "+(ae(G)+("px "+(ae(we)+("px "+(ae(V)+"px")))))))]));case 6:var y=r.a,se=r.b,G=r.c,we=r.d,V=r.e,f="."+y;return z(Pe,e,n,f,$([t(re,"border-width",k(se)+("px "+(k(G)+("px "+(k(we)+("px "+(k(V)+"px")))))))]));case 8:var de=r.a,Fe=T(function(Ne,Na,Xr){e:for(;;)switch(Xr.$){case 0:var Jm=Xr.a;return k(Jm)+"px";case 1:var Pr=P(Ne,Na);if(Pr.a.$===1){if(Pr.b.$===1)return Pr.a,Pr.b,"max-content";Pr.a;var Fn=Pr.b.a;return"minmax(max-content, "+(k(Fn)+"px)")}else if(Pr.b.$===1){var In=Pr.a.a;return Pr.b,"minmax("+(k(In)+"px, max-content)")}else{var In=Pr.a.a,Fn=Pr.b.a;return"minmax("+(k(In)+("px, "+(k(Fn)+"px)")))}case 2:var Fc=Xr.a,zr=P(Ne,Na);if(zr.a.$===1){if(zr.b.$===1)return zr.a,zr.b,k(Fc)+"fr";zr.a;var Fn=zr.b.a;return"minmax(max-content, "+(k(Fn)+"px)")}else if(zr.b.$===1){var In=zr.a.a;return zr.b,"minmax("+(k(In)+("px, "+(k(Fc)+"frfr)")))}else{var In=zr.a.a,Fn=zr.b.a;return"minmax("+(k(In)+("px, "+(k(Fn)+"px)")))}case 3:var eo=Xr.a,ro=Xr.b,no=j(eo),ao=Na,to=ro;Ne=no,Na=ao,Xr=to;continue e;default:var eo=Xr.a,ro=Xr.b,no=Ne,ao=j(eo),to=ro;Ne=no,Na=ao,Xr=to;continue e}}),Me=function(Ne){return b(Fe,R,R,Ne)};Me(de.hP.a);var Ye=Me(de.hP.b),Dn=function(Ne){return"grid-template-rows: "+(Ne+";")}(t(ee," ",t(J,Me,de.hB))),Ua=function(Ne){return"-ms-grid-rows: "+(Ne+";")}(t(ee,Ye,t(J,Me,de.ak))),Jr=function(Ne){return"-ms-grid-columns: "+(Ne+";")}(t(ee,Ye,t(J,Me,de.ak))),Yr="grid-row-gap:"+(Me(de.hP.b)+";"),ta="grid-column-gap:"+(Me(de.hP.a)+";"),Ut=function(Ne){return"grid-template-columns: "+(Ne+";")}(t(ee," ",t(J,Me,de.ak))),f=".grid-rows-"+(t(ee,"-",t(J,Hr,de.hB))+("-cols-"+(t(ee,"-",t(J,Hr,de.ak))+("-space-x-"+(Hr(de.hP.a)+("-space-y-"+Hr(de.hP.b))))))),ja=f+("{"+(Ut+(Dn+(ta+(Yr+"}"))))),Zi="@supports (display:grid) {"+(ja+"}"),Qi=f+("{"+(Jr+(Ua+"}")));return $([Qi,Zi]);case 9:var er=r.a,Hm=t(ee," ",$(["-ms-grid-row: "+(k(er.af)+";"),"-ms-grid-row-span: "+(k(er.gH)+";"),"-ms-grid-column: "+(k(er.ga)+";"),"-ms-grid-column-span: "+(k(er.im)+";")])),Gm=t(ee," ",$(["grid-row: "+(k(er.af)+(" / "+(k(er.af+er.gH)+";"))),"grid-column: "+(k(er.ga)+(" / "+(k(er.ga+er.im)+";")))])),f=".grid-pos-"+(k(er.af)+("-"+(k(er.ga)+("-"+(k(er.im)+("-"+k(er.gH))))))),ja=f+("{"+(Gm+"}")),Zi="@supports (display:grid) {"+(ja+"}"),Qi=f+("{"+(Hm+"}"));return $([Qi,Zi]);case 11:var f=r.a,Wm=r.b,Om=function(Ne){return b(Qo,e,Ne,j(f))};return t(da,Om,Wm);default:var Ar=r.a,_=eh(Ar),f=Yo(Ar),jt=P(f,_);if(!jt.a.$&&!jt.b.$){var y=jt.a.a,qm=jt.b.a;return z(Pe,e,n,"."+y,$([t(re,"transform",qm)]))}else return D}}),rh=v(function(e,r){return Jg(t(J,function(n){var a=b(Qo,e,n,R);return P(ct(n),t(qg,Oo,a))},r))}),vi=v(function(e,r){var n=function(a){var i=a.a,o=a.b;return i+(": "+(o+";"))};return e+(" {"+(t(ee,"",t(J,n,r))+"}"))}),y$=T(function(e,r,n){var a=n.a,i=n.b;return $([t(vi,"."+(e+("."+(r+(", "+("."+(e+(" ."+r))))))),a),t(vi,"."+(e+("."+(r+("> ."+(p.Y+(", ."+(e+(" ."+(r+(" > ."+p.Y)))))))))),i)])}),nh=T(function(e,r,n){var a=r.a,i=r.b,o=ce(e,n)?e:n+(" ."+e);return t(ee," ",N(b(y$,o,p.hM,i),b(y$,o,p.gy,a)))}),ah=v(function(e,r){var n=ce(e,r)?e:r+(" ."+e);return t(ee," ",$([t(vi,"."+(n+("."+(p.hM+(", "+("."+(n+(" ."+p.hM))))))),$([P("line-height","1")])),t(vi,"."+(n+("."+(p.hM+("> ."+(p.Y+(", ."+(n+(" ."+(p.hM+(" > ."+p.Y)))))))))),$([P("vertical-align","0"),P("line-height","1")]))]))}),S$=T(function(e,r,n){return{gH:r/e,bi:e,fp:n}}),C$=v(function(e,r){return b(He,v(function(n,a){return e(n)?t(M,n,a):a}),D,r)}),th=function(e){if(e.b){var r=e.a,n=e.b;return j(b(Ie,qe,r,n))}else return R},L$=function(e){if(e.b){var r=e.a,n=e.b;return j(b(Ie,ba,r,n))}else return R},P$=function(e){var r=$([e.f1,e.fP,e.gk,e.g7]),n=t(Se,e.gk,L$(r)),a=t(Se,e.fP,L$(t(C$,function(m){return!ce(m,n)},r))),i=t(Se,e.f1,th(r)),o=1/(i-a),l=1-i,c=1/(i-n),u=1-i;return{f1:b(S$,o,i-a,l),ec:b(S$,c,i-n,u)}},z$=function(e){return P($([P("display","block")]),$([P("display","inline-block"),P("line-height",ae(e.gH)),P("vertical-align",ae(e.fp)+"em"),P("font-size",ae(e.bi)+"em")]))},ih=function(e){return b(Ie,v(function(r,n){if(n.$===1)if(r.$===5){var a=r.a,i=a.fz;if(i.$===1)return n;var o=i.a;return j(P(z$(function(l){return l.ec}(P$(o))),z$(function(l){return l.f1}(P$(o)))))}else return n;else return n}),R,e)},oh=function(e){var r=function(o){if(o.$===4){var l=o.b;return j("@import url('"+(l+"');"))}else return R},n=function(o){o.a;var l=o.b,c=t(ee,`
`,t(nn,r,l));return c},a=t(J,Fu,e),i=function(o){var l=o.a,c=o.b,u=ih(c);if(u.$===1)return t(ee,"",t(J,ah(l),a));var m=u.a;return t(ee,"",t(J,t(nh,l,m),a))};return N(t(ee,`
`,t(J,n,e)),t(ee,`
`,t(J,i,e)))},lh=function(e){if(e.$===1){var r=e.a,n=e.b;return j(P(r,n))}else return R},M$=v(function(e,r){var n=v(function(l,c){return{cB:N(c.cB,b(Qo,e,l,R)),bT:function(){var u=lh(l);if(u.$===1)return c.bT;var m=u.a;return t(M,m,c.bT)}()}}),a=b(Ie,n,{cB:D,bT:D},r),i=a.bT,o=a.cB;return N(oh(i),pa(o))}),T$=v(function(e,r){var n=e.eS;switch(n){case 0:return b(Gr,"div",D,$([b(Gr,"style",D,$([xn(t(M$,e,r))]))]));case 1:return b(Gr,"div",D,$([b(Gr,"style",D,$([xn(t(M$,e,r))]))]));default:return b(Gr,"elm-ui-rules",$([t(h$,"rules",t(rh,e,r))]),D)}}),k$=O(function(e,r,n,a){var i=t(T$,r,b(Ie,p$,P(d$,g$(r.gx)),n).b);return e?t(M,P("static-stylesheet",w$(r)),t(M,P("dynamic-stylesheet",i),a)):t(M,P("dynamic-stylesheet",i),a)}),D$=O(function(e,r,n,a){var i=t(T$,r,b(Ie,p$,P(d$,g$(r.gx)),n).b);return e?t(M,w$(r),t(M,i,a)):t(M,i,a)}),el=$e(45),ft=$e(37),F$=function(e){return _d(qc(e))},ch=en("p"),tr=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return ce(o&a,o)}else{var i=e.a;return ce(i&n,i)}}),I$=en("s"),A$=en("u"),rl=$e(44),mt=$e(39),fi=vr(function(e,r,n,a,i,o){var l=v(function(u,m){if(a.$===1){var s=a.a;return b(F$,u,m,function(){switch(i.$){case 0:return s;case 2:var g=i.a,f=i.b;return z(k$,!1,g,f,s);default:var g=i.a,f=i.b;return z(k$,!0,g,f,s)}}())}else{var d=a.a;return t(function(){switch(u){case"div":return ma;case"p":return ch;default:return Gr(u)}}(),m,function(){switch(i.$){case 0:return d;case 2:var g=i.a,f=i.b;return z(D$,!1,g,f,d);default:var g=i.a,f=i.b;return z(D$,!0,g,f,d)}}())}}),c=function(){switch(r.$){case 0:return t(l,"div",n);case 1:var u=r.a;return t(l,u,n);default:var u=r.a,m=r.b;return b(Gr,u,n,$([t(l,m,$([wr(p.fK+(" "+p.hL))]))]))}}();switch(o){case 0:return t(tr,mt,e)&&!t(tr,rl,e)?c:t(tr,f$,e)?t(A$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.ax,p.fG])))]),$([c])):t(tr,m$,e)?t(I$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.ax,p.fE])))]),$([c])):c;case 1:return t(tr,ft,e)&&!t(tr,el,e)?c:t(tr,s$,e)?t(I$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.fF])))]),$([c])):t(tr,v$,e)?t(A$,$([wr(t(ee," ",$([p.fK,p.hL,p.b8,p.fD])))]),$([c])):c;default:return c}}),wn=function(e){return!e.b},nl=xn,uh=p.fK+(" "+(p.Y+(" "+(p.dO+(" "+p.c_))))),st=function(e){return t(ma,$([wr(uh)]),$([nl(e)]))},$h=p.fK+(" "+(p.Y+(" "+(p.dP+(" "+p.c$))))),E$=function(e){return t(ma,$([wr($h)]),$([nl(e)]))},vh=T(function(e,r,n){var a=v(function(_,x){var y=_.a,S=_.b,w=x.a,C=x.b;switch(S.$){case 0:var A=S.a;return ce(e,ui),P(t(M,P(y,A(e)),w),C);case 1:var q=S.a;return ce(e,ui),P(t(M,P(y,t(q.gL,jn,e)),w),wn(C)?q.hV:N(q.hV,C));case 2:var K=S.a;return P(t(M,P(y,ce(e,sr)?E$(K):st(K)),w),C);default:return P(w,C)}}),i=v(function(_,x){var y=x.a,S=x.b;switch(_.$){case 0:var w=_.a;return ce(e,ui),P(t(M,w(e),y),S);case 1:var C=_.a;return ce(e,ui),P(t(M,t(C.gL,jn,e),y),wn(S)?C.hV:N(C.hV,S));case 2:var A=_.a;return P(t(M,ce(e,sr)?E$(A):st(A),y),S);default:return P(y,S)}});if(r.$===1){var o=r.a,l=b(He,a,P(D,D),o),c=l.a,u=l.b,m=wn(u)?n.hV:N(n.hV,u);if(m.b){var s=m;return qo({gL:z(fi,n.aR,n.aT,n.aJ,c$(b($$,"nearby-element-pls",c,n.aM))),hV:s})}else return ot(F(fi,n.aR,n.aT,n.aJ,c$(b($$,"nearby-element-pls",c,n.aM)),jn))}else{var d=r.a,g=b(He,i,P(D,D),d),f=g.a,u=g.b,m=wn(u)?n.hV:N(n.hV,u);if(m.b){var s=m;return qo({gL:z(fi,n.aR,n.aT,n.aJ,Je(t(u$,f,n.aM))),hV:s})}else return ot(F(fi,n.aR,n.aT,n.aJ,Je(t(u$,f,n.aM)),jn))}}),ir=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),fh=function(e){return{$:10,a:e}},mi=v(function(e,r){return{$:0,a:e,b:r}}),oe=v(function(e,r){var n=r.a,a=r.b;if(e.$){var o=e.a;return t(mi,n,o|a)}else{var i=e.a;return t(mi,i|n,a)}}),B$=function(e){return{$:1,a:e}},si=v(function(e,r){return{$:3,a:e,b:r}}),V$=function(e){return{$:2,a:e}},mh=v(function(e,r){return t(ma,$([wr(function(){switch(e){case 0:return t(ee," ",$([p.be,p.hL,p.fy]));case 1:return t(ee," ",$([p.be,p.hL,p.fR]));case 2:return t(ee," ",$([p.be,p.hL,p.hh]));case 3:return t(ee," ",$([p.be,p.hL,p.hg]));case 4:return t(ee," ",$([p.be,p.hL,p.gP]));default:return t(ee," ",$([p.be,p.hL,p.fQ]))}}())]),$([function(){switch(r.$){case 3:return xn("");case 2:var n=r.a;return st(n);case 0:var a=r.a;return a(sr);default:var i=r.a;return t(i.gL,jn,sr)}}()]))}),sh=T(function(e,r,n){var a=t(mh,e,r);switch(n.$){case 0:return e===5?B$($([a])):V$($([a]));case 1:var i=n.a;return e===5?B$(t(M,a,i)):t(si,i,$([a]));case 2:var o=n.a;return e===5?t(si,$([a]),o):V$(t(M,a,o));default:var i=n.a,o=n.b;return e===5?t(si,t(M,a,i),o):t(si,i,t(M,a,o))}}),R$=v(function(e,r){return{$:2,a:e,b:r}}),yn=function(e){return{$:1,a:e}},Nn=v(function(e,r){switch(r.$){case 0:return yn(e);case 1:var n=r.a;return t(R$,n,e);default:var a=r.a,i=r.b;return t(R$,a,i)}}),dh=function(e){switch(e){case 0:return p.cM+(" "+p.dX);case 2:return p.cM+(" "+p.dY);default:return p.cM+(" "+p.fB)}},ph=function(e){switch(e){case 0:return p.cN+(" "+p.fH);case 2:return p.cN+(" "+p.fA);default:return p.cN+(" "+p.fC)}},dt=v(function(e,r){return t(Mr,Cd(e),Jc(r))}),Wr=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),Sn=function(e){return{$:1,a:e}},gh=v(function(e,r){switch(e.$){case 0:switch(r.$){case 0:var i=r.a;return Sn(E(i,0,0));case 1:var o=r.a;return Sn(E(0,o,0));case 2:var l=r.a;return Sn(E(0,0,l));case 3:var n=r.a;return Sn(n);case 4:var n=r.a,f=r.b;return z(Wr,E(0,0,0),E(1,1,1),n,f);default:var n=r.a;return z(Wr,E(0,0,0),n,E(0,0,1),0)}case 1:var a=e.a,i=a.a,o=a.b,l=a.c;switch(r.$){case 0:var c=r.a;return Sn(E(c,o,l));case 1:var u=r.a;return Sn(E(i,u,l));case 2:var m=r.a;return Sn(E(i,o,m));case 3:var n=r.a;return Sn(n);case 4:var n=r.a,f=r.b;return z(Wr,a,E(1,1,1),n,f);default:var s=r.a;return z(Wr,a,s,E(0,0,1),0)}default:var a=e.a,i=a.a,o=a.b,l=a.c,d=e.b,g=e.c,f=e.d;switch(r.$){case 0:var c=r.a;return z(Wr,E(c,o,l),d,g,f);case 1:var u=r.a;return z(Wr,E(i,u,l),d,g,f);case 2:var m=r.a;return z(Wr,E(i,o,m),d,g,f);case 3:var _=r.a;return z(Wr,_,d,g,f);case 4:var x=r.a,y=r.b;return z(Wr,a,d,x,y);default:var S=r.a;return z(Wr,a,S,g,f)}}}),_a=$e(7),U$=$e(36),j$=v(function(e,r){var n=e.a,a=e.b,i=r.a,o=r.b;return t(mi,n|i,a|o)}),an=t(mi,0,0),al=function(e){switch(e.$){case 0:var r=e.a,n=k(r),a="height-px-"+n;return E(an,p.ee+(" "+a),$([b(ir,a,"height",n+"px")]));case 1:return E(t(oe,U$,an),p.c_,D);case 2:var i=e.a;return i===1?E(t(oe,ft,an),p.c$,D):E(t(oe,ft,an),p.ef+(" height-fill-"+k(i)),$([b(ir,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(i))))),"flex-grow",k(i*1e5))]));case 3:var o=e.a,l=e.b,c="min-height-"+k(o),u=b(ir,c,"min-height",k(o)+"px !important"),m=al(l),s=m.a,d=m.b,g=m.c;return E(t(oe,el,s),c+(" "+d),t(M,u,g));default:var f=e.a,l=e.b,c="max-height-"+k(f),u=b(ir,c,"max-height",k(f)+"px"),_=al(l),s=_.a,d=_.b,g=_.c;return E(t(oe,el,s),c+(" "+d),t(M,u,g))}},N$=$e(38),tl=function(e){switch(e.$){case 0:var r=e.a;return E(an,p.fu+(" width-px-"+k(r)),$([b(ir,"width-px-"+k(r),"width",k(r)+"px")]));case 1:return E(t(oe,N$,an),p.dO,D);case 2:var n=e.a;return n===1?E(t(oe,mt,an),p.dP,D):E(t(oe,mt,an),p.fv+(" width-fill-"+k(n)),$([b(ir,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(n))))),"flex-grow",k(n*1e5))]));case 3:var a=e.a,i=e.b,o="min-width-"+k(a),l=b(ir,o,"min-width",k(a)+"px"),c=tl(i),u=c.a,m=c.b,s=c.c;return E(t(oe,rl,u),o+(" "+m),t(M,l,s));default:var d=e.a,i=e.b,o="max-width-"+k(d),l=b(ir,o,"max-width",k(d)+"px"),g=tl(i),u=g.a,m=g.b,s=g.c;return E(t(oe,rl,u),o+(" "+m),t(M,l,s))}},di=$e(27),hh=v(function(e,r){if(ce(e,di))if(r.$===3){var n=r.c;switch(n){case"0px":return!0;case"1px":return!0;case"2px":return!0;case"3px":return!0;case"4px":return!0;case"5px":return!0;case"6px":return!0;default:return!1}}else return!1;else switch(r.$){case 2:var a=r.a;return a>=8&&a<=32;case 7:r.a;var i=r.b,o=r.c,l=r.d,c=r.e;return ce(i,l)&&ce(i,o)&&ce(i,c)&&i>=0&&i<=24;default:return!1}}),xa=$e(6),H$=$e(30),G$=$e(29),bh=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var s=c.a,d=c.b;switch(s.$){case 0:var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 3:var A=s.a,q=s.b;if(t(tr,A,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=q+(" "+e),f=r,_=t(oe,A,n),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 1:var K=s.a,g=e,f=r,_=n,x=a,y=i,S=t(M,K,o),w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 4:var A=s.a,G=s.b;if(t(tr,A,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else if(t(hh,A,G)){var g=ct(G)+(" "+e),f=r,_=t(oe,A,n),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=ct(G)+(" "+e),f=r,_=t(oe,A,n),x=a,y=t(M,G,i),S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 10:var A=s.a,Y=s.b,g=e,f=r,_=t(oe,A,n),x=t(gh,a,Y),y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 7:var X=s.a;if(t(tr,xa,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else switch(X.$){case 0:var V=X.a,g=p.fu+(" width-px-"+k(V))+(" "+e),f=r,_=t(oe,xa,n),x=a,y=t(M,b(ir,"width-px-"+k(V),"width",k(V)+"px"),i),S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var g=e+(" "+p.dO),f=r,_=t(oe,N$,t(oe,xa,n)),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var ne=X.a;if(ne===1){var g=e+(" "+p.dP),f=r,_=t(oe,mt,t(oe,xa,n)),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=e+(" "+(p.fv+(" width-fill-"+k(ne)))),f=r,_=t(oe,mt,t(oe,xa,n)),x=a,y=t(M,b(ir,p.fK+("."+(p.af+(" > "+L("width-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var fe=tl(X),xe=fe.a,me=fe.b,Yr=fe.c,g=e+(" "+me),f=r,_=t(j$,xe,t(oe,xa,n)),x=a,y=N(Yr,i),S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 8:var se=s.a;if(t(tr,_a,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else switch(se.$){case 0:var V=se.a,we=k(V)+"px",de="height-px-"+we,g=p.ee+(" "+(de+(" "+e))),f=r,_=t(oe,_a,n),x=a,y=t(M,b(ir,de,"height ",we),i),S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var g=p.c_+(" "+e),f=r,_=t(oe,U$,t(oe,_a,n)),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var ne=se.a;if(ne===1){var g=p.c$+(" "+e),f=r,_=t(oe,ft,t(oe,_a,n)),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=e+(" "+(p.ef+(" height-fill-"+k(ne)))),f=r,_=t(oe,ft,t(oe,_a,n)),x=a,y=t(M,b(ir,p.fK+("."+(p.aw+(" > "+L("height-fill-"+k(ne))))),"flex-grow",k(ne*1e5)),i),S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var Fe=al(se),xe=Fe.a,me=Fe.b,Yr=Fe.c,g=e+(" "+me),f=r,_=t(j$,xe,t(oe,_a,n)),x=a,y=N(Yr,i),S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 2:var Me=s.a;switch(Me.$){case 0:var g=e,f=t(Nn,"main",r),_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 1:var g=e,f=t(Nn,"nav",r),_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 2:var g=e,f=t(Nn,"footer",r),_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 3:var g=e,f=t(Nn,"aside",r),_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 4:var Ye=Me.a;if(Ye<=1){var g=e,f=t(Nn,"h1",r),_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else if(Ye<7){var g=e,f=t(Nn,"h"+k(Ye),r),_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=e,f=t(Nn,"h6",r),_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 9:var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 8:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"role","button"),o),w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 5:var Dn=Me.a,g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-label",Dn),o),w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 6:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","polite"),o),w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;default:var g=e,f=r,_=n,x=a,y=i,S=t(M,t(dt,"aria-live","assertive"),o),w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}case 9:var Ua=s.a,Jr=s.b,Yr=function(){switch(Jr.$){case 3:return i;case 2:return Jr.a,i;case 0:return Jr.a,i;default:var ja=Jr.a;return N(i,ja.hV)}}(),g=e,f=r,_=n,x=a,y=Yr,S=o,w=b(sh,Ua,Jr,l),C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e;case 6:var ta=s.a;if(t(tr,H$,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=dh(ta)+(" "+e),f=r,_=function(Ar){switch(ta){case 1:return t(oe,m$,Ar);case 2:return t(oe,f$,Ar);default:return Ar}}(t(oe,H$,n)),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}default:var Ut=s.a;if(t(tr,G$,n)){var g=e,f=r,_=n,x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}else{var g=ph(Ut)+(" "+e),f=r,_=function(Ar){switch(Ut){case 1:return t(oe,s$,Ar);case 2:return t(oe,v$,Ar);default:return Ar}}(t(oe,G$,n)),x=a,y=i,S=o,w=l,C=d;e=g,r=f,n=_,a=x,i=y,o=S,l=w,c=C;continue e}}}else{var u=Yo(a);if(u.$===1)return{aJ:t(M,wr(e),o),aM:l,aR:n,aT:r,hV:i};var m=u.a;return{aJ:t(M,wr(e+(" "+m)),o),aM:l,aR:n,aT:r,hV:t(M,fh(a),i)}}}),_h={$:0},xh=_h,or=O(function(e,r,n,a){return b(vh,e,a,Ha(bh,Lg(e),r,an,xh,D,D,bg,rr(n)))}),tn=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),wh={fO:R,fW:R,hH:j({a2:0,b6:z(tn,155/255,203/255,1,1),eV:P(0,0),bi:3})},yh=function(e){var r=v(function(a,i){switch(a.$){case 0:var o=a.a,l=i.gK;return l.$===1?Te(i,{gK:j(o)}):i;case 1:var c=a.a,u=i.gx;return u.$===1?Te(i,{gx:j(c)}):i;default:var m=a.a,s=i.eS;return s.$===1?Te(i,{eS:j(m)}):i}}),n=function(a){return{gx:function(){var i=a.gx;if(i.$===1)return wh;var o=i.a;return o}(),gK:function(){var i=a.gK;if(i.$===1)return 1;var o=i.a;return o}(),eS:function(){var i=a.eS;if(i.$===1)return 0;var o=i.a;return o}()}};return n(b(He,r,{gx:R,gK:R,eS:R},e))},Sh=v(function(e,r){switch(r.$){case 0:var n=r.a;return n(sr);case 1:var a=r.a.hV,n=r.a.gL;return t(n,e(a),sr);case 2:var i=r.a;return st(i);default:return st("")}}),Ch=T(function(e,r,n){var a=yh(e),i=function(){var o=a.eS;return o===1?l$(a):gg(a)}();return t(Sh,i,z(or,sr,Un,r,Je($([n]))))}),pt=T(function(e,r,n){return{$:4,a:e,b:r,c:n}}),W$=v(function(e,r){return{$:1,a:e,b:r}}),O$=function(e){return{$:2,a:e}},Lh={$:1},ge=v(function(e,r){return{$:4,a:e,b:r}}),il=function(e){return{$:3,a:e}},q$=$e(8),J$=$e(14),Y$=$e(5),X$=$e(4),wa=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return De(r)+("-"+(De(n)+("-"+(De(a)+("-"+De(i))))))},pi=Ts,ol=Ms,K$=v(function(e,r){return N(r,function(){switch(e.$){case 0:return"serif";case 1:return"sans-serif";case 2:return"monospace";case 3:var n=e.a;return t(ee,"-",ol(pi(n)));case 4:var n=e.a;return e.b,t(ee,"-",ol(pi(n)));default:var n=e.a.hc;return t(ee,"-",ol(pi(n)))}}())}),Ph=function(){var e=$([il("Open Sans"),il("Helvetica"),il("Verdana"),Lh]);return $([t(ge,q$,b(pt,"bg-"+wa(z(tn,1,1,1,0)),"background-color",z(tn,1,1,1,0))),t(ge,J$,b(pt,"fc-"+wa(z(tn,0,0,0,1)),"color",z(tn,0,0,0,1))),t(ge,X$,O$(20)),t(ge,Y$,t(W$,b(Ie,K$,"font-",e),e))])}(),zh=T(function(e,r,n){var a=e.hl;return b(Ch,a,t(M,mr(t(ee," ",$([p.hA,p.fK,p.hL]))),N(Ph,r)),n)}),Z$={$:3},Q$=function(e){return{$:2,a:e}},ll=wd,ev=v(function(e,r){switch(r.$){case 1:var n=r.a;return qo({gL:v(function(o,l){return t(ll,e,t(n.gL,o,l))}),hV:n.hV});case 0:var a=r.a;return ot(t(lt,ll(e),a));case 2:var i=r.a;return Q$(i);default:return Z$}}),cl=ev,Mh=ll,Th=function(e){return{$:0,a:e}},ye=Th,kh=Sd,pr=kh,rv={$:1},gi=function(e){return{$:5,a:e}},nv=gi(0),Fr=T(function(e,r,n){return z(tn,e/255,r/255,n/255,1)}),av=b(Fr,0,0,0),Dh=Mr("d"),Fh=Mr("fill"),Ih=Mr("height"),tv=Wc("http://www.w3.org/2000/svg"),Ah=tv("path"),Eh=tv("svg"),Bh=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},Vh=function(e){var r=Bh(e);return"rgba("+(k(Le(r.hu*255))+(","+k(Le(r.gA*255))+(","+k(Le(r.fS*255))+(","+ae(r.fI)+")"))))},Rh=Mr("viewBox"),Uh=Mr("width"),ya=T(function(e,r,n){return t(Eh,$([Rh("0 0 100 100"),Uh(k(e)),Ih(k(e))]),$([t(Ah,$([Dh(n),Fh(Vh(r))]),D)]))}),jh={$:1},lr=jh,iv=function(e){return{$:7,a:e}},Q=iv,he=v(function(e,r){return z(or,sr,Un,t(M,Q(lr),t(M,pe(lr),e)),Je($([r])))}),ov=function(e){return{$:2,a:e}},ve=ov(1),Hn={gn:"M79.1666 37.5H62.4999V12.5H37.4999V37.5H20.8333L49.9999 66.6667L79.1666 37.5ZM20.8333 75V83.3333H79.1666V75H20.8333Z",gz:"M50.1084 8.33338C29.7206 8.33076 12.3409 23.1166 9.07669 43.2414C5.81246 63.3662 17.6275 82.8874 36.9709 89.3292C39.0542 89.7042 39.8 88.425 39.8 87.325C39.8 86.3375 39.7667 83.7209 39.7542 80.2417C28.1917 82.7417 25.75 74.6667 25.75 74.6667C24.9888 72.154 23.3524 69.9973 21.1375 68.5875C17.3875 66.0084 21.425 66.0667 21.425 66.0667C24.0945 66.4327 26.444 68.0144 27.7875 70.35C28.9248 72.4178 30.8407 73.9457 33.1096 74.5943C35.3786 75.2429 37.8126 74.9585 39.8709 73.8042C40.0643 71.6959 41.0023 69.7254 42.5167 68.2459C33.2917 67.2 23.5917 63.6334 23.5917 47.7042C23.5405 43.5842 25.0704 39.6013 27.8667 36.575C26.6015 32.9888 26.7505 29.0553 28.2834 25.575C28.2834 25.575 31.7709 24.4542 39.7084 29.8292C46.5161 27.9626 53.7007 27.9626 60.5084 29.8292C68.45 24.45 71.9334 25.575 71.9334 25.575C73.4733 29.0536 73.6224 32.9899 72.35 36.575C75.1565 39.601 76.6852 43.5944 76.6167 47.7209C76.6167 63.6917 66.9084 67.2 57.65 68.2292C59.6472 70.2711 60.6715 73.0723 60.4625 75.9209C60.4625 81.4792 60.4125 85.9625 60.4125 87.325C60.4125 88.4375 61.1542 89.7292 63.275 89.3209C82.6103 82.8682 94.4127 63.3458 91.1418 43.2264C87.8708 23.1069 70.4919 8.32871 50.1084 8.33338Z",gG:"M50 88.9583L43.9583 83.4583C22.5 64 8.33331 51.1667 8.33331 35.4167C8.33331 22.5833 18.4166 12.5 31.25 12.5C38.5 12.5 45.4583 15.875 50 21.2083C54.5416 15.875 61.5 12.5 68.75 12.5C81.5833 12.5 91.6667 22.5833 91.6667 35.4167C91.6667 51.1667 77.5 64 56.0416 83.5L50 88.9583Z",ho:"M25 79.1667H41.6667V20.8334H25V79.1667ZM58.3333 20.8334V79.1667H75V20.8334H58.3333Z",hp:"M33.3334 20.8334V79.1667L79.1667 50L33.3334 20.8334Z",ht:"M50 83.3333C68.4094 83.3333 83.3333 68.4094 83.3333 50C83.3333 31.5905 68.4094 16.6666 50 16.6666C31.5905 16.6666 16.6666 31.5905 16.6666 50C16.6666 68.4094 31.5905 83.3333 50 83.3333Z",hN:"M29.1667 87.5H20.8334V79.1667H8.33337V70.8333H20.8334V62.5H29.1667V87.5ZM91.6667 79.1667H37.5V70.8333H91.6667V79.1667ZM70.8334 62.5H62.5V54.1667H8.33337V45.8333H62.5V37.55H70.8334V62.5ZM91.6667 54.1667H79.1667V45.8333H91.6667V54.1667ZM45.8334 37.5H37.5V29.1667H8.33337V20.8333H37.5V12.5H45.8334V37.5ZM91.6667 29.1667H54.1667V20.8333H91.6667V29.1667Z",ig:"M83.3126 27.8666C87.0477 25.6336 89.8425 22.1176 91.1751 17.9749C87.6653 20.0574 83.8252 21.5244 79.8209 22.3124C74.2692 16.4396 65.473 15.0104 58.3476 18.8235C51.2221 22.6365 47.5313 30.7478 49.3376 38.6249C34.9609 37.9031 21.5666 31.1121 12.4876 19.9416C7.7494 28.1142 10.1707 38.5615 18.0209 43.8166C15.1822 43.7253 12.4064 42.9567 9.92506 41.5749C9.92506 41.6499 9.92506 41.7249 9.92506 41.7999C9.92671 50.3131 15.9266 57.6461 24.2709 59.3332C21.6378 60.0496 18.8759 60.1551 16.1959 59.6416C18.5426 66.9219 25.2524 71.9095 32.9001 72.0582C26.566 77.0296 18.7437 79.7256 10.6917 79.7124C9.26453 79.7145 7.83844 79.6324 6.4209 79.4666C14.5975 84.7209 24.1141 87.5097 33.8334 87.4999C47.3553 87.5928 60.3502 82.262 69.9114 72.7C79.4727 63.138 84.8024 50.1426 84.7084 36.6207C84.7084 35.8457 84.6903 35.0749 84.6542 34.3082C88.1561 31.7774 91.1784 28.6422 93.5792 25.0499C90.3168 26.496 86.8562 27.4454 83.3126 27.8666Z",ij:"M37.5 66.6667H62.5V41.6667H79.1667L50 12.5L20.8334 41.6667H37.5V66.6667ZM20.8334 75H79.1667V83.3333H20.8334V75Z",fx:"M58.55,67.52a4.61,4.61,0,1,1-4.61-4.61A4.6,4.6,0,0,1,58.55,67.52Zm12.9-35A17.51,17.51,0,0,1,53.94,50,17.51,17.51,0,0,0,53,85a35,35,0,0,1,.9-70A17.51,17.51,0,0,1,71.45,32.51Zm-12.9,0a4.61,4.61,0,1,0-4.61,4.6A4.6,4.6,0,0,0,58.55,32.51Z"},Sa={c3:260,bE:54},on=function(e){return t(ge,q$,b(pt,"bg-"+wa(e),"background-color",e))},Nh=$e(28),Cn=function(e){return t(ge,Nh,b(pt,"bc-"+wa(e),"border-color",e))},hi=1,yr=v(function(e,r){return z(or,hi,Un,t(M,mr(p.gc+(" "+p.bt)),t(M,pe(lr),t(M,Q(lr),e))),Je(r))}),Hh=b(Fr,83,83,83),lv=O(function(e,r,n,a){return z(tn,e/255,r/255,n/255,a)}),bi=z(lv,56,56,56,.25),Ue=Z$,gt=Ve(function(e,r,n,a,i){return{$:7,a:e,b:r,c:n,d:a,e:i}}),ht=$e(2),Gn=function(e){var r=e;return t(ge,ht,F(gt,"p-"+k(e),r,r,r,r))},cv=T(function(e,r,n){return{$:5,a:e,b:r,c:n}}),uv=$e(3),$v=v(function(e,r){return"spacing-"+(k(e)+("-"+k(r)))}),Ln=function(e){return t(ge,uv,b(cv,t($v,e,e),e,e))},Gh=z(lv,0,0,0,0),Wh=function(e){return{$:4,a:e}},ul=0,Pn=v(function(e,r){return z(or,ul,Un,t(M,mr(p.bt+(" "+p.ax)),t(M,Q(lr),t(M,pe(lr),e))),Je(r))}),Oh=function(e){switch(e.$){case 0:var r=e.a;return r;case 1:var n=e.a;return n.gL(t(l$,{gx:{fO:R,fW:R,hH:R},gK:1,eS:0},n.hV));case 2:var a=e.a;return ci(xn(a));default:return ci(xn(""))}},qh=v(function(e,r){return Oh(e(r))}),Jh=yd,Yh=v(function(e,r){return ot(b(Jh,qh,e,r))}),zn=function(e){return t(ge,J$,b(pt,"fc-"+wa(e),"color",e))},$l=b(Fr,195,195,195),Mn=v(function(e,r){return{$:3,a:e,b:r}}),vv=$e(13),Xh=t(Mn,vv,p.h7),Kh=$e(20),fv=t(Mn,Kh,p.hF),Wn=function(e){return t(ge,X$,O$(e))},vl=t(Mn,vv,p.fV),fl=v(function(e,r){if(r.$===-2)return Nr;var n=r.a,a=r.b,i=r.c,o=r.d,l=r.e;return F(te,n,a,t(e,a,i),t(fl,e,o),t(fl,e,l))}),mv=v(function(e,r){if(ce(e,r)){var n=e;return t(ge,ht,F(gt,"p-"+k(e),n,n,n,n))}else{var a=r,i=e;return t(ge,ht,F(gt,"p-"+(k(e)+("-"+k(r))),a,i,a,i))}}),Tn=function(e){return Q$(e)},Zh=function(e){return b(Po,T(function(r,n,a){return t(M,n,a)}),D,e)},Qh=v(function(e,r){return{$:3,a:e,b:r}}),e3=v(function(e,r){return{$:2,a:e,b:r}}),r3=v(function(e,r){return{$:0,a:e,b:r}}),n3=v(function(e,r){return{$:1,a:e,b:r}}),bt=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),a3=z(bt,0/255,0/255,0/255,1),_i=function(e){return{$:6,a:e}},t3=_i(0),xi=function(e){return{$:2,a:e}},i3={$:6},sv=xi(i3),dv=T(function(e,r,n){if(r.$===1)return r.a,z(or,hi,yn("label"),e,Je($([n])));var a=r.a,i=r.b,o=r.c,l=z(or,sr,Un,i,Je($([o])));switch(a){case 2:return z(or,hi,yn("label"),t(M,mr(p.ci),e),Je($([l,n])));case 3:return z(or,hi,yn("label"),t(M,mr(p.ci),e),Je($([n,l])));case 0:return z(or,ul,yn("label"),t(M,mr(p.ci),e),Je($([n,l])));default:return z(or,ul,yn("label"),t(M,mr(p.ci),e),Je($([l,n])))}}),ml=dt,ln=gi(1),pv="Enter",o3=function(e){return{$:5,a:e}},gv=function(e){if(e.$===1){var r=e.a;return xi(o3(r))}else return Rn},hv=function(e){return e.$===1},l3=function(e){return{$:0,a:e}},sl=Oc,c3=v(function(e,r){return t(sl,e,l3(r))}),bv=function(e){return t(c3,"click",nr(e))},u3=js,$3=function(e){return{$:2,a:e}},v3=v(function(e,r){return t(sl,e,$3(r))}),_v=function(e){var r=function(a){var i=e(a);if(i.$===1)return u3("No key matched");var o=i.a;return nr(o)},n=t(W,r,t(H,"key",fa));return Ce(t(v3,"keydown",t(Kt,function(a){return P(a,!0)},n)))},f3=$e(21),On=t(Mn,f3,p.gf),xv=" ",wv=function(e){return t(Mr,"tabIndex",k(e))},m3=t(lt,Ce,wv),s3=v(function(e,r){var n=r.em,a=r.gM,i=r.f6,o=r.bI,l=N($([hv(n)?Rn:Ln(6),Ce(bv(o(!i))),sv,_v(function(c){return ce(c,pv)||ce(c,xv)?j(o(!i)):R}),m3(0),On,t3,Q(ve)]),e);return b(dv,t(M,Ce(t(ml,"role","checkbox")),t(M,Ce(t(ml,"aria-checked",i?"true":"false")),t(M,gv(n),l))),n,z(or,sr,Un,$([ln,pe(ve),Q(lr)]),Je($([a(i)]))))}),d3=T(function(e,r,n){return N(t(at,e-Bn(n),ti(r)),n)}),wi=cs,yv=function(e){var r=function(n){return n<10?k(n):ti(Yu(87+n))};return e<16?r(e):N(yv(e/16|0),r(t(wi,16,e)))},p3=t(Ge,yv,t(d3,2,"0")),dl=function(e){var r=e.a,n=e.b,a=e.c,i=e.d;return{fI:i,fS:a,gA:n,hu:r}},g3=function(e){var r=dl(e),n=r.hu,a=r.gA,i=r.fS;return t(ee,"",t(M,"#",t(J,t(Ge,Le,p3),$([n*255,a*255,i*255]))))},pl=$e(12),Sv=t(Mn,pl,p.h$),gl=_i(1),qn=us,yi=function(e){return e*qn/180},h3=function(e){return{$:1,a:e}},hl=v(function(e,r){return{$:10,a:e,b:r}}),b3=$e(26),_3=function(e){return t(hl,b3,h3(-e))},Ca=T(function(e,r,n){return z(tn,e,r,n,1)}),x3=tn,w3=v(function(e,r){return{$:4,a:e,b:r}}),y3=$e(24),S3=function(e){return t(hl,y3,t(w3,E(0,0,1),e))},C3=$e(17),Jn=function(e){return t(ge,C3,b(ir,"br-"+k(e),"border-radius",k(e)+"px"))},L3=function(e){return pa($([e.ej?"box-inset":"box-",De(e.eV.a)+"px",De(e.eV.b)+"px",De(e.a2)+"px",De(e.bi)+"px",wa(e.b6)]))},P3=$e(19),z3=function(e){var r={a2:e.a2,b6:e.b6,ej:!1,eV:e.eV,bi:e.bi};return t(ge,P3,b(ir,L3(r),"box-shadow",Xo(r)))},Cv=v(function(e,r){return{$:12,a:e,b:r}}),Lv=$e(0),M3=function(e){return e?t(ge,Lv,t(Cv,"transparent",1)):t(ge,Lv,t(Cv,"visible",0))},bl=b(Ca,1,1,1),_l=Ve(function(e,r,n,a,i){return{$:6,a:e,b:r,c:n,d:a,e:i}}),Si=function(e){return t(ge,di,F(_l,"b-"+k(e),e,e,e,e))},T3=v(function(e,r){return t(ge,di,F(_l,"b-"+(k(e)+("-"+k(r))),r,e,r,e))}),_t=function(e){var r=e.b2,n=e.cH,a=e.g4,i=e.hx;return ce(n,r)&&ce(a,i)?ce(n,i)?Si(n):t(T3,a,n):t(ge,di,F(_l,"b-"+(k(n)+("-"+(k(i)+("-"+(k(r)+("-"+k(a))))))),n,i,r,a))},k3=function(e){return t(he,$([mr("focusable"),Q(ye(14)),pe(ye(14)),zn(bl),ln,Wn(9),Sv,Jn(3),Cn(e?b(Ca,59/255,153/255,252/255):b(Ca,211/255,211/255,211/255)),z3({a2:1,b6:e?z(x3,238/255,238/255,238/255,0):b(Ca,238/255,238/255,238/255),eV:P(0,0),bi:1}),on(e?b(Ca,59/255,153/255,252/255):bl),Si(e?0:1),Wo(t(he,$([Cn(bl),pe(ye(6)),Q(ye(9)),S3(yi(-45)),gl,ln,_3(1),M3(!e),_t({b2:2,g4:2,hx:0,cH:0})]),Ue))]),Ue)},D3=xr("htmlFor"),xl=v(function(e,r){if(r.$)return R;var n=r.a;return e(n)}),Ci=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return e(n)}}),Pv=O(function(e,r,n,a){return{gR:r,g8:e,hf:n,hW:a}}),F3=Kd,I3=Bs,A3=v(function(e,r){if(r.$)return Ze(e);var n=r.a;return Ae(n)}),E3=Xd,B3=function(e){return t(E3,{f2:!1,hb:!1},e)},Li=function(e){if(e.b){var r=e.a;return e.b,j(r)}else return R},V3=v(function(e,r){if(r.$){var a=r.a;return Ze(a)}else{var n=r.a;return Ae(e(n))}}),R3=function(e){return{$:2,a:e}},U3=function(e){return{$:0,a:e}},j3=function(e){return{$:1,a:e}},wl=v(function(e,r){return jr(r)-jr(e)}),yl=T(function(e,r,n){var a=jr(n);return le(jr(e),a)<1&&le(a,jr(r))<1}),N3=v(function(e,r){var n=function(i){return le(i,e)<0?Ae(i):Ze(j3(r))},a=b(yl,"0","9",r)?Ae(t(wl,"0",r)):b(yl,"a","z",r)?Ae(10+t(wl,"a",r)):b(yl,"A","Z",r)?Ae(10+t(wl,"A",r)):Ze(U3(r));return t(Ci,n,a)}),zv=v(function(e,r){var n=ca(r);if(n.$===1)return Ae(0);var a=n.a,i=a.a,o=a.b;return t(Ci,function(l){return t(Ci,function(c){return Ae(l+c*e)},t(zv,e,o))},t(N3,e,i))}),H3=v(function(e,r){return 2<=e&&e<=36?t(zv,e,No(r)):Ze(R3(e))}),G3=H3(16),W3=T(function(e,r,n){return z(bt,e,r,n,1)}),O3=O(function(e,r,n,a){return z(bt,e,r,n,a)}),xt=ls,q3=v(function(e,r){var n=t(xt,10,e);return Le(r*n)/n}),J3=function(){var e="^#?(?:(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d]))|(?:([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2}))|(?:([a-f\\d])([a-f\\d])([a-f\\d])([a-f\\d])))$",r=function(n){var a=Ju(n);if(a.b&&!a.b.b){var i=a.a;return I3($([i,i]))}else return n};return t(Ge,pi,t(Ge,function(n){return t(ke,function(a){return b(F3,1,a,n)},B3(e))},t(Ge,xl(Li),t(Ge,ke(function(n){return n.hW}),t(Ge,ke(nn(Dr)),t(Ge,A3("Parsing hex regex failed"),Ci(function(n){var a=t(J,t(Ge,r,t(Ge,G3,V3(Ka))),n);e:for(;;)if(a.b&&!a.a.$&&a.b.b&&!a.b.a.$&&a.b.b.b&&!a.b.b.a.$)if(a.b.b.b.b)if(!a.b.b.b.a.$&&!a.b.b.b.b.b){var i=a.a.a,o=a.b,l=o.a.a,c=o.b,u=c.a.a,m=c.b,s=m.a.a;return Ae(z(O3,i/255,l/255,u/255,t(q3,2,s/255)))}else break e;else{var i=a.a.a,d=a.b,l=d.a.a,g=d.b,u=g.a.a;return Ae(b(W3,i/255,l/255,u/255))}else break e;return Ze("Parsing ints from hex failed")})))))))}(),Y3=xr("id"),X3=en("input"),K3=en("label"),Mv=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Z3=Mv(0),Q3=xr("name"),eb=function(e){return P(e,!0)},rb=function(e){return{$:1,a:e}},nb=v(function(e,r){return t(sl,e,rb(r))}),ab=v(function(e,r){return b(He,H,r,e)}),tb=t(ab,$(["target","value"]),fa),Tv=function(e){return t(nb,"input",t(Kt,eb,t(Kt,e,tb)))},ib=t(Mn,pl,p.h4),kv=t(Mn,pl,p.h8),Sl=function(e){return t(o$,5,e)},Cl=function(e){return t(ge,Y$,t(W$,b(Ie,K$,"ff-",e),e))},ob=b(Fr,195,195,195),Dv=b(Fr,69,69,69),lb=Mv(2),cb={$:2},Ll=cb,ub=$e(32),$b=$e(31),Fv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===8){var i=r.a;return j(i)}else return R;else{var a=n.a;return j(a)}}),R,e)},vb=v(function(e,r){return t(Se,r,b(He,v(function(n,a){if(a.$)if(n.$===4&&n.b.$===5){var o=n.b,i=o.b,l=o.c;return j(P(i,l))}else return R;else{var i=a.a;return j(i)}}),R,e))}),Iv=function(e){return b(He,v(function(r,n){if(n.$)if(r.$===7){var i=r.a;return j(i)}else return R;else{var a=n.a;return j(a)}}),R,e)},fb=$e(33),mb=xr("max"),sb=xr("min"),db=v(function(e,r){return t(ge,uv,b(cv,t($v,e,r),e,r))}),pb=function(e){return t(xr,"step",e)},Av=xr("type"),Ev=xr("value"),La=ov,gb=zd,Bv=v(function(e,r){switch(r.$){case 0:return Rn;case 2:var n=r.a;return xi(n);case 6:var a=r.a;return _i(a);case 5:var i=r.a;return gi(i);case 7:var a=r.a;return iv(a);case 8:var a=r.a;return t$(a);case 3:var a=r.a,i=r.b;return t(Mn,a,i);case 4:var o=r.a,l=r.b;return t(ge,o,l);case 9:var c=r.a,u=r.b;return t(i$,c,t(ev,e,u));case 1:var m=r.a;return Ce(t(gb,e,m));default:var s=r.a,d=r.b;return t(hl,s,d)}}),hb=T(function(e,r,n){return t(Pn,$([Q(ve),pe(t(Se,ve,n)),ln]),$([t(he,$([Q(La(Le(e*1e4)))]),Ue),t(he,t(M,ln,t(J,Bv(et),r)),Ue),t(he,$([Q(La(Le(ue(1-e)*1e4)))]),Ue)]))}),bb=T(function(e,r,n){return t(yr,$([pe(ve),Q(t(Se,ve,n)),gl]),$([t(he,$([pe(La(Le(ue(1-e)*1e4)))]),Ue),t(he,t(M,gl,t(J,Bv(et),r)),Ue),t(he,$([pe(La(Le(e*1e4)))]),Ue)]))}),Vv=v(function(e,r){var n=Iv(e),a=Fv(e),i=function(){var S=P(n,a);e:for(;;)if(S.a.$===1){if(S.b.$===1)return S.a,S.b,!1;break e}else if(!S.a.a.$&&!S.b.$)switch(S.b.a.$){case 0:var w=S.a.a.a,C=S.b.a.a;return le(C,w)>0;case 2:return!0;default:break e}else break e;return!1}(),o=(r.cI-r.cr)/(r.cq-r.cr),l=r.ic,c=l,u=Fv(c),m=function(){if(u.$===1)return"20px";if(u.a.$)return"100%";var S=u.a.a;return k(S)+"px"}(),s=Iv(c),d=function(){if(s.$===1)return"20px";if(s.a.$)return"100%";var S=s.a.a;return k(S)+"px"}(),g="thmb-"+(d+("-"+m)),f=$([t(re,"width",d),t(re,"height",m)]),_=t(vb,e,P(5,5)),x=_.a,y=_.b;return b(dv,$([hv(r.em)?Rn:t(db,x,y),sv,Q(function(){if(n.$===1)return ve;if(n.a.$){var S=n.a;return S}else return lr}()),pe(function(){if(a.$===1)return lr;if(a.a.$){var S=a.a;return S}else return lr}())]),r.em,t(Pn,$([Q(t(Se,ve,n)),pe(t(Se,ye(20),a))]),$([z(or,sr,yn("input"),$([gv(r.em),t(ge,ub,t(ut,'input[type="range"].'+(g+"::-moz-range-thumb"),f)),t(ge,fb,t(ut,'input[type="range"].'+(g+"::-webkit-slider-thumb"),f)),t(ge,$b,t(ut,'input[type="range"].'+(g+"::-ms-thumb"),f)),Ce(wr(g+" ui-slide-bar focusable-parent")),Ce(Tv(function(S){var w=qu(S);if(w.$===1)return r.bI(0);var C=w.a;return r.bI(C)})),Ce(Av("range")),Ce(pb(function(){var S=r.cE;if(S.$===1)return"any";var w=S.a;return ae(w)}())),Ce(sb(ae(r.cr))),Ce(mb(ae(r.cq))),Ce(Ev(ae(r.cI))),i?Ce(t(ml,"orient","vertical")):Rn,Q(i?t(Se,ye(20),a):t(Se,ve,n)),pe(i?t(Se,ve,n):t(Se,ye(20),a))]),Je(D)),t(he,t(M,Q(t(Se,ve,n)),t(M,pe(t(Se,ye(20),a)),N(e,$([Sl(i?b(bb,o,t(M,mr("focusable-thumb"),c),n):b(hb,o,t(M,mr("focusable-thumb"),c),a))])))),Ue)])))}),_b=b(Ca,.5,.5,.5),Rv=Dr,Uv=function(e){var r=e.c2,n=e.cI,a=e.cr,i=e.cq,o=e.cE,l=e.bI;return t(he,$([Q(ve)]),t(Vv,$([Ln(2),Sl(t(he,$([Q(ve),pe(ye(16)),ln,on(Dv),Jn(4)]),Ue))]),{em:t(lb,D,t(Pn,$([Q(ve)]),$([t(he,$([ib]),Tn(r)),t(he,$([Q(ve),kv,Cl($([Ll]))]),Tn(ae(n)))]))),cq:i,cr:a,bI:l,cE:j(o),ic:Rv($([Q(ye(12)),pe(ye(12)),Jn(4),Si(0),Cn(_b),on(ob)])),cI:n}))},xb=v(function(e,r){if(r.$)return e;var n=r.a;return n}),wb=v(function(e,r){switch(r.$){case 3:var n=r.a;return t(s3,D,{f6:n,gM:k3,em:t(Z3,D,Tn(e)),bI:Qh(e)});case 0:var a=r.a,i=a.a,o=a.b,n=r.b;return Uv({c2:e,cq:o,cr:i,bI:r3(e),cE:.001*(o-i),cI:n});case 1:var l=r.a,i=l.a,o=l.b,n=r.b;return Uv({c2:e,cq:o,cr:i,bI:t(Ge,Le,n3(e)),cE:1,cI:n});default:var n=r.a;return t(he,$([Q(ve)]),bn(t(ma,D,$([t(ma,$([t(pr,"margin-bottom","6px")]),$([t(K3,$([D3(e)]),$([nl(e)]))])),t(X3,$([Av("color"),t(pr,"width","100%"),t(pr,"height","26px"),t(pr,"padding","0px"),Y3(e),Q3(e),Tv(function(c){return t(e3,e,t(xb,a3,J3(c)))}),Ev(g3(n))]),D)]))))}}),Pl=b(Fr,255,255,255),yb=function(e){return t(yr,$([Q(ve),Ln(8),t(mv,0,14),_t({b2:1,g4:0,hx:0,cH:0}),Cn(bi)]),$([t(he,$([Wn(16),vl,zn(Pl)]),Tn(e.hc)),t(yr,$([Q(ve),Ln(6)]),Zh(t(fl,wb,e.aN)))]))},Sb=function(e){return t(yr,$([Q(ve),pe(ve),zn($l),Wn(12),Xh,fv]),t(J,yb,e))},Cb=Yh(Sb),Lb=function(e){return t(yr,$([Q(ve),pe(ve)]),$([t(Pn,$([Ln(14),Q(ve)]),D),t(cl,Wh,Cb(Vn(e).gb))]))},Pb=function(e){return{$:6,a:e}},zb=O(function(e,r,n,a){return"pad-"+(k(e)+("-"+(k(r)+("-"+(k(n)+("-"+k(a)))))))}),Mb=function(e){var r=e.cH,n=e.hx,a=e.b2,i=e.g4;if(ce(r,n)&&ce(r,a)&&ce(r,i)){var o=r;return t(ge,ht,F(gt,"p-"+k(r),o,o,o,o))}else return t(ge,ht,F(gt,z(zb,r,n,a,i),r,n,a,i))},Tb=function(e){return{$:0,a:e}},kb=function(e){return{$:1,a:e}},Db=kb,Fb=function(e){var r=e.b.X;return En(r)},Pi=b(Fr,255,60,0),Ib=function(e){var r=e.b.X;e.b.s;var n=e.b.an;return En(r)+1+En(n)},Ab=function(e){var r=P(Fb(e),Ib(e)-1),n=r.a,a=r.b;return t(he,$([Q(ve),ln]),t(Vv,$([Sl(t(Pn,$([Q(ve),pe(ye(4)),ln,on(Dv),Jn(2)]),$([t(he,$([Q(La(n)),pe(ve),on(Pi),Jn(2)]),Ue),t(he,$([Q(La(a-n))]),Ue)])))]),{em:Db(""),cq:a,cr:0,bI:t(Ge,Le,Tb),cE:j(1),ic:Rv($([Q(ye(12)),pe(ye(12)),Jn(6),on(Pi)])),cI:n}))},Eb=_i(2),zi=b(Fr,220,220,220),Bb=function(e){var r=e.a,n=function(){return r.$?$([zn(zi)]):$([zn(Pi)])}();return t(he,N(n,$([Wn(14),Eb,kv,Cl($([Ll]))])),Tn(t(Qu,3,Vn(e).d1)))},Vb=function(e){e.a;var r=e.b.X;return t(ke,function(n){return Le(60/(Vn(e).d1-n))},t(ke,t(Ge,Fu,function(n){return n.d1}),Li(t(Hu,59,r))))},Rb=function(e){var r=Vb(e);if(r.$===1)return Ue;var n=r.a;return t(he,$([Wn(14),zn($l),Cl($([Ll]))]),Tn(k(n)+" FPS"))},jv={$:1},Ub={$:3},jb={$:2},Nb={$:8},Hb=Kr,Gb=v(function(e,r){return t(ho,e,Hb(r))}),Wb=Gb("disabled"),Ob=function(e){if(e.$===4&&e.b.$===11&&!e.b.a){var r=e.b;return r.a,!0}else return!1},qb=function(e){return t(nt,Ob,e)?Rn:mr("focusable")},Mi=t(lt,Ce,bv),Nv=v(function(e,r){var n=r.eW,a=r.em;return z(or,sr,Un,t(M,Q(lr),t(M,pe(lr),t(M,mr(p.ca+(" "+(p.ax+(" "+(p.hG+(" "+p.eU)))))),t(M,On,t(M,qb(e),t(M,xi(Nb),t(M,Ce(wv(0)),function(){if(n.$===1)return t(M,Ce(Wb(!0)),e);var i=n.a;return t(M,Mi(i),t(M,_v(function(o){return ce(o,pv)||ce(o,xv)?j(i):R}),e))}()))))))),Je($([a])))}),Hv=v(function(e,r){return t(Nv,D,{em:t(he,$([Q(ye(36)),Gn(3),zn(r),Sv,Wn(12),vl,Cn(r),Si(1),Jn(4)]),Tn("REC")),eW:j(e)})}),Gv=T(function(e,r,n){return t(Nv,D,{em:bn(b(ya,20,n,e)),eW:j(r)})}),Jb=function(e){var r=e.a;e.b.X,e.b.s;var n=e.b.an;return t(Pn,D,$([t(he,$([Q(ye(40))]),function(){switch(r.$){case 0:return t(Hv,jv,Pi);case 1:return t(Hv,jb,zi);default:return Ue}}()),t(he,$([Q(ye(28))]),function(){switch(r.$){case 0:return Ue;case 1:return wn(n)?Ue:b(Gv,Hn.hp,Ub,zi);default:return b(Gv,Hn.ho,jv,zi)}}())]))},Yb=function(e){return t(yr,$([Q(ve)]),$([Ab(e),t(Pn,$([Q(ve),Ln(14),t(mv,0,6),ln]),$([Jb(e),Rb(e),Bb(e)]))]))},Xb=function(e){return t(yr,$([Q(ve),Ln(14),Mb({b2:20,g4:0,hx:0,cH:0}),_t({b2:1,g4:0,hx:0,cH:0}),Cn(bi)]),$([t(he,$([Wn(16),vl,zn($l)]),Tn("Time Travel")),t(cl,Pb,Yb(e))]))},Kb=v(function(e,r){return t(yr,$([Vn(r).dC.im>600?on(Hh):on(Gh),_t({b2:0,g4:0,hx:1,cH:0}),Cn(bi),Q(ye(Sa.c3)),pe(ve)]),$([function(){return e?Ue:t(yr,$([Q(ve),pe(ve),Gn(14),Ln(14)]),$([Xb(r),Lb(r)]))}()]))}),Zb=function(e){return{$:3,a:e}},Wv=gi(2),Qb=b(Fr,232,78,50),e1=b(Fr,48,48,48),r1=function(e){return t(xr,"href",Pd(e))},n1=Mr("rel"),a1=xr("target"),Ov=v(function(e,r){var n=r.fn,a=r.em;return z(or,sr,yn("a"),t(M,Ce(r1(n)),t(M,Ce(n1("noopener noreferrer")),t(M,Ce(a1("_blank")),t(M,Q(lr),t(M,pe(lr),t(M,mr(p.ca+(" "+(p.ax+(" "+p.et)))),e)))))),Je($([a])))}),wt=xr("title"),t1=b(Fr,31,161,242),i1=function(e){var r=T(function(o,l,c){var u=ce(l,e)?Pl:e1;return t(he,$([rn(wt(o)),Mi(Zb(l)),On,Gn(7)]),bn(b(ya,40,u,c)))}),n=t(yr,$([nv]),$([b(r,"Configurations",0,Hn.hN)])),a=t(yr,D,$([t(Ov,$([rn(wt("Twitter")),Wv,On,Gn(7)]),{em:bn(b(ya,40,t1,Hn.ig)),fn:"https://twitter.com/AzizErkalSelman"}),t(Ov,$([rn(wt("Source Code")),Wv,On,Gn(7)]),{em:bn(b(ya,40,Qb,Hn.gz)),fn:"https://github.com/erkal/elm-3d-playground-exploration"})])),i=t(he,$([Q(ye(Sa.bE)),Gn(4),Mi(rv),_t({b2:1,g4:0,hx:0,cH:0}),Cn(bi),On,rn(wt("Activate Distraction Free Mode"))]),bn(b(ya,46,Pl,Hn.fx)));return t(yr,$([Q(ye(Sa.bE)),pe(ve),fv,on(av)]),$([i,n,a]))},o1=function(e){var r=t(he,$([Q(ye(Sa.bE)),nv,Gn(4),Mi(rv),On,rn(wt("Deactivate Distraction Free Mode (A)"))]),bn(b(ya,46,av,Hn.fx)));return e.bw?r:t(Pn,$([Q(ye(Sa.bE+Sa.c3)),pe(ve)]),$([i1(e.bp),t(Kb,e.bp,e.R)]))},l1=T(function(e,r,n){var a=mg(n.R),i=Vn(n.R);return b(zh,{hl:$([dg({fO:R,fW:R,hH:R})])},$([Q(ye(Xa(i.dC.im))),pe(ye(Xa(i.dC.gH))),rn(t(pr,"-webkit-font-smoothing","antialiased")),rn(t(pr,"pointer-events","none")),rn(t(pr,"touch-action","none")),rn(t(pr,"user-select","none")),Wo(t(cl,vg,t(r,i,a))),Wo(o1(n))]),bn(t(Mh,ci(fg),t(e,i,a))))}),c1=vr(function(e,r,n,a,i,o){var l=v(function(u,m){return P(z(ig,r,o,u,m),a$)}),c=function(u){var m=t(Au,n,u.gY);return P({bp:0,bw:!0,R:t(og,m,a),dN:0},a$)};return L0({gS:c,hX:$g,ii:l,ik:t(l1,e,i)})}),u1=O(function(e,r,n,a){return Xe(c1,e,r,n,a,v(function(i,o){return Ue}),T(function(i,o,l){return l}))}),$1=function(e){return{}},v1=T(function(e,r,n){return{aN:n,g0:r,hc:e}}),f1=function(e){return b(Ie,v(function(r,n){var a=r.a,i=r.b;return b(va,a,i,n)}),Jo,e)},m1=T(function(e,r,n){return b(v1,e,r,f1(n))}),zl=m1,cn=T(function(e,r,n){var a=r.a,i=r.b;return P(e,t(Wu,P(a,i),n))}),qv=T(function(e,r,n){var a=r.a,i=r.b;return P(e,t(Ou,P(a,i),n))}),s1=$([b(zl,"Camera",!0,$([b(cn,"camera x",P(0,16),8),b(cn,"camera y",P(0,10),0),b(cn,"camera z",P(0,16),6)])),b(zl,"Parameters",!0,$([b(cn,"radius",P(0,6),1),b(qv,"number of cubes",P(1,100),19),b(qv,"number of waves",P(1,20),2),b(cn,"cube size",P(.1,4),1),b(cn,"cycle duration",P(1,10),5),b(cn,"wave height",P(.5,6),1.5)])),b(zl,"Colors and light",!0,$([b(cn,"saturation",P(0,1),.8),b(cn,"lightness",P(0,1),.7)]))]),d1=v(function(e,r){return r}),Ml=v(function(e,r){return{$:0,a:e,b:r}}),gr=function(e){var r=e;return ue(r)},Tl=v(function(e,r){var n=e,a=r;return le(a,n)>-1}),kl=v(function(e,r){var n=e,a=r;return n+.5*(a-n)}),un=v(function(e,r){var n=e,a=r;return a-n}),$n=function(e){return e},p1=$n({io:-1,is:0,dU:0}),g1=$n({io:0,is:-1,dU:0}),Jv=$n({io:0,is:0,dU:-1}),Yv=$n({io:1,is:0,dU:0}),Dl=$n({io:0,is:1,dU:0}),Fl=$n({io:0,is:0,dU:1}),vn=function(e){return e},We=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),h1=vr(function(e,r,n,a,i,o){var l=t(Tl,n,o)?Fl:Jv,c=t(Tl,r,i)?Dl:g1,u=t(Tl,e,a)?Yv:p1,m=E(gr(t(un,e,a)),gr(t(un,r,i)),gr(t(un,n,o))),s=b(We,t(kl,e,a),t(kl,r,i),t(kl,n,o)),d=vn({dl:s,dS:u,dT:c,dV:l});return{fN:d,a4:m}}),Yn=function(e){var r=e;return r.io},Xn=function(e){var r=e;return r.is},Kn=function(e){var r=e;return r.dU},b1=v(function(e,r){return Xe(h1,Yn(e),Xn(e),Kn(e),Yn(r),Xn(r),Kn(r))}),Il=T(function(e,r,n){return{io:e,is:r,dU:n}}),_1=v(function(e,r){var n=r/2;return t(Ml,e,t(b1,b(Il,-n,-n,-n),b(Il,n,n,n)))}),x1=v(function(e,r){return t(ke,function(n){if(n.$)return 0;var a=n.b;return a},t(tt,e,r.aN))}),w1=v(function(e,r){return t(Se,0,Li(t(nn,x1(e),r)))}),y1=v(function(e,r){return t(w1,e,r.gb)}),fn=y1,S1=v(function(e,r){return t(ke,function(n){if(n.$===1){var a=n.b;return a}else return 0},t(tt,e,r.aN))}),C1=v(function(e,r){return t(Se,0,Li(t(nn,S1(e),r)))}),L1=v(function(e,r){return t(C1,e,r.gb)}),Xv=L1,Al=function(e){return{$:5,a:e}},P1=function(e){return Al(e)},z1=O(function(e,r,n,a){var i=E(e,r,n),o=i.a,l=i.b,c=i.c,u=c<=.5?c*(l+1):c+l-c*l,m=c*2-u,s=function(_){var x=_<0?_+1:_>1?_-1:_;return x*6<1?m+(u-m)*x*6:x*2<1?u:x*3<2?m+(u-m)*(2/3-x)*6:m},d=s(o-1/3),g=s(o),f=s(o+1/3);return z(bt,f,g,d,a)}),M1=T(function(e,r,n){return z(z1,e,r,n,1)}),El=function(e){return{$:0,a:e}},Kv=T(function(e,r,n){return{$:2,a:e,b:r,c:n}}),Zv=T(function(e,r,n){return le(n,e)<0?e:le(n,r)>0?r:n}),Bl=function(e){return b(Zv,0,1,e<=.04045?e/12.92:t(xt,(e+.055)/1.055,2.4))},yt=ep,T1=function(e){var r=dl(e),n=r.hu,a=r.gA,i=r.fS;return b(yt,Bl(n),Bl(a),Bl(i))},k1=function(e){return b(Kv,0,El(T1(e)),El(0))},Qv=v(function(e,r){return{$:2,a:e,b:r}}),ef=v(function(e,r){return{$:4,a:e,b:r}}),rf=v(function(e,r){return{$:3,a:e,b:r}}),nf=v(function(e,r){return{$:1,a:e,b:r}}),D1=T(function(e,r,n){return{io:e,is:r,dU:n}}),F1=function(e){var r=e;return r},Vl=function(e){var r=e;return F1(r.fN)},Rl=function(e){var r=e;return r.a4},Pa=function(e){var r=e;return r.dl},St=v(function(e,r){var n=e,a=r;return{io:a.io+n.io,is:a.is+n.is,dU:a.dU+n.dU}}),Zn=function(e){var r=e;return r.dS},Qn=function(e){var r=e;return r.dT},ea=function(e){var r=e;return r.dV},I1=v(function(e,r){return vn({dl:t(St,e,Pa(r)),dS:Zn(r),dT:Qn(r),dV:ea(r)})}),A1=v(function(e,r){return{fN:t(I1,e,Vl(r)),a4:Rl(r)}}),Ul=v(function(e,r){return{gm:r,dl:e}}),E1=v(function(e,r){var n=r;return t(Ul,t(St,e,n.dl),n.gm)}),B1=v(function(e,r){var n=r;return{m:t(E1,e,n.m),g5:n.g5,hs:n.hs}}),jl=function(e){var r=e;return r},V1=function(e){return e},af=v(function(e,r){var n=jl(r),a=n.a,i=n.b;return V1(P(e(a),e(i)))}),R1=v(function(e,r){return t(af,St(e),r)}),Nl=function(e){var r=e;return r.f4},Hl=function(e){var r=e;return r.hs},tf=v(function(e,r){return{f4:r,hs:gr(e)}}),U1=v(function(e,r){return t(tf,Hl(r),t(St,e,Nl(r)))}),of=v(function(e,r){var n=r,a=n.a,i=n.b,o=n.c;return E(e(a),e(i),e(o))}),j1=v(function(e,r){return t(of,St(e),r)}),Gl=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=b(D1,n,a,i);switch(r.$){case 0:var l=r.a,c=r.b;return t(Ml,l,t(A1,o,c));case 1:var l=r.a,u=r.b;return t(nf,l,t(j1,o,u));case 3:var l=r.a,m=r.b;return t(rf,l,t(U1,o,m));case 2:var l=r.a,s=r.b;return t(Qv,l,t(B1,o,s));case 4:var l=r.a,d=r.b;return t(ef,l,t(R1,o,d));default:var g=r.a;return Al(t(J,Gl(E(n,a,i)),g))}}),N1=function(e){return Gl(E(0,e,0))},H1=function(e){return Gl(E(0,0,e))},Ct=function(e){return e},ra=$s,za=vs,Ti=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=ra(l),u=za(l),m=a.gm,s=m,d=s.io*u,g=c*d,f=d*d,_=s.is*u,x=c*_,y=d*_,S=_*_,w=1-2*(f+S),C=s.dU*u,A=c*C,q=2*(y-A),K=2*(y+A),G=d*C,Y=2*(G+x),X=2*(G-x),V=_*C,ne=2*(V-g),fe=2*(V+g),xe=C*C,me=1-2*(S+xe),se=1-2*(f+xe);return{io:me*o.io+q*o.is+Y*o.dU,is:K*o.io+se*o.is+ne*o.dU,dU:X*o.io+fe*o.is+w*o.dU}}),Lt=T(function(e,r,n){var a=e,i=r,o=n,l=.5*i,c=ra(l),u=za(l),m=a.dl,s=m,d=o.io-s.io,g=o.is-s.is,f=o.dU-s.dU,_=a.gm,x=_,y=x.io*u,S=c*y,w=y*y,C=x.is*u,A=c*C,q=y*C,K=C*C,G=1-2*(w+K),Y=x.dU*u,X=c*Y,V=2*(q-X),ne=2*(q+X),fe=y*Y,xe=2*(fe+A),me=2*(fe-A),se=C*Y,we=2*(se-S),de=2*(se+S),Fe=Y*Y,Me=1-2*(K+Fe),Ye=1-2*(w+Fe);return{io:s.io+Me*d+V*g+xe*f,is:s.is+ne*d+Ye*g+we*f,dU:s.dU+me*d+de*g+G*f}}),G1=T(function(e,r,n){return vn({dl:b(Lt,e,r,Pa(n)),dS:b(Ti,e,r,Zn(n)),dT:b(Ti,e,r,Qn(n)),dV:b(Ti,e,r,ea(n))})}),W1=T(function(e,r,n){return{fN:b(G1,e,r,Vl(n)),a4:Rl(n)}}),O1=v(function(e,r){var n=t(Lt,e,r),a=t(Ti,e,r);return function(i){var o=i;return t(Ul,n(o.dl),a(o.gm))}}),q1=T(function(e,r,n){var a=n;return{m:b(O1,e,r,a.m),g5:a.g5,hs:a.hs}}),J1=T(function(e,r,n){return t(af,t(Lt,e,r),n)}),Y1=T(function(e,r,n){return t(tf,Hl(n),b(Lt,e,r,Nl(n)))}),X1=T(function(e,r,n){return t(of,t(Lt,e,r),n)}),lf=T(function(e,r,n){switch(n.$){case 0:var a=n.a,i=n.b;return t(Ml,a,b(W1,e,r,i));case 1:var a=n.a,o=n.b;return t(nf,a,b(X1,e,r,o));case 3:var a=n.a,l=n.b;return t(rf,a,b(Y1,e,r,l));case 2:var a=n.a,c=n.b;return t(Qv,a,b(q1,e,r,c));case 4:var a=n.a,u=n.b;return t(ef,a,b(J1,e,r,u));default:var m=n.a;return Al(t(J,t(lf,e,r),m))}}),Pt={io:0,is:0,dU:0},Wl=Dl,K1=t(Ul,Pt,Wl),Z1=v(function(e,r){return b(lf,K1,Ct(e),r)}),Q1=v(function(e,r){return(r-Du(r/e)*e)/e}),e_=function(e){return 2*qn*e},r_=O(function(e,r,n,a){return e+(r-e)*(1+ra(e_(t(Q1,n,a))))/2}),n_=function(e){var r=t(fn,"wave height",e),n=t(Xv,"number of waves",e),a=t(Xv,"number of cubes",e),i=t(fn,"cycle duration",e),o=function(l){var c=l/a,u=n*i*c;return t(Z1,yi(360)*c,t(N1,z(r_,-r,r,i,e.d1+u),t(H1,t(fn,"radius",e),t(_1,k1(b(M1,c,t(fn,"saturation",e),t(fn,"lightness",e))),t(fn,"cube size",e)))))};return P1(t(J,o,t(Ur,0,a-1)))},zt=function(e){return Ct(qn*(e/180))},kn=hs,a_=v(function(e,r){var n=e,a=r,i=a.dU-n.dU,o=a.is-n.is,l=a.io-n.io,c=t(qe,ue(l),t(qe,ue(o),ue(i)));if(c){var u=i/c,m=o/c,s=l/c,d=kn(s*s+m*m+u*u);return j({io:s/d,is:m/d,dU:u/d})}else return R}),Ol=function(e){return e},ql=v(function(e,r){var n=e,a=r;return{io:a.is*n.dU-a.dU*n.is,is:a.dU*n.io-a.io*n.dU,dU:a.io*n.is-a.is*n.io}}),ki=function(e){var r=e,n=t(qe,ue(r.io),t(qe,ue(r.is),ue(r.dU)));if(n){var a=r.dU/n,i=r.is/n,o=r.io/n,l=kn(o*o+i*i+a*a);return j({io:o/l,is:i/l,dU:a/l})}else return R},Di=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dU:a.dU-n.dU}}),t_=v(function(e,r){var n=e,a=r;return a.io*n.io+a.is*n.is+a.dU*n.dU}),cf=v(function(e,r){var n=e,a=r;return le(a,n)>0}),i_=v(function(e,r){var n=e,a=r;return le(a,n)<0}),o_=v(function(e,r){var n=e,a=r;return{io:a.io-n.io,is:a.is-n.is,dU:a.dU-n.dU}}),l_=v(function(e,r){var n=e,a=r,i=a.io*n.io+a.is*n.is+a.dU*n.dU;return{io:n.io*i,is:n.is*i,dU:n.dU*i}}),c_=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},Ir=0,uf={io:0,is:0,dU:0},u_=T(function(e,r,n){return t(xl,function(a){var i=t(o_,t(l_,a,r),r);return t(xl,function(o){var l=t(ql,r,e),c=t(t_,n,l),u=t(cf,Ir,c)?l:t(i_,Ir,c)?c_(l):uf;return t(ke,function(m){return E(a,o,m)},ki(u))},ki(i))},ki(e))}),$_=function(e){var r=e,n=ue(r.dU),a=ue(r.is),i=ue(r.io);if(le(i,a)<1)if(le(i,n)<1){var o=kn(r.dU*r.dU+r.is*r.is);return{io:0,is:-r.dU/o,dU:r.is/o}}else{var o=kn(r.is*r.is+r.io*r.io);return{io:-r.is/o,is:r.io/o,dU:0}}else if(le(a,n)<1){var o=kn(r.dU*r.dU+r.io*r.io);return{io:r.dU/o,is:0,dU:-r.io/o}}else{var o=kn(r.io*r.io+r.is*r.is);return{io:-r.is/o,is:r.io/o,dU:0}}},Jl=function(e){var r=$_(e),n=r,a=n,i=e,o=i,l={io:o.is*a.dU-o.dU*a.is,is:o.dU*a.io-o.io*a.dU,dU:o.io*a.is-o.is*a.io};return P(r,l)},Ma=function(e){var r=e;return r},v_=v(function(e,r){var n=Jl(e),a=n.a,i=n.b;return vn({dl:r,dS:a,dT:i,dV:e})}),f_=function(e){var r=t(Di,e.ba,e.d9),n=Ma(e.fm),a=t(ql,r,n),i=b(u_,r,n,a);if(i.$){var m=ki(r);if(m.$){var d=Jl(e.fm),g=d.a,f=d.b;return vn({dl:e.d9,dS:f,dT:e.fm,dV:g})}else{var s=m.a;return t(v_,s,e.d9)}}else{var o=i.a,l=o.a,c=o.b,u=o.c;return vn({dl:e.d9,dS:u,dT:c,dV:l})}},m_=function(e){return{$:0,a:e}},Fi=function(e){var r=e;return .5*r},s_=fs,d_=function(e){var r=e;return s_(r)},p_=function(e){var r=Fi(gr(e.fq)),n=d_(r);return{dw:m_(n),dM:e.dM}},g_=function(e){var r=e.ba,n=e.d9,a=e.fm;return p_({fq:zt(40),dM:f_({d9:Ol(n),ba:Ol(r),fm:t(Se,Dl,t(a_,Pt,Ol(a)))})})},h_=function(e){return e},na=function(e){return e},b_=function(e){return na(.01*e)},$f=function(e){return e},__=function(e){return e},x_=function(e){return{$:0,a:e}},w_=x_,y_={$:3},S_=y_,C_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),L_=C_,P_=function(e){return{$:1,a:e}},z_=P_,M_=function(e){return t(Mr,"height",k(e))},T_=F$,k_=function(e){return{$:2,a:e}},D_=k_,F_=function(e){var r=e.a,n=e.b,a=e.c,i=e.d,o=function(c){return Le(c*1e3)/1e3},l=function(c){return Le(c*1e4)/100};return pa($(["rgba(",ae(l(r)),"%,",ae(l(n)),"%,",ae(l(a)),"%,",ae(o(i)),")"]))},I_=v(function(e,r){switch(r.$){case 0:return t(Np,e,r);case 1:return t(Hp,e,r);case 2:return t(Gp,e,r);case 3:return t(Wp,e,r);case 4:return t(Op,e,r);default:return t(qp,e,r)}}),A_=v(function(e,r){switch(r.$){case 0:return t(hp,e,r);case 1:return t(bp,e,r);case 2:return t(_p,e,r);case 3:return t(xp,e,r);case 4:return t(wp,e,r);case 5:return t(yp,e,r);case 6:return t(Sp,e,r);case 7:return t(Cp,e,r);default:return Lp(e)}}),E_=T(function(e,r,n){return b(jp,e,r,n)}),vf=function(e){var r=e;return r},Ta=op,Yl=z(Ta,1,1,1,1),Or=T(function(e,r,n){return t(J,function(a){return t(a,r,n)},e)}),B_=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),V_=v(function(e,r){var n=e,a=r.io,i=r.is;return b(B_,n*a/i,n,n*(1-a-i)/i)}),R_=function(e){var r=e.a,n=e.b,a=e.c;return b(yt,3.2406*r-1.5372*n-.4986*a,-.9689*r+1.8758*n+.0415*a,.0557*r-.204*n+1.057*a)},Xl=v(function(e,r){return R_(t(V_,e,r))}),ff=v(function(e,r){return{ek:ce(e.ek,r.ek),t:e.t*r.t+e.u*r.w+e.v*r.z,u:e.t*r.u+e.u*r.x+e.v*r.A,v:e.t*r.v+e.u*r.y+e.v*r.B,w:e.w*r.t+e.x*r.w+e.y*r.z,x:e.w*r.u+e.x*r.x+e.y*r.A,y:e.w*r.v+e.x*r.y+e.y*r.B,z:e.z*r.t+e.A*r.w+e.B*r.z,A:e.z*r.u+e.A*r.x+e.B*r.A,B:e.z*r.v+e.A*r.y+e.B*r.B,K:r.K+(e.K*r.t+e.L*r.w+e.M*r.z)*r.cC,L:r.L+(e.K*r.u+e.L*r.x+e.M*r.A)*r.cC,M:r.M+(e.K*r.v+e.L*r.y+e.M*r.B)*r.cC,cC:e.cC*r.cC}}),qr=fp,U_=function(e){return qr({eu:e.t,ev:e.w,ew:e.z,ex:e.K,ey:e.u,ez:e.x,eA:e.A,eB:e.L,eC:e.v,eD:e.y,eE:e.B,eF:e.M,eG:0,eH:0,eI:0,eJ:1})},Kl=Ve(function(e,r,n,a,i){var o=a.ek?1:-1,l=z(Ta,a.cC,a.cC,a.cC,o);return Xe(i,e,l,U_(a),a.ek,r,n)}),mf=vr(function(e,r,n,a,i,o){e:for(;;)switch(i.$){case 0:return o;case 5:var l=i.a,c=i.b,u=e,m=r,s=n,d=t(ff,l,a),g=c,f=o;e=u,r=m,n=s,a=d,i=g,o=f;continue e;case 1:var _=i.b,x=t(M,F(Kl,e,r,n,a,_),o.P);return{P:x,_:o._,hI:o.hI};case 3:var y=i.b,S=t(M,F(Kl,e,r,n,a,y),o._);return{P:o.P,_:S,hI:o.hI};case 2:var w=i.a,C=t(M,F(Kl,e,r,n,a,w),o.hI);return{P:o.P,_:o._,hI:C};default:var A=i.a;return b(Ie,z(mf,e,r,n,a),o,A)}}),j_=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),sf=j_,Zl=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),N_=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Zl,518,r,n,a)},H_=v(function(e,r){return{$:6,a:e,b:r}}),G_=H_,df=$([N_({ab:1,ac:0,ai:!1}),z(sf,!1,!1,!1,!1),t(G_,0,1)]),ka=519,Ql=8,pf=15,Da=7681,W_={src:`
        precision lowp float;

        void main() {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
    `,attributes:{},uniforms:{}},ze=gp,O_=v(function(e,r){return{$:0,a:e,b:r}}),q_=O_({d5:1,ei:0,eS:5}),hr=Zd,J_=q_($([{cx:t(hr,-1,-1)},{cx:t(hr,1,-1)},{cx:t(hr,-1,1)},{cx:t(hr,1,1)}])),Y_={src:`
        precision lowp float;

        attribute vec2 position;

        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,attributes:{position:"cx"},uniforms:{}},X_=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(s){return{$:2,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m,k:s}}}}}}}}}}}},ec=T(function(e,r,n){var a=e.dx,i=e.dc,o=e.dR,l=v(function(m,s){var d=m;return s(d)}),c=v(function(m,s){var d=m;return s(d)}),u=function(m){return t(Ge,l(m.bO),t(Ge,c(m.bz),t(Ge,c(m.bX),c(m.bY))))};return t(u,n,t(u,r,b(X_,a,i,o)))}),rc=function(e){return b(ec,{dc:e.dc,dx:e.dx,dR:e.dR},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY},{bz:e.bz,bO:e.bO,bX:e.bX,bY:e.bY})},nc=function(e){return F(ze,$([rc(e),z(sf,!1,!1,!1,!1)]),Y_,W_,J_,{})},K_=nc({bz:Da,dc:0,dx:Ql,bO:ka,dR:pf,bX:Da,bY:Da}),Z_=516,gf=5386,Qe=7680,Q_=function(e){return t(xt,2,e+4)},hf=function(e){return nc({bz:Qe,dc:pf,dx:Ql,bO:Z_,dR:Q_(e),bX:gf,bY:gf})},e2=T(function(e,r,n){return ar($([b(Or,e,n,df),$([hf(r),K_])]))}),r2=v(function(e,r){return ar(t(Lu,e2(e),r))}),n2=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Zl,513,r,n,a)},a2=n2({ab:1,ac:0,ai:!0}),t2=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return{$:0,a:e,b:r,c:n,d:a,e:i,f:o,g:l,h:c,i:u,j:m}}}}}}}}}}},i2=function(e){var r=e.cz,n=e.cf,a=e.b0,i=e.bZ,o=e.b6,l=e.fI,c=v(function(u,m){var s=u.a,d=u.b,g=u.c,f=m.a,_=m.b,x=m.c;return t2(s)(d)(g)(f)(_)(x)(r)(n)(a)(i)});return t(c,o,l)},o2=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),bf=v(function(e,r){var n=e,a=r;return b(o2,32774,n,a)}),l2=1,_f=771,c2=770,ac=i2({bZ:0,fI:t(bf,l2,_f),b0:0,b6:t(bf,c2,_f),cf:0,cz:0}),Fa=$([a2,ac]),u2=function(e){var r=e;return r.eL},$2=function(e){var r=e;return r.eM},xf=function(e){var r=e;return r.eN},v2=function(e){var r=e;return r.eO},f2=function(e){var r=e;return r.eP},wf=function(e){var r=e;return r.eQ},yf=function(e){return E(t(un,v2(e),u2(e)),t(un,f2(e),$2(e)),t(un,wf(e),xf(e)))},Sf=function(e){var r=e;return Pa(r)},m2=function(e){return e},s2=function(e){return vn({dl:m2({io:e.K,is:e.L,dU:e.M}),dS:$n({io:e.t,is:e.u,dU:e.v}),dT:$n({io:e.w,is:e.x,dU:e.y}),dV:$n({io:e.z,is:e.A,dU:e.B})})},tc=v(function(e,r){var n=e,a=r,i=n.dV,o=i,l=n.dT,c=l,u=n.dS,m=u;return{io:a.io*m.io+a.is*m.is+a.dU*m.dU,is:a.io*c.io+a.is*c.is+a.dU*c.dU,dU:a.io*o.io+a.is*o.is+a.dU*o.dU}}),Cf=v(function(e,r){var n=e,a=r,i=n.dl,o=i,l=a.io-o.io,c=a.is-o.is,u=a.dU-o.dU,m=n.dV,s=m,d=n.dT,g=d,f=n.dS,_=f;return{io:l*_.io+c*_.is+u*_.dU,is:l*g.io+c*g.is+u*g.dU,dU:l*s.io+c*s.is+u*s.dU}}),Lf=v(function(e,r){return{dl:t(Cf,e,Pa(r)),dS:t(tc,e,Zn(r)),dT:t(tc,e,Qn(r)),dV:t(tc,e,ea(r))}}),Ii=function(e){var r=e;return r},Ee=v(function(e,r){var n=e,a=r;return t(qe,n,a)}),je=v(function(e,r){var n=e,a=r;return t(ba,n,a)}),d2=v(function(e,r){var n=Ii(r),a=Ii(e);return{eL:t(Ee,a.eL,n.eL),eM:t(Ee,a.eM,n.eM),eN:t(Ee,a.eN,n.eN),eO:t(je,a.eO,n.eO),eP:t(je,a.eP,n.eP),eQ:t(je,a.eQ,n.eQ)}}),Sr=function(e){var r=e;return r},p2=function(e){var r=e;return E(r.io,r.is,r.dU)},Mt=v(function(e,r){var n=e,a=r;return a+n}),g2=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=Fi(gr(a)),l=Fi(gr(n)),c=Fi(gr(i)),u=p2(r),m=u.a,s=u.b,d=u.c;return{eL:t(Mt,l,m),eM:t(Mt,o,s),eN:t(Mt,c,d),eO:t(un,l,m),eP:t(un,o,s),eQ:t(un,c,d)}}),Pf=O(function(e,r,n,a){var i=n.f4,o=2*n.gF*r,l=2*n.gE*r,c=2*n.gD*r,u=i.dU*r,m=i.is*r,s=i.io*r,d=Sr(ea(e)),g=ue(c*d.io)+ue(l*d.is)+ue(o*d.dU),f=Sr(Qn(e)),_=ue(c*f.io)+ue(l*f.is)+ue(o*f.dU),x=Sr(Zn(e)),y=ue(c*x.io)+ue(l*x.is)+ue(o*x.dU),S=t(g2,E(y,_,g),t(Cf,e,b(Il,s,m,u)));if(a.$)return j(S);var w=a.a;return j(t(d2,w,S))}),ic=O(function(e,r,n,a){e:for(;;)if(a.b){var i=a.a,o=a.b;switch(i.$){case 0:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 1:var s=i.a,d=z(Pf,e,r,s,n),l=e,c=r,u=d,m=o;e=l,r=c,n=u,a=m;continue e;case 2:var l=e,c=r,u=n,m=o;e=l,r=c,n=u,a=m;continue e;case 3:var s=i.a,d=z(Pf,e,r,s,n),l=e,c=r,u=d,m=o;e=l,r=c,n=u,a=m;continue e;case 4:var g=i.a,l=e,c=r,u=z(ic,e,r,n,g),m=o;e=l,r=c,n=u,a=m;continue e;default:var f=i.a,_=i.b,x=t(Lf,s2(f),e),y=r*f.cC,l=e,c=r,u=z(ic,x,y,n,$([_])),m=o;e=l,r=c,n=u,a=m;continue e}}else return n}),Ia=rp,Aa=np,Ea=ap,zf=function(e){return{$:4,a:e}},h2=v(function(e,r){e:for(;;)if(e.b){var n=e.a,a=e.b,i=a,o=t(M,n,r);e=i,r=o;continue e}else return r}),Tt=function(e){return zf(t(h2,e,D))},b2={ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:0,L:0,M:0,cC:1},_2=function(e){var r=e;return r},Mf=nc({bz:Da,dc:0,dx:Ql,bO:ka,dR:255,bX:Da,bY:Da}),x2=function(e){var r=e,n=t(qe,ue(r.io),t(qe,ue(r.is),ue(r.dU)));if(n){var a=r.dU/n,i=r.is/n,o=r.io/n,l=kn(o*o+i*i+a*a);return l*n}else return Ir},cr={b0:0,f3:!1,cf:0,du:0,cz:0,dJ:0,io:0,is:0,dU:0},Cr=v(function(e,r){var n=e,a=r;return qr({eu:n.io,ev:n.cz,ew:a.io,ex:a.cz,ey:n.is,ez:n.cf,eA:a.is,eB:a.cf,eC:n.dU,eD:n.b0,eE:a.dU,eF:a.b0,eG:n.dJ,eH:n.du,eI:a.dJ,eJ:a.du})}),kt=P({bF:t(Cr,cr,cr),cm:t(Cr,cr,cr),cn:t(Cr,cr,cr),co:t(Cr,cr,cr)},z(Ta,0,0,0,0)),Be=v(function(e,r){var n=r;return e*n}),Tf=function(e){var r=e;return-r},kf=514,Df=function(e){var r=e.ai,n=e.ac,a=e.ab;return z(Zl,515,r,n,a)},Ff=240,w2=$([Df({ab:1,ac:0,ai:!0}),rc({bz:Qe,dc:Ff,dx:0,bO:kf,dR:0,bX:Qe,bY:Qe}),ac]),y2=v(function(e,r){var n=e,a=r.hd,i=r.gv,o=r.fM,l=gr(a),c=l,u=gr(i),m=u,s=n.dw;if(s.$){var g=s.a;return Uo(m)?qr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:0,eF:-1,eG:0,eH:0,eI:0,eJ:1}):qr({eu:2/(o*g),ev:0,ew:0,ex:0,ey:0,ez:2/g,eA:0,eB:0,eC:0,eD:0,eE:-2/(m-c),eF:-(m+c)/(m-c),eG:0,eH:0,eI:0,eJ:1})}else{var d=s.a;return Uo(m)?qr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-1,eF:-2*c,eG:0,eH:0,eI:-1,eJ:0}):qr({eu:1/(o*d),ev:0,ew:0,ex:0,ey:0,ez:1/d,eA:0,eB:0,eC:0,eD:0,eE:-(m+c)/(m-c),eF:-2*m*c/(m-c),eG:0,eH:0,eI:-1,eJ:0})}}),Ai=v(function(e,r){return(1&e>>r)==1?0:1}),S2=function(e){return $([Df({ab:1,ac:0,ai:!0}),rc({bz:Qe,dc:Ff,dx:e,bO:kf,dR:0,bX:Qe,bY:Qe}),ac])},C2=T(function(e,r,n){return ar(t(J,function(a){var i=a<<4,o=z(Ta,t(Ai,a,0),t(Ai,a,1),t(Ai,a,2),t(Ai,a,3));return b(Or,e,P(r,o),S2(i))},t(Ur,1,t(xt,2,n)-1)))}),Dt=function(e){var r=e;return{io:-r.io,is:-r.is,dU:-r.dU}},Ba=function(e){var r=e;return r},L2=mp,If=function(e){var r=e;return Dt(ea(r))},Af=Yv,Ef=Fl,P2={dl:Pt,dS:Af,dT:Wl,dV:Ef},Ei=function(e){var r=e;return r},z2=function(e){var r=Ei(Pa(e)),n=Sr(ea(e)),a=Sr(Qn(e)),i=Sr(Zn(e));return qr({eu:i.io,ev:a.io,ew:n.io,ex:r.io,ey:i.is,ez:a.is,eA:n.is,eB:r.is,eC:i.dU,eD:a.dU,eE:n.dU,eF:r.dU,eG:0,eH:0,eI:0,eJ:1})},M2=v(function(e,r){var n=r;return z2(t(Lf,n,e))}),T2=function(e){return t(M2,P2,e)},k2=function(e){var r=e;return r.dM},D2=function(e){var r=e;return Zn(r)},F2=T(function(e,r,n){var a=e,i=r,o=n;return{io:a,is:i,dU:o}}),I2=function(e){var r=e;return Qn(r)},A2=function(e){var r=k2(e.f0),n=vn({dl:Sf(r),dS:D2(r),dT:I2(r),dV:Dt(If(r))}),a=Tt(e.a8),i=a,o=z(ic,n,1,R,$([i]));if(o.$===1)return D;var l=o.a,c=T2(r),u=t(Be,.99,t(Ee,gr(e.a3),Tf(xf(l)))),m=yf(l),s=m.a,d=m.b,g=m.c,f=x2(b(F2,s,d,g)),_=t(Be,1.01,t(Mt,f,Tf(wf(l)))),x=t(y2,e.f0,{fM:e.fM,gv:_,hd:u}),y=L2(x).eJ,S=y?Sr(Dt(If(r))):Ba(Sf(r)),w=function(){var se=e.cG;switch(se.$){case 0:return P(0,0);case 1:return P(1,0);case 2:return P(2,0);case 3:var we=se.a;return P(3,we);case 4:var we=se.a;return P(4,we);default:return P(5,0)}}(),C=w.a,A=w.b,q=e.cd,K=q,G=t(Xl,K,e.cK),Y=G,X=qr({eu:0,ev:S.io,ew:Ia(Y),ex:e.ff,ey:0,ez:S.is,eA:Aa(Y),eB:_2(f),eC:0,eD:S.dU,eE:Ea(Y),eF:C,eG:0,eH:y,eI:0,eJ:A}),V=Xe(mf,X,c,x,b2,i,{P:D,_:D,hI:D}),ne=e.cl;switch(ne.$){case 0:var fe=ne.a;return ar($([b(Or,V.P,P(fe,Yl),Fa),b(Or,V._,kt,Fa)]));case 1:var fe=ne.a;return ar($([b(Or,V.P,kt,Fa),$([Mf]),b(Or,V.hI,fe.bF,df),$([hf(0)]),b(Or,V.P,P(fe,Yl),w2),b(Or,V._,kt,Fa)]));default:var xe=ne.a,me=ne.b;return ar($([b(Or,V.P,P(me,Yl),Fa),$([Mf]),t(r2,V.hI,xe),b(C2,V.P,me,En(xe)),b(Or,V._,kt,Fa)]))}},E2=function(e){return t(Mr,"width",k(e))},B2=v(function(e,r){var n=$([z_(1),D_(0),w_(!0),z(L_,0,0,0,0)]),a=function(){var C=e.cO;switch(C.$){case 0:return E(n,"0",1);case 1:return E(t(M,S_,n),"1",1);default:var A=C.a;return E(n,"0",A)}}(),i=a.a,o=a.b,l=a.c,c=e.a4,u=c.a,m=c.b,s=vf(m),d=t(pr,"height",k(s)+"px"),g=vf(u),f=g/s,_=t(da,function(C){return A2({fM:f,f0:e.f0,a3:e.a3,a8:C.a8,cd:C.cd,cl:C.cl,ff:l,cG:C.cG,cK:C.cK})},r),x=t(pr,"width",k(g)+"px"),y=e.a1,S=y,w=F_(S);return b(T_,"div",$([t(pr,"padding","0px"),x,d]),$([P(o,b(E_,i,$([E2(Le(g*l)),M_(Le(s*l)),x,d,t(pr,"display","block"),t(pr,"background-color",w)]),_))]))}),V2=function(e){return t(B2,{cO:e.cO,a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4},$([{a8:e.a8,cd:e.cd,cl:e.cl,cG:e.cG,cK:e.cK}]))},Bf=function(e){return e},Vf=Bf({io:.31271,is:.32902}),R2=v(function(e,r){var n=e,a=Sr(r.gm),i=a.io,o=a.is,l=a.dU,c=t(Xl,r.c0,r.cT),u=c;return{b0:Ea(u),f3:n,cf:Aa(u),du:0,cz:Ia(u),dJ:1,io:-i,is:-o,dU:-l}}),U2=function(e){return e},j2=function(e){return U2(1.2*t(xt,2,e))},oc=function(e){return e},N2={$:0},H2=N2,Rf=function(e){return e},Uf=function(e){var r=e;return r},G2=function(e){e:for(;;){if(ce(e.gZ,Ir)&&ce(e.g_,Ir))return cr;if(t(cf,gr(e.gZ),gr(e.g_))){var r={cT:e.cT,gZ:e.g_,g_:e.gZ,fm:Dt(e.fm)};e=r;continue e}else{var n=ue(Uf(e.g_)/qn),a=ue(Uf(e.gZ)/qn),i=Sr(e.fm),o=i.io,l=i.is,c=i.dU,u=t(Xl,Rf(1),e.cT),m=u;return{b0:a*Ea(m),f3:!1,cf:a*Aa(m),du:n/a,cz:a*Ia(m),dJ:3,io:o,is:l,dU:c}}}},jf=function(e){return G2({cT:e.cT,gZ:e.c0,g_:Ir,fm:e.fm})},W2=function(e){var r=e;return r},Nf=function(e){var r=b(Zv,1667,25e3,W2(e)),n=r<=4e3?-.2661239*1e9/(r*r*r)-.2343589*1e6/(r*r)+.8776956*1e3/r+.17991:-3.0258469*1e9/(r*r*r)+2.1070379*1e6/(r*r)+.2226347*1e3/r+.24039,a=r<=2222?-1.1063814*(n*n*n)-1.3481102*(n*n)+2.18555832*n-.20219683:r<=4e3?-.9549476*(n*n*n)-1.37418593*(n*n)+2.09137015*n-.16748867:3.081758*(n*n*n)-5.8733867*(n*n)+3.75112997*n-.37001483;return Bf({io:n,is:a})},Hf=function(e){return e},O2=Nf(Hf(12e3)),q2=Nf(Hf(5600)),J2=function(e){return{$:2,a:e}},Y2=function(e){return J2(e)},X2=v(function(e,r){return{$:2,a:e,b:r}}),Gf=function(e){return{$:0,a:e}},Bi=function(e){var r=e;return r},K2=function(e){var r=e;return r.f3},Z2=Gf(kt.a),Q2=v(function(e,r){var n=v(function(a,i){var o=i.a,l=i.b;return e(a)?P(t(M,a,o),l):P(o,t(M,a,l))});return b(He,n,P(D,D),r)}),ex=function(e){var r=e;return qr({eu:r.io,ev:r.cz,ew:0,ex:0,ey:r.is,ez:r.cf,eA:0,eB:0,eC:r.dU,eD:r.b0,eE:0,eF:0,eG:r.dJ,eH:r.du,eI:0,eJ:0})},rx=be(function(e,r,n,a,i,o,l,c){var u=t(Q2,K2,$([Bi(e),Bi(r),Bi(n),Bi(a)])),m=u.a,s=u.b;if(m.b){var d=N(m,s);if(d.b&&d.b.b&&d.b.b.b&&d.b.b.b.b&&!d.b.b.b.b.b){var g=d.a,f=d.b,_=f.a,x=f.b,y=x.a,S=x.b,w=S.a;return t(X2,t(J,ex,m),{bF:t(Cr,g,_),cm:t(Cr,y,w),cn:t(Cr,i,o),co:t(Cr,l,c)})}else return Z2}else return Gf({bF:t(Cr,e,r),cm:t(Cr,n,a),cn:t(Cr,i,o),co:t(Cr,l,c)})}),nx=T(function(e,r,n){return Ha(rx,e,r,n,cr,cr,cr,cr,cr)}),ax=function(e){var r=t(R2,__(e.hI),{cT:q2,gm:e.hZ,c0:oc(8e4)}),n=jf({cT:O2,c0:oc(2e4),fm:e.fm}),a=jf({cT:Vf,c0:oc(15e3),fm:Dt(e.fm)}),i=b(nx,r,n,a);return V2({cO:Y2(e.cX),a1:e.a1,f0:e.f0,a3:e.a3,a4:e.a4,a8:e.a8,cd:j2(15),cl:i,cG:H2,cK:Vf})},Wf=O(function(e,r,n,a){return{$:2,a:e,b:r,c:n,d:a}}),tx=O(function(e,r,n,a){return{$:3,a:e,b:r,c:n,d:a}}),Of=O(function(e,r,n,a){return{$:4,a:e,b:r,c:n,d:a}}),qf=O(function(e,r,n,a){return{$:6,a:e,b:r,c:n,d:a}}),ix=O(function(e,r,n,a){return{$:7,a:e,b:r,c:n,d:a}}),ox=O(function(e,r,n,a){return{$:5,a:e,b:r,c:n,d:a}}),lx=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),lc=function(e){switch(e.$){case 0:return e;case 1:var r=e.a,n=e.b,a=e.c;return z(lx,r,n,a,1);case 2:var r=e.a,n=e.b,a=e.c;return z(Wf,r,n,a,1);case 3:var r=e.a,i=e.b,a=e.c;return z(tx,r,i,a,1);case 4:var r=e.a,i=e.b,a=e.c;return z(Of,r,i,a,1);case 5:var r=e.a,i=e.b,a=e.c;return z(ox,r,i,a,1);case 6:var r=e.a,i=e.b,a=e.c;return z(qf,r,i,a,1);case 7:var r=e.a,i=e.b,a=e.c;return z(ix,r,i,a,1);case 8:return e;case 9:return e;default:return e}},cc={$:0},cx=be(function(e,r,n,a,i,o,l,c){e:for(;;)if(c.b){var u=c.a,m=c.b,s=Ii(l(u)),d=t(je,s.eO,e),g=t(Ee,s.eL,r),f=t(je,s.eP,n),_=t(Ee,s.eM,a),x=t(je,s.eQ,i),y=t(Ee,s.eN,o),S=l,w=m;e=d,r=g,n=f,a=_,i=x,o=y,l=S,c=w;continue e}else return{eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i}}),ux=T(function(e,r,n){var a=Ii(e(r));return Ha(cx,a.eO,a.eL,a.eP,a.eM,a.eQ,a.eN,e,n)}),uc=v(function(e,r){var n=e,a=r;return le(a,n)<1}),Jf=function(e){return t(uc,e.eL,e.eO)&&t(uc,e.eM,e.eP)&&t(uc,e.eN,e.eQ)?e:{eL:t(Ee,e.eO,e.eL),eM:t(Ee,e.eP,e.eM),eN:t(Ee,e.eQ,e.eN),eO:t(je,e.eO,e.eL),eP:t(je,e.eP,e.eM),eQ:t(je,e.eQ,e.eN)}},Ft=function(e){var r=e;return r},Yf=function(e){var r=Ft(e),n=r.a,a=r.b,i=r.c,o=Yn(n),l=Xn(n),c=Kn(n),u=Yn(a),m=Xn(a),s=Kn(a),d=Yn(i),g=Xn(i),f=Kn(i);return Jf({eL:t(Ee,o,t(Ee,u,d)),eM:t(Ee,l,t(Ee,m,g)),eN:t(Ee,c,t(Ee,s,f)),eO:t(je,o,t(je,u,d)),eP:t(je,l,t(je,m,g)),eQ:t(je,c,t(je,s,f))})},Xf=tp,ur=function(e){return Xf(Ei(e))},Kf=function(e){var r=e;return r},Vi=function(e){return Xf(Kf(e))},$x=v(function(e,r){var n=e,a=r,i=t(qe,ue(a.io),t(qe,ue(a.is),ue(a.dU)));if(i){var o=a.dU/i,l=a.is/i,c=a.io/i,u=kn(c*c+l*l+o*o);return{io:n*c/u,is:n*l/u,dU:n*o/u}}else return uf}),vx=$x(Rf(1)),Zf=T(function(e,r,n){var a=t(Di,r,n),i=t(Di,e,r);return vx(t(ql,a,i))}),fx=function(e){var r=Ft(e),n=r.a,a=r.b,i=r.c,o=Vi(b(Zf,n,a,i));return E({q:o,cx:ur(n)},{q:o,cx:ur(a)},{q:o,cx:ur(i)})},mx=v(function(e,r){return{$:2,a:e,b:r}}),Qf=mx({d5:3,ei:0,eS:4}),sx=function(e){if(e.b){var r=e.a,n=e.b,a=Qf(t(J,fx,e)),i=b(ux,Yf,r,n);return z(Wf,i,e,a,0)}else return cc},Lr=T(function(e,r,n){return E(e,r,n)}),em=function(){var e=na(1),r=na(1),n=na(1),a=t(Be,-.5,e),i=t(Be,-.5,r),o=t(Be,-.5,n),l=b(We,o,i,a),c=t(Be,.5,e),u=b(We,o,i,c),m=t(Be,.5,r),s=b(We,o,m,a),d=b(We,o,m,c),g=t(Be,.5,n),f=b(We,g,i,a),_=b(We,g,m,a),x=b(We,g,i,c),y=b(We,g,m,c);return lc(sx($([b(Lr,l,_,f),b(Lr,l,s,_),b(Lr,u,x,y),b(Lr,u,y,d),b(Lr,f,_,y),b(Lr,f,y,x),b(Lr,l,d,s),b(Lr,l,u,d),b(Lr,l,f,x),b(Lr,l,x,u),b(Lr,s,y,_),b(Lr,s,d,y)])))}(),Ri={$:0},dx=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),px=T(function(e,r,n){var a=r.a,i=r.b,o=r.c,l=e(o),c=e(i),u=e(a),m=Vi(b(Zf,u,c,l)),s={q:m,cx:ur(u)},d={q:m,cx:ur(c)},g={q:m,cx:ur(l)};return t(M,s,t(M,d,t(M,g,n)))}),$c=function(e){var r=e;return r.H},gx=O(function(e,r,n,a){if(r.$===1)return R;var i=r.a;if(n.$===1)return R;var o=n.a;if(a.$===1)return R;var l=a.a;return j(b(e,i,o,l))}),vc=4294967295>>>32-Za,fc=rs,hx=T(function(e,r,n){e:for(;;){var a=vc&r>>>e,i=t(fc,a,n);if(i.$){var m=i.a;return t(fc,vc&r,m)}else{var o=i.a,l=e-Za,c=r,u=o;e=l,r=c,n=u;continue e}}}),bx=function(e){return e>>>5<<5},_x=v(function(e,r){var n=r.a,a=r.b,i=r.c,o=r.d;return e<0||le(e,n)>-1?R:le(e,bx(n))>-1?j(t(fc,vc&e,o)):j(b(hx,a,e,i))}),mc=function(e){var r=e;return r.au},sc=v(function(e,r){return t(_x,e,mc(r))}),xx=function(e){var r=function(n){var a=n.a,i=n.b,o=n.c;return z(gx,T(function(l,c,u){return E(l,c,u)}),t(sc,a,e),t(sc,i,e),t(sc,o,e))};return t(nn,r,$c(e))},wx=T(function(e,r,n){e:for(;;){var a=t(Io,fr,e),i=a.a,o=a.b;if(le(Fo(i),fr)<0)return t(Iu,!0,{C:r,n,r:i});var l=o,c=t(M,ku(i),r),u=n+1;e=l,r=c,n=u;continue e}}),dc=function(e){return e.b?b(wx,e,D,0):Mu},yx=v(function(e,r){return!t(nt,t(lt,P0,e),r)}),Sx=function(e){var r=e.a;return r},rm=v(function(e,r){var n=Sx(e),a=function(i){var o=i.a,l=i.b,c=i.c;return o>=0&&le(o,n)<0&&l>=0&&le(l,n)<0&&c>=0&&le(c,n)<0};return t(yx,a,r)?{H:r,au:e}:{H:t(C$,a,r),au:e}}),Cx=T(function(e,r,n){return{$:3,a:e,b:r,c:n}}),It=Cx({d5:1,ei:3,eS:4}),Ui=v(function(e,r){var n=Ba(r),a=Ba(e);return P(E(a.io,a.is,a.dU),E(n.io,n.is,n.dU))}),nm=b(yt,0,0,0),pc=vr(function(e,r,n,a,i,o){var l=o.a,c=o.b,u=o.c,m=t(tt,t(Ui,e,r),i);if(m.$){var d={q:nm,cx:ur(r)},g={q:nm,cx:ur(e)},f=u+1,_=u;return E(t(M,E(n,_,f),t(M,E(n,f,a),l)),t(M,d,t(M,g,c)),u+2)}else{var s=m.a;return E(t(M,E(n,s,a),l),c,u)}}),Lx=Ve(function(e,r,n,a,i){e:for(;;)if(n.b){var o=n.a,l=o.a,c=o.b,u=o.c,m=n.b,s=e(u),d=e(c),g=e(l),f=a+2,_=a+1,x=a,y=e,S=r,w=m,C=a+3,A=Xe(pc,s,g,f,x,r,Xe(pc,d,s,_,f,r,Xe(pc,g,d,x,_,r,i)));e=y,r=S,n=w,a=C,i=A;continue e}else{var q=i,K=q.a,G=q.b;return P(K,rr(G))}}),Px=Ve(function(e,r,n,a,i){e:for(;;)if(r.b){var o=r.a,l=o.a,c=o.b,u=o.c,m=r.b,s=e(u),d=e(c),g=e(l),f=n+2,_=n+1,x=n,y=b(va,t(Ui,g,s),f,b(va,t(Ui,s,d),_,b(va,t(Ui,d,g),x,i))),S=t(M,E(x,_,f),a),w=e,C=m,A=n+3,q=S,K=y;e=w,r=C,n=A,a=q,i=K;continue e}else return E(a,i,n)}),aa=T(function(e,r,n){var a=xx(n),i=b(He,px(r),D,a),o=F(Px,r,a,0,D,Jo),l=o.a,c=o.b,u=o.c,m=F(Lx,r,c,a,0,E(l,D,u)),s=m.a,d=m.b,g=wn(d)?i:N(i,d);return b(dx,e,t(rm,dc(g),s),t(It,g,s))}),gc=function(e){return{H:t(J,function(r){return E(3*r,3*r+1,3*r+2)},t(Ur,0,En(e)-1)),au:dc(ar(t(J,function(r){var n=r.a,a=r.b,i=r.c;return $([n,a,i])},e)))}},am=function(e){switch(e.$){case 0:return Ri;case 1:var r=e.a,n=e.b,a=t(J,Ft,n);return b(aa,r,Dr,gc(a));case 2:var r=e.a,n=e.b,a=t(J,Ft,n);return b(aa,r,Dr,gc(a));case 3:var r=e.a,i=e.b;return b(aa,r,Dr,i);case 4:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 5:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 6:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 7:var r=e.a,i=e.b;return b(aa,r,function(o){return o.cx},i);case 8:return Ri;case 9:return Ri;default:return Ri}},tm=am(em),im={$:0},B=im,Oe=v(function(e,r){return{$:1,a:e,b:r}}),zx={src:`
        precision mediump float;
        
        uniform mediump sampler2D colorTexture;
        
        varying mediump vec2 interpolatedUv;
        
        void main () {
            gl_FragColor = texture2D(colorTexture, interpolatedUv);
        }
    `,attributes:{},uniforms:{colorTexture:"b7"}},Mx=1029,Tx=function(e){return{$:5,a:e}},om=function(e){var r=e;return Tx(r)},kx=om(Mx),Dx=1028,Fx=om(Dx),$r=T(function(e,r,n){return r===1?e?t(M,kx,n):t(M,Fx,n):n}),lm={src:`
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
    `,attributes:{position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},hc=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,l,c,u,m,s,d){return F(ze,b($r,c,a,d),lm,zx,n,{b7:e,c:l,d:o,e:m,f:i,g:u})}))}),bc={src:`
        precision lowp float;
        
        uniform lowp vec3 constantColor;
        
        void main () {
            gl_FragColor = vec4(constantColor, 1.0);
        }
    `,attributes:{},uniforms:{constantColor:"aO"}},cm={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},mn=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,l,c,u,m,s,d){return F(ze,b($r,c,a,d),cm,bc,n,{aO:e,c:l,d:o,e:m,f:i,g:u})}))}),um=v(function(e,r){return{$:3,a:e,b:r}}),Ix={src:`
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
    `,attributes:{},uniforms:{constantColor:"aO",pointRadius:"cw",sceneProperties:"f"}},$m={src:`
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
    `,attributes:{position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",pointRadius:"cw",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ax=O(function(e,r,n,a){return t(um,n,be(function(i,o,l,c,u,m,s,d){return F(ze,d,$m,Ix,a,{aO:e,c:l,d:o,cw:r,e:m,f:i,g:u})}))}),_c={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",sceneProperties:"f"}},At=function(e){var r=e;return r},ji=ip,sn=Ve(function(e,r,n,a,i){return t(Oe,n,be(function(o,l,c,u,m,s,d,g){return F(ze,b($r,u,i,g),cm,_c,a,{a6:t(ji,At(r),e),c,d:l,e:s,f:o,g:m})}))}),Ex={src:`
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
    `,attributes:{},uniforms:{emissiveColor:"a6",pointRadius:"cw",sceneProperties:"f"}},Bx=Ve(function(e,r,n,a,i){return t(um,a,be(function(o,l,c,u,m,s,d,g){return F(ze,g,$m,Ex,i,{a6:t(ji,At(r),e),c,d:l,cw:n,e:s,f:o,g:m})}))}),vm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColor:"dd",sceneProperties:"f",viewMatrix:"g"}},fm={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ni=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,l,c,u,m,s,d){var g=s.a,f=s.b;return F(ze,b($r,c,a,d),fm,vm,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,dd:e,c:l,d:o,e:m,f:i,g:u})}))}),mm={src:`
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
    `,attributes:{},uniforms:{enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",materialColorTexture:"de",normalMapTexture:"bg",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},sm={src:`
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
    `,attributes:{normal:"q",position:"cx",tangent:"fh",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Vx=vr(function(e,r,n,a,i,o){return t(Oe,a,be(function(l,c,u,m,s,d,g,f){var _=g.a,x=g.b;return F(ze,b($r,m,o,f),sm,mm,i,{U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,de:e,c:u,d:c,bg:r,e:d,f:l,bm:n,g:s})}))}),dm={src:`
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
    `,attributes:{},uniforms:{baseColorTexture:"cS",constantBaseColor:"cU",constantMetallic:"cV",constantRoughness:"cW",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallicTexture:"dh",normalMapTexture:"bg",roughnessTexture:"dB",sceneProperties:"f",useNormalMap:"bm",viewMatrix:"g"}},Rx=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){return function(s){return t(Oe,u,be(function(d,g,f,_,x,y,S,w){var C=S.a,A=S.b;return F(ze,b($r,_,s,w),sm,dm,m,{cS:e,cU:r,cV:o,cW:a,U:A,bF:C.bF,cm:C.cm,cn:C.cn,co:C.co,dh:i,c:f,d:g,bg:l,e:y,dB:n,f:d,bm:c,g:x})}))}}}}}}}}}}},pm={src:`
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
    `,attributes:{},uniforms:{baseColor:"cR",enabledLights:"U",lights12:"bF",lights34:"cm",lights56:"cn",lights78:"co",metallic:"dg",roughness:"dA",sceneProperties:"f",viewMatrix:"g"}},Hi=vr(function(e,r,n,a,i,o){return t(Oe,a,be(function(l,c,u,m,s,d,g,f){var _=g.a,x=g.b;return F(ze,b($r,m,o,f),fm,pm,i,{cR:e,U:x,bF:_.bF,cm:_.cm,cn:_.cn,co:_.co,dg:n,c:u,d:c,e:d,dA:r,f:l,g:s})}))}),Ux=function(e){return{$:0,a:e}},gm=v(function(e,r){return{$:1,a:e,b:r}}),Et=v(function(e,r){if(r.$){var n=r.a.E;return P(n,1)}else return r.a,P(e,0)}),jx=function(e){return z(Ta,Ia(e),Aa(e),Ea(e),1)},xc=z(Ta,0,0,0,0),Gi=v(function(e,r){if(r.$){var a=r.a.E;return P(a,xc)}else{var n=r.a;return P(e,jx(n))}}),hm=v(function(e,r){var n=P(e,r);if(n.a.$){var i=n.a.a.E;return t(gm,P(i,xc),t(Et,i,r))}else if(n.b.$){var i=n.b.a.E;return t(gm,t(Gi,i,e),t(Et,i,r))}else{var a=n.a.a;return n.b.a,Ux(a)}}),Nx=T(function(e,r,n){return{$:0,a:e,b:r,c:n}}),Wi=O(function(e,r,n,a){return{$:1,a:e,b:r,c:n,d:a}}),Hx=O(function(e,r,n,a){return{$:0,a:e,b:r,c:n,d:a}}),Gx=function(e){return t(hr,e,1)},wc=t(hr,0,0),Va=v(function(e,r){if(r.$){var a=r.a.E;return P(a,wc)}else{var n=r.a;return P(e,Gx(n))}}),bm=O(function(e,r,n,a){var i=z(Hx,e,r,n,a);if(i.a.$){var u=i.a.a.E;return z(Wi,P(u,xc),t(Va,u,r),t(Va,u,n),t(Et,u,a))}else if(i.b.$){var u=i.b.a.E;return z(Wi,t(Gi,u,e),P(u,wc),t(Va,u,n),t(Et,u,a))}else if(i.c.$){var u=i.c.a.E;return z(Wi,t(Gi,u,e),t(Va,u,r),P(u,wc),t(Et,u,a))}else if(i.d.$){var u=i.d.a.E;return z(Wi,t(Gi,u,e),t(Va,u,r),t(Va,u,n),P(u,1))}else{var o=i.a.a,l=i.b.a,c=i.c.a;return i.d.a,b(Nx,o,l,c)}}),Wx={src:`
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
    `,attributes:{},uniforms:{backlight:"cP",colorTexture:"b7",sceneProperties:"f"}},yc=Ve(function(e,r,n,a,i){return t(Oe,n,be(function(o,l,c,u,m,s,d,g){return F(ze,b($r,u,i,g),lm,Wx,a,{cP:At(r),b7:e,c,d:l,e:s,f:o,g:m})}))}),_m={src:`
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
    `,attributes:{normal:"q",position:"cx",uv:"O"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},Ox=O(function(e,r,n,a){return t(Oe,r,be(function(i,o,l,c,u,m,s,d){var g=s.a,f=s.b;return F(ze,b($r,c,a,d),_m,mm,n,{U:f,bF:g.bF,cm:g.cm,cn:g.cn,co:g.co,de:e,c:l,d:o,bg:e,e:m,f:i,bm:0,g:u})}))}),qx=io(function(e,r,n,a,i,o,l,c,u){return t(Oe,l,be(function(m,s,d,g,f,_,x,y){var S=x.a,w=x.b;return F(ze,b($r,g,u,y),_m,dm,c,{cS:e,cU:r,cV:o,cW:a,U:w,bF:S.bF,cm:S.cm,cn:S.cn,co:S.co,dh:i,c:d,d:s,bg:e,e:_,dB:n,f:m,bm:0,g:f})}))}),Bt=T(function(e,r,n){var a=e,i=r;return n<=.5?a+n*(i-a):i+(1-n)*(a-i)}),Jx=function(e){var r=e;return b(Bt,r.eO,r.eL,.5)},Yx=function(e){var r=e;return b(Bt,r.eP,r.eM,.5)},Xx=function(e){var r=e;return b(Bt,r.eQ,r.eN,.5)},Kx=function(e){return b(We,Jx(e),Yx(e),Xx(e))},ie=function(e){var r=yf(e),n=r.a,a=r.b,i=r.c;return{f4:Ei(Kx(e)),gD:n/2,gE:a/2,gF:i/2}},Sc=v(function(e,r){switch(e.$){case 0:if(e.b.$){e.a;var c=e.b.a.E;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return z(hc,c,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(hc,c,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(hc,c,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var n=e.b.a;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return z(mn,n,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return z(mn,n,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return z(mn,n,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return z(mn,n,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return z(mn,n,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return z(mn,n,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return z(mn,n,ie(a),i,o);case 8:var a=r.a,i=r.c;return z(mn,n,ie(a),i,0);case 9:var a=r.a,i=r.c;return z(mn,n,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return z(Ax,n,l,ie(a),i)}}case 1:if(e.b.$){e.a;var c=e.b.a.E,m=e.c;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:var a=r.a,i=r.c,o=r.d;return F(yc,c,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(yc,c,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(yc,c,m,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}else{var u=e.b.a,m=e.c;switch(r.$){case 0:return B;case 1:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 2:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 3:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 4:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 5:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 6:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return F(sn,u,m,ie(a),i,o);case 8:var a=r.a,i=r.c;return F(sn,u,m,ie(a),i,0);case 9:var a=r.a,i=r.c;return F(sn,u,m,ie(a),i,0);default:var a=r.a,l=r.b,i=r.d;return F(Bx,u,m,l,ie(a),i)}}case 2:e.a;var s=e.b,d=e.c,g=t(hm,s,d);if(g.$){var x=g.a,y=x.a;x.b;var S=g.b,w=S.a,C=S.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return z(Ox,y,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return Xe(Vx,y,w,C,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}else{var f=g.a;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,_=r.d;return z(Ni,f,ie(a),i,_);case 3:return B;case 4:var a=r.a,i=r.c,_=r.d;return z(Ni,f,ie(a),i,_);case 5:return B;case 6:var a=r.a,i=r.c,_=r.d;return z(Ni,f,ie(a),i,_);case 7:var a=r.a,i=r.c,_=r.d;return z(Ni,f,ie(a),i,_);case 8:return B;case 9:return B;default:return B}}default:e.a;var A=e.b,q=e.c,K=e.d,d=e.e,G=z(bm,A,q,K,d);if(G.$){var ne=G.a,fe=ne.a,xe=ne.b,me=G.b,se=me.a,we=me.b,de=G.c,Fe=de.a,Me=de.b,Ye=G.d,w=Ye.a,C=Ye.b;switch(r.$){case 0:return B;case 1:return B;case 2:return B;case 3:return B;case 4:return B;case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return Xm(qx,fe,xe,se,we,Fe,Me,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Rx(fe)(xe)(se)(we)(Fe)(Me)(w)(C)(ie(a))(i)(o);case 8:return B;case 9:return B;default:return B}}else{var Y=G.a,X=G.b,V=G.c;switch(r.$){case 0:return B;case 1:return B;case 2:var a=r.a,i=r.c,o=r.d;return Xe(Hi,Y,X,V,ie(a),i,o);case 3:return B;case 4:var a=r.a,i=r.c,o=r.d;return Xe(Hi,Y,X,V,ie(a),i,o);case 5:return B;case 6:var a=r.a,i=r.c,o=r.d;return Xe(Hi,Y,X,V,ie(a),i,o);case 7:var a=r.a,i=r.c,o=r.d;return Xe(Hi,Y,X,V,ie(a),i,o);case 8:return B;case 9:return B;default:return B}}}}),Cc=function(e){var r=e;return r.io},Lc=function(e){var r=e;return r.is},Pc=function(e){var r=e;return r.dU},Zx=function(e){var r=e,n=Pc(r.dV),a=Lc(r.dV),i=Cc(r.dV),o=Pc(r.dT),l=Lc(r.dT),c=Cc(r.dT),u=Pc(r.dS),m=Lc(r.dS),s=Cc(r.dS);return s*l*n+m*o*i+u*c*a-u*l*i-m*c*n-s*o*a>0},Qx=function(e){var r=Ei(Pa(e)),n=Sr(ea(e)),a=Sr(Qn(e)),i=Sr(Zn(e));return{ek:Zx(e),t:i.io,u:i.is,v:i.dU,w:a.io,x:a.is,y:a.dU,z:n.io,A:n.is,B:n.dU,K:r.io,L:r.is,M:r.dU,cC:1}},Ra=v(function(e,r){return{$:5,a:e,b:r}}),xm=v(function(e,r){var n=r;switch(n.$){case 0:return B;case 5:var a=n.a,i=n.b,o=t(ff,a,e);return t(Ra,o,i);case 1:return t(Ra,e,n);case 3:return t(Ra,e,n);case 2:return t(Ra,e,n);default:return t(Ra,e,n)}}),wm=v(function(e,r){return t(xm,Qx(e),r)}),Oi=function(e){return{$:2,a:e}},ew=v(function(e,r){var n=e.a,a=e.b,i=e.c,o=r.f4;return{f4:{io:n*o.io,is:a*o.is,dU:i*o.dU},gD:n*r.gD,gE:a*r.gE,gF:i*r.gF}}),rw=cp,nw=lp,ym=function(e){return function(r){return function(n){return function(a){return function(i){return function(o){return function(l){return function(c){return function(u){return function(m){var s=e.a,d=e.b,g=e.c,f=nw(a),_=f.io,x=f.is,y=f.dU,S=f.ft,w=rw({ft:S,io:_*s,is:x*d,dU:y*g});return Ha(r,n,w,i,o,l,c,u,m)}}}}}}}}}},zc=v(function(e,r){switch(r.$){case 0:return im;case 5:var n=r.a,a=r.b;return t(Ra,n,t(zc,e,a));case 1:var i=r.a,o=r.b;return t(Oe,t(ew,e,i),t(ym,e,o));case 3:return r;case 2:var o=r.a;return Oi(t(ym,e,o));default:var l=r.a;return zf(t(J,zc(e),l))}}),Mc=v(function(e,r){var n=r;return t(zc,e,n)}),Tc={src:`
        precision lowp float;
        
        void main () {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    `,attributes:{},uniforms:{}},Sm=7683,Cm=7682,aw=b(ec,{dc:0,dx:0,dR:15},{bz:Qe,bO:ka,bX:Qe,bY:Sm},{bz:Qe,bO:ka,bX:Qe,bY:Cm}),tw=b(ec,{dc:0,dx:0,dR:15},{bz:Qe,bO:ka,bX:Qe,bY:Cm},{bz:Qe,bO:ka,bX:Qe,bY:Sm}),kc=v(function(e,r){return e?t(M,tw,r):t(M,aw,r)}),iw={src:`
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
    `,attributes:{normal:"q",position:"cx"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},ow=function(e){if(e.$){var r=e.c;return j(be(function(n,a,i,o,l,c,u,m){return F(ze,t(kc,o,m),iw,Tc,r,{c:i,d:a,e:c,f:n,cD:u,g:l})}))}else return R},qi=function(e){var r=ow(e);if(r.$)return B;var n=r.a;return Oi(n)},lw=O(function(e,r,n,a){var i=t(Sc,n,em),o=function(){var s=P(e,r);return s.a?s.b?Tt($([i,qi(tm)])):i:s.b?qi(tm):B}(),l=Rl(a),c=l.a,u=l.b,m=l.c;return t(wm,Vl(a),t(Mc,E(c,u,m),o))}),cw=v(function(e,r){return z(lw,!0,!0,e,r)}),Lm=v(function(e,r){return{$:0,a:e,b:r}}),uw=function(e){var r=dl(e),n=r.hu,a=r.gA,i=r.fS;return b(yt,n,a,i)},$w=function(e){return t(Lm,0,El(uw(e)))},vw=function(e){var r=e;return r.m},Vt=function(e){var r=e;return ra(r)},fw=v(function(e,r){var n=r;return n/e}),Pm=function(e){var r=e;return{io:ra(r),is:za(r)}},mw=v(function(e,r){var n=e.cx,a=e.q;return t(M,{q:Vi(a),cx:ur(n)},r)}),sw=Nt(function(e,r,n,a,i,o,l){e:for(;;)if(l.b){var c=l.a,u=l.b,m=Ea(c.cx),s=Aa(c.cx),d=Ia(c.cx),g=t(ba,e,d),f=t(qe,r,d),_=t(ba,n,s),x=t(qe,a,s),y=t(ba,i,m),S=t(qe,o,m),w=u;e=g,r=f,n=_,a=x,i=y,o=S,l=w;continue e}else return Jf({eL:r,eM:a,eN:o,eO:e,eP:n,eQ:i})}),zm=v(function(e,r){var n=Ea(e.cx),a=Aa(e.cx),i=Ia(e.cx);return oo(sw,i,i,a,a,n,n,r)}),dw=function(e){var r=b(bu,mw,D,mc(e));if(r.b){var n=r.a,a=r.b,i=t(It,r,$c(e)),o=t(zm,n,a);return z(Of,o,e,i,0)}else return cc},Mm=v(function(e,r){var n=e,a=r,i=n.dT,o=i,l=n.dS,c=l;return{io:a.io*c.io+a.is*o.io,is:a.io*c.is+a.is*o.is,dU:a.io*c.dU+a.is*o.dU}}),Ji=function(e){var r=e;return za(r)},Dc=function(e){return Ct(2*qn*e)},pw=Dr,Tm=pw({dl:Pt,dS:Af,dT:Wl}),km=function(){var e=72,r=t(fw,e,Dc(1)),n=na(1),a=Ma(Fl),i=Ma(Jv),o=na(1),l=t(Be,.5,o),c=b(We,Ir,Ir,l),u=t(Be,-.5,o),m=b(We,Ir,Ir,u),s=function(f){var _=t(Be,f,r),x=Ma(t(Mm,Tm,Pm(_))),y=t(Be,Vt(_),n),S=t(Be,Ji(_),n),w=b(We,y,S,l),C=b(We,y,S,u),A=t(wi,e,f+1),q=t(Be,A,r),K=Ma(t(Mm,Tm,Pm(q))),G=t(Be,Vt(q),n),Y=t(Be,Ji(q),n),X=b(We,G,Y,u),V=b(We,G,Y,l);return $([E({q:i,cx:m},{q:i,cx:X},{q:i,cx:C}),E({q:x,cx:C},{q:K,cx:X},{q:K,cx:V}),E({q:x,cx:C},{q:K,cx:V},{q:x,cx:w}),E({q:a,cx:c},{q:a,cx:w},{q:a,cx:V})])},d=t(J,s,t(Ur,0,e-1)),g=gc(ar(d));return lc(dw(g))}(),Dm=am(km),gw=function(e){var r=e;return r.gm},hw=function(e){var r=e;return r.dl},bw=function(e){var r=gw(e),n=Jl(r),a=n.a,i=n.b;return vn({dl:hw(e),dS:a,dT:i,dV:r})},_w=function(e){var r=e;return r.g5},xw=function(e){var r=e;return r.hs},ww=O(function(e,r,n,a){var i=bw(vw(a)),o=t(Sc,n,km),l=function(){var d=P(e,r);return d.a?d.b?Tt($([o,qi(Dm)])):o:d.b?qi(Dm):B}(),c=xw(a),u=c,m=_w(a),s=m;return t(wm,i,t(Mc,E(u,u,s),l))}),yw=v(function(e,r){return z(ww,!0,!0,e,r)}),Fm={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Im={src:`
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
    `,attributes:{triangleVertex:"dI"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",triangleVertexPositions:"bU",viewMatrix:"g"}},Rt=function(e){var r=Ft(e),n=r.a,a=r.b,i=r.c,o=Ba(n),l=Ba(a),c=Ba(i);return qr({eu:o.io,ev:l.io,ew:c.io,ex:0,ey:o.is,ez:l.is,eA:c.is,eB:0,eC:o.dU,eD:l.dU,eE:c.dU,eF:0,eG:0,eH:0,eI:0,eJ:0})},Yi=Qf($([E({dI:0},{dI:1},{dI:2})])),Sw=v(function(e,r){var n=Yf(r),a=ie(n);switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var i=e.b.a;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){return F(ze,b($r,q,0,X),Fm,bc,Yi,{aO:i,c:A,d:C,e:G,f:w,bU:Rt(r),g:K})}));case 1:if(e.b.$)return e.a,B;var o=e.b.a,l=e.c;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){return F(ze,b($r,q,0,X),Fm,_c,Yi,{a6:t(ji,At(l),o),c:A,d:C,e:G,f:w,bU:Rt(r),g:K})}));case 2:e.a;var c=e.b,u=e.c,m=t(hm,c,u);if(m.$)return B;var s=m.a;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){var V=Y.a,ne=Y.b;return F(ze,b($r,q,0,X),Im,vm,Yi,{U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dd:s,c:A,d:C,e:G,f:w,bU:Rt(r),g:K})}));default:e.a;var d=e.b,g=e.c,f=e.d,u=e.e,_=z(bm,d,g,f,u);if(_.$)return B;var x=_.a,y=_.b,S=_.c;return t(Oe,a,be(function(w,C,A,q,K,G,Y,X){var V=Y.a,ne=Y.b;return F(ze,b($r,q,0,X),Im,pm,Yi,{cR:x,U:ne,bF:V.bF,cm:V.cm,cn:V.cn,co:V.co,dg:S,c:A,d:C,e:G,dA:y,f:w,bU:Rt(r),g:K})}))}}),Cw=function(){var e=$([{bl:t(hr,0,1)},{bl:t(hr,1,1)},{bl:t(hr,2,1)},{bl:t(hr,0,-1)},{bl:t(hr,1,-1)},{bl:t(hr,2,-1)}]),r=$([E(0,1,2),E(3,5,4),E(3,4,1),E(3,1,0),E(4,5,2),E(4,2,1),E(5,3,0),E(5,0,2)]);return t(It,e,r)}(),Lw={src:`
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
    `,attributes:{triangleShadowVertex:"bl"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",triangleVertexPositions:"bU",viewMatrix:"g"}},Am=function(e){return Oi(be(function(r,n,a,i,o,l,c,u){return F(ze,t(kc,i,u),Lw,Tc,Cw,{c:a,d:n,e:l,f:r,cD:c,bU:Rt(e),g:o})}))},Pw=O(function(e,r,n,a){var i=t(Sw,n,a),o=P(e,r);return o.a?o.b?Tt($([i,Am(a)])):i:o.b?Am(a):B}),zw=v(function(e,r){return z(Pw,!0,!0,e,r)}),Mw=v(function(e,r){var n=Kn(r),a=Kn(e),i=Xn(r),o=Xn(e),l=Yn(r),c=Yn(e);return{eL:t(Ee,c,l),eM:t(Ee,o,i),eN:t(Ee,a,n),eO:t(je,c,l),eP:t(je,o,i),eQ:t(je,a,n)}}),Tw=function(e){var r=jl(e),n=r.a,a=r.b;return t(Mw,n,a)},Em={src:`
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
    `,attributes:{lineSegmentVertex:"es"},uniforms:{lineSegmentEndPoint:"eq",lineSegmentStartPoint:"er",modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",viewMatrix:"g"}},kw=v(function(e,r){return{$:1,a:e,b:r}}),Dw=kw({d5:2,ei:0,eS:1}),Bm=Dw($([P({es:0},{es:1})])),Fw=v(function(e,r){var n=Tw(r),a=ie(n),i=jl(r),o=i.a,l=i.b;switch(e.$){case 0:if(e.b.$)return e.a,e.b.a.E,B;var c=e.b.a;return t(Oe,a,be(function(m,s,d,g,f,_,x,y){return F(ze,y,Em,bc,Bm,{aO:c,eq:ur(l),er:ur(o),c:d,d:s,e:_,f:m,g:f})}));case 1:if(e.b.$)return B;var c=e.b.a,u=e.c;return t(Oe,a,be(function(s,d,g,f,_,x,y,S){return F(ze,S,Em,_c,Bm,{a6:t(ji,At(u),c),eq:ur(l),er:ur(o),c:g,d,e:x,f:s,g:_})}));case 2:return B;default:return B}}),Iw=v(function(e,r){return t(Fw,e,r)}),Vm=v(function(e,r){var n=e,a=r;return n/a}),Aw=Ve(function(e,r,n,a,i){e:for(;;){var o=a(r/n),l=t(M,o,i);if(ce(r,e))return l;var c=e,u=r-1,m=n,s=a,d=l;e=c,r=u,n=m,a=s,i=d;continue e}}),Rm=v(function(e,r){return e<1?D:F(Aw,0,e,e,r,D)}),Ew=v(function(e,r){var n=e.cx,a=e.q,i=e.O,o=i,l=o.a,c=o.b;return t(M,{q:Vi(a),cx:ur(n),O:t(hr,l,c)},r)}),Bw=function(e){var r=b(bu,Ew,D,mc(e));if(r.b){var n=r.a,a=r.b,i=t(It,r,$c(e)),o=t(zm,n,a);return z(qf,o,e,i,0)}else return cc},Um=v(function(e,r){var n=e,a=r,i=ra(a);return{io:i*ra(n),is:i*za(n),dU:za(a)}}),Vw=function(){var e=na(1),r=72,n=t(Ur,0,r-1),a=t(Rm,r,t(Bt,Ir,Dc(1))),i=Xa(r/2),o=t(Ur,0,i-1),l=t(Rm,i,t(Bt,zt(90),zt(-90))),c=dc(ar(t(J,function(s){return t(J,function(d){return{q:Ma(t(Um,s,d)),cx:b(We,t(Be,Vt(d)*Vt(s),e),t(Be,Vt(d)*Ji(s),e),t(Be,Ji(d),e)),O:P(t(Vm,s,Dc(1)),t(Vm,t(Mt,zt(90),d),zt(180)))}},l)},a))),u=v(function(s,d){return s*(i+1)+d}),m=ar(t(J,function(s){return ar(t(J,function(d){var g=t(u,s+1,d),f=t(u,s,d),_=t(u,s+1,d+1),x=t(u,s,d+1);return $([E(x,_,g),E(x,g,f)])},o))},n));return lc(Bw(t(rm,c,m)))}(),Xi=72,Ki=2*Xi,Rw=v(function(e,r){e:for(;;){var n=Ki+1,a=t(wi,Ki,2*e+3),i=t(wi,Ki,2*e+2),o=2*e+1,l=2*e,c=Ki,u=t(M,E(c,l,i),t(M,E(l,a,i),t(M,E(l,o,a),t(M,E(o,n,a),r))));if(e){var m=e-1,s=u;e=m,r=s;continue e}else return u}}),Uw=T(function(e,r,n){return n<=.5?e+n*(r-e):r+(1-n)*(e-r)}),jw=v(function(e,r){e:for(;;){var n=b(Uw,0,2*qn,e/Xi),a={b_:n,ct:0,cA:1},i={b_:n,ct:1,cA:1},o=t(M,a,t(M,i,r));if(e){var l=e-1,c=o;e=l,r=c;continue e}else return o}}),Nw=function(){var e=t(jw,Xi-1,$([{b_:0,ct:0,cA:0},{b_:0,ct:1,cA:0}])),r=t(Rw,Xi-1,D);return t(It,e,r)}(),Hw={src:`
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
    `,attributes:{angle:"b_",offsetScale:"ct",radiusScale:"cA"},uniforms:{modelMatrix:"c",modelScale:"d",projectionMatrix:"e",sceneProperties:"f",shadowLight:"cD",viewMatrix:"g"}},jm=function(e){return Oi(be(function(r,n,a,i,o,l,c,u){return F(ze,t(kc,!0,u),Hw,Tc,Nw,{aO:b(yt,0,0,1),c:a,d:n,e:l,f:r,cD:c,g:o})}))},Gw=function(e){var r=Kf(e);return{ek:!0,t:1,u:0,v:0,w:0,x:1,y:0,z:0,A:0,B:1,K:r.io,L:r.is,M:r.dU,cC:1}},Ww=v(function(e,r){return t(xm,Gw(e),r)}),Ow=O(function(e,r,n,a){var i=t(Sc,n,Vw),o=function(){var u=P(e,r);return u.a?u.b?Tt($([i,jm()])):i:u.b?jm():B}(),l=Hl(a),c=l;return t(Ww,t(Di,Pt,Nl(a)),t(Mc,E(c,c,c),o))}),qw=v(function(e,r){return z(Ow,!0,!0,e,r)}),Jw=T(function(e,r,n){return{$:1,a:e,b:r,c:n}}),Yw=Ve(function(e,r,n,a,i){return{$:3,a:e,b:r,c:n,d:a,e:i}}),Xw=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return t(Lm,r,n);case 1:var r=e.a,n=e.b,a=e.c;return b(Jw,r,n,a);case 2:var r=e.a,n=e.b,i=e.c;return b(Kv,r,n,i);default:var r=e.a,n=e.b,o=e.c,l=e.d,i=e.e;return F(Yw,r,n,o,l,i)}},Kw=Xw,Nm=function(e){switch(e.$){case 0:var r=e.a,n=e.b;return $([t(cw,r,n)]);case 1:var r=e.a,a=e.b;return $([t(zw,r,a)]);case 3:var r=e.a,i=e.b;return $([t(qw,Kw(r),i)]);case 2:var r=e.a,o=e.b;return $([t(yw,r,o)]);case 4:var l=e.a,c=e.b;return $([t(Iw,$w(l),c)]);default:var u=e.a;return t(da,Nm,u)}},Zw=function(e){return t(da,Nm,e)},Qw=v(function(e,r){return ax({a1:h_(e.fO),f0:e.f0,a3:b_(.5),cX:e.cX,a4:P($f(Le(e.dC.im)),$f(Le(e.dC.gH))),a8:Zw(r),hI:!0,hZ:t(Um,Ct(e.hY),Ct(e.h_)),fm:Ef})}),ey=z(bt,255/255,255/255,255/255,1),ry=v(function(e,r){return t(Qw,{fO:ey,f0:g_({d9:{io:t(fn,"camera x",e),is:t(fn,"camera y",e),dU:t(fn,"camera z",e)},ba:{io:0,is:0,dU:0},fm:{io:0,is:1,dU:0}}),cX:e.cX,dC:e.dC,hY:-yi(135),h_:-yi(45)},$([n_(e)]))}),ny=z(u1,ry,d1,s1,$1);const ay={Main:{init:ny(t(W,function(e){return nr({gY:e})},t(H,"inputs",t(W,function(e){return t(W,function(r){return t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return nr({d1:l,cX:o,gp:i,g3:a,hq:n,dC:r,il:e})},t(H,"clock",Re))},t(H,"devicePixelRatio",Re))},t(H,"dt",Re))},t(H,"keyboard",t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return t(W,function(s){return t(W,function(d){return nr({fJ:d,gd:s,d4:m,go:u,g4:c,hr:l,hx:o,hJ:i,fl:a})},t(H,"alt",_e))},t(H,"control",_e))},t(H,"down",_e))},t(H,"downs",li(fa)))},t(H,"left",_e))},t(H,"pressedKeys",li(fa)))},t(H,"right",_e))},t(H,"shift",_e))},t(H,"up",_e))))},t(H,"pointer",t(W,function(n){return t(W,function(a){return t(W,function(i){return t(W,function(o){return t(W,function(l){return t(W,function(c){return t(W,function(u){return t(W,function(m){return nr({d4:m,g$:u,ha:c,hy:l,hz:o,fl:i,io:a,is:n})},t(H,"down",_e))},t(H,"isDown",_e))},t(H,"move",_e))},t(H,"rightDown",_e))},t(H,"rightUp",_e))},t(H,"up",_e))},t(H,"x",Re))},t(H,"y",Re))))},t(H,"screen",t(W,function(r){return t(W,function(n){return nr({gH:n,im:r})},t(H,"height",Re))},t(H,"width",Re))))},t(H,"wheel",t(W,function(e){return t(W,function(r){return nr({gh:r,gi:e})},t(H,"deltaX",Re))},t(H,"deltaY",Re)))))))(0)}},Z={dt:0,clock:0,keyboard:{pressedKeys:[],control:!1,alt:!1,shift:!1,left:!1,right:!1,up:!1,down:!1,downs:[]},pointer:{x:0,y:0,isDown:!1,down:!1,move:!1,up:!1,rightDown:!1,rightUp:!1},wheel:{deltaX:0,deltaY:0},screen:{width:window.innerWidth,height:window.innerHeight},devicePixelRatio:window.devicePixelRatio},ty=e=>{const r=f=>["ControlLeft","ControlRight","MetaLeft","MetaRight"].includes(f.code),n=f=>["AltLeft","AltRight"].includes(f.code),a=f=>["ShiftLeft","ShiftRight"].includes(f.code),i=f=>f.code=="ArrowLeft",o=f=>f.code=="ArrowRight",l=f=>f.code=="ArrowUp",c=f=>f.code=="ArrowDown",u=f=>f.button==0,m=f=>f.button==2;function s(f){f.keyboard.pressedKeys=[],f.keyboard.control=!1,f.keyboard.alt=!1,f.keyboard.shift=!1,f.keyboard.left=!1,f.keyboard.right=!1,f.keyboard.up=!1,f.keyboard.down=!1,f.pointer.isDown=!1}function d(f){f.keyboard.downs=[],f.pointer.down=!1,f.pointer.move=!1,f.pointer.up=!1,f.pointer.rightDown=!1,f.pointer.rightUp=!1,f.wheel.deltaX=0,f.wheel.deltaY=0}window.addEventListener("keydown",f=>{f.repeat||(Z.keyboard.downs.push(f.code),Z.keyboard.pressedKeys.push(f.code),r(f)&&(Z.keyboard.control=!0),n(f)&&(Z.keyboard.alt=!0),a(f)&&(console.log("yo"),Z.keyboard.shift=!0),i(f)&&(Z.keyboard.left=!0),o(f)&&(Z.keyboard.right=!0),l(f)&&(Z.keyboard.up=!0),c(f)&&(console.log("yey"),Z.keyboard.down=!0))}),window.addEventListener("keyup",f=>{Z.keyboard.pressedKeys=Z.keyboard.pressedKeys.filter(_=>_!=f.code),r(f)&&(Z.keyboard.control=!1,Z.keyboard.pressedKeys=[]),n(f)&&(Z.keyboard.alt=!1),a(f)&&(Z.keyboard.shift=!1),i(f)&&(Z.keyboard.left=!1),o(f)&&(Z.keyboard.right=!1),l(f)&&(Z.keyboard.up=!1),c(f)&&(Z.keyboard.down=!1)}),window.addEventListener("pointerdown",f=>{Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY,u(f)&&(Z.pointer.down=!0,Z.pointer.isDown=!0),m(f)&&(Z.pointer.rightDown=!0)}),window.addEventListener("pointermove",f=>{Z.pointer.move=!0,Z.pointer.x=-.5*Z.screen.width+f.pageX,Z.pointer.y=.5*Z.screen.height-f.pageY}),window.addEventListener("pointerup",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("pointercancel",f=>{u(f)&&(Z.pointer.up=!0,Z.pointer.isDown=!1),m(f)&&(Z.pointer.rightUp=!0)}),window.addEventListener("wheel",f=>{Z.wheel.deltaX=f.deltaX,Z.wheel.deltaY=f.deltaY}),window.addEventListener("blur",f=>{s(Z)}),window.addEventListener("focus",f=>{s(Z)}),window.addEventListener("visibilitychange",f=>{s(Z)}),window.addEventListener("resize",()=>{Z.screen={width:window.innerWidth,height:window.innerHeight}}),window.requestAnimationFrame(g);function g(f){const _=f/1e3,x=_-Z.clock;x<.009||(Z.dt=x,Z.clock=_,e.ports.tick.send(Z),d(Z)),window.requestAnimationFrame(g)}},iy=ay.Main.init({node:document.querySelector("#app div"),flags:{inputs:Z}});ty(iy);
